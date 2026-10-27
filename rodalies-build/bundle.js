(()=>{var Tp=0,ju=1,Ap=2;var Co=1,Cp=2,ta=3,Is=0,Yn=1,$i=2,Gi=0,ea=1,Qu=2,td=3,ed=4,Rp=5;var rr=100,Ip=101,Pp=102,Lp=103,Dp=104,Np=200,Up=201,Fp=202,Op=203,nd=204,id=205,Bp=206,kp=207,zp=208,Vp=209,Hp=210,$p=211,Gp=212,Wp=213,Xp=214,Vl=0,Hl=1,$l=2,Vr=3,Gl=4,Wl=5,Xl=6,ql=7,Cc=0,qp=1,Yp=2,Ii=0,sd=1,rd=2,ad=3,od=4,ld=5,cd=6,hd=7;var ud=300,Ps=301,ar=302,Rc=303,Ic=304,Ro=306,Yl=1e3,Oi=1001,Zl=1002,wn=1003,Zp=1004;var Io=1005;var In=1006,Pc=1007;var Ls=1008;var ii=1009,dd=1010,fd=1011,na=1012,Lc=1013,Pi=1014,_i=1015,Li=1016,Dc=1017,Nc=1018,ia=1020,pd=35902,md=35899,gd=1021,_d=1022,xi=1023,ki=1026,Ds=1027,Uc=1028,Fc=1029,Ns=1030,Oc=1031;var Bc=1033,Po=33776,Lo=33777,Do=33778,No=33779,kc=35840,zc=35841,Vc=35842,Hc=35843,$c=36196,Gc=37492,Wc=37496,Xc=37488,qc=37489,Uo=37490,Yc=37491,Zc=37808,Jc=37809,Kc=37810,jc=37811,Qc=37812,th=37813,eh=37814,nh=37815,ih=37816,sh=37817,rh=37818,ah=37819,oh=37820,lh=37821,ch=36492,hh=36494,uh=36495,dh=36283,fh=36284,Fo=36285,ph=36286;var Xa=2300,Jl=2301,kl=2302,ku=2303,zu=2400,Vu=2401,Hu=2402;var Jp=3200;var mh=0,Kp=1,ds="",li="srgb",qa="srgb-linear",Ya="linear",Ge="srgb";var zl=7680;var jp=519,Qp=512,tm=513,em=514,gh=515,nm=516,im=517,_h=518,sm=519,xd=35044;var vd="300 es",Ai=2e3,Hr=2001;function n0(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function i0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Za(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function rm(){let i=Za("canvas");return i.style.display="block",i}var Hf={},$r=null;function Ja(...i){let t="THREE."+i.shift();$r?$r("log",t,...i):console.log(t,...i)}function am(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function fe(...i){i=am(i);let t="THREE."+i.shift();if($r)$r("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function ge(...i){i=am(i);let t="THREE."+i.shift();if($r)$r("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function js(...i){let t=i.join(" ");t in Hf||(Hf[t]=!0,fe(...i))}function om(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var lm={[Vl]:Hl,[$l]:Xl,[Gl]:ql,[Vr]:Wl,[Hl]:Vl,[Xl]:$l,[ql]:Gl,[Wl]:Vr},zi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},On=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$f=1234567,Ha=Math.PI/180,Gr=180/Math.PI;function Bi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(On[i&255]+On[i>>8&255]+On[i>>16&255]+On[i>>24&255]+"-"+On[t&255]+On[t>>8&255]+"-"+On[t>>16&15|64]+On[t>>24&255]+"-"+On[e&63|128]+On[e>>8&255]+"-"+On[e>>16&255]+On[e>>24&255]+On[n&255]+On[n>>8&255]+On[n>>16&255]+On[n>>24&255]).toLowerCase()}function be(i,t,e){return Math.max(t,Math.min(e,i))}function yd(i,t){return(i%t+t)%t}function s0(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function r0(i,t,e){return i!==t?(e-i)/(t-i):0}function $a(i,t,e){return(1-e)*i+e*t}function a0(i,t,e,n){return $a(i,t,1-Math.exp(-e*n))}function o0(i,t=1){return t-Math.abs(yd(i,t*2)-t)}function l0(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function c0(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function h0(i,t){return i+Math.floor(Math.random()*(t-i+1))}function u0(i,t){return i+Math.random()*(t-i)}function d0(i){return i*(.5-Math.random())}function f0(i){i!==void 0&&($f=i);let t=$f+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function p0(i){return i*Ha}function m0(i){return i*Gr}function g0(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function _0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function x0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function v0(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),h=r((t+n)/2),u=a((t+n)/2),g=r((t-n)/2),d=a((t-n)/2),_=r((n-t)/2),y=a((n-t)/2);switch(s){case"XYX":i.set(o*u,c*g,c*d,o*h);break;case"YZY":i.set(c*d,o*u,c*g,o*h);break;case"ZXZ":i.set(c*g,c*d,o*u,o*h);break;case"XZX":i.set(o*u,c*y,c*_,o*h);break;case"YXY":i.set(c*_,o*u,c*y,o*h);break;case"ZYZ":i.set(c*y,c*_,o*u,o*h);break;default:fe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ti(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function qe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Sd={DEG2RAD:Ha,RAD2DEG:Gr,generateUUID:Bi,clamp:be,euclideanModulo:yd,mapLinear:s0,inverseLerp:r0,lerp:$a,damp:a0,pingpong:o0,smoothstep:l0,smootherstep:c0,randInt:h0,randFloat:u0,randFloatSpread:d0,seededRandom:f0,degToRad:p0,radToDeg:m0,isPowerOfTwo:g0,ceilPowerOfTwo:_0,floorPowerOfTwo:x0,setQuaternionFromProperEuler:v0,normalize:qe,denormalize:Ti},Ot=class i{static{i.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=be(this.x,t.x,e.x),this.y=be(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=be(this.x,t,e),this.y=be(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(be(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Vi=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],h=n[s+1],u=n[s+2],g=n[s+3],d=r[a+0],_=r[a+1],y=r[a+2],C=r[a+3];if(g!==C||c!==d||h!==_||u!==y){let p=c*d+h*_+u*y+g*C;p<0&&(d=-d,_=-_,y=-y,C=-C,p=-p);let f=1-o;if(p<.9995){let N=Math.acos(p),O=Math.sin(N);f=Math.sin(f*N)/O,o=Math.sin(o*N)/O,c=c*f+d*o,h=h*f+_*o,u=u*f+y*o,g=g*f+C*o}else{c=c*f+d*o,h=h*f+_*o,u=u*f+y*o,g=g*f+C*o;let N=1/Math.sqrt(c*c+h*h+u*u+g*g);c*=N,h*=N,u*=N,g*=N}}t[e]=c,t[e+1]=h,t[e+2]=u,t[e+3]=g}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],c=n[s+1],h=n[s+2],u=n[s+3],g=r[a],d=r[a+1],_=r[a+2],y=r[a+3];return t[e]=o*y+u*g+c*_-h*d,t[e+1]=c*y+u*d+h*g-o*_,t[e+2]=h*y+u*_+o*d-c*g,t[e+3]=u*y-o*g-c*d-h*_,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,h=o(n/2),u=o(s/2),g=o(r/2),d=c(n/2),_=c(s/2),y=c(r/2);switch(a){case"XYZ":this._x=d*u*g+h*_*y,this._y=h*_*g-d*u*y,this._z=h*u*y+d*_*g,this._w=h*u*g-d*_*y;break;case"YXZ":this._x=d*u*g+h*_*y,this._y=h*_*g-d*u*y,this._z=h*u*y-d*_*g,this._w=h*u*g+d*_*y;break;case"ZXY":this._x=d*u*g-h*_*y,this._y=h*_*g+d*u*y,this._z=h*u*y+d*_*g,this._w=h*u*g-d*_*y;break;case"ZYX":this._x=d*u*g-h*_*y,this._y=h*_*g+d*u*y,this._z=h*u*y-d*_*g,this._w=h*u*g+d*_*y;break;case"YZX":this._x=d*u*g+h*_*y,this._y=h*_*g+d*u*y,this._z=h*u*y-d*_*g,this._w=h*u*g-d*_*y;break;case"XZY":this._x=d*u*g-h*_*y,this._y=h*_*g-d*u*y,this._z=h*u*y+d*_*g,this._w=h*u*g+d*_*y;break;default:fe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],h=e[2],u=e[6],g=e[10],d=n+o+g;if(d>0){let _=.5/Math.sqrt(d+1);this._w=.25/_,this._x=(u-c)*_,this._y=(r-h)*_,this._z=(a-s)*_}else if(n>o&&n>g){let _=2*Math.sqrt(1+n-o-g);this._w=(u-c)/_,this._x=.25*_,this._y=(s+a)/_,this._z=(r+h)/_}else if(o>g){let _=2*Math.sqrt(1+o-n-g);this._w=(r-h)/_,this._x=(s+a)/_,this._y=.25*_,this._z=(c+u)/_}else{let _=2*Math.sqrt(1+g-n-o);this._w=(a-s)/_,this._x=(r+h)/_,this._y=(c+u)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(be(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,h=e._z,u=e._w;return this._x=n*u+a*o+s*h-r*c,this._y=s*u+a*c+r*o-n*h,this._z=r*u+a*h+n*c-s*o,this._w=a*u-n*o-s*c-r*h,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-e;if(o<.9995){let h=Math.acos(o),u=Math.sin(h);c=Math.sin(c*h)/u,e=Math.sin(e*h)/u,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},G=class i{static{i.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Gf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Gf.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,h=2*(a*s-o*n),u=2*(o*e-r*s),g=2*(r*n-a*e);return this.x=e+c*h+a*g-o*u,this.y=n+c*u+o*h-r*g,this.z=s+c*g+r*u-a*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=be(this.x,t.x,e.x),this.y=be(this.y,t.y,e.y),this.z=be(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=be(this.x,t,e),this.y=be(this.y,t,e),this.z=be(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(be(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return fu.copy(this).projectOnVector(t),this.sub(fu)}reflect(t){return this.sub(fu.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},fu=new G,Gf=new Vi,Me=class i{static{i.prototype.isMatrix3=!0}constructor(t,e,n,s,r,a,o,c,h){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,h)}set(t,e,n,s,r,a,o,c,h){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],h=n[1],u=n[4],g=n[7],d=n[2],_=n[5],y=n[8],C=s[0],p=s[3],f=s[6],N=s[1],O=s[4],A=s[7],b=s[2],D=s[5],$=s[8];return r[0]=a*C+o*N+c*b,r[3]=a*p+o*O+c*D,r[6]=a*f+o*A+c*$,r[1]=h*C+u*N+g*b,r[4]=h*p+u*O+g*D,r[7]=h*f+u*A+g*$,r[2]=d*C+_*N+y*b,r[5]=d*p+_*O+y*D,r[8]=d*f+_*A+y*$,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],h=t[7],u=t[8];return e*a*u-e*o*h-n*r*u+n*o*c+s*r*h-s*a*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],h=t[7],u=t[8],g=u*a-o*h,d=o*c-u*r,_=h*r-a*c,y=e*g+n*d+s*_;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);let C=1/y;return t[0]=g*C,t[1]=(s*h-u*n)*C,t[2]=(o*n-s*a)*C,t[3]=d*C,t[4]=(u*e-s*c)*C,t[5]=(s*r-o*e)*C,t[6]=_*C,t[7]=(n*c-h*e)*C,t[8]=(a*e-n*r)*C,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let c=Math.cos(r),h=Math.sin(r);return this.set(n*c,n*h,-n*(c*a+h*o)+a+t,-s*h,s*c,-s*(-h*a+c*o)+o+e,0,0,1),this}scale(t,e){return js("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(pu.makeScale(t,e)),this}rotate(t){return js("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(pu.makeRotation(-t)),this}translate(t,e){return js("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(pu.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},pu=new Me,Wf=new Me().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xf=new Me().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function y0(){let i={enabled:!0,workingColorSpace:qa,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Ge&&(s.r=hs(s.r),s.g=hs(s.g),s.b=hs(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ge&&(s.r=zr(s.r),s.g=zr(s.g),s.b=zr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ds?Ya:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return js("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return js("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[qa]:{primaries:t,whitePoint:n,transfer:Ya,toXYZ:Wf,fromXYZ:Xf,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:li},outputColorSpaceConfig:{drawingBufferColorSpace:li}},[li]:{primaries:t,whitePoint:n,transfer:Ge,toXYZ:Wf,fromXYZ:Xf,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:li}}}),i}var Ue=y0();function hs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function zr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var wr,Kl=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{wr===void 0&&(wr=Za("canvas")),wr.width=t.width,wr.height=t.height;let s=wr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=wr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Za("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=hs(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(hs(e[n]/255)*255):e[n]=hs(e[n]);return{data:e,width:t.width,height:t.height}}else return fe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},S0=0,Wr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:S0++}),this.uuid=Bi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(mu(s[a].image)):r.push(mu(s[a]))}else r=mu(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function mu(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Kl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(fe("Texture: Unable to serialize Texture."),{})}var M0=0,gu=new G,ti=class i extends zi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Oi,s=Oi,r=In,a=Ls,o=xi,c=ii,h=i.DEFAULT_ANISOTROPY,u=ds){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:M0++}),this.uuid=Bi(),this.name="",this.source=new Wr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ot(0,0),this.repeat=new Ot(1,1),this.center=new Ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Me,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(gu).x}get height(){return this.source.getSize(gu).y}get depth(){return this.source.getSize(gu).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){fe(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){fe(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ud)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Yl:t.x=t.x-Math.floor(t.x);break;case Oi:t.x=t.x<0?0:1;break;case Zl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Yl:t.y=t.y-Math.floor(t.y);break;case Oi:t.y=t.y<0?0:1;break;case Zl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ti.DEFAULT_IMAGE=null;ti.DEFAULT_MAPPING=ud;ti.DEFAULT_ANISOTROPY=1;var We=class i{static{i.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,h=c[0],u=c[4],g=c[8],d=c[1],_=c[5],y=c[9],C=c[2],p=c[6],f=c[10];if(Math.abs(u-d)<.01&&Math.abs(g-C)<.01&&Math.abs(y-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(g+C)<.1&&Math.abs(y+p)<.1&&Math.abs(h+_+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let O=(h+1)/2,A=(_+1)/2,b=(f+1)/2,D=(u+d)/4,$=(g+C)/4,E=(y+p)/4;return O>A&&O>b?O<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(O),s=D/n,r=$/n):A>b?A<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(A),n=D/s,r=E/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=$/r,s=E/r),this.set(n,s,r,e),this}let N=Math.sqrt((p-y)*(p-y)+(g-C)*(g-C)+(d-u)*(d-u));return Math.abs(N)<.001&&(N=1),this.x=(p-y)/N,this.y=(g-C)/N,this.z=(d-u)/N,this.w=Math.acos((h+_+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=be(this.x,t.x,e.x),this.y=be(this.y,t.y,e.y),this.z=be(this.z,t.z,e.z),this.w=be(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=be(this.x,t,e),this.y=be(this.y,t,e),this.z=be(this.z,t,e),this.w=be(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(be(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},jl=class extends zi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new We(0,0,t,e),this.scissorTest=!1,this.viewport=new We(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new ti(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:In,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Wr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ei=class extends jl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ka=class extends ti{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=wn,this.minFilter=wn,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ql=class extends ti{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=wn,this.minFilter=wn,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Ve=class i{static{i.prototype.isMatrix4=!0}constructor(t,e,n,s,r,a,o,c,h,u,g,d,_,y,C,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,h,u,g,d,_,y,C,p)}set(t,e,n,s,r,a,o,c,h,u,g,d,_,y,C,p){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=c,f[2]=h,f[6]=u,f[10]=g,f[14]=d,f[3]=_,f[7]=y,f[11]=C,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Er.setFromMatrixColumn(t,0).length(),r=1/Er.setFromMatrixColumn(t,1).length(),a=1/Er.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),h=Math.sin(s),u=Math.cos(r),g=Math.sin(r);if(t.order==="XYZ"){let d=a*u,_=a*g,y=o*u,C=o*g;e[0]=c*u,e[4]=-c*g,e[8]=h,e[1]=_+y*h,e[5]=d-C*h,e[9]=-o*c,e[2]=C-d*h,e[6]=y+_*h,e[10]=a*c}else if(t.order==="YXZ"){let d=c*u,_=c*g,y=h*u,C=h*g;e[0]=d+C*o,e[4]=y*o-_,e[8]=a*h,e[1]=a*g,e[5]=a*u,e[9]=-o,e[2]=_*o-y,e[6]=C+d*o,e[10]=a*c}else if(t.order==="ZXY"){let d=c*u,_=c*g,y=h*u,C=h*g;e[0]=d-C*o,e[4]=-a*g,e[8]=y+_*o,e[1]=_+y*o,e[5]=a*u,e[9]=C-d*o,e[2]=-a*h,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let d=a*u,_=a*g,y=o*u,C=o*g;e[0]=c*u,e[4]=y*h-_,e[8]=d*h+C,e[1]=c*g,e[5]=C*h+d,e[9]=_*h-y,e[2]=-h,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let d=a*c,_=a*h,y=o*c,C=o*h;e[0]=c*u,e[4]=C-d*g,e[8]=y*g+_,e[1]=g,e[5]=a*u,e[9]=-o*u,e[2]=-h*u,e[6]=_*g+y,e[10]=d-C*g}else if(t.order==="XZY"){let d=a*c,_=a*h,y=o*c,C=o*h;e[0]=c*u,e[4]=-g,e[8]=h*u,e[1]=d*g+C,e[5]=a*u,e[9]=_*g-y,e[2]=y*g-_,e[6]=o*u,e[10]=C*g+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(b0,t,w0)}lookAt(t,e,n){let s=this.elements;return ai.subVectors(t,e),ai.lengthSq()===0&&(ai.z=1),ai.normalize(),vs.crossVectors(n,ai),vs.lengthSq()===0&&(Math.abs(n.z)===1?ai.x+=1e-4:ai.z+=1e-4,ai.normalize(),vs.crossVectors(n,ai)),vs.normalize(),dl.crossVectors(ai,vs),s[0]=vs.x,s[4]=dl.x,s[8]=ai.x,s[1]=vs.y,s[5]=dl.y,s[9]=ai.y,s[2]=vs.z,s[6]=dl.z,s[10]=ai.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],h=n[12],u=n[1],g=n[5],d=n[9],_=n[13],y=n[2],C=n[6],p=n[10],f=n[14],N=n[3],O=n[7],A=n[11],b=n[15],D=s[0],$=s[4],E=s[8],L=s[12],V=s[1],W=s[5],et=s[9],st=s[13],Z=s[2],K=s[6],lt=s[10],ht=s[14],bt=s[3],ut=s[7],St=s[11],yt=s[15];return r[0]=a*D+o*V+c*Z+h*bt,r[4]=a*$+o*W+c*K+h*ut,r[8]=a*E+o*et+c*lt+h*St,r[12]=a*L+o*st+c*ht+h*yt,r[1]=u*D+g*V+d*Z+_*bt,r[5]=u*$+g*W+d*K+_*ut,r[9]=u*E+g*et+d*lt+_*St,r[13]=u*L+g*st+d*ht+_*yt,r[2]=y*D+C*V+p*Z+f*bt,r[6]=y*$+C*W+p*K+f*ut,r[10]=y*E+C*et+p*lt+f*St,r[14]=y*L+C*st+p*ht+f*yt,r[3]=N*D+O*V+A*Z+b*bt,r[7]=N*$+O*W+A*K+b*ut,r[11]=N*E+O*et+A*lt+b*St,r[15]=N*L+O*st+A*ht+b*yt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],h=t[13],u=t[2],g=t[6],d=t[10],_=t[14],y=t[3],C=t[7],p=t[11],f=t[15],N=c*_-h*d,O=o*_-h*g,A=o*d-c*g,b=a*_-h*u,D=a*d-c*u,$=a*g-o*u;return e*(C*N-p*O+f*A)-n*(y*N-p*b+f*D)+s*(y*O-C*b+f*$)-r*(y*A-C*D+p*$)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],c=t[2],h=t[6],u=t[10];return e*(a*u-o*h)-n*(r*u-o*c)+s*(r*h-a*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],h=t[7],u=t[8],g=t[9],d=t[10],_=t[11],y=t[12],C=t[13],p=t[14],f=t[15],N=e*o-n*a,O=e*c-s*a,A=e*h-r*a,b=n*c-s*o,D=n*h-r*o,$=s*h-r*c,E=u*C-g*y,L=u*p-d*y,V=u*f-_*y,W=g*p-d*C,et=g*f-_*C,st=d*f-_*p,Z=N*st-O*et+A*W+b*V-D*L+$*E;if(Z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let K=1/Z;return t[0]=(o*st-c*et+h*W)*K,t[1]=(s*et-n*st-r*W)*K,t[2]=(C*$-p*D+f*b)*K,t[3]=(d*D-g*$-_*b)*K,t[4]=(c*V-a*st-h*L)*K,t[5]=(e*st-s*V+r*L)*K,t[6]=(p*A-y*$-f*O)*K,t[7]=(u*$-d*A+_*O)*K,t[8]=(a*et-o*V+h*E)*K,t[9]=(n*V-e*et-r*E)*K,t[10]=(y*D-C*A+f*N)*K,t[11]=(g*A-u*D-_*N)*K,t[12]=(o*L-a*W-c*E)*K,t[13]=(e*W-n*L+s*E)*K,t[14]=(C*O-y*b-p*N)*K,t[15]=(u*b-g*O+d*N)*K,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,h=r*a,u=r*o;return this.set(h*a+n,h*o-s*c,h*c+s*o,0,h*o+s*c,u*o+n,u*c-s*a,0,h*c-s*o,u*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,h=r+r,u=a+a,g=o+o,d=r*h,_=r*u,y=r*g,C=a*u,p=a*g,f=o*g,N=c*h,O=c*u,A=c*g,b=n.x,D=n.y,$=n.z;return s[0]=(1-(C+f))*b,s[1]=(_+A)*b,s[2]=(y-O)*b,s[3]=0,s[4]=(_-A)*D,s[5]=(1-(d+f))*D,s[6]=(p+N)*D,s[7]=0,s[8]=(y+O)*$,s[9]=(p-N)*$,s[10]=(1-(d+C))*$,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Er.set(s[0],s[1],s[2]).length(),o=Er.set(s[4],s[5],s[6]).length(),c=Er.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Mi.copy(this);let h=1/a,u=1/o,g=1/c;return Mi.elements[0]*=h,Mi.elements[1]*=h,Mi.elements[2]*=h,Mi.elements[4]*=u,Mi.elements[5]*=u,Mi.elements[6]*=u,Mi.elements[8]*=g,Mi.elements[9]*=g,Mi.elements[10]*=g,e.setFromRotationMatrix(Mi),n.x=a,n.y=o,n.z=c,this}makePerspective(t,e,n,s,r,a,o=Ai,c=!1){let h=this.elements,u=2*r/(e-t),g=2*r/(n-s),d=(e+t)/(e-t),_=(n+s)/(n-s),y,C;if(c)y=r/(a-r),C=a*r/(a-r);else if(o===Ai)y=-(a+r)/(a-r),C=-2*a*r/(a-r);else if(o===Hr)y=-a/(a-r),C=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return h[0]=u,h[4]=0,h[8]=d,h[12]=0,h[1]=0,h[5]=g,h[9]=_,h[13]=0,h[2]=0,h[6]=0,h[10]=y,h[14]=C,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Ai,c=!1){let h=this.elements,u=2/(e-t),g=2/(n-s),d=-(e+t)/(e-t),_=-(n+s)/(n-s),y,C;if(c)y=1/(a-r),C=a/(a-r);else if(o===Ai)y=-2/(a-r),C=-(a+r)/(a-r);else if(o===Hr)y=-1/(a-r),C=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return h[0]=u,h[4]=0,h[8]=0,h[12]=d,h[1]=0,h[5]=g,h[9]=0,h[13]=_,h[2]=0,h[6]=0,h[10]=y,h[14]=C,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Er=new G,Mi=new Ve,b0=new G(0,0,0),w0=new G(1,1,1),vs=new G,dl=new G,ai=new G,qf=new Ve,Yf=new Vi,us=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],h=s[5],u=s[9],g=s[2],d=s[6],_=s[10];switch(e){case"XYZ":this._y=Math.asin(be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,_),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-be(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,_),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-g,r),this._z=0);break;case"ZXY":this._x=Math.asin(be(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-g,_),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-be(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(d,_),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(be(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-g,r)):(this._x=0,this._y=Math.atan2(o,_));break;case"XZY":this._z=Math.asin(-be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,_),this._y=0);break;default:fe("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return qf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(qf,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Yf.setFromEuler(this),this.setFromQuaternion(Yf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};us.DEFAULT_ORDER="XYZ";var Xr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},E0=0,Zf=new G,Tr=new Vi,rs=new Ve,fl=new G,Na=new G,T0=new G,A0=new Vi,Jf=new G(1,0,0),Kf=new G(0,1,0),jf=new G(0,0,1),Qf={type:"added"},C0={type:"removed"},Ar={type:"childadded",child:null},_u={type:"childremoved",child:null},En=class i extends zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:E0++}),this.uuid=Bi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new G,e=new us,n=new Vi,s=new G(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ve},normalMatrix:{value:new Me}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Tr.setFromAxisAngle(t,e),this.quaternion.multiply(Tr),this}rotateOnWorldAxis(t,e){return Tr.setFromAxisAngle(t,e),this.quaternion.premultiply(Tr),this}rotateX(t){return this.rotateOnAxis(Jf,t)}rotateY(t){return this.rotateOnAxis(Kf,t)}rotateZ(t){return this.rotateOnAxis(jf,t)}translateOnAxis(t,e){return Zf.copy(t).applyQuaternion(this.quaternion),this.position.add(Zf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Jf,t)}translateY(t){return this.translateOnAxis(Kf,t)}translateZ(t){return this.translateOnAxis(jf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(rs.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?fl.copy(t):fl.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Na.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?rs.lookAt(Na,fl,this.up):rs.lookAt(fl,Na,this.up),this.quaternion.setFromRotationMatrix(rs),s&&(rs.extractRotation(s.matrixWorld),Tr.setFromRotationMatrix(rs),this.quaternion.premultiply(Tr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ge("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Qf),Ar.child=t,this.dispatchEvent(Ar),Ar.child=null):ge("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(C0),_u.child=t,this.dispatchEvent(_u),_u.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),rs.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),rs.multiply(t.parent.matrixWorld)),t.applyMatrix4(rs),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Qf),Ar.child=t,this.dispatchEvent(Ar),Ar.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Na,t,T0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Na,A0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let h=0,u=c.length;h<u;h++){let g=c[h];r(t.shapes,g)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,h=this.material.length;c<h;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),h=a(t.textures),u=a(t.images),g=a(t.shapes),d=a(t.skeletons),_=a(t.animations),y=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),h.length>0&&(n.textures=h),u.length>0&&(n.images=u),g.length>0&&(n.shapes=g),d.length>0&&(n.skeletons=d),_.length>0&&(n.animations=_),y.length>0&&(n.nodes=y)}return n.object=s,n;function a(o){let c=[];for(let h in o){let u=o[h];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};En.DEFAULT_UP=new G(0,1,0);En.DEFAULT_MATRIX_AUTO_UPDATE=!0;En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ci=class extends En{constructor(){super(),this.isGroup=!0,this.type="Group"}},R0={type:"move"},qr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ci,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ci,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ci,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){a=!0;for(let C of t.hand.values()){let p=e.getJointPose(C,n),f=this._getHandJoint(h,C);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}let u=h.joints["index-finger-tip"],g=h.joints["thumb-tip"],d=u.position.distanceTo(g.position),_=.02,y=.005;h.inputState.pinching&&d>_+y?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&d<=_-y&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(R0)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ci;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},cm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ys={h:0,s:0,l:0},pl={h:0,s:0,l:0};function xu(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var de=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=li){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ue.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Ue.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ue.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Ue.workingColorSpace){if(t=yd(t,1),e=be(e,0,1),n=be(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=xu(a,r,t+1/3),this.g=xu(a,r,t),this.b=xu(a,r,t-1/3)}return Ue.colorSpaceToWorking(this,s),this}setStyle(t,e=li){function n(r){r!==void 0&&parseFloat(r)<1&&fe("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:fe("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);fe("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=li){let n=cm[t.toLowerCase()];return n!==void 0?this.setHex(n,e):fe("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=hs(t.r),this.g=hs(t.g),this.b=hs(t.b),this}copyLinearToSRGB(t){return this.r=zr(t.r),this.g=zr(t.g),this.b=zr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=li){return Ue.workingToColorSpace(Bn.copy(this),t),Math.round(be(Bn.r*255,0,255))*65536+Math.round(be(Bn.g*255,0,255))*256+Math.round(be(Bn.b*255,0,255))}getHexString(t=li){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ue.workingColorSpace){Ue.workingToColorSpace(Bn.copy(this),e);let n=Bn.r,s=Bn.g,r=Bn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,h,u=(o+a)/2;if(o===a)c=0,h=0;else{let g=a-o;switch(h=u<=.5?g/(a+o):g/(2-a-o),a){case n:c=(s-r)/g+(s<r?6:0);break;case s:c=(r-n)/g+2;break;case r:c=(n-s)/g+4;break}c/=6}return t.h=c,t.s=h,t.l=u,t}getRGB(t,e=Ue.workingColorSpace){return Ue.workingToColorSpace(Bn.copy(this),e),t.r=Bn.r,t.g=Bn.g,t.b=Bn.b,t}getStyle(t=li){Ue.workingToColorSpace(Bn.copy(this),t);let e=Bn.r,n=Bn.g,s=Bn.b;return t!==li?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ys),this.setHSL(ys.h+t,ys.s+e,ys.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ys),t.getHSL(pl);let n=$a(ys.h,pl.h,e),s=$a(ys.s,pl.s,e),r=$a(ys.l,pl.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Bn=new de;de.NAMES=cm;var ja=class extends En{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new us,this.environmentIntensity=1,this.environmentRotation=new us,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},bi=new G,as=new G,vu=new G,os=new G,Cr=new G,Rr=new G,tp=new G,yu=new G,Su=new G,Mu=new G,bu=new We,wu=new We,Eu=new We,ws=class i{constructor(t=new G,e=new G,n=new G){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),bi.subVectors(t,e),s.cross(bi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){bi.subVectors(s,e),as.subVectors(n,e),vu.subVectors(t,e);let a=bi.dot(bi),o=bi.dot(as),c=bi.dot(vu),h=as.dot(as),u=as.dot(vu),g=a*h-o*o;if(g===0)return r.set(0,0,0),null;let d=1/g,_=(h*c-o*u)*d,y=(a*u-o*c)*d;return r.set(1-_-y,y,_)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,os)===null?!1:os.x>=0&&os.y>=0&&os.x+os.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,os)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,os.x),c.addScaledVector(a,os.y),c.addScaledVector(o,os.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return bu.setScalar(0),wu.setScalar(0),Eu.setScalar(0),bu.fromBufferAttribute(t,e),wu.fromBufferAttribute(t,n),Eu.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(bu,r.x),a.addScaledVector(wu,r.y),a.addScaledVector(Eu,r.z),a}static isFrontFacing(t,e,n,s){return bi.subVectors(n,e),as.subVectors(t,e),bi.cross(as).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return bi.subVectors(this.c,this.b),as.subVectors(this.a,this.b),bi.cross(as).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Cr.subVectors(s,n),Rr.subVectors(r,n),yu.subVectors(t,n);let c=Cr.dot(yu),h=Rr.dot(yu);if(c<=0&&h<=0)return e.copy(n);Su.subVectors(t,s);let u=Cr.dot(Su),g=Rr.dot(Su);if(u>=0&&g<=u)return e.copy(s);let d=c*g-u*h;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),e.copy(n).addScaledVector(Cr,a);Mu.subVectors(t,r);let _=Cr.dot(Mu),y=Rr.dot(Mu);if(y>=0&&_<=y)return e.copy(r);let C=_*h-c*y;if(C<=0&&h>=0&&y<=0)return o=h/(h-y),e.copy(n).addScaledVector(Rr,o);let p=u*y-_*g;if(p<=0&&g-u>=0&&_-y>=0)return tp.subVectors(r,s),o=(g-u)/(g-u+(_-y)),e.copy(s).addScaledVector(tp,o);let f=1/(p+C+d);return a=C*f,o=d*f,e.copy(n).addScaledVector(Cr,a).addScaledVector(Rr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},qn=class{constructor(t=new G(1/0,1/0,1/0),e=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(wi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(wi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=wi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,wi):wi.fromBufferAttribute(r,a),wi.applyMatrix4(t.matrixWorld),this.expandByPoint(wi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ml.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ml.copy(n.boundingBox)),ml.applyMatrix4(t.matrixWorld),this.union(ml)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,wi),wi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ua),gl.subVectors(this.max,Ua),Ir.subVectors(t.a,Ua),Pr.subVectors(t.b,Ua),Lr.subVectors(t.c,Ua),Ss.subVectors(Pr,Ir),Ms.subVectors(Lr,Pr),qs.subVectors(Ir,Lr);let e=[0,-Ss.z,Ss.y,0,-Ms.z,Ms.y,0,-qs.z,qs.y,Ss.z,0,-Ss.x,Ms.z,0,-Ms.x,qs.z,0,-qs.x,-Ss.y,Ss.x,0,-Ms.y,Ms.x,0,-qs.y,qs.x,0];return!Tu(e,Ir,Pr,Lr,gl)||(e=[1,0,0,0,1,0,0,0,1],!Tu(e,Ir,Pr,Lr,gl))?!1:(_l.crossVectors(Ss,Ms),e=[_l.x,_l.y,_l.z],Tu(e,Ir,Pr,Lr,gl))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,wi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(wi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ls[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ls[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ls[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ls[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ls[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ls[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ls[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ls[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ls),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ls=[new G,new G,new G,new G,new G,new G,new G,new G],wi=new G,ml=new qn,Ir=new G,Pr=new G,Lr=new G,Ss=new G,Ms=new G,qs=new G,Ua=new G,gl=new G,_l=new G,Ys=new G;function Tu(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ys.fromArray(i,r);let o=s.x*Math.abs(Ys.x)+s.y*Math.abs(Ys.y)+s.z*Math.abs(Ys.z),c=t.dot(Ys),h=e.dot(Ys),u=n.dot(Ys);if(Math.max(-Math.max(c,h,u),Math.min(c,h,u))>o)return!1}return!0}var gn=new G,xl=new Ot,I0=0,Ye=class extends zi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:I0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=xd,this.updateRanges=[],this.gpuType=_i,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)xl.fromBufferAttribute(this,e),xl.applyMatrix3(t),this.setXY(e,xl.x,xl.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)gn.fromBufferAttribute(this,e),gn.applyMatrix3(t),this.setXYZ(e,gn.x,gn.y,gn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)gn.fromBufferAttribute(this,e),gn.applyMatrix4(t),this.setXYZ(e,gn.x,gn.y,gn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)gn.fromBufferAttribute(this,e),gn.applyNormalMatrix(t),this.setXYZ(e,gn.x,gn.y,gn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)gn.fromBufferAttribute(this,e),gn.transformDirection(t),this.setXYZ(e,gn.x,gn.y,gn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ti(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=qe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ti(e,this.array)),e}setX(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ti(e,this.array)),e}setY(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ti(e,this.array)),e}setZ(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ti(e,this.array)),e}setW(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=qe(e,this.array),n=qe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=qe(e,this.array),n=qe(n,this.array),s=qe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=qe(e,this.array),n=qe(n,this.array),s=qe(s,this.array),r=qe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Qa=class extends Ye{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var to=class extends Ye{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var cn=class extends Ye{constructor(t,e,n){super(new Float32Array(t),e,n)}},P0=new qn,Fa=new G,Au=new G,ni=class{constructor(t=new G,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):P0.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Fa.subVectors(t,this.center);let e=Fa.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Fa,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Au.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Fa.copy(t.center).add(Au)),this.expandByPoint(Fa.copy(t.center).sub(Au))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},L0=0,gi=new Ve,Cu=new En,Dr=new G,oi=new qn,Oa=new qn,bn=new G,hn=class i extends zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:L0++}),this.uuid=Bi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(n0(t)?to:Qa)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Me().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return gi.makeRotationFromQuaternion(t),this.applyMatrix4(gi),this}rotateX(t){return gi.makeRotationX(t),this.applyMatrix4(gi),this}rotateY(t){return gi.makeRotationY(t),this.applyMatrix4(gi),this}rotateZ(t){return gi.makeRotationZ(t),this.applyMatrix4(gi),this}translate(t,e,n){return gi.makeTranslation(t,e,n),this.applyMatrix4(gi),this}scale(t,e,n){return gi.makeScale(t,e,n),this.applyMatrix4(gi),this}lookAt(t){return Cu.lookAt(t),Cu.updateMatrix(),this.applyMatrix4(Cu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Dr).negate(),this.translate(Dr.x,Dr.y,Dr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new cn(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&fe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ge("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];oi.setFromBufferAttribute(r),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,oi.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,oi.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(oi.min),this.boundingBox.expandByPoint(oi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ge('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ni);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ge("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(t){let n=this.boundingSphere.center;if(oi.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Oa.setFromBufferAttribute(o),this.morphTargetsRelative?(bn.addVectors(oi.min,Oa.min),oi.expandByPoint(bn),bn.addVectors(oi.max,Oa.max),oi.expandByPoint(bn)):(oi.expandByPoint(Oa.min),oi.expandByPoint(Oa.max))}oi.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)bn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(bn));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let h=0,u=o.count;h<u;h++)bn.fromBufferAttribute(o,h),c&&(Dr.fromBufferAttribute(t,h),bn.add(Dr)),s=Math.max(s,n.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ge('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ge("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Ye(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let E=0;E<n.count;E++)o[E]=new G,c[E]=new G;let h=new G,u=new G,g=new G,d=new Ot,_=new Ot,y=new Ot,C=new G,p=new G;function f(E,L,V){h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,L),g.fromBufferAttribute(n,V),d.fromBufferAttribute(r,E),_.fromBufferAttribute(r,L),y.fromBufferAttribute(r,V),u.sub(h),g.sub(h),_.sub(d),y.sub(d);let W=1/(_.x*y.y-y.x*_.y);isFinite(W)&&(C.copy(u).multiplyScalar(y.y).addScaledVector(g,-_.y).multiplyScalar(W),p.copy(g).multiplyScalar(_.x).addScaledVector(u,-y.x).multiplyScalar(W),o[E].add(C),o[L].add(C),o[V].add(C),c[E].add(p),c[L].add(p),c[V].add(p))}let N=this.groups;N.length===0&&(N=[{start:0,count:t.count}]);for(let E=0,L=N.length;E<L;++E){let V=N[E],W=V.start,et=V.count;for(let st=W,Z=W+et;st<Z;st+=3)f(t.getX(st+0),t.getX(st+1),t.getX(st+2))}let O=new G,A=new G,b=new G,D=new G;function $(E){b.fromBufferAttribute(s,E),D.copy(b);let L=o[E];O.copy(L),O.sub(b.multiplyScalar(b.dot(L))).normalize(),A.crossVectors(D,L);let W=A.dot(c[E])<0?-1:1;a.setXYZW(E,O.x,O.y,O.z,W)}for(let E=0,L=N.length;E<L;++E){let V=N[E],W=V.start,et=V.count;for(let st=W,Z=W+et;st<Z;st+=3)$(t.getX(st+0)),$(t.getX(st+1)),$(t.getX(st+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Ye(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,_=n.count;d<_;d++)n.setXYZ(d,0,0,0);let s=new G,r=new G,a=new G,o=new G,c=new G,h=new G,u=new G,g=new G;if(t)for(let d=0,_=t.count;d<_;d+=3){let y=t.getX(d+0),C=t.getX(d+1),p=t.getX(d+2);s.fromBufferAttribute(e,y),r.fromBufferAttribute(e,C),a.fromBufferAttribute(e,p),u.subVectors(a,r),g.subVectors(s,r),u.cross(g),o.fromBufferAttribute(n,y),c.fromBufferAttribute(n,C),h.fromBufferAttribute(n,p),o.add(u),c.add(u),h.add(u),n.setXYZ(y,o.x,o.y,o.z),n.setXYZ(C,c.x,c.y,c.z),n.setXYZ(p,h.x,h.y,h.z)}else for(let d=0,_=e.count;d<_;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),u.subVectors(a,r),g.subVectors(s,r),u.cross(g),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)bn.fromBufferAttribute(t,e),bn.normalize(),t.setXYZ(e,bn.x,bn.y,bn.z)}toNonIndexed(){function t(o,c){let h=o.array,u=o.itemSize,g=o.normalized,d=new h.constructor(c.length*u),_=0,y=0;for(let C=0,p=c.length;C<p;C++){o.isInterleavedBufferAttribute?_=c[C]*o.data.stride+o.offset:_=c[C]*u;for(let f=0;f<u;f++)d[y++]=h[_++]}return new Ye(d,u,g)}if(this.index===null)return fe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],h=t(c,n);e.setAttribute(o,h)}let r=this.morphAttributes;for(let o in r){let c=[],h=r[o];for(let u=0,g=h.length;u<g;u++){let d=h[u],_=t(d,n);c.push(_)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let h=a[o];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let h in c)c[h]!==void 0&&(t[h]=c[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let h=n[c];t.data.attributes[c]=h.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let h=this.morphAttributes[c],u=[];for(let g=0,d=h.length;g<d;g++){let _=h[g];u.push(_.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let h in s){let u=s[h];this.setAttribute(h,u.clone(e))}let r=t.morphAttributes;for(let h in r){let u=[],g=r[h];for(let d=0,_=g.length;d<_;d++)u.push(g[d].clone(e));this.morphAttributes[h]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let h=0,u=a.length;h<u;h++){let g=a[h];this.addGroup(g.start,g.count,g.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},tc=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=xd,this.updateRanges=[],this.version=0,this.uuid=Bi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},Xn=new G,Ri=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Xn.fromBufferAttribute(this,e),Xn.applyMatrix4(t),this.setXYZ(e,Xn.x,Xn.y,Xn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Xn.fromBufferAttribute(this,e),Xn.applyNormalMatrix(t),this.setXYZ(e,Xn.x,Xn.y,Xn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Xn.fromBufferAttribute(this,e),Xn.transformDirection(t),this.setXYZ(e,Xn.x,Xn.y,Xn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Ti(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=qe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=qe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=qe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=qe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=qe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Ti(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Ti(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Ti(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Ti(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=qe(e,this.array),n=qe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=qe(e,this.array),n=qe(n,this.array),s=qe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=qe(e,this.array),n=qe(n,this.array),s=qe(s,this.array),r=qe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Ja("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ye(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Ja("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ru=new G,D0=new G,N0=new Me,Ei=class{constructor(t=new G(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Ru.subVectors(n,e).cross(D0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Ru),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||N0.getNormalMatrix(t),s=this.coplanarPoint(Ru).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},U0=0,Hi=class extends zi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:U0++}),this.uuid=Bi(),this.name="",this.type="Material",this.blending=ea,this.side=Is,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nd,this.blendDst=id,this.blendEquation=rr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new de(0,0,0),this.blendAlpha=0,this.depthFunc=Vr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zl,this.stencilZFail=zl,this.stencilZPass=zl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){fe(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){fe(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new de().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Ei().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ot().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ot().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var cs=new G,Iu=new G,vl=new G,yl=new G,Qs=class{constructor(t=new G,e=new G(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,cs)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=cs.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(cs.copy(this.origin).addScaledVector(this.direction,e),cs.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Iu.copy(t).add(e).multiplyScalar(.5),vl.copy(e).sub(t).normalize(),yl.copy(this.origin).sub(Iu);let r=t.distanceTo(e)*.5,a=-this.direction.dot(vl),o=yl.dot(this.direction),c=-yl.dot(vl),h=yl.lengthSq(),u=Math.abs(1-a*a),g,d,_,y;if(u>0)if(g=a*c-o,d=a*o-c,y=r*u,g>=0)if(d>=-y)if(d<=y){let C=1/u;g*=C,d*=C,_=g*(g+a*d+2*o)+d*(a*g+d+2*c)+h}else d=r,g=Math.max(0,-(a*d+o)),_=-g*g+d*(d+2*c)+h;else d=-r,g=Math.max(0,-(a*d+o)),_=-g*g+d*(d+2*c)+h;else d<=-y?(g=Math.max(0,-(-a*r+o)),d=g>0?-r:Math.min(Math.max(-r,-c),r),_=-g*g+d*(d+2*c)+h):d<=y?(g=0,d=Math.min(Math.max(-r,-c),r),_=d*(d+2*c)+h):(g=Math.max(0,-(a*r+o)),d=g>0?r:Math.min(Math.max(-r,-c),r),_=-g*g+d*(d+2*c)+h);else d=a>0?-r:r,g=Math.max(0,-(a*d+o)),_=-g*g+d*(d+2*c)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,g),s&&s.copy(Iu).addScaledVector(vl,d),_}intersectSphere(t,e){if(t.radius<0)return null;cs.subVectors(t.center,this.origin);let n=cs.dot(this.direction),s=cs.dot(cs)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c,h=1/this.direction.x,u=1/this.direction.y,g=1/this.direction.z,d=this.origin;return h>=0?(n=(t.min.x-d.x)*h,s=(t.max.x-d.x)*h):(n=(t.max.x-d.x)*h,s=(t.min.x-d.x)*h),u>=0?(r=(t.min.y-d.y)*u,a=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,a=(t.min.y-d.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),g>=0?(o=(t.min.z-d.z)*g,c=(t.max.z-d.z)*g):(o=(t.max.z-d.z)*g,c=(t.min.z-d.z)*g),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,cs)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,c=o.x,h=o.y,u=o.z,g=t.x-a.x,d=t.y-a.y,_=t.z-a.z,y=e.x-a.x,C=e.y-a.y,p=e.z-a.z,f=n.x-a.x,N=n.y-a.y,O=n.z-a.z,A=Math.abs(c),b=Math.abs(h),D=Math.abs(u),$,E,L,V,W,et,st,Z,K,lt,ht,bt;if(A>=b&&A>=D?(L=c,et=g,K=y,bt=f,c>=0?($=h,E=u,V=d,W=_,st=C,Z=p,lt=N,ht=O):($=u,E=h,V=_,W=d,st=p,Z=C,lt=O,ht=N)):b>=D?(L=h,et=d,K=C,bt=N,h>=0?($=u,E=c,V=_,W=g,st=p,Z=y,lt=O,ht=f):($=c,E=u,V=g,W=_,st=y,Z=p,lt=f,ht=O)):(L=u,et=_,K=p,bt=O,u>=0?($=c,E=h,V=g,W=d,st=y,Z=C,lt=f,ht=N):($=h,E=c,V=d,W=g,st=C,Z=y,lt=N,ht=f)),L===0)return null;let ut=$/L,St=E/L,yt=1/L,$t=V-ut*et,Xt=W-St*et,ke=st-ut*K,Ee=Z-St*K,Ne=lt-ut*bt,pt=ht-St*bt,_t=Ne*Ee-pt*ke,At=$t*pt-Xt*Ne,ee=ke*Xt-Ee*$t;if(s){if(_t<0||At<0||ee<0)return null}else if((_t<0||At<0||ee<0)&&(_t>0||At>0||ee>0))return null;let Gt=_t+At+ee;if(Gt===0)return null;let ce=yt*(_t*et+At*K+ee*bt);return(Gt>0?ce<0:ce>0)?null:this.at(ce/Gt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},tr=class extends Hi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new de(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new us,this.combine=Cc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},ep=new Ve,Zs=new Qs,Sl=new ni,np=new G,Ml=new G,bl=new G,wl=new G,Pu=new G,El=new G,ip=new G,Tl=new G,Tn=class extends En{constructor(t=new hn,e=new tr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){El.set(0,0,0);for(let c=0,h=r.length;c<h;c++){let u=o[c],g=r[c];u!==0&&(Pu.fromBufferAttribute(g,t),a?El.addScaledVector(Pu,u):El.addScaledVector(Pu.sub(e),u))}e.add(El)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Sl.copy(n.boundingSphere),Sl.applyMatrix4(r),Zs.copy(t.ray).recast(t.near),!(Sl.containsPoint(Zs.origin)===!1&&(Zs.intersectSphere(Sl,np)===null||Zs.origin.distanceToSquared(np)>(t.far-t.near)**2))&&(ep.copy(r).invert(),Zs.copy(t.ray).applyMatrix4(ep),!(n.boundingBox!==null&&Zs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Zs)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,h=r.attributes.uv,u=r.attributes.uv1,g=r.attributes.normal,d=r.groups,_=r.drawRange;if(o!==null)if(Array.isArray(a))for(let y=0,C=d.length;y<C;y++){let p=d[y],f=a[p.materialIndex],N=Math.max(p.start,_.start),O=Math.min(o.count,Math.min(p.start+p.count,_.start+_.count));for(let A=N,b=O;A<b;A+=3){let D=o.getX(A),$=o.getX(A+1),E=o.getX(A+2);s=Al(this,f,t,n,h,u,g,D,$,E),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let y=Math.max(0,_.start),C=Math.min(o.count,_.start+_.count);for(let p=y,f=C;p<f;p+=3){let N=o.getX(p),O=o.getX(p+1),A=o.getX(p+2);s=Al(this,a,t,n,h,u,g,N,O,A),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let y=0,C=d.length;y<C;y++){let p=d[y],f=a[p.materialIndex],N=Math.max(p.start,_.start),O=Math.min(c.count,Math.min(p.start+p.count,_.start+_.count));for(let A=N,b=O;A<b;A+=3){let D=A,$=A+1,E=A+2;s=Al(this,f,t,n,h,u,g,D,$,E),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let y=Math.max(0,_.start),C=Math.min(c.count,_.start+_.count);for(let p=y,f=C;p<f;p+=3){let N=p,O=p+1,A=p+2;s=Al(this,a,t,n,h,u,g,N,O,A),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function F0(i,t,e,n,s,r,a,o){let c;if(t.side===Yn?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===Is,o),c===null)return null;Tl.copy(o),Tl.applyMatrix4(i.matrixWorld);let h=e.ray.origin.distanceTo(Tl);return h<e.near||h>e.far?null:{distance:h,point:Tl.clone(),object:i}}function Al(i,t,e,n,s,r,a,o,c,h){i.getVertexPosition(o,Ml),i.getVertexPosition(c,bl),i.getVertexPosition(h,wl);let u=F0(i,t,e,n,Ml,bl,wl,ip);if(u){let g=new G;ws.getBarycoord(ip,Ml,bl,wl,g),s&&(u.uv=ws.getInterpolatedAttribute(s,o,c,h,g,new Ot)),r&&(u.uv1=ws.getInterpolatedAttribute(r,o,c,h,g,new Ot)),a&&(u.normal=ws.getInterpolatedAttribute(a,o,c,h,g,new G),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a:o,b:c,c:h,normal:new G,materialIndex:0};ws.getNormal(Ml,bl,wl,d.normal),u.face=d,u.barycoord=g}return u}var eo=class extends ti{constructor(t=null,e=1,n=1,s,r,a,o,c,h=wn,u=wn,g,d){super(null,a,o,c,h,u,s,r,g,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var no=class extends Ye{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Nr=new Ve,sp=new Ve,Cl=[],rp=new qn,O0=new Ve,Ba=new Tn,ka=new ni,io=class extends Tn{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new no(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,O0)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new qn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Nr),rp.copy(t.boundingBox).applyMatrix4(Nr),this.boundingBox.union(rp)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ni),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Nr),ka.copy(t.boundingSphere).applyMatrix4(Nr),this.boundingSphere.union(ka)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Ba.geometry=this.geometry,Ba.material=this.material,Ba.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ka.copy(this.boundingSphere),ka.applyMatrix4(n),t.ray.intersectsSphere(ka)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Nr),sp.multiplyMatrices(n,Nr),Ba.matrixWorld=sp,Ba.raycast(t,Cl);for(let a=0,o=Cl.length;a<o;a++){let c=Cl[a];c.instanceId=r,c.object=this,e.push(c)}Cl.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new no(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new eo(new Float32Array(s*this.count),s,this.count,Uc,_i));let r=this.morphTexture.source.data.data,a=0;for(let h=0;h<n.length;h++)a+=n[h];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*t;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Js=new ni,B0=new Ot(.5,.5),Rl=new G,Yr=class{constructor(t=new Ei,e=new Ei,n=new Ei,s=new Ei,r=new Ei,a=new Ei){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ai,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],h=r[3],u=r[4],g=r[5],d=r[6],_=r[7],y=r[8],C=r[9],p=r[10],f=r[11],N=r[12],O=r[13],A=r[14],b=r[15];if(s[0].setComponents(h-a,_-u,f-y,b-N).normalize(),s[1].setComponents(h+a,_+u,f+y,b+N).normalize(),s[2].setComponents(h+o,_+g,f+C,b+O).normalize(),s[3].setComponents(h-o,_-g,f-C,b-O).normalize(),n)s[4].setComponents(c,d,p,A).normalize(),s[5].setComponents(h-c,_-d,f-p,b-A).normalize();else if(s[4].setComponents(h-c,_-d,f-p,b-A).normalize(),e===Ai)s[5].setComponents(h+c,_+d,f+p,b+A).normalize();else if(e===Hr)s[5].setComponents(c,d,p,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Js.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Js.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Js)}intersectsSprite(t){Js.center.set(0,0,0);let e=B0.distanceTo(t.center);return Js.radius=.7071067811865476+e,Js.applyMatrix4(t.matrixWorld),this.intersectsSphere(Js)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Rl.x=s.normal.x>0?t.max.x:t.min.x,Rl.y=s.normal.y>0?t.max.y:t.min.y,Rl.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Rl)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var er=class extends Hi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new de(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},ec=new G,nc=new G,ap=new Ve,za=new Qs,Il=new ni,Lu=new G,op=new G,ic=class extends En{constructor(t=new hn,e=new er){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)ec.fromBufferAttribute(e,s-1),nc.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=ec.distanceTo(nc);t.setAttribute("lineDistance",new cn(n,1))}else fe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Il.copy(n.boundingSphere),Il.applyMatrix4(s),Il.radius+=r,t.ray.intersectsSphere(Il)===!1)return;ap.copy(s).invert(),za.copy(t.ray).applyMatrix4(ap);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,h=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){let _=Math.max(0,a.start),y=Math.min(u.count,a.start+a.count);for(let C=_,p=y-1;C<p;C+=h){let f=u.getX(C),N=u.getX(C+1),O=Pl(this,t,za,c,f,N,C);O&&e.push(O)}if(this.isLineLoop){let C=u.getX(y-1),p=u.getX(_),f=Pl(this,t,za,c,C,p,y-1);f&&e.push(f)}}else{let _=Math.max(0,a.start),y=Math.min(d.count,a.start+a.count);for(let C=_,p=y-1;C<p;C+=h){let f=Pl(this,t,za,c,C,C+1,C);f&&e.push(f)}if(this.isLineLoop){let C=Pl(this,t,za,c,y-1,_,y-1);C&&e.push(C)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Pl(i,t,e,n,s,r,a){let o=i.geometry.attributes.position;if(ec.fromBufferAttribute(o,s),nc.fromBufferAttribute(o,r),e.distanceSqToSegment(ec,nc,Lu,op)>n)return;Lu.applyMatrix4(i.matrixWorld);let h=t.ray.origin.distanceTo(Lu);if(!(h<t.near||h>t.far))return{distance:h,point:op.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var so=class extends ic{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},sc=class extends Hi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new de(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},lp=new Ve,$u=new Qs,Ll=new ni,Dl=new G,nr=class extends En{constructor(t=new hn,e=new sc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ll.copy(n.boundingSphere),Ll.applyMatrix4(s),Ll.radius+=r,t.ray.intersectsSphere(Ll)===!1)return;lp.copy(s).invert(),$u.copy(t.ray).applyMatrix4(lp);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,h=n.index,g=n.attributes.position;if(h!==null){let d=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let y=d,C=_;y<C;y++){let p=h.getX(y);Dl.fromBufferAttribute(g,p),cp(Dl,p,c,s,t,e,this)}}else{let d=Math.max(0,a.start),_=Math.min(g.count,a.start+a.count);for(let y=d,C=_;y<C;y++)Dl.fromBufferAttribute(g,y),cp(Dl,y,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function cp(i,t,e,n,s,r,a){let o=$u.distanceSqToPoint(i);if(o<e){let c=new G;$u.closestPointToPoint(i,c),c.applyMatrix4(n);let h=s.ray.origin.distanceTo(c);if(h<s.near||h>s.far)return;r.push({distance:h,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var ro=class extends ti{constructor(t=[],e=Ps,n,s,r,a,o,c,h,u){super(t,e,n,s,r,a,o,c,h,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var Es=class extends ti{constructor(t,e,n=Pi,s,r,a,o=wn,c=wn,h,u=ki,g=1){if(u!==ki&&u!==Ds)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:g};super(d,s,r,a,o,c,u,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Wr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},rc=class extends Es{constructor(t,e=Pi,n=Ps,s,r,a=wn,o=wn,c,h=ki){let u={width:t,height:t,depth:1},g=[u,u,u,u,u,u];super(t,t,e,n,s,r,a,o,c,h),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},ao=class extends ti{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Zr=class i extends hn{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],h=[],u=[],g=[],d=0,_=0;y("z","y","x",-1,-1,n,e,t,a,r,0),y("z","y","x",1,-1,n,e,-t,a,r,1),y("x","z","y",1,1,t,n,e,s,a,2),y("x","z","y",1,-1,t,n,-e,s,a,3),y("x","y","z",1,-1,t,e,n,s,r,4),y("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new cn(h,3)),this.setAttribute("normal",new cn(u,3)),this.setAttribute("uv",new cn(g,2));function y(C,p,f,N,O,A,b,D,$,E,L){let V=A/$,W=b/E,et=A/2,st=b/2,Z=D/2,K=$+1,lt=E+1,ht=0,bt=0,ut=new G;for(let St=0;St<lt;St++){let yt=St*W-st;for(let $t=0;$t<K;$t++){let Xt=$t*V-et;ut[C]=Xt*N,ut[p]=yt*O,ut[f]=Z,h.push(ut.x,ut.y,ut.z),ut[C]=0,ut[p]=0,ut[f]=D>0?1:-1,u.push(ut.x,ut.y,ut.z),g.push($t/$),g.push(1-St/E),ht+=1}}for(let St=0;St<E;St++)for(let yt=0;yt<$;yt++){let $t=d+yt+K*St,Xt=d+yt+K*(St+1),ke=d+(yt+1)+K*(St+1),Ee=d+(yt+1)+K*St;c.push($t,Xt,Ee),c.push(Xt,ke,Ee),bt+=6}o.addGroup(_,bt,L),_+=bt,d+=ht}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var oo=class i extends hn{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let h=this;s=Math.floor(s),r=Math.floor(r);let u=[],g=[],d=[],_=[],y=0,C=[],p=n/2,f=0;N(),a===!1&&(t>0&&O(!0),e>0&&O(!1)),this.setIndex(u),this.setAttribute("position",new cn(g,3)),this.setAttribute("normal",new cn(d,3)),this.setAttribute("uv",new cn(_,2));function N(){let A=new G,b=new G,D=0,$=(e-t)/n;for(let E=0;E<=r;E++){let L=[],V=E/r,W=V*(e-t)+t;for(let et=0;et<=s;et++){let st=et/s,Z=st*c+o,K=Math.sin(Z),lt=Math.cos(Z);b.x=W*K,b.y=-V*n+p,b.z=W*lt,g.push(b.x,b.y,b.z),A.set(K,$,lt).normalize(),d.push(A.x,A.y,A.z),_.push(st,1-V),L.push(y++)}C.push(L)}for(let E=0;E<s;E++)for(let L=0;L<r;L++){let V=C[L][E],W=C[L+1][E],et=C[L+1][E+1],st=C[L][E+1];(t>0||L!==0)&&(u.push(V,W,st),D+=3),(e>0||L!==r-1)&&(u.push(W,et,st),D+=3)}h.addGroup(f,D,0),f+=D}function O(A){let b=y,D=new Ot,$=new G,E=0,L=A===!0?t:e,V=A===!0?1:-1;for(let et=1;et<=s;et++)g.push(0,p*V,0),d.push(0,V,0),_.push(.5,.5),y++;let W=y;for(let et=0;et<=s;et++){let Z=et/s*c+o,K=Math.cos(Z),lt=Math.sin(Z);$.x=L*lt,$.y=p*V,$.z=L*K,g.push($.x,$.y,$.z),d.push(0,V,0),D.x=K*.5+.5,D.y=lt*.5*V+.5,_.push(D.x,D.y),y++}for(let et=0;et<s;et++){let st=b+et,Z=W+et;A===!0?u.push(Z,Z+1,st):u.push(Z+1,Z,st),E+=3}h.addGroup(f,E,A===!0?1:2),f+=E}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var ci=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){fe("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,c=r-1,h;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),h=n[s]-a,h<0)o=s+1;else if(h>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let u=n[s],d=n[s+1]-u,_=(a-u)/d;return(s+_)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new Ot:new G);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new G,s=[],r=[],a=[],o=new G,c=new Ve;for(let _=0;_<=t;_++){let y=_/t;s[_]=this.getTangentAt(y,new G)}r[0]=new G,a[0]=new G;let h=Number.MAX_VALUE,u=Math.abs(s[0].x),g=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=h&&(h=u,n.set(1,0,0)),g<=h&&(h=g,n.set(0,1,0)),d<=h&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let _=1;_<=t;_++){if(r[_]=r[_-1].clone(),a[_]=a[_-1].clone(),o.crossVectors(s[_-1],s[_]),o.length()>Number.EPSILON){o.normalize();let y=Math.acos(be(s[_-1].dot(s[_]),-1,1));r[_].applyMatrix4(c.makeRotationAxis(o,y))}a[_].crossVectors(s[_],r[_])}if(e===!0){let _=Math.acos(be(r[0].dot(r[t]),-1,1));_/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(_=-_);for(let y=1;y<=t;y++)r[y].applyMatrix4(c.makeRotationAxis(s[y],_*y)),a[y].crossVectors(s[y],r[y])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Jr=class extends ci{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new Ot){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(o),h=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),g=Math.sin(this.aRotation),d=c-this.aX,_=h-this.aY;c=d*u-_*g+this.aX,h=d*g+_*u+this.aY}return n.set(c,h)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},ac=class extends Jr{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Md(){let i=0,t=0,e=0,n=0;function s(r,a,o,c){i=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,h){s(a,o,h*(o-r),h*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,h,u,g){let d=(a-r)/h-(o-r)/(h+u)+(o-a)/u,_=(o-a)/u-(c-a)/(u+g)+(c-o)/g;d*=u,_*=u,s(a,o,d,_)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var hp=new G,up=new G,Du=new Md,Nu=new Md,Uu=new Md,oc=class extends ci{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new G){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let h,u;this.closed||o>0?h=s[(o-1)%r]:(up.subVectors(s[0],s[1]).add(s[0]),h=up);let g=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(hp.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=hp),this.curveType==="centripetal"||this.curveType==="chordal"){let _=this.curveType==="chordal"?.5:.25,y=Math.pow(h.distanceToSquared(g),_),C=Math.pow(g.distanceToSquared(d),_),p=Math.pow(d.distanceToSquared(u),_);C<1e-4&&(C=1),y<1e-4&&(y=C),p<1e-4&&(p=C),Du.initNonuniformCatmullRom(h.x,g.x,d.x,u.x,y,C,p),Nu.initNonuniformCatmullRom(h.y,g.y,d.y,u.y,y,C,p),Uu.initNonuniformCatmullRom(h.z,g.z,d.z,u.z,y,C,p)}else this.curveType==="catmullrom"&&(Du.initCatmullRom(h.x,g.x,d.x,u.x,this.tension),Nu.initCatmullRom(h.y,g.y,d.y,u.y,this.tension),Uu.initCatmullRom(h.z,g.z,d.z,u.z,this.tension));return n.set(Du.calc(c),Nu.calc(c),Uu.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new G().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function dp(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,c=i*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*i+e}function k0(i,t){let e=1-i;return e*e*t}function z0(i,t){return 2*(1-i)*i*t}function V0(i,t){return i*i*t}function Ga(i,t,e,n){return k0(i,t)+z0(i,e)+V0(i,n)}function H0(i,t){let e=1-i;return e*e*e*t}function $0(i,t){let e=1-i;return 3*e*e*i*t}function G0(i,t){return 3*(1-i)*i*i*t}function W0(i,t){return i*i*i*t}function Wa(i,t,e,n,s){return H0(i,t)+$0(i,e)+G0(i,n)+W0(i,s)}var lo=class extends ci{constructor(t=new Ot,e=new Ot,n=new Ot,s=new Ot){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Ot){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Wa(t,s.x,r.x,a.x,o.x),Wa(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},lc=class extends ci{constructor(t=new G,e=new G,n=new G,s=new G){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new G){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Wa(t,s.x,r.x,a.x,o.x),Wa(t,s.y,r.y,a.y,o.y),Wa(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},co=class extends ci{constructor(t=new Ot,e=new Ot){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Ot){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Ot){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},cc=class extends ci{constructor(t=new G,e=new G){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new G){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new G){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ho=class extends ci{constructor(t=new Ot,e=new Ot,n=new Ot){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Ot){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Ga(t,s.x,r.x,a.x),Ga(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},hc=class extends ci{constructor(t=new G,e=new G,n=new G){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new G){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Ga(t,s.x,r.x,a.x),Ga(t,s.y,r.y,a.y),Ga(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},uo=class extends ci{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Ot){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],h=s[a],u=s[a>s.length-2?s.length-1:a+1],g=s[a>s.length-3?s.length-1:a+2];return n.set(dp(o,c.x,h.x,u.x,g.x),dp(o,c.y,h.y,u.y,g.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Ot().fromArray(s))}return this}},Gu=Object.freeze({__proto__:null,ArcCurve:ac,CatmullRomCurve3:oc,CubicBezierCurve:lo,CubicBezierCurve3:lc,EllipseCurve:Jr,LineCurve:co,LineCurve3:cc,QuadraticBezierCurve:ho,QuadraticBezierCurve3:hc,SplineCurve:uo}),uc=class extends ci{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Gu[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],c=o.getLength(),h=c===0?0:1-a/c;return o.getPointAt(h,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let h=0;h<c.length;h++){let u=c[h];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Gu[s.type]().fromJSON(s))}return this}},ir=class extends uc{constructor(t){super(),this.type="Path",this.currentPoint=new Ot,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new co(this.currentPoint.clone(),new Ot(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new ho(this.currentPoint.clone(),new Ot(t,e),new Ot(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new lo(this.currentPoint.clone(),new Ot(t,e),new Ot(n,s),new Ot(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new uo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,c){let h=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+h,e+u,n,s,r,a,o,c),this}absellipse(t,e,n,s,r,a,o,c){let h=new Jr(t,e,n,s,r,a,o,c);if(this.curves.length>0){let g=h.getPoint(0);g.equals(this.currentPoint)||this.lineTo(g.x,g.y)}this.curves.push(h);let u=h.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Kr=class extends ir{constructor(t){super(t),this.uuid=Bi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new ir().fromJSON(s))}return this}};function X0(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=hm(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,h;if(n&&(r=K0(i,t,r,e)),i.length>80*e){o=i[0],c=i[1];let u=o,g=c;for(let d=e;d<s;d+=e){let _=i[d],y=i[d+1];_<o&&(o=_),y<c&&(c=y),_>u&&(u=_),y>g&&(g=y)}h=Math.max(u-o,g-c),h=h!==0?32767/h:0}return fo(r,a,e,o,c,h,0),a}function hm(i,t,e,n,s){let r;if(s===l_(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=fp(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=fp(a/n|0,i[a],i[a+1],r);return r&&jr(r,r.next)&&(mo(r),r=r.next),r}function sr(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(jr(e,e.next)||nn(e.prev,e,e.next)===0)){if(mo(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function fo(i,t,e,n,s,r,a){if(!i)return;!a&&r&&n_(i,n,s,r);let o=i;for(;i.prev!==i.next;){let c=i.prev,h=i.next;if(r?Y0(i,n,s,r):q0(i)){t.push(c.i,i.i,h.i),mo(i),i=h.next,o=h.next;continue}if(i=h,i===o){a?a===1?(i=Z0(sr(i),t),fo(i,t,e,n,s,r,2)):a===2&&J0(i,t,e,n,s,r):fo(sr(i),t,e,n,s,r,1);break}}}function q0(i){let t=i.prev,e=i,n=i.next;if(nn(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,c=e.y,h=n.y,u=Math.min(s,r,a),g=Math.min(o,c,h),d=Math.max(s,r,a),_=Math.max(o,c,h),y=n.next;for(;y!==t;){if(y.x>=u&&y.x<=d&&y.y>=g&&y.y<=_&&Va(s,o,r,c,a,h,y.x,y.y)&&nn(y.prev,y,y.next)>=0)return!1;y=y.next}return!0}function Y0(i,t,e,n){let s=i.prev,r=i,a=i.next;if(nn(s,r,a)>=0)return!1;let o=s.x,c=r.x,h=a.x,u=s.y,g=r.y,d=a.y,_=Math.min(o,c,h),y=Math.min(u,g,d),C=Math.max(o,c,h),p=Math.max(u,g,d),f=Wu(_,y,t,e,n),N=Wu(C,p,t,e,n),O=i.prevZ,A=i.nextZ;for(;O&&O.z>=f&&A&&A.z<=N;){if(O.x>=_&&O.x<=C&&O.y>=y&&O.y<=p&&O!==s&&O!==a&&Va(o,u,c,g,h,d,O.x,O.y)&&nn(O.prev,O,O.next)>=0||(O=O.prevZ,A.x>=_&&A.x<=C&&A.y>=y&&A.y<=p&&A!==s&&A!==a&&Va(o,u,c,g,h,d,A.x,A.y)&&nn(A.prev,A,A.next)>=0))return!1;A=A.nextZ}for(;O&&O.z>=f;){if(O.x>=_&&O.x<=C&&O.y>=y&&O.y<=p&&O!==s&&O!==a&&Va(o,u,c,g,h,d,O.x,O.y)&&nn(O.prev,O,O.next)>=0)return!1;O=O.prevZ}for(;A&&A.z<=N;){if(A.x>=_&&A.x<=C&&A.y>=y&&A.y<=p&&A!==s&&A!==a&&Va(o,u,c,g,h,d,A.x,A.y)&&nn(A.prev,A,A.next)>=0)return!1;A=A.nextZ}return!0}function Z0(i,t){let e=i;do{let n=e.prev,s=e.next.next;!jr(n,s)&&dm(n,e,e.next,s)&&po(n,s)&&po(s,n)&&(t.push(n.i,e.i,s.i),mo(e),mo(e.next),e=i=s),e=e.next}while(e!==i);return sr(e)}function J0(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&r_(a,o)){let c=fm(a,o);a=sr(a,a.next),c=sr(c,c.next),fo(a,t,e,n,s,r,0),fo(c,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function K0(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,c=r<a-1?t[r+1]*n:i.length,h=hm(i,o,c,n,!1);h===h.next&&(h.steiner=!0),s.push(s_(h))}s.sort(j0);for(let r=0;r<s.length;r++)e=Q0(s[r],e);return e}function j0(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Q0(i,t){let e=t_(i,t);if(!e)return t;let n=fm(e,i);return sr(n,n.next),sr(e,e.next)}function t_(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(jr(i,e))return e;do{if(jr(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let g=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(g<=n&&g>r&&(r=g,a=e.x<e.next.x?e:e.next,g===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,c=a.x,h=a.y,u=1/0;e=a;do{if(n>=e.x&&e.x>=c&&n!==e.x&&um(s<h?n:r,s,c,h,s<h?r:n,s,e.x,e.y)){let g=Math.abs(s-e.y)/(n-e.x);po(e,i)&&(g<u||g===u&&(e.x>a.x||e.x===a.x&&e_(a,e)))&&(a=e,u=g)}e=e.next}while(e!==o);return a}function e_(i,t){return nn(i.prev,i,t.prev)<0&&nn(t.next,i,i.next)<0}function n_(i,t,e,n){let s=i;do s.z===0&&(s.z=Wu(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,i_(s)}function i_(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let h=0;h<e&&(o++,a=a.nextZ,!!a);h++);let c=e;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function Wu(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function s_(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function um(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Va(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&um(i,t,e,n,s,r,a,o)}function r_(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!a_(i,t)&&(po(i,t)&&po(t,i)&&o_(i,t)&&(nn(i.prev,i,t.prev)||nn(i,t.prev,t))||jr(i,t)&&nn(i.prev,i,i.next)>0&&nn(t.prev,t,t.next)>0)}function nn(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function jr(i,t){return i.x===t.x&&i.y===t.y}function dm(i,t,e,n){let s=Ul(nn(i,t,e)),r=Ul(nn(i,t,n)),a=Ul(nn(e,n,i)),o=Ul(nn(e,n,t));return!!(s!==r&&a!==o||s===0&&Nl(i,e,t)||r===0&&Nl(i,n,t)||a===0&&Nl(e,i,n)||o===0&&Nl(e,t,n))}function Nl(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Ul(i){return i>0?1:i<0?-1:0}function a_(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&dm(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function po(i,t){return nn(i.prev,i,i.next)<0?nn(i,t,i.next)>=0&&nn(i,i.prev,t)>=0:nn(i,t,i.prev)<0||nn(i,i.next,t)<0}function o_(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function fm(i,t){let e=Xu(i.i,i.x,i.y),n=Xu(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function fp(i,t,e,n){let s=Xu(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function mo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Xu(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function l_(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var qu=class{static triangulate(t,e,n=2){return X0(t,e,n)}},Ks=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];pp(t),mp(n,t);let a=t.length;e.forEach(pp);for(let c=0;c<e.length;c++)s.push(a),a+=e[c].length,mp(n,e[c]);let o=qu.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function pp(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function mp(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var go=class i extends hn{constructor(t=new Kr([new Ot(.5,.5),new Ot(-.5,.5),new Ot(-.5,-.5),new Ot(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,c=t.length;o<c;o++){let h=t[o];a(h)}this.setAttribute("position",new cn(s,3)),this.setAttribute("uv",new cn(r,2)),this.computeVertexNormals();function a(o){let c=[],h=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,g=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,_=e.bevelThickness!==void 0?e.bevelThickness:.2,y=e.bevelSize!==void 0?e.bevelSize:_-.1,C=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3,f=e.extrudePath,N=e.UVGenerator!==void 0?e.UVGenerator:c_,O,A=!1,b,D,$,E;if(f){O=f.getSpacedPoints(u),A=!0,d=!1;let at=f.isCatmullRomCurve3?f.closed:!1;b=f.computeFrenetFrames(u,at),D=new G,$=new G,E=new G}d||(p=0,_=0,y=0,C=0);let L=o.extractPoints(h),V=L.shape,W=L.holes;if(!Ks.isClockWise(V)){V=V.reverse();for(let at=0,Et=W.length;at<Et;at++){let H=W[at];Ks.isClockWise(H)&&(W[at]=H.reverse())}}function st(at){let H=10000000000000001e-36,Tt=at[0];for(let Ut=1;Ut<=at.length;Ut++){let oe=Ut%at.length,re=at[oe],ue=re.x-Tt.x,me=re.y-Tt.y,z=ue*ue+me*me,Pe=Math.max(Math.abs(re.x),Math.abs(re.y),Math.abs(Tt.x),Math.abs(Tt.y)),pe=H*Pe*Pe;if(z<=pe){at.splice(oe,1),Ut--;continue}Tt=re}}st(V),W.forEach(st);let Z=W.length,K=V;for(let at=0;at<Z;at++){let Et=W[at];V=V.concat(Et)}function lt(at,Et,H){return Et||ge("ExtrudeGeometry: vec does not exist"),at.clone().addScaledVector(Et,H)}let ht=V.length;function bt(at,Et,H){let Tt,Ut,oe,re=at.x-Et.x,ue=at.y-Et.y,me=H.x-at.x,z=H.y-at.y,Pe=re*re+ue*ue,pe=re*z-ue*me;if(Math.abs(pe)>Number.EPSILON){let P=Math.sqrt(Pe),S=Math.sqrt(me*me+z*z),X=Et.x-ue/P,rt=Et.y+re/P,dt=H.x-z/S,Pt=H.y+me/S,Nt=((dt-X)*z-(Pt-rt)*me)/(re*z-ue*me);Tt=X+re*Nt-at.x,Ut=rt+ue*Nt-at.y;let ft=Tt*Tt+Ut*Ut;if(ft<=2)return new Ot(Tt,Ut);oe=Math.sqrt(ft/2)}else{let P=!1;re>Number.EPSILON?me>Number.EPSILON&&(P=!0):re<-Number.EPSILON?me<-Number.EPSILON&&(P=!0):Math.sign(ue)===Math.sign(z)&&(P=!0),P?(Tt=-ue,Ut=re,oe=Math.sqrt(Pe)):(Tt=re,Ut=ue,oe=Math.sqrt(Pe/2))}return new Ot(Tt/oe,Ut/oe)}let ut=[];for(let at=0,Et=K.length,H=Et-1,Tt=at+1;at<Et;at++,H++,Tt++)H===Et&&(H=0),Tt===Et&&(Tt=0),ut[at]=bt(K[at],K[H],K[Tt]);let St=[],yt,$t=ut.concat();for(let at=0,Et=Z;at<Et;at++){let H=W[at];yt=[];for(let Tt=0,Ut=H.length,oe=Ut-1,re=Tt+1;Tt<Ut;Tt++,oe++,re++)oe===Ut&&(oe=0),re===Ut&&(re=0),yt[Tt]=bt(H[Tt],H[oe],H[re]);St.push(yt),$t=$t.concat(yt)}let Xt;if(p===0)Xt=Ks.triangulateShape(K,W);else{let at=[],Et=[];for(let H=0;H<p;H++){let Tt=H/p,Ut=_*Math.cos(Tt*Math.PI/2),oe=y*Math.sin(Tt*Math.PI/2)+C;for(let re=0,ue=K.length;re<ue;re++){let me=lt(K[re],ut[re],oe);At(me.x,me.y,-Ut),Tt===0&&at.push(me)}for(let re=0,ue=Z;re<ue;re++){let me=W[re];yt=St[re];let z=[];for(let Pe=0,pe=me.length;Pe<pe;Pe++){let P=lt(me[Pe],yt[Pe],oe);At(P.x,P.y,-Ut),Tt===0&&z.push(P)}Tt===0&&Et.push(z)}}Xt=Ks.triangulateShape(at,Et)}let ke=Xt.length,Ee=y+C;for(let at=0;at<ht;at++){let Et=d?lt(V[at],$t[at],Ee):V[at];A?($.copy(b.normals[0]).multiplyScalar(Et.x),D.copy(b.binormals[0]).multiplyScalar(Et.y),E.copy(O[0]).add($).add(D),At(E.x,E.y,E.z)):At(Et.x,Et.y,0)}for(let at=1;at<=u;at++)for(let Et=0;Et<ht;Et++){let H=d?lt(V[Et],$t[Et],Ee):V[Et];A?($.copy(b.normals[at]).multiplyScalar(H.x),D.copy(b.binormals[at]).multiplyScalar(H.y),E.copy(O[at]).add($).add(D),At(E.x,E.y,E.z)):At(H.x,H.y,g/u*at)}for(let at=p-1;at>=0;at--){let Et=at/p,H=_*Math.cos(Et*Math.PI/2),Tt=y*Math.sin(Et*Math.PI/2)+C;for(let Ut=0,oe=K.length;Ut<oe;Ut++){let re=lt(K[Ut],ut[Ut],Tt);At(re.x,re.y,g+H)}for(let Ut=0,oe=W.length;Ut<oe;Ut++){let re=W[Ut];yt=St[Ut];for(let ue=0,me=re.length;ue<me;ue++){let z=lt(re[ue],yt[ue],Tt);A?At(z.x,z.y+O[u-1].y,O[u-1].x+H):At(z.x,z.y,g+H)}}}Ne(),pt();function Ne(){let at=s.length/3;if(d){let Et=0,H=ht*Et;for(let Tt=0;Tt<ke;Tt++){let Ut=Xt[Tt];ee(Ut[2]+H,Ut[1]+H,Ut[0]+H)}Et=u+p*2,H=ht*Et;for(let Tt=0;Tt<ke;Tt++){let Ut=Xt[Tt];ee(Ut[0]+H,Ut[1]+H,Ut[2]+H)}}else{for(let Et=0;Et<ke;Et++){let H=Xt[Et];ee(H[2],H[1],H[0])}for(let Et=0;Et<ke;Et++){let H=Xt[Et];ee(H[0]+ht*u,H[1]+ht*u,H[2]+ht*u)}}n.addGroup(at,s.length/3-at,0)}function pt(){let at=s.length/3,Et=0;_t(K,Et),Et+=K.length;for(let H=0,Tt=W.length;H<Tt;H++){let Ut=W[H];_t(Ut,Et),Et+=Ut.length}n.addGroup(at,s.length/3-at,1)}function _t(at,Et){let H=at.length;for(;--H>=0;){let Tt=H,Ut=H-1;Ut<0&&(Ut=at.length-1);for(let oe=0,re=u+p*2;oe<re;oe++){let ue=ht*oe,me=ht*(oe+1),z=Et+Tt+ue,Pe=Et+Ut+ue,pe=Et+Ut+me,P=Et+Tt+me;Gt(z,Pe,pe,P)}}}function At(at,Et,H){c.push(at),c.push(Et),c.push(H)}function ee(at,Et,H){ce(at),ce(Et),ce(H);let Tt=s.length/3,Ut=N.generateTopUV(n,s,Tt-3,Tt-2,Tt-1);ae(Ut[0]),ae(Ut[1]),ae(Ut[2])}function Gt(at,Et,H,Tt){ce(at),ce(Et),ce(Tt),ce(Et),ce(H),ce(Tt);let Ut=s.length/3,oe=N.generateSideWallUV(n,s,Ut-6,Ut-3,Ut-2,Ut-1);ae(oe[0]),ae(oe[1]),ae(oe[3]),ae(oe[1]),ae(oe[2]),ae(oe[3])}function ce(at){s.push(c[at*3+0]),s.push(c[at*3+1]),s.push(c[at*3+2])}function ae(at){r.push(at.x),r.push(at.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return h_(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Gu[s.type]().fromJSON(s)),new i(n,t.options)}},c_={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],c=t[n*3+1],h=t[s*3],u=t[s*3+1];return[new Ot(r,a),new Ot(o,c),new Ot(h,u)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],c=t[e*3+2],h=t[n*3],u=t[n*3+1],g=t[n*3+2],d=t[s*3],_=t[s*3+1],y=t[s*3+2],C=t[r*3],p=t[r*3+1],f=t[r*3+2];return Math.abs(o-u)<Math.abs(a-h)?[new Ot(a,1-c),new Ot(h,1-g),new Ot(d,1-y),new Ot(C,1-f)]:[new Ot(o,1-c),new Ot(u,1-g),new Ot(_,1-y),new Ot(p,1-f)]}};function h_(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var _o=class i extends hn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),h=o+1,u=c+1,g=t/o,d=e/c,_=[],y=[],C=[],p=[];for(let f=0;f<u;f++){let N=f*d-a;for(let O=0;O<h;O++){let A=O*g-r;y.push(A,-N,0),C.push(0,0,1),p.push(O/o),p.push(1-f/c)}}for(let f=0;f<c;f++)for(let N=0;N<o;N++){let O=N+h*f,A=N+h*(f+1),b=N+1+h*(f+1),D=N+1+h*f;_.push(O,A,D),_.push(A,b,D)}this.setIndex(_),this.setAttribute("position",new cn(y,3)),this.setAttribute("normal",new cn(C,3)),this.setAttribute("uv",new cn(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var xo=class extends hn{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],n=new Set,s=new G,r=new G;if(t.index!==null){let a=t.attributes.position,o=t.index,c=t.groups;c.length===0&&(c=[{start:0,count:o.count,materialIndex:0}]);for(let h=0,u=c.length;h<u;++h){let g=c[h],d=g.start,_=g.count;for(let y=d,C=d+_;y<C;y+=3)for(let p=0;p<3;p++){let f=o.getX(y+p),N=o.getX(y+(p+1)%3);s.fromBufferAttribute(a,f),r.fromBufferAttribute(a,N),gp(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{let a=t.attributes.position;for(let o=0,c=a.count/3;o<c;o++)for(let h=0;h<3;h++){let u=3*o+h,g=3*o+(h+1)%3;s.fromBufferAttribute(a,u),r.fromBufferAttribute(a,g),gp(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new cn(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function gp(i,t,e){let n=`${i.x},${i.y},${i.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${i.x},${i.y},${i.z}`;return e.has(n)===!0||e.has(s)===!0?!1:(e.add(n),e.add(s),!0)}function or(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(_p(s))s.isRenderTargetTexture?(fe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(_p(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function zn(i){let t={};for(let e=0;e<i.length;e++){let n=or(i[e]);for(let s in n)t[s]=n[s]}return t}function _p(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function u_(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function bd(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ue.workingColorSpace}var Oo={clone:or,merge:zn},d_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,f_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,An=class extends Hi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=d_,this.fragmentShader=f_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=or(t.uniforms),this.uniformsGroups=u_(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new de().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ot().fromArray(s.value);break;case"v3":this.uniforms[n].value=new G().fromArray(s.value);break;case"v4":this.uniforms[n].value=new We().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Me().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Ve().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},dc=class extends An{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var vo=class extends Hi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new de(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new de(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mh,this.normalScale=new Ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new us,this.combine=Cc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},fc=class extends Hi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},pc=class extends Hi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Ur(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Fu(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Ts=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},mc=class extends Ts{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:zu,endingEnd:zu}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Vu:r=t,o=2*e-n;break;case Hu:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Vu:a=t,c=2*n-e;break;case Hu:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}let h=(n-e)*.5,u=this.valueSize;this._weightPrev=h/(e-o),this._weightNext=h/(c-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,h=c-o,u=this._offsetPrev,g=this._offsetNext,d=this._weightPrev,_=this._weightNext,y=(n-e)/(s-e),C=y*y,p=C*y,f=-d*p+2*d*C-d*y,N=(1+d)*p+(-1.5-2*d)*C+(-.5+d)*y+1,O=(-1-_)*p+(1.5+_)*C+.5*y,A=_*p-_*C;for(let b=0;b!==o;++b)r[b]=f*a[u+b]+N*a[h+b]+O*a[c+b]+A*a[g+b];return r}},gc=class extends Ts{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,h=c-o,u=(n-e)/(s-e),g=1-u;for(let d=0;d!==o;++d)r[d]=a[h+d]*g+a[c+d]*u;return r}},_c=class extends Ts{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},xc=class extends Ts{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,h=c-o,u=this.inTangents,g=this.outTangents;if(!u||!g){let y=(n-e)/(s-e),C=1-y;for(let p=0;p!==o;++p)r[p]=a[h+p]*C+a[c+p]*y;return r}let d=o*2,_=t-1;for(let y=0;y!==o;++y){let C=a[h+y],p=a[c+y],f=_*d+y*2,N=g[f],O=g[f+1],A=t*d+y*2,b=u[A],D=u[A+1],$=m_(n,e,N,b,s);r[y]=pm($,C,O,D,p)}return r}};function pm(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function p_(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function m_(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=pm(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let c=p_(r,t,e,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var hi=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ur(e,this.TimeBufferType),this.values=Ur(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ur(t.times,Array),values:Ur(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Fu(t.settings)&&(n.settings={inTangents:Ur(t.settings.inTangents,Array),outTangents:Ur(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new _c(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new gc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new mc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new xc(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Xa:e=this.InterpolantFactoryMethodDiscrete;break;case Jl:e=this.InterpolantFactoryMethodLinear;break;case kl:e=this.InterpolantFactoryMethodSmooth;break;case ku:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return fe("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Xa;case this.InterpolantFactoryMethodLinear:return Jl;case this.InterpolantFactoryMethodSmooth:return kl;case this.InterpolantFactoryMethodBezier:return ku}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Fu(this.settings)&&(xp(this.settings.inTangents,t),xp(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ge("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(ge("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){ge("KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){ge("KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&i0(s))for(let o=0,c=s.length;o!==c;++o){let h=s[o];if(isNaN(h)){ge("KeyframeTrack: Value is not a valid number.",this,o,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===kl,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,h=t[o],u=t[o+1];if(h!==u&&(o!==1||h!==t[0]))if(s)c=!0;else{let g=o*n,d=g-n,_=g+n;for(let y=0;y!==n;++y){let C=e[g+y];if(C!==e[d+y]||C!==e[_+y]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let g=o*n,d=a*n;for(let _=0;_!==n;++_)e[d+_]=e[g+_]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,h=0;h!==n;++h)e[c+h]=e[o+h];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Fu(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function xp(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}hi.prototype.ValueTypeName="";hi.prototype.TimeBufferType=Float32Array;hi.prototype.ValueBufferType=Float32Array;hi.prototype.DefaultInterpolation=Jl;var As=class extends hi{constructor(t,e,n){super(t,e,n)}};As.prototype.ValueTypeName="bool";As.prototype.ValueBufferType=Array;As.prototype.DefaultInterpolation=Xa;As.prototype.InterpolantFactoryMethodLinear=void 0;As.prototype.InterpolantFactoryMethodSmooth=void 0;var vc=class extends hi{constructor(t,e,n,s){super(t,e,n,s)}};vc.prototype.ValueTypeName="color";var yc=class extends hi{constructor(t,e,n,s){super(t,e,n,s)}};yc.prototype.ValueTypeName="number";var Sc=class extends Ts{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(s-e),h=t*o;for(let u=h+o;h!==u;h+=4)Vi.slerpFlat(r,0,a,h-o,a,h,c);return r}},yo=class extends hi{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Sc(this.times,this.values,this.getValueSize(),t)}};yo.prototype.ValueTypeName="quaternion";yo.prototype.InterpolantFactoryMethodSmooth=void 0;var Cs=class extends hi{constructor(t,e,n){super(t,e,n)}};Cs.prototype.ValueTypeName="string";Cs.prototype.ValueBufferType=Array;Cs.prototype.DefaultInterpolation=Xa;Cs.prototype.InterpolantFactoryMethodLinear=void 0;Cs.prototype.InterpolantFactoryMethodSmooth=void 0;var Mc=class extends hi{constructor(t,e,n,s){super(t,e,n,s)}};Mc.prototype.ValueTypeName="vector";var bc=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,c,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,g){return h.push(u,g),this},this.removeHandler=function(u){let g=h.indexOf(u);return g!==-1&&h.splice(g,2),this},this.getHandler=function(u){for(let g=0,d=h.length;g<d;g+=2){let _=h[g],y=h[g+1];if(_.global&&(_.lastIndex=0),_.test(u))return y}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},mm=new bc,wc=class{constructor(t){this.manager=t!==void 0?t:mm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};wc.DEFAULT_MATERIAL_NAME="__DEFAULT";var So=class extends En{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new de(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Mo=class extends So{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(En.DEFAULT_UP),this.updateMatrix(),this.groundColor=new de(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Ou=new Ve,vp=new G,yp=new G,Ec=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ot(512,512),this.mapType=ii,this.map=null,this.mapPass=null,this.matrix=new Ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yr,this._frameExtents=new Ot(1,1),this._viewportCount=1,this._viewports=[new We(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;vp.setFromMatrixPosition(t.matrixWorld),e.position.copy(vp),yp.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(yp),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Ou.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Ou,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,h=s?s.y/r.y:0;t.coordinateSystem===Hr||t.reversedDepth?e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+h,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+h,0,0,.5,.5,0,0,0,1),e.multiply(Ou)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Fl=new G,Ol=new Vi,Fi=new G,bo=class extends En{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve,this.coordinateSystem=Ai,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Fl,Ol,Fi),Fi.x===1&&Fi.y===1&&Fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fl,Ol,Fi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Fl,Ol,Fi),Fi.x===1&&Fi.y===1&&Fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fl,Ol,Fi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},bs=new G,Sp=new Ot,Mp=new Ot,kn=class extends bo{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Gr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ha*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Gr*2*Math.atan(Math.tan(Ha*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){bs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(bs.x,bs.y).multiplyScalar(-t/bs.z),bs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(bs.x,bs.y).multiplyScalar(-t/bs.z)}getViewSize(t,e){return this.getViewBounds(t,Sp,Mp),e.subVectors(Mp,Sp)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ha*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,h=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/h,s*=a.width/c,n*=a.height/h}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Qr=class extends bo{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Yu=class extends Ec{constructor(){super(new Qr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},wo=class extends So{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(En.DEFAULT_UP),this.updateMatrix(),this.target=new En,this.shadow=new Yu}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Eo=class extends hn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var Fr=-90,Or=1,Tc=class extends En{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new kn(Fr,Or,t,e);s.layers=this.layers,this.add(s);let r=new kn(Fr,Or,t,e);r.layers=this.layers,this.add(r);let a=new kn(Fr,Or,t,e);a.layers=this.layers,this.add(a);let o=new kn(Fr,Or,t,e);o.layers=this.layers,this.add(o);let c=new kn(Fr,Or,t,e);c.layers=this.layers,this.add(c);let h=new kn(Fr,Or,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(let h of e)this.remove(h);if(t===Ai)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Hr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,h,u]=this.children,g=t.getRenderTarget(),d=t.getActiveCubeFace(),_=t.getActiveMipmapLevel(),y=t.xr.enabled;t.xr.enabled=!1;let C=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),n.texture.generateMipmaps=C,t.setRenderTarget(n,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(g,d,_),t.xr.enabled=y,n.texture.needsPMREMUpdate=!0}},Ac=class extends kn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var wd="\\[\\]\\.:\\/",g_=new RegExp("["+wd+"]","g"),Ed="[^"+wd+"]",__="[^"+wd.replace("\\.","")+"]",x_=/((?:WC+[\/:])*)/.source.replace("WC",Ed),v_=/(WCOD+)?/.source.replace("WCOD",__),y_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ed),S_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ed),M_=new RegExp("^"+x_+v_+y_+S_+"$"),b_=["material","materials","bones","map"],Zu=class{constructor(t,e,n){let s=n||Qe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Qe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(g_,"")}static parseTrackName(t){let e=M_.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);b_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){fe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=e.objectIndex;switch(n){case"materials":if(!t.material){ge("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ge("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ge("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===h){h=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ge("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ge("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){ge("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(h!==void 0){if(t[h]===void 0){ge("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let a=t[s];if(a===void 0){let h=e.nodeName;ge("PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){ge("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ge("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Qe.Composite=Zu;Qe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Qe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Qe.prototype.GetterByBindingType=[Qe.prototype._getValue_direct,Qe.prototype._getValue_array,Qe.prototype._getValue_arrayElement,Qe.prototype._getValue_toArray];Qe.prototype.SetterByBindingTypeAndVersioning=[[Qe.prototype._setValue_direct,Qe.prototype._setValue_direct_setNeedsUpdate,Qe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_array,Qe.prototype._setValue_array_setNeedsUpdate,Qe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_arrayElement,Qe.prototype._setValue_arrayElement_setNeedsUpdate,Qe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_fromArray,Qe.prototype._setValue_fromArray_setNeedsUpdate,Qe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var FM=new Float32Array(1);var Rs=class extends tc{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}};var bp=new Ve,To=class{constructor(t,e,n=0,s=1/0){this.ray=new Qs(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Xr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ge("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return bp.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(bp),this}intersectObject(t,e=!0,n=[]){return Ju(t,this,n,e),n.sort(wp),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Ju(t[s],this,n,e);return n.sort(wp),n}};function wp(i,t){return i.distance-t.distance}function Ju(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Ju(r[a],t,e,!0)}}var Ku=class i{static{i.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};var Ep=new G,Bl=new G,Br=new G,kr=new G,Bu=new G,w_=new G,E_=new G,Ao=class{constructor(t=new G,e=new G){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Ep.subVectors(t,this.start),Bl.subVectors(this.end,this.start);let n=Bl.dot(Bl);if(n===0)return 0;let r=Bl.dot(Ep)/n;return e&&(r=be(r,0,1)),r}closestPointToPoint(t,e,n){let s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}distanceSqToLine3(t,e=w_,n=E_){let s=10000000000000001e-32,r,a,o=this.start,c=t.start,h=this.end,u=t.end;Br.subVectors(h,o),kr.subVectors(u,c),Bu.subVectors(o,c);let g=Br.dot(Br),d=kr.dot(kr),_=kr.dot(Bu);if(g<=s&&d<=s)return e.copy(o),n.copy(c),e.sub(n),e.dot(e);if(g<=s)r=0,a=_/d,a=be(a,0,1);else{let y=Br.dot(Bu);if(d<=s)a=0,r=be(-y/g,0,1);else{let C=Br.dot(kr),p=g*d-C*C;p!==0?r=be((C*_-y*d)/p,0,1):r=0,a=(C*r+_)/d,a<0?(a=0,r=be(-y/g,0,1)):a>1&&(a=1,r=be((C-y)/g,0,1))}}return e.copy(o).addScaledVector(Br,r),n.copy(c).addScaledVector(kr,a),e.distanceToSquared(n)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};function Td(i,t,e,n){let s=T_(n);switch(e){case gd:return i*t;case Uc:return i*t/s.components*s.byteLength;case Fc:return i*t/s.components*s.byteLength;case Ns:return i*t*2/s.components*s.byteLength;case Oc:return i*t*2/s.components*s.byteLength;case _d:return i*t*3/s.components*s.byteLength;case xi:return i*t*4/s.components*s.byteLength;case Bc:return i*t*4/s.components*s.byteLength;case Po:case Lo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Do:case No:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case zc:case Hc:return Math.max(i,16)*Math.max(t,8)/4;case kc:case Vc:return Math.max(i,8)*Math.max(t,8)/2;case $c:case Gc:case Xc:case qc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Wc:case Uo:case Yc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Zc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Jc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Kc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case jc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Qc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case th:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case eh:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case nh:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ih:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case sh:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case rh:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ah:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case oh:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case lh:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ch:case hh:case uh:return Math.ceil(i/4)*Math.ceil(t/4)*16;case dh:case fh:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Fo:case ph:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function T_(i){switch(i){case ii:case dd:return{byteLength:1,components:1};case na:case fd:case Li:return{byteLength:2,components:1};case Dc:case Nc:return{byteLength:2,components:4};case Pi:case Lc:case _i:return{byteLength:4,components:1};case pd:case md:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?fe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Om(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function C_(i){let t=new WeakMap;function e(o,c){let h=o.array,u=o.usage,g=h.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,h,u),o.onUploadCallback();let _;if(h instanceof Float32Array)_=i.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)_=i.HALF_FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?_=i.HALF_FLOAT:_=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=i.SHORT;else if(h instanceof Uint32Array)_=i.UNSIGNED_INT;else if(h instanceof Int32Array)_=i.INT;else if(h instanceof Int8Array)_=i.BYTE;else if(h instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:g}}function n(o,c,h){let u=c.array,g=c.updateRanges;if(i.bindBuffer(h,o),g.length===0)i.bufferSubData(h,0,u);else{g.sort((_,y)=>_.start-y.start);let d=0;for(let _=1;_<g.length;_++){let y=g[d],C=g[_];C.start<=y.start+y.count+1?y.count=Math.max(y.count,C.start+C.count-y.start):(++d,g[d]=C)}g.length=d+1;for(let _=0,y=g.length;_<y;_++){let C=g[_];i.bufferSubData(h,C.start*u.BYTES_PER_ELEMENT,u,C.start,C.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let h=t.get(o);if(h===void 0)t.set(o,e(o,c));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,o,c),h.version=o.version}}return{get:s,remove:r,update:a}}var R_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,I_=`#ifdef USE_ALPHAHASH
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
#endif`,P_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,L_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,D_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,N_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,U_=`#ifdef USE_AOMAP
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
#endif`,F_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,O_=`#ifdef USE_BATCHING
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
#endif`,B_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,k_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,z_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,V_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,H_=`#ifdef USE_IRIDESCENCE
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
#endif`,$_=`#ifdef USE_BUMPMAP
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
#endif`,G_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,W_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,X_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,q_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Y_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Z_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,J_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,K_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,j_=`#define PI 3.141592653589793
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
} // validated`,Q_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,tx=`vec3 transformedNormal = objectNormal;
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
#endif`,ex=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ix=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rx="gl_FragColor = linearToOutputTexel( gl_FragColor );",ax=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ox=`#ifdef USE_ENVMAP
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
#endif`,lx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,cx=`#ifdef USE_ENVMAP
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
#endif`,hx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ux=`#ifdef USE_ENVMAP
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
#endif`,dx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,px=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gx=`#ifdef USE_GRADIENTMAP
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
}`,_x=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yx=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Sx=`#ifdef USE_ENVMAP
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
#endif`,Mx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ex=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Tx=`PhysicalMaterial material;
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
#endif`,Ax=`uniform sampler2D dfgLUT;
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
}`,Cx=`
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
#endif`,Rx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ix=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Px=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Lx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Dx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ux=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Fx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ox=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,kx=`#if defined( USE_POINTS_UV )
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
#endif`,zx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Vx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$x=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wx=`#ifdef USE_MORPHTARGETS
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
#endif`,Xx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Yx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Zx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,jx=`#ifdef USE_NORMALMAP
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
#endif`,Qx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ev=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,iv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,rv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,av=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ov=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,uv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,pv=`float getShadowMask() {
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
}`,mv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gv=`#ifdef USE_SKINNING
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
#endif`,_v=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xv=`#ifdef USE_SKINNING
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
#endif`,vv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Sv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Mv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,bv=`#ifdef USE_TRANSMISSION
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
#endif`,wv=`#ifdef USE_TRANSMISSION
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
#endif`,Ev=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Av=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Rv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Iv=`uniform sampler2D t2D;
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
}`,Pv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Dv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Uv=`#include <common>
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
}`,Fv=`#if DEPTH_PACKING == 3200
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
}`,Ov=`#define DISTANCE
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
}`,Bv=`#define DISTANCE
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
}`,kv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vv=`uniform float scale;
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
}`,Hv=`uniform vec3 diffuse;
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
}`,$v=`#include <common>
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
}`,Gv=`uniform vec3 diffuse;
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
}`,Wv=`#define LAMBERT
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
}`,Xv=`#define LAMBERT
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
}`,qv=`#define MATCAP
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
}`,Yv=`#define MATCAP
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
}`,Zv=`#define NORMAL
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
}`,Jv=`#define NORMAL
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
}`,Kv=`#define PHONG
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
}`,jv=`#define PHONG
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
}`,Qv=`#define STANDARD
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
}`,ty=`#define STANDARD
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
}`,ey=`#define TOON
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
}`,ny=`#define TOON
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
}`,iy=`uniform float size;
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
}`,sy=`uniform vec3 diffuse;
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
}`,ry=`#include <common>
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
}`,ay=`uniform vec3 color;
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
}`,oy=`uniform float rotation;
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
}`,ly=`uniform vec3 diffuse;
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
}`,Ie={alphahash_fragment:R_,alphahash_pars_fragment:I_,alphamap_fragment:P_,alphamap_pars_fragment:L_,alphatest_fragment:D_,alphatest_pars_fragment:N_,aomap_fragment:U_,aomap_pars_fragment:F_,batching_pars_vertex:O_,batching_vertex:B_,begin_vertex:k_,beginnormal_vertex:z_,bsdfs:V_,iridescence_fragment:H_,bumpmap_pars_fragment:$_,clipping_planes_fragment:G_,clipping_planes_pars_fragment:W_,clipping_planes_pars_vertex:X_,clipping_planes_vertex:q_,color_fragment:Y_,color_pars_fragment:Z_,color_pars_vertex:J_,color_vertex:K_,common:j_,cube_uv_reflection_fragment:Q_,defaultnormal_vertex:tx,displacementmap_pars_vertex:ex,displacementmap_vertex:nx,emissivemap_fragment:ix,emissivemap_pars_fragment:sx,colorspace_fragment:rx,colorspace_pars_fragment:ax,envmap_fragment:ox,envmap_common_pars_fragment:lx,envmap_pars_fragment:cx,envmap_pars_vertex:hx,envmap_physical_pars_fragment:Sx,envmap_vertex:ux,fog_vertex:dx,fog_pars_vertex:fx,fog_fragment:px,fog_pars_fragment:mx,gradientmap_pars_fragment:gx,lightmap_pars_fragment:_x,lights_lambert_fragment:xx,lights_lambert_pars_fragment:vx,lights_pars_begin:yx,lights_toon_fragment:Mx,lights_toon_pars_fragment:bx,lights_phong_fragment:wx,lights_phong_pars_fragment:Ex,lights_physical_fragment:Tx,lights_physical_pars_fragment:Ax,lights_fragment_begin:Cx,lights_fragment_maps:Rx,lights_fragment_end:Ix,lightprobes_pars_fragment:Px,logdepthbuf_fragment:Lx,logdepthbuf_pars_fragment:Dx,logdepthbuf_pars_vertex:Nx,logdepthbuf_vertex:Ux,map_fragment:Fx,map_pars_fragment:Ox,map_particle_fragment:Bx,map_particle_pars_fragment:kx,metalnessmap_fragment:zx,metalnessmap_pars_fragment:Vx,morphinstance_vertex:Hx,morphcolor_vertex:$x,morphnormal_vertex:Gx,morphtarget_pars_vertex:Wx,morphtarget_vertex:Xx,normal_fragment_begin:qx,normal_fragment_maps:Yx,normal_pars_fragment:Zx,normal_pars_vertex:Jx,normal_vertex:Kx,normalmap_pars_fragment:jx,clearcoat_normal_fragment_begin:Qx,clearcoat_normal_fragment_maps:tv,clearcoat_pars_fragment:ev,iridescence_pars_fragment:nv,opaque_fragment:iv,packing:sv,premultiplied_alpha_fragment:rv,project_vertex:av,dithering_fragment:ov,dithering_pars_fragment:lv,roughnessmap_fragment:cv,roughnessmap_pars_fragment:hv,shadowmap_pars_fragment:uv,shadowmap_pars_vertex:dv,shadowmap_vertex:fv,shadowmask_pars_fragment:pv,skinbase_vertex:mv,skinning_pars_vertex:gv,skinning_vertex:_v,skinnormal_vertex:xv,specularmap_fragment:vv,specularmap_pars_fragment:yv,tonemapping_fragment:Sv,tonemapping_pars_fragment:Mv,transmission_fragment:bv,transmission_pars_fragment:wv,uv_pars_fragment:Ev,uv_pars_vertex:Tv,uv_vertex:Av,worldpos_vertex:Cv,background_vert:Rv,background_frag:Iv,backgroundCube_vert:Pv,backgroundCube_frag:Lv,cube_vert:Dv,cube_frag:Nv,depth_vert:Uv,depth_frag:Fv,distance_vert:Ov,distance_frag:Bv,equirect_vert:kv,equirect_frag:zv,linedashed_vert:Vv,linedashed_frag:Hv,meshbasic_vert:$v,meshbasic_frag:Gv,meshlambert_vert:Wv,meshlambert_frag:Xv,meshmatcap_vert:qv,meshmatcap_frag:Yv,meshnormal_vert:Zv,meshnormal_frag:Jv,meshphong_vert:Kv,meshphong_frag:jv,meshphysical_vert:Qv,meshphysical_frag:ty,meshtoon_vert:ey,meshtoon_frag:ny,points_vert:iy,points_frag:sy,shadow_vert:ry,shadow_frag:ay,sprite_vert:oy,sprite_frag:ly},zt={common:{diffuse:{value:new de(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Me},alphaMap:{value:null},alphaMapTransform:{value:new Me},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Me}},envmap:{envMap:{value:null},envMapRotation:{value:new Me},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Me}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Me}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Me},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Me},normalScale:{value:new Ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Me},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Me}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Me}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Me}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new de(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new G},probesMax:{value:new G},probesResolution:{value:new G}},points:{diffuse:{value:new de(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Me},alphaTest:{value:0},uvTransform:{value:new Me}},sprite:{diffuse:{value:new de(16777215)},opacity:{value:1},center:{value:new Ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Me},alphaMap:{value:null},alphaMapTransform:{value:new Me},alphaTest:{value:0}}},Zn={basic:{uniforms:zn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.fog]),vertexShader:Ie.meshbasic_vert,fragmentShader:Ie.meshbasic_frag},lambert:{uniforms:zn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,zt.lights,{emissive:{value:new de(0)},envMapIntensity:{value:1}}]),vertexShader:Ie.meshlambert_vert,fragmentShader:Ie.meshlambert_frag},phong:{uniforms:zn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,zt.lights,{emissive:{value:new de(0)},specular:{value:new de(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ie.meshphong_vert,fragmentShader:Ie.meshphong_frag},standard:{uniforms:zn([zt.common,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.roughnessmap,zt.metalnessmap,zt.fog,zt.lights,{emissive:{value:new de(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag},toon:{uniforms:zn([zt.common,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.gradientmap,zt.fog,zt.lights,{emissive:{value:new de(0)}}]),vertexShader:Ie.meshtoon_vert,fragmentShader:Ie.meshtoon_frag},matcap:{uniforms:zn([zt.common,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,{matcap:{value:null}}]),vertexShader:Ie.meshmatcap_vert,fragmentShader:Ie.meshmatcap_frag},points:{uniforms:zn([zt.points,zt.fog]),vertexShader:Ie.points_vert,fragmentShader:Ie.points_frag},dashed:{uniforms:zn([zt.common,zt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ie.linedashed_vert,fragmentShader:Ie.linedashed_frag},depth:{uniforms:zn([zt.common,zt.displacementmap]),vertexShader:Ie.depth_vert,fragmentShader:Ie.depth_frag},normal:{uniforms:zn([zt.common,zt.bumpmap,zt.normalmap,zt.displacementmap,{opacity:{value:1}}]),vertexShader:Ie.meshnormal_vert,fragmentShader:Ie.meshnormal_frag},sprite:{uniforms:zn([zt.sprite,zt.fog]),vertexShader:Ie.sprite_vert,fragmentShader:Ie.sprite_frag},background:{uniforms:{uvTransform:{value:new Me},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ie.background_vert,fragmentShader:Ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Me}},vertexShader:Ie.backgroundCube_vert,fragmentShader:Ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ie.cube_vert,fragmentShader:Ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ie.equirect_vert,fragmentShader:Ie.equirect_frag},distance:{uniforms:zn([zt.common,zt.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ie.distance_vert,fragmentShader:Ie.distance_frag},shadow:{uniforms:zn([zt.lights,zt.fog,{color:{value:new de(0)},opacity:{value:1}}]),vertexShader:Ie.shadow_vert,fragmentShader:Ie.shadow_frag}};Zn.physical={uniforms:zn([Zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Me},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Me},clearcoatNormalScale:{value:new Ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Me},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Me},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Me},sheen:{value:0},sheenColor:{value:new de(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Me},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Me},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Me},transmissionSamplerSize:{value:new Ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Me},attenuationDistance:{value:0},attenuationColor:{value:new de(0)},specularColor:{value:new de(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Me},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Me},anisotropyVector:{value:new Ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Me}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag};var xh={r:0,b:0,g:0},cy=new Ve,Bm=new Me;Bm.set(-1,0,0,0,1,0,0,0,1);function hy(i,t,e,n,s,r){let a=new de(0),o=s===!0?0:1,c,h,u=null,g=0,d=null;function _(N){let O=N.isScene===!0?N.background:null;if(O&&O.isTexture){let A=N.backgroundBlurriness>0;O=t.get(O,A)}return O}function y(N){let O=!1,A=_(N);A===null?p(a,o):A&&A.isColor&&(p(A,1),O=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||O)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function C(N,O){let A=_(O);A&&(A.isCubeTexture||A.mapping===Ro)?(h===void 0&&(h=new Tn(new Zr(1,1,1),new An({name:"BackgroundCubeMaterial",uniforms:or(Zn.backgroundCube.uniforms),vertexShader:Zn.backgroundCube.vertexShader,fragmentShader:Zn.backgroundCube.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(b,D,$){this.matrixWorld.copyPosition($.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=A,h.material.uniforms.backgroundBlurriness.value=O.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(cy.makeRotationFromEuler(O.backgroundRotation)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(Bm),h.material.toneMapped=Ue.getTransfer(A.colorSpace)!==Ge,(u!==A||g!==A.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=A,g=A.version,d=i.toneMapping),h.layers.enableAll(),N.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new Tn(new _o(2,2),new An({name:"BackgroundMaterial",uniforms:or(Zn.background.uniforms),vertexShader:Zn.background.vertexShader,fragmentShader:Zn.background.fragmentShader,side:Is,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,c.material.toneMapped=Ue.getTransfer(A.colorSpace)!==Ge,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||g!==A.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=A,g=A.version,d=i.toneMapping),c.layers.enableAll(),N.unshift(c,c.geometry,c.material,0,0,null))}function p(N,O){N.getRGB(xh,bd(i)),e.buffers.color.setClear(xh.r,xh.g,xh.b,O,r)}function f(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(N,O=1){a.set(N),o=O,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(N){o=N,p(a,o)},render:y,addToRenderList:C,dispose:f}}function uy(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(W,et,st,Z,K){let lt=!1,ht=g(W,Z,st,et);r!==ht&&(r=ht,h(r.object)),lt=_(W,Z,st,K),lt&&y(W,Z,st,K),K!==null&&t.update(K,i.ELEMENT_ARRAY_BUFFER),(lt||a)&&(a=!1,A(W,et,st,Z),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function c(){return i.createVertexArray()}function h(W){return i.bindVertexArray(W)}function u(W){return i.deleteVertexArray(W)}function g(W,et,st,Z){let K=Z.wireframe===!0,lt=n[et.id];lt===void 0&&(lt={},n[et.id]=lt);let ht=W.isInstancedMesh===!0?W.id:0,bt=lt[ht];bt===void 0&&(bt={},lt[ht]=bt);let ut=bt[st.id];ut===void 0&&(ut={},bt[st.id]=ut);let St=ut[K];return St===void 0&&(St=d(c()),ut[K]=St),St}function d(W){let et=[],st=[],Z=[];for(let K=0;K<e;K++)et[K]=0,st[K]=0,Z[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:et,enabledAttributes:st,attributeDivisors:Z,object:W,attributes:{},index:null}}function _(W,et,st,Z){let K=r.attributes,lt=et.attributes,ht=0,bt=st.getAttributes();for(let ut in bt)if(bt[ut].location>=0){let yt=K[ut],$t=lt[ut];if($t===void 0&&(ut==="instanceMatrix"&&W.instanceMatrix&&($t=W.instanceMatrix),ut==="instanceColor"&&W.instanceColor&&($t=W.instanceColor)),yt===void 0||yt.attribute!==$t||$t&&yt.data!==$t.data)return!0;ht++}return r.attributesNum!==ht||r.index!==Z}function y(W,et,st,Z){let K={},lt=et.attributes,ht=0,bt=st.getAttributes();for(let ut in bt)if(bt[ut].location>=0){let yt=lt[ut];yt===void 0&&(ut==="instanceMatrix"&&W.instanceMatrix&&(yt=W.instanceMatrix),ut==="instanceColor"&&W.instanceColor&&(yt=W.instanceColor));let $t={};$t.attribute=yt,yt&&yt.data&&($t.data=yt.data),K[ut]=$t,ht++}r.attributes=K,r.attributesNum=ht,r.index=Z}function C(){let W=r.newAttributes;for(let et=0,st=W.length;et<st;et++)W[et]=0}function p(W){f(W,0)}function f(W,et){let st=r.newAttributes,Z=r.enabledAttributes,K=r.attributeDivisors;st[W]=1,Z[W]===0&&(i.enableVertexAttribArray(W),Z[W]=1),K[W]!==et&&(i.vertexAttribDivisor(W,et),K[W]=et)}function N(){let W=r.newAttributes,et=r.enabledAttributes;for(let st=0,Z=et.length;st<Z;st++)et[st]!==W[st]&&(i.disableVertexAttribArray(st),et[st]=0)}function O(W,et,st,Z,K,lt,ht){ht===!0?i.vertexAttribIPointer(W,et,st,K,lt):i.vertexAttribPointer(W,et,st,Z,K,lt)}function A(W,et,st,Z){C();let K=Z.attributes,lt=st.getAttributes(),ht=et.defaultAttributeValues;for(let bt in lt){let ut=lt[bt];if(ut.location>=0){let St=K[bt];if(St===void 0&&(bt==="instanceMatrix"&&W.instanceMatrix&&(St=W.instanceMatrix),bt==="instanceColor"&&W.instanceColor&&(St=W.instanceColor)),St!==void 0){let yt=St.normalized,$t=St.itemSize,Xt=t.get(St);if(Xt===void 0)continue;let ke=Xt.buffer,Ee=Xt.type,Ne=Xt.bytesPerElement,pt=Ee===i.INT||Ee===i.UNSIGNED_INT||St.gpuType===Lc;if(St.isInterleavedBufferAttribute){let _t=St.data,At=_t.stride,ee=St.offset;if(_t.isInstancedInterleavedBuffer){for(let Gt=0;Gt<ut.locationSize;Gt++)f(ut.location+Gt,_t.meshPerAttribute);W.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let Gt=0;Gt<ut.locationSize;Gt++)p(ut.location+Gt);i.bindBuffer(i.ARRAY_BUFFER,ke);for(let Gt=0;Gt<ut.locationSize;Gt++)O(ut.location+Gt,$t/ut.locationSize,Ee,yt,At*Ne,(ee+$t/ut.locationSize*Gt)*Ne,pt)}else{if(St.isInstancedBufferAttribute){for(let _t=0;_t<ut.locationSize;_t++)f(ut.location+_t,St.meshPerAttribute);W.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let _t=0;_t<ut.locationSize;_t++)p(ut.location+_t);i.bindBuffer(i.ARRAY_BUFFER,ke);for(let _t=0;_t<ut.locationSize;_t++)O(ut.location+_t,$t/ut.locationSize,Ee,yt,$t*Ne,$t/ut.locationSize*_t*Ne,pt)}}else if(ht!==void 0){let yt=ht[bt];if(yt!==void 0)switch(yt.length){case 2:i.vertexAttrib2fv(ut.location,yt);break;case 3:i.vertexAttrib3fv(ut.location,yt);break;case 4:i.vertexAttrib4fv(ut.location,yt);break;default:i.vertexAttrib1fv(ut.location,yt)}}}}N()}function b(){L();for(let W in n){let et=n[W];for(let st in et){let Z=et[st];for(let K in Z){let lt=Z[K];for(let ht in lt)u(lt[ht].object),delete lt[ht];delete Z[K]}}delete n[W]}}function D(W){if(n[W.id]===void 0)return;let et=n[W.id];for(let st in et){let Z=et[st];for(let K in Z){let lt=Z[K];for(let ht in lt)u(lt[ht].object),delete lt[ht];delete Z[K]}}delete n[W.id]}function $(W){for(let et in n){let st=n[et];for(let Z in st){let K=st[Z];if(K[W.id]===void 0)continue;let lt=K[W.id];for(let ht in lt)u(lt[ht].object),delete lt[ht];delete K[W.id]}}}function E(W){for(let et in n){let st=n[et],Z=W.isInstancedMesh===!0?W.id:0,K=st[Z];if(K!==void 0){for(let lt in K){let ht=K[lt];for(let bt in ht)u(ht[bt].object),delete ht[bt];delete K[lt]}delete st[Z],Object.keys(st).length===0&&delete n[et]}}}function L(){V(),a=!0,r!==s&&(r=s,h(r.object))}function V(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:V,dispose:b,releaseStatesOfGeometry:D,releaseStatesOfObject:E,releaseStatesOfProgram:$,initAttributes:C,enableAttribute:p,disableUnusedAttributes:N}}function dy(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let _=0;_<u;_++)d+=h[_];e.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function fy(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let $=t.get("EXT_texture_filter_anisotropic");s=i.getParameter($.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a($){return!($!==xi&&n.convert($)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o($){let E=$===Li&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!($!==ii&&$!==_i&&!E&&n.convert($)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c($){if($==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";$="mediump"}return $==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp",u=c(h);u!==h&&(fe("WebGLRenderer:",h,"not supported, using",u,"instead."),h=u);let g=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&d===!1&&fe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let _=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),N=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),O=i.getParameter(i.MAX_VARYING_VECTORS),A=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),D=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:g,reversedDepthBuffer:d,maxTextures:_,maxVertexTextures:y,maxTextureSize:C,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:N,maxVaryings:O,maxFragmentUniforms:A,maxSamples:b,samples:D}}function py(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Ei,o=new Me,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(g,d){let _=g.length!==0||d||n!==0||s;return s=d,n=g.length,_},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(g,d){e=u(g,d,0)},this.setState=function(g,d,_){let y=g.clippingPlanes,C=g.clipIntersection,p=g.clipShadows,f=i.get(g);if(!s||y===null||y.length===0||r&&!p)r?u(null):h();else{let N=r?0:n,O=N*4,A=f.clippingState||null;c.value=A,A=u(y,d,O,_);for(let b=0;b!==O;++b)A[b]=e[b];f.clippingState=A,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=N}};function h(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(g,d,_,y){let C=g!==null?g.length:0,p=null;if(C!==0){if(p=c.value,y!==!0||p===null){let f=_+C*4,N=d.matrixWorldInverse;o.getNormalMatrix(N),(p===null||p.length<f)&&(p=new Float32Array(f));for(let O=0,A=_;O!==C;++O,A+=4)a.copy(g[O]).applyMatrix4(N,o),a.normal.toArray(p,A),p[A+3]=a.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=C,t.numIntersection=0,p}}var ra=4,my=6,gy=20,_y=256,Bo=new Qr,gm=new de,Ad=null,Cd=0,Rd=0,Id=!1,xy=new G,lr=new G,yh=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=xy}=r;Ad=this._renderer.getRenderTarget(),Cd=this._renderer.getActiveCubeFace(),Rd=this._renderer.getActiveMipmapLevel(),Id=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Ad,Cd,Rd),this._renderer.xr.enabled=Id,t.scissorTest=!1,sa(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ps||t.mapping===ar?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ad=this._renderer.getRenderTarget(),Cd=this._renderer.getActiveCubeFace(),Rd=this._renderer.getActiveMipmapLevel(),Id=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:In,minFilter:In,generateMipmaps:!1,type:Li,format:xi,colorSpace:qa,depthBuffer:!1},s=_m(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_m(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=vy(r)),this._blurMaterial=Sy(r,t,e),this._ggxMaterial=yy(r,t,e)}return s}_compileMaterial(t){let e=new Tn(new hn,t);this._renderer.compile(e,Bo)}_sceneToCubeUV(t,e,n,s,r){let c=new kn(90,1,e,n),h=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],g=this._renderer,d=g.autoClear,_=g.toneMapping;g.getClearColor(gm),g.toneMapping=Ii,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(s),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Tn(new Zr,new tr({name:"PMREM.Background",side:Yn,depthWrite:!1,depthTest:!1})));let C=this._backgroundBox,p=C.material,f=!1,N=t.background;N?N.isColor&&(p.color.copy(N),t.background=null,f=!0):(p.color.copy(gm),f=!0);for(let O=0;O<6;O++){let A=O%3;A===0?(c.up.set(0,h[O],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[O],r.y,r.z)):A===1?(c.up.set(0,0,h[O]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[O],r.z)):(c.up.set(0,h[O],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[O]));let b=this._cubeSize;sa(s,A*b,O>2?b:0,b,b),g.setRenderTarget(s),f&&g.render(C,c),g.render(t,c)}g.toneMapping=_,g.autoClear=d,t.background=N}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Ps||t.mapping===ar;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=vm()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xm());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let c=this._cubeSize;sa(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Bo)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,h=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),g=Math.sqrt(h*h-u*u),d=h*1.25,_=g*d,{_lodMax:y}=this,C=this._sizeLods[n],p=3*C*(n>y-ra?n-y+ra:0),f=4*(this._cubeSize-C);c.envMap.value=t.texture,c.roughness.value=_,c.mipInt.value=y-e,sa(r,p,f,3*C,2*C),s.setRenderTarget(r),s.render(o,Bo),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=y-n,sa(t,p,f,3*C,2*C),s.setRenderTarget(t),s.render(o,Bo)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[s];c.material=o;let h=o.uniforms;h.envMap.value=t.texture,h.sigma.value=r,h.mipInt.value=this._lodMax-n;let u=this._sizeLods[s],g=3*u*(s>this._lodMax-ra?s-this._lodMax+ra:0),d=4*(this._cubeSize-u);sa(e,g,d,3*u,2*u),a.setRenderTarget(e),a.render(c,Bo)}};function vy(i){let t=[],e=[],n=i,s=i-ra+1+my;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),c=-o,h=1+o,u=[c,c,h,c,h,h,c,c,h,h,c,h],g=6,d=6,_=3,y=new Float32Array(_*d*g),C=new Float32Array(_*d*g);for(let f=0;f<g;f++){let N=f%3*2/3-1,O=f>2?0:-1,A=[N,O,0,N+2/3,O,0,N+2/3,O+1,0,N,O,0,N+2/3,O+1,0,N,O+1,0];y.set(A,_*d*f);for(let b=0;b<d;b++){let D=u[b*2]*2-1,$=u[b*2+1]*2-1;f===0?lr.set(1,$,D):f===1?lr.set(-D,1,-$):f===2?lr.set(-D,$,1):f===3?lr.set(-1,$,-D):f===4?lr.set(-D,-1,$):lr.set(D,$,-1),lr.toArray(C,(f*d+b)*_)}}let p=new hn;p.setAttribute("position",new Ye(y,_)),p.setAttribute("outputDirection",new Ye(C,_)),e.push(new Tn(p,null)),n>ra&&n--}return{lodMeshes:e,sizeLods:t}}function _m(i,t,e){let n=new ei(i,t,e);return n.texture.mapping=Ro,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function sa(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function yy(i,t,e){return new An({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:_y,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:bh(),fragmentShader:`

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
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function Sy(i,t,e){return new An({name:"SphericalGaussianBlur",defines:{SAMPLES:gy,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:bh(),fragmentShader:`

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
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function xm(){return new An({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bh(),fragmentShader:`

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
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function vm(){return new An({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function bh(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Sh=class extends ei{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new ro(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Zr(5,5,5),r=new An({name:"CubemapFromEquirect",uniforms:or(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Yn,blending:Gi});r.uniforms.tEquirect.value=e;let a=new Tn(s,r),o=e.minFilter;return e.minFilter===Ls&&(e.minFilter=In),new Tc(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function My(i){let t=new WeakMap,e=new WeakMap,n=null;function s(d,_=!1){return d==null?null:_?a(d):r(d)}function r(d){if(d&&d.isTexture){let _=d.mapping;if(_===Rc||_===Ic)if(t.has(d)){let y=t.get(d).texture;return o(y,d.mapping)}else{let y=d.image;if(y&&y.height>0){let C=new Sh(y.height);return C.fromEquirectangularTexture(i,d),t.set(d,C),d.addEventListener("dispose",h),o(C.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){let _=d.mapping,y=_===Rc||_===Ic,C=_===Ps||_===ar;if(y||C){let p=e.get(d),f=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==f)return n===null&&(n=new yh(i)),p=y?n.fromEquirectangular(d,p):n.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),p.texture;if(p!==void 0)return p.texture;{let N=d.image;return y&&N&&N.height>0||C&&N&&c(N)?(n===null&&(n=new yh(i)),p=y?n.fromEquirectangular(d):n.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),d.addEventListener("dispose",u),p.texture):null}}}return d}function o(d,_){return _===Rc?d.mapping=Ps:_===Ic&&(d.mapping=ar),d}function c(d){let _=0,y=6;for(let C=0;C<y;C++)d[C]!==void 0&&_++;return _===y}function h(d){let _=d.target;_.removeEventListener("dispose",h);let y=t.get(_);y!==void 0&&(t.delete(_),y.dispose())}function u(d){let _=d.target;_.removeEventListener("dispose",u);let y=e.get(_);y!==void 0&&(e.delete(_),y.dispose())}function g(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:g}}function by(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&js("WebGLRenderer: "+n+" extension not supported."),s}}}function wy(i,t,e,n){let s={},r=new WeakMap;function a(g){let d=g.target;d.index!==null&&t.remove(d.index);for(let y in d.attributes)t.remove(d.attributes[y]);d.removeEventListener("dispose",a),delete s[d.id];let _=r.get(d);_&&(t.remove(_),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(g,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function c(g){let d=g.attributes;for(let _ in d)t.update(d[_],i.ARRAY_BUFFER)}function h(g){let d=[],_=g.index,y=g.attributes.position,C=0;if(y===void 0)return;if(_!==null){let N=_.array;C=_.version;for(let O=0,A=N.length;O<A;O+=3){let b=N[O+0],D=N[O+1],$=N[O+2];d.push(b,D,D,$,$,b)}}else{let N=y.array;C=y.version;for(let O=0,A=N.length/3-1;O<A;O+=3){let b=O+0,D=O+1,$=O+2;d.push(b,D,D,$,$,b)}}let p=new(y.count>=65535?to:Qa)(d,1);p.version=C;let f=r.get(g);f&&t.remove(f),r.set(g,p)}function u(g){let d=r.get(g);if(d){let _=g.index;_!==null&&d.version<_.version&&h(g)}else h(g);return r.get(g)}return{get:o,update:c,getWireframeAttribute:u}}function Ey(i,t,e){let n;function s(g){n=g}let r,a;function o(g){r=g.type,a=g.bytesPerElement}function c(g,d){i.drawElements(n,d,r,g*a),e.update(d,n,1)}function h(g,d,_){_!==0&&(i.drawElementsInstanced(n,d,r,g*a,_),e.update(d,n,_))}function u(g,d,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,g,0,_);let C=0;for(let p=0;p<_;p++)C+=d[p];e.update(C,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=h,this.renderMultiDraw=u}function Ty(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:ge("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Ay(i,t,e){let n=new WeakMap,s=new We;function r(a,o,c){let h=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,g=u!==void 0?u.length:0,d=n.get(o);if(d===void 0||d.count!==g){let L=function(){$.dispose(),n.delete(o),o.removeEventListener("dispose",L)};d!==void 0&&d.texture.dispose();let _=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,C=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],N=o.morphAttributes.color||[],O=0;_===!0&&(O=1),y===!0&&(O=2),C===!0&&(O=3);let A=o.attributes.position.count*O,b=1;A>t.maxTextureSize&&(b=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);let D=new Float32Array(A*b*4*g),$=new Ka(D,A,b,g);$.type=_i,$.needsUpdate=!0;let E=O*4;for(let V=0;V<g;V++){let W=p[V],et=f[V],st=N[V],Z=A*b*4*V;for(let K=0;K<W.count;K++){let lt=K*E;_===!0&&(s.fromBufferAttribute(W,K),D[Z+lt+0]=s.x,D[Z+lt+1]=s.y,D[Z+lt+2]=s.z,D[Z+lt+3]=0),y===!0&&(s.fromBufferAttribute(et,K),D[Z+lt+4]=s.x,D[Z+lt+5]=s.y,D[Z+lt+6]=s.z,D[Z+lt+7]=0),C===!0&&(s.fromBufferAttribute(st,K),D[Z+lt+8]=s.x,D[Z+lt+9]=s.y,D[Z+lt+10]=s.z,D[Z+lt+11]=st.itemSize===4?s.w:1)}}d={count:g,texture:$,size:new Ot(A,b)},n.set(o,d),o.addEventListener("dispose",L)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let _=0;for(let C=0;C<h.length;C++)_+=h[C];let y=o.morphTargetsRelative?1:1-_;c.getUniforms().setValue(i,"morphTargetBaseInfluence",y),c.getUniforms().setValue(i,"morphTargetInfluences",h)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Cy(i,t,e,n,s){let r=new WeakMap;function a(h){let u=s.render.frame,g=h.geometry,d=t.get(h,g);if(r.get(d)!==u&&(t.update(d),r.set(d,u)),h.isInstancedMesh&&(h.hasEventListener("dispose",c)===!1&&h.addEventListener("dispose",c),r.get(h)!==u&&(e.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,i.ARRAY_BUFFER),r.set(h,u))),h.isSkinnedMesh){let _=h.skeleton;r.get(_)!==u&&(_.update(),r.set(_,u))}return d}function o(){r=new WeakMap}function c(h){let u=h.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}var Ry={[sd]:"LINEAR_TONE_MAPPING",[rd]:"REINHARD_TONE_MAPPING",[ad]:"CINEON_TONE_MAPPING",[od]:"ACES_FILMIC_TONE_MAPPING",[cd]:"AGX_TONE_MAPPING",[hd]:"NEUTRAL_TONE_MAPPING",[ld]:"CUSTOM_TONE_MAPPING"};function Iy(i,t,e,n,s,r){let a=new ei(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,h=new hn;h.setAttribute("position",new cn([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new cn([0,2,0,0,2,0],2));let u=new dc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),g=new Tn(h,u),d=new Qr(-1,1,1,-1,0,1),_=null,y=null,C=!1,p,f=null,N=[],O=!1;this.setSize=function(A,b){a.setSize(A,b),o!==null&&o.setSize(A,b),c!==null&&c.setSize(A,b);for(let D=0;D<N.length;D++){let $=N[D];$.setSize&&$.setSize(A,b)}},this.setEffects=function(A){N=A,O=N.length>0&&N[0].isRenderPass===!0;let b=a.width,D=a.height;N.length>0&&o===null&&(o=new ei(b,D,{type:Li,depthBuffer:!1,stencilBuffer:!1}),c=new ei(b,D,{type:Li,depthBuffer:!1,stencilBuffer:!1}));for(let $=0;$<N.length;$++){let E=N[$];E.setSize&&E.setSize(b,D)}},this.begin=function(A,b){if(C||A.toneMapping===Ii&&N.length===0)return!1;if(f=b,b!==null){let D=b.width,$=b.height;(a.width!==D||a.height!==$)&&this.setSize(D,$)}return O===!1&&A.setRenderTarget(a),p=A.toneMapping,A.toneMapping=Ii,!0},this.hasRenderPass=function(){return O},this.end=function(A,b){A.toneMapping=p,C=!0;let D=a,$=o;for(let E=0;E<N.length;E++){let L=N[E];L.enabled!==!1&&(L.render(A,$,D,b),L.needsSwap!==!1&&(D=$,$=$===o?c:o))}if(_!==A.outputColorSpace||y!==A.toneMapping){_=A.outputColorSpace,y=A.toneMapping,u.defines={},Ue.getTransfer(_)===Ge&&(u.defines.SRGB_TRANSFER="");let E=Ry[y];E&&(u.defines[E]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=D.texture,A.setRenderTarget(f),A.render(g,d),f=null,C=!1},this.isCompositing=function(){return C},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),h.dispose(),u.dispose()}}var km=new ti,Dd=new Es(1,1),zm=new Ka,Vm=new Ql,Hm=new ro,ym=[],Sm=[],Mm=new Float32Array(16),bm=new Float32Array(9),wm=new Float32Array(4);function oa(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=ym[s];if(r===void 0&&(r=new Float32Array(s),ym[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function _n(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function xn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function wh(i,t){let e=Sm[t];e===void 0&&(e=new Int32Array(t),Sm[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Py(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Ly(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_n(e,t))return;i.uniform2fv(this.addr,t),xn(e,t)}}function Dy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(_n(e,t))return;i.uniform3fv(this.addr,t),xn(e,t)}}function Ny(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_n(e,t))return;i.uniform4fv(this.addr,t),xn(e,t)}}function Uy(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(_n(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),xn(e,t)}else{if(_n(e,n))return;wm.set(n),i.uniformMatrix2fv(this.addr,!1,wm),xn(e,n)}}function Fy(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(_n(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),xn(e,t)}else{if(_n(e,n))return;bm.set(n),i.uniformMatrix3fv(this.addr,!1,bm),xn(e,n)}}function Oy(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(_n(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),xn(e,t)}else{if(_n(e,n))return;Mm.set(n),i.uniformMatrix4fv(this.addr,!1,Mm),xn(e,n)}}function By(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function ky(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_n(e,t))return;i.uniform2iv(this.addr,t),xn(e,t)}}function zy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_n(e,t))return;i.uniform3iv(this.addr,t),xn(e,t)}}function Vy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_n(e,t))return;i.uniform4iv(this.addr,t),xn(e,t)}}function Hy(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function $y(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_n(e,t))return;i.uniform2uiv(this.addr,t),xn(e,t)}}function Gy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_n(e,t))return;i.uniform3uiv(this.addr,t),xn(e,t)}}function Wy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_n(e,t))return;i.uniform4uiv(this.addr,t),xn(e,t)}}function Xy(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Dd.compareFunction=e.isReversedDepthBuffer()?_h:gh,r=Dd):r=km,e.setTexture2D(t||r,s)}function qy(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Vm,s)}function Yy(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Hm,s)}function Zy(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||zm,s)}function Jy(i){switch(i){case 5126:return Py;case 35664:return Ly;case 35665:return Dy;case 35666:return Ny;case 35674:return Uy;case 35675:return Fy;case 35676:return Oy;case 5124:case 35670:return By;case 35667:case 35671:return ky;case 35668:case 35672:return zy;case 35669:case 35673:return Vy;case 5125:return Hy;case 36294:return $y;case 36295:return Gy;case 36296:return Wy;case 35678:case 36198:case 36298:case 36306:case 35682:return Xy;case 35679:case 36299:case 36307:return qy;case 35680:case 36300:case 36308:case 36293:return Yy;case 36289:case 36303:case 36311:case 36292:return Zy}}function Ky(i,t){i.uniform1fv(this.addr,t)}function jy(i,t){let e=oa(t,this.size,2);i.uniform2fv(this.addr,e)}function Qy(i,t){let e=oa(t,this.size,3);i.uniform3fv(this.addr,e)}function tS(i,t){let e=oa(t,this.size,4);i.uniform4fv(this.addr,e)}function eS(i,t){let e=oa(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function nS(i,t){let e=oa(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function iS(i,t){let e=oa(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function sS(i,t){i.uniform1iv(this.addr,t)}function rS(i,t){i.uniform2iv(this.addr,t)}function aS(i,t){i.uniform3iv(this.addr,t)}function oS(i,t){i.uniform4iv(this.addr,t)}function lS(i,t){i.uniform1uiv(this.addr,t)}function cS(i,t){i.uniform2uiv(this.addr,t)}function hS(i,t){i.uniform3uiv(this.addr,t)}function uS(i,t){i.uniform4uiv(this.addr,t)}function dS(i,t,e){let n=this.cache,s=t.length,r=wh(e,s);_n(n,r)||(i.uniform1iv(this.addr,r),xn(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Dd:a=km;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function fS(i,t,e){let n=this.cache,s=t.length,r=wh(e,s);_n(n,r)||(i.uniform1iv(this.addr,r),xn(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Vm,r[a])}function pS(i,t,e){let n=this.cache,s=t.length,r=wh(e,s);_n(n,r)||(i.uniform1iv(this.addr,r),xn(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Hm,r[a])}function mS(i,t,e){let n=this.cache,s=t.length,r=wh(e,s);_n(n,r)||(i.uniform1iv(this.addr,r),xn(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||zm,r[a])}function gS(i){switch(i){case 5126:return Ky;case 35664:return jy;case 35665:return Qy;case 35666:return tS;case 35674:return eS;case 35675:return nS;case 35676:return iS;case 5124:case 35670:return sS;case 35667:case 35671:return rS;case 35668:case 35672:return aS;case 35669:case 35673:return oS;case 5125:return lS;case 36294:return cS;case 36295:return hS;case 36296:return uS;case 35678:case 36198:case 36298:case 36306:case 35682:return dS;case 35679:case 36299:case 36307:return fS;case 35680:case 36300:case 36308:case 36293:return pS;case 36289:case 36303:case 36311:case 36292:return mS}}var Nd=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Jy(e.type)}},Ud=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=gS(e.type)}},Fd=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Pd=/(\w+)(\])?(\[|\.)?/g;function Em(i,t){i.seq.push(t),i.map[t.id]=t}function _S(i,t,e){let n=i.name,s=n.length;for(Pd.lastIndex=0;;){let r=Pd.exec(n),a=Pd.lastIndex,o=r[1],c=r[2]==="]",h=r[3];if(c&&(o=o|0),h===void 0||h==="["&&a+2===s){Em(e,h===void 0?new Nd(o,i,t):new Ud(o,i,t));break}else{let g=e.map[o];g===void 0&&(g=new Fd(o),Em(e,g)),e=g}}}var aa=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);_S(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Tm(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var xS=37297,vS=0;function yS(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Am=new Me;function SS(i){Ue._getMatrix(Am,Ue.workingColorSpace,i);let t=`mat3( ${Am.elements.map(e=>e.toFixed(4))} )`;switch(Ue.getTransfer(i)){case Ya:return[t,"LinearTransferOETF"];case Ge:return[t,"sRGBTransferOETF"];default:return fe("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Cm(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+yS(i.getShaderSource(t),o)}else return r}function MS(i,t){let e=SS(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var bS={[sd]:"Linear",[rd]:"Reinhard",[ad]:"Cineon",[od]:"ACESFilmic",[cd]:"AgX",[hd]:"Neutral",[ld]:"Custom"};function wS(i,t){let e=bS[t];return e===void 0?(fe("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var vh=new G;function ES(){Ue.getLuminanceCoefficients(vh);let i=vh.x.toFixed(4),t=vh.y.toFixed(4),e=vh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function TS(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zo).join(`
`)}function AS(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function CS(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function zo(i){return i!==""}function Rm(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Im(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var RS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Od(i){return i.replace(RS,PS)}var IS=new Map;function PS(i,t){let e=Ie[t];if(e===void 0){let n=IS.get(t);if(n!==void 0)e=Ie[n],fe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Od(e)}var LS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pm(i){return i.replace(LS,DS)}function DS(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Lm(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var NS={[Co]:"SHADOWMAP_TYPE_PCF",[ta]:"SHADOWMAP_TYPE_VSM"};function US(i){return NS[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var FS={[Ps]:"ENVMAP_TYPE_CUBE",[ar]:"ENVMAP_TYPE_CUBE",[Ro]:"ENVMAP_TYPE_CUBE_UV"};function OS(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":FS[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var BS={[ar]:"ENVMAP_MODE_REFRACTION"};function kS(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":BS[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var zS={[Cc]:"ENVMAP_BLENDING_MULTIPLY",[qp]:"ENVMAP_BLENDING_MIX",[Yp]:"ENVMAP_BLENDING_ADD"};function VS(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":zS[i.combine]||"ENVMAP_BLENDING_NONE"}function HS(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function $S(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=US(e),h=OS(e),u=kS(e),g=VS(e),d=HS(e),_=TS(e),y=AS(r),C=s.createProgram(),p,f,N=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(zo).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(zo).join(`
`),f.length>0&&(f+=`
`)):(p=[Lm(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zo).join(`
`),f=[Lm(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMap?"#define "+g:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ii?"#define TONE_MAPPING":"",e.toneMapping!==Ii?Ie.tonemapping_pars_fragment:"",e.toneMapping!==Ii?wS("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ie.colorspace_pars_fragment,MS("linearToOutputTexel",e.outputColorSpace),ES(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(zo).join(`
`)),a=Od(a),a=Rm(a,e),a=Im(a,e),o=Od(o),o=Rm(o,e),o=Im(o,e),a=Pm(a),o=Pm(o),e.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,p=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",e.glslVersion===vd?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===vd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let O=N+p+a,A=N+f+o,b=Tm(s,s.VERTEX_SHADER,O),D=Tm(s,s.FRAGMENT_SHADER,A);s.attachShader(C,b),s.attachShader(C,D),e.index0AttributeName!==void 0?s.bindAttribLocation(C,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(C,0,"position"),s.linkProgram(C);function $(W){if(i.debug.checkShaderErrors){let et=s.getProgramInfoLog(C)||"",st=s.getShaderInfoLog(b)||"",Z=s.getShaderInfoLog(D)||"",K=et.trim(),lt=st.trim(),ht=Z.trim(),bt=!0,ut=!0;if(s.getProgramParameter(C,s.LINK_STATUS)===!1)if(bt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,C,b,D);else{let St=Cm(s,b,"vertex"),yt=Cm(s,D,"fragment");ge("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(C,s.VALIDATE_STATUS)+`

Material Name: `+W.name+`
Material Type: `+W.type+`

Program Info Log: `+K+`
`+St+`
`+yt)}else K!==""?fe("WebGLProgram: Program Info Log:",K):(lt===""||ht==="")&&(ut=!1);ut&&(W.diagnostics={runnable:bt,programLog:K,vertexShader:{log:lt,prefix:p},fragmentShader:{log:ht,prefix:f}})}s.deleteShader(b),s.deleteShader(D),E=new aa(s,C),L=CS(s,C)}let E;this.getUniforms=function(){return E===void 0&&$(this),E};let L;this.getAttributes=function(){return L===void 0&&$(this),L};let V=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=s.getProgramParameter(C,xS)),V},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(C),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=vS++,this.cacheKey=t,this.usedTimes=1,this.program=C,this.vertexShader=b,this.fragmentShader=D,this}var GS=0,Bd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new kd(t),e.set(t,n)),n}},kd=class{constructor(t){this.id=GS++,this.code=t,this.usedTimes=0}};function WS(i){return i===Ns||i===Uo||i===Fo}function XS(i,t,e,n,s,r){let a=new Xr,o=new Bd,c=new Set,h=[],u=new Map,g=n.logarithmicDepthBuffer,d=n.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(E){return c.add(E),E===0?"uv":`uv${E}`}function C(E,L,V,W,et,st){let Z=W.fog,K=et.geometry,lt=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?W.environment:null,ht=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,bt=t.get(E.envMap||lt,ht),ut=bt&&bt.mapping===Ro?bt.image.height:null,St=_[E.type];E.precision!==null&&(d=n.getMaxPrecision(E.precision),d!==E.precision&&fe("WebGLProgram.getParameters:",E.precision,"not supported, using",d,"instead."));let yt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,$t=yt!==void 0?yt.length:0,Xt=0;K.morphAttributes.position!==void 0&&(Xt=1),K.morphAttributes.normal!==void 0&&(Xt=2),K.morphAttributes.color!==void 0&&(Xt=3);let ke,Ee,Ne,pt;if(St){let Re=Zn[St];ke=Re.vertexShader,Ee=Re.fragmentShader}else{ke=E.vertexShader,Ee=E.fragmentShader;let Re=o.getVertexShaderStage(E),Te=o.getFragmentShaderStage(E);o.update(E,Re,Te),Ne=Re.id,pt=Te.id}let _t=i.getRenderTarget(),At=i.state.buffers.depth.getReversed(),ee=et.isInstancedMesh===!0,Gt=et.isBatchedMesh===!0,ce=!!E.map,ae=!!E.matcap,at=!!bt,Et=!!E.aoMap,H=!!E.lightMap,Tt=!!E.bumpMap&&E.wireframe===!1,Ut=!!E.normalMap,oe=!!E.displacementMap,re=!!E.emissiveMap,ue=!!E.metalnessMap,me=!!E.roughnessMap,z=E.anisotropy>0,Pe=E.clearcoat>0,pe=E.dispersion>0,P=E.retroreflectivity>0,S=E.iridescence>0,X=E.sheen>0,rt=E.transmission>0,dt=z&&!!E.anisotropyMap,Pt=Pe&&!!E.clearcoatMap,Nt=Pe&&!!E.clearcoatNormalMap,ft=Pe&&!!E.clearcoatRoughnessMap,xt=S&&!!E.iridescenceMap,Ft=S&&!!E.iridescenceThicknessMap,ne=X&&!!E.sheenColorMap,Vt=X&&!!E.sheenRoughnessMap,Bt=!!E.specularMap,ie=!!E.specularColorMap,he=!!E.specularIntensityMap,Se=rt&&!!E.transmissionMap,Y=rt&&!!E.thicknessMap,Dt=!!E.gradientMap,gt=!!E.alphaMap,kt=E.alphaTest>0,Ht=!!E.alphaHash,Mt=!!E.extensions,se=Ii;E.toneMapped&&(_t===null||_t.isXRRenderTarget===!0)&&(se=i.toneMapping);let jt={shaderID:St,shaderType:E.type,shaderName:E.name,vertexShader:ke,fragmentShader:Ee,defines:E.defines,customVertexShaderID:Ne,customFragmentShaderID:pt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:d,batching:Gt,batchingColor:Gt&&et._colorsTexture!==null,instancing:ee,instancingColor:ee&&et.instanceColor!==null,instancingMorph:ee&&et.morphTexture!==null,outputColorSpace:_t===null?i.outputColorSpace:_t.isXRRenderTarget===!0?_t.texture.colorSpace:Ue.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:ce,matcap:ae,envMap:at,envMapMode:at&&bt.mapping,envMapCubeUVHeight:ut,aoMap:Et,lightMap:H,bumpMap:Tt,normalMap:Ut,displacementMap:oe,emissiveMap:re,normalMapObjectSpace:Ut&&E.normalMapType===Kp,normalMapTangentSpace:Ut&&E.normalMapType===mh,packedNormalMap:Ut&&E.normalMapType===mh&&WS(E.normalMap.format),metalnessMap:ue,roughnessMap:me,anisotropy:z,anisotropyMap:dt,clearcoat:Pe,clearcoatMap:Pt,clearcoatNormalMap:Nt,clearcoatRoughnessMap:ft,dispersion:pe,retroreflection:P,iridescence:S,iridescenceMap:xt,iridescenceThicknessMap:Ft,sheen:X,sheenColorMap:ne,sheenRoughnessMap:Vt,specularMap:Bt,specularColorMap:ie,specularIntensityMap:he,transmission:rt,transmissionMap:Se,thicknessMap:Y,gradientMap:Dt,opaque:E.transparent===!1&&E.blending===ea&&E.alphaToCoverage===!1,alphaMap:gt,alphaTest:kt,alphaHash:Ht,combine:E.combine,mapUv:ce&&y(E.map.channel),aoMapUv:Et&&y(E.aoMap.channel),lightMapUv:H&&y(E.lightMap.channel),bumpMapUv:Tt&&y(E.bumpMap.channel),normalMapUv:Ut&&y(E.normalMap.channel),displacementMapUv:oe&&y(E.displacementMap.channel),emissiveMapUv:re&&y(E.emissiveMap.channel),metalnessMapUv:ue&&y(E.metalnessMap.channel),roughnessMapUv:me&&y(E.roughnessMap.channel),anisotropyMapUv:dt&&y(E.anisotropyMap.channel),clearcoatMapUv:Pt&&y(E.clearcoatMap.channel),clearcoatNormalMapUv:Nt&&y(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ft&&y(E.clearcoatRoughnessMap.channel),iridescenceMapUv:xt&&y(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ft&&y(E.iridescenceThicknessMap.channel),sheenColorMapUv:ne&&y(E.sheenColorMap.channel),sheenRoughnessMapUv:Vt&&y(E.sheenRoughnessMap.channel),specularMapUv:Bt&&y(E.specularMap.channel),specularColorMapUv:ie&&y(E.specularColorMap.channel),specularIntensityMapUv:he&&y(E.specularIntensityMap.channel),transmissionMapUv:Se&&y(E.transmissionMap.channel),thicknessMapUv:Y&&y(E.thicknessMap.channel),alphaMapUv:gt&&y(E.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Ut||z),vertexNormals:!!K.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:et.isPoints===!0&&!!K.attributes.uv&&(ce||gt),fog:!!Z,useFog:E.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||K.attributes.normal===void 0&&Ut===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:At,skinning:et.isSkinnedMesh===!0,hasPositionAttribute:K.attributes.position!==void 0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:$t,morphTextureStride:Xt,numSunLights:L.sun.length,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numSunLightShadows:L.sunShadowMap.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numLightProbeGrids:st.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&V.length>0,shadowMapType:i.shadowMap.type,toneMapping:se,decodeVideoTexture:ce&&E.map.isVideoTexture===!0&&Ue.getTransfer(E.map.colorSpace)===Ge,decodeVideoTextureEmissive:re&&E.emissiveMap.isVideoTexture===!0&&Ue.getTransfer(E.emissiveMap.colorSpace)===Ge,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===$i,flipSided:E.side===Yn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Mt&&E.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Mt&&E.extensions.multiDraw===!0||Gt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return jt.vertexUv1s=c.has(1),jt.vertexUv2s=c.has(2),jt.vertexUv3s=c.has(3),c.clear(),jt}function p(E){let L=[];if(E.shaderID?L.push(E.shaderID):(L.push(E.customVertexShaderID),L.push(E.customFragmentShaderID)),E.defines!==void 0)for(let V in E.defines)L.push(V),L.push(E.defines[V]);return E.isRawShaderMaterial===!1&&(f(L,E),N(L,E),L.push(i.outputColorSpace)),L.push(E.customProgramCacheKey),L.join()}function f(E,L){E.push(L.precision),E.push(L.outputColorSpace),E.push(L.envMapMode),E.push(L.envMapCubeUVHeight),E.push(L.mapUv),E.push(L.alphaMapUv),E.push(L.lightMapUv),E.push(L.aoMapUv),E.push(L.bumpMapUv),E.push(L.normalMapUv),E.push(L.displacementMapUv),E.push(L.emissiveMapUv),E.push(L.metalnessMapUv),E.push(L.roughnessMapUv),E.push(L.anisotropyMapUv),E.push(L.clearcoatMapUv),E.push(L.clearcoatNormalMapUv),E.push(L.clearcoatRoughnessMapUv),E.push(L.iridescenceMapUv),E.push(L.iridescenceThicknessMapUv),E.push(L.sheenColorMapUv),E.push(L.sheenRoughnessMapUv),E.push(L.specularMapUv),E.push(L.specularColorMapUv),E.push(L.specularIntensityMapUv),E.push(L.transmissionMapUv),E.push(L.thicknessMapUv),E.push(L.combine),E.push(L.fogExp2),E.push(L.sizeAttenuation),E.push(L.morphTargetsCount),E.push(L.morphAttributeCount),E.push(L.numSunLights),E.push(L.numDirLights),E.push(L.numPointLights),E.push(L.numSpotLights),E.push(L.numSpotLightMaps),E.push(L.numHemiLights),E.push(L.numRectAreaLights),E.push(L.numSunLightShadows),E.push(L.numDirLightShadows),E.push(L.numPointLightShadows),E.push(L.numSpotLightShadows),E.push(L.numSpotLightShadowsWithMaps),E.push(L.numLightProbes),E.push(L.shadowMapType),E.push(L.toneMapping),E.push(L.numClippingPlanes),E.push(L.numClipIntersection),E.push(L.depthPacking)}function N(E,L){a.disableAll(),L.instancing&&a.enable(0),L.instancingColor&&a.enable(1),L.instancingMorph&&a.enable(2),L.matcap&&a.enable(3),L.envMap&&a.enable(4),L.normalMapObjectSpace&&a.enable(5),L.normalMapTangentSpace&&a.enable(6),L.clearcoat&&a.enable(7),L.iridescence&&a.enable(8),L.alphaTest&&a.enable(9),L.vertexColors&&a.enable(10),L.vertexAlphas&&a.enable(11),L.vertexUv1s&&a.enable(12),L.vertexUv2s&&a.enable(13),L.vertexUv3s&&a.enable(14),L.vertexTangents&&a.enable(15),L.anisotropy&&a.enable(16),L.alphaHash&&a.enable(17),L.batching&&a.enable(18),L.dispersion&&a.enable(19),L.retroreflection&&a.enable(24),L.batchingColor&&a.enable(20),L.gradientMap&&a.enable(21),L.packedNormalMap&&a.enable(22),L.vertexNormals&&a.enable(23),E.push(a.mask),a.disableAll(),L.fog&&a.enable(0),L.useFog&&a.enable(1),L.flatShading&&a.enable(2),L.logarithmicDepthBuffer&&a.enable(3),L.reversedDepthBuffer&&a.enable(4),L.skinning&&a.enable(5),L.morphTargets&&a.enable(6),L.morphNormals&&a.enable(7),L.morphColors&&a.enable(8),L.premultipliedAlpha&&a.enable(9),L.shadowMapEnabled&&a.enable(10),L.doubleSided&&a.enable(11),L.flipSided&&a.enable(12),L.useDepthPacking&&a.enable(13),L.dithering&&a.enable(14),L.transmission&&a.enable(15),L.sheen&&a.enable(16),L.opaque&&a.enable(17),L.pointsUvs&&a.enable(18),L.decodeVideoTexture&&a.enable(19),L.decodeVideoTextureEmissive&&a.enable(20),L.alphaToCoverage&&a.enable(21),L.numLightProbeGrids>0&&a.enable(22),L.hasPositionAttribute&&a.enable(23),E.push(a.mask)}function O(E){let L=_[E.type],V;if(L){let W=Zn[L];V=Oo.clone(W.uniforms)}else V=E.uniforms;return V}function A(E,L){let V=u.get(L);return V!==void 0?++V.usedTimes:(V=new $S(i,L,E,s),h.push(V),u.set(L,V)),V}function b(E){if(--E.usedTimes===0){let L=h.indexOf(E);h[L]=h[h.length-1],h.pop(),u.delete(E.cacheKey),E.destroy()}}function D(E){o.remove(E)}function $(){o.dispose()}return{getParameters:C,getProgramCacheKey:p,getUniforms:O,acquireProgram:A,releaseProgram:b,releaseShaderCache:D,programs:h,dispose:$}}function qS(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function YS(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Dm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Nm(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d){let _=0;return d.isInstancedMesh&&(_+=2),d.isSkinnedMesh&&(_+=1),_}function o(d,_,y,C,p,f){let N=i[t];return N===void 0?(N={id:d.id,object:d,geometry:_,material:y,materialVariant:a(d),groupOrder:C,renderOrder:d.renderOrder,z:p,group:f},i[t]=N):(N.id=d.id,N.object=d,N.geometry=_,N.material=y,N.materialVariant=a(d),N.groupOrder=C,N.renderOrder=d.renderOrder,N.z=p,N.group=f),t++,N}function c(d,_,y,C,p,f,N){N.reversedDepth===!0&&(p=-p);let O=o(d,_,y,C,p,f);y.transmission>0?n.push(O):y.transparent===!0?s.push(O):e.push(O)}function h(d,_,y,C,p,f){let N=o(d,_,y,C,p,f);y.transmission>0?n.unshift(N):y.transparent===!0?s.unshift(N):e.unshift(N)}function u(d,_){e.length>1&&e.sort(d||YS),n.length>1&&n.sort(_||Dm),s.length>1&&s.sort(_||Dm)}function g(){for(let d=t,_=i.length;d<_;d++){let y=i[d];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:h,finish:g,sort:u}}function ZS(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Nm,i.set(n,[a])):s>=r.length?(a=new Nm,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function JS(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new G,color:new de};break;case"SpotLight":e={position:new G,direction:new G,color:new de,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new G,color:new de,distance:0,decay:0};break;case"HemisphereLight":e={direction:new G,skyColor:new de,groundColor:new de};break;case"RectAreaLight":e={color:new de,position:new G,halfWidth:new G,halfHeight:new G};break}return i[t.id]=e,e}}}function KS(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var jS=0;function QS(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function tM(i){let t=new JS,e=KS(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new G);let s=new G,r=new Ve,a=new Ve;function o(h){let u=0,g=0,d=0;for(let et=0;et<9;et++)n.probe[et].set(0,0,0);let _=0,y=0,C=0,p=0,f=0,N=0,O=0,A=0,b=0,D=0,$=0,E=0,L=0,V=0;h.sort(QS);for(let et=0,st=h.length;et<st;et++){let Z=h[et],K=Z.color,lt=Z.intensity,ht=Z.distance,bt=null;if(Z.shadow&&Z.shadow.map&&(Z.shadow.map.texture.format===Ns?bt=Z.shadow.map.texture:bt=Z.shadow.map.depthTexture||Z.shadow.map.texture),Z.isAmbientLight)u+=K.r*lt,g+=K.g*lt,d+=K.b*lt;else if(Z.isLightProbe){for(let ut=0;ut<9;ut++)n.probe[ut].addScaledVector(Z.sh.coefficients[ut],lt);V++}else if(Z.isSunLight){let ut=t.get(Z);if(ut.color.copy(Z.color).multiplyScalar(Z.intensity),Z.castShadow){let St=Z.shadow,yt=e.get(Z);yt.shadowIntensity=St.intensity,yt.shadowBias=St.bias,yt.shadowNormalBias=St.normalBias,yt.shadowRadius=St.radius,yt.shadowMapSize.copy(St.mapSize).multiply(St.getFrameExtents()),n.sunShadow[y]=yt,n.sunShadowMap[y]=bt;let $t=St.getViewportCount();for(let Xt=0;Xt<$t;Xt++)n.sunShadowMatrix[C+Xt]=St.getMatrix(Xt),n.sunShadowCascade[C+Xt]=St._cascadeData[Xt];C+=$t,y++}n.sun[_]=ut,_++}else if(Z.isDirectionalLight){let ut=t.get(Z);if(ut.color.copy(Z.color).multiplyScalar(Z.intensity),Z.castShadow){let St=Z.shadow,yt=e.get(Z);yt.shadowIntensity=St.intensity,yt.shadowBias=St.bias,yt.shadowNormalBias=St.normalBias,yt.shadowRadius=St.radius,yt.shadowMapSize=St.mapSize,n.directionalShadow[p]=yt,n.directionalShadowMap[p]=bt,n.directionalShadowMatrix[p]=Z.shadow.matrix,b++}n.directional[p]=ut,p++}else if(Z.isSpotLight){let ut=t.get(Z);ut.position.setFromMatrixPosition(Z.matrixWorld),ut.color.copy(K).multiplyScalar(lt),ut.distance=ht,ut.coneCos=Math.cos(Z.angle),ut.penumbraCos=Math.cos(Z.angle*(1-Z.penumbra)),ut.decay=Z.decay,n.spot[N]=ut;let St=Z.shadow;if(Z.map&&(n.spotLightMap[E]=Z.map,E++,St.updateMatrices(Z),Z.castShadow&&L++),n.spotLightMatrix[N]=St.matrix,Z.castShadow){let yt=e.get(Z);yt.shadowIntensity=St.intensity,yt.shadowBias=St.bias,yt.shadowNormalBias=St.normalBias,yt.shadowRadius=St.radius,yt.shadowMapSize=St.mapSize,n.spotShadow[N]=yt,n.spotShadowMap[N]=bt,$++}N++}else if(Z.isRectAreaLight){let ut=t.get(Z);ut.color.copy(K).multiplyScalar(lt),ut.halfWidth.set(Z.width*.5,0,0),ut.halfHeight.set(0,Z.height*.5,0),n.rectArea[O]=ut,O++}else if(Z.isPointLight){let ut=t.get(Z);if(ut.color.copy(Z.color).multiplyScalar(Z.intensity),ut.distance=Z.distance,ut.decay=Z.decay,Z.castShadow){let St=Z.shadow,yt=e.get(Z);yt.shadowIntensity=St.intensity,yt.shadowBias=St.bias,yt.shadowNormalBias=St.normalBias,yt.shadowRadius=St.radius,yt.shadowMapSize=St.mapSize,yt.shadowCameraNear=St.camera.near,yt.shadowCameraFar=St.camera.far,n.pointShadow[f]=yt,n.pointShadowMap[f]=bt,n.pointShadowMatrix[f]=Z.shadow.matrix,D++}n.point[f]=ut,f++}else if(Z.isHemisphereLight){let ut=t.get(Z);ut.skyColor.copy(Z.color).multiplyScalar(lt),ut.groundColor.copy(Z.groundColor).multiplyScalar(lt),n.hemi[A]=ut,A++}}O>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=zt.LTC_FLOAT_1,n.rectAreaLTC2=zt.LTC_FLOAT_2):(n.rectAreaLTC1=zt.LTC_HALF_1,n.rectAreaLTC2=zt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=g,n.ambient[2]=d;let W=n.hash;(W.sunLength!==_||W.directionalLength!==p||W.pointLength!==f||W.spotLength!==N||W.rectAreaLength!==O||W.hemiLength!==A||W.numSunShadows!==y||W.numDirectionalShadows!==b||W.numPointShadows!==D||W.numSpotShadows!==$||W.numSpotMaps!==E||W.numLightProbes!==V)&&(n.sun.length=_,n.directional.length=p,n.spot.length=N,n.rectArea.length=O,n.point.length=f,n.hemi.length=A,n.sunShadow.length=y,n.sunShadowMap.length=y,n.sunShadowMatrix.length=C,n.sunShadowCascade.length=C,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=D,n.pointShadowMap.length=D,n.pointShadowMatrix.length=D,n.spotShadow.length=$,n.spotShadowMap.length=$,n.spotLightMatrix.length=$+E-L,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=V,W.sunLength=_,W.directionalLength=p,W.pointLength=f,W.spotLength=N,W.rectAreaLength=O,W.hemiLength=A,W.numSunShadows=y,W.numDirectionalShadows=b,W.numPointShadows=D,W.numSpotShadows=$,W.numSpotMaps=E,W.numLightProbes=V,n.version=jS++)}function c(h,u){let g=0,d=0,_=0,y=0,C=0,p=0,f=u.matrixWorldInverse;for(let N=0,O=h.length;N<O;N++){let A=h[N];if(A.isSunLight){let b=n.sun[g];b.direction.setFromMatrixPosition(A.matrixWorld),b.direction.transformDirection(f),g++}else if(A.isDirectionalLight){let b=n.directional[d];b.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(f),d++}else if(A.isSpotLight){let b=n.spot[y];b.position.setFromMatrixPosition(A.matrixWorld),b.position.applyMatrix4(f),b.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(f),y++}else if(A.isRectAreaLight){let b=n.rectArea[C];b.position.setFromMatrixPosition(A.matrixWorld),b.position.applyMatrix4(f),a.identity(),r.copy(A.matrixWorld),r.premultiply(f),a.extractRotation(r),b.halfWidth.set(A.width*.5,0,0),b.halfHeight.set(0,A.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),C++}else if(A.isPointLight){let b=n.point[_];b.position.setFromMatrixPosition(A.matrixWorld),b.position.applyMatrix4(f),_++}else if(A.isHemisphereLight){let b=n.hemi[p];b.direction.setFromMatrixPosition(A.matrixWorld),b.direction.transformDirection(f),p++}}}return{setup:o,setupView:c,state:n}}function Um(i){let t=new tM(i),e=[],n=[],s=[];function r(d){g.camera=d,e.length=0,n.length=0,s.length=0}function a(d){e.push(d)}function o(d){n.push(d)}function c(d){s.push(d)}function h(){t.setup(e)}function u(d){t.setupView(e,d)}let g={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:g,setupLights:h,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function eM(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Um(i),t.set(s,[o])):r>=a.length?(o=new Um(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var nM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,iM=`uniform sampler2D shadow_pass;
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
}`,sM=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],rM=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],Fm=new Ve,ko=new G,Ld=new G;function aM(i,t,e){let n=new Yr,s=new Ot,r=new Ot,a=new We,o=new fc,c=new pc,h={},u=e.maxTextureSize,g={[Is]:Yn,[Yn]:Is,[$i]:$i},d=new An({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ot},radius:{value:4}},vertexShader:nM,fragmentShader:iM}),_=d.clone();_.defines.HORIZONTAL_PASS=1;let y=new hn;y.setAttribute("position",new Ye(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let C=new Tn(y,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Co;let f=this.type;this.render=function(D,$,E){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||D.length===0)return;this.type===Cp&&(fe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Co);let L=i.getRenderTarget(),V=i.getActiveCubeFace(),W=i.getActiveMipmapLevel(),et=i.state;et.setBlending(Gi),et.buffers.depth.getReversed()===!0?et.buffers.color.setClear(0,0,0,0):et.buffers.color.setClear(1,1,1,1),et.buffers.depth.setTest(!0),et.setScissorTest(!1);let st=f!==this.type;st&&$.traverse(function(Z){Z.material&&(Array.isArray(Z.material)?Z.material.forEach(K=>K.needsUpdate=!0):Z.material.needsUpdate=!0)});for(let Z=0,K=D.length;Z<K;Z++){let lt=D[Z],ht=lt.shadow;if(ht===void 0){fe("WebGLShadowMap:",lt,"has no shadow.");continue}if(ht.autoUpdate===!1&&ht.needsUpdate===!1)continue;s.copy(ht.mapSize);let bt=ht.getFrameExtents();s.multiply(bt),r.copy(ht.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/bt.x),s.x=r.x*bt.x,ht.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/bt.y),s.y=r.y*bt.y,ht.mapSize.y=r.y));let ut=i.state.buffers.depth.getReversed();if(ht.camera._reversedDepth=ut,ht.map===null||st===!0){if(ht.map!==null&&(ht.map.depthTexture!==null&&(ht.map.depthTexture.dispose(),ht.map.depthTexture=null),ht.map.dispose()),this.type===ta){if(lt.isPointLight){fe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}ht.map=new ei(s.x,s.y,{format:Ns,type:Li,minFilter:In,magFilter:In,generateMipmaps:!1}),ht.map.texture.name=lt.name+".shadowMap",ht.map.depthTexture=new Es(s.x,s.y,_i),ht.map.depthTexture.name=lt.name+".shadowMapDepth",ht.map.depthTexture.format=ki,ht.map.depthTexture.compareFunction=null,ht.map.depthTexture.minFilter=wn,ht.map.depthTexture.magFilter=wn}else lt.isPointLight?(ht.map=new Sh(s.x),ht.map.depthTexture=new rc(s.x,Pi)):(ht.map=new ei(s.x,s.y),ht.map.depthTexture=new Es(s.x,s.y,Pi)),ht.map.depthTexture.name=lt.name+".shadowMap",ht.map.depthTexture.format=ki,this.type===Co?(ht.map.depthTexture.compareFunction=ut?_h:gh,ht.map.depthTexture.minFilter=In,ht.map.depthTexture.magFilter=In):(ht.map.depthTexture.compareFunction=null,ht.map.depthTexture.minFilter=wn,ht.map.depthTexture.magFilter=wn);ht.camera.updateProjectionMatrix()}ht.map.isWebGLCubeRenderTarget!==!0&&(ht.map.width!==s.x||ht.map.height!==s.y)&&ht.map.setSize(s.x,s.y);let St=ht.map.isWebGLCubeRenderTarget?6:ht.getViewportCount();lt.isPointLight!==!0&&ht.updateMatrices(lt,E);for(let yt=0;yt<St;yt++){let $t=ht.getCamera(yt);if(lt.isPointLight){let Xt=ht.camera,ke=ht.matrix,Ee=lt.distance||Xt.far;Ee!==Xt.far&&(Xt.far=Ee,Xt.updateProjectionMatrix()),ko.setFromMatrixPosition(lt.matrixWorld),Xt.position.copy(ko),Ld.copy(Xt.position),Ld.add(sM[yt]),Xt.up.copy(rM[yt]),Xt.lookAt(Ld),Xt.updateMatrixWorld(),ke.makeTranslation(-ko.x,-ko.y,-ko.z),Fm.multiplyMatrices(Xt.projectionMatrix,Xt.matrixWorldInverse),ht._frustum.setFromProjectionMatrix(Fm,Xt.coordinateSystem,Xt.reversedDepth)}if(ht.map.isWebGLCubeRenderTarget)i.setRenderTarget(ht.map,yt),i.clear();else{yt===0&&(i.setRenderTarget(ht.map),i.clear());let Xt=ht.getViewport(yt);a.set(r.x*Xt.x,r.y*Xt.y,r.x*Xt.z,r.y*Xt.w),et.viewport(a)}n=ht.getFrustum(yt),A($,E,$t,lt,this.type)}ht.isPointLightShadow!==!0&&this.type===ta&&N(ht,E),ht.needsUpdate=!1}f=this.type,p.needsUpdate=!1,i.setRenderTarget(L,V,W)};function N(D,$){let E=t.update(C);d.defines.VSM_SAMPLES!==D.blurSamples&&(d.defines.VSM_SAMPLES=D.blurSamples,_.defines.VSM_SAMPLES=D.blurSamples,d.needsUpdate=!0,_.needsUpdate=!0),D.mapPass===null?D.mapPass=new ei(s.x,s.y,{format:Ns,type:Li}):(D.mapPass.width!==D.map.width||D.mapPass.height!==D.map.height)&&D.mapPass.setSize(D.map.width,D.map.height),d.uniforms.shadow_pass.value=D.map.depthTexture,d.uniforms.resolution.value.set(D.map.width,D.map.height),d.uniforms.radius.value=D.radius,i.setRenderTarget(D.mapPass),i.clear(),i.renderBufferDirect($,null,E,d,C,null),_.uniforms.shadow_pass.value=D.mapPass.texture,_.uniforms.resolution.value.set(D.map.width,D.map.height),_.uniforms.radius.value=D.radius,i.setRenderTarget(D.map),i.clear(),i.renderBufferDirect($,null,E,_,C,null)}function O(D,$,E,L){let V=null,W=E.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(W!==void 0)V=W;else if(V=E.isPointLight===!0?c:o,i.localClippingEnabled&&$.clipShadows===!0&&Array.isArray($.clippingPlanes)&&$.clippingPlanes.length!==0||$.displacementMap&&$.displacementScale!==0||$.alphaMap&&$.alphaTest>0||$.map&&$.alphaTest>0||$.alphaToCoverage===!0){let et=V.uuid,st=$.uuid,Z=h[et];Z===void 0&&(Z={},h[et]=Z);let K=Z[st];K===void 0&&(K=V.clone(),Z[st]=K,$.addEventListener("dispose",b)),V=K}if(V.visible=$.visible,V.wireframe=$.wireframe,L===ta?V.side=$.shadowSide!==null?$.shadowSide:$.side:V.side=$.shadowSide!==null?$.shadowSide:g[$.side],V.alphaMap=$.alphaMap,V.alphaTest=$.alphaToCoverage===!0?.5:$.alphaTest,V.map=$.map,V.clipShadows=$.clipShadows,V.clippingPlanes=$.clippingPlanes,V.clipIntersection=$.clipIntersection,V.displacementMap=$.displacementMap,V.displacementScale=$.displacementScale,V.displacementBias=$.displacementBias,V.wireframeLinewidth=$.wireframeLinewidth,V.linewidth=$.linewidth,E.isPointLight===!0&&V.isMeshDistanceMaterial===!0){let et=i.properties.get(V);et.light=E}return V}function A(D,$,E,L,V){if(D.visible===!1)return;if(D.layers.test($.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&V===ta)&&(!D.frustumCulled||D.intersectsFrustum(n))){D.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,D.matrixWorld);let st=t.update(D),Z=D.material;if(Array.isArray(Z)){let K=st.groups;for(let lt=0,ht=K.length;lt<ht;lt++){let bt=K[lt],ut=Z[bt.materialIndex];if(ut&&ut.visible){let St=O(D,ut,L,V);D.onBeforeShadow(i,D,$,E,st,St,bt),i.renderBufferDirect(E,null,st,St,D,bt),D.onAfterShadow(i,D,$,E,st,St,bt)}}}else if(Z.visible){let K=O(D,Z,L,V);D.onBeforeShadow(i,D,$,E,st,K,null),i.renderBufferDirect(E,null,st,K,D,null),D.onAfterShadow(i,D,$,E,st,K,null)}}let et=D.children;for(let st=0,Z=et.length;st<Z;st++)A(et[st],$,E,L,V)}function b(D){D.target.removeEventListener("dispose",b);for(let E in h){let L=h[E],V=D.target.uuid;V in L&&(L[V].dispose(),delete L[V])}}}function oM(i,t){function e(){let Y=!1,Dt=new We,gt=null,kt=new We(0,0,0,0);return{setMask:function(Ht){gt!==Ht&&!Y&&(i.colorMask(Ht,Ht,Ht,Ht),gt=Ht)},setLocked:function(Ht){Y=Ht},setClear:function(Ht,Mt,se,jt,Re){Re===!0&&(Ht*=jt,Mt*=jt,se*=jt),Dt.set(Ht,Mt,se,jt),kt.equals(Dt)===!1&&(i.clearColor(Ht,Mt,se,jt),kt.copy(Dt))},reset:function(){Y=!1,gt=null,kt.set(-1,0,0,0)}}}function n(){let Y=!1,Dt=!1,gt=null,kt=null,Ht=null;return{setReversed:function(Mt){if(Dt!==Mt){let se=t.get("EXT_clip_control");Mt?se.clipControlEXT(se.LOWER_LEFT_EXT,se.ZERO_TO_ONE_EXT):se.clipControlEXT(se.LOWER_LEFT_EXT,se.NEGATIVE_ONE_TO_ONE_EXT),Dt=Mt;let jt=Ht;Ht=null,this.setClear(jt)}},getReversed:function(){return Dt},setTest:function(Mt){Mt?_t(i.DEPTH_TEST):At(i.DEPTH_TEST)},setMask:function(Mt){gt!==Mt&&!Y&&(i.depthMask(Mt),gt=Mt)},setFunc:function(Mt){if(Dt&&(Mt=lm[Mt]),kt!==Mt){switch(Mt){case Vl:i.depthFunc(i.NEVER);break;case Hl:i.depthFunc(i.ALWAYS);break;case $l:i.depthFunc(i.LESS);break;case Vr:i.depthFunc(i.LEQUAL);break;case Gl:i.depthFunc(i.EQUAL);break;case Wl:i.depthFunc(i.GEQUAL);break;case Xl:i.depthFunc(i.GREATER);break;case ql:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}kt=Mt}},setLocked:function(Mt){Y=Mt},setClear:function(Mt){Ht!==Mt&&(Ht=Mt,Dt&&(Mt=1-Mt),i.clearDepth(Mt))},reset:function(){Y=!1,gt=null,kt=null,Ht=null,Dt=!1}}}function s(){let Y=!1,Dt=null,gt=null,kt=null,Ht=null,Mt=null,se=null,jt=null,Re=null;return{setTest:function(Te){Y||(Te?_t(i.STENCIL_TEST):At(i.STENCIL_TEST))},setMask:function(Te){Dt!==Te&&!Y&&(i.stencilMask(Te),Dt=Te)},setFunc:function(Te,un,Hn){(gt!==Te||kt!==un||Ht!==Hn)&&(i.stencilFunc(Te,un,Hn),gt=Te,kt=un,Ht=Hn)},setOp:function(Te,un,Hn){(Mt!==Te||se!==un||jt!==Hn)&&(i.stencilOp(Te,un,Hn),Mt=Te,se=un,jt=Hn)},setLocked:function(Te){Y=Te},setClear:function(Te){Re!==Te&&(i.clearStencil(Te),Re=Te)},reset:function(){Y=!1,Dt=null,gt=null,kt=null,Ht=null,Mt=null,se=null,jt=null,Re=null}}}let r=new e,a=new n,o=new s,c=new WeakMap,h=new WeakMap,u={},g={},d={},_=new WeakMap,y=[],C=null,p=!1,f=null,N=null,O=null,A=null,b=null,D=null,$=null,E=new de(0,0,0),L=0,V=!1,W=null,et=null,st=null,Z=null,K=null,lt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ht=!1,bt=0,ut=i.getParameter(i.VERSION);ut.indexOf("WebGL")!==-1?(bt=parseFloat(/^WebGL (\d)/.exec(ut)[1]),ht=bt>=1):ut.indexOf("OpenGL ES")!==-1&&(bt=parseFloat(/^OpenGL ES (\d)/.exec(ut)[1]),ht=bt>=2);let St=null,yt={},$t=i.getParameter(i.SCISSOR_BOX),Xt=i.getParameter(i.VIEWPORT),ke=new We().fromArray($t),Ee=new We().fromArray(Xt);function Ne(Y,Dt,gt,kt){let Ht=new Uint8Array(4),Mt=i.createTexture();i.bindTexture(Y,Mt),i.texParameteri(Y,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(Y,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let se=0;se<gt;se++)Y===i.TEXTURE_3D||Y===i.TEXTURE_2D_ARRAY?i.texImage3D(Dt,0,i.RGBA,1,1,kt,0,i.RGBA,i.UNSIGNED_BYTE,Ht):i.texImage2D(Dt+se,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ht);return Mt}let pt={};pt[i.TEXTURE_2D]=Ne(i.TEXTURE_2D,i.TEXTURE_2D,1),pt[i.TEXTURE_CUBE_MAP]=Ne(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),pt[i.TEXTURE_2D_ARRAY]=Ne(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),pt[i.TEXTURE_3D]=Ne(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),_t(i.DEPTH_TEST),a.setFunc(Vr),Tt(!1),Ut(ju),_t(i.CULL_FACE),Et(Gi);function _t(Y){u[Y]!==!0&&(i.enable(Y),u[Y]=!0)}function At(Y){u[Y]!==!1&&(i.disable(Y),u[Y]=!1)}function ee(Y,Dt){return d[Y]!==Dt?(i.bindFramebuffer(Y,Dt),d[Y]=Dt,Y===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=Dt),Y===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=Dt),!0):!1}function Gt(Y,Dt){let gt=y,kt=!1;if(Y){gt=_.get(Dt),gt===void 0&&(gt=[],_.set(Dt,gt));let Ht=Y.textures;if(gt.length!==Ht.length||gt[0]!==i.COLOR_ATTACHMENT0){for(let Mt=0,se=Ht.length;Mt<se;Mt++)gt[Mt]=i.COLOR_ATTACHMENT0+Mt;gt.length=Ht.length,kt=!0}}else gt[0]!==i.BACK&&(gt[0]=i.BACK,kt=!0);kt&&i.drawBuffers(gt)}function ce(Y){return C!==Y?(i.useProgram(Y),C=Y,!0):!1}let ae={[rr]:i.FUNC_ADD,[Ip]:i.FUNC_SUBTRACT,[Pp]:i.FUNC_REVERSE_SUBTRACT};ae[Lp]=i.MIN,ae[Dp]=i.MAX;let at={[Np]:i.ZERO,[Up]:i.ONE,[Fp]:i.SRC_COLOR,[nd]:i.SRC_ALPHA,[Hp]:i.SRC_ALPHA_SATURATE,[zp]:i.DST_COLOR,[Bp]:i.DST_ALPHA,[Op]:i.ONE_MINUS_SRC_COLOR,[id]:i.ONE_MINUS_SRC_ALPHA,[Vp]:i.ONE_MINUS_DST_COLOR,[kp]:i.ONE_MINUS_DST_ALPHA,[$p]:i.CONSTANT_COLOR,[Gp]:i.ONE_MINUS_CONSTANT_COLOR,[Wp]:i.CONSTANT_ALPHA,[Xp]:i.ONE_MINUS_CONSTANT_ALPHA};function Et(Y,Dt,gt,kt,Ht,Mt,se,jt,Re,Te){if(Y===Gi){p===!0&&(At(i.BLEND),p=!1);return}if(p===!1&&(_t(i.BLEND),p=!0),Y!==Rp){if(Y!==f||Te!==V){if((N!==rr||b!==rr)&&(i.blendEquation(i.FUNC_ADD),N=rr,b=rr),Te)switch(Y){case ea:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qu:i.blendFunc(i.ONE,i.ONE);break;case td:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ed:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ge("WebGLState: Invalid blending: ",Y);break}else switch(Y){case ea:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qu:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case td:ge("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ed:ge("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ge("WebGLState: Invalid blending: ",Y);break}O=null,A=null,D=null,$=null,E.set(0,0,0),L=0,f=Y,V=Te}return}Ht=Ht||Dt,Mt=Mt||gt,se=se||kt,(Dt!==N||Ht!==b)&&(i.blendEquationSeparate(ae[Dt],ae[Ht]),N=Dt,b=Ht),(gt!==O||kt!==A||Mt!==D||se!==$)&&(i.blendFuncSeparate(at[gt],at[kt],at[Mt],at[se]),O=gt,A=kt,D=Mt,$=se),(jt.equals(E)===!1||Re!==L)&&(i.blendColor(jt.r,jt.g,jt.b,Re),E.copy(jt),L=Re),f=Y,V=!1}function H(Y,Dt){Y.side===$i?At(i.CULL_FACE):_t(i.CULL_FACE);let gt=Y.side===Yn;Dt&&(gt=!gt),Tt(gt),Y.blending===ea&&Y.transparent===!1?Et(Gi):Et(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),a.setFunc(Y.depthFunc),a.setTest(Y.depthTest),a.setMask(Y.depthWrite),r.setMask(Y.colorWrite);let kt=Y.stencilWrite;o.setTest(kt),kt&&(o.setMask(Y.stencilWriteMask),o.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),o.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),re(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?_t(i.SAMPLE_ALPHA_TO_COVERAGE):At(i.SAMPLE_ALPHA_TO_COVERAGE)}function Tt(Y){W!==Y&&(Y?i.frontFace(i.CW):i.frontFace(i.CCW),W=Y)}function Ut(Y){Y!==Tp?(_t(i.CULL_FACE),Y!==et&&(Y===ju?i.cullFace(i.BACK):Y===Ap?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):At(i.CULL_FACE),et=Y}function oe(Y){Y!==st&&(ht&&i.lineWidth(Y),st=Y)}function re(Y,Dt,gt){Y?(_t(i.POLYGON_OFFSET_FILL),(Z!==Dt||K!==gt)&&(Z=Dt,K=gt,a.getReversed()&&(Dt=-Dt),i.polygonOffset(Dt,gt))):At(i.POLYGON_OFFSET_FILL)}function ue(Y){Y?_t(i.SCISSOR_TEST):At(i.SCISSOR_TEST)}function me(Y){Y===void 0&&(Y=i.TEXTURE0+lt-1),St!==Y&&(i.activeTexture(Y),St=Y)}function z(Y,Dt,gt){gt===void 0&&(St===null?gt=i.TEXTURE0+lt-1:gt=St);let kt=yt[gt];kt===void 0&&(kt={type:void 0,texture:void 0},yt[gt]=kt),(kt.type!==Y||kt.texture!==Dt)&&(St!==gt&&(i.activeTexture(gt),St=gt),i.bindTexture(Y,Dt||pt[Y]),kt.type=Y,kt.texture=Dt)}function Pe(){let Y=yt[St];Y!==void 0&&Y.type!==void 0&&(i.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function pe(){try{i.compressedTexImage2D(...arguments)}catch(Y){ge("WebGLState:",Y)}}function P(){try{i.compressedTexImage3D(...arguments)}catch(Y){ge("WebGLState:",Y)}}function S(){try{i.texSubImage2D(...arguments)}catch(Y){ge("WebGLState:",Y)}}function X(){try{i.texSubImage3D(...arguments)}catch(Y){ge("WebGLState:",Y)}}function rt(){try{i.compressedTexSubImage2D(...arguments)}catch(Y){ge("WebGLState:",Y)}}function dt(){try{i.compressedTexSubImage3D(...arguments)}catch(Y){ge("WebGLState:",Y)}}function Pt(){try{i.texStorage2D(...arguments)}catch(Y){ge("WebGLState:",Y)}}function Nt(){try{i.texStorage3D(...arguments)}catch(Y){ge("WebGLState:",Y)}}function ft(){try{i.texImage2D(...arguments)}catch(Y){ge("WebGLState:",Y)}}function xt(){try{i.texImage3D(...arguments)}catch(Y){ge("WebGLState:",Y)}}function Ft(Y){return g[Y]!==void 0?g[Y]:i.getParameter(Y)}function ne(Y,Dt){g[Y]!==Dt&&(i.pixelStorei(Y,Dt),g[Y]=Dt)}function Vt(Y){ke.equals(Y)===!1&&(i.scissor(Y.x,Y.y,Y.z,Y.w),ke.copy(Y))}function Bt(Y){Ee.equals(Y)===!1&&(i.viewport(Y.x,Y.y,Y.z,Y.w),Ee.copy(Y))}function ie(Y,Dt){let gt=h.get(Dt);gt===void 0&&(gt=new WeakMap,h.set(Dt,gt));let kt=gt.get(Y);kt===void 0&&(kt=i.getUniformBlockIndex(Dt,Y.name),gt.set(Y,kt))}function he(Y,Dt){let kt=h.get(Dt).get(Y);c.get(Dt)!==kt&&(i.uniformBlockBinding(Dt,kt,Y.__bindingPointIndex),c.set(Dt,kt))}function Se(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},g={},St=null,yt={},d={},_=new WeakMap,y=[],C=null,p=!1,f=null,N=null,O=null,A=null,b=null,D=null,$=null,E=new de(0,0,0),L=0,V=!1,W=null,et=null,st=null,Z=null,K=null,ke.set(0,0,i.canvas.width,i.canvas.height),Ee.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:_t,disable:At,bindFramebuffer:ee,drawBuffers:Gt,useProgram:ce,setBlending:Et,setMaterial:H,setFlipSided:Tt,setCullFace:Ut,setLineWidth:oe,setPolygonOffset:re,setScissorTest:ue,activeTexture:me,bindTexture:z,unbindTexture:Pe,compressedTexImage2D:pe,compressedTexImage3D:P,texImage2D:ft,texImage3D:xt,pixelStorei:ne,getParameter:Ft,updateUBOMapping:ie,uniformBlockBinding:he,texStorage2D:Pt,texStorage3D:Nt,texSubImage2D:S,texSubImage3D:X,compressedTexSubImage2D:rt,compressedTexSubImage3D:dt,scissor:Vt,viewport:Bt,reset:Se}}function lM(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Ot,u=new WeakMap,g=new Set,d,_=new WeakMap,y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(P,S){return y?new OffscreenCanvas(P,S):Za("canvas")}function p(P,S,X){let rt=1,dt=pe(P);if((dt.width>X||dt.height>X)&&(rt=X/Math.max(dt.width,dt.height)),rt<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let Pt=Math.floor(rt*dt.width),Nt=Math.floor(rt*dt.height);d===void 0&&(d=C(Pt,Nt));let ft=S?C(Pt,Nt):d;return ft.width=Pt,ft.height=Nt,ft.getContext("2d").drawImage(P,0,0,Pt,Nt),fe("WebGLRenderer: Texture has been resized from ("+dt.width+"x"+dt.height+") to ("+Pt+"x"+Nt+")."),ft}else return"data"in P&&fe("WebGLRenderer: Image in DataTexture is too big ("+dt.width+"x"+dt.height+")."),P;return P}function f(P){return P.generateMipmaps}function N(P){i.generateMipmap(P)}function O(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function A(P,S,X,rt,dt,Pt=!1){if(P!==null){if(i[P]!==void 0)return i[P];fe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Nt;rt&&(Nt=t.get("EXT_texture_norm16"),Nt||fe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ft=S;if(S===i.RED&&(X===i.FLOAT&&(ft=i.R32F),X===i.HALF_FLOAT&&(ft=i.R16F),X===i.UNSIGNED_BYTE&&(ft=i.R8),X===i.UNSIGNED_SHORT&&Nt&&(ft=Nt.R16_EXT),X===i.SHORT&&Nt&&(ft=Nt.R16_SNORM_EXT)),S===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(ft=i.R8UI),X===i.UNSIGNED_SHORT&&(ft=i.R16UI),X===i.UNSIGNED_INT&&(ft=i.R32UI),X===i.BYTE&&(ft=i.R8I),X===i.SHORT&&(ft=i.R16I),X===i.INT&&(ft=i.R32I)),S===i.RG&&(X===i.FLOAT&&(ft=i.RG32F),X===i.HALF_FLOAT&&(ft=i.RG16F),X===i.UNSIGNED_BYTE&&(ft=i.RG8),X===i.UNSIGNED_SHORT&&Nt&&(ft=Nt.RG16_EXT),X===i.SHORT&&Nt&&(ft=Nt.RG16_SNORM_EXT)),S===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(ft=i.RG8UI),X===i.UNSIGNED_SHORT&&(ft=i.RG16UI),X===i.UNSIGNED_INT&&(ft=i.RG32UI),X===i.BYTE&&(ft=i.RG8I),X===i.SHORT&&(ft=i.RG16I),X===i.INT&&(ft=i.RG32I)),S===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(ft=i.RGB8UI),X===i.UNSIGNED_SHORT&&(ft=i.RGB16UI),X===i.UNSIGNED_INT&&(ft=i.RGB32UI),X===i.BYTE&&(ft=i.RGB8I),X===i.SHORT&&(ft=i.RGB16I),X===i.INT&&(ft=i.RGB32I)),S===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(ft=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(ft=i.RGBA16UI),X===i.UNSIGNED_INT&&(ft=i.RGBA32UI),X===i.BYTE&&(ft=i.RGBA8I),X===i.SHORT&&(ft=i.RGBA16I),X===i.INT&&(ft=i.RGBA32I)),S===i.RGB&&(X===i.UNSIGNED_SHORT&&Nt&&(ft=Nt.RGB16_EXT),X===i.SHORT&&Nt&&(ft=Nt.RGB16_SNORM_EXT),X===i.UNSIGNED_INT_5_9_9_9_REV&&(ft=i.RGB9_E5),X===i.UNSIGNED_INT_10F_11F_11F_REV&&(ft=i.R11F_G11F_B10F)),S===i.RGBA){let xt=Pt?Ya:Ue.getTransfer(dt);X===i.FLOAT&&(ft=i.RGBA32F),X===i.HALF_FLOAT&&(ft=i.RGBA16F),X===i.UNSIGNED_BYTE&&(ft=xt===Ge?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT&&Nt&&(ft=Nt.RGBA16_EXT),X===i.SHORT&&Nt&&(ft=Nt.RGBA16_SNORM_EXT),X===i.UNSIGNED_SHORT_4_4_4_4&&(ft=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(ft=i.RGB5_A1)}return(ft===i.R16F||ft===i.R32F||ft===i.RG16F||ft===i.RG32F||ft===i.RGBA16F||ft===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ft}function b(P,S){let X;return P?S===null||S===Pi||S===ia?X=i.DEPTH24_STENCIL8:S===_i?X=i.DEPTH32F_STENCIL8:S===na&&(X=i.DEPTH24_STENCIL8,fe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Pi||S===ia?X=i.DEPTH_COMPONENT24:S===_i?X=i.DEPTH_COMPONENT32F:S===na&&(X=i.DEPTH_COMPONENT16),X}function D(P,S){return f(P)===!0||P.isFramebufferTexture&&P.minFilter!==wn&&P.minFilter!==In?Math.log2(Math.max(S.width,S.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?S.mipmaps.length:1}function $(P){let S=P.target;S.removeEventListener("dispose",$),L(S),S.isVideoTexture&&u.delete(S),S.isHTMLTexture&&g.delete(S)}function E(P){let S=P.target;S.removeEventListener("dispose",E),W(S)}function L(P){let S=n.get(P);if(S.__webglInit===void 0)return;let X=P.source,rt=_.get(X);if(rt){let dt=rt[S.__cacheKey];dt.usedTimes--,dt.usedTimes===0&&V(P),Object.keys(rt).length===0&&_.delete(X)}n.remove(P)}function V(P){let S=n.get(P);i.deleteTexture(S.__webglTexture);let X=P.source,rt=_.get(X);delete rt[S.__cacheKey],a.memory.textures--}function W(P){let S=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let rt=0;rt<6;rt++){if(Array.isArray(S.__webglFramebuffer[rt]))for(let dt=0;dt<S.__webglFramebuffer[rt].length;dt++)i.deleteFramebuffer(S.__webglFramebuffer[rt][dt]);else i.deleteFramebuffer(S.__webglFramebuffer[rt]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[rt])}else{if(Array.isArray(S.__webglFramebuffer))for(let rt=0;rt<S.__webglFramebuffer.length;rt++)i.deleteFramebuffer(S.__webglFramebuffer[rt]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let rt=0;rt<S.__webglColorRenderbuffer.length;rt++)S.__webglColorRenderbuffer[rt]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[rt]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let X=P.textures;for(let rt=0,dt=X.length;rt<dt;rt++){let Pt=n.get(X[rt]);Pt.__webglTexture&&(i.deleteTexture(Pt.__webglTexture),a.memory.textures--),n.remove(X[rt])}n.remove(P)}let et=0;function st(){et=0}function Z(){return et}function K(P){et=P}function lt(){let P=et;return P>=s.maxTextures&&fe("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+s.maxTextures),et+=1,P}function ht(P){let S=[];return S.push(P.wrapS),S.push(P.wrapT),S.push(P.wrapR||0),S.push(P.magFilter),S.push(P.minFilter),S.push(P.anisotropy),S.push(P.internalFormat),S.push(P.format),S.push(P.type),S.push(P.generateMipmaps),S.push(P.premultiplyAlpha),S.push(P.flipY),S.push(P.unpackAlignment),S.push(P.colorSpace),S.join()}function bt(P,S){let X=n.get(P);if(P.isVideoTexture&&z(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&X.__version!==P.version){let rt=P.image;if(rt===null)fe("WebGLRenderer: Texture marked for update but no image data found.");else if(rt.complete===!1)fe("WebGLRenderer: Texture marked for update but image is incomplete");else{At(X,P,S);return}}else P.isExternalTexture&&(X.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+S)}function ut(P,S){let X=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&X.__version!==P.version){At(X,P,S);return}else P.isExternalTexture&&(X.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+S)}function St(P,S){let X=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&X.__version!==P.version){At(X,P,S);return}e.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+S)}function yt(P,S){let X=n.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&X.__version!==P.version){ee(X,P,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+S)}let $t={[Yl]:i.REPEAT,[Oi]:i.CLAMP_TO_EDGE,[Zl]:i.MIRRORED_REPEAT},Xt={[wn]:i.NEAREST,[Zp]:i.NEAREST_MIPMAP_NEAREST,[Io]:i.NEAREST_MIPMAP_LINEAR,[In]:i.LINEAR,[Pc]:i.LINEAR_MIPMAP_NEAREST,[Ls]:i.LINEAR_MIPMAP_LINEAR},ke={[Qp]:i.NEVER,[sm]:i.ALWAYS,[tm]:i.LESS,[gh]:i.LEQUAL,[em]:i.EQUAL,[_h]:i.GEQUAL,[nm]:i.GREATER,[im]:i.NOTEQUAL};function Ee(P,S){if(S.type===_i&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===In||S.magFilter===Pc||S.magFilter===Io||S.magFilter===Ls||S.minFilter===In||S.minFilter===Pc||S.minFilter===Io||S.minFilter===Ls)&&fe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,$t[S.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,$t[S.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,$t[S.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,Xt[S.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,Xt[S.minFilter]),S.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,ke[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===wn||S.minFilter!==Io&&S.minFilter!==Ls||S.type===_i&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let X=t.get("EXT_texture_filter_anisotropic");i.texParameterf(P,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Ne(P,S){let X=!1;P.__webglInit===void 0&&(P.__webglInit=!0,S.addEventListener("dispose",$));let rt=S.source,dt=_.get(rt);dt===void 0&&(dt={},_.set(rt,dt));let Pt=ht(S);if(Pt!==P.__cacheKey){dt[Pt]===void 0&&(dt[Pt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,X=!0),dt[Pt].usedTimes++;let Nt=dt[P.__cacheKey];Nt!==void 0&&(dt[P.__cacheKey].usedTimes--,Nt.usedTimes===0&&V(S)),P.__cacheKey=Pt,P.__webglTexture=dt[Pt].texture}return X}function pt(P,S,X){return Math.floor(Math.floor(P/X)/S)}function _t(P,S,X,rt){let Pt=P.updateRanges;if(Pt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,X,rt,S.data);else{Pt.sort((ne,Vt)=>ne.start-Vt.start);let Nt=0;for(let ne=1;ne<Pt.length;ne++){let Vt=Pt[Nt],Bt=Pt[ne],ie=Vt.start+Vt.count,he=pt(Bt.start,S.width,4),Se=pt(Vt.start,S.width,4);Bt.start<=ie+1&&he===Se&&pt(Bt.start+Bt.count-1,S.width,4)===he?Vt.count=Math.max(Vt.count,Bt.start+Bt.count-Vt.start):(++Nt,Pt[Nt]=Bt)}Pt.length=Nt+1;let ft=e.getParameter(i.UNPACK_ROW_LENGTH),xt=e.getParameter(i.UNPACK_SKIP_PIXELS),Ft=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let ne=0,Vt=Pt.length;ne<Vt;ne++){let Bt=Pt[ne],ie=Math.floor(Bt.start/4),he=Math.ceil(Bt.count/4),Se=ie%S.width,Y=Math.floor(ie/S.width),Dt=he,gt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Se),e.pixelStorei(i.UNPACK_SKIP_ROWS,Y),e.texSubImage2D(i.TEXTURE_2D,0,Se,Y,Dt,gt,X,rt,S.data)}P.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,ft),e.pixelStorei(i.UNPACK_SKIP_PIXELS,xt),e.pixelStorei(i.UNPACK_SKIP_ROWS,Ft)}}function At(P,S,X){let rt=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(rt=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(rt=i.TEXTURE_3D);let dt=Ne(P,S),Pt=S.source;e.bindTexture(rt,P.__webglTexture,i.TEXTURE0+X);let Nt=n.get(Pt);if(Pt.version!==Nt.__version||dt===!0){if(e.activeTexture(i.TEXTURE0+X),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let gt=Ue.getPrimaries(Ue.workingColorSpace),kt=S.colorSpace===ds?null:Ue.getPrimaries(S.colorSpace),Ht=S.colorSpace===ds||gt===kt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ht)}e.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment);let xt=p(S.image,!1,s.maxTextureSize);xt=Pe(S,xt);let Ft=r.convert(S.format,S.colorSpace),ne=r.convert(S.type),Vt=A(S.internalFormat,Ft,ne,S.normalized,S.colorSpace,S.isVideoTexture);Ee(rt,S);let Bt,ie=S.mipmaps,he=S.isVideoTexture!==!0,Se=Nt.__version===void 0||dt===!0,Y=Pt.dataReady,Dt=D(S,xt);if(S.isDepthTexture)Vt=b(S.format===Ds,S.type),Se&&(he?e.texStorage2D(i.TEXTURE_2D,1,Vt,xt.width,xt.height):e.texImage2D(i.TEXTURE_2D,0,Vt,xt.width,xt.height,0,Ft,ne,null));else if(S.isDataTexture)if(ie.length>0){he&&Se&&e.texStorage2D(i.TEXTURE_2D,Dt,Vt,ie[0].width,ie[0].height);for(let gt=0,kt=ie.length;gt<kt;gt++)Bt=ie[gt],he?Y&&e.texSubImage2D(i.TEXTURE_2D,gt,0,0,Bt.width,Bt.height,Ft,ne,Bt.data):e.texImage2D(i.TEXTURE_2D,gt,Vt,Bt.width,Bt.height,0,Ft,ne,Bt.data);S.generateMipmaps=!1}else he?(Se&&e.texStorage2D(i.TEXTURE_2D,Dt,Vt,xt.width,xt.height),Y&&_t(S,xt,Ft,ne)):e.texImage2D(i.TEXTURE_2D,0,Vt,xt.width,xt.height,0,Ft,ne,xt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){he&&Se&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Dt,Vt,ie[0].width,ie[0].height,xt.depth);for(let gt=0,kt=ie.length;gt<kt;gt++)if(Bt=ie[gt],S.format!==xi)if(Ft!==null)if(he){if(Y)if(S.layerUpdates.size>0){let Ht=Td(Bt.width,Bt.height,S.format,S.type);for(let Mt of S.layerUpdates){let se=Bt.data.subarray(Mt*Ht/Bt.data.BYTES_PER_ELEMENT,(Mt+1)*Ht/Bt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,gt,0,0,Mt,Bt.width,Bt.height,1,Ft,se)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,gt,0,0,0,Bt.width,Bt.height,xt.depth,Ft,Bt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,gt,Vt,Bt.width,Bt.height,xt.depth,0,Bt.data,0,0);else fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else he?Y&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,gt,0,0,0,Bt.width,Bt.height,xt.depth,Ft,ne,Bt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,gt,Vt,Bt.width,Bt.height,xt.depth,0,Ft,ne,Bt.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{he&&Se&&e.texStorage2D(i.TEXTURE_2D,Dt,Vt,ie[0].width,ie[0].height);for(let gt=0,kt=ie.length;gt<kt;gt++)Bt=ie[gt],S.format!==xi?Ft!==null?he?Y&&e.compressedTexSubImage2D(i.TEXTURE_2D,gt,0,0,Bt.width,Bt.height,Ft,Bt.data):e.compressedTexImage2D(i.TEXTURE_2D,gt,Vt,Bt.width,Bt.height,0,Bt.data):fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):he?Y&&e.texSubImage2D(i.TEXTURE_2D,gt,0,0,Bt.width,Bt.height,Ft,ne,Bt.data):e.texImage2D(i.TEXTURE_2D,gt,Vt,Bt.width,Bt.height,0,Ft,ne,Bt.data)}else if(S.isDataArrayTexture)if(he){if(Se&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Dt,Vt,xt.width,xt.height,xt.depth),Y)if(S.layerUpdates.size>0){let gt=Td(xt.width,xt.height,S.format,S.type);for(let kt of S.layerUpdates){let Ht=xt.data.subarray(kt*gt/xt.data.BYTES_PER_ELEMENT,(kt+1)*gt/xt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,kt,xt.width,xt.height,1,Ft,ne,Ht)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,xt.width,xt.height,xt.depth,Ft,ne,xt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Vt,xt.width,xt.height,xt.depth,0,Ft,ne,xt.data);else if(S.isData3DTexture)he?(Se&&e.texStorage3D(i.TEXTURE_3D,Dt,Vt,xt.width,xt.height,xt.depth),Y&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,xt.width,xt.height,xt.depth,Ft,ne,xt.data)):e.texImage3D(i.TEXTURE_3D,0,Vt,xt.width,xt.height,xt.depth,0,Ft,ne,xt.data);else if(S.isFramebufferTexture){if(Se)if(he)e.texStorage2D(i.TEXTURE_2D,Dt,Vt,xt.width,xt.height);else{let gt=xt.width,kt=xt.height;for(let Ht=0;Ht<Dt;Ht++)e.texImage2D(i.TEXTURE_2D,Ht,Vt,gt,kt,0,Ft,ne,null),gt>>=1,kt>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in i){let gt=i.canvas;if(gt.hasAttribute("layoutsubtree")||gt.setAttribute("layoutsubtree","true"),xt.parentNode!==gt){gt.appendChild(xt),g.add(S),gt.onpaint=kt=>{let Ht=kt.changedElements;for(let Mt of g)Ht.includes(Mt.image)&&(Mt.needsUpdate=!0)},gt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,xt);else{let Ht=i.RGBA,Mt=i.RGBA,se=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ht,Mt,se,xt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ie.length>0){if(he&&Se){let gt=pe(ie[0]);e.texStorage2D(i.TEXTURE_2D,Dt,Vt,gt.width,gt.height)}for(let gt=0,kt=ie.length;gt<kt;gt++)Bt=ie[gt],he?Y&&e.texSubImage2D(i.TEXTURE_2D,gt,0,0,Ft,ne,Bt):e.texImage2D(i.TEXTURE_2D,gt,Vt,Ft,ne,Bt);S.generateMipmaps=!1}else if(he){if(Se){let gt=pe(xt);e.texStorage2D(i.TEXTURE_2D,Dt,Vt,gt.width,gt.height)}Y&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Ft,ne,xt)}else e.texImage2D(i.TEXTURE_2D,0,Vt,Ft,ne,xt);f(S)&&N(rt),Nt.__version=Pt.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function ee(P,S,X){if(S.image.length!==6)return;let rt=Ne(P,S),dt=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+X);let Pt=n.get(dt);if(dt.version!==Pt.__version||rt===!0){e.activeTexture(i.TEXTURE0+X);let Nt=Ue.getPrimaries(Ue.workingColorSpace),ft=S.colorSpace===ds?null:Ue.getPrimaries(S.colorSpace),xt=S.colorSpace===ds||Nt===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);let Ft=S.isCompressedTexture||S.image[0].isCompressedTexture,ne=S.image[0]&&S.image[0].isDataTexture,Vt=[];for(let Mt=0;Mt<6;Mt++)!Ft&&!ne?Vt[Mt]=p(S.image[Mt],!0,s.maxCubemapSize):Vt[Mt]=ne?S.image[Mt].image:S.image[Mt],Vt[Mt]=Pe(S,Vt[Mt]);let Bt=Vt[0],ie=r.convert(S.format,S.colorSpace),he=r.convert(S.type),Se=A(S.internalFormat,ie,he,S.normalized,S.colorSpace),Y=S.isVideoTexture!==!0,Dt=Pt.__version===void 0||rt===!0,gt=dt.dataReady,kt=D(S,Bt);Ee(i.TEXTURE_CUBE_MAP,S);let Ht;if(Ft){Y&&Dt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,kt,Se,Bt.width,Bt.height);for(let Mt=0;Mt<6;Mt++){Ht=Vt[Mt].mipmaps;for(let se=0;se<Ht.length;se++){let jt=Ht[se];S.format!==xi?ie!==null?Y?gt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,se,0,0,jt.width,jt.height,ie,jt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,se,Se,jt.width,jt.height,0,jt.data):fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?gt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,se,0,0,jt.width,jt.height,ie,he,jt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,se,Se,jt.width,jt.height,0,ie,he,jt.data)}}}else{if(Ht=S.mipmaps,Y&&Dt){Ht.length>0&&kt++;let Mt=pe(Vt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,kt,Se,Mt.width,Mt.height)}for(let Mt=0;Mt<6;Mt++)if(ne){Y?gt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,Vt[Mt].width,Vt[Mt].height,ie,he,Vt[Mt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,Se,Vt[Mt].width,Vt[Mt].height,0,ie,he,Vt[Mt].data);for(let se=0;se<Ht.length;se++){let Re=Ht[se].image[Mt].image;Y?gt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,se+1,0,0,Re.width,Re.height,ie,he,Re.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,se+1,Se,Re.width,Re.height,0,ie,he,Re.data)}}else{Y?gt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,ie,he,Vt[Mt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,Se,ie,he,Vt[Mt]);for(let se=0;se<Ht.length;se++){let jt=Ht[se];Y?gt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,se+1,0,0,ie,he,jt.image[Mt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,se+1,Se,ie,he,jt.image[Mt])}}}f(S)&&N(i.TEXTURE_CUBE_MAP),Pt.__version=dt.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function Gt(P,S,X,rt,dt,Pt){let Nt=r.convert(X.format,X.colorSpace),ft=r.convert(X.type),xt=A(X.internalFormat,Nt,ft,X.normalized,X.colorSpace),Ft=n.get(S),ne=n.get(X);if(ne.__renderTarget=S,!Ft.__hasExternalTextures){let Vt=Math.max(1,S.width>>Pt),Bt=Math.max(1,S.height>>Pt);dt===i.TEXTURE_3D||dt===i.TEXTURE_2D_ARRAY?e.texImage3D(dt,Pt,xt,Vt,Bt,S.depth,0,Nt,ft,null):e.texImage2D(dt,Pt,xt,Vt,Bt,0,Nt,ft,null)}e.bindFramebuffer(i.FRAMEBUFFER,P),me(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,rt,dt,ne.__webglTexture,0,ue(S)):(dt===i.TEXTURE_2D||dt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&dt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,rt,dt,ne.__webglTexture,Pt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ce(P,S,X){if(i.bindRenderbuffer(i.RENDERBUFFER,P),S.depthBuffer){let rt=S.depthTexture,dt=rt&&rt.isDepthTexture?rt.type:null,Pt=b(S.stencilBuffer,dt),Nt=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;me(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue(S),Pt,S.width,S.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue(S),Pt,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Pt,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Nt,i.RENDERBUFFER,P)}else{let rt=S.textures;for(let dt=0;dt<rt.length;dt++){let Pt=rt[dt],Nt=r.convert(Pt.format,Pt.colorSpace),ft=r.convert(Pt.type),xt=A(Pt.internalFormat,Nt,ft,Pt.normalized,Pt.colorSpace);me(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue(S),xt,S.width,S.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue(S),xt,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,xt,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ae(P,S,X){let rt=S.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,P),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let dt=n.get(S.depthTexture);if(dt.__renderTarget=S,(!dt.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),rt){if(dt.__webglInit===void 0&&(dt.__webglInit=!0,S.depthTexture.addEventListener("dispose",$)),dt.__webglTexture===void 0){dt.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,dt.__webglTexture),Ee(i.TEXTURE_CUBE_MAP,S.depthTexture);let Ft=r.convert(S.depthTexture.format),ne=r.convert(S.depthTexture.type),Vt;S.depthTexture.format===ki?Vt=i.DEPTH_COMPONENT24:S.depthTexture.format===Ds&&(Vt=i.DEPTH24_STENCIL8);for(let Bt=0;Bt<6;Bt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Bt,0,Vt,S.width,S.height,0,Ft,ne,null)}}else bt(S.depthTexture,0);let Pt=dt.__webglTexture,Nt=ue(S),ft=rt?i.TEXTURE_CUBE_MAP_POSITIVE_X+X:i.TEXTURE_2D,xt=S.depthTexture.format===Ds?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(S.depthTexture.format===ki)me(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,xt,ft,Pt,0,Nt):i.framebufferTexture2D(i.FRAMEBUFFER,xt,ft,Pt,0);else if(S.depthTexture.format===Ds)me(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,xt,ft,Pt,0,Nt):i.framebufferTexture2D(i.FRAMEBUFFER,xt,ft,Pt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function at(P){let S=n.get(P),X=P.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==P.depthTexture){let rt=P.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),rt){let dt=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,rt.removeEventListener("dispose",dt)};rt.addEventListener("dispose",dt),S.__depthDisposeCallback=dt}S.__boundDepthTexture=rt}if(P.depthTexture&&!S.__autoAllocateDepthBuffer)if(X)for(let rt=0;rt<6;rt++)ae(S.__webglFramebuffer[rt],P,rt);else{let rt=P.texture.mipmaps;rt&&rt.length>0?ae(S.__webglFramebuffer[0],P,0):ae(S.__webglFramebuffer,P,0)}else if(X){S.__webglDepthbuffer=[];for(let rt=0;rt<6;rt++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[rt]),S.__webglDepthbuffer[rt]===void 0)S.__webglDepthbuffer[rt]=i.createRenderbuffer(),ce(S.__webglDepthbuffer[rt],P,!1);else{let dt=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pt=S.__webglDepthbuffer[rt];i.bindRenderbuffer(i.RENDERBUFFER,Pt),i.framebufferRenderbuffer(i.FRAMEBUFFER,dt,i.RENDERBUFFER,Pt)}}else{let rt=P.texture.mipmaps;if(rt&&rt.length>0?e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),ce(S.__webglDepthbuffer,P,!1);else{let dt=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pt=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Pt),i.framebufferRenderbuffer(i.FRAMEBUFFER,dt,i.RENDERBUFFER,Pt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Et(P,S,X){let rt=n.get(P);S!==void 0&&Gt(rt.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&at(P)}function H(P){let S=P.texture,X=n.get(P),rt=n.get(S);P.addEventListener("dispose",E);let dt=P.textures,Pt=P.isWebGLCubeRenderTarget===!0,Nt=dt.length>1;if(Nt||(rt.__webglTexture===void 0&&(rt.__webglTexture=i.createTexture()),rt.__version=S.version,a.memory.textures++),Pt){X.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(S.mipmaps&&S.mipmaps.length>0){X.__webglFramebuffer[ft]=[];for(let xt=0;xt<S.mipmaps.length;xt++)X.__webglFramebuffer[ft][xt]=i.createFramebuffer()}else X.__webglFramebuffer[ft]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){X.__webglFramebuffer=[];for(let ft=0;ft<S.mipmaps.length;ft++)X.__webglFramebuffer[ft]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(Nt)for(let ft=0,xt=dt.length;ft<xt;ft++){let Ft=n.get(dt[ft]);Ft.__webglTexture===void 0&&(Ft.__webglTexture=i.createTexture(),a.memory.textures++)}if(P.samples>0&&me(P)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let ft=0;ft<dt.length;ft++){let xt=dt[ft];X.__webglColorRenderbuffer[ft]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[ft]);let Ft=r.convert(xt.format,xt.colorSpace),ne=r.convert(xt.type),Vt=A(xt.internalFormat,Ft,ne,xt.normalized,xt.colorSpace,P.isXRRenderTarget===!0),Bt=ue(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,Bt,Vt,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,X.__webglColorRenderbuffer[ft])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),ce(X.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Pt){e.bindTexture(i.TEXTURE_CUBE_MAP,rt.__webglTexture),Ee(i.TEXTURE_CUBE_MAP,S);for(let ft=0;ft<6;ft++)if(S.mipmaps&&S.mipmaps.length>0)for(let xt=0;xt<S.mipmaps.length;xt++)Gt(X.__webglFramebuffer[ft][xt],P,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,xt);else Gt(X.__webglFramebuffer[ft],P,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);f(S)&&N(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Nt){for(let ft=0,xt=dt.length;ft<xt;ft++){let Ft=dt[ft],ne=n.get(Ft),Vt=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Vt=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Vt,ne.__webglTexture),Ee(Vt,Ft),Gt(X.__webglFramebuffer,P,Ft,i.COLOR_ATTACHMENT0+ft,Vt,0),f(Ft)&&N(Vt)}e.unbindTexture()}else{let ft=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ft=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ft,rt.__webglTexture),Ee(ft,S),S.mipmaps&&S.mipmaps.length>0)for(let xt=0;xt<S.mipmaps.length;xt++)Gt(X.__webglFramebuffer[xt],P,S,i.COLOR_ATTACHMENT0,ft,xt);else Gt(X.__webglFramebuffer,P,S,i.COLOR_ATTACHMENT0,ft,0);f(S)&&N(ft),e.unbindTexture()}P.depthBuffer&&at(P)}function Tt(P){let S=P.textures;for(let X=0,rt=S.length;X<rt;X++){let dt=S[X];if(f(dt)){let Pt=O(P),Nt=n.get(dt).__webglTexture;e.bindTexture(Pt,Nt),N(Pt),e.unbindTexture()}}}let Ut=[],oe=[];function re(P){if(P.samples>0){if(me(P)===!1){let S=P.textures,X=P.width,rt=P.height,dt=i.COLOR_BUFFER_BIT,Pt=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Nt=n.get(P),ft=S.length>1;if(ft)for(let Ft=0;Ft<S.length;Ft++)e.bindFramebuffer(i.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ft,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Nt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ft,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer);let xt=P.texture.mipmaps;xt&&xt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer);for(let Ft=0;Ft<S.length;Ft++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(dt|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(dt|=i.STENCIL_BUFFER_BIT)),ft){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Nt.__webglColorRenderbuffer[Ft]);let ne=n.get(S[Ft]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ne,0)}i.blitFramebuffer(0,0,X,rt,0,0,X,rt,dt,i.NEAREST),c===!0&&(Ut.length=0,oe.length=0,Ut.push(i.COLOR_ATTACHMENT0+Ft),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(Ut.push(Pt),oe.push(Pt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,oe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ut))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ft)for(let Ft=0;Ft<S.length;Ft++){e.bindFramebuffer(i.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ft,i.RENDERBUFFER,Nt.__webglColorRenderbuffer[Ft]);let ne=n.get(S[Ft]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Nt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ft,i.TEXTURE_2D,ne,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&c){let S=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function ue(P){return Math.min(s.maxSamples,P.samples)}function me(P){let S=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function z(P){let S=a.render.frame;u.get(P)!==S&&(u.set(P,S),P.update())}function Pe(P,S){let X=P.colorSpace,rt=P.format,dt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||X!==qa&&X!==ds&&(Ue.getTransfer(X)===Ge?(rt!==xi||dt!==ii)&&fe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ge("WebGLTextures: Unsupported texture color space:",X)),S}function pe(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(h.width=P.naturalWidth||P.width,h.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(h.width=P.displayWidth,h.height=P.displayHeight):(h.width=P.width,h.height=P.height),h}this.allocateTextureUnit=lt,this.resetTextureUnits=st,this.getTextureUnits=Z,this.setTextureUnits=K,this.setTexture2D=bt,this.setTexture2DArray=ut,this.setTexture3D=St,this.setTextureCube=yt,this.rebindTextures=Et,this.setupRenderTarget=H,this.updateRenderTargetMipmap=Tt,this.updateMultisampleRenderTarget=re,this.setupDepthRenderbuffer=at,this.setupFrameBufferTexture=Gt,this.useMultisampledRTT=me,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function cM(i,t){function e(n,s=ds){let r,a=Ue.getTransfer(s);if(n===ii)return i.UNSIGNED_BYTE;if(n===Dc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Nc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===pd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===md)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===dd)return i.BYTE;if(n===fd)return i.SHORT;if(n===na)return i.UNSIGNED_SHORT;if(n===Lc)return i.INT;if(n===Pi)return i.UNSIGNED_INT;if(n===_i)return i.FLOAT;if(n===Li)return i.HALF_FLOAT;if(n===gd)return i.ALPHA;if(n===_d)return i.RGB;if(n===xi)return i.RGBA;if(n===ki)return i.DEPTH_COMPONENT;if(n===Ds)return i.DEPTH_STENCIL;if(n===Uc)return i.RED;if(n===Fc)return i.RED_INTEGER;if(n===Ns)return i.RG;if(n===Oc)return i.RG_INTEGER;if(n===Bc)return i.RGBA_INTEGER;if(n===Po||n===Lo||n===Do||n===No)if(a===Ge)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Po)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Do)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===No)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Po)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Lo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Do)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===No)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===kc||n===zc||n===Vc||n===Hc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===kc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===zc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Vc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Hc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===$c||n===Gc||n===Wc||n===Xc||n===qc||n===Uo||n===Yc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===$c||n===Gc)return a===Ge?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Wc)return a===Ge?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Xc)return r.COMPRESSED_R11_EAC;if(n===qc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Uo)return r.COMPRESSED_RG11_EAC;if(n===Yc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Zc||n===Jc||n===Kc||n===jc||n===Qc||n===th||n===eh||n===nh||n===ih||n===sh||n===rh||n===ah||n===oh||n===lh)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Zc)return a===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Jc)return a===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Kc)return a===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===jc)return a===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Qc)return a===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===th)return a===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===eh)return a===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===nh)return a===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ih)return a===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===sh)return a===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===rh)return a===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ah)return a===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===oh)return a===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===lh)return a===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ch||n===hh||n===uh)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ch)return a===Ge?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===hh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===uh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===dh||n===fh||n===Fo||n===ph)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===dh)return r.COMPRESSED_RED_RGTC1_EXT;if(n===fh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Fo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ph)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ia?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var hM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,uM=`
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

}`,zd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new ao(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new An({vertexShader:hM,fragmentShader:uM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Tn(new _o(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Vd=class extends zi{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,h=null,u=null,g=null,d=null,_=null,y=null,C=typeof XRWebGLBinding<"u",p=new zd,f={},N=e.getContextAttributes(),O=null,A=null,b=[],D=[],$=new Ot,E=null,L=null,V=new kn;V.viewport=new We;let W=new kn;W.viewport=new We;let et=[V,W],st=new Ac,Z=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(pt){let _t=b[pt];return _t===void 0&&(_t=new qr,b[pt]=_t),_t.getTargetRaySpace()},this.getControllerGrip=function(pt){let _t=b[pt];return _t===void 0&&(_t=new qr,b[pt]=_t),_t.getGripSpace()},this.getHand=function(pt){let _t=b[pt];return _t===void 0&&(_t=new qr,b[pt]=_t),_t.getHandSpace()};function lt(pt){let _t=D.indexOf(pt.inputSource);if(_t===-1)return;let At=b[_t];At!==void 0&&(At.update(pt.inputSource,pt.frame,h||a),At.dispatchEvent({type:pt.type,data:pt.inputSource}))}function ht(){s.removeEventListener("select",lt),s.removeEventListener("selectstart",lt),s.removeEventListener("selectend",lt),s.removeEventListener("squeeze",lt),s.removeEventListener("squeezestart",lt),s.removeEventListener("squeezeend",lt),s.removeEventListener("end",ht),s.removeEventListener("inputsourceschange",bt);for(let pt=0;pt<b.length;pt++){let _t=D[pt];_t!==null&&(D[pt]=null,b[pt].disconnect(_t))}Z=null,K=null,p.reset();for(let pt in f)delete f[pt];if(t.setRenderTarget(O),_=null,d=null,g=null,s=null,A=null,Ne.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize($.width,$.height,!1),L!==null){let pt=L.camera;pt.fov=L.fov,pt.zoom=L.zoom,pt.updateProjectionMatrix(),L=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(pt){r=pt,n.isPresenting===!0&&fe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(pt){o=pt,n.isPresenting===!0&&fe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(pt){h=pt},this.getBaseLayer=function(){return d!==null?d:_},this.getBinding=function(){return g===null&&C&&(g=new XRWebGLBinding(s,e)),g},this.getFrame=function(){return y},this.getSession=function(){return s},this.setSession=async function(pt){if(s=pt,s!==null){if(O=t.getRenderTarget(),s.addEventListener("select",lt),s.addEventListener("selectstart",lt),s.addEventListener("selectend",lt),s.addEventListener("squeeze",lt),s.addEventListener("squeezestart",lt),s.addEventListener("squeezeend",lt),s.addEventListener("end",ht),s.addEventListener("inputsourceschange",bt),N.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize($),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let At=null,ee=null,Gt=null;N.depth&&(Gt=N.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,At=N.stencil?Ds:ki,ee=N.stencil?ia:Pi);let ce={colorFormat:e.RGBA8,depthFormat:Gt,scaleFactor:r};g=this.getBinding(),d=g.createProjectionLayer(ce),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),A=new ei(d.textureWidth,d.textureHeight,{format:xi,type:ii,depthTexture:new Es(d.textureWidth,d.textureHeight,ee,void 0,void 0,void 0,void 0,void 0,void 0,At),stencilBuffer:N.stencil,colorSpace:t.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let At={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:r};_=new XRWebGLLayer(s,e,At),s.updateRenderState({baseLayer:_}),t.setPixelRatio(1),t.setSize(_.framebufferWidth,_.framebufferHeight,!1),A=new ei(_.framebufferWidth,_.framebufferHeight,{format:xi,type:ii,colorSpace:t.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1,storeMultisampledDepthBuffer:_.ignoreDepthValues===!1,storeMultisampledStencilBuffer:_.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(c),h=null,a=await s.requestReferenceSpace(o),Ne.setContext(s),Ne.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function bt(pt){for(let _t=0;_t<pt.removed.length;_t++){let At=pt.removed[_t],ee=D.indexOf(At);ee>=0&&(D[ee]=null,b[ee].disconnect(At))}for(let _t=0;_t<pt.added.length;_t++){let At=pt.added[_t],ee=D.indexOf(At);if(ee===-1){for(let ce=0;ce<b.length;ce++)if(ce>=D.length){D.push(At),ee=ce;break}else if(D[ce]===null){D[ce]=At,ee=ce;break}if(ee===-1)break}let Gt=b[ee];Gt&&Gt.connect(At)}}let ut=new G,St=new G;function yt(pt,_t,At){ut.setFromMatrixPosition(_t.matrixWorld),St.setFromMatrixPosition(At.matrixWorld);let ee=ut.distanceTo(St),Gt=_t.projectionMatrix.elements,ce=At.projectionMatrix.elements,ae=Gt[14]/(Gt[10]-1),at=Gt[14]/(Gt[10]+1),Et=(Gt[9]+1)/Gt[5],H=(Gt[9]-1)/Gt[5],Tt=(Gt[8]-1)/Gt[0],Ut=(ce[8]+1)/ce[0],oe=ae*Tt,re=ae*Ut,ue=ee/(-Tt+Ut),me=ue*-Tt;if(_t.matrixWorld.decompose(pt.position,pt.quaternion,pt.scale),pt.translateX(me),pt.translateZ(ue),pt.matrixWorld.compose(pt.position,pt.quaternion,pt.scale),pt.matrixWorldInverse.copy(pt.matrixWorld).invert(),Gt[10]===-1)pt.projectionMatrix.copy(_t.projectionMatrix),pt.projectionMatrixInverse.copy(_t.projectionMatrixInverse);else{let z=ae+ue,Pe=at+ue,pe=oe-me,P=re+(ee-me),S=Et*at/Pe*z,X=H*at/Pe*z;pt.projectionMatrix.makePerspective(pe,P,S,X,z,Pe),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert()}}function $t(pt,_t){_t===null?pt.matrixWorld.copy(pt.matrix):pt.matrixWorld.multiplyMatrices(_t.matrixWorld,pt.matrix),pt.matrixWorldInverse.copy(pt.matrixWorld).invert()}this.updateCamera=function(pt){if(s===null)return;let _t=pt.near,At=pt.far;p.texture!==null&&(p.depthNear>0&&(_t=p.depthNear),p.depthFar>0&&(At=p.depthFar)),st.near=W.near=V.near=_t,st.far=W.far=V.far=At,(Z!==st.near||K!==st.far)&&(s.updateRenderState({depthNear:st.near,depthFar:st.far}),Z=st.near,K=st.far),st.layers.mask=pt.layers.mask|6,V.layers.mask=st.layers.mask&-5,W.layers.mask=st.layers.mask&-3;let ee=pt.parent,Gt=st.cameras;$t(st,ee);for(let ce=0;ce<Gt.length;ce++)$t(Gt[ce],ee);Gt.length===2?yt(st,V,W):st.projectionMatrix.copy(V.projectionMatrix),L===null&&pt.isPerspectiveCamera&&(L={camera:pt,fov:pt.fov,zoom:pt.zoom}),Xt(pt,st,ee)};function Xt(pt,_t,At){At===null?pt.matrix.copy(_t.matrixWorld):(pt.matrix.copy(At.matrixWorld),pt.matrix.invert(),pt.matrix.multiply(_t.matrixWorld)),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.updateMatrixWorld(!0),pt.projectionMatrix.copy(_t.projectionMatrix),pt.projectionMatrixInverse.copy(_t.projectionMatrixInverse),pt.isPerspectiveCamera&&(pt.fov=Gr*2*Math.atan(1/pt.projectionMatrix.elements[5]),pt.zoom=1)}this.getCamera=function(){return st},this.getFoveation=function(){if(!(d===null&&_===null))return c},this.setFoveation=function(pt){c=pt,d!==null&&(d.fixedFoveation=pt),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=pt)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(st)},this.getCameraTexture=function(pt){return f[pt]};let ke=null;function Ee(pt,_t){if(u=_t.getViewerPose(h||a),y=_t,u!==null){let At=u.views;_!==null&&(t.setRenderTargetFramebuffer(A,_.framebuffer),t.setRenderTarget(A));let ee=!1;At.length!==st.cameras.length&&(st.cameras.length=0,ee=!0);for(let at=0;at<At.length;at++){let Et=At[at],H=null;if(_!==null)H=_.getViewport(Et);else{let Ut=g.getViewSubImage(d,Et);H=Ut.viewport,at===0&&(t.setRenderTargetTextures(A,Ut.colorTexture,Ut.depthStencilTexture),t.setRenderTarget(A))}let Tt=et[at];Tt===void 0&&(Tt=new kn,Tt.layers.enable(at),Tt.viewport=new We,et[at]=Tt),Tt.matrix.fromArray(Et.transform.matrix),Tt.matrix.decompose(Tt.position,Tt.quaternion,Tt.scale),Tt.projectionMatrix.fromArray(Et.projectionMatrix),Tt.projectionMatrixInverse.copy(Tt.projectionMatrix).invert(),Tt.viewport.set(H.x,H.y,H.width,H.height),at===0&&(st.matrix.copy(Tt.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale)),ee===!0&&st.cameras.push(Tt)}let Gt=s.enabledFeatures;if(Gt&&Gt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&C){g=n.getBinding();let at=g.getDepthInformation(At[0]);at&&at.isValid&&at.texture&&p.init(at,s.renderState)}if(Gt&&Gt.includes("camera-access")&&C){t.state.unbindTexture(),g=n.getBinding();for(let at=0;at<At.length;at++){let Et=At[at].camera;if(Et){let H=f[Et];H||(H=new ao,f[Et]=H);let Tt=g.getCameraImage(Et);H.sourceTexture=Tt}}}}for(let At=0;At<b.length;At++){let ee=D[At],Gt=b[At];ee!==null&&Gt!==void 0&&Gt.update(ee,_t,h||a)}ke&&ke(pt,_t),_t.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:_t}),y=null}let Ne=new Om;Ne.setAnimationLoop(Ee),this.setAnimationLoop=function(pt){ke=pt},this.dispose=function(){}}},dM=new Ve,$m=new Me;$m.set(-1,0,0,0,1,0,0,0,1);function fM(i,t){function e(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,bd(i)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function s(p,f,N,O,A){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(p,f):f.isMeshLambertMaterial?(r(p,f),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(p,f),g(p,f)):f.isMeshPhongMaterial?(r(p,f),u(p,f),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(p,f),d(p,f),f.isMeshPhysicalMaterial&&_(p,f,A)):f.isMeshMatcapMaterial?(r(p,f),y(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),C(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?c(p,f,N,O):f.isSpriteMaterial?h(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,e(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Yn&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,e(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Yn&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,e(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,e(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let N=t.get(f),O=N.envMap,A=N.envMapRotation;O&&(p.envMap.value=O,p.envMapRotation.value.setFromMatrix4(dM.makeRotationFromEuler(A)).transpose(),O.isCubeTexture&&O.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply($m),p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function c(p,f,N,O){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*N,p.scale.value=O*.5,f.map&&(p.map.value=f.map,e(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function h(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function u(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function g(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function _(p,f,N){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Yn&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.retroreflectivity>0&&(p.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=N.texture,p.transmissionSamplerSize.value.set(N.width,N.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,p.specularIntensityMapTransform))}function y(p,f){f.matcap&&(p.matcap.value=f.matcap)}function C(p,f){let N=t.get(f).light;p.referencePosition.value.setFromMatrixPosition(N.matrixWorld),p.nearDistance.value=N.shadow.camera.near,p.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function pM(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(A,b){let D=b.program;n.uniformBlockBinding(A,D)}function h(A,b){let D=s[A.id];D===void 0&&(p(A),D=u(A),s[A.id]=D,A.addEventListener("dispose",N));let $=b.program;n.updateUBOMapping(A,$);let E=t.render.frame;r[A.id]!==E&&(d(A),r[A.id]=E)}function u(A){let b=g();A.__bindingPointIndex=b;let D=i.createBuffer(),$=A.__size,E=A.usage;return i.bindBuffer(i.UNIFORM_BUFFER,D),i.bufferData(i.UNIFORM_BUFFER,$,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,D),D}function g(){for(let A=0;A<o;A++)if(a.indexOf(A)===-1)return a.push(A),A;return ge("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(A){let b=s[A.id],D=A.uniforms,$=A.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let E=0,L=D.length;E<L;E++){let V=D[E];if(Array.isArray(V))for(let W=0,et=V.length;W<et;W++)_(V[W],E,W,$);else _(V,E,0,$)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function _(A,b,D,$){if(C(A,b,D,$)===!0){let E=A.__offset,L=A.value;if(Array.isArray(L)){let V=0;for(let W=0;W<L.length;W++){let et=L[W],st=f(et);y(et,A.__data,V),typeof et!="number"&&typeof et!="boolean"&&!et.isMatrix3&&!ArrayBuffer.isView(et)&&(V+=st.storage/Float32Array.BYTES_PER_ELEMENT)}}else y(L,A.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,E,A.__data)}}function y(A,b,D){typeof A=="number"||typeof A=="boolean"?b[0]=A:A.isMatrix3?(b[0]=A.elements[0],b[1]=A.elements[1],b[2]=A.elements[2],b[3]=0,b[4]=A.elements[3],b[5]=A.elements[4],b[6]=A.elements[5],b[7]=0,b[8]=A.elements[6],b[9]=A.elements[7],b[10]=A.elements[8],b[11]=0):ArrayBuffer.isView(A)?b.set(new A.constructor(A.buffer,A.byteOffset,b.length)):A.toArray(b,D)}function C(A,b,D,$){let E=A.value,L=b+"_"+D;if($[L]===void 0)return typeof E=="number"||typeof E=="boolean"?$[L]=E:ArrayBuffer.isView(E)?$[L]=E.slice():$[L]=E.clone(),!0;{let V=$[L];if(typeof E=="number"||typeof E=="boolean"){if(V!==E)return $[L]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(V.equals(E)===!1)return V.copy(E),!0}}return!1}function p(A){let b=A.uniforms,D=0,$=16;for(let L=0,V=b.length;L<V;L++){let W=Array.isArray(b[L])?b[L]:[b[L]];for(let et=0,st=W.length;et<st;et++){let Z=W[et],K=Array.isArray(Z.value)?Z.value:[Z.value];for(let lt=0,ht=K.length;lt<ht;lt++){let bt=K[lt],ut=f(bt),St=D%$,yt=St%ut.boundary,$t=St+yt;D+=yt,$t!==0&&$-$t<ut.storage&&(D+=$-$t),Z.__data=new Float32Array(ut.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=D,D+=ut.storage}}}let E=D%$;return E>0&&(D+=$-E),A.__size=D,A.__cache={},this}function f(A){let b={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(b.boundary=4,b.storage=4):A.isVector2?(b.boundary=8,b.storage=8):A.isVector3||A.isColor?(b.boundary=16,b.storage=12):A.isVector4?(b.boundary=16,b.storage=16):A.isMatrix3?(b.boundary=48,b.storage=48):A.isMatrix4?(b.boundary=64,b.storage=64):A.isTexture?fe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(A)?(b.boundary=16,b.storage=A.byteLength):fe("WebGLRenderer: Unsupported uniform value type.",A),b}function N(A){let b=A.target;b.removeEventListener("dispose",N);let D=a.indexOf(b.__bindingPointIndex);a.splice(D,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function O(){for(let A in s)i.deleteBuffer(s[A]);a=[],s={},r={}}return{bind:c,update:h,dispose:O}}var mM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Wi=null;function gM(){return Wi===null&&(Wi=new eo(mM,16,16,Ns,Li),Wi.name="DFG_LUT",Wi.minFilter=In,Wi.magFilter=In,Wi.wrapS=Oi,Wi.wrapT=Oi,Wi.generateMipmaps=!1,Wi.needsUpdate=!0),Wi}var Mh=class{constructor(t={}){let{canvas:e=rm(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:d=!1,outputBufferType:_=ii}=t;this.isWebGLRenderer=!0;let y;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=n.getContextAttributes().alpha}else y=a;let C=_,p=new Set([Bc,Oc,Fc]),f=new Set([ii,Pi,na,ia,Dc,Nc]),N=new Uint32Array(4),O=new Int32Array(4),A=new G,b=null,D=null,$=[],E=[],L=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ii,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let V=this,W=!1,et=null,st=null,Z=null,K=null;this._outputColorSpace=li;let lt=0,ht=0,bt=null,ut=-1,St=null,yt=new We,$t=new We,Xt=null,ke=new de(0),Ee=0,Ne=e.width,pt=e.height,_t=1,At=null,ee=null,Gt=new We(0,0,Ne,pt),ce=new We(0,0,Ne,pt),ae=!1,at=new Yr,Et=!1,H=!1,Tt=new Ve,Ut=new G,oe=new We,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ue=!1;function me(){return bt===null?_t:1}let z=n;function Pe(w,k){return e.getContext(w,k)}let pe,P,S,X,rt,dt,Pt,Nt,ft,xt,Ft,ne,Vt,Bt,ie,he,Se,Y,Dt,gt,kt,Ht,Mt;try{let w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:u,failIfMajorPerformanceCaveat:g};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Re,!1),e.addEventListener("webglcontextrestored",Te,!1),e.addEventListener("webglcontextcreationerror",un,!1),z===null){let k="webgl2";if(z=Pe(k,w),z===null)throw Pe(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}se()}catch(w){throw e.removeEventListener("webglcontextlost",Re,!1),e.removeEventListener("webglcontextrestored",Te,!1),e.removeEventListener("webglcontextcreationerror",un,!1),ge("WebGLRenderer: "+w.message),w}function se(){pe=new by(z),pe.init(),kt=new cM(z,pe),P=new fy(z,pe,t,kt),S=new oM(z,pe),P.reversedDepthBuffer&&d&&S.buffers.depth.setReversed(!0),st=z.createFramebuffer(),Z=z.createFramebuffer(),K=z.createFramebuffer(),X=new Ty(z),rt=new qS,dt=new lM(z,pe,S,rt,P,kt,X),Pt=new My(V),Nt=new C_(z),Ht=new uy(z,Nt),ft=new wy(z,Nt,X,Ht),xt=new Cy(z,ft,Nt,Ht,X),Y=new Ay(z,P,dt),ie=new py(rt),Ft=new XS(V,Pt,pe,P,Ht,ie),ne=new fM(V,rt),Vt=new ZS,Bt=new eM(pe),Se=new hy(V,Pt,S,xt,y,c),he=new aM(V,xt,P),Mt=new pM(z,X,P,S),Dt=new dy(z,pe,X),gt=new Ey(z,pe,X),X.programs=Ft.programs,V.capabilities=P,V.extensions=pe,V.properties=rt,V.renderLists=Vt,V.shadowMap=he,V.state=S,V.info=X}C!==ii&&(L=new Iy(C,e.width,e.height,o,s,r));let jt=new Vd(V,z);this.xr=jt,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let w=pe.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=pe.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return _t},this.setPixelRatio=function(w){w!==void 0&&(_t=w,this.setSize(Ne,pt,!1))},this.getSize=function(w){return w.set(Ne,pt)},this.setSize=function(w,k,it=!0){if(jt.isPresenting){fe("WebGLRenderer: Can't change size while VR device is presenting.");return}Ne=w,pt=k,e.width=Math.floor(w*_t),e.height=Math.floor(k*_t),it===!0&&(e.style.width=w+"px",e.style.height=k+"px"),L!==null&&L.setSize(e.width,e.height),this.setViewport(0,0,w,k)},this.getDrawingBufferSize=function(w){return w.set(Ne*_t,pt*_t).floor()},this.setDrawingBufferSize=function(w,k,it){Ne=w,pt=k,_t=it,e.width=Math.floor(w*it),e.height=Math.floor(k*it),this.setViewport(0,0,w,k)},this.setEffects=function(w){if(C===ii){ge("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let k=0;k<w.length;k++)if(w[k].isOutputPass===!0){fe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(yt)},this.getViewport=function(w){return w.copy(Gt)},this.setViewport=function(w,k,it,j){w.isVector4?Gt.set(w.x,w.y,w.z,w.w):Gt.set(w,k,it,j),S.viewport(yt.copy(Gt).multiplyScalar(_t).round())},this.getScissor=function(w){return w.copy(ce)},this.setScissor=function(w,k,it,j){w.isVector4?ce.set(w.x,w.y,w.z,w.w):ce.set(w,k,it,j),S.scissor($t.copy(ce).multiplyScalar(_t).round())},this.getScissorTest=function(){return ae},this.setScissorTest=function(w){S.setScissorTest(ae=w)},this.setOpaqueSort=function(w){At=w},this.setTransparentSort=function(w){ee=w},this.getClearColor=function(w){return w.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor(...arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha(...arguments)},this.clear=function(w=!0,k=!0,it=!0){let j=0;if(w){let tt=!1;if(bt!==null){let It=bt.texture.format;tt=p.has(It)}if(tt){let It=bt.texture.type,mt=f.has(It),wt=Se.getClearColor(),Lt=Se.getClearAlpha(),Qt=wt.r,we=wt.g,Ae=wt.b;mt?(N[0]=Qt,N[1]=we,N[2]=Ae,N[3]=Lt,z.clearBufferuiv(z.COLOR,0,N)):(O[0]=Qt,O[1]=we,O[2]=Ae,O[3]=Lt,z.clearBufferiv(z.COLOR,0,O))}else j|=z.COLOR_BUFFER_BIT}k&&(j|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),it&&(j|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j!==0&&z.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),et=w},this.dispose=function(){e.removeEventListener("webglcontextlost",Re,!1),e.removeEventListener("webglcontextrestored",Te,!1),e.removeEventListener("webglcontextcreationerror",un,!1),Se.dispose(),Vt.dispose(),Bt.dispose(),rt.dispose(),Pt.dispose(),xt.dispose(),Ht.dispose(),Mt.dispose(),Ft.dispose(),jt.dispose(),jt.removeEventListener("sessionstart",_r),jt.removeEventListener("sessionend",Di),di.stop()};function Re(w){w.preventDefault(),Ja("WebGLRenderer: Context Lost."),W=!0}function Te(){Ja("WebGLRenderer: Context Restored."),W=!1;let w=X.autoReset,k=he.enabled,it=he.autoUpdate,j=he.needsUpdate,tt=he.type;se(),X.autoReset=w,he.enabled=k,he.autoUpdate=it,he.needsUpdate=j,he.type=tt}function un(w){ge("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Hn(w){let k=w.target;k.removeEventListener("dispose",Hn),gr(k)}function gr(w){da(w),rt.remove(w)}function da(w){let k=rt.get(w).programs;k!==void 0&&(k.forEach(function(it){Ft.releaseProgram(it)}),w.isShaderMaterial&&Ft.releaseShaderCache(w))}this.renderBufferDirect=function(w,k,it,j,tt,It){k===null&&(k=re);let mt=tt.isMesh&&tt.matrixWorld.determinantAffine()<0,wt=Gh(w,k,it,j,tt);S.setMaterial(j,mt);let Lt=it.index,Qt=1;if(j.wireframe===!0){if(Lt=ft.getWireframeAttribute(it),Lt===void 0)return;Qt=2}let we=it.drawRange,Ae=it.attributes.position,Kt=we.start*Qt,Le=(we.start+we.count)*Qt;It!==null&&(Kt=Math.max(Kt,It.start*Qt),Le=Math.min(Le,(It.start+It.count)*Qt)),Lt!==null?(Kt=Math.max(Kt,0),Le=Math.min(Le,Lt.count)):Ae!=null&&(Kt=Math.max(Kt,0),Le=Math.min(Le,Ae.count));let Ke=Le-Kt;if(Ke<0||Ke===1/0)return;Ht.setup(tt,j,wt,it,Lt);let Fe,Xe=Dt;if(Lt!==null&&(Fe=Nt.get(Lt),Xe=gt,Xe.setIndex(Fe)),tt.isMesh)j.wireframe===!0?(S.setLineWidth(j.wireframeLinewidth*me()),Xe.setMode(z.LINES)):Xe.setMode(z.TRIANGLES);else if(tt.isLine){let vn=j.linewidth;vn===void 0&&(vn=1),S.setLineWidth(vn*me()),tt.isLineSegments?Xe.setMode(z.LINES):tt.isLineLoop?Xe.setMode(z.LINE_LOOP):Xe.setMode(z.LINE_STRIP)}else tt.isPoints?Xe.setMode(z.POINTS):tt.isSprite&&Xe.setMode(z.TRIANGLES);if(tt.isBatchedMesh)if(pe.get("WEBGL_multi_draw"))Xe.renderMultiDraw(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount);else{let vn=tt._multiDrawStarts,Zt=tt._multiDrawCounts,Rn=tt._multiDrawCount,Oe=Lt?Nt.get(Lt).bytesPerElement:1,Kn=rt.get(j).currentProgram.getUniforms();for(let ri=0;ri<Rn;ri++)Kn.setValue(z,"_gl_DrawID",ri),Xe.render(vn[ri]/Oe,Zt[ri])}else if(tt.isInstancedMesh)Xe.renderInstances(Kt,Ke,tt.count);else if(it.isInstancedBufferGeometry){let vn=it._maxInstanceCount!==void 0?it._maxInstanceCount:1/0,Zt=Math.min(it.instanceCount,vn);Xe.renderInstances(Kt,Ke,Zt)}else Xe.render(Kt,Ke)};function fa(w,k,it,j){et!==null&&w.isNodeMaterial&&et.setObject(j,w),Et===!0&&ie.setState(w,it,!1),w.transparent===!0&&w.side===$i&&w.forceSinglePass===!1?(w.side=Yn,w.needsUpdate=!0,Bs(w,k,j),w.side=Is,w.needsUpdate=!0,Bs(w,k,j),w.side=$i):Bs(w,k,j)}this.compile=function(w,k,it=null){it===null&&(it=w),et!==null&&et.renderStart(w,k,it),D=Bt.get(it),D.init(k),E.push(D),it.traverseVisible(function(tt){tt.isLight&&tt.layers.test(k.layers)&&(D.pushLight(tt),tt.castShadow&&D.pushShadow(tt))}),w!==it&&w.traverseVisible(function(tt){tt.isLight&&tt.layers.test(k.layers)&&(D.pushLight(tt),tt.castShadow&&D.pushShadow(tt))}),D.setupLights(),et!==null&&et.updateLights(D.state.lightsArray),H=this.localClippingEnabled,Et=ie.init(this.clippingPlanes,H),Et===!0&&ie.setGlobalState(this.clippingPlanes,k),et!==null&&he.render(D.state.shadowsArray,it,k);let j=new Set;return w.traverse(function(tt){if(!(tt.isMesh||tt.isPoints||tt.isLine||tt.isSprite))return;let It=tt.material;if(It)if(Array.isArray(It))for(let mt=0;mt<It.length;mt++){let wt=It[mt];fa(wt,it,k,tt),j.add(wt)}else fa(It,it,k,tt),j.add(It)}),D=E.pop(),et!==null&&et.renderEnd(),j},this.compileAsync=function(w,k,it=null){let j=this.compile(w,k,it);return new Promise(tt=>{function It(){if(j.forEach(function(mt){let Lt=rt.get(mt).currentProgram;(Lt===void 0||Lt.isReady())&&j.delete(mt)}),j.size===0){tt(w);return}setTimeout(It,10)}pe.get("KHR_parallel_shader_compile")!==null?It():setTimeout(It,10)})};let Qi=null;function Hh(w){Qi&&Qi(w)}function _r(){di.stop()}function Di(){di.start()}let di=new Om;di.setAnimationLoop(Hh),typeof self<"u"&&di.setContext(self),this.setAnimationLoop=function(w){Qi=w,jt.setAnimationLoop(w),w===null?di.stop():di.start()},jt.addEventListener("sessionstart",_r),jt.addEventListener("sessionend",Di),this.render=function(w,k){if(k!==void 0&&k.isCamera!==!0){ge("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(W===!0)return;et!==null&&et.renderStart(w,k);let it=jt.enabled===!0&&jt.isPresenting===!0,j=L!==null&&(bt===null||it)&&L.begin(V,bt);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),jt.enabled===!0&&jt.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(jt.cameraAutoUpdate===!0&&jt.updateCamera(k),k=jt.getCamera()),w.isScene===!0&&w.onBeforeRender(V,w,k,bt),D=Bt.get(w,E.length),D.init(k),D.state.textureUnits=dt.getTextureUnits(),E.push(D),Tt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),at.setFromProjectionMatrix(Tt,Ai,k.reversedDepth),H=this.localClippingEnabled,Et=ie.init(this.clippingPlanes,H),b=Vt.get(w,$.length),b.init(),$.push(b),jt.enabled===!0&&jt.isPresenting===!0){let mt=V.xr.getDepthSensingMesh();mt!==null&&xr(mt,k,-1/0,V.sortObjects)}xr(w,k,0,V.sortObjects),b.finish(),et!==null&&et.updateLights(D.state.lightsArray),V.sortObjects===!0&&b.sort(At,ee),ue=jt.enabled===!1||jt.isPresenting===!1||jt.hasDepthSensing()===!1,ue&&Se.addToRenderList(b,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Et===!0&&ie.beginShadows();let tt=D.state.shadowsArray;if(he.render(tt,w,k),Et===!0&&ie.endShadows(),(j&&L.hasRenderPass())===!1){let mt=b.opaque,wt=b.transmissive;if(D.setupLights(),k.isArrayCamera){let Lt=k.cameras;if(wt.length>0)for(let Qt=0,we=Lt.length;Qt<we;Qt++){let Ae=Lt[Qt];ma(mt,wt,w,Ae)}ue&&Se.render(w);for(let Qt=0,we=Lt.length;Qt<we;Qt++){let Ae=Lt[Qt];pa(b,w,Ae,Ae.viewport)}}else wt.length>0&&ma(mt,wt,w,k),ue&&Se.render(w),pa(b,w,k)}bt!==null&&ht===0&&(dt.updateMultisampleRenderTarget(bt),dt.updateRenderTargetMipmap(bt)),j&&L.end(V),w.isScene===!0&&w.onAfterRender(V,w,k),Ht.resetDefaultState(),ut=-1,St=null,E.pop(),E.length>0?(D=E[E.length-1],dt.setTextureUnits(D.state.textureUnits),Et===!0&&ie.setGlobalState(V.clippingPlanes,D.state.camera)):D=null,$.pop(),$.length>0?b=$[$.length-1]:b=null,et!==null&&et.renderEnd()};function xr(w,k,it,j){if(w.visible===!1)return;if(w.layers.test(k.layers)){if(w.isGroup)it=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(k);else if(w.isLightProbeGrid)D.pushLightProbeGrid(w);else if(w.isLight)D.pushLight(w),w.castShadow&&D.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||w.intersectsFrustum(at)){j&&oe.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Tt);let mt=xt.update(w),wt=w.material;wt.visible&&b.push(w,mt,wt,it,oe.z,null,k)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||w.intersectsFrustum(at))){let mt=xt.update(w),wt=w.material;if(j&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),oe.copy(w.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),oe.copy(mt.boundingSphere.center)),oe.applyMatrix4(w.matrixWorld).applyMatrix4(Tt)),Array.isArray(wt)){let Lt=mt.groups;for(let Qt=0,we=Lt.length;Qt<we;Qt++){let Ae=Lt[Qt],Kt=wt[Ae.materialIndex];Kt&&Kt.visible&&b.push(w,mt,Kt,it,oe.z,Ae,k)}}else wt.visible&&b.push(w,mt,wt,it,oe.z,null,k)}}let It=w.children;for(let mt=0,wt=It.length;mt<wt;mt++)xr(It[mt],k,it,j)}function pa(w,k,it,j){let{opaque:tt,transmissive:It,transparent:mt}=w;D.setupLightsView(it),Et===!0&&ie.setGlobalState(V.clippingPlanes,it),j&&S.viewport(yt.copy(j)),tt.length>0&&_s(tt,k,it),It.length>0&&_s(It,k,it),mt.length>0&&_s(mt,k,it),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function ma(w,k,it,j){if((it.isScene===!0?it.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[j.id]===void 0){let Kt=pe.has("EXT_color_buffer_half_float")||pe.has("EXT_color_buffer_float");D.state.transmissionRenderTarget[j.id]=new ei(1,1,{generateMipmaps:!0,type:Kt?Li:ii,minFilter:Ls,samples:Math.max(4,P.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ue.workingColorSpace})}let It=D.state.transmissionRenderTarget[j.id],mt=j.viewport||yt;It.setSize(mt.z*V.transmissionResolutionScale,mt.w*V.transmissionResolutionScale);let wt=V.getRenderTarget(),Lt=V.getActiveCubeFace(),Qt=V.getActiveMipmapLevel();V.setRenderTarget(It),V.getClearColor(ke),Ee=V.getClearAlpha(),Ee<1&&V.setClearColor(16777215,.5),V.clear(),ue&&Se.render(it);let we=V.toneMapping;V.toneMapping=Ii;let Ae=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),D.setupLightsView(j),Et===!0&&ie.setGlobalState(V.clippingPlanes,j),_s(w,it,j),dt.updateMultisampleRenderTarget(It),dt.updateRenderTargetMipmap(It),pe.has("WEBGL_multisampled_render_to_texture")===!1){let Kt=!1;for(let Le=0,Ke=k.length;Le<Ke;Le++){let Fe=k[Le],{object:Xe,geometry:vn,material:Zt,group:Rn}=Fe;if(Zt.side===$i&&Xe.layers.test(j.layers)){let Oe=Zt.side;Zt.side=Yn,Zt.needsUpdate=!0,ga(Xe,it,j,vn,Zt,Rn),Zt.side=Oe,Zt.needsUpdate=!0,Kt=!0}}Kt===!0&&(dt.updateMultisampleRenderTarget(It),dt.updateRenderTargetMipmap(It))}V.setRenderTarget(wt,Lt,Qt),V.setClearColor(ke,Ee),Ae!==void 0&&(j.viewport=Ae),V.toneMapping=we}function _s(w,k,it){let j=k.isScene===!0?k.overrideMaterial:null;for(let tt=0,It=w.length;tt<It;tt++){let mt=w[tt],{object:wt,geometry:Lt,group:Qt}=mt,we=mt.material;we.allowOverride===!0&&j!==null&&(we=j),wt.layers.test(it.layers)&&ga(wt,k,it,Lt,we,Qt)}}function ga(w,k,it,j,tt,It){et!==null&&tt.isNodeMaterial&&et.setObject(w,tt),w.onBeforeRender(V,k,it,j,tt,It),w.modelViewMatrix.multiplyMatrices(it.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),tt.onBeforeRender(V,k,it,j,w,It),tt.transparent===!0&&tt.side===$i&&tt.forceSinglePass===!1?(tt.side=Yn,tt.needsUpdate=!0,V.renderBufferDirect(it,k,j,tt,w,It),tt.side=Is,tt.needsUpdate=!0,V.renderBufferDirect(it,k,j,tt,w,It),tt.side=$i):V.renderBufferDirect(it,k,j,tt,w,It),w.onAfterRender(V,k,it,j,tt,It)}function Bs(w,k,it){k.isScene!==!0&&(k=re);let j=rt.get(w),tt=D.state.lights,It=D.state.shadowsArray,mt=tt.state.version,wt=Ft.getParameters(w,tt.state,It,k,it,D.state.lightProbeGridArray),Lt=Ft.getProgramCacheKey(wt),Qt=j.programs;j.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?k.environment:null,j.fog=k.fog;let we=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;j.envMap=Pt.get(w.envMap||j.environment,we),j.envMapRotation=j.environment!==null&&w.envMap===null?k.environmentRotation:w.envMapRotation,Qt===void 0&&(w.addEventListener("dispose",Hn),Qt=new Map,j.programs=Qt);let Ae=Qt.get(Lt);if(Ae!==void 0){if(j.currentProgram===Ae&&j.lightsStateVersion===mt)return zs(w,wt),Ae}else wt.uniforms=Ft.getUniforms(w),et!==null&&w.isNodeMaterial&&et.build(w,it,wt),w.onBeforeCompile(wt,V),Ae=Ft.acquireProgram(wt,Lt),Qt.set(Lt,Ae),j.uniforms=wt.uniforms;let Kt=j.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Kt.clippingPlanes=ie.uniform),zs(w,wt),j.needsLights=Wh(w),j.lightsStateVersion=mt,j.needsLights&&(Kt.ambientLightColor.value=tt.state.ambient,Kt.lightProbe.value=tt.state.probe,Kt.sunLights.value=tt.state.sun,Kt.sunLightShadows.value=tt.state.sunShadow,Kt.directionalLights.value=tt.state.directional,Kt.directionalLightShadows.value=tt.state.directionalShadow,Kt.spotLights.value=tt.state.spot,Kt.spotLightShadows.value=tt.state.spotShadow,Kt.rectAreaLights.value=tt.state.rectArea,Kt.ltc_1.value=tt.state.rectAreaLTC1,Kt.ltc_2.value=tt.state.rectAreaLTC2,Kt.pointLights.value=tt.state.point,Kt.pointLightShadows.value=tt.state.pointShadow,Kt.hemisphereLights.value=tt.state.hemi,Kt.sunShadowMatrix.value=tt.state.sunShadowMatrix,Kt.sunShadowCascade.value=tt.state.sunShadowCascade,Kt.directionalShadowMatrix.value=tt.state.directionalShadowMatrix,Kt.spotLightMatrix.value=tt.state.spotLightMatrix,Kt.spotLightMap.value=tt.state.spotLightMap,Kt.pointShadowMatrix.value=tt.state.pointShadowMatrix),j.lightProbeGrid=D.state.lightProbeGridArray.length>0,j.currentProgram=Ae,j.uniformsList=null,Ae}function ks(w){if(w.uniformsList===null){let k=w.currentProgram.getUniforms();w.uniformsList=aa.seqWithValue(k.seq,w.uniforms)}return w.uniformsList}function zs(w,k){let it=rt.get(w);it.outputColorSpace=k.outputColorSpace,it.batching=k.batching,it.batchingColor=k.batchingColor,it.instancing=k.instancing,it.instancingColor=k.instancingColor,it.instancingMorph=k.instancingMorph,it.skinning=k.skinning,it.morphTargets=k.morphTargets,it.morphNormals=k.morphNormals,it.morphColors=k.morphColors,it.morphTargetsCount=k.morphTargetsCount,it.numClippingPlanes=k.numClippingPlanes,it.numIntersection=k.numClipIntersection,it.vertexAlphas=k.vertexAlphas,it.vertexTangents=k.vertexTangents,it.toneMapping=k.toneMapping}function $h(w,k){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;A.setFromMatrixPosition(k.matrixWorld);for(let it=0,j=w.length;it<j;it++){let tt=w[it];if(tt.texture!==null&&tt.boundingBox.containsPoint(A))return tt}return null}function Gh(w,k,it,j,tt){k.isScene!==!0&&(k=re),dt.resetTextureUnits();let It=k.fog,mt=j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial?k.environment:null,wt=bt===null?V.outputColorSpace:bt.isXRRenderTarget===!0?bt.texture.colorSpace:Ue.workingColorSpace,Lt=j.isMeshStandardMaterial||j.isMeshLambertMaterial&&!j.envMap||j.isMeshPhongMaterial&&!j.envMap,Qt=Pt.get(j.envMap||mt,Lt),we=j.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,Ae=!!it.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Kt=!!it.morphAttributes.position,Le=!!it.morphAttributes.normal,Ke=!!it.morphAttributes.color,Fe=Ii;j.toneMapped&&(bt===null||bt.isXRRenderTarget===!0)&&(Fe=V.toneMapping);let Xe=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,vn=Xe!==void 0?Xe.length:0,Zt=rt.get(j),Rn=D.state.lights;if(Et===!0&&(H===!0||w!==St)){let Be=w===St&&j.id===ut;ie.setState(j,w,Be)}let Oe=!1;j.version===Zt.__version?(Zt.needsLights&&Zt.lightsStateVersion!==Rn.state.version||Zt.outputColorSpace!==wt||tt.isBatchedMesh&&Zt.batching===!1||!tt.isBatchedMesh&&Zt.batching===!0||tt.isBatchedMesh&&Zt.batchingColor===!0&&tt._colorsTexture===null||tt.isBatchedMesh&&Zt.batchingColor===!1&&tt._colorsTexture!==null||tt.isInstancedMesh&&Zt.instancing===!1||!tt.isInstancedMesh&&Zt.instancing===!0||tt.isSkinnedMesh&&Zt.skinning===!1||!tt.isSkinnedMesh&&Zt.skinning===!0||tt.isInstancedMesh&&Zt.instancingColor===!0&&tt.instanceColor===null||tt.isInstancedMesh&&Zt.instancingColor===!1&&tt.instanceColor!==null||tt.isInstancedMesh&&Zt.instancingMorph===!0&&tt.morphTexture===null||tt.isInstancedMesh&&Zt.instancingMorph===!1&&tt.morphTexture!==null||Zt.envMap!==Qt||j.fog===!0&&Zt.fog!==It||Zt.numClippingPlanes!==void 0&&(Zt.numClippingPlanes!==ie.numPlanes||Zt.numIntersection!==ie.numIntersection)||Zt.vertexAlphas!==we||Zt.vertexTangents!==Ae||Zt.morphTargets!==Kt||Zt.morphNormals!==Le||Zt.morphColors!==Ke||Zt.toneMapping!==Fe||Zt.morphTargetsCount!==vn||!!Zt.lightProbeGrid!=D.state.lightProbeGridArray.length>0)&&(Oe=!0):(Oe=!0,Zt.__version=j.version);let Kn=Zt.currentProgram;Oe===!0&&(Kn=Bs(j,k,tt),et&&j.isNodeMaterial&&et.onUpdateProgram(j,Kn,Zt));let ri=!1,Ce=!1,xs=!1,He=Kn.getUniforms(),tn=Zt.uniforms;if(S.useProgram(Kn.program)&&(ri=!0,Ce=!0,xs=!0),j.id!==ut&&(ut=j.id,Ce=!0),Zt.needsLights){let Be=$h(D.state.lightProbeGridArray,tt);Zt.lightProbeGrid!==Be&&(Zt.lightProbeGrid=Be,Ce=!0)}if(ri||St!==w){S.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),He.setValue(z,"projectionMatrix",w.projectionMatrix),He.setValue(z,"viewMatrix",w.matrixWorldInverse);let yn=He.map.cameraPosition;yn!==void 0&&yn.setValue(z,Ut.setFromMatrixPosition(w.matrixWorld)),P.logarithmicDepthBuffer&&He.setValue(z,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&He.setValue(z,"isOrthographic",w.isOrthographicCamera===!0),St!==w&&(St=w,Ce=!0,xs=!0)}if(Zt.needsLights&&(Rn.state.sunShadowMap.length>0&&He.setValue(z,"sunShadowMap",Rn.state.sunShadowMap,dt),Rn.state.directionalShadowMap.length>0&&He.setValue(z,"directionalShadowMap",Rn.state.directionalShadowMap,dt),Rn.state.spotShadowMap.length>0&&He.setValue(z,"spotShadowMap",Rn.state.spotShadowMap,dt),Rn.state.pointShadowMap.length>0&&He.setValue(z,"pointShadowMap",Rn.state.pointShadowMap,dt)),tt.isSkinnedMesh){He.setOptional(z,tt,"bindMatrix"),He.setOptional(z,tt,"bindMatrixInverse");let Be=tt.skeleton;Be&&(Be.boneTexture===null&&Be.computeBoneTexture(),He.setValue(z,"boneTexture",Be.boneTexture,dt))}tt.isBatchedMesh&&(He.setOptional(z,tt,"batchingTexture"),He.setValue(z,"batchingTexture",tt._matricesTexture,dt),He.setOptional(z,tt,"batchingIdTexture"),He.setValue(z,"batchingIdTexture",tt._indirectTexture,dt),He.setOptional(z,tt,"batchingColorTexture"),tt._colorsTexture!==null&&He.setValue(z,"batchingColorTexture",tt._colorsTexture,dt));let fi=it.morphAttributes;if((fi.position!==void 0||fi.normal!==void 0||fi.color!==void 0)&&Y.update(tt,it,Kn),(Ce||Zt.receiveShadow!==tt.receiveShadow)&&(Zt.receiveShadow=tt.receiveShadow,He.setValue(z,"receiveShadow",tt.receiveShadow)),(j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial)&&j.envMap===null&&k.environment!==null&&(tn.envMapIntensity.value=k.environmentIntensity),tn.dfgLUT!==void 0&&(tn.dfgLUT.value=gM()),Ce){if(He.setValue(z,"toneMappingExposure",V.toneMappingExposure),Zt.needsLights&&Yo(tn,xs),It&&j.fog===!0&&ne.refreshFogUniforms(tn,It),ne.refreshMaterialUniforms(tn,j,_t,pt,D.state.transmissionRenderTarget[w.id]),Zt.needsLights&&Zt.lightProbeGrid){let Be=Zt.lightProbeGrid;tn.probesSH.value=Be.texture,tn.probesMin.value.copy(Be.boundingBox.min),tn.probesMax.value.copy(Be.boundingBox.max),tn.probesResolution.value.copy(Be.resolution)}aa.upload(z,ks(Zt),tn,dt)}if(j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(aa.upload(z,ks(Zt),tn,dt),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&He.setValue(z,"center",tt.center),He.setValue(z,"modelViewMatrix",tt.modelViewMatrix),He.setValue(z,"normalMatrix",tt.normalMatrix),He.setValue(z,"modelMatrix",tt.matrixWorld),j.uniformsGroups!==void 0){let Be=j.uniformsGroups;for(let yn=0,ts=Be.length;yn<ts;yn++){let Ni=Be[yn];Mt.update(Ni,Kn),Mt.bind(Ni,Kn)}}return Kn}function Yo(w,k){w.ambientLightColor.needsUpdate=k,w.lightProbe.needsUpdate=k,w.sunLights.needsUpdate=k,w.sunLightShadows.needsUpdate=k,w.directionalLights.needsUpdate=k,w.directionalLightShadows.needsUpdate=k,w.pointLights.needsUpdate=k,w.pointLightShadows.needsUpdate=k,w.spotLights.needsUpdate=k,w.spotLightShadows.needsUpdate=k,w.rectAreaLights.needsUpdate=k,w.hemisphereLights.needsUpdate=k}function Wh(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return lt},this.getActiveMipmapLevel=function(){return ht},this.getRenderTarget=function(){return bt},this.setRenderTargetTextures=function(w,k,it){let j=rt.get(w);j.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),rt.get(w.texture).__webglTexture=k,rt.get(w.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:it,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,k){let it=rt.get(w);it.__webglFramebuffer=k,it.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(w,k=0,it=0){bt=w,lt=k,ht=it;let j=null,tt=!1,It=!1;if(w){let wt=rt.get(w);if(wt.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(z.FRAMEBUFFER,wt.__webglFramebuffer),yt.copy(w.viewport),$t.copy(w.scissor),Xt=w.scissorTest,S.viewport(yt),S.scissor($t),S.setScissorTest(Xt),ut=-1;return}else if(wt.__webglFramebuffer===void 0)dt.setupRenderTarget(w);else if(wt.__hasExternalTextures)dt.rebindTextures(w,rt.get(w.texture).__webglTexture,rt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let we=w.depthTexture;if(wt.__boundDepthTexture!==we){if(we!==null&&rt.has(we)&&(w.width!==we.image.width||w.height!==we.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");dt.setupDepthRenderbuffer(w)}}let Lt=w.texture;(Lt.isData3DTexture||Lt.isDataArrayTexture||Lt.isCompressedArrayTexture)&&(It=!0);let Qt=rt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Qt[k])?j=Qt[k][it]:j=Qt[k],tt=!0):w.samples>0&&dt.useMultisampledRTT(w)===!1?j=rt.get(w).__webglMultisampledFramebuffer:Array.isArray(Qt)?j=Qt[it]:j=Qt,yt.copy(w.viewport),$t.copy(w.scissor),Xt=w.scissorTest}else yt.copy(Gt).multiplyScalar(_t).floor(),$t.copy(ce).multiplyScalar(_t).floor(),Xt=ae;if(it!==0&&(j=st),S.bindFramebuffer(z.FRAMEBUFFER,j)&&S.drawBuffers(w,j),S.viewport(yt),S.scissor($t),S.setScissorTest(Xt),tt){let wt=rt.get(w.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+k,wt.__webglTexture,it)}else if(It){let wt=k;for(let Lt=0;Lt<w.textures.length;Lt++){let Qt=rt.get(w.textures[Lt]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Lt,Qt.__webglTexture,it,wt)}}else if(w!==null&&it!==0){let wt=rt.get(w.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,wt.__webglTexture,it)}ut=-1};function $n(w){let k=rt.get(w);return(k.__readFormat!==w.format||k.__readType!==w.type)&&(k.__readFormat=w.format,k.__readType=w.type,k.__formatReadable=P.textureFormatReadable(w.format),k.__typeReadable=P.textureTypeReadable(w.type)),k}this.readRenderTargetPixels=function(w,k,it,j,tt,It,mt,wt=0){if(!(w&&w.isWebGLRenderTarget)){ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=rt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&mt!==void 0&&(Lt=Lt[mt]),Lt){S.bindFramebuffer(z.FRAMEBUFFER,Lt);try{let Qt=w.textures[wt],we=Qt.format,Ae=Qt.type;w.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+wt);let Kt=$n(Qt);if(Kt.__formatReadable===!1){ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Kt.__typeReadable===!1){ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=w.width-j&&it>=0&&it<=w.height-tt&&z.readPixels(k,it,j,tt,kt.convert(we),kt.convert(Ae),It)}finally{let Qt=bt!==null?rt.get(bt).__webglFramebuffer:null;S.bindFramebuffer(z.FRAMEBUFFER,Qt)}}},this.readRenderTargetPixelsAsync=async function(w,k,it,j,tt,It,mt,wt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=rt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&mt!==void 0&&(Lt=Lt[mt]),Lt)if(k>=0&&k<=w.width-j&&it>=0&&it<=w.height-tt){S.bindFramebuffer(z.FRAMEBUFFER,Lt);let Qt=w.textures[wt],we=Qt.format,Ae=Qt.type;w.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+wt);let Kt=$n(Qt);if(Kt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Kt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Le=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Le),z.bufferData(z.PIXEL_PACK_BUFFER,It.byteLength,z.STREAM_READ),z.readPixels(k,it,j,tt,kt.convert(we),kt.convert(Ae),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);let Ke=bt!==null?rt.get(bt).__webglFramebuffer:null;S.bindFramebuffer(z.FRAMEBUFFER,Ke);let Fe=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await om(z,Fe,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Le),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,It),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(Le),z.deleteSync(Fe),It}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,k=null,it=0){let j=Math.pow(2,-it),tt=Math.floor(w.image.width*j),It=Math.floor(w.image.height*j),mt=k!==null?k.x:0,wt=k!==null?k.y:0;dt.setTexture2D(w,0),z.copyTexSubImage2D(z.TEXTURE_2D,it,0,0,mt,wt,tt,It),S.unbindTexture()},this.copyTextureToTexture=function(w,k,it=null,j=null,tt=0,It=0){let mt,wt,Lt,Qt,we,Ae,Kt,Le,Ke,Fe=w.isCompressedTexture?w.mipmaps[It]:w.image;if(it!==null)mt=it.max.x-it.min.x,wt=it.max.y-it.min.y,Lt=it.isBox3?it.max.z-it.min.z:1,Qt=it.min.x,we=it.min.y,Ae=it.isBox3?it.min.z:0;else{let tn=Math.pow(2,-tt);mt=Math.floor(Fe.width*tn),wt=Math.floor(Fe.height*tn),w.isDataArrayTexture?Lt=Fe.depth:w.isData3DTexture?Lt=Math.floor(Fe.depth*tn):Lt=1,Qt=0,we=0,Ae=0}j!==null?(Kt=j.x,Le=j.y,Ke=j.z):(Kt=0,Le=0,Ke=0);let Xe=kt.convert(k.format),vn=kt.convert(k.type),Zt;k.isData3DTexture?(dt.setTexture3D(k,0),Zt=z.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(dt.setTexture2DArray(k,0),Zt=z.TEXTURE_2D_ARRAY):(dt.setTexture2D(k,0),Zt=z.TEXTURE_2D),S.activeTexture(z.TEXTURE0),S.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,k.flipY),S.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),S.pixelStorei(z.UNPACK_ALIGNMENT,k.unpackAlignment);let Rn=S.getParameter(z.UNPACK_ROW_LENGTH),Oe=S.getParameter(z.UNPACK_IMAGE_HEIGHT),Kn=S.getParameter(z.UNPACK_SKIP_PIXELS),ri=S.getParameter(z.UNPACK_SKIP_ROWS),Ce=S.getParameter(z.UNPACK_SKIP_IMAGES);S.pixelStorei(z.UNPACK_ROW_LENGTH,Fe.width),S.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Fe.height),S.pixelStorei(z.UNPACK_SKIP_PIXELS,Qt),S.pixelStorei(z.UNPACK_SKIP_ROWS,we),S.pixelStorei(z.UNPACK_SKIP_IMAGES,Ae);let xs=w.isDataArrayTexture||w.isData3DTexture,He=k.isDataArrayTexture||k.isData3DTexture;if(w.isDepthTexture){let tn=rt.get(w),fi=rt.get(k),Be=rt.get(tn.__renderTarget),yn=rt.get(fi.__renderTarget);S.bindFramebuffer(z.READ_FRAMEBUFFER,Be.__webglFramebuffer),S.bindFramebuffer(z.DRAW_FRAMEBUFFER,yn.__webglFramebuffer);for(let ts=0;ts<Lt;ts++)xs&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,rt.get(w).__webglTexture,tt,Ae+ts),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,rt.get(k).__webglTexture,It,Ke+ts)),z.blitFramebuffer(Qt,we,mt,wt,Kt,Le,mt,wt,z.DEPTH_BUFFER_BIT,z.NEAREST);S.bindFramebuffer(z.READ_FRAMEBUFFER,null),S.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(tt!==0||w.isRenderTargetTexture||rt.has(w)){let tn=rt.get(w),fi=rt.get(k);S.bindFramebuffer(z.READ_FRAMEBUFFER,Z),S.bindFramebuffer(z.DRAW_FRAMEBUFFER,K);for(let Be=0;Be<Lt;Be++)xs?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,tn.__webglTexture,tt,Ae+Be):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,tn.__webglTexture,tt),He?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,fi.__webglTexture,It,Ke+Be):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,fi.__webglTexture,It),tt!==0?z.blitFramebuffer(Qt,we,mt,wt,Kt,Le,mt,wt,z.COLOR_BUFFER_BIT,z.NEAREST):He?z.copyTexSubImage3D(Zt,It,Kt,Le,Ke+Be,Qt,we,mt,wt):z.copyTexSubImage2D(Zt,It,Kt,Le,Qt,we,mt,wt);S.bindFramebuffer(z.READ_FRAMEBUFFER,null),S.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else He?w.isDataTexture||w.isData3DTexture?z.texSubImage3D(Zt,It,Kt,Le,Ke,mt,wt,Lt,Xe,vn,Fe.data):k.isCompressedArrayTexture?z.compressedTexSubImage3D(Zt,It,Kt,Le,Ke,mt,wt,Lt,Xe,Fe.data):z.texSubImage3D(Zt,It,Kt,Le,Ke,mt,wt,Lt,Xe,vn,Fe):w.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,It,Kt,Le,mt,wt,Xe,vn,Fe.data):w.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,It,Kt,Le,Fe.width,Fe.height,Xe,Fe.data):z.texSubImage2D(z.TEXTURE_2D,It,Kt,Le,mt,wt,Xe,vn,Fe);S.pixelStorei(z.UNPACK_ROW_LENGTH,Rn),S.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Oe),S.pixelStorei(z.UNPACK_SKIP_PIXELS,Kn),S.pixelStorei(z.UNPACK_SKIP_ROWS,ri),S.pixelStorei(z.UNPACK_SKIP_IMAGES,Ce),It===0&&k.generateMipmaps&&z.generateMipmap(Zt),S.unbindTexture()},this.initRenderTarget=function(w){rt.get(w).__webglFramebuffer===void 0&&dt.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?dt.setTextureCube(w,0):w.isData3DTexture?dt.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?dt.setTexture2DArray(w,0):dt.setTexture2D(w,0),S.unbindTexture()},this.resetState=function(){lt=0,ht=0,bt=null,S.reset(),Ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Ue._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ue._getUnpackColorSpace()}};var Wm=new qn,Eh=new G,fs=class extends Eo{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new cn(t,3)),this.setAttribute("uv",new cn(e,2))}applyMatrix4(t){let e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new Rs(e,6,1);return this.setAttribute("instanceStart",new Ri(n,3,0)),this.setAttribute("instanceEnd",new Ri(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new Rs(e,6,1);return this.setAttribute("instanceColorStart",new Ri(n,3,0)),this.setAttribute("instanceColorEnd",new Ri(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new xo(t.geometry)),this}fromLineSegments(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qn);let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),Wm.setFromBufferAttribute(e),this.boundingBox.union(Wm))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ni),this.boundingBox===null&&this.computeBoundingBox();let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Eh.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Eh)),Eh.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Eh));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}};zt.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Ot},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Zn.line={uniforms:Oo.merge([zt.common,zt.fog,zt.line]),vertexShader:`
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
		`};var Xi=class extends An{constructor(t){super({type:"LineMaterial",uniforms:Oo.clone(Zn.line.uniforms),vertexShader:Zn.line.vertexShader,fragmentShader:Zn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0!==this.worldUnits&&(this.needsUpdate=!0),t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var Hd=new We,Xm=new G,qm=new G,Pn=new We,Ln=new We,qi=new We,$d=new G,Gd=new Ve,Dn=new Ao,Ym=new G,Th=new qn,Ah=new ni,Yi=new We,Zi,cr;function Zm(i,t,e){return Yi.set(0,0,-t,1).applyMatrix4(i.projectionMatrix),Yi.multiplyScalar(1/Yi.w),Yi.x=cr/e.width,Yi.y=cr/e.height,Yi.applyMatrix4(i.projectionMatrixInverse),Yi.multiplyScalar(1/Yi.w),Math.abs(Math.max(Yi.x,Yi.y))}function _M(i,t){let e=i.matrixWorld,n=i.geometry,s=n.attributes.instanceStart,r=n.attributes.instanceEnd,a=Math.min(n.instanceCount,s.count);for(let o=0,c=a;o<c;o++){Dn.start.fromBufferAttribute(s,o),Dn.end.fromBufferAttribute(r,o),Dn.applyMatrix4(e);let h=new G,u=new G;Zi.distanceSqToSegment(Dn.start,Dn.end,u,h),u.distanceTo(h)<cr*.5&&t.push({point:u,pointOnLine:h,distance:Zi.origin.distanceTo(u),object:i,face:null,faceIndex:o,uv:null,uv1:null})}}function xM(i,t,e){let n=t.projectionMatrix,r=i.material.resolution,a=i.matrixWorld,o=i.geometry,c=o.attributes.instanceStart,h=o.attributes.instanceEnd,u=Math.min(o.instanceCount,c.count),g=-t.near;Zi.at(1,qi),qi.w=1,qi.applyMatrix4(t.matrixWorldInverse),qi.applyMatrix4(n),qi.multiplyScalar(1/qi.w),qi.x*=r.x/2,qi.y*=r.y/2,qi.z=0,$d.copy(qi),Gd.multiplyMatrices(t.matrixWorldInverse,a);for(let d=0,_=u;d<_;d++){if(Pn.fromBufferAttribute(c,d),Ln.fromBufferAttribute(h,d),Pn.w=1,Ln.w=1,Pn.applyMatrix4(Gd),Ln.applyMatrix4(Gd),Pn.z>g&&Ln.z>g)continue;if(Pn.z>g){let O=Pn.z-Ln.z,A=(Pn.z-g)/O;Pn.lerp(Ln,A)}else if(Ln.z>g){let O=Ln.z-Pn.z,A=(Ln.z-g)/O;Ln.lerp(Pn,A)}Pn.applyMatrix4(n),Ln.applyMatrix4(n),Pn.multiplyScalar(1/Pn.w),Ln.multiplyScalar(1/Ln.w),Pn.x*=r.x/2,Pn.y*=r.y/2,Ln.x*=r.x/2,Ln.y*=r.y/2,Dn.start.copy(Pn),Dn.start.z=0,Dn.end.copy(Ln),Dn.end.z=0;let C=Dn.closestPointToPointParameter($d,!0);Dn.at(C,Ym);let p=Sd.lerp(Pn.z,Ln.z,C),f=p>=-1&&p<=1,N=$d.distanceTo(Ym)<cr*.5;if(f&&N){Dn.start.fromBufferAttribute(c,d),Dn.end.fromBufferAttribute(h,d),Dn.start.applyMatrix4(a),Dn.end.applyMatrix4(a);let O=new G,A=new G;Zi.distanceSqToSegment(Dn.start,Dn.end,A,O),e.push({point:A,pointOnLine:O,distance:Zi.origin.distanceTo(A),object:i,face:null,faceIndex:d,uv:null,uv1:null})}}}var hr=class extends Tn{constructor(t=new fs,e=new Xi({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,s=new Float32Array(2*e.count);for(let a=0,o=0,c=e.count;a<c;a++,o+=2)Xm.fromBufferAttribute(e,a),qm.fromBufferAttribute(n,a),s[o]=o===0?0:s[o-1],s[o+1]=s[o]+Xm.distanceTo(qm);let r=new Rs(s,2,1);return t.setAttribute("instanceDistanceStart",new Ri(r,1,0)),t.setAttribute("instanceDistanceEnd",new Ri(r,1,1)),this}raycast(t,e){let n=this.material.worldUnits,s=t.camera;if(s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.'),n===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;let r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;Zi=t.ray;let a=this.matrixWorld,o=this.geometry,c=this.material;cr=c.linewidth+r,o.boundingSphere===null&&o.computeBoundingSphere(),Ah.copy(o.boundingSphere).applyMatrix4(a);let h;if(n)h=cr*.5;else{let g=Math.max(s.near,Ah.distanceToPoint(Zi.origin));h=Zm(s,g,c.resolution)}if(Ah.radius+=h,Zi.intersectsSphere(Ah)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),Th.copy(o.boundingBox).applyMatrix4(a);let u;if(n)u=cr*.5;else{let g=Math.max(s.near,Th.distanceToPoint(Zi.origin));u=Zm(s,g,c.resolution)}Th.expandByScalar(u),Zi.intersectsBox(Th)!==!1&&(n?_M(this,e):xM(this,s,e))}onBeforeRender(t){let e=this.material.uniforms;e&&e.resolution&&(t.getViewport(Hd),this.material.uniforms.resolution.value.set(Hd.z,Hd.w))}};var Us=i=>window.__L==="en"?i+" ago":(window.__L==="ca"?"fa ":"hace ")+i;function Jm(i){let t=window.__ROD__,{scene:e,camera:n,goal:s,cur:r,invalidate:a,K:o,CX:c,CY:h,mcs:u,q:g,list:d,clamp:_,norm:y,munis:C}=i,p=l=>document.querySelector(l),f=l=>String(l).replace(/[<>&"]/g,m=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[m]),N=(l,m)=>[(l-c)*o,(m-h)*o],O=.06,A=t.segs.map(l=>{let m=[],v=[0];for(let M=0;M<l.length;M+=2){let T=N(l[M],l[M+1]);m.length&&v.push(v[v.length-1]+Math.hypot(T[0]-m[m.length-1][0],T[1]-m[m.length-1][1])),m.push(T)}return{p:m,c:v,L:v[v.length-1]}}),b=t.stops.map(([l,m,v,M])=>({n:l,id:M,w:N(m,v),fams:new Set})),D=t.routes.map(([l,m,v])=>({s:l,l:m,c:v})),$=new Map;(t.bus||[]).forEach(([l,m,v,M])=>{let T={days:new Set(l),name:m,stops:v,times:M};v.forEach((I,F)=>{if(F<v.length-1){let U=$.get(I)||[];U.push([T,F]),$.set(I,U)}})});function E(l,m,v){let M=ae(),T=t.days.indexOf(M.ymd),I=[];for(let[F,U]of $.get(l)||[]){if(!F.days.has(T))continue;let B=F.times[U];if(B<m||B>v)continue;let J=F.stops[F.stops.length-1];I.push({sm:B,est:B,dl:0,fam:F.name,dest:b[J].n,destId:b[J].id,plat:"",cancel:!1,obs:"",live:!1,num:"",tid:"",tr:null,bus:!0,src:"bus",bstops:F.stops.slice(U)})}return I}let L=(l,m)=>{let v=l.match(/^R([A-Z]*)(\d*)(.*)$/),M=m.match(/^R([A-Z]*)(\d*)(.*)$/);return(v[1]||"").localeCompare(M[1]||"")||(+v[2]||0)-(+M[2]||0)||v[3].localeCompare(M[3])},V=[...new Set(D.map(l=>l.s))].sort(L),W={};D.forEach(l=>{W[l.s]||(W[l.s]=l.c)});let et=t.pats.map(([l,m,v])=>({stops:l,t:m,segs:v})),st=t.trips.map(([l,m,v,M,T],I)=>({day:l,pat:et[m],fam:D[v].s,c:D[v].c,t0:M,num:T,tid:t.tids[I]})),Z={};V.forEach(l=>Z[l]=new Set),st.forEach(l=>{l.pat.segs.forEach(m=>Z[l.fam].add(m)),l.pat.stops.forEach(m=>b[m].fams.add(l.fam))});let K=t.days.map((l,m)=>st.filter(v=>v.day===m)),lt=new Map(st.map(l=>[l.tid,l])),ht=[124.87404143965449,479.9901289885639,124.62688710863031,249.99562739146893,486.739003764725,248.0364802782304,2037.1344308355726],bt=Math.PI/180,ut=3.922*bt,St=-39.705*bt;function yt(l,m){let v=l*bt+ut,M=m*bt,T=Math.cos(St),I=Math.sin(St),F=Math.cos(M),U=Math.cos(v)*F,B=Math.sin(v)*F,J=Math.sin(M),nt=Math.atan2(B,U*T-J*I),x=Math.asin(J*T+U*I),R=Math.sqrt(2/(1+Math.cos(nt)*Math.cos(x))),q=R*Math.cos(x)*Math.sin(nt),Q=R*Math.sin(x),[vt,Ct,Jt,Rt,ot,_e,te]=ht;return N((Ct+vt*q-ot)*te,(_e-(Rt-Jt*Q))*te)}let $t=new Map(b.map((l,m)=>[l.id,m]));function Xt(l){if(l.g)return l.g;let m=[],v=[],M=[0],T=0;return l.segs.forEach((I,F)=>{let U=A[I];U.p.forEach((B,J)=>{F&&!J||(m.push(B),v.push(T+U.c[J]))}),T+=U.L,M.push(T)}),l.g={pts:m,cum:v,stopD:M}}function ke(l,m,v,M){let T=1e18,I=0;for(let F=0;F+1<l.pts.length;F++){if(l.cum[F+1]<v||l.cum[F]>M)continue;let U=l.pts[F],B=l.pts[F+1],J=B[0]-U[0],nt=B[1]-U[1],x=J*J+nt*nt||1e-9,R=Math.max(0,Math.min(1,((m[0]-U[0])*J+(m[1]-U[1])*nt)/x)),q=U[0]+J*R-m[0],Q=U[1]+nt*R-m[1],vt=q*q+Q*Q;vt<T&&(T=vt,I=l.cum[F]+R*(l.cum[F+1]-l.cum[F]))}return{d:I,err:Math.sqrt(T)}}function Ee(l,m){let v=0,M=l.cum.length-1;if(m<=0)return l.pts[0];if(m>=l.cum[M])return l.pts[M];for(;M-v>1;){let U=v+M>>1;l.cum[U]<=m?v=U:M=U}let T=(m-l.cum[v])/(l.cum[M]-l.cum[v]||1),I=l.pts[v],F=l.pts[M];return[I[0]+(F[0]-I[0])*T,I[1]+(F[1]-I[1])*T]}let Ne=l=>`${l.slice(6,8)}/${l.slice(4,6)}`,pt=new Intl.DateTimeFormat("es-ES",{timeZone:"Europe/Madrid",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hourCycle:"h23"});function _t(l){let m={};return pt.formatToParts(l).forEach(v=>m[v.type]=v.value),{ymd:m.year+m.month+m.day,min:+m.hour*60+ +m.minute+ +m.second/60}}let At=0,ee=null,Gt=0,ce=0;function ae(){let l=_t(new Date);if(At===0&&ee==null)return{...l,live:!0};let m=ee==null?l.min:Gt+(At?(performance.now()-ce)/6e4*At:0);return{ymd:l.ymd,min:m,live:!1}}let at=l=>(l=(Math.round(l)%1440+1440)%1440,String(Math.floor(l/60)).padStart(2,"0")+":"+String(l%60).padStart(2,"0")),Et="https://rodalies.erathegameoftime.com",H={url:"",delays:new Map,tu:new Map,vp:new Map,alerts:[],ok:0,okVP:0,err:"",feedTs:0};try{let l=new URLSearchParams(location.search).get("rt");l&&localStorage.setItem("rod_rt",l);let m=localStorage.getItem("rod_rt");m&&/jhmuyo\.workers\.dev/.test(m)&&(m=Et,localStorage.setItem("rod_rt",m)),H.url=m||Et}catch{H.url=Et}let Tt=(l,m)=>fetch(l+m,{cache:"no-store"}).then(v=>{if(!v.ok)throw new Error("HTTP "+v.status);return v.json()}),Ut=l=>/^51/.test(l||"");async function oe(){if(!H.url){Pe();return}let l=H.url.replace(/\/+$/,"");(!H.repFail||Date.now()-H.repFail>15*6e4)&&Tt(l,"/reports.json").then(B=>{B&&Array.isArray(B.items)?(H.rep=B.items,H.repSkew=(B.now||Date.now())-Date.now(),B.tipos&&(H.tipos=B.tipos),H.repOk=Date.now(),H.repFail=0):H.repFail=Date.now()}).catch(()=>{H.repFail=Date.now(),H.repOk=0});let m=!H.adifAt||Date.now()-H.adifAt>11e4,[v,M,T,I,F]=await Promise.allSettled([Tt(l,"/trip_updates.json"),Tt(l,"/vehicle_positions.json"),Tt(l,"/alerts.json"),Tt(l,"/notices.json"),m?Tt(l,"/adif.json"):Promise.reject(0)]);if(F.status==="fulfilled"&&F.value&&F.value.ok?(H.adif=F.value,H.adifAt=Date.now()):m&&(H.adifAt=Date.now()-6e4),v.status==="fulfilled"){let B=new Map,J=new Map;for(let nt of v.value.entity||[]){let x=nt.tripUpdate;if(!x||!x.trip||!Ut(x.trip.tripId))continue;let R=x.trip.tripId,q=(x.stopTimeUpdate||[])[0],Q=x.delay;Q==null&&q&&(Q=(q.arrival||q.departure||{}).delay),x.trip.scheduleRelationship==="CANCELED"&&(Q="X"),Q!=null&&B.set(R,Q),J.set(R,{next:q?{sid:q.stopId,t:+((q.arrival||q.departure||{}).time||0)}:null})}H.delays=B,H.tu=J,H.ok=Date.now(),H.feedTs=+((v.value.header||{}).timestamp||0)*1e3,H.err=""}else H.err=v.reason&&v.reason.message||__t(0);if(M.status==="fulfilled"){let B=new Map,J=Date.now()/1e3;for(let nt of M.value.entity||[]){let x=nt.vehicle;if(!x||!x.trip||!Ut(x.trip.tripId)||!x.position)continue;let R=x.vehicle&&x.vehicle.label||"",q=R.match(/PLATF\.\(([^)]+)\)/),Q=H.vp.get(x.trip.tripId),vt={tid:x.trip.tripId,w:yt(+x.position.longitude,+x.position.latitude),st:x.currentStatus||"",sid:x.stopId||"",ts:+x.timestamp||J,label:R,plat:q?q[1]:"",fam:(R.split("-")[0]||"").trim(),num:x.vehicle&&x.vehicle.id||""};vt.disp=Q?Q.disp:null,B.set(vt.tid,vt)}H.vp=B,H.okVP=Date.now()}let U=[];if(I.status==="fulfilled"&&Array.isArray(I.value.included)){H.okNotices=Date.now();for(let B of I.value.included){let J=new Set((B.lines||[]).map(Q=>Q.id).filter(Q=>W[Q])),nt=(Q,vt)=>{Q=Q||{},vt=vt||window.__L;let Ct=Q[vt];return vt==="en"&&Ct&&(Ct===Q.ca||/\b(els|amb|dels|per una|circulen|serveis|entre .{2,40} i )\b|ç|l·l/i.test(Ct))&&(Ct=""),(Ct||Q.es||Q.ca||"").trim()},x=Q=>[nt(B.description,Q),nt(B.title,Q)].sort((vt,Ct)=>Ct.length-vt.length)[0],R=x(),q=x("es");R&&U.push({id:"N"+B.externalId,fams:J,stops:new Set,txt:R,es:q,when:(B.date||"")+"T"+(B.time||""),src:"Rodalies",core:B.core||""})}}if(T.status==="fulfilled"){let B=+((T.value.header||{}).timestamp||0);if(H.alertsTs=B,Date.now()/1e3-B<6*3600)for(let J of T.value.entity||[]){let nt=J.alert;if(!nt)continue;let x=new Set,R=new Set;for(let Ct of nt.informedEntity||[])(Ct.routeId||"").startsWith("51")&&x.add(Ct.routeId.replace(/^51T\d+/,"")),Ct.stopId&&$t.has(Ct.stopId)&&R.add($t.get(Ct.stopId));if(!x.size&&!R.size)continue;let q=(nt.descriptionText||nt.headerText||{translation:[]}).translation||[],Q=((q.find(Ct=>Ct.language==="es")||q[0]||{}).text||"").trim(),vt=+((nt.activePeriod||[])[0]||{}).start||0;U.some(Ct=>Ct.txt===Q)||U.push({id:J.id,fams:x,stops:R,txt:Q,when:vt?new Date(vt*1e3).toISOString().slice(0,19):"",src:"Renfe"})}}if(H.adif&&Date.now()-H.adifAt<15*6e4)for(let[B,J]of(H.adif.items||[]).entries()){let nt=(J.t?J.t+". ":"")+J.txt,x=new Set,R=new Set,q=y(nt);for(let Q of nt.matchAll(/\b(R\d{1,2}[NS]?|R3a|RG1|RL\d|RT\d)\b/g))W[Q[1]]&&x.add(Q[1]);b.forEach((Q,vt)=>{Q.fams.size&&Q.n.length>4&&q.includes(y(Q.n))&&(R.add(vt),x.size||Q.fams.forEach(Ct=>x.add(Ct)))}),U.some(Q=>Q.txt===nt)||U.push({id:"A"+B,fams:x,stops:R,txt:nt,when:H.adif.upd||"",src:"Adif",lvl:J.lvl})}if(I.status==="fulfilled"||T.status==="fulfilled"||H.adif){H.alerts=U.sort((B,J)=>J.when>B.when?1:-1);try{$g()}catch{}}Pe(),Kh(),tt=0,a()}let re=()=>H.okVP&&Date.now()-H.okVP<9e4,ue={at:0,v:!1},me=()=>{if(!re()||H.vp.size>0)return!1;if(Date.now()-ue.at>3e4){ue.at=Date.now();let l=_t(new Date),m=t.days.indexOf(l.ymd),v=0;if(m>=0)for(let M of K[m]){let T=l.min-M.t0;T>M.pat.t[1]+2&&T<M.pat.t[M.pat.t.length-2]-2&&v++}ue.v=v>=6}return ue.v},z=()=>re()&&!me();function Pe(){let l=p("#rtst"),m=p("#mode");if(m){let M=!!z()&&ae().live;m.classList.toggle("on",M),m.classList.toggle("pre",!M),m.textContent=M?__t(1):pe.cur?__t(2):__t(3),m.classList.toggle("past",!!pe.cur);let T=p("#rcgrab");if(T){let I=T.querySelector(".rdot");I||(I=document.createElement("b"),I.className="rdot",T.insertBefore(I,T.firstChild)),I.className="rdot "+(pe.cur?"past":M?"on":"pre"),I.title=m.textContent}m.title=pe.cur?`${__t(4)}${pe.cur.sn.t}${__t(5)}`:""}if(!l)return;H.url?H.err?l.textContent=__t(7)+H.err+__t(8):z()?l.innerHTML=`${__t(9)}${H.vp.size}${__t(10)}${H.delays.size}${__t(11)}${new Date(H.okVP).toLocaleTimeString("es-ES",{hour:"2-digit",minute:"2-digit",second:"2-digit"})}`:me()?l.textContent=__t(12):l.textContent=__t(13):l.textContent=H.err||__t(6);let v=p("#rturl");v&&v._shown!==H.url&&(v.value=H.url,v._shown=H.url)}p("#rtsave").onclick=()=>{let l=p("#rturl").value.trim().replace(/\/+(alerts|trip_updates|vehicle_positions)\.json$/,"").replace(/\/+$/,"");if(l&&!/^https?:\/\//.test(l)&&(l="https://"+l),!l){H.err=__t(14),Pe();return}H.url=l;try{localStorage.setItem("rod_rt",l)}catch{}H.ok=0,H.err="",Pe(),oe()},p("#rtoff").onclick=()=>{H.url=Et;try{localStorage.removeItem("rod_rt")}catch{}u._h="",oe()},setInterval(oe,2e4),setTimeout(oe,50);let pe={snap:null,key:""};function P(){let l=ae();if(l.live||!Ce.hoy||!Ce.hoy.snaps||At&&ee==null)return null;let m=_t(new Date).min;if(l.min>m+1)return null;let v=null;for(let M of Ce.hoy.snaps){if(!M.d)continue;let T=Sf(M.t);T<=l.min+1&&(!v||T>v.m)&&(v={m:T,sn:M})}return v&&l.min-v.m<=25?v:null}let S=l=>{{let T=Xh(l.num);if(T&&T.cx&&ae().live)return"X"}let m=pe.cur;if(m){if(m.sn.x&&m.sn.x.includes(l.tid))return"X";let T=m.sn.d[l.tid];return T??0}if(!z())return null;let v=H.delays.get(l.tid),M=H.vp.get(l.tid);return v==="X"?v:M&&M.pre&&M.preDl>=1?Math.max(typeof v=="number"?v:0,M.preDl*60):v??null},X=new Set(V);try{let l=JSON.parse(localStorage.getItem("rod_lines")||"null");Array.isArray(l)&&l.some(m=>V.includes(m))&&(X.clear(),l.forEach(m=>V.includes(m)&&X.add(m)))}catch{}let rt=new fs,dt=new fs,Pt=new Xi({vertexColors:!0,linewidth:3.2,depthTest:!1,transparent:!0}),Nt=new Xi({color:16777215,linewidth:6,depthTest:!1,transparent:!0,opacity:.9}),ft=new hr(rt,Pt),xt=new hr(dt,Nt);xt.renderOrder=20,ft.renderOrder=21,ft.frustumCulled=xt.frustumCulled=!1,e.add(xt,ft);function Ft(l){let m=l[0]/o+c,v=l[1]/o+h;for(let M of C){if(M._bb===void 0){let I=1e9,F=1e9,U=-1e9,B=-1e9;for(let J of M.rings||[]){let nt=J[0]||[];for(let x=0;x<nt.length;x+=2)nt[x]<I&&(I=nt[x]),nt[x]>U&&(U=nt[x]),nt[x+1]<F&&(F=nt[x+1]),nt[x+1]>B&&(B=nt[x+1])}M._bb=[I,F,U,B]}let T=M._bb;if(!(m<T[0]||m>T[2]||v<T[1]||v>T[3]))for(let I of M.rings||[]){let F=I[0]||[],U=!1;for(let B=0,J=F.length,nt=J-2;B<J;nt=B,B+=2){let x=F[B+1],R=F[nt+1];x>v!=R>v&&m<(F[nt]-F[B])*(v-x)/(R-x)+F[B]&&(U=!U)}if(U)return!0}}return!1}let ne=!1;function Vt(){ne||!C.length||(ne=!0,b.forEach(l=>{l.ext=!Ft(l.w)}),A.forEach(l=>{l.ext=!Ft(l.p[0])&&!Ft(l.p[l.p.length-1])&&!Ft(l.p[l.p.length>>1])}))}let Bt=()=>{let l=new Set(X.size<=2?X:[]);try{mt&&mt.fam&&l.add(mt.fam)}catch{}return l},ie="";function he(){Vt();let l=[],m=[],v=new Set,M=new de,T=new de("#d2d0d0"),I=Bt();ie=[...I].join();for(let F of V)if(X.has(F))for(let U of Z[F]){if(v.has(U))continue;v.add(U);let B=A[U].p;M.set(W[F]),A[U].ext&&!I.has(F)&&M.lerp(T,.55);for(let J=0;J+1<B.length;J++)l.push(B[J][0],B[J][1],O,B[J+1][0],B[J+1][1],O),m.push(M.r,M.g,M.b,M.r,M.g,M.b)}l.length||(l.push(0,0,-50,0,0,-50),m.push(0,0,0,0,0,0)),rt.setPositions(l),rt.setColors(m),dt.setPositions(l),a()}he();let Se=l=>new An({uniforms:{dpr:{value:Math.min(devicePixelRatio||1,2)},border:{value:new de(l)}},vertexShader:"attribute float size; attribute vec3 fill; attribute float bw; varying vec3 vF; varying float vS; varying float vB; uniform float dpr; void main(){ vF=fill; vS=size*dpr; vB=bw*dpr; gl_PointSize=vS; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"uniform vec3 border; varying vec3 vF; varying float vS; varying float vB; void main(){ float r=length(gl_PointCoord*2.0-1.0)*vS*0.5; float R=vS*0.5; if(r>R) discard; float a=1.0-smoothstep(R-1.2,R,r); vec3 c = r>R-vB ? border : vF; gl_FragColor=vec4(c,a); }",transparent:!0,depthTest:!1}),Y=new hn,Dt=b.length,gt=new Float32Array(Dt*3),kt=new Float32Array(Dt*3),Ht=new Float32Array(Dt),Mt=new Float32Array(Dt);b.forEach((l,m)=>{gt[m*3]=l.w[0],gt[m*3+1]=l.w[1],gt[m*3+2]=O,kt.set([1,1,1],m*3),Ht[m]=6,Mt[m]=1.6}),Y.setAttribute("position",new Ye(gt,3)),Y.setAttribute("fill",new Ye(kt,3)),Y.setAttribute("size",new Ye(Ht,1)),Y.setAttribute("bw",new Ye(Mt,1));let se=Se("#1d2330"),jt=new nr(Y,se);jt.renderOrder=22,jt.frustumCulled=!1,e.add(jt);function Re(){let l=r.dist<45,m=Bt();b.forEach((v,M)=>{let T=[...v.fams].some(F=>X.has(F)),I=v.ext&&![...v.fams].some(F=>m.has(F))&&M!==wt;Ht[M]=T?M===wt?13:I?3:l?8:5:0,Mt[M]=M===wt?3:1.6}),Y.attributes.size.needsUpdate=!0,Y.attributes.bw.needsUpdate=!0}let Te=600,un=new hn,Hn=new Float32Array(Te*3),gr=new Float32Array(Te*3),da=new Float32Array(Te),fa=new Float32Array(Te);un.setAttribute("position",new Ye(Hn,3)),un.setAttribute("fill",new Ye(gr,3)),un.setAttribute("size",new Ye(da,1)),un.setAttribute("bw",new Ye(fa,1));let Qi=new Float32Array(Te);un.setAttribute("ang",new Ye(Qi,1));let Hh=new An({uniforms:{dpr:{value:Math.min(devicePixelRatio||1,2)},border:{value:new de("#ffffff")}},vertexShader:"attribute float size; attribute vec3 fill; attribute float bw; attribute float ang; varying vec3 vF; varying float vS; varying float vB; varying float vA; uniform float dpr; void main(){ vF=fill; vS=size*dpr; vB=bw*dpr; vA=ang; gl_PointSize=vS; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"uniform vec3 border; varying vec3 vF; varying float vS; varying float vB; varying float vA; void main(){ vec2 p=gl_PointCoord*2.0-1.0; float r=length(p)*vS*0.5; float R=vS*0.5; if(r>R) discard; float a=1.0-smoothstep(R-1.2,R,r); vec3 c = r>R-vB ? border : vF; if(vA<50.0){ vec2 d=vec2(sin(vA),-cos(vA)); vec2 n=vec2(cos(vA),sin(vA)); float qy=-dot(p,d); float qx=dot(p,n); float w=(qy+0.66)/0.98*0.48; if(qy>-0.66 && qy<0.32 && abs(qx)<w) c=vec3(1.0); } else if(vA>70.0 && vA<80.0){ if(abs(p.y)<0.36 && abs(abs(p.x)-0.2)<0.1) c=vec3(1.0); } else if(vA>80.0 && vA<90.0){ if((abs(p.x)<0.11 && p.y>-0.5 && p.y<0.16) || length(p-vec2(0.0,0.38))<0.12) c=vec3(1.0); } gl_FragColor=vec4(c,a); }",transparent:!0,depthTest:!1}),_r=new nr(un,Hh);_r.renderOrder=24,_r.frustumCulled=!1,e.add(_r);let Di=new hn,di=new Float32Array(Te*3),xr=new Float32Array(Te*3),pa=new Float32Array(Te),ma=new Float32Array(Te);Di.setAttribute("position",new Ye(di,3)),Di.setAttribute("fill",new Ye(xr,3)),Di.setAttribute("size",new Ye(pa,1)),Di.setAttribute("bw",new Ye(ma,1));let _s=new nr(Di,Se("#ffffff"));_s.renderOrder=23,_s.frustumCulled=!1,e.add(_s);function ga(l,m){let v=A[l],M=m*v.L,T=0,I=v.c.length-1;for(;I-T>1;){let nt=T+I>>1;v.c[nt]<=M?T=nt:I=nt}let F=v.c[I]-v.c[T]||1,U=(M-v.c[T])/F,B=v.p[T],J=v.p[I];return[B[0]+(J[0]-B[0])*U,B[1]+(J[1]-B[1])*U]}let Bs=l=>l*l*(3-2*l)*.35+l*.65;function ks(l,m){let v=l.pat.t,M=l.pat.stops.length,T=v[2*M-2];if(m<v[1]-2||m>T+1)return null;if(m<=v[1])return{w:b[l.pat.stops[0]].w,at:0,next:0,moving:!1};for(let I=0;I<M-1;I++){let F=v[2*I+1],U=v[2*I+2],B=v[2*I+3];if(m<=U){let J=U>F?(m-F)/(U-F):1;return{w:ga(l.pat.segs[I],Bs(_(J,0,1))),at:-1,next:I+1,prev:I,moving:!0}}if(m<=B)return{w:b[l.pat.stops[I+1]].w,at:I+1,next:I+1,moving:!1}}return{w:b[l.pat.stops[M-1]].w,at:M-1,next:M-1,moving:!1}}function zs(l){let m=t.days.indexOf(l.ymd),v=[];if(m<0)return{k:m,out:v};let M=(T,I)=>{for(let F of T){if(!X.has(F.fam))continue;let U=S(F);if(U==="X")continue;let B=(U||0)/60,J=l.min+I-F.t0-B;if(J<-2||J>F.pat.t[F.pat.t.length-2]+1)continue;let nt=ks(F,J);nt&&v.push({tr:F,p:nt,rel:J,dl:B,live:U!=null})}};return M(K[m],0),m>0&&M(K[m-1],1440),{k:m,out:v}}function $h(l,m,v,M){let T=l.pat.stops[0],I=m.dep0,F=null,U=(J,nt)=>{for(let x of J||[]){let R=x.pat.stops,q=R.length;if(R[q-1]!==T||x===l)continue;let Q=x.t0+x.pat.t[2*(q-1)]-nt;if(Q>I+5||Q<I-120)continue;let vt=Xt(x.pat),Ct=ke(vt,m.w,-1,1e9);if(Ct.err>.6)continue;let Jt=vt.stopD,Rt=x.pat.t,ot=Jt.findIndex(ve=>ve>Ct.d);ot<0&&(ot=q-1);let _e=ot===0?Rt[1]:Rt[2*ot-1]+(Jt[ot]>Jt[ot-1]?(Ct.d-Jt[ot-1])/(Jt[ot]-Jt[ot-1]):1)*(Rt[2*ot]-Rt[2*ot-1]),te=v-(x.t0+_e-nt);te<-5||te>120||(!F||Math.abs(te)<Math.abs(F.prevDl))&&(F={prevTr:x,dPrev:Ct.d,prevDl:te,arrO:Q+Math.max(0,te)})}};if(U(K[M],0),M>0&&U(K[M-1],1440),!F)return{prevTr:null,preDl:0};let B=Math.max(I,F.arrO+3);return{...F,depEst:B,preDl:Math.max(0,B-I)}}function Gh(l,m,v){let M=l.pat.t,T=m.length;if(!(v>=0))return v<0?m[0]:null;for(let I=0;I<T;I++)if(v<=M[2*I+1]){if(v>=M[2*I]||I===0)return m[I];let F=M[2*I-1],U=M[2*I];return m[I-1]+(m[I]-m[I-1])*(U>F?(v-F)/(U-F):1)}return m[T-1]}let Yo=performance.now();function Wh(){let l=[],m=Date.now()/1e3,v=performance.now(),M=Math.min(1,(v-Yo)/1e3);Yo=v;for(let T of H.vp.values()){let I=lt.get(T.tid),F=I?I.fam:T.fam;if(F&&W[F]&&!X.has(F))continue;let U=H.delays.get(T.tid),B=typeof U=="number"?U/60:0,J=Math.max(0,m-T.ts);T.mvTs!==T.ts&&((!T.mvW||Math.hypot(T.w[0]-T.mvW[0],T.w[1]-T.mvW[1])>.025)&&(T.mvW=T.w,T.mvAt=T.ts),T.mvTs=T.ts),T.still=T.ts-(T.mvAt||T.ts);let nt=T.w,x=-1;if(I){let q=Xt(I.pat),Q=q.stopD;if(T.dObs==null||T.obsAt!==T.ts){let ot=ke(q,T.w,-1,1e9);T.dObs=ot.d,T.err=ot.err,T.obsAt=T.ts}let vt=ae(),Ct=t.days.indexOf(vt.ymd),Jt=I.day===Ct-1?1440:0,Rt=I.t0+I.pat.t[1]-Jt;if(T.pre=vt.min+B<Rt-1&&(T.dObs>Q[0]+.35||T.err>.6)&&!(T.st==="STOPPED_AT"&&T.sid===b[I.pat.stops[0]].id),T.dep0=Rt,T.pre){if(T.atStop=-1,T.next=0,x=0,T.disp=null,T.prevAt!==T.ts&&(T.prevAt=T.ts,Object.assign(T,$h(I,T,vt.min,Ct))),T.prevTr){let ot=Xt(T.prevTr.pat);nt=Ee(ot,T.dPrev)}}else if(T.err<=.6){let ot=Q.findIndex(ve=>ve>T.dObs+.08);ot<0&&(ot=Q.length-1);let _e=Q.reduce((ve,je,en)=>Math.abs(je-T.dObs)<Math.abs(Q[ve]-T.dObs)?en:ve,0);T.atStop=Math.abs(Q[_e]-T.dObs)<.16?_e:-1,T.next=ot,x=ot;let te=T.dObs;if(T.st==="STOPPED_AT"&&T.atStop>=0)te=Q[T.atStop];else if(ot>0){let ve=(I.pat.t[2*ot]-I.pat.t[2*ot-1])*60,je=ve>0?(Q[ot]-Q[ot-1])/ve:0,en=ae(),qt=t.days.indexOf(en.ymd),pn=I.day===qt-1?1440:0,is=Gh(I,Q,en.min+pn-I.t0-B),mn=T.dObs+je*Math.min(J,60);is!=null&&(mn=Math.min(mn,Math.max(T.dObs,is))),te=Math.max(T.dObs,Math.min(Q[ot]-.03,mn))}T.disp==null||Math.abs(T.disp-te)>1.2?T.disp=te:te>T.disp&&(T.disp+=(te-T.disp)*Math.min(1,M*1.5)),nt=Ee(q,T.disp)}else if(T.err>2){let ot=ae(),_e=t.days.indexOf(ot.ymd),te=I.day===_e-1?1440:0,ve=ks(I,ot.min+te-I.t0-B);ve&&(nt=ve.w,T.est=!0,x=ve.next),T.atStop=-1,T.next=ve?ve.next:-1}else T.atStop=-1,T.next=-1}let R=T.pre?"":T.st==="STOPPED_AT"&&T.atStop>=0||T.atStop>=0&&T.still>30?"st":T.still>=90?"via":"";l.push({tr:I,v:T,w:nt,stop:R,p:{w:nt},fam:F||"?",c:I?I.c:W[F]||"#6b7385",dl:B,live:!0,real:!0,idx:x,age:J,cancel:U==="X"})}return l}let $n=new Map,w=!1,k=!1,it="",j=[],tt=0,It=null,mt=null,wt=-1,Lt=!1,Qt=0,we="";function Ae(l){let m=At>0||z()&&ee==null||!!mt,v=window.__mapHidden?1e3:m?50:250;if(l-tt<v)return!1;tt=l,[...Bt()].join()!==ie&&(he(),Re());{let x=P(),R=x?x.sn.t:"";pe.cur=x,R!==pe.key&&(pe.key=R,Pe()),!x&&!ae().live&&!Ce.at&&He()}let M=ae(),T=z()&&M.live,I=T?{k:t.days.indexOf(M.ymd),out:Wh()}:zs(M);j=I.out;let F=new de,U=0,B=0;for(let x of j){if(U>=Te)break;Hn[U*3]=x.p.w[0],Hn[U*3+1]=x.p.w[1],Hn[U*3+2]=O+.02;let R=null;if(x.real&&x.v.pre&&x.v.prevTr)R=Ee(Xt(x.v.prevTr.pat),x.v.dPrev+.35);else if(x.real&&x.tr&&!x.v.pre&&x.v.err<=.6&&x.v.disp!=null&&!(x.v.st==="STOPPED_AT"&&x.v.atStop>=0))R=Ee(Xt(x.tr.pat),x.v.disp+.35);else if(!x.real&&x.p.moving){let Jt=x.tr.pat.t,Rt=x.p.prev,ot=Jt[2*Rt+1],_e=Jt[2*Rt+2],te=_e>ot?(x.rel-ot)/(_e-ot):1;R=ga(x.tr.pat.segs[Rt],Math.min(1,Bs(_(te,0,1))+.04))}let q=x.real?!!x.stop:!x.p.moving;if(x.broke=ff(x),x.broke)Qi[U]=85;else if(q)Qi[U]=75;else if(R){let Jt=Zo(x.p.w),Rt=Zo(R),ot=Rt[0]-Jt[0],_e=Rt[1]-Jt[1];Qi[U]=Math.hypot(ot,_e)>.05?Math.atan2(ot,-_e):99}else Qi[U]=99;F.set(x.c||x.tr.c),gr[U*3]=F.r,gr[U*3+1]=F.g,gr[U*3+2]=F.b;let Q=x.tr?x.tr===mt:mt&&mt.vtid===x.v.tid;da[U]=Q?22:r.dist<45?17:14,fa[U]=Q?3.5:2.2;let vt=x.real&&x.stop==="via"||!!x.broke,Ct=x.cancel||x.broke?[.86,.15,.15]:x.dl>10?[.86,.15,.15]:x.dl>5?[.92,.48,.05]:x.dl>=1?[.98,.8,.08]:[.09,.64,.29];(x.live&&x.dl>=5||Q||vt)&&(di[B*3]=x.p.w[0],di[B*3+1]=x.p.w[1],di[B*3+2]=O+.01,xr.set(Q?Ct:vt?[.86,.15,.15]:[.98,.45,.09],B*3),pa[B]=da[U]+(Q?16+5*Math.sin(l/220):vt?10+3*Math.sin(l/400):8),ma[B]=Q?2:3,B++),U++}if(un.setDrawRange(0,U),Di.setDrawRange(0,B),["position","fill","size","bw"].forEach(x=>{un.attributes[x].needsUpdate=!0,Di.attributes[x].needsUpdate=!0}),un.attributes.ang.needsUpdate=!0,It){let x=j.find(R=>R.tr===It);if(x){let R=0,q=innerHeight,Q=u.style.display!=="none"&&!u.classList.contains("min")?u.getBoundingClientRect():null,vt=p("#rc").getBoundingClientRect();innerWidth<=640&&(Q&&(R=Q.bottom),q=Math.min(q,vt.top));let Ct=R+(q-R)/2,Jt=Ct-innerHeight/2,Rt=2*s.dist*Math.tan(17.5*Math.PI/180)/innerHeight;s.tx=x.p.w[0]-Math.sin(r.yaw)*Jt*Rt,s.ty=x.p.w[1]+Math.cos(r.yaw)*Jt*Rt}else z()&&ae().live&&(It=null)}let J=at(Math.floor(M.min+1e-6));J!==we&&(we=J,p("#ctime").textContent=J),p("#ntr").textContent=String(j.length),p("#ntrl").textContent=T?__t(15):__t(16);{let x=X.size<V.length?[...X].sort(L).join(", "):"",R=p("#ccount"),q=pe.cur?`\u23EA ${j.length}${__t(17)}${pe.cur.sn.t} \xB7 ${Object.values(pe.cur.sn.d).filter(Q=>Q>=60).length}${__t(18)}`:!M.live&&M.min<_t(new Date).min-1&&!At?`${__t(19)}${Ce.hoy&&Ce.hoy.snaps&&Ce.hoy.snaps.some(Q=>Q.d)?`${__t(20)}${Ce.hoy.snaps.find(Q=>Q.d).t}`:__t(21)}`:`\u{1F686} ${j.length} ${T?__t(22):__t(23)}${x?` <small>\xB7 ${f(x)}</small>`:""}${T&&H.okVP?(()=>{let Q=Math.max(0,Math.round((Date.now()-H.okVP)/1e3));return` <small class="fresh${Q<3?" new":""}">\u25CF ${__t(24)}${Us(Q+" s")}</small>`})():""}`;R&&R._t!==q&&(R.innerHTML=q,R._t=q)}let nt=new Date;if(p("#cdate").textContent=M.live?__t(25):At?__t(26)+At:mi?__t(27):__t(28),I.k<0?p("#src").innerHTML=`${__t(29)}${Ne(t.days[0])}${__t(30)}${Ne(t.days[t.days.length-1])}${__t(31)}`:T?p("#src").textContent=`${__t(32)}${Us(Math.round(Math.max(0,Date.now()/1e3-Math.max(...[...H.vp.values()].map(x=>x.ts),0)))+" s")}`:me()&&M.live?p("#src").innerHTML=__t(33):p("#src").innerHTML=__t(34)+(H.url?__t(35):__t(36))+__t(37),M.live){let x=Math.round(M.min),R=p("#tsl");document.activeElement!==R&&(R.value=x<240?x+1440:x)}{let x=mt?String(mt.num||mt.vtid||""):"";x!==Ae._sk&&(Ae._sk=x,$e(!0))}return $e(),l-Qt>3e3&&(mt||wt>=0||Lt||k||it)&&(Qt=l,ze()),Pe(),!0}let Kt=-1,Le=(()=>{try{return localStorage.getItem("rod_mun")==="1"}catch{return!1}})(),Ke=[],Fe=document.createElement("button");Fe.type="button",Fe.id="mbtn",Fe.title=__t(38),Fe.innerHTML=__t(39),Fe.onclick=()=>{Le=!Le;try{localStorage.setItem("rod_mun",Le?"1":"")}catch{}Fe.classList.toggle("on",Le),a(),ri()},Fe.classList.toggle("on",Le),document.body.appendChild(Fe);let Xe=C.slice().sort((l,m)=>m.pop-l.pop);function vn(l){if(l._a)return l._a;let m=null,v=0;for(let M of l.rings||[]){let T=M[0];if(!T)continue;let I=0,F=0,U=0;for(let B=0,J=T.length;B<J;B+=2){let nt=T[B],x=T[B+1],R=T[(B+2)%J],q=T[(B+3)%J],Q=nt*q-R*x;I+=Q,F+=(nt+R)*Q,U+=(x+q)*Q}Math.abs(I)>v&&(v=Math.abs(I),m=[F/(3*I),U/(3*I)])}return l._a=m?[(m[0]-c)*o,(m[1]-h)*o]:[l.cx,l.cy]}let Zt=l=>l>=1e5?1:l>=2e4?2:l>=5e3?3:4,Rn=[0,7.6,6.7,6,5.4],Oe=[0,17,15,13,12],Kn=l=>l.replace(/^(.*), (el|la|les|els|los|las)$/i,"$2 $1").replace(/^(.*), l'$/i,"l'$1");function ri(){let l=s.tilt<.06&&r.tilt<.08;Fe.classList.toggle("show",l);let m=0;if(Le&&l){let v=[...document.querySelectorAll(".plab, .slab")].filter(I=>I.offsetParent!==null||I.style.display==="block").map(I=>{let F=I.getBoundingClientRect();return[F.left-2,F.top-2,F.right+2,F.bottom+2]}).filter(I=>I[2]>I[0]),M=r.dist,T=M>160?5e4:M>130?2e4:M>105?8e3:M>80?3e3:M>62?800:0;for(let I of Xe){let F=Zt(I.pop);if(I.pop<T)break;let U=vn(I);if(dn.set(U[0],U[1],O).project(n),Math.abs(dn.x)>1.02||Math.abs(dn.y)>1.02)continue;let B=(dn.x*.5+.5)*innerWidth,J=(-dn.y*.5+.5)*innerHeight,nt=Kn(I.name),x=nt.length*Rn[F]+8,R=Oe[F],q=[B-x/2,J-R/2,B+x/2,J+R/2];if(v.some(vt=>q[0]<vt[2]&&vt[0]<q[2]&&q[1]<vt[3]&&vt[1]<q[3]))continue;v.push(q);let Q=Ke[m]||(Ke[m]=Object.assign(document.createElement("div"),{className:"mlab"}));Q.isConnected||document.body.appendChild(Q),Q._n!==nt&&(Q.textContent=nt,Q._n=nt),Q._t!==F&&(Q.className="mlab t"+F,Q._t=F),Q.style.transform=`translate(${Math.round(B)}px,${Math.round(J)}px) translate(-50%,-50%)`,Q.style.display="block",m++}}for(;m<Ke.length;m++)Ke[m].style.display="none"}let Ce={at:0,hoy:null,ayer:null,err:""},xs="https://raw.githubusercontent.com/elMonoAmelio/catalunya-survival/stats/";function He(){Date.now()-Ce.at<5*6e4||(Ce.at=Date.now(),Promise.all(["hoy","ayer","hist"].map(l=>fetch(xs+l+".json",{cache:"no-store"}).then(m=>m.ok?m.json():null).catch(()=>null))).then(([l,m,v])=>{Ce.hoy=l,Ce.ayer=m,Ce.hist=v,Ce.tr=null,Ce.err=l?"":__t(40),k&&(u._h="",ze()),$e(!0)}))}function tn(l){let m={};for(let M of l&&l.snaps||[])for(let T of M.r||[]){let I=/^\d+[A-Z](\d+)/.exec(T);I&&(m[I[1]]=m[I[1]]||[]).push(Math.max(0,M.d&&M.d[T]||0)/60)}let v={};for(let M in m){let T=m[M].sort((I,F)=>I-F);v[M]=Math.round(T[T.length>>1])}return v}function fi(l){if(!Ce.tr){let v=new Map;for(let M of Ce.hist&&Ce.hist.days||[])v.set(M.day,M.tr);for(let M of[Ce.ayer,Ce.hoy])if(M&&M.day&&!v.has(M.day)){let T=tn(M);Object.keys(T).length&&v.set(M.day,T)}Ce.tr=v}let m=[...Ce.tr.values()].map(v=>v[String(l)]).filter(v=>v!=null);return m.length?{n:m.length,late:m.filter(v=>v>=5).length,avg:m.reduce((v,M)=>v+M,0)/m.length}:null}let Be=l=>l>=90?"g":l>=80?"y":l>=65?"w":"b",yn={g:"#16a34a",y:"#eab308",w:"#ea7a0c",b:"#dc2626"},ts=l=>l>10?yn.b:l>5?yn.w:l>=1?yn.y:yn.g,Ni=l=>(l>=.05?"+":"")+(Math.round(l*10)/10).toString().replace(".",",")+" min";function _a(l,m,v){return`<div class="sbars">${l.map(M=>`<div class="sbar" title="${f(M.tip||"")}"><span class="sl">${M.lab}</span><span class="st"><i style="width:${Math.max(2,Math.round(M.w*100))}%;background:${M.c}"></i></span><b class="sv" style="color:${M.c===yn.y?"var(--svy,#a16207)":M.c===yn.w?"var(--svw,#c2410c)":M.c}">${M.val}</b></div>`).join("")}</div>`}function Sg(l){if(l=(l||[]).filter(U=>U.n>=10),!l||l.length<2){let U=l&&l[0];return U?`${__t(41)}${U.t}: ${Math.round(U.ok/U.n*100)}${__t(42)}${U.n}${__t(43)}`:__t(44)}let m=300,v=92,M=22,T=U=>M+U*(m-M-6)/(l.length-1),I=U=>6+(100-U)/100*(v-22),F=l.map((U,B)=>[T(B),I(U.n?U.ok/U.n*100:100),U]);return`<svg class="schart" viewBox="0 0 ${m} ${v}${__t(45)}${[100,75,50].map(U=>`<line x1="${M}" x2="${m-4}" y1="${I(U)}" y2="${I(U)}" class="gl"/><text x="2" y="${I(U)+3}" class="ax">${U}%</text>`).join("")}
      <polyline points="${F.map(U=>U[0].toFixed(1)+","+U[1].toFixed(1)).join(" ")}" class="ln"/>
      ${F.map(([U,B,J])=>`<circle cx="${U.toFixed(1)}" cy="${B.toFixed(1)}" r="5" class="pt"><title>${J.t} \xB7 ${J.n?Math.round(J.ok/J.n*100):100}${__t(46)}${J.n}${__t(47)}${J.d5}${__t(48)}${Ni(J.avg)}${J.nd?` \xB7 ${J.nd}${__t(49)}`:""}</title></circle>`).join("")}
      <text x="${M}" y="${v-3}" class="ax">${l[0].t}</text><text x="${m-4}" y="${v-3}" class="ax" text-anchor="end">${l[l.length-1].t}</text></svg>`}function Mg(){He();let l=ae(),m=j.filter(U=>U.real&&z()&&l.live),v=m.filter(U=>H.delays.has(U.v.tid)),M=v.length,T=m.length-M,I=`${__t(50)}`;if(M){let U=v.filter(Rt=>Rt.dl<3).length,B=v.filter(Rt=>Rt.dl>=5).length,J=v.filter(Rt=>Rt.stop==="via").length,nt=Math.round(U/M*100);I+=`${__t(51)}${M}${__t(52)}${T?` \xB7 ${T}${__t(57)}`:""}</small><div class="kpis">
        <div class="kpi ${Be(nt)}"><b>${nt}${__t(53)}${Be(100-B/M*100*2)}" title="${Math.round(B/M*100)}${__t(54)}${B}${__t(55)}${J===0?"g":J<=2?"w":"b"}"><b>${J}${__t(56)}`;let x=new Map;v.forEach(Rt=>{let ot=Rt.fam,_e=x.get(ot)||{n:0,ok:0,sum:0};_e.n++,_e.ok+=Rt.dl<3,_e.sum+=Math.max(0,Rt.dl),x.set(ot,_e)});let R=[...x].filter(([Rt])=>W[Rt]).sort((Rt,ot)=>Rt[1].ok/Rt[1].n-ot[1].ok/ot[1].n||ot[1].sum/ot[1].n-Rt[1].sum/Rt[1].n),q=R.filter(([,Rt])=>Rt.ok<Rt.n),Q=R.filter(([,Rt])=>Rt.ok===Rt.n);I+=`${__t(58)}`+(q.length?"":__t(59))+_a(q.map(([Rt,ot])=>({lab:Nn(Rt),w:ot.ok/ot.n,c:yn[Be(ot.ok/ot.n*100)],val:`${Math.round(ot.ok/ot.n*100)}% <small>${Ni(ot.sum/ot.n)}</small>`,tip:`${Rt}: ${ot.ok}${__t(60)}${ot.n}${__t(61)}${Ni(ot.sum/ot.n)}`})))+(Q.length?`${__t(62)}${Q.map(([Rt])=>Nn(Rt)).join(" ")}</p>`:"");let vt=new Map;v.forEach(Rt=>{if(!Rt.tr||Rt.v.next==null||Rt.v.next<0||Rt.v.pre)return;let ot=Rt.tr.pat.stops[Rt.v.next],_e=vt.get(ot)||{n:0,sum:0};_e.n++,_e.sum+=Math.max(0,Rt.dl),vt.set(ot,_e)});let Ct=[...vt].filter(([,Rt])=>Rt.sum/Rt.n>=1).sort((Rt,ot)=>ot[1].sum/ot[1].n-Rt[1].sum/Rt[1].n).slice(0,8),Jt=Ct.length?Ct[0][1].sum/Ct[0][1].n:1;I+=`${__t(63)}`+(Ct.length?_a(Ct.map(([Rt,ot])=>({lab:`<span class="sn" data-gs="${Rt}">${f(b[Rt].n)}</span>`,w:ot.sum/ot.n/Jt,c:ts(ot.sum/ot.n),val:`${Ni(ot.sum/ot.n)} <small>${ot.n} ${ot.n===1?"tren":__t(64)}</small>`,tip:`${b[Rt].n}: ${ot.n}${__t(65)}${Ni(ot.sum/ot.n)}${__t(66)}`}))):__t(67))}else I+=`${__t(68)}`;let F=Ce.hoy;I+=`<button type="button" class="hmore" data-cols>${jn.on?__t(69):__t(70)}</button>`;{Qh("");let U=[...$s.m].filter(([B,J])=>W[B]&&J[0]>=3).map(([B,J])=>[B,J[1]/J[0]]).sort((B,J)=>B[1]-J[1]);U.length&&(I+=`${__t(71)}`+_a(U.slice(0,8).map(([B,J])=>({lab:Nn(B),w:J,c:yn[Be(J*100)],val:`${Math.round(J*100)}%`,tip:`${B}: ${Math.round(J*100)}${__t(72)}`}))))}{let U=nt=>{let x=(nt&&nt.snaps||[]).filter(Q=>Q.n),R=x.reduce((Q,vt)=>Q+vt.n,0),q=x.reduce((Q,vt)=>Q+vt.ok,0);return R?q/R*100:null},B=U(Ce.hoy),J=U(Ce.ayer);B!=null&&(I+=`${__t(73)}${Be(B)}">${Math.round(B)}${__t(74)}${J!=null?`${__t(75)}${Be(J)}">${Math.round(J)} %</b></span><span>${B>=J?__t(77):__t(78)}${__t(76)}`:""}</div>`)}if(I+=`${__t(79)}`,F&&F.snaps){I+=Sg(F.snaps);let U=Object.entries(F.st||{}).map(([nt,x])=>[$t.get(nt),x]).filter(([nt,x])=>nt!=null&&x.n>=3).map(([nt,x])=>[nt,x.sum/x.n/60,x]).filter(nt=>nt[1]>=1).sort((nt,x)=>x[1]-nt[1]).slice(0,8);if(U.length){let nt=U[0][1];I+=`${__t(80)}`+_a(U.map(([x,R,q])=>({lab:`<span class="sn" data-gs="${x}">${f(b[x].n)}</span>`,w:R/nt,c:ts(R),val:`${Ni(R)}${__t(81)}${Math.round(q.max/60)}</small>`,tip:`${b[x].n}: ${q.n}${__t(82)}${q.d5}${__t(83)}${Math.round(q.max/60)} min`})))}let B=Object.entries(F.lines||{}).filter(([nt,x])=>W[nt]&&x.n>=3).sort((nt,x)=>nt[1].ok/nt[1].n-x[1].ok/x[1].n);B.length&&(I+=`${__t(84)}`+_a(B.map(([nt,x])=>({lab:Nn(nt),w:x.ok/x.n,c:yn[Be(x.ok/x.n*100)],val:`${Math.round(x.ok/x.n*100)}% <small>${Ni(x.sum/x.n/60)}</small>`,tip:`${nt}${__t(85)}${Math.round(x.ok/x.n*100)}${__t(86)}${Math.round(x.max/60)} min`}))));let J=F.upd?(Date.now()-Date.parse(F.upd))/6e4:0;I+=`<small class="snote">${J>40?`${__t(88)}${Us(Math.round(J)+" min")}${__t(89)}`:""}${__t(87)}${f((F.upd||"").slice(11,16))} \xB7 ${(F.note||"").includes("Solo cuentan")?__t(90):__t(91)}</small>`}else I+=`<p class="snote">${Ce.at?__t(92):__t(93)}</p>`;return I+"</div>"}function bg(l){let m=ae(),v=j.filter(R=>(R.fam||R.tr&&R.tr.fam)===l),M=v.filter(R=>R.real),T=v.length,I=v.filter(R=>R.dl>=5).length,F=v.filter(R=>R.dl<3).length,U=v.filter(R=>R.stop==="via"||R.broke).length,B=H.alerts.filter(R=>R.fams.has(l)),J=R=>{let q=R.tr;if(!q)return"";let Q=R.v;if(R.real&&Q){let Ct=Q.next>=0?b[q.pat.stops[Q.next]].n:"";return Q.atStop>=0?`${__t(94)}${b[q.pat.stops[Q.atStop]].n}`:Ct?`${__t(95)}${Ct}`:""}let vt=R.p;return vt&&vt.next!=null&&vt.next>=0?`${__t(95)}${b[q.pat.stops[vt.next]].n}`:""},nt=v.slice().sort((R,q)=>q.dl-R.dl).slice(0,40).map(R=>{let q=R.tr;return`<li class="go${Sa({num:q?q.num:R.v.num,tid:q?q.tid:R.v.tid})?" sel":""}" data-gt="${f(q?q.num:R.v.num)}|${f(R.real?R.v.tid:q?q.tid:"")}"><b>${f(q?q.num:R.v.num)}</b><span>${q?Ui(b[q.pat.stops[q.pat.stops.length-1]].n,l):""} <small>${f(J(R))}</small></span>${R.dl>=1?`<em class="dl ${ns(R.dl)}">+${Math.round(R.dl)}</em>`:__t(96)}</li>`}).join(""),x=Qh(l);return`<div class="tc sts" style="--c:${W[l]||"#1d2330"}"><button class="x" data-cx>\xD7</button><h3>${Nn(l)}${__t(97)}${m.live?`${__t(103)}${T}${__t(104)}${M.length<T?` (${M.length}${__t(105)}`:""}`:`${__t(106)}${at(m.min)}`}</small>
      <div class="kpis"><div class="kpi ${T?Be(F/T*100):""}"><b>${T?Math.round(F/T*100)+"%":"\u2014"}${__t(98)}${I?I/Math.max(1,T)>.2?"b":"w":"g"}"><b>${I}${__t(99)}${U?"b":"g"}"><b>${U}${__t(100)}${B.length?wg(B):__t(107)}${x<.7?`${__t(108)}${Math.round(x*100)}${__t(109)}`:""}${__t(101)}${nt||__t(110)}${__t(102)}`}let wg=l=>`<div class="al">${l.slice(0,3).map(m=>`<p>\u26A0\uFE0F ${ba(m)} ${f(m.txt)} <small>${wa(m)}</small></p>`).join("")}</div>`,jn={on:!1,mesh:null};function hf(){let l=Ce.hoy,m=[];if(l&&l.st)for(let[v,M]of Object.entries(l.st)){let T=$t.get(v);T!=null&&M.n>=2&&m.push([T,M.sum/M.n/60,M.n])}if(!m.length){let v=new Map;j.forEach(M=>{if(!M.real||!M.tr||M.v.next==null||M.v.next<0||M.v.pre||!H.delays.has(M.v.tid))return;let T=M.tr.pat.stops[M.v.next],I=v.get(T)||[0,0];I[0]+=Math.max(0,M.dl),I[1]++,v.set(T,I)}),v.forEach((M,T)=>m.push([T,M[0]/M[1],M[1]]))}return m}function Eg(){if(jn.mesh&&(e.remove(jn.mesh),jn.mesh.geometry.dispose(),jn.mesh.material.dispose(),jn.mesh=null),!jn.on){a();return}let l=hf();if(!l.length){an(__t(111)),jn.on=!1;return}let m=new oo(.32,.32,1,16);m.rotateX(Math.PI/2),m.translate(0,0,.5);let v=new tr({fog:!1}),M=new io(m,v,l.length),T=new Ve,I=new de;l.forEach(([F,U],B)=>{let J=.3+Math.min(U,40)*.3;T.makeScale(1,1,J),T.setPosition(b[F].w[0],b[F].w[1],O),M.setMatrixAt(B,T),I.set(U>10?"#dc2626":U>5?"#ea7a0c":U>=1?"#eab308":"#16a34a"),M.setColorAt(B,I)}),M.renderOrder=25,M.frustumCulled=!1,e.add(M),jn.mesh=M,s.tilt<.5&&(s.tilt=.85),a()}let vr=document.createElement("button");vr.type="button",vr.id="sbtn",vr.title=__t(112),vr.innerHTML=__t(113),vr.onclick=()=>{k=!k,k&&(w=Lt=!1,Ce.at=0),u._h="",ze(),a()},document.body.appendChild(vr);function Tg(){r.dist<45!=Kt<45&&(Kt=r.dist,Re()),Ag(),ri()}let es=[],dn=new G;function Ag(){let l=0;if(jn.on){let v=hf().sort((T,I)=>I[1]-T[1]),M=[];for(let[T,I]of v){if(l>=30)break;if(dn.set(b[T].w[0],b[T].w[1],O).project(n),dn.z>1||Math.abs(dn.x)>1||Math.abs(dn.y)>1)continue;let F=(dn.x*.5+.5)*innerWidth,U=(-dn.y*.5+.5)*innerHeight;if(M.some(([J,nt])=>Math.abs(J-F)<90&&Math.abs(nt-U)<18))continue;M.push([F,U]);let B=es[l]||(es[l]=Object.assign(document.createElement("div"),{className:"slab"}));B.isConnected||document.body.appendChild(B),B.textContent=b[T].n+" +"+Math.round(I)+"\u2032",B.dataset.i=T,B.style.display="block",B.style.transform=`translate(${Math.round(F+8)}px,${Math.round(U-8)}px)`,l++}for(;l<es.length;l++)es[l].style.display="none";return}if(r.dist<30){let v=[];for(let M=0;M<Dt;M++)Ht[M]<4||(dn.set(b[M].w[0],b[M].w[1],O).project(n),!(dn.z>1||Math.abs(dn.x)>1.05||Math.abs(dn.y)>1.05)&&v.push([M,(dn.x*.5+.5)*innerWidth,(-dn.y*.5+.5)*innerHeight]));if(v.length<=70)for(let[M,T,I]of v){let F=es[l]||(es[l]=Object.assign(document.createElement("div"),{className:"slab"}));F.isConnected||document.body.appendChild(F),F.textContent=b[M].n,F.dataset.i=M,F.style.display="block",F.style.transform=`translate(${Math.round(T+8)}px,${Math.round(I-7)}px)`,l++}}for(;l<es.length;l++)es[l].style.display="none"}function Zo(l){return dn.set(l[0],l[1],O).project(n),[(dn.x*.5+.5)*innerWidth,(-dn.y*.5+.5)*innerHeight,dn.z]}function uf(l,m,v,M){let T=null,I=v*v;for(let F of j){let[U,B,J]=Zo(F.p.w);if(J>1)continue;let nt=(U-l)**2+(B-m)**2;nt<I&&(I=nt,T={a:F})}if(T)return T;I=M*M;for(let F=0;F<Dt;F++){if(!Ht[F])continue;let[U,B,J]=Zo(b[F].w);if(J>1)continue;let nt=(U-l)**2+(B-m)**2;nt<I&&(I=nt,T={s:F})}return T}let Vs=!1;window.__rodHide=()=>{Vs=!0},document.addEventListener("click",l=>{Vs&&!l.target.closest("#mcs, canvas")&&(Vs=!1)},!0),window.__rodTap=(l,m)=>{let v=null,M=1e9;for(let I of es){if(I.style.display==="none")continue;let F=I.getBoundingClientRect();if(l>=F.left-4&&l<=F.right+4&&m>=F.top-4&&m<=F.bottom+4){let U=Math.abs(m-(F.top+F.bottom)/2)*4+(l-F.left);U<M&&(M=U,v=I)}}if(v)return window.__rodPickStation(+v.dataset.i),!0;let T=uf(l,m,24,18);return T&&(T.a||T.s!=null)&&(Vs=!1),T&&T.a?(w=!1,Lt=!1,k=!1,mt=T.a.tr||{vtid:T.a.v.tid},wt=-1,It=null,Re(),ze(),tt=0,a(),!0):T&&T.s!=null?(w=!1,Lt=!1,k=!1,wt=T.s,mt=null,It=null,Re(),ze(),a(),!0):!1},window.__rodHover=(l,m)=>{let v=uf(l,m,14,10);if(v&&v.a){let M=v.a,T=M.tr?b[M.tr.pat.stops[M.tr.pat.stops.length-1]].n:"";return`<b><span style="color:${M.c}">\u25A0</span> ${f(M.fam||M.tr&&M.tr.fam||"?")}${__t(114)}${f(M.tr?M.tr.num:M.v.num)}</b><small>${T?__t(95)+f(T):""}${M.real?(M.dl>=1?` \xB7 <b style="color:#c2410c">+${Math.round(M.dl)} min</b>`:__t(115))+__t(116):__t(117)}</small>`}return v&&v.s!=null?`<b>${f(b[v.s].n)}</b><small>${[...b[v.s].fams].sort(L).join(" \xB7 ")}</small>`:null},window.__rodPickStation=l=>{Vs=!1,w=Lt=k=!1,mt=null,It=null,wt=l,Re(),u._h="",ze(),a()};{let l=p("#rc"),m=()=>{let v=l.getBoundingClientRect().top;document.documentElement.style.setProperty("--mcsmax",Math.max(160,v-64-10)+"px")};try{new ResizeObserver(m).observe(l)}catch{}addEventListener("resize",m),setTimeout(m,300)}if("serviceWorker"in navigator&&location.protocol==="https:"){let l=!1,m=!!navigator.serviceWorker.controller;navigator.serviceWorker.addEventListener("controllerchange",()=>{m&&!l&&(l=!0,location.reload())}),navigator.serviceWorker.register("./sw.js").then(v=>{v.update().catch(()=>{}),document.addEventListener("visibilitychange",()=>{document.hidden||v.update().catch(()=>{})})}).catch(()=>{})}setTimeout(()=>{try{He()}catch{}},2500),setInterval(()=>{try{Ce.at=0,He()}catch{}},15*6e4);let Qn={mode:(()=>{try{return localStorage.getItem("rod_theme")||"auto"}catch{return"auto"}})()},xa=matchMedia("(prefers-color-scheme: dark)");function Jo(){let l=Qn.mode==="dark"||Qn.mode==="auto"&&xa.matches;document.documentElement.classList.toggle("dark",l);for(let v=0;v<Dt;v++)kt.set(l?[.06,.08,.11]:[1,1,1],v*3);Y.attributes.fill.needsUpdate=!0,se.uniforms.border.value.set(l?"#e7ebf3":"#1d2330"),window.__mapTheme&&window.__mapTheme(l),Hs.textContent=Qn.mode==="auto"?l?"\u{1F319}":"\u2600\uFE0F":Qn.mode==="dark"?"\u{1F319}":"\u2600\uFE0F",Hs.title=__t(118)+{auto:__t(119),dark:__t(120),light:"desactivado"}[Qn.mode];let m=document.querySelector("meta[name=theme-color]");m&&(m.content=l?"#0d1119":"#eef1f5"),a()}let Hs=document.createElement("button");Hs.type="button",Hs.id="tbtn",Hs.onclick=()=>{Qn.mode=Qn.mode==="auto"?xa.matches?"light":"dark":Qn.mode==="dark"?"light":"dark",Qn.mode==="dark"===xa.matches&&(Qn.mode="auto");try{localStorage.setItem("rod_theme",Qn.mode)}catch{}Jo(),an(Hs.title)},document.body.appendChild(Hs);{let l=document.createElement("a");l.id="wabtn",l.href="https://www.whatsapp.com/channel/0029Vav4hGTId7nPenKMuo2C",l.target="_blank",l.rel="noopener",l.title=__t(121),l.innerHTML=__t(122),document.body.appendChild(l)}xa.addEventListener&&xa.addEventListener("change",Jo),Jo(),window.__rodTick=Ae,window.__rodFrame=Tg,window.__rodResize=()=>{Pt.resolution.set(innerWidth,innerHeight),Nt.resolution.set(innerWidth,innerHeight)},window.__rodResize();let pi={st:-1,f:new Set},df=l=>{let m=[...b[l].fams].sort(L);return`<div class="sfc">${m.length>1?`<button type="button" data-sf="" class="${pi.f.size?"":"on"}${__t(123)}`:""}${m.map(v=>`<button type="button" data-sf="${f(v)}" class="ln ${pi.f.size&&!pi.f.has(v)?"off":""}${X.has(v)?"":" hid"}" style="--c:${W[v]}">${f(v)}</button>`).join("")}</div>${m.some(v=>!X.has(v))?__t(124):""}`},Cg=l=>{let m=(l||"#6b7385").replace("#",""),v=parseInt(m.slice(0,2),16),M=parseInt(m.slice(2,4),16),T=parseInt(m.slice(4,6),16);return(.299*v+.587*M+.114*T)/255>.62?"#1d2330":"#fff"},Ui=(l,m)=>{let v=W[m]||"#6b7385";return`<span class="dst" style="background:${v};color:${Cg(v)}" title="${f(m||"")}">${f(l)}</span>`},Ko=l=>{let m=b[l]&&b[l].id;return Un.st.includes(m)?"\u{1F3E0} ":on.st.includes(m)?"\u{1F4BC} ":""},ns=l=>l>10?"d-hi":l>5?"d-md":"d-lo",Rg=/aver[ií]|incid[eè]ncia t[eè]cnica|incidencia t[eé]cnica|problema t[eè]cnic|t[eè]cnic[oa] del propi/i,va={ref:null,m:new Map};function Xh(l){if(va.ref!==H.alerts){va.ref=H.alerts,va.m=new Map;for(let m of H.alerts){if(m.src!=="Rodalies")continue;let v=m.txt.match(/(?:a causa d[e']|per causa d[e']|debido a|degut a|due to|because of|caused by)\s+([^.]{4,140})/i);for(let M of(m.es||m.txt).matchAll(/\b[Tt]ren\s+(\d{4,6})\b/g))va.m.set(M[1],{why:v?v[1].trim().replace(/\s+/g," "):"",txt:m.txt,when:m.when,cx:/no circula|no circular[àa]|suprimi|anul[·.]?la|cancel[·.]?la|anulad|cancelad/i.test(m.es||m.txt)})}}return va.m.get(String(l))||null}let ya={ref:null,m:new Map};function ff(l){let m=String(l.tr?l.tr.num:l.v&&l.v.num||"");if(!m)return null;if(ya.ref!==H.alerts){ya.ref=H.alerts,ya.m=new Map;for(let M of H.alerts)if(M.src==="Rodalies"&&Rg.test(M.es||M.txt))for(let T of(M.es||M.txt).matchAll(/\b(\d{4,6})\b/g))ya.m.set(T[1],M)}let v=ya.m.get(m);return v?{why:"aviso",txt:v.txt}:l.real&&l.stop==="via"&&l.v.still>=300?{why:"via",min:Math.round(l.v.still/60)}:null}let Sa=l=>{try{let m=mt;return m?m.num!=null&&String(m.num)===String(l.num)||l.tid&&(m.tid===l.tid||m.vtid===l.tid):!1}catch{return!1}},pf=(l,m)=>{let v=E(l,m.min-1,m.min+240).sort((M,T)=>M.est-T.est).slice(0,6);return v.length?`${__t(125)}${v.map(M=>`<li><b>${at(M.est)}</b>${Nn(M.fam)}<span>${Ui(M.dest,M.fam)}</span><i class="via">bus</i></li>`).join("")}</ol>`:""},vi=(()=>{try{return JSON.parse(localStorage.getItem("rod_fav")||"[]")}catch{return[]}})(),Ig=()=>{try{localStorage.setItem("rod_fav",JSON.stringify(vi))}catch{}},mf=l=>!!l&&vi.some(m=>m.num===String(l.num)),rn=(()=>{try{let l=JSON.parse(localStorage.getItem("rod_alarm")||"null");return l&&Date.now()-l.at<4*36e5?l:null}catch{return null}})(),jo=()=>{try{localStorage.setItem("rod_alarm",JSON.stringify(rn))}catch{}},Qo=(l,m)=>!!(rn&&l&&rn.num===String(l.num)&&rn.sid===b[l.pat.stops[m]].id);function qh(l,m){try{navigator.vibrate&&navigator.vibrate([400,150,400,150,600])}catch{}an(l+" \xB7 "+m),"Notification"in window&&Notification.permission==="granted"&&(navigator.serviceWorker&&navigator.serviceWorker.getRegistration?navigator.serviceWorker.getRegistration():Promise.resolve(null)).then(v=>v?v.showNotification(l,{body:m,tag:"alarm",requireInteraction:!0,vibrate:[400,150,400,150,600],icon:"icons/icon-192.png"}):new Notification(l,{body:m})).catch(()=>{})}function Pg(){if(!rn||rn.done)return;let l=ae();if(!l.live)return;let m=t.days.indexOf(l.ymd),v=(K[m]||[]).find(B=>String(B.num)===rn.num)||(K[m-1]||[]).find(B=>String(B.num)===rn.num);if(!v)return;let M=v.pat.stops.findIndex(B=>b[B].id===rn.sid);if(M<0)return;let T=S(v),I=typeof T=="number"?Math.max(0,T/60):0,F=v.day===m-1?1440:0,U=v.t0+v.pat.t[2*M]+I-F;if(U-l.min<-3){rn.done=!0,jo();return}U-l.min<=2&&(rn.done=!0,jo(),qh(`${__t(126)}${b[v.pat.stops[M]].n}`,`${__t(127)}${Math.max(0,Math.round(U-l.min))}${__t(128)}${at(U)}${__t(129)}`))}function Yh(l,m){let v=+l.t.slice(0,2)*60+ +l.t.slice(3,5),M=K[m]||[],T=(U,B)=>U.t0+U.pat.t[2*B+1],I=null,F=11;for(let U of M){let B=U.pat.stops.findIndex(nt=>b[nt].id===l.sid);if(B<0||B===U.pat.stops.length-1)continue;let J=Math.abs(T(U,B)-v)+(String(U.num)===l.num?-5:0)+(U.fam===l.fam?0:20)+(l.dest&&b[U.pat.stops[U.pat.stops.length-1]].id!==l.dest?3:0);J<F&&(F=J,I=U)}return I}let tl=new Set;function Lg(){if(!vi.length)return;let l=ae();if(!l.live)return;let m=t.days.indexOf(l.ymd);for(let v of vi){let M=Yh(v,m);if(!M)continue;let T=M.pat.stops.findIndex(nt=>b[nt].id===v.sid);if(T<0)continue;let I=M.t0+M.pat.t[2*T+1],F=S(M),U=typeof F=="number"?F/60:0,B=I-l.min;if(B<-2||B>60)continue;let J=l.ymd+v.num+(F==="X"?"X":U>=10?10:U>=5?5:0);tl.has(J)||(F==="X"||U>=5?(tl.add(J),qh(`${__t(130)}${at(I)} ${F==="X"?__t(131):`${__t(132)}${Math.round(U)} min`}`,`${M.fam} ${M.num}${__t(133)}${b[M.pat.stops[T]].n}${F==="X"?"":`${__t(134)}${at(I+U)}`}`)):B<=20&&!tl.has(l.ymd+v.num+"ok")&&H.vp.has(M.tid)&&(tl.add(l.ymd+v.num+"ok"),an(`${__t(130)}${at(I)}${__t(135)}`)))}}setInterval(()=>{try{Pg(),Lg()}catch{}},15e3);let Nn=l=>`<span class="ln" style="--c:${W[l]}">${f(l)}</span>`;{let l=v=>{let M=/^#?([0-9a-f]{6})$/i.exec(v||"");return M?[0,2,4].map(T=>{let I=parseInt(M[1].slice(T,T+2),16)/255;return I<=.03928?I/12.92:Math.pow((I+.055)/1.055,2.4)}).reduce((T,I,F)=>T+I*[.2126,.7152,.0722][F],0):0},m=[...new Set(Object.values(W))].filter(v=>l(v)>.3).map(v=>`.ln[style*="--c:${v}"],[data-f][style*="--c:${v}"].on,[data-f][style*="--c:${v}"]:not(.off){color:#14203a!important}`).join("");if(m){let v=document.createElement("style");v.textContent=m,document.head.appendChild(v)}}function gf(l,m){return m?l==="X"?__t(137):l>=60?`<span class="st late ${ns(l/60)}${__t(138)}${Math.round(l/60)} min</span>`:__t(139):__t(136)}function Zh(){if(!u.classList.contains("peek")||window.__mapHidden||!u.getClientRects().length)return;let l=u.querySelector(".tc");if(!l)return;let m=l.querySelector(".st")||l.querySelector("p"),v=u.getBoundingClientRect().top-u.scrollTop,M=m?m.getBoundingClientRect().bottom-v+3:150;if(m){let T=m.nextElementSibling||m.parentElement!==l&&m.parentElement.nextElementSibling;T&&(M=Math.min(M,T.getBoundingClientRect().top-v-1))}u.style.setProperty("--peekh",Math.round(Math.min(280,Math.max(110,M)))+"px")}function ze(){try{Dg()}finally{window.__rodTabSync&&window.__rodTabSync();try{Zh()}catch{}}}function Dg(){if(!mt&&wt<0&&!Lt&&!w&&!k&&!it){Vs=!1,u.innerHTML="",u._h="",u.style.display="none",u.classList.remove("peek"),iu();return}let l=ae(),m="",v=z()&&l.live,M=(x,R)=>H.alerts.filter(q=>[...q.fams].some(Q=>x.has(Q))||R!=null&&q.stops.has(R)),T=x=>x.length?`<div class="al">${x.slice(0,4).map(R=>`<p>\u26A0\uFE0F ${ba(R)} ${[...R.fams].sort(L).slice(0,6).map(Nn).join(" ")} ${f(R.txt)} <small>${wa(R)}</small></p>`).join("")}${x.length>4?`<small>y ${x.length-4}${__t(140)}`:""}</div>`:"",I=mt&&v?j.find(x=>x.real&&(mt.vtid?x.v.tid===mt.vtid:x.tr===mt)):null;if(it&&!k&&!w&&!Lt&&!mt&&wt<0)m=bg(it);else if(k)m=Mg();else if(w)m=`${__t(141)}${f(p("#ver").firstChild.textContent)}</small><ul class="chg">${p("#chg").innerHTML||__t(143)}${__t(142)}`;else if(Lt){let x=H.alerts.filter(R=>[...R.fams].some(q=>X.has(q))||!R.fams.size);m=`${__t(144)}${x.length}${__t(145)}${x.map(R=>`<div class="al"><p>${ba(R)} ${[...R.fams].sort(L).map(Nn).join(" ")} <small>${wa(R)}</small></p><p>${f(R.txt)}</p></div>`).join("")||__t(147)}${__t(146)}${H.alertsTs&&Date.now()/1e3-H.alertsTs<6*3600?__t(148):`${__t(149)}${H.alertsTs?new Date(H.alertsTs*1e3).toLocaleDateString("es-ES",{day:"numeric",month:"short"}):"\u2014"}`}</small></div>`}else if(I){let x=I.v,R=I.tr,q=qt=>f(b[R.pat.stops[qt]].n),Q=R?R.pat.stops.length:0,vt=$t.get(x.sid),Ct=vt!=null?f(b[vt].n):f(x.sid),Jt=R&&x.atStop>=0?q(x.atStop):"",Rt=R&&x.next>=0?q(x.next):Ct,ot=R&&x.next>0?q(x.next-1):"",_e=I.broke||ff(I),te=_e?`<b class="stopv">\u26A0\uFE0F ${_e.why==="aviso"?__t(150):`${__t(151)}${_e.min} min`}</b>${R&&ot?`${__t(152)}${ot}${__t(153)}${Rt}</b>`:""}`:I.stop==="via"&&R?`${__t(154)}${ot?`${__t(156)}${ot}${__t(153)}${Rt}</b>`:`${__t(157)}${Rt}</b>`}${__t(155)}${Math.max(1,Math.round(x.still/60))} min`:x.pre&&R?x.prevTr?`${__t(158)}${f(x.prevTr.num)}${__t(159)}${q(0)}</b>${x.prevDl>=1?`${__t(162)}${Math.round(x.prevDl)} min</b>`:""}${__t(160)}${at(x.arrO)}${__t(161)}${at(x.depEst)}</b>${x.preDl>=1?`${__t(163)}${at(x.dep0)})`:""}`:`${__t(164)}${q(0)}${__t(165)}${at(x.dep0+I.dl)}</b>`:x.st==="STOPPED_AT"&&Jt?`${__t(166)}${Jt}</b>`:Jt&&x.next>=0&&x.atStop!==x.next?`${__t(167)}${Jt}${__t(159)}${Rt}</b>`:ot?`${__t(168)}${ot}${__t(153)}${Rt}</b>`:`${__t(169)}${Rt}</b>`,ve=H.tu.get(x.tid),je=ve&&ve.next&&R&&x.next>=0&&ve.next.sid===b[R.pat.stops[x.next]].id&&ve.next.t?new Date(ve.next.t*1e3).toLocaleTimeString("es-ES",{hour:"2-digit",minute:"2-digit"}):"",en=[];if(R){let qt=I.idx>=0?I.idx:0,pn=x.pre?Math.max(I.dl,x.preDl||0):I.dl,is=mn=>R.t0+R.pat.t[mn]+pn;for(let mn=qt;mn<Q;mn++)en.push(`<li class="${Ko(R.pat.stops[mn])?"mine":""}${Qo(R,mn)?" alm":""}"><b>${at(is(mn===0?1:2*mn))}</b><span title="${q(mn)}">${Ko(R.pat.stops[mn])}${q(mn)}</span>${pn>=1?`<em class="dl ${ns(pn)}">${x.pre?"\u2248":""}+${Math.round(pn)}</em>`:""}${mn>0?`<button type="button" class="abtn" data-alarm="${mn}" title="Av\xEDsame 2 min antes de llegar aqu\xED">${Qo(R,mn)?"\u{1F514}":"\u{1F515}"}</button>`:""}</li>`)}m=`<div class="tc" style="--c:${I.c}"><button class="x" data-cx>\xD7</button><div>${Nn(I.fam)}${__t(170)}${f(R?R.num:x.num)}${__t(171)}${R?`<h3 class="rt"><span class="o" title="${q(0)}">${q(0)}</span><span class="ar">\u2192</span>${Ui(b[R.pat.stops[Q-1]].n,R.fam)}</h3>`:""}
        <p>${te}${je?`${__t(172)}${je}`:""}${x.plat&&x.st==="STOPPED_AT"&&Jt?`${__t(173)}${f(x.plat)}</b>`:""}</p><p>${x.pre&&x.prevTr?x.preDl>=1?`${__t(174)}${Math.round(x.preDl)}${__t(175)}`:__t(176):gf(H.delays.get(x.tid),H.delays.has(x.tid))}${(()=>{let qt=R&&fi(R.num);return qt&&qt.n>=2?`${__t(177)}${qt.n}${__t(178)}${qt.late?`${__t(180)}${qt.late}${__t(60)}${qt.n}</b>`:__t(181)}${__t(179)}${qt.avg<.5?"0":"+"+Math.round(qt.avg)} min</span>`:""})()}${(()=>{let qt=R&&Xh(R.num);return qt?`<span class="why" title="${f(qt.txt)}">${qt.why?__t(182)+f(qt.why):__t(183)}</span>`:""})()}</p>
        <small>${x.pre?`${__t(184)}${Us(Math.round(I.age)+" s")}`:x.est?__t(185):`${__t(186)}${Us(Math.round(I.age)+" s")}${I.age>120?__t(187):""}`}</small>
        ${en.length?`${I.dl>=1||x.pre&&x.preDl>=1?`${__t(188)}`:""}<ol class="stops">${en.join("")}</ol>`:""}${T(M(new Set([I.fam])))}
        ${il(R?R.num:x.num,"",I.fam)}${R?`<div class="rtb two"><button type="button" data-fav>${mf(R)?__t(189):__t(190)}</button><button type="button" data-follow>${It===R?__t(191):__t(192)}</button></div>`:""}</div>`}else if(mt&&v)m=`${__t(193)}${f(mt.num||mt.vtid||"")}${__t(194)}`;else if(mt){let x=mt,R=x.pat,q=R.stops.length,Q=S(x),vt=typeof Q=="number"?Q/60:0,Ct=t.days.indexOf(l.ymd),Jt=x.day===Ct-1?1440:0,Rt=l.min+Jt-x.t0-vt,ot=ks(x,Rt),_e=qt=>x.t0+R.t[qt]+vt,te=qt=>f(b[R.stops[qt]].n),ve=__t(195);ot&&(ve=ot.moving?`${__t(196)}${te(ot.next)}${__t(197)}${at(_e(2*ot.next))}`:ot.at===q-1?`${__t(198)}${te(q-1)}</b>`:`${__t(166)}${te(ot.at)}${__t(199)}${at(_e(2*ot.at+1))}`);let je=ot?ot.next:0,en=[];for(let qt=je;qt<q;qt++)en.push(`<li class="${Ko(R.stops[qt])?"mine":""}${Qo(x,qt)?" alm":""}"><b>${at(_e(2*qt))}</b><span title="${te(qt)}">${Ko(R.stops[qt])}${te(qt)}</span>${vt>=1?`<em class="dl ${ns(vt)}">+${Math.round(vt)}</em>`:""}${qt>0?`<button type="button" class="abtn" data-alarm="${qt}" title="Av\xEDsame 2 min antes de llegar aqu\xED">${Qo(x,qt)?"\u{1F514}":"\u{1F515}"}</button>`:""}</li>`);m=`<div class="tc" style="--c:${x.c}"><button class="x" data-cx>\xD7</button><div>${Nn(x.fam)}${__t(170)}${f(x.num)}${__t(200)}${te(0)}">${te(0)}</span><span class="ar">\u2192</span>${Ui(b[x.pat.stops[q-1]].n,x.fam)}</h3>
        <p>${ve}</p><p>${gf(Q,Q!=null)}${(()=>{let qt=fi(x.num);return qt&&qt.n>=2?`${__t(177)}${qt.n}${__t(178)}${qt.late?`${__t(180)}${qt.late}${__t(60)}${qt.n}</b>`:__t(181)}${__t(179)}${qt.avg<.5?"0":"+"+Math.round(qt.avg)} min</span>`:""})()}${__t(201)}${at(x.t0+R.t[1])}${__t(202)}${at(x.t0+R.t[2*q-2])}${__t(203)}${vt>=1?__t(188):""}<ol class="stops">${en.join("")}</ol>${il(x.num,"",x.fam)}<div class="rtb two"><button type="button" data-fav>${mf(x)?__t(189):__t(190)}</button><button type="button" data-follow>${It===x?__t(191):__t(192)}</button></div></div>`}else{let x=wt,R=t.days.indexOf(l.ymd),q=[];pi.st!==x&&(pi.st=x,pi.f.clear());let Q=ot=>(!W[ot]||X.has(ot))&&(!pi.f.size||pi.f.has(ot));if(R>=0){let ot=(_e,te)=>{for(let ve of _e){if(!Q(ve.fam))continue;let je=ve.pat.stops.indexOf(x);if(je<0||je===ve.pat.stops.length-1)continue;let en=S(ve),qt=typeof en=="number"?en/60:0,pn=ve.t0+ve.pat.t[2*je+1]-te;pn+qt<l.min-1||pn>l.min+360||q.push({tr:ve,t:pn,dl:qt,d:en,on:H.vp.has(ve.tid),past:l.min>ve.t0+ve.pat.t[1]-te+2})}};ot(K[R],0),R>0&&ot(K[R-1],1440)}q.sort((ot,_e)=>ot.t+ot.dl-_e.t-_e.dl);let vt=b[x].id,Ct=$n.get(vt),Jt=(v||me()&&l.live)&&H.url;Jt&&(!Ct||Date.now()-Ct.at>3e4)&&!Ct?.loading&&($n.set(vt,{...Ct||{},loading:!0,at:Ct?Ct.at:0}),Tt(H.url.replace(/\/+$/,""),"/departures.json?stationId="+vt).then(ot=>{$n.set(vt,{at:Date.now(),d:ot}),wt===x&&(u._h="",ze())}).catch(()=>$n.set(vt,{at:Date.now(),err:1})));let Rt=Jt&&Ct&&Ct.d&&Array.isArray(Ct.d.trains)?Ct.d.trains:null;if(Rt){let ot=new Map([...H.vp.values()].map(te=>[String((lt.get(te.tid)||{}).num||te.num),te])),_e=Rt.filter(te=>Q((te.line||{}).id||"")).slice(0,40).map(te=>{let ve=(te.departureDateHourSelectedStation||"").slice(11,16),je=(te.line||{}).id||"",en=String(te.commercialNumber||te.technicalNumber||""),qt=ot.get(en),pn=qt?H.delays.get(qt.tid):null;return`<li class="go${Sa({num:en,tid:qt?qt.tid:""})?" sel":""}" data-gt="${f(en)}|${qt?f(qt.tid):""}"><b>${f(ve)}</b>${W[je]?Nn(je):`<span class="ln" style="--c:#6b7385">${f(je||"?")}</span>`}<span>${Ui((te.destinationStation||{}).name||"",je)}${te.trainObservations?` \xB7 <i>${f(te.trainObservations)}</i>`:""}</span>${te.trainCancelled?__t(204):typeof pn=="number"&&pn>=60?`<em class="dl ${ns(pn/60)}">+${Math.round(pn/60)}</em>`:""}${te.platformSelectedStation?`${__t(205)}${f(te.platformSelectedStation)}</i>`:""}${qt?'<i class="lvd" title="circulando, posici\xF3n real">\u25CF</i>':'<i class="lvd ph">\u25CF</i>'}</li>`}).join("");m=`<div class="tc" style="--c:#1d2330"><button class="x" data-cx>\xD7</button><h3>${f(b[x].n)}</h3>${df(x)}${il("",b[x].id,"")}${__t(206)}${_e||__t(208)}</ol>${pf(x,l)}${T(M(b[x].fams,x))}${__t(207)}`}else m=`<div class="tc" style="--c:#1d2330"><button class="x" data-cx>\xD7</button><h3>${f(b[x].n)}</h3>${df(x)}${il("",b[x].id,"")}
        <small style="margin-top:6px">${v&&H.url?__t(210):""}${__t(209)}${v?__t(211):__t(212)}</small>
        <ol>${q.slice(0,40).map(ot=>`<li class="go${Sa({num:ot.tr.num,tid:ot.tr.tid})?" sel":""}" data-gt="${f(ot.tr.num)}|${f(ot.tr.tid)}"><b>${at(ot.t+ot.dl)}</b>${Nn(ot.tr.fam)}<span>${Ui(b[ot.tr.pat.stops[ot.tr.pat.stops.length-1]].n,ot.tr.fam)}</span>${ot.d==="X"?__t(204):ot.dl>=1?`<em class="dl ${ns(ot.dl)}">+${Math.round(ot.dl)}</em>`:""}${v?ot.on?'<i class="lvd" title="circulando, posici\xF3n real">\u25CF</i>':ot.past?__t(213):'<i class="lvd ph">\u25CF</i>':""}</li>`).join("")||__t(214)}</ol>${pf(x,l)}${T(M(b[x].fams,x))}${__t(207)}`}let F=u.scrollTop;if(u._h!==m&&(u.innerHTML=m,u._h=m,u.scrollTop=F),u.style.display="flex",u.classList.toggle("min",Vs),iu(),innerWidth<=640){let x=u.querySelector(".tc");if(x&&!x.querySelector(".mn")){let R=document.createElement("button");R.type="button",R.className="mn",R.setAttribute("aria-label",__t(215)),R.textContent=u.classList.contains("peek")?"\u25B4":"\u25BE",R.onclick=Q=>{Q.stopPropagation(),u.classList.toggle("peek"),Zh(),R.textContent=u.classList.contains("peek")?"\u25B4":"\u25BE",u.scrollTop=0};let q=x.querySelector(".x");x.insertBefore(R,q?q.nextSibling:x.firstChild)}}else u.classList.remove("peek");let U=p("#rc");if(innerWidth<=640&&!U.classList.contains("min")&&!ze.done&&(ze.done=1,p("#rcgrab").click()),innerWidth<=640){let x=p("#inf").getBoundingClientRect().bottom;u.style.top=Math.round(x+8)+"px",u.style.width="calc(100vw - 76px)",u.style.maxHeight=Math.max(140,p("#rc").getBoundingClientRect().top-x-16)+"px"}else if(innerHeight<=500){let x=p("#inf").getBoundingClientRect().bottom;u.style.top=Math.round(x+8)+"px",u.style.width="min(290px, 40vw)",u.style.maxHeight=innerHeight-x-20+"px"}else u.style.top="",u.style.width=k?"390px":"300px",u.style.maxHeight="";let J=u.querySelector("[data-cx]");J&&(J.onclick=x=>{if(x.stopPropagation(),ze.done=0,k||w||Lt||it&&!mt&&wt<0){k=w=Lt=!1,mt||wt>=0||(it=""),u._h="",ze(),a();return}Lt=!1,w=!1,k=!1,mt=null,wt=-1,It=null,Re(),ze(),tt=0,a()}),vf(u),u.querySelectorAll("[data-alarm]").forEach(x=>x.onclick=R=>{R.stopPropagation();let q=mt&&mt.pat?mt:lt.get(mt&&mt.vtid)||null;if(!q)return;let Q=+x.dataset.alarm,vt=b[q.pat.stops[Q]].id;rn&&rn.num===String(q.num)&&rn.sid===vt?(rn=null,an(__t(216))):(rn={num:String(q.num),sid:vt,at:Date.now()},an(`${__t(217)}${b[q.pat.stops[Q]].n}`),"Notification"in window&&Notification.permission==="default"&&Notification.requestPermission()),jo(),u._h="",ze()});{let x=u.querySelector("[data-fav]");x&&(x.onclick=R=>{R.stopPropagation();let q=mt&&mt.pat?mt:lt.get(mt&&mt.vtid)||null;if(!q)return;let Q=vi.findIndex(vt=>vt.num===String(q.num));if(Q>=0)vi.splice(Q,1),an(__t(218));else{let vt=[...Un.st,...on.st,...Wt.st],Ct=q.pat.stops.find(Jt=>vt.includes(b[Jt].id))??q.pat.stops[0];vi.push({num:String(q.num),fam:q.fam,sid:b[Ct].id,dest:b[q.pat.stops[q.pat.stops.length-1]].id,t:at(q.t0+q.pat.t[2*q.pat.stops.indexOf(Ct)+1])}),an(`${__t(219)}${q.fam}${__t(220)}${vi[vi.length-1].t}${__t(133)}${b[Ct].n}${__t(221)}`),"Notification"in window&&Notification.permission==="default"&&Notification.requestPermission()}Ig(),u._h="",ze(),$e(!0)})}{let x=u.querySelector("[data-share]");x&&(x.onclick=()=>{let R=it,q=j.filter(Jt=>(Jt.fam||Jt.tr&&Jt.tr.fam)===R),Q=q.filter(Jt=>Jt.dl>=5).sort((Jt,Rt)=>Rt.dl-Jt.dl),vt=H.alerts.filter(Jt=>Jt.fams.has(R)),Ct=`${R}${__t(222)}${at(ae().min)}: ${q.length}${__t(223)}${Q.length}${__t(224)}${Q.length?" ("+Q.slice(0,4).map(Jt=>`${Jt.tr?Jt.tr.num:Jt.v.num} +${Math.round(Jt.dl)}`).join(", ")+")":""}.${vt.length?__t(225)+vt[0].txt:__t(226)}`;navigator.share?navigator.share({text:Ct}).catch(()=>{}):(navigator.clipboard&&navigator.clipboard.writeText(Ct),an(__t(227)+Ct.slice(0,60)+"\u2026"))})}{let x=u.querySelector("[data-cols]");x&&(x.onclick=()=>{jn.on=!jn.on,Eg(),u._h="",ze()})}u.querySelectorAll("[data-gs]").forEach(x=>x.onclick=()=>{let R=+x.dataset.gs;k=!1,window.__rodPickStation(R),Object.assign(s,{tx:b[R].w[0],ty:b[R].w[1],dist:Math.min(s.dist,20)}),a()}),u.querySelectorAll("[data-sf]").forEach(x=>x.onclick=R=>{R.stopPropagation();let q=x.dataset.sf;q?pi.f.has(q)?pi.f.delete(q):pi.f.add(q):pi.f.clear(),u._h="",ze()}),u.querySelectorAll("[data-gt]").forEach(x=>x.onclick=()=>{let[R,q]=x.dataset.gt.split("|"),Q=lt.get(q);Ff({num:R,tid:H.vp.has(q)?q:"",tr:Q||null})}),u.querySelectorAll("[data-sethome]").forEach(x=>x.onclick=()=>au(wt,x.dataset.sethome));let nt=u.querySelector("[data-follow]");nt&&(nt.onclick=()=>{It=It===mt?null:mt,It?(s.dist=Math.min(s.dist,22),innerWidth<=640&&(u.classList.add("peek"),u.scrollTop=0,p("#rc").classList.contains("min")||p("#rcgrab").click())):u.classList.remove("peek"),u._h="",ze(),a()})}window.__rodCard=ze;try{let l=localStorage.getItem("rod_inf");(l==="mini"||l==null)&&p("#inf").classList.add("mini")}catch{}p("#inft").onclick=()=>{let l=p("#inf").classList.toggle("mini");try{localStorage.setItem("rod_inf",l?"mini":"")}catch{}(mt||wt>=0||Lt||w)&&(u._h="",ze())},p("#ver").onclick=()=>{w=!0,k=!1,Lt=!1,u._h="",ze()};let el={vacio:"\u{1F7E2}",lleno:"\u{1F7E0}",petado:"\u{1F534}",parado:"\u23F8\uFE0F",calor:"\u{1F975}",abordo:"\u26A0\uFE0F",gente:"\u{1F465}",retraso:"\u23F1\uFE0F",cancel:"\u2716\uFE0F",ascensor:"\u267F",via:"\u26A0\uFE0F"},Ng=["vacio","lleno","petado",__t(228),"calor","abordo"],Ug=["gente","retraso","cancel","ascensor","via"],Fg={vacio:__t(229),lleno:__t(230),petado:__t(231),parado:__t(232),calor:__t(233),abordo:__t(234),gente:__t(235),retraso:__t(236),cancel:__t(237),ascensor:__t(238),via:__t(239)},nl=l=>(H.tipos||Fg)[l]||l,Jh=(l,m)=>(H.rep||[]).filter(v=>l&&v.num===String(l)&&!v.sid||m&&v.sid===String(m)&&!v.num||l&&m&&v.num===String(l)&&v.sid===String(m)),_f=l=>{let m=Math.round((Date.now()+(H.repSkew||0)-l.at)/6e4);return m<1?__t(240):Us(m+" min")},Ma=(()=>{try{return new Set(JSON.parse(localStorage.getItem("rod_votes")||"[]"))}catch{return new Set}})();function il(l,m,v){if(!H.url||!H.repOk)return"";let M=Jh(l,m),T=l?Ng:Ug;return`${__t(241)}${M.length?"":__t(243)}</small>${M.map(I=>`<p><span>${el[I.kind]||"\u2022"} <b>${f(nl(I.kind))}</b> <small>${I.up>1?I.up+__t(244):""}${_f(I)}</small></span>${Ma.has(I.id)?"<small>\u2713</small>":`<button type="button" data-rv="${I.id}:1" title="Lo confirmo">\u{1F44D}</button><button type="button" data-rv="${I.id}:-1" title="Ya no es as\xED">\u{1F44E}</button>`}</p>`).join("")}
      <details><summary>${l?__t(245):__t(246)}</summary><div class="ckb">${T.map(I=>`<button type="button" data-rk="${I}" data-rn="${f(l||"")}" data-rs="${f(m||"")}" data-rl="${f(v||"")}">${el[I]} ${f(nl(I))}</button>`).join("")}${__t(242)}`}async function xf(l,m){try{let M=await(await fetch(H.url.replace(/\/+$/,"")+m,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)})).json();if(!M.ok){an(M.err||__t(247));return}if(M.id){Ma.add(M.id);try{localStorage.setItem("rod_votes",JSON.stringify([...Ma].slice(-300)))}catch{}}an(m==="/vote"?__t(248):M.n>1?`${__t(249)}${M.n}${__t(250)}`:__t(251));let T=await Tt(H.url.replace(/\/+$/,""),"/reports.json");T&&T.items&&(H.rep=T.items),u._h="",ze(),$e(!0)}catch{an(__t(252))}}function vf(l){l.querySelectorAll("[data-rk]").forEach(m=>m.onclick=v=>{v.stopPropagation(),m.disabled=!0,xf({kind:m.dataset.rk,num:m.dataset.rn,sid:m.dataset.rs,line:m.dataset.rl},"/report")}),l.querySelectorAll("[data-rv]").forEach(m=>m.onclick=v=>{v.stopPropagation();let[M,T]=m.dataset.rv.split(":");Ma.add(+M);try{localStorage.setItem("rod_votes",JSON.stringify([...Ma].slice(-300)))}catch{}xf({id:+M,v:+T},"/vote")})}let yf=0;function an(l){let m=p("#toast");m||(m=document.createElement("div"),m.id="toast",document.body.appendChild(m)),m.textContent=l,m.className="on",clearTimeout(yf),yf=setTimeout(()=>{m.className=""},2600)}function ba(l){return l.src?`<b class="asrc ${l.src==="Adif"?"adif":""}">${l.src==="Adif"?__t(253):f(l.src)}</b>`:""}function wa(l){if(!l.when)return"";let[m,v]=l.when.split("T"),M=_t(new Date),T=M.ymd.slice(0,4)+"-"+M.ymd.slice(4,6)+"-"+M.ymd.slice(6,8);if(m===T&&v){let I=Math.round(M.min-(+v.slice(0,2)*60+ +v.slice(3,5)));return I<1?__t(240):I<60?Us(I+" min"):`${__t(254)}${v.slice(0,5)}`}return`${m.slice(8,10)}/${m.slice(5,7)}${v?" "+v.slice(0,5):""}`}function Kh(){let l=p("#alr");if(!l)return;let m=H.alerts.filter(v=>[...v.fams].some(M=>X.has(M))).length;l.hidden=!m,l.textContent=`\u26A0\uFE0F ${m}${m===1?__t(255):__t(256)}`}{let l=p("#alrslot");l&&l.appendChild(p("#alr"))}p("#alr").onclick=()=>{w=!1,k=!1,Lt=!0,ze()},p("#wcopy").onclick=async()=>{let l=p("#wcode").textContent;try{await navigator.clipboard.writeText(l),p("#wcopy").textContent=__t(257)}catch{let v=document.createRange();v.selectNodeContents(p("#wcode"));let M=getSelection();M.removeAllRanges(),M.addRange(v),p("#wcopy").textContent=__t(258)}setTimeout(()=>p("#wcopy").textContent=__t(259),2500)};let Og=$t.get("71801");function Bg(l,m){let v=b[l].id,M=$n.get(v);!(re()&&H.url)||M&&(M.loading||Date.now()-M.at<3e4)||($n.set(v,{...M||{},loading:!0,at:M?M.at:0}),Tt(H.url.replace(/\/+$/,""),"/departures.json?stationId="+v).then(T=>{$n.set(v,{at:Date.now(),d:T}),m&&m()}).catch(()=>$n.set(v,{at:Date.now(),err:1})))}let Sf=l=>+l.slice(0,2)*60+ +l.slice(3,5),Ea={k:-2,m:null};function jh(l){let m=t.days.indexOf(ae().ymd);if(Ea.k!==m){Ea.k=m,Ea.m=new Map;for(let v of K[m]||[])Ea.m.set(String(v.num),v)}return Ea.m.get(String(l))||null}let $s={at:0,m:new Map};function Qh(l){if(Date.now()-$s.at>6e4){$s.at=Date.now(),$s.m=new Map;let v=ae(),M=t.days.indexOf(v.ymd);if(M>=0)for(let T of K[M]){let I=v.min-T.t0;if(I<T.pat.t[1]+3||I>T.pat.t[T.pat.t.length-2]-3)continue;let F=$s.m.get(T.fam)||[0,0];F[0]++,H.vp.has(T.tid)&&F[1]++,$s.m.set(T.fam,F)}}let m=$s.m.get(l);return m&&m[0]>=3?m[1]/m[0]:1}function sl(l,m){let v=ae(),M=(z()||me())&&v.live&&!m,T=$n.get(b[l].id),I=[],F=new Map([...H.vp.values()].map(B=>[String((lt.get(B.tid)||{}).num||B.num),B]));if(M&&T&&T.d&&Array.isArray(T.d.trains))for(let B of T.d.trains){let J=(B.departureDateHourSelectedStation||"").slice(11,16);if(!J)continue;let nt=String(B.commercialNumber||B.technicalNumber||""),x=F.get(nt),R=x?H.delays.get(x.tid):null,q=Math.max(typeof R=="number"?Math.max(0,R/60):0,x&&x.pre&&x.preDl||0),Q=Sf(J);Q<v.min-720&&(Q+=1440);let vt=+(B.departureDateHourSelectedStation||"").slice(17,19)||0,Ct=Q+vt/60,Jt=x&&lt.get(x.tid)||jh(nt),Rt=Jt?Jt.pat.stops.indexOf(l):-1,ot=Rt>=0?(Jt.t0+Jt.pat.t[2*Rt+1])%1440:null;if(ot!=null){for(;ot<Ct-720;)ot+=1440;for(;ot>Ct+720;)ot-=1440;Math.abs(Ct-ot)>120&&(ot=null)}let _e,te;ot==null?(_e=vt||!q?Ct:Ct+q,te=vt?0:q):vt||Math.abs(Ct-ot)>=1?(_e=Ct,te=Math.max(0,Ct-ot)):(_e=ot+q,te=q),ot!=null&&(Q=Math.round(ot)),I.push({sm:Q,est:_e,dl:te,fam:(B.line||{}).id||"",dest:(B.destinationStation||{}).name||"",destId:(B.destinationStation||{}).id||"",plat:B.platformSelectedStation||"",cancel:!!B.trainCancelled,obs:B.trainObservations||"",live:!!x,num:nt,tid:x?x.tid:"",tr:x&&lt.get(x.tid)||jh(nt),src:"oficial"})}else{let B=t.days.indexOf(v.ymd);if(B<0)return I;let J=(nt,x)=>{for(let R of nt){let q=R.pat.stops.indexOf(l);if(q<0||q===R.pat.stops.length-1)continue;let Q=S(R),vt=typeof Q=="number"?Math.max(0,Q/60):0,Ct=R.t0+R.pat.t[2*q+1]-x;if(Ct+vt<v.min-1||Ct>v.min+360)continue;let Jt=R.pat.stops[R.pat.stops.length-1];I.push({sm:Ct,est:Ct+vt,dl:vt,fam:R.fam,dest:b[Jt].n,destId:b[Jt].id,plat:"",cancel:Q==="X",obs:"",live:H.vp.has(R.tid),num:R.num,tid:R.tid,tr:R,src:"horario"})}};J(K[B],0),B>0&&J(K[B-1],1440),B+1<t.days.length&&v.min>1080&&J(K[B+1],-1440)}if(M){let B=new Set(I.map(x=>x.num)),J=t.days.indexOf(v.ymd),nt=(x,R)=>{for(let q of x||[]){if(B.has(String(q.num)))continue;let Q=q.pat.stops.indexOf(l);if(Q<0||Q===q.pat.stops.length-1)continue;let vt=q.t0+q.pat.t[2*Q+1]-R;if(vt<v.min-45||vt>v.min+1||!H.vp.get(q.tid))continue;let Jt=H.delays.get(q.tid),Rt=typeof Jt=="number"?Math.max(0,Jt/60):0,ot=q.pat.stops[q.pat.stops.length-1];I.push({sm:vt,est:vt+Rt,dl:Rt,fam:q.fam,dest:b[ot].n,destId:b[ot].id,plat:"",cancel:!1,obs:"",live:!0,num:q.num,tid:q.tid,tr:q,src:"horario"})}};J>=0&&(nt(K[J],0),J>0&&nt(K[J-1],1440));for(let x of I){let R=x.tid&&H.vp.get(x.tid),q=x.tr?x.tr.pat.stops.indexOf(l):-1;x.passed=!!(R&&q>=0&&!R.pre&&R.next!=null&&R.next>=0&&R.next>q&&R.atStop!==q),!x.passed&&x.live&&x.est<v.min&&(x.est=v.min,x.late=!0),x.passed&&(x.gone=!0)}}let U=I.filter(B=>B.gone?v.min-B.est<20:B.est>=v.min-.5).sort((B,J)=>B.est-J.est);{let B=U.filter(J=>J.gone);if(B.length>2){let J=new Set(B.slice(0,B.length-2));U=U.filter(nt=>!J.has(nt))}}if(!U.filter(B=>!B.gone).length&&I.length&&I[0].src==="oficial"&&!m)return sl(l,!0);for(let B of U){let J=B.num&&Xh(B.num);J&&J.cx&&(B.cancel=!0,B.cxWhy=J.txt)}if(z()&&v.live){let B=t.days.indexOf(v.ymd);for(let J of U){if(J.live||J.cancel||!J.tr)continue;let nt=J.tr.day===B-1?1440:J.tr.day===B+1?-1440:0,x=J.tr.t0+J.tr.pat.t[1]-nt+(J.dl||0);J.ghost=v.min>x+3&&Qh(J.fam)>=.7}}if(m||(U=U.concat(E(l,v.min-.5,v.min+360)).sort((B,J)=>B.est-J.est)),U.some(B=>B.src==="oficial")){let B=Math.max(...U.map(nt=>nt.sm)),J=new Set(U.map(nt=>nt.num));U=U.concat(sl(l,!0).filter(nt=>nt.sm>B&&!J.has(String(nt.num))))}return U}let Mf=(l,m,v,M)=>{let T={key:l,ico:m,name:v,st:[],i:0,walk:10,open:!1};try{let I=JSON.parse(localStorage.getItem("rod_"+l)||"null");I&&Object.assign(T,I)}catch{}return!T.st.length&&M&&(T.st=M),T},Un=Mf("home","\u{1F3E0}",__t(260),null),on=Mf("work","\u{1F4BC}",__t(261),null),Wt={key:"near",ico:"\u{1F4CD}",name:__t(262),st:[],i:0,walk:0,open:!1,dist:{},fix:0,err:""},Ta=[Wt,Un,on];try{Wt.homeW=JSON.parse(localStorage.getItem("rod_homew")||"null")}catch{}Un.open=!1,on.open=!1;function bf(l,m){let v=yt(l,m),M=yt(l,m+.009);return 1/Math.hypot(M[0]-v[0],M[1]-v[1])}function tu(l){if(!navigator.geolocation){Wt.err=__t(263),$e(!0);return}navigator.geolocation.getCurrentPosition(m=>{let{longitude:v,latitude:M}=m.coords,T=yt(v,M),I=bf(v,M),F=b.map((nt,x)=>[x,Math.hypot(nt.w[0]-T[0],nt.w[1]-T[1])*I]).filter(([nt])=>b[nt].fams.size).sort((nt,x)=>nt[1]-x[1]),U=F.filter(([,nt],x)=>x===0||nt<Math.max(2.5,F[0][1]*1.6)).slice(0,3),B=Wt.st[0]!==b[U[0][0]].id;Wt.w=T,Wt.k=I,Wt.acc=m.coords.accuracy!=null?m.coords.accuracy:999,Wt.st=U.map(([nt])=>b[nt].id),Wt.dist=Object.fromEntries(U.map(([nt,x])=>[b[nt].id,x])),Wt.fix=Date.now(),Wt.err="",B&&(Wt.i=0);let J=[Un,on].find(nt=>nt.st.includes(Wt.st[0])&&Wt.dist[Wt.st[0]]<1.5);$e(!0)},m=>{Wt.err=m.code===1?__t(264):__t(265),$e(!0)},{enableHighAccuracy:!1,maximumAge:6e4,timeout:12e3})}let wf=l=>Math.max(1,Math.round(l*1.3/.08));setTimeout(()=>tu(!0),400);let Sn={fixes:[],tid:"",no:new Map,shown:""};function kg(){let l=Sn.fixes;if(l.length<2)return;let m=l[l.length-1],v=l.slice().reverse().find(R=>m.t-R.t>=8e3&&m.t-R.t<=9e4);if(!v)return;let M=Math.hypot(m.w[0]-v.w[0],m.w[1]-v.w[1])*m.k,T=m.spd!=null&&m.spd>0?m.spd*3.6:M/((m.t-v.t)/36e5);if(m.acc!=null&&m.acc>100)return;if(Sn.tid){let R=j.find(q=>q.tr&&String(q.tr.num)===Sn.tid)||zs(ae()).out.find(q=>q.tr&&String(q.tr.num)===Sn.tid);if(R){if(Math.hypot(R.p.w[0]-m.w[0],R.p.w[1]-m.w[1])*m.k<=5){Sn.far=0;return}if(Sn.far||(Sn.far=m.t),m.t-Sn.far<12e4)return}Sn.far=0}if(T<22||T>200)return;let I=[m.w[0]-v.w[0],m.w[1]-v.w[1]],F=null,U=2.5,B=j.filter(R=>R.real),J=zs(ae()).out.filter(R=>R.tr&&!B.some(q=>q.tr&&String(q.tr.num)===String(R.tr.num)));for(let R of[...B,...J]){if(!R.tr)continue;let q=R.real?2.5:3.5,Q=Math.hypot(R.p.w[0]-m.w[0],R.p.w[1]-m.w[1])*m.k;if(Q>Math.min(U,q)||F&&F.real&&!R.real)continue;let vt=R.real?R.v.next:R.p.next;if(vt==null||vt<0)continue;let Ct=b[R.tr.pat.stops[vt]].w,Jt=[Ct[0]-R.p.w[0],Ct[1]-R.p.w[1]];if(Jt[0]*I[0]+Jt[1]*I[1]<=0)continue;let Rt=String(R.tr.num);(Sn.no.get(Rt)||0)>Date.now()||(U=Q,F=R)}if(!F)return;let nt=String(F.tr.num);if(Sn.tid===nt)return;Sn.tid=nt,w=Lt=k=!1,wt=-1,mt=F.tr,It=F.tr,Object.assign(s,{tx:F.p.w[0],ty:F.p.w[1],dist:Math.min(s.dist,22)}),innerWidth<=640&&(u.classList.add("peek"),p("#rc").classList.contains("min")||p("#rcgrab").click());{let R=F.tr.pat.stops,q=F.real?F.v.next:F.p.next,Q=[...Un.st,...on.st],vt=R.findIndex((Ct,Jt)=>Jt>=q&&Q.includes(b[Ct].id));vt>0&&!(rn&&rn.num===nt)&&(rn={num:nt,sid:b[R[vt]].id,at:Date.now()},jo())}Re(),u._h="",ze(),tt=0,a();let x=p("#onb");x||(x=document.createElement("div"),x.id="onb",document.body.appendChild(x)),x.innerHTML=`${__t(266)}${f(F.tr.fam)} ${f(F.tr.num)}${__t(267)}${f(b[F.tr.pat.stops[F.tr.pat.stops.length-1]].n)}${__t(268)}${rn&&rn.num===nt?`${__t(270)}${f(b[$t.get(rn.sid)].n)}`:""}${__t(269)}`,x.className="on",x.querySelector("[data-onb-no]").onclick=()=>{Sn.no.set(nt,Date.now()+20*6e4),Sn.tid="",It=null,mt=null,u._h="",ze(),x.className=""},x.querySelector("[data-onb-x]").onclick=()=>{x.className=""},setTimeout(()=>{x.className=""},15e3)}if(navigator.geolocation&&navigator.geolocation.watchPosition){let l=null,m=()=>{l==null&&(l=navigator.geolocation.watchPosition(M=>{let{longitude:T,latitude:I}=M.coords,F={t:M.timestamp||Date.now(),w:yt(T,I),k:bf(T,I),spd:M.coords.speed,acc:M.coords.accuracy};Sn.fixes.push(F),Sn.fixes=Sn.fixes.filter(U=>F.t-U.t<12e4);try{ae().live&&kg()}catch{}},()=>{},{enableHighAccuracy:!0,maximumAge:5e3,timeout:2e4}))},v=()=>{l!=null&&(navigator.geolocation.clearWatch(l),l=null)};setTimeout(m,3e3),document.addEventListener("visibilitychange",()=>{document.hidden?v():(Sn.fixes=[],m())})}setInterval(()=>{!document.hidden&&(Date.now()-Wt.fix>11e4||Ta.some(l=>l.goAt))&&tu(!1)},3e4);let yi=l=>{try{localStorage.setItem("rod_"+l.key,JSON.stringify({st:l.st,i:l.i,walk:l.walk,open:l.open,hide:l.hide||"",goAt:l.goAt||0,platAt:l.platAt||0}))}catch{}},eu=l=>l.st.length?$t.get(l.st[l.i]||l.st[0]):null;function Ef(l,m,v,M){if(M&&m.bus)return m.bstops.slice(1).some(F=>M.has(F))?"to":"out";if(M&&m.tr){let F=m.tr.pat.stops,U=F.indexOf(l);if(U>=0&&F.slice(U+1).some(B=>M.has(B)))return"to"}if(M&&m.tr)return"out";let T=$t.get(m.destId)??b.findIndex(F=>F.n===m.dest);if(T<0||T==null||v==null)return"otros";let I=F=>Math.hypot(b[F].w[0]-b[v].w[0],b[F].w[1]-b[v].w[1]);return I(T)<I(l)?"to":"out"}let Aa=l=>l<1?__t(240):l<60?Math.round(l)+" min":Math.floor(l/60)+" h "+String(Math.round(l%60)).padStart(2,"0"),Tf=0,zg=/sin servicio|sense servei|suspend|interromp|interrump|no circula|no se puede garantizar|no es pot garantir/i,Af=/sin servicio|sense servei|suspend|interromp|interrump|no circula|no hi ha circulaci|cortad|tallad|corte de|tall de|servicio alternativo|servei alternatiu|por carretera|per carretera|no se puede garantizar|no es pot garantir/i,Cf=/huelga|vaga\b|strike|servicios? m[ií]nimos|serveis m[ií]nims|demora|retard|retras|v[ií]a [uú]nica|una sola v[ií]a|incidencia|incidència|aver[ií]a|avaria|aturad|detenid|parad[oa]s? en|velocidad reducida|velocitat redu/i,Ca=l=>{let m=l.es||l.txt;return Af.test(m)||Af.test(l.txt)?3:Cf.test(m)||Cf.test(l.txt)||l.lvl>=2?2:1};function Vg(l,m,v){let M=eu(l);if(l===Wt){if(M==null)return`${__t(271)}${Wt.err?f(Wt.err)+__t(272):__t(273)}</small></span><span class="hchev">\u27F3</span></button></div>`;if([Un,on].find(Yt=>Yt.st.includes(Wt.st[0])&&Wt.dist[Wt.st[0]]<1.5))return"";l.walk=wf(Wt.dist[l.st[l.i]]||0)}if(M==null){let ct=Wt.st.length?$t.get(Wt.st[0]):null,Yt=l===on?Un:on,le=ct!=null&&!Yt.st.includes(Wt.st[0]);return`<div class="hplace"><div class="hhead hnew"><span class="hico">${l.ico}</span><span class="htit"><b>${l.name}</b><small>${le?`${__t(274)}${f(b[ct].n)}</b>`:__t(275)}</small></span>${le?`<button type="button" class="hpick" data-hnear="${l.key}${__t(276)}`:""}<button type="button" class="hpick alt" data-hset="${l.key}">${le?__t(277):__t(278)}</button></div></div>`}Bg(M,()=>$e(!0));let T=l===Wt?null:l===Un?on:Un,I=T?eu(T):null,F=I!=null&&I!==M?I:Og,U=I!=null&&I!==M?T===on?__t(279):"casa":"Barcelona",B=b[M].fams,J=new Set([...B].filter(ct=>X.has(ct))),nt=J.size<B.size,x=!1;J.size||(J=new Set(B),nt=!1,x=!0);let R=Wt.w?Math.hypot(b[M].w[0]-Wt.w[0],b[M].w[1]-Wt.w[1])*Wt.k:null,q=R!=null&&Date.now()-Wt.fix<10*6e4;l.platAt&&Date.now()-l.platAt>45*6e4&&(l.platAt=0,yi(l));let Q=l!==Wt&&!!l.platAt,vt=l===Wt||q&&R>3&&!l.goAt&&!Q,Ct=Q||l!==Wt&&q&&R<.08&&Wt.acc<=40&&!(l===Un&&Wt.homeW&&Math.hypot(Wt.homeW[0]-Wt.w[0],Wt.homeW[1]-Wt.w[1])*Wt.k<.05),Jt=l.goAt?(Date.now()-l.goAt)/6e4:null;Jt!=null&&(Jt>60||Ct)&&(l.goAt=0,yi(l));let Rt=!Ct&&l!==Wt&&!!l.goAt,ot=Rt?q&&R<=3?wf(R):Math.max(0,l.walk-Jt):0,_e=sl(M),te=_e.filter(ct=>!W[ct.fam]||X.has(ct.fam)||x),ve=vt||Ct?0:Rt?ot:l.walk,je=H.alerts.filter(ct=>[...ct.fams].some(Yt=>J.has(Yt))||ct.stops&&ct.stops.has(M)),en=je.some(ct=>zg.test(ct.es||ct.txt)),qt={to:[],out:[],otros:[],all:te},pn=U!=="Barcelona"?new Set(T.st.map(ct=>$t.get(ct)).filter(ct=>ct!=null)):null;te.forEach(ct=>qt[Ef(M,ct,F,pn)].push(ct));let is="";if(pn&&!qt.to.length&&te.length<_e.length){let ct=_e.filter(Yt=>!te.includes(Yt)&&Ef(M,Yt,F,pn)==="to");ct.length&&(qt.to=ct,is=[...new Set(ct.map(Yt=>Yt.fam))].sort(L).join(", "))}let mn=ct=>{if(ct==="all")return __t(280);let Yt=xe=>(xe.find(Mn=>Mn.fam)||{}).fam;if(ct==="to")return __t(281)+Ui(U==="Barcelona"?"Barcelona":b[F].n,Yt(qt.to)||[...J][0])+(()=>{let xe=nt&&!is?[...J].filter(Mn=>qt.to.some(ss=>ss.fam===Mn)).sort(L):[];return xe.length?`<span class="hwf" title="${__t(282)}">${xe.map(Nn).join("")}</span>`:""})();let le=[];for(let xe of qt[ct])le.some(Mn=>Mn[0]===xe.dest)||le.push([xe.dest,xe.fam]);return le.length?__t(281)+le.slice(0,2).map(([xe,Mn])=>Ui(xe,Mn)).join(" "):__t(283)},Mr=Ia.get(l.key);Mr&&!_e.some(ct=>String(ct.num)===Mr&&!ct.gone)&&ru(l.key,null);let br=ct=>{let Yt=Mr&&qt[ct].find(Wn=>String(Wn.num)===Mr&&!Wn.gone);if(Yt&&Yt.cancel)return{cls:"v-no",pin:1,x:Yt,big:__t(284),small:`${at(Yt.est)} \xB7 ${Yt.fam} a ${Yt.dest}${Yt.num?" \xB7 "+__t(285)+Yt.num:""}`,warn:""};let le=Yt||qt[ct].find(Wn=>!Wn.cancel&&!Wn.gone&&Wn.est-m.min>=ve);if(!le){let Wn=qt[ct].find(e0=>!e0.cancel);return Wn&&!vt?{cls:"v-no",big:__t(286),small:`${__t(287)}${at(Wn.est)}${__t(288)}${Aa(Wn.est-m.min)}${__t(289)}`}:{cls:"v-no",big:__t(290),small:__t(291)}}let xe=le.est-m.min-ve,Mn=vt||Ct?"v-info":Rt?xe<1.5?"v-warn":"v-ok":xe<1.5?"v-bad":xe<5?"v-warn":"v-ok",ss=le.ghost?qt[ct].find(Wn=>!Wn.cancel&&!Wn.ghost&&Wn.live&&Wn.est>le.est):null;return Yt&&xe<0&&!vt&&!Ct?{cls:"v-no",pin:1,x:le,ghost:!!le.ghost,big:__t(292),small:`${at(le.est)} \xB7 ${le.fam} a ${le.dest}${le.plat?__t(293)+le.plat:""}${le.num?" \xB7 "+__t(285)+le.num:""}`,warn:""}:{pin:Yt?1:0,cls:Mn,ghost:!!le.ghost,big:vt||Ct?xe<1?__t(294):__t(295)+Aa(xe):Rt?xe<1.5?__t(296):__t(297)+Aa(xe)+__t(298):xe<1.5?__t(299):__t(300)+Aa(xe),warn:!le.ghost&&le.late&&Yt?__t(301):le.ghost?`${__t(302)}${ss?`${__t(303)}${at(ss.est)}`:""}`:en?__t(304):"",small:`${le.bus?__t(305):""}${at(le.est)} \xB7 ${le.fam} a ${le.dest}${le.plat?__t(293)+le.plat:""}${le.dl>=1?` \xB7 +${Math.round(le.dl)} min`:""}${le.arr!=null?`${__t(306)}${at(le.arr)}`:""}${le.num?" \xB7 "+__t(285)+le.num:""}`,x:le}},Zg=pn||new Set([F]),Jg=ct=>{let Yt=ct.tr;if(!Yt)return null;let le=Yt.pat.stops,xe=le.indexOf(M);if(xe<0)return null;let Mn=-1;for(let ss=xe+1;ss<le.length;ss++)if(Zg.has(le[ss])){Mn=ss;break}return Mn<0?null:ct.est+(Yt.pat.t[2*Mn]-Yt.pat.t[2*xe+1])};qt.to.forEach(ct=>{ct.arr=Jg(ct)});let du=qt.out.length?"out":"otros",Gn=br("to"),La=br(du);if(!vt&&l!==Wt&&Gn.x&&Xg(l,Gn.x,b[M].n,ve),Ct||l===Wt&&Wt.acc<=40&&(Wt.dist[l.st[l.i]]||9)<.08){for(let ct of[Gn.x,La.x].concat(l===Wt?[br("all").x]:[]))if(ct&&!ct.cancel&&ct.est-m.min<=2&&ct.est-m.min>-.5){let Yt="w"+ct.num+"|"+Math.round(ct.sm);al.has(Yt)||(al.add(Yt),qh(`${__t(307)}${ct.fam} a ${ct.dest}`,`${__t(127)}${Math.max(0,Math.round(ct.est-m.min))}${__t(308)}${b[M].n}${ct.plat?__t(293)+ct.plat:""}`))}}let zf=z()&&m.live,Vf=J.size===1,Kg=ct=>{let Yt=ct.est-m.min;return vt?ct.cancel?"cx":Yt<0?"u-miss":"u-info":ct.cancel?"cx":Yt<ve?"u-miss":Yt<ve+1.5?"u-now":Yt<ve+5?"u-soon":"u-ok"},jg=ct=>{if(ct.gone)return`<li class="hr u-gone${ct.live?" on":""}${Sa(ct)?" sel":""} go" data-dk="${v.push(ct)-1}" title="Ya ha salido: toca para ver d\xF3nde va"><span class="hrt"><b>${at(ct.est)}${__t(309)}${Us(Math.max(1,Math.round(m.min-ct.est))+" min")}</small></span><span class="hrd">${Ui((Vf?"":ct.fam+" \xB7 ")+ct.dest,ct.fam)}${__t(310)}${f(ct.num)}</small></span><span class="hrm">${ct.dl>=1?`<em class="dl ${ns(ct.dl)}">+${Math.round(ct.dl)}</em>`:""}</span></li>`;let Yt=!ct.cancel&&ct.est-m.min<ve,le=Jh(ct.num,"");return`<li class="hr ${Kg(ct)}${ct.live?" on":""}${ct.ghost?" gh":""}${Sa(ct)?" sel":""}${Mr&&String(ct.num)===Mr?" pin":""}${vi.some(xe=>{let Mn=Yh(xe,t.days.indexOf(m.ymd));return Mn&&String(Mn.num)===String(ct.num)})?" fav":""} go" style="--lc:${W[ct.fam]||"#6b7385"}" data-dk="${v.push(ct)-1}" title="${ct.cancel?__t(284):Yt?__t(292):__t(311)}"><span class="hrt"><b>${ct.cancel?"\u2715":Yt?at(ct.est):Aa(ct.est-m.min)}</b><small>${ct.cancel?__t(312):ct.late?__t(313):Yt?__t(314):ct.ghost?__t(315):at(ct.est)}</small></span><span class="hrd">${ct.bus?'<i class="bus" title="Autob\xFAs que sustituye al tren por obras">\u{1F68C}</i>':""}${Ui((Vf?"":ct.fam+" \xB7 ")+ct.dest,ct.fam)}${le.length?`<i class="cr" title="${f(le.map(xe=>nl(xe.kind)).join(" \xB7 "))}">${le.slice(0,2).map(xe=>el[xe.kind]).join("")}</i>`:""}${ct.arr!=null?`${__t(316)}${at(ct.arr)}${ct.num?" \xB7 "+__t(285)+f(ct.num):""}${(()=>{let xe=ct.num&&fi(ct.num);return xe&&xe.n>=3&&xe.late/xe.n>=.5?`${__t(317)}${xe.late}/${xe.n})</b>`:""})()}</small>`:""}${ct.obs?`<small class="hro">${f(ct.obs)}</small>`:""}</span><span class="hrm">${!ct.cancel&&ct.dl>=1?`<em class="dl ${ns(ct.dl)}">+${Math.round(ct.dl)}</em>`:""}${ct.plat?`${__t(205)}${f(ct.plat)}</i>`:""}</span></li>`},Da=(ct,Yt,le)=>`<div class="hcol"><div class="hdir">${mn(ct)}${le?`<button type="button" class="hhide" data-hhide="${l.key}:${le}" title="Ocultar esta direcci\xF3n">\u2715</button>`:""}</div><div class="hv ${Yt.cls}${Yt.ghost?" gh":""}${Yt.x?" go":""}"${Yt.x?` data-dk="${v.push(Yt.x)-1}"`:""}><b>${Yt.big}</b>${Yt.pin?`<button type="button" class="hunpin" data-unpin="${l.key}" title="${__t(318)}">\u{1F4CC} ${__t(319)} \u2715</button>`:""}<small>${f(Yt.small)}</small>${Yt.warn?`<span class="hvw">${f(Yt.warn)}</span>`:""}</div><ol>${qt[ct].slice(0,(l.more?ct==="all"||l.hide?20:10:ct==="all"?7:l.hide?8:4)+qt[ct].filter(xe=>xe.gone).length).map(jg).join("")||"<li><span>\u2014</span></li>"}</ol></div>`;if(l===Wt){let ct=br("all");var Qg=ct.x?`<span class="nw">${ct.big}</span> \xB7 <span class="nw"><b>${at(ct.x.est)}</b> ${f(ct.x.fam)}${__t(320)}${f(ct.x.dest)}${ct.x.plat?'<span class="nw">'+__t(293)+f(ct.x.plat)+"</span>":""}`:ct.big}let t0=l===Wt?Qg:Gn.x?`<span class="nw">${Gn.big}${Gn.x.plat?__t(293)+f(Gn.x.plat):""}</span> \xB7 <span class="nw"><b>${at(Gn.x.est)}</b>${Gn.x.arr!=null?`${__t(322)}${at(Gn.x.arr)}</b>`:""}${__t(321)}${f(U)}</span>`:__t(323)+f(U),ul=l===Wt?(ct=>ct.pin?ct:null)(br("all")):Gn.pin?Gn:La.pin?La:null;return`<div class="hplace ${l.open?"open":""}${ul?" pinned":""}"><button type="button" class="hhead" data-ht="${l.key}"><span class="hico">${l.ico}</span><span class="htit"><b>${f(b[M].n)}${ul&&ul.x.num?`<i class="hpn">\u{1F4CC} ${f(ul.x.num)}</i>`:""}</b><small class="c${en?"bad":Gn.cls.slice(2)}">${t0}</small></span><span class="hchev">\u25BE</span></button>`+(l.open?`
      <div class="hbody">
        ${l.st.length>1?`<div class="hst">${l.st.map((ct,Yt)=>{let le=$t.get(ct);return le==null?"":`<button type="button" data-hs="${l.key}:${Yt}" class="${Yt===l.i?"on":""}">${f(b[le].n)}</button>`}).join("")}</div>`:""}
        ${l===Wt?`<div class="hwalk">\u{1F4CD} A ${(()=>{let ct=Wt.dist[l.st[l.i]]||0;return ct<1?Math.round(ct*100)*10+" m":ct.toFixed(1).replace(".",",")+" km"})()}${__t(325)}${l.walk}${__t(326)}`:""}
        ${Q?`<div class="hwalk away">${__t(328)}<a data-hplat="${l.key}${__t(327)}`:Ct?`${__t(329)}${l.key}${__t(330)}`:Rt?`${__t(331)}${Math.round(ot)} min</b>${q&&R<=3?__t(332):""} \xB7 <a data-hgo="${l.key}${__t(327)}`:""}${vt&&l!==Wt?`${__t(333)}${R<10?R.toFixed(1).replace(".",","):Math.round(R)}${__t(334)}`:""}<div class="hwalk"${vt||Ct||Rt?" hidden":""}><button type="button" class="hgo" data-hgo="${l.key}:1">\u{1F6B6} Ya he salido</button><button type="button" class="hgo hplat" data-hplat="${l.key}:1">${__t(335)}</button><span class="hstep" title="${__t(336)}">${__t(337)} <button type="button" data-hw="${l.key}:-1">\u2212</button><b>${ve} min</b><button type="button" data-hw="${l.key}:1">+</button> ${__t(338)}</span></div>
        ${(()=>{let ct=vi.filter(Yt=>l.st.includes(Yt.sid));return ct.length?`<div class="hfav">${ct.map(Yt=>{let le=Yh(Yt,t.days.indexOf(m.ymd)),xe=le&&te.find(Mn=>String(Mn.num)===String(le.num));return`\u2B50 <b>${Yt.t}</b> ${f(Yt.fam)} ${xe?xe.cancel?__t(339):xe.gone?__t(340):xe.dl>=1?`<em class="dl ${ns(xe.dl)}">+${Math.round(xe.dl)}${__t(341)}${at(xe.est)}`:__t(342):__t(343)}`}).join("<br>")}</div>`:""})()}
        ${nt&&is?`${__t(344)}${[...J].sort(L).map(Nn).join(" ")}${__t(345)}${U}${__t(346)}${is}${__t(347)}`:x?`${__t(348)}${[...X].sort(L).slice(0,3).map(Nn).join(" ")}${__t(349)}`:""}
        ${je.length?`<div class="hal ${en?"bad":""}${lu.v?" open":""}" data-halx>\u26A0\uFE0F ${ba(je[0])} ${f(je[0].txt)} <small>${wa(je[0])}</small>${je.length>1?` <a data-hal>+${je.length-1}${__t(350)}`:""}</div>`:`${__t(351)}${[...J].sort(L).join(", ")}</div>`}
        ${(()=>{let ct=l.st.flatMap(Yt=>Jh("",Yt));return ct.length?`<div class="hcr">${ct.slice(0,3).map(Yt=>`${el[Yt.kind]} <b>${f(nl(Yt.kind))}</b> <small>${Yt.up>1?Yt.up+__t(244):""}${_f(Yt)}</small>`).join("<br>")}</div>`:""})()}
        ${l===Wt?`<div class="hcols one">${Da("all",br("all"))}</div>`:l.hide==="out"?`<div class="hcols one">${Da("to",Gn)}</div><a class="hshow" data-hshow="${l.key}${__t(352)}`:l.hide==="to"?`<div class="hcols one">${Da(du,La)}</div><a class="hshow" data-hshow="${l.key}${__t(352)}`:`<div class="hcols">${Da("to",Gn,"to")}${Da(du,La,"out")}</div>`}
        ${te.length>(l===Wt?7:8)?`<button type="button" class="hmore" data-hmore="${l.key}">${l.more?__t(353):__t(354)}</button>`:""}
        <div class="hsrc"><span class="hsrcT" hidden title="${zf?$n.get(b[M].id)?.d?__t(355):__t(356):__t(357)} \xB7 \u25CF = tren circulando">${zf?$n.get(b[M].id)?.d?__t(358):__t(359):__t(360)}</span><a data-hmap="${M}${__t(324)}${l===Wt?__t(361):`<a data-hset="${l.key}${__t(362)}`}${l===on?`${__t(363)}`:""}</div>
      </div>`:"")+"</div>"}let Si={on:(()=>{try{return localStorage.getItem("rod_push")==="1"}catch{return!1}})(),busy:!1},Rf=/iPhone|iPad|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,If=()=>matchMedia("(display-mode: standalone)").matches||navigator.standalone===!0,Gs=new Set((()=>{try{return JSON.parse(localStorage.getItem("rod_aloff")||"[]")}catch{return[]}})()),rl=()=>{let l=new Set;return[...Un.st,...on.st].forEach(m=>{let v=$t.get(m);v!=null&&b[v].fams.forEach(M=>l.add(M))}),[...l].sort(L)},Ra=()=>({stations:[...Un.st,...on.st],lines:rl().filter(l=>!Gs.has(l))}),Hg=l=>Uint8Array.from(atob(l.replace(/-/g,"+").replace(/_/g,"/")+"===".slice((l.length+3)%4)),m=>m.charCodeAt(0));async function Pf(){return!("serviceWorker"in navigator)||!("PushManager"in window)||location.protocol!=="https:"?null:await navigator.serviceWorker.getRegistration()||navigator.serviceWorker.register("./sw.js")}async function Lf(l){let v=await(await fetch(H.url.replace(/\/+$/,"")+"/push/subscribe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sub:l.toJSON(),...Ra()})})).json();if(!v.ok)throw new Error(v.err||"error")}let Fn={on:(()=>{try{return localStorage.getItem("rod_ln")==="1"}catch{return!1}})(),seen:null};function $g(){let{lines:l,stations:m}=Ra(),v=new Set(l),M=new Set(m.map(F=>$t.get(F))),T=H.alerts.filter(F=>[...F.fams].some(U=>v.has(U))||[...F.stops||[]].some(U=>M.has(U)));if(!Fn.seen){try{Fn.seen=new Set(JSON.parse(localStorage.getItem("rod_lnseen")||"[]"))}catch{Fn.seen=new Set}if(!Fn.seen.size){T.forEach(F=>Fn.seen.add(F.id+"|"+F.txt.length)),Df();return}}let I=T.filter(F=>!Fn.seen.has(F.id+"|"+F.txt.length));if(I.length&&(I.forEach(F=>Fn.seen.add(F.id+"|"+F.txt.length)),Df(),!(!Fn.on||!("Notification"in window)||Notification.permission!=="granted")))for(let F of I.slice(0,3)){let U=(F.src==="Adif"?__t(253):"Rodalies")+(F.fams.size?" \xB7 "+[...F.fams].sort(L).slice(0,4).join(" "):""),B={body:F.txt.slice(0,240),icon:"icons/icon-192.png",tag:"rod-"+F.id};(navigator.serviceWorker&&navigator.serviceWorker.getRegistration?navigator.serviceWorker.getRegistration():Promise.resolve(null)).then(J=>J?J.showNotification(U,B):new Notification(U,B)).catch(()=>{try{new Notification(U,B)}catch{}})}}function Df(){try{localStorage.setItem("rod_lnseen",JSON.stringify([...Fn.seen].slice(-400)))}catch{}}async function Gg(){if(Fn.on)Fn.on=!1,an(__t(364));else{if(!("Notification"in window)){an(Rf&&!If()?__t(365):__t(366));return}if(await Notification.requestPermission()!=="granted"){an(__t(367));return}Fn.on=!0,an(__t(368)+Ra().lines.join(", ")+__t(369))}try{localStorage.setItem("rod_ln",Fn.on?"1":"")}catch{}$e(!0)}async function Wg(){if(!H.repOk)return Gg();if(!Si.busy){Si.busy=!0;try{let l=await Pf();if(!l){an(Rf&&!If()?__t(370):__t(371));return}if(await navigator.serviceWorker.ready,Si.on){let m=await l.pushManager.getSubscription();m&&(fetch(H.url.replace(/\/+$/,"")+"/push/unsubscribe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({endpoint:m.endpoint})}).catch(()=>{}),await m.unsubscribe().catch(()=>{})),Si.on=!1,an(__t(364))}else{if(!H.url){an(__t(372));return}if(await Notification.requestPermission()!=="granted"){an(__t(367));return}let v=(await Tt(H.url.replace(/\/+$/,""),"/push/key")).key,M=await l.pushManager.getSubscription()||await l.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Hg(v)});await Lf(M),Si.on=!0,an(__t(373)+Ra().lines.join(", "))}try{localStorage.setItem("rod_push",Si.on?"1":"")}catch{}}catch(l){an(__t(374)+(l.message||l))}finally{Si.busy=!1,$e(!0)}}}async function Nf(){if(Si.on)try{let l=await Pf(),m=l&&await l.pushManager.getSubscription();m&&await Lf(m)}catch{}}let nu=!1,Uf="";function iu(){let l=mt?"t"+(mt.tid||mt.vtid):wt>=0?"s"+wt:Lt?"a":w?"n":"";l!==Uf&&(nu=!1,Uf=l);let m=innerWidth<=640&&!!l&&!nu&&!document.documentElement.classList.contains("tabmode"),v=p("#inf");v.classList.contains("compact")!==m&&(v.classList.toggle("compact",m),requestAnimationFrame(()=>{if(u.style.display!=="none"){let M=v.getBoundingClientRect().bottom;u.style.top=Math.round(M+8)+"px",u.style.maxHeight=Math.max(140,p("#rc").getBoundingClientRect().top-M-16)+"px"}}))}let al=new Set;function Xg(l,m,v,M){if(!(Fn.on||Si.on)||!("Notification"in window)||Notification.permission!=="granted")return;let T=ae(),I=m.sm-T.min-M;if(!T.live||m.dl<10||I>40||al.has(m.num+"|"+m.sm))return;al.add(m.num+"|"+m.sm);let F=`${l.ico} ${v} ${l===on?__t(377):__t(378)}${__t(375)}${at(m.sm)}${__t(376)}${Math.round(m.dl)} min`,U=`${m.fam} a ${m.dest}${__t(379)}${at(m.est)}. Si ibas a cogerlo, puedes salir ${Math.round(m.dl)}${__t(380)}${l===on?__t(261):__t(260)}${__t(381)}`;(navigator.serviceWorker&&navigator.serviceWorker.getRegistration?navigator.serviceWorker.getRegistration():Promise.resolve(null)).then(B=>B?B.showNotification(F,{body:U,tag:"rd-"+m.num,icon:"icons/icon-192.png"}):new Notification(F,{body:U})).catch(()=>{try{new Notification(F,{body:U})}catch{}})}let yr={open:!1,seen:new Set((()=>{try{return JSON.parse(localStorage.getItem("rod_seen")||"[]")}catch{return[]}})())};document.addEventListener("click",l=>{let m=l.target.closest&&l.target.closest("[data-nowx]");if(!m||l.target.closest("a"))return;let v=m.dataset.nowx?m.dataset.nowx.split("|"):[];if(v.length){if(m.classList.contains("col"))yr.open=!0;else{yr.open=!1,v.forEach(M=>yr.seen.add(M));try{localStorage.setItem("rod_seen",JSON.stringify([...yr.seen].slice(-200)))}catch{}}$e(!0)}});function qg(l){let m=l.lines;if(!m.length&&Wt.st&&Wt.st.length){let x=new Set;Wt.st.forEach(R=>{let q=$t.get(R);q!=null&&b[q].fams.forEach(Q=>x.add(Q))}),m=[...x].sort(L)}let v=new Set(m),M=H.alerts.filter(x=>!v.size||[...x.fams].some(R=>v.has(R))),T=`<a class="hwa" href="https://www.whatsapp.com/channel/0029Vav4hGTId7nPenKMuo2C" target="_blank" rel="noopener" title="${__t(121)}" aria-label="WhatsApp"><svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path fill="#25d366" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2z"/><path fill="#fff" d="M8.6 7.2c.2-.4.4-.4.7-.4h.5c.2 0 .4 0 .6.5l.8 1.9c.1.2.1.4 0 .6l-.5.7c-.1.2-.2.3 0 .6.5.8 1.1 1.5 1.9 2 .3.2.4.1.6 0l.7-.8c.2-.2.4-.2.6-.1l1.8.9c.3.1.4.2.4.4 0 .5-.2 1.2-.8 1.6-.6.4-1.5.6-2.9 0-1.6-.7-3-2-3.9-3.4-.8-1.2-1.1-2.4-.5-3.5z"/></svg></a>`,I=M.reduce((x,R)=>Math.max(x,Ca(R)),0),F=I===3?"\u26D4 ":I===2?"\u26A0\uFE0F ":"\u2139\uFE0F ",U=`<div class="hnowh"><span class="hnowl"><b>${M.length?F+M.length+(M.length===1?__t(255):__t(256)):__t(382)}</b>${m.length?m.map(Nn).join(""):""}</span>${T}</div>`,B=M.filter(x=>!yr.seen.has(x.id)),J=M.length&&(yr.open||B.length>0),nt=M.reduce((x,R)=>Math.max(x,Ca(R)),0);return`<div class="hnow${nt===3?" bad":nt===2?" warn":nt===1?" info":""}${M.length&&!J?" col":""}" data-nowx="${f(M.map(x=>x.id).join("|"))}">${U}${J?M.slice().sort((x,R)=>Ca(R)-Ca(x)).map(x=>`<p class="sv${Ca(x)}">${ba(x)} ${f(x.txt)} <small>${wa(x)}</small></p>`).join("")+`<small class="hnowt">${__t(383)}</small>`:""}</div>`}let Ia=new Map((()=>{try{return JSON.parse(localStorage.getItem("rod_pin")||"[]")}catch{return[]}})());function su(){if(!document.documentElement.classList.contains("tabmode"))return;let l=[...document.querySelectorAll("#home .hhead .htit small")],m=(M,T)=>{M.style.fontSize=T===1?"":(M._f0*T).toFixed(1)+"px",M.querySelectorAll("b").forEach(I=>I.style.fontSize=T===1?"":(M._b0*T).toFixed(1)+"px")},v=1;for(let M of l){if(M.style.whiteSpace="",m(M,1),!M.clientWidth)continue;M._f0=parseFloat(getComputedStyle(M).fontSize);let T=M.querySelector("b");for(M._b0=T?parseFloat(getComputedStyle(T).fontSize):0;M.scrollWidth>M.clientWidth+1&&v>.86;)v-=.02,m(M,v)}if(v<1)for(let M of l)M._f0&&m(M,v);for(let M of l)M.scrollWidth>M.clientWidth+1&&(M.style.whiteSpace="normal")}addEventListener("resize",()=>{try{su()}catch{}});function ru(l,m){m?Ia.set(l,m):Ia.delete(l);try{localStorage.setItem("rod_pin",JSON.stringify([...Ia]))}catch{}}function $e(l){let m=p("#home");if(!m)return;let v=performance.now();if(!l&&v-Tf<4e3)return;Tf=v;let M=ae(),T=[],I=Ra(),F=x=>{let R=eu(x);return R==null||!Wt.w?1:Math.hypot(b[R].w[0]-Wt.w[0],b[R].w[1]-Wt.w[1])},U=[Wt,...[Un,on].sort((x,R)=>F(x)-F(R))],B=(document.documentElement.classList.contains("tabmode")?qg(I):"")+U.map(x=>Vg(x,M,T)).join("")+(Ta.some(x=>x.open)&&I.lines.length,"");m.className=Ta.some(x=>x.open)?"open":"";let J=p("#bell");J||(J=document.createElement("button"),J.type="button",J.id="bell",J.onclick=Wg,p("#inf .more").prepend(J));{let x=H.repOk?Si.on:Fn.on;J.hidden=!I.lines.length,J.className=x?"on":"",J.textContent=(x?__t(391):__t(392))+I.lines.join(", "),J.title=(x?__t(393):__t(394))+__t(60)+I.lines.join(", ")+(H.repOk?"":__t(395))}if(m._h===B)return;m._h=B,m.innerHTML=B,su();{let x=[...m.children].find(R=>R.classList.contains("hplace")&&!R.querySelector(".hnew"));x&&x.classList.add("lead")}let nt=x=>x==="work"?on:x==="near"?Wt:Un;m.querySelectorAll("[data-hloc]").forEach(x=>x.onclick=()=>{Wt.err="",tu(!0)}),m.querySelectorAll("[data-ht]").forEach(x=>x.onclick=()=>{if(p("#inf").classList.contains("compact")){nu=!0,iu();return}let R=nt(x.dataset.ht);R.open=!R.open,yi(R),$e(!0),(mt||wt>=0||Lt||w)&&(u._h="",ze())}),m.querySelectorAll("[data-hs]").forEach(x=>x.onclick=()=>{let[R,q]=x.dataset.hs.split(":"),Q=nt(R);Q.i=+q,yi(Q),$e(!0)}),m.querySelectorAll("[data-hw]").forEach(x=>x.onclick=()=>{let[R,q]=x.dataset.hw.split(":"),Q=nt(R);Q.walk=_(Q.walk+ +q,0,60),yi(Q),$e(!0)}),m.querySelectorAll("[data-hmap]").forEach(x=>x.onclick=()=>{let R=+x.dataset.hmap;w=Lt=k=!1,mt=null,wt=R,Re(),Object.assign(s,{tx:b[R].w[0],ty:b[R].w[1],dist:18,tilt:Math.max(s.tilt,.5)}),u._h="",ze(),a()}),m.querySelectorAll("[data-hset]").forEach(x=>x.onclick=()=>{Ws=x.dataset.hset,g.value="",g.placeholder=Ws==="work"?__t(396):__t(397),g.focus()}),m.querySelectorAll("[data-hnear]").forEach(x=>x.onclick=()=>{let R=$t.get(Wt.st[0]);R!=null&&au(R,x.dataset.hnear)}),m.querySelectorAll("[data-hmore]").forEach(x=>x.onclick=()=>{let R=nt(x.dataset.hmore);R.more=!R.more,$e(!0)}),m.querySelectorAll("[data-hhide]").forEach(x=>x.onclick=R=>{R.stopPropagation();let[q,Q]=x.dataset.hhide.split(":"),vt=nt(q);vt.hide=Q,yi(vt),$e(!0)}),m.querySelectorAll("[data-hshow]").forEach(x=>x.onclick=()=>{let R=nt(x.dataset.hshow);R.hide="",yi(R),$e(!0)}),m.querySelectorAll("[data-hgo]").forEach(x=>x.onclick=R=>{R.stopPropagation();let[q,Q]=x.dataset.hgo.split(":"),vt=nt(q);vt.goAt=Q==="1"?Date.now():0,vt.goAt&&(vt.platAt=0),yi(vt),$e(!0)}),m.querySelectorAll("[data-hplat]").forEach(x=>x.onclick=R=>{R.stopPropagation();let[q,Q]=x.dataset.hplat.split(":"),vt=nt(q);vt.platAt=Q==="1"?Date.now():0,vt.platAt&&(vt.goAt=0),yi(vt),$e(!0)}),m.querySelectorAll("[data-hnotst]").forEach(x=>x.onclick=R=>{R.stopPropagation(),Wt.homeW=Wt.w;try{localStorage.setItem("rod_homew",JSON.stringify(Wt.w))}catch{}$e(!0)}),m.querySelectorAll("[data-hdel]").forEach(x=>x.onclick=()=>{on.st=[],on.open=!1,yi(on),$e(!0),Nf()}),m.querySelectorAll("[data-dk]").forEach(x=>x.onclick=()=>{let R=T[+x.dataset.dk];if(ln.on&&x.matches("li.hr")&&!R.gone&&R.num!=null){let q=x.closest(".hplace")?.querySelector("[data-ht]")?.dataset.ht;if(q){let Q=Ia.get(q)===String(R.num);if(ru(q,Q?null:String(R.num)),$e(!0),Q)return}}Ff(R)}),m.querySelectorAll("[data-unpin]").forEach(x=>x.onclick=R=>{R.stopPropagation(),ru(x.dataset.unpin,null),$e(!0)}),m.querySelectorAll("[data-hal]").forEach(x=>x.onclick=()=>p("#alr").click()),vf(m)}function Ff(l){if(!l)return;let m=t.days.indexOf(ae().ymd),v=j.find(I=>I.real?l.tid&&I.v.tid===l.tid||l.num&&String(I.tr?I.tr.num:I.v.num)===String(l.num):l.tr&&I.tr===l.tr||l.num&&I.tr&&String(I.tr.num)===String(l.num)),M=l.tr||v&&v.tr||(K[m]||[]).find(I=>String(I.num)===String(l.num));if(w=Lt=k=!1,wt=-1,mt=v?v.tr||{vtid:v.v.tid}:M||null,!mt)return;It=v&&v.tr?v.tr:null,It&&innerWidth<=640&&(u.classList.add("peek"),p("#rc").classList.contains("min")||p("#rcgrab").click());let T=v?v.p.w:null;T&&Object.assign(s,{tx:T[0],ty:T[1],dist:Math.min(s.dist,22)}),Re(),u._h="",ze(),tt=0,a()}let Ws=!1;g.addEventListener("blur",()=>setTimeout(()=>{Ws&&!g.value.trim()&&(Ws=!1,g.placeholder=__t(398))},600));function UM(){}function au(l,m){let v=m==="work"?on:Un,M=b[l].id,T=b.filter(I=>I.fams.size&&I!==b[l]&&Math.hypot(I.w[0]-b[l].w[0],I.w[1]-b[l].w[1])<.6).map(I=>I.id);v.st=[M,...T].slice(0,3),v.i=0,v.open=!0,yi(v),$e(!0),Nf()}let ol=p("#lines");ol.innerHTML=`${__t(399)}`+V.map(l=>`<button type="button" style="--c:${W[l]}" data-f="${l}">${l}</button>`).join("");function Of(){try{$e(!0)}catch{}{let l=p("#linebtn");l||(l=document.createElement("button"),l.type="button",l.id="linebtn",ol.after(l),l.onclick=()=>{it=[...X][0],k=w=Lt=!1,u._h="",ze()});let m=X.size===1?[...X][0]:"";l.hidden=!m,m&&(l.innerHTML=`${__t(400)}${f(m)}${__t(401)}`)}ol.querySelectorAll("[data-f]").forEach(l=>{l.dataset.f!=="*"&&l.classList.toggle("off",!X.has(l.dataset.f))})}ol.querySelectorAll("[data-f]").forEach(l=>l.onclick=()=>{let m=l.dataset.f;m==="*"?V.forEach(v=>X.add(v)):X.size===V.length?(X.clear(),X.add(m)):X.has(m)?(X.delete(m),X.size||V.forEach(v=>X.add(v))):X.add(m);try{localStorage.setItem("rod_lines",JSON.stringify([...X]))}catch{}Of(),he(),Re(),Kh(),tt=0,a()});let ou=[...document.querySelectorAll("[data-sp]")],mi=0;function Bf(l){let m=ae();l&&(At===l||mi===l)?At?(Gt=m.min,ee=m.min,At=0,mi=l):(ce=performance.now(),At=l,mi=0):l===0?(At=0,ee=null,mi=0):(Gt=m.min,ce=performance.now(),ee=m.min,At=l,mi=0),ou.forEach(v=>{let M=+v.dataset.sp;v.classList.toggle("on",M===(At||mi)||!At&&!mi&&ee==null&&M===0),v.classList.toggle("pz",!!mi&&M===mi),v.textContent=M===0?__t(402):mi===M?"\u25B6 \xD7"+M:At===M?"\u23F8 \xD7"+M:"\xD7"+M}),tt=0,a()}ou.forEach(l=>l.onclick=()=>Bf(+l.dataset.sp)),p("#tsl").oninput=l=>{let m=+l.target.value;Gt=m,ee=m,ce=performance.now(),At===0&&!mi&&ou.forEach(v=>v.classList.remove("on")),tt=0,a()},setInterval(()=>{ee!=null&&At&&Gt+(performance.now()-ce)/6e4*At>1560&&(Gt=240,ce=performance.now())},1e3),window.__rodSearch=l=>{let m=y(l.trim());if(!m){d.style.display="none",d._pick=null;return}let v=[],M=[];b.forEach((U,B)=>{if(!U.fams.size)return;let J=y(U.n);J.startsWith(m)||J.includes(" "+m)||J.includes("-"+m)?v.push(B):J.includes(m)&&M.push(B)});let T=v.concat(M).slice(0,7),I=C.filter(U=>y(U.name).startsWith(m)).sort((U,B)=>B.pop-U.pop).slice(0,3),F=T.map(U=>({h:`\u{1F689} ${f(b[U].n)}<em>${[...b[U].fams].sort(L).slice(0,3).map(B=>`<em class="ls" style="background:${W[B]}">${B}</em>`).join(" ")}</em>`,go:()=>{if(Ws){let B=Ws;Ws=!1,g.placeholder=__t(398),au(U,B);return}w=!1,Lt=!1,k=!1,wt=U,mt=null,It=null,Re(),Object.assign(s,{tx:b[U].w[0],ty:b[U].w[1],dist:Math.min(s.dist,20),tilt:Math.max(s.tilt,.5)}),ze(),a()}})).concat(I.map(U=>({h:`${f(U.name)}${__t(403)}`,go:()=>{Object.assign(s,{tx:U.cx,ty:U.cy,dist:_(U.size*3+14,14,60)}),a()}})));d.innerHTML=F.map((U,B)=>`<li data-i="${B}">${U.h}</li>`).join("")||__t(404),d.style.display="block",d._pick=U=>{F[U]&&(F[U].go(),d.style.display="none",g.value="",g.blur())},d.querySelectorAll("li[data-i]").forEach(U=>U.onclick=()=>d._pick(+U.dataset.i))},Of(),Re();try{let l=new URLSearchParams(location.search).get("st");if(l){let m=y(l),v=-1,M=0;b.forEach((T,I)=>{if(!T.fams.size)return;let F=y(T.n),U=F===m?3:F.startsWith(m)||m.startsWith(F)?2:F.includes(m)||m.includes(F)?1:0;U>M&&(M=U,v=I)}),v>=0&&setTimeout(()=>{wt=v,Re(),Object.assign(s,{tx:b[v].w[0],ty:b[v].w[1],dist:18,tilt:.5}),ze(),a()},300)}}catch{}let lu={v:!1};document.addEventListener("click",l=>{!(l.target.closest&&l.target.closest("[data-halx]"))||l.target.closest("a")||(lu.v=!lu.v,$e(!0))}),u.addEventListener("click",l=>{if(!u.classList.contains("peek")||l.target.closest("button,a,input"))return;l.stopPropagation(),l.preventDefault(),u.classList.remove("peek");let m=u.querySelector(".mn");m&&(m.textContent="\u25BE"),u.scrollTop=0},!0);let ln={on:!1,cur:"now",home:new Map},ll=matchMedia("(max-width:640px)"),Pa=document.createElement("nav");Pa.id="tabs";let Yg=[["now","\u{1F552}",__t(402)],["map","\u{1F5FA}\uFE0F",__t(405)],["line","\u{1F4CA}",__t(406)],["set","\u2699\uFE0F",__t(407)]];Pa.innerHTML=Yg.map(([l,m,v])=>`<button type="button" data-tab="${l}"><span>${m}</span><small>${v}</small></button>`).join(""),document.body.appendChild(Pa);let Sr=document.createElement("div");Sr.id="tabL",document.body.appendChild(Sr);let Xs=document.createElement("div");Xs.id="tabA",Xs.className="box",document.body.appendChild(Xs);let cu=(l,m)=>{l&&(ln.home.has(l)||ln.home.set(l,[l.parentNode,l.nextSibling]),m.appendChild(l))},kf=()=>{for(let[l,[m,v]]of ln.home)try{m.insertBefore(l,v&&v.parentNode===m?v:null)}catch{}ln.home.clear()};function hu(){let l=X.size===1?[...X][0]:"",m=H.alerts.filter(M=>[...M.fams].some(T=>X.has(T))).length,v=[k,Lt,it,l,m].join("|");Sr._k!==v&&(Sr._k=v,Sr.innerHTML=`<button type="button" data-tl="stats" class="${k?"on":""}">\u{1F4CA} ${__t(408)}</button><button type="button" data-tl="alr" class="${Lt?"on":""}">\u26A0\uFE0F ${m}${m===1?__t(255):__t(256)}</button>${l?`<button type="button" data-tl="line" class="${it?"on":""}">\u{1F4CB} ${f(l)}</button>`:""}<a href="https://www.whatsapp.com/channel/0029Vav4hGTId7nPenKMuo2C" target="_blank" rel="noopener" title="${__t(121)}">\u{1F4AC}</a>`,Sr.querySelectorAll("[data-tl]").forEach(M=>M.onclick=()=>{let T=M.dataset.tl;k=T==="stats",Lt=T==="alr",it=T==="line"?l:"",w=!1,mt=null,wt=-1,k&&(Ce.at=0),u._h="",ze(),hu()}))}function cl(){kf();let l=window.__L||"es",m=Qn.mode;Xs.innerHTML=`<h3>${__t(407)}</h3>
      <h4>\u{1F310} ${__t(409)}</h4><div class="seg2">${[["ca","Catal\xE0"],["es","Espa\xF1ol"],["en","English"]].map(([v,M])=>`<button type="button" data-lang="${v}" class="${l===v?"on":""}">${M}</button>`).join("")}</div>
      <h4>\u{1F319} ${__t(410)}</h4><div class="seg2">${[["auto",__t(411)],["light",__t(412)],["dark",__t(413)]].map(([v,M])=>`<button type="button" data-th="${v}" class="${m===v?"on":""}">${M}</button>`).join("")}</div>
      <h4>\u{1F520} ${__t(414)}</h4><div class="seg2">${[["0","Normal"],["1",__t(415)]].map(([v,M])=>`<button type="button" data-big="${v}" class="${document.documentElement.classList.contains("big")===(v==="1")?"on":""}">${M}</button>`).join("")}</div>
      <h4>\u{1F514} ${__t(416)}</h4><div id="tabAbell"></div>${rl().length?"":`<small class="tabAhint">${__t(417)}</small>`}${(()=>{let v=rl();return v.length>1?`<small class="tabAhint">${__t(418)}</small><div class="alch">${v.map(M=>`<button type="button" data-al="${f(M)}" class="ln${Gs.has(M)?" off":""}" style="--c:${W[M]}">${f(M)}</button>`).join("")}</div>`:""})()}
      <h4>\u{1F4E1} ${__t(419)}</h4><div id="tabArt"></div>
      <h4>\u2139\uFE0F ${__t(420)}</h4><div id="tabAinf"></div>
      <p class="tabAfoot">MonkiSoft</p>`,Xs.querySelectorAll("[data-al]").forEach(v=>v.onclick=()=>{let M=v.dataset.al,T=rl();Gs.has(M)?Gs.delete(M):T.filter(I=>!Gs.has(I)).length>1&&Gs.add(M);try{localStorage.setItem("rod_aloff",JSON.stringify([...Gs]))}catch{}$e(!0),cl()}),Xs.querySelectorAll("[data-big]").forEach(v=>v.onclick=()=>{let M=v.dataset.big==="1";document.documentElement.classList.toggle("big",M);try{localStorage.setItem("rod_big",M?"1":"")}catch{}cl()}),Xs.querySelectorAll("[data-th]").forEach(v=>v.onclick=()=>{Qn.mode=v.dataset.th;try{localStorage.setItem("rod_theme",Qn.mode)}catch{}Jo(),cl()}),cu(p("#bell"),p("#tabAbell")),cu(p("#src"),p("#tabArt")),cu(p("#ver"),p("#tabAinf"))}function hl(l){if(!ln.on)return;let m=ln.cur;if(ln.cur=l,document.documentElement.dataset.tab=l,window.__mapHidden=l!=="map",Pa.querySelectorAll("[data-tab]").forEach(v=>v.classList.toggle("on",v.dataset.tab===l)),l==="line")(mt||wt>=0)&&(ln.keep={t:mt,s:wt,sk:ln.sk}),!k&&!Lt&&!it&&(k=!0,Ce.at=0),mt=null,wt=-1,w=!1,u._h="",ze(),hu();else if(m==="line"){k=Lt=!1,it="";let v=ln.keep;ln.keep=null,v&&l==="map"&&!mt&&wt<0&&(mt=v.t,wt=v.s,ln.sk=v.sk),u._h="",ze()}l==="map"&&requestAnimationFrame(()=>requestAnimationFrame(()=>{try{Zh()}catch{}dispatchEvent(new Event("resize"))})),l==="set"&&cl(),l==="now"&&($e(!0),requestAnimationFrame(su)),tt=0,a()}Pa.onclick=l=>{let m=l.target.closest("[data-tab]");m&&hl(m.dataset.tab)},window.__rodTabSync=()=>{if(!ln.on)return;let l=mt?"t"+(mt.num||mt.vtid):wt>=0?"s"+wt:"",m=l!==ln.sk;ln.sk=l,l&&m&&ln.cur!=="map"?hl("map"):(Lt||it||w)&&ln.cur!=="line"&&ln.cur!=="map"&&hl("line"),ln.cur==="line"&&hu()};function uu(){let l=ll.matches||document.documentElement.classList.contains("cap");l!==ln.on&&(ln.on=l,document.documentElement.classList.toggle("tabmode",l),l||(window.__mapHidden=!1),l?hl("now"):(delete document.documentElement.dataset.tab,kf()))}ll.addEventListener?ll.addEventListener("change",uu):ll.addListener(uu),uu();{let l=p("#rc"),m=()=>document.documentElement.style.setProperty("--rch",Math.round(l.getBoundingClientRect().height)+"px");window.ResizeObserver&&new ResizeObserver(m).observe(l),m()}window.__rod={departuresFor:sl,DEPS:$n,tripByNum:jh,delayOf:S,TID:lt,SID:$t,byDay:K,get days(){return t.days},get hist(){return Ce},get past(){return pe.cur},get cols(){return jn.mesh?jn.mesh.count:-1},get dist(){return r.dist},get follow(){return It},get selTrip(){return mt},ST:b,TR:st,FAM:V,act:()=>j,setSpeed:Bf,RT:H,pollRT:oe,nowState:ae,posAt:ks,activeTrips:zs,LL:yt,select:l=>{mt=l,ze()}}}var ua=window.__DATA__;var De=i=>document.querySelector(i),ms=i=>String(i).replace(/\B(?=(\d{3})+(?!\d))/g,"."),Vn=(i,t,e)=>Math.min(e,Math.max(t,i)),qd=i=>i.normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase(),Jn=De("#c"),Xo=new Mh({canvas:Jn,antialias:!0});Xo.setPixelRatio(Math.min(devicePixelRatio||1,2));var gs=new ja;gs.background=new de(15659509);var Oh=35,ji=new kn(Oh,1,2,1500);gs.add(new Mo(16777215,9080992,1));var sg=new wo(16777215,.9);sg.position.set(-40,-70,90);gs.add(sg);var Ji=100/ua.w,$o=ua.w/2,Go=ua.h/2,sn=[],Yd=new Ci;gs.add(Yd);var Lh=new er({color:16777215,transparent:!0,opacity:.55});for(let i of ua.m){let t=new Ci,e=[],n=[],s=1e9,r=-1e9,a=1e9,o=-1e9;for(let _ of i.g){let y=_.map(p=>{let f=[];for(let N=0;N<p.length;N+=2)f.push(new Ot((p[N]-$o)*Ji,(p[N+1]-Go)*Ji));return f.length>1&&f[0].equals(f[f.length-1])&&f.pop(),f}).filter(p=>p.length>=3);if(!y.length)continue;let C=new Kr(y[0]);for(let p=1;p<y.length;p++)C.holes.push(new ir(y[p]));e.push(C);for(let p of y[0])s=Math.min(s,p.x),r=Math.max(r,p.x),a=Math.min(a,p.y),o=Math.max(o,p.y);for(let p of y)n.push(new so(new hn().setFromPoints(p.map(f=>new G(f.x,f.y,0))),Lh))}if(!e.length)continue;let c;try{c=new go(e,{depth:1,bevelEnabled:!1})}catch{continue}let h=new vo({color:13421772}),u=new Tn(c,h);t.add(u);let g=new Ci;n.forEach(_=>g.add(_)),g.position.z=.04,Yd.add(g),t.scale.z=.01,Yd.add(t);let d={og:g,rings:i.g,inF:!0,sel:null,code:i.c,name:i.n,pop:i.p,area:i.a,pr:i.pr,rankP:0,rankD:0,group:t,mesh:u,mat:h,cx:(s+r)/2,cy:(a+o)/2,size:Math.max(r-s,o-a),z:.01,zt:.01,rank:0};u.userData.m=d,sn.push(d)}var aE=sn.map(i=>i.mesh),Km=i=>{let t=0;for(let e=0;e<i.length;e+=2){let n=(e+2)%i.length;t+=i[e]*i[n+1]-i[n]*i[e+1]}return Math.abs(t)/2},rg=0,ag=0;for(let i of sn){for(let t of i.rings)rg+=Km(t[0])-t.slice(1).reduce((e,n)=>e+Km(n),0);ag+=i.area}var vM=Math.sqrt(ag/rg),Rh={"08":"Barcelona",17:"Girona",25:"Lleida",43:"Tarragona"},og={"08":__t(421),17:__t(422),25:__t(423),43:__t(424)},ef="sqrt",nf="pop",Wd=0,Zd=0,la=1,Vo=1,yM={sqrt:i=>Math.sqrt(i),lin:i=>i,log:i=>Math.log10(Math.max(i,1))},Jd=i=>nf==="pop"?i.pop:i.pop/i.area,Ch=["#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#b10026","#5c0020"].map(i=>new de(i));function SM(i){i=Vn(i,0,1)*(Ch.length-1);let t=Math.min(Math.floor(i),Ch.length-2);return Ch[t].clone().lerp(Ch[t+1],i-t)}var ca=i=>i>=100?ms(Math.round(i)):i.toLocaleString("es-ES",{maximumFractionDigits:1});function MM(){Zd=0;for(let i of sn)Zd+=i.pop;[...sn].sort((i,t)=>t.pop-i.pop).forEach((i,t)=>i.rankP=t+1),[...sn].sort((i,t)=>t.pop/t.area-i.pop/i.area).forEach((i,t)=>i.rankD=t+1),hg()}var lg=new de("#d3d8e2"),cg=new de("#eceff3");window.__mapTheme=i=>{gs.background=new de(i?856345:15659509),cg.set(i?"#2b3242":"#eceff3"),lg.set(i?"#1a1f29":"#d3d8e2"),Lh.color.set(i?856345:16777215),Lh.opacity=i?.7:.55,sf.color.set(i?329483:2764864),rf.color.set(i?9081766:16777215);for(let t of sn)t.base&&Bh(t);Cn()};function Bh(i){i.mat.color.copy(i.base).lerp(cg,document.documentElement.classList.contains("dark")?.95:.86),i.inF||i.mat.color.lerp(lg,.8)}function hg(){la=1,Vo=1e12;for(let e of sn){let n=Jd(e);la=Math.max(la,n),Vo=Math.min(Vo,n)}let i=Math.log10(Math.max(Vo,.01)),t=Math.log10(la);for(let e of sn)e.base=SM((Math.log10(Math.max(Jd(e),.01))-i)/(t-i)),Bh(e);De("#lmin").textContent=ca(Vo),De("#lmax").textContent=ca(la),De("#lname").textContent=nf==="pop"?__t(425):__t(426),kh()}function kh(){let i=yM[ef],t=i(la),e=24*Wd;for(let n of sn)n.zt=Wd<=.001?.01:Math.max(.12*Math.min(1,Wd),e*i(Jd(n))/t)*(n.inF?1:.1);Cn()}var jm=Object.fromEntries(sn.map(i=>[i.code,i])),Ih=[],ug=[];for(let i of ua.bd){let t=jm[i.a],e=jm[i.b];if(!(!t||!e))for(let n=0;n+3<i.p.length;n+=2)ug.push((i.p[n]-$o)*Ji,(i.p[n+1]-Go)*Ji,0,(i.p[n+2]-$o)*Ji,(i.p[n+3]-Go)*Ji,0),Ih.push(t,e)}var Dh=new fs;Dh.setPositions(ug);var sf=new Xi({color:2764864,linewidth:4.4,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3}),rf=new Xi({color:16777215,linewidth:2.4,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-6});[sf,rf].forEach((i,t)=>{let e=new hr(Dh,i);e.frustumCulled=!1,e.renderOrder=10+t,gs.add(e)});function bM(){let i=Dh.attributes.instanceStart.data.array;for(let t=0;t<Ih.length;t+=2){let e=Math.max(Ih[t].z,Ih[t+1].z)+.12,n=t/2*6;i[n+2]=e,i[n+5]=e}Dh.attributes.instanceStart.data.needsUpdate=!0}var Nh={};for(let i of Object.keys(Rh)){let t=sn.filter(u=>u.pr===i),e=0,n=0,s=0,r=1e9,a=-1e9,o=1e9,c=-1e9;for(let u of t)e+=u.area,n+=u.cx*u.area,s+=u.cy*u.area,r=Math.min(r,u.cx),a=Math.max(a,u.cx),o=Math.min(o,u.cy),c=Math.max(c,u.cy);let h=document.createElement("div");h.className="plab",h.textContent=Rh[i],h.title=__t(427)+og[i],h.onclick=()=>NM("pr:"+i),document.body.appendChild(h),Nh[i]={el:h,p:new G(n/e,s/e,0),cx:(r+a)/2,cy:(o+c)/2,ext:Math.max(a-r,c-o),ext2:[a-r,c-o],area:e,name:Rh[i]}}var Xd=new G;function wM(){for(let i in Nh){let t=Nh[i];Xd.copy(t.p).project(ji),t.el.style.transform=`translate(-50%,-50%) translate(${(Xd.x*.5+.5)*innerWidth}px,${(-Xd.y*.5+.5)*innerHeight}px)`}}var fn={tilt:0,yaw:0,dist:150,tx:0,ty:0},ye={...fn};function EM(){let i=innerWidth/innerHeight,t=Math.tan(Oh*Math.PI/360);return Math.max(ua.h*Ji*1.1,100*1.1/i)/(2*t)}var TM=document.getElementById("northr");document.getElementById("north").addEventListener("click",()=>{ye.yaw=Math.round(ye.yaw/(2*Math.PI))*2*Math.PI,ye.tilt=0,Cn()});function af(){Object.assign(ye,{tilt:0,yaw:0,dist:EM(),tx:0,ty:0}),Cn()}function AM(){let{tilt:i,yaw:t,dist:e,tx:n,ty:s}=fn;ji.position.set(n+e*Math.sin(i)*Math.sin(t),s-e*Math.sin(i)*Math.cos(t),e*Math.cos(i)),ji.up.set(-Math.cos(i)*Math.sin(t),Math.cos(i)*Math.cos(t),Math.sin(i)),ji.lookAt(n,s,0)}var Ho=!0,Qm=performance.now(),Wo=new Map;function Cn(){Ho=!0}function dg(i){requestAnimationFrame(dg);let t=Vn((i-Qm)/1e3,0,.05);Qm=i;let e=1-Math.exp(-t*10),n=!1;for(let s of Object.keys(fn)){let r=ye[s]-fn[s];Math.abs(r)>1e-4*(s==="dist"?10:1)?(fn[s]+=r*e,n=!0):fn[s]=ye[s]}for(let s of sn){let r=s.zt-s.z;Math.abs(r)>.002?(s.z+=r*Math.min(1,e*.8),s.group.scale.z=s.z,s.og.position.z=s.z+.04,n=!0):s.z!==s.zt&&(s.z=s.zt,s.group.scale.z=s.z,s.og.position.z=s.z+.04)}for(let[s,r]of Wo){let a=(i-r)/1800;a>=1?(Wo.delete(s),mr(s)):mr(s,.5*Math.sin(Math.PI*a)),n=!0}if(window.__rodTick&&window.__rodTick(i)&&(Ho=!0),window.__mapHidden){Ho=!0;return}if(n||Ho){TM.style.transform=`rotate(${fn.yaw}rad) scaleY(${(.55+.45*Math.cos(fn.tilt)).toFixed(3)})`;{let s=Math.abs(Math.sin(ye.yaw/2))<.02&&ye.tilt<.03,r=document.getElementById("north");r.classList.contains("flat")!==s&&(r.classList.toggle("flat",s),r.title=s?__t(428):__t(429))}AM(),bM(),wM(),window.__rodFrame&&window.__rodFrame(),Xo.render(gs,ji),Ho=n,De("#tilt").value=Math.round(ye.tilt*180/Math.PI),De("#yaw").value=Math.round(((ye.yaw*180/Math.PI+180)%360+360)%360-180)}}function fg(){Xo.setSize(innerWidth,innerHeight,!1),ji.aspect=innerWidth/innerHeight,ji.updateProjectionMatrix(),sf.resolution.set(innerWidth,innerHeight),rf.resolution.set(innerWidth,innerHeight),window.__rodResize&&window.__rodResize(),Cn()}addEventListener("resize",()=>{fg(),Je.length&&Os()});Jn.addEventListener("wheel",i=>{i.preventDefault();let t=i.deltaMode===1?16:1,e=i.deltaY*t;if(i.altKey){let n=(Math.abs(i.deltaX)>Math.abs(i.deltaY)?i.deltaX:i.deltaY)*t;ye.yaw+=n*.0035}else i.ctrlKey?ye.dist=Vn(ye.dist*Math.exp(e*.01),6,400):ye.tilt=Vn(ye.tilt+e*.002,0,1.32);Cn()},{passive:!1});Jn.addEventListener("contextmenu",i=>i.preventDefault());var Ki=new Map,si=null,dr=0,Kd=0,jd=0;var Uh=null;Jn.addEventListener("pointerdown",i=>{if(i.pointerType!=="mouse"&&!document.body.classList.contains("used")&&(document.body.classList.add("used"),Je.length&&setTimeout(Os,50)),Jn.setPointerCapture(i.pointerId),Ki.set(i.pointerId,{x:i.clientX,y:i.clientY}),Ki.size===1&&(si={rot:i.button===2||i.altKey,moved:0,multi:!1,touch:i.pointerType!=="mouse"}),Ki.size===2){let[t,e]=[...Ki.values()];dr=Math.hypot(t.x-e.x,t.y-e.y),Kd=Math.atan2(e.y-t.y,e.x-t.x),jd=(t.y+e.y)/2,Uh={mode:null,rot:0,sc:0,tl:0},si&&(si.multi=!0)}of()});Jn.addEventListener("pointermove",i=>{let t=Ki.get(i.pointerId);if(!t){ps={x:i.clientX,y:i.clientY},Qd||(Qd=requestAnimationFrame(RM));return}let e=i.clientX-t.x,n=i.clientY-t.y;if(t.x=i.clientX,t.y=i.clientY,Ki.size===2){let[s,r]=[...Ki.values()],a=Math.hypot(s.x-r.x,s.y-r.y),o=Math.atan2(r.y-s.y,r.x-s.x),c=(s.y+r.y)/2,h=o-Kd;h>Math.PI&&(h-=2*Math.PI),h<-Math.PI&&(h+=2*Math.PI);let u=dr?a-dr:0,g=c-jd,d=Uh||(Uh={mode:null,rot:0,sc:0,tl:0});d.rot+=h,d.sc+=u,d.tl+=g,d.mode?d.mode==="zoom"&&Math.abs(d.rot)>.45&&(d.mode="rotate"):Math.abs(d.rot)>.3?d.mode="rotate":Math.abs(d.tl)>30&&Math.abs(d.sc)<18?d.mode="tilt":Math.abs(d.sc)>12&&(d.mode="zoom"),(d.mode==="zoom"||d.mode==="rotate")&&dr&&(ye.dist=Vn(ye.dist*dr/a,6,400)),d.mode==="rotate"&&(ye.yaw+=h,fn.yaw=ye.yaw),d.mode==="tilt"&&(ye.tilt=Vn(ye.tilt-g*.006,0,1.32),fn.tilt=ye.tilt),dr=a,Kd=o,jd=c,Cn();return}if(si.moved+=Math.abs(e)+Math.abs(n),si.rot||i.altKey)ye.yaw+=e*.005,ye.tilt=Vn(ye.tilt+n*.004,0,1.32),fn.yaw=ye.yaw,fn.tilt=ye.tilt;else{let s=2*fn.dist*Math.tan(Oh*Math.PI/360)/innerHeight,r=Math.sin(fn.yaw),a=Math.cos(fn.yaw),o=1/Math.max(Math.cos(fn.tilt),.3);ye.tx=Vn(ye.tx-a*e*s+-r*n*s*o,-70,70),ye.ty=Vn(ye.ty-r*e*s+a*n*s*o,-70,70),fn.tx=ye.tx,fn.ty=ye.ty}Cn()});var pg=i=>{let t=si&&!si.rot&&!si.multi&&si.moved<(si.touch?12:6)&&i.type==="pointerup"&&Ki.size===1,e=si&&si.touch;Ki.delete(i.pointerId),dr=0,Uh=null,Ki.size||(si=null),t&&window.__rodTap&&window.__rodTap(i.clientX,i.clientY)};Jn.addEventListener("pointerup",pg);Jn.addEventListener("pointercancel",pg);Jn.addEventListener("dblclick",af);addEventListener("keydown",i=>{i.key==="Alt"&&(Jn.style.cursor="move")});addEventListener("keyup",i=>{i.key==="Alt"&&(Jn.style.cursor="")});addEventListener("blur",()=>{Jn.style.cursor=""});var CM=new To,tg=new Ot,ps=null,Qd=0,fr=null;function RM(){if(Qd=0,!ps||si)return;tg.set(ps.x/innerWidth*2-1,-(ps.y/innerHeight)*2+1),CM.setFromCamera(tg,ji);let i=null;if(i!==fr){let e=fr;fr=i,e&&mr(e),i&&mr(i),Cn()}let t=window.__rodHover&&window.__rodHover(ps.x,ps.y);if(t){ur.innerHTML=t,ur.style.display="block";let e=ur.offsetWidth,n=ur.offsetHeight;ur.style.left=Vn(ps.x+14,6,innerWidth-e-6)+"px",ur.style.top=Vn(ps.y+14,6,innerHeight-n-6)+"px",Jn.style.cursor="pointer"}else of(),Jn.style.cursor=""}Jn.addEventListener("pointerleave",()=>{if(ps=null,fr){let i=fr;fr=null,mr(i),Cn()}of()});var ur=De("#tip");function of(){ur.style.display="none"}document.querySelectorAll("[data-metric]").forEach(i=>i.onclick=()=>{nf=i.dataset.metric,document.querySelectorAll("[data-metric]").forEach(t=>t.classList.toggle("on",t===i)),hg()});document.querySelectorAll("[data-mode]").forEach(i=>i.onclick=()=>{ef=i.dataset.mode,document.querySelectorAll("[data-mode]").forEach(t=>t.classList.toggle("on",t===i)),kh()});De("#yaw").oninput=i=>{ye.yaw=+i.target.value*Math.PI/180,Cn()};De("#tilt").oninput=i=>{ye.tilt=+i.target.value*Math.PI/180,Cn()};De("#zin").onclick=()=>{ye.dist=Vn(ye.dist*.75,6,400),Cn()};De("#zout").onclick=()=>{ye.dist=Vn(ye.dist/.75,6,400),Cn()};De("#rst").onclick=af;var eg=["#2563eb","#059669","#7c3aed","#db2777","#0891b2","#ca8a04"],Je=[],ng={},IM=i=>ng[i]||(ng[i]=new er({color:i}));function mg(i,t){i.og.children.forEach(e=>e.material=t?IM(t):Lh)}function mr(i,t=0){let e=i.mat.emissive;i===fr?e.setHex(5592405):i.sel?e.copy(i.sel.tint):e.setHex(0),t&&e.addScalar(t)}function lf(i,t){let e=1e9,n=-1e9,s=1e9,r=-1e9;for(let h of i)e=Math.min(e,h.cx-h.size/2),n=Math.max(n,h.cx+h.size/2),s=Math.min(s,h.cy-h.size/2),r=Math.max(r,h.cy+h.size/2);let a=innerWidth/innerHeight,o=Math.tan(Oh*Math.PI/360),c=i.length===1?Vn(i[0].size*3.2+14,14,120):Vn(Math.max((r-s)*1.5,(n-e)*1.5/a)/(2*o)+6,14,300);Object.assign(ye,{tx:(e+n)/2,ty:(s+r)/2,dist:c,tilt:t,yaw:0}),Cn()}var Fs=De("#q"),ui=De("#list"),Ze=De("#mcs");function zh(i,t=!0){if(ui.style.display="none",Fs.value="",!i.sel){Je.length>=6&&gg(Je[0].o,!0);let e=new Set(Je.map(s=>s.color)),n=eg.find(s=>!e.has(s))||eg[0];i.sel={o:i,color:n,tint:new de(n).multiplyScalar(.12)},Je.push(i.sel),mg(i,n)}Ze.classList.contains("min")&&qo(!1),Wo.set(i,performance.now()),mr(i),t&&lf([i],Math.max(ye.tilt,.9)),Os()}function gg(i,t){let e=Je.indexOf(i.sel);e>=0&&Je.splice(e,1),i.sel=null,mg(i,null),mr(i),Cn(),t||Os()}function _g(i){let t=Math.min(devicePixelRatio||1,2),e=i.clientWidth,n=i.clientHeight;i.width=e*t,i.height=n*t;let s=i.getContext("2d");s.scale(t,t),s.clearRect(0,0,e,n);let r=Je.map(u=>{let g=1e9,d=-1e9,_=1e9,y=-1e9;for(let C of u.o.rings)for(let p=0;p<C[0].length;p+=2)g=Math.min(g,C[0][p]),d=Math.max(d,C[0][p]),_=Math.min(_,C[0][p+1]),y=Math.max(y,C[0][p+1]);return{x0:g,x1:d,y0:_,y1:y}}),a=Math.max(...r.map(u=>Math.max(u.x1-u.x0,u.y1-u.y0))),o=(Math.min(e,n)-22)/a;Je.forEach((u,g)=>{let d=r[g],_=(d.x0+d.x1)/2,y=(d.y0+d.y1)/2;s.beginPath();for(let C of u.o.rings)for(let p of C)for(let f=0;f<p.length;f+=2){let N=e/2+(p[f]-_)*o,O=n/2-(p[f+1]-y)*o;f?s.lineTo(N,O):s.moveTo(N,O),f===p.length-2&&s.closePath()}s.fillStyle=u.color+"40",s.fill("evenodd"),s.lineWidth=1.6,s.strokeStyle=u.color,s.stroke()});let c=o/vM,h=[.5,1,2,5,10,20,50,100].find(u=>u*c>=28)||100;s.fillStyle="#6b7385",s.fillRect(10,n-12,h*c,2),s.font="10px system-ui",s.fillText(h+" km",12+h*c,n-8)}function Os(){if(!Je.length){Ze.innerHTML="",Ze.style.display="none",qo(!1);return}if(Ze.style.display="flex",innerWidth<=640){let e=De("#inf").getBoundingClientRect().bottom;Ze.style.top=Math.round(e+8)+"px",Ze.style.maxHeight=Math.max(110,Math.min(innerHeight*(De("#rc").classList.contains("min")?.7:.4),De("#rc").getBoundingClientRect().top-e-16))+"px",Ze.style.width=""}else if(innerHeight<=500){let e=De("#inf").getBoundingClientRect().bottom;Ze.style.top=Math.round(e+8)+"px",Ze.style.maxHeight=Math.max(120,innerHeight-e-20)+"px",Ze.style.width="min(290px, 40vw)"}else Ze.style.top="",Ze.style.maxHeight="",Ze.style.width="";let i=Je.map((e,n)=>{let s=e.o;return`<div class="mc" draggable="true" data-i="${n}" style="--c:${e.color}"><button class="x" data-x="${n}" title="Cerrar">\xD7</button><div class="mh"><i class="dot"></i><b>${s.name}</b><em>${Rh[s.pr]}</em></div><div class="mb">${ms(s.pop)}${__t(435)}${ca(s.area)} km\xB2 \xB7 ${ca(s.pop/s.area)}${__t(436)}${s.rankP}${__t(437)}`}).join("");if(Je.length>1){let e=s=>Math.max(...Je.map(s)),n=[[__t(438),s=>s.o.pop,ms],[__t(439),s=>s.o.area,ca],[__t(440),s=>s.o.pop/s.o.area,ca]];if(i+=`${__t(441)}`+n.map(([s,r,a])=>`<div class="cr"><span>${s}</span>${Je.map(o=>`<div class="bw"><i style="width:${Math.max(2,r(o)/e(r)*100)}%;background:${o.color}"></i><b>${a(r(o))}</b></div>`).join("")}</div>`).join(""),Je.length===2){let[s,r]=Je.map(h=>h.o),[a,o]=s.pop>=r.pop?[s,r]:[r,s],c=(h,u)=>(h>=u?h/u:u/h).toLocaleString("es-ES",{maximumFractionDigits:1});i+=`<small class="ratio"><b>${a.name}${__t(442)}${c(a.pop,o.pop)}${__t(443)}${o.name}${__t(444)}${c(a.area,o.area)}\xD7 ${a.area>=o.area?__t(445):__t(446)}.</small>`}i+="</div>"}Ze.innerHTML=i,Ze.querySelectorAll("[data-x]").forEach(e=>e.onclick=n=>{n.stopPropagation(),gg(Je[+e.dataset.x].o)}),Ze.querySelectorAll(".mc").forEach(e=>{e.onclick=()=>lf([Je[+e.dataset.i].o],Math.max(ye.tilt,.9)),e.onmouseenter=()=>{let n=Je[+e.dataset.i].o;Wo.set(n,performance.now())},e.ondragstart=n=>{n.dataTransfer.setData("text/plain",e.dataset.i),e.classList.add("drag")},e.ondragend=()=>e.classList.remove("drag"),e.ondragover=n=>{n.preventDefault(),e.classList.add("over")},e.ondragleave=()=>e.classList.remove("over"),e.ondrop=n=>{n.preventDefault();let s=+n.dataTransfer.getData("text/plain"),r=+e.dataset.i;if(s!==r){let[a]=Je.splice(s,1);Je.splice(r,0,a),Os();let o=De("#sil");o&&o.classList.add("flash")}}});let t=De("#sil");t&&_g(t)}Fs.addEventListener("input",()=>{if(window.__rodSearch){window.__rodSearch(Fs.value);return}let i=qd(Fs.value.trim());if(!i){ui.style.display="none";return}let t=[],e=[];for(let s of sn){let r=qd(s.name);r.startsWith(i)?t.push(s):r.includes(i)&&e.push(s)}let n=t.sort((s,r)=>r.pop-s.pop).concat(e.sort((s,r)=>r.pop-s.pop)).slice(0,8);ui.innerHTML=n.map((s,r)=>`<li data-i="${r}">${s.name}<em>${ms(s.pop)}</em></li>`).join("")||__t(404),ui.style.display="block",ui.querySelectorAll("li[data-i]").forEach(s=>s.onclick=()=>zh(n[+s.dataset.i])),ui._r=n});Fs.addEventListener("keydown",i=>{i.key==="Enter"&&ui._pick?ui._pick(0):i.key==="Enter"&&ui._r&&ui._r[0]&&zh(ui._r[0]),i.key==="Escape"&&(Fs.value="",ui.style.display="none")});addEventListener("keydown",i=>{i.key==="Escape"&&i.target!==Fs&&xg()});var ig=0;addEventListener("resize",()=>{clearTimeout(ig),ig=setTimeout(()=>{let i=De("#sil");i&&_g(i)},120)});var Fh=null,tf=De("#chip");function PM(i,t,e=.8){Fh={codes:new Set(i.map(n=>n.code)),label:t},sn.forEach(n=>{n.inF=Fh.codes.has(n.code),Bh(n)}),tf.innerHTML=`${__t(447)}${t}</b> \xB7 ${i.length}${i.length===1?__t(448):__t(449)}</span><button id="chx" title="Quitar filtro">\xD7</button>`,tf.style.display="flex",De("#chx").onclick=xg,kh(),lf(i,e),i.slice(0,40).forEach(n=>Wo.set(n,performance.now()))}function xg(){Fh&&(Fh=null,sn.forEach(i=>{i.inF=!0,Bh(i)}),tf.style.display="none",kh())}var LM="prov";function DM(i){let t=[...sn].sort((a,o)=>o.pop-a.pop),e=[...sn].sort((a,o)=>o.pop/o.area-a.pop/a.area),[n,s,r]=i.split(":");if(n==="pr")return[sn.filter(a=>a.pr===s),og[s]];if(n==="top")return s==="pop"?[t.slice(0,10),__t(450)]:[e.slice(0,10),__t(451)];if(n==="low")return s==="pop"?[t.slice(-10),__t(452)]:[e.slice(-10),__t(453)];if(n==="size")return[sn.filter(a=>a.pop>=+s&&a.pop<+r),+r>1e9?`${ms(+s)}${__t(454)}`:+s==0?`${__t(455)}${ms(+r)}${__t(456)}`:`${ms(+s)} \u2013 ${ms(+r-1)}${__t(456)}`];if(n==="n50"){let a=0,o=0;for(let c of t)if(a+=c.pop,o++,a>=Zd/2)break;return[t.slice(0,o),`${__t(457)}`]}return[[],""]}function NM(i){let[t,e]=DM(i);t.length&&PM(t,e,i.startsWith("pr:")?.75:.8)}document.querySelectorAll("[data-tab]").forEach(i=>i.onclick=()=>{LM=i.dataset.tab,De("#dbody").scrollTop=0});var pr=De("#rc"),Ph=De("#mcstab");function ha(i){pr.classList.toggle("min",i),De("#rcgrab span").textContent=i?__t(499):__t(500),Je.length&&Os()}function qo(i){Ze.classList.toggle("min",i),Ze.style.transform="",Ze.style.opacity="",Ph.classList.toggle("on",i&&Je.length>0),i&&(Ph.textContent=`\u25B8 ${Je.length} ${Je.length===1?"ficha":"fichas"}`,Ph.style.top=Ze.style.top||"124px")}function cf(i,{onMove:t,onEnd:e,axis:n}){let s=null;i.addEventListener("pointerdown",a=>{a.pointerType==="mouse"||!Vh.matches||a.target.closest("input,button:not(#rcgrab),.seg")||(s={x:a.clientX,y:a.clientY,id:a.pointerId,lock:null})}),addEventListener("pointermove",a=>{if(!s||a.pointerId!==s.id)return;let o=a.clientX-s.x,c=a.clientY-s.y;!s.lock&&Math.hypot(o,c)>10&&(s.lock=Math.abs(o)>Math.abs(c)?"x":"y"),s.lock===n&&t&&t(o,c)});let r=a=>{if(!s||a.pointerId!==s.id)return;let o=a.clientX-s.x,c=a.clientY-s.y,h=s.lock;s=null,e(h===n?o:0,h===n?c:0,h)};addEventListener("pointerup",r,!0),addEventListener("pointercancel",r,!0)}De("#rcgrab").onclick=()=>ha(!pr.classList.contains("min"));innerWidth<=640&&ha(!0);requestAnimationFrame(()=>document.documentElement.classList.remove("boot"));var vg=()=>innerWidth>640;cf(pr,{axis:"y",onEnd:(i,t)=>{if(!vg())if(t>40&&!pr.classList.contains("min")){let e=De("#dp.open #dbody");(!e||e.scrollTop<=0||t>120)&&ha(!0)}else t<-30&&pr.classList.contains("min")&&ha(!1)}});cf(pr,{axis:"x",onEnd:i=>{vg()&&(i>50?ha(!0):i<-30&&pr.classList.contains("min")&&ha(!1))}});cf(Ze,{axis:"x",onMove:i=>{i<0&&(Ze.classList.add("sw"),Ze.style.transform=`translateX(${i}px)`,Ze.style.opacity=Math.max(.2,1+i/300))},onEnd:i=>{Ze.classList.remove("sw"),i<-60?(qo(!0),window.__rodHide&&!Je.length&&window.__rodHide()):(Ze.style.transform="",Ze.style.opacity="")}});Ph.onclick=()=>{qo(!1),Os()};De("#dtoggle").onclick=()=>{let i=De("#dp").classList.toggle("open");De("#rc").classList.toggle("dopen",i),De("#dtoggle").textContent=i?Vh.matches&&innerWidth<=640?__t(501):__t(502):__t(503),window.__rodCard&&window.__rodCard()};var Vh=matchMedia("(max-width:640px), (max-height:500px)");function yg(){let i=De("#leg");Vh.matches?De("#rc").insertBefore(i,De("#dtoggle")):document.body.appendChild(i),Je.length&&Os()}Vh.addEventListener("change",yg);yg();fg();MM();af();Object.assign(fn,ye);for(let i of sn)i.z=.01;requestAnimationFrame(dg);Jm({scene:gs,camera:ji,renderer:Xo,goal:ye,cur:fn,invalidate:Cn,flyTo:(i,t,e,n)=>{Object.assign(ye,{tx:(i-$o)*Ji,ty:(t-Go)*Ji,dist:e,tilt:n}),Cn()},K:Ji,CX:$o,CY:Go,mcs:Ze,q:Fs,list:ui,munis:sn,select:zh,norm:qd,fmt:ms,clamp:Vn,mcsMin:qo});window.__app={scene:gs,renderer:Xo,camera:ji,munis:sn,labs:Nh,goal:ye,cur:fn,select:zh,get mode(){return ef}};window.__ready=!0;})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
