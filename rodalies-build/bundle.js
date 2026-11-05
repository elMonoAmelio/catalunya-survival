(()=>{var C0=0,xf=1,R0=2;var wl=1,I0=2,Va=3,lr=0,ui=1,fs=2,ps=0,Ha=1,vf=2,yf=3,Sf=4,P0=5;var kr=100,L0=101,D0=102,N0=103,U0=104,O0=200,F0=201,B0=202,k0=203,bf=204,Mf=205,$0=206,z0=207,V0=208,H0=209,G0=210,W0=211,X0=212,q0=213,Y0=214,Xc=0,qc=1,Yc=2,Ra=3,Jc=4,Zc=5,jc=6,Kc=7,Du=0,J0=1,Z0=2,ji=0,wf=1,Ef=2,Tf=3,Af=4,Cf=5,Rf=6,If=7;var Pf=300,cr=301,$r=302,Nu=303,Uu=304,El=306,Qc=1e3,os=1001,tu=1002,On=1003,j0=1004;var Tl=1005;var Hn=1006,Ou=1007;var ur=1008;var Si=1009,Lf=1010,Df=1011,Ga=1012,Fu=1013,Ki=1014,Bi=1015,Qi=1016,Bu=1017,ku=1018,Wa=1020,Nf=35902,Uf=35899,Of=1021,Ff=1022,ki=1023,cs=1026,hr=1027,$u=1028,zu=1029,dr=1030,Vu=1031;var Hu=1033,Al=33776,Cl=33777,Rl=33778,Il=33779,Gu=35840,Wu=35841,Xu=35842,qu=35843,Yu=36196,Ju=37492,Zu=37496,ju=37488,Ku=37489,Pl=37490,Qu=37491,th=37808,eh=37809,nh=37810,ih=37811,sh=37812,rh=37813,ah=37814,oh=37815,lh=37816,ch=37817,uh=37818,hh=37819,dh=37820,fh=37821,ph=36492,mh=36494,gh=36495,_h=36283,xh=36284,Ll=36285,vh=36286;var Ho=2300,eu=2301,Gc=2302,rf=2303,af=2400,of=2401,lf=2402;var K0=3200;var yh=0,Q0=1,$s="",Ai="srgb",Go="srgb-linear",Wo="linear",an="srgb";var Wc=7680;var tg=519,eg=512,ng=513,ig=514,Sh=515,sg=516,rg=517,bh=518,ag=519,Bf=35044;var kf="300 es",Yi=2e3,Ia=2001;function Ux(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ox(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Xo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function og(){let i=Xo("canvas");return i.style.display="block",i}var Gm={},Pa=null;function qo(...i){let t="THREE."+i.shift();Pa?Pa("log",t,...i):console.log(t,...i)}function lg(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Me(...i){i=lg(i);let t="THREE."+i.shift();if(Pa)Pa("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function we(...i){i=lg(i);let t="THREE."+i.shift();if(Pa)Pa("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Lr(...i){let t=i.join(" ");t in Gm||(Gm[t]=!0,Me(...i))}function cg(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var ug={[Xc]:qc,[Yc]:jc,[Jc]:Kc,[Ra]:Zc,[qc]:Xc,[jc]:Yc,[Kc]:Jc,[Zc]:Ra},us=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Kn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wm=1234567,ko=Math.PI/180,La=180/Math.PI;function ls(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Kn[i&255]+Kn[i>>8&255]+Kn[i>>16&255]+Kn[i>>24&255]+"-"+Kn[t&255]+Kn[t>>8&255]+"-"+Kn[t>>16&15|64]+Kn[t>>24&255]+"-"+Kn[e&63|128]+Kn[e>>8&255]+"-"+Kn[e>>16&255]+Kn[e>>24&255]+Kn[n&255]+Kn[n>>8&255]+Kn[n>>16&255]+Kn[n>>24&255]).toLowerCase()}function Ne(i,t,e){return Math.max(t,Math.min(e,i))}function $f(i,t){return(i%t+t)%t}function Fx(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Bx(i,t,e){return i!==t?(e-i)/(t-i):0}function $o(i,t,e){return(1-e)*i+e*t}function kx(i,t,e,n){return $o(i,t,1-Math.exp(-e*n))}function $x(i,t=1){return t-Math.abs($f(i,t*2)-t)}function zx(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Vx(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Hx(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Gx(i,t){return i+Math.random()*(t-i)}function Wx(i){return i*(.5-Math.random())}function Xx(i){i!==void 0&&(Wm=i);let t=Wm+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function qx(i){return i*ko}function Yx(i){return i*La}function Jx(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Zx(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function jx(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Kx(i,t,e,n,s){let r=Math.cos,o=Math.sin,l=r(e/2),u=o(e/2),d=r((t+n)/2),f=o((t+n)/2),b=r((t-n)/2),g=o((t-n)/2),M=r((n-t)/2),w=o((n-t)/2);switch(s){case"XYX":i.set(l*f,u*b,u*g,l*d);break;case"YZY":i.set(u*g,l*f,u*b,l*d);break;case"ZXZ":i.set(u*b,u*g,l*f,l*d);break;case"XZX":i.set(l*f,u*w,u*M,l*d);break;case"YXY":i.set(u*M,l*f,u*w,l*d);break;case"ZYZ":i.set(u*w,u*M,l*f,l*d);break;default:Me("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function qi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function cn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var zf={DEG2RAD:ko,RAD2DEG:La,generateUUID:ls,clamp:Ne,euclideanModulo:$f,mapLinear:Fx,inverseLerp:Bx,lerp:$o,damp:kx,pingpong:$x,smoothstep:zx,smootherstep:Vx,randInt:Hx,randFloat:Gx,randFloatSpread:Wx,seededRandom:Xx,degToRad:qx,radToDeg:Yx,isPowerOfTwo:Jx,ceilPowerOfTwo:Zx,floorPowerOfTwo:jx,setQuaternionFromProperEuler:Kx,normalize:cn,denormalize:qi},Wt=class i{static{i.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Ne(this.x,t.x,e.x),this.y=Ne(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Ne(this.x,t,e),this.y=Ne(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},hs=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,l){let u=n[s+0],d=n[s+1],f=n[s+2],b=n[s+3],g=r[o+0],M=r[o+1],w=r[o+2],N=r[o+3];if(b!==N||u!==g||d!==M||f!==w){let S=u*g+d*M+f*w+b*N;S<0&&(g=-g,M=-M,w=-w,N=-N,S=-S);let m=1-l;if(S<.9995){let z=Math.acos(S),H=Math.sin(z);m=Math.sin(m*z)/H,l=Math.sin(l*z)/H,u=u*m+g*l,d=d*m+M*l,f=f*m+w*l,b=b*m+N*l}else{u=u*m+g*l,d=d*m+M*l,f=f*m+w*l,b=b*m+N*l;let z=1/Math.sqrt(u*u+d*d+f*f+b*b);u*=z,d*=z,f*=z,b*=z}}t[e]=u,t[e+1]=d,t[e+2]=f,t[e+3]=b}static multiplyQuaternionsFlat(t,e,n,s,r,o){let l=n[s],u=n[s+1],d=n[s+2],f=n[s+3],b=r[o],g=r[o+1],M=r[o+2],w=r[o+3];return t[e]=l*w+f*b+u*M-d*g,t[e+1]=u*w+f*g+d*b-l*M,t[e+2]=d*w+f*M+l*g-u*b,t[e+3]=f*w-l*b-u*g-d*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,l=Math.cos,u=Math.sin,d=l(n/2),f=l(s/2),b=l(r/2),g=u(n/2),M=u(s/2),w=u(r/2);switch(o){case"XYZ":this._x=g*f*b+d*M*w,this._y=d*M*b-g*f*w,this._z=d*f*w+g*M*b,this._w=d*f*b-g*M*w;break;case"YXZ":this._x=g*f*b+d*M*w,this._y=d*M*b-g*f*w,this._z=d*f*w-g*M*b,this._w=d*f*b+g*M*w;break;case"ZXY":this._x=g*f*b-d*M*w,this._y=d*M*b+g*f*w,this._z=d*f*w+g*M*b,this._w=d*f*b-g*M*w;break;case"ZYX":this._x=g*f*b-d*M*w,this._y=d*M*b+g*f*w,this._z=d*f*w-g*M*b,this._w=d*f*b+g*M*w;break;case"YZX":this._x=g*f*b+d*M*w,this._y=d*M*b+g*f*w,this._z=d*f*w-g*M*b,this._w=d*f*b-g*M*w;break;case"XZY":this._x=g*f*b-d*M*w,this._y=d*M*b-g*f*w,this._z=d*f*w+g*M*b,this._w=d*f*b+g*M*w;break;default:Me("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],l=e[5],u=e[9],d=e[2],f=e[6],b=e[10],g=n+l+b;if(g>0){let M=.5/Math.sqrt(g+1);this._w=.25/M,this._x=(f-u)*M,this._y=(r-d)*M,this._z=(o-s)*M}else if(n>l&&n>b){let M=2*Math.sqrt(1+n-l-b);this._w=(f-u)/M,this._x=.25*M,this._y=(s+o)/M,this._z=(r+d)/M}else if(l>b){let M=2*Math.sqrt(1+l-n-b);this._w=(r-d)/M,this._x=(s+o)/M,this._y=.25*M,this._z=(u+f)/M}else{let M=2*Math.sqrt(1+b-n-l);this._w=(o-s)/M,this._x=(r+d)/M,this._y=(u+f)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ne(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,l=e._x,u=e._y,d=e._z,f=e._w;return this._x=n*f+o*l+s*d-r*u,this._y=s*f+o*u+r*l-n*d,this._z=r*f+o*d+n*u-s*l,this._w=o*f-n*l-s*u-r*d,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,l=this.dot(t);l<0&&(n=-n,s=-s,r=-r,o=-o,l=-l);let u=1-e;if(l<.9995){let d=Math.acos(l),f=Math.sin(d);u=Math.sin(u*d)/f,e=Math.sin(e*d)/f,this._x=this._x*u+n*e,this._y=this._y*u+s*e,this._z=this._z*u+r*e,this._w=this._w*u+o*e,this._onChangeCallback()}else this._x=this._x*u+n*e,this._y=this._y*u+s*e,this._z=this._z*u+r*e,this._w=this._w*u+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},j=class i{static{i.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Xm.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Xm.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,l=t.z,u=t.w,d=2*(o*s-l*n),f=2*(l*e-r*s),b=2*(r*n-o*e);return this.x=e+u*d+o*b-l*f,this.y=n+u*f+l*d-r*b,this.z=s+u*b+r*f-o*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Ne(this.x,t.x,e.x),this.y=Ne(this.y,t.y,e.y),this.z=Ne(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Ne(this.x,t,e),this.y=Ne(this.y,t,e),this.z=Ne(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,l=e.y,u=e.z;return this.x=s*u-r*l,this.y=r*o-n*u,this.z=n*l-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ld.copy(this).projectOnVector(t),this.sub(Ld)}reflect(t){return this.sub(Ld.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ld=new j,Xm=new hs,Le=class i{static{i.prototype.isMatrix3=!0}constructor(t,e,n,s,r,o,l,u,d){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,l,u,d)}set(t,e,n,s,r,o,l,u,d){let f=this.elements;return f[0]=t,f[1]=s,f[2]=l,f[3]=e,f[4]=r,f[5]=u,f[6]=n,f[7]=o,f[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],l=n[3],u=n[6],d=n[1],f=n[4],b=n[7],g=n[2],M=n[5],w=n[8],N=s[0],S=s[3],m=s[6],z=s[1],H=s[4],D=s[7],T=s[2],k=s[5],Y=s[8];return r[0]=o*N+l*z+u*T,r[3]=o*S+l*H+u*k,r[6]=o*m+l*D+u*Y,r[1]=d*N+f*z+b*T,r[4]=d*S+f*H+b*k,r[7]=d*m+f*D+b*Y,r[2]=g*N+M*z+w*T,r[5]=g*S+M*H+w*k,r[8]=g*m+M*D+w*Y,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],l=t[5],u=t[6],d=t[7],f=t[8];return e*o*f-e*l*d-n*r*f+n*l*u+s*r*d-s*o*u}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],l=t[5],u=t[6],d=t[7],f=t[8],b=f*o-l*d,g=l*u-f*r,M=d*r-o*u,w=e*b+n*g+s*M;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);let N=1/w;return t[0]=b*N,t[1]=(s*d-f*n)*N,t[2]=(l*n-s*o)*N,t[3]=g*N,t[4]=(f*e-s*u)*N,t[5]=(s*r-l*e)*N,t[6]=M*N,t[7]=(n*u-d*e)*N,t[8]=(o*e-n*r)*N,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,l){let u=Math.cos(r),d=Math.sin(r);return this.set(n*u,n*d,-n*(u*o+d*l)+o+t,-s*d,s*u,-s*(-d*o+u*l)+l+e,0,0,1),this}scale(t,e){return Lr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Dd.makeScale(t,e)),this}rotate(t){return Lr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Dd.makeRotation(-t)),this}translate(t,e){return Lr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Dd.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Dd=new Le,qm=new Le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ym=new Le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Qx(){let i={enabled:!0,workingColorSpace:Go,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===an&&(s.r=Bs(s.r),s.g=Bs(s.g),s.b=Bs(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===an&&(s.r=Ca(s.r),s.g=Ca(s.g),s.b=Ca(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===$s?Wo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Lr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Lr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Go]:{primaries:t,whitePoint:n,transfer:Wo,toXYZ:qm,fromXYZ:Ym,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ai},outputColorSpaceConfig:{drawingBufferColorSpace:Ai}},[Ai]:{primaries:t,whitePoint:n,transfer:an,toXYZ:qm,fromXYZ:Ym,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ai}}}),i}var Ye=Qx();function Bs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ca(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var da,nu=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{da===void 0&&(da=Xo("canvas")),da.width=t.width,da.height=t.height;let s=da.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=da}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Xo("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Bs(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Bs(e[n]/255)*255):e[n]=Bs(e[n]);return{data:e,width:t.width,height:t.height}}else return Me("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},tv=0,Da=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:tv++}),this.uuid=ls(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,l=s.length;o<l;o++)s[o].isDataTexture?r.push(Nd(s[o].image)):r.push(Nd(s[o]))}else r=Nd(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Nd(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?nu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Me("Texture: Unable to serialize Texture."),{})}var ev=0,Ud=new j,xi=class i extends us{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=os,s=os,r=Hn,o=ur,l=ki,u=Si,d=i.DEFAULT_ANISOTROPY,f=$s){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ev++}),this.uuid=ls(),this.name="",this.source=new Da(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=d,this.format=l,this.internalFormat=null,this.type=u,this.offset=new Wt(0,0),this.repeat=new Wt(1,1),this.center=new Wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ud).x}get height(){return this.source.getSize(Ud).y}get depth(){return this.source.getSize(Ud).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Me(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Me(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Pf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Qc:t.x=t.x-Math.floor(t.x);break;case os:t.x=t.x<0?0:1;break;case tu:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Qc:t.y=t.y-Math.floor(t.y);break;case os:t.y=t.y<0?0:1;break;case tu:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};xi.DEFAULT_IMAGE=null;xi.DEFAULT_MAPPING=Pf;xi.DEFAULT_ANISOTROPY=1;var on=class i{static{i.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,u=t.elements,d=u[0],f=u[4],b=u[8],g=u[1],M=u[5],w=u[9],N=u[2],S=u[6],m=u[10];if(Math.abs(f-g)<.01&&Math.abs(b-N)<.01&&Math.abs(w-S)<.01){if(Math.abs(f+g)<.1&&Math.abs(b+N)<.1&&Math.abs(w+S)<.1&&Math.abs(d+M+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let H=(d+1)/2,D=(M+1)/2,T=(m+1)/2,k=(f+g)/4,Y=(b+N)/4,I=(w+S)/4;return H>D&&H>T?H<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(H),s=k/n,r=Y/n):D>T?D<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(D),n=k/s,r=I/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=Y/r,s=I/r),this.set(n,s,r,e),this}let z=Math.sqrt((S-w)*(S-w)+(b-N)*(b-N)+(g-f)*(g-f));return Math.abs(z)<.001&&(z=1),this.x=(S-w)/z,this.y=(b-N)/z,this.z=(g-f)/z,this.w=Math.acos((d+M+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Ne(this.x,t.x,e.x),this.y=Ne(this.y,t.y,e.y),this.z=Ne(this.z,t.z,e.z),this.w=Ne(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Ne(this.x,t,e),this.y=Ne(this.y,t,e),this.z=Ne(this.z,t,e),this.w=Ne(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},iu=class extends us{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Hn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new on(0,0,t,e),this.scissorTest=!1,this.viewport=new on(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new xi(s),o=n.count;for(let l=0;l<o;l++)this.textures[l]=r.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Hn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Da(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},vi=class extends iu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Yo=class extends xi{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=On,this.minFilter=On,this.wrapR=os,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var su=class extends xi{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=On,this.minFilter=On,this.wrapR=os,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Ze=class i{static{i.prototype.isMatrix4=!0}constructor(t,e,n,s,r,o,l,u,d,f,b,g,M,w,N,S){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,l,u,d,f,b,g,M,w,N,S)}set(t,e,n,s,r,o,l,u,d,f,b,g,M,w,N,S){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=l,m[13]=u,m[2]=d,m[6]=f,m[10]=b,m[14]=g,m[3]=M,m[7]=w,m[11]=N,m[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/fa.setFromMatrixColumn(t,0).length(),r=1/fa.setFromMatrixColumn(t,1).length(),o=1/fa.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),l=Math.sin(n),u=Math.cos(s),d=Math.sin(s),f=Math.cos(r),b=Math.sin(r);if(t.order==="XYZ"){let g=o*f,M=o*b,w=l*f,N=l*b;e[0]=u*f,e[4]=-u*b,e[8]=d,e[1]=M+w*d,e[5]=g-N*d,e[9]=-l*u,e[2]=N-g*d,e[6]=w+M*d,e[10]=o*u}else if(t.order==="YXZ"){let g=u*f,M=u*b,w=d*f,N=d*b;e[0]=g+N*l,e[4]=w*l-M,e[8]=o*d,e[1]=o*b,e[5]=o*f,e[9]=-l,e[2]=M*l-w,e[6]=N+g*l,e[10]=o*u}else if(t.order==="ZXY"){let g=u*f,M=u*b,w=d*f,N=d*b;e[0]=g-N*l,e[4]=-o*b,e[8]=w+M*l,e[1]=M+w*l,e[5]=o*f,e[9]=N-g*l,e[2]=-o*d,e[6]=l,e[10]=o*u}else if(t.order==="ZYX"){let g=o*f,M=o*b,w=l*f,N=l*b;e[0]=u*f,e[4]=w*d-M,e[8]=g*d+N,e[1]=u*b,e[5]=N*d+g,e[9]=M*d-w,e[2]=-d,e[6]=l*u,e[10]=o*u}else if(t.order==="YZX"){let g=o*u,M=o*d,w=l*u,N=l*d;e[0]=u*f,e[4]=N-g*b,e[8]=w*b+M,e[1]=b,e[5]=o*f,e[9]=-l*f,e[2]=-d*f,e[6]=M*b+w,e[10]=g-N*b}else if(t.order==="XZY"){let g=o*u,M=o*d,w=l*u,N=l*d;e[0]=u*f,e[4]=-b,e[8]=d*f,e[1]=g*b+N,e[5]=o*f,e[9]=M*b-w,e[2]=w*b-M,e[6]=l*f,e[10]=N*b+g}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(nv,t,iv)}lookAt(t,e,n){let s=this.elements;return Ei.subVectors(t,e),Ei.lengthSq()===0&&(Ei.z=1),Ei.normalize(),js.crossVectors(n,Ei),js.lengthSq()===0&&(Math.abs(n.z)===1?Ei.x+=1e-4:Ei.z+=1e-4,Ei.normalize(),js.crossVectors(n,Ei)),js.normalize(),_c.crossVectors(Ei,js),s[0]=js.x,s[4]=_c.x,s[8]=Ei.x,s[1]=js.y,s[5]=_c.y,s[9]=Ei.y,s[2]=js.z,s[6]=_c.z,s[10]=Ei.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],l=n[4],u=n[8],d=n[12],f=n[1],b=n[5],g=n[9],M=n[13],w=n[2],N=n[6],S=n[10],m=n[14],z=n[3],H=n[7],D=n[11],T=n[15],k=s[0],Y=s[4],I=s[8],B=s[12],q=s[1],Z=s[5],ot=s[9],ht=s[13],tt=s[2],st=s[6],pt=s[10],_t=s[14],Ct=s[3],xt=s[7],wt=s[11],bt=s[15];return r[0]=o*k+l*q+u*tt+d*Ct,r[4]=o*Y+l*Z+u*st+d*xt,r[8]=o*I+l*ot+u*pt+d*wt,r[12]=o*B+l*ht+u*_t+d*bt,r[1]=f*k+b*q+g*tt+M*Ct,r[5]=f*Y+b*Z+g*st+M*xt,r[9]=f*I+b*ot+g*pt+M*wt,r[13]=f*B+b*ht+g*_t+M*bt,r[2]=w*k+N*q+S*tt+m*Ct,r[6]=w*Y+N*Z+S*st+m*xt,r[10]=w*I+N*ot+S*pt+m*wt,r[14]=w*B+N*ht+S*_t+m*bt,r[3]=z*k+H*q+D*tt+T*Ct,r[7]=z*Y+H*Z+D*st+T*xt,r[11]=z*I+H*ot+D*pt+T*wt,r[15]=z*B+H*ht+D*_t+T*bt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],l=t[5],u=t[9],d=t[13],f=t[2],b=t[6],g=t[10],M=t[14],w=t[3],N=t[7],S=t[11],m=t[15],z=u*M-d*g,H=l*M-d*b,D=l*g-u*b,T=o*M-d*f,k=o*g-u*f,Y=o*b-l*f;return e*(N*z-S*H+m*D)-n*(w*z-S*T+m*k)+s*(w*H-N*T+m*Y)-r*(w*D-N*k+S*Y)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],l=t[9],u=t[2],d=t[6],f=t[10];return e*(o*f-l*d)-n*(r*f-l*u)+s*(r*d-o*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],l=t[5],u=t[6],d=t[7],f=t[8],b=t[9],g=t[10],M=t[11],w=t[12],N=t[13],S=t[14],m=t[15],z=e*l-n*o,H=e*u-s*o,D=e*d-r*o,T=n*u-s*l,k=n*d-r*l,Y=s*d-r*u,I=f*N-b*w,B=f*S-g*w,q=f*m-M*w,Z=b*S-g*N,ot=b*m-M*N,ht=g*m-M*S,tt=z*ht-H*ot+D*Z+T*q-k*B+Y*I;if(tt===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let st=1/tt;return t[0]=(l*ht-u*ot+d*Z)*st,t[1]=(s*ot-n*ht-r*Z)*st,t[2]=(N*Y-S*k+m*T)*st,t[3]=(g*k-b*Y-M*T)*st,t[4]=(u*q-o*ht-d*B)*st,t[5]=(e*ht-s*q+r*B)*st,t[6]=(S*D-w*Y-m*H)*st,t[7]=(f*Y-g*D+M*H)*st,t[8]=(o*ot-l*q+d*I)*st,t[9]=(n*q-e*ot-r*I)*st,t[10]=(w*k-N*D+m*z)*st,t[11]=(b*D-f*k-M*z)*st,t[12]=(l*B-o*Z-u*I)*st,t[13]=(e*Z-n*B+s*I)*st,t[14]=(N*H-w*T-S*z)*st,t[15]=(f*T-b*H+g*z)*st,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,l=t.y,u=t.z,d=r*o,f=r*l;return this.set(d*o+n,d*l-s*u,d*u+s*l,0,d*l+s*u,f*l+n,f*u-s*o,0,d*u-s*l,f*u+s*o,r*u*u+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,l=e._z,u=e._w,d=r+r,f=o+o,b=l+l,g=r*d,M=r*f,w=r*b,N=o*f,S=o*b,m=l*b,z=u*d,H=u*f,D=u*b,T=n.x,k=n.y,Y=n.z;return s[0]=(1-(N+m))*T,s[1]=(M+D)*T,s[2]=(w-H)*T,s[3]=0,s[4]=(M-D)*k,s[5]=(1-(g+m))*k,s[6]=(S+z)*k,s[7]=0,s[8]=(w+H)*Y,s[9]=(S-z)*Y,s[10]=(1-(g+N))*Y,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=fa.set(s[0],s[1],s[2]).length(),l=fa.set(s[4],s[5],s[6]).length(),u=fa.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Hi.copy(this);let d=1/o,f=1/l,b=1/u;return Hi.elements[0]*=d,Hi.elements[1]*=d,Hi.elements[2]*=d,Hi.elements[4]*=f,Hi.elements[5]*=f,Hi.elements[6]*=f,Hi.elements[8]*=b,Hi.elements[9]*=b,Hi.elements[10]*=b,e.setFromRotationMatrix(Hi),n.x=o,n.y=l,n.z=u,this}makePerspective(t,e,n,s,r,o,l=Yi,u=!1){let d=this.elements,f=2*r/(e-t),b=2*r/(n-s),g=(e+t)/(e-t),M=(n+s)/(n-s),w,N;if(u)w=r/(o-r),N=o*r/(o-r);else if(l===Yi)w=-(o+r)/(o-r),N=-2*o*r/(o-r);else if(l===Ia)w=-o/(o-r),N=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return d[0]=f,d[4]=0,d[8]=g,d[12]=0,d[1]=0,d[5]=b,d[9]=M,d[13]=0,d[2]=0,d[6]=0,d[10]=w,d[14]=N,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,e,n,s,r,o,l=Yi,u=!1){let d=this.elements,f=2/(e-t),b=2/(n-s),g=-(e+t)/(e-t),M=-(n+s)/(n-s),w,N;if(u)w=1/(o-r),N=o/(o-r);else if(l===Yi)w=-2/(o-r),N=-(o+r)/(o-r);else if(l===Ia)w=-1/(o-r),N=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return d[0]=f,d[4]=0,d[8]=0,d[12]=g,d[1]=0,d[5]=b,d[9]=0,d[13]=M,d[2]=0,d[6]=0,d[10]=w,d[14]=N,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},fa=new j,Hi=new Ze,nv=new j(0,0,0),iv=new j(1,1,1),js=new j,_c=new j,Ei=new j,Jm=new Ze,Zm=new hs,ks=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],l=s[8],u=s[1],d=s[5],f=s[9],b=s[2],g=s[6],M=s[10];switch(e){case"XYZ":this._y=Math.asin(Ne(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,M),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(g,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Ne(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(l,M),this._z=Math.atan2(u,d)):(this._y=Math.atan2(-b,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ne(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-b,M),this._z=Math.atan2(-o,d)):(this._y=0,this._z=Math.atan2(u,r));break;case"ZYX":this._y=Math.asin(-Ne(b,-1,1)),Math.abs(b)<.9999999?(this._x=Math.atan2(g,M),this._z=Math.atan2(u,r)):(this._x=0,this._z=Math.atan2(-o,d));break;case"YZX":this._z=Math.asin(Ne(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-f,d),this._y=Math.atan2(-b,r)):(this._x=0,this._y=Math.atan2(l,M));break;case"XZY":this._z=Math.asin(-Ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(g,d),this._y=Math.atan2(l,r)):(this._x=Math.atan2(-f,M),this._y=0);break;default:Me("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Jm.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Jm,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Zm.setFromEuler(this),this.setFromQuaternion(Zm,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ks.DEFAULT_ORDER="XYZ";var Na=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},sv=0,jm=new j,pa=new hs,Ds=new Ze,xc=new j,Po=new j,rv=new j,av=new hs,Km=new j(1,0,0),Qm=new j(0,1,0),t0=new j(0,0,1),e0={type:"added"},ov={type:"removed"},ma={type:"childadded",child:null},Od={type:"childremoved",child:null},Fn=class i extends us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sv++}),this.uuid=ls(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new j,e=new ks,n=new hs,s=new j(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ze},normalMatrix:{value:new Le}}),this.matrix=new Ze,this.matrixWorld=new Ze,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Na,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return pa.setFromAxisAngle(t,e),this.quaternion.multiply(pa),this}rotateOnWorldAxis(t,e){return pa.setFromAxisAngle(t,e),this.quaternion.premultiply(pa),this}rotateX(t){return this.rotateOnAxis(Km,t)}rotateY(t){return this.rotateOnAxis(Qm,t)}rotateZ(t){return this.rotateOnAxis(t0,t)}translateOnAxis(t,e){return jm.copy(t).applyQuaternion(this.quaternion),this.position.add(jm.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Km,t)}translateY(t){return this.translateOnAxis(Qm,t)}translateZ(t){return this.translateOnAxis(t0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ds.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?xc.copy(t):xc.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Po.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ds.lookAt(Po,xc,this.up):Ds.lookAt(xc,Po,this.up),this.quaternion.setFromRotationMatrix(Ds),s&&(Ds.extractRotation(s.matrixWorld),pa.setFromRotationMatrix(Ds),this.quaternion.premultiply(pa.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(we("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(e0),ma.child=t,this.dispatchEvent(ma),ma.child=null):we("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ov),Od.child=t,this.dispatchEvent(Od),Od.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ds.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ds.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ds),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(e0),ma.child=t,this.dispatchEvent(ma),ma.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Po,t,rv),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Po,av,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,l=r.length;o<l;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(l=>({...l})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(l,u){return l[u.uuid]===void 0&&(l[u.uuid]=u.toJSON(t)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let u=l.shapes;if(Array.isArray(u))for(let d=0,f=u.length;d<f;d++){let b=u[d];r(t.shapes,b)}else r(t.shapes,u)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let u=0,d=this.material.length;u<d;u++)l.push(r(t.materials,this.material[u]));s.material=l}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){let u=this.animations[l];s.animations.push(r(t.animations,u))}}if(e){let l=o(t.geometries),u=o(t.materials),d=o(t.textures),f=o(t.images),b=o(t.shapes),g=o(t.skeletons),M=o(t.animations),w=o(t.nodes);l.length>0&&(n.geometries=l),u.length>0&&(n.materials=u),d.length>0&&(n.textures=d),f.length>0&&(n.images=f),b.length>0&&(n.shapes=b),g.length>0&&(n.skeletons=g),M.length>0&&(n.animations=M),w.length>0&&(n.nodes=w)}return n.object=s,n;function o(l){let u=[];for(let d in l){let f=l[d];delete f.metadata,u.push(f)}return u}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Fn.DEFAULT_UP=new j(0,1,0);Fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ji=class extends Fn{constructor(){super(),this.isGroup=!0,this.type="Group"}},lv={type:"move"},Ua=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ji,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ji,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ji,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,l=this._targetRay,u=this._grip,d=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(d&&t.hand){o=!0;for(let N of t.hand.values()){let S=e.getJointPose(N,n),m=this._getHandJoint(d,N);S!==null&&(m.matrix.fromArray(S.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=S.radius),m.visible=S!==null}let f=d.joints["index-finger-tip"],b=d.joints["thumb-tip"],g=f.position.distanceTo(b.position),M=.02,w=.005;d.inputState.pinching&&g>M+w?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&g<=M-w&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else u!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(u.matrix.fromArray(r.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,r.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(r.linearVelocity)):u.hasLinearVelocity=!1,r.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(r.angularVelocity)):u.hasAngularVelocity=!1,u.eventsEnabled&&u.dispatchEvent({type:"gripUpdated",data:t,target:this})));l!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(lv)))}return l!==null&&(l.visible=s!==null),u!==null&&(u.visible=r!==null),d!==null&&(d.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ji;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},hg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ks={h:0,s:0,l:0},vc={h:0,s:0,l:0};function Fd(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var ye=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ai){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ye.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Ye.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ye.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Ye.workingColorSpace){if(t=$f(t,1),e=Ne(e,0,1),n=Ne(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Fd(o,r,t+1/3),this.g=Fd(o,r,t),this.b=Fd(o,r,t-1/3)}return Ye.colorSpaceToWorking(this,s),this}setStyle(t,e=Ai){function n(r){r!==void 0&&parseFloat(r)<1&&Me("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],l=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Me("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Me("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ai){let n=hg[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Me("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Bs(t.r),this.g=Bs(t.g),this.b=Bs(t.b),this}copyLinearToSRGB(t){return this.r=Ca(t.r),this.g=Ca(t.g),this.b=Ca(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ai){return Ye.workingToColorSpace(Qn.copy(this),t),Math.round(Ne(Qn.r*255,0,255))*65536+Math.round(Ne(Qn.g*255,0,255))*256+Math.round(Ne(Qn.b*255,0,255))}getHexString(t=Ai){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ye.workingColorSpace){Ye.workingToColorSpace(Qn.copy(this),e);let n=Qn.r,s=Qn.g,r=Qn.b,o=Math.max(n,s,r),l=Math.min(n,s,r),u,d,f=(l+o)/2;if(l===o)u=0,d=0;else{let b=o-l;switch(d=f<=.5?b/(o+l):b/(2-o-l),o){case n:u=(s-r)/b+(s<r?6:0);break;case s:u=(r-n)/b+2;break;case r:u=(n-s)/b+4;break}u/=6}return t.h=u,t.s=d,t.l=f,t}getRGB(t,e=Ye.workingColorSpace){return Ye.workingToColorSpace(Qn.copy(this),e),t.r=Qn.r,t.g=Qn.g,t.b=Qn.b,t}getStyle(t=Ai){Ye.workingToColorSpace(Qn.copy(this),t);let e=Qn.r,n=Qn.g,s=Qn.b;return t!==Ai?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ks),this.setHSL(Ks.h+t,Ks.s+e,Ks.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ks),t.getHSL(vc);let n=$o(Ks.h,vc.h,e),s=$o(Ks.s,vc.s,e),r=$o(Ks.l,vc.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Qn=new ye;ye.NAMES=hg;var Jo=class extends Fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ks,this.environmentIntensity=1,this.environmentRotation=new ks,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Gi=new j,Ns=new j,Bd=new j,Us=new j,ga=new j,_a=new j,n0=new j,kd=new j,$d=new j,zd=new j,Vd=new on,Hd=new on,Gd=new on,nr=class i{constructor(t=new j,e=new j,n=new j){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Gi.subVectors(t,e),s.cross(Gi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Gi.subVectors(s,e),Ns.subVectors(n,e),Bd.subVectors(t,e);let o=Gi.dot(Gi),l=Gi.dot(Ns),u=Gi.dot(Bd),d=Ns.dot(Ns),f=Ns.dot(Bd),b=o*d-l*l;if(b===0)return r.set(0,0,0),null;let g=1/b,M=(d*u-l*f)*g,w=(o*f-l*u)*g;return r.set(1-M-w,w,M)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Us)===null?!1:Us.x>=0&&Us.y>=0&&Us.x+Us.y<=1}static getInterpolation(t,e,n,s,r,o,l,u){return this.getBarycoord(t,e,n,s,Us)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(r,Us.x),u.addScaledVector(o,Us.y),u.addScaledVector(l,Us.z),u)}static getInterpolatedAttribute(t,e,n,s,r,o){return Vd.setScalar(0),Hd.setScalar(0),Gd.setScalar(0),Vd.fromBufferAttribute(t,e),Hd.fromBufferAttribute(t,n),Gd.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Vd,r.x),o.addScaledVector(Hd,r.y),o.addScaledVector(Gd,r.z),o}static isFrontFacing(t,e,n,s){return Gi.subVectors(n,e),Ns.subVectors(t,e),Gi.cross(Ns).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Gi.subVectors(this.c,this.b),Ns.subVectors(this.a,this.b),Gi.cross(Ns).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,l;ga.subVectors(s,n),_a.subVectors(r,n),kd.subVectors(t,n);let u=ga.dot(kd),d=_a.dot(kd);if(u<=0&&d<=0)return e.copy(n);$d.subVectors(t,s);let f=ga.dot($d),b=_a.dot($d);if(f>=0&&b<=f)return e.copy(s);let g=u*b-f*d;if(g<=0&&u>=0&&f<=0)return o=u/(u-f),e.copy(n).addScaledVector(ga,o);zd.subVectors(t,r);let M=ga.dot(zd),w=_a.dot(zd);if(w>=0&&M<=w)return e.copy(r);let N=M*d-u*w;if(N<=0&&d>=0&&w<=0)return l=d/(d-w),e.copy(n).addScaledVector(_a,l);let S=f*w-M*b;if(S<=0&&b-f>=0&&M-w>=0)return n0.subVectors(r,s),l=(b-f)/(b-f+(M-w)),e.copy(s).addScaledVector(n0,l);let m=1/(S+N+g);return o=N*m,l=g*m,e.copy(n).addScaledVector(ga,o).addScaledVector(_a,l)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ci=class{constructor(t=new j(1/0,1/0,1/0),e=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Wi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Wi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Wi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,l=r.count;o<l;o++)t.isMesh===!0?t.getVertexPosition(o,Wi):Wi.fromBufferAttribute(r,o),Wi.applyMatrix4(t.matrixWorld),this.expandByPoint(Wi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),yc.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),yc.copy(n.boundingBox)),yc.applyMatrix4(t.matrixWorld),this.union(yc)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Wi),Wi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Lo),Sc.subVectors(this.max,Lo),xa.subVectors(t.a,Lo),va.subVectors(t.b,Lo),ya.subVectors(t.c,Lo),Qs.subVectors(va,xa),tr.subVectors(ya,va),Ar.subVectors(xa,ya);let e=[0,-Qs.z,Qs.y,0,-tr.z,tr.y,0,-Ar.z,Ar.y,Qs.z,0,-Qs.x,tr.z,0,-tr.x,Ar.z,0,-Ar.x,-Qs.y,Qs.x,0,-tr.y,tr.x,0,-Ar.y,Ar.x,0];return!Wd(e,xa,va,ya,Sc)||(e=[1,0,0,0,1,0,0,0,1],!Wd(e,xa,va,ya,Sc))?!1:(bc.crossVectors(Qs,tr),e=[bc.x,bc.y,bc.z],Wd(e,xa,va,ya,Sc))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Wi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Wi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Os[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Os[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Os[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Os[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Os[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Os[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Os[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Os[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Os),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Os=[new j,new j,new j,new j,new j,new j,new j,new j],Wi=new j,yc=new ci,xa=new j,va=new j,ya=new j,Qs=new j,tr=new j,Ar=new j,Lo=new j,Sc=new j,bc=new j,Cr=new j;function Wd(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Cr.fromArray(i,r);let l=s.x*Math.abs(Cr.x)+s.y*Math.abs(Cr.y)+s.z*Math.abs(Cr.z),u=t.dot(Cr),d=e.dot(Cr),f=n.dot(Cr);if(Math.max(-Math.max(u,d,f),Math.min(u,d,f))>l)return!1}return!0}var In=new j,Mc=new Wt,cv=0,hn=class extends us{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:cv++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Bf,this.updateRanges=[],this.gpuType=Bi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Mc.fromBufferAttribute(this,e),Mc.applyMatrix3(t),this.setXY(e,Mc.x,Mc.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)In.fromBufferAttribute(this,e),In.applyMatrix3(t),this.setXYZ(e,In.x,In.y,In.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)In.fromBufferAttribute(this,e),In.applyMatrix4(t),this.setXYZ(e,In.x,In.y,In.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)In.fromBufferAttribute(this,e),In.applyNormalMatrix(t),this.setXYZ(e,In.x,In.y,In.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)In.fromBufferAttribute(this,e),In.transformDirection(t),this.setXYZ(e,In.x,In.y,In.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=qi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=cn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=qi(e,this.array)),e}setX(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=qi(e,this.array)),e}setY(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=qi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=qi(e,this.array)),e}setW(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=cn(e,this.array),n=cn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=cn(e,this.array),n=cn(n,this.array),s=cn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=cn(e,this.array),n=cn(n,this.array),s=cn(s,this.array),r=cn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Zo=class extends hn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var jo=class extends hn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var wn=class extends hn{constructor(t,e,n){super(new Float32Array(t),e,n)}},uv=new ci,Do=new j,Xd=new j,yi=class{constructor(t=new j,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):uv.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Do.subVectors(t,this.center);let e=Do.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Do,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Xd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Do.copy(t.center).add(Xd)),this.expandByPoint(Do.copy(t.center).sub(Xd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},hv=0,Fi=new Ze,qd=new Fn,Sa=new j,Ti=new ci,No=new ci,Un=new j,En=class i extends us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hv++}),this.uuid=ls(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ux(t)?jo:Zo)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Le().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Fi.makeRotationFromQuaternion(t),this.applyMatrix4(Fi),this}rotateX(t){return Fi.makeRotationX(t),this.applyMatrix4(Fi),this}rotateY(t){return Fi.makeRotationY(t),this.applyMatrix4(Fi),this}rotateZ(t){return Fi.makeRotationZ(t),this.applyMatrix4(Fi),this}translate(t,e,n){return Fi.makeTranslation(t,e,n),this.applyMatrix4(Fi),this}scale(t,e,n){return Fi.makeScale(t,e,n),this.applyMatrix4(Fi),this}lookAt(t){return qd.lookAt(t),qd.updateMatrix(),this.applyMatrix4(qd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Sa).negate(),this.translate(Sa.x,Sa.y,Sa.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new wn(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Me("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ci);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){we("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Ti.setFromBufferAttribute(r),this.morphTargetsRelative?(Un.addVectors(this.boundingBox.min,Ti.min),this.boundingBox.expandByPoint(Un),Un.addVectors(this.boundingBox.max,Ti.max),this.boundingBox.expandByPoint(Un)):(this.boundingBox.expandByPoint(Ti.min),this.boundingBox.expandByPoint(Ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&we('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){we("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(t){let n=this.boundingSphere.center;if(Ti.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let l=e[r];No.setFromBufferAttribute(l),this.morphTargetsRelative?(Un.addVectors(Ti.min,No.min),Ti.expandByPoint(Un),Un.addVectors(Ti.max,No.max),Ti.expandByPoint(Un)):(Ti.expandByPoint(No.min),Ti.expandByPoint(No.max))}Ti.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Un.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Un));if(e)for(let r=0,o=e.length;r<o;r++){let l=e[r],u=this.morphTargetsRelative;for(let d=0,f=l.count;d<f;d++)Un.fromBufferAttribute(l,d),u&&(Sa.fromBufferAttribute(t,d),Un.add(Sa)),s=Math.max(s,n.distanceToSquared(Un))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&we('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){we("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new hn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let l=[],u=[];for(let I=0;I<n.count;I++)l[I]=new j,u[I]=new j;let d=new j,f=new j,b=new j,g=new Wt,M=new Wt,w=new Wt,N=new j,S=new j;function m(I,B,q){d.fromBufferAttribute(n,I),f.fromBufferAttribute(n,B),b.fromBufferAttribute(n,q),g.fromBufferAttribute(r,I),M.fromBufferAttribute(r,B),w.fromBufferAttribute(r,q),f.sub(d),b.sub(d),M.sub(g),w.sub(g);let Z=1/(M.x*w.y-w.x*M.y);isFinite(Z)&&(N.copy(f).multiplyScalar(w.y).addScaledVector(b,-M.y).multiplyScalar(Z),S.copy(b).multiplyScalar(M.x).addScaledVector(f,-w.x).multiplyScalar(Z),l[I].add(N),l[B].add(N),l[q].add(N),u[I].add(S),u[B].add(S),u[q].add(S))}let z=this.groups;z.length===0&&(z=[{start:0,count:t.count}]);for(let I=0,B=z.length;I<B;++I){let q=z[I],Z=q.start,ot=q.count;for(let ht=Z,tt=Z+ot;ht<tt;ht+=3)m(t.getX(ht+0),t.getX(ht+1),t.getX(ht+2))}let H=new j,D=new j,T=new j,k=new j;function Y(I){T.fromBufferAttribute(s,I),k.copy(T);let B=l[I];H.copy(B),H.sub(T.multiplyScalar(T.dot(B))).normalize(),D.crossVectors(k,B);let Z=D.dot(u[I])<0?-1:1;o.setXYZW(I,H.x,H.y,H.z,Z)}for(let I=0,B=z.length;I<B;++I){let q=z[I],Z=q.start,ot=q.count;for(let ht=Z,tt=Z+ot;ht<tt;ht+=3)Y(t.getX(ht+0)),Y(t.getX(ht+1)),Y(t.getX(ht+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new hn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let g=0,M=n.count;g<M;g++)n.setXYZ(g,0,0,0);let s=new j,r=new j,o=new j,l=new j,u=new j,d=new j,f=new j,b=new j;if(t)for(let g=0,M=t.count;g<M;g+=3){let w=t.getX(g+0),N=t.getX(g+1),S=t.getX(g+2);s.fromBufferAttribute(e,w),r.fromBufferAttribute(e,N),o.fromBufferAttribute(e,S),f.subVectors(o,r),b.subVectors(s,r),f.cross(b),l.fromBufferAttribute(n,w),u.fromBufferAttribute(n,N),d.fromBufferAttribute(n,S),l.add(f),u.add(f),d.add(f),n.setXYZ(w,l.x,l.y,l.z),n.setXYZ(N,u.x,u.y,u.z),n.setXYZ(S,d.x,d.y,d.z)}else for(let g=0,M=e.count;g<M;g+=3)s.fromBufferAttribute(e,g+0),r.fromBufferAttribute(e,g+1),o.fromBufferAttribute(e,g+2),f.subVectors(o,r),b.subVectors(s,r),f.cross(b),n.setXYZ(g+0,f.x,f.y,f.z),n.setXYZ(g+1,f.x,f.y,f.z),n.setXYZ(g+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Un.fromBufferAttribute(t,e),Un.normalize(),t.setXYZ(e,Un.x,Un.y,Un.z)}toNonIndexed(){function t(l,u){let d=l.array,f=l.itemSize,b=l.normalized,g=new d.constructor(u.length*f),M=0,w=0;for(let N=0,S=u.length;N<S;N++){l.isInterleavedBufferAttribute?M=u[N]*l.data.stride+l.offset:M=u[N]*f;for(let m=0;m<f;m++)g[w++]=d[M++]}return new hn(g,f,b)}if(this.index===null)return Me("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let l in s){let u=s[l],d=t(u,n);e.setAttribute(l,d)}let r=this.morphAttributes;for(let l in r){let u=[],d=r[l];for(let f=0,b=d.length;f<b;f++){let g=d[f],M=t(g,n);u.push(M)}e.morphAttributes[l]=u}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let l=0,u=o.length;l<u;l++){let d=o[l];e.addGroup(d.start,d.count,d.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let u=this.parameters;for(let d in u)u[d]!==void 0&&(t[d]=u[d]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let u in n){let d=n[u];t.data.attributes[u]=d.toJSON(t.data)}let s={},r=!1;for(let u in this.morphAttributes){let d=this.morphAttributes[u],f=[];for(let b=0,g=d.length;b<g;b++){let M=d[b];f.push(M.toJSON(t.data))}f.length>0&&(s[u]=f,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let l=this.boundingSphere;return l!==null&&(t.data.boundingSphere=l.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let d in s){let f=s[d];this.setAttribute(d,f.clone(e))}let r=t.morphAttributes;for(let d in r){let f=[],b=r[d];for(let g=0,M=b.length;g<M;g++)f.push(b[g].clone(e));this.morphAttributes[d]=f}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let d=0,f=o.length;d<f;d++){let b=o[d];this.addGroup(b.start,b.count,b.materialIndex)}let l=t.boundingBox;l!==null&&(this.boundingBox=l.clone());let u=t.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},ru=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Bf,this.updateRanges=[],this.version=0,this.uuid=ls()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ls()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ls()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},li=new j,Zi=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)li.fromBufferAttribute(this,e),li.applyMatrix4(t),this.setXYZ(e,li.x,li.y,li.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)li.fromBufferAttribute(this,e),li.applyNormalMatrix(t),this.setXYZ(e,li.x,li.y,li.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)li.fromBufferAttribute(this,e),li.transformDirection(t),this.setXYZ(e,li.x,li.y,li.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=qi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=cn(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=cn(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=cn(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=cn(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=cn(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=qi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=qi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=qi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=qi(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=cn(e,this.array),n=cn(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=cn(e,this.array),n=cn(n,this.array),s=cn(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=cn(e,this.array),n=cn(n,this.array),s=cn(s,this.array),r=cn(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){qo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new hn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){qo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Yd=new j,dv=new j,fv=new Le,Xi=class{constructor(t=new j(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Yd.subVectors(n,e).cross(dv.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Yd),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||fv.getNormalMatrix(t),s=this.coplanarPoint(Yd).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},pv=0,ds=class extends us{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pv++}),this.uuid=ls(),this.name="",this.type="Material",this.blending=Ha,this.side=lr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bf,this.blendDst=Mf,this.blendEquation=kr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ye(0,0,0),this.blendAlpha=0,this.depthFunc=Ra,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wc,this.stencilZFail=Wc,this.stencilZPass=Wc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Me(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Me(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let l in r){let u=r[l];delete u.metadata,o.push(u)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ye().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Xi().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Wt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Wt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Fs=new j,Jd=new j,wc=new j,Ec=new j,Dr=class{constructor(t=new j,e=new j(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Fs)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Fs.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Fs.copy(this.origin).addScaledVector(this.direction,e),Fs.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Jd.copy(t).add(e).multiplyScalar(.5),wc.copy(e).sub(t).normalize(),Ec.copy(this.origin).sub(Jd);let r=t.distanceTo(e)*.5,o=-this.direction.dot(wc),l=Ec.dot(this.direction),u=-Ec.dot(wc),d=Ec.lengthSq(),f=Math.abs(1-o*o),b,g,M,w;if(f>0)if(b=o*u-l,g=o*l-u,w=r*f,b>=0)if(g>=-w)if(g<=w){let N=1/f;b*=N,g*=N,M=b*(b+o*g+2*l)+g*(o*b+g+2*u)+d}else g=r,b=Math.max(0,-(o*g+l)),M=-b*b+g*(g+2*u)+d;else g=-r,b=Math.max(0,-(o*g+l)),M=-b*b+g*(g+2*u)+d;else g<=-w?(b=Math.max(0,-(-o*r+l)),g=b>0?-r:Math.min(Math.max(-r,-u),r),M=-b*b+g*(g+2*u)+d):g<=w?(b=0,g=Math.min(Math.max(-r,-u),r),M=g*(g+2*u)+d):(b=Math.max(0,-(o*r+l)),g=b>0?r:Math.min(Math.max(-r,-u),r),M=-b*b+g*(g+2*u)+d);else g=o>0?-r:r,b=Math.max(0,-(o*g+l)),M=-b*b+g*(g+2*u)+d;return n&&n.copy(this.origin).addScaledVector(this.direction,b),s&&s.copy(Jd).addScaledVector(wc,g),M}intersectSphere(t,e){if(t.radius<0)return null;Fs.subVectors(t.center,this.origin);let n=Fs.dot(this.direction),s=Fs.dot(Fs)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),l=n-o,u=n+o;return u<0?null:l<0?this.at(u,e):this.at(l,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,l,u,d=1/this.direction.x,f=1/this.direction.y,b=1/this.direction.z,g=this.origin;return d>=0?(n=(t.min.x-g.x)*d,s=(t.max.x-g.x)*d):(n=(t.max.x-g.x)*d,s=(t.min.x-g.x)*d),f>=0?(r=(t.min.y-g.y)*f,o=(t.max.y-g.y)*f):(r=(t.max.y-g.y)*f,o=(t.min.y-g.y)*f),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),b>=0?(l=(t.min.z-g.z)*b,u=(t.max.z-g.z)*b):(l=(t.max.z-g.z)*b,u=(t.min.z-g.z)*b),n>u||l>s)||((l>n||n!==n)&&(n=l),(u<s||s!==s)&&(s=u),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Fs)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,l=this.direction,u=l.x,d=l.y,f=l.z,b=t.x-o.x,g=t.y-o.y,M=t.z-o.z,w=e.x-o.x,N=e.y-o.y,S=e.z-o.z,m=n.x-o.x,z=n.y-o.y,H=n.z-o.z,D=Math.abs(u),T=Math.abs(d),k=Math.abs(f),Y,I,B,q,Z,ot,ht,tt,st,pt,_t,Ct;if(D>=T&&D>=k?(B=u,ot=b,st=w,Ct=m,u>=0?(Y=d,I=f,q=g,Z=M,ht=N,tt=S,pt=z,_t=H):(Y=f,I=d,q=M,Z=g,ht=S,tt=N,pt=H,_t=z)):T>=k?(B=d,ot=g,st=N,Ct=z,d>=0?(Y=f,I=u,q=M,Z=b,ht=S,tt=w,pt=H,_t=m):(Y=u,I=f,q=b,Z=M,ht=w,tt=S,pt=m,_t=H)):(B=f,ot=M,st=S,Ct=H,f>=0?(Y=u,I=d,q=b,Z=g,ht=w,tt=N,pt=m,_t=z):(Y=d,I=u,q=g,Z=b,ht=N,tt=w,pt=z,_t=m)),B===0)return null;let xt=Y/B,wt=I/B,bt=1/B,zt=q-xt*ot,ne=Z-wt*ot,je=ht-xt*st,Oe=tt-wt*st,We=pt-xt*Ct,vt=_t-wt*Ct,yt=We*Oe-vt*je,Lt=zt*vt-ne*We,de=je*ne-Oe*zt;if(s){if(yt<0||Lt<0||de<0)return null}else if((yt<0||Lt<0||de<0)&&(yt>0||Lt>0||de>0))return null;let Kt=yt+Lt+de;if(Kt===0)return null;let ge=bt*(yt*ot+Lt*st+de*Ct);return(Kt>0?ge<0:ge>0)?null:this.at(ge/Kt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Nr=class extends ds{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ks,this.combine=Du,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},i0=new Ze,Rr=new Dr,Tc=new yi,s0=new j,Ac=new j,Cc=new j,Rc=new j,Zd=new j,Ic=new j,r0=new j,Pc=new j,Bn=class extends Fn{constructor(t=new En,e=new Nr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let l=this.morphTargetInfluences;if(r&&l){Ic.set(0,0,0);for(let u=0,d=r.length;u<d;u++){let f=l[u],b=r[u];f!==0&&(Zd.fromBufferAttribute(b,t),o?Ic.addScaledVector(Zd,f):Ic.addScaledVector(Zd.sub(e),f))}e.add(Ic)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Tc.copy(n.boundingSphere),Tc.applyMatrix4(r),Rr.copy(t.ray).recast(t.near),!(Tc.containsPoint(Rr.origin)===!1&&(Rr.intersectSphere(Tc,s0)===null||Rr.origin.distanceToSquared(s0)>(t.far-t.near)**2))&&(i0.copy(r).invert(),Rr.copy(t.ray).applyMatrix4(i0),!(n.boundingBox!==null&&Rr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Rr)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,l=r.index,u=r.attributes.position,d=r.attributes.uv,f=r.attributes.uv1,b=r.attributes.normal,g=r.groups,M=r.drawRange;if(l!==null)if(Array.isArray(o))for(let w=0,N=g.length;w<N;w++){let S=g[w],m=o[S.materialIndex],z=Math.max(S.start,M.start),H=Math.min(l.count,Math.min(S.start+S.count,M.start+M.count));for(let D=z,T=H;D<T;D+=3){let k=l.getX(D),Y=l.getX(D+1),I=l.getX(D+2);s=Lc(this,m,t,n,d,f,b,k,Y,I),s&&(s.faceIndex=Math.floor(D/3),s.face.materialIndex=S.materialIndex,e.push(s))}}else{let w=Math.max(0,M.start),N=Math.min(l.count,M.start+M.count);for(let S=w,m=N;S<m;S+=3){let z=l.getX(S),H=l.getX(S+1),D=l.getX(S+2);s=Lc(this,o,t,n,d,f,b,z,H,D),s&&(s.faceIndex=Math.floor(S/3),e.push(s))}}else if(u!==void 0)if(Array.isArray(o))for(let w=0,N=g.length;w<N;w++){let S=g[w],m=o[S.materialIndex],z=Math.max(S.start,M.start),H=Math.min(u.count,Math.min(S.start+S.count,M.start+M.count));for(let D=z,T=H;D<T;D+=3){let k=D,Y=D+1,I=D+2;s=Lc(this,m,t,n,d,f,b,k,Y,I),s&&(s.faceIndex=Math.floor(D/3),s.face.materialIndex=S.materialIndex,e.push(s))}}else{let w=Math.max(0,M.start),N=Math.min(u.count,M.start+M.count);for(let S=w,m=N;S<m;S+=3){let z=S,H=S+1,D=S+2;s=Lc(this,o,t,n,d,f,b,z,H,D),s&&(s.faceIndex=Math.floor(S/3),e.push(s))}}}};function mv(i,t,e,n,s,r,o,l){let u;if(t.side===ui?u=n.intersectTriangle(o,r,s,!0,l):u=n.intersectTriangle(s,r,o,t.side===lr,l),u===null)return null;Pc.copy(l),Pc.applyMatrix4(i.matrixWorld);let d=e.ray.origin.distanceTo(Pc);return d<e.near||d>e.far?null:{distance:d,point:Pc.clone(),object:i}}function Lc(i,t,e,n,s,r,o,l,u,d){i.getVertexPosition(l,Ac),i.getVertexPosition(u,Cc),i.getVertexPosition(d,Rc);let f=mv(i,t,e,n,Ac,Cc,Rc,r0);if(f){let b=new j;nr.getBarycoord(r0,Ac,Cc,Rc,b),s&&(f.uv=nr.getInterpolatedAttribute(s,l,u,d,b,new Wt)),r&&(f.uv1=nr.getInterpolatedAttribute(r,l,u,d,b,new Wt)),o&&(f.normal=nr.getInterpolatedAttribute(o,l,u,d,b,new j),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));let g={a:l,b:u,c:d,normal:new j,materialIndex:0};nr.getNormal(Ac,Cc,Rc,g.normal),f.face=g,f.barycoord=b}return f}var Ko=class extends xi{constructor(t=null,e=1,n=1,s,r,o,l,u,d=On,f=On,b,g){super(null,o,l,u,d,f,s,r,b,g),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Qo=class extends hn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ba=new Ze,a0=new Ze,Dc=[],o0=new ci,gv=new Ze,Uo=new Bn,Oo=new yi,tl=class extends Bn{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Qo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,gv)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ci),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ba),o0.copy(t.boundingBox).applyMatrix4(ba),this.boundingBox.union(o0)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new yi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ba),Oo.copy(t.boundingSphere).applyMatrix4(ba),this.boundingSphere.union(Oo)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let l=0;l<n.length;l++)n[l]=s[o+l]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Uo.geometry=this.geometry,Uo.material=this.material,Uo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Oo.copy(this.boundingSphere),Oo.applyMatrix4(n),t.ray.intersectsSphere(Oo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ba),a0.multiplyMatrices(n,ba),Uo.matrixWorld=a0,Uo.raycast(t,Dc);for(let o=0,l=Dc.length;o<l;o++){let u=Dc[o];u.instanceId=r,u.object=this,e.push(u)}Dc.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Qo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ko(new Float32Array(s*this.count),s,this.count,$u,Bi));let r=this.morphTexture.source.data.data,o=0;for(let d=0;d<n.length;d++)o+=n[d];let l=this.geometry.morphTargetsRelative?1:1-o,u=s*t;return r[u]=l,r.set(n,u+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ir=new yi,_v=new Wt(.5,.5),Nc=new j,Oa=class{constructor(t=new Xi,e=new Xi,n=new Xi,s=new Xi,r=new Xi,o=new Xi){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let l=this.planes;return l[0].copy(t),l[1].copy(e),l[2].copy(n),l[3].copy(s),l[4].copy(r),l[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Yi,n=!1){let s=this.planes,r=t.elements,o=r[0],l=r[1],u=r[2],d=r[3],f=r[4],b=r[5],g=r[6],M=r[7],w=r[8],N=r[9],S=r[10],m=r[11],z=r[12],H=r[13],D=r[14],T=r[15];if(s[0].setComponents(d-o,M-f,m-w,T-z).normalize(),s[1].setComponents(d+o,M+f,m+w,T+z).normalize(),s[2].setComponents(d+l,M+b,m+N,T+H).normalize(),s[3].setComponents(d-l,M-b,m-N,T-H).normalize(),n)s[4].setComponents(u,g,S,D).normalize(),s[5].setComponents(d-u,M-g,m-S,T-D).normalize();else if(s[4].setComponents(d-u,M-g,m-S,T-D).normalize(),e===Yi)s[5].setComponents(d+u,M+g,m+S,T+D).normalize();else if(e===Ia)s[5].setComponents(u,g,S,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ir.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ir.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ir)}intersectsSprite(t){Ir.center.set(0,0,0);let e=_v.distanceTo(t.center);return Ir.radius=.7071067811865476+e,Ir.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ir)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Nc.x=s.normal.x>0?t.max.x:t.min.x,Nc.y=s.normal.y>0?t.max.y:t.min.y,Nc.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Nc)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ur=class extends ds{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},au=new j,ou=new j,l0=new Ze,Fo=new Dr,Uc=new yi,jd=new j,c0=new j,lu=class extends Fn{constructor(t=new En,e=new Ur){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)au.fromBufferAttribute(e,s-1),ou.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=au.distanceTo(ou);t.setAttribute("lineDistance",new wn(n,1))}else Me("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Uc.copy(n.boundingSphere),Uc.applyMatrix4(s),Uc.radius+=r,t.ray.intersectsSphere(Uc)===!1)return;l0.copy(s).invert(),Fo.copy(t.ray).applyMatrix4(l0);let l=r/((this.scale.x+this.scale.y+this.scale.z)/3),u=l*l,d=this.isLineSegments?2:1,f=n.index,g=n.attributes.position;if(f!==null){let M=Math.max(0,o.start),w=Math.min(f.count,o.start+o.count);for(let N=M,S=w-1;N<S;N+=d){let m=f.getX(N),z=f.getX(N+1),H=Oc(this,t,Fo,u,m,z,N);H&&e.push(H)}if(this.isLineLoop){let N=f.getX(w-1),S=f.getX(M),m=Oc(this,t,Fo,u,N,S,w-1);m&&e.push(m)}}else{let M=Math.max(0,o.start),w=Math.min(g.count,o.start+o.count);for(let N=M,S=w-1;N<S;N+=d){let m=Oc(this,t,Fo,u,N,N+1,N);m&&e.push(m)}if(this.isLineLoop){let N=Oc(this,t,Fo,u,w-1,M,w-1);N&&e.push(N)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}};function Oc(i,t,e,n,s,r,o){let l=i.geometry.attributes.position;if(au.fromBufferAttribute(l,s),ou.fromBufferAttribute(l,r),e.distanceSqToSegment(au,ou,jd,c0)>n)return;jd.applyMatrix4(i.matrixWorld);let d=t.ray.origin.distanceTo(jd);if(!(d<t.near||d>t.far))return{distance:d,point:c0.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var el=class extends lu{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},cu=class extends ds{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},u0=new Ze,cf=new Dr,Fc=new yi,Bc=new j,Or=class extends Fn{constructor(t=new En,e=new cu){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fc.copy(n.boundingSphere),Fc.applyMatrix4(s),Fc.radius+=r,t.ray.intersectsSphere(Fc)===!1)return;u0.copy(s).invert(),cf.copy(t.ray).applyMatrix4(u0);let l=r/((this.scale.x+this.scale.y+this.scale.z)/3),u=l*l,d=n.index,b=n.attributes.position;if(d!==null){let g=Math.max(0,o.start),M=Math.min(d.count,o.start+o.count);for(let w=g,N=M;w<N;w++){let S=d.getX(w);Bc.fromBufferAttribute(b,S),h0(Bc,S,u,s,t,e,this)}}else{let g=Math.max(0,o.start),M=Math.min(b.count,o.start+o.count);for(let w=g,N=M;w<N;w++)Bc.fromBufferAttribute(b,w),h0(Bc,w,u,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}};function h0(i,t,e,n,s,r,o){let l=cf.distanceSqToPoint(i);if(l<e){let u=new j;cf.closestPointToPoint(i,u),u.applyMatrix4(n);let d=s.ray.origin.distanceTo(u);if(d<s.near||d>s.far)return;r.push({distance:d,distanceToRay:Math.sqrt(l),point:u,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var nl=class extends xi{constructor(t=[],e=cr,n,s,r,o,l,u,d,f){super(t,e,n,s,r,o,l,u,d,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var ir=class extends xi{constructor(t,e,n=Ki,s,r,o,l=On,u=On,d,f=cs,b=1){if(f!==cs&&f!==hr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let g={width:t,height:e,depth:b};super(g,s,r,o,l,u,f,n,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Da(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},uu=class extends ir{constructor(t,e=Ki,n=cr,s,r,o=On,l=On,u,d=cs){let f={width:t,height:t,depth:1},b=[f,f,f,f,f,f];super(t,t,e,n,s,r,o,l,u,d),this.image=b,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},il=class extends xi{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Fa=class i extends En{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let l=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let u=[],d=[],f=[],b=[],g=0,M=0;w("z","y","x",-1,-1,n,e,t,o,r,0),w("z","y","x",1,-1,n,e,-t,o,r,1),w("x","z","y",1,1,t,n,e,s,o,2),w("x","z","y",1,-1,t,n,-e,s,o,3),w("x","y","z",1,-1,t,e,n,s,r,4),w("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(u),this.setAttribute("position",new wn(d,3)),this.setAttribute("normal",new wn(f,3)),this.setAttribute("uv",new wn(b,2));function w(N,S,m,z,H,D,T,k,Y,I,B){let q=D/Y,Z=T/I,ot=D/2,ht=T/2,tt=k/2,st=Y+1,pt=I+1,_t=0,Ct=0,xt=new j;for(let wt=0;wt<pt;wt++){let bt=wt*Z-ht;for(let zt=0;zt<st;zt++){let ne=zt*q-ot;xt[N]=ne*z,xt[S]=bt*H,xt[m]=tt,d.push(xt.x,xt.y,xt.z),xt[N]=0,xt[S]=0,xt[m]=k>0?1:-1,f.push(xt.x,xt.y,xt.z),b.push(zt/Y),b.push(1-wt/I),_t+=1}}for(let wt=0;wt<I;wt++)for(let bt=0;bt<Y;bt++){let zt=g+bt+st*wt,ne=g+bt+st*(wt+1),je=g+(bt+1)+st*(wt+1),Oe=g+(bt+1)+st*wt;u.push(zt,ne,Oe),u.push(ne,je,Oe),Ct+=6}l.addGroup(M,Ct,B),M+=Ct,g+=_t}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var sl=class i extends En{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,l=0,u=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:l,thetaLength:u};let d=this;s=Math.floor(s),r=Math.floor(r);let f=[],b=[],g=[],M=[],w=0,N=[],S=n/2,m=0;z(),o===!1&&(t>0&&H(!0),e>0&&H(!1)),this.setIndex(f),this.setAttribute("position",new wn(b,3)),this.setAttribute("normal",new wn(g,3)),this.setAttribute("uv",new wn(M,2));function z(){let D=new j,T=new j,k=0,Y=(e-t)/n;for(let I=0;I<=r;I++){let B=[],q=I/r,Z=q*(e-t)+t;for(let ot=0;ot<=s;ot++){let ht=ot/s,tt=ht*u+l,st=Math.sin(tt),pt=Math.cos(tt);T.x=Z*st,T.y=-q*n+S,T.z=Z*pt,b.push(T.x,T.y,T.z),D.set(st,Y,pt).normalize(),g.push(D.x,D.y,D.z),M.push(ht,1-q),B.push(w++)}N.push(B)}for(let I=0;I<s;I++)for(let B=0;B<r;B++){let q=N[B][I],Z=N[B+1][I],ot=N[B+1][I+1],ht=N[B][I+1];(t>0||B!==0)&&(f.push(q,Z,ht),k+=3),(e>0||B!==r-1)&&(f.push(Z,ot,ht),k+=3)}d.addGroup(m,k,0),m+=k}function H(D){let T=w,k=new Wt,Y=new j,I=0,B=D===!0?t:e,q=D===!0?1:-1;for(let ot=1;ot<=s;ot++)b.push(0,S*q,0),g.push(0,q,0),M.push(.5,.5),w++;let Z=w;for(let ot=0;ot<=s;ot++){let tt=ot/s*u+l,st=Math.cos(tt),pt=Math.sin(tt);Y.x=B*pt,Y.y=S*q,Y.z=B*st,b.push(Y.x,Y.y,Y.z),g.push(0,q,0),k.x=st*.5+.5,k.y=pt*.5*q+.5,M.push(k.x,k.y),w++}for(let ot=0;ot<s;ot++){let ht=T+ot,tt=Z+ot;D===!0?f.push(tt,tt+1,ht):f.push(tt+1,tt,ht),I+=3}d.addGroup(m,I,D===!0?1:2),m+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Ci=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Me("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let l=0,u=r-1,d;for(;l<=u;)if(s=Math.floor(l+(u-l)/2),d=n[s]-o,d<0)l=s+1;else if(d>0)u=s-1;else{u=s;break}if(s=u,n[s]===o)return s/(r-1);let f=n[s],g=n[s+1]-f,M=(o-f)/g;return(s+M)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),l=this.getPoint(r),u=e||(o.isVector2?new Wt:new j);return u.copy(l).sub(o).normalize(),u}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new j,s=[],r=[],o=[],l=new j,u=new Ze;for(let M=0;M<=t;M++){let w=M/t;s[M]=this.getTangentAt(w,new j)}r[0]=new j,o[0]=new j;let d=Number.MAX_VALUE,f=Math.abs(s[0].x),b=Math.abs(s[0].y),g=Math.abs(s[0].z);f<=d&&(d=f,n.set(1,0,0)),b<=d&&(d=b,n.set(0,1,0)),g<=d&&n.set(0,0,1),l.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],l),o[0].crossVectors(s[0],r[0]);for(let M=1;M<=t;M++){if(r[M]=r[M-1].clone(),o[M]=o[M-1].clone(),l.crossVectors(s[M-1],s[M]),l.length()>Number.EPSILON){l.normalize();let w=Math.acos(Ne(s[M-1].dot(s[M]),-1,1));r[M].applyMatrix4(u.makeRotationAxis(l,w))}o[M].crossVectors(s[M],r[M])}if(e===!0){let M=Math.acos(Ne(r[0].dot(r[t]),-1,1));M/=t,s[0].dot(l.crossVectors(r[0],r[t]))>0&&(M=-M);for(let w=1;w<=t;w++)r[w].applyMatrix4(u.makeRotationAxis(s[w],M*w)),o[w].crossVectors(s[w],r[w])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Ba=class extends Ci{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,l=!1,u=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=l,this.aRotation=u}getPoint(t,e=new Wt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let l=this.aStartAngle+t*r,u=this.aX+this.xRadius*Math.cos(l),d=this.aY+this.yRadius*Math.sin(l);if(this.aRotation!==0){let f=Math.cos(this.aRotation),b=Math.sin(this.aRotation),g=u-this.aX,M=d-this.aY;u=g*f-M*b+this.aX,d=g*b+M*f+this.aY}return n.set(u,d)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},hu=class extends Ba{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Vf(){let i=0,t=0,e=0,n=0;function s(r,o,l,u){i=r,t=l,e=-3*r+3*o-2*l-u,n=2*r-2*o+l+u}return{initCatmullRom:function(r,o,l,u,d){s(o,l,d*(l-r),d*(u-o))},initNonuniformCatmullRom:function(r,o,l,u,d,f,b){let g=(o-r)/d-(l-r)/(d+f)+(l-o)/f,M=(l-o)/f-(u-o)/(f+b)+(u-l)/b;g*=f,M*=f,s(o,l,g,M)},calc:function(r){let o=r*r,l=o*r;return i+t*r+e*o+n*l}}}var d0=new j,f0=new j,Kd=new Vf,Qd=new Vf,tf=new Vf,du=class extends Ci{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new j){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,l=Math.floor(o),u=o-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/r)+1)*r:u===0&&l===r-1&&(l=r-2,u=1);let d,f;this.closed||l>0?d=s[(l-1)%r]:(f0.subVectors(s[0],s[1]).add(s[0]),d=f0);let b=s[l%r],g=s[(l+1)%r];if(this.closed||l+2<r?f=s[(l+2)%r]:(d0.subVectors(s[r-1],s[r-2]).add(s[r-1]),f=d0),this.curveType==="centripetal"||this.curveType==="chordal"){let M=this.curveType==="chordal"?.5:.25,w=Math.pow(d.distanceToSquared(b),M),N=Math.pow(b.distanceToSquared(g),M),S=Math.pow(g.distanceToSquared(f),M);N<1e-4&&(N=1),w<1e-4&&(w=N),S<1e-4&&(S=N),Kd.initNonuniformCatmullRom(d.x,b.x,g.x,f.x,w,N,S),Qd.initNonuniformCatmullRom(d.y,b.y,g.y,f.y,w,N,S),tf.initNonuniformCatmullRom(d.z,b.z,g.z,f.z,w,N,S)}else this.curveType==="catmullrom"&&(Kd.initCatmullRom(d.x,b.x,g.x,f.x,this.tension),Qd.initCatmullRom(d.y,b.y,g.y,f.y,this.tension),tf.initCatmullRom(d.z,b.z,g.z,f.z,this.tension));return n.set(Kd.calc(u),Qd.calc(u),tf.calc(u)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new j().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function p0(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,l=i*i,u=i*l;return(2*e-2*n+r+o)*u+(-3*e+3*n-2*r-o)*l+r*i+e}function xv(i,t){let e=1-i;return e*e*t}function vv(i,t){return 2*(1-i)*i*t}function yv(i,t){return i*i*t}function zo(i,t,e,n){return xv(i,t)+vv(i,e)+yv(i,n)}function Sv(i,t){let e=1-i;return e*e*e*t}function bv(i,t){let e=1-i;return 3*e*e*i*t}function Mv(i,t){return 3*(1-i)*i*i*t}function wv(i,t){return i*i*i*t}function Vo(i,t,e,n,s){return Sv(i,t)+bv(i,e)+Mv(i,n)+wv(i,s)}var rl=class extends Ci{constructor(t=new Wt,e=new Wt,n=new Wt,s=new Wt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Wt){let n=e,s=this.v0,r=this.v1,o=this.v2,l=this.v3;return n.set(Vo(t,s.x,r.x,o.x,l.x),Vo(t,s.y,r.y,o.y,l.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},fu=class extends Ci{constructor(t=new j,e=new j,n=new j,s=new j){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new j){let n=e,s=this.v0,r=this.v1,o=this.v2,l=this.v3;return n.set(Vo(t,s.x,r.x,o.x,l.x),Vo(t,s.y,r.y,o.y,l.y),Vo(t,s.z,r.z,o.z,l.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},al=class extends Ci{constructor(t=new Wt,e=new Wt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Wt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Wt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},pu=class extends Ci{constructor(t=new j,e=new j){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new j){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new j){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ol=class extends Ci{constructor(t=new Wt,e=new Wt,n=new Wt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Wt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(zo(t,s.x,r.x,o.x),zo(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},mu=class extends Ci{constructor(t=new j,e=new j,n=new j){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new j){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(zo(t,s.x,r.x,o.x),zo(t,s.y,r.y,o.y),zo(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ll=class extends Ci{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Wt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),l=r-o,u=s[o===0?o:o-1],d=s[o],f=s[o>s.length-2?s.length-1:o+1],b=s[o>s.length-3?s.length-1:o+2];return n.set(p0(l,u.x,d.x,f.x,b.x),p0(l,u.y,d.y,f.y,b.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Wt().fromArray(s))}return this}},uf=Object.freeze({__proto__:null,ArcCurve:hu,CatmullRomCurve3:du,CubicBezierCurve:rl,CubicBezierCurve3:fu,EllipseCurve:Ba,LineCurve:al,LineCurve3:pu,QuadraticBezierCurve:ol,QuadraticBezierCurve3:mu,SplineCurve:ll}),gu=class extends Ci{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new uf[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,l=this.curves[r],u=l.getLength(),d=u===0?0:1-o/u;return l.getPointAt(d,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],l=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,u=o.getPoints(l);for(let d=0;d<u.length;d++){let f=u[d];n&&n.equals(f)||(e.push(f),n=f)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new uf[s.type]().fromJSON(s))}return this}},Fr=class extends gu{constructor(t){super(),this.type="Path",this.currentPoint=new Wt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new al(this.currentPoint.clone(),new Wt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new ol(this.currentPoint.clone(),new Wt(t,e),new Wt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let l=new rl(this.currentPoint.clone(),new Wt(t,e),new Wt(n,s),new Wt(r,o));return this.curves.push(l),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new ll(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let l=this.currentPoint.x,u=this.currentPoint.y;return this.absarc(t+l,e+u,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,l,u){let d=this.currentPoint.x,f=this.currentPoint.y;return this.absellipse(t+d,e+f,n,s,r,o,l,u),this}absellipse(t,e,n,s,r,o,l,u){let d=new Ba(t,e,n,s,r,o,l,u);if(this.curves.length>0){let b=d.getPoint(0);b.equals(this.currentPoint)||this.lineTo(b.x,b.y)}this.curves.push(d);let f=d.getPoint(1);return this.currentPoint.copy(f),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},ka=class extends Fr{constructor(t){super(t),this.uuid=ls(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Fr().fromJSON(s))}return this}};function Ev(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=dg(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let l,u,d;if(n&&(r=Iv(i,t,r,e)),i.length>80*e){l=i[0],u=i[1];let f=l,b=u;for(let g=e;g<s;g+=e){let M=i[g],w=i[g+1];M<l&&(l=M),w<u&&(u=w),M>f&&(f=M),w>b&&(b=w)}d=Math.max(f-l,b-u),d=d!==0?32767/d:0}return cl(r,o,e,l,u,d,0),o}function dg(i,t,e,n,s){let r;if(s===zv(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=m0(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=m0(o/n|0,i[o],i[o+1],r);return r&&$a(r,r.next)&&(hl(r),r=r.next),r}function Br(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&($a(e,e.next)||Sn(e.prev,e,e.next)===0)){if(hl(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function cl(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Uv(i,n,s,r);let l=i;for(;i.prev!==i.next;){let u=i.prev,d=i.next;if(r?Av(i,n,s,r):Tv(i)){t.push(u.i,i.i,d.i),hl(i),i=d.next,l=d.next;continue}if(i=d,i===l){o?o===1?(i=Cv(Br(i),t),cl(i,t,e,n,s,r,2)):o===2&&Rv(i,t,e,n,s,r):cl(Br(i),t,e,n,s,r,1);break}}}function Tv(i){let t=i.prev,e=i,n=i.next;if(Sn(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,l=t.y,u=e.y,d=n.y,f=Math.min(s,r,o),b=Math.min(l,u,d),g=Math.max(s,r,o),M=Math.max(l,u,d),w=n.next;for(;w!==t;){if(w.x>=f&&w.x<=g&&w.y>=b&&w.y<=M&&Bo(s,l,r,u,o,d,w.x,w.y)&&Sn(w.prev,w,w.next)>=0)return!1;w=w.next}return!0}function Av(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Sn(s,r,o)>=0)return!1;let l=s.x,u=r.x,d=o.x,f=s.y,b=r.y,g=o.y,M=Math.min(l,u,d),w=Math.min(f,b,g),N=Math.max(l,u,d),S=Math.max(f,b,g),m=hf(M,w,t,e,n),z=hf(N,S,t,e,n),H=i.prevZ,D=i.nextZ;for(;H&&H.z>=m&&D&&D.z<=z;){if(H.x>=M&&H.x<=N&&H.y>=w&&H.y<=S&&H!==s&&H!==o&&Bo(l,f,u,b,d,g,H.x,H.y)&&Sn(H.prev,H,H.next)>=0||(H=H.prevZ,D.x>=M&&D.x<=N&&D.y>=w&&D.y<=S&&D!==s&&D!==o&&Bo(l,f,u,b,d,g,D.x,D.y)&&Sn(D.prev,D,D.next)>=0))return!1;D=D.nextZ}for(;H&&H.z>=m;){if(H.x>=M&&H.x<=N&&H.y>=w&&H.y<=S&&H!==s&&H!==o&&Bo(l,f,u,b,d,g,H.x,H.y)&&Sn(H.prev,H,H.next)>=0)return!1;H=H.prevZ}for(;D&&D.z<=z;){if(D.x>=M&&D.x<=N&&D.y>=w&&D.y<=S&&D!==s&&D!==o&&Bo(l,f,u,b,d,g,D.x,D.y)&&Sn(D.prev,D,D.next)>=0)return!1;D=D.nextZ}return!0}function Cv(i,t){let e=i;do{let n=e.prev,s=e.next.next;!$a(n,s)&&pg(n,e,e.next,s)&&ul(n,s)&&ul(s,n)&&(t.push(n.i,e.i,s.i),hl(e),hl(e.next),e=i=s),e=e.next}while(e!==i);return Br(e)}function Rv(i,t,e,n,s,r){let o=i;do{let l=o.next.next;for(;l!==o.prev;){if(o.i!==l.i&&Bv(o,l)){let u=mg(o,l);o=Br(o,o.next),u=Br(u,u.next),cl(o,t,e,n,s,r,0),cl(u,t,e,n,s,r,0);return}l=l.next}o=o.next}while(o!==i)}function Iv(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let l=t[r]*n,u=r<o-1?t[r+1]*n:i.length,d=dg(i,l,u,n,!1);d===d.next&&(d.steiner=!0),s.push(Fv(d))}s.sort(Pv);for(let r=0;r<s.length;r++)e=Lv(s[r],e);return e}function Pv(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Lv(i,t){let e=Dv(i,t);if(!e)return t;let n=mg(e,i);return Br(n,n.next),Br(e,e.next)}function Dv(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if($a(i,e))return e;do{if($a(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let b=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(b<=n&&b>r&&(r=b,o=e.x<e.next.x?e:e.next,b===n))return o}e=e.next}while(e!==t);if(!o)return null;let l=o,u=o.x,d=o.y,f=1/0;e=o;do{if(n>=e.x&&e.x>=u&&n!==e.x&&fg(s<d?n:r,s,u,d,s<d?r:n,s,e.x,e.y)){let b=Math.abs(s-e.y)/(n-e.x);ul(e,i)&&(b<f||b===f&&(e.x>o.x||e.x===o.x&&Nv(o,e)))&&(o=e,f=b)}e=e.next}while(e!==l);return o}function Nv(i,t){return Sn(i.prev,i,t.prev)<0&&Sn(t.next,i,i.next)<0}function Uv(i,t,e,n){let s=i;do s.z===0&&(s.z=hf(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Ov(s)}function Ov(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,l=0;for(let d=0;d<e&&(l++,o=o.nextZ,!!o);d++);let u=e;for(;l>0||u>0&&o;)l!==0&&(u===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,l--):(s=o,o=o.nextZ,u--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function hf(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Fv(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function fg(i,t,e,n,s,r,o,l){return(s-o)*(t-l)>=(i-o)*(r-l)&&(i-o)*(n-l)>=(e-o)*(t-l)&&(e-o)*(r-l)>=(s-o)*(n-l)}function Bo(i,t,e,n,s,r,o,l){return!(i===o&&t===l)&&fg(i,t,e,n,s,r,o,l)}function Bv(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!kv(i,t)&&(ul(i,t)&&ul(t,i)&&$v(i,t)&&(Sn(i.prev,i,t.prev)||Sn(i,t.prev,t))||$a(i,t)&&Sn(i.prev,i,i.next)>0&&Sn(t.prev,t,t.next)>0)}function Sn(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function $a(i,t){return i.x===t.x&&i.y===t.y}function pg(i,t,e,n){let s=$c(Sn(i,t,e)),r=$c(Sn(i,t,n)),o=$c(Sn(e,n,i)),l=$c(Sn(e,n,t));return!!(s!==r&&o!==l||s===0&&kc(i,e,t)||r===0&&kc(i,n,t)||o===0&&kc(e,i,n)||l===0&&kc(e,t,n))}function kc(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function $c(i){return i>0?1:i<0?-1:0}function kv(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&pg(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function ul(i,t){return Sn(i.prev,i,i.next)<0?Sn(i,t,i.next)>=0&&Sn(i,i.prev,t)>=0:Sn(i,t,i.prev)<0||Sn(i,i.next,t)<0}function $v(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function mg(i,t){let e=df(i.i,i.x,i.y),n=df(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function m0(i,t,e,n){let s=df(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function hl(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function df(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function zv(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var ff=class{static triangulate(t,e,n=2){return Ev(t,e,n)}},Pr=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];g0(t),_0(n,t);let o=t.length;e.forEach(g0);for(let u=0;u<e.length;u++)s.push(o),o+=e[u].length,_0(n,e[u]);let l=ff.triangulate(n,s);for(let u=0;u<l.length;u+=3)r.push(l.slice(u,u+3));return r}};function g0(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function _0(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var dl=class i extends En{constructor(t=new ka([new Wt(.5,.5),new Wt(-.5,.5),new Wt(-.5,-.5),new Wt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let l=0,u=t.length;l<u;l++){let d=t[l];o(d)}this.setAttribute("position",new wn(s,3)),this.setAttribute("uv",new wn(r,2)),this.computeVertexNormals();function o(l){let u=[],d=e.curveSegments!==void 0?e.curveSegments:12,f=e.steps!==void 0?e.steps:1,b=e.depth!==void 0?e.depth:1,g=e.bevelEnabled!==void 0?e.bevelEnabled:!0,M=e.bevelThickness!==void 0?e.bevelThickness:.2,w=e.bevelSize!==void 0?e.bevelSize:M-.1,N=e.bevelOffset!==void 0?e.bevelOffset:0,S=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,z=e.UVGenerator!==void 0?e.UVGenerator:Vv,H,D=!1,T,k,Y,I;if(m){H=m.getSpacedPoints(f),D=!0,g=!1;let rt=m.isCatmullRomCurve3?m.closed:!1;T=m.computeFrenetFrames(f,rt),k=new j,Y=new j,I=new j}g||(S=0,M=0,w=0,N=0);let B=l.extractPoints(d),q=B.shape,Z=B.holes;if(!Pr.isClockWise(q)){q=q.reverse();for(let rt=0,It=Z.length;rt<It;rt++){let V=Z[rt];Pr.isClockWise(V)&&(Z[rt]=V.reverse())}}function ht(rt){let V=10000000000000001e-36,Pt=rt[0];for(let $t=1;$t<=rt.length;$t++){let ce=$t%rt.length,pe=rt[ce],Se=pe.x-Pt.x,Ae=pe.y-Pt.y,X=Se*Se+Ae*Ae,Qe=Math.max(Math.abs(pe.x),Math.abs(pe.y),Math.abs(Pt.x),Math.abs(Pt.y)),Fe=V*Qe*Qe;if(X<=Fe){rt.splice(ce,1),$t--;continue}Pt=pe}}ht(q),Z.forEach(ht);let tt=Z.length,st=q;for(let rt=0;rt<tt;rt++){let It=Z[rt];q=q.concat(It)}function pt(rt,It,V){return It||we("ExtrudeGeometry: vec does not exist"),rt.clone().addScaledVector(It,V)}let _t=q.length;function Ct(rt,It,V){let Pt,$t,ce,pe=rt.x-It.x,Se=rt.y-It.y,Ae=V.x-rt.x,X=V.y-rt.y,Qe=pe*pe+Se*Se,Fe=pe*X-Se*Ae;if(Math.abs(Fe)>Number.EPSILON){let F=Math.sqrt(Qe),E=Math.sqrt(Ae*Ae+X*X),at=It.x-Se/F,lt=It.y+pe/F,gt=V.x-X/E,Nt=V.y+Ae/E,Ht=((gt-at)*X-(Nt-lt)*Ae)/(pe*X-Se*Ae);Pt=at+pe*Ht-rt.x,$t=lt+Se*Ht-rt.y;let ft=Pt*Pt+$t*$t;if(ft<=2)return new Wt(Pt,$t);ce=Math.sqrt(ft/2)}else{let F=!1;pe>Number.EPSILON?Ae>Number.EPSILON&&(F=!0):pe<-Number.EPSILON?Ae<-Number.EPSILON&&(F=!0):Math.sign(Se)===Math.sign(X)&&(F=!0),F?(Pt=-Se,$t=pe,ce=Math.sqrt(Qe)):(Pt=pe,$t=Se,ce=Math.sqrt(Qe/2))}return new Wt(Pt/ce,$t/ce)}let xt=[];for(let rt=0,It=st.length,V=It-1,Pt=rt+1;rt<It;rt++,V++,Pt++)V===It&&(V=0),Pt===It&&(Pt=0),xt[rt]=Ct(st[rt],st[V],st[Pt]);let wt=[],bt,zt=xt.concat();for(let rt=0,It=tt;rt<It;rt++){let V=Z[rt];bt=[];for(let Pt=0,$t=V.length,ce=$t-1,pe=Pt+1;Pt<$t;Pt++,ce++,pe++)ce===$t&&(ce=0),pe===$t&&(pe=0),bt[Pt]=Ct(V[Pt],V[ce],V[pe]);wt.push(bt),zt=zt.concat(bt)}let ne;if(S===0)ne=Pr.triangulateShape(st,Z);else{let rt=[],It=[];for(let V=0;V<S;V++){let Pt=V/S,$t=M*Math.cos(Pt*Math.PI/2),ce=w*Math.sin(Pt*Math.PI/2)+N;for(let pe=0,Se=st.length;pe<Se;pe++){let Ae=pt(st[pe],xt[pe],ce);Lt(Ae.x,Ae.y,-$t),Pt===0&&rt.push(Ae)}for(let pe=0,Se=tt;pe<Se;pe++){let Ae=Z[pe];bt=wt[pe];let X=[];for(let Qe=0,Fe=Ae.length;Qe<Fe;Qe++){let F=pt(Ae[Qe],bt[Qe],ce);Lt(F.x,F.y,-$t),Pt===0&&X.push(F)}Pt===0&&It.push(X)}}ne=Pr.triangulateShape(rt,It)}let je=ne.length,Oe=w+N;for(let rt=0;rt<_t;rt++){let It=g?pt(q[rt],zt[rt],Oe):q[rt];D?(Y.copy(T.normals[0]).multiplyScalar(It.x),k.copy(T.binormals[0]).multiplyScalar(It.y),I.copy(H[0]).add(Y).add(k),Lt(I.x,I.y,I.z)):Lt(It.x,It.y,0)}for(let rt=1;rt<=f;rt++)for(let It=0;It<_t;It++){let V=g?pt(q[It],zt[It],Oe):q[It];D?(Y.copy(T.normals[rt]).multiplyScalar(V.x),k.copy(T.binormals[rt]).multiplyScalar(V.y),I.copy(H[rt]).add(Y).add(k),Lt(I.x,I.y,I.z)):Lt(V.x,V.y,b/f*rt)}for(let rt=S-1;rt>=0;rt--){let It=rt/S,V=M*Math.cos(It*Math.PI/2),Pt=w*Math.sin(It*Math.PI/2)+N;for(let $t=0,ce=st.length;$t<ce;$t++){let pe=pt(st[$t],xt[$t],Pt);Lt(pe.x,pe.y,b+V)}for(let $t=0,ce=Z.length;$t<ce;$t++){let pe=Z[$t];bt=wt[$t];for(let Se=0,Ae=pe.length;Se<Ae;Se++){let X=pt(pe[Se],bt[Se],Pt);D?Lt(X.x,X.y+H[f-1].y,H[f-1].x+V):Lt(X.x,X.y,b+V)}}}We(),vt();function We(){let rt=s.length/3;if(g){let It=0,V=_t*It;for(let Pt=0;Pt<je;Pt++){let $t=ne[Pt];de($t[2]+V,$t[1]+V,$t[0]+V)}It=f+S*2,V=_t*It;for(let Pt=0;Pt<je;Pt++){let $t=ne[Pt];de($t[0]+V,$t[1]+V,$t[2]+V)}}else{for(let It=0;It<je;It++){let V=ne[It];de(V[2],V[1],V[0])}for(let It=0;It<je;It++){let V=ne[It];de(V[0]+_t*f,V[1]+_t*f,V[2]+_t*f)}}n.addGroup(rt,s.length/3-rt,0)}function vt(){let rt=s.length/3,It=0;yt(st,It),It+=st.length;for(let V=0,Pt=Z.length;V<Pt;V++){let $t=Z[V];yt($t,It),It+=$t.length}n.addGroup(rt,s.length/3-rt,1)}function yt(rt,It){let V=rt.length;for(;--V>=0;){let Pt=V,$t=V-1;$t<0&&($t=rt.length-1);for(let ce=0,pe=f+S*2;ce<pe;ce++){let Se=_t*ce,Ae=_t*(ce+1),X=It+Pt+Se,Qe=It+$t+Se,Fe=It+$t+Ae,F=It+Pt+Ae;Kt(X,Qe,Fe,F)}}}function Lt(rt,It,V){u.push(rt),u.push(It),u.push(V)}function de(rt,It,V){ge(rt),ge(It),ge(V);let Pt=s.length/3,$t=z.generateTopUV(n,s,Pt-3,Pt-2,Pt-1);ee($t[0]),ee($t[1]),ee($t[2])}function Kt(rt,It,V,Pt){ge(rt),ge(It),ge(Pt),ge(It),ge(V),ge(Pt);let $t=s.length/3,ce=z.generateSideWallUV(n,s,$t-6,$t-3,$t-2,$t-1);ee(ce[0]),ee(ce[1]),ee(ce[3]),ee(ce[1]),ee(ce[2]),ee(ce[3])}function ge(rt){s.push(u[rt*3+0]),s.push(u[rt*3+1]),s.push(u[rt*3+2])}function ee(rt){r.push(rt.x),r.push(rt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Hv(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let l=e[t.shapes[r]];n.push(l)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new uf[s.type]().fromJSON(s)),new i(n,t.options)}},Vv={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],l=t[n*3],u=t[n*3+1],d=t[s*3],f=t[s*3+1];return[new Wt(r,o),new Wt(l,u),new Wt(d,f)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],l=t[e*3+1],u=t[e*3+2],d=t[n*3],f=t[n*3+1],b=t[n*3+2],g=t[s*3],M=t[s*3+1],w=t[s*3+2],N=t[r*3],S=t[r*3+1],m=t[r*3+2];return Math.abs(l-f)<Math.abs(o-d)?[new Wt(o,1-u),new Wt(d,1-b),new Wt(g,1-w),new Wt(N,1-m)]:[new Wt(l,1-u),new Wt(f,1-b),new Wt(M,1-w),new Wt(S,1-m)]}};function Hv(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var fl=class i extends En{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,l=Math.floor(n),u=Math.floor(s),d=l+1,f=u+1,b=t/l,g=e/u,M=[],w=[],N=[],S=[];for(let m=0;m<f;m++){let z=m*g-o;for(let H=0;H<d;H++){let D=H*b-r;w.push(D,-z,0),N.push(0,0,1),S.push(H/l),S.push(1-m/u)}}for(let m=0;m<u;m++)for(let z=0;z<l;z++){let H=z+d*m,D=z+d*(m+1),T=z+1+d*(m+1),k=z+1+d*m;M.push(H,D,k),M.push(D,T,k)}this.setIndex(M),this.setAttribute("position",new wn(w,3)),this.setAttribute("normal",new wn(N,3)),this.setAttribute("uv",new wn(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var pl=class extends En{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],n=new Set,s=new j,r=new j;if(t.index!==null){let o=t.attributes.position,l=t.index,u=t.groups;u.length===0&&(u=[{start:0,count:l.count,materialIndex:0}]);for(let d=0,f=u.length;d<f;++d){let b=u[d],g=b.start,M=b.count;for(let w=g,N=g+M;w<N;w+=3)for(let S=0;S<3;S++){let m=l.getX(w+S),z=l.getX(w+(S+1)%3);s.fromBufferAttribute(o,m),r.fromBufferAttribute(o,z),x0(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{let o=t.attributes.position;for(let l=0,u=o.count/3;l<u;l++)for(let d=0;d<3;d++){let f=3*l+d,b=3*l+(d+1)%3;s.fromBufferAttribute(o,f),r.fromBufferAttribute(o,b),x0(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new wn(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function x0(i,t,e){let n=`${i.x},${i.y},${i.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${i.x},${i.y},${i.z}`;return e.has(n)===!0||e.has(s)===!0?!1:(e.add(n),e.add(s),!0)}function zr(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(v0(s))s.isRenderTargetTexture?(Me("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(v0(s[0])){let r=[];for(let o=0,l=s.length;o<l;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function ei(i){let t={};for(let e=0;e<i.length;e++){let n=zr(i[e]);for(let s in n)t[s]=n[s]}return t}function v0(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Gv(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Hf(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ye.workingColorSpace}var Dl={clone:zr,merge:ei},Wv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,kn=class extends ds{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wv,this.fragmentShader=Xv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=zr(t.uniforms),this.uniformsGroups=Gv(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new ye().setHex(s.value);break;case"v2":this.uniforms[n].value=new Wt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new j().fromArray(s.value);break;case"v4":this.uniforms[n].value=new on().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Le().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Ze().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},_u=class extends kn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var ml=class extends ds{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yh,this.normalScale=new Wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ks,this.combine=Du,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},xu=class extends ds{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=K0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},vu=class extends ds{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Ma(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function ef(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var sr=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let l=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===l)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let l=e[1];t<l&&(n=2,r=l);for(let u=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===u)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let l=n+o>>>1;t<e[l]?o=l:n=l+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},yu=class extends sr{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:af,endingEnd:af}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,l=s[r],u=s[o];if(l===void 0)switch(this.getSettings_().endingStart){case of:r=t,l=2*e-n;break;case lf:r=s.length-2,l=e+s[r]-s[r+1];break;default:r=t,l=n}if(u===void 0)switch(this.getSettings_().endingEnd){case of:o=t,u=2*n-e;break;case lf:o=1,u=n+s[1]-s[0];break;default:o=t-1,u=e}let d=(n-e)*.5,f=this.valueSize;this._weightPrev=d/(e-l),this._weightNext=d/(u-n),this._offsetPrev=r*f,this._offsetNext=o*f}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,u=t*l,d=u-l,f=this._offsetPrev,b=this._offsetNext,g=this._weightPrev,M=this._weightNext,w=(n-e)/(s-e),N=w*w,S=N*w,m=-g*S+2*g*N-g*w,z=(1+g)*S+(-1.5-2*g)*N+(-.5+g)*w+1,H=(-1-M)*S+(1.5+M)*N+.5*w,D=M*S-M*N;for(let T=0;T!==l;++T)r[T]=m*o[f+T]+z*o[d+T]+H*o[u+T]+D*o[b+T];return r}},Su=class extends sr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,u=t*l,d=u-l,f=(n-e)/(s-e),b=1-f;for(let g=0;g!==l;++g)r[g]=o[d+g]*b+o[u+g]*f;return r}},bu=class extends sr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Mu=class extends sr{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,u=t*l,d=u-l,f=this.inTangents,b=this.outTangents;if(!f||!b){let w=(n-e)/(s-e),N=1-w;for(let S=0;S!==l;++S)r[S]=o[d+S]*N+o[u+S]*w;return r}let g=l*2,M=t-1;for(let w=0;w!==l;++w){let N=o[d+w],S=o[u+w],m=M*g+w*2,z=b[m],H=b[m+1],D=t*g+w*2,T=f[D],k=f[D+1],Y=Yv(n,e,z,T,s);r[w]=gg(Y,N,H,k,S)}return r}};function gg(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function qv(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Yv(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let l=gg(r,t,e,n,s)-i;if(Math.abs(l)<1e-10)break;let u=qv(r,t,e,n,s);if(Math.abs(u)<1e-10)break;r=Math.max(0,Math.min(1,r-l/u))}return r}var Ri=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ma(e,this.TimeBufferType),this.values=Ma(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ma(t.times,Array),values:Ma(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),ef(t.settings)&&(n.settings={inTangents:Ma(t.settings.inTangents,Array),outTangents:Ma(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new bu(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Su(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new yu(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Mu(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Ho:e=this.InterpolantFactoryMethodDiscrete;break;case eu:e=this.InterpolantFactoryMethodLinear;break;case Gc:e=this.InterpolantFactoryMethodSmooth;break;case rf:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Me("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ho;case this.InterpolantFactoryMethodLinear:return eu;case this.InterpolantFactoryMethodSmooth:return Gc;case this.InterpolantFactoryMethodBezier:return rf}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;ef(this.settings)&&(y0(this.settings.inTangents,t),y0(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let l=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*l,o*l)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(we("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(we("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let l=0;l!==r;l++){let u=n[l];if(typeof u=="number"&&isNaN(u)){we("KeyframeTrack: Time is not a valid number.",this,l,u),t=!1;break}if(o!==null&&o>u){we("KeyframeTrack: Out of order keys.",this,l,u,o),t=!1;break}o=u}if(s!==void 0&&Ox(s))for(let l=0,u=s.length;l!==u;++l){let d=s[l];if(isNaN(d)){we("KeyframeTrack: Value is not a valid number.",this,l,d),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Gc,r=t.length-1,o=1;for(let l=1;l<r;++l){let u=!1,d=t[l],f=t[l+1];if(d!==f&&(l!==1||d!==t[0]))if(s)u=!0;else{let b=l*n,g=b-n,M=b+n;for(let w=0;w!==n;++w){let N=e[b+w];if(N!==e[g+w]||N!==e[M+w]){u=!0;break}}}if(u){if(l!==o){t[o]=t[l];let b=l*n,g=o*n;for(let M=0;M!==n;++M)e[g+M]=e[b+M]}++o}}if(r>0){t[o]=t[r];for(let l=r*n,u=o*n,d=0;d!==n;++d)e[u+d]=e[l+d];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,ef(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function y0(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Ri.prototype.ValueTypeName="";Ri.prototype.TimeBufferType=Float32Array;Ri.prototype.ValueBufferType=Float32Array;Ri.prototype.DefaultInterpolation=eu;var rr=class extends Ri{constructor(t,e,n){super(t,e,n)}};rr.prototype.ValueTypeName="bool";rr.prototype.ValueBufferType=Array;rr.prototype.DefaultInterpolation=Ho;rr.prototype.InterpolantFactoryMethodLinear=void 0;rr.prototype.InterpolantFactoryMethodSmooth=void 0;var wu=class extends Ri{constructor(t,e,n,s){super(t,e,n,s)}};wu.prototype.ValueTypeName="color";var Eu=class extends Ri{constructor(t,e,n,s){super(t,e,n,s)}};Eu.prototype.ValueTypeName="number";var Tu=class extends sr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,u=(n-e)/(s-e),d=t*l;for(let f=d+l;d!==f;d+=4)hs.slerpFlat(r,0,o,d-l,o,d,u);return r}},gl=class extends Ri{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Tu(this.times,this.values,this.getValueSize(),t)}};gl.prototype.ValueTypeName="quaternion";gl.prototype.InterpolantFactoryMethodSmooth=void 0;var ar=class extends Ri{constructor(t,e,n){super(t,e,n)}};ar.prototype.ValueTypeName="string";ar.prototype.ValueBufferType=Array;ar.prototype.DefaultInterpolation=Ho;ar.prototype.InterpolantFactoryMethodLinear=void 0;ar.prototype.InterpolantFactoryMethodSmooth=void 0;var Au=class extends Ri{constructor(t,e,n,s){super(t,e,n,s)}};Au.prototype.ValueTypeName="vector";var Cu=class{constructor(t,e,n){let s=this,r=!1,o=0,l=0,u,d=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(f){l++,r===!1&&s.onStart!==void 0&&s.onStart(f,o,l),r=!0},this.itemEnd=function(f){o++,s.onProgress!==void 0&&s.onProgress(f,o,l),o===l&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(f){s.onError!==void 0&&s.onError(f)},this.resolveURL=function(f){return f=f.normalize("NFC"),u?u(f):f},this.setURLModifier=function(f){return u=f,this},this.addHandler=function(f,b){return d.push(f,b),this},this.removeHandler=function(f){let b=d.indexOf(f);return b!==-1&&d.splice(b,2),this},this.getHandler=function(f){for(let b=0,g=d.length;b<g;b+=2){let M=d[b],w=d[b+1];if(M.global&&(M.lastIndex=0),M.test(f))return w}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},_g=new Cu,Ru=class{constructor(t){this.manager=t!==void 0?t:_g,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Ru.DEFAULT_MATERIAL_NAME="__DEFAULT";var _l=class extends Fn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ye(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},xl=class extends _l{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Fn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ye(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},nf=new Ze,S0=new j,b0=new j,Iu=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Wt(512,512),this.mapType=Si,this.map=null,this.mapPass=null,this.matrix=new Ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Oa,this._frameExtents=new Wt(1,1),this._viewportCount=1,this._viewports=[new on(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;S0.setFromMatrixPosition(t.matrixWorld),e.position.copy(S0),b0.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(b0),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){nf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(nf,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,l=s?s.w/r.y:1,u=s?s.x/r.x:0,d=s?s.y/r.y:0;t.coordinateSystem===Ia||t.reversedDepth?e.set(.5*o,0,0,.5*o+u,0,.5*l,0,.5*l+d,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+u,0,.5*l,0,.5*l+d,0,0,.5,.5,0,0,0,1),e.multiply(nf)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},zc=new j,Vc=new hs,as=new j,vl=class extends Fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ze,this.projectionMatrix=new Ze,this.projectionMatrixInverse=new Ze,this.coordinateSystem=Yi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(zc,Vc,as),as.x===1&&as.y===1&&as.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zc,Vc,as.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(zc,Vc,as),as.x===1&&as.y===1&&as.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zc,Vc,as.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},er=new j,M0=new Wt,w0=new Wt,ti=class extends vl{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=La*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ko*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return La*2*Math.atan(Math.tan(ko*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){er.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(er.x,er.y).multiplyScalar(-t/er.z),er.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(er.x,er.y).multiplyScalar(-t/er.z)}getViewSize(t,e){return this.getViewBounds(t,M0,w0),e.subVectors(w0,M0)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ko*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let u=o.fullWidth,d=o.fullHeight;r+=o.offsetX*s/u,e-=o.offsetY*n/d,s*=o.width/u,n*=o.height/d}let l=this.filmOffset;l!==0&&(r+=t*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var za=class extends vl{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,l=s+e,u=s-e;if(this.view!==null&&this.view.enabled){let d=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=d*this.view.offsetX,o=r+d*this.view.width,l-=f*this.view.offsetY,u=l-f*this.view.height}this.projectionMatrix.makeOrthographic(r,o,l,u,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},pf=class extends Iu{constructor(){super(new za(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},yl=class extends _l{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Fn.DEFAULT_UP),this.updateMatrix(),this.target=new Fn,this.shadow=new pf}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Sl=class extends En{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var wa=-90,Ea=1,Pu=class extends Fn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new ti(wa,Ea,t,e);s.layers=this.layers,this.add(s);let r=new ti(wa,Ea,t,e);r.layers=this.layers,this.add(r);let o=new ti(wa,Ea,t,e);o.layers=this.layers,this.add(o);let l=new ti(wa,Ea,t,e);l.layers=this.layers,this.add(l);let u=new ti(wa,Ea,t,e);u.layers=this.layers,this.add(u);let d=new ti(wa,Ea,t,e);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,l,u]=e;for(let d of e)this.remove(d);if(t===Yi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(t===Ia)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let d of e)this.add(d),d.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,l,u,d,f]=this.children,b=t.getRenderTarget(),g=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),w=t.xr.enabled;t.xr.enabled=!1;let N=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let S=!1;t.isWebGLRenderer===!0?S=t.state.buffers.depth.getReversed():S=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),S&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),S&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),S&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,3,s),S&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(n,4,s),S&&t.autoClear===!1&&t.clearDepth(),t.render(e,d),n.texture.generateMipmaps=N,t.setRenderTarget(n,5,s),S&&t.autoClear===!1&&t.clearDepth(),t.render(e,f),t.setRenderTarget(b,g,M),t.xr.enabled=w,n.texture.needsPMREMUpdate=!0}},Lu=class extends ti{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Gf="\\[\\]\\.:\\/",Jv=new RegExp("["+Gf+"]","g"),Wf="[^"+Gf+"]",Zv="[^"+Gf.replace("\\.","")+"]",jv=/((?:WC+[\/:])*)/.source.replace("WC",Wf),Kv=/(WCOD+)?/.source.replace("WCOD",Zv),Qv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Wf),ty=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Wf),ey=new RegExp("^"+jv+Kv+Qv+ty+"$"),ny=["material","materials","bones","map"],mf=class{constructor(t,e,n){let s=n||_n.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},_n=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Jv,"")}static parseTrackName(t){let e=ey.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);ny.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let l=r[o];if(l.name===e||l.uuid===e)return l;let u=n(l.children);if(u)return u}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Me("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let d=e.objectIndex;switch(n){case"materials":if(!t.material){we("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){we("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){we("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let f=0;f<t.length;f++)if(t[f].name===d){d=f;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){we("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){we("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){we("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(d!==void 0){if(t[d]===void 0){we("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[d]}}let o=t[s];if(o===void 0){let d=e.nodeName;we("PropertyBinding: Trying to update property for track: "+d+"."+s+" but it wasn't found.",t);return}let l=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?l=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let u=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){we("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){we("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}u=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(u=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(u=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[u],this.setValue=this.SetterByBindingTypeAndVersioning[u][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};_n.Composite=mf;_n.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};_n.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};_n.prototype.GetterByBindingType=[_n.prototype._getValue_direct,_n.prototype._getValue_array,_n.prototype._getValue_arrayElement,_n.prototype._getValue_toArray];_n.prototype.SetterByBindingTypeAndVersioning=[[_n.prototype._setValue_direct,_n.prototype._setValue_direct_setNeedsUpdate,_n.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[_n.prototype._setValue_array,_n.prototype._setValue_array_setNeedsUpdate,_n.prototype._setValue_array_setMatrixWorldNeedsUpdate],[_n.prototype._setValue_arrayElement,_n.prototype._setValue_arrayElement_setNeedsUpdate,_n.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[_n.prototype._setValue_fromArray,_n.prototype._setValue_fromArray_setNeedsUpdate,_n.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var gw=new Float32Array(1);var or=class extends ru{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}};var E0=new Ze,bl=class{constructor(t,e,n=0,s=1/0){this.ray=new Dr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Na,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):we("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return E0.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(E0),this}intersectObject(t,e=!0,n=[]){return gf(t,this,n,e),n.sort(T0),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)gf(t[s],this,n,e);return n.sort(T0),n}};function T0(i,t){return i.distance-t.distance}function gf(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,l=r.length;o<l;o++)gf(r[o],t,e,!0)}}var _f=class i{static{i.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};var A0=new j,Hc=new j,Ta=new j,Aa=new j,sf=new j,iy=new j,sy=new j,Ml=class{constructor(t=new j,e=new j){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){A0.subVectors(t,this.start),Hc.subVectors(this.end,this.start);let n=Hc.dot(Hc);if(n===0)return 0;let r=Hc.dot(A0)/n;return e&&(r=Ne(r,0,1)),r}closestPointToPoint(t,e,n){let s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}distanceSqToLine3(t,e=iy,n=sy){let s=10000000000000001e-32,r,o,l=this.start,u=t.start,d=this.end,f=t.end;Ta.subVectors(d,l),Aa.subVectors(f,u),sf.subVectors(l,u);let b=Ta.dot(Ta),g=Aa.dot(Aa),M=Aa.dot(sf);if(b<=s&&g<=s)return e.copy(l),n.copy(u),e.sub(n),e.dot(e);if(b<=s)r=0,o=M/g,o=Ne(o,0,1);else{let w=Ta.dot(sf);if(g<=s)o=0,r=Ne(-w/b,0,1);else{let N=Ta.dot(Aa),S=b*g-N*N;S!==0?r=Ne((N*M-w*g)/S,0,1):r=0,o=(N*r+M)/g,o<0?(o=0,r=Ne(-w/b,0,1)):o>1&&(o=1,r=Ne((N-w)/b,0,1))}}return e.copy(l).addScaledVector(Ta,r),n.copy(u).addScaledVector(Aa,o),e.distanceToSquared(n)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};function Xf(i,t,e,n){let s=ry(n);switch(e){case Of:return i*t;case $u:return i*t/s.components*s.byteLength;case zu:return i*t/s.components*s.byteLength;case dr:return i*t*2/s.components*s.byteLength;case Vu:return i*t*2/s.components*s.byteLength;case Ff:return i*t*3/s.components*s.byteLength;case ki:return i*t*4/s.components*s.byteLength;case Hu:return i*t*4/s.components*s.byteLength;case Al:case Cl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Rl:case Il:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Wu:case qu:return Math.max(i,16)*Math.max(t,8)/4;case Gu:case Xu:return Math.max(i,8)*Math.max(t,8)/2;case Yu:case Ju:case ju:case Ku:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Zu:case Pl:case Qu:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case th:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case eh:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case nh:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ih:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case sh:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case rh:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ah:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case oh:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case lh:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ch:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case uh:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case hh:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case dh:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case fh:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ph:case mh:case gh:return Math.ceil(i/4)*Math.ceil(t/4)*16;case _h:case xh:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ll:case vh:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ry(i){switch(i){case Si:case Lf:return{byteLength:1,components:1};case Ga:case Df:case Qi:return{byteLength:2,components:1};case Bu:case ku:return{byteLength:2,components:4};case Ki:case Fu:case Bi:return{byteLength:4,components:1};case Nf:case Uf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Me("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function kg(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function oy(i){let t=new WeakMap;function e(l,u){let d=l.array,f=l.usage,b=d.byteLength,g=i.createBuffer();i.bindBuffer(u,g),i.bufferData(u,d,f),l.onUploadCallback();let M;if(d instanceof Float32Array)M=i.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)M=i.HALF_FLOAT;else if(d instanceof Uint16Array)l.isFloat16BufferAttribute?M=i.HALF_FLOAT:M=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)M=i.SHORT;else if(d instanceof Uint32Array)M=i.UNSIGNED_INT;else if(d instanceof Int32Array)M=i.INT;else if(d instanceof Int8Array)M=i.BYTE;else if(d instanceof Uint8Array)M=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)M=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:M,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version,size:b}}function n(l,u,d){let f=u.array,b=u.updateRanges;if(i.bindBuffer(d,l),b.length===0)i.bufferSubData(d,0,f);else{b.sort((M,w)=>M.start-w.start);let g=0;for(let M=1;M<b.length;M++){let w=b[g],N=b[M];N.start<=w.start+w.count+1?w.count=Math.max(w.count,N.start+N.count-w.start):(++g,b[g]=N)}b.length=g+1;for(let M=0,w=b.length;M<w;M++){let N=b[M];i.bufferSubData(d,N.start*f.BYTES_PER_ELEMENT,f,N.start,N.count)}u.clearUpdateRanges()}u.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),t.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);let u=t.get(l);u&&(i.deleteBuffer(u.buffer),t.delete(l))}function o(l,u){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){let f=t.get(l);(!f||f.version<l.version)&&t.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}let d=t.get(l);if(d===void 0)t.set(l,e(l,u));else if(d.version<l.version){if(d.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(d.buffer,l,u),d.version=l.version}}return{get:s,remove:r,update:o}}var ly=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cy=`#ifdef USE_ALPHAHASH
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
#endif`,uy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,py=`#ifdef USE_AOMAP
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
#endif`,my=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gy=`#ifdef USE_BATCHING
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
#endif`,_y=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Sy=`#ifdef USE_IRIDESCENCE
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
#endif`,by=`#ifdef USE_BUMPMAP
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
#endif`,My=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,wy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ey=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ty=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ay=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Cy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ry=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Iy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Py=`#define PI 3.141592653589793
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
} // validated`,Ly=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Dy=`vec3 transformedNormal = objectNormal;
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
#endif`,Ny=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Uy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Oy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,By="gl_FragColor = linearToOutputTexel( gl_FragColor );",ky=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$y=`#ifdef USE_ENVMAP
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
#endif`,zy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Vy=`#ifdef USE_ENVMAP
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
#endif`,Hy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gy=`#ifdef USE_ENVMAP
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
#endif`,Wy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jy=`#ifdef USE_GRADIENTMAP
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
}`,Zy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ky=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qy=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,tS=`#ifdef USE_ENVMAP
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
#endif`,eS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,iS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rS=`PhysicalMaterial material;
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
#endif`,aS=`uniform sampler2D dfgLUT;
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
}`,oS=`
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
#endif`,lS=`#if defined( RE_IndirectDiffuse )
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
#endif`,cS=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,uS=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,hS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,mS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_S=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xS=`#if defined( USE_POINTS_UV )
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
#endif`,vS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,SS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,MS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wS=`#ifdef USE_MORPHTARGETS
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
#endif`,ES=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,TS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,AS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,CS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,RS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,IS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,PS=`#ifdef USE_NORMALMAP
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
#endif`,LS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,DS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,NS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,US=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,OS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,FS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,BS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$S=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,VS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,HS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,GS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,WS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,XS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,qS=`float getShadowMask() {
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
}`,YS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,JS=`#ifdef USE_SKINNING
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
#endif`,ZS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jS=`#ifdef USE_SKINNING
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
#endif`,KS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,QS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,eb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,nb=`#ifdef USE_TRANSMISSION
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
#endif`,ib=`#ifdef USE_TRANSMISSION
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
#endif`,sb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ab=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ob=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,lb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cb=`uniform sampler2D t2D;
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
}`,ub=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,db=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pb=`#include <common>
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
}`,mb=`#if DEPTH_PACKING == 3200
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
}`,gb=`#define DISTANCE
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
}`,_b=`#define DISTANCE
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
}`,xb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yb=`uniform float scale;
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
}`,Sb=`uniform vec3 diffuse;
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
}`,bb=`#include <common>
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
}`,Mb=`uniform vec3 diffuse;
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
}`,wb=`#define LAMBERT
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
}`,Eb=`#define LAMBERT
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
}`,Tb=`#define MATCAP
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
}`,Ab=`#define MATCAP
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
}`,Cb=`#define NORMAL
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
}`,Rb=`#define NORMAL
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
}`,Ib=`#define PHONG
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
}`,Pb=`#define PHONG
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
}`,Lb=`#define STANDARD
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
}`,Db=`#define STANDARD
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
}`,Nb=`#define TOON
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
}`,Ub=`#define TOON
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
}`,Ob=`uniform float size;
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
}`,Fb=`uniform vec3 diffuse;
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
}`,Bb=`#include <common>
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
}`,kb=`uniform vec3 color;
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
}`,$b=`uniform float rotation;
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
}`,zb=`uniform vec3 diffuse;
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
}`,ke={alphahash_fragment:ly,alphahash_pars_fragment:cy,alphamap_fragment:uy,alphamap_pars_fragment:hy,alphatest_fragment:dy,alphatest_pars_fragment:fy,aomap_fragment:py,aomap_pars_fragment:my,batching_pars_vertex:gy,batching_vertex:_y,begin_vertex:xy,beginnormal_vertex:vy,bsdfs:yy,iridescence_fragment:Sy,bumpmap_pars_fragment:by,clipping_planes_fragment:My,clipping_planes_pars_fragment:wy,clipping_planes_pars_vertex:Ey,clipping_planes_vertex:Ty,color_fragment:Ay,color_pars_fragment:Cy,color_pars_vertex:Ry,color_vertex:Iy,common:Py,cube_uv_reflection_fragment:Ly,defaultnormal_vertex:Dy,displacementmap_pars_vertex:Ny,displacementmap_vertex:Uy,emissivemap_fragment:Oy,emissivemap_pars_fragment:Fy,colorspace_fragment:By,colorspace_pars_fragment:ky,envmap_fragment:$y,envmap_common_pars_fragment:zy,envmap_pars_fragment:Vy,envmap_pars_vertex:Hy,envmap_physical_pars_fragment:tS,envmap_vertex:Gy,fog_vertex:Wy,fog_pars_vertex:Xy,fog_fragment:qy,fog_pars_fragment:Yy,gradientmap_pars_fragment:Jy,lightmap_pars_fragment:Zy,lights_lambert_fragment:jy,lights_lambert_pars_fragment:Ky,lights_pars_begin:Qy,lights_toon_fragment:eS,lights_toon_pars_fragment:nS,lights_phong_fragment:iS,lights_phong_pars_fragment:sS,lights_physical_fragment:rS,lights_physical_pars_fragment:aS,lights_fragment_begin:oS,lights_fragment_maps:lS,lights_fragment_end:cS,lightprobes_pars_fragment:uS,logdepthbuf_fragment:hS,logdepthbuf_pars_fragment:dS,logdepthbuf_pars_vertex:fS,logdepthbuf_vertex:pS,map_fragment:mS,map_pars_fragment:gS,map_particle_fragment:_S,map_particle_pars_fragment:xS,metalnessmap_fragment:vS,metalnessmap_pars_fragment:yS,morphinstance_vertex:SS,morphcolor_vertex:bS,morphnormal_vertex:MS,morphtarget_pars_vertex:wS,morphtarget_vertex:ES,normal_fragment_begin:TS,normal_fragment_maps:AS,normal_pars_fragment:CS,normal_pars_vertex:RS,normal_vertex:IS,normalmap_pars_fragment:PS,clearcoat_normal_fragment_begin:LS,clearcoat_normal_fragment_maps:DS,clearcoat_pars_fragment:NS,iridescence_pars_fragment:US,opaque_fragment:OS,packing:FS,premultiplied_alpha_fragment:BS,project_vertex:kS,dithering_fragment:$S,dithering_pars_fragment:zS,roughnessmap_fragment:VS,roughnessmap_pars_fragment:HS,shadowmap_pars_fragment:GS,shadowmap_pars_vertex:WS,shadowmap_vertex:XS,shadowmask_pars_fragment:qS,skinbase_vertex:YS,skinning_pars_vertex:JS,skinning_vertex:ZS,skinnormal_vertex:jS,specularmap_fragment:KS,specularmap_pars_fragment:QS,tonemapping_fragment:tb,tonemapping_pars_fragment:eb,transmission_fragment:nb,transmission_pars_fragment:ib,uv_pars_fragment:sb,uv_pars_vertex:rb,uv_vertex:ab,worldpos_vertex:ob,background_vert:lb,background_frag:cb,backgroundCube_vert:ub,backgroundCube_frag:hb,cube_vert:db,cube_frag:fb,depth_vert:pb,depth_frag:mb,distance_vert:gb,distance_frag:_b,equirect_vert:xb,equirect_frag:vb,linedashed_vert:yb,linedashed_frag:Sb,meshbasic_vert:bb,meshbasic_frag:Mb,meshlambert_vert:wb,meshlambert_frag:Eb,meshmatcap_vert:Tb,meshmatcap_frag:Ab,meshnormal_vert:Cb,meshnormal_frag:Rb,meshphong_vert:Ib,meshphong_frag:Pb,meshphysical_vert:Lb,meshphysical_frag:Db,meshtoon_vert:Nb,meshtoon_frag:Ub,points_vert:Ob,points_frag:Fb,shadow_vert:Bb,shadow_frag:kb,sprite_vert:$b,sprite_frag:zb},qt={common:{diffuse:{value:new ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Le}},envmap:{envMap:{value:null},envMapRotation:{value:new Le},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Le},normalScale:{value:new Wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new j},probesMax:{value:new j},probesResolution:{value:new j}},points:{diffuse:{value:new ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0},uvTransform:{value:new Le}},sprite:{diffuse:{value:new ye(16777215)},opacity:{value:1},center:{value:new Wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}}},hi={basic:{uniforms:ei([qt.common,qt.specularmap,qt.envmap,qt.aomap,qt.lightmap,qt.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:ei([qt.common,qt.specularmap,qt.envmap,qt.aomap,qt.lightmap,qt.emissivemap,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.fog,qt.lights,{emissive:{value:new ye(0)},envMapIntensity:{value:1}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:ei([qt.common,qt.specularmap,qt.envmap,qt.aomap,qt.lightmap,qt.emissivemap,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.fog,qt.lights,{emissive:{value:new ye(0)},specular:{value:new ye(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:ei([qt.common,qt.envmap,qt.aomap,qt.lightmap,qt.emissivemap,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.roughnessmap,qt.metalnessmap,qt.fog,qt.lights,{emissive:{value:new ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:ei([qt.common,qt.aomap,qt.lightmap,qt.emissivemap,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.gradientmap,qt.fog,qt.lights,{emissive:{value:new ye(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:ei([qt.common,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:ei([qt.points,qt.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:ei([qt.common,qt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:ei([qt.common,qt.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:ei([qt.common,qt.bumpmap,qt.normalmap,qt.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:ei([qt.sprite,qt.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Le}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distance:{uniforms:ei([qt.common,qt.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distance_vert,fragmentShader:ke.distance_frag},shadow:{uniforms:ei([qt.lights,qt.fog,{color:{value:new ye(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};hi.physical={uniforms:ei([hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Le},clearcoatNormalScale:{value:new Wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Le},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Le},sheen:{value:0},sheenColor:{value:new ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Le},transmissionSamplerSize:{value:new Wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Le},attenuationDistance:{value:0},attenuationColor:{value:new ye(0)},specularColor:{value:new ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Le},anisotropyVector:{value:new Wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Le}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};var Mh={r:0,b:0,g:0},Vb=new Ze,$g=new Le;$g.set(-1,0,0,0,1,0,0,0,1);function Hb(i,t,e,n,s,r){let o=new ye(0),l=s===!0?0:1,u,d,f=null,b=0,g=null;function M(z){let H=z.isScene===!0?z.background:null;if(H&&H.isTexture){let D=z.backgroundBlurriness>0;H=t.get(H,D)}return H}function w(z){let H=!1,D=M(z);D===null?S(o,l):D&&D.isColor&&(S(D,1),H=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?e.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||H)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function N(z,H){let D=M(H);D&&(D.isCubeTexture||D.mapping===El)?(d===void 0&&(d=new Bn(new Fa(1,1,1),new kn({name:"BackgroundCubeMaterial",uniforms:zr(hi.backgroundCube.uniforms),vertexShader:hi.backgroundCube.vertexShader,fragmentShader:hi.backgroundCube.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(T,k,Y){this.matrixWorld.copyPosition(Y.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(d)),d.material.uniforms.envMap.value=D,d.material.uniforms.backgroundBlurriness.value=H.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=H.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Vb.makeRotationFromEuler(H.backgroundRotation)).transpose(),D.isCubeTexture&&D.isRenderTargetTexture===!1&&d.material.uniforms.backgroundRotation.value.premultiply($g),d.material.toneMapped=Ye.getTransfer(D.colorSpace)!==an,(f!==D||b!==D.version||g!==i.toneMapping)&&(d.material.needsUpdate=!0,f=D,b=D.version,g=i.toneMapping),d.layers.enableAll(),z.unshift(d,d.geometry,d.material,0,0,null)):D&&D.isTexture&&(u===void 0&&(u=new Bn(new fl(2,2),new kn({name:"BackgroundMaterial",uniforms:zr(hi.background.uniforms),vertexShader:hi.background.vertexShader,fragmentShader:hi.background.fragmentShader,side:lr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(u)),u.material.uniforms.t2D.value=D,u.material.uniforms.backgroundIntensity.value=H.backgroundIntensity,u.material.toneMapped=Ye.getTransfer(D.colorSpace)!==an,D.matrixAutoUpdate===!0&&D.updateMatrix(),u.material.uniforms.uvTransform.value.copy(D.matrix),(f!==D||b!==D.version||g!==i.toneMapping)&&(u.material.needsUpdate=!0,f=D,b=D.version,g=i.toneMapping),u.layers.enableAll(),z.unshift(u,u.geometry,u.material,0,0,null))}function S(z,H){z.getRGB(Mh,Hf(i)),e.buffers.color.setClear(Mh.r,Mh.g,Mh.b,H,r)}function m(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return o},setClearColor:function(z,H=1){o.set(z),l=H,S(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(z){l=z,S(o,l)},render:w,addToRenderList:N,dispose:m}}function Gb(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=g(null),r=s,o=!1;function l(Z,ot,ht,tt,st){let pt=!1,_t=b(Z,tt,ht,ot);r!==_t&&(r=_t,d(r.object)),pt=M(Z,tt,ht,st),pt&&w(Z,tt,ht,st),st!==null&&t.update(st,i.ELEMENT_ARRAY_BUFFER),(pt||o)&&(o=!1,D(Z,ot,ht,tt),st!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(st).buffer))}function u(){return i.createVertexArray()}function d(Z){return i.bindVertexArray(Z)}function f(Z){return i.deleteVertexArray(Z)}function b(Z,ot,ht,tt){let st=tt.wireframe===!0,pt=n[ot.id];pt===void 0&&(pt={},n[ot.id]=pt);let _t=Z.isInstancedMesh===!0?Z.id:0,Ct=pt[_t];Ct===void 0&&(Ct={},pt[_t]=Ct);let xt=Ct[ht.id];xt===void 0&&(xt={},Ct[ht.id]=xt);let wt=xt[st];return wt===void 0&&(wt=g(u()),xt[st]=wt),wt}function g(Z){let ot=[],ht=[],tt=[];for(let st=0;st<e;st++)ot[st]=0,ht[st]=0,tt[st]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ot,enabledAttributes:ht,attributeDivisors:tt,object:Z,attributes:{},index:null}}function M(Z,ot,ht,tt){let st=r.attributes,pt=ot.attributes,_t=0,Ct=ht.getAttributes();for(let xt in Ct)if(Ct[xt].location>=0){let bt=st[xt],zt=pt[xt];if(zt===void 0&&(xt==="instanceMatrix"&&Z.instanceMatrix&&(zt=Z.instanceMatrix),xt==="instanceColor"&&Z.instanceColor&&(zt=Z.instanceColor)),bt===void 0||bt.attribute!==zt||zt&&bt.data!==zt.data)return!0;_t++}return r.attributesNum!==_t||r.index!==tt}function w(Z,ot,ht,tt){let st={},pt=ot.attributes,_t=0,Ct=ht.getAttributes();for(let xt in Ct)if(Ct[xt].location>=0){let bt=pt[xt];bt===void 0&&(xt==="instanceMatrix"&&Z.instanceMatrix&&(bt=Z.instanceMatrix),xt==="instanceColor"&&Z.instanceColor&&(bt=Z.instanceColor));let zt={};zt.attribute=bt,bt&&bt.data&&(zt.data=bt.data),st[xt]=zt,_t++}r.attributes=st,r.attributesNum=_t,r.index=tt}function N(){let Z=r.newAttributes;for(let ot=0,ht=Z.length;ot<ht;ot++)Z[ot]=0}function S(Z){m(Z,0)}function m(Z,ot){let ht=r.newAttributes,tt=r.enabledAttributes,st=r.attributeDivisors;ht[Z]=1,tt[Z]===0&&(i.enableVertexAttribArray(Z),tt[Z]=1),st[Z]!==ot&&(i.vertexAttribDivisor(Z,ot),st[Z]=ot)}function z(){let Z=r.newAttributes,ot=r.enabledAttributes;for(let ht=0,tt=ot.length;ht<tt;ht++)ot[ht]!==Z[ht]&&(i.disableVertexAttribArray(ht),ot[ht]=0)}function H(Z,ot,ht,tt,st,pt,_t){_t===!0?i.vertexAttribIPointer(Z,ot,ht,st,pt):i.vertexAttribPointer(Z,ot,ht,tt,st,pt)}function D(Z,ot,ht,tt){N();let st=tt.attributes,pt=ht.getAttributes(),_t=ot.defaultAttributeValues;for(let Ct in pt){let xt=pt[Ct];if(xt.location>=0){let wt=st[Ct];if(wt===void 0&&(Ct==="instanceMatrix"&&Z.instanceMatrix&&(wt=Z.instanceMatrix),Ct==="instanceColor"&&Z.instanceColor&&(wt=Z.instanceColor)),wt!==void 0){let bt=wt.normalized,zt=wt.itemSize,ne=t.get(wt);if(ne===void 0)continue;let je=ne.buffer,Oe=ne.type,We=ne.bytesPerElement,vt=Oe===i.INT||Oe===i.UNSIGNED_INT||wt.gpuType===Fu;if(wt.isInterleavedBufferAttribute){let yt=wt.data,Lt=yt.stride,de=wt.offset;if(yt.isInstancedInterleavedBuffer){for(let Kt=0;Kt<xt.locationSize;Kt++)m(xt.location+Kt,yt.meshPerAttribute);Z.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let Kt=0;Kt<xt.locationSize;Kt++)S(xt.location+Kt);i.bindBuffer(i.ARRAY_BUFFER,je);for(let Kt=0;Kt<xt.locationSize;Kt++)H(xt.location+Kt,zt/xt.locationSize,Oe,bt,Lt*We,(de+zt/xt.locationSize*Kt)*We,vt)}else{if(wt.isInstancedBufferAttribute){for(let yt=0;yt<xt.locationSize;yt++)m(xt.location+yt,wt.meshPerAttribute);Z.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=wt.meshPerAttribute*wt.count)}else for(let yt=0;yt<xt.locationSize;yt++)S(xt.location+yt);i.bindBuffer(i.ARRAY_BUFFER,je);for(let yt=0;yt<xt.locationSize;yt++)H(xt.location+yt,zt/xt.locationSize,Oe,bt,zt*We,zt/xt.locationSize*yt*We,vt)}}else if(_t!==void 0){let bt=_t[Ct];if(bt!==void 0)switch(bt.length){case 2:i.vertexAttrib2fv(xt.location,bt);break;case 3:i.vertexAttrib3fv(xt.location,bt);break;case 4:i.vertexAttrib4fv(xt.location,bt);break;default:i.vertexAttrib1fv(xt.location,bt)}}}}z()}function T(){B();for(let Z in n){let ot=n[Z];for(let ht in ot){let tt=ot[ht];for(let st in tt){let pt=tt[st];for(let _t in pt)f(pt[_t].object),delete pt[_t];delete tt[st]}}delete n[Z]}}function k(Z){if(n[Z.id]===void 0)return;let ot=n[Z.id];for(let ht in ot){let tt=ot[ht];for(let st in tt){let pt=tt[st];for(let _t in pt)f(pt[_t].object),delete pt[_t];delete tt[st]}}delete n[Z.id]}function Y(Z){for(let ot in n){let ht=n[ot];for(let tt in ht){let st=ht[tt];if(st[Z.id]===void 0)continue;let pt=st[Z.id];for(let _t in pt)f(pt[_t].object),delete pt[_t];delete st[Z.id]}}}function I(Z){for(let ot in n){let ht=n[ot],tt=Z.isInstancedMesh===!0?Z.id:0,st=ht[tt];if(st!==void 0){for(let pt in st){let _t=st[pt];for(let Ct in _t)f(_t[Ct].object),delete _t[Ct];delete st[pt]}delete ht[tt],Object.keys(ht).length===0&&delete n[ot]}}}function B(){q(),o=!0,r!==s&&(r=s,d(r.object))}function q(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:l,reset:B,resetDefaultState:q,dispose:T,releaseStatesOfGeometry:k,releaseStatesOfObject:I,releaseStatesOfProgram:Y,initAttributes:N,enableAttribute:S,disableUnusedAttributes:z}}function Wb(i,t,e){let n;function s(u){n=u}function r(u,d){i.drawArrays(n,u,d),e.update(d,n,1)}function o(u,d,f){f!==0&&(i.drawArraysInstanced(n,u,d,f),e.update(d,n,f))}function l(u,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,d,0,f);let g=0;for(let M=0;M<f;M++)g+=d[M];e.update(g,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=l}function Xb(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let Y=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(Y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(Y){return!(Y!==ki&&n.convert(Y)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(Y){let I=Y===Qi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(Y!==Si&&Y!==Bi&&!I&&n.convert(Y)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function u(Y){if(Y==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";Y="mediump"}return Y==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=e.precision!==void 0?e.precision:"highp",f=u(d);f!==d&&(Me("WebGLRenderer:",d,"not supported, using",f,"instead."),d=f);let b=e.logarithmicDepthBuffer===!0,g=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&g===!1&&Me("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let M=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),w=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),N=i.getParameter(i.MAX_TEXTURE_SIZE),S=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),z=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),H=i.getParameter(i.MAX_VARYING_VECTORS),D=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),k=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:u,textureFormatReadable:o,textureTypeReadable:l,precision:d,logarithmicDepthBuffer:b,reversedDepthBuffer:g,maxTextures:M,maxVertexTextures:w,maxTextureSize:N,maxCubemapSize:S,maxAttributes:m,maxVertexUniforms:z,maxVaryings:H,maxFragmentUniforms:D,maxSamples:T,samples:k}}function qb(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Xi,l=new Le,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(b,g){let M=b.length!==0||g||n!==0||s;return s=g,n=b.length,M},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(b,g){e=f(b,g,0)},this.setState=function(b,g,M){let w=b.clippingPlanes,N=b.clipIntersection,S=b.clipShadows,m=i.get(b);if(!s||w===null||w.length===0||r&&!S)r?f(null):d();else{let z=r?0:n,H=z*4,D=m.clippingState||null;u.value=D,D=f(w,g,H,M);for(let T=0;T!==H;++T)D[T]=e[T];m.clippingState=D,this.numIntersection=N?this.numPlanes:0,this.numPlanes+=z}};function d(){u.value!==e&&(u.value=e,u.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function f(b,g,M,w){let N=b!==null?b.length:0,S=null;if(N!==0){if(S=u.value,w!==!0||S===null){let m=M+N*4,z=g.matrixWorldInverse;l.getNormalMatrix(z),(S===null||S.length<m)&&(S=new Float32Array(m));for(let H=0,D=M;H!==N;++H,D+=4)o.copy(b[H]).applyMatrix4(z,l),o.normal.toArray(S,D),S[D+3]=o.constant}u.value=S,u.needsUpdate=!0}return t.numPlanes=N,t.numIntersection=0,S}}var qa=4,Yb=6,Jb=20,Zb=256,Nl=new za,xg=new ye,qf=null,Yf=0,Jf=0,Zf=!1,jb=new j,Vr=new j,Eh=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:l=jb}=r;qf=this._renderer.getRenderTarget(),Yf=this._renderer.getActiveCubeFace(),Jf=this._renderer.getActiveMipmapLevel(),Zf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(t,n,s,u,l),e>0&&this._blur(u,0,0,e),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(qf,Yf,Jf),this._renderer.xr.enabled=Zf,t.scissorTest=!1,Xa(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===cr||t.mapping===$r?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),qf=this._renderer.getRenderTarget(),Yf=this._renderer.getActiveCubeFace(),Jf=this._renderer.getActiveMipmapLevel(),Zf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Hn,minFilter:Hn,generateMipmaps:!1,type:Qi,format:ki,colorSpace:Go,depthBuffer:!1},s=vg(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vg(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Kb(r)),this._blurMaterial=tM(r,t,e),this._ggxMaterial=Qb(r,t,e)}return s}_compileMaterial(t){let e=new Bn(new En,t);this._renderer.compile(e,Nl)}_sceneToCubeUV(t,e,n,s,r){let u=new ti(90,1,e,n),d=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],b=this._renderer,g=b.autoClear,M=b.toneMapping;b.getClearColor(xg),b.toneMapping=ji,b.autoClear=!1,b.state.buffers.depth.getReversed()&&(b.setRenderTarget(s),b.clearDepth(),b.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Bn(new Fa,new Nr({name:"PMREM.Background",side:ui,depthWrite:!1,depthTest:!1})));let N=this._backgroundBox,S=N.material,m=!1,z=t.background;z?z.isColor&&(S.color.copy(z),t.background=null,m=!0):(S.color.copy(xg),m=!0);for(let H=0;H<6;H++){let D=H%3;D===0?(u.up.set(0,d[H],0),u.position.set(r.x,r.y,r.z),u.lookAt(r.x+f[H],r.y,r.z)):D===1?(u.up.set(0,0,d[H]),u.position.set(r.x,r.y,r.z),u.lookAt(r.x,r.y+f[H],r.z)):(u.up.set(0,d[H],0),u.position.set(r.x,r.y,r.z),u.lookAt(r.x,r.y,r.z+f[H]));let T=this._cubeSize;Xa(s,D*T,H>2?T:0,T,T),b.setRenderTarget(s),m&&b.render(N,u),b.render(t,u)}b.toneMapping=M,b.autoClear=g,t.background=z}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===cr||t.mapping===$r;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sg()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yg());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let l=r.uniforms;l.envMap.value=t;let u=this._cubeSize;Xa(e,0,0,3*u,2*u),n.setRenderTarget(e),n.render(o,Nl)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,l=this._lodMeshes[n];l.material=o;let u=o.uniforms,d=n/(this._lodMeshes.length-1),f=e/(this._lodMeshes.length-1),b=Math.sqrt(d*d-f*f),g=d*1.25,M=b*g,{_lodMax:w}=this,N=this._sizeLods[n],S=3*N*(n>w-qa?n-w+qa:0),m=4*(this._cubeSize-N);u.envMap.value=t.texture,u.roughness.value=M,u.mipInt.value=w-e,Xa(r,S,m,3*N,2*N),s.setRenderTarget(r),s.render(l,Nl),u.envMap.value=r.texture,u.roughness.value=0,u.mipInt.value=w-n,Xa(t,S,m,3*N,2*N),s.setRenderTarget(t),s.render(l,Nl)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,s,r){let o=this._renderer,l=this._blurMaterial,u=this._lodMeshes[s];u.material=l;let d=l.uniforms;d.envMap.value=t.texture,d.sigma.value=r,d.mipInt.value=this._lodMax-n;let f=this._sizeLods[s],b=3*f*(s>this._lodMax-qa?s-this._lodMax+qa:0),g=4*(this._cubeSize-f);Xa(e,b,g,3*f,2*f),o.setRenderTarget(e),o.render(u,Nl)}};function Kb(i){let t=[],e=[],n=i,s=i-qa+1+Yb;for(let r=0;r<s;r++){let o=Math.pow(2,n);t.push(o);let l=1/(o-2),u=-l,d=1+l,f=[u,u,d,u,d,d,u,u,d,d,u,d],b=6,g=6,M=3,w=new Float32Array(M*g*b),N=new Float32Array(M*g*b);for(let m=0;m<b;m++){let z=m%3*2/3-1,H=m>2?0:-1,D=[z,H,0,z+2/3,H,0,z+2/3,H+1,0,z,H,0,z+2/3,H+1,0,z,H+1,0];w.set(D,M*g*m);for(let T=0;T<g;T++){let k=f[T*2]*2-1,Y=f[T*2+1]*2-1;m===0?Vr.set(1,Y,k):m===1?Vr.set(-k,1,-Y):m===2?Vr.set(-k,Y,1):m===3?Vr.set(-1,Y,-k):m===4?Vr.set(-k,-1,Y):Vr.set(k,Y,-1),Vr.toArray(N,(m*g+T)*M)}}let S=new En;S.setAttribute("position",new hn(w,M)),S.setAttribute("outputDirection",new hn(N,M)),e.push(new Bn(S,null)),n>qa&&n--}return{lodMeshes:e,sizeLods:t}}function vg(i,t,e){let n=new vi(i,t,e);return n.texture.mapping=El,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Xa(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Qb(i,t,e){return new kn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Zb,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ch(),fragmentShader:`

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
		`,blending:ps,depthTest:!1,depthWrite:!1})}function tM(i,t,e){return new kn({name:"SphericalGaussianBlur",defines:{SAMPLES:Jb,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ch(),fragmentShader:`

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
		`,blending:ps,depthTest:!1,depthWrite:!1})}function yg(){return new kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ch(),fragmentShader:`

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
		`,blending:ps,depthTest:!1,depthWrite:!1})}function Sg(){return new kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ch(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ps,depthTest:!1,depthWrite:!1})}function Ch(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Th=class extends vi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new nl(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Fa(5,5,5),r=new kn({name:"CubemapFromEquirect",uniforms:zr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ui,blending:ps});r.uniforms.tEquirect.value=e;let o=new Bn(s,r),l=e.minFilter;return e.minFilter===ur&&(e.minFilter=Hn),new Pu(1,10,this).update(t,o),e.minFilter=l,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}};function eM(i){let t=new WeakMap,e=new WeakMap,n=null;function s(g,M=!1){return g==null?null:M?o(g):r(g)}function r(g){if(g&&g.isTexture){let M=g.mapping;if(M===Nu||M===Uu)if(t.has(g)){let w=t.get(g).texture;return l(w,g.mapping)}else{let w=g.image;if(w&&w.height>0){let N=new Th(w.height);return N.fromEquirectangularTexture(i,g),t.set(g,N),g.addEventListener("dispose",d),l(N.texture,g.mapping)}else return null}}return g}function o(g){if(g&&g.isTexture){let M=g.mapping,w=M===Nu||M===Uu,N=M===cr||M===$r;if(w||N){let S=e.get(g),m=S!==void 0?S.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==m)return n===null&&(n=new Eh(i)),S=w?n.fromEquirectangular(g,S):n.fromCubemap(g,S),S.texture.pmremVersion=g.pmremVersion,e.set(g,S),S.texture;if(S!==void 0)return S.texture;{let z=g.image;return w&&z&&z.height>0||N&&z&&u(z)?(n===null&&(n=new Eh(i)),S=w?n.fromEquirectangular(g):n.fromCubemap(g),S.texture.pmremVersion=g.pmremVersion,e.set(g,S),g.addEventListener("dispose",f),S.texture):null}}}return g}function l(g,M){return M===Nu?g.mapping=cr:M===Uu&&(g.mapping=$r),g}function u(g){let M=0,w=6;for(let N=0;N<w;N++)g[N]!==void 0&&M++;return M===w}function d(g){let M=g.target;M.removeEventListener("dispose",d);let w=t.get(M);w!==void 0&&(t.delete(M),w.dispose())}function f(g){let M=g.target;M.removeEventListener("dispose",f);let w=e.get(M);w!==void 0&&(e.delete(M),w.dispose())}function b(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:b}}function nM(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Lr("WebGLRenderer: "+n+" extension not supported."),s}}}function iM(i,t,e,n){let s={},r=new WeakMap;function o(b){let g=b.target;g.index!==null&&t.remove(g.index);for(let w in g.attributes)t.remove(g.attributes[w]);g.removeEventListener("dispose",o),delete s[g.id];let M=r.get(g);M&&(t.remove(M),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function l(b,g){return s[g.id]===!0||(g.addEventListener("dispose",o),s[g.id]=!0,e.memory.geometries++),g}function u(b){let g=b.attributes;for(let M in g)t.update(g[M],i.ARRAY_BUFFER)}function d(b){let g=[],M=b.index,w=b.attributes.position,N=0;if(w===void 0)return;if(M!==null){let z=M.array;N=M.version;for(let H=0,D=z.length;H<D;H+=3){let T=z[H+0],k=z[H+1],Y=z[H+2];g.push(T,k,k,Y,Y,T)}}else{let z=w.array;N=w.version;for(let H=0,D=z.length/3-1;H<D;H+=3){let T=H+0,k=H+1,Y=H+2;g.push(T,k,k,Y,Y,T)}}let S=new(w.count>=65535?jo:Zo)(g,1);S.version=N;let m=r.get(b);m&&t.remove(m),r.set(b,S)}function f(b){let g=r.get(b);if(g){let M=b.index;M!==null&&g.version<M.version&&d(b)}else d(b);return r.get(b)}return{get:l,update:u,getWireframeAttribute:f}}function sM(i,t,e){let n;function s(b){n=b}let r,o;function l(b){r=b.type,o=b.bytesPerElement}function u(b,g){i.drawElements(n,g,r,b*o),e.update(g,n,1)}function d(b,g,M){M!==0&&(i.drawElementsInstanced(n,g,r,b*o,M),e.update(g,n,M))}function f(b,g,M){if(M===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,g,0,r,b,0,M);let N=0;for(let S=0;S<M;S++)N+=g[S];e.update(N,n,1)}this.setMode=s,this.setIndex=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=f}function rM(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,l){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=l*(r/3);break;case i.LINES:e.lines+=l*(r/2);break;case i.LINE_STRIP:e.lines+=l*(r-1);break;case i.LINE_LOOP:e.lines+=l*r;break;case i.POINTS:e.points+=l*r;break;default:we("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function aM(i,t,e){let n=new WeakMap,s=new on;function r(o,l,u){let d=o.morphTargetInfluences,f=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,b=f!==void 0?f.length:0,g=n.get(l);if(g===void 0||g.count!==b){let B=function(){Y.dispose(),n.delete(l),l.removeEventListener("dispose",B)};g!==void 0&&g.texture.dispose();let M=l.morphAttributes.position!==void 0,w=l.morphAttributes.normal!==void 0,N=l.morphAttributes.color!==void 0,S=l.morphAttributes.position||[],m=l.morphAttributes.normal||[],z=l.morphAttributes.color||[],H=0;M===!0&&(H=1),w===!0&&(H=2),N===!0&&(H=3);let D=l.attributes.position.count*H,T=1;D>t.maxTextureSize&&(T=Math.ceil(D/t.maxTextureSize),D=t.maxTextureSize);let k=new Float32Array(D*T*4*b),Y=new Yo(k,D,T,b);Y.type=Bi,Y.needsUpdate=!0;let I=H*4;for(let q=0;q<b;q++){let Z=S[q],ot=m[q],ht=z[q],tt=D*T*4*q;for(let st=0;st<Z.count;st++){let pt=st*I;M===!0&&(s.fromBufferAttribute(Z,st),k[tt+pt+0]=s.x,k[tt+pt+1]=s.y,k[tt+pt+2]=s.z,k[tt+pt+3]=0),w===!0&&(s.fromBufferAttribute(ot,st),k[tt+pt+4]=s.x,k[tt+pt+5]=s.y,k[tt+pt+6]=s.z,k[tt+pt+7]=0),N===!0&&(s.fromBufferAttribute(ht,st),k[tt+pt+8]=s.x,k[tt+pt+9]=s.y,k[tt+pt+10]=s.z,k[tt+pt+11]=ht.itemSize===4?s.w:1)}}g={count:b,texture:Y,size:new Wt(D,T)},n.set(l,g),l.addEventListener("dispose",B)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)u.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let M=0;for(let N=0;N<d.length;N++)M+=d[N];let w=l.morphTargetsRelative?1:1-M;u.getUniforms().setValue(i,"morphTargetBaseInfluence",w),u.getUniforms().setValue(i,"morphTargetInfluences",d)}u.getUniforms().setValue(i,"morphTargetsTexture",g.texture,e),u.getUniforms().setValue(i,"morphTargetsTextureSize",g.size)}return{update:r}}function oM(i,t,e,n,s){let r=new WeakMap;function o(d){let f=s.render.frame,b=d.geometry,g=t.get(d,b);if(r.get(g)!==f&&(t.update(g),r.set(g,f)),d.isInstancedMesh&&(d.hasEventListener("dispose",u)===!1&&d.addEventListener("dispose",u),r.get(d)!==f&&(e.update(d.instanceMatrix,i.ARRAY_BUFFER),d.instanceColor!==null&&e.update(d.instanceColor,i.ARRAY_BUFFER),r.set(d,f))),d.isSkinnedMesh){let M=d.skeleton;r.get(M)!==f&&(M.update(),r.set(M,f))}return g}function l(){r=new WeakMap}function u(d){let f=d.target;f.removeEventListener("dispose",u),n.releaseStatesOfObject(f),e.remove(f.instanceMatrix),f.instanceColor!==null&&e.remove(f.instanceColor)}return{update:o,dispose:l}}var lM={[wf]:"LINEAR_TONE_MAPPING",[Ef]:"REINHARD_TONE_MAPPING",[Tf]:"CINEON_TONE_MAPPING",[Af]:"ACES_FILMIC_TONE_MAPPING",[Rf]:"AGX_TONE_MAPPING",[If]:"NEUTRAL_TONE_MAPPING",[Cf]:"CUSTOM_TONE_MAPPING"};function cM(i,t,e,n,s,r){let o=new vi(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),l=null,u=null,d=new En;d.setAttribute("position",new wn([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new wn([0,2,0,0,2,0],2));let f=new _u({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),b=new Bn(d,f),g=new za(-1,1,1,-1,0,1),M=null,w=null,N=!1,S,m=null,z=[],H=!1;this.setSize=function(D,T){o.setSize(D,T),l!==null&&l.setSize(D,T),u!==null&&u.setSize(D,T);for(let k=0;k<z.length;k++){let Y=z[k];Y.setSize&&Y.setSize(D,T)}},this.setEffects=function(D){z=D,H=z.length>0&&z[0].isRenderPass===!0;let T=o.width,k=o.height;z.length>0&&l===null&&(l=new vi(T,k,{type:Qi,depthBuffer:!1,stencilBuffer:!1}),u=new vi(T,k,{type:Qi,depthBuffer:!1,stencilBuffer:!1}));for(let Y=0;Y<z.length;Y++){let I=z[Y];I.setSize&&I.setSize(T,k)}},this.begin=function(D,T){if(N||D.toneMapping===ji&&z.length===0)return!1;if(m=T,T!==null){let k=T.width,Y=T.height;(o.width!==k||o.height!==Y)&&this.setSize(k,Y)}return H===!1&&D.setRenderTarget(o),S=D.toneMapping,D.toneMapping=ji,!0},this.hasRenderPass=function(){return H},this.end=function(D,T){D.toneMapping=S,N=!0;let k=o,Y=l;for(let I=0;I<z.length;I++){let B=z[I];B.enabled!==!1&&(B.render(D,Y,k,T),B.needsSwap!==!1&&(k=Y,Y=Y===l?u:l))}if(M!==D.outputColorSpace||w!==D.toneMapping){M=D.outputColorSpace,w=D.toneMapping,f.defines={},Ye.getTransfer(M)===an&&(f.defines.SRGB_TRANSFER="");let I=lM[w];I&&(f.defines[I]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=k.texture,D.setRenderTarget(m),D.render(b,g),m=null,N=!1},this.isCompositing=function(){return N},this.dispose=function(){o.dispose(),l!==null&&l.dispose(),u!==null&&u.dispose(),d.dispose(),f.dispose()}}var zg=new xi,Qf=new ir(1,1),Vg=new Yo,Hg=new su,Gg=new nl,bg=[],Mg=[],wg=new Float32Array(16),Eg=new Float32Array(9),Tg=new Float32Array(4);function Ja(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=bg[s];if(r===void 0&&(r=new Float32Array(s),bg[s]=r),t!==0){n.toArray(r,0);for(let o=1,l=0;o!==t;++o)l+=e,i[o].toArray(r,l)}return r}function Pn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ln(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Rh(i,t){let e=Mg[t];e===void 0&&(e=new Int32Array(t),Mg[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function uM(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function hM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pn(e,t))return;i.uniform2fv(this.addr,t),Ln(e,t)}}function dM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Pn(e,t))return;i.uniform3fv(this.addr,t),Ln(e,t)}}function fM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pn(e,t))return;i.uniform4fv(this.addr,t),Ln(e,t)}}function pM(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Pn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ln(e,t)}else{if(Pn(e,n))return;Tg.set(n),i.uniformMatrix2fv(this.addr,!1,Tg),Ln(e,n)}}function mM(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Pn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ln(e,t)}else{if(Pn(e,n))return;Eg.set(n),i.uniformMatrix3fv(this.addr,!1,Eg),Ln(e,n)}}function gM(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Pn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ln(e,t)}else{if(Pn(e,n))return;wg.set(n),i.uniformMatrix4fv(this.addr,!1,wg),Ln(e,n)}}function _M(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function xM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pn(e,t))return;i.uniform2iv(this.addr,t),Ln(e,t)}}function vM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pn(e,t))return;i.uniform3iv(this.addr,t),Ln(e,t)}}function yM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pn(e,t))return;i.uniform4iv(this.addr,t),Ln(e,t)}}function SM(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function bM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pn(e,t))return;i.uniform2uiv(this.addr,t),Ln(e,t)}}function MM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pn(e,t))return;i.uniform3uiv(this.addr,t),Ln(e,t)}}function wM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pn(e,t))return;i.uniform4uiv(this.addr,t),Ln(e,t)}}function EM(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Qf.compareFunction=e.isReversedDepthBuffer()?bh:Sh,r=Qf):r=zg,e.setTexture2D(t||r,s)}function TM(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Hg,s)}function AM(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Gg,s)}function CM(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Vg,s)}function RM(i){switch(i){case 5126:return uM;case 35664:return hM;case 35665:return dM;case 35666:return fM;case 35674:return pM;case 35675:return mM;case 35676:return gM;case 5124:case 35670:return _M;case 35667:case 35671:return xM;case 35668:case 35672:return vM;case 35669:case 35673:return yM;case 5125:return SM;case 36294:return bM;case 36295:return MM;case 36296:return wM;case 35678:case 36198:case 36298:case 36306:case 35682:return EM;case 35679:case 36299:case 36307:return TM;case 35680:case 36300:case 36308:case 36293:return AM;case 36289:case 36303:case 36311:case 36292:return CM}}function IM(i,t){i.uniform1fv(this.addr,t)}function PM(i,t){let e=Ja(t,this.size,2);i.uniform2fv(this.addr,e)}function LM(i,t){let e=Ja(t,this.size,3);i.uniform3fv(this.addr,e)}function DM(i,t){let e=Ja(t,this.size,4);i.uniform4fv(this.addr,e)}function NM(i,t){let e=Ja(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function UM(i,t){let e=Ja(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function OM(i,t){let e=Ja(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function FM(i,t){i.uniform1iv(this.addr,t)}function BM(i,t){i.uniform2iv(this.addr,t)}function kM(i,t){i.uniform3iv(this.addr,t)}function $M(i,t){i.uniform4iv(this.addr,t)}function zM(i,t){i.uniform1uiv(this.addr,t)}function VM(i,t){i.uniform2uiv(this.addr,t)}function HM(i,t){i.uniform3uiv(this.addr,t)}function GM(i,t){i.uniform4uiv(this.addr,t)}function WM(i,t,e){let n=this.cache,s=t.length,r=Rh(e,s);Pn(n,r)||(i.uniform1iv(this.addr,r),Ln(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Qf:o=zg;for(let l=0;l!==s;++l)e.setTexture2D(t[l]||o,r[l])}function XM(i,t,e){let n=this.cache,s=t.length,r=Rh(e,s);Pn(n,r)||(i.uniform1iv(this.addr,r),Ln(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Hg,r[o])}function qM(i,t,e){let n=this.cache,s=t.length,r=Rh(e,s);Pn(n,r)||(i.uniform1iv(this.addr,r),Ln(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Gg,r[o])}function YM(i,t,e){let n=this.cache,s=t.length,r=Rh(e,s);Pn(n,r)||(i.uniform1iv(this.addr,r),Ln(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Vg,r[o])}function JM(i){switch(i){case 5126:return IM;case 35664:return PM;case 35665:return LM;case 35666:return DM;case 35674:return NM;case 35675:return UM;case 35676:return OM;case 5124:case 35670:return FM;case 35667:case 35671:return BM;case 35668:case 35672:return kM;case 35669:case 35673:return $M;case 5125:return zM;case 36294:return VM;case 36295:return HM;case 36296:return GM;case 35678:case 36198:case 36298:case 36306:case 35682:return WM;case 35679:case 36299:case 36307:return XM;case 35680:case 36300:case 36308:case 36293:return qM;case 36289:case 36303:case 36311:case 36292:return YM}}var tp=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=RM(e.type)}},ep=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=JM(e.type)}},np=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let l=s[r];l.setValue(t,e[l.id],n)}}},jf=/(\w+)(\])?(\[|\.)?/g;function Ag(i,t){i.seq.push(t),i.map[t.id]=t}function ZM(i,t,e){let n=i.name,s=n.length;for(jf.lastIndex=0;;){let r=jf.exec(n),o=jf.lastIndex,l=r[1],u=r[2]==="]",d=r[3];if(u&&(l=l|0),d===void 0||d==="["&&o+2===s){Ag(e,d===void 0?new tp(l,i,t):new ep(l,i,t));break}else{let b=e.map[l];b===void 0&&(b=new np(l),Ag(e,b)),e=b}}}var Ya=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let l=t.getActiveUniform(e,o),u=t.getUniformLocation(e,l.name);ZM(l,u,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let l=e[r],u=n[l.id];u.needsUpdate!==!1&&l.setValue(t,u.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Cg(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var jM=37297,KM=0;function QM(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let l=o+1;n.push(`${l===t?">":" "} ${l}: ${e[o]}`)}return n.join(`
`)}var Rg=new Le;function t1(i){Ye._getMatrix(Rg,Ye.workingColorSpace,i);let t=`mat3( ${Rg.elements.map(e=>e.toFixed(4))} )`;switch(Ye.getTransfer(i)){case Wo:return[t,"LinearTransferOETF"];case an:return[t,"sRGBTransferOETF"];default:return Me("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Ig(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let l=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+QM(i.getShaderSource(t),l)}else return r}function e1(i,t){let e=t1(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var n1={[wf]:"Linear",[Ef]:"Reinhard",[Tf]:"Cineon",[Af]:"ACESFilmic",[Rf]:"AgX",[If]:"Neutral",[Cf]:"Custom"};function i1(i,t){let e=n1[t];return e===void 0?(Me("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var wh=new j;function s1(){Ye.getLuminanceCoefficients(wh);let i=wh.x.toFixed(4),t=wh.y.toFixed(4),e=wh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function r1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ol).join(`
`)}function a1(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function o1(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,l=1;r.type===i.FLOAT_MAT2&&(l=2),r.type===i.FLOAT_MAT3&&(l=3),r.type===i.FLOAT_MAT4&&(l=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:l}}return e}function Ol(i){return i!==""}function Pg(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Lg(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var l1=/^[ \t]*#include +<([\w\d./]+)>/gm;function ip(i){return i.replace(l1,u1)}var c1=new Map;function u1(i,t){let e=ke[t];if(e===void 0){let n=c1.get(t);if(n!==void 0)e=ke[n],Me('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return ip(e)}var h1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dg(i){return i.replace(h1,d1)}function d1(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ng(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var f1={[wl]:"SHADOWMAP_TYPE_PCF",[Va]:"SHADOWMAP_TYPE_VSM"};function p1(i){return f1[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var m1={[cr]:"ENVMAP_TYPE_CUBE",[$r]:"ENVMAP_TYPE_CUBE",[El]:"ENVMAP_TYPE_CUBE_UV"};function g1(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":m1[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var _1={[$r]:"ENVMAP_MODE_REFRACTION"};function x1(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":_1[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var v1={[Du]:"ENVMAP_BLENDING_MULTIPLY",[J0]:"ENVMAP_BLENDING_MIX",[Z0]:"ENVMAP_BLENDING_ADD"};function y1(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":v1[i.combine]||"ENVMAP_BLENDING_NONE"}function S1(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function b1(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,l=e.fragmentShader,u=p1(e),d=g1(e),f=x1(e),b=y1(e),g=S1(e),M=r1(e),w=a1(r),N=s.createProgram(),S,m,z=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(S=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w].filter(Ol).join(`
`),S.length>0&&(S+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w].filter(Ol).join(`
`),m.length>0&&(m+=`
`)):(S=[Ng(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+u:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ol).join(`
`),m=[Ng(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.envMap?"#define "+f:"",e.envMap?"#define "+b:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+u:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ji?"#define TONE_MAPPING":"",e.toneMapping!==ji?ke.tonemapping_pars_fragment:"",e.toneMapping!==ji?i1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,e1("linearToOutputTexel",e.outputColorSpace),s1(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ol).join(`
`)),o=ip(o),o=Pg(o,e),o=Lg(o,e),l=ip(l),l=Pg(l,e),l=Lg(l,e),o=Dg(o),l=Dg(l),e.isRawShaderMaterial!==!0&&(z=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,m=["#define varying in",e.glslVersion===kf?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===kf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let H=z+S+o,D=z+m+l,T=Cg(s,s.VERTEX_SHADER,H),k=Cg(s,s.FRAGMENT_SHADER,D);s.attachShader(N,T),s.attachShader(N,k),e.index0AttributeName!==void 0?s.bindAttribLocation(N,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(N,0,"position"),s.linkProgram(N);function Y(Z){if(i.debug.checkShaderErrors){let ot=s.getProgramInfoLog(N)||"",ht=s.getShaderInfoLog(T)||"",tt=s.getShaderInfoLog(k)||"",st=ot.trim(),pt=ht.trim(),_t=tt.trim(),Ct=!0,xt=!0;if(s.getProgramParameter(N,s.LINK_STATUS)===!1)if(Ct=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,N,T,k);else{let wt=Ig(s,T,"vertex"),bt=Ig(s,k,"fragment");we("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(N,s.VALIDATE_STATUS)+`

Material Name: `+Z.name+`
Material Type: `+Z.type+`

Program Info Log: `+st+`
`+wt+`
`+bt)}else st!==""?Me("WebGLProgram: Program Info Log:",st):(pt===""||_t==="")&&(xt=!1);xt&&(Z.diagnostics={runnable:Ct,programLog:st,vertexShader:{log:pt,prefix:S},fragmentShader:{log:_t,prefix:m}})}s.deleteShader(T),s.deleteShader(k),I=new Ya(s,N),B=o1(s,N)}let I;this.getUniforms=function(){return I===void 0&&Y(this),I};let B;this.getAttributes=function(){return B===void 0&&Y(this),B};let q=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return q===!1&&(q=s.getProgramParameter(N,jM)),q},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(N),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=KM++,this.cacheKey=t,this.usedTimes=1,this.program=N,this.vertexShader=T,this.fragmentShader=k,this}var M1=0,sp=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new rp(t),e.set(t,n)),n}},rp=class{constructor(t){this.id=M1++,this.code=t,this.usedTimes=0}};function w1(i){return i===dr||i===Pl||i===Ll}function E1(i,t,e,n,s,r){let o=new Na,l=new sp,u=new Set,d=[],f=new Map,b=n.logarithmicDepthBuffer,g=n.precision,M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(I){return u.add(I),I===0?"uv":`uv${I}`}function N(I,B,q,Z,ot,ht){let tt=Z.fog,st=ot.geometry,pt=I.isMeshStandardMaterial||I.isMeshLambertMaterial||I.isMeshPhongMaterial?Z.environment:null,_t=I.isMeshStandardMaterial||I.isMeshLambertMaterial&&!I.envMap||I.isMeshPhongMaterial&&!I.envMap,Ct=t.get(I.envMap||pt,_t),xt=Ct&&Ct.mapping===El?Ct.image.height:null,wt=M[I.type];I.precision!==null&&(g=n.getMaxPrecision(I.precision),g!==I.precision&&Me("WebGLProgram.getParameters:",I.precision,"not supported, using",g,"instead."));let bt=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,zt=bt!==void 0?bt.length:0,ne=0;st.morphAttributes.position!==void 0&&(ne=1),st.morphAttributes.normal!==void 0&&(ne=2),st.morphAttributes.color!==void 0&&(ne=3);let je,Oe,We,vt;if(wt){let Je=hi[wt];je=Je.vertexShader,Oe=Je.fragmentShader}else{je=I.vertexShader,Oe=I.fragmentShader;let Je=l.getVertexShaderStage(I),ze=l.getFragmentShaderStage(I);l.update(I,Je,ze),We=Je.id,vt=ze.id}let yt=i.getRenderTarget(),Lt=i.state.buffers.depth.getReversed(),de=ot.isInstancedMesh===!0,Kt=ot.isBatchedMesh===!0,ge=!!I.map,ee=!!I.matcap,rt=!!Ct,It=!!I.aoMap,V=!!I.lightMap,Pt=!!I.bumpMap&&I.wireframe===!1,$t=!!I.normalMap,ce=!!I.displacementMap,pe=!!I.emissiveMap,Se=!!I.metalnessMap,Ae=!!I.roughnessMap,X=I.anisotropy>0,Qe=I.clearcoat>0,Fe=I.dispersion>0,F=I.retroreflectivity>0,E=I.iridescence>0,at=I.sheen>0,lt=I.transmission>0,gt=X&&!!I.anisotropyMap,Nt=Qe&&!!I.clearcoatMap,Ht=Qe&&!!I.clearcoatNormalMap,ft=Qe&&!!I.clearcoatRoughnessMap,Mt=E&&!!I.iridescenceMap,kt=E&&!!I.iridescenceThicknessMap,Dt=at&&!!I.sheenColorMap,Zt=at&&!!I.sheenRoughnessMap,Yt=!!I.specularMap,ue=!!I.specularColorMap,xe=!!I.specularIntensityMap,Te=lt&&!!I.transmissionMap,et=lt&&!!I.thicknessMap,Gt=!!I.gradientMap,St=!!I.alphaMap,Jt=I.alphaTest>0,Qt=!!I.alphaHash,At=!!I.extensions,he=ji;I.toneMapped&&(yt===null||yt.isXRRenderTarget===!0)&&(he=i.toneMapping);let le={shaderID:wt,shaderType:I.type,shaderName:I.name,vertexShader:je,fragmentShader:Oe,defines:I.defines,customVertexShaderID:We,customFragmentShaderID:vt,isRawShaderMaterial:I.isRawShaderMaterial===!0,glslVersion:I.glslVersion,precision:g,batching:Kt,batchingColor:Kt&&ot._colorsTexture!==null,instancing:de,instancingColor:de&&ot.instanceColor!==null,instancingMorph:de&&ot.morphTexture!==null,outputColorSpace:yt===null?i.outputColorSpace:yt.isXRRenderTarget===!0?yt.texture.colorSpace:Ye.workingColorSpace,alphaToCoverage:!!I.alphaToCoverage,map:ge,matcap:ee,envMap:rt,envMapMode:rt&&Ct.mapping,envMapCubeUVHeight:xt,aoMap:It,lightMap:V,bumpMap:Pt,normalMap:$t,displacementMap:ce,emissiveMap:pe,normalMapObjectSpace:$t&&I.normalMapType===Q0,normalMapTangentSpace:$t&&I.normalMapType===yh,packedNormalMap:$t&&I.normalMapType===yh&&w1(I.normalMap.format),metalnessMap:Se,roughnessMap:Ae,anisotropy:X,anisotropyMap:gt,clearcoat:Qe,clearcoatMap:Nt,clearcoatNormalMap:Ht,clearcoatRoughnessMap:ft,dispersion:Fe,retroreflection:F,iridescence:E,iridescenceMap:Mt,iridescenceThicknessMap:kt,sheen:at,sheenColorMap:Dt,sheenRoughnessMap:Zt,specularMap:Yt,specularColorMap:ue,specularIntensityMap:xe,transmission:lt,transmissionMap:Te,thicknessMap:et,gradientMap:Gt,opaque:I.transparent===!1&&I.blending===Ha&&I.alphaToCoverage===!1,alphaMap:St,alphaTest:Jt,alphaHash:Qt,combine:I.combine,mapUv:ge&&w(I.map.channel),aoMapUv:It&&w(I.aoMap.channel),lightMapUv:V&&w(I.lightMap.channel),bumpMapUv:Pt&&w(I.bumpMap.channel),normalMapUv:$t&&w(I.normalMap.channel),displacementMapUv:ce&&w(I.displacementMap.channel),emissiveMapUv:pe&&w(I.emissiveMap.channel),metalnessMapUv:Se&&w(I.metalnessMap.channel),roughnessMapUv:Ae&&w(I.roughnessMap.channel),anisotropyMapUv:gt&&w(I.anisotropyMap.channel),clearcoatMapUv:Nt&&w(I.clearcoatMap.channel),clearcoatNormalMapUv:Ht&&w(I.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ft&&w(I.clearcoatRoughnessMap.channel),iridescenceMapUv:Mt&&w(I.iridescenceMap.channel),iridescenceThicknessMapUv:kt&&w(I.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&w(I.sheenColorMap.channel),sheenRoughnessMapUv:Zt&&w(I.sheenRoughnessMap.channel),specularMapUv:Yt&&w(I.specularMap.channel),specularColorMapUv:ue&&w(I.specularColorMap.channel),specularIntensityMapUv:xe&&w(I.specularIntensityMap.channel),transmissionMapUv:Te&&w(I.transmissionMap.channel),thicknessMapUv:et&&w(I.thicknessMap.channel),alphaMapUv:St&&w(I.alphaMap.channel),vertexTangents:!!st.attributes.tangent&&($t||X),vertexNormals:!!st.attributes.normal,vertexColors:I.vertexColors,vertexAlphas:I.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,pointsUvs:ot.isPoints===!0&&!!st.attributes.uv&&(ge||St),fog:!!tt,useFog:I.fog===!0,fogExp2:!!tt&&tt.isFogExp2,flatShading:I.wireframe===!1&&(I.flatShading===!0||st.attributes.normal===void 0&&$t===!1&&(I.isMeshLambertMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isMeshPhysicalMaterial)),sizeAttenuation:I.sizeAttenuation===!0,logarithmicDepthBuffer:b,reversedDepthBuffer:Lt,skinning:ot.isSkinnedMesh===!0,hasPositionAttribute:st.attributes.position!==void 0,morphTargets:st.morphAttributes.position!==void 0,morphNormals:st.morphAttributes.normal!==void 0,morphColors:st.morphAttributes.color!==void 0,morphTargetsCount:zt,morphTextureStride:ne,numSunLights:B.sun.length,numDirLights:B.directional.length,numPointLights:B.point.length,numSpotLights:B.spot.length,numSpotLightMaps:B.spotLightMap.length,numRectAreaLights:B.rectArea.length,numHemiLights:B.hemi.length,numSunLightShadows:B.sunShadowMap.length,numDirLightShadows:B.directionalShadowMap.length,numPointLightShadows:B.pointShadowMap.length,numSpotLightShadows:B.spotShadowMap.length,numSpotLightShadowsWithMaps:B.numSpotLightShadowsWithMaps,numLightProbes:B.numLightProbes,numLightProbeGrids:ht.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:I.dithering,shadowMapEnabled:i.shadowMap.enabled&&q.length>0,shadowMapType:i.shadowMap.type,toneMapping:he,decodeVideoTexture:ge&&I.map.isVideoTexture===!0&&Ye.getTransfer(I.map.colorSpace)===an,decodeVideoTextureEmissive:pe&&I.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(I.emissiveMap.colorSpace)===an,premultipliedAlpha:I.premultipliedAlpha,doubleSided:I.side===fs,flipSided:I.side===ui,useDepthPacking:I.depthPacking>=0,depthPacking:I.depthPacking||0,index0AttributeName:I.index0AttributeName,extensionClipCullDistance:At&&I.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(At&&I.extensions.multiDraw===!0||Kt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:I.customProgramCacheKey()};return le.vertexUv1s=u.has(1),le.vertexUv2s=u.has(2),le.vertexUv3s=u.has(3),u.clear(),le}function S(I){let B=[];if(I.shaderID?B.push(I.shaderID):(B.push(I.customVertexShaderID),B.push(I.customFragmentShaderID)),I.defines!==void 0)for(let q in I.defines)B.push(q),B.push(I.defines[q]);return I.isRawShaderMaterial===!1&&(m(B,I),z(B,I),B.push(i.outputColorSpace)),B.push(I.customProgramCacheKey),B.join()}function m(I,B){I.push(B.precision),I.push(B.outputColorSpace),I.push(B.envMapMode),I.push(B.envMapCubeUVHeight),I.push(B.mapUv),I.push(B.alphaMapUv),I.push(B.lightMapUv),I.push(B.aoMapUv),I.push(B.bumpMapUv),I.push(B.normalMapUv),I.push(B.displacementMapUv),I.push(B.emissiveMapUv),I.push(B.metalnessMapUv),I.push(B.roughnessMapUv),I.push(B.anisotropyMapUv),I.push(B.clearcoatMapUv),I.push(B.clearcoatNormalMapUv),I.push(B.clearcoatRoughnessMapUv),I.push(B.iridescenceMapUv),I.push(B.iridescenceThicknessMapUv),I.push(B.sheenColorMapUv),I.push(B.sheenRoughnessMapUv),I.push(B.specularMapUv),I.push(B.specularColorMapUv),I.push(B.specularIntensityMapUv),I.push(B.transmissionMapUv),I.push(B.thicknessMapUv),I.push(B.combine),I.push(B.fogExp2),I.push(B.sizeAttenuation),I.push(B.morphTargetsCount),I.push(B.morphAttributeCount),I.push(B.numSunLights),I.push(B.numDirLights),I.push(B.numPointLights),I.push(B.numSpotLights),I.push(B.numSpotLightMaps),I.push(B.numHemiLights),I.push(B.numRectAreaLights),I.push(B.numSunLightShadows),I.push(B.numDirLightShadows),I.push(B.numPointLightShadows),I.push(B.numSpotLightShadows),I.push(B.numSpotLightShadowsWithMaps),I.push(B.numLightProbes),I.push(B.shadowMapType),I.push(B.toneMapping),I.push(B.numClippingPlanes),I.push(B.numClipIntersection),I.push(B.depthPacking)}function z(I,B){o.disableAll(),B.instancing&&o.enable(0),B.instancingColor&&o.enable(1),B.instancingMorph&&o.enable(2),B.matcap&&o.enable(3),B.envMap&&o.enable(4),B.normalMapObjectSpace&&o.enable(5),B.normalMapTangentSpace&&o.enable(6),B.clearcoat&&o.enable(7),B.iridescence&&o.enable(8),B.alphaTest&&o.enable(9),B.vertexColors&&o.enable(10),B.vertexAlphas&&o.enable(11),B.vertexUv1s&&o.enable(12),B.vertexUv2s&&o.enable(13),B.vertexUv3s&&o.enable(14),B.vertexTangents&&o.enable(15),B.anisotropy&&o.enable(16),B.alphaHash&&o.enable(17),B.batching&&o.enable(18),B.dispersion&&o.enable(19),B.retroreflection&&o.enable(24),B.batchingColor&&o.enable(20),B.gradientMap&&o.enable(21),B.packedNormalMap&&o.enable(22),B.vertexNormals&&o.enable(23),I.push(o.mask),o.disableAll(),B.fog&&o.enable(0),B.useFog&&o.enable(1),B.flatShading&&o.enable(2),B.logarithmicDepthBuffer&&o.enable(3),B.reversedDepthBuffer&&o.enable(4),B.skinning&&o.enable(5),B.morphTargets&&o.enable(6),B.morphNormals&&o.enable(7),B.morphColors&&o.enable(8),B.premultipliedAlpha&&o.enable(9),B.shadowMapEnabled&&o.enable(10),B.doubleSided&&o.enable(11),B.flipSided&&o.enable(12),B.useDepthPacking&&o.enable(13),B.dithering&&o.enable(14),B.transmission&&o.enable(15),B.sheen&&o.enable(16),B.opaque&&o.enable(17),B.pointsUvs&&o.enable(18),B.decodeVideoTexture&&o.enable(19),B.decodeVideoTextureEmissive&&o.enable(20),B.alphaToCoverage&&o.enable(21),B.numLightProbeGrids>0&&o.enable(22),B.hasPositionAttribute&&o.enable(23),I.push(o.mask)}function H(I){let B=M[I.type],q;if(B){let Z=hi[B];q=Dl.clone(Z.uniforms)}else q=I.uniforms;return q}function D(I,B){let q=f.get(B);return q!==void 0?++q.usedTimes:(q=new b1(i,B,I,s),d.push(q),f.set(B,q)),q}function T(I){if(--I.usedTimes===0){let B=d.indexOf(I);d[B]=d[d.length-1],d.pop(),f.delete(I.cacheKey),I.destroy()}}function k(I){l.remove(I)}function Y(){l.dispose()}return{getParameters:N,getProgramCacheKey:S,getUniforms:H,acquireProgram:D,releaseProgram:T,releaseShaderCache:k,programs:d,dispose:Y}}function T1(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let l=i.get(o);return l===void 0&&(l={},i.set(o,l)),l}function n(o){i.delete(o)}function s(o,l,u){i.get(o)[l]=u}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function A1(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Ug(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Og(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(g){let M=0;return g.isInstancedMesh&&(M+=2),g.isSkinnedMesh&&(M+=1),M}function l(g,M,w,N,S,m){let z=i[t];return z===void 0?(z={id:g.id,object:g,geometry:M,material:w,materialVariant:o(g),groupOrder:N,renderOrder:g.renderOrder,z:S,group:m},i[t]=z):(z.id=g.id,z.object=g,z.geometry=M,z.material=w,z.materialVariant=o(g),z.groupOrder=N,z.renderOrder=g.renderOrder,z.z=S,z.group=m),t++,z}function u(g,M,w,N,S,m,z){z.reversedDepth===!0&&(S=-S);let H=l(g,M,w,N,S,m);w.transmission>0?n.push(H):w.transparent===!0?s.push(H):e.push(H)}function d(g,M,w,N,S,m){let z=l(g,M,w,N,S,m);w.transmission>0?n.unshift(z):w.transparent===!0?s.unshift(z):e.unshift(z)}function f(g,M){e.length>1&&e.sort(g||A1),n.length>1&&n.sort(M||Ug),s.length>1&&s.sort(M||Ug)}function b(){for(let g=t,M=i.length;g<M;g++){let w=i[g];if(w.id===null)break;w.id=null,w.object=null,w.geometry=null,w.material=null,w.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:u,unshift:d,finish:b,sort:f}}function C1(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Og,i.set(n,[o])):s>=r.length?(o=new Og,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function R1(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new j,color:new ye};break;case"SpotLight":e={position:new j,direction:new j,color:new ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new j,color:new ye,distance:0,decay:0};break;case"HemisphereLight":e={direction:new j,skyColor:new ye,groundColor:new ye};break;case"RectAreaLight":e={color:new ye,position:new j,halfWidth:new j,halfHeight:new j};break}return i[t.id]=e,e}}}function I1(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var P1=0;function L1(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function D1(i){let t=new R1,e=I1(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)n.probe.push(new j);let s=new j,r=new Ze,o=new Ze;function l(d){let f=0,b=0,g=0;for(let ot=0;ot<9;ot++)n.probe[ot].set(0,0,0);let M=0,w=0,N=0,S=0,m=0,z=0,H=0,D=0,T=0,k=0,Y=0,I=0,B=0,q=0;d.sort(L1);for(let ot=0,ht=d.length;ot<ht;ot++){let tt=d[ot],st=tt.color,pt=tt.intensity,_t=tt.distance,Ct=null;if(tt.shadow&&tt.shadow.map&&(tt.shadow.map.texture.format===dr?Ct=tt.shadow.map.texture:Ct=tt.shadow.map.depthTexture||tt.shadow.map.texture),tt.isAmbientLight)f+=st.r*pt,b+=st.g*pt,g+=st.b*pt;else if(tt.isLightProbe){for(let xt=0;xt<9;xt++)n.probe[xt].addScaledVector(tt.sh.coefficients[xt],pt);q++}else if(tt.isSunLight){let xt=t.get(tt);if(xt.color.copy(tt.color).multiplyScalar(tt.intensity),tt.castShadow){let wt=tt.shadow,bt=e.get(tt);bt.shadowIntensity=wt.intensity,bt.shadowBias=wt.bias,bt.shadowNormalBias=wt.normalBias,bt.shadowRadius=wt.radius,bt.shadowMapSize.copy(wt.mapSize).multiply(wt.getFrameExtents()),n.sunShadow[w]=bt,n.sunShadowMap[w]=Ct;let zt=wt.getViewportCount();for(let ne=0;ne<zt;ne++)n.sunShadowMatrix[N+ne]=wt.getMatrix(ne),n.sunShadowCascade[N+ne]=wt._cascadeData[ne];N+=zt,w++}n.sun[M]=xt,M++}else if(tt.isDirectionalLight){let xt=t.get(tt);if(xt.color.copy(tt.color).multiplyScalar(tt.intensity),tt.castShadow){let wt=tt.shadow,bt=e.get(tt);bt.shadowIntensity=wt.intensity,bt.shadowBias=wt.bias,bt.shadowNormalBias=wt.normalBias,bt.shadowRadius=wt.radius,bt.shadowMapSize=wt.mapSize,n.directionalShadow[S]=bt,n.directionalShadowMap[S]=Ct,n.directionalShadowMatrix[S]=tt.shadow.matrix,T++}n.directional[S]=xt,S++}else if(tt.isSpotLight){let xt=t.get(tt);xt.position.setFromMatrixPosition(tt.matrixWorld),xt.color.copy(st).multiplyScalar(pt),xt.distance=_t,xt.coneCos=Math.cos(tt.angle),xt.penumbraCos=Math.cos(tt.angle*(1-tt.penumbra)),xt.decay=tt.decay,n.spot[z]=xt;let wt=tt.shadow;if(tt.map&&(n.spotLightMap[I]=tt.map,I++,wt.updateMatrices(tt),tt.castShadow&&B++),n.spotLightMatrix[z]=wt.matrix,tt.castShadow){let bt=e.get(tt);bt.shadowIntensity=wt.intensity,bt.shadowBias=wt.bias,bt.shadowNormalBias=wt.normalBias,bt.shadowRadius=wt.radius,bt.shadowMapSize=wt.mapSize,n.spotShadow[z]=bt,n.spotShadowMap[z]=Ct,Y++}z++}else if(tt.isRectAreaLight){let xt=t.get(tt);xt.color.copy(st).multiplyScalar(pt),xt.halfWidth.set(tt.width*.5,0,0),xt.halfHeight.set(0,tt.height*.5,0),n.rectArea[H]=xt,H++}else if(tt.isPointLight){let xt=t.get(tt);if(xt.color.copy(tt.color).multiplyScalar(tt.intensity),xt.distance=tt.distance,xt.decay=tt.decay,tt.castShadow){let wt=tt.shadow,bt=e.get(tt);bt.shadowIntensity=wt.intensity,bt.shadowBias=wt.bias,bt.shadowNormalBias=wt.normalBias,bt.shadowRadius=wt.radius,bt.shadowMapSize=wt.mapSize,bt.shadowCameraNear=wt.camera.near,bt.shadowCameraFar=wt.camera.far,n.pointShadow[m]=bt,n.pointShadowMap[m]=Ct,n.pointShadowMatrix[m]=tt.shadow.matrix,k++}n.point[m]=xt,m++}else if(tt.isHemisphereLight){let xt=t.get(tt);xt.skyColor.copy(tt.color).multiplyScalar(pt),xt.groundColor.copy(tt.groundColor).multiplyScalar(pt),n.hemi[D]=xt,D++}}H>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=qt.LTC_FLOAT_1,n.rectAreaLTC2=qt.LTC_FLOAT_2):(n.rectAreaLTC1=qt.LTC_HALF_1,n.rectAreaLTC2=qt.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=b,n.ambient[2]=g;let Z=n.hash;(Z.sunLength!==M||Z.directionalLength!==S||Z.pointLength!==m||Z.spotLength!==z||Z.rectAreaLength!==H||Z.hemiLength!==D||Z.numSunShadows!==w||Z.numDirectionalShadows!==T||Z.numPointShadows!==k||Z.numSpotShadows!==Y||Z.numSpotMaps!==I||Z.numLightProbes!==q)&&(n.sun.length=M,n.directional.length=S,n.spot.length=z,n.rectArea.length=H,n.point.length=m,n.hemi.length=D,n.sunShadow.length=w,n.sunShadowMap.length=w,n.sunShadowMatrix.length=N,n.sunShadowCascade.length=N,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=k,n.pointShadowMap.length=k,n.pointShadowMatrix.length=k,n.spotShadow.length=Y,n.spotShadowMap.length=Y,n.spotLightMatrix.length=Y+I-B,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=B,n.numLightProbes=q,Z.sunLength=M,Z.directionalLength=S,Z.pointLength=m,Z.spotLength=z,Z.rectAreaLength=H,Z.hemiLength=D,Z.numSunShadows=w,Z.numDirectionalShadows=T,Z.numPointShadows=k,Z.numSpotShadows=Y,Z.numSpotMaps=I,Z.numLightProbes=q,n.version=P1++)}function u(d,f){let b=0,g=0,M=0,w=0,N=0,S=0,m=f.matrixWorldInverse;for(let z=0,H=d.length;z<H;z++){let D=d[z];if(D.isSunLight){let T=n.sun[b];T.direction.setFromMatrixPosition(D.matrixWorld),T.direction.transformDirection(m),b++}else if(D.isDirectionalLight){let T=n.directional[g];T.direction.setFromMatrixPosition(D.matrixWorld),s.setFromMatrixPosition(D.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),g++}else if(D.isSpotLight){let T=n.spot[w];T.position.setFromMatrixPosition(D.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(D.matrixWorld),s.setFromMatrixPosition(D.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),w++}else if(D.isRectAreaLight){let T=n.rectArea[N];T.position.setFromMatrixPosition(D.matrixWorld),T.position.applyMatrix4(m),o.identity(),r.copy(D.matrixWorld),r.premultiply(m),o.extractRotation(r),T.halfWidth.set(D.width*.5,0,0),T.halfHeight.set(0,D.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),N++}else if(D.isPointLight){let T=n.point[M];T.position.setFromMatrixPosition(D.matrixWorld),T.position.applyMatrix4(m),M++}else if(D.isHemisphereLight){let T=n.hemi[S];T.direction.setFromMatrixPosition(D.matrixWorld),T.direction.transformDirection(m),S++}}}return{setup:l,setupView:u,state:n}}function Fg(i){let t=new D1(i),e=[],n=[],s=[];function r(g){b.camera=g,e.length=0,n.length=0,s.length=0}function o(g){e.push(g)}function l(g){n.push(g)}function u(g){s.push(g)}function d(){t.setup(e)}function f(g){t.setupView(e,g)}let b={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:b,setupLights:d,setupLightsView:f,pushLight:o,pushShadow:l,pushLightProbeGrid:u}}function N1(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),l;return o===void 0?(l=new Fg(i),t.set(s,[l])):r>=o.length?(l=new Fg(i),o.push(l)):l=o[r],l}function n(){t=new WeakMap}return{get:e,dispose:n}}var U1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,O1=`uniform sampler2D shadow_pass;
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
}`,F1=[new j(1,0,0),new j(-1,0,0),new j(0,1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1)],B1=[new j(0,-1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1),new j(0,-1,0),new j(0,-1,0)],Bg=new Ze,Ul=new j,Kf=new j;function k1(i,t,e){let n=new Oa,s=new Wt,r=new Wt,o=new on,l=new xu,u=new vu,d={},f=e.maxTextureSize,b={[lr]:ui,[ui]:lr,[fs]:fs},g=new kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Wt},radius:{value:4}},vertexShader:U1,fragmentShader:O1}),M=g.clone();M.defines.HORIZONTAL_PASS=1;let w=new En;w.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let N=new Bn(w,g),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wl;let m=this.type;this.render=function(k,Y,I){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||k.length===0)return;this.type===I0&&(Me("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=wl);let B=i.getRenderTarget(),q=i.getActiveCubeFace(),Z=i.getActiveMipmapLevel(),ot=i.state;ot.setBlending(ps),ot.buffers.depth.getReversed()===!0?ot.buffers.color.setClear(0,0,0,0):ot.buffers.color.setClear(1,1,1,1),ot.buffers.depth.setTest(!0),ot.setScissorTest(!1);let ht=m!==this.type;ht&&Y.traverse(function(tt){tt.material&&(Array.isArray(tt.material)?tt.material.forEach(st=>st.needsUpdate=!0):tt.material.needsUpdate=!0)});for(let tt=0,st=k.length;tt<st;tt++){let pt=k[tt],_t=pt.shadow;if(_t===void 0){Me("WebGLShadowMap:",pt,"has no shadow.");continue}if(_t.autoUpdate===!1&&_t.needsUpdate===!1)continue;s.copy(_t.mapSize);let Ct=_t.getFrameExtents();s.multiply(Ct),r.copy(_t.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(r.x=Math.floor(f/Ct.x),s.x=r.x*Ct.x,_t.mapSize.x=r.x),s.y>f&&(r.y=Math.floor(f/Ct.y),s.y=r.y*Ct.y,_t.mapSize.y=r.y));let xt=i.state.buffers.depth.getReversed();if(_t.camera._reversedDepth=xt,_t.map===null||ht===!0){if(_t.map!==null&&(_t.map.depthTexture!==null&&(_t.map.depthTexture.dispose(),_t.map.depthTexture=null),_t.map.dispose()),this.type===Va){if(pt.isPointLight){Me("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}_t.map=new vi(s.x,s.y,{format:dr,type:Qi,minFilter:Hn,magFilter:Hn,generateMipmaps:!1}),_t.map.texture.name=pt.name+".shadowMap",_t.map.depthTexture=new ir(s.x,s.y,Bi),_t.map.depthTexture.name=pt.name+".shadowMapDepth",_t.map.depthTexture.format=cs,_t.map.depthTexture.compareFunction=null,_t.map.depthTexture.minFilter=On,_t.map.depthTexture.magFilter=On}else pt.isPointLight?(_t.map=new Th(s.x),_t.map.depthTexture=new uu(s.x,Ki)):(_t.map=new vi(s.x,s.y),_t.map.depthTexture=new ir(s.x,s.y,Ki)),_t.map.depthTexture.name=pt.name+".shadowMap",_t.map.depthTexture.format=cs,this.type===wl?(_t.map.depthTexture.compareFunction=xt?bh:Sh,_t.map.depthTexture.minFilter=Hn,_t.map.depthTexture.magFilter=Hn):(_t.map.depthTexture.compareFunction=null,_t.map.depthTexture.minFilter=On,_t.map.depthTexture.magFilter=On);_t.camera.updateProjectionMatrix()}_t.map.isWebGLCubeRenderTarget!==!0&&(_t.map.width!==s.x||_t.map.height!==s.y)&&_t.map.setSize(s.x,s.y);let wt=_t.map.isWebGLCubeRenderTarget?6:_t.getViewportCount();pt.isPointLight!==!0&&_t.updateMatrices(pt,I);for(let bt=0;bt<wt;bt++){let zt=_t.getCamera(bt);if(pt.isPointLight){let ne=_t.camera,je=_t.matrix,Oe=pt.distance||ne.far;Oe!==ne.far&&(ne.far=Oe,ne.updateProjectionMatrix()),Ul.setFromMatrixPosition(pt.matrixWorld),ne.position.copy(Ul),Kf.copy(ne.position),Kf.add(F1[bt]),ne.up.copy(B1[bt]),ne.lookAt(Kf),ne.updateMatrixWorld(),je.makeTranslation(-Ul.x,-Ul.y,-Ul.z),Bg.multiplyMatrices(ne.projectionMatrix,ne.matrixWorldInverse),_t._frustum.setFromProjectionMatrix(Bg,ne.coordinateSystem,ne.reversedDepth)}if(_t.map.isWebGLCubeRenderTarget)i.setRenderTarget(_t.map,bt),i.clear();else{bt===0&&(i.setRenderTarget(_t.map),i.clear());let ne=_t.getViewport(bt);o.set(r.x*ne.x,r.y*ne.y,r.x*ne.z,r.y*ne.w),ot.viewport(o)}n=_t.getFrustum(bt),D(Y,I,zt,pt,this.type)}_t.isPointLightShadow!==!0&&this.type===Va&&z(_t,I),_t.needsUpdate=!1}m=this.type,S.needsUpdate=!1,i.setRenderTarget(B,q,Z)};function z(k,Y){let I=t.update(N);g.defines.VSM_SAMPLES!==k.blurSamples&&(g.defines.VSM_SAMPLES=k.blurSamples,M.defines.VSM_SAMPLES=k.blurSamples,g.needsUpdate=!0,M.needsUpdate=!0),k.mapPass===null?k.mapPass=new vi(s.x,s.y,{format:dr,type:Qi}):(k.mapPass.width!==k.map.width||k.mapPass.height!==k.map.height)&&k.mapPass.setSize(k.map.width,k.map.height),g.uniforms.shadow_pass.value=k.map.depthTexture,g.uniforms.resolution.value.set(k.map.width,k.map.height),g.uniforms.radius.value=k.radius,i.setRenderTarget(k.mapPass),i.clear(),i.renderBufferDirect(Y,null,I,g,N,null),M.uniforms.shadow_pass.value=k.mapPass.texture,M.uniforms.resolution.value.set(k.map.width,k.map.height),M.uniforms.radius.value=k.radius,i.setRenderTarget(k.map),i.clear(),i.renderBufferDirect(Y,null,I,M,N,null)}function H(k,Y,I,B){let q=null,Z=I.isPointLight===!0?k.customDistanceMaterial:k.customDepthMaterial;if(Z!==void 0)q=Z;else if(q=I.isPointLight===!0?u:l,i.localClippingEnabled&&Y.clipShadows===!0&&Array.isArray(Y.clippingPlanes)&&Y.clippingPlanes.length!==0||Y.displacementMap&&Y.displacementScale!==0||Y.alphaMap&&Y.alphaTest>0||Y.map&&Y.alphaTest>0||Y.alphaToCoverage===!0){let ot=q.uuid,ht=Y.uuid,tt=d[ot];tt===void 0&&(tt={},d[ot]=tt);let st=tt[ht];st===void 0&&(st=q.clone(),tt[ht]=st,Y.addEventListener("dispose",T)),q=st}if(q.visible=Y.visible,q.wireframe=Y.wireframe,B===Va?q.side=Y.shadowSide!==null?Y.shadowSide:Y.side:q.side=Y.shadowSide!==null?Y.shadowSide:b[Y.side],q.alphaMap=Y.alphaMap,q.alphaTest=Y.alphaToCoverage===!0?.5:Y.alphaTest,q.map=Y.map,q.clipShadows=Y.clipShadows,q.clippingPlanes=Y.clippingPlanes,q.clipIntersection=Y.clipIntersection,q.displacementMap=Y.displacementMap,q.displacementScale=Y.displacementScale,q.displacementBias=Y.displacementBias,q.wireframeLinewidth=Y.wireframeLinewidth,q.linewidth=Y.linewidth,I.isPointLight===!0&&q.isMeshDistanceMaterial===!0){let ot=i.properties.get(q);ot.light=I}return q}function D(k,Y,I,B,q){if(k.visible===!1)return;if(k.layers.test(Y.layers)&&(k.isMesh||k.isLine||k.isPoints)&&(k.castShadow||k.receiveShadow&&q===Va)&&(!k.frustumCulled||k.intersectsFrustum(n))){k.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,k.matrixWorld);let ht=t.update(k),tt=k.material;if(Array.isArray(tt)){let st=ht.groups;for(let pt=0,_t=st.length;pt<_t;pt++){let Ct=st[pt],xt=tt[Ct.materialIndex];if(xt&&xt.visible){let wt=H(k,xt,B,q);k.onBeforeShadow(i,k,Y,I,ht,wt,Ct),i.renderBufferDirect(I,null,ht,wt,k,Ct),k.onAfterShadow(i,k,Y,I,ht,wt,Ct)}}}else if(tt.visible){let st=H(k,tt,B,q);k.onBeforeShadow(i,k,Y,I,ht,st,null),i.renderBufferDirect(I,null,ht,st,k,null),k.onAfterShadow(i,k,Y,I,ht,st,null)}}let ot=k.children;for(let ht=0,tt=ot.length;ht<tt;ht++)D(ot[ht],Y,I,B,q)}function T(k){k.target.removeEventListener("dispose",T);for(let I in d){let B=d[I],q=k.target.uuid;q in B&&(B[q].dispose(),delete B[q])}}}function $1(i,t){function e(){let et=!1,Gt=new on,St=null,Jt=new on(0,0,0,0);return{setMask:function(Qt){St!==Qt&&!et&&(i.colorMask(Qt,Qt,Qt,Qt),St=Qt)},setLocked:function(Qt){et=Qt},setClear:function(Qt,At,he,le,Je){Je===!0&&(Qt*=le,At*=le,he*=le),Gt.set(Qt,At,he,le),Jt.equals(Gt)===!1&&(i.clearColor(Qt,At,he,le),Jt.copy(Gt))},reset:function(){et=!1,St=null,Jt.set(-1,0,0,0)}}}function n(){let et=!1,Gt=!1,St=null,Jt=null,Qt=null;return{setReversed:function(At){if(Gt!==At){let he=t.get("EXT_clip_control");At?he.clipControlEXT(he.LOWER_LEFT_EXT,he.ZERO_TO_ONE_EXT):he.clipControlEXT(he.LOWER_LEFT_EXT,he.NEGATIVE_ONE_TO_ONE_EXT),Gt=At;let le=Qt;Qt=null,this.setClear(le)}},getReversed:function(){return Gt},setTest:function(At){At?yt(i.DEPTH_TEST):Lt(i.DEPTH_TEST)},setMask:function(At){St!==At&&!et&&(i.depthMask(At),St=At)},setFunc:function(At){if(Gt&&(At=ug[At]),Jt!==At){switch(At){case Xc:i.depthFunc(i.NEVER);break;case qc:i.depthFunc(i.ALWAYS);break;case Yc:i.depthFunc(i.LESS);break;case Ra:i.depthFunc(i.LEQUAL);break;case Jc:i.depthFunc(i.EQUAL);break;case Zc:i.depthFunc(i.GEQUAL);break;case jc:i.depthFunc(i.GREATER);break;case Kc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Jt=At}},setLocked:function(At){et=At},setClear:function(At){Qt!==At&&(Qt=At,Gt&&(At=1-At),i.clearDepth(At))},reset:function(){et=!1,St=null,Jt=null,Qt=null,Gt=!1}}}function s(){let et=!1,Gt=null,St=null,Jt=null,Qt=null,At=null,he=null,le=null,Je=null;return{setTest:function(ze){et||(ze?yt(i.STENCIL_TEST):Lt(i.STENCIL_TEST))},setMask:function(ze){Gt!==ze&&!et&&(i.stencilMask(ze),Gt=ze)},setFunc:function(ze,qn,fi){(St!==ze||Jt!==qn||Qt!==fi)&&(i.stencilFunc(ze,qn,fi),St=ze,Jt=qn,Qt=fi)},setOp:function(ze,qn,fi){(At!==ze||he!==qn||le!==fi)&&(i.stencilOp(ze,qn,fi),At=ze,he=qn,le=fi)},setLocked:function(ze){et=ze},setClear:function(ze){Je!==ze&&(i.clearStencil(ze),Je=ze)},reset:function(){et=!1,Gt=null,St=null,Jt=null,Qt=null,At=null,he=null,le=null,Je=null}}}let r=new e,o=new n,l=new s,u=new WeakMap,d=new WeakMap,f={},b={},g={},M=new WeakMap,w=[],N=null,S=!1,m=null,z=null,H=null,D=null,T=null,k=null,Y=null,I=new ye(0,0,0),B=0,q=!1,Z=null,ot=null,ht=null,tt=null,st=null,pt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),_t=!1,Ct=0,xt=i.getParameter(i.VERSION);xt.indexOf("WebGL")!==-1?(Ct=parseFloat(/^WebGL (\d)/.exec(xt)[1]),_t=Ct>=1):xt.indexOf("OpenGL ES")!==-1&&(Ct=parseFloat(/^OpenGL ES (\d)/.exec(xt)[1]),_t=Ct>=2);let wt=null,bt={},zt=i.getParameter(i.SCISSOR_BOX),ne=i.getParameter(i.VIEWPORT),je=new on().fromArray(zt),Oe=new on().fromArray(ne);function We(et,Gt,St,Jt){let Qt=new Uint8Array(4),At=i.createTexture();i.bindTexture(et,At),i.texParameteri(et,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(et,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let he=0;he<St;he++)et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?i.texImage3D(Gt,0,i.RGBA,1,1,Jt,0,i.RGBA,i.UNSIGNED_BYTE,Qt):i.texImage2D(Gt+he,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Qt);return At}let vt={};vt[i.TEXTURE_2D]=We(i.TEXTURE_2D,i.TEXTURE_2D,1),vt[i.TEXTURE_CUBE_MAP]=We(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),vt[i.TEXTURE_2D_ARRAY]=We(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),vt[i.TEXTURE_3D]=We(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),l.setClear(0),yt(i.DEPTH_TEST),o.setFunc(Ra),Pt(!1),$t(xf),yt(i.CULL_FACE),It(ps);function yt(et){f[et]!==!0&&(i.enable(et),f[et]=!0)}function Lt(et){f[et]!==!1&&(i.disable(et),f[et]=!1)}function de(et,Gt){return g[et]!==Gt?(i.bindFramebuffer(et,Gt),g[et]=Gt,et===i.DRAW_FRAMEBUFFER&&(g[i.FRAMEBUFFER]=Gt),et===i.FRAMEBUFFER&&(g[i.DRAW_FRAMEBUFFER]=Gt),!0):!1}function Kt(et,Gt){let St=w,Jt=!1;if(et){St=M.get(Gt),St===void 0&&(St=[],M.set(Gt,St));let Qt=et.textures;if(St.length!==Qt.length||St[0]!==i.COLOR_ATTACHMENT0){for(let At=0,he=Qt.length;At<he;At++)St[At]=i.COLOR_ATTACHMENT0+At;St.length=Qt.length,Jt=!0}}else St[0]!==i.BACK&&(St[0]=i.BACK,Jt=!0);Jt&&i.drawBuffers(St)}function ge(et){return N!==et?(i.useProgram(et),N=et,!0):!1}let ee={[kr]:i.FUNC_ADD,[L0]:i.FUNC_SUBTRACT,[D0]:i.FUNC_REVERSE_SUBTRACT};ee[N0]=i.MIN,ee[U0]=i.MAX;let rt={[O0]:i.ZERO,[F0]:i.ONE,[B0]:i.SRC_COLOR,[bf]:i.SRC_ALPHA,[G0]:i.SRC_ALPHA_SATURATE,[V0]:i.DST_COLOR,[$0]:i.DST_ALPHA,[k0]:i.ONE_MINUS_SRC_COLOR,[Mf]:i.ONE_MINUS_SRC_ALPHA,[H0]:i.ONE_MINUS_DST_COLOR,[z0]:i.ONE_MINUS_DST_ALPHA,[W0]:i.CONSTANT_COLOR,[X0]:i.ONE_MINUS_CONSTANT_COLOR,[q0]:i.CONSTANT_ALPHA,[Y0]:i.ONE_MINUS_CONSTANT_ALPHA};function It(et,Gt,St,Jt,Qt,At,he,le,Je,ze){if(et===ps){S===!0&&(Lt(i.BLEND),S=!1);return}if(S===!1&&(yt(i.BLEND),S=!0),et!==P0){if(et!==m||ze!==q){if((z!==kr||T!==kr)&&(i.blendEquation(i.FUNC_ADD),z=kr,T=kr),ze)switch(et){case Ha:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case vf:i.blendFunc(i.ONE,i.ONE);break;case yf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Sf:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:we("WebGLState: Invalid blending: ",et);break}else switch(et){case Ha:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case vf:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case yf:we("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Sf:we("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:we("WebGLState: Invalid blending: ",et);break}H=null,D=null,k=null,Y=null,I.set(0,0,0),B=0,m=et,q=ze}return}Qt=Qt||Gt,At=At||St,he=he||Jt,(Gt!==z||Qt!==T)&&(i.blendEquationSeparate(ee[Gt],ee[Qt]),z=Gt,T=Qt),(St!==H||Jt!==D||At!==k||he!==Y)&&(i.blendFuncSeparate(rt[St],rt[Jt],rt[At],rt[he]),H=St,D=Jt,k=At,Y=he),(le.equals(I)===!1||Je!==B)&&(i.blendColor(le.r,le.g,le.b,Je),I.copy(le),B=Je),m=et,q=!1}function V(et,Gt){et.side===fs?Lt(i.CULL_FACE):yt(i.CULL_FACE);let St=et.side===ui;Gt&&(St=!St),Pt(St),et.blending===Ha&&et.transparent===!1?It(ps):It(et.blending,et.blendEquation,et.blendSrc,et.blendDst,et.blendEquationAlpha,et.blendSrcAlpha,et.blendDstAlpha,et.blendColor,et.blendAlpha,et.premultipliedAlpha),o.setFunc(et.depthFunc),o.setTest(et.depthTest),o.setMask(et.depthWrite),r.setMask(et.colorWrite);let Jt=et.stencilWrite;l.setTest(Jt),Jt&&(l.setMask(et.stencilWriteMask),l.setFunc(et.stencilFunc,et.stencilRef,et.stencilFuncMask),l.setOp(et.stencilFail,et.stencilZFail,et.stencilZPass)),pe(et.polygonOffset,et.polygonOffsetFactor,et.polygonOffsetUnits),et.alphaToCoverage===!0?yt(i.SAMPLE_ALPHA_TO_COVERAGE):Lt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Pt(et){Z!==et&&(et?i.frontFace(i.CW):i.frontFace(i.CCW),Z=et)}function $t(et){et!==C0?(yt(i.CULL_FACE),et!==ot&&(et===xf?i.cullFace(i.BACK):et===R0?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Lt(i.CULL_FACE),ot=et}function ce(et){et!==ht&&(_t&&i.lineWidth(et),ht=et)}function pe(et,Gt,St){et?(yt(i.POLYGON_OFFSET_FILL),(tt!==Gt||st!==St)&&(tt=Gt,st=St,o.getReversed()&&(Gt=-Gt),i.polygonOffset(Gt,St))):Lt(i.POLYGON_OFFSET_FILL)}function Se(et){et?yt(i.SCISSOR_TEST):Lt(i.SCISSOR_TEST)}function Ae(et){et===void 0&&(et=i.TEXTURE0+pt-1),wt!==et&&(i.activeTexture(et),wt=et)}function X(et,Gt,St){St===void 0&&(wt===null?St=i.TEXTURE0+pt-1:St=wt);let Jt=bt[St];Jt===void 0&&(Jt={type:void 0,texture:void 0},bt[St]=Jt),(Jt.type!==et||Jt.texture!==Gt)&&(wt!==St&&(i.activeTexture(St),wt=St),i.bindTexture(et,Gt||vt[et]),Jt.type=et,Jt.texture=Gt)}function Qe(){let et=bt[wt];et!==void 0&&et.type!==void 0&&(i.bindTexture(et.type,null),et.type=void 0,et.texture=void 0)}function Fe(){try{i.compressedTexImage2D(...arguments)}catch(et){we("WebGLState:",et)}}function F(){try{i.compressedTexImage3D(...arguments)}catch(et){we("WebGLState:",et)}}function E(){try{i.texSubImage2D(...arguments)}catch(et){we("WebGLState:",et)}}function at(){try{i.texSubImage3D(...arguments)}catch(et){we("WebGLState:",et)}}function lt(){try{i.compressedTexSubImage2D(...arguments)}catch(et){we("WebGLState:",et)}}function gt(){try{i.compressedTexSubImage3D(...arguments)}catch(et){we("WebGLState:",et)}}function Nt(){try{i.texStorage2D(...arguments)}catch(et){we("WebGLState:",et)}}function Ht(){try{i.texStorage3D(...arguments)}catch(et){we("WebGLState:",et)}}function ft(){try{i.texImage2D(...arguments)}catch(et){we("WebGLState:",et)}}function Mt(){try{i.texImage3D(...arguments)}catch(et){we("WebGLState:",et)}}function kt(et){return b[et]!==void 0?b[et]:i.getParameter(et)}function Dt(et,Gt){b[et]!==Gt&&(i.pixelStorei(et,Gt),b[et]=Gt)}function Zt(et){je.equals(et)===!1&&(i.scissor(et.x,et.y,et.z,et.w),je.copy(et))}function Yt(et){Oe.equals(et)===!1&&(i.viewport(et.x,et.y,et.z,et.w),Oe.copy(et))}function ue(et,Gt){let St=d.get(Gt);St===void 0&&(St=new WeakMap,d.set(Gt,St));let Jt=St.get(et);Jt===void 0&&(Jt=i.getUniformBlockIndex(Gt,et.name),St.set(et,Jt))}function xe(et,Gt){let Jt=d.get(Gt).get(et);u.get(Gt)!==Jt&&(i.uniformBlockBinding(Gt,Jt,et.__bindingPointIndex),u.set(Gt,Jt))}function Te(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),f={},b={},wt=null,bt={},g={},M=new WeakMap,w=[],N=null,S=!1,m=null,z=null,H=null,D=null,T=null,k=null,Y=null,I=new ye(0,0,0),B=0,q=!1,Z=null,ot=null,ht=null,tt=null,st=null,je.set(0,0,i.canvas.width,i.canvas.height),Oe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),l.reset()}return{buffers:{color:r,depth:o,stencil:l},enable:yt,disable:Lt,bindFramebuffer:de,drawBuffers:Kt,useProgram:ge,setBlending:It,setMaterial:V,setFlipSided:Pt,setCullFace:$t,setLineWidth:ce,setPolygonOffset:pe,setScissorTest:Se,activeTexture:Ae,bindTexture:X,unbindTexture:Qe,compressedTexImage2D:Fe,compressedTexImage3D:F,texImage2D:ft,texImage3D:Mt,pixelStorei:Dt,getParameter:kt,updateUBOMapping:ue,uniformBlockBinding:xe,texStorage2D:Nt,texStorage3D:Ht,texSubImage2D:E,texSubImage3D:at,compressedTexSubImage2D:lt,compressedTexSubImage3D:gt,scissor:Zt,viewport:Yt,reset:Te}}function z1(i,t,e,n,s,r,o){let l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Wt,f=new WeakMap,b=new Set,g,M=new WeakMap,w=!1;try{w=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function N(F,E){return w?new OffscreenCanvas(F,E):Xo("canvas")}function S(F,E,at){let lt=1,gt=Fe(F);if((gt.width>at||gt.height>at)&&(lt=at/Math.max(gt.width,gt.height)),lt<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){let Nt=Math.floor(lt*gt.width),Ht=Math.floor(lt*gt.height);g===void 0&&(g=N(Nt,Ht));let ft=E?N(Nt,Ht):g;return ft.width=Nt,ft.height=Ht,ft.getContext("2d").drawImage(F,0,0,Nt,Ht),Me("WebGLRenderer: Texture has been resized from ("+gt.width+"x"+gt.height+") to ("+Nt+"x"+Ht+")."),ft}else return"data"in F&&Me("WebGLRenderer: Image in DataTexture is too big ("+gt.width+"x"+gt.height+")."),F;return F}function m(F){return F.generateMipmaps}function z(F){i.generateMipmap(F)}function H(F){return F.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?i.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function D(F,E,at,lt,gt,Nt=!1){if(F!==null){if(i[F]!==void 0)return i[F];Me("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let Ht;lt&&(Ht=t.get("EXT_texture_norm16"),Ht||Me("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ft=E;if(E===i.RED&&(at===i.FLOAT&&(ft=i.R32F),at===i.HALF_FLOAT&&(ft=i.R16F),at===i.UNSIGNED_BYTE&&(ft=i.R8),at===i.UNSIGNED_SHORT&&Ht&&(ft=Ht.R16_EXT),at===i.SHORT&&Ht&&(ft=Ht.R16_SNORM_EXT)),E===i.RED_INTEGER&&(at===i.UNSIGNED_BYTE&&(ft=i.R8UI),at===i.UNSIGNED_SHORT&&(ft=i.R16UI),at===i.UNSIGNED_INT&&(ft=i.R32UI),at===i.BYTE&&(ft=i.R8I),at===i.SHORT&&(ft=i.R16I),at===i.INT&&(ft=i.R32I)),E===i.RG&&(at===i.FLOAT&&(ft=i.RG32F),at===i.HALF_FLOAT&&(ft=i.RG16F),at===i.UNSIGNED_BYTE&&(ft=i.RG8),at===i.UNSIGNED_SHORT&&Ht&&(ft=Ht.RG16_EXT),at===i.SHORT&&Ht&&(ft=Ht.RG16_SNORM_EXT)),E===i.RG_INTEGER&&(at===i.UNSIGNED_BYTE&&(ft=i.RG8UI),at===i.UNSIGNED_SHORT&&(ft=i.RG16UI),at===i.UNSIGNED_INT&&(ft=i.RG32UI),at===i.BYTE&&(ft=i.RG8I),at===i.SHORT&&(ft=i.RG16I),at===i.INT&&(ft=i.RG32I)),E===i.RGB_INTEGER&&(at===i.UNSIGNED_BYTE&&(ft=i.RGB8UI),at===i.UNSIGNED_SHORT&&(ft=i.RGB16UI),at===i.UNSIGNED_INT&&(ft=i.RGB32UI),at===i.BYTE&&(ft=i.RGB8I),at===i.SHORT&&(ft=i.RGB16I),at===i.INT&&(ft=i.RGB32I)),E===i.RGBA_INTEGER&&(at===i.UNSIGNED_BYTE&&(ft=i.RGBA8UI),at===i.UNSIGNED_SHORT&&(ft=i.RGBA16UI),at===i.UNSIGNED_INT&&(ft=i.RGBA32UI),at===i.BYTE&&(ft=i.RGBA8I),at===i.SHORT&&(ft=i.RGBA16I),at===i.INT&&(ft=i.RGBA32I)),E===i.RGB&&(at===i.UNSIGNED_SHORT&&Ht&&(ft=Ht.RGB16_EXT),at===i.SHORT&&Ht&&(ft=Ht.RGB16_SNORM_EXT),at===i.UNSIGNED_INT_5_9_9_9_REV&&(ft=i.RGB9_E5),at===i.UNSIGNED_INT_10F_11F_11F_REV&&(ft=i.R11F_G11F_B10F)),E===i.RGBA){let Mt=Nt?Wo:Ye.getTransfer(gt);at===i.FLOAT&&(ft=i.RGBA32F),at===i.HALF_FLOAT&&(ft=i.RGBA16F),at===i.UNSIGNED_BYTE&&(ft=Mt===an?i.SRGB8_ALPHA8:i.RGBA8),at===i.UNSIGNED_SHORT&&Ht&&(ft=Ht.RGBA16_EXT),at===i.SHORT&&Ht&&(ft=Ht.RGBA16_SNORM_EXT),at===i.UNSIGNED_SHORT_4_4_4_4&&(ft=i.RGBA4),at===i.UNSIGNED_SHORT_5_5_5_1&&(ft=i.RGB5_A1)}return(ft===i.R16F||ft===i.R32F||ft===i.RG16F||ft===i.RG32F||ft===i.RGBA16F||ft===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ft}function T(F,E){let at;return F?E===null||E===Ki||E===Wa?at=i.DEPTH24_STENCIL8:E===Bi?at=i.DEPTH32F_STENCIL8:E===Ga&&(at=i.DEPTH24_STENCIL8,Me("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ki||E===Wa?at=i.DEPTH_COMPONENT24:E===Bi?at=i.DEPTH_COMPONENT32F:E===Ga&&(at=i.DEPTH_COMPONENT16),at}function k(F,E){return m(F)===!0||F.isFramebufferTexture&&F.minFilter!==On&&F.minFilter!==Hn?Math.log2(Math.max(E.width,E.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?E.mipmaps.length:1}function Y(F){let E=F.target;E.removeEventListener("dispose",Y),B(E),E.isVideoTexture&&f.delete(E),E.isHTMLTexture&&b.delete(E)}function I(F){let E=F.target;E.removeEventListener("dispose",I),Z(E)}function B(F){let E=n.get(F);if(E.__webglInit===void 0)return;let at=F.source,lt=M.get(at);if(lt){let gt=lt[E.__cacheKey];gt.usedTimes--,gt.usedTimes===0&&q(F),Object.keys(lt).length===0&&M.delete(at)}n.remove(F)}function q(F){let E=n.get(F);i.deleteTexture(E.__webglTexture);let at=F.source,lt=M.get(at);delete lt[E.__cacheKey],o.memory.textures--}function Z(F){let E=n.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),n.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let lt=0;lt<6;lt++){if(Array.isArray(E.__webglFramebuffer[lt]))for(let gt=0;gt<E.__webglFramebuffer[lt].length;gt++)i.deleteFramebuffer(E.__webglFramebuffer[lt][gt]);else i.deleteFramebuffer(E.__webglFramebuffer[lt]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[lt])}else{if(Array.isArray(E.__webglFramebuffer))for(let lt=0;lt<E.__webglFramebuffer.length;lt++)i.deleteFramebuffer(E.__webglFramebuffer[lt]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let lt=0;lt<E.__webglColorRenderbuffer.length;lt++)E.__webglColorRenderbuffer[lt]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[lt]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let at=F.textures;for(let lt=0,gt=at.length;lt<gt;lt++){let Nt=n.get(at[lt]);Nt.__webglTexture&&(i.deleteTexture(Nt.__webglTexture),o.memory.textures--),n.remove(at[lt])}n.remove(F)}let ot=0;function ht(){ot=0}function tt(){return ot}function st(F){ot=F}function pt(){let F=ot;return F>=s.maxTextures&&Me("WebGLTextures: Trying to use "+(F+1)+" texture units while this GPU supports only "+s.maxTextures),ot+=1,F}function _t(F){let E=[];return E.push(F.wrapS),E.push(F.wrapT),E.push(F.wrapR||0),E.push(F.magFilter),E.push(F.minFilter),E.push(F.anisotropy),E.push(F.internalFormat),E.push(F.format),E.push(F.type),E.push(F.generateMipmaps),E.push(F.premultiplyAlpha),E.push(F.flipY),E.push(F.unpackAlignment),E.push(F.colorSpace),E.join()}function Ct(F,E){let at=n.get(F);if(F.isVideoTexture&&X(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&at.__version!==F.version){let lt=F.image;if(lt===null)Me("WebGLRenderer: Texture marked for update but no image data found.");else if(lt.complete===!1)Me("WebGLRenderer: Texture marked for update but image is incomplete");else{Lt(at,F,E);return}}else F.isExternalTexture&&(at.__webglTexture=F.sourceTexture?F.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,at.__webglTexture,i.TEXTURE0+E)}function xt(F,E){let at=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&at.__version!==F.version){Lt(at,F,E);return}else F.isExternalTexture&&(at.__webglTexture=F.sourceTexture?F.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,at.__webglTexture,i.TEXTURE0+E)}function wt(F,E){let at=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&at.__version!==F.version){Lt(at,F,E);return}e.bindTexture(i.TEXTURE_3D,at.__webglTexture,i.TEXTURE0+E)}function bt(F,E){let at=n.get(F);if(F.isCubeDepthTexture!==!0&&F.version>0&&at.__version!==F.version){de(at,F,E);return}e.bindTexture(i.TEXTURE_CUBE_MAP,at.__webglTexture,i.TEXTURE0+E)}let zt={[Qc]:i.REPEAT,[os]:i.CLAMP_TO_EDGE,[tu]:i.MIRRORED_REPEAT},ne={[On]:i.NEAREST,[j0]:i.NEAREST_MIPMAP_NEAREST,[Tl]:i.NEAREST_MIPMAP_LINEAR,[Hn]:i.LINEAR,[Ou]:i.LINEAR_MIPMAP_NEAREST,[ur]:i.LINEAR_MIPMAP_LINEAR},je={[eg]:i.NEVER,[ag]:i.ALWAYS,[ng]:i.LESS,[Sh]:i.LEQUAL,[ig]:i.EQUAL,[bh]:i.GEQUAL,[sg]:i.GREATER,[rg]:i.NOTEQUAL};function Oe(F,E){if(E.type===Bi&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Hn||E.magFilter===Ou||E.magFilter===Tl||E.magFilter===ur||E.minFilter===Hn||E.minFilter===Ou||E.minFilter===Tl||E.minFilter===ur)&&Me("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(F,i.TEXTURE_WRAP_S,zt[E.wrapS]),i.texParameteri(F,i.TEXTURE_WRAP_T,zt[E.wrapT]),(F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY)&&i.texParameteri(F,i.TEXTURE_WRAP_R,zt[E.wrapR]),i.texParameteri(F,i.TEXTURE_MAG_FILTER,ne[E.magFilter]),i.texParameteri(F,i.TEXTURE_MIN_FILTER,ne[E.minFilter]),E.compareFunction&&(i.texParameteri(F,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(F,i.TEXTURE_COMPARE_FUNC,je[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===On||E.minFilter!==Tl&&E.minFilter!==ur||E.type===Bi&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let at=t.get("EXT_texture_filter_anisotropic");i.texParameterf(F,at.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function We(F,E){let at=!1;F.__webglInit===void 0&&(F.__webglInit=!0,E.addEventListener("dispose",Y));let lt=E.source,gt=M.get(lt);gt===void 0&&(gt={},M.set(lt,gt));let Nt=_t(E);if(Nt!==F.__cacheKey){gt[Nt]===void 0&&(gt[Nt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,at=!0),gt[Nt].usedTimes++;let Ht=gt[F.__cacheKey];Ht!==void 0&&(gt[F.__cacheKey].usedTimes--,Ht.usedTimes===0&&q(E)),F.__cacheKey=Nt,F.__webglTexture=gt[Nt].texture}return at}function vt(F,E,at){return Math.floor(Math.floor(F/at)/E)}function yt(F,E,at,lt){let Nt=F.updateRanges;if(Nt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,E.width,E.height,at,lt,E.data);else{Nt.sort((Dt,Zt)=>Dt.start-Zt.start);let Ht=0;for(let Dt=1;Dt<Nt.length;Dt++){let Zt=Nt[Ht],Yt=Nt[Dt],ue=Zt.start+Zt.count,xe=vt(Yt.start,E.width,4),Te=vt(Zt.start,E.width,4);Yt.start<=ue+1&&xe===Te&&vt(Yt.start+Yt.count-1,E.width,4)===xe?Zt.count=Math.max(Zt.count,Yt.start+Yt.count-Zt.start):(++Ht,Nt[Ht]=Yt)}Nt.length=Ht+1;let ft=e.getParameter(i.UNPACK_ROW_LENGTH),Mt=e.getParameter(i.UNPACK_SKIP_PIXELS),kt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,E.width);for(let Dt=0,Zt=Nt.length;Dt<Zt;Dt++){let Yt=Nt[Dt],ue=Math.floor(Yt.start/4),xe=Math.ceil(Yt.count/4),Te=ue%E.width,et=Math.floor(ue/E.width),Gt=xe,St=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Te),e.pixelStorei(i.UNPACK_SKIP_ROWS,et),e.texSubImage2D(i.TEXTURE_2D,0,Te,et,Gt,St,at,lt,E.data)}F.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,ft),e.pixelStorei(i.UNPACK_SKIP_PIXELS,Mt),e.pixelStorei(i.UNPACK_SKIP_ROWS,kt)}}function Lt(F,E,at){let lt=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(lt=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(lt=i.TEXTURE_3D);let gt=We(F,E),Nt=E.source;e.bindTexture(lt,F.__webglTexture,i.TEXTURE0+at);let Ht=n.get(Nt);if(Nt.version!==Ht.__version||gt===!0){if(e.activeTexture(i.TEXTURE0+at),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){let St=Ye.getPrimaries(Ye.workingColorSpace),Jt=E.colorSpace===$s?null:Ye.getPrimaries(E.colorSpace),Qt=E.colorSpace===$s||St===Jt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qt)}e.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment);let Mt=S(E.image,!1,s.maxTextureSize);Mt=Qe(E,Mt);let kt=r.convert(E.format,E.colorSpace),Dt=r.convert(E.type),Zt=D(E.internalFormat,kt,Dt,E.normalized,E.colorSpace,E.isVideoTexture);Oe(lt,E);let Yt,ue=E.mipmaps,xe=E.isVideoTexture!==!0,Te=Ht.__version===void 0||gt===!0,et=Nt.dataReady,Gt=k(E,Mt);if(E.isDepthTexture)Zt=T(E.format===hr,E.type),Te&&(xe?e.texStorage2D(i.TEXTURE_2D,1,Zt,Mt.width,Mt.height):e.texImage2D(i.TEXTURE_2D,0,Zt,Mt.width,Mt.height,0,kt,Dt,null));else if(E.isDataTexture)if(ue.length>0){xe&&Te&&e.texStorage2D(i.TEXTURE_2D,Gt,Zt,ue[0].width,ue[0].height);for(let St=0,Jt=ue.length;St<Jt;St++)Yt=ue[St],xe?et&&e.texSubImage2D(i.TEXTURE_2D,St,0,0,Yt.width,Yt.height,kt,Dt,Yt.data):e.texImage2D(i.TEXTURE_2D,St,Zt,Yt.width,Yt.height,0,kt,Dt,Yt.data);E.generateMipmaps=!1}else xe?(Te&&e.texStorage2D(i.TEXTURE_2D,Gt,Zt,Mt.width,Mt.height),et&&yt(E,Mt,kt,Dt)):e.texImage2D(i.TEXTURE_2D,0,Zt,Mt.width,Mt.height,0,kt,Dt,Mt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){xe&&Te&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Gt,Zt,ue[0].width,ue[0].height,Mt.depth);for(let St=0,Jt=ue.length;St<Jt;St++)if(Yt=ue[St],E.format!==ki)if(kt!==null)if(xe){if(et)if(E.layerUpdates.size>0){let Qt=Xf(Yt.width,Yt.height,E.format,E.type);for(let At of E.layerUpdates){let he=Yt.data.subarray(At*Qt/Yt.data.BYTES_PER_ELEMENT,(At+1)*Qt/Yt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,St,0,0,At,Yt.width,Yt.height,1,kt,he)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,St,0,0,0,Yt.width,Yt.height,Mt.depth,kt,Yt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,St,Zt,Yt.width,Yt.height,Mt.depth,0,Yt.data,0,0);else Me("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else xe?et&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,St,0,0,0,Yt.width,Yt.height,Mt.depth,kt,Dt,Yt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,St,Zt,Yt.width,Yt.height,Mt.depth,0,kt,Dt,Yt.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{xe&&Te&&e.texStorage2D(i.TEXTURE_2D,Gt,Zt,ue[0].width,ue[0].height);for(let St=0,Jt=ue.length;St<Jt;St++)Yt=ue[St],E.format!==ki?kt!==null?xe?et&&e.compressedTexSubImage2D(i.TEXTURE_2D,St,0,0,Yt.width,Yt.height,kt,Yt.data):e.compressedTexImage2D(i.TEXTURE_2D,St,Zt,Yt.width,Yt.height,0,Yt.data):Me("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):xe?et&&e.texSubImage2D(i.TEXTURE_2D,St,0,0,Yt.width,Yt.height,kt,Dt,Yt.data):e.texImage2D(i.TEXTURE_2D,St,Zt,Yt.width,Yt.height,0,kt,Dt,Yt.data)}else if(E.isDataArrayTexture)if(xe){if(Te&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Gt,Zt,Mt.width,Mt.height,Mt.depth),et)if(E.layerUpdates.size>0){let St=Xf(Mt.width,Mt.height,E.format,E.type);for(let Jt of E.layerUpdates){let Qt=Mt.data.subarray(Jt*St/Mt.data.BYTES_PER_ELEMENT,(Jt+1)*St/Mt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Jt,Mt.width,Mt.height,1,kt,Dt,Qt)}E.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Mt.width,Mt.height,Mt.depth,kt,Dt,Mt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Zt,Mt.width,Mt.height,Mt.depth,0,kt,Dt,Mt.data);else if(E.isData3DTexture)xe?(Te&&e.texStorage3D(i.TEXTURE_3D,Gt,Zt,Mt.width,Mt.height,Mt.depth),et&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Mt.width,Mt.height,Mt.depth,kt,Dt,Mt.data)):e.texImage3D(i.TEXTURE_3D,0,Zt,Mt.width,Mt.height,Mt.depth,0,kt,Dt,Mt.data);else if(E.isFramebufferTexture){if(Te)if(xe)e.texStorage2D(i.TEXTURE_2D,Gt,Zt,Mt.width,Mt.height);else{let St=Mt.width,Jt=Mt.height;for(let Qt=0;Qt<Gt;Qt++)e.texImage2D(i.TEXTURE_2D,Qt,Zt,St,Jt,0,kt,Dt,null),St>>=1,Jt>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in i){let St=i.canvas;if(St.hasAttribute("layoutsubtree")||St.setAttribute("layoutsubtree","true"),Mt.parentNode!==St){St.appendChild(Mt),b.add(E),St.onpaint=Jt=>{let Qt=Jt.changedElements;for(let At of b)Qt.includes(At.image)&&(At.needsUpdate=!0)},St.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Mt);else{let Qt=i.RGBA,At=i.RGBA,he=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Qt,At,he,Mt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ue.length>0){if(xe&&Te){let St=Fe(ue[0]);e.texStorage2D(i.TEXTURE_2D,Gt,Zt,St.width,St.height)}for(let St=0,Jt=ue.length;St<Jt;St++)Yt=ue[St],xe?et&&e.texSubImage2D(i.TEXTURE_2D,St,0,0,kt,Dt,Yt):e.texImage2D(i.TEXTURE_2D,St,Zt,kt,Dt,Yt);E.generateMipmaps=!1}else if(xe){if(Te){let St=Fe(Mt);e.texStorage2D(i.TEXTURE_2D,Gt,Zt,St.width,St.height)}et&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,kt,Dt,Mt)}else e.texImage2D(i.TEXTURE_2D,0,Zt,kt,Dt,Mt);m(E)&&z(lt),Ht.__version=Nt.version,E.onUpdate&&E.onUpdate(E)}F.__version=E.version}function de(F,E,at){if(E.image.length!==6)return;let lt=We(F,E),gt=E.source;e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+at);let Nt=n.get(gt);if(gt.version!==Nt.__version||lt===!0){e.activeTexture(i.TEXTURE0+at);let Ht=Ye.getPrimaries(Ye.workingColorSpace),ft=E.colorSpace===$s?null:Ye.getPrimaries(E.colorSpace),Mt=E.colorSpace===$s||Ht===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);let kt=E.isCompressedTexture||E.image[0].isCompressedTexture,Dt=E.image[0]&&E.image[0].isDataTexture,Zt=[];for(let At=0;At<6;At++)!kt&&!Dt?Zt[At]=S(E.image[At],!0,s.maxCubemapSize):Zt[At]=Dt?E.image[At].image:E.image[At],Zt[At]=Qe(E,Zt[At]);let Yt=Zt[0],ue=r.convert(E.format,E.colorSpace),xe=r.convert(E.type),Te=D(E.internalFormat,ue,xe,E.normalized,E.colorSpace),et=E.isVideoTexture!==!0,Gt=Nt.__version===void 0||lt===!0,St=gt.dataReady,Jt=k(E,Yt);Oe(i.TEXTURE_CUBE_MAP,E);let Qt;if(kt){et&&Gt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Jt,Te,Yt.width,Yt.height);for(let At=0;At<6;At++){Qt=Zt[At].mipmaps;for(let he=0;he<Qt.length;he++){let le=Qt[he];E.format!==ki?ue!==null?et?St&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,he,0,0,le.width,le.height,ue,le.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,he,Te,le.width,le.height,0,le.data):Me("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):et?St&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,he,0,0,le.width,le.height,ue,xe,le.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,he,Te,le.width,le.height,0,ue,xe,le.data)}}}else{if(Qt=E.mipmaps,et&&Gt){Qt.length>0&&Jt++;let At=Fe(Zt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Jt,Te,At.width,At.height)}for(let At=0;At<6;At++)if(Dt){et?St&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,0,0,Zt[At].width,Zt[At].height,ue,xe,Zt[At].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,Te,Zt[At].width,Zt[At].height,0,ue,xe,Zt[At].data);for(let he=0;he<Qt.length;he++){let Je=Qt[he].image[At].image;et?St&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,he+1,0,0,Je.width,Je.height,ue,xe,Je.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,he+1,Te,Je.width,Je.height,0,ue,xe,Je.data)}}else{et?St&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,0,0,ue,xe,Zt[At]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,Te,ue,xe,Zt[At]);for(let he=0;he<Qt.length;he++){let le=Qt[he];et?St&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,he+1,0,0,ue,xe,le.image[At]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,he+1,Te,ue,xe,le.image[At])}}}m(E)&&z(i.TEXTURE_CUBE_MAP),Nt.__version=gt.version,E.onUpdate&&E.onUpdate(E)}F.__version=E.version}function Kt(F,E,at,lt,gt,Nt){let Ht=r.convert(at.format,at.colorSpace),ft=r.convert(at.type),Mt=D(at.internalFormat,Ht,ft,at.normalized,at.colorSpace),kt=n.get(E),Dt=n.get(at);if(Dt.__renderTarget=E,!kt.__hasExternalTextures){let Zt=Math.max(1,E.width>>Nt),Yt=Math.max(1,E.height>>Nt);gt===i.TEXTURE_3D||gt===i.TEXTURE_2D_ARRAY?e.texImage3D(gt,Nt,Mt,Zt,Yt,E.depth,0,Ht,ft,null):e.texImage2D(gt,Nt,Mt,Zt,Yt,0,Ht,ft,null)}e.bindFramebuffer(i.FRAMEBUFFER,F),Ae(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,lt,gt,Dt.__webglTexture,0,Se(E)):(gt===i.TEXTURE_2D||gt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&gt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,lt,gt,Dt.__webglTexture,Nt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ge(F,E,at){if(i.bindRenderbuffer(i.RENDERBUFFER,F),E.depthBuffer){let lt=E.depthTexture,gt=lt&&lt.isDepthTexture?lt.type:null,Nt=T(E.stencilBuffer,gt),Ht=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ae(E)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Se(E),Nt,E.width,E.height):at?i.renderbufferStorageMultisample(i.RENDERBUFFER,Se(E),Nt,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Nt,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ht,i.RENDERBUFFER,F)}else{let lt=E.textures;for(let gt=0;gt<lt.length;gt++){let Nt=lt[gt],Ht=r.convert(Nt.format,Nt.colorSpace),ft=r.convert(Nt.type),Mt=D(Nt.internalFormat,Ht,ft,Nt.normalized,Nt.colorSpace);Ae(E)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Se(E),Mt,E.width,E.height):at?i.renderbufferStorageMultisample(i.RENDERBUFFER,Se(E),Mt,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Mt,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ee(F,E,at){let lt=E.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,F),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let gt=n.get(E.depthTexture);if(gt.__renderTarget=E,(!gt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),lt){if(gt.__webglInit===void 0&&(gt.__webglInit=!0,E.depthTexture.addEventListener("dispose",Y)),gt.__webglTexture===void 0){gt.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,gt.__webglTexture),Oe(i.TEXTURE_CUBE_MAP,E.depthTexture);let kt=r.convert(E.depthTexture.format),Dt=r.convert(E.depthTexture.type),Zt;E.depthTexture.format===cs?Zt=i.DEPTH_COMPONENT24:E.depthTexture.format===hr&&(Zt=i.DEPTH24_STENCIL8);for(let Yt=0;Yt<6;Yt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Yt,0,Zt,E.width,E.height,0,kt,Dt,null)}}else Ct(E.depthTexture,0);let Nt=gt.__webglTexture,Ht=Se(E),ft=lt?i.TEXTURE_CUBE_MAP_POSITIVE_X+at:i.TEXTURE_2D,Mt=E.depthTexture.format===hr?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(E.depthTexture.format===cs)Ae(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Mt,ft,Nt,0,Ht):i.framebufferTexture2D(i.FRAMEBUFFER,Mt,ft,Nt,0);else if(E.depthTexture.format===hr)Ae(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Mt,ft,Nt,0,Ht):i.framebufferTexture2D(i.FRAMEBUFFER,Mt,ft,Nt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function rt(F){let E=n.get(F),at=F.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==F.depthTexture){let lt=F.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),lt){let gt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,lt.removeEventListener("dispose",gt)};lt.addEventListener("dispose",gt),E.__depthDisposeCallback=gt}E.__boundDepthTexture=lt}if(F.depthTexture&&!E.__autoAllocateDepthBuffer)if(at)for(let lt=0;lt<6;lt++)ee(E.__webglFramebuffer[lt],F,lt);else{let lt=F.texture.mipmaps;lt&&lt.length>0?ee(E.__webglFramebuffer[0],F,0):ee(E.__webglFramebuffer,F,0)}else if(at){E.__webglDepthbuffer=[];for(let lt=0;lt<6;lt++)if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[lt]),E.__webglDepthbuffer[lt]===void 0)E.__webglDepthbuffer[lt]=i.createRenderbuffer(),ge(E.__webglDepthbuffer[lt],F,!1);else{let gt=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Nt=E.__webglDepthbuffer[lt];i.bindRenderbuffer(i.RENDERBUFFER,Nt),i.framebufferRenderbuffer(i.FRAMEBUFFER,gt,i.RENDERBUFFER,Nt)}}else{let lt=F.texture.mipmaps;if(lt&&lt.length>0?e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),ge(E.__webglDepthbuffer,F,!1);else{let gt=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Nt=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Nt),i.framebufferRenderbuffer(i.FRAMEBUFFER,gt,i.RENDERBUFFER,Nt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function It(F,E,at){let lt=n.get(F);E!==void 0&&Kt(lt.__webglFramebuffer,F,F.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),at!==void 0&&rt(F)}function V(F){let E=F.texture,at=n.get(F),lt=n.get(E);F.addEventListener("dispose",I);let gt=F.textures,Nt=F.isWebGLCubeRenderTarget===!0,Ht=gt.length>1;if(Ht||(lt.__webglTexture===void 0&&(lt.__webglTexture=i.createTexture()),lt.__version=E.version,o.memory.textures++),Nt){at.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(E.mipmaps&&E.mipmaps.length>0){at.__webglFramebuffer[ft]=[];for(let Mt=0;Mt<E.mipmaps.length;Mt++)at.__webglFramebuffer[ft][Mt]=i.createFramebuffer()}else at.__webglFramebuffer[ft]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){at.__webglFramebuffer=[];for(let ft=0;ft<E.mipmaps.length;ft++)at.__webglFramebuffer[ft]=i.createFramebuffer()}else at.__webglFramebuffer=i.createFramebuffer();if(Ht)for(let ft=0,Mt=gt.length;ft<Mt;ft++){let kt=n.get(gt[ft]);kt.__webglTexture===void 0&&(kt.__webglTexture=i.createTexture(),o.memory.textures++)}if(F.samples>0&&Ae(F)===!1){at.__webglMultisampledFramebuffer=i.createFramebuffer(),at.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,at.__webglMultisampledFramebuffer);for(let ft=0;ft<gt.length;ft++){let Mt=gt[ft];at.__webglColorRenderbuffer[ft]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,at.__webglColorRenderbuffer[ft]);let kt=r.convert(Mt.format,Mt.colorSpace),Dt=r.convert(Mt.type),Zt=D(Mt.internalFormat,kt,Dt,Mt.normalized,Mt.colorSpace,F.isXRRenderTarget===!0),Yt=Se(F);i.renderbufferStorageMultisample(i.RENDERBUFFER,Yt,Zt,F.width,F.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,at.__webglColorRenderbuffer[ft])}i.bindRenderbuffer(i.RENDERBUFFER,null),F.depthBuffer&&(at.__webglDepthRenderbuffer=i.createRenderbuffer(),ge(at.__webglDepthRenderbuffer,F,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Nt){e.bindTexture(i.TEXTURE_CUBE_MAP,lt.__webglTexture),Oe(i.TEXTURE_CUBE_MAP,E);for(let ft=0;ft<6;ft++)if(E.mipmaps&&E.mipmaps.length>0)for(let Mt=0;Mt<E.mipmaps.length;Mt++)Kt(at.__webglFramebuffer[ft][Mt],F,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Mt);else Kt(at.__webglFramebuffer[ft],F,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);m(E)&&z(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ht){for(let ft=0,Mt=gt.length;ft<Mt;ft++){let kt=gt[ft],Dt=n.get(kt),Zt=i.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Zt=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Zt,Dt.__webglTexture),Oe(Zt,kt),Kt(at.__webglFramebuffer,F,kt,i.COLOR_ATTACHMENT0+ft,Zt,0),m(kt)&&z(Zt)}e.unbindTexture()}else{let ft=i.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(ft=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ft,lt.__webglTexture),Oe(ft,E),E.mipmaps&&E.mipmaps.length>0)for(let Mt=0;Mt<E.mipmaps.length;Mt++)Kt(at.__webglFramebuffer[Mt],F,E,i.COLOR_ATTACHMENT0,ft,Mt);else Kt(at.__webglFramebuffer,F,E,i.COLOR_ATTACHMENT0,ft,0);m(E)&&z(ft),e.unbindTexture()}F.depthBuffer&&rt(F)}function Pt(F){let E=F.textures;for(let at=0,lt=E.length;at<lt;at++){let gt=E[at];if(m(gt)){let Nt=H(F),Ht=n.get(gt).__webglTexture;e.bindTexture(Nt,Ht),z(Nt),e.unbindTexture()}}}let $t=[],ce=[];function pe(F){if(F.samples>0){if(Ae(F)===!1){let E=F.textures,at=F.width,lt=F.height,gt=i.COLOR_BUFFER_BIT,Nt=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ht=n.get(F),ft=E.length>1;if(ft)for(let kt=0;kt<E.length;kt++)e.bindFramebuffer(i.FRAMEBUFFER,Ht.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+kt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ht.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+kt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ht.__webglMultisampledFramebuffer);let Mt=F.texture.mipmaps;Mt&&Mt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ht.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ht.__webglFramebuffer);for(let kt=0;kt<E.length;kt++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(gt|=i.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(gt|=i.STENCIL_BUFFER_BIT)),ft){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ht.__webglColorRenderbuffer[kt]);let Dt=n.get(E[kt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Dt,0)}i.blitFramebuffer(0,0,at,lt,0,0,at,lt,gt,i.NEAREST),u===!0&&($t.length=0,ce.length=0,$t.push(i.COLOR_ATTACHMENT0+kt),F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&($t.push(Nt),ce.push(Nt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ce)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,$t))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ft)for(let kt=0;kt<E.length;kt++){e.bindFramebuffer(i.FRAMEBUFFER,Ht.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+kt,i.RENDERBUFFER,Ht.__webglColorRenderbuffer[kt]);let Dt=n.get(E[kt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ht.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+kt,i.TEXTURE_2D,Dt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ht.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&u){let E=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function Se(F){return Math.min(s.maxSamples,F.samples)}function Ae(F){let E=n.get(F);return F.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function X(F){let E=o.render.frame;f.get(F)!==E&&(f.set(F,E),F.update())}function Qe(F,E){let at=F.colorSpace,lt=F.format,gt=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||at!==Go&&at!==$s&&(Ye.getTransfer(at)===an?(lt!==ki||gt!==Si)&&Me("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):we("WebGLTextures: Unsupported texture color space:",at)),E}function Fe(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(d.width=F.naturalWidth||F.width,d.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(d.width=F.displayWidth,d.height=F.displayHeight):(d.width=F.width,d.height=F.height),d}this.allocateTextureUnit=pt,this.resetTextureUnits=ht,this.getTextureUnits=tt,this.setTextureUnits=st,this.setTexture2D=Ct,this.setTexture2DArray=xt,this.setTexture3D=wt,this.setTextureCube=bt,this.rebindTextures=It,this.setupRenderTarget=V,this.updateRenderTargetMipmap=Pt,this.updateMultisampleRenderTarget=pe,this.setupDepthRenderbuffer=rt,this.setupFrameBufferTexture=Kt,this.useMultisampledRTT=Ae,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function V1(i,t){function e(n,s=$s){let r,o=Ye.getTransfer(s);if(n===Si)return i.UNSIGNED_BYTE;if(n===Bu)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ku)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Nf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Uf)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Lf)return i.BYTE;if(n===Df)return i.SHORT;if(n===Ga)return i.UNSIGNED_SHORT;if(n===Fu)return i.INT;if(n===Ki)return i.UNSIGNED_INT;if(n===Bi)return i.FLOAT;if(n===Qi)return i.HALF_FLOAT;if(n===Of)return i.ALPHA;if(n===Ff)return i.RGB;if(n===ki)return i.RGBA;if(n===cs)return i.DEPTH_COMPONENT;if(n===hr)return i.DEPTH_STENCIL;if(n===$u)return i.RED;if(n===zu)return i.RED_INTEGER;if(n===dr)return i.RG;if(n===Vu)return i.RG_INTEGER;if(n===Hu)return i.RGBA_INTEGER;if(n===Al||n===Cl||n===Rl||n===Il)if(o===an)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Al)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Cl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Rl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Il)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Al)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Cl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Rl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Il)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Gu||n===Wu||n===Xu||n===qu)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Gu)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Wu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Xu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===qu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Yu||n===Ju||n===Zu||n===ju||n===Ku||n===Pl||n===Qu)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Yu||n===Ju)return o===an?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Zu)return o===an?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ju)return r.COMPRESSED_R11_EAC;if(n===Ku)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Pl)return r.COMPRESSED_RG11_EAC;if(n===Qu)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===th||n===eh||n===nh||n===ih||n===sh||n===rh||n===ah||n===oh||n===lh||n===ch||n===uh||n===hh||n===dh||n===fh)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===th)return o===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===eh)return o===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===nh)return o===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ih)return o===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===sh)return o===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===rh)return o===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ah)return o===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===oh)return o===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===lh)return o===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ch)return o===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===uh)return o===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===hh)return o===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===dh)return o===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===fh)return o===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ph||n===mh||n===gh)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ph)return o===an?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===mh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===gh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===_h||n===xh||n===Ll||n===vh)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===_h)return r.COMPRESSED_RED_RGTC1_EXT;if(n===xh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ll)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===vh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Wa?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var H1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,G1=`
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

}`,ap=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new il(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new kn({vertexShader:H1,fragmentShader:G1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Bn(new fl(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},op=class extends us{constructor(t,e){super();let n=this,s=null,r=1,o=null,l="local-floor",u=1,d=null,f=null,b=null,g=null,M=null,w=null,N=typeof XRWebGLBinding<"u",S=new ap,m={},z=e.getContextAttributes(),H=null,D=null,T=[],k=[],Y=new Wt,I=null,B=null,q=new ti;q.viewport=new on;let Z=new ti;Z.viewport=new on;let ot=[q,Z],ht=new Lu,tt=null,st=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(vt){let yt=T[vt];return yt===void 0&&(yt=new Ua,T[vt]=yt),yt.getTargetRaySpace()},this.getControllerGrip=function(vt){let yt=T[vt];return yt===void 0&&(yt=new Ua,T[vt]=yt),yt.getGripSpace()},this.getHand=function(vt){let yt=T[vt];return yt===void 0&&(yt=new Ua,T[vt]=yt),yt.getHandSpace()};function pt(vt){let yt=k.indexOf(vt.inputSource);if(yt===-1)return;let Lt=T[yt];Lt!==void 0&&(Lt.update(vt.inputSource,vt.frame,d||o),Lt.dispatchEvent({type:vt.type,data:vt.inputSource}))}function _t(){s.removeEventListener("select",pt),s.removeEventListener("selectstart",pt),s.removeEventListener("selectend",pt),s.removeEventListener("squeeze",pt),s.removeEventListener("squeezestart",pt),s.removeEventListener("squeezeend",pt),s.removeEventListener("end",_t),s.removeEventListener("inputsourceschange",Ct);for(let vt=0;vt<T.length;vt++){let yt=k[vt];yt!==null&&(k[vt]=null,T[vt].disconnect(yt))}tt=null,st=null,S.reset();for(let vt in m)delete m[vt];if(t.setRenderTarget(H),M=null,g=null,b=null,s=null,D=null,We.stop(),n.isPresenting=!1,t.setPixelRatio(I),t.setSize(Y.width,Y.height,!1),B!==null){let vt=B.camera;vt.fov=B.fov,vt.zoom=B.zoom,vt.updateProjectionMatrix(),B=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(vt){r=vt,n.isPresenting===!0&&Me("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(vt){l=vt,n.isPresenting===!0&&Me("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||o},this.setReferenceSpace=function(vt){d=vt},this.getBaseLayer=function(){return g!==null?g:M},this.getBinding=function(){return b===null&&N&&(b=new XRWebGLBinding(s,e)),b},this.getFrame=function(){return w},this.getSession=function(){return s},this.setSession=async function(vt){if(s=vt,s!==null){if(H=t.getRenderTarget(),s.addEventListener("select",pt),s.addEventListener("selectstart",pt),s.addEventListener("selectend",pt),s.addEventListener("squeeze",pt),s.addEventListener("squeezestart",pt),s.addEventListener("squeezeend",pt),s.addEventListener("end",_t),s.addEventListener("inputsourceschange",Ct),z.xrCompatible!==!0&&await e.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(Y),N&&"createProjectionLayer"in XRWebGLBinding.prototype){let Lt=null,de=null,Kt=null;z.depth&&(Kt=z.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Lt=z.stencil?hr:cs,de=z.stencil?Wa:Ki);let ge={colorFormat:e.RGBA8,depthFormat:Kt,scaleFactor:r};b=this.getBinding(),g=b.createProjectionLayer(ge),s.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),D=new vi(g.textureWidth,g.textureHeight,{format:ki,type:Si,depthTexture:new ir(g.textureWidth,g.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,Lt),stencilBuffer:z.stencil,colorSpace:t.outputColorSpace,samples:z.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}else{let Lt={antialias:z.antialias,alpha:!0,depth:z.depth,stencil:z.stencil,framebufferScaleFactor:r};M=new XRWebGLLayer(s,e,Lt),s.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),D=new vi(M.framebufferWidth,M.framebufferHeight,{format:ki,type:Si,colorSpace:t.outputColorSpace,stencilBuffer:z.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1,storeMultisampledDepthBuffer:M.ignoreDepthValues===!1,storeMultisampledStencilBuffer:M.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(u),d=null,o=await s.requestReferenceSpace(l),We.setContext(s),We.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function Ct(vt){for(let yt=0;yt<vt.removed.length;yt++){let Lt=vt.removed[yt],de=k.indexOf(Lt);de>=0&&(k[de]=null,T[de].disconnect(Lt))}for(let yt=0;yt<vt.added.length;yt++){let Lt=vt.added[yt],de=k.indexOf(Lt);if(de===-1){for(let ge=0;ge<T.length;ge++)if(ge>=k.length){k.push(Lt),de=ge;break}else if(k[ge]===null){k[ge]=Lt,de=ge;break}if(de===-1)break}let Kt=T[de];Kt&&Kt.connect(Lt)}}let xt=new j,wt=new j;function bt(vt,yt,Lt){xt.setFromMatrixPosition(yt.matrixWorld),wt.setFromMatrixPosition(Lt.matrixWorld);let de=xt.distanceTo(wt),Kt=yt.projectionMatrix.elements,ge=Lt.projectionMatrix.elements,ee=Kt[14]/(Kt[10]-1),rt=Kt[14]/(Kt[10]+1),It=(Kt[9]+1)/Kt[5],V=(Kt[9]-1)/Kt[5],Pt=(Kt[8]-1)/Kt[0],$t=(ge[8]+1)/ge[0],ce=ee*Pt,pe=ee*$t,Se=de/(-Pt+$t),Ae=Se*-Pt;if(yt.matrixWorld.decompose(vt.position,vt.quaternion,vt.scale),vt.translateX(Ae),vt.translateZ(Se),vt.matrixWorld.compose(vt.position,vt.quaternion,vt.scale),vt.matrixWorldInverse.copy(vt.matrixWorld).invert(),Kt[10]===-1)vt.projectionMatrix.copy(yt.projectionMatrix),vt.projectionMatrixInverse.copy(yt.projectionMatrixInverse);else{let X=ee+Se,Qe=rt+Se,Fe=ce-Ae,F=pe+(de-Ae),E=It*rt/Qe*X,at=V*rt/Qe*X;vt.projectionMatrix.makePerspective(Fe,F,E,at,X,Qe),vt.projectionMatrixInverse.copy(vt.projectionMatrix).invert()}}function zt(vt,yt){yt===null?vt.matrixWorld.copy(vt.matrix):vt.matrixWorld.multiplyMatrices(yt.matrixWorld,vt.matrix),vt.matrixWorldInverse.copy(vt.matrixWorld).invert()}this.updateCamera=function(vt){if(s===null)return;let yt=vt.near,Lt=vt.far;S.texture!==null&&(S.depthNear>0&&(yt=S.depthNear),S.depthFar>0&&(Lt=S.depthFar)),ht.near=Z.near=q.near=yt,ht.far=Z.far=q.far=Lt,(tt!==ht.near||st!==ht.far)&&(s.updateRenderState({depthNear:ht.near,depthFar:ht.far}),tt=ht.near,st=ht.far),ht.layers.mask=vt.layers.mask|6,q.layers.mask=ht.layers.mask&-5,Z.layers.mask=ht.layers.mask&-3;let de=vt.parent,Kt=ht.cameras;zt(ht,de);for(let ge=0;ge<Kt.length;ge++)zt(Kt[ge],de);Kt.length===2?bt(ht,q,Z):ht.projectionMatrix.copy(q.projectionMatrix),B===null&&vt.isPerspectiveCamera&&(B={camera:vt,fov:vt.fov,zoom:vt.zoom}),ne(vt,ht,de)};function ne(vt,yt,Lt){Lt===null?vt.matrix.copy(yt.matrixWorld):(vt.matrix.copy(Lt.matrixWorld),vt.matrix.invert(),vt.matrix.multiply(yt.matrixWorld)),vt.matrix.decompose(vt.position,vt.quaternion,vt.scale),vt.updateMatrixWorld(!0),vt.projectionMatrix.copy(yt.projectionMatrix),vt.projectionMatrixInverse.copy(yt.projectionMatrixInverse),vt.isPerspectiveCamera&&(vt.fov=La*2*Math.atan(1/vt.projectionMatrix.elements[5]),vt.zoom=1)}this.getCamera=function(){return ht},this.getFoveation=function(){if(!(g===null&&M===null))return u},this.setFoveation=function(vt){u=vt,g!==null&&(g.fixedFoveation=vt),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=vt)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(ht)},this.getCameraTexture=function(vt){return m[vt]};let je=null;function Oe(vt,yt){if(f=yt.getViewerPose(d||o),w=yt,f!==null){let Lt=f.views;M!==null&&(t.setRenderTargetFramebuffer(D,M.framebuffer),t.setRenderTarget(D));let de=!1;Lt.length!==ht.cameras.length&&(ht.cameras.length=0,de=!0);for(let rt=0;rt<Lt.length;rt++){let It=Lt[rt],V=null;if(M!==null)V=M.getViewport(It);else{let $t=b.getViewSubImage(g,It);V=$t.viewport,rt===0&&(t.setRenderTargetTextures(D,$t.colorTexture,$t.depthStencilTexture),t.setRenderTarget(D))}let Pt=ot[rt];Pt===void 0&&(Pt=new ti,Pt.layers.enable(rt),Pt.viewport=new on,ot[rt]=Pt),Pt.matrix.fromArray(It.transform.matrix),Pt.matrix.decompose(Pt.position,Pt.quaternion,Pt.scale),Pt.projectionMatrix.fromArray(It.projectionMatrix),Pt.projectionMatrixInverse.copy(Pt.projectionMatrix).invert(),Pt.viewport.set(V.x,V.y,V.width,V.height),rt===0&&(ht.matrix.copy(Pt.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale)),de===!0&&ht.cameras.push(Pt)}let Kt=s.enabledFeatures;if(Kt&&Kt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&N){b=n.getBinding();let rt=b.getDepthInformation(Lt[0]);rt&&rt.isValid&&rt.texture&&S.init(rt,s.renderState)}if(Kt&&Kt.includes("camera-access")&&N){t.state.unbindTexture(),b=n.getBinding();for(let rt=0;rt<Lt.length;rt++){let It=Lt[rt].camera;if(It){let V=m[It];V||(V=new il,m[It]=V);let Pt=b.getCameraImage(It);V.sourceTexture=Pt}}}}for(let Lt=0;Lt<T.length;Lt++){let de=k[Lt],Kt=T[Lt];de!==null&&Kt!==void 0&&Kt.update(de,yt,d||o)}je&&je(vt,yt),yt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:yt}),w=null}let We=new kg;We.setAnimationLoop(Oe),this.setAnimationLoop=function(vt){je=vt},this.dispose=function(){}}},W1=new Ze,Wg=new Le;Wg.set(-1,0,0,0,1,0,0,0,1);function X1(i,t){function e(S,m){S.matrixAutoUpdate===!0&&S.updateMatrix(),m.value.copy(S.matrix)}function n(S,m){m.color.getRGB(S.fogColor.value,Hf(i)),m.isFog?(S.fogNear.value=m.near,S.fogFar.value=m.far):m.isFogExp2&&(S.fogDensity.value=m.density)}function s(S,m,z,H,D){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(S,m):m.isMeshLambertMaterial?(r(S,m),m.envMap&&(S.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(S,m),b(S,m)):m.isMeshPhongMaterial?(r(S,m),f(S,m),m.envMap&&(S.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(S,m),g(S,m),m.isMeshPhysicalMaterial&&M(S,m,D)):m.isMeshMatcapMaterial?(r(S,m),w(S,m)):m.isMeshDepthMaterial?r(S,m):m.isMeshDistanceMaterial?(r(S,m),N(S,m)):m.isMeshNormalMaterial?r(S,m):m.isLineBasicMaterial?(o(S,m),m.isLineDashedMaterial&&l(S,m)):m.isPointsMaterial?u(S,m,z,H):m.isSpriteMaterial?d(S,m):m.isShadowMaterial?(S.color.value.copy(m.color),S.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(S,m){S.opacity.value=m.opacity,m.color&&S.diffuse.value.copy(m.color),m.emissive&&S.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(S.map.value=m.map,e(m.map,S.mapTransform)),m.alphaMap&&(S.alphaMap.value=m.alphaMap,e(m.alphaMap,S.alphaMapTransform)),m.bumpMap&&(S.bumpMap.value=m.bumpMap,e(m.bumpMap,S.bumpMapTransform),S.bumpScale.value=m.bumpScale,m.side===ui&&(S.bumpScale.value*=-1)),m.normalMap&&(S.normalMap.value=m.normalMap,e(m.normalMap,S.normalMapTransform),S.normalScale.value.copy(m.normalScale),m.side===ui&&S.normalScale.value.negate()),m.displacementMap&&(S.displacementMap.value=m.displacementMap,e(m.displacementMap,S.displacementMapTransform),S.displacementScale.value=m.displacementScale,S.displacementBias.value=m.displacementBias),m.emissiveMap&&(S.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,S.emissiveMapTransform)),m.specularMap&&(S.specularMap.value=m.specularMap,e(m.specularMap,S.specularMapTransform)),m.alphaTest>0&&(S.alphaTest.value=m.alphaTest);let z=t.get(m),H=z.envMap,D=z.envMapRotation;H&&(S.envMap.value=H,S.envMapRotation.value.setFromMatrix4(W1.makeRotationFromEuler(D)).transpose(),H.isCubeTexture&&H.isRenderTargetTexture===!1&&S.envMapRotation.value.premultiply(Wg),S.reflectivity.value=m.reflectivity,S.ior.value=m.ior,S.refractionRatio.value=m.refractionRatio),m.lightMap&&(S.lightMap.value=m.lightMap,S.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,S.lightMapTransform)),m.aoMap&&(S.aoMap.value=m.aoMap,S.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,S.aoMapTransform))}function o(S,m){S.diffuse.value.copy(m.color),S.opacity.value=m.opacity,m.map&&(S.map.value=m.map,e(m.map,S.mapTransform))}function l(S,m){S.dashSize.value=m.dashSize,S.totalSize.value=m.dashSize+m.gapSize,S.scale.value=m.scale}function u(S,m,z,H){S.diffuse.value.copy(m.color),S.opacity.value=m.opacity,S.size.value=m.size*z,S.scale.value=H*.5,m.map&&(S.map.value=m.map,e(m.map,S.uvTransform)),m.alphaMap&&(S.alphaMap.value=m.alphaMap,e(m.alphaMap,S.alphaMapTransform)),m.alphaTest>0&&(S.alphaTest.value=m.alphaTest)}function d(S,m){S.diffuse.value.copy(m.color),S.opacity.value=m.opacity,S.rotation.value=m.rotation,m.map&&(S.map.value=m.map,e(m.map,S.mapTransform)),m.alphaMap&&(S.alphaMap.value=m.alphaMap,e(m.alphaMap,S.alphaMapTransform)),m.alphaTest>0&&(S.alphaTest.value=m.alphaTest)}function f(S,m){S.specular.value.copy(m.specular),S.shininess.value=Math.max(m.shininess,1e-4)}function b(S,m){m.gradientMap&&(S.gradientMap.value=m.gradientMap)}function g(S,m){S.metalness.value=m.metalness,m.metalnessMap&&(S.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,S.metalnessMapTransform)),S.roughness.value=m.roughness,m.roughnessMap&&(S.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,S.roughnessMapTransform)),m.envMap&&(S.envMapIntensity.value=m.envMapIntensity)}function M(S,m,z){S.ior.value=m.ior,m.sheen>0&&(S.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),S.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(S.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,S.sheenColorMapTransform)),m.sheenRoughnessMap&&(S.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,S.sheenRoughnessMapTransform))),m.clearcoat>0&&(S.clearcoat.value=m.clearcoat,S.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(S.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,S.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(S.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===ui&&S.clearcoatNormalScale.value.negate())),m.dispersion>0&&(S.dispersion.value=m.dispersion),m.retroreflectivity>0&&(S.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(S.iridescence.value=m.iridescence,S.iridescenceIOR.value=m.iridescenceIOR,S.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(S.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,S.iridescenceMapTransform)),m.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),m.transmission>0&&(S.transmission.value=m.transmission,S.transmissionSamplerMap.value=z.texture,S.transmissionSamplerSize.value.set(z.width,z.height),m.transmissionMap&&(S.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,S.transmissionMapTransform)),S.thickness.value=m.thickness,m.thicknessMap&&(S.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=m.attenuationDistance,S.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(S.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(S.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=m.specularIntensity,S.specularColor.value.copy(m.specularColor),m.specularColorMap&&(S.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,S.specularColorMapTransform)),m.specularIntensityMap&&(S.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,S.specularIntensityMapTransform))}function w(S,m){m.matcap&&(S.matcap.value=m.matcap)}function N(S,m){let z=t.get(m).light;S.referencePosition.value.setFromMatrixPosition(z.matrixWorld),S.nearDistance.value=z.shadow.camera.near,S.farDistance.value=z.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function q1(i,t,e,n){let s={},r={},o=[],l=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function u(D,T){let k=T.program;n.uniformBlockBinding(D,k)}function d(D,T){let k=s[D.id];k===void 0&&(S(D),k=f(D),s[D.id]=k,D.addEventListener("dispose",z));let Y=T.program;n.updateUBOMapping(D,Y);let I=t.render.frame;r[D.id]!==I&&(g(D),r[D.id]=I)}function f(D){let T=b();D.__bindingPointIndex=T;let k=i.createBuffer(),Y=D.__size,I=D.usage;return i.bindBuffer(i.UNIFORM_BUFFER,k),i.bufferData(i.UNIFORM_BUFFER,Y,I),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,k),k}function b(){for(let D=0;D<l;D++)if(o.indexOf(D)===-1)return o.push(D),D;return we("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(D){let T=s[D.id],k=D.uniforms,Y=D.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let I=0,B=k.length;I<B;I++){let q=k[I];if(Array.isArray(q))for(let Z=0,ot=q.length;Z<ot;Z++)M(q[Z],I,Z,Y);else M(q,I,0,Y)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function M(D,T,k,Y){if(N(D,T,k,Y)===!0){let I=D.__offset,B=D.value;if(Array.isArray(B)){let q=0;for(let Z=0;Z<B.length;Z++){let ot=B[Z],ht=m(ot);w(ot,D.__data,q),typeof ot!="number"&&typeof ot!="boolean"&&!ot.isMatrix3&&!ArrayBuffer.isView(ot)&&(q+=ht.storage/Float32Array.BYTES_PER_ELEMENT)}}else w(B,D.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,I,D.__data)}}function w(D,T,k){typeof D=="number"||typeof D=="boolean"?T[0]=D:D.isMatrix3?(T[0]=D.elements[0],T[1]=D.elements[1],T[2]=D.elements[2],T[3]=0,T[4]=D.elements[3],T[5]=D.elements[4],T[6]=D.elements[5],T[7]=0,T[8]=D.elements[6],T[9]=D.elements[7],T[10]=D.elements[8],T[11]=0):ArrayBuffer.isView(D)?T.set(new D.constructor(D.buffer,D.byteOffset,T.length)):D.toArray(T,k)}function N(D,T,k,Y){let I=D.value,B=T+"_"+k;if(Y[B]===void 0)return typeof I=="number"||typeof I=="boolean"?Y[B]=I:ArrayBuffer.isView(I)?Y[B]=I.slice():Y[B]=I.clone(),!0;{let q=Y[B];if(typeof I=="number"||typeof I=="boolean"){if(q!==I)return Y[B]=I,!0}else{if(ArrayBuffer.isView(I))return!0;if(q.equals(I)===!1)return q.copy(I),!0}}return!1}function S(D){let T=D.uniforms,k=0,Y=16;for(let B=0,q=T.length;B<q;B++){let Z=Array.isArray(T[B])?T[B]:[T[B]];for(let ot=0,ht=Z.length;ot<ht;ot++){let tt=Z[ot],st=Array.isArray(tt.value)?tt.value:[tt.value];for(let pt=0,_t=st.length;pt<_t;pt++){let Ct=st[pt],xt=m(Ct),wt=k%Y,bt=wt%xt.boundary,zt=wt+bt;k+=bt,zt!==0&&Y-zt<xt.storage&&(k+=Y-zt),tt.__data=new Float32Array(xt.storage/Float32Array.BYTES_PER_ELEMENT),tt.__offset=k,k+=xt.storage}}}let I=k%Y;return I>0&&(k+=Y-I),D.__size=k,D.__cache={},this}function m(D){let T={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(T.boundary=4,T.storage=4):D.isVector2?(T.boundary=8,T.storage=8):D.isVector3||D.isColor?(T.boundary=16,T.storage=12):D.isVector4?(T.boundary=16,T.storage=16):D.isMatrix3?(T.boundary=48,T.storage=48):D.isMatrix4?(T.boundary=64,T.storage=64):D.isTexture?Me("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(D)?(T.boundary=16,T.storage=D.byteLength):Me("WebGLRenderer: Unsupported uniform value type.",D),T}function z(D){let T=D.target;T.removeEventListener("dispose",z);let k=o.indexOf(T.__bindingPointIndex);o.splice(k,1),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function H(){for(let D in s)i.deleteBuffer(s[D]);o=[],s={},r={}}return{bind:u,update:d,dispose:H}}var Y1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ms=null;function J1(){return ms===null&&(ms=new Ko(Y1,16,16,dr,Qi),ms.name="DFG_LUT",ms.minFilter=Hn,ms.magFilter=Hn,ms.wrapS=os,ms.wrapT=os,ms.generateMipmaps=!1,ms.needsUpdate=!0),ms}var Ah=class{constructor(t={}){let{canvas:e=og(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:l=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:d=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:b=!1,reversedDepthBuffer:g=!1,outputBufferType:M=Si}=t;this.isWebGLRenderer=!0;let w;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");w=n.getContextAttributes().alpha}else w=o;let N=M,S=new Set([Hu,Vu,zu]),m=new Set([Si,Ki,Ga,Wa,Bu,ku]),z=new Uint32Array(4),H=new Int32Array(4),D=new j,T=null,k=null,Y=[],I=[],B=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ji,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let q=this,Z=!1,ot=null,ht=null,tt=null,st=null;this._outputColorSpace=Ai;let pt=0,_t=0,Ct=null,xt=-1,wt=null,bt=new on,zt=new on,ne=null,je=new ye(0),Oe=0,We=e.width,vt=e.height,yt=1,Lt=null,de=null,Kt=new on(0,0,We,vt),ge=new on(0,0,We,vt),ee=!1,rt=new Oa,It=!1,V=!1,Pt=new Ze,$t=new j,ce=new on,pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Se=!1;function Ae(){return Ct===null?yt:1}let X=n;function Qe(L,K){return e.getContext(L,K)}let Fe,F,E,at,lt,gt,Nt,Ht,ft,Mt,kt,Dt,Zt,Yt,ue,xe,Te,et,Gt,St,Jt,Qt,At;try{let L={alpha:!0,depth:s,stencil:r,antialias:l,premultipliedAlpha:u,preserveDrawingBuffer:d,powerPreference:f,failIfMajorPerformanceCaveat:b};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Je,!1),e.addEventListener("webglcontextrestored",ze,!1),e.addEventListener("webglcontextcreationerror",qn,!1),X===null){let K="webgl2";if(X=Qe(K,L),X===null)throw Qe(K)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}he()}catch(L){throw e.removeEventListener("webglcontextlost",Je,!1),e.removeEventListener("webglcontextrestored",ze,!1),e.removeEventListener("webglcontextcreationerror",qn,!1),we("WebGLRenderer: "+L.message),L}function he(){Fe=new nM(X),Fe.init(),Jt=new V1(X,Fe),F=new Xb(X,Fe,t,Jt),E=new $1(X,Fe),F.reversedDepthBuffer&&g&&E.buffers.depth.setReversed(!0),ht=X.createFramebuffer(),tt=X.createFramebuffer(),st=X.createFramebuffer(),at=new rM(X),lt=new T1,gt=new z1(X,Fe,E,lt,F,Jt,at),Nt=new eM(q),Ht=new oy(X),Qt=new Gb(X,Ht),ft=new iM(X,Ht,at,Qt),Mt=new oM(X,ft,Ht,Qt,at),et=new aM(X,F,gt),ue=new qb(lt),kt=new E1(q,Nt,Fe,F,Qt,ue),Dt=new X1(q,lt),Zt=new C1,Yt=new N1(Fe),Te=new Hb(q,Nt,E,Mt,w,u),xe=new k1(q,Mt,F),At=new q1(X,at,F,E),Gt=new Wb(X,Fe,at),St=new sM(X,Fe,at),at.programs=kt.programs,q.capabilities=F,q.extensions=Fe,q.properties=lt,q.renderLists=Zt,q.shadowMap=xe,q.state=E,q.info=at}N!==Si&&(B=new cM(N,e.width,e.height,l,s,r));let le=new op(q,X);this.xr=le,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){let L=Fe.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){let L=Fe.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return yt},this.setPixelRatio=function(L){L!==void 0&&(yt=L,this.setSize(We,vt,!1))},this.getSize=function(L){return L.set(We,vt)},this.setSize=function(L,K,dt=!0){if(le.isPresenting){Me("WebGLRenderer: Can't change size while VR device is presenting.");return}We=L,vt=K,e.width=Math.floor(L*yt),e.height=Math.floor(K*yt),dt===!0&&(e.style.width=L+"px",e.style.height=K+"px"),B!==null&&B.setSize(e.width,e.height),this.setViewport(0,0,L,K)},this.getDrawingBufferSize=function(L){return L.set(We*yt,vt*yt).floor()},this.setDrawingBufferSize=function(L,K,dt){We=L,vt=K,yt=dt,e.width=Math.floor(L*dt),e.height=Math.floor(K*dt),this.setViewport(0,0,L,K)},this.setEffects=function(L){if(N===Si){we("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(L){for(let K=0;K<L.length;K++)if(L[K].isOutputPass===!0){Me("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}B.setEffects(L||[])},this.getCurrentViewport=function(L){return L.copy(bt)},this.getViewport=function(L){return L.copy(Kt)},this.setViewport=function(L,K,dt,ct){L.isVector4?Kt.set(L.x,L.y,L.z,L.w):Kt.set(L,K,dt,ct),E.viewport(bt.copy(Kt).multiplyScalar(yt).round())},this.getScissor=function(L){return L.copy(ge)},this.setScissor=function(L,K,dt,ct){L.isVector4?ge.set(L.x,L.y,L.z,L.w):ge.set(L,K,dt,ct),E.scissor(zt.copy(ge).multiplyScalar(yt).round())},this.getScissorTest=function(){return ee},this.setScissorTest=function(L){E.setScissorTest(ee=L)},this.setOpaqueSort=function(L){Lt=L},this.setTransparentSort=function(L){de=L},this.getClearColor=function(L){return L.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor(...arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha(...arguments)},this.clear=function(L=!0,K=!0,dt=!0){let ct=0;if(L){let ut=!1;if(Ct!==null){let jt=Ct.texture.format;ut=S.has(jt)}if(ut){let jt=Ct.texture.type,se=m.has(jt),Ft=Te.getClearColor(),Ot=Te.getClearAlpha(),Ut=Ft.r,me=Ft.g,Ie=Ft.b;se?(z[0]=Ut,z[1]=me,z[2]=Ie,z[3]=Ot,X.clearBufferuiv(X.COLOR,0,z)):(H[0]=Ut,H[1]=me,H[2]=Ie,H[3]=Ot,X.clearBufferiv(X.COLOR,0,H))}else ct|=X.COLOR_BUFFER_BIT}K&&(ct|=X.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),dt&&(ct|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ct!==0&&X.clear(ct)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(L){L.setRenderer(this),ot=L},this.dispose=function(){e.removeEventListener("webglcontextlost",Je,!1),e.removeEventListener("webglcontextrestored",ze,!1),e.removeEventListener("webglcontextcreationerror",qn,!1),Te.dispose(),Zt.dispose(),Yt.dispose(),lt.dispose(),Nt.dispose(),Mt.dispose(),Qt.dispose(),At.dispose(),kt.dispose(),le.dispose(),le.removeEventListener("sessionstart",Mi),le.removeEventListener("sessionend",Pi),Li.stop()};function Je(L){L.preventDefault(),qo("WebGLRenderer: Context Lost."),Z=!0}function ze(){qo("WebGLRenderer: Context Restored."),Z=!1;let L=at.autoReset,K=xe.enabled,dt=xe.autoUpdate,ct=xe.needsUpdate,ut=xe.type;he(),at.autoReset=L,xe.enabled=K,xe.autoUpdate=dt,xe.needsUpdate=ct,xe.type=ut}function qn(L){we("WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function fi(L){let K=L.target;K.removeEventListener("dispose",fi),gr(K)}function gr(L){io(L),lt.remove(L)}function io(L){let K=lt.get(L).programs;K!==void 0&&(K.forEach(function(dt){kt.releaseProgram(dt)}),L.isShaderMaterial&&kt.releaseShaderCache(L))}this.renderBufferDirect=function(L,K,dt,ct,ut,jt){K===null&&(K=pe);let se=ut.isMesh&&ut.matrixWorld.determinantAffine()<0,Ft=Gl(L,K,dt,ct,ut);E.setMaterial(ct,se);let Ot=dt.index,Ut=1;if(ct.wireframe===!0){if(Ot=ft.getWireframeAttribute(dt),Ot===void 0)return;Ut=2}let me=dt.drawRange,Ie=dt.attributes.position,Bt=me.start*Ut,De=(me.start+me.count)*Ut;jt!==null&&(Bt=Math.max(Bt,jt.start*Ut),De=Math.min(De,(jt.start+jt.count)*Ut)),Ot!==null?(Bt=Math.max(Bt,0),De=Math.min(De,Ot.count)):Ie!=null&&(Bt=Math.max(Bt,0),De=Math.min(De,Ie.count));let fe=De-Bt;if(fe<0||fe===1/0)return;Qt.setup(ut,ct,Ft,dt,Ot);let Et,ae=Gt;if(Ot!==null&&(Et=Ht.get(Ot),ae=St,ae.setIndex(Et)),ut.isMesh)ct.wireframe===!0?(E.setLineWidth(ct.wireframeLinewidth*Ae()),ae.setMode(X.LINES)):ae.setMode(X.TRIANGLES);else if(ut.isLine){let Ce=ct.linewidth;Ce===void 0&&(Ce=1),E.setLineWidth(Ce*Ae()),ut.isLineSegments?ae.setMode(X.LINES):ut.isLineLoop?ae.setMode(X.LINE_LOOP):ae.setMode(X.LINE_STRIP)}else ut.isPoints?ae.setMode(X.POINTS):ut.isSprite&&ae.setMode(X.TRIANGLES);if(ut.isBatchedMesh)if(Fe.get("WEBGL_multi_draw"))ae.renderMultiDraw(ut._multiDrawStarts,ut._multiDrawCounts,ut._multiDrawCount);else{let Ce=ut._multiDrawStarts,ie=ut._multiDrawCounts,Dn=ut._multiDrawCount,He=Ot?Ht.get(Ot).bytesPerElement:1,ii=lt.get(ct).currentProgram.getUniforms();for(let Vn=0;Vn<Dn;Vn++)ii.setValue(X,"_gl_DrawID",Vn),ae.render(Ce[Vn]/He,ie[Vn])}else if(ut.isInstancedMesh)ae.renderInstances(Bt,fe,ut.count);else if(dt.isInstancedBufferGeometry){let Ce=dt._maxInstanceCount!==void 0?dt._maxInstanceCount:1/0,ie=Math.min(dt.instanceCount,Ce);ae.renderInstances(Bt,fe,ie)}else ae.render(Bt,fe)};function so(L,K,dt,ct){ot!==null&&L.isNodeMaterial&&ot.setObject(ct,L),It===!0&&ue.setState(L,dt,!1),L.transparent===!0&&L.side===fs&&L.forceSinglePass===!1?(L.side=ui,L.needsUpdate=!0,Ws(L,K,ct),L.side=lr,L.needsUpdate=!0,Ws(L,K,ct),L.side=fs):Ws(L,K,ct)}this.compile=function(L,K,dt=null){dt===null&&(dt=L),ot!==null&&ot.renderStart(L,K,dt),k=Yt.get(dt),k.init(K),I.push(k),dt.traverseVisible(function(ut){ut.isLight&&ut.layers.test(K.layers)&&(k.pushLight(ut),ut.castShadow&&k.pushShadow(ut))}),L!==dt&&L.traverseVisible(function(ut){ut.isLight&&ut.layers.test(K.layers)&&(k.pushLight(ut),ut.castShadow&&k.pushShadow(ut))}),k.setupLights(),ot!==null&&ot.updateLights(k.state.lightsArray),V=this.localClippingEnabled,It=ue.init(this.clippingPlanes,V),It===!0&&ue.setGlobalState(this.clippingPlanes,K),ot!==null&&xe.render(k.state.shadowsArray,dt,K);let ct=new Set;return L.traverse(function(ut){if(!(ut.isMesh||ut.isPoints||ut.isLine||ut.isSprite))return;let jt=ut.material;if(jt)if(Array.isArray(jt))for(let se=0;se<jt.length;se++){let Ft=jt[se];so(Ft,dt,K,ut),ct.add(Ft)}else so(jt,dt,K,ut),ct.add(jt)}),k=I.pop(),ot!==null&&ot.renderEnd(),ct},this.compileAsync=function(L,K,dt=null){let ct=this.compile(L,K,dt);return new Promise(ut=>{function jt(){if(ct.forEach(function(se){let Ot=lt.get(se).currentProgram;(Ot===void 0||Ot.isReady())&&ct.delete(se)}),ct.size===0){ut(L);return}setTimeout(jt,10)}Fe.get("KHR_parallel_shader_compile")!==null?jt():setTimeout(jt,10)})};let _r=null;function zn(L){_r&&_r(L)}function Mi(){Li.stop()}function Pi(){Li.start()}let Li=new kg;Li.setAnimationLoop(zn),typeof self<"u"&&Li.setContext(self),this.setAnimationLoop=function(L){_r=L,le.setAnimationLoop(L),L===null?Li.stop():Li.start()},le.addEventListener("sessionstart",Mi),le.addEventListener("sessionend",Pi),this.render=function(L,K){if(K!==void 0&&K.isCamera!==!0){we("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Z===!0)return;ot!==null&&ot.renderStart(L,K);let dt=le.enabled===!0&&le.isPresenting===!0,ct=B!==null&&(Ct===null||dt)&&B.begin(q,Ct);if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(B===null||B.isCompositing()===!1)&&(le.cameraAutoUpdate===!0&&le.updateCamera(K),K=le.getCamera()),L.isScene===!0&&L.onBeforeRender(q,L,K,Ct),k=Yt.get(L,I.length),k.init(K),k.state.textureUnits=gt.getTextureUnits(),I.push(k),Pt.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),rt.setFromProjectionMatrix(Pt,Yi,K.reversedDepth),V=this.localClippingEnabled,It=ue.init(this.clippingPlanes,V),T=Zt.get(L,Y.length),T.init(),Y.push(T),le.enabled===!0&&le.isPresenting===!0){let se=q.xr.getDepthSensingMesh();se!==null&&Gs(se,K,-1/0,q.sortObjects)}Gs(L,K,0,q.sortObjects),T.finish(),ot!==null&&ot.updateLights(k.state.lightsArray),q.sortObjects===!0&&T.sort(Lt,de),Se=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,Se&&Te.addToRenderList(T,L),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),It===!0&&ue.beginShadows();let ut=k.state.shadowsArray;if(xe.render(ut,L,K),It===!0&&ue.endShadows(),(ct&&B.hasRenderPass())===!1){let se=T.opaque,Ft=T.transmissive;if(k.setupLights(),K.isArrayCamera){let Ot=K.cameras;if(Ft.length>0)for(let Ut=0,me=Ot.length;Ut<me;Ut++){let Ie=Ot[Ut];ro(se,Ft,L,Ie)}Se&&Te.render(L);for(let Ut=0,me=Ot.length;Ut<me;Ut++){let Ie=Ot[Ut];Zr(T,L,Ie,Ie.viewport)}}else Ft.length>0&&ro(se,Ft,L,K),Se&&Te.render(L),Zr(T,L,K)}Ct!==null&&_t===0&&(gt.updateMultisampleRenderTarget(Ct),gt.updateRenderTargetMipmap(Ct)),ct&&B.end(q),L.isScene===!0&&L.onAfterRender(q,L,K),Qt.resetDefaultState(),xt=-1,wt=null,I.pop(),I.length>0?(k=I[I.length-1],gt.setTextureUnits(k.state.textureUnits),It===!0&&ue.setGlobalState(q.clippingPlanes,k.state.camera)):k=null,Y.pop(),Y.length>0?T=Y[Y.length-1]:T=null,ot!==null&&ot.renderEnd()};function Gs(L,K,dt,ct){if(L.visible===!1)return;if(L.layers.test(K.layers)){if(L.isGroup)dt=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(K);else if(L.isLightProbeGrid)k.pushLightProbeGrid(L);else if(L.isLight)k.pushLight(L),L.castShadow&&k.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||L.intersectsFrustum(rt)){ct&&ce.setFromMatrixPosition(L.matrixWorld).applyMatrix4(Pt);let se=Mt.update(L),Ft=L.material;Ft.visible&&T.push(L,se,Ft,dt,ce.z,null,K)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||L.intersectsFrustum(rt))){let se=Mt.update(L),Ft=L.material;if(ct&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),ce.copy(L.boundingSphere.center)):(se.boundingSphere===null&&se.computeBoundingSphere(),ce.copy(se.boundingSphere.center)),ce.applyMatrix4(L.matrixWorld).applyMatrix4(Pt)),Array.isArray(Ft)){let Ot=se.groups;for(let Ut=0,me=Ot.length;Ut<me;Ut++){let Ie=Ot[Ut],Bt=Ft[Ie.materialIndex];Bt&&Bt.visible&&T.push(L,se,Bt,dt,ce.z,Ie,K)}}else Ft.visible&&T.push(L,se,Ft,dt,ce.z,null,K)}}let jt=L.children;for(let se=0,Ft=jt.length;se<Ft;se++)Gs(jt[se],K,dt,ct)}function Zr(L,K,dt,ct){let{opaque:ut,transmissive:jt,transparent:se}=L;k.setupLightsView(dt),It===!0&&ue.setGlobalState(q.clippingPlanes,dt),ct&&E.viewport(bt.copy(ct)),ut.length>0&&es(ut,K,dt),jt.length>0&&es(jt,K,dt),se.length>0&&es(se,K,dt),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function ro(L,K,dt,ct){if((dt.isScene===!0?dt.overrideMaterial:null)!==null)return;if(k.state.transmissionRenderTarget[ct.id]===void 0){let Bt=Fe.has("EXT_color_buffer_half_float")||Fe.has("EXT_color_buffer_float");k.state.transmissionRenderTarget[ct.id]=new vi(1,1,{generateMipmaps:!0,type:Bt?Qi:Si,minFilter:ur,samples:Math.max(4,F.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ye.workingColorSpace})}let jt=k.state.transmissionRenderTarget[ct.id],se=ct.viewport||bt;jt.setSize(se.z*q.transmissionResolutionScale,se.w*q.transmissionResolutionScale);let Ft=q.getRenderTarget(),Ot=q.getActiveCubeFace(),Ut=q.getActiveMipmapLevel();q.setRenderTarget(jt),q.getClearColor(je),Oe=q.getClearAlpha(),Oe<1&&q.setClearColor(16777215,.5),q.clear(),Se&&Te.render(dt);let me=q.toneMapping;q.toneMapping=ji;let Ie=ct.viewport;if(ct.viewport!==void 0&&(ct.viewport=void 0),k.setupLightsView(ct),It===!0&&ue.setGlobalState(q.clippingPlanes,ct),es(L,dt,ct),gt.updateMultisampleRenderTarget(jt),gt.updateRenderTargetMipmap(jt),Fe.has("WEBGL_multisampled_render_to_texture")===!1){let Bt=!1;for(let De=0,fe=K.length;De<fe;De++){let Et=K[De],{object:ae,geometry:Ce,material:ie,group:Dn}=Et;if(ie.side===fs&&ae.layers.test(ct.layers)){let He=ie.side;ie.side=ui,ie.needsUpdate=!0,Vl(ae,dt,ct,Ce,ie,Dn),ie.side=He,ie.needsUpdate=!0,Bt=!0}}Bt===!0&&(gt.updateMultisampleRenderTarget(jt),gt.updateRenderTargetMipmap(jt))}q.setRenderTarget(Ft,Ot,Ut),q.setClearColor(je,Oe),Ie!==void 0&&(ct.viewport=Ie),q.toneMapping=me}function es(L,K,dt){let ct=K.isScene===!0?K.overrideMaterial:null;for(let ut=0,jt=L.length;ut<jt;ut++){let se=L[ut],{object:Ft,geometry:Ot,group:Ut}=se,me=se.material;me.allowOverride===!0&&ct!==null&&(me=ct),Ft.layers.test(dt.layers)&&Vl(Ft,K,dt,Ot,me,Ut)}}function Vl(L,K,dt,ct,ut,jt){ot!==null&&ut.isNodeMaterial&&ot.setObject(L,ut),L.onBeforeRender(q,K,dt,ct,ut,jt),L.modelViewMatrix.multiplyMatrices(dt.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),ut.onBeforeRender(q,K,dt,ct,L,jt),ut.transparent===!0&&ut.side===fs&&ut.forceSinglePass===!1?(ut.side=ui,ut.needsUpdate=!0,q.renderBufferDirect(dt,K,ct,ut,L,jt),ut.side=lr,ut.needsUpdate=!0,q.renderBufferDirect(dt,K,ct,ut,L,jt),ut.side=fs):q.renderBufferDirect(dt,K,ct,ut,L,jt),L.onAfterRender(q,K,dt,ct,ut,jt)}function Ws(L,K,dt){K.isScene!==!0&&(K=pe);let ct=lt.get(L),ut=k.state.lights,jt=k.state.shadowsArray,se=ut.state.version,Ft=kt.getParameters(L,ut.state,jt,K,dt,k.state.lightProbeGridArray),Ot=kt.getProgramCacheKey(Ft),Ut=ct.programs;ct.environment=L.isMeshStandardMaterial||L.isMeshLambertMaterial||L.isMeshPhongMaterial?K.environment:null,ct.fog=K.fog;let me=L.isMeshStandardMaterial||L.isMeshLambertMaterial&&!L.envMap||L.isMeshPhongMaterial&&!L.envMap;ct.envMap=Nt.get(L.envMap||ct.environment,me),ct.envMapRotation=ct.environment!==null&&L.envMap===null?K.environmentRotation:L.envMapRotation,Ut===void 0&&(L.addEventListener("dispose",fi),Ut=new Map,ct.programs=Ut);let Ie=Ut.get(Ot);if(Ie!==void 0){if(ct.currentProgram===Ie&&ct.lightsStateVersion===se)return xr(L,Ft),Ie}else Ft.uniforms=kt.getUniforms(L),ot!==null&&L.isNodeMaterial&&ot.build(L,dt,Ft),L.onBeforeCompile(Ft,q),Ie=kt.acquireProgram(Ft,Ot),Ut.set(Ot,Ie),ct.uniforms=Ft.uniforms;let Bt=ct.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(Bt.clippingPlanes=ue.uniform),xr(L,Ft),ct.needsLights=ao(L),ct.lightsStateVersion=se,ct.needsLights&&(Bt.ambientLightColor.value=ut.state.ambient,Bt.lightProbe.value=ut.state.probe,Bt.sunLights.value=ut.state.sun,Bt.sunLightShadows.value=ut.state.sunShadow,Bt.directionalLights.value=ut.state.directional,Bt.directionalLightShadows.value=ut.state.directionalShadow,Bt.spotLights.value=ut.state.spot,Bt.spotLightShadows.value=ut.state.spotShadow,Bt.rectAreaLights.value=ut.state.rectArea,Bt.ltc_1.value=ut.state.rectAreaLTC1,Bt.ltc_2.value=ut.state.rectAreaLTC2,Bt.pointLights.value=ut.state.point,Bt.pointLightShadows.value=ut.state.pointShadow,Bt.hemisphereLights.value=ut.state.hemi,Bt.sunShadowMatrix.value=ut.state.sunShadowMatrix,Bt.sunShadowCascade.value=ut.state.sunShadowCascade,Bt.directionalShadowMatrix.value=ut.state.directionalShadowMatrix,Bt.spotLightMatrix.value=ut.state.spotLightMatrix,Bt.spotLightMap.value=ut.state.spotLightMap,Bt.pointShadowMatrix.value=ut.state.pointShadowMatrix),ct.lightProbeGrid=k.state.lightProbeGridArray.length>0,ct.currentProgram=Ie,ct.uniformsList=null,Ie}function ns(L){if(L.uniformsList===null){let K=L.currentProgram.getUniforms();L.uniformsList=Ya.seqWithValue(K.seq,L.uniforms)}return L.uniformsList}function xr(L,K){let dt=lt.get(L);dt.outputColorSpace=K.outputColorSpace,dt.batching=K.batching,dt.batchingColor=K.batchingColor,dt.instancing=K.instancing,dt.instancingColor=K.instancingColor,dt.instancingMorph=K.instancingMorph,dt.skinning=K.skinning,dt.morphTargets=K.morphTargets,dt.morphNormals=K.morphNormals,dt.morphColors=K.morphColors,dt.morphTargetsCount=K.morphTargetsCount,dt.numClippingPlanes=K.numClippingPlanes,dt.numIntersection=K.numClipIntersection,dt.vertexAlphas=K.vertexAlphas,dt.vertexTangents=K.vertexTangents,dt.toneMapping=K.toneMapping}function Hl(L,K){if(L.length===0)return null;if(L.length===1)return L[0].texture!==null?L[0]:null;D.setFromMatrixPosition(K.matrixWorld);for(let dt=0,ct=L.length;dt<ct;dt++){let ut=L[dt];if(ut.texture!==null&&ut.boundingBox.containsPoint(D))return ut}return null}function Gl(L,K,dt,ct,ut){K.isScene!==!0&&(K=pe),gt.resetTextureUnits();let jt=K.fog,se=ct.isMeshStandardMaterial||ct.isMeshLambertMaterial||ct.isMeshPhongMaterial?K.environment:null,Ft=Ct===null?q.outputColorSpace:Ct.isXRRenderTarget===!0?Ct.texture.colorSpace:Ye.workingColorSpace,Ot=ct.isMeshStandardMaterial||ct.isMeshLambertMaterial&&!ct.envMap||ct.isMeshPhongMaterial&&!ct.envMap,Ut=Nt.get(ct.envMap||se,Ot),me=ct.vertexColors===!0&&!!dt.attributes.color&&dt.attributes.color.itemSize===4,Ie=!!dt.attributes.tangent&&(!!ct.normalMap||ct.anisotropy>0),Bt=!!dt.morphAttributes.position,De=!!dt.morphAttributes.normal,fe=!!dt.morphAttributes.color,Et=ji;ct.toneMapped&&(Ct===null||Ct.isXRRenderTarget===!0)&&(Et=q.toneMapping);let ae=dt.morphAttributes.position||dt.morphAttributes.normal||dt.morphAttributes.color,Ce=ae!==void 0?ae.length:0,ie=lt.get(ct),Dn=k.state.lights;if(It===!0&&(V===!0||L!==wt)){let un=L===wt&&ct.id===xt;ue.setState(ct,L,un)}let He=!1;ct.version===ie.__version?(ie.needsLights&&ie.lightsStateVersion!==Dn.state.version||ie.outputColorSpace!==Ft||ut.isBatchedMesh&&ie.batching===!1||!ut.isBatchedMesh&&ie.batching===!0||ut.isBatchedMesh&&ie.batchingColor===!0&&ut._colorsTexture===null||ut.isBatchedMesh&&ie.batchingColor===!1&&ut._colorsTexture!==null||ut.isInstancedMesh&&ie.instancing===!1||!ut.isInstancedMesh&&ie.instancing===!0||ut.isSkinnedMesh&&ie.skinning===!1||!ut.isSkinnedMesh&&ie.skinning===!0||ut.isInstancedMesh&&ie.instancingColor===!0&&ut.instanceColor===null||ut.isInstancedMesh&&ie.instancingColor===!1&&ut.instanceColor!==null||ut.isInstancedMesh&&ie.instancingMorph===!0&&ut.morphTexture===null||ut.isInstancedMesh&&ie.instancingMorph===!1&&ut.morphTexture!==null||ie.envMap!==Ut||ct.fog===!0&&ie.fog!==jt||ie.numClippingPlanes!==void 0&&(ie.numClippingPlanes!==ue.numPlanes||ie.numIntersection!==ue.numIntersection)||ie.vertexAlphas!==me||ie.vertexTangents!==Ie||ie.morphTargets!==Bt||ie.morphNormals!==De||ie.morphColors!==fe||ie.toneMapping!==Et||ie.morphTargetsCount!==Ce||!!ie.lightProbeGrid!=k.state.lightProbeGridArray.length>0)&&(He=!0):(He=!0,ie.__version=ct.version);let ii=ie.currentProgram;He===!0&&(ii=Ws(ct,K,ut),ot&&ct.isNodeMaterial&&ot.onUpdateProgram(ct,ii,ie));let Vn=!1,wi=!1,Yn=!1,nn=ii.getUniforms(),xn=ie.uniforms;if(E.useProgram(ii.program)&&(Vn=!0,wi=!0,Yn=!0),ct.id!==xt&&(xt=ct.id,wi=!0),ie.needsLights){let un=Hl(k.state.lightProbeGridArray,ut);ie.lightProbeGrid!==un&&(ie.lightProbeGrid=un,wi=!0)}if(Vn||wt!==L){E.buffers.depth.getReversed()&&L.reversedDepth!==!0&&(L._reversedDepth=!0,L.updateProjectionMatrix()),nn.setValue(X,"projectionMatrix",L.projectionMatrix),nn.setValue(X,"viewMatrix",L.matrixWorldInverse);let ss=nn.map.cameraPosition;ss!==void 0&&ss.setValue(X,$t.setFromMatrixPosition(L.matrixWorld)),F.logarithmicDepthBuffer&&nn.setValue(X,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(ct.isMeshPhongMaterial||ct.isMeshToonMaterial||ct.isMeshLambertMaterial||ct.isMeshBasicMaterial||ct.isMeshStandardMaterial||ct.isShaderMaterial)&&nn.setValue(X,"isOrthographic",L.isOrthographicCamera===!0),wt!==L&&(wt=L,wi=!0,Yn=!0)}if(ie.needsLights&&(Dn.state.sunShadowMap.length>0&&nn.setValue(X,"sunShadowMap",Dn.state.sunShadowMap,gt),Dn.state.directionalShadowMap.length>0&&nn.setValue(X,"directionalShadowMap",Dn.state.directionalShadowMap,gt),Dn.state.spotShadowMap.length>0&&nn.setValue(X,"spotShadowMap",Dn.state.spotShadowMap,gt),Dn.state.pointShadowMap.length>0&&nn.setValue(X,"pointShadowMap",Dn.state.pointShadowMap,gt)),ut.isSkinnedMesh){nn.setOptional(X,ut,"bindMatrix"),nn.setOptional(X,ut,"bindMatrixInverse");let un=ut.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),nn.setValue(X,"boneTexture",un.boneTexture,gt))}ut.isBatchedMesh&&(nn.setOptional(X,ut,"batchingTexture"),nn.setValue(X,"batchingTexture",ut._matricesTexture,gt),nn.setOptional(X,ut,"batchingIdTexture"),nn.setValue(X,"batchingIdTexture",ut._indirectTexture,gt),nn.setOptional(X,ut,"batchingColorTexture"),ut._colorsTexture!==null&&nn.setValue(X,"batchingColorTexture",ut._colorsTexture,gt));let is=dt.morphAttributes;if((is.position!==void 0||is.normal!==void 0||is.color!==void 0)&&et.update(ut,dt,ii),(wi||ie.receiveShadow!==ut.receiveShadow)&&(ie.receiveShadow=ut.receiveShadow,nn.setValue(X,"receiveShadow",ut.receiveShadow)),(ct.isMeshStandardMaterial||ct.isMeshLambertMaterial||ct.isMeshPhongMaterial)&&ct.envMap===null&&K.environment!==null&&(xn.envMapIntensity.value=K.environmentIntensity),xn.dfgLUT!==void 0&&(xn.dfgLUT.value=J1()),wi){if(nn.setValue(X,"toneMappingExposure",q.toneMappingExposure),ie.needsLights&&Wl(xn,Yn),jt&&ct.fog===!0&&Dt.refreshFogUniforms(xn,jt),Dt.refreshMaterialUniforms(xn,ct,yt,vt,k.state.transmissionRenderTarget[L.id]),ie.needsLights&&ie.lightProbeGrid){let un=ie.lightProbeGrid;xn.probesSH.value=un.texture,xn.probesMin.value.copy(un.boundingBox.min),xn.probesMax.value.copy(un.boundingBox.max),xn.probesResolution.value.copy(un.resolution)}Ya.upload(X,ns(ie),xn,gt)}if(ct.isShaderMaterial&&ct.uniformsNeedUpdate===!0&&(Ya.upload(X,ns(ie),xn,gt),ct.uniformsNeedUpdate=!1),ct.isSpriteMaterial&&nn.setValue(X,"center",ut.center),nn.setValue(X,"modelViewMatrix",ut.modelViewMatrix),nn.setValue(X,"normalMatrix",ut.normalMatrix),nn.setValue(X,"modelMatrix",ut.matrixWorld),ct.uniformsGroups!==void 0){let un=ct.uniformsGroups;for(let ss=0,Xs=un.length;ss<Xs;ss++){let lo=un[ss];At.update(lo,ii),At.bind(lo,ii)}}return ii}function Wl(L,K){L.ambientLightColor.needsUpdate=K,L.lightProbe.needsUpdate=K,L.sunLights.needsUpdate=K,L.sunLightShadows.needsUpdate=K,L.directionalLights.needsUpdate=K,L.directionalLightShadows.needsUpdate=K,L.pointLights.needsUpdate=K,L.pointLightShadows.needsUpdate=K,L.spotLights.needsUpdate=K,L.spotLightShadows.needsUpdate=K,L.rectAreaLights.needsUpdate=K,L.hemisphereLights.needsUpdate=K}function ao(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return pt},this.getActiveMipmapLevel=function(){return _t},this.getRenderTarget=function(){return Ct},this.setRenderTargetTextures=function(L,K,dt){let ct=lt.get(L);ct.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,ct.__autoAllocateDepthBuffer===!1&&(ct.__useRenderToTexture=!1),lt.get(L.texture).__webglTexture=K,lt.get(L.depthTexture).__webglTexture=ct.__autoAllocateDepthBuffer?void 0:dt,ct.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,K){let dt=lt.get(L);dt.__webglFramebuffer=K,dt.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(L,K=0,dt=0){Ct=L,pt=K,_t=dt;let ct=null,ut=!1,jt=!1;if(L){let Ft=lt.get(L);if(Ft.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(X.FRAMEBUFFER,Ft.__webglFramebuffer),bt.copy(L.viewport),zt.copy(L.scissor),ne=L.scissorTest,E.viewport(bt),E.scissor(zt),E.setScissorTest(ne),xt=-1;return}else if(Ft.__webglFramebuffer===void 0)gt.setupRenderTarget(L);else if(Ft.__hasExternalTextures)gt.rebindTextures(L,lt.get(L.texture).__webglTexture,lt.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){let me=L.depthTexture;if(Ft.__boundDepthTexture!==me){if(me!==null&&lt.has(me)&&(L.width!==me.image.width||L.height!==me.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");gt.setupDepthRenderbuffer(L)}}let Ot=L.texture;(Ot.isData3DTexture||Ot.isDataArrayTexture||Ot.isCompressedArrayTexture)&&(jt=!0);let Ut=lt.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(Ut[K])?ct=Ut[K][dt]:ct=Ut[K],ut=!0):L.samples>0&&gt.useMultisampledRTT(L)===!1?ct=lt.get(L).__webglMultisampledFramebuffer:Array.isArray(Ut)?ct=Ut[dt]:ct=Ut,bt.copy(L.viewport),zt.copy(L.scissor),ne=L.scissorTest}else bt.copy(Kt).multiplyScalar(yt).floor(),zt.copy(ge).multiplyScalar(yt).floor(),ne=ee;if(dt!==0&&(ct=ht),E.bindFramebuffer(X.FRAMEBUFFER,ct)&&E.drawBuffers(L,ct),E.viewport(bt),E.scissor(zt),E.setScissorTest(ne),ut){let Ft=lt.get(L.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ft.__webglTexture,dt)}else if(jt){let Ft=K;for(let Ot=0;Ot<L.textures.length;Ot++){let Ut=lt.get(L.textures[Ot]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+Ot,Ut.__webglTexture,dt,Ft)}}else if(L!==null&&dt!==0){let Ft=lt.get(L.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Ft.__webglTexture,dt)}xt=-1};function oo(L){let K=lt.get(L);return(K.__readFormat!==L.format||K.__readType!==L.type)&&(K.__readFormat=L.format,K.__readType=L.type,K.__formatReadable=F.textureFormatReadable(L.format),K.__typeReadable=F.textureTypeReadable(L.type)),K}this.readRenderTargetPixels=function(L,K,dt,ct,ut,jt,se,Ft=0){if(!(L&&L.isWebGLRenderTarget)){we("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=lt.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&se!==void 0&&(Ot=Ot[se]),Ot){E.bindFramebuffer(X.FRAMEBUFFER,Ot);try{let Ut=L.textures[Ft],me=Ut.format,Ie=Ut.type;L.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Ft);let Bt=oo(Ut);if(Bt.__formatReadable===!1){we("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Bt.__typeReadable===!1){we("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=L.width-ct&&dt>=0&&dt<=L.height-ut&&X.readPixels(K,dt,ct,ut,Jt.convert(me),Jt.convert(Ie),jt)}finally{let Ut=Ct!==null?lt.get(Ct).__webglFramebuffer:null;E.bindFramebuffer(X.FRAMEBUFFER,Ut)}}},this.readRenderTargetPixelsAsync=async function(L,K,dt,ct,ut,jt,se,Ft=0){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ot=lt.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&se!==void 0&&(Ot=Ot[se]),Ot)if(K>=0&&K<=L.width-ct&&dt>=0&&dt<=L.height-ut){E.bindFramebuffer(X.FRAMEBUFFER,Ot);let Ut=L.textures[Ft],me=Ut.format,Ie=Ut.type;L.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Ft);let Bt=oo(Ut);if(Bt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Bt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let De=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,De),X.bufferData(X.PIXEL_PACK_BUFFER,jt.byteLength,X.STREAM_READ),X.readPixels(K,dt,ct,ut,Jt.convert(me),Jt.convert(Ie),0),X.bindBuffer(X.PIXEL_PACK_BUFFER,null);let fe=Ct!==null?lt.get(Ct).__webglFramebuffer:null;E.bindFramebuffer(X.FRAMEBUFFER,fe);let Et=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await cg(X,Et,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,De),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,jt),X.bindBuffer(X.PIXEL_PACK_BUFFER,null),X.deleteBuffer(De),X.deleteSync(Et),jt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,K=null,dt=0){let ct=Math.pow(2,-dt),ut=Math.floor(L.image.width*ct),jt=Math.floor(L.image.height*ct),se=K!==null?K.x:0,Ft=K!==null?K.y:0;gt.setTexture2D(L,0),X.copyTexSubImage2D(X.TEXTURE_2D,dt,0,0,se,Ft,ut,jt),E.unbindTexture()},this.copyTextureToTexture=function(L,K,dt=null,ct=null,ut=0,jt=0){let se,Ft,Ot,Ut,me,Ie,Bt,De,fe,Et=L.isCompressedTexture?L.mipmaps[jt]:L.image;if(dt!==null)se=dt.max.x-dt.min.x,Ft=dt.max.y-dt.min.y,Ot=dt.isBox3?dt.max.z-dt.min.z:1,Ut=dt.min.x,me=dt.min.y,Ie=dt.isBox3?dt.min.z:0;else{let xn=Math.pow(2,-ut);se=Math.floor(Et.width*xn),Ft=Math.floor(Et.height*xn),L.isDataArrayTexture?Ot=Et.depth:L.isData3DTexture?Ot=Math.floor(Et.depth*xn):Ot=1,Ut=0,me=0,Ie=0}ct!==null?(Bt=ct.x,De=ct.y,fe=ct.z):(Bt=0,De=0,fe=0);let ae=Jt.convert(K.format),Ce=Jt.convert(K.type),ie;K.isData3DTexture?(gt.setTexture3D(K,0),ie=X.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(gt.setTexture2DArray(K,0),ie=X.TEXTURE_2D_ARRAY):(gt.setTexture2D(K,0),ie=X.TEXTURE_2D),E.activeTexture(X.TEXTURE0),E.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,K.flipY),E.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),E.pixelStorei(X.UNPACK_ALIGNMENT,K.unpackAlignment);let Dn=E.getParameter(X.UNPACK_ROW_LENGTH),He=E.getParameter(X.UNPACK_IMAGE_HEIGHT),ii=E.getParameter(X.UNPACK_SKIP_PIXELS),Vn=E.getParameter(X.UNPACK_SKIP_ROWS),wi=E.getParameter(X.UNPACK_SKIP_IMAGES);E.pixelStorei(X.UNPACK_ROW_LENGTH,Et.width),E.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Et.height),E.pixelStorei(X.UNPACK_SKIP_PIXELS,Ut),E.pixelStorei(X.UNPACK_SKIP_ROWS,me),E.pixelStorei(X.UNPACK_SKIP_IMAGES,Ie);let Yn=L.isDataArrayTexture||L.isData3DTexture,nn=K.isDataArrayTexture||K.isData3DTexture;if(L.isDepthTexture){let xn=lt.get(L),is=lt.get(K),un=lt.get(xn.__renderTarget),ss=lt.get(is.__renderTarget);E.bindFramebuffer(X.READ_FRAMEBUFFER,un.__webglFramebuffer),E.bindFramebuffer(X.DRAW_FRAMEBUFFER,ss.__webglFramebuffer);for(let Xs=0;Xs<Ot;Xs++)Yn&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,lt.get(L).__webglTexture,ut,Ie+Xs),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,lt.get(K).__webglTexture,jt,fe+Xs)),X.blitFramebuffer(Ut,me,se,Ft,Bt,De,se,Ft,X.DEPTH_BUFFER_BIT,X.NEAREST);E.bindFramebuffer(X.READ_FRAMEBUFFER,null),E.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(ut!==0||L.isRenderTargetTexture||lt.has(L)){let xn=lt.get(L),is=lt.get(K);E.bindFramebuffer(X.READ_FRAMEBUFFER,tt),E.bindFramebuffer(X.DRAW_FRAMEBUFFER,st);for(let un=0;un<Ot;un++)Yn?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,xn.__webglTexture,ut,Ie+un):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,xn.__webglTexture,ut),nn?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,is.__webglTexture,jt,fe+un):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,is.__webglTexture,jt),ut!==0?X.blitFramebuffer(Ut,me,se,Ft,Bt,De,se,Ft,X.COLOR_BUFFER_BIT,X.NEAREST):nn?X.copyTexSubImage3D(ie,jt,Bt,De,fe+un,Ut,me,se,Ft):X.copyTexSubImage2D(ie,jt,Bt,De,Ut,me,se,Ft);E.bindFramebuffer(X.READ_FRAMEBUFFER,null),E.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else nn?L.isDataTexture||L.isData3DTexture?X.texSubImage3D(ie,jt,Bt,De,fe,se,Ft,Ot,ae,Ce,Et.data):K.isCompressedArrayTexture?X.compressedTexSubImage3D(ie,jt,Bt,De,fe,se,Ft,Ot,ae,Et.data):X.texSubImage3D(ie,jt,Bt,De,fe,se,Ft,Ot,ae,Ce,Et):L.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,jt,Bt,De,se,Ft,ae,Ce,Et.data):L.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,jt,Bt,De,Et.width,Et.height,ae,Et.data):X.texSubImage2D(X.TEXTURE_2D,jt,Bt,De,se,Ft,ae,Ce,Et);E.pixelStorei(X.UNPACK_ROW_LENGTH,Dn),E.pixelStorei(X.UNPACK_IMAGE_HEIGHT,He),E.pixelStorei(X.UNPACK_SKIP_PIXELS,ii),E.pixelStorei(X.UNPACK_SKIP_ROWS,Vn),E.pixelStorei(X.UNPACK_SKIP_IMAGES,wi),jt===0&&K.generateMipmaps&&X.generateMipmap(ie),E.unbindTexture()},this.initRenderTarget=function(L){lt.get(L).__webglFramebuffer===void 0&&gt.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?gt.setTextureCube(L,0):L.isData3DTexture?gt.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?gt.setTexture2DArray(L,0):gt.setTexture2D(L,0),E.unbindTexture()},this.resetState=function(){pt=0,_t=0,Ct=null,E.reset(),Qt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Ye._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ye._getUnpackColorSpace()}};var qg=new ci,Ih=new j,ts=class extends Sl{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new wn(t,3)),this.setAttribute("uv",new wn(e,2))}applyMatrix4(t){let e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new or(e,6,1);return this.setAttribute("instanceStart",new Zi(n,3,0)),this.setAttribute("instanceEnd",new Zi(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new or(e,6,1);return this.setAttribute("instanceColorStart",new Zi(n,3,0)),this.setAttribute("instanceColorEnd",new Zi(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new pl(t.geometry)),this}fromLineSegments(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ci);let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),qg.setFromBufferAttribute(e),this.boundingBox.union(qg))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yi),this.boundingBox===null&&this.computeBoundingBox();let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ih.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ih)),Ih.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Ih));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}};qt.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Wt},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};hi.line={uniforms:Dl.merge([qt.common,qt.fog,qt.line]),vertexShader:`
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
		`};var gs=class extends kn{constructor(t){super({type:"LineMaterial",uniforms:Dl.clone(hi.line.uniforms),vertexShader:hi.line.vertexShader,fragmentShader:hi.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0!==this.worldUnits&&(this.needsUpdate=!0),t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var lp=new on,Yg=new j,Jg=new j,Gn=new on,Wn=new on,_s=new on,cp=new j,up=new Ze,Xn=new Ml,Zg=new j,Ph=new ci,Lh=new yi,xs=new on,vs,Hr;function jg(i,t,e){return xs.set(0,0,-t,1).applyMatrix4(i.projectionMatrix),xs.multiplyScalar(1/xs.w),xs.x=Hr/e.width,xs.y=Hr/e.height,xs.applyMatrix4(i.projectionMatrixInverse),xs.multiplyScalar(1/xs.w),Math.abs(Math.max(xs.x,xs.y))}function Z1(i,t){let e=i.matrixWorld,n=i.geometry,s=n.attributes.instanceStart,r=n.attributes.instanceEnd,o=Math.min(n.instanceCount,s.count);for(let l=0,u=o;l<u;l++){Xn.start.fromBufferAttribute(s,l),Xn.end.fromBufferAttribute(r,l),Xn.applyMatrix4(e);let d=new j,f=new j;vs.distanceSqToSegment(Xn.start,Xn.end,f,d),f.distanceTo(d)<Hr*.5&&t.push({point:f,pointOnLine:d,distance:vs.origin.distanceTo(f),object:i,face:null,faceIndex:l,uv:null,uv1:null})}}function j1(i,t,e){let n=t.projectionMatrix,r=i.material.resolution,o=i.matrixWorld,l=i.geometry,u=l.attributes.instanceStart,d=l.attributes.instanceEnd,f=Math.min(l.instanceCount,u.count),b=-t.near;vs.at(1,_s),_s.w=1,_s.applyMatrix4(t.matrixWorldInverse),_s.applyMatrix4(n),_s.multiplyScalar(1/_s.w),_s.x*=r.x/2,_s.y*=r.y/2,_s.z=0,cp.copy(_s),up.multiplyMatrices(t.matrixWorldInverse,o);for(let g=0,M=f;g<M;g++){if(Gn.fromBufferAttribute(u,g),Wn.fromBufferAttribute(d,g),Gn.w=1,Wn.w=1,Gn.applyMatrix4(up),Wn.applyMatrix4(up),Gn.z>b&&Wn.z>b)continue;if(Gn.z>b){let H=Gn.z-Wn.z,D=(Gn.z-b)/H;Gn.lerp(Wn,D)}else if(Wn.z>b){let H=Wn.z-Gn.z,D=(Wn.z-b)/H;Wn.lerp(Gn,D)}Gn.applyMatrix4(n),Wn.applyMatrix4(n),Gn.multiplyScalar(1/Gn.w),Wn.multiplyScalar(1/Wn.w),Gn.x*=r.x/2,Gn.y*=r.y/2,Wn.x*=r.x/2,Wn.y*=r.y/2,Xn.start.copy(Gn),Xn.start.z=0,Xn.end.copy(Wn),Xn.end.z=0;let N=Xn.closestPointToPointParameter(cp,!0);Xn.at(N,Zg);let S=zf.lerp(Gn.z,Wn.z,N),m=S>=-1&&S<=1,z=cp.distanceTo(Zg)<Hr*.5;if(m&&z){Xn.start.fromBufferAttribute(u,g),Xn.end.fromBufferAttribute(d,g),Xn.start.applyMatrix4(o),Xn.end.applyMatrix4(o);let H=new j,D=new j;vs.distanceSqToSegment(Xn.start,Xn.end,D,H),e.push({point:D,pointOnLine:H,distance:vs.origin.distanceTo(D),object:i,face:null,faceIndex:g,uv:null,uv1:null})}}}var Gr=class extends Bn{constructor(t=new ts,e=new gs({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,s=new Float32Array(2*e.count);for(let o=0,l=0,u=e.count;o<u;o++,l+=2)Yg.fromBufferAttribute(e,o),Jg.fromBufferAttribute(n,o),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+Yg.distanceTo(Jg);let r=new or(s,2,1);return t.setAttribute("instanceDistanceStart",new Zi(r,1,0)),t.setAttribute("instanceDistanceEnd",new Zi(r,1,1)),this}raycast(t,e){let n=this.material.worldUnits,s=t.camera;if(s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.'),n===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;let r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;vs=t.ray;let o=this.matrixWorld,l=this.geometry,u=this.material;Hr=u.linewidth+r,l.boundingSphere===null&&l.computeBoundingSphere(),Lh.copy(l.boundingSphere).applyMatrix4(o);let d;if(n)d=Hr*.5;else{let b=Math.max(s.near,Lh.distanceToPoint(vs.origin));d=jg(s,b,u.resolution)}if(Lh.radius+=d,vs.intersectsSphere(Lh)===!1)return;l.boundingBox===null&&l.computeBoundingBox(),Ph.copy(l.boundingBox).applyMatrix4(o);let f;if(n)f=Hr*.5;else{let b=Math.max(s.near,Ph.distanceToPoint(vs.origin));f=jg(s,b,u.resolution)}Ph.expandByScalar(f),vs.intersectsBox(Ph)!==!1&&(n?Z1(this,e):j1(this,s,e))}onBeforeRender(t){let e=this.material.uniforms;e&&e.resolution&&(t.getViewport(lp),this.material.uniforms.resolution.value.set(lp.z,lp.w))}};var Dh=i=>i<90?Math.round(i)+" s":i<5400?Math.round(i/60)+" min":i<129600?Math.round(i/3600)+" h":Math.round(i/86400)+(window.__L==="en"?" days":window.__L==="ca"?" dies":" d\xEDas"),ys=i=>window.__L==="en"?i+" ago":(window.__L==="ca"?"fa ":"hace ")+i;function Kg(i){let t=window.__ROD__,{scene:e,camera:n,goal:s,cur:r,invalidate:o,K:l,CX:u,CY:d,mcs:f,q:b,list:g,clamp:M,norm:w,munis:N}=i,S=a=>document.querySelector(a),m=a=>String(a).replace(/[<>&"]/g,c=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[c]),z=(a,c)=>[(a-u)*l,(c-d)*l],H=.06,D=t.segs.map(a=>{let c=[],h=[0];for(let p=0;p<a.length;p+=2){let x=z(a[p],a[p+1]);c.length&&h.push(h[h.length-1]+Math.hypot(x[0]-c[c.length-1][0],x[1]-c[c.length-1][1])),c.push(x)}return{p:c,c:h,L:h[h.length-1]}}),T=t.stops.map(([a,c,h,p])=>({n:a,id:p,w:z(c,h),fams:new Set})),k=t.routes.map(([a,c,h])=>({s:a,l:c,c:h})),Y=new Map;(t.bus||[]).forEach(([a,c,h,p])=>{let x={days:new Set(a),name:c,stops:h,times:p};h.forEach((y,C)=>{if(C<h.length-1){let P=Y.get(y)||[];P.push([x,C]),Y.set(y,P)}})});function I(a,c,h){let p=ee(),x=t.days.indexOf(p.ymd),y=[];for(let[C,P]of Y.get(a)||[]){if(!C.days.has(x))continue;let R=C.times[P];if(R<c||R>h)continue;let U=C.stops[C.stops.length-1];y.push({sm:R,est:R,dl:0,fam:C.name,dest:T[U].n,destId:T[U].id,plat:"",cancel:!1,obs:"",live:!1,num:"",tid:"",tr:null,bus:!0,src:"bus",bstops:C.stops.slice(P)})}return y}let B=(a,c)=>{let h=a.match(/^R([A-Z]*)(\d*)(.*)$/),p=c.match(/^R([A-Z]*)(\d*)(.*)$/);return(h[1]||"").localeCompare(p[1]||"")||(+h[2]||0)-(+p[2]||0)||h[3].localeCompare(p[3])},q=[...new Set(k.map(a=>a.s))].sort(B),Z={};k.forEach(a=>{Z[a.s]||(Z[a.s]=a.c)});let ot=t.pats.map(([a,c,h])=>({stops:a,t:c,segs:h})),ht=t.trips.map(([a,c,h,p,x],y)=>({day:a,pat:ot[c],fam:k[h].s,c:k[h].c,t0:p,num:x,tid:t.tids[y]})),tt={};q.forEach(a=>tt[a]=new Set),ht.forEach(a=>{a.pat.segs.forEach(c=>tt[a.fam].add(c)),a.pat.stops.forEach(c=>T[c].fams.add(a.fam))});let st=t.days.map((a,c)=>ht.filter(h=>h.day===c)),pt=new Map(ht.map(a=>[a.tid,a])),_t=[124.87404143965449,479.9901289885639,124.62688710863031,249.99562739146893,486.739003764725,248.0364802782304,2037.1344308355726],Ct=Math.PI/180,xt=3.922*Ct,wt=-39.705*Ct;function bt(a,c){let h=a*Ct+xt,p=c*Ct,x=Math.cos(wt),y=Math.sin(wt),C=Math.cos(p),P=Math.cos(h)*C,R=Math.sin(h)*C,U=Math.sin(p),$=Math.atan2(R,P*x-U*y),v=Math.asin(U*x+P*y),_=Math.sqrt(2/(1+Math.cos($)*Math.cos(v))),A=_*Math.cos(v)*Math.sin($),O=_*Math.sin(v),[J,Q,G,nt,W,Vt,oe]=_t;return z((Q+J*A-W)*oe,(Vt-(nt-G*O))*oe)}let zt=new Map(T.map((a,c)=>[a.id,c]));function ne(a){if(a.g)return a.g;let c=[],h=[],p=[0],x=0;return a.segs.forEach((y,C)=>{let P=D[y];P.p.forEach((R,U)=>{C&&!U||(c.push(R),h.push(x+P.c[U]))}),x+=P.L,p.push(x)}),a.g={pts:c,cum:h,stopD:p}}function je(a,c,h,p){let x=1e18,y=0;for(let C=0;C+1<a.pts.length;C++){if(a.cum[C+1]<h||a.cum[C]>p)continue;let P=a.pts[C],R=a.pts[C+1],U=R[0]-P[0],$=R[1]-P[1],v=U*U+$*$||1e-9,_=Math.max(0,Math.min(1,((c[0]-P[0])*U+(c[1]-P[1])*$)/v)),A=P[0]+U*_-c[0],O=P[1]+$*_-c[1],J=A*A+O*O;J<x&&(x=J,y=a.cum[C]+_*(a.cum[C+1]-a.cum[C]))}return{d:y,err:Math.sqrt(x)}}function Oe(a,c){let h=0,p=a.cum.length-1;if(c<=0)return a.pts[0];if(c>=a.cum[p])return a.pts[p];for(;p-h>1;){let P=h+p>>1;a.cum[P]<=c?h=P:p=P}let x=(c-a.cum[h])/(a.cum[p]-a.cum[h]||1),y=a.pts[h],C=a.pts[p];return[y[0]+(C[0]-y[0])*x,y[1]+(C[1]-y[1])*x]}let We=a=>`${a.slice(6,8)}/${a.slice(4,6)}`,vt=new Intl.DateTimeFormat("es-ES",{timeZone:"Europe/Madrid",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hourCycle:"h23"});function yt(a){let c={};return vt.formatToParts(a).forEach(h=>c[h.type]=h.value),{ymd:c.year+c.month+c.day,min:+c.hour*60+ +c.minute+ +c.second/60}}let Lt=0,de=null,Kt=0,ge=0;function ee(){let a=yt(new Date);if(Lt===0&&de==null)return{...a,live:!0};let c=de==null?a.min:Kt+(Lt?(performance.now()-ge)/6e4*Lt:0);return{ymd:a.ymd,min:c,live:!1}}let rt=a=>(a=(Math.floor(a+1e-6)%1440+1440)%1440,String(Math.floor(a/60)).padStart(2,"0")+":"+String(a%60).padStart(2,"0")),It="https://rodalies.erathegameoftime.com",V={url:"",delays:new Map,tu:new Map,vp:new Map,alerts:[],ok:0,okVP:0,err:"",feedTs:0};try{let a=new URLSearchParams(location.search).get("rt");a&&localStorage.setItem("rod_rt",a);let c=localStorage.getItem("rod_rt");c&&/jhmuyo\.workers\.dev/.test(c)&&(c=It,localStorage.setItem("rod_rt",c)),V.url=c||It}catch{V.url=It}let Pt=(a,c)=>{let h=new AbortController,p=setTimeout(()=>h.abort(),12e3);return fetch(a+c,{cache:"no-store",signal:h.signal}).then(x=>{if(clearTimeout(p),!x.ok)throw new Error("HTTP "+x.status);return x.json()},x=>{throw clearTimeout(p),x})},$t="https://rodalies.jhmuyo.workers.dev";function ce(){return(V.url===It&&V.altUntil>Date.now()?$t:V.url).replace(/\/+$/,"")}let pe=a=>/^51/.test(a||""),Se={t0:Date.now(),done:!(document.documentElement.classList.contains("splash")||window.__natBoot)};function Ae(){if(Se.done)return;let a=[...Xe.st,...$e.st];if(!((V.ok||V.err||!V.url)&&a.every(h=>{let p=Ft.get(h);return p&&p.at>0&&!p.loading}))&&Date.now()-Se.t0<4e3){setTimeout(Ae,120);return}Se.done=!0;try{_e(!0)}catch{}requestAnimationFrame(()=>requestAnimationFrame(()=>{window.__splashOff&&window.__splashOff();let h=document.getElementById("splash");h&&(h.classList.add("out"),setTimeout(()=>h.remove(),400)),document.documentElement.classList.remove("splash")}))}setTimeout(Ae,150);async function X(){if(!V.url){gt();return}let a=ce();if(!X.busy){X.busy=1;try{await Qe(a)}finally{X.busy=0}}}async function Qe(a){let c=!V.adifAt||Date.now()-V.adifAt>11e4,h=_=>({status:"fulfilled",value:_}),p=_=>({status:"rejected",reason:_}),x,y,C,P,R,U=null;if(V.noLive&&Date.now()-V.noLive>30*6e4&&(V.noLive=0),!V.noLive)try{U=await Pt(a,"/live.json")}catch(_){if(/HTTP 404/.test(_.message))V.noLive=Date.now();else{if(V.url===It&&a!==$t)return V.altUntil=Date.now()+30*6e4,Qe($t);a===$t&&(V.altUntil=0),U={__fail:_}}}if(U&&U.__fail)x=y=C=P=R=p(U.__fail);else if(U&&U.v===1){let _=O=>U[O]&&!U[O].__err?h(U[O]):p(new Error(U[O]&&U[O].__err||"sin dato"));x=_("tu"),y=_("vp"),C=_("al"),P=_("nt"),R=c?_("ad"):p(0);let A=U.rep;A&&Array.isArray(A.items)&&!(V.repFresh&&Date.now()-V.repFresh<2e4)&&(V.rep=A.items,V.crowd=A.crowd||[],V.repSkew=(A.now||Date.now())-Date.now(),A.tipos&&(V.tipos=A.tipos),V.repOk=Date.now(),V.repFail=0)}else(!V.repFail||Date.now()-V.repFail>15*6e4)&&Pt(a,"/reports.json").then(_=>{_&&Array.isArray(_.items)?(V.rep=_.items,V.crowd=_.crowd||[],V.repSkew=(_.now||Date.now())-Date.now(),_.tipos&&(V.tipos=_.tipos),V.repOk=Date.now(),V.repFail=0):V.repFail=Date.now()}).catch(()=>{V.repFail=Date.now(),V.repOk=0}),[x,y,C,P,R]=await Promise.allSettled([Pt(a,"/trip_updates.json"),Pt(a,"/vehicle_positions.json"),Pt(a,"/alerts.json"),Pt(a,"/notices.json"),c?Pt(a,"/adif.json"):Promise.reject(0)]);if(R.status==="fulfilled"&&R.value&&R.value.ok?(V.adif=R.value,V.adifAt=Date.now()):c&&(V.adifAt=Date.now()-6e4),x.status==="fulfilled"){let _=new Map,A=new Map;for(let O of x.value.entity||[]){let J=O.tripUpdate;if(!J||!J.trip||!pe(J.trip.tripId))continue;let Q=J.trip.tripId,G=(J.stopTimeUpdate||[])[0],nt=J.delay;nt==null&&G&&(nt=(G.arrival||G.departure||{}).delay),J.trip.scheduleRelationship==="CANCELED"&&(nt="X"),nt!=null&&_.set(Q,nt),A.set(Q,{next:G?{sid:G.stopId,t:+((G.arrival||G.departure||{}).time||0)}:null})}V.delays=_,V.tu=A,V.ok=Date.now(),V.feedTs=+((x.value.header||{}).timestamp||0)*1e3,V.err=""}else V.err=x.reason&&x.reason.message||__t(0);if(y.status==="fulfilled"){let _=new Map,A=Date.now()/1e3;for(let O of y.value.entity||[]){let J=O.vehicle;if(!J||!J.trip||!pe(J.trip.tripId)||!J.position)continue;let Q=J.vehicle&&J.vehicle.label||"",G=Q.match(/PLATF\.\(([^)]+)\)/),nt=V.vp.get(J.trip.tripId),W={tid:J.trip.tripId,w:bt(+J.position.longitude,+J.position.latitude),st:J.currentStatus||"",sid:J.stopId||"",ts:+J.timestamp||A,label:Q,plat:G?G[1]:"",fam:(Q.split("-")[0]||"").trim(),num:J.vehicle&&J.vehicle.id||""};W.disp=nt?nt.disp:null,_.set(W.tid,W)}V.vp=_,V.okVP=Date.now()}let $=[];if(P.status==="fulfilled"&&Array.isArray(P.value.included)){V.okNotices=Date.now();for(let _ of P.value.included){let A=new Set((_.lines||[]).map(nt=>nt.id).filter(nt=>Z[nt])),O=(nt,W)=>{nt=nt||{},W=W||window.__L;let Vt=nt[W];return W==="en"&&Vt&&(Vt===nt.ca||/\b(els|amb|dels|per una|circulen|serveis|entre .{2,40} i )\b|ç|l·l/i.test(Vt))&&(Vt=""),(Vt||nt.es||nt.ca||"").trim()},J=nt=>[O(_.description,nt),O(_.title,nt)].sort((W,Vt)=>Vt.length-W.length)[0],Q=J(),G=J("es");Q&&$.push({id:"N"+_.externalId,fams:A,stops:new Set,txt:Q,es:G,when:(_.date||"")+"T"+(_.time||""),src:"Rodalies",core:_.core||""})}}if(C.status==="fulfilled"){let _=+((C.value.header||{}).timestamp||0);if(V.alertsTs=_,Date.now()/1e3-_<6*3600)for(let A of C.value.entity||[]){let O=A.alert;if(!O)continue;let J=new Set,Q=new Set;for(let oe of O.informedEntity||[])(oe.routeId||"").startsWith("51")&&J.add(oe.routeId.replace(/^51T\d+/,"")),oe.stopId&&zt.has(oe.stopId)&&Q.add(zt.get(oe.stopId));if(!J.size&&!Q.size)continue;let G=(O.descriptionText||O.headerText||{translation:[]}).translation||[],nt=((G.find(oe=>oe.language==="es")||G[0]||{}).text||"").trim(),W=+((O.activePeriod||[])[0]||{}).start||0,Vt=oe=>String(oe||"").toLowerCase().replace(/&#?\w+;/g,"").replace(/[^a-z0-9áéíóúàèòïüñç]+/g,"");$.some(oe=>oe.txt===nt||Vt(oe.txt)===Vt(nt)||oe.es&&Vt(oe.es)===Vt(nt))||$.push({id:A.id,fams:J,stops:Q,txt:nt,when:W?new Date(W*1e3).toISOString().slice(0,19):"",src:"Renfe"})}}if(V.adif&&Date.now()-V.adifAt<15*6e4)for(let[_,A]of(V.adif.items||[]).entries()){let O=(A.t?A.t+". ":"")+A.txt,J=new Set,Q=new Set,G=w(O);for(let nt of O.matchAll(/\b(R\d{1,2}[NS]?|R3a|RG1|RL\d|RT\d)\b/g))Z[nt[1]]&&J.add(nt[1]);T.forEach((nt,W)=>{nt.fams.size&&nt.n.length>4&&G.includes(w(nt.n))&&(Q.add(W),J.size||nt.fams.forEach(Vt=>J.add(Vt)))}),$.some(nt=>nt.txt===O)||$.push({id:"A"+_,fams:J,stops:Q,txt:O,when:V.adif.upd||"",src:"Adif",lvl:A.lvl})}let v=_=>String(_||"").replace(/&#x([0-9a-f]+);/gi,(A,O)=>String.fromCodePoint(parseInt(O,16))).replace(/&#(\d+);/g,(A,O)=>String.fromCodePoint(+O)).replace(/&nbsp;/g," ").replace(/&quot;/g,'"').replace(/&apos;|&#39;/g,"'").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/[\u200B-\u200D\uFEFF]/g,"").replace(/[\u0091\u0092]/g,"\u2019").replace(/[\u0093\u0094]/g,'"').replace(/\u0096|\u0097/g,"\u2013").replace(/\u0085/g,"\u2026").replace(/[\u0080-\u009F]/g,"").replace(/([A-Za-zÀ-ÿ])[\uFFFD\uFFFC](?=[A-Za-zÀ-ÿ])/g,"$1\u2019").replace(/\b([dlDL])\?(?=[aeiouhàèéíòóúAEIOUHÀÈÉÍÒÓÚ])/g,"$1\u2019").replace(/\s+/g," ").trim();for(let _ of $)if(_.txt=v(_.txt),_.es&&(_.es=v(_.es)),_.fams&&_.fams.size>3){let A=_.txt.match(/\bTren\s+(\d{4,6})\b/i);if(A){let O=null;try{O=Np(A[1])}catch{}O&&(_.fams=new Set([O]))}}if(P.status==="fulfilled"||C.status==="fulfilled"){V.alerts=$.sort((_,A)=>A.when>_.when?1:-1);try{ox()}catch{}}gt(),id(),De=0,o()}let Fe=()=>V.okVP&&Date.now()-V.okVP<10*6e4,F=()=>V.okVP&&Date.now()-V.okVP<9e4,E={at:0,v:!1},at=()=>{if(!Fe()||V.vp.size>0)return!1;if(Date.now()-E.at>3e4){E.at=Date.now();let a=yt(new Date),c=t.days.indexOf(a.ymd),h=0;if(c>=0)for(let p of st[c]){let x=a.min-p.t0;x>p.pat.t[1]+2&&x<p.pat.t[p.pat.t.length-2]-2&&h++}E.v=h>=6}return E.v},lt=()=>Fe()&&!at();function gt(){let a=S("#rtst"),c=S("#mode");if(c){let p=[...Dt].filter(P=>{bo("");let R=zi.m.get(P);return R&&R[0]>=2}),x=So(p),y=!!lt()&&ee().live&&!(p.length&&x.length===p.length);c.classList.toggle("on",y&&F()),c.classList.toggle("pre",!(y&&F())),c.textContent=y&&!F()?__t(1):y?__t(2):ft.cur?__t(3):__t(4),c.classList.toggle("past",!!ft.cur);let C=S("#rcgrab");if(C){let P=C.querySelector(".rdot");P||(P=document.createElement("b"),P.className="rdot",C.insertBefore(P,C.firstChild)),P.className="rdot "+(ft.cur?"past":y&&F()?"on":"pre"),P.title=c.textContent}c.title=ft.cur?`${__t(5)}${ft.cur.sn.t}${__t(6)}`:""}if(!a)return;V.url?V.err?a.textContent=__t(8)+V.err+__t(9):lt()?a.innerHTML=`${__t(10)}${V.vp.size}${__t(11)}${V.delays.size}${__t(12)}${new Date(V.okVP).toLocaleTimeString("es-ES",{hour:"2-digit",minute:"2-digit",second:"2-digit"})}`:at()?a.textContent=__t(13):a.textContent=__t(14):a.textContent=V.err||__t(7);let h=S("#rturl");h&&h._shown!==V.url&&(h.value=V.url,h._shown=V.url)}S("#rtsave").onclick=()=>{let a=S("#rturl").value.trim().replace(/\/+(alerts|trip_updates|vehicle_positions)\.json$/,"").replace(/\/+$/,"");if(a&&!/^https?:\/\//.test(a)&&(a="https://"+a),!a){V.err=__t(15),gt();return}V.url=a;try{localStorage.setItem("rod_rt",a)}catch{}V.ok=0,V.err="",gt(),X()},S("#rtoff").onclick=()=>{V.url=It;try{localStorage.removeItem("rod_rt")}catch{}f._h="",X()};let Nt=0;setInterval(()=>{let a=ln.size||ve;(document.hidden?!a||Date.now()-Nt<115e3:Date.now()-Nt<15e3)||(Nt=Date.now(),X())},2e4),setTimeout(()=>{Nt=Date.now(),X()},50),document.addEventListener("visibilitychange",()=>{!document.hidden&&Date.now()-Nt>15e3&&(Nt=Date.now(),X())});let ft={snap:null,key:""};function Mt(){let a=ee();if(a.live||!Ue.hoy||!Ue.hoy.snaps||Lt&&de==null)return null;let c=yt(new Date).min;if(a.min>c+1)return null;let h=null;for(let p of Ue.hoy.snaps){if(!p.d)continue;let x=nm(p.t);x<=a.min+1&&(!h||x>h.m)&&(h={m:x,sn:p})}return h&&a.min-h.m<=25?h:null}let kt=a=>{{let x=jh(a.num);if(x&&x.cx&&ee().live)return"X"}let c=ft.cur;if(c){if(c.sn.x&&c.sn.x.includes(a.tid))return"X";let x=c.sn.d[a.tid];return x??0}if(!lt())return null;let h=V.delays.get(a.tid),p=V.vp.get(a.tid);return h==="X"?h:p&&p.pre&&p.preDl>=1?Math.max(typeof h=="number"?h:0,p.preDl*60):h??null},Dt=new Set(q);try{let a=JSON.parse(localStorage.getItem("rod_lines")||"null");Array.isArray(a)&&a.some(c=>q.includes(c))&&(Dt.clear(),a.forEach(c=>q.includes(c)&&Dt.add(c)))}catch{}let Zt=new ts,Yt=new ts,ue=new gs({vertexColors:!0,linewidth:3.2,depthTest:!1,transparent:!0}),xe=new gs({color:16777215,linewidth:6,depthTest:!1,transparent:!0,opacity:.9}),Te=new Gr(Zt,ue),et=new Gr(Yt,xe);et.renderOrder=20,Te.renderOrder=21,Te.frustumCulled=et.frustumCulled=!1,e.add(et,Te);function Gt(a){let c=a[0]/l+u,h=a[1]/l+d;for(let p of N){if(p._bb===void 0){let y=1e9,C=1e9,P=-1e9,R=-1e9;for(let U of p.rings||[]){let $=U[0]||[];for(let v=0;v<$.length;v+=2)$[v]<y&&(y=$[v]),$[v]>P&&(P=$[v]),$[v+1]<C&&(C=$[v+1]),$[v+1]>R&&(R=$[v+1])}p._bb=[y,C,P,R]}let x=p._bb;if(!(c<x[0]||c>x[2]||h<x[1]||h>x[3]))for(let y of p.rings||[]){let C=y[0]||[],P=!1;for(let R=0,U=C.length,$=U-2;R<U;$=R,R+=2){let v=C[R+1],_=C[$+1];v>h!=_>h&&c<(C[$]-C[R])*(h-v)/(_-v)+C[R]&&(P=!P)}if(P)return!0}}return!1}let St=!1;function Jt(){St||!N.length||(St=!0,T.forEach(a=>{a.ext=!Gt(a.w)}),D.forEach(a=>{a.ext=!Gt(a.p[0])&&!Gt(a.p[a.p.length-1])&&!Gt(a.p[a.p.length>>1])}))}let Qt=()=>{let a=new Set(Dt.size<=2?Dt:[]);try{Et&&Et.fam&&a.add(Et.fam)}catch{}return a},At="";function he(){Jt();let a=[],c=[],h=new Set,p=new ye,x=new ye("#d2d0d0"),y=Qt();At=[...y].join();for(let $ of q)if(Dt.has($))for(let v of tt[$]){if(h.has(v))continue;h.add(v);let _=D[v].p;p.set(Z[$]),D[v].ext&&!y.has($)&&p.lerp(x,.55);for(let A=0;A+1<_.length;A++)a.push(_[A][0],_[A][1],H,_[A+1][0],_[A+1][1],H),c.push(p.r,p.g,p.b,p.r,p.g,p.b)}a.length||(a.push(0,0,-50,0,0,-50),c.push(0,0,0,0,0,0));let C=new ts,P=new ts;C.setPositions(a),C.setColors(c),P.setPositions(a);let R=Te.geometry,U=et.geometry;Te.geometry=C,et.geometry=P,R&&R.dispose(),U&&U.dispose(),o()}he();let le=a=>new kn({uniforms:{dpr:{value:Math.min(devicePixelRatio||1,2)},border:{value:new ye(a)}},vertexShader:"attribute float size; attribute vec3 fill; attribute float bw; varying vec3 vF; varying float vS; varying float vB; uniform float dpr; void main(){ vF=fill; vS=size*dpr; vB=bw*dpr; gl_PointSize=vS; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"uniform vec3 border; varying vec3 vF; varying float vS; varying float vB; void main(){ float r=length(gl_PointCoord*2.0-1.0)*vS*0.5; float R=vS*0.5; if(r>R) discard; float a=1.0-smoothstep(R-1.2,R,r); vec3 c = r>R-vB ? border : vF; gl_FragColor=vec4(c,a); }",transparent:!0,depthTest:!1}),Je=new En,ze=T.length,qn=new Float32Array(ze*3),fi=new Float32Array(ze*3),gr=new Float32Array(ze),io=new Float32Array(ze);T.forEach((a,c)=>{qn[c*3]=a.w[0],qn[c*3+1]=a.w[1],qn[c*3+2]=H,fi.set([1,1,1],c*3),gr[c]=6,io[c]=1.6}),Je.setAttribute("position",new hn(qn,3)),Je.setAttribute("fill",new hn(fi,3)),Je.setAttribute("size",new hn(gr,1)),Je.setAttribute("bw",new hn(io,1));let so=le("#1d2330"),_r=new Or(Je,so);_r.renderOrder=22,_r.frustumCulled=!1,e.add(_r);function zn(){let a=r.dist<45,c=Qt();T.forEach((h,p)=>{let x=[...h.fams].some(C=>Dt.has(C)),y=h.ext&&![...h.fams].some(C=>c.has(C))&&p!==ae;gr[p]=x?p===ae?13:y?3:a?8:5:0,io[p]=p===ae?3:1.6}),Je.attributes.size.needsUpdate=!0,Je.attributes.bw.needsUpdate=!0}let Mi=600,Pi=new En,Li=new Float32Array(Mi*3),Gs=new Float32Array(Mi*3),Zr=new Float32Array(Mi),ro=new Float32Array(Mi);Pi.setAttribute("position",new hn(Li,3)),Pi.setAttribute("fill",new hn(Gs,3)),Pi.setAttribute("size",new hn(Zr,1)),Pi.setAttribute("bw",new hn(ro,1));let es=new Float32Array(Mi);Pi.setAttribute("ang",new hn(es,1));let Vl=new kn({uniforms:{dpr:{value:Math.min(devicePixelRatio||1,2)},border:{value:new ye("#ffffff")}},vertexShader:"attribute float size; attribute vec3 fill; attribute float bw; attribute float ang; varying vec3 vF; varying float vS; varying float vB; varying float vA; uniform float dpr; void main(){ vF=fill; vS=size*dpr; vB=bw*dpr; vA=ang; gl_PointSize=vS; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"uniform vec3 border; varying vec3 vF; varying float vS; varying float vB; varying float vA; void main(){ vec2 p=gl_PointCoord*2.0-1.0; float r=length(p)*vS*0.5; float R=vS*0.5; if(r>R) discard; float a=1.0-smoothstep(R-1.2,R,r); vec3 c = r>R-vB ? border : vF; if(vA<50.0){ vec2 d=vec2(sin(vA),-cos(vA)); vec2 n=vec2(cos(vA),sin(vA)); float qy=-dot(p,d); float qx=dot(p,n); float w=(qy+0.66)/0.98*0.48; if(qy>-0.66 && qy<0.32 && abs(qx)<w) c=vec3(1.0); } else if(vA>70.0 && vA<80.0){ if(abs(p.y)<0.36 && abs(abs(p.x)-0.2)<0.1) c=vec3(1.0); } else if(vA>80.0 && vA<90.0){ if((abs(p.x)<0.11 && p.y>-0.5 && p.y<0.16) || length(p-vec2(0.0,0.38))<0.12) c=vec3(1.0); } gl_FragColor=vec4(c,a); }",transparent:!0,depthTest:!1}),Ws=new Or(Pi,Vl);Ws.renderOrder=24,Ws.frustumCulled=!1,e.add(Ws);let ns=new En,xr=new Float32Array(Mi*3),Hl=new Float32Array(Mi*3),Gl=new Float32Array(Mi),Wl=new Float32Array(Mi);ns.setAttribute("position",new hn(xr,3)),ns.setAttribute("fill",new hn(Hl,3)),ns.setAttribute("size",new hn(Gl,1)),ns.setAttribute("bw",new hn(Wl,1));let ao=new Or(ns,le("#ffffff"));ao.renderOrder=23,ao.frustumCulled=!1,e.add(ao);function oo(a,c){let h=D[a],p=c*h.L,x=0,y=h.c.length-1;for(;y-x>1;){let $=x+y>>1;h.c[$]<=p?x=$:y=$}let C=h.c[y]-h.c[x]||1,P=(p-h.c[x])/C,R=h.p[x],U=h.p[y];return[R[0]+(U[0]-R[0])*P,R[1]+(U[1]-R[1])*P]}let L=a=>a*a*(3-2*a)*.35+a*.65;function K(a,c){let h=a.pat.t,p=a.pat.stops.length,x=h[2*p-2];if(c<h[1]-2||c>x+1)return null;if(c<=h[1])return{w:T[a.pat.stops[0]].w,at:0,next:0,moving:!1};for(let y=0;y<p-1;y++){let C=h[2*y+1],P=h[2*y+2],R=h[2*y+3];if(c<=P){let U=P>C?(c-C)/(P-C):1;return{w:oo(a.pat.segs[y],L(M(U,0,1))),at:-1,next:y+1,prev:y,moving:!0}}if(c<=R)return{w:T[a.pat.stops[y+1]].w,at:y+1,next:y+1,moving:!1}}return{w:T[a.pat.stops[p-1]].w,at:p-1,next:p-1,moving:!1}}function dt(a){let c=t.days.indexOf(a.ymd),h=[];if(c<0)return{k:c,out:h};let p=(x,y)=>{for(let C of x){if(!Dt.has(C.fam))continue;let P=kt(C);if(P==="X")continue;let R=(P||0)/60,U=a.min+y-C.t0-R;if(U<-2||U>C.pat.t[C.pat.t.length-2]+1)continue;let $=K(C,U);$&&h.push({tr:C,p:$,rel:U,dl:R,live:P!=null})}};return p(st[c],0),c>0&&p(st[c-1],1440),{k:c,out:h}}function ct(a,c,h,p){let x=a.pat.stops[0],y=c.dep0,C=null,P=(U,$)=>{for(let v of U||[]){let _=v.pat.stops,A=_.length;if(_[A-1]!==x||v===a)continue;let O=v.t0+v.pat.t[2*(A-1)]-$;if(O>y+5||O<y-120)continue;let J=ne(v.pat),Q=je(J,c.w,-1,1e9);if(Q.err>.6)continue;let G=J.stopD,nt=v.pat.t,W=G.findIndex(te=>te>Q.d);W<0&&(W=A-1);let Vt=W===0?nt[1]:nt[2*W-1]+(G[W]>G[W-1]?(Q.d-G[W-1])/(G[W]-G[W-1]):1)*(nt[2*W]-nt[2*W-1]),oe=h-(v.t0+Vt-$);oe<-5||oe>120||(!C||Math.abs(oe)<Math.abs(C.prevDl))&&(C={prevTr:v,dPrev:Q.d,prevDl:oe,arrO:O+Math.max(0,oe)})}};if(P(st[p],0),p>0&&P(st[p-1],1440),!C)return{prevTr:null,preDl:0};let R=Math.max(y,C.arrO+3);return{...C,depEst:R,preDl:Math.max(0,R-y)}}function ut(a,c,h){let p=a.pat.t,x=c.length;if(!(h>=0))return h<0?c[0]:null;for(let y=0;y<x;y++)if(h<=p[2*y+1]){if(h>=p[2*y]||y===0)return c[y];let C=p[2*y-1],P=p[2*y];return c[y-1]+(c[y]-c[y-1])*(P>C?(h-C)/(P-C):1)}return c[x-1]}let jt=performance.now();function se(){let a=[],c=Date.now()/1e3,h=performance.now(),p=Math.min(1,(h-jt)/1e3);jt=h;for(let x of V.vp.values()){let y=pt.get(x.tid),C=y?y.fam:x.fam;if(C&&Z[C]&&!Dt.has(C))continue;let P=V.delays.get(x.tid),R=typeof P=="number"?P/60:0,U=Math.max(0,c-x.ts);x.mvTs!==x.ts&&((!x.mvW||Math.hypot(x.w[0]-x.mvW[0],x.w[1]-x.mvW[1])>.025)&&(x.mvW=x.w,x.mvAt=x.ts),x.mvTs=x.ts),x.still=x.ts-(x.mvAt||x.ts);let $=x.w,v=-1;if(y){let A=ne(y.pat),O=A.stopD;if(x.dObs==null||x.obsAt!==x.ts){let W=je(A,x.w,-1,1e9);x.dObs=W.d,x.err=W.err,x.obsAt=x.ts}let J=ee(),Q=t.days.indexOf(J.ymd),G=y.day===Q-1?1440:0,nt=y.t0+y.pat.t[1]-G;if(x.pre=J.min+R<nt-1&&(x.dObs>O[0]+.35||x.err>.6)&&!(x.st==="STOPPED_AT"&&x.sid===T[y.pat.stops[0]].id),x.dep0=nt,x.pre){if(x.atStop=-1,x.next=0,v=0,x.disp=null,x.prevAt!==x.ts&&(x.prevAt=x.ts,Object.assign(x,ct(y,x,J.min,Q))),x.prevTr){let W=ne(x.prevTr.pat);$=Oe(W,x.dPrev)}}else if(!F()&&y){let W=ee(),Vt=t.days.indexOf(W.ymd),oe=y.day===Vt-1?1440:0,te=K(y,W.min+oe-y.t0-R);te?($=te.w,x.est=!0,v=te.next,x.atStop=te.moving?-1:te.at,x.next=te.next,x.before=!1):(x.atStop=-1,x.next=-1)}else if(x.err<=.6){let W=O.findIndex(te=>te>x.dObs+.08);W<0&&(W=O.length-1);let Vt=O.reduce((te,tn,Ee)=>Math.abs(tn-x.dObs)<Math.abs(O[te]-x.dObs)?Ee:te,0);x.atStop=Math.abs(O[Vt]-x.dObs)<.16?Vt:-1;{let te=x.st==="STOPPED_AT"&&x.sid?y.pat.stops.findIndex(tn=>T[tn].id===x.sid):-1;te>=0&&Math.abs(O[te]-x.dObs)<.6&&(x.atStop=te,W<=te&&(W=Math.min(te+1,O.length-1)))}x.before=x.atStop>=0&&x.dObs<O[x.atStop]-.15,x.next=W,v=W;let oe=x.dObs;if(x.st==="STOPPED_AT"&&x.atStop>=0)oe=O[x.atStop];else if(W>0){let te=(y.pat.t[2*W]-y.pat.t[2*W-1])*60,tn=te>0?(O[W]-O[W-1])/te:0,Ee=ee(),be=t.days.indexOf(Ee.ymd),vn=y.day===be-1?1440:0,sn=ut(y,O,Ee.min+vn-y.t0-R),pn=x.dObs+tn*Math.min(U,60);sn!=null&&(pn=Math.min(pn,Math.max(x.dObs,sn))),oe=Math.max(x.dObs,Math.min(O[W]-.03,pn))}x.disp==null||Math.abs(x.disp-oe)>1.2?x.disp=oe:oe>x.disp&&(x.disp+=(oe-x.disp)*Math.min(1,p*1.5)),$=Oe(A,x.disp)}else if(x.err>2){let W=ee(),Vt=t.days.indexOf(W.ymd),oe=y.day===Vt-1?1440:0,te=K(y,W.min+oe-y.t0-R);te&&($=te.w,x.est=!0,v=te.next),x.atStop=-1,x.next=te?te.next:-1}else x.atStop=-1,x.next=-1}let _=x.pre?"":x.st==="STOPPED_AT"&&x.atStop>=0||x.atStop>=0&&x.still>30?"st":x.still>=90&&x.atStop<0?"via":"";a.push({tr:y,v:x,w:$,stop:_,p:{w:$},fam:C||"?",c:y?y.c:Z[C]||"#6b7385",dl:R,live:!0,real:!0,idx:v,age:U,cancel:P==="X"})}return a}let Ft=new Map,Ot=!1,Ut=!1,me="",Ie={st:-1},Bt=[],De=0,fe=null,Et=null,ae=-1,Ce=!1,ie=0,Dn="";function He(a){let c=Lt>0||!!fe,h=window.__mapHidden?1e3:Lt>0?50:c?200:250;if(a-De<h)return!1;De=a,[...Qt()].join()!==At&&(he(),zn());{let v=Mt(),_=v?v.sn.t:"";ft.cur=v,_!==ft.key&&(ft.key=_,gt()),!v&&!ee().live&&!Ue.at&&Xl()}let p=ee(),x=lt()&&p.live,y=x?{k:t.days.indexOf(p.ymd),out:se()}:dt(p);Bt=y.out;let C=new ye,P=0,R=0;for(let v of Bt){if(P>=Mi)break;Li[P*3]=v.p.w[0],Li[P*3+1]=v.p.w[1],Li[P*3+2]=H+.02;let _=null;if(v.real&&v.v.pre&&v.v.prevTr)_=Oe(ne(v.v.prevTr.pat),v.v.dPrev+.35);else if(v.real&&v.tr&&!v.v.pre&&v.v.err<=.6&&v.v.disp!=null&&!(v.v.st==="STOPPED_AT"&&v.v.atStop>=0))_=Oe(ne(v.tr.pat),v.v.disp+.35);else if(!v.real&&v.p.moving){let G=v.tr.pat.t,nt=v.p.prev,W=G[2*nt+1],Vt=G[2*nt+2],oe=Vt>W?(v.rel-W)/(Vt-W):1;_=oo(v.tr.pat.segs[nt],Math.min(1,L(M(oe,0,1))+.04))}let A=v.real?!!v.stop:!v.p.moving;if(v.broke=$p(v),v.broke)es[P]=85;else if(A)es[P]=75;else if(_){let G=jl(v.p.w),nt=jl(_),W=nt[0]-G[0],Vt=nt[1]-G[1];es[P]=Math.hypot(W,Vt)>.05?Math.atan2(W,-Vt):99}else es[P]=99;C.set(v.c||v.tr.c),Gs[P*3]=C.r,Gs[P*3+1]=C.g,Gs[P*3+2]=C.b;let O=v.tr?v.tr===Et:Et&&Et.vtid===v.v.tid;Zr[P]=O?22:r.dist<45?17:14,ro[P]=O?3.5:2.2;let J=v.real&&v.stop==="via"||!!v.broke,Q=v.cancel||v.broke?[.86,.15,.15]:v.dl>10?[.86,.15,.15]:v.dl>5?[.92,.48,.05]:v.dl>=1?[.98,.8,.08]:[.09,.64,.29];(v.live&&v.dl>=5||O||J)&&(xr[R*3]=v.p.w[0],xr[R*3+1]=v.p.w[1],xr[R*3+2]=H+.01,Hl.set(O?Q:J?[.86,.15,.15]:[.98,.45,.09],R*3),Gl[R]=Zr[P]+(O?16+5*Math.sin(a/220):J?10+3*Math.sin(a/400):8),Wl[R]=O?2:3,R++),P++}if(Pi.setDrawRange(0,P),ns.setDrawRange(0,R),["position","fill","size","bw"].forEach(v=>{Pi.attributes[v].needsUpdate=!0,ns.attributes[v].needsUpdate=!0}),Pi.attributes.ang.needsUpdate=!0,fe){let v=Bt.find(_=>_.tr===fe);if(v){let _=0,A=innerHeight,O=f.style.display!=="none"&&!f.classList.contains("min")?f.getBoundingClientRect():null,J=S("#rc").getBoundingClientRect();innerWidth<=640&&(O&&(_=O.bottom),A=Math.min(A,J.top));let Q=_+(A-_)/2,G=Q-innerHeight/2,nt=2*s.dist*Math.tan(17.5*Math.PI/180)/innerHeight;s.tx=v.p.w[0]-Math.sin(r.yaw)*G*nt,s.ty=v.p.w[1]+Math.cos(r.yaw)*G*nt}else lt()&&ee().live&&(fe=null)}let U=rt(Math.floor(p.min+1e-6));U!==Dn&&(Dn=U,S("#ctime").textContent=U),S("#ntr").textContent=String(Bt.length),S("#ntrl").textContent=x?__t(16):__t(17);{let v=Dt.size<q.length?[...Dt].sort(B).join(", "):"",_=S("#ccount"),A=ft.cur?`\u23EA ${Bt.length}${__t(18)}${ft.cur.sn.t} \xB7 ${Object.values(ft.cur.sn.d).filter(O=>O>=60).length}${__t(19)}`:!p.live&&p.min<yt(new Date).min-1&&!Lt?`${__t(20)}${Ue.hoy&&Ue.hoy.snaps&&Ue.hoy.snaps.some(O=>O.d)?`${__t(21)}${Ue.hoy.snaps.find(O=>O.d).t}`:__t(22)}`:x&&!F()?`\u{1F4F6} ${__t(1)} \xB7 ${__t(23)} ${ys(Math.round((Date.now()-V.okVP)/6e4)+" min")} <small class="nopos">\xB7 ${__t(24)}</small>`:x&&!Bt.some(O=>O.real)&&So(Dt).length?`\u{1F4E1} ${__t(25)}${v?` <small>\xB7 ${m(v)}</small>`:""} <small class="nopos">\xB7 ${__t(26)}</small>`:`\u{1F686} ${Bt.length} ${x?__t(27):__t(28)}${v?` <small>\xB7 ${m(v)}</small>`:""}${x&&V.okVP?(()=>{let O=Math.max(0,Math.round((Date.now()-V.okVP)/1e3));return` <small class="fresh${O<3?" new":""}">\u25CF ${__t(29)}${ys(O+" s")}</small>`})():""}`;_&&_._t!==A&&(_.innerHTML=A,_._t=A)}{let v=S("#p");v&&v.classList.toggle("ttf",!p.live||!!Lt)}let $=new Date;if(S("#cdate").textContent=p.live?__t(30):Lt?__t(31)+Lt:Ui?__t(32):__t(33),y.k<0?S("#src").innerHTML=`${__t(34)}${We(t.days[0])}${__t(35)}${We(t.days[t.days.length-1])}${__t(36)}`:x?S("#src").textContent=`${F()?__t(37):__t(38)}${ys(Dh(Math.max(0,Date.now()/1e3-Math.max(...[...V.vp.values()].map(v=>v.ts),0))))}`:at()&&p.live?S("#src").innerHTML=__t(39):S("#src").innerHTML=__t(40)+(V.url?__t(41):__t(42))+__t(43),p.live){let v=Math.round(p.min),_=S("#tsl");document.activeElement!==_&&(_.value=v<240?v+1440:v)}{let v=Et?String(Et.num||Et.vtid||""):"";v!==He._sk&&(He._sk=v,_e(!0))}return _e(),a-ie>3e3&&(Et||ae>=0||Ce||Ut||me)&&(ie=a,Re()),gt(),!0}let ii=-1,Vn=(()=>{try{return localStorage.getItem("rod_mun")==="1"}catch{return!1}})(),wi=[],Yn=document.createElement("button");Yn.type="button",Yn.id="mbtn",Yn.title=__t(44),Yn.innerHTML=__t(45),Yn.onclick=()=>{Vn=!Vn;try{localStorage.setItem("rod_mun",Vn?"1":"")}catch{}Yn.classList.toggle("on",Vn),o(),lo()},Yn.classList.toggle("on",Vn),document.body.appendChild(Yn);let nn=N.slice().sort((a,c)=>c.pop-a.pop);function xn(a){if(a._a)return a._a;let c=null,h=0;for(let p of a.rings||[]){let x=p[0];if(!x)continue;let y=0,C=0,P=0;for(let R=0,U=x.length;R<U;R+=2){let $=x[R],v=x[R+1],_=x[(R+2)%U],A=x[(R+3)%U],O=$*A-_*v;y+=O,C+=($+_)*O,P+=(v+A)*O}Math.abs(y)>h&&(h=Math.abs(y),c=[C/(3*y),P/(3*y)])}return a._a=c?[(c[0]-u)*l,(c[1]-d)*l]:[a.cx,a.cy]}let is=a=>a>=1e5?1:a>=2e4?2:a>=5e3?3:4,un=[0,7.6,6.7,6,5.4],ss=[0,17,15,13,12],Xs=a=>a.replace(/^(.*), (el|la|les|els|los|las)$/i,"$2 $1").replace(/^(.*), l'$/i,"l'$1");function lo(){let a=s.tilt<.06&&r.tilt<.08;Yn.classList.toggle("show",a);let c=0;if(Vn&&a){let h=[...document.querySelectorAll(".plab, .slab")].filter(y=>y.offsetParent!==null||y.style.display==="block").map(y=>{let C=y.getBoundingClientRect();return[C.left-2,C.top-2,C.right+2,C.bottom+2]}).filter(y=>y[2]>y[0]),p=r.dist,x=p>160?5e4:p>130?2e4:p>105?8e3:p>80?3e3:p>62?800:0;for(let y of nn){let C=is(y.pop);if(y.pop<x)break;let P=xn(y);if(Tn.set(P[0],P[1],H).project(n),Math.abs(Tn.x)>1.02||Math.abs(Tn.y)>1.02)continue;let R=(Tn.x*.5+.5)*innerWidth,U=(-Tn.y*.5+.5)*innerHeight,$=Xs(y.name),v=$.length*un[C]+8,_=ss[C],A=[R-v/2,U-_/2,R+v/2,U+_/2];if(h.some(J=>A[0]<J[2]&&J[0]<A[2]&&A[1]<J[3]&&J[1]<A[3]))continue;h.push(A);let O=wi[c]||(wi[c]=Object.assign(document.createElement("div"),{className:"mlab"}));O.isConnected||document.body.appendChild(O),O._n!==$&&(O.textContent=$,O._n=$),O._t!==C&&(O.className="mlab t"+C,O._t=C),O.style.transform=`translate(${Math.round(R)}px,${Math.round(U)}px) translate(-50%,-50%)`,O.style.display="block",c++}}for(;c<wi.length;c++)wi[c].style.display="none"}let Ue={at:0,hoy:null,ayer:null,err:""},Ip="https://raw.githubusercontent.com/elMonoAmelio/catalunya-survival/stats/";function Xl(){Date.now()-Ue.at<5*6e4||(Ue.at=Date.now(),Promise.all([__t(46),"ayer","hist","dias30"].map(a=>fetch(Ip+a+".json",{cache:"no-store"}).then(c=>c.ok?c.json():null).catch(()=>null)).map((a,c)=>c===3?a.then(h=>h||fetch(Ip+"dias.json",{cache:"no-store"}).then(p=>p.ok?p.json():null).catch(()=>null)):a)).then(([a,c,h,p])=>{Ue.hoy=a,Ue.ayer=c,Ue.hist=h,Ue.dias=p,Ue.tr=null,Ue.err=a?"":__t(47),(Ut||me)&&(f._h="",Re()),_e(!0)}))}function M_(a){let c={};for(let p of a&&a.snaps||[])for(let x of p.r||[]){let y=/^\d+[A-Z](\d+)/.exec(x);y&&(c[y[1]]=c[y[1]]||[]).push(Math.max(0,p.d&&p.d[x]||0)/60)}let h={};for(let p in c){let x=c[p].sort((y,C)=>y-C);h[p]=Math.round(x[x.length>>1])}return h}function ql(a){if(!Ue.tr){let h=new Map;for(let p of Ue.hist&&Ue.hist.days||[])h.set(p.day,p.tr);for(let p of[Ue.ayer,Ue.hoy])if(p&&p.day&&!h.has(p.day)){let x=M_(p);Object.keys(x).length&&h.set(p.day,x)}Ue.tr=h}if(a==="")return null;let c=[...Ue.tr.values()].map(h=>h[String(a)]).filter(h=>h!=null);return c.length?{n:c.length,late:c.filter(h=>h>=5).length,avg:c.reduce((h,p)=>h+p,0)/c.length}:null}let Pp=a=>new Date(+a.slice(0,4),+a.slice(4,6)-1,+a.slice(6,8)).getDay(),w_=a=>{let c=-1,h=9,p=Pp(a),x=y=>y===0||y===6?y:1;return t.days.forEach((y,C)=>{let P=Pp(y),R=y===a?0:P===p?1:x(P)===x(p)?2:9;R<h&&(h=R,c=C)}),h<9?c:-1},Lp=()=>{let a=new Map;for(let c of Ue.hist&&Ue.hist.days||[])c.cx&&a.set(c.day,new Set(c.cx.map(String)));return a},E_=()=>{let a=(Ue.hist&&Ue.hist.days||[]).find(c=>c.cx);return a?a.day:null};function Dp(a){ql("");let c=Lp(),h=0,p=0,x=0,y=0;for(let[C,P]of Ue.tr||[]){let R=w_(C.replace(/-/g,""));if(R<0)continue;let U=Kr(a,R);if(!U)continue;let $=String(U.num);if(c.get(C)&&c.get(C).has($)){y++,h++;continue}let v=P[$];v!=null&&(h++,x+=v,v>=5&&p++)}return{n:h,late:p,sum:x,nc:y}}let Yl=null,Np=a=>{if(!Yl){Yl=new Map;for(let c of st)for(let h of c||[])Yl.set(String(h.num),h.fam)}return Yl.get(String(a))};function Up(a){let c=(Ue.dias&&Ue.dias.days||[]).slice(-30);if(!c.length)return null;let h=new Map;for(let R of c)for(let[U,$]of Object.entries(R.lines||{})){let v=h.get(U)||{n:0,ok:0,s:0,max:0,days:0};v.n+=$.n,v.ok+=$.ok,v.s+=$.avg*$.n,v.max=Math.max(v.max,$.max||0),v.days++,h.set(U,v)}let p=h.get(a);if(!p||p.n<30)return null;let x=[...h.entries()].filter(([R,U])=>Z[R]&&U.n>=30).sort((R,U)=>R[1].ok/R[1].n-U[1].ok/U[1].n),y=x.findIndex(([R])=>R===a),C=Lp(),P=0;for(let R of C.values())for(let U of R)Np(U)===a&&P++;return{pct:p.ok/p.n*100,avg:p.s/p.n,max:p.max,days:p.days,pos:y+1,of:x.length,nc:P,since:E_()}}let T_=a=>a?`${+a.slice(8,10)}/${+a.slice(5,7)}`:"",Jh=a=>a>=60?`${Math.floor(a/60)} h ${String(Math.round(a%60)).padStart(2,"0")} min`:`${Math.round(a)} min`,ws=a=>a>=90?"g":a>=80?"y":a>=65?"w":"b",Es={g:"#16a34a",y:"#eab308",w:"#ea7a0c",b:"#dc2626"},Op=a=>a>10?Es.b:a>5?Es.w:a>=1?Es.y:Es.g,Ts=a=>(a>=.05?"+":"")+(Math.round(a*10)/10).toString().replace(".",",")+" min";function co(a,c,h){return`<div class="sbars">${a.map(p=>`<div class="sbar" title="${m(p.tip||"")}"><span class="sl">${p.lab}</span><span class="st"><i style="width:${Math.max(2,Math.round(p.w*100))}%;background:${p.c}"></i></span><b class="sv" style="color:${p.c===Es.y?"var(--svy,#a16207)":p.c===Es.w?"var(--svw,#c2410c)":p.c}">${p.val}</b></div>`).join("")}</div>`}function A_(a){if(a=(a||[]).filter(G=>G.n>=10),!a||a.length<2){let G=a&&a[0];return G?`${__t(48)}${G.t}: ${Math.round(G.ok/G.n*100)}${__t(49)}${G.n}${__t(50)}`:__t(51)}let c=G=>{let[nt,W]=G.t.split(":").map(Number);return nt*60+W},h=c(a[0]),p=Math.max(h+60,c(a[a.length-1])),x=300,y=112,C=24,P=G=>C+(G-h)*(x-C-8)/(p-h),R=G=>8+(100-G)/100*(y-26),U=G=>G.n?G.ok/G.n*100:100,$=a.map(G=>[P(c(G)),R(U(G)),G]),v=G=>G[0].toFixed(1)+","+G[1].toFixed(1),_=[],A=[];$.forEach((G,nt)=>{nt&&c(G[2])-c($[nt-1][2])>45&&(_.push(A),A=[]),A.push(G)}),_.push(A);let O=$[$.length-1],J=[];for(let G=Math.ceil(h/180)*3;G*60<p;G+=3)G*60>h+20&&J.push(G);let Q=Math.round(a.reduce((G,nt)=>G+nt.ok,0)/Math.max(1,a.reduce((G,nt)=>G+nt.n,0))*100);return`<svg class="schart" viewBox="0 0 ${x} ${y}${__t(52)}${[100,75,50,25].map(G=>`<line x1="${C}" x2="${x-4}" y1="${R(G)}" y2="${R(G)}" class="gl"/><text x="2" y="${R(G)+3}" class="ax">${G}%</text>`).join("")}
      <line x1="${C}" x2="${x-4}" y1="${R(Q)}" y2="${R(Q)}" class="avg"/>
      ${_.filter(G=>G.length).map(G=>`<polygon points="${v([G[0][0],R(0)])} ${G.map(v).join(" ")} ${v([G[G.length-1][0],R(0)])}" class="ar"/><polyline points="${G.map(v).join(" ")}" class="ln"/>`).join("")}
      ${$.map(([G,nt,W])=>`<circle cx="${G.toFixed(1)}" cy="${nt.toFixed(1)}" r="6" class="hit"><title>${W.t} \xB7 ${Math.round(U(W))}${__t(53)}${W.n}${__t(54)}${W.d5}${__t(55)}${Ts(W.avg)}${W.nd?` \xB7 ${W.nd}${__t(56)}`:""}</title></circle>`).join("")}
      <circle cx="${O[0].toFixed(1)}" cy="${O[1].toFixed(1)}" r="3.5" class="pt"/><text x="${Math.min(O[0],x-30).toFixed(1)}" y="${(O[1]-7).toFixed(1)}" class="lv" text-anchor="middle">${Math.round(U(O[2]))}%</text>
      ${J.map(G=>`<text x="${P(G*60).toFixed(1)}" y="${y-4}" class="ax" text-anchor="middle">${String(G).padStart(2,"0")}h</text>`).join("")}
      <text x="${C}" y="${y-4}" class="ax">${a[0].t}</text></svg><small class="snote">${__t(57)} (${Q}%)</small>`}function C_(){Xl();let a=ee(),c=Bt.filter(P=>P.real&&lt()&&a.live),h=c.filter(P=>V.delays.has(P.v.tid)),p=h.length,x=c.length-p,y=`<div class="tc sts" style="--c:#1d2330"><button class="x" data-cx>\xD7</button><h3 class="ilt sm">${__t(58)}</h3>`;if(p){let P=h.filter(nt=>nt.dl<3).length,R=h.filter(nt=>nt.dl>=5).length,U=h.filter(nt=>nt.stop==="via").length,$=Math.round(P/p*100);y+=`${__t(59)}${p}${__t(60)}${x?` \xB7 ${x}${__t(65)}`:""}</small><div class="kpis">
        <div class="kpi ${ws($)}"><b>${$}${__t(61)}${ws(100-R/p*100*2)}" title="${Math.round(R/p*100)}${__t(62)}${R}${__t(63)}${U===0?"g":U<=2?"w":"b"}"><b>${U}${__t(64)}`;let v=new Map;h.forEach(nt=>{let W=nt.fam,Vt=v.get(W)||{n:0,ok:0,sum:0};Vt.n++,Vt.ok+=nt.dl<3,Vt.sum+=Math.max(0,nt.dl),v.set(W,Vt)});let _=[...v].filter(([nt])=>Z[nt]).sort((nt,W)=>nt[1].ok/nt[1].n-W[1].ok/W[1].n||W[1].sum/W[1].n-nt[1].sum/nt[1].n),A=_.filter(([,nt])=>nt.ok<nt.n),O=_.filter(([,nt])=>nt.ok===nt.n);y+=`${__t(66)}`+(A.length?"":__t(67))+co(A.map(([nt,W])=>({lab:Mn(nt),w:W.ok/W.n,c:Es[ws(W.ok/W.n*100)],val:`${Math.round(W.ok/W.n*100)}% <small>${Ts(W.sum/W.n)}</small>`,tip:`${nt}: ${W.ok}${__t(68)}${W.n}${__t(69)}${Ts(W.sum/W.n)}`})))+(O.length?`${__t(70)}${O.map(([nt])=>Mn(nt)).join(" ")}</p>`:"");let J=new Map;h.forEach(nt=>{if(!nt.tr||nt.v.next==null||nt.v.next<0||nt.v.pre)return;let W=nt.tr.pat.stops[nt.v.next],Vt=J.get(W)||{n:0,sum:0};Vt.n++,Vt.sum+=Math.max(0,nt.dl),J.set(W,Vt)});let Q=[...J].filter(([,nt])=>nt.sum/nt.n>=1).sort((nt,W)=>W[1].sum/W[1].n-nt[1].sum/nt[1].n).slice(0,8),G=Q.length?Q[0][1].sum/Q[0][1].n:1;y+=`${__t(71)}`+(Q.length?co(Q.map(([nt,W])=>({lab:`<span class="sn" data-gs="${nt}">${m(T[nt].n)}</span>`,w:W.sum/W.n/G,c:Op(W.sum/W.n),val:`${Ts(W.sum/W.n)} <small>${W.n} ${W.n===1?"tren":__t(72)}</small>`,tip:`${T[nt].n}: ${W.n}${__t(73)}${Ts(W.sum/W.n)}${__t(74)}`}))):__t(75))}else y+=`${__t(76)}`;let C=Ue.hoy;y+=`<button type="button" class="hmore" data-cols>${gn.on?__t(77):__t(78)}</button>`;{bo("");let P=[...zi.m].filter(([R,U])=>Z[R]&&U[0]>=3).map(([R,U])=>[R,U[1]/U[0]]).sort((R,U)=>R[1]-U[1]);P.length&&!lt()?y+=`<h4>${__t(79)}</h4><small class="snote">${__t(80)}</small>`:P.length&&(y+=`${__t(81)}`+co(P.slice(0,8).map(([R,U])=>({lab:Mn(R),w:U,c:Es[ws(U*100)],val:`${Math.round(U*100)}%`,tip:`${R}: ${Math.round(U*100)}${__t(82)}`}))))}{let P=(A,O)=>{let J=(A&&A.snaps||[]).filter(nt=>nt.n&&(!O||nt.t<=O)),Q=J.reduce((nt,W)=>nt+W.n,0),G=J.reduce((nt,W)=>nt+W.ok,0);return Q?G/Q*100:null},R=(Ue.hoy&&Ue.hoy.snaps||[]).filter(A=>A.n).map(A=>A.t).pop(),U=P(Ue.hoy),$=P(Ue.ayer,R),v=U!=null?Math.round(U):null,_=$!=null?Math.round($):null;U!=null&&(y+=`${__t(83)}${ws(U)}">${Math.round(U)}${__t(84)}${$!=null?`<span>${R?__t(85):__t(86)} <b class="${ws($)}">${_} %</b></span><span>${v>_?__t(87):v<_?__t(88):__t(89)}</span>`:""}</div>`)}if(y+=`${__t(90)}`,C&&C.snaps){y+=A_(C.snaps);let P=Object.entries(C.st||{}).map(([$,v])=>[zt.get($),v]).filter(([$,v])=>$!=null&&v.n>=3).map(([$,v])=>[$,v.sum/v.n/60,v]).filter($=>$[1]>=1).sort(($,v)=>v[1]-$[1]).slice(0,8);if(P.length){let $=P[0][1];y+=`${__t(91)}`+co(P.map(([v,_,A])=>({lab:`<span class="sn" data-gs="${v}">${m(T[v].n)}</span>`,w:_/$,c:Op(_),val:`${Ts(_)}${__t(92)}${Math.round(A.max/60)}</small>`,tip:`${T[v].n}: ${A.n}${__t(93)}${A.d5}${__t(94)}${Math.round(A.max/60)} min`})))}let R=Object.entries(C.lines||{}).filter(([$,v])=>Z[$]&&v.n>=3).sort(($,v)=>$[1].ok/$[1].n-v[1].ok/v[1].n);R.length&&(y+=`${__t(95)}`+co(R.map(([$,v])=>({lab:Mn($),w:v.ok/v.n,c:Es[ws(v.ok/v.n*100)],val:`${Math.round(v.ok/v.n*100)}% <small>${Ts(v.sum/v.n/60)}</small>`,tip:`${$}${__t(96)}${Math.round(v.ok/v.n*100)}${__t(97)}${Math.round(v.max/60)} min`}))));let U=C.upd?(Date.now()-Date.parse(C.upd))/6e4:0;y+=`<small class="snote">${U>40?`${__t(99)}${ys(U<90?Math.round(U)+" min":U<2160?Math.round(U/60)+" h":Math.round(U/1440)+(window.__L==="en"?" days":window.__L==="ca"?" dies":" d\xEDas"))}${__t(100)}`:""}${__t(98)}${m((C.upd||"").slice(11,16))} \xB7 ${(C.note||"").includes("Solo cuentan")?__t(101):__t(102)}</small>`}else y+=`<p class="snote">${Ue.at?__t(103):__t(104)}</p>`;return y+"</div>"}function R_(a){let c=ee(),h=Bt.filter(_=>(_.fam||_.tr&&_.tr.fam)===a),p=h.filter(_=>_.real),x=h.length,y=h.filter(_=>_.dl>=5).length,C=h.filter(_=>_.dl<3).length,P=h.filter(_=>_.stop==="via"||_.broke).length,R=V.alerts.filter(_=>_.fams.has(a)),U=_=>{let A=_.tr;if(!A)return"";let O=_.v;if(_.real&&O){let Q=O.next>=0?T[A.pat.stops[O.next]].n:"";return O.atStop>=0?`${__t(105)}${T[A.pat.stops[O.atStop]].n}`:Q?`${__t(106)}${Q}`:""}let J=_.p;return J&&J.next!=null&&J.next>=0?`${__t(106)}${T[A.pat.stops[J.next]].n}`:""},$=h.slice().sort((_,A)=>A.dl-_.dl).slice(0,40).map(_=>{let A=_.tr;return`<li class="go${po({num:A?A.num:_.v.num,tid:A?A.tid:_.v.tid})?" sel":""}" data-gt="${m(A?A.num:_.v.num)}|${m(_.real?_.v.tid:A?A.tid:"")}"><b>${m(A?A.num:_.v.num)}</b><span>${A?Ni(T[A.pat.stops[A.pat.stops.length-1]].n,a):""} <small>${m(U(_))}</small></span>${_.dl>=1?`<em class="dl ${$i(_.dl)}">+${Math.round(_.dl)}</em>`:__t(107)}</li>`}).join(""),v=bo(a);return`<div class="tc sts" style="--c:${Z[a]||"#1d2330"}"><button class="x" data-cx>\xD7</button><h3 class="ilt sm">${Mn(a)} ${__t(108)}</h3><div class="seg2 iseg lseg">${[["now",__t(109)],["30",__t(110)],["trips",__t(111)]].map(([_,A])=>`<button type="button" data-lseg="${_}" class="${Zl.v===_?"on":""}">${A}</button>`).join("")}</div>${Zl.v!=="now"?P_(a,Zl.v):`<small>${c.live?`${__t(115)}${x}${__t(116)}${p.length<x?` (${p.length}${__t(117)}`:""}`:`${__t(118)}${rt(c.min)}`}</small>
      <div class="kpis"><div class="kpi ${x?ws(C/x*100):""}"><b>${x?Math.round(C/x*100)+"%":"\u2014"}${__t(112)}${y?y/Math.max(1,x)>.2?"b":"w":"g"}"><b>${y}${__t(113)}${P?"b":"g"}"><b>${P}${__t(114)}${R.length?L_(R):__t(119)}${v<.7?`${__t(120)}${Math.round(v*100)}${__t(121)}`:""}
      <small style="margin-top:6px">${__t(122)}</small><ol class="${Jl.v?"":"lshort"}">${$||__t(123)}</ol>${h.length>6?`<button type="button" class="hmore" data-lmore>${Jl.v?__t(124):`\u25BE ${__t(125)} ${Math.min(40,h.length)} ${__t(72)}`}</button>`:""}
      <div class="rtb"><button type="button" data-share>\u{1F4E4} Compartir estado</button></div>`}</div>`}let Jl={v:!1},Zl={v:"now"};function I_(a){let c=Im(a,30);if(!c.length)return`<h4>${__t(111)}</h4><p class="snote">${__t(126)}</p>`;let h=c.filter(P=>P.dl!=null),p=h.filter(P=>P.dl>=5).length,x=h.reduce((P,R)=>P+R.dl,0),y=P=>{let R=zt.get(P);return R!=null?T[R].n.replace(/^Barcelona[ -]+(?=\S)/,""):""},C=c.slice().sort((P,R)=>R.t0-P.t0).slice(0,5).map(P=>`<li><b>${+P.d.slice(6,8)}/${+P.d.slice(4,6)}</b><span>${P.ad!=null?rt(P.ad)+" \xB7 ":""}${m(y(P.a))}${P.a?" \u2192 ":""}${m(y(P.b))}<small>${P.dl==null?__t(127):P.dl>=1?`${__t(128)} <b>+${P.dl} min</b>`:__t(129)} \xB7 tren ${m(P.num)}</small></span><button type="button" class="tripx" data-tripx="${m(P.k)}" title="${__t(130)}" aria-label="${__t(130)}">\u2715</button></li>`).join("");return`<h4>${__t(111)} \xB7 ${c.length}</h4>
      <div class="kpis"><div class="kpi nx"><b>${c.length}</b><span>${c.length===1?__t(131):__t(132)}<br>${__t(133)}</span></div><div class="kpi ${h.length?p/h.length>=.5?"b":p/h.length>=.25?"w":"g":"nx"}"><b>${p}</b><span>${__t(134)}<br>(5 min ${__t(135)})</span></div><div class="kpi ${x>=60?"b":x>=20?"w":"nx"}"><b>${x>=60?`${Math.floor(x/60)} h ${String(Math.round(x%60)).padStart(2,"0")}`:`${Math.round(x)} min`}</b><span>${__t(136)}<br>${__t(137)}</span></div></div>
      <ol class="l30f">${C}</ol>`}function P_(a,c){let h=Up(a),p=mi.filter(v=>v.fam===a);if(!h&&c!=="trips")return`<h4>${__t(138)}</h4><p class="snote">${Ue.at?__t(139):__t(104)}</p>`;let x=h.since&&h.since>new Date(Date.now()-29*864e5).toISOString().slice(0,10)?`${__t(140)} ${T_(h.since)}`:`${__t(133)}`,y=Math.min(30,h.days),C=`${__t(141)} ${y} ${__t(142)}`,P=h.of>1?(h.pos<=h.of/2?`${Mn(a)} ${__t(143)} <b>${h.pos}.\xAA ${__t(144)}</b> ${__t(145)} ${h.of}`:`${Mn(a)} ${__t(143)} <b>${h.of-h.pos+1}.\xAA ${__t(146)}</b> ${__t(145)} ${h.of}`)+" \xB7 ":"",R=p.map(v=>{let _=Dp(v),A=zt.get(v.sid),O=v.dest&&zt.get(v.dest);return`<li><b>${m(v.t)}</b><span>${m(A!=null?T[A].n:"")}${O!=null?" \u2192 "+m(T[O].n):""}<small>${_.n?`${__t(147)} <b>${_.late} ${__t(145)} ${_.n} ${__t(142)}</b>${_.nc?` \xB7 <b>${_.nc} ${_.nc===1?__t(148):__t(149)}</b>`:""} \xB7 ${__t(150)} \u2248 <b>${Jh(_.sum)}</b>`:__t(151)}</small></span></li>`}).join(""),U=`<div class="rtb"><button type="button" data-share30>\u{1F4E4} ${__t(152)}</button></div>`,$=`<small class="snote">${__t(153)}</small>`;return c==="trips"?`${I_(a)}
      <h4>${__t(154)}</h4>${p.length?`<ol class="l30f">${R}</ol>`:`<p class="snote">${__t(155)}</p>`}${h?U:""}${$}`:`<h4>${C}</h4>
      <div class="kpis"><div class="kpi ${ws(h.pct)}"><b>${Math.round(h.pct)}%</b><span>${__t(129)}<br>(\u22123 min)</span></div><div class="kpi ${h.avg>=4?"b":h.avg>=2.5?"w":h.avg>=1.5?"y":"g"}"><b>${Ts(h.avg).replace(" min","")}</b><span>${__t(156)}<br>${__t(157)}</span></div>${h.since?`<div class="kpi ${h.nc?h.nc>=10?"b":"w":"g"}"><b>${h.nc}</b><span>${h.nc===1?__t(158):__t(159)}<br>${x}</span></div>`:`<div class="kpi nx"><b>\u2014</b><span>${__t(160)}<br>${__t(161)}</span></div>`}</div>
      <p class="snote">${P}${__t(162)} +${h.max} min \xB7 ${h.days} ${__t(163)}</p>${U}${$}`}let L_=a=>`<div class="al">${a.slice(0,3).map(c=>`<p>\u26A0\uFE0F ${xo(c)} ${m(c.txt)} <small>${vo(c)}</small></p>`).join("")}</div>`,gn={on:!1,mesh:null};function Fp(){let a=Ue.hoy,c=[];if(a&&a.st)for(let[h,p]of Object.entries(a.st)){let x=zt.get(h);x!=null&&p.n>=2&&c.push([x,p.sum/p.n/60,p.n])}if(!c.length){let h=new Map;Bt.forEach(p=>{if(!p.real||!p.tr||p.v.next==null||p.v.next<0||p.v.pre||!V.delays.has(p.v.tid))return;let x=p.tr.pat.stops[p.v.next],y=h.get(x)||[0,0];y[0]+=Math.max(0,p.dl),y[1]++,h.set(x,y)}),h.forEach((p,x)=>c.push([x,p[0]/p[1],p[1]]))}return c}let Bp=()=>Math.min(1,Math.max(.22,r.dist/110));function D_(){if(!gn.mesh||!gn.d)return;let a=Bp();if(Math.abs(a-gn.r)<.04)return;gn.r=a;let c=new Ze;gn.d.forEach(([h,p],x)=>{c.makeScale(a,a,.3+Math.min(p,40)*.3),c.setPosition(T[h].w[0],T[h].w[1],H),gn.mesh.setMatrixAt(x,c)}),gn.mesh.instanceMatrix.needsUpdate=!0,o()}function N_(){if(gn.mesh&&(e.remove(gn.mesh),gn.mesh.geometry.dispose(),gn.mesh.material.dispose(),gn.mesh=null),!gn.on){o();return}let a=Fp();if(!a.length){Be(__t(164)),gn.on=!1;return}let c=new sl(.32,.32,1,16);c.rotateX(Math.PI/2),c.translate(0,0,.5);let h=new Nr({fog:!1}),p=new tl(c,h,a.length),x=new Ze,y=new ye;gn.d=a,gn.r=Bp(),a.forEach(([C,P],R)=>{let U=.3+Math.min(P,40)*.3;x.makeScale(gn.r,gn.r,U),x.setPosition(T[C].w[0],T[C].w[1],H),p.setMatrixAt(R,x),y.set(P>10?"#dc2626":P>5?"#ea7a0c":P>=1?"#eab308":"#16a34a"),p.setColorAt(R,y)}),p.renderOrder=25,p.frustumCulled=!1,e.add(p),gn.mesh=p,s.tilt<.5&&(s.tilt=.85),o()}let jr=document.createElement("button");jr.type="button",jr.id="sbtn",jr.title=__t(165),jr.innerHTML=__t(166),jr.onclick=()=>{Ut=!Ut,Ut&&(Ot=Ce=!1,Ue.at=0),f._h="",Re(),o()},document.body.appendChild(jr);function U_(){r.dist<45!=ii<45&&(ii=r.dist,zn()),D_(),O_(),lo()}let As=[],Tn=new j;function O_(){let a=0;if(gn.on){let h=Fp().sort((x,y)=>y[1]-x[1]),p=[];for(let[x,y]of h){if(a>=30)break;if(Tn.set(T[x].w[0],T[x].w[1],H).project(n),Tn.z>1||Math.abs(Tn.x)>1||Math.abs(Tn.y)>1)continue;let C=(Tn.x*.5+.5)*innerWidth,P=(-Tn.y*.5+.5)*innerHeight;if(p.some(([U,$])=>Math.abs(U-C)<90&&Math.abs($-P)<18))continue;p.push([C,P]);let R=As[a]||(As[a]=Object.assign(document.createElement("div"),{className:"slab"}));R.isConnected||document.body.appendChild(R),R.textContent=T[x].n+" +"+Math.round(y)+"\u2032",R.dataset.i=x,R.style.display="block",R.style.transform=`translate(${Math.round(C+8)}px,${Math.round(P-8)}px)`,a++}for(;a<As.length;a++)As[a].style.display="none";return}if(r.dist<30){let h=[];for(let p=0;p<ze;p++)gr[p]<4||(Tn.set(T[p].w[0],T[p].w[1],H).project(n),!(Tn.z>1||Math.abs(Tn.x)>1.05||Math.abs(Tn.y)>1.05)&&h.push([p,(Tn.x*.5+.5)*innerWidth,(-Tn.y*.5+.5)*innerHeight]));if(h.length<=70)for(let[p,x,y]of h){let C=As[a]||(As[a]=Object.assign(document.createElement("div"),{className:"slab"}));C.isConnected||document.body.appendChild(C),C.textContent=T[p].n,C.dataset.i=p,C.style.display="block",C.style.transform=`translate(${Math.round(x+8)}px,${Math.round(y-7)}px)`,a++}}for(;a<As.length;a++)As[a].style.display="none"}function jl(a){return Tn.set(a[0],a[1],H).project(n),[(Tn.x*.5+.5)*innerWidth,(-Tn.y*.5+.5)*innerHeight,Tn.z]}function Zh(a,c,h,p){let x=null,y=h*h;for(let C of Bt){let[P,R,U]=jl(C.p.w);if(U>1)continue;let $=(P-a)**2+(R-c)**2;$<y&&(y=$,x={a:C})}if(x)return x;y=p*p;for(let C=0;C<ze;C++){if(!gr[C])continue;let[P,R,U]=jl(T[C].w);if(U>1)continue;let $=(P-a)**2+(R-c)**2;$<y&&(y=$,x={s:C})}return x}let qs=!1;window.__rodHide=()=>{qs=!0},document.addEventListener("click",a=>{qs&&!a.target.closest("#mcs, canvas")&&(qs=!1)},!0),window.__rodTap=(a,c)=>{let h=Zh(a,c,20,0);if(h&&h.a)return qs=!1,Ie.st=-1,Ot=!1,Ce=!1,Ut=!1,Et=h.a.tr||{vtid:h.a.v.tid},ae=-1,fe=null,zn(),Re(),De=0,o(),!0;let p=null,x=1e9;for(let C of As){if(C.style.display==="none")continue;let P=C.getBoundingClientRect();if(a>=P.left-4&&a<=P.right+4&&c>=P.top-4&&c<=P.bottom+4){let R=Math.abs(c-(P.top+P.bottom)/2)*4+(a-P.left);R<x&&(x=R,p=C)}}if(p)return window.__rodPickStation(+p.dataset.i),!0;let y=Zh(a,c,24,18);return y&&(y.a||y.s!=null)&&(qs=!1),y&&(y.a||y.s!=null)&&(Ie.st=-1),y&&y.a?(Ot=!1,Ce=!1,Ut=!1,Et=y.a.tr||{vtid:y.a.v.tid},ae=-1,fe=null,zn(),Re(),De=0,o(),!0):y&&y.s!=null?(Ot=!1,Ce=!1,Ut=!1,ae=y.s,Et=null,fe=null,zn(),Re(),o(),!0):!1},window.__rodHover=(a,c)=>{let h=Zh(a,c,14,10);if(h&&h.a){let p=h.a,x=p.tr?T[p.tr.pat.stops[p.tr.pat.stops.length-1]].n:"";return`<b><span style="color:${p.c}">\u25A0</span> ${m(p.fam||p.tr&&p.tr.fam||"?")}${__t(167)}${m(p.tr?p.tr.num:p.v.num)}</b><small>${x?__t(106)+m(x):""}${p.real?(p.dl>=1?` \xB7 <b style="color:#c2410c">+${Math.round(p.dl)} min</b>`:__t(168))+__t(169):__t(170)}</small>`}return h&&h.s!=null?`<b>${m(T[h.s].n)}</b><small>${[...T[h.s].fams].sort(B).join(" \xB7 ")}</small>`:null},window.__rodPickStation=a=>{Ie.st=-1,qs=!1,Ot=Ce=Ut=!1,Et=null,fe=null,ae=a,zn(),f._h="",Re(),o()};{let a=S("#rc"),c=()=>{let h=a.getBoundingClientRect().top;document.documentElement.style.setProperty("--mcsmax",Math.max(160,h-64-10)+"px")};try{new ResizeObserver(c).observe(a)}catch{}addEventListener("resize",c),setTimeout(c,300)}if("serviceWorker"in navigator&&location.protocol==="https:"){let a=!1,c=!!navigator.serviceWorker.controller;navigator.serviceWorker.addEventListener("controllerchange",()=>{if(!c||a)return;let h=((S("#ver")||{}).textContent||"").match(/\d+\.\d+/);fetch("./sw.js",{cache:"no-store"}).then(p=>p.text()).then(p=>{let x=(p.match(/VERSION = 'cs-(\d+\.\d+)'/)||[])[1];x&&h&&x!==h[0]&&!a&&(a=!0,location.reload())}).catch(()=>{})}),navigator.serviceWorker.register("./sw.js").then(h=>{h.update().catch(()=>{}),document.addEventListener("visibilitychange",()=>{document.hidden||h.update().catch(()=>{})})}).catch(()=>{})}setTimeout(()=>{try{Xl()}catch{}},2500),setInterval(()=>{try{Ue.at=0,Xl()}catch{}},15*6e4);let pi={mode:(()=>{try{return localStorage.getItem("rod_theme")||"auto"}catch{return"auto"}})()},uo=matchMedia("(prefers-color-scheme: dark)");function Kl(){let a=pi.mode==="dark"||pi.mode==="auto"&&uo.matches;document.documentElement.classList.toggle("dark",a);for(let h=0;h<ze;h++)fi.set(a?[.06,.08,.11]:[1,1,1],h*3);Je.attributes.fill.needsUpdate=!0,so.uniforms.border.value.set(a?"#e7ebf3":"#1d2330"),window.__mapTheme&&window.__mapTheme(a),vr.textContent=pi.mode==="auto"?a?"\u{1F319}":"\u2600\uFE0F":pi.mode==="dark"?"\u{1F319}":"\u2600\uFE0F",vr.title=__t(171)+{auto:__t(172),dark:__t(173),light:"desactivado"}[pi.mode];let c=document.querySelector("meta[name=theme-color]");c&&(c.content=a?"#0d1119":"#eef1f5"),o()}let vr=document.createElement("button");vr.type="button",vr.id="tbtn",vr.onclick=()=>{pi.mode=pi.mode==="auto"?uo.matches?"light":"dark":pi.mode==="dark"?"light":"dark",pi.mode==="dark"===uo.matches&&(pi.mode="auto");try{localStorage.setItem("rod_theme",pi.mode)}catch{}Kl(),Be(vr.title)},document.body.appendChild(vr);{let a=document.createElement("a");a.id="wabtn",a.href="https://www.whatsapp.com/channel/0029Vav4hGTId7nPenKMuo2C",a.target="_blank",a.rel="noopener",a.title=__t(174),a.innerHTML=__t(175),document.body.appendChild(a)}uo.addEventListener&&uo.addEventListener("change",Kl),Kl(),window.__rodTick=He,window.__rodFrame=U_,window.__rodResize=()=>{ue.resolution.set(innerWidth,innerHeight),xe.resolution.set(innerWidth,innerHeight)},window.__rodResize();let Di={st:-1,f:new Set},kp=a=>{let c=[...T[a].fams].sort(B);return`<div class="sfc">${c.length>1?`<button type="button" data-sf="" class="${Di.f.size?"":"on"}${__t(176)}`:""}${c.map(h=>`<button type="button" data-sf="${m(h)}" class="ln ${Di.f.size&&!Di.f.has(h)?"off":""}${Dt.has(h)?"":" hid"}" style="--c:${Z[h]}">${m(h)}</button>`).join("")}</div>${c.some(h=>!Dt.has(h))?__t(177):""}`},F_=a=>{let c=(a||"#6b7385").replace("#",""),h=parseInt(c.slice(0,2),16),p=parseInt(c.slice(2,4),16),x=parseInt(c.slice(4,6),16);return(.299*h+.587*p+.114*x)/255>.62?"#1d2330":"#fff"},Ni=(a,c)=>{let h=Z[c]||"#6b7385";return`<span class="dst" style="background:${h};color:${F_(h)}" title="${m(c||"")}">${m(a)}</span>`},Ql=a=>{let c=T[a]&&T[a].id;return Xe.st.includes(c)?"\u{1F3E0} ":$e.st.includes(c)?"\u{1F4BC} ":""},$i=a=>a>10?"d-hi":a>5?"d-md":"d-lo",B_=/aver[ií]|incid[eè]ncia t[eè]cnica|incidencia t[eé]cnica|problema t[eè]cnic|t[eè]cnic[oa] del propi/i,ho={ref:null,m:new Map};function jh(a){if(ho.ref!==V.alerts){ho.ref=V.alerts,ho.m=new Map;for(let c of V.alerts){if(c.src!=="Rodalies")continue;let h=c.txt.match(/(?:a causa d[e']|per causa d[e']|debido a|degut a|due to|because of|caused by)\s+([^.]{4,140})/i);for(let p of(c.es||c.txt).matchAll(/\b[Tt]ren\s+(\d{4,6})\b/g))ho.m.set(p[1],{why:h?h[1].trim().replace(/\s+/g," "):"",txt:c.txt,when:c.when,cx:/no circula|no circular[àa]|suprimi|anul[·.]?la|cancel[·.]?la|anulad|cancelad/i.test(c.es||c.txt)})}}return ho.m.get(String(a))||null}let fo={ref:null,m:new Map};function $p(a){let c=String(a.tr?a.tr.num:a.v&&a.v.num||"");if(!c)return null;if(fo.ref!==V.alerts){fo.ref=V.alerts,fo.m=new Map;for(let p of V.alerts)if(p.src==="Rodalies"&&B_.test(p.es||p.txt))for(let x of(p.es||p.txt).matchAll(/\b(\d{4,6})\b/g))fo.m.set(x[1],p)}let h=fo.m.get(c);return h?{why:"aviso",txt:h.txt}:a.real&&a.stop==="via"&&a.v.still>=300?{why:"via",min:Math.round(a.v.still/60)}:null}let po=a=>{try{let c=Et;return c?c.num!=null&&String(c.num)===String(a.num)||a.tid&&(c.tid===a.tid||c.vtid===a.tid):!1}catch{return!1}},zp=(a,c)=>{let h=I(a,c.min-1,c.min+240).sort((p,x)=>p.est-x.est).slice(0,6);return h.length?`${__t(178)}${h.map(p=>`<li><b>${rt(p.est)}</b>${Mn(p.fam)}<span>${Ni(p.dest,p.fam)}</span><i class="via">bus</i></li>`).join("")}</ol>`:""},mi=(()=>{try{return JSON.parse(localStorage.getItem("rod_fav")||"[]")}catch{return[]}})(),Vp=()=>{try{localStorage.setItem("rod_fav",JSON.stringify(mi))}catch{}},Hp=(a,c)=>{if(a.num===String(c.num))return!0;let h=t.days.indexOf(ee().ymd),p=h>=0?Kr(a,h):null;return!!p&&String(p.num)===String(c.num)},Gp=a=>{let c=a.pat.stops.slice(0,-1),h=[...Xe.st,...$e.st];return c.find(p=>h.includes(T[p].id))??c.find(p=>Tt.st.includes(T[p].id))??a.pat.stops[0]},Wp=a=>!!a&&mi.some(c=>Hp(c,a)),ve=(()=>{try{let a=JSON.parse(localStorage.getItem("rod_alarm")||"null");return a&&Date.now()-a.at<4*36e5?a:null}catch{return null}})(),Cs=()=>{try{localStorage.setItem("rod_alarm",JSON.stringify(ve))}catch{}},tc=(a,c)=>!!(ve&&a&&ve.num===String(a.num)&&ve.sid===T[a.pat.stops[c]].id);function ec(a,c){try{window.__vib?window.__vib():navigator.vibrate&&navigator.vibrate([400,150,400,150,600])}catch{}Be(a+" \xB7 "+c),document.hidden&&"Notification"in window&&Notification.permission==="granted"&&(navigator.serviceWorker&&navigator.serviceWorker.getRegistration?navigator.serviceWorker.getRegistration():Promise.resolve(null)).then(h=>h?h.showNotification(a,{body:c,tag:"alarm",requireInteraction:!0,vibrate:[400,150,400,150,600],icon:"icons/icon-192.png"}):new Notification(a,{body:c})).catch(()=>{})}function k_(){if(!ve||ve.done)return;let a=ee();if(!a.live)return;let c=t.days.indexOf(a.ymd),h=(st[c]||[]).find(R=>String(R.num)===ve.num)||(st[c-1]||[]).find(R=>String(R.num)===ve.num);if(!h)return;let p=h.pat.stops.findIndex(R=>T[R].id===ve.sid);if(p<0)return;let x=kt(h),y=typeof x=="number"?Math.max(0,x/60):0,C=h.day===c-1?1440:0,P=h.t0+h.pat.t[2*p]+y-C;if(P-a.min<-3){ve.done=!0,Cs();return}if(window.__schedAt&&P-2-a.min>.1&&(ve.sch==null||Math.abs(ve.sch-P)>=.5)&&(ve.sch=P,ve.nat=Date.now()+(P-2-a.min)*6e4,Cs(),window.__schedAt(7701,`${__t(179)}${T[h.pat.stops[p]].n}`,__t(180)+` (${rt(P)})`+(R=>R?` \xB7 ${__t(181)} ${R.fam} ${__t(182)} ${rt(R.est)}${R.plat?__t(183)+R.plat:""}`:"")(oc.get(ve.sid)),Date.now()+(P-2-a.min)*6e4)),P-a.min<=2){ve.done=!0,Cs();let R=oc.get(ve.sid),U=R?` \xB7 ${R.lost?__t(184)+" \xB7 "+__t(185):__t(181)} ${R.fam} ${__t(182)} ${rt(R.est)}${R.plat?__t(183)+R.plat:""}`:"",$=Math.round(P-a.min),_=($>=1?`${__t(187)} ${$}${__t(186)}${rt(P)}) \xB7 ${__t(188)}`:`${__t(189)} (${rt(P)}) \xB7 ${__t(188)}`)+U;window.__schedAt&&ve.nat&&Date.now()>=ve.nat-2e4?document.hidden||ec(`${__t(179)}${T[h.pat.stops[p]].n}`,_):(window.__schedOff&&window.__schedOff(7701),ec(`${__t(179)}${T[h.pat.stops[p]].n}`,_))}}function Kr(a,c){let h=+a.t.slice(0,2)*60+ +a.t.slice(3,5),p=st[c]||[],x=(P,R)=>P.t0+P.pat.t[2*R+1],y=null,C=11;for(let P of p){let R=P.pat.stops.findIndex($=>T[$].id===a.sid);if(R<0||R===P.pat.stops.length-1)continue;let U=Math.abs(x(P,R)-h)+(String(P.num)===a.num?-5:0)+(P.fam===a.fam?0:20)+(a.dest&&T[P.pat.stops[P.pat.stops.length-1]].id!==a.dest?3:0);U<C&&(C=U,y=P)}return y}let nc=new Set;function $_(){if(!mi.length)return;let a=ee();if(!a.live)return;let c=t.days.indexOf(a.ymd);for(let h of mi){let p=Kr(h,c);if(!p)continue;let x=p.pat.stops.findIndex($=>T[$].id===h.sid);if(x<0)continue;let y=p.t0+p.pat.t[2*x+1],C=kt(p),P=typeof C=="number"?C/60:0,R=y-a.min;if(R<-2||R>60)continue;let U=a.ymd+h.num+(C==="X"?"X":P>=10?10:P>=5?5:0);nc.has(U)||(C==="X"||P>=5?(nc.add(U),ec(`${__t(190)}${rt(y)} ${C==="X"?__t(191):`${__t(192)}${Math.round(P)} min`}`,`${p.fam} ${p.num}${__t(193)}${T[p.pat.stops[x]].n}${C==="X"?"":`${__t(194)}${rt(y+P)}`}`)):R<=20&&!nc.has(a.ymd+h.num+"ok")&&V.vp.has(p.tid)&&(nc.add(a.ymd+h.num+"ok"),Be(`${__t(190)}${rt(y)}${__t(195)}`)))}}setInterval(()=>{try{k_(),$_()}catch{}},15e3);let Mn=a=>`<span class="ln" style="--c:${Z[a]}">${m(a)}</span>`;{let a=h=>{let p=/^#?([0-9a-f]{6})$/i.exec(h||"");return p?[0,2,4].map(x=>{let y=parseInt(p[1].slice(x,x+2),16)/255;return y<=.03928?y/12.92:Math.pow((y+.055)/1.055,2.4)}).reduce((x,y,C)=>x+y*[.2126,.7152,.0722][C],0):0},c=[...new Set(Object.values(Z))].filter(h=>a(h)>.3).map(h=>`.ln[style*="--c:${h}"],[data-f][style*="--c:${h}"].on,[data-f][style*="--c:${h}"]:not(.off){color:#14203a!important}`).join("");if(c){let h=document.createElement("style");h.textContent=c,document.head.appendChild(h)}}function Xp(a,c){return c?a==="X"?__t(197):a>=60?`<span class="st late ${$i(a/60)}${__t(198)}${Math.round(a/60)} min</span>`:__t(199):`<span class="st sch">${__t(196)}</span>`}function Kh(){if(!f.classList.contains("peek")||window.__mapHidden||!f.getClientRects().length)return;let a=f.querySelector(".tc");if(!a)return;let c=a.querySelector(".st")||a.querySelector("p"),h=f.getBoundingClientRect().top-f.scrollTop,p=c?c.getBoundingClientRect().bottom-h+3:150;if(c){let x=c.nextElementSibling||c.parentElement!==a&&c.parentElement.nextElementSibling;x&&(p=Math.min(p,x.getBoundingClientRect().top-h-1))}f.style.setProperty("--peekh",Math.round(Math.min(280,Math.max(110,p)))+"px")}function Rs(){try{let a=f,c=document.getElementById("rcgrab"),h=document.getElementById("z");if(!a||!Ve.on||Ve.cur!=="map"||a.classList.contains("peek")||!a.getClientRects().length||!c||!c.getClientRects().length){a&&a._fit&&(["max-height","bottom","height","right","width"].forEach(v=>a.style.removeProperty(v)),a._fit=0);return}let x=a.getBoundingClientRect().top,y=c.getBoundingClientRect().top-8,C=Math.max(140,Math.floor(y-x)),P=h&&h.getClientRects().length?h.getBoundingClientRect():null,R=P?Math.max(10,Math.ceil(innerWidth-P.left+8)):10;a._fit=C+"|"+R;let U=a.style,$={"max-height":C+"px",height:"auto",bottom:"auto",width:"auto",right:R+"px"};for(let v in $)(U.getPropertyValue(v)!==$[v]||U.getPropertyPriority(v)!=="important")&&U.setProperty(v,$[v],"important")}catch{}}setInterval(()=>{Ve.on&&Ve.cur==="map"&&Rs()},700);try{new MutationObserver(()=>Rs()).observe(f,{attributes:!0,attributeFilter:["style","class"]})}catch{}window.__fitMcs=Rs;try{localStorage.removeItem("rod_dbg")}catch{}if(/[?&]dbg=1/.test(location.search)){let a=document.createElement("pre");a.id="dbgbox",a.style.cssText="position:fixed;left:4px;top:4px;z-index:999;background:rgba(0,0,0,.85);color:#0f0;font:11px/1.25 monospace;padding:6px;margin:0;pointer-events:none;max-width:70vw;white-space:pre-wrap",document.body.appendChild(a),setInterval(()=>{try{let c=p=>{let x=document.querySelector(p);if(!x||!x.getClientRects().length)return"\u2014";let y=x.getBoundingClientRect();return[y.left,y.top,y.right,y.bottom].map(Math.round).join(",")},h=getComputedStyle(f);a.textContent=`v ${document.title.slice(0,0)}${(document.getElementById("ver")||{}).textContent||""}
inner ${innerWidth}x${innerHeight} vv ${window.visualViewport?Math.round(visualViewport.height):"-"}
tab ${Ve.on?Ve.cur:"off"} peek ${f.classList.contains("peek")}
mcs ${c("#mcs")}
tc ${c("#mcs .tc")}
rc ${c("#rcgrab")} z ${c("#z")}
maxH ${h.maxHeight} ov ${h.overflowY}
fit ${f._fit||0}
inl ${f.style.cssText.slice(0,160)}`}catch(c){a.textContent="err "+c.message}},1e3)}addEventListener("resize",()=>setTimeout(Rs,80));try{new ResizeObserver(()=>Rs()).observe(document.getElementById("rcgrab")||document.body)}catch{}window.visualViewport&&visualViewport.addEventListener("resize",()=>setTimeout(Rs,80));function Re(){try{z_()}finally{requestAnimationFrame(Rs),window.__rodTabSync&&window.__rodTabSync();try{Kh()}catch{}}}function z_(){if(!Et&&ae<0&&!Ce&&!Ot&&!Ut&&!me){qs=!1,f.innerHTML="",f._h="",f.style.display="none",f.classList.remove("peek"),gd();return}let a=ee(),c="",h=lt()&&a.live,p=(v,_)=>V.alerts.filter(A=>[...A.fams].some(O=>v.has(O))||_!=null&&A.stops.has(_)),x=v=>v.length?`<div class="al">${v.slice(0,4).map(_=>`<p>\u26A0\uFE0F ${xo(_)} ${[..._.fams].sort(B).slice(0,6).map(Mn).join(" ")} ${m(_.txt)} <small>${vo(_)}</small></p>`).join("")}${v.length>4?`<small>y ${v.length-4}${__t(200)}`:""}</div>`:"",y=Et&&h?Bt.find(v=>v.real&&(Et.vtid?v.v.tid===Et.vtid:v.tr===Et)):null;if(me&&!Ut&&!Ot&&!Ce&&!Et&&ae<0)c=R_(me);else if(Ut)c=C_();else if(Ot)c=`${__t(201)}${m(S("#ver").firstChild.textContent)}</small><ul class="chg">${S("#chg").innerHTML||__t(203)}${__t(202)}`;else if(Ce){let v=V.alerts.filter(_=>[..._.fams].some(A=>Dt.has(A))||!_.fams.size);c=`<div class="tc alrl" style="--c:#c2410c"><button class="x" data-cx>\xD7</button><h3 class="ilt sm">${__t(205)}</h3><small class="ifoot0">${v.length===1?__t(206):v.length+" "+__t(207)}</small>${v.length?`<div class="igl">${v.map(_=>`<div class="igc"><p class="igh">\u26A0\uFE0F ${xo(_)} ${_.fams.size>6?`<span class="igall">${__t(208)}</span>`:[..._.fams].sort(B).map(Mn).join(" ")} <small>${vo(_)}</small></p><p class="igt">${m(_.txt)}</p></div>`).join("")}</div>`:`<p>${__t(209)}</p>`}${__t(204)}${V.alertsTs&&Date.now()/1e3-V.alertsTs<6*3600?__t(210):`${__t(211)}${V.alertsTs?new Date(V.alertsTs*1e3).toLocaleDateString("es-ES",{day:"numeric",month:"short"}):"\u2014"}`}</small></div>`}else if(y){let v=y.v,_=y.tr,A=Ee=>m(T[_.pat.stops[Ee]].n),O=_?_.pat.stops.length:0,J=zt.get(v.sid),Q=J!=null?m(T[J].n):m(v.sid),G=_&&v.atStop>=0?A(v.atStop):"",nt=_&&v.next>=0?A(v.next):Q,W=_&&v.next>0?A(v.next-1):"",Vt=y.broke||$p(y),oe=Vt?`<b class="stopv">\u26A0\uFE0F ${Vt.why==="aviso"?__t(212):`${__t(213)}${Vt.min} min`}</b>${_&&W?`${__t(214)}${W}${__t(215)}${nt}</b>`:""}`:y.stop==="via"&&_?`${__t(216)}${W?`${__t(218)}${W}${__t(215)}${nt}</b>`:`${__t(219)}${nt}</b>`}${__t(217)}${Math.max(1,Math.round(v.still/60))} min`:v.pre&&_?v.prevTr?`${__t(220)}${m(v.prevTr.num)}${__t(221)}${A(0)}</b>${v.prevDl>=1?`${__t(224)}${Math.round(v.prevDl)} min</b>`:""}${__t(222)}${rt(v.arrO)}${__t(223)}${rt(v.depEst)}</b>${v.preDl>=1?`${__t(225)}${rt(v.dep0)})`:""}`:`${__t(226)}${A(0)}${__t(227)}${rt(v.dep0+y.dl)}</b>`:G&&v.before?`Llegando a <b>${G}</b>`:(v.st==="STOPPED_AT"||y.stop==="st")&&G?`${__t(228)}${G}</b>`:G&&v.next>=0&&v.atStop!==v.next?`${__t(229)}${G}${__t(221)}${nt}</b>`:W?`${__t(230)}${W}${__t(215)}${nt}</b>`:`${__t(231)}${nt}</b>`,te=_&&v.next>=0&&!v.pre?rt(ea(_,v,v.next,_.t0+_.pat.t[2*v.next]+y.dl)):"",tn=[];if(_){let Ee=y.idx>=0?y.idx:0,be=v.pre?Math.max(y.dl,v.preDl||0):y.dl,vn=sn=>_.t0+_.pat.t[sn]+be;for(let sn=Ee;sn<O;sn++)tn.push(`<li class="${Ql(_.pat.stops[sn])?"mine":""}${tc(_,sn)?" alm":""}"><b>${rt(ea(_,v,sn,vn(sn===0?1:2*sn)))}</b><span title="${A(sn)}">${Ql(_.pat.stops[sn])}${A(sn)}</span>${be>=1?`<em class="dl ${$i(be)}">${v.pre?"\u2248":""}+${Math.round(be)}</em>`:""}${sn>0?`<button type="button" class="abtn" data-alarm="${sn}" title="${__t(232)}">${tc(_,sn)?"\u{1F514}":"\u{1F515}"}</button>`:""}</li>`)}c=`<div class="tc" style="--c:${y.c}"><button class="x" data-cx>\xD7</button><div>${Mn(y.fam)}${__t(233)}${m(_?_.num:v.num)}${__t(234)}${_?`<h3 class="rt"><span class="o" title="${A(0)}">${A(0)}</span><span class="ar">\u2192</span>${Ni(T[_.pat.stops[O-1]].n,_.fam)}</h3>`:""}
        <p>${oe}${te?`${__t(235)}${te}`:""}${v.plat&&v.st==="STOPPED_AT"&&G?`${__t(236)}${m(v.plat)}</b>`:""}</p><p>${v.pre&&v.prevTr?v.preDl>=1?`${__t(237)}${Math.round(v.preDl)}${__t(238)}`:__t(239):Xp(V.delays.get(v.tid),V.delays.has(v.tid))}${(()=>{let Ee=_&&ql(_.num);return Ee&&Ee.n>=2?`${__t(240)}${Ee.n}${__t(241)}${Ee.late?`${__t(242)} <b>${Ee.late} ${__t(145)} ${Ee.n} ${__t(142)}</b> ${__t(243)}`:__t(244)} \xB7 ${__t(245)} ${Ee.avg<.5?"0":"+"+Math.round(Ee.avg)} min</span>`:""})()}${(()=>{let Ee=_&&jh(_.num);return Ee?`<span class="why" title="${m(Ee.txt)}">${Ee.why?__t(246)+m(Ee.why):__t(247)}</span>`:""})()}</p>
        <small>${v.pre?`${__t(248)}${ys(Dh(y.age))}`:v.est?__t(249):`${__t(250)}${ys(Dh(y.age))}${y.age>120?__t(251):""}`}</small>
        ${tn.length?`${y.dl>=1||v.pre&&v.preDl>=1?`${__t(252)}`:""}<ol class="stops">${tn.join("")}</ol>`:""}${x(p(new Set([y.fam])))}
        ${go(_?_.num:v.num,"",y.fam)}${_?`<div class="rtb two"><button type="button" data-fav>${Wp(_)?__t(253):__t(254)}</button><button type="button" data-follow>${ac(_)?__t(255):__t(256)}</button></div>`:""}</div>`}else if(Et&&h&&!Et.pat)c=`${__t(257)}${m(Et.num||Et.vtid||"")}${__t(258)}`;else if(Et){let v=Et,_=v.pat,A=_.stops.length,O=kt(v),J=typeof O=="number"?O/60:0,Q=t.days.indexOf(a.ymd),G=v.day===Q-1?1440:0,nt=a.min+G-v.t0-J,W=K(v,nt),Vt=be=>v.t0+_.t[be]+J,oe=be=>m(T[_.stops[be]].n),te=__t(259);W&&(te=W.moving?`${__t(260)}${oe(W.next)}${__t(261)}${rt(Vt(2*W.next))}`:W.at===A-1?`${__t(262)}${oe(A-1)}</b>`:`${__t(228)}${oe(W.at)}${__t(263)}${rt(Vt(2*W.at+1))}`);let tn=W?W.next:0,Ee=[];for(let be=tn;be<A;be++)Ee.push(`<li class="${Ql(_.stops[be])?"mine":""}${tc(v,be)?" alm":""}"><b>${rt(ea(v,null,be,Vt(2*be)))}</b><span title="${oe(be)}">${Ql(_.stops[be])}${oe(be)}</span>${J>=1?`<em class="dl ${$i(J)}">+${Math.round(J)}</em>`:""}${be>0?`<button type="button" class="abtn" data-alarm="${be}" title="${__t(232)}">${tc(v,be)?"\u{1F514}":"\u{1F515}"}</button>`:""}</li>`);c=`<div class="tc" style="--c:${v.c}"><button class="x" data-cx>\xD7</button><div>${Mn(v.fam)}${__t(233)}${m(v.num)}</b> <span class="pv">${__t(267)}</span></div><h3 class="rt"><span class="o" title="${oe(0)}">${oe(0)}</span><span class="ar">\u2192</span>${Ni(T[v.pat.stops[A-1]].n,v.fam)}</h3>
        <p>${te}</p><p>${Xp(O,O!=null)}${(()=>{let be=ql(v.num);return be&&be.n>=2?`${__t(240)}${be.n}${__t(241)}${be.late?`${__t(242)} <b>${be.late} ${__t(145)} ${be.n} ${__t(142)}</b> ${__t(243)}`:__t(244)} \xB7 ${__t(245)} ${be.avg<.5?"0":"+"+Math.round(be.avg)} min</span>`:""})()}${__t(264)}${rt(v.t0+_.t[1])}${__t(265)}${rt(v.t0+_.t[2*A-2])}${__t(266)}${J>=1?__t(252):""}<ol class="stops">${Ee.join("")}</ol>${go(v.num,"",v.fam)}<div class="rtb two"><button type="button" data-fav>${Wp(v)?__t(253):__t(254)}</button><button type="button" data-follow>${ac(v)?__t(255):__t(256)}</button></div></div>`}else{let v=ae,_=t.days.indexOf(a.ymd),A=[];Di.st!==v&&(Di.st=v,Di.f.clear());let O=W=>(!Z[W]||Dt.has(W))&&(!Di.f.size||Di.f.has(W));if(_>=0){let W=(Vt,oe)=>{for(let te of Vt){if(!O(te.fam))continue;let tn=te.pat.stops.indexOf(v);if(tn<0||tn===te.pat.stops.length-1)continue;let Ee=kt(te),be=typeof Ee=="number"?Ee/60:0,vn=te.t0+te.pat.t[2*tn+1]-oe;vn+be<a.min-1||vn>a.min+360||A.push({tr:te,t:vn,dl:be,d:Ee,on:V.vp.has(te.tid),past:a.min>te.t0+te.pat.t[1]-oe+2})}};W(st[_],0),_>0&&W(st[_-1],1440)}A.sort((W,Vt)=>W.t+W.dl-Vt.t-Vt.dl);let J=T[v].id,Q=Ft.get(J),G=(h||at()&&a.live)&&V.url;G&&(!Q||Date.now()-Q.at>tm())&&!Q?.loading&&(Ft.set(J,{...Q||{},loading:!0,at:Q?Q.at:0}),Pt(ce(),"/departures.json?stationId="+J).then(W=>{Ft.set(J,{at:Date.now(),d:W}),ae===v&&(f._h="",Re())}).catch(()=>Ft.set(J,{at:Date.now(),err:1})));let nt=G&&Q&&Q.d&&Array.isArray(Q.d.trains)&&Q.d.trains.length?Q.d.trains:null;if(nt){let W=new Map([...V.vp.values()].map(te=>[String((pt.get(te.tid)||{}).num||te.num),te])),Vt=new Map(Jn(v).map(te=>[String(te.num),te])),oe=nt.filter(te=>O((te.line||{}).id||"")).slice(0,40).map(te=>{let tn=String(te.commercialNumber||te.technicalNumber||""),Ee=Vt.get(tn),be=Ee?rt(Ee.est):(te.departureDateHourSelectedStation||"").slice(11,16),vn=(te.line||{}).id||"",sn=W.get(tn),pn=Ee?Math.round(Ee.dl)*60:sn?V.delays.get(sn.tid):null,gi=Ee&&(Ee.gone||!Ee.live&&Ee.est<a.min-1);return`<li class="go${gi?" old":""}${po({num:tn,tid:sn?sn.tid:""})?" sel":""}" data-gt="${m(tn)}|${sn?m(sn.tid):""}"><b>${m(be)}</b>${Z[vn]?Mn(vn):`<span class="ln" style="--c:#6b7385">${m(vn||"?")}</span>`}<span>${Ni((te.destinationStation||{}).name||"",vn)}${te.trainObservations?` \xB7 <i>${m(te.trainObservations)}</i>`:""}${gi?` <small class="oldt">${Ee.gone?__t(268):__t(269)}</small>`:""}</span>${te.trainCancelled?__t(270):typeof pn=="number"&&pn>=60?`<em class="dl ${$i(pn/60)}">+${Math.round(pn/60)}</em>`:""}${te.platformSelectedStation?`${__t(271)}${m(te.platformSelectedStation)}</i>`:""}${sn?'<i class="lvd" title="circulando, posici\xF3n real">\u25CF</i>':'<i class="lvd ph">\u25CF</i>'}</li>`}).join("");c=`<div class="tc" style="--c:#1d2330"><button class="x" data-cx>\xD7</button><h3>${m(T[v].n)}</h3>${kp(v)}${go("",T[v].id,"")}${__t(272)}${oe||__t(274)}</ol>${zp(v,a)}${x(p(T[v].fams,v))}${__t(273)}`}else c=`<div class="tc" style="--c:#1d2330"><button class="x" data-cx>\xD7</button><h3>${m(T[v].n)}</h3>${kp(v)}${go("",T[v].id,"")}
        <small style="margin-top:6px">${h&&V.url?__t(276):""}${__t(275)}${h?__t(277):__t(278)}</small>
        <ol>${A.slice(0,40).map(W=>`<li class="go${po({num:W.tr.num,tid:W.tr.tid})?" sel":""}" data-gt="${m(W.tr.num)}|${m(W.tr.tid)}"><b>${rt(W.t+W.dl)}</b>${Mn(W.tr.fam)}<span>${Ni(T[W.tr.pat.stops[W.tr.pat.stops.length-1]].n,W.tr.fam)}</span>${W.d==="X"?__t(270):W.dl>=1?`<em class="dl ${$i(W.dl)}">+${Math.round(W.dl)}</em>`:""}${h?W.on?'<i class="lvd" title="circulando, posici\xF3n real">\u25CF</i>':W.past?__t(279):'<i class="lvd ph">\u25CF</i>':""}</li>`).join("")||__t(280)}</ol>${zp(v,a)}${x(p(T[v].fams,v))}${__t(273)}`}let C=f.scrollTop;if(f._h!==c&&!(f._touch>Date.now())){let v=Q=>((Q&&Q.querySelector("h3")||{}).textContent||"").replace(/[^\p{L}\d]/gu,""),_=f.querySelector(".tc"),A=v(_),O=_?_.scrollTop:0;f.innerHTML=c,f._h=c,f.scrollTop=C;let J=f.querySelector(".tc");J&&O&&A&&v(J)===A&&(J.scrollTop=O)}if(f.style.display="flex",f.classList.toggle("min",qs),gd(),innerWidth<=640){let v=f.querySelector(".tc");if(v&&!v.querySelector(".mn")){let _=document.createElement("button");_.type="button",_.className="mn",_.setAttribute("aria-label",__t(281)),_.textContent=f.classList.contains("peek")?"\u25B4":"\u25BE",_.onclick=O=>{O.stopPropagation(),f.classList.toggle("peek"),f.classList.contains("peek")&&(Qr="",f.querySelectorAll("details[open]").forEach(J=>J.open=!1)),f.scrollTop=0,f.querySelectorAll(".tc").forEach(J=>J.scrollTop=0),requestAnimationFrame(Rs),Kh(),_.textContent=f.classList.contains("peek")?"\u25B4":"\u25BE"};let A=v.querySelector(".x");v.insertBefore(_,A?A.nextSibling:v.firstChild)}}else f.classList.remove("peek");let P=S("#rc");if(innerWidth<=640&&!P.classList.contains("min")&&!Re.done&&(Re.done=1,S("#rcgrab").click()),innerWidth<=640){let v=S("#inf").getBoundingClientRect().bottom;f.style.top=Math.round(v+8)+"px",f.style.width="calc(100vw - 76px)",f.style.maxHeight=Math.max(140,S("#rc").getBoundingClientRect().top-v-16)+"px"}else if(innerHeight<=500){let v=S("#inf").getBoundingClientRect().bottom;f.style.top=Math.round(v+8)+"px",f.style.width="min(290px, 40vw)",f.style.maxHeight=innerHeight-v-20+"px"}else f.style.top="",f.style.width=Ut?"390px":"300px",f.style.maxHeight="";Rs();let U=f.querySelector("[data-cx]");U&&(U.onclick=v=>{if(v.stopPropagation(),Re.done=0,Ut||Ot||Ce||me&&!Et&&ae<0){Ut=Ot=Ce=!1,Et||ae>=0||(me=""),f._h="",Re(),o();return}if(Et&&Ie.st>=0){let _=Ie.st;Ie.st=-1,Et=null,fe=null,ae=_,zn(),f._h="",Re(),De=0,o();return}if(Et&&ac(Et)){let _=Et,A=[...ln],O=ve?{...ve}:null,J=f.querySelector("[data-follow]");J&&J.click(),setTimeout(()=>Be(`${__t(282)} \xB7 ${_.fam||""} ${_.num}`,{label:__t(283),fn:()=>{A.forEach(([Q,G])=>ri(Q,G)),O&&!ve&&(ve=O,Cs()),Oi("map"),Js({num:String(_.num),tid:_.tid&&V.vp.has(_.tid)?_.tid:"",tr:_}),fe=Et,f._h="",Re(),_e(!0),o()}}),0)}Ie.st=-1,Ce=!1,Ot=!1,Ut=!1,Et=null,ae=-1,fe=null,zn(),Re(),De=0,o()}),nd(f),f.querySelectorAll("[data-alarm]").forEach(v=>v.onclick=_=>{_.stopPropagation();let A=Et&&Et.pat?Et:pt.get(Et&&Et.vtid)||null;if(!A)return;let O=+v.dataset.alarm,J=T[A.pat.stops[O]].id;ve&&ve.num===String(A.num)&&ve.sid===J?(ve=null,window.__schedOff&&window.__schedOff(7701),Be(__t(284))):(ve={num:String(A.num),sid:J,at:Date.now()},Be(`${__t(285)}${T[A.pat.stops[O]].n}`),"Notification"in window&&Notification.permission==="default"&&Notification.requestPermission()),Cs(),f._h="",Re()});{let v=f.querySelector("[data-fav]");v&&(v.onclick=_=>{_.stopPropagation();let A=Et&&Et.pat?Et:pt.get(Et&&Et.vtid)||null;if(!A)return;let O=mi.findIndex(J=>Hp(J,A));if(O>=0)mi.splice(O,1),Be(__t(286));else{let J=Gp(A);mi.push({num:String(A.num),fam:A.fam,sid:T[J].id,dest:T[A.pat.stops[A.pat.stops.length-1]].id,t:rt(A.t0+A.pat.t[2*A.pat.stops.indexOf(J)+1])}),Be(`${__t(287)}${A.fam}${__t(288)}${mi[mi.length-1].t}${__t(193)}${T[J].n}${__t(289)}`),"Notification"in window&&Notification.permission==="default"&&Notification.requestPermission()}Vp(),f._h="",Re(),_e(!0)})}{let v=f.querySelector("[data-share]");v&&(v.onclick=()=>{let _=me,A=Bt.filter(G=>(G.fam||G.tr&&G.tr.fam)===_),O=A.filter(G=>G.dl>=5).sort((G,nt)=>nt.dl-G.dl),J=V.alerts.filter(G=>G.fams.has(_)),Q=`${_}${__t(290)}${rt(ee().min)}: ${A.length}${__t(291)}${O.length}${__t(292)}${O.length?" ("+O.slice(0,4).map(G=>`${G.tr?G.tr.num:G.v.num} +${Math.round(G.dl)}`).join(", ")+")":""}.${J.length?__t(293)+J[0].txt:__t(294)}`;navigator.share?navigator.share({text:Q}).catch(()=>{}):(navigator.clipboard&&navigator.clipboard.writeText(Q),Be(__t(295)+Q.slice(0,60)+"\u2026"))})}f.querySelectorAll("[data-tripx]").forEach(v=>v.onclick=_=>{_.stopPropagation();let A=jn.findIndex(J=>J.k===v.dataset.tripx);if(A<0)return;let[O]=jn.splice(A,1);try{localStorage.setItem("rod_trips",JSON.stringify(jn,(J,Q)=>J==="_n"?void 0:Q))}catch{}f._h="",Re(),Be(`${__t(296)} \xB7 tren ${O.num}`,{label:__t(283),fn:()=>{jn.push(O);try{localStorage.setItem("rod_trips",JSON.stringify(jn,(J,Q)=>J==="_n"?void 0:Q))}catch{}f._h="",Re()}})}),f.querySelectorAll("[data-lseg]").forEach(v=>v.onclick=_=>{_.stopPropagation(),Zl.v=v.dataset.lseg,f._h="",Re();let A=f.querySelector(".tc");A&&(A.scrollTop=0)});{let v=f.querySelector("[data-lmore]");v&&(v.onclick=()=>{Jl.v=!Jl.v,f._h="",Re()})}{let v=f.querySelector("[data-share30]");v&&(v.onclick=()=>{let _=me,A=Up(_);if(!A)return;let O=mi.filter(Q=>Q.fam===_).map(Q=>[Q,Dp(Q)]).filter(([,Q])=>Q.n),J=`${__t(297)} ${_} ${__t(298)} ${Math.min(30,A.days)} ${__t(142)}: ${Math.round(A.pct)} % ${__t(299)}, ${__t(300)} ${Ts(A.avg)}${A.nc?`, ${A.nc} ${A.nc===1?__t(158):__t(159)}`:""}.${(Q=>{let G=Q.filter(nt=>nt.dl!=null);return G.length?` ${__t(301)} ${Q.length} ${Q.length===1?__t(131):__t(132)}: ${__t(302)} ${G.filter(nt=>nt.dl>=5).length} ${__t(303)} (\u2248 ${Jh(G.reduce((nt,W)=>nt+W.dl,0))} ${__t(136)}).`:""})(Im(_,30))}${O.map(([Q,G])=>` ${__t(304)} ${Q.t} ${__t(305)} ${G.late} ${__t(145)} ${G.n} ${__t(142)} (\u2248 ${Jh(G.sum)} ${__t(136)}).`).join("")} ${__t(306)}`;navigator.share?navigator.share({text:J}).catch(()=>{}):(navigator.clipboard&&navigator.clipboard.writeText(J),Be(__t(295)+J.slice(0,60)+"\u2026"))})}{let v=f.querySelector("[data-cols]");v&&(v.onclick=()=>{gn.on=!gn.on,N_(),f._h="",Re()})}f.querySelectorAll("[data-gs]").forEach(v=>v.onclick=()=>{let _=+v.dataset.gs;Ut=!1,window.__rodPickStation(_),Object.assign(s,{tx:T[_].w[0],ty:T[_].w[1],dist:Math.min(s.dist,20)}),o()}),f.querySelectorAll("[data-sf]").forEach(v=>v.onclick=_=>{_.stopPropagation();let A=v.dataset.sf;A?Di.f.has(A)?Di.f.delete(A):Di.f.add(A):Di.f.clear(),f._h="",Re()}),f.querySelectorAll("[data-gt]").forEach(v=>v.onclick=()=>{Ie.st=ae;let[_,A]=v.dataset.gt.split("|"),O=pt.get(A);Js({num:_,tid:V.vp.has(A)?A:"",tr:O||null})}),f.querySelectorAll("[data-sethome]").forEach(v=>v.onclick=()=>xd(ae,v.dataset.sethome));let $=f.querySelector("[data-follow]");$&&($.onclick=()=>{let v=ac(Et);if(fe=v?null:Et,!v&&Et&&Et.num!=null){let _=Et.pat.stops,A=String(Et.num),O=null,J=1e9;for(let Q of[Xe,$e,Tt]){let G=An(Q);if(G==null||!_.includes(G)||Q===Tt&&!Tt.st.length)continue;let nt=Jn(G).find(W=>String(W.num)===A&&!W.gone);nt&&nt.est<J&&(J=nt.est,O=Q)}O?ri(O.key,A):[...ln.keys()].forEach(Q=>ri(Q,null)),_e(!0)}if(v&&Et&&Et.num!=null){let _=String(Et.num);[...ln].forEach(([A,O])=>{String(O)===_&&ri(A,null)}),Rn.num===_&&(Rn.num=""),mt.tid===_&&(mt.tid="",mt.lock=!1,mt.manual=0,mt.quiet=Date.now()+10*6e4),ve&&ve.num===_&&(ve=null,Cs(),window.__schedOff&&window.__schedOff(7701)),_e(!0)}fe?(s.dist=Math.min(s.dist,22),innerWidth<=640&&(f.classList.add("peek"),f.scrollTop=0,S("#rc").classList.contains("min")||S("#rcgrab").click())):f.classList.remove("peek"),f._h="",Re(),o()})}window.__rodCard=Re;try{let a=localStorage.getItem("rod_inf");(a==="mini"||a==null)&&S("#inf").classList.add("mini")}catch{}S("#inft").onclick=()=>{let a=S("#inf").classList.toggle("mini");try{localStorage.setItem("rod_inf",a?"mini":"")}catch{}(Et||ae>=0||Ce||Ot)&&(f._h="",Re())},S("#ver").onclick=()=>{Ot=!0,Ut=!1,Ce=!1,f._h="",Re()};let V_={parado:'<path d="M9 6v12M15 6v12"/>',calor:'<path d="M12 4a2 2 0 012 2v8.5a4 4 0 11-4 0V6a2 2 0 012-2z"/><path d="M12 11v6"/>',abordo:'<path d="M12 3l10 18H2z"/><path d="M12 10v5M12 18v.4"/>',via:'<path d="M12 3l10 18H2z"/><path d="M12 10v5M12 18v.4"/>',gente:'<circle cx="9" cy="8" r="3"/><path d="M3 20c0-3.5 2.7-6 6-6s6 2.5 6 6"/><circle cx="17" cy="9" r="2.5"/><path d="M16 14.2c2.8.3 5 2.5 5 5.8"/>',retraso:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',cancel:'<circle cx="12" cy="12" r="9"/><path d="M9 9l6 6M15 9l-6 6"/>',ascensor:'<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 9l3-3 3 3M9 15l3 3 3-3"/>'},H_={vacio:"ok",lleno:"warn",petado:"bad",parado:"warn",calor:"warn",abordo:"bad",gente:"warn",retraso:"warn",cancel:"bad",ascensor:"warn",via:"bad"};function qp(a){let c={vacio:1,lleno:2,petado:3}[a],h=c?[0,1,2].map(p=>`<rect x="${4+p*6}" y="${14-p*4}" width="4" height="${6+p*4}" rx="1" ${p<c?'fill="currentColor"':""}/>`).join(""):V_[a]||'<circle cx="12" cy="12" r="3"/>';return`<svg class="cki ${H_[a]||""}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${h}</svg>`}let Is=new Proxy({},{get:(a,c)=>qp(c)}),Qr="",G_=["vacio","lleno","petado",__t(307),"calor","abordo"],Yp=["gente","retraso","cancel","ascensor","via"],W_={vacio:__t(308),lleno:__t(309),petado:__t(310),parado:__t(311),calor:__t(312),abordo:__t(313),gente:__t(314),retraso:__t(315),cancel:__t(316),ascensor:__t(317),via:__t(318)},ta=a=>W_[a]||(V.tipos||{})[a]||a,Qh=(a,c)=>(V.rep||[]).filter(h=>a&&h.num===String(a)&&!h.sid||c&&h.sid===String(c)&&!h.num||a&&c&&h.num===String(a)&&h.sid===String(c)),td=a=>{let c=Math.round((Date.now()+(V.repSkew||0)-a.at)/6e4);return c<1?__t(319):ys(c+" min")},ed=["vacio","lleno","petado"],X_={vacio:__t(320),lleno:__t(321),petado:__t(322)},Jp={vacio:__t(308),lleno:__t(309),petado:__t(323)},q_=(()=>{try{let a=localStorage.getItem("rod_dev");return/^[a-f0-9]{32}$/.test(a||"")||(a=[...crypto.getRandomValues(new Uint8Array(16))].map(c=>c.toString(16).padStart(2,"0")).join(""),localStorage.setItem("rod_dev",a)),a}catch{return""}})(),yr=(()=>{try{return JSON.parse(localStorage.getItem("rod_crowd")||"{}")}catch{return{}}})(),Zp=a=>{let c=yr[String(a)];return c&&Date.now()-c.at<20*6e4?c.lvl:""};function jp(a){let c=(V.crowd||[]).filter(p=>p.num===String(a));if(!c.length)return null;let h=c.slice().sort((p,x)=>x.n-p.n||x.at-p.at)[0];return{lvl:h.lvl,n:h.n,at:h.at}}let Kp=a=>{let c=a?jp(a):null,h=Qh(a,"");return c?[{kind:c.lvl,up:c.n,at:c.at,id:"c"+a},...h]:h},ic=(()=>{try{return new Set(JSON.parse(localStorage.getItem("rod_votesno")||"[]"))}catch{return new Set}})(),mo=(()=>{try{return JSON.parse(localStorage.getItem("rod_vt")||"{}")}catch{return{}}})(),sc=a=>a.kind==="ascensor"&&Date.now()-(mo[a.id]||0)>7*864e5,Y_=a=>{let c=Math.round(a/6e4);if(c<60)return c<1?__t(46):c+" min";let h=Math.round(c/60);if(h<48)return h+" h";let p=Math.round(h/24);if(p<60)return p+" "+__t(142);let x=Math.round(p/30);return x<24?x+" "+__t(324):Math.round(x/12)+" "+__t(325)},Qp=a=>{let c=a.up>1?(a.up>999?"999+":a.up)+" "+__t(326):"";if(a.kind==="ascensor"&&a.t0){let h=Date.now()+(V.repSkew||0)-a.t0;return(h<36e5?td(a):__t(327)+" "+Y_(h))+(c?" \xB7 "+c:"")}return(c?c+" \xB7 ":"")+td(a)},Ys=(()=>{try{return new Set(JSON.parse(localStorage.getItem("rod_votes")||"[]"))}catch{return new Set}})();function go(a,c,h){if(!V.url||!V.repOk)return"";let p=Qh(a,c).filter(R=>!ed.includes(R.kind)),x=(a?G_:Yp).filter(R=>!ed.includes(R)),y=a?jp(a):null,C=a?Zp(a):"",P=a?`<div class="cocc"><p class="ccur">${y?`<span class="cname">${Is[y.lvl]} <b>${m(Jp[y.lvl])}</b></span><small class="cmeta">${td(y)} \xB7 ${y.n===1?__t(328):y.n+" "+__t(329)}</small>`:`<span class="cname">${Is.vacio} <b class="cnone">${__t(330)}</b></span>`}</p><div class="cseg" role="group" aria-label="${__t(331)}">${ed.map(R=>`<button type="button" data-cl="${R}" data-rn="${m(a)}" data-rl="${m(h||"")}" class="${C===R?"on":""}" aria-pressed="${C===R}">${Is[R]} ${m(X_[R])}</button>`).join("")}</div><small class="chint">${C?__t(332):__t(333)}</small></div>`:"";return`<div class="crowd"><small>${qp("gente")} ${__t(334)}${p.length||a?"":__t(335)}</small>${P}${p.map(R=>`<p><span><span class="cname">${Is[R.kind]||"\u2022"} <b>${m(ta(R.kind))}</b></span><small class="cmeta">${Qp(R)}</small></span>${ic.has(R.id)&&!sc(R)?`<small class="cvok">\u2713 ${__t(336)}</small>`:Ys.has(R.id)&&!sc(R)?`<span class="cvb cvmine"><small class="cvok">\u2713 ${__t(337)}</small><button type="button" data-rx="${R.id}">${__t(338)}</button></span>`:`<span class="cvb"><button type="button" data-rv="${R.id}:1" title="${__t(339)}">\u2713 ${__t(340)}</button><button type="button" data-rv="${R.id}:-1" title="${__t(341)}">\u2715 ${R.kind==="ascensor"?__t(342):__t(343)}</button></span>`}</p>`).join("")}
      <details data-ckd="${m(String(a||"")+"|"+String(c||""))}"${Qr===String(a||"")+"|"+String(c||"")?" open":""}><summary>${a?__t(344):__t(345)}</summary><div class="ckb">${x.map(R=>`<button type="button" data-rk="${R}" data-rn="${m(a||"")}" data-rs="${m(c||"")}" data-rl="${m(h||"")}">${Is[R]} ${m(ta(R))}</button>`).join("")}</div><small>An\xF3nimo</small></details></div>`}async function rc(a,c){try{let p=await(await fetch(ce()+c,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...a,dev:q_})})).json();if(!p.ok){Be(p.err||__t(346));return}if(p.id){Ys.add(p.id),mo[p.id]=Date.now();try{localStorage.setItem("rod_vt",JSON.stringify(mo))}catch{}try{localStorage.setItem("rod_votes",JSON.stringify([...Ys].slice(-300)))}catch{}}if(c==="/crowd"||a.retract){if(a.retract){Ys.delete(a.id);try{localStorage.setItem("rod_votes",JSON.stringify([...Ys].slice(-300)))}catch{}Be(p.gone?__t(347):__t(348))}}else Be(c==="/vote"?__t(349):p.n>1?`${__t(350)}${p.n}${__t(351)}`:__t(352));let x=await Pt(ce(),"/reports.json");x&&x.items&&(V.rep=x.items,V.crowd=x.crowd||[],V.repFresh=Date.now()),f._h="",Re(),_e(!0)}catch{Be(__t(353))}}function nd(a){a.querySelectorAll("details[data-ckd]").forEach(c=>c.addEventListener("toggle",()=>{Qr=c.open?c.dataset.ckd:Qr===c.dataset.ckd?"":Qr,c.open&&c.scrollIntoView({block:"nearest",behavior:"smooth"})})),a.querySelectorAll("[data-cl]").forEach(c=>c.onclick=h=>{h.stopPropagation();let p=c.dataset.rn,x=c.dataset.cl,y=Zp(p)===x?"":x;y?yr[p]={lvl:y,at:Date.now()}:delete yr[p];for(let C in yr)Date.now()-yr[C].at>36e5&&delete yr[C];try{localStorage.setItem("rod_crowd",JSON.stringify(yr))}catch{}c.closest(".cseg").querySelectorAll("button").forEach(C=>{C.classList.toggle("on",C.dataset.cl===y),C.setAttribute("aria-pressed",C.dataset.cl===y)}),Be(y?`${__t(354)} \xB7 ${Jp[y]}`:__t(355)),rc({num:p,lvl:y,line:c.dataset.rl},"/crowd")}),a.querySelectorAll("[data-rx]").forEach(c=>c.onclick=h=>{h.stopPropagation(),c.disabled=!0,rc({id:+c.dataset.rx,retract:1},"/report")}),a.querySelectorAll("[data-rk]").forEach(c=>c.onclick=h=>{h.stopPropagation(),c.disabled=!0,Qr="",rc({kind:c.dataset.rk,num:c.dataset.rn,sid:c.dataset.rs,line:c.dataset.rl},"/report")}),a.querySelectorAll("[data-rv]").forEach(c=>c.onclick=h=>{h.stopPropagation();let[p,x]=c.dataset.rv.split(":");(+x>0?Ys:ic).add(+p),mo[+p]=Date.now();try{localStorage.setItem("rod_vt",JSON.stringify(Object.fromEntries(Object.entries(mo).filter(([,y])=>Date.now()-y<40*864e5))))}catch{}try{localStorage.setItem("rod_votes",JSON.stringify([...Ys].slice(-300))),localStorage.setItem("rod_votesno",JSON.stringify([...ic].slice(-300)))}catch{}rc({id:+p,v:+x},"/vote"),Be(+x>0?__t(356):__t(357)),_e(!0),f._h="",Re()})}let _o=0;function Be(a,c){let h=S("#toast");if(h||(h=document.createElement("div"),h.id="toast",document.body.appendChild(h)),h.textContent=a,c){let p=document.createElement("button");p.type="button",p.className="tact",p.textContent=c.label,p.onclick=x=>{x.stopPropagation(),clearTimeout(_o),h.className="",c.fn()},h.appendChild(p)}if(h.className="on",clearTimeout(_o),_o=setTimeout(()=>{h.className=""},Math.min(1e4,Math.max(4500,String(a).length*70))),!h._tap){h._tap=1,h.onclick=()=>{clearTimeout(_o),h.className=""};let p=null,x=0;h.addEventListener("touchstart",y=>{p=y.touches[0].clientY,x=0,h.style.transition="none"},{passive:!0}),h.addEventListener("touchmove",y=>{p!=null&&(x=Math.min(0,y.touches[0].clientY-p),h.style.translate=`0 ${x}px`,h.style.opacity=String(Math.max(.2,1+x/80)))},{passive:!0}),h.addEventListener("touchend",()=>{h.style.transition="",h.style.translate="",h.style.opacity="",p!=null&&x<-25&&(clearTimeout(_o),h.className=""),p=null})}}function xo(a){return a.src?`<b class="asrc ${a.src==="Adif"?"adif":""}">${a.src==="Adif"?__t(358):m(a.src)}</b>`:""}function vo(a){if(!a.when)return"";let[c,h]=a.when.split("T"),p=yt(new Date),x=p.ymd.slice(0,4)+"-"+p.ymd.slice(4,6)+"-"+p.ymd.slice(6,8);if(c===x&&h){let y=Math.round(p.min-(+h.slice(0,2)*60+ +h.slice(3,5)));return y<1?__t(319):y<60?ys(y+" min"):`${__t(359)}${h.slice(0,5)}`}return`${c.slice(8,10)}/${c.slice(5,7)}${h?" "+h.slice(0,5):""}`}function id(){let a=S("#alr");if(!a)return;let c=V.alerts.filter(h=>[...h.fams].some(p=>Dt.has(p))).length;a.hidden=!c,a.textContent=`\u26A0\uFE0F ${c}${c===1?__t(360):__t(361)}`}{let a=S("#alrslot");a&&a.appendChild(S("#alr"))}S("#alr").onclick=()=>{Ot=!1,Ut=!1,Ce=!0,Re()},S("#wcopy").onclick=async()=>{let a=S("#wcode").textContent;try{await navigator.clipboard.writeText(a),S("#wcopy").textContent=__t(362)}catch{let h=document.createRange();h.selectNodeContents(S("#wcode"));let p=getSelection();p.removeAllRanges(),p.addRange(h),S("#wcopy").textContent=__t(363)}setTimeout(()=>S("#wcopy").textContent=__t(364),2500)};let J_=zt.get("71801");function tm(){return document.hidden?ln.size||ve?12e4:1e12:3e4}function em(a,c){let h=T[a].id,p=Ft.get(h);!(Fe()&&V.url)||p&&(p.loading||Date.now()-p.at<tm())||(Ft.set(h,{...p||{},loading:!0,at:p?p.at:0}),Pt(ce(),"/departures.json?stationId="+h).then(x=>{Ft.set(h,{at:Date.now(),d:x}),c&&c()}).catch(()=>Ft.set(h,{at:Date.now(),err:1})))}let nm=a=>+a.slice(0,2)*60+ +a.slice(3,5),yo={k:-2,m:null};function Ps(a){let c=t.days.indexOf(ee().ymd);if(yo.k!==c){yo.k=c,yo.m=new Map;for(let h of st[c]||[])yo.m.set(String(h.num),h)}return yo.m.get(String(a))||null}let zi={at:0,m:new Map},So=a=>lt()?(bo(""),[...a].filter(c=>{let h=zi.m.get(c);return h&&h[0]>=2&&h[1]===0}).sort(B)):[];function bo(a){if(Date.now()-zi.at>6e4||zi.vp!==V.vp){zi.at=Date.now(),zi.vp=V.vp,zi.m=new Map;let h=ee(),p=t.days.indexOf(h.ymd);if(p>=0)for(let x of st[p]){let y=h.min-x.t0;if(y<x.pat.t[1]+3||y>x.pat.t[x.pat.t.length-2]-3)continue;let C=zi.m.get(x.fam)||[0,0];C[0]++,V.vp.has(x.tid)&&C[1]++,zi.m.set(x.fam,C)}}let c=zi.m.get(a);return c&&c[0]>=3?c[1]/c[0]:1}function ea(a,c,h,p){let x=T[a.pat.stops[h]].id;if([...Xe.st,...$e.st].includes(x)){let y=Jn(a.pat.stops[h]).find(C=>String(C.num)===String(a.num));if(y&&!y.gone)return y.est}return sd(a,c,h,0,p)}function im(a,c){if(!a||!c||c.pre||c.dObs==null||c.err==null||c.err>.6)return null;let h=Date.now()/1e3-c.ts;if(h>150||h<-30||(c.still||0)>=90)return null;let p=ne(a.pat).stopD,x=a.pat.t,y,C,P=p.reduce((R,U,$)=>Math.abs(U-c.dObs)<Math.abs(p[R]-c.dObs)?$:R,0);if(Math.abs(p[P]-c.dObs)<.16||c.atStop===P)y=x[2*P+1]??x[2*P],C=P;else{let R=p.findIndex($=>$>c.dObs);if(R<=0)return null;let U=Math.min(1,Math.max(0,(c.dObs-p[R-1])/(p[R]-p[R-1]||1)));y=x[2*R-1]+U*(x[2*R]-x[2*R-1]),C=R-1}return{t:yt(new Date).min-h/60,tpos:y,j0:C,sd:p}}function sd(a,c,h,p,x){let y=im(a,c);if(!y||h<=y.j0&&!(h===y.j0&&p===1))return x;let C=a.pat.t,P=y.t+(C[2*h+p]??C[2*h])-y.tpos;if(P-y.t>45)return x;let R=(x%1440+1440)%1440,U=((P-R+720)%1440+1440)%1440-720;return U>=-3&&U<=5?x+U:x}function pw(a,c,h,p){let x=im(a,c);if(!x)return null;let y=sd(a,c,h,1,x.t+a.pat.t[2*h+1]-x.tpos);return y-p.min>30||y<p.min-1?null:y}function Jn(a,c){let h=ee(),p=(lt()||at())&&h.live&&!c,x=Ft.get(T[a].id),y=[],C=new Map([...V.vp.values()].map(R=>[String((pt.get(R.tid)||{}).num||R.num),R]));if(p&&x&&x.d&&Array.isArray(x.d.trains)&&x.d.trains.length)for(let R of x.d.trains){let U=(R.departureDateHourSelectedStation||"").slice(11,16);if(!U)continue;let $=String(R.commercialNumber||R.technicalNumber||""),v=C.get($),_=v?V.delays.get(v.tid):null,A=Math.max(typeof _=="number"?Math.max(0,_/60):0,v&&v.pre&&v.preDl||0),O=nm(U);O<h.min-720&&(O+=1440);let J=+(R.departureDateHourSelectedStation||"").slice(17,19)||0,Q=O+J/60,G=v&&pt.get(v.tid)||Ps($),nt=G?G.pat.stops.indexOf(a):-1,W=nt>=0?(G.t0+G.pat.t[2*nt+1])%1440:null;if(W!=null){for(;W<Q-720;)W+=1440;for(;W>Q+720;)W-=1440;Math.abs(Q-W)>120&&(W=null)}let Vt,oe;W==null?(Vt=J||!A?Q:Q+A,oe=J?0:A):J||Math.abs(Q-W)>=1?(Vt=Q,oe=Math.max(0,Q-W)):(Vt=W+A,oe=A);let te=!1;if(G&&!v&&nt>0&&!J){let tn=t.days.indexOf(h.ymd),Ee=G.day===tn-1?1440:G.day===tn+1?-1440:0,be=G.t0+G.pat.t[1]-Ee;if(h.min<be){let vn=be+(G.pat.t[2*nt+1]-G.pat.t[1]);vn>Vt+1&&(Vt=vn,te=!0,W!=null&&(oe=Math.max(0,Vt-W)))}}if(W!=null&&(O=Math.round(W)),v&&G&&nt>=0){let tn=sd(G,v,nt,1,Vt);tn!==Vt&&(Vt=Math.max(tn,h.min),W!=null&&(oe=Math.max(0,Vt-W)))}y.push({dubious:te,rodLive:!!J,sm:O,est:Vt,dl:oe,fam:(R.line||{}).id||"",dest:(R.destinationStation||{}).name||"",destId:(R.destinationStation||{}).id||"",plat:R.platformSelectedStation||"",cancel:!!R.trainCancelled,obs:R.trainObservations||"",live:!!v,num:$,tid:v?v.tid:"",tr:v&&pt.get(v.tid)||Ps($),src:"oficial"})}else{let R=t.days.indexOf(h.ymd);if(R<0)return y;let U=($,v)=>{for(let _ of $){let A=_.pat.stops.indexOf(a);if(A<0||A===_.pat.stops.length-1)continue;let O=kt(_),J=typeof O=="number"?Math.max(0,O/60):0,Q=_.t0+_.pat.t[2*A+1]-v;if(Q+J<h.min-1||Q>h.min+(h.min>1080||h.min<300?600:360))continue;let G=_.pat.stops[_.pat.stops.length-1];y.push({sm:Q,est:Q+J,dl:J,fam:_.fam,dest:T[G].n,destId:T[G].id,plat:"",cancel:O==="X",obs:"",live:V.vp.has(_.tid),num:_.num,tid:_.tid,tr:_,src:"horario"})}};U(st[R],0),R>0&&U(st[R-1],1440),R+1<t.days.length&&h.min>1080&&U(st[R+1],-1440)}if(p){let R=new Set(y.map(v=>String(v.num))),U=t.days.indexOf(h.ymd),$=(v,_)=>{for(let A of v||[]){if(R.has(String(A.num)))continue;let O=A.pat.stops.indexOf(a);if(O<0||O===A.pat.stops.length-1)continue;let J=A.t0+A.pat.t[2*O+1]-_;if(J<h.min-45||J>h.min+1||!V.vp.get(A.tid))continue;let G=V.delays.get(A.tid),nt=typeof G=="number"?Math.max(0,G/60):0,W=A.pat.stops[A.pat.stops.length-1];y.push({sm:J,est:J+nt,dl:nt,fam:A.fam,dest:T[W].n,destId:T[W].id,plat:"",cancel:!1,obs:"",live:!0,num:A.num,tid:A.tid,tr:A,src:"horario"})}};U>=0&&($(st[U],0),U>0&&$(st[U-1],1440));for(let v of y){let _=v.tid&&V.vp.get(v.tid),A=v.tr?v.tr.pat.stops.indexOf(a):-1;v.passed=!!(_&&A>=0&&!_.pre&&_.next!=null&&_.next>=0&&_.next>A&&_.atStop!==A),!v.passed&&v.live&&v.est<h.min&&(v.est=h.min,v.late=!0),v.passed&&(v.gone=!0)}}let P=y.filter(R=>R.gone?h.min-R.est<20:R.est>=h.min-.5).sort((R,U)=>R.est-U.est);{let R=P.filter(U=>U.gone);if(R.length>2){let U=new Set(R.slice(0,R.length-2));P=P.filter($=>!U.has($))}}if(!P.filter(R=>!R.gone).length&&y.length&&y[0].src==="oficial"&&!c)return Jn(a,!0);for(let R of P){let U=R.num&&jh(R.num);U&&U.cx&&(R.cancel=!0,R.cxWhy=U.txt)}if(lt()&&h.live){let R=t.days.indexOf(h.ymd);for(let U of P){if(U.live||U.cancel||!U.tr)continue;let $=U.tr.day===R-1?1440:U.tr.day===R+1?-1440:0,v=U.tr.t0+U.tr.pat.t[1]-$+(U.dl||0);U.noPos=h.min>v+3&&!U.rodLive,U.ghost=U.noPos&&bo(U.fam)>=.7}}if(c||(P=P.concat(I(a,h.min-.5,h.min+360)).sort((R,U)=>R.est-U.est)),!c&&P.some(R=>R.src==="oficial")){let R=y.filter(v=>v.src==="oficial"),U=Math.max(...R.map(v=>v.sm)),$=new Set(P.map(v=>String(v.num)));P=P.concat(Jn(a,!0).filter(v=>!v.gone&&v.sm<=U&&v.est>=h.min-.5&&!$.has(String(v.num))).map(v=>Object.assign(v,{unconf:!0}))).sort((v,_)=>v.est-_.est)}if(P.some(R=>R.src==="oficial")){let R=Math.max(...P.map($=>$.sm)),U=new Set(P.map($=>String($.num)));P=P.concat(Jn(a,!0).filter($=>$.sm>R&&!U.has(String($.num))))}return P}let sm=(a,c,h,p)=>{let x={key:a,ico:c,name:h,st:[],i:0,walk:10,open:!1};try{let y=JSON.parse(localStorage.getItem("rod_"+a)||"null");y&&Object.assign(x,y)}catch{}return!x.st.length&&p&&(x.st=p),x},Xe=sm("home","\u{1F3E0}",__t(365),null),$e=sm("work","\u{1F4BC}",__t(366),null),Z_=a=>!!(a&&a.st&&a.st.length&&Tt.fix&&Date.now()-Tt.fix<5*6e4&&(Tt.acc||999)<150&&(Tt.dist[a.st[a.i||0]]??9)<.2),Tt={key:"near",ico:"\u{1F4CD}",name:__t(367),st:[],i:0,walk:0,open:!1,dist:{},fix:0,err:""};try{let a=t.days.indexOf(ee().ymd),c=[...Xe.st,...$e.st],h=!1;if(a>=0)for(let p of mi){if(c.includes(p.sid))continue;let x=Kr(p,a);if(!x)continue;let y=Gp(x);y==null||!c.includes(T[y].id)||(p.sid=T[y].id,p.t=rt(x.t0+x.pat.t[2*x.pat.stops.indexOf(y)+1]),p.num=String(x.num),h=!0)}h&&Vp()}catch{}let Ls=[Tt,Xe,$e];try{Tt.homeW=JSON.parse(localStorage.getItem("rod_homew")||"null")}catch{}Xe.open=!1,$e.open=!1;function rm(a,c){let h=bt(a,c),p=bt(a,c+.009);return 1/Math.hypot(p[0]-h[0],p[1]-h[1])}function rd(a){if(!navigator.geolocation){Tt.err=__t(368),_e(!0);return}navigator.geolocation.getCurrentPosition(c=>{let{longitude:h,latitude:p}=c.coords,x=bt(h,p),y=rm(h,p),C=T.map(($,v)=>[v,Math.hypot($.w[0]-x[0],$.w[1]-x[1])*y]).filter(([$])=>T[$].fams.size).sort(($,v)=>$[1]-v[1]),P=C.filter(([,$],v)=>v===0||$<Math.max(2.5,C[0][1]*1.6)).slice(0,3),R=Tt.st[0]!==T[P[0][0]].id;Tt.w=x,Tt.k=y,Tt.acc=c.coords.accuracy!=null?c.coords.accuracy:999,Tt.st=P.map(([$])=>T[$].id),Tt.dist=Object.fromEntries(P.map(([$,v])=>[T[$].id,v])),Tt.fix=Date.now(),Tt.err="",R&&(Tt.i=0);let U=[Xe,$e].find($=>$.st.includes(Tt.st[0])&&Tt.dist[Tt.st[0]]<1.5);_e(!0)},c=>{Tt.err=c.code===1?__t(369):__t(370),_e(!0)},{enableHighAccuracy:!1,maximumAge:6e4,timeout:12e3})}let Sr=a=>Math.max(1,Math.round(a*1.3/.08))+3;setTimeout(()=>rd(!0),400);let mt={fixes:[],tid:"",no:new Map,shown:""};try{let a=JSON.parse(localStorage.getItem("rod_onb")||"null");a&&a.tid&&Date.now()-a.at<3*36e5&&a.ymd===yt(new Date).ymd&&(mt.tid=a.tid,mt.manual=a.manual||0,mt.lock=!!a.lock)}catch{}let am="";setInterval(()=>{let a=mt.tid+"|"+(mt.manual||0)+"|"+(mt.lock?1:0);if(a!==am){am=a;try{mt.tid?localStorage.setItem("rod_onb",JSON.stringify({tid:mt.tid,manual:mt.manual||0,lock:!!mt.lock,at:Date.now(),ymd:yt(new Date).ymd})):localStorage.removeItem("rod_onb")}catch{}}},1500);let Rn={num:"",until:0};function ac(a){return!!a&&(fe===a||a.num!=null&&([...ln.values()].some(c=>String(c)===String(a.num))||String(mt.tid)===String(a.num)))}let om=()=>{let a=new Set([...ln.values()].map(String));return Rn.num&&Rn.until>Date.now()&&a.add(Rn.num),a};function ad(a,c){return!!a&&a.est-c.min<=3&&c.min-a.est<=20}function od(a){Be(a?`${__t(371)} (${a})`:__t(371))}function na(a,c,h){if(a=String(a),mt.tid&&mt.tid!==a){mt.no.set(mt.tid,Date.now()+20*6e4);let y=jn.findIndex(C=>C.num===String(mt.tid)&&C.d===ee().ymd&&Date.now()-C.t0<3*36e5);if(y>=0){jn.splice(y,1),sa.s=0;try{localStorage.setItem("rod_trips",JSON.stringify(jn,(C,P)=>C==="_n"?void 0:P))}catch{}}}mt.tid=a,mt.cand=null,mt.lock=c==="lock",mt.manual=c==="auto"?0:Date.now()+(c==="lock"?4*36e5:90*6e4),[...ln].forEach(([y,C])=>{String(C)!==a&&ri(y,null)}),Rn.num=a,Rn.until=Date.now()+90*6e4;let p=new Set;for(let y of Ls){let C=An(y);C!=null&&(y.platAt||y.goAt||y===Tt&&Tt.st&&Tt.st.length)&&p.add(C)}mt.from=[...p][0]??(h?(y=>y?An(y):null)(Ls.find(y=>y.key===h)):null);for(let y of Ls)(y.platAt||y.goAt||c!=="auto"&&y.open)&&(y.platAt=0,y.goAt=0,c!=="auto"&&(y.open=!1),si(y));window.__lpAt=Date.now();let x=Bt.find(y=>y.tr&&String(y.tr.num)===a)||dt(ee()).out.find(y=>y.tr&&String(y.tr.num)===a);if(c!=="auto"){let y=x?x.tr:Ps(a);if(y){fe=y,Et=y,ae=-1,Ve.sk="t"+(y.num||y.vtid),Ot=Ce=Ut=!1,f._h="";try{Re(),o()}catch{}}if(![...ln.values()].some(C=>String(C)===a)){let C=h||null,P=1e9;if(!C)for(let R of[Xe,$e,Tt]){let U=An(R),$=U!=null?Jn(U).find(v=>String(v.num)===a&&!v.gone):null;$&&$.est<P&&(P=$.est,C=R.key)}C&&ri(C,a)}}if(x){fe=x.tr;let y=x.tr.pat.stops,C=(()=>{let U=Math.max(x.real&&x.v&&x.v.next>=0?x.v.next:-1,x.p&&x.p.next>=0?x.p.next:-1),$=mt.fixes[mt.fixes.length-1];if($&&Date.now()-$.t<12e4){let v=-1,_=.6;y.forEach((A,O)=>{let J=Math.hypot(T[A].w[0]-$.w[0],T[A].w[1]-$.w[1])*$.k;J<_&&(_=J,v=O)}),v>=0&&(U=Math.max(U,v))}for(let v of p){let _=y.indexOf(v);_>=0&&(U=Math.max(U,_))}return U<0?1:U})(),P=[...Xe.st,...$e.st,...oc.keys()],R=y.findIndex((U,$)=>$>=C&&!p.has(U)&&P.includes(T[U].id));R>0&&!(ve&&ve.num===a)&&(ve={num:a,sid:T[y[R]].id,at:Date.now()},Cs())}return x}function j_(){let a=mt.fixes;if(a.length<2)return;let c=a[a.length-1],h=a.slice().reverse().find(A=>c.t-A.t>=8e3&&c.t-A.t<=9e4);if(!h)return;let p=Math.hypot(c.w[0]-h.w[0],c.w[1]-h.w[1])*c.k,x=c.spd!=null&&c.spd>0?c.spd*3.6:p/((c.t-h.t)/36e5);if(c.acc!=null&&c.acc>100)return;if(mt.tid&&x<8){if(!mt.slow)mt.slow=c.t;else if(c.t-mt.slow>9e4){let A=T.map((G,nt)=>[nt,G.w?Math.hypot(G.w[0]-c.w[0],G.w[1]-c.w[1])*c.k:99]).filter(G=>G[1]<.35).sort((G,nt)=>G[1]-nt[1])[0],O=Bt.find(G=>G.tr&&String(G.tr.num)===mt.tid),J=O&&(O.real&&O.v&&O.v.w?O.v.w:O.p&&O.p.w),Q=J?Math.hypot(J[0]-c.w[0],J[1]-c.w[1])*c.k>1:!0;if(A&&(!mt.lock||Q)){let G=mt.tid,nt=jn.find(W=>W.num===G&&W.d===ee().ymd);if(nt){nt.b=T[A[0]].id,nt.done=!0;try{localStorage.setItem("rod_trips",JSON.stringify(jn,(W,Vt)=>W==="_n"?void 0:Vt))}catch{}}mt.no.set(G,Date.now()+90*6e4),mt.tid="",mt.manual=0,mt.lock=!1,mt.slow=0,mt.quiet=Date.now()+10*6e4,fe=null,[...ln].forEach(([W,Vt])=>{String(Vt)===G&&ri(W,null)}),Rn.num===G&&(Rn.num="");try{saveOnbState&&saveOnbState()}catch{}_e(!0);return}}}else mt.slow=0;if(!mt.tid&&mt.quiet&&Date.now()<mt.quiet||mt.manual&&Date.now()<mt.manual)return;if(mt.tid){if(x<22)return;let A=Bt.find(O=>O.tr&&String(O.tr.num)===mt.tid)||dt(ee()).out.find(O=>O.tr&&String(O.tr.num)===mt.tid);if(A){if(Math.hypot(A.p.w[0]-c.w[0],A.p.w[1]-c.w[1])*c.k<=5){mt.far=0;return}if(mt.far||(mt.far=c.t),c.t-mt.far<12e4)return}mt.far=0}let y=om();if(!mt.tid&&y.size&&x>=15&&x<=200&&!(c.acc!=null&&c.acc>80))for(let A of[...Bt.filter(O=>O.real),...dt(ee()).out]){if(!A.tr||!y.has(String(A.tr.num))||(mt.no.get(String(A.tr.num))||0)>Date.now())continue;if(Math.hypot(A.p.w[0]-c.w[0],A.p.w[1]-c.w[1])*c.k<=(A.real?1.6:2.2)){lm(A);return}}if(x<22||x>200)return;let C=[c.w[0]-h.w[0],c.w[1]-h.w[1]],P=null,R=2.5,U=Bt.filter(A=>A.real),$=dt(ee()).out.filter(A=>A.tr&&!U.some(O=>O.tr&&String(O.tr.num)===String(A.tr.num))),v=om();for(let A of[...U,...$]){if(!A.tr||v.size&&!v.has(String(A.tr.num)))continue;let O=A.real?2.5:3.5,J=Math.hypot(A.p.w[0]-c.w[0],A.p.w[1]-c.w[1])*c.k;if(J>Math.min(R,O)||P&&P.real&&!A.real)continue;let Q=A.real?A.v.next:A.p.next;if(Q==null||Q<0)continue;let G=T[A.tr.pat.stops[Q]].w,nt=[G[0]-A.p.w[0],G[1]-A.p.w[1]];if(nt[0]*C[0]+nt[1]*C[1]<=0)continue;let W=String(A.tr.num);(mt.no.get(W)||0)>Date.now()||(R=J,P=A)}if(!P){mt.cand=null;return}let _=String(P.tr.num);if(mt.tid!==_&&!(c.acc!=null&&c.acc>50)){if(!mt.cand||mt.cand.k!==_){mt.cand={k:_,t:c.t};return}c.t-mt.cand.t<2e4||lm(P)}}function lm(a){let c=String(a.tr.num);na(c,"auto"),Ot=Ce=Ut=!1,ae=-1,Et=a.tr,fe=a.tr,Object.assign(s,{tx:a.p.w[0],ty:a.p.w[1],dist:Math.min(s.dist,22)}),innerWidth<=640&&(f.classList.add("peek"),S("#rc").classList.contains("min")||S("#rcgrab").click()),zn(),f._h="",Re(),De=0,o();let h=S("#onb");h||(h=document.createElement("div"),h.id="onb",document.body.appendChild(h)),h.innerHTML=`${__t(372)}${m(a.tr.fam)} ${m(a.tr.num)}${__t(373)}${m(T[a.tr.pat.stops[a.tr.pat.stops.length-1]].n)}${__t(374)}${ve&&ve.num===c?`${__t(376)}${m(T[zt.get(ve.sid)].n)}`:""}${__t(375)}`,h.className="on",h.querySelector("[data-onb-no]").onclick=()=>{mt.no.set(c,Date.now()+20*6e4),mt.tid="",mt.lock=!1,fe=null,Et=null,f._h="",Re(),h.className=""},h.querySelector("[data-onb-x]").onclick=()=>{h.className=""},setTimeout(()=>{h.className=""},15e3)}if(navigator.geolocation&&navigator.geolocation.watchPosition){let a=null,c=null,h=0,p=Date.now()+45e3,x=()=>!!(Ls.some(U=>U.goAt)||h>Date.now()&&!mt.lock||p>Date.now()&&!mt.tid),y=U=>{let{longitude:$,latitude:v}=U.coords,_={t:U.timestamp||Date.now(),w:bt($,v),k:rm($,v),spd:U.coords.speed,acc:U.coords.accuracy};if(!(mt.fixes.length&&mt.fixes[mt.fixes.length-1].t===_.t)){mt.fixes.push(_),mt.fixes=mt.fixes.filter(A=>_.t-A.t<12e4);{let A=mt.fixes.find(J=>_.t-J.t>=2e4),O=_.spd!=null&&_.spd>0?_.spd*3.6:A?Math.hypot(_.w[0]-A.w[0],_.w[1]-A.w[1])*_.k/((_.t-A.t)/36e5):0;O>=15&&O<250&&(_.acc==null||_.acc<300)&&(h=Date.now()+10*6e4)}try{ee().live&&j_()}catch{}}},C=0,P=()=>{if(!(a!=null||C))if(c=x(),c)a=navigator.geolocation.watchPosition(y,()=>{},{enableHighAccuracy:!0,maximumAge:5e3,timeout:2e4});else{let U=()=>navigator.geolocation.getCurrentPosition(y,()=>{},{enableHighAccuracy:!1,maximumAge:55e3,timeout:2e4});U(),C=setInterval(U,6e4)}};setInterval(()=>{(a!=null||C)&&x()!==c&&(R(),P())},5e3);let R=()=>{a!=null&&(navigator.geolocation.clearWatch(a),a=null),C&&(clearInterval(C),C=0)};setTimeout(P,3e3),document.addEventListener("visibilitychange",()=>{document.hidden?R():(mt.fixes=[],p=Date.now()+45e3,P())})}setInterval(()=>{!document.hidden&&(Date.now()-Tt.fix>11e4||Ls.some(a=>a.goAt))&&rd(!1)},3e4);let si=a=>{try{localStorage.setItem("rod_"+a.key,JSON.stringify({st:a.st,i:a.i,walk:a.walk,open:a.open,hide:a.hide||"",goAt:a.goAt||0,platAt:a.platAt||0,xfer:a.xfer||null}))}catch{}},An=a=>a.st.length?zt.get(a.st[a.i]||a.st[0]):null;function cm(a,c,h,p){if(p&&c.bus)return c.bstops.slice(1).some(C=>p.has(C))?"to":"out";if(p&&c.tr){let C=c.tr.pat.stops,P=C.indexOf(a);if(P>=0&&C.slice(P+1).some(R=>p.has(R)))return"to"}if(p&&c.tr)return"out";let x=zt.get(c.destId)??T.findIndex(C=>C.n===c.dest);if(x<0||x==null||h==null)return"otros";let y=C=>Math.hypot(T[C].w[0]-T[h].w[0],T[C].w[1]-T[h].w[1]);return y(x)<y(a)?"to":"out"}let br=a=>a<1?__t(319):a<60?Math.floor(a)+" min":Math.floor(a/60)+" h "+String(Math.floor(a%60)).padStart(2,"0"),um=0,K_=/sin servicio|sense servei|suspend|interromp|interrump|no circula|no se puede garantizar|no es pot garantir/i,hm=/sin servicio|sense servei|suspend|interromp|interrump|no circula|no hi ha circulaci|cortad|tallad|corte de|tall de|servicio alternativo|servei alternatiu|por carretera|per carretera|no se puede garantizar|no es pot garantir/i,dm=/huelga|vaga\b|strike|servicios? m[ií]nimos|serveis m[ií]nims|demora|retard|retras|v[ií]a [uú]nica|una sola v[ií]a|incidencia|incidència|aver[ií]a|avaria|aturad|detenid|parad[oa]s? en|velocidad reducida|velocitat redu/i,Mr=a=>{let c=a.es||a.txt;return hm.test(c)||hm.test(a.txt)?3:dm.test(c)||dm.test(a.txt)||a.lvl>=2?2:1},fm=4,ld=new Map,oc=new Map;function pm(a,c){let h=t.days.indexOf(ee().ymd),p=h+"|"+a+"|"+[...c].join(",");if(ld.has(p))return ld.get(p);let x=!1,y=new Set,C=new Set;for(let R of st[h]||[]){let U=R.pat.stops,$=U.indexOf(a);if($>=0)for(let _=$+1;_<U.length;_++){if(c.has(U[_])){x=!0;break}y.add(U[_])}let v=-1;for(let _=1;_<U.length;_++)if(c.has(U[_])){v=_;break}if(v>0)for(let _=0;_<v;_++)C.add(U[_])}let P=x?null:[...y].filter(R=>C.has(R)&&R!==a&&!c.has(R));return ld.set(p,P),P}function cd(a,c,h,p){for(let x of p||Jn(a)){if(x.cancel||x.gone||!x.tr||x.est<c-.01)continue;let y=x.tr.pat.stops,C=y.indexOf(a);if(C<0)continue;let P=-1;for(let R=C+1;R<y.length;R++)if(h.has(y[R])){P=R;break}if(!(P<0))return{c:x,fin:x.est+(x.tr.pat.t[2*P]-x.tr.pat.t[2*C+1])}}return null}function Q_(a,c,h){let p=cd(a,c+2,h,Jn(a));return p?{c:p.c,fin:p.fin,m:p.c.est-c,lost:!1}:null}function ud(a,c,h,p,x){let y=null,C=new Map,P=Jn(a).filter(R=>!R.cancel&&!R.gone&&R.tr&&R.est-x.min>=p).slice(0,8);for(let R of P){let U=R.tr.pat.stops,$=U.indexOf(a);if(!($<0))for(let v of h){let _=U.indexOf(v);if(_<=$)continue;let A=R.est+(R.tr.pat.t[2*_]-R.tr.pat.t[2*$+1]);C.has(v)||C.set(v,Jn(v));let O=cd(v,A+fm,c,C.get(v));O&&(!y||O.fin<y.finAt-.01||Math.abs(O.fin-y.finAt)<.01&&R.est>y.x.est)&&(y={T:v,x:R,finAt:O.fin})}}return y}function tx(a,c,h,p,x){let y=c.T,C=Jn(y),P=c.fin,R=[];for(let v of C){if(R.length>=5)break;if(v.cancel||v.gone||!v.tr)continue;let _=v.tr.pat.stops,A=_.indexOf(y),O=-1;for(let G=A+1;G<_.length;G++)if(P.has(_[G])){O=G;break}if(O<0||h.x&&h.x.arr!=null&&v.est<h.x.arr-.01)continue;let J=v.est+(v.tr.pat.t[2*O]-v.tr.pat.t[2*A+1]),Q=p&&p.c===v;R.push(`<li class="hr${Q?" pin":""}" style="--lc:${Z[v.fam]||"#6b7385"}"><span class="hrt"><b>${rt(v.est)}</b><small>${h.x&&h.x.arr!=null?v.est-h.x.arr<2?__t(377):Math.floor(v.est-h.x.arr)+" "+__t(378):""}</small></span><span class="hrd">${Ni(v.fam+" \xB7 "+v.dest,v.fam)}<small class="hro">${__t(379)} ${rt(J)}${v.num?" \xB7 "+__t(380)+m(v.num):""}</small></span><span class="hrm">${v.dl>=1?`<em class="dl ${$i(v.dl)}">+${Math.round(v.dl)}</em>`:""}${v.plat?`${__t(271)}${m(v.plat)}</i>`:""}</span></li>`)}let U=(()=>{let v=[];for(let _ of c.cands){let A=ud(An(a),P,[_],0,x);A&&v.push([_,A.finAt])}return v.sort((_,A)=>_[1]-A[1]),v.filter(([_,A])=>A<=v[0][1]+30||c.fixed&&_===y).slice(0,4)})(),$=U.length>1||c.fixed?`<div class="hxst"><span>${__t(381)}:</span><button type="button" data-hxf="${a.key}:" class="${c.fixed?"":"on"}">${__t(382)}</button>${U.map(([v])=>`<button type="button" data-hxf="${a.key}:${m(T[v].id)}" class="${c.fixed&&v===y?"on":""}">${m(T[v].n)}</button>`).join("")}</div>`:"";return`<div class="hxfer"><div class="hdir">\u21C4 ${__t(381)} ${Ni(T[y].n,p?p.c.fam:"")} \u2192 ${m(c.finName)}</div><ol class="hxl">${R.join("")||`<li class="hr"><span class="hrd">${__t(383)}</span></li>`}</ol>${$}</div>`}let mm=new Set;function ex(a,c,h){mm.has(a)||(mm.add(a),Em(c,h,a))}function nx(a,c,h){let p=An(a);if(a===Tt){if(mt.tid)return"";if(p==null)return`${__t(384)}${Tt.err?m(Tt.err)+__t(385):__t(386)}</small></span><span class="hchev">\u27F3</span></button></div>`;if([Xe,$e].find(Rt=>Rt.st.includes(Tt.st[0])&&Tt.dist[Tt.st[0]]<1.5)||Date.now()-Tt.fix>10*6e4)return"";a.walk=Sr(Tt.dist[a.st[a.i]]||0)}if(p==null){let it=Tt.st.length?zt.get(Tt.st[0]):null,Rt=a===$e?Xe:$e,Xt=it!=null&&!Rt.st.includes(Tt.st[0]);return`<div class="hplace"><div class="hhead hnew"><span class="hico">${a.ico}</span><span class="htit"><b>${a.name}</b><small>${Xt?`${__t(387)}${m(T[it].n)}</b>`:__t(388)}</small></span>${Xt?`<button type="button" class="hpick" data-hnear="${a.key}${__t(389)}`:""}<button type="button" class="hpick alt" data-hset="${a.key}">${Xt?__t(390):__t(391)}</button></div></div>`}em(p,()=>_e(!0));let x=a===Tt?null:a===Xe?$e:Xe,y=x?An(x):null,C=y!=null&&y!==p?y:J_,P=y!=null&&y!==p?x===$e?__t(392):"casa":"Barcelona",R=T[p].fams,U=new Set([...R].filter(it=>Dt.has(it))),$=U.size<R.size,v=!1;U.size||(U=new Set(R),$=!1,v=!0);let _=Tt.w?Math.hypot(T[p].w[0]-Tt.w[0],T[p].w[1]-Tt.w[1])*Tt.k:null,A=_!=null&&Date.now()-Tt.fix<10*6e4;a.platAt&&Date.now()-a.platAt>45*6e4&&(a.platAt=0,si(a)),mt.tid&&a.platAt&&(a.platAt=0,si(a));let O=a!==Tt&&!!a.platAt&&!mt.tid,J=a===Tt||A&&_>3&&!a.goAt&&!O,Q=O||a!==Tt&&A&&(_<.08&&Tt.acc<=40||_<.15&&Tt.acc<=100&&Date.now()-Tt.fix<3*6e4)&&!(a===Xe&&Tt.homeW&&Math.hypot(Tt.homeW[0]-Tt.w[0],Tt.homeW[1]-Tt.w[1])*Tt.k<.05),G=a.goAt?(Date.now()-a.goAt)/6e4:null;G!=null&&(G>60||Q)&&(a.goAt=0,si(a)),A&&a!==Tt&&Tt.fix!==a._khFix&&(a._khFix=Tt.fix,(a._kh=(a._kh||[]).filter(it=>Date.now()-it.t<6*6e4)).push({t:Date.now(),km:_}));let nt=A&&a!==Tt&&_<=3&&!(a._noWay>Date.now())&&(a._kh||[]).some(it=>Date.now()-it.t>=6e4&&Date.now()-it.t<=5*6e4&&it.km-_>=.08),W=!Q&&a!==Tt&&(nt||!!a.goAt),Vt=W?A&&_<=3?Sr(_):Math.max(0,a.walk-G):0,oe=A&&Tt.acc<=150&&a!==Tt&&_>.15&&_<=3,te=oe&&!W&&!Q&&!J&&Sr(_)>=a.walk+5?Sr(_):null,tn=Jn(p),Ee=tn.filter(it=>!Z[it.fam]||Dt.has(it.fam)||v),be=J||Q?0:W?Vt:te??a.walk,vn=V.alerts.filter(it=>[...it.fams].some(Rt=>U.has(Rt))||it.stops&&it.stops.has(p)),sn=vn.some(it=>K_.test(it.es||it.txt)),pn={to:[],out:[],otros:[],all:Ee},gi=P!=="Barcelona"?new Set(x.st.map(it=>zt.get(it)).filter(it=>it!=null)):null,_i=null;if(gi&&a!==Tt){let it=pm(p,gi);if(it&&it.length){let Rt=a.xfer!=null?zt.get(a.xfer):null,Xt=Rt!=null&&it.includes(Rt)?[Rt]:it,re=ud(p,gi,Xt,be,c);re&&(_i=Object.assign(re,{fin:gi,finName:T[C].n,cands:it,fixed:Rt!=null&&it.includes(Rt)}),em(re.T,()=>_e(!0)),C=re.T,gi=new Set([re.T]))}}Ee.forEach(it=>pn[cm(p,it,C,gi)].push(it));let mc="";if(gi&&!pn.to.length&&Ee.length<tn.length){let it=tn.filter(Rt=>!Ee.includes(Rt)&&cm(p,Rt,C,gi)==="to");it.length&&(pn.to=it,mc=[...new Set(it.map(Rt=>Rt.fam))].sort(B).join(", "))}let Mx=it=>{if(it==="all")return __t(393);let Rt=re=>(re.find(yn=>yn.fam)||{}).fam;if(it==="to")return __t(394)+Ni(P==="Barcelona"?"Barcelona":T[C].n,Rt(pn.to)||[...U][0])+(()=>{let re=$&&!mc?[...U].filter(yn=>pn.to.some(oi=>oi.fam===yn)).sort(B):[];return re.length?`<span class="hwf" title="${__t(395)}">${re.map(Mn).join("")}</span>`:""})();let Xt=[];for(let re of pn[it])Xt.some(yn=>yn[0]===re.dest)||Xt.push([re.dest,re.fam]);return Xt.length?__t(394)+Xt.slice(0,2).map(([re,yn])=>Ni(re,yn)).join(" "):__t(396)},Zs=ln.get(a.key);Zs&&!tn.some(it=>String(it.num)===Zs&&!it.gone)&&(Rn.num=Zs,Rn.until=Date.now()+90*6e4,ri(a.key,null));let la=it=>{let Rt=Zs&&pn[it].find(rn=>String(rn.num)===Zs&&!rn.gone);if(Rt&&Rt.cancel)return{cls:"v-miss",pin:1,x:Rt,big:__t(397),small:`${rt(Rt.est)} \xB7 ${Rt.fam}${__t(398)}${Rt.dest}${Rt.num?" \xB7 "+__t(380)+Rt.num:""}`,warn:""};let Xt=Rt||pn[it].find(rn=>!rn.cancel&&!rn.gone&&rn.est-c.min>=be);if(!Xt){let rn=pn[it].find(mn=>!mn.cancel);return rn&&!J?{cls:"v-miss",big:__t(399),small:`${__t(400)}${rt(rn.est)}${__t(401)}${br(rn.est-c.min)}${__t(402)}`}:{cls:"v-no",big:__t(403),small:__t(404)}}let re=Xt.est-c.min-be,yn=J||Q?"v-info":W?re<1.5?"v-warn":"v-ok":re<1.5?"v-bad":re<5?"v-warn":"v-ok",oi=Xt.ghost?pn[it].find(rn=>!rn.cancel&&!rn.ghost&&rn.live&&rn.est>Xt.est):null;if(Rt&&re<0&&!J&&!Q){let rn=pn[it].find(mn=>!mn.cancel&&!mn.gone&&!mn.ghost&&mn!==Xt&&mn.est-c.min>=be);return{cls:"v-miss",pin:1,miss:1,nxt:rn,x:Xt,ghost:!!Xt.ghost,big:__t(405),small:`${rt(Xt.est)} \xB7 ${Xt.fam}${__t(398)}${Xt.dest}${Xt.plat?__t(183)+Xt.plat:""}${Xt.num?" \xB7 "+__t(380)+Xt.num:""}`,warn:rn?`\u27A1\uFE0F ${__t(406)}: ${rn.est-c.min-be<1?__t(407):__t(408)+" "+br(rn.est-c.min-be)} \xB7 ${rt(rn.est)}${rn.arr!=null?" \u2192 "+rt(rn.arr):""}${rn.plat?__t(183)+rn.plat:""}${rn.num?" \xB7 "+__t(380)+rn.num:""}`:""}}return{pin:Rt?1:0,cls:yn,ghost:!!Xt.ghost,soft:!Xt.live&&!Xt.ghost&&!Xt.unconf&&!Xt.cancel?Xt.rodLive?__t(409):__t(410):"",big:J||Q?re<1?__t(411):__t(412)+br(re):W?re<1.5?__t(413):__t(414)+br(re)+__t(415):re<1.5?__t(416):__t(417)+br(re),warn:Xt.unconf?"\u26A0\uFE0F "+__t(418):Rt&&!Xt.live&&Xt.rodLive&&!Xt.ghost||!Xt.ghost&&Xt.noPos&&Rt?"":!Xt.ghost&&Xt.late&&Rt?__t(419):Xt.ghost?`\u26A0\uFE0F ${__t(420)}${oi?`${__t(421)}${rt(oi.est)}`:""}`:sn?__t(422):"",small:`${Xt.bus?__t(423):""}${rt(Xt.est)} \xB7 ${Xt.fam}${__t(398)}${Xt.dest}${Xt.plat?__t(183)+Xt.plat:""}${Xt.dl>=1?` \xB7 +${Math.round(Xt.dl)} min`:""}${Xt.arr!=null?`${__t(424)}${rt(Xt.arr)}`:""}${Xt.num?" \xB7 "+__t(380)+Xt.num:""}`,x:Xt}},wx=gi||new Set([C]),Ex=it=>{let Rt=it.tr;if(!Rt)return null;let Xt=Rt.pat.stops,re=Xt.indexOf(p);if(re<0)return null;let yn=-1;for(let oi=re+1;oi<Xt.length;oi++)if(wx.has(Xt[oi])){yn=oi;break}return yn<0?null:it.est+(Rt.pat.t[2*yn]-Rt.pat.t[2*re+1])};pn.to.forEach(it=>{it.arr=Ex(it)});let Co=pn.out.length?"out":"otros",Ke=la("to"),Ro=la(Co);if(Q||a===Tt&&Tt.acc<=40&&(Tt.dist[a.st[a.i]]||9)<.08){for(let it of[Ke.x,Ro.x].concat(a===Tt?[la("all").x]:[]))if(it&&ln.has(a.key)&&String(ln.get(a.key))===String(it.num)&&!it.cancel&&it.est-c.min<=2&&it.est-c.min>-.5){let Rt="w"+it.num+"|"+Math.round(it.sm);wm.has(Rt)||(wm.add(Rt),ec(`${__t(425)}${it.fam}${__t(398)}${it.dest}`,`${Math.round(it.est-c.min)<=1?__t(426):__t(427)+Math.round(it.est-c.min)+" min"}${__t(398)}${T[p].n}${it.plat?__t(183)+it.plat:""}`))}}let $m=lt()&&c.live,zm=U.size===1,Tx=it=>{let Rt=it.est-c.min;return J?it.cancel?"cx":Rt<0?"u-miss":"u-info":it.cancel?"cx":Rt<be?"u-miss":Rt<be+1.5?"u-now":Rt<be+5?"u-soon":"u-ok"},Ax=it=>{if(it.gone)return`<li class="hr u-gone${it.live?" on":""}${po(it)?" sel":""} go" data-dk="${h.push(it)-1}" title="Ya ha salido: toca para ver d\xF3nde va"><span class="hrt"><b>${rt(it.est)}${__t(428)}${ys(Math.max(1,Math.round(c.min-it.est))+" min")}</small></span><span class="hrd">${Ni((zm?"":it.fam+" \xB7 ")+it.dest,it.fam)}${__t(429)}${m(it.num)}</small></span><span class="hrm">${it.dl>=1?`<em class="dl ${$i(it.dl)}">+${Math.round(it.dl)}</em>`:""}</span></li>`;let Rt=!it.cancel&&it.est-c.min<be,Xt=Kp(it.num);return`<li class="hr ${Tx(it)}${it.live?" on":""}${it.ghost?" gh":""}${po(it)?" sel":""}${Zs&&String(it.num)===Zs?" pin":""}${mi.some(re=>{let yn=Kr(re,t.days.indexOf(c.ymd));return yn&&String(yn.num)===String(it.num)})?" fav":""} go" style="--lc:${Z[it.fam]||"#6b7385"}" data-dk="${h.push(it)-1}" title="${it.cancel?__t(397):Rt?__t(405):__t(430)}"><span class="hrt"><b>${it.cancel?"\u2715":Rt?rt(it.est):br(it.est-c.min)}</b><small>${it.cancel?__t(148):it.late?__t(431):Rt?__t(432):it.ghost?__t(433):rt(it.est)}</small></span><span class="hrd">${it.bus?'<i class="bus" title="Autob\xFAs que sustituye al tren por obras">\u{1F68C}</i>':""}${Ni((zm?"":it.fam+" \xB7 ")+it.dest,it.fam)}${Xt.length?`<i class="cr" title="${m(Xt.map(re=>ta(re.kind)).join(" \xB7 "))}">${Xt.slice(0,2).map(re=>Is[re.kind]).join("")}</i>`:""}${it.arr!=null?`${__t(434)}${rt(it.arr)}${it.num?" \xB7 "+__t(380)+m(it.num):""}${(()=>{let re=it.num&&ql(it.num);return re&&re.n>=5&&re.late/re.n>=.5?` \xB7 <b class="slate">${__t(435)} \xB7 ${re.late} ${__t(145)} ${re.n} ${__t(142)}</b>`:""})()}</small>`:""}${it.obs?`<small class="hro">${m(it.obs)}</small>`:""}${it.unconf?`<small class="hro unc">${__t(436)}</small>`:""}</span><span class="hrm">${!it.cancel&&it.dl>=1?`<em class="dl ${$i(it.dl)}">+${Math.round(it.dl)}</em>`:""}${it.plat?`${__t(271)}${m(it.plat)}</i>`:""}</span></li>`},Io=(it,Rt,Xt)=>`<div class="hcol"><div class="hdir">${Mx(it)}${Xt?`<button type="button" class="hhide" data-hhide="${a.key}:${Xt}" title="${__t(437)}">\u2715</button>`:""}</div><div class="hv ${Rt.cls}${Rt.ghost||Rt.pin&&Rt.x&&Rt.x.noPos&&!So([Rt.x.fam]).length?" gh":""}${Rt.x?" go":""}"${Rt.miss&&Rt.nxt&&Rt.nxt.num?` data-pinnext="${a.key}:${m(Rt.nxt.num)}" title="${__t(438)}"`:Rt.x?` data-dk="${h.push(Rt.x)-1}"`:""}><b>${Rt.big}</b>${Rt.pin?`<button type="button" class="hunpin" data-unpin="${a.key}" title="${__t(439)}">\u{1F4CC} ${__t(440)} \u2715</button>`:""}<small>${m(Rt.small)}${te!=null&&it!==Co?` \xB7 <span class="nw hfar2">${te}\xA0min ${__t(441)}</span>`:""}${Rt.soft?` \xB7 <span class="hsoft" title="${__t(442)}">\u{1F4E1} ${m(Rt.soft)}</span>`:""}</small>${Rt.pin&&Rt.x&&Rt.x.num?(re=>re?`<span class="hwhere">\u{1F4CD} ${m(re)}</span>`:"")(uc(Rt.x.num)):""}${Rt.warn?`<span class="hvw">${m(Rt.warn)}</span>`:""}</div><ol>${pn[it].slice(0,(a.more?it==="all"||a.hide?20:10:it==="all"?7:a.hide?8:4)+pn[it].filter(re=>re.gone).length).map(Ax).join("")||"<li><span>\u2014</span></li>"}</ol></div>`;if(a===Tt){let it=la("all");var Cx=it.x?`<span class="nw">${it.big}</span> \xB7 <span class="nw"><b>${rt(it.x.est)}</b> ${m(it.x.fam)}${__t(443)}${m(it.x.dest)}${it.x.plat?'<span class="nw">'+__t(183)+m(it.x.plat)+"</span>":""}`:it.big}let en=_i&&Ke.x&&Ke.x.arr!=null?Q_(_i.T,Ke.x.arr,_i.fin):null;if(en){let it=a._xc;it&&it.leg===String(Ke.x.num)&&it.conn!==String(en.c.num)&&it.est<en.c.est&&it.live?(en.lost=!0,en.missed=it.est):(!it||it.leg!==String(Ke.x.num)||!it.live||it.conn===String(en.c.num))&&(a._xc={leg:String(Ke.x.num),conn:String(en.c.num),est:en.c.est,live:!!(V.delays&&Date.now()-(a._xt||(a._xt=Date.now()))>3e4)})}en&&(oc.set(T[_i.T].id,{fam:en.c.fam,est:en.c.est,plat:en.c.plat,lost:en.lost}),en.lost&&ln.get(a.key)===String(Ke.x.num)&&ex("xf"+Ke.x.num+"|"+en.c.num,`\u21C4 ${__t(444)} ${T[_i.T].n}`,`${__t(445)}: ${en.c.fam} ${rt(en.c.est)} \u2192 ${rt(en.fin)}${en.c.plat?" \xB7 v\xEDa "+en.c.plat:""}`));let Ad=en?`<br><span class="nw hxf ${en.lost?"xbad":en.m<4?"xwarn":"xok"}">\u21C4 ${en.lost?`${__t(446)} ${rt(en.missed)} \xB7 ${__t(185)} `:`${m(T[_i.T].n)} \xB7 `}${Mn(en.c.fam)} <b>${rt(en.c.est)}</b> \u2192 <b>${rt(en.fin)}</b>${en.lost?"":` \xB7 ${Math.floor(en.m)} ${__t(447)}`}</span>`:_i?`<br><span class="nw hxf xbad">\u21C4 ${__t(448)} ${m(T[_i.T].n)}</span>`:"",Rx=a===Tt?Cx:_i&&Ke.x?`<span class="nw">${Ke.big}${Ke.x.plat?__t(183)+m(Ke.x.plat):""}</span> \xB7 <span class="nw"><b>${rt(Ke.x.est)}</b>${Ke.x.arr!=null?` \u2192 ${m(T[_i.T].n)} <b>${rt(Ke.x.arr)}</b>`:""}</span>${Ad}`:Ke.x?`<span class="nw">${Ke.big}${Ke.x.plat?__t(183)+m(Ke.x.plat):""}</span> \xB7 <span class="nw"><b>${rt(Ke.x.est)}</b>${Ke.x.arr!=null?`${__t(450)}${rt(Ke.x.arr)}</b>`:""}${__t(449)}${m(P)}</span>`:__t(451)+m(P),qe=a===Tt?(it=>it.pin?it:null)(la("all")):Ke.pin?Ke:Ro.pin?Ro:null;qe&&qe.x&&ln.has(a.key)&&Tm(qe,T[p].n);let Ix=qe?a===Tt?"all":qe===Ke?"to":Co:"",ca=!!(qe&&(qe.ghost||qe.x.noPos&&!So([qe.x.fam]).length||qe.x.cancel)),Cd=!!(qe&&qe.miss),ua=ca?pn[Ix].find(it=>!it.cancel&&!it.ghost&&!it.gone&&it.est>qe.x.est-.01&&it!==qe.x&&it.est-c.min>=(J||Q?0:be)):null,Px=Cd?`<span class="nw">${__t(452)} <b>${rt(qe.x.est)}</b></span>${qe.nxt?`<br><span class="nw hnx">${__t(445)} <b>${rt(qe.nxt.est)}</b>${qe.nxt.arr!=null?` \u2192 <b>${rt(qe.nxt.arr)}</b>`:""}</span>`:""}`:"",Lx=ca?`<span class="nw">\u26A0\uFE0F ${qe.x.cancel?__t(397):qe.ghost?__t(453):__t(454)}</span>${qe.x.cancel?"":` \xB7 <span class="nw"><b>${rt(qe.x.est)}</b>${qe.x.arr!=null?` \u2192 <b>${rt(qe.x.arr)}</b>`:""}</span>`}${ua?` \xB7 <span class="nw">${__t(185)} <b>${rt(ua.est)}</b>${ua.arr!=null?` \u2192 <b>${rt(ua.arr)}</b>`:""}${ua.plat?__t(183)+m(ua.plat):""}</span>`:""}`:"";return`<div class="hplace ${a.open?"open":""}${qe?" pinned":""}${ca?" pgh":""}"><button type="button" class="hhead" data-ht="${a.key}"><span class="hico">${a.ico}</span><span class="htit"><b>${m(T[p].n)}${qe&&qe.x.num?`<i class="hpn">\u{1F4CC} ${m(qe.x.num)}</i>`:""}</b>${a.open?_i&&Ad?`<small class="nofit">${Ad.replace(/^<br>/,"")}</small>`:"":`<small class="c${Cd||ca&&qe.x.cancel?"bad":ca?"warn":sn?"bad":Ke.cls.slice(2)}">${ca?Lx:Cd?Px:Rx}</small>${qe&&qe.x&&qe.x.num?(it=>it?`<small class="nofit hwh2">\u{1F4CD} ${m(it)}</small>`:"")(uc(qe.x.num)):""}`}${a.open?"":(it=>{if(!it||it.num==null)return"";let Rt=t.days.indexOf(c.ymd),Xt=it.tr,re=Xt?Xt.t0+Xt.pat.t[1]-(Xt.day===Rt-1?1440:Xt.day===Rt+1?-1440:0)+(it.dl||0):null,yn=!it.live&&!it.ghost&&!it.unconf&&re!=null&&re>c.min-1,oi=it.cancel?["bad",__t(397)]:it.live?["ok",__t(455)]:yn?["wait",__t(456)]:["warn",__t(453)];return`<small class="nofit hrel ${oi[0]}"><b>${oi[1]}</b></small>`})(qe&&qe.x||Ke.x)}</span><span class="hchev">\u25BE</span></button>`+(a.open?`
      <div class="hbody${a===Tt||a.hide==="out"||a.hide==="to"?" r1":""}">
        ${a===Tt?`<div class="hwalk">\u{1F4CD} A ${(()=>{let it=Tt.dist[a.st[a.i]]||0;return it<1?Math.round(it*100)*10+" m":it.toFixed(1).replace(".",",")+" km"})()}${__t(458)}${a.walk}${__t(459)}`:""}
        ${O?`<div class="hwalk away">${__t(461)}<a data-hplat="${a.key}${__t(460)}`:Q&&!mt.tid?`${__t(462)}${a.key}${__t(463)}`:W?`${__t(464)}${Math.round(Vt)} min</b>${A&&_<=3?__t(465):""} \xB7 <a data-hgo="${a.key}:0">${__t(466)}</a></div>`:""}${J&&a!==Tt?`<div class="hwalk away hawg"><span class="hawt">\u{1F4CD} ${__t(467)} ${_<10?_.toFixed(1).replace(".",","):Math.round(_)} km: ${__t(468)}</span>${dd(a)}${fd(a)}</div>`:""}${J&&a===Tt?`<div class="hwalk hgw">${dd(a)}${fd(a)}</div>`:""}<div class="hwalk"${J?" hidden":""}>${(()=>{let it=Zs||(()=>{let re=(pn.to.length?pn.to:Ee).filter(mn=>mn.num!=null&&!mn.cancel),yn=re.filter(mn=>mn.tr&&mn.tr.pat.stops[0]===p&&mn.est>=c.min-1&&mn.est<=c.min+3).sort((mn,ha)=>mn.est-ha.est);if(yn[0])return yn[0].num;let oi=[...re];if(gi&&a!==Tt){let mn=t.days.indexOf(c.ymd),ha=new Set(re.map(Rd=>String(Rd.num))),Vm=(Rd,Dx)=>{for(let rs of Rd||[]){if(ha.has(String(rs.num))||Z[rs.fam]&&!Dt.has(rs.fam)&&!v)continue;let Id=rs.pat.stops,gc=Id.indexOf(p);if(gc<0||gc===Id.length-1||!Id.slice(gc+1).some(Nx=>gi.has(Nx)))continue;let Hm=V.delays&&V.delays.get(rs.tid),Pd=rs.t0+rs.pat.t[2*gc+1]-Dx+(typeof Hm=="number"?Math.max(0,Hm/60):0);Pd>c.min+1||Pd<c.min-15||(ha.add(String(rs.num)),oi.push({num:rs.num,est:Pd,tr:rs}))}};mn>=0&&(Vm(st[mn],0),mn>0&&Vm(st[mn-1],1440))}let rn=oi.filter(mn=>mn.est<=c.min+1&&mn.est>=c.min-15).sort((mn,ha)=>ha.est-mn.est);return rn[0]?rn[0].num:Ke&&Ke.x&&Ke.x.num})(),Rt=it!=null?tn.find(re=>String(re.num)===String(it)):null,Xt=ad(Rt,c);return it!=null&&!mt.tid?`<button type="button" class="hgo hboard${Xt?"":" off"}" data-hboard="${m(String(it))}"${Xt?"":` data-hbwhen="${Rt?rt(Rt.est):""}"`}>\u{1F686} ${Xt&&it?`${__t(469)} ${m(String(it))}`:__t(470)}</button>`:""})()}${Q||mt.tid?"":`<button type="button" class="hgo hplat" data-hplat="${a.key}:1">${__t(471)}</button>`}${dd(a)}${fd(a)}</div>
        <div class="hcfgp"${a._cfg?"":" hidden"}><div class="hcl">${__t(472)}</div><div class="hst">${a.st.map((it,Rt)=>{let Xt=zt.get(it);return Xt==null?"":`<button type="button" data-hs="${a.key}:${Rt}" class="${Rt===a.i?"on":""}">${m(T[Xt].n.replace(/^Barcelona[ -]+(?=\S)/,"")||T[Xt].n)}${Rt===a.i?" \u2713":""}</button>`}).join("")}</div>${a!==Tt?`<div class="hwrow"><div><div class="hcl">${__t(473)}</div><div class="hstep2"><button type="button" data-hw="${a.key}:-1" aria-label="\u2212">\u2212</button><b>${a.walk} min</b><button type="button" data-hw="${a.key}:1" aria-label="+">+</button></div></div>${oe?`<div class="hposc"><div class="hcl">\u{1F4CD} ${__t(474)}</div><div class="hpv"><span><b>${Sr(_)} min</b><small>${_<1?Math.round(_*100)*10+" m":_.toFixed(1).replace(".",",")+" km"}</small></span>${Sr(_)!==a.walk?`<button type="button" data-hwset="${a.key}:${Sr(_)}">${__t(475)}</button>`:""}</div></div>`:""}</div>`:""}<a class="hcfgmap" data-hcfgmap="${p}">\u2139\uFE0F ${__t(476)}</a></div>
        ${(()=>{let it=mi.filter(Rt=>a.st.includes(Rt.sid));return it.length?`<div class="hfav">${it.map(Rt=>{let Xt=Kr(Rt,t.days.indexOf(c.ymd)),re=Xt&&Ee.find(yn=>String(yn.num)===String(Xt.num));return`\u2B50 <b>${Rt.t}</b> ${m(Rt.fam)} ${re?re.cancel?__t(477):re.gone?__t(268):re.dl>=1?`<em class="dl ${$i(re.dl)}">+${Math.round(re.dl)}${__t(478)}${rt(re.est)}`:__t(479):__t(480)}`}).join("<br>")}</div>`:""})()}
        ${$&&mc?`${__t(481)}${[...U].sort(B).map(Mn).join(" ")}${__t(482)}${P}${__t(483)}${mc}${__t(484)}`:v?`${__t(485)}${[...Dt].sort(B).slice(0,3).map(Mn).join(" ")}${__t(486)}`:""}
        ${vn.length?`<div class="hal ${sn?"bad":""}${yd.v?" open":""}" data-halx>\u26A0\uFE0F ${xo(vn[0])} ${m(vn[0].txt)} <small>${vo(vn[0])}</small>${vn.length>1?` <a data-hal>+${vn.length-1}${__t(487)}`:""}</div>`:`${__t(488)}${[...U].sort(B).join(", ")}</div>`}
        ${(()=>{let it=a.st.flatMap(Rt=>Qh("",Rt));return it.length?`<div class="hcr">${it.slice(0,3).map(Rt=>`<p><span><span class="cname">${Is[Rt.kind]} <b>${m(ta(Rt.kind))}</b></span><small class="cmeta">${Qp(Rt)}</small></span>${ic.has(Rt.id)&&!sc(Rt)?`<small class="hcrok">\u2713 ${__t(336)}</small>`:Ys.has(Rt.id)&&!sc(Rt)?`<span class="hcrv cvmine"><small class="hcrok">\u2713 ${__t(337)}</small><button type="button" data-rx="${Rt.id}">${__t(338)}</button></span>`:`<span class="hcrv"><button type="button" data-rv="${Rt.id}:1" title="${__t(339)}">\u2713 ${__t(340)}</button><button type="button" data-rv="${Rt.id}:-1" title="${__t(341)}">\u2715 ${Rt.kind==="ascensor"?__t(342):__t(343)}</button></span>`}</p>`).join("")}</div>`:""})()}
        ${a===Tt?`<div class="hcols one">${Io("all",la("all"))}</div>`:a.hide==="out"?`<div class="hcols one">${Io("to",Ke)}</div><a class="hshow" data-hshow="${a.key}${__t(489)}`:a.hide==="to"?`<div class="hcols one">${Io(Co,Ro)}</div><a class="hshow" data-hshow="${a.key}${__t(489)}`:`<div class="hcols">${Io("to",Ke,"to")}${Io(Co,Ro,"out")}</div>`}
        ${_i?tx(a,_i,Ke,en,c):""}
        ${Ee.length>(a===Tt?7:8)?`<button type="button" class="hmore" data-hmore="${a.key}">${a.more?__t(124):__t(490)}</button>`:""}
        <div class="hsrc"><span class="hsrcT" hidden title="${$m?Ft.get(T[p].id)?.d?__t(491):__t(492):__t(493)} \xB7 \u25CF = ${__t(494)}">${$m?Ft.get(T[p].id)?.d?__t(495):__t(496):__t(267)}</span><a data-hmap="${p}${__t(457)}${a===Tt?__t(497):`<a data-hset="${a.key}${__t(498)}`}${a===$e?`${__t(499)}`:""}</div>
      </div>`:"")+"</div>"}let hd={v:(()=>{try{return localStorage.getItem("rod_cfgseen")==="1"}catch{return!1}})()},ix='<span class="ico" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M19.42 10.34 L21.90 10.60 L21.90 13.40 L19.42 13.66 L18.42 16.07 L19.99 18.02 L18.02 19.99 L16.07 18.42 L13.66 19.42 L13.40 21.90 L10.60 21.90 L10.34 19.42 L7.93 18.42 L5.98 19.99 L4.01 18.02 L5.58 16.07 L4.58 13.66 L2.10 13.40 L2.10 10.60 L4.58 10.34 L5.58 7.93 L4.01 5.98 L5.98 4.01 L7.93 5.58 L10.34 4.58 L10.60 2.10 L13.40 2.10 L13.66 4.58 L16.07 5.58 L18.02 4.01 L19.99 5.98 L18.42 7.93Z"/><circle cx="12" cy="12" r="3"/></svg></span>',sx='<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 10v4h3l6 4V6L6 10z"/><path d="M16 9a4 4 0 0 1 0 6M19 6.5a8 8 0 0 1 0 11"/></svg>',dd=a=>{if(!V.url||!V.repOk)return"";let c=Z_(a)||a!==Tt&&!!a.platAt&&!mt.tid;return`<button type="button" class="hgo hrepb${c?" at":""}" data-hrep="${a.key}" title="${__t(500)}" aria-label="${__t(500)}">${sx}${c?`<span>${__t(501)}</span>`:""}</button>`};function rx(a){let c=zt.get(a);if(c==null)return;let h=S("#rsheet");h&&h.remove(),h=document.createElement("div"),h.id="rsheet",h.innerHTML=`<div class="rsbg" data-rsx></div><div class="rsp" role="dialog" aria-label="${__t(502)} ${m(T[c].n)}"><div class="rsh"><b>${__t(502)} ${m(T[c].n)}</b><small>An\xF3nimo</small></div><div class="rsl">${Yp.map(x=>`<button type="button" data-rk="${x}" data-rn="" data-rs="${m(a)}" data-rl="">${Is[x]} <span>${m(ta(x))}</span></button>`).join("")}</div><button type="button" class="rsc" data-rsx>${__t(503)}</button></div>`,document.body.appendChild(h),nd(h);let p=()=>{h.classList.remove("on"),setTimeout(()=>h.remove(),250)};h.querySelectorAll("[data-rsx]").forEach(x=>x.onclick=p),h.querySelectorAll("[data-rk]").forEach(x=>x.addEventListener("click",p)),requestAnimationFrame(()=>h.classList.add("on"))}let fd=a=>`<button type="button" class="hgo hcfg${a._cfg?" on":""}${hd.v?"":" new"}" data-hcfg="${a.key}" title="${__t(504)}" aria-label="${__t(504)}">${ix}</button>`,Vi={on:(()=>{try{return localStorage.getItem("rod_push")==="1"}catch{return!1}})(),busy:!1},gm=/iPhone|iPad|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,_m=()=>matchMedia("(display-mode: standalone)").matches||navigator.standalone===!0,wr=new Set((()=>{try{return JSON.parse(localStorage.getItem("rod_aloff")||"[]")}catch{return[]}})()),lc=()=>{let a=new Set;return[...Xe.st,...$e.st].forEach(c=>{let h=zt.get(c);h!=null&&T[h].fams.forEach(p=>a.add(p))}),[...a].sort(B)},Mo=()=>({stations:[...Xe.st,...$e.st],lines:lc().filter(a=>!wr.has(a))}),ax=a=>Uint8Array.from(atob(a.replace(/-/g,"+").replace(/_/g,"/")+"===".slice((a.length+3)%4)),c=>c.charCodeAt(0));async function xm(){return!("serviceWorker"in navigator)||!("PushManager"in window)||location.protocol!=="https:"?null:await navigator.serviceWorker.getRegistration()||navigator.serviceWorker.register("./sw.js")}async function vm(a){let h=await(await fetch(ce()+"/push/subscribe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sub:a.toJSON(),...Mo()})})).json();if(!h.ok)throw new Error(h.err||"error")}function pd(){let a=An(Xe),c=An($e);if(a==null||c==null)return a!=null?Xe:c!=null?$e:null;if(Tt.w&&Date.now()-Tt.fix<3*36e5){let h=p=>Math.hypot(T[p].w[0]-Tt.w[0],T[p].w[1]-Tt.w[1]);return h(a)<=h(c)?Xe:$e}return new Date().getHours()<13?Xe:$e}function ym(a){let c=pd(),h=c===Xe?$e:Xe,p=c&&An(c),x=h&&An(h);if(p==null||x==null)return!0;let y=(a.es||"")+" "+(a.txt||""),C=t.days.indexOf(ee().ymd),P=ee(),R=[...new Set([...y.matchAll(/\btr(?:en|ain)s?\s*(?:n[º°o.]\s*)?(\d{4,6})\b/gi)].map($=>$[1]))];if(R.length)return R.some($=>{let v=Ps($);if(!v)return!1;let _=v.pat.stops,A=_.indexOf(p),O=_.indexOf(x);if(A<0||O<0||A>O)return!1;let J=v.t0+v.pat.t[2*A+1];return J>P.min-60&&J<P.min+150});let U=y.match(/(?:destino|destinaci[óo]|direcci[óo]n?|sentido|sentit|cap a|hacia)\s+(?:a\s+|de\s+)?([^.,;:()]{3,40})/i);if(U){let $=U[1].toLowerCase(),v=T.findIndex(_=>_.n&&$.startsWith(_.n.toLowerCase()));if(v>=0){let _=(st[C]||[]).find(A=>{let O=A.pat.stops;return O[O.length-1]===v&&O.includes(p)&&O.includes(x)});if(_){let A=_.pat.stops;return A.indexOf(p)<A.indexOf(x)}}}return!0}let Zn={on:(()=>{try{return localStorage.getItem("rod_ln")==="1"}catch{return!1}})(),seen:null};function ox(){let{lines:a,stations:c}=Mo(),h=new Set(a),p=new Set(c.map(C=>zt.get(C))),x=V.alerts.filter(C=>([...C.fams].some(P=>h.has(P))||[...C.stops||[]].some(P=>p.has(P)))&&ym(C));if(!Zn.seen){try{Zn.seen=new Set(JSON.parse(localStorage.getItem("rod_lnseen")||"[]"))}catch{Zn.seen=new Set}if(!Zn.seen.size){x.forEach(C=>Zn.seen.add(C.id+"|"+C.txt.length)),Sm();return}}let y=x.filter(C=>!Zn.seen.has(C.id+"|"+C.txt.length));if(y.length&&(y.forEach(C=>Zn.seen.add(C.id+"|"+C.txt.length)),Sm(),!(!Zn.on||!("Notification"in window)||Notification.permission!=="granted")))for(let C of y.slice(0,3)){let P=(C.src==="Adif"?__t(358):"Rodalies")+(C.fams.size?" \xB7 "+[...C.fams].sort(B).slice(0,4).join(" "):""),R={body:C.txt.slice(0,240),icon:"icons/icon-192.png",tag:"rod-"+C.id};(navigator.serviceWorker&&navigator.serviceWorker.getRegistration?navigator.serviceWorker.getRegistration():Promise.resolve(null)).then(U=>U?U.showNotification(P,R):new Notification(P,R)).catch(()=>{try{new Notification(P,R)}catch{}})}}function Sm(){try{localStorage.setItem("rod_lnseen",JSON.stringify([...Zn.seen].slice(-400)))}catch{}}async function lx(){if(Zn.on)Zn.on=!1,Be(__t(505));else{if(!("Notification"in window)){Be(gm&&!_m()?__t(506):__t(507));return}if(await Notification.requestPermission()!=="granted"){Be(__t(508));return}Zn.on=!0,Be(__t(509)+Mo().lines.join(", ")+__t(510))}try{localStorage.setItem("rod_ln",Zn.on?"1":"")}catch{}_e(!0)}async function cx(){if(!V.repOk||document.documentElement.classList.contains("cap"))return lx();if(!Vi.busy){Vi.busy=!0;try{let a=await xm();if(!a){Be(gm&&!_m()?__t(511):__t(512));return}if(await navigator.serviceWorker.ready,Vi.on){let c=await a.pushManager.getSubscription();c&&(fetch(ce()+"/push/unsubscribe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({endpoint:c.endpoint})}).catch(()=>{}),await c.unsubscribe().catch(()=>{})),Vi.on=!1,Be(__t(505))}else{if(!V.url){Be(__t(513));return}if(await Notification.requestPermission()!=="granted"){Be(__t(508));return}let h=(await Pt(ce(),"/push/key")).key,p=await a.pushManager.getSubscription()||await a.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:ax(h)});await vm(p),Vi.on=!0,Be(__t(514)+Mo().lines.join(", "))}try{localStorage.setItem("rod_push",Vi.on?"1":"")}catch{}}catch(a){Be(__t(515)+(a.message||a))}finally{Vi.busy=!1,_e(!0)}}}async function bm(){if(Vi.on)try{let a=await xm(),c=a&&await a.pushManager.getSubscription();c&&await vm(c)}catch{}}let md=!1,Mm="";function gd(){let a=Et?"t"+(Et.tid||Et.vtid):ae>=0?"s"+ae:Ce?"a":Ot?"n":"";a!==Mm&&(md=!1,Mm=a);let c=innerWidth<=640&&!!a&&!md&&!document.documentElement.classList.contains("tabmode"),h=S("#inf");h.classList.contains("compact")!==c&&(h.classList.toggle("compact",c),requestAnimationFrame(()=>{if(f.style.display!=="none"){let p=h.getBoundingClientRect().bottom;f.style.top=Math.round(p+8)+"px",f.style.maxHeight=Math.max(140,S("#rc").getBoundingClientRect().top-p-16)+"px"}}))}let wm=new Set,_d=(()=>{let a=yt(new Date).ymd;try{let c=JSON.parse(localStorage.getItem("rod_pn")||"{}");return c.d===a?c:{d:a}}catch{return{d:a}}})();function Em(a,c,h){if(!(!(Zn.on||Vi.on)||!("Notification"in window)||Notification.permission!=="granted")){if(!document.hidden){Be(a+" \xB7 "+c);return}(navigator.serviceWorker&&navigator.serviceWorker.getRegistration?navigator.serviceWorker.getRegistration():Promise.resolve(null)).then(p=>p?p.showNotification(a,{body:c,tag:h,icon:"icons/andana-192.png"}):new Notification(a,{body:c})).catch(()=>{try{new Notification(a,{body:c})}catch{}})}}function Tm(a,c){let h=a.x,p=ee();if(!p.live||h.gone||h.est<p.min-1)return;let x=h.num+"|"+Math.round(h.sm),y=_d[x]||{},C=`${__t(516)} ${rt(h.sm)}`,P=`${h.fam} \u2192 ${h.dest}`,R="",U="";h.cancel?y.c||(y.c=1,R=`\u26A0\uFE0F ${C} ${__t(191)}`,U=`${P}. ${__t(517)}`):a.ghost&&!y.g?(y.g=1,R=`\u26A0\uFE0F ${C} ${__t(518)}`,U=`${P}: ${__t(519)}`):h.dl>=5&&h.dl>=(y.dl||0)+5?(y.dl=Math.round(h.dl),R=`\u23F3 ${C} ${__t(520)} +${y.dl} min`,U=`${P}: ${__t(521)} ${c} ${__t(522)} ${rt(h.est)}.`):h.plat&&y.p&&y.p!==String(h.plat)&&(R=`${__t(523)}: ${C}`,U=`${P}: ${__t(524)} ${h.plat} ${__t(525)} ${y.p}).`),h.plat&&(y.p=String(h.plat)),_d[x]=y;try{localStorage.setItem("rod_pn",JSON.stringify(_d))}catch{}R&&Em(R,U,"pin-"+h.num)}let ia={open:!1,seen:new Set((()=>{try{return JSON.parse(localStorage.getItem("rod_seen")||"[]")}catch{return[]}})())};document.addEventListener("click",a=>{let c=a.target.closest&&a.target.closest("[data-nowx]");if(!c||a.target.closest("a"))return;let h=c.dataset.nowx?c.dataset.nowx.split("|"):[];if(h.length){if(c.classList.contains("col"))ia.open=!0;else{ia.open=!1,h.forEach(p=>ia.seen.add(p));try{localStorage.setItem("rod_seen",JSON.stringify([...ia.seen].slice(-200)))}catch{}}_e(!0)}});function ux(a){let c=a.lines;if(!c.length&&Tt.st&&Tt.st.length){let v=new Set;Tt.st.forEach(_=>{let A=zt.get(_);A!=null&&T[A].fams.forEach(O=>v.add(O))}),c=[...v].sort(B)}let h=new Set(c),p=V.alerts.filter(v=>!h.size||[...v.fams].some(_=>h.has(_))),x=`<a class="hwa" href="https://www.whatsapp.com/channel/0029Vav4hGTId7nPenKMuo2C" target="_blank" rel="noopener" title="${__t(174)}" aria-label="WhatsApp"><svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path fill="#25d366" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2z"/><path fill="#fff" d="M8.6 7.2c.2-.4.4-.4.7-.4h.5c.2 0 .4 0 .6.5l.8 1.9c.1.2.1.4 0 .6l-.5.7c-.1.2-.2.3 0 .6.5.8 1.1 1.5 1.9 2 .3.2.4.1.6 0l.7-.8c.2-.2.4-.2.6-.1l1.8.9c.3.1.4.2.4.4 0 .5-.2 1.2-.8 1.6-.6.4-1.5.6-2.9 0-1.6-.7-3-2-3.9-3.4-.8-1.2-1.1-2.4-.5-3.5z"/></svg></a>`,y=p.reduce((v,_)=>Math.max(v,Mr(_)),0),C=y===3?"\u26D4 ":y===2?"\u26A0\uFE0F ":"\u2139\uFE0F ",P=`<div class="hnowh"><span class="hnowl"><b>${p.length?C+p.length+(p.length===1?__t(360):__t(361)):__t(526)}</b>${c.length?`<span class="hnowc">${c.map(Mn).join("")}</span>`:""}</span>${x}</div>`,R=p.filter(v=>!ia.seen.has(v.id)),U=p.length&&(ia.open||R.length>0),$=p.reduce((v,_)=>Math.max(v,Mr(_)),0);return`<div class="hnow${$===3?" bad":$===2?" warn":$===1?" info":""}${p.length&&!U?" col":""}" data-nowx="${m(p.map(v=>v.id).join("|"))}">${P}${Rm(a,!0)}${U?p.slice().sort((v,_)=>Mr(_)-Mr(v)).map(v=>`<div class="igc sv${Mr(v)}"><p class="igh">${Mr(v)===3?"\u26D4":Mr(v)===2?"\u26A0\uFE0F":"\u2139\uFE0F"} ${xo(v)} ${v.fams.size>6?`<span class="igall">${__t(208)}</span>`:[...v.fams].sort(B).map(Mn).join(" ")} <small>${vo(v)}</small></p><p class="igt">${m(v.txt)}</p></div>`).join("").replace(/^/,'<div class="igl">')+`</div><small class="hnowt">${__t(527)}</small>`:""}</div>`}let ln=new Map((()=>{try{let a=yt(new Date).ymd;return JSON.parse(localStorage.getItem("rod_pin")||"[]").filter(c=>c[2]===a).map(c=>[c[0],c[1]])}catch{return[]}})());function cc(){if(!document.documentElement.classList.contains("tabmode"))return;let a=[...document.querySelectorAll("#home .hhead .htit small:not(.nofit)")],c=(p,x)=>{p.style.fontSize=x===1?"":(p._f0*x).toFixed(1)+"px",p.querySelectorAll("b").forEach(y=>y.style.fontSize=x===1?"":(p._b0*x).toFixed(1)+"px")},h=1;for(let p of a){if(p.style.whiteSpace="",c(p,1),!p.clientWidth)continue;p._f0=parseFloat(getComputedStyle(p).fontSize);let x=p.querySelector("b");for(p._b0=x?parseFloat(getComputedStyle(x).fontSize):0;p.scrollWidth>p.clientWidth+1&&h>.86;)h-=.02,c(p,h)}if(h<1)for(let p of a)p._f0&&c(p,h);for(let p of a)p.scrollWidth>p.clientWidth+1&&(p.style.whiteSpace="normal")}addEventListener("resize",()=>{try{cc()}catch{}});let Am=(a,c)=>{let h=a==="work"?$e:a==="near"?Tt:Xe,p=h&&An(h);return p==null?null:Jn(p).find(x=>String(x.num)===String(c))||null};function ri(a,c){if(c&&!ln.size&&!mt.tid)try{let h=+(localStorage.getItem("rod_lptip")||0);h<2&&(localStorage.setItem("rod_lptip",h+1),setTimeout(()=>Be(__t(528)),600))}catch{}if(c){for(let h of[...ln.keys()])h!==a&&ln.delete(h);ln.set(a,c)}else ln.delete(a);try{let h=yt(new Date).ymd;localStorage.setItem("rod_pin",JSON.stringify([...ln].map(([p,x])=>[p,x,h])))}catch{}}let Cm=a=>{let c=a&&a.ts?Date.now()/1e3-a.ts:V.okVP?(Date.now()-V.okVP)/1e3:-1;return c>=0?" \xB7 "+ys(Dh(Math.round(c))):""};function uc(a){let c=Bt.find(y=>y.tr&&String(y.tr.num)===String(a));if(!c){let y=Ps(a),C=ee(),P=t.days.indexOf(C.ymd);if(!y)return"";let R=y.day===P-1?1440:0,U=y.t0+y.pat.t[1]-R;return U>C.min?__t(529)+T[y.pat.stops[0]].n+" ("+rt(U)+")":""}let h=c.tr,p=y=>T[h.pat.stops[y]].n;if(c.real){let y=c.v;return y.pre?__t(530):y.atStop>=0&&y.before?__t(531)+p(y.atStop):y.atStop>=0&&(y.st==="STOPPED_AT"||c.stop==="st")?F()?__t(532)+p(y.atStop):__t(533)+p(y.atStop)+Cm(y):!F()&&y.next>0?__t(534)+p(y.next-1)+__t(535)+p(y.next)+Cm(y):y.atStop>=0&&y.next>y.atStop?__t(536)+p(y.atStop)+__t(537)+p(y.next):y.atStop>=0?__t(538)+p(y.atStop):c.stop==="via"&&y.next>0?"\u23F8 "+__t(539)+p(y.next-1)+__t(535)+p(y.next):y.next>0?__t(230)+p(y.next-1)+__t(535)+p(y.next):y.next===0?__t(394)+p(0):""}let x=c.p&&c.p.next;return x>0?__t(540)+p(x-1)+__t(535)+p(x):""}let wo={k:"",v:null};function hx(a){let c=ee(),h=t.days.indexOf(c.ymd);if(h<0||!a.length)return null;let p=pd(),x=(p&&An(p))??An(Xe)??An($e),y=c.ymd+a.join()+x;if(wo.k===y)return wo.v;wo.k=y;let C=new Set(a),P=x!=null?v=>st[v].filter(_=>{let A=_.pat.stops.indexOf(x);return A>=0&&A<_.pat.stops.length-1}).length:v=>st[v].filter(_=>C.has(_.fam)).length,R=v=>{let _=new Date(+v.slice(0,4),+v.slice(4,6)-1,+v.slice(6)).getDay();return _===0?0:_===6?6:1},U=P(h),$=Math.max(0,...t.days.map((v,_)=>_!==h&&R(v)===R(c.ymd)?P(_):0));return wo.v=$>=20&&U<$*.8?{n:U,ref:$,pct:Math.round(U/$*100),st:x!=null?T[x].n:""}:null,wo.v}function Rm(a,c){let h=a.lines||[],p=hx(h);if(!p)return"";let x=V.alerts.some(y=>[...y.fams].some(C=>h.includes(C))&&/huelga|vaga\b|servicios? m[ií]nimos|serveis m[ií]nims/i.test((y.es||"")+" "+y.txt));return c?`<div class="hnowred">\u{1F5D3}\uFE0F <b>${x?__t(541):__t(542)}</b>: ${p.st?`${__t(543)} ${m(p.st)} ${p.n} ${__t(544)} ${p.ref} ${__t(545)}`:`${__t(546)} ${p.n} ${__t(544)} ${p.ref} ${__t(545)}`} (${p.pct} %). ${x?__t(547):__t(548)}</div>`:`<div class="hred">\u{1F5D3}\uFE0F <b>${x?__t(549):__t(550)}</b> \xB7 ${__t(551)}: ${p.st?`${__t(552)} ${m(p.st)} ${__t(553)} ${p.n} ${__t(145)} ${p.ref} ${__t(72)}`:`${p.n} ${__t(145)} ${p.ref} ${__t(554)} ${h.join(", ")}`} (${p.pct} % ${__t(555)}).</div>`}function dx(a){let c=So(a.lines||[]);if(!c.length)return"";let h=[Xe,$e].some(p=>{let x=An(p),y=x!=null&&Ft.get(T[x].id);return y&&y.d&&Array.isArray(y.d.trains)&&!y.d.trains.length});return`<div class="hnopos">\u{1F4E1} <b>${__t(556)} ${c.join(", ")}</b> ${__t(557)}${h?" \xB7 "+__t(558):""}: ${__t(559)}</div>`}function fx(a){if(!Tt.w||mt.lock||mt.manual&&Date.now()<mt.manual)return[];let c=mt.fixes[mt.fixes.length-1];if(!c||Date.now()-c.t>6e4||c.acc!=null&&c.acc>150)return[];let h=Tt.k||1,p=C=>Math.hypot(C.p.w[0]-Tt.w[0],C.p.w[1]-Tt.w[1])*h,x=Bt.find(C=>C.tr===a&&C.p&&C.p.w);if(!x||p(x)<1.5)return[];let y=x.p.next>=0?a.pat.stops[x.p.next]:null;return Bt.filter(C=>C.tr&&C.tr!==a&&C.p&&C.p.w&&p(C)<1&&(y==null||C.p.next>=0&&C.tr.pat.stops.indexOf(y)>=C.p.next)).sort((C,P)=>Math.hypot(C.p.w[0]-Tt.w[0],C.p.w[1]-Tt.w[1])-Math.hypot(P.p.w[0]-Tt.w[0],P.p.w[1]-Tt.w[1])).slice(0,2).map(C=>C.tr)}function px(a){if(mt.tid)return"";let c=null,h=null;if(ln.size||(fe&&fe.num!=null&&(c=String(fe.num)),!c))return"";let p=Ps(c);if(!p)return"";let x=p.pat.stops,y=h?h==="work"?$e:h==="near"?Tt:Xe:null,C=y?An(y):null,P=C!=null?Jn(C).find(Q=>String(Q.num)===c):null,R=y===Xe?$e:y===$e?Xe:null,U=R?An(R):null,$=C!=null?x.indexOf(C):-1,v=ve&&ve.num===c?x.indexOf(zt.get(ve.sid)):-1;v<=$&&U!=null&&(v=x.indexOf(U,$+1));let _=P&&$>=0&&v>$?P.est+(p.pat.t[2*v]-p.pat.t[2*$+1]):null,A=P?Math.round(P.est-a.min):null,O=uc(c),J=P?`${P.gone?__t(560):__t(561)} ${m(T[C].n)} \xB7 <b>${rt(P.est)}</b>${P.gone?"":` (${A<=0?__t(319):A+" min"})`}${P.plat?__t(183)+m(P.plat):""}${_!=null?` \u2192 ${m(T[x[v]].n)} <b>${rt(_)}</b>`:""}`:m(O||"");return`<div class="hplace onbc chosen"><div class="hhead"><span class="hico">\u{1F4CC}</span><span class="htit"><b>${Mn(p.fam)} ${__t(380)}${m(c)} <span class="hlk">${__t(562)}</span></b><small class="nofit">${J}</small>${P&&O?`<small class="nofit">\u{1F4CD} ${m(O)}</small>`:""}<span class="chbtn"><button type="button" class="hgo hboard" data-hboard="${m(c)}">\u{1F686} ${__t(470)}</button><button type="button" class="chmap" data-chmap="${m(c)}">\u{1F5FA}\uFE0F ${__t(563)}</button></span></span><button type="button" class="hpn onbx" data-unchoose="${m(c)}" aria-label="${__t(255)}">\u2715</button></div></div>`}function mx(a){let c;try{if(c=gx(a),c!=null)return c}catch(x){console.error(x)}let h=mt.tid?Ps(mt.tid):null,p=h?`${__t(564)} ${m(T[h.pat.stops[0]].n)} \xB7 ${rt(h.t0)}`:"";return mt.tid?`<div class="hplace onbc"><div class="hhead"><span class="hico">\u{1F686}</span><span class="htit"><b>${__t(380)}${m(mt.tid)}${mt.lock?` <span class="hlk">${__t(565)}</span>`:""}</b>${p?`<small class="nofit">${p}</small>`:""}</span><button type="button" class="hpn onbx" data-onbx aria-label="${__t(338)}">\u2715</button></div></div>`:""}let Eo={s:null,at:0},jn=(()=>{try{return JSON.parse(localStorage.getItem("rod_trips")||"[]")}catch{return[]}})();function sa(a,c,h,p,x){let y=a.ymd+"|"+c.num,C=c.pat.stops,P=jn.find(R=>R.k===y);if(!(P&&P.done)){if(!P){let R=mt.from!=null?C.indexOf(mt.from):-1;if(Eo.s!=null&&Date.now()-Eo.at<45*6e4){let U=C.indexOf(Eo.s);U>=0&&(R<0||U<R)&&(R=U)}{let U=[...Xe.st,...$e.st],$=R>=0?R:(mt.fixes.length,-1);if($>=0&&!U.includes(T[C[$]].id)){for(let v=$-1;v>=Math.max(0,$-4);v--)if(U.includes(T[C[v]].id)){R=v;break}}}if(R<0&&mt.fixes.length){let U=mt.fixes[0],$=.6;C.forEach((v,_)=>{let A=Math.hypot(T[v].w[0]-U.w[0],T[v].w[1]-U.w[1])*U.k;A<$&&($=A,R=_)})}P={k:y,d:a.ymd,num:String(c.num),fam:c.fam,a:R>=0?T[C[R]].id:"",ad:R>=0?Math.round(c.t0+c.pat.t[2*R+1]-p):null,dl:null,mx:0,t0:Date.now()},jn.push(P)}if(ve&&ve.num===String(c.num)&&zt.get(ve.sid)===C[h]&&(P.b=T[C[h]].id,P.bd=Math.round(c.t0+c.pat.t[2*h]-p)),x!=null&&(P.dl=Math.round(x),P.mx=Math.max(P.mx||0,P.dl)),P.t1=Date.now(),!sa.s||Date.now()-sa.s>3e4||P._n!==P.dl){sa.s=Date.now(),P._n=P.dl;let R=Date.now()-120*864e5;try{localStorage.setItem("rod_trips",JSON.stringify(jn.filter(U=>(U.t1||U.t0)>R),(U,$)=>U==="_n"?void 0:$))}catch{}}}}let Im=(a,c)=>{let h=Date.now()-c*864e5;return jn.filter(p=>p.fam===a&&(p.t1||p.t0)>h&&(p.t1||0)-p.t0>=18e4&&!(p.a&&p.a===p.b))};function gx(a){if(!mt.tid)return"";[...ln].forEach(([Q,G])=>{String(G)!==String(mt.tid)&&ri(Q,null)});let c=Bt.find(Q=>Q.tr&&String(Q.tr.num)===mt.tid)||dt(a).out.find(Q=>Q.tr&&String(Q.tr.num)===mt.tid);if(!c)return null;let h=c.tr,p=h.pat.stops,x=c.real&&c.v&&c.v.next>=0?c.v.next:c.p&&c.p.next>=0?c.p.next:null;if(x==null){let Q=dt(a).out.find(G=>G.tr&&String(G.tr.num)===mt.tid);x=Q&&Q.p&&Q.p.next>=0?Q.p.next:1}let y=kt(h),C=typeof y=="number"?Math.max(0,y/60):0,P=t.days.indexOf(a.ymd),R=h.day===P-1?1440:0,U=mt.fixes[mt.fixes.length-1],$=U&&Date.now()-U.t<9e4&&(U.acc==null||U.acc<150)?(()=>{let Q=-1,G=.35;return p.forEach((nt,W)=>{let Vt=Math.hypot(T[nt].w[0]-U.w[0],T[nt].w[1]-U.w[1])*U.k;Vt<G&&(G=Vt,Q=W)}),Q})():-1,v=ve&&ve.num===mt.tid?p.indexOf(zt.get(ve.sid)):-1;if(v>0&&v<x&&$!==v&&!($>=0&&$<v))return setTimeout(()=>{if(!mt.tid)return;let Q=mt.tid;{let G=jn.find(nt=>nt.num===Q&&nt.d===ee().ymd);if(G){G.done=!0,sa.s=0;try{localStorage.setItem("rod_trips",JSON.stringify(jn,(nt,W)=>nt==="_n"?void 0:W))}catch{}}}mt.no.set(Q,Date.now()+90*6e4),mt.tid="",mt.lock=!1,mt.manual=0,mt.quiet=Date.now()+10*6e4,fe&&String(fe.num)===Q&&(fe=null),[...ln].forEach(([G,nt])=>{String(nt)===Q&&ri(G,null)}),Rn.num===Q&&(Rn.num=""),_e(!0)},0),"";v<x&&(v=p.length-1);let _=ea(h,c.real?c.v:null,v,h.t0+h.pat.t[2*v]+C-R),A=_-a.min,O=c.real&&c.v.atStop>=0?c.v.atStop:-1;sa(a,h,v,R,typeof y=="number"?C:null);let J=$>=0?`${__t(566)} ${T[p[$]].n}`:uc(h.num)||__t(394)+T[p[x]].n;return`<div class="hplace onbc"><button type="button" class="hhead" data-onbgo><span class="hico">\u{1F686}</span><span class="htit"><b>${Mn(h.fam)} ${__t(380)}${m(h.num)}${mt.lock?` <span class="hlk">${__t(565)}</span>`:""}</b><small class="nofit cok">${m(J)} \xB7 <span class="nw">${__t(567)} ${m(T[p[v]].n)}</span> <span class="nw">${A>=1?__t(105)+br(A)+" \xB7 ":""}<b>${rt(_)}</b>${C>=1?` <em class="dl ${$i(C)}">+${Math.round(C)}</em>`:""}</span></small>${(Q=>Q.length?`<small class="onbrep">${Q.slice(0,4).map(G=>`<span title="${m(ta(G.kind))}">${Is[G.kind]}${G.up>1?`<b>${G.up>99?"99+":G.up}</b>`:""}</span>`).join("")}</small>`:"")(Kp(h.num))}</span><span class="hchev">${mt.open?"\u25B4":"\u25BE"}</span></button><button type="button" class="hpn onbx" data-onbx aria-label="${__t(568)}" title="${__t(568)}">\u2715</button>${(Q=>Q.length&&!(mt.manual&&Date.now()<mt.manual)?`<div class="onbch">${Q.map(G=>`<button type="button" class="onbalt" data-onbpick="${m(G.num)}">${__t(569)} ${m(G.num)}?<small>${__t(570)} ${m(T[G.pat.stops[G.pat.stops.length-1]].n.replace(/^Barcelona[ -]+(?=\S)/,""))}</small></button>`).join("")}</div>`:"")(fx(h))}${mt.open?(()=>{let Q=Math.max(x,0),G=W=>{let Vt=ea(h,c.real?c.v:null,W,h.t0+h.pat.t[2*W]+C-R);return`<li class="${W===v?"dst":""}"><b>${rt(Vt)}</b><span>${m(T[p[W]].n)}</span>${W===v?`<i>${__t(571)}</i>`:""}</li>`},nt=[];for(let W=Q;W<=Math.min(v,Q+2);W++)nt.push(G(W));return v>Q+3&&nt.push(`<li class="gap"><b>\u22EE</b><span>${v-Q-3} ${v-Q-3===1?__t(572):__t(573)}</span></li>`),v>Q+2&&nt.push(G(v)),`<div class="onbmore"><small class="onbh">${__t(574)}</small><ol class="onbst">${nt.join("")}</ol>${go(h.num,"",h.fam)}<div class="rtb"><button type="button" data-onbmap>\u{1F5FA}\uFE0F ${__t(563)}</button></div></div>`})():""}</div>`}let hc={until:0};function Pm(){let a=mt.tid;if(a){mt.no.set(a,Date.now()+20*6e4),mt.tid="",mt.manual=0,mt.lock=!1,mt.quiet=Date.now()+10*6e4,Rn.num===a&&(Rn.num=""),[...ln].forEach(([c,h])=>{String(h)===a&&ri(c,null)}),ve&&ve.num===a&&(ve=null,Cs(),window.__schedOff&&window.__schedOff(7701)),fe&&String(fe.num)===a&&(fe=null),Et&&String(Et.num)===a&&(Et=null,Ve.sk=""),f._h="";try{Re(),o()}catch{}_e(!0)}}function Lm(a){if(a.hasAttribute("data-onbx")){Pm();return}let c=mt.tid,h=mt.lock;na(a.dataset.onbpick,"pick"),Be(`${__t(575)} ${mt.tid}`,c&&c!==mt.tid?{label:__t(283),fn:()=>{na(c,h?"lock":"pick"),Be(`${__t(576)} ${c}`),_e(!0)}}:void 0),_e(!0)}function _e(a){let c=S("#home");if(!c)return;let h=performance.now();if(!a&&h-um<4e3||!a&&hc.until>Date.now())return;um=h;let p=ee(),x=[],y=Mo(),C=_=>{let A=An(_);return A==null||!Tt.w?1:Math.hypot(T[A].w[0]-Tt.w[0],T[A].w[1]-Tt.w[1])},P=[Tt,...[Xe,$e].sort((_,A)=>C(_)-C(A))],R=(document.documentElement.classList.contains("tabmode")?ux(y):Rm(y))+dx(y)+mx(p)+px(p)+P.map(_=>nx(_,p,x)).join("")+(Ls.some(_=>_.open)&&y.lines.length,"");c.className=(Ls.some(_=>_.open)?"open":"")+(mt.tid?" onb":"");let U=S("#bell");U||(U=document.createElement("button"),U.type="button",U.id="bell",U.onclick=cx,S("#inf .more").prepend(U));{let _=V.repOk&&!document.documentElement.classList.contains("cap")?Vi.on:Zn.on;U.hidden=!y.lines.length,U.className=_?"on":"",U.textContent=Ve.on?_?__t(584):__t(585):(_?__t(586):__t(587))+y.lines.join(", "),U.title=(_?__t(588):__t(589))+__t(68)+y.lines.join(", ")+(V.repOk?"":__t(590))}if(c._h===R)return;c._h=R,c.innerHTML=R,cc(),c._onbDel||(c._onbDel=1,c.addEventListener("pointerdown",()=>{hc.until=Date.now()+1500},!0),c.addEventListener("pointerup",()=>{hc.until=Date.now()+400},!0),c.addEventListener("click",_=>{if(window.__lpAt&&Date.now()-window.__lpAt<1e3){_.stopPropagation(),_.preventDefault();return}let A=_.target.closest&&_.target.closest("[data-onbx],[data-onbpick]");A&&(_.stopPropagation(),hc.until=0,Lm(A))},!0));{let _=c.querySelector("[data-onbgo]");_&&(_.onclick=A=>{if(A.target.closest("[data-onbx]")){Pm();return}let O=A.target.closest("[data-onbpick]");if(O){Lm(O);return}mt.open=!mt.open,_e(!0)})}{let _=c.querySelector("[data-onbmap]");_&&(_.onclick=A=>{A.stopPropagation();let O=Bt.find(J=>J.tr&&String(J.tr.num)===mt.tid);O&&(Ot=Ce=Ut=!1,ae=-1,Et=O.tr,fe=O.tr,f._h="",Oi("map"),Re())})}{let _=[...c.children].find(A=>A.classList.contains("hplace")&&!A.querySelector(".hnew"));_&&_.classList.add("lead")}let $=_=>_==="work"?$e:_==="near"?Tt:Xe;c.querySelectorAll("[data-hloc]").forEach(_=>_.onclick=()=>{Tt.err="",rd(!0)}),c.querySelectorAll("[data-ht]").forEach(_=>{let A=0,O=0,J=0,Q=()=>{clearTimeout(A),A=0,_.closest(".hplace")?.classList.remove("lpress")};_.addEventListener("pointerdown",G=>{let nt=_.dataset.ht,W=ln.get(nt);!W||String(mt.tid)===String(W)||(O=G.clientX,J=G.clientY,_.closest(".hplace")?.classList.add("lpress"),A=setTimeout(()=>{A=0,_.closest(".hplace")?.classList.remove("lpress"),_._lpDone=Date.now();let Vt=Am(nt,W);if(!ad(Vt,ee())){od(Vt?rt(Vt.est):"");return}let oe=na(W,"lock",nt);try{navigator.vibrate&&navigator.vibrate(35)}catch{}Be(`${__t(576)} ${oe&&oe.tr.fam||""} ${W} \xB7 ${__t(565)}`),_e(!0)},700))}),_.addEventListener("pointermove",G=>{A&&Math.hypot(G.clientX-O,G.clientY-J)>10&&Q()}),["pointerup","pointercancel","pointerleave"].forEach(G=>_.addEventListener(G,()=>{A&&Q()})),_.addEventListener("contextmenu",G=>G.preventDefault())}),c.querySelectorAll("[data-ht]").forEach(_=>_.onclick=()=>{if(_._lpDone&&Date.now()-_._lpDone<1500)return;if(S("#inf").classList.contains("compact")){md=!0,gd();return}let A=$(_.dataset.ht);A.open=!A.open,si(A),_e(!0),(Et||ae>=0||Ce||Ot)&&(f._h="",Re())}),c.querySelectorAll("[data-hxf]").forEach(_=>_.onclick=A=>{A.stopPropagation();let[O,J]=_.dataset.hxf.split(":"),Q=$(O);Q.xfer=J||null,si(Q),_e(!0)});let v=_=>{clearTimeout(_._cfgT),_._cfgT=setTimeout(()=>{_._cfg=!1,_e(!0)},1e4)};c.querySelectorAll("[data-hs]").forEach(_=>_.onclick=()=>{let[A,O]=_.dataset.hs.split(":"),J=$(A);v(J),J.i!==+O&&(J.i=+O,si(J),_e(!0))}),c.querySelectorAll("[data-hcfg]").forEach(_=>_.onclick=A=>{A.stopPropagation();let O=$(_.dataset.hcfg);if(O._cfg=!O._cfg,clearTimeout(O._cfgT),O._cfg&&v(O),!hd.v){hd.v=!0;try{localStorage.setItem("rod_cfgseen","1")}catch{}}_e(!0)}),c.querySelectorAll("[data-hrep]").forEach(_=>_.onclick=A=>{A.stopPropagation();let O=$(_.dataset.hrep);rx(O.st[O.i||0])}),c.querySelectorAll("[data-hcfgmap]").forEach(_=>_.onclick=A=>{A.stopPropagation();let O=+_.dataset.hcfgmap;Oi("map"),window.__rodPickStation(O)}),c.querySelectorAll("[data-hwt]").forEach(_=>_.onclick=A=>{A.stopPropagation();let O=$(_.dataset.hwt);O._wedit=!O._wedit,clearTimeout(O._wT),O._wedit&&(O._wT=setTimeout(()=>{O._wedit=!1,_e(!0)},6e3)),_e(!0)}),c.querySelectorAll("[data-hw]").forEach(_=>_.addEventListener("click",()=>{let A=$(_.dataset.hw.split(":")[0]);A._cfg&&v(A)},!0)),c.querySelectorAll("[data-hw]").forEach(_=>_.onclick=()=>{let[A,O]=_.dataset.hw.split(":"),J=$(A);J.walk=M(J.walk+ +O,0,60),si(J),_e(!0)}),c.querySelectorAll("[data-hwset]").forEach(_=>_.onclick=A=>{A.stopPropagation();let[O,J]=_.dataset.hwset.split(":"),Q=$(O);Q.walk=M(+J,0,60),si(Q),Q._cfg&&(clearTimeout(Q._cfgT),Q._cfgT=setTimeout(()=>{Q._cfg=!1,_e(!0)},1e4)),Be(`${__t(591)}: ${Q.walk} min`),_e(!0)}),c.querySelectorAll("[data-hmap]").forEach(_=>_.onclick=()=>{let A=+_.dataset.hmap;Ot=Ce=Ut=!1,Et=null,ae=A,zn(),Object.assign(s,{tx:T[A].w[0],ty:T[A].w[1],dist:18,tilt:Math.max(s.tilt,.5)}),f._h="",Re(),o()}),c.querySelectorAll("[data-hset]").forEach(_=>_.onclick=()=>Dm(_.dataset.hset)),c.querySelectorAll("[data-hnear]").forEach(_=>_.onclick=()=>{let A=zt.get(Tt.st[0]);A!=null&&xd(A,_.dataset.hnear)}),c.querySelectorAll("[data-hmore]").forEach(_=>_.onclick=()=>{let A=$(_.dataset.hmore);A.more=!A.more,_e(!0)}),c.querySelectorAll("[data-hhide]").forEach(_=>_.onclick=A=>{A.stopPropagation();let[O,J]=_.dataset.hhide.split(":"),Q=$(O);Q.hide=J,si(Q),_e(!0)}),c.querySelectorAll("[data-hshow]").forEach(_=>_.onclick=()=>{let A=$(_.dataset.hshow);A.hide="",si(A),_e(!0)}),c.querySelectorAll("[data-hgo]").forEach(_=>_.onclick=A=>{A.stopPropagation();let[O,J]=_.dataset.hgo.split(":"),Q=$(O);Q.goAt=J==="1"?Date.now():0,Q.goAt?Q.platAt=0:Q._noWay=Date.now()+15*6e4,si(Q),_e(!0)}),c.querySelectorAll("[data-unchoose]").forEach(_=>_.onclick=A=>{A.stopPropagation();let O=_.dataset.unchoose;[...ln].forEach(([J,Q])=>{String(Q)===O&&ri(J,null)}),Rn.num===O&&(Rn.num=""),fe&&String(fe.num)===O&&(fe=null),ve&&ve.num===O&&(ve=null,Cs()),Et&&String(Et.num)===O&&(Et=null,f._h="",Re()),_e(!0)}),c.querySelectorAll("[data-chmap]").forEach(_=>_.onclick=A=>{A.stopPropagation();let O=Ps(_.dataset.chmap);O&&(Oi("map"),Js({num:String(O.num),tid:O.tid&&V.vp.has(O.tid)?O.tid:"",tr:O}),fe=O)}),c.querySelectorAll("[data-hboard]").forEach(_=>_.onclick=A=>{if(A.stopPropagation(),_.classList.contains("off")){od(_.dataset.hbwhen);return}let O=na(_.dataset.hboard,"lock",_.closest(".hplace")?.querySelector("[data-ht]")?.dataset.ht);Be(`${__t(576)} ${O&&O.tr.fam||""} ${_.dataset.hboard} \xB7 ${__t(565)}`),_e(!0)}),c.querySelectorAll("[data-hplat]").forEach(_=>_.onclick=A=>{A.stopPropagation();let[O,J]=_.dataset.hplat.split(":"),Q=$(O);if(Q.platAt=J==="1"?Date.now():0,Q.platAt){Q.goAt=0;let G=An(Q);G!=null&&(Eo.s=G,Eo.at=Date.now())}si(Q),_e(!0)}),c.querySelectorAll("[data-hnotst]").forEach(_=>_.onclick=A=>{A.stopPropagation(),Tt.homeW=Tt.w;try{localStorage.setItem("rod_homew",JSON.stringify(Tt.w))}catch{}_e(!0)}),c.querySelectorAll("[data-hdel]").forEach(_=>_.onclick=()=>{$e.st=[],$e.open=!1,si($e),_e(!0),bm()}),c.querySelectorAll("[data-dk]").forEach(_=>{let A=0,O=0,J=0,Q=()=>{clearTimeout(A),A=0,_.classList.remove("lpress")};_.addEventListener("pointerdown",G=>{let nt=x[+_.dataset.dk];!nt||nt.num==null||!_.matches("li.hr, .hv")||(O=G.clientX,J=G.clientY,_.classList.add("lpress"),A=setTimeout(()=>{if(A=0,_.classList.remove("lpress"),_._lpDone=Date.now(),!ad(nt,ee())){od(nt.est!=null?rt(nt.est):"");return}let W=na(nt.num,"lock",_.closest(".hplace")?.querySelector("[data-ht]")?.dataset.ht);try{navigator.vibrate&&navigator.vibrate(35)}catch{}Be(`${__t(576)} ${W&&W.tr.fam||nt.fam||""} ${nt.num} \xB7 ${__t(565)}`),_e(!0)},700))}),_.addEventListener("pointermove",G=>{A&&Math.hypot(G.clientX-O,G.clientY-J)>10&&Q()}),["pointerup","pointercancel","pointerleave"].forEach(G=>_.addEventListener(G,()=>{A&&Q()})),_.addEventListener("contextmenu",G=>G.preventDefault())}),c.querySelectorAll(".hv .hwhere").forEach(_=>_.onclick=A=>{A.stopPropagation();let O=_.closest("[data-dk]"),J=O&&x[+O.dataset.dk];J&&(Oi("map"),Js(J))}),c.querySelectorAll("[data-dk]").forEach(_=>_.onclick=()=>{if(_._lpDone&&Date.now()-_._lpDone<1500)return;let A=x[+_.dataset.dk];if(_.matches("li.hr, .hv")&&!A.gone&&A.num!=null){let O=_.closest(".hplace")?.querySelector("[data-ht]")?.dataset.ht;if(O){let J=ln.get(O)===String(A.num);ri(O,J?null:String(A.num)),J&&Rn.num===String(A.num)&&(Rn.num=""),J?Et&&String(Et.num)===String(A.num)&&(Et=null,fe=null,Ve.sk="",f._h="",Re()):Js(A,!0),_e(!0);return}}if(A.gone&&_.closest("#home")){Be(`${__t(592)} \xB7 ${A.fam||""} ${A.num||""}`,{label:__t(563),fn:()=>{Oi("map"),Js(A)}});return}Js(A)}),c.querySelectorAll("[data-pinnext]").forEach(_=>_.onclick=A=>{if(A.target.closest("[data-unpin]"))return;let[O,J]=_.dataset.pinnext.split(":");ri(O,J);let Q=Am(O,J);Q&&Js(Q,!0),_e(!0)}),c.querySelectorAll("[data-unpin]").forEach(_=>_.onclick=A=>{A.stopPropagation(),ri(_.dataset.unpin,null),_e(!0)}),c.querySelectorAll("[data-hal]").forEach(_=>_.onclick=()=>S("#alr").click()),nd(c)}function Js(a,c){if(!a)return;let h=t.days.indexOf(ee().ymd),p=Bt.find(C=>C.real?a.tid&&C.v.tid===a.tid||a.num&&String(C.tr?C.tr.num:C.v.num)===String(a.num):a.tr&&C.tr===a.tr||a.num&&C.tr&&String(C.tr.num)===String(a.num)),x=a.tr||p&&p.tr||(st[h]||[]).find(C=>String(C.num)===String(a.num));if(Ot=Ce=Ut=!1,ae=-1,c||void 0,Et=p?p.tr||{vtid:p.v.tid}:x||null,!Et)return;c&&(Ve.sk="t"+(Et.num||Et.vtid)),fe=p&&p.tr?p.tr:null,fe&&innerWidth<=640&&(f.classList.add("peek"),S("#rc").classList.contains("min")||S("#rcgrab").click());let y=p?p.p.w:null;y&&Object.assign(s,{tx:y[0],ty:y[1],dist:Math.min(s.dist,22)}),zn(),f._h="",Re(),De=0,o()}let ra=!1;function Dm(a){ra=a||!1,b.value="",b.placeholder=a==="work"?__t(593):a==="home"?__t(594):__t(595),document.documentElement.classList.add("srch"),g.style.display="none",b.focus()}let Nm=()=>document.documentElement.classList.remove("srch");{let a=S("#hfind");a&&(a.onclick=()=>Dm(""))}b.addEventListener("blur",()=>setTimeout(()=>{document.activeElement!==b&&Nm(),ra&&!b.value.trim()&&(ra=!1,b.placeholder=__t(595))},600));function mw(){}function xd(a,c){let h=c==="work"?$e:Xe,p=T[a].id,x=T.filter(y=>y.fams.size&&y!==T[a]&&Math.hypot(y.w[0]-T[a].w[0],y.w[1]-T[a].w[1])<.6).map(y=>y.id);h.st=[p,...x].slice(0,3),h.i=0,h.open=!0,si(h),_e(!0),bm()}let dc=S("#lines");dc.innerHTML=`${__t(596)}`+q.map(a=>`<button type="button" style="--c:${Z[a]}" data-f="${a}">${a}</button>`).join("");function Um(){try{_e(!0)}catch{}{let a=S("#linebtn");a||(a=document.createElement("button"),a.type="button",a.id="linebtn",dc.after(a),a.onclick=()=>{me=[...Dt][0],Ut=Ot=Ce=!1,f._h="",Re()});let c=Dt.size===1?[...Dt][0]:"";a.hidden=!c,c&&(a.innerHTML=`${__t(597)}${m(c)}${__t(598)}`)}dc.querySelectorAll("[data-f]").forEach(a=>{a.dataset.f!=="*"&&a.classList.toggle("off",!Dt.has(a.dataset.f))})}dc.querySelectorAll("[data-f]").forEach(a=>a.onclick=()=>{let c=a.dataset.f;c==="*"?q.forEach(h=>Dt.add(h)):Dt.size===q.length?(Dt.clear(),Dt.add(c)):Dt.has(c)?(Dt.delete(c),Dt.size||q.forEach(h=>Dt.add(h))):Dt.add(c);try{localStorage.setItem("rod_lines",JSON.stringify([...Dt]))}catch{}Um(),he(),zn(),id(),De=0,o()});let vd=[...document.querySelectorAll("[data-sp]")],Ui=0;function Om(a){let c=ee();a&&(Lt===a||Ui===a)?Lt?(Kt=c.min,de=c.min,Lt=0,Ui=a):(ge=performance.now(),Lt=a,Ui=0):a===0?(Lt=0,de=null,Ui=0):(Kt=c.min,ge=performance.now(),de=c.min,Lt=a,Ui=0),vd.forEach(h=>{let p=+h.dataset.sp;h.classList.toggle("on",p===(Lt||Ui)||!Lt&&!Ui&&de==null&&p===0),h.classList.toggle("pz",!!Ui&&p===Ui),h.textContent=p===0?__t(109):Ui===p?"\u25B6 \xD7"+p:Lt===p?"\u23F8 \xD7"+p:"\xD7"+p}),De=0,o()}vd.forEach(a=>a.onclick=()=>Om(+a.dataset.sp)),S("#tsl").oninput=a=>{let c=+a.target.value;Kt=c,de=c,ge=performance.now(),Lt===0&&!Ui&&vd.forEach(h=>h.classList.remove("on")),De=0,o()},setInterval(()=>{de!=null&&Lt&&Kt+(performance.now()-ge)/6e4*Lt>1560&&(Kt=240,ge=performance.now())},1e3),window.__rodSearch=a=>{let c=w(a.trim());if(!c){g.style.display="none",g._pick=null;return}let h=[],p=[];T.forEach((P,R)=>{if(!P.fams.size)return;let U=w(P.n);U.startsWith(c)||U.includes(" "+c)||U.includes("-"+c)?h.push(R):U.includes(c)&&p.push(R)});let x=h.concat(p).slice(0,7),y=N.filter(P=>w(P.name).startsWith(c)).sort((P,R)=>R.pop-P.pop).slice(0,3),C=x.map(P=>({h:`\u{1F689} ${m(T[P].n)}<em>${[...T[P].fams].sort(B).slice(0,3).map(R=>`<em class="ls" style="background:${Z[R]}">${R}</em>`).join(" ")}</em>`,go:()=>{if(Nm(),ra){let R=ra;ra=!1,b.placeholder=__t(595),xd(P,R);return}Ve.on&&Ve.cur!=="map"&&Oi("map"),Ot=!1,Ce=!1,Ut=!1,ae=P,Et=null,fe=null,zn(),Object.assign(s,{tx:T[P].w[0],ty:T[P].w[1],dist:Math.min(s.dist,20),tilt:Math.max(s.tilt,.5)}),Re(),o()}})).concat(y.map(P=>({h:`${m(P.name)}${__t(599)}`,go:()=>{Object.assign(s,{tx:P.cx,ty:P.cy,dist:M(P.size*3+14,14,60)}),o()}})));g.innerHTML=C.map((P,R)=>`<li data-i="${R}">${P.h}</li>`).join("")||__t(600),g.style.display="block",g._pick=P=>{C[P]&&(C[P].go(),g.style.display="none",b.value="",b.blur())},g.querySelectorAll("li[data-i]").forEach(P=>P.onclick=()=>g._pick(+P.dataset.i))},Um(),zn();try{let a=new URLSearchParams(location.search).get("st");if(a){let c=w(a),h=-1,p=0;T.forEach((x,y)=>{if(!x.fams.size)return;let C=w(x.n),P=C===c?3:C.startsWith(c)||c.startsWith(C)?2:C.includes(c)||c.includes(C)?1:0;P>p&&(p=P,h=y)}),h>=0&&setTimeout(()=>{ae=h,zn(),Object.assign(s,{tx:T[h].w[0],ty:T[h].w[1],dist:18,tilt:.5}),Re(),o()},300)}}catch{}let yd={v:!1};document.addEventListener("click",a=>{!(a.target.closest&&a.target.closest("[data-halx]"))||a.target.closest("a")||(yd.v=!yd.v,_e(!0))}),f.addEventListener("click",a=>{if(!f.classList.contains("peek")&&innerWidth<=640&&Et&&f.querySelector(".mn")&&!a.target.closest("button,a,input,select,label,summary,[data-alarm],[data-gs],[data-gt],[data-sf],[data-al],[role=button]")){let h=f.querySelector(".mn");a.stopPropagation(),h&&h.click();return}if(!f.classList.contains("peek")||a.target.closest("button,a,input"))return;a.stopPropagation(),a.preventDefault(),f.classList.remove("peek");let c=f.querySelector(".mn");c&&(c.textContent="\u25BE"),f.scrollTop=0},!0),f.addEventListener("pointerdown",()=>{f._touch=Date.now()+2500},!0),["pointerup","pointercancel"].forEach(a=>f.addEventListener(a,()=>{f._touch=0},!0));{let a=0,c=0,h=0,p=0;f.addEventListener("touchstart",x=>{p=innerWidth<=640&&Et&&(!Ve.on||Ve.cur==="map")&&x.touches.length===1&&!x.target.closest("input")?1:0,p&&(a=x.touches[0].clientX,c=x.touches[0].clientY,h=0)},{passive:!0}),f.addEventListener("touchmove",x=>{if(!p)return;let y=x.touches[0].clientX-a,C=x.touches[0].clientY-c;p===1&&(Math.abs(y)<12&&Math.abs(C)<12||(p=Math.abs(y)>Math.abs(C)*1.3&&y<0?2:0,!p))||(x.preventDefault(),h=Math.min(0,y),f.style.transition="none",f.style.transform=`translateX(${h}px)`,f.style.opacity=String(Math.max(.3,1+h/300)))},{passive:!1}),f.addEventListener("touchend",()=>{if(p!==2){p=0;return}if(p=0,f.style.transition="transform .18s,opacity .18s",h>-90){f.style.transform="",f.style.opacity="";return}f.style.transform="translateX(-110%)",f.style.opacity="0",setTimeout(()=>{let x=f.querySelector("[data-cx]");x&&x.click(),f.style.transition="",f.style.transform="",f.style.opacity=""},180)}),f.addEventListener("touchcancel",()=>{p===2&&(f.style.transform="",f.style.opacity=""),p=0})}let Ve={on:!1,cur:"now",home:new Map},fc=matchMedia("(max-width:640px), (max-height:500px) and (pointer:coarse)"),Nn=document.createElement("nav");Nn.id="tabs";let _x=[["now","\u{1F552}",__t(109)],["map","\u{1F5FA}\uFE0F",__t(601)],["line","\u{1F4CA}",__t(602)],["set","\u2699\uFE0F",__t(603)]];Nn.innerHTML=_x.map(([a,c,h])=>`<button type="button" data-tab="${a}"><span>${c}</span><small>${h}</small></button>`).join(""),document.body.appendChild(Nn);let Er=document.createElement("i");Er.className="tind",Er.setAttribute("aria-hidden","true"),Nn.prepend(Er);let Fm=a=>[...Nn.querySelectorAll("[data-tab]")].find(c=>{let h=c.getBoundingClientRect();return a>=h.left&&a<h.right}),Sd=a=>{!a||!a.offsetWidth||(Er.style.width=a.offsetWidth+"px",Er.style.height=a.offsetHeight+"px",Er.style.top=a.offsetTop+"px",Er.style.transform=`translateX(${a.offsetLeft}px)`)},aa=()=>Sd(Nn.querySelector("[data-tab].on")),xx=()=>{try{let a=window.Capacitor,c=a&&a.isNativePlatform&&a.isNativePlatform()&&a.Plugins&&a.Plugins.Haptics;c&&c.selectionChanged().catch(()=>{})}catch{}},ai={on:!1,b:null,moved:!1,until:0};Nn.addEventListener("pointerdown",a=>{let c=Fm(a.clientX);if(c){ai.on=!0,ai.b=c,ai.moved=!1,Nn.classList.add("drag"),Nn.querySelectorAll(".hov").forEach(h=>h.classList.remove("hov")),c.classList.add("hov"),Sd(c);try{Nn.setPointerCapture(a.pointerId)}catch{}try{let h=window.Capacitor,p=h&&h.Plugins&&h.Plugins.Haptics;p&&h.isNativePlatform()&&p.selectionStart().catch(()=>{})}catch{}}}),Nn.addEventListener("pointermove",a=>{if(!ai.on)return;let c=Fm(a.clientX);c&&c!==ai.b&&(ai.b.classList.remove("hov"),c.classList.add("hov"),ai.b=c,ai.moved=!0,Sd(c),xx())});let Bm=a=>{if(ai.on){ai.on=!1,Nn.classList.remove("drag"),Nn.querySelectorAll(".hov").forEach(c=>c.classList.remove("hov"));try{let c=window.Capacitor,h=c&&c.Plugins&&c.Plugins.Haptics;h&&c.isNativePlatform()&&h.selectionEnd().catch(()=>{})}catch{}a&&ai.b?(ai.until=Date.now()+500,ai.b.dataset.tab!==Ve.cur?Oi(ai.b.dataset.tab):aa()):aa()}};Nn.addEventListener("pointerup",()=>Bm(!0)),Nn.addEventListener("pointercancel",()=>Bm(!1)),addEventListener("resize",()=>setTimeout(aa,60));try{new ResizeObserver(()=>aa()).observe(Nn)}catch{}let oa=document.createElement("div");oa.id="tabL",document.body.appendChild(oa);let Tr=document.createElement("div");Tr.id="tabA",Tr.className="box",document.body.appendChild(Tr);let bd=(a,c)=>{a&&(Ve.home.has(a)||Ve.home.set(a,[a.parentNode,a.nextSibling]),c.appendChild(a))},km=()=>{for(let[a,[c,h]]of Ve.home)try{c.insertBefore(a,h&&h.parentNode===c?h:null)}catch{}Ve.home.clear()};function Md(){if(!document.getElementById("tabLt")){let y=document.createElement("div");y.id="tabLt",y.textContent=__t(602),document.body.appendChild(y)}let a=[...new Set([Xe,$e].flatMap(y=>{let C=An(y);return C!=null?[...T[C].fams]:[]}))],c=(Dt.size&&Dt.size<=8?[...Dt]:a.length?a:[]).filter(y=>Z[y]).sort(B),h=c.join(","),p=V.alerts.filter(y=>[...y.fams].some(C=>Dt.has(C))).length,x=[Ut,Ce,me,Ot,h,p].join("|");oa._k!==x&&(oa._k=x,oa.innerHTML=`<button type="button" data-tl="stats" class="${Ut?"on":""}">\u{1F4CA} ${__t(58)}</button><button type="button" data-tl="alr" class="${Ce?"on":""}">\u26A0\uFE0F ${p}${p===1?__t(360):__t(361)}</button>${c.map(y=>`<button type="button" data-tl="line:${m(y)}" class="${me===y?"on":""}">\u{1F4CB} ${m(y)}</button>`).join("")}<a href="https://www.whatsapp.com/channel/0029Vav4hGTId7nPenKMuo2C" target="_blank" rel="noopener" title="${__t(174)}">\u{1F4AC}</a>`,oa.querySelectorAll("[data-tl]").forEach(y=>y.onclick=()=>{let C=y.dataset.tl;Ut=C==="stats",Ce=C==="alr",me=C.startsWith("line:")?C.slice(5):"",Ot=!1,Et=null,ae=-1,Ut&&(Ue.at=0),f._h="",Re(),Md()}))}document.addEventListener("visibilitychange",()=>{!document.hidden&&window.__txt&&window.__txt()});let vx="https://raw.githubusercontent.com/elMonoAmelio/catalunya-survival/horarios/rod_pack.json",yx=()=>yt(new Date).ymd.replace(/-/g,"");function To(){navigator.onLine===!1||location.protocol==="file:"&&!/[?&]pack=1/.test(location.search)||fetch(vx,{cache:"no-store"}).then(a=>a.ok?a.text():null).then(a=>{if(!a)return;let c;try{c=JSON.parse(a)}catch{return}if(!c||!c.gen||!Array.isArray(c.days)||!c.trips||c.gen<=t.gen)return;try{localStorage.setItem("rod_pack",a)}catch{return}let h=yx(),p=t.days.indexOf(h),x=c.days.indexOf(h),y=p<0?0:ht.filter(R=>R.day===p).length,C=0;if(x>=0)for(let R of c.trips)R[0]===x&&C++;let P=x>=0&&y&&(Math.abs(C-y)/y>.1||!C);if(p<0||p>=t.days.length-2||P){try{sessionStorage.setItem("rod_packmsg",P?"1":"")}catch{}location.reload();return}Ao.v=!0}).catch(()=>{})}let Ao={v:!1};document.addEventListener("visibilitychange",()=>{document.hidden&&Ao.v?(Ao.v=!1,Ao.reload=!0):!document.hidden&&Ao.reload&&location.reload()});try{sessionStorage.getItem("rod_packmsg")==="1"&&(sessionStorage.removeItem("rod_packmsg"),setTimeout(()=>Be("\u{1F5D3}\uFE0F "+__t(604)),1500))}catch{}if(setTimeout(To,4e3),document.addEventListener("visibilitychange",()=>{!document.hidden&&Date.now()-(To.at||0)>6*36e5&&(To.at=Date.now(),To())}),To.at=Date.now(),window.__RODNEW__){let a=window.__RODNEW__,c=S("#ver");c&&c.firstChild&&c.firstChild.nodeType===3&&(c.firstChild.textContent=c.firstChild.textContent.replace(/(\d\d\/\d\d \d\d:\d\d)/,a.slice(8,10)+"/"+a.slice(5,7)+" "+a.slice(11,16)))}function pc(){km();let a=window.__L||"es",c=pi.mode,h=(p,x,y,C)=>`<div class="irow"><span class="iic" style="--ic:${x}">${p}</span><span class="ilab">${y}</span>${C||""}</div>`;Tr.innerHTML=`<h3 class="ilt">${__t(603)}</h3>
      <div class="icard">${h("\u{1F310}","#0a84ff",__t(605))}<div class="seg2 iseg">${"ca|Catal\xE0,es|Espa\xF1ol,en|English".split(",").map(p=>p.split("|")).map(([p,x])=>`<button type="button" data-lang="${p}" class="${a===p?"on":""}">${x}</button>`).join("")}</div>
      ${h("\u{1F319}","#5e5ce6",__t(606))}<div class="seg2 iseg">${[["auto",__t(382)],["light",__t(607)],["dark",__t(608)]].map(([p,x])=>`<button type="button" data-th="${p}" class="${c===p?"on":""}">${x}</button>`).join("")}</div>
      ${h("\u{1F520}","#8e8e93",__t(609))}<div class="seg2 iseg">${(()=>{let p="";try{p=localStorage.getItem("rod_big")||""}catch{}let x=p==="1"?"1":p==="0"?"0":"a";return[["a",__t(382)],["0","Normal"],["1",__t(610)]].map(([y,C])=>`<button type="button" data-big="${y}" class="${x===y?"on":""}">${C}</button>`).join("")})()}</div></div>${(()=>{let p="";try{p=localStorage.getItem("rod_big")||""}catch{}return p==="1"||p==="0"?"":`<small class="tabAhint ifoot">${__t(611)}</small>`})()}
      <div class="ihd">${__t(205)}</div><div class="icard">${h("\u{1F514}","#ff453a",__t(612),'<div id="tabAbell"></div>')}${(()=>{let p=lc();return p.length>1?`<div class="irow isub"><span class="ilab">${__t(613)}</span></div><div class="alch">${p.map(x=>`<button type="button" data-al="${m(x)}" class="ln${wr.has(x)?" off":""}" style="--c:${Z[x]}">${m(x)}</button>`).join("")}</div>`:""})()}</div><small class="tabAhint ifoot">${__t(614)}</small>${lc().length?"":`<small class="tabAhint ifoot">${__t(615)}</small>`}
      <div class="icard">${h("\u{1F4E1}","#30d158",__t(616))}<div id="tabArt" class="ibody"></div>${h("\u2139\uFE0F","#636366",__t(617))}<div id="tabAinf" class="ibody"></div></div>
      <p class="tdisc ifoot">${__t(618)}</p>
      <p class="tabAfoot">MonkiSoft</p>`,Tr.querySelectorAll("[data-al]").forEach(p=>p.onclick=()=>{let x=p.dataset.al,y=lc();wr.has(x)?wr.delete(x):y.filter(C=>!wr.has(C)).length>1&&wr.add(x);try{localStorage.setItem("rod_aloff",JSON.stringify([...wr]))}catch{}_e(!0),pc()}),Tr.querySelectorAll("[data-big]").forEach(p=>p.onclick=()=>{let x=p.dataset.big;try{x==="a"?localStorage.removeItem("rod_big"):localStorage.setItem("rod_big",x)}catch{}window.__txt&&window.__txt(),pc(),_e(!0)}),Tr.querySelectorAll("[data-th]").forEach(p=>p.onclick=()=>{pi.mode=p.dataset.th;try{localStorage.setItem("rod_theme",pi.mode)}catch{}Kl(),pc()}),bd(S("#bell"),S("#tabAbell")),bd(S("#src"),S("#tabArt")),bd(S("#ver"),S("#tabAinf"))}function Oi(a){if(!Ve.on)return;let c=Ve.cur;if(Ve.cur=a,document.documentElement.dataset.tab=a,window.__mapHidden=a!=="map",a!=="map"&&(f.classList.remove("peek","sw"),f.classList.contains("min")&&window.__mcsMin&&window.__mcsMin(!1),f.style.transform="",f.style.opacity=""),!window.__mapHidden&&window.__wakeMap&&window.__wakeMap(),Nn.querySelectorAll("[data-tab]").forEach(h=>h.classList.toggle("on",h.dataset.tab===a)),aa(),a==="line")(Et||ae>=0)&&(Ve.keep={t:Et,s:ae,sk:Ve.sk}),!Ut&&!Ce&&!me&&!Ot&&(Ut=!0,Ue.at=0),Et=null,ae=-1,f._h="",Re(),Md();else if(c==="line"){Ut=Ce=Ot=!1,me="";let h=Ve.keep;Ve.keep=null,h&&a==="map"&&!Et&&ae<0&&(Et=h.t,ae=h.s,Ve.sk=h.sk),f._h="",Re()}a==="map"&&requestAnimationFrame(()=>requestAnimationFrame(()=>{try{Kh()}catch{}dispatchEvent(new Event("resize"))})),a==="set"&&pc(),a==="now"&&(_e(!0),requestAnimationFrame(cc)),De=0,o()}Nn.onclick=a=>{if(Date.now()<ai.until)return;let c=a.target.closest("[data-tab]");c&&Oi(c.dataset.tab)},window.__rodTabSync=()=>{if(!Ve.on)return;let a=Et?"t"+(Et.num||Et.vtid):ae>=0?"s"+ae:"",c=a!==Ve.sk;Ve.sk=a,a&&c&&Ve.cur!=="map"?Oi("map"):(Ce||me||Ot)&&Ve.cur!=="line"&&Ve.cur!=="map"&&Oi("line"),Ve.cur==="line"&&Md()};function wd(){let a=fc.matches||document.documentElement.classList.contains("cap");if(a!==Ve.on)if(Ve.on=a,document.documentElement.classList.toggle("tabmode",a),requestAnimationFrame(()=>requestAnimationFrame(aa)),a||(window.__mapHidden=!1),a){let c="now";try{let h=sessionStorage.getItem("rod_tabgo");h&&(sessionStorage.removeItem("rod_tabgo"),/^(now|map|line|set)$/.test(h)&&(c=h))}catch{}Oi(c)}else delete document.documentElement.dataset.tab,km()}fc.addEventListener?fc.addEventListener("change",wd):fc.addListener(wd),wd();{let a=S("#rc"),c=()=>document.documentElement.style.setProperty("--rch",Math.round(a.getBoundingClientRect().height)+"px");window.ResizeObserver&&new ResizeObserver(c).observe(a),c()}let Ed={"\u{1F3D8}":'<path d="M3 21V11l5-4 5 4v10"/><path d="M13 21V9l4-3 4 3v12"/><path d="M2 21h20"/><path d="M7 21v-4h2v4"/>',"\u{1F3E0}":'<path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/>',"\u{1F4BC}":'<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5h6v2"/><path d="M3 13h18"/>',"\u{1F4CD}":'<path d="M12 21s-7-6.5-7-12a7 7 0 0114 0c0 5.5-7 12-7 12z"/><circle cx="12" cy="9" r="2.5"/>',"\u{1F686}":'<rect x="5" y="3" width="14" height="14" rx="3"/><path d="M5 11h14M8 21l2-4M16 21l-2-4"/><circle cx="9" cy="14" r=".6"/><circle cx="15" cy="14" r=".6"/>',"\u{1F6B6}":'<circle cx="13" cy="4" r="2"/><path d="M12 7l-2 6 3 3v5M10 13l-3 8M11 8l4 3h3M11 8l-4 3"/>',"\u{1F689}":'<path d="M4 20h16M6 20V9l6-5 6 5v11"/><path d="M10 20v-5h4v5"/>',"\u26A0\uFE0F":'<path d="M12 3l10 18H2z"/><path d="M12 10v5M12 18v.4"/>',"\u{1F4CC}":'<path d="M9 3h6l-1 6 3 3H7l3-3z"/><path d="M12 12v9"/>',"\u{1F5D3}\uFE0F":'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',"\u{1F4E1}":'<path d="M5 19a10 10 0 0114 0M8 16a6 6 0 018 0"/><circle cx="12" cy="20" r="1"/><path d="M3 15a14 14 0 0118 0"/>',"\u{1F552}":'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',"\u{1F5FA}\uFE0F":'<path d="M9 4L3 6v14l6-2 6 2 6-2V4l-6 2-6-2z"/><path d="M9 4v14M15 6v14"/>',"\u{1F4CA}":'<path d="M4 20V11M10 20V4M16 20v-7M2 20h20"/>',"\u2699\uFE0F":'<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1"/>',"\u{1F310}":'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/>',"\u{1F319}":'<path d="M20 14A8 8 0 1110 4a7 7 0 0010 10z"/>',"\u{1F520}":'<path d="M3 18l4-12 4 12M4.5 14h5M15 18V9h3.5a2.5 2.5 0 010 5H15M15 14h4a2 2 0 010 4h-4"/>',"\u{1F514}":'<path d="M6 16V11a6 6 0 0112 0v5l2 2H4z"/><path d="M10 21h4"/>',"\u{1F515}":'<path d="M6 16V11a6 6 0 0112 0v5l2 2H4z"/><path d="M10 21h4M3 3l18 18"/>',"\u2139\uFE0F":'<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.5"/>',"\u{1F4CB}":'<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V3h6v1M8 10h8M8 14h8M8 18h5"/>',"\u{1F4AC}":'<path d="M4 5h16v11H9l-5 4z"/>',"\u26D4":'<circle cx="12" cy="12" r="9"/><path d="M7 12h10"/>',"\u{1F4F6}":'<path d="M4 20v-3M9 20v-7M14 20V9M19 20V5"/>',"\u23F3":'<path d="M7 3h10M7 21h10M8 3c0 6 8 6 8 9s-8 3-8 9M16 3c0 6-8 6-8 9s8 3 8 9"/>',"\u{1F3D9}\uFE0F":'<path d="M3 21V9h6v12M9 21V4h6v17M15 21v-9h6v9M2 21h20"/>',"\u{1F4E4}":'<path d="M12 15V3M7 8l5-5 5 5"/><path d="M5 12v8h14v-8"/>',"\u2B50":'<path d="M12 3l2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.3 6.4 20.2l1.1-6.2L3 9.6l6.2-.9z"/>'},Td=new RegExp("("+Object.keys(Ed).map(a=>a.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")).join("|")+")\uFE0F?","g"),Sx=a=>`<span class="ico" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${Ed[a]||Ed[a+"\uFE0F"]||""}</svg></span>`;function bx(a){let c=document.createTreeWalker(a,NodeFilter.SHOW_TEXT),h=[],p;for(;p=c.nextNode();)p.parentElement&&p.parentElement.closest(".ico,script,style,textarea,input")||(Td.lastIndex=0,Td.test(p.nodeValue)&&h.push(p));for(let x of h){let y=document.createElement("span");y.innerHTML=m(x.nodeValue).replace(Td,(C,P)=>Sx(P)),x.replaceWith(...y.childNodes)}return h.length}{let a=()=>["#home","#tabs","#tabA","#tabL","#mcs","#onb","#toast","#rc","#inf","#mbtn","#sbtn","#wabtn","#bell","#list"].map(x=>S(x)).filter(Boolean),c=!1,h=()=>{if(!c){c=!0;try{let x=0;a().forEach(y=>{x+=bx(y)}),x&&Ve.on&&cc()}finally{c=!1}}},p=new MutationObserver(()=>{c||queueMicrotask(h)});setTimeout(()=>{h(),a().forEach(x=>p.observe(x,{childList:!0,subtree:!0,characterData:!0}))},0)}window.__rod={PIN:ln,LASTPIN:Rn,get ONBX(){return{tid:mt.tid,lock:mt.lock,manual:mt.manual}},xferCands:pm,bestXfer:ud,xferFirst:cd,nowState:ee,XMIN:fm,pinNotify:Tm,toast:Be,cardEta:ea,HOME:Xe,WORK:$e,ONB:mt,alertForMe:ym,whereAmI:pd,departuresFor:Jn,DEPS:Ft,tripByNum:Ps,delayOf:kt,TID:pt,SID:zt,byDay:st,get days(){return t.days},get hist(){return Ue},get past(){return ft.cur},get cols(){return gn.mesh?gn.mesh.count:-1},get dist(){return r.dist},get follow(){return fe},get selTrip(){return Et},ST:T,TR:ht,FAM:q,act:()=>Bt,setSpeed:Om,RT:V,pollRT:X,nowState:ee,posAt:K,activeTrips:dt,LL:bt,select:a=>{Et=a,Re()}}}var eo=window.__DATA__;var Ge=i=>document.querySelector(i),Vs=i=>String(i).replace(/\B(?=(\d{3})+(?!\d))/g,"."),ni=(i,t,e)=>Math.min(e,Math.max(t,i)),fp=i=>i.normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase(),di=Ge("#c"),zl=new Ah({canvas:di,antialias:!0});zl.setPixelRatio(Math.min(devicePixelRatio||1,2));var Hs=new Jo;Hs.background=new ye(15659509);var Gh=35,Ms=new ti(Gh,1,2,1500);Hs.add(new xl(16777215,9080992,1));var o_=new yl(16777215,.9);o_.position.set(-40,-70,90);Hs.add(o_);var Ss=100/eo.w,kl=eo.w/2,$l=eo.h/2,bn=[],pp=new Ji;Hs.add(pp);var kh=new Ur({color:16777215,transparent:!0,opacity:.55});for(let i of eo.m){let t=new Ji,e=[],n=[],s=1e9,r=-1e9,o=1e9,l=-1e9;for(let M of i.g){let w=M.map(S=>{let m=[];for(let z=0;z<S.length;z+=2)m.push(new Wt((S[z]-kl)*Ss,(S[z+1]-$l)*Ss));return m.length>1&&m[0].equals(m[m.length-1])&&m.pop(),m}).filter(S=>S.length>=3);if(!w.length)continue;let N=new ka(w[0]);for(let S=1;S<w.length;S++)N.holes.push(new Fr(w[S]));e.push(N);for(let S of w[0])s=Math.min(s,S.x),r=Math.max(r,S.x),o=Math.min(o,S.y),l=Math.max(l,S.y);for(let S of w)n.push(new el(new En().setFromPoints(S.map(m=>new j(m.x,m.y,0))),kh))}if(!e.length)continue;let u;try{u=new dl(e,{depth:1,bevelEnabled:!1})}catch{continue}let d=new ml({color:13421772}),f=new Bn(u,d);t.add(f);let b=new Ji;n.forEach(M=>b.add(M)),b.position.z=.04,pp.add(b),t.scale.z=.01,pp.add(t);let g={og:b,rings:i.g,inF:!0,sel:null,code:i.c,name:i.n,pop:i.p,area:i.a,pr:i.pr,rankP:0,rankD:0,group:t,mesh:f,mat:d,cx:(s+r)/2,cy:(o+l)/2,size:Math.max(r-s,l-o),z:.01,zt:.01,rank:0};f.userData.m=g,bn.push(g)}var $A=bn.map(i=>i.mesh),Qg=i=>{let t=0;for(let e=0;e<i.length;e+=2){let n=(e+2)%i.length;t+=i[e]*i[n+1]-i[n]*i[e+1]}return Math.abs(t)/2},l_=0,c_=0;for(let i of bn){for(let t of i.rings)l_+=Qg(t[0])-t.slice(1).reduce((e,n)=>e+Qg(n),0);c_+=i.area}var K1=Math.sqrt(c_/l_),Oh={"08":"Barcelona",17:"Girona",25:"Lleida",43:"Tarragona"},u_={"08":__t(619),17:__t(620),25:__t(621),43:__t(622)},Sp="sqrt",bp="pop",hp=0,mp=0,Za=1,Fl=1,Q1={sqrt:i=>Math.sqrt(i),lin:i=>i,log:i=>Math.log10(Math.max(i,1))},gp=i=>bp==="pop"?i.pop:i.pop/i.area,Nh=["#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#b10026","#5c0020"].map(i=>new ye(i));function tw(i){i=ni(i,0,1)*(Nh.length-1);let t=Math.min(Math.floor(i),Nh.length-2);return Nh[t].clone().lerp(Nh[t+1],i-t)}var ja=i=>i>=100?Vs(Math.round(i)):i.toLocaleString("es-ES",{maximumFractionDigits:1});function ew(){mp=0;for(let i of bn)mp+=i.pop;[...bn].sort((i,t)=>t.pop-i.pop).forEach((i,t)=>i.rankP=t+1),[...bn].sort((i,t)=>t.pop/t.area-i.pop/i.area).forEach((i,t)=>i.rankD=t+1),f_()}var h_=new ye("#d3d8e2"),d_=new ye("#eceff3");window.__mapTheme=i=>{Hs.background=new ye(i?856345:15659509),d_.set(i?"#2b3242":"#eceff3"),h_.set(i?"#1a1f29":"#d3d8e2"),kh.color.set(i?856345:16777215),kh.opacity=i?.7:.55,Mp.color.set(i?329483:2764864),wp.color.set(i?9081766:16777215);for(let t of bn)t.base&&Wh(t);$n()};function Wh(i){i.mat.color.copy(i.base).lerp(d_,document.documentElement.classList.contains("dark")?.95:.86),i.inF||i.mat.color.lerp(h_,.8)}function f_(){Za=1,Fl=1e12;for(let e of bn){let n=gp(e);Za=Math.max(Za,n),Fl=Math.min(Fl,n)}let i=Math.log10(Math.max(Fl,.01)),t=Math.log10(Za);for(let e of bn)e.base=tw((Math.log10(Math.max(gp(e),.01))-i)/(t-i)),Wh(e);Ge("#lmin").textContent=ja(Fl),Ge("#lmax").textContent=ja(Za),Ge("#lname").textContent=bp==="pop"?__t(623):__t(624),Xh()}function Xh(){let i=Q1[Sp],t=i(Za),e=24*hp;for(let n of bn)n.zt=hp<=.001?.01:Math.max(.12*Math.min(1,hp),e*i(gp(n))/t)*(n.inF?1:.1);$n()}var t_=Object.fromEntries(bn.map(i=>[i.code,i])),Fh=[],p_=[];for(let i of eo.bd){let t=t_[i.a],e=t_[i.b];if(!(!t||!e))for(let n=0;n+3<i.p.length;n+=2)p_.push((i.p[n]-kl)*Ss,(i.p[n+1]-$l)*Ss,0,(i.p[n+2]-kl)*Ss,(i.p[n+3]-$l)*Ss,0),Fh.push(t,e)}var $h=new ts;$h.setPositions(p_);var Mp=new gs({color:2764864,linewidth:4.4,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3}),wp=new gs({color:16777215,linewidth:2.4,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-6});[Mp,wp].forEach((i,t)=>{let e=new Gr($h,i);e.frustumCulled=!1,e.renderOrder=10+t,Hs.add(e)});function nw(){let i=$h.attributes.instanceStart.data.array;for(let t=0;t<Fh.length;t+=2){let e=Math.max(Fh[t].z,Fh[t+1].z)+.12,n=t/2*6;i[n+2]=e,i[n+5]=e}$h.attributes.instanceStart.data.needsUpdate=!0}var zh={};for(let i of Object.keys(Oh)){let t=bn.filter(f=>f.pr===i),e=0,n=0,s=0,r=1e9,o=-1e9,l=1e9,u=-1e9;for(let f of t)e+=f.area,n+=f.cx*f.area,s+=f.cy*f.area,r=Math.min(r,f.cx),o=Math.max(o,f.cx),l=Math.min(l,f.cy),u=Math.max(u,f.cy);let d=document.createElement("div");d.className="plab",d.textContent=Oh[i],d.title=__t(625)+u_[i],d.onclick=()=>fw("pr:"+i),document.body.appendChild(d),zh[i]={el:d,p:new j(n/e,s/e,0),cx:(r+o)/2,cy:(l+u)/2,ext:Math.max(o-r,u-l),ext2:[o-r,u-l],area:e,name:Oh[i]}}var dp=new j;function iw(){for(let i in zh){let t=zh[i];dp.copy(t.p).project(Ms),t.el.style.transform=`translate(-50%,-50%) translate(${(dp.x*.5+.5)*innerWidth}px,${(-dp.y*.5+.5)*innerHeight}px)`}}var Cn={tilt:0,yaw:0,dist:150,tx:0,ty:0},Pe={...Cn};function sw(){let i=innerWidth/innerHeight,t=Math.tan(Gh*Math.PI/360);return Math.max(eo.h*Ss*1.1,100*1.1/i)/(2*t)}var rw=document.getElementById("northr");document.getElementById("north").addEventListener("click",()=>{Pe.yaw=Math.round(Pe.yaw/(2*Math.PI))*2*Math.PI,Pe.tilt=0,$n()});function Ep(){Object.assign(Pe,{tilt:0,yaw:0,dist:sw(),tx:0,ty:0}),$n()}function aw(){let{tilt:i,yaw:t,dist:e,tx:n,ty:s}=Cn;Ms.position.set(n+e*Math.sin(i)*Math.sin(t),s-e*Math.sin(i)*Math.cos(t),e*Math.cos(i)),Ms.up.set(-Math.cos(i)*Math.sin(t),Math.cos(i)*Math.cos(t),Math.sin(i)),Ms.lookAt(n,s,0)}var Bl=!0,e_=performance.now(),Qa=new Map,fr=0,Uh=0;function Tp(){fr&&(clearTimeout(fr),fr=0,requestAnimationFrame(Ka))}function $n(){Bl=!0,Tp()}window.__wakeMap=Tp;["pointerdown","wheel","touchstart","keydown"].forEach(i=>addEventListener(i,Tp,{passive:!0,capture:!0}));function Ka(i){fr=0;let t=ni((i-e_)/1e3,0,.05);e_=i;let e=1-Math.exp(-t*10),n=!1;for(let s of Object.keys(Cn)){let r=Pe[s]-Cn[s];Math.abs(r)>1e-4*(s==="dist"?10:1)?(Cn[s]+=r*e,n=!0):Cn[s]=Pe[s]}for(let s of bn){let r=s.zt-s.z;Math.abs(r)>.002?(s.z+=r*Math.min(1,e*.8),s.group.scale.z=s.z,s.og.position.z=s.z+.04,n=!0):s.z!==s.zt&&(s.z=s.zt,s.group.scale.z=s.z,s.og.position.z=s.z+.04)}for(let[s,r]of Qa){let o=(i-r)/1800;o>=1?(Qa.delete(s),Jr(s)):Jr(s,.5*Math.sin(Math.PI*o)),n=!0}if(window.__rodTick&&window.__rodTick(i)&&(Bl=!0),window.__mapHidden){Bl=!0,fr=setTimeout(()=>{fr=0,requestAnimationFrame(Ka)},1e3);return}if(n||Bl){rw.style.transform=`rotate(${Cn.yaw}rad) scaleY(${(.55+.45*Math.cos(Cn.tilt)).toFixed(3)})`;{let s=Math.abs(Math.sin(Pe.yaw/2))<.02&&Pe.tilt<.03,r=document.getElementById("north");r.classList.contains("flat")!==s&&(r.classList.toggle("flat",s),r.title=s?__t(626):__t(627))}aw(),nw(),iw(),window.__rodFrame&&window.__rodFrame(),zl.render(Hs,Ms),Bl=n,Ge("#tilt").value=Math.round(Pe.tilt*180/Math.PI),Ge("#yaw").value=Math.round(((Pe.yaw*180/Math.PI+180)%360+360)%360-180)}if(n||Qa.size){Uh=0,requestAnimationFrame(Ka);return}Uh||(Uh=i),i-Uh<1500?requestAnimationFrame(Ka):fr=setTimeout(()=>{fr=0,requestAnimationFrame(Ka)},120)}function m_(){zl.setSize(innerWidth,innerHeight,!1),Ms.aspect=innerWidth/innerHeight,Ms.updateProjectionMatrix(),Mp.resolution.set(innerWidth,innerHeight),wp.resolution.set(innerWidth,innerHeight),window.__rodResize&&window.__rodResize(),$n()}addEventListener("resize",()=>{m_(),fn.length&&mr()});di.addEventListener("wheel",i=>{i.preventDefault();let t=i.deltaMode===1?16:1,e=i.deltaY*t;if(i.altKey){let n=(Math.abs(i.deltaX)>Math.abs(i.deltaY)?i.deltaX:i.deltaY)*t;Pe.yaw+=n*.0035}else i.ctrlKey?Pe.dist=ni(Pe.dist*Math.exp(e*.01),6,400):Pe.tilt=ni(Pe.tilt+e*.002,0,1.32);$n()},{passive:!1});di.addEventListener("contextmenu",i=>i.preventDefault());var bs=new Map,bi=null,Xr=0,_p=0,xp=0;var Vh=null;di.addEventListener("pointerdown",i=>{if(i.pointerType!=="mouse"&&!document.body.classList.contains("used")&&(document.body.classList.add("used"),fn.length&&setTimeout(mr,50)),di.setPointerCapture(i.pointerId),bs.set(i.pointerId,{x:i.clientX,y:i.clientY}),bs.size===1&&(bi={rot:i.button===2||i.altKey,moved:0,multi:!1,touch:i.pointerType!=="mouse"}),bs.size===2){let[t,e]=[...bs.values()];Xr=Math.hypot(t.x-e.x,t.y-e.y),_p=Math.atan2(e.y-t.y,e.x-t.x),xp=(t.y+e.y)/2,Vh={mode:null,rot:0,sc:0,tl:0},bi&&(bi.multi=!0)}Ap()});di.addEventListener("pointermove",i=>{let t=bs.get(i.pointerId);if(!t){zs={x:i.clientX,y:i.clientY},vp||(vp=requestAnimationFrame(lw));return}let e=i.clientX-t.x,n=i.clientY-t.y;if(t.x=i.clientX,t.y=i.clientY,bs.size===2){let[s,r]=[...bs.values()],o=Math.hypot(s.x-r.x,s.y-r.y),l=Math.atan2(r.y-s.y,r.x-s.x),u=(s.y+r.y)/2,d=l-_p;d>Math.PI&&(d-=2*Math.PI),d<-Math.PI&&(d+=2*Math.PI);let f=Xr?o-Xr:0,b=u-xp,g=Vh||(Vh={mode:null,rot:0,sc:0,tl:0});g.rot+=d,g.sc+=f,g.tl+=b,g.mode?g.mode==="zoom"&&Math.abs(g.rot)>.45&&(g.mode="rotate"):Math.abs(g.rot)>.3?g.mode="rotate":Math.abs(g.tl)>30&&Math.abs(g.sc)<18?g.mode="tilt":Math.abs(g.sc)>12&&(g.mode="zoom"),(g.mode==="zoom"||g.mode==="rotate")&&Xr&&(Pe.dist=ni(Pe.dist*Xr/o,6,400)),g.mode==="rotate"&&(Pe.yaw+=d,Cn.yaw=Pe.yaw),g.mode==="tilt"&&(Pe.tilt=ni(Pe.tilt-b*.006,0,1.32),Cn.tilt=Pe.tilt),Xr=o,_p=l,xp=u,$n();return}if(bi.moved+=Math.abs(e)+Math.abs(n),bi.rot||i.altKey)Pe.yaw+=e*.005,Pe.tilt=ni(Pe.tilt+n*.004,0,1.32),Cn.yaw=Pe.yaw,Cn.tilt=Pe.tilt;else{let s=2*Cn.dist*Math.tan(Gh*Math.PI/360)/innerHeight,r=Math.sin(Cn.yaw),o=Math.cos(Cn.yaw),l=1/Math.max(Math.cos(Cn.tilt),.3);Pe.tx=ni(Pe.tx-o*e*s+-r*n*s*l,-70,70),Pe.ty=ni(Pe.ty-r*e*s+o*n*s*l,-70,70),Cn.tx=Pe.tx,Cn.ty=Pe.ty}$n()});var g_=i=>{let t=bi&&!bi.rot&&!bi.multi&&bi.moved<(bi.touch?12:6)&&i.type==="pointerup"&&bs.size===1,e=bi&&bi.touch;bs.delete(i.pointerId),Xr=0,Vh=null,bs.size||(bi=null),t&&window.__rodTap&&window.__rodTap(i.clientX,i.clientY)};di.addEventListener("pointerup",g_);di.addEventListener("pointercancel",g_);di.addEventListener("dblclick",Ep);addEventListener("keydown",i=>{i.key==="Alt"&&(di.style.cursor="move")});addEventListener("keyup",i=>{i.key==="Alt"&&(di.style.cursor="")});addEventListener("blur",()=>{di.style.cursor=""});var ow=new bl,n_=new Wt,zs=null,vp=0,qr=null;function lw(){if(vp=0,!zs||bi)return;n_.set(zs.x/innerWidth*2-1,-(zs.y/innerHeight)*2+1),ow.setFromCamera(n_,Ms);let i=null;if(i!==qr){let e=qr;qr=i,e&&Jr(e),i&&Jr(i),$n()}let t=window.__rodHover&&window.__rodHover(zs.x,zs.y);if(t){Wr.innerHTML=t,Wr.style.display="block";let e=Wr.offsetWidth,n=Wr.offsetHeight;Wr.style.left=ni(zs.x+14,6,innerWidth-e-6)+"px",Wr.style.top=ni(zs.y+14,6,innerHeight-n-6)+"px",di.style.cursor="pointer"}else Ap(),di.style.cursor=""}di.addEventListener("pointerleave",()=>{if(zs=null,qr){let i=qr;qr=null,Jr(i),$n()}Ap()});var Wr=Ge("#tip");function Ap(){Wr.style.display="none"}document.querySelectorAll("[data-metric]").forEach(i=>i.onclick=()=>{bp=i.dataset.metric,document.querySelectorAll("[data-metric]").forEach(t=>t.classList.toggle("on",t===i)),f_()});document.querySelectorAll("[data-mode]").forEach(i=>i.onclick=()=>{Sp=i.dataset.mode,document.querySelectorAll("[data-mode]").forEach(t=>t.classList.toggle("on",t===i)),Xh()});Ge("#yaw").oninput=i=>{Pe.yaw=+i.target.value*Math.PI/180,$n()};Ge("#tilt").oninput=i=>{Pe.tilt=+i.target.value*Math.PI/180,$n()};Ge("#zin").onclick=()=>{Pe.dist=ni(Pe.dist*.75,6,400),$n()};Ge("#zout").onclick=()=>{Pe.dist=ni(Pe.dist/.75,6,400),$n()};Ge("#rst").onclick=Ep;var i_=["#2563eb","#059669","#7c3aed","#db2777","#0891b2","#ca8a04"],fn=[],s_={},cw=i=>s_[i]||(s_[i]=new Ur({color:i}));function __(i,t){i.og.children.forEach(e=>e.material=t?cw(t):kh)}function Jr(i,t=0){let e=i.mat.emissive;i===qr?e.setHex(5592405):i.sel?e.copy(i.sel.tint):e.setHex(0),t&&e.addScalar(t)}function Cp(i,t){let e=1e9,n=-1e9,s=1e9,r=-1e9;for(let d of i)e=Math.min(e,d.cx-d.size/2),n=Math.max(n,d.cx+d.size/2),s=Math.min(s,d.cy-d.size/2),r=Math.max(r,d.cy+d.size/2);let o=innerWidth/innerHeight,l=Math.tan(Gh*Math.PI/360),u=i.length===1?ni(i[0].size*3.2+14,14,120):ni(Math.max((r-s)*1.5,(n-e)*1.5/o)/(2*l)+6,14,300);Object.assign(Pe,{tx:(e+n)/2,ty:(s+r)/2,dist:u,tilt:t,yaw:0}),$n()}var pr=Ge("#q"),Ii=Ge("#list"),dn=Ge("#mcs");function qh(i,t=!0){if(Ii.style.display="none",pr.value="",!i.sel){fn.length>=6&&x_(fn[0].o,!0);let e=new Set(fn.map(s=>s.color)),n=i_.find(s=>!e.has(s))||i_[0];i.sel={o:i,color:n,tint:new ye(n).multiplyScalar(.12)},fn.push(i.sel),__(i,n)}dn.classList.contains("min")&&no(!1),Qa.set(i,performance.now()),Jr(i),t&&Cp([i],Math.max(Pe.tilt,.9)),mr()}function x_(i,t){let e=fn.indexOf(i.sel);e>=0&&fn.splice(e,1),i.sel=null,__(i,null),Jr(i),$n(),t||mr()}function v_(i){let t=Math.min(devicePixelRatio||1,2),e=i.clientWidth,n=i.clientHeight;i.width=e*t,i.height=n*t;let s=i.getContext("2d");s.scale(t,t),s.clearRect(0,0,e,n);let r=fn.map(f=>{let b=1e9,g=-1e9,M=1e9,w=-1e9;for(let N of f.o.rings)for(let S=0;S<N[0].length;S+=2)b=Math.min(b,N[0][S]),g=Math.max(g,N[0][S]),M=Math.min(M,N[0][S+1]),w=Math.max(w,N[0][S+1]);return{x0:b,x1:g,y0:M,y1:w}}),o=Math.max(...r.map(f=>Math.max(f.x1-f.x0,f.y1-f.y0))),l=(Math.min(e,n)-22)/o;fn.forEach((f,b)=>{let g=r[b],M=(g.x0+g.x1)/2,w=(g.y0+g.y1)/2;s.beginPath();for(let N of f.o.rings)for(let S of N)for(let m=0;m<S.length;m+=2){let z=e/2+(S[m]-M)*l,H=n/2-(S[m+1]-w)*l;m?s.lineTo(z,H):s.moveTo(z,H),m===S.length-2&&s.closePath()}s.fillStyle=f.color+"40",s.fill("evenodd"),s.lineWidth=1.6,s.strokeStyle=f.color,s.stroke()});let u=l/K1,d=[.5,1,2,5,10,20,50,100].find(f=>f*u>=28)||100;s.fillStyle="#6b7385",s.fillRect(10,n-12,d*u,2),s.font="10px system-ui",s.fillText(d+" km",12+d*u,n-8)}function mr(){if(!fn.length){dn.innerHTML="",dn.style.display="none",no(!1);return}if(dn.style.display="flex",innerWidth<=640){let e=Ge("#inf").getBoundingClientRect().bottom;dn.style.top=Math.round(e+8)+"px",dn.style.maxHeight=Math.max(110,Math.min(innerHeight*(Ge("#rc").classList.contains("min")?.7:.4),Ge("#rc").getBoundingClientRect().top-e-16))+"px",dn.style.width=""}else if(innerHeight<=500){let e=Ge("#inf").getBoundingClientRect().bottom;dn.style.top=Math.round(e+8)+"px",dn.style.maxHeight=Math.max(120,innerHeight-e-20)+"px",dn.style.width="min(290px, 40vw)"}else dn.style.top="",dn.style.maxHeight="",dn.style.width="";window.__fitMcs&&window.__fitMcs();let i=fn.map((e,n)=>{let s=e.o;return`<div class="mc" draggable="true" data-i="${n}" style="--c:${e.color}"><button class="x" data-x="${n}" title="Cerrar">\xD7</button><div class="mh"><i class="dot"></i><b>${s.name}</b><em>${Oh[s.pr]}</em></div><div class="mb">${Vs(s.pop)}${__t(633)}${ja(s.area)} km\xB2 \xB7 ${ja(s.pop/s.area)}${__t(634)}${s.rankP}${__t(635)}`}).join("");if(fn.length>1){let e=s=>Math.max(...fn.map(s)),n=[[__t(636),s=>s.o.pop,Vs],[__t(637),s=>s.o.area,ja],[__t(638),s=>s.o.pop/s.o.area,ja]];if(i+=`${__t(639)}`+n.map(([s,r,o])=>`<div class="cr"><span>${s}</span>${fn.map(l=>`<div class="bw"><i style="width:${Math.max(2,r(l)/e(r)*100)}%;background:${l.color}"></i><b>${o(r(l))}</b></div>`).join("")}</div>`).join(""),fn.length===2){let[s,r]=fn.map(d=>d.o),[o,l]=s.pop>=r.pop?[s,r]:[r,s],u=(d,f)=>(d>=f?d/f:f/d).toLocaleString("es-ES",{maximumFractionDigits:1});i+=`<small class="ratio"><b>${o.name}${__t(640)}${u(o.pop,l.pop)}${__t(641)}${l.name}${__t(642)}${u(o.area,l.area)}\xD7 ${o.area>=l.area?__t(643):__t(644)}.</small>`}i+="</div>"}dn.innerHTML=i,dn.querySelectorAll("[data-x]").forEach(e=>e.onclick=n=>{n.stopPropagation(),x_(fn[+e.dataset.x].o)}),dn.querySelectorAll(".mc").forEach(e=>{e.onclick=()=>Cp([fn[+e.dataset.i].o],Math.max(Pe.tilt,.9)),e.onmouseenter=()=>{let n=fn[+e.dataset.i].o;Qa.set(n,performance.now())},e.ondragstart=n=>{n.dataTransfer.setData("text/plain",e.dataset.i),e.classList.add("drag")},e.ondragend=()=>e.classList.remove("drag"),e.ondragover=n=>{n.preventDefault(),e.classList.add("over")},e.ondragleave=()=>e.classList.remove("over"),e.ondrop=n=>{n.preventDefault();let s=+n.dataTransfer.getData("text/plain"),r=+e.dataset.i;if(s!==r){let[o]=fn.splice(s,1);fn.splice(r,0,o),mr();let l=Ge("#sil");l&&l.classList.add("flash")}}});let t=Ge("#sil");t&&v_(t)}pr.addEventListener("input",()=>{if(window.__rodSearch){window.__rodSearch(pr.value);return}let i=fp(pr.value.trim());if(!i){Ii.style.display="none";return}let t=[],e=[];for(let s of bn){let r=fp(s.name);r.startsWith(i)?t.push(s):r.includes(i)&&e.push(s)}let n=t.sort((s,r)=>r.pop-s.pop).concat(e.sort((s,r)=>r.pop-s.pop)).slice(0,8);Ii.innerHTML=n.map((s,r)=>`<li data-i="${r}">${s.name}<em>${Vs(s.pop)}</em></li>`).join("")||__t(600),Ii.style.display="block",Ii.querySelectorAll("li[data-i]").forEach(s=>s.onclick=()=>qh(n[+s.dataset.i])),Ii._r=n});pr.addEventListener("keydown",i=>{i.key==="Enter"&&Ii._pick?Ii._pick(0):i.key==="Enter"&&Ii._r&&Ii._r[0]&&qh(Ii._r[0]),i.key==="Escape"&&(pr.value="",Ii.style.display="none")});addEventListener("keydown",i=>{i.key==="Escape"&&i.target!==pr&&y_()});var r_=0;addEventListener("resize",()=>{clearTimeout(r_),r_=setTimeout(()=>{let i=Ge("#sil");i&&v_(i)},120)});var Hh=null,yp=Ge("#chip");function uw(i,t,e=.8){Hh={codes:new Set(i.map(n=>n.code)),label:t},bn.forEach(n=>{n.inF=Hh.codes.has(n.code),Wh(n)}),yp.innerHTML=`${__t(645)}${t}</b> \xB7 ${i.length}${i.length===1?__t(646):__t(647)}</span><button id="chx" title="Quitar filtro">\xD7</button>`,yp.style.display="flex",Ge("#chx").onclick=y_,Xh(),Cp(i,e),i.slice(0,40).forEach(n=>Qa.set(n,performance.now()))}function y_(){Hh&&(Hh=null,bn.forEach(i=>{i.inF=!0,Wh(i)}),yp.style.display="none",Xh())}var hw="prov";function dw(i){let t=[...bn].sort((o,l)=>l.pop-o.pop),e=[...bn].sort((o,l)=>l.pop/l.area-o.pop/o.area),[n,s,r]=i.split(":");if(n==="pr")return[bn.filter(o=>o.pr===s),u_[s]];if(n==="top")return s==="pop"?[t.slice(0,10),__t(648)]:[e.slice(0,10),__t(649)];if(n==="low")return s==="pop"?[t.slice(-10),__t(650)]:[e.slice(-10),__t(651)];if(n==="size")return[bn.filter(o=>o.pop>=+s&&o.pop<+r),+r>1e9?`${Vs(+s)}${__t(652)}`:+s==0?`${__t(653)}${Vs(+r)}${__t(654)}`:`${Vs(+s)} \u2013 ${Vs(+r-1)}${__t(654)}`];if(n==="n50"){let o=0,l=0;for(let u of t)if(o+=u.pop,l++,o>=mp/2)break;return[t.slice(0,l),`${__t(655)}`]}return[[],""]}function fw(i){let[t,e]=dw(i);t.length&&uw(t,e,i.startsWith("pr:")?.75:.8)}document.querySelectorAll("[data-tab]").forEach(i=>i.onclick=()=>{hw=i.dataset.tab,Ge("#dbody").scrollTop=0});var Yr=Ge("#rc"),Bh=Ge("#mcstab");function to(i){Yr.classList.toggle("min",i),Ge("#rcgrab span").textContent=i?__t(697):__t(698),fn.length&&mr()}function no(i){dn.classList.toggle("min",i),dn.style.transform="",dn.style.opacity="",Bh.classList.toggle("on",i&&fn.length>0),i&&(Bh.textContent=`\u25B8 ${fn.length} ${fn.length===1?"ficha":"fichas"}`,Bh.style.top=dn.style.top||"124px")}function Rp(i,{onMove:t,onEnd:e,axis:n}){let s=null;i.addEventListener("pointerdown",o=>{o.pointerType==="mouse"||!Yh.matches||o.target.closest("input,button:not(#rcgrab),.seg")||(s={x:o.clientX,y:o.clientY,id:o.pointerId,lock:null})}),addEventListener("pointermove",o=>{if(!s||o.pointerId!==s.id)return;let l=o.clientX-s.x,u=o.clientY-s.y;!s.lock&&Math.hypot(l,u)>10&&(s.lock=Math.abs(l)>Math.abs(u)?"x":"y"),s.lock===n&&t&&t(l,u)});let r=o=>{if(!s||o.pointerId!==s.id)return;let l=o.clientX-s.x,u=o.clientY-s.y,d=s.lock;s=null,e(d===n?l:0,d===n?u:0,d)};addEventListener("pointerup",r,!0),addEventListener("pointercancel",r,!0)}Ge("#rcgrab").onclick=()=>to(!Yr.classList.contains("min"));(innerWidth<=640||matchMedia("(max-height:500px) and (pointer:coarse)").matches||document.documentElement.classList.contains("cap"))&&to(!0);requestAnimationFrame(()=>document.documentElement.classList.remove("boot"));var S_=()=>innerWidth>640;Rp(Yr,{axis:"y",onEnd:(i,t)=>{if(!S_())if(t>40&&!Yr.classList.contains("min")){let e=Ge("#dp.open #dbody");(!e||e.scrollTop<=0||t>120)&&to(!0)}else t<-30&&Yr.classList.contains("min")&&to(!1)}});Rp(Yr,{axis:"x",onEnd:i=>{S_()&&(i>50?to(!0):i<-30&&Yr.classList.contains("min")&&to(!1))}});var a_=()=>{let i=document.documentElement.dataset.tab;return!i||i==="map"};Rp(dn,{axis:"x",onMove:i=>{i<0&&a_()&&(dn.classList.add("sw"),dn.style.transform=`translateX(${i}px)`,dn.style.opacity=Math.max(.2,1+i/300))},onEnd:i=>{dn.classList.remove("sw"),i<-60&&a_()?(no(!0),window.__rodHide&&!fn.length&&window.__rodHide()):(dn.style.transform="",dn.style.opacity="")}});Bh.onclick=()=>{no(!1),mr()};window.__mcsMin=i=>no(i);Ge("#dtoggle").onclick=()=>{let i=Ge("#dp").classList.toggle("open");Ge("#rc").classList.toggle("dopen",i),Ge("#dtoggle").textContent=i?Yh.matches&&innerWidth<=640?__t(699):__t(700):__t(701),window.__rodCard&&window.__rodCard()};var Yh=matchMedia("(max-width:640px), (max-height:500px)");function b_(){let i=Ge("#leg");Yh.matches?Ge("#rc").insertBefore(i,Ge("#dtoggle")):document.body.appendChild(i),fn.length&&mr()}Yh.addEventListener("change",b_);b_();m_();ew();Ep();Object.assign(Cn,Pe);for(let i of bn)i.z=.01;requestAnimationFrame(Ka);Kg({scene:Hs,camera:Ms,renderer:zl,goal:Pe,cur:Cn,invalidate:$n,flyTo:(i,t,e,n)=>{Object.assign(Pe,{tx:(i-kl)*Ss,ty:(t-$l)*Ss,dist:e,tilt:n}),$n()},K:Ss,CX:kl,CY:$l,mcs:dn,q:pr,list:Ii,munis:bn,select:qh,norm:fp,fmt:Vs,clamp:ni,mcsMin:no});window.__app={scene:Hs,renderer:zl,camera:Ms,munis:bn,labs:zh,goal:Pe,cur:Cn,select:qh,get mode(){return Sp}};window.__ready=!0;{let i=document.getElementById("ttb"),t=document.getElementById("p");i&&t&&i.addEventListener("click",()=>{let e=t.classList.toggle("tt");i.textContent=e?__t(707):__t(708)})}})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
