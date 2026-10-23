(()=>{var Pd=0,wh=1,Ld=2;var La=1,Dd=2,Er=3,ds=0,On=1,Di=2,Ni=0,Tr=1,Eh=2,Th=3,Ah=4,Nd=5;var Us=100,Ud=101,Fd=102,Od=103,Bd=104,zd=200,kd=201,Vd=202,Hd=203,Ch=204,Rh=205,Gd=206,Wd=207,$d=208,Xd=209,qd=210,Yd=211,Zd=212,Jd=213,Kd=214,Lo=0,Do=1,No=2,dr=3,Uo=4,Fo=5,Oo=6,Bo=7,yl=0,jd=1,Qd=2,yi=0,Ih=1,Ph=2,Lh=3,Dh=4,Nh=5,Uh=6,Fh=7;var Oh=300,fs=301,Fs=302,Sl=303,Ml=304,Da=306,zo=1e3,Ai=1001,ko=1002,dn=1003,tf=1004;var Na=1005;var xn=1006,bl=1007;var ps=1008;var Gn=1009,Bh=1010,zh=1011,Ar=1012,wl=1013,Si=1014,Mi=1015,bi=1016,El=1017,Tl=1018,Cr=1020,kh=35902,Vh=35899,Hh=1021,Gh=1022,ci=1023,Ri=1026,ms=1027,Wh=1028,Al=1029,gs=1030,Cl=1031;var Rl=1033,Ua=33776,Fa=33777,Oa=33778,Ba=33779,Il=35840,Pl=35841,Ll=35842,Dl=35843,Nl=36196,Ul=37492,Fl=37496,Ol=37488,Bl=37489,za=37490,zl=37491,kl=37808,Vl=37809,Hl=37810,Gl=37811,Wl=37812,$l=37813,Xl=37814,ql=37815,Yl=37816,Zl=37817,Jl=37818,Kl=37819,jl=37820,Ql=37821,tc=36492,ec=36494,nc=36495,ic=36283,sc=36284,ka=36285,rc=36286;var ea=2300,Vo=2301,Io=2302,uh=2303,dh=2400,fh=2401,ph=2402;var ef=3200;var ac=0,nf=1,Ki="",Kn="srgb",na="srgb-linear",ia="linear",ze="srgb";var Po=7680;var sf=519,rf=512,af=513,of=514,oc=515,lf=516,cf=517,lc=518,hf=519,$h=35044;var Xh="300 es",_i=2e3,fr=2001;function Hp(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Gp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function sa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function uf(){let i=sa("canvas");return i.style.display="block",i}var Zu={},pr=null;function ra(...i){let t="THREE."+i.shift();pr?pr("log",t,...i):console.log(t,...i)}function df(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function re(...i){i=df(i);let t="THREE."+i.shift();if(pr)pr("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function le(...i){i=df(i);let t="THREE."+i.shift();if(pr)pr("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Cs(...i){let t=i.join(" ");t in Zu||(Zu[t]=!0,re(...i))}function ff(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var pf={[Lo]:Do,[No]:Oo,[Uo]:Bo,[dr]:Fo,[Do]:Lo,[Oo]:No,[Bo]:Uo,[Fo]:dr},Ii=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},An=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ju=1234567,Kr=Math.PI/180,mr=180/Math.PI;function Ci(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(An[i&255]+An[i>>8&255]+An[i>>16&255]+An[i>>24&255]+"-"+An[t&255]+An[t>>8&255]+"-"+An[t>>16&15|64]+An[t>>24&255]+"-"+An[e&63|128]+An[e>>8&255]+"-"+An[e>>16&255]+An[e>>24&255]+An[n&255]+An[n>>8&255]+An[n>>16&255]+An[n>>24&255]).toLowerCase()}function _e(i,t,e){return Math.max(t,Math.min(e,i))}function qh(i,t){return(i%t+t)%t}function Wp(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function $p(i,t,e){return i!==t?(e-i)/(t-i):0}function jr(i,t,e){return(1-e)*i+e*t}function Xp(i,t,e,n){return jr(i,t,1-Math.exp(-e*n))}function qp(i,t=1){return t-Math.abs(qh(i,t*2)-t)}function Yp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Zp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Jp(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Kp(i,t){return i+Math.random()*(t-i)}function jp(i){return i*(.5-Math.random())}function Qp(i){i!==void 0&&(Ju=i);let t=Ju+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function tm(i){return i*Kr}function em(i){return i*mr}function nm(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function im(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function sm(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function rm(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),p=r((t-n)/2),u=a((t-n)/2),m=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*p,l*u,o*c);break;case"YZY":i.set(l*u,o*h,l*p,o*c);break;case"ZXZ":i.set(l*p,l*u,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*m,o*c);break;case"YXY":i.set(l*m,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*m,o*h,o*c);break;default:re("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function gi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ve(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Yh={DEG2RAD:Kr,RAD2DEG:mr,generateUUID:Ci,clamp:_e,euclideanModulo:qh,mapLinear:Wp,inverseLerp:$p,lerp:jr,damp:Xp,pingpong:qp,smoothstep:Yp,smootherstep:Zp,randInt:Jp,randFloat:Kp,randFloatSpread:jp,seededRandom:Qp,degToRad:tm,radToDeg:em,isPowerOfTwo:nm,ceilPowerOfTwo:im,floorPowerOfTwo:sm,setQuaternionFromProperEuler:rm,normalize:Ve,denormalize:gi},It=class i{static{i.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=_e(this.x,t.x,e.x),this.y=_e(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=_e(this.x,t,e),this.y=_e(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(_e(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(_e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Pi=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],p=n[s+3],u=r[a+0],m=r[a+1],g=r[a+2],b=r[a+3];if(p!==b||l!==u||c!==m||h!==g){let f=l*u+c*m+h*g+p*b;f<0&&(u=-u,m=-m,g=-g,b=-b,f=-f);let d=1-o;if(f<.9995){let R=Math.acos(f),P=Math.sin(R);d=Math.sin(d*R)/P,o=Math.sin(o*R)/P,l=l*d+u*o,c=c*d+m*o,h=h*d+g*o,p=p*d+b*o}else{l=l*d+u*o,c=c*d+m*o,h=h*d+g*o,p=p*d+b*o;let R=1/Math.sqrt(l*l+c*c+h*h+p*p);l*=R,c*=R,h*=R,p*=R}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=p}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],p=r[a],u=r[a+1],m=r[a+2],g=r[a+3];return t[e]=o*g+h*p+l*m-c*u,t[e+1]=l*g+h*u+c*p-o*m,t[e+2]=c*g+h*m+o*u-l*p,t[e+3]=h*g-o*p-l*u-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),p=o(r/2),u=l(n/2),m=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*p+c*m*g,this._y=c*m*p-u*h*g,this._z=c*h*g+u*m*p,this._w=c*h*p-u*m*g;break;case"YXZ":this._x=u*h*p+c*m*g,this._y=c*m*p-u*h*g,this._z=c*h*g-u*m*p,this._w=c*h*p+u*m*g;break;case"ZXY":this._x=u*h*p-c*m*g,this._y=c*m*p+u*h*g,this._z=c*h*g+u*m*p,this._w=c*h*p-u*m*g;break;case"ZYX":this._x=u*h*p-c*m*g,this._y=c*m*p+u*h*g,this._z=c*h*g-u*m*p,this._w=c*h*p+u*m*g;break;case"YZX":this._x=u*h*p+c*m*g,this._y=c*m*p+u*h*g,this._z=c*h*g-u*m*p,this._w=c*h*p-u*m*g;break;case"XZY":this._x=u*h*p-c*m*g,this._y=c*m*p-u*h*g,this._z=c*h*g+u*m*p,this._w=c*h*p+u*m*g;break;default:re("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],p=e[10],u=n+o+p;if(u>0){let m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(n>o&&n>p){let m=2*Math.sqrt(1+n-o-p);this._w=(h-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>p){let m=2*Math.sqrt(1+o-n-p);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+p-n-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(_e(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class i{static{i.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ku.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ku.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),p=2*(r*n-a*e);return this.x=e+l*c+a*p-o*h,this.y=n+l*h+o*c-r*p,this.z=s+l*p+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=_e(this.x,t.x,e.x),this.y=_e(this.y,t.y,e.y),this.z=_e(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=_e(this.x,t,e),this.y=_e(this.y,t,e),this.z=_e(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(_e(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return zc.copy(this).projectOnVector(t),this.sub(zc)}reflect(t){return this.sub(zc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(_e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},zc=new U,Ku=new Pi,pe=class i{static{i.prototype.isMatrix3=!0}constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],p=n[7],u=n[2],m=n[5],g=n[8],b=s[0],f=s[3],d=s[6],R=s[1],P=s[4],M=s[7],S=s[2],T=s[5],N=s[8];return r[0]=a*b+o*R+l*S,r[3]=a*f+o*P+l*T,r[6]=a*d+o*M+l*N,r[1]=c*b+h*R+p*S,r[4]=c*f+h*P+p*T,r[7]=c*d+h*M+p*N,r[2]=u*b+m*R+g*S,r[5]=u*f+m*P+g*T,r[8]=u*d+m*M+g*N,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],p=h*a-o*c,u=o*l-h*r,m=c*r-a*l,g=e*p+n*u+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/g;return t[0]=p*b,t[1]=(s*c-h*n)*b,t[2]=(o*n-s*a)*b,t[3]=u*b,t[4]=(h*e-s*l)*b,t[5]=(s*r-o*e)*b,t[6]=m*b,t[7]=(n*l-c*e)*b,t[8]=(a*e-n*r)*b,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Cs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(kc.makeScale(t,e)),this}rotate(t){return Cs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(kc.makeRotation(-t)),this}translate(t,e){return Cs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(kc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},kc=new pe,ju=new pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Qu=new pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function am(){let i={enabled:!0,workingColorSpace:na,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ze&&(s.r=Zi(s.r),s.g=Zi(s.g),s.b=Zi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ze&&(s.r=ur(s.r),s.g=ur(s.g),s.b=ur(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ki?ia:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Cs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Cs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[na]:{primaries:t,whitePoint:n,transfer:ia,toXYZ:ju,fromXYZ:Qu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Kn},outputColorSpaceConfig:{drawingBufferColorSpace:Kn}},[Kn]:{primaries:t,whitePoint:n,transfer:ze,toXYZ:ju,fromXYZ:Qu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Kn}}}),i}var Re=am();function Zi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ur(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Js,Ho=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Js===void 0&&(Js=sa("canvas")),Js.width=t.width,Js.height=t.height;let s=Js.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Js}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=sa("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Zi(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Zi(e[n]/255)*255):e[n]=Zi(e[n]);return{data:e,width:t.width,height:t.height}}else return re("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},om=0,gr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:om++}),this.uuid=Ci(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Vc(s[a].image)):r.push(Vc(s[a]))}else r=Vc(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Vc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ho.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(re("Texture: Unable to serialize Texture."),{})}var lm=0,Hc=new U,Vn=class i extends Ii{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Ai,s=Ai,r=xn,a=ps,o=ci,l=Gn,c=i.DEFAULT_ANISOTROPY,h=Ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lm++}),this.uuid=Ci(),this.name="",this.source=new gr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new It(0,0),this.repeat=new It(1,1),this.center=new It(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Hc).x}get height(){return this.source.getSize(Hc).y}get depth(){return this.source.getSize(Hc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){re(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){re(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Oh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case zo:t.x=t.x-Math.floor(t.x);break;case Ai:t.x=t.x<0?0:1;break;case ko:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case zo:t.y=t.y-Math.floor(t.y);break;case Ai:t.y=t.y<0?0:1;break;case ko:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Vn.DEFAULT_IMAGE=null;Vn.DEFAULT_MAPPING=Oh;Vn.DEFAULT_ANISOTROPY=1;var ke=class i{static{i.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],p=l[8],u=l[1],m=l[5],g=l[9],b=l[2],f=l[6],d=l[10];if(Math.abs(h-u)<.01&&Math.abs(p-b)<.01&&Math.abs(g-f)<.01){if(Math.abs(h+u)<.1&&Math.abs(p+b)<.1&&Math.abs(g+f)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let P=(c+1)/2,M=(m+1)/2,S=(d+1)/2,T=(h+u)/4,N=(p+b)/4,v=(g+f)/4;return P>M&&P>S?P<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(P),s=T/n,r=N/n):M>S?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=T/s,r=v/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=N/r,s=v/r),this.set(n,s,r,e),this}let R=Math.sqrt((f-g)*(f-g)+(p-b)*(p-b)+(u-h)*(u-h));return Math.abs(R)<.001&&(R=1),this.x=(f-g)/R,this.y=(p-b)/R,this.z=(u-h)/R,this.w=Math.acos((c+m+d-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=_e(this.x,t.x,e.x),this.y=_e(this.y,t.y,e.y),this.z=_e(this.z,t.z,e.z),this.w=_e(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=_e(this.x,t,e),this.y=_e(this.y,t,e),this.z=_e(this.z,t,e),this.w=_e(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(_e(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Go=class extends Ii{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ke(0,0,t,e),this.scissorTest=!1,this.viewport=new ke(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Vn(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:xn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new gr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Hn=class extends Go{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},aa=class extends Vn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Wo=class extends Vn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var He=class i{static{i.prototype.isMatrix4=!0}constructor(t,e,n,s,r,a,o,l,c,h,p,u,m,g,b,f){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,p,u,m,g,b,f)}set(t,e,n,s,r,a,o,l,c,h,p,u,m,g,b,f){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=p,d[14]=u,d[3]=m,d[7]=g,d[11]=b,d[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Ks.setFromMatrixColumn(t,0).length(),r=1/Ks.setFromMatrixColumn(t,1).length(),a=1/Ks.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),p=Math.sin(r);if(t.order==="XYZ"){let u=a*h,m=a*p,g=o*h,b=o*p;e[0]=l*h,e[4]=-l*p,e[8]=c,e[1]=m+g*c,e[5]=u-b*c,e[9]=-o*l,e[2]=b-u*c,e[6]=g+m*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,m=l*p,g=c*h,b=c*p;e[0]=u+b*o,e[4]=g*o-m,e[8]=a*c,e[1]=a*p,e[5]=a*h,e[9]=-o,e[2]=m*o-g,e[6]=b+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,m=l*p,g=c*h,b=c*p;e[0]=u-b*o,e[4]=-a*p,e[8]=g+m*o,e[1]=m+g*o,e[5]=a*h,e[9]=b-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,m=a*p,g=o*h,b=o*p;e[0]=l*h,e[4]=g*c-m,e[8]=u*c+b,e[1]=l*p,e[5]=b*c+u,e[9]=m*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,m=a*c,g=o*l,b=o*c;e[0]=l*h,e[4]=b-u*p,e[8]=g*p+m,e[1]=p,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=m*p+g,e[10]=u-b*p}else if(t.order==="XZY"){let u=a*l,m=a*c,g=o*l,b=o*c;e[0]=l*h,e[4]=-p,e[8]=c*h,e[1]=u*p+b,e[5]=a*h,e[9]=m*p-g,e[2]=g*p-m,e[6]=o*h,e[10]=b*p+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(cm,t,hm)}lookAt(t,e,n){let s=this.elements;return Zn.subVectors(t,e),Zn.lengthSq()===0&&(Zn.z=1),Zn.normalize(),es.crossVectors(n,Zn),es.lengthSq()===0&&(Math.abs(n.z)===1?Zn.x+=1e-4:Zn.z+=1e-4,Zn.normalize(),es.crossVectors(n,Zn)),es.normalize(),io.crossVectors(Zn,es),s[0]=es.x,s[4]=io.x,s[8]=Zn.x,s[1]=es.y,s[5]=io.y,s[9]=Zn.y,s[2]=es.z,s[6]=io.z,s[10]=Zn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],p=n[5],u=n[9],m=n[13],g=n[2],b=n[6],f=n[10],d=n[14],R=n[3],P=n[7],M=n[11],S=n[15],T=s[0],N=s[4],v=s[8],A=s[12],k=s[1],G=s[5],Z=s[9],J=s[13],H=s[2],q=s[6],lt=s[10],et=s[14],gt=s[3],nt=s[7],ct=s[11],ft=s[15];return r[0]=a*T+o*k+l*H+c*gt,r[4]=a*N+o*G+l*q+c*nt,r[8]=a*v+o*Z+l*lt+c*ct,r[12]=a*A+o*J+l*et+c*ft,r[1]=h*T+p*k+u*H+m*gt,r[5]=h*N+p*G+u*q+m*nt,r[9]=h*v+p*Z+u*lt+m*ct,r[13]=h*A+p*J+u*et+m*ft,r[2]=g*T+b*k+f*H+d*gt,r[6]=g*N+b*G+f*q+d*nt,r[10]=g*v+b*Z+f*lt+d*ct,r[14]=g*A+b*J+f*et+d*ft,r[3]=R*T+P*k+M*H+S*gt,r[7]=R*N+P*G+M*q+S*nt,r[11]=R*v+P*Z+M*lt+S*ct,r[15]=R*A+P*J+M*et+S*ft,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],p=t[6],u=t[10],m=t[14],g=t[3],b=t[7],f=t[11],d=t[15],R=l*m-c*u,P=o*m-c*p,M=o*u-l*p,S=a*m-c*h,T=a*u-l*h,N=a*p-o*h;return e*(b*R-f*P+d*M)-n*(g*R-f*S+d*T)+s*(g*P-b*S+d*N)-r*(g*M-b*T+f*N)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],p=t[9],u=t[10],m=t[11],g=t[12],b=t[13],f=t[14],d=t[15],R=e*o-n*a,P=e*l-s*a,M=e*c-r*a,S=n*l-s*o,T=n*c-r*o,N=s*c-r*l,v=h*b-p*g,A=h*f-u*g,k=h*d-m*g,G=p*f-u*b,Z=p*d-m*b,J=u*d-m*f,H=R*J-P*Z+M*G+S*k-T*A+N*v;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let q=1/H;return t[0]=(o*J-l*Z+c*G)*q,t[1]=(s*Z-n*J-r*G)*q,t[2]=(b*N-f*T+d*S)*q,t[3]=(u*T-p*N-m*S)*q,t[4]=(l*k-a*J-c*A)*q,t[5]=(e*J-s*k+r*A)*q,t[6]=(f*M-g*N-d*P)*q,t[7]=(h*N-u*M+m*P)*q,t[8]=(a*Z-o*k+c*v)*q,t[9]=(n*k-e*Z-r*v)*q,t[10]=(g*T-b*M+d*R)*q,t[11]=(p*M-h*T-m*R)*q,t[12]=(o*A-a*G-l*v)*q,t[13]=(e*G-n*A+s*v)*q,t[14]=(b*P-g*S-f*R)*q,t[15]=(h*S-p*P+u*R)*q,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,p=o+o,u=r*c,m=r*h,g=r*p,b=a*h,f=a*p,d=o*p,R=l*c,P=l*h,M=l*p,S=n.x,T=n.y,N=n.z;return s[0]=(1-(b+d))*S,s[1]=(m+M)*S,s[2]=(g-P)*S,s[3]=0,s[4]=(m-M)*T,s[5]=(1-(u+d))*T,s[6]=(f+R)*T,s[7]=0,s[8]=(g+P)*N,s[9]=(f-R)*N,s[10]=(1-(u+b))*N,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Ks.set(s[0],s[1],s[2]).length(),o=Ks.set(s[4],s[5],s[6]).length(),l=Ks.set(s[8],s[9],s[10]).length();r<0&&(a=-a),di.copy(this);let c=1/a,h=1/o,p=1/l;return di.elements[0]*=c,di.elements[1]*=c,di.elements[2]*=c,di.elements[4]*=h,di.elements[5]*=h,di.elements[6]*=h,di.elements[8]*=p,di.elements[9]*=p,di.elements[10]*=p,e.setFromRotationMatrix(di),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=_i,l=!1){let c=this.elements,h=2*r/(e-t),p=2*r/(n-s),u=(e+t)/(e-t),m=(n+s)/(n-s),g,b;if(l)g=r/(a-r),b=a*r/(a-r);else if(o===_i)g=-(a+r)/(a-r),b=-2*a*r/(a-r);else if(o===fr)g=-a/(a-r),b=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=p,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=_i,l=!1){let c=this.elements,h=2/(e-t),p=2/(n-s),u=-(e+t)/(e-t),m=-(n+s)/(n-s),g,b;if(l)g=1/(a-r),b=a/(a-r);else if(o===_i)g=-2/(a-r),b=-(a+r)/(a-r);else if(o===fr)g=-1/(a-r),b=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=p,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=g,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Ks=new U,di=new He,cm=new U(0,0,0),hm=new U(1,1,1),es=new U,io=new U,Zn=new U,td=new He,ed=new Pi,Ji=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],p=s[2],u=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(_e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-_e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(_e(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-_e(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(_e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-_e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:re("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return td.makeRotationFromQuaternion(t),this.setFromRotationMatrix(td,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ed.setFromEuler(this),this.setFromQuaternion(ed,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ji.DEFAULT_ORDER="XYZ";var _r=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},um=0,nd=new U,js=new Pi,Wi=new He,so=new U,$r=new U,dm=new U,fm=new Pi,id=new U(1,0,0),sd=new U(0,1,0),rd=new U(0,0,1),ad={type:"added"},pm={type:"removed"},Qs={type:"childadded",child:null},Gc={type:"childremoved",child:null},fn=class i extends Ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:um++}),this.uuid=Ci(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new U,e=new Ji,n=new Pi,s=new U(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new He},normalMatrix:{value:new pe}}),this.matrix=new He,this.matrixWorld=new He,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _r,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return js.setFromAxisAngle(t,e),this.quaternion.multiply(js),this}rotateOnWorldAxis(t,e){return js.setFromAxisAngle(t,e),this.quaternion.premultiply(js),this}rotateX(t){return this.rotateOnAxis(id,t)}rotateY(t){return this.rotateOnAxis(sd,t)}rotateZ(t){return this.rotateOnAxis(rd,t)}translateOnAxis(t,e){return nd.copy(t).applyQuaternion(this.quaternion),this.position.add(nd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(id,t)}translateY(t){return this.translateOnAxis(sd,t)}translateZ(t){return this.translateOnAxis(rd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Wi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?so.copy(t):so.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),$r.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wi.lookAt($r,so,this.up):Wi.lookAt(so,$r,this.up),this.quaternion.setFromRotationMatrix(Wi),s&&(Wi.extractRotation(s.matrixWorld),js.setFromRotationMatrix(Wi),this.quaternion.premultiply(js.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(le("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ad),Qs.child=t,this.dispatchEvent(Qs),Qs.child=null):le("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(pm),Gc.child=t,this.dispatchEvent(Gc),Gc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Wi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Wi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Wi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ad),Qs.child=t,this.dispatchEvent(Qs),Qs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($r,t,dm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($r,fm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let p=l[c];r(t.shapes,p)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),p=a(t.shapes),u=a(t.skeletons),m=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),p.length>0&&(n.shapes=p),u.length>0&&(n.skeletons=u),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};fn.DEFAULT_UP=new U(0,1,0);fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var xi=class extends fn{constructor(){super(),this.isGroup=!0,this.type="Group"}},mm={type:"move"},xr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let b of t.hand.values()){let f=e.getJointPose(b,n),d=this._getHandJoint(c,b);f!==null&&(d.matrix.fromArray(f.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=f.radius),d.visible=f!==null}let h=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],u=h.position.distanceTo(p.position),m=.02,g=.005;c.inputState.pinching&&u>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(mm)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new xi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},mf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ns={h:0,s:0,l:0},ro={h:0,s:0,l:0};function Wc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var oe=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Kn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Re.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Re.workingColorSpace){return this.r=t,this.g=e,this.b=n,Re.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Re.workingColorSpace){if(t=qh(t,1),e=_e(e,0,1),n=_e(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Wc(a,r,t+1/3),this.g=Wc(a,r,t),this.b=Wc(a,r,t-1/3)}return Re.colorSpaceToWorking(this,s),this}setStyle(t,e=Kn){function n(r){r!==void 0&&parseFloat(r)<1&&re("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:re("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);re("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Kn){let n=mf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):re("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Zi(t.r),this.g=Zi(t.g),this.b=Zi(t.b),this}copyLinearToSRGB(t){return this.r=ur(t.r),this.g=ur(t.g),this.b=ur(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Kn){return Re.workingToColorSpace(Cn.copy(this),t),Math.round(_e(Cn.r*255,0,255))*65536+Math.round(_e(Cn.g*255,0,255))*256+Math.round(_e(Cn.b*255,0,255))}getHexString(t=Kn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Re.workingColorSpace){Re.workingToColorSpace(Cn.copy(this),e);let n=Cn.r,s=Cn.g,r=Cn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let p=a-o;switch(c=h<=.5?p/(a+o):p/(2-a-o),a){case n:l=(s-r)/p+(s<r?6:0);break;case s:l=(r-n)/p+2;break;case r:l=(n-s)/p+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Re.workingColorSpace){return Re.workingToColorSpace(Cn.copy(this),e),t.r=Cn.r,t.g=Cn.g,t.b=Cn.b,t}getStyle(t=Kn){Re.workingToColorSpace(Cn.copy(this),t);let e=Cn.r,n=Cn.g,s=Cn.b;return t!==Kn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ns),this.setHSL(ns.h+t,ns.s+e,ns.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ns),t.getHSL(ro);let n=jr(ns.h,ro.h,e),s=jr(ns.s,ro.s,e),r=jr(ns.l,ro.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Cn=new oe;oe.NAMES=mf;var oa=class extends fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ji,this.environmentIntensity=1,this.environmentRotation=new Ji,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},fi=new U,$i=new U,$c=new U,Xi=new U,tr=new U,er=new U,od=new U,Xc=new U,qc=new U,Yc=new U,Zc=new ke,Jc=new ke,Kc=new ke,as=class i{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),fi.subVectors(t,e),s.cross(fi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){fi.subVectors(s,e),$i.subVectors(n,e),$c.subVectors(t,e);let a=fi.dot(fi),o=fi.dot($i),l=fi.dot($c),c=$i.dot($i),h=$i.dot($c),p=a*c-o*o;if(p===0)return r.set(0,0,0),null;let u=1/p,m=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-m-g,g,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Xi)===null?!1:Xi.x>=0&&Xi.y>=0&&Xi.x+Xi.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Xi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Xi.x),l.addScaledVector(a,Xi.y),l.addScaledVector(o,Xi.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Zc.setScalar(0),Jc.setScalar(0),Kc.setScalar(0),Zc.fromBufferAttribute(t,e),Jc.fromBufferAttribute(t,n),Kc.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Zc,r.x),a.addScaledVector(Jc,r.y),a.addScaledVector(Kc,r.z),a}static isFrontFacing(t,e,n,s){return fi.subVectors(n,e),$i.subVectors(t,e),fi.cross($i).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return fi.subVectors(this.c,this.b),$i.subVectors(this.a,this.b),fi.cross($i).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;tr.subVectors(s,n),er.subVectors(r,n),Xc.subVectors(t,n);let l=tr.dot(Xc),c=er.dot(Xc);if(l<=0&&c<=0)return e.copy(n);qc.subVectors(t,s);let h=tr.dot(qc),p=er.dot(qc);if(h>=0&&p<=h)return e.copy(s);let u=l*p-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(tr,a);Yc.subVectors(t,r);let m=tr.dot(Yc),g=er.dot(Yc);if(g>=0&&m<=g)return e.copy(r);let b=m*c-l*g;if(b<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(er,o);let f=h*g-m*p;if(f<=0&&p-h>=0&&m-g>=0)return od.subVectors(r,s),o=(p-h)/(p-h+(m-g)),e.copy(s).addScaledVector(od,o);let d=1/(f+b+u);return a=b*d,o=u*d,e.copy(n).addScaledVector(tr,a).addScaledVector(er,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},jn=class{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(pi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(pi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=pi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,pi):pi.fromBufferAttribute(r,a),pi.applyMatrix4(t.matrixWorld),this.expandByPoint(pi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ao.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ao.copy(n.boundingBox)),ao.applyMatrix4(t.matrixWorld),this.union(ao)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,pi),pi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Xr),oo.subVectors(this.max,Xr),nr.subVectors(t.a,Xr),ir.subVectors(t.b,Xr),sr.subVectors(t.c,Xr),is.subVectors(ir,nr),ss.subVectors(sr,ir),bs.subVectors(nr,sr);let e=[0,-is.z,is.y,0,-ss.z,ss.y,0,-bs.z,bs.y,is.z,0,-is.x,ss.z,0,-ss.x,bs.z,0,-bs.x,-is.y,is.x,0,-ss.y,ss.x,0,-bs.y,bs.x,0];return!jc(e,nr,ir,sr,oo)||(e=[1,0,0,0,1,0,0,0,1],!jc(e,nr,ir,sr,oo))?!1:(lo.crossVectors(is,ss),e=[lo.x,lo.y,lo.z],jc(e,nr,ir,sr,oo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,pi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(pi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(qi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},qi=[new U,new U,new U,new U,new U,new U,new U,new U],pi=new U,ao=new jn,nr=new U,ir=new U,sr=new U,is=new U,ss=new U,bs=new U,Xr=new U,oo=new U,lo=new U,ws=new U;function jc(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ws.fromArray(i,r);let o=s.x*Math.abs(ws.x)+s.y*Math.abs(ws.y)+s.z*Math.abs(ws.z),l=t.dot(ws),c=e.dot(ws),h=n.dot(ws);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var sn=new U,co=new It,gm=0,$e=class extends Ii{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:gm++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=$h,this.updateRanges=[],this.gpuType=Mi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)co.fromBufferAttribute(this,e),co.applyMatrix3(t),this.setXY(e,co.x,co.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)sn.fromBufferAttribute(this,e),sn.applyMatrix3(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)sn.fromBufferAttribute(this,e),sn.applyMatrix4(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)sn.fromBufferAttribute(this,e),sn.applyNormalMatrix(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)sn.fromBufferAttribute(this,e),sn.transformDirection(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=gi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ve(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=gi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=gi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=gi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=gi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array),s=Ve(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array),s=Ve(s,this.array),r=Ve(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var la=class extends $e{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ca=class extends $e{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var an=class extends $e{constructor(t,e,n){super(new Float32Array(t),e,n)}},_m=new jn,qr=new U,Qc=new U,li=class{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):_m.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;qr.subVectors(t,this.center);let e=qr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(qr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Qc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(qr.copy(t.center).add(Qc)),this.expandByPoint(qr.copy(t.center).sub(Qc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},xm=0,oi=new He,th=new fn,rr=new U,Jn=new jn,Yr=new jn,un=new U,tn=class i extends Ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xm++}),this.uuid=Ci(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Hp(t)?ca:la)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new pe().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return oi.makeRotationFromQuaternion(t),this.applyMatrix4(oi),this}rotateX(t){return oi.makeRotationX(t),this.applyMatrix4(oi),this}rotateY(t){return oi.makeRotationY(t),this.applyMatrix4(oi),this}rotateZ(t){return oi.makeRotationZ(t),this.applyMatrix4(oi),this}translate(t,e,n){return oi.makeTranslation(t,e,n),this.applyMatrix4(oi),this}scale(t,e,n){return oi.makeScale(t,e,n),this.applyMatrix4(oi),this}lookAt(t){return th.lookAt(t),th.updateMatrix(),this.applyMatrix4(th.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rr).negate(),this.translate(rr.x,rr.y,rr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new an(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&re("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){le("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Jn.setFromBufferAttribute(r),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,Jn.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,Jn.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint(Jn.min),this.boundingBox.expandByPoint(Jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&le('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new li);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){le("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){let n=this.boundingSphere.center;if(Jn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Yr.setFromBufferAttribute(o),this.morphTargetsRelative?(un.addVectors(Jn.min,Yr.min),Jn.expandByPoint(un),un.addVectors(Jn.max,Yr.max),Jn.expandByPoint(un)):(Jn.expandByPoint(Yr.min),Jn.expandByPoint(Yr.max))}Jn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)un.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(un));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)un.fromBufferAttribute(o,c),l&&(rr.fromBufferAttribute(t,c),un.add(rr)),s=Math.max(s,n.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&le('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){le("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new $e(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let v=0;v<n.count;v++)o[v]=new U,l[v]=new U;let c=new U,h=new U,p=new U,u=new It,m=new It,g=new It,b=new U,f=new U;function d(v,A,k){c.fromBufferAttribute(n,v),h.fromBufferAttribute(n,A),p.fromBufferAttribute(n,k),u.fromBufferAttribute(r,v),m.fromBufferAttribute(r,A),g.fromBufferAttribute(r,k),h.sub(c),p.sub(c),m.sub(u),g.sub(u);let G=1/(m.x*g.y-g.x*m.y);isFinite(G)&&(b.copy(h).multiplyScalar(g.y).addScaledVector(p,-m.y).multiplyScalar(G),f.copy(p).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(G),o[v].add(b),o[A].add(b),o[k].add(b),l[v].add(f),l[A].add(f),l[k].add(f))}let R=this.groups;R.length===0&&(R=[{start:0,count:t.count}]);for(let v=0,A=R.length;v<A;++v){let k=R[v],G=k.start,Z=k.count;for(let J=G,H=G+Z;J<H;J+=3)d(t.getX(J+0),t.getX(J+1),t.getX(J+2))}let P=new U,M=new U,S=new U,T=new U;function N(v){S.fromBufferAttribute(s,v),T.copy(S);let A=o[v];P.copy(A),P.sub(S.multiplyScalar(S.dot(A))).normalize(),M.crossVectors(T,A);let G=M.dot(l[v])<0?-1:1;a.setXYZW(v,P.x,P.y,P.z,G)}for(let v=0,A=R.length;v<A;++v){let k=R[v],G=k.start,Z=k.count;for(let J=G,H=G+Z;J<H;J+=3)N(t.getX(J+0)),N(t.getX(J+1)),N(t.getX(J+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new $e(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,m=n.count;u<m;u++)n.setXYZ(u,0,0,0);let s=new U,r=new U,a=new U,o=new U,l=new U,c=new U,h=new U,p=new U;if(t)for(let u=0,m=t.count;u<m;u+=3){let g=t.getX(u+0),b=t.getX(u+1),f=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,b),a.fromBufferAttribute(e,f),h.subVectors(a,r),p.subVectors(s,r),h.cross(p),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,f),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let u=0,m=e.count;u<m;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),p.subVectors(s,r),h.cross(p),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)un.fromBufferAttribute(t,e),un.normalize(),t.setXYZ(e,un.x,un.y,un.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,p=o.normalized,u=new c.constructor(l.length*h),m=0,g=0;for(let b=0,f=l.length;b<f;b++){o.isInterleavedBufferAttribute?m=l[b]*o.data.stride+o.offset:m=l[b]*h;for(let d=0;d<h;d++)u[g++]=c[m++]}return new $e(u,h,p)}if(this.index===null)return re("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,p=c.length;h<p;h++){let u=c[h],m=t(u,n);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let p=0,u=c.length;p<u;p++){let m=c[p];h.push(m.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],p=r[c];for(let u=0,m=p.length;u<m;u++)h.push(p[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let p=a[c];this.addGroup(p.start,p.count,p.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},$o=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=$h,this.updateRanges=[],this.version=0,this.uuid=Ci()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ci()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ci()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},Fn=new U,vi=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Fn.fromBufferAttribute(this,e),Fn.applyMatrix4(t),this.setXYZ(e,Fn.x,Fn.y,Fn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Fn.fromBufferAttribute(this,e),Fn.applyNormalMatrix(t),this.setXYZ(e,Fn.x,Fn.y,Fn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Fn.fromBufferAttribute(this,e),Fn.transformDirection(t),this.setXYZ(e,Fn.x,Fn.y,Fn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=gi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ve(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Ve(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ve(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ve(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ve(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=gi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=gi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=gi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=gi(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array),s=Ve(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array),s=Ve(s,this.array),r=Ve(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){ra("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new $e(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){ra("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},eh=new U,vm=new U,ym=new pe,mi=class{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=eh.subVectors(n,e).cross(vm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(eh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||ym.getNormalMatrix(t),s=this.coplanarPoint(eh).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Sm=0,Li=class extends Ii{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sm++}),this.uuid=Ci(),this.name="",this.type="Material",this.blending=Tr,this.side=ds,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ch,this.blendDst=Rh,this.blendEquation=Us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new oe(0,0,0),this.blendAlpha=0,this.depthFunc=dr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Po,this.stencilZFail=Po,this.stencilZPass=Po,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){re(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){re(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new oe().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new mi().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new It().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new It().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Yi=new U,nh=new U,ho=new U,uo=new U,Rs=class{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Yi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Yi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Yi.copy(this.origin).addScaledVector(this.direction,e),Yi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){nh.copy(t).add(e).multiplyScalar(.5),ho.copy(e).sub(t).normalize(),uo.copy(this.origin).sub(nh);let r=t.distanceTo(e)*.5,a=-this.direction.dot(ho),o=uo.dot(this.direction),l=-uo.dot(ho),c=uo.lengthSq(),h=Math.abs(1-a*a),p,u,m,g;if(h>0)if(p=a*l-o,u=a*o-l,g=r*h,p>=0)if(u>=-g)if(u<=g){let b=1/h;p*=b,u*=b,m=p*(p+a*u+2*o)+u*(a*p+u+2*l)+c}else u=r,p=Math.max(0,-(a*u+o)),m=-p*p+u*(u+2*l)+c;else u=-r,p=Math.max(0,-(a*u+o)),m=-p*p+u*(u+2*l)+c;else u<=-g?(p=Math.max(0,-(-a*r+o)),u=p>0?-r:Math.min(Math.max(-r,-l),r),m=-p*p+u*(u+2*l)+c):u<=g?(p=0,u=Math.min(Math.max(-r,-l),r),m=u*(u+2*l)+c):(p=Math.max(0,-(a*r+o)),u=p>0?r:Math.min(Math.max(-r,-l),r),m=-p*p+u*(u+2*l)+c);else u=a>0?-r:r,p=Math.max(0,-(a*u+o)),m=-p*p+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(nh).addScaledVector(ho,u),m}intersectSphere(t,e){if(t.radius<0)return null;Yi.subVectors(t.center,this.origin);let n=Yi.dot(this.direction),s=Yi.dot(Yi)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),p>=0?(o=(t.min.z-u.z)*p,l=(t.max.z-u.z)*p):(o=(t.max.z-u.z)*p,l=(t.min.z-u.z)*p),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Yi)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,p=t.x-a.x,u=t.y-a.y,m=t.z-a.z,g=e.x-a.x,b=e.y-a.y,f=e.z-a.z,d=n.x-a.x,R=n.y-a.y,P=n.z-a.z,M=Math.abs(l),S=Math.abs(c),T=Math.abs(h),N,v,A,k,G,Z,J,H,q,lt,et,gt;if(M>=S&&M>=T?(A=l,Z=p,q=g,gt=d,l>=0?(N=c,v=h,k=u,G=m,J=b,H=f,lt=R,et=P):(N=h,v=c,k=m,G=u,J=f,H=b,lt=P,et=R)):S>=T?(A=c,Z=u,q=b,gt=R,c>=0?(N=h,v=l,k=m,G=p,J=f,H=g,lt=P,et=d):(N=l,v=h,k=p,G=m,J=g,H=f,lt=d,et=P)):(A=h,Z=m,q=f,gt=P,h>=0?(N=l,v=c,k=p,G=u,J=g,H=b,lt=d,et=R):(N=c,v=l,k=u,G=p,J=b,H=g,lt=R,et=d)),A===0)return null;let nt=N/A,ct=v/A,ft=1/A,Zt=k-nt*Z,Vt=G-ct*Z,Pe=J-nt*q,Me=H-ct*q,Ce=lt-nt*gt,j=et-ct*gt,ht=Ce*Me-j*Pe,Rt=Zt*j-Vt*Ce,ee=Pe*Vt-Me*Zt;if(s){if(ht<0||Rt<0||ee<0)return null}else if((ht<0||Rt<0||ee<0)&&(ht>0||Rt>0||ee>0))return null;let At=ht+Rt+ee;if(At===0)return null;let Gt=ft*(ht*Z+Rt*q+ee*gt);return(At>0?Gt<0:Gt>0)?null:this.at(Gt/At,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ha=class extends Li{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ji,this.combine=yl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},ld=new He,Es=new Rs,fo=new li,cd=new U,po=new U,mo=new U,go=new U,ih=new U,_o=new U,hd=new U,xo=new U,In=class extends fn{constructor(t=new tn,e=new ha){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){_o.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],p=r[l];h!==0&&(ih.fromBufferAttribute(p,t),a?_o.addScaledVector(ih,h):_o.addScaledVector(ih.sub(e),h))}e.add(_o)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),fo.copy(n.boundingSphere),fo.applyMatrix4(r),Es.copy(t.ray).recast(t.near),!(fo.containsPoint(Es.origin)===!1&&(Es.intersectSphere(fo,cd)===null||Es.origin.distanceToSquared(cd)>(t.far-t.near)**2))&&(ld.copy(r).invert(),Es.copy(t.ray).applyMatrix4(ld),!(n.boundingBox!==null&&Es.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Es)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,p=r.attributes.normal,u=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,b=u.length;g<b;g++){let f=u[g],d=a[f.materialIndex],R=Math.max(f.start,m.start),P=Math.min(o.count,Math.min(f.start+f.count,m.start+m.count));for(let M=R,S=P;M<S;M+=3){let T=o.getX(M),N=o.getX(M+1),v=o.getX(M+2);s=vo(this,d,t,n,c,h,p,T,N,v),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{let g=Math.max(0,m.start),b=Math.min(o.count,m.start+m.count);for(let f=g,d=b;f<d;f+=3){let R=o.getX(f),P=o.getX(f+1),M=o.getX(f+2);s=vo(this,a,t,n,c,h,p,R,P,M),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,b=u.length;g<b;g++){let f=u[g],d=a[f.materialIndex],R=Math.max(f.start,m.start),P=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let M=R,S=P;M<S;M+=3){let T=M,N=M+1,v=M+2;s=vo(this,d,t,n,c,h,p,T,N,v),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{let g=Math.max(0,m.start),b=Math.min(l.count,m.start+m.count);for(let f=g,d=b;f<d;f+=3){let R=f,P=f+1,M=f+2;s=vo(this,a,t,n,c,h,p,R,P,M),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}}};function Mm(i,t,e,n,s,r,a,o){let l;if(t.side===On?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===ds,o),l===null)return null;xo.copy(o),xo.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(xo);return c<e.near||c>e.far?null:{distance:c,point:xo.clone(),object:i}}function vo(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,po),i.getVertexPosition(l,mo),i.getVertexPosition(c,go);let h=Mm(i,t,e,n,po,mo,go,hd);if(h){let p=new U;as.getBarycoord(hd,po,mo,go,p),s&&(h.uv=as.getInterpolatedAttribute(s,o,l,c,p,new It)),r&&(h.uv1=as.getInterpolatedAttribute(r,o,l,c,p,new It)),a&&(h.normal=as.getInterpolatedAttribute(a,o,l,c,p,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new U,materialIndex:0};as.getNormal(po,mo,go,u.normal),h.face=u,h.barycoord=p}return h}var Xo=class extends Vn{constructor(t=null,e=1,n=1,s,r,a,o,l,c=dn,h=dn,p,u){super(null,a,o,l,c,h,s,r,p,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ts=new li,bm=new It(.5,.5),yo=new U,vr=class{constructor(t=new mi,e=new mi,n=new mi,s=new mi,r=new mi,a=new mi){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=_i,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],p=r[5],u=r[6],m=r[7],g=r[8],b=r[9],f=r[10],d=r[11],R=r[12],P=r[13],M=r[14],S=r[15];if(s[0].setComponents(c-a,m-h,d-g,S-R).normalize(),s[1].setComponents(c+a,m+h,d+g,S+R).normalize(),s[2].setComponents(c+o,m+p,d+b,S+P).normalize(),s[3].setComponents(c-o,m-p,d-b,S-P).normalize(),n)s[4].setComponents(l,u,f,M).normalize(),s[5].setComponents(c-l,m-u,d-f,S-M).normalize();else if(s[4].setComponents(c-l,m-u,d-f,S-M).normalize(),e===_i)s[5].setComponents(c+l,m+u,d+f,S+M).normalize();else if(e===fr)s[5].setComponents(l,u,f,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ts.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ts.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ts)}intersectsSprite(t){Ts.center.set(0,0,0);let e=bm.distanceTo(t.center);return Ts.radius=.7071067811865476+e,Ts.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ts)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(yo.x=s.normal.x>0?t.max.x:t.min.x,yo.y=s.normal.y>0?t.max.y:t.min.y,yo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(yo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Is=class extends Li{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new oe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},qo=new U,Yo=new U,ud=new He,Zr=new Rs,So=new li,sh=new U,dd=new U,Zo=class extends fn{constructor(t=new tn,e=new Is){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)qo.fromBufferAttribute(e,s-1),Yo.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=qo.distanceTo(Yo);t.setAttribute("lineDistance",new an(n,1))}else re("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),So.copy(n.boundingSphere),So.applyMatrix4(s),So.radius+=r,t.ray.intersectsSphere(So)===!1)return;ud.copy(s).invert(),Zr.copy(t.ray).applyMatrix4(ud);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let m=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let b=m,f=g-1;b<f;b+=c){let d=h.getX(b),R=h.getX(b+1),P=Mo(this,t,Zr,l,d,R,b);P&&e.push(P)}if(this.isLineLoop){let b=h.getX(g-1),f=h.getX(m),d=Mo(this,t,Zr,l,b,f,g-1);d&&e.push(d)}}else{let m=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let b=m,f=g-1;b<f;b+=c){let d=Mo(this,t,Zr,l,b,b+1,b);d&&e.push(d)}if(this.isLineLoop){let b=Mo(this,t,Zr,l,g-1,m,g-1);b&&e.push(b)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Mo(i,t,e,n,s,r,a){let o=i.geometry.attributes.position;if(qo.fromBufferAttribute(o,s),Yo.fromBufferAttribute(o,r),e.distanceSqToSegment(qo,Yo,sh,dd)>n)return;sh.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(sh);if(!(c<t.near||c>t.far))return{distance:c,point:dd.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var ua=class extends Zo{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},Jo=class extends Li{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},fd=new He,mh=new Rs,bo=new li,wo=new U,Ps=class extends fn{constructor(t=new tn,e=new Jo){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),bo.copy(n.boundingSphere),bo.applyMatrix4(s),bo.radius+=r,t.ray.intersectsSphere(bo)===!1)return;fd.copy(s).invert(),mh.copy(t.ray).applyMatrix4(fd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,p=n.attributes.position;if(c!==null){let u=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let g=u,b=m;g<b;g++){let f=c.getX(g);wo.fromBufferAttribute(p,f),pd(wo,f,l,s,t,e,this)}}else{let u=Math.max(0,a.start),m=Math.min(p.count,a.start+a.count);for(let g=u,b=m;g<b;g++)wo.fromBufferAttribute(p,g),pd(wo,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function pd(i,t,e,n,s,r,a){let o=mh.distanceSqToPoint(i);if(o<e){let l=new U;mh.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var da=class extends Vn{constructor(t=[],e=fs,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var os=class extends Vn{constructor(t,e,n=Si,s,r,a,o=dn,l=dn,c,h=Ri,p=1){if(h!==Ri&&h!==ms)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:p};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new gr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Ko=class extends os{constructor(t,e=Si,n=fs,s,r,a=dn,o=dn,l,c=Ri){let h={width:t,height:t,depth:1},p=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},fa=class extends Vn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},yr=class i extends tn{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],p=[],u=0,m=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new an(c,3)),this.setAttribute("normal",new an(h,3)),this.setAttribute("uv",new an(p,2));function g(b,f,d,R,P,M,S,T,N,v,A){let k=M/N,G=S/v,Z=M/2,J=S/2,H=T/2,q=N+1,lt=v+1,et=0,gt=0,nt=new U;for(let ct=0;ct<lt;ct++){let ft=ct*G-J;for(let Zt=0;Zt<q;Zt++){let Vt=Zt*k-Z;nt[b]=Vt*R,nt[f]=ft*P,nt[d]=H,c.push(nt.x,nt.y,nt.z),nt[b]=0,nt[f]=0,nt[d]=T>0?1:-1,h.push(nt.x,nt.y,nt.z),p.push(Zt/N),p.push(1-ct/v),et+=1}}for(let ct=0;ct<v;ct++)for(let ft=0;ft<N;ft++){let Zt=u+ft+q*ct,Vt=u+ft+q*(ct+1),Pe=u+(ft+1)+q*(ct+1),Me=u+(ft+1)+q*ct;l.push(Zt,Vt,Me),l.push(Vt,Pe,Me),gt+=6}o.addGroup(m,gt,A),m+=gt,u+=et}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Qn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){re("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,m=(a-h)/u;return(s+m)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new It:new U);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new U,s=[],r=[],a=[],o=new U,l=new He;for(let m=0;m<=t;m++){let g=m/t;s[m]=this.getTangentAt(g,new U)}r[0]=new U,a[0]=new U;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),p=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),p<=c&&(c=p,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let m=1;m<=t;m++){if(r[m]=r[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(s[m-1],s[m]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(_e(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(l.makeRotationAxis(o,g))}a[m].crossVectors(s[m],r[m])}if(e===!0){let m=Math.acos(_e(r[0].dot(r[t]),-1,1));m/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(m=-m);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],m*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Sr=class extends Qn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new It){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),p=Math.sin(this.aRotation),u=l-this.aX,m=c-this.aY;l=u*h-m*p+this.aX,c=u*p+m*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},jo=class extends Sr{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Zh(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,p){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,m=(o-a)/h-(l-a)/(h+p)+(l-o)/p;u*=h,m*=h,s(a,o,u,m)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var md=new U,gd=new U,rh=new Zh,ah=new Zh,oh=new Zh,Qo=class extends Qn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new U){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(gd.subVectors(s[0],s[1]).add(s[0]),c=gd);let p=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(md.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=md),this.curveType==="centripetal"||this.curveType==="chordal"){let m=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(p),m),b=Math.pow(p.distanceToSquared(u),m),f=Math.pow(u.distanceToSquared(h),m);b<1e-4&&(b=1),g<1e-4&&(g=b),f<1e-4&&(f=b),rh.initNonuniformCatmullRom(c.x,p.x,u.x,h.x,g,b,f),ah.initNonuniformCatmullRom(c.y,p.y,u.y,h.y,g,b,f),oh.initNonuniformCatmullRom(c.z,p.z,u.z,h.z,g,b,f)}else this.curveType==="catmullrom"&&(rh.initCatmullRom(c.x,p.x,u.x,h.x,this.tension),ah.initCatmullRom(c.y,p.y,u.y,h.y,this.tension),oh.initCatmullRom(c.z,p.z,u.z,h.z,this.tension));return n.set(rh.calc(l),ah.calc(l),oh.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new U().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function _d(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function wm(i,t){let e=1-i;return e*e*t}function Em(i,t){return 2*(1-i)*i*t}function Tm(i,t){return i*i*t}function Qr(i,t,e,n){return wm(i,t)+Em(i,e)+Tm(i,n)}function Am(i,t){let e=1-i;return e*e*e*t}function Cm(i,t){let e=1-i;return 3*e*e*i*t}function Rm(i,t){return 3*(1-i)*i*i*t}function Im(i,t){return i*i*i*t}function ta(i,t,e,n,s){return Am(i,t)+Cm(i,e)+Rm(i,n)+Im(i,s)}var pa=class extends Qn{constructor(t=new It,e=new It,n=new It,s=new It){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new It){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ta(t,s.x,r.x,a.x,o.x),ta(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},tl=class extends Qn{constructor(t=new U,e=new U,n=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new U){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ta(t,s.x,r.x,a.x,o.x),ta(t,s.y,r.y,a.y,o.y),ta(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ma=class extends Qn{constructor(t=new It,e=new It){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new It){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new It){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},el=class extends Qn{constructor(t=new U,e=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new U){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new U){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ga=class extends Qn{constructor(t=new It,e=new It,n=new It){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new It){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Qr(t,s.x,r.x,a.x),Qr(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},nl=class extends Qn{constructor(t=new U,e=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new U){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Qr(t,s.x,r.x,a.x),Qr(t,s.y,r.y,a.y),Qr(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},_a=class extends Qn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new It){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],p=s[a>s.length-3?s.length-1:a+2];return n.set(_d(o,l.x,c.x,h.x,p.x),_d(o,l.y,c.y,h.y,p.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new It().fromArray(s))}return this}},gh=Object.freeze({__proto__:null,ArcCurve:jo,CatmullRomCurve3:Qo,CubicBezierCurve:pa,CubicBezierCurve3:tl,EllipseCurve:Sr,LineCurve:ma,LineCurve3:el,QuadraticBezierCurve:ga,QuadraticBezierCurve3:nl,SplineCurve:_a}),il=class extends Qn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new gh[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new gh[s.type]().fromJSON(s))}return this}},Ls=class extends il{constructor(t){super(),this.type="Path",this.currentPoint=new It,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new ma(this.currentPoint.clone(),new It(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new ga(this.currentPoint.clone(),new It(t,e),new It(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new pa(this.currentPoint.clone(),new It(t,e),new It(n,s),new It(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new _a(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new Sr(t,e,n,s,r,a,o,l);if(this.curves.length>0){let p=c.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Mr=class extends Ls{constructor(t){super(t),this.uuid=Ci(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Ls().fromJSON(s))}return this}};function Pm(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=gf(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Fm(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let h=o,p=l;for(let u=e;u<s;u+=e){let m=i[u],g=i[u+1];m<o&&(o=m),g<l&&(l=g),m>h&&(h=m),g>p&&(p=g)}c=Math.max(h-o,p-l),c=c!==0?32767/c:0}return xa(r,a,e,o,l,c,0),a}function gf(i,t,e,n,s){let r;if(s===qm(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=xd(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=xd(a/n|0,i[a],i[a+1],r);return r&&br(r,r.next)&&(ya(r),r=r.next),r}function Ds(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(br(e,e.next)||Ke(e.prev,e,e.next)===0)){if(ya(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function xa(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Vm(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Dm(i,n,s,r):Lm(i)){t.push(l.i,i.i,c.i),ya(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Nm(Ds(i),t),xa(i,t,e,n,s,r,2)):a===2&&Um(i,t,e,n,s,r):xa(Ds(i),t,e,n,s,r,1);break}}}function Lm(i){let t=i.prev,e=i,n=i.next;if(Ke(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(s,r,a),p=Math.min(o,l,c),u=Math.max(s,r,a),m=Math.max(o,l,c),g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=p&&g.y<=m&&Jr(s,o,r,l,a,c,g.x,g.y)&&Ke(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Dm(i,t,e,n){let s=i.prev,r=i,a=i.next;if(Ke(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,p=r.y,u=a.y,m=Math.min(o,l,c),g=Math.min(h,p,u),b=Math.max(o,l,c),f=Math.max(h,p,u),d=_h(m,g,t,e,n),R=_h(b,f,t,e,n),P=i.prevZ,M=i.nextZ;for(;P&&P.z>=d&&M&&M.z<=R;){if(P.x>=m&&P.x<=b&&P.y>=g&&P.y<=f&&P!==s&&P!==a&&Jr(o,h,l,p,c,u,P.x,P.y)&&Ke(P.prev,P,P.next)>=0||(P=P.prevZ,M.x>=m&&M.x<=b&&M.y>=g&&M.y<=f&&M!==s&&M!==a&&Jr(o,h,l,p,c,u,M.x,M.y)&&Ke(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;P&&P.z>=d;){if(P.x>=m&&P.x<=b&&P.y>=g&&P.y<=f&&P!==s&&P!==a&&Jr(o,h,l,p,c,u,P.x,P.y)&&Ke(P.prev,P,P.next)>=0)return!1;P=P.prevZ}for(;M&&M.z<=R;){if(M.x>=m&&M.x<=b&&M.y>=g&&M.y<=f&&M!==s&&M!==a&&Jr(o,h,l,p,c,u,M.x,M.y)&&Ke(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Nm(i,t){let e=i;do{let n=e.prev,s=e.next.next;!br(n,s)&&xf(n,e,e.next,s)&&va(n,s)&&va(s,n)&&(t.push(n.i,e.i,s.i),ya(e),ya(e.next),e=i=s),e=e.next}while(e!==i);return Ds(e)}function Um(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Wm(a,o)){let l=vf(a,o);a=Ds(a,a.next),l=Ds(l,l.next),xa(a,t,e,n,s,r,0),xa(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Fm(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=gf(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Gm(c))}s.sort(Om);for(let r=0;r<s.length;r++)e=Bm(s[r],e);return e}function Om(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Bm(i,t){let e=zm(i,t);if(!e)return t;let n=vf(e,i);return Ds(n,n.next),Ds(e,e.next)}function zm(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(br(i,e))return e;do{if(br(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let p=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(p<=n&&p>r&&(r=p,a=e.x<e.next.x?e:e.next,p===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&_f(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let p=Math.abs(s-e.y)/(n-e.x);va(e,i)&&(p<h||p===h&&(e.x>a.x||e.x===a.x&&km(a,e)))&&(a=e,h=p)}e=e.next}while(e!==o);return a}function km(i,t){return Ke(i.prev,i,t.prev)<0&&Ke(t.next,i,i.next)<0}function Vm(i,t,e,n){let s=i;do s.z===0&&(s.z=_h(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Hm(s)}function Hm(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function _h(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Gm(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function _f(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Jr(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&_f(i,t,e,n,s,r,a,o)}function Wm(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!$m(i,t)&&(va(i,t)&&va(t,i)&&Xm(i,t)&&(Ke(i.prev,i,t.prev)||Ke(i,t.prev,t))||br(i,t)&&Ke(i.prev,i,i.next)>0&&Ke(t.prev,t,t.next)>0)}function Ke(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function br(i,t){return i.x===t.x&&i.y===t.y}function xf(i,t,e,n){let s=To(Ke(i,t,e)),r=To(Ke(i,t,n)),a=To(Ke(e,n,i)),o=To(Ke(e,n,t));return!!(s!==r&&a!==o||s===0&&Eo(i,e,t)||r===0&&Eo(i,n,t)||a===0&&Eo(e,i,n)||o===0&&Eo(e,t,n))}function Eo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function To(i){return i>0?1:i<0?-1:0}function $m(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&xf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function va(i,t){return Ke(i.prev,i,i.next)<0?Ke(i,t,i.next)>=0&&Ke(i,i.prev,t)>=0:Ke(i,t,i.prev)<0||Ke(i,i.next,t)<0}function Xm(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function vf(i,t){let e=xh(i.i,i.x,i.y),n=xh(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function xd(i,t,e,n){let s=xh(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ya(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function xh(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function qm(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var vh=class{static triangulate(t,e,n=2){return Pm(t,e,n)}},As=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];vd(t),yd(n,t);let a=t.length;e.forEach(vd);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,yd(n,e[l]);let o=vh.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function vd(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function yd(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Sa=class i extends tn{constructor(t=new Mr([new It(.5,.5),new It(-.5,.5),new It(-.5,-.5),new It(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new an(s,3)),this.setAttribute("uv",new an(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,p=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,m=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:m-.1,b=e.bevelOffset!==void 0?e.bevelOffset:0,f=e.bevelSegments!==void 0?e.bevelSegments:3,d=e.extrudePath,R=e.UVGenerator!==void 0?e.UVGenerator:Ym,P,M=!1,S,T,N,v;if(d){P=d.getSpacedPoints(h),M=!0,u=!1;let D=d.isCatmullRomCurve3?d.closed:!1;S=d.computeFrenetFrames(h,D),T=new U,N=new U,v=new U}u||(f=0,m=0,g=0,b=0);let A=o.extractPoints(c),k=A.shape,G=A.holes;if(!As.isClockWise(k)){k=k.reverse();for(let D=0,pt=G.length;D<pt;D++){let vt=G[D];As.isClockWise(vt)&&(G[D]=vt.reverse())}}function J(D){let vt=10000000000000001e-36,xt=D[0];for(let yt=1;yt<=D.length;yt++){let te=yt%D.length,Qt=D[te],zt=Qt.x-xt.x,ce=Qt.y-xt.y,F=zt*zt+ce*ce,Ne=Math.max(Math.abs(Qt.x),Math.abs(Qt.y),Math.abs(xt.x),Math.abs(xt.y)),ve=vt*Ne*Ne;if(F<=ve){D.splice(te,1),yt--;continue}xt=Qt}}J(k),G.forEach(J);let H=G.length,q=k;for(let D=0;D<H;D++){let pt=G[D];k=k.concat(pt)}function lt(D,pt,vt){return pt||le("ExtrudeGeometry: vec does not exist"),D.clone().addScaledVector(pt,vt)}let et=k.length;function gt(D,pt,vt){let xt,yt,te,Qt=D.x-pt.x,zt=D.y-pt.y,ce=vt.x-D.x,F=vt.y-D.y,Ne=Qt*Qt+zt*zt,ve=Qt*F-zt*ce;if(Math.abs(ve)>Number.EPSILON){let E=Math.sqrt(Ne),_=Math.sqrt(ce*ce+F*F),W=pt.x-zt/E,Y=pt.y+Qt/E,st=vt.x-F/_,St=vt.y+ce/_,wt=((st-W)*F-(St-Y)*ce)/(Qt*F-zt*ce);xt=W+Qt*wt-D.x,yt=Y+zt*wt-D.y;let rt=xt*xt+yt*yt;if(rt<=2)return new It(xt,yt);te=Math.sqrt(rt/2)}else{let E=!1;Qt>Number.EPSILON?ce>Number.EPSILON&&(E=!0):Qt<-Number.EPSILON?ce<-Number.EPSILON&&(E=!0):Math.sign(zt)===Math.sign(F)&&(E=!0),E?(xt=-zt,yt=Qt,te=Math.sqrt(Ne)):(xt=Qt,yt=zt,te=Math.sqrt(Ne/2))}return new It(xt/te,yt/te)}let nt=[];for(let D=0,pt=q.length,vt=pt-1,xt=D+1;D<pt;D++,vt++,xt++)vt===pt&&(vt=0),xt===pt&&(xt=0),nt[D]=gt(q[D],q[vt],q[xt]);let ct=[],ft,Zt=nt.concat();for(let D=0,pt=H;D<pt;D++){let vt=G[D];ft=[];for(let xt=0,yt=vt.length,te=yt-1,Qt=xt+1;xt<yt;xt++,te++,Qt++)te===yt&&(te=0),Qt===yt&&(Qt=0),ft[xt]=gt(vt[xt],vt[te],vt[Qt]);ct.push(ft),Zt=Zt.concat(ft)}let Vt;if(f===0)Vt=As.triangulateShape(q,G);else{let D=[],pt=[];for(let vt=0;vt<f;vt++){let xt=vt/f,yt=m*Math.cos(xt*Math.PI/2),te=g*Math.sin(xt*Math.PI/2)+b;for(let Qt=0,zt=q.length;Qt<zt;Qt++){let ce=lt(q[Qt],nt[Qt],te);Rt(ce.x,ce.y,-yt),xt===0&&D.push(ce)}for(let Qt=0,zt=H;Qt<zt;Qt++){let ce=G[Qt];ft=ct[Qt];let F=[];for(let Ne=0,ve=ce.length;Ne<ve;Ne++){let E=lt(ce[Ne],ft[Ne],te);Rt(E.x,E.y,-yt),xt===0&&F.push(E)}xt===0&&pt.push(F)}}Vt=As.triangulateShape(D,pt)}let Pe=Vt.length,Me=g+b;for(let D=0;D<et;D++){let pt=u?lt(k[D],Zt[D],Me):k[D];M?(N.copy(S.normals[0]).multiplyScalar(pt.x),T.copy(S.binormals[0]).multiplyScalar(pt.y),v.copy(P[0]).add(N).add(T),Rt(v.x,v.y,v.z)):Rt(pt.x,pt.y,0)}for(let D=1;D<=h;D++)for(let pt=0;pt<et;pt++){let vt=u?lt(k[pt],Zt[pt],Me):k[pt];M?(N.copy(S.normals[D]).multiplyScalar(vt.x),T.copy(S.binormals[D]).multiplyScalar(vt.y),v.copy(P[D]).add(N).add(T),Rt(v.x,v.y,v.z)):Rt(vt.x,vt.y,p/h*D)}for(let D=f-1;D>=0;D--){let pt=D/f,vt=m*Math.cos(pt*Math.PI/2),xt=g*Math.sin(pt*Math.PI/2)+b;for(let yt=0,te=q.length;yt<te;yt++){let Qt=lt(q[yt],nt[yt],xt);Rt(Qt.x,Qt.y,p+vt)}for(let yt=0,te=G.length;yt<te;yt++){let Qt=G[yt];ft=ct[yt];for(let zt=0,ce=Qt.length;zt<ce;zt++){let F=lt(Qt[zt],ft[zt],xt);M?Rt(F.x,F.y+P[h-1].y,P[h-1].x+vt):Rt(F.x,F.y,p+vt)}}}Ce(),j();function Ce(){let D=s.length/3;if(u){let pt=0,vt=et*pt;for(let xt=0;xt<Pe;xt++){let yt=Vt[xt];ee(yt[2]+vt,yt[1]+vt,yt[0]+vt)}pt=h+f*2,vt=et*pt;for(let xt=0;xt<Pe;xt++){let yt=Vt[xt];ee(yt[0]+vt,yt[1]+vt,yt[2]+vt)}}else{for(let pt=0;pt<Pe;pt++){let vt=Vt[pt];ee(vt[2],vt[1],vt[0])}for(let pt=0;pt<Pe;pt++){let vt=Vt[pt];ee(vt[0]+et*h,vt[1]+et*h,vt[2]+et*h)}}n.addGroup(D,s.length/3-D,0)}function j(){let D=s.length/3,pt=0;ht(q,pt),pt+=q.length;for(let vt=0,xt=G.length;vt<xt;vt++){let yt=G[vt];ht(yt,pt),pt+=yt.length}n.addGroup(D,s.length/3-D,1)}function ht(D,pt){let vt=D.length;for(;--vt>=0;){let xt=vt,yt=vt-1;yt<0&&(yt=D.length-1);for(let te=0,Qt=h+f*2;te<Qt;te++){let zt=et*te,ce=et*(te+1),F=pt+xt+zt,Ne=pt+yt+zt,ve=pt+yt+ce,E=pt+xt+ce;At(F,Ne,ve,E)}}}function Rt(D,pt,vt){l.push(D),l.push(pt),l.push(vt)}function ee(D,pt,vt){Gt(D),Gt(pt),Gt(vt);let xt=s.length/3,yt=R.generateTopUV(n,s,xt-3,xt-2,xt-1);Le(yt[0]),Le(yt[1]),Le(yt[2])}function At(D,pt,vt,xt){Gt(D),Gt(pt),Gt(xt),Gt(pt),Gt(vt),Gt(xt);let yt=s.length/3,te=R.generateSideWallUV(n,s,yt-6,yt-3,yt-2,yt-1);Le(te[0]),Le(te[1]),Le(te[3]),Le(te[1]),Le(te[2]),Le(te[3])}function Gt(D){s.push(l[D*3+0]),s.push(l[D*3+1]),s.push(l[D*3+2])}function Le(D){r.push(D.x),r.push(D.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Zm(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new gh[s.type]().fromJSON(s)),new i(n,t.options)}},Ym={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new It(r,a),new It(o,l),new It(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],p=t[n*3+2],u=t[s*3],m=t[s*3+1],g=t[s*3+2],b=t[r*3],f=t[r*3+1],d=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new It(a,1-l),new It(c,1-p),new It(u,1-g),new It(b,1-d)]:[new It(o,1-l),new It(h,1-p),new It(m,1-g),new It(f,1-d)]}};function Zm(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Ma=class i extends tn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,p=t/o,u=e/l,m=[],g=[],b=[],f=[];for(let d=0;d<h;d++){let R=d*u-a;for(let P=0;P<c;P++){let M=P*p-r;g.push(M,-R,0),b.push(0,0,1),f.push(P/o),f.push(1-d/l)}}for(let d=0;d<l;d++)for(let R=0;R<o;R++){let P=R+c*d,M=R+c*(d+1),S=R+1+c*(d+1),T=R+1+c*d;m.push(P,M,T),m.push(M,S,T)}this.setIndex(m),this.setAttribute("position",new an(g,3)),this.setAttribute("normal",new an(b,3)),this.setAttribute("uv",new an(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var ba=class extends tn{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],n=new Set,s=new U,r=new U;if(t.index!==null){let a=t.attributes.position,o=t.index,l=t.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let p=l[c],u=p.start,m=p.count;for(let g=u,b=u+m;g<b;g+=3)for(let f=0;f<3;f++){let d=o.getX(g+f),R=o.getX(g+(f+1)%3);s.fromBufferAttribute(a,d),r.fromBufferAttribute(a,R),Sd(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{let a=t.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,p=3*o+(c+1)%3;s.fromBufferAttribute(a,h),r.fromBufferAttribute(a,p),Sd(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new an(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function Sd(i,t,e){let n=`${i.x},${i.y},${i.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${i.x},${i.y},${i.z}`;return e.has(n)===!0||e.has(s)===!0?!1:(e.add(n),e.add(s),!0)}function Os(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Md(s))s.isRenderTargetTexture?(re("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Md(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Pn(i){let t={};for(let e=0;e<i.length;e++){let n=Os(i[e]);for(let s in n)t[s]=n[s]}return t}function Md(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Jm(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Jh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Re.workingColorSpace}var Va={clone:Os,merge:Pn},Km=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,pn=class extends Li{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Km,this.fragmentShader=jm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Os(t.uniforms),this.uniformsGroups=Jm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new oe().setHex(s.value);break;case"v2":this.uniforms[n].value=new It().fromArray(s.value);break;case"v3":this.uniforms[n].value=new U().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ke().fromArray(s.value);break;case"m3":this.uniforms[n].value=new pe().fromArray(s.value);break;case"m4":this.uniforms[n].value=new He().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},sl=class extends pn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var wa=class extends Li{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ac,this.normalScale=new It(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ji,this.combine=yl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},rl=class extends Li{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ef,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},al=class extends Li{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ar(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function lh(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var ls=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ol=class extends ls{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:dh,endingEnd:dh}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case fh:r=t,o=2*e-n;break;case ph:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case fh:a=t,l=2*n-e;break;case ph:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,p=this._offsetNext,u=this._weightPrev,m=this._weightNext,g=(n-e)/(s-e),b=g*g,f=b*g,d=-u*f+2*u*b-u*g,R=(1+u)*f+(-1.5-2*u)*b+(-.5+u)*g+1,P=(-1-m)*f+(1.5+m)*b+.5*g,M=m*f-m*b;for(let S=0;S!==o;++S)r[S]=d*a[h+S]+R*a[c+S]+P*a[l+S]+M*a[p+S];return r}},ll=class extends ls{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),p=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*p+a[l+u]*h;return r}},cl=class extends ls{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},hl=class extends ls{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,p=this.outTangents;if(!h||!p){let g=(n-e)/(s-e),b=1-g;for(let f=0;f!==o;++f)r[f]=a[c+f]*b+a[l+f]*g;return r}let u=o*2,m=t-1;for(let g=0;g!==o;++g){let b=a[c+g],f=a[l+g],d=m*u+g*2,R=p[d],P=p[d+1],M=t*u+g*2,S=h[M],T=h[M+1],N=tg(n,e,R,S,s);r[g]=yf(N,b,P,T,f)}return r}};function yf(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Qm(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function tg(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=yf(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=Qm(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var ti=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ar(e,this.TimeBufferType),this.values=ar(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ar(t.times,Array),values:ar(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),lh(t.settings)&&(n.settings={inTangents:ar(t.settings.inTangents,Array),outTangents:ar(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new cl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ll(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ol(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new hl(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case ea:e=this.InterpolantFactoryMethodDiscrete;break;case Vo:e=this.InterpolantFactoryMethodLinear;break;case Io:e=this.InterpolantFactoryMethodSmooth;break;case uh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return re("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ea;case this.InterpolantFactoryMethodLinear:return Vo;case this.InterpolantFactoryMethodSmooth:return Io;case this.InterpolantFactoryMethodBezier:return uh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;lh(this.settings)&&(bd(this.settings.inTangents,t),bd(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(le("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(le("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){le("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){le("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Gp(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){le("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Io,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let p=o*n,u=p-n,m=p+n;for(let g=0;g!==n;++g){let b=e[p+g];if(b!==e[u+g]||b!==e[m+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let p=o*n,u=a*n;for(let m=0;m!==n;++m)e[u+m]=e[p+m]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,lh(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function bd(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}ti.prototype.ValueTypeName="";ti.prototype.TimeBufferType=Float32Array;ti.prototype.ValueBufferType=Float32Array;ti.prototype.DefaultInterpolation=Vo;var cs=class extends ti{constructor(t,e,n){super(t,e,n)}};cs.prototype.ValueTypeName="bool";cs.prototype.ValueBufferType=Array;cs.prototype.DefaultInterpolation=ea;cs.prototype.InterpolantFactoryMethodLinear=void 0;cs.prototype.InterpolantFactoryMethodSmooth=void 0;var ul=class extends ti{constructor(t,e,n,s){super(t,e,n,s)}};ul.prototype.ValueTypeName="color";var dl=class extends ti{constructor(t,e,n,s){super(t,e,n,s)}};dl.prototype.ValueTypeName="number";var fl=class extends ls{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)Pi.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ea=class extends ti{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new fl(this.times,this.values,this.getValueSize(),t)}};Ea.prototype.ValueTypeName="quaternion";Ea.prototype.InterpolantFactoryMethodSmooth=void 0;var hs=class extends ti{constructor(t,e,n){super(t,e,n)}};hs.prototype.ValueTypeName="string";hs.prototype.ValueBufferType=Array;hs.prototype.DefaultInterpolation=ea;hs.prototype.InterpolantFactoryMethodLinear=void 0;hs.prototype.InterpolantFactoryMethodSmooth=void 0;var pl=class extends ti{constructor(t,e,n,s){super(t,e,n,s)}};pl.prototype.ValueTypeName="vector";var ml=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,p){return c.push(h,p),this},this.removeHandler=function(h){let p=c.indexOf(h);return p!==-1&&c.splice(p,2),this},this.getHandler=function(h){for(let p=0,u=c.length;p<u;p+=2){let m=c[p],g=c[p+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Sf=new ml,gl=class{constructor(t){this.manager=t!==void 0?t:Sf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};gl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ta=class extends fn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new oe(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Aa=class extends Ta{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(fn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new oe(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},ch=new He,wd=new U,Ed=new U,_l=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new It(512,512),this.mapType=Gn,this.map=null,this.mapPass=null,this.matrix=new He,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vr,this._frameExtents=new It(1,1),this._viewportCount=1,this._viewports=[new ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;wd.setFromMatrixPosition(t.matrixWorld),e.position.copy(wd),Ed.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ed),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){ch.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(ch,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===fr||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(ch)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Ao=new U,Co=new Pi,Ti=new U,Ca=class extends fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new He,this.projectionMatrix=new He,this.projectionMatrixInverse=new He,this.coordinateSystem=_i,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ao,Co,Ti),Ti.x===1&&Ti.y===1&&Ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ao,Co,Ti.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Ao,Co,Ti),Ti.x===1&&Ti.y===1&&Ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ao,Co,Ti.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},rs=new U,Td=new It,Ad=new It,Rn=class extends Ca{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=mr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Kr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return mr*2*Math.atan(Math.tan(Kr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){rs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(rs.x,rs.y).multiplyScalar(-t/rs.z),rs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(rs.x,rs.y).multiplyScalar(-t/rs.z)}getViewSize(t,e){return this.getViewBounds(t,Td,Ad),e.subVectors(Ad,Td)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Kr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var wr=class extends Ca{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},yh=class extends _l{constructor(){super(new wr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ra=class extends Ta{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(fn.DEFAULT_UP),this.updateMatrix(),this.target=new fn,this.shadow=new yh}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Ia=class extends tn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var or=-90,lr=1,xl=class extends fn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Rn(or,lr,t,e);s.layers=this.layers,this.add(s);let r=new Rn(or,lr,t,e);r.layers=this.layers,this.add(r);let a=new Rn(or,lr,t,e);a.layers=this.layers,this.add(a);let o=new Rn(or,lr,t,e);o.layers=this.layers,this.add(o);let l=new Rn(or,lr,t,e);l.layers=this.layers,this.add(l);let c=new Rn(or,lr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===_i)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===fr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,p=t.getRenderTarget(),u=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let f=!1;t.isWebGLRenderer===!0?f=t.state.buffers.depth.getReversed():f=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=b,t.setRenderTarget(n,5,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(p,u,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},vl=class extends Rn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Kh="\\[\\]\\.:\\/",eg=new RegExp("["+Kh+"]","g"),jh="[^"+Kh+"]",ng="[^"+Kh.replace("\\.","")+"]",ig=/((?:WC+[\/:])*)/.source.replace("WC",jh),sg=/(WCOD+)?/.source.replace("WCOD",ng),rg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",jh),ag=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",jh),og=new RegExp("^"+ig+sg+rg+ag+"$"),lg=["material","materials","bones","map"],Sh=class{constructor(t,e,n){let s=n||qe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},qe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(eg,"")}static parseTrackName(t){let e=og.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);lg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){re("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){le("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){le("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){le("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){le("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){le("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){le("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){le("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;le("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){le("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){le("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};qe.Composite=Sh;qe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};qe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};qe.prototype.GetterByBindingType=[qe.prototype._getValue_direct,qe.prototype._getValue_array,qe.prototype._getValue_arrayElement,qe.prototype._getValue_toArray];qe.prototype.SetterByBindingTypeAndVersioning=[[qe.prototype._setValue_direct,qe.prototype._setValue_direct_setNeedsUpdate,qe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[qe.prototype._setValue_array,qe.prototype._setValue_array_setNeedsUpdate,qe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[qe.prototype._setValue_arrayElement,qe.prototype._setValue_arrayElement_setNeedsUpdate,qe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[qe.prototype._setValue_fromArray,qe.prototype._setValue_fromArray_setNeedsUpdate,qe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var My=new Float32Array(1);var us=class extends $o{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}};var Cd=new He,Ns=class{constructor(t,e,n=0,s=1/0){this.ray=new Rs(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new _r,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):le("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Cd.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Cd),this}intersectObject(t,e=!0,n=[]){return Mh(t,this,n,e),n.sort(Rd),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Mh(t[s],this,n,e);return n.sort(Rd),n}};function Rd(i,t){return i.distance-t.distance}function Mh(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Mh(r[a],t,e,!0)}}var bh=class i{static{i.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};var Id=new U,Ro=new U,cr=new U,hr=new U,hh=new U,cg=new U,hg=new U,Pa=class{constructor(t=new U,e=new U){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Id.subVectors(t,this.start),Ro.subVectors(this.end,this.start);let n=Ro.dot(Ro);if(n===0)return 0;let r=Ro.dot(Id)/n;return e&&(r=_e(r,0,1)),r}closestPointToPoint(t,e,n){let s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}distanceSqToLine3(t,e=cg,n=hg){let s=10000000000000001e-32,r,a,o=this.start,l=t.start,c=this.end,h=t.end;cr.subVectors(c,o),hr.subVectors(h,l),hh.subVectors(o,l);let p=cr.dot(cr),u=hr.dot(hr),m=hr.dot(hh);if(p<=s&&u<=s)return e.copy(o),n.copy(l),e.sub(n),e.dot(e);if(p<=s)r=0,a=m/u,a=_e(a,0,1);else{let g=cr.dot(hh);if(u<=s)a=0,r=_e(-g/p,0,1);else{let b=cr.dot(hr),f=p*u-b*b;f!==0?r=_e((b*m-g*u)/f,0,1):r=0,a=(b*r+m)/u,a<0?(a=0,r=_e(-g/p,0,1)):a>1&&(a=1,r=_e((b-g)/p,0,1))}}return e.copy(o).addScaledVector(cr,r),n.copy(l).addScaledVector(hr,a),e.distanceToSquared(n)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};function Qh(i,t,e,n){let s=ug(n);switch(e){case Hh:return i*t;case Wh:return i*t/s.components*s.byteLength;case Al:return i*t/s.components*s.byteLength;case gs:return i*t*2/s.components*s.byteLength;case Cl:return i*t*2/s.components*s.byteLength;case Gh:return i*t*3/s.components*s.byteLength;case ci:return i*t*4/s.components*s.byteLength;case Rl:return i*t*4/s.components*s.byteLength;case Ua:case Fa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Oa:case Ba:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Pl:case Dl:return Math.max(i,16)*Math.max(t,8)/4;case Il:case Ll:return Math.max(i,8)*Math.max(t,8)/2;case Nl:case Ul:case Ol:case Bl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Fl:case za:case zl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case kl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Vl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Hl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Gl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Wl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case $l:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Xl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ql:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Yl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Zl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Jl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Kl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case jl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ql:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case tc:case ec:case nc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ic:case sc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ka:case rc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ug(i){switch(i){case Gn:case Bh:return{byteLength:1,components:1};case Ar:case zh:case bi:return{byteLength:2,components:1};case El:case Tl:return{byteLength:2,components:4};case Si:case wl:case Mi:return{byteLength:4,components:1};case kh:case Vh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?re("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Gf(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function fg(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,p=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,l,c){let h=l.array,p=l.updateRanges;if(i.bindBuffer(c,o),p.length===0)i.bufferSubData(c,0,h);else{p.sort((m,g)=>m.start-g.start);let u=0;for(let m=1;m<p.length;m++){let g=p[u],b=p[m];b.start<=g.start+g.count+1?g.count=Math.max(g.count,b.start+b.count-g.start):(++u,p[u]=b)}p.length=u+1;for(let m=0,g=p.length;m<g;m++){let b=p[m];i.bufferSubData(c,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var pg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mg=`#ifdef USE_ALPHAHASH
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
#endif`,gg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_g=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yg=`#ifdef USE_AOMAP
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
#endif`,Sg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Mg=`#ifdef USE_BATCHING
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
#endif`,bg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Eg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Tg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ag=`#ifdef USE_IRIDESCENCE
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
#endif`,Cg=`#ifdef USE_BUMPMAP
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
#endif`,Rg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ig=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Pg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Lg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ng=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ug=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Fg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Og=`#define PI 3.141592653589793
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
} // validated`,Bg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,zg=`vec3 transformedNormal = objectNormal;
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
#endif`,kg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wg="gl_FragColor = linearToOutputTexel( gl_FragColor );",$g=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Xg=`#ifdef USE_ENVMAP
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
#endif`,qg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Yg=`#ifdef USE_ENVMAP
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
#endif`,Zg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jg=`#ifdef USE_ENVMAP
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
#endif`,Kg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,t0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,e0=`#ifdef USE_GRADIENTMAP
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
}`,n0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,i0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,s0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,r0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,a0=`#ifdef USE_ENVMAP
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
#endif`,o0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,l0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,c0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,h0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,u0=`PhysicalMaterial material;
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
#endif`,d0=`uniform sampler2D dfgLUT;
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
}`,f0=`
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
#endif`,p0=`#if defined( RE_IndirectDiffuse )
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
#endif`,m0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,g0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,_0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,x0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,v0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,y0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,S0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,M0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,b0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,w0=`#if defined( USE_POINTS_UV )
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
#endif`,E0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,T0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,A0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,C0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,R0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,I0=`#ifdef USE_MORPHTARGETS
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
#endif`,P0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,L0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,D0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,N0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,U0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,F0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,O0=`#ifdef USE_NORMALMAP
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
#endif`,B0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,z0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,k0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,V0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,H0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,G0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,W0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,X0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,q0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Y0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Z0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,J0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,K0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,j0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Q0=`float getShadowMask() {
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
}`,t_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,e_=`#ifdef USE_SKINNING
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
#endif`,n_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,i_=`#ifdef USE_SKINNING
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
#endif`,s_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,r_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,a_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,o_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,l_=`#ifdef USE_TRANSMISSION
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
#endif`,c_=`#ifdef USE_TRANSMISSION
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
#endif`,h_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,u_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,d_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,f_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,p_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,m_=`uniform sampler2D t2D;
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
}`,g_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,__=`#ifdef ENVMAP_TYPE_CUBE
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
}`,x_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,v_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,y_=`#include <common>
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
}`,S_=`#if DEPTH_PACKING == 3200
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
}`,M_=`#define DISTANCE
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
}`,b_=`#define DISTANCE
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
}`,w_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,E_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,T_=`uniform float scale;
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
}`,A_=`uniform vec3 diffuse;
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
}`,C_=`#include <common>
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
}`,R_=`uniform vec3 diffuse;
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
}`,I_=`#define LAMBERT
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
}`,P_=`#define LAMBERT
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
}`,L_=`#define MATCAP
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
}`,D_=`#define MATCAP
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
}`,N_=`#define NORMAL
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
}`,U_=`#define NORMAL
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
}`,F_=`#define PHONG
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
}`,O_=`#define PHONG
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
}`,B_=`#define STANDARD
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
}`,z_=`#define STANDARD
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
}`,k_=`#define TOON
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
}`,V_=`#define TOON
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
}`,H_=`uniform float size;
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
}`,G_=`uniform vec3 diffuse;
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
}`,W_=`#include <common>
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
}`,$_=`uniform vec3 color;
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
}`,X_=`uniform float rotation;
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
}`,q_=`uniform vec3 diffuse;
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
}`,Se={alphahash_fragment:pg,alphahash_pars_fragment:mg,alphamap_fragment:gg,alphamap_pars_fragment:_g,alphatest_fragment:xg,alphatest_pars_fragment:vg,aomap_fragment:yg,aomap_pars_fragment:Sg,batching_pars_vertex:Mg,batching_vertex:bg,begin_vertex:wg,beginnormal_vertex:Eg,bsdfs:Tg,iridescence_fragment:Ag,bumpmap_pars_fragment:Cg,clipping_planes_fragment:Rg,clipping_planes_pars_fragment:Ig,clipping_planes_pars_vertex:Pg,clipping_planes_vertex:Lg,color_fragment:Dg,color_pars_fragment:Ng,color_pars_vertex:Ug,color_vertex:Fg,common:Og,cube_uv_reflection_fragment:Bg,defaultnormal_vertex:zg,displacementmap_pars_vertex:kg,displacementmap_vertex:Vg,emissivemap_fragment:Hg,emissivemap_pars_fragment:Gg,colorspace_fragment:Wg,colorspace_pars_fragment:$g,envmap_fragment:Xg,envmap_common_pars_fragment:qg,envmap_pars_fragment:Yg,envmap_pars_vertex:Zg,envmap_physical_pars_fragment:a0,envmap_vertex:Jg,fog_vertex:Kg,fog_pars_vertex:jg,fog_fragment:Qg,fog_pars_fragment:t0,gradientmap_pars_fragment:e0,lightmap_pars_fragment:n0,lights_lambert_fragment:i0,lights_lambert_pars_fragment:s0,lights_pars_begin:r0,lights_toon_fragment:o0,lights_toon_pars_fragment:l0,lights_phong_fragment:c0,lights_phong_pars_fragment:h0,lights_physical_fragment:u0,lights_physical_pars_fragment:d0,lights_fragment_begin:f0,lights_fragment_maps:p0,lights_fragment_end:m0,lightprobes_pars_fragment:g0,logdepthbuf_fragment:_0,logdepthbuf_pars_fragment:x0,logdepthbuf_pars_vertex:v0,logdepthbuf_vertex:y0,map_fragment:S0,map_pars_fragment:M0,map_particle_fragment:b0,map_particle_pars_fragment:w0,metalnessmap_fragment:E0,metalnessmap_pars_fragment:T0,morphinstance_vertex:A0,morphcolor_vertex:C0,morphnormal_vertex:R0,morphtarget_pars_vertex:I0,morphtarget_vertex:P0,normal_fragment_begin:L0,normal_fragment_maps:D0,normal_pars_fragment:N0,normal_pars_vertex:U0,normal_vertex:F0,normalmap_pars_fragment:O0,clearcoat_normal_fragment_begin:B0,clearcoat_normal_fragment_maps:z0,clearcoat_pars_fragment:k0,iridescence_pars_fragment:V0,opaque_fragment:H0,packing:G0,premultiplied_alpha_fragment:W0,project_vertex:$0,dithering_fragment:X0,dithering_pars_fragment:q0,roughnessmap_fragment:Y0,roughnessmap_pars_fragment:Z0,shadowmap_pars_fragment:J0,shadowmap_pars_vertex:K0,shadowmap_vertex:j0,shadowmask_pars_fragment:Q0,skinbase_vertex:t_,skinning_pars_vertex:e_,skinning_vertex:n_,skinnormal_vertex:i_,specularmap_fragment:s_,specularmap_pars_fragment:r_,tonemapping_fragment:a_,tonemapping_pars_fragment:o_,transmission_fragment:l_,transmission_pars_fragment:c_,uv_pars_fragment:h_,uv_pars_vertex:u_,uv_vertex:d_,worldpos_vertex:f_,background_vert:p_,background_frag:m_,backgroundCube_vert:g_,backgroundCube_frag:__,cube_vert:x_,cube_frag:v_,depth_vert:y_,depth_frag:S_,distance_vert:M_,distance_frag:b_,equirect_vert:w_,equirect_frag:E_,linedashed_vert:T_,linedashed_frag:A_,meshbasic_vert:C_,meshbasic_frag:R_,meshlambert_vert:I_,meshlambert_frag:P_,meshmatcap_vert:L_,meshmatcap_frag:D_,meshnormal_vert:N_,meshnormal_frag:U_,meshphong_vert:F_,meshphong_frag:O_,meshphysical_vert:B_,meshphysical_frag:z_,meshtoon_vert:k_,meshtoon_frag:V_,points_vert:H_,points_frag:G_,shadow_vert:W_,shadow_frag:$_,sprite_vert:X_,sprite_frag:q_},Lt={common:{diffuse:{value:new oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pe}},envmap:{envMap:{value:null},envMapRotation:{value:new pe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pe},normalScale:{value:new It(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new U},probesMax:{value:new U},probesResolution:{value:new U}},points:{diffuse:{value:new oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0},uvTransform:{value:new pe}},sprite:{diffuse:{value:new oe(16777215)},opacity:{value:1},center:{value:new It(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}}},Bn={basic:{uniforms:Pn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:Se.meshbasic_vert,fragmentShader:Se.meshbasic_frag},lambert:{uniforms:Pn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new oe(0)},envMapIntensity:{value:1}}]),vertexShader:Se.meshlambert_vert,fragmentShader:Se.meshlambert_frag},phong:{uniforms:Pn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new oe(0)},specular:{value:new oe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Se.meshphong_vert,fragmentShader:Se.meshphong_frag},standard:{uniforms:Pn([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag},toon:{uniforms:Pn([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new oe(0)}}]),vertexShader:Se.meshtoon_vert,fragmentShader:Se.meshtoon_frag},matcap:{uniforms:Pn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:Se.meshmatcap_vert,fragmentShader:Se.meshmatcap_frag},points:{uniforms:Pn([Lt.points,Lt.fog]),vertexShader:Se.points_vert,fragmentShader:Se.points_frag},dashed:{uniforms:Pn([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Se.linedashed_vert,fragmentShader:Se.linedashed_frag},depth:{uniforms:Pn([Lt.common,Lt.displacementmap]),vertexShader:Se.depth_vert,fragmentShader:Se.depth_frag},normal:{uniforms:Pn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:Se.meshnormal_vert,fragmentShader:Se.meshnormal_frag},sprite:{uniforms:Pn([Lt.sprite,Lt.fog]),vertexShader:Se.sprite_vert,fragmentShader:Se.sprite_frag},background:{uniforms:{uvTransform:{value:new pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Se.background_vert,fragmentShader:Se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pe}},vertexShader:Se.backgroundCube_vert,fragmentShader:Se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Se.cube_vert,fragmentShader:Se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Se.equirect_vert,fragmentShader:Se.equirect_frag},distance:{uniforms:Pn([Lt.common,Lt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Se.distance_vert,fragmentShader:Se.distance_frag},shadow:{uniforms:Pn([Lt.lights,Lt.fog,{color:{value:new oe(0)},opacity:{value:1}}]),vertexShader:Se.shadow_vert,fragmentShader:Se.shadow_frag}};Bn.physical={uniforms:Pn([Bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pe},clearcoatNormalScale:{value:new It(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pe},sheen:{value:0},sheenColor:{value:new oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pe},transmissionSamplerSize:{value:new It},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pe},attenuationDistance:{value:0},attenuationColor:{value:new oe(0)},specularColor:{value:new oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pe},anisotropyVector:{value:new It},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pe}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag};var cc={r:0,b:0,g:0},Y_=new He,Wf=new pe;Wf.set(-1,0,0,0,1,0,0,0,1);function Z_(i,t,e,n,s,r){let a=new oe(0),o=s===!0?0:1,l,c,h=null,p=0,u=null;function m(R){let P=R.isScene===!0?R.background:null;if(P&&P.isTexture){let M=R.backgroundBlurriness>0;P=t.get(P,M)}return P}function g(R){let P=!1,M=m(R);M===null?f(a,o):M&&M.isColor&&(f(M,1),P=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||P)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function b(R,P){let M=m(P);M&&(M.isCubeTexture||M.mapping===Da)?(c===void 0&&(c=new In(new yr(1,1,1),new pn({name:"BackgroundCubeMaterial",uniforms:Os(Bn.backgroundCube.uniforms),vertexShader:Bn.backgroundCube.vertexShader,fragmentShader:Bn.backgroundCube.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,T,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Y_.makeRotationFromEuler(P.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Wf),c.material.toneMapped=Re.getTransfer(M.colorSpace)!==ze,(h!==M||p!==M.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=M,p=M.version,u=i.toneMapping),c.layers.enableAll(),R.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new In(new Ma(2,2),new pn({name:"BackgroundMaterial",uniforms:Os(Bn.background.uniforms),vertexShader:Bn.background.vertexShader,fragmentShader:Bn.background.fragmentShader,side:ds,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,l.material.toneMapped=Re.getTransfer(M.colorSpace)!==ze,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||p!==M.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=M,p=M.version,u=i.toneMapping),l.layers.enableAll(),R.unshift(l,l.geometry,l.material,0,0,null))}function f(R,P){R.getRGB(cc,Jh(i)),e.buffers.color.setClear(cc.r,cc.g,cc.b,P,r)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(R,P=1){a.set(R),o=P,f(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(R){o=R,f(a,o)},render:g,addToRenderList:b,dispose:d}}function J_(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(G,Z,J,H,q){let lt=!1,et=p(G,H,J,Z);r!==et&&(r=et,c(r.object)),lt=m(G,H,J,q),lt&&g(G,H,J,q),q!==null&&t.update(q,i.ELEMENT_ARRAY_BUFFER),(lt||a)&&(a=!1,M(G,Z,J,H),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function l(){return i.createVertexArray()}function c(G){return i.bindVertexArray(G)}function h(G){return i.deleteVertexArray(G)}function p(G,Z,J,H){let q=H.wireframe===!0,lt=n[Z.id];lt===void 0&&(lt={},n[Z.id]=lt);let et=G.isInstancedMesh===!0?G.id:0,gt=lt[et];gt===void 0&&(gt={},lt[et]=gt);let nt=gt[J.id];nt===void 0&&(nt={},gt[J.id]=nt);let ct=nt[q];return ct===void 0&&(ct=u(l()),nt[q]=ct),ct}function u(G){let Z=[],J=[],H=[];for(let q=0;q<e;q++)Z[q]=0,J[q]=0,H[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:J,attributeDivisors:H,object:G,attributes:{},index:null}}function m(G,Z,J,H){let q=r.attributes,lt=Z.attributes,et=0,gt=J.getAttributes();for(let nt in gt)if(gt[nt].location>=0){let ft=q[nt],Zt=lt[nt];if(Zt===void 0&&(nt==="instanceMatrix"&&G.instanceMatrix&&(Zt=G.instanceMatrix),nt==="instanceColor"&&G.instanceColor&&(Zt=G.instanceColor)),ft===void 0||ft.attribute!==Zt||Zt&&ft.data!==Zt.data)return!0;et++}return r.attributesNum!==et||r.index!==H}function g(G,Z,J,H){let q={},lt=Z.attributes,et=0,gt=J.getAttributes();for(let nt in gt)if(gt[nt].location>=0){let ft=lt[nt];ft===void 0&&(nt==="instanceMatrix"&&G.instanceMatrix&&(ft=G.instanceMatrix),nt==="instanceColor"&&G.instanceColor&&(ft=G.instanceColor));let Zt={};Zt.attribute=ft,ft&&ft.data&&(Zt.data=ft.data),q[nt]=Zt,et++}r.attributes=q,r.attributesNum=et,r.index=H}function b(){let G=r.newAttributes;for(let Z=0,J=G.length;Z<J;Z++)G[Z]=0}function f(G){d(G,0)}function d(G,Z){let J=r.newAttributes,H=r.enabledAttributes,q=r.attributeDivisors;J[G]=1,H[G]===0&&(i.enableVertexAttribArray(G),H[G]=1),q[G]!==Z&&(i.vertexAttribDivisor(G,Z),q[G]=Z)}function R(){let G=r.newAttributes,Z=r.enabledAttributes;for(let J=0,H=Z.length;J<H;J++)Z[J]!==G[J]&&(i.disableVertexAttribArray(J),Z[J]=0)}function P(G,Z,J,H,q,lt,et){et===!0?i.vertexAttribIPointer(G,Z,J,q,lt):i.vertexAttribPointer(G,Z,J,H,q,lt)}function M(G,Z,J,H){b();let q=H.attributes,lt=J.getAttributes(),et=Z.defaultAttributeValues;for(let gt in lt){let nt=lt[gt];if(nt.location>=0){let ct=q[gt];if(ct===void 0&&(gt==="instanceMatrix"&&G.instanceMatrix&&(ct=G.instanceMatrix),gt==="instanceColor"&&G.instanceColor&&(ct=G.instanceColor)),ct!==void 0){let ft=ct.normalized,Zt=ct.itemSize,Vt=t.get(ct);if(Vt===void 0)continue;let Pe=Vt.buffer,Me=Vt.type,Ce=Vt.bytesPerElement,j=Me===i.INT||Me===i.UNSIGNED_INT||ct.gpuType===wl;if(ct.isInterleavedBufferAttribute){let ht=ct.data,Rt=ht.stride,ee=ct.offset;if(ht.isInstancedInterleavedBuffer){for(let At=0;At<nt.locationSize;At++)d(nt.location+At,ht.meshPerAttribute);G.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let At=0;At<nt.locationSize;At++)f(nt.location+At);i.bindBuffer(i.ARRAY_BUFFER,Pe);for(let At=0;At<nt.locationSize;At++)P(nt.location+At,Zt/nt.locationSize,Me,ft,Rt*Ce,(ee+Zt/nt.locationSize*At)*Ce,j)}else{if(ct.isInstancedBufferAttribute){for(let ht=0;ht<nt.locationSize;ht++)d(nt.location+ht,ct.meshPerAttribute);G.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let ht=0;ht<nt.locationSize;ht++)f(nt.location+ht);i.bindBuffer(i.ARRAY_BUFFER,Pe);for(let ht=0;ht<nt.locationSize;ht++)P(nt.location+ht,Zt/nt.locationSize,Me,ft,Zt*Ce,Zt/nt.locationSize*ht*Ce,j)}}else if(et!==void 0){let ft=et[gt];if(ft!==void 0)switch(ft.length){case 2:i.vertexAttrib2fv(nt.location,ft);break;case 3:i.vertexAttrib3fv(nt.location,ft);break;case 4:i.vertexAttrib4fv(nt.location,ft);break;default:i.vertexAttrib1fv(nt.location,ft)}}}}R()}function S(){A();for(let G in n){let Z=n[G];for(let J in Z){let H=Z[J];for(let q in H){let lt=H[q];for(let et in lt)h(lt[et].object),delete lt[et];delete H[q]}}delete n[G]}}function T(G){if(n[G.id]===void 0)return;let Z=n[G.id];for(let J in Z){let H=Z[J];for(let q in H){let lt=H[q];for(let et in lt)h(lt[et].object),delete lt[et];delete H[q]}}delete n[G.id]}function N(G){for(let Z in n){let J=n[Z];for(let H in J){let q=J[H];if(q[G.id]===void 0)continue;let lt=q[G.id];for(let et in lt)h(lt[et].object),delete lt[et];delete q[G.id]}}}function v(G){for(let Z in n){let J=n[Z],H=G.isInstancedMesh===!0?G.id:0,q=J[H];if(q!==void 0){for(let lt in q){let et=q[lt];for(let gt in et)h(et[gt].object),delete et[gt];delete q[lt]}delete J[H],Object.keys(J).length===0&&delete n[Z]}}}function A(){k(),a=!0,r!==s&&(r=s,c(r.object))}function k(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:A,resetDefaultState:k,dispose:S,releaseStatesOfGeometry:T,releaseStatesOfObject:v,releaseStatesOfProgram:N,initAttributes:b,enableAttribute:f,disableUnusedAttributes:R}}function K_(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let m=0;m<h;m++)u+=c[m];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function j_(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let N=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(N){return!(N!==ci&&n.convert(N)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(N){let v=N===bi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(N!==Gn&&N!==Mi&&!v&&n.convert(N)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(N){if(N==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(re("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let p=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&re("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),R=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),P=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:u,maxTextures:m,maxVertexTextures:g,maxTextureSize:b,maxCubemapSize:f,maxAttributes:d,maxVertexUniforms:R,maxVaryings:P,maxFragmentUniforms:M,maxSamples:S,samples:T}}function Q_(i){let t=this,e=null,n=0,s=!1,r=!1,a=new mi,o=new pe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){let m=p.length!==0||u||n!==0||s;return s=u,n=p.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,u){e=h(p,u,0)},this.setState=function(p,u,m){let g=p.clippingPlanes,b=p.clipIntersection,f=p.clipShadows,d=i.get(p);if(!s||g===null||g.length===0||r&&!f)r?h(null):c();else{let R=r?0:n,P=R*4,M=d.clippingState||null;l.value=M,M=h(g,u,P,m);for(let S=0;S!==P;++S)M[S]=e[S];d.clippingState=M,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=R}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(p,u,m,g){let b=p!==null?p.length:0,f=null;if(b!==0){if(f=l.value,g!==!0||f===null){let d=m+b*4,R=u.matrixWorldInverse;o.getNormalMatrix(R),(f===null||f.length<d)&&(f=new Float32Array(d));for(let P=0,M=m;P!==b;++P,M+=4)a.copy(p[P]).applyMatrix4(R,o),a.normal.toArray(f,M),f[M+3]=a.constant}l.value=f,l.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,f}}var Ir=4,tx=6,ex=20,nx=256,Ha=new wr,Mf=new oe,tu=null,eu=0,nu=0,iu=!1,ix=new U,Bs=new U,uc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=ix}=r;tu=this._renderer.getRenderTarget(),eu=this._renderer.getActiveCubeFace(),nu=this._renderer.getActiveMipmapLevel(),iu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ef(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(tu,eu,nu),this._renderer.xr.enabled=iu,t.scissorTest=!1,Rr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===fs||t.mapping===Fs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),tu=this._renderer.getRenderTarget(),eu=this._renderer.getActiveCubeFace(),nu=this._renderer.getActiveMipmapLevel(),iu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:xn,minFilter:xn,generateMipmaps:!1,type:bi,format:ci,colorSpace:na,depthBuffer:!1},s=bf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bf(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=sx(r)),this._blurMaterial=ax(r,t,e),this._ggxMaterial=rx(r,t,e)}return s}_compileMaterial(t){let e=new In(new tn,t);this._renderer.compile(e,Ha)}_sceneToCubeUV(t,e,n,s,r){let l=new Rn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,u=p.autoClear,m=p.toneMapping;p.getClearColor(Mf),p.toneMapping=yi,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(s),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new In(new yr,new ha({name:"PMREM.Background",side:On,depthWrite:!1,depthTest:!1})));let b=this._backgroundBox,f=b.material,d=!1,R=t.background;R?R.isColor&&(f.color.copy(R),t.background=null,d=!0):(f.color.copy(Mf),d=!0);for(let P=0;P<6;P++){let M=P%3;M===0?(l.up.set(0,c[P],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[P],r.y,r.z)):M===1?(l.up.set(0,0,c[P]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[P],r.z)):(l.up.set(0,c[P],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[P]));let S=this._cubeSize;Rr(s,M*S,P>2?S:0,S,S),p.setRenderTarget(s),d&&p.render(b,l),p.render(t,l)}p.toneMapping=m,p.autoClear=u,t.background=R}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===fs||t.mapping===Fs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ef()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wf());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Rr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Ha)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),p=Math.sqrt(c*c-h*h),u=c*1.25,m=p*u,{_lodMax:g}=this,b=this._sizeLods[n],f=3*b*(n>g-Ir?n-g+Ir:0),d=4*(this._cubeSize-b);l.envMap.value=t.texture,l.roughness.value=m,l.mipInt.value=g-e,Rr(r,f,d,3*b,2*b),s.setRenderTarget(r),s.render(o,Ha),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,Rr(t,f,d,3*b,2*b),s.setRenderTarget(t),s.render(o,Ha)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],p=3*h*(s>this._lodMax-Ir?s-this._lodMax+Ir:0),u=4*(this._cubeSize-h);Rr(e,p,u,3*h,2*h),a.setRenderTarget(e),a.render(l,Ha)}};function sx(i){let t=[],e=[],n=i,s=i-Ir+1+tx;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],p=6,u=6,m=3,g=new Float32Array(m*u*p),b=new Float32Array(m*u*p);for(let d=0;d<p;d++){let R=d%3*2/3-1,P=d>2?0:-1,M=[R,P,0,R+2/3,P,0,R+2/3,P+1,0,R,P,0,R+2/3,P+1,0,R,P+1,0];g.set(M,m*u*d);for(let S=0;S<u;S++){let T=h[S*2]*2-1,N=h[S*2+1]*2-1;d===0?Bs.set(1,N,T):d===1?Bs.set(-T,1,-N):d===2?Bs.set(-T,N,1):d===3?Bs.set(-1,N,-T):d===4?Bs.set(-T,-1,N):Bs.set(T,N,-1),Bs.toArray(b,(d*u+S)*m)}}let f=new tn;f.setAttribute("position",new $e(g,m)),f.setAttribute("outputDirection",new $e(b,m)),e.push(new In(f,null)),n>Ir&&n--}return{lodMeshes:e,sizeLods:t}}function bf(i,t,e){let n=new Hn(i,t,e);return n.texture.mapping=Da,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Rr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function rx(i,t,e){return new pn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:nx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:pc(),fragmentShader:`

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
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function ax(i,t,e){return new pn({name:"SphericalGaussianBlur",defines:{SAMPLES:ex,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:pc(),fragmentShader:`

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
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function wf(){return new pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pc(),fragmentShader:`

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
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function Ef(){return new pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function pc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var dc=class extends Hn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new da(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new yr(5,5,5),r=new pn({name:"CubemapFromEquirect",uniforms:Os(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:On,blending:Ni});r.uniforms.tEquirect.value=e;let a=new In(s,r),o=e.minFilter;return e.minFilter===ps&&(e.minFilter=xn),new xl(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function ox(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,m=!1){return u==null?null:m?a(u):r(u)}function r(u){if(u&&u.isTexture){let m=u.mapping;if(m===Sl||m===Ml)if(t.has(u)){let g=t.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let b=new dc(g.height);return b.fromEquirectangularTexture(i,u),t.set(u,b),u.addEventListener("dispose",c),o(b.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let m=u.mapping,g=m===Sl||m===Ml,b=m===fs||m===Fs;if(g||b){let f=e.get(u),d=f!==void 0?f.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==d)return n===null&&(n=new uc(i)),f=g?n.fromEquirectangular(u,f):n.fromCubemap(u,f),f.texture.pmremVersion=u.pmremVersion,e.set(u,f),f.texture;if(f!==void 0)return f.texture;{let R=u.image;return g&&R&&R.height>0||b&&R&&l(R)?(n===null&&(n=new uc(i)),f=g?n.fromEquirectangular(u):n.fromCubemap(u),f.texture.pmremVersion=u.pmremVersion,e.set(u,f),u.addEventListener("dispose",h),f.texture):null}}}return u}function o(u,m){return m===Sl?u.mapping=fs:m===Ml&&(u.mapping=Fs),u}function l(u){let m=0,g=6;for(let b=0;b<g;b++)u[b]!==void 0&&m++;return m===g}function c(u){let m=u.target;m.removeEventListener("dispose",c);let g=t.get(m);g!==void 0&&(t.delete(m),g.dispose())}function h(u){let m=u.target;m.removeEventListener("dispose",h);let g=e.get(m);g!==void 0&&(e.delete(m),g.dispose())}function p(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:p}}function lx(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Cs("WebGLRenderer: "+n+" extension not supported."),s}}}function cx(i,t,e,n){let s={},r=new WeakMap;function a(p){let u=p.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete s[u.id];let m=r.get(u);m&&(t.remove(m),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(p,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function l(p){let u=p.attributes;for(let m in u)t.update(u[m],i.ARRAY_BUFFER)}function c(p){let u=[],m=p.index,g=p.attributes.position,b=0;if(g===void 0)return;if(m!==null){let R=m.array;b=m.version;for(let P=0,M=R.length;P<M;P+=3){let S=R[P+0],T=R[P+1],N=R[P+2];u.push(S,T,T,N,N,S)}}else{let R=g.array;b=g.version;for(let P=0,M=R.length/3-1;P<M;P+=3){let S=P+0,T=P+1,N=P+2;u.push(S,T,T,N,N,S)}}let f=new(g.count>=65535?ca:la)(u,1);f.version=b;let d=r.get(p);d&&t.remove(d),r.set(p,f)}function h(p){let u=r.get(p);if(u){let m=p.index;m!==null&&u.version<m.version&&c(p)}else c(p);return r.get(p)}return{get:o,update:l,getWireframeAttribute:h}}function hx(i,t,e){let n;function s(p){n=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function l(p,u){i.drawElements(n,u,r,p*a),e.update(u,n,1)}function c(p,u,m){m!==0&&(i.drawElementsInstanced(n,u,r,p*a,m),e.update(u,n,m))}function h(p,u,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,p,0,m);let b=0;for(let f=0;f<m;f++)b+=u[f];e.update(b,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function ux(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:le("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function dx(i,t,e){let n=new WeakMap,s=new ke;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==p){let A=function(){N.dispose(),n.delete(o),o.removeEventListener("dispose",A)};u!==void 0&&u.texture.dispose();let m=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],R=o.morphAttributes.color||[],P=0;m===!0&&(P=1),g===!0&&(P=2),b===!0&&(P=3);let M=o.attributes.position.count*P,S=1;M>t.maxTextureSize&&(S=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let T=new Float32Array(M*S*4*p),N=new aa(T,M,S,p);N.type=Mi,N.needsUpdate=!0;let v=P*4;for(let k=0;k<p;k++){let G=f[k],Z=d[k],J=R[k],H=M*S*4*k;for(let q=0;q<G.count;q++){let lt=q*v;m===!0&&(s.fromBufferAttribute(G,q),T[H+lt+0]=s.x,T[H+lt+1]=s.y,T[H+lt+2]=s.z,T[H+lt+3]=0),g===!0&&(s.fromBufferAttribute(Z,q),T[H+lt+4]=s.x,T[H+lt+5]=s.y,T[H+lt+6]=s.z,T[H+lt+7]=0),b===!0&&(s.fromBufferAttribute(J,q),T[H+lt+8]=s.x,T[H+lt+9]=s.y,T[H+lt+10]=s.z,T[H+lt+11]=J.itemSize===4?s.w:1)}}u={count:p,texture:N,size:new It(M,S)},n.set(o,u),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let m=0;for(let b=0;b<c.length;b++)m+=c[b];let g=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function fx(i,t,e,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,p=c.geometry,u=t.get(c,p);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let m=c.skeleton;r.get(m)!==h&&(m.update(),r.set(m,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var px={[Ih]:"LINEAR_TONE_MAPPING",[Ph]:"REINHARD_TONE_MAPPING",[Lh]:"CINEON_TONE_MAPPING",[Dh]:"ACES_FILMIC_TONE_MAPPING",[Uh]:"AGX_TONE_MAPPING",[Fh]:"NEUTRAL_TONE_MAPPING",[Nh]:"CUSTOM_TONE_MAPPING"};function mx(i,t,e,n,s,r){let a=new Hn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new tn;c.setAttribute("position",new an([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new an([0,2,0,0,2,0],2));let h=new sl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new In(c,h),u=new wr(-1,1,1,-1,0,1),m=null,g=null,b=!1,f,d=null,R=[],P=!1;this.setSize=function(M,S){a.setSize(M,S),o!==null&&o.setSize(M,S),l!==null&&l.setSize(M,S);for(let T=0;T<R.length;T++){let N=R[T];N.setSize&&N.setSize(M,S)}},this.setEffects=function(M){R=M,P=R.length>0&&R[0].isRenderPass===!0;let S=a.width,T=a.height;R.length>0&&o===null&&(o=new Hn(S,T,{type:bi,depthBuffer:!1,stencilBuffer:!1}),l=new Hn(S,T,{type:bi,depthBuffer:!1,stencilBuffer:!1}));for(let N=0;N<R.length;N++){let v=R[N];v.setSize&&v.setSize(S,T)}},this.begin=function(M,S){if(b||M.toneMapping===yi&&R.length===0)return!1;if(d=S,S!==null){let T=S.width,N=S.height;(a.width!==T||a.height!==N)&&this.setSize(T,N)}return P===!1&&M.setRenderTarget(a),f=M.toneMapping,M.toneMapping=yi,!0},this.hasRenderPass=function(){return P},this.end=function(M,S){M.toneMapping=f,b=!0;let T=a,N=o;for(let v=0;v<R.length;v++){let A=R[v];A.enabled!==!1&&(A.render(M,N,T,S),A.needsSwap!==!1&&(T=N,N=N===o?l:o))}if(m!==M.outputColorSpace||g!==M.toneMapping){m=M.outputColorSpace,g=M.toneMapping,h.defines={},Re.getTransfer(m)===ze&&(h.defines.SRGB_TRANSFER="");let v=px[g];v&&(h.defines[v]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=T.texture,M.setRenderTarget(d),M.render(p,u),d=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var $f=new Vn,au=new os(1,1),Xf=new aa,qf=new Wo,Yf=new da,Tf=[],Af=[],Cf=new Float32Array(16),Rf=new Float32Array(9),If=new Float32Array(4);function Lr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Tf[s];if(r===void 0&&(r=new Float32Array(s),Tf[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function on(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ln(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function mc(i,t){let e=Af[t];e===void 0&&(e=new Int32Array(t),Af[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function gx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function _x(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(on(e,t))return;i.uniform2fv(this.addr,t),ln(e,t)}}function xx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(on(e,t))return;i.uniform3fv(this.addr,t),ln(e,t)}}function vx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(on(e,t))return;i.uniform4fv(this.addr,t),ln(e,t)}}function yx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(on(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ln(e,t)}else{if(on(e,n))return;If.set(n),i.uniformMatrix2fv(this.addr,!1,If),ln(e,n)}}function Sx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(on(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ln(e,t)}else{if(on(e,n))return;Rf.set(n),i.uniformMatrix3fv(this.addr,!1,Rf),ln(e,n)}}function Mx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(on(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ln(e,t)}else{if(on(e,n))return;Cf.set(n),i.uniformMatrix4fv(this.addr,!1,Cf),ln(e,n)}}function bx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function wx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(on(e,t))return;i.uniform2iv(this.addr,t),ln(e,t)}}function Ex(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(on(e,t))return;i.uniform3iv(this.addr,t),ln(e,t)}}function Tx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(on(e,t))return;i.uniform4iv(this.addr,t),ln(e,t)}}function Ax(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Cx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(on(e,t))return;i.uniform2uiv(this.addr,t),ln(e,t)}}function Rx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(on(e,t))return;i.uniform3uiv(this.addr,t),ln(e,t)}}function Ix(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(on(e,t))return;i.uniform4uiv(this.addr,t),ln(e,t)}}function Px(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(au.compareFunction=e.isReversedDepthBuffer()?lc:oc,r=au):r=$f,e.setTexture2D(t||r,s)}function Lx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||qf,s)}function Dx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Yf,s)}function Nx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Xf,s)}function Ux(i){switch(i){case 5126:return gx;case 35664:return _x;case 35665:return xx;case 35666:return vx;case 35674:return yx;case 35675:return Sx;case 35676:return Mx;case 5124:case 35670:return bx;case 35667:case 35671:return wx;case 35668:case 35672:return Ex;case 35669:case 35673:return Tx;case 5125:return Ax;case 36294:return Cx;case 36295:return Rx;case 36296:return Ix;case 35678:case 36198:case 36298:case 36306:case 35682:return Px;case 35679:case 36299:case 36307:return Lx;case 35680:case 36300:case 36308:case 36293:return Dx;case 36289:case 36303:case 36311:case 36292:return Nx}}function Fx(i,t){i.uniform1fv(this.addr,t)}function Ox(i,t){let e=Lr(t,this.size,2);i.uniform2fv(this.addr,e)}function Bx(i,t){let e=Lr(t,this.size,3);i.uniform3fv(this.addr,e)}function zx(i,t){let e=Lr(t,this.size,4);i.uniform4fv(this.addr,e)}function kx(i,t){let e=Lr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Vx(i,t){let e=Lr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Hx(i,t){let e=Lr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Gx(i,t){i.uniform1iv(this.addr,t)}function Wx(i,t){i.uniform2iv(this.addr,t)}function $x(i,t){i.uniform3iv(this.addr,t)}function Xx(i,t){i.uniform4iv(this.addr,t)}function qx(i,t){i.uniform1uiv(this.addr,t)}function Yx(i,t){i.uniform2uiv(this.addr,t)}function Zx(i,t){i.uniform3uiv(this.addr,t)}function Jx(i,t){i.uniform4uiv(this.addr,t)}function Kx(i,t,e){let n=this.cache,s=t.length,r=mc(e,s);on(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=au:a=$f;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function jx(i,t,e){let n=this.cache,s=t.length,r=mc(e,s);on(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||qf,r[a])}function Qx(i,t,e){let n=this.cache,s=t.length,r=mc(e,s);on(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Yf,r[a])}function tv(i,t,e){let n=this.cache,s=t.length,r=mc(e,s);on(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Xf,r[a])}function ev(i){switch(i){case 5126:return Fx;case 35664:return Ox;case 35665:return Bx;case 35666:return zx;case 35674:return kx;case 35675:return Vx;case 35676:return Hx;case 5124:case 35670:return Gx;case 35667:case 35671:return Wx;case 35668:case 35672:return $x;case 35669:case 35673:return Xx;case 5125:return qx;case 36294:return Yx;case 36295:return Zx;case 36296:return Jx;case 35678:case 36198:case 36298:case 36306:case 35682:return Kx;case 35679:case 36299:case 36307:return jx;case 35680:case 36300:case 36308:case 36293:return Qx;case 36289:case 36303:case 36311:case 36292:return tv}}var ou=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Ux(e.type)}},lu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ev(e.type)}},cu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},su=/(\w+)(\])?(\[|\.)?/g;function Pf(i,t){i.seq.push(t),i.map[t.id]=t}function nv(i,t,e){let n=i.name,s=n.length;for(su.lastIndex=0;;){let r=su.exec(n),a=su.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Pf(e,c===void 0?new ou(o,i,t):new lu(o,i,t));break}else{let p=e.map[o];p===void 0&&(p=new cu(o),Pf(e,p)),e=p}}}var Pr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);nv(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Lf(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var iv=37297,sv=0;function rv(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Df=new pe;function av(i){Re._getMatrix(Df,Re.workingColorSpace,i);let t=`mat3( ${Df.elements.map(e=>e.toFixed(4))} )`;switch(Re.getTransfer(i)){case ia:return[t,"LinearTransferOETF"];case ze:return[t,"sRGBTransferOETF"];default:return re("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Nf(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+rv(i.getShaderSource(t),o)}else return r}function ov(i,t){let e=av(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var lv={[Ih]:"Linear",[Ph]:"Reinhard",[Lh]:"Cineon",[Dh]:"ACESFilmic",[Uh]:"AgX",[Fh]:"Neutral",[Nh]:"Custom"};function cv(i,t){let e=lv[t];return e===void 0?(re("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var hc=new U;function hv(){Re.getLuminanceCoefficients(hc);let i=hc.x.toFixed(4),t=hc.y.toFixed(4),e=hc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function uv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wa).join(`
`)}function dv(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function fv(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Wa(i){return i!==""}function Uf(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ff(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var pv=/^[ \t]*#include +<([\w\d./]+)>/gm;function hu(i){return i.replace(pv,gv)}var mv=new Map;function gv(i,t){let e=Se[t];if(e===void 0){let n=mv.get(t);if(n!==void 0)e=Se[n],re('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return hu(e)}var _v=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Of(i){return i.replace(_v,xv)}function xv(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Bf(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var vv={[La]:"SHADOWMAP_TYPE_PCF",[Er]:"SHADOWMAP_TYPE_VSM"};function yv(i){return vv[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Sv={[fs]:"ENVMAP_TYPE_CUBE",[Fs]:"ENVMAP_TYPE_CUBE",[Da]:"ENVMAP_TYPE_CUBE_UV"};function Mv(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Sv[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var bv={[Fs]:"ENVMAP_MODE_REFRACTION"};function wv(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":bv[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Ev={[yl]:"ENVMAP_BLENDING_MULTIPLY",[jd]:"ENVMAP_BLENDING_MIX",[Qd]:"ENVMAP_BLENDING_ADD"};function Tv(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Ev[i.combine]||"ENVMAP_BLENDING_NONE"}function Av(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Cv(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=yv(e),c=Mv(e),h=wv(e),p=Tv(e),u=Av(e),m=uv(e),g=dv(r),b=s.createProgram(),f,d,R=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Wa).join(`
`),f.length>0&&(f+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Wa).join(`
`),d.length>0&&(d+=`
`)):(f=[Bf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wa).join(`
`),d=[Bf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+p:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==yi?"#define TONE_MAPPING":"",e.toneMapping!==yi?Se.tonemapping_pars_fragment:"",e.toneMapping!==yi?cv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Se.colorspace_pars_fragment,ov("linearToOutputTexel",e.outputColorSpace),hv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Wa).join(`
`)),a=hu(a),a=Uf(a,e),a=Ff(a,e),o=hu(o),o=Uf(o,e),o=Ff(o,e),a=Of(a),o=Of(o),e.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,f=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,d=["#define varying in",e.glslVersion===Xh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Xh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let P=R+f+a,M=R+d+o,S=Lf(s,s.VERTEX_SHADER,P),T=Lf(s,s.FRAGMENT_SHADER,M);s.attachShader(b,S),s.attachShader(b,T),e.index0AttributeName!==void 0?s.bindAttribLocation(b,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(b,0,"position"),s.linkProgram(b);function N(G){if(i.debug.checkShaderErrors){let Z=s.getProgramInfoLog(b)||"",J=s.getShaderInfoLog(S)||"",H=s.getShaderInfoLog(T)||"",q=Z.trim(),lt=J.trim(),et=H.trim(),gt=!0,nt=!0;if(s.getProgramParameter(b,s.LINK_STATUS)===!1)if(gt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,b,S,T);else{let ct=Nf(s,S,"vertex"),ft=Nf(s,T,"fragment");le("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(b,s.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+q+`
`+ct+`
`+ft)}else q!==""?re("WebGLProgram: Program Info Log:",q):(lt===""||et==="")&&(nt=!1);nt&&(G.diagnostics={runnable:gt,programLog:q,vertexShader:{log:lt,prefix:f},fragmentShader:{log:et,prefix:d}})}s.deleteShader(S),s.deleteShader(T),v=new Pr(s,b),A=fv(s,b)}let v;this.getUniforms=function(){return v===void 0&&N(this),v};let A;this.getAttributes=function(){return A===void 0&&N(this),A};let k=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=s.getProgramParameter(b,iv)),k},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(b),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=sv++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=S,this.fragmentShader=T,this}var Rv=0,uu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new du(t),e.set(t,n)),n}},du=class{constructor(t){this.id=Rv++,this.code=t,this.usedTimes=0}};function Iv(i){return i===gs||i===za||i===ka}function Pv(i,t,e,n,s,r){let a=new _r,o=new uu,l=new Set,c=[],h=new Map,p=n.logarithmicDepthBuffer,u=n.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return l.add(v),v===0?"uv":`uv${v}`}function b(v,A,k,G,Z,J){let H=G.fog,q=Z.geometry,lt=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?G.environment:null,et=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,gt=t.get(v.envMap||lt,et),nt=gt&&gt.mapping===Da?gt.image.height:null,ct=m[v.type];v.precision!==null&&(u=n.getMaxPrecision(v.precision),u!==v.precision&&re("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));let ft=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Zt=ft!==void 0?ft.length:0,Vt=0;q.morphAttributes.position!==void 0&&(Vt=1),q.morphAttributes.normal!==void 0&&(Vt=2),q.morphAttributes.color!==void 0&&(Vt=3);let Pe,Me,Ce,j;if(ct){let Be=Bn[ct];Pe=Be.vertexShader,Me=Be.fragmentShader}else{Pe=v.vertexShader,Me=v.fragmentShader;let Be=o.getVertexShaderStage(v),we=o.getFragmentShaderStage(v);o.update(v,Be,we),Ce=Be.id,j=we.id}let ht=i.getRenderTarget(),Rt=i.state.buffers.depth.getReversed(),ee=Z.isInstancedMesh===!0,At=Z.isBatchedMesh===!0,Gt=!!v.map,Le=!!v.matcap,D=!!gt,pt=!!v.aoMap,vt=!!v.lightMap,xt=!!v.bumpMap&&v.wireframe===!1,yt=!!v.normalMap,te=!!v.displacementMap,Qt=!!v.emissiveMap,zt=!!v.metalnessMap,ce=!!v.roughnessMap,F=v.anisotropy>0,Ne=v.clearcoat>0,ve=v.dispersion>0,E=v.retroreflectivity>0,_=v.iridescence>0,W=v.sheen>0,Y=v.transmission>0,st=F&&!!v.anisotropyMap,St=Ne&&!!v.clearcoatMap,wt=Ne&&!!v.clearcoatNormalMap,rt=Ne&&!!v.clearcoatRoughnessMap,ut=_&&!!v.iridescenceMap,Et=_&&!!v.iridescenceThicknessMap,Xt=W&&!!v.sheenColorMap,Dt=W&&!!v.sheenRoughnessMap,Tt=!!v.specularMap,Jt=!!v.specularColorMap,ne=!!v.specularIntensityMap,ie=Y&&!!v.transmissionMap,B=Y&&!!v.thicknessMap,Mt=!!v.gradientMap,dt=!!v.alphaMap,Ct=v.alphaTest>0,Ft=!!v.alphaHash,mt=!!v.extensions,Kt=yi;v.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(Kt=i.toneMapping);let qt={shaderID:ct,shaderType:v.type,shaderName:v.name,vertexShader:Pe,fragmentShader:Me,defines:v.defines,customVertexShaderID:Ce,customFragmentShaderID:j,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:At,batchingColor:At&&Z._colorsTexture!==null,instancing:ee,instancingColor:ee&&Z.instanceColor!==null,instancingMorph:ee&&Z.morphTexture!==null,outputColorSpace:ht===null?i.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:Re.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Gt,matcap:Le,envMap:D,envMapMode:D&&gt.mapping,envMapCubeUVHeight:nt,aoMap:pt,lightMap:vt,bumpMap:xt,normalMap:yt,displacementMap:te,emissiveMap:Qt,normalMapObjectSpace:yt&&v.normalMapType===nf,normalMapTangentSpace:yt&&v.normalMapType===ac,packedNormalMap:yt&&v.normalMapType===ac&&Iv(v.normalMap.format),metalnessMap:zt,roughnessMap:ce,anisotropy:F,anisotropyMap:st,clearcoat:Ne,clearcoatMap:St,clearcoatNormalMap:wt,clearcoatRoughnessMap:rt,dispersion:ve,retroreflection:E,iridescence:_,iridescenceMap:ut,iridescenceThicknessMap:Et,sheen:W,sheenColorMap:Xt,sheenRoughnessMap:Dt,specularMap:Tt,specularColorMap:Jt,specularIntensityMap:ne,transmission:Y,transmissionMap:ie,thicknessMap:B,gradientMap:Mt,opaque:v.transparent===!1&&v.blending===Tr&&v.alphaToCoverage===!1,alphaMap:dt,alphaTest:Ct,alphaHash:Ft,combine:v.combine,mapUv:Gt&&g(v.map.channel),aoMapUv:pt&&g(v.aoMap.channel),lightMapUv:vt&&g(v.lightMap.channel),bumpMapUv:xt&&g(v.bumpMap.channel),normalMapUv:yt&&g(v.normalMap.channel),displacementMapUv:te&&g(v.displacementMap.channel),emissiveMapUv:Qt&&g(v.emissiveMap.channel),metalnessMapUv:zt&&g(v.metalnessMap.channel),roughnessMapUv:ce&&g(v.roughnessMap.channel),anisotropyMapUv:st&&g(v.anisotropyMap.channel),clearcoatMapUv:St&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:wt&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ut&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:Xt&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:Dt&&g(v.sheenRoughnessMap.channel),specularMapUv:Tt&&g(v.specularMap.channel),specularColorMapUv:Jt&&g(v.specularColorMap.channel),specularIntensityMapUv:ne&&g(v.specularIntensityMap.channel),transmissionMapUv:ie&&g(v.transmissionMap.channel),thicknessMapUv:B&&g(v.thicknessMap.channel),alphaMapUv:dt&&g(v.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(yt||F),vertexNormals:!!q.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!q.attributes.uv&&(Gt||dt),fog:!!H,useFog:v.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||q.attributes.normal===void 0&&yt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:Rt,skinning:Z.isSkinnedMesh===!0,hasPositionAttribute:q.attributes.position!==void 0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:Zt,morphTextureStride:Vt,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:J.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&k.length>0,shadowMapType:i.shadowMap.type,toneMapping:Kt,decodeVideoTexture:Gt&&v.map.isVideoTexture===!0&&Re.getTransfer(v.map.colorSpace)===ze,decodeVideoTextureEmissive:Qt&&v.emissiveMap.isVideoTexture===!0&&Re.getTransfer(v.emissiveMap.colorSpace)===ze,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Di,flipSided:v.side===On,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:mt&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(mt&&v.extensions.multiDraw===!0||At)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return qt.vertexUv1s=l.has(1),qt.vertexUv2s=l.has(2),qt.vertexUv3s=l.has(3),l.clear(),qt}function f(v){let A=[];if(v.shaderID?A.push(v.shaderID):(A.push(v.customVertexShaderID),A.push(v.customFragmentShaderID)),v.defines!==void 0)for(let k in v.defines)A.push(k),A.push(v.defines[k]);return v.isRawShaderMaterial===!1&&(d(A,v),R(A,v),A.push(i.outputColorSpace)),A.push(v.customProgramCacheKey),A.join()}function d(v,A){v.push(A.precision),v.push(A.outputColorSpace),v.push(A.envMapMode),v.push(A.envMapCubeUVHeight),v.push(A.mapUv),v.push(A.alphaMapUv),v.push(A.lightMapUv),v.push(A.aoMapUv),v.push(A.bumpMapUv),v.push(A.normalMapUv),v.push(A.displacementMapUv),v.push(A.emissiveMapUv),v.push(A.metalnessMapUv),v.push(A.roughnessMapUv),v.push(A.anisotropyMapUv),v.push(A.clearcoatMapUv),v.push(A.clearcoatNormalMapUv),v.push(A.clearcoatRoughnessMapUv),v.push(A.iridescenceMapUv),v.push(A.iridescenceThicknessMapUv),v.push(A.sheenColorMapUv),v.push(A.sheenRoughnessMapUv),v.push(A.specularMapUv),v.push(A.specularColorMapUv),v.push(A.specularIntensityMapUv),v.push(A.transmissionMapUv),v.push(A.thicknessMapUv),v.push(A.combine),v.push(A.fogExp2),v.push(A.sizeAttenuation),v.push(A.morphTargetsCount),v.push(A.morphAttributeCount),v.push(A.numSunLights),v.push(A.numDirLights),v.push(A.numPointLights),v.push(A.numSpotLights),v.push(A.numSpotLightMaps),v.push(A.numHemiLights),v.push(A.numRectAreaLights),v.push(A.numSunLightShadows),v.push(A.numDirLightShadows),v.push(A.numPointLightShadows),v.push(A.numSpotLightShadows),v.push(A.numSpotLightShadowsWithMaps),v.push(A.numLightProbes),v.push(A.shadowMapType),v.push(A.toneMapping),v.push(A.numClippingPlanes),v.push(A.numClipIntersection),v.push(A.depthPacking)}function R(v,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.retroreflection&&a.enable(24),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),A.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function P(v){let A=m[v.type],k;if(A){let G=Bn[A];k=Va.clone(G.uniforms)}else k=v.uniforms;return k}function M(v,A){let k=h.get(A);return k!==void 0?++k.usedTimes:(k=new Cv(i,A,v,s),c.push(k),h.set(A,k)),k}function S(v){if(--v.usedTimes===0){let A=c.indexOf(v);c[A]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function T(v){o.remove(v)}function N(){o.dispose()}return{getParameters:b,getProgramCacheKey:f,getUniforms:P,acquireProgram:M,releaseProgram:S,releaseShaderCache:T,programs:c,dispose:N}}function Lv(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Dv(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function zf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function kf(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u){let m=0;return u.isInstancedMesh&&(m+=2),u.isSkinnedMesh&&(m+=1),m}function o(u,m,g,b,f,d){let R=i[t];return R===void 0?(R={id:u.id,object:u,geometry:m,material:g,materialVariant:a(u),groupOrder:b,renderOrder:u.renderOrder,z:f,group:d},i[t]=R):(R.id=u.id,R.object=u,R.geometry=m,R.material=g,R.materialVariant=a(u),R.groupOrder=b,R.renderOrder=u.renderOrder,R.z=f,R.group=d),t++,R}function l(u,m,g,b,f,d,R){R.reversedDepth===!0&&(f=-f);let P=o(u,m,g,b,f,d);g.transmission>0?n.push(P):g.transparent===!0?s.push(P):e.push(P)}function c(u,m,g,b,f,d){let R=o(u,m,g,b,f,d);g.transmission>0?n.unshift(R):g.transparent===!0?s.unshift(R):e.unshift(R)}function h(u,m){e.length>1&&e.sort(u||Dv),n.length>1&&n.sort(m||zf),s.length>1&&s.sort(m||zf)}function p(){for(let u=t,m=i.length;u<m;u++){let g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:p,sort:h}}function Nv(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new kf,i.set(n,[a])):s>=r.length?(a=new kf,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Uv(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new U,color:new oe};break;case"SpotLight":e={position:new U,direction:new U,color:new oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new oe,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new oe,groundColor:new oe};break;case"RectAreaLight":e={color:new oe,position:new U,halfWidth:new U,halfHeight:new U};break}return i[t.id]=e,e}}}function Fv(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Ov=0;function Bv(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function zv(i){let t=new Uv,e=Fv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);let s=new U,r=new He,a=new He;function o(c){let h=0,p=0,u=0;for(let Z=0;Z<9;Z++)n.probe[Z].set(0,0,0);let m=0,g=0,b=0,f=0,d=0,R=0,P=0,M=0,S=0,T=0,N=0,v=0,A=0,k=0;c.sort(Bv);for(let Z=0,J=c.length;Z<J;Z++){let H=c[Z],q=H.color,lt=H.intensity,et=H.distance,gt=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===gs?gt=H.shadow.map.texture:gt=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)h+=q.r*lt,p+=q.g*lt,u+=q.b*lt;else if(H.isLightProbe){for(let nt=0;nt<9;nt++)n.probe[nt].addScaledVector(H.sh.coefficients[nt],lt);k++}else if(H.isSunLight){let nt=t.get(H);if(nt.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){let ct=H.shadow,ft=e.get(H);ft.shadowIntensity=ct.intensity,ft.shadowBias=ct.bias,ft.shadowNormalBias=ct.normalBias,ft.shadowRadius=ct.radius,ft.shadowMapSize.copy(ct.mapSize).multiply(ct.getFrameExtents()),n.sunShadow[g]=ft,n.sunShadowMap[g]=gt;let Zt=ct.getViewportCount();for(let Vt=0;Vt<Zt;Vt++)n.sunShadowMatrix[b+Vt]=ct.getMatrix(Vt),n.sunShadowCascade[b+Vt]=ct._cascadeData[Vt];b+=Zt,g++}n.sun[m]=nt,m++}else if(H.isDirectionalLight){let nt=t.get(H);if(nt.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){let ct=H.shadow,ft=e.get(H);ft.shadowIntensity=ct.intensity,ft.shadowBias=ct.bias,ft.shadowNormalBias=ct.normalBias,ft.shadowRadius=ct.radius,ft.shadowMapSize=ct.mapSize,n.directionalShadow[f]=ft,n.directionalShadowMap[f]=gt,n.directionalShadowMatrix[f]=H.shadow.matrix,S++}n.directional[f]=nt,f++}else if(H.isSpotLight){let nt=t.get(H);nt.position.setFromMatrixPosition(H.matrixWorld),nt.color.copy(q).multiplyScalar(lt),nt.distance=et,nt.coneCos=Math.cos(H.angle),nt.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),nt.decay=H.decay,n.spot[R]=nt;let ct=H.shadow;if(H.map&&(n.spotLightMap[v]=H.map,v++,ct.updateMatrices(H),H.castShadow&&A++),n.spotLightMatrix[R]=ct.matrix,H.castShadow){let ft=e.get(H);ft.shadowIntensity=ct.intensity,ft.shadowBias=ct.bias,ft.shadowNormalBias=ct.normalBias,ft.shadowRadius=ct.radius,ft.shadowMapSize=ct.mapSize,n.spotShadow[R]=ft,n.spotShadowMap[R]=gt,N++}R++}else if(H.isRectAreaLight){let nt=t.get(H);nt.color.copy(q).multiplyScalar(lt),nt.halfWidth.set(H.width*.5,0,0),nt.halfHeight.set(0,H.height*.5,0),n.rectArea[P]=nt,P++}else if(H.isPointLight){let nt=t.get(H);if(nt.color.copy(H.color).multiplyScalar(H.intensity),nt.distance=H.distance,nt.decay=H.decay,H.castShadow){let ct=H.shadow,ft=e.get(H);ft.shadowIntensity=ct.intensity,ft.shadowBias=ct.bias,ft.shadowNormalBias=ct.normalBias,ft.shadowRadius=ct.radius,ft.shadowMapSize=ct.mapSize,ft.shadowCameraNear=ct.camera.near,ft.shadowCameraFar=ct.camera.far,n.pointShadow[d]=ft,n.pointShadowMap[d]=gt,n.pointShadowMatrix[d]=H.shadow.matrix,T++}n.point[d]=nt,d++}else if(H.isHemisphereLight){let nt=t.get(H);nt.skyColor.copy(H.color).multiplyScalar(lt),nt.groundColor.copy(H.groundColor).multiplyScalar(lt),n.hemi[M]=nt,M++}}P>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Lt.LTC_FLOAT_1,n.rectAreaLTC2=Lt.LTC_FLOAT_2):(n.rectAreaLTC1=Lt.LTC_HALF_1,n.rectAreaLTC2=Lt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=p,n.ambient[2]=u;let G=n.hash;(G.sunLength!==m||G.directionalLength!==f||G.pointLength!==d||G.spotLength!==R||G.rectAreaLength!==P||G.hemiLength!==M||G.numSunShadows!==g||G.numDirectionalShadows!==S||G.numPointShadows!==T||G.numSpotShadows!==N||G.numSpotMaps!==v||G.numLightProbes!==k)&&(n.sun.length=m,n.directional.length=f,n.spot.length=R,n.rectArea.length=P,n.point.length=d,n.hemi.length=M,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=b,n.sunShadowCascade.length=b,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=N,n.spotShadowMap.length=N,n.spotLightMatrix.length=N+v-A,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=k,G.sunLength=m,G.directionalLength=f,G.pointLength=d,G.spotLength=R,G.rectAreaLength=P,G.hemiLength=M,G.numSunShadows=g,G.numDirectionalShadows=S,G.numPointShadows=T,G.numSpotShadows=N,G.numSpotMaps=v,G.numLightProbes=k,n.version=Ov++)}function l(c,h){let p=0,u=0,m=0,g=0,b=0,f=0,d=h.matrixWorldInverse;for(let R=0,P=c.length;R<P;R++){let M=c[R];if(M.isSunLight){let S=n.sun[p];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(d),p++}else if(M.isDirectionalLight){let S=n.directional[u];S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(d),u++}else if(M.isSpotLight){let S=n.spot[g];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(d),S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(d),g++}else if(M.isRectAreaLight){let S=n.rectArea[b];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(d),a.identity(),r.copy(M.matrixWorld),r.premultiply(d),a.extractRotation(r),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),b++}else if(M.isPointLight){let S=n.point[m];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(d),m++}else if(M.isHemisphereLight){let S=n.hemi[f];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(d),f++}}}return{setup:o,setupView:l,state:n}}function Vf(i){let t=new zv(i),e=[],n=[],s=[];function r(u){p.camera=u,e.length=0,n.length=0,s.length=0}function a(u){e.push(u)}function o(u){n.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let p={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:p,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function kv(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Vf(i),t.set(s,[o])):r>=a.length?(o=new Vf(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var Vv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Hv=`uniform sampler2D shadow_pass;
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
}`,Gv=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],Wv=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],Hf=new He,Ga=new U,ru=new U;function $v(i,t,e){let n=new vr,s=new It,r=new It,a=new ke,o=new rl,l=new al,c={},h=e.maxTextureSize,p={[ds]:On,[On]:ds,[Di]:Di},u=new pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new It},radius:{value:4}},vertexShader:Vv,fragmentShader:Hv}),m=u.clone();m.defines.HORIZONTAL_PASS=1;let g=new tn;g.setAttribute("position",new $e(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new In(g,u),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=La;let d=this.type;this.render=function(T,N,v){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||T.length===0)return;this.type===Dd&&(re("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=La);let A=i.getRenderTarget(),k=i.getActiveCubeFace(),G=i.getActiveMipmapLevel(),Z=i.state;Z.setBlending(Ni),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);let J=d!==this.type;J&&N.traverse(function(H){H.material&&(Array.isArray(H.material)?H.material.forEach(q=>q.needsUpdate=!0):H.material.needsUpdate=!0)});for(let H=0,q=T.length;H<q;H++){let lt=T[H],et=lt.shadow;if(et===void 0){re("WebGLShadowMap:",lt,"has no shadow.");continue}if(et.autoUpdate===!1&&et.needsUpdate===!1)continue;s.copy(et.mapSize);let gt=et.getFrameExtents();s.multiply(gt),r.copy(et.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/gt.x),s.x=r.x*gt.x,et.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/gt.y),s.y=r.y*gt.y,et.mapSize.y=r.y));let nt=i.state.buffers.depth.getReversed();if(et.camera._reversedDepth=nt,et.map===null||J===!0){if(et.map!==null&&(et.map.depthTexture!==null&&(et.map.depthTexture.dispose(),et.map.depthTexture=null),et.map.dispose()),this.type===Er){if(lt.isPointLight){re("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}et.map=new Hn(s.x,s.y,{format:gs,type:bi,minFilter:xn,magFilter:xn,generateMipmaps:!1}),et.map.texture.name=lt.name+".shadowMap",et.map.depthTexture=new os(s.x,s.y,Mi),et.map.depthTexture.name=lt.name+".shadowMapDepth",et.map.depthTexture.format=Ri,et.map.depthTexture.compareFunction=null,et.map.depthTexture.minFilter=dn,et.map.depthTexture.magFilter=dn}else lt.isPointLight?(et.map=new dc(s.x),et.map.depthTexture=new Ko(s.x,Si)):(et.map=new Hn(s.x,s.y),et.map.depthTexture=new os(s.x,s.y,Si)),et.map.depthTexture.name=lt.name+".shadowMap",et.map.depthTexture.format=Ri,this.type===La?(et.map.depthTexture.compareFunction=nt?lc:oc,et.map.depthTexture.minFilter=xn,et.map.depthTexture.magFilter=xn):(et.map.depthTexture.compareFunction=null,et.map.depthTexture.minFilter=dn,et.map.depthTexture.magFilter=dn);et.camera.updateProjectionMatrix()}et.map.isWebGLCubeRenderTarget!==!0&&(et.map.width!==s.x||et.map.height!==s.y)&&et.map.setSize(s.x,s.y);let ct=et.map.isWebGLCubeRenderTarget?6:et.getViewportCount();lt.isPointLight!==!0&&et.updateMatrices(lt,v);for(let ft=0;ft<ct;ft++){let Zt=et.getCamera(ft);if(lt.isPointLight){let Vt=et.camera,Pe=et.matrix,Me=lt.distance||Vt.far;Me!==Vt.far&&(Vt.far=Me,Vt.updateProjectionMatrix()),Ga.setFromMatrixPosition(lt.matrixWorld),Vt.position.copy(Ga),ru.copy(Vt.position),ru.add(Gv[ft]),Vt.up.copy(Wv[ft]),Vt.lookAt(ru),Vt.updateMatrixWorld(),Pe.makeTranslation(-Ga.x,-Ga.y,-Ga.z),Hf.multiplyMatrices(Vt.projectionMatrix,Vt.matrixWorldInverse),et._frustum.setFromProjectionMatrix(Hf,Vt.coordinateSystem,Vt.reversedDepth)}if(et.map.isWebGLCubeRenderTarget)i.setRenderTarget(et.map,ft),i.clear();else{ft===0&&(i.setRenderTarget(et.map),i.clear());let Vt=et.getViewport(ft);a.set(r.x*Vt.x,r.y*Vt.y,r.x*Vt.z,r.y*Vt.w),Z.viewport(a)}n=et.getFrustum(ft),M(N,v,Zt,lt,this.type)}et.isPointLightShadow!==!0&&this.type===Er&&R(et,v),et.needsUpdate=!1}d=this.type,f.needsUpdate=!1,i.setRenderTarget(A,k,G)};function R(T,N){let v=t.update(b);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null?T.mapPass=new Hn(s.x,s.y,{format:gs,type:bi}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(N,null,v,u,b,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value.set(T.map.width,T.map.height),m.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(N,null,v,m,b,null)}function P(T,N,v,A){let k=null,G=v.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(G!==void 0)k=G;else if(k=v.isPointLight===!0?l:o,i.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){let Z=k.uuid,J=N.uuid,H=c[Z];H===void 0&&(H={},c[Z]=H);let q=H[J];q===void 0&&(q=k.clone(),H[J]=q,N.addEventListener("dispose",S)),k=q}if(k.visible=N.visible,k.wireframe=N.wireframe,A===Er?k.side=N.shadowSide!==null?N.shadowSide:N.side:k.side=N.shadowSide!==null?N.shadowSide:p[N.side],k.alphaMap=N.alphaMap,k.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,k.map=N.map,k.clipShadows=N.clipShadows,k.clippingPlanes=N.clippingPlanes,k.clipIntersection=N.clipIntersection,k.displacementMap=N.displacementMap,k.displacementScale=N.displacementScale,k.displacementBias=N.displacementBias,k.wireframeLinewidth=N.wireframeLinewidth,k.linewidth=N.linewidth,v.isPointLight===!0&&k.isMeshDistanceMaterial===!0){let Z=i.properties.get(k);Z.light=v}return k}function M(T,N,v,A,k){if(T.visible===!1)return;if(T.layers.test(N.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&k===Er)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,T.matrixWorld);let J=t.update(T),H=T.material;if(Array.isArray(H)){let q=J.groups;for(let lt=0,et=q.length;lt<et;lt++){let gt=q[lt],nt=H[gt.materialIndex];if(nt&&nt.visible){let ct=P(T,nt,A,k);T.onBeforeShadow(i,T,N,v,J,ct,gt),i.renderBufferDirect(v,null,J,ct,T,gt),T.onAfterShadow(i,T,N,v,J,ct,gt)}}}else if(H.visible){let q=P(T,H,A,k);T.onBeforeShadow(i,T,N,v,J,q,null),i.renderBufferDirect(v,null,J,q,T,null),T.onAfterShadow(i,T,N,v,J,q,null)}}let Z=T.children;for(let J=0,H=Z.length;J<H;J++)M(Z[J],N,v,A,k)}function S(T){T.target.removeEventListener("dispose",S);for(let v in c){let A=c[v],k=T.target.uuid;k in A&&(A[k].dispose(),delete A[k])}}}function Xv(i,t){function e(){let B=!1,Mt=new ke,dt=null,Ct=new ke(0,0,0,0);return{setMask:function(Ft){dt!==Ft&&!B&&(i.colorMask(Ft,Ft,Ft,Ft),dt=Ft)},setLocked:function(Ft){B=Ft},setClear:function(Ft,mt,Kt,qt,Be){Be===!0&&(Ft*=qt,mt*=qt,Kt*=qt),Mt.set(Ft,mt,Kt,qt),Ct.equals(Mt)===!1&&(i.clearColor(Ft,mt,Kt,qt),Ct.copy(Mt))},reset:function(){B=!1,dt=null,Ct.set(-1,0,0,0)}}}function n(){let B=!1,Mt=!1,dt=null,Ct=null,Ft=null;return{setReversed:function(mt){if(Mt!==mt){let Kt=t.get("EXT_clip_control");mt?Kt.clipControlEXT(Kt.LOWER_LEFT_EXT,Kt.ZERO_TO_ONE_EXT):Kt.clipControlEXT(Kt.LOWER_LEFT_EXT,Kt.NEGATIVE_ONE_TO_ONE_EXT),Mt=mt;let qt=Ft;Ft=null,this.setClear(qt)}},getReversed:function(){return Mt},setTest:function(mt){mt?ht(i.DEPTH_TEST):Rt(i.DEPTH_TEST)},setMask:function(mt){dt!==mt&&!B&&(i.depthMask(mt),dt=mt)},setFunc:function(mt){if(Mt&&(mt=pf[mt]),Ct!==mt){switch(mt){case Lo:i.depthFunc(i.NEVER);break;case Do:i.depthFunc(i.ALWAYS);break;case No:i.depthFunc(i.LESS);break;case dr:i.depthFunc(i.LEQUAL);break;case Uo:i.depthFunc(i.EQUAL);break;case Fo:i.depthFunc(i.GEQUAL);break;case Oo:i.depthFunc(i.GREATER);break;case Bo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ct=mt}},setLocked:function(mt){B=mt},setClear:function(mt){Ft!==mt&&(Ft=mt,Mt&&(mt=1-mt),i.clearDepth(mt))},reset:function(){B=!1,dt=null,Ct=null,Ft=null,Mt=!1}}}function s(){let B=!1,Mt=null,dt=null,Ct=null,Ft=null,mt=null,Kt=null,qt=null,Be=null;return{setTest:function(we){B||(we?ht(i.STENCIL_TEST):Rt(i.STENCIL_TEST))},setMask:function(we){Mt!==we&&!B&&(i.stencilMask(we),Mt=we)},setFunc:function(we,bn,$n){(dt!==we||Ct!==bn||Ft!==$n)&&(i.stencilFunc(we,bn,$n),dt=we,Ct=bn,Ft=$n)},setOp:function(we,bn,$n){(mt!==we||Kt!==bn||qt!==$n)&&(i.stencilOp(we,bn,$n),mt=we,Kt=bn,qt=$n)},setLocked:function(we){B=we},setClear:function(we){Be!==we&&(i.clearStencil(we),Be=we)},reset:function(){B=!1,Mt=null,dt=null,Ct=null,Ft=null,mt=null,Kt=null,qt=null,Be=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},p={},u={},m=new WeakMap,g=[],b=null,f=!1,d=null,R=null,P=null,M=null,S=null,T=null,N=null,v=new oe(0,0,0),A=0,k=!1,G=null,Z=null,J=null,H=null,q=null,lt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),et=!1,gt=0,nt=i.getParameter(i.VERSION);nt.indexOf("WebGL")!==-1?(gt=parseFloat(/^WebGL (\d)/.exec(nt)[1]),et=gt>=1):nt.indexOf("OpenGL ES")!==-1&&(gt=parseFloat(/^OpenGL ES (\d)/.exec(nt)[1]),et=gt>=2);let ct=null,ft={},Zt=i.getParameter(i.SCISSOR_BOX),Vt=i.getParameter(i.VIEWPORT),Pe=new ke().fromArray(Zt),Me=new ke().fromArray(Vt);function Ce(B,Mt,dt,Ct){let Ft=new Uint8Array(4),mt=i.createTexture();i.bindTexture(B,mt),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Kt=0;Kt<dt;Kt++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(Mt,0,i.RGBA,1,1,Ct,0,i.RGBA,i.UNSIGNED_BYTE,Ft):i.texImage2D(Mt+Kt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ft);return mt}let j={};j[i.TEXTURE_2D]=Ce(i.TEXTURE_2D,i.TEXTURE_2D,1),j[i.TEXTURE_CUBE_MAP]=Ce(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[i.TEXTURE_2D_ARRAY]=Ce(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),j[i.TEXTURE_3D]=Ce(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ht(i.DEPTH_TEST),a.setFunc(dr),xt(!1),yt(wh),ht(i.CULL_FACE),pt(Ni);function ht(B){h[B]!==!0&&(i.enable(B),h[B]=!0)}function Rt(B){h[B]!==!1&&(i.disable(B),h[B]=!1)}function ee(B,Mt){return u[B]!==Mt?(i.bindFramebuffer(B,Mt),u[B]=Mt,B===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Mt),B===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Mt),!0):!1}function At(B,Mt){let dt=g,Ct=!1;if(B){dt=m.get(Mt),dt===void 0&&(dt=[],m.set(Mt,dt));let Ft=B.textures;if(dt.length!==Ft.length||dt[0]!==i.COLOR_ATTACHMENT0){for(let mt=0,Kt=Ft.length;mt<Kt;mt++)dt[mt]=i.COLOR_ATTACHMENT0+mt;dt.length=Ft.length,Ct=!0}}else dt[0]!==i.BACK&&(dt[0]=i.BACK,Ct=!0);Ct&&i.drawBuffers(dt)}function Gt(B){return b!==B?(i.useProgram(B),b=B,!0):!1}let Le={[Us]:i.FUNC_ADD,[Ud]:i.FUNC_SUBTRACT,[Fd]:i.FUNC_REVERSE_SUBTRACT};Le[Od]=i.MIN,Le[Bd]=i.MAX;let D={[zd]:i.ZERO,[kd]:i.ONE,[Vd]:i.SRC_COLOR,[Ch]:i.SRC_ALPHA,[qd]:i.SRC_ALPHA_SATURATE,[$d]:i.DST_COLOR,[Gd]:i.DST_ALPHA,[Hd]:i.ONE_MINUS_SRC_COLOR,[Rh]:i.ONE_MINUS_SRC_ALPHA,[Xd]:i.ONE_MINUS_DST_COLOR,[Wd]:i.ONE_MINUS_DST_ALPHA,[Yd]:i.CONSTANT_COLOR,[Zd]:i.ONE_MINUS_CONSTANT_COLOR,[Jd]:i.CONSTANT_ALPHA,[Kd]:i.ONE_MINUS_CONSTANT_ALPHA};function pt(B,Mt,dt,Ct,Ft,mt,Kt,qt,Be,we){if(B===Ni){f===!0&&(Rt(i.BLEND),f=!1);return}if(f===!1&&(ht(i.BLEND),f=!0),B!==Nd){if(B!==d||we!==k){if((R!==Us||S!==Us)&&(i.blendEquation(i.FUNC_ADD),R=Us,S=Us),we)switch(B){case Tr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Eh:i.blendFunc(i.ONE,i.ONE);break;case Th:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ah:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:le("WebGLState: Invalid blending: ",B);break}else switch(B){case Tr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Eh:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Th:le("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ah:le("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:le("WebGLState: Invalid blending: ",B);break}P=null,M=null,T=null,N=null,v.set(0,0,0),A=0,d=B,k=we}return}Ft=Ft||Mt,mt=mt||dt,Kt=Kt||Ct,(Mt!==R||Ft!==S)&&(i.blendEquationSeparate(Le[Mt],Le[Ft]),R=Mt,S=Ft),(dt!==P||Ct!==M||mt!==T||Kt!==N)&&(i.blendFuncSeparate(D[dt],D[Ct],D[mt],D[Kt]),P=dt,M=Ct,T=mt,N=Kt),(qt.equals(v)===!1||Be!==A)&&(i.blendColor(qt.r,qt.g,qt.b,Be),v.copy(qt),A=Be),d=B,k=!1}function vt(B,Mt){B.side===Di?Rt(i.CULL_FACE):ht(i.CULL_FACE);let dt=B.side===On;Mt&&(dt=!dt),xt(dt),B.blending===Tr&&B.transparent===!1?pt(Ni):pt(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),r.setMask(B.colorWrite);let Ct=B.stencilWrite;o.setTest(Ct),Ct&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Qt(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?ht(i.SAMPLE_ALPHA_TO_COVERAGE):Rt(i.SAMPLE_ALPHA_TO_COVERAGE)}function xt(B){G!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),G=B)}function yt(B){B!==Pd?(ht(i.CULL_FACE),B!==Z&&(B===wh?i.cullFace(i.BACK):B===Ld?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Rt(i.CULL_FACE),Z=B}function te(B){B!==J&&(et&&i.lineWidth(B),J=B)}function Qt(B,Mt,dt){B?(ht(i.POLYGON_OFFSET_FILL),(H!==Mt||q!==dt)&&(H=Mt,q=dt,a.getReversed()&&(Mt=-Mt),i.polygonOffset(Mt,dt))):Rt(i.POLYGON_OFFSET_FILL)}function zt(B){B?ht(i.SCISSOR_TEST):Rt(i.SCISSOR_TEST)}function ce(B){B===void 0&&(B=i.TEXTURE0+lt-1),ct!==B&&(i.activeTexture(B),ct=B)}function F(B,Mt,dt){dt===void 0&&(ct===null?dt=i.TEXTURE0+lt-1:dt=ct);let Ct=ft[dt];Ct===void 0&&(Ct={type:void 0,texture:void 0},ft[dt]=Ct),(Ct.type!==B||Ct.texture!==Mt)&&(ct!==dt&&(i.activeTexture(dt),ct=dt),i.bindTexture(B,Mt||j[B]),Ct.type=B,Ct.texture=Mt)}function Ne(){let B=ft[ct];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function ve(){try{i.compressedTexImage2D(...arguments)}catch(B){le("WebGLState:",B)}}function E(){try{i.compressedTexImage3D(...arguments)}catch(B){le("WebGLState:",B)}}function _(){try{i.texSubImage2D(...arguments)}catch(B){le("WebGLState:",B)}}function W(){try{i.texSubImage3D(...arguments)}catch(B){le("WebGLState:",B)}}function Y(){try{i.compressedTexSubImage2D(...arguments)}catch(B){le("WebGLState:",B)}}function st(){try{i.compressedTexSubImage3D(...arguments)}catch(B){le("WebGLState:",B)}}function St(){try{i.texStorage2D(...arguments)}catch(B){le("WebGLState:",B)}}function wt(){try{i.texStorage3D(...arguments)}catch(B){le("WebGLState:",B)}}function rt(){try{i.texImage2D(...arguments)}catch(B){le("WebGLState:",B)}}function ut(){try{i.texImage3D(...arguments)}catch(B){le("WebGLState:",B)}}function Et(B){return p[B]!==void 0?p[B]:i.getParameter(B)}function Xt(B,Mt){p[B]!==Mt&&(i.pixelStorei(B,Mt),p[B]=Mt)}function Dt(B){Pe.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),Pe.copy(B))}function Tt(B){Me.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),Me.copy(B))}function Jt(B,Mt){let dt=c.get(Mt);dt===void 0&&(dt=new WeakMap,c.set(Mt,dt));let Ct=dt.get(B);Ct===void 0&&(Ct=i.getUniformBlockIndex(Mt,B.name),dt.set(B,Ct))}function ne(B,Mt){let Ct=c.get(Mt).get(B);l.get(Mt)!==Ct&&(i.uniformBlockBinding(Mt,Ct,B.__bindingPointIndex),l.set(Mt,Ct))}function ie(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},p={},ct=null,ft={},u={},m=new WeakMap,g=[],b=null,f=!1,d=null,R=null,P=null,M=null,S=null,T=null,N=null,v=new oe(0,0,0),A=0,k=!1,G=null,Z=null,J=null,H=null,q=null,Pe.set(0,0,i.canvas.width,i.canvas.height),Me.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ht,disable:Rt,bindFramebuffer:ee,drawBuffers:At,useProgram:Gt,setBlending:pt,setMaterial:vt,setFlipSided:xt,setCullFace:yt,setLineWidth:te,setPolygonOffset:Qt,setScissorTest:zt,activeTexture:ce,bindTexture:F,unbindTexture:Ne,compressedTexImage2D:ve,compressedTexImage3D:E,texImage2D:rt,texImage3D:ut,pixelStorei:Xt,getParameter:Et,updateUBOMapping:Jt,uniformBlockBinding:ne,texStorage2D:St,texStorage3D:wt,texSubImage2D:_,texSubImage3D:W,compressedTexSubImage2D:Y,compressedTexSubImage3D:st,scissor:Dt,viewport:Tt,reset:ie}}function qv(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new It,h=new WeakMap,p=new Set,u,m=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(E,_){return g?new OffscreenCanvas(E,_):sa("canvas")}function f(E,_,W){let Y=1,st=ve(E);if((st.width>W||st.height>W)&&(Y=W/Math.max(st.width,st.height)),Y<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let St=Math.floor(Y*st.width),wt=Math.floor(Y*st.height);u===void 0&&(u=b(St,wt));let rt=_?b(St,wt):u;return rt.width=St,rt.height=wt,rt.getContext("2d").drawImage(E,0,0,St,wt),re("WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+St+"x"+wt+")."),rt}else return"data"in E&&re("WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+")."),E;return E}function d(E){return E.generateMipmaps}function R(E){i.generateMipmap(E)}function P(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(E,_,W,Y,st,St=!1){if(E!==null){if(i[E]!==void 0)return i[E];re("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let wt;Y&&(wt=t.get("EXT_texture_norm16"),wt||re("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let rt=_;if(_===i.RED&&(W===i.FLOAT&&(rt=i.R32F),W===i.HALF_FLOAT&&(rt=i.R16F),W===i.UNSIGNED_BYTE&&(rt=i.R8),W===i.UNSIGNED_SHORT&&wt&&(rt=wt.R16_EXT),W===i.SHORT&&wt&&(rt=wt.R16_SNORM_EXT)),_===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(rt=i.R8UI),W===i.UNSIGNED_SHORT&&(rt=i.R16UI),W===i.UNSIGNED_INT&&(rt=i.R32UI),W===i.BYTE&&(rt=i.R8I),W===i.SHORT&&(rt=i.R16I),W===i.INT&&(rt=i.R32I)),_===i.RG&&(W===i.FLOAT&&(rt=i.RG32F),W===i.HALF_FLOAT&&(rt=i.RG16F),W===i.UNSIGNED_BYTE&&(rt=i.RG8),W===i.UNSIGNED_SHORT&&wt&&(rt=wt.RG16_EXT),W===i.SHORT&&wt&&(rt=wt.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(rt=i.RG8UI),W===i.UNSIGNED_SHORT&&(rt=i.RG16UI),W===i.UNSIGNED_INT&&(rt=i.RG32UI),W===i.BYTE&&(rt=i.RG8I),W===i.SHORT&&(rt=i.RG16I),W===i.INT&&(rt=i.RG32I)),_===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(rt=i.RGB8UI),W===i.UNSIGNED_SHORT&&(rt=i.RGB16UI),W===i.UNSIGNED_INT&&(rt=i.RGB32UI),W===i.BYTE&&(rt=i.RGB8I),W===i.SHORT&&(rt=i.RGB16I),W===i.INT&&(rt=i.RGB32I)),_===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(rt=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(rt=i.RGBA16UI),W===i.UNSIGNED_INT&&(rt=i.RGBA32UI),W===i.BYTE&&(rt=i.RGBA8I),W===i.SHORT&&(rt=i.RGBA16I),W===i.INT&&(rt=i.RGBA32I)),_===i.RGB&&(W===i.UNSIGNED_SHORT&&wt&&(rt=wt.RGB16_EXT),W===i.SHORT&&wt&&(rt=wt.RGB16_SNORM_EXT),W===i.UNSIGNED_INT_5_9_9_9_REV&&(rt=i.RGB9_E5),W===i.UNSIGNED_INT_10F_11F_11F_REV&&(rt=i.R11F_G11F_B10F)),_===i.RGBA){let ut=St?ia:Re.getTransfer(st);W===i.FLOAT&&(rt=i.RGBA32F),W===i.HALF_FLOAT&&(rt=i.RGBA16F),W===i.UNSIGNED_BYTE&&(rt=ut===ze?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT&&wt&&(rt=wt.RGBA16_EXT),W===i.SHORT&&wt&&(rt=wt.RGBA16_SNORM_EXT),W===i.UNSIGNED_SHORT_4_4_4_4&&(rt=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(rt=i.RGB5_A1)}return(rt===i.R16F||rt===i.R32F||rt===i.RG16F||rt===i.RG32F||rt===i.RGBA16F||rt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),rt}function S(E,_){let W;return E?_===null||_===Si||_===Cr?W=i.DEPTH24_STENCIL8:_===Mi?W=i.DEPTH32F_STENCIL8:_===Ar&&(W=i.DEPTH24_STENCIL8,re("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Si||_===Cr?W=i.DEPTH_COMPONENT24:_===Mi?W=i.DEPTH_COMPONENT32F:_===Ar&&(W=i.DEPTH_COMPONENT16),W}function T(E,_){return d(E)===!0||E.isFramebufferTexture&&E.minFilter!==dn&&E.minFilter!==xn?Math.log2(Math.max(_.width,_.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?_.mipmaps.length:1}function N(E){let _=E.target;_.removeEventListener("dispose",N),A(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&p.delete(_)}function v(E){let _=E.target;_.removeEventListener("dispose",v),G(_)}function A(E){let _=n.get(E);if(_.__webglInit===void 0)return;let W=E.source,Y=m.get(W);if(Y){let st=Y[_.__cacheKey];st.usedTimes--,st.usedTimes===0&&k(E),Object.keys(Y).length===0&&m.delete(W)}n.remove(E)}function k(E){let _=n.get(E);i.deleteTexture(_.__webglTexture);let W=E.source,Y=m.get(W);delete Y[_.__cacheKey],a.memory.textures--}function G(E){let _=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(_.__webglFramebuffer[Y]))for(let st=0;st<_.__webglFramebuffer[Y].length;st++)i.deleteFramebuffer(_.__webglFramebuffer[Y][st]);else i.deleteFramebuffer(_.__webglFramebuffer[Y]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[Y])}else{if(Array.isArray(_.__webglFramebuffer))for(let Y=0;Y<_.__webglFramebuffer.length;Y++)i.deleteFramebuffer(_.__webglFramebuffer[Y]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Y=0;Y<_.__webglColorRenderbuffer.length;Y++)_.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[Y]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let W=E.textures;for(let Y=0,st=W.length;Y<st;Y++){let St=n.get(W[Y]);St.__webglTexture&&(i.deleteTexture(St.__webglTexture),a.memory.textures--),n.remove(W[Y])}n.remove(E)}let Z=0;function J(){Z=0}function H(){return Z}function q(E){Z=E}function lt(){let E=Z;return E>=s.maxTextures&&re("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+s.maxTextures),Z+=1,E}function et(E){let _=[];return _.push(E.wrapS),_.push(E.wrapT),_.push(E.wrapR||0),_.push(E.magFilter),_.push(E.minFilter),_.push(E.anisotropy),_.push(E.internalFormat),_.push(E.format),_.push(E.type),_.push(E.generateMipmaps),_.push(E.premultiplyAlpha),_.push(E.flipY),_.push(E.unpackAlignment),_.push(E.colorSpace),_.join()}function gt(E,_){let W=n.get(E);if(E.isVideoTexture&&F(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&W.__version!==E.version){let Y=E.image;if(Y===null)re("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)re("WebGLRenderer: Texture marked for update but image is incomplete");else{Rt(W,E,_);return}}else E.isExternalTexture&&(W.__webglTexture=E.sourceTexture?E.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+_)}function nt(E,_){let W=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&W.__version!==E.version){Rt(W,E,_);return}else E.isExternalTexture&&(W.__webglTexture=E.sourceTexture?E.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+_)}function ct(E,_){let W=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&W.__version!==E.version){Rt(W,E,_);return}e.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+_)}function ft(E,_){let W=n.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&W.__version!==E.version){ee(W,E,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+_)}let Zt={[zo]:i.REPEAT,[Ai]:i.CLAMP_TO_EDGE,[ko]:i.MIRRORED_REPEAT},Vt={[dn]:i.NEAREST,[tf]:i.NEAREST_MIPMAP_NEAREST,[Na]:i.NEAREST_MIPMAP_LINEAR,[xn]:i.LINEAR,[bl]:i.LINEAR_MIPMAP_NEAREST,[ps]:i.LINEAR_MIPMAP_LINEAR},Pe={[rf]:i.NEVER,[hf]:i.ALWAYS,[af]:i.LESS,[oc]:i.LEQUAL,[of]:i.EQUAL,[lc]:i.GEQUAL,[lf]:i.GREATER,[cf]:i.NOTEQUAL};function Me(E,_){if(_.type===Mi&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===xn||_.magFilter===bl||_.magFilter===Na||_.magFilter===ps||_.minFilter===xn||_.minFilter===bl||_.minFilter===Na||_.minFilter===ps)&&re("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,Zt[_.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,Zt[_.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,Zt[_.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,Vt[_.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,Vt[_.minFilter]),_.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,Pe[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===dn||_.minFilter!==Na&&_.minFilter!==ps||_.type===Mi&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let W=t.get("EXT_texture_filter_anisotropic");i.texParameterf(E,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Ce(E,_){let W=!1;E.__webglInit===void 0&&(E.__webglInit=!0,_.addEventListener("dispose",N));let Y=_.source,st=m.get(Y);st===void 0&&(st={},m.set(Y,st));let St=et(_);if(St!==E.__cacheKey){st[St]===void 0&&(st[St]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,W=!0),st[St].usedTimes++;let wt=st[E.__cacheKey];wt!==void 0&&(st[E.__cacheKey].usedTimes--,wt.usedTimes===0&&k(_)),E.__cacheKey=St,E.__webglTexture=st[St].texture}return W}function j(E,_,W){return Math.floor(Math.floor(E/W)/_)}function ht(E,_,W,Y){let St=E.updateRanges;if(St.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,W,Y,_.data);else{St.sort((Xt,Dt)=>Xt.start-Dt.start);let wt=0;for(let Xt=1;Xt<St.length;Xt++){let Dt=St[wt],Tt=St[Xt],Jt=Dt.start+Dt.count,ne=j(Tt.start,_.width,4),ie=j(Dt.start,_.width,4);Tt.start<=Jt+1&&ne===ie&&j(Tt.start+Tt.count-1,_.width,4)===ne?Dt.count=Math.max(Dt.count,Tt.start+Tt.count-Dt.start):(++wt,St[wt]=Tt)}St.length=wt+1;let rt=e.getParameter(i.UNPACK_ROW_LENGTH),ut=e.getParameter(i.UNPACK_SKIP_PIXELS),Et=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let Xt=0,Dt=St.length;Xt<Dt;Xt++){let Tt=St[Xt],Jt=Math.floor(Tt.start/4),ne=Math.ceil(Tt.count/4),ie=Jt%_.width,B=Math.floor(Jt/_.width),Mt=ne,dt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,ie),e.pixelStorei(i.UNPACK_SKIP_ROWS,B),e.texSubImage2D(i.TEXTURE_2D,0,ie,B,Mt,dt,W,Y,_.data)}E.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,rt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,ut),e.pixelStorei(i.UNPACK_SKIP_ROWS,Et)}}function Rt(E,_,W){let Y=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Y=i.TEXTURE_3D);let st=Ce(E,_),St=_.source;e.bindTexture(Y,E.__webglTexture,i.TEXTURE0+W);let wt=n.get(St);if(St.version!==wt.__version||st===!0){if(e.activeTexture(i.TEXTURE0+W),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let dt=Re.getPrimaries(Re.workingColorSpace),Ct=_.colorSpace===Ki?null:Re.getPrimaries(_.colorSpace),Ft=_.colorSpace===Ki||dt===Ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ft)}e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let ut=f(_.image,!1,s.maxTextureSize);ut=Ne(_,ut);let Et=r.convert(_.format,_.colorSpace),Xt=r.convert(_.type),Dt=M(_.internalFormat,Et,Xt,_.normalized,_.colorSpace,_.isVideoTexture);Me(Y,_);let Tt,Jt=_.mipmaps,ne=_.isVideoTexture!==!0,ie=wt.__version===void 0||st===!0,B=St.dataReady,Mt=T(_,ut);if(_.isDepthTexture)Dt=S(_.format===ms,_.type),ie&&(ne?e.texStorage2D(i.TEXTURE_2D,1,Dt,ut.width,ut.height):e.texImage2D(i.TEXTURE_2D,0,Dt,ut.width,ut.height,0,Et,Xt,null));else if(_.isDataTexture)if(Jt.length>0){ne&&ie&&e.texStorage2D(i.TEXTURE_2D,Mt,Dt,Jt[0].width,Jt[0].height);for(let dt=0,Ct=Jt.length;dt<Ct;dt++)Tt=Jt[dt],ne?B&&e.texSubImage2D(i.TEXTURE_2D,dt,0,0,Tt.width,Tt.height,Et,Xt,Tt.data):e.texImage2D(i.TEXTURE_2D,dt,Dt,Tt.width,Tt.height,0,Et,Xt,Tt.data);_.generateMipmaps=!1}else ne?(ie&&e.texStorage2D(i.TEXTURE_2D,Mt,Dt,ut.width,ut.height),B&&ht(_,ut,Et,Xt)):e.texImage2D(i.TEXTURE_2D,0,Dt,ut.width,ut.height,0,Et,Xt,ut.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){ne&&ie&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Mt,Dt,Jt[0].width,Jt[0].height,ut.depth);for(let dt=0,Ct=Jt.length;dt<Ct;dt++)if(Tt=Jt[dt],_.format!==ci)if(Et!==null)if(ne){if(B)if(_.layerUpdates.size>0){let Ft=Qh(Tt.width,Tt.height,_.format,_.type);for(let mt of _.layerUpdates){let Kt=Tt.data.subarray(mt*Ft/Tt.data.BYTES_PER_ELEMENT,(mt+1)*Ft/Tt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,mt,Tt.width,Tt.height,1,Et,Kt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,0,Tt.width,Tt.height,ut.depth,Et,Tt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,dt,Dt,Tt.width,Tt.height,ut.depth,0,Tt.data,0,0);else re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ne?B&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,0,Tt.width,Tt.height,ut.depth,Et,Xt,Tt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,dt,Dt,Tt.width,Tt.height,ut.depth,0,Et,Xt,Tt.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{ne&&ie&&e.texStorage2D(i.TEXTURE_2D,Mt,Dt,Jt[0].width,Jt[0].height);for(let dt=0,Ct=Jt.length;dt<Ct;dt++)Tt=Jt[dt],_.format!==ci?Et!==null?ne?B&&e.compressedTexSubImage2D(i.TEXTURE_2D,dt,0,0,Tt.width,Tt.height,Et,Tt.data):e.compressedTexImage2D(i.TEXTURE_2D,dt,Dt,Tt.width,Tt.height,0,Tt.data):re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ne?B&&e.texSubImage2D(i.TEXTURE_2D,dt,0,0,Tt.width,Tt.height,Et,Xt,Tt.data):e.texImage2D(i.TEXTURE_2D,dt,Dt,Tt.width,Tt.height,0,Et,Xt,Tt.data)}else if(_.isDataArrayTexture)if(ne){if(ie&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Mt,Dt,ut.width,ut.height,ut.depth),B)if(_.layerUpdates.size>0){let dt=Qh(ut.width,ut.height,_.format,_.type);for(let Ct of _.layerUpdates){let Ft=ut.data.subarray(Ct*dt/ut.data.BYTES_PER_ELEMENT,(Ct+1)*dt/ut.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ct,ut.width,ut.height,1,Et,Xt,Ft)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ut.width,ut.height,ut.depth,Et,Xt,ut.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Dt,ut.width,ut.height,ut.depth,0,Et,Xt,ut.data);else if(_.isData3DTexture)ne?(ie&&e.texStorage3D(i.TEXTURE_3D,Mt,Dt,ut.width,ut.height,ut.depth),B&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ut.width,ut.height,ut.depth,Et,Xt,ut.data)):e.texImage3D(i.TEXTURE_3D,0,Dt,ut.width,ut.height,ut.depth,0,Et,Xt,ut.data);else if(_.isFramebufferTexture){if(ie)if(ne)e.texStorage2D(i.TEXTURE_2D,Mt,Dt,ut.width,ut.height);else{let dt=ut.width,Ct=ut.height;for(let Ft=0;Ft<Mt;Ft++)e.texImage2D(i.TEXTURE_2D,Ft,Dt,dt,Ct,0,Et,Xt,null),dt>>=1,Ct>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){let dt=i.canvas;if(dt.hasAttribute("layoutsubtree")||dt.setAttribute("layoutsubtree","true"),ut.parentNode!==dt){dt.appendChild(ut),p.add(_),dt.onpaint=Ct=>{let Ft=Ct.changedElements;for(let mt of p)Ft.includes(mt.image)&&(mt.needsUpdate=!0)},dt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ut);else{let Ft=i.RGBA,mt=i.RGBA,Kt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ft,mt,Kt,ut)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Jt.length>0){if(ne&&ie){let dt=ve(Jt[0]);e.texStorage2D(i.TEXTURE_2D,Mt,Dt,dt.width,dt.height)}for(let dt=0,Ct=Jt.length;dt<Ct;dt++)Tt=Jt[dt],ne?B&&e.texSubImage2D(i.TEXTURE_2D,dt,0,0,Et,Xt,Tt):e.texImage2D(i.TEXTURE_2D,dt,Dt,Et,Xt,Tt);_.generateMipmaps=!1}else if(ne){if(ie){let dt=ve(ut);e.texStorage2D(i.TEXTURE_2D,Mt,Dt,dt.width,dt.height)}B&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Et,Xt,ut)}else e.texImage2D(i.TEXTURE_2D,0,Dt,Et,Xt,ut);d(_)&&R(Y),wt.__version=St.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function ee(E,_,W){if(_.image.length!==6)return;let Y=Ce(E,_),st=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+W);let St=n.get(st);if(st.version!==St.__version||Y===!0){e.activeTexture(i.TEXTURE0+W);let wt=Re.getPrimaries(Re.workingColorSpace),rt=_.colorSpace===Ki?null:Re.getPrimaries(_.colorSpace),ut=_.colorSpace===Ki||wt===rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);let Et=_.isCompressedTexture||_.image[0].isCompressedTexture,Xt=_.image[0]&&_.image[0].isDataTexture,Dt=[];for(let mt=0;mt<6;mt++)!Et&&!Xt?Dt[mt]=f(_.image[mt],!0,s.maxCubemapSize):Dt[mt]=Xt?_.image[mt].image:_.image[mt],Dt[mt]=Ne(_,Dt[mt]);let Tt=Dt[0],Jt=r.convert(_.format,_.colorSpace),ne=r.convert(_.type),ie=M(_.internalFormat,Jt,ne,_.normalized,_.colorSpace),B=_.isVideoTexture!==!0,Mt=St.__version===void 0||Y===!0,dt=st.dataReady,Ct=T(_,Tt);Me(i.TEXTURE_CUBE_MAP,_);let Ft;if(Et){B&&Mt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Ct,ie,Tt.width,Tt.height);for(let mt=0;mt<6;mt++){Ft=Dt[mt].mipmaps;for(let Kt=0;Kt<Ft.length;Kt++){let qt=Ft[Kt];_.format!==ci?Jt!==null?B?dt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Kt,0,0,qt.width,qt.height,Jt,qt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Kt,ie,qt.width,qt.height,0,qt.data):re("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Kt,0,0,qt.width,qt.height,Jt,ne,qt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Kt,ie,qt.width,qt.height,0,Jt,ne,qt.data)}}}else{if(Ft=_.mipmaps,B&&Mt){Ft.length>0&&Ct++;let mt=ve(Dt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Ct,ie,mt.width,mt.height)}for(let mt=0;mt<6;mt++)if(Xt){B?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,Dt[mt].width,Dt[mt].height,Jt,ne,Dt[mt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,ie,Dt[mt].width,Dt[mt].height,0,Jt,ne,Dt[mt].data);for(let Kt=0;Kt<Ft.length;Kt++){let Be=Ft[Kt].image[mt].image;B?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Kt+1,0,0,Be.width,Be.height,Jt,ne,Be.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Kt+1,ie,Be.width,Be.height,0,Jt,ne,Be.data)}}else{B?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,Jt,ne,Dt[mt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,ie,Jt,ne,Dt[mt]);for(let Kt=0;Kt<Ft.length;Kt++){let qt=Ft[Kt];B?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Kt+1,0,0,Jt,ne,qt.image[mt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Kt+1,ie,Jt,ne,qt.image[mt])}}}d(_)&&R(i.TEXTURE_CUBE_MAP),St.__version=st.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function At(E,_,W,Y,st,St){let wt=r.convert(W.format,W.colorSpace),rt=r.convert(W.type),ut=M(W.internalFormat,wt,rt,W.normalized,W.colorSpace),Et=n.get(_),Xt=n.get(W);if(Xt.__renderTarget=_,!Et.__hasExternalTextures){let Dt=Math.max(1,_.width>>St),Tt=Math.max(1,_.height>>St);st===i.TEXTURE_3D||st===i.TEXTURE_2D_ARRAY?e.texImage3D(st,St,ut,Dt,Tt,_.depth,0,wt,rt,null):e.texImage2D(st,St,ut,Dt,Tt,0,wt,rt,null)}e.bindFramebuffer(i.FRAMEBUFFER,E),ce(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,st,Xt.__webglTexture,0,zt(_)):(st===i.TEXTURE_2D||st>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,st,Xt.__webglTexture,St),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Gt(E,_,W){if(i.bindRenderbuffer(i.RENDERBUFFER,E),_.depthBuffer){let Y=_.depthTexture,st=Y&&Y.isDepthTexture?Y.type:null,St=S(_.stencilBuffer,st),wt=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ce(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,zt(_),St,_.width,_.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,zt(_),St,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,St,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,wt,i.RENDERBUFFER,E)}else{let Y=_.textures;for(let st=0;st<Y.length;st++){let St=Y[st],wt=r.convert(St.format,St.colorSpace),rt=r.convert(St.type),ut=M(St.internalFormat,wt,rt,St.normalized,St.colorSpace);ce(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,zt(_),ut,_.width,_.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,zt(_),ut,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ut,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Le(E,_,W){let Y=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,E),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let st=n.get(_.depthTexture);if(st.__renderTarget=_,(!st.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),Y){if(st.__webglInit===void 0&&(st.__webglInit=!0,_.depthTexture.addEventListener("dispose",N)),st.__webglTexture===void 0){st.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,st.__webglTexture),Me(i.TEXTURE_CUBE_MAP,_.depthTexture);let Et=r.convert(_.depthTexture.format),Xt=r.convert(_.depthTexture.type),Dt;_.depthTexture.format===Ri?Dt=i.DEPTH_COMPONENT24:_.depthTexture.format===ms&&(Dt=i.DEPTH24_STENCIL8);for(let Tt=0;Tt<6;Tt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,Dt,_.width,_.height,0,Et,Xt,null)}}else gt(_.depthTexture,0);let St=st.__webglTexture,wt=zt(_),rt=Y?i.TEXTURE_CUBE_MAP_POSITIVE_X+W:i.TEXTURE_2D,ut=_.depthTexture.format===ms?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===Ri)ce(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ut,rt,St,0,wt):i.framebufferTexture2D(i.FRAMEBUFFER,ut,rt,St,0);else if(_.depthTexture.format===ms)ce(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ut,rt,St,0,wt):i.framebufferTexture2D(i.FRAMEBUFFER,ut,rt,St,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function D(E){let _=n.get(E),W=E.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==E.depthTexture){let Y=E.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),Y){let st=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Y.removeEventListener("dispose",st)};Y.addEventListener("dispose",st),_.__depthDisposeCallback=st}_.__boundDepthTexture=Y}if(E.depthTexture&&!_.__autoAllocateDepthBuffer)if(W)for(let Y=0;Y<6;Y++)Le(_.__webglFramebuffer[Y],E,Y);else{let Y=E.texture.mipmaps;Y&&Y.length>0?Le(_.__webglFramebuffer[0],E,0):Le(_.__webglFramebuffer,E,0)}else if(W){_.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[Y]),_.__webglDepthbuffer[Y]===void 0)_.__webglDepthbuffer[Y]=i.createRenderbuffer(),Gt(_.__webglDepthbuffer[Y],E,!1);else{let st=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,St=_.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,St),i.framebufferRenderbuffer(i.FRAMEBUFFER,st,i.RENDERBUFFER,St)}}else{let Y=E.texture.mipmaps;if(Y&&Y.length>0?e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Gt(_.__webglDepthbuffer,E,!1);else{let st=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,St=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,St),i.framebufferRenderbuffer(i.FRAMEBUFFER,st,i.RENDERBUFFER,St)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function pt(E,_,W){let Y=n.get(E);_!==void 0&&At(Y.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&D(E)}function vt(E){let _=E.texture,W=n.get(E),Y=n.get(_);E.addEventListener("dispose",v);let st=E.textures,St=E.isWebGLCubeRenderTarget===!0,wt=st.length>1;if(wt||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=_.version,a.memory.textures++),St){W.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(_.mipmaps&&_.mipmaps.length>0){W.__webglFramebuffer[rt]=[];for(let ut=0;ut<_.mipmaps.length;ut++)W.__webglFramebuffer[rt][ut]=i.createFramebuffer()}else W.__webglFramebuffer[rt]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){W.__webglFramebuffer=[];for(let rt=0;rt<_.mipmaps.length;rt++)W.__webglFramebuffer[rt]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(wt)for(let rt=0,ut=st.length;rt<ut;rt++){let Et=n.get(st[rt]);Et.__webglTexture===void 0&&(Et.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&ce(E)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let rt=0;rt<st.length;rt++){let ut=st[rt];W.__webglColorRenderbuffer[rt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[rt]);let Et=r.convert(ut.format,ut.colorSpace),Xt=r.convert(ut.type),Dt=M(ut.internalFormat,Et,Xt,ut.normalized,ut.colorSpace,E.isXRRenderTarget===!0),Tt=zt(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,Tt,Dt,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.RENDERBUFFER,W.__webglColorRenderbuffer[rt])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),Gt(W.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(St){e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),Me(i.TEXTURE_CUBE_MAP,_);for(let rt=0;rt<6;rt++)if(_.mipmaps&&_.mipmaps.length>0)for(let ut=0;ut<_.mipmaps.length;ut++)At(W.__webglFramebuffer[rt][ut],E,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,ut);else At(W.__webglFramebuffer[rt],E,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);d(_)&&R(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(wt){for(let rt=0,ut=st.length;rt<ut;rt++){let Et=st[rt],Xt=n.get(Et),Dt=i.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(Dt=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Dt,Xt.__webglTexture),Me(Dt,Et),At(W.__webglFramebuffer,E,Et,i.COLOR_ATTACHMENT0+rt,Dt,0),d(Et)&&R(Dt)}e.unbindTexture()}else{let rt=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(rt=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(rt,Y.__webglTexture),Me(rt,_),_.mipmaps&&_.mipmaps.length>0)for(let ut=0;ut<_.mipmaps.length;ut++)At(W.__webglFramebuffer[ut],E,_,i.COLOR_ATTACHMENT0,rt,ut);else At(W.__webglFramebuffer,E,_,i.COLOR_ATTACHMENT0,rt,0);d(_)&&R(rt),e.unbindTexture()}E.depthBuffer&&D(E)}function xt(E){let _=E.textures;for(let W=0,Y=_.length;W<Y;W++){let st=_[W];if(d(st)){let St=P(E),wt=n.get(st).__webglTexture;e.bindTexture(St,wt),R(St),e.unbindTexture()}}}let yt=[],te=[];function Qt(E){if(E.samples>0){if(ce(E)===!1){let _=E.textures,W=E.width,Y=E.height,st=i.COLOR_BUFFER_BIT,St=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,wt=n.get(E),rt=_.length>1;if(rt)for(let Et=0;Et<_.length;Et++)e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer);let ut=E.texture.mipmaps;ut&&ut.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let Et=0;Et<_.length;Et++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(st|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(st|=i.STENCIL_BUFFER_BIT)),rt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,wt.__webglColorRenderbuffer[Et]);let Xt=n.get(_[Et]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Xt,0)}i.blitFramebuffer(0,0,W,Y,0,0,W,Y,st,i.NEAREST),l===!0&&(yt.length=0,te.length=0,yt.push(i.COLOR_ATTACHMENT0+Et),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&(yt.push(St),te.push(St),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,te)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,yt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),rt)for(let Et=0;Et<_.length;Et++){e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.RENDERBUFFER,wt.__webglColorRenderbuffer[Et]);let Xt=n.get(_[Et]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.TEXTURE_2D,Xt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&l){let _=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function zt(E){return Math.min(s.maxSamples,E.samples)}function ce(E){let _=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function F(E){let _=a.render.frame;h.get(E)!==_&&(h.set(E,_),E.update())}function Ne(E,_){let W=E.colorSpace,Y=E.format,st=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||W!==na&&W!==Ki&&(Re.getTransfer(W)===ze?(Y!==ci||st!==Gn)&&re("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):le("WebGLTextures: Unsupported texture color space:",W)),_}function ve(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=lt,this.resetTextureUnits=J,this.getTextureUnits=H,this.setTextureUnits=q,this.setTexture2D=gt,this.setTexture2DArray=nt,this.setTexture3D=ct,this.setTextureCube=ft,this.rebindTextures=pt,this.setupRenderTarget=vt,this.updateRenderTargetMipmap=xt,this.updateMultisampleRenderTarget=Qt,this.setupDepthRenderbuffer=D,this.setupFrameBufferTexture=At,this.useMultisampledRTT=ce,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Yv(i,t){function e(n,s=Ki){let r,a=Re.getTransfer(s);if(n===Gn)return i.UNSIGNED_BYTE;if(n===El)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Tl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===kh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Vh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Bh)return i.BYTE;if(n===zh)return i.SHORT;if(n===Ar)return i.UNSIGNED_SHORT;if(n===wl)return i.INT;if(n===Si)return i.UNSIGNED_INT;if(n===Mi)return i.FLOAT;if(n===bi)return i.HALF_FLOAT;if(n===Hh)return i.ALPHA;if(n===Gh)return i.RGB;if(n===ci)return i.RGBA;if(n===Ri)return i.DEPTH_COMPONENT;if(n===ms)return i.DEPTH_STENCIL;if(n===Wh)return i.RED;if(n===Al)return i.RED_INTEGER;if(n===gs)return i.RG;if(n===Cl)return i.RG_INTEGER;if(n===Rl)return i.RGBA_INTEGER;if(n===Ua||n===Fa||n===Oa||n===Ba)if(a===ze)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ua)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ua)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Fa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Oa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ba)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Il||n===Pl||n===Ll||n===Dl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Il)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Pl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ll)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Dl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Nl||n===Ul||n===Fl||n===Ol||n===Bl||n===za||n===zl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Nl||n===Ul)return a===ze?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Fl)return a===ze?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ol)return r.COMPRESSED_R11_EAC;if(n===Bl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===za)return r.COMPRESSED_RG11_EAC;if(n===zl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===kl||n===Vl||n===Hl||n===Gl||n===Wl||n===$l||n===Xl||n===ql||n===Yl||n===Zl||n===Jl||n===Kl||n===jl||n===Ql)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===kl)return a===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Vl)return a===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Hl)return a===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Gl)return a===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Wl)return a===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===$l)return a===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Xl)return a===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ql)return a===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Yl)return a===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Zl)return a===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Jl)return a===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Kl)return a===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===jl)return a===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ql)return a===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===tc||n===ec||n===nc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===tc)return a===ze?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ec)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===nc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ic||n===sc||n===ka||n===rc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ic)return r.COMPRESSED_RED_RGTC1_EXT;if(n===sc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ka)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===rc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Cr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Zv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Jv=`
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

}`,fu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new fa(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new pn({vertexShader:Zv,fragmentShader:Jv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new In(new Ma(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},pu=class extends Ii{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,p=null,u=null,m=null,g=null,b=typeof XRWebGLBinding<"u",f=new fu,d={},R=e.getContextAttributes(),P=null,M=null,S=[],T=[],N=new It,v=null,A=null,k=new Rn;k.viewport=new ke;let G=new Rn;G.viewport=new ke;let Z=[k,G],J=new vl,H=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ht=S[j];return ht===void 0&&(ht=new xr,S[j]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function(j){let ht=S[j];return ht===void 0&&(ht=new xr,S[j]=ht),ht.getGripSpace()},this.getHand=function(j){let ht=S[j];return ht===void 0&&(ht=new xr,S[j]=ht),ht.getHandSpace()};function lt(j){let ht=T.indexOf(j.inputSource);if(ht===-1)return;let Rt=S[ht];Rt!==void 0&&(Rt.update(j.inputSource,j.frame,c||a),Rt.dispatchEvent({type:j.type,data:j.inputSource}))}function et(){s.removeEventListener("select",lt),s.removeEventListener("selectstart",lt),s.removeEventListener("selectend",lt),s.removeEventListener("squeeze",lt),s.removeEventListener("squeezestart",lt),s.removeEventListener("squeezeend",lt),s.removeEventListener("end",et),s.removeEventListener("inputsourceschange",gt);for(let j=0;j<S.length;j++){let ht=T[j];ht!==null&&(T[j]=null,S[j].disconnect(ht))}H=null,q=null,f.reset();for(let j in d)delete d[j];if(t.setRenderTarget(P),m=null,u=null,p=null,s=null,M=null,Ce.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(N.width,N.height,!1),A!==null){let j=A.camera;j.fov=A.fov,j.zoom=A.zoom,j.updateProjectionMatrix(),A=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&re("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&re("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return p===null&&b&&(p=new XRWebGLBinding(s,e)),p},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(P=t.getRenderTarget(),s.addEventListener("select",lt),s.addEventListener("selectstart",lt),s.addEventListener("selectend",lt),s.addEventListener("squeeze",lt),s.addEventListener("squeezestart",lt),s.addEventListener("squeezeend",lt),s.addEventListener("end",et),s.addEventListener("inputsourceschange",gt),R.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(N),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let Rt=null,ee=null,At=null;R.depth&&(At=R.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Rt=R.stencil?ms:Ri,ee=R.stencil?Cr:Si);let Gt={colorFormat:e.RGBA8,depthFormat:At,scaleFactor:r};p=this.getBinding(),u=p.createProjectionLayer(Gt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),M=new Hn(u.textureWidth,u.textureHeight,{format:ci,type:Gn,depthTexture:new os(u.textureWidth,u.textureHeight,ee,void 0,void 0,void 0,void 0,void 0,void 0,Rt),stencilBuffer:R.stencil,colorSpace:t.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Rt={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,Rt),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),M=new Hn(m.framebufferWidth,m.framebufferHeight,{format:ci,type:Gn,colorSpace:t.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ce.setContext(s),Ce.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};function gt(j){for(let ht=0;ht<j.removed.length;ht++){let Rt=j.removed[ht],ee=T.indexOf(Rt);ee>=0&&(T[ee]=null,S[ee].disconnect(Rt))}for(let ht=0;ht<j.added.length;ht++){let Rt=j.added[ht],ee=T.indexOf(Rt);if(ee===-1){for(let Gt=0;Gt<S.length;Gt++)if(Gt>=T.length){T.push(Rt),ee=Gt;break}else if(T[Gt]===null){T[Gt]=Rt,ee=Gt;break}if(ee===-1)break}let At=S[ee];At&&At.connect(Rt)}}let nt=new U,ct=new U;function ft(j,ht,Rt){nt.setFromMatrixPosition(ht.matrixWorld),ct.setFromMatrixPosition(Rt.matrixWorld);let ee=nt.distanceTo(ct),At=ht.projectionMatrix.elements,Gt=Rt.projectionMatrix.elements,Le=At[14]/(At[10]-1),D=At[14]/(At[10]+1),pt=(At[9]+1)/At[5],vt=(At[9]-1)/At[5],xt=(At[8]-1)/At[0],yt=(Gt[8]+1)/Gt[0],te=Le*xt,Qt=Le*yt,zt=ee/(-xt+yt),ce=zt*-xt;if(ht.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(ce),j.translateZ(zt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),At[10]===-1)j.projectionMatrix.copy(ht.projectionMatrix),j.projectionMatrixInverse.copy(ht.projectionMatrixInverse);else{let F=Le+zt,Ne=D+zt,ve=te-ce,E=Qt+(ee-ce),_=pt*D/Ne*F,W=vt*D/Ne*F;j.projectionMatrix.makePerspective(ve,E,_,W,F,Ne),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function Zt(j,ht){ht===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ht.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let ht=j.near,Rt=j.far;f.texture!==null&&(f.depthNear>0&&(ht=f.depthNear),f.depthFar>0&&(Rt=f.depthFar)),J.near=G.near=k.near=ht,J.far=G.far=k.far=Rt,(H!==J.near||q!==J.far)&&(s.updateRenderState({depthNear:J.near,depthFar:J.far}),H=J.near,q=J.far),J.layers.mask=j.layers.mask|6,k.layers.mask=J.layers.mask&-5,G.layers.mask=J.layers.mask&-3;let ee=j.parent,At=J.cameras;Zt(J,ee);for(let Gt=0;Gt<At.length;Gt++)Zt(At[Gt],ee);At.length===2?ft(J,k,G):J.projectionMatrix.copy(k.projectionMatrix),A===null&&j.isPerspectiveCamera&&(A={camera:j,fov:j.fov,zoom:j.zoom}),Vt(j,J,ee)};function Vt(j,ht,Rt){Rt===null?j.matrix.copy(ht.matrixWorld):(j.matrix.copy(Rt.matrixWorld),j.matrix.invert(),j.matrix.multiply(ht.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ht.projectionMatrix),j.projectionMatrixInverse.copy(ht.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=mr*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(u===null&&m===null))return l},this.setFoveation=function(j){l=j,u!==null&&(u.fixedFoveation=j),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=j)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(J)},this.getCameraTexture=function(j){return d[j]};let Pe=null;function Me(j,ht){if(h=ht.getViewerPose(c||a),g=ht,h!==null){let Rt=h.views;m!==null&&(t.setRenderTargetFramebuffer(M,m.framebuffer),t.setRenderTarget(M));let ee=!1;Rt.length!==J.cameras.length&&(J.cameras.length=0,ee=!0);for(let D=0;D<Rt.length;D++){let pt=Rt[D],vt=null;if(m!==null)vt=m.getViewport(pt);else{let yt=p.getViewSubImage(u,pt);vt=yt.viewport,D===0&&(t.setRenderTargetTextures(M,yt.colorTexture,yt.depthStencilTexture),t.setRenderTarget(M))}let xt=Z[D];xt===void 0&&(xt=new Rn,xt.layers.enable(D),xt.viewport=new ke,Z[D]=xt),xt.matrix.fromArray(pt.transform.matrix),xt.matrix.decompose(xt.position,xt.quaternion,xt.scale),xt.projectionMatrix.fromArray(pt.projectionMatrix),xt.projectionMatrixInverse.copy(xt.projectionMatrix).invert(),xt.viewport.set(vt.x,vt.y,vt.width,vt.height),D===0&&(J.matrix.copy(xt.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),ee===!0&&J.cameras.push(xt)}let At=s.enabledFeatures;if(At&&At.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&b){p=n.getBinding();let D=p.getDepthInformation(Rt[0]);D&&D.isValid&&D.texture&&f.init(D,s.renderState)}if(At&&At.includes("camera-access")&&b){t.state.unbindTexture(),p=n.getBinding();for(let D=0;D<Rt.length;D++){let pt=Rt[D].camera;if(pt){let vt=d[pt];vt||(vt=new fa,d[pt]=vt);let xt=p.getCameraImage(pt);vt.sourceTexture=xt}}}}for(let Rt=0;Rt<S.length;Rt++){let ee=T[Rt],At=S[Rt];ee!==null&&At!==void 0&&At.update(ee,ht,c||a)}Pe&&Pe(j,ht),ht.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ht}),g=null}let Ce=new Gf;Ce.setAnimationLoop(Me),this.setAnimationLoop=function(j){Pe=j},this.dispose=function(){}}},Kv=new He,Zf=new pe;Zf.set(-1,0,0,0,1,0,0,0,1);function jv(i,t){function e(f,d){f.matrixAutoUpdate===!0&&f.updateMatrix(),d.value.copy(f.matrix)}function n(f,d){d.color.getRGB(f.fogColor.value,Jh(i)),d.isFog?(f.fogNear.value=d.near,f.fogFar.value=d.far):d.isFogExp2&&(f.fogDensity.value=d.density)}function s(f,d,R,P,M){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(f,d):d.isMeshLambertMaterial?(r(f,d),d.envMap&&(f.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(f,d),p(f,d)):d.isMeshPhongMaterial?(r(f,d),h(f,d),d.envMap&&(f.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(f,d),u(f,d),d.isMeshPhysicalMaterial&&m(f,d,M)):d.isMeshMatcapMaterial?(r(f,d),g(f,d)):d.isMeshDepthMaterial?r(f,d):d.isMeshDistanceMaterial?(r(f,d),b(f,d)):d.isMeshNormalMaterial?r(f,d):d.isLineBasicMaterial?(a(f,d),d.isLineDashedMaterial&&o(f,d)):d.isPointsMaterial?l(f,d,R,P):d.isSpriteMaterial?c(f,d):d.isShadowMaterial?(f.color.value.copy(d.color),f.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(f,d){f.opacity.value=d.opacity,d.color&&f.diffuse.value.copy(d.color),d.emissive&&f.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(f.map.value=d.map,e(d.map,f.mapTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,e(d.alphaMap,f.alphaMapTransform)),d.bumpMap&&(f.bumpMap.value=d.bumpMap,e(d.bumpMap,f.bumpMapTransform),f.bumpScale.value=d.bumpScale,d.side===On&&(f.bumpScale.value*=-1)),d.normalMap&&(f.normalMap.value=d.normalMap,e(d.normalMap,f.normalMapTransform),f.normalScale.value.copy(d.normalScale),d.side===On&&f.normalScale.value.negate()),d.displacementMap&&(f.displacementMap.value=d.displacementMap,e(d.displacementMap,f.displacementMapTransform),f.displacementScale.value=d.displacementScale,f.displacementBias.value=d.displacementBias),d.emissiveMap&&(f.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,f.emissiveMapTransform)),d.specularMap&&(f.specularMap.value=d.specularMap,e(d.specularMap,f.specularMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest);let R=t.get(d),P=R.envMap,M=R.envMapRotation;P&&(f.envMap.value=P,f.envMapRotation.value.setFromMatrix4(Kv.makeRotationFromEuler(M)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&f.envMapRotation.value.premultiply(Zf),f.reflectivity.value=d.reflectivity,f.ior.value=d.ior,f.refractionRatio.value=d.refractionRatio),d.lightMap&&(f.lightMap.value=d.lightMap,f.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,f.lightMapTransform)),d.aoMap&&(f.aoMap.value=d.aoMap,f.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,f.aoMapTransform))}function a(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,d.map&&(f.map.value=d.map,e(d.map,f.mapTransform))}function o(f,d){f.dashSize.value=d.dashSize,f.totalSize.value=d.dashSize+d.gapSize,f.scale.value=d.scale}function l(f,d,R,P){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.size.value=d.size*R,f.scale.value=P*.5,d.map&&(f.map.value=d.map,e(d.map,f.uvTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,e(d.alphaMap,f.alphaMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest)}function c(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.rotation.value=d.rotation,d.map&&(f.map.value=d.map,e(d.map,f.mapTransform)),d.alphaMap&&(f.alphaMap.value=d.alphaMap,e(d.alphaMap,f.alphaMapTransform)),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest)}function h(f,d){f.specular.value.copy(d.specular),f.shininess.value=Math.max(d.shininess,1e-4)}function p(f,d){d.gradientMap&&(f.gradientMap.value=d.gradientMap)}function u(f,d){f.metalness.value=d.metalness,d.metalnessMap&&(f.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,f.metalnessMapTransform)),f.roughness.value=d.roughness,d.roughnessMap&&(f.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,f.roughnessMapTransform)),d.envMap&&(f.envMapIntensity.value=d.envMapIntensity)}function m(f,d,R){f.ior.value=d.ior,d.sheen>0&&(f.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),f.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(f.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,f.sheenColorMapTransform)),d.sheenRoughnessMap&&(f.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,f.sheenRoughnessMapTransform))),d.clearcoat>0&&(f.clearcoat.value=d.clearcoat,f.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(f.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,f.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(f.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===On&&f.clearcoatNormalScale.value.negate())),d.dispersion>0&&(f.dispersion.value=d.dispersion),d.retroreflectivity>0&&(f.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(f.iridescence.value=d.iridescence,f.iridescenceIOR.value=d.iridescenceIOR,f.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(f.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,f.iridescenceMapTransform)),d.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),d.transmission>0&&(f.transmission.value=d.transmission,f.transmissionSamplerMap.value=R.texture,f.transmissionSamplerSize.value.set(R.width,R.height),d.transmissionMap&&(f.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,f.transmissionMapTransform)),f.thickness.value=d.thickness,d.thicknessMap&&(f.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=d.attenuationDistance,f.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(f.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(f.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=d.specularIntensity,f.specularColor.value.copy(d.specularColor),d.specularColorMap&&(f.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,f.specularColorMapTransform)),d.specularIntensityMap&&(f.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,d){d.matcap&&(f.matcap.value=d.matcap)}function b(f,d){let R=t.get(d).light;f.referencePosition.value.setFromMatrixPosition(R.matrixWorld),f.nearDistance.value=R.shadow.camera.near,f.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Qv(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,S){let T=S.program;n.uniformBlockBinding(M,T)}function c(M,S){let T=s[M.id];T===void 0&&(f(M),T=h(M),s[M.id]=T,M.addEventListener("dispose",R));let N=S.program;n.updateUBOMapping(M,N);let v=t.render.frame;r[M.id]!==v&&(u(M),r[M.id]=v)}function h(M){let S=p();M.__bindingPointIndex=S;let T=i.createBuffer(),N=M.__size,v=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,N,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,T),T}function p(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return le("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){let S=s[M.id],T=M.uniforms,N=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let v=0,A=T.length;v<A;v++){let k=T[v];if(Array.isArray(k))for(let G=0,Z=k.length;G<Z;G++)m(k[G],v,G,N);else m(k,v,0,N)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(M,S,T,N){if(b(M,S,T,N)===!0){let v=M.__offset,A=M.value;if(Array.isArray(A)){let k=0;for(let G=0;G<A.length;G++){let Z=A[G],J=d(Z);g(Z,M.__data,k),typeof Z!="number"&&typeof Z!="boolean"&&!Z.isMatrix3&&!ArrayBuffer.isView(Z)&&(k+=J.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(A,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,M.__data)}}function g(M,S,T){typeof M=="number"||typeof M=="boolean"?S[0]=M:M.isMatrix3?(S[0]=M.elements[0],S[1]=M.elements[1],S[2]=M.elements[2],S[3]=0,S[4]=M.elements[3],S[5]=M.elements[4],S[6]=M.elements[5],S[7]=0,S[8]=M.elements[6],S[9]=M.elements[7],S[10]=M.elements[8],S[11]=0):ArrayBuffer.isView(M)?S.set(new M.constructor(M.buffer,M.byteOffset,S.length)):M.toArray(S,T)}function b(M,S,T,N){let v=M.value,A=S+"_"+T;if(N[A]===void 0)return typeof v=="number"||typeof v=="boolean"?N[A]=v:ArrayBuffer.isView(v)?N[A]=v.slice():N[A]=v.clone(),!0;{let k=N[A];if(typeof v=="number"||typeof v=="boolean"){if(k!==v)return N[A]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(k.equals(v)===!1)return k.copy(v),!0}}return!1}function f(M){let S=M.uniforms,T=0,N=16;for(let A=0,k=S.length;A<k;A++){let G=Array.isArray(S[A])?S[A]:[S[A]];for(let Z=0,J=G.length;Z<J;Z++){let H=G[Z],q=Array.isArray(H.value)?H.value:[H.value];for(let lt=0,et=q.length;lt<et;lt++){let gt=q[lt],nt=d(gt),ct=T%N,ft=ct%nt.boundary,Zt=ct+ft;T+=ft,Zt!==0&&N-Zt<nt.storage&&(T+=N-Zt),H.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=T,T+=nt.storage}}}let v=T%N;return v>0&&(T+=N-v),M.__size=T,M.__cache={},this}function d(M){let S={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(S.boundary=4,S.storage=4):M.isVector2?(S.boundary=8,S.storage=8):M.isVector3||M.isColor?(S.boundary=16,S.storage=12):M.isVector4?(S.boundary=16,S.storage=16):M.isMatrix3?(S.boundary=48,S.storage=48):M.isMatrix4?(S.boundary=64,S.storage=64):M.isTexture?re("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(S.boundary=16,S.storage=M.byteLength):re("WebGLRenderer: Unsupported uniform value type.",M),S}function R(M){let S=M.target;S.removeEventListener("dispose",R);let T=a.indexOf(S.__bindingPointIndex);a.splice(T,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function P(){for(let M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:P}}var ty=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ui=null;function ey(){return Ui===null&&(Ui=new Xo(ty,16,16,gs,bi),Ui.name="DFG_LUT",Ui.minFilter=xn,Ui.magFilter=xn,Ui.wrapS=Ai,Ui.wrapT=Ai,Ui.generateMipmaps=!1,Ui.needsUpdate=!0),Ui}var fc=class{constructor(t={}){let{canvas:e=uf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:u=!1,outputBufferType:m=Gn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let b=m,f=new Set([Rl,Cl,Al]),d=new Set([Gn,Si,Ar,Cr,El,Tl]),R=new Uint32Array(4),P=new Int32Array(4),M=new U,S=null,T=null,N=[],v=[],A=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=yi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let k=this,G=!1,Z=null,J=null,H=null,q=null;this._outputColorSpace=Kn;let lt=0,et=0,gt=null,nt=-1,ct=null,ft=new ke,Zt=new ke,Vt=null,Pe=new oe(0),Me=0,Ce=e.width,j=e.height,ht=1,Rt=null,ee=null,At=new ke(0,0,Ce,j),Gt=new ke(0,0,Ce,j),Le=!1,D=new vr,pt=!1,vt=!1,xt=new He,yt=new U,te=new ke,Qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},zt=!1;function ce(){return gt===null?ht:1}let F=n;function Ne(y,z){return e.getContext(y,z)}let ve,E,_,W,Y,st,St,wt,rt,ut,Et,Xt,Dt,Tt,Jt,ne,ie,B,Mt,dt,Ct,Ft,mt;try{let y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Be,!1),e.addEventListener("webglcontextrestored",we,!1),e.addEventListener("webglcontextcreationerror",bn,!1),F===null){let z="webgl2";if(F=Ne(z,y),F===null)throw Ne(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Kt()}catch(y){throw e.removeEventListener("webglcontextlost",Be,!1),e.removeEventListener("webglcontextrestored",we,!1),e.removeEventListener("webglcontextcreationerror",bn,!1),le("WebGLRenderer: "+y.message),y}function Kt(){ve=new lx(F),ve.init(),Ct=new Yv(F,ve),E=new j_(F,ve,t,Ct),_=new Xv(F,ve),E.reversedDepthBuffer&&u&&_.buffers.depth.setReversed(!0),J=F.createFramebuffer(),H=F.createFramebuffer(),q=F.createFramebuffer(),W=new ux(F),Y=new Lv,st=new qv(F,ve,_,Y,E,Ct,W),St=new ox(k),wt=new fg(F),Ft=new J_(F,wt),rt=new cx(F,wt,W,Ft),ut=new fx(F,rt,wt,Ft,W),B=new dx(F,E,st),Jt=new Q_(Y),Et=new Pv(k,St,ve,E,Ft,Jt),Xt=new jv(k,Y),Dt=new Nv,Tt=new kv(ve),ie=new Z_(k,St,_,ut,g,l),ne=new $v(k,ut,E),mt=new Qv(F,W,E,_),Mt=new K_(F,ve,W),dt=new hx(F,ve,W),W.programs=Et.programs,k.capabilities=E,k.extensions=ve,k.properties=Y,k.renderLists=Dt,k.shadowMap=ne,k.state=_,k.info=W}b!==Gn&&(A=new mx(b,e.width,e.height,o,s,r));let qt=new pu(k,F);this.xr=qt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let y=ve.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=ve.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return ht},this.setPixelRatio=function(y){y!==void 0&&(ht=y,this.setSize(Ce,j,!1))},this.getSize=function(y){return y.set(Ce,j)},this.setSize=function(y,z,Q=!0){if(qt.isPresenting){re("WebGLRenderer: Can't change size while VR device is presenting.");return}Ce=y,j=z,e.width=Math.floor(y*ht),e.height=Math.floor(z*ht),Q===!0&&(e.style.width=y+"px",e.style.height=z+"px"),A!==null&&A.setSize(e.width,e.height),this.setViewport(0,0,y,z)},this.getDrawingBufferSize=function(y){return y.set(Ce*ht,j*ht).floor()},this.setDrawingBufferSize=function(y,z,Q){Ce=y,j=z,ht=Q,e.width=Math.floor(y*Q),e.height=Math.floor(z*Q),this.setViewport(0,0,y,z)},this.setEffects=function(y){if(b===Gn){le("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let z=0;z<y.length;z++)if(y[z].isOutputPass===!0){re("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(ft)},this.getViewport=function(y){return y.copy(At)},this.setViewport=function(y,z,Q,X){y.isVector4?At.set(y.x,y.y,y.z,y.w):At.set(y,z,Q,X),_.viewport(ft.copy(At).multiplyScalar(ht).round())},this.getScissor=function(y){return y.copy(Gt)},this.setScissor=function(y,z,Q,X){y.isVector4?Gt.set(y.x,y.y,y.z,y.w):Gt.set(y,z,Q,X),_.scissor(Zt.copy(Gt).multiplyScalar(ht).round())},this.getScissorTest=function(){return Le},this.setScissorTest=function(y){_.setScissorTest(Le=y)},this.setOpaqueSort=function(y){Rt=y},this.setTransparentSort=function(y){ee=y},this.getClearColor=function(y){return y.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor(...arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha(...arguments)},this.clear=function(y=!0,z=!0,Q=!0){let X=0;if(y){let $=!1;if(gt!==null){let Ot=gt.texture.format;$=f.has(Ot)}if($){let Ot=gt.texture.type,kt=d.has(Ot),Ut=ie.getClearColor(),Bt=ie.getClearAlpha(),Yt=Ut.r,xe=Ut.g,fe=Ut.b;kt?(R[0]=Yt,R[1]=xe,R[2]=fe,R[3]=Bt,F.clearBufferuiv(F.COLOR,0,R)):(P[0]=Yt,P[1]=xe,P[2]=fe,P[3]=Bt,F.clearBufferiv(F.COLOR,0,P))}else X|=F.COLOR_BUFFER_BIT}z&&(X|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Q&&(X|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&F.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),Z=y},this.dispose=function(){e.removeEventListener("webglcontextlost",Be,!1),e.removeEventListener("webglcontextrestored",we,!1),e.removeEventListener("webglcontextcreationerror",bn,!1),ie.dispose(),Dt.dispose(),Tt.dispose(),Y.dispose(),St.dispose(),ut.dispose(),Ft.dispose(),mt.dispose(),Et.dispose(),qt.dispose(),qt.removeEventListener("sessionstart",ys),qt.removeEventListener("sessionend",Fr),Gi.stop()};function Be(y){y.preventDefault(),ra("WebGLRenderer: Context Lost."),G=!0}function we(){ra("WebGLRenderer: Context Restored."),G=!1;let y=W.autoReset,z=ne.enabled,Q=ne.autoUpdate,X=ne.needsUpdate,$=ne.type;Kt(),W.autoReset=y,ne.enabled=z,ne.autoUpdate=Q,ne.needsUpdate=X,ne.type=$}function bn(y){le("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function $n(y){let z=y.target;z.removeEventListener("dispose",$n),ja(z)}function ja(y){Qa(y),Y.remove(y)}function Qa(y){let z=Y.get(y).programs;z!==void 0&&(z.forEach(function(Q){Et.releaseProgram(Q)}),y.isShaderMaterial&&Et.releaseShaderCache(y))}this.renderBufferDirect=function(y,z,Q,X,$,Ot){z===null&&(z=Qt);let kt=$.isMesh&&$.matrixWorld.determinantAffine()<0,Ut=Ye(y,z,Q,X,$);_.setMaterial(X,kt);let Bt=Q.index,Yt=1;if(X.wireframe===!0){if(Bt=rt.getWireframeAttribute(Q),Bt===void 0)return;Yt=2}let xe=Q.drawRange,fe=Q.attributes.position,Wt=xe.start*Yt,Ee=(xe.start+xe.count)*Yt;Ot!==null&&(Wt=Math.max(Wt,Ot.start*Yt),Ee=Math.min(Ee,(Ot.start+Ot.count)*Yt)),Bt!==null?(Wt=Math.max(Wt,0),Ee=Math.min(Ee,Bt.count)):fe!=null&&(Wt=Math.max(Wt,0),Ee=Math.min(Ee,fe.count));let Je=Ee-Wt;if(Je<0||Je===1/0)return;Ft.setup($,X,Ut,Q,Bt);let he,Fe=Mt;if(Bt!==null&&(he=wt.get(Bt),Fe=dt,Fe.setIndex(he)),$.isMesh)X.wireframe===!0?(_.setLineWidth(X.wireframeLinewidth*ce()),Fe.setMode(F.LINES)):Fe.setMode(F.TRIANGLES);else if($.isLine){let cn=X.linewidth;cn===void 0&&(cn=1),_.setLineWidth(cn*ce()),$.isLineSegments?Fe.setMode(F.LINES):$.isLineLoop?Fe.setMode(F.LINE_LOOP):Fe.setMode(F.LINE_STRIP)}else $.isPoints?Fe.setMode(F.POINTS):$.isSprite&&Fe.setMode(F.TRIANGLES);if($.isBatchedMesh)if(ve.get("WEBGL_multi_draw"))Fe.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{let cn=$._multiDrawStarts,Ht=$._multiDrawCounts,_n=$._multiDrawCount,Te=Bt?wt.get(Bt).bytesPerElement:1,En=Y.get(X).currentProgram.getUniforms();for(let qn=0;qn<_n;qn++)En.setValue(F,"_gl_DrawID",qn),Fe.render(cn[qn]/Te,Ht[qn])}else if($.isInstancedMesh)Fe.renderInstances(Wt,Je,$.count);else if(Q.isInstancedBufferGeometry){let cn=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Ht=Math.min(Q.instanceCount,cn);Fe.renderInstances(Wt,Je,Ht)}else Fe.render(Wt,Je)};function Xs(y,z,Q,X){Z!==null&&y.isNodeMaterial&&Z.setObject(X,y),pt===!0&&Jt.setState(y,Q,!1),y.transparent===!0&&y.side===Di&&y.forceSinglePass===!1?(y.side=On,y.needsUpdate=!0,Xn(y,z,X),y.side=ds,y.needsUpdate=!0,Xn(y,z,X),y.side=Di):Xn(y,z,X)}this.compile=function(y,z,Q=null){Q===null&&(Q=y),Z!==null&&Z.renderStart(y,z,Q),T=Tt.get(Q),T.init(z),v.push(T),Q.traverseVisible(function($){$.isLight&&$.layers.test(z.layers)&&(T.pushLight($),$.castShadow&&T.pushShadow($))}),y!==Q&&y.traverseVisible(function($){$.isLight&&$.layers.test(z.layers)&&(T.pushLight($),$.castShadow&&T.pushShadow($))}),T.setupLights(),Z!==null&&Z.updateLights(T.state.lightsArray),vt=this.localClippingEnabled,pt=Jt.init(this.clippingPlanes,vt),pt===!0&&Jt.setGlobalState(this.clippingPlanes,z),Z!==null&&ne.render(T.state.shadowsArray,Q,z);let X=new Set;return y.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;let Ot=$.material;if(Ot)if(Array.isArray(Ot))for(let kt=0;kt<Ot.length;kt++){let Ut=Ot[kt];Xs(Ut,Q,z,$),X.add(Ut)}else Xs(Ot,Q,z,$),X.add(Ot)}),T=v.pop(),Z!==null&&Z.renderEnd(),X},this.compileAsync=function(y,z,Q=null){let X=this.compile(y,z,Q);return new Promise($=>{function Ot(){if(X.forEach(function(kt){let Bt=Y.get(kt).currentProgram;(Bt===void 0||Bt.isReady())&&X.delete(kt)}),X.size===0){$(y);return}setTimeout(Ot,10)}ve.get("KHR_parallel_shader_compile")!==null?Ot():setTimeout(Ot,10)})};let qs=null;function to(y){qs&&qs(y)}function ys(){Gi.stop()}function Fr(){Gi.start()}let Gi=new Gf;Gi.setAnimationLoop(to),typeof self<"u"&&Gi.setContext(self),this.setAnimationLoop=function(y){qs=y,qt.setAnimationLoop(y),y===null?Gi.stop():Gi.start()},qt.addEventListener("sessionstart",ys),qt.addEventListener("sessionend",Fr),this.render=function(y,z){if(z!==void 0&&z.isCamera!==!0){le("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;Z!==null&&Z.renderStart(y,z);let Q=qt.enabled===!0&&qt.isPresenting===!0,X=A!==null&&(gt===null||Q)&&A.begin(k,gt);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),qt.enabled===!0&&qt.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(qt.cameraAutoUpdate===!0&&qt.updateCamera(z),z=qt.getCamera()),y.isScene===!0&&y.onBeforeRender(k,y,z,gt),T=Tt.get(y,v.length),T.init(z),T.state.textureUnits=st.getTextureUnits(),v.push(T),xt.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),D.setFromProjectionMatrix(xt,_i,z.reversedDepth),vt=this.localClippingEnabled,pt=Jt.init(this.clippingPlanes,vt),S=Dt.get(y,N.length),S.init(),N.push(S),qt.enabled===!0&&qt.isPresenting===!0){let kt=k.xr.getDepthSensingMesh();kt!==null&&Or(kt,z,-1/0,k.sortObjects)}Or(y,z,0,k.sortObjects),S.finish(),Z!==null&&Z.updateLights(T.state.lightsArray),k.sortObjects===!0&&S.sort(Rt,ee),zt=qt.enabled===!1||qt.isPresenting===!1||qt.hasDepthSensing()===!1,zt&&ie.addToRenderList(S,y),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),pt===!0&&Jt.beginShadows();let $=T.state.shadowsArray;if(ne.render($,y,z),pt===!0&&Jt.endShadows(),(X&&A.hasRenderPass())===!1){let kt=S.opaque,Ut=S.transmissive;if(T.setupLights(),z.isArrayCamera){let Bt=z.cameras;if(Ut.length>0)for(let Yt=0,xe=Bt.length;Yt<xe;Yt++){let fe=Bt[Yt];eo(kt,Ut,y,fe)}zt&&ie.render(y);for(let Yt=0,xe=Bt.length;Yt<xe;Yt++){let fe=Bt[Yt];Br(S,y,fe,fe.viewport)}}else Ut.length>0&&eo(kt,Ut,y,z),zt&&ie.render(y),Br(S,y,z)}gt!==null&&et===0&&(st.updateMultisampleRenderTarget(gt),st.updateRenderTargetMipmap(gt)),X&&A.end(k),y.isScene===!0&&y.onAfterRender(k,y,z),Ft.resetDefaultState(),nt=-1,ct=null,v.pop(),v.length>0?(T=v[v.length-1],st.setTextureUnits(T.state.textureUnits),pt===!0&&Jt.setGlobalState(k.clippingPlanes,T.state.camera)):T=null,N.pop(),N.length>0?S=N[N.length-1]:S=null,Z!==null&&Z.renderEnd()};function Or(y,z,Q,X){if(y.visible===!1)return;if(y.layers.test(z.layers)){if(y.isGroup)Q=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(z);else if(y.isLightProbeGrid)T.pushLightProbeGrid(y);else if(y.isLight)T.pushLight(y),y.castShadow&&T.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||y.intersectsFrustum(D)){X&&te.setFromMatrixPosition(y.matrixWorld).applyMatrix4(xt);let kt=ut.update(y),Ut=y.material;Ut.visible&&S.push(y,kt,Ut,Q,te.z,null,z)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||y.intersectsFrustum(D))){let kt=ut.update(y),Ut=y.material;if(X&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),te.copy(y.boundingSphere.center)):(kt.boundingSphere===null&&kt.computeBoundingSphere(),te.copy(kt.boundingSphere.center)),te.applyMatrix4(y.matrixWorld).applyMatrix4(xt)),Array.isArray(Ut)){let Bt=kt.groups;for(let Yt=0,xe=Bt.length;Yt<xe;Yt++){let fe=Bt[Yt],Wt=Ut[fe.materialIndex];Wt&&Wt.visible&&S.push(y,kt,Wt,Q,te.z,fe,z)}}else Ut.visible&&S.push(y,kt,Ut,Q,te.z,null,z)}}let Ot=y.children;for(let kt=0,Ut=Ot.length;kt<Ut;kt++)Or(Ot[kt],z,Q,X)}function Br(y,z,Q,X){let{opaque:$,transmissive:Ot,transparent:kt}=y;T.setupLightsView(Q),pt===!0&&Jt.setGlobalState(k.clippingPlanes,Q),X&&_.viewport(ft.copy(X)),$.length>0&&wn($,z,Q),Ot.length>0&&wn(Ot,z,Q),kt.length>0&&wn(kt,z,Q),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function eo(y,z,Q,X){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[X.id]===void 0){let Wt=ve.has("EXT_color_buffer_half_float")||ve.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[X.id]=new Hn(1,1,{generateMipmaps:!0,type:Wt?bi:Gn,minFilter:ps,samples:Math.max(4,E.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Re.workingColorSpace})}let Ot=T.state.transmissionRenderTarget[X.id],kt=X.viewport||ft;Ot.setSize(kt.z*k.transmissionResolutionScale,kt.w*k.transmissionResolutionScale);let Ut=k.getRenderTarget(),Bt=k.getActiveCubeFace(),Yt=k.getActiveMipmapLevel();k.setRenderTarget(Ot),k.getClearColor(Pe),Me=k.getClearAlpha(),Me<1&&k.setClearColor(16777215,.5),k.clear(),zt&&ie.render(Q);let xe=k.toneMapping;k.toneMapping=yi;let fe=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),T.setupLightsView(X),pt===!0&&Jt.setGlobalState(k.clippingPlanes,X),wn(y,Q,X),st.updateMultisampleRenderTarget(Ot),st.updateRenderTargetMipmap(Ot),ve.has("WEBGL_multisampled_render_to_texture")===!1){let Wt=!1;for(let Ee=0,Je=z.length;Ee<Je;Ee++){let he=z[Ee],{object:Fe,geometry:cn,material:Ht,group:_n}=he;if(Ht.side===Di&&Fe.layers.test(X.layers)){let Te=Ht.side;Ht.side=On,Ht.needsUpdate=!0,mn(Fe,Q,X,cn,Ht,_n),Ht.side=Te,Ht.needsUpdate=!0,Wt=!0}}Wt===!0&&(st.updateMultisampleRenderTarget(Ot),st.updateRenderTargetMipmap(Ot))}k.setRenderTarget(Ut,Bt,Yt),k.setClearColor(Pe,Me),fe!==void 0&&(X.viewport=fe),k.toneMapping=xe}function wn(y,z,Q){let X=z.isScene===!0?z.overrideMaterial:null;for(let $=0,Ot=y.length;$<Ot;$++){let kt=y[$],{object:Ut,geometry:Bt,group:Yt}=kt,xe=kt.material;xe.allowOverride===!0&&X!==null&&(xe=X),Ut.layers.test(Q.layers)&&mn(Ut,z,Q,Bt,xe,Yt)}}function mn(y,z,Q,X,$,Ot){Z!==null&&$.isNodeMaterial&&Z.setObject(y,$),y.onBeforeRender(k,z,Q,X,$,Ot),y.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),$.onBeforeRender(k,z,Q,X,y,Ot),$.transparent===!0&&$.side===Di&&$.forceSinglePass===!1?($.side=On,$.needsUpdate=!0,k.renderBufferDirect(Q,z,X,$,y,Ot),$.side=ds,$.needsUpdate=!0,k.renderBufferDirect(Q,z,X,$,y,Ot),$.side=Di):k.renderBufferDirect(Q,z,X,$,y,Ot),y.onAfterRender(k,z,Q,X,$,Ot)}function Xn(y,z,Q){z.isScene!==!0&&(z=Qt);let X=Y.get(y),$=T.state.lights,Ot=T.state.shadowsArray,kt=$.state.version,Ut=Et.getParameters(y,$.state,Ot,z,Q,T.state.lightProbeGridArray),Bt=Et.getProgramCacheKey(Ut),Yt=X.programs;X.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?z.environment:null,X.fog=z.fog;let xe=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;X.envMap=St.get(y.envMap||X.environment,xe),X.envMapRotation=X.environment!==null&&y.envMap===null?z.environmentRotation:y.envMapRotation,Yt===void 0&&(y.addEventListener("dispose",$n),Yt=new Map,X.programs=Yt);let fe=Yt.get(Bt);if(fe!==void 0){if(X.currentProgram===fe&&X.lightsStateVersion===kt)return rn(y,Ut),fe}else Ut.uniforms=Et.getUniforms(y),Z!==null&&y.isNodeMaterial&&Z.build(y,Q,Ut),y.onBeforeCompile(Ut,k),fe=Et.acquireProgram(Ut,Bt),Yt.set(Bt,fe),X.uniforms=Ut.uniforms;let Wt=X.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Wt.clippingPlanes=Jt.uniform),rn(y,Ut),X.needsLights=no(y),X.lightsStateVersion=kt,X.needsLights&&(Wt.ambientLightColor.value=$.state.ambient,Wt.lightProbe.value=$.state.probe,Wt.sunLights.value=$.state.sun,Wt.sunLightShadows.value=$.state.sunShadow,Wt.directionalLights.value=$.state.directional,Wt.directionalLightShadows.value=$.state.directionalShadow,Wt.spotLights.value=$.state.spot,Wt.spotLightShadows.value=$.state.spotShadow,Wt.rectAreaLights.value=$.state.rectArea,Wt.ltc_1.value=$.state.rectAreaLTC1,Wt.ltc_2.value=$.state.rectAreaLTC2,Wt.pointLights.value=$.state.point,Wt.pointLightShadows.value=$.state.pointShadow,Wt.hemisphereLights.value=$.state.hemi,Wt.sunShadowMatrix.value=$.state.sunShadowMatrix,Wt.sunShadowCascade.value=$.state.sunShadowCascade,Wt.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Wt.spotLightMatrix.value=$.state.spotLightMatrix,Wt.spotLightMap.value=$.state.spotLightMap,Wt.pointShadowMatrix.value=$.state.pointShadowMatrix),X.lightProbeGrid=T.state.lightProbeGridArray.length>0,X.currentProgram=fe,X.uniformsList=null,fe}function ni(y){if(y.uniformsList===null){let z=y.currentProgram.getUniforms();y.uniformsList=Pr.seqWithValue(z.seq,y.uniforms)}return y.uniformsList}function rn(y,z){let Q=Y.get(y);Q.outputColorSpace=z.outputColorSpace,Q.batching=z.batching,Q.batchingColor=z.batchingColor,Q.instancing=z.instancing,Q.instancingColor=z.instancingColor,Q.instancingMorph=z.instancingMorph,Q.skinning=z.skinning,Q.morphTargets=z.morphTargets,Q.morphNormals=z.morphNormals,Q.morphColors=z.morphColors,Q.morphTargetsCount=z.morphTargetsCount,Q.numClippingPlanes=z.numClippingPlanes,Q.numIntersection=z.numClipIntersection,Q.vertexAlphas=z.vertexAlphas,Q.vertexTangents=z.vertexTangents,Q.toneMapping=z.toneMapping}function be(y,z){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;M.setFromMatrixPosition(z.matrixWorld);for(let Q=0,X=y.length;Q<X;Q++){let $=y[Q];if($.texture!==null&&$.boundingBox.containsPoint(M))return $}return null}function Ye(y,z,Q,X,$){z.isScene!==!0&&(z=Qt),st.resetTextureUnits();let Ot=z.fog,kt=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?z.environment:null,Ut=gt===null?k.outputColorSpace:gt.isXRRenderTarget===!0?gt.texture.colorSpace:Re.workingColorSpace,Bt=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,Yt=St.get(X.envMap||kt,Bt),xe=X.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,fe=!!Q.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Wt=!!Q.morphAttributes.position,Ee=!!Q.morphAttributes.normal,Je=!!Q.morphAttributes.color,he=yi;X.toneMapped&&(gt===null||gt.isXRRenderTarget===!0)&&(he=k.toneMapping);let Fe=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,cn=Fe!==void 0?Fe.length:0,Ht=Y.get(X),_n=T.state.lights;if(pt===!0&&(vt===!0||y!==ct)){let ye=y===ct&&X.id===nt;Jt.setState(X,y,ye)}let Te=!1;X.version===Ht.__version?(Ht.needsLights&&Ht.lightsStateVersion!==_n.state.version||Ht.outputColorSpace!==Ut||$.isBatchedMesh&&Ht.batching===!1||!$.isBatchedMesh&&Ht.batching===!0||$.isBatchedMesh&&Ht.batchingColor===!0&&$._colorsTexture===null||$.isBatchedMesh&&Ht.batchingColor===!1&&$._colorsTexture!==null||$.isInstancedMesh&&Ht.instancing===!1||!$.isInstancedMesh&&Ht.instancing===!0||$.isSkinnedMesh&&Ht.skinning===!1||!$.isSkinnedMesh&&Ht.skinning===!0||$.isInstancedMesh&&Ht.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Ht.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Ht.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Ht.instancingMorph===!1&&$.morphTexture!==null||Ht.envMap!==Yt||X.fog===!0&&Ht.fog!==Ot||Ht.numClippingPlanes!==void 0&&(Ht.numClippingPlanes!==Jt.numPlanes||Ht.numIntersection!==Jt.numIntersection)||Ht.vertexAlphas!==xe||Ht.vertexTangents!==fe||Ht.morphTargets!==Wt||Ht.morphNormals!==Ee||Ht.morphColors!==Je||Ht.toneMapping!==he||Ht.morphTargetsCount!==cn||!!Ht.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(Te=!0):(Te=!0,Ht.__version=X.version);let En=Ht.currentProgram;Te===!0&&(En=Xn(X,z,$),Z&&X.isNodeMaterial&&Z.onUpdateProgram(X,En,Ht));let qn=!1,kn=!1,hi=!1,Oe=En.getUniforms(),Ze=Ht.uniforms;if(_.useProgram(En.program)&&(qn=!0,kn=!0,hi=!0),X.id!==nt&&(nt=X.id,kn=!0),Ht.needsLights){let ye=be(T.state.lightProbeGridArray,$);Ht.lightProbeGrid!==ye&&(Ht.lightProbeGrid=ye,kn=!0)}if(qn||ct!==y){_.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),Oe.setValue(F,"projectionMatrix",y.projectionMatrix),Oe.setValue(F,"viewMatrix",y.matrixWorldInverse);let ii=Oe.map.cameraPosition;ii!==void 0&&ii.setValue(F,yt.setFromMatrixPosition(y.matrixWorld)),E.logarithmicDepthBuffer&&Oe.setValue(F,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Oe.setValue(F,"isOrthographic",y.isOrthographicCamera===!0),ct!==y&&(ct=y,kn=!0,hi=!0)}if(Ht.needsLights&&(_n.state.sunShadowMap.length>0&&Oe.setValue(F,"sunShadowMap",_n.state.sunShadowMap,st),_n.state.directionalShadowMap.length>0&&Oe.setValue(F,"directionalShadowMap",_n.state.directionalShadowMap,st),_n.state.spotShadowMap.length>0&&Oe.setValue(F,"spotShadowMap",_n.state.spotShadowMap,st),_n.state.pointShadowMap.length>0&&Oe.setValue(F,"pointShadowMap",_n.state.pointShadowMap,st)),$.isSkinnedMesh){Oe.setOptional(F,$,"bindMatrix"),Oe.setOptional(F,$,"bindMatrixInverse");let ye=$.skeleton;ye&&(ye.boneTexture===null&&ye.computeBoneTexture(),Oe.setValue(F,"boneTexture",ye.boneTexture,st))}$.isBatchedMesh&&(Oe.setOptional(F,$,"batchingTexture"),Oe.setValue(F,"batchingTexture",$._matricesTexture,st),Oe.setOptional(F,$,"batchingIdTexture"),Oe.setValue(F,"batchingIdTexture",$._indirectTexture,st),Oe.setOptional(F,$,"batchingColorTexture"),$._colorsTexture!==null&&Oe.setValue(F,"batchingColorTexture",$._colorsTexture,st));let ui=Q.morphAttributes;if((ui.position!==void 0||ui.normal!==void 0||ui.color!==void 0)&&B.update($,Q,En),(kn||Ht.receiveShadow!==$.receiveShadow)&&(Ht.receiveShadow=$.receiveShadow,Oe.setValue(F,"receiveShadow",$.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&z.environment!==null&&(Ze.envMapIntensity.value=z.environmentIntensity),Ze.dfgLUT!==void 0&&(Ze.dfgLUT.value=ey()),kn){if(Oe.setValue(F,"toneMappingExposure",k.toneMappingExposure),Ht.needsLights&&gn(Ze,hi),Ot&&X.fog===!0&&Xt.refreshFogUniforms(Ze,Ot),Xt.refreshMaterialUniforms(Ze,X,ht,j,T.state.transmissionRenderTarget[y.id]),Ht.needsLights&&Ht.lightProbeGrid){let ye=Ht.lightProbeGrid;Ze.probesSH.value=ye.texture,Ze.probesMin.value.copy(ye.boundingBox.min),Ze.probesMax.value.copy(ye.boundingBox.max),Ze.probesResolution.value.copy(ye.resolution)}Pr.upload(F,ni(Ht),Ze,st)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Pr.upload(F,ni(Ht),Ze,st),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Oe.setValue(F,"center",$.center),Oe.setValue(F,"modelViewMatrix",$.modelViewMatrix),Oe.setValue(F,"normalMatrix",$.normalMatrix),Oe.setValue(F,"modelMatrix",$.matrixWorld),X.uniformsGroups!==void 0){let ye=X.uniformsGroups;for(let ii=0,wi=ye.length;ii<wi;ii++){let Ys=ye[ii];mt.update(Ys,En),mt.bind(Ys,En)}}return En}function gn(y,z){y.ambientLightColor.needsUpdate=z,y.lightProbe.needsUpdate=z,y.sunLights.needsUpdate=z,y.sunLightShadows.needsUpdate=z,y.directionalLights.needsUpdate=z,y.directionalLightShadows.needsUpdate=z,y.pointLights.needsUpdate=z,y.pointLightShadows.needsUpdate=z,y.spotLights.needsUpdate=z,y.spotLightShadows.needsUpdate=z,y.rectAreaLights.needsUpdate=z,y.hemisphereLights.needsUpdate=z}function no(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return lt},this.getActiveMipmapLevel=function(){return et},this.getRenderTarget=function(){return gt},this.setRenderTargetTextures=function(y,z,Q){let X=Y.get(y);X.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),Y.get(y.texture).__webglTexture=z,Y.get(y.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:Q,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,z){let Q=Y.get(y);Q.__webglFramebuffer=z,Q.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(y,z=0,Q=0){gt=y,lt=z,et=Q;let X=null,$=!1,Ot=!1;if(y){let Ut=Y.get(y);if(Ut.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(F.FRAMEBUFFER,Ut.__webglFramebuffer),ft.copy(y.viewport),Zt.copy(y.scissor),Vt=y.scissorTest,_.viewport(ft),_.scissor(Zt),_.setScissorTest(Vt),nt=-1;return}else if(Ut.__webglFramebuffer===void 0)st.setupRenderTarget(y);else if(Ut.__hasExternalTextures)st.rebindTextures(y,Y.get(y.texture).__webglTexture,Y.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let xe=y.depthTexture;if(Ut.__boundDepthTexture!==xe){if(xe!==null&&Y.has(xe)&&(y.width!==xe.image.width||y.height!==xe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");st.setupDepthRenderbuffer(y)}}let Bt=y.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(Ot=!0);let Yt=Y.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Yt[z])?X=Yt[z][Q]:X=Yt[z],$=!0):y.samples>0&&st.useMultisampledRTT(y)===!1?X=Y.get(y).__webglMultisampledFramebuffer:Array.isArray(Yt)?X=Yt[Q]:X=Yt,ft.copy(y.viewport),Zt.copy(y.scissor),Vt=y.scissorTest}else ft.copy(At).multiplyScalar(ht).floor(),Zt.copy(Gt).multiplyScalar(ht).floor(),Vt=Le;if(Q!==0&&(X=J),_.bindFramebuffer(F.FRAMEBUFFER,X)&&_.drawBuffers(y,X),_.viewport(ft),_.scissor(Zt),_.setScissorTest(Vt),$){let Ut=Y.get(y.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ut.__webglTexture,Q)}else if(Ot){let Ut=z;for(let Bt=0;Bt<y.textures.length;Bt++){let Yt=Y.get(y.textures[Bt]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Bt,Yt.__webglTexture,Q,Ut)}}else if(y!==null&&Q!==0){let Ut=Y.get(y.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ut.__webglTexture,Q)}nt=-1};function zr(y){let z=Y.get(y);return(z.__readFormat!==y.format||z.__readType!==y.type)&&(z.__readFormat=y.format,z.__readType=y.type,z.__formatReadable=E.textureFormatReadable(y.format),z.__typeReadable=E.textureTypeReadable(y.type)),z}this.readRenderTargetPixels=function(y,z,Q,X,$,Ot,kt,Ut=0){if(!(y&&y.isWebGLRenderTarget)){le("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=Y.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&kt!==void 0&&(Bt=Bt[kt]),Bt){_.bindFramebuffer(F.FRAMEBUFFER,Bt);try{let Yt=y.textures[Ut],xe=Yt.format,fe=Yt.type;y.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Ut);let Wt=zr(Yt);if(Wt.__formatReadable===!1){le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Wt.__typeReadable===!1){le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=y.width-X&&Q>=0&&Q<=y.height-$&&F.readPixels(z,Q,X,$,Ct.convert(xe),Ct.convert(fe),Ot)}finally{let Yt=gt!==null?Y.get(gt).__webglFramebuffer:null;_.bindFramebuffer(F.FRAMEBUFFER,Yt)}}},this.readRenderTargetPixelsAsync=async function(y,z,Q,X,$,Ot,kt,Ut=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Bt=Y.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&kt!==void 0&&(Bt=Bt[kt]),Bt)if(z>=0&&z<=y.width-X&&Q>=0&&Q<=y.height-$){_.bindFramebuffer(F.FRAMEBUFFER,Bt);let Yt=y.textures[Ut],xe=Yt.format,fe=Yt.type;y.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Ut);let Wt=zr(Yt);if(Wt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Wt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ee=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Ee),F.bufferData(F.PIXEL_PACK_BUFFER,Ot.byteLength,F.STREAM_READ),F.readPixels(z,Q,X,$,Ct.convert(xe),Ct.convert(fe),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let Je=gt!==null?Y.get(gt).__webglFramebuffer:null;_.bindFramebuffer(F.FRAMEBUFFER,Je);let he=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await ff(F,he,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Ee),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Ot),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(Ee),F.deleteSync(he),Ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,z=null,Q=0){let X=Math.pow(2,-Q),$=Math.floor(y.image.width*X),Ot=Math.floor(y.image.height*X),kt=z!==null?z.x:0,Ut=z!==null?z.y:0;st.setTexture2D(y,0),F.copyTexSubImage2D(F.TEXTURE_2D,Q,0,0,kt,Ut,$,Ot),_.unbindTexture()},this.copyTextureToTexture=function(y,z,Q=null,X=null,$=0,Ot=0){let kt,Ut,Bt,Yt,xe,fe,Wt,Ee,Je,he=y.isCompressedTexture?y.mipmaps[Ot]:y.image;if(Q!==null)kt=Q.max.x-Q.min.x,Ut=Q.max.y-Q.min.y,Bt=Q.isBox3?Q.max.z-Q.min.z:1,Yt=Q.min.x,xe=Q.min.y,fe=Q.isBox3?Q.min.z:0;else{let Ze=Math.pow(2,-$);kt=Math.floor(he.width*Ze),Ut=Math.floor(he.height*Ze),y.isDataArrayTexture?Bt=he.depth:y.isData3DTexture?Bt=Math.floor(he.depth*Ze):Bt=1,Yt=0,xe=0,fe=0}X!==null?(Wt=X.x,Ee=X.y,Je=X.z):(Wt=0,Ee=0,Je=0);let Fe=Ct.convert(z.format),cn=Ct.convert(z.type),Ht;z.isData3DTexture?(st.setTexture3D(z,0),Ht=F.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(st.setTexture2DArray(z,0),Ht=F.TEXTURE_2D_ARRAY):(st.setTexture2D(z,0),Ht=F.TEXTURE_2D),_.activeTexture(F.TEXTURE0),_.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,z.flipY),_.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),_.pixelStorei(F.UNPACK_ALIGNMENT,z.unpackAlignment);let _n=_.getParameter(F.UNPACK_ROW_LENGTH),Te=_.getParameter(F.UNPACK_IMAGE_HEIGHT),En=_.getParameter(F.UNPACK_SKIP_PIXELS),qn=_.getParameter(F.UNPACK_SKIP_ROWS),kn=_.getParameter(F.UNPACK_SKIP_IMAGES);_.pixelStorei(F.UNPACK_ROW_LENGTH,he.width),_.pixelStorei(F.UNPACK_IMAGE_HEIGHT,he.height),_.pixelStorei(F.UNPACK_SKIP_PIXELS,Yt),_.pixelStorei(F.UNPACK_SKIP_ROWS,xe),_.pixelStorei(F.UNPACK_SKIP_IMAGES,fe);let hi=y.isDataArrayTexture||y.isData3DTexture,Oe=z.isDataArrayTexture||z.isData3DTexture;if(y.isDepthTexture){let Ze=Y.get(y),ui=Y.get(z),ye=Y.get(Ze.__renderTarget),ii=Y.get(ui.__renderTarget);_.bindFramebuffer(F.READ_FRAMEBUFFER,ye.__webglFramebuffer),_.bindFramebuffer(F.DRAW_FRAMEBUFFER,ii.__webglFramebuffer);for(let wi=0;wi<Bt;wi++)hi&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Y.get(y).__webglTexture,$,fe+wi),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Y.get(z).__webglTexture,Ot,Je+wi)),F.blitFramebuffer(Yt,xe,kt,Ut,Wt,Ee,kt,Ut,F.DEPTH_BUFFER_BIT,F.NEAREST);_.bindFramebuffer(F.READ_FRAMEBUFFER,null),_.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if($!==0||y.isRenderTargetTexture||Y.has(y)){let Ze=Y.get(y),ui=Y.get(z);_.bindFramebuffer(F.READ_FRAMEBUFFER,H),_.bindFramebuffer(F.DRAW_FRAMEBUFFER,q);for(let ye=0;ye<Bt;ye++)hi?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ze.__webglTexture,$,fe+ye):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ze.__webglTexture,$),Oe?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ui.__webglTexture,Ot,Je+ye):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ui.__webglTexture,Ot),$!==0?F.blitFramebuffer(Yt,xe,kt,Ut,Wt,Ee,kt,Ut,F.COLOR_BUFFER_BIT,F.NEAREST):Oe?F.copyTexSubImage3D(Ht,Ot,Wt,Ee,Je+ye,Yt,xe,kt,Ut):F.copyTexSubImage2D(Ht,Ot,Wt,Ee,Yt,xe,kt,Ut);_.bindFramebuffer(F.READ_FRAMEBUFFER,null),_.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Oe?y.isDataTexture||y.isData3DTexture?F.texSubImage3D(Ht,Ot,Wt,Ee,Je,kt,Ut,Bt,Fe,cn,he.data):z.isCompressedArrayTexture?F.compressedTexSubImage3D(Ht,Ot,Wt,Ee,Je,kt,Ut,Bt,Fe,he.data):F.texSubImage3D(Ht,Ot,Wt,Ee,Je,kt,Ut,Bt,Fe,cn,he):y.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Ot,Wt,Ee,kt,Ut,Fe,cn,he.data):y.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Ot,Wt,Ee,he.width,he.height,Fe,he.data):F.texSubImage2D(F.TEXTURE_2D,Ot,Wt,Ee,kt,Ut,Fe,cn,he);_.pixelStorei(F.UNPACK_ROW_LENGTH,_n),_.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Te),_.pixelStorei(F.UNPACK_SKIP_PIXELS,En),_.pixelStorei(F.UNPACK_SKIP_ROWS,qn),_.pixelStorei(F.UNPACK_SKIP_IMAGES,kn),Ot===0&&z.generateMipmaps&&F.generateMipmap(Ht),_.unbindTexture()},this.initRenderTarget=function(y){Y.get(y).__webglFramebuffer===void 0&&st.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?st.setTextureCube(y,0):y.isData3DTexture?st.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?st.setTexture2DArray(y,0):st.setTexture2D(y,0),_.unbindTexture()},this.resetState=function(){lt=0,et=0,gt=null,_.reset(),Ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Re._getDrawingBufferColorSpace(t),e.unpackColorSpace=Re._getUnpackColorSpace()}};var Kf=new jn,gc=new U,ji=class extends Ia{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new an(t,3)),this.setAttribute("uv",new an(e,2))}applyMatrix4(t){let e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new us(e,6,1);return this.setAttribute("instanceStart",new vi(n,3,0)),this.setAttribute("instanceEnd",new vi(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new us(e,6,1);return this.setAttribute("instanceColorStart",new vi(n,3,0)),this.setAttribute("instanceColorEnd",new vi(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new ba(t.geometry)),this}fromLineSegments(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jn);let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),Kf.setFromBufferAttribute(e),this.boundingBox.union(Kf))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new li),this.boundingBox===null&&this.computeBoundingBox();let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)gc.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(gc)),gc.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(gc));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}};Lt.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new It},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Bn.line={uniforms:Va.merge([Lt.common,Lt.fog,Lt.line]),vertexShader:`
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
		`};var Fi=class extends pn{constructor(t){super({type:"LineMaterial",uniforms:Va.clone(Bn.line.uniforms),vertexShader:Bn.line.vertexShader,fragmentShader:Bn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0!==this.worldUnits&&(this.needsUpdate=!0),t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var mu=new ke,jf=new U,Qf=new U,vn=new ke,yn=new ke,Oi=new ke,gu=new U,_u=new He,Sn=new Pa,tp=new U,_c=new jn,xc=new li,Bi=new ke,zi,zs;function ep(i,t,e){return Bi.set(0,0,-t,1).applyMatrix4(i.projectionMatrix),Bi.multiplyScalar(1/Bi.w),Bi.x=zs/e.width,Bi.y=zs/e.height,Bi.applyMatrix4(i.projectionMatrixInverse),Bi.multiplyScalar(1/Bi.w),Math.abs(Math.max(Bi.x,Bi.y))}function ny(i,t){let e=i.matrixWorld,n=i.geometry,s=n.attributes.instanceStart,r=n.attributes.instanceEnd,a=Math.min(n.instanceCount,s.count);for(let o=0,l=a;o<l;o++){Sn.start.fromBufferAttribute(s,o),Sn.end.fromBufferAttribute(r,o),Sn.applyMatrix4(e);let c=new U,h=new U;zi.distanceSqToSegment(Sn.start,Sn.end,h,c),h.distanceTo(c)<zs*.5&&t.push({point:h,pointOnLine:c,distance:zi.origin.distanceTo(h),object:i,face:null,faceIndex:o,uv:null,uv1:null})}}function iy(i,t,e){let n=t.projectionMatrix,r=i.material.resolution,a=i.matrixWorld,o=i.geometry,l=o.attributes.instanceStart,c=o.attributes.instanceEnd,h=Math.min(o.instanceCount,l.count),p=-t.near;zi.at(1,Oi),Oi.w=1,Oi.applyMatrix4(t.matrixWorldInverse),Oi.applyMatrix4(n),Oi.multiplyScalar(1/Oi.w),Oi.x*=r.x/2,Oi.y*=r.y/2,Oi.z=0,gu.copy(Oi),_u.multiplyMatrices(t.matrixWorldInverse,a);for(let u=0,m=h;u<m;u++){if(vn.fromBufferAttribute(l,u),yn.fromBufferAttribute(c,u),vn.w=1,yn.w=1,vn.applyMatrix4(_u),yn.applyMatrix4(_u),vn.z>p&&yn.z>p)continue;if(vn.z>p){let P=vn.z-yn.z,M=(vn.z-p)/P;vn.lerp(yn,M)}else if(yn.z>p){let P=yn.z-vn.z,M=(yn.z-p)/P;yn.lerp(vn,M)}vn.applyMatrix4(n),yn.applyMatrix4(n),vn.multiplyScalar(1/vn.w),yn.multiplyScalar(1/yn.w),vn.x*=r.x/2,vn.y*=r.y/2,yn.x*=r.x/2,yn.y*=r.y/2,Sn.start.copy(vn),Sn.start.z=0,Sn.end.copy(yn),Sn.end.z=0;let b=Sn.closestPointToPointParameter(gu,!0);Sn.at(b,tp);let f=Yh.lerp(vn.z,yn.z,b),d=f>=-1&&f<=1,R=gu.distanceTo(tp)<zs*.5;if(d&&R){Sn.start.fromBufferAttribute(l,u),Sn.end.fromBufferAttribute(c,u),Sn.start.applyMatrix4(a),Sn.end.applyMatrix4(a);let P=new U,M=new U;zi.distanceSqToSegment(Sn.start,Sn.end,M,P),e.push({point:M,pointOnLine:P,distance:zi.origin.distanceTo(M),object:i,face:null,faceIndex:u,uv:null,uv1:null})}}}var ks=class extends In{constructor(t=new ji,e=new Fi({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,s=new Float32Array(2*e.count);for(let a=0,o=0,l=e.count;a<l;a++,o+=2)jf.fromBufferAttribute(e,a),Qf.fromBufferAttribute(n,a),s[o]=o===0?0:s[o-1],s[o+1]=s[o]+jf.distanceTo(Qf);let r=new us(s,2,1);return t.setAttribute("instanceDistanceStart",new vi(r,1,0)),t.setAttribute("instanceDistanceEnd",new vi(r,1,1)),this}raycast(t,e){let n=this.material.worldUnits,s=t.camera;if(s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.'),n===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;let r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;zi=t.ray;let a=this.matrixWorld,o=this.geometry,l=this.material;zs=l.linewidth+r,o.boundingSphere===null&&o.computeBoundingSphere(),xc.copy(o.boundingSphere).applyMatrix4(a);let c;if(n)c=zs*.5;else{let p=Math.max(s.near,xc.distanceToPoint(zi.origin));c=ep(s,p,l.resolution)}if(xc.radius+=c,zi.intersectsSphere(xc)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),_c.copy(o.boundingBox).applyMatrix4(a);let h;if(n)h=zs*.5;else{let p=Math.max(s.near,_c.distanceToPoint(zi.origin));h=ep(s,p,l.resolution)}_c.expandByScalar(h),zi.intersectsBox(_c)!==!1&&(n?ny(this,e):iy(this,s,e))}onBeforeRender(t){let e=this.material.uniforms;e&&e.resolution&&(t.getViewport(mu),this.material.uniforms.resolution.value.set(mu.z,mu.w))}};function np(i){let t=window.__ROD__,{scene:e,camera:n,goal:s,cur:r,invalidate:a,K:o,CX:l,CY:c,mcs:h,q:p,list:u,clamp:m,norm:g,munis:b}=i,f=x=>document.querySelector(x),d=x=>String(x).replace(/[<>&"]/g,w=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[w]),R=(x,w)=>[(x-l)*o,(w-c)*o],P=.06,M=t.segs.map(x=>{let w=[],C=[0];for(let O=0;O<x.length;O+=2){let L=R(x[O],x[O+1]);w.length&&C.push(C[C.length-1]+Math.hypot(L[0]-w[w.length-1][0],L[1]-w[w.length-1][1])),w.push(L)}return{p:w,c:C,L:C[C.length-1]}}),S=t.stops.map(([x,w,C,O])=>({n:x,id:O,w:R(w,C),fams:new Set})),T=t.routes.map(([x,w,C])=>({s:x,l:w,c:C})),N=(x,w)=>{let C=x.match(/^R([A-Z]*)(\d*)(.*)$/),O=w.match(/^R([A-Z]*)(\d*)(.*)$/);return(C[1]||"").localeCompare(O[1]||"")||(+C[2]||0)-(+O[2]||0)||C[3].localeCompare(O[3])},v=[...new Set(T.map(x=>x.s))].sort(N),A={};T.forEach(x=>{A[x.s]||(A[x.s]=x.c)});let k=t.pats.map(([x,w,C])=>({stops:x,t:w,segs:C})),G=t.trips.map(([x,w,C,O,L],V)=>({day:x,pat:k[w],fam:T[C].s,c:T[C].c,t0:O,num:L,tid:t.tids[V]})),Z={};v.forEach(x=>Z[x]=new Set),G.forEach(x=>{x.pat.segs.forEach(w=>Z[x.fam].add(w)),x.pat.stops.forEach(w=>S[w].fams.add(x.fam))});let J=t.days.map((x,w)=>G.filter(C=>C.day===w)),H=new Map(G.map(x=>[x.tid,x])),q=[124.87404143965449,479.9901289885639,124.62688710863031,249.99562739146893,486.739003764725,248.0364802782304,2037.1344308355726],lt=Math.PI/180,et=3.922*lt,gt=-39.705*lt;function nt(x,w){let C=x*lt+et,O=w*lt,L=Math.cos(gt),V=Math.sin(gt),K=Math.cos(O),it=Math.cos(C)*K,at=Math.sin(C)*K,ot=Math.sin(O),_t=Math.atan2(at,it*L-ot*V),I=Math.asin(ot*L+it*V),tt=Math.sqrt(2/(1+Math.cos(_t)*Math.cos(I))),bt=tt*Math.cos(I)*Math.sin(_t),Pt=tt*Math.sin(I),[se,ae,Ie,jt,$t,me,ue]=q;return R((ae+se*bt-$t)*ue,(me-(jt-Ie*Pt))*ue)}let ct=new Map(S.map((x,w)=>[x.id,w]));function ft(x){if(x.g)return x.g;let w=[],C=[],O=[0],L=0;return x.segs.forEach((V,K)=>{let it=M[V];it.p.forEach((at,ot)=>{K&&!ot||(w.push(at),C.push(L+it.c[ot]))}),L+=it.L,O.push(L)}),x.g={pts:w,cum:C,stopD:O}}function Zt(x,w,C,O){let L=1e18,V=0;for(let K=0;K+1<x.pts.length;K++){if(x.cum[K+1]<C||x.cum[K]>O)continue;let it=x.pts[K],at=x.pts[K+1],ot=at[0]-it[0],_t=at[1]-it[1],I=ot*ot+_t*_t||1e-9,tt=Math.max(0,Math.min(1,((w[0]-it[0])*ot+(w[1]-it[1])*_t)/I)),bt=it[0]+ot*tt-w[0],Pt=it[1]+_t*tt-w[1],se=bt*bt+Pt*Pt;se<L&&(L=se,V=x.cum[K]+tt*(x.cum[K+1]-x.cum[K]))}return{d:V,err:Math.sqrt(L)}}function Vt(x,w){let C=0,O=x.cum.length-1;if(w<=0)return x.pts[0];if(w>=x.cum[O])return x.pts[O];for(;O-C>1;){let it=C+O>>1;x.cum[it]<=w?C=it:O=it}let L=(w-x.cum[C])/(x.cum[O]-x.cum[C]||1),V=x.pts[C],K=x.pts[O];return[V[0]+(K[0]-V[0])*L,V[1]+(K[1]-V[1])*L]}let Pe=x=>`${x.slice(6,8)}/${x.slice(4,6)}`,Me=new Intl.DateTimeFormat("es-ES",{timeZone:"Europe/Madrid",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hourCycle:"h23"});function Ce(x){let w={};return Me.formatToParts(x).forEach(C=>w[C.type]=C.value),{ymd:w.year+w.month+w.day,min:+w.hour*60+ +w.minute+ +w.second/60}}let j=0,ht=null,Rt=0,ee=0;function At(){let x=Ce(new Date);if(j===0&&ht==null)return{...x,live:!0};let w=ht==null?x.min:Rt+(j?(performance.now()-ee)/6e4*j:0);return{ymd:x.ymd,min:w,live:!1}}let Gt=x=>(x=(Math.round(x)%1440+1440)%1440,String(Math.floor(x/60)).padStart(2,"0")+":"+String(x%60).padStart(2,"0")),Le="https://rodalies.erathegameoftime.com",D={url:"",delays:new Map,tu:new Map,vp:new Map,alerts:[],ok:0,okVP:0,err:"",feedTs:0};try{let x=new URLSearchParams(location.search).get("rt");x&&localStorage.setItem("rod_rt",x);let w=localStorage.getItem("rod_rt");w&&/jhmuyo\.workers\.dev/.test(w)&&(w=Le,localStorage.setItem("rod_rt",w)),D.url=w||Le}catch{D.url=Le}let pt=(x,w)=>fetch(x+w,{cache:"no-store"}).then(C=>{if(!C.ok)throw new Error("HTTP "+C.status);return C.json()}),vt=x=>/^51/.test(x||"");async function xt(){if(!D.url){te();return}let x=D.url.replace(/\/+$/,"");(!D.repFail||Date.now()-D.repFail>15*6e4)&&pt(x,"/reports.json").then(at=>{at&&Array.isArray(at.items)?(D.rep=at.items,D.repSkew=(at.now||Date.now())-Date.now(),at.tipos&&(D.tipos=at.tipos),D.repOk=Date.now(),D.repFail=0):D.repFail=Date.now()}).catch(()=>{D.repFail=Date.now(),D.repOk=0});let w=!D.adifAt||Date.now()-D.adifAt>11e4,[C,O,L,V,K]=await Promise.allSettled([pt(x,"/trip_updates.json"),pt(x,"/vehicle_positions.json"),pt(x,"/alerts.json"),pt(x,"/notices.json"),w?pt(x,"/adif.json"):Promise.reject(0)]);if(K.status==="fulfilled"&&K.value&&K.value.ok?(D.adif=K.value,D.adifAt=Date.now()):w&&(D.adifAt=Date.now()-6e4),C.status==="fulfilled"){let at=new Map,ot=new Map;for(let _t of C.value.entity||[]){let I=_t.tripUpdate;if(!I||!I.trip||!vt(I.trip.tripId))continue;let tt=I.trip.tripId,bt=(I.stopTimeUpdate||[])[0],Pt=I.delay;Pt==null&&bt&&(Pt=(bt.arrival||bt.departure||{}).delay),I.trip.scheduleRelationship==="CANCELED"&&(Pt="X"),Pt!=null&&at.set(tt,Pt),ot.set(tt,{next:bt?{sid:bt.stopId,t:+((bt.arrival||bt.departure||{}).time||0)}:null})}D.delays=at,D.tu=ot,D.ok=Date.now(),D.feedTs=+((C.value.header||{}).timestamp||0)*1e3,D.err=""}else D.err=C.reason&&C.reason.message||"sin respuesta";if(O.status==="fulfilled"){let at=new Map,ot=Date.now()/1e3;for(let _t of O.value.entity||[]){let I=_t.vehicle;if(!I||!I.trip||!vt(I.trip.tripId)||!I.position)continue;let tt=I.vehicle&&I.vehicle.label||"",bt=tt.match(/PLATF\.\(([^)]+)\)/),Pt=D.vp.get(I.trip.tripId),se={tid:I.trip.tripId,w:nt(+I.position.longitude,+I.position.latitude),st:I.currentStatus||"",sid:I.stopId||"",ts:+I.timestamp||ot,label:tt,plat:bt?bt[1]:"",fam:(tt.split("-")[0]||"").trim(),num:I.vehicle&&I.vehicle.id||""};se.disp=Pt?Pt.disp:null,at.set(se.tid,se)}D.vp=at,D.okVP=Date.now()}let it=[];if(V.status==="fulfilled"&&Array.isArray(V.value.included)){D.okNotices=Date.now();for(let at of V.value.included){let ot=new Set((at.lines||[]).map(tt=>tt.id).filter(tt=>A[tt])),_t=tt=>((tt||{}).es||(tt||{}).ca||"").trim(),I=[_t(at.description),_t(at.title)].sort((tt,bt)=>bt.length-tt.length)[0];I&&it.push({id:"N"+at.externalId,fams:ot,stops:new Set,txt:I,when:(at.date||"")+"T"+(at.time||""),src:"Rodalies",core:at.core||""})}}if(L.status==="fulfilled"){let at=+((L.value.header||{}).timestamp||0);if(D.alertsTs=at,Date.now()/1e3-at<6*3600)for(let ot of L.value.entity||[]){let _t=ot.alert;if(!_t)continue;let I=new Set,tt=new Set;for(let ae of _t.informedEntity||[])(ae.routeId||"").startsWith("51")&&I.add(ae.routeId.replace(/^51T\d+/,"")),ae.stopId&&ct.has(ae.stopId)&&tt.add(ct.get(ae.stopId));if(!I.size&&!tt.size)continue;let bt=(_t.descriptionText||_t.headerText||{translation:[]}).translation||[],Pt=((bt.find(ae=>ae.language==="es")||bt[0]||{}).text||"").trim(),se=+((_t.activePeriod||[])[0]||{}).start||0;it.some(ae=>ae.txt===Pt)||it.push({id:ot.id,fams:I,stops:tt,txt:Pt,when:se?new Date(se*1e3).toISOString().slice(0,19):"",src:"Renfe"})}}if(D.adif&&Date.now()-D.adifAt<15*6e4)for(let[at,ot]of(D.adif.items||[]).entries()){let _t=(ot.t?ot.t+". ":"")+ot.txt,I=new Set,tt=new Set,bt=g(_t);for(let Pt of _t.matchAll(/\b(R\d{1,2}[NS]?|R3a|RG1|RL\d|RT\d)\b/g))A[Pt[1]]&&I.add(Pt[1]);S.forEach((Pt,se)=>{Pt.fams.size&&Pt.n.length>4&&bt.includes(g(Pt.n))&&(tt.add(se),I.size||Pt.fams.forEach(ae=>I.add(ae)))}),it.some(Pt=>Pt.txt===_t)||it.push({id:"A"+at,fams:I,stops:tt,txt:_t,when:D.adif.upd||"",src:"Adif",lvl:ot.lvl})}if(V.status==="fulfilled"||L.status==="fulfilled"||D.adif){D.alerts=it.sort((at,ot)=>ot.when>at.when?1:-1);try{Bp()}catch{}}te(),Ys(),ni=0,a()}let yt=()=>D.okVP&&Date.now()-D.okVP<9e4;function te(){let x=f("#rtst"),w=f("#mode");if(w){let O=!!yt()&&At().live;w.classList.toggle("on",O),w.classList.toggle("pre",!O),w.textContent=O?"En directo":"Previsi\xF3n"}if(!x)return;D.url?D.err?x.textContent="No se pudo conectar con el puente ("+D.err+"). Se usa el horario.":yt()?x.innerHTML=`Conectado \xB7 ${D.vp.size} trenes con posici\xF3n real y ${D.delays.size} con retraso \xB7 actualizado a las ${new Date(D.okVP).toLocaleTimeString("es-ES",{hour:"2-digit",minute:"2-digit",second:"2-digit"})}`:x.textContent="Conectando\u2026":x.textContent=D.err||"Sin puente: trenes seg\xFAn horario oficial.";let C=f("#rturl");C&&C._shown!==D.url&&(C.value=D.url,C._shown=D.url)}f("#rtsave").onclick=()=>{let x=f("#rturl").value.trim().replace(/\/+(alerts|trip_updates|vehicle_positions)\.json$/,"").replace(/\/+$/,"");if(x&&!/^https?:\/\//.test(x)&&(x="https://"+x),!x){D.err="pega la direcci\xF3n de tu puente",te();return}D.url=x;try{localStorage.setItem("rod_rt",x)}catch{}D.ok=0,D.err="",te(),xt()},f("#rtoff").onclick=()=>{D.url=Le;try{localStorage.removeItem("rod_rt")}catch{}h._h="",xt()},setInterval(xt,2e4),setTimeout(xt,50);let Qt=x=>{if(!yt())return null;let w=D.delays.get(x.tid),C=D.vp.get(x.tid);return w==="X"?w:C&&C.pre&&C.preDl>=1?Math.max(typeof w=="number"?w:0,C.preDl*60):w??null},zt=new Set(v),ce=new ji,F=new ji,Ne=new Fi({vertexColors:!0,linewidth:3.2,depthTest:!1,transparent:!0}),ve=new Fi({color:16777215,linewidth:6,depthTest:!1,transparent:!0,opacity:.9}),E=new ks(ce,Ne),_=new ks(F,ve);_.renderOrder=20,E.renderOrder=21,E.frustumCulled=_.frustumCulled=!1,e.add(_,E);let W=!1;function Y(){if(W||!b.length)return;W=!0,e.updateMatrixWorld(!0);let x=new Ns,w=b.map(L=>L.mesh),C=new U(0,0,-1);S.forEach(L=>{x.set(new U(L.w[0],L.w[1],50),C),L.ext=!x.intersectObjects(w,!1).length});let O=(L,V)=>S.findIndex(K=>Math.hypot(K.w[0]-L[0],K.w[1]-L[1])<.05);M.forEach(L=>{let V=O(L.p[0]),K=O(L.p[L.p.length-1]),it=at=>(x.set(new U(at[0],at[1],50),C),!x.intersectObjects(w,!1).length);L.ext=(V>=0?S[V].ext:it(L.p[0]))&&(K>=0?S[K].ext:it(L.p[L.p.length-1]))})}let st=()=>{let x=new Set(zt.size<=2?zt:[]);try{be&&be.fam&&x.add(be.fam)}catch{}return x},St="";function wt(){Y();let x=[],w=[],C=new Set,O=new oe,L=new oe("#d2d0d0"),V=st();St=[...V].join();for(let K of v)if(zt.has(K))for(let it of Z[K]){if(C.has(it))continue;C.add(it);let at=M[it].p;O.set(A[K]),M[it].ext&&!V.has(K)&&O.lerp(L,.72);for(let ot=0;ot+1<at.length;ot++)x.push(at[ot][0],at[ot][1],P,at[ot+1][0],at[ot+1][1],P),w.push(O.r,O.g,O.b,O.r,O.g,O.b)}x.length||(x.push(0,0,-50,0,0,-50),w.push(0,0,0,0,0,0)),ce.setPositions(x),ce.setColors(w),F.setPositions(x),a()}wt();let rt=x=>new pn({uniforms:{dpr:{value:Math.min(devicePixelRatio||1,2)},border:{value:new oe(x)}},vertexShader:"attribute float size; attribute vec3 fill; attribute float bw; varying vec3 vF; varying float vS; varying float vB; uniform float dpr; void main(){ vF=fill; vS=size*dpr; vB=bw*dpr; gl_PointSize=vS; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"uniform vec3 border; varying vec3 vF; varying float vS; varying float vB; void main(){ float r=length(gl_PointCoord*2.0-1.0)*vS*0.5; float R=vS*0.5; if(r>R) discard; float a=1.0-smoothstep(R-1.2,R,r); vec3 c = r>R-vB ? border : vF; gl_FragColor=vec4(c,a); }",transparent:!0,depthTest:!1}),ut=new tn,Et=S.length,Xt=new Float32Array(Et*3),Dt=new Float32Array(Et*3),Tt=new Float32Array(Et),Jt=new Float32Array(Et);S.forEach((x,w)=>{Xt[w*3]=x.w[0],Xt[w*3+1]=x.w[1],Xt[w*3+2]=P,Dt.set([1,1,1],w*3),Tt[w]=6,Jt[w]=1.6}),ut.setAttribute("position",new $e(Xt,3)),ut.setAttribute("fill",new $e(Dt,3)),ut.setAttribute("size",new $e(Tt,1)),ut.setAttribute("bw",new $e(Jt,1));let ne=new Ps(ut,rt("#1d2330"));ne.renderOrder=22,ne.frustumCulled=!1,e.add(ne);function ie(){let x=r.dist<45,w=st();S.forEach((C,O)=>{let L=[...C.fams].some(K=>zt.has(K)),V=C.ext&&![...C.fams].some(K=>w.has(K))&&O!==Ye;Tt[O]=L?O===Ye?13:V?3:x?8:5:0,Jt[O]=O===Ye?3:1.6}),ut.attributes.size.needsUpdate=!0,ut.attributes.bw.needsUpdate=!0}let B=600,Mt=new tn,dt=new Float32Array(B*3),Ct=new Float32Array(B*3),Ft=new Float32Array(B),mt=new Float32Array(B);Mt.setAttribute("position",new $e(dt,3)),Mt.setAttribute("fill",new $e(Ct,3)),Mt.setAttribute("size",new $e(Ft,1)),Mt.setAttribute("bw",new $e(mt,1));let Kt=new Float32Array(B);Mt.setAttribute("ang",new $e(Kt,1));let qt=new pn({uniforms:{dpr:{value:Math.min(devicePixelRatio||1,2)},border:{value:new oe("#ffffff")}},vertexShader:"attribute float size; attribute vec3 fill; attribute float bw; attribute float ang; varying vec3 vF; varying float vS; varying float vB; varying float vA; uniform float dpr; void main(){ vF=fill; vS=size*dpr; vB=bw*dpr; vA=ang; gl_PointSize=vS; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"uniform vec3 border; varying vec3 vF; varying float vS; varying float vB; varying float vA; void main(){ vec2 p=gl_PointCoord*2.0-1.0; float r=length(p)*vS*0.5; float R=vS*0.5; if(r>R) discard; float a=1.0-smoothstep(R-1.2,R,r); vec3 c = r>R-vB ? border : vF; if(vA<50.0){ vec2 d=vec2(sin(vA),-cos(vA)); vec2 n=vec2(cos(vA),sin(vA)); float qy=-dot(p,d); float qx=dot(p,n); float w=(qy+0.66)/0.98*0.48; if(qy>-0.66 && qy<0.32 && abs(qx)<w) c=vec3(1.0); } else if(vA>70.0 && vA<80.0){ if(abs(p.y)<0.36 && abs(abs(p.x)-0.2)<0.1) c=vec3(1.0); } gl_FragColor=vec4(c,a); }",transparent:!0,depthTest:!1}),Be=new Ps(Mt,qt);Be.renderOrder=24,Be.frustumCulled=!1,e.add(Be);let we=new tn,bn=new Float32Array(B*3),$n=new Float32Array(B*3),ja=new Float32Array(B),Qa=new Float32Array(B);we.setAttribute("position",new $e(bn,3)),we.setAttribute("fill",new $e($n,3)),we.setAttribute("size",new $e(ja,1)),we.setAttribute("bw",new $e(Qa,1));let Xs=new Ps(we,rt("#ffffff"));Xs.renderOrder=23,Xs.frustumCulled=!1,e.add(Xs);function qs(x,w){let C=M[x],O=w*C.L,L=0,V=C.c.length-1;for(;V-L>1;){let _t=L+V>>1;C.c[_t]<=O?L=_t:V=_t}let K=C.c[V]-C.c[L]||1,it=(O-C.c[L])/K,at=C.p[L],ot=C.p[V];return[at[0]+(ot[0]-at[0])*it,at[1]+(ot[1]-at[1])*it]}let to=x=>x*x*(3-2*x)*.35+x*.65;function ys(x,w){let C=x.pat.t,O=x.pat.stops.length,L=C[2*O-2];if(w<C[1]-2||w>L+1)return null;if(w<=C[1])return{w:S[x.pat.stops[0]].w,at:0,next:0,moving:!1};for(let V=0;V<O-1;V++){let K=C[2*V+1],it=C[2*V+2],at=C[2*V+3];if(w<=it){let ot=it>K?(w-K)/(it-K):1;return{w:qs(x.pat.segs[V],to(m(ot,0,1))),at:-1,next:V+1,prev:V,moving:!0}}if(w<=at)return{w:S[x.pat.stops[V+1]].w,at:V+1,next:V+1,moving:!1}}return{w:S[x.pat.stops[O-1]].w,at:O-1,next:O-1,moving:!1}}function Fr(x){let w=t.days.indexOf(x.ymd),C=[];if(w<0)return{k:w,out:C};let O=(L,V)=>{for(let K of L){if(!zt.has(K.fam))continue;let it=Qt(K);if(it==="X")continue;let at=(it||0)/60,ot=x.min+V-K.t0-at;if(ot<-2||ot>K.pat.t[K.pat.t.length-2]+1)continue;let _t=ys(K,ot);_t&&C.push({tr:K,p:_t,rel:ot,dl:at,live:it!=null})}};return O(J[w],0),w>0&&O(J[w-1],1440),{k:w,out:C}}function Gi(x,w,C,O){let L=x.pat.stops[0],V=w.dep0,K=null,it=(ot,_t)=>{for(let I of ot||[]){let tt=I.pat.stops,bt=tt.length;if(tt[bt-1]!==L||I===x)continue;let Pt=I.t0+I.pat.t[2*(bt-1)]-_t;if(Pt>V+5||Pt<V-120)continue;let se=ft(I.pat),ae=Zt(se,w.w,-1,1e9);if(ae.err>.6)continue;let Ie=se.stopD,jt=I.pat.t,$t=Ie.findIndex(Ue=>Ue>ae.d);$t<0&&($t=bt-1);let me=$t===0?jt[1]:jt[2*$t-1]+(Ie[$t]>Ie[$t-1]?(ae.d-Ie[$t-1])/(Ie[$t]-Ie[$t-1]):1)*(jt[2*$t]-jt[2*$t-1]),ue=C-(I.t0+me-_t);ue<-5||ue>120||(!K||Math.abs(ue)<Math.abs(K.prevDl))&&(K={prevTr:I,dPrev:ae.d,prevDl:ue,arrO:Pt+Math.max(0,ue)})}};if(it(J[O],0),O>0&&it(J[O-1],1440),!K)return{prevTr:null,preDl:0};let at=Math.max(V,K.arrO+3);return{...K,depEst:at,preDl:Math.max(0,at-V)}}function Or(x,w,C){let O=x.pat.t,L=w.length;if(!(C>=0))return C<0?w[0]:null;for(let V=0;V<L;V++)if(C<=O[2*V+1]){if(C>=O[2*V]||V===0)return w[V];let K=O[2*V-1],it=O[2*V];return w[V-1]+(w[V]-w[V-1])*(it>K?(C-K)/(it-K):1)}return w[L-1]}let Br=performance.now();function eo(){let x=[],w=Date.now()/1e3,C=performance.now(),O=Math.min(1,(C-Br)/1e3);Br=C;for(let L of D.vp.values()){let V=H.get(L.tid),K=V?V.fam:L.fam;if(K&&A[K]&&!zt.has(K))continue;let it=D.delays.get(L.tid),at=typeof it=="number"?it/60:0,ot=Math.max(0,w-L.ts);L.mvTs!==L.ts&&((!L.mvW||Math.hypot(L.w[0]-L.mvW[0],L.w[1]-L.mvW[1])>.025)&&(L.mvW=L.w,L.mvAt=L.ts),L.mvTs=L.ts),L.still=L.ts-(L.mvAt||L.ts);let _t=L.w,I=-1;if(V){let bt=ft(V.pat),Pt=bt.stopD;if(L.dObs==null||L.obsAt!==L.ts){let $t=Zt(bt,L.w,-1,1e9);L.dObs=$t.d,L.err=$t.err,L.obsAt=L.ts}let se=At(),ae=t.days.indexOf(se.ymd),Ie=V.day===ae-1?1440:0,jt=V.t0+V.pat.t[1]-Ie;if(L.pre=se.min+at<jt-1&&(L.dObs>Pt[0]+.35||L.err>.6)&&!(L.st==="STOPPED_AT"&&L.sid===S[V.pat.stops[0]].id),L.dep0=jt,L.pre){if(L.atStop=-1,L.next=0,I=0,L.disp=null,L.prevAt!==L.ts&&(L.prevAt=L.ts,Object.assign(L,Gi(V,L,se.min,ae))),L.prevTr){let $t=ft(L.prevTr.pat);_t=Vt($t,L.dPrev)}}else if(L.err<=.6){let $t=Pt.findIndex(Ue=>Ue>L.dObs+.08);$t<0&&($t=Pt.length-1);let me=Pt.reduce((Ue,hn,je)=>Math.abs(hn-L.dObs)<Math.abs(Pt[Ue]-L.dObs)?je:Ue,0);L.atStop=Math.abs(Pt[me]-L.dObs)<.16?me:-1,L.next=$t,I=$t;let ue=L.dObs;if(L.st==="STOPPED_AT"&&L.atStop>=0)ue=Pt[L.atStop];else if($t>0){let Ue=(V.pat.t[2*$t]-V.pat.t[2*$t-1])*60,hn=Ue>0?(Pt[$t]-Pt[$t-1])/Ue:0,je=At(),We=t.days.indexOf(je.ymd),Ms=V.day===We-1?1440:0,Un=Or(V,Pt,je.min+Ms-V.t0-at),Wr=L.dObs+hn*Math.min(ot,60);Un!=null&&(Wr=Math.min(Wr,Math.max(L.dObs,Un))),ue=Math.max(L.dObs,Math.min(Pt[$t]-.03,Wr))}L.disp==null||Math.abs(L.disp-ue)>1.2?L.disp=ue:ue>L.disp&&(L.disp+=(ue-L.disp)*Math.min(1,O*1.5)),_t=Vt(bt,L.disp)}else if(L.err>2){let $t=At(),me=t.days.indexOf($t.ymd),ue=V.day===me-1?1440:0,Ue=ys(V,$t.min+ue-V.t0-at);Ue&&(_t=Ue.w,L.est=!0,I=Ue.next),L.atStop=-1,L.next=Ue?Ue.next:-1}else L.atStop=-1,L.next=-1}let tt=L.pre?"":L.st==="STOPPED_AT"&&L.atStop>=0||L.atStop>=0&&L.still>30?"st":L.still>=90?"via":"";x.push({tr:V,v:L,w:_t,stop:tt,p:{w:_t},fam:K||"?",c:V?V.c:A[K]||"#6b7385",dl:at,live:!0,real:!0,idx:I,age:ot,cancel:it==="X"})}return x}let wn=new Map,mn=!1,Xn=[],ni=0,rn=null,be=null,Ye=-1,gn=!1,no=0,zr="";function y(x){let w=j>0||yt()&&ht==null||!!be,C=w?50:250;if(x-ni<C)return!1;ni=x,[...st()].join()!==St&&(wt(),ie());let O=At(),L=yt()&&O.live,V=L?{k:t.days.indexOf(O.ymd),out:eo()}:Fr(O);Xn=V.out;let K=new oe,it=0,at=0;for(let I of Xn){if(it>=B)break;dt[it*3]=I.p.w[0],dt[it*3+1]=I.p.w[1],dt[it*3+2]=P+.02;let tt=null;if(I.real&&I.v.pre&&I.v.prevTr)tt=Vt(ft(I.v.prevTr.pat),I.v.dPrev+.35);else if(I.real&&I.tr&&!I.v.pre&&I.v.err<=.6&&I.v.disp!=null&&!(I.v.st==="STOPPED_AT"&&I.v.atStop>=0))tt=Vt(ft(I.tr.pat),I.v.disp+.35);else if(!I.real&&I.p.moving){let ae=I.tr.pat.t,Ie=I.p.prev,jt=ae[2*Ie+1],$t=ae[2*Ie+2],me=$t>jt?(I.rel-jt)/($t-jt):1;tt=qs(I.tr.pat.segs[Ie],Math.min(1,to(m(me,0,1))+.04))}if(I.real?!!I.stop:!I.p.moving)Kt[it]=75;else if(tt){let ae=kt(I.p.w),Ie=kt(tt),jt=Ie[0]-ae[0],$t=Ie[1]-ae[1];Kt[it]=Math.hypot(jt,$t)>.05?Math.atan2(jt,-$t):99}else Kt[it]=99;K.set(I.c||I.tr.c),Ct[it*3]=K.r,Ct[it*3+1]=K.g,Ct[it*3+2]=K.b;let Pt=I.tr?I.tr===be:be&&be.vtid===I.v.tid;Ft[it]=Pt?22:r.dist<45?17:14,mt[it]=Pt?3.5:2.2;let se=I.real&&I.stop==="via";(I.live&&I.dl>=5||Pt||se)&&(bn[at*3]=I.p.w[0],bn[at*3+1]=I.p.w[1],bn[at*3+2]=P+.01,$n.set(Pt?[1,.84,.1]:se?[.86,.15,.15]:[.98,.45,.09],at*3),ja[at]=Ft[it]+(Pt?16+5*Math.sin(x/220):se?10+3*Math.sin(x/400):8),Qa[at]=Pt?2:3,at++),it++}if(Mt.setDrawRange(0,it),we.setDrawRange(0,at),["position","fill","size","bw"].forEach(I=>{Mt.attributes[I].needsUpdate=!0,we.attributes[I].needsUpdate=!0}),Mt.attributes.ang.needsUpdate=!0,rn){let I=Xn.find(tt=>tt.tr===rn);if(I){let tt=0,bt=innerHeight,Pt=h.style.display!=="none"&&!h.classList.contains("min")?h.getBoundingClientRect():null,se=f("#rc").getBoundingClientRect();innerWidth<=640&&(Pt&&(tt=Pt.bottom),bt=Math.min(bt,se.top));let ae=tt+(bt-tt)/2,Ie=ae-innerHeight/2,jt=2*s.dist*Math.tan(17.5*Math.PI/180)/innerHeight;s.tx=I.p.w[0]-Math.sin(r.yaw)*Ie*jt,s.ty=I.p.w[1]+Math.cos(r.yaw)*Ie*jt}else yt()&&At().live&&(rn=null)}let ot=Gt(O.min);ot!==zr&&(zr=ot,f("#ctime").textContent=ot),f("#ntr").textContent=String(Xn.length),f("#ntrl").textContent=L?"trenes de Rodalies con posici\xF3n real":"trenes previstos seg\xFAn el horario";let _t=new Date;if(f("#cdate").textContent=O.live?"hora actual":j?"simulaci\xF3n \xD7"+j:si?"en pausa":"hora elegida",V.k<0?f("#src").innerHTML=`<b style="color:#c2410c">Sin horarios para hoy.</b> Los datos guardados van del ${Pe(t.days[0])} al ${Pe(t.days[t.days.length-1])}: actualiza la app.`:L?f("#src").textContent=`En directo \xB7 posiciones de Renfe de hace ${Math.round(Math.max(0,Date.now()/1e3-Math.max(...[...D.vp.values()].map(I=>I.ts),0)))} s`:f("#src").innerHTML='<b style="color:#c2410c">No es tiempo real:</b> '+(D.url?"sin conexi\xF3n con el puente, ":"conecta el puente para ver los trenes reales; ")+"posiciones calculadas con el horario",O.live){let I=Math.round(O.min),tt=f("#tsl");document.activeElement!==tt&&(tt.value=I<240?I+1440:I)}return Nn(),x-no>3e3&&(be||Ye>=0||gn)&&(no=x,he()),te(),!0}let z=-1;function Q(){r.dist<45!=z<45&&(z=r.dist,ie()),Ot()}let X=[],$=new U;function Ot(){let x=r.dist<30,w=0;if(x){let C=[];for(let O=0;O<Et;O++)Tt[O]<4||($.set(S[O].w[0],S[O].w[1],P).project(n),!($.z>1||Math.abs($.x)>1.05||Math.abs($.y)>1.05)&&C.push([O,($.x*.5+.5)*innerWidth,(-$.y*.5+.5)*innerHeight]));if(C.length<=70)for(let[O,L,V]of C){let K=X[w]||(X[w]=Object.assign(document.createElement("div"),{className:"slab"}));K.isConnected||document.body.appendChild(K),K.textContent=S[O].n,K.dataset.i=O,K.style.display="block",K.style.transform=`translate(${Math.round(L+8)}px,${Math.round(V-7)}px)`,w++}}for(;w<X.length;w++)X[w].style.display="none"}function kt(x){return $.set(x[0],x[1],P).project(n),[($.x*.5+.5)*innerWidth,(-$.y*.5+.5)*innerHeight,$.z]}function Ut(x,w,C,O){let L=null,V=C*C;for(let K of Xn){let[it,at,ot]=kt(K.p.w);if(ot>1)continue;let _t=(it-x)**2+(at-w)**2;_t<V&&(V=_t,L={a:K})}if(L)return L;V=O*O;for(let K=0;K<Et;K++){if(!Tt[K])continue;let[it,at,ot]=kt(S[K].w);if(ot>1)continue;let _t=(it-x)**2+(at-w)**2;_t<V&&(V=_t,L={s:K})}return L}window.__rodTap=(x,w)=>{let C=null,O=1e9;for(let V of X){if(V.style.display==="none")continue;let K=V.getBoundingClientRect();if(x>=K.left-4&&x<=K.right+4&&w>=K.top-4&&w<=K.bottom+4){let it=Math.abs(w-(K.top+K.bottom)/2)*4+(x-K.left);it<O&&(O=it,C=V)}}if(C)return window.__rodPickStation(+C.dataset.i),!0;let L=Ut(x,w,24,18);return L&&L.a?(mn=!1,gn=!1,be=L.a.tr||{vtid:L.a.v.tid},Ye=-1,rn=null,Zs(),ie(),he(),ni=0,a(),!0):L&&L.s!=null?(mn=!1,gn=!1,Ye=L.s,be=null,rn=null,Zs(),ie(),he(),a(),!0):!1},window.__rodHover=(x,w)=>{let C=Ut(x,w,14,10);if(C&&C.a){let O=C.a,L=O.tr?S[O.tr.pat.stops[O.tr.pat.stops.length-1]].n:"";return`<b><span style="color:${O.c}">\u25A0</span> ${d(O.fam)} \xB7 tren ${d(O.tr?O.tr.num:O.v.num)}</b><small>${L?"hacia "+d(L):""}${O.real?(O.dl>=1?` \xB7 <b style="color:#c2410c">+${Math.round(O.dl)} min</b>`:" \xB7 puntual")+" \xB7 en directo":" \xB7 previsto"}</small>`}return C&&C.s!=null?`<b>${d(S[C.s].n)}</b><small>${[...S[C.s].fams].sort(N).join(" \xB7 ")}</small>`:null},window.__rodPickStation=x=>{mn=gn=!1,be=null,rn=null,Ye=x,Zs(),ie(),h._h="",he(),a()};{let x=f("#rc"),w=()=>{let C=x.getBoundingClientRect().top;document.documentElement.style.setProperty("--mcsmax",Math.max(160,C-64-10)+"px")};try{new ResizeObserver(w).observe(x)}catch{}addEventListener("resize",w),setTimeout(w,300)}window.__rodTick=y,window.__rodFrame=Q,window.__rodResize=()=>{Ne.resolution.set(innerWidth,innerHeight),ve.resolution.set(innerWidth,innerHeight)},window.__rodResize();let Bt={st:-1,f:new Set},Yt=x=>{let w=[...S[x].fams].sort(N);return`<div class="sfc">${w.length>1?`<button type="button" data-sf="" class="${Bt.f.size?"":"on"}">Todas</button>`:""}${w.map(C=>`<button type="button" data-sf="${d(C)}" class="ln ${Bt.f.size&&!Bt.f.has(C)?"off":""}${zt.has(C)?"":" hid"}" style="--c:${A[C]}">${d(C)}</button>`).join("")}</div>${w.some(C=>!zt.has(C))?"<small>Las l\xEDneas apagadas en el filtro general no se muestran</small>":""}`},xe=x=>{let w=(x||"#6b7385").replace("#",""),C=parseInt(w.slice(0,2),16),O=parseInt(w.slice(2,4),16),L=parseInt(w.slice(4,6),16);return(.299*C+.587*O+.114*L)/255>.62?"#1d2330":"#fff"},fe=(x,w)=>{let C=A[w]||"#6b7385";return`<span class="dst" style="background:${C};color:${xe(C)}" title="${d(w||"")}">${d(x)}</span>`},Wt=x=>{let w=S[x]&&S[x].id;return Yn.st.includes(w)?"\u{1F3E0} ":Tn.st.includes(w)?"\u{1F4BC} ":""},Ee=x=>`<span class="ln" style="--c:${A[x]}">${d(x)}</span>`;function Je(x,w){return w?x==="X"?'<span class="st late">Cancelado</span>':x>=60?`<span class="st late">Retraso de ${Math.round(x/60)} min</span>`:'<span class="st ok">Puntual</span>':'<span class="st sch">Seg\xFAn horario \xB7 sin dato en directo</span>'}function he(){if(!be&&Ye<0&&!gn&&!mn){h.innerHTML="",h._h="",h.style.display="none",h.classList.remove("peek"),Uc();return}let x=At(),w="",C=yt()&&x.live,O=(I,tt)=>D.alerts.filter(bt=>[...bt.fams].some(Pt=>I.has(Pt))||tt!=null&&bt.stops.has(tt)),L=I=>I.length?`<div class="al">${I.slice(0,4).map(tt=>`<p>\u26A0\uFE0F ${ii(tt)} ${[...tt.fams].sort(N).slice(0,6).map(Ee).join(" ")} ${d(tt.txt)} <small>${wi(tt)}</small></p>`).join("")}${I.length>4?`<small>y ${I.length-4} avisos m\xE1s</small>`:""}</div>`:"",V=be&&C?Xn.find(I=>I.real&&(be.vtid?I.v.tid===be.vtid:I.tr===be)):null;if(mn)w=`<div class="tc" style="--c:#1d2330"><button class="x" data-cx>\xD7</button><h3>Novedades</h3><small>${d(f("#ver").textContent.replace(" \xB7 novedades y fuentes",""))}</small><ul class="chg">${f("#chg").innerHTML||"<li>Versi\xF3n de prueba</li>"}</ul>
        <h3 style="margin-top:14px">Fuentes</h3><ul class="fts">
        <li><b>Renfe Operadora</b> \xB7 horarios (GTFS), posici\xF3n de los trenes y retrasos (GTFS-RT) \xB7 <a href="https://data.renfe.com" target="_blank" rel="noopener">data.renfe.com</a> \xB7 licencia CC BY 4.0</li>
        <li><b>Rodalies de Catalunya</b> (Generalitat) \xB7 salidas con v\xEDa, cancelaciones y avisos \xB7 <a href="https://rodalies.gencat.cat" target="_blank" rel="noopener">rodalies.gencat.cat</a></li>
        <li><b>Adif</b> \xB7 incidencias en la infraestructura de Catalu\xF1a \xB7 <a href="https://www.adif.es/viajeros/estado-de-la-red" target="_blank" rel="noopener">estado de la red</a> \xB7 \xA9 Adif</li>
        <li><b>OpenStreetMap</b> \xB7 trazado de las v\xEDas \xB7 <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">\xA9 colaboradores de OpenStreetMap</a>, licencia ODbL</li>
        </ul><small>Los datos se muestran tal como los publican sus fuentes. Ante cualquier duda, manda lo que diga el operador en la estaci\xF3n.</small></div>`;else if(gn){let I=D.alerts.filter(tt=>[...tt.fams].some(bt=>zt.has(bt))||!tt.fams.size);w=`<div class="tc" style="--c:#c2410c"><button class="x" data-cx>\xD7</button><h3>Avisos e incidencias</h3><small>${I.length} avisos activos para las l\xEDneas que tienes visibles</small>${I.map(tt=>`<div class="al"><p>${ii(tt)} ${[...tt.fams].sort(N).map(Ee).join(" ")} <small>${wi(tt)}</small></p><p>${d(tt.txt)}</p></div>`).join("")||"<p>Sin avisos activos.</p>"}<small>Fuente: avisos oficiales de Rodalies de Catalunya, incidencias en la v\xEDa de Adif (gestor de la infraestructura)${D.alertsTs&&Date.now()/1e3-D.alertsTs<6*3600?" y de Renfe":` \xB7 los avisos GTFS de Renfe no se muestran: Renfe no los actualiza desde el ${D.alertsTs?new Date(D.alertsTs*1e3).toLocaleDateString("es-ES",{day:"numeric",month:"short"}):"\u2014"}`}</small></div>`}else if(V){let I=V.v,tt=V.tr,bt=je=>d(S[tt.pat.stops[je]].n),Pt=tt?tt.pat.stops.length:0,se=ct.get(I.sid),ae=se!=null?d(S[se].n):d(I.sid),Ie=tt&&I.atStop>=0?bt(I.atStop):"",jt=tt&&I.next>=0?bt(I.next):ae,$t=tt&&I.next>0?bt(I.next-1):"",me=V.stop==="via"&&tt?`<b class="stopv">\u23F8 Detenido</b> ${$t?`entre ${$t} y <b>${jt}</b>`:`antes de <b>${jt}</b>`} desde hace ${Math.max(1,Math.round(I.still/60))} min`:I.pre&&tt?I.prevTr?`A\xFAn no ha empezado este viaje. Est\xE1 terminando el tren <b>${d(I.prevTr.num)}</b> hacia <b>${bt(0)}</b>${I.prevDl>=1?` con <b>+${Math.round(I.prevDl)} min</b>`:""}: llega hacia las <b>${Gt(I.arrO)}</b> y saldr\xEDa hacia las <b>${Gt(I.depEst)}</b>${I.preDl>=1?` (horario ${Gt(I.dep0)})`:""}`:`A\xFAn no ha empezado este viaje: va hacia <b>${bt(0)}</b>, de donde sale a las <b>${Gt(I.dep0+V.dl)}</b>`:I.st==="STOPPED_AT"&&Ie?`Parado en <b>${Ie}</b>`:Ie&&I.next>=0&&I.atStop!==I.next?`Saliendo de <b>${Ie}</b> hacia <b>${jt}</b>`:$t?`Entre ${$t} y <b>${jt}</b>`:`Hacia <b>${jt}</b>`,ue=D.tu.get(I.tid),Ue=ue&&ue.next&&tt&&I.next>=0&&ue.next.sid===S[tt.pat.stops[I.next]].id&&ue.next.t?new Date(ue.next.t*1e3).toLocaleTimeString("es-ES",{hour:"2-digit",minute:"2-digit"}):"",hn=[];if(tt){let je=V.idx>=0?V.idx:0,We=I.pre?Math.max(V.dl,I.preDl||0):V.dl,Ms=Un=>tt.t0+tt.pat.t[Un]+We;for(let Un=je;Un<Pt;Un++)hn.push(`<li${Wt(tt.pat.stops[Un])?' class="mine"':""}><b>${Gt(Ms(Un===0?1:2*Un))}</b><span title="${bt(Un)}">${Wt(tt.pat.stops[Un])}${bt(Un)}</span>${We>=1?`<em>${I.pre?"\u2248":""}+${Math.round(We)}</em>`:""}</li>`)}w=`<div class="tc" style="--c:${V.c}"><button class="x" data-cx>\xD7</button><div>${Ee(V.fam)}<b>Tren ${d(tt?tt.num:I.num)}</b> <span class="lv">\u25CF en directo</span></div>${tt?`<h3 class="rt"><span class="o" title="${bt(0)}">${bt(0)}</span><span class="ar">\u2192</span>${fe(S[tt.pat.stops[Pt-1]].n,tt.fam)}</h3>`:""}
        <p>${me}${Ue?` \xB7 prevista ${Ue}`:""}${I.plat?` \xB7 <b>and\xE9n ${d(I.plat)}</b>`:""}</p><p>${I.pre&&I.prevTr?I.preDl>=1?`<span class="st late">Saldr\xE1 con unos ${Math.round(I.preDl)} min de retraso (estimado)</span>`:'<span class="st ok">Le da tiempo a salir a su hora (estimado)</span>':Je(D.delays.get(I.tid),D.delays.has(I.tid))}</p>
        <small>${I.pre?`Renfe ya le pone el n\xFAmero de su pr\xF3ximo viaje. Posici\xF3n real enviada hace ${Math.round(V.age)} s`:I.est?"Renfe da una posici\xF3n que no encaja con su recorrido: se muestra donde deber\xEDa estar seg\xFAn el horario y su retraso":`Posici\xF3n enviada por Renfe hace ${Math.round(V.age)} s${V.age>120?" \xB7 <b>sin actualizar</b>":""}`}</small>
        ${hn.length?`${V.dl>=1||I.pre&&I.preDl>=1?'<small style="margin-top:6px">Horas con el retraso actual</small>':""}<ol class="stops">${hn.join("")}</ol>`:""}${L(O(new Set([V.fam])))}
        ${hi(tt?tt.num:I.num,"",V.fam)}${tt?`<div class="rtb"><button type="button" data-follow>${rn===tt?"Dejar de seguir":"Seguir este tren"}</button></div>`:""}</div>`}else if(be&&C)w=`<div class="tc" style="--c:#6b7385"><button class="x" data-cx>\xD7</button><h3>Tren ${d(be.num||be.vtid||"")}</h3><p>Renfe no da ahora la posici\xF3n de este tren: puede haber terminado su viaje, no haber salido o no estar circulando.</p></div>`;else if(be){let I=be,tt=I.pat,bt=tt.stops.length,Pt=Qt(I),se=typeof Pt=="number"?Pt/60:0,ae=t.days.indexOf(x.ymd),Ie=I.day===ae-1?1440:0,jt=x.min+Ie-I.t0-se,$t=ys(I,jt),me=We=>I.t0+tt.t[We]+se,ue=We=>d(S[tt.stops[We]].n),Ue="Fuera de servicio ahora";$t&&(Ue=$t.moving?`Circulando hacia <b>${ue($t.next)}</b> \xB7 llega ${Gt(me(2*$t.next))}`:$t.at===bt-1?`Ha llegado a <b>${ue(bt-1)}</b>`:`Parado en <b>${ue($t.at)}</b> \xB7 sale ${Gt(me(2*$t.at+1))}`);let hn=$t?$t.next:0,je=[];for(let We=hn;We<bt;We++)je.push(`<li${Wt(tt.stops[We])?' class="mine"':""}><b>${Gt(me(2*We))}</b><span title="${ue(We)}">${Wt(tt.stops[We])}${ue(We)}</span>${se>=1?`<em>+${Math.round(se)}</em>`:""}</li>`);w=`<div class="tc" style="--c:${I.c}"><button class="x" data-cx>\xD7</button><div>${Ee(I.fam)}<b>Tren ${d(I.num)}</b> <span class="pv">previsi\xF3n</span></div><h3 class="rt"><span class="o" title="${ue(0)}">${ue(0)}</span><span class="ar">\u2192</span>${fe(S[I.pat.stops[bt-1]].n,I.fam)}</h3>
        <p>${Ue}</p><p>${Je(Pt,Pt!=null)}</p><small>Sale ${Gt(I.t0+tt.t[1])} \xB7 llega ${Gt(I.t0+tt.t[2*bt-2])} (horario)</small>
        ${se>=1?'<small style="margin-top:6px">Horas con el retraso actual</small>':""}<ol class="stops">${je.join("")}</ol>${hi(I.num,"",I.fam)}<div class="rtb"><button type="button" data-follow>${rn===I?"Dejar de seguir":"Seguir este tren"}</button></div></div>`}else{let I=Ye,tt=t.days.indexOf(x.ymd),bt=[];Bt.st!==I&&(Bt.st=I,Bt.f.clear());let Pt=jt=>(!A[jt]||zt.has(jt))&&(!Bt.f.size||Bt.f.has(jt));if(tt>=0){let jt=($t,me)=>{for(let ue of $t){if(!Pt(ue.fam))continue;let Ue=ue.pat.stops.indexOf(I);if(Ue<0||Ue===ue.pat.stops.length-1)continue;let hn=Qt(ue),je=typeof hn=="number"?hn/60:0,We=ue.t0+ue.pat.t[2*Ue+1]-me;We+je<x.min-1||We>x.min+360||bt.push({tr:ue,t:We,dl:je,d:hn,on:D.vp.has(ue.tid),past:x.min>ue.t0+ue.pat.t[1]-me+2})}};jt(J[tt],0),tt>0&&jt(J[tt-1],1440)}bt.sort((jt,$t)=>jt.t+jt.dl-$t.t-$t.dl);let se=S[I].id,ae=wn.get(se);C&&D.url&&(!ae||Date.now()-ae.at>3e4)&&!ae?.loading&&(wn.set(se,{...ae||{},loading:!0,at:ae?ae.at:0}),pt(D.url.replace(/\/+$/,""),"/departures.json?stationId="+se).then(jt=>{wn.set(se,{at:Date.now(),d:jt}),Ye===I&&(h._h="",he())}).catch(()=>wn.set(se,{at:Date.now(),err:1})));let Ie=C&&ae&&ae.d&&Array.isArray(ae.d.trains)?ae.d.trains:null;if(Ie){let jt=new Map([...D.vp.values()].map(me=>[String((H.get(me.tid)||{}).num||me.num),me])),$t=Ie.filter(me=>Pt((me.line||{}).id||"")).slice(0,40).map(me=>{let ue=(me.departureDateHourSelectedStation||"").slice(11,16),Ue=(me.line||{}).id||"",hn=String(me.commercialNumber||me.technicalNumber||""),je=jt.get(hn),We=je?D.delays.get(je.tid):null;return`<li class="go" data-gt="${d(hn)}|${je?d(je.tid):""}"><b>${d(ue)}</b>${A[Ue]?Ee(Ue):`<span class="ln" style="--c:#6b7385">${d(Ue||"?")}</span>`}<span>${fe((me.destinationStation||{}).name||"",Ue)}${me.trainObservations?` \xB7 <i>${d(me.trainObservations)}</i>`:""}</span>${me.trainCancelled?"<em>cancelado</em>":typeof We=="number"&&We>=60?`<em>+${Math.round(We/60)}</em>`:""}${me.platformSelectedStation?`<i class="via">v\xEDa ${d(me.platformSelectedStation)}</i>`:""}${je?'<i class="lvd" title="circulando, posici\xF3n real">\u25CF</i>':'<i class="lvd ph">\u25CF</i>'}</li>`}).join("");w=`<div class="tc" style="--c:#1d2330"><button class="x" data-cx>\xD7</button><h3>${d(S[I].n)}</h3>${Yt(I)}${hi("",S[I].id,"")}
          <small style="margin-top:6px">Pr\xF3ximas salidas oficiales de Rodalies \xB7 hora prevista \xB7 \u25CF tren circulando</small>
          <ol>${$t||"<li><span>Rodalies no anuncia salidas ahora mismo</span></li>"}</ol>${L(O(S[I].fams,I))}<div class="rtb two"><button type="button" data-sethome="home">\u{1F3E0} Es mi casa</button><button type="button" data-sethome="work">\u{1F4BC} Es mi trabajo</button></div></div>`}else w=`<div class="tc" style="--c:#1d2330"><button class="x" data-cx>\xD7</button><h3>${d(S[I].n)}</h3>${Yt(I)}${hi("",S[I].id,"")}
        <small style="margin-top:6px">${C&&D.url?"Cargando salidas oficiales\u2026 mientras, ":""}Pr\xF3ximas salidas${C?" \xB7 hora prevista con el retraso actual \xB7 \u25CF tren circulando":" \xB7 previsi\xF3n seg\xFAn horario (sin tiempo real)"}</small>
        <ol>${bt.slice(0,40).map(jt=>`<li class="go" data-gt="${d(jt.tr.num)}|${d(jt.tr.tid)}"><b>${Gt(jt.t+jt.dl)}</b>${Ee(jt.tr.fam)}<span>${fe(S[jt.tr.pat.stops[jt.tr.pat.stops.length-1]].n,jt.tr.fam)}</span>${jt.d==="X"?"<em>cancelado</em>":jt.dl>=1?`<em>+${Math.round(jt.dl)}</em>`:""}${C?jt.on?'<i class="lvd" title="circulando, posici\xF3n real">\u25CF</i>':jt.past?'<i class="nos" title="deber\xEDa haber salido y Renfe no da su posici\xF3n">sin se\xF1al</i>':'<i class="lvd ph">\u25CF</i>':""}</li>`).join("")||"<li><span>No hay salidas en las pr\xF3ximas 6 horas</span></li>"}</ol>${L(O(S[I].fams,I))}<div class="rtb two"><button type="button" data-sethome="home">\u{1F3E0} Es mi casa</button><button type="button" data-sethome="work">\u{1F4BC} Es mi trabajo</button></div></div>`}let K=h.scrollTop;if(h._h!==w&&(h.innerHTML=w,h._h=w,h.scrollTop=K),h.style.display="flex",h.classList.remove("min"),Uc(),innerWidth<=640){let I=h.querySelector(".tc");if(I&&!I.querySelector(".mn")){let tt=document.createElement("button");tt.type="button",tt.className="mn",tt.setAttribute("aria-label","Encoger o ampliar la ficha"),tt.textContent=h.classList.contains("peek")?"\u25B4":"\u25BE",tt.onclick=bt=>{bt.stopPropagation(),h.classList.toggle("peek"),tt.textContent=h.classList.contains("peek")?"\u25B4":"\u25BE",h.scrollTop=0},I.appendChild(tt)}}else h.classList.remove("peek");let it=f("#rc");if(innerWidth<=640&&!it.classList.contains("min")&&!he.done&&(he.done=1,f("#rcgrab").click()),innerWidth<=640){let I=f("#inf").getBoundingClientRect().bottom;h.style.top=Math.round(I+8)+"px",h.style.width="calc(100vw - 76px)",h.style.maxHeight=Math.max(140,f("#rc").getBoundingClientRect().top-I-16)+"px"}else if(innerHeight<=500){let I=f("#inf").getBoundingClientRect().bottom;h.style.top=Math.round(I+8)+"px",h.style.width="min(290px, 40vw)",h.style.maxHeight=innerHeight-I-20+"px"}else h.style.top="",h.style.width="300px",h.style.maxHeight="";let ot=h.querySelector("[data-cx]");ot&&(ot.onclick=I=>{I.stopPropagation(),he.done=0,gn=!1,mn=!1,be=null,Ye=-1,rn=null,ie(),he(),ni=0,a()}),Ze(h),h.querySelectorAll("[data-sf]").forEach(I=>I.onclick=tt=>{tt.stopPropagation();let bt=I.dataset.sf;bt?Bt.f.has(bt)?Bt.f.delete(bt):Bt.f.add(bt):Bt.f.clear(),h._h="",he()}),h.querySelectorAll("[data-gt]").forEach(I=>I.onclick=()=>{let[tt,bt]=I.dataset.gt.split("|"),Pt=H.get(bt);Xu({num:tt,tid:D.vp.has(bt)?bt:"",tr:Pt||null})}),h.querySelectorAll("[data-sethome]").forEach(I=>I.onclick=()=>Fc(Ye,I.dataset.sethome));let _t=h.querySelector("[data-follow]");_t&&(_t.onclick=()=>{rn=rn===be?null:be,rn?(s.dist=Math.min(s.dist,22),innerWidth<=640&&(h.classList.add("peek"),h.scrollTop=0,f("#rc").classList.contains("min")||f("#rcgrab").click())):h.classList.remove("peek"),h._h="",he(),a()})}window.__rodCard=he;try{localStorage.getItem("rod_inf")==="mini"&&f("#inf").classList.add("mini")}catch{}f("#inft").onclick=()=>{let x=f("#inf").classList.toggle("mini");try{localStorage.setItem("rod_inf",x?"mini":"")}catch{}(be||Ye>=0||gn||mn)&&(h._h="",he())},f("#ver").onclick=()=>{mn=!0,be=null,Ye=-1,gn=!1,h._h="",he()};let Fe={vacio:"\u{1F7E2}",lleno:"\u{1F7E0}",petado:"\u{1F534}",parado:"\u23F8\uFE0F",calor:"\u{1F975}",abordo:"\u26A0\uFE0F",gente:"\u{1F465}",retraso:"\u23F1\uFE0F",cancel:"\u2716\uFE0F",ascensor:"\u267F",via:"\u26A0\uFE0F"},cn=["vacio","lleno","petado","parado","calor","abordo"],Ht=["gente","retraso","cancel","ascensor","via"],_n={vacio:"Va con sitio",lleno:"Va lleno",petado:"Muy lleno, cuesta subir",parado:"Parado sin moverse",calor:"Sin aire acondicionado",abordo:"Incidencia a bordo",gente:"Mucha gente esperando",retraso:"Anuncian retraso por megafon\xEDa",cancel:"Anuncian tren cancelado",ascensor:"Ascensor o escalera averiados",via:"Incidencia en la estaci\xF3n"},Te=x=>(D.tipos||_n)[x]||x,En=(x,w)=>(D.rep||[]).filter(C=>x&&C.num===String(x)&&!C.sid||w&&C.sid===String(w)&&!C.num||x&&w&&C.num===String(x)&&C.sid===String(w)),qn=x=>{let w=Math.round((Date.now()+(D.repSkew||0)-x.at)/6e4);return w<1?"ahora":`hace ${w} min`},kn=(()=>{try{return new Set(JSON.parse(localStorage.getItem("rod_votes")||"[]"))}catch{return new Set}})();function hi(x,w,C){if(!D.url||!D.repOk)return"";let O=En(x,w),L=x?cn:Ht;return`<div class="crowd"><small>\u{1F465} Lo que dicen los viajeros${O.length?"":" \xB7 nadie ha avisado todav\xEDa"}</small>${O.map(V=>`<p><span>${Fe[V.kind]||"\u2022"} <b>${d(Te(V.kind))}</b> <small>${V.up>1?V.up+" viajeros \xB7 ":""}${qn(V)}</small></span>${kn.has(V.id)?"<small>\u2713</small>":`<button type="button" data-rv="${V.id}:1" title="Lo confirmo">\u{1F44D}</button><button type="button" data-rv="${V.id}:-1" title="Ya no es as\xED">\u{1F44E}</button>`}</p>`).join("")}
      <details><summary>${x?"\xBFVas en este tren? Avisa a los dem\xE1s":"\xBFEst\xE1s en la estaci\xF3n? Avisa a los dem\xE1s"}</summary><div class="ckb">${L.map(V=>`<button type="button" data-rk="${V}" data-rn="${d(x||"")}" data-rs="${d(w||"")}" data-rl="${d(C||"")}">${Fe[V]} ${d(Te(V))}</button>`).join("")}</div><small>An\xF3nimo \xB7 se borra solo en 90 min \xB7 sin texto libre</small></details></div>`}async function Oe(x,w){try{let O=await(await fetch(D.url.replace(/\/+$/,"")+w,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(x)})).json();if(!O.ok){ye(O.err||"No se ha podido enviar");return}if(O.id){kn.add(O.id);try{localStorage.setItem("rod_votes",JSON.stringify([...kn].slice(-300)))}catch{}}ye(w==="/vote"?"Gracias, voto guardado":O.n>1?`Gracias \xB7 ya sois ${O.n} avisando de lo mismo`:"Gracias, aviso enviado");let L=await pt(D.url.replace(/\/+$/,""),"/reports.json");L&&L.items&&(D.rep=L.items),h._h="",he(),Nn(!0)}catch{ye("Sin conexi\xF3n con el puente")}}function Ze(x){x.querySelectorAll("[data-rk]").forEach(w=>w.onclick=C=>{C.stopPropagation(),w.disabled=!0,Oe({kind:w.dataset.rk,num:w.dataset.rn,sid:w.dataset.rs,line:w.dataset.rl},"/report")}),x.querySelectorAll("[data-rv]").forEach(w=>w.onclick=C=>{C.stopPropagation();let[O,L]=w.dataset.rv.split(":");kn.add(+O);try{localStorage.setItem("rod_votes",JSON.stringify([...kn].slice(-300)))}catch{}Oe({id:+O,v:+L},"/vote")})}let ui=0;function ye(x){let w=f("#toast");w||(w=document.createElement("div"),w.id="toast",document.body.appendChild(w)),w.textContent=x,w.className="on",clearTimeout(ui),ui=setTimeout(()=>{w.className=""},2600)}function ii(x){return x.src?`<b class="asrc ${x.src==="Adif"?"adif":""}">${x.src==="Adif"?"Adif \xB7 v\xEDa":d(x.src)}</b>`:""}function wi(x){if(!x.when)return"";let[w,C]=x.when.split("T"),O=Ce(new Date),L=O.ymd.slice(0,4)+"-"+O.ymd.slice(4,6)+"-"+O.ymd.slice(6,8);if(w===L&&C){let V=Math.round(O.min-(+C.slice(0,2)*60+ +C.slice(3,5)));return V<1?"ahora":V<60?`hace ${V} min`:`hoy a las ${C.slice(0,5)}`}return`${w.slice(8,10)}/${w.slice(5,7)}${C?" "+C.slice(0,5):""}`}function Ys(){let x=f("#alr");if(!x)return;let w=D.alerts.filter(C=>[...C.fams].some(O=>zt.has(O))).length;x.hidden=!w,x.textContent=`\u26A0\uFE0F ${w} aviso${w===1?"":"s"}`}f("#alr").onclick=()=>{mn=!1,gn=!0,be=null,Ye=-1,he()},f("#wcopy").onclick=async()=>{let x=f("#wcode").textContent;try{await navigator.clipboard.writeText(x),f("#wcopy").textContent="Copiado \u2713"}catch{let C=document.createRange();C.selectNodeContents(f("#wcode"));let O=getSelection();O.removeAllRanges(),O.addRange(C),f("#wcopy").textContent="Selecciona y copia"}setTimeout(()=>f("#wcopy").textContent="Copiar c\xF3digo",2500)};let Cp=ct.get("71801");function Rp(x,w){let C=S[x].id,O=wn.get(C);!(yt()&&D.url)||O&&(O.loading||Date.now()-O.at<3e4)||(wn.set(C,{...O||{},loading:!0,at:O?O.at:0}),pt(D.url.replace(/\/+$/,""),"/departures.json?stationId="+C).then(L=>{wn.set(C,{at:Date.now(),d:L}),w&&w()}).catch(()=>wn.set(C,{at:Date.now(),err:1})))}let Ip=x=>+x.slice(0,2)*60+ +x.slice(3,5),kr={k:-2,m:null};function Pp(x){let w=t.days.indexOf(At().ymd);if(kr.k!==w){kr.k=w,kr.m=new Map;for(let C of J[w]||[])kr.m.set(String(C.num),C)}return kr.m.get(String(x))||null}function Uu(x,w){let C=At(),O=yt()&&C.live&&!w,L=wn.get(S[x].id),V=[],K=new Map([...D.vp.values()].map(at=>[String((H.get(at.tid)||{}).num||at.num),at]));if(O&&L&&L.d&&Array.isArray(L.d.trains))for(let at of L.d.trains){let ot=(at.departureDateHourSelectedStation||"").slice(11,16);if(!ot)continue;let _t=String(at.commercialNumber||at.technicalNumber||""),I=K.get(_t),tt=I?D.delays.get(I.tid):null,bt=Math.max(typeof tt=="number"?Math.max(0,tt/60):0,I&&I.pre&&I.preDl||0),Pt=Ip(ot);Pt<C.min-720&&(Pt+=1440),V.push({sm:Pt,est:Pt+bt,dl:bt,fam:(at.line||{}).id||"",dest:(at.destinationStation||{}).name||"",destId:(at.destinationStation||{}).id||"",plat:at.platformSelectedStation||"",cancel:!!at.trainCancelled,obs:at.trainObservations||"",live:!!I,num:_t,tid:I?I.tid:"",tr:I&&H.get(I.tid)||Pp(_t),src:"oficial"})}else{let at=t.days.indexOf(C.ymd);if(at<0)return V;let ot=(_t,I)=>{for(let tt of _t){let bt=tt.pat.stops.indexOf(x);if(bt<0||bt===tt.pat.stops.length-1)continue;let Pt=Qt(tt),se=typeof Pt=="number"?Math.max(0,Pt/60):0,ae=tt.t0+tt.pat.t[2*bt+1]-I;if(ae+se<C.min-1||ae>C.min+240)continue;let Ie=tt.pat.stops[tt.pat.stops.length-1];V.push({sm:ae,est:ae+se,dl:se,fam:tt.fam,dest:S[Ie].n,destId:S[Ie].id,plat:"",cancel:Pt==="X",obs:"",live:D.vp.has(tt.tid),num:tt.num,tid:tt.tid,tr:tt,src:"horario"})}};ot(J[at],0),at>0&&ot(J[at-1],1440)}let it=V.filter(at=>at.est>=C.min-.5).sort((at,ot)=>at.est-ot.est);return!it.length&&V.length&&V[0].src==="oficial"&&!w?Uu(x,!0):it}let Fu=(x,w,C,O)=>{let L={key:x,ico:w,name:C,st:[],i:0,walk:10,open:!1};try{let V=JSON.parse(localStorage.getItem("rod_"+x)||"null");V&&Object.assign(L,V)}catch{}return!L.st.length&&O&&(L.st=O),L},Yn=Fu("home","\u{1F3E0}","Casa",["79410","79412"]),Tn=Fu("work","\u{1F4BC}","Trabajo",null),De={key:"near",ico:"\u{1F4CD}",name:"Cerca de ti",st:[],i:0,walk:0,open:!1,dist:{},fix:0,err:""},Vr=[De,Yn,Tn];Yn.open=!1,Tn.open=!1;function Lp(x,w){let C=nt(x,w),O=nt(x,w+.009);return 1/Math.hypot(O[0]-C[0],O[1]-C[1])}function Lc(x){if(!navigator.geolocation){De.err="Este navegador no da la ubicaci\xF3n",Nn(!0);return}navigator.geolocation.getCurrentPosition(w=>{let{longitude:C,latitude:O}=w.coords,L=nt(C,O),V=Lp(C,O),K=S.map((_t,I)=>[I,Math.hypot(_t.w[0]-L[0],_t.w[1]-L[1])*V]).filter(([_t])=>S[_t].fams.size).sort((_t,I)=>_t[1]-I[1]),it=K.filter(([,_t],I)=>I===0||_t<Math.max(2.5,K[0][1]*1.6)).slice(0,3),at=De.st[0]!==S[it[0][0]].id;De.st=it.map(([_t])=>S[_t].id),De.dist=Object.fromEntries(it.map(([_t,I])=>[S[_t].id,I])),De.fix=Date.now(),De.err="",at&&(De.i=0);let ot=[Yn,Tn].find(_t=>_t.st.includes(De.st[0])&&De.dist[De.st[0]]<1.5);x&&(ot?ot.open=!0:De.open=!0),Nn(!0)},w=>{De.err=w.code===1?"Sin permiso de ubicaci\xF3n":"No se ha podido obtener la ubicaci\xF3n",x&&(Yn.open=!!Yn.st.length),Nn(!0)},{enableHighAccuracy:!1,maximumAge:6e4,timeout:12e3})}let Dp=x=>Math.max(1,Math.round(x*1.3/.08));setTimeout(()=>Lc(!0),400),setInterval(()=>{document.hidden||Lc(!1)},12e4);let Hr=x=>{try{localStorage.setItem("rod_"+x.key,JSON.stringify({st:x.st,i:x.i,walk:x.walk,open:x.open}))}catch{}},Ou=x=>x.st.length?ct.get(x.st[x.i]||x.st[0]):null;function Np(x,w,C,O){if(O&&w.tr){let K=w.tr.pat.stops,it=K.indexOf(x);if(it>=0&&K.slice(it+1).some(at=>O.has(at)))return"to"}if(O&&w.tr)return"out";let L=ct.get(w.destId)??S.findIndex(K=>K.n===w.dest);if(L<0||L==null||C==null)return"otros";let V=K=>Math.hypot(S[K].w[0]-S[C].w[0],S[K].w[1]-S[C].w[1]);return V(L)<V(x)?"to":"out"}let Dc=x=>x<1?"ahora":x<60?Math.round(x)+" min":Math.floor(x/60)+" h "+String(Math.round(x%60)).padStart(2,"0"),Bu=0,Up=/sin servicio|sense servei|suspend|interromp|interrump|no circula|no se puede garantizar|no es pot garantir/i;function Fp(x,w,C){let O=Ou(x);if(x===De){if(O==null)return`<div class="hplace"><button type="button" class="hhead hnew" data-hloc><span class="hico">\u{1F4CD}</span><span class="htit"><b>Cerca de ti</b><small>${De.err?d(De.err)+" \xB7 toca para reintentar":"Buscando tu ubicaci\xF3n\u2026"}</small></span><span class="hchev">\u27F3</span></button></div>`;if([Yn,Tn].find(ge=>ge.st.includes(De.st[0])&&De.dist[De.st[0]]<1.5))return"";x.walk=Dp(De.dist[x.st[x.i]]||0)}if(O==null){let Nt=De.st.length?ct.get(De.st[0]):null,ge=x===Tn?Yn:Tn,nn=Nt!=null&&!ge.st.includes(De.st[0]);return`<div class="hplace"><div class="hhead hnew"><span class="hico">${x.ico}</span><span class="htit"><b>${x.name}</b><small>${nn?`Est\xE1s en <b>${d(S[Nt].n)}</b>`:"Elige tu estaci\xF3n"}</small></span>${nn?`<button type="button" class="hpick" data-hnear="${x.key}">Usar esta</button>`:""}<button type="button" class="hpick alt" data-hset="${x.key}">${nn?"Otra\u2026":"Elegir"}</button></div></div>`}Rp(O,()=>Nn(!0));let L=x===De?null:x===Yn?Tn:Yn,V=L?Ou(L):null,K=V!=null&&V!==O?V:Cp,it=V!=null&&V!==O?L===Tn?"el trabajo":"casa":"Barcelona",at=S[O].fams,ot=new Set([...at].filter(Nt=>zt.has(Nt))),_t=ot.size<at.size,I=Uu(O).filter(Nt=>!A[Nt.fam]||zt.has(Nt.fam)),tt=x.walk,bt=D.alerts.filter(Nt=>[...Nt.fams].some(ge=>ot.has(ge))||Nt.stops&&Nt.stops.has(O)),Pt=bt.some(Nt=>Up.test(Nt.txt)),se={to:[],out:[],otros:[],all:I},ae=it!=="Barcelona"?new Set(L.st.map(Nt=>ct.get(Nt)).filter(Nt=>Nt!=null)):null;I.forEach(Nt=>se[Np(O,Nt,K,ae)].push(Nt));let Ie=Nt=>{if(Nt==="all")return"Pr\xF3ximas salidas \xB7 todas las direcciones";let ge=ri=>(ri.find(ai=>ai.fam)||{}).fam;if(Nt==="to")return"Hacia "+fe(it==="Barcelona"?"Barcelona":S[K].n,ge(se.to)||[...ot][0])+(it!=="Barcelona"?` <small>${it}</small>`:"");let nn=[];for(let ri of se[Nt])nn.some(ai=>ai[0]===ri.dest)||nn.push([ri.dest,ri.fam]);return nn.length?"Hacia "+nn.slice(0,2).map(([ri,ai])=>fe(ri,ai)).join(" "):"Otros"},jt=Nt=>{let ge=se[Nt].find(ai=>!ai.cancel&&ai.est-w.min>=tt);if(!ge){let ai=se[Nt].find(Vp=>!Vp.cancel);return ai?{cls:"v-no",big:"No llegas",small:`El pr\xF3ximo (${Gt(ai.est)}) sale en ${Dc(ai.est-w.min)}: no da tiempo a pie`}:{cls:"v-no",big:"Sin trenes",small:"No hay salidas pr\xF3ximas en este sentido"}}let nn=ge.est-w.min-tt;return{cls:nn<1.5?"v-bad":nn<5?"v-warn":"v-ok",big:nn<1.5?"\xA1Sal ya!":"Sal en "+Dc(nn),small:`${Pt?"\u26A0\uFE0F servicio afectado \xB7 ":""}${Gt(ge.est)} \xB7 ${ge.fam} a ${ge.dest}${ge.plat?" \xB7 v\xEDa "+ge.plat:""}${ge.dl>=1?` \xB7 +${Math.round(ge.dl)} min`:""}`,x:ge}},$t=se.out.length?"out":"otros",me=jt("to"),ue=jt($t),Ue=yt()&&w.live,hn=ot.size===1,je=Nt=>{let ge=Nt.est-w.min;return Nt.cancel?"cx":ge<tt?"u-miss":ge<tt+1.5?"u-now":ge<tt+5?"u-soon":"u-ok"},We=Nt=>{let ge=!Nt.cancel&&Nt.est-w.min<tt,nn=En(Nt.num,"");return`<li class="hr ${je(Nt)} go" style="--lc:${A[Nt.fam]||"#6b7385"}" data-dk="${C.push(Nt)-1}" title="${Nt.cancel?"Cancelado":ge?"No llegas a pie":"Ver este tren en el mapa"}"><span class="hrt"><b>${Nt.cancel?"\u2715":ge?Gt(Nt.est):Dc(Nt.est-w.min)}</b><small>${Nt.cancel?"cancelado":ge?"no llegas":Gt(Nt.est)}</small></span><span class="hrd">${Nt.live?'<i class="lvd" title="circulando">\u25CF</i>':'<i class="lvd ph">\u25CF</i>'}${fe((hn?"":Nt.fam+" \xB7 ")+Nt.dest,Nt.fam)}${nn.length?`<i class="cr" title="${d(nn.map(ri=>Te(ri.kind)).join(" \xB7 "))}">${nn.slice(0,2).map(ri=>Fe[ri.kind]).join("")}</i>`:""}${Nt.obs?`<small class="hro">${d(Nt.obs)}</small>`:""}</span><span class="hrm">${!Nt.cancel&&Nt.dl>=1?`<em class="dl ${Nt.dl>=5?"d-hi":"d-lo"}">+${Math.round(Nt.dl)}</em>`:""}${Nt.plat?`<i class="via">v\xEDa ${d(Nt.plat)}</i>`:""}</span></li>`},Ms=(Nt,ge)=>`<div class="hcol"><div class="hdir">${Ie(Nt)}</div><div class="hv ${ge.cls}${ge.x?" go":""}"${ge.x?` data-dk="${C.push(ge.x)-1}"`:""}><b>${ge.big}</b><small>${d(ge.small)}</small></div><ol>${se[Nt].slice(0,Nt==="all"?7:4).map(We).join("")||"<li><span>\u2014</span></li>"}</ol></div>`;if(x===De){let Nt=jt("all");var Un=Nt.x?`${Nt.big} \xB7 <b>${Gt(Nt.x.est)}</b> ${d(Nt.x.fam)} a ${d(Nt.x.dest)}${Nt.x.plat?" \xB7 v\xEDa "+d(Nt.x.plat):""}`:Nt.big}let Wr=x===De?Un:me.x?`${me.big} \xB7 <b>${Gt(me.x.est)}</b> hacia ${d(it)}${me.x.plat?" \xB7 v\xEDa "+d(me.x.plat):""}`:"Sin trenes hacia "+d(it);return`<div class="hplace ${x.open?"open":""}"><button type="button" class="hhead" data-ht="${x.key}"><span class="hico">${x.ico}</span><span class="htit"><b>${d(S[O].n)}</b><small class="c${Pt?"bad":me.cls.slice(2)}">${Wr}</small></span><span class="hchev">\u25BE</span></button>`+(x.open?`
      <div class="hbody">
        ${x.st.length>1?`<div class="hst">${x.st.map((Nt,ge)=>{let nn=ct.get(Nt);return nn==null?"":`<button type="button" data-hs="${x.key}:${ge}" class="${ge===x.i?"on":""}">${d(S[nn].n)}</button>`}).join("")}</div>`:""}
        ${x===De?`<div class="hwalk">\u{1F4CD} A ${(()=>{let Nt=De.dist[x.st[x.i]]||0;return Nt<1?Math.round(Nt*100)*10+" m":Nt.toFixed(1).replace(".",",")+" km"})()} \xB7 unos <b>${x.walk} min</b> a pie</div>`:""}
        <div class="hwalk"${x===De?" hidden":""}>\u{1F6B6} Tardo <button type="button" data-hw="${x.key}:-1">\u2212</button><b>${tt} min</b><button type="button" data-hw="${x.key}:1">+</button> a pie hasta la estaci\xF3n</div>
        ${_t?`<div class="hflt">Solo ${[...ot].sort(N).map(Ee).join(" ")||"ninguna l\xEDnea"} \xB7 filtro de l\xEDneas activo</div>`:""}
        ${bt.length?`<div class="hal ${Pt?"bad":""}">\u26A0\uFE0F ${ii(bt[0])} ${d(bt[0].txt)} <small>${wi(bt[0])}</small>${bt.length>1?` <a data-hal>+${bt.length-1} avisos</a>`:""}</div>`:`<div class="hok">\u2713 Sin avisos para ${[...ot].sort(N).join(", ")}</div>`}
        ${(()=>{let Nt=x.st.flatMap(ge=>En("",ge));return Nt.length?`<div class="hcr">${Nt.slice(0,3).map(ge=>`${Fe[ge.kind]} <b>${d(Te(ge.kind))}</b> <small>${ge.up>1?ge.up+" viajeros \xB7 ":""}${qn(ge)}</small>`).join("<br>")}</div>`:""})()}
        ${x===De?`<div class="hcols one">${Ms("all",jt("all"))}</div>`:`<div class="hcols">${Ms("to",me)}${Ms($t,ue)}</div>`}
        <div class="hsrc"><span class="hsrcT" title="${Ue?wn.get(S[O].id)?.d?"Salidas oficiales de Rodalies en directo":"Horario + retrasos mientras cargan las salidas oficiales":"Previsi\xF3n seg\xFAn horario (sin tiempo real)"} \xB7 \u25CF = tren circulando">${Ue?wn.get(S[O].id)?.d?"\u25CF oficial en directo":"\u25CF horario + retrasos":"seg\xFAn horario"}</span><a data-hmap="${O}">\u{1F5FA}\uFE0F mapa</a>${x===De?"<a data-hloc>\u{1F4CD} actualizar</a>":`<a data-hset="${x.key}">\u270E cambiar</a>`}${x===Tn?'<a data-hdel="work">\u2715 quitar</a>':""}</div>
      </div>`:"")+"</div>"}let Ei={on:(()=>{try{return localStorage.getItem("rod_push")==="1"}catch{return!1}})(),busy:!1},zu=/iPhone|iPad|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,ku=()=>matchMedia("(display-mode: standalone)").matches||navigator.standalone===!0,Gr=()=>{let x=[...Yn.st,...Tn.st],w=new Set;return x.forEach(C=>{let O=ct.get(C);O!=null&&S[O].fams.forEach(L=>w.add(L))}),{stations:x,lines:[...w].sort(N)}},Op=x=>Uint8Array.from(atob(x.replace(/-/g,"+").replace(/_/g,"/")+"===".slice((x.length+3)%4)),w=>w.charCodeAt(0));async function Vu(){return!("serviceWorker"in navigator)||!("PushManager"in window)||location.protocol!=="https:"?null:await navigator.serviceWorker.getRegistration()||navigator.serviceWorker.register("./sw.js")}async function Hu(x){let C=await(await fetch(D.url.replace(/\/+$/,"")+"/push/subscribe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sub:x.toJSON(),...Gr()})})).json();if(!C.ok)throw new Error(C.err||"error")}let Dn={on:(()=>{try{return localStorage.getItem("rod_ln")==="1"}catch{return!1}})(),seen:null};function Bp(){let{lines:x,stations:w}=Gr(),C=new Set(x),O=new Set(w.map(K=>ct.get(K))),L=D.alerts.filter(K=>[...K.fams].some(it=>C.has(it))||[...K.stops||[]].some(it=>O.has(it)));if(!Dn.seen){try{Dn.seen=new Set(JSON.parse(localStorage.getItem("rod_lnseen")||"[]"))}catch{Dn.seen=new Set}if(!Dn.seen.size){L.forEach(K=>Dn.seen.add(K.id+"|"+K.txt.length)),Gu();return}}let V=L.filter(K=>!Dn.seen.has(K.id+"|"+K.txt.length));if(V.length&&(V.forEach(K=>Dn.seen.add(K.id+"|"+K.txt.length)),Gu(),!(!Dn.on||!("Notification"in window)||Notification.permission!=="granted")))for(let K of V.slice(0,3)){let it=(K.src==="Adif"?"Adif \xB7 v\xEDa":"Rodalies")+(K.fams.size?" \xB7 "+[...K.fams].sort(N).slice(0,4).join(" "):""),at={body:K.txt.slice(0,240),icon:"icons/icon-192.png",tag:"rod-"+K.id};(navigator.serviceWorker&&navigator.serviceWorker.getRegistration?navigator.serviceWorker.getRegistration():Promise.resolve(null)).then(ot=>ot?ot.showNotification(it,at):new Notification(it,at)).catch(()=>{try{new Notification(it,at)}catch{}})}}function Gu(){try{localStorage.setItem("rod_lnseen",JSON.stringify([...Dn.seen].slice(-400)))}catch{}}async function zp(){if(Dn.on)Dn.on=!1,ye("Avisos desactivados");else{if(!("Notification"in window)){ye(zu&&!ku()?"En iPhone: Compartir \u2192 A\xF1adir a pantalla de inicio y activa los avisos desde la app":"Este navegador no permite avisos");return}if(await Notification.requestPermission()!=="granted"){ye("Sin permiso para avisos: act\xEDvalo en los ajustes del navegador");return}Dn.on=!0,ye("Listo: te aviso de incidencias en "+Gr().lines.join(", ")+" mientras la app est\xE9 abierta")}try{localStorage.setItem("rod_ln",Dn.on?"1":"")}catch{}Nn(!0)}async function kp(){if(!D.repOk)return zp();if(!Ei.busy){Ei.busy=!0;try{let x=await Vu();if(!x){ye(zu&&!ku()?"En iPhone: Compartir \u2192 A\xF1adir a pantalla de inicio, abre la app desde ah\xED y activa los avisos":"Este navegador no permite avisos (hace falta abrir la web publicada, no el archivo)");return}if(await navigator.serviceWorker.ready,Ei.on){let w=await x.pushManager.getSubscription();w&&(fetch(D.url.replace(/\/+$/,"")+"/push/unsubscribe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({endpoint:w.endpoint})}).catch(()=>{}),await w.unsubscribe().catch(()=>{})),Ei.on=!1,ye("Avisos desactivados")}else{if(!D.url){ye("Hace falta el puente en directo");return}if(await Notification.requestPermission()!=="granted"){ye("Sin permiso para avisos: act\xEDvalo en los ajustes del navegador");return}let C=(await pt(D.url.replace(/\/+$/,""),"/push/key")).key,O=await x.pushManager.getSubscription()||await x.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Op(C)});await Hu(O),Ei.on=!0,ye("Listo: te avisaremos de incidencias en "+Gr().lines.join(", "))}try{localStorage.setItem("rod_push",Ei.on?"1":"")}catch{}}catch(x){ye("No se han podido activar los avisos: "+(x.message||x))}finally{Ei.busy=!1,Nn(!0)}}}async function Wu(){if(Ei.on)try{let x=await Vu(),w=x&&await x.pushManager.getSubscription();w&&await Hu(w)}catch{}}let Nc=!1,$u="";function Uc(){let x=be?"t"+(be.tid||be.vtid):Ye>=0?"s"+Ye:gn?"a":mn?"n":"";x!==$u&&(Nc=!1,$u=x);let w=innerWidth<=640&&!!x&&!Nc,C=f("#inf");C.classList.contains("compact")!==w&&(C.classList.toggle("compact",w),requestAnimationFrame(()=>{if(h.style.display!=="none"){let O=C.getBoundingClientRect().bottom;h.style.top=Math.round(O+8)+"px",h.style.maxHeight=Math.max(140,f("#rc").getBoundingClientRect().top-O-16)+"px"}}))}function Nn(x){let w=f("#home");if(!w)return;let C=performance.now();if(!x&&C-Bu<4e3)return;Bu=C;let O=At(),L=[],V=Gr(),K=Vr.map(ot=>Fp(ot,O,L)).join("")+(Vr.some(ot=>ot.open)&&V.lines.length,"");if(w.className=Vr.some(ot=>ot.open)?"open":"",w._h===K)return;w._h=K,w.innerHTML=K;{let ot=[...w.children].find(_t=>_t.classList.contains("hplace")&&!_t.querySelector(".hnew"));ot&&ot.classList.add("lead")}let it=ot=>ot==="work"?Tn:ot==="near"?De:Yn;w.querySelectorAll("[data-hloc]").forEach(ot=>ot.onclick=()=>{De.err="",Lc(!0)}),w.querySelectorAll("[data-ht]").forEach(ot=>ot.onclick=()=>{if(f("#inf").classList.contains("compact")){Nc=!0,Uc();return}let _t=it(ot.dataset.ht);_t.open=!_t.open,Hr(_t),Nn(!0),(be||Ye>=0||gn||mn)&&(h._h="",he())}),w.querySelectorAll("[data-hs]").forEach(ot=>ot.onclick=()=>{let[_t,I]=ot.dataset.hs.split(":"),tt=it(_t);tt.i=+I,Hr(tt),Nn(!0)}),w.querySelectorAll("[data-hw]").forEach(ot=>ot.onclick=()=>{let[_t,I]=ot.dataset.hw.split(":"),tt=it(_t);tt.walk=m(tt.walk+ +I,0,60),Hr(tt),Nn(!0)}),w.querySelectorAll("[data-hmap]").forEach(ot=>ot.onclick=()=>{let _t=+ot.dataset.hmap;mn=gn=!1,be=null,Ye=_t,Zs(),ie(),Object.assign(s,{tx:S[_t].w[0],ty:S[_t].w[1],dist:18,tilt:Math.max(s.tilt,.5)}),h._h="",he(),a()}),w.querySelectorAll("[data-hset]").forEach(ot=>ot.onclick=()=>{Ss=ot.dataset.hset,p.value="",p.placeholder=Ss==="work"?"Escribe la estaci\xF3n del trabajo\u2026":"Escribe la estaci\xF3n de casa\u2026",p.focus()}),w.querySelectorAll("[data-hnear]").forEach(ot=>ot.onclick=()=>{let _t=ct.get(De.st[0]);_t!=null&&Fc(_t,ot.dataset.hnear)}),w.querySelectorAll("[data-hdel]").forEach(ot=>ot.onclick=()=>{Tn.st=[],Tn.open=!1,Hr(Tn),Nn(!0),Wu()}),w.querySelectorAll("[data-dk]").forEach(ot=>ot.onclick=()=>Xu(L[+ot.dataset.dk])),w.querySelectorAll("[data-hal]").forEach(ot=>ot.onclick=()=>f("#alr").click());let at=f("#bell");at||(at=document.createElement("button"),at.type="button",at.id="bell",at.onclick=kp,f("#inft").before(at));{let ot=D.repOk?Ei.on:Dn.on;at.hidden=!V.lines.length,at.className=ot?"on":"",at.textContent=ot?"\u{1F514}":"\u{1F515}",at.title=(ot?"Avisos activados":"Activar avisos")+" de "+V.lines.join(", ")+(D.repOk?"":" (mientras la app est\xE9 abierta)")}Ze(w)}function Xu(x){if(!x)return;let w=t.days.indexOf(At().ymd),C=Xn.find(V=>V.real?x.tid&&V.v.tid===x.tid||x.num&&String(V.tr?V.tr.num:V.v.num)===String(x.num):x.tr&&V.tr===x.tr||x.num&&V.tr&&String(V.tr.num)===String(x.num)),O=x.tr||C&&C.tr||(J[w]||[]).find(V=>String(V.num)===String(x.num));if(mn=gn=!1,Ye=-1,Zs(),be=C?C.tr||{vtid:C.v.tid}:O||null,!be)return;rn=C&&C.tr?C.tr:null,rn&&innerWidth<=640&&(h.classList.add("peek"),f("#rc").classList.contains("min")||f("#rcgrab").click());let L=C?C.p.w:null;L&&Object.assign(s,{tx:L[0],ty:L[1],dist:Math.min(s.dist,22)}),ie(),h._h="",he(),ni=0,a()}let Ss=!1;p.addEventListener("blur",()=>setTimeout(()=>{Ss&&!p.value.trim()&&(Ss=!1,p.placeholder="Buscar estaci\xF3n o municipio\u2026")},600));function Zs(){Vr.some(x=>x.open)&&(Vr.forEach(x=>{x.open=!1}),Nn(!0))}function Fc(x,w){let C=w==="work"?Tn:Yn,O=S[x].id,L=S.filter(V=>V.fams.size&&V!==S[x]&&Math.hypot(V.w[0]-S[x].w[0],V.w[1]-S[x].w[1])<.6).map(V=>V.id);C.st=[O,...L].slice(0,3),C.i=0,C.open=!0,Hr(C),Nn(!0),Wu()}let Oc=f("#lines");Oc.innerHTML='<button type="button" class="all" data-f="*">Todas</button>'+v.map(x=>`<button type="button" style="--c:${A[x]}" data-f="${x}">${x}</button>`).join("");function qu(){try{Nn(!0)}catch{}Oc.querySelectorAll("[data-f]").forEach(x=>{x.dataset.f!=="*"&&x.classList.toggle("off",!zt.has(x.dataset.f))})}Oc.querySelectorAll("[data-f]").forEach(x=>x.onclick=()=>{let w=x.dataset.f;w==="*"?v.forEach(C=>zt.add(C)):zt.size===v.length?(zt.clear(),zt.add(w)):zt.has(w)?(zt.delete(w),zt.size||v.forEach(C=>zt.add(C))):zt.add(w),qu(),wt(),ie(),Ys(),ni=0,a()});let Bc=[...document.querySelectorAll("[data-sp]")],si=0;function Yu(x){let w=At();x&&(j===x||si===x)?j?(Rt=w.min,ht=w.min,j=0,si=x):(ee=performance.now(),j=x,si=0):x===0?(j=0,ht=null,si=0):(Rt=w.min,ee=performance.now(),ht=w.min,j=x,si=0),Bc.forEach(C=>{let O=+C.dataset.sp;C.classList.toggle("on",O===(j||si)||!j&&!si&&ht==null&&O===0),C.classList.toggle("pz",!!si&&O===si),C.textContent=O===0?"Ahora":si===O?"\u25B6 \xD7"+O:j===O?"\u23F8 \xD7"+O:"\xD7"+O}),ni=0,a()}Bc.forEach(x=>x.onclick=()=>Yu(+x.dataset.sp)),f("#tsl").oninput=x=>{let w=+x.target.value;Rt=w,ht=w,ee=performance.now(),j===0&&!si&&Bc.forEach(C=>C.classList.remove("on")),ni=0,a()},setInterval(()=>{ht!=null&&j&&Rt+(performance.now()-ee)/6e4*j>1560&&(Rt=240,ee=performance.now())},1e3),window.__rodSearch=x=>{let w=g(x.trim());if(!w){u.style.display="none",u._pick=null;return}let C=[],O=[];S.forEach((it,at)=>{if(!it.fams.size)return;let ot=g(it.n);ot.startsWith(w)||ot.includes(" "+w)||ot.includes("-"+w)?C.push(at):ot.includes(w)&&O.push(at)});let L=C.concat(O).slice(0,7),V=b.filter(it=>g(it.name).startsWith(w)).sort((it,at)=>at.pop-it.pop).slice(0,3),K=L.map(it=>({h:`\u{1F689} ${d(S[it].n)}<em>${[...S[it].fams].sort(N).slice(0,3).map(at=>`<em class="ls" style="background:${A[at]}">${at}</em>`).join(" ")}</em>`,go:()=>{if(Ss){let at=Ss;Ss=!1,p.placeholder="Buscar estaci\xF3n o municipio\u2026",Fc(it,at);return}mn=!1,gn=!1,Ye=it,be=null,rn=null,Zs(),ie(),Object.assign(s,{tx:S[it].w[0],ty:S[it].w[1],dist:Math.min(s.dist,20),tilt:Math.max(s.tilt,.5)}),he(),a()}})).concat(V.map(it=>({h:`${d(it.name)}<em>municipio</em>`,go:()=>{Object.assign(s,{tx:it.cx,ty:it.cy,dist:m(it.size*3+14,14,60)}),a()}})));u.innerHTML=K.map((it,at)=>`<li data-i="${at}">${it.h}</li>`).join("")||'<li class="no">Sin resultados</li>',u.style.display="block",u._pick=it=>{K[it]&&(K[it].go(),u.style.display="none",p.value="",p.blur())},u.querySelectorAll("li[data-i]").forEach(it=>it.onclick=()=>u._pick(+it.dataset.i))},qu(),ie();try{let x=new URLSearchParams(location.search).get("st");if(x){let w=g(x),C=-1,O=0;S.forEach((L,V)=>{if(!L.fams.size)return;let K=g(L.n),it=K===w?3:K.startsWith(w)||w.startsWith(K)?2:K.includes(w)||w.includes(K)?1:0;it>O&&(O=it,C=V)}),C>=0&&setTimeout(()=>{Ye=C,ie(),Object.assign(s,{tx:S[C].w[0],ty:S[C].w[1],dist:18,tilt:.5}),he(),a()},300)}}catch{}window.__rod={get follow(){return rn},get selTrip(){return be},ST:S,TR:G,FAM:v,act:()=>Xn,setSpeed:Yu,RT:D,pollRT:xt,nowState:At,posAt:ys,activeTrips:Fr,select:x=>{be=x,he()}}}var Ur=window.__DATA__;var Ae=i=>document.querySelector(i),ts=i=>String(i).replace(/\B(?=(\d{3})+(?!\d))/g,"."),Ln=(i,t,e)=>Math.min(e,Math.max(t,i)),yu=i=>i.normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase(),zn=Ae("#c"),Ja=new fc({canvas:zn,antialias:!0});Ja.setPixelRatio(Math.min(devicePixelRatio||1,2));var xs=new oa;xs.background=new oe(15659509);var Cc=35,Hi=new Rn(Cc,1,2,1500);xs.add(new Aa(16777215,9080992,1));var hp=new Ra(16777215,.9);hp.position.set(-40,-70,90);xs.add(hp);var ki=100/Ur.w,Xa=Ur.w/2,qa=Ur.h/2,Qe=[],Su=new xi;xs.add(Su);var up=new Is({color:16777215,transparent:!0,opacity:.55});for(let i of Ur.m){let t=new xi,e=[],n=[],s=1e9,r=-1e9,a=1e9,o=-1e9;for(let m of i.g){let g=m.map(f=>{let d=[];for(let R=0;R<f.length;R+=2)d.push(new It((f[R]-Xa)*ki,(f[R+1]-qa)*ki));return d.length>1&&d[0].equals(d[d.length-1])&&d.pop(),d}).filter(f=>f.length>=3);if(!g.length)continue;let b=new Mr(g[0]);for(let f=1;f<g.length;f++)b.holes.push(new Ls(g[f]));e.push(b);for(let f of g[0])s=Math.min(s,f.x),r=Math.max(r,f.x),a=Math.min(a,f.y),o=Math.max(o,f.y);for(let f of g)n.push(new ua(new tn().setFromPoints(f.map(d=>new U(d.x,d.y,0))),up))}if(!e.length)continue;let l;try{l=new Sa(e,{depth:1,bevelEnabled:!1})}catch{continue}let c=new wa({color:13421772}),h=new In(l,c);t.add(h);let p=new xi;n.forEach(m=>p.add(m)),p.position.z=.04,Su.add(p),t.scale.z=.01,Su.add(t);let u={og:p,rings:i.g,inF:!0,sel:null,code:i.c,name:i.n,pop:i.p,area:i.a,pr:i.pr,rankP:0,rankD:0,group:t,mesh:h,mat:c,cx:(s+r)/2,cy:(a+o)/2,size:Math.max(r-s,o-a),z:.01,zt:.01,rank:0};h.userData.m=u,Qe.push(u)}var Zb=Qe.map(i=>i.mesh),ip=i=>{let t=0;for(let e=0;e<i.length;e+=2){let n=(e+2)%i.length;t+=i[e]*i[n+1]-i[n]*i[e+1]}return Math.abs(t)/2},dp=0,fp=0;for(let i of Qe){for(let t of i.rings)dp+=ip(t[0])-t.slice(1).reduce((e,n)=>e+ip(n),0);fp+=i.area}var sy=Math.sqrt(fp/dp),yc={"08":"Barcelona",17:"Girona",25:"Lleida",43:"Tarragona"},pp={"08":"provincia de Barcelona",17:"provincia de Girona",25:"provincia de Lleida",43:"provincia de Tarragona"},Cu="sqrt",Ru="pop",xu=0,Mu=0,Dr=1,$a=1,ry={sqrt:i=>Math.sqrt(i),lin:i=>i,log:i=>Math.log10(Math.max(i,1))},bu=i=>Ru==="pop"?i.pop:i.pop/i.area,vc=["#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#b10026","#5c0020"].map(i=>new oe(i));function ay(i){i=Ln(i,0,1)*(vc.length-1);let t=Math.min(Math.floor(i),vc.length-2);return vc[t].clone().lerp(vc[t+1],i-t)}var Nr=i=>i>=100?ts(Math.round(i)):i.toLocaleString("es-ES",{maximumFractionDigits:1});function oy(){Mu=0;for(let i of Qe)Mu+=i.pop;[...Qe].sort((i,t)=>t.pop-i.pop).forEach((i,t)=>i.rankP=t+1),[...Qe].sort((i,t)=>t.pop/t.area-i.pop/i.area).forEach((i,t)=>i.rankD=t+1),mp()}var ly=new oe("#d3d8e2"),cy=new oe("#eceff3");function Iu(i){i.mat.color.copy(i.base).lerp(cy,.86),i.inF||i.mat.color.lerp(ly,.8)}function mp(){Dr=1,$a=1e12;for(let e of Qe){let n=bu(e);Dr=Math.max(Dr,n),$a=Math.min($a,n)}let i=Math.log10(Math.max($a,.01)),t=Math.log10(Dr);for(let e of Qe)e.base=ay((Math.log10(Math.max(bu(e),.01))-i)/(t-i)),Iu(e);Ae("#lmin").textContent=Nr($a),Ae("#lmax").textContent=Nr(Dr),Ae("#lname").textContent=Ru==="pop"?"habitantes":"hab./km\xB2",Rc()}function Rc(){let i=ry[Cu],t=i(Dr),e=24*xu;for(let n of Qe)n.zt=xu<=.001?.01:Math.max(.12*Math.min(1,xu),e*i(bu(n))/t)*(n.inF?1:.1);Mn()}var sp=Object.fromEntries(Qe.map(i=>[i.code,i])),Sc=[],gp=[];for(let i of Ur.bd){let t=sp[i.a],e=sp[i.b];if(!(!t||!e))for(let n=0;n+3<i.p.length;n+=2)gp.push((i.p[n]-Xa)*ki,(i.p[n+1]-qa)*ki,0,(i.p[n+2]-Xa)*ki,(i.p[n+3]-qa)*ki,0),Sc.push(t,e)}var wc=new ji;wc.setPositions(gp);var _p=new Fi({color:2764864,linewidth:4.4,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3}),xp=new Fi({color:16777215,linewidth:2.4,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-6});[_p,xp].forEach((i,t)=>{let e=new ks(wc,i);e.frustumCulled=!1,e.renderOrder=10+t,xs.add(e)});function hy(){let i=wc.attributes.instanceStart.data.array;for(let t=0;t<Sc.length;t+=2){let e=Math.max(Sc[t].z,Sc[t+1].z)+.12,n=t/2*6;i[n+2]=e,i[n+5]=e}wc.attributes.instanceStart.data.needsUpdate=!0}var Ec={};for(let i of Object.keys(yc)){let t=Qe.filter(h=>h.pr===i),e=0,n=0,s=0,r=1e9,a=-1e9,o=1e9,l=-1e9;for(let h of t)e+=h.area,n+=h.cx*h.area,s+=h.cy*h.area,r=Math.min(r,h.cx),a=Math.max(a,h.cx),o=Math.min(o,h.cy),l=Math.max(l,h.cy);let c=document.createElement("div");c.className="plab",c.textContent=yc[i],c.title="Ver solo "+pp[i],c.onclick=()=>Sy("pr:"+i),document.body.appendChild(c),Ec[i]={el:c,p:new U(n/e,s/e,0),cx:(r+a)/2,cy:(o+l)/2,ext:Math.max(a-r,l-o),ext2:[a-r,l-o],area:e,name:yc[i]}}var vu=new U;function uy(){for(let i in Ec){let t=Ec[i];vu.copy(t.p).project(Hi),t.el.style.transform=`translate(-50%,-50%) translate(${(vu.x*.5+.5)*innerWidth}px,${(-vu.y*.5+.5)*innerHeight}px)`}}var en={tilt:0,yaw:0,dist:150,tx:0,ty:0},de={...en};function dy(){let i=innerWidth/innerHeight,t=Math.tan(Cc*Math.PI/360);return Math.max(Ur.h*ki*1.1,100*1.1/i)/(2*t)}var fy=document.getElementById("northr");document.getElementById("north").addEventListener("click",()=>{de.yaw=Math.round(de.yaw/(2*Math.PI))*2*Math.PI,de.tilt=0,Mn()});function Pu(){Object.assign(de,{tilt:0,yaw:0,dist:dy(),tx:0,ty:0}),Mn()}function py(){let{tilt:i,yaw:t,dist:e,tx:n,ty:s}=en;Hi.position.set(n+e*Math.sin(i)*Math.sin(t),s-e*Math.sin(i)*Math.cos(t),e*Math.cos(i)),Hi.up.set(-Math.cos(i)*Math.sin(t),Math.cos(i)*Math.cos(t),Math.sin(i)),Hi.lookAt(n,s,0)}var Mc=!0,rp=performance.now(),Ya=new Map;function Mn(){Mc=!0}function vp(i){requestAnimationFrame(vp);let t=Ln((i-rp)/1e3,0,.05);rp=i;let e=1-Math.exp(-t*10),n=!1;for(let s of Object.keys(en)){let r=de[s]-en[s];Math.abs(r)>1e-4*(s==="dist"?10:1)?(en[s]+=r*e,n=!0):en[s]=de[s]}for(let s of Qe){let r=s.zt-s.z;Math.abs(r)>.002?(s.z+=r*Math.min(1,e*.8),s.group.scale.z=s.z,s.og.position.z=s.z+.04,n=!0):s.z!==s.zt&&(s.z=s.zt,s.group.scale.z=s.z,s.og.position.z=s.z+.04)}for(let[s,r]of Ya){let a=(i-r)/1800;a>=1?(Ya.delete(s),$s(s)):$s(s,.5*Math.sin(Math.PI*a)),n=!0}if(window.__rodTick&&window.__rodTick(i)&&(Mc=!0),n||Mc){fy.style.transform=`rotate(${en.yaw}rad) scaleY(${(.55+.45*Math.cos(en.tilt)).toFixed(3)})`;{let s=Math.abs(Math.sin(de.yaw/2))<.02&&de.tilt<.03,r=document.getElementById("north");r.classList.contains("flat")!==s&&(r.classList.toggle("flat",s),r.title=s?"El norte ya est\xE1 arriba":"Poner el norte arriba y el mapa plano")}py(),hy(),uy(),window.__rodFrame&&window.__rodFrame(),Ja.render(xs,Hi),Mc=n,Ae("#tilt").value=Math.round(de.tilt*180/Math.PI),Ae("#yaw").value=Math.round(((de.yaw*180/Math.PI+180)%360+360)%360-180)}}function yp(){Ja.setSize(innerWidth,innerHeight,!1),Hi.aspect=innerWidth/innerHeight,Hi.updateProjectionMatrix(),_p.resolution.set(innerWidth,innerHeight),xp.resolution.set(innerWidth,innerHeight),window.__rodResize&&window.__rodResize(),Mn()}addEventListener("resize",()=>{yp(),Xe.length&&vs()});zn.addEventListener("wheel",i=>{i.preventDefault();let t=i.deltaMode===1?16:1,e=i.deltaY*t;if(i.altKey){let n=(Math.abs(i.deltaX)>Math.abs(i.deltaY)?i.deltaX:i.deltaY)*t;de.yaw+=n*.0035}else i.ctrlKey?de.dist=Ln(de.dist*Math.exp(e*.01),6,400):de.tilt=Ln(de.tilt+e*.002,0,1.32);Mn()},{passive:!1});zn.addEventListener("contextmenu",i=>i.preventDefault());var Vi=new Map,Wn=null,Hs=0,wu=0,Eu=0;var Tc=null;zn.addEventListener("pointerdown",i=>{if(i.pointerType!=="mouse"&&!document.body.classList.contains("used")&&(document.body.classList.add("used"),Xe.length&&setTimeout(vs,50)),zn.setPointerCapture(i.pointerId),Vi.set(i.pointerId,{x:i.clientX,y:i.clientY}),Vi.size===1&&(Wn={rot:i.button===2||i.altKey,moved:0,multi:!1,touch:i.pointerType!=="mouse"}),Vi.size===2){let[t,e]=[...Vi.values()];Hs=Math.hypot(t.x-e.x,t.y-e.y),wu=Math.atan2(e.y-t.y,e.x-t.x),Eu=(t.y+e.y)/2,Tc={mode:null,rot:0,sc:0,tl:0},Wn&&(Wn.multi=!0)}Lu()});zn.addEventListener("pointermove",i=>{let t=Vi.get(i.pointerId);if(!t){Qi={x:i.clientX,y:i.clientY},Tu||(Tu=requestAnimationFrame(gy));return}let e=i.clientX-t.x,n=i.clientY-t.y;if(t.x=i.clientX,t.y=i.clientY,Vi.size===2){let[s,r]=[...Vi.values()],a=Math.hypot(s.x-r.x,s.y-r.y),o=Math.atan2(r.y-s.y,r.x-s.x),l=(s.y+r.y)/2,c=o-wu;c>Math.PI&&(c-=2*Math.PI),c<-Math.PI&&(c+=2*Math.PI);let h=Hs?a-Hs:0,p=l-Eu,u=Tc||(Tc={mode:null,rot:0,sc:0,tl:0});u.rot+=c,u.sc+=h,u.tl+=p,u.mode?u.mode==="zoom"&&Math.abs(u.rot)>.45&&(u.mode="rotate"):Math.abs(u.rot)>.3?u.mode="rotate":Math.abs(u.tl)>30&&Math.abs(u.sc)<18?u.mode="tilt":Math.abs(u.sc)>12&&(u.mode="zoom"),(u.mode==="zoom"||u.mode==="rotate")&&Hs&&(de.dist=Ln(de.dist*Hs/a,6,400)),u.mode==="rotate"&&(de.yaw+=c,en.yaw=de.yaw),u.mode==="tilt"&&(de.tilt=Ln(de.tilt-p*.006,0,1.32),en.tilt=de.tilt),Hs=a,wu=o,Eu=l,Mn();return}if(Wn.moved+=Math.abs(e)+Math.abs(n),Wn.rot||i.altKey)de.yaw+=e*.005,de.tilt=Ln(de.tilt+n*.004,0,1.32),en.yaw=de.yaw,en.tilt=de.tilt;else{let s=2*en.dist*Math.tan(Cc*Math.PI/360)/innerHeight,r=Math.sin(en.yaw),a=Math.cos(en.yaw),o=1/Math.max(Math.cos(en.tilt),.3);de.tx=Ln(de.tx-a*e*s+-r*n*s*o,-70,70),de.ty=Ln(de.ty-r*e*s+a*n*s*o,-70,70),en.tx=de.tx,en.ty=de.ty}Mn()});var Sp=i=>{let t=Wn&&!Wn.rot&&!Wn.multi&&Wn.moved<(Wn.touch?12:6)&&i.type==="pointerup"&&Vi.size===1,e=Wn&&Wn.touch;Vi.delete(i.pointerId),Hs=0,Tc=null,Vi.size||(Wn=null),t&&window.__rodTap&&window.__rodTap(i.clientX,i.clientY)};zn.addEventListener("pointerup",Sp);zn.addEventListener("pointercancel",Sp);zn.addEventListener("dblclick",Pu);addEventListener("keydown",i=>{i.key==="Alt"&&(zn.style.cursor="move")});addEventListener("keyup",i=>{i.key==="Alt"&&(zn.style.cursor="")});addEventListener("blur",()=>{zn.style.cursor=""});var my=new Ns,ap=new It,Qi=null,Tu=0,Gs=null;function gy(){if(Tu=0,!Qi||Wn)return;ap.set(Qi.x/innerWidth*2-1,-(Qi.y/innerHeight)*2+1),my.setFromCamera(ap,Hi);let i=null;if(i!==Gs){let e=Gs;Gs=i,e&&$s(e),i&&$s(i),Mn()}let t=window.__rodHover&&window.__rodHover(Qi.x,Qi.y);if(t){Vs.innerHTML=t,Vs.style.display="block";let e=Vs.offsetWidth,n=Vs.offsetHeight;Vs.style.left=Ln(Qi.x+14,6,innerWidth-e-6)+"px",Vs.style.top=Ln(Qi.y+14,6,innerHeight-n-6)+"px",zn.style.cursor="pointer"}else Lu(),zn.style.cursor=""}zn.addEventListener("pointerleave",()=>{if(Qi=null,Gs){let i=Gs;Gs=null,$s(i),Mn()}Lu()});var Vs=Ae("#tip");function Lu(){Vs.style.display="none"}document.querySelectorAll("[data-metric]").forEach(i=>i.onclick=()=>{Ru=i.dataset.metric,document.querySelectorAll("[data-metric]").forEach(t=>t.classList.toggle("on",t===i)),mp()});document.querySelectorAll("[data-mode]").forEach(i=>i.onclick=()=>{Cu=i.dataset.mode,document.querySelectorAll("[data-mode]").forEach(t=>t.classList.toggle("on",t===i)),Rc()});Ae("#yaw").oninput=i=>{de.yaw=+i.target.value*Math.PI/180,Mn()};Ae("#tilt").oninput=i=>{de.tilt=+i.target.value*Math.PI/180,Mn()};Ae("#zin").onclick=()=>{de.dist=Ln(de.dist*.75,6,400),Mn()};Ae("#zout").onclick=()=>{de.dist=Ln(de.dist/.75,6,400),Mn()};Ae("#rst").onclick=Pu;var op=["#2563eb","#059669","#7c3aed","#db2777","#0891b2","#ca8a04"],Xe=[],lp={},_y=i=>lp[i]||(lp[i]=new Is({color:i}));function Mp(i,t){i.og.children.forEach(e=>e.material=t?_y(t):up)}function $s(i,t=0){let e=i.mat.emissive;i===Gs?e.setHex(5592405):i.sel?e.copy(i.sel.tint):e.setHex(0),t&&e.addScalar(t)}function Du(i,t){let e=1e9,n=-1e9,s=1e9,r=-1e9;for(let c of i)e=Math.min(e,c.cx-c.size/2),n=Math.max(n,c.cx+c.size/2),s=Math.min(s,c.cy-c.size/2),r=Math.max(r,c.cy+c.size/2);let a=innerWidth/innerHeight,o=Math.tan(Cc*Math.PI/360),l=i.length===1?Ln(i[0].size*3.2+14,14,120):Ln(Math.max((r-s)*1.5,(n-e)*1.5/a)/(2*o)+6,14,300);Object.assign(de,{tx:(e+n)/2,ty:(s+r)/2,dist:l,tilt:t,yaw:0}),Mn()}var _s=Ae("#q"),ei=Ae("#list"),Ge=Ae("#mcs");function Ic(i,t=!0){if(ei.style.display="none",_s.value="",!i.sel){Xe.length>=6&&bp(Xe[0].o,!0);let e=new Set(Xe.map(s=>s.color)),n=op.find(s=>!e.has(s))||op[0];i.sel={o:i,color:n,tint:new oe(n).multiplyScalar(.12)},Xe.push(i.sel),Mp(i,n)}Ge.classList.contains("min")&&Ka(!1),Ya.set(i,performance.now()),$s(i),t&&Du([i],Math.max(de.tilt,.9)),vs()}function bp(i,t){let e=Xe.indexOf(i.sel);e>=0&&Xe.splice(e,1),i.sel=null,Mp(i,null),$s(i),Mn(),t||vs()}function wp(i){let t=Math.min(devicePixelRatio||1,2),e=i.clientWidth,n=i.clientHeight;i.width=e*t,i.height=n*t;let s=i.getContext("2d");s.scale(t,t),s.clearRect(0,0,e,n);let r=Xe.map(h=>{let p=1e9,u=-1e9,m=1e9,g=-1e9;for(let b of h.o.rings)for(let f=0;f<b[0].length;f+=2)p=Math.min(p,b[0][f]),u=Math.max(u,b[0][f]),m=Math.min(m,b[0][f+1]),g=Math.max(g,b[0][f+1]);return{x0:p,x1:u,y0:m,y1:g}}),a=Math.max(...r.map(h=>Math.max(h.x1-h.x0,h.y1-h.y0))),o=(Math.min(e,n)-22)/a;Xe.forEach((h,p)=>{let u=r[p],m=(u.x0+u.x1)/2,g=(u.y0+u.y1)/2;s.beginPath();for(let b of h.o.rings)for(let f of b)for(let d=0;d<f.length;d+=2){let R=e/2+(f[d]-m)*o,P=n/2-(f[d+1]-g)*o;d?s.lineTo(R,P):s.moveTo(R,P),d===f.length-2&&s.closePath()}s.fillStyle=h.color+"40",s.fill("evenodd"),s.lineWidth=1.6,s.strokeStyle=h.color,s.stroke()});let l=o/sy,c=[.5,1,2,5,10,20,50,100].find(h=>h*l>=28)||100;s.fillStyle="#6b7385",s.fillRect(10,n-12,c*l,2),s.font="10px system-ui",s.fillText(c+" km",12+c*l,n-8)}function vs(){if(!Xe.length){Ge.innerHTML="",Ge.style.display="none",Ka(!1);return}if(Ge.style.display="flex",innerWidth<=640){let e=Ae("#inf").getBoundingClientRect().bottom;Ge.style.top=Math.round(e+8)+"px",Ge.style.maxHeight=Math.max(110,Math.min(innerHeight*(Ae("#rc").classList.contains("min")?.7:.4),Ae("#rc").getBoundingClientRect().top-e-16))+"px",Ge.style.width=""}else if(innerHeight<=500){let e=Ae("#inf").getBoundingClientRect().bottom;Ge.style.top=Math.round(e+8)+"px",Ge.style.maxHeight=Math.max(120,innerHeight-e-20)+"px",Ge.style.width="min(290px, 40vw)"}else Ge.style.top="",Ge.style.maxHeight="",Ge.style.width="";let i=Xe.map((e,n)=>{let s=e.o;return`<div class="mc" draggable="true" data-i="${n}" style="--c:${e.color}"><button class="x" data-x="${n}" title="Cerrar">\xD7</button><div class="mh"><i class="dot"></i><b>${s.name}</b><em>${yc[s.pr]}</em></div><div class="mb">${ts(s.pop)} hab.</div><small>${Nr(s.area)} km\xB2 \xB7 ${Nr(s.pop/s.area)} hab./km\xB2 \xB7 n\xBA ${s.rankP} en poblaci\xF3n</small></div>`}).join("");if(Xe.length>1){let e=s=>Math.max(...Xe.map(s));if(i+='<div class="cmp"><div class="ct">Comparar <small>arrastra una ficha sobre otra para reordenar</small></div><canvas id="sil"></canvas><small class="sc">Siluetas superpuestas a la misma escala</small>'+[["Habitantes",s=>s.o.pop,ts],["Superficie (km\xB2)",s=>s.o.area,Nr],["Densidad (hab./km\xB2)",s=>s.o.pop/s.o.area,Nr]].map(([s,r,a])=>`<div class="cr"><span>${s}</span>${Xe.map(o=>`<div class="bw"><i style="width:${Math.max(2,r(o)/e(r)*100)}%;background:${o.color}"></i><b>${a(r(o))}</b></div>`).join("")}</div>`).join(""),Xe.length===2){let[s,r]=Xe.map(c=>c.o),[a,o]=s.pop>=r.pop?[s,r]:[r,s],l=(c,h)=>(c>=h?c/h:h/c).toLocaleString("es-ES",{maximumFractionDigits:1});i+=`<small class="ratio"><b>${a.name}</b> tiene ${l(a.pop,o.pop)}\xD7 los habitantes de <b>${o.name}</b> y ocupa ${l(a.area,o.area)}\xD7 ${a.area>=o.area?"su superficie":"menos superficie"}.</small>`}i+="</div>"}Ge.innerHTML=i,Ge.querySelectorAll("[data-x]").forEach(e=>e.onclick=n=>{n.stopPropagation(),bp(Xe[+e.dataset.x].o)}),Ge.querySelectorAll(".mc").forEach(e=>{e.onclick=()=>Du([Xe[+e.dataset.i].o],Math.max(de.tilt,.9)),e.onmouseenter=()=>{let n=Xe[+e.dataset.i].o;Ya.set(n,performance.now())},e.ondragstart=n=>{n.dataTransfer.setData("text/plain",e.dataset.i),e.classList.add("drag")},e.ondragend=()=>e.classList.remove("drag"),e.ondragover=n=>{n.preventDefault(),e.classList.add("over")},e.ondragleave=()=>e.classList.remove("over"),e.ondrop=n=>{n.preventDefault();let s=+n.dataTransfer.getData("text/plain"),r=+e.dataset.i;if(s!==r){let[a]=Xe.splice(s,1);Xe.splice(r,0,a),vs();let o=Ae("#sil");o&&o.classList.add("flash")}}});let t=Ae("#sil");t&&wp(t)}_s.addEventListener("input",()=>{if(window.__rodSearch){window.__rodSearch(_s.value);return}let i=yu(_s.value.trim());if(!i){ei.style.display="none";return}let t=[],e=[];for(let s of Qe){let r=yu(s.name);r.startsWith(i)?t.push(s):r.includes(i)&&e.push(s)}let n=t.sort((s,r)=>r.pop-s.pop).concat(e.sort((s,r)=>r.pop-s.pop)).slice(0,8);ei.innerHTML=n.map((s,r)=>`<li data-i="${r}">${s.name}<em>${ts(s.pop)}</em></li>`).join("")||'<li class="no">Sin resultados</li>',ei.style.display="block",ei.querySelectorAll("li[data-i]").forEach(s=>s.onclick=()=>Ic(n[+s.dataset.i])),ei._r=n});_s.addEventListener("keydown",i=>{i.key==="Enter"&&ei._pick?ei._pick(0):i.key==="Enter"&&ei._r&&ei._r[0]&&Ic(ei._r[0]),i.key==="Escape"&&(_s.value="",ei.style.display="none")});addEventListener("keydown",i=>{i.key==="Escape"&&i.target!==_s&&Ep()});var cp=0;addEventListener("resize",()=>{clearTimeout(cp),cp=setTimeout(()=>{let i=Ae("#sil");i&&wp(i)},120)});var Ac=null,Au=Ae("#chip");function xy(i,t,e=.8){Ac={codes:new Set(i.map(n=>n.code)),label:t},Qe.forEach(n=>{n.inF=Ac.codes.has(n.code),Iu(n)}),Au.innerHTML=`<span>Mostrando: <b>${t}</b> \xB7 ${i.length} municipio${i.length===1?"":"s"}</span><button id="chx" title="Quitar filtro">\xD7</button>`,Au.style.display="flex",Ae("#chx").onclick=Ep,Rc(),Du(i,e),i.slice(0,40).forEach(n=>Ya.set(n,performance.now()))}function Ep(){Ac&&(Ac=null,Qe.forEach(i=>{i.inF=!0,Iu(i)}),Au.style.display="none",Rc())}var vy="prov";function yy(i){let t=[...Qe].sort((a,o)=>o.pop-a.pop),e=[...Qe].sort((a,o)=>o.pop/o.area-a.pop/a.area),[n,s,r]=i.split(":");if(n==="pr")return[Qe.filter(a=>a.pr===s),pp[s]];if(n==="top")return s==="pop"?[t.slice(0,10),"10 con m\xE1s habitantes"]:[e.slice(0,10),"10 m\xE1s densos"];if(n==="low")return s==="pop"?[t.slice(-10),"10 con menos habitantes"]:[e.slice(-10),"10 menos densos"];if(n==="size")return[Qe.filter(a=>a.pop>=+s&&a.pop<+r),+r>1e9?`${ts(+s)} o m\xE1s habitantes`:+s==0?`menos de ${ts(+r)} habitantes`:`${ts(+s)} \u2013 ${ts(+r-1)} habitantes`];if(n==="n50"){let a=0,o=0;for(let l of t)if(a+=l.pop,o++,a>=Mu/2)break;return[t.slice(0,o),"la mitad de la poblaci\xF3n"]}return[[],""]}function Sy(i){let[t,e]=yy(i);t.length&&xy(t,e,i.startsWith("pr:")?.75:.8)}document.querySelectorAll("[data-tab]").forEach(i=>i.onclick=()=>{vy=i.dataset.tab,Ae("#dbody").scrollTop=0});var Ws=Ae("#rc"),bc=Ae("#mcstab");function Za(i){Ws.classList.toggle("min",i),Ae("#rcgrab span").textContent=i?"Mostrar controles":"Ocultar controles",Xe.length&&vs()}function Ka(i){Ge.classList.toggle("min",i),Ge.style.transform="",Ge.style.opacity="",bc.classList.toggle("on",i&&Xe.length>0),i&&(bc.textContent=`\u25B8 ${Xe.length} ${Xe.length===1?"ficha":"fichas"}`,bc.style.top=Ge.style.top||"124px")}function Nu(i,{onMove:t,onEnd:e,axis:n}){let s=null;i.addEventListener("pointerdown",a=>{a.pointerType==="mouse"||!Pc.matches||a.target.closest("input,button:not(#rcgrab),.seg")||(s={x:a.clientX,y:a.clientY,id:a.pointerId,lock:null})}),addEventListener("pointermove",a=>{if(!s||a.pointerId!==s.id)return;let o=a.clientX-s.x,l=a.clientY-s.y;!s.lock&&Math.hypot(o,l)>10&&(s.lock=Math.abs(o)>Math.abs(l)?"x":"y"),s.lock===n&&t&&t(o,l)});let r=a=>{if(!s||a.pointerId!==s.id)return;let o=a.clientX-s.x,l=a.clientY-s.y,c=s.lock;s=null,e(c===n?o:0,c===n?l:0,c)};addEventListener("pointerup",r,!0),addEventListener("pointercancel",r,!0)}Ae("#rcgrab").onclick=()=>Za(!Ws.classList.contains("min"));var Tp=()=>innerWidth>640;Nu(Ws,{axis:"y",onEnd:(i,t)=>{if(!Tp())if(t>40&&!Ws.classList.contains("min")){let e=Ae("#dp.open #dbody");(!e||e.scrollTop<=0||t>120)&&Za(!0)}else t<-30&&Ws.classList.contains("min")&&Za(!1)}});Nu(Ws,{axis:"x",onEnd:i=>{Tp()&&(i>50?Za(!0):i<-30&&Ws.classList.contains("min")&&Za(!1))}});Nu(Ge,{axis:"x",onMove:i=>{i<0&&(Ge.classList.add("sw"),Ge.style.transform=`translateX(${i}px)`,Ge.style.opacity=Math.max(.2,1+i/300))},onEnd:i=>{Ge.classList.remove("sw"),i<-60?Ka(!0):(Ge.style.transform="",Ge.style.opacity="")}});bc.onclick=()=>{Ka(!1),vs()};Ae("#dtoggle").onclick=()=>{let i=Ae("#dp").classList.toggle("open");Ae("#rc").classList.toggle("dopen",i),Ae("#dtoggle").textContent=i?Pc.matches&&innerWidth<=640?"\u2190 Controles":"En directo \u25B4":"En directo: conectar datos de Renfe \u25BE",window.__rodCard&&window.__rodCard()};var Pc=matchMedia("(max-width:640px), (max-height:500px)");function Ap(){let i=Ae("#leg");Pc.matches?Ae("#rc").insertBefore(i,Ae("#dtoggle")):document.body.appendChild(i),Xe.length&&vs()}Pc.addEventListener("change",Ap);Ap();yp();oy();Pu();Object.assign(en,de);for(let i of Qe)i.z=.01;requestAnimationFrame(vp);np({scene:xs,camera:Hi,renderer:Ja,goal:de,cur:en,invalidate:Mn,flyTo:(i,t,e,n)=>{Object.assign(de,{tx:(i-Xa)*ki,ty:(t-qa)*ki,dist:e,tilt:n}),Mn()},K:ki,CX:Xa,CY:qa,mcs:Ge,q:_s,list:ei,munis:Qe,select:Ic,norm:yu,fmt:ts,clamp:Ln,mcsMin:Ka});window.__app={scene:xs,renderer:Ja,camera:Hi,munis:Qe,labs:Ec,goal:de,cur:en,select:Ic,get mode(){return Cu}};window.__ready=!0;})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
