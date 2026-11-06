(()=>{var I0=0,vf=1,P0=2;var wl=1,L0=2,Va=3,cr=0,ui=1,ps=2,ms=0,Ha=1,yf=2,Sf=3,bf=4,D0=5;var $r=100,N0=101,U0=102,O0=103,F0=104,B0=200,k0=201,$0=202,z0=203,Mf=204,wf=205,V0=206,H0=207,G0=208,W0=209,X0=210,q0=211,Y0=212,J0=213,Z0=214,qc=0,Yc=1,Jc=2,Ra=3,Zc=4,jc=5,Kc=6,Qc=7,Nu=0,j0=1,K0=2,ji=0,Ef=1,Tf=2,Af=3,Cf=4,Rf=5,If=6,Pf=7;var Lf=300,ur=301,zr=302,Uu=303,Ou=304,El=306,tu=1e3,ls=1001,eu=1002,On=1003,Q0=1004;var Tl=1005;var Gn=1006,Fu=1007;var hr=1008;var Si=1009,Df=1010,Nf=1011,Ga=1012,Bu=1013,Ki=1014,Bi=1015,Qi=1016,ku=1017,$u=1018,Wa=1020,Uf=35902,Of=35899,Ff=1021,Bf=1022,ki=1023,us=1026,dr=1027,zu=1028,Vu=1029,fr=1030,Hu=1031;var Gu=1033,Al=33776,Cl=33777,Rl=33778,Il=33779,Wu=35840,Xu=35841,qu=35842,Yu=35843,Ju=36196,Zu=37492,ju=37496,Ku=37488,Qu=37489,Pl=37490,th=37491,eh=37808,nh=37809,ih=37810,sh=37811,rh=37812,ah=37813,oh=37814,lh=37815,ch=37816,uh=37817,hh=37818,dh=37819,fh=37820,ph=37821,mh=36492,gh=36494,_h=36495,xh=36283,vh=36284,Ll=36285,yh=36286;var Ho=2300,nu=2301,Wc=2302,af=2303,of=2400,lf=2401,cf=2402;var tg=3200;var Sh=0,eg=1,$s="",Ai="srgb",Go="srgb-linear",Wo="linear",an="srgb";var Xc=7680;var ng=519,ig=512,sg=513,rg=514,bh=515,ag=516,og=517,Mh=518,lg=519,kf=35044;var $f="300 es",Yi=2e3,Ia=2001;function Bx(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function kx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Xo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function cg(){let i=Xo("canvas");return i.style.display="block",i}var Xm={},Pa=null;function qo(...i){let t="THREE."+i.shift();Pa?Pa("log",t,...i):console.log(t,...i)}function ug(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Me(...i){i=ug(i);let t="THREE."+i.shift();if(Pa)Pa("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function we(...i){i=ug(i);let t="THREE."+i.shift();if(Pa)Pa("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Dr(...i){let t=i.join(" ");t in Xm||(Xm[t]=!0,Me(...i))}function hg(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var dg={[qc]:Yc,[Jc]:Kc,[Zc]:Qc,[Ra]:jc,[Yc]:qc,[Kc]:Jc,[Qc]:Zc,[jc]:Ra},hs=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Kn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],qm=1234567,ko=Math.PI/180,La=180/Math.PI;function cs(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Kn[i&255]+Kn[i>>8&255]+Kn[i>>16&255]+Kn[i>>24&255]+"-"+Kn[t&255]+Kn[t>>8&255]+"-"+Kn[t>>16&15|64]+Kn[t>>24&255]+"-"+Kn[e&63|128]+Kn[e>>8&255]+"-"+Kn[e>>16&255]+Kn[e>>24&255]+Kn[n&255]+Kn[n>>8&255]+Kn[n>>16&255]+Kn[n>>24&255]).toLowerCase()}function Ne(i,t,e){return Math.max(t,Math.min(e,i))}function zf(i,t){return(i%t+t)%t}function $x(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function zx(i,t,e){return i!==t?(e-i)/(t-i):0}function $o(i,t,e){return(1-e)*i+e*t}function Vx(i,t,e,n){return $o(i,t,1-Math.exp(-e*n))}function Hx(i,t=1){return t-Math.abs(zf(i,t*2)-t)}function Gx(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Wx(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Xx(i,t){return i+Math.floor(Math.random()*(t-i+1))}function qx(i,t){return i+Math.random()*(t-i)}function Yx(i){return i*(.5-Math.random())}function Jx(i){i!==void 0&&(qm=i);let t=qm+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Zx(i){return i*ko}function jx(i){return i*La}function Kx(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Qx(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function tv(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ev(i,t,e,n,s){let r=Math.cos,o=Math.sin,c=r(e/2),h=o(e/2),d=r((t+n)/2),p=o((t+n)/2),b=r((t-n)/2),g=o((t-n)/2),M=r((n-t)/2),w=o((n-t)/2);switch(s){case"XYX":i.set(c*p,h*b,h*g,c*d);break;case"YZY":i.set(h*g,c*p,h*b,c*d);break;case"ZXZ":i.set(h*b,h*g,c*p,c*d);break;case"XZX":i.set(c*p,h*w,h*M,c*d);break;case"YXY":i.set(h*M,c*p,h*w,c*d);break;case"ZYZ":i.set(h*w,h*M,c*p,c*d);break;default:Me("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function qi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function cn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Vf={DEG2RAD:ko,RAD2DEG:La,generateUUID:cs,clamp:Ne,euclideanModulo:zf,mapLinear:$x,inverseLerp:zx,lerp:$o,damp:Vx,pingpong:Hx,smoothstep:Gx,smootherstep:Wx,randInt:Xx,randFloat:qx,randFloatSpread:Yx,seededRandom:Jx,degToRad:Zx,radToDeg:jx,isPowerOfTwo:Kx,ceilPowerOfTwo:Qx,floorPowerOfTwo:tv,setQuaternionFromProperEuler:ev,normalize:cn,denormalize:qi},Wt=class i{static{i.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Ne(this.x,t.x,e.x),this.y=Ne(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Ne(this.x,t,e),this.y=Ne(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ds=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,c){let h=n[s+0],d=n[s+1],p=n[s+2],b=n[s+3],g=r[o+0],M=r[o+1],w=r[o+2],N=r[o+3];if(b!==N||h!==g||d!==M||p!==w){let y=h*g+d*M+p*w+b*N;y<0&&(g=-g,M=-M,w=-w,N=-N,y=-y);let m=1-c;if(y<.9995){let z=Math.acos(y),H=Math.sin(z);m=Math.sin(m*z)/H,c=Math.sin(c*z)/H,h=h*m+g*c,d=d*m+M*c,p=p*m+w*c,b=b*m+N*c}else{h=h*m+g*c,d=d*m+M*c,p=p*m+w*c,b=b*m+N*c;let z=1/Math.sqrt(h*h+d*d+p*p+b*b);h*=z,d*=z,p*=z,b*=z}}t[e]=h,t[e+1]=d,t[e+2]=p,t[e+3]=b}static multiplyQuaternionsFlat(t,e,n,s,r,o){let c=n[s],h=n[s+1],d=n[s+2],p=n[s+3],b=r[o],g=r[o+1],M=r[o+2],w=r[o+3];return t[e]=c*w+p*b+h*M-d*g,t[e+1]=h*w+p*g+d*b-c*M,t[e+2]=d*w+p*M+c*g-h*b,t[e+3]=p*w-c*b-h*g-d*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,c=Math.cos,h=Math.sin,d=c(n/2),p=c(s/2),b=c(r/2),g=h(n/2),M=h(s/2),w=h(r/2);switch(o){case"XYZ":this._x=g*p*b+d*M*w,this._y=d*M*b-g*p*w,this._z=d*p*w+g*M*b,this._w=d*p*b-g*M*w;break;case"YXZ":this._x=g*p*b+d*M*w,this._y=d*M*b-g*p*w,this._z=d*p*w-g*M*b,this._w=d*p*b+g*M*w;break;case"ZXY":this._x=g*p*b-d*M*w,this._y=d*M*b+g*p*w,this._z=d*p*w+g*M*b,this._w=d*p*b-g*M*w;break;case"ZYX":this._x=g*p*b-d*M*w,this._y=d*M*b+g*p*w,this._z=d*p*w-g*M*b,this._w=d*p*b+g*M*w;break;case"YZX":this._x=g*p*b+d*M*w,this._y=d*M*b+g*p*w,this._z=d*p*w-g*M*b,this._w=d*p*b-g*M*w;break;case"XZY":this._x=g*p*b-d*M*w,this._y=d*M*b-g*p*w,this._z=d*p*w+g*M*b,this._w=d*p*b+g*M*w;break;default:Me("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],c=e[5],h=e[9],d=e[2],p=e[6],b=e[10],g=n+c+b;if(g>0){let M=.5/Math.sqrt(g+1);this._w=.25/M,this._x=(p-h)*M,this._y=(r-d)*M,this._z=(o-s)*M}else if(n>c&&n>b){let M=2*Math.sqrt(1+n-c-b);this._w=(p-h)/M,this._x=.25*M,this._y=(s+o)/M,this._z=(r+d)/M}else if(c>b){let M=2*Math.sqrt(1+c-n-b);this._w=(r-d)/M,this._x=(s+o)/M,this._y=.25*M,this._z=(h+p)/M}else{let M=2*Math.sqrt(1+b-n-c);this._w=(o-s)/M,this._x=(r+d)/M,this._y=(h+p)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ne(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,c=e._x,h=e._y,d=e._z,p=e._w;return this._x=n*p+o*c+s*d-r*h,this._y=s*p+o*h+r*c-n*d,this._z=r*p+o*d+n*h-s*c,this._w=o*p-n*c-s*h-r*d,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,c=this.dot(t);c<0&&(n=-n,s=-s,r=-r,o=-o,c=-c);let h=1-e;if(c<.9995){let d=Math.acos(c),p=Math.sin(d);h=Math.sin(h*d)/p,e=Math.sin(e*d)/p,this._x=this._x*h+n*e,this._y=this._y*h+s*e,this._z=this._z*h+r*e,this._w=this._w*h+o*e,this._onChangeCallback()}else this._x=this._x*h+n*e,this._y=this._y*h+s*e,this._z=this._z*h+r*e,this._w=this._w*h+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},j=class i{static{i.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ym.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ym.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,c=t.z,h=t.w,d=2*(o*s-c*n),p=2*(c*e-r*s),b=2*(r*n-o*e);return this.x=e+h*d+o*b-c*p,this.y=n+h*p+c*d-r*b,this.z=s+h*b+r*p-o*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Ne(this.x,t.x,e.x),this.y=Ne(this.y,t.y,e.y),this.z=Ne(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Ne(this.x,t,e),this.y=Ne(this.y,t,e),this.z=Ne(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,c=e.y,h=e.z;return this.x=s*h-r*c,this.y=r*o-n*h,this.z=n*c-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Dd.copy(this).projectOnVector(t),this.sub(Dd)}reflect(t){return this.sub(Dd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Dd=new j,Ym=new ds,De=class i{static{i.prototype.isMatrix3=!0}constructor(t,e,n,s,r,o,c,h,d){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,c,h,d)}set(t,e,n,s,r,o,c,h,d){let p=this.elements;return p[0]=t,p[1]=s,p[2]=c,p[3]=e,p[4]=r,p[5]=h,p[6]=n,p[7]=o,p[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],c=n[3],h=n[6],d=n[1],p=n[4],b=n[7],g=n[2],M=n[5],w=n[8],N=s[0],y=s[3],m=s[6],z=s[1],H=s[4],D=s[7],E=s[2],k=s[5],J=s[8];return r[0]=o*N+c*z+h*E,r[3]=o*y+c*H+h*k,r[6]=o*m+c*D+h*J,r[1]=d*N+p*z+b*E,r[4]=d*y+p*H+b*k,r[7]=d*m+p*D+b*J,r[2]=g*N+M*z+w*E,r[5]=g*y+M*H+w*k,r[8]=g*m+M*D+w*J,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],c=t[5],h=t[6],d=t[7],p=t[8];return e*o*p-e*c*d-n*r*p+n*c*h+s*r*d-s*o*h}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],c=t[5],h=t[6],d=t[7],p=t[8],b=p*o-c*d,g=c*h-p*r,M=d*r-o*h,w=e*b+n*g+s*M;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);let N=1/w;return t[0]=b*N,t[1]=(s*d-p*n)*N,t[2]=(c*n-s*o)*N,t[3]=g*N,t[4]=(p*e-s*h)*N,t[5]=(s*r-c*e)*N,t[6]=M*N,t[7]=(n*h-d*e)*N,t[8]=(o*e-n*r)*N,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,c){let h=Math.cos(r),d=Math.sin(r);return this.set(n*h,n*d,-n*(h*o+d*c)+o+t,-s*d,s*h,-s*(-d*o+h*c)+c+e,0,0,1),this}scale(t,e){return Dr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Nd.makeScale(t,e)),this}rotate(t){return Dr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Nd.makeRotation(-t)),this}translate(t,e){return Dr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Nd.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Nd=new De,Jm=new De().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zm=new De().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function nv(){let i={enabled:!0,workingColorSpace:Go,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===an&&(s.r=Bs(s.r),s.g=Bs(s.g),s.b=Bs(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===an&&(s.r=Ca(s.r),s.g=Ca(s.g),s.b=Ca(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===$s?Wo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Dr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Dr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Go]:{primaries:t,whitePoint:n,transfer:Wo,toXYZ:Jm,fromXYZ:Zm,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ai},outputColorSpaceConfig:{drawingBufferColorSpace:Ai}},[Ai]:{primaries:t,whitePoint:n,transfer:an,toXYZ:Jm,fromXYZ:Zm,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ai}}}),i}var Ye=nv();function Bs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ca(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var da,iu=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{da===void 0&&(da=Xo("canvas")),da.width=t.width,da.height=t.height;let s=da.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=da}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Xo("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Bs(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Bs(e[n]/255)*255):e[n]=Bs(e[n]);return{data:e,width:t.width,height:t.height}}else return Me("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},iv=0,Da=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:iv++}),this.uuid=cs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,c=s.length;o<c;o++)s[o].isDataTexture?r.push(Ud(s[o].image)):r.push(Ud(s[o]))}else r=Ud(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Ud(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?iu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Me("Texture: Unable to serialize Texture."),{})}var sv=0,Od=new j,xi=class i extends hs{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=ls,s=ls,r=Gn,o=hr,c=ki,h=Si,d=i.DEFAULT_ANISOTROPY,p=$s){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sv++}),this.uuid=cs(),this.name="",this.source=new Da(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=d,this.format=c,this.internalFormat=null,this.type=h,this.offset=new Wt(0,0),this.repeat=new Wt(1,1),this.center=new Wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new De,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Od).x}get height(){return this.source.getSize(Od).y}get depth(){return this.source.getSize(Od).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Me(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Me(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Lf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case tu:t.x=t.x-Math.floor(t.x);break;case ls:t.x=t.x<0?0:1;break;case eu:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case tu:t.y=t.y-Math.floor(t.y);break;case ls:t.y=t.y<0?0:1;break;case eu:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};xi.DEFAULT_IMAGE=null;xi.DEFAULT_MAPPING=Lf;xi.DEFAULT_ANISOTROPY=1;var on=class i{static{i.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,h=t.elements,d=h[0],p=h[4],b=h[8],g=h[1],M=h[5],w=h[9],N=h[2],y=h[6],m=h[10];if(Math.abs(p-g)<.01&&Math.abs(b-N)<.01&&Math.abs(w-y)<.01){if(Math.abs(p+g)<.1&&Math.abs(b+N)<.1&&Math.abs(w+y)<.1&&Math.abs(d+M+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let H=(d+1)/2,D=(M+1)/2,E=(m+1)/2,k=(p+g)/4,J=(b+N)/4,I=(w+y)/4;return H>D&&H>E?H<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(H),s=k/n,r=J/n):D>E?D<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(D),n=k/s,r=I/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=J/r,s=I/r),this.set(n,s,r,e),this}let z=Math.sqrt((y-w)*(y-w)+(b-N)*(b-N)+(g-p)*(g-p));return Math.abs(z)<.001&&(z=1),this.x=(y-w)/z,this.y=(b-N)/z,this.z=(g-p)/z,this.w=Math.acos((d+M+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Ne(this.x,t.x,e.x),this.y=Ne(this.y,t.y,e.y),this.z=Ne(this.z,t.z,e.z),this.w=Ne(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Ne(this.x,t,e),this.y=Ne(this.y,t,e),this.z=Ne(this.z,t,e),this.w=Ne(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},su=class extends hs{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new on(0,0,t,e),this.scissorTest=!1,this.viewport=new on(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new xi(s),o=n.count;for(let c=0;c<o;c++)this.textures[c]=r.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Gn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Da(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},vi=class extends su{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Yo=class extends xi{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=On,this.minFilter=On,this.wrapR=ls,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ru=class extends xi{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=On,this.minFilter=On,this.wrapR=ls,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Ze=class i{static{i.prototype.isMatrix4=!0}constructor(t,e,n,s,r,o,c,h,d,p,b,g,M,w,N,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,c,h,d,p,b,g,M,w,N,y)}set(t,e,n,s,r,o,c,h,d,p,b,g,M,w,N,y){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=c,m[13]=h,m[2]=d,m[6]=p,m[10]=b,m[14]=g,m[3]=M,m[7]=w,m[11]=N,m[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/fa.setFromMatrixColumn(t,0).length(),r=1/fa.setFromMatrixColumn(t,1).length(),o=1/fa.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),c=Math.sin(n),h=Math.cos(s),d=Math.sin(s),p=Math.cos(r),b=Math.sin(r);if(t.order==="XYZ"){let g=o*p,M=o*b,w=c*p,N=c*b;e[0]=h*p,e[4]=-h*b,e[8]=d,e[1]=M+w*d,e[5]=g-N*d,e[9]=-c*h,e[2]=N-g*d,e[6]=w+M*d,e[10]=o*h}else if(t.order==="YXZ"){let g=h*p,M=h*b,w=d*p,N=d*b;e[0]=g+N*c,e[4]=w*c-M,e[8]=o*d,e[1]=o*b,e[5]=o*p,e[9]=-c,e[2]=M*c-w,e[6]=N+g*c,e[10]=o*h}else if(t.order==="ZXY"){let g=h*p,M=h*b,w=d*p,N=d*b;e[0]=g-N*c,e[4]=-o*b,e[8]=w+M*c,e[1]=M+w*c,e[5]=o*p,e[9]=N-g*c,e[2]=-o*d,e[6]=c,e[10]=o*h}else if(t.order==="ZYX"){let g=o*p,M=o*b,w=c*p,N=c*b;e[0]=h*p,e[4]=w*d-M,e[8]=g*d+N,e[1]=h*b,e[5]=N*d+g,e[9]=M*d-w,e[2]=-d,e[6]=c*h,e[10]=o*h}else if(t.order==="YZX"){let g=o*h,M=o*d,w=c*h,N=c*d;e[0]=h*p,e[4]=N-g*b,e[8]=w*b+M,e[1]=b,e[5]=o*p,e[9]=-c*p,e[2]=-d*p,e[6]=M*b+w,e[10]=g-N*b}else if(t.order==="XZY"){let g=o*h,M=o*d,w=c*h,N=c*d;e[0]=h*p,e[4]=-b,e[8]=d*p,e[1]=g*b+N,e[5]=o*p,e[9]=M*b-w,e[2]=w*b-M,e[6]=c*p,e[10]=N*b+g}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(rv,t,av)}lookAt(t,e,n){let s=this.elements;return Ei.subVectors(t,e),Ei.lengthSq()===0&&(Ei.z=1),Ei.normalize(),Ks.crossVectors(n,Ei),Ks.lengthSq()===0&&(Math.abs(n.z)===1?Ei.x+=1e-4:Ei.z+=1e-4,Ei.normalize(),Ks.crossVectors(n,Ei)),Ks.normalize(),xc.crossVectors(Ei,Ks),s[0]=Ks.x,s[4]=xc.x,s[8]=Ei.x,s[1]=Ks.y,s[5]=xc.y,s[9]=Ei.y,s[2]=Ks.z,s[6]=xc.z,s[10]=Ei.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],c=n[4],h=n[8],d=n[12],p=n[1],b=n[5],g=n[9],M=n[13],w=n[2],N=n[6],y=n[10],m=n[14],z=n[3],H=n[7],D=n[11],E=n[15],k=s[0],J=s[4],I=s[8],B=s[12],Y=s[1],Z=s[5],ot=s[9],dt=s[13],tt=s[2],st=s[6],mt=s[10],_t=s[14],Ct=s[3],xt=s[7],Et=s[11],Mt=s[15];return r[0]=o*k+c*Y+h*tt+d*Ct,r[4]=o*J+c*Z+h*st+d*xt,r[8]=o*I+c*ot+h*mt+d*Et,r[12]=o*B+c*dt+h*_t+d*Mt,r[1]=p*k+b*Y+g*tt+M*Ct,r[5]=p*J+b*Z+g*st+M*xt,r[9]=p*I+b*ot+g*mt+M*Et,r[13]=p*B+b*dt+g*_t+M*Mt,r[2]=w*k+N*Y+y*tt+m*Ct,r[6]=w*J+N*Z+y*st+m*xt,r[10]=w*I+N*ot+y*mt+m*Et,r[14]=w*B+N*dt+y*_t+m*Mt,r[3]=z*k+H*Y+D*tt+E*Ct,r[7]=z*J+H*Z+D*st+E*xt,r[11]=z*I+H*ot+D*mt+E*Et,r[15]=z*B+H*dt+D*_t+E*Mt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],c=t[5],h=t[9],d=t[13],p=t[2],b=t[6],g=t[10],M=t[14],w=t[3],N=t[7],y=t[11],m=t[15],z=h*M-d*g,H=c*M-d*b,D=c*g-h*b,E=o*M-d*p,k=o*g-h*p,J=o*b-c*p;return e*(N*z-y*H+m*D)-n*(w*z-y*E+m*k)+s*(w*H-N*E+m*J)-r*(w*D-N*k+y*J)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],c=t[9],h=t[2],d=t[6],p=t[10];return e*(o*p-c*d)-n*(r*p-c*h)+s*(r*d-o*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],c=t[5],h=t[6],d=t[7],p=t[8],b=t[9],g=t[10],M=t[11],w=t[12],N=t[13],y=t[14],m=t[15],z=e*c-n*o,H=e*h-s*o,D=e*d-r*o,E=n*h-s*c,k=n*d-r*c,J=s*d-r*h,I=p*N-b*w,B=p*y-g*w,Y=p*m-M*w,Z=b*y-g*N,ot=b*m-M*N,dt=g*m-M*y,tt=z*dt-H*ot+D*Z+E*Y-k*B+J*I;if(tt===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let st=1/tt;return t[0]=(c*dt-h*ot+d*Z)*st,t[1]=(s*ot-n*dt-r*Z)*st,t[2]=(N*J-y*k+m*E)*st,t[3]=(g*k-b*J-M*E)*st,t[4]=(h*Y-o*dt-d*B)*st,t[5]=(e*dt-s*Y+r*B)*st,t[6]=(y*D-w*J-m*H)*st,t[7]=(p*J-g*D+M*H)*st,t[8]=(o*ot-c*Y+d*I)*st,t[9]=(n*Y-e*ot-r*I)*st,t[10]=(w*k-N*D+m*z)*st,t[11]=(b*D-p*k-M*z)*st,t[12]=(c*B-o*Z-h*I)*st,t[13]=(e*Z-n*B+s*I)*st,t[14]=(N*H-w*E-y*z)*st,t[15]=(p*E-b*H+g*z)*st,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,c=t.y,h=t.z,d=r*o,p=r*c;return this.set(d*o+n,d*c-s*h,d*h+s*c,0,d*c+s*h,p*c+n,p*h-s*o,0,d*h-s*c,p*h+s*o,r*h*h+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,c=e._z,h=e._w,d=r+r,p=o+o,b=c+c,g=r*d,M=r*p,w=r*b,N=o*p,y=o*b,m=c*b,z=h*d,H=h*p,D=h*b,E=n.x,k=n.y,J=n.z;return s[0]=(1-(N+m))*E,s[1]=(M+D)*E,s[2]=(w-H)*E,s[3]=0,s[4]=(M-D)*k,s[5]=(1-(g+m))*k,s[6]=(y+z)*k,s[7]=0,s[8]=(w+H)*J,s[9]=(y-z)*J,s[10]=(1-(g+N))*J,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=fa.set(s[0],s[1],s[2]).length(),c=fa.set(s[4],s[5],s[6]).length(),h=fa.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Hi.copy(this);let d=1/o,p=1/c,b=1/h;return Hi.elements[0]*=d,Hi.elements[1]*=d,Hi.elements[2]*=d,Hi.elements[4]*=p,Hi.elements[5]*=p,Hi.elements[6]*=p,Hi.elements[8]*=b,Hi.elements[9]*=b,Hi.elements[10]*=b,e.setFromRotationMatrix(Hi),n.x=o,n.y=c,n.z=h,this}makePerspective(t,e,n,s,r,o,c=Yi,h=!1){let d=this.elements,p=2*r/(e-t),b=2*r/(n-s),g=(e+t)/(e-t),M=(n+s)/(n-s),w,N;if(h)w=r/(o-r),N=o*r/(o-r);else if(c===Yi)w=-(o+r)/(o-r),N=-2*o*r/(o-r);else if(c===Ia)w=-o/(o-r),N=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return d[0]=p,d[4]=0,d[8]=g,d[12]=0,d[1]=0,d[5]=b,d[9]=M,d[13]=0,d[2]=0,d[6]=0,d[10]=w,d[14]=N,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,e,n,s,r,o,c=Yi,h=!1){let d=this.elements,p=2/(e-t),b=2/(n-s),g=-(e+t)/(e-t),M=-(n+s)/(n-s),w,N;if(h)w=1/(o-r),N=o/(o-r);else if(c===Yi)w=-2/(o-r),N=-(o+r)/(o-r);else if(c===Ia)w=-1/(o-r),N=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return d[0]=p,d[4]=0,d[8]=0,d[12]=g,d[1]=0,d[5]=b,d[9]=0,d[13]=M,d[2]=0,d[6]=0,d[10]=w,d[14]=N,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},fa=new j,Hi=new Ze,rv=new j(0,0,0),av=new j(1,1,1),Ks=new j,xc=new j,Ei=new j,jm=new Ze,Km=new ds,ks=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],c=s[8],h=s[1],d=s[5],p=s[9],b=s[2],g=s[6],M=s[10];switch(e){case"XYZ":this._y=Math.asin(Ne(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-p,M),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(g,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Ne(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(c,M),this._z=Math.atan2(h,d)):(this._y=Math.atan2(-b,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ne(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-b,M),this._z=Math.atan2(-o,d)):(this._y=0,this._z=Math.atan2(h,r));break;case"ZYX":this._y=Math.asin(-Ne(b,-1,1)),Math.abs(b)<.9999999?(this._x=Math.atan2(g,M),this._z=Math.atan2(h,r)):(this._x=0,this._z=Math.atan2(-o,d));break;case"YZX":this._z=Math.asin(Ne(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-p,d),this._y=Math.atan2(-b,r)):(this._x=0,this._y=Math.atan2(c,M));break;case"XZY":this._z=Math.asin(-Ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(g,d),this._y=Math.atan2(c,r)):(this._x=Math.atan2(-p,M),this._y=0);break;default:Me("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return jm.makeRotationFromQuaternion(t),this.setFromRotationMatrix(jm,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Km.setFromEuler(this),this.setFromQuaternion(Km,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ks.DEFAULT_ORDER="XYZ";var Na=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},ov=0,Qm=new j,pa=new ds,Ds=new Ze,vc=new j,Po=new j,lv=new j,cv=new ds,t0=new j(1,0,0),e0=new j(0,1,0),n0=new j(0,0,1),i0={type:"added"},uv={type:"removed"},ma={type:"childadded",child:null},Fd={type:"childremoved",child:null},Fn=class i extends hs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ov++}),this.uuid=cs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new j,e=new ks,n=new ds,s=new j(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ze},normalMatrix:{value:new De}}),this.matrix=new Ze,this.matrixWorld=new Ze,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Na,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return pa.setFromAxisAngle(t,e),this.quaternion.multiply(pa),this}rotateOnWorldAxis(t,e){return pa.setFromAxisAngle(t,e),this.quaternion.premultiply(pa),this}rotateX(t){return this.rotateOnAxis(t0,t)}rotateY(t){return this.rotateOnAxis(e0,t)}rotateZ(t){return this.rotateOnAxis(n0,t)}translateOnAxis(t,e){return Qm.copy(t).applyQuaternion(this.quaternion),this.position.add(Qm.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(t0,t)}translateY(t){return this.translateOnAxis(e0,t)}translateZ(t){return this.translateOnAxis(n0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ds.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?vc.copy(t):vc.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Po.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ds.lookAt(Po,vc,this.up):Ds.lookAt(vc,Po,this.up),this.quaternion.setFromRotationMatrix(Ds),s&&(Ds.extractRotation(s.matrixWorld),pa.setFromRotationMatrix(Ds),this.quaternion.premultiply(pa.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(we("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(i0),ma.child=t,this.dispatchEvent(ma),ma.child=null):we("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(uv),Fd.child=t,this.dispatchEvent(Fd),Fd.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ds.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ds.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ds),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(i0),ma.child=t,this.dispatchEvent(ma),ma.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Po,t,lv),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Po,cv,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,c=r.length;o<c;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(c=>({...c,boundingBox:c.boundingBox?c.boundingBox.toJSON():void 0,boundingSphere:c.boundingSphere?c.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(c=>({...c})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(c,h){return c[h.uuid]===void 0&&(c[h.uuid]=h.toJSON(t)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){let h=c.shapes;if(Array.isArray(h))for(let d=0,p=h.length;d<p;d++){let b=h[d];r(t.shapes,b)}else r(t.shapes,h)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let c=[];for(let h=0,d=this.material.length;h<d;h++)c.push(r(t.materials,this.material[h]));s.material=c}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){let h=this.animations[c];s.animations.push(r(t.animations,h))}}if(e){let c=o(t.geometries),h=o(t.materials),d=o(t.textures),p=o(t.images),b=o(t.shapes),g=o(t.skeletons),M=o(t.animations),w=o(t.nodes);c.length>0&&(n.geometries=c),h.length>0&&(n.materials=h),d.length>0&&(n.textures=d),p.length>0&&(n.images=p),b.length>0&&(n.shapes=b),g.length>0&&(n.skeletons=g),M.length>0&&(n.animations=M),w.length>0&&(n.nodes=w)}return n.object=s,n;function o(c){let h=[];for(let d in c){let p=c[d];delete p.metadata,h.push(p)}return h}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Fn.DEFAULT_UP=new j(0,1,0);Fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ji=class extends Fn{constructor(){super(),this.isGroup=!0,this.type="Group"}},hv={type:"move"},Ua=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ji,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ji,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ji,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,c=this._targetRay,h=this._grip,d=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(d&&t.hand){o=!0;for(let N of t.hand.values()){let y=e.getJointPose(N,n),m=this._getHandJoint(d,N);y!==null&&(m.matrix.fromArray(y.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=y.radius),m.visible=y!==null}let p=d.joints["index-finger-tip"],b=d.joints["thumb-tip"],g=p.position.distanceTo(b.position),M=.02,w=.005;d.inputState.pinching&&g>M+w?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&g<=M-w&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else h!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(h.matrix.fromArray(r.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,r.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(r.linearVelocity)):h.hasLinearVelocity=!1,r.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(r.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:t,target:this})));c!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(hv)))}return c!==null&&(c.visible=s!==null),h!==null&&(h.visible=r!==null),d!==null&&(d.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ji;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},fg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qs={h:0,s:0,l:0},yc={h:0,s:0,l:0};function Bd(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var ye=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ai){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ye.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Ye.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ye.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Ye.workingColorSpace){if(t=zf(t,1),e=Ne(e,0,1),n=Ne(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Bd(o,r,t+1/3),this.g=Bd(o,r,t),this.b=Bd(o,r,t-1/3)}return Ye.colorSpaceToWorking(this,s),this}setStyle(t,e=Ai){function n(r){r!==void 0&&parseFloat(r)<1&&Me("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],c=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Me("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Me("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ai){let n=fg[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Me("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Bs(t.r),this.g=Bs(t.g),this.b=Bs(t.b),this}copyLinearToSRGB(t){return this.r=Ca(t.r),this.g=Ca(t.g),this.b=Ca(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ai){return Ye.workingToColorSpace(Qn.copy(this),t),Math.round(Ne(Qn.r*255,0,255))*65536+Math.round(Ne(Qn.g*255,0,255))*256+Math.round(Ne(Qn.b*255,0,255))}getHexString(t=Ai){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ye.workingColorSpace){Ye.workingToColorSpace(Qn.copy(this),e);let n=Qn.r,s=Qn.g,r=Qn.b,o=Math.max(n,s,r),c=Math.min(n,s,r),h,d,p=(c+o)/2;if(c===o)h=0,d=0;else{let b=o-c;switch(d=p<=.5?b/(o+c):b/(2-o-c),o){case n:h=(s-r)/b+(s<r?6:0);break;case s:h=(r-n)/b+2;break;case r:h=(n-s)/b+4;break}h/=6}return t.h=h,t.s=d,t.l=p,t}getRGB(t,e=Ye.workingColorSpace){return Ye.workingToColorSpace(Qn.copy(this),e),t.r=Qn.r,t.g=Qn.g,t.b=Qn.b,t}getStyle(t=Ai){Ye.workingToColorSpace(Qn.copy(this),t);let e=Qn.r,n=Qn.g,s=Qn.b;return t!==Ai?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Qs),this.setHSL(Qs.h+t,Qs.s+e,Qs.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Qs),t.getHSL(yc);let n=$o(Qs.h,yc.h,e),s=$o(Qs.s,yc.s,e),r=$o(Qs.l,yc.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Qn=new ye;ye.NAMES=fg;var Jo=class extends Fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ks,this.environmentIntensity=1,this.environmentRotation=new ks,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Gi=new j,Ns=new j,kd=new j,Us=new j,ga=new j,_a=new j,s0=new j,$d=new j,zd=new j,Vd=new j,Hd=new on,Gd=new on,Wd=new on,ir=class i{constructor(t=new j,e=new j,n=new j){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Gi.subVectors(t,e),s.cross(Gi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Gi.subVectors(s,e),Ns.subVectors(n,e),kd.subVectors(t,e);let o=Gi.dot(Gi),c=Gi.dot(Ns),h=Gi.dot(kd),d=Ns.dot(Ns),p=Ns.dot(kd),b=o*d-c*c;if(b===0)return r.set(0,0,0),null;let g=1/b,M=(d*h-c*p)*g,w=(o*p-c*h)*g;return r.set(1-M-w,w,M)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Us)===null?!1:Us.x>=0&&Us.y>=0&&Us.x+Us.y<=1}static getInterpolation(t,e,n,s,r,o,c,h){return this.getBarycoord(t,e,n,s,Us)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(r,Us.x),h.addScaledVector(o,Us.y),h.addScaledVector(c,Us.z),h)}static getInterpolatedAttribute(t,e,n,s,r,o){return Hd.setScalar(0),Gd.setScalar(0),Wd.setScalar(0),Hd.fromBufferAttribute(t,e),Gd.fromBufferAttribute(t,n),Wd.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Hd,r.x),o.addScaledVector(Gd,r.y),o.addScaledVector(Wd,r.z),o}static isFrontFacing(t,e,n,s){return Gi.subVectors(n,e),Ns.subVectors(t,e),Gi.cross(Ns).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Gi.subVectors(this.c,this.b),Ns.subVectors(this.a,this.b),Gi.cross(Ns).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,c;ga.subVectors(s,n),_a.subVectors(r,n),$d.subVectors(t,n);let h=ga.dot($d),d=_a.dot($d);if(h<=0&&d<=0)return e.copy(n);zd.subVectors(t,s);let p=ga.dot(zd),b=_a.dot(zd);if(p>=0&&b<=p)return e.copy(s);let g=h*b-p*d;if(g<=0&&h>=0&&p<=0)return o=h/(h-p),e.copy(n).addScaledVector(ga,o);Vd.subVectors(t,r);let M=ga.dot(Vd),w=_a.dot(Vd);if(w>=0&&M<=w)return e.copy(r);let N=M*d-h*w;if(N<=0&&d>=0&&w<=0)return c=d/(d-w),e.copy(n).addScaledVector(_a,c);let y=p*w-M*b;if(y<=0&&b-p>=0&&M-w>=0)return s0.subVectors(r,s),c=(b-p)/(b-p+(M-w)),e.copy(s).addScaledVector(s0,c);let m=1/(y+N+g);return o=N*m,c=g*m,e.copy(n).addScaledVector(ga,o).addScaledVector(_a,c)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ci=class{constructor(t=new j(1/0,1/0,1/0),e=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Wi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Wi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Wi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,c=r.count;o<c;o++)t.isMesh===!0?t.getVertexPosition(o,Wi):Wi.fromBufferAttribute(r,o),Wi.applyMatrix4(t.matrixWorld),this.expandByPoint(Wi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Sc.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Sc.copy(n.boundingBox)),Sc.applyMatrix4(t.matrixWorld),this.union(Sc)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Wi),Wi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Lo),bc.subVectors(this.max,Lo),xa.subVectors(t.a,Lo),va.subVectors(t.b,Lo),ya.subVectors(t.c,Lo),tr.subVectors(va,xa),er.subVectors(ya,va),Cr.subVectors(xa,ya);let e=[0,-tr.z,tr.y,0,-er.z,er.y,0,-Cr.z,Cr.y,tr.z,0,-tr.x,er.z,0,-er.x,Cr.z,0,-Cr.x,-tr.y,tr.x,0,-er.y,er.x,0,-Cr.y,Cr.x,0];return!Xd(e,xa,va,ya,bc)||(e=[1,0,0,0,1,0,0,0,1],!Xd(e,xa,va,ya,bc))?!1:(Mc.crossVectors(tr,er),e=[Mc.x,Mc.y,Mc.z],Xd(e,xa,va,ya,bc))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Wi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Wi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Os[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Os[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Os[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Os[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Os[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Os[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Os[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Os[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Os),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Os=[new j,new j,new j,new j,new j,new j,new j,new j],Wi=new j,Sc=new ci,xa=new j,va=new j,ya=new j,tr=new j,er=new j,Cr=new j,Lo=new j,bc=new j,Mc=new j,Rr=new j;function Xd(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Rr.fromArray(i,r);let c=s.x*Math.abs(Rr.x)+s.y*Math.abs(Rr.y)+s.z*Math.abs(Rr.z),h=t.dot(Rr),d=e.dot(Rr),p=n.dot(Rr);if(Math.max(-Math.max(h,d,p),Math.min(h,d,p))>c)return!1}return!0}var In=new j,wc=new Wt,dv=0,hn=class extends hs{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:dv++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=kf,this.updateRanges=[],this.gpuType=Bi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)wc.fromBufferAttribute(this,e),wc.applyMatrix3(t),this.setXY(e,wc.x,wc.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)In.fromBufferAttribute(this,e),In.applyMatrix3(t),this.setXYZ(e,In.x,In.y,In.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)In.fromBufferAttribute(this,e),In.applyMatrix4(t),this.setXYZ(e,In.x,In.y,In.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)In.fromBufferAttribute(this,e),In.applyNormalMatrix(t),this.setXYZ(e,In.x,In.y,In.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)In.fromBufferAttribute(this,e),In.transformDirection(t),this.setXYZ(e,In.x,In.y,In.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=qi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=cn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=qi(e,this.array)),e}setX(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=qi(e,this.array)),e}setY(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=qi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=qi(e,this.array)),e}setW(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=cn(e,this.array),n=cn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=cn(e,this.array),n=cn(n,this.array),s=cn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=cn(e,this.array),n=cn(n,this.array),s=cn(s,this.array),r=cn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Zo=class extends hn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var jo=class extends hn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var wn=class extends hn{constructor(t,e,n){super(new Float32Array(t),e,n)}},fv=new ci,Do=new j,qd=new j,yi=class{constructor(t=new j,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):fv.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Do.subVectors(t,this.center);let e=Do.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Do,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(qd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Do.copy(t.center).add(qd)),this.expandByPoint(Do.copy(t.center).sub(qd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},pv=0,Fi=new Ze,Yd=new Fn,Sa=new j,Ti=new ci,No=new ci,Un=new j,En=class i extends hs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pv++}),this.uuid=cs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Bx(t)?jo:Zo)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new De().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Fi.makeRotationFromQuaternion(t),this.applyMatrix4(Fi),this}rotateX(t){return Fi.makeRotationX(t),this.applyMatrix4(Fi),this}rotateY(t){return Fi.makeRotationY(t),this.applyMatrix4(Fi),this}rotateZ(t){return Fi.makeRotationZ(t),this.applyMatrix4(Fi),this}translate(t,e,n){return Fi.makeTranslation(t,e,n),this.applyMatrix4(Fi),this}scale(t,e,n){return Fi.makeScale(t,e,n),this.applyMatrix4(Fi),this}lookAt(t){return Yd.lookAt(t),Yd.updateMatrix(),this.applyMatrix4(Yd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Sa).negate(),this.translate(Sa.x,Sa.y,Sa.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new wn(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Me("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ci);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){we("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Ti.setFromBufferAttribute(r),this.morphTargetsRelative?(Un.addVectors(this.boundingBox.min,Ti.min),this.boundingBox.expandByPoint(Un),Un.addVectors(this.boundingBox.max,Ti.max),this.boundingBox.expandByPoint(Un)):(this.boundingBox.expandByPoint(Ti.min),this.boundingBox.expandByPoint(Ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&we('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){we("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(t){let n=this.boundingSphere.center;if(Ti.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let c=e[r];No.setFromBufferAttribute(c),this.morphTargetsRelative?(Un.addVectors(Ti.min,No.min),Ti.expandByPoint(Un),Un.addVectors(Ti.max,No.max),Ti.expandByPoint(Un)):(Ti.expandByPoint(No.min),Ti.expandByPoint(No.max))}Ti.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Un.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Un));if(e)for(let r=0,o=e.length;r<o;r++){let c=e[r],h=this.morphTargetsRelative;for(let d=0,p=c.count;d<p;d++)Un.fromBufferAttribute(c,d),h&&(Sa.fromBufferAttribute(t,d),Un.add(Sa)),s=Math.max(s,n.distanceToSquared(Un))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&we('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){we("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new hn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let c=[],h=[];for(let I=0;I<n.count;I++)c[I]=new j,h[I]=new j;let d=new j,p=new j,b=new j,g=new Wt,M=new Wt,w=new Wt,N=new j,y=new j;function m(I,B,Y){d.fromBufferAttribute(n,I),p.fromBufferAttribute(n,B),b.fromBufferAttribute(n,Y),g.fromBufferAttribute(r,I),M.fromBufferAttribute(r,B),w.fromBufferAttribute(r,Y),p.sub(d),b.sub(d),M.sub(g),w.sub(g);let Z=1/(M.x*w.y-w.x*M.y);isFinite(Z)&&(N.copy(p).multiplyScalar(w.y).addScaledVector(b,-M.y).multiplyScalar(Z),y.copy(b).multiplyScalar(M.x).addScaledVector(p,-w.x).multiplyScalar(Z),c[I].add(N),c[B].add(N),c[Y].add(N),h[I].add(y),h[B].add(y),h[Y].add(y))}let z=this.groups;z.length===0&&(z=[{start:0,count:t.count}]);for(let I=0,B=z.length;I<B;++I){let Y=z[I],Z=Y.start,ot=Y.count;for(let dt=Z,tt=Z+ot;dt<tt;dt+=3)m(t.getX(dt+0),t.getX(dt+1),t.getX(dt+2))}let H=new j,D=new j,E=new j,k=new j;function J(I){E.fromBufferAttribute(s,I),k.copy(E);let B=c[I];H.copy(B),H.sub(E.multiplyScalar(E.dot(B))).normalize(),D.crossVectors(k,B);let Z=D.dot(h[I])<0?-1:1;o.setXYZW(I,H.x,H.y,H.z,Z)}for(let I=0,B=z.length;I<B;++I){let Y=z[I],Z=Y.start,ot=Y.count;for(let dt=Z,tt=Z+ot;dt<tt;dt+=3)J(t.getX(dt+0)),J(t.getX(dt+1)),J(t.getX(dt+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new hn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let g=0,M=n.count;g<M;g++)n.setXYZ(g,0,0,0);let s=new j,r=new j,o=new j,c=new j,h=new j,d=new j,p=new j,b=new j;if(t)for(let g=0,M=t.count;g<M;g+=3){let w=t.getX(g+0),N=t.getX(g+1),y=t.getX(g+2);s.fromBufferAttribute(e,w),r.fromBufferAttribute(e,N),o.fromBufferAttribute(e,y),p.subVectors(o,r),b.subVectors(s,r),p.cross(b),c.fromBufferAttribute(n,w),h.fromBufferAttribute(n,N),d.fromBufferAttribute(n,y),c.add(p),h.add(p),d.add(p),n.setXYZ(w,c.x,c.y,c.z),n.setXYZ(N,h.x,h.y,h.z),n.setXYZ(y,d.x,d.y,d.z)}else for(let g=0,M=e.count;g<M;g+=3)s.fromBufferAttribute(e,g+0),r.fromBufferAttribute(e,g+1),o.fromBufferAttribute(e,g+2),p.subVectors(o,r),b.subVectors(s,r),p.cross(b),n.setXYZ(g+0,p.x,p.y,p.z),n.setXYZ(g+1,p.x,p.y,p.z),n.setXYZ(g+2,p.x,p.y,p.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Un.fromBufferAttribute(t,e),Un.normalize(),t.setXYZ(e,Un.x,Un.y,Un.z)}toNonIndexed(){function t(c,h){let d=c.array,p=c.itemSize,b=c.normalized,g=new d.constructor(h.length*p),M=0,w=0;for(let N=0,y=h.length;N<y;N++){c.isInterleavedBufferAttribute?M=h[N]*c.data.stride+c.offset:M=h[N]*p;for(let m=0;m<p;m++)g[w++]=d[M++]}return new hn(g,p,b)}if(this.index===null)return Me("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let c in s){let h=s[c],d=t(h,n);e.setAttribute(c,d)}let r=this.morphAttributes;for(let c in r){let h=[],d=r[c];for(let p=0,b=d.length;p<b;p++){let g=d[p],M=t(g,n);h.push(M)}e.morphAttributes[c]=h}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];e.addGroup(d.start,d.count,d.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let h=this.parameters;for(let d in h)h[d]!==void 0&&(t[d]=h[d]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let h in n){let d=n[h];t.data.attributes[h]=d.toJSON(t.data)}let s={},r=!1;for(let h in this.morphAttributes){let d=this.morphAttributes[h],p=[];for(let b=0,g=d.length;b<g;b++){let M=d[b];p.push(M.toJSON(t.data))}p.length>0&&(s[h]=p,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let c=this.boundingSphere;return c!==null&&(t.data.boundingSphere=c.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let d in s){let p=s[d];this.setAttribute(d,p.clone(e))}let r=t.morphAttributes;for(let d in r){let p=[],b=r[d];for(let g=0,M=b.length;g<M;g++)p.push(b[g].clone(e));this.morphAttributes[d]=p}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let d=0,p=o.length;d<p;d++){let b=o[d];this.addGroup(b.start,b.count,b.materialIndex)}let c=t.boundingBox;c!==null&&(this.boundingBox=c.clone());let h=t.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},au=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=kf,this.updateRanges=[],this.version=0,this.uuid=cs()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=cs()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=cs()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},li=new j,Zi=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)li.fromBufferAttribute(this,e),li.applyMatrix4(t),this.setXYZ(e,li.x,li.y,li.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)li.fromBufferAttribute(this,e),li.applyNormalMatrix(t),this.setXYZ(e,li.x,li.y,li.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)li.fromBufferAttribute(this,e),li.transformDirection(t),this.setXYZ(e,li.x,li.y,li.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=qi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=cn(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=cn(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=cn(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=cn(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=cn(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=qi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=qi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=qi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=qi(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=cn(e,this.array),n=cn(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=cn(e,this.array),n=cn(n,this.array),s=cn(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=cn(e,this.array),n=cn(n,this.array),s=cn(s,this.array),r=cn(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){qo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new hn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){qo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Jd=new j,mv=new j,gv=new De,Xi=class{constructor(t=new j(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Jd.subVectors(n,e).cross(mv.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Jd),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||gv.getNormalMatrix(t),s=this.coplanarPoint(Jd).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},_v=0,fs=class extends hs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_v++}),this.uuid=cs(),this.name="",this.type="Material",this.blending=Ha,this.side=cr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mf,this.blendDst=wf,this.blendEquation=$r,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ye(0,0,0),this.blendAlpha=0,this.depthFunc=Ra,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ng,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xc,this.stencilZFail=Xc,this.stencilZPass=Xc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Me(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Me(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let c in r){let h=r[c];delete h.metadata,o.push(h)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ye().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Xi().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Wt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Wt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Fs=new j,Zd=new j,Ec=new j,Tc=new j,Nr=class{constructor(t=new j,e=new j(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Fs)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Fs.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Fs.copy(this.origin).addScaledVector(this.direction,e),Fs.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Zd.copy(t).add(e).multiplyScalar(.5),Ec.copy(e).sub(t).normalize(),Tc.copy(this.origin).sub(Zd);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Ec),c=Tc.dot(this.direction),h=-Tc.dot(Ec),d=Tc.lengthSq(),p=Math.abs(1-o*o),b,g,M,w;if(p>0)if(b=o*h-c,g=o*c-h,w=r*p,b>=0)if(g>=-w)if(g<=w){let N=1/p;b*=N,g*=N,M=b*(b+o*g+2*c)+g*(o*b+g+2*h)+d}else g=r,b=Math.max(0,-(o*g+c)),M=-b*b+g*(g+2*h)+d;else g=-r,b=Math.max(0,-(o*g+c)),M=-b*b+g*(g+2*h)+d;else g<=-w?(b=Math.max(0,-(-o*r+c)),g=b>0?-r:Math.min(Math.max(-r,-h),r),M=-b*b+g*(g+2*h)+d):g<=w?(b=0,g=Math.min(Math.max(-r,-h),r),M=g*(g+2*h)+d):(b=Math.max(0,-(o*r+c)),g=b>0?r:Math.min(Math.max(-r,-h),r),M=-b*b+g*(g+2*h)+d);else g=o>0?-r:r,b=Math.max(0,-(o*g+c)),M=-b*b+g*(g+2*h)+d;return n&&n.copy(this.origin).addScaledVector(this.direction,b),s&&s.copy(Zd).addScaledVector(Ec,g),M}intersectSphere(t,e){if(t.radius<0)return null;Fs.subVectors(t.center,this.origin);let n=Fs.dot(this.direction),s=Fs.dot(Fs)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),c=n-o,h=n+o;return h<0?null:c<0?this.at(h,e):this.at(c,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,c,h,d=1/this.direction.x,p=1/this.direction.y,b=1/this.direction.z,g=this.origin;return d>=0?(n=(t.min.x-g.x)*d,s=(t.max.x-g.x)*d):(n=(t.max.x-g.x)*d,s=(t.min.x-g.x)*d),p>=0?(r=(t.min.y-g.y)*p,o=(t.max.y-g.y)*p):(r=(t.max.y-g.y)*p,o=(t.min.y-g.y)*p),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),b>=0?(c=(t.min.z-g.z)*b,h=(t.max.z-g.z)*b):(c=(t.max.z-g.z)*b,h=(t.min.z-g.z)*b),n>h||c>s)||((c>n||n!==n)&&(n=c),(h<s||s!==s)&&(s=h),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Fs)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,c=this.direction,h=c.x,d=c.y,p=c.z,b=t.x-o.x,g=t.y-o.y,M=t.z-o.z,w=e.x-o.x,N=e.y-o.y,y=e.z-o.z,m=n.x-o.x,z=n.y-o.y,H=n.z-o.z,D=Math.abs(h),E=Math.abs(d),k=Math.abs(p),J,I,B,Y,Z,ot,dt,tt,st,mt,_t,Ct;if(D>=E&&D>=k?(B=h,ot=b,st=w,Ct=m,h>=0?(J=d,I=p,Y=g,Z=M,dt=N,tt=y,mt=z,_t=H):(J=p,I=d,Y=M,Z=g,dt=y,tt=N,mt=H,_t=z)):E>=k?(B=d,ot=g,st=N,Ct=z,d>=0?(J=p,I=h,Y=M,Z=b,dt=y,tt=w,mt=H,_t=m):(J=h,I=p,Y=b,Z=M,dt=w,tt=y,mt=m,_t=H)):(B=p,ot=M,st=y,Ct=H,p>=0?(J=h,I=d,Y=b,Z=g,dt=w,tt=N,mt=m,_t=z):(J=d,I=h,Y=g,Z=b,dt=N,tt=w,mt=z,_t=m)),B===0)return null;let xt=J/B,Et=I/B,Mt=1/B,zt=Y-xt*ot,ne=Z-Et*ot,je=dt-xt*st,Oe=tt-Et*st,We=mt-xt*Ct,vt=_t-Et*Ct,yt=We*Oe-vt*je,Pt=zt*vt-ne*We,fe=je*ne-Oe*zt;if(s){if(yt<0||Pt<0||fe<0)return null}else if((yt<0||Pt<0||fe<0)&&(yt>0||Pt>0||fe>0))return null;let Kt=yt+Pt+fe;if(Kt===0)return null;let _e=Mt*(yt*ot+Pt*st+fe*Ct);return(Kt>0?_e<0:_e>0)?null:this.at(_e/Kt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ur=class extends fs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ks,this.combine=Nu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},r0=new Ze,Ir=new Nr,Ac=new yi,a0=new j,Cc=new j,Rc=new j,Ic=new j,jd=new j,Pc=new j,o0=new j,Lc=new j,Bn=class extends Fn{constructor(t=new En,e=new Ur){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let c=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let c=this.morphTargetInfluences;if(r&&c){Pc.set(0,0,0);for(let h=0,d=r.length;h<d;h++){let p=c[h],b=r[h];p!==0&&(jd.fromBufferAttribute(b,t),o?Pc.addScaledVector(jd,p):Pc.addScaledVector(jd.sub(e),p))}e.add(Pc)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ac.copy(n.boundingSphere),Ac.applyMatrix4(r),Ir.copy(t.ray).recast(t.near),!(Ac.containsPoint(Ir.origin)===!1&&(Ir.intersectSphere(Ac,a0)===null||Ir.origin.distanceToSquared(a0)>(t.far-t.near)**2))&&(r0.copy(r).invert(),Ir.copy(t.ray).applyMatrix4(r0),!(n.boundingBox!==null&&Ir.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ir)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,c=r.index,h=r.attributes.position,d=r.attributes.uv,p=r.attributes.uv1,b=r.attributes.normal,g=r.groups,M=r.drawRange;if(c!==null)if(Array.isArray(o))for(let w=0,N=g.length;w<N;w++){let y=g[w],m=o[y.materialIndex],z=Math.max(y.start,M.start),H=Math.min(c.count,Math.min(y.start+y.count,M.start+M.count));for(let D=z,E=H;D<E;D+=3){let k=c.getX(D),J=c.getX(D+1),I=c.getX(D+2);s=Dc(this,m,t,n,d,p,b,k,J,I),s&&(s.faceIndex=Math.floor(D/3),s.face.materialIndex=y.materialIndex,e.push(s))}}else{let w=Math.max(0,M.start),N=Math.min(c.count,M.start+M.count);for(let y=w,m=N;y<m;y+=3){let z=c.getX(y),H=c.getX(y+1),D=c.getX(y+2);s=Dc(this,o,t,n,d,p,b,z,H,D),s&&(s.faceIndex=Math.floor(y/3),e.push(s))}}else if(h!==void 0)if(Array.isArray(o))for(let w=0,N=g.length;w<N;w++){let y=g[w],m=o[y.materialIndex],z=Math.max(y.start,M.start),H=Math.min(h.count,Math.min(y.start+y.count,M.start+M.count));for(let D=z,E=H;D<E;D+=3){let k=D,J=D+1,I=D+2;s=Dc(this,m,t,n,d,p,b,k,J,I),s&&(s.faceIndex=Math.floor(D/3),s.face.materialIndex=y.materialIndex,e.push(s))}}else{let w=Math.max(0,M.start),N=Math.min(h.count,M.start+M.count);for(let y=w,m=N;y<m;y+=3){let z=y,H=y+1,D=y+2;s=Dc(this,o,t,n,d,p,b,z,H,D),s&&(s.faceIndex=Math.floor(y/3),e.push(s))}}}};function xv(i,t,e,n,s,r,o,c){let h;if(t.side===ui?h=n.intersectTriangle(o,r,s,!0,c):h=n.intersectTriangle(s,r,o,t.side===cr,c),h===null)return null;Lc.copy(c),Lc.applyMatrix4(i.matrixWorld);let d=e.ray.origin.distanceTo(Lc);return d<e.near||d>e.far?null:{distance:d,point:Lc.clone(),object:i}}function Dc(i,t,e,n,s,r,o,c,h,d){i.getVertexPosition(c,Cc),i.getVertexPosition(h,Rc),i.getVertexPosition(d,Ic);let p=xv(i,t,e,n,Cc,Rc,Ic,o0);if(p){let b=new j;ir.getBarycoord(o0,Cc,Rc,Ic,b),s&&(p.uv=ir.getInterpolatedAttribute(s,c,h,d,b,new Wt)),r&&(p.uv1=ir.getInterpolatedAttribute(r,c,h,d,b,new Wt)),o&&(p.normal=ir.getInterpolatedAttribute(o,c,h,d,b,new j),p.normal.dot(n.direction)>0&&p.normal.multiplyScalar(-1));let g={a:c,b:h,c:d,normal:new j,materialIndex:0};ir.getNormal(Cc,Rc,Ic,g.normal),p.face=g,p.barycoord=b}return p}var Ko=class extends xi{constructor(t=null,e=1,n=1,s,r,o,c,h,d=On,p=On,b,g){super(null,o,c,h,d,p,s,r,b,g),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Qo=class extends hn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ba=new Ze,l0=new Ze,Nc=[],c0=new ci,vv=new Ze,Uo=new Bn,Oo=new yi,tl=class extends Bn{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Qo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,vv)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ci),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ba),c0.copy(t.boundingBox).applyMatrix4(ba),this.boundingBox.union(c0)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new yi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ba),Oo.copy(t.boundingSphere).applyMatrix4(ba),this.boundingSphere.union(Oo)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let c=0;c<n.length;c++)n[c]=s[o+c]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Uo.geometry=this.geometry,Uo.material=this.material,Uo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Oo.copy(this.boundingSphere),Oo.applyMatrix4(n),t.ray.intersectsSphere(Oo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ba),l0.multiplyMatrices(n,ba),Uo.matrixWorld=l0,Uo.raycast(t,Nc);for(let o=0,c=Nc.length;o<c;o++){let h=Nc[o];h.instanceId=r,h.object=this,e.push(h)}Nc.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Qo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ko(new Float32Array(s*this.count),s,this.count,zu,Bi));let r=this.morphTexture.source.data.data,o=0;for(let d=0;d<n.length;d++)o+=n[d];let c=this.geometry.morphTargetsRelative?1:1-o,h=s*t;return r[h]=c,r.set(n,h+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Pr=new yi,yv=new Wt(.5,.5),Uc=new j,Oa=class{constructor(t=new Xi,e=new Xi,n=new Xi,s=new Xi,r=new Xi,o=new Xi){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let c=this.planes;return c[0].copy(t),c[1].copy(e),c[2].copy(n),c[3].copy(s),c[4].copy(r),c[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Yi,n=!1){let s=this.planes,r=t.elements,o=r[0],c=r[1],h=r[2],d=r[3],p=r[4],b=r[5],g=r[6],M=r[7],w=r[8],N=r[9],y=r[10],m=r[11],z=r[12],H=r[13],D=r[14],E=r[15];if(s[0].setComponents(d-o,M-p,m-w,E-z).normalize(),s[1].setComponents(d+o,M+p,m+w,E+z).normalize(),s[2].setComponents(d+c,M+b,m+N,E+H).normalize(),s[3].setComponents(d-c,M-b,m-N,E-H).normalize(),n)s[4].setComponents(h,g,y,D).normalize(),s[5].setComponents(d-h,M-g,m-y,E-D).normalize();else if(s[4].setComponents(d-h,M-g,m-y,E-D).normalize(),e===Yi)s[5].setComponents(d+h,M+g,m+y,E+D).normalize();else if(e===Ia)s[5].setComponents(h,g,y,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Pr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Pr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Pr)}intersectsSprite(t){Pr.center.set(0,0,0);let e=yv.distanceTo(t.center);return Pr.radius=.7071067811865476+e,Pr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Pr)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Uc.x=s.normal.x>0?t.max.x:t.min.x,Uc.y=s.normal.y>0?t.max.y:t.min.y,Uc.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Uc)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Or=class extends fs{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},ou=new j,lu=new j,u0=new Ze,Fo=new Nr,Oc=new yi,Kd=new j,h0=new j,cu=class extends Fn{constructor(t=new En,e=new Or){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)ou.fromBufferAttribute(e,s-1),lu.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=ou.distanceTo(lu);t.setAttribute("lineDistance",new wn(n,1))}else Me("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Oc.copy(n.boundingSphere),Oc.applyMatrix4(s),Oc.radius+=r,t.ray.intersectsSphere(Oc)===!1)return;u0.copy(s).invert(),Fo.copy(t.ray).applyMatrix4(u0);let c=r/((this.scale.x+this.scale.y+this.scale.z)/3),h=c*c,d=this.isLineSegments?2:1,p=n.index,g=n.attributes.position;if(p!==null){let M=Math.max(0,o.start),w=Math.min(p.count,o.start+o.count);for(let N=M,y=w-1;N<y;N+=d){let m=p.getX(N),z=p.getX(N+1),H=Fc(this,t,Fo,h,m,z,N);H&&e.push(H)}if(this.isLineLoop){let N=p.getX(w-1),y=p.getX(M),m=Fc(this,t,Fo,h,N,y,w-1);m&&e.push(m)}}else{let M=Math.max(0,o.start),w=Math.min(g.count,o.start+o.count);for(let N=M,y=w-1;N<y;N+=d){let m=Fc(this,t,Fo,h,N,N+1,N);m&&e.push(m)}if(this.isLineLoop){let N=Fc(this,t,Fo,h,w-1,M,w-1);N&&e.push(N)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let c=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=r}}}}};function Fc(i,t,e,n,s,r,o){let c=i.geometry.attributes.position;if(ou.fromBufferAttribute(c,s),lu.fromBufferAttribute(c,r),e.distanceSqToSegment(ou,lu,Kd,h0)>n)return;Kd.applyMatrix4(i.matrixWorld);let d=t.ray.origin.distanceTo(Kd);if(!(d<t.near||d>t.far))return{distance:d,point:h0.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var el=class extends cu{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},uu=class extends fs{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},d0=new Ze,uf=new Nr,Bc=new yi,kc=new j,Fr=class extends Fn{constructor(t=new En,e=new uu){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Bc.copy(n.boundingSphere),Bc.applyMatrix4(s),Bc.radius+=r,t.ray.intersectsSphere(Bc)===!1)return;d0.copy(s).invert(),uf.copy(t.ray).applyMatrix4(d0);let c=r/((this.scale.x+this.scale.y+this.scale.z)/3),h=c*c,d=n.index,b=n.attributes.position;if(d!==null){let g=Math.max(0,o.start),M=Math.min(d.count,o.start+o.count);for(let w=g,N=M;w<N;w++){let y=d.getX(w);kc.fromBufferAttribute(b,y),f0(kc,y,h,s,t,e,this)}}else{let g=Math.max(0,o.start),M=Math.min(b.count,o.start+o.count);for(let w=g,N=M;w<N;w++)kc.fromBufferAttribute(b,w),f0(kc,w,h,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let c=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=r}}}}};function f0(i,t,e,n,s,r,o){let c=uf.distanceSqToPoint(i);if(c<e){let h=new j;uf.closestPointToPoint(i,h),h.applyMatrix4(n);let d=s.ray.origin.distanceTo(h);if(d<s.near||d>s.far)return;r.push({distance:d,distanceToRay:Math.sqrt(c),point:h,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var nl=class extends xi{constructor(t=[],e=ur,n,s,r,o,c,h,d,p){super(t,e,n,s,r,o,c,h,d,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var sr=class extends xi{constructor(t,e,n=Ki,s,r,o,c=On,h=On,d,p=us,b=1){if(p!==us&&p!==dr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let g={width:t,height:e,depth:b};super(g,s,r,o,c,h,p,n,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Da(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},hu=class extends sr{constructor(t,e=Ki,n=ur,s,r,o=On,c=On,h,d=us){let p={width:t,height:t,depth:1},b=[p,p,p,p,p,p];super(t,t,e,n,s,r,o,c,h,d),this.image=b,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},il=class extends xi{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Fa=class i extends En{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let c=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let h=[],d=[],p=[],b=[],g=0,M=0;w("z","y","x",-1,-1,n,e,t,o,r,0),w("z","y","x",1,-1,n,e,-t,o,r,1),w("x","z","y",1,1,t,n,e,s,o,2),w("x","z","y",1,-1,t,n,-e,s,o,3),w("x","y","z",1,-1,t,e,n,s,r,4),w("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(h),this.setAttribute("position",new wn(d,3)),this.setAttribute("normal",new wn(p,3)),this.setAttribute("uv",new wn(b,2));function w(N,y,m,z,H,D,E,k,J,I,B){let Y=D/J,Z=E/I,ot=D/2,dt=E/2,tt=k/2,st=J+1,mt=I+1,_t=0,Ct=0,xt=new j;for(let Et=0;Et<mt;Et++){let Mt=Et*Z-dt;for(let zt=0;zt<st;zt++){let ne=zt*Y-ot;xt[N]=ne*z,xt[y]=Mt*H,xt[m]=tt,d.push(xt.x,xt.y,xt.z),xt[N]=0,xt[y]=0,xt[m]=k>0?1:-1,p.push(xt.x,xt.y,xt.z),b.push(zt/J),b.push(1-Et/I),_t+=1}}for(let Et=0;Et<I;Et++)for(let Mt=0;Mt<J;Mt++){let zt=g+Mt+st*Et,ne=g+Mt+st*(Et+1),je=g+(Mt+1)+st*(Et+1),Oe=g+(Mt+1)+st*Et;h.push(zt,ne,Oe),h.push(ne,je,Oe),Ct+=6}c.addGroup(M,Ct,B),M+=Ct,g+=_t}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var sl=class i extends En{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,c=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:c,thetaLength:h};let d=this;s=Math.floor(s),r=Math.floor(r);let p=[],b=[],g=[],M=[],w=0,N=[],y=n/2,m=0;z(),o===!1&&(t>0&&H(!0),e>0&&H(!1)),this.setIndex(p),this.setAttribute("position",new wn(b,3)),this.setAttribute("normal",new wn(g,3)),this.setAttribute("uv",new wn(M,2));function z(){let D=new j,E=new j,k=0,J=(e-t)/n;for(let I=0;I<=r;I++){let B=[],Y=I/r,Z=Y*(e-t)+t;for(let ot=0;ot<=s;ot++){let dt=ot/s,tt=dt*h+c,st=Math.sin(tt),mt=Math.cos(tt);E.x=Z*st,E.y=-Y*n+y,E.z=Z*mt,b.push(E.x,E.y,E.z),D.set(st,J,mt).normalize(),g.push(D.x,D.y,D.z),M.push(dt,1-Y),B.push(w++)}N.push(B)}for(let I=0;I<s;I++)for(let B=0;B<r;B++){let Y=N[B][I],Z=N[B+1][I],ot=N[B+1][I+1],dt=N[B][I+1];(t>0||B!==0)&&(p.push(Y,Z,dt),k+=3),(e>0||B!==r-1)&&(p.push(Z,ot,dt),k+=3)}d.addGroup(m,k,0),m+=k}function H(D){let E=w,k=new Wt,J=new j,I=0,B=D===!0?t:e,Y=D===!0?1:-1;for(let ot=1;ot<=s;ot++)b.push(0,y*Y,0),g.push(0,Y,0),M.push(.5,.5),w++;let Z=w;for(let ot=0;ot<=s;ot++){let tt=ot/s*h+c,st=Math.cos(tt),mt=Math.sin(tt);J.x=B*mt,J.y=y*Y,J.z=B*st,b.push(J.x,J.y,J.z),g.push(0,Y,0),k.x=st*.5+.5,k.y=mt*.5*Y+.5,M.push(k.x,k.y),w++}for(let ot=0;ot<s;ot++){let dt=E+ot,tt=Z+ot;D===!0?p.push(tt,tt+1,dt):p.push(tt+1,tt,dt),I+=3}d.addGroup(m,I,D===!0?1:2),m+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Ci=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Me("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let c=0,h=r-1,d;for(;c<=h;)if(s=Math.floor(c+(h-c)/2),d=n[s]-o,d<0)c=s+1;else if(d>0)h=s-1;else{h=s;break}if(s=h,n[s]===o)return s/(r-1);let p=n[s],g=n[s+1]-p,M=(o-p)/g;return(s+M)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),c=this.getPoint(r),h=e||(o.isVector2?new Wt:new j);return h.copy(c).sub(o).normalize(),h}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new j,s=[],r=[],o=[],c=new j,h=new Ze;for(let M=0;M<=t;M++){let w=M/t;s[M]=this.getTangentAt(w,new j)}r[0]=new j,o[0]=new j;let d=Number.MAX_VALUE,p=Math.abs(s[0].x),b=Math.abs(s[0].y),g=Math.abs(s[0].z);p<=d&&(d=p,n.set(1,0,0)),b<=d&&(d=b,n.set(0,1,0)),g<=d&&n.set(0,0,1),c.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],c),o[0].crossVectors(s[0],r[0]);for(let M=1;M<=t;M++){if(r[M]=r[M-1].clone(),o[M]=o[M-1].clone(),c.crossVectors(s[M-1],s[M]),c.length()>Number.EPSILON){c.normalize();let w=Math.acos(Ne(s[M-1].dot(s[M]),-1,1));r[M].applyMatrix4(h.makeRotationAxis(c,w))}o[M].crossVectors(s[M],r[M])}if(e===!0){let M=Math.acos(Ne(r[0].dot(r[t]),-1,1));M/=t,s[0].dot(c.crossVectors(r[0],r[t]))>0&&(M=-M);for(let w=1;w<=t;w++)r[w].applyMatrix4(h.makeRotationAxis(s[w],M*w)),o[w].crossVectors(s[w],r[w])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Ba=class extends Ci{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,c=!1,h=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=c,this.aRotation=h}getPoint(t,e=new Wt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let c=this.aStartAngle+t*r,h=this.aX+this.xRadius*Math.cos(c),d=this.aY+this.yRadius*Math.sin(c);if(this.aRotation!==0){let p=Math.cos(this.aRotation),b=Math.sin(this.aRotation),g=h-this.aX,M=d-this.aY;h=g*p-M*b+this.aX,d=g*b+M*p+this.aY}return n.set(h,d)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},du=class extends Ba{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Hf(){let i=0,t=0,e=0,n=0;function s(r,o,c,h){i=r,t=c,e=-3*r+3*o-2*c-h,n=2*r-2*o+c+h}return{initCatmullRom:function(r,o,c,h,d){s(o,c,d*(c-r),d*(h-o))},initNonuniformCatmullRom:function(r,o,c,h,d,p,b){let g=(o-r)/d-(c-r)/(d+p)+(c-o)/p,M=(c-o)/p-(h-o)/(p+b)+(h-c)/b;g*=p,M*=p,s(o,c,g,M)},calc:function(r){let o=r*r,c=o*r;return i+t*r+e*o+n*c}}}var p0=new j,m0=new j,Qd=new Hf,tf=new Hf,ef=new Hf,fu=class extends Ci{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new j){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,c=Math.floor(o),h=o-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/r)+1)*r:h===0&&c===r-1&&(c=r-2,h=1);let d,p;this.closed||c>0?d=s[(c-1)%r]:(m0.subVectors(s[0],s[1]).add(s[0]),d=m0);let b=s[c%r],g=s[(c+1)%r];if(this.closed||c+2<r?p=s[(c+2)%r]:(p0.subVectors(s[r-1],s[r-2]).add(s[r-1]),p=p0),this.curveType==="centripetal"||this.curveType==="chordal"){let M=this.curveType==="chordal"?.5:.25,w=Math.pow(d.distanceToSquared(b),M),N=Math.pow(b.distanceToSquared(g),M),y=Math.pow(g.distanceToSquared(p),M);N<1e-4&&(N=1),w<1e-4&&(w=N),y<1e-4&&(y=N),Qd.initNonuniformCatmullRom(d.x,b.x,g.x,p.x,w,N,y),tf.initNonuniformCatmullRom(d.y,b.y,g.y,p.y,w,N,y),ef.initNonuniformCatmullRom(d.z,b.z,g.z,p.z,w,N,y)}else this.curveType==="catmullrom"&&(Qd.initCatmullRom(d.x,b.x,g.x,p.x,this.tension),tf.initCatmullRom(d.y,b.y,g.y,p.y,this.tension),ef.initCatmullRom(d.z,b.z,g.z,p.z,this.tension));return n.set(Qd.calc(h),tf.calc(h),ef.calc(h)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new j().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function g0(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,c=i*i,h=i*c;return(2*e-2*n+r+o)*h+(-3*e+3*n-2*r-o)*c+r*i+e}function Sv(i,t){let e=1-i;return e*e*t}function bv(i,t){return 2*(1-i)*i*t}function Mv(i,t){return i*i*t}function zo(i,t,e,n){return Sv(i,t)+bv(i,e)+Mv(i,n)}function wv(i,t){let e=1-i;return e*e*e*t}function Ev(i,t){let e=1-i;return 3*e*e*i*t}function Tv(i,t){return 3*(1-i)*i*i*t}function Av(i,t){return i*i*i*t}function Vo(i,t,e,n,s){return wv(i,t)+Ev(i,e)+Tv(i,n)+Av(i,s)}var rl=class extends Ci{constructor(t=new Wt,e=new Wt,n=new Wt,s=new Wt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Wt){let n=e,s=this.v0,r=this.v1,o=this.v2,c=this.v3;return n.set(Vo(t,s.x,r.x,o.x,c.x),Vo(t,s.y,r.y,o.y,c.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},pu=class extends Ci{constructor(t=new j,e=new j,n=new j,s=new j){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new j){let n=e,s=this.v0,r=this.v1,o=this.v2,c=this.v3;return n.set(Vo(t,s.x,r.x,o.x,c.x),Vo(t,s.y,r.y,o.y,c.y),Vo(t,s.z,r.z,o.z,c.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},al=class extends Ci{constructor(t=new Wt,e=new Wt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Wt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Wt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},mu=class extends Ci{constructor(t=new j,e=new j){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new j){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new j){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ol=class extends Ci{constructor(t=new Wt,e=new Wt,n=new Wt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Wt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(zo(t,s.x,r.x,o.x),zo(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},gu=class extends Ci{constructor(t=new j,e=new j,n=new j){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new j){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(zo(t,s.x,r.x,o.x),zo(t,s.y,r.y,o.y),zo(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ll=class extends Ci{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Wt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),c=r-o,h=s[o===0?o:o-1],d=s[o],p=s[o>s.length-2?s.length-1:o+1],b=s[o>s.length-3?s.length-1:o+2];return n.set(g0(c,h.x,d.x,p.x,b.x),g0(c,h.y,d.y,p.y,b.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Wt().fromArray(s))}return this}},hf=Object.freeze({__proto__:null,ArcCurve:du,CatmullRomCurve3:fu,CubicBezierCurve:rl,CubicBezierCurve3:pu,EllipseCurve:Ba,LineCurve:al,LineCurve3:mu,QuadraticBezierCurve:ol,QuadraticBezierCurve3:gu,SplineCurve:ll}),_u=class extends Ci{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new hf[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,c=this.curves[r],h=c.getLength(),d=h===0?0:1-o/h;return c.getPointAt(d,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],c=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,h=o.getPoints(c);for(let d=0;d<h.length;d++){let p=h[d];n&&n.equals(p)||(e.push(p),n=p)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new hf[s.type]().fromJSON(s))}return this}},Br=class extends _u{constructor(t){super(),this.type="Path",this.currentPoint=new Wt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new al(this.currentPoint.clone(),new Wt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new ol(this.currentPoint.clone(),new Wt(t,e),new Wt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let c=new rl(this.currentPoint.clone(),new Wt(t,e),new Wt(n,s),new Wt(r,o));return this.curves.push(c),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new ll(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absarc(t+c,e+h,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,c,h){let d=this.currentPoint.x,p=this.currentPoint.y;return this.absellipse(t+d,e+p,n,s,r,o,c,h),this}absellipse(t,e,n,s,r,o,c,h){let d=new Ba(t,e,n,s,r,o,c,h);if(this.curves.length>0){let b=d.getPoint(0);b.equals(this.currentPoint)||this.lineTo(b.x,b.y)}this.curves.push(d);let p=d.getPoint(1);return this.currentPoint.copy(p),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},ka=class extends Br{constructor(t){super(t),this.uuid=cs(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Br().fromJSON(s))}return this}};function Cv(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=pg(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let c,h,d;if(n&&(r=Dv(i,t,r,e)),i.length>80*e){c=i[0],h=i[1];let p=c,b=h;for(let g=e;g<s;g+=e){let M=i[g],w=i[g+1];M<c&&(c=M),w<h&&(h=w),M>p&&(p=M),w>b&&(b=w)}d=Math.max(p-c,b-h),d=d!==0?32767/d:0}return cl(r,o,e,c,h,d,0),o}function pg(i,t,e,n,s){let r;if(s===Gv(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=_0(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=_0(o/n|0,i[o],i[o+1],r);return r&&$a(r,r.next)&&(hl(r),r=r.next),r}function kr(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&($a(e,e.next)||Sn(e.prev,e,e.next)===0)){if(hl(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function cl(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Bv(i,n,s,r);let c=i;for(;i.prev!==i.next;){let h=i.prev,d=i.next;if(r?Iv(i,n,s,r):Rv(i)){t.push(h.i,i.i,d.i),hl(i),i=d.next,c=d.next;continue}if(i=d,i===c){o?o===1?(i=Pv(kr(i),t),cl(i,t,e,n,s,r,2)):o===2&&Lv(i,t,e,n,s,r):cl(kr(i),t,e,n,s,r,1);break}}}function Rv(i){let t=i.prev,e=i,n=i.next;if(Sn(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,c=t.y,h=e.y,d=n.y,p=Math.min(s,r,o),b=Math.min(c,h,d),g=Math.max(s,r,o),M=Math.max(c,h,d),w=n.next;for(;w!==t;){if(w.x>=p&&w.x<=g&&w.y>=b&&w.y<=M&&Bo(s,c,r,h,o,d,w.x,w.y)&&Sn(w.prev,w,w.next)>=0)return!1;w=w.next}return!0}function Iv(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Sn(s,r,o)>=0)return!1;let c=s.x,h=r.x,d=o.x,p=s.y,b=r.y,g=o.y,M=Math.min(c,h,d),w=Math.min(p,b,g),N=Math.max(c,h,d),y=Math.max(p,b,g),m=df(M,w,t,e,n),z=df(N,y,t,e,n),H=i.prevZ,D=i.nextZ;for(;H&&H.z>=m&&D&&D.z<=z;){if(H.x>=M&&H.x<=N&&H.y>=w&&H.y<=y&&H!==s&&H!==o&&Bo(c,p,h,b,d,g,H.x,H.y)&&Sn(H.prev,H,H.next)>=0||(H=H.prevZ,D.x>=M&&D.x<=N&&D.y>=w&&D.y<=y&&D!==s&&D!==o&&Bo(c,p,h,b,d,g,D.x,D.y)&&Sn(D.prev,D,D.next)>=0))return!1;D=D.nextZ}for(;H&&H.z>=m;){if(H.x>=M&&H.x<=N&&H.y>=w&&H.y<=y&&H!==s&&H!==o&&Bo(c,p,h,b,d,g,H.x,H.y)&&Sn(H.prev,H,H.next)>=0)return!1;H=H.prevZ}for(;D&&D.z<=z;){if(D.x>=M&&D.x<=N&&D.y>=w&&D.y<=y&&D!==s&&D!==o&&Bo(c,p,h,b,d,g,D.x,D.y)&&Sn(D.prev,D,D.next)>=0)return!1;D=D.nextZ}return!0}function Pv(i,t){let e=i;do{let n=e.prev,s=e.next.next;!$a(n,s)&&gg(n,e,e.next,s)&&ul(n,s)&&ul(s,n)&&(t.push(n.i,e.i,s.i),hl(e),hl(e.next),e=i=s),e=e.next}while(e!==i);return kr(e)}function Lv(i,t,e,n,s,r){let o=i;do{let c=o.next.next;for(;c!==o.prev;){if(o.i!==c.i&&zv(o,c)){let h=_g(o,c);o=kr(o,o.next),h=kr(h,h.next),cl(o,t,e,n,s,r,0),cl(h,t,e,n,s,r,0);return}c=c.next}o=o.next}while(o!==i)}function Dv(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let c=t[r]*n,h=r<o-1?t[r+1]*n:i.length,d=pg(i,c,h,n,!1);d===d.next&&(d.steiner=!0),s.push($v(d))}s.sort(Nv);for(let r=0;r<s.length;r++)e=Uv(s[r],e);return e}function Nv(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Uv(i,t){let e=Ov(i,t);if(!e)return t;let n=_g(e,i);return kr(n,n.next),kr(e,e.next)}function Ov(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if($a(i,e))return e;do{if($a(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let b=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(b<=n&&b>r&&(r=b,o=e.x<e.next.x?e:e.next,b===n))return o}e=e.next}while(e!==t);if(!o)return null;let c=o,h=o.x,d=o.y,p=1/0;e=o;do{if(n>=e.x&&e.x>=h&&n!==e.x&&mg(s<d?n:r,s,h,d,s<d?r:n,s,e.x,e.y)){let b=Math.abs(s-e.y)/(n-e.x);ul(e,i)&&(b<p||b===p&&(e.x>o.x||e.x===o.x&&Fv(o,e)))&&(o=e,p=b)}e=e.next}while(e!==c);return o}function Fv(i,t){return Sn(i.prev,i,t.prev)<0&&Sn(t.next,i,i.next)<0}function Bv(i,t,e,n){let s=i;do s.z===0&&(s.z=df(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,kv(s)}function kv(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,c=0;for(let d=0;d<e&&(c++,o=o.nextZ,!!o);d++);let h=e;for(;c>0||h>0&&o;)c!==0&&(h===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,c--):(s=o,o=o.nextZ,h--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function df(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function $v(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function mg(i,t,e,n,s,r,o,c){return(s-o)*(t-c)>=(i-o)*(r-c)&&(i-o)*(n-c)>=(e-o)*(t-c)&&(e-o)*(r-c)>=(s-o)*(n-c)}function Bo(i,t,e,n,s,r,o,c){return!(i===o&&t===c)&&mg(i,t,e,n,s,r,o,c)}function zv(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Vv(i,t)&&(ul(i,t)&&ul(t,i)&&Hv(i,t)&&(Sn(i.prev,i,t.prev)||Sn(i,t.prev,t))||$a(i,t)&&Sn(i.prev,i,i.next)>0&&Sn(t.prev,t,t.next)>0)}function Sn(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function $a(i,t){return i.x===t.x&&i.y===t.y}function gg(i,t,e,n){let s=zc(Sn(i,t,e)),r=zc(Sn(i,t,n)),o=zc(Sn(e,n,i)),c=zc(Sn(e,n,t));return!!(s!==r&&o!==c||s===0&&$c(i,e,t)||r===0&&$c(i,n,t)||o===0&&$c(e,i,n)||c===0&&$c(e,t,n))}function $c(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function zc(i){return i>0?1:i<0?-1:0}function Vv(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&gg(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function ul(i,t){return Sn(i.prev,i,i.next)<0?Sn(i,t,i.next)>=0&&Sn(i,i.prev,t)>=0:Sn(i,t,i.prev)<0||Sn(i,i.next,t)<0}function Hv(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function _g(i,t){let e=ff(i.i,i.x,i.y),n=ff(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function _0(i,t,e,n){let s=ff(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function hl(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ff(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Gv(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var pf=class{static triangulate(t,e,n=2){return Cv(t,e,n)}},Lr=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];x0(t),v0(n,t);let o=t.length;e.forEach(x0);for(let h=0;h<e.length;h++)s.push(o),o+=e[h].length,v0(n,e[h]);let c=pf.triangulate(n,s);for(let h=0;h<c.length;h+=3)r.push(c.slice(h,h+3));return r}};function x0(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function v0(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var dl=class i extends En{constructor(t=new ka([new Wt(.5,.5),new Wt(-.5,.5),new Wt(-.5,-.5),new Wt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let c=0,h=t.length;c<h;c++){let d=t[c];o(d)}this.setAttribute("position",new wn(s,3)),this.setAttribute("uv",new wn(r,2)),this.computeVertexNormals();function o(c){let h=[],d=e.curveSegments!==void 0?e.curveSegments:12,p=e.steps!==void 0?e.steps:1,b=e.depth!==void 0?e.depth:1,g=e.bevelEnabled!==void 0?e.bevelEnabled:!0,M=e.bevelThickness!==void 0?e.bevelThickness:.2,w=e.bevelSize!==void 0?e.bevelSize:M-.1,N=e.bevelOffset!==void 0?e.bevelOffset:0,y=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,z=e.UVGenerator!==void 0?e.UVGenerator:Wv,H,D=!1,E,k,J,I;if(m){H=m.getSpacedPoints(p),D=!0,g=!1;let rt=m.isCatmullRomCurve3?m.closed:!1;E=m.computeFrenetFrames(p,rt),k=new j,J=new j,I=new j}g||(y=0,M=0,w=0,N=0);let B=c.extractPoints(d),Y=B.shape,Z=B.holes;if(!Lr.isClockWise(Y)){Y=Y.reverse();for(let rt=0,Rt=Z.length;rt<Rt;rt++){let V=Z[rt];Lr.isClockWise(V)&&(Z[rt]=V.reverse())}}function dt(rt){let V=10000000000000001e-36,It=rt[0];for(let $t=1;$t<=rt.length;$t++){let ce=$t%rt.length,pe=rt[ce],Se=pe.x-It.x,Re=pe.y-It.y,q=Se*Se+Re*Re,Qe=Math.max(Math.abs(pe.x),Math.abs(pe.y),Math.abs(It.x),Math.abs(It.y)),Fe=V*Qe*Qe;if(q<=Fe){rt.splice(ce,1),$t--;continue}It=pe}}dt(Y),Z.forEach(dt);let tt=Z.length,st=Y;for(let rt=0;rt<tt;rt++){let Rt=Z[rt];Y=Y.concat(Rt)}function mt(rt,Rt,V){return Rt||we("ExtrudeGeometry: vec does not exist"),rt.clone().addScaledVector(Rt,V)}let _t=Y.length;function Ct(rt,Rt,V){let It,$t,ce,pe=rt.x-Rt.x,Se=rt.y-Rt.y,Re=V.x-rt.x,q=V.y-rt.y,Qe=pe*pe+Se*Se,Fe=pe*q-Se*Re;if(Math.abs(Fe)>Number.EPSILON){let F=Math.sqrt(Qe),T=Math.sqrt(Re*Re+q*q),at=Rt.x-Se/F,lt=Rt.y+pe/F,gt=V.x-q/T,Dt=V.y+Re/T,Ht=((gt-at)*q-(Dt-lt)*Re)/(pe*q-Se*Re);It=at+pe*Ht-rt.x,$t=lt+Se*Ht-rt.y;let pt=It*It+$t*$t;if(pt<=2)return new Wt(It,$t);ce=Math.sqrt(pt/2)}else{let F=!1;pe>Number.EPSILON?Re>Number.EPSILON&&(F=!0):pe<-Number.EPSILON?Re<-Number.EPSILON&&(F=!0):Math.sign(Se)===Math.sign(q)&&(F=!0),F?(It=-Se,$t=pe,ce=Math.sqrt(Qe)):(It=pe,$t=Se,ce=Math.sqrt(Qe/2))}return new Wt(It/ce,$t/ce)}let xt=[];for(let rt=0,Rt=st.length,V=Rt-1,It=rt+1;rt<Rt;rt++,V++,It++)V===Rt&&(V=0),It===Rt&&(It=0),xt[rt]=Ct(st[rt],st[V],st[It]);let Et=[],Mt,zt=xt.concat();for(let rt=0,Rt=tt;rt<Rt;rt++){let V=Z[rt];Mt=[];for(let It=0,$t=V.length,ce=$t-1,pe=It+1;It<$t;It++,ce++,pe++)ce===$t&&(ce=0),pe===$t&&(pe=0),Mt[It]=Ct(V[It],V[ce],V[pe]);Et.push(Mt),zt=zt.concat(Mt)}let ne;if(y===0)ne=Lr.triangulateShape(st,Z);else{let rt=[],Rt=[];for(let V=0;V<y;V++){let It=V/y,$t=M*Math.cos(It*Math.PI/2),ce=w*Math.sin(It*Math.PI/2)+N;for(let pe=0,Se=st.length;pe<Se;pe++){let Re=mt(st[pe],xt[pe],ce);Pt(Re.x,Re.y,-$t),It===0&&rt.push(Re)}for(let pe=0,Se=tt;pe<Se;pe++){let Re=Z[pe];Mt=Et[pe];let q=[];for(let Qe=0,Fe=Re.length;Qe<Fe;Qe++){let F=mt(Re[Qe],Mt[Qe],ce);Pt(F.x,F.y,-$t),It===0&&q.push(F)}It===0&&Rt.push(q)}}ne=Lr.triangulateShape(rt,Rt)}let je=ne.length,Oe=w+N;for(let rt=0;rt<_t;rt++){let Rt=g?mt(Y[rt],zt[rt],Oe):Y[rt];D?(J.copy(E.normals[0]).multiplyScalar(Rt.x),k.copy(E.binormals[0]).multiplyScalar(Rt.y),I.copy(H[0]).add(J).add(k),Pt(I.x,I.y,I.z)):Pt(Rt.x,Rt.y,0)}for(let rt=1;rt<=p;rt++)for(let Rt=0;Rt<_t;Rt++){let V=g?mt(Y[Rt],zt[Rt],Oe):Y[Rt];D?(J.copy(E.normals[rt]).multiplyScalar(V.x),k.copy(E.binormals[rt]).multiplyScalar(V.y),I.copy(H[rt]).add(J).add(k),Pt(I.x,I.y,I.z)):Pt(V.x,V.y,b/p*rt)}for(let rt=y-1;rt>=0;rt--){let Rt=rt/y,V=M*Math.cos(Rt*Math.PI/2),It=w*Math.sin(Rt*Math.PI/2)+N;for(let $t=0,ce=st.length;$t<ce;$t++){let pe=mt(st[$t],xt[$t],It);Pt(pe.x,pe.y,b+V)}for(let $t=0,ce=Z.length;$t<ce;$t++){let pe=Z[$t];Mt=Et[$t];for(let Se=0,Re=pe.length;Se<Re;Se++){let q=mt(pe[Se],Mt[Se],It);D?Pt(q.x,q.y+H[p-1].y,H[p-1].x+V):Pt(q.x,q.y,b+V)}}}We(),vt();function We(){let rt=s.length/3;if(g){let Rt=0,V=_t*Rt;for(let It=0;It<je;It++){let $t=ne[It];fe($t[2]+V,$t[1]+V,$t[0]+V)}Rt=p+y*2,V=_t*Rt;for(let It=0;It<je;It++){let $t=ne[It];fe($t[0]+V,$t[1]+V,$t[2]+V)}}else{for(let Rt=0;Rt<je;Rt++){let V=ne[Rt];fe(V[2],V[1],V[0])}for(let Rt=0;Rt<je;Rt++){let V=ne[Rt];fe(V[0]+_t*p,V[1]+_t*p,V[2]+_t*p)}}n.addGroup(rt,s.length/3-rt,0)}function vt(){let rt=s.length/3,Rt=0;yt(st,Rt),Rt+=st.length;for(let V=0,It=Z.length;V<It;V++){let $t=Z[V];yt($t,Rt),Rt+=$t.length}n.addGroup(rt,s.length/3-rt,1)}function yt(rt,Rt){let V=rt.length;for(;--V>=0;){let It=V,$t=V-1;$t<0&&($t=rt.length-1);for(let ce=0,pe=p+y*2;ce<pe;ce++){let Se=_t*ce,Re=_t*(ce+1),q=Rt+It+Se,Qe=Rt+$t+Se,Fe=Rt+$t+Re,F=Rt+It+Re;Kt(q,Qe,Fe,F)}}}function Pt(rt,Rt,V){h.push(rt),h.push(Rt),h.push(V)}function fe(rt,Rt,V){_e(rt),_e(Rt),_e(V);let It=s.length/3,$t=z.generateTopUV(n,s,It-3,It-2,It-1);Qt($t[0]),Qt($t[1]),Qt($t[2])}function Kt(rt,Rt,V,It){_e(rt),_e(Rt),_e(It),_e(Rt),_e(V),_e(It);let $t=s.length/3,ce=z.generateSideWallUV(n,s,$t-6,$t-3,$t-2,$t-1);Qt(ce[0]),Qt(ce[1]),Qt(ce[3]),Qt(ce[1]),Qt(ce[2]),Qt(ce[3])}function _e(rt){s.push(h[rt*3+0]),s.push(h[rt*3+1]),s.push(h[rt*3+2])}function Qt(rt){r.push(rt.x),r.push(rt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Xv(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let c=e[t.shapes[r]];n.push(c)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new hf[s.type]().fromJSON(s)),new i(n,t.options)}},Wv={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],c=t[n*3],h=t[n*3+1],d=t[s*3],p=t[s*3+1];return[new Wt(r,o),new Wt(c,h),new Wt(d,p)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],c=t[e*3+1],h=t[e*3+2],d=t[n*3],p=t[n*3+1],b=t[n*3+2],g=t[s*3],M=t[s*3+1],w=t[s*3+2],N=t[r*3],y=t[r*3+1],m=t[r*3+2];return Math.abs(c-p)<Math.abs(o-d)?[new Wt(o,1-h),new Wt(d,1-b),new Wt(g,1-w),new Wt(N,1-m)]:[new Wt(c,1-h),new Wt(p,1-b),new Wt(M,1-w),new Wt(y,1-m)]}};function Xv(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var fl=class i extends En{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,c=Math.floor(n),h=Math.floor(s),d=c+1,p=h+1,b=t/c,g=e/h,M=[],w=[],N=[],y=[];for(let m=0;m<p;m++){let z=m*g-o;for(let H=0;H<d;H++){let D=H*b-r;w.push(D,-z,0),N.push(0,0,1),y.push(H/c),y.push(1-m/h)}}for(let m=0;m<h;m++)for(let z=0;z<c;z++){let H=z+d*m,D=z+d*(m+1),E=z+1+d*(m+1),k=z+1+d*m;M.push(H,D,k),M.push(D,E,k)}this.setIndex(M),this.setAttribute("position",new wn(w,3)),this.setAttribute("normal",new wn(N,3)),this.setAttribute("uv",new wn(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var pl=class extends En{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],n=new Set,s=new j,r=new j;if(t.index!==null){let o=t.attributes.position,c=t.index,h=t.groups;h.length===0&&(h=[{start:0,count:c.count,materialIndex:0}]);for(let d=0,p=h.length;d<p;++d){let b=h[d],g=b.start,M=b.count;for(let w=g,N=g+M;w<N;w+=3)for(let y=0;y<3;y++){let m=c.getX(w+y),z=c.getX(w+(y+1)%3);s.fromBufferAttribute(o,m),r.fromBufferAttribute(o,z),y0(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{let o=t.attributes.position;for(let c=0,h=o.count/3;c<h;c++)for(let d=0;d<3;d++){let p=3*c+d,b=3*c+(d+1)%3;s.fromBufferAttribute(o,p),r.fromBufferAttribute(o,b),y0(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new wn(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function y0(i,t,e){let n=`${i.x},${i.y},${i.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${i.x},${i.y},${i.z}`;return e.has(n)===!0||e.has(s)===!0?!1:(e.add(n),e.add(s),!0)}function Vr(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(S0(s))s.isRenderTargetTexture?(Me("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(S0(s[0])){let r=[];for(let o=0,c=s.length;o<c;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function ei(i){let t={};for(let e=0;e<i.length;e++){let n=Vr(i[e]);for(let s in n)t[s]=n[s]}return t}function S0(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function qv(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Gf(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ye.workingColorSpace}var Dl={clone:Vr,merge:ei},Yv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,kn=class extends fs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yv,this.fragmentShader=Jv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Vr(t.uniforms),this.uniformsGroups=qv(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new ye().setHex(s.value);break;case"v2":this.uniforms[n].value=new Wt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new j().fromArray(s.value);break;case"v4":this.uniforms[n].value=new on().fromArray(s.value);break;case"m3":this.uniforms[n].value=new De().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Ze().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},xu=class extends kn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var ml=class extends fs{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sh,this.normalScale=new Wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ks,this.combine=Nu,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},vu=class extends fs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},yu=class extends fs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Ma(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function nf(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var rr=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let c=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===c)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let c=e[1];t<c&&(n=2,r=c);for(let h=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===h)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let c=n+o>>>1;t<e[c]?o=c:n=c+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Su=class extends rr{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:of,endingEnd:of}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,c=s[r],h=s[o];if(c===void 0)switch(this.getSettings_().endingStart){case lf:r=t,c=2*e-n;break;case cf:r=s.length-2,c=e+s[r]-s[r+1];break;default:r=t,c=n}if(h===void 0)switch(this.getSettings_().endingEnd){case lf:o=t,h=2*n-e;break;case cf:o=1,h=n+s[1]-s[0];break;default:o=t-1,h=e}let d=(n-e)*.5,p=this.valueSize;this._weightPrev=d/(e-c),this._weightNext=d/(h-n),this._offsetPrev=r*p,this._offsetNext=o*p}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,c=this.valueSize,h=t*c,d=h-c,p=this._offsetPrev,b=this._offsetNext,g=this._weightPrev,M=this._weightNext,w=(n-e)/(s-e),N=w*w,y=N*w,m=-g*y+2*g*N-g*w,z=(1+g)*y+(-1.5-2*g)*N+(-.5+g)*w+1,H=(-1-M)*y+(1.5+M)*N+.5*w,D=M*y-M*N;for(let E=0;E!==c;++E)r[E]=m*o[p+E]+z*o[d+E]+H*o[h+E]+D*o[b+E];return r}},bu=class extends rr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,c=this.valueSize,h=t*c,d=h-c,p=(n-e)/(s-e),b=1-p;for(let g=0;g!==c;++g)r[g]=o[d+g]*b+o[h+g]*p;return r}},Mu=class extends rr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},wu=class extends rr{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,c=this.valueSize,h=t*c,d=h-c,p=this.inTangents,b=this.outTangents;if(!p||!b){let w=(n-e)/(s-e),N=1-w;for(let y=0;y!==c;++y)r[y]=o[d+y]*N+o[h+y]*w;return r}let g=c*2,M=t-1;for(let w=0;w!==c;++w){let N=o[d+w],y=o[h+w],m=M*g+w*2,z=b[m],H=b[m+1],D=t*g+w*2,E=p[D],k=p[D+1],J=jv(n,e,z,E,s);r[w]=xg(J,N,H,k,y)}return r}};function xg(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Zv(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function jv(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let c=xg(r,t,e,n,s)-i;if(Math.abs(c)<1e-10)break;let h=Zv(r,t,e,n,s);if(Math.abs(h)<1e-10)break;r=Math.max(0,Math.min(1,r-c/h))}return r}var Ri=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ma(e,this.TimeBufferType),this.values=Ma(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ma(t.times,Array),values:Ma(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),nf(t.settings)&&(n.settings={inTangents:Ma(t.settings.inTangents,Array),outTangents:Ma(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Mu(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new bu(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Su(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new wu(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Ho:e=this.InterpolantFactoryMethodDiscrete;break;case nu:e=this.InterpolantFactoryMethodLinear;break;case Wc:e=this.InterpolantFactoryMethodSmooth;break;case af:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Me("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ho;case this.InterpolantFactoryMethodLinear:return nu;case this.InterpolantFactoryMethodSmooth:return Wc;case this.InterpolantFactoryMethodBezier:return af}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;nf(this.settings)&&(b0(this.settings.inTangents,t),b0(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let c=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*c,o*c)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(we("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(we("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let c=0;c!==r;c++){let h=n[c];if(typeof h=="number"&&isNaN(h)){we("KeyframeTrack: Time is not a valid number.",this,c,h),t=!1;break}if(o!==null&&o>h){we("KeyframeTrack: Out of order keys.",this,c,h,o),t=!1;break}o=h}if(s!==void 0&&kx(s))for(let c=0,h=s.length;c!==h;++c){let d=s[c];if(isNaN(d)){we("KeyframeTrack: Value is not a valid number.",this,c,d),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Wc,r=t.length-1,o=1;for(let c=1;c<r;++c){let h=!1,d=t[c],p=t[c+1];if(d!==p&&(c!==1||d!==t[0]))if(s)h=!0;else{let b=c*n,g=b-n,M=b+n;for(let w=0;w!==n;++w){let N=e[b+w];if(N!==e[g+w]||N!==e[M+w]){h=!0;break}}}if(h){if(c!==o){t[o]=t[c];let b=c*n,g=o*n;for(let M=0;M!==n;++M)e[g+M]=e[b+M]}++o}}if(r>0){t[o]=t[r];for(let c=r*n,h=o*n,d=0;d!==n;++d)e[h+d]=e[c+d];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,nf(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function b0(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Ri.prototype.ValueTypeName="";Ri.prototype.TimeBufferType=Float32Array;Ri.prototype.ValueBufferType=Float32Array;Ri.prototype.DefaultInterpolation=nu;var ar=class extends Ri{constructor(t,e,n){super(t,e,n)}};ar.prototype.ValueTypeName="bool";ar.prototype.ValueBufferType=Array;ar.prototype.DefaultInterpolation=Ho;ar.prototype.InterpolantFactoryMethodLinear=void 0;ar.prototype.InterpolantFactoryMethodSmooth=void 0;var Eu=class extends Ri{constructor(t,e,n,s){super(t,e,n,s)}};Eu.prototype.ValueTypeName="color";var Tu=class extends Ri{constructor(t,e,n,s){super(t,e,n,s)}};Tu.prototype.ValueTypeName="number";var Au=class extends rr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,c=this.valueSize,h=(n-e)/(s-e),d=t*c;for(let p=d+c;d!==p;d+=4)ds.slerpFlat(r,0,o,d-c,o,d,h);return r}},gl=class extends Ri{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Au(this.times,this.values,this.getValueSize(),t)}};gl.prototype.ValueTypeName="quaternion";gl.prototype.InterpolantFactoryMethodSmooth=void 0;var or=class extends Ri{constructor(t,e,n){super(t,e,n)}};or.prototype.ValueTypeName="string";or.prototype.ValueBufferType=Array;or.prototype.DefaultInterpolation=Ho;or.prototype.InterpolantFactoryMethodLinear=void 0;or.prototype.InterpolantFactoryMethodSmooth=void 0;var Cu=class extends Ri{constructor(t,e,n,s){super(t,e,n,s)}};Cu.prototype.ValueTypeName="vector";var Ru=class{constructor(t,e,n){let s=this,r=!1,o=0,c=0,h,d=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(p){c++,r===!1&&s.onStart!==void 0&&s.onStart(p,o,c),r=!0},this.itemEnd=function(p){o++,s.onProgress!==void 0&&s.onProgress(p,o,c),o===c&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(p){s.onError!==void 0&&s.onError(p)},this.resolveURL=function(p){return p=p.normalize("NFC"),h?h(p):p},this.setURLModifier=function(p){return h=p,this},this.addHandler=function(p,b){return d.push(p,b),this},this.removeHandler=function(p){let b=d.indexOf(p);return b!==-1&&d.splice(b,2),this},this.getHandler=function(p){for(let b=0,g=d.length;b<g;b+=2){let M=d[b],w=d[b+1];if(M.global&&(M.lastIndex=0),M.test(p))return w}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},vg=new Ru,Iu=class{constructor(t){this.manager=t!==void 0?t:vg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Iu.DEFAULT_MATERIAL_NAME="__DEFAULT";var _l=class extends Fn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ye(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},xl=class extends _l{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Fn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ye(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},sf=new Ze,M0=new j,w0=new j,Pu=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Wt(512,512),this.mapType=Si,this.map=null,this.mapPass=null,this.matrix=new Ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Oa,this._frameExtents=new Wt(1,1),this._viewportCount=1,this._viewports=[new on(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;M0.setFromMatrixPosition(t.matrixWorld),e.position.copy(M0),w0.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(w0),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){sf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(sf,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,c=s?s.w/r.y:1,h=s?s.x/r.x:0,d=s?s.y/r.y:0;t.coordinateSystem===Ia||t.reversedDepth?e.set(.5*o,0,0,.5*o+h,0,.5*c,0,.5*c+d,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+h,0,.5*c,0,.5*c+d,0,0,.5,.5,0,0,0,1),e.multiply(sf)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Vc=new j,Hc=new ds,os=new j,vl=class extends Fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ze,this.projectionMatrix=new Ze,this.projectionMatrixInverse=new Ze,this.coordinateSystem=Yi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Vc,Hc,os),os.x===1&&os.y===1&&os.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vc,Hc,os.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Vc,Hc,os),os.x===1&&os.y===1&&os.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vc,Hc,os.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},nr=new j,E0=new Wt,T0=new Wt,ti=class extends vl{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=La*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ko*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return La*2*Math.atan(Math.tan(ko*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){nr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(nr.x,nr.y).multiplyScalar(-t/nr.z),nr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(nr.x,nr.y).multiplyScalar(-t/nr.z)}getViewSize(t,e){return this.getViewBounds(t,E0,T0),e.subVectors(T0,E0)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ko*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let h=o.fullWidth,d=o.fullHeight;r+=o.offsetX*s/h,e-=o.offsetY*n/d,s*=o.width/h,n*=o.height/d}let c=this.filmOffset;c!==0&&(r+=t*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var za=class extends vl{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,c=s+e,h=s-e;if(this.view!==null&&this.view.enabled){let d=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=d*this.view.offsetX,o=r+d*this.view.width,c-=p*this.view.offsetY,h=c-p*this.view.height}this.projectionMatrix.makeOrthographic(r,o,c,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},mf=class extends Pu{constructor(){super(new za(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},yl=class extends _l{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Fn.DEFAULT_UP),this.updateMatrix(),this.target=new Fn,this.shadow=new mf}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Sl=class extends En{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var wa=-90,Ea=1,Lu=class extends Fn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new ti(wa,Ea,t,e);s.layers=this.layers,this.add(s);let r=new ti(wa,Ea,t,e);r.layers=this.layers,this.add(r);let o=new ti(wa,Ea,t,e);o.layers=this.layers,this.add(o);let c=new ti(wa,Ea,t,e);c.layers=this.layers,this.add(c);let h=new ti(wa,Ea,t,e);h.layers=this.layers,this.add(h);let d=new ti(wa,Ea,t,e);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,c,h]=e;for(let d of e)this.remove(d);if(t===Yi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(t===Ia)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let d of e)this.add(d),d.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,c,h,d,p]=this.children,b=t.getRenderTarget(),g=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),w=t.xr.enabled;t.xr.enabled=!1;let N=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let y=!1;t.isWebGLRenderer===!0?y=t.state.buffers.depth.getReversed():y=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,3,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(n,4,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,d),n.texture.generateMipmaps=N,t.setRenderTarget(n,5,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,p),t.setRenderTarget(b,g,M),t.xr.enabled=w,n.texture.needsPMREMUpdate=!0}},Du=class extends ti{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Wf="\\[\\]\\.:\\/",Kv=new RegExp("["+Wf+"]","g"),Xf="[^"+Wf+"]",Qv="[^"+Wf.replace("\\.","")+"]",ty=/((?:WC+[\/:])*)/.source.replace("WC",Xf),ey=/(WCOD+)?/.source.replace("WCOD",Qv),ny=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Xf),iy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Xf),sy=new RegExp("^"+ty+ey+ny+iy+"$"),ry=["material","materials","bones","map"],gf=class{constructor(t,e,n){let s=n||_n.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},_n=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Kv,"")}static parseTrackName(t){let e=sy.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);ry.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let c=r[o];if(c.name===e||c.uuid===e)return c;let h=n(c.children);if(h)return h}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Me("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let d=e.objectIndex;switch(n){case"materials":if(!t.material){we("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){we("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){we("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let p=0;p<t.length;p++)if(t[p].name===d){d=p;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){we("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){we("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){we("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(d!==void 0){if(t[d]===void 0){we("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[d]}}let o=t[s];if(o===void 0){let d=e.nodeName;we("PropertyBinding: Trying to update property for track: "+d+"."+s+" but it wasn't found.",t);return}let c=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?c=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let h=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){we("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){we("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}h=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(h=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(h=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[h],this.setValue=this.SetterByBindingTypeAndVersioning[h][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};_n.Composite=gf;_n.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};_n.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};_n.prototype.GetterByBindingType=[_n.prototype._getValue_direct,_n.prototype._getValue_array,_n.prototype._getValue_arrayElement,_n.prototype._getValue_toArray];_n.prototype.SetterByBindingTypeAndVersioning=[[_n.prototype._setValue_direct,_n.prototype._setValue_direct_setNeedsUpdate,_n.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[_n.prototype._setValue_array,_n.prototype._setValue_array_setNeedsUpdate,_n.prototype._setValue_array_setMatrixWorldNeedsUpdate],[_n.prototype._setValue_arrayElement,_n.prototype._setValue_arrayElement_setNeedsUpdate,_n.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[_n.prototype._setValue_fromArray,_n.prototype._setValue_fromArray_setNeedsUpdate,_n.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var vw=new Float32Array(1);var lr=class extends au{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}};var A0=new Ze,bl=class{constructor(t,e,n=0,s=1/0){this.ray=new Nr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Na,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):we("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return A0.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(A0),this}intersectObject(t,e=!0,n=[]){return _f(t,this,n,e),n.sort(C0),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)_f(t[s],this,n,e);return n.sort(C0),n}};function C0(i,t){return i.distance-t.distance}function _f(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,c=r.length;o<c;o++)_f(r[o],t,e,!0)}}var xf=class i{static{i.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};var R0=new j,Gc=new j,Ta=new j,Aa=new j,rf=new j,ay=new j,oy=new j,Ml=class{constructor(t=new j,e=new j){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){R0.subVectors(t,this.start),Gc.subVectors(this.end,this.start);let n=Gc.dot(Gc);if(n===0)return 0;let r=Gc.dot(R0)/n;return e&&(r=Ne(r,0,1)),r}closestPointToPoint(t,e,n){let s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}distanceSqToLine3(t,e=ay,n=oy){let s=10000000000000001e-32,r,o,c=this.start,h=t.start,d=this.end,p=t.end;Ta.subVectors(d,c),Aa.subVectors(p,h),rf.subVectors(c,h);let b=Ta.dot(Ta),g=Aa.dot(Aa),M=Aa.dot(rf);if(b<=s&&g<=s)return e.copy(c),n.copy(h),e.sub(n),e.dot(e);if(b<=s)r=0,o=M/g,o=Ne(o,0,1);else{let w=Ta.dot(rf);if(g<=s)o=0,r=Ne(-w/b,0,1);else{let N=Ta.dot(Aa),y=b*g-N*N;y!==0?r=Ne((N*M-w*g)/y,0,1):r=0,o=(N*r+M)/g,o<0?(o=0,r=Ne(-w/b,0,1)):o>1&&(o=1,r=Ne((N-w)/b,0,1))}}return e.copy(c).addScaledVector(Ta,r),n.copy(h).addScaledVector(Aa,o),e.distanceToSquared(n)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};function qf(i,t,e,n){let s=ly(n);switch(e){case Ff:return i*t;case zu:return i*t/s.components*s.byteLength;case Vu:return i*t/s.components*s.byteLength;case fr:return i*t*2/s.components*s.byteLength;case Hu:return i*t*2/s.components*s.byteLength;case Bf:return i*t*3/s.components*s.byteLength;case ki:return i*t*4/s.components*s.byteLength;case Gu:return i*t*4/s.components*s.byteLength;case Al:case Cl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Rl:case Il:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Xu:case Yu:return Math.max(i,16)*Math.max(t,8)/4;case Wu:case qu:return Math.max(i,8)*Math.max(t,8)/2;case Ju:case Zu:case Ku:case Qu:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ju:case Pl:case th:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case eh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case nh:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ih:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case sh:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case rh:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ah:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case oh:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case lh:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ch:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case uh:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case hh:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case dh:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case fh:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ph:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case mh:case gh:case _h:return Math.ceil(i/4)*Math.ceil(t/4)*16;case xh:case vh:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ll:case yh:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ly(i){switch(i){case Si:case Df:return{byteLength:1,components:1};case Ga:case Nf:case Qi:return{byteLength:2,components:1};case ku:case $u:return{byteLength:2,components:4};case Ki:case Bu:case Bi:return{byteLength:4,components:1};case Uf:case Of:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Me("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function zg(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function uy(i){let t=new WeakMap;function e(c,h){let d=c.array,p=c.usage,b=d.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,d,p),c.onUploadCallback();let M;if(d instanceof Float32Array)M=i.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)M=i.HALF_FLOAT;else if(d instanceof Uint16Array)c.isFloat16BufferAttribute?M=i.HALF_FLOAT:M=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)M=i.SHORT;else if(d instanceof Uint32Array)M=i.UNSIGNED_INT;else if(d instanceof Int32Array)M=i.INT;else if(d instanceof Int8Array)M=i.BYTE;else if(d instanceof Uint8Array)M=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)M=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:M,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:b}}function n(c,h,d){let p=h.array,b=h.updateRanges;if(i.bindBuffer(d,c),b.length===0)i.bufferSubData(d,0,p);else{b.sort((M,w)=>M.start-w.start);let g=0;for(let M=1;M<b.length;M++){let w=b[g],N=b[M];N.start<=w.start+w.count+1?w.count=Math.max(w.count,N.start+N.count-w.start):(++g,b[g]=N)}b.length=g+1;for(let M=0,w=b.length;M<w;M++){let N=b[M];i.bufferSubData(d,N.start*p.BYTES_PER_ELEMENT,p,N.start,N.count)}h.clearUpdateRanges()}h.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),t.get(c)}function r(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=t.get(c);h&&(i.deleteBuffer(h.buffer),t.delete(c))}function o(c,h){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){let p=t.get(c);(!p||p.version<c.version)&&t.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}let d=t.get(c);if(d===void 0)t.set(c,e(c,h));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(d.buffer,c,h),d.version=c.version}}return{get:s,remove:r,update:o}}var hy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,dy=`#ifdef USE_ALPHAHASH
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
#endif`,fy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,py=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,my=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_y=`#ifdef USE_AOMAP
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
#endif`,xy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vy=`#ifdef USE_BATCHING
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
#endif`,yy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Sy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,by=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,My=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,wy=`#ifdef USE_IRIDESCENCE
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
#endif`,Ey=`#ifdef USE_BUMPMAP
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
#endif`,Ty=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ay=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ry=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Iy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Py=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ly=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Dy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Ny=`#define PI 3.141592653589793
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
} // validated`,Uy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Oy=`vec3 transformedNormal = objectNormal;
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
#endif`,Fy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,By=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ky=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$y=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Hy=`#ifdef USE_ENVMAP
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
#endif`,Gy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Wy=`#ifdef USE_ENVMAP
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
#endif`,Xy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qy=`#ifdef USE_ENVMAP
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
#endif`,Yy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ky=`#ifdef USE_GRADIENTMAP
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
}`,Qy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,eS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nS=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,iS=`#ifdef USE_ENVMAP
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
#endif`,sS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,aS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,oS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lS=`PhysicalMaterial material;
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
#endif`,cS=`uniform sampler2D dfgLUT;
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
}`,uS=`
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
#endif`,hS=`#if defined( RE_IndirectDiffuse )
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
#endif`,dS=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fS=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,pS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_S=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,SS=`#if defined( USE_POINTS_UV )
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
#endif`,bS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,MS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ES=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,TS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,AS=`#ifdef USE_MORPHTARGETS
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
#endif`,CS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,RS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,IS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,PS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,LS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,DS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,NS=`#ifdef USE_NORMALMAP
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
#endif`,US=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,OS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,FS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,BS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$S=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,zS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,VS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,HS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,GS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,WS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,XS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,YS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,JS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ZS=`float getShadowMask() {
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
}`,jS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,KS=`#ifdef USE_SKINNING
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
#endif`,QS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tb=`#ifdef USE_SKINNING
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
#endif`,eb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ib=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,rb=`#ifdef USE_TRANSMISSION
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
#endif`,ab=`#ifdef USE_TRANSMISSION
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
#endif`,ob=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ub=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,hb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,db=`uniform sampler2D t2D;
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
}`,fb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,mb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_b=`#include <common>
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
}`,xb=`#if DEPTH_PACKING == 3200
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
}`,vb=`#define DISTANCE
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
}`,yb=`#define DISTANCE
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
}`,Sb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mb=`uniform float scale;
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
}`,wb=`uniform vec3 diffuse;
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
}`,Eb=`#include <common>
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
}`,Tb=`uniform vec3 diffuse;
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
}`,Ab=`#define LAMBERT
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
}`,Cb=`#define LAMBERT
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
}`,Rb=`#define MATCAP
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
}`,Ib=`#define MATCAP
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
}`,Pb=`#define NORMAL
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
}`,Lb=`#define NORMAL
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
}`,Db=`#define PHONG
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
}`,Nb=`#define PHONG
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
}`,Ub=`#define STANDARD
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
}`,Ob=`#define STANDARD
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
}`,Fb=`#define TOON
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
}`,Bb=`#define TOON
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
}`,kb=`uniform float size;
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
}`,$b=`uniform vec3 diffuse;
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
}`,zb=`#include <common>
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
}`,Vb=`uniform vec3 color;
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
}`,Hb=`uniform float rotation;
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
}`,Gb=`uniform vec3 diffuse;
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
}`,ke={alphahash_fragment:hy,alphahash_pars_fragment:dy,alphamap_fragment:fy,alphamap_pars_fragment:py,alphatest_fragment:my,alphatest_pars_fragment:gy,aomap_fragment:_y,aomap_pars_fragment:xy,batching_pars_vertex:vy,batching_vertex:yy,begin_vertex:Sy,beginnormal_vertex:by,bsdfs:My,iridescence_fragment:wy,bumpmap_pars_fragment:Ey,clipping_planes_fragment:Ty,clipping_planes_pars_fragment:Ay,clipping_planes_pars_vertex:Cy,clipping_planes_vertex:Ry,color_fragment:Iy,color_pars_fragment:Py,color_pars_vertex:Ly,color_vertex:Dy,common:Ny,cube_uv_reflection_fragment:Uy,defaultnormal_vertex:Oy,displacementmap_pars_vertex:Fy,displacementmap_vertex:By,emissivemap_fragment:ky,emissivemap_pars_fragment:$y,colorspace_fragment:zy,colorspace_pars_fragment:Vy,envmap_fragment:Hy,envmap_common_pars_fragment:Gy,envmap_pars_fragment:Wy,envmap_pars_vertex:Xy,envmap_physical_pars_fragment:iS,envmap_vertex:qy,fog_vertex:Yy,fog_pars_vertex:Jy,fog_fragment:Zy,fog_pars_fragment:jy,gradientmap_pars_fragment:Ky,lightmap_pars_fragment:Qy,lights_lambert_fragment:tS,lights_lambert_pars_fragment:eS,lights_pars_begin:nS,lights_toon_fragment:sS,lights_toon_pars_fragment:rS,lights_phong_fragment:aS,lights_phong_pars_fragment:oS,lights_physical_fragment:lS,lights_physical_pars_fragment:cS,lights_fragment_begin:uS,lights_fragment_maps:hS,lights_fragment_end:dS,lightprobes_pars_fragment:fS,logdepthbuf_fragment:pS,logdepthbuf_pars_fragment:mS,logdepthbuf_pars_vertex:gS,logdepthbuf_vertex:_S,map_fragment:xS,map_pars_fragment:vS,map_particle_fragment:yS,map_particle_pars_fragment:SS,metalnessmap_fragment:bS,metalnessmap_pars_fragment:MS,morphinstance_vertex:wS,morphcolor_vertex:ES,morphnormal_vertex:TS,morphtarget_pars_vertex:AS,morphtarget_vertex:CS,normal_fragment_begin:RS,normal_fragment_maps:IS,normal_pars_fragment:PS,normal_pars_vertex:LS,normal_vertex:DS,normalmap_pars_fragment:NS,clearcoat_normal_fragment_begin:US,clearcoat_normal_fragment_maps:OS,clearcoat_pars_fragment:FS,iridescence_pars_fragment:BS,opaque_fragment:kS,packing:$S,premultiplied_alpha_fragment:zS,project_vertex:VS,dithering_fragment:HS,dithering_pars_fragment:GS,roughnessmap_fragment:WS,roughnessmap_pars_fragment:XS,shadowmap_pars_fragment:qS,shadowmap_pars_vertex:YS,shadowmap_vertex:JS,shadowmask_pars_fragment:ZS,skinbase_vertex:jS,skinning_pars_vertex:KS,skinning_vertex:QS,skinnormal_vertex:tb,specularmap_fragment:eb,specularmap_pars_fragment:nb,tonemapping_fragment:ib,tonemapping_pars_fragment:sb,transmission_fragment:rb,transmission_pars_fragment:ab,uv_pars_fragment:ob,uv_pars_vertex:lb,uv_vertex:cb,worldpos_vertex:ub,background_vert:hb,background_frag:db,backgroundCube_vert:fb,backgroundCube_frag:pb,cube_vert:mb,cube_frag:gb,depth_vert:_b,depth_frag:xb,distance_vert:vb,distance_frag:yb,equirect_vert:Sb,equirect_frag:bb,linedashed_vert:Mb,linedashed_frag:wb,meshbasic_vert:Eb,meshbasic_frag:Tb,meshlambert_vert:Ab,meshlambert_frag:Cb,meshmatcap_vert:Rb,meshmatcap_frag:Ib,meshnormal_vert:Pb,meshnormal_frag:Lb,meshphong_vert:Db,meshphong_frag:Nb,meshphysical_vert:Ub,meshphysical_frag:Ob,meshtoon_vert:Fb,meshtoon_frag:Bb,points_vert:kb,points_frag:$b,shadow_vert:zb,shadow_frag:Vb,sprite_vert:Hb,sprite_frag:Gb},qt={common:{diffuse:{value:new ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new De}},envmap:{envMap:{value:null},envMapRotation:{value:new De},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new De}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new De}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new De},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new De},normalScale:{value:new Wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new De},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new De}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new De}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new De}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new j},probesMax:{value:new j},probesResolution:{value:new j}},points:{diffuse:{value:new ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0},uvTransform:{value:new De}},sprite:{diffuse:{value:new ye(16777215)},opacity:{value:1},center:{value:new Wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}}},hi={basic:{uniforms:ei([qt.common,qt.specularmap,qt.envmap,qt.aomap,qt.lightmap,qt.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:ei([qt.common,qt.specularmap,qt.envmap,qt.aomap,qt.lightmap,qt.emissivemap,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.fog,qt.lights,{emissive:{value:new ye(0)},envMapIntensity:{value:1}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:ei([qt.common,qt.specularmap,qt.envmap,qt.aomap,qt.lightmap,qt.emissivemap,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.fog,qt.lights,{emissive:{value:new ye(0)},specular:{value:new ye(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:ei([qt.common,qt.envmap,qt.aomap,qt.lightmap,qt.emissivemap,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.roughnessmap,qt.metalnessmap,qt.fog,qt.lights,{emissive:{value:new ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:ei([qt.common,qt.aomap,qt.lightmap,qt.emissivemap,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.gradientmap,qt.fog,qt.lights,{emissive:{value:new ye(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:ei([qt.common,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:ei([qt.points,qt.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:ei([qt.common,qt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:ei([qt.common,qt.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:ei([qt.common,qt.bumpmap,qt.normalmap,qt.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:ei([qt.sprite,qt.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new De},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new De}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distance:{uniforms:ei([qt.common,qt.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distance_vert,fragmentShader:ke.distance_frag},shadow:{uniforms:ei([qt.lights,qt.fog,{color:{value:new ye(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};hi.physical={uniforms:ei([hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new De},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new De},clearcoatNormalScale:{value:new Wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new De},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new De},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new De},sheen:{value:0},sheenColor:{value:new ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new De},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new De},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new De},transmissionSamplerSize:{value:new Wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new De},attenuationDistance:{value:0},attenuationColor:{value:new ye(0)},specularColor:{value:new ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new De},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new De},anisotropyVector:{value:new Wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new De}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};var wh={r:0,b:0,g:0},Wb=new Ze,Vg=new De;Vg.set(-1,0,0,0,1,0,0,0,1);function Xb(i,t,e,n,s,r){let o=new ye(0),c=s===!0?0:1,h,d,p=null,b=0,g=null;function M(z){let H=z.isScene===!0?z.background:null;if(H&&H.isTexture){let D=z.backgroundBlurriness>0;H=t.get(H,D)}return H}function w(z){let H=!1,D=M(z);D===null?y(o,c):D&&D.isColor&&(y(D,1),H=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?e.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||H)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function N(z,H){let D=M(H);D&&(D.isCubeTexture||D.mapping===El)?(d===void 0&&(d=new Bn(new Fa(1,1,1),new kn({name:"BackgroundCubeMaterial",uniforms:Vr(hi.backgroundCube.uniforms),vertexShader:hi.backgroundCube.vertexShader,fragmentShader:hi.backgroundCube.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(E,k,J){this.matrixWorld.copyPosition(J.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(d)),d.material.uniforms.envMap.value=D,d.material.uniforms.backgroundBlurriness.value=H.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=H.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Wb.makeRotationFromEuler(H.backgroundRotation)).transpose(),D.isCubeTexture&&D.isRenderTargetTexture===!1&&d.material.uniforms.backgroundRotation.value.premultiply(Vg),d.material.toneMapped=Ye.getTransfer(D.colorSpace)!==an,(p!==D||b!==D.version||g!==i.toneMapping)&&(d.material.needsUpdate=!0,p=D,b=D.version,g=i.toneMapping),d.layers.enableAll(),z.unshift(d,d.geometry,d.material,0,0,null)):D&&D.isTexture&&(h===void 0&&(h=new Bn(new fl(2,2),new kn({name:"BackgroundMaterial",uniforms:Vr(hi.background.uniforms),vertexShader:hi.background.vertexShader,fragmentShader:hi.background.fragmentShader,side:cr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(h)),h.material.uniforms.t2D.value=D,h.material.uniforms.backgroundIntensity.value=H.backgroundIntensity,h.material.toneMapped=Ye.getTransfer(D.colorSpace)!==an,D.matrixAutoUpdate===!0&&D.updateMatrix(),h.material.uniforms.uvTransform.value.copy(D.matrix),(p!==D||b!==D.version||g!==i.toneMapping)&&(h.material.needsUpdate=!0,p=D,b=D.version,g=i.toneMapping),h.layers.enableAll(),z.unshift(h,h.geometry,h.material,0,0,null))}function y(z,H){z.getRGB(wh,Gf(i)),e.buffers.color.setClear(wh.r,wh.g,wh.b,H,r)}function m(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return o},setClearColor:function(z,H=1){o.set(z),c=H,y(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(z){c=z,y(o,c)},render:w,addToRenderList:N,dispose:m}}function qb(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=g(null),r=s,o=!1;function c(Z,ot,dt,tt,st){let mt=!1,_t=b(Z,tt,dt,ot);r!==_t&&(r=_t,d(r.object)),mt=M(Z,tt,dt,st),mt&&w(Z,tt,dt,st),st!==null&&t.update(st,i.ELEMENT_ARRAY_BUFFER),(mt||o)&&(o=!1,D(Z,ot,dt,tt),st!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(st).buffer))}function h(){return i.createVertexArray()}function d(Z){return i.bindVertexArray(Z)}function p(Z){return i.deleteVertexArray(Z)}function b(Z,ot,dt,tt){let st=tt.wireframe===!0,mt=n[ot.id];mt===void 0&&(mt={},n[ot.id]=mt);let _t=Z.isInstancedMesh===!0?Z.id:0,Ct=mt[_t];Ct===void 0&&(Ct={},mt[_t]=Ct);let xt=Ct[dt.id];xt===void 0&&(xt={},Ct[dt.id]=xt);let Et=xt[st];return Et===void 0&&(Et=g(h()),xt[st]=Et),Et}function g(Z){let ot=[],dt=[],tt=[];for(let st=0;st<e;st++)ot[st]=0,dt[st]=0,tt[st]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ot,enabledAttributes:dt,attributeDivisors:tt,object:Z,attributes:{},index:null}}function M(Z,ot,dt,tt){let st=r.attributes,mt=ot.attributes,_t=0,Ct=dt.getAttributes();for(let xt in Ct)if(Ct[xt].location>=0){let Mt=st[xt],zt=mt[xt];if(zt===void 0&&(xt==="instanceMatrix"&&Z.instanceMatrix&&(zt=Z.instanceMatrix),xt==="instanceColor"&&Z.instanceColor&&(zt=Z.instanceColor)),Mt===void 0||Mt.attribute!==zt||zt&&Mt.data!==zt.data)return!0;_t++}return r.attributesNum!==_t||r.index!==tt}function w(Z,ot,dt,tt){let st={},mt=ot.attributes,_t=0,Ct=dt.getAttributes();for(let xt in Ct)if(Ct[xt].location>=0){let Mt=mt[xt];Mt===void 0&&(xt==="instanceMatrix"&&Z.instanceMatrix&&(Mt=Z.instanceMatrix),xt==="instanceColor"&&Z.instanceColor&&(Mt=Z.instanceColor));let zt={};zt.attribute=Mt,Mt&&Mt.data&&(zt.data=Mt.data),st[xt]=zt,_t++}r.attributes=st,r.attributesNum=_t,r.index=tt}function N(){let Z=r.newAttributes;for(let ot=0,dt=Z.length;ot<dt;ot++)Z[ot]=0}function y(Z){m(Z,0)}function m(Z,ot){let dt=r.newAttributes,tt=r.enabledAttributes,st=r.attributeDivisors;dt[Z]=1,tt[Z]===0&&(i.enableVertexAttribArray(Z),tt[Z]=1),st[Z]!==ot&&(i.vertexAttribDivisor(Z,ot),st[Z]=ot)}function z(){let Z=r.newAttributes,ot=r.enabledAttributes;for(let dt=0,tt=ot.length;dt<tt;dt++)ot[dt]!==Z[dt]&&(i.disableVertexAttribArray(dt),ot[dt]=0)}function H(Z,ot,dt,tt,st,mt,_t){_t===!0?i.vertexAttribIPointer(Z,ot,dt,st,mt):i.vertexAttribPointer(Z,ot,dt,tt,st,mt)}function D(Z,ot,dt,tt){N();let st=tt.attributes,mt=dt.getAttributes(),_t=ot.defaultAttributeValues;for(let Ct in mt){let xt=mt[Ct];if(xt.location>=0){let Et=st[Ct];if(Et===void 0&&(Ct==="instanceMatrix"&&Z.instanceMatrix&&(Et=Z.instanceMatrix),Ct==="instanceColor"&&Z.instanceColor&&(Et=Z.instanceColor)),Et!==void 0){let Mt=Et.normalized,zt=Et.itemSize,ne=t.get(Et);if(ne===void 0)continue;let je=ne.buffer,Oe=ne.type,We=ne.bytesPerElement,vt=Oe===i.INT||Oe===i.UNSIGNED_INT||Et.gpuType===Bu;if(Et.isInterleavedBufferAttribute){let yt=Et.data,Pt=yt.stride,fe=Et.offset;if(yt.isInstancedInterleavedBuffer){for(let Kt=0;Kt<xt.locationSize;Kt++)m(xt.location+Kt,yt.meshPerAttribute);Z.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let Kt=0;Kt<xt.locationSize;Kt++)y(xt.location+Kt);i.bindBuffer(i.ARRAY_BUFFER,je);for(let Kt=0;Kt<xt.locationSize;Kt++)H(xt.location+Kt,zt/xt.locationSize,Oe,Mt,Pt*We,(fe+zt/xt.locationSize*Kt)*We,vt)}else{if(Et.isInstancedBufferAttribute){for(let yt=0;yt<xt.locationSize;yt++)m(xt.location+yt,Et.meshPerAttribute);Z.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=Et.meshPerAttribute*Et.count)}else for(let yt=0;yt<xt.locationSize;yt++)y(xt.location+yt);i.bindBuffer(i.ARRAY_BUFFER,je);for(let yt=0;yt<xt.locationSize;yt++)H(xt.location+yt,zt/xt.locationSize,Oe,Mt,zt*We,zt/xt.locationSize*yt*We,vt)}}else if(_t!==void 0){let Mt=_t[Ct];if(Mt!==void 0)switch(Mt.length){case 2:i.vertexAttrib2fv(xt.location,Mt);break;case 3:i.vertexAttrib3fv(xt.location,Mt);break;case 4:i.vertexAttrib4fv(xt.location,Mt);break;default:i.vertexAttrib1fv(xt.location,Mt)}}}}z()}function E(){B();for(let Z in n){let ot=n[Z];for(let dt in ot){let tt=ot[dt];for(let st in tt){let mt=tt[st];for(let _t in mt)p(mt[_t].object),delete mt[_t];delete tt[st]}}delete n[Z]}}function k(Z){if(n[Z.id]===void 0)return;let ot=n[Z.id];for(let dt in ot){let tt=ot[dt];for(let st in tt){let mt=tt[st];for(let _t in mt)p(mt[_t].object),delete mt[_t];delete tt[st]}}delete n[Z.id]}function J(Z){for(let ot in n){let dt=n[ot];for(let tt in dt){let st=dt[tt];if(st[Z.id]===void 0)continue;let mt=st[Z.id];for(let _t in mt)p(mt[_t].object),delete mt[_t];delete st[Z.id]}}}function I(Z){for(let ot in n){let dt=n[ot],tt=Z.isInstancedMesh===!0?Z.id:0,st=dt[tt];if(st!==void 0){for(let mt in st){let _t=st[mt];for(let Ct in _t)p(_t[Ct].object),delete _t[Ct];delete st[mt]}delete dt[tt],Object.keys(dt).length===0&&delete n[ot]}}}function B(){Y(),o=!0,r!==s&&(r=s,d(r.object))}function Y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:c,reset:B,resetDefaultState:Y,dispose:E,releaseStatesOfGeometry:k,releaseStatesOfObject:I,releaseStatesOfProgram:J,initAttributes:N,enableAttribute:y,disableUnusedAttributes:z}}function Yb(i,t,e){let n;function s(h){n=h}function r(h,d){i.drawArrays(n,h,d),e.update(d,n,1)}function o(h,d,p){p!==0&&(i.drawArraysInstanced(n,h,d,p),e.update(d,n,p))}function c(h,d,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,d,0,p);let g=0;for(let M=0;M<p;M++)g+=d[M];e.update(g,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=c}function Jb(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let J=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(J.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(J){return!(J!==ki&&n.convert(J)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(J){let I=J===Qi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(J!==Si&&J!==Bi&&!I&&n.convert(J)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function h(J){if(J==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";J="mediump"}return J==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=e.precision!==void 0?e.precision:"highp",p=h(d);p!==d&&(Me("WebGLRenderer:",d,"not supported, using",p,"instead."),d=p);let b=e.logarithmicDepthBuffer===!0,g=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&g===!1&&Me("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let M=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),w=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),N=i.getParameter(i.MAX_TEXTURE_SIZE),y=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),z=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),H=i.getParameter(i.MAX_VARYING_VECTORS),D=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),k=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:h,textureFormatReadable:o,textureTypeReadable:c,precision:d,logarithmicDepthBuffer:b,reversedDepthBuffer:g,maxTextures:M,maxVertexTextures:w,maxTextureSize:N,maxCubemapSize:y,maxAttributes:m,maxVertexUniforms:z,maxVaryings:H,maxFragmentUniforms:D,maxSamples:E,samples:k}}function Zb(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Xi,c=new De,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(b,g){let M=b.length!==0||g||n!==0||s;return s=g,n=b.length,M},this.beginShadows=function(){r=!0,p(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(b,g){e=p(b,g,0)},this.setState=function(b,g,M){let w=b.clippingPlanes,N=b.clipIntersection,y=b.clipShadows,m=i.get(b);if(!s||w===null||w.length===0||r&&!y)r?p(null):d();else{let z=r?0:n,H=z*4,D=m.clippingState||null;h.value=D,D=p(w,g,H,M);for(let E=0;E!==H;++E)D[E]=e[E];m.clippingState=D,this.numIntersection=N?this.numPlanes:0,this.numPlanes+=z}};function d(){h.value!==e&&(h.value=e,h.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function p(b,g,M,w){let N=b!==null?b.length:0,y=null;if(N!==0){if(y=h.value,w!==!0||y===null){let m=M+N*4,z=g.matrixWorldInverse;c.getNormalMatrix(z),(y===null||y.length<m)&&(y=new Float32Array(m));for(let H=0,D=M;H!==N;++H,D+=4)o.copy(b[H]).applyMatrix4(z,c),o.normal.toArray(y,D),y[D+3]=o.constant}h.value=y,h.needsUpdate=!0}return t.numPlanes=N,t.numIntersection=0,y}}var qa=4,jb=6,Kb=20,Qb=256,Nl=new za,yg=new ye,Yf=null,Jf=0,Zf=0,jf=!1,tM=new j,Hr=new j,Th=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:c=tM}=r;Yf=this._renderer.getRenderTarget(),Jf=this._renderer.getActiveCubeFace(),Zf=this._renderer.getActiveMipmapLevel(),jf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(t,n,s,h,c),e>0&&this._blur(h,0,0,e),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Yf,Jf,Zf),this._renderer.xr.enabled=jf,t.scissorTest=!1,Xa(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ur||t.mapping===zr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Yf=this._renderer.getRenderTarget(),Jf=this._renderer.getActiveCubeFace(),Zf=this._renderer.getActiveMipmapLevel(),jf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Gn,minFilter:Gn,generateMipmaps:!1,type:Qi,format:ki,colorSpace:Go,depthBuffer:!1},s=Sg(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sg(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=eM(r)),this._blurMaterial=iM(r,t,e),this._ggxMaterial=nM(r,t,e)}return s}_compileMaterial(t){let e=new Bn(new En,t);this._renderer.compile(e,Nl)}_sceneToCubeUV(t,e,n,s,r){let h=new ti(90,1,e,n),d=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],b=this._renderer,g=b.autoClear,M=b.toneMapping;b.getClearColor(yg),b.toneMapping=ji,b.autoClear=!1,b.state.buffers.depth.getReversed()&&(b.setRenderTarget(s),b.clearDepth(),b.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Bn(new Fa,new Ur({name:"PMREM.Background",side:ui,depthWrite:!1,depthTest:!1})));let N=this._backgroundBox,y=N.material,m=!1,z=t.background;z?z.isColor&&(y.color.copy(z),t.background=null,m=!0):(y.color.copy(yg),m=!0);for(let H=0;H<6;H++){let D=H%3;D===0?(h.up.set(0,d[H],0),h.position.set(r.x,r.y,r.z),h.lookAt(r.x+p[H],r.y,r.z)):D===1?(h.up.set(0,0,d[H]),h.position.set(r.x,r.y,r.z),h.lookAt(r.x,r.y+p[H],r.z)):(h.up.set(0,d[H],0),h.position.set(r.x,r.y,r.z),h.lookAt(r.x,r.y,r.z+p[H]));let E=this._cubeSize;Xa(s,D*E,H>2?E:0,E,E),b.setRenderTarget(s),m&&b.render(N,h),b.render(t,h)}b.toneMapping=M,b.autoClear=g,t.background=z}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ur||t.mapping===zr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mg()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bg());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let c=r.uniforms;c.envMap.value=t;let h=this._cubeSize;Xa(e,0,0,3*h,2*h),n.setRenderTarget(e),n.render(o,Nl)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,c=this._lodMeshes[n];c.material=o;let h=o.uniforms,d=n/(this._lodMeshes.length-1),p=e/(this._lodMeshes.length-1),b=Math.sqrt(d*d-p*p),g=d*1.25,M=b*g,{_lodMax:w}=this,N=this._sizeLods[n],y=3*N*(n>w-qa?n-w+qa:0),m=4*(this._cubeSize-N);h.envMap.value=t.texture,h.roughness.value=M,h.mipInt.value=w-e,Xa(r,y,m,3*N,2*N),s.setRenderTarget(r),s.render(c,Nl),h.envMap.value=r.texture,h.roughness.value=0,h.mipInt.value=w-n,Xa(t,y,m,3*N,2*N),s.setRenderTarget(t),s.render(c,Nl)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,s,r){let o=this._renderer,c=this._blurMaterial,h=this._lodMeshes[s];h.material=c;let d=c.uniforms;d.envMap.value=t.texture,d.sigma.value=r,d.mipInt.value=this._lodMax-n;let p=this._sizeLods[s],b=3*p*(s>this._lodMax-qa?s-this._lodMax+qa:0),g=4*(this._cubeSize-p);Xa(e,b,g,3*p,2*p),o.setRenderTarget(e),o.render(h,Nl)}};function eM(i){let t=[],e=[],n=i,s=i-qa+1+jb;for(let r=0;r<s;r++){let o=Math.pow(2,n);t.push(o);let c=1/(o-2),h=-c,d=1+c,p=[h,h,d,h,d,d,h,h,d,d,h,d],b=6,g=6,M=3,w=new Float32Array(M*g*b),N=new Float32Array(M*g*b);for(let m=0;m<b;m++){let z=m%3*2/3-1,H=m>2?0:-1,D=[z,H,0,z+2/3,H,0,z+2/3,H+1,0,z,H,0,z+2/3,H+1,0,z,H+1,0];w.set(D,M*g*m);for(let E=0;E<g;E++){let k=p[E*2]*2-1,J=p[E*2+1]*2-1;m===0?Hr.set(1,J,k):m===1?Hr.set(-k,1,-J):m===2?Hr.set(-k,J,1):m===3?Hr.set(-1,J,-k):m===4?Hr.set(-k,-1,J):Hr.set(k,J,-1),Hr.toArray(N,(m*g+E)*M)}}let y=new En;y.setAttribute("position",new hn(w,M)),y.setAttribute("outputDirection",new hn(N,M)),e.push(new Bn(y,null)),n>qa&&n--}return{lodMeshes:e,sizeLods:t}}function Sg(i,t,e){let n=new vi(i,t,e);return n.texture.mapping=El,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Xa(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function nM(i,t,e){return new kn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Qb,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Rh(),fragmentShader:`

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
		`,blending:ms,depthTest:!1,depthWrite:!1})}function iM(i,t,e){return new kn({name:"SphericalGaussianBlur",defines:{SAMPLES:Kb,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Rh(),fragmentShader:`

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
		`,blending:ms,depthTest:!1,depthWrite:!1})}function bg(){return new kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rh(),fragmentShader:`

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
		`,blending:ms,depthTest:!1,depthWrite:!1})}function Mg(){return new kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ms,depthTest:!1,depthWrite:!1})}function Rh(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Ah=class extends vi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new nl(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Fa(5,5,5),r=new kn({name:"CubemapFromEquirect",uniforms:Vr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ui,blending:ms});r.uniforms.tEquirect.value=e;let o=new Bn(s,r),c=e.minFilter;return e.minFilter===hr&&(e.minFilter=Gn),new Lu(1,10,this).update(t,o),e.minFilter=c,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}};function sM(i){let t=new WeakMap,e=new WeakMap,n=null;function s(g,M=!1){return g==null?null:M?o(g):r(g)}function r(g){if(g&&g.isTexture){let M=g.mapping;if(M===Uu||M===Ou)if(t.has(g)){let w=t.get(g).texture;return c(w,g.mapping)}else{let w=g.image;if(w&&w.height>0){let N=new Ah(w.height);return N.fromEquirectangularTexture(i,g),t.set(g,N),g.addEventListener("dispose",d),c(N.texture,g.mapping)}else return null}}return g}function o(g){if(g&&g.isTexture){let M=g.mapping,w=M===Uu||M===Ou,N=M===ur||M===zr;if(w||N){let y=e.get(g),m=y!==void 0?y.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==m)return n===null&&(n=new Th(i)),y=w?n.fromEquirectangular(g,y):n.fromCubemap(g,y),y.texture.pmremVersion=g.pmremVersion,e.set(g,y),y.texture;if(y!==void 0)return y.texture;{let z=g.image;return w&&z&&z.height>0||N&&z&&h(z)?(n===null&&(n=new Th(i)),y=w?n.fromEquirectangular(g):n.fromCubemap(g),y.texture.pmremVersion=g.pmremVersion,e.set(g,y),g.addEventListener("dispose",p),y.texture):null}}}return g}function c(g,M){return M===Uu?g.mapping=ur:M===Ou&&(g.mapping=zr),g}function h(g){let M=0,w=6;for(let N=0;N<w;N++)g[N]!==void 0&&M++;return M===w}function d(g){let M=g.target;M.removeEventListener("dispose",d);let w=t.get(M);w!==void 0&&(t.delete(M),w.dispose())}function p(g){let M=g.target;M.removeEventListener("dispose",p);let w=e.get(M);w!==void 0&&(e.delete(M),w.dispose())}function b(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:b}}function rM(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Dr("WebGLRenderer: "+n+" extension not supported."),s}}}function aM(i,t,e,n){let s={},r=new WeakMap;function o(b){let g=b.target;g.index!==null&&t.remove(g.index);for(let w in g.attributes)t.remove(g.attributes[w]);g.removeEventListener("dispose",o),delete s[g.id];let M=r.get(g);M&&(t.remove(M),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function c(b,g){return s[g.id]===!0||(g.addEventListener("dispose",o),s[g.id]=!0,e.memory.geometries++),g}function h(b){let g=b.attributes;for(let M in g)t.update(g[M],i.ARRAY_BUFFER)}function d(b){let g=[],M=b.index,w=b.attributes.position,N=0;if(w===void 0)return;if(M!==null){let z=M.array;N=M.version;for(let H=0,D=z.length;H<D;H+=3){let E=z[H+0],k=z[H+1],J=z[H+2];g.push(E,k,k,J,J,E)}}else{let z=w.array;N=w.version;for(let H=0,D=z.length/3-1;H<D;H+=3){let E=H+0,k=H+1,J=H+2;g.push(E,k,k,J,J,E)}}let y=new(w.count>=65535?jo:Zo)(g,1);y.version=N;let m=r.get(b);m&&t.remove(m),r.set(b,y)}function p(b){let g=r.get(b);if(g){let M=b.index;M!==null&&g.version<M.version&&d(b)}else d(b);return r.get(b)}return{get:c,update:h,getWireframeAttribute:p}}function oM(i,t,e){let n;function s(b){n=b}let r,o;function c(b){r=b.type,o=b.bytesPerElement}function h(b,g){i.drawElements(n,g,r,b*o),e.update(g,n,1)}function d(b,g,M){M!==0&&(i.drawElementsInstanced(n,g,r,b*o,M),e.update(g,n,M))}function p(b,g,M){if(M===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,g,0,r,b,0,M);let N=0;for(let y=0;y<M;y++)N+=g[y];e.update(N,n,1)}this.setMode=s,this.setIndex=c,this.render=h,this.renderInstances=d,this.renderMultiDraw=p}function lM(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,c){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=c*(r/3);break;case i.LINES:e.lines+=c*(r/2);break;case i.LINE_STRIP:e.lines+=c*(r-1);break;case i.LINE_LOOP:e.lines+=c*r;break;case i.POINTS:e.points+=c*r;break;default:we("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function cM(i,t,e){let n=new WeakMap,s=new on;function r(o,c,h){let d=o.morphTargetInfluences,p=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,b=p!==void 0?p.length:0,g=n.get(c);if(g===void 0||g.count!==b){let B=function(){J.dispose(),n.delete(c),c.removeEventListener("dispose",B)};g!==void 0&&g.texture.dispose();let M=c.morphAttributes.position!==void 0,w=c.morphAttributes.normal!==void 0,N=c.morphAttributes.color!==void 0,y=c.morphAttributes.position||[],m=c.morphAttributes.normal||[],z=c.morphAttributes.color||[],H=0;M===!0&&(H=1),w===!0&&(H=2),N===!0&&(H=3);let D=c.attributes.position.count*H,E=1;D>t.maxTextureSize&&(E=Math.ceil(D/t.maxTextureSize),D=t.maxTextureSize);let k=new Float32Array(D*E*4*b),J=new Yo(k,D,E,b);J.type=Bi,J.needsUpdate=!0;let I=H*4;for(let Y=0;Y<b;Y++){let Z=y[Y],ot=m[Y],dt=z[Y],tt=D*E*4*Y;for(let st=0;st<Z.count;st++){let mt=st*I;M===!0&&(s.fromBufferAttribute(Z,st),k[tt+mt+0]=s.x,k[tt+mt+1]=s.y,k[tt+mt+2]=s.z,k[tt+mt+3]=0),w===!0&&(s.fromBufferAttribute(ot,st),k[tt+mt+4]=s.x,k[tt+mt+5]=s.y,k[tt+mt+6]=s.z,k[tt+mt+7]=0),N===!0&&(s.fromBufferAttribute(dt,st),k[tt+mt+8]=s.x,k[tt+mt+9]=s.y,k[tt+mt+10]=s.z,k[tt+mt+11]=dt.itemSize===4?s.w:1)}}g={count:b,texture:J,size:new Wt(D,E)},n.set(c,g),c.addEventListener("dispose",B)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)h.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let M=0;for(let N=0;N<d.length;N++)M+=d[N];let w=c.morphTargetsRelative?1:1-M;h.getUniforms().setValue(i,"morphTargetBaseInfluence",w),h.getUniforms().setValue(i,"morphTargetInfluences",d)}h.getUniforms().setValue(i,"morphTargetsTexture",g.texture,e),h.getUniforms().setValue(i,"morphTargetsTextureSize",g.size)}return{update:r}}function uM(i,t,e,n,s){let r=new WeakMap;function o(d){let p=s.render.frame,b=d.geometry,g=t.get(d,b);if(r.get(g)!==p&&(t.update(g),r.set(g,p)),d.isInstancedMesh&&(d.hasEventListener("dispose",h)===!1&&d.addEventListener("dispose",h),r.get(d)!==p&&(e.update(d.instanceMatrix,i.ARRAY_BUFFER),d.instanceColor!==null&&e.update(d.instanceColor,i.ARRAY_BUFFER),r.set(d,p))),d.isSkinnedMesh){let M=d.skeleton;r.get(M)!==p&&(M.update(),r.set(M,p))}return g}function c(){r=new WeakMap}function h(d){let p=d.target;p.removeEventListener("dispose",h),n.releaseStatesOfObject(p),e.remove(p.instanceMatrix),p.instanceColor!==null&&e.remove(p.instanceColor)}return{update:o,dispose:c}}var hM={[Ef]:"LINEAR_TONE_MAPPING",[Tf]:"REINHARD_TONE_MAPPING",[Af]:"CINEON_TONE_MAPPING",[Cf]:"ACES_FILMIC_TONE_MAPPING",[If]:"AGX_TONE_MAPPING",[Pf]:"NEUTRAL_TONE_MAPPING",[Rf]:"CUSTOM_TONE_MAPPING"};function dM(i,t,e,n,s,r){let o=new vi(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),c=null,h=null,d=new En;d.setAttribute("position",new wn([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new wn([0,2,0,0,2,0],2));let p=new xu({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),b=new Bn(d,p),g=new za(-1,1,1,-1,0,1),M=null,w=null,N=!1,y,m=null,z=[],H=!1;this.setSize=function(D,E){o.setSize(D,E),c!==null&&c.setSize(D,E),h!==null&&h.setSize(D,E);for(let k=0;k<z.length;k++){let J=z[k];J.setSize&&J.setSize(D,E)}},this.setEffects=function(D){z=D,H=z.length>0&&z[0].isRenderPass===!0;let E=o.width,k=o.height;z.length>0&&c===null&&(c=new vi(E,k,{type:Qi,depthBuffer:!1,stencilBuffer:!1}),h=new vi(E,k,{type:Qi,depthBuffer:!1,stencilBuffer:!1}));for(let J=0;J<z.length;J++){let I=z[J];I.setSize&&I.setSize(E,k)}},this.begin=function(D,E){if(N||D.toneMapping===ji&&z.length===0)return!1;if(m=E,E!==null){let k=E.width,J=E.height;(o.width!==k||o.height!==J)&&this.setSize(k,J)}return H===!1&&D.setRenderTarget(o),y=D.toneMapping,D.toneMapping=ji,!0},this.hasRenderPass=function(){return H},this.end=function(D,E){D.toneMapping=y,N=!0;let k=o,J=c;for(let I=0;I<z.length;I++){let B=z[I];B.enabled!==!1&&(B.render(D,J,k,E),B.needsSwap!==!1&&(k=J,J=J===c?h:c))}if(M!==D.outputColorSpace||w!==D.toneMapping){M=D.outputColorSpace,w=D.toneMapping,p.defines={},Ye.getTransfer(M)===an&&(p.defines.SRGB_TRANSFER="");let I=hM[w];I&&(p.defines[I]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=k.texture,D.setRenderTarget(m),D.render(b,g),m=null,N=!1},this.isCompositing=function(){return N},this.dispose=function(){o.dispose(),c!==null&&c.dispose(),h!==null&&h.dispose(),d.dispose(),p.dispose()}}var Hg=new xi,tp=new sr(1,1),Gg=new Yo,Wg=new ru,Xg=new nl,wg=[],Eg=[],Tg=new Float32Array(16),Ag=new Float32Array(9),Cg=new Float32Array(4);function Ja(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=wg[s];if(r===void 0&&(r=new Float32Array(s),wg[s]=r),t!==0){n.toArray(r,0);for(let o=1,c=0;o!==t;++o)c+=e,i[o].toArray(r,c)}return r}function Pn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ln(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ih(i,t){let e=Eg[t];e===void 0&&(e=new Int32Array(t),Eg[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function fM(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function pM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pn(e,t))return;i.uniform2fv(this.addr,t),Ln(e,t)}}function mM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Pn(e,t))return;i.uniform3fv(this.addr,t),Ln(e,t)}}function gM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pn(e,t))return;i.uniform4fv(this.addr,t),Ln(e,t)}}function _M(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Pn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ln(e,t)}else{if(Pn(e,n))return;Cg.set(n),i.uniformMatrix2fv(this.addr,!1,Cg),Ln(e,n)}}function xM(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Pn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ln(e,t)}else{if(Pn(e,n))return;Ag.set(n),i.uniformMatrix3fv(this.addr,!1,Ag),Ln(e,n)}}function vM(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Pn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ln(e,t)}else{if(Pn(e,n))return;Tg.set(n),i.uniformMatrix4fv(this.addr,!1,Tg),Ln(e,n)}}function yM(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function SM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pn(e,t))return;i.uniform2iv(this.addr,t),Ln(e,t)}}function bM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pn(e,t))return;i.uniform3iv(this.addr,t),Ln(e,t)}}function MM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pn(e,t))return;i.uniform4iv(this.addr,t),Ln(e,t)}}function wM(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function EM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pn(e,t))return;i.uniform2uiv(this.addr,t),Ln(e,t)}}function TM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pn(e,t))return;i.uniform3uiv(this.addr,t),Ln(e,t)}}function AM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pn(e,t))return;i.uniform4uiv(this.addr,t),Ln(e,t)}}function CM(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(tp.compareFunction=e.isReversedDepthBuffer()?Mh:bh,r=tp):r=Hg,e.setTexture2D(t||r,s)}function RM(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Wg,s)}function IM(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Xg,s)}function PM(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Gg,s)}function LM(i){switch(i){case 5126:return fM;case 35664:return pM;case 35665:return mM;case 35666:return gM;case 35674:return _M;case 35675:return xM;case 35676:return vM;case 5124:case 35670:return yM;case 35667:case 35671:return SM;case 35668:case 35672:return bM;case 35669:case 35673:return MM;case 5125:return wM;case 36294:return EM;case 36295:return TM;case 36296:return AM;case 35678:case 36198:case 36298:case 36306:case 35682:return CM;case 35679:case 36299:case 36307:return RM;case 35680:case 36300:case 36308:case 36293:return IM;case 36289:case 36303:case 36311:case 36292:return PM}}function DM(i,t){i.uniform1fv(this.addr,t)}function NM(i,t){let e=Ja(t,this.size,2);i.uniform2fv(this.addr,e)}function UM(i,t){let e=Ja(t,this.size,3);i.uniform3fv(this.addr,e)}function OM(i,t){let e=Ja(t,this.size,4);i.uniform4fv(this.addr,e)}function FM(i,t){let e=Ja(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function BM(i,t){let e=Ja(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function kM(i,t){let e=Ja(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function $M(i,t){i.uniform1iv(this.addr,t)}function zM(i,t){i.uniform2iv(this.addr,t)}function VM(i,t){i.uniform3iv(this.addr,t)}function HM(i,t){i.uniform4iv(this.addr,t)}function GM(i,t){i.uniform1uiv(this.addr,t)}function WM(i,t){i.uniform2uiv(this.addr,t)}function XM(i,t){i.uniform3uiv(this.addr,t)}function qM(i,t){i.uniform4uiv(this.addr,t)}function YM(i,t,e){let n=this.cache,s=t.length,r=Ih(e,s);Pn(n,r)||(i.uniform1iv(this.addr,r),Ln(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=tp:o=Hg;for(let c=0;c!==s;++c)e.setTexture2D(t[c]||o,r[c])}function JM(i,t,e){let n=this.cache,s=t.length,r=Ih(e,s);Pn(n,r)||(i.uniform1iv(this.addr,r),Ln(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Wg,r[o])}function ZM(i,t,e){let n=this.cache,s=t.length,r=Ih(e,s);Pn(n,r)||(i.uniform1iv(this.addr,r),Ln(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Xg,r[o])}function jM(i,t,e){let n=this.cache,s=t.length,r=Ih(e,s);Pn(n,r)||(i.uniform1iv(this.addr,r),Ln(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Gg,r[o])}function KM(i){switch(i){case 5126:return DM;case 35664:return NM;case 35665:return UM;case 35666:return OM;case 35674:return FM;case 35675:return BM;case 35676:return kM;case 5124:case 35670:return $M;case 35667:case 35671:return zM;case 35668:case 35672:return VM;case 35669:case 35673:return HM;case 5125:return GM;case 36294:return WM;case 36295:return XM;case 36296:return qM;case 35678:case 36198:case 36298:case 36306:case 35682:return YM;case 35679:case 36299:case 36307:return JM;case 35680:case 36300:case 36308:case 36293:return ZM;case 36289:case 36303:case 36311:case 36292:return jM}}var ep=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=LM(e.type)}},np=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=KM(e.type)}},ip=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let c=s[r];c.setValue(t,e[c.id],n)}}},Kf=/(\w+)(\])?(\[|\.)?/g;function Rg(i,t){i.seq.push(t),i.map[t.id]=t}function QM(i,t,e){let n=i.name,s=n.length;for(Kf.lastIndex=0;;){let r=Kf.exec(n),o=Kf.lastIndex,c=r[1],h=r[2]==="]",d=r[3];if(h&&(c=c|0),d===void 0||d==="["&&o+2===s){Rg(e,d===void 0?new ep(c,i,t):new np(c,i,t));break}else{let b=e.map[c];b===void 0&&(b=new ip(c),Rg(e,b)),e=b}}}var Ya=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let c=t.getActiveUniform(e,o),h=t.getUniformLocation(e,c.name);QM(c,h,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let c=e[r],h=n[c.id];h.needsUpdate!==!1&&c.setValue(t,h.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Ig(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var t1=37297,e1=0;function n1(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let c=o+1;n.push(`${c===t?">":" "} ${c}: ${e[o]}`)}return n.join(`
`)}var Pg=new De;function i1(i){Ye._getMatrix(Pg,Ye.workingColorSpace,i);let t=`mat3( ${Pg.elements.map(e=>e.toFixed(4))} )`;switch(Ye.getTransfer(i)){case Wo:return[t,"LinearTransferOETF"];case an:return[t,"sRGBTransferOETF"];default:return Me("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Lg(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let c=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+n1(i.getShaderSource(t),c)}else return r}function s1(i,t){let e=i1(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var r1={[Ef]:"Linear",[Tf]:"Reinhard",[Af]:"Cineon",[Cf]:"ACESFilmic",[If]:"AgX",[Pf]:"Neutral",[Rf]:"Custom"};function a1(i,t){let e=r1[t];return e===void 0?(Me("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Eh=new j;function o1(){Ye.getLuminanceCoefficients(Eh);let i=Eh.x.toFixed(4),t=Eh.y.toFixed(4),e=Eh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function l1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ol).join(`
`)}function c1(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function u1(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,c=1;r.type===i.FLOAT_MAT2&&(c=2),r.type===i.FLOAT_MAT3&&(c=3),r.type===i.FLOAT_MAT4&&(c=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:c}}return e}function Ol(i){return i!==""}function Dg(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ng(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var h1=/^[ \t]*#include +<([\w\d./]+)>/gm;function sp(i){return i.replace(h1,f1)}var d1=new Map;function f1(i,t){let e=ke[t];if(e===void 0){let n=d1.get(t);if(n!==void 0)e=ke[n],Me('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return sp(e)}var p1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ug(i){return i.replace(p1,m1)}function m1(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Og(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var g1={[wl]:"SHADOWMAP_TYPE_PCF",[Va]:"SHADOWMAP_TYPE_VSM"};function _1(i){return g1[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var x1={[ur]:"ENVMAP_TYPE_CUBE",[zr]:"ENVMAP_TYPE_CUBE",[El]:"ENVMAP_TYPE_CUBE_UV"};function v1(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":x1[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var y1={[zr]:"ENVMAP_MODE_REFRACTION"};function S1(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":y1[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var b1={[Nu]:"ENVMAP_BLENDING_MULTIPLY",[j0]:"ENVMAP_BLENDING_MIX",[K0]:"ENVMAP_BLENDING_ADD"};function M1(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":b1[i.combine]||"ENVMAP_BLENDING_NONE"}function w1(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function E1(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,c=e.fragmentShader,h=_1(e),d=v1(e),p=S1(e),b=M1(e),g=w1(e),M=l1(e),w=c1(r),N=s.createProgram(),y,m,z=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(y=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w].filter(Ol).join(`
`),y.length>0&&(y+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w].filter(Ol).join(`
`),m.length>0&&(m+=`
`)):(y=[Og(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+p:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ol).join(`
`),m=[Og(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.envMap?"#define "+p:"",e.envMap?"#define "+b:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ji?"#define TONE_MAPPING":"",e.toneMapping!==ji?ke.tonemapping_pars_fragment:"",e.toneMapping!==ji?a1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,s1("linearToOutputTexel",e.outputColorSpace),o1(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ol).join(`
`)),o=sp(o),o=Dg(o,e),o=Ng(o,e),c=sp(c),c=Dg(c,e),c=Ng(c,e),o=Ug(o),c=Ug(c),e.isRawShaderMaterial!==!0&&(z=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,m=["#define varying in",e.glslVersion===$f?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===$f?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let H=z+y+o,D=z+m+c,E=Ig(s,s.VERTEX_SHADER,H),k=Ig(s,s.FRAGMENT_SHADER,D);s.attachShader(N,E),s.attachShader(N,k),e.index0AttributeName!==void 0?s.bindAttribLocation(N,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(N,0,"position"),s.linkProgram(N);function J(Z){if(i.debug.checkShaderErrors){let ot=s.getProgramInfoLog(N)||"",dt=s.getShaderInfoLog(E)||"",tt=s.getShaderInfoLog(k)||"",st=ot.trim(),mt=dt.trim(),_t=tt.trim(),Ct=!0,xt=!0;if(s.getProgramParameter(N,s.LINK_STATUS)===!1)if(Ct=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,N,E,k);else{let Et=Lg(s,E,"vertex"),Mt=Lg(s,k,"fragment");we("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(N,s.VALIDATE_STATUS)+`

Material Name: `+Z.name+`
Material Type: `+Z.type+`

Program Info Log: `+st+`
`+Et+`
`+Mt)}else st!==""?Me("WebGLProgram: Program Info Log:",st):(mt===""||_t==="")&&(xt=!1);xt&&(Z.diagnostics={runnable:Ct,programLog:st,vertexShader:{log:mt,prefix:y},fragmentShader:{log:_t,prefix:m}})}s.deleteShader(E),s.deleteShader(k),I=new Ya(s,N),B=u1(s,N)}let I;this.getUniforms=function(){return I===void 0&&J(this),I};let B;this.getAttributes=function(){return B===void 0&&J(this),B};let Y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Y===!1&&(Y=s.getProgramParameter(N,t1)),Y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(N),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=e1++,this.cacheKey=t,this.usedTimes=1,this.program=N,this.vertexShader=E,this.fragmentShader=k,this}var T1=0,rp=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new ap(t),e.set(t,n)),n}},ap=class{constructor(t){this.id=T1++,this.code=t,this.usedTimes=0}};function A1(i){return i===fr||i===Pl||i===Ll}function C1(i,t,e,n,s,r){let o=new Na,c=new rp,h=new Set,d=[],p=new Map,b=n.logarithmicDepthBuffer,g=n.precision,M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(I){return h.add(I),I===0?"uv":`uv${I}`}function N(I,B,Y,Z,ot,dt){let tt=Z.fog,st=ot.geometry,mt=I.isMeshStandardMaterial||I.isMeshLambertMaterial||I.isMeshPhongMaterial?Z.environment:null,_t=I.isMeshStandardMaterial||I.isMeshLambertMaterial&&!I.envMap||I.isMeshPhongMaterial&&!I.envMap,Ct=t.get(I.envMap||mt,_t),xt=Ct&&Ct.mapping===El?Ct.image.height:null,Et=M[I.type];I.precision!==null&&(g=n.getMaxPrecision(I.precision),g!==I.precision&&Me("WebGLProgram.getParameters:",I.precision,"not supported, using",g,"instead."));let Mt=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,zt=Mt!==void 0?Mt.length:0,ne=0;st.morphAttributes.position!==void 0&&(ne=1),st.morphAttributes.normal!==void 0&&(ne=2),st.morphAttributes.color!==void 0&&(ne=3);let je,Oe,We,vt;if(Et){let Je=hi[Et];je=Je.vertexShader,Oe=Je.fragmentShader}else{je=I.vertexShader,Oe=I.fragmentShader;let Je=c.getVertexShaderStage(I),ze=c.getFragmentShaderStage(I);c.update(I,Je,ze),We=Je.id,vt=ze.id}let yt=i.getRenderTarget(),Pt=i.state.buffers.depth.getReversed(),fe=ot.isInstancedMesh===!0,Kt=ot.isBatchedMesh===!0,_e=!!I.map,Qt=!!I.matcap,rt=!!Ct,Rt=!!I.aoMap,V=!!I.lightMap,It=!!I.bumpMap&&I.wireframe===!1,$t=!!I.normalMap,ce=!!I.displacementMap,pe=!!I.emissiveMap,Se=!!I.metalnessMap,Re=!!I.roughnessMap,q=I.anisotropy>0,Qe=I.clearcoat>0,Fe=I.dispersion>0,F=I.retroreflectivity>0,T=I.iridescence>0,at=I.sheen>0,lt=I.transmission>0,gt=q&&!!I.anisotropyMap,Dt=Qe&&!!I.clearcoatMap,Ht=Qe&&!!I.clearcoatNormalMap,pt=Qe&&!!I.clearcoatRoughnessMap,wt=T&&!!I.iridescenceMap,kt=T&&!!I.iridescenceThicknessMap,Lt=at&&!!I.sheenColorMap,Zt=at&&!!I.sheenRoughnessMap,Yt=!!I.specularMap,ue=!!I.specularColorMap,xe=!!I.specularIntensityMap,Te=lt&&!!I.transmissionMap,et=lt&&!!I.thicknessMap,Gt=!!I.gradientMap,St=!!I.alphaMap,Jt=I.alphaTest>0,te=!!I.alphaHash,At=!!I.extensions,he=ji;I.toneMapped&&(yt===null||yt.isXRRenderTarget===!0)&&(he=i.toneMapping);let le={shaderID:Et,shaderType:I.type,shaderName:I.name,vertexShader:je,fragmentShader:Oe,defines:I.defines,customVertexShaderID:We,customFragmentShaderID:vt,isRawShaderMaterial:I.isRawShaderMaterial===!0,glslVersion:I.glslVersion,precision:g,batching:Kt,batchingColor:Kt&&ot._colorsTexture!==null,instancing:fe,instancingColor:fe&&ot.instanceColor!==null,instancingMorph:fe&&ot.morphTexture!==null,outputColorSpace:yt===null?i.outputColorSpace:yt.isXRRenderTarget===!0?yt.texture.colorSpace:Ye.workingColorSpace,alphaToCoverage:!!I.alphaToCoverage,map:_e,matcap:Qt,envMap:rt,envMapMode:rt&&Ct.mapping,envMapCubeUVHeight:xt,aoMap:Rt,lightMap:V,bumpMap:It,normalMap:$t,displacementMap:ce,emissiveMap:pe,normalMapObjectSpace:$t&&I.normalMapType===eg,normalMapTangentSpace:$t&&I.normalMapType===Sh,packedNormalMap:$t&&I.normalMapType===Sh&&A1(I.normalMap.format),metalnessMap:Se,roughnessMap:Re,anisotropy:q,anisotropyMap:gt,clearcoat:Qe,clearcoatMap:Dt,clearcoatNormalMap:Ht,clearcoatRoughnessMap:pt,dispersion:Fe,retroreflection:F,iridescence:T,iridescenceMap:wt,iridescenceThicknessMap:kt,sheen:at,sheenColorMap:Lt,sheenRoughnessMap:Zt,specularMap:Yt,specularColorMap:ue,specularIntensityMap:xe,transmission:lt,transmissionMap:Te,thicknessMap:et,gradientMap:Gt,opaque:I.transparent===!1&&I.blending===Ha&&I.alphaToCoverage===!1,alphaMap:St,alphaTest:Jt,alphaHash:te,combine:I.combine,mapUv:_e&&w(I.map.channel),aoMapUv:Rt&&w(I.aoMap.channel),lightMapUv:V&&w(I.lightMap.channel),bumpMapUv:It&&w(I.bumpMap.channel),normalMapUv:$t&&w(I.normalMap.channel),displacementMapUv:ce&&w(I.displacementMap.channel),emissiveMapUv:pe&&w(I.emissiveMap.channel),metalnessMapUv:Se&&w(I.metalnessMap.channel),roughnessMapUv:Re&&w(I.roughnessMap.channel),anisotropyMapUv:gt&&w(I.anisotropyMap.channel),clearcoatMapUv:Dt&&w(I.clearcoatMap.channel),clearcoatNormalMapUv:Ht&&w(I.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pt&&w(I.clearcoatRoughnessMap.channel),iridescenceMapUv:wt&&w(I.iridescenceMap.channel),iridescenceThicknessMapUv:kt&&w(I.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&w(I.sheenColorMap.channel),sheenRoughnessMapUv:Zt&&w(I.sheenRoughnessMap.channel),specularMapUv:Yt&&w(I.specularMap.channel),specularColorMapUv:ue&&w(I.specularColorMap.channel),specularIntensityMapUv:xe&&w(I.specularIntensityMap.channel),transmissionMapUv:Te&&w(I.transmissionMap.channel),thicknessMapUv:et&&w(I.thicknessMap.channel),alphaMapUv:St&&w(I.alphaMap.channel),vertexTangents:!!st.attributes.tangent&&($t||q),vertexNormals:!!st.attributes.normal,vertexColors:I.vertexColors,vertexAlphas:I.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,pointsUvs:ot.isPoints===!0&&!!st.attributes.uv&&(_e||St),fog:!!tt,useFog:I.fog===!0,fogExp2:!!tt&&tt.isFogExp2,flatShading:I.wireframe===!1&&(I.flatShading===!0||st.attributes.normal===void 0&&$t===!1&&(I.isMeshLambertMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isMeshPhysicalMaterial)),sizeAttenuation:I.sizeAttenuation===!0,logarithmicDepthBuffer:b,reversedDepthBuffer:Pt,skinning:ot.isSkinnedMesh===!0,hasPositionAttribute:st.attributes.position!==void 0,morphTargets:st.morphAttributes.position!==void 0,morphNormals:st.morphAttributes.normal!==void 0,morphColors:st.morphAttributes.color!==void 0,morphTargetsCount:zt,morphTextureStride:ne,numSunLights:B.sun.length,numDirLights:B.directional.length,numPointLights:B.point.length,numSpotLights:B.spot.length,numSpotLightMaps:B.spotLightMap.length,numRectAreaLights:B.rectArea.length,numHemiLights:B.hemi.length,numSunLightShadows:B.sunShadowMap.length,numDirLightShadows:B.directionalShadowMap.length,numPointLightShadows:B.pointShadowMap.length,numSpotLightShadows:B.spotShadowMap.length,numSpotLightShadowsWithMaps:B.numSpotLightShadowsWithMaps,numLightProbes:B.numLightProbes,numLightProbeGrids:dt.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:I.dithering,shadowMapEnabled:i.shadowMap.enabled&&Y.length>0,shadowMapType:i.shadowMap.type,toneMapping:he,decodeVideoTexture:_e&&I.map.isVideoTexture===!0&&Ye.getTransfer(I.map.colorSpace)===an,decodeVideoTextureEmissive:pe&&I.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(I.emissiveMap.colorSpace)===an,premultipliedAlpha:I.premultipliedAlpha,doubleSided:I.side===ps,flipSided:I.side===ui,useDepthPacking:I.depthPacking>=0,depthPacking:I.depthPacking||0,index0AttributeName:I.index0AttributeName,extensionClipCullDistance:At&&I.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(At&&I.extensions.multiDraw===!0||Kt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:I.customProgramCacheKey()};return le.vertexUv1s=h.has(1),le.vertexUv2s=h.has(2),le.vertexUv3s=h.has(3),h.clear(),le}function y(I){let B=[];if(I.shaderID?B.push(I.shaderID):(B.push(I.customVertexShaderID),B.push(I.customFragmentShaderID)),I.defines!==void 0)for(let Y in I.defines)B.push(Y),B.push(I.defines[Y]);return I.isRawShaderMaterial===!1&&(m(B,I),z(B,I),B.push(i.outputColorSpace)),B.push(I.customProgramCacheKey),B.join()}function m(I,B){I.push(B.precision),I.push(B.outputColorSpace),I.push(B.envMapMode),I.push(B.envMapCubeUVHeight),I.push(B.mapUv),I.push(B.alphaMapUv),I.push(B.lightMapUv),I.push(B.aoMapUv),I.push(B.bumpMapUv),I.push(B.normalMapUv),I.push(B.displacementMapUv),I.push(B.emissiveMapUv),I.push(B.metalnessMapUv),I.push(B.roughnessMapUv),I.push(B.anisotropyMapUv),I.push(B.clearcoatMapUv),I.push(B.clearcoatNormalMapUv),I.push(B.clearcoatRoughnessMapUv),I.push(B.iridescenceMapUv),I.push(B.iridescenceThicknessMapUv),I.push(B.sheenColorMapUv),I.push(B.sheenRoughnessMapUv),I.push(B.specularMapUv),I.push(B.specularColorMapUv),I.push(B.specularIntensityMapUv),I.push(B.transmissionMapUv),I.push(B.thicknessMapUv),I.push(B.combine),I.push(B.fogExp2),I.push(B.sizeAttenuation),I.push(B.morphTargetsCount),I.push(B.morphAttributeCount),I.push(B.numSunLights),I.push(B.numDirLights),I.push(B.numPointLights),I.push(B.numSpotLights),I.push(B.numSpotLightMaps),I.push(B.numHemiLights),I.push(B.numRectAreaLights),I.push(B.numSunLightShadows),I.push(B.numDirLightShadows),I.push(B.numPointLightShadows),I.push(B.numSpotLightShadows),I.push(B.numSpotLightShadowsWithMaps),I.push(B.numLightProbes),I.push(B.shadowMapType),I.push(B.toneMapping),I.push(B.numClippingPlanes),I.push(B.numClipIntersection),I.push(B.depthPacking)}function z(I,B){o.disableAll(),B.instancing&&o.enable(0),B.instancingColor&&o.enable(1),B.instancingMorph&&o.enable(2),B.matcap&&o.enable(3),B.envMap&&o.enable(4),B.normalMapObjectSpace&&o.enable(5),B.normalMapTangentSpace&&o.enable(6),B.clearcoat&&o.enable(7),B.iridescence&&o.enable(8),B.alphaTest&&o.enable(9),B.vertexColors&&o.enable(10),B.vertexAlphas&&o.enable(11),B.vertexUv1s&&o.enable(12),B.vertexUv2s&&o.enable(13),B.vertexUv3s&&o.enable(14),B.vertexTangents&&o.enable(15),B.anisotropy&&o.enable(16),B.alphaHash&&o.enable(17),B.batching&&o.enable(18),B.dispersion&&o.enable(19),B.retroreflection&&o.enable(24),B.batchingColor&&o.enable(20),B.gradientMap&&o.enable(21),B.packedNormalMap&&o.enable(22),B.vertexNormals&&o.enable(23),I.push(o.mask),o.disableAll(),B.fog&&o.enable(0),B.useFog&&o.enable(1),B.flatShading&&o.enable(2),B.logarithmicDepthBuffer&&o.enable(3),B.reversedDepthBuffer&&o.enable(4),B.skinning&&o.enable(5),B.morphTargets&&o.enable(6),B.morphNormals&&o.enable(7),B.morphColors&&o.enable(8),B.premultipliedAlpha&&o.enable(9),B.shadowMapEnabled&&o.enable(10),B.doubleSided&&o.enable(11),B.flipSided&&o.enable(12),B.useDepthPacking&&o.enable(13),B.dithering&&o.enable(14),B.transmission&&o.enable(15),B.sheen&&o.enable(16),B.opaque&&o.enable(17),B.pointsUvs&&o.enable(18),B.decodeVideoTexture&&o.enable(19),B.decodeVideoTextureEmissive&&o.enable(20),B.alphaToCoverage&&o.enable(21),B.numLightProbeGrids>0&&o.enable(22),B.hasPositionAttribute&&o.enable(23),I.push(o.mask)}function H(I){let B=M[I.type],Y;if(B){let Z=hi[B];Y=Dl.clone(Z.uniforms)}else Y=I.uniforms;return Y}function D(I,B){let Y=p.get(B);return Y!==void 0?++Y.usedTimes:(Y=new E1(i,B,I,s),d.push(Y),p.set(B,Y)),Y}function E(I){if(--I.usedTimes===0){let B=d.indexOf(I);d[B]=d[d.length-1],d.pop(),p.delete(I.cacheKey),I.destroy()}}function k(I){c.remove(I)}function J(){c.dispose()}return{getParameters:N,getProgramCacheKey:y,getUniforms:H,acquireProgram:D,releaseProgram:E,releaseShaderCache:k,programs:d,dispose:J}}function R1(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let c=i.get(o);return c===void 0&&(c={},i.set(o,c)),c}function n(o){i.delete(o)}function s(o,c,h){i.get(o)[c]=h}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function I1(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Fg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Bg(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(g){let M=0;return g.isInstancedMesh&&(M+=2),g.isSkinnedMesh&&(M+=1),M}function c(g,M,w,N,y,m){let z=i[t];return z===void 0?(z={id:g.id,object:g,geometry:M,material:w,materialVariant:o(g),groupOrder:N,renderOrder:g.renderOrder,z:y,group:m},i[t]=z):(z.id=g.id,z.object=g,z.geometry=M,z.material=w,z.materialVariant=o(g),z.groupOrder=N,z.renderOrder=g.renderOrder,z.z=y,z.group=m),t++,z}function h(g,M,w,N,y,m,z){z.reversedDepth===!0&&(y=-y);let H=c(g,M,w,N,y,m);w.transmission>0?n.push(H):w.transparent===!0?s.push(H):e.push(H)}function d(g,M,w,N,y,m){let z=c(g,M,w,N,y,m);w.transmission>0?n.unshift(z):w.transparent===!0?s.unshift(z):e.unshift(z)}function p(g,M){e.length>1&&e.sort(g||I1),n.length>1&&n.sort(M||Fg),s.length>1&&s.sort(M||Fg)}function b(){for(let g=t,M=i.length;g<M;g++){let w=i[g];if(w.id===null)break;w.id=null,w.object=null,w.geometry=null,w.material=null,w.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:h,unshift:d,finish:b,sort:p}}function P1(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Bg,i.set(n,[o])):s>=r.length?(o=new Bg,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function L1(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new j,color:new ye};break;case"SpotLight":e={position:new j,direction:new j,color:new ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new j,color:new ye,distance:0,decay:0};break;case"HemisphereLight":e={direction:new j,skyColor:new ye,groundColor:new ye};break;case"RectAreaLight":e={color:new ye,position:new j,halfWidth:new j,halfHeight:new j};break}return i[t.id]=e,e}}}function D1(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var N1=0;function U1(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function O1(i){let t=new L1,e=D1(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)n.probe.push(new j);let s=new j,r=new Ze,o=new Ze;function c(d){let p=0,b=0,g=0;for(let ot=0;ot<9;ot++)n.probe[ot].set(0,0,0);let M=0,w=0,N=0,y=0,m=0,z=0,H=0,D=0,E=0,k=0,J=0,I=0,B=0,Y=0;d.sort(U1);for(let ot=0,dt=d.length;ot<dt;ot++){let tt=d[ot],st=tt.color,mt=tt.intensity,_t=tt.distance,Ct=null;if(tt.shadow&&tt.shadow.map&&(tt.shadow.map.texture.format===fr?Ct=tt.shadow.map.texture:Ct=tt.shadow.map.depthTexture||tt.shadow.map.texture),tt.isAmbientLight)p+=st.r*mt,b+=st.g*mt,g+=st.b*mt;else if(tt.isLightProbe){for(let xt=0;xt<9;xt++)n.probe[xt].addScaledVector(tt.sh.coefficients[xt],mt);Y++}else if(tt.isSunLight){let xt=t.get(tt);if(xt.color.copy(tt.color).multiplyScalar(tt.intensity),tt.castShadow){let Et=tt.shadow,Mt=e.get(tt);Mt.shadowIntensity=Et.intensity,Mt.shadowBias=Et.bias,Mt.shadowNormalBias=Et.normalBias,Mt.shadowRadius=Et.radius,Mt.shadowMapSize.copy(Et.mapSize).multiply(Et.getFrameExtents()),n.sunShadow[w]=Mt,n.sunShadowMap[w]=Ct;let zt=Et.getViewportCount();for(let ne=0;ne<zt;ne++)n.sunShadowMatrix[N+ne]=Et.getMatrix(ne),n.sunShadowCascade[N+ne]=Et._cascadeData[ne];N+=zt,w++}n.sun[M]=xt,M++}else if(tt.isDirectionalLight){let xt=t.get(tt);if(xt.color.copy(tt.color).multiplyScalar(tt.intensity),tt.castShadow){let Et=tt.shadow,Mt=e.get(tt);Mt.shadowIntensity=Et.intensity,Mt.shadowBias=Et.bias,Mt.shadowNormalBias=Et.normalBias,Mt.shadowRadius=Et.radius,Mt.shadowMapSize=Et.mapSize,n.directionalShadow[y]=Mt,n.directionalShadowMap[y]=Ct,n.directionalShadowMatrix[y]=tt.shadow.matrix,E++}n.directional[y]=xt,y++}else if(tt.isSpotLight){let xt=t.get(tt);xt.position.setFromMatrixPosition(tt.matrixWorld),xt.color.copy(st).multiplyScalar(mt),xt.distance=_t,xt.coneCos=Math.cos(tt.angle),xt.penumbraCos=Math.cos(tt.angle*(1-tt.penumbra)),xt.decay=tt.decay,n.spot[z]=xt;let Et=tt.shadow;if(tt.map&&(n.spotLightMap[I]=tt.map,I++,Et.updateMatrices(tt),tt.castShadow&&B++),n.spotLightMatrix[z]=Et.matrix,tt.castShadow){let Mt=e.get(tt);Mt.shadowIntensity=Et.intensity,Mt.shadowBias=Et.bias,Mt.shadowNormalBias=Et.normalBias,Mt.shadowRadius=Et.radius,Mt.shadowMapSize=Et.mapSize,n.spotShadow[z]=Mt,n.spotShadowMap[z]=Ct,J++}z++}else if(tt.isRectAreaLight){let xt=t.get(tt);xt.color.copy(st).multiplyScalar(mt),xt.halfWidth.set(tt.width*.5,0,0),xt.halfHeight.set(0,tt.height*.5,0),n.rectArea[H]=xt,H++}else if(tt.isPointLight){let xt=t.get(tt);if(xt.color.copy(tt.color).multiplyScalar(tt.intensity),xt.distance=tt.distance,xt.decay=tt.decay,tt.castShadow){let Et=tt.shadow,Mt=e.get(tt);Mt.shadowIntensity=Et.intensity,Mt.shadowBias=Et.bias,Mt.shadowNormalBias=Et.normalBias,Mt.shadowRadius=Et.radius,Mt.shadowMapSize=Et.mapSize,Mt.shadowCameraNear=Et.camera.near,Mt.shadowCameraFar=Et.camera.far,n.pointShadow[m]=Mt,n.pointShadowMap[m]=Ct,n.pointShadowMatrix[m]=tt.shadow.matrix,k++}n.point[m]=xt,m++}else if(tt.isHemisphereLight){let xt=t.get(tt);xt.skyColor.copy(tt.color).multiplyScalar(mt),xt.groundColor.copy(tt.groundColor).multiplyScalar(mt),n.hemi[D]=xt,D++}}H>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=qt.LTC_FLOAT_1,n.rectAreaLTC2=qt.LTC_FLOAT_2):(n.rectAreaLTC1=qt.LTC_HALF_1,n.rectAreaLTC2=qt.LTC_HALF_2)),n.ambient[0]=p,n.ambient[1]=b,n.ambient[2]=g;let Z=n.hash;(Z.sunLength!==M||Z.directionalLength!==y||Z.pointLength!==m||Z.spotLength!==z||Z.rectAreaLength!==H||Z.hemiLength!==D||Z.numSunShadows!==w||Z.numDirectionalShadows!==E||Z.numPointShadows!==k||Z.numSpotShadows!==J||Z.numSpotMaps!==I||Z.numLightProbes!==Y)&&(n.sun.length=M,n.directional.length=y,n.spot.length=z,n.rectArea.length=H,n.point.length=m,n.hemi.length=D,n.sunShadow.length=w,n.sunShadowMap.length=w,n.sunShadowMatrix.length=N,n.sunShadowCascade.length=N,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=k,n.pointShadowMap.length=k,n.pointShadowMatrix.length=k,n.spotShadow.length=J,n.spotShadowMap.length=J,n.spotLightMatrix.length=J+I-B,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=B,n.numLightProbes=Y,Z.sunLength=M,Z.directionalLength=y,Z.pointLength=m,Z.spotLength=z,Z.rectAreaLength=H,Z.hemiLength=D,Z.numSunShadows=w,Z.numDirectionalShadows=E,Z.numPointShadows=k,Z.numSpotShadows=J,Z.numSpotMaps=I,Z.numLightProbes=Y,n.version=N1++)}function h(d,p){let b=0,g=0,M=0,w=0,N=0,y=0,m=p.matrixWorldInverse;for(let z=0,H=d.length;z<H;z++){let D=d[z];if(D.isSunLight){let E=n.sun[b];E.direction.setFromMatrixPosition(D.matrixWorld),E.direction.transformDirection(m),b++}else if(D.isDirectionalLight){let E=n.directional[g];E.direction.setFromMatrixPosition(D.matrixWorld),s.setFromMatrixPosition(D.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),g++}else if(D.isSpotLight){let E=n.spot[w];E.position.setFromMatrixPosition(D.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(D.matrixWorld),s.setFromMatrixPosition(D.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),w++}else if(D.isRectAreaLight){let E=n.rectArea[N];E.position.setFromMatrixPosition(D.matrixWorld),E.position.applyMatrix4(m),o.identity(),r.copy(D.matrixWorld),r.premultiply(m),o.extractRotation(r),E.halfWidth.set(D.width*.5,0,0),E.halfHeight.set(0,D.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),N++}else if(D.isPointLight){let E=n.point[M];E.position.setFromMatrixPosition(D.matrixWorld),E.position.applyMatrix4(m),M++}else if(D.isHemisphereLight){let E=n.hemi[y];E.direction.setFromMatrixPosition(D.matrixWorld),E.direction.transformDirection(m),y++}}}return{setup:c,setupView:h,state:n}}function kg(i){let t=new O1(i),e=[],n=[],s=[];function r(g){b.camera=g,e.length=0,n.length=0,s.length=0}function o(g){e.push(g)}function c(g){n.push(g)}function h(g){s.push(g)}function d(){t.setup(e)}function p(g){t.setupView(e,g)}let b={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:b,setupLights:d,setupLightsView:p,pushLight:o,pushShadow:c,pushLightProbeGrid:h}}function F1(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),c;return o===void 0?(c=new kg(i),t.set(s,[c])):r>=o.length?(c=new kg(i),o.push(c)):c=o[r],c}function n(){t=new WeakMap}return{get:e,dispose:n}}var B1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,k1=`uniform sampler2D shadow_pass;
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
}`,$1=[new j(1,0,0),new j(-1,0,0),new j(0,1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1)],z1=[new j(0,-1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1),new j(0,-1,0),new j(0,-1,0)],$g=new Ze,Ul=new j,Qf=new j;function V1(i,t,e){let n=new Oa,s=new Wt,r=new Wt,o=new on,c=new vu,h=new yu,d={},p=e.maxTextureSize,b={[cr]:ui,[ui]:cr,[ps]:ps},g=new kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Wt},radius:{value:4}},vertexShader:B1,fragmentShader:k1}),M=g.clone();M.defines.HORIZONTAL_PASS=1;let w=new En;w.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let N=new Bn(w,g),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wl;let m=this.type;this.render=function(k,J,I){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||k.length===0)return;this.type===L0&&(Me("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=wl);let B=i.getRenderTarget(),Y=i.getActiveCubeFace(),Z=i.getActiveMipmapLevel(),ot=i.state;ot.setBlending(ms),ot.buffers.depth.getReversed()===!0?ot.buffers.color.setClear(0,0,0,0):ot.buffers.color.setClear(1,1,1,1),ot.buffers.depth.setTest(!0),ot.setScissorTest(!1);let dt=m!==this.type;dt&&J.traverse(function(tt){tt.material&&(Array.isArray(tt.material)?tt.material.forEach(st=>st.needsUpdate=!0):tt.material.needsUpdate=!0)});for(let tt=0,st=k.length;tt<st;tt++){let mt=k[tt],_t=mt.shadow;if(_t===void 0){Me("WebGLShadowMap:",mt,"has no shadow.");continue}if(_t.autoUpdate===!1&&_t.needsUpdate===!1)continue;s.copy(_t.mapSize);let Ct=_t.getFrameExtents();s.multiply(Ct),r.copy(_t.mapSize),(s.x>p||s.y>p)&&(s.x>p&&(r.x=Math.floor(p/Ct.x),s.x=r.x*Ct.x,_t.mapSize.x=r.x),s.y>p&&(r.y=Math.floor(p/Ct.y),s.y=r.y*Ct.y,_t.mapSize.y=r.y));let xt=i.state.buffers.depth.getReversed();if(_t.camera._reversedDepth=xt,_t.map===null||dt===!0){if(_t.map!==null&&(_t.map.depthTexture!==null&&(_t.map.depthTexture.dispose(),_t.map.depthTexture=null),_t.map.dispose()),this.type===Va){if(mt.isPointLight){Me("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}_t.map=new vi(s.x,s.y,{format:fr,type:Qi,minFilter:Gn,magFilter:Gn,generateMipmaps:!1}),_t.map.texture.name=mt.name+".shadowMap",_t.map.depthTexture=new sr(s.x,s.y,Bi),_t.map.depthTexture.name=mt.name+".shadowMapDepth",_t.map.depthTexture.format=us,_t.map.depthTexture.compareFunction=null,_t.map.depthTexture.minFilter=On,_t.map.depthTexture.magFilter=On}else mt.isPointLight?(_t.map=new Ah(s.x),_t.map.depthTexture=new hu(s.x,Ki)):(_t.map=new vi(s.x,s.y),_t.map.depthTexture=new sr(s.x,s.y,Ki)),_t.map.depthTexture.name=mt.name+".shadowMap",_t.map.depthTexture.format=us,this.type===wl?(_t.map.depthTexture.compareFunction=xt?Mh:bh,_t.map.depthTexture.minFilter=Gn,_t.map.depthTexture.magFilter=Gn):(_t.map.depthTexture.compareFunction=null,_t.map.depthTexture.minFilter=On,_t.map.depthTexture.magFilter=On);_t.camera.updateProjectionMatrix()}_t.map.isWebGLCubeRenderTarget!==!0&&(_t.map.width!==s.x||_t.map.height!==s.y)&&_t.map.setSize(s.x,s.y);let Et=_t.map.isWebGLCubeRenderTarget?6:_t.getViewportCount();mt.isPointLight!==!0&&_t.updateMatrices(mt,I);for(let Mt=0;Mt<Et;Mt++){let zt=_t.getCamera(Mt);if(mt.isPointLight){let ne=_t.camera,je=_t.matrix,Oe=mt.distance||ne.far;Oe!==ne.far&&(ne.far=Oe,ne.updateProjectionMatrix()),Ul.setFromMatrixPosition(mt.matrixWorld),ne.position.copy(Ul),Qf.copy(ne.position),Qf.add($1[Mt]),ne.up.copy(z1[Mt]),ne.lookAt(Qf),ne.updateMatrixWorld(),je.makeTranslation(-Ul.x,-Ul.y,-Ul.z),$g.multiplyMatrices(ne.projectionMatrix,ne.matrixWorldInverse),_t._frustum.setFromProjectionMatrix($g,ne.coordinateSystem,ne.reversedDepth)}if(_t.map.isWebGLCubeRenderTarget)i.setRenderTarget(_t.map,Mt),i.clear();else{Mt===0&&(i.setRenderTarget(_t.map),i.clear());let ne=_t.getViewport(Mt);o.set(r.x*ne.x,r.y*ne.y,r.x*ne.z,r.y*ne.w),ot.viewport(o)}n=_t.getFrustum(Mt),D(J,I,zt,mt,this.type)}_t.isPointLightShadow!==!0&&this.type===Va&&z(_t,I),_t.needsUpdate=!1}m=this.type,y.needsUpdate=!1,i.setRenderTarget(B,Y,Z)};function z(k,J){let I=t.update(N);g.defines.VSM_SAMPLES!==k.blurSamples&&(g.defines.VSM_SAMPLES=k.blurSamples,M.defines.VSM_SAMPLES=k.blurSamples,g.needsUpdate=!0,M.needsUpdate=!0),k.mapPass===null?k.mapPass=new vi(s.x,s.y,{format:fr,type:Qi}):(k.mapPass.width!==k.map.width||k.mapPass.height!==k.map.height)&&k.mapPass.setSize(k.map.width,k.map.height),g.uniforms.shadow_pass.value=k.map.depthTexture,g.uniforms.resolution.value.set(k.map.width,k.map.height),g.uniforms.radius.value=k.radius,i.setRenderTarget(k.mapPass),i.clear(),i.renderBufferDirect(J,null,I,g,N,null),M.uniforms.shadow_pass.value=k.mapPass.texture,M.uniforms.resolution.value.set(k.map.width,k.map.height),M.uniforms.radius.value=k.radius,i.setRenderTarget(k.map),i.clear(),i.renderBufferDirect(J,null,I,M,N,null)}function H(k,J,I,B){let Y=null,Z=I.isPointLight===!0?k.customDistanceMaterial:k.customDepthMaterial;if(Z!==void 0)Y=Z;else if(Y=I.isPointLight===!0?h:c,i.localClippingEnabled&&J.clipShadows===!0&&Array.isArray(J.clippingPlanes)&&J.clippingPlanes.length!==0||J.displacementMap&&J.displacementScale!==0||J.alphaMap&&J.alphaTest>0||J.map&&J.alphaTest>0||J.alphaToCoverage===!0){let ot=Y.uuid,dt=J.uuid,tt=d[ot];tt===void 0&&(tt={},d[ot]=tt);let st=tt[dt];st===void 0&&(st=Y.clone(),tt[dt]=st,J.addEventListener("dispose",E)),Y=st}if(Y.visible=J.visible,Y.wireframe=J.wireframe,B===Va?Y.side=J.shadowSide!==null?J.shadowSide:J.side:Y.side=J.shadowSide!==null?J.shadowSide:b[J.side],Y.alphaMap=J.alphaMap,Y.alphaTest=J.alphaToCoverage===!0?.5:J.alphaTest,Y.map=J.map,Y.clipShadows=J.clipShadows,Y.clippingPlanes=J.clippingPlanes,Y.clipIntersection=J.clipIntersection,Y.displacementMap=J.displacementMap,Y.displacementScale=J.displacementScale,Y.displacementBias=J.displacementBias,Y.wireframeLinewidth=J.wireframeLinewidth,Y.linewidth=J.linewidth,I.isPointLight===!0&&Y.isMeshDistanceMaterial===!0){let ot=i.properties.get(Y);ot.light=I}return Y}function D(k,J,I,B,Y){if(k.visible===!1)return;if(k.layers.test(J.layers)&&(k.isMesh||k.isLine||k.isPoints)&&(k.castShadow||k.receiveShadow&&Y===Va)&&(!k.frustumCulled||k.intersectsFrustum(n))){k.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,k.matrixWorld);let dt=t.update(k),tt=k.material;if(Array.isArray(tt)){let st=dt.groups;for(let mt=0,_t=st.length;mt<_t;mt++){let Ct=st[mt],xt=tt[Ct.materialIndex];if(xt&&xt.visible){let Et=H(k,xt,B,Y);k.onBeforeShadow(i,k,J,I,dt,Et,Ct),i.renderBufferDirect(I,null,dt,Et,k,Ct),k.onAfterShadow(i,k,J,I,dt,Et,Ct)}}}else if(tt.visible){let st=H(k,tt,B,Y);k.onBeforeShadow(i,k,J,I,dt,st,null),i.renderBufferDirect(I,null,dt,st,k,null),k.onAfterShadow(i,k,J,I,dt,st,null)}}let ot=k.children;for(let dt=0,tt=ot.length;dt<tt;dt++)D(ot[dt],J,I,B,Y)}function E(k){k.target.removeEventListener("dispose",E);for(let I in d){let B=d[I],Y=k.target.uuid;Y in B&&(B[Y].dispose(),delete B[Y])}}}function H1(i,t){function e(){let et=!1,Gt=new on,St=null,Jt=new on(0,0,0,0);return{setMask:function(te){St!==te&&!et&&(i.colorMask(te,te,te,te),St=te)},setLocked:function(te){et=te},setClear:function(te,At,he,le,Je){Je===!0&&(te*=le,At*=le,he*=le),Gt.set(te,At,he,le),Jt.equals(Gt)===!1&&(i.clearColor(te,At,he,le),Jt.copy(Gt))},reset:function(){et=!1,St=null,Jt.set(-1,0,0,0)}}}function n(){let et=!1,Gt=!1,St=null,Jt=null,te=null;return{setReversed:function(At){if(Gt!==At){let he=t.get("EXT_clip_control");At?he.clipControlEXT(he.LOWER_LEFT_EXT,he.ZERO_TO_ONE_EXT):he.clipControlEXT(he.LOWER_LEFT_EXT,he.NEGATIVE_ONE_TO_ONE_EXT),Gt=At;let le=te;te=null,this.setClear(le)}},getReversed:function(){return Gt},setTest:function(At){At?yt(i.DEPTH_TEST):Pt(i.DEPTH_TEST)},setMask:function(At){St!==At&&!et&&(i.depthMask(At),St=At)},setFunc:function(At){if(Gt&&(At=dg[At]),Jt!==At){switch(At){case qc:i.depthFunc(i.NEVER);break;case Yc:i.depthFunc(i.ALWAYS);break;case Jc:i.depthFunc(i.LESS);break;case Ra:i.depthFunc(i.LEQUAL);break;case Zc:i.depthFunc(i.EQUAL);break;case jc:i.depthFunc(i.GEQUAL);break;case Kc:i.depthFunc(i.GREATER);break;case Qc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Jt=At}},setLocked:function(At){et=At},setClear:function(At){te!==At&&(te=At,Gt&&(At=1-At),i.clearDepth(At))},reset:function(){et=!1,St=null,Jt=null,te=null,Gt=!1}}}function s(){let et=!1,Gt=null,St=null,Jt=null,te=null,At=null,he=null,le=null,Je=null;return{setTest:function(ze){et||(ze?yt(i.STENCIL_TEST):Pt(i.STENCIL_TEST))},setMask:function(ze){Gt!==ze&&!et&&(i.stencilMask(ze),Gt=ze)},setFunc:function(ze,Yn,fi){(St!==ze||Jt!==Yn||te!==fi)&&(i.stencilFunc(ze,Yn,fi),St=ze,Jt=Yn,te=fi)},setOp:function(ze,Yn,fi){(At!==ze||he!==Yn||le!==fi)&&(i.stencilOp(ze,Yn,fi),At=ze,he=Yn,le=fi)},setLocked:function(ze){et=ze},setClear:function(ze){Je!==ze&&(i.clearStencil(ze),Je=ze)},reset:function(){et=!1,Gt=null,St=null,Jt=null,te=null,At=null,he=null,le=null,Je=null}}}let r=new e,o=new n,c=new s,h=new WeakMap,d=new WeakMap,p={},b={},g={},M=new WeakMap,w=[],N=null,y=!1,m=null,z=null,H=null,D=null,E=null,k=null,J=null,I=new ye(0,0,0),B=0,Y=!1,Z=null,ot=null,dt=null,tt=null,st=null,mt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),_t=!1,Ct=0,xt=i.getParameter(i.VERSION);xt.indexOf("WebGL")!==-1?(Ct=parseFloat(/^WebGL (\d)/.exec(xt)[1]),_t=Ct>=1):xt.indexOf("OpenGL ES")!==-1&&(Ct=parseFloat(/^OpenGL ES (\d)/.exec(xt)[1]),_t=Ct>=2);let Et=null,Mt={},zt=i.getParameter(i.SCISSOR_BOX),ne=i.getParameter(i.VIEWPORT),je=new on().fromArray(zt),Oe=new on().fromArray(ne);function We(et,Gt,St,Jt){let te=new Uint8Array(4),At=i.createTexture();i.bindTexture(et,At),i.texParameteri(et,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(et,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let he=0;he<St;he++)et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?i.texImage3D(Gt,0,i.RGBA,1,1,Jt,0,i.RGBA,i.UNSIGNED_BYTE,te):i.texImage2D(Gt+he,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,te);return At}let vt={};vt[i.TEXTURE_2D]=We(i.TEXTURE_2D,i.TEXTURE_2D,1),vt[i.TEXTURE_CUBE_MAP]=We(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),vt[i.TEXTURE_2D_ARRAY]=We(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),vt[i.TEXTURE_3D]=We(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),c.setClear(0),yt(i.DEPTH_TEST),o.setFunc(Ra),It(!1),$t(vf),yt(i.CULL_FACE),Rt(ms);function yt(et){p[et]!==!0&&(i.enable(et),p[et]=!0)}function Pt(et){p[et]!==!1&&(i.disable(et),p[et]=!1)}function fe(et,Gt){return g[et]!==Gt?(i.bindFramebuffer(et,Gt),g[et]=Gt,et===i.DRAW_FRAMEBUFFER&&(g[i.FRAMEBUFFER]=Gt),et===i.FRAMEBUFFER&&(g[i.DRAW_FRAMEBUFFER]=Gt),!0):!1}function Kt(et,Gt){let St=w,Jt=!1;if(et){St=M.get(Gt),St===void 0&&(St=[],M.set(Gt,St));let te=et.textures;if(St.length!==te.length||St[0]!==i.COLOR_ATTACHMENT0){for(let At=0,he=te.length;At<he;At++)St[At]=i.COLOR_ATTACHMENT0+At;St.length=te.length,Jt=!0}}else St[0]!==i.BACK&&(St[0]=i.BACK,Jt=!0);Jt&&i.drawBuffers(St)}function _e(et){return N!==et?(i.useProgram(et),N=et,!0):!1}let Qt={[$r]:i.FUNC_ADD,[N0]:i.FUNC_SUBTRACT,[U0]:i.FUNC_REVERSE_SUBTRACT};Qt[O0]=i.MIN,Qt[F0]=i.MAX;let rt={[B0]:i.ZERO,[k0]:i.ONE,[$0]:i.SRC_COLOR,[Mf]:i.SRC_ALPHA,[X0]:i.SRC_ALPHA_SATURATE,[G0]:i.DST_COLOR,[V0]:i.DST_ALPHA,[z0]:i.ONE_MINUS_SRC_COLOR,[wf]:i.ONE_MINUS_SRC_ALPHA,[W0]:i.ONE_MINUS_DST_COLOR,[H0]:i.ONE_MINUS_DST_ALPHA,[q0]:i.CONSTANT_COLOR,[Y0]:i.ONE_MINUS_CONSTANT_COLOR,[J0]:i.CONSTANT_ALPHA,[Z0]:i.ONE_MINUS_CONSTANT_ALPHA};function Rt(et,Gt,St,Jt,te,At,he,le,Je,ze){if(et===ms){y===!0&&(Pt(i.BLEND),y=!1);return}if(y===!1&&(yt(i.BLEND),y=!0),et!==D0){if(et!==m||ze!==Y){if((z!==$r||E!==$r)&&(i.blendEquation(i.FUNC_ADD),z=$r,E=$r),ze)switch(et){case Ha:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case yf:i.blendFunc(i.ONE,i.ONE);break;case Sf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case bf:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:we("WebGLState: Invalid blending: ",et);break}else switch(et){case Ha:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case yf:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Sf:we("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case bf:we("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:we("WebGLState: Invalid blending: ",et);break}H=null,D=null,k=null,J=null,I.set(0,0,0),B=0,m=et,Y=ze}return}te=te||Gt,At=At||St,he=he||Jt,(Gt!==z||te!==E)&&(i.blendEquationSeparate(Qt[Gt],Qt[te]),z=Gt,E=te),(St!==H||Jt!==D||At!==k||he!==J)&&(i.blendFuncSeparate(rt[St],rt[Jt],rt[At],rt[he]),H=St,D=Jt,k=At,J=he),(le.equals(I)===!1||Je!==B)&&(i.blendColor(le.r,le.g,le.b,Je),I.copy(le),B=Je),m=et,Y=!1}function V(et,Gt){et.side===ps?Pt(i.CULL_FACE):yt(i.CULL_FACE);let St=et.side===ui;Gt&&(St=!St),It(St),et.blending===Ha&&et.transparent===!1?Rt(ms):Rt(et.blending,et.blendEquation,et.blendSrc,et.blendDst,et.blendEquationAlpha,et.blendSrcAlpha,et.blendDstAlpha,et.blendColor,et.blendAlpha,et.premultipliedAlpha),o.setFunc(et.depthFunc),o.setTest(et.depthTest),o.setMask(et.depthWrite),r.setMask(et.colorWrite);let Jt=et.stencilWrite;c.setTest(Jt),Jt&&(c.setMask(et.stencilWriteMask),c.setFunc(et.stencilFunc,et.stencilRef,et.stencilFuncMask),c.setOp(et.stencilFail,et.stencilZFail,et.stencilZPass)),pe(et.polygonOffset,et.polygonOffsetFactor,et.polygonOffsetUnits),et.alphaToCoverage===!0?yt(i.SAMPLE_ALPHA_TO_COVERAGE):Pt(i.SAMPLE_ALPHA_TO_COVERAGE)}function It(et){Z!==et&&(et?i.frontFace(i.CW):i.frontFace(i.CCW),Z=et)}function $t(et){et!==I0?(yt(i.CULL_FACE),et!==ot&&(et===vf?i.cullFace(i.BACK):et===P0?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Pt(i.CULL_FACE),ot=et}function ce(et){et!==dt&&(_t&&i.lineWidth(et),dt=et)}function pe(et,Gt,St){et?(yt(i.POLYGON_OFFSET_FILL),(tt!==Gt||st!==St)&&(tt=Gt,st=St,o.getReversed()&&(Gt=-Gt),i.polygonOffset(Gt,St))):Pt(i.POLYGON_OFFSET_FILL)}function Se(et){et?yt(i.SCISSOR_TEST):Pt(i.SCISSOR_TEST)}function Re(et){et===void 0&&(et=i.TEXTURE0+mt-1),Et!==et&&(i.activeTexture(et),Et=et)}function q(et,Gt,St){St===void 0&&(Et===null?St=i.TEXTURE0+mt-1:St=Et);let Jt=Mt[St];Jt===void 0&&(Jt={type:void 0,texture:void 0},Mt[St]=Jt),(Jt.type!==et||Jt.texture!==Gt)&&(Et!==St&&(i.activeTexture(St),Et=St),i.bindTexture(et,Gt||vt[et]),Jt.type=et,Jt.texture=Gt)}function Qe(){let et=Mt[Et];et!==void 0&&et.type!==void 0&&(i.bindTexture(et.type,null),et.type=void 0,et.texture=void 0)}function Fe(){try{i.compressedTexImage2D(...arguments)}catch(et){we("WebGLState:",et)}}function F(){try{i.compressedTexImage3D(...arguments)}catch(et){we("WebGLState:",et)}}function T(){try{i.texSubImage2D(...arguments)}catch(et){we("WebGLState:",et)}}function at(){try{i.texSubImage3D(...arguments)}catch(et){we("WebGLState:",et)}}function lt(){try{i.compressedTexSubImage2D(...arguments)}catch(et){we("WebGLState:",et)}}function gt(){try{i.compressedTexSubImage3D(...arguments)}catch(et){we("WebGLState:",et)}}function Dt(){try{i.texStorage2D(...arguments)}catch(et){we("WebGLState:",et)}}function Ht(){try{i.texStorage3D(...arguments)}catch(et){we("WebGLState:",et)}}function pt(){try{i.texImage2D(...arguments)}catch(et){we("WebGLState:",et)}}function wt(){try{i.texImage3D(...arguments)}catch(et){we("WebGLState:",et)}}function kt(et){return b[et]!==void 0?b[et]:i.getParameter(et)}function Lt(et,Gt){b[et]!==Gt&&(i.pixelStorei(et,Gt),b[et]=Gt)}function Zt(et){je.equals(et)===!1&&(i.scissor(et.x,et.y,et.z,et.w),je.copy(et))}function Yt(et){Oe.equals(et)===!1&&(i.viewport(et.x,et.y,et.z,et.w),Oe.copy(et))}function ue(et,Gt){let St=d.get(Gt);St===void 0&&(St=new WeakMap,d.set(Gt,St));let Jt=St.get(et);Jt===void 0&&(Jt=i.getUniformBlockIndex(Gt,et.name),St.set(et,Jt))}function xe(et,Gt){let Jt=d.get(Gt).get(et);h.get(Gt)!==Jt&&(i.uniformBlockBinding(Gt,Jt,et.__bindingPointIndex),h.set(Gt,Jt))}function Te(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),p={},b={},Et=null,Mt={},g={},M=new WeakMap,w=[],N=null,y=!1,m=null,z=null,H=null,D=null,E=null,k=null,J=null,I=new ye(0,0,0),B=0,Y=!1,Z=null,ot=null,dt=null,tt=null,st=null,je.set(0,0,i.canvas.width,i.canvas.height),Oe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),c.reset()}return{buffers:{color:r,depth:o,stencil:c},enable:yt,disable:Pt,bindFramebuffer:fe,drawBuffers:Kt,useProgram:_e,setBlending:Rt,setMaterial:V,setFlipSided:It,setCullFace:$t,setLineWidth:ce,setPolygonOffset:pe,setScissorTest:Se,activeTexture:Re,bindTexture:q,unbindTexture:Qe,compressedTexImage2D:Fe,compressedTexImage3D:F,texImage2D:pt,texImage3D:wt,pixelStorei:Lt,getParameter:kt,updateUBOMapping:ue,uniformBlockBinding:xe,texStorage2D:Dt,texStorage3D:Ht,texSubImage2D:T,texSubImage3D:at,compressedTexSubImage2D:lt,compressedTexSubImage3D:gt,scissor:Zt,viewport:Yt,reset:Te}}function G1(i,t,e,n,s,r,o){let c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Wt,p=new WeakMap,b=new Set,g,M=new WeakMap,w=!1;try{w=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function N(F,T){return w?new OffscreenCanvas(F,T):Xo("canvas")}function y(F,T,at){let lt=1,gt=Fe(F);if((gt.width>at||gt.height>at)&&(lt=at/Math.max(gt.width,gt.height)),lt<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){let Dt=Math.floor(lt*gt.width),Ht=Math.floor(lt*gt.height);g===void 0&&(g=N(Dt,Ht));let pt=T?N(Dt,Ht):g;return pt.width=Dt,pt.height=Ht,pt.getContext("2d").drawImage(F,0,0,Dt,Ht),Me("WebGLRenderer: Texture has been resized from ("+gt.width+"x"+gt.height+") to ("+Dt+"x"+Ht+")."),pt}else return"data"in F&&Me("WebGLRenderer: Image in DataTexture is too big ("+gt.width+"x"+gt.height+")."),F;return F}function m(F){return F.generateMipmaps}function z(F){i.generateMipmap(F)}function H(F){return F.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?i.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function D(F,T,at,lt,gt,Dt=!1){if(F!==null){if(i[F]!==void 0)return i[F];Me("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let Ht;lt&&(Ht=t.get("EXT_texture_norm16"),Ht||Me("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let pt=T;if(T===i.RED&&(at===i.FLOAT&&(pt=i.R32F),at===i.HALF_FLOAT&&(pt=i.R16F),at===i.UNSIGNED_BYTE&&(pt=i.R8),at===i.UNSIGNED_SHORT&&Ht&&(pt=Ht.R16_EXT),at===i.SHORT&&Ht&&(pt=Ht.R16_SNORM_EXT)),T===i.RED_INTEGER&&(at===i.UNSIGNED_BYTE&&(pt=i.R8UI),at===i.UNSIGNED_SHORT&&(pt=i.R16UI),at===i.UNSIGNED_INT&&(pt=i.R32UI),at===i.BYTE&&(pt=i.R8I),at===i.SHORT&&(pt=i.R16I),at===i.INT&&(pt=i.R32I)),T===i.RG&&(at===i.FLOAT&&(pt=i.RG32F),at===i.HALF_FLOAT&&(pt=i.RG16F),at===i.UNSIGNED_BYTE&&(pt=i.RG8),at===i.UNSIGNED_SHORT&&Ht&&(pt=Ht.RG16_EXT),at===i.SHORT&&Ht&&(pt=Ht.RG16_SNORM_EXT)),T===i.RG_INTEGER&&(at===i.UNSIGNED_BYTE&&(pt=i.RG8UI),at===i.UNSIGNED_SHORT&&(pt=i.RG16UI),at===i.UNSIGNED_INT&&(pt=i.RG32UI),at===i.BYTE&&(pt=i.RG8I),at===i.SHORT&&(pt=i.RG16I),at===i.INT&&(pt=i.RG32I)),T===i.RGB_INTEGER&&(at===i.UNSIGNED_BYTE&&(pt=i.RGB8UI),at===i.UNSIGNED_SHORT&&(pt=i.RGB16UI),at===i.UNSIGNED_INT&&(pt=i.RGB32UI),at===i.BYTE&&(pt=i.RGB8I),at===i.SHORT&&(pt=i.RGB16I),at===i.INT&&(pt=i.RGB32I)),T===i.RGBA_INTEGER&&(at===i.UNSIGNED_BYTE&&(pt=i.RGBA8UI),at===i.UNSIGNED_SHORT&&(pt=i.RGBA16UI),at===i.UNSIGNED_INT&&(pt=i.RGBA32UI),at===i.BYTE&&(pt=i.RGBA8I),at===i.SHORT&&(pt=i.RGBA16I),at===i.INT&&(pt=i.RGBA32I)),T===i.RGB&&(at===i.UNSIGNED_SHORT&&Ht&&(pt=Ht.RGB16_EXT),at===i.SHORT&&Ht&&(pt=Ht.RGB16_SNORM_EXT),at===i.UNSIGNED_INT_5_9_9_9_REV&&(pt=i.RGB9_E5),at===i.UNSIGNED_INT_10F_11F_11F_REV&&(pt=i.R11F_G11F_B10F)),T===i.RGBA){let wt=Dt?Wo:Ye.getTransfer(gt);at===i.FLOAT&&(pt=i.RGBA32F),at===i.HALF_FLOAT&&(pt=i.RGBA16F),at===i.UNSIGNED_BYTE&&(pt=wt===an?i.SRGB8_ALPHA8:i.RGBA8),at===i.UNSIGNED_SHORT&&Ht&&(pt=Ht.RGBA16_EXT),at===i.SHORT&&Ht&&(pt=Ht.RGBA16_SNORM_EXT),at===i.UNSIGNED_SHORT_4_4_4_4&&(pt=i.RGBA4),at===i.UNSIGNED_SHORT_5_5_5_1&&(pt=i.RGB5_A1)}return(pt===i.R16F||pt===i.R32F||pt===i.RG16F||pt===i.RG32F||pt===i.RGBA16F||pt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),pt}function E(F,T){let at;return F?T===null||T===Ki||T===Wa?at=i.DEPTH24_STENCIL8:T===Bi?at=i.DEPTH32F_STENCIL8:T===Ga&&(at=i.DEPTH24_STENCIL8,Me("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Ki||T===Wa?at=i.DEPTH_COMPONENT24:T===Bi?at=i.DEPTH_COMPONENT32F:T===Ga&&(at=i.DEPTH_COMPONENT16),at}function k(F,T){return m(F)===!0||F.isFramebufferTexture&&F.minFilter!==On&&F.minFilter!==Gn?Math.log2(Math.max(T.width,T.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?T.mipmaps.length:1}function J(F){let T=F.target;T.removeEventListener("dispose",J),B(T),T.isVideoTexture&&p.delete(T),T.isHTMLTexture&&b.delete(T)}function I(F){let T=F.target;T.removeEventListener("dispose",I),Z(T)}function B(F){let T=n.get(F);if(T.__webglInit===void 0)return;let at=F.source,lt=M.get(at);if(lt){let gt=lt[T.__cacheKey];gt.usedTimes--,gt.usedTimes===0&&Y(F),Object.keys(lt).length===0&&M.delete(at)}n.remove(F)}function Y(F){let T=n.get(F);i.deleteTexture(T.__webglTexture);let at=F.source,lt=M.get(at);delete lt[T.__cacheKey],o.memory.textures--}function Z(F){let T=n.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),n.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let lt=0;lt<6;lt++){if(Array.isArray(T.__webglFramebuffer[lt]))for(let gt=0;gt<T.__webglFramebuffer[lt].length;gt++)i.deleteFramebuffer(T.__webglFramebuffer[lt][gt]);else i.deleteFramebuffer(T.__webglFramebuffer[lt]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[lt])}else{if(Array.isArray(T.__webglFramebuffer))for(let lt=0;lt<T.__webglFramebuffer.length;lt++)i.deleteFramebuffer(T.__webglFramebuffer[lt]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let lt=0;lt<T.__webglColorRenderbuffer.length;lt++)T.__webglColorRenderbuffer[lt]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[lt]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let at=F.textures;for(let lt=0,gt=at.length;lt<gt;lt++){let Dt=n.get(at[lt]);Dt.__webglTexture&&(i.deleteTexture(Dt.__webglTexture),o.memory.textures--),n.remove(at[lt])}n.remove(F)}let ot=0;function dt(){ot=0}function tt(){return ot}function st(F){ot=F}function mt(){let F=ot;return F>=s.maxTextures&&Me("WebGLTextures: Trying to use "+(F+1)+" texture units while this GPU supports only "+s.maxTextures),ot+=1,F}function _t(F){let T=[];return T.push(F.wrapS),T.push(F.wrapT),T.push(F.wrapR||0),T.push(F.magFilter),T.push(F.minFilter),T.push(F.anisotropy),T.push(F.internalFormat),T.push(F.format),T.push(F.type),T.push(F.generateMipmaps),T.push(F.premultiplyAlpha),T.push(F.flipY),T.push(F.unpackAlignment),T.push(F.colorSpace),T.join()}function Ct(F,T){let at=n.get(F);if(F.isVideoTexture&&q(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&at.__version!==F.version){let lt=F.image;if(lt===null)Me("WebGLRenderer: Texture marked for update but no image data found.");else if(lt.complete===!1)Me("WebGLRenderer: Texture marked for update but image is incomplete");else{Pt(at,F,T);return}}else F.isExternalTexture&&(at.__webglTexture=F.sourceTexture?F.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,at.__webglTexture,i.TEXTURE0+T)}function xt(F,T){let at=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&at.__version!==F.version){Pt(at,F,T);return}else F.isExternalTexture&&(at.__webglTexture=F.sourceTexture?F.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,at.__webglTexture,i.TEXTURE0+T)}function Et(F,T){let at=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&at.__version!==F.version){Pt(at,F,T);return}e.bindTexture(i.TEXTURE_3D,at.__webglTexture,i.TEXTURE0+T)}function Mt(F,T){let at=n.get(F);if(F.isCubeDepthTexture!==!0&&F.version>0&&at.__version!==F.version){fe(at,F,T);return}e.bindTexture(i.TEXTURE_CUBE_MAP,at.__webglTexture,i.TEXTURE0+T)}let zt={[tu]:i.REPEAT,[ls]:i.CLAMP_TO_EDGE,[eu]:i.MIRRORED_REPEAT},ne={[On]:i.NEAREST,[Q0]:i.NEAREST_MIPMAP_NEAREST,[Tl]:i.NEAREST_MIPMAP_LINEAR,[Gn]:i.LINEAR,[Fu]:i.LINEAR_MIPMAP_NEAREST,[hr]:i.LINEAR_MIPMAP_LINEAR},je={[ig]:i.NEVER,[lg]:i.ALWAYS,[sg]:i.LESS,[bh]:i.LEQUAL,[rg]:i.EQUAL,[Mh]:i.GEQUAL,[ag]:i.GREATER,[og]:i.NOTEQUAL};function Oe(F,T){if(T.type===Bi&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Gn||T.magFilter===Fu||T.magFilter===Tl||T.magFilter===hr||T.minFilter===Gn||T.minFilter===Fu||T.minFilter===Tl||T.minFilter===hr)&&Me("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(F,i.TEXTURE_WRAP_S,zt[T.wrapS]),i.texParameteri(F,i.TEXTURE_WRAP_T,zt[T.wrapT]),(F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY)&&i.texParameteri(F,i.TEXTURE_WRAP_R,zt[T.wrapR]),i.texParameteri(F,i.TEXTURE_MAG_FILTER,ne[T.magFilter]),i.texParameteri(F,i.TEXTURE_MIN_FILTER,ne[T.minFilter]),T.compareFunction&&(i.texParameteri(F,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(F,i.TEXTURE_COMPARE_FUNC,je[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===On||T.minFilter!==Tl&&T.minFilter!==hr||T.type===Bi&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){let at=t.get("EXT_texture_filter_anisotropic");i.texParameterf(F,at.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function We(F,T){let at=!1;F.__webglInit===void 0&&(F.__webglInit=!0,T.addEventListener("dispose",J));let lt=T.source,gt=M.get(lt);gt===void 0&&(gt={},M.set(lt,gt));let Dt=_t(T);if(Dt!==F.__cacheKey){gt[Dt]===void 0&&(gt[Dt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,at=!0),gt[Dt].usedTimes++;let Ht=gt[F.__cacheKey];Ht!==void 0&&(gt[F.__cacheKey].usedTimes--,Ht.usedTimes===0&&Y(T)),F.__cacheKey=Dt,F.__webglTexture=gt[Dt].texture}return at}function vt(F,T,at){return Math.floor(Math.floor(F/at)/T)}function yt(F,T,at,lt){let Dt=F.updateRanges;if(Dt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,T.width,T.height,at,lt,T.data);else{Dt.sort((Lt,Zt)=>Lt.start-Zt.start);let Ht=0;for(let Lt=1;Lt<Dt.length;Lt++){let Zt=Dt[Ht],Yt=Dt[Lt],ue=Zt.start+Zt.count,xe=vt(Yt.start,T.width,4),Te=vt(Zt.start,T.width,4);Yt.start<=ue+1&&xe===Te&&vt(Yt.start+Yt.count-1,T.width,4)===xe?Zt.count=Math.max(Zt.count,Yt.start+Yt.count-Zt.start):(++Ht,Dt[Ht]=Yt)}Dt.length=Ht+1;let pt=e.getParameter(i.UNPACK_ROW_LENGTH),wt=e.getParameter(i.UNPACK_SKIP_PIXELS),kt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,T.width);for(let Lt=0,Zt=Dt.length;Lt<Zt;Lt++){let Yt=Dt[Lt],ue=Math.floor(Yt.start/4),xe=Math.ceil(Yt.count/4),Te=ue%T.width,et=Math.floor(ue/T.width),Gt=xe,St=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Te),e.pixelStorei(i.UNPACK_SKIP_ROWS,et),e.texSubImage2D(i.TEXTURE_2D,0,Te,et,Gt,St,at,lt,T.data)}F.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,pt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,wt),e.pixelStorei(i.UNPACK_SKIP_ROWS,kt)}}function Pt(F,T,at){let lt=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(lt=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(lt=i.TEXTURE_3D);let gt=We(F,T),Dt=T.source;e.bindTexture(lt,F.__webglTexture,i.TEXTURE0+at);let Ht=n.get(Dt);if(Dt.version!==Ht.__version||gt===!0){if(e.activeTexture(i.TEXTURE0+at),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){let St=Ye.getPrimaries(Ye.workingColorSpace),Jt=T.colorSpace===$s?null:Ye.getPrimaries(T.colorSpace),te=T.colorSpace===$s||St===Jt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,te)}e.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment);let wt=y(T.image,!1,s.maxTextureSize);wt=Qe(T,wt);let kt=r.convert(T.format,T.colorSpace),Lt=r.convert(T.type),Zt=D(T.internalFormat,kt,Lt,T.normalized,T.colorSpace,T.isVideoTexture);Oe(lt,T);let Yt,ue=T.mipmaps,xe=T.isVideoTexture!==!0,Te=Ht.__version===void 0||gt===!0,et=Dt.dataReady,Gt=k(T,wt);if(T.isDepthTexture)Zt=E(T.format===dr,T.type),Te&&(xe?e.texStorage2D(i.TEXTURE_2D,1,Zt,wt.width,wt.height):e.texImage2D(i.TEXTURE_2D,0,Zt,wt.width,wt.height,0,kt,Lt,null));else if(T.isDataTexture)if(ue.length>0){xe&&Te&&e.texStorage2D(i.TEXTURE_2D,Gt,Zt,ue[0].width,ue[0].height);for(let St=0,Jt=ue.length;St<Jt;St++)Yt=ue[St],xe?et&&e.texSubImage2D(i.TEXTURE_2D,St,0,0,Yt.width,Yt.height,kt,Lt,Yt.data):e.texImage2D(i.TEXTURE_2D,St,Zt,Yt.width,Yt.height,0,kt,Lt,Yt.data);T.generateMipmaps=!1}else xe?(Te&&e.texStorage2D(i.TEXTURE_2D,Gt,Zt,wt.width,wt.height),et&&yt(T,wt,kt,Lt)):e.texImage2D(i.TEXTURE_2D,0,Zt,wt.width,wt.height,0,kt,Lt,wt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){xe&&Te&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Gt,Zt,ue[0].width,ue[0].height,wt.depth);for(let St=0,Jt=ue.length;St<Jt;St++)if(Yt=ue[St],T.format!==ki)if(kt!==null)if(xe){if(et)if(T.layerUpdates.size>0){let te=qf(Yt.width,Yt.height,T.format,T.type);for(let At of T.layerUpdates){let he=Yt.data.subarray(At*te/Yt.data.BYTES_PER_ELEMENT,(At+1)*te/Yt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,St,0,0,At,Yt.width,Yt.height,1,kt,he)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,St,0,0,0,Yt.width,Yt.height,wt.depth,kt,Yt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,St,Zt,Yt.width,Yt.height,wt.depth,0,Yt.data,0,0);else Me("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else xe?et&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,St,0,0,0,Yt.width,Yt.height,wt.depth,kt,Lt,Yt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,St,Zt,Yt.width,Yt.height,wt.depth,0,kt,Lt,Yt.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{xe&&Te&&e.texStorage2D(i.TEXTURE_2D,Gt,Zt,ue[0].width,ue[0].height);for(let St=0,Jt=ue.length;St<Jt;St++)Yt=ue[St],T.format!==ki?kt!==null?xe?et&&e.compressedTexSubImage2D(i.TEXTURE_2D,St,0,0,Yt.width,Yt.height,kt,Yt.data):e.compressedTexImage2D(i.TEXTURE_2D,St,Zt,Yt.width,Yt.height,0,Yt.data):Me("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):xe?et&&e.texSubImage2D(i.TEXTURE_2D,St,0,0,Yt.width,Yt.height,kt,Lt,Yt.data):e.texImage2D(i.TEXTURE_2D,St,Zt,Yt.width,Yt.height,0,kt,Lt,Yt.data)}else if(T.isDataArrayTexture)if(xe){if(Te&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Gt,Zt,wt.width,wt.height,wt.depth),et)if(T.layerUpdates.size>0){let St=qf(wt.width,wt.height,T.format,T.type);for(let Jt of T.layerUpdates){let te=wt.data.subarray(Jt*St/wt.data.BYTES_PER_ELEMENT,(Jt+1)*St/wt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Jt,wt.width,wt.height,1,kt,Lt,te)}T.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,wt.width,wt.height,wt.depth,kt,Lt,wt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Zt,wt.width,wt.height,wt.depth,0,kt,Lt,wt.data);else if(T.isData3DTexture)xe?(Te&&e.texStorage3D(i.TEXTURE_3D,Gt,Zt,wt.width,wt.height,wt.depth),et&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,wt.width,wt.height,wt.depth,kt,Lt,wt.data)):e.texImage3D(i.TEXTURE_3D,0,Zt,wt.width,wt.height,wt.depth,0,kt,Lt,wt.data);else if(T.isFramebufferTexture){if(Te)if(xe)e.texStorage2D(i.TEXTURE_2D,Gt,Zt,wt.width,wt.height);else{let St=wt.width,Jt=wt.height;for(let te=0;te<Gt;te++)e.texImage2D(i.TEXTURE_2D,te,Zt,St,Jt,0,kt,Lt,null),St>>=1,Jt>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in i){let St=i.canvas;if(St.hasAttribute("layoutsubtree")||St.setAttribute("layoutsubtree","true"),wt.parentNode!==St){St.appendChild(wt),b.add(T),St.onpaint=Jt=>{let te=Jt.changedElements;for(let At of b)te.includes(At.image)&&(At.needsUpdate=!0)},St.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,wt);else{let te=i.RGBA,At=i.RGBA,he=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,te,At,he,wt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ue.length>0){if(xe&&Te){let St=Fe(ue[0]);e.texStorage2D(i.TEXTURE_2D,Gt,Zt,St.width,St.height)}for(let St=0,Jt=ue.length;St<Jt;St++)Yt=ue[St],xe?et&&e.texSubImage2D(i.TEXTURE_2D,St,0,0,kt,Lt,Yt):e.texImage2D(i.TEXTURE_2D,St,Zt,kt,Lt,Yt);T.generateMipmaps=!1}else if(xe){if(Te){let St=Fe(wt);e.texStorage2D(i.TEXTURE_2D,Gt,Zt,St.width,St.height)}et&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,kt,Lt,wt)}else e.texImage2D(i.TEXTURE_2D,0,Zt,kt,Lt,wt);m(T)&&z(lt),Ht.__version=Dt.version,T.onUpdate&&T.onUpdate(T)}F.__version=T.version}function fe(F,T,at){if(T.image.length!==6)return;let lt=We(F,T),gt=T.source;e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+at);let Dt=n.get(gt);if(gt.version!==Dt.__version||lt===!0){e.activeTexture(i.TEXTURE0+at);let Ht=Ye.getPrimaries(Ye.workingColorSpace),pt=T.colorSpace===$s?null:Ye.getPrimaries(T.colorSpace),wt=T.colorSpace===$s||Ht===pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);let kt=T.isCompressedTexture||T.image[0].isCompressedTexture,Lt=T.image[0]&&T.image[0].isDataTexture,Zt=[];for(let At=0;At<6;At++)!kt&&!Lt?Zt[At]=y(T.image[At],!0,s.maxCubemapSize):Zt[At]=Lt?T.image[At].image:T.image[At],Zt[At]=Qe(T,Zt[At]);let Yt=Zt[0],ue=r.convert(T.format,T.colorSpace),xe=r.convert(T.type),Te=D(T.internalFormat,ue,xe,T.normalized,T.colorSpace),et=T.isVideoTexture!==!0,Gt=Dt.__version===void 0||lt===!0,St=gt.dataReady,Jt=k(T,Yt);Oe(i.TEXTURE_CUBE_MAP,T);let te;if(kt){et&&Gt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Jt,Te,Yt.width,Yt.height);for(let At=0;At<6;At++){te=Zt[At].mipmaps;for(let he=0;he<te.length;he++){let le=te[he];T.format!==ki?ue!==null?et?St&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,he,0,0,le.width,le.height,ue,le.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,he,Te,le.width,le.height,0,le.data):Me("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):et?St&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,he,0,0,le.width,le.height,ue,xe,le.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,he,Te,le.width,le.height,0,ue,xe,le.data)}}}else{if(te=T.mipmaps,et&&Gt){te.length>0&&Jt++;let At=Fe(Zt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Jt,Te,At.width,At.height)}for(let At=0;At<6;At++)if(Lt){et?St&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,0,0,Zt[At].width,Zt[At].height,ue,xe,Zt[At].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,Te,Zt[At].width,Zt[At].height,0,ue,xe,Zt[At].data);for(let he=0;he<te.length;he++){let Je=te[he].image[At].image;et?St&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,he+1,0,0,Je.width,Je.height,ue,xe,Je.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,he+1,Te,Je.width,Je.height,0,ue,xe,Je.data)}}else{et?St&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,0,0,ue,xe,Zt[At]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,Te,ue,xe,Zt[At]);for(let he=0;he<te.length;he++){let le=te[he];et?St&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,he+1,0,0,ue,xe,le.image[At]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,he+1,Te,ue,xe,le.image[At])}}}m(T)&&z(i.TEXTURE_CUBE_MAP),Dt.__version=gt.version,T.onUpdate&&T.onUpdate(T)}F.__version=T.version}function Kt(F,T,at,lt,gt,Dt){let Ht=r.convert(at.format,at.colorSpace),pt=r.convert(at.type),wt=D(at.internalFormat,Ht,pt,at.normalized,at.colorSpace),kt=n.get(T),Lt=n.get(at);if(Lt.__renderTarget=T,!kt.__hasExternalTextures){let Zt=Math.max(1,T.width>>Dt),Yt=Math.max(1,T.height>>Dt);gt===i.TEXTURE_3D||gt===i.TEXTURE_2D_ARRAY?e.texImage3D(gt,Dt,wt,Zt,Yt,T.depth,0,Ht,pt,null):e.texImage2D(gt,Dt,wt,Zt,Yt,0,Ht,pt,null)}e.bindFramebuffer(i.FRAMEBUFFER,F),Re(T)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,lt,gt,Lt.__webglTexture,0,Se(T)):(gt===i.TEXTURE_2D||gt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&gt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,lt,gt,Lt.__webglTexture,Dt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function _e(F,T,at){if(i.bindRenderbuffer(i.RENDERBUFFER,F),T.depthBuffer){let lt=T.depthTexture,gt=lt&&lt.isDepthTexture?lt.type:null,Dt=E(T.stencilBuffer,gt),Ht=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Re(T)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Se(T),Dt,T.width,T.height):at?i.renderbufferStorageMultisample(i.RENDERBUFFER,Se(T),Dt,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,Dt,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ht,i.RENDERBUFFER,F)}else{let lt=T.textures;for(let gt=0;gt<lt.length;gt++){let Dt=lt[gt],Ht=r.convert(Dt.format,Dt.colorSpace),pt=r.convert(Dt.type),wt=D(Dt.internalFormat,Ht,pt,Dt.normalized,Dt.colorSpace);Re(T)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Se(T),wt,T.width,T.height):at?i.renderbufferStorageMultisample(i.RENDERBUFFER,Se(T),wt,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,wt,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Qt(F,T,at){let lt=T.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,F),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let gt=n.get(T.depthTexture);if(gt.__renderTarget=T,(!gt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),lt){if(gt.__webglInit===void 0&&(gt.__webglInit=!0,T.depthTexture.addEventListener("dispose",J)),gt.__webglTexture===void 0){gt.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,gt.__webglTexture),Oe(i.TEXTURE_CUBE_MAP,T.depthTexture);let kt=r.convert(T.depthTexture.format),Lt=r.convert(T.depthTexture.type),Zt;T.depthTexture.format===us?Zt=i.DEPTH_COMPONENT24:T.depthTexture.format===dr&&(Zt=i.DEPTH24_STENCIL8);for(let Yt=0;Yt<6;Yt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Yt,0,Zt,T.width,T.height,0,kt,Lt,null)}}else Ct(T.depthTexture,0);let Dt=gt.__webglTexture,Ht=Se(T),pt=lt?i.TEXTURE_CUBE_MAP_POSITIVE_X+at:i.TEXTURE_2D,wt=T.depthTexture.format===dr?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(T.depthTexture.format===us)Re(T)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,wt,pt,Dt,0,Ht):i.framebufferTexture2D(i.FRAMEBUFFER,wt,pt,Dt,0);else if(T.depthTexture.format===dr)Re(T)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,wt,pt,Dt,0,Ht):i.framebufferTexture2D(i.FRAMEBUFFER,wt,pt,Dt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function rt(F){let T=n.get(F),at=F.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==F.depthTexture){let lt=F.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),lt){let gt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,lt.removeEventListener("dispose",gt)};lt.addEventListener("dispose",gt),T.__depthDisposeCallback=gt}T.__boundDepthTexture=lt}if(F.depthTexture&&!T.__autoAllocateDepthBuffer)if(at)for(let lt=0;lt<6;lt++)Qt(T.__webglFramebuffer[lt],F,lt);else{let lt=F.texture.mipmaps;lt&&lt.length>0?Qt(T.__webglFramebuffer[0],F,0):Qt(T.__webglFramebuffer,F,0)}else if(at){T.__webglDepthbuffer=[];for(let lt=0;lt<6;lt++)if(e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[lt]),T.__webglDepthbuffer[lt]===void 0)T.__webglDepthbuffer[lt]=i.createRenderbuffer(),_e(T.__webglDepthbuffer[lt],F,!1);else{let gt=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Dt=T.__webglDepthbuffer[lt];i.bindRenderbuffer(i.RENDERBUFFER,Dt),i.framebufferRenderbuffer(i.FRAMEBUFFER,gt,i.RENDERBUFFER,Dt)}}else{let lt=F.texture.mipmaps;if(lt&&lt.length>0?e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),_e(T.__webglDepthbuffer,F,!1);else{let gt=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Dt=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Dt),i.framebufferRenderbuffer(i.FRAMEBUFFER,gt,i.RENDERBUFFER,Dt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Rt(F,T,at){let lt=n.get(F);T!==void 0&&Kt(lt.__webglFramebuffer,F,F.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),at!==void 0&&rt(F)}function V(F){let T=F.texture,at=n.get(F),lt=n.get(T);F.addEventListener("dispose",I);let gt=F.textures,Dt=F.isWebGLCubeRenderTarget===!0,Ht=gt.length>1;if(Ht||(lt.__webglTexture===void 0&&(lt.__webglTexture=i.createTexture()),lt.__version=T.version,o.memory.textures++),Dt){at.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(T.mipmaps&&T.mipmaps.length>0){at.__webglFramebuffer[pt]=[];for(let wt=0;wt<T.mipmaps.length;wt++)at.__webglFramebuffer[pt][wt]=i.createFramebuffer()}else at.__webglFramebuffer[pt]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){at.__webglFramebuffer=[];for(let pt=0;pt<T.mipmaps.length;pt++)at.__webglFramebuffer[pt]=i.createFramebuffer()}else at.__webglFramebuffer=i.createFramebuffer();if(Ht)for(let pt=0,wt=gt.length;pt<wt;pt++){let kt=n.get(gt[pt]);kt.__webglTexture===void 0&&(kt.__webglTexture=i.createTexture(),o.memory.textures++)}if(F.samples>0&&Re(F)===!1){at.__webglMultisampledFramebuffer=i.createFramebuffer(),at.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,at.__webglMultisampledFramebuffer);for(let pt=0;pt<gt.length;pt++){let wt=gt[pt];at.__webglColorRenderbuffer[pt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,at.__webglColorRenderbuffer[pt]);let kt=r.convert(wt.format,wt.colorSpace),Lt=r.convert(wt.type),Zt=D(wt.internalFormat,kt,Lt,wt.normalized,wt.colorSpace,F.isXRRenderTarget===!0),Yt=Se(F);i.renderbufferStorageMultisample(i.RENDERBUFFER,Yt,Zt,F.width,F.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,at.__webglColorRenderbuffer[pt])}i.bindRenderbuffer(i.RENDERBUFFER,null),F.depthBuffer&&(at.__webglDepthRenderbuffer=i.createRenderbuffer(),_e(at.__webglDepthRenderbuffer,F,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Dt){e.bindTexture(i.TEXTURE_CUBE_MAP,lt.__webglTexture),Oe(i.TEXTURE_CUBE_MAP,T);for(let pt=0;pt<6;pt++)if(T.mipmaps&&T.mipmaps.length>0)for(let wt=0;wt<T.mipmaps.length;wt++)Kt(at.__webglFramebuffer[pt][wt],F,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,wt);else Kt(at.__webglFramebuffer[pt],F,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);m(T)&&z(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ht){for(let pt=0,wt=gt.length;pt<wt;pt++){let kt=gt[pt],Lt=n.get(kt),Zt=i.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Zt=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Zt,Lt.__webglTexture),Oe(Zt,kt),Kt(at.__webglFramebuffer,F,kt,i.COLOR_ATTACHMENT0+pt,Zt,0),m(kt)&&z(Zt)}e.unbindTexture()}else{let pt=i.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(pt=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(pt,lt.__webglTexture),Oe(pt,T),T.mipmaps&&T.mipmaps.length>0)for(let wt=0;wt<T.mipmaps.length;wt++)Kt(at.__webglFramebuffer[wt],F,T,i.COLOR_ATTACHMENT0,pt,wt);else Kt(at.__webglFramebuffer,F,T,i.COLOR_ATTACHMENT0,pt,0);m(T)&&z(pt),e.unbindTexture()}F.depthBuffer&&rt(F)}function It(F){let T=F.textures;for(let at=0,lt=T.length;at<lt;at++){let gt=T[at];if(m(gt)){let Dt=H(F),Ht=n.get(gt).__webglTexture;e.bindTexture(Dt,Ht),z(Dt),e.unbindTexture()}}}let $t=[],ce=[];function pe(F){if(F.samples>0){if(Re(F)===!1){let T=F.textures,at=F.width,lt=F.height,gt=i.COLOR_BUFFER_BIT,Dt=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ht=n.get(F),pt=T.length>1;if(pt)for(let kt=0;kt<T.length;kt++)e.bindFramebuffer(i.FRAMEBUFFER,Ht.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+kt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ht.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+kt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ht.__webglMultisampledFramebuffer);let wt=F.texture.mipmaps;wt&&wt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ht.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ht.__webglFramebuffer);for(let kt=0;kt<T.length;kt++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(gt|=i.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(gt|=i.STENCIL_BUFFER_BIT)),pt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ht.__webglColorRenderbuffer[kt]);let Lt=n.get(T[kt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Lt,0)}i.blitFramebuffer(0,0,at,lt,0,0,at,lt,gt,i.NEAREST),h===!0&&($t.length=0,ce.length=0,$t.push(i.COLOR_ATTACHMENT0+kt),F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&($t.push(Dt),ce.push(Dt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ce)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,$t))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),pt)for(let kt=0;kt<T.length;kt++){e.bindFramebuffer(i.FRAMEBUFFER,Ht.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+kt,i.RENDERBUFFER,Ht.__webglColorRenderbuffer[kt]);let Lt=n.get(T[kt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ht.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+kt,i.TEXTURE_2D,Lt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ht.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&h){let T=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function Se(F){return Math.min(s.maxSamples,F.samples)}function Re(F){let T=n.get(F);return F.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function q(F){let T=o.render.frame;p.get(F)!==T&&(p.set(F,T),F.update())}function Qe(F,T){let at=F.colorSpace,lt=F.format,gt=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||at!==Go&&at!==$s&&(Ye.getTransfer(at)===an?(lt!==ki||gt!==Si)&&Me("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):we("WebGLTextures: Unsupported texture color space:",at)),T}function Fe(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(d.width=F.naturalWidth||F.width,d.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(d.width=F.displayWidth,d.height=F.displayHeight):(d.width=F.width,d.height=F.height),d}this.allocateTextureUnit=mt,this.resetTextureUnits=dt,this.getTextureUnits=tt,this.setTextureUnits=st,this.setTexture2D=Ct,this.setTexture2DArray=xt,this.setTexture3D=Et,this.setTextureCube=Mt,this.rebindTextures=Rt,this.setupRenderTarget=V,this.updateRenderTargetMipmap=It,this.updateMultisampleRenderTarget=pe,this.setupDepthRenderbuffer=rt,this.setupFrameBufferTexture=Kt,this.useMultisampledRTT=Re,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function W1(i,t){function e(n,s=$s){let r,o=Ye.getTransfer(s);if(n===Si)return i.UNSIGNED_BYTE;if(n===ku)return i.UNSIGNED_SHORT_4_4_4_4;if(n===$u)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Uf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Of)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Df)return i.BYTE;if(n===Nf)return i.SHORT;if(n===Ga)return i.UNSIGNED_SHORT;if(n===Bu)return i.INT;if(n===Ki)return i.UNSIGNED_INT;if(n===Bi)return i.FLOAT;if(n===Qi)return i.HALF_FLOAT;if(n===Ff)return i.ALPHA;if(n===Bf)return i.RGB;if(n===ki)return i.RGBA;if(n===us)return i.DEPTH_COMPONENT;if(n===dr)return i.DEPTH_STENCIL;if(n===zu)return i.RED;if(n===Vu)return i.RED_INTEGER;if(n===fr)return i.RG;if(n===Hu)return i.RG_INTEGER;if(n===Gu)return i.RGBA_INTEGER;if(n===Al||n===Cl||n===Rl||n===Il)if(o===an)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Al)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Cl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Rl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Il)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Al)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Cl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Rl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Il)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Wu||n===Xu||n===qu||n===Yu)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Wu)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Xu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===qu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Yu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ju||n===Zu||n===ju||n===Ku||n===Qu||n===Pl||n===th)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ju||n===Zu)return o===an?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ju)return o===an?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ku)return r.COMPRESSED_R11_EAC;if(n===Qu)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Pl)return r.COMPRESSED_RG11_EAC;if(n===th)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===eh||n===nh||n===ih||n===sh||n===rh||n===ah||n===oh||n===lh||n===ch||n===uh||n===hh||n===dh||n===fh||n===ph)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===eh)return o===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===nh)return o===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ih)return o===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===sh)return o===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===rh)return o===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ah)return o===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===oh)return o===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===lh)return o===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ch)return o===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===uh)return o===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===hh)return o===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===dh)return o===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===fh)return o===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ph)return o===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===mh||n===gh||n===_h)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===mh)return o===an?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===gh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===_h)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===xh||n===vh||n===Ll||n===yh)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===xh)return r.COMPRESSED_RED_RGTC1_EXT;if(n===vh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ll)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===yh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Wa?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var X1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,q1=`
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

}`,op=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new il(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new kn({vertexShader:X1,fragmentShader:q1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Bn(new fl(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},lp=class extends hs{constructor(t,e){super();let n=this,s=null,r=1,o=null,c="local-floor",h=1,d=null,p=null,b=null,g=null,M=null,w=null,N=typeof XRWebGLBinding<"u",y=new op,m={},z=e.getContextAttributes(),H=null,D=null,E=[],k=[],J=new Wt,I=null,B=null,Y=new ti;Y.viewport=new on;let Z=new ti;Z.viewport=new on;let ot=[Y,Z],dt=new Du,tt=null,st=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(vt){let yt=E[vt];return yt===void 0&&(yt=new Ua,E[vt]=yt),yt.getTargetRaySpace()},this.getControllerGrip=function(vt){let yt=E[vt];return yt===void 0&&(yt=new Ua,E[vt]=yt),yt.getGripSpace()},this.getHand=function(vt){let yt=E[vt];return yt===void 0&&(yt=new Ua,E[vt]=yt),yt.getHandSpace()};function mt(vt){let yt=k.indexOf(vt.inputSource);if(yt===-1)return;let Pt=E[yt];Pt!==void 0&&(Pt.update(vt.inputSource,vt.frame,d||o),Pt.dispatchEvent({type:vt.type,data:vt.inputSource}))}function _t(){s.removeEventListener("select",mt),s.removeEventListener("selectstart",mt),s.removeEventListener("selectend",mt),s.removeEventListener("squeeze",mt),s.removeEventListener("squeezestart",mt),s.removeEventListener("squeezeend",mt),s.removeEventListener("end",_t),s.removeEventListener("inputsourceschange",Ct);for(let vt=0;vt<E.length;vt++){let yt=k[vt];yt!==null&&(k[vt]=null,E[vt].disconnect(yt))}tt=null,st=null,y.reset();for(let vt in m)delete m[vt];if(t.setRenderTarget(H),M=null,g=null,b=null,s=null,D=null,We.stop(),n.isPresenting=!1,t.setPixelRatio(I),t.setSize(J.width,J.height,!1),B!==null){let vt=B.camera;vt.fov=B.fov,vt.zoom=B.zoom,vt.updateProjectionMatrix(),B=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(vt){r=vt,n.isPresenting===!0&&Me("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(vt){c=vt,n.isPresenting===!0&&Me("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||o},this.setReferenceSpace=function(vt){d=vt},this.getBaseLayer=function(){return g!==null?g:M},this.getBinding=function(){return b===null&&N&&(b=new XRWebGLBinding(s,e)),b},this.getFrame=function(){return w},this.getSession=function(){return s},this.setSession=async function(vt){if(s=vt,s!==null){if(H=t.getRenderTarget(),s.addEventListener("select",mt),s.addEventListener("selectstart",mt),s.addEventListener("selectend",mt),s.addEventListener("squeeze",mt),s.addEventListener("squeezestart",mt),s.addEventListener("squeezeend",mt),s.addEventListener("end",_t),s.addEventListener("inputsourceschange",Ct),z.xrCompatible!==!0&&await e.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(J),N&&"createProjectionLayer"in XRWebGLBinding.prototype){let Pt=null,fe=null,Kt=null;z.depth&&(Kt=z.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Pt=z.stencil?dr:us,fe=z.stencil?Wa:Ki);let _e={colorFormat:e.RGBA8,depthFormat:Kt,scaleFactor:r};b=this.getBinding(),g=b.createProjectionLayer(_e),s.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),D=new vi(g.textureWidth,g.textureHeight,{format:ki,type:Si,depthTexture:new sr(g.textureWidth,g.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,Pt),stencilBuffer:z.stencil,colorSpace:t.outputColorSpace,samples:z.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}else{let Pt={antialias:z.antialias,alpha:!0,depth:z.depth,stencil:z.stencil,framebufferScaleFactor:r};M=new XRWebGLLayer(s,e,Pt),s.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),D=new vi(M.framebufferWidth,M.framebufferHeight,{format:ki,type:Si,colorSpace:t.outputColorSpace,stencilBuffer:z.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1,storeMultisampledDepthBuffer:M.ignoreDepthValues===!1,storeMultisampledStencilBuffer:M.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(h),d=null,o=await s.requestReferenceSpace(c),We.setContext(s),We.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function Ct(vt){for(let yt=0;yt<vt.removed.length;yt++){let Pt=vt.removed[yt],fe=k.indexOf(Pt);fe>=0&&(k[fe]=null,E[fe].disconnect(Pt))}for(let yt=0;yt<vt.added.length;yt++){let Pt=vt.added[yt],fe=k.indexOf(Pt);if(fe===-1){for(let _e=0;_e<E.length;_e++)if(_e>=k.length){k.push(Pt),fe=_e;break}else if(k[_e]===null){k[_e]=Pt,fe=_e;break}if(fe===-1)break}let Kt=E[fe];Kt&&Kt.connect(Pt)}}let xt=new j,Et=new j;function Mt(vt,yt,Pt){xt.setFromMatrixPosition(yt.matrixWorld),Et.setFromMatrixPosition(Pt.matrixWorld);let fe=xt.distanceTo(Et),Kt=yt.projectionMatrix.elements,_e=Pt.projectionMatrix.elements,Qt=Kt[14]/(Kt[10]-1),rt=Kt[14]/(Kt[10]+1),Rt=(Kt[9]+1)/Kt[5],V=(Kt[9]-1)/Kt[5],It=(Kt[8]-1)/Kt[0],$t=(_e[8]+1)/_e[0],ce=Qt*It,pe=Qt*$t,Se=fe/(-It+$t),Re=Se*-It;if(yt.matrixWorld.decompose(vt.position,vt.quaternion,vt.scale),vt.translateX(Re),vt.translateZ(Se),vt.matrixWorld.compose(vt.position,vt.quaternion,vt.scale),vt.matrixWorldInverse.copy(vt.matrixWorld).invert(),Kt[10]===-1)vt.projectionMatrix.copy(yt.projectionMatrix),vt.projectionMatrixInverse.copy(yt.projectionMatrixInverse);else{let q=Qt+Se,Qe=rt+Se,Fe=ce-Re,F=pe+(fe-Re),T=Rt*rt/Qe*q,at=V*rt/Qe*q;vt.projectionMatrix.makePerspective(Fe,F,T,at,q,Qe),vt.projectionMatrixInverse.copy(vt.projectionMatrix).invert()}}function zt(vt,yt){yt===null?vt.matrixWorld.copy(vt.matrix):vt.matrixWorld.multiplyMatrices(yt.matrixWorld,vt.matrix),vt.matrixWorldInverse.copy(vt.matrixWorld).invert()}this.updateCamera=function(vt){if(s===null)return;let yt=vt.near,Pt=vt.far;y.texture!==null&&(y.depthNear>0&&(yt=y.depthNear),y.depthFar>0&&(Pt=y.depthFar)),dt.near=Z.near=Y.near=yt,dt.far=Z.far=Y.far=Pt,(tt!==dt.near||st!==dt.far)&&(s.updateRenderState({depthNear:dt.near,depthFar:dt.far}),tt=dt.near,st=dt.far),dt.layers.mask=vt.layers.mask|6,Y.layers.mask=dt.layers.mask&-5,Z.layers.mask=dt.layers.mask&-3;let fe=vt.parent,Kt=dt.cameras;zt(dt,fe);for(let _e=0;_e<Kt.length;_e++)zt(Kt[_e],fe);Kt.length===2?Mt(dt,Y,Z):dt.projectionMatrix.copy(Y.projectionMatrix),B===null&&vt.isPerspectiveCamera&&(B={camera:vt,fov:vt.fov,zoom:vt.zoom}),ne(vt,dt,fe)};function ne(vt,yt,Pt){Pt===null?vt.matrix.copy(yt.matrixWorld):(vt.matrix.copy(Pt.matrixWorld),vt.matrix.invert(),vt.matrix.multiply(yt.matrixWorld)),vt.matrix.decompose(vt.position,vt.quaternion,vt.scale),vt.updateMatrixWorld(!0),vt.projectionMatrix.copy(yt.projectionMatrix),vt.projectionMatrixInverse.copy(yt.projectionMatrixInverse),vt.isPerspectiveCamera&&(vt.fov=La*2*Math.atan(1/vt.projectionMatrix.elements[5]),vt.zoom=1)}this.getCamera=function(){return dt},this.getFoveation=function(){if(!(g===null&&M===null))return h},this.setFoveation=function(vt){h=vt,g!==null&&(g.fixedFoveation=vt),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=vt)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(dt)},this.getCameraTexture=function(vt){return m[vt]};let je=null;function Oe(vt,yt){if(p=yt.getViewerPose(d||o),w=yt,p!==null){let Pt=p.views;M!==null&&(t.setRenderTargetFramebuffer(D,M.framebuffer),t.setRenderTarget(D));let fe=!1;Pt.length!==dt.cameras.length&&(dt.cameras.length=0,fe=!0);for(let rt=0;rt<Pt.length;rt++){let Rt=Pt[rt],V=null;if(M!==null)V=M.getViewport(Rt);else{let $t=b.getViewSubImage(g,Rt);V=$t.viewport,rt===0&&(t.setRenderTargetTextures(D,$t.colorTexture,$t.depthStencilTexture),t.setRenderTarget(D))}let It=ot[rt];It===void 0&&(It=new ti,It.layers.enable(rt),It.viewport=new on,ot[rt]=It),It.matrix.fromArray(Rt.transform.matrix),It.matrix.decompose(It.position,It.quaternion,It.scale),It.projectionMatrix.fromArray(Rt.projectionMatrix),It.projectionMatrixInverse.copy(It.projectionMatrix).invert(),It.viewport.set(V.x,V.y,V.width,V.height),rt===0&&(dt.matrix.copy(It.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale)),fe===!0&&dt.cameras.push(It)}let Kt=s.enabledFeatures;if(Kt&&Kt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&N){b=n.getBinding();let rt=b.getDepthInformation(Pt[0]);rt&&rt.isValid&&rt.texture&&y.init(rt,s.renderState)}if(Kt&&Kt.includes("camera-access")&&N){t.state.unbindTexture(),b=n.getBinding();for(let rt=0;rt<Pt.length;rt++){let Rt=Pt[rt].camera;if(Rt){let V=m[Rt];V||(V=new il,m[Rt]=V);let It=b.getCameraImage(Rt);V.sourceTexture=It}}}}for(let Pt=0;Pt<E.length;Pt++){let fe=k[Pt],Kt=E[Pt];fe!==null&&Kt!==void 0&&Kt.update(fe,yt,d||o)}je&&je(vt,yt),yt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:yt}),w=null}let We=new zg;We.setAnimationLoop(Oe),this.setAnimationLoop=function(vt){je=vt},this.dispose=function(){}}},Y1=new Ze,qg=new De;qg.set(-1,0,0,0,1,0,0,0,1);function J1(i,t){function e(y,m){y.matrixAutoUpdate===!0&&y.updateMatrix(),m.value.copy(y.matrix)}function n(y,m){m.color.getRGB(y.fogColor.value,Gf(i)),m.isFog?(y.fogNear.value=m.near,y.fogFar.value=m.far):m.isFogExp2&&(y.fogDensity.value=m.density)}function s(y,m,z,H,D){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(y,m):m.isMeshLambertMaterial?(r(y,m),m.envMap&&(y.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(y,m),b(y,m)):m.isMeshPhongMaterial?(r(y,m),p(y,m),m.envMap&&(y.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(y,m),g(y,m),m.isMeshPhysicalMaterial&&M(y,m,D)):m.isMeshMatcapMaterial?(r(y,m),w(y,m)):m.isMeshDepthMaterial?r(y,m):m.isMeshDistanceMaterial?(r(y,m),N(y,m)):m.isMeshNormalMaterial?r(y,m):m.isLineBasicMaterial?(o(y,m),m.isLineDashedMaterial&&c(y,m)):m.isPointsMaterial?h(y,m,z,H):m.isSpriteMaterial?d(y,m):m.isShadowMaterial?(y.color.value.copy(m.color),y.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(y,m){y.opacity.value=m.opacity,m.color&&y.diffuse.value.copy(m.color),m.emissive&&y.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(y.map.value=m.map,e(m.map,y.mapTransform)),m.alphaMap&&(y.alphaMap.value=m.alphaMap,e(m.alphaMap,y.alphaMapTransform)),m.bumpMap&&(y.bumpMap.value=m.bumpMap,e(m.bumpMap,y.bumpMapTransform),y.bumpScale.value=m.bumpScale,m.side===ui&&(y.bumpScale.value*=-1)),m.normalMap&&(y.normalMap.value=m.normalMap,e(m.normalMap,y.normalMapTransform),y.normalScale.value.copy(m.normalScale),m.side===ui&&y.normalScale.value.negate()),m.displacementMap&&(y.displacementMap.value=m.displacementMap,e(m.displacementMap,y.displacementMapTransform),y.displacementScale.value=m.displacementScale,y.displacementBias.value=m.displacementBias),m.emissiveMap&&(y.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,y.emissiveMapTransform)),m.specularMap&&(y.specularMap.value=m.specularMap,e(m.specularMap,y.specularMapTransform)),m.alphaTest>0&&(y.alphaTest.value=m.alphaTest);let z=t.get(m),H=z.envMap,D=z.envMapRotation;H&&(y.envMap.value=H,y.envMapRotation.value.setFromMatrix4(Y1.makeRotationFromEuler(D)).transpose(),H.isCubeTexture&&H.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(qg),y.reflectivity.value=m.reflectivity,y.ior.value=m.ior,y.refractionRatio.value=m.refractionRatio),m.lightMap&&(y.lightMap.value=m.lightMap,y.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,y.lightMapTransform)),m.aoMap&&(y.aoMap.value=m.aoMap,y.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,y.aoMapTransform))}function o(y,m){y.diffuse.value.copy(m.color),y.opacity.value=m.opacity,m.map&&(y.map.value=m.map,e(m.map,y.mapTransform))}function c(y,m){y.dashSize.value=m.dashSize,y.totalSize.value=m.dashSize+m.gapSize,y.scale.value=m.scale}function h(y,m,z,H){y.diffuse.value.copy(m.color),y.opacity.value=m.opacity,y.size.value=m.size*z,y.scale.value=H*.5,m.map&&(y.map.value=m.map,e(m.map,y.uvTransform)),m.alphaMap&&(y.alphaMap.value=m.alphaMap,e(m.alphaMap,y.alphaMapTransform)),m.alphaTest>0&&(y.alphaTest.value=m.alphaTest)}function d(y,m){y.diffuse.value.copy(m.color),y.opacity.value=m.opacity,y.rotation.value=m.rotation,m.map&&(y.map.value=m.map,e(m.map,y.mapTransform)),m.alphaMap&&(y.alphaMap.value=m.alphaMap,e(m.alphaMap,y.alphaMapTransform)),m.alphaTest>0&&(y.alphaTest.value=m.alphaTest)}function p(y,m){y.specular.value.copy(m.specular),y.shininess.value=Math.max(m.shininess,1e-4)}function b(y,m){m.gradientMap&&(y.gradientMap.value=m.gradientMap)}function g(y,m){y.metalness.value=m.metalness,m.metalnessMap&&(y.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,y.metalnessMapTransform)),y.roughness.value=m.roughness,m.roughnessMap&&(y.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,y.roughnessMapTransform)),m.envMap&&(y.envMapIntensity.value=m.envMapIntensity)}function M(y,m,z){y.ior.value=m.ior,m.sheen>0&&(y.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),y.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(y.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,y.sheenColorMapTransform)),m.sheenRoughnessMap&&(y.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,y.sheenRoughnessMapTransform))),m.clearcoat>0&&(y.clearcoat.value=m.clearcoat,y.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(y.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,y.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(y.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===ui&&y.clearcoatNormalScale.value.negate())),m.dispersion>0&&(y.dispersion.value=m.dispersion),m.retroreflectivity>0&&(y.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(y.iridescence.value=m.iridescence,y.iridescenceIOR.value=m.iridescenceIOR,y.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(y.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,y.iridescenceMapTransform)),m.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),m.transmission>0&&(y.transmission.value=m.transmission,y.transmissionSamplerMap.value=z.texture,y.transmissionSamplerSize.value.set(z.width,z.height),m.transmissionMap&&(y.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,y.transmissionMapTransform)),y.thickness.value=m.thickness,m.thicknessMap&&(y.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=m.attenuationDistance,y.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(y.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(y.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=m.specularIntensity,y.specularColor.value.copy(m.specularColor),m.specularColorMap&&(y.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,y.specularColorMapTransform)),m.specularIntensityMap&&(y.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,y.specularIntensityMapTransform))}function w(y,m){m.matcap&&(y.matcap.value=m.matcap)}function N(y,m){let z=t.get(m).light;y.referencePosition.value.setFromMatrixPosition(z.matrixWorld),y.nearDistance.value=z.shadow.camera.near,y.farDistance.value=z.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Z1(i,t,e,n){let s={},r={},o=[],c=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function h(D,E){let k=E.program;n.uniformBlockBinding(D,k)}function d(D,E){let k=s[D.id];k===void 0&&(y(D),k=p(D),s[D.id]=k,D.addEventListener("dispose",z));let J=E.program;n.updateUBOMapping(D,J);let I=t.render.frame;r[D.id]!==I&&(g(D),r[D.id]=I)}function p(D){let E=b();D.__bindingPointIndex=E;let k=i.createBuffer(),J=D.__size,I=D.usage;return i.bindBuffer(i.UNIFORM_BUFFER,k),i.bufferData(i.UNIFORM_BUFFER,J,I),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,k),k}function b(){for(let D=0;D<c;D++)if(o.indexOf(D)===-1)return o.push(D),D;return we("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(D){let E=s[D.id],k=D.uniforms,J=D.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let I=0,B=k.length;I<B;I++){let Y=k[I];if(Array.isArray(Y))for(let Z=0,ot=Y.length;Z<ot;Z++)M(Y[Z],I,Z,J);else M(Y,I,0,J)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function M(D,E,k,J){if(N(D,E,k,J)===!0){let I=D.__offset,B=D.value;if(Array.isArray(B)){let Y=0;for(let Z=0;Z<B.length;Z++){let ot=B[Z],dt=m(ot);w(ot,D.__data,Y),typeof ot!="number"&&typeof ot!="boolean"&&!ot.isMatrix3&&!ArrayBuffer.isView(ot)&&(Y+=dt.storage/Float32Array.BYTES_PER_ELEMENT)}}else w(B,D.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,I,D.__data)}}function w(D,E,k){typeof D=="number"||typeof D=="boolean"?E[0]=D:D.isMatrix3?(E[0]=D.elements[0],E[1]=D.elements[1],E[2]=D.elements[2],E[3]=0,E[4]=D.elements[3],E[5]=D.elements[4],E[6]=D.elements[5],E[7]=0,E[8]=D.elements[6],E[9]=D.elements[7],E[10]=D.elements[8],E[11]=0):ArrayBuffer.isView(D)?E.set(new D.constructor(D.buffer,D.byteOffset,E.length)):D.toArray(E,k)}function N(D,E,k,J){let I=D.value,B=E+"_"+k;if(J[B]===void 0)return typeof I=="number"||typeof I=="boolean"?J[B]=I:ArrayBuffer.isView(I)?J[B]=I.slice():J[B]=I.clone(),!0;{let Y=J[B];if(typeof I=="number"||typeof I=="boolean"){if(Y!==I)return J[B]=I,!0}else{if(ArrayBuffer.isView(I))return!0;if(Y.equals(I)===!1)return Y.copy(I),!0}}return!1}function y(D){let E=D.uniforms,k=0,J=16;for(let B=0,Y=E.length;B<Y;B++){let Z=Array.isArray(E[B])?E[B]:[E[B]];for(let ot=0,dt=Z.length;ot<dt;ot++){let tt=Z[ot],st=Array.isArray(tt.value)?tt.value:[tt.value];for(let mt=0,_t=st.length;mt<_t;mt++){let Ct=st[mt],xt=m(Ct),Et=k%J,Mt=Et%xt.boundary,zt=Et+Mt;k+=Mt,zt!==0&&J-zt<xt.storage&&(k+=J-zt),tt.__data=new Float32Array(xt.storage/Float32Array.BYTES_PER_ELEMENT),tt.__offset=k,k+=xt.storage}}}let I=k%J;return I>0&&(k+=J-I),D.__size=k,D.__cache={},this}function m(D){let E={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(E.boundary=4,E.storage=4):D.isVector2?(E.boundary=8,E.storage=8):D.isVector3||D.isColor?(E.boundary=16,E.storage=12):D.isVector4?(E.boundary=16,E.storage=16):D.isMatrix3?(E.boundary=48,E.storage=48):D.isMatrix4?(E.boundary=64,E.storage=64):D.isTexture?Me("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(D)?(E.boundary=16,E.storage=D.byteLength):Me("WebGLRenderer: Unsupported uniform value type.",D),E}function z(D){let E=D.target;E.removeEventListener("dispose",z);let k=o.indexOf(E.__bindingPointIndex);o.splice(k,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function H(){for(let D in s)i.deleteBuffer(s[D]);o=[],s={},r={}}return{bind:h,update:d,dispose:H}}var j1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),gs=null;function K1(){return gs===null&&(gs=new Ko(j1,16,16,fr,Qi),gs.name="DFG_LUT",gs.minFilter=Gn,gs.magFilter=Gn,gs.wrapS=ls,gs.wrapT=ls,gs.generateMipmaps=!1,gs.needsUpdate=!0),gs}var Ch=class{constructor(t={}){let{canvas:e=cg(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:c=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:d=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:b=!1,reversedDepthBuffer:g=!1,outputBufferType:M=Si}=t;this.isWebGLRenderer=!0;let w;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");w=n.getContextAttributes().alpha}else w=o;let N=M,y=new Set([Gu,Hu,Vu]),m=new Set([Si,Ki,Ga,Wa,ku,$u]),z=new Uint32Array(4),H=new Int32Array(4),D=new j,E=null,k=null,J=[],I=[],B=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ji,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let Y=this,Z=!1,ot=null,dt=null,tt=null,st=null;this._outputColorSpace=Ai;let mt=0,_t=0,Ct=null,xt=-1,Et=null,Mt=new on,zt=new on,ne=null,je=new ye(0),Oe=0,We=e.width,vt=e.height,yt=1,Pt=null,fe=null,Kt=new on(0,0,We,vt),_e=new on(0,0,We,vt),Qt=!1,rt=new Oa,Rt=!1,V=!1,It=new Ze,$t=new j,ce=new on,pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Se=!1;function Re(){return Ct===null?yt:1}let q=n;function Qe(L,Q){return e.getContext(L,Q)}let Fe,F,T,at,lt,gt,Dt,Ht,pt,wt,kt,Lt,Zt,Yt,ue,xe,Te,et,Gt,St,Jt,te,At;try{let L={alpha:!0,depth:s,stencil:r,antialias:c,premultipliedAlpha:h,preserveDrawingBuffer:d,powerPreference:p,failIfMajorPerformanceCaveat:b};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Je,!1),e.addEventListener("webglcontextrestored",ze,!1),e.addEventListener("webglcontextcreationerror",Yn,!1),q===null){let Q="webgl2";if(q=Qe(Q,L),q===null)throw Qe(Q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}he()}catch(L){throw e.removeEventListener("webglcontextlost",Je,!1),e.removeEventListener("webglcontextrestored",ze,!1),e.removeEventListener("webglcontextcreationerror",Yn,!1),we("WebGLRenderer: "+L.message),L}function he(){Fe=new rM(q),Fe.init(),Jt=new W1(q,Fe),F=new Jb(q,Fe,t,Jt),T=new H1(q,Fe),F.reversedDepthBuffer&&g&&T.buffers.depth.setReversed(!0),dt=q.createFramebuffer(),tt=q.createFramebuffer(),st=q.createFramebuffer(),at=new lM(q),lt=new R1,gt=new G1(q,Fe,T,lt,F,Jt,at),Dt=new sM(Y),Ht=new uy(q),te=new qb(q,Ht),pt=new aM(q,Ht,at,te),wt=new uM(q,pt,Ht,te,at),et=new cM(q,F,gt),ue=new Zb(lt),kt=new C1(Y,Dt,Fe,F,te,ue),Lt=new J1(Y,lt),Zt=new P1,Yt=new F1(Fe),Te=new Xb(Y,Dt,T,wt,w,h),xe=new V1(Y,wt,F),At=new Z1(q,at,F,T),Gt=new Yb(q,Fe,at),St=new oM(q,Fe,at),at.programs=kt.programs,Y.capabilities=F,Y.extensions=Fe,Y.properties=lt,Y.renderLists=Zt,Y.shadowMap=xe,Y.state=T,Y.info=at}N!==Si&&(B=new dM(N,e.width,e.height,c,s,r));let le=new lp(Y,q);this.xr=le,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){let L=Fe.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){let L=Fe.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return yt},this.setPixelRatio=function(L){L!==void 0&&(yt=L,this.setSize(We,vt,!1))},this.getSize=function(L){return L.set(We,vt)},this.setSize=function(L,Q,ft=!0){if(le.isPresenting){Me("WebGLRenderer: Can't change size while VR device is presenting.");return}We=L,vt=Q,e.width=Math.floor(L*yt),e.height=Math.floor(Q*yt),ft===!0&&(e.style.width=L+"px",e.style.height=Q+"px"),B!==null&&B.setSize(e.width,e.height),this.setViewport(0,0,L,Q)},this.getDrawingBufferSize=function(L){return L.set(We*yt,vt*yt).floor()},this.setDrawingBufferSize=function(L,Q,ft){We=L,vt=Q,yt=ft,e.width=Math.floor(L*ft),e.height=Math.floor(Q*ft),this.setViewport(0,0,L,Q)},this.setEffects=function(L){if(N===Si){we("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(L){for(let Q=0;Q<L.length;Q++)if(L[Q].isOutputPass===!0){Me("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}B.setEffects(L||[])},this.getCurrentViewport=function(L){return L.copy(Mt)},this.getViewport=function(L){return L.copy(Kt)},this.setViewport=function(L,Q,ft,ct){L.isVector4?Kt.set(L.x,L.y,L.z,L.w):Kt.set(L,Q,ft,ct),T.viewport(Mt.copy(Kt).multiplyScalar(yt).round())},this.getScissor=function(L){return L.copy(_e)},this.setScissor=function(L,Q,ft,ct){L.isVector4?_e.set(L.x,L.y,L.z,L.w):_e.set(L,Q,ft,ct),T.scissor(zt.copy(_e).multiplyScalar(yt).round())},this.getScissorTest=function(){return Qt},this.setScissorTest=function(L){T.setScissorTest(Qt=L)},this.setOpaqueSort=function(L){Pt=L},this.setTransparentSort=function(L){fe=L},this.getClearColor=function(L){return L.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor(...arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha(...arguments)},this.clear=function(L=!0,Q=!0,ft=!0){let ct=0;if(L){let ut=!1;if(Ct!==null){let jt=Ct.texture.format;ut=y.has(jt)}if(ut){let jt=Ct.texture.type,se=m.has(jt),Bt=Te.getClearColor(),Ut=Te.getClearAlpha(),Nt=Bt.r,me=Bt.g,Ie=Bt.b;se?(z[0]=Nt,z[1]=me,z[2]=Ie,z[3]=Ut,q.clearBufferuiv(q.COLOR,0,z)):(H[0]=Nt,H[1]=me,H[2]=Ie,H[3]=Ut,q.clearBufferiv(q.COLOR,0,H))}else ct|=q.COLOR_BUFFER_BIT}Q&&(ct|=q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ft&&(ct|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ct!==0&&q.clear(ct)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(L){L.setRenderer(this),ot=L},this.dispose=function(){e.removeEventListener("webglcontextlost",Je,!1),e.removeEventListener("webglcontextrestored",ze,!1),e.removeEventListener("webglcontextcreationerror",Yn,!1),Te.dispose(),Zt.dispose(),Yt.dispose(),lt.dispose(),Dt.dispose(),wt.dispose(),te.dispose(),At.dispose(),kt.dispose(),le.dispose(),le.removeEventListener("sessionstart",Mi),le.removeEventListener("sessionend",Pi),Li.stop()};function Je(L){L.preventDefault(),qo("WebGLRenderer: Context Lost."),Z=!0}function ze(){qo("WebGLRenderer: Context Restored."),Z=!1;let L=at.autoReset,Q=xe.enabled,ft=xe.autoUpdate,ct=xe.needsUpdate,ut=xe.type;he(),at.autoReset=L,xe.enabled=Q,xe.autoUpdate=ft,xe.needsUpdate=ct,xe.type=ut}function Yn(L){we("WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function fi(L){let Q=L.target;Q.removeEventListener("dispose",fi),_r(Q)}function _r(L){io(L),lt.remove(L)}function io(L){let Q=lt.get(L).programs;Q!==void 0&&(Q.forEach(function(ft){kt.releaseProgram(ft)}),L.isShaderMaterial&&kt.releaseShaderCache(L))}this.renderBufferDirect=function(L,Q,ft,ct,ut,jt){Q===null&&(Q=pe);let se=ut.isMesh&&ut.matrixWorld.determinantAffine()<0,Bt=Gl(L,Q,ft,ct,ut);T.setMaterial(ct,se);let Ut=ft.index,Nt=1;if(ct.wireframe===!0){if(Ut=pt.getWireframeAttribute(ft),Ut===void 0)return;Nt=2}let me=ft.drawRange,Ie=ft.attributes.position,Ft=me.start*Nt,Le=(me.start+me.count)*Nt;jt!==null&&(Ft=Math.max(Ft,jt.start*Nt),Le=Math.min(Le,(jt.start+jt.count)*Nt)),Ut!==null?(Ft=Math.max(Ft,0),Le=Math.min(Le,Ut.count)):Ie!=null&&(Ft=Math.max(Ft,0),Le=Math.min(Le,Ie.count));let de=Le-Ft;if(de<0||de===1/0)return;te.setup(ut,ct,Bt,ft,Ut);let bt,re=Gt;if(Ut!==null&&(bt=Ht.get(Ut),re=St,re.setIndex(bt)),ut.isMesh)ct.wireframe===!0?(T.setLineWidth(ct.wireframeLinewidth*Re()),re.setMode(q.LINES)):re.setMode(q.TRIANGLES);else if(ut.isLine){let Ae=ct.linewidth;Ae===void 0&&(Ae=1),T.setLineWidth(Ae*Re()),ut.isLineSegments?re.setMode(q.LINES):ut.isLineLoop?re.setMode(q.LINE_LOOP):re.setMode(q.LINE_STRIP)}else ut.isPoints?re.setMode(q.POINTS):ut.isSprite&&re.setMode(q.TRIANGLES);if(ut.isBatchedMesh)if(Fe.get("WEBGL_multi_draw"))re.renderMultiDraw(ut._multiDrawStarts,ut._multiDrawCounts,ut._multiDrawCount);else{let Ae=ut._multiDrawStarts,ie=ut._multiDrawCounts,Dn=ut._multiDrawCount,He=Ut?Ht.get(Ut).bytesPerElement:1,ii=lt.get(ct).currentProgram.getUniforms();for(let Vn=0;Vn<Dn;Vn++)ii.setValue(q,"_gl_DrawID",Vn),re.render(Ae[Vn]/He,ie[Vn])}else if(ut.isInstancedMesh)re.renderInstances(Ft,de,ut.count);else if(ft.isInstancedBufferGeometry){let Ae=ft._maxInstanceCount!==void 0?ft._maxInstanceCount:1/0,ie=Math.min(ft.instanceCount,Ae);re.renderInstances(Ft,de,ie)}else re.render(Ft,de)};function so(L,Q,ft,ct){ot!==null&&L.isNodeMaterial&&ot.setObject(ct,L),Rt===!0&&ue.setState(L,ft,!1),L.transparent===!0&&L.side===ps&&L.forceSinglePass===!1?(L.side=ui,L.needsUpdate=!0,Ws(L,Q,ct),L.side=cr,L.needsUpdate=!0,Ws(L,Q,ct),L.side=ps):Ws(L,Q,ct)}this.compile=function(L,Q,ft=null){ft===null&&(ft=L),ot!==null&&ot.renderStart(L,Q,ft),k=Yt.get(ft),k.init(Q),I.push(k),ft.traverseVisible(function(ut){ut.isLight&&ut.layers.test(Q.layers)&&(k.pushLight(ut),ut.castShadow&&k.pushShadow(ut))}),L!==ft&&L.traverseVisible(function(ut){ut.isLight&&ut.layers.test(Q.layers)&&(k.pushLight(ut),ut.castShadow&&k.pushShadow(ut))}),k.setupLights(),ot!==null&&ot.updateLights(k.state.lightsArray),V=this.localClippingEnabled,Rt=ue.init(this.clippingPlanes,V),Rt===!0&&ue.setGlobalState(this.clippingPlanes,Q),ot!==null&&xe.render(k.state.shadowsArray,ft,Q);let ct=new Set;return L.traverse(function(ut){if(!(ut.isMesh||ut.isPoints||ut.isLine||ut.isSprite))return;let jt=ut.material;if(jt)if(Array.isArray(jt))for(let se=0;se<jt.length;se++){let Bt=jt[se];so(Bt,ft,Q,ut),ct.add(Bt)}else so(jt,ft,Q,ut),ct.add(jt)}),k=I.pop(),ot!==null&&ot.renderEnd(),ct},this.compileAsync=function(L,Q,ft=null){let ct=this.compile(L,Q,ft);return new Promise(ut=>{function jt(){if(ct.forEach(function(se){let Ut=lt.get(se).currentProgram;(Ut===void 0||Ut.isReady())&&ct.delete(se)}),ct.size===0){ut(L);return}setTimeout(jt,10)}Fe.get("KHR_parallel_shader_compile")!==null?jt():setTimeout(jt,10)})};let xr=null;function zn(L){xr&&xr(L)}function Mi(){Li.stop()}function Pi(){Li.start()}let Li=new zg;Li.setAnimationLoop(zn),typeof self<"u"&&Li.setContext(self),this.setAnimationLoop=function(L){xr=L,le.setAnimationLoop(L),L===null?Li.stop():Li.start()},le.addEventListener("sessionstart",Mi),le.addEventListener("sessionend",Pi),this.render=function(L,Q){if(Q!==void 0&&Q.isCamera!==!0){we("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Z===!0)return;ot!==null&&ot.renderStart(L,Q);let ft=le.enabled===!0&&le.isPresenting===!0,ct=B!==null&&(Ct===null||ft)&&B.begin(Y,Ct);if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(B===null||B.isCompositing()===!1)&&(le.cameraAutoUpdate===!0&&le.updateCamera(Q),Q=le.getCamera()),L.isScene===!0&&L.onBeforeRender(Y,L,Q,Ct),k=Yt.get(L,I.length),k.init(Q),k.state.textureUnits=gt.getTextureUnits(),I.push(k),It.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),rt.setFromProjectionMatrix(It,Yi,Q.reversedDepth),V=this.localClippingEnabled,Rt=ue.init(this.clippingPlanes,V),E=Zt.get(L,J.length),E.init(),J.push(E),le.enabled===!0&&le.isPresenting===!0){let se=Y.xr.getDepthSensingMesh();se!==null&&Gs(se,Q,-1/0,Y.sortObjects)}Gs(L,Q,0,Y.sortObjects),E.finish(),ot!==null&&ot.updateLights(k.state.lightsArray),Y.sortObjects===!0&&E.sort(Pt,fe),Se=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,Se&&Te.addToRenderList(E,L),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Rt===!0&&ue.beginShadows();let ut=k.state.shadowsArray;if(xe.render(ut,L,Q),Rt===!0&&ue.endShadows(),(ct&&B.hasRenderPass())===!1){let se=E.opaque,Bt=E.transmissive;if(k.setupLights(),Q.isArrayCamera){let Ut=Q.cameras;if(Bt.length>0)for(let Nt=0,me=Ut.length;Nt<me;Nt++){let Ie=Ut[Nt];ro(se,Bt,L,Ie)}Se&&Te.render(L);for(let Nt=0,me=Ut.length;Nt<me;Nt++){let Ie=Ut[Nt];jr(E,L,Ie,Ie.viewport)}}else Bt.length>0&&ro(se,Bt,L,Q),Se&&Te.render(L),jr(E,L,Q)}Ct!==null&&_t===0&&(gt.updateMultisampleRenderTarget(Ct),gt.updateRenderTargetMipmap(Ct)),ct&&B.end(Y),L.isScene===!0&&L.onAfterRender(Y,L,Q),te.resetDefaultState(),xt=-1,Et=null,I.pop(),I.length>0?(k=I[I.length-1],gt.setTextureUnits(k.state.textureUnits),Rt===!0&&ue.setGlobalState(Y.clippingPlanes,k.state.camera)):k=null,J.pop(),J.length>0?E=J[J.length-1]:E=null,ot!==null&&ot.renderEnd()};function Gs(L,Q,ft,ct){if(L.visible===!1)return;if(L.layers.test(Q.layers)){if(L.isGroup)ft=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(Q);else if(L.isLightProbeGrid)k.pushLightProbeGrid(L);else if(L.isLight)k.pushLight(L),L.castShadow&&k.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||L.intersectsFrustum(rt)){ct&&ce.setFromMatrixPosition(L.matrixWorld).applyMatrix4(It);let se=wt.update(L),Bt=L.material;Bt.visible&&E.push(L,se,Bt,ft,ce.z,null,Q)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||L.intersectsFrustum(rt))){let se=wt.update(L),Bt=L.material;if(ct&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),ce.copy(L.boundingSphere.center)):(se.boundingSphere===null&&se.computeBoundingSphere(),ce.copy(se.boundingSphere.center)),ce.applyMatrix4(L.matrixWorld).applyMatrix4(It)),Array.isArray(Bt)){let Ut=se.groups;for(let Nt=0,me=Ut.length;Nt<me;Nt++){let Ie=Ut[Nt],Ft=Bt[Ie.materialIndex];Ft&&Ft.visible&&E.push(L,se,Ft,ft,ce.z,Ie,Q)}}else Bt.visible&&E.push(L,se,Bt,ft,ce.z,null,Q)}}let jt=L.children;for(let se=0,Bt=jt.length;se<Bt;se++)Gs(jt[se],Q,ft,ct)}function jr(L,Q,ft,ct){let{opaque:ut,transmissive:jt,transparent:se}=L;k.setupLightsView(ft),Rt===!0&&ue.setGlobalState(Y.clippingPlanes,ft),ct&&T.viewport(Mt.copy(ct)),ut.length>0&&es(ut,Q,ft),jt.length>0&&es(jt,Q,ft),se.length>0&&es(se,Q,ft),T.buffers.depth.setTest(!0),T.buffers.depth.setMask(!0),T.buffers.color.setMask(!0),T.setPolygonOffset(!1)}function ro(L,Q,ft,ct){if((ft.isScene===!0?ft.overrideMaterial:null)!==null)return;if(k.state.transmissionRenderTarget[ct.id]===void 0){let Ft=Fe.has("EXT_color_buffer_half_float")||Fe.has("EXT_color_buffer_float");k.state.transmissionRenderTarget[ct.id]=new vi(1,1,{generateMipmaps:!0,type:Ft?Qi:Si,minFilter:hr,samples:Math.max(4,F.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ye.workingColorSpace})}let jt=k.state.transmissionRenderTarget[ct.id],se=ct.viewport||Mt;jt.setSize(se.z*Y.transmissionResolutionScale,se.w*Y.transmissionResolutionScale);let Bt=Y.getRenderTarget(),Ut=Y.getActiveCubeFace(),Nt=Y.getActiveMipmapLevel();Y.setRenderTarget(jt),Y.getClearColor(je),Oe=Y.getClearAlpha(),Oe<1&&Y.setClearColor(16777215,.5),Y.clear(),Se&&Te.render(ft);let me=Y.toneMapping;Y.toneMapping=ji;let Ie=ct.viewport;if(ct.viewport!==void 0&&(ct.viewport=void 0),k.setupLightsView(ct),Rt===!0&&ue.setGlobalState(Y.clippingPlanes,ct),es(L,ft,ct),gt.updateMultisampleRenderTarget(jt),gt.updateRenderTargetMipmap(jt),Fe.has("WEBGL_multisampled_render_to_texture")===!1){let Ft=!1;for(let Le=0,de=Q.length;Le<de;Le++){let bt=Q[Le],{object:re,geometry:Ae,material:ie,group:Dn}=bt;if(ie.side===ps&&re.layers.test(ct.layers)){let He=ie.side;ie.side=ui,ie.needsUpdate=!0,Vl(re,ft,ct,Ae,ie,Dn),ie.side=He,ie.needsUpdate=!0,Ft=!0}}Ft===!0&&(gt.updateMultisampleRenderTarget(jt),gt.updateRenderTargetMipmap(jt))}Y.setRenderTarget(Bt,Ut,Nt),Y.setClearColor(je,Oe),Ie!==void 0&&(ct.viewport=Ie),Y.toneMapping=me}function es(L,Q,ft){let ct=Q.isScene===!0?Q.overrideMaterial:null;for(let ut=0,jt=L.length;ut<jt;ut++){let se=L[ut],{object:Bt,geometry:Ut,group:Nt}=se,me=se.material;me.allowOverride===!0&&ct!==null&&(me=ct),Bt.layers.test(ft.layers)&&Vl(Bt,Q,ft,Ut,me,Nt)}}function Vl(L,Q,ft,ct,ut,jt){ot!==null&&ut.isNodeMaterial&&ot.setObject(L,ut),L.onBeforeRender(Y,Q,ft,ct,ut,jt),L.modelViewMatrix.multiplyMatrices(ft.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),ut.onBeforeRender(Y,Q,ft,ct,L,jt),ut.transparent===!0&&ut.side===ps&&ut.forceSinglePass===!1?(ut.side=ui,ut.needsUpdate=!0,Y.renderBufferDirect(ft,Q,ct,ut,L,jt),ut.side=cr,ut.needsUpdate=!0,Y.renderBufferDirect(ft,Q,ct,ut,L,jt),ut.side=ps):Y.renderBufferDirect(ft,Q,ct,ut,L,jt),L.onAfterRender(Y,Q,ft,ct,ut,jt)}function Ws(L,Q,ft){Q.isScene!==!0&&(Q=pe);let ct=lt.get(L),ut=k.state.lights,jt=k.state.shadowsArray,se=ut.state.version,Bt=kt.getParameters(L,ut.state,jt,Q,ft,k.state.lightProbeGridArray),Ut=kt.getProgramCacheKey(Bt),Nt=ct.programs;ct.environment=L.isMeshStandardMaterial||L.isMeshLambertMaterial||L.isMeshPhongMaterial?Q.environment:null,ct.fog=Q.fog;let me=L.isMeshStandardMaterial||L.isMeshLambertMaterial&&!L.envMap||L.isMeshPhongMaterial&&!L.envMap;ct.envMap=Dt.get(L.envMap||ct.environment,me),ct.envMapRotation=ct.environment!==null&&L.envMap===null?Q.environmentRotation:L.envMapRotation,Nt===void 0&&(L.addEventListener("dispose",fi),Nt=new Map,ct.programs=Nt);let Ie=Nt.get(Ut);if(Ie!==void 0){if(ct.currentProgram===Ie&&ct.lightsStateVersion===se)return vr(L,Bt),Ie}else Bt.uniforms=kt.getUniforms(L),ot!==null&&L.isNodeMaterial&&ot.build(L,ft,Bt),L.onBeforeCompile(Bt,Y),Ie=kt.acquireProgram(Bt,Ut),Nt.set(Ut,Ie),ct.uniforms=Bt.uniforms;let Ft=ct.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(Ft.clippingPlanes=ue.uniform),vr(L,Bt),ct.needsLights=ao(L),ct.lightsStateVersion=se,ct.needsLights&&(Ft.ambientLightColor.value=ut.state.ambient,Ft.lightProbe.value=ut.state.probe,Ft.sunLights.value=ut.state.sun,Ft.sunLightShadows.value=ut.state.sunShadow,Ft.directionalLights.value=ut.state.directional,Ft.directionalLightShadows.value=ut.state.directionalShadow,Ft.spotLights.value=ut.state.spot,Ft.spotLightShadows.value=ut.state.spotShadow,Ft.rectAreaLights.value=ut.state.rectArea,Ft.ltc_1.value=ut.state.rectAreaLTC1,Ft.ltc_2.value=ut.state.rectAreaLTC2,Ft.pointLights.value=ut.state.point,Ft.pointLightShadows.value=ut.state.pointShadow,Ft.hemisphereLights.value=ut.state.hemi,Ft.sunShadowMatrix.value=ut.state.sunShadowMatrix,Ft.sunShadowCascade.value=ut.state.sunShadowCascade,Ft.directionalShadowMatrix.value=ut.state.directionalShadowMatrix,Ft.spotLightMatrix.value=ut.state.spotLightMatrix,Ft.spotLightMap.value=ut.state.spotLightMap,Ft.pointShadowMatrix.value=ut.state.pointShadowMatrix),ct.lightProbeGrid=k.state.lightProbeGridArray.length>0,ct.currentProgram=Ie,ct.uniformsList=null,Ie}function ns(L){if(L.uniformsList===null){let Q=L.currentProgram.getUniforms();L.uniformsList=Ya.seqWithValue(Q.seq,L.uniforms)}return L.uniformsList}function vr(L,Q){let ft=lt.get(L);ft.outputColorSpace=Q.outputColorSpace,ft.batching=Q.batching,ft.batchingColor=Q.batchingColor,ft.instancing=Q.instancing,ft.instancingColor=Q.instancingColor,ft.instancingMorph=Q.instancingMorph,ft.skinning=Q.skinning,ft.morphTargets=Q.morphTargets,ft.morphNormals=Q.morphNormals,ft.morphColors=Q.morphColors,ft.morphTargetsCount=Q.morphTargetsCount,ft.numClippingPlanes=Q.numClippingPlanes,ft.numIntersection=Q.numClipIntersection,ft.vertexAlphas=Q.vertexAlphas,ft.vertexTangents=Q.vertexTangents,ft.toneMapping=Q.toneMapping}function Hl(L,Q){if(L.length===0)return null;if(L.length===1)return L[0].texture!==null?L[0]:null;D.setFromMatrixPosition(Q.matrixWorld);for(let ft=0,ct=L.length;ft<ct;ft++){let ut=L[ft];if(ut.texture!==null&&ut.boundingBox.containsPoint(D))return ut}return null}function Gl(L,Q,ft,ct,ut){Q.isScene!==!0&&(Q=pe),gt.resetTextureUnits();let jt=Q.fog,se=ct.isMeshStandardMaterial||ct.isMeshLambertMaterial||ct.isMeshPhongMaterial?Q.environment:null,Bt=Ct===null?Y.outputColorSpace:Ct.isXRRenderTarget===!0?Ct.texture.colorSpace:Ye.workingColorSpace,Ut=ct.isMeshStandardMaterial||ct.isMeshLambertMaterial&&!ct.envMap||ct.isMeshPhongMaterial&&!ct.envMap,Nt=Dt.get(ct.envMap||se,Ut),me=ct.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,Ie=!!ft.attributes.tangent&&(!!ct.normalMap||ct.anisotropy>0),Ft=!!ft.morphAttributes.position,Le=!!ft.morphAttributes.normal,de=!!ft.morphAttributes.color,bt=ji;ct.toneMapped&&(Ct===null||Ct.isXRRenderTarget===!0)&&(bt=Y.toneMapping);let re=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,Ae=re!==void 0?re.length:0,ie=lt.get(ct),Dn=k.state.lights;if(Rt===!0&&(V===!0||L!==Et)){let un=L===Et&&ct.id===xt;ue.setState(ct,L,un)}let He=!1;ct.version===ie.__version?(ie.needsLights&&ie.lightsStateVersion!==Dn.state.version||ie.outputColorSpace!==Bt||ut.isBatchedMesh&&ie.batching===!1||!ut.isBatchedMesh&&ie.batching===!0||ut.isBatchedMesh&&ie.batchingColor===!0&&ut._colorsTexture===null||ut.isBatchedMesh&&ie.batchingColor===!1&&ut._colorsTexture!==null||ut.isInstancedMesh&&ie.instancing===!1||!ut.isInstancedMesh&&ie.instancing===!0||ut.isSkinnedMesh&&ie.skinning===!1||!ut.isSkinnedMesh&&ie.skinning===!0||ut.isInstancedMesh&&ie.instancingColor===!0&&ut.instanceColor===null||ut.isInstancedMesh&&ie.instancingColor===!1&&ut.instanceColor!==null||ut.isInstancedMesh&&ie.instancingMorph===!0&&ut.morphTexture===null||ut.isInstancedMesh&&ie.instancingMorph===!1&&ut.morphTexture!==null||ie.envMap!==Nt||ct.fog===!0&&ie.fog!==jt||ie.numClippingPlanes!==void 0&&(ie.numClippingPlanes!==ue.numPlanes||ie.numIntersection!==ue.numIntersection)||ie.vertexAlphas!==me||ie.vertexTangents!==Ie||ie.morphTargets!==Ft||ie.morphNormals!==Le||ie.morphColors!==de||ie.toneMapping!==bt||ie.morphTargetsCount!==Ae||!!ie.lightProbeGrid!=k.state.lightProbeGridArray.length>0)&&(He=!0):(He=!0,ie.__version=ct.version);let ii=ie.currentProgram;He===!0&&(ii=Ws(ct,Q,ut),ot&&ct.isNodeMaterial&&ot.onUpdateProgram(ct,ii,ie));let Vn=!1,wi=!1,Jn=!1,nn=ii.getUniforms(),xn=ie.uniforms;if(T.useProgram(ii.program)&&(Vn=!0,wi=!0,Jn=!0),ct.id!==xt&&(xt=ct.id,wi=!0),ie.needsLights){let un=Hl(k.state.lightProbeGridArray,ut);ie.lightProbeGrid!==un&&(ie.lightProbeGrid=un,wi=!0)}if(Vn||Et!==L){T.buffers.depth.getReversed()&&L.reversedDepth!==!0&&(L._reversedDepth=!0,L.updateProjectionMatrix()),nn.setValue(q,"projectionMatrix",L.projectionMatrix),nn.setValue(q,"viewMatrix",L.matrixWorldInverse);let ss=nn.map.cameraPosition;ss!==void 0&&ss.setValue(q,$t.setFromMatrixPosition(L.matrixWorld)),F.logarithmicDepthBuffer&&nn.setValue(q,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(ct.isMeshPhongMaterial||ct.isMeshToonMaterial||ct.isMeshLambertMaterial||ct.isMeshBasicMaterial||ct.isMeshStandardMaterial||ct.isShaderMaterial)&&nn.setValue(q,"isOrthographic",L.isOrthographicCamera===!0),Et!==L&&(Et=L,wi=!0,Jn=!0)}if(ie.needsLights&&(Dn.state.sunShadowMap.length>0&&nn.setValue(q,"sunShadowMap",Dn.state.sunShadowMap,gt),Dn.state.directionalShadowMap.length>0&&nn.setValue(q,"directionalShadowMap",Dn.state.directionalShadowMap,gt),Dn.state.spotShadowMap.length>0&&nn.setValue(q,"spotShadowMap",Dn.state.spotShadowMap,gt),Dn.state.pointShadowMap.length>0&&nn.setValue(q,"pointShadowMap",Dn.state.pointShadowMap,gt)),ut.isSkinnedMesh){nn.setOptional(q,ut,"bindMatrix"),nn.setOptional(q,ut,"bindMatrixInverse");let un=ut.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),nn.setValue(q,"boneTexture",un.boneTexture,gt))}ut.isBatchedMesh&&(nn.setOptional(q,ut,"batchingTexture"),nn.setValue(q,"batchingTexture",ut._matricesTexture,gt),nn.setOptional(q,ut,"batchingIdTexture"),nn.setValue(q,"batchingIdTexture",ut._indirectTexture,gt),nn.setOptional(q,ut,"batchingColorTexture"),ut._colorsTexture!==null&&nn.setValue(q,"batchingColorTexture",ut._colorsTexture,gt));let is=ft.morphAttributes;if((is.position!==void 0||is.normal!==void 0||is.color!==void 0)&&et.update(ut,ft,ii),(wi||ie.receiveShadow!==ut.receiveShadow)&&(ie.receiveShadow=ut.receiveShadow,nn.setValue(q,"receiveShadow",ut.receiveShadow)),(ct.isMeshStandardMaterial||ct.isMeshLambertMaterial||ct.isMeshPhongMaterial)&&ct.envMap===null&&Q.environment!==null&&(xn.envMapIntensity.value=Q.environmentIntensity),xn.dfgLUT!==void 0&&(xn.dfgLUT.value=K1()),wi){if(nn.setValue(q,"toneMappingExposure",Y.toneMappingExposure),ie.needsLights&&Wl(xn,Jn),jt&&ct.fog===!0&&Lt.refreshFogUniforms(xn,jt),Lt.refreshMaterialUniforms(xn,ct,yt,vt,k.state.transmissionRenderTarget[L.id]),ie.needsLights&&ie.lightProbeGrid){let un=ie.lightProbeGrid;xn.probesSH.value=un.texture,xn.probesMin.value.copy(un.boundingBox.min),xn.probesMax.value.copy(un.boundingBox.max),xn.probesResolution.value.copy(un.resolution)}Ya.upload(q,ns(ie),xn,gt)}if(ct.isShaderMaterial&&ct.uniformsNeedUpdate===!0&&(Ya.upload(q,ns(ie),xn,gt),ct.uniformsNeedUpdate=!1),ct.isSpriteMaterial&&nn.setValue(q,"center",ut.center),nn.setValue(q,"modelViewMatrix",ut.modelViewMatrix),nn.setValue(q,"normalMatrix",ut.normalMatrix),nn.setValue(q,"modelMatrix",ut.matrixWorld),ct.uniformsGroups!==void 0){let un=ct.uniformsGroups;for(let ss=0,Xs=un.length;ss<Xs;ss++){let lo=un[ss];At.update(lo,ii),At.bind(lo,ii)}}return ii}function Wl(L,Q){L.ambientLightColor.needsUpdate=Q,L.lightProbe.needsUpdate=Q,L.sunLights.needsUpdate=Q,L.sunLightShadows.needsUpdate=Q,L.directionalLights.needsUpdate=Q,L.directionalLightShadows.needsUpdate=Q,L.pointLights.needsUpdate=Q,L.pointLightShadows.needsUpdate=Q,L.spotLights.needsUpdate=Q,L.spotLightShadows.needsUpdate=Q,L.rectAreaLights.needsUpdate=Q,L.hemisphereLights.needsUpdate=Q}function ao(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return mt},this.getActiveMipmapLevel=function(){return _t},this.getRenderTarget=function(){return Ct},this.setRenderTargetTextures=function(L,Q,ft){let ct=lt.get(L);ct.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,ct.__autoAllocateDepthBuffer===!1&&(ct.__useRenderToTexture=!1),lt.get(L.texture).__webglTexture=Q,lt.get(L.depthTexture).__webglTexture=ct.__autoAllocateDepthBuffer?void 0:ft,ct.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,Q){let ft=lt.get(L);ft.__webglFramebuffer=Q,ft.__useDefaultFramebuffer=Q===void 0},this.setRenderTarget=function(L,Q=0,ft=0){Ct=L,mt=Q,_t=ft;let ct=null,ut=!1,jt=!1;if(L){let Bt=lt.get(L);if(Bt.__useDefaultFramebuffer!==void 0){T.bindFramebuffer(q.FRAMEBUFFER,Bt.__webglFramebuffer),Mt.copy(L.viewport),zt.copy(L.scissor),ne=L.scissorTest,T.viewport(Mt),T.scissor(zt),T.setScissorTest(ne),xt=-1;return}else if(Bt.__webglFramebuffer===void 0)gt.setupRenderTarget(L);else if(Bt.__hasExternalTextures)gt.rebindTextures(L,lt.get(L.texture).__webglTexture,lt.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){let me=L.depthTexture;if(Bt.__boundDepthTexture!==me){if(me!==null&&lt.has(me)&&(L.width!==me.image.width||L.height!==me.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");gt.setupDepthRenderbuffer(L)}}let Ut=L.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(jt=!0);let Nt=lt.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(Nt[Q])?ct=Nt[Q][ft]:ct=Nt[Q],ut=!0):L.samples>0&&gt.useMultisampledRTT(L)===!1?ct=lt.get(L).__webglMultisampledFramebuffer:Array.isArray(Nt)?ct=Nt[ft]:ct=Nt,Mt.copy(L.viewport),zt.copy(L.scissor),ne=L.scissorTest}else Mt.copy(Kt).multiplyScalar(yt).floor(),zt.copy(_e).multiplyScalar(yt).floor(),ne=Qt;if(ft!==0&&(ct=dt),T.bindFramebuffer(q.FRAMEBUFFER,ct)&&T.drawBuffers(L,ct),T.viewport(Mt),T.scissor(zt),T.setScissorTest(ne),ut){let Bt=lt.get(L.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Bt.__webglTexture,ft)}else if(jt){let Bt=Q;for(let Ut=0;Ut<L.textures.length;Ut++){let Nt=lt.get(L.textures[Ut]);q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0+Ut,Nt.__webglTexture,ft,Bt)}}else if(L!==null&&ft!==0){let Bt=lt.get(L.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Bt.__webglTexture,ft)}xt=-1};function oo(L){let Q=lt.get(L);return(Q.__readFormat!==L.format||Q.__readType!==L.type)&&(Q.__readFormat=L.format,Q.__readType=L.type,Q.__formatReadable=F.textureFormatReadable(L.format),Q.__typeReadable=F.textureTypeReadable(L.type)),Q}this.readRenderTargetPixels=function(L,Q,ft,ct,ut,jt,se,Bt=0){if(!(L&&L.isWebGLRenderTarget)){we("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=lt.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&se!==void 0&&(Ut=Ut[se]),Ut){T.bindFramebuffer(q.FRAMEBUFFER,Ut);try{let Nt=L.textures[Bt],me=Nt.format,Ie=Nt.type;L.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Bt);let Ft=oo(Nt);if(Ft.__formatReadable===!1){we("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ft.__typeReadable===!1){we("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=L.width-ct&&ft>=0&&ft<=L.height-ut&&q.readPixels(Q,ft,ct,ut,Jt.convert(me),Jt.convert(Ie),jt)}finally{let Nt=Ct!==null?lt.get(Ct).__webglFramebuffer:null;T.bindFramebuffer(q.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(L,Q,ft,ct,ut,jt,se,Bt=0){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ut=lt.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&se!==void 0&&(Ut=Ut[se]),Ut)if(Q>=0&&Q<=L.width-ct&&ft>=0&&ft<=L.height-ut){T.bindFramebuffer(q.FRAMEBUFFER,Ut);let Nt=L.textures[Bt],me=Nt.format,Ie=Nt.type;L.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Bt);let Ft=oo(Nt);if(Ft.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ft.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Le=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,Le),q.bufferData(q.PIXEL_PACK_BUFFER,jt.byteLength,q.STREAM_READ),q.readPixels(Q,ft,ct,ut,Jt.convert(me),Jt.convert(Ie),0),q.bindBuffer(q.PIXEL_PACK_BUFFER,null);let de=Ct!==null?lt.get(Ct).__webglFramebuffer:null;T.bindFramebuffer(q.FRAMEBUFFER,de);let bt=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await hg(q,bt,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,Le),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,jt),q.bindBuffer(q.PIXEL_PACK_BUFFER,null),q.deleteBuffer(Le),q.deleteSync(bt),jt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,Q=null,ft=0){let ct=Math.pow(2,-ft),ut=Math.floor(L.image.width*ct),jt=Math.floor(L.image.height*ct),se=Q!==null?Q.x:0,Bt=Q!==null?Q.y:0;gt.setTexture2D(L,0),q.copyTexSubImage2D(q.TEXTURE_2D,ft,0,0,se,Bt,ut,jt),T.unbindTexture()},this.copyTextureToTexture=function(L,Q,ft=null,ct=null,ut=0,jt=0){let se,Bt,Ut,Nt,me,Ie,Ft,Le,de,bt=L.isCompressedTexture?L.mipmaps[jt]:L.image;if(ft!==null)se=ft.max.x-ft.min.x,Bt=ft.max.y-ft.min.y,Ut=ft.isBox3?ft.max.z-ft.min.z:1,Nt=ft.min.x,me=ft.min.y,Ie=ft.isBox3?ft.min.z:0;else{let xn=Math.pow(2,-ut);se=Math.floor(bt.width*xn),Bt=Math.floor(bt.height*xn),L.isDataArrayTexture?Ut=bt.depth:L.isData3DTexture?Ut=Math.floor(bt.depth*xn):Ut=1,Nt=0,me=0,Ie=0}ct!==null?(Ft=ct.x,Le=ct.y,de=ct.z):(Ft=0,Le=0,de=0);let re=Jt.convert(Q.format),Ae=Jt.convert(Q.type),ie;Q.isData3DTexture?(gt.setTexture3D(Q,0),ie=q.TEXTURE_3D):Q.isDataArrayTexture||Q.isCompressedArrayTexture?(gt.setTexture2DArray(Q,0),ie=q.TEXTURE_2D_ARRAY):(gt.setTexture2D(Q,0),ie=q.TEXTURE_2D),T.activeTexture(q.TEXTURE0),T.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,Q.flipY),T.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),T.pixelStorei(q.UNPACK_ALIGNMENT,Q.unpackAlignment);let Dn=T.getParameter(q.UNPACK_ROW_LENGTH),He=T.getParameter(q.UNPACK_IMAGE_HEIGHT),ii=T.getParameter(q.UNPACK_SKIP_PIXELS),Vn=T.getParameter(q.UNPACK_SKIP_ROWS),wi=T.getParameter(q.UNPACK_SKIP_IMAGES);T.pixelStorei(q.UNPACK_ROW_LENGTH,bt.width),T.pixelStorei(q.UNPACK_IMAGE_HEIGHT,bt.height),T.pixelStorei(q.UNPACK_SKIP_PIXELS,Nt),T.pixelStorei(q.UNPACK_SKIP_ROWS,me),T.pixelStorei(q.UNPACK_SKIP_IMAGES,Ie);let Jn=L.isDataArrayTexture||L.isData3DTexture,nn=Q.isDataArrayTexture||Q.isData3DTexture;if(L.isDepthTexture){let xn=lt.get(L),is=lt.get(Q),un=lt.get(xn.__renderTarget),ss=lt.get(is.__renderTarget);T.bindFramebuffer(q.READ_FRAMEBUFFER,un.__webglFramebuffer),T.bindFramebuffer(q.DRAW_FRAMEBUFFER,ss.__webglFramebuffer);for(let Xs=0;Xs<Ut;Xs++)Jn&&(q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,lt.get(L).__webglTexture,ut,Ie+Xs),q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,lt.get(Q).__webglTexture,jt,de+Xs)),q.blitFramebuffer(Nt,me,se,Bt,Ft,Le,se,Bt,q.DEPTH_BUFFER_BIT,q.NEAREST);T.bindFramebuffer(q.READ_FRAMEBUFFER,null),T.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else if(ut!==0||L.isRenderTargetTexture||lt.has(L)){let xn=lt.get(L),is=lt.get(Q);T.bindFramebuffer(q.READ_FRAMEBUFFER,tt),T.bindFramebuffer(q.DRAW_FRAMEBUFFER,st);for(let un=0;un<Ut;un++)Jn?q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,xn.__webglTexture,ut,Ie+un):q.framebufferTexture2D(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,xn.__webglTexture,ut),nn?q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,is.__webglTexture,jt,de+un):q.framebufferTexture2D(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,is.__webglTexture,jt),ut!==0?q.blitFramebuffer(Nt,me,se,Bt,Ft,Le,se,Bt,q.COLOR_BUFFER_BIT,q.NEAREST):nn?q.copyTexSubImage3D(ie,jt,Ft,Le,de+un,Nt,me,se,Bt):q.copyTexSubImage2D(ie,jt,Ft,Le,Nt,me,se,Bt);T.bindFramebuffer(q.READ_FRAMEBUFFER,null),T.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else nn?L.isDataTexture||L.isData3DTexture?q.texSubImage3D(ie,jt,Ft,Le,de,se,Bt,Ut,re,Ae,bt.data):Q.isCompressedArrayTexture?q.compressedTexSubImage3D(ie,jt,Ft,Le,de,se,Bt,Ut,re,bt.data):q.texSubImage3D(ie,jt,Ft,Le,de,se,Bt,Ut,re,Ae,bt):L.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,jt,Ft,Le,se,Bt,re,Ae,bt.data):L.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,jt,Ft,Le,bt.width,bt.height,re,bt.data):q.texSubImage2D(q.TEXTURE_2D,jt,Ft,Le,se,Bt,re,Ae,bt);T.pixelStorei(q.UNPACK_ROW_LENGTH,Dn),T.pixelStorei(q.UNPACK_IMAGE_HEIGHT,He),T.pixelStorei(q.UNPACK_SKIP_PIXELS,ii),T.pixelStorei(q.UNPACK_SKIP_ROWS,Vn),T.pixelStorei(q.UNPACK_SKIP_IMAGES,wi),jt===0&&Q.generateMipmaps&&q.generateMipmap(ie),T.unbindTexture()},this.initRenderTarget=function(L){lt.get(L).__webglFramebuffer===void 0&&gt.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?gt.setTextureCube(L,0):L.isData3DTexture?gt.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?gt.setTexture2DArray(L,0):gt.setTexture2D(L,0),T.unbindTexture()},this.resetState=function(){mt=0,_t=0,Ct=null,T.reset(),te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Ye._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ye._getUnpackColorSpace()}};var Jg=new ci,Ph=new j,ts=class extends Sl{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new wn(t,3)),this.setAttribute("uv",new wn(e,2))}applyMatrix4(t){let e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new lr(e,6,1);return this.setAttribute("instanceStart",new Zi(n,3,0)),this.setAttribute("instanceEnd",new Zi(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new lr(e,6,1);return this.setAttribute("instanceColorStart",new Zi(n,3,0)),this.setAttribute("instanceColorEnd",new Zi(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new pl(t.geometry)),this}fromLineSegments(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ci);let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),Jg.setFromBufferAttribute(e),this.boundingBox.union(Jg))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yi),this.boundingBox===null&&this.computeBoundingBox();let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ph.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ph)),Ph.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Ph));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}};qt.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Wt},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};hi.line={uniforms:Dl.merge([qt.common,qt.fog,qt.line]),vertexShader:`
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
		`};var _s=class extends kn{constructor(t){super({type:"LineMaterial",uniforms:Dl.clone(hi.line.uniforms),vertexShader:hi.line.vertexShader,fragmentShader:hi.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0!==this.worldUnits&&(this.needsUpdate=!0),t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var cp=new on,Zg=new j,jg=new j,Wn=new on,Xn=new on,xs=new on,up=new j,hp=new Ze,qn=new Ml,Kg=new j,Lh=new ci,Dh=new yi,vs=new on,ys,Gr;function Qg(i,t,e){return vs.set(0,0,-t,1).applyMatrix4(i.projectionMatrix),vs.multiplyScalar(1/vs.w),vs.x=Gr/e.width,vs.y=Gr/e.height,vs.applyMatrix4(i.projectionMatrixInverse),vs.multiplyScalar(1/vs.w),Math.abs(Math.max(vs.x,vs.y))}function Q1(i,t){let e=i.matrixWorld,n=i.geometry,s=n.attributes.instanceStart,r=n.attributes.instanceEnd,o=Math.min(n.instanceCount,s.count);for(let c=0,h=o;c<h;c++){qn.start.fromBufferAttribute(s,c),qn.end.fromBufferAttribute(r,c),qn.applyMatrix4(e);let d=new j,p=new j;ys.distanceSqToSegment(qn.start,qn.end,p,d),p.distanceTo(d)<Gr*.5&&t.push({point:p,pointOnLine:d,distance:ys.origin.distanceTo(p),object:i,face:null,faceIndex:c,uv:null,uv1:null})}}function tw(i,t,e){let n=t.projectionMatrix,r=i.material.resolution,o=i.matrixWorld,c=i.geometry,h=c.attributes.instanceStart,d=c.attributes.instanceEnd,p=Math.min(c.instanceCount,h.count),b=-t.near;ys.at(1,xs),xs.w=1,xs.applyMatrix4(t.matrixWorldInverse),xs.applyMatrix4(n),xs.multiplyScalar(1/xs.w),xs.x*=r.x/2,xs.y*=r.y/2,xs.z=0,up.copy(xs),hp.multiplyMatrices(t.matrixWorldInverse,o);for(let g=0,M=p;g<M;g++){if(Wn.fromBufferAttribute(h,g),Xn.fromBufferAttribute(d,g),Wn.w=1,Xn.w=1,Wn.applyMatrix4(hp),Xn.applyMatrix4(hp),Wn.z>b&&Xn.z>b)continue;if(Wn.z>b){let H=Wn.z-Xn.z,D=(Wn.z-b)/H;Wn.lerp(Xn,D)}else if(Xn.z>b){let H=Xn.z-Wn.z,D=(Xn.z-b)/H;Xn.lerp(Wn,D)}Wn.applyMatrix4(n),Xn.applyMatrix4(n),Wn.multiplyScalar(1/Wn.w),Xn.multiplyScalar(1/Xn.w),Wn.x*=r.x/2,Wn.y*=r.y/2,Xn.x*=r.x/2,Xn.y*=r.y/2,qn.start.copy(Wn),qn.start.z=0,qn.end.copy(Xn),qn.end.z=0;let N=qn.closestPointToPointParameter(up,!0);qn.at(N,Kg);let y=Vf.lerp(Wn.z,Xn.z,N),m=y>=-1&&y<=1,z=up.distanceTo(Kg)<Gr*.5;if(m&&z){qn.start.fromBufferAttribute(h,g),qn.end.fromBufferAttribute(d,g),qn.start.applyMatrix4(o),qn.end.applyMatrix4(o);let H=new j,D=new j;ys.distanceSqToSegment(qn.start,qn.end,D,H),e.push({point:D,pointOnLine:H,distance:ys.origin.distanceTo(D),object:i,face:null,faceIndex:g,uv:null,uv1:null})}}}var Wr=class extends Bn{constructor(t=new ts,e=new _s({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,s=new Float32Array(2*e.count);for(let o=0,c=0,h=e.count;o<h;o++,c+=2)Zg.fromBufferAttribute(e,o),jg.fromBufferAttribute(n,o),s[c]=c===0?0:s[c-1],s[c+1]=s[c]+Zg.distanceTo(jg);let r=new lr(s,2,1);return t.setAttribute("instanceDistanceStart",new Zi(r,1,0)),t.setAttribute("instanceDistanceEnd",new Zi(r,1,1)),this}raycast(t,e){let n=this.material.worldUnits,s=t.camera;if(s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.'),n===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;let r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;ys=t.ray;let o=this.matrixWorld,c=this.geometry,h=this.material;Gr=h.linewidth+r,c.boundingSphere===null&&c.computeBoundingSphere(),Dh.copy(c.boundingSphere).applyMatrix4(o);let d;if(n)d=Gr*.5;else{let b=Math.max(s.near,Dh.distanceToPoint(ys.origin));d=Qg(s,b,h.resolution)}if(Dh.radius+=d,ys.intersectsSphere(Dh)===!1)return;c.boundingBox===null&&c.computeBoundingBox(),Lh.copy(c.boundingBox).applyMatrix4(o);let p;if(n)p=Gr*.5;else{let b=Math.max(s.near,Lh.distanceToPoint(ys.origin));p=Qg(s,b,h.resolution)}Lh.expandByScalar(p),ys.intersectsBox(Lh)!==!1&&(n?Q1(this,e):tw(this,s,e))}onBeforeRender(t){let e=this.material.uniforms;e&&e.resolution&&(t.getViewport(cp),this.material.uniforms.resolution.value.set(cp.z,cp.w))}};var Nh=i=>i<90?Math.round(i)+" s":i<5400?Math.round(i/60)+" min":i<129600?Math.round(i/3600)+" h":Math.round(i/86400)+(window.__L==="en"?" days":window.__L==="ca"?" dies":" d\xEDas"),Ss=i=>window.__L==="en"?i+" ago":(window.__L==="ca"?"fa ":"hace ")+i;function t_(i){let t=window.__ROD__,{scene:e,camera:n,goal:s,cur:r,invalidate:o,K:c,CX:h,CY:d,mcs:p,q:b,list:g,clamp:M,norm:w,munis:N}=i,y=a=>document.querySelector(a),m=a=>String(a).replace(/[<>&"]/g,l=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[l]),z=(a,l)=>[(a-h)*c,(l-d)*c],H=.06,D=t.segs.map(a=>{let l=[],u=[0];for(let f=0;f<a.length;f+=2){let x=z(a[f],a[f+1]);l.length&&u.push(u[u.length-1]+Math.hypot(x[0]-l[l.length-1][0],x[1]-l[l.length-1][1])),l.push(x)}return{p:l,c:u,L:u[u.length-1]}}),E=t.stops.map(([a,l,u,f])=>({n:a,id:f,w:z(l,u),fams:new Set})),k=t.routes.map(([a,l,u])=>({s:a,l,c:u})),J=new Map;(t.bus||[]).forEach(([a,l,u,f])=>{let x={days:new Set(a),name:l,stops:u,times:f};u.forEach((S,A)=>{if(A<u.length-1){let P=J.get(S)||[];P.push([x,A]),J.set(S,P)}})});function I(a,l,u){let f=Qt(),x=t.days.indexOf(f.ymd),S=[];for(let[A,P]of J.get(a)||[]){if(!A.days.has(x))continue;let R=A.times[P];if(R<l||R>u)continue;let U=A.stops[A.stops.length-1];S.push({sm:R,est:R,dl:0,fam:A.name,dest:E[U].n,destId:E[U].id,plat:"",cancel:!1,obs:"",live:!1,num:"",tid:"",tr:null,bus:!0,src:"bus",bstops:A.stops.slice(P)})}return S}let B=(a,l)=>{let u=a.match(/^R([A-Z]*)(\d*)(.*)$/),f=l.match(/^R([A-Z]*)(\d*)(.*)$/);return(u[1]||"").localeCompare(f[1]||"")||(+u[2]||0)-(+f[2]||0)||u[3].localeCompare(f[3])},Y=[...new Set(k.map(a=>a.s))].sort(B),Z={};k.forEach(a=>{Z[a.s]||(Z[a.s]=a.c)});let ot=t.pats.map(([a,l,u])=>({stops:a,t:l,segs:u})),dt=t.trips.map(([a,l,u,f,x],S)=>({day:a,pat:ot[l],fam:k[u].s,c:k[u].c,t0:f,num:x,tid:t.tids[S]})),tt={};Y.forEach(a=>tt[a]=new Set),dt.forEach(a=>{a.pat.segs.forEach(l=>tt[a.fam].add(l)),a.pat.stops.forEach(l=>E[l].fams.add(a.fam))});let st=t.days.map((a,l)=>dt.filter(u=>u.day===l)),mt=new Map(dt.map(a=>[a.tid,a])),_t=[124.87404143965449,479.9901289885639,124.62688710863031,249.99562739146893,486.739003764725,248.0364802782304,2037.1344308355726],Ct=Math.PI/180,xt=3.922*Ct,Et=-39.705*Ct;function Mt(a,l){let u=a*Ct+xt,f=l*Ct,x=Math.cos(Et),S=Math.sin(Et),A=Math.cos(f),P=Math.cos(u)*A,R=Math.sin(u)*A,U=Math.sin(f),$=Math.atan2(R,P*x-U*S),v=Math.asin(U*x+P*S),_=Math.sqrt(2/(1+Math.cos($)*Math.cos(v))),C=_*Math.cos(v)*Math.sin($),O=_*Math.sin(v),[X,K,G,nt,W,Vt,oe]=_t;return z((K+X*C-W)*oe,(Vt-(nt-G*O))*oe)}let zt=new Map(E.map((a,l)=>[a.id,l]));function ne(a){if(a.g)return a.g;let l=[],u=[],f=[0],x=0;return a.segs.forEach((S,A)=>{let P=D[S];P.p.forEach((R,U)=>{A&&!U||(l.push(R),u.push(x+P.c[U]))}),x+=P.L,f.push(x)}),a.g={pts:l,cum:u,stopD:f}}function je(a,l,u,f){let x=1e18,S=0;for(let A=0;A+1<a.pts.length;A++){if(a.cum[A+1]<u||a.cum[A]>f)continue;let P=a.pts[A],R=a.pts[A+1],U=R[0]-P[0],$=R[1]-P[1],v=U*U+$*$||1e-9,_=Math.max(0,Math.min(1,((l[0]-P[0])*U+(l[1]-P[1])*$)/v)),C=P[0]+U*_-l[0],O=P[1]+$*_-l[1],X=C*C+O*O;X<x&&(x=X,S=a.cum[A]+_*(a.cum[A+1]-a.cum[A]))}return{d:S,err:Math.sqrt(x)}}function Oe(a,l){let u=0,f=a.cum.length-1;if(l<=0)return a.pts[0];if(l>=a.cum[f])return a.pts[f];for(;f-u>1;){let P=u+f>>1;a.cum[P]<=l?u=P:f=P}let x=(l-a.cum[u])/(a.cum[f]-a.cum[u]||1),S=a.pts[u],A=a.pts[f];return[S[0]+(A[0]-S[0])*x,S[1]+(A[1]-S[1])*x]}let We=a=>`${a.slice(6,8)}/${a.slice(4,6)}`,vt=new Intl.DateTimeFormat("es-ES",{timeZone:"Europe/Madrid",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hourCycle:"h23"});function yt(a){let l={};return vt.formatToParts(a).forEach(u=>l[u.type]=u.value),{ymd:l.year+l.month+l.day,min:+l.hour*60+ +l.minute+ +l.second/60}}let Pt=0,fe=null,Kt=0,_e=0;function Qt(){let a=yt(new Date);if(Pt===0&&fe==null)return{...a,live:!0};let l=fe==null?a.min:Kt+(Pt?(performance.now()-_e)/6e4*Pt:0);return{ymd:a.ymd,min:l,live:!1}}let rt=a=>(a=(Math.floor(a+1e-6)%1440+1440)%1440,String(Math.floor(a/60)).padStart(2,"0")+":"+String(a%60).padStart(2,"0")),Rt="https://rodalies.erathegameoftime.com",V={url:"",delays:new Map,tu:new Map,vp:new Map,alerts:[],ok:0,okVP:0,err:"",feedTs:0};try{let a=new URLSearchParams(location.search).get("rt");a&&localStorage.setItem("rod_rt",a);let l=localStorage.getItem("rod_rt");l&&/jhmuyo\.workers\.dev/.test(l)&&(l=Rt,localStorage.setItem("rod_rt",l)),V.url=l||Rt}catch{V.url=Rt}let It=(a,l)=>{let u=new AbortController,f=setTimeout(()=>u.abort(),12e3);return fetch(a+l,{cache:"no-store",signal:u.signal}).then(x=>{if(clearTimeout(f),!x.ok)throw new Error("HTTP "+x.status);return x.json()},x=>{throw clearTimeout(f),x})},$t="https://rodalies.jhmuyo.workers.dev";function ce(){return(V.url===Rt&&V.altUntil>Date.now()?$t:V.url).replace(/\/+$/,"")}let pe=a=>/^51/.test(a||""),Se={t0:Date.now(),done:!(document.documentElement.classList.contains("splash")||window.__natBoot)};function Re(){if(Se.done)return;let a=[...Xe.st,...$e.st];if(!((V.ok||V.err||!V.url)&&a.every(u=>{let f=Bt.get(u);return f&&f.at>0&&!f.loading}))&&Date.now()-Se.t0<4e3){setTimeout(Re,120);return}Se.done=!0;try{ge(!0)}catch{}requestAnimationFrame(()=>requestAnimationFrame(()=>{window.__splashOff&&window.__splashOff();let u=document.getElementById("splash");u&&(u.classList.add("out"),setTimeout(()=>u.remove(),400)),document.documentElement.classList.remove("splash")}))}setTimeout(Re,150);async function q(){if(!V.url){gt();return}let a=ce();if(!q.busy){q.busy=1;try{await Qe(a)}finally{q.busy=0}}}async function Qe(a){let l=!V.adifAt||Date.now()-V.adifAt>11e4,u=_=>({status:"fulfilled",value:_}),f=_=>({status:"rejected",reason:_}),x,S,A,P,R,U=null;if(V.noLive&&Date.now()-V.noLive>30*6e4&&(V.noLive=0),!V.noLive)try{U=await It(a,"/live.json")}catch(_){if(/HTTP 404/.test(_.message))V.noLive=Date.now();else{if(V.url===Rt&&a!==$t)return V.altUntil=Date.now()+30*6e4,Qe($t);a===$t&&(V.altUntil=0),U={__fail:_}}}if(U&&U.__fail)x=S=A=P=R=f(U.__fail);else if(U&&U.v===1){let _=O=>U[O]&&!U[O].__err?u(U[O]):f(new Error(U[O]&&U[O].__err||"sin dato"));x=_("tu"),S=_("vp"),A=_("al"),P=_("nt"),R=l?_("ad"):f(0);let C=U.rep;C&&Array.isArray(C.items)&&!(V.repFresh&&Date.now()-V.repFresh<2e4)&&(V.rep=C.items,V.crowd=C.crowd||[],V.repSkew=(C.now||Date.now())-Date.now(),C.tipos&&(V.tipos=C.tipos),V.repOk=Date.now(),V.repFail=0)}else(!V.repFail||Date.now()-V.repFail>15*6e4)&&It(a,"/reports.json").then(_=>{_&&Array.isArray(_.items)?(V.rep=_.items,V.crowd=_.crowd||[],V.repSkew=(_.now||Date.now())-Date.now(),_.tipos&&(V.tipos=_.tipos),V.repOk=Date.now(),V.repFail=0):V.repFail=Date.now()}).catch(()=>{V.repFail=Date.now(),V.repOk=0}),[x,S,A,P,R]=await Promise.allSettled([It(a,"/trip_updates.json"),It(a,"/vehicle_positions.json"),It(a,"/alerts.json"),It(a,"/notices.json"),l?It(a,"/adif.json"):Promise.reject(0)]);if(R.status==="fulfilled"&&R.value&&R.value.ok?(V.adif=R.value,V.adifAt=Date.now()):l&&(V.adifAt=Date.now()-6e4),x.status==="fulfilled"){let _=new Map,C=new Map;for(let O of x.value.entity||[]){let X=O.tripUpdate;if(!X||!X.trip||!pe(X.trip.tripId))continue;let K=X.trip.tripId,G=(X.stopTimeUpdate||[])[0],nt=X.delay;nt==null&&G&&(nt=(G.arrival||G.departure||{}).delay),X.trip.scheduleRelationship==="CANCELED"&&(nt="X"),nt!=null&&_.set(K,nt),C.set(K,{next:G?{sid:G.stopId,t:+((G.arrival||G.departure||{}).time||0)}:null})}V.delays=_,V.tu=C,V.ok=Date.now(),V.feedTs=+((x.value.header||{}).timestamp||0)*1e3,V.err=""}else V.err=x.reason&&x.reason.message||__t(0);if(S.status==="fulfilled"){let _=new Map,C=Date.now()/1e3;for(let O of S.value.entity||[]){let X=O.vehicle;if(!X||!X.trip||!pe(X.trip.tripId)||!X.position)continue;let K=X.vehicle&&X.vehicle.label||"",G=K.match(/PLATF\.\(([^)]+)\)/),nt=V.vp.get(X.trip.tripId),W={tid:X.trip.tripId,w:Mt(+X.position.longitude,+X.position.latitude),st:X.currentStatus||"",sid:X.stopId||"",ts:+X.timestamp||C,label:K,plat:G?G[1]:"",fam:(K.split("-")[0]||"").trim(),num:X.vehicle&&X.vehicle.id||""};W.disp=nt?nt.disp:null,_.set(W.tid,W)}V.vp=_,V.okVP=Date.now()}let $=[];if(P.status==="fulfilled"&&Array.isArray(P.value.included)){V.okNotices=Date.now();for(let _ of P.value.included){let C=new Set((_.lines||[]).map(nt=>nt.id).filter(nt=>Z[nt])),O=(nt,W)=>{nt=nt||{},W=W||window.__L;let Vt=nt[W];return W==="en"&&Vt&&(Vt===nt.ca||/\b(els|amb|dels|per una|circulen|serveis|entre .{2,40} i )\b|ç|l·l/i.test(Vt))&&(Vt=""),(Vt||nt.es||nt.ca||"").trim()},X=nt=>[O(_.description,nt),O(_.title,nt)].sort((W,Vt)=>Vt.length-W.length)[0],K=X(),G=X("es");K&&$.push({id:"N"+_.externalId,fams:C,stops:new Set,txt:K,es:G,when:(_.date||"")+"T"+(_.time||""),src:"Rodalies",core:_.core||""})}}if(A.status==="fulfilled"){let _=+((A.value.header||{}).timestamp||0);if(V.alertsTs=_,Date.now()/1e3-_<6*3600)for(let C of A.value.entity||[]){let O=C.alert;if(!O)continue;let X=new Set,K=new Set;for(let oe of O.informedEntity||[])(oe.routeId||"").startsWith("51")&&X.add(oe.routeId.replace(/^51T\d+/,"")),oe.stopId&&zt.has(oe.stopId)&&K.add(zt.get(oe.stopId));if(!X.size&&!K.size)continue;let G=(O.descriptionText||O.headerText||{translation:[]}).translation||[],nt=((G.find(oe=>oe.language==="es")||G[0]||{}).text||"").trim(),W=+((O.activePeriod||[])[0]||{}).start||0,Vt=oe=>String(oe||"").toLowerCase().replace(/&#?\w+;/g,"").replace(/[^a-z0-9áéíóúàèòïüñç]+/g,"");$.some(oe=>oe.txt===nt||Vt(oe.txt)===Vt(nt)||oe.es&&Vt(oe.es)===Vt(nt))||$.push({id:C.id,fams:X,stops:K,txt:nt,when:W?new Date(W*1e3).toISOString().slice(0,19):"",src:"Renfe"})}}if(V.adif&&Date.now()-V.adifAt<15*6e4)for(let[_,C]of(V.adif.items||[]).entries()){let O=(C.t?C.t+". ":"")+C.txt,X=new Set,K=new Set,G=w(O);for(let nt of O.matchAll(/\b(R\d{1,2}[NS]?|R3a|RG1|RL\d|RT\d)\b/g))Z[nt[1]]&&X.add(nt[1]);E.forEach((nt,W)=>{nt.fams.size&&nt.n.length>4&&G.includes(w(nt.n))&&(K.add(W),X.size||nt.fams.forEach(Vt=>X.add(Vt)))}),$.some(nt=>nt.txt===O)||$.push({id:"A"+_,fams:X,stops:K,txt:O,when:V.adif.upd||"",src:"Adif",lvl:C.lvl})}let v=_=>String(_||"").replace(/&#x([0-9a-f]+);/gi,(C,O)=>String.fromCodePoint(parseInt(O,16))).replace(/&#(\d+);/g,(C,O)=>String.fromCodePoint(+O)).replace(/&nbsp;/g," ").replace(/&quot;/g,'"').replace(/&apos;|&#39;/g,"'").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/[\u200B-\u200D\uFEFF]/g,"").replace(/[\u0091\u0092]/g,"\u2019").replace(/[\u0093\u0094]/g,'"').replace(/\u0096|\u0097/g,"\u2013").replace(/\u0085/g,"\u2026").replace(/[\u0080-\u009F]/g,"").replace(/([A-Za-zÀ-ÿ])[\uFFFD\uFFFC](?=[A-Za-zÀ-ÿ])/g,"$1\u2019").replace(/\b([dlDL])\?(?=[aeiouhàèéíòóúAEIOUHÀÈÉÍÒÓÚ])/g,"$1\u2019").replace(/\s+/g," ").trim();for(let _ of $)if(_.txt=v(_.txt),_.es&&(_.es=v(_.es)),_.fams&&_.fams.size>3){let C=_.txt.match(/\bTren\s+(\d{4,6})\b/i);if(C){let O=null;try{O=Up(C[1])}catch{}O&&(_.fams=new Set([O]))}}if(P.status==="fulfilled"||A.status==="fulfilled"){V.alerts=$.sort((_,C)=>C.when>_.when?1:-1);try{cx()}catch{}}gt(),id(),Le=0,o()}let Fe=()=>V.okVP&&Date.now()-V.okVP<10*6e4,F=()=>V.okVP&&Date.now()-V.okVP<9e4,T={at:0,v:!1},at=()=>{if(!Fe()||V.vp.size>0)return!1;if(Date.now()-T.at>3e4){T.at=Date.now();let a=yt(new Date),l=t.days.indexOf(a.ymd),u=0;if(l>=0)for(let f of st[l]){let x=a.min-f.t0;x>f.pat.t[1]+2&&x<f.pat.t[f.pat.t.length-2]-2&&u++}T.v=u>=6}return T.v},lt=()=>Fe()&&!at();function gt(){let a=y("#rtst"),l=y("#mode");if(l){let f=[...Lt].filter(P=>{bo("");let R=zi.m.get(P);return R&&R[0]>=2}),x=So(f),S=!!lt()&&Qt().live&&!(f.length&&x.length===f.length);l.classList.toggle("on",S&&F()),l.classList.toggle("pre",!(S&&F())),l.textContent=S&&!F()?__t(1):S?__t(2):pt.cur?__t(3):__t(4),l.classList.toggle("past",!!pt.cur);let A=y("#rcgrab");if(A){let P=A.querySelector(".rdot");P||(P=document.createElement("b"),P.className="rdot",A.insertBefore(P,A.firstChild)),P.className="rdot "+(pt.cur?"past":S&&F()?"on":"pre"),P.title=l.textContent}l.title=pt.cur?`${__t(5)}${pt.cur.sn.t}${__t(6)}`:""}if(!a)return;V.url?V.err?a.textContent=__t(8)+V.err+__t(9):lt()?a.innerHTML=`${__t(10)}${V.vp.size}${__t(11)}${V.delays.size}${__t(12)}${new Date(V.okVP).toLocaleTimeString("es-ES",{hour:"2-digit",minute:"2-digit",second:"2-digit"})}`:at()?a.textContent=__t(13):a.textContent=__t(14):a.textContent=V.err||__t(7);let u=y("#rturl");u&&u._shown!==V.url&&(u.value=V.url,u._shown=V.url)}y("#rtsave").onclick=()=>{let a=y("#rturl").value.trim().replace(/\/+(alerts|trip_updates|vehicle_positions)\.json$/,"").replace(/\/+$/,"");if(a&&!/^https?:\/\//.test(a)&&(a="https://"+a),!a){V.err=__t(15),gt();return}V.url=a;try{localStorage.setItem("rod_rt",a)}catch{}V.ok=0,V.err="",gt(),q()},y("#rtoff").onclick=()=>{V.url=Rt;try{localStorage.removeItem("rod_rt")}catch{}p._h="",q()};let Dt=0;setInterval(()=>{let a=ln.size||ve;(document.hidden?!a||Date.now()-Dt<115e3:Date.now()-Dt<15e3)||(Dt=Date.now(),q())},2e4),setTimeout(()=>{Dt=Date.now(),q()},50),document.addEventListener("visibilitychange",()=>{!document.hidden&&Date.now()-Dt>15e3&&(Dt=Date.now(),q())});let pt={snap:null,key:""};function wt(){let a=Qt();if(a.live||!Ue.hoy||!Ue.hoy.snaps||Pt&&fe==null)return null;let l=yt(new Date).min;if(a.min>l+1)return null;let u=null;for(let f of Ue.hoy.snaps){if(!f.d)continue;let x=im(f.t);x<=a.min+1&&(!u||x>u.m)&&(u={m:x,sn:f})}return u&&a.min-u.m<=25?u:null}let kt=a=>{{let x=Kh(a.num);if(x&&x.cx&&Qt().live)return"X"}let l=pt.cur;if(l){if(l.sn.x&&l.sn.x.includes(a.tid))return"X";let x=l.sn.d[a.tid];return x??0}if(!lt())return null;let u=V.delays.get(a.tid),f=V.vp.get(a.tid);return u==="X"?u:f&&f.pre&&f.preDl>=1?Math.max(typeof u=="number"?u:0,f.preDl*60):u??null},Lt=new Set(Y);try{let a=JSON.parse(localStorage.getItem("rod_lines")||"null");Array.isArray(a)&&a.some(l=>Y.includes(l))&&(Lt.clear(),a.forEach(l=>Y.includes(l)&&Lt.add(l)))}catch{}let Zt=new ts,Yt=new ts,ue=new _s({vertexColors:!0,linewidth:3.2,depthTest:!1,transparent:!0}),xe=new _s({color:16777215,linewidth:6,depthTest:!1,transparent:!0,opacity:.9}),Te=new Wr(Zt,ue),et=new Wr(Yt,xe);et.renderOrder=20,Te.renderOrder=21,Te.frustumCulled=et.frustumCulled=!1,e.add(et,Te);function Gt(a){let l=a[0]/c+h,u=a[1]/c+d;for(let f of N){if(f._bb===void 0){let S=1e9,A=1e9,P=-1e9,R=-1e9;for(let U of f.rings||[]){let $=U[0]||[];for(let v=0;v<$.length;v+=2)$[v]<S&&(S=$[v]),$[v]>P&&(P=$[v]),$[v+1]<A&&(A=$[v+1]),$[v+1]>R&&(R=$[v+1])}f._bb=[S,A,P,R]}let x=f._bb;if(!(l<x[0]||l>x[2]||u<x[1]||u>x[3]))for(let S of f.rings||[]){let A=S[0]||[],P=!1;for(let R=0,U=A.length,$=U-2;R<U;$=R,R+=2){let v=A[R+1],_=A[$+1];v>u!=_>u&&l<(A[$]-A[R])*(u-v)/(_-v)+A[R]&&(P=!P)}if(P)return!0}}return!1}let St=!1;function Jt(){St||!N.length||(St=!0,E.forEach(a=>{a.ext=!Gt(a.w)}),D.forEach(a=>{a.ext=!Gt(a.p[0])&&!Gt(a.p[a.p.length-1])&&!Gt(a.p[a.p.length>>1])}))}let te=()=>{let a=new Set(Lt.size<=2?Lt:[]);try{bt&&bt.fam&&a.add(bt.fam)}catch{}return a},At="";function he(){Jt();let a=[],l=[],u=new Set,f=new ye,x=new ye("#d2d0d0"),S=te();At=[...S].join();for(let $ of Y)if(Lt.has($))for(let v of tt[$]){if(u.has(v))continue;u.add(v);let _=D[v].p;f.set(Z[$]),D[v].ext&&!S.has($)&&f.lerp(x,.55);for(let C=0;C+1<_.length;C++)a.push(_[C][0],_[C][1],H,_[C+1][0],_[C+1][1],H),l.push(f.r,f.g,f.b,f.r,f.g,f.b)}a.length||(a.push(0,0,-50,0,0,-50),l.push(0,0,0,0,0,0));let A=new ts,P=new ts;A.setPositions(a),A.setColors(l),P.setPositions(a);let R=Te.geometry,U=et.geometry;Te.geometry=A,et.geometry=P,R&&R.dispose(),U&&U.dispose(),o()}he();let le=a=>new kn({uniforms:{dpr:{value:Math.min(devicePixelRatio||1,2)},border:{value:new ye(a)}},vertexShader:"attribute float size; attribute vec3 fill; attribute float bw; varying vec3 vF; varying float vS; varying float vB; uniform float dpr; void main(){ vF=fill; vS=size*dpr; vB=bw*dpr; gl_PointSize=vS; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"uniform vec3 border; varying vec3 vF; varying float vS; varying float vB; void main(){ float r=length(gl_PointCoord*2.0-1.0)*vS*0.5; float R=vS*0.5; if(r>R) discard; float a=1.0-smoothstep(R-1.2,R,r); vec3 c = r>R-vB ? border : vF; gl_FragColor=vec4(c,a); }",transparent:!0,depthTest:!1}),Je=new En,ze=E.length,Yn=new Float32Array(ze*3),fi=new Float32Array(ze*3),_r=new Float32Array(ze),io=new Float32Array(ze);E.forEach((a,l)=>{Yn[l*3]=a.w[0],Yn[l*3+1]=a.w[1],Yn[l*3+2]=H,fi.set([1,1,1],l*3),_r[l]=6,io[l]=1.6}),Je.setAttribute("position",new hn(Yn,3)),Je.setAttribute("fill",new hn(fi,3)),Je.setAttribute("size",new hn(_r,1)),Je.setAttribute("bw",new hn(io,1));let so=le("#1d2330"),xr=new Fr(Je,so);xr.renderOrder=22,xr.frustumCulled=!1,e.add(xr);function zn(){let a=r.dist<45,l=te();E.forEach((u,f)=>{let x=[...u.fams].some(A=>Lt.has(A)),S=u.ext&&![...u.fams].some(A=>l.has(A))&&f!==re;_r[f]=x?f===re?13:S?3:a?8:5:0,io[f]=f===re?3:1.6}),Je.attributes.size.needsUpdate=!0,Je.attributes.bw.needsUpdate=!0}let Mi=600,Pi=new En,Li=new Float32Array(Mi*3),Gs=new Float32Array(Mi*3),jr=new Float32Array(Mi),ro=new Float32Array(Mi);Pi.setAttribute("position",new hn(Li,3)),Pi.setAttribute("fill",new hn(Gs,3)),Pi.setAttribute("size",new hn(jr,1)),Pi.setAttribute("bw",new hn(ro,1));let es=new Float32Array(Mi);Pi.setAttribute("ang",new hn(es,1));let Vl=new kn({uniforms:{dpr:{value:Math.min(devicePixelRatio||1,2)},border:{value:new ye("#ffffff")}},vertexShader:"attribute float size; attribute vec3 fill; attribute float bw; attribute float ang; varying vec3 vF; varying float vS; varying float vB; varying float vA; uniform float dpr; void main(){ vF=fill; vS=size*dpr; vB=bw*dpr; vA=ang; gl_PointSize=vS; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"uniform vec3 border; varying vec3 vF; varying float vS; varying float vB; varying float vA; void main(){ vec2 p=gl_PointCoord*2.0-1.0; float r=length(p)*vS*0.5; float R=vS*0.5; if(r>R) discard; float a=1.0-smoothstep(R-1.2,R,r); vec3 c = r>R-vB ? border : vF; if(vA<50.0){ vec2 d=vec2(sin(vA),-cos(vA)); vec2 n=vec2(cos(vA),sin(vA)); float qy=-dot(p,d); float qx=dot(p,n); float w=(qy+0.66)/0.98*0.48; if(qy>-0.66 && qy<0.32 && abs(qx)<w) c=vec3(1.0); } else if(vA>70.0 && vA<80.0){ if(abs(p.y)<0.36 && abs(abs(p.x)-0.2)<0.1) c=vec3(1.0); } else if(vA>80.0 && vA<90.0){ if((abs(p.x)<0.11 && p.y>-0.5 && p.y<0.16) || length(p-vec2(0.0,0.38))<0.12) c=vec3(1.0); } gl_FragColor=vec4(c,a); }",transparent:!0,depthTest:!1}),Ws=new Fr(Pi,Vl);Ws.renderOrder=24,Ws.frustumCulled=!1,e.add(Ws);let ns=new En,vr=new Float32Array(Mi*3),Hl=new Float32Array(Mi*3),Gl=new Float32Array(Mi),Wl=new Float32Array(Mi);ns.setAttribute("position",new hn(vr,3)),ns.setAttribute("fill",new hn(Hl,3)),ns.setAttribute("size",new hn(Gl,1)),ns.setAttribute("bw",new hn(Wl,1));let ao=new Fr(ns,le("#ffffff"));ao.renderOrder=23,ao.frustumCulled=!1,e.add(ao);function oo(a,l){let u=D[a],f=l*u.L,x=0,S=u.c.length-1;for(;S-x>1;){let $=x+S>>1;u.c[$]<=f?x=$:S=$}let A=u.c[S]-u.c[x]||1,P=(f-u.c[x])/A,R=u.p[x],U=u.p[S];return[R[0]+(U[0]-R[0])*P,R[1]+(U[1]-R[1])*P]}let L=a=>a*a*(3-2*a)*.35+a*.65;function Q(a,l){let u=a.pat.t,f=a.pat.stops.length,x=u[2*f-2];if(l<u[1]-2||l>x+1)return null;if(l<=u[1])return{w:E[a.pat.stops[0]].w,at:0,next:0,moving:!1};for(let S=0;S<f-1;S++){let A=u[2*S+1],P=u[2*S+2],R=u[2*S+3];if(l<=P){let U=P>A?(l-A)/(P-A):1;return{w:oo(a.pat.segs[S],L(M(U,0,1))),at:-1,next:S+1,prev:S,moving:!0}}if(l<=R)return{w:E[a.pat.stops[S+1]].w,at:S+1,next:S+1,moving:!1}}return{w:E[a.pat.stops[f-1]].w,at:f-1,next:f-1,moving:!1}}function ft(a){let l=t.days.indexOf(a.ymd),u=[];if(l<0)return{k:l,out:u};let f=(x,S)=>{for(let A of x){if(!Lt.has(A.fam))continue;let P=kt(A);if(P==="X")continue;let R=(P||0)/60,U=a.min+S-A.t0-R;if(U<-2||U>A.pat.t[A.pat.t.length-2]+1)continue;let $=Q(A,U);$&&u.push({tr:A,p:$,rel:U,dl:R,live:P!=null})}};return f(st[l],0),l>0&&f(st[l-1],1440),{k:l,out:u}}function ct(a,l,u,f){let x=a.pat.stops[0],S=l.dep0,A=null,P=(U,$)=>{for(let v of U||[]){let _=v.pat.stops,C=_.length;if(_[C-1]!==x||v===a)continue;let O=v.t0+v.pat.t[2*(C-1)]-$;if(O>S+5||O<S-120)continue;let X=ne(v.pat),K=je(X,l.w,-1,1e9);if(K.err>.6)continue;let G=X.stopD,nt=v.pat.t,W=G.findIndex(ee=>ee>K.d);W<0&&(W=C-1);let Vt=W===0?nt[1]:nt[2*W-1]+(G[W]>G[W-1]?(K.d-G[W-1])/(G[W]-G[W-1]):1)*(nt[2*W]-nt[2*W-1]),oe=u-(v.t0+Vt-$);oe<-5||oe>120||(!A||Math.abs(oe)<Math.abs(A.prevDl))&&(A={prevTr:v,dPrev:K.d,prevDl:oe,arrO:O+Math.max(0,oe)})}};if(P(st[f],0),f>0&&P(st[f-1],1440),!A)return{prevTr:null,preDl:0};let R=Math.max(S,A.arrO+3);return{...A,depEst:R,preDl:Math.max(0,R-S)}}function ut(a,l,u){let f=a.pat.t,x=l.length;if(!(u>=0))return u<0?l[0]:null;for(let S=0;S<x;S++)if(u<=f[2*S+1]){if(u>=f[2*S]||S===0)return l[S];let A=f[2*S-1],P=f[2*S];return l[S-1]+(l[S]-l[S-1])*(P>A?(u-A)/(P-A):1)}return l[x-1]}let jt=performance.now();function se(){let a=[],l=Date.now()/1e3,u=performance.now(),f=Math.min(1,(u-jt)/1e3);jt=u;for(let x of V.vp.values()){let S=mt.get(x.tid),A=S?S.fam:x.fam;if(A&&Z[A]&&!Lt.has(A))continue;let P=V.delays.get(x.tid),R=typeof P=="number"?P/60:0,U=Math.max(0,l-x.ts);x.mvTs!==x.ts&&((!x.mvW||Math.hypot(x.w[0]-x.mvW[0],x.w[1]-x.mvW[1])>.025)&&(x.mvW=x.w,x.mvAt=x.ts),x.mvTs=x.ts),x.still=x.ts-(x.mvAt||x.ts);let $=x.w,v=-1;if(S){let C=ne(S.pat),O=C.stopD;if(x.dObs==null||x.obsAt!==x.ts){let W=je(C,x.w,-1,1e9);x.dObs=W.d,x.err=W.err,x.obsAt=x.ts}let X=Qt(),K=t.days.indexOf(X.ymd),G=S.day===K-1?1440:0,nt=S.t0+S.pat.t[1]-G;if(x.pre=X.min+R<nt-1&&(x.dObs>O[0]+.35||x.err>.6)&&!(x.st==="STOPPED_AT"&&x.sid===E[S.pat.stops[0]].id),x.dep0=nt,x.pre){if(x.atStop=-1,x.next=0,v=0,x.disp=null,x.prevAt!==x.ts&&(x.prevAt=x.ts,Object.assign(x,ct(S,x,X.min,K))),x.prevTr){let W=ne(x.prevTr.pat);$=Oe(W,x.dPrev)}}else if(!F()&&S){let W=Qt(),Vt=t.days.indexOf(W.ymd),oe=S.day===Vt-1?1440:0,ee=Q(S,W.min+oe-S.t0-R);ee?($=ee.w,x.est=!0,v=ee.next,x.atStop=ee.moving?-1:ee.at,x.next=ee.next,x.before=!1):(x.atStop=-1,x.next=-1)}else if(x.err<=.6){let W=O.findIndex(ee=>ee>x.dObs+.08);W<0&&(W=O.length-1);let Vt=O.reduce((ee,tn,Ee)=>Math.abs(tn-x.dObs)<Math.abs(O[ee]-x.dObs)?Ee:ee,0);x.atStop=Math.abs(O[Vt]-x.dObs)<.16?Vt:-1;{let ee=x.st==="STOPPED_AT"&&x.sid?S.pat.stops.findIndex(tn=>E[tn].id===x.sid):-1;ee>=0&&Math.abs(O[ee]-x.dObs)<.6&&(x.atStop=ee,W<=ee&&(W=Math.min(ee+1,O.length-1)))}x.before=x.atStop>=0&&x.dObs<O[x.atStop]-.15,x.next=W,v=W;let oe=x.dObs;if(x.st==="STOPPED_AT"&&x.atStop>=0)oe=O[x.atStop];else if(W>0){let ee=(S.pat.t[2*W]-S.pat.t[2*W-1])*60,tn=ee>0?(O[W]-O[W-1])/ee:0,Ee=Qt(),be=t.days.indexOf(Ee.ymd),vn=S.day===be-1?1440:0,sn=ut(S,O,Ee.min+vn-S.t0-R),pn=x.dObs+tn*Math.min(U,60);sn!=null&&(pn=Math.min(pn,Math.max(x.dObs,sn))),oe=Math.max(x.dObs,Math.min(O[W]-.03,pn))}x.disp==null||Math.abs(x.disp-oe)>1.2?x.disp=oe:oe>x.disp&&(x.disp+=(oe-x.disp)*Math.min(1,f*1.5)),$=Oe(C,x.disp)}else if(x.err>2){let W=Qt(),Vt=t.days.indexOf(W.ymd),oe=S.day===Vt-1?1440:0,ee=Q(S,W.min+oe-S.t0-R);ee&&($=ee.w,x.est=!0,v=ee.next),x.atStop=-1,x.next=ee?ee.next:-1}else x.atStop=-1,x.next=-1}let _=x.pre?"":x.st==="STOPPED_AT"&&x.atStop>=0||x.atStop>=0&&x.still>30?"st":x.still>=90&&x.atStop<0?"via":"";a.push({tr:S,v:x,w:$,stop:_,p:{w:$},fam:A||"?",c:S?S.c:Z[A]||"#6b7385",dl:R,live:!0,real:!0,idx:v,age:U,cancel:P==="X"})}return a}let Bt=new Map,Ut=!1,Nt=!1,me="",Ie={st:-1},Ft=[],Le=0,de=null,bt=null,re=-1,Ae=!1,ie=0,Dn="";function He(a){let l=Pt>0||!!de,u=window.__mapHidden?1e3:Pt>0?50:l?200:250;if(a-Le<u)return!1;Le=a,[...te()].join()!==At&&(he(),zn());{let v=wt(),_=v?v.sn.t:"";pt.cur=v,_!==pt.key&&(pt.key=_,gt()),!v&&!Qt().live&&!Ue.at&&Xl()}let f=Qt(),x=lt()&&f.live,S=x?{k:t.days.indexOf(f.ymd),out:se()}:ft(f);Ft=S.out;let A=new ye,P=0,R=0;for(let v of Ft){if(P>=Mi)break;Li[P*3]=v.p.w[0],Li[P*3+1]=v.p.w[1],Li[P*3+2]=H+.02;let _=null;if(v.real&&v.v.pre&&v.v.prevTr)_=Oe(ne(v.v.prevTr.pat),v.v.dPrev+.35);else if(v.real&&v.tr&&!v.v.pre&&v.v.err<=.6&&v.v.disp!=null&&!(v.v.st==="STOPPED_AT"&&v.v.atStop>=0))_=Oe(ne(v.tr.pat),v.v.disp+.35);else if(!v.real&&v.p.moving){let G=v.tr.pat.t,nt=v.p.prev,W=G[2*nt+1],Vt=G[2*nt+2],oe=Vt>W?(v.rel-W)/(Vt-W):1;_=oo(v.tr.pat.segs[nt],Math.min(1,L(M(oe,0,1))+.04))}let C=v.real?!!v.stop:!v.p.moving;if(v.broke=zp(v),v.broke)es[P]=85;else if(C)es[P]=75;else if(_){let G=jl(v.p.w),nt=jl(_),W=nt[0]-G[0],Vt=nt[1]-G[1];es[P]=Math.hypot(W,Vt)>.05?Math.atan2(W,-Vt):99}else es[P]=99;A.set(v.c||v.tr.c),Gs[P*3]=A.r,Gs[P*3+1]=A.g,Gs[P*3+2]=A.b;let O=v.tr?v.tr===bt:bt&&bt.vtid===v.v.tid;jr[P]=O?22:r.dist<45?17:14,ro[P]=O?3.5:2.2;let X=v.real&&v.stop==="via"||!!v.broke,K=v.cancel||v.broke?[.86,.15,.15]:v.dl>10?[.86,.15,.15]:v.dl>5?[.92,.48,.05]:v.dl>=1?[.98,.8,.08]:[.09,.64,.29];(v.live&&v.dl>=5||O||X)&&(vr[R*3]=v.p.w[0],vr[R*3+1]=v.p.w[1],vr[R*3+2]=H+.01,Hl.set(O?K:X?[.86,.15,.15]:[.98,.45,.09],R*3),Gl[R]=jr[P]+(O?16+5*Math.sin(a/220):X?10+3*Math.sin(a/400):8),Wl[R]=O?2:3,R++),P++}if(Pi.setDrawRange(0,P),ns.setDrawRange(0,R),["position","fill","size","bw"].forEach(v=>{Pi.attributes[v].needsUpdate=!0,ns.attributes[v].needsUpdate=!0}),Pi.attributes.ang.needsUpdate=!0,de){let v=Ft.find(_=>_.tr===de);if(v){let _=0,C=innerHeight,O=p.style.display!=="none"&&!p.classList.contains("min")?p.getBoundingClientRect():null,X=y("#rc").getBoundingClientRect();innerWidth<=640&&(O&&(_=O.bottom),C=Math.min(C,X.top));let K=_+(C-_)/2,G=K-innerHeight/2,nt=2*s.dist*Math.tan(17.5*Math.PI/180)/innerHeight;s.tx=v.p.w[0]-Math.sin(r.yaw)*G*nt,s.ty=v.p.w[1]+Math.cos(r.yaw)*G*nt}else lt()&&Qt().live&&(de=null)}let U=rt(Math.floor(f.min+1e-6));U!==Dn&&(Dn=U,y("#ctime").textContent=U),y("#ntr").textContent=String(Ft.length),y("#ntrl").textContent=x?__t(16):__t(17);{let v=Lt.size<Y.length?[...Lt].sort(B).join(", "):"",_=y("#ccount"),C=pt.cur?`\u23EA ${Ft.length}${__t(18)}${pt.cur.sn.t} \xB7 ${Object.values(pt.cur.sn.d).filter(O=>O>=60).length}${__t(19)}`:!f.live&&f.min<yt(new Date).min-1&&!Pt?`${__t(20)}${Ue.hoy&&Ue.hoy.snaps&&Ue.hoy.snaps.some(O=>O.d)?`${__t(21)}${Ue.hoy.snaps.find(O=>O.d).t}`:__t(22)}`:x&&!F()?`\u{1F4F6} ${__t(1)} \xB7 ${__t(23)} ${Ss(Math.round((Date.now()-V.okVP)/6e4)+" min")} <small class="nopos">\xB7 ${__t(24)}</small>`:x&&!Ft.some(O=>O.real)&&So(Lt).length?`\u{1F4E1} ${__t(25)}${v?` <small>\xB7 ${m(v)}</small>`:""} <small class="nopos">\xB7 ${__t(26)}</small>`:`\u{1F686} ${Ft.length} ${x?__t(27):__t(28)}${v?` <small>\xB7 ${m(v)}</small>`:""}${x&&V.okVP?(()=>{let O=Math.max(0,Math.round((Date.now()-V.okVP)/1e3));return` <small class="fresh${O<3?" new":""}">\u25CF ${__t(29)}${Ss(O+" s")}</small>`})():""}`;_&&_._t!==C&&(_.innerHTML=C,_._t=C)}{let v=y("#p");v&&v.classList.toggle("ttf",!f.live||!!Pt)}let $=new Date;if(y("#cdate").textContent=f.live?__t(30):Pt?__t(31)+Pt:Ui?__t(32):__t(33),S.k<0?y("#src").innerHTML=`${__t(34)}${We(t.days[0])}${__t(35)}${We(t.days[t.days.length-1])}${__t(36)}`:x?y("#src").textContent=`${F()?__t(37):__t(38)}${Ss(Nh(Math.max(0,Date.now()/1e3-Math.max(...[...V.vp.values()].map(v=>v.ts),0))))}`:at()&&f.live?y("#src").innerHTML=__t(39):y("#src").innerHTML=__t(40)+(V.url?__t(41):__t(42))+__t(43),f.live){let v=Math.round(f.min),_=y("#tsl");document.activeElement!==_&&(_.value=v<240?v+1440:v)}{let v=bt?String(bt.num||bt.vtid||""):"";v!==He._sk&&(He._sk=v,ge(!0))}return ge(),a-ie>3e3&&(bt||re>=0||Ae||Nt||me)&&(ie=a,Ce()),gt(),!0}let ii=-1,Vn=(()=>{try{return localStorage.getItem("rod_mun")==="1"}catch{return!1}})(),wi=[],Jn=document.createElement("button");Jn.type="button",Jn.id="mbtn",Jn.title=__t(44),Jn.innerHTML=__t(45),Jn.onclick=()=>{Vn=!Vn;try{localStorage.setItem("rod_mun",Vn?"1":"")}catch{}Jn.classList.toggle("on",Vn),o(),lo()},Jn.classList.toggle("on",Vn),document.body.appendChild(Jn);let nn=N.slice().sort((a,l)=>l.pop-a.pop);function xn(a){if(a._a)return a._a;let l=null,u=0;for(let f of a.rings||[]){let x=f[0];if(!x)continue;let S=0,A=0,P=0;for(let R=0,U=x.length;R<U;R+=2){let $=x[R],v=x[R+1],_=x[(R+2)%U],C=x[(R+3)%U],O=$*C-_*v;S+=O,A+=($+_)*O,P+=(v+C)*O}Math.abs(S)>u&&(u=Math.abs(S),l=[A/(3*S),P/(3*S)])}return a._a=l?[(l[0]-h)*c,(l[1]-d)*c]:[a.cx,a.cy]}let is=a=>a>=1e5?1:a>=2e4?2:a>=5e3?3:4,un=[0,7.6,6.7,6,5.4],ss=[0,17,15,13,12],Xs=a=>a.replace(/^(.*), (el|la|les|els|los|las)$/i,"$2 $1").replace(/^(.*), l'$/i,"l'$1");function lo(){let a=s.tilt<.06&&r.tilt<.08;Jn.classList.toggle("show",a);let l=0;if(Vn&&a){let u=[...document.querySelectorAll(".plab, .slab")].filter(S=>S.offsetParent!==null||S.style.display==="block").map(S=>{let A=S.getBoundingClientRect();return[A.left-2,A.top-2,A.right+2,A.bottom+2]}).filter(S=>S[2]>S[0]),f=r.dist,x=f>160?5e4:f>130?2e4:f>105?8e3:f>80?3e3:f>62?800:0;for(let S of nn){let A=is(S.pop);if(S.pop<x)break;let P=xn(S);if(Tn.set(P[0],P[1],H).project(n),Math.abs(Tn.x)>1.02||Math.abs(Tn.y)>1.02)continue;let R=(Tn.x*.5+.5)*innerWidth,U=(-Tn.y*.5+.5)*innerHeight,$=Xs(S.name),v=$.length*un[A]+8,_=ss[A],C=[R-v/2,U-_/2,R+v/2,U+_/2];if(u.some(X=>C[0]<X[2]&&X[0]<C[2]&&C[1]<X[3]&&X[1]<C[3]))continue;u.push(C);let O=wi[l]||(wi[l]=Object.assign(document.createElement("div"),{className:"mlab"}));O.isConnected||document.body.appendChild(O),O._n!==$&&(O.textContent=$,O._n=$),O._t!==A&&(O.className="mlab t"+A,O._t=A),O.style.transform=`translate(${Math.round(R)}px,${Math.round(U)}px) translate(-50%,-50%)`,O.style.display="block",l++}}for(;l<wi.length;l++)wi[l].style.display="none"}let Ue={at:0,hoy:null,ayer:null,err:""},Pp="https://raw.githubusercontent.com/elMonoAmelio/catalunya-survival/stats/";function Xl(){Date.now()-Ue.at<5*6e4||(Ue.at=Date.now(),Promise.all([__t(46),"ayer","hist","dias30"].map(a=>fetch(Pp+a+".json",{cache:"no-store"}).then(l=>l.ok?l.json():null).catch(()=>null)).map((a,l)=>l===3?a.then(u=>u||fetch(Pp+"dias.json",{cache:"no-store"}).then(f=>f.ok?f.json():null).catch(()=>null)):a)).then(([a,l,u,f])=>{Ue.hoy=a,Ue.ayer=l,Ue.hist=u,Ue.dias=f,Ue.tr=null,Ue.err=a?"":__t(47),(Nt||me)&&(p._h="",Ce()),ge(!0)}))}function E_(a){let l={};for(let f of a&&a.snaps||[])for(let x of f.r||[]){let S=/^\d+[A-Z](\d+)/.exec(x);S&&(l[S[1]]=l[S[1]]||[]).push(Math.max(0,f.d&&f.d[x]||0)/60)}let u={};for(let f in l){let x=l[f].sort((S,A)=>S-A);u[f]=Math.round(x[x.length>>1])}return u}function ql(a){if(!Ue.tr){let u=new Map;for(let f of Ue.hist&&Ue.hist.days||[])u.set(f.day,f.tr);for(let f of[Ue.ayer,Ue.hoy])if(f&&f.day&&!u.has(f.day)){let x=E_(f);Object.keys(x).length&&u.set(f.day,x)}Ue.tr=u}if(a==="")return null;let l=[...Ue.tr.values()].map(u=>u[String(a)]).filter(u=>u!=null);return l.length?{n:l.length,late:l.filter(u=>u>=5).length,avg:l.reduce((u,f)=>u+f,0)/l.length}:null}let Lp=a=>new Date(+a.slice(0,4),+a.slice(4,6)-1,+a.slice(6,8)).getDay(),T_=a=>{let l=-1,u=9,f=Lp(a),x=S=>S===0||S===6?S:1;return t.days.forEach((S,A)=>{let P=Lp(S),R=S===a?0:P===f?1:x(P)===x(f)?2:9;R<u&&(u=R,l=A)}),u<9?l:-1},Dp=()=>{let a=new Map;for(let l of Ue.hist&&Ue.hist.days||[])l.cx&&a.set(l.day,new Set(l.cx.map(String)));return a},A_=()=>{let a=(Ue.hist&&Ue.hist.days||[]).find(l=>l.cx);return a?a.day:null};function Np(a){ql("");let l=Dp(),u=0,f=0,x=0,S=0;for(let[A,P]of Ue.tr||[]){let R=T_(A.replace(/-/g,""));if(R<0)continue;let U=Qr(a,R);if(!U)continue;let $=String(U.num);if(l.get(A)&&l.get(A).has($)){S++,u++;continue}let v=P[$];v!=null&&(u++,x+=v,v>=5&&f++)}return{n:u,late:f,sum:x,nc:S}}let Yl=null,Up=a=>{if(!Yl){Yl=new Map;for(let l of st)for(let u of l||[])Yl.set(String(u.num),u.fam)}return Yl.get(String(a))};function Op(a){let l=(Ue.dias&&Ue.dias.days||[]).slice(-30);if(!l.length)return null;let u=new Map;for(let R of l)for(let[U,$]of Object.entries(R.lines||{})){let v=u.get(U)||{n:0,ok:0,s:0,max:0,days:0};v.n+=$.n,v.ok+=$.ok,v.s+=$.avg*$.n,v.max=Math.max(v.max,$.max||0),v.days++,u.set(U,v)}let f=u.get(a);if(!f||f.n<30)return null;let x=[...u.entries()].filter(([R,U])=>Z[R]&&U.n>=30).sort((R,U)=>R[1].ok/R[1].n-U[1].ok/U[1].n),S=x.findIndex(([R])=>R===a),A=Dp(),P=0;for(let R of A.values())for(let U of R)Up(U)===a&&P++;return{pct:f.ok/f.n*100,avg:f.s/f.n,max:f.max,days:f.days,pos:S+1,of:x.length,nc:P,since:A_()}}let C_=a=>a?`${+a.slice(8,10)}/${+a.slice(5,7)}`:"",Zh=a=>a>=60?`${Math.floor(a/60)} h ${String(Math.round(a%60)).padStart(2,"0")} min`:`${Math.round(a)} min`,Es=a=>a>=90?"g":a>=80?"y":a>=65?"w":"b",Ts={g:"#16a34a",y:"#eab308",w:"#ea7a0c",b:"#dc2626"},Fp=a=>a>10?Ts.b:a>5?Ts.w:a>=1?Ts.y:Ts.g,As=a=>(a>=.05?"+":"")+(Math.round(a*10)/10).toString().replace(".",",")+" min";function co(a,l,u){return`<div class="sbars">${a.map(f=>`<div class="sbar" title="${m(f.tip||"")}"><span class="sl">${f.lab}</span><span class="st"><i style="width:${Math.max(2,Math.round(f.w*100))}%;background:${f.c}"></i></span><b class="sv" style="color:${f.c===Ts.y?"var(--svy,#a16207)":f.c===Ts.w?"var(--svw,#c2410c)":f.c}">${f.val}</b></div>`).join("")}</div>`}function R_(a){if(a=(a||[]).filter(G=>G.n>=10),!a||a.length<2){let G=a&&a[0];return G?`${__t(48)}${G.t}: ${Math.round(G.ok/G.n*100)}${__t(49)}${G.n}${__t(50)}`:__t(51)}let l=G=>{let[nt,W]=G.t.split(":").map(Number);return nt*60+W},u=l(a[0]),f=Math.max(u+60,l(a[a.length-1])),x=300,S=112,A=24,P=G=>A+(G-u)*(x-A-8)/(f-u),R=G=>8+(100-G)/100*(S-26),U=G=>G.n?G.ok/G.n*100:100,$=a.map(G=>[P(l(G)),R(U(G)),G]),v=G=>G[0].toFixed(1)+","+G[1].toFixed(1),_=[],C=[];$.forEach((G,nt)=>{nt&&l(G[2])-l($[nt-1][2])>45&&(_.push(C),C=[]),C.push(G)}),_.push(C);let O=$[$.length-1],X=[];for(let G=Math.ceil(u/180)*3;G*60<f;G+=3)G*60>u+20&&X.push(G);let K=Math.round(a.reduce((G,nt)=>G+nt.ok,0)/Math.max(1,a.reduce((G,nt)=>G+nt.n,0))*100);return`<svg class="schart" viewBox="0 0 ${x} ${S}${__t(52)}${[100,75,50,25].map(G=>`<line x1="${A}" x2="${x-4}" y1="${R(G)}" y2="${R(G)}" class="gl"/><text x="2" y="${R(G)+3}" class="ax">${G}%</text>`).join("")}
      <line x1="${A}" x2="${x-4}" y1="${R(K)}" y2="${R(K)}" class="avg"/>
      ${_.filter(G=>G.length).map(G=>`<polygon points="${v([G[0][0],R(0)])} ${G.map(v).join(" ")} ${v([G[G.length-1][0],R(0)])}" class="ar"/><polyline points="${G.map(v).join(" ")}" class="ln"/>`).join("")}
      ${$.map(([G,nt,W])=>`<circle cx="${G.toFixed(1)}" cy="${nt.toFixed(1)}" r="6" class="hit"><title>${W.t} \xB7 ${Math.round(U(W))}${__t(53)}${W.n}${__t(54)}${W.d5}${__t(55)}${As(W.avg)}${W.nd?` \xB7 ${W.nd}${__t(56)}`:""}</title></circle>`).join("")}
      <circle cx="${O[0].toFixed(1)}" cy="${O[1].toFixed(1)}" r="3.5" class="pt"/><text x="${Math.min(O[0],x-30).toFixed(1)}" y="${(O[1]-7).toFixed(1)}" class="lv" text-anchor="middle">${Math.round(U(O[2]))}%</text>
      ${X.map(G=>`<text x="${P(G*60).toFixed(1)}" y="${S-4}" class="ax" text-anchor="middle">${String(G).padStart(2,"0")}h</text>`).join("")}
      <text x="${A}" y="${S-4}" class="ax">${a[0].t}</text></svg><small class="snote">${__t(57)} (${K}%)</small>`}function I_(){Xl();let a=Qt(),l=Ft.filter(P=>P.real&&lt()&&a.live),u=l.filter(P=>V.delays.has(P.v.tid)),f=u.length,x=l.length-f,S=`<div class="tc sts" style="--c:#1d2330"><button class="x" data-cx>\xD7</button><h3 class="ilt sm">${__t(58)}</h3>`;if(f){let P=u.filter(nt=>nt.dl<3).length,R=u.filter(nt=>nt.dl>=5).length,U=u.filter(nt=>nt.stop==="via").length,$=Math.round(P/f*100);S+=`${__t(59)}${f}${__t(60)}${x?` \xB7 ${x}${__t(65)}`:""}</small><div class="kpis">
        <div class="kpi ${Es($)}"><b>${$}${__t(61)}${Es(100-R/f*100*2)}" title="${Math.round(R/f*100)}${__t(62)}${R}${__t(63)}${U===0?"g":U<=2?"w":"b"}"><b>${U}${__t(64)}`;let v=new Map;u.forEach(nt=>{let W=nt.fam,Vt=v.get(W)||{n:0,ok:0,sum:0};Vt.n++,Vt.ok+=nt.dl<3,Vt.sum+=Math.max(0,nt.dl),v.set(W,Vt)});let _=[...v].filter(([nt])=>Z[nt]).sort((nt,W)=>nt[1].ok/nt[1].n-W[1].ok/W[1].n||W[1].sum/W[1].n-nt[1].sum/nt[1].n),C=_.filter(([,nt])=>nt.ok<nt.n),O=_.filter(([,nt])=>nt.ok===nt.n);S+=`${__t(66)}`+(C.length?"":__t(67))+co(C.map(([nt,W])=>({lab:Mn(nt),w:W.ok/W.n,c:Ts[Es(W.ok/W.n*100)],val:`${Math.round(W.ok/W.n*100)}% <small>${As(W.sum/W.n)}</small>`,tip:`${nt}: ${W.ok}${__t(68)}${W.n}${__t(69)}${As(W.sum/W.n)}`})))+(O.length?`${__t(70)}${O.map(([nt])=>Mn(nt)).join(" ")}</p>`:"");let X=new Map;u.forEach(nt=>{if(!nt.tr||nt.v.next==null||nt.v.next<0||nt.v.pre)return;let W=nt.tr.pat.stops[nt.v.next],Vt=X.get(W)||{n:0,sum:0};Vt.n++,Vt.sum+=Math.max(0,nt.dl),X.set(W,Vt)});let K=[...X].filter(([,nt])=>nt.sum/nt.n>=1).sort((nt,W)=>W[1].sum/W[1].n-nt[1].sum/nt[1].n).slice(0,8),G=K.length?K[0][1].sum/K[0][1].n:1;S+=`${__t(71)}`+(K.length?co(K.map(([nt,W])=>({lab:`<span class="sn" data-gs="${nt}">${m(E[nt].n)}</span>`,w:W.sum/W.n/G,c:Fp(W.sum/W.n),val:`${As(W.sum/W.n)} <small>${W.n} ${W.n===1?"tren":__t(72)}</small>`,tip:`${E[nt].n}: ${W.n}${__t(73)}${As(W.sum/W.n)}${__t(74)}`}))):__t(75))}else S+=`${__t(76)}`;let A=Ue.hoy;S+=`<button type="button" class="hmore" data-cols>${gn.on?__t(77):__t(78)}</button>`;{bo("");let P=[...zi.m].filter(([R,U])=>Z[R]&&U[0]>=3).map(([R,U])=>[R,U[1]/U[0]]).sort((R,U)=>R[1]-U[1]);P.length&&!lt()?S+=`<h4>${__t(79)}</h4><small class="snote">${__t(80)}</small>`:P.length&&(S+=`${__t(81)}`+co(P.slice(0,8).map(([R,U])=>({lab:Mn(R),w:U,c:Ts[Es(U*100)],val:`${Math.round(U*100)}%`,tip:`${R}: ${Math.round(U*100)}${__t(82)}`}))))}{let P=(C,O)=>{let X=(C&&C.snaps||[]).filter(nt=>nt.n&&(!O||nt.t<=O)),K=X.reduce((nt,W)=>nt+W.n,0),G=X.reduce((nt,W)=>nt+W.ok,0);return K?G/K*100:null},R=(Ue.hoy&&Ue.hoy.snaps||[]).filter(C=>C.n).map(C=>C.t).pop(),U=P(Ue.hoy),$=P(Ue.ayer,R),v=U!=null?Math.round(U):null,_=$!=null?Math.round($):null;U!=null&&(S+=`${__t(83)}${Es(U)}">${Math.round(U)}${__t(84)}${$!=null?`<span>${R?__t(85):__t(86)} <b class="${Es($)}">${_} %</b></span><span>${v>_?__t(87):v<_?__t(88):__t(89)}</span>`:""}</div>`)}if(S+=`${__t(90)}`,A&&A.snaps){S+=R_(A.snaps);let P=Object.entries(A.st||{}).map(([$,v])=>[zt.get($),v]).filter(([$,v])=>$!=null&&v.n>=3).map(([$,v])=>[$,v.sum/v.n/60,v]).filter($=>$[1]>=1).sort(($,v)=>v[1]-$[1]).slice(0,8);if(P.length){let $=P[0][1];S+=`${__t(91)}`+co(P.map(([v,_,C])=>({lab:`<span class="sn" data-gs="${v}">${m(E[v].n)}</span>`,w:_/$,c:Fp(_),val:`${As(_)}${__t(92)}${Math.round(C.max/60)}</small>`,tip:`${E[v].n}: ${C.n}${__t(93)}${C.d5}${__t(94)}${Math.round(C.max/60)} min`})))}let R=Object.entries(A.lines||{}).filter(([$,v])=>Z[$]&&v.n>=3).sort(($,v)=>$[1].ok/$[1].n-v[1].ok/v[1].n);R.length&&(S+=`${__t(95)}`+co(R.map(([$,v])=>({lab:Mn($),w:v.ok/v.n,c:Ts[Es(v.ok/v.n*100)],val:`${Math.round(v.ok/v.n*100)}% <small>${As(v.sum/v.n/60)}</small>`,tip:`${$}${__t(96)}${Math.round(v.ok/v.n*100)}${__t(97)}${Math.round(v.max/60)} min`}))));let U=A.upd?(Date.now()-Date.parse(A.upd))/6e4:0;S+=`<small class="snote">${U>40?`${__t(99)}${Ss(U<90?Math.round(U)+" min":U<2160?Math.round(U/60)+" h":Math.round(U/1440)+(window.__L==="en"?" days":window.__L==="ca"?" dies":" d\xEDas"))}${__t(100)}`:""}${__t(98)}${m((A.upd||"").slice(11,16))} \xB7 ${(A.note||"").includes("Solo cuentan")?__t(101):__t(102)}</small>`}else S+=`<p class="snote">${Ue.at?__t(103):__t(104)}</p>`;return S+"</div>"}function P_(a){let l=Qt(),u=Ft.filter(_=>(_.fam||_.tr&&_.tr.fam)===a),f=u.filter(_=>_.real),x=u.length,S=u.filter(_=>_.dl>=5).length,A=u.filter(_=>_.dl<3).length,P=u.filter(_=>_.stop==="via"||_.broke).length,R=V.alerts.filter(_=>_.fams.has(a)),U=_=>{let C=_.tr;if(!C)return"";let O=_.v;if(_.real&&O){let K=O.next>=0?E[C.pat.stops[O.next]].n:"";return O.atStop>=0?`${__t(105)}${E[C.pat.stops[O.atStop]].n}`:K?`${__t(106)}${K}`:""}let X=_.p;return X&&X.next!=null&&X.next>=0?`${__t(106)}${E[C.pat.stops[X.next]].n}`:""},$=u.slice().sort((_,C)=>C.dl-_.dl).slice(0,40).map(_=>{let C=_.tr;return`<li class="go${po({num:C?C.num:_.v.num,tid:C?C.tid:_.v.tid})?" sel":""}" data-gt="${m(C?C.num:_.v.num)}|${m(_.real?_.v.tid:C?C.tid:"")}"><b>${m(C?C.num:_.v.num)}</b><span>${C?Ni(E[C.pat.stops[C.pat.stops.length-1]].n,a):""} <small>${m(U(_))}</small></span>${_.dl>=1?`<em class="dl ${$i(_.dl)}">+${Math.round(_.dl)}</em>`:__t(107)}</li>`}).join(""),v=bo(a);return`<div class="tc sts" style="--c:${Z[a]||"#1d2330"}"><button class="x" data-cx>\xD7</button><h3 class="ilt sm">${Mn(a)} ${__t(108)}</h3><div class="seg2 iseg lseg">${[["now",__t(109)],["30",__t(110)],["trips",__t(111)]].map(([_,C])=>`<button type="button" data-lseg="${_}" class="${Zl.v===_?"on":""}">${C}</button>`).join("")}</div>${Zl.v!=="now"?D_(a,Zl.v):`<small>${l.live?`${__t(115)}${x}${__t(116)}${f.length<x?` (${f.length}${__t(117)}`:""}`:`${__t(118)}${rt(l.min)}`}</small>
      <div class="kpis"><div class="kpi ${x?Es(A/x*100):""}"><b>${x?Math.round(A/x*100)+"%":"\u2014"}${__t(112)}${S?S/Math.max(1,x)>.2?"b":"w":"g"}"><b>${S}${__t(113)}${P?"b":"g"}"><b>${P}${__t(114)}${R.length?N_(R):__t(119)}${v<.7?`${__t(120)}${Math.round(v*100)}${__t(121)}`:""}
      <small style="margin-top:6px">${__t(122)}</small><ol class="${Jl.v?"":"lshort"}">${$||__t(123)}</ol>${u.length>6?`<button type="button" class="hmore" data-lmore>${Jl.v?__t(124):`\u25BE ${__t(125)} ${Math.min(40,u.length)} ${__t(72)}`}</button>`:""}
      <div class="rtb"><button type="button" data-share>\u{1F4E4} Compartir estado</button></div>`}</div>`}let Jl={v:!1},Zl={v:"now"};function L_(a){let l=Lm(a,30);if(!l.length)return`<h4>${__t(111)}</h4><p class="snote">${__t(126)}</p>`;let u=l.filter(P=>P.dl!=null),f=u.filter(P=>P.dl>=5).length,x=u.reduce((P,R)=>P+R.dl,0),S=P=>{let R=zt.get(P);return R!=null?E[R].n.replace(/^Barcelona[ -]+(?=\S)/,""):""},A=l.slice().sort((P,R)=>R.t0-P.t0).slice(0,5).map(P=>`<li><b>${+P.d.slice(6,8)}/${+P.d.slice(4,6)}</b><span>${P.ad!=null?rt(P.ad)+" \xB7 ":""}${m(S(P.a))}${P.a?" \u2192 ":""}${m(S(P.b))}<small>${P.dl==null?__t(127):P.dl>=1?`${__t(128)} <b>+${P.dl} min</b>`:__t(129)} \xB7 tren ${m(P.num)}</small></span><button type="button" class="tripx" data-tripx="${m(P.k)}" title="${__t(130)}" aria-label="${__t(130)}">\u2715</button></li>`).join("");return`<h4>${__t(111)} \xB7 ${l.length}</h4>
      <div class="kpis"><div class="kpi nx"><b>${l.length}</b><span>${l.length===1?__t(131):__t(132)}<br>${__t(133)}</span></div><div class="kpi ${u.length?f/u.length>=.5?"b":f/u.length>=.25?"w":"g":"nx"}"><b>${f}</b><span>${__t(134)}<br>(5 min ${__t(135)})</span></div><div class="kpi ${x>=60?"b":x>=20?"w":"nx"}"><b>${x>=60?`${Math.floor(x/60)} h ${String(Math.round(x%60)).padStart(2,"0")}`:`${Math.round(x)} min`}</b><span>${__t(136)}<br>${__t(137)}</span></div></div>
      <ol class="l30f">${A}</ol>`}function D_(a,l){let u=Op(a),f=mi.filter(v=>v.fam===a);if(!u&&l!=="trips")return`<h4>${__t(138)}</h4><p class="snote">${Ue.at?__t(139):__t(104)}</p>`;let x=u.since&&u.since>new Date(Date.now()-29*864e5).toISOString().slice(0,10)?`${__t(140)} ${C_(u.since)}`:`${__t(133)}`,S=Math.min(30,u.days),A=`${__t(141)} ${S} ${__t(142)}`,P=u.of>1?(u.pos<=u.of/2?`${Mn(a)} ${__t(143)} <b>${u.pos}.\xAA ${__t(144)}</b> ${__t(145)} ${u.of}`:`${Mn(a)} ${__t(143)} <b>${u.of-u.pos+1}.\xAA ${__t(146)}</b> ${__t(145)} ${u.of}`)+" \xB7 ":"",R=f.map(v=>{let _=Np(v),C=zt.get(v.sid),O=v.dest&&zt.get(v.dest);return`<li><b>${m(v.t)}</b><span>${m(C!=null?E[C].n:"")}${O!=null?" \u2192 "+m(E[O].n):""}<small>${_.n?`${__t(147)} <b>${_.late} ${__t(145)} ${_.n} ${__t(142)}</b>${_.nc?` \xB7 <b>${_.nc} ${_.nc===1?__t(148):__t(149)}</b>`:""} \xB7 ${__t(150)} \u2248 <b>${Zh(_.sum)}</b>`:__t(151)}</small></span></li>`}).join(""),U=`<div class="rtb"><button type="button" data-share30>\u{1F4E4} ${__t(152)}</button></div>`,$=`<small class="snote">${__t(153)}</small>`;return l==="trips"?`${L_(a)}
      <h4>${__t(154)}</h4>${f.length?`<ol class="l30f">${R}</ol>`:`<p class="snote">${__t(155)}</p>`}${u?U:""}${$}`:`<h4>${A}</h4>
      <div class="kpis"><div class="kpi ${Es(u.pct)}"><b>${Math.round(u.pct)}%</b><span>${__t(129)}<br>(\u22123 min)</span></div><div class="kpi ${u.avg>=4?"b":u.avg>=2.5?"w":u.avg>=1.5?"y":"g"}"><b>${As(u.avg).replace(" min","")}</b><span>${__t(156)}<br>${__t(157)}</span></div>${u.since?`<div class="kpi ${u.nc?u.nc>=10?"b":"w":"g"}"><b>${u.nc}</b><span>${u.nc===1?__t(158):__t(159)}<br>${x}</span></div>`:`<div class="kpi nx"><b>\u2014</b><span>${__t(160)}<br>${__t(161)}</span></div>`}</div>
      <p class="snote">${P}${__t(162)} +${u.max} min \xB7 ${u.days} ${__t(163)}</p>${U}${$}`}let N_=a=>`<div class="al">${a.slice(0,3).map(l=>`<p>\u26A0\uFE0F ${xo(l)} ${m(l.txt)} <small>${vo(l)}</small></p>`).join("")}</div>`,gn={on:!1,mesh:null};function Bp(){let a=Ue.hoy,l=[];if(a&&a.st)for(let[u,f]of Object.entries(a.st)){let x=zt.get(u);x!=null&&f.n>=2&&l.push([x,f.sum/f.n/60,f.n])}if(!l.length){let u=new Map;Ft.forEach(f=>{if(!f.real||!f.tr||f.v.next==null||f.v.next<0||f.v.pre||!V.delays.has(f.v.tid))return;let x=f.tr.pat.stops[f.v.next],S=u.get(x)||[0,0];S[0]+=Math.max(0,f.dl),S[1]++,u.set(x,S)}),u.forEach((f,x)=>l.push([x,f[0]/f[1],f[1]]))}return l}let kp=()=>Math.min(1,Math.max(.22,r.dist/110));function U_(){if(!gn.mesh||!gn.d)return;let a=kp();if(Math.abs(a-gn.r)<.04)return;gn.r=a;let l=new Ze;gn.d.forEach(([u,f],x)=>{l.makeScale(a,a,.3+Math.min(f,40)*.3),l.setPosition(E[u].w[0],E[u].w[1],H),gn.mesh.setMatrixAt(x,l)}),gn.mesh.instanceMatrix.needsUpdate=!0,o()}function O_(){if(gn.mesh&&(e.remove(gn.mesh),gn.mesh.geometry.dispose(),gn.mesh.material.dispose(),gn.mesh=null),!gn.on){o();return}let a=Bp();if(!a.length){Be(__t(164)),gn.on=!1;return}let l=new sl(.32,.32,1,16);l.rotateX(Math.PI/2),l.translate(0,0,.5);let u=new Ur({fog:!1}),f=new tl(l,u,a.length),x=new Ze,S=new ye;gn.d=a,gn.r=kp(),a.forEach(([A,P],R)=>{let U=.3+Math.min(P,40)*.3;x.makeScale(gn.r,gn.r,U),x.setPosition(E[A].w[0],E[A].w[1],H),f.setMatrixAt(R,x),S.set(P>10?"#dc2626":P>5?"#ea7a0c":P>=1?"#eab308":"#16a34a"),f.setColorAt(R,S)}),f.renderOrder=25,f.frustumCulled=!1,e.add(f),gn.mesh=f,s.tilt<.5&&(s.tilt=.85),o()}let Kr=document.createElement("button");Kr.type="button",Kr.id="sbtn",Kr.title=__t(165),Kr.innerHTML=__t(166),Kr.onclick=()=>{Nt=!Nt,Nt&&(Ut=Ae=!1,Ue.at=0),p._h="",Ce(),o()},document.body.appendChild(Kr);function F_(){r.dist<45!=ii<45&&(ii=r.dist,zn()),U_(),B_(),lo()}let Cs=[],Tn=new j;function B_(){let a=0;if(gn.on){let u=Bp().sort((x,S)=>S[1]-x[1]),f=[];for(let[x,S]of u){if(a>=30)break;if(Tn.set(E[x].w[0],E[x].w[1],H).project(n),Tn.z>1||Math.abs(Tn.x)>1||Math.abs(Tn.y)>1)continue;let A=(Tn.x*.5+.5)*innerWidth,P=(-Tn.y*.5+.5)*innerHeight;if(f.some(([U,$])=>Math.abs(U-A)<90&&Math.abs($-P)<18))continue;f.push([A,P]);let R=Cs[a]||(Cs[a]=Object.assign(document.createElement("div"),{className:"slab"}));R.isConnected||document.body.appendChild(R),R.textContent=E[x].n+" +"+Math.round(S)+"\u2032",R.dataset.i=x,R.style.display="block",R.style.transform=`translate(${Math.round(A+8)}px,${Math.round(P-8)}px)`,a++}for(;a<Cs.length;a++)Cs[a].style.display="none";return}if(r.dist<30){let u=[];for(let f=0;f<ze;f++)_r[f]<4||(Tn.set(E[f].w[0],E[f].w[1],H).project(n),!(Tn.z>1||Math.abs(Tn.x)>1.05||Math.abs(Tn.y)>1.05)&&u.push([f,(Tn.x*.5+.5)*innerWidth,(-Tn.y*.5+.5)*innerHeight]));if(u.length<=70)for(let[f,x,S]of u){let A=Cs[a]||(Cs[a]=Object.assign(document.createElement("div"),{className:"slab"}));A.isConnected||document.body.appendChild(A),A.textContent=E[f].n,A.dataset.i=f,A.style.display="block",A.style.transform=`translate(${Math.round(x+8)}px,${Math.round(S-7)}px)`,a++}}for(;a<Cs.length;a++)Cs[a].style.display="none"}function jl(a){return Tn.set(a[0],a[1],H).project(n),[(Tn.x*.5+.5)*innerWidth,(-Tn.y*.5+.5)*innerHeight,Tn.z]}function jh(a,l,u,f){let x=null,S=u*u;for(let A of Ft){let[P,R,U]=jl(A.p.w);if(U>1)continue;let $=(P-a)**2+(R-l)**2;$<S&&(S=$,x={a:A})}if(x)return x;S=f*f;for(let A=0;A<ze;A++){if(!_r[A])continue;let[P,R,U]=jl(E[A].w);if(U>1)continue;let $=(P-a)**2+(R-l)**2;$<S&&(S=$,x={s:A})}return x}let qs=!1;window.__rodHide=()=>{qs=!0},document.addEventListener("click",a=>{qs&&!a.target.closest("#mcs, canvas")&&(qs=!1)},!0),window.__rodTap=(a,l)=>{let u=jh(a,l,20,0);if(u&&u.a)return qs=!1,Ie.st=-1,Ut=!1,Ae=!1,Nt=!1,bt=u.a.tr||{vtid:u.a.v.tid},re=-1,de=null,zn(),Ce(),Le=0,o(),!0;let f=null,x=1e9;for(let A of Cs){if(A.style.display==="none")continue;let P=A.getBoundingClientRect();if(a>=P.left-4&&a<=P.right+4&&l>=P.top-4&&l<=P.bottom+4){let R=Math.abs(l-(P.top+P.bottom)/2)*4+(a-P.left);R<x&&(x=R,f=A)}}if(f)return window.__rodPickStation(+f.dataset.i),!0;let S=jh(a,l,24,18);return S&&(S.a||S.s!=null)&&(qs=!1),S&&(S.a||S.s!=null)&&(Ie.st=-1),S&&S.a?(Ut=!1,Ae=!1,Nt=!1,bt=S.a.tr||{vtid:S.a.v.tid},re=-1,de=null,zn(),Ce(),Le=0,o(),!0):S&&S.s!=null?(Ut=!1,Ae=!1,Nt=!1,re=S.s,bt=null,de=null,zn(),Ce(),o(),!0):!1},window.__rodHover=(a,l)=>{let u=jh(a,l,14,10);if(u&&u.a){let f=u.a,x=f.tr?E[f.tr.pat.stops[f.tr.pat.stops.length-1]].n:"";return`<b><span style="color:${f.c}">\u25A0</span> ${m(f.fam||f.tr&&f.tr.fam||"?")}${__t(167)}${m(f.tr?f.tr.num:f.v.num)}</b><small>${x?__t(106)+m(x):""}${f.real?(f.dl>=1?` \xB7 <b style="color:#c2410c">+${Math.round(f.dl)} min</b>`:__t(168))+__t(169):__t(170)}</small>`}return u&&u.s!=null?`<b>${m(E[u.s].n)}</b><small>${[...E[u.s].fams].sort(B).join(" \xB7 ")}</small>`:null},window.__rodPickStation=a=>{Ie.st=-1,qs=!1,Ut=Ae=Nt=!1,bt=null,de=null,re=a,zn(),p._h="",Ce(),o()};{let a=y("#rc"),l=()=>{let u=a.getBoundingClientRect().top;document.documentElement.style.setProperty("--mcsmax",Math.max(160,u-64-10)+"px")};try{new ResizeObserver(l).observe(a)}catch{}addEventListener("resize",l),setTimeout(l,300)}if("serviceWorker"in navigator&&location.protocol==="https:"){let a=!1,l=!!navigator.serviceWorker.controller;navigator.serviceWorker.addEventListener("controllerchange",()=>{if(!l||a)return;let u=((y("#ver")||{}).textContent||"").match(/\d+\.\d+/);fetch("./sw.js",{cache:"no-store"}).then(f=>f.text()).then(f=>{let x=(f.match(/VERSION = 'cs-(\d+\.\d+)'/)||[])[1];x&&u&&x!==u[0]&&!a&&(a=!0,location.reload())}).catch(()=>{})}),navigator.serviceWorker.register("./sw.js").then(u=>{u.update().catch(()=>{}),document.addEventListener("visibilitychange",()=>{document.hidden||u.update().catch(()=>{})})}).catch(()=>{})}setTimeout(()=>{try{Xl()}catch{}},2500),setInterval(()=>{try{Ue.at=0,Xl()}catch{}},15*6e4);let pi={mode:(()=>{try{return localStorage.getItem("rod_theme")||"auto"}catch{return"auto"}})()},uo=matchMedia("(prefers-color-scheme: dark)");function Kl(){let a=pi.mode==="dark"||pi.mode==="auto"&&uo.matches;document.documentElement.classList.toggle("dark",a);for(let u=0;u<ze;u++)fi.set(a?[.06,.08,.11]:[1,1,1],u*3);Je.attributes.fill.needsUpdate=!0,so.uniforms.border.value.set(a?"#e7ebf3":"#1d2330"),window.__mapTheme&&window.__mapTheme(a),yr.textContent=pi.mode==="auto"?a?"\u{1F319}":"\u2600\uFE0F":pi.mode==="dark"?"\u{1F319}":"\u2600\uFE0F",yr.title=__t(171)+{auto:__t(172),dark:__t(173),light:"desactivado"}[pi.mode];let l=document.querySelector("meta[name=theme-color]");l&&(l.content=a?"#0d1119":"#eef1f5"),o()}let yr=document.createElement("button");yr.type="button",yr.id="tbtn",yr.onclick=()=>{pi.mode=pi.mode==="auto"?uo.matches?"light":"dark":pi.mode==="dark"?"light":"dark",pi.mode==="dark"===uo.matches&&(pi.mode="auto");try{localStorage.setItem("rod_theme",pi.mode)}catch{}Kl(),Be(yr.title)},document.body.appendChild(yr);{let a=document.createElement("a");a.id="wabtn",a.href="https://www.whatsapp.com/channel/0029Vav4hGTId7nPenKMuo2C",a.target="_blank",a.rel="noopener",a.title=__t(174),a.innerHTML=__t(175),document.body.appendChild(a)}uo.addEventListener&&uo.addEventListener("change",Kl),Kl(),window.__rodTick=He,window.__rodFrame=F_,window.__rodResize=()=>{ue.resolution.set(innerWidth,innerHeight),xe.resolution.set(innerWidth,innerHeight)},window.__rodResize();let Di={st:-1,f:new Set},$p=a=>{let l=[...E[a].fams].sort(B);return`<div class="sfc">${l.length>1?`<button type="button" data-sf="" class="${Di.f.size?"":"on"}${__t(176)}`:""}${l.map(u=>`<button type="button" data-sf="${m(u)}" class="ln ${Di.f.size&&!Di.f.has(u)?"off":""}${Lt.has(u)?"":" hid"}" style="--c:${Z[u]}">${m(u)}</button>`).join("")}</div>${l.some(u=>!Lt.has(u))?__t(177):""}`},k_=a=>{let l=(a||"#6b7385").replace("#",""),u=parseInt(l.slice(0,2),16),f=parseInt(l.slice(2,4),16),x=parseInt(l.slice(4,6),16);return(.299*u+.587*f+.114*x)/255>.62?"#1d2330":"#fff"},Ni=(a,l)=>{let u=Z[l]||"#6b7385";return`<span class="dst" style="background:${u};color:${k_(u)}" title="${m(l||"")}">${m(a)}</span>`},Ql=a=>{let l=E[a]&&E[a].id;return Xe.st.includes(l)?"\u{1F3E0} ":$e.st.includes(l)?"\u{1F4BC} ":""},$i=a=>a>10?"d-hi":a>5?"d-md":"d-lo",$_=/aver[ií]|incid[eè]ncia t[eè]cnica|incidencia t[eé]cnica|problema t[eè]cnic|t[eè]cnic[oa] del propi/i,ho={ref:null,m:new Map};function Kh(a){if(ho.ref!==V.alerts){ho.ref=V.alerts,ho.m=new Map;for(let l of V.alerts){if(l.src!=="Rodalies")continue;let u=l.txt.match(/(?:a causa d[e']|per causa d[e']|debido a|degut a|due to|because of|caused by)\s+([^.]{4,140})/i);for(let f of(l.es||l.txt).matchAll(/\b[Tt]ren\s+(\d{4,6})\b/g))ho.m.set(f[1],{why:u?u[1].trim().replace(/\s+/g," "):"",txt:l.txt,when:l.when,cx:/no circula|no circular[àa]|suprimi|anul[·.]?la|cancel[·.]?la|anulad|cancelad/i.test(l.es||l.txt)})}}return ho.m.get(String(a))||null}let fo={ref:null,m:new Map};function zp(a){let l=String(a.tr?a.tr.num:a.v&&a.v.num||"");if(!l)return null;if(fo.ref!==V.alerts){fo.ref=V.alerts,fo.m=new Map;for(let f of V.alerts)if(f.src==="Rodalies"&&$_.test(f.es||f.txt))for(let x of(f.es||f.txt).matchAll(/\b(\d{4,6})\b/g))fo.m.set(x[1],f)}let u=fo.m.get(l);return u?{why:"aviso",txt:u.txt}:a.real&&a.stop==="via"&&a.v.still>=300?{why:"via",min:Math.round(a.v.still/60)}:null}let po=a=>{try{let l=bt;return l?l.num!=null&&String(l.num)===String(a.num)||a.tid&&(l.tid===a.tid||l.vtid===a.tid):!1}catch{return!1}},Vp=(a,l)=>{let u=I(a,l.min-1,l.min+240).sort((f,x)=>f.est-x.est).slice(0,6);return u.length?`${__t(178)}${u.map(f=>`<li><b>${rt(f.est)}</b>${Mn(f.fam)}<span>${Ni(f.dest,f.fam)}</span><i class="via">bus</i></li>`).join("")}</ol>`:""},mi=(()=>{try{return JSON.parse(localStorage.getItem("rod_fav")||"[]")}catch{return[]}})(),Hp=()=>{try{localStorage.setItem("rod_fav",JSON.stringify(mi))}catch{}},Gp=(a,l)=>{if(a.num===String(l.num))return!0;let u=t.days.indexOf(Qt().ymd),f=u>=0?Qr(a,u):null;return!!f&&String(f.num)===String(l.num)},Wp=a=>{let l=a.pat.stops.slice(0,-1),u=[...Xe.st,...$e.st];return l.find(f=>u.includes(E[f].id))??l.find(f=>Tt.st.includes(E[f].id))??a.pat.stops[0]},Xp=a=>!!a&&mi.some(l=>Gp(l,a)),ve=(()=>{try{let a=JSON.parse(localStorage.getItem("rod_alarm")||"null");return a&&Date.now()-a.at<4*36e5?a:null}catch{return null}})(),Rs=()=>{try{localStorage.setItem("rod_alarm",JSON.stringify(ve))}catch{}},tc=(a,l)=>!!(ve&&a&&ve.num===String(a.num)&&ve.sid===E[a.pat.stops[l]].id);function ec(a,l){try{window.__vib?window.__vib():navigator.vibrate&&navigator.vibrate([400,150,400,150,600])}catch{}Be(a+" \xB7 "+l),document.hidden&&"Notification"in window&&Notification.permission==="granted"&&(navigator.serviceWorker&&navigator.serviceWorker.getRegistration?navigator.serviceWorker.getRegistration():Promise.resolve(null)).then(u=>u?u.showNotification(a,{body:l,tag:"alarm",requireInteraction:!0,vibrate:[400,150,400,150,600],icon:"icons/icon-192.png"}):new Notification(a,{body:l})).catch(()=>{})}function z_(){if(!ve||ve.done)return;let a=Qt();if(!a.live)return;let l=t.days.indexOf(a.ymd),u=(st[l]||[]).find(R=>String(R.num)===ve.num)||(st[l-1]||[]).find(R=>String(R.num)===ve.num);if(!u)return;let f=u.pat.stops.findIndex(R=>E[R].id===ve.sid);if(f<0)return;let x=kt(u),S=typeof x=="number"?Math.max(0,x/60):0,A=u.day===l-1?1440:0,P=u.t0+u.pat.t[2*f]+S-A;if(P-a.min<-3){ve.done=!0,Rs();return}if(window.__schedAt&&P-2-a.min>.1&&(ve.sch==null||Math.abs(ve.sch-P)>=.5)&&(ve.sch=P,ve.nat=Date.now()+(P-2-a.min)*6e4,Rs(),window.__schedAt(7701,`${__t(179)}${E[u.pat.stops[f]].n}`,__t(180)+` (${rt(P)})`+(R=>R?` \xB7 ${__t(181)} ${R.fam} ${__t(182)} ${rt(R.est)}${R.plat?__t(183)+R.plat:""}`:"")(lc.get(ve.sid)),Date.now()+(P-2-a.min)*6e4)),P-a.min<=2){ve.done=!0,Rs();let R=lc.get(ve.sid),U=R?` \xB7 ${R.lost?__t(184)+" \xB7 "+__t(185):__t(181)} ${R.fam} ${__t(182)} ${rt(R.est)}${R.plat?__t(183)+R.plat:""}`:"",$=Math.round(P-a.min),_=($>=1?`${__t(187)} ${$}${__t(186)}${rt(P)}) \xB7 ${__t(188)}`:`${__t(189)} (${rt(P)}) \xB7 ${__t(188)}`)+U;window.__schedAt&&ve.nat&&Date.now()>=ve.nat-2e4?document.hidden||ec(`${__t(179)}${E[u.pat.stops[f]].n}`,_):(window.__schedOff&&window.__schedOff(7701),ec(`${__t(179)}${E[u.pat.stops[f]].n}`,_))}}function Qr(a,l){let u=+a.t.slice(0,2)*60+ +a.t.slice(3,5),f=st[l]||[],x=(P,R)=>P.t0+P.pat.t[2*R+1],S=null,A=11;for(let P of f){let R=P.pat.stops.findIndex($=>E[$].id===a.sid);if(R<0||R===P.pat.stops.length-1)continue;let U=Math.abs(x(P,R)-u)+(String(P.num)===a.num?-5:0)+(P.fam===a.fam?0:20)+(a.dest&&E[P.pat.stops[P.pat.stops.length-1]].id!==a.dest?3:0);U<A&&(A=U,S=P)}return S}let nc=new Set;function V_(){if(!mi.length)return;let a=Qt();if(!a.live)return;let l=t.days.indexOf(a.ymd);for(let u of mi){let f=Qr(u,l);if(!f)continue;let x=f.pat.stops.findIndex($=>E[$].id===u.sid);if(x<0)continue;let S=f.t0+f.pat.t[2*x+1],A=kt(f),P=typeof A=="number"?A/60:0,R=S-a.min;if(R<-2||R>60)continue;let U=a.ymd+u.num+(A==="X"?"X":P>=10?10:P>=5?5:0);nc.has(U)||(A==="X"||P>=5?(nc.add(U),ec(`${__t(190)}${rt(S)} ${A==="X"?__t(191):`${__t(192)}${Math.round(P)} min`}`,`${f.fam} ${f.num}${__t(193)}${E[f.pat.stops[x]].n}${A==="X"?"":`${__t(194)}${rt(S+P)}`}`)):R<=20&&!nc.has(a.ymd+u.num+"ok")&&V.vp.has(f.tid)&&(nc.add(a.ymd+u.num+"ok"),Be(`${__t(190)}${rt(S)}${__t(195)}`)))}}setInterval(()=>{try{z_(),V_()}catch{}},15e3);let Mn=a=>`<span class="ln" style="--c:${Z[a]}">${m(a)}</span>`;{let a=u=>{let f=/^#?([0-9a-f]{6})$/i.exec(u||"");return f?[0,2,4].map(x=>{let S=parseInt(f[1].slice(x,x+2),16)/255;return S<=.03928?S/12.92:Math.pow((S+.055)/1.055,2.4)}).reduce((x,S,A)=>x+S*[.2126,.7152,.0722][A],0):0},l=[...new Set(Object.values(Z))].filter(u=>a(u)>.3).map(u=>`.ln[style*="--c:${u}"],[data-f][style*="--c:${u}"].on,[data-f][style*="--c:${u}"]:not(.off){color:#14203a!important}`).join("");if(l){let u=document.createElement("style");u.textContent=l,document.head.appendChild(u)}}function qp(a,l){return l?a==="X"?__t(197):a>=60?`<span class="st late ${$i(a/60)}${__t(198)}${Math.round(a/60)} min</span>`:__t(199):`<span class="st sch">${__t(196)}</span>`}function Qh(){if(!p.classList.contains("peek")||window.__mapHidden||!p.getClientRects().length)return;let a=p.querySelector(".tc");if(!a)return;let l=a.querySelector(".st")||a.querySelector("p"),u=p.getBoundingClientRect().top-p.scrollTop,f=l?l.getBoundingClientRect().bottom-u+3:150;if(l){let x=l.nextElementSibling||l.parentElement!==a&&l.parentElement.nextElementSibling;x&&(f=Math.min(f,x.getBoundingClientRect().top-u-1))}p.style.setProperty("--peekh",Math.round(Math.min(280,Math.max(110,f)))+"px")}function Is(){try{let a=p,l=document.getElementById("rcgrab"),u=document.getElementById("z");if(!a||!Ve.on||Ve.cur!=="map"||a.classList.contains("peek")||!a.getClientRects().length||!l||!l.getClientRects().length){a&&a._fit&&(["max-height","bottom","height","right","width"].forEach(v=>a.style.removeProperty(v)),a._fit=0);return}let x=a.getBoundingClientRect().top,S=l.getBoundingClientRect().top-8,A=Math.max(140,Math.floor(S-x)),P=u&&u.getClientRects().length?u.getBoundingClientRect():null,R=P?Math.max(10,Math.ceil(innerWidth-P.left+8)):10;a._fit=A+"|"+R;let U=a.style,$={"max-height":A+"px",height:"auto",bottom:"auto",width:"auto",right:R+"px"};for(let v in $)(U.getPropertyValue(v)!==$[v]||U.getPropertyPriority(v)!=="important")&&U.setProperty(v,$[v],"important")}catch{}}setInterval(()=>{Ve.on&&Ve.cur==="map"&&Is()},700);try{new MutationObserver(()=>Is()).observe(p,{attributes:!0,attributeFilter:["style","class"]})}catch{}window.__fitMcs=Is;try{localStorage.removeItem("rod_dbg")}catch{}if(/[?&]dbg=1/.test(location.search)){let a=document.createElement("pre");a.id="dbgbox",a.style.cssText="position:fixed;left:4px;top:4px;z-index:999;background:rgba(0,0,0,.85);color:#0f0;font:11px/1.25 monospace;padding:6px;margin:0;pointer-events:none;max-width:70vw;white-space:pre-wrap",document.body.appendChild(a),setInterval(()=>{try{let l=f=>{let x=document.querySelector(f);if(!x||!x.getClientRects().length)return"\u2014";let S=x.getBoundingClientRect();return[S.left,S.top,S.right,S.bottom].map(Math.round).join(",")},u=getComputedStyle(p);a.textContent=`v ${document.title.slice(0,0)}${(document.getElementById("ver")||{}).textContent||""}
inner ${innerWidth}x${innerHeight} vv ${window.visualViewport?Math.round(visualViewport.height):"-"}
tab ${Ve.on?Ve.cur:"off"} peek ${p.classList.contains("peek")}
mcs ${l("#mcs")}
tc ${l("#mcs .tc")}
rc ${l("#rcgrab")} z ${l("#z")}
maxH ${u.maxHeight} ov ${u.overflowY}
fit ${p._fit||0}
inl ${p.style.cssText.slice(0,160)}`}catch(l){a.textContent="err "+l.message}},1e3)}addEventListener("resize",()=>setTimeout(Is,80));try{new ResizeObserver(()=>Is()).observe(document.getElementById("rcgrab")||document.body)}catch{}window.visualViewport&&visualViewport.addEventListener("resize",()=>setTimeout(Is,80));function Ce(){try{H_()}finally{requestAnimationFrame(Is),window.__rodTabSync&&window.__rodTabSync();try{Qh()}catch{}}}function H_(){if(!bt&&re<0&&!Ae&&!Ut&&!Nt&&!me){qs=!1,p.innerHTML="",p._h="",p.style.display="none",p.classList.remove("peek"),_d();return}let a=Qt(),l="",u=lt()&&a.live,f=(v,_)=>V.alerts.filter(C=>[...C.fams].some(O=>v.has(O))||_!=null&&C.stops.has(_)),x=v=>v.length?`<div class="al">${v.slice(0,4).map(_=>`<p>\u26A0\uFE0F ${xo(_)} ${[..._.fams].sort(B).slice(0,6).map(Mn).join(" ")} ${m(_.txt)} <small>${vo(_)}</small></p>`).join("")}${v.length>4?`<small>y ${v.length-4}${__t(200)}`:""}</div>`:"",S=bt&&u?Ft.find(v=>v.real&&(bt.vtid?v.v.tid===bt.vtid:v.tr===bt)):null;if(me&&!Nt&&!Ut&&!Ae&&!bt&&re<0)l=P_(me);else if(Nt)l=I_();else if(Ut)l=`${__t(201)}${m(y("#ver").firstChild.textContent)}</small><ul class="chg">${y("#chg").innerHTML||__t(203)}${__t(202)}`;else if(Ae){let v=V.alerts.filter(_=>[..._.fams].some(C=>Lt.has(C))||!_.fams.size);l=`<div class="tc alrl" style="--c:#c2410c"><button class="x" data-cx>\xD7</button><h3 class="ilt sm">${__t(205)}</h3><small class="ifoot0">${v.length===1?__t(206):v.length+" "+__t(207)}</small>${v.length?`<div class="igl">${v.map(_=>`<div class="igc"><p class="igh">\u26A0\uFE0F ${xo(_)} ${_.fams.size>6?`<span class="igall">${__t(208)}</span>`:[..._.fams].sort(B).map(Mn).join(" ")} <small>${vo(_)}</small></p><p class="igt">${m(_.txt)}</p></div>`).join("")}</div>`:`<p>${__t(209)}</p>`}${__t(204)}${V.alertsTs&&Date.now()/1e3-V.alertsTs<6*3600?__t(210):`${__t(211)}${V.alertsTs?new Date(V.alertsTs*1e3).toLocaleDateString("es-ES",{day:"numeric",month:"short"}):"\u2014"}`}</small></div>`}else if(S){let v=S.v,_=S.tr,C=Ee=>m(E[_.pat.stops[Ee]].n),O=_?_.pat.stops.length:0,X=zt.get(v.sid),K=X!=null?m(E[X].n):m(v.sid),G=_&&v.atStop>=0?C(v.atStop):"",nt=_&&v.next>=0?C(v.next):K,W=_&&v.next>0?C(v.next-1):"",Vt=S.broke||zp(S),oe=Vt?`<b class="stopv">\u26A0\uFE0F ${Vt.why==="aviso"?__t(212):`${__t(213)}${Vt.min} min`}</b>${_&&W?`${__t(214)}${W}${__t(215)}${nt}</b>`:""}`:S.stop==="via"&&_?`${__t(216)}${W?`${__t(218)}${W}${__t(215)}${nt}</b>`:`${__t(219)}${nt}</b>`}${__t(217)}${Math.max(1,Math.round(v.still/60))} min`:v.pre&&_?v.prevTr?`${__t(220)}${m(v.prevTr.num)}${__t(221)}${C(0)}</b>${v.prevDl>=1?`${__t(224)}${Math.round(v.prevDl)} min</b>`:""}${__t(222)}${rt(v.arrO)}${__t(223)}${rt(v.depEst)}</b>${v.preDl>=1?`${__t(225)}${rt(v.dep0)})`:""}`:`${__t(226)}${C(0)}${__t(227)}${rt(v.dep0+S.dl)}</b>`:G&&v.before?`Llegando a <b>${G}</b>`:(v.st==="STOPPED_AT"||S.stop==="st")&&G?`${__t(228)}${G}</b>`:G&&v.next>=0&&v.atStop!==v.next?`${__t(229)}${G}${__t(221)}${nt}</b>`:W?`${__t(230)}${W}${__t(215)}${nt}</b>`:`${__t(231)}${nt}</b>`,ee=_&&v.next>=0&&!v.pre?rt(ea(_,v,v.next,_.t0+_.pat.t[2*v.next]+S.dl)):"",tn=[];if(_){let Ee=S.idx>=0?S.idx:0,be=v.pre?Math.max(S.dl,v.preDl||0):S.dl,vn=sn=>_.t0+_.pat.t[sn]+be;for(let sn=Ee;sn<O;sn++)tn.push(`<li class="${Ql(_.pat.stops[sn])?"mine":""}${tc(_,sn)?" alm":""}"><b>${rt(ea(_,v,sn,vn(sn===0?1:2*sn)))}</b><span title="${C(sn)}">${Ql(_.pat.stops[sn])}${C(sn)}</span>${be>=1?`<em class="dl ${$i(be)}">${v.pre?"\u2248":""}+${Math.round(be)}</em>`:""}${sn>0?`<button type="button" class="abtn" data-alarm="${sn}" title="${__t(232)}">${tc(_,sn)?"\u{1F514}":"\u{1F515}"}</button>`:""}</li>`)}l=`<div class="tc" style="--c:${S.c}"><button class="x" data-cx>\xD7</button><div>${Mn(S.fam)}${__t(233)}${m(_?_.num:v.num)}${__t(234)}${_?`<h3 class="rt"><span class="o" title="${C(0)}">${C(0)}</span><span class="ar">\u2192</span>${Ni(E[_.pat.stops[O-1]].n,_.fam)}</h3>`:""}
        <p>${oe}${ee?`${__t(235)}${ee}`:""}${v.plat&&v.st==="STOPPED_AT"&&G?`${__t(236)}${m(v.plat)}</b>`:""}</p><p>${v.pre&&v.prevTr?v.preDl>=1?`${__t(237)}${Math.round(v.preDl)}${__t(238)}`:__t(239):qp(V.delays.get(v.tid),V.delays.has(v.tid))}${(()=>{let Ee=_&&ql(_.num);return Ee&&Ee.n>=2?`${__t(240)}${Ee.n}${__t(241)}${Ee.late?`${__t(242)} <b>${Ee.late} ${__t(145)} ${Ee.n} ${__t(142)}</b> ${__t(243)}`:__t(244)} \xB7 ${__t(245)} ${Ee.avg<.5?"0":"+"+Math.round(Ee.avg)} min</span>`:""})()}${(()=>{let Ee=_&&Kh(_.num);return Ee?`<span class="why" title="${m(Ee.txt)}">${Ee.why?__t(246)+m(Ee.why):__t(247)}</span>`:""})()}</p>
        <small>${v.pre?`${__t(248)}${Ss(Nh(S.age))}`:v.est?__t(249):`${__t(250)}${Ss(Nh(S.age))}${S.age>120?__t(251):""}`}</small>
        ${tn.length?`${S.dl>=1||v.pre&&v.preDl>=1?`${__t(252)}`:""}<ol class="stops">${tn.join("")}</ol>`:""}${x(f(new Set([S.fam])))}
        ${go(_?_.num:v.num,"",S.fam)}${_?`<div class="rtb two"><button type="button" data-fav>${Xp(_)?__t(253):__t(254)}</button><button type="button" data-follow>${oc(_)?__t(255):__t(256)}</button></div>`:""}</div>`}else if(bt&&u&&!bt.pat)l=`${__t(257)}${m(bt.num||bt.vtid||"")}${__t(258)}`;else if(bt){let v=bt,_=v.pat,C=_.stops.length,O=kt(v),X=typeof O=="number"?O/60:0,K=t.days.indexOf(a.ymd),G=v.day===K-1?1440:0,nt=a.min+G-v.t0-X,W=Q(v,nt),Vt=be=>v.t0+_.t[be]+X,oe=be=>m(E[_.stops[be]].n),ee=__t(259);W&&(ee=W.moving?`${__t(260)}${oe(W.next)}${__t(261)}${rt(Vt(2*W.next))}`:W.at===C-1?`${__t(262)}${oe(C-1)}</b>`:`${__t(228)}${oe(W.at)}${__t(263)}${rt(Vt(2*W.at+1))}`);let tn=W?W.next:0,Ee=[];for(let be=tn;be<C;be++)Ee.push(`<li class="${Ql(_.stops[be])?"mine":""}${tc(v,be)?" alm":""}"><b>${rt(ea(v,null,be,Vt(2*be)))}</b><span title="${oe(be)}">${Ql(_.stops[be])}${oe(be)}</span>${X>=1?`<em class="dl ${$i(X)}">+${Math.round(X)}</em>`:""}${be>0?`<button type="button" class="abtn" data-alarm="${be}" title="${__t(232)}">${tc(v,be)?"\u{1F514}":"\u{1F515}"}</button>`:""}</li>`);l=`<div class="tc" style="--c:${v.c}"><button class="x" data-cx>\xD7</button><div>${Mn(v.fam)}${__t(233)}${m(v.num)}</b> <span class="pv">${__t(267)}</span></div><h3 class="rt"><span class="o" title="${oe(0)}">${oe(0)}</span><span class="ar">\u2192</span>${Ni(E[v.pat.stops[C-1]].n,v.fam)}</h3>
        <p>${ee}</p><p>${qp(O,O!=null)}${(()=>{let be=ql(v.num);return be&&be.n>=2?`${__t(240)}${be.n}${__t(241)}${be.late?`${__t(242)} <b>${be.late} ${__t(145)} ${be.n} ${__t(142)}</b> ${__t(243)}`:__t(244)} \xB7 ${__t(245)} ${be.avg<.5?"0":"+"+Math.round(be.avg)} min</span>`:""})()}${__t(264)}${rt(v.t0+_.t[1])}${__t(265)}${rt(v.t0+_.t[2*C-2])}${__t(266)}${X>=1?__t(252):""}<ol class="stops">${Ee.join("")}</ol>${go(v.num,"",v.fam)}<div class="rtb two"><button type="button" data-fav>${Xp(v)?__t(253):__t(254)}</button><button type="button" data-follow>${oc(v)?__t(255):__t(256)}</button></div></div>`}else{let v=re,_=t.days.indexOf(a.ymd),C=[];Di.st!==v&&(Di.st=v,Di.f.clear());let O=W=>(!Z[W]||Lt.has(W))&&(!Di.f.size||Di.f.has(W));if(_>=0){let W=(Vt,oe)=>{for(let ee of Vt){if(!O(ee.fam))continue;let tn=ee.pat.stops.indexOf(v);if(tn<0||tn===ee.pat.stops.length-1)continue;let Ee=kt(ee),be=typeof Ee=="number"?Ee/60:0,vn=ee.t0+ee.pat.t[2*tn+1]-oe;vn+be<a.min-1||vn>a.min+360||C.push({tr:ee,t:vn,dl:be,d:Ee,on:V.vp.has(ee.tid),past:a.min>ee.t0+ee.pat.t[1]-oe+2})}};W(st[_],0),_>0&&W(st[_-1],1440)}C.sort((W,Vt)=>W.t+W.dl-Vt.t-Vt.dl);let X=E[v].id,K=Bt.get(X),G=(u||at()&&a.live)&&V.url;G&&(!K||Date.now()-K.at>em())&&!K?.loading&&(Bt.set(X,{...K||{},loading:!0,at:K?K.at:0}),It(ce(),"/departures.json?stationId="+X).then(W=>{Bt.set(X,{at:Date.now(),d:W}),re===v&&(p._h="",Ce())}).catch(()=>Bt.set(X,{at:Date.now(),err:1})));let nt=G&&K&&K.d&&Array.isArray(K.d.trains)&&K.d.trains.length?K.d.trains:null;if(nt){let W=new Map([...V.vp.values()].map(ee=>[String((mt.get(ee.tid)||{}).num||ee.num),ee])),Vt=new Map(Zn(v).map(ee=>[String(ee.num),ee])),oe=nt.filter(ee=>O((ee.line||{}).id||"")).slice(0,40).map(ee=>{let tn=String(ee.commercialNumber||ee.technicalNumber||""),Ee=Vt.get(tn),be=Ee?rt(Ee.est):(ee.departureDateHourSelectedStation||"").slice(11,16),vn=(ee.line||{}).id||"",sn=W.get(tn),pn=Ee?Math.round(Ee.dl)*60:sn?V.delays.get(sn.tid):null,gi=Ee&&(Ee.gone||!Ee.live&&Ee.est<a.min-1);return`<li class="go${gi?" old":""}${po({num:tn,tid:sn?sn.tid:""})?" sel":""}" data-gt="${m(tn)}|${sn?m(sn.tid):""}"><b>${m(be)}</b>${Z[vn]?Mn(vn):`<span class="ln" style="--c:#6b7385">${m(vn||"?")}</span>`}<span>${Ni((ee.destinationStation||{}).name||"",vn)}${ee.trainObservations?` \xB7 <i>${m(ee.trainObservations)}</i>`:""}${gi?` <small class="oldt">${Ee.gone?__t(268):__t(269)}</small>`:""}</span>${ee.trainCancelled?__t(270):typeof pn=="number"&&pn>=60?`<em class="dl ${$i(pn/60)}">+${Math.round(pn/60)}</em>`:""}${ee.platformSelectedStation?`${__t(271)}${m(ee.platformSelectedStation)}</i>`:""}${sn?'<i class="lvd" title="circulando, posici\xF3n real">\u25CF</i>':'<i class="lvd ph">\u25CF</i>'}</li>`}).join("");l=`<div class="tc" style="--c:#1d2330"><button class="x" data-cx>\xD7</button><h3>${m(E[v].n)}</h3>${$p(v)}${go("",E[v].id,"")}${__t(272)}${oe||__t(274)}</ol>${Vp(v,a)}${x(f(E[v].fams,v))}${__t(273)}`}else l=`<div class="tc" style="--c:#1d2330"><button class="x" data-cx>\xD7</button><h3>${m(E[v].n)}</h3>${$p(v)}${go("",E[v].id,"")}
        <small style="margin-top:6px">${u&&V.url?__t(276):""}${__t(275)}${u?__t(277):__t(278)}</small>
        <ol>${C.slice(0,40).map(W=>`<li class="go${po({num:W.tr.num,tid:W.tr.tid})?" sel":""}" data-gt="${m(W.tr.num)}|${m(W.tr.tid)}"><b>${rt(W.t+W.dl)}</b>${Mn(W.tr.fam)}<span>${Ni(E[W.tr.pat.stops[W.tr.pat.stops.length-1]].n,W.tr.fam)}</span>${W.d==="X"?__t(270):W.dl>=1?`<em class="dl ${$i(W.dl)}">+${Math.round(W.dl)}</em>`:""}${u?W.on?'<i class="lvd" title="circulando, posici\xF3n real">\u25CF</i>':W.past?__t(279):'<i class="lvd ph">\u25CF</i>':""}</li>`).join("")||__t(280)}</ol>${Vp(v,a)}${x(f(E[v].fams,v))}${__t(273)}`}let A=p.scrollTop;if(p._h!==l&&!(p._touch>Date.now())){let v=K=>((K&&K.querySelector("h3")||{}).textContent||"").replace(/[^\p{L}\d]/gu,""),_=p.querySelector(".tc"),C=v(_),O=_?_.scrollTop:0;p.innerHTML=l,p._h=l,p.scrollTop=A;let X=p.querySelector(".tc");X&&O&&C&&v(X)===C&&(X.scrollTop=O)}if(p.style.display="flex",p.classList.toggle("min",qs),_d(),innerWidth<=640){let v=p.querySelector(".tc");if(v&&!v.querySelector(".mn")){let _=document.createElement("button");_.type="button",_.className="mn",_.setAttribute("aria-label",__t(281)),_.textContent=p.classList.contains("peek")?"\u25B4":"\u25BE",_.onclick=O=>{O.stopPropagation(),p.classList.toggle("peek"),p.classList.contains("peek")&&(ta="",p.querySelectorAll("details[open]").forEach(X=>X.open=!1)),p.scrollTop=0,p.querySelectorAll(".tc").forEach(X=>X.scrollTop=0),requestAnimationFrame(Is),Qh(),_.textContent=p.classList.contains("peek")?"\u25B4":"\u25BE"};let C=v.querySelector(".x");v.insertBefore(_,C?C.nextSibling:v.firstChild)}}else p.classList.remove("peek");let P=y("#rc");if(innerWidth<=640&&!P.classList.contains("min")&&!Ce.done&&(Ce.done=1,y("#rcgrab").click()),innerWidth<=640){let v=y("#inf").getBoundingClientRect().bottom;p.style.top=Math.round(v+8)+"px",p.style.width="calc(100vw - 76px)",p.style.maxHeight=Math.max(140,y("#rc").getBoundingClientRect().top-v-16)+"px"}else if(innerHeight<=500){let v=y("#inf").getBoundingClientRect().bottom;p.style.top=Math.round(v+8)+"px",p.style.width="min(290px, 40vw)",p.style.maxHeight=innerHeight-v-20+"px"}else p.style.top="",p.style.width=Nt?"390px":"300px",p.style.maxHeight="";Is();let U=p.querySelector("[data-cx]");U&&(U.onclick=v=>{if(v.stopPropagation(),Ce.done=0,Nt||Ut||Ae||me&&!bt&&re<0){Nt=Ut=Ae=!1,bt||re>=0||(me=""),p._h="",Ce(),o();return}if(bt&&Ie.st>=0){let _=Ie.st;Ie.st=-1,bt=null,de=null,re=_,zn(),p._h="",Ce(),Le=0,o();return}if(bt&&oc(bt)){let _=bt,C=[...ln],O=ve?{...ve}:null,X=p.querySelector("[data-follow]");X&&X.click(),setTimeout(()=>Be(`${__t(282)} \xB7 ${_.fam||""} ${_.num}`,{label:__t(283),fn:()=>{C.forEach(([K,G])=>ri(K,G)),O&&!ve&&(ve=O,Rs()),Oi("map"),Zs({num:String(_.num),tid:_.tid&&V.vp.has(_.tid)?_.tid:"",tr:_}),de=bt,p._h="",Ce(),ge(!0),o()}}),0)}Ie.st=-1,Ae=!1,Ut=!1,Nt=!1,bt=null,re=-1,de=null,zn(),Ce(),Le=0,o()}),nd(p),p.querySelectorAll("[data-alarm]").forEach(v=>v.onclick=_=>{_.stopPropagation();let C=bt&&bt.pat?bt:mt.get(bt&&bt.vtid)||null;if(!C)return;let O=+v.dataset.alarm,X=E[C.pat.stops[O]].id;ve&&ve.num===String(C.num)&&ve.sid===X?(ve=null,window.__schedOff&&window.__schedOff(7701),Be(__t(284))):(ve={num:String(C.num),sid:X,at:Date.now()},Be(`${__t(285)}${E[C.pat.stops[O]].n}`),"Notification"in window&&Notification.permission==="default"&&Notification.requestPermission()),Rs(),p._h="",Ce()});{let v=p.querySelector("[data-fav]");v&&(v.onclick=_=>{_.stopPropagation();let C=bt&&bt.pat?bt:mt.get(bt&&bt.vtid)||null;if(!C)return;let O=mi.findIndex(X=>Gp(X,C));if(O>=0)mi.splice(O,1),Be(__t(286));else{let X=Wp(C);mi.push({num:String(C.num),fam:C.fam,sid:E[X].id,dest:E[C.pat.stops[C.pat.stops.length-1]].id,t:rt(C.t0+C.pat.t[2*C.pat.stops.indexOf(X)+1])}),Be(`${__t(287)}${C.fam}${__t(288)}${mi[mi.length-1].t}${__t(193)}${E[X].n}${__t(289)}`),"Notification"in window&&Notification.permission==="default"&&Notification.requestPermission()}Hp(),p._h="",Ce(),ge(!0)})}{let v=p.querySelector("[data-share]");v&&(v.onclick=()=>{let _=me,C=Ft.filter(G=>(G.fam||G.tr&&G.tr.fam)===_),O=C.filter(G=>G.dl>=5).sort((G,nt)=>nt.dl-G.dl),X=V.alerts.filter(G=>G.fams.has(_)),K=`${_}${__t(290)}${rt(Qt().min)}: ${C.length}${__t(291)}${O.length}${__t(292)}${O.length?" ("+O.slice(0,4).map(G=>`${G.tr?G.tr.num:G.v.num} +${Math.round(G.dl)}`).join(", ")+")":""}.${X.length?__t(293)+X[0].txt:__t(294)}`;navigator.share?navigator.share({text:K}).catch(()=>{}):(navigator.clipboard&&navigator.clipboard.writeText(K),Be(__t(295)+K.slice(0,60)+"\u2026"))})}p.querySelectorAll("[data-tripx]").forEach(v=>v.onclick=_=>{_.stopPropagation();let C=Hn.findIndex(X=>X.k===v.dataset.tripx);if(C<0)return;let[O]=Hn.splice(C,1);try{localStorage.setItem("rod_trips",JSON.stringify(Hn,(X,K)=>X==="_n"?void 0:K))}catch{}p._h="",Ce(),Be(`${__t(296)} \xB7 tren ${O.num}`,{label:__t(283),fn:()=>{Hn.push(O);try{localStorage.setItem("rod_trips",JSON.stringify(Hn,(X,K)=>X==="_n"?void 0:K))}catch{}p._h="",Ce()}})}),p.querySelectorAll("[data-lseg]").forEach(v=>v.onclick=_=>{_.stopPropagation(),Zl.v=v.dataset.lseg,p._h="",Ce();let C=p.querySelector(".tc");C&&(C.scrollTop=0)});{let v=p.querySelector("[data-lmore]");v&&(v.onclick=()=>{Jl.v=!Jl.v,p._h="",Ce()})}{let v=p.querySelector("[data-share30]");v&&(v.onclick=()=>{let _=me,C=Op(_);if(!C)return;let O=mi.filter(K=>K.fam===_).map(K=>[K,Np(K)]).filter(([,K])=>K.n),X=`${__t(297)} ${_} ${__t(298)} ${Math.min(30,C.days)} ${__t(142)}: ${Math.round(C.pct)} % ${__t(299)}, ${__t(300)} ${As(C.avg)}${C.nc?`, ${C.nc} ${C.nc===1?__t(158):__t(159)}`:""}.${(K=>{let G=K.filter(nt=>nt.dl!=null);return G.length?` ${__t(301)} ${K.length} ${K.length===1?__t(131):__t(132)}: ${__t(302)} ${G.filter(nt=>nt.dl>=5).length} ${__t(303)} (\u2248 ${Zh(G.reduce((nt,W)=>nt+W.dl,0))} ${__t(136)}).`:""})(Lm(_,30))}${O.map(([K,G])=>` ${__t(304)} ${K.t} ${__t(305)} ${G.late} ${__t(145)} ${G.n} ${__t(142)} (\u2248 ${Zh(G.sum)} ${__t(136)}).`).join("")} ${__t(306)}`;navigator.share?navigator.share({text:X}).catch(()=>{}):(navigator.clipboard&&navigator.clipboard.writeText(X),Be(__t(295)+X.slice(0,60)+"\u2026"))})}{let v=p.querySelector("[data-cols]");v&&(v.onclick=()=>{gn.on=!gn.on,O_(),p._h="",Ce()})}p.querySelectorAll("[data-gs]").forEach(v=>v.onclick=()=>{let _=+v.dataset.gs;Nt=!1,window.__rodPickStation(_),Object.assign(s,{tx:E[_].w[0],ty:E[_].w[1],dist:Math.min(s.dist,20)}),o()}),p.querySelectorAll("[data-sf]").forEach(v=>v.onclick=_=>{_.stopPropagation();let C=v.dataset.sf;C?Di.f.has(C)?Di.f.delete(C):Di.f.add(C):Di.f.clear(),p._h="",Ce()}),p.querySelectorAll("[data-gt]").forEach(v=>v.onclick=()=>{Ie.st=re;let[_,C]=v.dataset.gt.split("|"),O=mt.get(C);Zs({num:_,tid:V.vp.has(C)?C:"",tr:O||null})}),p.querySelectorAll("[data-sethome]").forEach(v=>v.onclick=()=>vd(re,v.dataset.sethome));let $=p.querySelector("[data-follow]");$&&($.onclick=()=>{let v=oc(bt);if(de=v?null:bt,!v&&bt&&bt.num!=null){let _=bt.pat.stops,C=String(bt.num),O=null,X=1e9;for(let K of[Xe,$e,Tt]){let G=An(K);if(G==null||!_.includes(G)||K===Tt&&!Tt.st.length)continue;let nt=Zn(G).find(W=>String(W.num)===C&&!W.gone);nt&&nt.est<X&&(X=nt.est,O=K)}O?ri(O.key,C):[...ln.keys()].forEach(K=>ri(K,null)),ge(!0)}if(v&&bt&&bt.num!=null){let _=String(bt.num);[...ln].forEach(([C,O])=>{String(O)===_&&ri(C,null)}),Rn.num===_&&(Rn.num=""),ht.tid===_&&(ht.tid="",ht.lock=!1,ht.manual=0,ht.quiet=Date.now()+10*6e4),ve&&ve.num===_&&(ve=null,Rs(),window.__schedOff&&window.__schedOff(7701)),ge(!0)}de?(s.dist=Math.min(s.dist,22),innerWidth<=640&&(p.classList.add("peek"),p.scrollTop=0,y("#rc").classList.contains("min")||y("#rcgrab").click())):p.classList.remove("peek"),p._h="",Ce(),o()})}window.__rodCard=Ce;try{let a=localStorage.getItem("rod_inf");(a==="mini"||a==null)&&y("#inf").classList.add("mini")}catch{}y("#inft").onclick=()=>{let a=y("#inf").classList.toggle("mini");try{localStorage.setItem("rod_inf",a?"mini":"")}catch{}(bt||re>=0||Ae||Ut)&&(p._h="",Ce())},y("#ver").onclick=()=>{Ut=!0,Nt=!1,Ae=!1,p._h="",Ce()};let G_={parado:'<path d="M9 6v12M15 6v12"/>',calor:'<path d="M12 4a2 2 0 012 2v8.5a4 4 0 11-4 0V6a2 2 0 012-2z"/><path d="M12 11v6"/>',abordo:'<path d="M12 3l10 18H2z"/><path d="M12 10v5M12 18v.4"/>',via:'<path d="M12 3l10 18H2z"/><path d="M12 10v5M12 18v.4"/>',gente:'<circle cx="9" cy="8" r="3"/><path d="M3 20c0-3.5 2.7-6 6-6s6 2.5 6 6"/><circle cx="17" cy="9" r="2.5"/><path d="M16 14.2c2.8.3 5 2.5 5 5.8"/>',retraso:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',cancel:'<circle cx="12" cy="12" r="9"/><path d="M9 9l6 6M15 9l-6 6"/>',ascensor:'<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 9l3-3 3 3M9 15l3 3 3-3"/>'},W_={vacio:"ok",lleno:"warn",petado:"bad",parado:"warn",calor:"warn",abordo:"bad",gente:"warn",retraso:"warn",cancel:"bad",ascensor:"warn",via:"bad"};function Yp(a){let l={vacio:1,lleno:2,petado:3}[a],u=l?[0,1,2].map(f=>`<rect x="${4+f*6}" y="${14-f*4}" width="4" height="${6+f*4}" rx="1" ${f<l?'fill="currentColor"':""}/>`).join(""):G_[a]||'<circle cx="12" cy="12" r="3"/>';return`<svg class="cki ${W_[a]||""}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${u}</svg>`}let rs=new Proxy({},{get:(a,l)=>Yp(l)}),ta="",X_=["vacio","lleno","petado",__t(307),"calor","abordo"],Jp=["gente","retraso","cancel","ascensor","via"],q_={vacio:__t(308),lleno:__t(309),petado:__t(310),parado:__t(311),calor:__t(312),abordo:__t(313),gente:__t(314),retraso:__t(315),cancel:__t(316),ascensor:__t(317),via:__t(318)},Ys=a=>q_[a]||(V.tipos||{})[a]||a,ic=(a,l)=>(V.rep||[]).filter(u=>a&&u.num===String(a)&&!u.sid||l&&u.sid===String(l)&&!u.num||a&&l&&u.num===String(a)&&u.sid===String(l)),td=a=>{let l=Math.round((Date.now()+(V.repSkew||0)-a.at)/6e4);return l<1?__t(319):Ss(l+" min")},ed=["vacio","lleno","petado"],Y_={vacio:__t(320),lleno:__t(321),petado:__t(322)},Zp={vacio:__t(308),lleno:__t(309),petado:__t(323)},J_=(()=>{try{let a=localStorage.getItem("rod_dev");return/^[a-f0-9]{32}$/.test(a||"")||(a=[...crypto.getRandomValues(new Uint8Array(16))].map(l=>l.toString(16).padStart(2,"0")).join(""),localStorage.setItem("rod_dev",a)),a}catch{return""}})(),Sr=(()=>{try{return JSON.parse(localStorage.getItem("rod_crowd")||"{}")}catch{return{}}})(),jp=a=>{let l=Sr[String(a)];return l&&Date.now()-l.at<20*6e4?l.lvl:""};function Kp(a){let l=(V.crowd||[]).filter(f=>f.num===String(a));if(!l.length)return null;let u=l.slice().sort((f,x)=>x.n-f.n||x.at-f.at)[0];return{lvl:u.lvl,n:u.n,at:u.at}}let Qp=a=>{let l=a?Kp(a):null,u=ic(a,"");return l?[{kind:l.lvl,up:l.n,at:l.at,id:"c"+a},...u]:u},sc=(()=>{try{return new Set(JSON.parse(localStorage.getItem("rod_votesno")||"[]"))}catch{return new Set}})(),mo=(()=>{try{return JSON.parse(localStorage.getItem("rod_vt")||"{}")}catch{return{}}})(),rc=a=>a.kind==="ascensor"&&Date.now()-(mo[a.id]||0)>7*864e5,Z_=a=>{let l=Math.round(a/6e4);if(l<60)return l<1?__t(46):l+" min";let u=Math.round(l/60);if(u<48)return u+" h";let f=Math.round(u/24);if(f<60)return f+" "+__t(142);let x=Math.round(f/30);return x<24?x+" "+__t(324):Math.round(x/12)+" "+__t(325)},tm=a=>{let l=a.up>1?(a.up>999?"999+":a.up)+" "+__t(326):"";if(a.kind==="ascensor"&&a.t0){let u=Date.now()+(V.repSkew||0)-a.t0;return(u<36e5?td(a):__t(327)+" "+Z_(u))+(l?" \xB7 "+l:"")}return(l?l+" \xB7 ":"")+td(a)},Js=(()=>{try{return new Set(JSON.parse(localStorage.getItem("rod_votes")||"[]"))}catch{return new Set}})();function go(a,l,u){if(!V.url||!V.repOk)return"";let f=ic(a,l).filter(R=>!ed.includes(R.kind)),x=(a?X_:Jp).filter(R=>!ed.includes(R)),S=a?Kp(a):null,A=a?jp(a):"",P=a?`<div class="cocc"><p class="ccur">${S?`<span class="cname">${rs[S.lvl]} <b>${m(Zp[S.lvl])}</b></span><small class="cmeta">${td(S)} \xB7 ${S.n===1?__t(328):S.n+" "+__t(329)}</small>`:`<span class="cname">${rs.vacio} <b class="cnone">${__t(330)}</b></span>`}</p><div class="cseg" role="group" aria-label="${__t(331)}">${ed.map(R=>`<button type="button" data-cl="${R}" data-rn="${m(a)}" data-rl="${m(u||"")}" class="${A===R?"on":""}" aria-pressed="${A===R}">${rs[R]} ${m(Y_[R])}</button>`).join("")}</div><small class="chint">${A?__t(332):__t(333)}</small></div>`:"";return`<div class="crowd"><small>${Yp("gente")} ${__t(334)}${f.length||a?"":__t(335)}</small>${P}${f.map(R=>`<p><span><span class="cname">${rs[R.kind]||"\u2022"} <b>${m(Ys(R.kind))}</b></span><small class="cmeta">${tm(R)}</small></span>${sc.has(R.id)&&!rc(R)?`<small class="cvok">\u2713 ${__t(336)}</small>`:Js.has(R.id)&&!rc(R)?`<span class="cvb cvmine"><small class="cvok">\u2713 ${__t(337)}</small><button type="button" data-rx="${R.id}">${__t(338)}</button></span>`:`<span class="cvb"><button type="button" data-rv="${R.id}:1" title="${__t(339)}">\u2713 ${__t(340)}</button><button type="button" data-rv="${R.id}:-1" title="${__t(341)}">\u2715 ${R.kind==="ascensor"?__t(342):__t(343)}</button></span>`}</p>`).join("")}
      <details data-ckd="${m(String(a||"")+"|"+String(l||""))}"${ta===String(a||"")+"|"+String(l||"")?" open":""}><summary>${a?__t(344):__t(345)}</summary><div class="ckb">${x.map(R=>`<button type="button" data-rk="${R}" data-rn="${m(a||"")}" data-rs="${m(l||"")}" data-rl="${m(u||"")}">${rs[R]} ${m(Ys(R))}</button>`).join("")}</div><small>${__t(346)}</small></details></div>`}async function ac(a,l){try{let f=await(await fetch(ce()+l,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...a,dev:J_})})).json();if(!f.ok){Be(f.err||__t(347));return}if(f.id){Js.add(f.id),mo[f.id]=Date.now();try{localStorage.setItem("rod_vt",JSON.stringify(mo))}catch{}try{localStorage.setItem("rod_votes",JSON.stringify([...Js].slice(-300)))}catch{}}if(l==="/crowd"||a.retract){if(a.retract){Js.delete(a.id);try{localStorage.setItem("rod_votes",JSON.stringify([...Js].slice(-300)))}catch{}Be(f.gone?__t(348):__t(349))}}else Be(l==="/vote"?__t(350):f.n>1?`${__t(351)}${f.n}${__t(352)}`:__t(353));let x=await It(ce(),"/reports.json");x&&x.items&&(V.rep=x.items,V.crowd=x.crowd||[],V.repFresh=Date.now()),p._h="",Ce(),ge(!0)}catch{Be(__t(354))}}function nd(a){a.querySelectorAll("details[data-ckd]").forEach(l=>l.addEventListener("toggle",()=>{ta=l.open?l.dataset.ckd:ta===l.dataset.ckd?"":ta,l.open&&l.scrollIntoView({block:"nearest",behavior:"smooth"})})),a.querySelectorAll("[data-cl]").forEach(l=>l.onclick=u=>{u.stopPropagation();let f=l.dataset.rn,x=l.dataset.cl,S=jp(f)===x?"":x;S?Sr[f]={lvl:S,at:Date.now()}:delete Sr[f];for(let A in Sr)Date.now()-Sr[A].at>36e5&&delete Sr[A];try{localStorage.setItem("rod_crowd",JSON.stringify(Sr))}catch{}l.closest(".cseg").querySelectorAll("button").forEach(A=>{A.classList.toggle("on",A.dataset.cl===S),A.setAttribute("aria-pressed",A.dataset.cl===S)}),Be(S?`${__t(355)} \xB7 ${Zp[S]}`:__t(356)),ac({num:f,lvl:S,line:l.dataset.rl},"/crowd")}),a.querySelectorAll("[data-rx]").forEach(l=>l.onclick=u=>{u.stopPropagation(),l.disabled=!0,ac({id:+l.dataset.rx,retract:1},"/report")}),a.querySelectorAll("[data-rk]").forEach(l=>l.onclick=u=>{u.stopPropagation(),l.disabled=!0,ta="",ac({kind:l.dataset.rk,num:l.dataset.rn,sid:l.dataset.rs,line:l.dataset.rl},"/report")}),a.querySelectorAll("[data-rv]").forEach(l=>l.onclick=u=>{u.stopPropagation();let[f,x]=l.dataset.rv.split(":");(+x>0?Js:sc).add(+f),mo[+f]=Date.now();try{localStorage.setItem("rod_vt",JSON.stringify(Object.fromEntries(Object.entries(mo).filter(([,S])=>Date.now()-S<40*864e5))))}catch{}try{localStorage.setItem("rod_votes",JSON.stringify([...Js].slice(-300))),localStorage.setItem("rod_votesno",JSON.stringify([...sc].slice(-300)))}catch{}ac({id:+f,v:+x},"/vote"),Be(+x>0?__t(357):__t(358)),ge(!0),p._h="",Ce()})}let _o=0;function Be(a,l){let u=y("#toast");if(u||(u=document.createElement("div"),u.id="toast",document.body.appendChild(u)),u.textContent=a,l){let f=document.createElement("button");f.type="button",f.className="tact",f.textContent=l.label,f.onclick=x=>{x.stopPropagation(),clearTimeout(_o),u.className="",l.fn()},u.appendChild(f)}if(u.className="on",clearTimeout(_o),_o=setTimeout(()=>{u.className=""},Math.min(1e4,Math.max(4500,String(a).length*70))),!u._tap){u._tap=1,u.onclick=()=>{clearTimeout(_o),u.className=""};let f=null,x=0;u.addEventListener("touchstart",S=>{f=S.touches[0].clientY,x=0,u.style.transition="none"},{passive:!0}),u.addEventListener("touchmove",S=>{f!=null&&(x=Math.min(0,S.touches[0].clientY-f),u.style.translate=`0 ${x}px`,u.style.opacity=String(Math.max(.2,1+x/80)))},{passive:!0}),u.addEventListener("touchend",()=>{u.style.transition="",u.style.translate="",u.style.opacity="",f!=null&&x<-25&&(clearTimeout(_o),u.className=""),f=null})}}function xo(a){return a.src?`<b class="asrc ${a.src==="Adif"?"adif":""}">${a.src==="Adif"?__t(359):m(a.src)}</b>`:""}function vo(a){if(!a.when)return"";let[l,u]=a.when.split("T"),f=yt(new Date),x=f.ymd.slice(0,4)+"-"+f.ymd.slice(4,6)+"-"+f.ymd.slice(6,8);if(l===x&&u){let S=Math.round(f.min-(+u.slice(0,2)*60+ +u.slice(3,5)));return S<1?__t(319):S<60?Ss(S+" min"):`${__t(360)}${u.slice(0,5)}`}return`${l.slice(8,10)}/${l.slice(5,7)}${u?" "+u.slice(0,5):""}`}function id(){let a=y("#alr");if(!a)return;let l=V.alerts.filter(u=>[...u.fams].some(f=>Lt.has(f))).length;a.hidden=!l,a.textContent=`\u26A0\uFE0F ${l}${l===1?__t(361):__t(362)}`}{let a=y("#alrslot");a&&a.appendChild(y("#alr"))}y("#alr").onclick=()=>{Ut=!1,Nt=!1,Ae=!0,Ce()},y("#wcopy").onclick=async()=>{let a=y("#wcode").textContent;try{await navigator.clipboard.writeText(a),y("#wcopy").textContent=__t(363)}catch{let u=document.createRange();u.selectNodeContents(y("#wcode"));let f=getSelection();f.removeAllRanges(),f.addRange(u),y("#wcopy").textContent=__t(364)}setTimeout(()=>y("#wcopy").textContent=__t(365),2500)};let j_=zt.get("71801");function em(){return document.hidden?ln.size||ve?12e4:1e12:3e4}function nm(a,l){let u=E[a].id,f=Bt.get(u);!(Fe()&&V.url)||f&&(f.loading||Date.now()-f.at<em())||(Bt.set(u,{...f||{},loading:!0,at:f?f.at:0}),It(ce(),"/departures.json?stationId="+u).then(x=>{Bt.set(u,{at:Date.now(),d:x}),l&&l()}).catch(()=>Bt.set(u,{at:Date.now(),err:1})))}let im=a=>+a.slice(0,2)*60+ +a.slice(3,5),yo={k:-2,m:null};function Ps(a){let l=t.days.indexOf(Qt().ymd);if(yo.k!==l){yo.k=l,yo.m=new Map;for(let u of st[l]||[])yo.m.set(String(u.num),u)}return yo.m.get(String(a))||null}let zi={at:0,m:new Map},So=a=>lt()?(bo(""),[...a].filter(l=>{let u=zi.m.get(l);return u&&u[0]>=2&&u[1]===0}).sort(B)):[];function bo(a){if(Date.now()-zi.at>6e4||zi.vp!==V.vp){zi.at=Date.now(),zi.vp=V.vp,zi.m=new Map;let u=Qt(),f=t.days.indexOf(u.ymd);if(f>=0)for(let x of st[f]){let S=u.min-x.t0;if(S<x.pat.t[1]+3||S>x.pat.t[x.pat.t.length-2]-3)continue;let A=zi.m.get(x.fam)||[0,0];A[0]++,V.vp.has(x.tid)&&A[1]++,zi.m.set(x.fam,A)}}let l=zi.m.get(a);return l&&l[0]>=3?l[1]/l[0]:1}function ea(a,l,u,f){let x=E[a.pat.stops[u]].id;if([...Xe.st,...$e.st].includes(x)){let S=Zn(a.pat.stops[u]).find(A=>String(A.num)===String(a.num));if(S&&!S.gone)return S.est}return sd(a,l,u,0,f)}function sm(a,l){if(!a||!l||l.pre||l.dObs==null||l.err==null||l.err>.6)return null;let u=Date.now()/1e3-l.ts;if(u>150||u<-30||(l.still||0)>=90)return null;let f=ne(a.pat).stopD,x=a.pat.t,S,A,P=f.reduce((R,U,$)=>Math.abs(U-l.dObs)<Math.abs(f[R]-l.dObs)?$:R,0);if(Math.abs(f[P]-l.dObs)<.16||l.atStop===P)S=x[2*P+1]??x[2*P],A=P;else{let R=f.findIndex($=>$>l.dObs);if(R<=0)return null;let U=Math.min(1,Math.max(0,(l.dObs-f[R-1])/(f[R]-f[R-1]||1)));S=x[2*R-1]+U*(x[2*R]-x[2*R-1]),A=R-1}return{t:yt(new Date).min-u/60,tpos:S,j0:A,sd:f}}function sd(a,l,u,f,x){let S=sm(a,l);if(!S||u<=S.j0&&!(u===S.j0&&f===1))return x;let A=a.pat.t,P=S.t+(A[2*u+f]??A[2*u])-S.tpos;if(P-S.t>45)return x;let R=(x%1440+1440)%1440,U=((P-R+720)%1440+1440)%1440-720;return U>=-3&&U<=5?x+U:x}function _w(a,l,u,f){let x=sm(a,l);if(!x)return null;let S=sd(a,l,u,1,x.t+a.pat.t[2*u+1]-x.tpos);return S-f.min>30||S<f.min-1?null:S}function Zn(a,l){let u=Qt(),f=(lt()||at())&&u.live&&!l,x=Bt.get(E[a].id),S=[],A=new Map([...V.vp.values()].map(R=>[String((mt.get(R.tid)||{}).num||R.num),R]));if(f&&x&&x.d&&Array.isArray(x.d.trains)&&x.d.trains.length)for(let R of x.d.trains){let U=(R.departureDateHourSelectedStation||"").slice(11,16);if(!U)continue;let $=String(R.commercialNumber||R.technicalNumber||""),v=A.get($),_=v?V.delays.get(v.tid):null,C=Math.max(typeof _=="number"?Math.max(0,_/60):0,v&&v.pre&&v.preDl||0),O=im(U);O<u.min-720&&(O+=1440);let X=+(R.departureDateHourSelectedStation||"").slice(17,19)||0,K=O+X/60,G=v&&mt.get(v.tid)||Ps($),nt=G?G.pat.stops.indexOf(a):-1,W=nt>=0?(G.t0+G.pat.t[2*nt+1])%1440:null;if(W!=null){for(;W<K-720;)W+=1440;for(;W>K+720;)W-=1440;Math.abs(K-W)>120&&(W=null)}let Vt,oe;W==null?(Vt=X||!C?K:K+C,oe=X?0:C):X||Math.abs(K-W)>=1?(Vt=K,oe=Math.max(0,K-W)):(Vt=W+C,oe=C);let ee=!1;if(G&&!v&&nt>0&&!X){let tn=t.days.indexOf(u.ymd),Ee=G.day===tn-1?1440:G.day===tn+1?-1440:0,be=G.t0+G.pat.t[1]-Ee;if(u.min<be){let vn=be+(G.pat.t[2*nt+1]-G.pat.t[1]);vn>Vt+1&&(Vt=vn,ee=!0,W!=null&&(oe=Math.max(0,Vt-W)))}}if(W!=null&&(O=Math.round(W)),v&&G&&nt>=0){let tn=sd(G,v,nt,1,Vt);tn!==Vt&&(Vt=Math.max(tn,u.min),W!=null&&(oe=Math.max(0,Vt-W)))}S.push({dubious:ee,rodLive:!!X,sm:O,est:Vt,dl:oe,fam:(R.line||{}).id||"",dest:(R.destinationStation||{}).name||"",destId:(R.destinationStation||{}).id||"",plat:R.platformSelectedStation||"",cancel:!!R.trainCancelled,obs:R.trainObservations||"",live:!!v,num:$,tid:v?v.tid:"",tr:v&&mt.get(v.tid)||Ps($),src:"oficial"})}else{let R=t.days.indexOf(u.ymd);if(R<0)return S;let U=($,v)=>{for(let _ of $){let C=_.pat.stops.indexOf(a);if(C<0||C===_.pat.stops.length-1)continue;let O=kt(_),X=typeof O=="number"?Math.max(0,O/60):0,K=_.t0+_.pat.t[2*C+1]-v;if(K+X<u.min-1||K>u.min+(u.min>1080||u.min<300?600:360))continue;let G=_.pat.stops[_.pat.stops.length-1];S.push({sm:K,est:K+X,dl:X,fam:_.fam,dest:E[G].n,destId:E[G].id,plat:"",cancel:O==="X",obs:"",live:V.vp.has(_.tid),num:_.num,tid:_.tid,tr:_,src:"horario"})}};U(st[R],0),R>0&&U(st[R-1],1440),R+1<t.days.length&&u.min>1080&&U(st[R+1],-1440)}if(f){let R=new Set(S.map(v=>String(v.num))),U=t.days.indexOf(u.ymd),$=(v,_)=>{for(let C of v||[]){if(R.has(String(C.num)))continue;let O=C.pat.stops.indexOf(a);if(O<0||O===C.pat.stops.length-1)continue;let X=C.t0+C.pat.t[2*O+1]-_;if(X<u.min-45||X>u.min+1||!V.vp.get(C.tid))continue;let G=V.delays.get(C.tid),nt=typeof G=="number"?Math.max(0,G/60):0,W=C.pat.stops[C.pat.stops.length-1];S.push({sm:X,est:X+nt,dl:nt,fam:C.fam,dest:E[W].n,destId:E[W].id,plat:"",cancel:!1,obs:"",live:!0,num:C.num,tid:C.tid,tr:C,src:"horario"})}};U>=0&&($(st[U],0),U>0&&$(st[U-1],1440));for(let v of S){let _=v.tid&&V.vp.get(v.tid),C=v.tr?v.tr.pat.stops.indexOf(a):-1;v.passed=!!(_&&C>=0&&!_.pre&&_.next!=null&&_.next>=0&&_.next>C&&_.atStop!==C),!v.passed&&v.live&&v.est<u.min&&(v.est=u.min,v.late=!0),v.passed&&(v.gone=!0)}}let P=S.filter(R=>R.gone?u.min-R.est<20:R.est>=u.min-.5).sort((R,U)=>R.est-U.est);{let R=P.filter(U=>U.gone);if(R.length>2){let U=new Set(R.slice(0,R.length-2));P=P.filter($=>!U.has($))}}if(!P.filter(R=>!R.gone).length&&S.length&&S[0].src==="oficial"&&!l)return Zn(a,!0);for(let R of P){let U=R.num&&Kh(R.num);U&&U.cx&&(R.cancel=!0,R.cxWhy=U.txt)}if(lt()&&u.live){let R=t.days.indexOf(u.ymd);for(let U of P){if(U.live||U.cancel||!U.tr)continue;let $=U.tr.day===R-1?1440:U.tr.day===R+1?-1440:0,v=U.tr.t0+U.tr.pat.t[1]-$+(U.dl||0);U.noPos=u.min>v+3&&!U.rodLive,U.ghost=U.noPos&&bo(U.fam)>=.7}}if(l||(P=P.concat(I(a,u.min-.5,u.min+360)).sort((R,U)=>R.est-U.est)),!l&&P.some(R=>R.src==="oficial")){let R=S.filter(v=>v.src==="oficial"),U=Math.max(...R.map(v=>v.sm)),$=new Set(P.map(v=>String(v.num)));P=P.concat(Zn(a,!0).filter(v=>!v.gone&&v.sm<=U&&v.est>=u.min-.5&&!$.has(String(v.num))).map(v=>Object.assign(v,{unconf:!0}))).sort((v,_)=>v.est-_.est)}if(P.some(R=>R.src==="oficial")){let R=Math.max(...P.map($=>$.sm)),U=new Set(P.map($=>String($.num)));P=P.concat(Zn(a,!0).filter($=>$.sm>R&&!U.has(String($.num))))}return P}let rm=(a,l,u,f)=>{let x={key:a,ico:l,name:u,st:[],i:0,walk:10,open:!1};try{let S=JSON.parse(localStorage.getItem("rod_"+a)||"null");S&&Object.assign(x,S)}catch{}return!x.st.length&&f&&(x.st=f),x},Xe=rm("home","\u{1F3E0}",__t(366),null),$e=rm("work","\u{1F4BC}",__t(367),null),K_=a=>!!(a&&a.st&&a.st.length&&Tt.fix&&Date.now()-Tt.fix<5*6e4&&(Tt.acc||999)<150&&(Tt.dist[a.st[a.i||0]]??9)<.2),Tt={key:"near",ico:"\u{1F4CD}",name:__t(368),st:[],i:0,walk:0,open:!1,dist:{},fix:0,err:""};try{let a=t.days.indexOf(Qt().ymd),l=[...Xe.st,...$e.st],u=!1;if(a>=0)for(let f of mi){if(l.includes(f.sid))continue;let x=Qr(f,a);if(!x)continue;let S=Wp(x);S==null||!l.includes(E[S].id)||(f.sid=E[S].id,f.t=rt(x.t0+x.pat.t[2*x.pat.stops.indexOf(S)+1]),f.num=String(x.num),u=!0)}u&&Hp()}catch{}let Ls=[Tt,Xe,$e];try{Tt.homeW=JSON.parse(localStorage.getItem("rod_homew")||"null")}catch{}Xe.open=!1,$e.open=!1;function am(a,l){let u=Mt(a,l),f=Mt(a,l+.009);return 1/Math.hypot(f[0]-u[0],f[1]-u[1])}function rd(a){if(!navigator.geolocation){Tt.err=__t(369),ge(!0);return}navigator.geolocation.getCurrentPosition(l=>{let{longitude:u,latitude:f}=l.coords,x=Mt(u,f),S=am(u,f),A=E.map(($,v)=>[v,Math.hypot($.w[0]-x[0],$.w[1]-x[1])*S]).filter(([$])=>E[$].fams.size).sort(($,v)=>$[1]-v[1]),P=A.filter(([,$],v)=>v===0||$<Math.max(2.5,A[0][1]*1.6)).slice(0,3),R=Tt.st[0]!==E[P[0][0]].id;Tt.w=x,Tt.k=S,Tt.acc=l.coords.accuracy!=null?l.coords.accuracy:999,Tt.st=P.map(([$])=>E[$].id),Tt.dist=Object.fromEntries(P.map(([$,v])=>[E[$].id,v])),Tt.fix=Date.now(),Tt.err="",R&&(Tt.i=0);let U=[Xe,$e].find($=>$.st.includes(Tt.st[0])&&Tt.dist[Tt.st[0]]<1.5);ge(!0)},l=>{Tt.err=l.code===1?__t(370):__t(371),ge(!0)},{enableHighAccuracy:!1,maximumAge:6e4,timeout:12e3})}let br=a=>Math.max(1,Math.round(a*1.3/.08))+3;setTimeout(()=>rd(!0),400);let ht={fixes:[],tid:"",no:new Map,shown:""};try{let a=JSON.parse(localStorage.getItem("rod_onb")||"null");a&&a.tid&&Date.now()-a.at<3*36e5&&a.ymd===yt(new Date).ymd&&(ht.tid=a.tid,ht.manual=a.manual||0,ht.lock=!!a.lock)}catch{}let om="";setInterval(()=>{let a=ht.tid+"|"+(ht.manual||0)+"|"+(ht.lock?1:0);if(a!==om){om=a;try{ht.tid?localStorage.setItem("rod_onb",JSON.stringify({tid:ht.tid,manual:ht.manual||0,lock:!!ht.lock,at:Date.now(),ymd:yt(new Date).ymd})):localStorage.removeItem("rod_onb")}catch{}}},1500);let Rn={num:"",until:0};function oc(a){return!!a&&(de===a||a.num!=null&&([...ln.values()].some(l=>String(l)===String(a.num))||String(ht.tid)===String(a.num)))}let lm=()=>{let a=new Set([...ln.values()].map(String));return Rn.num&&Rn.until>Date.now()&&a.add(Rn.num),a};function ad(a,l){return!!a&&a.est-l.min<=3&&l.min-a.est<=20}function od(a){Be(a?`${__t(372)} (${a})`:__t(372))}function na(a,l,u){if(a=String(a),ht.tid&&ht.tid!==a){ht.no.set(ht.tid,Date.now()+20*6e4);let S=Hn.findIndex(A=>A.num===String(ht.tid)&&A.d===Qt().ymd&&Date.now()-A.t0<3*36e5);if(S>=0){Hn.splice(S,1),sa.s=0;try{localStorage.setItem("rod_trips",JSON.stringify(Hn,(A,P)=>A==="_n"?void 0:P))}catch{}}}ht.tid=a,ht.cand=null,ht.lock=l==="lock",ht.manual=l==="auto"?0:Date.now()+(l==="lock"?4*36e5:90*6e4),[...ln].forEach(([S,A])=>{String(A)!==a&&ri(S,null)}),Rn.num=a,Rn.until=Date.now()+90*6e4;let f=new Set;for(let S of Ls){let A=An(S);A!=null&&(S.platAt||S.goAt||S===Tt&&Tt.st&&Tt.st.length)&&f.add(A)}ht.from=[...f][0]??(u?(S=>S?An(S):null)(Ls.find(S=>S.key===u)):null);for(let S of Ls)(S.platAt||S.goAt||l!=="auto"&&S.open)&&(S.platAt=0,S.goAt=0,l!=="auto"&&(S.open=!1),si(S));window.__lpAt=Date.now();let x=Ft.find(S=>S.tr&&String(S.tr.num)===a)||ft(Qt()).out.find(S=>S.tr&&String(S.tr.num)===a);if(l!=="auto"){let S=x?x.tr:Ps(a);if(S){de=S,bt=S,re=-1,Ve.sk="t"+(S.num||S.vtid),Ut=Ae=Nt=!1,p._h="";try{Ce(),o()}catch{}}if(![...ln.values()].some(A=>String(A)===a)){let A=u||null,P=1e9;if(!A)for(let R of[Xe,$e,Tt]){let U=An(R),$=U!=null?Zn(U).find(v=>String(v.num)===a&&!v.gone):null;$&&$.est<P&&(P=$.est,A=R.key)}A&&ri(A,a)}}if(x){de=x.tr;let S=x.tr.pat.stops,A=(()=>{let U=Math.max(x.real&&x.v&&x.v.next>=0?x.v.next:-1,x.p&&x.p.next>=0?x.p.next:-1),$=ht.fixes[ht.fixes.length-1];if($&&Date.now()-$.t<12e4){let v=-1,_=.6;S.forEach((C,O)=>{let X=Math.hypot(E[C].w[0]-$.w[0],E[C].w[1]-$.w[1])*$.k;X<_&&(_=X,v=O)}),v>=0&&(U=Math.max(U,v))}for(let v of f){let _=S.indexOf(v);_>=0&&(U=Math.max(U,_))}return U<0?1:U})(),P=[...Xe.st,...$e.st,...lc.keys()],R=S.findIndex((U,$)=>$>=A&&!f.has(U)&&P.includes(E[U].id));R>0&&!(ve&&ve.num===a)&&(ve={num:a,sid:E[S[R]].id,at:Date.now()},Rs())}return x}function Q_(){let a=ht.fixes;if(a.length<2)return;let l=a[a.length-1],u=a.slice().reverse().find(C=>l.t-C.t>=8e3&&l.t-C.t<=9e4);if(!u)return;let f=Math.hypot(l.w[0]-u.w[0],l.w[1]-u.w[1])*l.k,x=l.spd!=null&&l.spd>0?l.spd*3.6:f/((l.t-u.t)/36e5);if(l.acc!=null&&l.acc>100)return;if(ht.tid&&u&&l.t-u.t>3e4&&(ht.slow=0),ht.tid&&x<8&&Date.now()-(ht.resumeAt||0)>12e4){if(!ht.slow)ht.slow=l.t;else if(l.t-ht.slow>9e4){let C=E.map((G,nt)=>[nt,G.w?Math.hypot(G.w[0]-l.w[0],G.w[1]-l.w[1])*l.k:99]).filter(G=>G[1]<.35).sort((G,nt)=>G[1]-nt[1])[0],O=Ft.find(G=>G.tr&&String(G.tr.num)===ht.tid),X=O&&(O.real&&O.v&&O.v.w?O.v.w:O.p&&O.p.w),K=X?Math.hypot(X[0]-l.w[0],X[1]-l.w[1])*l.k>1:!0;if(C&&(!ht.lock||K)){let G=ht.tid,nt=Hn.find(W=>W.num===G&&W.d===Qt().ymd);if(nt){nt.b=E[C[0]].id,nt.done=!0;try{localStorage.setItem("rod_trips",JSON.stringify(Hn,(W,Vt)=>W==="_n"?void 0:Vt))}catch{}}ht.lastEnd={n:G,at:Date.now(),lock:ht.lock,ok:0},ht.no.set(G,Date.now()+90*6e4),ht.tid="",ht.manual=0,ht.lock=!1,ht.slow=0,ht.quiet=Date.now()+10*6e4,de=null,[...ln].forEach(([W,Vt])=>{String(Vt)===G&&ri(W,null)}),Rn.num===G&&(Rn.num="");try{saveOnbState&&saveOnbState()}catch{}ge(!0);return}}}else ht.slow=0;if(!ht.tid&&ht.lastEnd&&Date.now()-ht.lastEnd.at<15*6e4&&x>20){let C=ht.lastEnd,O=Ft.find(K=>K.tr&&String(K.tr.num)===C.n),X=O&&(O.real&&O.v&&O.v.w?O.v.w:O.p&&O.p.w);if(X&&Math.hypot(X[0]-l.w[0],X[1]-l.w[1])*l.k<.4){if(++C.ok>=2){ht.no.delete(C.n),ht.tid=C.n,ht.lock=C.lock,ht.manual=C.lock?Date.now()+4*36e5:0,ht.quiet=0,ht.lastEnd=null;{let K=Hn.find(G=>G.num===C.n&&G.d===Qt().ymd);K&&(K.done=!1)}try{saveOnbState&&saveOnbState()}catch{}ge(!0);return}}else C.ok=0}if(!ht.tid&&ht.quiet&&Date.now()<ht.quiet||ht.manual&&Date.now()<ht.manual)return;if(ht.tid){if(x<22)return;let C=Ft.find(O=>O.tr&&String(O.tr.num)===ht.tid)||ft(Qt()).out.find(O=>O.tr&&String(O.tr.num)===ht.tid);if(C){if(Math.hypot(C.p.w[0]-l.w[0],C.p.w[1]-l.w[1])*l.k<=5){ht.far=0;return}if(ht.far||(ht.far=l.t),l.t-ht.far<12e4)return}ht.far=0}let S=lm();if(!ht.tid&&S.size&&x>=15&&x<=200&&!(l.acc!=null&&l.acc>80))for(let C of[...Ft.filter(O=>O.real),...ft(Qt()).out]){if(!C.tr||!S.has(String(C.tr.num))||(ht.no.get(String(C.tr.num))||0)>Date.now())continue;if(Math.hypot(C.p.w[0]-l.w[0],C.p.w[1]-l.w[1])*l.k<=(C.real?1.6:2.2)){cm(C);return}}if(x<22||x>200)return;let A=[l.w[0]-u.w[0],l.w[1]-u.w[1]],P=null,R=2.5,U=Ft.filter(C=>C.real),$=ft(Qt()).out.filter(C=>C.tr&&!U.some(O=>O.tr&&String(O.tr.num)===String(C.tr.num))),v=lm();for(let C of[...U,...$]){if(!C.tr||v.size&&!v.has(String(C.tr.num)))continue;let O=C.real?2.5:3.5,X=Math.hypot(C.p.w[0]-l.w[0],C.p.w[1]-l.w[1])*l.k;if(X>Math.min(R,O)||P&&P.real&&!C.real)continue;let K=C.real?C.v.next:C.p.next;if(K==null||K<0)continue;let G=E[C.tr.pat.stops[K]].w,nt=[G[0]-C.p.w[0],G[1]-C.p.w[1]];if(nt[0]*A[0]+nt[1]*A[1]<=0)continue;let W=String(C.tr.num);(ht.no.get(W)||0)>Date.now()||(R=X,P=C)}if(!P){ht.cand=null;return}let _=String(P.tr.num);if(ht.tid!==_&&!(l.acc!=null&&l.acc>50)){if(!ht.cand||ht.cand.k!==_){ht.cand={k:_,t:l.t};return}l.t-ht.cand.t<2e4||cm(P)}}let ld=9;function cm(a){let l=String(a.tr.num);na(l,"auto"),Ut=Ae=Nt=!1,re=-1,bt=a.tr,de=a.tr,Object.assign(s,{tx:a.p.w[0],ty:a.p.w[1],dist:ld}),innerWidth<=640&&(p.classList.add("peek"),y("#rc").classList.contains("min")||y("#rcgrab").click()),zn(),p._h="",Ce(),Le=0,o();let u=y("#onb");u||(u=document.createElement("div"),u.id="onb",document.body.appendChild(u)),u.innerHTML=`${__t(373)}${m(a.tr.fam)} ${m(a.tr.num)}${__t(374)}${m(E[a.tr.pat.stops[a.tr.pat.stops.length-1]].n)}${__t(375)}${ve&&ve.num===l?`${__t(377)}${m(E[zt.get(ve.sid)].n)}`:""}${__t(376)}`,u.className="on",u.querySelector("[data-onb-no]").onclick=()=>{ht.no.set(l,Date.now()+20*6e4),ht.tid="",ht.lock=!1,de=null,bt=null,p._h="",Ce(),u.className=""},u.querySelector("[data-onb-x]").onclick=()=>{u.className=""},setTimeout(()=>{u.className=""},15e3)}if(navigator.geolocation&&navigator.geolocation.watchPosition){let a=null,l=null,u=0,f=Date.now()+45e3,x=()=>!!(Ls.some(U=>U.goAt)||u>Date.now()&&!ht.lock||f>Date.now()&&!ht.tid),S=U=>{let{longitude:$,latitude:v}=U.coords,_={t:U.timestamp||Date.now(),w:Mt($,v),k:am($,v),spd:U.coords.speed,acc:U.coords.accuracy};if(!(ht.fixes.length&&ht.fixes[ht.fixes.length-1].t===_.t)){ht.fixes.push(_),ht.fixes=ht.fixes.filter(C=>_.t-C.t<12e4);{let C=ht.fixes.find(X=>_.t-X.t>=2e4),O=_.spd!=null&&_.spd>0?_.spd*3.6:C?Math.hypot(_.w[0]-C.w[0],_.w[1]-C.w[1])*_.k/((_.t-C.t)/36e5):0;O>=15&&O<250&&(_.acc==null||_.acc<300)&&(u=Date.now()+10*6e4)}try{Qt().live&&Q_()}catch{}}},A=0,P=()=>{if(!(a!=null||A))if(l=x(),l)a=navigator.geolocation.watchPosition(S,()=>{},{enableHighAccuracy:!0,maximumAge:5e3,timeout:2e4});else{let U=()=>navigator.geolocation.getCurrentPosition(S,()=>{},{enableHighAccuracy:!1,maximumAge:55e3,timeout:2e4});U(),A=setInterval(U,6e4)}};setInterval(()=>{(a!=null||A)&&x()!==l&&(R(),P())},5e3);let R=()=>{a!=null&&(navigator.geolocation.clearWatch(a),a=null),A&&(clearInterval(A),A=0)};setTimeout(P,3e3),document.addEventListener("visibilitychange",()=>{document.hidden?R():(ht.fixes=[],ht.slow=0,ht.resumeAt=Date.now(),f=Date.now()+45e3,P())})}setInterval(()=>{!document.hidden&&(Date.now()-Tt.fix>11e4||Ls.some(a=>a.goAt))&&rd(!1)},3e4);let si=a=>{try{localStorage.setItem("rod_"+a.key,JSON.stringify({st:a.st,i:a.i,walk:a.walk,open:a.open,hide:a.hide||"",goAt:a.goAt||0,platAt:a.platAt||0,xfer:a.xfer||null}))}catch{}},An=a=>a.st.length?zt.get(a.st[a.i]||a.st[0]):null;function um(a,l,u,f){if(f&&l.bus)return l.bstops.slice(1).some(A=>f.has(A))?"to":"out";if(f&&l.tr){let A=l.tr.pat.stops,P=A.indexOf(a);if(P>=0&&A.slice(P+1).some(R=>f.has(R)))return"to"}if(f&&l.tr)return"out";let x=zt.get(l.destId)??E.findIndex(A=>A.n===l.dest);if(x<0||x==null||u==null)return"otros";let S=A=>Math.hypot(E[A].w[0]-E[u].w[0],E[A].w[1]-E[u].w[1]);return S(x)<S(a)?"to":"out"}let Mr=a=>a<1?__t(319):a<60?Math.floor(a)+" min":Math.floor(a/60)+" h "+String(Math.floor(a%60)).padStart(2,"0"),hm=0,tx=/sin servicio|sense servei|suspend|interromp|interrump|no circula|no se puede garantizar|no es pot garantir/i,dm=/sin servicio|sense servei|suspend|interromp|interrump|no circula|no hi ha circulaci|cortad|tallad|corte de|tall de|servicio alternativo|servei alternatiu|por carretera|per carretera|no se puede garantizar|no es pot garantir/i,fm=/huelga|vaga\b|strike|servicios? m[ií]nimos|serveis m[ií]nims|demora|retard|retras|v[ií]a [uú]nica|una sola v[ií]a|incidencia|incidència|aver[ií]a|avaria|aturad|detenid|parad[oa]s? en|velocidad reducida|velocitat redu/i,wr=a=>{let l=a.es||a.txt;return dm.test(l)||dm.test(a.txt)?3:fm.test(l)||fm.test(a.txt)||a.lvl>=2?2:1},pm=4,cd=new Map,lc=new Map;function mm(a,l){let u=t.days.indexOf(Qt().ymd),f=u+"|"+a+"|"+[...l].join(",");if(cd.has(f))return cd.get(f);let x=!1,S=new Set,A=new Set;for(let R of st[u]||[]){let U=R.pat.stops,$=U.indexOf(a);if($>=0)for(let _=$+1;_<U.length;_++){if(l.has(U[_])){x=!0;break}S.add(U[_])}let v=-1;for(let _=1;_<U.length;_++)if(l.has(U[_])){v=_;break}if(v>0)for(let _=0;_<v;_++)A.add(U[_])}let P=x?null:[...S].filter(R=>A.has(R)&&R!==a&&!l.has(R));return cd.set(f,P),P}function ud(a,l,u,f){for(let x of f||Zn(a)){if(x.cancel||x.gone||!x.tr||x.est<l-.01)continue;let S=x.tr.pat.stops,A=S.indexOf(a);if(A<0)continue;let P=-1;for(let R=A+1;R<S.length;R++)if(u.has(S[R])){P=R;break}if(!(P<0))return{c:x,fin:x.est+(x.tr.pat.t[2*P]-x.tr.pat.t[2*A+1])}}return null}function ex(a,l,u){let f=ud(a,l+2,u,Zn(a));return f?{c:f.c,fin:f.fin,m:f.c.est-l,lost:!1}:null}function hd(a,l,u,f,x){let S=null,A=new Map,P=Zn(a).filter(R=>!R.cancel&&!R.gone&&R.tr&&R.est-x.min>=f).slice(0,8);for(let R of P){let U=R.tr.pat.stops,$=U.indexOf(a);if(!($<0))for(let v of u){let _=U.indexOf(v);if(_<=$)continue;let C=R.est+(R.tr.pat.t[2*_]-R.tr.pat.t[2*$+1]);A.has(v)||A.set(v,Zn(v));let O=ud(v,C+pm,l,A.get(v));O&&(!S||O.fin<S.finAt-.01||Math.abs(O.fin-S.finAt)<.01&&R.est>S.x.est)&&(S={T:v,x:R,finAt:O.fin})}}return S}function nx(a,l,u,f,x){let S=l.T,A=Zn(S),P=l.fin,R=[];for(let v of A){if(R.length>=5)break;if(v.cancel||v.gone||!v.tr)continue;let _=v.tr.pat.stops,C=_.indexOf(S),O=-1;for(let G=C+1;G<_.length;G++)if(P.has(_[G])){O=G;break}if(O<0||u.x&&u.x.arr!=null&&v.est<u.x.arr-.01)continue;let X=v.est+(v.tr.pat.t[2*O]-v.tr.pat.t[2*C+1]),K=f&&f.c===v;R.push(`<li class="hr${K?" pin":""}" style="--lc:${Z[v.fam]||"#6b7385"}"><span class="hrt"><b>${rt(v.est)}</b><small>${u.x&&u.x.arr!=null?v.est-u.x.arr<2?__t(378):Math.floor(v.est-u.x.arr)+" "+__t(379):""}</small></span><span class="hrd">${Ni(v.fam+" \xB7 "+v.dest,v.fam)}<small class="hro">${__t(380)} ${rt(X)}${v.num?" \xB7 "+__t(381)+m(v.num):""}</small></span><span class="hrm">${v.dl>=1?`<em class="dl ${$i(v.dl)}">+${Math.round(v.dl)}</em>`:""}${v.plat?`${__t(271)}${m(v.plat)}</i>`:""}</span></li>`)}let U=(()=>{let v=[];for(let _ of l.cands){let C=hd(An(a),P,[_],0,x);C&&v.push([_,C.finAt])}return v.sort((_,C)=>_[1]-C[1]),v.filter(([_,C])=>C<=v[0][1]+30||l.fixed&&_===S).slice(0,4)})(),$=U.length>1||l.fixed?`<div class="hxst"><span>${__t(382)}:</span><button type="button" data-hxf="${a.key}:" class="${l.fixed?"":"on"}">${__t(383)}</button>${U.map(([v])=>`<button type="button" data-hxf="${a.key}:${m(E[v].id)}" class="${l.fixed&&v===S?"on":""}">${m(E[v].n)}</button>`).join("")}</div>`:"";return`<div class="hxfer"><div class="hdir">\u21C4 ${__t(382)} ${Ni(E[S].n,f?f.c.fam:"")} \u2192 ${m(l.finName)}</div><ol class="hxl">${R.join("")||`<li class="hr"><span class="hrd">${__t(384)}</span></li>`}</ol>${$}</div>`}let gm=new Set;function ix(a,l,u){gm.has(a)||(gm.add(a),Am(l,u,a))}function sx(a,l,u){let f=An(a);if(a===Tt){if(ht.tid)return"";if(f==null)return`${__t(385)}${Tt.err?m(Tt.err)+__t(386):__t(387)}</small></span><span class="hchev">\u27F3</span></button></div>`;if([Xe,$e].find(Ot=>Ot.st.includes(Tt.st[0])&&Tt.dist[Tt.st[0]]<1.5)||Date.now()-Tt.fix>10*6e4)return"";a.walk=br(Tt.dist[a.st[a.i]]||0)}if(f==null){let it=Tt.st.length?zt.get(Tt.st[0]):null,Ot=a===$e?Xe:$e,Xt=it!=null&&!Ot.st.includes(Tt.st[0]);return`<div class="hplace"><div class="hhead hnew"><span class="hico">${a.ico}</span><span class="htit"><b>${a.name}</b><small>${Xt?`${__t(388)}${m(E[it].n)}</b>`:__t(389)}</small></span>${Xt?`<button type="button" class="hpick" data-hnear="${a.key}${__t(390)}`:""}<button type="button" class="hpick alt" data-hset="${a.key}">${Xt?__t(391):__t(392)}</button></div></div>`}nm(f,()=>ge(!0));let x=a===Tt?null:a===Xe?$e:Xe,S=x?An(x):null,A=S!=null&&S!==f?S:j_,P=S!=null&&S!==f?x===$e?__t(393):"casa":"Barcelona",R=E[f].fams,U=new Set([...R].filter(it=>Lt.has(it))),$=U.size<R.size,v=!1;U.size||(U=new Set(R),$=!1,v=!0);let _=Tt.w?Math.hypot(E[f].w[0]-Tt.w[0],E[f].w[1]-Tt.w[1])*Tt.k:null,C=_!=null&&Date.now()-Tt.fix<10*6e4;a.platAt&&Date.now()-a.platAt>45*6e4&&(a.platAt=0,si(a)),ht.tid&&a.platAt&&(a.platAt=0,si(a));let O=a!==Tt&&!!a.platAt&&!ht.tid,X=a===Tt||C&&_>3&&!a.goAt&&!O,K=O||a!==Tt&&C&&(_<.08&&Tt.acc<=40||_<.15&&Tt.acc<=100&&Date.now()-Tt.fix<3*6e4)&&!(a===Xe&&Tt.homeW&&Math.hypot(Tt.homeW[0]-Tt.w[0],Tt.homeW[1]-Tt.w[1])*Tt.k<.05),G=a.goAt?(Date.now()-a.goAt)/6e4:null;G!=null&&(G>60||K)&&(a.goAt=0,si(a)),C&&a!==Tt&&Tt.fix!==a._khFix&&(a._khFix=Tt.fix,(a._kh=(a._kh||[]).filter(it=>Date.now()-it.t<6*6e4)).push({t:Date.now(),km:_}));let nt=C&&a!==Tt&&_<=3&&!(a._noWay>Date.now())&&(a._kh||[]).some(it=>Date.now()-it.t>=6e4&&Date.now()-it.t<=5*6e4&&it.km-_>=.08),W=!K&&a!==Tt&&(nt||!!a.goAt),Vt=W?C&&_<=3?br(_):Math.max(0,a.walk-G):0,oe=C&&Tt.acc<=150&&a!==Tt&&_>.15&&_<=3,ee=oe&&!W&&!K&&!X&&br(_)>=a.walk+5?br(_):null,tn=Zn(f),Ee=tn.filter(it=>!Z[it.fam]||Lt.has(it.fam)||v),be=X||K?0:W?Vt:ee??a.walk,vn=V.alerts.filter(it=>[...it.fams].some(Ot=>U.has(Ot))||it.stops&&it.stops.has(f)),sn=vn.some(it=>tx.test(it.es||it.txt)),pn={to:[],out:[],otros:[],all:Ee},gi=P!=="Barcelona"?new Set(x.st.map(it=>zt.get(it)).filter(it=>it!=null)):null,_i=null;if(gi&&a!==Tt){let it=mm(f,gi);if(it&&it.length){let Ot=a.xfer!=null?zt.get(a.xfer):null,Xt=Ot!=null&&it.includes(Ot)?[Ot]:it,ae=hd(f,gi,Xt,be,l);ae&&(_i=Object.assign(ae,{fin:gi,finName:E[A].n,cands:it,fixed:Ot!=null&&it.includes(Ot)}),nm(ae.T,()=>ge(!0)),A=ae.T,gi=new Set([ae.T]))}}Ee.forEach(it=>pn[um(f,it,A,gi)].push(it));let gc="";if(gi&&!pn.to.length&&Ee.length<tn.length){let it=tn.filter(Ot=>!Ee.includes(Ot)&&um(f,Ot,A,gi)==="to");it.length&&(pn.to=it,gc=[...new Set(it.map(Ot=>Ot.fam))].sort(B).join(", "))}let Tx=it=>{if(it==="all")return __t(394);let Ot=ae=>(ae.find(yn=>yn.fam)||{}).fam;if(it==="to")return __t(395)+Ni(P==="Barcelona"?"Barcelona":E[A].n,Ot(pn.to)||[...U][0])+(()=>{let ae=$&&!gc?[...U].filter(yn=>pn.to.some(oi=>oi.fam===yn)).sort(B):[];return ae.length?`<span class="hwf" title="${__t(396)}">${ae.map(Mn).join("")}</span>`:""})();let Xt=[];for(let ae of pn[it])Xt.some(yn=>yn[0]===ae.dest)||Xt.push([ae.dest,ae.fam]);return Xt.length?__t(395)+Xt.slice(0,2).map(([ae,yn])=>Ni(ae,yn)).join(" "):__t(397)},js=ln.get(a.key);js&&!tn.some(it=>String(it.num)===js&&!it.gone)&&(Rn.num=js,Rn.until=Date.now()+90*6e4,ri(a.key,null));let la=it=>{let Ot=js&&pn[it].find(rn=>String(rn.num)===js&&!rn.gone);if(Ot&&Ot.cancel)return{cls:"v-miss",pin:1,x:Ot,big:__t(398),small:`${rt(Ot.est)} \xB7 ${Ot.fam}${__t(399)}${Ot.dest}${Ot.num?" \xB7 "+__t(381)+Ot.num:""}`,warn:""};let Xt=Ot||pn[it].find(rn=>!rn.cancel&&!rn.gone&&rn.est-l.min>=be);if(!Xt){let rn=pn[it].find(mn=>!mn.cancel);return rn&&!X?{cls:"v-miss",big:__t(400),small:`${__t(401)}${rt(rn.est)}${__t(402)}${Mr(rn.est-l.min)}${__t(403)}`}:{cls:"v-no",big:__t(404),small:__t(405)}}let ae=Xt.est-l.min-be,yn=X||K?"v-info":W?ae<1.5?"v-warn":"v-ok":ae<1.5?"v-bad":ae<5?"v-warn":"v-ok",oi=Xt.ghost?pn[it].find(rn=>!rn.cancel&&!rn.ghost&&rn.live&&rn.est>Xt.est):null;if(Ot&&ae<0&&!X&&!K){let rn=pn[it].find(mn=>!mn.cancel&&!mn.gone&&!mn.ghost&&mn!==Xt&&mn.est-l.min>=be);return{cls:"v-miss",pin:1,miss:1,nxt:rn,x:Xt,ghost:!!Xt.ghost,big:__t(406),small:`${rt(Xt.est)} \xB7 ${Xt.fam}${__t(399)}${Xt.dest}${Xt.plat?__t(183)+Xt.plat:""}${Xt.num?" \xB7 "+__t(381)+Xt.num:""}`,warn:rn?`\u27A1\uFE0F ${__t(407)}: ${rn.est-l.min-be<1?__t(408):__t(409)+" "+Mr(rn.est-l.min-be)} \xB7 ${rt(rn.est)}${rn.arr!=null?" \u2192 "+rt(rn.arr):""}${rn.plat?__t(183)+rn.plat:""}${rn.num?" \xB7 "+__t(381)+rn.num:""}`:""}}return{pin:Ot?1:0,cls:yn,ghost:!!Xt.ghost,soft:!Xt.live&&!Xt.ghost&&!Xt.unconf&&!Xt.cancel?Xt.rodLive?__t(410):__t(411):"",big:X||K?ae<1?__t(412):__t(413)+Mr(ae):W?ae<1.5?__t(414):__t(415)+Mr(ae)+__t(416):ae<1.5?__t(417):__t(418)+Mr(ae),warn:Xt.unconf?"\u26A0\uFE0F "+__t(419):Ot&&!Xt.live&&Xt.rodLive&&!Xt.ghost||!Xt.ghost&&Xt.noPos&&Ot?"":!Xt.ghost&&Xt.late&&Ot?__t(420):Xt.ghost?`\u26A0\uFE0F ${__t(421)}${oi?`${__t(422)}${rt(oi.est)}`:""}`:sn?__t(423):"",small:`${Xt.bus?__t(424):""}${rt(Xt.est)} \xB7 ${Xt.fam}${__t(399)}${Xt.dest}${Xt.plat?__t(183)+Xt.plat:""}${Xt.dl>=1?` \xB7 +${Math.round(Xt.dl)} min`:""}${Xt.arr!=null?`${__t(425)}${rt(Xt.arr)}`:""}${Xt.num?" \xB7 "+__t(381)+Xt.num:""}`,x:Xt}},Ax=gi||new Set([A]),Cx=it=>{let Ot=it.tr;if(!Ot)return null;let Xt=Ot.pat.stops,ae=Xt.indexOf(f);if(ae<0)return null;let yn=-1;for(let oi=ae+1;oi<Xt.length;oi++)if(Ax.has(Xt[oi])){yn=oi;break}return yn<0?null:it.est+(Ot.pat.t[2*yn]-Ot.pat.t[2*ae+1])};pn.to.forEach(it=>{it.arr=Cx(it)});let Co=pn.out.length?"out":"otros",Ke=la("to"),Ro=la(Co);if(K||a===Tt&&Tt.acc<=40&&(Tt.dist[a.st[a.i]]||9)<.08){for(let it of[Ke.x,Ro.x].concat(a===Tt?[la("all").x]:[]))if(it&&ln.has(a.key)&&String(ln.get(a.key))===String(it.num)&&!it.cancel&&it.est-l.min<=2&&it.est-l.min>-.5){let Ot="w"+it.num+"|"+Math.round(it.sm);Tm.has(Ot)||(Tm.add(Ot),ec(`${__t(426)}${it.fam}${__t(399)}${it.dest}`,`${Math.round(it.est-l.min)<=1?__t(427):__t(428)+Math.round(it.est-l.min)+" min"}${__t(399)}${E[f].n}${it.plat?__t(183)+it.plat:""}`))}}let Vm=lt()&&l.live,Hm=U.size===1,Rx=it=>{let Ot=it.est-l.min;return X?it.cancel?"cx":Ot<0?"u-miss":"u-info":it.cancel?"cx":Ot<be?"u-miss":Ot<be+1.5?"u-now":Ot<be+5?"u-soon":"u-ok"},Ix=it=>{if(it.gone)return`<li class="hr u-gone${it.live?" on":""}${po(it)?" sel":""} go" data-dk="${u.push(it)-1}" title="Ya ha salido: toca para ver d\xF3nde va"><span class="hrt"><b>${rt(it.est)}${__t(429)}${Ss(Math.max(1,Math.round(l.min-it.est))+" min")}</small></span><span class="hrd">${Ni((Hm?"":it.fam+" \xB7 ")+it.dest,it.fam)}${__t(430)}${m(it.num)}</small></span><span class="hrm">${it.dl>=1?`<em class="dl ${$i(it.dl)}">+${Math.round(it.dl)}</em>`:""}</span></li>`;let Ot=!it.cancel&&it.est-l.min<be,Xt=Qp(it.num);return`<li class="hr ${Rx(it)}${it.live?" on":""}${it.ghost?" gh":""}${po(it)?" sel":""}${js&&String(it.num)===js?" pin":""}${mi.some(ae=>{let yn=Qr(ae,t.days.indexOf(l.ymd));return yn&&String(yn.num)===String(it.num)})?" fav":""} go" style="--lc:${Z[it.fam]||"#6b7385"}" data-dk="${u.push(it)-1}" title="${it.cancel?__t(398):Ot?__t(406):__t(431)}"><span class="hrt"><b>${it.cancel?"\u2715":Ot?rt(it.est):Mr(it.est-l.min)}</b><small>${it.cancel?__t(148):it.late?__t(432):Ot?__t(433):it.ghost?__t(434):rt(it.est)}</small></span><span class="hrd">${it.bus?'<i class="bus" title="Autob\xFAs que sustituye al tren por obras">\u{1F68C}</i>':""}${Ni((Hm?"":it.fam+" \xB7 ")+it.dest,it.fam)}${Xt.length?`<i class="cr" title="${m(Xt.map(ae=>Ys(ae.kind)).join(" \xB7 "))}">${Xt.slice(0,2).map(ae=>rs[ae.kind]).join("")}</i>`:""}${it.arr!=null?`${__t(435)}${rt(it.arr)}${it.num?" \xB7 "+__t(381)+m(it.num):""}${(()=>{let ae=it.num&&ql(it.num);return ae&&ae.n>=5&&ae.late/ae.n>=.5?` \xB7 <b class="slate">${__t(436)} \xB7 ${ae.late} ${__t(145)} ${ae.n} ${__t(142)}</b>`:""})()}</small>`:""}${it.obs?`<small class="hro">${m(it.obs)}</small>`:""}${it.unconf?`<small class="hro unc">${__t(437)}</small>`:""}</span><span class="hrm">${!it.cancel&&it.dl>=1?`<em class="dl ${$i(it.dl)}">+${Math.round(it.dl)}</em>`:""}${it.plat?`${__t(271)}${m(it.plat)}</i>`:""}</span></li>`},Io=(it,Ot,Xt)=>`<div class="hcol"><div class="hdir">${Tx(it)}${Xt?`<button type="button" class="hhide" data-hhide="${a.key}:${Xt}" title="${__t(438)}">\u2715</button>`:""}</div><div class="hv ${Ot.cls}${Ot.ghost||Ot.pin&&Ot.x&&Ot.x.noPos&&!So([Ot.x.fam]).length?" gh":""}${Ot.x?" go":""}"${Ot.miss&&Ot.nxt&&Ot.nxt.num?` data-pinnext="${a.key}:${m(Ot.nxt.num)}" title="${__t(439)}"`:Ot.x?` data-dk="${u.push(Ot.x)-1}"`:""}><b>${Ot.big}</b>${Ot.pin?`<button type="button" class="hunpin" data-unpin="${a.key}" title="${__t(440)}">\u{1F4CC} ${__t(441)} \u2715</button>`:""}<small>${m(Ot.small)}${ee!=null&&it!==Co?` \xB7 <span class="nw hfar2">${ee}\xA0min ${__t(442)}</span>`:""}${Ot.soft?` \xB7 <span class="hsoft" title="${__t(443)}">\u{1F4E1} ${m(Ot.soft)}</span>`:""}</small>${Ot.pin&&Ot.x&&Ot.x.num?(ae=>ae?`<span class="hwhere">\u{1F4CD} ${m(ae)}</span>`:"")(hc(Ot.x.num)):""}${Ot.warn?`<span class="hvw">${m(Ot.warn)}</span>`:""}</div><ol>${pn[it].slice(0,(a.more?it==="all"||a.hide?20:10:it==="all"?7:a.hide?8:4)+pn[it].filter(ae=>ae.gone).length).map(Ix).join("")||"<li><span>\u2014</span></li>"}</ol></div>`;if(a===Tt){let it=la("all");var Px=it.x?`<span class="nw">${it.big}</span> \xB7 <span class="nw"><b>${rt(it.x.est)}</b> ${m(it.x.fam)}${__t(444)}${m(it.x.dest)}${it.x.plat?'<span class="nw">'+__t(183)+m(it.x.plat)+"</span>":""}`:it.big}let en=_i&&Ke.x&&Ke.x.arr!=null?ex(_i.T,Ke.x.arr,_i.fin):null;if(en){let it=a._xc;it&&it.leg===String(Ke.x.num)&&it.conn!==String(en.c.num)&&it.est<en.c.est&&it.live?(en.lost=!0,en.missed=it.est):(!it||it.leg!==String(Ke.x.num)||!it.live||it.conn===String(en.c.num))&&(a._xc={leg:String(Ke.x.num),conn:String(en.c.num),est:en.c.est,live:!!(V.delays&&Date.now()-(a._xt||(a._xt=Date.now()))>3e4)})}en&&(lc.set(E[_i.T].id,{fam:en.c.fam,est:en.c.est,plat:en.c.plat,lost:en.lost}),en.lost&&ln.get(a.key)===String(Ke.x.num)&&ix("xf"+Ke.x.num+"|"+en.c.num,`\u21C4 ${__t(445)} ${E[_i.T].n}`,`${__t(446)}: ${en.c.fam} ${rt(en.c.est)} \u2192 ${rt(en.fin)}${en.c.plat?" \xB7 v\xEDa "+en.c.plat:""}`));let Cd=en?`<br><span class="nw hxf ${en.lost?"xbad":en.m<4?"xwarn":"xok"}">\u21C4 ${en.lost?`${__t(447)} ${rt(en.missed)} \xB7 ${__t(185)} `:`${m(E[_i.T].n)} \xB7 `}${Mn(en.c.fam)} <b>${rt(en.c.est)}</b> \u2192 <b>${rt(en.fin)}</b>${en.lost?"":` \xB7 ${Math.floor(en.m)} ${__t(448)}`}</span>`:_i?`<br><span class="nw hxf xbad">\u21C4 ${__t(449)} ${m(E[_i.T].n)}</span>`:"",Lx=a===Tt?Px:_i&&Ke.x?`<span class="nw">${Ke.big}${Ke.x.plat?__t(183)+m(Ke.x.plat):""}</span> \xB7 <span class="nw"><b>${rt(Ke.x.est)}</b>${Ke.x.arr!=null?` \u2192 ${m(E[_i.T].n)} <b>${rt(Ke.x.arr)}</b>`:""}</span>${Cd}`:Ke.x?`<span class="nw">${Ke.big}${Ke.x.plat?__t(183)+m(Ke.x.plat):""}</span> \xB7 <span class="nw"><b>${rt(Ke.x.est)}</b>${Ke.x.arr!=null?`${__t(451)}${rt(Ke.x.arr)}</b>`:""}${__t(450)}${m(P)}</span>`:__t(452)+m(P),qe=a===Tt?(it=>it.pin?it:null)(la("all")):Ke.pin?Ke:Ro.pin?Ro:null;qe&&qe.x&&ln.has(a.key)&&Cm(qe,E[f].n);let Dx=qe?a===Tt?"all":qe===Ke?"to":Co:"",ca=!!(qe&&(qe.ghost||qe.x.noPos&&!So([qe.x.fam]).length||qe.x.cancel)),Rd=!!(qe&&qe.miss),ua=ca?pn[Dx].find(it=>!it.cancel&&!it.ghost&&!it.gone&&it.est>qe.x.est-.01&&it!==qe.x&&it.est-l.min>=(X||K?0:be)):null,Nx=Rd?`<span class="nw">${__t(453)} <b>${rt(qe.x.est)}</b></span>${qe.nxt?`<br><span class="nw hnx">${__t(446)} <b>${rt(qe.nxt.est)}</b>${qe.nxt.arr!=null?` \u2192 <b>${rt(qe.nxt.arr)}</b>`:""}</span>`:""}`:"",Ux=ca?`<span class="nw">\u26A0\uFE0F ${qe.x.cancel?__t(398):qe.ghost?__t(454):__t(455)}</span>${qe.x.cancel?"":` \xB7 <span class="nw"><b>${rt(qe.x.est)}</b>${qe.x.arr!=null?` \u2192 <b>${rt(qe.x.arr)}</b>`:""}</span>`}${ua?` \xB7 <span class="nw">${__t(185)} <b>${rt(ua.est)}</b>${ua.arr!=null?` \u2192 <b>${rt(ua.arr)}</b>`:""}${ua.plat?__t(183)+m(ua.plat):""}</span>`:""}`:"";return`<div class="hplace ${a.open?"open":""}${qe?" pinned":""}${ca?" pgh":""}"><button type="button" class="hhead" data-ht="${a.key}"><span class="hico">${a.ico}</span><span class="htit"><b class="hstb"><span class="hstn">${m(E[f].n)}</span>${ox(a,E[f].id)}${qe&&qe.x.num?`<i class="hpn">\u{1F4CC} ${m(qe.x.num)}</i>`:""}</b>${a.open?_i&&Cd?`<small class="nofit">${Cd.replace(/^<br>/,"")}</small>`:"":`<small class="c${Rd||ca&&qe.x.cancel?"bad":ca?"warn":sn?"bad":Ke.cls.slice(2)}">${ca?Ux:Rd?Nx:Lx}</small>${qe&&qe.x&&qe.x.num?(it=>it?`<small class="nofit hwh2">\u{1F4CD} ${m(it)}</small>`:"")(hc(qe.x.num)):""}`}${a.open?"":(it=>{if(!it||it.num==null)return"";let Ot=t.days.indexOf(l.ymd),Xt=it.tr,ae=Xt?Xt.t0+Xt.pat.t[1]-(Xt.day===Ot-1?1440:Xt.day===Ot+1?-1440:0)+(it.dl||0):null,yn=!it.live&&!it.ghost&&!it.unconf&&ae!=null&&ae>l.min-1,oi=it.cancel?["bad",__t(398)]:it.live?["ok",__t(456)]:yn?["wait",__t(457)]:["warn",__t(454)];return`<small class="nofit hrel ${oi[0]}"><b>${oi[1]}</b></small>`})(qe&&qe.x||Ke.x)}</span><span class="hchev">\u25BE</span></button>`+(a.open?`
      <div class="hbody${a===Tt||a.hide==="out"||a.hide==="to"?" r1":""}">
        ${a===Tt?`<div class="hwalk">\u{1F4CD} A ${(()=>{let it=Tt.dist[a.st[a.i]]||0;return it<1?Math.round(it*100)*10+" m":it.toFixed(1).replace(".",",")+" km"})()}${__t(459)}${a.walk}${__t(460)}`:""}
        ${O?`<div class="hwalk away">${__t(462)}<a data-hplat="${a.key}${__t(461)}`:K&&!ht.tid?`${__t(463)}${a.key}${__t(464)}`:W?`${__t(465)}${Math.round(Vt)} min</b>${C&&_<=3?__t(466):""} \xB7 <a data-hgo="${a.key}:0">${__t(467)}</a></div>`:""}${X&&a!==Tt?`<div class="hwalk away hawg"><span class="hawt">\u{1F4CD} ${__t(468)} ${_<10?_.toFixed(1).replace(".",","):Math.round(_)} km: ${__t(469)}</span>${fd(a)}${pd(a)}</div>`:""}${X&&a===Tt?`<div class="hwalk hgw">${fd(a)}${pd(a)}</div>`:""}<div class="hwalk"${X?" hidden":""}>${(()=>{let it=js||(()=>{let ae=(pn.to.length?pn.to:Ee).filter(mn=>mn.num!=null&&!mn.cancel),yn=ae.filter(mn=>mn.tr&&mn.tr.pat.stops[0]===f&&mn.est>=l.min-1&&mn.est<=l.min+3).sort((mn,ha)=>mn.est-ha.est);if(yn[0])return yn[0].num;let oi=[...ae];if(gi&&a!==Tt){let mn=t.days.indexOf(l.ymd),ha=new Set(ae.map(Id=>String(Id.num))),Gm=(Id,Ox)=>{for(let as of Id||[]){if(ha.has(String(as.num))||Z[as.fam]&&!Lt.has(as.fam)&&!v)continue;let Pd=as.pat.stops,_c=Pd.indexOf(f);if(_c<0||_c===Pd.length-1||!Pd.slice(_c+1).some(Fx=>gi.has(Fx)))continue;let Wm=V.delays&&V.delays.get(as.tid),Ld=as.t0+as.pat.t[2*_c+1]-Ox+(typeof Wm=="number"?Math.max(0,Wm/60):0);Ld>l.min+1||Ld<l.min-15||(ha.add(String(as.num)),oi.push({num:as.num,est:Ld,tr:as}))}};mn>=0&&(Gm(st[mn],0),mn>0&&Gm(st[mn-1],1440))}let rn=oi.filter(mn=>mn.est<=l.min+1&&mn.est>=l.min-15).sort((mn,ha)=>ha.est-mn.est);return rn[0]?rn[0].num:Ke&&Ke.x&&Ke.x.num})(),Ot=it!=null?tn.find(ae=>String(ae.num)===String(it)):null,Xt=ad(Ot,l);return it!=null&&!ht.tid?`<button type="button" class="hgo hboard${Xt?"":" off"}" data-hboard="${m(String(it))}"${Xt?"":` data-hbwhen="${Ot?rt(Ot.est):""}"`}>\u{1F686} ${Xt&&it?`${__t(470)} ${m(String(it))}`:__t(471)}</button>`:""})()}${K||ht.tid?"":`<button type="button" class="hgo hplat" data-hplat="${a.key}:1">${__t(472)}</button>`}${fd(a)}${pd(a)}</div>
        <div class="hcfgp"${a._cfg?"":" hidden"}><div class="hcl">${__t(473)}</div><div class="hst">${a.st.map((it,Ot)=>{let Xt=zt.get(it);return Xt==null?"":`<button type="button" data-hs="${a.key}:${Ot}" class="${Ot===a.i?"on":""}">${m(E[Xt].n.replace(/^Barcelona[ -]+(?=\S)/,"")||E[Xt].n)}${Ot===a.i?" \u2713":""}</button>`}).join("")}</div>${a!==Tt?`<div class="hwrow"><div><div class="hcl">${__t(474)}</div><div class="hstep2"><button type="button" data-hw="${a.key}:-1" aria-label="\u2212">\u2212</button><b>${a.walk} min</b><button type="button" data-hw="${a.key}:1" aria-label="+">+</button></div></div>${oe?`<div class="hposc"><div class="hcl">\u{1F4CD} ${__t(475)}</div><div class="hpv"><span><b>${br(_)} min</b><small>${_<1?Math.round(_*100)*10+" m":_.toFixed(1).replace(".",",")+" km"}</small></span>${br(_)!==a.walk?`<button type="button" data-hwset="${a.key}:${br(_)}">${__t(476)}</button>`:""}</div></div>`:""}</div>`:""}<a class="hcfgmap" data-hcfgmap="${f}">\u2139\uFE0F ${__t(477)}</a></div>
        ${(()=>{let it=mi.filter(Ot=>a.st.includes(Ot.sid));return it.length?`<div class="hfav">${it.map(Ot=>{let Xt=Qr(Ot,t.days.indexOf(l.ymd)),ae=Xt&&Ee.find(yn=>String(yn.num)===String(Xt.num));return`\u2B50 <b>${Ot.t}</b> ${m(Ot.fam)} ${ae?ae.cancel?__t(478):ae.gone?__t(268):ae.dl>=1?`<em class="dl ${$i(ae.dl)}">+${Math.round(ae.dl)}${__t(479)}${rt(ae.est)}`:__t(480):__t(481)}`}).join("<br>")}</div>`:""})()}
        ${$&&gc?`${__t(482)}${[...U].sort(B).map(Mn).join(" ")}${__t(483)}${P}${__t(484)}${gc}${__t(485)}`:v?`${__t(486)}${[...Lt].sort(B).slice(0,3).map(Mn).join(" ")}${__t(487)}`:""}
        ${vn.length?`<div class="hal ${sn?"bad":""}${Sd.v?" open":""}" data-halx>\u26A0\uFE0F ${xo(vn[0])} ${m(vn[0].txt)} <small>${vo(vn[0])}</small>${vn.length>1?` <a data-hal>+${vn.length-1}${__t(488)}`:""}</div>`:`${__t(489)}${[...U].sort(B).join(", ")}</div>`}
        
        ${a===Tt?`<div class="hcols one">${Io("all",la("all"))}</div>`:a.hide==="out"?`<div class="hcols one">${Io("to",Ke)}</div><a class="hshow" data-hshow="${a.key}${__t(490)}`:a.hide==="to"?`<div class="hcols one">${Io(Co,Ro)}</div><a class="hshow" data-hshow="${a.key}${__t(490)}`:`<div class="hcols">${Io("to",Ke,"to")}${Io(Co,Ro,"out")}</div>`}
        ${_i?nx(a,_i,Ke,en,l):""}
        ${Ee.length>(a===Tt?7:8)?`<button type="button" class="hmore" data-hmore="${a.key}">${a.more?__t(124):__t(491)}</button>`:""}
        <div class="hsrc"><span class="hsrcT" hidden title="${Vm?Bt.get(E[f].id)?.d?__t(492):__t(493):__t(494)} \xB7 \u25CF = ${__t(495)}">${Vm?Bt.get(E[f].id)?.d?__t(496):__t(497):__t(267)}</span><a data-hmap="${f}${__t(458)}${a===Tt?__t(498):`<a data-hset="${a.key}${__t(499)}`}${a===$e?`${__t(500)}`:""}</div>
      </div>`:"")+"</div>"}let dd={v:(()=>{try{return localStorage.getItem("rod_cfgseen")==="1"}catch{return!1}})()},rx='<span class="ico" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M19.42 10.34 L21.90 10.60 L21.90 13.40 L19.42 13.66 L18.42 16.07 L19.99 18.02 L18.02 19.99 L16.07 18.42 L13.66 19.42 L13.40 21.90 L10.60 21.90 L10.34 19.42 L7.93 18.42 L5.98 19.99 L4.01 18.02 L5.58 16.07 L4.58 13.66 L2.10 13.40 L2.10 10.60 L4.58 10.34 L5.58 7.93 L4.01 5.98 L5.98 4.01 L7.93 5.58 L10.34 4.58 L10.60 2.10 L13.40 2.10 L13.66 4.58 L16.07 5.58 L18.02 4.01 L19.99 5.98 L18.42 7.93Z"/><circle cx="12" cy="12" r="3"/></svg></span>',ax='<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 10v4h3l6 4V6L6 10z"/><path d="M16 9a4 4 0 0 1 0 6M19 6.5a8 8 0 0 1 0 11"/></svg>',fd=a=>{if(!V.url||!V.repOk)return"";let l=K_(a)||a!==Tt&&!!a.platAt&&!ht.tid;return`<button type="button" class="hgo hrepb${l?" at":""}" data-hrep="${a.key}" title="${__t(501)}" aria-label="${__t(501)}">${ax}${l?`<span>${__t(502)}</span>`:""}</button>`};function _m(a){let l=zt.get(a);if(l==null)return;let u=y("#rsheet");u&&u.remove(),u=document.createElement("div"),u.id="rsheet";let f=ic("",a),x=f.length?`<div class="rsa">${f.map(A=>`<div class="rsr"><span class="rsn">${rs[A.kind]} <span><b>${m(Ys(A.kind))}</b><small>${tm(A)}</small></span></span>${sc.has(A.id)&&!rc(A)?`<small class="rsok">\u2713 ${__t(336)}</small>`:Js.has(A.id)&&!rc(A)?`<span class="rsv"><small class="rsok">\u2713 ${__t(337)}</small><button type="button" data-rx="${A.id}">${__t(338)}</button></span>`:`<span class="rsv"><button type="button" data-rv="${A.id}:1">\u2713 ${__t(340)}</button><button type="button" data-rv="${A.id}:-1">\u2715 ${A.kind==="ascensor"?__t(342):__t(343)}</button></span>`}</div>`).join("")}</div>`:"";u.innerHTML=`<div class="rsbg" data-rsx></div><div class="rsp" role="dialog" aria-label="${__t(503)} ${m(E[l].n)}">${x}<div class="rsh"><b>${__t(503)} ${m(E[l].n)}</b><small>${__t(346)}</small></div><div class="rsl">${Jp.map(A=>`<button type="button" data-rk="${A}" data-rn="" data-rs="${m(a)}" data-rl="">${rs[A]} <span>${m(Ys(A))}</span></button>`).join("")}</div><button type="button" class="rsc" data-rsx>${__t(504)}</button></div>`,document.body.appendChild(u),nd(u);let S=()=>{u.classList.remove("on"),setTimeout(()=>u.remove(),250)};u.querySelectorAll("[data-rsx]").forEach(A=>A.onclick=S),u.querySelectorAll("[data-rk],[data-rv],[data-rx]").forEach(A=>A.addEventListener("click",S)),requestAnimationFrame(()=>u.classList.add("on"))}let ox=(a,l)=>{let u=V.url&&V.repOk?ic("",l):[];return u.length?` <span class="hsti" data-hrs="${a.key}" role="button" aria-label="${m(u.map(f=>Ys(f.kind)).join(" \xB7 "))}">${u.slice().sort((f,x)=>({cancel:0,via:0,retraso:1}[f.kind]??2)-({cancel:0,via:0,retraso:1}[x.kind]??2)).slice(0,3).map(f=>`<span class="${{cancel:"ub",via:"ub",retraso:"uw"}[f.kind]||""}" title="${m(Ys(f.kind))}">${rs[f.kind]}</span>`).join("")}</span>`:""},pd=a=>`<button type="button" class="hgo hcfg${a._cfg?" on":""}${dd.v?"":" new"}" data-hcfg="${a.key}" title="${__t(505)}" aria-label="${__t(505)}">${rx}</button>`,Vi={on:(()=>{try{return localStorage.getItem("rod_push")==="1"}catch{return!1}})(),busy:!1},xm=/iPhone|iPad|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,vm=()=>matchMedia("(display-mode: standalone)").matches||navigator.standalone===!0,Er=new Set((()=>{try{return JSON.parse(localStorage.getItem("rod_aloff")||"[]")}catch{return[]}})()),cc=()=>{let a=new Set;return[...Xe.st,...$e.st].forEach(l=>{let u=zt.get(l);u!=null&&E[u].fams.forEach(f=>a.add(f))}),[...a].sort(B)},Mo=()=>({stations:[...Xe.st,...$e.st],lines:cc().filter(a=>!Er.has(a))}),lx=a=>Uint8Array.from(atob(a.replace(/-/g,"+").replace(/_/g,"/")+"===".slice((a.length+3)%4)),l=>l.charCodeAt(0));async function ym(){return!("serviceWorker"in navigator)||!("PushManager"in window)||location.protocol!=="https:"?null:await navigator.serviceWorker.getRegistration()||navigator.serviceWorker.register("./sw.js")}async function Sm(a){let u=await(await fetch(ce()+"/push/subscribe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sub:a.toJSON(),...Mo()})})).json();if(!u.ok)throw new Error(u.err||"error")}function md(){let a=An(Xe),l=An($e);if(a==null||l==null)return a!=null?Xe:l!=null?$e:null;if(Tt.w&&Date.now()-Tt.fix<3*36e5){let u=f=>Math.hypot(E[f].w[0]-Tt.w[0],E[f].w[1]-Tt.w[1]);return u(a)<=u(l)?Xe:$e}return new Date().getHours()<13?Xe:$e}function bm(a){let l=md(),u=l===Xe?$e:Xe,f=l&&An(l),x=u&&An(u);if(f==null||x==null)return!0;let S=(a.es||"")+" "+(a.txt||""),A=t.days.indexOf(Qt().ymd),P=Qt(),R=[...new Set([...S.matchAll(/\btr(?:en|ain)s?\s*(?:n[º°o.]\s*)?(\d{4,6})\b/gi)].map($=>$[1]))];if(R.length)return R.some($=>{let v=Ps($);if(!v)return!1;let _=v.pat.stops,C=_.indexOf(f),O=_.indexOf(x);if(C<0||O<0||C>O)return!1;let X=v.t0+v.pat.t[2*C+1];return X>P.min-60&&X<P.min+150});let U=S.match(/(?:destino|destinaci[óo]|direcci[óo]n?|sentido|sentit|cap a|hacia)\s+(?:a\s+|de\s+)?([^.,;:()]{3,40})/i);if(U){let $=U[1].toLowerCase(),v=E.findIndex(_=>_.n&&$.startsWith(_.n.toLowerCase()));if(v>=0){let _=(st[A]||[]).find(C=>{let O=C.pat.stops;return O[O.length-1]===v&&O.includes(f)&&O.includes(x)});if(_){let C=_.pat.stops;return C.indexOf(f)<C.indexOf(x)}}}return!0}let jn={on:(()=>{try{return localStorage.getItem("rod_ln")==="1"}catch{return!1}})(),seen:null};function cx(){let{lines:a,stations:l}=Mo(),u=new Set(a),f=new Set(l.map(A=>zt.get(A))),x=V.alerts.filter(A=>([...A.fams].some(P=>u.has(P))||[...A.stops||[]].some(P=>f.has(P)))&&bm(A));if(!jn.seen){try{jn.seen=new Set(JSON.parse(localStorage.getItem("rod_lnseen")||"[]"))}catch{jn.seen=new Set}if(!jn.seen.size){x.forEach(A=>jn.seen.add(A.id+"|"+A.txt.length)),Mm();return}}let S=x.filter(A=>!jn.seen.has(A.id+"|"+A.txt.length));if(S.length&&(S.forEach(A=>jn.seen.add(A.id+"|"+A.txt.length)),Mm(),!(!jn.on||!("Notification"in window)||Notification.permission!=="granted")))for(let A of S.slice(0,3)){let P=(A.src==="Adif"?__t(359):"Rodalies")+(A.fams.size?" \xB7 "+[...A.fams].sort(B).slice(0,4).join(" "):""),R={body:A.txt.slice(0,240),icon:"icons/icon-192.png",tag:"rod-"+A.id};(navigator.serviceWorker&&navigator.serviceWorker.getRegistration?navigator.serviceWorker.getRegistration():Promise.resolve(null)).then(U=>U?U.showNotification(P,R):new Notification(P,R)).catch(()=>{try{new Notification(P,R)}catch{}})}}function Mm(){try{localStorage.setItem("rod_lnseen",JSON.stringify([...jn.seen].slice(-400)))}catch{}}async function ux(){if(jn.on)jn.on=!1,Be(__t(506));else{if(!("Notification"in window)){Be(xm&&!vm()?__t(507):__t(508));return}if(await Notification.requestPermission()!=="granted"){Be(__t(509));return}jn.on=!0,Be(__t(510)+Mo().lines.join(", ")+__t(511))}try{localStorage.setItem("rod_ln",jn.on?"1":"")}catch{}ge(!0)}async function hx(){if(!V.repOk||document.documentElement.classList.contains("cap"))return ux();if(!Vi.busy){Vi.busy=!0;try{let a=await ym();if(!a){Be(xm&&!vm()?__t(512):__t(513));return}if(await navigator.serviceWorker.ready,Vi.on){let l=await a.pushManager.getSubscription();l&&(fetch(ce()+"/push/unsubscribe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({endpoint:l.endpoint})}).catch(()=>{}),await l.unsubscribe().catch(()=>{})),Vi.on=!1,Be(__t(506))}else{if(!V.url){Be(__t(514));return}if(await Notification.requestPermission()!=="granted"){Be(__t(509));return}let u=(await It(ce(),"/push/key")).key,f=await a.pushManager.getSubscription()||await a.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:lx(u)});await Sm(f),Vi.on=!0,Be(__t(515)+Mo().lines.join(", "))}try{localStorage.setItem("rod_push",Vi.on?"1":"")}catch{}}catch(a){Be(__t(516)+(a.message||a))}finally{Vi.busy=!1,ge(!0)}}}async function wm(){if(Vi.on)try{let a=await ym(),l=a&&await a.pushManager.getSubscription();l&&await Sm(l)}catch{}}let gd=!1,Em="";function _d(){let a=bt?"t"+(bt.tid||bt.vtid):re>=0?"s"+re:Ae?"a":Ut?"n":"";a!==Em&&(gd=!1,Em=a);let l=innerWidth<=640&&!!a&&!gd&&!document.documentElement.classList.contains("tabmode"),u=y("#inf");u.classList.contains("compact")!==l&&(u.classList.toggle("compact",l),requestAnimationFrame(()=>{if(p.style.display!=="none"){let f=u.getBoundingClientRect().bottom;p.style.top=Math.round(f+8)+"px",p.style.maxHeight=Math.max(140,y("#rc").getBoundingClientRect().top-f-16)+"px"}}))}let Tm=new Set,xd=(()=>{let a=yt(new Date).ymd;try{let l=JSON.parse(localStorage.getItem("rod_pn")||"{}");return l.d===a?l:{d:a}}catch{return{d:a}}})();function Am(a,l,u){if(!(!(jn.on||Vi.on)||!("Notification"in window)||Notification.permission!=="granted")){if(!document.hidden){Be(a+" \xB7 "+l);return}(navigator.serviceWorker&&navigator.serviceWorker.getRegistration?navigator.serviceWorker.getRegistration():Promise.resolve(null)).then(f=>f?f.showNotification(a,{body:l,tag:u,icon:"icons/arasurto-192.png"}):new Notification(a,{body:l})).catch(()=>{try{new Notification(a,{body:l})}catch{}})}}function Cm(a,l){let u=a.x,f=Qt();if(!f.live||u.gone||u.est<f.min-1)return;let x=u.num+"|"+Math.round(u.sm),S=xd[x]||{},A=`${__t(517)} ${rt(u.sm)}`,P=`${u.fam} \u2192 ${u.dest}`,R="",U="";u.cancel?S.c||(S.c=1,R=`\u26A0\uFE0F ${A} ${__t(191)}`,U=`${P}. ${__t(518)}`):a.ghost&&!S.g?(S.g=1,R=`\u26A0\uFE0F ${A} ${__t(519)}`,U=`${P}: ${__t(520)}`):u.dl>=5&&u.dl>=(S.dl||0)+5?(S.dl=Math.round(u.dl),R=`\u23F3 ${A} ${__t(521)} +${S.dl} min`,U=`${P}: ${__t(522)} ${l} ${__t(523)} ${rt(u.est)}.`):u.plat&&S.p&&S.p!==String(u.plat)&&(R=`${__t(524)}: ${A}`,U=`${P}: ${__t(525)} ${u.plat} ${__t(526)} ${S.p}).`),u.plat&&(S.p=String(u.plat)),xd[x]=S;try{localStorage.setItem("rod_pn",JSON.stringify(xd))}catch{}R&&Am(R,U,"pin-"+u.num)}let ia={open:!1,seen:new Set((()=>{try{return JSON.parse(localStorage.getItem("rod_seen")||"[]")}catch{return[]}})())};document.addEventListener("click",a=>{let l=a.target.closest&&a.target.closest("[data-nowx]");if(!l||a.target.closest("a"))return;let u=l.dataset.nowx?l.dataset.nowx.split("|"):[];if(u.length){if(l.classList.contains("col"))ia.open=!0;else{ia.open=!1,u.forEach(f=>ia.seen.add(f));try{localStorage.setItem("rod_seen",JSON.stringify([...ia.seen].slice(-200)))}catch{}}ge(!0)}});function dx(a){let l=a.lines;if(!l.length&&Tt.st&&Tt.st.length){let v=new Set;Tt.st.forEach(_=>{let C=zt.get(_);C!=null&&E[C].fams.forEach(O=>v.add(O))}),l=[...v].sort(B)}let u=new Set(l),f=V.alerts.filter(v=>!u.size||[...v.fams].some(_=>u.has(_))),x=`<a class="hwa" href="https://www.whatsapp.com/channel/0029Vav4hGTId7nPenKMuo2C" target="_blank" rel="noopener" title="${__t(174)}" aria-label="WhatsApp"><svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path fill="#25d366" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2z"/><path fill="#fff" d="M8.6 7.2c.2-.4.4-.4.7-.4h.5c.2 0 .4 0 .6.5l.8 1.9c.1.2.1.4 0 .6l-.5.7c-.1.2-.2.3 0 .6.5.8 1.1 1.5 1.9 2 .3.2.4.1.6 0l.7-.8c.2-.2.4-.2.6-.1l1.8.9c.3.1.4.2.4.4 0 .5-.2 1.2-.8 1.6-.6.4-1.5.6-2.9 0-1.6-.7-3-2-3.9-3.4-.8-1.2-1.1-2.4-.5-3.5z"/></svg></a>`,S=f.reduce((v,_)=>Math.max(v,wr(_)),0),A=S===3?"\u26D4 ":S===2?"\u26A0\uFE0F ":"\u2139\uFE0F ",P=`<div class="hnowh"><span class="hnowl"><b>${f.length?A+f.length+(f.length===1?__t(361):__t(362)):__t(527)}</b>${l.length?`<span class="hnowc">${l.map(Mn).join("")}</span>`:""}</span>${x}</div>`,R=f.filter(v=>!ia.seen.has(v.id)),U=f.length&&(ia.open||R.length>0),$=f.reduce((v,_)=>Math.max(v,wr(_)),0);return`<div class="hnow${$===3?" bad":$===2?" warn":$===1?" info":""}${f.length&&!U?" col":""}" data-nowx="${m(f.map(v=>v.id).join("|"))}">${P}${Pm(a,!0)}${U?f.slice().sort((v,_)=>wr(_)-wr(v)).map(v=>`<div class="igc sv${wr(v)}"><p class="igh">${wr(v)===3?"\u26D4":wr(v)===2?"\u26A0\uFE0F":"\u2139\uFE0F"} ${xo(v)} ${v.fams.size>6?`<span class="igall">${__t(208)}</span>`:[...v.fams].sort(B).map(Mn).join(" ")} <small>${vo(v)}</small></p><p class="igt">${m(v.txt)}</p></div>`).join("").replace(/^/,'<div class="igl">')+`</div><small class="hnowt">${__t(528)}</small>`:""}</div>`}let ln=new Map((()=>{try{let a=yt(new Date).ymd;return JSON.parse(localStorage.getItem("rod_pin")||"[]").filter(l=>l[2]===a).map(l=>[l[0],l[1]])}catch{return[]}})());function uc(){if(!document.documentElement.classList.contains("tabmode"))return;let a=[...document.querySelectorAll("#home .hhead .htit small:not(.nofit)")],l=(f,x)=>{f.style.fontSize=x===1?"":(f._f0*x).toFixed(1)+"px",f.querySelectorAll("b").forEach(S=>S.style.fontSize=x===1?"":(f._b0*x).toFixed(1)+"px")},u=1;for(let f of a){if(f.style.whiteSpace="",l(f,1),!f.clientWidth)continue;f._f0=parseFloat(getComputedStyle(f).fontSize);let x=f.querySelector("b");for(f._b0=x?parseFloat(getComputedStyle(x).fontSize):0;f.scrollWidth>f.clientWidth+1&&u>.86;)u-=.02,l(f,u)}if(u<1)for(let f of a)f._f0&&l(f,u);for(let f of a)f.scrollWidth>f.clientWidth+1&&(f.style.whiteSpace="normal")}addEventListener("resize",()=>{try{uc()}catch{}});let Rm=(a,l)=>{let u=a==="work"?$e:a==="near"?Tt:Xe,f=u&&An(u);return f==null?null:Zn(f).find(x=>String(x.num)===String(l))||null};function ri(a,l){if(l&&!ln.size&&!ht.tid)try{let u=+(localStorage.getItem("rod_lptip")||0);u<2&&(localStorage.setItem("rod_lptip",u+1),setTimeout(()=>Be(__t(529)),600))}catch{}if(l){for(let u of[...ln.keys()])u!==a&&ln.delete(u);ln.set(a,l)}else ln.delete(a);try{let u=yt(new Date).ymd;localStorage.setItem("rod_pin",JSON.stringify([...ln].map(([f,x])=>[f,x,u])))}catch{}}let Im=a=>{let l=a&&a.ts?Date.now()/1e3-a.ts:V.okVP?(Date.now()-V.okVP)/1e3:-1;return l>=0?" \xB7 "+Ss(Nh(Math.round(l))):""};function hc(a){let l=Ft.find(S=>S.tr&&String(S.tr.num)===String(a));if(!l){let S=Ps(a),A=Qt(),P=t.days.indexOf(A.ymd);if(!S)return"";let R=S.day===P-1?1440:0,U=S.t0+S.pat.t[1]-R;return U>A.min?__t(530)+E[S.pat.stops[0]].n+" ("+rt(U)+")":""}let u=l.tr,f=S=>E[u.pat.stops[S]].n;if(l.real){let S=fx(l,u,f);if(!S)return S;let A=kt(u),P=typeof A=="number"?A/60:0,R=l.v;if(P>=8&&R&&R.next>0&&!R.est){let U=Qt(),$=t.days.indexOf(U.ymd),v=u.day===$-1?1440:0,_=Q(u,U.min+v-u.t0-P);if(_&&_.next>=0&&R.next-_.next>=2)return S+" \xB7 \u26A0\uFE0F "+__t(531)+" "+f(Math.max(0,_.at>=0?_.at:_.next-1))}return S}let x=l.p&&l.p.next;return x>0?__t(532)+f(x-1)+__t(533)+f(x):""}function fx(a,l,u){{let f=a.v;return f.pre?__t(534):f.atStop>=0&&f.before?__t(535)+u(f.atStop):f.atStop>=0&&(f.st==="STOPPED_AT"||a.stop==="st")?F()?__t(536)+u(f.atStop):__t(537)+u(f.atStop)+Im(f):!F()&&f.next>0?__t(538)+u(f.next-1)+__t(533)+u(f.next)+Im(f):f.atStop>=0&&f.next>f.atStop?__t(539)+u(f.atStop)+__t(540)+u(f.next):f.atStop>=0?__t(541)+u(f.atStop):a.stop==="via"&&f.next>0?"\u23F8 "+__t(542)+u(f.next-1)+__t(533)+u(f.next):f.next>0?__t(230)+u(f.next-1)+__t(533)+u(f.next):f.next===0?__t(395)+u(0):""}}let wo={k:"",v:null};function px(a){let l=Qt(),u=t.days.indexOf(l.ymd);if(u<0||!a.length)return null;let f=md(),x=(f&&An(f))??An(Xe)??An($e),S=l.ymd+a.join()+x;if(wo.k===S)return wo.v;wo.k=S;let A=new Set(a),P=x!=null?v=>st[v].filter(_=>{let C=_.pat.stops.indexOf(x);return C>=0&&C<_.pat.stops.length-1}).length:v=>st[v].filter(_=>A.has(_.fam)).length,R=v=>{let _=new Date(+v.slice(0,4),+v.slice(4,6)-1,+v.slice(6)).getDay();return _===0?0:_===6?6:1},U=P(u),$=Math.max(0,...t.days.map((v,_)=>_!==u&&R(v)===R(l.ymd)?P(_):0));return wo.v=$>=20&&U<$*.8?{n:U,ref:$,pct:Math.round(U/$*100),st:x!=null?E[x].n:""}:null,wo.v}function Pm(a,l){let u=a.lines||[],f=px(u);if(!f)return"";let x=V.alerts.some(S=>[...S.fams].some(A=>u.includes(A))&&/huelga|vaga\b|servicios? m[ií]nimos|serveis m[ií]nims/i.test((S.es||"")+" "+S.txt));return l?`<div class="hnowred">\u{1F5D3}\uFE0F <b>${x?__t(543):__t(544)}</b>: ${f.st?`${__t(545)} ${m(f.st)} ${f.n} ${__t(546)} ${f.ref} ${__t(547)}`:`${__t(548)} ${f.n} ${__t(546)} ${f.ref} ${__t(547)}`} (${f.pct} %). ${x?__t(549):__t(550)}</div>`:`<div class="hred">\u{1F5D3}\uFE0F <b>${x?__t(551):__t(552)}</b> \xB7 ${__t(553)}: ${f.st?`${__t(554)} ${m(f.st)} ${__t(555)} ${f.n} ${__t(145)} ${f.ref} ${__t(72)}`:`${f.n} ${__t(145)} ${f.ref} ${__t(556)} ${u.join(", ")}`} (${f.pct} % ${__t(557)}).</div>`}function mx(a){let l=So(a.lines||[]);if(!l.length)return"";let u=[Xe,$e].some(f=>{let x=An(f),S=x!=null&&Bt.get(E[x].id);return S&&S.d&&Array.isArray(S.d.trains)&&!S.d.trains.length});return`<div class="hnopos">\u{1F4E1} <b>${__t(558)} ${l.join(", ")}</b> ${__t(559)}${u?" \xB7 "+__t(560):""}: ${__t(561)}</div>`}function gx(a){if(!Tt.w||ht.lock||ht.manual&&Date.now()<ht.manual)return[];let l=ht.fixes[ht.fixes.length-1];if(!l||Date.now()-l.t>6e4||l.acc!=null&&l.acc>150)return[];let u=Tt.k||1,f=A=>Math.hypot(A.p.w[0]-Tt.w[0],A.p.w[1]-Tt.w[1])*u,x=Ft.find(A=>A.tr===a&&A.p&&A.p.w);if(!x||f(x)<2.5)return[];let S=x.p.next>=0?a.pat.stops[x.p.next]:null;return Ft.filter(A=>A.tr&&A.tr!==a&&A.p&&A.p.w&&f(A)<1&&(S==null||A.p.next>=0&&A.tr.pat.stops.indexOf(S)>=A.p.next)).sort((A,P)=>Math.hypot(A.p.w[0]-Tt.w[0],A.p.w[1]-Tt.w[1])-Math.hypot(P.p.w[0]-Tt.w[0],P.p.w[1]-Tt.w[1])).slice(0,2).map(A=>A.tr).filter(A=>{let P=String(A.num),R=ht.altT||(ht.altT=new Map),U=R.get(P);return!U||Date.now()-U>15*6e4?(R.set(P,Date.now()),!0):Date.now()-U<6e4})}function _x(a){if(ht.tid)return"";let l=null,u=null;if(ln.size||(de&&de.num!=null&&(l=String(de.num)),!l))return"";let f=Ps(l);if(!f)return"";let x=f.pat.stops,S=u?u==="work"?$e:u==="near"?Tt:Xe:null,A=S?An(S):null,P=A!=null?Zn(A).find(K=>String(K.num)===l):null,R=S===Xe?$e:S===$e?Xe:null,U=R?An(R):null,$=A!=null?x.indexOf(A):-1,v=ve&&ve.num===l?x.indexOf(zt.get(ve.sid)):-1;v<=$&&U!=null&&(v=x.indexOf(U,$+1));let _=P&&$>=0&&v>$?P.est+(f.pat.t[2*v]-f.pat.t[2*$+1]):null,C=P?Math.round(P.est-a.min):null,O=hc(l),X=P?`${P.gone?__t(562):__t(563)} ${m(E[A].n)} \xB7 <b>${rt(P.est)}</b>${P.gone?"":` (${C<=0?__t(319):C+" min"})`}${P.plat?__t(183)+m(P.plat):""}${_!=null?` \u2192 ${m(E[x[v]].n)} <b>${rt(_)}</b>`:""}`:m(O||"");return`<div class="hplace onbc chosen"><div class="hhead"><span class="hico">\u{1F4CC}</span><span class="htit"><b>${Mn(f.fam)} ${__t(381)}${m(l)} <span class="hlk">${__t(564)}</span></b><small class="nofit">${X}</small>${P&&O?`<small class="nofit">\u{1F4CD} ${m(O)}</small>`:""}<span class="chbtn"><button type="button" class="hgo hboard" data-hboard="${m(l)}">\u{1F686} ${__t(471)}</button><button type="button" class="chmap" data-chmap="${m(l)}">\u{1F5FA}\uFE0F ${__t(565)}</button></span></span><button type="button" class="hpn onbx" data-unchoose="${m(l)}" aria-label="${__t(255)}">\u2715</button></div></div>`}function xx(a){let l;try{if(l=vx(a),l!=null)return l}catch(x){console.error(x)}let u=ht.tid?Ps(ht.tid):null,f=u?`${__t(566)} ${m(E[u.pat.stops[0]].n)} \xB7 ${rt(u.t0)}`:"";return ht.tid?`<div class="hplace onbc"><div class="hhead"><span class="hico">\u{1F686}</span><span class="htit"><b>${__t(381)}${m(ht.tid)}${ht.lock?` <span class="hlk">${__t(567)}</span>`:""}</b>${f?`<small class="nofit">${f}</small>`:""}</span><button type="button" class="hpn onbx" data-onbx aria-label="${__t(338)}">\u2715</button></div></div>`:""}let Eo={s:null,at:0},Hn=(()=>{try{return JSON.parse(localStorage.getItem("rod_trips")||"[]")}catch{return[]}})();function sa(a,l,u,f,x){let S=a.ymd+"|"+l.num,A=l.pat.stops,P=Hn.find(R=>R.k===S);if(!(P&&P.done)){if(!P){let R=ht.from!=null?A.indexOf(ht.from):-1;if(Eo.s!=null&&Date.now()-Eo.at<45*6e4){let U=A.indexOf(Eo.s);U>=0&&(R<0||U<R)&&(R=U)}{let U=[...Xe.st,...$e.st],$=R>=0?R:(ht.fixes.length,-1);if($>=0&&!U.includes(E[A[$]].id)){for(let v=$-1;v>=Math.max(0,$-4);v--)if(U.includes(E[A[v]].id)){R=v;break}}}if(R<0&&ht.fixes.length){let U=ht.fixes[0],$=.6;A.forEach((v,_)=>{let C=Math.hypot(E[v].w[0]-U.w[0],E[v].w[1]-U.w[1])*U.k;C<$&&($=C,R=_)})}P={k:S,d:a.ymd,num:String(l.num),fam:l.fam,a:R>=0?E[A[R]].id:"",ad:R>=0?Math.round(l.t0+l.pat.t[2*R+1]-f):null,dl:null,mx:0,t0:Date.now()},Hn.push(P)}if(ve&&ve.num===String(l.num)&&zt.get(ve.sid)===A[u]&&(P.b=E[A[u]].id,P.bd=Math.round(l.t0+l.pat.t[2*u]-f)),x!=null&&(P.dl=Math.round(x),P.mx=Math.max(P.mx||0,P.dl)),P.t1=Date.now(),!sa.s||Date.now()-sa.s>3e4||P._n!==P.dl){sa.s=Date.now(),P._n=P.dl;let R=Date.now()-120*864e5;try{localStorage.setItem("rod_trips",JSON.stringify(Hn.filter(U=>(U.t1||U.t0)>R),(U,$)=>U==="_n"?void 0:$))}catch{}}}}let Lm=(a,l)=>{let u=Date.now()-l*864e5;return Hn.filter(f=>f.fam===a&&(f.t1||f.t0)>u&&(f.t1||0)-f.t0>=18e4&&!(f.a&&f.a===f.b))};function vx(a){if(!ht.tid)return"";[...ln].forEach(([K,G])=>{String(G)!==String(ht.tid)&&ri(K,null)});let l=Ft.find(K=>K.tr&&String(K.tr.num)===ht.tid)||ft(a).out.find(K=>K.tr&&String(K.tr.num)===ht.tid);if(!l)return null;let u=l.tr,f=u.pat.stops,x=l.real&&l.v&&l.v.next>=0?l.v.next:l.p&&l.p.next>=0?l.p.next:null;if(x==null){let K=ft(a).out.find(G=>G.tr&&String(G.tr.num)===ht.tid);x=K&&K.p&&K.p.next>=0?K.p.next:1}let S=kt(u),A=typeof S=="number"?Math.max(0,S/60):0,P=t.days.indexOf(a.ymd),R=u.day===P-1?1440:0,U=ht.fixes[ht.fixes.length-1],$=U&&Date.now()-U.t<9e4&&(U.acc==null||U.acc<150)?(()=>{let K=-1,G=.35;return f.forEach((nt,W)=>{let Vt=Math.hypot(E[nt].w[0]-U.w[0],E[nt].w[1]-U.w[1])*U.k;Vt<G&&(G=Vt,K=W)}),K})():-1,v=ve&&ve.num===ht.tid?f.indexOf(zt.get(ve.sid)):-1;if(v>0&&v<x&&$!==v&&!($>=0&&$<v))return setTimeout(()=>{if(!ht.tid)return;let K=ht.tid;{let G=Hn.find(nt=>nt.num===K&&nt.d===Qt().ymd);if(G){G.done=!0,sa.s=0;try{localStorage.setItem("rod_trips",JSON.stringify(Hn,(nt,W)=>nt==="_n"?void 0:W))}catch{}}}ht.no.set(K,Date.now()+90*6e4),ht.tid="",ht.lock=!1,ht.manual=0,ht.quiet=Date.now()+10*6e4,de&&String(de.num)===K&&(de=null),[...ln].forEach(([G,nt])=>{String(nt)===K&&ri(G,null)}),Rn.num===K&&(Rn.num=""),ge(!0)},0),"";v<x&&(v=f.length-1);let _=ea(u,l.real?l.v:null,v,u.t0+u.pat.t[2*v]+A-R),C=_-a.min,O=l.real&&l.v.atStop>=0?l.v.atStop:-1;sa(a,u,v,R,typeof S=="number"?A:null);let X=$>=0?`${__t(568)} ${E[f[$]].n}`:hc(u.num)||__t(395)+E[f[x]].n;return`<div class="hplace onbc"><button type="button" class="hhead" data-onbgo><span class="hico">\u{1F686}</span><span class="htit"><b>${Mn(u.fam)} ${__t(381)}${m(u.num)}${ht.lock?` <span class="hlk">${__t(567)}</span>`:""}</b><small class="nofit cok onbar"><span class="nw">${__t(569)} ${m(E[f[v]].n)}</span> <span class="nw"><b>${rt(_)}</b>${A>=1?` <em class="dl ${$i(A)}">+${Math.round(A)}</em>`:""}${C>=1?" \xB7 "+__t(105)+Mr(C):""}</span></small><small class="nofit onbwh">${m(X)}</small>${(K=>K.length?`<small class="onbrep">${K.slice(0,4).map(G=>`<span title="${m(Ys(G.kind))}">${rs[G.kind]}${G.up>1?`<b>${G.up>99?"99+":G.up}</b>`:""}</span>`).join("")}</small>`:"")(Qp(u.num))}</span><span class="hchev">${ht.open?"\u25B4":"\u25BE"}</span></button><button type="button" class="hpn onbx" data-onbx aria-label="${__t(570)}" title="${__t(570)}">\u2715</button>${(K=>K.length&&!(ht.manual&&Date.now()<ht.manual)?`<div class="onbch">${K.map(G=>`<button type="button" class="onbalt" data-onbpick="${m(G.num)}">${__t(571)} ${m(G.num)}?<small>${__t(572)} ${m(E[G.pat.stops[G.pat.stops.length-1]].n.replace(/^Barcelona[ -]+(?=\S)/,""))}</small></button>`).join("")}</div>`:"")(gx(u))}${ht.open?(()=>{let K=Math.max(x,0),G=W=>{let Vt=ea(u,l.real?l.v:null,W,u.t0+u.pat.t[2*W]+A-R);return`<li class="${W===v?"dst":""}"><b>${rt(Vt)}</b><span>${m(E[f[W]].n)}</span>${W===v?`<i>${__t(573)}</i>`:""}</li>`},nt=[];for(let W=K;W<=Math.min(v,K+2);W++)nt.push(G(W));return v>K+3&&nt.push(`<li class="gap"><b>\u22EE</b><span>${v-K-3} ${v-K-3===1?__t(574):__t(575)}</span></li>`),v>K+2&&nt.push(G(v)),`<div class="onbmore"><small class="onbh">${__t(576)}</small><ol class="onbst">${nt.join("")}</ol>${go(u.num,"",u.fam)}<div class="rtb"><button type="button" data-onbmap>\u{1F5FA}\uFE0F ${__t(565)}</button></div></div>`})():""}</div>`}let dc={until:0};function Dm(){let a=ht.tid;if(a){ht.no.set(a,Date.now()+20*6e4),ht.tid="",ht.manual=0,ht.lock=!1,ht.quiet=Date.now()+10*6e4,Rn.num===a&&(Rn.num=""),[...ln].forEach(([l,u])=>{String(u)===a&&ri(l,null)}),ve&&ve.num===a&&(ve=null,Rs(),window.__schedOff&&window.__schedOff(7701)),de&&String(de.num)===a&&(de=null),bt&&String(bt.num)===a&&(bt=null,Ve.sk=""),p._h="";try{Ce(),o()}catch{}ge(!0)}}function Nm(a){if(a.hasAttribute("data-onbx")){Dm();return}let l=ht.tid,u=ht.lock;na(a.dataset.onbpick,"pick"),Be(`${__t(577)} ${ht.tid}`,l&&l!==ht.tid?{label:__t(283),fn:()=>{na(l,u?"lock":"pick"),Be(`${__t(578)} ${l}`),ge(!0)}}:void 0),ge(!0)}function ge(a){let l=y("#home");if(!l)return;let u=performance.now();if(!a&&u-hm<4e3||!a&&dc.until>Date.now())return;hm=u;let f=Qt(),x=[],S=Mo(),A=_=>{let C=An(_);return C==null||!Tt.w?1:Math.hypot(E[C].w[0]-Tt.w[0],E[C].w[1]-Tt.w[1])},P=[Tt,...[Xe,$e].sort((_,C)=>A(_)-A(C))],R=(document.documentElement.classList.contains("tabmode")?dx(S):Pm(S))+mx(S)+xx(f)+_x(f)+P.map(_=>sx(_,f,x)).join("")+(Ls.some(_=>_.open)&&S.lines.length,"");l.className=(Ls.some(_=>_.open)?"open":"")+(ht.tid?" onb":"");let U=y("#bell");U||(U=document.createElement("button"),U.type="button",U.id="bell",U.onclick=hx,y("#inf .more").prepend(U));{let _=V.repOk&&!document.documentElement.classList.contains("cap")?Vi.on:jn.on;U.hidden=!S.lines.length,U.className=_?"on":"",U.textContent=Ve.on?_?__t(586):__t(587):(_?__t(588):__t(589))+S.lines.join(", "),U.title=(_?__t(590):__t(591))+__t(68)+S.lines.join(", ")+(V.repOk?"":__t(592))}if(l._h===R)return;l._h=R,l.innerHTML=R,uc(),l._onbDel||(l._onbDel=1,l.addEventListener("pointerdown",()=>{dc.until=Date.now()+1500},!0),l.addEventListener("pointerup",()=>{dc.until=Date.now()+400},!0),l.addEventListener("click",_=>{if(window.__lpAt&&Date.now()-window.__lpAt<1e3){_.stopPropagation(),_.preventDefault();return}let C=_.target.closest&&_.target.closest("[data-onbx],[data-onbpick]");C&&(_.stopPropagation(),dc.until=0,Nm(C))},!0));{let _=l.querySelector("[data-onbgo]");_&&(_.onclick=C=>{if(C.target.closest("[data-onbx]")){Dm();return}let O=C.target.closest("[data-onbpick]");if(O){Nm(O);return}ht.open=!ht.open,ge(!0)})}{let _=l.querySelector("[data-onbmap]");_&&(_.onclick=C=>{C.stopPropagation();let O=Ft.find(X=>X.tr&&String(X.tr.num)===ht.tid);O&&(Ut=Ae=Nt=!1,re=-1,bt=O.tr,de=O.tr,p._h="",Oi("map"),Ce())})}{let _=[...l.children].find(C=>C.classList.contains("hplace")&&!C.querySelector(".hnew"));_&&_.classList.add("lead")}let $=_=>_==="work"?$e:_==="near"?Tt:Xe;l.querySelectorAll("[data-hloc]").forEach(_=>_.onclick=()=>{Tt.err="",rd(!0)}),l.querySelectorAll("[data-ht]").forEach(_=>{let C=0,O=0,X=0,K=()=>{clearTimeout(C),C=0,_.closest(".hplace")?.classList.remove("lpress")};_.addEventListener("pointerdown",G=>{let nt=_.dataset.ht,W=ln.get(nt);!W||String(ht.tid)===String(W)||(O=G.clientX,X=G.clientY,_.closest(".hplace")?.classList.add("lpress"),C=setTimeout(()=>{C=0,_.closest(".hplace")?.classList.remove("lpress"),_._lpDone=Date.now();let Vt=Rm(nt,W);if(!ad(Vt,Qt())){od(Vt?rt(Vt.est):"");return}let oe=na(W,"lock",nt);try{navigator.vibrate&&navigator.vibrate(35)}catch{}Be(`${__t(578)} ${oe&&oe.tr.fam||""} ${W} \xB7 ${__t(567)}`),ge(!0)},700))}),_.addEventListener("pointermove",G=>{C&&Math.hypot(G.clientX-O,G.clientY-X)>10&&K()}),["pointerup","pointercancel","pointerleave"].forEach(G=>_.addEventListener(G,()=>{C&&K()})),_.addEventListener("contextmenu",G=>G.preventDefault())}),l.querySelectorAll("[data-ht]").forEach(_=>_.onclick=()=>{if(_._lpDone&&Date.now()-_._lpDone<1500)return;if(y("#inf").classList.contains("compact")){gd=!0,_d();return}let C=$(_.dataset.ht);C.open=!C.open,si(C),ge(!0),(bt||re>=0||Ae||Ut)&&(p._h="",Ce())}),l.querySelectorAll("[data-hxf]").forEach(_=>_.onclick=C=>{C.stopPropagation();let[O,X]=_.dataset.hxf.split(":"),K=$(O);K.xfer=X||null,si(K),ge(!0)});let v=_=>{clearTimeout(_._cfgT),_._cfgT=setTimeout(()=>{_._cfg=!1,ge(!0)},1e4)};l.querySelectorAll("[data-hs]").forEach(_=>_.onclick=()=>{let[C,O]=_.dataset.hs.split(":"),X=$(C);v(X),X.i!==+O&&(X.i=+O,si(X),ge(!0))}),l.querySelectorAll("[data-hcfg]").forEach(_=>_.onclick=C=>{C.stopPropagation();let O=$(_.dataset.hcfg);if(O._cfg=!O._cfg,clearTimeout(O._cfgT),O._cfg&&v(O),!dd.v){dd.v=!0;try{localStorage.setItem("rod_cfgseen","1")}catch{}}ge(!0)}),l.querySelectorAll("[data-hrs]").forEach(_=>_.addEventListener("click",C=>{C.stopPropagation(),C.preventDefault();let O=$(_.dataset.hrs);_m(O.st[O.i||0])},!0)),l.querySelectorAll("[data-hrep]").forEach(_=>_.onclick=C=>{C.stopPropagation();let O=$(_.dataset.hrep);_m(O.st[O.i||0])}),l.querySelectorAll("[data-hcfgmap]").forEach(_=>_.onclick=C=>{C.stopPropagation();let O=+_.dataset.hcfgmap;Oi("map"),window.__rodPickStation(O)}),l.querySelectorAll("[data-hwt]").forEach(_=>_.onclick=C=>{C.stopPropagation();let O=$(_.dataset.hwt);O._wedit=!O._wedit,clearTimeout(O._wT),O._wedit&&(O._wT=setTimeout(()=>{O._wedit=!1,ge(!0)},6e3)),ge(!0)}),l.querySelectorAll("[data-hw]").forEach(_=>_.addEventListener("click",()=>{let C=$(_.dataset.hw.split(":")[0]);C._cfg&&v(C)},!0)),l.querySelectorAll("[data-hw]").forEach(_=>_.onclick=()=>{let[C,O]=_.dataset.hw.split(":"),X=$(C);X.walk=M(X.walk+ +O,0,60),si(X),ge(!0)}),l.querySelectorAll("[data-hwset]").forEach(_=>_.onclick=C=>{C.stopPropagation();let[O,X]=_.dataset.hwset.split(":"),K=$(O);K.walk=M(+X,0,60),si(K),K._cfg&&(clearTimeout(K._cfgT),K._cfgT=setTimeout(()=>{K._cfg=!1,ge(!0)},1e4)),Be(`${__t(593)}: ${K.walk} min`),ge(!0)}),l.querySelectorAll("[data-hmap]").forEach(_=>_.onclick=()=>{let C=+_.dataset.hmap;Ut=Ae=Nt=!1,bt=null,re=C,zn(),Object.assign(s,{tx:E[C].w[0],ty:E[C].w[1],dist:18,tilt:Math.max(s.tilt,.5)}),p._h="",Ce(),o()}),l.querySelectorAll("[data-hset]").forEach(_=>_.onclick=()=>Um(_.dataset.hset)),l.querySelectorAll("[data-hnear]").forEach(_=>_.onclick=()=>{let C=zt.get(Tt.st[0]);C!=null&&vd(C,_.dataset.hnear)}),l.querySelectorAll("[data-hmore]").forEach(_=>_.onclick=()=>{let C=$(_.dataset.hmore);C.more=!C.more,ge(!0)}),l.querySelectorAll("[data-hhide]").forEach(_=>_.onclick=C=>{C.stopPropagation();let[O,X]=_.dataset.hhide.split(":"),K=$(O);K.hide=X,si(K),ge(!0)}),l.querySelectorAll("[data-hshow]").forEach(_=>_.onclick=()=>{let C=$(_.dataset.hshow);C.hide="",si(C),ge(!0)}),l.querySelectorAll("[data-hgo]").forEach(_=>_.onclick=C=>{C.stopPropagation();let[O,X]=_.dataset.hgo.split(":"),K=$(O);K.goAt=X==="1"?Date.now():0,K.goAt?K.platAt=0:K._noWay=Date.now()+15*6e4,si(K),ge(!0)}),l.querySelectorAll("[data-unchoose]").forEach(_=>_.onclick=C=>{C.stopPropagation();let O=_.dataset.unchoose;[...ln].forEach(([X,K])=>{String(K)===O&&ri(X,null)}),Rn.num===O&&(Rn.num=""),de&&String(de.num)===O&&(de=null),ve&&ve.num===O&&(ve=null,Rs()),bt&&String(bt.num)===O&&(bt=null,p._h="",Ce()),ge(!0)}),l.querySelectorAll("[data-chmap]").forEach(_=>_.onclick=C=>{C.stopPropagation();let O=Ps(_.dataset.chmap);O&&(Oi("map"),Zs({num:String(O.num),tid:O.tid&&V.vp.has(O.tid)?O.tid:"",tr:O}),de=O)}),l.querySelectorAll("[data-hboard]").forEach(_=>_.onclick=C=>{if(C.stopPropagation(),_.classList.contains("off")){od(_.dataset.hbwhen);return}let O=na(_.dataset.hboard,"lock",_.closest(".hplace")?.querySelector("[data-ht]")?.dataset.ht);Be(`${__t(578)} ${O&&O.tr.fam||""} ${_.dataset.hboard} \xB7 ${__t(567)}`),ge(!0)}),l.querySelectorAll("[data-hplat]").forEach(_=>_.onclick=C=>{C.stopPropagation();let[O,X]=_.dataset.hplat.split(":"),K=$(O);if(K.platAt=X==="1"?Date.now():0,K.platAt){K.goAt=0;let G=An(K);G!=null&&(Eo.s=G,Eo.at=Date.now())}si(K),ge(!0)}),l.querySelectorAll("[data-hnotst]").forEach(_=>_.onclick=C=>{C.stopPropagation(),Tt.homeW=Tt.w;try{localStorage.setItem("rod_homew",JSON.stringify(Tt.w))}catch{}ge(!0)}),l.querySelectorAll("[data-hdel]").forEach(_=>_.onclick=()=>{$e.st=[],$e.open=!1,si($e),ge(!0),wm()}),l.querySelectorAll("[data-dk]").forEach(_=>{let C=0,O=0,X=0,K=()=>{clearTimeout(C),C=0,_.classList.remove("lpress")};_.addEventListener("pointerdown",G=>{let nt=x[+_.dataset.dk];!nt||nt.num==null||!_.matches("li.hr, .hv")||(O=G.clientX,X=G.clientY,_.classList.add("lpress"),C=setTimeout(()=>{if(C=0,_.classList.remove("lpress"),_._lpDone=Date.now(),!ad(nt,Qt())){od(nt.est!=null?rt(nt.est):"");return}let W=na(nt.num,"lock",_.closest(".hplace")?.querySelector("[data-ht]")?.dataset.ht);try{navigator.vibrate&&navigator.vibrate(35)}catch{}Be(`${__t(578)} ${W&&W.tr.fam||nt.fam||""} ${nt.num} \xB7 ${__t(567)}`),ge(!0)},700))}),_.addEventListener("pointermove",G=>{C&&Math.hypot(G.clientX-O,G.clientY-X)>10&&K()}),["pointerup","pointercancel","pointerleave"].forEach(G=>_.addEventListener(G,()=>{C&&K()})),_.addEventListener("contextmenu",G=>G.preventDefault())}),l.querySelectorAll(".hv .hwhere").forEach(_=>_.onclick=C=>{C.stopPropagation();let O=_.closest("[data-dk]"),X=O&&x[+O.dataset.dk];X&&(Oi("map"),Zs(X))}),l.querySelectorAll("[data-dk]").forEach(_=>_.onclick=()=>{if(_._lpDone&&Date.now()-_._lpDone<1500)return;let C=x[+_.dataset.dk];if(_.matches("li.hr, .hv")&&!C.gone&&C.num!=null){let O=_.closest(".hplace")?.querySelector("[data-ht]")?.dataset.ht;if(O){let X=ln.get(O)===String(C.num);ri(O,X?null:String(C.num)),X&&Rn.num===String(C.num)&&(Rn.num=""),X?bt&&String(bt.num)===String(C.num)&&(bt=null,de=null,Ve.sk="",p._h="",Ce()):Zs(C,!0),ge(!0);return}}if(C.gone&&_.closest("#home")){Be(`${__t(594)} \xB7 ${C.fam||""} ${C.num||""}`,{label:__t(565),fn:()=>{Oi("map"),Zs(C)}});return}Zs(C)}),l.querySelectorAll("[data-pinnext]").forEach(_=>_.onclick=C=>{if(C.target.closest("[data-unpin]"))return;let[O,X]=_.dataset.pinnext.split(":");ri(O,X);let K=Rm(O,X);K&&Zs(K,!0),ge(!0)}),l.querySelectorAll("[data-unpin]").forEach(_=>_.onclick=C=>{C.stopPropagation(),ri(_.dataset.unpin,null),ge(!0)}),l.querySelectorAll("[data-hal]").forEach(_=>_.onclick=()=>y("#alr").click()),nd(l)}function Zs(a,l){if(!a)return;let u=t.days.indexOf(Qt().ymd),f=Ft.find(A=>A.real?a.tid&&A.v.tid===a.tid||a.num&&String(A.tr?A.tr.num:A.v.num)===String(a.num):a.tr&&A.tr===a.tr||a.num&&A.tr&&String(A.tr.num)===String(a.num)),x=a.tr||f&&f.tr||(st[u]||[]).find(A=>String(A.num)===String(a.num));if(Ut=Ae=Nt=!1,re=-1,l||void 0,bt=f?f.tr||{vtid:f.v.tid}:x||null,!bt)return;l&&(Ve.sk="t"+(bt.num||bt.vtid)),de=f&&f.tr?f.tr:null,de&&innerWidth<=640&&(p.classList.add("peek"),y("#rc").classList.contains("min")||y("#rcgrab").click());let S=f?f.p.w:null;S&&Object.assign(s,{tx:S[0],ty:S[1],dist:ld}),zn(),p._h="",Ce(),Le=0,o()}let ra=!1;function Um(a){ra=a||!1,b.value="",b.placeholder=a==="work"?__t(595):a==="home"?__t(596):__t(597),document.documentElement.classList.add("srch"),g.style.display="none",b.focus()}let Om=()=>document.documentElement.classList.remove("srch");{let a=y("#hfind");a&&(a.onclick=()=>Um(""))}b.addEventListener("blur",()=>setTimeout(()=>{document.activeElement!==b&&Om(),ra&&!b.value.trim()&&(ra=!1,b.placeholder=__t(597))},600));function xw(){}function vd(a,l){let u=l==="work"?$e:Xe,f=E[a].id,x=E.filter(S=>S.fams.size&&S!==E[a]&&Math.hypot(S.w[0]-E[a].w[0],S.w[1]-E[a].w[1])<.6).map(S=>S.id);u.st=[f,...x].slice(0,3),u.i=0,u.open=!0,si(u),ge(!0),wm()}let fc=y("#lines");fc.innerHTML=`${__t(598)}`+Y.map(a=>`<button type="button" style="--c:${Z[a]}" data-f="${a}">${a}</button>`).join("");function Fm(){try{ge(!0)}catch{}{let a=y("#linebtn");a||(a=document.createElement("button"),a.type="button",a.id="linebtn",fc.after(a),a.onclick=()=>{me=[...Lt][0],Nt=Ut=Ae=!1,p._h="",Ce()});let l=Lt.size===1?[...Lt][0]:"";a.hidden=!l,l&&(a.innerHTML=`${__t(599)}${m(l)}${__t(600)}`)}fc.querySelectorAll("[data-f]").forEach(a=>{a.dataset.f!=="*"&&a.classList.toggle("off",!Lt.has(a.dataset.f))})}fc.querySelectorAll("[data-f]").forEach(a=>a.onclick=()=>{let l=a.dataset.f;l==="*"?Y.forEach(u=>Lt.add(u)):Lt.size===Y.length?(Lt.clear(),Lt.add(l)):Lt.has(l)?(Lt.delete(l),Lt.size||Y.forEach(u=>Lt.add(u))):Lt.add(l);try{localStorage.setItem("rod_lines",JSON.stringify([...Lt]))}catch{}Fm(),he(),zn(),id(),Le=0,o()});let yd=[...document.querySelectorAll("[data-sp]")],Ui=0;function Bm(a){let l=Qt();a&&(Pt===a||Ui===a)?Pt?(Kt=l.min,fe=l.min,Pt=0,Ui=a):(_e=performance.now(),Pt=a,Ui=0):a===0?(Pt=0,fe=null,Ui=0):(Kt=l.min,_e=performance.now(),fe=l.min,Pt=a,Ui=0),yd.forEach(u=>{let f=+u.dataset.sp;u.classList.toggle("on",f===(Pt||Ui)||!Pt&&!Ui&&fe==null&&f===0),u.classList.toggle("pz",!!Ui&&f===Ui),u.textContent=f===0?__t(109):Ui===f?"\u25B6 \xD7"+f:Pt===f?"\u23F8 \xD7"+f:"\xD7"+f}),Le=0,o()}yd.forEach(a=>a.onclick=()=>Bm(+a.dataset.sp)),y("#tsl").oninput=a=>{let l=+a.target.value;Kt=l,fe=l,_e=performance.now(),Pt===0&&!Ui&&yd.forEach(u=>u.classList.remove("on")),Le=0,o()},setInterval(()=>{fe!=null&&Pt&&Kt+(performance.now()-_e)/6e4*Pt>1560&&(Kt=240,_e=performance.now())},1e3),window.__rodSearch=a=>{let l=w(a.trim());if(!l){g.style.display="none",g._pick=null;return}let u=[],f=[];E.forEach((P,R)=>{if(!P.fams.size)return;let U=w(P.n);U.startsWith(l)||U.includes(" "+l)||U.includes("-"+l)?u.push(R):U.includes(l)&&f.push(R)});let x=u.concat(f).slice(0,7),S=N.filter(P=>w(P.name).startsWith(l)).sort((P,R)=>R.pop-P.pop).slice(0,3),A=x.map(P=>({h:`\u{1F689} ${m(E[P].n)}<em>${[...E[P].fams].sort(B).slice(0,3).map(R=>`<em class="ls" style="background:${Z[R]}">${R}</em>`).join(" ")}</em>`,go:()=>{if(Om(),ra){let R=ra;ra=!1,b.placeholder=__t(597),vd(P,R);return}Ve.on&&Ve.cur!=="map"&&Oi("map"),Ut=!1,Ae=!1,Nt=!1,re=P,bt=null,de=null,zn(),Object.assign(s,{tx:E[P].w[0],ty:E[P].w[1],dist:Math.min(s.dist,20),tilt:Math.max(s.tilt,.5)}),Ce(),o()}})).concat(S.map(P=>({h:`${m(P.name)}${__t(601)}`,go:()=>{Object.assign(s,{tx:P.cx,ty:P.cy,dist:M(P.size*3+14,14,60)}),o()}})));g.innerHTML=A.map((P,R)=>`<li data-i="${R}">${P.h}</li>`).join("")||__t(602),g.style.display="block",g._pick=P=>{A[P]&&(A[P].go(),g.style.display="none",b.value="",b.blur())},g.querySelectorAll("li[data-i]").forEach(P=>P.onclick=()=>g._pick(+P.dataset.i))},Fm(),zn();try{let a=new URLSearchParams(location.search).get("st");if(a){let l=w(a),u=-1,f=0;E.forEach((x,S)=>{if(!x.fams.size)return;let A=w(x.n),P=A===l?3:A.startsWith(l)||l.startsWith(A)?2:A.includes(l)||l.includes(A)?1:0;P>f&&(f=P,u=S)}),u>=0&&setTimeout(()=>{re=u,zn(),Object.assign(s,{tx:E[u].w[0],ty:E[u].w[1],dist:18,tilt:.5}),Ce(),o()},300)}}catch{}let Sd={v:!1};document.addEventListener("click",a=>{!(a.target.closest&&a.target.closest("[data-halx]"))||a.target.closest("a")||(Sd.v=!Sd.v,ge(!0))}),p.addEventListener("click",a=>{if(!p.classList.contains("peek")&&innerWidth<=640&&bt&&p.querySelector(".mn")&&!a.target.closest("button,a,input,select,label,summary,[data-alarm],[data-gs],[data-gt],[data-sf],[data-al],[role=button]")){let u=p.querySelector(".mn");a.stopPropagation(),u&&u.click();return}if(!p.classList.contains("peek")||a.target.closest("button,a,input"))return;a.stopPropagation(),a.preventDefault(),p.classList.remove("peek");let l=p.querySelector(".mn");l&&(l.textContent="\u25BE"),p.scrollTop=0},!0),p.addEventListener("pointerdown",()=>{p._touch=Date.now()+2500},!0),["pointerup","pointercancel"].forEach(a=>p.addEventListener(a,()=>{p._touch=0},!0));{let a=0,l=0,u=0,f=0;p.addEventListener("touchstart",x=>{f=innerWidth<=640&&bt&&(!Ve.on||Ve.cur==="map")&&x.touches.length===1&&!x.target.closest("input")?1:0,f&&(a=x.touches[0].clientX,l=x.touches[0].clientY,u=0)},{passive:!0}),p.addEventListener("touchmove",x=>{if(!f)return;let S=x.touches[0].clientX-a,A=x.touches[0].clientY-l;f===1&&(Math.abs(S)<12&&Math.abs(A)<12||(f=Math.abs(S)>Math.abs(A)*1.3&&S<0?2:0,!f))||(x.preventDefault(),u=Math.min(0,S),p.style.transition="none",p.style.transform=`translateX(${u}px)`,p.style.opacity=String(Math.max(.3,1+u/300)))},{passive:!1}),p.addEventListener("touchend",()=>{if(f!==2){f=0;return}if(f=0,p.style.transition="transform .18s,opacity .18s",u>-90){p.style.transform="",p.style.opacity="";return}p.style.transform="translateX(-110%)",p.style.opacity="0",setTimeout(()=>{let x=p.querySelector("[data-cx]");x&&x.click(),p.style.transition="",p.style.transform="",p.style.opacity=""},180)}),p.addEventListener("touchcancel",()=>{f===2&&(p.style.transform="",p.style.opacity=""),f=0})}let Ve={on:!1,cur:"now",home:new Map},pc=matchMedia("(max-width:640px), (max-height:500px) and (pointer:coarse)"),Nn=document.createElement("nav");Nn.id="tabs";let yx=[["now","\u{1F552}",__t(109)],["map","\u{1F5FA}\uFE0F",__t(603)],["line","\u{1F4CA}",__t(604)],["set","\u2699\uFE0F",__t(605)]];Nn.innerHTML=yx.map(([a,l,u])=>`<button type="button" data-tab="${a}"><span>${l}</span><small>${u}</small></button>`).join(""),document.body.appendChild(Nn);let Tr=document.createElement("i");Tr.className="tind",Tr.setAttribute("aria-hidden","true"),Nn.prepend(Tr);let km=a=>[...Nn.querySelectorAll("[data-tab]")].find(l=>{let u=l.getBoundingClientRect();return a>=u.left&&a<u.right}),bd=a=>{!a||!a.offsetWidth||(Tr.style.width=a.offsetWidth+"px",Tr.style.height=a.offsetHeight+"px",Tr.style.top=a.offsetTop+"px",Tr.style.transform=`translateX(${a.offsetLeft}px)`)},aa=()=>bd(Nn.querySelector("[data-tab].on")),Sx=()=>{try{let a=window.Capacitor,l=a&&a.isNativePlatform&&a.isNativePlatform()&&a.Plugins&&a.Plugins.Haptics;l&&l.selectionChanged().catch(()=>{})}catch{}},ai={on:!1,b:null,moved:!1,until:0};Nn.addEventListener("pointerdown",a=>{let l=km(a.clientX);if(l){ai.on=!0,ai.b=l,ai.moved=!1,Nn.classList.add("drag"),Nn.querySelectorAll(".hov").forEach(u=>u.classList.remove("hov")),l.classList.add("hov"),bd(l);try{Nn.setPointerCapture(a.pointerId)}catch{}try{let u=window.Capacitor,f=u&&u.Plugins&&u.Plugins.Haptics;f&&u.isNativePlatform()&&f.selectionStart().catch(()=>{})}catch{}}}),Nn.addEventListener("pointermove",a=>{if(!ai.on)return;let l=km(a.clientX);l&&l!==ai.b&&(ai.b.classList.remove("hov"),l.classList.add("hov"),ai.b=l,ai.moved=!0,bd(l),Sx())});let $m=a=>{if(ai.on){ai.on=!1,Nn.classList.remove("drag"),Nn.querySelectorAll(".hov").forEach(l=>l.classList.remove("hov"));try{let l=window.Capacitor,u=l&&l.Plugins&&l.Plugins.Haptics;u&&l.isNativePlatform()&&u.selectionEnd().catch(()=>{})}catch{}a&&ai.b?(ai.until=Date.now()+500,ai.b.dataset.tab!==Ve.cur?Oi(ai.b.dataset.tab):aa()):aa()}};Nn.addEventListener("pointerup",()=>$m(!0)),Nn.addEventListener("pointercancel",()=>$m(!1)),addEventListener("resize",()=>setTimeout(aa,60));try{new ResizeObserver(()=>aa()).observe(Nn)}catch{}let oa=document.createElement("div");oa.id="tabL",document.body.appendChild(oa);let Ar=document.createElement("div");Ar.id="tabA",Ar.className="box",document.body.appendChild(Ar);let Md=(a,l)=>{a&&(Ve.home.has(a)||Ve.home.set(a,[a.parentNode,a.nextSibling]),l.appendChild(a))},zm=()=>{for(let[a,[l,u]]of Ve.home)try{l.insertBefore(a,u&&u.parentNode===l?u:null)}catch{}Ve.home.clear()};function wd(){if(!document.getElementById("tabLt")){let S=document.createElement("div");S.id="tabLt",S.textContent=__t(604),document.body.appendChild(S)}let a=[...new Set([Xe,$e].flatMap(S=>{let A=An(S);return A!=null?[...E[A].fams]:[]}))],l=(Lt.size&&Lt.size<=8?[...Lt]:a.length?a:[]).filter(S=>Z[S]).sort(B),u=l.join(","),f=V.alerts.filter(S=>[...S.fams].some(A=>Lt.has(A))).length,x=[Nt,Ae,me,Ut,u,f].join("|");oa._k!==x&&(oa._k=x,oa.innerHTML=`<button type="button" data-tl="stats" class="${Nt?"on":""}">\u{1F4CA} ${__t(58)}</button><button type="button" data-tl="alr" class="${Ae?"on":""}">\u26A0\uFE0F ${f}${f===1?__t(361):__t(362)}</button>${l.map(S=>`<button type="button" data-tl="line:${m(S)}" class="${me===S?"on":""}">\u{1F4CB} ${m(S)}</button>`).join("")}<a href="https://www.whatsapp.com/channel/0029Vav4hGTId7nPenKMuo2C" target="_blank" rel="noopener" title="${__t(174)}">\u{1F4AC}</a>`,oa.querySelectorAll("[data-tl]").forEach(S=>S.onclick=()=>{let A=S.dataset.tl;Nt=A==="stats",Ae=A==="alr",me=A.startsWith("line:")?A.slice(5):"",Ut=!1,bt=null,re=-1,Nt&&(Ue.at=0),p._h="",Ce(),wd()}))}document.addEventListener("visibilitychange",()=>{!document.hidden&&window.__txt&&window.__txt()});let bx="https://raw.githubusercontent.com/elMonoAmelio/catalunya-survival/horarios/rod_pack.json",Mx=()=>yt(new Date).ymd.replace(/-/g,"");function To(){navigator.onLine===!1||location.protocol==="file:"&&!/[?&]pack=1/.test(location.search)||fetch(bx,{cache:"no-store"}).then(a=>a.ok?a.text():null).then(a=>{if(!a)return;let l;try{l=JSON.parse(a)}catch{return}if(!l||!l.gen||!Array.isArray(l.days)||!l.trips||l.gen<=t.gen)return;try{localStorage.setItem("rod_pack",a)}catch{return}let u=Mx(),f=t.days.indexOf(u),x=l.days.indexOf(u),S=f<0?0:dt.filter(R=>R.day===f).length,A=0;if(x>=0)for(let R of l.trips)R[0]===x&&A++;let P=x>=0&&S&&(Math.abs(A-S)/S>.1||!A);if(f<0||f>=t.days.length-2||P){try{sessionStorage.setItem("rod_packmsg",P?"1":"")}catch{}location.reload();return}Ao.v=!0}).catch(()=>{})}let Ao={v:!1};document.addEventListener("visibilitychange",()=>{document.hidden&&Ao.v?(Ao.v=!1,Ao.reload=!0):!document.hidden&&Ao.reload&&location.reload()});try{sessionStorage.getItem("rod_packmsg")==="1"&&(sessionStorage.removeItem("rod_packmsg"),setTimeout(()=>Be("\u{1F5D3}\uFE0F "+__t(606)),1500))}catch{}if(setTimeout(To,4e3),document.addEventListener("visibilitychange",()=>{!document.hidden&&Date.now()-(To.at||0)>6*36e5&&(To.at=Date.now(),To())}),To.at=Date.now(),window.__RODNEW__){let a=window.__RODNEW__,l=y("#ver");l&&l.firstChild&&l.firstChild.nodeType===3&&(l.firstChild.textContent=l.firstChild.textContent.replace(/(\d\d\/\d\d \d\d:\d\d)/,a.slice(8,10)+"/"+a.slice(5,7)+" "+a.slice(11,16)))}function mc(){zm();let a=window.__L||"es",l=pi.mode,u=(f,x,S,A)=>`<div class="irow"><span class="iic" style="--ic:${x}">${f}</span><span class="ilab">${S}</span>${A||""}</div>`;Ar.innerHTML=`<h3 class="ilt">${__t(605)}</h3>
      <div class="icard">${u("\u{1F310}","#0a84ff",__t(607))}<div class="seg2 iseg">${"ca|Catal\xE0,es|Espa\xF1ol,en|English".split(",").map(f=>f.split("|")).map(([f,x])=>`<button type="button" data-lang="${f}" class="${a===f?"on":""}">${x}</button>`).join("")}</div>
      ${u("\u{1F319}","#5e5ce6",__t(608))}<div class="seg2 iseg">${[["auto",__t(383)],["light",__t(609)],["dark",__t(610)]].map(([f,x])=>`<button type="button" data-th="${f}" class="${l===f?"on":""}">${x}</button>`).join("")}</div>
      ${u("\u{1F520}","#8e8e93",__t(611))}<div class="seg2 iseg">${(()=>{let f="";try{f=localStorage.getItem("rod_big")||""}catch{}let x=f==="1"?"1":f==="0"?"0":"a";return[["a",__t(383)],["0","Normal"],["1",__t(612)]].map(([S,A])=>`<button type="button" data-big="${S}" class="${x===S?"on":""}">${A}</button>`).join("")})()}</div></div>${(()=>{let f="";try{f=localStorage.getItem("rod_big")||""}catch{}return f==="1"||f==="0"?"":`<small class="tabAhint ifoot">${__t(613)}</small>`})()}
      <div class="ihd">${__t(205)}</div><div class="icard">${u("\u{1F514}","#ff453a",__t(614),'<div id="tabAbell"></div>')}${(()=>{let f=cc();return f.length>1?`<div class="irow isub"><span class="ilab">${__t(615)}</span></div><div class="alch">${f.map(x=>`<button type="button" data-al="${m(x)}" class="ln${Er.has(x)?" off":""}" style="--c:${Z[x]}">${m(x)}</button>`).join("")}</div>`:""})()}</div><small class="tabAhint ifoot">${__t(616)}</small>${cc().length?"":`<small class="tabAhint ifoot">${__t(617)}</small>`}
      <div class="icard">${u("\u{1F4E1}","#30d158",__t(618))}<div id="tabArt" class="ibody"></div>${u("\u2139\uFE0F","#636366",__t(619))}<div id="tabAinf" class="ibody"></div></div>
      <p class="tdisc ifoot">${__t(620)}</p>
      <p class="tabAfoot">MonkiSoft</p>`,Ar.querySelectorAll("[data-al]").forEach(f=>f.onclick=()=>{let x=f.dataset.al,S=cc();Er.has(x)?Er.delete(x):S.filter(A=>!Er.has(A)).length>1&&Er.add(x);try{localStorage.setItem("rod_aloff",JSON.stringify([...Er]))}catch{}ge(!0),mc()}),Ar.querySelectorAll("[data-big]").forEach(f=>f.onclick=()=>{let x=f.dataset.big;try{x==="a"?localStorage.removeItem("rod_big"):localStorage.setItem("rod_big",x)}catch{}window.__txt&&window.__txt(),mc(),ge(!0)}),Ar.querySelectorAll("[data-th]").forEach(f=>f.onclick=()=>{pi.mode=f.dataset.th;try{localStorage.setItem("rod_theme",pi.mode)}catch{}Kl(),mc()}),Md(y("#bell"),y("#tabAbell")),Md(y("#src"),y("#tabArt")),Md(y("#ver"),y("#tabAinf"))}function Oi(a){if(!Ve.on)return;let l=Ve.cur;if(Ve.cur=a,document.documentElement.dataset.tab=a,window.__mapHidden=a!=="map",a!=="map"&&(p.classList.remove("peek","sw"),p.classList.contains("min")&&window.__mcsMin&&window.__mcsMin(!1),p.style.transform="",p.style.opacity=""),!window.__mapHidden&&window.__wakeMap&&window.__wakeMap(),Nn.querySelectorAll("[data-tab]").forEach(u=>u.classList.toggle("on",u.dataset.tab===a)),aa(),a==="line")(bt||re>=0)&&(Ve.keep={t:bt,s:re,sk:Ve.sk}),!Nt&&!Ae&&!me&&!Ut&&(Nt=!0,Ue.at=0),bt=null,re=-1,p._h="",Ce(),wd();else if(l==="line"){Nt=Ae=Ut=!1,me="";let u=Ve.keep;Ve.keep=null,u&&a==="map"&&!bt&&re<0&&(bt=u.t,re=u.s,Ve.sk=u.sk),p._h="",Ce()}if(a==="map"&&l!=="map"){let u=ht.tid||(bt&&bt.num!=null?String(bt.num):""),f=u&&Ft.find(x=>x.tr&&String(x.tr.num)===u);if(f){Ut=Ae=Nt=!1,re=-1,bt=f.tr,de=f.tr;let x=f.real&&f.v&&f.v.w?f.v.w:f.p&&f.p.w;x&&Object.assign(s,{tx:x[0],ty:x[1],dist:ld}),innerWidth<=640&&p.classList.add("peek"),p._h="",Ce(),Le=0,o()}}a==="map"&&requestAnimationFrame(()=>requestAnimationFrame(()=>{try{Qh()}catch{}dispatchEvent(new Event("resize"))})),a==="set"&&mc(),a==="now"&&(ge(!0),requestAnimationFrame(uc)),Le=0,o()}Nn.onclick=a=>{if(Date.now()<ai.until)return;let l=a.target.closest("[data-tab]");l&&Oi(l.dataset.tab)},window.__rodTabSync=()=>{if(!Ve.on)return;let a=bt?"t"+(bt.num||bt.vtid):re>=0?"s"+re:"",l=a!==Ve.sk;Ve.sk=a,a&&l&&Ve.cur!=="map"?Oi("map"):(Ae||me||Ut)&&Ve.cur!=="line"&&Ve.cur!=="map"&&Oi("line"),Ve.cur==="line"&&wd()};function Ed(){let a=pc.matches||document.documentElement.classList.contains("cap");if(a!==Ve.on)if(Ve.on=a,document.documentElement.classList.toggle("tabmode",a),requestAnimationFrame(()=>requestAnimationFrame(aa)),a||(window.__mapHidden=!1),a){let l="now";try{let u=sessionStorage.getItem("rod_tabgo");u&&(sessionStorage.removeItem("rod_tabgo"),/^(now|map|line|set)$/.test(u)&&(l=u))}catch{}Oi(l)}else delete document.documentElement.dataset.tab,zm()}pc.addEventListener?pc.addEventListener("change",Ed):pc.addListener(Ed),Ed();{let a=y("#rc"),l=()=>document.documentElement.style.setProperty("--rch",Math.round(a.getBoundingClientRect().height)+"px");window.ResizeObserver&&new ResizeObserver(l).observe(a),l()}let Td={"\u{1F3D8}":'<path d="M3 21V11l5-4 5 4v10"/><path d="M13 21V9l4-3 4 3v12"/><path d="M2 21h20"/><path d="M7 21v-4h2v4"/>',"\u{1F3E0}":'<path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/>',"\u{1F4BC}":'<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5h6v2"/><path d="M3 13h18"/>',"\u{1F4CD}":'<path d="M12 21s-7-6.5-7-12a7 7 0 0114 0c0 5.5-7 12-7 12z"/><circle cx="12" cy="9" r="2.5"/>',"\u{1F686}":'<rect x="5" y="3" width="14" height="14" rx="3"/><path d="M5 11h14M8 21l2-4M16 21l-2-4"/><circle cx="9" cy="14" r=".6"/><circle cx="15" cy="14" r=".6"/>',"\u{1F6B6}":'<circle cx="13" cy="4" r="2"/><path d="M12 7l-2 6 3 3v5M10 13l-3 8M11 8l4 3h3M11 8l-4 3"/>',"\u{1F689}":'<path d="M4 20h16M6 20V9l6-5 6 5v11"/><path d="M10 20v-5h4v5"/>',"\u26A0\uFE0F":'<path d="M12 3l10 18H2z"/><path d="M12 10v5M12 18v.4"/>',"\u{1F4CC}":'<path d="M9 3h6l-1 6 3 3H7l3-3z"/><path d="M12 12v9"/>',"\u{1F5D3}\uFE0F":'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',"\u{1F4E1}":'<path d="M5 19a10 10 0 0114 0M8 16a6 6 0 018 0"/><circle cx="12" cy="20" r="1"/><path d="M3 15a14 14 0 0118 0"/>',"\u{1F552}":'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',"\u{1F5FA}\uFE0F":'<path d="M9 4L3 6v14l6-2 6 2 6-2V4l-6 2-6-2z"/><path d="M9 4v14M15 6v14"/>',"\u{1F4CA}":'<path d="M4 20V11M10 20V4M16 20v-7M2 20h20"/>',"\u2699\uFE0F":'<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1"/>',"\u{1F310}":'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/>',"\u{1F319}":'<path d="M20 14A8 8 0 1110 4a7 7 0 0010 10z"/>',"\u{1F520}":'<path d="M3 18l4-12 4 12M4.5 14h5M15 18V9h3.5a2.5 2.5 0 010 5H15M15 14h4a2 2 0 010 4h-4"/>',"\u{1F514}":'<path d="M6 16V11a6 6 0 0112 0v5l2 2H4z"/><path d="M10 21h4"/>',"\u{1F515}":'<path d="M6 16V11a6 6 0 0112 0v5l2 2H4z"/><path d="M10 21h4M3 3l18 18"/>',"\u2139\uFE0F":'<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.5"/>',"\u{1F4CB}":'<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V3h6v1M8 10h8M8 14h8M8 18h5"/>',"\u{1F4AC}":'<path d="M4 5h16v11H9l-5 4z"/>',"\u26D4":'<circle cx="12" cy="12" r="9"/><path d="M7 12h10"/>',"\u{1F4F6}":'<path d="M4 20v-3M9 20v-7M14 20V9M19 20V5"/>',"\u23F3":'<path d="M7 3h10M7 21h10M8 3c0 6 8 6 8 9s-8 3-8 9M16 3c0 6-8 6-8 9s8 3 8 9"/>',"\u{1F3D9}\uFE0F":'<path d="M3 21V9h6v12M9 21V4h6v17M15 21v-9h6v9M2 21h20"/>',"\u{1F4E4}":'<path d="M12 15V3M7 8l5-5 5 5"/><path d="M5 12v8h14v-8"/>',"\u2B50":'<path d="M12 3l2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.3 6.4 20.2l1.1-6.2L3 9.6l6.2-.9z"/>'},Ad=new RegExp("("+Object.keys(Td).map(a=>a.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")).join("|")+")\uFE0F?","g"),wx=a=>`<span class="ico" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${Td[a]||Td[a+"\uFE0F"]||""}</svg></span>`;function Ex(a){let l=document.createTreeWalker(a,NodeFilter.SHOW_TEXT),u=[],f;for(;f=l.nextNode();)f.parentElement&&f.parentElement.closest(".ico,script,style,textarea,input")||(Ad.lastIndex=0,Ad.test(f.nodeValue)&&u.push(f));for(let x of u){let S=document.createElement("span");S.innerHTML=m(x.nodeValue).replace(Ad,(A,P)=>wx(P)),x.replaceWith(...S.childNodes)}return u.length}{let a=()=>["#home","#tabs","#tabA","#tabL","#mcs","#onb","#toast","#rc","#inf","#mbtn","#sbtn","#wabtn","#bell","#list"].map(x=>y(x)).filter(Boolean),l=!1,u=()=>{if(!l){l=!0;try{let x=0;a().forEach(S=>{x+=Ex(S)}),x&&Ve.on&&uc()}finally{l=!1}}},f=new MutationObserver(()=>{l||queueMicrotask(u)});setTimeout(()=>{u(),a().forEach(x=>f.observe(x,{childList:!0,subtree:!0,characterData:!0}))},0)}window.__rod={PIN:ln,LASTPIN:Rn,get ONBX(){return{tid:ht.tid,lock:ht.lock,manual:ht.manual}},xferCands:mm,bestXfer:hd,xferFirst:ud,nowState:Qt,XMIN:pm,pinNotify:Cm,toast:Be,cardEta:ea,HOME:Xe,WORK:$e,ONB:ht,alertForMe:bm,whereAmI:md,departuresFor:Zn,DEPS:Bt,tripByNum:Ps,delayOf:kt,TID:mt,SID:zt,byDay:st,get days(){return t.days},get hist(){return Ue},get past(){return pt.cur},get cols(){return gn.mesh?gn.mesh.count:-1},get dist(){return r.dist},get follow(){return de},get selTrip(){return bt},ST:E,TR:dt,FAM:Y,act:()=>Ft,setSpeed:Bm,RT:V,pollRT:q,nowState:Qt,posAt:Q,activeTrips:ft,LL:Mt,select:a=>{bt=a,Ce()}}}var eo=window.__DATA__;var Ge=i=>document.querySelector(i),Vs=i=>String(i).replace(/\B(?=(\d{3})+(?!\d))/g,"."),ni=(i,t,e)=>Math.min(e,Math.max(t,i)),pp=i=>i.normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase(),di=Ge("#c"),zl=new Ch({canvas:di,antialias:!0});zl.setPixelRatio(Math.min(devicePixelRatio||1,2));var Hs=new Jo;Hs.background=new ye(15659509);var Wh=35,ws=new ti(Wh,1,2,1500);Hs.add(new xl(16777215,9080992,1));var c_=new yl(16777215,.9);c_.position.set(-40,-70,90);Hs.add(c_);var bs=100/eo.w,kl=eo.w/2,$l=eo.h/2,bn=[],mp=new Ji;Hs.add(mp);var $h=new Or({color:16777215,transparent:!0,opacity:.55});for(let i of eo.m){let t=new Ji,e=[],n=[],s=1e9,r=-1e9,o=1e9,c=-1e9;for(let M of i.g){let w=M.map(y=>{let m=[];for(let z=0;z<y.length;z+=2)m.push(new Wt((y[z]-kl)*bs,(y[z+1]-$l)*bs));return m.length>1&&m[0].equals(m[m.length-1])&&m.pop(),m}).filter(y=>y.length>=3);if(!w.length)continue;let N=new ka(w[0]);for(let y=1;y<w.length;y++)N.holes.push(new Br(w[y]));e.push(N);for(let y of w[0])s=Math.min(s,y.x),r=Math.max(r,y.x),o=Math.min(o,y.y),c=Math.max(c,y.y);for(let y of w)n.push(new el(new En().setFromPoints(y.map(m=>new j(m.x,m.y,0))),$h))}if(!e.length)continue;let h;try{h=new dl(e,{depth:1,bevelEnabled:!1})}catch{continue}let d=new ml({color:13421772}),p=new Bn(h,d);t.add(p);let b=new Ji;n.forEach(M=>b.add(M)),b.position.z=.04,mp.add(b),t.scale.z=.01,mp.add(t);let g={og:b,rings:i.g,inF:!0,sel:null,code:i.c,name:i.n,pop:i.p,area:i.a,pr:i.pr,rankP:0,rankD:0,group:t,mesh:p,mat:d,cx:(s+r)/2,cy:(o+c)/2,size:Math.max(r-s,c-o),z:.01,zt:.01,rank:0};p.userData.m=g,bn.push(g)}var HA=bn.map(i=>i.mesh),e_=i=>{let t=0;for(let e=0;e<i.length;e+=2){let n=(e+2)%i.length;t+=i[e]*i[n+1]-i[n]*i[e+1]}return Math.abs(t)/2},u_=0,h_=0;for(let i of bn){for(let t of i.rings)u_+=e_(t[0])-t.slice(1).reduce((e,n)=>e+e_(n),0);h_+=i.area}var ew=Math.sqrt(h_/u_),Fh={"08":"Barcelona",17:"Girona",25:"Lleida",43:"Tarragona"},d_={"08":__t(621),17:__t(622),25:__t(623),43:__t(624)},bp="sqrt",Mp="pop",dp=0,gp=0,Za=1,Fl=1,nw={sqrt:i=>Math.sqrt(i),lin:i=>i,log:i=>Math.log10(Math.max(i,1))},_p=i=>Mp==="pop"?i.pop:i.pop/i.area,Uh=["#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#b10026","#5c0020"].map(i=>new ye(i));function iw(i){i=ni(i,0,1)*(Uh.length-1);let t=Math.min(Math.floor(i),Uh.length-2);return Uh[t].clone().lerp(Uh[t+1],i-t)}var ja=i=>i>=100?Vs(Math.round(i)):i.toLocaleString("es-ES",{maximumFractionDigits:1});function sw(){gp=0;for(let i of bn)gp+=i.pop;[...bn].sort((i,t)=>t.pop-i.pop).forEach((i,t)=>i.rankP=t+1),[...bn].sort((i,t)=>t.pop/t.area-i.pop/i.area).forEach((i,t)=>i.rankD=t+1),m_()}var f_=new ye("#d3d8e2"),p_=new ye("#eceff3");window.__mapTheme=i=>{Hs.background=new ye(i?856345:15659509),p_.set(i?"#2b3242":"#eceff3"),f_.set(i?"#1a1f29":"#d3d8e2"),$h.color.set(i?856345:16777215),$h.opacity=i?.7:.55,wp.color.set(i?329483:2764864),Ep.color.set(i?9081766:16777215);for(let t of bn)t.base&&Xh(t);$n()};function Xh(i){i.mat.color.copy(i.base).lerp(p_,document.documentElement.classList.contains("dark")?.95:.86),i.inF||i.mat.color.lerp(f_,.8)}function m_(){Za=1,Fl=1e12;for(let e of bn){let n=_p(e);Za=Math.max(Za,n),Fl=Math.min(Fl,n)}let i=Math.log10(Math.max(Fl,.01)),t=Math.log10(Za);for(let e of bn)e.base=iw((Math.log10(Math.max(_p(e),.01))-i)/(t-i)),Xh(e);Ge("#lmin").textContent=ja(Fl),Ge("#lmax").textContent=ja(Za),Ge("#lname").textContent=Mp==="pop"?__t(625):__t(626),qh()}function qh(){let i=nw[bp],t=i(Za),e=24*dp;for(let n of bn)n.zt=dp<=.001?.01:Math.max(.12*Math.min(1,dp),e*i(_p(n))/t)*(n.inF?1:.1);$n()}var n_=Object.fromEntries(bn.map(i=>[i.code,i])),Bh=[],g_=[];for(let i of eo.bd){let t=n_[i.a],e=n_[i.b];if(!(!t||!e))for(let n=0;n+3<i.p.length;n+=2)g_.push((i.p[n]-kl)*bs,(i.p[n+1]-$l)*bs,0,(i.p[n+2]-kl)*bs,(i.p[n+3]-$l)*bs,0),Bh.push(t,e)}var zh=new ts;zh.setPositions(g_);var wp=new _s({color:2764864,linewidth:4.4,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3}),Ep=new _s({color:16777215,linewidth:2.4,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-6});[wp,Ep].forEach((i,t)=>{let e=new Wr(zh,i);e.frustumCulled=!1,e.renderOrder=10+t,Hs.add(e)});function rw(){let i=zh.attributes.instanceStart.data.array;for(let t=0;t<Bh.length;t+=2){let e=Math.max(Bh[t].z,Bh[t+1].z)+.12,n=t/2*6;i[n+2]=e,i[n+5]=e}zh.attributes.instanceStart.data.needsUpdate=!0}var Vh={};for(let i of Object.keys(Fh)){let t=bn.filter(p=>p.pr===i),e=0,n=0,s=0,r=1e9,o=-1e9,c=1e9,h=-1e9;for(let p of t)e+=p.area,n+=p.cx*p.area,s+=p.cy*p.area,r=Math.min(r,p.cx),o=Math.max(o,p.cx),c=Math.min(c,p.cy),h=Math.max(h,p.cy);let d=document.createElement("div");d.className="plab",d.textContent=Fh[i],d.title=__t(627)+d_[i],d.onclick=()=>gw("pr:"+i),document.body.appendChild(d),Vh[i]={el:d,p:new j(n/e,s/e,0),cx:(r+o)/2,cy:(c+h)/2,ext:Math.max(o-r,h-c),ext2:[o-r,h-c],area:e,name:Fh[i]}}var fp=new j;function aw(){for(let i in Vh){let t=Vh[i];fp.copy(t.p).project(ws),t.el.style.transform=`translate(-50%,-50%) translate(${(fp.x*.5+.5)*innerWidth}px,${(-fp.y*.5+.5)*innerHeight}px)`}}var Cn={tilt:0,yaw:0,dist:150,tx:0,ty:0},Pe={...Cn};function ow(){let i=innerWidth/innerHeight,t=Math.tan(Wh*Math.PI/360);return Math.max(eo.h*bs*1.1,100*1.1/i)/(2*t)}var lw=document.getElementById("northr");document.getElementById("north").addEventListener("click",()=>{Pe.yaw=Math.round(Pe.yaw/(2*Math.PI))*2*Math.PI,Pe.tilt=0,$n()});function Tp(){Object.assign(Pe,{tilt:0,yaw:0,dist:ow(),tx:0,ty:0}),$n()}function cw(){let{tilt:i,yaw:t,dist:e,tx:n,ty:s}=Cn;ws.position.set(n+e*Math.sin(i)*Math.sin(t),s-e*Math.sin(i)*Math.cos(t),e*Math.cos(i)),ws.up.set(-Math.cos(i)*Math.sin(t),Math.cos(i)*Math.cos(t),Math.sin(i)),ws.lookAt(n,s,0)}var Bl=!0,i_=performance.now(),Qa=new Map,pr=0,Oh=0;function Ap(){pr&&(clearTimeout(pr),pr=0,requestAnimationFrame(Ka))}function $n(){Bl=!0,Ap()}window.__wakeMap=Ap;["pointerdown","wheel","touchstart","keydown"].forEach(i=>addEventListener(i,Ap,{passive:!0,capture:!0}));function Ka(i){pr=0;let t=ni((i-i_)/1e3,0,.05);i_=i;let e=1-Math.exp(-t*10),n=!1;for(let s of Object.keys(Cn)){let r=Pe[s]-Cn[s];Math.abs(r)>1e-4*(s==="dist"?10:1)?(Cn[s]+=r*e,n=!0):Cn[s]=Pe[s]}for(let s of bn){let r=s.zt-s.z;Math.abs(r)>.002?(s.z+=r*Math.min(1,e*.8),s.group.scale.z=s.z,s.og.position.z=s.z+.04,n=!0):s.z!==s.zt&&(s.z=s.zt,s.group.scale.z=s.z,s.og.position.z=s.z+.04)}for(let[s,r]of Qa){let o=(i-r)/1800;o>=1?(Qa.delete(s),Zr(s)):Zr(s,.5*Math.sin(Math.PI*o)),n=!0}if(window.__rodTick&&window.__rodTick(i)&&(Bl=!0),window.__mapHidden){Bl=!0,pr=setTimeout(()=>{pr=0,requestAnimationFrame(Ka)},1e3);return}if(n||Bl){lw.style.transform=`rotate(${Cn.yaw}rad) scaleY(${(.55+.45*Math.cos(Cn.tilt)).toFixed(3)})`;{let s=Math.abs(Math.sin(Pe.yaw/2))<.02&&Pe.tilt<.03,r=document.getElementById("north");r.classList.contains("flat")!==s&&(r.classList.toggle("flat",s),r.title=s?__t(628):__t(629))}cw(),rw(),aw(),window.__rodFrame&&window.__rodFrame(),zl.render(Hs,ws),Bl=n,Ge("#tilt").value=Math.round(Pe.tilt*180/Math.PI),Ge("#yaw").value=Math.round(((Pe.yaw*180/Math.PI+180)%360+360)%360-180)}if(n||Qa.size){Oh=0,requestAnimationFrame(Ka);return}Oh||(Oh=i),i-Oh<1500?requestAnimationFrame(Ka):pr=setTimeout(()=>{pr=0,requestAnimationFrame(Ka)},120)}function __(){zl.setSize(innerWidth,innerHeight,!1),ws.aspect=innerWidth/innerHeight,ws.updateProjectionMatrix(),wp.resolution.set(innerWidth,innerHeight),Ep.resolution.set(innerWidth,innerHeight),window.__rodResize&&window.__rodResize(),$n()}addEventListener("resize",()=>{__(),fn.length&&gr()});di.addEventListener("wheel",i=>{i.preventDefault();let t=i.deltaMode===1?16:1,e=i.deltaY*t;if(i.altKey){let n=(Math.abs(i.deltaX)>Math.abs(i.deltaY)?i.deltaX:i.deltaY)*t;Pe.yaw+=n*.0035}else i.ctrlKey?Pe.dist=ni(Pe.dist*Math.exp(e*.01),6,400):Pe.tilt=ni(Pe.tilt+e*.002,0,1.32);$n()},{passive:!1});di.addEventListener("contextmenu",i=>i.preventDefault());var Ms=new Map,bi=null,qr=0,xp=0,vp=0;var Hh=null;di.addEventListener("pointerdown",i=>{if(i.pointerType!=="mouse"&&!document.body.classList.contains("used")&&(document.body.classList.add("used"),fn.length&&setTimeout(gr,50)),di.setPointerCapture(i.pointerId),Ms.set(i.pointerId,{x:i.clientX,y:i.clientY}),Ms.size===1&&(bi={rot:i.button===2||i.altKey,moved:0,multi:!1,touch:i.pointerType!=="mouse"}),Ms.size===2){let[t,e]=[...Ms.values()];qr=Math.hypot(t.x-e.x,t.y-e.y),xp=Math.atan2(e.y-t.y,e.x-t.x),vp=(t.y+e.y)/2,Hh={mode:null,rot:0,sc:0,tl:0},bi&&(bi.multi=!0)}Cp()});di.addEventListener("pointermove",i=>{let t=Ms.get(i.pointerId);if(!t){zs={x:i.clientX,y:i.clientY},yp||(yp=requestAnimationFrame(hw));return}let e=i.clientX-t.x,n=i.clientY-t.y;if(t.x=i.clientX,t.y=i.clientY,Ms.size===2){let[s,r]=[...Ms.values()],o=Math.hypot(s.x-r.x,s.y-r.y),c=Math.atan2(r.y-s.y,r.x-s.x),h=(s.y+r.y)/2,d=c-xp;d>Math.PI&&(d-=2*Math.PI),d<-Math.PI&&(d+=2*Math.PI);let p=qr?o-qr:0,b=h-vp,g=Hh||(Hh={mode:null,rot:0,sc:0,tl:0});g.rot+=d,g.sc+=p,g.tl+=b,g.mode?g.mode==="zoom"&&Math.abs(g.rot)>.45&&(g.mode="rotate"):Math.abs(g.rot)>.3?g.mode="rotate":Math.abs(g.tl)>30&&Math.abs(g.sc)<18?g.mode="tilt":Math.abs(g.sc)>12&&(g.mode="zoom"),(g.mode==="zoom"||g.mode==="rotate")&&qr&&(Pe.dist=ni(Pe.dist*qr/o,6,400)),g.mode==="rotate"&&(Pe.yaw+=d,Cn.yaw=Pe.yaw),g.mode==="tilt"&&(Pe.tilt=ni(Pe.tilt-b*.006,0,1.32),Cn.tilt=Pe.tilt),qr=o,xp=c,vp=h,$n();return}if(bi.moved+=Math.abs(e)+Math.abs(n),bi.rot||i.altKey)Pe.yaw+=e*.005,Pe.tilt=ni(Pe.tilt+n*.004,0,1.32),Cn.yaw=Pe.yaw,Cn.tilt=Pe.tilt;else{let s=2*Cn.dist*Math.tan(Wh*Math.PI/360)/innerHeight,r=Math.sin(Cn.yaw),o=Math.cos(Cn.yaw),c=1/Math.max(Math.cos(Cn.tilt),.3);Pe.tx=ni(Pe.tx-o*e*s+-r*n*s*c,-70,70),Pe.ty=ni(Pe.ty-r*e*s+o*n*s*c,-70,70),Cn.tx=Pe.tx,Cn.ty=Pe.ty}$n()});var x_=i=>{let t=bi&&!bi.rot&&!bi.multi&&bi.moved<(bi.touch?12:6)&&i.type==="pointerup"&&Ms.size===1,e=bi&&bi.touch;Ms.delete(i.pointerId),qr=0,Hh=null,Ms.size||(bi=null),t&&window.__rodTap&&window.__rodTap(i.clientX,i.clientY)};di.addEventListener("pointerup",x_);di.addEventListener("pointercancel",x_);di.addEventListener("dblclick",Tp);addEventListener("keydown",i=>{i.key==="Alt"&&(di.style.cursor="move")});addEventListener("keyup",i=>{i.key==="Alt"&&(di.style.cursor="")});addEventListener("blur",()=>{di.style.cursor=""});var uw=new bl,s_=new Wt,zs=null,yp=0,Yr=null;function hw(){if(yp=0,!zs||bi)return;s_.set(zs.x/innerWidth*2-1,-(zs.y/innerHeight)*2+1),uw.setFromCamera(s_,ws);let i=null;if(i!==Yr){let e=Yr;Yr=i,e&&Zr(e),i&&Zr(i),$n()}let t=window.__rodHover&&window.__rodHover(zs.x,zs.y);if(t){Xr.innerHTML=t,Xr.style.display="block";let e=Xr.offsetWidth,n=Xr.offsetHeight;Xr.style.left=ni(zs.x+14,6,innerWidth-e-6)+"px",Xr.style.top=ni(zs.y+14,6,innerHeight-n-6)+"px",di.style.cursor="pointer"}else Cp(),di.style.cursor=""}di.addEventListener("pointerleave",()=>{if(zs=null,Yr){let i=Yr;Yr=null,Zr(i),$n()}Cp()});var Xr=Ge("#tip");function Cp(){Xr.style.display="none"}document.querySelectorAll("[data-metric]").forEach(i=>i.onclick=()=>{Mp=i.dataset.metric,document.querySelectorAll("[data-metric]").forEach(t=>t.classList.toggle("on",t===i)),m_()});document.querySelectorAll("[data-mode]").forEach(i=>i.onclick=()=>{bp=i.dataset.mode,document.querySelectorAll("[data-mode]").forEach(t=>t.classList.toggle("on",t===i)),qh()});Ge("#yaw").oninput=i=>{Pe.yaw=+i.target.value*Math.PI/180,$n()};Ge("#tilt").oninput=i=>{Pe.tilt=+i.target.value*Math.PI/180,$n()};Ge("#zin").onclick=()=>{Pe.dist=ni(Pe.dist*.75,6,400),$n()};Ge("#zout").onclick=()=>{Pe.dist=ni(Pe.dist/.75,6,400),$n()};Ge("#rst").onclick=Tp;var r_=["#2563eb","#059669","#7c3aed","#db2777","#0891b2","#ca8a04"],fn=[],a_={},dw=i=>a_[i]||(a_[i]=new Or({color:i}));function v_(i,t){i.og.children.forEach(e=>e.material=t?dw(t):$h)}function Zr(i,t=0){let e=i.mat.emissive;i===Yr?e.setHex(5592405):i.sel?e.copy(i.sel.tint):e.setHex(0),t&&e.addScalar(t)}function Rp(i,t){let e=1e9,n=-1e9,s=1e9,r=-1e9;for(let d of i)e=Math.min(e,d.cx-d.size/2),n=Math.max(n,d.cx+d.size/2),s=Math.min(s,d.cy-d.size/2),r=Math.max(r,d.cy+d.size/2);let o=innerWidth/innerHeight,c=Math.tan(Wh*Math.PI/360),h=i.length===1?ni(i[0].size*3.2+14,14,120):ni(Math.max((r-s)*1.5,(n-e)*1.5/o)/(2*c)+6,14,300);Object.assign(Pe,{tx:(e+n)/2,ty:(s+r)/2,dist:h,tilt:t,yaw:0}),$n()}var mr=Ge("#q"),Ii=Ge("#list"),dn=Ge("#mcs");function Yh(i,t=!0){if(Ii.style.display="none",mr.value="",!i.sel){fn.length>=6&&y_(fn[0].o,!0);let e=new Set(fn.map(s=>s.color)),n=r_.find(s=>!e.has(s))||r_[0];i.sel={o:i,color:n,tint:new ye(n).multiplyScalar(.12)},fn.push(i.sel),v_(i,n)}dn.classList.contains("min")&&no(!1),Qa.set(i,performance.now()),Zr(i),t&&Rp([i],Math.max(Pe.tilt,.9)),gr()}function y_(i,t){let e=fn.indexOf(i.sel);e>=0&&fn.splice(e,1),i.sel=null,v_(i,null),Zr(i),$n(),t||gr()}function S_(i){let t=Math.min(devicePixelRatio||1,2),e=i.clientWidth,n=i.clientHeight;i.width=e*t,i.height=n*t;let s=i.getContext("2d");s.scale(t,t),s.clearRect(0,0,e,n);let r=fn.map(p=>{let b=1e9,g=-1e9,M=1e9,w=-1e9;for(let N of p.o.rings)for(let y=0;y<N[0].length;y+=2)b=Math.min(b,N[0][y]),g=Math.max(g,N[0][y]),M=Math.min(M,N[0][y+1]),w=Math.max(w,N[0][y+1]);return{x0:b,x1:g,y0:M,y1:w}}),o=Math.max(...r.map(p=>Math.max(p.x1-p.x0,p.y1-p.y0))),c=(Math.min(e,n)-22)/o;fn.forEach((p,b)=>{let g=r[b],M=(g.x0+g.x1)/2,w=(g.y0+g.y1)/2;s.beginPath();for(let N of p.o.rings)for(let y of N)for(let m=0;m<y.length;m+=2){let z=e/2+(y[m]-M)*c,H=n/2-(y[m+1]-w)*c;m?s.lineTo(z,H):s.moveTo(z,H),m===y.length-2&&s.closePath()}s.fillStyle=p.color+"40",s.fill("evenodd"),s.lineWidth=1.6,s.strokeStyle=p.color,s.stroke()});let h=c/ew,d=[.5,1,2,5,10,20,50,100].find(p=>p*h>=28)||100;s.fillStyle="#6b7385",s.fillRect(10,n-12,d*h,2),s.font="10px system-ui",s.fillText(d+" km",12+d*h,n-8)}function gr(){if(!fn.length){dn.innerHTML="",dn.style.display="none",no(!1);return}if(dn.style.display="flex",innerWidth<=640){let e=Ge("#inf").getBoundingClientRect().bottom;dn.style.top=Math.round(e+8)+"px",dn.style.maxHeight=Math.max(110,Math.min(innerHeight*(Ge("#rc").classList.contains("min")?.7:.4),Ge("#rc").getBoundingClientRect().top-e-16))+"px",dn.style.width=""}else if(innerHeight<=500){let e=Ge("#inf").getBoundingClientRect().bottom;dn.style.top=Math.round(e+8)+"px",dn.style.maxHeight=Math.max(120,innerHeight-e-20)+"px",dn.style.width="min(290px, 40vw)"}else dn.style.top="",dn.style.maxHeight="",dn.style.width="";window.__fitMcs&&window.__fitMcs();let i=fn.map((e,n)=>{let s=e.o;return`<div class="mc" draggable="true" data-i="${n}" style="--c:${e.color}"><button class="x" data-x="${n}" title="Cerrar">\xD7</button><div class="mh"><i class="dot"></i><b>${s.name}</b><em>${Fh[s.pr]}</em></div><div class="mb">${Vs(s.pop)}${__t(635)}${ja(s.area)} km\xB2 \xB7 ${ja(s.pop/s.area)}${__t(636)}${s.rankP}${__t(637)}`}).join("");if(fn.length>1){let e=s=>Math.max(...fn.map(s)),n=[[__t(638),s=>s.o.pop,Vs],[__t(639),s=>s.o.area,ja],[__t(640),s=>s.o.pop/s.o.area,ja]];if(i+=`${__t(641)}`+n.map(([s,r,o])=>`<div class="cr"><span>${s}</span>${fn.map(c=>`<div class="bw"><i style="width:${Math.max(2,r(c)/e(r)*100)}%;background:${c.color}"></i><b>${o(r(c))}</b></div>`).join("")}</div>`).join(""),fn.length===2){let[s,r]=fn.map(d=>d.o),[o,c]=s.pop>=r.pop?[s,r]:[r,s],h=(d,p)=>(d>=p?d/p:p/d).toLocaleString("es-ES",{maximumFractionDigits:1});i+=`<small class="ratio"><b>${o.name}${__t(642)}${h(o.pop,c.pop)}${__t(643)}${c.name}${__t(644)}${h(o.area,c.area)}\xD7 ${o.area>=c.area?__t(645):__t(646)}.</small>`}i+="</div>"}dn.innerHTML=i,dn.querySelectorAll("[data-x]").forEach(e=>e.onclick=n=>{n.stopPropagation(),y_(fn[+e.dataset.x].o)}),dn.querySelectorAll(".mc").forEach(e=>{e.onclick=()=>Rp([fn[+e.dataset.i].o],Math.max(Pe.tilt,.9)),e.onmouseenter=()=>{let n=fn[+e.dataset.i].o;Qa.set(n,performance.now())},e.ondragstart=n=>{n.dataTransfer.setData("text/plain",e.dataset.i),e.classList.add("drag")},e.ondragend=()=>e.classList.remove("drag"),e.ondragover=n=>{n.preventDefault(),e.classList.add("over")},e.ondragleave=()=>e.classList.remove("over"),e.ondrop=n=>{n.preventDefault();let s=+n.dataTransfer.getData("text/plain"),r=+e.dataset.i;if(s!==r){let[o]=fn.splice(s,1);fn.splice(r,0,o),gr();let c=Ge("#sil");c&&c.classList.add("flash")}}});let t=Ge("#sil");t&&S_(t)}mr.addEventListener("input",()=>{if(window.__rodSearch){window.__rodSearch(mr.value);return}let i=pp(mr.value.trim());if(!i){Ii.style.display="none";return}let t=[],e=[];for(let s of bn){let r=pp(s.name);r.startsWith(i)?t.push(s):r.includes(i)&&e.push(s)}let n=t.sort((s,r)=>r.pop-s.pop).concat(e.sort((s,r)=>r.pop-s.pop)).slice(0,8);Ii.innerHTML=n.map((s,r)=>`<li data-i="${r}">${s.name}<em>${Vs(s.pop)}</em></li>`).join("")||__t(602),Ii.style.display="block",Ii.querySelectorAll("li[data-i]").forEach(s=>s.onclick=()=>Yh(n[+s.dataset.i])),Ii._r=n});mr.addEventListener("keydown",i=>{i.key==="Enter"&&Ii._pick?Ii._pick(0):i.key==="Enter"&&Ii._r&&Ii._r[0]&&Yh(Ii._r[0]),i.key==="Escape"&&(mr.value="",Ii.style.display="none")});addEventListener("keydown",i=>{i.key==="Escape"&&i.target!==mr&&b_()});var o_=0;addEventListener("resize",()=>{clearTimeout(o_),o_=setTimeout(()=>{let i=Ge("#sil");i&&S_(i)},120)});var Gh=null,Sp=Ge("#chip");function fw(i,t,e=.8){Gh={codes:new Set(i.map(n=>n.code)),label:t},bn.forEach(n=>{n.inF=Gh.codes.has(n.code),Xh(n)}),Sp.innerHTML=`${__t(647)}${t}</b> \xB7 ${i.length}${i.length===1?__t(648):__t(649)}</span><button id="chx" title="Quitar filtro">\xD7</button>`,Sp.style.display="flex",Ge("#chx").onclick=b_,qh(),Rp(i,e),i.slice(0,40).forEach(n=>Qa.set(n,performance.now()))}function b_(){Gh&&(Gh=null,bn.forEach(i=>{i.inF=!0,Xh(i)}),Sp.style.display="none",qh())}var pw="prov";function mw(i){let t=[...bn].sort((o,c)=>c.pop-o.pop),e=[...bn].sort((o,c)=>c.pop/c.area-o.pop/o.area),[n,s,r]=i.split(":");if(n==="pr")return[bn.filter(o=>o.pr===s),d_[s]];if(n==="top")return s==="pop"?[t.slice(0,10),__t(650)]:[e.slice(0,10),__t(651)];if(n==="low")return s==="pop"?[t.slice(-10),__t(652)]:[e.slice(-10),__t(653)];if(n==="size")return[bn.filter(o=>o.pop>=+s&&o.pop<+r),+r>1e9?`${Vs(+s)}${__t(654)}`:+s==0?`${__t(655)}${Vs(+r)}${__t(656)}`:`${Vs(+s)} \u2013 ${Vs(+r-1)}${__t(656)}`];if(n==="n50"){let o=0,c=0;for(let h of t)if(o+=h.pop,c++,o>=gp/2)break;return[t.slice(0,c),`${__t(657)}`]}return[[],""]}function gw(i){let[t,e]=mw(i);t.length&&fw(t,e,i.startsWith("pr:")?.75:.8)}document.querySelectorAll("[data-tab]").forEach(i=>i.onclick=()=>{pw=i.dataset.tab,Ge("#dbody").scrollTop=0});var Jr=Ge("#rc"),kh=Ge("#mcstab");function to(i){Jr.classList.toggle("min",i),Ge("#rcgrab span").textContent=i?__t(699):__t(700),fn.length&&gr()}function no(i){dn.classList.toggle("min",i),dn.style.transform="",dn.style.opacity="",kh.classList.toggle("on",i&&fn.length>0),i&&(kh.textContent=`\u25B8 ${fn.length} ${fn.length===1?"ficha":"fichas"}`,kh.style.top=dn.style.top||"124px")}function Ip(i,{onMove:t,onEnd:e,axis:n}){let s=null;i.addEventListener("pointerdown",o=>{o.pointerType==="mouse"||!Jh.matches||o.target.closest("input,button:not(#rcgrab),.seg")||(s={x:o.clientX,y:o.clientY,id:o.pointerId,lock:null})}),addEventListener("pointermove",o=>{if(!s||o.pointerId!==s.id)return;let c=o.clientX-s.x,h=o.clientY-s.y;!s.lock&&Math.hypot(c,h)>10&&(s.lock=Math.abs(c)>Math.abs(h)?"x":"y"),s.lock===n&&t&&t(c,h)});let r=o=>{if(!s||o.pointerId!==s.id)return;let c=o.clientX-s.x,h=o.clientY-s.y,d=s.lock;s=null,e(d===n?c:0,d===n?h:0,d)};addEventListener("pointerup",r,!0),addEventListener("pointercancel",r,!0)}Ge("#rcgrab").onclick=()=>to(!Jr.classList.contains("min"));(innerWidth<=640||matchMedia("(max-height:500px) and (pointer:coarse)").matches||document.documentElement.classList.contains("cap"))&&to(!0);requestAnimationFrame(()=>document.documentElement.classList.remove("boot"));var M_=()=>innerWidth>640;Ip(Jr,{axis:"y",onEnd:(i,t)=>{if(!M_())if(t>40&&!Jr.classList.contains("min")){let e=Ge("#dp.open #dbody");(!e||e.scrollTop<=0||t>120)&&to(!0)}else t<-30&&Jr.classList.contains("min")&&to(!1)}});Ip(Jr,{axis:"x",onEnd:i=>{M_()&&(i>50?to(!0):i<-30&&Jr.classList.contains("min")&&to(!1))}});var l_=()=>{let i=document.documentElement.dataset.tab;return!i||i==="map"};Ip(dn,{axis:"x",onMove:i=>{i<0&&l_()&&(dn.classList.add("sw"),dn.style.transform=`translateX(${i}px)`,dn.style.opacity=Math.max(.2,1+i/300))},onEnd:i=>{dn.classList.remove("sw"),i<-60&&l_()?(no(!0),window.__rodHide&&!fn.length&&window.__rodHide()):(dn.style.transform="",dn.style.opacity="")}});kh.onclick=()=>{no(!1),gr()};window.__mcsMin=i=>no(i);Ge("#dtoggle").onclick=()=>{let i=Ge("#dp").classList.toggle("open");Ge("#rc").classList.toggle("dopen",i),Ge("#dtoggle").textContent=i?Jh.matches&&innerWidth<=640?__t(701):__t(702):__t(703),window.__rodCard&&window.__rodCard()};var Jh=matchMedia("(max-width:640px), (max-height:500px)");function w_(){let i=Ge("#leg");Jh.matches?Ge("#rc").insertBefore(i,Ge("#dtoggle")):document.body.appendChild(i),fn.length&&gr()}Jh.addEventListener("change",w_);w_();__();sw();Tp();Object.assign(Cn,Pe);for(let i of bn)i.z=.01;requestAnimationFrame(Ka);t_({scene:Hs,camera:ws,renderer:zl,goal:Pe,cur:Cn,invalidate:$n,flyTo:(i,t,e,n)=>{Object.assign(Pe,{tx:(i-kl)*bs,ty:(t-$l)*bs,dist:e,tilt:n}),$n()},K:bs,CX:kl,CY:$l,mcs:dn,q:mr,list:Ii,munis:bn,select:Yh,norm:pp,fmt:Vs,clamp:ni,mcsMin:no});window.__app={scene:Hs,renderer:zl,camera:ws,munis:bn,labs:Vh,goal:Pe,cur:Cn,select:Yh,get mode(){return bp}};window.__ready=!0;{let i=document.getElementById("ttb"),t=document.getElementById("p");i&&t&&i.addEventListener("click",()=>{let e=t.classList.toggle("tt");i.textContent=e?__t(709):__t(710)})}})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
