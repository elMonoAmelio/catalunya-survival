(()=>{var p0=0,of=1,m0=2;var vl=1,g0=2,Fa=3,rr=0,ci=1,hs=2,ds=0,Ba=1,lf=2,cf=3,uf=4,_0=5;var Nr=100,x0=101,v0=102,y0=103,S0=104,b0=200,M0=201,w0=202,E0=203,hf=204,df=205,T0=206,A0=207,C0=208,R0=209,I0=210,P0=211,L0=212,D0=213,N0=214,zc=0,Vc=1,Hc=2,wa=3,Gc=4,Wc=5,Xc=6,qc=7,Cu=0,U0=1,O0=2,Zi=0,ff=1,pf=2,mf=3,gf=4,_f=5,xf=6,vf=7;var yf=300,ar=301,Ur=302,Ru=303,Iu=304,yl=306,Yc=1e3,rs=1001,Jc=1002,Fn=1003,F0=1004;var Sl=1005;var Wn=1006,Pu=1007;var or=1008;var Si=1009,Sf=1010,bf=1011,ka=1012,Lu=1013,ji=1014,Ni=1015,Ki=1016,Du=1017,Nu=1018,$a=1020,Mf=35902,wf=35899,Ef=1021,Tf=1022,Ui=1023,os=1026,lr=1027,Uu=1028,Ou=1029,cr=1030,Fu=1031;var Bu=1033,bl=33776,Ml=33777,wl=33778,El=33779,ku=35840,$u=35841,zu=35842,Vu=35843,Hu=36196,Gu=37492,Wu=37496,Xu=37488,qu=37489,Tl=37490,Yu=37491,Ju=37808,Zu=37809,ju=37810,Ku=37811,Qu=37812,th=37813,eh=37814,nh=37815,ih=37816,sh=37817,rh=37818,ah=37819,oh=37820,lh=37821,ch=36492,uh=36494,hh=36495,dh=36283,fh=36284,Al=36285,ph=36286;var Bo=2300,Zc=2301,kc=2302,qd=2303,Yd=2400,Jd=2401,Zd=2402;var B0=3200;var mh=0,k0=1,Bs="",Ei="srgb",ko="srgb-linear",$o="linear",rn="srgb";var $c=7680;var $0=519,z0=512,V0=513,H0=514,gh=515,G0=516,W0=517,_h=518,X0=519,Af=35044;var Cf="300 es",qi=2e3,Ea=2001;function mx(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function gx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function zo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function q0(){let i=zo("canvas");return i.style.display="block",i}var Im={},Ta=null;function Vo(...i){let t="THREE."+i.shift();Ta?Ta("log",t,...i):console.log(t,...i)}function Y0(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function be(...i){i=Y0(i);let t="THREE."+i.shift();if(Ta)Ta("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Ee(...i){i=Y0(i);let t="THREE."+i.shift();if(Ta)Ta("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Ar(...i){let t=i.join(" ");t in Im||(Im[t]=!0,be(...i))}function J0(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Z0={[zc]:Vc,[Hc]:Xc,[Gc]:qc,[wa]:Wc,[Vc]:zc,[Xc]:Hc,[qc]:Gc,[Wc]:wa},ls=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Kn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Pm=1234567,No=Math.PI/180,Aa=180/Math.PI;function as(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Kn[i&255]+Kn[i>>8&255]+Kn[i>>16&255]+Kn[i>>24&255]+"-"+Kn[t&255]+Kn[t>>8&255]+"-"+Kn[t>>16&15|64]+Kn[t>>24&255]+"-"+Kn[e&63|128]+Kn[e>>8&255]+"-"+Kn[e>>16&255]+Kn[e>>24&255]+Kn[n&255]+Kn[n>>8&255]+Kn[n>>16&255]+Kn[n>>24&255]).toLowerCase()}function De(i,t,e){return Math.max(t,Math.min(e,i))}function Rf(i,t){return(i%t+t)%t}function _x(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function xx(i,t,e){return i!==t?(e-i)/(t-i):0}function Uo(i,t,e){return(1-e)*i+e*t}function vx(i,t,e,n){return Uo(i,t,1-Math.exp(-e*n))}function yx(i,t=1){return t-Math.abs(Rf(i,t*2)-t)}function Sx(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function bx(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Mx(i,t){return i+Math.floor(Math.random()*(t-i+1))}function wx(i,t){return i+Math.random()*(t-i)}function Ex(i){return i*(.5-Math.random())}function Tx(i){i!==void 0&&(Pm=i);let t=Pm+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ax(i){return i*No}function Cx(i){return i*Aa}function Rx(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Ix(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Px(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Lx(i,t,e,n,s){let r=Math.cos,a=Math.sin,l=r(e/2),u=a(e/2),h=r((t+n)/2),d=a((t+n)/2),b=r((t-n)/2),g=a((t-n)/2),M=r((n-t)/2),w=a((n-t)/2);switch(s){case"XYX":i.set(l*d,u*b,u*g,l*h);break;case"YZY":i.set(u*g,l*d,u*b,l*h);break;case"ZXZ":i.set(u*b,u*g,l*d,l*h);break;case"XZX":i.set(l*d,u*w,u*M,l*h);break;case"YXY":i.set(u*M,l*d,u*w,l*h);break;case"ZYZ":i.set(u*w,u*M,l*d,l*h);break;default:be("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Xi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ln(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var If={DEG2RAD:No,RAD2DEG:Aa,generateUUID:as,clamp:De,euclideanModulo:Rf,mapLinear:_x,inverseLerp:xx,lerp:Uo,damp:vx,pingpong:yx,smoothstep:Sx,smootherstep:bx,randInt:Mx,randFloat:wx,randFloatSpread:Ex,seededRandom:Tx,degToRad:Ax,radToDeg:Cx,isPowerOfTwo:Rx,ceilPowerOfTwo:Ix,floorPowerOfTwo:Px,setQuaternionFromProperEuler:Lx,normalize:ln,denormalize:Xi},Vt=class i{static{i.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=De(this.x,t.x,e.x),this.y=De(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=De(this.x,t,e),this.y=De(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(De(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(De(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},cs=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,l){let u=n[s+0],h=n[s+1],d=n[s+2],b=n[s+3],g=r[a+0],M=r[a+1],w=r[a+2],N=r[a+3];if(b!==N||u!==g||h!==M||d!==w){let y=u*g+h*M+d*w+b*N;y<0&&(g=-g,M=-M,w=-w,N=-N,y=-y);let m=1-l;if(y<.9995){let $=Math.acos(y),V=Math.sin($);m=Math.sin(m*$)/V,l=Math.sin(l*$)/V,u=u*m+g*l,h=h*m+M*l,d=d*m+w*l,b=b*m+N*l}else{u=u*m+g*l,h=h*m+M*l,d=d*m+w*l,b=b*m+N*l;let $=1/Math.sqrt(u*u+h*h+d*d+b*b);u*=$,h*=$,d*=$,b*=$}}t[e]=u,t[e+1]=h,t[e+2]=d,t[e+3]=b}static multiplyQuaternionsFlat(t,e,n,s,r,a){let l=n[s],u=n[s+1],h=n[s+2],d=n[s+3],b=r[a],g=r[a+1],M=r[a+2],w=r[a+3];return t[e]=l*w+d*b+u*M-h*g,t[e+1]=u*w+d*g+h*b-l*M,t[e+2]=h*w+d*M+l*g-u*b,t[e+3]=d*w-l*b-u*g-h*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,l=Math.cos,u=Math.sin,h=l(n/2),d=l(s/2),b=l(r/2),g=u(n/2),M=u(s/2),w=u(r/2);switch(a){case"XYZ":this._x=g*d*b+h*M*w,this._y=h*M*b-g*d*w,this._z=h*d*w+g*M*b,this._w=h*d*b-g*M*w;break;case"YXZ":this._x=g*d*b+h*M*w,this._y=h*M*b-g*d*w,this._z=h*d*w-g*M*b,this._w=h*d*b+g*M*w;break;case"ZXY":this._x=g*d*b-h*M*w,this._y=h*M*b+g*d*w,this._z=h*d*w+g*M*b,this._w=h*d*b-g*M*w;break;case"ZYX":this._x=g*d*b-h*M*w,this._y=h*M*b+g*d*w,this._z=h*d*w-g*M*b,this._w=h*d*b+g*M*w;break;case"YZX":this._x=g*d*b+h*M*w,this._y=h*M*b+g*d*w,this._z=h*d*w-g*M*b,this._w=h*d*b-g*M*w;break;case"XZY":this._x=g*d*b-h*M*w,this._y=h*M*b-g*d*w,this._z=h*d*w+g*M*b,this._w=h*d*b+g*M*w;break;default:be("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],l=e[5],u=e[9],h=e[2],d=e[6],b=e[10],g=n+l+b;if(g>0){let M=.5/Math.sqrt(g+1);this._w=.25/M,this._x=(d-u)*M,this._y=(r-h)*M,this._z=(a-s)*M}else if(n>l&&n>b){let M=2*Math.sqrt(1+n-l-b);this._w=(d-u)/M,this._x=.25*M,this._y=(s+a)/M,this._z=(r+h)/M}else if(l>b){let M=2*Math.sqrt(1+l-n-b);this._w=(r-h)/M,this._x=(s+a)/M,this._y=.25*M,this._z=(u+d)/M}else{let M=2*Math.sqrt(1+b-n-l);this._w=(a-s)/M,this._x=(r+h)/M,this._y=(u+d)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(De(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,l=e._x,u=e._y,h=e._z,d=e._w;return this._x=n*d+a*l+s*h-r*u,this._y=s*d+a*u+r*l-n*h,this._z=r*d+a*h+n*u-s*l,this._w=a*d-n*l-s*u-r*h,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,l=this.dot(t);l<0&&(n=-n,s=-s,r=-r,a=-a,l=-l);let u=1-e;if(l<.9995){let h=Math.acos(l),d=Math.sin(h);u=Math.sin(u*h)/d,e=Math.sin(e*h)/d,this._x=this._x*u+n*e,this._y=this._y*u+s*e,this._z=this._z*u+r*e,this._w=this._w*u+a*e,this._onChangeCallback()}else this._x=this._x*u+n*e,this._y=this._y*u+s*e,this._z=this._z*u+r*e,this._w=this._w*u+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},j=class i{static{i.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Lm.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Lm.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,l=t.z,u=t.w,h=2*(a*s-l*n),d=2*(l*e-r*s),b=2*(r*n-a*e);return this.x=e+u*h+a*b-l*d,this.y=n+u*d+l*h-r*b,this.z=s+u*b+r*d-a*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=De(this.x,t.x,e.x),this.y=De(this.y,t.y,e.y),this.z=De(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=De(this.x,t,e),this.y=De(this.y,t,e),this.z=De(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(De(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,l=e.y,u=e.z;return this.x=s*u-r*l,this.y=r*a-n*u,this.z=n*l-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Sd.copy(this).projectOnVector(t),this.sub(Sd)}reflect(t){return this.sub(Sd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(De(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Sd=new j,Lm=new cs,Le=class i{static{i.prototype.isMatrix3=!0}constructor(t,e,n,s,r,a,l,u,h){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,l,u,h)}set(t,e,n,s,r,a,l,u,h){let d=this.elements;return d[0]=t,d[1]=s,d[2]=l,d[3]=e,d[4]=r,d[5]=u,d[6]=n,d[7]=a,d[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],l=n[3],u=n[6],h=n[1],d=n[4],b=n[7],g=n[2],M=n[5],w=n[8],N=s[0],y=s[3],m=s[6],$=s[1],V=s[4],D=s[7],T=s[2],k=s[5],q=s[8];return r[0]=a*N+l*$+u*T,r[3]=a*y+l*V+u*k,r[6]=a*m+l*D+u*q,r[1]=h*N+d*$+b*T,r[4]=h*y+d*V+b*k,r[7]=h*m+d*D+b*q,r[2]=g*N+M*$+w*T,r[5]=g*y+M*V+w*k,r[8]=g*m+M*D+w*q,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],l=t[5],u=t[6],h=t[7],d=t[8];return e*a*d-e*l*h-n*r*d+n*l*u+s*r*h-s*a*u}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],l=t[5],u=t[6],h=t[7],d=t[8],b=d*a-l*h,g=l*u-d*r,M=h*r-a*u,w=e*b+n*g+s*M;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);let N=1/w;return t[0]=b*N,t[1]=(s*h-d*n)*N,t[2]=(l*n-s*a)*N,t[3]=g*N,t[4]=(d*e-s*u)*N,t[5]=(s*r-l*e)*N,t[6]=M*N,t[7]=(n*u-h*e)*N,t[8]=(a*e-n*r)*N,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,l){let u=Math.cos(r),h=Math.sin(r);return this.set(n*u,n*h,-n*(u*a+h*l)+a+t,-s*h,s*u,-s*(-h*a+u*l)+l+e,0,0,1),this}scale(t,e){return Ar("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(bd.makeScale(t,e)),this}rotate(t){return Ar("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(bd.makeRotation(-t)),this}translate(t,e){return Ar("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(bd.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},bd=new Le,Dm=new Le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nm=new Le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Dx(){let i={enabled:!0,workingColorSpace:ko,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===rn&&(s.r=Os(s.r),s.g=Os(s.g),s.b=Os(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===rn&&(s.r=Ma(s.r),s.g=Ma(s.g),s.b=Ma(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Bs?$o:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ar("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ar("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ko]:{primaries:t,whitePoint:n,transfer:$o,toXYZ:Dm,fromXYZ:Nm,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ei},outputColorSpaceConfig:{drawingBufferColorSpace:Ei}},[Ei]:{primaries:t,whitePoint:n,transfer:rn,toXYZ:Dm,fromXYZ:Nm,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ei}}}),i}var We=Dx();function Os(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ma(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var oa,jc=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{oa===void 0&&(oa=zo("canvas")),oa.width=t.width,oa.height=t.height;let s=oa.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=oa}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=zo("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Os(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Os(e[n]/255)*255):e[n]=Os(e[n]);return{data:e,width:t.width,height:t.height}}else return be("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Nx=0,Ca=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Nx++}),this.uuid=as(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,l=s.length;a<l;a++)s[a].isDataTexture?r.push(Md(s[a].image)):r.push(Md(s[a]))}else r=Md(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Md(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?jc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(be("Texture: Unable to serialize Texture."),{})}var Ux=0,wd=new j,xi=class i extends ls{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=rs,s=rs,r=Wn,a=or,l=Ui,u=Si,h=i.DEFAULT_ANISOTROPY,d=Bs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ux++}),this.uuid=as(),this.name="",this.source=new Ca(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=l,this.internalFormat=null,this.type=u,this.offset=new Vt(0,0),this.repeat=new Vt(1,1),this.center=new Vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(wd).x}get height(){return this.source.getSize(wd).y}get depth(){return this.source.getSize(wd).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){be(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){be(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==yf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Yc:t.x=t.x-Math.floor(t.x);break;case rs:t.x=t.x<0?0:1;break;case Jc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Yc:t.y=t.y-Math.floor(t.y);break;case rs:t.y=t.y<0?0:1;break;case Jc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};xi.DEFAULT_IMAGE=null;xi.DEFAULT_MAPPING=yf;xi.DEFAULT_ANISOTROPY=1;var an=class i{static{i.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,u=t.elements,h=u[0],d=u[4],b=u[8],g=u[1],M=u[5],w=u[9],N=u[2],y=u[6],m=u[10];if(Math.abs(d-g)<.01&&Math.abs(b-N)<.01&&Math.abs(w-y)<.01){if(Math.abs(d+g)<.1&&Math.abs(b+N)<.1&&Math.abs(w+y)<.1&&Math.abs(h+M+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let V=(h+1)/2,D=(M+1)/2,T=(m+1)/2,k=(d+g)/4,q=(b+N)/4,R=(w+y)/4;return V>D&&V>T?V<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(V),s=k/n,r=q/n):D>T?D<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(D),n=k/s,r=R/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=q/r,s=R/r),this.set(n,s,r,e),this}let $=Math.sqrt((y-w)*(y-w)+(b-N)*(b-N)+(g-d)*(g-d));return Math.abs($)<.001&&($=1),this.x=(y-w)/$,this.y=(b-N)/$,this.z=(g-d)/$,this.w=Math.acos((h+M+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=De(this.x,t.x,e.x),this.y=De(this.y,t.y,e.y),this.z=De(this.z,t.z,e.z),this.w=De(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=De(this.x,t,e),this.y=De(this.y,t,e),this.z=De(this.z,t,e),this.w=De(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(De(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Kc=class extends ls{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new an(0,0,t,e),this.scissorTest=!1,this.viewport=new an(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new xi(s),a=n.count;for(let l=0;l<a;l++)this.textures[l]=r.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Wn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ca(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},vi=class extends Kc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ho=class extends xi{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Qc=class extends xi{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var qe=class i{static{i.prototype.isMatrix4=!0}constructor(t,e,n,s,r,a,l,u,h,d,b,g,M,w,N,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,l,u,h,d,b,g,M,w,N,y)}set(t,e,n,s,r,a,l,u,h,d,b,g,M,w,N,y){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=l,m[13]=u,m[2]=h,m[6]=d,m[10]=b,m[14]=g,m[3]=M,m[7]=w,m[11]=N,m[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/la.setFromMatrixColumn(t,0).length(),r=1/la.setFromMatrixColumn(t,1).length(),a=1/la.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),l=Math.sin(n),u=Math.cos(s),h=Math.sin(s),d=Math.cos(r),b=Math.sin(r);if(t.order==="XYZ"){let g=a*d,M=a*b,w=l*d,N=l*b;e[0]=u*d,e[4]=-u*b,e[8]=h,e[1]=M+w*h,e[5]=g-N*h,e[9]=-l*u,e[2]=N-g*h,e[6]=w+M*h,e[10]=a*u}else if(t.order==="YXZ"){let g=u*d,M=u*b,w=h*d,N=h*b;e[0]=g+N*l,e[4]=w*l-M,e[8]=a*h,e[1]=a*b,e[5]=a*d,e[9]=-l,e[2]=M*l-w,e[6]=N+g*l,e[10]=a*u}else if(t.order==="ZXY"){let g=u*d,M=u*b,w=h*d,N=h*b;e[0]=g-N*l,e[4]=-a*b,e[8]=w+M*l,e[1]=M+w*l,e[5]=a*d,e[9]=N-g*l,e[2]=-a*h,e[6]=l,e[10]=a*u}else if(t.order==="ZYX"){let g=a*d,M=a*b,w=l*d,N=l*b;e[0]=u*d,e[4]=w*h-M,e[8]=g*h+N,e[1]=u*b,e[5]=N*h+g,e[9]=M*h-w,e[2]=-h,e[6]=l*u,e[10]=a*u}else if(t.order==="YZX"){let g=a*u,M=a*h,w=l*u,N=l*h;e[0]=u*d,e[4]=N-g*b,e[8]=w*b+M,e[1]=b,e[5]=a*d,e[9]=-l*d,e[2]=-h*d,e[6]=M*b+w,e[10]=g-N*b}else if(t.order==="XZY"){let g=a*u,M=a*h,w=l*u,N=l*h;e[0]=u*d,e[4]=-b,e[8]=h*d,e[1]=g*b+N,e[5]=a*d,e[9]=M*b-w,e[2]=w*b-M,e[6]=l*d,e[10]=N*b+g}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ox,t,Fx)}lookAt(t,e,n){let s=this.elements;return Mi.subVectors(t,e),Mi.lengthSq()===0&&(Mi.z=1),Mi.normalize(),Ys.crossVectors(n,Mi),Ys.lengthSq()===0&&(Math.abs(n.z)===1?Mi.x+=1e-4:Mi.z+=1e-4,Mi.normalize(),Ys.crossVectors(n,Mi)),Ys.normalize(),dc.crossVectors(Mi,Ys),s[0]=Ys.x,s[4]=dc.x,s[8]=Mi.x,s[1]=Ys.y,s[5]=dc.y,s[9]=Mi.y,s[2]=Ys.z,s[6]=dc.z,s[10]=Mi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],l=n[4],u=n[8],h=n[12],d=n[1],b=n[5],g=n[9],M=n[13],w=n[2],N=n[6],y=n[10],m=n[14],$=n[3],V=n[7],D=n[11],T=n[15],k=s[0],q=s[4],R=s[8],B=s[12],X=s[1],J=s[5],ot=s[9],ht=s[13],Q=s[2],st=s[6],pt=s[10],_t=s[14],At=s[3],xt=s[7],Et=s[11],wt=s[15];return r[0]=a*k+l*X+u*Q+h*At,r[4]=a*q+l*J+u*st+h*xt,r[8]=a*R+l*ot+u*pt+h*Et,r[12]=a*B+l*ht+u*_t+h*wt,r[1]=d*k+b*X+g*Q+M*At,r[5]=d*q+b*J+g*st+M*xt,r[9]=d*R+b*ot+g*pt+M*Et,r[13]=d*B+b*ht+g*_t+M*wt,r[2]=w*k+N*X+y*Q+m*At,r[6]=w*q+N*J+y*st+m*xt,r[10]=w*R+N*ot+y*pt+m*Et,r[14]=w*B+N*ht+y*_t+m*wt,r[3]=$*k+V*X+D*Q+T*At,r[7]=$*q+V*J+D*st+T*xt,r[11]=$*R+V*ot+D*pt+T*Et,r[15]=$*B+V*ht+D*_t+T*wt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],l=t[5],u=t[9],h=t[13],d=t[2],b=t[6],g=t[10],M=t[14],w=t[3],N=t[7],y=t[11],m=t[15],$=u*M-h*g,V=l*M-h*b,D=l*g-u*b,T=a*M-h*d,k=a*g-u*d,q=a*b-l*d;return e*(N*$-y*V+m*D)-n*(w*$-y*T+m*k)+s*(w*V-N*T+m*q)-r*(w*D-N*k+y*q)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],l=t[9],u=t[2],h=t[6],d=t[10];return e*(a*d-l*h)-n*(r*d-l*u)+s*(r*h-a*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],l=t[5],u=t[6],h=t[7],d=t[8],b=t[9],g=t[10],M=t[11],w=t[12],N=t[13],y=t[14],m=t[15],$=e*l-n*a,V=e*u-s*a,D=e*h-r*a,T=n*u-s*l,k=n*h-r*l,q=s*h-r*u,R=d*N-b*w,B=d*y-g*w,X=d*m-M*w,J=b*y-g*N,ot=b*m-M*N,ht=g*m-M*y,Q=$*ht-V*ot+D*J+T*X-k*B+q*R;if(Q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let st=1/Q;return t[0]=(l*ht-u*ot+h*J)*st,t[1]=(s*ot-n*ht-r*J)*st,t[2]=(N*q-y*k+m*T)*st,t[3]=(g*k-b*q-M*T)*st,t[4]=(u*X-a*ht-h*B)*st,t[5]=(e*ht-s*X+r*B)*st,t[6]=(y*D-w*q-m*V)*st,t[7]=(d*q-g*D+M*V)*st,t[8]=(a*ot-l*X+h*R)*st,t[9]=(n*X-e*ot-r*R)*st,t[10]=(w*k-N*D+m*$)*st,t[11]=(b*D-d*k-M*$)*st,t[12]=(l*B-a*J-u*R)*st,t[13]=(e*J-n*B+s*R)*st,t[14]=(N*V-w*T-y*$)*st,t[15]=(d*T-b*V+g*$)*st,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,l=t.y,u=t.z,h=r*a,d=r*l;return this.set(h*a+n,h*l-s*u,h*u+s*l,0,h*l+s*u,d*l+n,d*u-s*a,0,h*u-s*l,d*u+s*a,r*u*u+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,l=e._z,u=e._w,h=r+r,d=a+a,b=l+l,g=r*h,M=r*d,w=r*b,N=a*d,y=a*b,m=l*b,$=u*h,V=u*d,D=u*b,T=n.x,k=n.y,q=n.z;return s[0]=(1-(N+m))*T,s[1]=(M+D)*T,s[2]=(w-V)*T,s[3]=0,s[4]=(M-D)*k,s[5]=(1-(g+m))*k,s[6]=(y+$)*k,s[7]=0,s[8]=(w+V)*q,s[9]=(y-$)*q,s[10]=(1-(g+N))*q,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=la.set(s[0],s[1],s[2]).length(),l=la.set(s[4],s[5],s[6]).length(),u=la.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Vi.copy(this);let h=1/a,d=1/l,b=1/u;return Vi.elements[0]*=h,Vi.elements[1]*=h,Vi.elements[2]*=h,Vi.elements[4]*=d,Vi.elements[5]*=d,Vi.elements[6]*=d,Vi.elements[8]*=b,Vi.elements[9]*=b,Vi.elements[10]*=b,e.setFromRotationMatrix(Vi),n.x=a,n.y=l,n.z=u,this}makePerspective(t,e,n,s,r,a,l=qi,u=!1){let h=this.elements,d=2*r/(e-t),b=2*r/(n-s),g=(e+t)/(e-t),M=(n+s)/(n-s),w,N;if(u)w=r/(a-r),N=a*r/(a-r);else if(l===qi)w=-(a+r)/(a-r),N=-2*a*r/(a-r);else if(l===Ea)w=-a/(a-r),N=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return h[0]=d,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=b,h[9]=M,h[13]=0,h[2]=0,h[6]=0,h[10]=w,h[14]=N,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,n,s,r,a,l=qi,u=!1){let h=this.elements,d=2/(e-t),b=2/(n-s),g=-(e+t)/(e-t),M=-(n+s)/(n-s),w,N;if(u)w=1/(a-r),N=a/(a-r);else if(l===qi)w=-2/(a-r),N=-(a+r)/(a-r);else if(l===Ea)w=-1/(a-r),N=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return h[0]=d,h[4]=0,h[8]=0,h[12]=g,h[1]=0,h[5]=b,h[9]=0,h[13]=M,h[2]=0,h[6]=0,h[10]=w,h[14]=N,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},la=new j,Vi=new qe,Ox=new j(0,0,0),Fx=new j(1,1,1),Ys=new j,dc=new j,Mi=new j,Um=new qe,Om=new cs,Fs=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],l=s[8],u=s[1],h=s[5],d=s[9],b=s[2],g=s[6],M=s[10];switch(e){case"XYZ":this._y=Math.asin(De(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,M),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-De(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(l,M),this._z=Math.atan2(u,h)):(this._y=Math.atan2(-b,r),this._z=0);break;case"ZXY":this._x=Math.asin(De(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-b,M),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(u,r));break;case"ZYX":this._y=Math.asin(-De(b,-1,1)),Math.abs(b)<.9999999?(this._x=Math.atan2(g,M),this._z=Math.atan2(u,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(De(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-d,h),this._y=Math.atan2(-b,r)):(this._x=0,this._y=Math.atan2(l,M));break;case"XZY":this._z=Math.asin(-De(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(l,r)):(this._x=Math.atan2(-d,M),this._y=0);break;default:be("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Um.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Um,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Om.setFromEuler(this),this.setFromQuaternion(Om,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Fs.DEFAULT_ORDER="XYZ";var Ra=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Bx=0,Fm=new j,ca=new cs,Ps=new qe,fc=new j,To=new j,kx=new j,$x=new cs,Bm=new j(1,0,0),km=new j(0,1,0),$m=new j(0,0,1),zm={type:"added"},zx={type:"removed"},ua={type:"childadded",child:null},Ed={type:"childremoved",child:null},Bn=class i extends ls{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bx++}),this.uuid=as(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new j,e=new Fs,n=new cs,s=new j(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new qe},normalMatrix:{value:new Le}}),this.matrix=new qe,this.matrixWorld=new qe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ra,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ca.setFromAxisAngle(t,e),this.quaternion.multiply(ca),this}rotateOnWorldAxis(t,e){return ca.setFromAxisAngle(t,e),this.quaternion.premultiply(ca),this}rotateX(t){return this.rotateOnAxis(Bm,t)}rotateY(t){return this.rotateOnAxis(km,t)}rotateZ(t){return this.rotateOnAxis($m,t)}translateOnAxis(t,e){return Fm.copy(t).applyQuaternion(this.quaternion),this.position.add(Fm.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Bm,t)}translateY(t){return this.translateOnAxis(km,t)}translateZ(t){return this.translateOnAxis($m,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ps.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?fc.copy(t):fc.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),To.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ps.lookAt(To,fc,this.up):Ps.lookAt(fc,To,this.up),this.quaternion.setFromRotationMatrix(Ps),s&&(Ps.extractRotation(s.matrixWorld),ca.setFromRotationMatrix(Ps),this.quaternion.premultiply(ca.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Ee("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(zm),ua.child=t,this.dispatchEvent(ua),ua.child=null):Ee("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(zx),Ed.child=t,this.dispatchEvent(Ed),Ed.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ps.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ps.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ps),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(zm),ua.child=t,this.dispatchEvent(ua),ua.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(To,t,kx),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(To,$x,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,l=r.length;a<l;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(l=>({...l})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(l,u){return l[u.uuid]===void 0&&(l[u.uuid]=u.toJSON(t)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let u=l.shapes;if(Array.isArray(u))for(let h=0,d=u.length;h<d;h++){let b=u[h];r(t.shapes,b)}else r(t.shapes,u)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let u=0,h=this.material.length;u<h;u++)l.push(r(t.materials,this.material[u]));s.material=l}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){let u=this.animations[l];s.animations.push(r(t.animations,u))}}if(e){let l=a(t.geometries),u=a(t.materials),h=a(t.textures),d=a(t.images),b=a(t.shapes),g=a(t.skeletons),M=a(t.animations),w=a(t.nodes);l.length>0&&(n.geometries=l),u.length>0&&(n.materials=u),h.length>0&&(n.textures=h),d.length>0&&(n.images=d),b.length>0&&(n.shapes=b),g.length>0&&(n.skeletons=g),M.length>0&&(n.animations=M),w.length>0&&(n.nodes=w)}return n.object=s,n;function a(l){let u=[];for(let h in l){let d=l[h];delete d.metadata,u.push(d)}return u}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Bn.DEFAULT_UP=new j(0,1,0);Bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Yi=class extends Bn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Vx={type:"move"},Ia=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,l=this._targetRay,u=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){a=!0;for(let N of t.hand.values()){let y=e.getJointPose(N,n),m=this._getHandJoint(h,N);y!==null&&(m.matrix.fromArray(y.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=y.radius),m.visible=y!==null}let d=h.joints["index-finger-tip"],b=h.joints["thumb-tip"],g=d.position.distanceTo(b.position),M=.02,w=.005;h.inputState.pinching&&g>M+w?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&g<=M-w&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else u!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(u.matrix.fromArray(r.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,r.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(r.linearVelocity)):u.hasLinearVelocity=!1,r.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(r.angularVelocity)):u.hasAngularVelocity=!1,u.eventsEnabled&&u.dispatchEvent({type:"gripUpdated",data:t,target:this})));l!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(Vx)))}return l!==null&&(l.visible=s!==null),u!==null&&(u.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Yi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},j0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Js={h:0,s:0,l:0},pc={h:0,s:0,l:0};function Td(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var ye=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ei){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,We.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=We.workingColorSpace){return this.r=t,this.g=e,this.b=n,We.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=We.workingColorSpace){if(t=Rf(t,1),e=De(e,0,1),n=De(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Td(a,r,t+1/3),this.g=Td(a,r,t),this.b=Td(a,r,t-1/3)}return We.colorSpaceToWorking(this,s),this}setStyle(t,e=Ei){function n(r){r!==void 0&&parseFloat(r)<1&&be("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],l=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:be("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);be("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ei){let n=j0[t.toLowerCase()];return n!==void 0?this.setHex(n,e):be("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Os(t.r),this.g=Os(t.g),this.b=Os(t.b),this}copyLinearToSRGB(t){return this.r=Ma(t.r),this.g=Ma(t.g),this.b=Ma(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ei){return We.workingToColorSpace(Qn.copy(this),t),Math.round(De(Qn.r*255,0,255))*65536+Math.round(De(Qn.g*255,0,255))*256+Math.round(De(Qn.b*255,0,255))}getHexString(t=Ei){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=We.workingColorSpace){We.workingToColorSpace(Qn.copy(this),e);let n=Qn.r,s=Qn.g,r=Qn.b,a=Math.max(n,s,r),l=Math.min(n,s,r),u,h,d=(l+a)/2;if(l===a)u=0,h=0;else{let b=a-l;switch(h=d<=.5?b/(a+l):b/(2-a-l),a){case n:u=(s-r)/b+(s<r?6:0);break;case s:u=(r-n)/b+2;break;case r:u=(n-s)/b+4;break}u/=6}return t.h=u,t.s=h,t.l=d,t}getRGB(t,e=We.workingColorSpace){return We.workingToColorSpace(Qn.copy(this),e),t.r=Qn.r,t.g=Qn.g,t.b=Qn.b,t}getStyle(t=Ei){We.workingToColorSpace(Qn.copy(this),t);let e=Qn.r,n=Qn.g,s=Qn.b;return t!==Ei?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Js),this.setHSL(Js.h+t,Js.s+e,Js.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Js),t.getHSL(pc);let n=Uo(Js.h,pc.h,e),s=Uo(Js.s,pc.s,e),r=Uo(Js.l,pc.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Qn=new ye;ye.NAMES=j0;var Go=class extends Bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fs,this.environmentIntensity=1,this.environmentRotation=new Fs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Hi=new j,Ls=new j,Ad=new j,Ds=new j,ha=new j,da=new j,Vm=new j,Cd=new j,Rd=new j,Id=new j,Pd=new an,Ld=new an,Dd=new an,Qs=class i{constructor(t=new j,e=new j,n=new j){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Hi.subVectors(t,e),s.cross(Hi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Hi.subVectors(s,e),Ls.subVectors(n,e),Ad.subVectors(t,e);let a=Hi.dot(Hi),l=Hi.dot(Ls),u=Hi.dot(Ad),h=Ls.dot(Ls),d=Ls.dot(Ad),b=a*h-l*l;if(b===0)return r.set(0,0,0),null;let g=1/b,M=(h*u-l*d)*g,w=(a*d-l*u)*g;return r.set(1-M-w,w,M)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Ds)===null?!1:Ds.x>=0&&Ds.y>=0&&Ds.x+Ds.y<=1}static getInterpolation(t,e,n,s,r,a,l,u){return this.getBarycoord(t,e,n,s,Ds)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(r,Ds.x),u.addScaledVector(a,Ds.y),u.addScaledVector(l,Ds.z),u)}static getInterpolatedAttribute(t,e,n,s,r,a){return Pd.setScalar(0),Ld.setScalar(0),Dd.setScalar(0),Pd.fromBufferAttribute(t,e),Ld.fromBufferAttribute(t,n),Dd.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Pd,r.x),a.addScaledVector(Ld,r.y),a.addScaledVector(Dd,r.z),a}static isFrontFacing(t,e,n,s){return Hi.subVectors(n,e),Ls.subVectors(t,e),Hi.cross(Ls).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Hi.subVectors(this.c,this.b),Ls.subVectors(this.a,this.b),Hi.cross(Ls).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,l;ha.subVectors(s,n),da.subVectors(r,n),Cd.subVectors(t,n);let u=ha.dot(Cd),h=da.dot(Cd);if(u<=0&&h<=0)return e.copy(n);Rd.subVectors(t,s);let d=ha.dot(Rd),b=da.dot(Rd);if(d>=0&&b<=d)return e.copy(s);let g=u*b-d*h;if(g<=0&&u>=0&&d<=0)return a=u/(u-d),e.copy(n).addScaledVector(ha,a);Id.subVectors(t,r);let M=ha.dot(Id),w=da.dot(Id);if(w>=0&&M<=w)return e.copy(r);let N=M*h-u*w;if(N<=0&&h>=0&&w<=0)return l=h/(h-w),e.copy(n).addScaledVector(da,l);let y=d*w-M*b;if(y<=0&&b-d>=0&&M-w>=0)return Vm.subVectors(r,s),l=(b-d)/(b-d+(M-w)),e.copy(s).addScaledVector(Vm,l);let m=1/(y+N+g);return a=N*m,l=g*m,e.copy(n).addScaledVector(ha,a).addScaledVector(da,l)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},li=class{constructor(t=new j(1/0,1/0,1/0),e=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Gi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Gi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Gi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,l=r.count;a<l;a++)t.isMesh===!0?t.getVertexPosition(a,Gi):Gi.fromBufferAttribute(r,a),Gi.applyMatrix4(t.matrixWorld),this.expandByPoint(Gi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),mc.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),mc.copy(n.boundingBox)),mc.applyMatrix4(t.matrixWorld),this.union(mc)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Gi),Gi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ao),gc.subVectors(this.max,Ao),fa.subVectors(t.a,Ao),pa.subVectors(t.b,Ao),ma.subVectors(t.c,Ao),Zs.subVectors(pa,fa),js.subVectors(ma,pa),br.subVectors(fa,ma);let e=[0,-Zs.z,Zs.y,0,-js.z,js.y,0,-br.z,br.y,Zs.z,0,-Zs.x,js.z,0,-js.x,br.z,0,-br.x,-Zs.y,Zs.x,0,-js.y,js.x,0,-br.y,br.x,0];return!Nd(e,fa,pa,ma,gc)||(e=[1,0,0,0,1,0,0,0,1],!Nd(e,fa,pa,ma,gc))?!1:(_c.crossVectors(Zs,js),e=[_c.x,_c.y,_c.z],Nd(e,fa,pa,ma,gc))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Gi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Gi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ns[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ns[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ns[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ns[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ns[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ns[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ns[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ns[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ns),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ns=[new j,new j,new j,new j,new j,new j,new j,new j],Gi=new j,mc=new li,fa=new j,pa=new j,ma=new j,Zs=new j,js=new j,br=new j,Ao=new j,gc=new j,_c=new j,Mr=new j;function Nd(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Mr.fromArray(i,r);let l=s.x*Math.abs(Mr.x)+s.y*Math.abs(Mr.y)+s.z*Math.abs(Mr.z),u=t.dot(Mr),h=e.dot(Mr),d=n.dot(Mr);if(Math.max(-Math.max(u,h,d),Math.min(u,h,d))>l)return!1}return!0}var In=new j,xc=new Vt,Hx=0,un=class extends ls{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Hx++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Af,this.updateRanges=[],this.gpuType=Ni,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)xc.fromBufferAttribute(this,e),xc.applyMatrix3(t),this.setXY(e,xc.x,xc.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)In.fromBufferAttribute(this,e),In.applyMatrix3(t),this.setXYZ(e,In.x,In.y,In.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)In.fromBufferAttribute(this,e),In.applyMatrix4(t),this.setXYZ(e,In.x,In.y,In.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)In.fromBufferAttribute(this,e),In.applyNormalMatrix(t),this.setXYZ(e,In.x,In.y,In.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)In.fromBufferAttribute(this,e),In.transformDirection(t),this.setXYZ(e,In.x,In.y,In.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Xi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ln(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Xi(e,this.array)),e}setX(t,e){return this.normalized&&(e=ln(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Xi(e,this.array)),e}setY(t,e){return this.normalized&&(e=ln(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Xi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ln(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Xi(e,this.array)),e}setW(t,e){return this.normalized&&(e=ln(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ln(e,this.array),n=ln(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ln(e,this.array),n=ln(n,this.array),s=ln(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ln(e,this.array),n=ln(n,this.array),s=ln(s,this.array),r=ln(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Wo=class extends un{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Xo=class extends un{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var bn=class extends un{constructor(t,e,n){super(new Float32Array(t),e,n)}},Gx=new li,Co=new j,Ud=new j,yi=class{constructor(t=new j,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Gx.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Co.subVectors(t,this.center);let e=Co.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Co,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ud.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Co.copy(t.center).add(Ud)),this.expandByPoint(Co.copy(t.center).sub(Ud))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Wx=0,Di=new qe,Od=new Bn,ga=new j,wi=new li,Ro=new li,On=new j,Mn=class i extends ls{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wx++}),this.uuid=as(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(mx(t)?Xo:Wo)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Le().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Di.makeRotationFromQuaternion(t),this.applyMatrix4(Di),this}rotateX(t){return Di.makeRotationX(t),this.applyMatrix4(Di),this}rotateY(t){return Di.makeRotationY(t),this.applyMatrix4(Di),this}rotateZ(t){return Di.makeRotationZ(t),this.applyMatrix4(Di),this}translate(t,e,n){return Di.makeTranslation(t,e,n),this.applyMatrix4(Di),this}scale(t,e,n){return Di.makeScale(t,e,n),this.applyMatrix4(Di),this}lookAt(t){return Od.lookAt(t),Od.updateMatrix(),this.applyMatrix4(Od.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ga).negate(),this.translate(ga.x,ga.y,ga.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new bn(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&be("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new li);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ee("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];wi.setFromBufferAttribute(r),this.morphTargetsRelative?(On.addVectors(this.boundingBox.min,wi.min),this.boundingBox.expandByPoint(On),On.addVectors(this.boundingBox.max,wi.max),this.boundingBox.expandByPoint(On)):(this.boundingBox.expandByPoint(wi.min),this.boundingBox.expandByPoint(wi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ee('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ee("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(t){let n=this.boundingSphere.center;if(wi.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let l=e[r];Ro.setFromBufferAttribute(l),this.morphTargetsRelative?(On.addVectors(wi.min,Ro.min),wi.expandByPoint(On),On.addVectors(wi.max,Ro.max),wi.expandByPoint(On)):(wi.expandByPoint(Ro.min),wi.expandByPoint(Ro.max))}wi.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)On.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(On));if(e)for(let r=0,a=e.length;r<a;r++){let l=e[r],u=this.morphTargetsRelative;for(let h=0,d=l.count;h<d;h++)On.fromBufferAttribute(l,h),u&&(ga.fromBufferAttribute(t,h),On.add(ga)),s=Math.max(s,n.distanceToSquared(On))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ee('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Ee("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new un(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let l=[],u=[];for(let R=0;R<n.count;R++)l[R]=new j,u[R]=new j;let h=new j,d=new j,b=new j,g=new Vt,M=new Vt,w=new Vt,N=new j,y=new j;function m(R,B,X){h.fromBufferAttribute(n,R),d.fromBufferAttribute(n,B),b.fromBufferAttribute(n,X),g.fromBufferAttribute(r,R),M.fromBufferAttribute(r,B),w.fromBufferAttribute(r,X),d.sub(h),b.sub(h),M.sub(g),w.sub(g);let J=1/(M.x*w.y-w.x*M.y);isFinite(J)&&(N.copy(d).multiplyScalar(w.y).addScaledVector(b,-M.y).multiplyScalar(J),y.copy(b).multiplyScalar(M.x).addScaledVector(d,-w.x).multiplyScalar(J),l[R].add(N),l[B].add(N),l[X].add(N),u[R].add(y),u[B].add(y),u[X].add(y))}let $=this.groups;$.length===0&&($=[{start:0,count:t.count}]);for(let R=0,B=$.length;R<B;++R){let X=$[R],J=X.start,ot=X.count;for(let ht=J,Q=J+ot;ht<Q;ht+=3)m(t.getX(ht+0),t.getX(ht+1),t.getX(ht+2))}let V=new j,D=new j,T=new j,k=new j;function q(R){T.fromBufferAttribute(s,R),k.copy(T);let B=l[R];V.copy(B),V.sub(T.multiplyScalar(T.dot(B))).normalize(),D.crossVectors(k,B);let J=D.dot(u[R])<0?-1:1;a.setXYZW(R,V.x,V.y,V.z,J)}for(let R=0,B=$.length;R<B;++R){let X=$[R],J=X.start,ot=X.count;for(let ht=J,Q=J+ot;ht<Q;ht+=3)q(t.getX(ht+0)),q(t.getX(ht+1)),q(t.getX(ht+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new un(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let g=0,M=n.count;g<M;g++)n.setXYZ(g,0,0,0);let s=new j,r=new j,a=new j,l=new j,u=new j,h=new j,d=new j,b=new j;if(t)for(let g=0,M=t.count;g<M;g+=3){let w=t.getX(g+0),N=t.getX(g+1),y=t.getX(g+2);s.fromBufferAttribute(e,w),r.fromBufferAttribute(e,N),a.fromBufferAttribute(e,y),d.subVectors(a,r),b.subVectors(s,r),d.cross(b),l.fromBufferAttribute(n,w),u.fromBufferAttribute(n,N),h.fromBufferAttribute(n,y),l.add(d),u.add(d),h.add(d),n.setXYZ(w,l.x,l.y,l.z),n.setXYZ(N,u.x,u.y,u.z),n.setXYZ(y,h.x,h.y,h.z)}else for(let g=0,M=e.count;g<M;g+=3)s.fromBufferAttribute(e,g+0),r.fromBufferAttribute(e,g+1),a.fromBufferAttribute(e,g+2),d.subVectors(a,r),b.subVectors(s,r),d.cross(b),n.setXYZ(g+0,d.x,d.y,d.z),n.setXYZ(g+1,d.x,d.y,d.z),n.setXYZ(g+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)On.fromBufferAttribute(t,e),On.normalize(),t.setXYZ(e,On.x,On.y,On.z)}toNonIndexed(){function t(l,u){let h=l.array,d=l.itemSize,b=l.normalized,g=new h.constructor(u.length*d),M=0,w=0;for(let N=0,y=u.length;N<y;N++){l.isInterleavedBufferAttribute?M=u[N]*l.data.stride+l.offset:M=u[N]*d;for(let m=0;m<d;m++)g[w++]=h[M++]}return new un(g,d,b)}if(this.index===null)return be("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let l in s){let u=s[l],h=t(u,n);e.setAttribute(l,h)}let r=this.morphAttributes;for(let l in r){let u=[],h=r[l];for(let d=0,b=h.length;d<b;d++){let g=h[d],M=t(g,n);u.push(M)}e.morphAttributes[l]=u}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let l=0,u=a.length;l<u;l++){let h=a[l];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let u=this.parameters;for(let h in u)u[h]!==void 0&&(t[h]=u[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let u in n){let h=n[u];t.data.attributes[u]=h.toJSON(t.data)}let s={},r=!1;for(let u in this.morphAttributes){let h=this.morphAttributes[u],d=[];for(let b=0,g=h.length;b<g;b++){let M=h[b];d.push(M.toJSON(t.data))}d.length>0&&(s[u]=d,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let l=this.boundingSphere;return l!==null&&(t.data.boundingSphere=l.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let h in s){let d=s[h];this.setAttribute(h,d.clone(e))}let r=t.morphAttributes;for(let h in r){let d=[],b=r[h];for(let g=0,M=b.length;g<M;g++)d.push(b[g].clone(e));this.morphAttributes[h]=d}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let h=0,d=a.length;h<d;h++){let b=a[h];this.addGroup(b.start,b.count,b.materialIndex)}let l=t.boundingBox;l!==null&&(this.boundingBox=l.clone());let u=t.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},tu=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Af,this.updateRanges=[],this.version=0,this.uuid=as()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=as()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=as()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},oi=new j,Ji=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)oi.fromBufferAttribute(this,e),oi.applyMatrix4(t),this.setXYZ(e,oi.x,oi.y,oi.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)oi.fromBufferAttribute(this,e),oi.applyNormalMatrix(t),this.setXYZ(e,oi.x,oi.y,oi.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)oi.fromBufferAttribute(this,e),oi.transformDirection(t),this.setXYZ(e,oi.x,oi.y,oi.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Xi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ln(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ln(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ln(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ln(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ln(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Xi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Xi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Xi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Xi(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ln(e,this.array),n=ln(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ln(e,this.array),n=ln(n,this.array),s=ln(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ln(e,this.array),n=ln(n,this.array),s=ln(s,this.array),r=ln(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Vo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new un(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Vo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Fd=new j,Xx=new j,qx=new Le,Wi=class{constructor(t=new j(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Fd.subVectors(n,e).cross(Xx.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Fd),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||qx.getNormalMatrix(t),s=this.coplanarPoint(Fd).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Yx=0,us=class extends ls{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yx++}),this.uuid=as(),this.name="",this.type="Material",this.blending=Ba,this.side=rr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hf,this.blendDst=df,this.blendEquation=Nr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ye(0,0,0),this.blendAlpha=0,this.depthFunc=wa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$c,this.stencilZFail=$c,this.stencilZPass=$c,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){be(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){be(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let l in r){let u=r[l];delete u.metadata,a.push(u)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ye().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Wi().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Vt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Vt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Us=new j,Bd=new j,vc=new j,yc=new j,Cr=class{constructor(t=new j,e=new j(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Us)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Us.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Us.copy(this.origin).addScaledVector(this.direction,e),Us.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Bd.copy(t).add(e).multiplyScalar(.5),vc.copy(e).sub(t).normalize(),yc.copy(this.origin).sub(Bd);let r=t.distanceTo(e)*.5,a=-this.direction.dot(vc),l=yc.dot(this.direction),u=-yc.dot(vc),h=yc.lengthSq(),d=Math.abs(1-a*a),b,g,M,w;if(d>0)if(b=a*u-l,g=a*l-u,w=r*d,b>=0)if(g>=-w)if(g<=w){let N=1/d;b*=N,g*=N,M=b*(b+a*g+2*l)+g*(a*b+g+2*u)+h}else g=r,b=Math.max(0,-(a*g+l)),M=-b*b+g*(g+2*u)+h;else g=-r,b=Math.max(0,-(a*g+l)),M=-b*b+g*(g+2*u)+h;else g<=-w?(b=Math.max(0,-(-a*r+l)),g=b>0?-r:Math.min(Math.max(-r,-u),r),M=-b*b+g*(g+2*u)+h):g<=w?(b=0,g=Math.min(Math.max(-r,-u),r),M=g*(g+2*u)+h):(b=Math.max(0,-(a*r+l)),g=b>0?r:Math.min(Math.max(-r,-u),r),M=-b*b+g*(g+2*u)+h);else g=a>0?-r:r,b=Math.max(0,-(a*g+l)),M=-b*b+g*(g+2*u)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,b),s&&s.copy(Bd).addScaledVector(vc,g),M}intersectSphere(t,e){if(t.radius<0)return null;Us.subVectors(t.center,this.origin);let n=Us.dot(this.direction),s=Us.dot(Us)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),l=n-a,u=n+a;return u<0?null:l<0?this.at(u,e):this.at(l,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,l,u,h=1/this.direction.x,d=1/this.direction.y,b=1/this.direction.z,g=this.origin;return h>=0?(n=(t.min.x-g.x)*h,s=(t.max.x-g.x)*h):(n=(t.max.x-g.x)*h,s=(t.min.x-g.x)*h),d>=0?(r=(t.min.y-g.y)*d,a=(t.max.y-g.y)*d):(r=(t.max.y-g.y)*d,a=(t.min.y-g.y)*d),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),b>=0?(l=(t.min.z-g.z)*b,u=(t.max.z-g.z)*b):(l=(t.max.z-g.z)*b,u=(t.min.z-g.z)*b),n>u||l>s)||((l>n||n!==n)&&(n=l),(u<s||s!==s)&&(s=u),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Us)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,l=this.direction,u=l.x,h=l.y,d=l.z,b=t.x-a.x,g=t.y-a.y,M=t.z-a.z,w=e.x-a.x,N=e.y-a.y,y=e.z-a.z,m=n.x-a.x,$=n.y-a.y,V=n.z-a.z,D=Math.abs(u),T=Math.abs(h),k=Math.abs(d),q,R,B,X,J,ot,ht,Q,st,pt,_t,At;if(D>=T&&D>=k?(B=u,ot=b,st=w,At=m,u>=0?(q=h,R=d,X=g,J=M,ht=N,Q=y,pt=$,_t=V):(q=d,R=h,X=M,J=g,ht=y,Q=N,pt=V,_t=$)):T>=k?(B=h,ot=g,st=N,At=$,h>=0?(q=d,R=u,X=M,J=b,ht=y,Q=w,pt=V,_t=m):(q=u,R=d,X=b,J=M,ht=w,Q=y,pt=m,_t=V)):(B=d,ot=M,st=y,At=V,d>=0?(q=u,R=h,X=b,J=g,ht=w,Q=N,pt=m,_t=$):(q=h,R=u,X=g,J=b,ht=N,Q=w,pt=$,_t=m)),B===0)return null;let xt=q/B,Et=R/B,wt=1/B,$t=X-xt*ot,ne=J-Et*ot,Ye=ht-xt*st,Ne=Q-Et*st,He=pt-xt*At,yt=_t-Et*At,St=He*Ne-yt*Ye,Ut=$t*yt-ne*He,ue=Ye*ne-Ne*$t;if(s){if(St<0||Ut<0||ue<0)return null}else if((St<0||Ut<0||ue<0)&&(St>0||Ut>0||ue>0))return null;let jt=St+Ut+ue;if(jt===0)return null;let ge=wt*(St*ot+Ut*st+ue*At);return(jt>0?ge<0:ge>0)?null:this.at(ge/jt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Rr=class extends us{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fs,this.combine=Cu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Hm=new qe,wr=new Cr,Sc=new yi,Gm=new j,bc=new j,Mc=new j,wc=new j,kd=new j,Ec=new j,Wm=new j,Tc=new j,kn=class extends Bn{constructor(t=new Mn,e=new Rr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let l=this.morphTargetInfluences;if(r&&l){Ec.set(0,0,0);for(let u=0,h=r.length;u<h;u++){let d=l[u],b=r[u];d!==0&&(kd.fromBufferAttribute(b,t),a?Ec.addScaledVector(kd,d):Ec.addScaledVector(kd.sub(e),d))}e.add(Ec)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Sc.copy(n.boundingSphere),Sc.applyMatrix4(r),wr.copy(t.ray).recast(t.near),!(Sc.containsPoint(wr.origin)===!1&&(wr.intersectSphere(Sc,Gm)===null||wr.origin.distanceToSquared(Gm)>(t.far-t.near)**2))&&(Hm.copy(r).invert(),wr.copy(t.ray).applyMatrix4(Hm),!(n.boundingBox!==null&&wr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,wr)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,l=r.index,u=r.attributes.position,h=r.attributes.uv,d=r.attributes.uv1,b=r.attributes.normal,g=r.groups,M=r.drawRange;if(l!==null)if(Array.isArray(a))for(let w=0,N=g.length;w<N;w++){let y=g[w],m=a[y.materialIndex],$=Math.max(y.start,M.start),V=Math.min(l.count,Math.min(y.start+y.count,M.start+M.count));for(let D=$,T=V;D<T;D+=3){let k=l.getX(D),q=l.getX(D+1),R=l.getX(D+2);s=Ac(this,m,t,n,h,d,b,k,q,R),s&&(s.faceIndex=Math.floor(D/3),s.face.materialIndex=y.materialIndex,e.push(s))}}else{let w=Math.max(0,M.start),N=Math.min(l.count,M.start+M.count);for(let y=w,m=N;y<m;y+=3){let $=l.getX(y),V=l.getX(y+1),D=l.getX(y+2);s=Ac(this,a,t,n,h,d,b,$,V,D),s&&(s.faceIndex=Math.floor(y/3),e.push(s))}}else if(u!==void 0)if(Array.isArray(a))for(let w=0,N=g.length;w<N;w++){let y=g[w],m=a[y.materialIndex],$=Math.max(y.start,M.start),V=Math.min(u.count,Math.min(y.start+y.count,M.start+M.count));for(let D=$,T=V;D<T;D+=3){let k=D,q=D+1,R=D+2;s=Ac(this,m,t,n,h,d,b,k,q,R),s&&(s.faceIndex=Math.floor(D/3),s.face.materialIndex=y.materialIndex,e.push(s))}}else{let w=Math.max(0,M.start),N=Math.min(u.count,M.start+M.count);for(let y=w,m=N;y<m;y+=3){let $=y,V=y+1,D=y+2;s=Ac(this,a,t,n,h,d,b,$,V,D),s&&(s.faceIndex=Math.floor(y/3),e.push(s))}}}};function Jx(i,t,e,n,s,r,a,l){let u;if(t.side===ci?u=n.intersectTriangle(a,r,s,!0,l):u=n.intersectTriangle(s,r,a,t.side===rr,l),u===null)return null;Tc.copy(l),Tc.applyMatrix4(i.matrixWorld);let h=e.ray.origin.distanceTo(Tc);return h<e.near||h>e.far?null:{distance:h,point:Tc.clone(),object:i}}function Ac(i,t,e,n,s,r,a,l,u,h){i.getVertexPosition(l,bc),i.getVertexPosition(u,Mc),i.getVertexPosition(h,wc);let d=Jx(i,t,e,n,bc,Mc,wc,Wm);if(d){let b=new j;Qs.getBarycoord(Wm,bc,Mc,wc,b),s&&(d.uv=Qs.getInterpolatedAttribute(s,l,u,h,b,new Vt)),r&&(d.uv1=Qs.getInterpolatedAttribute(r,l,u,h,b,new Vt)),a&&(d.normal=Qs.getInterpolatedAttribute(a,l,u,h,b,new j),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));let g={a:l,b:u,c:h,normal:new j,materialIndex:0};Qs.getNormal(bc,Mc,wc,g.normal),d.face=g,d.barycoord=b}return d}var qo=class extends xi{constructor(t=null,e=1,n=1,s,r,a,l,u,h=Fn,d=Fn,b,g){super(null,a,l,u,h,d,s,r,b,g),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Yo=class extends un{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},_a=new qe,Xm=new qe,Cc=[],qm=new li,Zx=new qe,Io=new kn,Po=new yi,Jo=class extends kn{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Yo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Zx)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new li),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,_a),qm.copy(t.boundingBox).applyMatrix4(_a),this.boundingBox.union(qm)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new yi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,_a),Po.copy(t.boundingSphere).applyMatrix4(_a),this.boundingSphere.union(Po)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let l=0;l<n.length;l++)n[l]=s[a+l]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Io.geometry=this.geometry,Io.material=this.material,Io.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Po.copy(this.boundingSphere),Po.applyMatrix4(n),t.ray.intersectsSphere(Po)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,_a),Xm.multiplyMatrices(n,_a),Io.matrixWorld=Xm,Io.raycast(t,Cc);for(let a=0,l=Cc.length;a<l;a++){let u=Cc[a];u.instanceId=r,u.object=this,e.push(u)}Cc.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Yo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new qo(new Float32Array(s*this.count),s,this.count,Uu,Ni));let r=this.morphTexture.source.data.data,a=0;for(let h=0;h<n.length;h++)a+=n[h];let l=this.geometry.morphTargetsRelative?1:1-a,u=s*t;return r[u]=l,r.set(n,u+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Er=new yi,jx=new Vt(.5,.5),Rc=new j,Pa=class{constructor(t=new Wi,e=new Wi,n=new Wi,s=new Wi,r=new Wi,a=new Wi){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let l=this.planes;return l[0].copy(t),l[1].copy(e),l[2].copy(n),l[3].copy(s),l[4].copy(r),l[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=qi,n=!1){let s=this.planes,r=t.elements,a=r[0],l=r[1],u=r[2],h=r[3],d=r[4],b=r[5],g=r[6],M=r[7],w=r[8],N=r[9],y=r[10],m=r[11],$=r[12],V=r[13],D=r[14],T=r[15];if(s[0].setComponents(h-a,M-d,m-w,T-$).normalize(),s[1].setComponents(h+a,M+d,m+w,T+$).normalize(),s[2].setComponents(h+l,M+b,m+N,T+V).normalize(),s[3].setComponents(h-l,M-b,m-N,T-V).normalize(),n)s[4].setComponents(u,g,y,D).normalize(),s[5].setComponents(h-u,M-g,m-y,T-D).normalize();else if(s[4].setComponents(h-u,M-g,m-y,T-D).normalize(),e===qi)s[5].setComponents(h+u,M+g,m+y,T+D).normalize();else if(e===Ea)s[5].setComponents(u,g,y,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Er.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Er.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Er)}intersectsSprite(t){Er.center.set(0,0,0);let e=jx.distanceTo(t.center);return Er.radius=.7071067811865476+e,Er.applyMatrix4(t.matrixWorld),this.intersectsSphere(Er)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Rc.x=s.normal.x>0?t.max.x:t.min.x,Rc.y=s.normal.y>0?t.max.y:t.min.y,Rc.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Rc)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ir=class extends us{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},eu=new j,nu=new j,Ym=new qe,Lo=new Cr,Ic=new yi,$d=new j,Jm=new j,iu=class extends Bn{constructor(t=new Mn,e=new Ir){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)eu.fromBufferAttribute(e,s-1),nu.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=eu.distanceTo(nu);t.setAttribute("lineDistance",new bn(n,1))}else be("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ic.copy(n.boundingSphere),Ic.applyMatrix4(s),Ic.radius+=r,t.ray.intersectsSphere(Ic)===!1)return;Ym.copy(s).invert(),Lo.copy(t.ray).applyMatrix4(Ym);let l=r/((this.scale.x+this.scale.y+this.scale.z)/3),u=l*l,h=this.isLineSegments?2:1,d=n.index,g=n.attributes.position;if(d!==null){let M=Math.max(0,a.start),w=Math.min(d.count,a.start+a.count);for(let N=M,y=w-1;N<y;N+=h){let m=d.getX(N),$=d.getX(N+1),V=Pc(this,t,Lo,u,m,$,N);V&&e.push(V)}if(this.isLineLoop){let N=d.getX(w-1),y=d.getX(M),m=Pc(this,t,Lo,u,N,y,w-1);m&&e.push(m)}}else{let M=Math.max(0,a.start),w=Math.min(g.count,a.start+a.count);for(let N=M,y=w-1;N<y;N+=h){let m=Pc(this,t,Lo,u,N,N+1,N);m&&e.push(m)}if(this.isLineLoop){let N=Pc(this,t,Lo,u,w-1,M,w-1);N&&e.push(N)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}};function Pc(i,t,e,n,s,r,a){let l=i.geometry.attributes.position;if(eu.fromBufferAttribute(l,s),nu.fromBufferAttribute(l,r),e.distanceSqToSegment(eu,nu,$d,Jm)>n)return;$d.applyMatrix4(i.matrixWorld);let h=t.ray.origin.distanceTo($d);if(!(h<t.near||h>t.far))return{distance:h,point:Jm.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Zo=class extends iu{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},su=class extends us{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Zm=new qe,jd=new Cr,Lc=new yi,Dc=new j,Pr=class extends Bn{constructor(t=new Mn,e=new su){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Lc.copy(n.boundingSphere),Lc.applyMatrix4(s),Lc.radius+=r,t.ray.intersectsSphere(Lc)===!1)return;Zm.copy(s).invert(),jd.copy(t.ray).applyMatrix4(Zm);let l=r/((this.scale.x+this.scale.y+this.scale.z)/3),u=l*l,h=n.index,b=n.attributes.position;if(h!==null){let g=Math.max(0,a.start),M=Math.min(h.count,a.start+a.count);for(let w=g,N=M;w<N;w++){let y=h.getX(w);Dc.fromBufferAttribute(b,y),jm(Dc,y,u,s,t,e,this)}}else{let g=Math.max(0,a.start),M=Math.min(b.count,a.start+a.count);for(let w=g,N=M;w<N;w++)Dc.fromBufferAttribute(b,w),jm(Dc,w,u,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}};function jm(i,t,e,n,s,r,a){let l=jd.distanceSqToPoint(i);if(l<e){let u=new j;jd.closestPointToPoint(i,u),u.applyMatrix4(n);let h=s.ray.origin.distanceTo(u);if(h<s.near||h>s.far)return;r.push({distance:h,distanceToRay:Math.sqrt(l),point:u,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var jo=class extends xi{constructor(t=[],e=ar,n,s,r,a,l,u,h,d){super(t,e,n,s,r,a,l,u,h,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var tr=class extends xi{constructor(t,e,n=ji,s,r,a,l=Fn,u=Fn,h,d=os,b=1){if(d!==os&&d!==lr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let g={width:t,height:e,depth:b};super(g,s,r,a,l,u,d,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ca(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},ru=class extends tr{constructor(t,e=ji,n=ar,s,r,a=Fn,l=Fn,u,h=os){let d={width:t,height:t,depth:1},b=[d,d,d,d,d,d];super(t,t,e,n,s,r,a,l,u,h),this.image=b,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Ko=class extends xi{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},La=class i extends Mn{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let l=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let u=[],h=[],d=[],b=[],g=0,M=0;w("z","y","x",-1,-1,n,e,t,a,r,0),w("z","y","x",1,-1,n,e,-t,a,r,1),w("x","z","y",1,1,t,n,e,s,a,2),w("x","z","y",1,-1,t,n,-e,s,a,3),w("x","y","z",1,-1,t,e,n,s,r,4),w("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(u),this.setAttribute("position",new bn(h,3)),this.setAttribute("normal",new bn(d,3)),this.setAttribute("uv",new bn(b,2));function w(N,y,m,$,V,D,T,k,q,R,B){let X=D/q,J=T/R,ot=D/2,ht=T/2,Q=k/2,st=q+1,pt=R+1,_t=0,At=0,xt=new j;for(let Et=0;Et<pt;Et++){let wt=Et*J-ht;for(let $t=0;$t<st;$t++){let ne=$t*X-ot;xt[N]=ne*$,xt[y]=wt*V,xt[m]=Q,h.push(xt.x,xt.y,xt.z),xt[N]=0,xt[y]=0,xt[m]=k>0?1:-1,d.push(xt.x,xt.y,xt.z),b.push($t/q),b.push(1-Et/R),_t+=1}}for(let Et=0;Et<R;Et++)for(let wt=0;wt<q;wt++){let $t=g+wt+st*Et,ne=g+wt+st*(Et+1),Ye=g+(wt+1)+st*(Et+1),Ne=g+(wt+1)+st*Et;u.push($t,ne,Ne),u.push(ne,Ye,Ne),At+=6}l.addGroup(M,At,B),M+=At,g+=_t}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Qo=class i extends Mn{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,l=0,u=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:l,thetaLength:u};let h=this;s=Math.floor(s),r=Math.floor(r);let d=[],b=[],g=[],M=[],w=0,N=[],y=n/2,m=0;$(),a===!1&&(t>0&&V(!0),e>0&&V(!1)),this.setIndex(d),this.setAttribute("position",new bn(b,3)),this.setAttribute("normal",new bn(g,3)),this.setAttribute("uv",new bn(M,2));function $(){let D=new j,T=new j,k=0,q=(e-t)/n;for(let R=0;R<=r;R++){let B=[],X=R/r,J=X*(e-t)+t;for(let ot=0;ot<=s;ot++){let ht=ot/s,Q=ht*u+l,st=Math.sin(Q),pt=Math.cos(Q);T.x=J*st,T.y=-X*n+y,T.z=J*pt,b.push(T.x,T.y,T.z),D.set(st,q,pt).normalize(),g.push(D.x,D.y,D.z),M.push(ht,1-X),B.push(w++)}N.push(B)}for(let R=0;R<s;R++)for(let B=0;B<r;B++){let X=N[B][R],J=N[B+1][R],ot=N[B+1][R+1],ht=N[B][R+1];(t>0||B!==0)&&(d.push(X,J,ht),k+=3),(e>0||B!==r-1)&&(d.push(J,ot,ht),k+=3)}h.addGroup(m,k,0),m+=k}function V(D){let T=w,k=new Vt,q=new j,R=0,B=D===!0?t:e,X=D===!0?1:-1;for(let ot=1;ot<=s;ot++)b.push(0,y*X,0),g.push(0,X,0),M.push(.5,.5),w++;let J=w;for(let ot=0;ot<=s;ot++){let Q=ot/s*u+l,st=Math.cos(Q),pt=Math.sin(Q);q.x=B*pt,q.y=y*X,q.z=B*st,b.push(q.x,q.y,q.z),g.push(0,X,0),k.x=st*.5+.5,k.y=pt*.5*X+.5,M.push(k.x,k.y),w++}for(let ot=0;ot<s;ot++){let ht=T+ot,Q=J+ot;D===!0?d.push(Q,Q+1,ht):d.push(Q+1,Q,ht),R+=3}h.addGroup(m,R,D===!0?1:2),m+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Ti=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){be("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let l=0,u=r-1,h;for(;l<=u;)if(s=Math.floor(l+(u-l)/2),h=n[s]-a,h<0)l=s+1;else if(h>0)u=s-1;else{u=s;break}if(s=u,n[s]===a)return s/(r-1);let d=n[s],g=n[s+1]-d,M=(a-d)/g;return(s+M)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),l=this.getPoint(r),u=e||(a.isVector2?new Vt:new j);return u.copy(l).sub(a).normalize(),u}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new j,s=[],r=[],a=[],l=new j,u=new qe;for(let M=0;M<=t;M++){let w=M/t;s[M]=this.getTangentAt(w,new j)}r[0]=new j,a[0]=new j;let h=Number.MAX_VALUE,d=Math.abs(s[0].x),b=Math.abs(s[0].y),g=Math.abs(s[0].z);d<=h&&(h=d,n.set(1,0,0)),b<=h&&(h=b,n.set(0,1,0)),g<=h&&n.set(0,0,1),l.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],l),a[0].crossVectors(s[0],r[0]);for(let M=1;M<=t;M++){if(r[M]=r[M-1].clone(),a[M]=a[M-1].clone(),l.crossVectors(s[M-1],s[M]),l.length()>Number.EPSILON){l.normalize();let w=Math.acos(De(s[M-1].dot(s[M]),-1,1));r[M].applyMatrix4(u.makeRotationAxis(l,w))}a[M].crossVectors(s[M],r[M])}if(e===!0){let M=Math.acos(De(r[0].dot(r[t]),-1,1));M/=t,s[0].dot(l.crossVectors(r[0],r[t]))>0&&(M=-M);for(let w=1;w<=t;w++)r[w].applyMatrix4(u.makeRotationAxis(s[w],M*w)),a[w].crossVectors(s[w],r[w])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Da=class extends Ti{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,l=!1,u=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=l,this.aRotation=u}getPoint(t,e=new Vt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let l=this.aStartAngle+t*r,u=this.aX+this.xRadius*Math.cos(l),h=this.aY+this.yRadius*Math.sin(l);if(this.aRotation!==0){let d=Math.cos(this.aRotation),b=Math.sin(this.aRotation),g=u-this.aX,M=h-this.aY;u=g*d-M*b+this.aX,h=g*b+M*d+this.aY}return n.set(u,h)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},au=class extends Da{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Pf(){let i=0,t=0,e=0,n=0;function s(r,a,l,u){i=r,t=l,e=-3*r+3*a-2*l-u,n=2*r-2*a+l+u}return{initCatmullRom:function(r,a,l,u,h){s(a,l,h*(l-r),h*(u-a))},initNonuniformCatmullRom:function(r,a,l,u,h,d,b){let g=(a-r)/h-(l-r)/(h+d)+(l-a)/d,M=(l-a)/d-(u-a)/(d+b)+(u-l)/b;g*=d,M*=d,s(a,l,g,M)},calc:function(r){let a=r*r,l=a*r;return i+t*r+e*a+n*l}}}var Km=new j,Qm=new j,zd=new Pf,Vd=new Pf,Hd=new Pf,ou=class extends Ti{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new j){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,l=Math.floor(a),u=a-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/r)+1)*r:u===0&&l===r-1&&(l=r-2,u=1);let h,d;this.closed||l>0?h=s[(l-1)%r]:(Qm.subVectors(s[0],s[1]).add(s[0]),h=Qm);let b=s[l%r],g=s[(l+1)%r];if(this.closed||l+2<r?d=s[(l+2)%r]:(Km.subVectors(s[r-1],s[r-2]).add(s[r-1]),d=Km),this.curveType==="centripetal"||this.curveType==="chordal"){let M=this.curveType==="chordal"?.5:.25,w=Math.pow(h.distanceToSquared(b),M),N=Math.pow(b.distanceToSquared(g),M),y=Math.pow(g.distanceToSquared(d),M);N<1e-4&&(N=1),w<1e-4&&(w=N),y<1e-4&&(y=N),zd.initNonuniformCatmullRom(h.x,b.x,g.x,d.x,w,N,y),Vd.initNonuniformCatmullRom(h.y,b.y,g.y,d.y,w,N,y),Hd.initNonuniformCatmullRom(h.z,b.z,g.z,d.z,w,N,y)}else this.curveType==="catmullrom"&&(zd.initCatmullRom(h.x,b.x,g.x,d.x,this.tension),Vd.initCatmullRom(h.y,b.y,g.y,d.y,this.tension),Hd.initCatmullRom(h.z,b.z,g.z,d.z,this.tension));return n.set(zd.calc(u),Vd.calc(u),Hd.calc(u)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new j().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function t0(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,l=i*i,u=i*l;return(2*e-2*n+r+a)*u+(-3*e+3*n-2*r-a)*l+r*i+e}function Kx(i,t){let e=1-i;return e*e*t}function Qx(i,t){return 2*(1-i)*i*t}function tv(i,t){return i*i*t}function Oo(i,t,e,n){return Kx(i,t)+Qx(i,e)+tv(i,n)}function ev(i,t){let e=1-i;return e*e*e*t}function nv(i,t){let e=1-i;return 3*e*e*i*t}function iv(i,t){return 3*(1-i)*i*i*t}function sv(i,t){return i*i*i*t}function Fo(i,t,e,n,s){return ev(i,t)+nv(i,e)+iv(i,n)+sv(i,s)}var tl=class extends Ti{constructor(t=new Vt,e=new Vt,n=new Vt,s=new Vt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Vt){let n=e,s=this.v0,r=this.v1,a=this.v2,l=this.v3;return n.set(Fo(t,s.x,r.x,a.x,l.x),Fo(t,s.y,r.y,a.y,l.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},lu=class extends Ti{constructor(t=new j,e=new j,n=new j,s=new j){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new j){let n=e,s=this.v0,r=this.v1,a=this.v2,l=this.v3;return n.set(Fo(t,s.x,r.x,a.x,l.x),Fo(t,s.y,r.y,a.y,l.y),Fo(t,s.z,r.z,a.z,l.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},el=class extends Ti{constructor(t=new Vt,e=new Vt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Vt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Vt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},cu=class extends Ti{constructor(t=new j,e=new j){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new j){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new j){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},nl=class extends Ti{constructor(t=new Vt,e=new Vt,n=new Vt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Vt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Oo(t,s.x,r.x,a.x),Oo(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},uu=class extends Ti{constructor(t=new j,e=new j,n=new j){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new j){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Oo(t,s.x,r.x,a.x),Oo(t,s.y,r.y,a.y),Oo(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},il=class extends Ti{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Vt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),l=r-a,u=s[a===0?a:a-1],h=s[a],d=s[a>s.length-2?s.length-1:a+1],b=s[a>s.length-3?s.length-1:a+2];return n.set(t0(l,u.x,h.x,d.x,b.x),t0(l,u.y,h.y,d.y,b.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Vt().fromArray(s))}return this}},Kd=Object.freeze({__proto__:null,ArcCurve:au,CatmullRomCurve3:ou,CubicBezierCurve:tl,CubicBezierCurve3:lu,EllipseCurve:Da,LineCurve:el,LineCurve3:cu,QuadraticBezierCurve:nl,QuadraticBezierCurve3:uu,SplineCurve:il}),hu=class extends Ti{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Kd[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,l=this.curves[r],u=l.getLength(),h=u===0?0:1-a/u;return l.getPointAt(h,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],l=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,u=a.getPoints(l);for(let h=0;h<u.length;h++){let d=u[h];n&&n.equals(d)||(e.push(d),n=d)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Kd[s.type]().fromJSON(s))}return this}},Lr=class extends hu{constructor(t){super(),this.type="Path",this.currentPoint=new Vt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new el(this.currentPoint.clone(),new Vt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new nl(this.currentPoint.clone(),new Vt(t,e),new Vt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let l=new tl(this.currentPoint.clone(),new Vt(t,e),new Vt(n,s),new Vt(r,a));return this.curves.push(l),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new il(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let l=this.currentPoint.x,u=this.currentPoint.y;return this.absarc(t+l,e+u,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,l,u){let h=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(t+h,e+d,n,s,r,a,l,u),this}absellipse(t,e,n,s,r,a,l,u){let h=new Da(t,e,n,s,r,a,l,u);if(this.curves.length>0){let b=h.getPoint(0);b.equals(this.currentPoint)||this.lineTo(b.x,b.y)}this.curves.push(h);let d=h.getPoint(1);return this.currentPoint.copy(d),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Na=class extends Lr{constructor(t){super(t),this.uuid=as(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Lr().fromJSON(s))}return this}};function rv(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=K0(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let l,u,h;if(n&&(r=uv(i,t,r,e)),i.length>80*e){l=i[0],u=i[1];let d=l,b=u;for(let g=e;g<s;g+=e){let M=i[g],w=i[g+1];M<l&&(l=M),w<u&&(u=w),M>d&&(d=M),w>b&&(b=w)}h=Math.max(d-l,b-u),h=h!==0?32767/h:0}return sl(r,a,e,l,u,h,0),a}function K0(i,t,e,n,s){let r;if(s===Sv(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=e0(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=e0(a/n|0,i[a],i[a+1],r);return r&&Ua(r,r.next)&&(al(r),r=r.next),r}function Dr(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Ua(e,e.next)||yn(e.prev,e,e.next)===0)){if(al(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function sl(i,t,e,n,s,r,a){if(!i)return;!a&&r&&mv(i,n,s,r);let l=i;for(;i.prev!==i.next;){let u=i.prev,h=i.next;if(r?ov(i,n,s,r):av(i)){t.push(u.i,i.i,h.i),al(i),i=h.next,l=h.next;continue}if(i=h,i===l){a?a===1?(i=lv(Dr(i),t),sl(i,t,e,n,s,r,2)):a===2&&cv(i,t,e,n,s,r):sl(Dr(i),t,e,n,s,r,1);break}}}function av(i){let t=i.prev,e=i,n=i.next;if(yn(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,l=t.y,u=e.y,h=n.y,d=Math.min(s,r,a),b=Math.min(l,u,h),g=Math.max(s,r,a),M=Math.max(l,u,h),w=n.next;for(;w!==t;){if(w.x>=d&&w.x<=g&&w.y>=b&&w.y<=M&&Do(s,l,r,u,a,h,w.x,w.y)&&yn(w.prev,w,w.next)>=0)return!1;w=w.next}return!0}function ov(i,t,e,n){let s=i.prev,r=i,a=i.next;if(yn(s,r,a)>=0)return!1;let l=s.x,u=r.x,h=a.x,d=s.y,b=r.y,g=a.y,M=Math.min(l,u,h),w=Math.min(d,b,g),N=Math.max(l,u,h),y=Math.max(d,b,g),m=Qd(M,w,t,e,n),$=Qd(N,y,t,e,n),V=i.prevZ,D=i.nextZ;for(;V&&V.z>=m&&D&&D.z<=$;){if(V.x>=M&&V.x<=N&&V.y>=w&&V.y<=y&&V!==s&&V!==a&&Do(l,d,u,b,h,g,V.x,V.y)&&yn(V.prev,V,V.next)>=0||(V=V.prevZ,D.x>=M&&D.x<=N&&D.y>=w&&D.y<=y&&D!==s&&D!==a&&Do(l,d,u,b,h,g,D.x,D.y)&&yn(D.prev,D,D.next)>=0))return!1;D=D.nextZ}for(;V&&V.z>=m;){if(V.x>=M&&V.x<=N&&V.y>=w&&V.y<=y&&V!==s&&V!==a&&Do(l,d,u,b,h,g,V.x,V.y)&&yn(V.prev,V,V.next)>=0)return!1;V=V.prevZ}for(;D&&D.z<=$;){if(D.x>=M&&D.x<=N&&D.y>=w&&D.y<=y&&D!==s&&D!==a&&Do(l,d,u,b,h,g,D.x,D.y)&&yn(D.prev,D,D.next)>=0)return!1;D=D.nextZ}return!0}function lv(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Ua(n,s)&&tg(n,e,e.next,s)&&rl(n,s)&&rl(s,n)&&(t.push(n.i,e.i,s.i),al(e),al(e.next),e=i=s),e=e.next}while(e!==i);return Dr(e)}function cv(i,t,e,n,s,r){let a=i;do{let l=a.next.next;for(;l!==a.prev;){if(a.i!==l.i&&xv(a,l)){let u=eg(a,l);a=Dr(a,a.next),u=Dr(u,u.next),sl(a,t,e,n,s,r,0),sl(u,t,e,n,s,r,0);return}l=l.next}a=a.next}while(a!==i)}function uv(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let l=t[r]*n,u=r<a-1?t[r+1]*n:i.length,h=K0(i,l,u,n,!1);h===h.next&&(h.steiner=!0),s.push(_v(h))}s.sort(hv);for(let r=0;r<s.length;r++)e=dv(s[r],e);return e}function hv(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function dv(i,t){let e=fv(i,t);if(!e)return t;let n=eg(e,i);return Dr(n,n.next),Dr(e,e.next)}function fv(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(Ua(i,e))return e;do{if(Ua(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let b=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(b<=n&&b>r&&(r=b,a=e.x<e.next.x?e:e.next,b===n))return a}e=e.next}while(e!==t);if(!a)return null;let l=a,u=a.x,h=a.y,d=1/0;e=a;do{if(n>=e.x&&e.x>=u&&n!==e.x&&Q0(s<h?n:r,s,u,h,s<h?r:n,s,e.x,e.y)){let b=Math.abs(s-e.y)/(n-e.x);rl(e,i)&&(b<d||b===d&&(e.x>a.x||e.x===a.x&&pv(a,e)))&&(a=e,d=b)}e=e.next}while(e!==l);return a}function pv(i,t){return yn(i.prev,i,t.prev)<0&&yn(t.next,i,i.next)<0}function mv(i,t,e,n){let s=i;do s.z===0&&(s.z=Qd(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,gv(s)}function gv(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,l=0;for(let h=0;h<e&&(l++,a=a.nextZ,!!a);h++);let u=e;for(;l>0||u>0&&a;)l!==0&&(u===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,l--):(s=a,a=a.nextZ,u--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function Qd(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function _v(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Q0(i,t,e,n,s,r,a,l){return(s-a)*(t-l)>=(i-a)*(r-l)&&(i-a)*(n-l)>=(e-a)*(t-l)&&(e-a)*(r-l)>=(s-a)*(n-l)}function Do(i,t,e,n,s,r,a,l){return!(i===a&&t===l)&&Q0(i,t,e,n,s,r,a,l)}function xv(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!vv(i,t)&&(rl(i,t)&&rl(t,i)&&yv(i,t)&&(yn(i.prev,i,t.prev)||yn(i,t.prev,t))||Ua(i,t)&&yn(i.prev,i,i.next)>0&&yn(t.prev,t,t.next)>0)}function yn(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Ua(i,t){return i.x===t.x&&i.y===t.y}function tg(i,t,e,n){let s=Uc(yn(i,t,e)),r=Uc(yn(i,t,n)),a=Uc(yn(e,n,i)),l=Uc(yn(e,n,t));return!!(s!==r&&a!==l||s===0&&Nc(i,e,t)||r===0&&Nc(i,n,t)||a===0&&Nc(e,i,n)||l===0&&Nc(e,t,n))}function Nc(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Uc(i){return i>0?1:i<0?-1:0}function vv(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&tg(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function rl(i,t){return yn(i.prev,i,i.next)<0?yn(i,t,i.next)>=0&&yn(i,i.prev,t)>=0:yn(i,t,i.prev)<0||yn(i,i.next,t)<0}function yv(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function eg(i,t){let e=tf(i.i,i.x,i.y),n=tf(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function e0(i,t,e,n){let s=tf(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function al(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function tf(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Sv(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var ef=class{static triangulate(t,e,n=2){return rv(t,e,n)}},Tr=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];n0(t),i0(n,t);let a=t.length;e.forEach(n0);for(let u=0;u<e.length;u++)s.push(a),a+=e[u].length,i0(n,e[u]);let l=ef.triangulate(n,s);for(let u=0;u<l.length;u+=3)r.push(l.slice(u,u+3));return r}};function n0(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function i0(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var ol=class i extends Mn{constructor(t=new Na([new Vt(.5,.5),new Vt(-.5,.5),new Vt(-.5,-.5),new Vt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let l=0,u=t.length;l<u;l++){let h=t[l];a(h)}this.setAttribute("position",new bn(s,3)),this.setAttribute("uv",new bn(r,2)),this.computeVertexNormals();function a(l){let u=[],h=e.curveSegments!==void 0?e.curveSegments:12,d=e.steps!==void 0?e.steps:1,b=e.depth!==void 0?e.depth:1,g=e.bevelEnabled!==void 0?e.bevelEnabled:!0,M=e.bevelThickness!==void 0?e.bevelThickness:.2,w=e.bevelSize!==void 0?e.bevelSize:M-.1,N=e.bevelOffset!==void 0?e.bevelOffset:0,y=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,$=e.UVGenerator!==void 0?e.UVGenerator:bv,V,D=!1,T,k,q,R;if(m){V=m.getSpacedPoints(d),D=!0,g=!1;let rt=m.isCatmullRomCurve3?m.closed:!1;T=m.computeFrenetFrames(d,rt),k=new j,q=new j,R=new j}g||(y=0,M=0,w=0,N=0);let B=l.extractPoints(h),X=B.shape,J=B.holes;if(!Tr.isClockWise(X)){X=X.reverse();for(let rt=0,It=J.length;rt<It;rt++){let H=J[rt];Tr.isClockWise(H)&&(J[rt]=H.reverse())}}function ht(rt){let H=10000000000000001e-36,Lt=rt[0];for(let kt=1;kt<=rt.length;kt++){let ce=kt%rt.length,fe=rt[ce],de=fe.x-Lt.x,Ce=fe.y-Lt.y,Z=de*de+Ce*Ce,Oe=Math.max(Math.abs(fe.x),Math.abs(fe.y),Math.abs(Lt.x),Math.abs(Lt.y)),Ue=H*Oe*Oe;if(Z<=Ue){rt.splice(ce,1),kt--;continue}Lt=fe}}ht(X),J.forEach(ht);let Q=J.length,st=X;for(let rt=0;rt<Q;rt++){let It=J[rt];X=X.concat(It)}function pt(rt,It,H){return It||Ee("ExtrudeGeometry: vec does not exist"),rt.clone().addScaledVector(It,H)}let _t=X.length;function At(rt,It,H){let Lt,kt,ce,fe=rt.x-It.x,de=rt.y-It.y,Ce=H.x-rt.x,Z=H.y-rt.y,Oe=fe*fe+de*de,Ue=fe*Z-de*Ce;if(Math.abs(Ue)>Number.EPSILON){let F=Math.sqrt(Oe),E=Math.sqrt(Ce*Ce+Z*Z),at=It.x-de/F,ct=It.y+fe/F,vt=H.x-Z/E,Dt=H.y+Ce/E,zt=((vt-at)*Z-(Dt-ct)*Ce)/(fe*Z-de*Ce);Lt=at+fe*zt-rt.x,kt=ct+de*zt-rt.y;let gt=Lt*Lt+kt*kt;if(gt<=2)return new Vt(Lt,kt);ce=Math.sqrt(gt/2)}else{let F=!1;fe>Number.EPSILON?Ce>Number.EPSILON&&(F=!0):fe<-Number.EPSILON?Ce<-Number.EPSILON&&(F=!0):Math.sign(de)===Math.sign(Z)&&(F=!0),F?(Lt=-de,kt=fe,ce=Math.sqrt(Oe)):(Lt=fe,kt=de,ce=Math.sqrt(Oe/2))}return new Vt(Lt/ce,kt/ce)}let xt=[];for(let rt=0,It=st.length,H=It-1,Lt=rt+1;rt<It;rt++,H++,Lt++)H===It&&(H=0),Lt===It&&(Lt=0),xt[rt]=At(st[rt],st[H],st[Lt]);let Et=[],wt,$t=xt.concat();for(let rt=0,It=Q;rt<It;rt++){let H=J[rt];wt=[];for(let Lt=0,kt=H.length,ce=kt-1,fe=Lt+1;Lt<kt;Lt++,ce++,fe++)ce===kt&&(ce=0),fe===kt&&(fe=0),wt[Lt]=At(H[Lt],H[ce],H[fe]);Et.push(wt),$t=$t.concat(wt)}let ne;if(y===0)ne=Tr.triangulateShape(st,J);else{let rt=[],It=[];for(let H=0;H<y;H++){let Lt=H/y,kt=M*Math.cos(Lt*Math.PI/2),ce=w*Math.sin(Lt*Math.PI/2)+N;for(let fe=0,de=st.length;fe<de;fe++){let Ce=pt(st[fe],xt[fe],ce);Ut(Ce.x,Ce.y,-kt),Lt===0&&rt.push(Ce)}for(let fe=0,de=Q;fe<de;fe++){let Ce=J[fe];wt=Et[fe];let Z=[];for(let Oe=0,Ue=Ce.length;Oe<Ue;Oe++){let F=pt(Ce[Oe],wt[Oe],ce);Ut(F.x,F.y,-kt),Lt===0&&Z.push(F)}Lt===0&&It.push(Z)}}ne=Tr.triangulateShape(rt,It)}let Ye=ne.length,Ne=w+N;for(let rt=0;rt<_t;rt++){let It=g?pt(X[rt],$t[rt],Ne):X[rt];D?(q.copy(T.normals[0]).multiplyScalar(It.x),k.copy(T.binormals[0]).multiplyScalar(It.y),R.copy(V[0]).add(q).add(k),Ut(R.x,R.y,R.z)):Ut(It.x,It.y,0)}for(let rt=1;rt<=d;rt++)for(let It=0;It<_t;It++){let H=g?pt(X[It],$t[It],Ne):X[It];D?(q.copy(T.normals[rt]).multiplyScalar(H.x),k.copy(T.binormals[rt]).multiplyScalar(H.y),R.copy(V[rt]).add(q).add(k),Ut(R.x,R.y,R.z)):Ut(H.x,H.y,b/d*rt)}for(let rt=y-1;rt>=0;rt--){let It=rt/y,H=M*Math.cos(It*Math.PI/2),Lt=w*Math.sin(It*Math.PI/2)+N;for(let kt=0,ce=st.length;kt<ce;kt++){let fe=pt(st[kt],xt[kt],Lt);Ut(fe.x,fe.y,b+H)}for(let kt=0,ce=J.length;kt<ce;kt++){let fe=J[kt];wt=Et[kt];for(let de=0,Ce=fe.length;de<Ce;de++){let Z=pt(fe[de],wt[de],Lt);D?Ut(Z.x,Z.y+V[d-1].y,V[d-1].x+H):Ut(Z.x,Z.y,b+H)}}}He(),yt();function He(){let rt=s.length/3;if(g){let It=0,H=_t*It;for(let Lt=0;Lt<Ye;Lt++){let kt=ne[Lt];ue(kt[2]+H,kt[1]+H,kt[0]+H)}It=d+y*2,H=_t*It;for(let Lt=0;Lt<Ye;Lt++){let kt=ne[Lt];ue(kt[0]+H,kt[1]+H,kt[2]+H)}}else{for(let It=0;It<Ye;It++){let H=ne[It];ue(H[2],H[1],H[0])}for(let It=0;It<Ye;It++){let H=ne[It];ue(H[0]+_t*d,H[1]+_t*d,H[2]+_t*d)}}n.addGroup(rt,s.length/3-rt,0)}function yt(){let rt=s.length/3,It=0;St(st,It),It+=st.length;for(let H=0,Lt=J.length;H<Lt;H++){let kt=J[H];St(kt,It),It+=kt.length}n.addGroup(rt,s.length/3-rt,1)}function St(rt,It){let H=rt.length;for(;--H>=0;){let Lt=H,kt=H-1;kt<0&&(kt=rt.length-1);for(let ce=0,fe=d+y*2;ce<fe;ce++){let de=_t*ce,Ce=_t*(ce+1),Z=It+Lt+de,Oe=It+kt+de,Ue=It+kt+Ce,F=It+Lt+Ce;jt(Z,Oe,Ue,F)}}}function Ut(rt,It,H){u.push(rt),u.push(It),u.push(H)}function ue(rt,It,H){ge(rt),ge(It),ge(H);let Lt=s.length/3,kt=$.generateTopUV(n,s,Lt-3,Lt-2,Lt-1);te(kt[0]),te(kt[1]),te(kt[2])}function jt(rt,It,H,Lt){ge(rt),ge(It),ge(Lt),ge(It),ge(H),ge(Lt);let kt=s.length/3,ce=$.generateSideWallUV(n,s,kt-6,kt-3,kt-2,kt-1);te(ce[0]),te(ce[1]),te(ce[3]),te(ce[1]),te(ce[2]),te(ce[3])}function ge(rt){s.push(u[rt*3+0]),s.push(u[rt*3+1]),s.push(u[rt*3+2])}function te(rt){r.push(rt.x),r.push(rt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Mv(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let l=e[t.shapes[r]];n.push(l)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Kd[s.type]().fromJSON(s)),new i(n,t.options)}},bv={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],l=t[n*3],u=t[n*3+1],h=t[s*3],d=t[s*3+1];return[new Vt(r,a),new Vt(l,u),new Vt(h,d)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],l=t[e*3+1],u=t[e*3+2],h=t[n*3],d=t[n*3+1],b=t[n*3+2],g=t[s*3],M=t[s*3+1],w=t[s*3+2],N=t[r*3],y=t[r*3+1],m=t[r*3+2];return Math.abs(l-d)<Math.abs(a-h)?[new Vt(a,1-u),new Vt(h,1-b),new Vt(g,1-w),new Vt(N,1-m)]:[new Vt(l,1-u),new Vt(d,1-b),new Vt(M,1-w),new Vt(y,1-m)]}};function Mv(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var ll=class i extends Mn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,l=Math.floor(n),u=Math.floor(s),h=l+1,d=u+1,b=t/l,g=e/u,M=[],w=[],N=[],y=[];for(let m=0;m<d;m++){let $=m*g-a;for(let V=0;V<h;V++){let D=V*b-r;w.push(D,-$,0),N.push(0,0,1),y.push(V/l),y.push(1-m/u)}}for(let m=0;m<u;m++)for(let $=0;$<l;$++){let V=$+h*m,D=$+h*(m+1),T=$+1+h*(m+1),k=$+1+h*m;M.push(V,D,k),M.push(D,T,k)}this.setIndex(M),this.setAttribute("position",new bn(w,3)),this.setAttribute("normal",new bn(N,3)),this.setAttribute("uv",new bn(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var cl=class extends Mn{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],n=new Set,s=new j,r=new j;if(t.index!==null){let a=t.attributes.position,l=t.index,u=t.groups;u.length===0&&(u=[{start:0,count:l.count,materialIndex:0}]);for(let h=0,d=u.length;h<d;++h){let b=u[h],g=b.start,M=b.count;for(let w=g,N=g+M;w<N;w+=3)for(let y=0;y<3;y++){let m=l.getX(w+y),$=l.getX(w+(y+1)%3);s.fromBufferAttribute(a,m),r.fromBufferAttribute(a,$),s0(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{let a=t.attributes.position;for(let l=0,u=a.count/3;l<u;l++)for(let h=0;h<3;h++){let d=3*l+h,b=3*l+(h+1)%3;s.fromBufferAttribute(a,d),r.fromBufferAttribute(a,b),s0(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new bn(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function s0(i,t,e){let n=`${i.x},${i.y},${i.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${i.x},${i.y},${i.z}`;return e.has(n)===!0||e.has(s)===!0?!1:(e.add(n),e.add(s),!0)}function Or(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(r0(s))s.isRenderTargetTexture?(be("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(r0(s[0])){let r=[];for(let a=0,l=s.length;a<l;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function ei(i){let t={};for(let e=0;e<i.length;e++){let n=Or(i[e]);for(let s in n)t[s]=n[s]}return t}function r0(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function wv(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Lf(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:We.workingColorSpace}var Cl={clone:Or,merge:ei},Ev=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Tv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,$n=class extends us{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ev,this.fragmentShader=Tv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Or(t.uniforms),this.uniformsGroups=wv(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new ye().setHex(s.value);break;case"v2":this.uniforms[n].value=new Vt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new j().fromArray(s.value);break;case"v4":this.uniforms[n].value=new an().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Le().fromArray(s.value);break;case"m4":this.uniforms[n].value=new qe().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},du=class extends $n{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var ul=class extends us{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mh,this.normalScale=new Vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fs,this.combine=Cu,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},fu=class extends us{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=B0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},pu=class extends us{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function xa(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Gd(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var er=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let l=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===l)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let l=e[1];t<l&&(n=2,r=l);for(let u=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===u)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let l=n+a>>>1;t<e[l]?a=l:n=l+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},mu=class extends er{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Yd,endingEnd:Yd}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,l=s[r],u=s[a];if(l===void 0)switch(this.getSettings_().endingStart){case Jd:r=t,l=2*e-n;break;case Zd:r=s.length-2,l=e+s[r]-s[r+1];break;default:r=t,l=n}if(u===void 0)switch(this.getSettings_().endingEnd){case Jd:a=t,u=2*n-e;break;case Zd:a=1,u=n+s[1]-s[0];break;default:a=t-1,u=e}let h=(n-e)*.5,d=this.valueSize;this._weightPrev=h/(e-l),this._weightNext=h/(u-n),this._offsetPrev=r*d,this._offsetNext=a*d}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,u=t*l,h=u-l,d=this._offsetPrev,b=this._offsetNext,g=this._weightPrev,M=this._weightNext,w=(n-e)/(s-e),N=w*w,y=N*w,m=-g*y+2*g*N-g*w,$=(1+g)*y+(-1.5-2*g)*N+(-.5+g)*w+1,V=(-1-M)*y+(1.5+M)*N+.5*w,D=M*y-M*N;for(let T=0;T!==l;++T)r[T]=m*a[d+T]+$*a[h+T]+V*a[u+T]+D*a[b+T];return r}},gu=class extends er{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,u=t*l,h=u-l,d=(n-e)/(s-e),b=1-d;for(let g=0;g!==l;++g)r[g]=a[h+g]*b+a[u+g]*d;return r}},_u=class extends er{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},xu=class extends er{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,u=t*l,h=u-l,d=this.inTangents,b=this.outTangents;if(!d||!b){let w=(n-e)/(s-e),N=1-w;for(let y=0;y!==l;++y)r[y]=a[h+y]*N+a[u+y]*w;return r}let g=l*2,M=t-1;for(let w=0;w!==l;++w){let N=a[h+w],y=a[u+w],m=M*g+w*2,$=b[m],V=b[m+1],D=t*g+w*2,T=d[D],k=d[D+1],q=Cv(n,e,$,T,s);r[w]=ng(q,N,V,k,y)}return r}};function ng(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Av(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Cv(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let l=ng(r,t,e,n,s)-i;if(Math.abs(l)<1e-10)break;let u=Av(r,t,e,n,s);if(Math.abs(u)<1e-10)break;r=Math.max(0,Math.min(1,r-l/u))}return r}var Ai=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=xa(e,this.TimeBufferType),this.values=xa(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:xa(t.times,Array),values:xa(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Gd(t.settings)&&(n.settings={inTangents:xa(t.settings.inTangents,Array),outTangents:xa(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new _u(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new gu(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new mu(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new xu(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Bo:e=this.InterpolantFactoryMethodDiscrete;break;case Zc:e=this.InterpolantFactoryMethodLinear;break;case kc:e=this.InterpolantFactoryMethodSmooth;break;case qd:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return be("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Bo;case this.InterpolantFactoryMethodLinear:return Zc;case this.InterpolantFactoryMethodSmooth:return kc;case this.InterpolantFactoryMethodBezier:return qd}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Gd(this.settings)&&(a0(this.settings.inTangents,t),a0(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let l=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*l,a*l)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Ee("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ee("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let l=0;l!==r;l++){let u=n[l];if(typeof u=="number"&&isNaN(u)){Ee("KeyframeTrack: Time is not a valid number.",this,l,u),t=!1;break}if(a!==null&&a>u){Ee("KeyframeTrack: Out of order keys.",this,l,u,a),t=!1;break}a=u}if(s!==void 0&&gx(s))for(let l=0,u=s.length;l!==u;++l){let h=s[l];if(isNaN(h)){Ee("KeyframeTrack: Value is not a valid number.",this,l,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===kc,r=t.length-1,a=1;for(let l=1;l<r;++l){let u=!1,h=t[l],d=t[l+1];if(h!==d&&(l!==1||h!==t[0]))if(s)u=!0;else{let b=l*n,g=b-n,M=b+n;for(let w=0;w!==n;++w){let N=e[b+w];if(N!==e[g+w]||N!==e[M+w]){u=!0;break}}}if(u){if(l!==a){t[a]=t[l];let b=l*n,g=a*n;for(let M=0;M!==n;++M)e[g+M]=e[b+M]}++a}}if(r>0){t[a]=t[r];for(let l=r*n,u=a*n,h=0;h!==n;++h)e[u+h]=e[l+h];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Gd(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function a0(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Ai.prototype.ValueTypeName="";Ai.prototype.TimeBufferType=Float32Array;Ai.prototype.ValueBufferType=Float32Array;Ai.prototype.DefaultInterpolation=Zc;var nr=class extends Ai{constructor(t,e,n){super(t,e,n)}};nr.prototype.ValueTypeName="bool";nr.prototype.ValueBufferType=Array;nr.prototype.DefaultInterpolation=Bo;nr.prototype.InterpolantFactoryMethodLinear=void 0;nr.prototype.InterpolantFactoryMethodSmooth=void 0;var vu=class extends Ai{constructor(t,e,n,s){super(t,e,n,s)}};vu.prototype.ValueTypeName="color";var yu=class extends Ai{constructor(t,e,n,s){super(t,e,n,s)}};yu.prototype.ValueTypeName="number";var Su=class extends er{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,u=(n-e)/(s-e),h=t*l;for(let d=h+l;h!==d;h+=4)cs.slerpFlat(r,0,a,h-l,a,h,u);return r}},hl=class extends Ai{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Su(this.times,this.values,this.getValueSize(),t)}};hl.prototype.ValueTypeName="quaternion";hl.prototype.InterpolantFactoryMethodSmooth=void 0;var ir=class extends Ai{constructor(t,e,n){super(t,e,n)}};ir.prototype.ValueTypeName="string";ir.prototype.ValueBufferType=Array;ir.prototype.DefaultInterpolation=Bo;ir.prototype.InterpolantFactoryMethodLinear=void 0;ir.prototype.InterpolantFactoryMethodSmooth=void 0;var bu=class extends Ai{constructor(t,e,n,s){super(t,e,n,s)}};bu.prototype.ValueTypeName="vector";var Mu=class{constructor(t,e,n){let s=this,r=!1,a=0,l=0,u,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(d){l++,r===!1&&s.onStart!==void 0&&s.onStart(d,a,l),r=!0},this.itemEnd=function(d){a++,s.onProgress!==void 0&&s.onProgress(d,a,l),a===l&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),u?u(d):d},this.setURLModifier=function(d){return u=d,this},this.addHandler=function(d,b){return h.push(d,b),this},this.removeHandler=function(d){let b=h.indexOf(d);return b!==-1&&h.splice(b,2),this},this.getHandler=function(d){for(let b=0,g=h.length;b<g;b+=2){let M=h[b],w=h[b+1];if(M.global&&(M.lastIndex=0),M.test(d))return w}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},ig=new Mu,wu=class{constructor(t){this.manager=t!==void 0?t:ig,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};wu.DEFAULT_MATERIAL_NAME="__DEFAULT";var dl=class extends Bn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ye(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},fl=class extends dl{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Bn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ye(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Wd=new qe,o0=new j,l0=new j,Eu=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Vt(512,512),this.mapType=Si,this.map=null,this.mapPass=null,this.matrix=new qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Pa,this._frameExtents=new Vt(1,1),this._viewportCount=1,this._viewports=[new an(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;o0.setFromMatrixPosition(t.matrixWorld),e.position.copy(o0),l0.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(l0),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Wd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Wd,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,l=s?s.w/r.y:1,u=s?s.x/r.x:0,h=s?s.y/r.y:0;t.coordinateSystem===Ea||t.reversedDepth?e.set(.5*a,0,0,.5*a+u,0,.5*l,0,.5*l+h,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+u,0,.5*l,0,.5*l+h,0,0,.5,.5,0,0,0,1),e.multiply(Wd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Oc=new j,Fc=new cs,ss=new j,pl=class extends Bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qe,this.projectionMatrix=new qe,this.projectionMatrixInverse=new qe,this.coordinateSystem=qi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Oc,Fc,ss),ss.x===1&&ss.y===1&&ss.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Oc,Fc,ss.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Oc,Fc,ss),ss.x===1&&ss.y===1&&ss.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Oc,Fc,ss.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ks=new j,c0=new Vt,u0=new Vt,ti=class extends pl{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Aa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(No*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Aa*2*Math.atan(Math.tan(No*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ks.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ks.x,Ks.y).multiplyScalar(-t/Ks.z),Ks.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ks.x,Ks.y).multiplyScalar(-t/Ks.z)}getViewSize(t,e){return this.getViewBounds(t,c0,u0),e.subVectors(u0,c0)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(No*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let u=a.fullWidth,h=a.fullHeight;r+=a.offsetX*s/u,e-=a.offsetY*n/h,s*=a.width/u,n*=a.height/h}let l=this.filmOffset;l!==0&&(r+=t*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Oa=class extends pl{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,l=s+e,u=s-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,l-=d*this.view.offsetY,u=l-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,l,u,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},nf=class extends Eu{constructor(){super(new Oa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ml=class extends dl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Bn.DEFAULT_UP),this.updateMatrix(),this.target=new Bn,this.shadow=new nf}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var gl=class extends Mn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var va=-90,ya=1,Tu=class extends Bn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new ti(va,ya,t,e);s.layers=this.layers,this.add(s);let r=new ti(va,ya,t,e);r.layers=this.layers,this.add(r);let a=new ti(va,ya,t,e);a.layers=this.layers,this.add(a);let l=new ti(va,ya,t,e);l.layers=this.layers,this.add(l);let u=new ti(va,ya,t,e);u.layers=this.layers,this.add(u);let h=new ti(va,ya,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,l,u]=e;for(let h of e)this.remove(h);if(t===qi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(t===Ea)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,l,u,h,d]=this.children,b=t.getRenderTarget(),g=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),w=t.xr.enabled;t.xr.enabled=!1;let N=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let y=!1;t.isWebGLRenderer===!0?y=t.state.buffers.depth.getReversed():y=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,3,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(n,4,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),n.texture.generateMipmaps=N,t.setRenderTarget(n,5,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,d),t.setRenderTarget(b,g,M),t.xr.enabled=w,n.texture.needsPMREMUpdate=!0}},Au=class extends ti{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Df="\\[\\]\\.:\\/",Rv=new RegExp("["+Df+"]","g"),Nf="[^"+Df+"]",Iv="[^"+Df.replace("\\.","")+"]",Pv=/((?:WC+[\/:])*)/.source.replace("WC",Nf),Lv=/(WCOD+)?/.source.replace("WCOD",Iv),Dv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Nf),Nv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Nf),Uv=new RegExp("^"+Pv+Lv+Dv+Nv+"$"),Ov=["material","materials","bones","map"],sf=class{constructor(t,e,n){let s=n||gn.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},gn=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Rv,"")}static parseTrackName(t){let e=Uv.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Ov.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let l=r[a];if(l.name===e||l.uuid===e)return l;let u=n(l.children);if(u)return u}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){be("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=e.objectIndex;switch(n){case"materials":if(!t.material){Ee("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ee("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ee("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===h){h=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ee("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ee("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Ee("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(h!==void 0){if(t[h]===void 0){Ee("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let a=t[s];if(a===void 0){let h=e.nodeName;Ee("PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",t);return}let l=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?l=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let u=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Ee("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ee("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}u=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(u=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(u=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[u],this.setValue=this.SetterByBindingTypeAndVersioning[u][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};gn.Composite=sf;gn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};gn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};gn.prototype.GetterByBindingType=[gn.prototype._getValue_direct,gn.prototype._getValue_array,gn.prototype._getValue_arrayElement,gn.prototype._getValue_toArray];gn.prototype.SetterByBindingTypeAndVersioning=[[gn.prototype._setValue_direct,gn.prototype._setValue_direct_setNeedsUpdate,gn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[gn.prototype._setValue_array,gn.prototype._setValue_array_setNeedsUpdate,gn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[gn.prototype._setValue_arrayElement,gn.prototype._setValue_arrayElement_setNeedsUpdate,gn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[gn.prototype._setValue_fromArray,gn.prototype._setValue_fromArray_setNeedsUpdate,gn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Z1=new Float32Array(1);var sr=class extends tu{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}};var h0=new qe,_l=class{constructor(t,e,n=0,s=1/0){this.ray=new Cr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Ra,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Ee("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return h0.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(h0),this}intersectObject(t,e=!0,n=[]){return rf(t,this,n,e),n.sort(d0),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)rf(t[s],this,n,e);return n.sort(d0),n}};function d0(i,t){return i.distance-t.distance}function rf(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,l=r.length;a<l;a++)rf(r[a],t,e,!0)}}var af=class i{static{i.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};var f0=new j,Bc=new j,Sa=new j,ba=new j,Xd=new j,Fv=new j,Bv=new j,xl=class{constructor(t=new j,e=new j){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){f0.subVectors(t,this.start),Bc.subVectors(this.end,this.start);let n=Bc.dot(Bc);if(n===0)return 0;let r=Bc.dot(f0)/n;return e&&(r=De(r,0,1)),r}closestPointToPoint(t,e,n){let s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}distanceSqToLine3(t,e=Fv,n=Bv){let s=10000000000000001e-32,r,a,l=this.start,u=t.start,h=this.end,d=t.end;Sa.subVectors(h,l),ba.subVectors(d,u),Xd.subVectors(l,u);let b=Sa.dot(Sa),g=ba.dot(ba),M=ba.dot(Xd);if(b<=s&&g<=s)return e.copy(l),n.copy(u),e.sub(n),e.dot(e);if(b<=s)r=0,a=M/g,a=De(a,0,1);else{let w=Sa.dot(Xd);if(g<=s)a=0,r=De(-w/b,0,1);else{let N=Sa.dot(ba),y=b*g-N*N;y!==0?r=De((N*M-w*g)/y,0,1):r=0,a=(N*r+M)/g,a<0?(a=0,r=De(-w/b,0,1)):a>1&&(a=1,r=De((N-w)/b,0,1))}}return e.copy(l).addScaledVector(Sa,r),n.copy(u).addScaledVector(ba,a),e.distanceToSquared(n)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};function Uf(i,t,e,n){let s=kv(n);switch(e){case Ef:return i*t;case Uu:return i*t/s.components*s.byteLength;case Ou:return i*t/s.components*s.byteLength;case cr:return i*t*2/s.components*s.byteLength;case Fu:return i*t*2/s.components*s.byteLength;case Tf:return i*t*3/s.components*s.byteLength;case Ui:return i*t*4/s.components*s.byteLength;case Bu:return i*t*4/s.components*s.byteLength;case bl:case Ml:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case wl:case El:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case $u:case Vu:return Math.max(i,16)*Math.max(t,8)/4;case ku:case zu:return Math.max(i,8)*Math.max(t,8)/2;case Hu:case Gu:case Xu:case qu:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Wu:case Tl:case Yu:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ju:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Zu:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ju:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ku:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Qu:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case th:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case eh:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case nh:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ih:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case sh:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case rh:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ah:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case oh:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case lh:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ch:case uh:case hh:return Math.ceil(i/4)*Math.ceil(t/4)*16;case dh:case fh:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Al:case ph:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function kv(i){switch(i){case Si:case Sf:return{byteLength:1,components:1};case ka:case bf:case Ki:return{byteLength:2,components:1};case Du:case Nu:return{byteLength:2,components:4};case ji:case Lu:case Ni:return{byteLength:4,components:1};case Mf:case wf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?be("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Eg(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function zv(i){let t=new WeakMap;function e(l,u){let h=l.array,d=l.usage,b=h.byteLength,g=i.createBuffer();i.bindBuffer(u,g),i.bufferData(u,h,d),l.onUploadCallback();let M;if(h instanceof Float32Array)M=i.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)M=i.HALF_FLOAT;else if(h instanceof Uint16Array)l.isFloat16BufferAttribute?M=i.HALF_FLOAT:M=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)M=i.SHORT;else if(h instanceof Uint32Array)M=i.UNSIGNED_INT;else if(h instanceof Int32Array)M=i.INT;else if(h instanceof Int8Array)M=i.BYTE;else if(h instanceof Uint8Array)M=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)M=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:M,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version,size:b}}function n(l,u,h){let d=u.array,b=u.updateRanges;if(i.bindBuffer(h,l),b.length===0)i.bufferSubData(h,0,d);else{b.sort((M,w)=>M.start-w.start);let g=0;for(let M=1;M<b.length;M++){let w=b[g],N=b[M];N.start<=w.start+w.count+1?w.count=Math.max(w.count,N.start+N.count-w.start):(++g,b[g]=N)}b.length=g+1;for(let M=0,w=b.length;M<w;M++){let N=b[M];i.bufferSubData(h,N.start*d.BYTES_PER_ELEMENT,d,N.start,N.count)}u.clearUpdateRanges()}u.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),t.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);let u=t.get(l);u&&(i.deleteBuffer(u.buffer),t.delete(l))}function a(l,u){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){let d=t.get(l);(!d||d.version<l.version)&&t.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}let h=t.get(l);if(h===void 0)t.set(l,e(l,u));else if(h.version<l.version){if(h.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,l,u),h.version=l.version}}return{get:s,remove:r,update:a}}var Vv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hv=`#ifdef USE_ALPHAHASH
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
#endif`,Gv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Wv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yv=`#ifdef USE_AOMAP
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
#endif`,Jv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zv=`#ifdef USE_BATCHING
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
#endif`,jv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Kv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ty=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ey=`#ifdef USE_IRIDESCENCE
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
#endif`,ny=`#ifdef USE_BUMPMAP
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
#endif`,iy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,sy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ry=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ay=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,oy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ly=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,cy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,uy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,hy=`#define PI 3.141592653589793
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
} // validated`,dy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,fy=`vec3 transformedNormal = objectNormal;
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
#endif`,py=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,my=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_y=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xy="gl_FragColor = linearToOutputTexel( gl_FragColor );",vy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yy=`#ifdef USE_ENVMAP
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
#endif`,Sy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,by=`#ifdef USE_ENVMAP
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
#endif`,My=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wy=`#ifdef USE_ENVMAP
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
#endif`,Ey=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ty=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ay=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ry=`#ifdef USE_GRADIENTMAP
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
}`,Iy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Py=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ly=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Dy=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Ny=`#ifdef USE_ENVMAP
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
#endif`,Uy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Oy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Fy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,By=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ky=`PhysicalMaterial material;
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
#endif`,$y=`uniform sampler2D dfgLUT;
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
}`,zy=`
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
#endif`,Vy=`#if defined( RE_IndirectDiffuse )
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
#endif`,Hy=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Gy=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Wy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ky=`#if defined( USE_POINTS_UV )
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
#endif`,Qy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,eS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,nS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,iS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sS=`#ifdef USE_MORPHTARGETS
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
#endif`,rS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,aS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,oS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,lS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,hS=`#ifdef USE_NORMALMAP
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
#endif`,dS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_S=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,xS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,SS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,MS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ES=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,TS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,AS=`float getShadowMask() {
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
}`,CS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,RS=`#ifdef USE_SKINNING
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
#endif`,IS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,PS=`#ifdef USE_SKINNING
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
#endif`,LS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,DS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,NS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,US=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,OS=`#ifdef USE_TRANSMISSION
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
#endif`,FS=`#ifdef USE_TRANSMISSION
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
#endif`,BS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$S=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,VS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,HS=`uniform sampler2D t2D;
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
}`,GS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,WS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,XS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YS=`#include <common>
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
}`,JS=`#if DEPTH_PACKING == 3200
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
}`,ZS=`#define DISTANCE
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
}`,jS=`#define DISTANCE
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
}`,KS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,QS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tb=`uniform float scale;
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
}`,eb=`uniform vec3 diffuse;
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
}`,nb=`#include <common>
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
}`,ib=`uniform vec3 diffuse;
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
}`,sb=`#define LAMBERT
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
}`,rb=`#define LAMBERT
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
}`,ab=`#define MATCAP
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
}`,ob=`#define MATCAP
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
}`,lb=`#define NORMAL
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
}`,cb=`#define NORMAL
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
}`,ub=`#define PHONG
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
}`,hb=`#define PHONG
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
}`,db=`#define STANDARD
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
}`,fb=`#define STANDARD
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
}`,pb=`#define TOON
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
}`,mb=`#define TOON
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
}`,gb=`uniform float size;
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
}`,_b=`uniform vec3 diffuse;
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
}`,xb=`#include <common>
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
}`,vb=`uniform vec3 color;
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
}`,yb=`uniform float rotation;
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
}`,Sb=`uniform vec3 diffuse;
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
}`,Be={alphahash_fragment:Vv,alphahash_pars_fragment:Hv,alphamap_fragment:Gv,alphamap_pars_fragment:Wv,alphatest_fragment:Xv,alphatest_pars_fragment:qv,aomap_fragment:Yv,aomap_pars_fragment:Jv,batching_pars_vertex:Zv,batching_vertex:jv,begin_vertex:Kv,beginnormal_vertex:Qv,bsdfs:ty,iridescence_fragment:ey,bumpmap_pars_fragment:ny,clipping_planes_fragment:iy,clipping_planes_pars_fragment:sy,clipping_planes_pars_vertex:ry,clipping_planes_vertex:ay,color_fragment:oy,color_pars_fragment:ly,color_pars_vertex:cy,color_vertex:uy,common:hy,cube_uv_reflection_fragment:dy,defaultnormal_vertex:fy,displacementmap_pars_vertex:py,displacementmap_vertex:my,emissivemap_fragment:gy,emissivemap_pars_fragment:_y,colorspace_fragment:xy,colorspace_pars_fragment:vy,envmap_fragment:yy,envmap_common_pars_fragment:Sy,envmap_pars_fragment:by,envmap_pars_vertex:My,envmap_physical_pars_fragment:Ny,envmap_vertex:wy,fog_vertex:Ey,fog_pars_vertex:Ty,fog_fragment:Ay,fog_pars_fragment:Cy,gradientmap_pars_fragment:Ry,lightmap_pars_fragment:Iy,lights_lambert_fragment:Py,lights_lambert_pars_fragment:Ly,lights_pars_begin:Dy,lights_toon_fragment:Uy,lights_toon_pars_fragment:Oy,lights_phong_fragment:Fy,lights_phong_pars_fragment:By,lights_physical_fragment:ky,lights_physical_pars_fragment:$y,lights_fragment_begin:zy,lights_fragment_maps:Vy,lights_fragment_end:Hy,lightprobes_pars_fragment:Gy,logdepthbuf_fragment:Wy,logdepthbuf_pars_fragment:Xy,logdepthbuf_pars_vertex:qy,logdepthbuf_vertex:Yy,map_fragment:Jy,map_pars_fragment:Zy,map_particle_fragment:jy,map_particle_pars_fragment:Ky,metalnessmap_fragment:Qy,metalnessmap_pars_fragment:tS,morphinstance_vertex:eS,morphcolor_vertex:nS,morphnormal_vertex:iS,morphtarget_pars_vertex:sS,morphtarget_vertex:rS,normal_fragment_begin:aS,normal_fragment_maps:oS,normal_pars_fragment:lS,normal_pars_vertex:cS,normal_vertex:uS,normalmap_pars_fragment:hS,clearcoat_normal_fragment_begin:dS,clearcoat_normal_fragment_maps:fS,clearcoat_pars_fragment:pS,iridescence_pars_fragment:mS,opaque_fragment:gS,packing:_S,premultiplied_alpha_fragment:xS,project_vertex:vS,dithering_fragment:yS,dithering_pars_fragment:SS,roughnessmap_fragment:bS,roughnessmap_pars_fragment:MS,shadowmap_pars_fragment:wS,shadowmap_pars_vertex:ES,shadowmap_vertex:TS,shadowmask_pars_fragment:AS,skinbase_vertex:CS,skinning_pars_vertex:RS,skinning_vertex:IS,skinnormal_vertex:PS,specularmap_fragment:LS,specularmap_pars_fragment:DS,tonemapping_fragment:NS,tonemapping_pars_fragment:US,transmission_fragment:OS,transmission_pars_fragment:FS,uv_pars_fragment:BS,uv_pars_vertex:kS,uv_vertex:$S,worldpos_vertex:zS,background_vert:VS,background_frag:HS,backgroundCube_vert:GS,backgroundCube_frag:WS,cube_vert:XS,cube_frag:qS,depth_vert:YS,depth_frag:JS,distance_vert:ZS,distance_frag:jS,equirect_vert:KS,equirect_frag:QS,linedashed_vert:tb,linedashed_frag:eb,meshbasic_vert:nb,meshbasic_frag:ib,meshlambert_vert:sb,meshlambert_frag:rb,meshmatcap_vert:ab,meshmatcap_frag:ob,meshnormal_vert:lb,meshnormal_frag:cb,meshphong_vert:ub,meshphong_frag:hb,meshphysical_vert:db,meshphysical_frag:fb,meshtoon_vert:pb,meshtoon_frag:mb,points_vert:gb,points_frag:_b,shadow_vert:xb,shadow_frag:vb,sprite_vert:yb,sprite_frag:Sb},Xt={common:{diffuse:{value:new ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Le}},envmap:{envMap:{value:null},envMapRotation:{value:new Le},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Le},normalScale:{value:new Vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new j},probesMax:{value:new j},probesResolution:{value:new j}},points:{diffuse:{value:new ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0},uvTransform:{value:new Le}},sprite:{diffuse:{value:new ye(16777215)},opacity:{value:1},center:{value:new Vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}}},ui={basic:{uniforms:ei([Xt.common,Xt.specularmap,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:ei([Xt.common,Xt.specularmap,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.fog,Xt.lights,{emissive:{value:new ye(0)},envMapIntensity:{value:1}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:ei([Xt.common,Xt.specularmap,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.fog,Xt.lights,{emissive:{value:new ye(0)},specular:{value:new ye(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:ei([Xt.common,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.roughnessmap,Xt.metalnessmap,Xt.fog,Xt.lights,{emissive:{value:new ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:ei([Xt.common,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.gradientmap,Xt.fog,Xt.lights,{emissive:{value:new ye(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:ei([Xt.common,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:ei([Xt.points,Xt.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:ei([Xt.common,Xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:ei([Xt.common,Xt.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:ei([Xt.common,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:ei([Xt.sprite,Xt.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new Le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Le}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distance:{uniforms:ei([Xt.common,Xt.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distance_vert,fragmentShader:Be.distance_frag},shadow:{uniforms:ei([Xt.lights,Xt.fog,{color:{value:new ye(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};ui.physical={uniforms:ei([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Le},clearcoatNormalScale:{value:new Vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Le},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Le},sheen:{value:0},sheenColor:{value:new ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Le},transmissionSamplerSize:{value:new Vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Le},attenuationDistance:{value:0},attenuationColor:{value:new ye(0)},specularColor:{value:new ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Le},anisotropyVector:{value:new Vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Le}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};var xh={r:0,b:0,g:0},bb=new qe,Tg=new Le;Tg.set(-1,0,0,0,1,0,0,0,1);function Mb(i,t,e,n,s,r){let a=new ye(0),l=s===!0?0:1,u,h,d=null,b=0,g=null;function M($){let V=$.isScene===!0?$.background:null;if(V&&V.isTexture){let D=$.backgroundBlurriness>0;V=t.get(V,D)}return V}function w($){let V=!1,D=M($);D===null?y(a,l):D&&D.isColor&&(y(D,1),V=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?e.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||V)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function N($,V){let D=M(V);D&&(D.isCubeTexture||D.mapping===yl)?(h===void 0&&(h=new kn(new La(1,1,1),new $n({name:"BackgroundCubeMaterial",uniforms:Or(ui.backgroundCube.uniforms),vertexShader:ui.backgroundCube.vertexShader,fragmentShader:ui.backgroundCube.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,k,q){this.matrixWorld.copyPosition(q.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=D,h.material.uniforms.backgroundBlurriness.value=V.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=V.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(bb.makeRotationFromEuler(V.backgroundRotation)).transpose(),D.isCubeTexture&&D.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(Tg),h.material.toneMapped=We.getTransfer(D.colorSpace)!==rn,(d!==D||b!==D.version||g!==i.toneMapping)&&(h.material.needsUpdate=!0,d=D,b=D.version,g=i.toneMapping),h.layers.enableAll(),$.unshift(h,h.geometry,h.material,0,0,null)):D&&D.isTexture&&(u===void 0&&(u=new kn(new ll(2,2),new $n({name:"BackgroundMaterial",uniforms:Or(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:rr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(u)),u.material.uniforms.t2D.value=D,u.material.uniforms.backgroundIntensity.value=V.backgroundIntensity,u.material.toneMapped=We.getTransfer(D.colorSpace)!==rn,D.matrixAutoUpdate===!0&&D.updateMatrix(),u.material.uniforms.uvTransform.value.copy(D.matrix),(d!==D||b!==D.version||g!==i.toneMapping)&&(u.material.needsUpdate=!0,d=D,b=D.version,g=i.toneMapping),u.layers.enableAll(),$.unshift(u,u.geometry,u.material,0,0,null))}function y($,V){$.getRGB(xh,Lf(i)),e.buffers.color.setClear(xh.r,xh.g,xh.b,V,r)}function m(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return a},setClearColor:function($,V=1){a.set($),l=V,y(a,l)},getClearAlpha:function(){return l},setClearAlpha:function($){l=$,y(a,l)},render:w,addToRenderList:N,dispose:m}}function wb(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=g(null),r=s,a=!1;function l(J,ot,ht,Q,st){let pt=!1,_t=b(J,Q,ht,ot);r!==_t&&(r=_t,h(r.object)),pt=M(J,Q,ht,st),pt&&w(J,Q,ht,st),st!==null&&t.update(st,i.ELEMENT_ARRAY_BUFFER),(pt||a)&&(a=!1,D(J,ot,ht,Q),st!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(st).buffer))}function u(){return i.createVertexArray()}function h(J){return i.bindVertexArray(J)}function d(J){return i.deleteVertexArray(J)}function b(J,ot,ht,Q){let st=Q.wireframe===!0,pt=n[ot.id];pt===void 0&&(pt={},n[ot.id]=pt);let _t=J.isInstancedMesh===!0?J.id:0,At=pt[_t];At===void 0&&(At={},pt[_t]=At);let xt=At[ht.id];xt===void 0&&(xt={},At[ht.id]=xt);let Et=xt[st];return Et===void 0&&(Et=g(u()),xt[st]=Et),Et}function g(J){let ot=[],ht=[],Q=[];for(let st=0;st<e;st++)ot[st]=0,ht[st]=0,Q[st]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ot,enabledAttributes:ht,attributeDivisors:Q,object:J,attributes:{},index:null}}function M(J,ot,ht,Q){let st=r.attributes,pt=ot.attributes,_t=0,At=ht.getAttributes();for(let xt in At)if(At[xt].location>=0){let wt=st[xt],$t=pt[xt];if($t===void 0&&(xt==="instanceMatrix"&&J.instanceMatrix&&($t=J.instanceMatrix),xt==="instanceColor"&&J.instanceColor&&($t=J.instanceColor)),wt===void 0||wt.attribute!==$t||$t&&wt.data!==$t.data)return!0;_t++}return r.attributesNum!==_t||r.index!==Q}function w(J,ot,ht,Q){let st={},pt=ot.attributes,_t=0,At=ht.getAttributes();for(let xt in At)if(At[xt].location>=0){let wt=pt[xt];wt===void 0&&(xt==="instanceMatrix"&&J.instanceMatrix&&(wt=J.instanceMatrix),xt==="instanceColor"&&J.instanceColor&&(wt=J.instanceColor));let $t={};$t.attribute=wt,wt&&wt.data&&($t.data=wt.data),st[xt]=$t,_t++}r.attributes=st,r.attributesNum=_t,r.index=Q}function N(){let J=r.newAttributes;for(let ot=0,ht=J.length;ot<ht;ot++)J[ot]=0}function y(J){m(J,0)}function m(J,ot){let ht=r.newAttributes,Q=r.enabledAttributes,st=r.attributeDivisors;ht[J]=1,Q[J]===0&&(i.enableVertexAttribArray(J),Q[J]=1),st[J]!==ot&&(i.vertexAttribDivisor(J,ot),st[J]=ot)}function $(){let J=r.newAttributes,ot=r.enabledAttributes;for(let ht=0,Q=ot.length;ht<Q;ht++)ot[ht]!==J[ht]&&(i.disableVertexAttribArray(ht),ot[ht]=0)}function V(J,ot,ht,Q,st,pt,_t){_t===!0?i.vertexAttribIPointer(J,ot,ht,st,pt):i.vertexAttribPointer(J,ot,ht,Q,st,pt)}function D(J,ot,ht,Q){N();let st=Q.attributes,pt=ht.getAttributes(),_t=ot.defaultAttributeValues;for(let At in pt){let xt=pt[At];if(xt.location>=0){let Et=st[At];if(Et===void 0&&(At==="instanceMatrix"&&J.instanceMatrix&&(Et=J.instanceMatrix),At==="instanceColor"&&J.instanceColor&&(Et=J.instanceColor)),Et!==void 0){let wt=Et.normalized,$t=Et.itemSize,ne=t.get(Et);if(ne===void 0)continue;let Ye=ne.buffer,Ne=ne.type,He=ne.bytesPerElement,yt=Ne===i.INT||Ne===i.UNSIGNED_INT||Et.gpuType===Lu;if(Et.isInterleavedBufferAttribute){let St=Et.data,Ut=St.stride,ue=Et.offset;if(St.isInstancedInterleavedBuffer){for(let jt=0;jt<xt.locationSize;jt++)m(xt.location+jt,St.meshPerAttribute);J.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let jt=0;jt<xt.locationSize;jt++)y(xt.location+jt);i.bindBuffer(i.ARRAY_BUFFER,Ye);for(let jt=0;jt<xt.locationSize;jt++)V(xt.location+jt,$t/xt.locationSize,Ne,wt,Ut*He,(ue+$t/xt.locationSize*jt)*He,yt)}else{if(Et.isInstancedBufferAttribute){for(let St=0;St<xt.locationSize;St++)m(xt.location+St,Et.meshPerAttribute);J.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=Et.meshPerAttribute*Et.count)}else for(let St=0;St<xt.locationSize;St++)y(xt.location+St);i.bindBuffer(i.ARRAY_BUFFER,Ye);for(let St=0;St<xt.locationSize;St++)V(xt.location+St,$t/xt.locationSize,Ne,wt,$t*He,$t/xt.locationSize*St*He,yt)}}else if(_t!==void 0){let wt=_t[At];if(wt!==void 0)switch(wt.length){case 2:i.vertexAttrib2fv(xt.location,wt);break;case 3:i.vertexAttrib3fv(xt.location,wt);break;case 4:i.vertexAttrib4fv(xt.location,wt);break;default:i.vertexAttrib1fv(xt.location,wt)}}}}$()}function T(){B();for(let J in n){let ot=n[J];for(let ht in ot){let Q=ot[ht];for(let st in Q){let pt=Q[st];for(let _t in pt)d(pt[_t].object),delete pt[_t];delete Q[st]}}delete n[J]}}function k(J){if(n[J.id]===void 0)return;let ot=n[J.id];for(let ht in ot){let Q=ot[ht];for(let st in Q){let pt=Q[st];for(let _t in pt)d(pt[_t].object),delete pt[_t];delete Q[st]}}delete n[J.id]}function q(J){for(let ot in n){let ht=n[ot];for(let Q in ht){let st=ht[Q];if(st[J.id]===void 0)continue;let pt=st[J.id];for(let _t in pt)d(pt[_t].object),delete pt[_t];delete st[J.id]}}}function R(J){for(let ot in n){let ht=n[ot],Q=J.isInstancedMesh===!0?J.id:0,st=ht[Q];if(st!==void 0){for(let pt in st){let _t=st[pt];for(let At in _t)d(_t[At].object),delete _t[At];delete st[pt]}delete ht[Q],Object.keys(ht).length===0&&delete n[ot]}}}function B(){X(),a=!0,r!==s&&(r=s,h(r.object))}function X(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:l,reset:B,resetDefaultState:X,dispose:T,releaseStatesOfGeometry:k,releaseStatesOfObject:R,releaseStatesOfProgram:q,initAttributes:N,enableAttribute:y,disableUnusedAttributes:$}}function Eb(i,t,e){let n;function s(u){n=u}function r(u,h){i.drawArrays(n,u,h),e.update(h,n,1)}function a(u,h,d){d!==0&&(i.drawArraysInstanced(n,u,h,d),e.update(h,n,d))}function l(u,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,h,0,d);let g=0;for(let M=0;M<d;M++)g+=h[M];e.update(g,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=l}function Tb(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let q=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(q.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(q){return!(q!==Ui&&n.convert(q)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(q){let R=q===Ki&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(q!==Si&&q!==Ni&&!R&&n.convert(q)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function u(q){if(q==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";q="mediump"}return q==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp",d=u(h);d!==h&&(be("WebGLRenderer:",h,"not supported, using",d,"instead."),h=d);let b=e.logarithmicDepthBuffer===!0,g=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&g===!1&&be("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let M=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),w=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),N=i.getParameter(i.MAX_TEXTURE_SIZE),y=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),$=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),V=i.getParameter(i.MAX_VARYING_VECTORS),D=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),k=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:u,textureFormatReadable:a,textureTypeReadable:l,precision:h,logarithmicDepthBuffer:b,reversedDepthBuffer:g,maxTextures:M,maxVertexTextures:w,maxTextureSize:N,maxCubemapSize:y,maxAttributes:m,maxVertexUniforms:$,maxVaryings:V,maxFragmentUniforms:D,maxSamples:T,samples:k}}function Ab(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Wi,l=new Le,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(b,g){let M=b.length!==0||g||n!==0||s;return s=g,n=b.length,M},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(b,g){e=d(b,g,0)},this.setState=function(b,g,M){let w=b.clippingPlanes,N=b.clipIntersection,y=b.clipShadows,m=i.get(b);if(!s||w===null||w.length===0||r&&!y)r?d(null):h();else{let $=r?0:n,V=$*4,D=m.clippingState||null;u.value=D,D=d(w,g,V,M);for(let T=0;T!==V;++T)D[T]=e[T];m.clippingState=D,this.numIntersection=N?this.numPlanes:0,this.numPlanes+=$}};function h(){u.value!==e&&(u.value=e,u.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(b,g,M,w){let N=b!==null?b.length:0,y=null;if(N!==0){if(y=u.value,w!==!0||y===null){let m=M+N*4,$=g.matrixWorldInverse;l.getNormalMatrix($),(y===null||y.length<m)&&(y=new Float32Array(m));for(let V=0,D=M;V!==N;++V,D+=4)a.copy(b[V]).applyMatrix4($,l),a.normal.toArray(y,D),y[D+3]=a.constant}u.value=y,u.needsUpdate=!0}return t.numPlanes=N,t.numIntersection=0,y}}var Va=4,Cb=6,Rb=20,Ib=256,Rl=new Oa,sg=new ye,Of=null,Ff=0,Bf=0,kf=!1,Pb=new j,Fr=new j,yh=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:l=Pb}=r;Of=this._renderer.getRenderTarget(),Ff=this._renderer.getActiveCubeFace(),Bf=this._renderer.getActiveMipmapLevel(),kf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(t,n,s,u,l),e>0&&this._blur(u,0,0,e),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=og(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ag(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Of,Ff,Bf),this._renderer.xr.enabled=kf,t.scissorTest=!1,za(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ar||t.mapping===Ur?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Of=this._renderer.getRenderTarget(),Ff=this._renderer.getActiveCubeFace(),Bf=this._renderer.getActiveMipmapLevel(),kf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Wn,minFilter:Wn,generateMipmaps:!1,type:Ki,format:Ui,colorSpace:ko,depthBuffer:!1},s=rg(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rg(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Lb(r)),this._blurMaterial=Nb(r,t,e),this._ggxMaterial=Db(r,t,e)}return s}_compileMaterial(t){let e=new kn(new Mn,t);this._renderer.compile(e,Rl)}_sceneToCubeUV(t,e,n,s,r){let u=new ti(90,1,e,n),h=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],b=this._renderer,g=b.autoClear,M=b.toneMapping;b.getClearColor(sg),b.toneMapping=Zi,b.autoClear=!1,b.state.buffers.depth.getReversed()&&(b.setRenderTarget(s),b.clearDepth(),b.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new kn(new La,new Rr({name:"PMREM.Background",side:ci,depthWrite:!1,depthTest:!1})));let N=this._backgroundBox,y=N.material,m=!1,$=t.background;$?$.isColor&&(y.color.copy($),t.background=null,m=!0):(y.color.copy(sg),m=!0);for(let V=0;V<6;V++){let D=V%3;D===0?(u.up.set(0,h[V],0),u.position.set(r.x,r.y,r.z),u.lookAt(r.x+d[V],r.y,r.z)):D===1?(u.up.set(0,0,h[V]),u.position.set(r.x,r.y,r.z),u.lookAt(r.x,r.y+d[V],r.z)):(u.up.set(0,h[V],0),u.position.set(r.x,r.y,r.z),u.lookAt(r.x,r.y,r.z+d[V]));let T=this._cubeSize;za(s,D*T,V>2?T:0,T,T),b.setRenderTarget(s),m&&b.render(N,u),b.render(t,u)}b.toneMapping=M,b.autoClear=g,t.background=$}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ar||t.mapping===Ur;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=og()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ag());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let l=r.uniforms;l.envMap.value=t;let u=this._cubeSize;za(e,0,0,3*u,2*u),n.setRenderTarget(e),n.render(a,Rl)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,l=this._lodMeshes[n];l.material=a;let u=a.uniforms,h=n/(this._lodMeshes.length-1),d=e/(this._lodMeshes.length-1),b=Math.sqrt(h*h-d*d),g=h*1.25,M=b*g,{_lodMax:w}=this,N=this._sizeLods[n],y=3*N*(n>w-Va?n-w+Va:0),m=4*(this._cubeSize-N);u.envMap.value=t.texture,u.roughness.value=M,u.mipInt.value=w-e,za(r,y,m,3*N,2*N),s.setRenderTarget(r),s.render(l,Rl),u.envMap.value=r.texture,u.roughness.value=0,u.mipInt.value=w-n,za(t,y,m,3*N,2*N),s.setRenderTarget(t),s.render(l,Rl)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,l=this._blurMaterial,u=this._lodMeshes[s];u.material=l;let h=l.uniforms;h.envMap.value=t.texture,h.sigma.value=r,h.mipInt.value=this._lodMax-n;let d=this._sizeLods[s],b=3*d*(s>this._lodMax-Va?s-this._lodMax+Va:0),g=4*(this._cubeSize-d);za(e,b,g,3*d,2*d),a.setRenderTarget(e),a.render(u,Rl)}};function Lb(i){let t=[],e=[],n=i,s=i-Va+1+Cb;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],b=6,g=6,M=3,w=new Float32Array(M*g*b),N=new Float32Array(M*g*b);for(let m=0;m<b;m++){let $=m%3*2/3-1,V=m>2?0:-1,D=[$,V,0,$+2/3,V,0,$+2/3,V+1,0,$,V,0,$+2/3,V+1,0,$,V+1,0];w.set(D,M*g*m);for(let T=0;T<g;T++){let k=d[T*2]*2-1,q=d[T*2+1]*2-1;m===0?Fr.set(1,q,k):m===1?Fr.set(-k,1,-q):m===2?Fr.set(-k,q,1):m===3?Fr.set(-1,q,-k):m===4?Fr.set(-k,-1,q):Fr.set(k,q,-1),Fr.toArray(N,(m*g+T)*M)}}let y=new Mn;y.setAttribute("position",new un(w,M)),y.setAttribute("outputDirection",new un(N,M)),e.push(new kn(y,null)),n>Va&&n--}return{lodMeshes:e,sizeLods:t}}function rg(i,t,e){let n=new vi(i,t,e);return n.texture.mapping=yl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function za(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Db(i,t,e){return new $n({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Ib,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Mh(),fragmentShader:`

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
		`,blending:ds,depthTest:!1,depthWrite:!1})}function Nb(i,t,e){return new $n({name:"SphericalGaussianBlur",defines:{SAMPLES:Rb,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Mh(),fragmentShader:`

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
		`,blending:ds,depthTest:!1,depthWrite:!1})}function ag(){return new $n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mh(),fragmentShader:`

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
		`,blending:ds,depthTest:!1,depthWrite:!1})}function og(){return new $n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ds,depthTest:!1,depthWrite:!1})}function Mh(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Sh=class extends vi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new jo(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new La(5,5,5),r=new $n({name:"CubemapFromEquirect",uniforms:Or(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ci,blending:ds});r.uniforms.tEquirect.value=e;let a=new kn(s,r),l=e.minFilter;return e.minFilter===or&&(e.minFilter=Wn),new Tu(1,10,this).update(t,a),e.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function Ub(i){let t=new WeakMap,e=new WeakMap,n=null;function s(g,M=!1){return g==null?null:M?a(g):r(g)}function r(g){if(g&&g.isTexture){let M=g.mapping;if(M===Ru||M===Iu)if(t.has(g)){let w=t.get(g).texture;return l(w,g.mapping)}else{let w=g.image;if(w&&w.height>0){let N=new Sh(w.height);return N.fromEquirectangularTexture(i,g),t.set(g,N),g.addEventListener("dispose",h),l(N.texture,g.mapping)}else return null}}return g}function a(g){if(g&&g.isTexture){let M=g.mapping,w=M===Ru||M===Iu,N=M===ar||M===Ur;if(w||N){let y=e.get(g),m=y!==void 0?y.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==m)return n===null&&(n=new yh(i)),y=w?n.fromEquirectangular(g,y):n.fromCubemap(g,y),y.texture.pmremVersion=g.pmremVersion,e.set(g,y),y.texture;if(y!==void 0)return y.texture;{let $=g.image;return w&&$&&$.height>0||N&&$&&u($)?(n===null&&(n=new yh(i)),y=w?n.fromEquirectangular(g):n.fromCubemap(g),y.texture.pmremVersion=g.pmremVersion,e.set(g,y),g.addEventListener("dispose",d),y.texture):null}}}return g}function l(g,M){return M===Ru?g.mapping=ar:M===Iu&&(g.mapping=Ur),g}function u(g){let M=0,w=6;for(let N=0;N<w;N++)g[N]!==void 0&&M++;return M===w}function h(g){let M=g.target;M.removeEventListener("dispose",h);let w=t.get(M);w!==void 0&&(t.delete(M),w.dispose())}function d(g){let M=g.target;M.removeEventListener("dispose",d);let w=e.get(M);w!==void 0&&(e.delete(M),w.dispose())}function b(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:b}}function Ob(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Ar("WebGLRenderer: "+n+" extension not supported."),s}}}function Fb(i,t,e,n){let s={},r=new WeakMap;function a(b){let g=b.target;g.index!==null&&t.remove(g.index);for(let w in g.attributes)t.remove(g.attributes[w]);g.removeEventListener("dispose",a),delete s[g.id];let M=r.get(g);M&&(t.remove(M),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function l(b,g){return s[g.id]===!0||(g.addEventListener("dispose",a),s[g.id]=!0,e.memory.geometries++),g}function u(b){let g=b.attributes;for(let M in g)t.update(g[M],i.ARRAY_BUFFER)}function h(b){let g=[],M=b.index,w=b.attributes.position,N=0;if(w===void 0)return;if(M!==null){let $=M.array;N=M.version;for(let V=0,D=$.length;V<D;V+=3){let T=$[V+0],k=$[V+1],q=$[V+2];g.push(T,k,k,q,q,T)}}else{let $=w.array;N=w.version;for(let V=0,D=$.length/3-1;V<D;V+=3){let T=V+0,k=V+1,q=V+2;g.push(T,k,k,q,q,T)}}let y=new(w.count>=65535?Xo:Wo)(g,1);y.version=N;let m=r.get(b);m&&t.remove(m),r.set(b,y)}function d(b){let g=r.get(b);if(g){let M=b.index;M!==null&&g.version<M.version&&h(b)}else h(b);return r.get(b)}return{get:l,update:u,getWireframeAttribute:d}}function Bb(i,t,e){let n;function s(b){n=b}let r,a;function l(b){r=b.type,a=b.bytesPerElement}function u(b,g){i.drawElements(n,g,r,b*a),e.update(g,n,1)}function h(b,g,M){M!==0&&(i.drawElementsInstanced(n,g,r,b*a,M),e.update(g,n,M))}function d(b,g,M){if(M===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,g,0,r,b,0,M);let N=0;for(let y=0;y<M;y++)N+=g[y];e.update(N,n,1)}this.setMode=s,this.setIndex=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d}function kb(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,l){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=l*(r/3);break;case i.LINES:e.lines+=l*(r/2);break;case i.LINE_STRIP:e.lines+=l*(r-1);break;case i.LINE_LOOP:e.lines+=l*r;break;case i.POINTS:e.points+=l*r;break;default:Ee("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function $b(i,t,e){let n=new WeakMap,s=new an;function r(a,l,u){let h=a.morphTargetInfluences,d=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,b=d!==void 0?d.length:0,g=n.get(l);if(g===void 0||g.count!==b){let B=function(){q.dispose(),n.delete(l),l.removeEventListener("dispose",B)};g!==void 0&&g.texture.dispose();let M=l.morphAttributes.position!==void 0,w=l.morphAttributes.normal!==void 0,N=l.morphAttributes.color!==void 0,y=l.morphAttributes.position||[],m=l.morphAttributes.normal||[],$=l.morphAttributes.color||[],V=0;M===!0&&(V=1),w===!0&&(V=2),N===!0&&(V=3);let D=l.attributes.position.count*V,T=1;D>t.maxTextureSize&&(T=Math.ceil(D/t.maxTextureSize),D=t.maxTextureSize);let k=new Float32Array(D*T*4*b),q=new Ho(k,D,T,b);q.type=Ni,q.needsUpdate=!0;let R=V*4;for(let X=0;X<b;X++){let J=y[X],ot=m[X],ht=$[X],Q=D*T*4*X;for(let st=0;st<J.count;st++){let pt=st*R;M===!0&&(s.fromBufferAttribute(J,st),k[Q+pt+0]=s.x,k[Q+pt+1]=s.y,k[Q+pt+2]=s.z,k[Q+pt+3]=0),w===!0&&(s.fromBufferAttribute(ot,st),k[Q+pt+4]=s.x,k[Q+pt+5]=s.y,k[Q+pt+6]=s.z,k[Q+pt+7]=0),N===!0&&(s.fromBufferAttribute(ht,st),k[Q+pt+8]=s.x,k[Q+pt+9]=s.y,k[Q+pt+10]=s.z,k[Q+pt+11]=ht.itemSize===4?s.w:1)}}g={count:b,texture:q,size:new Vt(D,T)},n.set(l,g),l.addEventListener("dispose",B)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)u.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let M=0;for(let N=0;N<h.length;N++)M+=h[N];let w=l.morphTargetsRelative?1:1-M;u.getUniforms().setValue(i,"morphTargetBaseInfluence",w),u.getUniforms().setValue(i,"morphTargetInfluences",h)}u.getUniforms().setValue(i,"morphTargetsTexture",g.texture,e),u.getUniforms().setValue(i,"morphTargetsTextureSize",g.size)}return{update:r}}function zb(i,t,e,n,s){let r=new WeakMap;function a(h){let d=s.render.frame,b=h.geometry,g=t.get(h,b);if(r.get(g)!==d&&(t.update(g),r.set(g,d)),h.isInstancedMesh&&(h.hasEventListener("dispose",u)===!1&&h.addEventListener("dispose",u),r.get(h)!==d&&(e.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,i.ARRAY_BUFFER),r.set(h,d))),h.isSkinnedMesh){let M=h.skeleton;r.get(M)!==d&&(M.update(),r.set(M,d))}return g}function l(){r=new WeakMap}function u(h){let d=h.target;d.removeEventListener("dispose",u),n.releaseStatesOfObject(d),e.remove(d.instanceMatrix),d.instanceColor!==null&&e.remove(d.instanceColor)}return{update:a,dispose:l}}var Vb={[ff]:"LINEAR_TONE_MAPPING",[pf]:"REINHARD_TONE_MAPPING",[mf]:"CINEON_TONE_MAPPING",[gf]:"ACES_FILMIC_TONE_MAPPING",[xf]:"AGX_TONE_MAPPING",[vf]:"NEUTRAL_TONE_MAPPING",[_f]:"CUSTOM_TONE_MAPPING"};function Hb(i,t,e,n,s,r){let a=new vi(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),l=null,u=null,h=new Mn;h.setAttribute("position",new bn([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new bn([0,2,0,0,2,0],2));let d=new du({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),b=new kn(h,d),g=new Oa(-1,1,1,-1,0,1),M=null,w=null,N=!1,y,m=null,$=[],V=!1;this.setSize=function(D,T){a.setSize(D,T),l!==null&&l.setSize(D,T),u!==null&&u.setSize(D,T);for(let k=0;k<$.length;k++){let q=$[k];q.setSize&&q.setSize(D,T)}},this.setEffects=function(D){$=D,V=$.length>0&&$[0].isRenderPass===!0;let T=a.width,k=a.height;$.length>0&&l===null&&(l=new vi(T,k,{type:Ki,depthBuffer:!1,stencilBuffer:!1}),u=new vi(T,k,{type:Ki,depthBuffer:!1,stencilBuffer:!1}));for(let q=0;q<$.length;q++){let R=$[q];R.setSize&&R.setSize(T,k)}},this.begin=function(D,T){if(N||D.toneMapping===Zi&&$.length===0)return!1;if(m=T,T!==null){let k=T.width,q=T.height;(a.width!==k||a.height!==q)&&this.setSize(k,q)}return V===!1&&D.setRenderTarget(a),y=D.toneMapping,D.toneMapping=Zi,!0},this.hasRenderPass=function(){return V},this.end=function(D,T){D.toneMapping=y,N=!0;let k=a,q=l;for(let R=0;R<$.length;R++){let B=$[R];B.enabled!==!1&&(B.render(D,q,k,T),B.needsSwap!==!1&&(k=q,q=q===l?u:l))}if(M!==D.outputColorSpace||w!==D.toneMapping){M=D.outputColorSpace,w=D.toneMapping,d.defines={},We.getTransfer(M)===rn&&(d.defines.SRGB_TRANSFER="");let R=Vb[w];R&&(d.defines[R]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=k.texture,D.setRenderTarget(m),D.render(b,g),m=null,N=!1},this.isCompositing=function(){return N},this.dispose=function(){a.dispose(),l!==null&&l.dispose(),u!==null&&u.dispose(),h.dispose(),d.dispose()}}var Ag=new xi,Vf=new tr(1,1),Cg=new Ho,Rg=new Qc,Ig=new jo,lg=[],cg=[],ug=new Float32Array(16),hg=new Float32Array(9),dg=new Float32Array(4);function Ga(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=lg[s];if(r===void 0&&(r=new Float32Array(s),lg[s]=r),t!==0){n.toArray(r,0);for(let a=1,l=0;a!==t;++a)l+=e,i[a].toArray(r,l)}return r}function Ln(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Dn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function wh(i,t){let e=cg[t];e===void 0&&(e=new Int32Array(t),cg[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Gb(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Wb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ln(e,t))return;i.uniform2fv(this.addr,t),Dn(e,t)}}function Xb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ln(e,t))return;i.uniform3fv(this.addr,t),Dn(e,t)}}function qb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ln(e,t))return;i.uniform4fv(this.addr,t),Dn(e,t)}}function Yb(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ln(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Dn(e,t)}else{if(Ln(e,n))return;dg.set(n),i.uniformMatrix2fv(this.addr,!1,dg),Dn(e,n)}}function Jb(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ln(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Dn(e,t)}else{if(Ln(e,n))return;hg.set(n),i.uniformMatrix3fv(this.addr,!1,hg),Dn(e,n)}}function Zb(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ln(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Dn(e,t)}else{if(Ln(e,n))return;ug.set(n),i.uniformMatrix4fv(this.addr,!1,ug),Dn(e,n)}}function jb(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Kb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ln(e,t))return;i.uniform2iv(this.addr,t),Dn(e,t)}}function Qb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ln(e,t))return;i.uniform3iv(this.addr,t),Dn(e,t)}}function tM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ln(e,t))return;i.uniform4iv(this.addr,t),Dn(e,t)}}function eM(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function nM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ln(e,t))return;i.uniform2uiv(this.addr,t),Dn(e,t)}}function iM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ln(e,t))return;i.uniform3uiv(this.addr,t),Dn(e,t)}}function sM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ln(e,t))return;i.uniform4uiv(this.addr,t),Dn(e,t)}}function rM(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Vf.compareFunction=e.isReversedDepthBuffer()?_h:gh,r=Vf):r=Ag,e.setTexture2D(t||r,s)}function aM(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Rg,s)}function oM(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Ig,s)}function lM(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Cg,s)}function cM(i){switch(i){case 5126:return Gb;case 35664:return Wb;case 35665:return Xb;case 35666:return qb;case 35674:return Yb;case 35675:return Jb;case 35676:return Zb;case 5124:case 35670:return jb;case 35667:case 35671:return Kb;case 35668:case 35672:return Qb;case 35669:case 35673:return tM;case 5125:return eM;case 36294:return nM;case 36295:return iM;case 36296:return sM;case 35678:case 36198:case 36298:case 36306:case 35682:return rM;case 35679:case 36299:case 36307:return aM;case 35680:case 36300:case 36308:case 36293:return oM;case 36289:case 36303:case 36311:case 36292:return lM}}function uM(i,t){i.uniform1fv(this.addr,t)}function hM(i,t){let e=Ga(t,this.size,2);i.uniform2fv(this.addr,e)}function dM(i,t){let e=Ga(t,this.size,3);i.uniform3fv(this.addr,e)}function fM(i,t){let e=Ga(t,this.size,4);i.uniform4fv(this.addr,e)}function pM(i,t){let e=Ga(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function mM(i,t){let e=Ga(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function gM(i,t){let e=Ga(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function _M(i,t){i.uniform1iv(this.addr,t)}function xM(i,t){i.uniform2iv(this.addr,t)}function vM(i,t){i.uniform3iv(this.addr,t)}function yM(i,t){i.uniform4iv(this.addr,t)}function SM(i,t){i.uniform1uiv(this.addr,t)}function bM(i,t){i.uniform2uiv(this.addr,t)}function MM(i,t){i.uniform3uiv(this.addr,t)}function wM(i,t){i.uniform4uiv(this.addr,t)}function EM(i,t,e){let n=this.cache,s=t.length,r=wh(e,s);Ln(n,r)||(i.uniform1iv(this.addr,r),Dn(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Vf:a=Ag;for(let l=0;l!==s;++l)e.setTexture2D(t[l]||a,r[l])}function TM(i,t,e){let n=this.cache,s=t.length,r=wh(e,s);Ln(n,r)||(i.uniform1iv(this.addr,r),Dn(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Rg,r[a])}function AM(i,t,e){let n=this.cache,s=t.length,r=wh(e,s);Ln(n,r)||(i.uniform1iv(this.addr,r),Dn(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Ig,r[a])}function CM(i,t,e){let n=this.cache,s=t.length,r=wh(e,s);Ln(n,r)||(i.uniform1iv(this.addr,r),Dn(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Cg,r[a])}function RM(i){switch(i){case 5126:return uM;case 35664:return hM;case 35665:return dM;case 35666:return fM;case 35674:return pM;case 35675:return mM;case 35676:return gM;case 5124:case 35670:return _M;case 35667:case 35671:return xM;case 35668:case 35672:return vM;case 35669:case 35673:return yM;case 5125:return SM;case 36294:return bM;case 36295:return MM;case 36296:return wM;case 35678:case 36198:case 36298:case 36306:case 35682:return EM;case 35679:case 36299:case 36307:return TM;case 35680:case 36300:case 36308:case 36293:return AM;case 36289:case 36303:case 36311:case 36292:return CM}}var Hf=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=cM(e.type)}},Gf=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=RM(e.type)}},Wf=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let l=s[r];l.setValue(t,e[l.id],n)}}},$f=/(\w+)(\])?(\[|\.)?/g;function fg(i,t){i.seq.push(t),i.map[t.id]=t}function IM(i,t,e){let n=i.name,s=n.length;for($f.lastIndex=0;;){let r=$f.exec(n),a=$f.lastIndex,l=r[1],u=r[2]==="]",h=r[3];if(u&&(l=l|0),h===void 0||h==="["&&a+2===s){fg(e,h===void 0?new Hf(l,i,t):new Gf(l,i,t));break}else{let b=e.map[l];b===void 0&&(b=new Wf(l),fg(e,b)),e=b}}}var Ha=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let l=t.getActiveUniform(e,a),u=t.getUniformLocation(e,l.name);IM(l,u,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let l=e[r],u=n[l.id];u.needsUpdate!==!1&&l.setValue(t,u.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function pg(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var PM=37297,LM=0;function DM(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let l=a+1;n.push(`${l===t?">":" "} ${l}: ${e[a]}`)}return n.join(`
`)}var mg=new Le;function NM(i){We._getMatrix(mg,We.workingColorSpace,i);let t=`mat3( ${mg.elements.map(e=>e.toFixed(4))} )`;switch(We.getTransfer(i)){case $o:return[t,"LinearTransferOETF"];case rn:return[t,"sRGBTransferOETF"];default:return be("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function gg(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let l=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+DM(i.getShaderSource(t),l)}else return r}function UM(i,t){let e=NM(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var OM={[ff]:"Linear",[pf]:"Reinhard",[mf]:"Cineon",[gf]:"ACESFilmic",[xf]:"AgX",[vf]:"Neutral",[_f]:"Custom"};function FM(i,t){let e=OM[t];return e===void 0?(be("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var vh=new j;function BM(){We.getLuminanceCoefficients(vh);let i=vh.x.toFixed(4),t=vh.y.toFixed(4),e=vh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function kM(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Pl).join(`
`)}function $M(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function zM(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,l=1;r.type===i.FLOAT_MAT2&&(l=2),r.type===i.FLOAT_MAT3&&(l=3),r.type===i.FLOAT_MAT4&&(l=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:l}}return e}function Pl(i){return i!==""}function _g(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function xg(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var VM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xf(i){return i.replace(VM,GM)}var HM=new Map;function GM(i,t){let e=Be[t];if(e===void 0){let n=HM.get(t);if(n!==void 0)e=Be[n],be('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Xf(e)}var WM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vg(i){return i.replace(WM,XM)}function XM(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function yg(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var qM={[vl]:"SHADOWMAP_TYPE_PCF",[Fa]:"SHADOWMAP_TYPE_VSM"};function YM(i){return qM[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var JM={[ar]:"ENVMAP_TYPE_CUBE",[Ur]:"ENVMAP_TYPE_CUBE",[yl]:"ENVMAP_TYPE_CUBE_UV"};function ZM(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":JM[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var jM={[Ur]:"ENVMAP_MODE_REFRACTION"};function KM(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":jM[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var QM={[Cu]:"ENVMAP_BLENDING_MULTIPLY",[U0]:"ENVMAP_BLENDING_MIX",[O0]:"ENVMAP_BLENDING_ADD"};function t1(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":QM[i.combine]||"ENVMAP_BLENDING_NONE"}function e1(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function n1(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,l=e.fragmentShader,u=YM(e),h=ZM(e),d=KM(e),b=t1(e),g=e1(e),M=kM(e),w=$M(r),N=s.createProgram(),y,m,$=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(y=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w].filter(Pl).join(`
`),y.length>0&&(y+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w].filter(Pl).join(`
`),m.length>0&&(m+=`
`)):(y=[yg(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+u:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pl).join(`
`),m=[yg(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMap?"#define "+b:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+u:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Zi?"#define TONE_MAPPING":"",e.toneMapping!==Zi?Be.tonemapping_pars_fragment:"",e.toneMapping!==Zi?FM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,UM("linearToOutputTexel",e.outputColorSpace),BM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Pl).join(`
`)),a=Xf(a),a=_g(a,e),a=xg(a,e),l=Xf(l),l=_g(l,e),l=xg(l,e),a=vg(a),l=vg(l),e.isRawShaderMaterial!==!0&&($=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,m=["#define varying in",e.glslVersion===Cf?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Cf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let V=$+y+a,D=$+m+l,T=pg(s,s.VERTEX_SHADER,V),k=pg(s,s.FRAGMENT_SHADER,D);s.attachShader(N,T),s.attachShader(N,k),e.index0AttributeName!==void 0?s.bindAttribLocation(N,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(N,0,"position"),s.linkProgram(N);function q(J){if(i.debug.checkShaderErrors){let ot=s.getProgramInfoLog(N)||"",ht=s.getShaderInfoLog(T)||"",Q=s.getShaderInfoLog(k)||"",st=ot.trim(),pt=ht.trim(),_t=Q.trim(),At=!0,xt=!0;if(s.getProgramParameter(N,s.LINK_STATUS)===!1)if(At=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,N,T,k);else{let Et=gg(s,T,"vertex"),wt=gg(s,k,"fragment");Ee("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(N,s.VALIDATE_STATUS)+`

Material Name: `+J.name+`
Material Type: `+J.type+`

Program Info Log: `+st+`
`+Et+`
`+wt)}else st!==""?be("WebGLProgram: Program Info Log:",st):(pt===""||_t==="")&&(xt=!1);xt&&(J.diagnostics={runnable:At,programLog:st,vertexShader:{log:pt,prefix:y},fragmentShader:{log:_t,prefix:m}})}s.deleteShader(T),s.deleteShader(k),R=new Ha(s,N),B=zM(s,N)}let R;this.getUniforms=function(){return R===void 0&&q(this),R};let B;this.getAttributes=function(){return B===void 0&&q(this),B};let X=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return X===!1&&(X=s.getProgramParameter(N,PM)),X},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(N),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=LM++,this.cacheKey=t,this.usedTimes=1,this.program=N,this.vertexShader=T,this.fragmentShader=k,this}var i1=0,qf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Yf(t),e.set(t,n)),n}},Yf=class{constructor(t){this.id=i1++,this.code=t,this.usedTimes=0}};function s1(i){return i===cr||i===Tl||i===Al}function r1(i,t,e,n,s,r){let a=new Ra,l=new qf,u=new Set,h=[],d=new Map,b=n.logarithmicDepthBuffer,g=n.precision,M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(R){return u.add(R),R===0?"uv":`uv${R}`}function N(R,B,X,J,ot,ht){let Q=J.fog,st=ot.geometry,pt=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?J.environment:null,_t=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap,At=t.get(R.envMap||pt,_t),xt=At&&At.mapping===yl?At.image.height:null,Et=M[R.type];R.precision!==null&&(g=n.getMaxPrecision(R.precision),g!==R.precision&&be("WebGLProgram.getParameters:",R.precision,"not supported, using",g,"instead."));let wt=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,$t=wt!==void 0?wt.length:0,ne=0;st.morphAttributes.position!==void 0&&(ne=1),st.morphAttributes.normal!==void 0&&(ne=2),st.morphAttributes.color!==void 0&&(ne=3);let Ye,Ne,He,yt;if(Et){let Ke=ui[Et];Ye=Ke.vertexShader,Ne=Ke.fragmentShader}else{Ye=R.vertexShader,Ne=R.fragmentShader;let Ke=l.getVertexShaderStage(R),Je=l.getFragmentShaderStage(R);l.update(R,Ke,Je),He=Ke.id,yt=Je.id}let St=i.getRenderTarget(),Ut=i.state.buffers.depth.getReversed(),ue=ot.isInstancedMesh===!0,jt=ot.isBatchedMesh===!0,ge=!!R.map,te=!!R.matcap,rt=!!At,It=!!R.aoMap,H=!!R.lightMap,Lt=!!R.bumpMap&&R.wireframe===!1,kt=!!R.normalMap,ce=!!R.displacementMap,fe=!!R.emissiveMap,de=!!R.metalnessMap,Ce=!!R.roughnessMap,Z=R.anisotropy>0,Oe=R.clearcoat>0,Ue=R.dispersion>0,F=R.retroreflectivity>0,E=R.iridescence>0,at=R.sheen>0,ct=R.transmission>0,vt=Z&&!!R.anisotropyMap,Dt=Oe&&!!R.clearcoatMap,zt=Oe&&!!R.clearcoatNormalMap,gt=Oe&&!!R.clearcoatRoughnessMap,dt=E&&!!R.iridescenceMap,qt=E&&!!R.iridescenceThicknessMap,he=at&&!!R.sheenColorMap,Zt=at&&!!R.sheenRoughnessMap,Gt=!!R.specularMap,le=!!R.specularColorMap,pe=!!R.specularIntensityMap,Re=ct&&!!R.transmissionMap,nt=ct&&!!R.thicknessMap,Yt=!!R.gradientMap,bt=!!R.alphaMap,Wt=R.alphaTest>0,Kt=!!R.alphaHash,Tt=!!R.extensions,oe=Zi;R.toneMapped&&(St===null||St.isXRRenderTarget===!0)&&(oe=i.toneMapping);let ie={shaderID:Et,shaderType:R.type,shaderName:R.name,vertexShader:Ye,fragmentShader:Ne,defines:R.defines,customVertexShaderID:He,customFragmentShaderID:yt,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:g,batching:jt,batchingColor:jt&&ot._colorsTexture!==null,instancing:ue,instancingColor:ue&&ot.instanceColor!==null,instancingMorph:ue&&ot.morphTexture!==null,outputColorSpace:St===null?i.outputColorSpace:St.isXRRenderTarget===!0?St.texture.colorSpace:We.workingColorSpace,alphaToCoverage:!!R.alphaToCoverage,map:ge,matcap:te,envMap:rt,envMapMode:rt&&At.mapping,envMapCubeUVHeight:xt,aoMap:It,lightMap:H,bumpMap:Lt,normalMap:kt,displacementMap:ce,emissiveMap:fe,normalMapObjectSpace:kt&&R.normalMapType===k0,normalMapTangentSpace:kt&&R.normalMapType===mh,packedNormalMap:kt&&R.normalMapType===mh&&s1(R.normalMap.format),metalnessMap:de,roughnessMap:Ce,anisotropy:Z,anisotropyMap:vt,clearcoat:Oe,clearcoatMap:Dt,clearcoatNormalMap:zt,clearcoatRoughnessMap:gt,dispersion:Ue,retroreflection:F,iridescence:E,iridescenceMap:dt,iridescenceThicknessMap:qt,sheen:at,sheenColorMap:he,sheenRoughnessMap:Zt,specularMap:Gt,specularColorMap:le,specularIntensityMap:pe,transmission:ct,transmissionMap:Re,thicknessMap:nt,gradientMap:Yt,opaque:R.transparent===!1&&R.blending===Ba&&R.alphaToCoverage===!1,alphaMap:bt,alphaTest:Wt,alphaHash:Kt,combine:R.combine,mapUv:ge&&w(R.map.channel),aoMapUv:It&&w(R.aoMap.channel),lightMapUv:H&&w(R.lightMap.channel),bumpMapUv:Lt&&w(R.bumpMap.channel),normalMapUv:kt&&w(R.normalMap.channel),displacementMapUv:ce&&w(R.displacementMap.channel),emissiveMapUv:fe&&w(R.emissiveMap.channel),metalnessMapUv:de&&w(R.metalnessMap.channel),roughnessMapUv:Ce&&w(R.roughnessMap.channel),anisotropyMapUv:vt&&w(R.anisotropyMap.channel),clearcoatMapUv:Dt&&w(R.clearcoatMap.channel),clearcoatNormalMapUv:zt&&w(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:gt&&w(R.clearcoatRoughnessMap.channel),iridescenceMapUv:dt&&w(R.iridescenceMap.channel),iridescenceThicknessMapUv:qt&&w(R.iridescenceThicknessMap.channel),sheenColorMapUv:he&&w(R.sheenColorMap.channel),sheenRoughnessMapUv:Zt&&w(R.sheenRoughnessMap.channel),specularMapUv:Gt&&w(R.specularMap.channel),specularColorMapUv:le&&w(R.specularColorMap.channel),specularIntensityMapUv:pe&&w(R.specularIntensityMap.channel),transmissionMapUv:Re&&w(R.transmissionMap.channel),thicknessMapUv:nt&&w(R.thicknessMap.channel),alphaMapUv:bt&&w(R.alphaMap.channel),vertexTangents:!!st.attributes.tangent&&(kt||Z),vertexNormals:!!st.attributes.normal,vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,pointsUvs:ot.isPoints===!0&&!!st.attributes.uv&&(ge||bt),fog:!!Q,useFog:R.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:R.wireframe===!1&&(R.flatShading===!0||st.attributes.normal===void 0&&kt===!1&&(R.isMeshLambertMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isMeshPhysicalMaterial)),sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:b,reversedDepthBuffer:Ut,skinning:ot.isSkinnedMesh===!0,hasPositionAttribute:st.attributes.position!==void 0,morphTargets:st.morphAttributes.position!==void 0,morphNormals:st.morphAttributes.normal!==void 0,morphColors:st.morphAttributes.color!==void 0,morphTargetsCount:$t,morphTextureStride:ne,numSunLights:B.sun.length,numDirLights:B.directional.length,numPointLights:B.point.length,numSpotLights:B.spot.length,numSpotLightMaps:B.spotLightMap.length,numRectAreaLights:B.rectArea.length,numHemiLights:B.hemi.length,numSunLightShadows:B.sunShadowMap.length,numDirLightShadows:B.directionalShadowMap.length,numPointLightShadows:B.pointShadowMap.length,numSpotLightShadows:B.spotShadowMap.length,numSpotLightShadowsWithMaps:B.numSpotLightShadowsWithMaps,numLightProbes:B.numLightProbes,numLightProbeGrids:ht.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:R.dithering,shadowMapEnabled:i.shadowMap.enabled&&X.length>0,shadowMapType:i.shadowMap.type,toneMapping:oe,decodeVideoTexture:ge&&R.map.isVideoTexture===!0&&We.getTransfer(R.map.colorSpace)===rn,decodeVideoTextureEmissive:fe&&R.emissiveMap.isVideoTexture===!0&&We.getTransfer(R.emissiveMap.colorSpace)===rn,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===hs,flipSided:R.side===ci,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:Tt&&R.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Tt&&R.extensions.multiDraw===!0||jt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return ie.vertexUv1s=u.has(1),ie.vertexUv2s=u.has(2),ie.vertexUv3s=u.has(3),u.clear(),ie}function y(R){let B=[];if(R.shaderID?B.push(R.shaderID):(B.push(R.customVertexShaderID),B.push(R.customFragmentShaderID)),R.defines!==void 0)for(let X in R.defines)B.push(X),B.push(R.defines[X]);return R.isRawShaderMaterial===!1&&(m(B,R),$(B,R),B.push(i.outputColorSpace)),B.push(R.customProgramCacheKey),B.join()}function m(R,B){R.push(B.precision),R.push(B.outputColorSpace),R.push(B.envMapMode),R.push(B.envMapCubeUVHeight),R.push(B.mapUv),R.push(B.alphaMapUv),R.push(B.lightMapUv),R.push(B.aoMapUv),R.push(B.bumpMapUv),R.push(B.normalMapUv),R.push(B.displacementMapUv),R.push(B.emissiveMapUv),R.push(B.metalnessMapUv),R.push(B.roughnessMapUv),R.push(B.anisotropyMapUv),R.push(B.clearcoatMapUv),R.push(B.clearcoatNormalMapUv),R.push(B.clearcoatRoughnessMapUv),R.push(B.iridescenceMapUv),R.push(B.iridescenceThicknessMapUv),R.push(B.sheenColorMapUv),R.push(B.sheenRoughnessMapUv),R.push(B.specularMapUv),R.push(B.specularColorMapUv),R.push(B.specularIntensityMapUv),R.push(B.transmissionMapUv),R.push(B.thicknessMapUv),R.push(B.combine),R.push(B.fogExp2),R.push(B.sizeAttenuation),R.push(B.morphTargetsCount),R.push(B.morphAttributeCount),R.push(B.numSunLights),R.push(B.numDirLights),R.push(B.numPointLights),R.push(B.numSpotLights),R.push(B.numSpotLightMaps),R.push(B.numHemiLights),R.push(B.numRectAreaLights),R.push(B.numSunLightShadows),R.push(B.numDirLightShadows),R.push(B.numPointLightShadows),R.push(B.numSpotLightShadows),R.push(B.numSpotLightShadowsWithMaps),R.push(B.numLightProbes),R.push(B.shadowMapType),R.push(B.toneMapping),R.push(B.numClippingPlanes),R.push(B.numClipIntersection),R.push(B.depthPacking)}function $(R,B){a.disableAll(),B.instancing&&a.enable(0),B.instancingColor&&a.enable(1),B.instancingMorph&&a.enable(2),B.matcap&&a.enable(3),B.envMap&&a.enable(4),B.normalMapObjectSpace&&a.enable(5),B.normalMapTangentSpace&&a.enable(6),B.clearcoat&&a.enable(7),B.iridescence&&a.enable(8),B.alphaTest&&a.enable(9),B.vertexColors&&a.enable(10),B.vertexAlphas&&a.enable(11),B.vertexUv1s&&a.enable(12),B.vertexUv2s&&a.enable(13),B.vertexUv3s&&a.enable(14),B.vertexTangents&&a.enable(15),B.anisotropy&&a.enable(16),B.alphaHash&&a.enable(17),B.batching&&a.enable(18),B.dispersion&&a.enable(19),B.retroreflection&&a.enable(24),B.batchingColor&&a.enable(20),B.gradientMap&&a.enable(21),B.packedNormalMap&&a.enable(22),B.vertexNormals&&a.enable(23),R.push(a.mask),a.disableAll(),B.fog&&a.enable(0),B.useFog&&a.enable(1),B.flatShading&&a.enable(2),B.logarithmicDepthBuffer&&a.enable(3),B.reversedDepthBuffer&&a.enable(4),B.skinning&&a.enable(5),B.morphTargets&&a.enable(6),B.morphNormals&&a.enable(7),B.morphColors&&a.enable(8),B.premultipliedAlpha&&a.enable(9),B.shadowMapEnabled&&a.enable(10),B.doubleSided&&a.enable(11),B.flipSided&&a.enable(12),B.useDepthPacking&&a.enable(13),B.dithering&&a.enable(14),B.transmission&&a.enable(15),B.sheen&&a.enable(16),B.opaque&&a.enable(17),B.pointsUvs&&a.enable(18),B.decodeVideoTexture&&a.enable(19),B.decodeVideoTextureEmissive&&a.enable(20),B.alphaToCoverage&&a.enable(21),B.numLightProbeGrids>0&&a.enable(22),B.hasPositionAttribute&&a.enable(23),R.push(a.mask)}function V(R){let B=M[R.type],X;if(B){let J=ui[B];X=Cl.clone(J.uniforms)}else X=R.uniforms;return X}function D(R,B){let X=d.get(B);return X!==void 0?++X.usedTimes:(X=new n1(i,B,R,s),h.push(X),d.set(B,X)),X}function T(R){if(--R.usedTimes===0){let B=h.indexOf(R);h[B]=h[h.length-1],h.pop(),d.delete(R.cacheKey),R.destroy()}}function k(R){l.remove(R)}function q(){l.dispose()}return{getParameters:N,getProgramCacheKey:y,getUniforms:V,acquireProgram:D,releaseProgram:T,releaseShaderCache:k,programs:h,dispose:q}}function a1(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let l=i.get(a);return l===void 0&&(l={},i.set(a,l)),l}function n(a){i.delete(a)}function s(a,l,u){i.get(a)[l]=u}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function o1(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Sg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function bg(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(g){let M=0;return g.isInstancedMesh&&(M+=2),g.isSkinnedMesh&&(M+=1),M}function l(g,M,w,N,y,m){let $=i[t];return $===void 0?($={id:g.id,object:g,geometry:M,material:w,materialVariant:a(g),groupOrder:N,renderOrder:g.renderOrder,z:y,group:m},i[t]=$):($.id=g.id,$.object=g,$.geometry=M,$.material=w,$.materialVariant=a(g),$.groupOrder=N,$.renderOrder=g.renderOrder,$.z=y,$.group=m),t++,$}function u(g,M,w,N,y,m,$){$.reversedDepth===!0&&(y=-y);let V=l(g,M,w,N,y,m);w.transmission>0?n.push(V):w.transparent===!0?s.push(V):e.push(V)}function h(g,M,w,N,y,m){let $=l(g,M,w,N,y,m);w.transmission>0?n.unshift($):w.transparent===!0?s.unshift($):e.unshift($)}function d(g,M){e.length>1&&e.sort(g||o1),n.length>1&&n.sort(M||Sg),s.length>1&&s.sort(M||Sg)}function b(){for(let g=t,M=i.length;g<M;g++){let w=i[g];if(w.id===null)break;w.id=null,w.object=null,w.geometry=null,w.material=null,w.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:u,unshift:h,finish:b,sort:d}}function l1(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new bg,i.set(n,[a])):s>=r.length?(a=new bg,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function c1(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new j,color:new ye};break;case"SpotLight":e={position:new j,direction:new j,color:new ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new j,color:new ye,distance:0,decay:0};break;case"HemisphereLight":e={direction:new j,skyColor:new ye,groundColor:new ye};break;case"RectAreaLight":e={color:new ye,position:new j,halfWidth:new j,halfHeight:new j};break}return i[t.id]=e,e}}}function u1(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var h1=0;function d1(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function f1(i){let t=new c1,e=u1(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new j);let s=new j,r=new qe,a=new qe;function l(h){let d=0,b=0,g=0;for(let ot=0;ot<9;ot++)n.probe[ot].set(0,0,0);let M=0,w=0,N=0,y=0,m=0,$=0,V=0,D=0,T=0,k=0,q=0,R=0,B=0,X=0;h.sort(d1);for(let ot=0,ht=h.length;ot<ht;ot++){let Q=h[ot],st=Q.color,pt=Q.intensity,_t=Q.distance,At=null;if(Q.shadow&&Q.shadow.map&&(Q.shadow.map.texture.format===cr?At=Q.shadow.map.texture:At=Q.shadow.map.depthTexture||Q.shadow.map.texture),Q.isAmbientLight)d+=st.r*pt,b+=st.g*pt,g+=st.b*pt;else if(Q.isLightProbe){for(let xt=0;xt<9;xt++)n.probe[xt].addScaledVector(Q.sh.coefficients[xt],pt);X++}else if(Q.isSunLight){let xt=t.get(Q);if(xt.color.copy(Q.color).multiplyScalar(Q.intensity),Q.castShadow){let Et=Q.shadow,wt=e.get(Q);wt.shadowIntensity=Et.intensity,wt.shadowBias=Et.bias,wt.shadowNormalBias=Et.normalBias,wt.shadowRadius=Et.radius,wt.shadowMapSize.copy(Et.mapSize).multiply(Et.getFrameExtents()),n.sunShadow[w]=wt,n.sunShadowMap[w]=At;let $t=Et.getViewportCount();for(let ne=0;ne<$t;ne++)n.sunShadowMatrix[N+ne]=Et.getMatrix(ne),n.sunShadowCascade[N+ne]=Et._cascadeData[ne];N+=$t,w++}n.sun[M]=xt,M++}else if(Q.isDirectionalLight){let xt=t.get(Q);if(xt.color.copy(Q.color).multiplyScalar(Q.intensity),Q.castShadow){let Et=Q.shadow,wt=e.get(Q);wt.shadowIntensity=Et.intensity,wt.shadowBias=Et.bias,wt.shadowNormalBias=Et.normalBias,wt.shadowRadius=Et.radius,wt.shadowMapSize=Et.mapSize,n.directionalShadow[y]=wt,n.directionalShadowMap[y]=At,n.directionalShadowMatrix[y]=Q.shadow.matrix,T++}n.directional[y]=xt,y++}else if(Q.isSpotLight){let xt=t.get(Q);xt.position.setFromMatrixPosition(Q.matrixWorld),xt.color.copy(st).multiplyScalar(pt),xt.distance=_t,xt.coneCos=Math.cos(Q.angle),xt.penumbraCos=Math.cos(Q.angle*(1-Q.penumbra)),xt.decay=Q.decay,n.spot[$]=xt;let Et=Q.shadow;if(Q.map&&(n.spotLightMap[R]=Q.map,R++,Et.updateMatrices(Q),Q.castShadow&&B++),n.spotLightMatrix[$]=Et.matrix,Q.castShadow){let wt=e.get(Q);wt.shadowIntensity=Et.intensity,wt.shadowBias=Et.bias,wt.shadowNormalBias=Et.normalBias,wt.shadowRadius=Et.radius,wt.shadowMapSize=Et.mapSize,n.spotShadow[$]=wt,n.spotShadowMap[$]=At,q++}$++}else if(Q.isRectAreaLight){let xt=t.get(Q);xt.color.copy(st).multiplyScalar(pt),xt.halfWidth.set(Q.width*.5,0,0),xt.halfHeight.set(0,Q.height*.5,0),n.rectArea[V]=xt,V++}else if(Q.isPointLight){let xt=t.get(Q);if(xt.color.copy(Q.color).multiplyScalar(Q.intensity),xt.distance=Q.distance,xt.decay=Q.decay,Q.castShadow){let Et=Q.shadow,wt=e.get(Q);wt.shadowIntensity=Et.intensity,wt.shadowBias=Et.bias,wt.shadowNormalBias=Et.normalBias,wt.shadowRadius=Et.radius,wt.shadowMapSize=Et.mapSize,wt.shadowCameraNear=Et.camera.near,wt.shadowCameraFar=Et.camera.far,n.pointShadow[m]=wt,n.pointShadowMap[m]=At,n.pointShadowMatrix[m]=Q.shadow.matrix,k++}n.point[m]=xt,m++}else if(Q.isHemisphereLight){let xt=t.get(Q);xt.skyColor.copy(Q.color).multiplyScalar(pt),xt.groundColor.copy(Q.groundColor).multiplyScalar(pt),n.hemi[D]=xt,D++}}V>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Xt.LTC_FLOAT_1,n.rectAreaLTC2=Xt.LTC_FLOAT_2):(n.rectAreaLTC1=Xt.LTC_HALF_1,n.rectAreaLTC2=Xt.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=b,n.ambient[2]=g;let J=n.hash;(J.sunLength!==M||J.directionalLength!==y||J.pointLength!==m||J.spotLength!==$||J.rectAreaLength!==V||J.hemiLength!==D||J.numSunShadows!==w||J.numDirectionalShadows!==T||J.numPointShadows!==k||J.numSpotShadows!==q||J.numSpotMaps!==R||J.numLightProbes!==X)&&(n.sun.length=M,n.directional.length=y,n.spot.length=$,n.rectArea.length=V,n.point.length=m,n.hemi.length=D,n.sunShadow.length=w,n.sunShadowMap.length=w,n.sunShadowMatrix.length=N,n.sunShadowCascade.length=N,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=k,n.pointShadowMap.length=k,n.pointShadowMatrix.length=k,n.spotShadow.length=q,n.spotShadowMap.length=q,n.spotLightMatrix.length=q+R-B,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=B,n.numLightProbes=X,J.sunLength=M,J.directionalLength=y,J.pointLength=m,J.spotLength=$,J.rectAreaLength=V,J.hemiLength=D,J.numSunShadows=w,J.numDirectionalShadows=T,J.numPointShadows=k,J.numSpotShadows=q,J.numSpotMaps=R,J.numLightProbes=X,n.version=h1++)}function u(h,d){let b=0,g=0,M=0,w=0,N=0,y=0,m=d.matrixWorldInverse;for(let $=0,V=h.length;$<V;$++){let D=h[$];if(D.isSunLight){let T=n.sun[b];T.direction.setFromMatrixPosition(D.matrixWorld),T.direction.transformDirection(m),b++}else if(D.isDirectionalLight){let T=n.directional[g];T.direction.setFromMatrixPosition(D.matrixWorld),s.setFromMatrixPosition(D.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),g++}else if(D.isSpotLight){let T=n.spot[w];T.position.setFromMatrixPosition(D.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(D.matrixWorld),s.setFromMatrixPosition(D.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),w++}else if(D.isRectAreaLight){let T=n.rectArea[N];T.position.setFromMatrixPosition(D.matrixWorld),T.position.applyMatrix4(m),a.identity(),r.copy(D.matrixWorld),r.premultiply(m),a.extractRotation(r),T.halfWidth.set(D.width*.5,0,0),T.halfHeight.set(0,D.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),N++}else if(D.isPointLight){let T=n.point[M];T.position.setFromMatrixPosition(D.matrixWorld),T.position.applyMatrix4(m),M++}else if(D.isHemisphereLight){let T=n.hemi[y];T.direction.setFromMatrixPosition(D.matrixWorld),T.direction.transformDirection(m),y++}}}return{setup:l,setupView:u,state:n}}function Mg(i){let t=new f1(i),e=[],n=[],s=[];function r(g){b.camera=g,e.length=0,n.length=0,s.length=0}function a(g){e.push(g)}function l(g){n.push(g)}function u(g){s.push(g)}function h(){t.setup(e)}function d(g){t.setupView(e,g)}let b={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:b,setupLights:h,setupLightsView:d,pushLight:a,pushShadow:l,pushLightProbeGrid:u}}function p1(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),l;return a===void 0?(l=new Mg(i),t.set(s,[l])):r>=a.length?(l=new Mg(i),a.push(l)):l=a[r],l}function n(){t=new WeakMap}return{get:e,dispose:n}}var m1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,g1=`uniform sampler2D shadow_pass;
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
}`,_1=[new j(1,0,0),new j(-1,0,0),new j(0,1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1)],x1=[new j(0,-1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1),new j(0,-1,0),new j(0,-1,0)],wg=new qe,Il=new j,zf=new j;function v1(i,t,e){let n=new Pa,s=new Vt,r=new Vt,a=new an,l=new fu,u=new pu,h={},d=e.maxTextureSize,b={[rr]:ci,[ci]:rr,[hs]:hs},g=new $n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Vt},radius:{value:4}},vertexShader:m1,fragmentShader:g1}),M=g.clone();M.defines.HORIZONTAL_PASS=1;let w=new Mn;w.setAttribute("position",new un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let N=new kn(w,g),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vl;let m=this.type;this.render=function(k,q,R){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||k.length===0)return;this.type===g0&&(be("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=vl);let B=i.getRenderTarget(),X=i.getActiveCubeFace(),J=i.getActiveMipmapLevel(),ot=i.state;ot.setBlending(ds),ot.buffers.depth.getReversed()===!0?ot.buffers.color.setClear(0,0,0,0):ot.buffers.color.setClear(1,1,1,1),ot.buffers.depth.setTest(!0),ot.setScissorTest(!1);let ht=m!==this.type;ht&&q.traverse(function(Q){Q.material&&(Array.isArray(Q.material)?Q.material.forEach(st=>st.needsUpdate=!0):Q.material.needsUpdate=!0)});for(let Q=0,st=k.length;Q<st;Q++){let pt=k[Q],_t=pt.shadow;if(_t===void 0){be("WebGLShadowMap:",pt,"has no shadow.");continue}if(_t.autoUpdate===!1&&_t.needsUpdate===!1)continue;s.copy(_t.mapSize);let At=_t.getFrameExtents();s.multiply(At),r.copy(_t.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/At.x),s.x=r.x*At.x,_t.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/At.y),s.y=r.y*At.y,_t.mapSize.y=r.y));let xt=i.state.buffers.depth.getReversed();if(_t.camera._reversedDepth=xt,_t.map===null||ht===!0){if(_t.map!==null&&(_t.map.depthTexture!==null&&(_t.map.depthTexture.dispose(),_t.map.depthTexture=null),_t.map.dispose()),this.type===Fa){if(pt.isPointLight){be("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}_t.map=new vi(s.x,s.y,{format:cr,type:Ki,minFilter:Wn,magFilter:Wn,generateMipmaps:!1}),_t.map.texture.name=pt.name+".shadowMap",_t.map.depthTexture=new tr(s.x,s.y,Ni),_t.map.depthTexture.name=pt.name+".shadowMapDepth",_t.map.depthTexture.format=os,_t.map.depthTexture.compareFunction=null,_t.map.depthTexture.minFilter=Fn,_t.map.depthTexture.magFilter=Fn}else pt.isPointLight?(_t.map=new Sh(s.x),_t.map.depthTexture=new ru(s.x,ji)):(_t.map=new vi(s.x,s.y),_t.map.depthTexture=new tr(s.x,s.y,ji)),_t.map.depthTexture.name=pt.name+".shadowMap",_t.map.depthTexture.format=os,this.type===vl?(_t.map.depthTexture.compareFunction=xt?_h:gh,_t.map.depthTexture.minFilter=Wn,_t.map.depthTexture.magFilter=Wn):(_t.map.depthTexture.compareFunction=null,_t.map.depthTexture.minFilter=Fn,_t.map.depthTexture.magFilter=Fn);_t.camera.updateProjectionMatrix()}_t.map.isWebGLCubeRenderTarget!==!0&&(_t.map.width!==s.x||_t.map.height!==s.y)&&_t.map.setSize(s.x,s.y);let Et=_t.map.isWebGLCubeRenderTarget?6:_t.getViewportCount();pt.isPointLight!==!0&&_t.updateMatrices(pt,R);for(let wt=0;wt<Et;wt++){let $t=_t.getCamera(wt);if(pt.isPointLight){let ne=_t.camera,Ye=_t.matrix,Ne=pt.distance||ne.far;Ne!==ne.far&&(ne.far=Ne,ne.updateProjectionMatrix()),Il.setFromMatrixPosition(pt.matrixWorld),ne.position.copy(Il),zf.copy(ne.position),zf.add(_1[wt]),ne.up.copy(x1[wt]),ne.lookAt(zf),ne.updateMatrixWorld(),Ye.makeTranslation(-Il.x,-Il.y,-Il.z),wg.multiplyMatrices(ne.projectionMatrix,ne.matrixWorldInverse),_t._frustum.setFromProjectionMatrix(wg,ne.coordinateSystem,ne.reversedDepth)}if(_t.map.isWebGLCubeRenderTarget)i.setRenderTarget(_t.map,wt),i.clear();else{wt===0&&(i.setRenderTarget(_t.map),i.clear());let ne=_t.getViewport(wt);a.set(r.x*ne.x,r.y*ne.y,r.x*ne.z,r.y*ne.w),ot.viewport(a)}n=_t.getFrustum(wt),D(q,R,$t,pt,this.type)}_t.isPointLightShadow!==!0&&this.type===Fa&&$(_t,R),_t.needsUpdate=!1}m=this.type,y.needsUpdate=!1,i.setRenderTarget(B,X,J)};function $(k,q){let R=t.update(N);g.defines.VSM_SAMPLES!==k.blurSamples&&(g.defines.VSM_SAMPLES=k.blurSamples,M.defines.VSM_SAMPLES=k.blurSamples,g.needsUpdate=!0,M.needsUpdate=!0),k.mapPass===null?k.mapPass=new vi(s.x,s.y,{format:cr,type:Ki}):(k.mapPass.width!==k.map.width||k.mapPass.height!==k.map.height)&&k.mapPass.setSize(k.map.width,k.map.height),g.uniforms.shadow_pass.value=k.map.depthTexture,g.uniforms.resolution.value.set(k.map.width,k.map.height),g.uniforms.radius.value=k.radius,i.setRenderTarget(k.mapPass),i.clear(),i.renderBufferDirect(q,null,R,g,N,null),M.uniforms.shadow_pass.value=k.mapPass.texture,M.uniforms.resolution.value.set(k.map.width,k.map.height),M.uniforms.radius.value=k.radius,i.setRenderTarget(k.map),i.clear(),i.renderBufferDirect(q,null,R,M,N,null)}function V(k,q,R,B){let X=null,J=R.isPointLight===!0?k.customDistanceMaterial:k.customDepthMaterial;if(J!==void 0)X=J;else if(X=R.isPointLight===!0?u:l,i.localClippingEnabled&&q.clipShadows===!0&&Array.isArray(q.clippingPlanes)&&q.clippingPlanes.length!==0||q.displacementMap&&q.displacementScale!==0||q.alphaMap&&q.alphaTest>0||q.map&&q.alphaTest>0||q.alphaToCoverage===!0){let ot=X.uuid,ht=q.uuid,Q=h[ot];Q===void 0&&(Q={},h[ot]=Q);let st=Q[ht];st===void 0&&(st=X.clone(),Q[ht]=st,q.addEventListener("dispose",T)),X=st}if(X.visible=q.visible,X.wireframe=q.wireframe,B===Fa?X.side=q.shadowSide!==null?q.shadowSide:q.side:X.side=q.shadowSide!==null?q.shadowSide:b[q.side],X.alphaMap=q.alphaMap,X.alphaTest=q.alphaToCoverage===!0?.5:q.alphaTest,X.map=q.map,X.clipShadows=q.clipShadows,X.clippingPlanes=q.clippingPlanes,X.clipIntersection=q.clipIntersection,X.displacementMap=q.displacementMap,X.displacementScale=q.displacementScale,X.displacementBias=q.displacementBias,X.wireframeLinewidth=q.wireframeLinewidth,X.linewidth=q.linewidth,R.isPointLight===!0&&X.isMeshDistanceMaterial===!0){let ot=i.properties.get(X);ot.light=R}return X}function D(k,q,R,B,X){if(k.visible===!1)return;if(k.layers.test(q.layers)&&(k.isMesh||k.isLine||k.isPoints)&&(k.castShadow||k.receiveShadow&&X===Fa)&&(!k.frustumCulled||k.intersectsFrustum(n))){k.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,k.matrixWorld);let ht=t.update(k),Q=k.material;if(Array.isArray(Q)){let st=ht.groups;for(let pt=0,_t=st.length;pt<_t;pt++){let At=st[pt],xt=Q[At.materialIndex];if(xt&&xt.visible){let Et=V(k,xt,B,X);k.onBeforeShadow(i,k,q,R,ht,Et,At),i.renderBufferDirect(R,null,ht,Et,k,At),k.onAfterShadow(i,k,q,R,ht,Et,At)}}}else if(Q.visible){let st=V(k,Q,B,X);k.onBeforeShadow(i,k,q,R,ht,st,null),i.renderBufferDirect(R,null,ht,st,k,null),k.onAfterShadow(i,k,q,R,ht,st,null)}}let ot=k.children;for(let ht=0,Q=ot.length;ht<Q;ht++)D(ot[ht],q,R,B,X)}function T(k){k.target.removeEventListener("dispose",T);for(let R in h){let B=h[R],X=k.target.uuid;X in B&&(B[X].dispose(),delete B[X])}}}function y1(i,t){function e(){let nt=!1,Yt=new an,bt=null,Wt=new an(0,0,0,0);return{setMask:function(Kt){bt!==Kt&&!nt&&(i.colorMask(Kt,Kt,Kt,Kt),bt=Kt)},setLocked:function(Kt){nt=Kt},setClear:function(Kt,Tt,oe,ie,Ke){Ke===!0&&(Kt*=ie,Tt*=ie,oe*=ie),Yt.set(Kt,Tt,oe,ie),Wt.equals(Yt)===!1&&(i.clearColor(Kt,Tt,oe,ie),Wt.copy(Yt))},reset:function(){nt=!1,bt=null,Wt.set(-1,0,0,0)}}}function n(){let nt=!1,Yt=!1,bt=null,Wt=null,Kt=null;return{setReversed:function(Tt){if(Yt!==Tt){let oe=t.get("EXT_clip_control");Tt?oe.clipControlEXT(oe.LOWER_LEFT_EXT,oe.ZERO_TO_ONE_EXT):oe.clipControlEXT(oe.LOWER_LEFT_EXT,oe.NEGATIVE_ONE_TO_ONE_EXT),Yt=Tt;let ie=Kt;Kt=null,this.setClear(ie)}},getReversed:function(){return Yt},setTest:function(Tt){Tt?St(i.DEPTH_TEST):Ut(i.DEPTH_TEST)},setMask:function(Tt){bt!==Tt&&!nt&&(i.depthMask(Tt),bt=Tt)},setFunc:function(Tt){if(Yt&&(Tt=Z0[Tt]),Wt!==Tt){switch(Tt){case zc:i.depthFunc(i.NEVER);break;case Vc:i.depthFunc(i.ALWAYS);break;case Hc:i.depthFunc(i.LESS);break;case wa:i.depthFunc(i.LEQUAL);break;case Gc:i.depthFunc(i.EQUAL);break;case Wc:i.depthFunc(i.GEQUAL);break;case Xc:i.depthFunc(i.GREATER);break;case qc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Wt=Tt}},setLocked:function(Tt){nt=Tt},setClear:function(Tt){Kt!==Tt&&(Kt=Tt,Yt&&(Tt=1-Tt),i.clearDepth(Tt))},reset:function(){nt=!1,bt=null,Wt=null,Kt=null,Yt=!1}}}function s(){let nt=!1,Yt=null,bt=null,Wt=null,Kt=null,Tt=null,oe=null,ie=null,Ke=null;return{setTest:function(Je){nt||(Je?St(i.STENCIL_TEST):Ut(i.STENCIL_TEST))},setMask:function(Je){Yt!==Je&&!nt&&(i.stencilMask(Je),Yt=Je)},setFunc:function(Je,Vn,di){(bt!==Je||Wt!==Vn||Kt!==di)&&(i.stencilFunc(Je,Vn,di),bt=Je,Wt=Vn,Kt=di)},setOp:function(Je,Vn,di){(Tt!==Je||oe!==Vn||ie!==di)&&(i.stencilOp(Je,Vn,di),Tt=Je,oe=Vn,ie=di)},setLocked:function(Je){nt=Je},setClear:function(Je){Ke!==Je&&(i.clearStencil(Je),Ke=Je)},reset:function(){nt=!1,Yt=null,bt=null,Wt=null,Kt=null,Tt=null,oe=null,ie=null,Ke=null}}}let r=new e,a=new n,l=new s,u=new WeakMap,h=new WeakMap,d={},b={},g={},M=new WeakMap,w=[],N=null,y=!1,m=null,$=null,V=null,D=null,T=null,k=null,q=null,R=new ye(0,0,0),B=0,X=!1,J=null,ot=null,ht=null,Q=null,st=null,pt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),_t=!1,At=0,xt=i.getParameter(i.VERSION);xt.indexOf("WebGL")!==-1?(At=parseFloat(/^WebGL (\d)/.exec(xt)[1]),_t=At>=1):xt.indexOf("OpenGL ES")!==-1&&(At=parseFloat(/^OpenGL ES (\d)/.exec(xt)[1]),_t=At>=2);let Et=null,wt={},$t=i.getParameter(i.SCISSOR_BOX),ne=i.getParameter(i.VIEWPORT),Ye=new an().fromArray($t),Ne=new an().fromArray(ne);function He(nt,Yt,bt,Wt){let Kt=new Uint8Array(4),Tt=i.createTexture();i.bindTexture(nt,Tt),i.texParameteri(nt,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(nt,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let oe=0;oe<bt;oe++)nt===i.TEXTURE_3D||nt===i.TEXTURE_2D_ARRAY?i.texImage3D(Yt,0,i.RGBA,1,1,Wt,0,i.RGBA,i.UNSIGNED_BYTE,Kt):i.texImage2D(Yt+oe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Kt);return Tt}let yt={};yt[i.TEXTURE_2D]=He(i.TEXTURE_2D,i.TEXTURE_2D,1),yt[i.TEXTURE_CUBE_MAP]=He(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),yt[i.TEXTURE_2D_ARRAY]=He(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),yt[i.TEXTURE_3D]=He(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),l.setClear(0),St(i.DEPTH_TEST),a.setFunc(wa),Lt(!1),kt(of),St(i.CULL_FACE),It(ds);function St(nt){d[nt]!==!0&&(i.enable(nt),d[nt]=!0)}function Ut(nt){d[nt]!==!1&&(i.disable(nt),d[nt]=!1)}function ue(nt,Yt){return g[nt]!==Yt?(i.bindFramebuffer(nt,Yt),g[nt]=Yt,nt===i.DRAW_FRAMEBUFFER&&(g[i.FRAMEBUFFER]=Yt),nt===i.FRAMEBUFFER&&(g[i.DRAW_FRAMEBUFFER]=Yt),!0):!1}function jt(nt,Yt){let bt=w,Wt=!1;if(nt){bt=M.get(Yt),bt===void 0&&(bt=[],M.set(Yt,bt));let Kt=nt.textures;if(bt.length!==Kt.length||bt[0]!==i.COLOR_ATTACHMENT0){for(let Tt=0,oe=Kt.length;Tt<oe;Tt++)bt[Tt]=i.COLOR_ATTACHMENT0+Tt;bt.length=Kt.length,Wt=!0}}else bt[0]!==i.BACK&&(bt[0]=i.BACK,Wt=!0);Wt&&i.drawBuffers(bt)}function ge(nt){return N!==nt?(i.useProgram(nt),N=nt,!0):!1}let te={[Nr]:i.FUNC_ADD,[x0]:i.FUNC_SUBTRACT,[v0]:i.FUNC_REVERSE_SUBTRACT};te[y0]=i.MIN,te[S0]=i.MAX;let rt={[b0]:i.ZERO,[M0]:i.ONE,[w0]:i.SRC_COLOR,[hf]:i.SRC_ALPHA,[I0]:i.SRC_ALPHA_SATURATE,[C0]:i.DST_COLOR,[T0]:i.DST_ALPHA,[E0]:i.ONE_MINUS_SRC_COLOR,[df]:i.ONE_MINUS_SRC_ALPHA,[R0]:i.ONE_MINUS_DST_COLOR,[A0]:i.ONE_MINUS_DST_ALPHA,[P0]:i.CONSTANT_COLOR,[L0]:i.ONE_MINUS_CONSTANT_COLOR,[D0]:i.CONSTANT_ALPHA,[N0]:i.ONE_MINUS_CONSTANT_ALPHA};function It(nt,Yt,bt,Wt,Kt,Tt,oe,ie,Ke,Je){if(nt===ds){y===!0&&(Ut(i.BLEND),y=!1);return}if(y===!1&&(St(i.BLEND),y=!0),nt!==_0){if(nt!==m||Je!==X){if(($!==Nr||T!==Nr)&&(i.blendEquation(i.FUNC_ADD),$=Nr,T=Nr),Je)switch(nt){case Ba:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case lf:i.blendFunc(i.ONE,i.ONE);break;case cf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case uf:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ee("WebGLState: Invalid blending: ",nt);break}else switch(nt){case Ba:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case lf:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case cf:Ee("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case uf:Ee("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ee("WebGLState: Invalid blending: ",nt);break}V=null,D=null,k=null,q=null,R.set(0,0,0),B=0,m=nt,X=Je}return}Kt=Kt||Yt,Tt=Tt||bt,oe=oe||Wt,(Yt!==$||Kt!==T)&&(i.blendEquationSeparate(te[Yt],te[Kt]),$=Yt,T=Kt),(bt!==V||Wt!==D||Tt!==k||oe!==q)&&(i.blendFuncSeparate(rt[bt],rt[Wt],rt[Tt],rt[oe]),V=bt,D=Wt,k=Tt,q=oe),(ie.equals(R)===!1||Ke!==B)&&(i.blendColor(ie.r,ie.g,ie.b,Ke),R.copy(ie),B=Ke),m=nt,X=!1}function H(nt,Yt){nt.side===hs?Ut(i.CULL_FACE):St(i.CULL_FACE);let bt=nt.side===ci;Yt&&(bt=!bt),Lt(bt),nt.blending===Ba&&nt.transparent===!1?It(ds):It(nt.blending,nt.blendEquation,nt.blendSrc,nt.blendDst,nt.blendEquationAlpha,nt.blendSrcAlpha,nt.blendDstAlpha,nt.blendColor,nt.blendAlpha,nt.premultipliedAlpha),a.setFunc(nt.depthFunc),a.setTest(nt.depthTest),a.setMask(nt.depthWrite),r.setMask(nt.colorWrite);let Wt=nt.stencilWrite;l.setTest(Wt),Wt&&(l.setMask(nt.stencilWriteMask),l.setFunc(nt.stencilFunc,nt.stencilRef,nt.stencilFuncMask),l.setOp(nt.stencilFail,nt.stencilZFail,nt.stencilZPass)),fe(nt.polygonOffset,nt.polygonOffsetFactor,nt.polygonOffsetUnits),nt.alphaToCoverage===!0?St(i.SAMPLE_ALPHA_TO_COVERAGE):Ut(i.SAMPLE_ALPHA_TO_COVERAGE)}function Lt(nt){J!==nt&&(nt?i.frontFace(i.CW):i.frontFace(i.CCW),J=nt)}function kt(nt){nt!==p0?(St(i.CULL_FACE),nt!==ot&&(nt===of?i.cullFace(i.BACK):nt===m0?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ut(i.CULL_FACE),ot=nt}function ce(nt){nt!==ht&&(_t&&i.lineWidth(nt),ht=nt)}function fe(nt,Yt,bt){nt?(St(i.POLYGON_OFFSET_FILL),(Q!==Yt||st!==bt)&&(Q=Yt,st=bt,a.getReversed()&&(Yt=-Yt),i.polygonOffset(Yt,bt))):Ut(i.POLYGON_OFFSET_FILL)}function de(nt){nt?St(i.SCISSOR_TEST):Ut(i.SCISSOR_TEST)}function Ce(nt){nt===void 0&&(nt=i.TEXTURE0+pt-1),Et!==nt&&(i.activeTexture(nt),Et=nt)}function Z(nt,Yt,bt){bt===void 0&&(Et===null?bt=i.TEXTURE0+pt-1:bt=Et);let Wt=wt[bt];Wt===void 0&&(Wt={type:void 0,texture:void 0},wt[bt]=Wt),(Wt.type!==nt||Wt.texture!==Yt)&&(Et!==bt&&(i.activeTexture(bt),Et=bt),i.bindTexture(nt,Yt||yt[nt]),Wt.type=nt,Wt.texture=Yt)}function Oe(){let nt=wt[Et];nt!==void 0&&nt.type!==void 0&&(i.bindTexture(nt.type,null),nt.type=void 0,nt.texture=void 0)}function Ue(){try{i.compressedTexImage2D(...arguments)}catch(nt){Ee("WebGLState:",nt)}}function F(){try{i.compressedTexImage3D(...arguments)}catch(nt){Ee("WebGLState:",nt)}}function E(){try{i.texSubImage2D(...arguments)}catch(nt){Ee("WebGLState:",nt)}}function at(){try{i.texSubImage3D(...arguments)}catch(nt){Ee("WebGLState:",nt)}}function ct(){try{i.compressedTexSubImage2D(...arguments)}catch(nt){Ee("WebGLState:",nt)}}function vt(){try{i.compressedTexSubImage3D(...arguments)}catch(nt){Ee("WebGLState:",nt)}}function Dt(){try{i.texStorage2D(...arguments)}catch(nt){Ee("WebGLState:",nt)}}function zt(){try{i.texStorage3D(...arguments)}catch(nt){Ee("WebGLState:",nt)}}function gt(){try{i.texImage2D(...arguments)}catch(nt){Ee("WebGLState:",nt)}}function dt(){try{i.texImage3D(...arguments)}catch(nt){Ee("WebGLState:",nt)}}function qt(nt){return b[nt]!==void 0?b[nt]:i.getParameter(nt)}function he(nt,Yt){b[nt]!==Yt&&(i.pixelStorei(nt,Yt),b[nt]=Yt)}function Zt(nt){Ye.equals(nt)===!1&&(i.scissor(nt.x,nt.y,nt.z,nt.w),Ye.copy(nt))}function Gt(nt){Ne.equals(nt)===!1&&(i.viewport(nt.x,nt.y,nt.z,nt.w),Ne.copy(nt))}function le(nt,Yt){let bt=h.get(Yt);bt===void 0&&(bt=new WeakMap,h.set(Yt,bt));let Wt=bt.get(nt);Wt===void 0&&(Wt=i.getUniformBlockIndex(Yt,nt.name),bt.set(nt,Wt))}function pe(nt,Yt){let Wt=h.get(Yt).get(nt);u.get(Yt)!==Wt&&(i.uniformBlockBinding(Yt,Wt,nt.__bindingPointIndex),u.set(Yt,Wt))}function Re(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),d={},b={},Et=null,wt={},g={},M=new WeakMap,w=[],N=null,y=!1,m=null,$=null,V=null,D=null,T=null,k=null,q=null,R=new ye(0,0,0),B=0,X=!1,J=null,ot=null,ht=null,Q=null,st=null,Ye.set(0,0,i.canvas.width,i.canvas.height),Ne.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),l.reset()}return{buffers:{color:r,depth:a,stencil:l},enable:St,disable:Ut,bindFramebuffer:ue,drawBuffers:jt,useProgram:ge,setBlending:It,setMaterial:H,setFlipSided:Lt,setCullFace:kt,setLineWidth:ce,setPolygonOffset:fe,setScissorTest:de,activeTexture:Ce,bindTexture:Z,unbindTexture:Oe,compressedTexImage2D:Ue,compressedTexImage3D:F,texImage2D:gt,texImage3D:dt,pixelStorei:he,getParameter:qt,updateUBOMapping:le,uniformBlockBinding:pe,texStorage2D:Dt,texStorage3D:zt,texSubImage2D:E,texSubImage3D:at,compressedTexSubImage2D:ct,compressedTexSubImage3D:vt,scissor:Zt,viewport:Gt,reset:Re}}function S1(i,t,e,n,s,r,a){let l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Vt,d=new WeakMap,b=new Set,g,M=new WeakMap,w=!1;try{w=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function N(F,E){return w?new OffscreenCanvas(F,E):zo("canvas")}function y(F,E,at){let ct=1,vt=Ue(F);if((vt.width>at||vt.height>at)&&(ct=at/Math.max(vt.width,vt.height)),ct<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){let Dt=Math.floor(ct*vt.width),zt=Math.floor(ct*vt.height);g===void 0&&(g=N(Dt,zt));let gt=E?N(Dt,zt):g;return gt.width=Dt,gt.height=zt,gt.getContext("2d").drawImage(F,0,0,Dt,zt),be("WebGLRenderer: Texture has been resized from ("+vt.width+"x"+vt.height+") to ("+Dt+"x"+zt+")."),gt}else return"data"in F&&be("WebGLRenderer: Image in DataTexture is too big ("+vt.width+"x"+vt.height+")."),F;return F}function m(F){return F.generateMipmaps}function $(F){i.generateMipmap(F)}function V(F){return F.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?i.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function D(F,E,at,ct,vt,Dt=!1){if(F!==null){if(i[F]!==void 0)return i[F];be("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let zt;ct&&(zt=t.get("EXT_texture_norm16"),zt||be("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let gt=E;if(E===i.RED&&(at===i.FLOAT&&(gt=i.R32F),at===i.HALF_FLOAT&&(gt=i.R16F),at===i.UNSIGNED_BYTE&&(gt=i.R8),at===i.UNSIGNED_SHORT&&zt&&(gt=zt.R16_EXT),at===i.SHORT&&zt&&(gt=zt.R16_SNORM_EXT)),E===i.RED_INTEGER&&(at===i.UNSIGNED_BYTE&&(gt=i.R8UI),at===i.UNSIGNED_SHORT&&(gt=i.R16UI),at===i.UNSIGNED_INT&&(gt=i.R32UI),at===i.BYTE&&(gt=i.R8I),at===i.SHORT&&(gt=i.R16I),at===i.INT&&(gt=i.R32I)),E===i.RG&&(at===i.FLOAT&&(gt=i.RG32F),at===i.HALF_FLOAT&&(gt=i.RG16F),at===i.UNSIGNED_BYTE&&(gt=i.RG8),at===i.UNSIGNED_SHORT&&zt&&(gt=zt.RG16_EXT),at===i.SHORT&&zt&&(gt=zt.RG16_SNORM_EXT)),E===i.RG_INTEGER&&(at===i.UNSIGNED_BYTE&&(gt=i.RG8UI),at===i.UNSIGNED_SHORT&&(gt=i.RG16UI),at===i.UNSIGNED_INT&&(gt=i.RG32UI),at===i.BYTE&&(gt=i.RG8I),at===i.SHORT&&(gt=i.RG16I),at===i.INT&&(gt=i.RG32I)),E===i.RGB_INTEGER&&(at===i.UNSIGNED_BYTE&&(gt=i.RGB8UI),at===i.UNSIGNED_SHORT&&(gt=i.RGB16UI),at===i.UNSIGNED_INT&&(gt=i.RGB32UI),at===i.BYTE&&(gt=i.RGB8I),at===i.SHORT&&(gt=i.RGB16I),at===i.INT&&(gt=i.RGB32I)),E===i.RGBA_INTEGER&&(at===i.UNSIGNED_BYTE&&(gt=i.RGBA8UI),at===i.UNSIGNED_SHORT&&(gt=i.RGBA16UI),at===i.UNSIGNED_INT&&(gt=i.RGBA32UI),at===i.BYTE&&(gt=i.RGBA8I),at===i.SHORT&&(gt=i.RGBA16I),at===i.INT&&(gt=i.RGBA32I)),E===i.RGB&&(at===i.UNSIGNED_SHORT&&zt&&(gt=zt.RGB16_EXT),at===i.SHORT&&zt&&(gt=zt.RGB16_SNORM_EXT),at===i.UNSIGNED_INT_5_9_9_9_REV&&(gt=i.RGB9_E5),at===i.UNSIGNED_INT_10F_11F_11F_REV&&(gt=i.R11F_G11F_B10F)),E===i.RGBA){let dt=Dt?$o:We.getTransfer(vt);at===i.FLOAT&&(gt=i.RGBA32F),at===i.HALF_FLOAT&&(gt=i.RGBA16F),at===i.UNSIGNED_BYTE&&(gt=dt===rn?i.SRGB8_ALPHA8:i.RGBA8),at===i.UNSIGNED_SHORT&&zt&&(gt=zt.RGBA16_EXT),at===i.SHORT&&zt&&(gt=zt.RGBA16_SNORM_EXT),at===i.UNSIGNED_SHORT_4_4_4_4&&(gt=i.RGBA4),at===i.UNSIGNED_SHORT_5_5_5_1&&(gt=i.RGB5_A1)}return(gt===i.R16F||gt===i.R32F||gt===i.RG16F||gt===i.RG32F||gt===i.RGBA16F||gt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),gt}function T(F,E){let at;return F?E===null||E===ji||E===$a?at=i.DEPTH24_STENCIL8:E===Ni?at=i.DEPTH32F_STENCIL8:E===ka&&(at=i.DEPTH24_STENCIL8,be("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ji||E===$a?at=i.DEPTH_COMPONENT24:E===Ni?at=i.DEPTH_COMPONENT32F:E===ka&&(at=i.DEPTH_COMPONENT16),at}function k(F,E){return m(F)===!0||F.isFramebufferTexture&&F.minFilter!==Fn&&F.minFilter!==Wn?Math.log2(Math.max(E.width,E.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?E.mipmaps.length:1}function q(F){let E=F.target;E.removeEventListener("dispose",q),B(E),E.isVideoTexture&&d.delete(E),E.isHTMLTexture&&b.delete(E)}function R(F){let E=F.target;E.removeEventListener("dispose",R),J(E)}function B(F){let E=n.get(F);if(E.__webglInit===void 0)return;let at=F.source,ct=M.get(at);if(ct){let vt=ct[E.__cacheKey];vt.usedTimes--,vt.usedTimes===0&&X(F),Object.keys(ct).length===0&&M.delete(at)}n.remove(F)}function X(F){let E=n.get(F);i.deleteTexture(E.__webglTexture);let at=F.source,ct=M.get(at);delete ct[E.__cacheKey],a.memory.textures--}function J(F){let E=n.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),n.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let ct=0;ct<6;ct++){if(Array.isArray(E.__webglFramebuffer[ct]))for(let vt=0;vt<E.__webglFramebuffer[ct].length;vt++)i.deleteFramebuffer(E.__webglFramebuffer[ct][vt]);else i.deleteFramebuffer(E.__webglFramebuffer[ct]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[ct])}else{if(Array.isArray(E.__webglFramebuffer))for(let ct=0;ct<E.__webglFramebuffer.length;ct++)i.deleteFramebuffer(E.__webglFramebuffer[ct]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ct=0;ct<E.__webglColorRenderbuffer.length;ct++)E.__webglColorRenderbuffer[ct]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[ct]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let at=F.textures;for(let ct=0,vt=at.length;ct<vt;ct++){let Dt=n.get(at[ct]);Dt.__webglTexture&&(i.deleteTexture(Dt.__webglTexture),a.memory.textures--),n.remove(at[ct])}n.remove(F)}let ot=0;function ht(){ot=0}function Q(){return ot}function st(F){ot=F}function pt(){let F=ot;return F>=s.maxTextures&&be("WebGLTextures: Trying to use "+(F+1)+" texture units while this GPU supports only "+s.maxTextures),ot+=1,F}function _t(F){let E=[];return E.push(F.wrapS),E.push(F.wrapT),E.push(F.wrapR||0),E.push(F.magFilter),E.push(F.minFilter),E.push(F.anisotropy),E.push(F.internalFormat),E.push(F.format),E.push(F.type),E.push(F.generateMipmaps),E.push(F.premultiplyAlpha),E.push(F.flipY),E.push(F.unpackAlignment),E.push(F.colorSpace),E.join()}function At(F,E){let at=n.get(F);if(F.isVideoTexture&&Z(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&at.__version!==F.version){let ct=F.image;if(ct===null)be("WebGLRenderer: Texture marked for update but no image data found.");else if(ct.complete===!1)be("WebGLRenderer: Texture marked for update but image is incomplete");else{Ut(at,F,E);return}}else F.isExternalTexture&&(at.__webglTexture=F.sourceTexture?F.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,at.__webglTexture,i.TEXTURE0+E)}function xt(F,E){let at=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&at.__version!==F.version){Ut(at,F,E);return}else F.isExternalTexture&&(at.__webglTexture=F.sourceTexture?F.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,at.__webglTexture,i.TEXTURE0+E)}function Et(F,E){let at=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&at.__version!==F.version){Ut(at,F,E);return}e.bindTexture(i.TEXTURE_3D,at.__webglTexture,i.TEXTURE0+E)}function wt(F,E){let at=n.get(F);if(F.isCubeDepthTexture!==!0&&F.version>0&&at.__version!==F.version){ue(at,F,E);return}e.bindTexture(i.TEXTURE_CUBE_MAP,at.__webglTexture,i.TEXTURE0+E)}let $t={[Yc]:i.REPEAT,[rs]:i.CLAMP_TO_EDGE,[Jc]:i.MIRRORED_REPEAT},ne={[Fn]:i.NEAREST,[F0]:i.NEAREST_MIPMAP_NEAREST,[Sl]:i.NEAREST_MIPMAP_LINEAR,[Wn]:i.LINEAR,[Pu]:i.LINEAR_MIPMAP_NEAREST,[or]:i.LINEAR_MIPMAP_LINEAR},Ye={[z0]:i.NEVER,[X0]:i.ALWAYS,[V0]:i.LESS,[gh]:i.LEQUAL,[H0]:i.EQUAL,[_h]:i.GEQUAL,[G0]:i.GREATER,[W0]:i.NOTEQUAL};function Ne(F,E){if(E.type===Ni&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Wn||E.magFilter===Pu||E.magFilter===Sl||E.magFilter===or||E.minFilter===Wn||E.minFilter===Pu||E.minFilter===Sl||E.minFilter===or)&&be("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(F,i.TEXTURE_WRAP_S,$t[E.wrapS]),i.texParameteri(F,i.TEXTURE_WRAP_T,$t[E.wrapT]),(F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY)&&i.texParameteri(F,i.TEXTURE_WRAP_R,$t[E.wrapR]),i.texParameteri(F,i.TEXTURE_MAG_FILTER,ne[E.magFilter]),i.texParameteri(F,i.TEXTURE_MIN_FILTER,ne[E.minFilter]),E.compareFunction&&(i.texParameteri(F,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(F,i.TEXTURE_COMPARE_FUNC,Ye[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Fn||E.minFilter!==Sl&&E.minFilter!==or||E.type===Ni&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let at=t.get("EXT_texture_filter_anisotropic");i.texParameterf(F,at.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function He(F,E){let at=!1;F.__webglInit===void 0&&(F.__webglInit=!0,E.addEventListener("dispose",q));let ct=E.source,vt=M.get(ct);vt===void 0&&(vt={},M.set(ct,vt));let Dt=_t(E);if(Dt!==F.__cacheKey){vt[Dt]===void 0&&(vt[Dt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,at=!0),vt[Dt].usedTimes++;let zt=vt[F.__cacheKey];zt!==void 0&&(vt[F.__cacheKey].usedTimes--,zt.usedTimes===0&&X(E)),F.__cacheKey=Dt,F.__webglTexture=vt[Dt].texture}return at}function yt(F,E,at){return Math.floor(Math.floor(F/at)/E)}function St(F,E,at,ct){let Dt=F.updateRanges;if(Dt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,E.width,E.height,at,ct,E.data);else{Dt.sort((he,Zt)=>he.start-Zt.start);let zt=0;for(let he=1;he<Dt.length;he++){let Zt=Dt[zt],Gt=Dt[he],le=Zt.start+Zt.count,pe=yt(Gt.start,E.width,4),Re=yt(Zt.start,E.width,4);Gt.start<=le+1&&pe===Re&&yt(Gt.start+Gt.count-1,E.width,4)===pe?Zt.count=Math.max(Zt.count,Gt.start+Gt.count-Zt.start):(++zt,Dt[zt]=Gt)}Dt.length=zt+1;let gt=e.getParameter(i.UNPACK_ROW_LENGTH),dt=e.getParameter(i.UNPACK_SKIP_PIXELS),qt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,E.width);for(let he=0,Zt=Dt.length;he<Zt;he++){let Gt=Dt[he],le=Math.floor(Gt.start/4),pe=Math.ceil(Gt.count/4),Re=le%E.width,nt=Math.floor(le/E.width),Yt=pe,bt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Re),e.pixelStorei(i.UNPACK_SKIP_ROWS,nt),e.texSubImage2D(i.TEXTURE_2D,0,Re,nt,Yt,bt,at,ct,E.data)}F.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,gt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,dt),e.pixelStorei(i.UNPACK_SKIP_ROWS,qt)}}function Ut(F,E,at){let ct=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ct=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ct=i.TEXTURE_3D);let vt=He(F,E),Dt=E.source;e.bindTexture(ct,F.__webglTexture,i.TEXTURE0+at);let zt=n.get(Dt);if(Dt.version!==zt.__version||vt===!0){if(e.activeTexture(i.TEXTURE0+at),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){let bt=We.getPrimaries(We.workingColorSpace),Wt=E.colorSpace===Bs?null:We.getPrimaries(E.colorSpace),Kt=E.colorSpace===Bs||bt===Wt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt)}e.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment);let dt=y(E.image,!1,s.maxTextureSize);dt=Oe(E,dt);let qt=r.convert(E.format,E.colorSpace),he=r.convert(E.type),Zt=D(E.internalFormat,qt,he,E.normalized,E.colorSpace,E.isVideoTexture);Ne(ct,E);let Gt,le=E.mipmaps,pe=E.isVideoTexture!==!0,Re=zt.__version===void 0||vt===!0,nt=Dt.dataReady,Yt=k(E,dt);if(E.isDepthTexture)Zt=T(E.format===lr,E.type),Re&&(pe?e.texStorage2D(i.TEXTURE_2D,1,Zt,dt.width,dt.height):e.texImage2D(i.TEXTURE_2D,0,Zt,dt.width,dt.height,0,qt,he,null));else if(E.isDataTexture)if(le.length>0){pe&&Re&&e.texStorage2D(i.TEXTURE_2D,Yt,Zt,le[0].width,le[0].height);for(let bt=0,Wt=le.length;bt<Wt;bt++)Gt=le[bt],pe?nt&&e.texSubImage2D(i.TEXTURE_2D,bt,0,0,Gt.width,Gt.height,qt,he,Gt.data):e.texImage2D(i.TEXTURE_2D,bt,Zt,Gt.width,Gt.height,0,qt,he,Gt.data);E.generateMipmaps=!1}else pe?(Re&&e.texStorage2D(i.TEXTURE_2D,Yt,Zt,dt.width,dt.height),nt&&St(E,dt,qt,he)):e.texImage2D(i.TEXTURE_2D,0,Zt,dt.width,dt.height,0,qt,he,dt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){pe&&Re&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Yt,Zt,le[0].width,le[0].height,dt.depth);for(let bt=0,Wt=le.length;bt<Wt;bt++)if(Gt=le[bt],E.format!==Ui)if(qt!==null)if(pe){if(nt)if(E.layerUpdates.size>0){let Kt=Uf(Gt.width,Gt.height,E.format,E.type);for(let Tt of E.layerUpdates){let oe=Gt.data.subarray(Tt*Kt/Gt.data.BYTES_PER_ELEMENT,(Tt+1)*Kt/Gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,bt,0,0,Tt,Gt.width,Gt.height,1,qt,oe)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,bt,0,0,0,Gt.width,Gt.height,dt.depth,qt,Gt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,bt,Zt,Gt.width,Gt.height,dt.depth,0,Gt.data,0,0);else be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else pe?nt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,bt,0,0,0,Gt.width,Gt.height,dt.depth,qt,he,Gt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,bt,Zt,Gt.width,Gt.height,dt.depth,0,qt,he,Gt.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{pe&&Re&&e.texStorage2D(i.TEXTURE_2D,Yt,Zt,le[0].width,le[0].height);for(let bt=0,Wt=le.length;bt<Wt;bt++)Gt=le[bt],E.format!==Ui?qt!==null?pe?nt&&e.compressedTexSubImage2D(i.TEXTURE_2D,bt,0,0,Gt.width,Gt.height,qt,Gt.data):e.compressedTexImage2D(i.TEXTURE_2D,bt,Zt,Gt.width,Gt.height,0,Gt.data):be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pe?nt&&e.texSubImage2D(i.TEXTURE_2D,bt,0,0,Gt.width,Gt.height,qt,he,Gt.data):e.texImage2D(i.TEXTURE_2D,bt,Zt,Gt.width,Gt.height,0,qt,he,Gt.data)}else if(E.isDataArrayTexture)if(pe){if(Re&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Yt,Zt,dt.width,dt.height,dt.depth),nt)if(E.layerUpdates.size>0){let bt=Uf(dt.width,dt.height,E.format,E.type);for(let Wt of E.layerUpdates){let Kt=dt.data.subarray(Wt*bt/dt.data.BYTES_PER_ELEMENT,(Wt+1)*bt/dt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Wt,dt.width,dt.height,1,qt,he,Kt)}E.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,dt.width,dt.height,dt.depth,qt,he,dt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Zt,dt.width,dt.height,dt.depth,0,qt,he,dt.data);else if(E.isData3DTexture)pe?(Re&&e.texStorage3D(i.TEXTURE_3D,Yt,Zt,dt.width,dt.height,dt.depth),nt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,dt.width,dt.height,dt.depth,qt,he,dt.data)):e.texImage3D(i.TEXTURE_3D,0,Zt,dt.width,dt.height,dt.depth,0,qt,he,dt.data);else if(E.isFramebufferTexture){if(Re)if(pe)e.texStorage2D(i.TEXTURE_2D,Yt,Zt,dt.width,dt.height);else{let bt=dt.width,Wt=dt.height;for(let Kt=0;Kt<Yt;Kt++)e.texImage2D(i.TEXTURE_2D,Kt,Zt,bt,Wt,0,qt,he,null),bt>>=1,Wt>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in i){let bt=i.canvas;if(bt.hasAttribute("layoutsubtree")||bt.setAttribute("layoutsubtree","true"),dt.parentNode!==bt){bt.appendChild(dt),b.add(E),bt.onpaint=Wt=>{let Kt=Wt.changedElements;for(let Tt of b)Kt.includes(Tt.image)&&(Tt.needsUpdate=!0)},bt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,dt);else{let Kt=i.RGBA,Tt=i.RGBA,oe=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Kt,Tt,oe,dt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(le.length>0){if(pe&&Re){let bt=Ue(le[0]);e.texStorage2D(i.TEXTURE_2D,Yt,Zt,bt.width,bt.height)}for(let bt=0,Wt=le.length;bt<Wt;bt++)Gt=le[bt],pe?nt&&e.texSubImage2D(i.TEXTURE_2D,bt,0,0,qt,he,Gt):e.texImage2D(i.TEXTURE_2D,bt,Zt,qt,he,Gt);E.generateMipmaps=!1}else if(pe){if(Re){let bt=Ue(dt);e.texStorage2D(i.TEXTURE_2D,Yt,Zt,bt.width,bt.height)}nt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,qt,he,dt)}else e.texImage2D(i.TEXTURE_2D,0,Zt,qt,he,dt);m(E)&&$(ct),zt.__version=Dt.version,E.onUpdate&&E.onUpdate(E)}F.__version=E.version}function ue(F,E,at){if(E.image.length!==6)return;let ct=He(F,E),vt=E.source;e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+at);let Dt=n.get(vt);if(vt.version!==Dt.__version||ct===!0){e.activeTexture(i.TEXTURE0+at);let zt=We.getPrimaries(We.workingColorSpace),gt=E.colorSpace===Bs?null:We.getPrimaries(E.colorSpace),dt=E.colorSpace===Bs||zt===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);let qt=E.isCompressedTexture||E.image[0].isCompressedTexture,he=E.image[0]&&E.image[0].isDataTexture,Zt=[];for(let Tt=0;Tt<6;Tt++)!qt&&!he?Zt[Tt]=y(E.image[Tt],!0,s.maxCubemapSize):Zt[Tt]=he?E.image[Tt].image:E.image[Tt],Zt[Tt]=Oe(E,Zt[Tt]);let Gt=Zt[0],le=r.convert(E.format,E.colorSpace),pe=r.convert(E.type),Re=D(E.internalFormat,le,pe,E.normalized,E.colorSpace),nt=E.isVideoTexture!==!0,Yt=Dt.__version===void 0||ct===!0,bt=vt.dataReady,Wt=k(E,Gt);Ne(i.TEXTURE_CUBE_MAP,E);let Kt;if(qt){nt&&Yt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Wt,Re,Gt.width,Gt.height);for(let Tt=0;Tt<6;Tt++){Kt=Zt[Tt].mipmaps;for(let oe=0;oe<Kt.length;oe++){let ie=Kt[oe];E.format!==Ui?le!==null?nt?bt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,oe,0,0,ie.width,ie.height,le,ie.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,oe,Re,ie.width,ie.height,0,ie.data):be("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):nt?bt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,oe,0,0,ie.width,ie.height,le,pe,ie.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,oe,Re,ie.width,ie.height,0,le,pe,ie.data)}}}else{if(Kt=E.mipmaps,nt&&Yt){Kt.length>0&&Wt++;let Tt=Ue(Zt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Wt,Re,Tt.width,Tt.height)}for(let Tt=0;Tt<6;Tt++)if(he){nt?bt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,0,0,Zt[Tt].width,Zt[Tt].height,le,pe,Zt[Tt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,Re,Zt[Tt].width,Zt[Tt].height,0,le,pe,Zt[Tt].data);for(let oe=0;oe<Kt.length;oe++){let Ke=Kt[oe].image[Tt].image;nt?bt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,oe+1,0,0,Ke.width,Ke.height,le,pe,Ke.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,oe+1,Re,Ke.width,Ke.height,0,le,pe,Ke.data)}}else{nt?bt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,0,0,le,pe,Zt[Tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,Re,le,pe,Zt[Tt]);for(let oe=0;oe<Kt.length;oe++){let ie=Kt[oe];nt?bt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,oe+1,0,0,le,pe,ie.image[Tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,oe+1,Re,le,pe,ie.image[Tt])}}}m(E)&&$(i.TEXTURE_CUBE_MAP),Dt.__version=vt.version,E.onUpdate&&E.onUpdate(E)}F.__version=E.version}function jt(F,E,at,ct,vt,Dt){let zt=r.convert(at.format,at.colorSpace),gt=r.convert(at.type),dt=D(at.internalFormat,zt,gt,at.normalized,at.colorSpace),qt=n.get(E),he=n.get(at);if(he.__renderTarget=E,!qt.__hasExternalTextures){let Zt=Math.max(1,E.width>>Dt),Gt=Math.max(1,E.height>>Dt);vt===i.TEXTURE_3D||vt===i.TEXTURE_2D_ARRAY?e.texImage3D(vt,Dt,dt,Zt,Gt,E.depth,0,zt,gt,null):e.texImage2D(vt,Dt,dt,Zt,Gt,0,zt,gt,null)}e.bindFramebuffer(i.FRAMEBUFFER,F),Ce(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ct,vt,he.__webglTexture,0,de(E)):(vt===i.TEXTURE_2D||vt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&vt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ct,vt,he.__webglTexture,Dt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ge(F,E,at){if(i.bindRenderbuffer(i.RENDERBUFFER,F),E.depthBuffer){let ct=E.depthTexture,vt=ct&&ct.isDepthTexture?ct.type:null,Dt=T(E.stencilBuffer,vt),zt=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ce(E)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de(E),Dt,E.width,E.height):at?i.renderbufferStorageMultisample(i.RENDERBUFFER,de(E),Dt,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Dt,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,zt,i.RENDERBUFFER,F)}else{let ct=E.textures;for(let vt=0;vt<ct.length;vt++){let Dt=ct[vt],zt=r.convert(Dt.format,Dt.colorSpace),gt=r.convert(Dt.type),dt=D(Dt.internalFormat,zt,gt,Dt.normalized,Dt.colorSpace);Ce(E)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de(E),dt,E.width,E.height):at?i.renderbufferStorageMultisample(i.RENDERBUFFER,de(E),dt,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,dt,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function te(F,E,at){let ct=E.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,F),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let vt=n.get(E.depthTexture);if(vt.__renderTarget=E,(!vt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ct){if(vt.__webglInit===void 0&&(vt.__webglInit=!0,E.depthTexture.addEventListener("dispose",q)),vt.__webglTexture===void 0){vt.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,vt.__webglTexture),Ne(i.TEXTURE_CUBE_MAP,E.depthTexture);let qt=r.convert(E.depthTexture.format),he=r.convert(E.depthTexture.type),Zt;E.depthTexture.format===os?Zt=i.DEPTH_COMPONENT24:E.depthTexture.format===lr&&(Zt=i.DEPTH24_STENCIL8);for(let Gt=0;Gt<6;Gt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Gt,0,Zt,E.width,E.height,0,qt,he,null)}}else At(E.depthTexture,0);let Dt=vt.__webglTexture,zt=de(E),gt=ct?i.TEXTURE_CUBE_MAP_POSITIVE_X+at:i.TEXTURE_2D,dt=E.depthTexture.format===lr?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(E.depthTexture.format===os)Ce(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,dt,gt,Dt,0,zt):i.framebufferTexture2D(i.FRAMEBUFFER,dt,gt,Dt,0);else if(E.depthTexture.format===lr)Ce(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,dt,gt,Dt,0,zt):i.framebufferTexture2D(i.FRAMEBUFFER,dt,gt,Dt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function rt(F){let E=n.get(F),at=F.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==F.depthTexture){let ct=F.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ct){let vt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ct.removeEventListener("dispose",vt)};ct.addEventListener("dispose",vt),E.__depthDisposeCallback=vt}E.__boundDepthTexture=ct}if(F.depthTexture&&!E.__autoAllocateDepthBuffer)if(at)for(let ct=0;ct<6;ct++)te(E.__webglFramebuffer[ct],F,ct);else{let ct=F.texture.mipmaps;ct&&ct.length>0?te(E.__webglFramebuffer[0],F,0):te(E.__webglFramebuffer,F,0)}else if(at){E.__webglDepthbuffer=[];for(let ct=0;ct<6;ct++)if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[ct]),E.__webglDepthbuffer[ct]===void 0)E.__webglDepthbuffer[ct]=i.createRenderbuffer(),ge(E.__webglDepthbuffer[ct],F,!1);else{let vt=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Dt=E.__webglDepthbuffer[ct];i.bindRenderbuffer(i.RENDERBUFFER,Dt),i.framebufferRenderbuffer(i.FRAMEBUFFER,vt,i.RENDERBUFFER,Dt)}}else{let ct=F.texture.mipmaps;if(ct&&ct.length>0?e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),ge(E.__webglDepthbuffer,F,!1);else{let vt=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Dt=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Dt),i.framebufferRenderbuffer(i.FRAMEBUFFER,vt,i.RENDERBUFFER,Dt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function It(F,E,at){let ct=n.get(F);E!==void 0&&jt(ct.__webglFramebuffer,F,F.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),at!==void 0&&rt(F)}function H(F){let E=F.texture,at=n.get(F),ct=n.get(E);F.addEventListener("dispose",R);let vt=F.textures,Dt=F.isWebGLCubeRenderTarget===!0,zt=vt.length>1;if(zt||(ct.__webglTexture===void 0&&(ct.__webglTexture=i.createTexture()),ct.__version=E.version,a.memory.textures++),Dt){at.__webglFramebuffer=[];for(let gt=0;gt<6;gt++)if(E.mipmaps&&E.mipmaps.length>0){at.__webglFramebuffer[gt]=[];for(let dt=0;dt<E.mipmaps.length;dt++)at.__webglFramebuffer[gt][dt]=i.createFramebuffer()}else at.__webglFramebuffer[gt]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){at.__webglFramebuffer=[];for(let gt=0;gt<E.mipmaps.length;gt++)at.__webglFramebuffer[gt]=i.createFramebuffer()}else at.__webglFramebuffer=i.createFramebuffer();if(zt)for(let gt=0,dt=vt.length;gt<dt;gt++){let qt=n.get(vt[gt]);qt.__webglTexture===void 0&&(qt.__webglTexture=i.createTexture(),a.memory.textures++)}if(F.samples>0&&Ce(F)===!1){at.__webglMultisampledFramebuffer=i.createFramebuffer(),at.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,at.__webglMultisampledFramebuffer);for(let gt=0;gt<vt.length;gt++){let dt=vt[gt];at.__webglColorRenderbuffer[gt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,at.__webglColorRenderbuffer[gt]);let qt=r.convert(dt.format,dt.colorSpace),he=r.convert(dt.type),Zt=D(dt.internalFormat,qt,he,dt.normalized,dt.colorSpace,F.isXRRenderTarget===!0),Gt=de(F);i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt,Zt,F.width,F.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,at.__webglColorRenderbuffer[gt])}i.bindRenderbuffer(i.RENDERBUFFER,null),F.depthBuffer&&(at.__webglDepthRenderbuffer=i.createRenderbuffer(),ge(at.__webglDepthRenderbuffer,F,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Dt){e.bindTexture(i.TEXTURE_CUBE_MAP,ct.__webglTexture),Ne(i.TEXTURE_CUBE_MAP,E);for(let gt=0;gt<6;gt++)if(E.mipmaps&&E.mipmaps.length>0)for(let dt=0;dt<E.mipmaps.length;dt++)jt(at.__webglFramebuffer[gt][dt],F,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,dt);else jt(at.__webglFramebuffer[gt],F,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0);m(E)&&$(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(zt){for(let gt=0,dt=vt.length;gt<dt;gt++){let qt=vt[gt],he=n.get(qt),Zt=i.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Zt=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Zt,he.__webglTexture),Ne(Zt,qt),jt(at.__webglFramebuffer,F,qt,i.COLOR_ATTACHMENT0+gt,Zt,0),m(qt)&&$(Zt)}e.unbindTexture()}else{let gt=i.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(gt=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(gt,ct.__webglTexture),Ne(gt,E),E.mipmaps&&E.mipmaps.length>0)for(let dt=0;dt<E.mipmaps.length;dt++)jt(at.__webglFramebuffer[dt],F,E,i.COLOR_ATTACHMENT0,gt,dt);else jt(at.__webglFramebuffer,F,E,i.COLOR_ATTACHMENT0,gt,0);m(E)&&$(gt),e.unbindTexture()}F.depthBuffer&&rt(F)}function Lt(F){let E=F.textures;for(let at=0,ct=E.length;at<ct;at++){let vt=E[at];if(m(vt)){let Dt=V(F),zt=n.get(vt).__webglTexture;e.bindTexture(Dt,zt),$(Dt),e.unbindTexture()}}}let kt=[],ce=[];function fe(F){if(F.samples>0){if(Ce(F)===!1){let E=F.textures,at=F.width,ct=F.height,vt=i.COLOR_BUFFER_BIT,Dt=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,zt=n.get(F),gt=E.length>1;if(gt)for(let qt=0;qt<E.length;qt++)e.bindFramebuffer(i.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+qt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,zt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+qt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,zt.__webglMultisampledFramebuffer);let dt=F.texture.mipmaps;dt&&dt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,zt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,zt.__webglFramebuffer);for(let qt=0;qt<E.length;qt++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(vt|=i.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(vt|=i.STENCIL_BUFFER_BIT)),gt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,zt.__webglColorRenderbuffer[qt]);let he=n.get(E[qt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,he,0)}i.blitFramebuffer(0,0,at,ct,0,0,at,ct,vt,i.NEAREST),u===!0&&(kt.length=0,ce.length=0,kt.push(i.COLOR_ATTACHMENT0+qt),F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&(kt.push(Dt),ce.push(Dt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ce)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,kt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),gt)for(let qt=0;qt<E.length;qt++){e.bindFramebuffer(i.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+qt,i.RENDERBUFFER,zt.__webglColorRenderbuffer[qt]);let he=n.get(E[qt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,zt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+qt,i.TEXTURE_2D,he,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,zt.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&u){let E=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function de(F){return Math.min(s.maxSamples,F.samples)}function Ce(F){let E=n.get(F);return F.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Z(F){let E=a.render.frame;d.get(F)!==E&&(d.set(F,E),F.update())}function Oe(F,E){let at=F.colorSpace,ct=F.format,vt=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||at!==ko&&at!==Bs&&(We.getTransfer(at)===rn?(ct!==Ui||vt!==Si)&&be("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ee("WebGLTextures: Unsupported texture color space:",at)),E}function Ue(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(h.width=F.naturalWidth||F.width,h.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(h.width=F.displayWidth,h.height=F.displayHeight):(h.width=F.width,h.height=F.height),h}this.allocateTextureUnit=pt,this.resetTextureUnits=ht,this.getTextureUnits=Q,this.setTextureUnits=st,this.setTexture2D=At,this.setTexture2DArray=xt,this.setTexture3D=Et,this.setTextureCube=wt,this.rebindTextures=It,this.setupRenderTarget=H,this.updateRenderTargetMipmap=Lt,this.updateMultisampleRenderTarget=fe,this.setupDepthRenderbuffer=rt,this.setupFrameBufferTexture=jt,this.useMultisampledRTT=Ce,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function b1(i,t){function e(n,s=Bs){let r,a=We.getTransfer(s);if(n===Si)return i.UNSIGNED_BYTE;if(n===Du)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Nu)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Mf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===wf)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Sf)return i.BYTE;if(n===bf)return i.SHORT;if(n===ka)return i.UNSIGNED_SHORT;if(n===Lu)return i.INT;if(n===ji)return i.UNSIGNED_INT;if(n===Ni)return i.FLOAT;if(n===Ki)return i.HALF_FLOAT;if(n===Ef)return i.ALPHA;if(n===Tf)return i.RGB;if(n===Ui)return i.RGBA;if(n===os)return i.DEPTH_COMPONENT;if(n===lr)return i.DEPTH_STENCIL;if(n===Uu)return i.RED;if(n===Ou)return i.RED_INTEGER;if(n===cr)return i.RG;if(n===Fu)return i.RG_INTEGER;if(n===Bu)return i.RGBA_INTEGER;if(n===bl||n===Ml||n===wl||n===El)if(a===rn)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===bl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ml)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===wl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===El)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===bl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ml)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===wl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===El)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ku||n===$u||n===zu||n===Vu)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ku)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===$u)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===zu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Vu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Hu||n===Gu||n===Wu||n===Xu||n===qu||n===Tl||n===Yu)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Hu||n===Gu)return a===rn?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Wu)return a===rn?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Xu)return r.COMPRESSED_R11_EAC;if(n===qu)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Tl)return r.COMPRESSED_RG11_EAC;if(n===Yu)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ju||n===Zu||n===ju||n===Ku||n===Qu||n===th||n===eh||n===nh||n===ih||n===sh||n===rh||n===ah||n===oh||n===lh)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ju)return a===rn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Zu)return a===rn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ju)return a===rn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ku)return a===rn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Qu)return a===rn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===th)return a===rn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===eh)return a===rn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===nh)return a===rn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ih)return a===rn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===sh)return a===rn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===rh)return a===rn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ah)return a===rn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===oh)return a===rn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===lh)return a===rn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ch||n===uh||n===hh)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ch)return a===rn?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===uh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===hh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===dh||n===fh||n===Al||n===ph)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===dh)return r.COMPRESSED_RED_RGTC1_EXT;if(n===fh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Al)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ph)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===$a?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var M1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,w1=`
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

}`,Jf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Ko(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new $n({vertexShader:M1,fragmentShader:w1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new kn(new ll(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Zf=class extends ls{constructor(t,e){super();let n=this,s=null,r=1,a=null,l="local-floor",u=1,h=null,d=null,b=null,g=null,M=null,w=null,N=typeof XRWebGLBinding<"u",y=new Jf,m={},$=e.getContextAttributes(),V=null,D=null,T=[],k=[],q=new Vt,R=null,B=null,X=new ti;X.viewport=new an;let J=new ti;J.viewport=new an;let ot=[X,J],ht=new Au,Q=null,st=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(yt){let St=T[yt];return St===void 0&&(St=new Ia,T[yt]=St),St.getTargetRaySpace()},this.getControllerGrip=function(yt){let St=T[yt];return St===void 0&&(St=new Ia,T[yt]=St),St.getGripSpace()},this.getHand=function(yt){let St=T[yt];return St===void 0&&(St=new Ia,T[yt]=St),St.getHandSpace()};function pt(yt){let St=k.indexOf(yt.inputSource);if(St===-1)return;let Ut=T[St];Ut!==void 0&&(Ut.update(yt.inputSource,yt.frame,h||a),Ut.dispatchEvent({type:yt.type,data:yt.inputSource}))}function _t(){s.removeEventListener("select",pt),s.removeEventListener("selectstart",pt),s.removeEventListener("selectend",pt),s.removeEventListener("squeeze",pt),s.removeEventListener("squeezestart",pt),s.removeEventListener("squeezeend",pt),s.removeEventListener("end",_t),s.removeEventListener("inputsourceschange",At);for(let yt=0;yt<T.length;yt++){let St=k[yt];St!==null&&(k[yt]=null,T[yt].disconnect(St))}Q=null,st=null,y.reset();for(let yt in m)delete m[yt];if(t.setRenderTarget(V),M=null,g=null,b=null,s=null,D=null,He.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(q.width,q.height,!1),B!==null){let yt=B.camera;yt.fov=B.fov,yt.zoom=B.zoom,yt.updateProjectionMatrix(),B=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(yt){r=yt,n.isPresenting===!0&&be("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(yt){l=yt,n.isPresenting===!0&&be("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(yt){h=yt},this.getBaseLayer=function(){return g!==null?g:M},this.getBinding=function(){return b===null&&N&&(b=new XRWebGLBinding(s,e)),b},this.getFrame=function(){return w},this.getSession=function(){return s},this.setSession=async function(yt){if(s=yt,s!==null){if(V=t.getRenderTarget(),s.addEventListener("select",pt),s.addEventListener("selectstart",pt),s.addEventListener("selectend",pt),s.addEventListener("squeeze",pt),s.addEventListener("squeezestart",pt),s.addEventListener("squeezeend",pt),s.addEventListener("end",_t),s.addEventListener("inputsourceschange",At),$.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(q),N&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ut=null,ue=null,jt=null;$.depth&&(jt=$.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Ut=$.stencil?lr:os,ue=$.stencil?$a:ji);let ge={colorFormat:e.RGBA8,depthFormat:jt,scaleFactor:r};b=this.getBinding(),g=b.createProjectionLayer(ge),s.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),D=new vi(g.textureWidth,g.textureHeight,{format:Ui,type:Si,depthTexture:new tr(g.textureWidth,g.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,Ut),stencilBuffer:$.stencil,colorSpace:t.outputColorSpace,samples:$.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}else{let Ut={antialias:$.antialias,alpha:!0,depth:$.depth,stencil:$.stencil,framebufferScaleFactor:r};M=new XRWebGLLayer(s,e,Ut),s.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),D=new vi(M.framebufferWidth,M.framebufferHeight,{format:Ui,type:Si,colorSpace:t.outputColorSpace,stencilBuffer:$.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1,storeMultisampledDepthBuffer:M.ignoreDepthValues===!1,storeMultisampledStencilBuffer:M.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(u),h=null,a=await s.requestReferenceSpace(l),He.setContext(s),He.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function At(yt){for(let St=0;St<yt.removed.length;St++){let Ut=yt.removed[St],ue=k.indexOf(Ut);ue>=0&&(k[ue]=null,T[ue].disconnect(Ut))}for(let St=0;St<yt.added.length;St++){let Ut=yt.added[St],ue=k.indexOf(Ut);if(ue===-1){for(let ge=0;ge<T.length;ge++)if(ge>=k.length){k.push(Ut),ue=ge;break}else if(k[ge]===null){k[ge]=Ut,ue=ge;break}if(ue===-1)break}let jt=T[ue];jt&&jt.connect(Ut)}}let xt=new j,Et=new j;function wt(yt,St,Ut){xt.setFromMatrixPosition(St.matrixWorld),Et.setFromMatrixPosition(Ut.matrixWorld);let ue=xt.distanceTo(Et),jt=St.projectionMatrix.elements,ge=Ut.projectionMatrix.elements,te=jt[14]/(jt[10]-1),rt=jt[14]/(jt[10]+1),It=(jt[9]+1)/jt[5],H=(jt[9]-1)/jt[5],Lt=(jt[8]-1)/jt[0],kt=(ge[8]+1)/ge[0],ce=te*Lt,fe=te*kt,de=ue/(-Lt+kt),Ce=de*-Lt;if(St.matrixWorld.decompose(yt.position,yt.quaternion,yt.scale),yt.translateX(Ce),yt.translateZ(de),yt.matrixWorld.compose(yt.position,yt.quaternion,yt.scale),yt.matrixWorldInverse.copy(yt.matrixWorld).invert(),jt[10]===-1)yt.projectionMatrix.copy(St.projectionMatrix),yt.projectionMatrixInverse.copy(St.projectionMatrixInverse);else{let Z=te+de,Oe=rt+de,Ue=ce-Ce,F=fe+(ue-Ce),E=It*rt/Oe*Z,at=H*rt/Oe*Z;yt.projectionMatrix.makePerspective(Ue,F,E,at,Z,Oe),yt.projectionMatrixInverse.copy(yt.projectionMatrix).invert()}}function $t(yt,St){St===null?yt.matrixWorld.copy(yt.matrix):yt.matrixWorld.multiplyMatrices(St.matrixWorld,yt.matrix),yt.matrixWorldInverse.copy(yt.matrixWorld).invert()}this.updateCamera=function(yt){if(s===null)return;let St=yt.near,Ut=yt.far;y.texture!==null&&(y.depthNear>0&&(St=y.depthNear),y.depthFar>0&&(Ut=y.depthFar)),ht.near=J.near=X.near=St,ht.far=J.far=X.far=Ut,(Q!==ht.near||st!==ht.far)&&(s.updateRenderState({depthNear:ht.near,depthFar:ht.far}),Q=ht.near,st=ht.far),ht.layers.mask=yt.layers.mask|6,X.layers.mask=ht.layers.mask&-5,J.layers.mask=ht.layers.mask&-3;let ue=yt.parent,jt=ht.cameras;$t(ht,ue);for(let ge=0;ge<jt.length;ge++)$t(jt[ge],ue);jt.length===2?wt(ht,X,J):ht.projectionMatrix.copy(X.projectionMatrix),B===null&&yt.isPerspectiveCamera&&(B={camera:yt,fov:yt.fov,zoom:yt.zoom}),ne(yt,ht,ue)};function ne(yt,St,Ut){Ut===null?yt.matrix.copy(St.matrixWorld):(yt.matrix.copy(Ut.matrixWorld),yt.matrix.invert(),yt.matrix.multiply(St.matrixWorld)),yt.matrix.decompose(yt.position,yt.quaternion,yt.scale),yt.updateMatrixWorld(!0),yt.projectionMatrix.copy(St.projectionMatrix),yt.projectionMatrixInverse.copy(St.projectionMatrixInverse),yt.isPerspectiveCamera&&(yt.fov=Aa*2*Math.atan(1/yt.projectionMatrix.elements[5]),yt.zoom=1)}this.getCamera=function(){return ht},this.getFoveation=function(){if(!(g===null&&M===null))return u},this.setFoveation=function(yt){u=yt,g!==null&&(g.fixedFoveation=yt),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=yt)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(ht)},this.getCameraTexture=function(yt){return m[yt]};let Ye=null;function Ne(yt,St){if(d=St.getViewerPose(h||a),w=St,d!==null){let Ut=d.views;M!==null&&(t.setRenderTargetFramebuffer(D,M.framebuffer),t.setRenderTarget(D));let ue=!1;Ut.length!==ht.cameras.length&&(ht.cameras.length=0,ue=!0);for(let rt=0;rt<Ut.length;rt++){let It=Ut[rt],H=null;if(M!==null)H=M.getViewport(It);else{let kt=b.getViewSubImage(g,It);H=kt.viewport,rt===0&&(t.setRenderTargetTextures(D,kt.colorTexture,kt.depthStencilTexture),t.setRenderTarget(D))}let Lt=ot[rt];Lt===void 0&&(Lt=new ti,Lt.layers.enable(rt),Lt.viewport=new an,ot[rt]=Lt),Lt.matrix.fromArray(It.transform.matrix),Lt.matrix.decompose(Lt.position,Lt.quaternion,Lt.scale),Lt.projectionMatrix.fromArray(It.projectionMatrix),Lt.projectionMatrixInverse.copy(Lt.projectionMatrix).invert(),Lt.viewport.set(H.x,H.y,H.width,H.height),rt===0&&(ht.matrix.copy(Lt.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale)),ue===!0&&ht.cameras.push(Lt)}let jt=s.enabledFeatures;if(jt&&jt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&N){b=n.getBinding();let rt=b.getDepthInformation(Ut[0]);rt&&rt.isValid&&rt.texture&&y.init(rt,s.renderState)}if(jt&&jt.includes("camera-access")&&N){t.state.unbindTexture(),b=n.getBinding();for(let rt=0;rt<Ut.length;rt++){let It=Ut[rt].camera;if(It){let H=m[It];H||(H=new Ko,m[It]=H);let Lt=b.getCameraImage(It);H.sourceTexture=Lt}}}}for(let Ut=0;Ut<T.length;Ut++){let ue=k[Ut],jt=T[Ut];ue!==null&&jt!==void 0&&jt.update(ue,St,h||a)}Ye&&Ye(yt,St),St.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:St}),w=null}let He=new Eg;He.setAnimationLoop(Ne),this.setAnimationLoop=function(yt){Ye=yt},this.dispose=function(){}}},E1=new qe,Pg=new Le;Pg.set(-1,0,0,0,1,0,0,0,1);function T1(i,t){function e(y,m){y.matrixAutoUpdate===!0&&y.updateMatrix(),m.value.copy(y.matrix)}function n(y,m){m.color.getRGB(y.fogColor.value,Lf(i)),m.isFog?(y.fogNear.value=m.near,y.fogFar.value=m.far):m.isFogExp2&&(y.fogDensity.value=m.density)}function s(y,m,$,V,D){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(y,m):m.isMeshLambertMaterial?(r(y,m),m.envMap&&(y.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(y,m),b(y,m)):m.isMeshPhongMaterial?(r(y,m),d(y,m),m.envMap&&(y.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(y,m),g(y,m),m.isMeshPhysicalMaterial&&M(y,m,D)):m.isMeshMatcapMaterial?(r(y,m),w(y,m)):m.isMeshDepthMaterial?r(y,m):m.isMeshDistanceMaterial?(r(y,m),N(y,m)):m.isMeshNormalMaterial?r(y,m):m.isLineBasicMaterial?(a(y,m),m.isLineDashedMaterial&&l(y,m)):m.isPointsMaterial?u(y,m,$,V):m.isSpriteMaterial?h(y,m):m.isShadowMaterial?(y.color.value.copy(m.color),y.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(y,m){y.opacity.value=m.opacity,m.color&&y.diffuse.value.copy(m.color),m.emissive&&y.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(y.map.value=m.map,e(m.map,y.mapTransform)),m.alphaMap&&(y.alphaMap.value=m.alphaMap,e(m.alphaMap,y.alphaMapTransform)),m.bumpMap&&(y.bumpMap.value=m.bumpMap,e(m.bumpMap,y.bumpMapTransform),y.bumpScale.value=m.bumpScale,m.side===ci&&(y.bumpScale.value*=-1)),m.normalMap&&(y.normalMap.value=m.normalMap,e(m.normalMap,y.normalMapTransform),y.normalScale.value.copy(m.normalScale),m.side===ci&&y.normalScale.value.negate()),m.displacementMap&&(y.displacementMap.value=m.displacementMap,e(m.displacementMap,y.displacementMapTransform),y.displacementScale.value=m.displacementScale,y.displacementBias.value=m.displacementBias),m.emissiveMap&&(y.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,y.emissiveMapTransform)),m.specularMap&&(y.specularMap.value=m.specularMap,e(m.specularMap,y.specularMapTransform)),m.alphaTest>0&&(y.alphaTest.value=m.alphaTest);let $=t.get(m),V=$.envMap,D=$.envMapRotation;V&&(y.envMap.value=V,y.envMapRotation.value.setFromMatrix4(E1.makeRotationFromEuler(D)).transpose(),V.isCubeTexture&&V.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(Pg),y.reflectivity.value=m.reflectivity,y.ior.value=m.ior,y.refractionRatio.value=m.refractionRatio),m.lightMap&&(y.lightMap.value=m.lightMap,y.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,y.lightMapTransform)),m.aoMap&&(y.aoMap.value=m.aoMap,y.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,y.aoMapTransform))}function a(y,m){y.diffuse.value.copy(m.color),y.opacity.value=m.opacity,m.map&&(y.map.value=m.map,e(m.map,y.mapTransform))}function l(y,m){y.dashSize.value=m.dashSize,y.totalSize.value=m.dashSize+m.gapSize,y.scale.value=m.scale}function u(y,m,$,V){y.diffuse.value.copy(m.color),y.opacity.value=m.opacity,y.size.value=m.size*$,y.scale.value=V*.5,m.map&&(y.map.value=m.map,e(m.map,y.uvTransform)),m.alphaMap&&(y.alphaMap.value=m.alphaMap,e(m.alphaMap,y.alphaMapTransform)),m.alphaTest>0&&(y.alphaTest.value=m.alphaTest)}function h(y,m){y.diffuse.value.copy(m.color),y.opacity.value=m.opacity,y.rotation.value=m.rotation,m.map&&(y.map.value=m.map,e(m.map,y.mapTransform)),m.alphaMap&&(y.alphaMap.value=m.alphaMap,e(m.alphaMap,y.alphaMapTransform)),m.alphaTest>0&&(y.alphaTest.value=m.alphaTest)}function d(y,m){y.specular.value.copy(m.specular),y.shininess.value=Math.max(m.shininess,1e-4)}function b(y,m){m.gradientMap&&(y.gradientMap.value=m.gradientMap)}function g(y,m){y.metalness.value=m.metalness,m.metalnessMap&&(y.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,y.metalnessMapTransform)),y.roughness.value=m.roughness,m.roughnessMap&&(y.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,y.roughnessMapTransform)),m.envMap&&(y.envMapIntensity.value=m.envMapIntensity)}function M(y,m,$){y.ior.value=m.ior,m.sheen>0&&(y.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),y.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(y.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,y.sheenColorMapTransform)),m.sheenRoughnessMap&&(y.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,y.sheenRoughnessMapTransform))),m.clearcoat>0&&(y.clearcoat.value=m.clearcoat,y.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(y.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,y.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(y.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===ci&&y.clearcoatNormalScale.value.negate())),m.dispersion>0&&(y.dispersion.value=m.dispersion),m.retroreflectivity>0&&(y.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(y.iridescence.value=m.iridescence,y.iridescenceIOR.value=m.iridescenceIOR,y.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(y.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,y.iridescenceMapTransform)),m.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),m.transmission>0&&(y.transmission.value=m.transmission,y.transmissionSamplerMap.value=$.texture,y.transmissionSamplerSize.value.set($.width,$.height),m.transmissionMap&&(y.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,y.transmissionMapTransform)),y.thickness.value=m.thickness,m.thicknessMap&&(y.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=m.attenuationDistance,y.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(y.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(y.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=m.specularIntensity,y.specularColor.value.copy(m.specularColor),m.specularColorMap&&(y.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,y.specularColorMapTransform)),m.specularIntensityMap&&(y.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,y.specularIntensityMapTransform))}function w(y,m){m.matcap&&(y.matcap.value=m.matcap)}function N(y,m){let $=t.get(m).light;y.referencePosition.value.setFromMatrixPosition($.matrixWorld),y.nearDistance.value=$.shadow.camera.near,y.farDistance.value=$.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function A1(i,t,e,n){let s={},r={},a=[],l=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function u(D,T){let k=T.program;n.uniformBlockBinding(D,k)}function h(D,T){let k=s[D.id];k===void 0&&(y(D),k=d(D),s[D.id]=k,D.addEventListener("dispose",$));let q=T.program;n.updateUBOMapping(D,q);let R=t.render.frame;r[D.id]!==R&&(g(D),r[D.id]=R)}function d(D){let T=b();D.__bindingPointIndex=T;let k=i.createBuffer(),q=D.__size,R=D.usage;return i.bindBuffer(i.UNIFORM_BUFFER,k),i.bufferData(i.UNIFORM_BUFFER,q,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,k),k}function b(){for(let D=0;D<l;D++)if(a.indexOf(D)===-1)return a.push(D),D;return Ee("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(D){let T=s[D.id],k=D.uniforms,q=D.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let R=0,B=k.length;R<B;R++){let X=k[R];if(Array.isArray(X))for(let J=0,ot=X.length;J<ot;J++)M(X[J],R,J,q);else M(X,R,0,q)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function M(D,T,k,q){if(N(D,T,k,q)===!0){let R=D.__offset,B=D.value;if(Array.isArray(B)){let X=0;for(let J=0;J<B.length;J++){let ot=B[J],ht=m(ot);w(ot,D.__data,X),typeof ot!="number"&&typeof ot!="boolean"&&!ot.isMatrix3&&!ArrayBuffer.isView(ot)&&(X+=ht.storage/Float32Array.BYTES_PER_ELEMENT)}}else w(B,D.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,R,D.__data)}}function w(D,T,k){typeof D=="number"||typeof D=="boolean"?T[0]=D:D.isMatrix3?(T[0]=D.elements[0],T[1]=D.elements[1],T[2]=D.elements[2],T[3]=0,T[4]=D.elements[3],T[5]=D.elements[4],T[6]=D.elements[5],T[7]=0,T[8]=D.elements[6],T[9]=D.elements[7],T[10]=D.elements[8],T[11]=0):ArrayBuffer.isView(D)?T.set(new D.constructor(D.buffer,D.byteOffset,T.length)):D.toArray(T,k)}function N(D,T,k,q){let R=D.value,B=T+"_"+k;if(q[B]===void 0)return typeof R=="number"||typeof R=="boolean"?q[B]=R:ArrayBuffer.isView(R)?q[B]=R.slice():q[B]=R.clone(),!0;{let X=q[B];if(typeof R=="number"||typeof R=="boolean"){if(X!==R)return q[B]=R,!0}else{if(ArrayBuffer.isView(R))return!0;if(X.equals(R)===!1)return X.copy(R),!0}}return!1}function y(D){let T=D.uniforms,k=0,q=16;for(let B=0,X=T.length;B<X;B++){let J=Array.isArray(T[B])?T[B]:[T[B]];for(let ot=0,ht=J.length;ot<ht;ot++){let Q=J[ot],st=Array.isArray(Q.value)?Q.value:[Q.value];for(let pt=0,_t=st.length;pt<_t;pt++){let At=st[pt],xt=m(At),Et=k%q,wt=Et%xt.boundary,$t=Et+wt;k+=wt,$t!==0&&q-$t<xt.storage&&(k+=q-$t),Q.__data=new Float32Array(xt.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=k,k+=xt.storage}}}let R=k%q;return R>0&&(k+=q-R),D.__size=k,D.__cache={},this}function m(D){let T={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(T.boundary=4,T.storage=4):D.isVector2?(T.boundary=8,T.storage=8):D.isVector3||D.isColor?(T.boundary=16,T.storage=12):D.isVector4?(T.boundary=16,T.storage=16):D.isMatrix3?(T.boundary=48,T.storage=48):D.isMatrix4?(T.boundary=64,T.storage=64):D.isTexture?be("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(D)?(T.boundary=16,T.storage=D.byteLength):be("WebGLRenderer: Unsupported uniform value type.",D),T}function $(D){let T=D.target;T.removeEventListener("dispose",$);let k=a.indexOf(T.__bindingPointIndex);a.splice(k,1),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function V(){for(let D in s)i.deleteBuffer(s[D]);a=[],s={},r={}}return{bind:u,update:h,dispose:V}}var C1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),fs=null;function R1(){return fs===null&&(fs=new qo(C1,16,16,cr,Ki),fs.name="DFG_LUT",fs.minFilter=Wn,fs.magFilter=Wn,fs.wrapS=rs,fs.wrapT=rs,fs.generateMipmaps=!1,fs.needsUpdate=!0),fs}var bh=class{constructor(t={}){let{canvas:e=q0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:h=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:b=!1,reversedDepthBuffer:g=!1,outputBufferType:M=Si}=t;this.isWebGLRenderer=!0;let w;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");w=n.getContextAttributes().alpha}else w=a;let N=M,y=new Set([Bu,Fu,Ou]),m=new Set([Si,ji,ka,$a,Du,Nu]),$=new Uint32Array(4),V=new Int32Array(4),D=new j,T=null,k=null,q=[],R=[],B=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Zi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let X=this,J=!1,ot=null,ht=null,Q=null,st=null;this._outputColorSpace=Ei;let pt=0,_t=0,At=null,xt=-1,Et=null,wt=new an,$t=new an,ne=null,Ye=new ye(0),Ne=0,He=e.width,yt=e.height,St=1,Ut=null,ue=null,jt=new an(0,0,He,yt),ge=new an(0,0,He,yt),te=!1,rt=new Pa,It=!1,H=!1,Lt=new qe,kt=new j,ce=new an,fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},de=!1;function Ce(){return At===null?St:1}let Z=n;function Oe(I,tt){return e.getContext(I,tt)}let Ue,F,E,at,ct,vt,Dt,zt,gt,dt,qt,he,Zt,Gt,le,pe,Re,nt,Yt,bt,Wt,Kt,Tt;try{let I={alpha:!0,depth:s,stencil:r,antialias:l,premultipliedAlpha:u,preserveDrawingBuffer:h,powerPreference:d,failIfMajorPerformanceCaveat:b};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Ke,!1),e.addEventListener("webglcontextrestored",Je,!1),e.addEventListener("webglcontextcreationerror",Vn,!1),Z===null){let tt="webgl2";if(Z=Oe(tt,I),Z===null)throw Oe(tt)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}oe()}catch(I){throw e.removeEventListener("webglcontextlost",Ke,!1),e.removeEventListener("webglcontextrestored",Je,!1),e.removeEventListener("webglcontextcreationerror",Vn,!1),Ee("WebGLRenderer: "+I.message),I}function oe(){Ue=new Ob(Z),Ue.init(),Wt=new b1(Z,Ue),F=new Tb(Z,Ue,t,Wt),E=new y1(Z,Ue),F.reversedDepthBuffer&&g&&E.buffers.depth.setReversed(!0),ht=Z.createFramebuffer(),Q=Z.createFramebuffer(),st=Z.createFramebuffer(),at=new kb(Z),ct=new a1,vt=new S1(Z,Ue,E,ct,F,Wt,at),Dt=new Ub(X),zt=new zv(Z),Kt=new wb(Z,zt),gt=new Fb(Z,zt,at,Kt),dt=new zb(Z,gt,zt,Kt,at),nt=new $b(Z,F,vt),le=new Ab(ct),qt=new r1(X,Dt,Ue,F,Kt,le),he=new T1(X,ct),Zt=new l1,Gt=new p1(Ue),Re=new Mb(X,Dt,E,dt,w,u),pe=new v1(X,dt,F),Tt=new A1(Z,at,F,E),Yt=new Eb(Z,Ue,at),bt=new Bb(Z,Ue,at),at.programs=qt.programs,X.capabilities=F,X.extensions=Ue,X.properties=ct,X.renderLists=Zt,X.shadowMap=pe,X.state=E,X.info=at}N!==Si&&(B=new Hb(N,e.width,e.height,l,s,r));let ie=new Zf(X,Z);this.xr=ie,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){let I=Ue.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){let I=Ue.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return St},this.setPixelRatio=function(I){I!==void 0&&(St=I,this.setSize(He,yt,!1))},this.getSize=function(I){return I.set(He,yt)},this.setSize=function(I,tt,ft=!0){if(ie.isPresenting){be("WebGLRenderer: Can't change size while VR device is presenting.");return}He=I,yt=tt,e.width=Math.floor(I*St),e.height=Math.floor(tt*St),ft===!0&&(e.style.width=I+"px",e.style.height=tt+"px"),B!==null&&B.setSize(e.width,e.height),this.setViewport(0,0,I,tt)},this.getDrawingBufferSize=function(I){return I.set(He*St,yt*St).floor()},this.setDrawingBufferSize=function(I,tt,ft){He=I,yt=tt,St=ft,e.width=Math.floor(I*ft),e.height=Math.floor(tt*ft),this.setViewport(0,0,I,tt)},this.setEffects=function(I){if(N===Si){Ee("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(I){for(let tt=0;tt<I.length;tt++)if(I[tt].isOutputPass===!0){be("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}B.setEffects(I||[])},this.getCurrentViewport=function(I){return I.copy(wt)},this.getViewport=function(I){return I.copy(jt)},this.setViewport=function(I,tt,ft,lt){I.isVector4?jt.set(I.x,I.y,I.z,I.w):jt.set(I,tt,ft,lt),E.viewport(wt.copy(jt).multiplyScalar(St).round())},this.getScissor=function(I){return I.copy(ge)},this.setScissor=function(I,tt,ft,lt){I.isVector4?ge.set(I.x,I.y,I.z,I.w):ge.set(I,tt,ft,lt),E.scissor($t.copy(ge).multiplyScalar(St).round())},this.getScissorTest=function(){return te},this.setScissorTest=function(I){E.setScissorTest(te=I)},this.setOpaqueSort=function(I){Ut=I},this.setTransparentSort=function(I){ue=I},this.getClearColor=function(I){return I.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor(...arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha(...arguments)},this.clear=function(I=!0,tt=!0,ft=!0){let lt=0;if(I){let ut=!1;if(At!==null){let Bt=At.texture.format;ut=y.has(Bt)}if(ut){let Bt=At.texture.type,Ot=m.has(Bt),Ct=Re.getClearColor(),Jt=Re.getClearAlpha(),se=Ct.r,re=Ct.g,Me=Ct.b;Ot?($[0]=se,$[1]=re,$[2]=Me,$[3]=Jt,Z.clearBufferuiv(Z.COLOR,0,$)):(V[0]=se,V[1]=re,V[2]=Me,V[3]=Jt,Z.clearBufferiv(Z.COLOR,0,V))}else lt|=Z.COLOR_BUFFER_BIT}tt&&(lt|=Z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ft&&(lt|=Z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),lt!==0&&Z.clear(lt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(I){I.setRenderer(this),ot=I},this.dispose=function(){e.removeEventListener("webglcontextlost",Ke,!1),e.removeEventListener("webglcontextrestored",Je,!1),e.removeEventListener("webglcontextcreationerror",Vn,!1),Re.dispose(),Zt.dispose(),Gt.dispose(),ct.dispose(),Dt.dispose(),dt.dispose(),Kt.dispose(),Tt.dispose(),qt.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",fr),ie.removeEventListener("sessionend",pr),Fi.stop()};function Ke(I){I.preventDefault(),Vo("WebGLRenderer: Context Lost."),J=!0}function Je(){Vo("WebGLRenderer: Context Restored."),J=!1;let I=at.autoReset,tt=pe.enabled,ft=pe.autoUpdate,lt=pe.needsUpdate,ut=pe.type;oe(),at.autoReset=I,pe.enabled=tt,pe.autoUpdate=ft,pe.needsUpdate=lt,pe.type=ut}function Vn(I){Ee("WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function di(I){let tt=I.target;tt.removeEventListener("dispose",di),Bl(tt)}function Bl(I){ja(I),ct.remove(I)}function ja(I){let tt=ct.get(I).programs;tt!==void 0&&(tt.forEach(function(ft){qt.releaseProgram(ft)}),I.isShaderMaterial&&qt.releaseShaderCache(I))}this.renderBufferDirect=function(I,tt,ft,lt,ut,Bt){tt===null&&(tt=fe);let Ot=ut.isMesh&&ut.matrixWorld.determinantAffine()<0,Ct=to(I,tt,ft,lt,ut);E.setMaterial(lt,Ot);let Jt=ft.index,se=1;if(lt.wireframe===!0){if(Jt=gt.getWireframeAttribute(ft),Jt===void 0)return;se=2}let re=ft.drawRange,Me=ft.attributes.position,Nt=re.start*se,Mt=(re.start+re.count)*se;Bt!==null&&(Nt=Math.max(Nt,Bt.start*se),Mt=Math.min(Mt,(Bt.start+Bt.count)*se)),Jt!==null?(Nt=Math.max(Nt,0),Mt=Math.min(Mt,Jt.count)):Me!=null&&(Nt=Math.max(Nt,0),Mt=Math.min(Mt,Me.count));let me=Mt-Nt;if(me<0||me===1/0)return;Kt.setup(ut,lt,Ct,ft,Jt);let _e,tn=Yt;if(Jt!==null&&(_e=zt.get(Jt),tn=bt,tn.setIndex(_e)),ut.isMesh)lt.wireframe===!0?(E.setLineWidth(lt.wireframeLinewidth*Ce()),tn.setMode(Z.LINES)):tn.setMode(Z.TRIANGLES);else if(ut.isLine){let Pn=lt.linewidth;Pn===void 0&&(Pn=1),E.setLineWidth(Pn*Ce()),ut.isLineSegments?tn.setMode(Z.LINES):ut.isLineLoop?tn.setMode(Z.LINE_LOOP):tn.setMode(Z.LINE_STRIP)}else ut.isPoints?tn.setMode(Z.POINTS):ut.isSprite&&tn.setMode(Z.TRIANGLES);if(ut.isBatchedMesh)if(Ue.get("WEBGL_multi_draw"))tn.renderMultiDraw(ut._multiDrawStarts,ut._multiDrawCounts,ut._multiDrawCount);else{let Pn=ut._multiDrawStarts,ee=ut._multiDrawCounts,Nn=ut._multiDrawCount,Fe=Jt?zt.get(Jt).bytesPerElement:1,Gn=ct.get(lt).currentProgram.getUniforms();for(let Cn=0;Cn<Nn;Cn++)Gn.setValue(Z,"_gl_DrawID",Cn),tn.render(Pn[Cn]/Fe,ee[Cn])}else if(ut.isInstancedMesh)tn.renderInstances(Nt,me,ut.count);else if(ft.isInstancedBufferGeometry){let Pn=ft._maxInstanceCount!==void 0?ft._maxInstanceCount:1/0,ee=Math.min(ft.instanceCount,Pn);tn.renderInstances(Nt,me,ee)}else tn.render(Nt,me)};function Hn(I,tt,ft,lt){ot!==null&&I.isNodeMaterial&&ot.setObject(lt,I),It===!0&&le.setState(I,ft,!1),I.transparent===!0&&I.side===hs&&I.forceSinglePass===!1?(I.side=ci,I.needsUpdate=!0,bs(I,tt,lt),I.side=rr,I.needsUpdate=!0,bs(I,tt,lt),I.side=hs):bs(I,tt,lt)}this.compile=function(I,tt,ft=null){ft===null&&(ft=I),ot!==null&&ot.renderStart(I,tt,ft),k=Gt.get(ft),k.init(tt),R.push(k),ft.traverseVisible(function(ut){ut.isLight&&ut.layers.test(tt.layers)&&(k.pushLight(ut),ut.castShadow&&k.pushShadow(ut))}),I!==ft&&I.traverseVisible(function(ut){ut.isLight&&ut.layers.test(tt.layers)&&(k.pushLight(ut),ut.castShadow&&k.pushShadow(ut))}),k.setupLights(),ot!==null&&ot.updateLights(k.state.lightsArray),H=this.localClippingEnabled,It=le.init(this.clippingPlanes,H),It===!0&&le.setGlobalState(this.clippingPlanes,tt),ot!==null&&pe.render(k.state.shadowsArray,ft,tt);let lt=new Set;return I.traverse(function(ut){if(!(ut.isMesh||ut.isPoints||ut.isLine||ut.isSprite))return;let Bt=ut.material;if(Bt)if(Array.isArray(Bt))for(let Ot=0;Ot<Bt.length;Ot++){let Ct=Bt[Ot];Hn(Ct,ft,tt,ut),lt.add(Ct)}else Hn(Bt,ft,tt,ut),lt.add(Bt)}),k=R.pop(),ot!==null&&ot.renderEnd(),lt},this.compileAsync=function(I,tt,ft=null){let lt=this.compile(I,tt,ft);return new Promise(ut=>{function Bt(){if(lt.forEach(function(Ot){let Jt=ct.get(Ot).currentProgram;(Jt===void 0||Jt.isReady())&&lt.delete(Ot)}),lt.size===0){ut(I);return}setTimeout(Bt,10)}Ue.get("KHR_parallel_shader_compile")!==null?Bt():setTimeout(Bt,10)})};let fi=null;function Oi(I){fi&&fi(I)}function fr(){Fi.stop()}function pr(){Fi.start()}let Fi=new Eg;Fi.setAnimationLoop(Oi),typeof self<"u"&&Fi.setContext(self),this.setAnimationLoop=function(I){fi=I,ie.setAnimationLoop(I),I===null?Fi.stop():Fi.start()},ie.addEventListener("sessionstart",fr),ie.addEventListener("sessionend",pr),this.render=function(I,tt){if(tt!==void 0&&tt.isCamera!==!0){Ee("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(J===!0)return;ot!==null&&ot.renderStart(I,tt);let ft=ie.enabled===!0&&ie.isPresenting===!0,lt=B!==null&&(At===null||ft)&&B.begin(X,At);if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),tt.parent===null&&tt.matrixWorldAutoUpdate===!0&&tt.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(B===null||B.isCompositing()===!1)&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(tt),tt=ie.getCamera()),I.isScene===!0&&I.onBeforeRender(X,I,tt,At),k=Gt.get(I,R.length),k.init(tt),k.state.textureUnits=vt.getTextureUnits(),R.push(k),Lt.multiplyMatrices(tt.projectionMatrix,tt.matrixWorldInverse),rt.setFromProjectionMatrix(Lt,qi,tt.reversedDepth),H=this.localClippingEnabled,It=le.init(this.clippingPlanes,H),T=Zt.get(I,q.length),T.init(),q.push(T),ie.enabled===!0&&ie.isPresenting===!0){let Ot=X.xr.getDepthSensingMesh();Ot!==null&&Wr(Ot,tt,-1/0,X.sortObjects)}Wr(I,tt,0,X.sortObjects),T.finish(),ot!==null&&ot.updateLights(k.state.lightsArray),X.sortObjects===!0&&T.sort(Ut,ue),de=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,de&&Re.addToRenderList(T,I),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),It===!0&&le.beginShadows();let ut=k.state.shadowsArray;if(pe.render(ut,I,tt),It===!0&&le.endShadows(),(lt&&B.hasRenderPass())===!1){let Ot=T.opaque,Ct=T.transmissive;if(k.setupLights(),tt.isArrayCamera){let Jt=tt.cameras;if(Ct.length>0)for(let se=0,re=Jt.length;se<re;se++){let Me=Jt[se];kl(Ot,Ct,I,Me)}de&&Re.render(I);for(let se=0,re=Jt.length;se<re;se++){let Me=Jt[se];Vs(T,I,Me,Me.viewport)}}else Ct.length>0&&kl(Ot,Ct,I,tt),de&&Re.render(I),Vs(T,I,tt)}At!==null&&_t===0&&(vt.updateMultisampleRenderTarget(At),vt.updateRenderTargetMipmap(At)),lt&&B.end(X),I.isScene===!0&&I.onAfterRender(X,I,tt),Kt.resetDefaultState(),xt=-1,Et=null,R.pop(),R.length>0?(k=R[R.length-1],vt.setTextureUnits(k.state.textureUnits),It===!0&&le.setGlobalState(X.clippingPlanes,k.state.camera)):k=null,q.pop(),q.length>0?T=q[q.length-1]:T=null,ot!==null&&ot.renderEnd()};function Wr(I,tt,ft,lt){if(I.visible===!1)return;if(I.layers.test(tt.layers)){if(I.isGroup)ft=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(tt);else if(I.isLightProbeGrid)k.pushLightProbeGrid(I);else if(I.isLight)k.pushLight(I),I.castShadow&&k.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||I.intersectsFrustum(rt)){lt&&ce.setFromMatrixPosition(I.matrixWorld).applyMatrix4(Lt);let Ot=dt.update(I),Ct=I.material;Ct.visible&&T.push(I,Ot,Ct,ft,ce.z,null,tt)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||I.intersectsFrustum(rt))){let Ot=dt.update(I),Ct=I.material;if(lt&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),ce.copy(I.boundingSphere.center)):(Ot.boundingSphere===null&&Ot.computeBoundingSphere(),ce.copy(Ot.boundingSphere.center)),ce.applyMatrix4(I.matrixWorld).applyMatrix4(Lt)),Array.isArray(Ct)){let Jt=Ot.groups;for(let se=0,re=Jt.length;se<re;se++){let Me=Jt[se],Nt=Ct[Me.materialIndex];Nt&&Nt.visible&&T.push(I,Ot,Nt,ft,ce.z,Me,tt)}}else Ct.visible&&T.push(I,Ot,Ct,ft,ce.z,null,tt)}}let Bt=I.children;for(let Ot=0,Ct=Bt.length;Ot<Ct;Ot++)Wr(Bt[Ot],tt,ft,lt)}function Vs(I,tt,ft,lt){let{opaque:ut,transmissive:Bt,transparent:Ot}=I;k.setupLightsView(ft),It===!0&&le.setGlobalState(X.clippingPlanes,ft),lt&&E.viewport(wt.copy(lt)),ut.length>0&&Hs(ut,tt,ft),Bt.length>0&&Hs(Bt,tt,ft),Ot.length>0&&Hs(Ot,tt,ft),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function kl(I,tt,ft,lt){if((ft.isScene===!0?ft.overrideMaterial:null)!==null)return;if(k.state.transmissionRenderTarget[lt.id]===void 0){let Nt=Ue.has("EXT_color_buffer_half_float")||Ue.has("EXT_color_buffer_float");k.state.transmissionRenderTarget[lt.id]=new vi(1,1,{generateMipmaps:!0,type:Nt?Ki:Si,minFilter:or,samples:Math.max(4,F.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:We.workingColorSpace})}let Bt=k.state.transmissionRenderTarget[lt.id],Ot=lt.viewport||wt;Bt.setSize(Ot.z*X.transmissionResolutionScale,Ot.w*X.transmissionResolutionScale);let Ct=X.getRenderTarget(),Jt=X.getActiveCubeFace(),se=X.getActiveMipmapLevel();X.setRenderTarget(Bt),X.getClearColor(Ye),Ne=X.getClearAlpha(),Ne<1&&X.setClearColor(16777215,.5),X.clear(),de&&Re.render(ft);let re=X.toneMapping;X.toneMapping=Zi;let Me=lt.viewport;if(lt.viewport!==void 0&&(lt.viewport=void 0),k.setupLightsView(lt),It===!0&&le.setGlobalState(X.clippingPlanes,lt),Hs(I,ft,lt),vt.updateMultisampleRenderTarget(Bt),vt.updateRenderTargetMipmap(Bt),Ue.has("WEBGL_multisampled_render_to_texture")===!1){let Nt=!1;for(let Mt=0,me=tt.length;Mt<me;Mt++){let _e=tt[Mt],{object:tn,geometry:Pn,material:ee,group:Nn}=_e;if(ee.side===hs&&tn.layers.test(lt.layers)){let Fe=ee.side;ee.side=ci,ee.needsUpdate=!0,ts(tn,ft,lt,Pn,ee,Nn),ee.side=Fe,ee.needsUpdate=!0,Nt=!0}}Nt===!0&&(vt.updateMultisampleRenderTarget(Bt),vt.updateRenderTargetMipmap(Bt))}X.setRenderTarget(Ct,Jt,se),X.setClearColor(Ye,Ne),Me!==void 0&&(lt.viewport=Me),X.toneMapping=re}function Hs(I,tt,ft){let lt=tt.isScene===!0?tt.overrideMaterial:null;for(let ut=0,Bt=I.length;ut<Bt;ut++){let Ot=I[ut],{object:Ct,geometry:Jt,group:se}=Ot,re=Ot.material;re.allowOverride===!0&&lt!==null&&(re=lt),Ct.layers.test(ft.layers)&&ts(Ct,tt,ft,Jt,re,se)}}function ts(I,tt,ft,lt,ut,Bt){ot!==null&&ut.isNodeMaterial&&ot.setObject(I,ut),I.onBeforeRender(X,tt,ft,lt,ut,Bt),I.modelViewMatrix.multiplyMatrices(ft.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),ut.onBeforeRender(X,tt,ft,lt,I,Bt),ut.transparent===!0&&ut.side===hs&&ut.forceSinglePass===!1?(ut.side=ci,ut.needsUpdate=!0,X.renderBufferDirect(ft,tt,lt,ut,I,Bt),ut.side=rr,ut.needsUpdate=!0,X.renderBufferDirect(ft,tt,lt,ut,I,Bt),ut.side=hs):X.renderBufferDirect(ft,tt,lt,ut,I,Bt),I.onAfterRender(X,tt,ft,lt,ut,Bt)}function bs(I,tt,ft){tt.isScene!==!0&&(tt=fe);let lt=ct.get(I),ut=k.state.lights,Bt=k.state.shadowsArray,Ot=ut.state.version,Ct=qt.getParameters(I,ut.state,Bt,tt,ft,k.state.lightProbeGridArray),Jt=qt.getProgramCacheKey(Ct),se=lt.programs;lt.environment=I.isMeshStandardMaterial||I.isMeshLambertMaterial||I.isMeshPhongMaterial?tt.environment:null,lt.fog=tt.fog;let re=I.isMeshStandardMaterial||I.isMeshLambertMaterial&&!I.envMap||I.isMeshPhongMaterial&&!I.envMap;lt.envMap=Dt.get(I.envMap||lt.environment,re),lt.envMapRotation=lt.environment!==null&&I.envMap===null?tt.environmentRotation:I.envMapRotation,se===void 0&&(I.addEventListener("dispose",di),se=new Map,lt.programs=se);let Me=se.get(Jt);if(Me!==void 0){if(lt.currentProgram===Me&&lt.lightsStateVersion===Ot)return Qa(I,Ct),Me}else Ct.uniforms=qt.getUniforms(I),ot!==null&&I.isNodeMaterial&&ot.build(I,ft,Ct),I.onBeforeCompile(Ct,X),Me=qt.acquireProgram(Ct,Jt),se.set(Jt,Me),lt.uniforms=Ct.uniforms;let Nt=lt.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Nt.clippingPlanes=le.uniform),Qa(I,Ct),lt.needsLights=Vl(I),lt.lightsStateVersion=Ot,lt.needsLights&&(Nt.ambientLightColor.value=ut.state.ambient,Nt.lightProbe.value=ut.state.probe,Nt.sunLights.value=ut.state.sun,Nt.sunLightShadows.value=ut.state.sunShadow,Nt.directionalLights.value=ut.state.directional,Nt.directionalLightShadows.value=ut.state.directionalShadow,Nt.spotLights.value=ut.state.spot,Nt.spotLightShadows.value=ut.state.spotShadow,Nt.rectAreaLights.value=ut.state.rectArea,Nt.ltc_1.value=ut.state.rectAreaLTC1,Nt.ltc_2.value=ut.state.rectAreaLTC2,Nt.pointLights.value=ut.state.point,Nt.pointLightShadows.value=ut.state.pointShadow,Nt.hemisphereLights.value=ut.state.hemi,Nt.sunShadowMatrix.value=ut.state.sunShadowMatrix,Nt.sunShadowCascade.value=ut.state.sunShadowCascade,Nt.directionalShadowMatrix.value=ut.state.directionalShadowMatrix,Nt.spotLightMatrix.value=ut.state.spotLightMatrix,Nt.spotLightMap.value=ut.state.spotLightMap,Nt.pointShadowMatrix.value=ut.state.pointShadowMatrix),lt.lightProbeGrid=k.state.lightProbeGridArray.length>0,lt.currentProgram=Me,lt.uniformsList=null,Me}function Ka(I){if(I.uniformsList===null){let tt=I.currentProgram.getUniforms();I.uniformsList=Ha.seqWithValue(tt.seq,I.uniforms)}return I.uniformsList}function Qa(I,tt){let ft=ct.get(I);ft.outputColorSpace=tt.outputColorSpace,ft.batching=tt.batching,ft.batchingColor=tt.batchingColor,ft.instancing=tt.instancing,ft.instancingColor=tt.instancingColor,ft.instancingMorph=tt.instancingMorph,ft.skinning=tt.skinning,ft.morphTargets=tt.morphTargets,ft.morphNormals=tt.morphNormals,ft.morphColors=tt.morphColors,ft.morphTargetsCount=tt.morphTargetsCount,ft.numClippingPlanes=tt.numClippingPlanes,ft.numIntersection=tt.numClipIntersection,ft.vertexAlphas=tt.vertexAlphas,ft.vertexTangents=tt.vertexTangents,ft.toneMapping=tt.toneMapping}function $l(I,tt){if(I.length===0)return null;if(I.length===1)return I[0].texture!==null?I[0]:null;D.setFromMatrixPosition(tt.matrixWorld);for(let ft=0,lt=I.length;ft<lt;ft++){let ut=I[ft];if(ut.texture!==null&&ut.boundingBox.containsPoint(D))return ut}return null}function to(I,tt,ft,lt,ut){tt.isScene!==!0&&(tt=fe),vt.resetTextureUnits();let Bt=tt.fog,Ot=lt.isMeshStandardMaterial||lt.isMeshLambertMaterial||lt.isMeshPhongMaterial?tt.environment:null,Ct=At===null?X.outputColorSpace:At.isXRRenderTarget===!0?At.texture.colorSpace:We.workingColorSpace,Jt=lt.isMeshStandardMaterial||lt.isMeshLambertMaterial&&!lt.envMap||lt.isMeshPhongMaterial&&!lt.envMap,se=Dt.get(lt.envMap||Ot,Jt),re=lt.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,Me=!!ft.attributes.tangent&&(!!lt.normalMap||lt.anisotropy>0),Nt=!!ft.morphAttributes.position,Mt=!!ft.morphAttributes.normal,me=!!ft.morphAttributes.color,_e=Zi;lt.toneMapped&&(At===null||At.isXRRenderTarget===!0)&&(_e=X.toneMapping);let tn=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,Pn=tn!==void 0?tn.length:0,ee=ct.get(lt),Nn=k.state.lights;if(It===!0&&(H===!0||I!==Et)){let cn=I===Et&&lt.id===xt;le.setState(lt,I,cn)}let Fe=!1;lt.version===ee.__version?(ee.needsLights&&ee.lightsStateVersion!==Nn.state.version||ee.outputColorSpace!==Ct||ut.isBatchedMesh&&ee.batching===!1||!ut.isBatchedMesh&&ee.batching===!0||ut.isBatchedMesh&&ee.batchingColor===!0&&ut._colorsTexture===null||ut.isBatchedMesh&&ee.batchingColor===!1&&ut._colorsTexture!==null||ut.isInstancedMesh&&ee.instancing===!1||!ut.isInstancedMesh&&ee.instancing===!0||ut.isSkinnedMesh&&ee.skinning===!1||!ut.isSkinnedMesh&&ee.skinning===!0||ut.isInstancedMesh&&ee.instancingColor===!0&&ut.instanceColor===null||ut.isInstancedMesh&&ee.instancingColor===!1&&ut.instanceColor!==null||ut.isInstancedMesh&&ee.instancingMorph===!0&&ut.morphTexture===null||ut.isInstancedMesh&&ee.instancingMorph===!1&&ut.morphTexture!==null||ee.envMap!==se||lt.fog===!0&&ee.fog!==Bt||ee.numClippingPlanes!==void 0&&(ee.numClippingPlanes!==le.numPlanes||ee.numIntersection!==le.numIntersection)||ee.vertexAlphas!==re||ee.vertexTangents!==Me||ee.morphTargets!==Nt||ee.morphNormals!==Mt||ee.morphColors!==me||ee.toneMapping!==_e||ee.morphTargetsCount!==Pn||!!ee.lightProbeGrid!=k.state.lightProbeGridArray.length>0)&&(Fe=!0):(Fe=!0,ee.__version=lt.version);let Gn=ee.currentProgram;Fe===!0&&(Gn=bs(lt,tt,ut),ot&&lt.isNodeMaterial&&ot.onUpdateProgram(lt,Gn,ee));let Cn=!1,es=!1,Ws=!1,en=Gn.getUniforms(),_n=ee.uniforms;if(E.useProgram(Gn.program)&&(Cn=!0,es=!0,Ws=!0),lt.id!==xt&&(xt=lt.id,es=!0),ee.needsLights){let cn=$l(k.state.lightProbeGridArray,ut);ee.lightProbeGrid!==cn&&(ee.lightProbeGrid=cn,es=!0)}if(Cn||Et!==I){E.buffers.depth.getReversed()&&I.reversedDepth!==!0&&(I._reversedDepth=!0,I.updateProjectionMatrix()),en.setValue(Z,"projectionMatrix",I.projectionMatrix),en.setValue(Z,"viewMatrix",I.matrixWorldInverse);let Bi=en.map.cameraPosition;Bi!==void 0&&Bi.setValue(Z,kt.setFromMatrixPosition(I.matrixWorld)),F.logarithmicDepthBuffer&&en.setValue(Z,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(lt.isMeshPhongMaterial||lt.isMeshToonMaterial||lt.isMeshLambertMaterial||lt.isMeshBasicMaterial||lt.isMeshStandardMaterial||lt.isShaderMaterial)&&en.setValue(Z,"isOrthographic",I.isOrthographicCamera===!0),Et!==I&&(Et=I,es=!0,Ws=!0)}if(ee.needsLights&&(Nn.state.sunShadowMap.length>0&&en.setValue(Z,"sunShadowMap",Nn.state.sunShadowMap,vt),Nn.state.directionalShadowMap.length>0&&en.setValue(Z,"directionalShadowMap",Nn.state.directionalShadowMap,vt),Nn.state.spotShadowMap.length>0&&en.setValue(Z,"spotShadowMap",Nn.state.spotShadowMap,vt),Nn.state.pointShadowMap.length>0&&en.setValue(Z,"pointShadowMap",Nn.state.pointShadowMap,vt)),ut.isSkinnedMesh){en.setOptional(Z,ut,"bindMatrix"),en.setOptional(Z,ut,"bindMatrixInverse");let cn=ut.skeleton;cn&&(cn.boneTexture===null&&cn.computeBoneTexture(),en.setValue(Z,"boneTexture",cn.boneTexture,vt))}ut.isBatchedMesh&&(en.setOptional(Z,ut,"batchingTexture"),en.setValue(Z,"batchingTexture",ut._matricesTexture,vt),en.setOptional(Z,ut,"batchingIdTexture"),en.setValue(Z,"batchingIdTexture",ut._indirectTexture,vt),en.setOptional(Z,ut,"batchingColorTexture"),ut._colorsTexture!==null&&en.setValue(Z,"batchingColorTexture",ut._colorsTexture,vt));let ns=ft.morphAttributes;if((ns.position!==void 0||ns.normal!==void 0||ns.color!==void 0)&&nt.update(ut,ft,Gn),(es||ee.receiveShadow!==ut.receiveShadow)&&(ee.receiveShadow=ut.receiveShadow,en.setValue(Z,"receiveShadow",ut.receiveShadow)),(lt.isMeshStandardMaterial||lt.isMeshLambertMaterial||lt.isMeshPhongMaterial)&&lt.envMap===null&&tt.environment!==null&&(_n.envMapIntensity.value=tt.environmentIntensity),_n.dfgLUT!==void 0&&(_n.dfgLUT.value=R1()),es){if(en.setValue(Z,"toneMappingExposure",X.toneMappingExposure),ee.needsLights&&zl(_n,Ws),Bt&&lt.fog===!0&&he.refreshFogUniforms(_n,Bt),he.refreshMaterialUniforms(_n,lt,St,yt,k.state.transmissionRenderTarget[I.id]),ee.needsLights&&ee.lightProbeGrid){let cn=ee.lightProbeGrid;_n.probesSH.value=cn.texture,_n.probesMin.value.copy(cn.boundingBox.min),_n.probesMax.value.copy(cn.boundingBox.max),_n.probesResolution.value.copy(cn.resolution)}Ha.upload(Z,Ka(ee),_n,vt)}if(lt.isShaderMaterial&&lt.uniformsNeedUpdate===!0&&(Ha.upload(Z,Ka(ee),_n,vt),lt.uniformsNeedUpdate=!1),lt.isSpriteMaterial&&en.setValue(Z,"center",ut.center),en.setValue(Z,"modelViewMatrix",ut.modelViewMatrix),en.setValue(Z,"normalMatrix",ut.normalMatrix),en.setValue(Z,"modelMatrix",ut.matrixWorld),lt.uniformsGroups!==void 0){let cn=lt.uniformsGroups;for(let Bi=0,we=cn.length;Bi<we;Bi++){let eo=cn[Bi];Tt.update(eo,Gn),Tt.bind(eo,Gn)}}return Gn}function zl(I,tt){I.ambientLightColor.needsUpdate=tt,I.lightProbe.needsUpdate=tt,I.sunLights.needsUpdate=tt,I.sunLightShadows.needsUpdate=tt,I.directionalLights.needsUpdate=tt,I.directionalLightShadows.needsUpdate=tt,I.pointLights.needsUpdate=tt,I.pointLightShadows.needsUpdate=tt,I.spotLights.needsUpdate=tt,I.spotLightShadows.needsUpdate=tt,I.rectAreaLights.needsUpdate=tt,I.hemisphereLights.needsUpdate=tt}function Vl(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return pt},this.getActiveMipmapLevel=function(){return _t},this.getRenderTarget=function(){return At},this.setRenderTargetTextures=function(I,tt,ft){let lt=ct.get(I);lt.__autoAllocateDepthBuffer=I.resolveDepthBuffer===!1,lt.__autoAllocateDepthBuffer===!1&&(lt.__useRenderToTexture=!1),ct.get(I.texture).__webglTexture=tt,ct.get(I.depthTexture).__webglTexture=lt.__autoAllocateDepthBuffer?void 0:ft,lt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(I,tt){let ft=ct.get(I);ft.__webglFramebuffer=tt,ft.__useDefaultFramebuffer=tt===void 0},this.setRenderTarget=function(I,tt=0,ft=0){At=I,pt=tt,_t=ft;let lt=null,ut=!1,Bt=!1;if(I){let Ct=ct.get(I);if(Ct.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(Z.FRAMEBUFFER,Ct.__webglFramebuffer),wt.copy(I.viewport),$t.copy(I.scissor),ne=I.scissorTest,E.viewport(wt),E.scissor($t),E.setScissorTest(ne),xt=-1;return}else if(Ct.__webglFramebuffer===void 0)vt.setupRenderTarget(I);else if(Ct.__hasExternalTextures)vt.rebindTextures(I,ct.get(I.texture).__webglTexture,ct.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){let re=I.depthTexture;if(Ct.__boundDepthTexture!==re){if(re!==null&&ct.has(re)&&(I.width!==re.image.width||I.height!==re.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");vt.setupDepthRenderbuffer(I)}}let Jt=I.texture;(Jt.isData3DTexture||Jt.isDataArrayTexture||Jt.isCompressedArrayTexture)&&(Bt=!0);let se=ct.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(se[tt])?lt=se[tt][ft]:lt=se[tt],ut=!0):I.samples>0&&vt.useMultisampledRTT(I)===!1?lt=ct.get(I).__webglMultisampledFramebuffer:Array.isArray(se)?lt=se[ft]:lt=se,wt.copy(I.viewport),$t.copy(I.scissor),ne=I.scissorTest}else wt.copy(jt).multiplyScalar(St).floor(),$t.copy(ge).multiplyScalar(St).floor(),ne=te;if(ft!==0&&(lt=ht),E.bindFramebuffer(Z.FRAMEBUFFER,lt)&&E.drawBuffers(I,lt),E.viewport(wt),E.scissor($t),E.setScissorTest(ne),ut){let Ct=ct.get(I.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Ct.__webglTexture,ft)}else if(Bt){let Ct=tt;for(let Jt=0;Jt<I.textures.length;Jt++){let se=ct.get(I.textures[Jt]);Z.framebufferTextureLayer(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0+Jt,se.__webglTexture,ft,Ct)}}else if(I!==null&&ft!==0){let Ct=ct.get(I.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,Ct.__webglTexture,ft)}xt=-1};function Gs(I){let tt=ct.get(I);return(tt.__readFormat!==I.format||tt.__readType!==I.type)&&(tt.__readFormat=I.format,tt.__readType=I.type,tt.__formatReadable=F.textureFormatReadable(I.format),tt.__typeReadable=F.textureTypeReadable(I.type)),tt}this.readRenderTargetPixels=function(I,tt,ft,lt,ut,Bt,Ot,Ct=0){if(!(I&&I.isWebGLRenderTarget)){Ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Jt=ct.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Ot!==void 0&&(Jt=Jt[Ot]),Jt){E.bindFramebuffer(Z.FRAMEBUFFER,Jt);try{let se=I.textures[Ct],re=se.format,Me=se.type;I.textures.length>1&&Z.readBuffer(Z.COLOR_ATTACHMENT0+Ct);let Nt=Gs(se);if(Nt.__formatReadable===!1){Ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Nt.__typeReadable===!1){Ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}tt>=0&&tt<=I.width-lt&&ft>=0&&ft<=I.height-ut&&Z.readPixels(tt,ft,lt,ut,Wt.convert(re),Wt.convert(Me),Bt)}finally{let se=At!==null?ct.get(At).__webglFramebuffer:null;E.bindFramebuffer(Z.FRAMEBUFFER,se)}}},this.readRenderTargetPixelsAsync=async function(I,tt,ft,lt,ut,Bt,Ot,Ct=0){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Jt=ct.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Ot!==void 0&&(Jt=Jt[Ot]),Jt)if(tt>=0&&tt<=I.width-lt&&ft>=0&&ft<=I.height-ut){E.bindFramebuffer(Z.FRAMEBUFFER,Jt);let se=I.textures[Ct],re=se.format,Me=se.type;I.textures.length>1&&Z.readBuffer(Z.COLOR_ATTACHMENT0+Ct);let Nt=Gs(se);if(Nt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Nt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Mt=Z.createBuffer();Z.bindBuffer(Z.PIXEL_PACK_BUFFER,Mt),Z.bufferData(Z.PIXEL_PACK_BUFFER,Bt.byteLength,Z.STREAM_READ),Z.readPixels(tt,ft,lt,ut,Wt.convert(re),Wt.convert(Me),0),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,null);let me=At!==null?ct.get(At).__webglFramebuffer:null;E.bindFramebuffer(Z.FRAMEBUFFER,me);let _e=Z.fenceSync(Z.SYNC_GPU_COMMANDS_COMPLETE,0);return Z.flush(),await J0(Z,_e,4),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,Mt),Z.getBufferSubData(Z.PIXEL_PACK_BUFFER,0,Bt),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,null),Z.deleteBuffer(Mt),Z.deleteSync(_e),Bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(I,tt=null,ft=0){let lt=Math.pow(2,-ft),ut=Math.floor(I.image.width*lt),Bt=Math.floor(I.image.height*lt),Ot=tt!==null?tt.x:0,Ct=tt!==null?tt.y:0;vt.setTexture2D(I,0),Z.copyTexSubImage2D(Z.TEXTURE_2D,ft,0,0,Ot,Ct,ut,Bt),E.unbindTexture()},this.copyTextureToTexture=function(I,tt,ft=null,lt=null,ut=0,Bt=0){let Ot,Ct,Jt,se,re,Me,Nt,Mt,me,_e=I.isCompressedTexture?I.mipmaps[Bt]:I.image;if(ft!==null)Ot=ft.max.x-ft.min.x,Ct=ft.max.y-ft.min.y,Jt=ft.isBox3?ft.max.z-ft.min.z:1,se=ft.min.x,re=ft.min.y,Me=ft.isBox3?ft.min.z:0;else{let _n=Math.pow(2,-ut);Ot=Math.floor(_e.width*_n),Ct=Math.floor(_e.height*_n),I.isDataArrayTexture?Jt=_e.depth:I.isData3DTexture?Jt=Math.floor(_e.depth*_n):Jt=1,se=0,re=0,Me=0}lt!==null?(Nt=lt.x,Mt=lt.y,me=lt.z):(Nt=0,Mt=0,me=0);let tn=Wt.convert(tt.format),Pn=Wt.convert(tt.type),ee;tt.isData3DTexture?(vt.setTexture3D(tt,0),ee=Z.TEXTURE_3D):tt.isDataArrayTexture||tt.isCompressedArrayTexture?(vt.setTexture2DArray(tt,0),ee=Z.TEXTURE_2D_ARRAY):(vt.setTexture2D(tt,0),ee=Z.TEXTURE_2D),E.activeTexture(Z.TEXTURE0),E.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,tt.flipY),E.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,tt.premultiplyAlpha),E.pixelStorei(Z.UNPACK_ALIGNMENT,tt.unpackAlignment);let Nn=E.getParameter(Z.UNPACK_ROW_LENGTH),Fe=E.getParameter(Z.UNPACK_IMAGE_HEIGHT),Gn=E.getParameter(Z.UNPACK_SKIP_PIXELS),Cn=E.getParameter(Z.UNPACK_SKIP_ROWS),es=E.getParameter(Z.UNPACK_SKIP_IMAGES);E.pixelStorei(Z.UNPACK_ROW_LENGTH,_e.width),E.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,_e.height),E.pixelStorei(Z.UNPACK_SKIP_PIXELS,se),E.pixelStorei(Z.UNPACK_SKIP_ROWS,re),E.pixelStorei(Z.UNPACK_SKIP_IMAGES,Me);let Ws=I.isDataArrayTexture||I.isData3DTexture,en=tt.isDataArrayTexture||tt.isData3DTexture;if(I.isDepthTexture){let _n=ct.get(I),ns=ct.get(tt),cn=ct.get(_n.__renderTarget),Bi=ct.get(ns.__renderTarget);E.bindFramebuffer(Z.READ_FRAMEBUFFER,cn.__webglFramebuffer),E.bindFramebuffer(Z.DRAW_FRAMEBUFFER,Bi.__webglFramebuffer);for(let we=0;we<Jt;we++)Ws&&(Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,ct.get(I).__webglTexture,ut,Me+we),Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,ct.get(tt).__webglTexture,Bt,me+we)),Z.blitFramebuffer(se,re,Ot,Ct,Nt,Mt,Ot,Ct,Z.DEPTH_BUFFER_BIT,Z.NEAREST);E.bindFramebuffer(Z.READ_FRAMEBUFFER,null),E.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else if(ut!==0||I.isRenderTargetTexture||ct.has(I)){let _n=ct.get(I),ns=ct.get(tt);E.bindFramebuffer(Z.READ_FRAMEBUFFER,Q),E.bindFramebuffer(Z.DRAW_FRAMEBUFFER,st);for(let cn=0;cn<Jt;cn++)Ws?Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,_n.__webglTexture,ut,Me+cn):Z.framebufferTexture2D(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,_n.__webglTexture,ut),en?Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,ns.__webglTexture,Bt,me+cn):Z.framebufferTexture2D(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,ns.__webglTexture,Bt),ut!==0?Z.blitFramebuffer(se,re,Ot,Ct,Nt,Mt,Ot,Ct,Z.COLOR_BUFFER_BIT,Z.NEAREST):en?Z.copyTexSubImage3D(ee,Bt,Nt,Mt,me+cn,se,re,Ot,Ct):Z.copyTexSubImage2D(ee,Bt,Nt,Mt,se,re,Ot,Ct);E.bindFramebuffer(Z.READ_FRAMEBUFFER,null),E.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else en?I.isDataTexture||I.isData3DTexture?Z.texSubImage3D(ee,Bt,Nt,Mt,me,Ot,Ct,Jt,tn,Pn,_e.data):tt.isCompressedArrayTexture?Z.compressedTexSubImage3D(ee,Bt,Nt,Mt,me,Ot,Ct,Jt,tn,_e.data):Z.texSubImage3D(ee,Bt,Nt,Mt,me,Ot,Ct,Jt,tn,Pn,_e):I.isDataTexture?Z.texSubImage2D(Z.TEXTURE_2D,Bt,Nt,Mt,Ot,Ct,tn,Pn,_e.data):I.isCompressedTexture?Z.compressedTexSubImage2D(Z.TEXTURE_2D,Bt,Nt,Mt,_e.width,_e.height,tn,_e.data):Z.texSubImage2D(Z.TEXTURE_2D,Bt,Nt,Mt,Ot,Ct,tn,Pn,_e);E.pixelStorei(Z.UNPACK_ROW_LENGTH,Nn),E.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,Fe),E.pixelStorei(Z.UNPACK_SKIP_PIXELS,Gn),E.pixelStorei(Z.UNPACK_SKIP_ROWS,Cn),E.pixelStorei(Z.UNPACK_SKIP_IMAGES,es),Bt===0&&tt.generateMipmaps&&Z.generateMipmap(ee),E.unbindTexture()},this.initRenderTarget=function(I){ct.get(I).__webglFramebuffer===void 0&&vt.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?vt.setTextureCube(I,0):I.isData3DTexture?vt.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?vt.setTexture2DArray(I,0):vt.setTexture2D(I,0),E.unbindTexture()},this.resetState=function(){pt=0,_t=0,At=null,E.reset(),Kt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=We._getDrawingBufferColorSpace(t),e.unpackColorSpace=We._getUnpackColorSpace()}};var Dg=new li,Eh=new j,Qi=class extends gl{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new bn(t,3)),this.setAttribute("uv",new bn(e,2))}applyMatrix4(t){let e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new sr(e,6,1);return this.setAttribute("instanceStart",new Ji(n,3,0)),this.setAttribute("instanceEnd",new Ji(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new sr(e,6,1);return this.setAttribute("instanceColorStart",new Ji(n,3,0)),this.setAttribute("instanceColorEnd",new Ji(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new cl(t.geometry)),this}fromLineSegments(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new li);let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),Dg.setFromBufferAttribute(e),this.boundingBox.union(Dg))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yi),this.boundingBox===null&&this.computeBoundingBox();let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Eh.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Eh)),Eh.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Eh));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}};Xt.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Vt},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};ui.line={uniforms:Cl.merge([Xt.common,Xt.fog,Xt.line]),vertexShader:`
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
		`};var ps=class extends $n{constructor(t){super({type:"LineMaterial",uniforms:Cl.clone(ui.line.uniforms),vertexShader:ui.line.vertexShader,fragmentShader:ui.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0!==this.worldUnits&&(this.needsUpdate=!0),t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var jf=new an,Ng=new j,Ug=new j,Xn=new an,qn=new an,ms=new an,Kf=new j,Qf=new qe,Yn=new xl,Og=new j,Th=new li,Ah=new yi,gs=new an,_s,Br;function Fg(i,t,e){return gs.set(0,0,-t,1).applyMatrix4(i.projectionMatrix),gs.multiplyScalar(1/gs.w),gs.x=Br/e.width,gs.y=Br/e.height,gs.applyMatrix4(i.projectionMatrixInverse),gs.multiplyScalar(1/gs.w),Math.abs(Math.max(gs.x,gs.y))}function I1(i,t){let e=i.matrixWorld,n=i.geometry,s=n.attributes.instanceStart,r=n.attributes.instanceEnd,a=Math.min(n.instanceCount,s.count);for(let l=0,u=a;l<u;l++){Yn.start.fromBufferAttribute(s,l),Yn.end.fromBufferAttribute(r,l),Yn.applyMatrix4(e);let h=new j,d=new j;_s.distanceSqToSegment(Yn.start,Yn.end,d,h),d.distanceTo(h)<Br*.5&&t.push({point:d,pointOnLine:h,distance:_s.origin.distanceTo(d),object:i,face:null,faceIndex:l,uv:null,uv1:null})}}function P1(i,t,e){let n=t.projectionMatrix,r=i.material.resolution,a=i.matrixWorld,l=i.geometry,u=l.attributes.instanceStart,h=l.attributes.instanceEnd,d=Math.min(l.instanceCount,u.count),b=-t.near;_s.at(1,ms),ms.w=1,ms.applyMatrix4(t.matrixWorldInverse),ms.applyMatrix4(n),ms.multiplyScalar(1/ms.w),ms.x*=r.x/2,ms.y*=r.y/2,ms.z=0,Kf.copy(ms),Qf.multiplyMatrices(t.matrixWorldInverse,a);for(let g=0,M=d;g<M;g++){if(Xn.fromBufferAttribute(u,g),qn.fromBufferAttribute(h,g),Xn.w=1,qn.w=1,Xn.applyMatrix4(Qf),qn.applyMatrix4(Qf),Xn.z>b&&qn.z>b)continue;if(Xn.z>b){let V=Xn.z-qn.z,D=(Xn.z-b)/V;Xn.lerp(qn,D)}else if(qn.z>b){let V=qn.z-Xn.z,D=(qn.z-b)/V;qn.lerp(Xn,D)}Xn.applyMatrix4(n),qn.applyMatrix4(n),Xn.multiplyScalar(1/Xn.w),qn.multiplyScalar(1/qn.w),Xn.x*=r.x/2,Xn.y*=r.y/2,qn.x*=r.x/2,qn.y*=r.y/2,Yn.start.copy(Xn),Yn.start.z=0,Yn.end.copy(qn),Yn.end.z=0;let N=Yn.closestPointToPointParameter(Kf,!0);Yn.at(N,Og);let y=If.lerp(Xn.z,qn.z,N),m=y>=-1&&y<=1,$=Kf.distanceTo(Og)<Br*.5;if(m&&$){Yn.start.fromBufferAttribute(u,g),Yn.end.fromBufferAttribute(h,g),Yn.start.applyMatrix4(a),Yn.end.applyMatrix4(a);let V=new j,D=new j;_s.distanceSqToSegment(Yn.start,Yn.end,D,V),e.push({point:D,pointOnLine:V,distance:_s.origin.distanceTo(D),object:i,face:null,faceIndex:g,uv:null,uv1:null})}}}var kr=class extends kn{constructor(t=new Qi,e=new ps({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,s=new Float32Array(2*e.count);for(let a=0,l=0,u=e.count;a<u;a++,l+=2)Ng.fromBufferAttribute(e,a),Ug.fromBufferAttribute(n,a),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+Ng.distanceTo(Ug);let r=new sr(s,2,1);return t.setAttribute("instanceDistanceStart",new Ji(r,1,0)),t.setAttribute("instanceDistanceEnd",new Ji(r,1,1)),this}raycast(t,e){let n=this.material.worldUnits,s=t.camera;if(s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.'),n===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;let r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;_s=t.ray;let a=this.matrixWorld,l=this.geometry,u=this.material;Br=u.linewidth+r,l.boundingSphere===null&&l.computeBoundingSphere(),Ah.copy(l.boundingSphere).applyMatrix4(a);let h;if(n)h=Br*.5;else{let b=Math.max(s.near,Ah.distanceToPoint(_s.origin));h=Fg(s,b,u.resolution)}if(Ah.radius+=h,_s.intersectsSphere(Ah)===!1)return;l.boundingBox===null&&l.computeBoundingBox(),Th.copy(l.boundingBox).applyMatrix4(a);let d;if(n)d=Br*.5;else{let b=Math.max(s.near,Th.distanceToPoint(_s.origin));d=Fg(s,b,u.resolution)}Th.expandByScalar(d),_s.intersectsBox(Th)!==!1&&(n?I1(this,e):P1(this,s,e))}onBeforeRender(t){let e=this.material.uniforms;e&&e.resolution&&(t.getViewport(jf),this.material.uniforms.resolution.value.set(jf.z,jf.w))}};var Ch=i=>i<90?Math.round(i)+" s":i<5400?Math.round(i/60)+" min":i<129600?Math.round(i/3600)+" h":Math.round(i/86400)+(window.__L==="en"?" days":window.__L==="ca"?" dies":" d\xEDas"),xs=i=>window.__L==="en"?i+" ago":(window.__L==="ca"?"fa ":"hace ")+i;function Bg(i){let t=window.__ROD__,{scene:e,camera:n,goal:s,cur:r,invalidate:a,K:l,CX:u,CY:h,mcs:d,q:b,list:g,clamp:M,norm:w,munis:N}=i,y=o=>document.querySelector(o),m=o=>String(o).replace(/[<>&"]/g,c=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[c]),$=(o,c)=>[(o-u)*l,(c-h)*l],V=.06,D=t.segs.map(o=>{let c=[],f=[0];for(let p=0;p<o.length;p+=2){let x=$(o[p],o[p+1]);c.length&&f.push(f[f.length-1]+Math.hypot(x[0]-c[c.length-1][0],x[1]-c[c.length-1][1])),c.push(x)}return{p:c,c:f,L:f[f.length-1]}}),T=t.stops.map(([o,c,f,p])=>({n:o,id:p,w:$(c,f),fams:new Set})),k=t.routes.map(([o,c,f])=>({s:o,l:c,c:f})),q=new Map;(t.bus||[]).forEach(([o,c,f,p])=>{let x={days:new Set(o),name:c,stops:f,times:p};f.forEach((S,C)=>{if(C<f.length-1){let P=q.get(S)||[];P.push([x,C]),q.set(S,P)}})});function R(o,c,f){let p=te(),x=t.days.indexOf(p.ymd),S=[];for(let[C,P]of q.get(o)||[]){if(!C.days.has(x))continue;let L=C.times[P];if(L<c||L>f)continue;let U=C.stops[C.stops.length-1];S.push({sm:L,est:L,dl:0,fam:C.name,dest:T[U].n,destId:T[U].id,plat:"",cancel:!1,obs:"",live:!1,num:"",tid:"",tr:null,bus:!0,src:"bus",bstops:C.stops.slice(P)})}return S}let B=(o,c)=>{let f=o.match(/^R([A-Z]*)(\d*)(.*)$/),p=c.match(/^R([A-Z]*)(\d*)(.*)$/);return(f[1]||"").localeCompare(p[1]||"")||(+f[2]||0)-(+p[2]||0)||f[3].localeCompare(p[3])},X=[...new Set(k.map(o=>o.s))].sort(B),J={};k.forEach(o=>{J[o.s]||(J[o.s]=o.c)});let ot=t.pats.map(([o,c,f])=>({stops:o,t:c,segs:f})),ht=t.trips.map(([o,c,f,p,x],S)=>({day:o,pat:ot[c],fam:k[f].s,c:k[f].c,t0:p,num:x,tid:t.tids[S]})),Q={};X.forEach(o=>Q[o]=new Set),ht.forEach(o=>{o.pat.segs.forEach(c=>Q[o.fam].add(c)),o.pat.stops.forEach(c=>T[c].fams.add(o.fam))});let st=t.days.map((o,c)=>ht.filter(f=>f.day===c)),pt=new Map(ht.map(o=>[o.tid,o])),_t=[124.87404143965449,479.9901289885639,124.62688710863031,249.99562739146893,486.739003764725,248.0364802782304,2037.1344308355726],At=Math.PI/180,xt=3.922*At,Et=-39.705*At;function wt(o,c){let f=o*At+xt,p=c*At,x=Math.cos(Et),S=Math.sin(Et),C=Math.cos(p),P=Math.cos(f)*C,L=Math.sin(f)*C,U=Math.sin(p),z=Math.atan2(L,P*x-U*S),v=Math.asin(U*x+P*S),_=Math.sqrt(2/(1+Math.cos(z)*Math.cos(v))),A=_*Math.cos(v)*Math.sin(z),O=_*Math.sin(v),[Y,K,G,it,W,Ft,Te]=_t;return $((K+Y*A-W)*Te,(Ft-(it-G*O))*Te)}let $t=new Map(T.map((o,c)=>[o.id,c]));function ne(o){if(o.g)return o.g;let c=[],f=[],p=[0],x=0;return o.segs.forEach((S,C)=>{let P=D[S];P.p.forEach((L,U)=>{C&&!U||(c.push(L),f.push(x+P.c[U]))}),x+=P.L,p.push(x)}),o.g={pts:c,cum:f,stopD:p}}function Ye(o,c,f,p){let x=1e18,S=0;for(let C=0;C+1<o.pts.length;C++){if(o.cum[C+1]<f||o.cum[C]>p)continue;let P=o.pts[C],L=o.pts[C+1],U=L[0]-P[0],z=L[1]-P[1],v=U*U+z*z||1e-9,_=Math.max(0,Math.min(1,((c[0]-P[0])*U+(c[1]-P[1])*z)/v)),A=P[0]+U*_-c[0],O=P[1]+z*_-c[1],Y=A*A+O*O;Y<x&&(x=Y,S=o.cum[C]+_*(o.cum[C+1]-o.cum[C]))}return{d:S,err:Math.sqrt(x)}}function Ne(o,c){let f=0,p=o.cum.length-1;if(c<=0)return o.pts[0];if(c>=o.cum[p])return o.pts[p];for(;p-f>1;){let P=f+p>>1;o.cum[P]<=c?f=P:p=P}let x=(c-o.cum[f])/(o.cum[p]-o.cum[f]||1),S=o.pts[f],C=o.pts[p];return[S[0]+(C[0]-S[0])*x,S[1]+(C[1]-S[1])*x]}let He=o=>`${o.slice(6,8)}/${o.slice(4,6)}`,yt=new Intl.DateTimeFormat("es-ES",{timeZone:"Europe/Madrid",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hourCycle:"h23"});function St(o){let c={};return yt.formatToParts(o).forEach(f=>c[f.type]=f.value),{ymd:c.year+c.month+c.day,min:+c.hour*60+ +c.minute+ +c.second/60}}let Ut=0,ue=null,jt=0,ge=0;function te(){let o=St(new Date);if(Ut===0&&ue==null)return{...o,live:!0};let c=ue==null?o.min:jt+(Ut?(performance.now()-ge)/6e4*Ut:0);return{ymd:o.ymd,min:c,live:!1}}let rt=o=>(o=(Math.floor(o+1e-6)%1440+1440)%1440,String(Math.floor(o/60)).padStart(2,"0")+":"+String(o%60).padStart(2,"0")),It="https://rodalies.erathegameoftime.com",H={url:"",delays:new Map,tu:new Map,vp:new Map,alerts:[],ok:0,okVP:0,err:"",feedTs:0};try{let o=new URLSearchParams(location.search).get("rt");o&&localStorage.setItem("rod_rt",o);let c=localStorage.getItem("rod_rt");c&&/jhmuyo\.workers\.dev/.test(c)&&(c=It,localStorage.setItem("rod_rt",c)),H.url=c||It}catch{H.url=It}let Lt=(o,c)=>{let f=new AbortController,p=setTimeout(()=>f.abort(),12e3);return fetch(o+c,{cache:"no-store",signal:f.signal}).then(x=>{if(clearTimeout(p),!x.ok)throw new Error("HTTP "+x.status);return x.json()},x=>{throw clearTimeout(p),x})},kt="https://rodalies.jhmuyo.workers.dev";function ce(){return(H.url===It&&H.altUntil>Date.now()?kt:H.url).replace(/\/+$/,"")}let fe=o=>/^51/.test(o||"");async function de(){if(!H.url){at();return}let o=ce();if(!de.busy){de.busy=1;try{await Ce(o)}finally{de.busy=0}}}async function Ce(o){let c=!H.adifAt||Date.now()-H.adifAt>11e4,f=_=>({status:"fulfilled",value:_}),p=_=>({status:"rejected",reason:_}),x,S,C,P,L,U=null;if(H.noLive&&Date.now()-H.noLive>30*6e4&&(H.noLive=0),!H.noLive)try{U=await Lt(o,"/live.json")}catch(_){if(/HTTP 404/.test(_.message))H.noLive=Date.now();else{if(H.url===It&&o!==kt)return H.altUntil=Date.now()+30*6e4,Ce(kt);o===kt&&(H.altUntil=0),U={__fail:_}}}if(U&&U.__fail)x=S=C=P=L=p(U.__fail);else if(U&&U.v===1){let _=O=>U[O]&&!U[O].__err?f(U[O]):p(new Error(U[O]&&U[O].__err||"sin dato"));x=_("tu"),S=_("vp"),C=_("al"),P=_("nt"),L=c?_("ad"):p(0);let A=U.rep;A&&Array.isArray(A.items)&&(H.rep=A.items,H.repSkew=(A.now||Date.now())-Date.now(),A.tipos&&(H.tipos=A.tipos),H.repOk=Date.now(),H.repFail=0)}else(!H.repFail||Date.now()-H.repFail>15*6e4)&&Lt(o,"/reports.json").then(_=>{_&&Array.isArray(_.items)?(H.rep=_.items,H.repSkew=(_.now||Date.now())-Date.now(),_.tipos&&(H.tipos=_.tipos),H.repOk=Date.now(),H.repFail=0):H.repFail=Date.now()}).catch(()=>{H.repFail=Date.now(),H.repOk=0}),[x,S,C,P,L]=await Promise.allSettled([Lt(o,"/trip_updates.json"),Lt(o,"/vehicle_positions.json"),Lt(o,"/alerts.json"),Lt(o,"/notices.json"),c?Lt(o,"/adif.json"):Promise.reject(0)]);if(L.status==="fulfilled"&&L.value&&L.value.ok?(H.adif=L.value,H.adifAt=Date.now()):c&&(H.adifAt=Date.now()-6e4),x.status==="fulfilled"){let _=new Map,A=new Map;for(let O of x.value.entity||[]){let Y=O.tripUpdate;if(!Y||!Y.trip||!fe(Y.trip.tripId))continue;let K=Y.trip.tripId,G=(Y.stopTimeUpdate||[])[0],it=Y.delay;it==null&&G&&(it=(G.arrival||G.departure||{}).delay),Y.trip.scheduleRelationship==="CANCELED"&&(it="X"),it!=null&&_.set(K,it),A.set(K,{next:G?{sid:G.stopId,t:+((G.arrival||G.departure||{}).time||0)}:null})}H.delays=_,H.tu=A,H.ok=Date.now(),H.feedTs=+((x.value.header||{}).timestamp||0)*1e3,H.err=""}else H.err=x.reason&&x.reason.message||__t(0);if(S.status==="fulfilled"){let _=new Map,A=Date.now()/1e3;for(let O of S.value.entity||[]){let Y=O.vehicle;if(!Y||!Y.trip||!fe(Y.trip.tripId)||!Y.position)continue;let K=Y.vehicle&&Y.vehicle.label||"",G=K.match(/PLATF\.\(([^)]+)\)/),it=H.vp.get(Y.trip.tripId),W={tid:Y.trip.tripId,w:wt(+Y.position.longitude,+Y.position.latitude),st:Y.currentStatus||"",sid:Y.stopId||"",ts:+Y.timestamp||A,label:K,plat:G?G[1]:"",fam:(K.split("-")[0]||"").trim(),num:Y.vehicle&&Y.vehicle.id||""};W.disp=it?it.disp:null,_.set(W.tid,W)}H.vp=_,H.okVP=Date.now()}let z=[];if(P.status==="fulfilled"&&Array.isArray(P.value.included)){H.okNotices=Date.now();for(let _ of P.value.included){let A=new Set((_.lines||[]).map(it=>it.id).filter(it=>J[it])),O=(it,W)=>{it=it||{},W=W||window.__L;let Ft=it[W];return W==="en"&&Ft&&(Ft===it.ca||/\b(els|amb|dels|per una|circulen|serveis|entre .{2,40} i )\b|ç|l·l/i.test(Ft))&&(Ft=""),(Ft||it.es||it.ca||"").trim()},Y=it=>[O(_.description,it),O(_.title,it)].sort((W,Ft)=>Ft.length-W.length)[0],K=Y(),G=Y("es");K&&z.push({id:"N"+_.externalId,fams:A,stops:new Set,txt:K,es:G,when:(_.date||"")+"T"+(_.time||""),src:"Rodalies",core:_.core||""})}}if(C.status==="fulfilled"){let _=+((C.value.header||{}).timestamp||0);if(H.alertsTs=_,Date.now()/1e3-_<6*3600)for(let A of C.value.entity||[]){let O=A.alert;if(!O)continue;let Y=new Set,K=new Set;for(let Ft of O.informedEntity||[])(Ft.routeId||"").startsWith("51")&&Y.add(Ft.routeId.replace(/^51T\d+/,"")),Ft.stopId&&$t.has(Ft.stopId)&&K.add($t.get(Ft.stopId));if(!Y.size&&!K.size)continue;let G=(O.descriptionText||O.headerText||{translation:[]}).translation||[],it=((G.find(Ft=>Ft.language==="es")||G[0]||{}).text||"").trim(),W=+((O.activePeriod||[])[0]||{}).start||0;z.some(Ft=>Ft.txt===it)||z.push({id:A.id,fams:Y,stops:K,txt:it,when:W?new Date(W*1e3).toISOString().slice(0,19):"",src:"Renfe"})}}if(H.adif&&Date.now()-H.adifAt<15*6e4)for(let[_,A]of(H.adif.items||[]).entries()){let O=(A.t?A.t+". ":"")+A.txt,Y=new Set,K=new Set,G=w(O);for(let it of O.matchAll(/\b(R\d{1,2}[NS]?|R3a|RG1|RL\d|RT\d)\b/g))J[it[1]]&&Y.add(it[1]);T.forEach((it,W)=>{it.fams.size&&it.n.length>4&&G.includes(w(it.n))&&(K.add(W),Y.size||it.fams.forEach(Ft=>Y.add(Ft)))}),z.some(it=>it.txt===O)||z.push({id:"A"+_,fams:Y,stops:K,txt:O,when:H.adif.upd||"",src:"Adif",lvl:A.lvl})}let v=_=>String(_||"").replace(/&#x([0-9a-f]+);/gi,(A,O)=>String.fromCodePoint(parseInt(O,16))).replace(/&#(\d+);/g,(A,O)=>String.fromCodePoint(+O)).replace(/&nbsp;/g," ").replace(/&quot;/g,'"').replace(/&apos;|&#39;/g,"'").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/[\u200B-\u200D\uFEFF]/g,"").replace(/\s+/g," ").trim();for(let _ of z)if(_.txt=v(_.txt),_.es&&(_.es=v(_.es)),_.fams&&_.fams.size>3){let A=_.txt.match(/\bTren\s+(\d{4,6})\b/i);if(A){let O=null;try{O=bp(A[1])}catch{}O&&(_.fams=new Set([O]))}}if(P.status==="fulfilled"||C.status==="fulfilled"){H.alerts=z.sort((_,A)=>A.when>_.when?1:-1);try{z_()}catch{}}at(),qh(),Me=0,a()}let Z=()=>H.okVP&&Date.now()-H.okVP<10*6e4,Oe=()=>H.okVP&&Date.now()-H.okVP<9e4,Ue={at:0,v:!1},F=()=>{if(!Z()||H.vp.size>0)return!1;if(Date.now()-Ue.at>3e4){Ue.at=Date.now();let o=St(new Date),c=t.days.indexOf(o.ymd),f=0;if(c>=0)for(let p of st[c]){let x=o.min-p.t0;x>p.pat.t[1]+2&&x<p.pat.t[p.pat.t.length-2]-2&&f++}Ue.v=f>=6}return Ue.v},E=()=>Z()&&!F();function at(){let o=y("#rtst"),c=y("#mode");if(c){let p=[...dt].filter(P=>{go("");let L=$i.m.get(P);return L&&L[0]>=2}),x=mo(p),S=!!E()&&te().live&&!(p.length&&x.length===p.length);c.classList.toggle("on",S&&Oe()),c.classList.toggle("pre",!(S&&Oe())),c.textContent=S&&!Oe()?__t(1):S?__t(2):Dt.cur?__t(3):__t(4),c.classList.toggle("past",!!Dt.cur);let C=y("#rcgrab");if(C){let P=C.querySelector(".rdot");P||(P=document.createElement("b"),P.className="rdot",C.insertBefore(P,C.firstChild)),P.className="rdot "+(Dt.cur?"past":S&&Oe()?"on":"pre"),P.title=c.textContent}c.title=Dt.cur?`${__t(5)}${Dt.cur.sn.t}${__t(6)}`:""}if(!o)return;H.url?H.err?o.textContent=__t(8)+H.err+__t(9):E()?o.innerHTML=`${__t(10)}${H.vp.size}${__t(11)}${H.delays.size}${__t(12)}${new Date(H.okVP).toLocaleTimeString("es-ES",{hour:"2-digit",minute:"2-digit",second:"2-digit"})}`:F()?o.textContent=__t(13):o.textContent=__t(14):o.textContent=H.err||__t(7);let f=y("#rturl");f&&f._shown!==H.url&&(f.value=H.url,f._shown=H.url)}y("#rtsave").onclick=()=>{let o=y("#rturl").value.trim().replace(/\/+(alerts|trip_updates|vehicle_positions)\.json$/,"").replace(/\/+$/,"");if(o&&!/^https?:\/\//.test(o)&&(o="https://"+o),!o){H.err=__t(15),at();return}H.url=o;try{localStorage.setItem("rod_rt",o)}catch{}H.ok=0,H.err="",at(),de()},y("#rtoff").onclick=()=>{H.url=It;try{localStorage.removeItem("rod_rt")}catch{}d._h="",de()};let ct=0;setInterval(()=>{let o=on.size||xe;(document.hidden?!o||Date.now()-ct<115e3:Date.now()-ct<15e3)||(ct=Date.now(),de())},2e4),setTimeout(()=>{ct=Date.now(),de()},50),document.addEventListener("visibilitychange",()=>{!document.hidden&&Date.now()-ct>15e3&&(ct=Date.now(),de())});let Dt={snap:null,key:""};function zt(){let o=te();if(o.live||!we.hoy||!we.hoy.snaps||Ut&&ue==null)return null;let c=St(new Date).min;if(o.min>c+1)return null;let f=null;for(let p of we.hoy.snaps){if(!p.d)continue;let x=Vp(p.t);x<=o.min+1&&(!f||x>f.m)&&(f={m:x,sn:p})}return f&&o.min-f.m<=25?f:null}let gt=o=>{{let x=Wh(o.num);if(x&&x.cx&&te().live)return"X"}let c=Dt.cur;if(c){if(c.sn.x&&c.sn.x.includes(o.tid))return"X";let x=c.sn.d[o.tid];return x??0}if(!E())return null;let f=H.delays.get(o.tid),p=H.vp.get(o.tid);return f==="X"?f:p&&p.pre&&p.preDl>=1?Math.max(typeof f=="number"?f:0,p.preDl*60):f??null},dt=new Set(X);try{let o=JSON.parse(localStorage.getItem("rod_lines")||"null");Array.isArray(o)&&o.some(c=>X.includes(c))&&(dt.clear(),o.forEach(c=>X.includes(c)&&dt.add(c)))}catch{}let qt=new Qi,he=new Qi,Zt=new ps({vertexColors:!0,linewidth:3.2,depthTest:!1,transparent:!0}),Gt=new ps({color:16777215,linewidth:6,depthTest:!1,transparent:!0,opacity:.9}),le=new kr(qt,Zt),pe=new kr(he,Gt);pe.renderOrder=20,le.renderOrder=21,le.frustumCulled=pe.frustumCulled=!1,e.add(pe,le);function Re(o){let c=o[0]/l+u,f=o[1]/l+h;for(let p of N){if(p._bb===void 0){let S=1e9,C=1e9,P=-1e9,L=-1e9;for(let U of p.rings||[]){let z=U[0]||[];for(let v=0;v<z.length;v+=2)z[v]<S&&(S=z[v]),z[v]>P&&(P=z[v]),z[v+1]<C&&(C=z[v+1]),z[v+1]>L&&(L=z[v+1])}p._bb=[S,C,P,L]}let x=p._bb;if(!(c<x[0]||c>x[2]||f<x[1]||f>x[3]))for(let S of p.rings||[]){let C=S[0]||[],P=!1;for(let L=0,U=C.length,z=U-2;L<U;z=L,L+=2){let v=C[L+1],_=C[z+1];v>f!=_>f&&c<(C[z]-C[L])*(f-v)/(_-v)+C[L]&&(P=!P)}if(P)return!0}}return!1}let nt=!1;function Yt(){nt||!N.length||(nt=!0,T.forEach(o=>{o.ext=!Re(o.w)}),D.forEach(o=>{o.ext=!Re(o.p[0])&&!Re(o.p[o.p.length-1])&&!Re(o.p[o.p.length>>1])}))}let bt=()=>{let o=new Set(dt.size<=2?dt:[]);try{Mt&&Mt.fam&&o.add(Mt.fam)}catch{}return o},Wt="";function Kt(){Yt();let o=[],c=[],f=new Set,p=new ye,x=new ye("#d2d0d0"),S=bt();Wt=[...S].join();for(let z of X)if(dt.has(z))for(let v of Q[z]){if(f.has(v))continue;f.add(v);let _=D[v].p;p.set(J[z]),D[v].ext&&!S.has(z)&&p.lerp(x,.55);for(let A=0;A+1<_.length;A++)o.push(_[A][0],_[A][1],V,_[A+1][0],_[A+1][1],V),c.push(p.r,p.g,p.b,p.r,p.g,p.b)}o.length||(o.push(0,0,-50,0,0,-50),c.push(0,0,0,0,0,0));let C=new Qi,P=new Qi;C.setPositions(o),C.setColors(c),P.setPositions(o);let L=le.geometry,U=pe.geometry;le.geometry=C,pe.geometry=P,L&&L.dispose(),U&&U.dispose(),a()}Kt();let Tt=o=>new $n({uniforms:{dpr:{value:Math.min(devicePixelRatio||1,2)},border:{value:new ye(o)}},vertexShader:"attribute float size; attribute vec3 fill; attribute float bw; varying vec3 vF; varying float vS; varying float vB; uniform float dpr; void main(){ vF=fill; vS=size*dpr; vB=bw*dpr; gl_PointSize=vS; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"uniform vec3 border; varying vec3 vF; varying float vS; varying float vB; void main(){ float r=length(gl_PointCoord*2.0-1.0)*vS*0.5; float R=vS*0.5; if(r>R) discard; float a=1.0-smoothstep(R-1.2,R,r); vec3 c = r>R-vB ? border : vF; gl_FragColor=vec4(c,a); }",transparent:!0,depthTest:!1}),oe=new Mn,ie=T.length,Ke=new Float32Array(ie*3),Je=new Float32Array(ie*3),Vn=new Float32Array(ie),di=new Float32Array(ie);T.forEach((o,c)=>{Ke[c*3]=o.w[0],Ke[c*3+1]=o.w[1],Ke[c*3+2]=V,Je.set([1,1,1],c*3),Vn[c]=6,di[c]=1.6}),oe.setAttribute("position",new un(Ke,3)),oe.setAttribute("fill",new un(Je,3)),oe.setAttribute("size",new un(Vn,1)),oe.setAttribute("bw",new un(di,1));let Bl=Tt("#1d2330"),ja=new Pr(oe,Bl);ja.renderOrder=22,ja.frustumCulled=!1,e.add(ja);function Hn(){let o=r.dist<45,c=bt();T.forEach((f,p)=>{let x=[...f.fams].some(C=>dt.has(C)),S=f.ext&&![...f.fams].some(C=>c.has(C))&&p!==me;Vn[p]=x?p===me?13:S?3:o?8:5:0,di[p]=p===me?3:1.6}),oe.attributes.size.needsUpdate=!0,oe.attributes.bw.needsUpdate=!0}let fi=600,Oi=new Mn,fr=new Float32Array(fi*3),pr=new Float32Array(fi*3),Fi=new Float32Array(fi),Wr=new Float32Array(fi);Oi.setAttribute("position",new un(fr,3)),Oi.setAttribute("fill",new un(pr,3)),Oi.setAttribute("size",new un(Fi,1)),Oi.setAttribute("bw",new un(Wr,1));let Vs=new Float32Array(fi);Oi.setAttribute("ang",new un(Vs,1));let kl=new $n({uniforms:{dpr:{value:Math.min(devicePixelRatio||1,2)},border:{value:new ye("#ffffff")}},vertexShader:"attribute float size; attribute vec3 fill; attribute float bw; attribute float ang; varying vec3 vF; varying float vS; varying float vB; varying float vA; uniform float dpr; void main(){ vF=fill; vS=size*dpr; vB=bw*dpr; vA=ang; gl_PointSize=vS; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"uniform vec3 border; varying vec3 vF; varying float vS; varying float vB; varying float vA; void main(){ vec2 p=gl_PointCoord*2.0-1.0; float r=length(p)*vS*0.5; float R=vS*0.5; if(r>R) discard; float a=1.0-smoothstep(R-1.2,R,r); vec3 c = r>R-vB ? border : vF; if(vA<50.0){ vec2 d=vec2(sin(vA),-cos(vA)); vec2 n=vec2(cos(vA),sin(vA)); float qy=-dot(p,d); float qx=dot(p,n); float w=(qy+0.66)/0.98*0.48; if(qy>-0.66 && qy<0.32 && abs(qx)<w) c=vec3(1.0); } else if(vA>70.0 && vA<80.0){ if(abs(p.y)<0.36 && abs(abs(p.x)-0.2)<0.1) c=vec3(1.0); } else if(vA>80.0 && vA<90.0){ if((abs(p.x)<0.11 && p.y>-0.5 && p.y<0.16) || length(p-vec2(0.0,0.38))<0.12) c=vec3(1.0); } gl_FragColor=vec4(c,a); }",transparent:!0,depthTest:!1}),Hs=new Pr(Oi,kl);Hs.renderOrder=24,Hs.frustumCulled=!1,e.add(Hs);let ts=new Mn,bs=new Float32Array(fi*3),Ka=new Float32Array(fi*3),Qa=new Float32Array(fi),$l=new Float32Array(fi);ts.setAttribute("position",new un(bs,3)),ts.setAttribute("fill",new un(Ka,3)),ts.setAttribute("size",new un(Qa,1)),ts.setAttribute("bw",new un($l,1));let to=new Pr(ts,Tt("#ffffff"));to.renderOrder=23,to.frustumCulled=!1,e.add(to);function zl(o,c){let f=D[o],p=c*f.L,x=0,S=f.c.length-1;for(;S-x>1;){let z=x+S>>1;f.c[z]<=p?x=z:S=z}let C=f.c[S]-f.c[x]||1,P=(p-f.c[x])/C,L=f.p[x],U=f.p[S];return[L[0]+(U[0]-L[0])*P,L[1]+(U[1]-L[1])*P]}let Vl=o=>o*o*(3-2*o)*.35+o*.65;function Gs(o,c){let f=o.pat.t,p=o.pat.stops.length,x=f[2*p-2];if(c<f[1]-2||c>x+1)return null;if(c<=f[1])return{w:T[o.pat.stops[0]].w,at:0,next:0,moving:!1};for(let S=0;S<p-1;S++){let C=f[2*S+1],P=f[2*S+2],L=f[2*S+3];if(c<=P){let U=P>C?(c-C)/(P-C):1;return{w:zl(o.pat.segs[S],Vl(M(U,0,1))),at:-1,next:S+1,prev:S,moving:!0}}if(c<=L)return{w:T[o.pat.stops[S+1]].w,at:S+1,next:S+1,moving:!1}}return{w:T[o.pat.stops[p-1]].w,at:p-1,next:p-1,moving:!1}}function I(o){let c=t.days.indexOf(o.ymd),f=[];if(c<0)return{k:c,out:f};let p=(x,S)=>{for(let C of x){if(!dt.has(C.fam))continue;let P=gt(C);if(P==="X")continue;let L=(P||0)/60,U=o.min+S-C.t0-L;if(U<-2||U>C.pat.t[C.pat.t.length-2]+1)continue;let z=Gs(C,U);z&&f.push({tr:C,p:z,rel:U,dl:L,live:P!=null})}};return p(st[c],0),c>0&&p(st[c-1],1440),{k:c,out:f}}function tt(o,c,f,p){let x=o.pat.stops[0],S=c.dep0,C=null,P=(U,z)=>{for(let v of U||[]){let _=v.pat.stops,A=_.length;if(_[A-1]!==x||v===o)continue;let O=v.t0+v.pat.t[2*(A-1)]-z;if(O>S+5||O<S-120)continue;let Y=ne(v.pat),K=Ye(Y,c.w,-1,1e9);if(K.err>.6)continue;let G=Y.stopD,it=v.pat.t,W=G.findIndex(Qt=>Qt>K.d);W<0&&(W=A-1);let Ft=W===0?it[1]:it[2*W-1]+(G[W]>G[W-1]?(K.d-G[W-1])/(G[W]-G[W-1]):1)*(it[2*W]-it[2*W-1]),Te=f-(v.t0+Ft-z);Te<-5||Te>120||(!C||Math.abs(Te)<Math.abs(C.prevDl))&&(C={prevTr:v,dPrev:K.d,prevDl:Te,arrO:O+Math.max(0,Te)})}};if(P(st[p],0),p>0&&P(st[p-1],1440),!C)return{prevTr:null,preDl:0};let L=Math.max(S,C.arrO+3);return{...C,depEst:L,preDl:Math.max(0,L-S)}}function ft(o,c,f){let p=o.pat.t,x=c.length;if(!(f>=0))return f<0?c[0]:null;for(let S=0;S<x;S++)if(f<=p[2*S+1]){if(f>=p[2*S]||S===0)return c[S];let C=p[2*S-1],P=p[2*S];return c[S-1]+(c[S]-c[S-1])*(P>C?(f-C)/(P-C):1)}return c[x-1]}let lt=performance.now();function ut(){let o=[],c=Date.now()/1e3,f=performance.now(),p=Math.min(1,(f-lt)/1e3);lt=f;for(let x of H.vp.values()){let S=pt.get(x.tid),C=S?S.fam:x.fam;if(C&&J[C]&&!dt.has(C))continue;let P=H.delays.get(x.tid),L=typeof P=="number"?P/60:0,U=Math.max(0,c-x.ts);x.mvTs!==x.ts&&((!x.mvW||Math.hypot(x.w[0]-x.mvW[0],x.w[1]-x.mvW[1])>.025)&&(x.mvW=x.w,x.mvAt=x.ts),x.mvTs=x.ts),x.still=x.ts-(x.mvAt||x.ts);let z=x.w,v=-1;if(S){let A=ne(S.pat),O=A.stopD;if(x.dObs==null||x.obsAt!==x.ts){let W=Ye(A,x.w,-1,1e9);x.dObs=W.d,x.err=W.err,x.obsAt=x.ts}let Y=te(),K=t.days.indexOf(Y.ymd),G=S.day===K-1?1440:0,it=S.t0+S.pat.t[1]-G;if(x.pre=Y.min+L<it-1&&(x.dObs>O[0]+.35||x.err>.6)&&!(x.st==="STOPPED_AT"&&x.sid===T[S.pat.stops[0]].id),x.dep0=it,x.pre){if(x.atStop=-1,x.next=0,v=0,x.disp=null,x.prevAt!==x.ts&&(x.prevAt=x.ts,Object.assign(x,tt(S,x,Y.min,K))),x.prevTr){let W=ne(x.prevTr.pat);z=Ne(W,x.dPrev)}}else if(!Oe()&&S){let W=te(),Ft=t.days.indexOf(W.ymd),Te=S.day===Ft-1?1440:0,Qt=Gs(S,W.min+Te-S.t0-L);Qt?(z=Qt.w,x.est=!0,v=Qt.next,x.atStop=Qt.moving?-1:Qt.at,x.next=Qt.next,x.before=!1):(x.atStop=-1,x.next=-1)}else if(x.err<=.6){let W=O.findIndex(Qt=>Qt>x.dObs+.08);W<0&&(W=O.length-1);let Ft=O.reduce((Qt,je,Ae)=>Math.abs(je-x.dObs)<Math.abs(O[Qt]-x.dObs)?Ae:Qt,0);x.atStop=Math.abs(O[Ft]-x.dObs)<.16?Ft:-1;{let Qt=x.st==="STOPPED_AT"&&x.sid?S.pat.stops.findIndex(je=>T[je].id===x.sid):-1;Qt>=0&&Math.abs(O[Qt]-x.dObs)<.6&&(x.atStop=Qt,W<=Qt&&(W=Math.min(Qt+1,O.length-1)))}x.before=x.atStop>=0&&x.dObs<O[x.atStop]-.15,x.next=W,v=W;let Te=x.dObs;if(x.st==="STOPPED_AT"&&x.atStop>=0)Te=O[x.atStop];else if(W>0){let Qt=(S.pat.t[2*W]-S.pat.t[2*W-1])*60,je=Qt>0?(O[W]-O[W-1])/Qt:0,Ae=te(),Se=t.days.indexOf(Ae.ymd),xn=S.day===Se-1?1440:0,nn=ft(S,O,Ae.min+xn-S.t0-L),fn=x.dObs+je*Math.min(U,60);nn!=null&&(fn=Math.min(fn,Math.max(x.dObs,nn))),Te=Math.max(x.dObs,Math.min(O[W]-.03,fn))}x.disp==null||Math.abs(x.disp-Te)>1.2?x.disp=Te:Te>x.disp&&(x.disp+=(Te-x.disp)*Math.min(1,p*1.5)),z=Ne(A,x.disp)}else if(x.err>2){let W=te(),Ft=t.days.indexOf(W.ymd),Te=S.day===Ft-1?1440:0,Qt=Gs(S,W.min+Te-S.t0-L);Qt&&(z=Qt.w,x.est=!0,v=Qt.next),x.atStop=-1,x.next=Qt?Qt.next:-1}else x.atStop=-1,x.next=-1}let _=x.pre?"":x.st==="STOPPED_AT"&&x.atStop>=0||x.atStop>=0&&x.still>30?"st":x.still>=90&&x.atStop<0?"via":"";o.push({tr:S,v:x,w:z,stop:_,p:{w:z},fam:C||"?",c:S?S.c:J[C]||"#6b7385",dl:L,live:!0,real:!0,idx:v,age:U,cancel:P==="X"})}return o}let Bt=new Map,Ot=!1,Ct=!1,Jt="",se={st:-1},re=[],Me=0,Nt=null,Mt=null,me=-1,_e=!1,tn=0,Pn="";function ee(o){let c=Ut>0||!!Nt,f=window.__mapHidden?1e3:Ut>0?50:c?200:250;if(o-Me<f)return!1;Me=o,[...bt()].join()!==Wt&&(Kt(),Hn());{let v=zt(),_=v?v.sn.t:"";Dt.cur=v,_!==Dt.key&&(Dt.key=_,at()),!v&&!te().live&&!we.at&&Hl()}let p=te(),x=E()&&p.live,S=x?{k:t.days.indexOf(p.ymd),out:ut()}:I(p);re=S.out;let C=new ye,P=0,L=0;for(let v of re){if(P>=fi)break;fr[P*3]=v.p.w[0],fr[P*3+1]=v.p.w[1],fr[P*3+2]=V+.02;let _=null;if(v.real&&v.v.pre&&v.v.prevTr)_=Ne(ne(v.v.prevTr.pat),v.v.dPrev+.35);else if(v.real&&v.tr&&!v.v.pre&&v.v.err<=.6&&v.v.disp!=null&&!(v.v.st==="STOPPED_AT"&&v.v.atStop>=0))_=Ne(ne(v.tr.pat),v.v.disp+.35);else if(!v.real&&v.p.moving){let G=v.tr.pat.t,it=v.p.prev,W=G[2*it+1],Ft=G[2*it+2],Te=Ft>W?(v.rel-W)/(Ft-W):1;_=zl(v.tr.pat.segs[it],Math.min(1,Vl(M(Te,0,1))+.04))}let A=v.real?!!v.stop:!v.p.moving;if(v.broke=Rp(v),v.broke)Vs[P]=85;else if(A)Vs[P]=75;else if(_){let G=Yl(v.p.w),it=Yl(_),W=it[0]-G[0],Ft=it[1]-G[1];Vs[P]=Math.hypot(W,Ft)>.05?Math.atan2(W,-Ft):99}else Vs[P]=99;C.set(v.c||v.tr.c),pr[P*3]=C.r,pr[P*3+1]=C.g,pr[P*3+2]=C.b;let O=v.tr?v.tr===Mt:Mt&&Mt.vtid===v.v.tid;Fi[P]=O?22:r.dist<45?17:14,Wr[P]=O?3.5:2.2;let Y=v.real&&v.stop==="via"||!!v.broke,K=v.cancel||v.broke?[.86,.15,.15]:v.dl>10?[.86,.15,.15]:v.dl>5?[.92,.48,.05]:v.dl>=1?[.98,.8,.08]:[.09,.64,.29];(v.live&&v.dl>=5||O||Y)&&(bs[L*3]=v.p.w[0],bs[L*3+1]=v.p.w[1],bs[L*3+2]=V+.01,Ka.set(O?K:Y?[.86,.15,.15]:[.98,.45,.09],L*3),Qa[L]=Fi[P]+(O?16+5*Math.sin(o/220):Y?10+3*Math.sin(o/400):8),$l[L]=O?2:3,L++),P++}if(Oi.setDrawRange(0,P),ts.setDrawRange(0,L),["position","fill","size","bw"].forEach(v=>{Oi.attributes[v].needsUpdate=!0,ts.attributes[v].needsUpdate=!0}),Oi.attributes.ang.needsUpdate=!0,Nt){let v=re.find(_=>_.tr===Nt);if(v){let _=0,A=innerHeight,O=d.style.display!=="none"&&!d.classList.contains("min")?d.getBoundingClientRect():null,Y=y("#rc").getBoundingClientRect();innerWidth<=640&&(O&&(_=O.bottom),A=Math.min(A,Y.top));let K=_+(A-_)/2,G=K-innerHeight/2,it=2*s.dist*Math.tan(17.5*Math.PI/180)/innerHeight;s.tx=v.p.w[0]-Math.sin(r.yaw)*G*it,s.ty=v.p.w[1]+Math.cos(r.yaw)*G*it}else E()&&te().live&&(Nt=null)}let U=rt(Math.floor(p.min+1e-6));U!==Pn&&(Pn=U,y("#ctime").textContent=U),y("#ntr").textContent=String(re.length),y("#ntrl").textContent=x?__t(16):__t(17);{let v=dt.size<X.length?[...dt].sort(B).join(", "):"",_=y("#ccount"),A=Dt.cur?`\u23EA ${re.length}${__t(18)}${Dt.cur.sn.t} \xB7 ${Object.values(Dt.cur.sn.d).filter(O=>O>=60).length}${__t(19)}`:!p.live&&p.min<St(new Date).min-1&&!Ut?`${__t(20)}${we.hoy&&we.hoy.snaps&&we.hoy.snaps.some(O=>O.d)?`${__t(21)}${we.hoy.snaps.find(O=>O.d).t}`:__t(22)}`:x&&!Oe()?`\u{1F4F6} ${__t(1)} \xB7 ${__t(23)} ${xs(Math.round((Date.now()-H.okVP)/6e4)+" min")} <small class="nopos">\xB7 ${__t(24)}</small>`:x&&!re.some(O=>O.real)&&mo(dt).length?`\u{1F4E1} ${__t(25)}${v?` <small>\xB7 ${m(v)}</small>`:""} <small class="nopos">\xB7 ${__t(26)}</small>`:`\u{1F686} ${re.length} ${x?__t(27):__t(28)}${v?` <small>\xB7 ${m(v)}</small>`:""}${x&&H.okVP?(()=>{let O=Math.max(0,Math.round((Date.now()-H.okVP)/1e3));return` <small class="fresh${O<3?" new":""}">\u25CF ${__t(29)}${xs(O+" s")}</small>`})():""}`;_&&_._t!==A&&(_.innerHTML=A,_._t=A)}{let v=y("#p");v&&v.classList.toggle("ttf",!p.live||!!Ut)}let z=new Date;if(y("#cdate").textContent=p.live?__t(30):Ut?__t(31)+Ut:Pi?__t(32):__t(33),S.k<0?y("#src").innerHTML=`${__t(34)}${He(t.days[0])}${__t(35)}${He(t.days[t.days.length-1])}${__t(36)}`:x?y("#src").textContent=`${Oe()?__t(37):__t(38)}${xs(Ch(Math.max(0,Date.now()/1e3-Math.max(...[...H.vp.values()].map(v=>v.ts),0))))}`:F()&&p.live?y("#src").innerHTML=__t(39):y("#src").innerHTML=__t(40)+(H.url?__t(41):__t(42))+__t(43),p.live){let v=Math.round(p.min),_=y("#tsl");document.activeElement!==_&&(_.value=v<240?v+1440:v)}{let v=Mt?String(Mt.num||Mt.vtid||""):"";v!==ee._sk&&(ee._sk=v,ve(!0))}return ve(),!ee._sp&&(x||!p.live||F()||!H.url)&&(ee._sp=1,window.__splashOff&&window.__splashOff()),o-tn>3e3&&(Mt||me>=0||_e||Ct||Jt)&&(tn=o,Ie()),at(),!0}let Nn=-1,Fe=(()=>{try{return localStorage.getItem("rod_mun")==="1"}catch{return!1}})(),Gn=[],Cn=document.createElement("button");Cn.type="button",Cn.id="mbtn",Cn.title=__t(44),Cn.innerHTML=__t(45),Cn.onclick=()=>{Fe=!Fe;try{localStorage.setItem("rod_mun",Fe?"1":"")}catch{}Cn.classList.toggle("on",Fe),a(),Bi()},Cn.classList.toggle("on",Fe),document.body.appendChild(Cn);let es=N.slice().sort((o,c)=>c.pop-o.pop);function Ws(o){if(o._a)return o._a;let c=null,f=0;for(let p of o.rings||[]){let x=p[0];if(!x)continue;let S=0,C=0,P=0;for(let L=0,U=x.length;L<U;L+=2){let z=x[L],v=x[L+1],_=x[(L+2)%U],A=x[(L+3)%U],O=z*A-_*v;S+=O,C+=(z+_)*O,P+=(v+A)*O}Math.abs(S)>f&&(f=Math.abs(S),c=[C/(3*S),P/(3*S)])}return o._a=c?[(c[0]-u)*l,(c[1]-h)*l]:[o.cx,o.cy]}let en=o=>o>=1e5?1:o>=2e4?2:o>=5e3?3:4,_n=[0,7.6,6.7,6,5.4],ns=[0,17,15,13,12],cn=o=>o.replace(/^(.*), (el|la|les|els|los|las)$/i,"$2 $1").replace(/^(.*), l'$/i,"l'$1");function Bi(){let o=s.tilt<.06&&r.tilt<.08;Cn.classList.toggle("show",o);let c=0;if(Fe&&o){let f=[...document.querySelectorAll(".plab, .slab")].filter(S=>S.offsetParent!==null||S.style.display==="block").map(S=>{let C=S.getBoundingClientRect();return[C.left-2,C.top-2,C.right+2,C.bottom+2]}).filter(S=>S[2]>S[0]),p=r.dist,x=p>160?5e4:p>130?2e4:p>105?8e3:p>80?3e3:p>62?800:0;for(let S of es){let C=en(S.pop);if(S.pop<x)break;let P=Ws(S);if(wn.set(P[0],P[1],V).project(n),Math.abs(wn.x)>1.02||Math.abs(wn.y)>1.02)continue;let L=(wn.x*.5+.5)*innerWidth,U=(-wn.y*.5+.5)*innerHeight,z=cn(S.name),v=z.length*_n[C]+8,_=ns[C],A=[L-v/2,U-_/2,L+v/2,U+_/2];if(f.some(Y=>A[0]<Y[2]&&Y[0]<A[2]&&A[1]<Y[3]&&Y[1]<A[3]))continue;f.push(A);let O=Gn[c]||(Gn[c]=Object.assign(document.createElement("div"),{className:"mlab"}));O.isConnected||document.body.appendChild(O),O._n!==z&&(O.textContent=z,O._n=z),O._t!==C&&(O.className="mlab t"+C,O._t=C),O.style.transform=`translate(${Math.round(L)}px,${Math.round(U)}px) translate(-50%,-50%)`,O.style.display="block",c++}}for(;c<Gn.length;c++)Gn[c].style.display="none"}let we={at:0,hoy:null,ayer:null,err:""},eo="https://raw.githubusercontent.com/elMonoAmelio/catalunya-survival/stats/";function Hl(){Date.now()-we.at<5*6e4||(we.at=Date.now(),Promise.all(["hoy","ayer","hist","dias30"].map(o=>fetch(eo+o+".json",{cache:"no-store"}).then(c=>c.ok?c.json():null).catch(()=>null)).map((o,c)=>c===3?o.then(f=>f||fetch(eo+"dias.json",{cache:"no-store"}).then(p=>p.ok?p.json():null).catch(()=>null)):o)).then(([o,c,f,p])=>{we.hoy=o,we.ayer=c,we.hist=f,we.dias=p,we.tr=null,we.err=o?"":__t(46),(Ct||Jt)&&(d._h="",Ie()),ve(!0)}))}function l_(o){let c={};for(let p of o&&o.snaps||[])for(let x of p.r||[]){let S=/^\d+[A-Z](\d+)/.exec(x);S&&(c[S[1]]=c[S[1]]||[]).push(Math.max(0,p.d&&p.d[x]||0)/60)}let f={};for(let p in c){let x=c[p].sort((S,C)=>S-C);f[p]=Math.round(x[x.length>>1])}return f}function Gl(o){if(!we.tr){let f=new Map;for(let p of we.hist&&we.hist.days||[])f.set(p.day,p.tr);for(let p of[we.ayer,we.hoy])if(p&&p.day&&!f.has(p.day)){let x=l_(p);Object.keys(x).length&&f.set(p.day,x)}we.tr=f}if(o==="")return null;let c=[...we.tr.values()].map(f=>f[String(o)]).filter(f=>f!=null);return c.length?{n:c.length,late:c.filter(f=>f>=5).length,avg:c.reduce((f,p)=>f+p,0)/c.length}:null}let vp=o=>new Date(+o.slice(0,4),+o.slice(4,6)-1,+o.slice(6,8)).getDay(),c_=o=>{let c=-1,f=9,p=vp(o),x=S=>S===0||S===6?S:1;return t.days.forEach((S,C)=>{let P=vp(S),L=S===o?0:P===p?1:x(P)===x(p)?2:9;L<f&&(f=L,c=C)}),f<9?c:-1},yp=()=>{let o=new Map;for(let c of we.hist&&we.hist.days||[])c.cx&&o.set(c.day,new Set(c.cx.map(String)));return o},u_=()=>{let o=(we.hist&&we.hist.days||[]).find(c=>c.cx);return o?o.day:null};function Sp(o){Gl("");let c=yp(),f=0,p=0,x=0,S=0;for(let[C,P]of we.tr||[]){let L=c_(C.replace(/-/g,""));if(L<0)continue;let U=qr(o,L);if(!U)continue;let z=String(U.num);if(c.get(C)&&c.get(C).has(z)){S++,f++;continue}let v=P[z];v!=null&&(f++,x+=v,v>=5&&p++)}return{n:f,late:p,sum:x,nc:S}}let Wl=null,bp=o=>{if(!Wl){Wl=new Map;for(let c of st)for(let f of c||[])Wl.set(String(f.num),f.fam)}return Wl.get(String(o))};function Mp(o){let c=(we.dias&&we.dias.days||[]).slice(-30);if(!c.length)return null;let f=new Map;for(let L of c)for(let[U,z]of Object.entries(L.lines||{})){let v=f.get(U)||{n:0,ok:0,s:0,max:0,days:0};v.n+=z.n,v.ok+=z.ok,v.s+=z.avg*z.n,v.max=Math.max(v.max,z.max||0),v.days++,f.set(U,v)}let p=f.get(o);if(!p||p.n<30)return null;let x=[...f.entries()].filter(([L,U])=>J[L]&&U.n>=30).sort((L,U)=>L[1].ok/L[1].n-U[1].ok/U[1].n),S=x.findIndex(([L])=>L===o),C=yp(),P=0;for(let L of C.values())for(let U of L)bp(U)===o&&P++;return{pct:p.ok/p.n*100,avg:p.s/p.n,max:p.max,days:p.days,pos:S+1,of:x.length,nc:P,since:u_()}}let h_=o=>o?`${+o.slice(8,10)}/${+o.slice(5,7)}`:"",Gh=o=>o>=60?`${Math.floor(o/60)} h ${String(Math.round(o%60)).padStart(2,"0")} min`:`${Math.round(o)} min`,Ms=o=>o>=90?"g":o>=80?"y":o>=65?"w":"b",ws={g:"#16a34a",y:"#eab308",w:"#ea7a0c",b:"#dc2626"},wp=o=>o>10?ws.b:o>5?ws.w:o>=1?ws.y:ws.g,Es=o=>(o>=.05?"+":"")+(Math.round(o*10)/10).toString().replace(".",",")+" min";function no(o,c,f){return`<div class="sbars">${o.map(p=>`<div class="sbar" title="${m(p.tip||"")}"><span class="sl">${p.lab}</span><span class="st"><i style="width:${Math.max(2,Math.round(p.w*100))}%;background:${p.c}"></i></span><b class="sv" style="color:${p.c===ws.y?"var(--svy,#a16207)":p.c===ws.w?"var(--svw,#c2410c)":p.c}">${p.val}</b></div>`).join("")}</div>`}function d_(o){if(o=(o||[]).filter(G=>G.n>=10),!o||o.length<2){let G=o&&o[0];return G?`${__t(47)}${G.t}: ${Math.round(G.ok/G.n*100)}${__t(48)}${G.n}${__t(49)}`:__t(50)}let c=G=>{let[it,W]=G.t.split(":").map(Number);return it*60+W},f=c(o[0]),p=Math.max(f+60,c(o[o.length-1])),x=300,S=112,C=24,P=G=>C+(G-f)*(x-C-8)/(p-f),L=G=>8+(100-G)/100*(S-26),U=G=>G.n?G.ok/G.n*100:100,z=o.map(G=>[P(c(G)),L(U(G)),G]),v=G=>G[0].toFixed(1)+","+G[1].toFixed(1),_=[],A=[];z.forEach((G,it)=>{it&&c(G[2])-c(z[it-1][2])>45&&(_.push(A),A=[]),A.push(G)}),_.push(A);let O=z[z.length-1],Y=[];for(let G=Math.ceil(f/180)*3;G*60<p;G+=3)G*60>f+20&&Y.push(G);let K=Math.round(o.reduce((G,it)=>G+it.ok,0)/Math.max(1,o.reduce((G,it)=>G+it.n,0))*100);return`<svg class="schart" viewBox="0 0 ${x} ${S}${__t(51)}${[100,75,50,25].map(G=>`<line x1="${C}" x2="${x-4}" y1="${L(G)}" y2="${L(G)}" class="gl"/><text x="2" y="${L(G)+3}" class="ax">${G}%</text>`).join("")}
      <line x1="${C}" x2="${x-4}" y1="${L(K)}" y2="${L(K)}" class="avg"/>
      ${_.filter(G=>G.length).map(G=>`<polygon points="${v([G[0][0],L(0)])} ${G.map(v).join(" ")} ${v([G[G.length-1][0],L(0)])}" class="ar"/><polyline points="${G.map(v).join(" ")}" class="ln"/>`).join("")}
      ${z.map(([G,it,W])=>`<circle cx="${G.toFixed(1)}" cy="${it.toFixed(1)}" r="6" class="hit"><title>${W.t} \xB7 ${Math.round(U(W))}${__t(52)}${W.n}${__t(53)}${W.d5}${__t(54)}${Es(W.avg)}${W.nd?` \xB7 ${W.nd}${__t(55)}`:""}</title></circle>`).join("")}
      <circle cx="${O[0].toFixed(1)}" cy="${O[1].toFixed(1)}" r="3.5" class="pt"/><text x="${Math.min(O[0],x-30).toFixed(1)}" y="${(O[1]-7).toFixed(1)}" class="lv" text-anchor="middle">${Math.round(U(O[2]))}%</text>
      ${Y.map(G=>`<text x="${P(G*60).toFixed(1)}" y="${S-4}" class="ax" text-anchor="middle">${String(G).padStart(2,"0")}h</text>`).join("")}
      <text x="${C}" y="${S-4}" class="ax">${o[0].t}</text></svg><small class="snote">${__t(56)} (${K}%)</small>`}function f_(){Hl();let o=te(),c=re.filter(P=>P.real&&E()&&o.live),f=c.filter(P=>H.delays.has(P.v.tid)),p=f.length,x=c.length-p,S=`<div class="tc sts" style="--c:#1d2330"><button class="x" data-cx>\xD7</button><h3 class="ilt sm">${__t(57)}</h3>`;if(p){let P=f.filter(it=>it.dl<3).length,L=f.filter(it=>it.dl>=5).length,U=f.filter(it=>it.stop==="via").length,z=Math.round(P/p*100);S+=`${__t(58)}${p}${__t(59)}${x?` \xB7 ${x}${__t(64)}`:""}</small><div class="kpis">
        <div class="kpi ${Ms(z)}"><b>${z}${__t(60)}${Ms(100-L/p*100*2)}" title="${Math.round(L/p*100)}${__t(61)}${L}${__t(62)}${U===0?"g":U<=2?"w":"b"}"><b>${U}${__t(63)}`;let v=new Map;f.forEach(it=>{let W=it.fam,Ft=v.get(W)||{n:0,ok:0,sum:0};Ft.n++,Ft.ok+=it.dl<3,Ft.sum+=Math.max(0,it.dl),v.set(W,Ft)});let _=[...v].filter(([it])=>J[it]).sort((it,W)=>it[1].ok/it[1].n-W[1].ok/W[1].n||W[1].sum/W[1].n-it[1].sum/it[1].n),A=_.filter(([,it])=>it.ok<it.n),O=_.filter(([,it])=>it.ok===it.n);S+=`${__t(65)}`+(A.length?"":__t(66))+no(A.map(([it,W])=>({lab:En(it),w:W.ok/W.n,c:ws[Ms(W.ok/W.n*100)],val:`${Math.round(W.ok/W.n*100)}% <small>${Es(W.sum/W.n)}</small>`,tip:`${it}: ${W.ok}${__t(67)}${W.n}${__t(68)}${Es(W.sum/W.n)}`})))+(O.length?`${__t(69)}${O.map(([it])=>En(it)).join(" ")}</p>`:"");let Y=new Map;f.forEach(it=>{if(!it.tr||it.v.next==null||it.v.next<0||it.v.pre)return;let W=it.tr.pat.stops[it.v.next],Ft=Y.get(W)||{n:0,sum:0};Ft.n++,Ft.sum+=Math.max(0,it.dl),Y.set(W,Ft)});let K=[...Y].filter(([,it])=>it.sum/it.n>=1).sort((it,W)=>W[1].sum/W[1].n-it[1].sum/it[1].n).slice(0,8),G=K.length?K[0][1].sum/K[0][1].n:1;S+=`${__t(70)}`+(K.length?no(K.map(([it,W])=>({lab:`<span class="sn" data-gs="${it}">${m(T[it].n)}</span>`,w:W.sum/W.n/G,c:wp(W.sum/W.n),val:`${Es(W.sum/W.n)} <small>${W.n} ${W.n===1?"tren":__t(71)}</small>`,tip:`${T[it].n}: ${W.n}${__t(72)}${Es(W.sum/W.n)}${__t(73)}`}))):__t(74))}else S+=`${__t(75)}`;let C=we.hoy;S+=`<button type="button" class="hmore" data-cols>${mn.on?__t(76):__t(77)}</button>`;{go("");let P=[...$i.m].filter(([L,U])=>J[L]&&U[0]>=3).map(([L,U])=>[L,U[1]/U[0]]).sort((L,U)=>L[1]-U[1]);P.length&&!E()?S+=`<h4>${__t(78)}</h4><small class="snote">${__t(79)}</small>`:P.length&&(S+=`${__t(80)}`+no(P.slice(0,8).map(([L,U])=>({lab:En(L),w:U,c:ws[Ms(U*100)],val:`${Math.round(U*100)}%`,tip:`${L}: ${Math.round(U*100)}${__t(81)}`}))))}{let P=(A,O)=>{let Y=(A&&A.snaps||[]).filter(it=>it.n&&(!O||it.t<=O)),K=Y.reduce((it,W)=>it+W.n,0),G=Y.reduce((it,W)=>it+W.ok,0);return K?G/K*100:null},L=(we.hoy&&we.hoy.snaps||[]).filter(A=>A.n).map(A=>A.t).pop(),U=P(we.hoy),z=P(we.ayer,L),v=U!=null?Math.round(U):null,_=z!=null?Math.round(z):null;U!=null&&(S+=`${__t(82)}${Ms(U)}">${Math.round(U)}${__t(83)}${z!=null?`<span>${L?__t(84):__t(85)} <b class="${Ms(z)}">${_} %</b></span><span>${v>_?__t(86):v<_?__t(87):__t(88)}</span>`:""}</div>`)}if(S+=`${__t(89)}`,C&&C.snaps){S+=d_(C.snaps);let P=Object.entries(C.st||{}).map(([z,v])=>[$t.get(z),v]).filter(([z,v])=>z!=null&&v.n>=3).map(([z,v])=>[z,v.sum/v.n/60,v]).filter(z=>z[1]>=1).sort((z,v)=>v[1]-z[1]).slice(0,8);if(P.length){let z=P[0][1];S+=`${__t(90)}`+no(P.map(([v,_,A])=>({lab:`<span class="sn" data-gs="${v}">${m(T[v].n)}</span>`,w:_/z,c:wp(_),val:`${Es(_)}${__t(91)}${Math.round(A.max/60)}</small>`,tip:`${T[v].n}: ${A.n}${__t(92)}${A.d5}${__t(93)}${Math.round(A.max/60)} min`})))}let L=Object.entries(C.lines||{}).filter(([z,v])=>J[z]&&v.n>=3).sort((z,v)=>z[1].ok/z[1].n-v[1].ok/v[1].n);L.length&&(S+=`${__t(94)}`+no(L.map(([z,v])=>({lab:En(z),w:v.ok/v.n,c:ws[Ms(v.ok/v.n*100)],val:`${Math.round(v.ok/v.n*100)}% <small>${Es(v.sum/v.n/60)}</small>`,tip:`${z}${__t(95)}${Math.round(v.ok/v.n*100)}${__t(96)}${Math.round(v.max/60)} min`}))));let U=C.upd?(Date.now()-Date.parse(C.upd))/6e4:0;S+=`<small class="snote">${U>40?`${__t(98)}${xs(U<90?Math.round(U)+" min":U<2160?Math.round(U/60)+" h":Math.round(U/1440)+(window.__L==="en"?" days":window.__L==="ca"?" dies":" d\xEDas"))}${__t(99)}`:""}${__t(97)}${m((C.upd||"").slice(11,16))} \xB7 ${(C.note||"").includes("Solo cuentan")?__t(100):__t(101)}</small>`}else S+=`<p class="snote">${we.at?__t(102):__t(103)}</p>`;return S+"</div>"}function p_(o){let c=te(),f=re.filter(_=>(_.fam||_.tr&&_.tr.fam)===o),p=f.filter(_=>_.real),x=f.length,S=f.filter(_=>_.dl>=5).length,C=f.filter(_=>_.dl<3).length,P=f.filter(_=>_.stop==="via"||_.broke).length,L=H.alerts.filter(_=>_.fams.has(o)),U=_=>{let A=_.tr;if(!A)return"";let O=_.v;if(_.real&&O){let K=O.next>=0?T[A.pat.stops[O.next]].n:"";return O.atStop>=0?`${__t(104)}${T[A.pat.stops[O.atStop]].n}`:K?`${__t(105)}${K}`:""}let Y=_.p;return Y&&Y.next!=null&&Y.next>=0?`${__t(105)}${T[A.pat.stops[Y.next]].n}`:""},z=f.slice().sort((_,A)=>A.dl-_.dl).slice(0,40).map(_=>{let A=_.tr;return`<li class="go${ao({num:A?A.num:_.v.num,tid:A?A.tid:_.v.tid})?" sel":""}" data-gt="${m(A?A.num:_.v.num)}|${m(_.real?_.v.tid:A?A.tid:"")}"><b>${m(A?A.num:_.v.num)}</b><span>${A?Ii(T[A.pat.stops[A.pat.stops.length-1]].n,o):""} <small>${m(U(_))}</small></span>${_.dl>=1?`<em class="dl ${ki(_.dl)}">+${Math.round(_.dl)}</em>`:__t(106)}</li>`}).join(""),v=go(o);return`<div class="tc sts" style="--c:${J[o]||"#1d2330"}"><button class="x" data-cx>\xD7</button><h3 class="ilt sm">${En(o)} ${__t(107)}</h3><div class="seg2 iseg lseg">${[["now",__t(108)],["30",__t(109)],["trips",__t(110)]].map(([_,A])=>`<button type="button" data-lseg="${_}" class="${ql.v===_?"on":""}">${A}</button>`).join("")}</div>${ql.v!=="now"?g_(o,ql.v):`<small>${c.live?`${__t(114)}${x}${__t(115)}${p.length<x?` (${p.length}${__t(116)}`:""}`:`${__t(117)}${rt(c.min)}`}</small>
      <div class="kpis"><div class="kpi ${x?Ms(C/x*100):""}"><b>${x?Math.round(C/x*100)+"%":"\u2014"}${__t(111)}${S?S/Math.max(1,x)>.2?"b":"w":"g"}"><b>${S}${__t(112)}${P?"b":"g"}"><b>${P}${__t(113)}${L.length?__(L):__t(118)}${v<.7?`${__t(119)}${Math.round(v*100)}${__t(120)}`:""}
      <small style="margin-top:6px">${__t(121)}</small><ol class="${Xl.v?"":"lshort"}">${z||__t(122)}</ol>${f.length>6?`<button type="button" class="hmore" data-lmore>${Xl.v?__t(123):`\u25BE ${__t(124)} ${Math.min(40,f.length)} ${__t(71)}`}</button>`:""}
      <div class="rtb"><button type="button" data-share>\u{1F4E4} Compartir estado</button></div>`}</div>`}let Xl={v:!1},ql={v:"now"};function m_(o){let c=gm(o,30);if(!c.length)return`<h4>${__t(110)}</h4><p class="snote">${__t(125)}</p>`;let f=c.filter(P=>P.dl!=null),p=f.filter(P=>P.dl>=5).length,x=f.reduce((P,L)=>P+L.dl,0),S=P=>{let L=$t.get(P);return L!=null?T[L].n.replace(/^Barcelona[ -]+(?=\S)/,""):""},C=c.slice().sort((P,L)=>L.t0-P.t0).slice(0,5).map(P=>`<li><b>${+P.d.slice(6,8)}/${+P.d.slice(4,6)}</b><span>${P.ad!=null?rt(P.ad)+" \xB7 ":""}${m(S(P.a))}${P.a?" \u2192 ":""}${m(S(P.b))}<small>${P.dl==null?__t(126):P.dl>=1?`${__t(127)} <b>+${P.dl} min</b>`:__t(128)} \xB7 tren ${m(P.num)}</small></span><button type="button" class="tripx" data-tripx="${m(P.k)}" title="${__t(129)}" aria-label="${__t(129)}">\u2715</button></li>`).join("");return`<h4>${__t(110)} \xB7 ${c.length}</h4>
      <div class="kpis"><div class="kpi nx"><b>${c.length}</b><span>${c.length===1?__t(130):__t(131)}<br>${__t(132)}</span></div><div class="kpi ${f.length?p/f.length>=.5?"b":p/f.length>=.25?"w":"g":"nx"}"><b>${p}</b><span>${__t(133)}<br>(5 min ${__t(134)})</span></div><div class="kpi ${x>=60?"b":x>=20?"w":"nx"}"><b>${x>=60?`${Math.floor(x/60)} h ${String(Math.round(x%60)).padStart(2,"0")}`:`${Math.round(x)} min`}</b><span>${__t(135)}<br>${__t(136)}</span></div></div>
      <ol class="l30f">${C}</ol>`}function g_(o,c){let f=Mp(o),p=mi.filter(v=>v.fam===o);if(!f&&c!=="trips")return`<h4>${__t(137)}</h4><p class="snote">${we.at?__t(138):__t(103)}</p>`;let x=f.since&&f.since>new Date(Date.now()-29*864e5).toISOString().slice(0,10)?`${__t(139)} ${h_(f.since)}`:`${__t(132)}`,S=Math.min(30,f.days),C=`${__t(140)} ${S} ${__t(141)}`,P=f.of>1?(f.pos<=f.of/2?`${En(o)} ${__t(142)} <b>${f.pos}.\xAA ${__t(143)}</b> ${__t(144)} ${f.of}`:`${En(o)} ${__t(142)} <b>${f.of-f.pos+1}.\xAA ${__t(145)}</b> ${__t(144)} ${f.of}`)+" \xB7 ":"",L=p.map(v=>{let _=Sp(v),A=$t.get(v.sid),O=v.dest&&$t.get(v.dest);return`<li><b>${m(v.t)}</b><span>${m(A!=null?T[A].n:"")}${O!=null?" \u2192 "+m(T[O].n):""}<small>${_.n?`${__t(146)} <b>${_.late} ${__t(144)} ${_.n} ${__t(141)}</b>${_.nc?` \xB7 <b>${_.nc} ${_.nc===1?__t(147):__t(148)}</b>`:""} \xB7 ${__t(149)} \u2248 <b>${Gh(_.sum)}</b>`:__t(150)}</small></span></li>`}).join(""),U=`<div class="rtb"><button type="button" data-share30>\u{1F4E4} ${__t(151)}</button></div>`,z=`<small class="snote">${__t(152)}</small>`;return c==="trips"?`${m_(o)}
      <h4>${__t(153)}</h4>${p.length?`<ol class="l30f">${L}</ol>`:`<p class="snote">${__t(154)}</p>`}${f?U:""}${z}`:`<h4>${C}</h4>
      <div class="kpis"><div class="kpi ${Ms(f.pct)}"><b>${Math.round(f.pct)}%</b><span>${__t(128)}<br>(\u22123 min)</span></div><div class="kpi ${f.avg>=4?"b":f.avg>=2.5?"w":f.avg>=1.5?"y":"g"}"><b>${Es(f.avg).replace(" min","")}</b><span>${__t(155)}<br>${__t(156)}</span></div>${f.since?`<div class="kpi ${f.nc?f.nc>=10?"b":"w":"g"}"><b>${f.nc}</b><span>${f.nc===1?__t(157):__t(158)}<br>${x}</span></div>`:`<div class="kpi nx"><b>\u2014</b><span>${__t(159)}<br>${__t(160)}</span></div>`}</div>
      <p class="snote">${P}${__t(161)} +${f.max} min \xB7 ${f.days} ${__t(162)}</p>${U}${z}`}let __=o=>`<div class="al">${o.slice(0,3).map(c=>`<p>\u26A0\uFE0F ${ho(c)} ${m(c.txt)} <small>${fo(c)}</small></p>`).join("")}</div>`,mn={on:!1,mesh:null};function Ep(){let o=we.hoy,c=[];if(o&&o.st)for(let[f,p]of Object.entries(o.st)){let x=$t.get(f);x!=null&&p.n>=2&&c.push([x,p.sum/p.n/60,p.n])}if(!c.length){let f=new Map;re.forEach(p=>{if(!p.real||!p.tr||p.v.next==null||p.v.next<0||p.v.pre||!H.delays.has(p.v.tid))return;let x=p.tr.pat.stops[p.v.next],S=f.get(x)||[0,0];S[0]+=Math.max(0,p.dl),S[1]++,f.set(x,S)}),f.forEach((p,x)=>c.push([x,p[0]/p[1],p[1]]))}return c}let Tp=()=>Math.min(1,Math.max(.22,r.dist/110));function x_(){if(!mn.mesh||!mn.d)return;let o=Tp();if(Math.abs(o-mn.r)<.04)return;mn.r=o;let c=new qe;mn.d.forEach(([f,p],x)=>{c.makeScale(o,o,.3+Math.min(p,40)*.3),c.setPosition(T[f].w[0],T[f].w[1],V),mn.mesh.setMatrixAt(x,c)}),mn.mesh.instanceMatrix.needsUpdate=!0,a()}function v_(){if(mn.mesh&&(e.remove(mn.mesh),mn.mesh.geometry.dispose(),mn.mesh.material.dispose(),mn.mesh=null),!mn.on){a();return}let o=Ep();if(!o.length){ke(__t(163)),mn.on=!1;return}let c=new Qo(.32,.32,1,16);c.rotateX(Math.PI/2),c.translate(0,0,.5);let f=new Rr({fog:!1}),p=new Jo(c,f,o.length),x=new qe,S=new ye;mn.d=o,mn.r=Tp(),o.forEach(([C,P],L)=>{let U=.3+Math.min(P,40)*.3;x.makeScale(mn.r,mn.r,U),x.setPosition(T[C].w[0],T[C].w[1],V),p.setMatrixAt(L,x),S.set(P>10?"#dc2626":P>5?"#ea7a0c":P>=1?"#eab308":"#16a34a"),p.setColorAt(L,S)}),p.renderOrder=25,p.frustumCulled=!1,e.add(p),mn.mesh=p,s.tilt<.5&&(s.tilt=.85),a()}let Xr=document.createElement("button");Xr.type="button",Xr.id="sbtn",Xr.title=__t(164),Xr.innerHTML=__t(165),Xr.onclick=()=>{Ct=!Ct,Ct&&(Ot=_e=!1,we.at=0),d._h="",Ie(),a()},document.body.appendChild(Xr);function y_(){r.dist<45!=Nn<45&&(Nn=r.dist,Hn()),x_(),S_(),Bi()}let Ts=[],wn=new j;function S_(){let o=0;if(mn.on){let f=Ep().sort((x,S)=>S[1]-x[1]),p=[];for(let[x,S]of f){if(o>=30)break;if(wn.set(T[x].w[0],T[x].w[1],V).project(n),wn.z>1||Math.abs(wn.x)>1||Math.abs(wn.y)>1)continue;let C=(wn.x*.5+.5)*innerWidth,P=(-wn.y*.5+.5)*innerHeight;if(p.some(([U,z])=>Math.abs(U-C)<90&&Math.abs(z-P)<18))continue;p.push([C,P]);let L=Ts[o]||(Ts[o]=Object.assign(document.createElement("div"),{className:"slab"}));L.isConnected||document.body.appendChild(L),L.textContent=T[x].n+" +"+Math.round(S)+"\u2032",L.dataset.i=x,L.style.display="block",L.style.transform=`translate(${Math.round(C+8)}px,${Math.round(P-8)}px)`,o++}for(;o<Ts.length;o++)Ts[o].style.display="none";return}if(r.dist<30){let f=[];for(let p=0;p<ie;p++)Vn[p]<4||(wn.set(T[p].w[0],T[p].w[1],V).project(n),!(wn.z>1||Math.abs(wn.x)>1.05||Math.abs(wn.y)>1.05)&&f.push([p,(wn.x*.5+.5)*innerWidth,(-wn.y*.5+.5)*innerHeight]));if(f.length<=70)for(let[p,x,S]of f){let C=Ts[o]||(Ts[o]=Object.assign(document.createElement("div"),{className:"slab"}));C.isConnected||document.body.appendChild(C),C.textContent=T[p].n,C.dataset.i=p,C.style.display="block",C.style.transform=`translate(${Math.round(x+8)}px,${Math.round(S-7)}px)`,o++}}for(;o<Ts.length;o++)Ts[o].style.display="none"}function Yl(o){return wn.set(o[0],o[1],V).project(n),[(wn.x*.5+.5)*innerWidth,(-wn.y*.5+.5)*innerHeight,wn.z]}function Ap(o,c,f,p){let x=null,S=f*f;for(let C of re){let[P,L,U]=Yl(C.p.w);if(U>1)continue;let z=(P-o)**2+(L-c)**2;z<S&&(S=z,x={a:C})}if(x)return x;S=p*p;for(let C=0;C<ie;C++){if(!Vn[C])continue;let[P,L,U]=Yl(T[C].w);if(U>1)continue;let z=(P-o)**2+(L-c)**2;z<S&&(S=z,x={s:C})}return x}let mr=!1;window.__rodHide=()=>{mr=!0},document.addEventListener("click",o=>{mr&&!o.target.closest("#mcs, canvas")&&(mr=!1)},!0),window.__rodTap=(o,c)=>{let f=null,p=1e9;for(let S of Ts){if(S.style.display==="none")continue;let C=S.getBoundingClientRect();if(o>=C.left-4&&o<=C.right+4&&c>=C.top-4&&c<=C.bottom+4){let P=Math.abs(c-(C.top+C.bottom)/2)*4+(o-C.left);P<p&&(p=P,f=S)}}if(f)return window.__rodPickStation(+f.dataset.i),!0;let x=Ap(o,c,24,18);return x&&(x.a||x.s!=null)&&(mr=!1),x&&(x.a||x.s!=null)&&(se.st=-1),x&&x.a?(Ot=!1,_e=!1,Ct=!1,Mt=x.a.tr||{vtid:x.a.v.tid},me=-1,Nt=null,Hn(),Ie(),Me=0,a(),!0):x&&x.s!=null?(Ot=!1,_e=!1,Ct=!1,me=x.s,Mt=null,Nt=null,Hn(),Ie(),a(),!0):!1},window.__rodHover=(o,c)=>{let f=Ap(o,c,14,10);if(f&&f.a){let p=f.a,x=p.tr?T[p.tr.pat.stops[p.tr.pat.stops.length-1]].n:"";return`<b><span style="color:${p.c}">\u25A0</span> ${m(p.fam||p.tr&&p.tr.fam||"?")}${__t(166)}${m(p.tr?p.tr.num:p.v.num)}</b><small>${x?__t(105)+m(x):""}${p.real?(p.dl>=1?` \xB7 <b style="color:#c2410c">+${Math.round(p.dl)} min</b>`:__t(167))+__t(168):__t(169)}</small>`}return f&&f.s!=null?`<b>${m(T[f.s].n)}</b><small>${[...T[f.s].fams].sort(B).join(" \xB7 ")}</small>`:null},window.__rodPickStation=o=>{se.st=-1,mr=!1,Ot=_e=Ct=!1,Mt=null,Nt=null,me=o,Hn(),d._h="",Ie(),a()};{let o=y("#rc"),c=()=>{let f=o.getBoundingClientRect().top;document.documentElement.style.setProperty("--mcsmax",Math.max(160,f-64-10)+"px")};try{new ResizeObserver(c).observe(o)}catch{}addEventListener("resize",c),setTimeout(c,300)}if("serviceWorker"in navigator&&location.protocol==="https:"){let o=!1,c=!!navigator.serviceWorker.controller;navigator.serviceWorker.addEventListener("controllerchange",()=>{if(!c||o)return;let f=((y("#ver")||{}).textContent||"").match(/\d+\.\d+/);fetch("./sw.js",{cache:"no-store"}).then(p=>p.text()).then(p=>{let x=(p.match(/VERSION = 'cs-(\d+\.\d+)'/)||[])[1];x&&f&&x!==f[0]&&!o&&(o=!0,location.reload())}).catch(()=>{})}),navigator.serviceWorker.register("./sw.js").then(f=>{f.update().catch(()=>{}),document.addEventListener("visibilitychange",()=>{document.hidden||f.update().catch(()=>{})})}).catch(()=>{})}setTimeout(()=>{try{Hl()}catch{}},2500),setInterval(()=>{try{we.at=0,Hl()}catch{}},15*6e4);let pi={mode:(()=>{try{return localStorage.getItem("rod_theme")||"auto"}catch{return"auto"}})()},io=matchMedia("(prefers-color-scheme: dark)");function Jl(){let o=pi.mode==="dark"||pi.mode==="auto"&&io.matches;document.documentElement.classList.toggle("dark",o);for(let f=0;f<ie;f++)Je.set(o?[.06,.08,.11]:[1,1,1],f*3);oe.attributes.fill.needsUpdate=!0,Bl.uniforms.border.value.set(o?"#e7ebf3":"#1d2330"),window.__mapTheme&&window.__mapTheme(o),gr.textContent=pi.mode==="auto"?o?"\u{1F319}":"\u2600\uFE0F":pi.mode==="dark"?"\u{1F319}":"\u2600\uFE0F",gr.title=__t(170)+{auto:__t(171),dark:__t(172),light:"desactivado"}[pi.mode];let c=document.querySelector("meta[name=theme-color]");c&&(c.content=o?"#0d1119":"#eef1f5"),a()}let gr=document.createElement("button");gr.type="button",gr.id="tbtn",gr.onclick=()=>{pi.mode=pi.mode==="auto"?io.matches?"light":"dark":pi.mode==="dark"?"light":"dark",pi.mode==="dark"===io.matches&&(pi.mode="auto");try{localStorage.setItem("rod_theme",pi.mode)}catch{}Jl(),ke(gr.title)},document.body.appendChild(gr);{let o=document.createElement("a");o.id="wabtn",o.href="https://www.whatsapp.com/channel/0029Vav4hGTId7nPenKMuo2C",o.target="_blank",o.rel="noopener",o.title=__t(173),o.innerHTML=__t(174),document.body.appendChild(o)}io.addEventListener&&io.addEventListener("change",Jl),Jl(),window.__rodTick=ee,window.__rodFrame=y_,window.__rodResize=()=>{Zt.resolution.set(innerWidth,innerHeight),Gt.resolution.set(innerWidth,innerHeight)},window.__rodResize();let Ri={st:-1,f:new Set},Cp=o=>{let c=[...T[o].fams].sort(B);return`<div class="sfc">${c.length>1?`<button type="button" data-sf="" class="${Ri.f.size?"":"on"}${__t(175)}`:""}${c.map(f=>`<button type="button" data-sf="${m(f)}" class="ln ${Ri.f.size&&!Ri.f.has(f)?"off":""}${dt.has(f)?"":" hid"}" style="--c:${J[f]}">${m(f)}</button>`).join("")}</div>${c.some(f=>!dt.has(f))?__t(176):""}`},b_=o=>{let c=(o||"#6b7385").replace("#",""),f=parseInt(c.slice(0,2),16),p=parseInt(c.slice(2,4),16),x=parseInt(c.slice(4,6),16);return(.299*f+.587*p+.114*x)/255>.62?"#1d2330":"#fff"},Ii=(o,c)=>{let f=J[c]||"#6b7385";return`<span class="dst" style="background:${f};color:${b_(f)}" title="${m(c||"")}">${m(o)}</span>`},Zl=o=>{let c=T[o]&&T[o].id;return Xe.st.includes(c)?"\u{1F3E0} ":$e.st.includes(c)?"\u{1F4BC} ":""},ki=o=>o>10?"d-hi":o>5?"d-md":"d-lo",M_=/aver[ií]|incid[eè]ncia t[eè]cnica|incidencia t[eé]cnica|problema t[eè]cnic|t[eè]cnic[oa] del propi/i,so={ref:null,m:new Map};function Wh(o){if(so.ref!==H.alerts){so.ref=H.alerts,so.m=new Map;for(let c of H.alerts){if(c.src!=="Rodalies")continue;let f=c.txt.match(/(?:a causa d[e']|per causa d[e']|debido a|degut a|due to|because of|caused by)\s+([^.]{4,140})/i);for(let p of(c.es||c.txt).matchAll(/\b[Tt]ren\s+(\d{4,6})\b/g))so.m.set(p[1],{why:f?f[1].trim().replace(/\s+/g," "):"",txt:c.txt,when:c.when,cx:/no circula|no circular[àa]|suprimi|anul[·.]?la|cancel[·.]?la|anulad|cancelad/i.test(c.es||c.txt)})}}return so.m.get(String(o))||null}let ro={ref:null,m:new Map};function Rp(o){let c=String(o.tr?o.tr.num:o.v&&o.v.num||"");if(!c)return null;if(ro.ref!==H.alerts){ro.ref=H.alerts,ro.m=new Map;for(let p of H.alerts)if(p.src==="Rodalies"&&M_.test(p.es||p.txt))for(let x of(p.es||p.txt).matchAll(/\b(\d{4,6})\b/g))ro.m.set(x[1],p)}let f=ro.m.get(c);return f?{why:"aviso",txt:f.txt}:o.real&&o.stop==="via"&&o.v.still>=300?{why:"via",min:Math.round(o.v.still/60)}:null}let ao=o=>{try{let c=Mt;return c?c.num!=null&&String(c.num)===String(o.num)||o.tid&&(c.tid===o.tid||c.vtid===o.tid):!1}catch{return!1}},Ip=(o,c)=>{let f=R(o,c.min-1,c.min+240).sort((p,x)=>p.est-x.est).slice(0,6);return f.length?`${__t(177)}${f.map(p=>`<li><b>${rt(p.est)}</b>${En(p.fam)}<span>${Ii(p.dest,p.fam)}</span><i class="via">bus</i></li>`).join("")}</ol>`:""},mi=(()=>{try{return JSON.parse(localStorage.getItem("rod_fav")||"[]")}catch{return[]}})(),Pp=()=>{try{localStorage.setItem("rod_fav",JSON.stringify(mi))}catch{}},Lp=(o,c)=>{if(o.num===String(c.num))return!0;let f=t.days.indexOf(te().ymd),p=f>=0?qr(o,f):null;return!!p&&String(p.num)===String(c.num)},Dp=o=>{let c=o.pat.stops.slice(0,-1),f=[...Xe.st,...$e.st];return c.find(p=>f.includes(T[p].id))??c.find(p=>Rt.st.includes(T[p].id))??o.pat.stops[0]},Np=o=>!!o&&mi.some(c=>Lp(c,o)),xe=(()=>{try{let o=JSON.parse(localStorage.getItem("rod_alarm")||"null");return o&&Date.now()-o.at<4*36e5?o:null}catch{return null}})(),As=()=>{try{localStorage.setItem("rod_alarm",JSON.stringify(xe))}catch{}},jl=(o,c)=>!!(xe&&o&&xe.num===String(o.num)&&xe.sid===T[o.pat.stops[c]].id);function Kl(o,c){try{window.__vib?window.__vib():navigator.vibrate&&navigator.vibrate([400,150,400,150,600])}catch{}ke(o+" \xB7 "+c),document.hidden&&"Notification"in window&&Notification.permission==="granted"&&(navigator.serviceWorker&&navigator.serviceWorker.getRegistration?navigator.serviceWorker.getRegistration():Promise.resolve(null)).then(f=>f?f.showNotification(o,{body:c,tag:"alarm",requireInteraction:!0,vibrate:[400,150,400,150,600],icon:"icons/icon-192.png"}):new Notification(o,{body:c})).catch(()=>{})}function w_(){if(!xe||xe.done)return;let o=te();if(!o.live)return;let c=t.days.indexOf(o.ymd),f=(st[c]||[]).find(L=>String(L.num)===xe.num)||(st[c-1]||[]).find(L=>String(L.num)===xe.num);if(!f)return;let p=f.pat.stops.findIndex(L=>T[L].id===xe.sid);if(p<0)return;let x=gt(f),S=typeof x=="number"?Math.max(0,x/60):0,C=f.day===c-1?1440:0,P=f.t0+f.pat.t[2*p]+S-C;if(P-o.min<-3){xe.done=!0,As();return}if(window.__schedAt&&P-2-o.min>.1&&(xe.sch==null||Math.abs(xe.sch-P)>=.5)&&(xe.sch=P,xe.nat=Date.now()+(P-2-o.min)*6e4,As(),window.__schedAt(7701,`${__t(178)}${T[f.pat.stops[p]].n}`,__t(179)+` (${rt(P)})`+(L=>L?` \xB7 ${__t(180)} ${L.fam} ${__t(181)} ${rt(L.est)}${L.plat?__t(182)+L.plat:""}`:"")(nc.get(xe.sid)),Date.now()+(P-2-o.min)*6e4)),P-o.min<=2){xe.done=!0,As();let L=nc.get(xe.sid),U=L?` \xB7 ${L.lost?__t(183)+" \xB7 "+__t(184):__t(180)} ${L.fam} ${__t(181)} ${rt(L.est)}${L.plat?__t(182)+L.plat:""}`:"",z=Math.round(P-o.min),_=(z>=1?`${__t(186)} ${z}${__t(185)}${rt(P)}) \xB7 ${__t(187)}`:`${__t(188)} (${rt(P)}) \xB7 ${__t(187)}`)+U;window.__schedAt&&xe.nat&&Date.now()>=xe.nat-2e4?document.hidden||Kl(`${__t(178)}${T[f.pat.stops[p]].n}`,_):(window.__schedOff&&window.__schedOff(7701),Kl(`${__t(178)}${T[f.pat.stops[p]].n}`,_))}}function qr(o,c){let f=+o.t.slice(0,2)*60+ +o.t.slice(3,5),p=st[c]||[],x=(P,L)=>P.t0+P.pat.t[2*L+1],S=null,C=11;for(let P of p){let L=P.pat.stops.findIndex(z=>T[z].id===o.sid);if(L<0||L===P.pat.stops.length-1)continue;let U=Math.abs(x(P,L)-f)+(String(P.num)===o.num?-5:0)+(P.fam===o.fam?0:20)+(o.dest&&T[P.pat.stops[P.pat.stops.length-1]].id!==o.dest?3:0);U<C&&(C=U,S=P)}return S}let Ql=new Set;function E_(){if(!mi.length)return;let o=te();if(!o.live)return;let c=t.days.indexOf(o.ymd);for(let f of mi){let p=qr(f,c);if(!p)continue;let x=p.pat.stops.findIndex(z=>T[z].id===f.sid);if(x<0)continue;let S=p.t0+p.pat.t[2*x+1],C=gt(p),P=typeof C=="number"?C/60:0,L=S-o.min;if(L<-2||L>60)continue;let U=o.ymd+f.num+(C==="X"?"X":P>=10?10:P>=5?5:0);Ql.has(U)||(C==="X"||P>=5?(Ql.add(U),Kl(`${__t(189)}${rt(S)} ${C==="X"?__t(190):`${__t(191)}${Math.round(P)} min`}`,`${p.fam} ${p.num}${__t(192)}${T[p.pat.stops[x]].n}${C==="X"?"":`${__t(193)}${rt(S+P)}`}`)):L<=20&&!Ql.has(o.ymd+f.num+"ok")&&H.vp.has(p.tid)&&(Ql.add(o.ymd+f.num+"ok"),ke(`${__t(189)}${rt(S)}${__t(194)}`)))}}setInterval(()=>{try{w_(),E_()}catch{}},15e3);let En=o=>`<span class="ln" style="--c:${J[o]}">${m(o)}</span>`;{let o=f=>{let p=/^#?([0-9a-f]{6})$/i.exec(f||"");return p?[0,2,4].map(x=>{let S=parseInt(p[1].slice(x,x+2),16)/255;return S<=.03928?S/12.92:Math.pow((S+.055)/1.055,2.4)}).reduce((x,S,C)=>x+S*[.2126,.7152,.0722][C],0):0},c=[...new Set(Object.values(J))].filter(f=>o(f)>.3).map(f=>`.ln[style*="--c:${f}"],[data-f][style*="--c:${f}"].on,[data-f][style*="--c:${f}"]:not(.off){color:#14203a!important}`).join("");if(c){let f=document.createElement("style");f.textContent=c,document.head.appendChild(f)}}function Up(o,c){return c?o==="X"?__t(196):o>=60?`<span class="st late ${ki(o/60)}${__t(197)}${Math.round(o/60)} min</span>`:__t(198):`<span class="st sch">${__t(195)}</span>`}function Xh(){if(!d.classList.contains("peek")||window.__mapHidden||!d.getClientRects().length)return;let o=d.querySelector(".tc");if(!o)return;let c=o.querySelector(".st")||o.querySelector("p"),f=d.getBoundingClientRect().top-d.scrollTop,p=c?c.getBoundingClientRect().bottom-f+3:150;if(c){let x=c.nextElementSibling||c.parentElement!==o&&c.parentElement.nextElementSibling;x&&(p=Math.min(p,x.getBoundingClientRect().top-f-1))}d.style.setProperty("--peekh",Math.round(Math.min(280,Math.max(110,p)))+"px")}function Cs(){try{let o=d,c=document.getElementById("rcgrab"),f=document.getElementById("z");if(!o||!ze.on||ze.cur!=="map"||o.classList.contains("peek")||!o.getClientRects().length||!c||!c.getClientRects().length){o&&o._fit&&(["max-height","bottom","height","right","width"].forEach(v=>o.style.removeProperty(v)),o._fit=0);return}let x=o.getBoundingClientRect().top,S=c.getBoundingClientRect().top-8,C=Math.max(140,Math.floor(S-x)),P=f&&f.getClientRects().length?f.getBoundingClientRect():null,L=P?Math.max(10,Math.ceil(innerWidth-P.left+8)):10;o._fit=C+"|"+L;let U=o.style,z={"max-height":C+"px",height:"auto",bottom:"auto",width:"auto",right:L+"px"};for(let v in z)(U.getPropertyValue(v)!==z[v]||U.getPropertyPriority(v)!=="important")&&U.setProperty(v,z[v],"important")}catch{}}setInterval(()=>{ze.on&&ze.cur==="map"&&Cs()},700);try{new MutationObserver(()=>Cs()).observe(d,{attributes:!0,attributeFilter:["style","class"]})}catch{}window.__fitMcs=Cs;try{localStorage.removeItem("rod_dbg")}catch{}if(/[?&]dbg=1/.test(location.search)){let o=document.createElement("pre");o.id="dbgbox",o.style.cssText="position:fixed;left:4px;top:4px;z-index:999;background:rgba(0,0,0,.85);color:#0f0;font:11px/1.25 monospace;padding:6px;margin:0;pointer-events:none;max-width:70vw;white-space:pre-wrap",document.body.appendChild(o),setInterval(()=>{try{let c=p=>{let x=document.querySelector(p);if(!x||!x.getClientRects().length)return"\u2014";let S=x.getBoundingClientRect();return[S.left,S.top,S.right,S.bottom].map(Math.round).join(",")},f=getComputedStyle(d);o.textContent=`v ${document.title.slice(0,0)}${(document.getElementById("ver")||{}).textContent||""}
inner ${innerWidth}x${innerHeight} vv ${window.visualViewport?Math.round(visualViewport.height):"-"}
tab ${ze.on?ze.cur:"off"} peek ${d.classList.contains("peek")}
mcs ${c("#mcs")}
tc ${c("#mcs .tc")}
rc ${c("#rcgrab")} z ${c("#z")}
maxH ${f.maxHeight} ov ${f.overflowY}
fit ${d._fit||0}
inl ${d.style.cssText.slice(0,160)}`}catch(c){o.textContent="err "+c.message}},1e3)}addEventListener("resize",()=>setTimeout(Cs,80));try{new ResizeObserver(()=>Cs()).observe(document.getElementById("rcgrab")||document.body)}catch{}window.visualViewport&&visualViewport.addEventListener("resize",()=>setTimeout(Cs,80));function Ie(){try{T_()}finally{requestAnimationFrame(Cs),window.__rodTabSync&&window.__rodTabSync();try{Xh()}catch{}}}function T_(){if(!Mt&&me<0&&!_e&&!Ot&&!Ct&&!Jt){mr=!1,d.innerHTML="",d._h="",d.style.display="none",d.classList.remove("peek"),rd();return}let o=te(),c="",f=E()&&o.live,p=(v,_)=>H.alerts.filter(A=>[...A.fams].some(O=>v.has(O))||_!=null&&A.stops.has(_)),x=v=>v.length?`<div class="al">${v.slice(0,4).map(_=>`<p>\u26A0\uFE0F ${ho(_)} ${[..._.fams].sort(B).slice(0,6).map(En).join(" ")} ${m(_.txt)} <small>${fo(_)}</small></p>`).join("")}${v.length>4?`<small>y ${v.length-4}${__t(199)}`:""}</div>`:"",S=Mt&&f?re.find(v=>v.real&&(Mt.vtid?v.v.tid===Mt.vtid:v.tr===Mt)):null;if(Jt&&!Ct&&!Ot&&!_e&&!Mt&&me<0)c=p_(Jt);else if(Ct)c=f_();else if(Ot)c=`${__t(200)}${m(y("#ver").firstChild.textContent)}</small><ul class="chg">${y("#chg").innerHTML||__t(202)}${__t(201)}`;else if(_e){let v=H.alerts.filter(_=>[..._.fams].some(A=>dt.has(A))||!_.fams.size);c=`<div class="tc alrl" style="--c:#c2410c"><button class="x" data-cx>\xD7</button><h3 class="ilt sm">${__t(204)}</h3><small class="ifoot0">${v.length} ${__t(205)}</small>${v.length?`<div class="igl">${v.map(_=>`<div class="igc"><p class="igh">\u26A0\uFE0F ${ho(_)} ${_.fams.size>6?`<span class="igall">${__t(206)}</span>`:[..._.fams].sort(B).map(En).join(" ")} <small>${fo(_)}</small></p><p class="igt">${m(_.txt)}</p></div>`).join("")}</div>`:`<p>${__t(207)}</p>`}${__t(203)}${H.alertsTs&&Date.now()/1e3-H.alertsTs<6*3600?__t(208):`${__t(209)}${H.alertsTs?new Date(H.alertsTs*1e3).toLocaleDateString("es-ES",{day:"numeric",month:"short"}):"\u2014"}`}</small></div>`}else if(S){let v=S.v,_=S.tr,A=Ae=>m(T[_.pat.stops[Ae]].n),O=_?_.pat.stops.length:0,Y=$t.get(v.sid),K=Y!=null?m(T[Y].n):m(v.sid),G=_&&v.atStop>=0?A(v.atStop):"",it=_&&v.next>=0?A(v.next):K,W=_&&v.next>0?A(v.next-1):"",Ft=S.broke||Rp(S),Te=Ft?`<b class="stopv">\u26A0\uFE0F ${Ft.why==="aviso"?__t(210):`${__t(211)}${Ft.min} min`}</b>${_&&W?`${__t(212)}${W}${__t(213)}${it}</b>`:""}`:S.stop==="via"&&_?`${__t(214)}${W?`${__t(216)}${W}${__t(213)}${it}</b>`:`${__t(217)}${it}</b>`}${__t(215)}${Math.max(1,Math.round(v.still/60))} min`:v.pre&&_?v.prevTr?`${__t(218)}${m(v.prevTr.num)}${__t(219)}${A(0)}</b>${v.prevDl>=1?`${__t(222)}${Math.round(v.prevDl)} min</b>`:""}${__t(220)}${rt(v.arrO)}${__t(221)}${rt(v.depEst)}</b>${v.preDl>=1?`${__t(223)}${rt(v.dep0)})`:""}`:`${__t(224)}${A(0)}${__t(225)}${rt(v.dep0+S.dl)}</b>`:G&&v.before?`Llegando a <b>${G}</b>`:(v.st==="STOPPED_AT"||S.stop==="st")&&G?`${__t(226)}${G}</b>`:G&&v.next>=0&&v.atStop!==v.next?`${__t(227)}${G}${__t(219)}${it}</b>`:W?`${__t(228)}${W}${__t(213)}${it}</b>`:`${__t(229)}${it}</b>`,Qt=_&&v.next>=0&&!v.pre?rt(Zr(_,v,v.next,_.t0+_.pat.t[2*v.next]+S.dl)):"",je=[];if(_){let Ae=S.idx>=0?S.idx:0,Se=v.pre?Math.max(S.dl,v.preDl||0):S.dl,xn=nn=>_.t0+_.pat.t[nn]+Se;for(let nn=Ae;nn<O;nn++)je.push(`<li class="${Zl(_.pat.stops[nn])?"mine":""}${jl(_,nn)?" alm":""}"><b>${rt(Zr(_,v,nn,xn(nn===0?1:2*nn)))}</b><span title="${A(nn)}">${Zl(_.pat.stops[nn])}${A(nn)}</span>${Se>=1?`<em class="dl ${ki(Se)}">${v.pre?"\u2248":""}+${Math.round(Se)}</em>`:""}${nn>0?`<button type="button" class="abtn" data-alarm="${nn}" title="${__t(230)}">${jl(_,nn)?"\u{1F514}":"\u{1F515}"}</button>`:""}</li>`)}c=`<div class="tc" style="--c:${S.c}"><button class="x" data-cx>\xD7</button><div>${En(S.fam)}${__t(231)}${m(_?_.num:v.num)}${__t(232)}${_?`<h3 class="rt"><span class="o" title="${A(0)}">${A(0)}</span><span class="ar">\u2192</span>${Ii(T[_.pat.stops[O-1]].n,_.fam)}</h3>`:""}
        <p>${Te}${Qt?`${__t(233)}${Qt}`:""}${v.plat&&v.st==="STOPPED_AT"&&G?`${__t(234)}${m(v.plat)}</b>`:""}</p><p>${v.pre&&v.prevTr?v.preDl>=1?`${__t(235)}${Math.round(v.preDl)}${__t(236)}`:__t(237):Up(H.delays.get(v.tid),H.delays.has(v.tid))}${(()=>{let Ae=_&&Gl(_.num);return Ae&&Ae.n>=2?`${__t(238)}${Ae.n}${__t(239)}${Ae.late?`${__t(240)} <b>${Ae.late} ${__t(144)} ${Ae.n} ${__t(141)}</b> ${__t(241)}`:__t(242)} \xB7 ${__t(243)} ${Ae.avg<.5?"0":"+"+Math.round(Ae.avg)} min</span>`:""})()}${(()=>{let Ae=_&&Wh(_.num);return Ae?`<span class="why" title="${m(Ae.txt)}">${Ae.why?__t(244)+m(Ae.why):__t(245)}</span>`:""})()}</p>
        <small>${v.pre?`${__t(246)}${xs(Ch(S.age))}`:v.est?__t(247):`${__t(248)}${xs(Ch(S.age))}${S.age>120?__t(249):""}`}</small>
        ${je.length?`${S.dl>=1||v.pre&&v.preDl>=1?`${__t(250)}`:""}<ol class="stops">${je.join("")}</ol>`:""}${x(p(new Set([S.fam])))}
        ${co(_?_.num:v.num,"",S.fam)}${_?`<div class="rtb two"><button type="button" data-fav>${Np(_)?__t(251):__t(252)}</button><button type="button" data-follow>${ec(_)?__t(253):__t(254)}</button></div>`:""}</div>`}else if(Mt&&f&&!Mt.pat)c=`${__t(255)}${m(Mt.num||Mt.vtid||"")}${__t(256)}`;else if(Mt){let v=Mt,_=v.pat,A=_.stops.length,O=gt(v),Y=typeof O=="number"?O/60:0,K=t.days.indexOf(o.ymd),G=v.day===K-1?1440:0,it=o.min+G-v.t0-Y,W=Gs(v,it),Ft=Se=>v.t0+_.t[Se]+Y,Te=Se=>m(T[_.stops[Se]].n),Qt=__t(257);W&&(Qt=W.moving?`${__t(258)}${Te(W.next)}${__t(259)}${rt(Ft(2*W.next))}`:W.at===A-1?`${__t(260)}${Te(A-1)}</b>`:`${__t(226)}${Te(W.at)}${__t(261)}${rt(Ft(2*W.at+1))}`);let je=W?W.next:0,Ae=[];for(let Se=je;Se<A;Se++)Ae.push(`<li class="${Zl(_.stops[Se])?"mine":""}${jl(v,Se)?" alm":""}"><b>${rt(Zr(v,null,Se,Ft(2*Se)))}</b><span title="${Te(Se)}">${Zl(_.stops[Se])}${Te(Se)}</span>${Y>=1?`<em class="dl ${ki(Y)}">+${Math.round(Y)}</em>`:""}${Se>0?`<button type="button" class="abtn" data-alarm="${Se}" title="${__t(230)}">${jl(v,Se)?"\u{1F514}":"\u{1F515}"}</button>`:""}</li>`);c=`<div class="tc" style="--c:${v.c}"><button class="x" data-cx>\xD7</button><div>${En(v.fam)}${__t(231)}${m(v.num)}</b> <span class="pv">${__t(265)}</span></div><h3 class="rt"><span class="o" title="${Te(0)}">${Te(0)}</span><span class="ar">\u2192</span>${Ii(T[v.pat.stops[A-1]].n,v.fam)}</h3>
        <p>${Qt}</p><p>${Up(O,O!=null)}${(()=>{let Se=Gl(v.num);return Se&&Se.n>=2?`${__t(238)}${Se.n}${__t(239)}${Se.late?`${__t(240)} <b>${Se.late} ${__t(144)} ${Se.n} ${__t(141)}</b> ${__t(241)}`:__t(242)} \xB7 ${__t(243)} ${Se.avg<.5?"0":"+"+Math.round(Se.avg)} min</span>`:""})()}${__t(262)}${rt(v.t0+_.t[1])}${__t(263)}${rt(v.t0+_.t[2*A-2])}${__t(264)}${Y>=1?__t(250):""}<ol class="stops">${Ae.join("")}</ol>${co(v.num,"",v.fam)}<div class="rtb two"><button type="button" data-fav>${Np(v)?__t(251):__t(252)}</button><button type="button" data-follow>${ec(v)?__t(253):__t(254)}</button></div></div>`}else{let v=me,_=t.days.indexOf(o.ymd),A=[];Ri.st!==v&&(Ri.st=v,Ri.f.clear());let O=W=>(!J[W]||dt.has(W))&&(!Ri.f.size||Ri.f.has(W));if(_>=0){let W=(Ft,Te)=>{for(let Qt of Ft){if(!O(Qt.fam))continue;let je=Qt.pat.stops.indexOf(v);if(je<0||je===Qt.pat.stops.length-1)continue;let Ae=gt(Qt),Se=typeof Ae=="number"?Ae/60:0,xn=Qt.t0+Qt.pat.t[2*je+1]-Te;xn+Se<o.min-1||xn>o.min+360||A.push({tr:Qt,t:xn,dl:Se,d:Ae,on:H.vp.has(Qt.tid),past:o.min>Qt.t0+Qt.pat.t[1]-Te+2})}};W(st[_],0),_>0&&W(st[_-1],1440)}A.sort((W,Ft)=>W.t+W.dl-Ft.t-Ft.dl);let Y=T[v].id,K=Bt.get(Y),G=(f||F()&&o.live)&&H.url;G&&(!K||Date.now()-K.at>$p())&&!K?.loading&&(Bt.set(Y,{...K||{},loading:!0,at:K?K.at:0}),Lt(ce(),"/departures.json?stationId="+Y).then(W=>{Bt.set(Y,{at:Date.now(),d:W}),me===v&&(d._h="",Ie())}).catch(()=>Bt.set(Y,{at:Date.now(),err:1})));let it=G&&K&&K.d&&Array.isArray(K.d.trains)&&K.d.trains.length?K.d.trains:null;if(it){let W=new Map([...H.vp.values()].map(Qt=>[String((pt.get(Qt.tid)||{}).num||Qt.num),Qt])),Ft=new Map(Jn(v).map(Qt=>[String(Qt.num),Qt])),Te=it.filter(Qt=>O((Qt.line||{}).id||"")).slice(0,40).map(Qt=>{let je=String(Qt.commercialNumber||Qt.technicalNumber||""),Ae=Ft.get(je),Se=Ae?rt(Ae.est):(Qt.departureDateHourSelectedStation||"").slice(11,16),xn=(Qt.line||{}).id||"",nn=W.get(je),fn=Ae?Math.round(Ae.dl)*60:nn?H.delays.get(nn.tid):null,gi=Ae&&(Ae.gone||!Ae.live&&Ae.est<o.min-1);return`<li class="go${gi?" old":""}${ao({num:je,tid:nn?nn.tid:""})?" sel":""}" data-gt="${m(je)}|${nn?m(nn.tid):""}"><b>${m(Se)}</b>${J[xn]?En(xn):`<span class="ln" style="--c:#6b7385">${m(xn||"?")}</span>`}<span>${Ii((Qt.destinationStation||{}).name||"",xn)}${Qt.trainObservations?` \xB7 <i>${m(Qt.trainObservations)}</i>`:""}${gi?` <small class="oldt">${Ae.gone?__t(266):__t(267)}</small>`:""}</span>${Qt.trainCancelled?__t(268):typeof fn=="number"&&fn>=60?`<em class="dl ${ki(fn/60)}">+${Math.round(fn/60)}</em>`:""}${Qt.platformSelectedStation?`${__t(269)}${m(Qt.platformSelectedStation)}</i>`:""}${nn?'<i class="lvd" title="circulando, posici\xF3n real">\u25CF</i>':'<i class="lvd ph">\u25CF</i>'}</li>`}).join("");c=`<div class="tc" style="--c:#1d2330"><button class="x" data-cx>\xD7</button><h3>${m(T[v].n)}</h3>${Cp(v)}${co("",T[v].id,"")}${__t(270)}${Te||__t(272)}</ol>${Ip(v,o)}${x(p(T[v].fams,v))}${__t(271)}`}else c=`<div class="tc" style="--c:#1d2330"><button class="x" data-cx>\xD7</button><h3>${m(T[v].n)}</h3>${Cp(v)}${co("",T[v].id,"")}
        <small style="margin-top:6px">${f&&H.url?__t(274):""}${__t(273)}${f?__t(275):__t(276)}</small>
        <ol>${A.slice(0,40).map(W=>`<li class="go${ao({num:W.tr.num,tid:W.tr.tid})?" sel":""}" data-gt="${m(W.tr.num)}|${m(W.tr.tid)}"><b>${rt(W.t+W.dl)}</b>${En(W.tr.fam)}<span>${Ii(T[W.tr.pat.stops[W.tr.pat.stops.length-1]].n,W.tr.fam)}</span>${W.d==="X"?__t(268):W.dl>=1?`<em class="dl ${ki(W.dl)}">+${Math.round(W.dl)}</em>`:""}${f?W.on?'<i class="lvd" title="circulando, posici\xF3n real">\u25CF</i>':W.past?__t(277):'<i class="lvd ph">\u25CF</i>':""}</li>`).join("")||__t(278)}</ol>${Ip(v,o)}${x(p(T[v].fams,v))}${__t(271)}`}let C=d.scrollTop;if(d._h!==c&&!(d._touch>Date.now())){let v=K=>((K&&K.querySelector("h3")||{}).textContent||"").replace(/[^\p{L}\d]/gu,""),_=d.querySelector(".tc"),A=v(_),O=_?_.scrollTop:0;d.innerHTML=c,d._h=c,d.scrollTop=C;let Y=d.querySelector(".tc");Y&&O&&A&&v(Y)===A&&(Y.scrollTop=O)}if(d.style.display="flex",d.classList.toggle("min",mr),rd(),innerWidth<=640){let v=d.querySelector(".tc");if(v&&!v.querySelector(".mn")){let _=document.createElement("button");_.type="button",_.className="mn",_.setAttribute("aria-label",__t(279)),_.textContent=d.classList.contains("peek")?"\u25B4":"\u25BE",_.onclick=O=>{O.stopPropagation(),d.classList.toggle("peek"),d.classList.contains("peek")&&(Yr="",d.querySelectorAll("details[open]").forEach(Y=>Y.open=!1)),d.scrollTop=0,d.querySelectorAll(".tc").forEach(Y=>Y.scrollTop=0),requestAnimationFrame(Cs),Xh(),_.textContent=d.classList.contains("peek")?"\u25B4":"\u25BE"};let A=v.querySelector(".x");v.insertBefore(_,A?A.nextSibling:v.firstChild)}}else d.classList.remove("peek");let P=y("#rc");if(innerWidth<=640&&!P.classList.contains("min")&&!Ie.done&&(Ie.done=1,y("#rcgrab").click()),innerWidth<=640){let v=y("#inf").getBoundingClientRect().bottom;d.style.top=Math.round(v+8)+"px",d.style.width="calc(100vw - 76px)",d.style.maxHeight=Math.max(140,y("#rc").getBoundingClientRect().top-v-16)+"px"}else if(innerHeight<=500){let v=y("#inf").getBoundingClientRect().bottom;d.style.top=Math.round(v+8)+"px",d.style.width="min(290px, 40vw)",d.style.maxHeight=innerHeight-v-20+"px"}else d.style.top="",d.style.width=Ct?"390px":"300px",d.style.maxHeight="";Cs();let U=d.querySelector("[data-cx]");U&&(U.onclick=v=>{if(v.stopPropagation(),Ie.done=0,Ct||Ot||_e||Jt&&!Mt&&me<0){Ct=Ot=_e=!1,Mt||me>=0||(Jt=""),d._h="",Ie(),a();return}if(Mt&&se.st>=0){let _=se.st;se.st=-1,Mt=null,Nt=null,me=_,Hn(),d._h="",Ie(),Me=0,a();return}if(Mt&&ec(Mt)){let _=Mt,A=[...on],O=xe?{...xe}:null,Y=d.querySelector("[data-follow]");Y&&Y.click(),setTimeout(()=>ke(`${__t(280)} \xB7 ${_.fam||""} ${_.num}`,{label:__t(281),fn:()=>{A.forEach(([K,G])=>si(K,G)),O&&!xe&&(xe=O,As()),Li("map"),Xs({num:String(_.num),tid:_.tid&&H.vp.has(_.tid)?_.tid:"",tr:_}),Nt=Mt,d._h="",Ie(),ve(!0),a()}}),0)}se.st=-1,_e=!1,Ot=!1,Ct=!1,Mt=null,me=-1,Nt=null,Hn(),Ie(),Me=0,a()}),kp(d),d.querySelectorAll("[data-alarm]").forEach(v=>v.onclick=_=>{_.stopPropagation();let A=Mt&&Mt.pat?Mt:pt.get(Mt&&Mt.vtid)||null;if(!A)return;let O=+v.dataset.alarm,Y=T[A.pat.stops[O]].id;xe&&xe.num===String(A.num)&&xe.sid===Y?(xe=null,window.__schedOff&&window.__schedOff(7701),ke(__t(282))):(xe={num:String(A.num),sid:Y,at:Date.now()},ke(`${__t(283)}${T[A.pat.stops[O]].n}`),"Notification"in window&&Notification.permission==="default"&&Notification.requestPermission()),As(),d._h="",Ie()});{let v=d.querySelector("[data-fav]");v&&(v.onclick=_=>{_.stopPropagation();let A=Mt&&Mt.pat?Mt:pt.get(Mt&&Mt.vtid)||null;if(!A)return;let O=mi.findIndex(Y=>Lp(Y,A));if(O>=0)mi.splice(O,1),ke(__t(284));else{let Y=Dp(A);mi.push({num:String(A.num),fam:A.fam,sid:T[Y].id,dest:T[A.pat.stops[A.pat.stops.length-1]].id,t:rt(A.t0+A.pat.t[2*A.pat.stops.indexOf(Y)+1])}),ke(`${__t(285)}${A.fam}${__t(286)}${mi[mi.length-1].t}${__t(192)}${T[Y].n}${__t(287)}`),"Notification"in window&&Notification.permission==="default"&&Notification.requestPermission()}Pp(),d._h="",Ie(),ve(!0)})}{let v=d.querySelector("[data-share]");v&&(v.onclick=()=>{let _=Jt,A=re.filter(G=>(G.fam||G.tr&&G.tr.fam)===_),O=A.filter(G=>G.dl>=5).sort((G,it)=>it.dl-G.dl),Y=H.alerts.filter(G=>G.fams.has(_)),K=`${_}${__t(288)}${rt(te().min)}: ${A.length}${__t(289)}${O.length}${__t(290)}${O.length?" ("+O.slice(0,4).map(G=>`${G.tr?G.tr.num:G.v.num} +${Math.round(G.dl)}`).join(", ")+")":""}.${Y.length?__t(291)+Y[0].txt:__t(292)}`;navigator.share?navigator.share({text:K}).catch(()=>{}):(navigator.clipboard&&navigator.clipboard.writeText(K),ke(__t(293)+K.slice(0,60)+"\u2026"))})}d.querySelectorAll("[data-tripx]").forEach(v=>v.onclick=_=>{_.stopPropagation();let A=jn.findIndex(Y=>Y.k===v.dataset.tripx);if(A<0)return;let[O]=jn.splice(A,1);try{localStorage.setItem("rod_trips",JSON.stringify(jn,(Y,K)=>Y==="_n"?void 0:K))}catch{}d._h="",Ie(),ke(`${__t(294)} \xB7 tren ${O.num}`,{label:__t(281),fn:()=>{jn.push(O);try{localStorage.setItem("rod_trips",JSON.stringify(jn,(Y,K)=>Y==="_n"?void 0:K))}catch{}d._h="",Ie()}})}),d.querySelectorAll("[data-lseg]").forEach(v=>v.onclick=_=>{_.stopPropagation(),ql.v=v.dataset.lseg,d._h="",Ie();let A=d.querySelector(".tc");A&&(A.scrollTop=0)});{let v=d.querySelector("[data-lmore]");v&&(v.onclick=()=>{Xl.v=!Xl.v,d._h="",Ie()})}{let v=d.querySelector("[data-share30]");v&&(v.onclick=()=>{let _=Jt,A=Mp(_);if(!A)return;let O=mi.filter(K=>K.fam===_).map(K=>[K,Sp(K)]).filter(([,K])=>K.n),Y=`${__t(295)} ${_} ${__t(296)} ${Math.min(30,A.days)} ${__t(141)}: ${Math.round(A.pct)} % ${__t(297)}, ${__t(298)} ${Es(A.avg)}${A.nc?`, ${A.nc} ${A.nc===1?__t(157):__t(158)}`:""}.${(K=>{let G=K.filter(it=>it.dl!=null);return G.length?` ${__t(299)} ${K.length} ${K.length===1?__t(130):__t(131)}: ${__t(300)} ${G.filter(it=>it.dl>=5).length} ${__t(301)} (\u2248 ${Gh(G.reduce((it,W)=>it+W.dl,0))} ${__t(135)}).`:""})(gm(_,30))}${O.map(([K,G])=>` ${__t(302)} ${K.t} ${__t(303)} ${G.late} ${__t(144)} ${G.n} ${__t(141)} (\u2248 ${Gh(G.sum)} ${__t(135)}).`).join("")} ${__t(304)}`;navigator.share?navigator.share({text:Y}).catch(()=>{}):(navigator.clipboard&&navigator.clipboard.writeText(Y),ke(__t(293)+Y.slice(0,60)+"\u2026"))})}{let v=d.querySelector("[data-cols]");v&&(v.onclick=()=>{mn.on=!mn.on,v_(),d._h="",Ie()})}d.querySelectorAll("[data-gs]").forEach(v=>v.onclick=()=>{let _=+v.dataset.gs;Ct=!1,window.__rodPickStation(_),Object.assign(s,{tx:T[_].w[0],ty:T[_].w[1],dist:Math.min(s.dist,20)}),a()}),d.querySelectorAll("[data-sf]").forEach(v=>v.onclick=_=>{_.stopPropagation();let A=v.dataset.sf;A?Ri.f.has(A)?Ri.f.delete(A):Ri.f.add(A):Ri.f.clear(),d._h="",Ie()}),d.querySelectorAll("[data-gt]").forEach(v=>v.onclick=()=>{se.st=me;let[_,A]=v.dataset.gt.split("|"),O=pt.get(A);Xs({num:_,tid:H.vp.has(A)?A:"",tr:O||null})}),d.querySelectorAll("[data-sethome]").forEach(v=>v.onclick=()=>od(me,v.dataset.sethome));let z=d.querySelector("[data-follow]");z&&(z.onclick=()=>{let v=ec(Mt);if(Nt=v?null:Mt,!v&&Mt&&Mt.num!=null){let _=Mt.pat.stops,A=String(Mt.num),O=null,Y=1e9;for(let K of[Xe,$e,Rt]){let G=Tn(K);if(G==null||!_.includes(G)||K===Rt&&!Rt.st.length)continue;let it=Jn(G).find(W=>String(W.num)===A&&!W.gone);it&&it.est<Y&&(Y=it.est,O=K)}O?si(O.key,A):[...on.keys()].forEach(K=>si(K,null)),ve(!0)}if(v&&Mt&&Mt.num!=null){let _=String(Mt.num);[...on].forEach(([A,O])=>{String(O)===_&&si(A,null)}),Rn.num===_&&(Rn.num=""),mt.tid===_&&(mt.tid="",mt.lock=!1,mt.manual=0,mt.quiet=Date.now()+10*6e4),xe&&xe.num===_&&(xe=null,As(),window.__schedOff&&window.__schedOff(7701)),ve(!0)}Nt?(s.dist=Math.min(s.dist,22),innerWidth<=640&&(d.classList.add("peek"),d.scrollTop=0,y("#rc").classList.contains("min")||y("#rcgrab").click())):d.classList.remove("peek"),d._h="",Ie(),a()})}window.__rodCard=Ie;try{let o=localStorage.getItem("rod_inf");(o==="mini"||o==null)&&y("#inf").classList.add("mini")}catch{}y("#inft").onclick=()=>{let o=y("#inf").classList.toggle("mini");try{localStorage.setItem("rod_inf",o?"mini":"")}catch{}(Mt||me>=0||_e||Ot)&&(d._h="",Ie())},y("#ver").onclick=()=>{Ot=!0,Ct=!1,_e=!1,d._h="",Ie()};let A_={parado:'<path d="M9 6v12M15 6v12"/>',calor:'<path d="M12 4a2 2 0 012 2v8.5a4 4 0 11-4 0V6a2 2 0 012-2z"/><path d="M12 11v6"/>',abordo:'<path d="M12 3l10 18H2z"/><path d="M12 10v5M12 18v.4"/>',via:'<path d="M12 3l10 18H2z"/><path d="M12 10v5M12 18v.4"/>',gente:'<circle cx="9" cy="8" r="3"/><path d="M3 20c0-3.5 2.7-6 6-6s6 2.5 6 6"/><circle cx="17" cy="9" r="2.5"/><path d="M16 14.2c2.8.3 5 2.5 5 5.8"/>',retraso:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',cancel:'<circle cx="12" cy="12" r="9"/><path d="M9 9l6 6M15 9l-6 6"/>',ascensor:'<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 9l3-3 3 3M9 15l3 3 3-3"/>'},C_={vacio:"ok",lleno:"warn",petado:"bad",parado:"warn",calor:"warn",abordo:"bad",gente:"warn",retraso:"warn",cancel:"bad",ascensor:"warn",via:"bad"};function Op(o){let c={vacio:1,lleno:2,petado:3}[o],f=c?[0,1,2].map(p=>`<rect x="${4+p*6}" y="${14-p*4}" width="4" height="${6+p*4}" rx="1" ${p<c?'fill="currentColor"':""}/>`).join(""):A_[o]||'<circle cx="12" cy="12" r="3"/>';return`<svg class="cki ${C_[o]||""}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${f}</svg>`}let oo=new Proxy({},{get:(o,c)=>Op(c)}),Yr="",R_=["vacio","lleno","petado",__t(305),"calor","abordo"],I_=["gente","retraso","cancel","ascensor","via"],P_={vacio:__t(306),lleno:__t(307),petado:__t(308),parado:__t(309),calor:__t(310),abordo:__t(311),gente:__t(312),retraso:__t(313),cancel:__t(314),ascensor:__t(315),via:__t(316)},lo=o=>(H.tipos||P_)[o]||o,tc=(o,c)=>(H.rep||[]).filter(f=>o&&f.num===String(o)&&!f.sid||c&&f.sid===String(c)&&!f.num||o&&c&&f.num===String(o)&&f.sid===String(c)),Fp=o=>{let c=Math.round((Date.now()+(H.repSkew||0)-o.at)/6e4);return c<1?__t(317):xs(c+" min")},Jr=(()=>{try{return new Set(JSON.parse(localStorage.getItem("rod_votes")||"[]"))}catch{return new Set}})();function co(o,c,f){if(!H.url||!H.repOk)return"";let p=tc(o,c),x=o?R_:I_;return`<div class="crowd"><small>${Op("gente")} ${__t(319)}${p.length?"":__t(320)}</small>${p.map(S=>`<p><span><span class="cname">${oo[S.kind]||"\u2022"} <b>${m(lo(S.kind))}</b></span><small class="cmeta">${S.up>1?(S.up>999?"999+":S.up)+" "+__t(321)+" \xB7 ":""}${Fp(S)}</small></span>${Jr.has(S.id)?`<small class="cvok">\u2713 ${__t(322)}</small>`:`<span class="cvb"><button type="button" data-rv="${S.id}:1" title="${__t(323)}">\u2713 ${__t(324)}</button><button type="button" data-rv="${S.id}:-1" title="${__t(325)}">\u2715 ${__t(326)}</button></span>`}</p>`).join("")}
      <details data-ckd="${m(String(o||"")+"|"+String(c||""))}"${Yr===String(o||"")+"|"+String(c||"")?" open":""}><summary>${o?__t(327):__t(328)}</summary><div class="ckb">${x.map(S=>`<button type="button" data-rk="${S}" data-rn="${m(o||"")}" data-rs="${m(c||"")}" data-rl="${m(f||"")}">${oo[S]} ${m(lo(S))}</button>`).join("")}${__t(318)}`}async function Bp(o,c){try{let p=await(await fetch(ce()+c,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)})).json();if(!p.ok){ke(p.err||__t(329));return}if(p.id){Jr.add(p.id);try{localStorage.setItem("rod_votes",JSON.stringify([...Jr].slice(-300)))}catch{}}ke(c==="/vote"?__t(330):p.n>1?`${__t(331)}${p.n}${__t(332)}`:__t(333));let x=await Lt(ce(),"/reports.json");x&&x.items&&(H.rep=x.items),d._h="",Ie(),ve(!0)}catch{ke(__t(334))}}function kp(o){o.querySelectorAll("details[data-ckd]").forEach(c=>c.addEventListener("toggle",()=>{Yr=c.open?c.dataset.ckd:Yr===c.dataset.ckd?"":Yr,c.open&&c.scrollIntoView({block:"nearest",behavior:"smooth"})})),o.querySelectorAll("[data-rk]").forEach(c=>c.onclick=f=>{f.stopPropagation(),c.disabled=!0,Yr="",Bp({kind:c.dataset.rk,num:c.dataset.rn,sid:c.dataset.rs,line:c.dataset.rl},"/report")}),o.querySelectorAll("[data-rv]").forEach(c=>c.onclick=f=>{f.stopPropagation();let[p,x]=c.dataset.rv.split(":");Jr.add(+p);try{localStorage.setItem("rod_votes",JSON.stringify([...Jr].slice(-300)))}catch{}Bp({id:+p,v:+x},"/vote"),ke(+x>0?__t(335):__t(336)),ve(!0),d._h="",Ie()})}let uo=0;function ke(o,c){let f=y("#toast");if(f||(f=document.createElement("div"),f.id="toast",document.body.appendChild(f)),f.textContent=o,c){let p=document.createElement("button");p.type="button",p.className="tact",p.textContent=c.label,p.onclick=x=>{x.stopPropagation(),clearTimeout(uo),f.className="",c.fn()},f.appendChild(p)}if(f.className="on",clearTimeout(uo),uo=setTimeout(()=>{f.className=""},Math.min(1e4,Math.max(4500,String(o).length*70))),!f._tap){f._tap=1,f.onclick=()=>{clearTimeout(uo),f.className=""};let p=null,x=0;f.addEventListener("touchstart",S=>{p=S.touches[0].clientY,x=0,f.style.transition="none"},{passive:!0}),f.addEventListener("touchmove",S=>{p!=null&&(x=Math.min(0,S.touches[0].clientY-p),f.style.translate=`0 ${x}px`,f.style.opacity=String(Math.max(.2,1+x/80)))},{passive:!0}),f.addEventListener("touchend",()=>{f.style.transition="",f.style.translate="",f.style.opacity="",p!=null&&x<-25&&(clearTimeout(uo),f.className=""),p=null})}}function ho(o){return o.src?`<b class="asrc ${o.src==="Adif"?"adif":""}">${o.src==="Adif"?__t(337):m(o.src)}</b>`:""}function fo(o){if(!o.when)return"";let[c,f]=o.when.split("T"),p=St(new Date),x=p.ymd.slice(0,4)+"-"+p.ymd.slice(4,6)+"-"+p.ymd.slice(6,8);if(c===x&&f){let S=Math.round(p.min-(+f.slice(0,2)*60+ +f.slice(3,5)));return S<1?__t(317):S<60?xs(S+" min"):`${__t(338)}${f.slice(0,5)}`}return`${c.slice(8,10)}/${c.slice(5,7)}${f?" "+f.slice(0,5):""}`}function qh(){let o=y("#alr");if(!o)return;let c=H.alerts.filter(f=>[...f.fams].some(p=>dt.has(p))).length;o.hidden=!c,o.textContent=`\u26A0\uFE0F ${c}${c===1?__t(339):__t(340)}`}{let o=y("#alrslot");o&&o.appendChild(y("#alr"))}y("#alr").onclick=()=>{Ot=!1,Ct=!1,_e=!0,Ie()},y("#wcopy").onclick=async()=>{let o=y("#wcode").textContent;try{await navigator.clipboard.writeText(o),y("#wcopy").textContent=__t(341)}catch{let f=document.createRange();f.selectNodeContents(y("#wcode"));let p=getSelection();p.removeAllRanges(),p.addRange(f),y("#wcopy").textContent=__t(342)}setTimeout(()=>y("#wcopy").textContent=__t(343),2500)};let L_=$t.get("71801");function $p(){return document.hidden?on.size||xe?12e4:1e12:3e4}function zp(o,c){let f=T[o].id,p=Bt.get(f);!(Z()&&H.url)||p&&(p.loading||Date.now()-p.at<$p())||(Bt.set(f,{...p||{},loading:!0,at:p?p.at:0}),Lt(ce(),"/departures.json?stationId="+f).then(x=>{Bt.set(f,{at:Date.now(),d:x}),c&&c()}).catch(()=>Bt.set(f,{at:Date.now(),err:1})))}let Vp=o=>+o.slice(0,2)*60+ +o.slice(3,5),po={k:-2,m:null};function Rs(o){let c=t.days.indexOf(te().ymd);if(po.k!==c){po.k=c,po.m=new Map;for(let f of st[c]||[])po.m.set(String(f.num),f)}return po.m.get(String(o))||null}let $i={at:0,m:new Map},mo=o=>E()?(go(""),[...o].filter(c=>{let f=$i.m.get(c);return f&&f[0]>=2&&f[1]===0}).sort(B)):[];function go(o){if(Date.now()-$i.at>6e4||$i.vp!==H.vp){$i.at=Date.now(),$i.vp=H.vp,$i.m=new Map;let f=te(),p=t.days.indexOf(f.ymd);if(p>=0)for(let x of st[p]){let S=f.min-x.t0;if(S<x.pat.t[1]+3||S>x.pat.t[x.pat.t.length-2]-3)continue;let C=$i.m.get(x.fam)||[0,0];C[0]++,H.vp.has(x.tid)&&C[1]++,$i.m.set(x.fam,C)}}let c=$i.m.get(o);return c&&c[0]>=3?c[1]/c[0]:1}function Zr(o,c,f,p){let x=T[o.pat.stops[f]].id;if([...Xe.st,...$e.st].includes(x)){let S=Jn(o.pat.stops[f]).find(C=>String(C.num)===String(o.num));if(S&&!S.gone)return S.est}return Yh(o,c,f,0,p)}function Hp(o,c){if(!o||!c||c.pre||c.dObs==null||c.err==null||c.err>.6)return null;let f=Date.now()/1e3-c.ts;if(f>150||f<-30||(c.still||0)>=90)return null;let p=ne(o.pat).stopD,x=o.pat.t,S,C,P=p.reduce((L,U,z)=>Math.abs(U-c.dObs)<Math.abs(p[L]-c.dObs)?z:L,0);if(Math.abs(p[P]-c.dObs)<.16||c.atStop===P)S=x[2*P+1]??x[2*P],C=P;else{let L=p.findIndex(z=>z>c.dObs);if(L<=0)return null;let U=Math.min(1,Math.max(0,(c.dObs-p[L-1])/(p[L]-p[L-1]||1)));S=x[2*L-1]+U*(x[2*L]-x[2*L-1]),C=L-1}return{t:St(new Date).min-f/60,tpos:S,j0:C,sd:p}}function Yh(o,c,f,p,x){let S=Hp(o,c);if(!S||f<=S.j0&&!(f===S.j0&&p===1))return x;let C=o.pat.t,P=S.t+(C[2*f+p]??C[2*f])-S.tpos;if(P-S.t>45)return x;let L=(x%1440+1440)%1440,U=((P-L+720)%1440+1440)%1440-720;return U>=-3&&U<=5?x+U:x}function Y1(o,c,f,p){let x=Hp(o,c);if(!x)return null;let S=Yh(o,c,f,1,x.t+o.pat.t[2*f+1]-x.tpos);return S-p.min>30||S<p.min-1?null:S}function Jn(o,c){let f=te(),p=(E()||F())&&f.live&&!c,x=Bt.get(T[o].id),S=[],C=new Map([...H.vp.values()].map(L=>[String((pt.get(L.tid)||{}).num||L.num),L]));if(p&&x&&x.d&&Array.isArray(x.d.trains)&&x.d.trains.length)for(let L of x.d.trains){let U=(L.departureDateHourSelectedStation||"").slice(11,16);if(!U)continue;let z=String(L.commercialNumber||L.technicalNumber||""),v=C.get(z),_=v?H.delays.get(v.tid):null,A=Math.max(typeof _=="number"?Math.max(0,_/60):0,v&&v.pre&&v.preDl||0),O=Vp(U);O<f.min-720&&(O+=1440);let Y=+(L.departureDateHourSelectedStation||"").slice(17,19)||0,K=O+Y/60,G=v&&pt.get(v.tid)||Rs(z),it=G?G.pat.stops.indexOf(o):-1,W=it>=0?(G.t0+G.pat.t[2*it+1])%1440:null;if(W!=null){for(;W<K-720;)W+=1440;for(;W>K+720;)W-=1440;Math.abs(K-W)>120&&(W=null)}let Ft,Te;W==null?(Ft=Y||!A?K:K+A,Te=Y?0:A):Y||Math.abs(K-W)>=1?(Ft=K,Te=Math.max(0,K-W)):(Ft=W+A,Te=A);let Qt=!1;if(G&&!v&&it>0&&!Y){let je=t.days.indexOf(f.ymd),Ae=G.day===je-1?1440:G.day===je+1?-1440:0,Se=G.t0+G.pat.t[1]-Ae;if(f.min<Se){let xn=Se+(G.pat.t[2*it+1]-G.pat.t[1]);xn>Ft+1&&(Ft=xn,Qt=!0,W!=null&&(Te=Math.max(0,Ft-W)))}}if(W!=null&&(O=Math.round(W)),v&&G&&it>=0){let je=Yh(G,v,it,1,Ft);je!==Ft&&(Ft=Math.max(je,f.min),W!=null&&(Te=Math.max(0,Ft-W)))}S.push({dubious:Qt,rodLive:!!Y,sm:O,est:Ft,dl:Te,fam:(L.line||{}).id||"",dest:(L.destinationStation||{}).name||"",destId:(L.destinationStation||{}).id||"",plat:L.platformSelectedStation||"",cancel:!!L.trainCancelled,obs:L.trainObservations||"",live:!!v,num:z,tid:v?v.tid:"",tr:v&&pt.get(v.tid)||Rs(z),src:"oficial"})}else{let L=t.days.indexOf(f.ymd);if(L<0)return S;let U=(z,v)=>{for(let _ of z){let A=_.pat.stops.indexOf(o);if(A<0||A===_.pat.stops.length-1)continue;let O=gt(_),Y=typeof O=="number"?Math.max(0,O/60):0,K=_.t0+_.pat.t[2*A+1]-v;if(K+Y<f.min-1||K>f.min+(f.min>1080||f.min<300?600:360))continue;let G=_.pat.stops[_.pat.stops.length-1];S.push({sm:K,est:K+Y,dl:Y,fam:_.fam,dest:T[G].n,destId:T[G].id,plat:"",cancel:O==="X",obs:"",live:H.vp.has(_.tid),num:_.num,tid:_.tid,tr:_,src:"horario"})}};U(st[L],0),L>0&&U(st[L-1],1440),L+1<t.days.length&&f.min>1080&&U(st[L+1],-1440)}if(p){let L=new Set(S.map(v=>String(v.num))),U=t.days.indexOf(f.ymd),z=(v,_)=>{for(let A of v||[]){if(L.has(String(A.num)))continue;let O=A.pat.stops.indexOf(o);if(O<0||O===A.pat.stops.length-1)continue;let Y=A.t0+A.pat.t[2*O+1]-_;if(Y<f.min-45||Y>f.min+1||!H.vp.get(A.tid))continue;let G=H.delays.get(A.tid),it=typeof G=="number"?Math.max(0,G/60):0,W=A.pat.stops[A.pat.stops.length-1];S.push({sm:Y,est:Y+it,dl:it,fam:A.fam,dest:T[W].n,destId:T[W].id,plat:"",cancel:!1,obs:"",live:!0,num:A.num,tid:A.tid,tr:A,src:"horario"})}};U>=0&&(z(st[U],0),U>0&&z(st[U-1],1440));for(let v of S){let _=v.tid&&H.vp.get(v.tid),A=v.tr?v.tr.pat.stops.indexOf(o):-1;v.passed=!!(_&&A>=0&&!_.pre&&_.next!=null&&_.next>=0&&_.next>A&&_.atStop!==A),!v.passed&&v.live&&v.est<f.min&&(v.est=f.min,v.late=!0),v.passed&&(v.gone=!0)}}let P=S.filter(L=>L.gone?f.min-L.est<20:L.est>=f.min-.5).sort((L,U)=>L.est-U.est);{let L=P.filter(U=>U.gone);if(L.length>2){let U=new Set(L.slice(0,L.length-2));P=P.filter(z=>!U.has(z))}}if(!P.filter(L=>!L.gone).length&&S.length&&S[0].src==="oficial"&&!c)return Jn(o,!0);for(let L of P){let U=L.num&&Wh(L.num);U&&U.cx&&(L.cancel=!0,L.cxWhy=U.txt)}if(E()&&f.live){let L=t.days.indexOf(f.ymd);for(let U of P){if(U.live||U.cancel||!U.tr)continue;let z=U.tr.day===L-1?1440:U.tr.day===L+1?-1440:0,v=U.tr.t0+U.tr.pat.t[1]-z+(U.dl||0);U.noPos=f.min>v+3&&!U.rodLive,U.ghost=U.noPos&&go(U.fam)>=.7}}if(c||(P=P.concat(R(o,f.min-.5,f.min+360)).sort((L,U)=>L.est-U.est)),!c&&P.some(L=>L.src==="oficial")){let L=S.filter(v=>v.src==="oficial"),U=Math.max(...L.map(v=>v.sm)),z=new Set(P.map(v=>String(v.num)));P=P.concat(Jn(o,!0).filter(v=>!v.gone&&v.sm<=U&&v.est>=f.min-.5&&!z.has(String(v.num))).map(v=>Object.assign(v,{unconf:!0}))).sort((v,_)=>v.est-_.est)}if(P.some(L=>L.src==="oficial")){let L=Math.max(...P.map(z=>z.sm)),U=new Set(P.map(z=>String(z.num)));P=P.concat(Jn(o,!0).filter(z=>z.sm>L&&!U.has(String(z.num))))}return P}let Gp=(o,c,f,p)=>{let x={key:o,ico:c,name:f,st:[],i:0,walk:10,open:!1};try{let S=JSON.parse(localStorage.getItem("rod_"+o)||"null");S&&Object.assign(x,S)}catch{}return!x.st.length&&p&&(x.st=p),x},Xe=Gp("home","\u{1F3E0}",__t(344),null),$e=Gp("work","\u{1F4BC}",__t(345),null),Rt={key:"near",ico:"\u{1F4CD}",name:__t(346),st:[],i:0,walk:0,open:!1,dist:{},fix:0,err:""};try{let o=t.days.indexOf(te().ymd),c=[...Xe.st,...$e.st],f=!1;if(o>=0)for(let p of mi){if(c.includes(p.sid))continue;let x=qr(p,o);if(!x)continue;let S=Dp(x);S==null||!c.includes(T[S].id)||(p.sid=T[S].id,p.t=rt(x.t0+x.pat.t[2*x.pat.stops.indexOf(S)+1]),p.num=String(x.num),f=!0)}f&&Pp()}catch{}let Is=[Rt,Xe,$e];try{Rt.homeW=JSON.parse(localStorage.getItem("rod_homew")||"null")}catch{}Xe.open=!1,$e.open=!1;function Wp(o,c){let f=wt(o,c),p=wt(o,c+.009);return 1/Math.hypot(p[0]-f[0],p[1]-f[1])}function Jh(o){if(!navigator.geolocation){Rt.err=__t(347),ve(!0);return}navigator.geolocation.getCurrentPosition(c=>{let{longitude:f,latitude:p}=c.coords,x=wt(f,p),S=Wp(f,p),C=T.map((z,v)=>[v,Math.hypot(z.w[0]-x[0],z.w[1]-x[1])*S]).filter(([z])=>T[z].fams.size).sort((z,v)=>z[1]-v[1]),P=C.filter(([,z],v)=>v===0||z<Math.max(2.5,C[0][1]*1.6)).slice(0,3),L=Rt.st[0]!==T[P[0][0]].id;Rt.w=x,Rt.k=S,Rt.acc=c.coords.accuracy!=null?c.coords.accuracy:999,Rt.st=P.map(([z])=>T[z].id),Rt.dist=Object.fromEntries(P.map(([z,v])=>[T[z].id,v])),Rt.fix=Date.now(),Rt.err="",L&&(Rt.i=0);let U=[Xe,$e].find(z=>z.st.includes(Rt.st[0])&&Rt.dist[Rt.st[0]]<1.5);ve(!0)},c=>{Rt.err=c.code===1?__t(348):__t(349),ve(!0)},{enableHighAccuracy:!1,maximumAge:6e4,timeout:12e3})}let _r=o=>Math.max(1,Math.round(o*1.3/.08))+3;setTimeout(()=>Jh(!0),400);let mt={fixes:[],tid:"",no:new Map,shown:""};try{let o=JSON.parse(localStorage.getItem("rod_onb")||"null");o&&o.tid&&Date.now()-o.at<3*36e5&&o.ymd===St(new Date).ymd&&(mt.tid=o.tid,mt.manual=o.manual||0,mt.lock=!!o.lock)}catch{}let Xp="";setInterval(()=>{let o=mt.tid+"|"+(mt.manual||0)+"|"+(mt.lock?1:0);if(o!==Xp){Xp=o;try{mt.tid?localStorage.setItem("rod_onb",JSON.stringify({tid:mt.tid,manual:mt.manual||0,lock:!!mt.lock,at:Date.now(),ymd:St(new Date).ymd})):localStorage.removeItem("rod_onb")}catch{}}},1500);let Rn={num:"",until:0};function ec(o){return!!o&&(Nt===o||o.num!=null&&([...on.values()].some(c=>String(c)===String(o.num))||String(mt.tid)===String(o.num)))}let qp=()=>{let o=new Set([...on.values()].map(String));return Rn.num&&Rn.until>Date.now()&&o.add(Rn.num),o};function Zh(o,c){return!!o&&o.est-c.min<=3&&c.min-o.est<=20}function jh(o){ke(o?`${__t(350)} (${o})`:__t(350))}function jr(o,c,f){if(o=String(o),mt.tid&&mt.tid!==o){mt.no.set(mt.tid,Date.now()+20*6e4);let S=jn.findIndex(C=>C.num===String(mt.tid)&&C.d===te().ymd&&Date.now()-C.t0<3*36e5);if(S>=0){jn.splice(S,1),Qr.s=0;try{localStorage.setItem("rod_trips",JSON.stringify(jn,(C,P)=>C==="_n"?void 0:P))}catch{}}}mt.tid=o,mt.cand=null,mt.lock=c==="lock",mt.manual=c==="auto"?0:Date.now()+(c==="lock"?4*36e5:90*6e4),[...on].forEach(([S,C])=>{String(C)!==o&&si(S,null)}),Rn.num=o,Rn.until=Date.now()+90*6e4;let p=new Set;for(let S of Is){let C=Tn(S);C!=null&&(S.platAt||S.goAt||S===Rt&&Rt.st&&Rt.st.length)&&p.add(C)}mt.from=[...p][0]??(f?(S=>S?Tn(S):null)(Is.find(S=>S.key===f)):null);for(let S of Is)(S.platAt||S.goAt||c!=="auto"&&S.open)&&(S.platAt=0,S.goAt=0,c!=="auto"&&(S.open=!1),ii(S));window.__lpAt=Date.now();let x=re.find(S=>S.tr&&String(S.tr.num)===o)||I(te()).out.find(S=>S.tr&&String(S.tr.num)===o);if(c!=="auto"){let S=x?x.tr:Rs(o);if(S){Nt=S,Mt=S,me=-1,ze.sk="t"+(S.num||S.vtid),Ot=_e=Ct=!1,d._h="";try{Ie(),a()}catch{}}if(![...on.values()].some(C=>String(C)===o)){let C=f||null,P=1e9;if(!C)for(let L of[Xe,$e,Rt]){let U=Tn(L),z=U!=null?Jn(U).find(v=>String(v.num)===o&&!v.gone):null;z&&z.est<P&&(P=z.est,C=L.key)}C&&si(C,o)}}if(x){Nt=x.tr;let S=x.tr.pat.stops,C=(()=>{let U=Math.max(x.real&&x.v&&x.v.next>=0?x.v.next:-1,x.p&&x.p.next>=0?x.p.next:-1),z=mt.fixes[mt.fixes.length-1];if(z&&Date.now()-z.t<12e4){let v=-1,_=.6;S.forEach((A,O)=>{let Y=Math.hypot(T[A].w[0]-z.w[0],T[A].w[1]-z.w[1])*z.k;Y<_&&(_=Y,v=O)}),v>=0&&(U=Math.max(U,v))}for(let v of p){let _=S.indexOf(v);_>=0&&(U=Math.max(U,_))}return U<0?1:U})(),P=[...Xe.st,...$e.st,...nc.keys()],L=S.findIndex((U,z)=>z>=C&&!p.has(U)&&P.includes(T[U].id));L>0&&!(xe&&xe.num===o)&&(xe={num:o,sid:T[S[L]].id,at:Date.now()},As())}return x}function D_(){let o=mt.fixes;if(o.length<2)return;let c=o[o.length-1],f=o.slice().reverse().find(A=>c.t-A.t>=8e3&&c.t-A.t<=9e4);if(!f)return;let p=Math.hypot(c.w[0]-f.w[0],c.w[1]-f.w[1])*c.k,x=c.spd!=null&&c.spd>0?c.spd*3.6:p/((c.t-f.t)/36e5);if(c.acc!=null&&c.acc>100)return;if(mt.tid&&x<8){if(!mt.slow)mt.slow=c.t;else if(c.t-mt.slow>9e4){let A=T.map((G,it)=>[it,G.w?Math.hypot(G.w[0]-c.w[0],G.w[1]-c.w[1])*c.k:99]).filter(G=>G[1]<.35).sort((G,it)=>G[1]-it[1])[0],O=re.find(G=>G.tr&&String(G.tr.num)===mt.tid),Y=O&&(O.real&&O.v&&O.v.w?O.v.w:O.p&&O.p.w),K=Y?Math.hypot(Y[0]-c.w[0],Y[1]-c.w[1])*c.k>1:!0;if(A&&(!mt.lock||K)){let G=mt.tid,it=jn.find(W=>W.num===G&&W.d===te().ymd);if(it){it.b=T[A[0]].id,it.done=!0;try{localStorage.setItem("rod_trips",JSON.stringify(jn,(W,Ft)=>W==="_n"?void 0:Ft))}catch{}}mt.no.set(G,Date.now()+90*6e4),mt.tid="",mt.manual=0,mt.lock=!1,mt.slow=0,mt.quiet=Date.now()+10*6e4,Nt=null,[...on].forEach(([W,Ft])=>{String(Ft)===G&&si(W,null)}),Rn.num===G&&(Rn.num="");try{saveOnbState&&saveOnbState()}catch{}ve(!0);return}}}else mt.slow=0;if(!mt.tid&&mt.quiet&&Date.now()<mt.quiet||mt.manual&&Date.now()<mt.manual)return;if(mt.tid){if(x<22)return;let A=re.find(O=>O.tr&&String(O.tr.num)===mt.tid)||I(te()).out.find(O=>O.tr&&String(O.tr.num)===mt.tid);if(A){if(Math.hypot(A.p.w[0]-c.w[0],A.p.w[1]-c.w[1])*c.k<=5){mt.far=0;return}if(mt.far||(mt.far=c.t),c.t-mt.far<12e4)return}mt.far=0}let S=qp();if(!mt.tid&&S.size&&x>=15&&x<=200&&!(c.acc!=null&&c.acc>80))for(let A of[...re.filter(O=>O.real),...I(te()).out]){if(!A.tr||!S.has(String(A.tr.num))||(mt.no.get(String(A.tr.num))||0)>Date.now())continue;if(Math.hypot(A.p.w[0]-c.w[0],A.p.w[1]-c.w[1])*c.k<=(A.real?1.6:2.2)){Yp(A);return}}if(x<22||x>200)return;let C=[c.w[0]-f.w[0],c.w[1]-f.w[1]],P=null,L=2.5,U=re.filter(A=>A.real),z=I(te()).out.filter(A=>A.tr&&!U.some(O=>O.tr&&String(O.tr.num)===String(A.tr.num))),v=qp();for(let A of[...U,...z]){if(!A.tr||v.size&&!v.has(String(A.tr.num)))continue;let O=A.real?2.5:3.5,Y=Math.hypot(A.p.w[0]-c.w[0],A.p.w[1]-c.w[1])*c.k;if(Y>Math.min(L,O)||P&&P.real&&!A.real)continue;let K=A.real?A.v.next:A.p.next;if(K==null||K<0)continue;let G=T[A.tr.pat.stops[K]].w,it=[G[0]-A.p.w[0],G[1]-A.p.w[1]];if(it[0]*C[0]+it[1]*C[1]<=0)continue;let W=String(A.tr.num);(mt.no.get(W)||0)>Date.now()||(L=Y,P=A)}if(!P){mt.cand=null;return}let _=String(P.tr.num);if(mt.tid!==_&&!(c.acc!=null&&c.acc>50)){if(!mt.cand||mt.cand.k!==_){mt.cand={k:_,t:c.t};return}c.t-mt.cand.t<2e4||Yp(P)}}function Yp(o){let c=String(o.tr.num);jr(c,"auto"),Ot=_e=Ct=!1,me=-1,Mt=o.tr,Nt=o.tr,Object.assign(s,{tx:o.p.w[0],ty:o.p.w[1],dist:Math.min(s.dist,22)}),innerWidth<=640&&(d.classList.add("peek"),y("#rc").classList.contains("min")||y("#rcgrab").click()),Hn(),d._h="",Ie(),Me=0,a();let f=y("#onb");f||(f=document.createElement("div"),f.id="onb",document.body.appendChild(f)),f.innerHTML=`${__t(351)}${m(o.tr.fam)} ${m(o.tr.num)}${__t(352)}${m(T[o.tr.pat.stops[o.tr.pat.stops.length-1]].n)}${__t(353)}${xe&&xe.num===c?`${__t(355)}${m(T[$t.get(xe.sid)].n)}`:""}${__t(354)}`,f.className="on",f.querySelector("[data-onb-no]").onclick=()=>{mt.no.set(c,Date.now()+20*6e4),mt.tid="",mt.lock=!1,Nt=null,Mt=null,d._h="",Ie(),f.className=""},f.querySelector("[data-onb-x]").onclick=()=>{f.className=""},setTimeout(()=>{f.className=""},15e3)}if(navigator.geolocation&&navigator.geolocation.watchPosition){let o=null,c=null,f=0,p=Date.now()+45e3,x=()=>!!(Is.some(U=>U.goAt)||f>Date.now()&&!mt.lock||p>Date.now()&&!mt.tid),S=U=>{let{longitude:z,latitude:v}=U.coords,_={t:U.timestamp||Date.now(),w:wt(z,v),k:Wp(z,v),spd:U.coords.speed,acc:U.coords.accuracy};if(!(mt.fixes.length&&mt.fixes[mt.fixes.length-1].t===_.t)){mt.fixes.push(_),mt.fixes=mt.fixes.filter(A=>_.t-A.t<12e4);{let A=mt.fixes.find(Y=>_.t-Y.t>=2e4),O=_.spd!=null&&_.spd>0?_.spd*3.6:A?Math.hypot(_.w[0]-A.w[0],_.w[1]-A.w[1])*_.k/((_.t-A.t)/36e5):0;O>=15&&O<250&&(_.acc==null||_.acc<300)&&(f=Date.now()+10*6e4)}try{te().live&&D_()}catch{}}},C=0,P=()=>{if(!(o!=null||C))if(c=x(),c)o=navigator.geolocation.watchPosition(S,()=>{},{enableHighAccuracy:!0,maximumAge:5e3,timeout:2e4});else{let U=()=>navigator.geolocation.getCurrentPosition(S,()=>{},{enableHighAccuracy:!1,maximumAge:55e3,timeout:2e4});U(),C=setInterval(U,6e4)}};setInterval(()=>{(o!=null||C)&&x()!==c&&(L(),P())},5e3);let L=()=>{o!=null&&(navigator.geolocation.clearWatch(o),o=null),C&&(clearInterval(C),C=0)};setTimeout(P,3e3),document.addEventListener("visibilitychange",()=>{document.hidden?L():(mt.fixes=[],p=Date.now()+45e3,P())})}setInterval(()=>{!document.hidden&&(Date.now()-Rt.fix>11e4||Is.some(o=>o.goAt))&&Jh(!1)},3e4);let ii=o=>{try{localStorage.setItem("rod_"+o.key,JSON.stringify({st:o.st,i:o.i,walk:o.walk,open:o.open,hide:o.hide||"",goAt:o.goAt||0,platAt:o.platAt||0,xfer:o.xfer||null}))}catch{}},Tn=o=>o.st.length?$t.get(o.st[o.i]||o.st[0]):null;function Jp(o,c,f,p){if(p&&c.bus)return c.bstops.slice(1).some(C=>p.has(C))?"to":"out";if(p&&c.tr){let C=c.tr.pat.stops,P=C.indexOf(o);if(P>=0&&C.slice(P+1).some(L=>p.has(L)))return"to"}if(p&&c.tr)return"out";let x=$t.get(c.destId)??T.findIndex(C=>C.n===c.dest);if(x<0||x==null||f==null)return"otros";let S=C=>Math.hypot(T[C].w[0]-T[f].w[0],T[C].w[1]-T[f].w[1]);return S(x)<S(o)?"to":"out"}let xr=o=>o<1?__t(317):o<60?Math.floor(o)+" min":Math.floor(o/60)+" h "+String(Math.floor(o%60)).padStart(2,"0"),Zp=0,N_=/sin servicio|sense servei|suspend|interromp|interrump|no circula|no se puede garantizar|no es pot garantir/i,jp=/sin servicio|sense servei|suspend|interromp|interrump|no circula|no hi ha circulaci|cortad|tallad|corte de|tall de|servicio alternativo|servei alternatiu|por carretera|per carretera|no se puede garantizar|no es pot garantir/i,Kp=/huelga|vaga\b|strike|servicios? m[ií]nimos|serveis m[ií]nims|demora|retard|retras|v[ií]a [uú]nica|una sola v[ií]a|incidencia|incidència|aver[ií]a|avaria|aturad|detenid|parad[oa]s? en|velocidad reducida|velocitat redu/i,_o=o=>{let c=o.es||o.txt;return jp.test(c)||jp.test(o.txt)?3:Kp.test(c)||Kp.test(o.txt)||o.lvl>=2?2:1},Qp=4,Kh=new Map,nc=new Map;function tm(o,c){let f=t.days.indexOf(te().ymd),p=f+"|"+o+"|"+[...c].join(",");if(Kh.has(p))return Kh.get(p);let x=!1,S=new Set,C=new Set;for(let L of st[f]||[]){let U=L.pat.stops,z=U.indexOf(o);if(z>=0)for(let _=z+1;_<U.length;_++){if(c.has(U[_])){x=!0;break}S.add(U[_])}let v=-1;for(let _=1;_<U.length;_++)if(c.has(U[_])){v=_;break}if(v>0)for(let _=0;_<v;_++)C.add(U[_])}let P=x?null:[...S].filter(L=>C.has(L)&&L!==o&&!c.has(L));return Kh.set(p,P),P}function Qh(o,c,f,p){for(let x of p||Jn(o)){if(x.cancel||x.gone||!x.tr||x.est<c-.01)continue;let S=x.tr.pat.stops,C=S.indexOf(o);if(C<0)continue;let P=-1;for(let L=C+1;L<S.length;L++)if(f.has(S[L])){P=L;break}if(!(P<0))return{c:x,fin:x.est+(x.tr.pat.t[2*P]-x.tr.pat.t[2*C+1])}}return null}function U_(o,c,f){let p=Qh(o,c+2,f,Jn(o));return p?{c:p.c,fin:p.fin,m:p.c.est-c,lost:!1}:null}function td(o,c,f,p,x){let S=null,C=new Map,P=Jn(o).filter(L=>!L.cancel&&!L.gone&&L.tr&&L.est-x.min>=p).slice(0,8);for(let L of P){let U=L.tr.pat.stops,z=U.indexOf(o);if(!(z<0))for(let v of f){let _=U.indexOf(v);if(_<=z)continue;let A=L.est+(L.tr.pat.t[2*_]-L.tr.pat.t[2*z+1]);C.has(v)||C.set(v,Jn(v));let O=Qh(v,A+Qp,c,C.get(v));O&&(!S||O.fin<S.finAt-.01||Math.abs(O.fin-S.finAt)<.01&&L.est>S.x.est)&&(S={T:v,x:L,finAt:O.fin})}}return S}function O_(o,c,f,p,x){let S=c.T,C=Jn(S),P=c.fin,L=[];for(let v of C){if(L.length>=5)break;if(v.cancel||v.gone||!v.tr)continue;let _=v.tr.pat.stops,A=_.indexOf(S),O=-1;for(let G=A+1;G<_.length;G++)if(P.has(_[G])){O=G;break}if(O<0||f.x&&f.x.arr!=null&&v.est<f.x.arr-.01)continue;let Y=v.est+(v.tr.pat.t[2*O]-v.tr.pat.t[2*A+1]),K=p&&p.c===v;L.push(`<li class="hr${K?" pin":""}" style="--lc:${J[v.fam]||"#6b7385"}"><span class="hrt"><b>${rt(v.est)}</b><small>${f.x&&f.x.arr!=null?v.est-f.x.arr<2?__t(356):Math.floor(v.est-f.x.arr)+" "+__t(357):""}</small></span><span class="hrd">${Ii(v.fam+" \xB7 "+v.dest,v.fam)}<small class="hro">${__t(358)} ${rt(Y)}${v.num?" \xB7 "+__t(359)+m(v.num):""}</small></span><span class="hrm">${v.dl>=1?`<em class="dl ${ki(v.dl)}">+${Math.round(v.dl)}</em>`:""}${v.plat?`${__t(269)}${m(v.plat)}</i>`:""}</span></li>`)}let U=(()=>{let v=[];for(let _ of c.cands){let A=td(Tn(o),P,[_],0,x);A&&v.push([_,A.finAt])}return v.sort((_,A)=>_[1]-A[1]),v.filter(([_,A])=>A<=v[0][1]+30||c.fixed&&_===S).slice(0,4)})(),z=U.length>1||c.fixed?`<div class="hxst"><span>${__t(360)}:</span><button type="button" data-hxf="${o.key}:" class="${c.fixed?"":"on"}">${__t(361)}</button>${U.map(([v])=>`<button type="button" data-hxf="${o.key}:${m(T[v].id)}" class="${c.fixed&&v===S?"on":""}">${m(T[v].n)}</button>`).join("")}</div>`:"";return`<div class="hxfer"><div class="hdir">\u21C4 ${__t(360)} ${Ii(T[S].n,p?p.c.fam:"")} \u2192 ${m(c.finName)}</div><ol class="hxl">${L.join("")||`<li class="hr"><span class="hrd">${__t(362)}</span></li>`}</ol>${z}</div>`}let em=new Set;function F_(o,c,f){em.has(o)||(em.add(o),hm(c,f,o))}function B_(o,c,f){let p=Tn(o);if(o===Rt){if(mt.tid)return"";if(p==null)return`${__t(363)}${Rt.err?m(Rt.err)+__t(364):__t(365)}</small></span><span class="hchev">\u27F3</span></button></div>`;if([Xe,$e].find(Pt=>Pt.st.includes(Rt.st[0])&&Rt.dist[Rt.st[0]]<1.5)||Date.now()-Rt.fix>10*6e4)return"";o.walk=_r(Rt.dist[o.st[o.i]]||0)}if(p==null){let et=Rt.st.length?$t.get(Rt.st[0]):null,Pt=o===$e?Xe:$e,Ht=et!=null&&!Pt.st.includes(Rt.st[0]);return`<div class="hplace"><div class="hhead hnew"><span class="hico">${o.ico}</span><span class="htit"><b>${o.name}</b><small>${Ht?`${__t(366)}${m(T[et].n)}</b>`:__t(367)}</small></span>${Ht?`<button type="button" class="hpick" data-hnear="${o.key}${__t(368)}`:""}<button type="button" class="hpick alt" data-hset="${o.key}">${Ht?__t(369):__t(370)}</button></div></div>`}zp(p,()=>ve(!0));let x=o===Rt?null:o===Xe?$e:Xe,S=x?Tn(x):null,C=S!=null&&S!==p?S:L_,P=S!=null&&S!==p?x===$e?__t(371):"casa":"Barcelona",L=T[p].fams,U=new Set([...L].filter(et=>dt.has(et))),z=U.size<L.size,v=!1;U.size||(U=new Set(L),z=!1,v=!0);let _=Rt.w?Math.hypot(T[p].w[0]-Rt.w[0],T[p].w[1]-Rt.w[1])*Rt.k:null,A=_!=null&&Date.now()-Rt.fix<10*6e4;o.platAt&&Date.now()-o.platAt>45*6e4&&(o.platAt=0,ii(o)),mt.tid&&o.platAt&&(o.platAt=0,ii(o));let O=o!==Rt&&!!o.platAt&&!mt.tid,Y=o===Rt||A&&_>3&&!o.goAt&&!O,K=O||o!==Rt&&A&&(_<.08&&Rt.acc<=40||_<.15&&Rt.acc<=100&&Date.now()-Rt.fix<3*6e4)&&!(o===Xe&&Rt.homeW&&Math.hypot(Rt.homeW[0]-Rt.w[0],Rt.homeW[1]-Rt.w[1])*Rt.k<.05),G=o.goAt?(Date.now()-o.goAt)/6e4:null;G!=null&&(G>60||K)&&(o.goAt=0,ii(o)),A&&o!==Rt&&Rt.fix!==o._khFix&&(o._khFix=Rt.fix,(o._kh=(o._kh||[]).filter(et=>Date.now()-et.t<6*6e4)).push({t:Date.now(),km:_}));let it=A&&o!==Rt&&_<=3&&!(o._noWay>Date.now())&&(o._kh||[]).some(et=>Date.now()-et.t>=6e4&&Date.now()-et.t<=5*6e4&&et.km-_>=.08),W=!K&&o!==Rt&&(it||!!o.goAt),Ft=W?A&&_<=3?_r(_):Math.max(0,o.walk-G):0,Te=A&&Rt.acc<=150&&o!==Rt&&_>.15&&_<=3,Qt=Te&&!W&&!K&&!Y&&_r(_)>=o.walk+5?_r(_):null,je=Jn(p),Ae=je.filter(et=>!J[et.fam]||dt.has(et.fam)||v),Se=Y||K?0:W?Ft:Qt??o.walk,xn=H.alerts.filter(et=>[...et.fams].some(Pt=>U.has(Pt))||et.stops&&et.stops.has(p)),nn=xn.some(et=>N_.test(et.es||et.txt)),fn={to:[],out:[],otros:[],all:Ae},gi=P!=="Barcelona"?new Set(x.st.map(et=>$t.get(et)).filter(et=>et!=null)):null,_i=null;if(gi&&o!==Rt){let et=tm(p,gi);if(et&&et.length){let Pt=o.xfer!=null?$t.get(o.xfer):null,Ht=Pt!=null&&et.includes(Pt)?[Pt]:et,ae=td(p,gi,Ht,Se,c);ae&&(_i=Object.assign(ae,{fin:gi,finName:T[C].n,cands:et,fixed:Pt!=null&&et.includes(Pt)}),zp(ae.T,()=>ve(!0)),C=ae.T,gi=new Set([ae.T]))}}Ae.forEach(et=>fn[Jp(p,et,C,gi)].push(et));let uc="";if(gi&&!fn.to.length&&Ae.length<je.length){let et=je.filter(Pt=>!Ae.includes(Pt)&&Jp(p,Pt,C,gi)==="to");et.length&&(fn.to=et,uc=[...new Set(et.map(Pt=>Pt.fam))].sort(B).join(", "))}let ix=et=>{if(et==="all")return __t(372);let Pt=ae=>(ae.find(vn=>vn.fam)||{}).fam;if(et==="to")return __t(373)+Ii(P==="Barcelona"?"Barcelona":T[C].n,Pt(fn.to)||[...U][0])+(()=>{let ae=z&&!uc?[...U].filter(vn=>fn.to.some(ai=>ai.fam===vn)).sort(B):[];return ae.length?`<span class="hwf" title="${__t(374)}">${ae.map(En).join("")}</span>`:""})();let Ht=[];for(let ae of fn[et])Ht.some(vn=>vn[0]===ae.dest)||Ht.push([ae.dest,ae.fam]);return Ht.length?__t(373)+Ht.slice(0,2).map(([ae,vn])=>Ii(ae,vn)).join(" "):__t(375)},qs=on.get(o.key);qs&&!je.some(et=>String(et.num)===qs&&!et.gone)&&(Rn.num=qs,Rn.until=Date.now()+90*6e4,si(o.key,null));let ia=et=>{let Pt=qs&&fn[et].find(sn=>String(sn.num)===qs&&!sn.gone);if(Pt&&Pt.cancel)return{cls:"v-miss",pin:1,x:Pt,big:__t(376),small:`${rt(Pt.est)} \xB7 ${Pt.fam}${__t(377)}${Pt.dest}${Pt.num?" \xB7 "+__t(359)+Pt.num:""}`,warn:""};let Ht=Pt||fn[et].find(sn=>!sn.cancel&&!sn.gone&&sn.est-c.min>=Se);if(!Ht){let sn=fn[et].find(pn=>!pn.cancel);return sn&&!Y?{cls:"v-miss",big:__t(378),small:`${__t(379)}${rt(sn.est)}${__t(380)}${xr(sn.est-c.min)}${__t(381)}`}:{cls:"v-no",big:__t(382),small:__t(383)}}let ae=Ht.est-c.min-Se,vn=Y||K?"v-info":W?ae<1.5?"v-warn":"v-ok":ae<1.5?"v-bad":ae<5?"v-warn":"v-ok",ai=Ht.ghost?fn[et].find(sn=>!sn.cancel&&!sn.ghost&&sn.live&&sn.est>Ht.est):null;if(Pt&&ae<0&&!Y&&!K){let sn=fn[et].find(pn=>!pn.cancel&&!pn.gone&&!pn.ghost&&pn!==Ht&&pn.est-c.min>=Se);return{cls:"v-miss",pin:1,miss:1,nxt:sn,x:Ht,ghost:!!Ht.ghost,big:__t(384),small:`${rt(Ht.est)} \xB7 ${Ht.fam}${__t(377)}${Ht.dest}${Ht.plat?__t(182)+Ht.plat:""}${Ht.num?" \xB7 "+__t(359)+Ht.num:""}`,warn:sn?`\u27A1\uFE0F ${__t(385)}: ${sn.est-c.min-Se<1?__t(386):__t(387)+" "+xr(sn.est-c.min-Se)} \xB7 ${rt(sn.est)}${sn.arr!=null?" \u2192 "+rt(sn.arr):""}${sn.plat?__t(182)+sn.plat:""}${sn.num?" \xB7 "+__t(359)+sn.num:""}`:""}}return{pin:Pt?1:0,cls:vn,ghost:!!Ht.ghost,soft:!Ht.live&&!Ht.ghost&&!Ht.unconf&&!Ht.cancel?Ht.rodLive?__t(388):__t(389):"",big:Y||K?ae<1?__t(390):__t(391)+xr(ae):W?ae<1.5?__t(392):__t(393)+xr(ae)+__t(394):ae<1.5?__t(395):__t(396)+xr(ae),warn:Ht.unconf?"\u26A0\uFE0F "+__t(397):Pt&&!Ht.live&&Ht.rodLive&&!Ht.ghost||!Ht.ghost&&Ht.noPos&&Pt?"":!Ht.ghost&&Ht.late&&Pt?__t(398):Ht.ghost?`\u26A0\uFE0F ${__t(399)}${ai?`${__t(400)}${rt(ai.est)}`:""}`:nn?__t(401):"",small:`${Ht.bus?__t(402):""}${rt(Ht.est)} \xB7 ${Ht.fam}${__t(377)}${Ht.dest}${Ht.plat?__t(182)+Ht.plat:""}${Ht.dl>=1?` \xB7 +${Math.round(Ht.dl)} min`:""}${Ht.arr!=null?`${__t(403)}${rt(Ht.arr)}`:""}${Ht.num?" \xB7 "+__t(359)+Ht.num:""}`,x:Ht}},sx=gi||new Set([C]),rx=et=>{let Pt=et.tr;if(!Pt)return null;let Ht=Pt.pat.stops,ae=Ht.indexOf(p);if(ae<0)return null;let vn=-1;for(let ai=ae+1;ai<Ht.length;ai++)if(sx.has(Ht[ai])){vn=ai;break}return vn<0?null:et.est+(Pt.pat.t[2*vn]-Pt.pat.t[2*ae+1])};fn.to.forEach(et=>{et.arr=rx(et)});let Mo=fn.out.length?"out":"otros",Ze=ia("to"),wo=ia(Mo);if(K||o===Rt&&Rt.acc<=40&&(Rt.dist[o.st[o.i]]||9)<.08){for(let et of[Ze.x,wo.x].concat(o===Rt?[ia("all").x]:[]))if(et&&on.has(o.key)&&String(on.get(o.key))===String(et.num)&&!et.cancel&&et.est-c.min<=2&&et.est-c.min>-.5){let Pt="w"+et.num+"|"+Math.round(et.sm);um.has(Pt)||(um.add(Pt),Kl(`${__t(404)}${et.fam}${__t(377)}${et.dest}`,`${Math.round(et.est-c.min)<=1?__t(405):__t(406)+Math.round(et.est-c.min)+" min"}${__t(377)}${T[p].n}${et.plat?__t(182)+et.plat:""}`))}}let Tm=E()&&c.live,Am=U.size===1,ax=et=>{let Pt=et.est-c.min;return Y?et.cancel?"cx":Pt<0?"u-miss":"u-info":et.cancel?"cx":Pt<Se?"u-miss":Pt<Se+1.5?"u-now":Pt<Se+5?"u-soon":"u-ok"},ox=et=>{if(et.gone)return`<li class="hr u-gone${et.live?" on":""}${ao(et)?" sel":""} go" data-dk="${f.push(et)-1}" title="Ya ha salido: toca para ver d\xF3nde va"><span class="hrt"><b>${rt(et.est)}${__t(407)}${xs(Math.max(1,Math.round(c.min-et.est))+" min")}</small></span><span class="hrd">${Ii((Am?"":et.fam+" \xB7 ")+et.dest,et.fam)}${__t(408)}${m(et.num)}</small></span><span class="hrm">${et.dl>=1?`<em class="dl ${ki(et.dl)}">+${Math.round(et.dl)}</em>`:""}</span></li>`;let Pt=!et.cancel&&et.est-c.min<Se,Ht=tc(et.num,"");return`<li class="hr ${ax(et)}${et.live?" on":""}${et.ghost?" gh":""}${ao(et)?" sel":""}${qs&&String(et.num)===qs?" pin":""}${mi.some(ae=>{let vn=qr(ae,t.days.indexOf(c.ymd));return vn&&String(vn.num)===String(et.num)})?" fav":""} go" style="--lc:${J[et.fam]||"#6b7385"}" data-dk="${f.push(et)-1}" title="${et.cancel?__t(376):Pt?__t(384):__t(409)}"><span class="hrt"><b>${et.cancel?"\u2715":Pt?rt(et.est):xr(et.est-c.min)}</b><small>${et.cancel?__t(147):et.late?__t(410):Pt?__t(411):et.ghost?__t(412):rt(et.est)}</small></span><span class="hrd">${et.bus?'<i class="bus" title="Autob\xFAs que sustituye al tren por obras">\u{1F68C}</i>':""}${Ii((Am?"":et.fam+" \xB7 ")+et.dest,et.fam)}${Ht.length?`<i class="cr" title="${m(Ht.map(ae=>lo(ae.kind)).join(" \xB7 "))}">${Ht.slice(0,2).map(ae=>oo[ae.kind]).join("")}</i>`:""}${et.arr!=null?`${__t(413)}${rt(et.arr)}${et.num?" \xB7 "+__t(359)+m(et.num):""}${(()=>{let ae=et.num&&Gl(et.num);return ae&&ae.n>=5&&ae.late/ae.n>=.5?` \xB7 <b class="slate">${__t(414)} \xB7 ${ae.late} ${__t(144)} ${ae.n} ${__t(141)}</b>`:""})()}</small>`:""}${et.obs?`<small class="hro">${m(et.obs)}</small>`:""}${et.unconf?`<small class="hro unc">${__t(415)}</small>`:""}</span><span class="hrm">${!et.cancel&&et.dl>=1?`<em class="dl ${ki(et.dl)}">+${Math.round(et.dl)}</em>`:""}${et.plat?`${__t(269)}${m(et.plat)}</i>`:""}</span></li>`},Eo=(et,Pt,Ht)=>`<div class="hcol"><div class="hdir">${ix(et)}${Ht?`<button type="button" class="hhide" data-hhide="${o.key}:${Ht}" title="${__t(416)}">\u2715</button>`:""}</div><div class="hv ${Pt.cls}${Pt.ghost||Pt.pin&&Pt.x&&Pt.x.noPos&&!mo([Pt.x.fam]).length?" gh":""}${Pt.x?" go":""}"${Pt.miss&&Pt.nxt&&Pt.nxt.num?` data-pinnext="${o.key}:${m(Pt.nxt.num)}" title="${__t(417)}"`:Pt.x?` data-dk="${f.push(Pt.x)-1}"`:""}><b>${Pt.big}</b>${Pt.pin?`<button type="button" class="hunpin" data-unpin="${o.key}" title="${__t(418)}">\u{1F4CC} ${__t(419)} \u2715</button>`:""}<small>${m(Pt.small)}${Qt!=null&&et!==Mo?` \xB7 <span class="nw hfar2">${Qt}\xA0min ${__t(420)}</span>`:""}${Pt.soft?` \xB7 <span class="hsoft" title="${__t(421)}">\u{1F4E1} ${m(Pt.soft)}</span>`:""}</small>${Pt.pin&&Pt.x&&Pt.x.num?(ae=>ae?`<span class="hwhere">\u{1F4CD} ${m(ae)}</span>`:"")(rc(Pt.x.num)):""}${Pt.warn?`<span class="hvw">${m(Pt.warn)}</span>`:""}</div><ol>${fn[et].slice(0,(o.more?et==="all"||o.hide?20:10:et==="all"?7:o.hide?8:4)+fn[et].filter(ae=>ae.gone).length).map(ox).join("")||"<li><span>\u2014</span></li>"}</ol></div>`;if(o===Rt){let et=ia("all");var lx=et.x?`<span class="nw">${et.big}</span> \xB7 <span class="nw"><b>${rt(et.x.est)}</b> ${m(et.x.fam)}${__t(422)}${m(et.x.dest)}${et.x.plat?'<span class="nw">'+__t(182)+m(et.x.plat)+"</span>":""}`:et.big}let Qe=_i&&Ze.x&&Ze.x.arr!=null?U_(_i.T,Ze.x.arr,_i.fin):null;if(Qe){let et=o._xc;et&&et.leg===String(Ze.x.num)&&et.conn!==String(Qe.c.num)&&et.est<Qe.c.est&&et.live?(Qe.lost=!0,Qe.missed=et.est):(!et||et.leg!==String(Ze.x.num)||!et.live||et.conn===String(Qe.c.num))&&(o._xc={leg:String(Ze.x.num),conn:String(Qe.c.num),est:Qe.c.est,live:!!(H.delays&&Date.now()-(o._xt||(o._xt=Date.now()))>3e4)})}Qe&&(nc.set(T[_i.T].id,{fam:Qe.c.fam,est:Qe.c.est,plat:Qe.c.plat,lost:Qe.lost}),Qe.lost&&on.get(o.key)===String(Ze.x.num)&&F_("xf"+Ze.x.num+"|"+Qe.c.num,`\u21C4 ${__t(423)} ${T[_i.T].n}`,`${__t(424)}: ${Qe.c.fam} ${rt(Qe.c.est)} \u2192 ${rt(Qe.fin)}${Qe.c.plat?" \xB7 v\xEDa "+Qe.c.plat:""}`));let gd=Qe?`<br><span class="nw hxf ${Qe.lost?"xbad":Qe.m<4?"xwarn":"xok"}">\u21C4 ${Qe.lost?`${__t(425)} ${rt(Qe.missed)} \xB7 ${__t(184)} `:`${m(T[_i.T].n)} \xB7 `}${En(Qe.c.fam)} <b>${rt(Qe.c.est)}</b> \u2192 <b>${rt(Qe.fin)}</b>${Qe.lost?"":` \xB7 ${Math.floor(Qe.m)} ${__t(426)}`}</span>`:_i?`<br><span class="nw hxf xbad">\u21C4 ${__t(427)} ${m(T[_i.T].n)}</span>`:"",cx=o===Rt?lx:_i&&Ze.x?`<span class="nw">${Ze.big}${Ze.x.plat?__t(182)+m(Ze.x.plat):""}</span> \xB7 <span class="nw"><b>${rt(Ze.x.est)}</b>${Ze.x.arr!=null?` \u2192 ${m(T[_i.T].n)} <b>${rt(Ze.x.arr)}</b>`:""}</span>${gd}`:Ze.x?`<span class="nw">${Ze.big}${Ze.x.plat?__t(182)+m(Ze.x.plat):""}</span> \xB7 <span class="nw"><b>${rt(Ze.x.est)}</b>${Ze.x.arr!=null?`${__t(429)}${rt(Ze.x.arr)}</b>`:""}${__t(428)}${m(P)}</span>`:__t(430)+m(P),Ge=o===Rt?(et=>et.pin?et:null)(ia("all")):Ze.pin?Ze:wo.pin?wo:null;Ge&&Ge.x&&on.has(o.key)&&dm(Ge,T[p].n);let ux=Ge?o===Rt?"all":Ge===Ze?"to":Mo:"",sa=!!(Ge&&(Ge.ghost||Ge.x.noPos&&!mo([Ge.x.fam]).length||Ge.x.cancel)),_d=!!(Ge&&Ge.miss),ra=sa?fn[ux].find(et=>!et.cancel&&!et.ghost&&!et.gone&&et.est>Ge.x.est-.01&&et!==Ge.x&&et.est-c.min>=(Y||K?0:Se)):null,hx=_d?`<span class="nw">${__t(431)} <b>${rt(Ge.x.est)}</b></span>${Ge.nxt?`<br><span class="nw hnx">${__t(424)} <b>${rt(Ge.nxt.est)}</b>${Ge.nxt.arr!=null?` \u2192 <b>${rt(Ge.nxt.arr)}</b>`:""}</span>`:""}`:"",dx=sa?`<span class="nw">\u26A0\uFE0F ${Ge.x.cancel?__t(376):Ge.ghost?__t(432):__t(433)}</span>${Ge.x.cancel?"":` \xB7 <span class="nw"><b>${rt(Ge.x.est)}</b>${Ge.x.arr!=null?` \u2192 <b>${rt(Ge.x.arr)}</b>`:""}</span>`}${ra?` \xB7 <span class="nw">${__t(184)} <b>${rt(ra.est)}</b>${ra.arr!=null?` \u2192 <b>${rt(ra.arr)}</b>`:""}${ra.plat?__t(182)+m(ra.plat):""}</span>`:""}`:"";return`<div class="hplace ${o.open?"open":""}${Ge?" pinned":""}${sa?" pgh":""}"><button type="button" class="hhead" data-ht="${o.key}"><span class="hico">${o.ico}</span><span class="htit"><b>${m(T[p].n)}${Ge&&Ge.x.num?`<i class="hpn">\u{1F4CC} ${m(Ge.x.num)}</i>`:""}</b>${o.open?_i&&gd?`<small class="nofit">${gd.replace(/^<br>/,"")}</small>`:"":`<small class="c${_d||sa&&Ge.x.cancel?"bad":sa?"warn":nn?"bad":Ze.cls.slice(2)}">${sa?dx:_d?hx:cx}</small>${Ge&&Ge.x&&Ge.x.num?(et=>et?`<small class="nofit hwh2">\u{1F4CD} ${m(et)}</small>`:"")(rc(Ge.x.num)):""}`}${o.open?"":(et=>{if(!et||et.num==null)return"";let Pt=t.days.indexOf(c.ymd),Ht=et.tr,ae=Ht?Ht.t0+Ht.pat.t[1]-(Ht.day===Pt-1?1440:Ht.day===Pt+1?-1440:0)+(et.dl||0):null,vn=!et.live&&!et.ghost&&!et.unconf&&ae!=null&&ae>c.min-1,ai=et.cancel?["bad",__t(376)]:et.live?["ok",__t(434)]:vn?["wait",__t(435)]:["warn",__t(432)];return`<small class="nofit hrel ${ai[0]}"><b>${ai[1]}</b></small>`})(Ge&&Ge.x||Ze.x)}</span><span class="hchev">\u25BE</span></button>`+(o.open?`
      <div class="hbody${o===Rt||o.hide==="out"||o.hide==="to"?" r1":""}">
        ${o===Rt?`<div class="hwalk">\u{1F4CD} A ${(()=>{let et=Rt.dist[o.st[o.i]]||0;return et<1?Math.round(et*100)*10+" m":et.toFixed(1).replace(".",",")+" km"})()}${__t(437)}${o.walk}${__t(438)}`:""}
        ${O?`<div class="hwalk away">${__t(440)}<a data-hplat="${o.key}${__t(439)}`:K&&!mt.tid?`${__t(441)}${o.key}${__t(442)}`:W?`${__t(443)}${Math.round(Ft)} min</b>${A&&_<=3?__t(444):""} \xB7 <a data-hgo="${o.key}:0">${__t(445)}</a></div>`:""}${Y&&o!==Rt?`<div class="hwalk away hawg"><span class="hawt">\u{1F4CD} ${__t(446)} ${_<10?_.toFixed(1).replace(".",","):Math.round(_)} km: ${__t(447)}</span>${nd(o)}</div>`:""}${Y&&o===Rt?`<div class="hwalk hgw">${nd(o)}</div>`:""}<div class="hwalk"${Y?" hidden":""}>${(()=>{let et=qs||(()=>{let ae=(fn.to.length?fn.to:Ae).filter(pn=>pn.num!=null&&!pn.cancel),vn=ae.filter(pn=>pn.tr&&pn.tr.pat.stops[0]===p&&pn.est>=c.min-1&&pn.est<=c.min+3).sort((pn,aa)=>pn.est-aa.est);if(vn[0])return vn[0].num;let ai=[...ae];if(gi&&o!==Rt){let pn=t.days.indexOf(c.ymd),aa=new Set(ae.map(xd=>String(xd.num))),Cm=(xd,fx)=>{for(let is of xd||[]){if(aa.has(String(is.num))||J[is.fam]&&!dt.has(is.fam)&&!v)continue;let vd=is.pat.stops,hc=vd.indexOf(p);if(hc<0||hc===vd.length-1||!vd.slice(hc+1).some(px=>gi.has(px)))continue;let Rm=H.delays&&H.delays.get(is.tid),yd=is.t0+is.pat.t[2*hc+1]-fx+(typeof Rm=="number"?Math.max(0,Rm/60):0);yd>c.min+1||yd<c.min-15||(aa.add(String(is.num)),ai.push({num:is.num,est:yd,tr:is}))}};pn>=0&&(Cm(st[pn],0),pn>0&&Cm(st[pn-1],1440))}let sn=ai.filter(pn=>pn.est<=c.min+1&&pn.est>=c.min-15).sort((pn,aa)=>aa.est-pn.est);return sn[0]?sn[0].num:Ze&&Ze.x&&Ze.x.num})(),Pt=et!=null?je.find(ae=>String(ae.num)===String(et)):null,Ht=Zh(Pt,c);return et!=null&&!mt.tid?`<button type="button" class="hgo hboard${Ht?"":" off"}" data-hboard="${m(String(et))}"${Ht?"":` data-hbwhen="${Pt?rt(Pt.est):""}"`}>\u{1F686} ${Ht&&et?`${__t(448)} ${m(String(et))}`:__t(449)}</button>`:""})()}${K||mt.tid?"":`<button type="button" class="hgo hplat" data-hplat="${o.key}:1">${__t(450)}</button>`}${nd(o)}</div>
        <div class="hcfgp"${o._cfg?"":" hidden"}><div class="hcl">${__t(451)}</div><div class="hst">${o.st.map((et,Pt)=>{let Ht=$t.get(et);return Ht==null?"":`<button type="button" data-hs="${o.key}:${Pt}" class="${Pt===o.i?"on":""}">${m(T[Ht].n.replace(/^Barcelona[ -]+(?=\S)/,"")||T[Ht].n)}${Pt===o.i?" \u2713":""}</button>`}).join("")}</div>${o!==Rt?`<div class="hwrow"><div><div class="hcl">${__t(452)}</div><div class="hstep2"><button type="button" data-hw="${o.key}:-1" aria-label="\u2212">\u2212</button><b>${o.walk} min</b><button type="button" data-hw="${o.key}:1" aria-label="+">+</button></div></div>${Te?`<div class="hposc"><div class="hcl">\u{1F4CD} ${__t(453)}</div><div class="hpv"><span><b>${_r(_)} min</b><small>${_<1?Math.round(_*100)*10+" m":_.toFixed(1).replace(".",",")+" km"}</small></span>${_r(_)!==o.walk?`<button type="button" data-hwset="${o.key}:${_r(_)}">${__t(454)}</button>`:""}</div></div>`:""}</div>`:""}<a class="hcfgmap" data-hcfgmap="${p}">\u2139\uFE0F ${__t(455)}</a></div>
        ${(()=>{let et=mi.filter(Pt=>o.st.includes(Pt.sid));return et.length?`<div class="hfav">${et.map(Pt=>{let Ht=qr(Pt,t.days.indexOf(c.ymd)),ae=Ht&&Ae.find(vn=>String(vn.num)===String(Ht.num));return`\u2B50 <b>${Pt.t}</b> ${m(Pt.fam)} ${ae?ae.cancel?__t(456):ae.gone?__t(266):ae.dl>=1?`<em class="dl ${ki(ae.dl)}">+${Math.round(ae.dl)}${__t(457)}${rt(ae.est)}`:__t(458):__t(459)}`}).join("<br>")}</div>`:""})()}
        ${z&&uc?`${__t(460)}${[...U].sort(B).map(En).join(" ")}${__t(461)}${P}${__t(462)}${uc}${__t(463)}`:v?`${__t(464)}${[...dt].sort(B).slice(0,3).map(En).join(" ")}${__t(465)}`:""}
        ${xn.length?`<div class="hal ${nn?"bad":""}${cd.v?" open":""}" data-halx>\u26A0\uFE0F ${ho(xn[0])} ${m(xn[0].txt)} <small>${fo(xn[0])}</small>${xn.length>1?` <a data-hal>+${xn.length-1}${__t(466)}`:""}</div>`:`${__t(467)}${[...U].sort(B).join(", ")}</div>`}
        ${(()=>{let et=o.st.flatMap(Pt=>tc("",Pt));return et.length?`<div class="hcr">${et.slice(0,3).map(Pt=>`<p><span><span class="cname">${oo[Pt.kind]} <b>${m(lo(Pt.kind))}</b></span><small class="cmeta">${Pt.up>1?(Pt.up>999?"999+":Pt.up)+" "+__t(321)+" \xB7 ":""}${Fp(Pt)}</small></span>${Jr.has(Pt.id)?`<small class="hcrok">\u2713 ${__t(322)}</small>`:`<span class="hcrv"><button type="button" data-rv="${Pt.id}:1" title="${__t(323)}">\u2713 ${__t(324)}</button><button type="button" data-rv="${Pt.id}:-1" title="${__t(325)}">\u2715 ${__t(326)}</button></span>`}</p>`).join("")}</div>`:""})()}
        ${o===Rt?`<div class="hcols one">${Eo("all",ia("all"))}</div>`:o.hide==="out"?`<div class="hcols one">${Eo("to",Ze)}</div><a class="hshow" data-hshow="${o.key}${__t(468)}`:o.hide==="to"?`<div class="hcols one">${Eo(Mo,wo)}</div><a class="hshow" data-hshow="${o.key}${__t(468)}`:`<div class="hcols">${Eo("to",Ze,"to")}${Eo(Mo,wo,"out")}</div>`}
        ${_i?O_(o,_i,Ze,Qe,c):""}
        ${Ae.length>(o===Rt?7:8)?`<button type="button" class="hmore" data-hmore="${o.key}">${o.more?__t(123):__t(469)}</button>`:""}
        <div class="hsrc"><span class="hsrcT" hidden title="${Tm?Bt.get(T[p].id)?.d?__t(470):__t(471):__t(472)} \xB7 \u25CF = ${__t(473)}">${Tm?Bt.get(T[p].id)?.d?__t(474):__t(475):__t(265)}</span><a data-hmap="${p}${__t(436)}${o===Rt?__t(476):`<a data-hset="${o.key}${__t(477)}`}${o===$e?`${__t(478)}`:""}</div>
      </div>`:"")+"</div>"}let ed={v:(()=>{try{return localStorage.getItem("rod_cfgseen")==="1"}catch{return!1}})()},k_='<span class="ico" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M19.42 10.34 L21.90 10.60 L21.90 13.40 L19.42 13.66 L18.42 16.07 L19.99 18.02 L18.02 19.99 L16.07 18.42 L13.66 19.42 L13.40 21.90 L10.60 21.90 L10.34 19.42 L7.93 18.42 L5.98 19.99 L4.01 18.02 L5.58 16.07 L4.58 13.66 L2.10 13.40 L2.10 10.60 L4.58 10.34 L5.58 7.93 L4.01 5.98 L5.98 4.01 L7.93 5.58 L10.34 4.58 L10.60 2.10 L13.40 2.10 L13.66 4.58 L16.07 5.58 L18.02 4.01 L19.99 5.98 L18.42 7.93Z"/><circle cx="12" cy="12" r="3"/></svg></span>',nd=o=>`<button type="button" class="hgo hcfg${o._cfg?" on":""}${ed.v?"":" new"}" data-hcfg="${o.key}" title="${__t(479)}" aria-label="${__t(479)}">${k_}</button>`,zi={on:(()=>{try{return localStorage.getItem("rod_push")==="1"}catch{return!1}})(),busy:!1},nm=/iPhone|iPad|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,im=()=>matchMedia("(display-mode: standalone)").matches||navigator.standalone===!0,vr=new Set((()=>{try{return JSON.parse(localStorage.getItem("rod_aloff")||"[]")}catch{return[]}})()),ic=()=>{let o=new Set;return[...Xe.st,...$e.st].forEach(c=>{let f=$t.get(c);f!=null&&T[f].fams.forEach(p=>o.add(p))}),[...o].sort(B)},xo=()=>({stations:[...Xe.st,...$e.st],lines:ic().filter(o=>!vr.has(o))}),$_=o=>Uint8Array.from(atob(o.replace(/-/g,"+").replace(/_/g,"/")+"===".slice((o.length+3)%4)),c=>c.charCodeAt(0));async function sm(){return!("serviceWorker"in navigator)||!("PushManager"in window)||location.protocol!=="https:"?null:await navigator.serviceWorker.getRegistration()||navigator.serviceWorker.register("./sw.js")}async function rm(o){let f=await(await fetch(ce()+"/push/subscribe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sub:o.toJSON(),...xo()})})).json();if(!f.ok)throw new Error(f.err||"error")}function id(){let o=Tn(Xe),c=Tn($e);if(o==null||c==null)return o!=null?Xe:c!=null?$e:null;if(Rt.w&&Date.now()-Rt.fix<3*36e5){let f=p=>Math.hypot(T[p].w[0]-Rt.w[0],T[p].w[1]-Rt.w[1]);return f(o)<=f(c)?Xe:$e}return new Date().getHours()<13?Xe:$e}function am(o){let c=id(),f=c===Xe?$e:Xe,p=c&&Tn(c),x=f&&Tn(f);if(p==null||x==null)return!0;let S=(o.es||"")+" "+(o.txt||""),C=t.days.indexOf(te().ymd),P=te(),L=[...new Set([...S.matchAll(/\btr(?:en|ain)s?\s*(?:n[º°o.]\s*)?(\d{4,6})\b/gi)].map(z=>z[1]))];if(L.length)return L.some(z=>{let v=Rs(z);if(!v)return!1;let _=v.pat.stops,A=_.indexOf(p),O=_.indexOf(x);if(A<0||O<0||A>O)return!1;let Y=v.t0+v.pat.t[2*A+1];return Y>P.min-60&&Y<P.min+150});let U=S.match(/(?:destino|destinaci[óo]|direcci[óo]n?|sentido|sentit|cap a|hacia)\s+(?:a\s+|de\s+)?([^.,;:()]{3,40})/i);if(U){let z=U[1].toLowerCase(),v=T.findIndex(_=>_.n&&z.startsWith(_.n.toLowerCase()));if(v>=0){let _=(st[C]||[]).find(A=>{let O=A.pat.stops;return O[O.length-1]===v&&O.includes(p)&&O.includes(x)});if(_){let A=_.pat.stops;return A.indexOf(p)<A.indexOf(x)}}}return!0}let Zn={on:(()=>{try{return localStorage.getItem("rod_ln")==="1"}catch{return!1}})(),seen:null};function z_(){let{lines:o,stations:c}=xo(),f=new Set(o),p=new Set(c.map(C=>$t.get(C))),x=H.alerts.filter(C=>([...C.fams].some(P=>f.has(P))||[...C.stops||[]].some(P=>p.has(P)))&&am(C));if(!Zn.seen){try{Zn.seen=new Set(JSON.parse(localStorage.getItem("rod_lnseen")||"[]"))}catch{Zn.seen=new Set}if(!Zn.seen.size){x.forEach(C=>Zn.seen.add(C.id+"|"+C.txt.length)),om();return}}let S=x.filter(C=>!Zn.seen.has(C.id+"|"+C.txt.length));if(S.length&&(S.forEach(C=>Zn.seen.add(C.id+"|"+C.txt.length)),om(),!(!Zn.on||!("Notification"in window)||Notification.permission!=="granted")))for(let C of S.slice(0,3)){let P=(C.src==="Adif"?__t(337):"Rodalies")+(C.fams.size?" \xB7 "+[...C.fams].sort(B).slice(0,4).join(" "):""),L={body:C.txt.slice(0,240),icon:"icons/icon-192.png",tag:"rod-"+C.id};(navigator.serviceWorker&&navigator.serviceWorker.getRegistration?navigator.serviceWorker.getRegistration():Promise.resolve(null)).then(U=>U?U.showNotification(P,L):new Notification(P,L)).catch(()=>{try{new Notification(P,L)}catch{}})}}function om(){try{localStorage.setItem("rod_lnseen",JSON.stringify([...Zn.seen].slice(-400)))}catch{}}async function V_(){if(Zn.on)Zn.on=!1,ke(__t(480));else{if(!("Notification"in window)){ke(nm&&!im()?__t(481):__t(482));return}if(await Notification.requestPermission()!=="granted"){ke(__t(483));return}Zn.on=!0,ke(__t(484)+xo().lines.join(", ")+__t(485))}try{localStorage.setItem("rod_ln",Zn.on?"1":"")}catch{}ve(!0)}async function H_(){if(!H.repOk||document.documentElement.classList.contains("cap"))return V_();if(!zi.busy){zi.busy=!0;try{let o=await sm();if(!o){ke(nm&&!im()?__t(486):__t(487));return}if(await navigator.serviceWorker.ready,zi.on){let c=await o.pushManager.getSubscription();c&&(fetch(ce()+"/push/unsubscribe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({endpoint:c.endpoint})}).catch(()=>{}),await c.unsubscribe().catch(()=>{})),zi.on=!1,ke(__t(480))}else{if(!H.url){ke(__t(488));return}if(await Notification.requestPermission()!=="granted"){ke(__t(483));return}let f=(await Lt(ce(),"/push/key")).key,p=await o.pushManager.getSubscription()||await o.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:$_(f)});await rm(p),zi.on=!0,ke(__t(489)+xo().lines.join(", "))}try{localStorage.setItem("rod_push",zi.on?"1":"")}catch{}}catch(o){ke(__t(490)+(o.message||o))}finally{zi.busy=!1,ve(!0)}}}async function lm(){if(zi.on)try{let o=await sm(),c=o&&await o.pushManager.getSubscription();c&&await rm(c)}catch{}}let sd=!1,cm="";function rd(){let o=Mt?"t"+(Mt.tid||Mt.vtid):me>=0?"s"+me:_e?"a":Ot?"n":"";o!==cm&&(sd=!1,cm=o);let c=innerWidth<=640&&!!o&&!sd&&!document.documentElement.classList.contains("tabmode"),f=y("#inf");f.classList.contains("compact")!==c&&(f.classList.toggle("compact",c),requestAnimationFrame(()=>{if(d.style.display!=="none"){let p=f.getBoundingClientRect().bottom;d.style.top=Math.round(p+8)+"px",d.style.maxHeight=Math.max(140,y("#rc").getBoundingClientRect().top-p-16)+"px"}}))}let um=new Set,ad=(()=>{let o=St(new Date).ymd;try{let c=JSON.parse(localStorage.getItem("rod_pn")||"{}");return c.d===o?c:{d:o}}catch{return{d:o}}})();function hm(o,c,f){if(!(!(Zn.on||zi.on)||!("Notification"in window)||Notification.permission!=="granted")){if(!document.hidden){ke(o+" \xB7 "+c);return}(navigator.serviceWorker&&navigator.serviceWorker.getRegistration?navigator.serviceWorker.getRegistration():Promise.resolve(null)).then(p=>p?p.showNotification(o,{body:c,tag:f,icon:"icons/andana-192.png"}):new Notification(o,{body:c})).catch(()=>{try{new Notification(o,{body:c})}catch{}})}}function dm(o,c){let f=o.x,p=te();if(!p.live||f.gone||f.est<p.min-1)return;let x=f.num+"|"+Math.round(f.sm),S=ad[x]||{},C=`${__t(491)} ${rt(f.sm)}`,P=`${f.fam} \u2192 ${f.dest}`,L="",U="";f.cancel?S.c||(S.c=1,L=`\u26A0\uFE0F ${C} ${__t(190)}`,U=`${P}. ${__t(492)}`):o.ghost&&!S.g?(S.g=1,L=`\u26A0\uFE0F ${C} ${__t(493)}`,U=`${P}: ${__t(494)}`):f.dl>=5&&f.dl>=(S.dl||0)+5?(S.dl=Math.round(f.dl),L=`\u23F3 ${C} ${__t(495)} +${S.dl} min`,U=`${P}: ${__t(496)} ${c} ${__t(497)} ${rt(f.est)}.`):f.plat&&S.p&&S.p!==String(f.plat)&&(L=`${__t(498)}: ${C}`,U=`${P}: ${__t(499)} ${f.plat} ${__t(500)} ${S.p}).`),f.plat&&(S.p=String(f.plat)),ad[x]=S;try{localStorage.setItem("rod_pn",JSON.stringify(ad))}catch{}L&&hm(L,U,"pin-"+f.num)}let Kr={open:!1,seen:new Set((()=>{try{return JSON.parse(localStorage.getItem("rod_seen")||"[]")}catch{return[]}})())};document.addEventListener("click",o=>{let c=o.target.closest&&o.target.closest("[data-nowx]");if(!c||o.target.closest("a"))return;let f=c.dataset.nowx?c.dataset.nowx.split("|"):[];if(f.length){if(c.classList.contains("col"))Kr.open=!0;else{Kr.open=!1,f.forEach(p=>Kr.seen.add(p));try{localStorage.setItem("rod_seen",JSON.stringify([...Kr.seen].slice(-200)))}catch{}}ve(!0)}});function G_(o){let c=o.lines;if(!c.length&&Rt.st&&Rt.st.length){let v=new Set;Rt.st.forEach(_=>{let A=$t.get(_);A!=null&&T[A].fams.forEach(O=>v.add(O))}),c=[...v].sort(B)}let f=new Set(c),p=H.alerts.filter(v=>!f.size||[...v.fams].some(_=>f.has(_))),x=`<a class="hwa" href="https://www.whatsapp.com/channel/0029Vav4hGTId7nPenKMuo2C" target="_blank" rel="noopener" title="${__t(173)}" aria-label="WhatsApp"><svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path fill="#25d366" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2z"/><path fill="#fff" d="M8.6 7.2c.2-.4.4-.4.7-.4h.5c.2 0 .4 0 .6.5l.8 1.9c.1.2.1.4 0 .6l-.5.7c-.1.2-.2.3 0 .6.5.8 1.1 1.5 1.9 2 .3.2.4.1.6 0l.7-.8c.2-.2.4-.2.6-.1l1.8.9c.3.1.4.2.4.4 0 .5-.2 1.2-.8 1.6-.6.4-1.5.6-2.9 0-1.6-.7-3-2-3.9-3.4-.8-1.2-1.1-2.4-.5-3.5z"/></svg></a>`,S=p.reduce((v,_)=>Math.max(v,_o(_)),0),C=S===3?"\u26D4 ":S===2?"\u26A0\uFE0F ":"\u2139\uFE0F ",P=`<div class="hnowh"><span class="hnowl"><b>${p.length?C+p.length+(p.length===1?__t(339):__t(340)):__t(501)}</b>${c.length?c.map(En).join(""):""}</span>${x}</div>`,L=p.filter(v=>!Kr.seen.has(v.id)),U=p.length&&(Kr.open||L.length>0),z=p.reduce((v,_)=>Math.max(v,_o(_)),0);return`<div class="hnow${z===3?" bad":z===2?" warn":z===1?" info":""}${p.length&&!U?" col":""}" data-nowx="${m(p.map(v=>v.id).join("|"))}">${P}${mm(o,!0)}${U?p.slice().sort((v,_)=>_o(_)-_o(v)).map(v=>`<p class="sv${_o(v)}">${ho(v)} ${m(v.txt)} <small>${fo(v)}</small></p>`).join("")+`<small class="hnowt">${__t(502)}</small>`:""}</div>`}let on=new Map((()=>{try{let o=St(new Date).ymd;return JSON.parse(localStorage.getItem("rod_pin")||"[]").filter(c=>c[2]===o).map(c=>[c[0],c[1]])}catch{return[]}})());function sc(){if(!document.documentElement.classList.contains("tabmode"))return;let o=[...document.querySelectorAll("#home .hhead .htit small:not(.nofit)")],c=(p,x)=>{p.style.fontSize=x===1?"":(p._f0*x).toFixed(1)+"px",p.querySelectorAll("b").forEach(S=>S.style.fontSize=x===1?"":(p._b0*x).toFixed(1)+"px")},f=1;for(let p of o){if(p.style.whiteSpace="",c(p,1),!p.clientWidth)continue;p._f0=parseFloat(getComputedStyle(p).fontSize);let x=p.querySelector("b");for(p._b0=x?parseFloat(getComputedStyle(x).fontSize):0;p.scrollWidth>p.clientWidth+1&&f>.86;)f-=.02,c(p,f)}if(f<1)for(let p of o)p._f0&&c(p,f);for(let p of o)p.scrollWidth>p.clientWidth+1&&(p.style.whiteSpace="normal")}addEventListener("resize",()=>{try{sc()}catch{}});let fm=(o,c)=>{let f=o==="work"?$e:o==="near"?Rt:Xe,p=f&&Tn(f);return p==null?null:Jn(p).find(x=>String(x.num)===String(c))||null};function si(o,c){if(c&&!on.size&&!mt.tid)try{let f=+(localStorage.getItem("rod_lptip")||0);f<2&&(localStorage.setItem("rod_lptip",f+1),setTimeout(()=>ke(__t(503)),600))}catch{}if(c){for(let f of[...on.keys()])f!==o&&on.delete(f);on.set(o,c)}else on.delete(o);try{let f=St(new Date).ymd;localStorage.setItem("rod_pin",JSON.stringify([...on].map(([p,x])=>[p,x,f])))}catch{}}let pm=o=>{let c=o&&o.ts?Date.now()/1e3-o.ts:H.okVP?(Date.now()-H.okVP)/1e3:-1;return c>=0?" \xB7 "+xs(Ch(Math.round(c))):""};function rc(o){let c=re.find(S=>S.tr&&String(S.tr.num)===String(o));if(!c){let S=Rs(o),C=te(),P=t.days.indexOf(C.ymd);if(!S)return"";let L=S.day===P-1?1440:0,U=S.t0+S.pat.t[1]-L;return U>C.min?__t(504)+T[S.pat.stops[0]].n+" ("+rt(U)+")":""}let f=c.tr,p=S=>T[f.pat.stops[S]].n;if(c.real){let S=c.v;return S.pre?__t(505):S.atStop>=0&&S.before?__t(506)+p(S.atStop):S.atStop>=0&&(S.st==="STOPPED_AT"||c.stop==="st")?Oe()?__t(507)+p(S.atStop):__t(508)+p(S.atStop)+pm(S):!Oe()&&S.next>0?__t(509)+p(S.next-1)+__t(510)+p(S.next)+pm(S):S.atStop>=0&&S.next>S.atStop?__t(511)+p(S.atStop)+__t(512)+p(S.next):S.atStop>=0?__t(513)+p(S.atStop):c.stop==="via"&&S.next>0?"\u23F8 "+__t(514)+p(S.next-1)+__t(510)+p(S.next):S.next>0?__t(228)+p(S.next-1)+__t(510)+p(S.next):S.next===0?__t(373)+p(0):""}let x=c.p&&c.p.next;return x>0?__t(515)+p(x-1)+__t(510)+p(x):""}let vo={k:"",v:null};function W_(o){let c=te(),f=t.days.indexOf(c.ymd);if(f<0||!o.length)return null;let p=id(),x=(p&&Tn(p))??Tn(Xe)??Tn($e),S=c.ymd+o.join()+x;if(vo.k===S)return vo.v;vo.k=S;let C=new Set(o),P=x!=null?v=>st[v].filter(_=>{let A=_.pat.stops.indexOf(x);return A>=0&&A<_.pat.stops.length-1}).length:v=>st[v].filter(_=>C.has(_.fam)).length,L=v=>{let _=new Date(+v.slice(0,4),+v.slice(4,6)-1,+v.slice(6)).getDay();return _===0?0:_===6?6:1},U=P(f),z=Math.max(0,...t.days.map((v,_)=>_!==f&&L(v)===L(c.ymd)?P(_):0));return vo.v=z>=20&&U<z*.8?{n:U,ref:z,pct:Math.round(U/z*100),st:x!=null?T[x].n:""}:null,vo.v}function mm(o,c){let f=o.lines||[],p=W_(f);if(!p)return"";let x=H.alerts.some(S=>[...S.fams].some(C=>f.includes(C))&&/huelga|vaga\b|servicios? m[ií]nimos|serveis m[ií]nims/i.test((S.es||"")+" "+S.txt));return c?`<div class="hnowred">\u{1F5D3}\uFE0F <b>${x?__t(516):__t(517)}</b>: ${p.st?`${__t(518)} ${m(p.st)} ${p.n} ${__t(519)} ${p.ref} ${__t(520)}`:`${__t(521)} ${p.n} ${__t(519)} ${p.ref} ${__t(520)}`} (${p.pct} %). ${x?__t(522):__t(523)}</div>`:`<div class="hred">\u{1F5D3}\uFE0F <b>${x?__t(524):__t(525)}</b> \xB7 ${__t(526)}: ${p.st?`${__t(527)} ${m(p.st)} ${__t(528)} ${p.n} ${__t(144)} ${p.ref} ${__t(71)}`:`${p.n} ${__t(144)} ${p.ref} ${__t(529)} ${f.join(", ")}`} (${p.pct} % ${__t(530)}).</div>`}function X_(o){let c=mo(o.lines||[]);if(!c.length)return"";let f=[Xe,$e].some(p=>{let x=Tn(p),S=x!=null&&Bt.get(T[x].id);return S&&S.d&&Array.isArray(S.d.trains)&&!S.d.trains.length});return`<div class="hnopos">\u{1F4E1} <b>${__t(531)} ${c.join(", ")}</b> ${__t(532)}${f?" \xB7 "+__t(533):""}: ${__t(534)}</div>`}function q_(o){if(!Rt.w||mt.lock||mt.manual&&Date.now()<mt.manual)return[];let c=mt.fixes[mt.fixes.length-1];if(!c||Date.now()-c.t>6e4||c.acc!=null&&c.acc>150)return[];let f=Rt.k||1,p=C=>Math.hypot(C.p.w[0]-Rt.w[0],C.p.w[1]-Rt.w[1])*f,x=re.find(C=>C.tr===o&&C.p&&C.p.w);if(!x||p(x)<1.5)return[];let S=x.p.next>=0?o.pat.stops[x.p.next]:null;return re.filter(C=>C.tr&&C.tr!==o&&C.p&&C.p.w&&p(C)<1&&(S==null||C.p.next>=0&&C.tr.pat.stops.indexOf(S)>=C.p.next)).sort((C,P)=>Math.hypot(C.p.w[0]-Rt.w[0],C.p.w[1]-Rt.w[1])-Math.hypot(P.p.w[0]-Rt.w[0],P.p.w[1]-Rt.w[1])).slice(0,2).map(C=>C.tr)}function Y_(o){if(mt.tid)return"";let c=null,f=null;if(on.size||(Nt&&Nt.num!=null&&(c=String(Nt.num)),!c))return"";let p=Rs(c);if(!p)return"";let x=p.pat.stops,S=f?f==="work"?$e:f==="near"?Rt:Xe:null,C=S?Tn(S):null,P=C!=null?Jn(C).find(K=>String(K.num)===c):null,L=S===Xe?$e:S===$e?Xe:null,U=L?Tn(L):null,z=C!=null?x.indexOf(C):-1,v=xe&&xe.num===c?x.indexOf($t.get(xe.sid)):-1;v<=z&&U!=null&&(v=x.indexOf(U,z+1));let _=P&&z>=0&&v>z?P.est+(p.pat.t[2*v]-p.pat.t[2*z+1]):null,A=P?Math.round(P.est-o.min):null,O=rc(c),Y=P?`${P.gone?__t(535):__t(536)} ${m(T[C].n)} \xB7 <b>${rt(P.est)}</b>${P.gone?"":` (${A<=0?__t(317):A+" min"})`}${P.plat?__t(182)+m(P.plat):""}${_!=null?` \u2192 ${m(T[x[v]].n)} <b>${rt(_)}</b>`:""}`:m(O||"");return`<div class="hplace onbc chosen"><div class="hhead"><span class="hico">\u{1F4CC}</span><span class="htit"><b>${En(p.fam)} ${__t(359)}${m(c)} <span class="hlk">${__t(537)}</span></b><small class="nofit">${Y}</small>${P&&O?`<small class="nofit">\u{1F4CD} ${m(O)}</small>`:""}<span class="chbtn"><button type="button" class="hgo hboard" data-hboard="${m(c)}">\u{1F686} ${__t(449)}</button><button type="button" class="chmap" data-chmap="${m(c)}">\u{1F5FA}\uFE0F ${__t(538)}</button></span></span><button type="button" class="hpn onbx" data-unchoose="${m(c)}" aria-label="${__t(253)}">\u2715</button></div></div>`}function J_(o){let c;try{if(c=Z_(o),c!=null)return c}catch(x){console.error(x)}let f=mt.tid?Rs(mt.tid):null,p=f?`${__t(539)} ${m(T[f.pat.stops[0]].n)} \xB7 ${rt(f.t0)}`:"";return mt.tid?`<div class="hplace onbc"><div class="hhead"><span class="hico">\u{1F686}</span><span class="htit"><b>${__t(359)}${m(mt.tid)}${mt.lock?` <span class="hlk">${__t(540)}</span>`:""}</b>${p?`<small class="nofit">${p}</small>`:""}</span><button type="button" class="hpn onbx" data-onbx aria-label="Quitar">\u2715</button></div></div>`:""}let yo={s:null,at:0},jn=(()=>{try{return JSON.parse(localStorage.getItem("rod_trips")||"[]")}catch{return[]}})();function Qr(o,c,f,p,x){let S=o.ymd+"|"+c.num,C=c.pat.stops,P=jn.find(L=>L.k===S);if(!(P&&P.done)){if(!P){let L=mt.from!=null?C.indexOf(mt.from):-1;if(yo.s!=null&&Date.now()-yo.at<45*6e4){let U=C.indexOf(yo.s);U>=0&&(L<0||U<L)&&(L=U)}{let U=[...Xe.st,...$e.st],z=L>=0?L:(mt.fixes.length,-1);if(z>=0&&!U.includes(T[C[z]].id)){for(let v=z-1;v>=Math.max(0,z-4);v--)if(U.includes(T[C[v]].id)){L=v;break}}}if(L<0&&mt.fixes.length){let U=mt.fixes[0],z=.6;C.forEach((v,_)=>{let A=Math.hypot(T[v].w[0]-U.w[0],T[v].w[1]-U.w[1])*U.k;A<z&&(z=A,L=_)})}P={k:S,d:o.ymd,num:String(c.num),fam:c.fam,a:L>=0?T[C[L]].id:"",ad:L>=0?Math.round(c.t0+c.pat.t[2*L+1]-p):null,dl:null,mx:0,t0:Date.now()},jn.push(P)}if(xe&&xe.num===String(c.num)&&$t.get(xe.sid)===C[f]&&(P.b=T[C[f]].id,P.bd=Math.round(c.t0+c.pat.t[2*f]-p)),x!=null&&(P.dl=Math.round(x),P.mx=Math.max(P.mx||0,P.dl)),P.t1=Date.now(),!Qr.s||Date.now()-Qr.s>3e4||P._n!==P.dl){Qr.s=Date.now(),P._n=P.dl;let L=Date.now()-120*864e5;try{localStorage.setItem("rod_trips",JSON.stringify(jn.filter(U=>(U.t1||U.t0)>L),(U,z)=>U==="_n"?void 0:z))}catch{}}}}let gm=(o,c)=>{let f=Date.now()-c*864e5;return jn.filter(p=>p.fam===o&&(p.t1||p.t0)>f&&(p.t1||0)-p.t0>=18e4&&!(p.a&&p.a===p.b))};function Z_(o){if(!mt.tid)return"";[...on].forEach(([K,G])=>{String(G)!==String(mt.tid)&&si(K,null)});let c=re.find(K=>K.tr&&String(K.tr.num)===mt.tid)||I(o).out.find(K=>K.tr&&String(K.tr.num)===mt.tid);if(!c)return null;let f=c.tr,p=f.pat.stops,x=c.real&&c.v&&c.v.next>=0?c.v.next:c.p&&c.p.next>=0?c.p.next:null;if(x==null){let K=I(o).out.find(G=>G.tr&&String(G.tr.num)===mt.tid);x=K&&K.p&&K.p.next>=0?K.p.next:1}let S=gt(f),C=typeof S=="number"?Math.max(0,S/60):0,P=t.days.indexOf(o.ymd),L=f.day===P-1?1440:0,U=mt.fixes[mt.fixes.length-1],z=U&&Date.now()-U.t<9e4&&(U.acc==null||U.acc<150)?(()=>{let K=-1,G=.35;return p.forEach((it,W)=>{let Ft=Math.hypot(T[it].w[0]-U.w[0],T[it].w[1]-U.w[1])*U.k;Ft<G&&(G=Ft,K=W)}),K})():-1,v=xe&&xe.num===mt.tid?p.indexOf($t.get(xe.sid)):-1;if(v>0&&v<x&&z!==v&&!(z>=0&&z<v))return setTimeout(()=>{if(!mt.tid)return;let K=mt.tid;{let G=jn.find(it=>it.num===K&&it.d===te().ymd);if(G){G.done=!0,Qr.s=0;try{localStorage.setItem("rod_trips",JSON.stringify(jn,(it,W)=>it==="_n"?void 0:W))}catch{}}}mt.no.set(K,Date.now()+90*6e4),mt.tid="",mt.lock=!1,mt.manual=0,mt.quiet=Date.now()+10*6e4,Nt&&String(Nt.num)===K&&(Nt=null),[...on].forEach(([G,it])=>{String(it)===K&&si(G,null)}),Rn.num===K&&(Rn.num=""),ve(!0)},0),"";v<x&&(v=p.length-1);let _=Zr(f,c.real?c.v:null,v,f.t0+f.pat.t[2*v]+C-L),A=_-o.min,O=c.real&&c.v.atStop>=0?c.v.atStop:-1;Qr(o,f,v,L,typeof S=="number"?C:null);let Y=z>=0?`${__t(541)} ${T[p[z]].n}`:rc(f.num)||__t(373)+T[p[x]].n;return`<div class="hplace onbc"><button type="button" class="hhead" data-onbgo><span class="hico">\u{1F686}</span><span class="htit"><b>${En(f.fam)} ${__t(359)}${m(f.num)}${mt.lock?` <span class="hlk">${__t(540)}</span>`:""}</b><small class="nofit cok">${m(Y)} \xB7 <span class="nw">${__t(542)} ${m(T[p[v]].n)}</span> <span class="nw">${A>=1?__t(104)+xr(A)+" \xB7 ":""}<b>${rt(_)}</b>${C>=1?` <em class="dl ${ki(C)}">+${Math.round(C)}</em>`:""}</span></small>${(K=>K.length?`<small class="onbrep">${K.slice(0,4).map(G=>`<span title="${m(lo(G.kind))}">${oo[G.kind]}${G.up>1?`<b>${G.up>99?"99+":G.up}</b>`:""}</span>`).join("")}</small>`:"")(tc(f.num,""))}</span><span class="hchev">${mt.open?"\u25B4":"\u25BE"}</span></button><button type="button" class="hpn onbx" data-onbx aria-label="${__t(543)}" title="${__t(543)}">\u2715</button>${(K=>K.length&&!(mt.manual&&Date.now()<mt.manual)?`<div class="onbch">${K.map(G=>`<button type="button" class="onbalt" data-onbpick="${m(G.num)}">${__t(544)} ${m(G.num)}?<small>${__t(545)} ${m(T[G.pat.stops[G.pat.stops.length-1]].n.replace(/^Barcelona[ -]+(?=\S)/,""))}</small></button>`).join("")}</div>`:"")(q_(f))}${mt.open?(()=>{let K=Math.max(x,0),G=W=>{let Ft=Zr(f,c.real?c.v:null,W,f.t0+f.pat.t[2*W]+C-L);return`<li class="${W===v?"dst":""}"><b>${rt(Ft)}</b><span>${m(T[p[W]].n)}</span>${W===v?`<i>${__t(546)}</i>`:""}</li>`},it=[];for(let W=K;W<=Math.min(v,K+2);W++)it.push(G(W));return v>K+3&&it.push(`<li class="gap"><b>\u22EE</b><span>${v-K-3} ${v-K-3===1?__t(547):__t(548)}</span></li>`),v>K+2&&it.push(G(v)),`<div class="onbmore"><small class="onbh">${__t(549)}</small><ol class="onbst">${it.join("")}</ol>${co(f.num,"",f.fam)}<div class="rtb"><button type="button" data-onbmap>\u{1F5FA}\uFE0F ${__t(538)}</button></div></div>`})():""}</div>`}let ac={until:0};function _m(){let o=mt.tid;if(o){mt.no.set(o,Date.now()+20*6e4),mt.tid="",mt.manual=0,mt.lock=!1,mt.quiet=Date.now()+10*6e4,Rn.num===o&&(Rn.num=""),[...on].forEach(([c,f])=>{String(f)===o&&si(c,null)}),xe&&xe.num===o&&(xe=null,As(),window.__schedOff&&window.__schedOff(7701)),Nt&&String(Nt.num)===o&&(Nt=null),Mt&&String(Mt.num)===o&&(Mt=null,ze.sk=""),d._h="";try{Ie(),a()}catch{}ve(!0)}}function xm(o){if(o.hasAttribute("data-onbx")){_m();return}let c=mt.tid,f=mt.lock;jr(o.dataset.onbpick,"pick"),ke(`${__t(550)} ${mt.tid}`,c&&c!==mt.tid?{label:__t(281),fn:()=>{jr(c,f?"lock":"pick"),ke(`${__t(551)} ${c}`),ve(!0)}}:void 0),ve(!0)}function ve(o){let c=y("#home");if(!c)return;let f=performance.now();if(!o&&f-Zp<4e3||!o&&ac.until>Date.now())return;Zp=f;let p=te(),x=[],S=xo(),C=_=>{let A=Tn(_);return A==null||!Rt.w?1:Math.hypot(T[A].w[0]-Rt.w[0],T[A].w[1]-Rt.w[1])},P=[Rt,...[Xe,$e].sort((_,A)=>C(_)-C(A))],L=(document.documentElement.classList.contains("tabmode")?G_(S):mm(S))+X_(S)+J_(p)+Y_(p)+P.map(_=>B_(_,p,x)).join("")+(Is.some(_=>_.open)&&S.lines.length,"");c.className=(Is.some(_=>_.open)?"open":"")+(mt.tid?" onb":"");let U=y("#bell");U||(U=document.createElement("button"),U.type="button",U.id="bell",U.onclick=H_,y("#inf .more").prepend(U));{let _=H.repOk&&!document.documentElement.classList.contains("cap")?zi.on:Zn.on;U.hidden=!S.lines.length,U.className=_?"on":"",U.textContent=ze.on?_?__t(559):__t(560):(_?__t(561):__t(562))+S.lines.join(", "),U.title=(_?__t(563):__t(564))+__t(67)+S.lines.join(", ")+(H.repOk?"":__t(565))}if(c._h===L)return;c._h=L,c.innerHTML=L,sc(),c._onbDel||(c._onbDel=1,c.addEventListener("pointerdown",()=>{ac.until=Date.now()+1500},!0),c.addEventListener("pointerup",()=>{ac.until=Date.now()+400},!0),c.addEventListener("click",_=>{if(window.__lpAt&&Date.now()-window.__lpAt<1e3){_.stopPropagation(),_.preventDefault();return}let A=_.target.closest&&_.target.closest("[data-onbx],[data-onbpick]");A&&(_.stopPropagation(),ac.until=0,xm(A))},!0));{let _=c.querySelector("[data-onbgo]");_&&(_.onclick=A=>{if(A.target.closest("[data-onbx]")){_m();return}let O=A.target.closest("[data-onbpick]");if(O){xm(O);return}mt.open=!mt.open,ve(!0)})}{let _=c.querySelector("[data-onbmap]");_&&(_.onclick=A=>{A.stopPropagation();let O=re.find(Y=>Y.tr&&String(Y.tr.num)===mt.tid);O&&(Ot=_e=Ct=!1,me=-1,Mt=O.tr,Nt=O.tr,d._h="",Li("map"),Ie())})}{let _=[...c.children].find(A=>A.classList.contains("hplace")&&!A.querySelector(".hnew"));_&&_.classList.add("lead")}let z=_=>_==="work"?$e:_==="near"?Rt:Xe;c.querySelectorAll("[data-hloc]").forEach(_=>_.onclick=()=>{Rt.err="",Jh(!0)}),c.querySelectorAll("[data-ht]").forEach(_=>{let A=0,O=0,Y=0,K=()=>{clearTimeout(A),A=0,_.closest(".hplace")?.classList.remove("lpress")};_.addEventListener("pointerdown",G=>{let it=_.dataset.ht,W=on.get(it);!W||String(mt.tid)===String(W)||(O=G.clientX,Y=G.clientY,_.closest(".hplace")?.classList.add("lpress"),A=setTimeout(()=>{A=0,_.closest(".hplace")?.classList.remove("lpress"),_._lpDone=Date.now();let Ft=fm(it,W);if(!Zh(Ft,te())){jh(Ft?rt(Ft.est):"");return}let Te=jr(W,"lock",it);try{navigator.vibrate&&navigator.vibrate(35)}catch{}ke(`${__t(551)} ${Te&&Te.tr.fam||""} ${W} \xB7 ${__t(540)}`),ve(!0)},700))}),_.addEventListener("pointermove",G=>{A&&Math.hypot(G.clientX-O,G.clientY-Y)>10&&K()}),["pointerup","pointercancel","pointerleave"].forEach(G=>_.addEventListener(G,()=>{A&&K()})),_.addEventListener("contextmenu",G=>G.preventDefault())}),c.querySelectorAll("[data-ht]").forEach(_=>_.onclick=()=>{if(_._lpDone&&Date.now()-_._lpDone<1500)return;if(y("#inf").classList.contains("compact")){sd=!0,rd();return}let A=z(_.dataset.ht);A.open=!A.open,ii(A),ve(!0),(Mt||me>=0||_e||Ot)&&(d._h="",Ie())}),c.querySelectorAll("[data-hxf]").forEach(_=>_.onclick=A=>{A.stopPropagation();let[O,Y]=_.dataset.hxf.split(":"),K=z(O);K.xfer=Y||null,ii(K),ve(!0)});let v=_=>{clearTimeout(_._cfgT),_._cfgT=setTimeout(()=>{_._cfg=!1,ve(!0)},1e4)};c.querySelectorAll("[data-hs]").forEach(_=>_.onclick=()=>{let[A,O]=_.dataset.hs.split(":"),Y=z(A);v(Y),Y.i!==+O&&(Y.i=+O,ii(Y),ve(!0))}),c.querySelectorAll("[data-hcfg]").forEach(_=>_.onclick=A=>{A.stopPropagation();let O=z(_.dataset.hcfg);if(O._cfg=!O._cfg,clearTimeout(O._cfgT),O._cfg&&v(O),!ed.v){ed.v=!0;try{localStorage.setItem("rod_cfgseen","1")}catch{}}ve(!0)}),c.querySelectorAll("[data-hcfgmap]").forEach(_=>_.onclick=A=>{A.stopPropagation();let O=+_.dataset.hcfgmap;Li("map"),window.__rodPickStation(O)}),c.querySelectorAll("[data-hwt]").forEach(_=>_.onclick=A=>{A.stopPropagation();let O=z(_.dataset.hwt);O._wedit=!O._wedit,clearTimeout(O._wT),O._wedit&&(O._wT=setTimeout(()=>{O._wedit=!1,ve(!0)},6e3)),ve(!0)}),c.querySelectorAll("[data-hw]").forEach(_=>_.addEventListener("click",()=>{let A=z(_.dataset.hw.split(":")[0]);A._cfg&&v(A)},!0)),c.querySelectorAll("[data-hw]").forEach(_=>_.onclick=()=>{let[A,O]=_.dataset.hw.split(":"),Y=z(A);Y.walk=M(Y.walk+ +O,0,60),ii(Y),ve(!0)}),c.querySelectorAll("[data-hwset]").forEach(_=>_.onclick=A=>{A.stopPropagation();let[O,Y]=_.dataset.hwset.split(":"),K=z(O);K.walk=M(+Y,0,60),ii(K),K._cfg&&(clearTimeout(K._cfgT),K._cfgT=setTimeout(()=>{K._cfg=!1,ve(!0)},1e4)),ke(`${__t(566)}: ${K.walk} min`),ve(!0)}),c.querySelectorAll("[data-hmap]").forEach(_=>_.onclick=()=>{let A=+_.dataset.hmap;Ot=_e=Ct=!1,Mt=null,me=A,Hn(),Object.assign(s,{tx:T[A].w[0],ty:T[A].w[1],dist:18,tilt:Math.max(s.tilt,.5)}),d._h="",Ie(),a()}),c.querySelectorAll("[data-hset]").forEach(_=>_.onclick=()=>vm(_.dataset.hset)),c.querySelectorAll("[data-hnear]").forEach(_=>_.onclick=()=>{let A=$t.get(Rt.st[0]);A!=null&&od(A,_.dataset.hnear)}),c.querySelectorAll("[data-hmore]").forEach(_=>_.onclick=()=>{let A=z(_.dataset.hmore);A.more=!A.more,ve(!0)}),c.querySelectorAll("[data-hhide]").forEach(_=>_.onclick=A=>{A.stopPropagation();let[O,Y]=_.dataset.hhide.split(":"),K=z(O);K.hide=Y,ii(K),ve(!0)}),c.querySelectorAll("[data-hshow]").forEach(_=>_.onclick=()=>{let A=z(_.dataset.hshow);A.hide="",ii(A),ve(!0)}),c.querySelectorAll("[data-hgo]").forEach(_=>_.onclick=A=>{A.stopPropagation();let[O,Y]=_.dataset.hgo.split(":"),K=z(O);K.goAt=Y==="1"?Date.now():0,K.goAt?K.platAt=0:K._noWay=Date.now()+15*6e4,ii(K),ve(!0)}),c.querySelectorAll("[data-unchoose]").forEach(_=>_.onclick=A=>{A.stopPropagation();let O=_.dataset.unchoose;[...on].forEach(([Y,K])=>{String(K)===O&&si(Y,null)}),Rn.num===O&&(Rn.num=""),Nt&&String(Nt.num)===O&&(Nt=null),xe&&xe.num===O&&(xe=null,As()),Mt&&String(Mt.num)===O&&(Mt=null,d._h="",Ie()),ve(!0)}),c.querySelectorAll("[data-chmap]").forEach(_=>_.onclick=A=>{A.stopPropagation();let O=Rs(_.dataset.chmap);O&&(Li("map"),Xs({num:String(O.num),tid:O.tid&&H.vp.has(O.tid)?O.tid:"",tr:O}),Nt=O)}),c.querySelectorAll("[data-hboard]").forEach(_=>_.onclick=A=>{if(A.stopPropagation(),_.classList.contains("off")){jh(_.dataset.hbwhen);return}let O=jr(_.dataset.hboard,"lock",_.closest(".hplace")?.querySelector("[data-ht]")?.dataset.ht);ke(`${__t(551)} ${O&&O.tr.fam||""} ${_.dataset.hboard} \xB7 ${__t(540)}`),ve(!0)}),c.querySelectorAll("[data-hplat]").forEach(_=>_.onclick=A=>{A.stopPropagation();let[O,Y]=_.dataset.hplat.split(":"),K=z(O);if(K.platAt=Y==="1"?Date.now():0,K.platAt){K.goAt=0;let G=Tn(K);G!=null&&(yo.s=G,yo.at=Date.now())}ii(K),ve(!0)}),c.querySelectorAll("[data-hnotst]").forEach(_=>_.onclick=A=>{A.stopPropagation(),Rt.homeW=Rt.w;try{localStorage.setItem("rod_homew",JSON.stringify(Rt.w))}catch{}ve(!0)}),c.querySelectorAll("[data-hdel]").forEach(_=>_.onclick=()=>{$e.st=[],$e.open=!1,ii($e),ve(!0),lm()}),c.querySelectorAll("[data-dk]").forEach(_=>{let A=0,O=0,Y=0,K=()=>{clearTimeout(A),A=0,_.classList.remove("lpress")};_.addEventListener("pointerdown",G=>{let it=x[+_.dataset.dk];!it||it.num==null||!_.matches("li.hr, .hv")||(O=G.clientX,Y=G.clientY,_.classList.add("lpress"),A=setTimeout(()=>{if(A=0,_.classList.remove("lpress"),_._lpDone=Date.now(),!Zh(it,te())){jh(it.est!=null?rt(it.est):"");return}let W=jr(it.num,"lock",_.closest(".hplace")?.querySelector("[data-ht]")?.dataset.ht);try{navigator.vibrate&&navigator.vibrate(35)}catch{}ke(`${__t(551)} ${W&&W.tr.fam||it.fam||""} ${it.num} \xB7 ${__t(540)}`),ve(!0)},700))}),_.addEventListener("pointermove",G=>{A&&Math.hypot(G.clientX-O,G.clientY-Y)>10&&K()}),["pointerup","pointercancel","pointerleave"].forEach(G=>_.addEventListener(G,()=>{A&&K()})),_.addEventListener("contextmenu",G=>G.preventDefault())}),c.querySelectorAll(".hv .hwhere").forEach(_=>_.onclick=A=>{A.stopPropagation();let O=_.closest("[data-dk]"),Y=O&&x[+O.dataset.dk];Y&&(Li("map"),Xs(Y))}),c.querySelectorAll("[data-dk]").forEach(_=>_.onclick=()=>{if(_._lpDone&&Date.now()-_._lpDone<1500)return;let A=x[+_.dataset.dk];if(_.matches("li.hr, .hv")&&!A.gone&&A.num!=null){let O=_.closest(".hplace")?.querySelector("[data-ht]")?.dataset.ht;if(O){let Y=on.get(O)===String(A.num);si(O,Y?null:String(A.num)),Y&&Rn.num===String(A.num)&&(Rn.num=""),Y?Mt&&String(Mt.num)===String(A.num)&&(Mt=null,Nt=null,ze.sk="",d._h="",Ie()):Xs(A,!0),ve(!0);return}}if(A.gone&&_.closest("#home")){ke(`${__t(567)} \xB7 ${A.fam||""} ${A.num||""}`,{label:__t(538),fn:()=>{Li("map"),Xs(A)}});return}Xs(A)}),c.querySelectorAll("[data-pinnext]").forEach(_=>_.onclick=A=>{if(A.target.closest("[data-unpin]"))return;let[O,Y]=_.dataset.pinnext.split(":");si(O,Y);let K=fm(O,Y);K&&Xs(K,!0),ve(!0)}),c.querySelectorAll("[data-unpin]").forEach(_=>_.onclick=A=>{A.stopPropagation(),si(_.dataset.unpin,null),ve(!0)}),c.querySelectorAll("[data-hal]").forEach(_=>_.onclick=()=>y("#alr").click()),kp(c)}function Xs(o,c){if(!o)return;let f=t.days.indexOf(te().ymd),p=re.find(C=>C.real?o.tid&&C.v.tid===o.tid||o.num&&String(C.tr?C.tr.num:C.v.num)===String(o.num):o.tr&&C.tr===o.tr||o.num&&C.tr&&String(C.tr.num)===String(o.num)),x=o.tr||p&&p.tr||(st[f]||[]).find(C=>String(C.num)===String(o.num));if(Ot=_e=Ct=!1,me=-1,c||void 0,Mt=p?p.tr||{vtid:p.v.tid}:x||null,!Mt)return;c&&(ze.sk="t"+(Mt.num||Mt.vtid)),Nt=p&&p.tr?p.tr:null,Nt&&innerWidth<=640&&(d.classList.add("peek"),y("#rc").classList.contains("min")||y("#rcgrab").click());let S=p?p.p.w:null;S&&Object.assign(s,{tx:S[0],ty:S[1],dist:Math.min(s.dist,22)}),Hn(),d._h="",Ie(),Me=0,a()}let ta=!1;function vm(o){ta=o||!1,b.value="",b.placeholder=o==="work"?__t(568):o==="home"?__t(569):__t(570),document.documentElement.classList.add("srch"),g.style.display="none",b.focus()}let ym=()=>document.documentElement.classList.remove("srch");{let o=y("#hfind");o&&(o.onclick=()=>vm(""))}b.addEventListener("blur",()=>setTimeout(()=>{document.activeElement!==b&&ym(),ta&&!b.value.trim()&&(ta=!1,b.placeholder=__t(570))},600));function J1(){}function od(o,c){let f=c==="work"?$e:Xe,p=T[o].id,x=T.filter(S=>S.fams.size&&S!==T[o]&&Math.hypot(S.w[0]-T[o].w[0],S.w[1]-T[o].w[1])<.6).map(S=>S.id);f.st=[p,...x].slice(0,3),f.i=0,f.open=!0,ii(f),ve(!0),lm()}let oc=y("#lines");oc.innerHTML=`${__t(571)}`+X.map(o=>`<button type="button" style="--c:${J[o]}" data-f="${o}">${o}</button>`).join("");function Sm(){try{ve(!0)}catch{}{let o=y("#linebtn");o||(o=document.createElement("button"),o.type="button",o.id="linebtn",oc.after(o),o.onclick=()=>{Jt=[...dt][0],Ct=Ot=_e=!1,d._h="",Ie()});let c=dt.size===1?[...dt][0]:"";o.hidden=!c,c&&(o.innerHTML=`${__t(572)}${m(c)}${__t(573)}`)}oc.querySelectorAll("[data-f]").forEach(o=>{o.dataset.f!=="*"&&o.classList.toggle("off",!dt.has(o.dataset.f))})}oc.querySelectorAll("[data-f]").forEach(o=>o.onclick=()=>{let c=o.dataset.f;c==="*"?X.forEach(f=>dt.add(f)):dt.size===X.length?(dt.clear(),dt.add(c)):dt.has(c)?(dt.delete(c),dt.size||X.forEach(f=>dt.add(f))):dt.add(c);try{localStorage.setItem("rod_lines",JSON.stringify([...dt]))}catch{}Sm(),Kt(),Hn(),qh(),Me=0,a()});let ld=[...document.querySelectorAll("[data-sp]")],Pi=0;function bm(o){let c=te();o&&(Ut===o||Pi===o)?Ut?(jt=c.min,ue=c.min,Ut=0,Pi=o):(ge=performance.now(),Ut=o,Pi=0):o===0?(Ut=0,ue=null,Pi=0):(jt=c.min,ge=performance.now(),ue=c.min,Ut=o,Pi=0),ld.forEach(f=>{let p=+f.dataset.sp;f.classList.toggle("on",p===(Ut||Pi)||!Ut&&!Pi&&ue==null&&p===0),f.classList.toggle("pz",!!Pi&&p===Pi),f.textContent=p===0?__t(108):Pi===p?"\u25B6 \xD7"+p:Ut===p?"\u23F8 \xD7"+p:"\xD7"+p}),Me=0,a()}ld.forEach(o=>o.onclick=()=>bm(+o.dataset.sp)),y("#tsl").oninput=o=>{let c=+o.target.value;jt=c,ue=c,ge=performance.now(),Ut===0&&!Pi&&ld.forEach(f=>f.classList.remove("on")),Me=0,a()},setInterval(()=>{ue!=null&&Ut&&jt+(performance.now()-ge)/6e4*Ut>1560&&(jt=240,ge=performance.now())},1e3),window.__rodSearch=o=>{let c=w(o.trim());if(!c){g.style.display="none",g._pick=null;return}let f=[],p=[];T.forEach((P,L)=>{if(!P.fams.size)return;let U=w(P.n);U.startsWith(c)||U.includes(" "+c)||U.includes("-"+c)?f.push(L):U.includes(c)&&p.push(L)});let x=f.concat(p).slice(0,7),S=N.filter(P=>w(P.name).startsWith(c)).sort((P,L)=>L.pop-P.pop).slice(0,3),C=x.map(P=>({h:`\u{1F689} ${m(T[P].n)}<em>${[...T[P].fams].sort(B).slice(0,3).map(L=>`<em class="ls" style="background:${J[L]}">${L}</em>`).join(" ")}</em>`,go:()=>{if(ym(),ta){let L=ta;ta=!1,b.placeholder=__t(570),od(P,L);return}ze.on&&ze.cur!=="map"&&Li("map"),Ot=!1,_e=!1,Ct=!1,me=P,Mt=null,Nt=null,Hn(),Object.assign(s,{tx:T[P].w[0],ty:T[P].w[1],dist:Math.min(s.dist,20),tilt:Math.max(s.tilt,.5)}),Ie(),a()}})).concat(S.map(P=>({h:`${m(P.name)}${__t(574)}`,go:()=>{Object.assign(s,{tx:P.cx,ty:P.cy,dist:M(P.size*3+14,14,60)}),a()}})));g.innerHTML=C.map((P,L)=>`<li data-i="${L}">${P.h}</li>`).join("")||__t(575),g.style.display="block",g._pick=P=>{C[P]&&(C[P].go(),g.style.display="none",b.value="",b.blur())},g.querySelectorAll("li[data-i]").forEach(P=>P.onclick=()=>g._pick(+P.dataset.i))},Sm(),Hn();try{let o=new URLSearchParams(location.search).get("st");if(o){let c=w(o),f=-1,p=0;T.forEach((x,S)=>{if(!x.fams.size)return;let C=w(x.n),P=C===c?3:C.startsWith(c)||c.startsWith(C)?2:C.includes(c)||c.includes(C)?1:0;P>p&&(p=P,f=S)}),f>=0&&setTimeout(()=>{me=f,Hn(),Object.assign(s,{tx:T[f].w[0],ty:T[f].w[1],dist:18,tilt:.5}),Ie(),a()},300)}}catch{}let cd={v:!1};document.addEventListener("click",o=>{!(o.target.closest&&o.target.closest("[data-halx]"))||o.target.closest("a")||(cd.v=!cd.v,ve(!0))}),d.addEventListener("click",o=>{if(!d.classList.contains("peek")&&innerWidth<=640&&Mt&&d.querySelector(".mn")&&!o.target.closest("button,a,input,select,label,summary,[data-alarm],[data-gs],[data-gt],[data-sf],[data-al],[role=button]")){let f=d.querySelector(".mn");o.stopPropagation(),f&&f.click();return}if(!d.classList.contains("peek")||o.target.closest("button,a,input"))return;o.stopPropagation(),o.preventDefault(),d.classList.remove("peek");let c=d.querySelector(".mn");c&&(c.textContent="\u25BE"),d.scrollTop=0},!0),d.addEventListener("pointerdown",()=>{d._touch=Date.now()+2500},!0),["pointerup","pointercancel"].forEach(o=>d.addEventListener(o,()=>{d._touch=0},!0));{let o=0,c=0,f=0,p=0;d.addEventListener("touchstart",x=>{p=innerWidth<=640&&Mt&&(!ze.on||ze.cur==="map")&&x.touches.length===1&&!x.target.closest("input")?1:0,p&&(o=x.touches[0].clientX,c=x.touches[0].clientY,f=0)},{passive:!0}),d.addEventListener("touchmove",x=>{if(!p)return;let S=x.touches[0].clientX-o,C=x.touches[0].clientY-c;p===1&&(Math.abs(S)<12&&Math.abs(C)<12||(p=Math.abs(S)>Math.abs(C)*1.3&&S<0?2:0,!p))||(x.preventDefault(),f=Math.min(0,S),d.style.transition="none",d.style.transform=`translateX(${f}px)`,d.style.opacity=String(Math.max(.3,1+f/300)))},{passive:!1}),d.addEventListener("touchend",()=>{if(p!==2){p=0;return}if(p=0,d.style.transition="transform .18s,opacity .18s",f>-90){d.style.transform="",d.style.opacity="";return}d.style.transform="translateX(-110%)",d.style.opacity="0",setTimeout(()=>{let x=d.querySelector("[data-cx]");x&&x.click(),d.style.transition="",d.style.transform="",d.style.opacity=""},180)}),d.addEventListener("touchcancel",()=>{p===2&&(d.style.transform="",d.style.opacity=""),p=0})}let ze={on:!1,cur:"now",home:new Map},lc=matchMedia("(max-width:640px), (max-height:500px) and (pointer:coarse)"),Un=document.createElement("nav");Un.id="tabs";let j_=[["now","\u{1F552}",__t(108)],["map","\u{1F5FA}\uFE0F",__t(576)],["line","\u{1F4CA}",__t(577)],["set","\u2699\uFE0F",__t(578)]];Un.innerHTML=j_.map(([o,c,f])=>`<button type="button" data-tab="${o}"><span>${c}</span><small>${f}</small></button>`).join(""),document.body.appendChild(Un);let yr=document.createElement("i");yr.className="tind",yr.setAttribute("aria-hidden","true"),Un.prepend(yr);let Mm=o=>[...Un.querySelectorAll("[data-tab]")].find(c=>{let f=c.getBoundingClientRect();return o>=f.left&&o<f.right}),ud=o=>{!o||!o.offsetWidth||(yr.style.width=o.offsetWidth+"px",yr.style.height=o.offsetHeight+"px",yr.style.top=o.offsetTop+"px",yr.style.transform=`translateX(${o.offsetLeft}px)`)},ea=()=>ud(Un.querySelector("[data-tab].on")),K_=()=>{try{let o=window.Capacitor,c=o&&o.isNativePlatform&&o.isNativePlatform()&&o.Plugins&&o.Plugins.Haptics;c&&c.selectionChanged().catch(()=>{})}catch{}},ri={on:!1,b:null,moved:!1,until:0};Un.addEventListener("pointerdown",o=>{let c=Mm(o.clientX);if(c){ri.on=!0,ri.b=c,ri.moved=!1,Un.classList.add("drag"),Un.querySelectorAll(".hov").forEach(f=>f.classList.remove("hov")),c.classList.add("hov"),ud(c);try{Un.setPointerCapture(o.pointerId)}catch{}try{let f=window.Capacitor,p=f&&f.Plugins&&f.Plugins.Haptics;p&&f.isNativePlatform()&&p.selectionStart().catch(()=>{})}catch{}}}),Un.addEventListener("pointermove",o=>{if(!ri.on)return;let c=Mm(o.clientX);c&&c!==ri.b&&(ri.b.classList.remove("hov"),c.classList.add("hov"),ri.b=c,ri.moved=!0,ud(c),K_())});let wm=o=>{if(ri.on){ri.on=!1,Un.classList.remove("drag"),Un.querySelectorAll(".hov").forEach(c=>c.classList.remove("hov"));try{let c=window.Capacitor,f=c&&c.Plugins&&c.Plugins.Haptics;f&&c.isNativePlatform()&&f.selectionEnd().catch(()=>{})}catch{}o&&ri.b?(ri.until=Date.now()+500,ri.b.dataset.tab!==ze.cur?Li(ri.b.dataset.tab):ea()):ea()}};Un.addEventListener("pointerup",()=>wm(!0)),Un.addEventListener("pointercancel",()=>wm(!1)),addEventListener("resize",()=>setTimeout(ea,60));try{new ResizeObserver(()=>ea()).observe(Un)}catch{}let na=document.createElement("div");na.id="tabL",document.body.appendChild(na);let Sr=document.createElement("div");Sr.id="tabA",Sr.className="box",document.body.appendChild(Sr);let hd=(o,c)=>{o&&(ze.home.has(o)||ze.home.set(o,[o.parentNode,o.nextSibling]),c.appendChild(o))},Em=()=>{for(let[o,[c,f]]of ze.home)try{c.insertBefore(o,f&&f.parentNode===c?f:null)}catch{}ze.home.clear()};function dd(){if(!document.getElementById("tabLt")){let S=document.createElement("div");S.id="tabLt",S.textContent=__t(577),document.body.appendChild(S)}let o=[...new Set([Xe,$e].flatMap(S=>{let C=Tn(S);return C!=null?[...T[C].fams]:[]}))],c=(dt.size&&dt.size<=8?[...dt]:o.length?o:[]).filter(S=>J[S]).sort(B),f=c.join(","),p=H.alerts.filter(S=>[...S.fams].some(C=>dt.has(C))).length,x=[Ct,_e,Jt,Ot,f,p].join("|");na._k!==x&&(na._k=x,na.innerHTML=`<button type="button" data-tl="stats" class="${Ct?"on":""}">\u{1F4CA} ${__t(57)}</button><button type="button" data-tl="alr" class="${_e?"on":""}">\u26A0\uFE0F ${p}${p===1?__t(339):__t(340)}</button>${c.map(S=>`<button type="button" data-tl="line:${m(S)}" class="${Jt===S?"on":""}">\u{1F4CB} ${m(S)}</button>`).join("")}<a href="https://www.whatsapp.com/channel/0029Vav4hGTId7nPenKMuo2C" target="_blank" rel="noopener" title="${__t(173)}">\u{1F4AC}</a>`,na.querySelectorAll("[data-tl]").forEach(S=>S.onclick=()=>{let C=S.dataset.tl;Ct=C==="stats",_e=C==="alr",Jt=C.startsWith("line:")?C.slice(5):"",Ot=!1,Mt=null,me=-1,Ct&&(we.at=0),d._h="",Ie(),dd()}))}document.addEventListener("visibilitychange",()=>{!document.hidden&&window.__txt&&window.__txt()});let Q_="https://raw.githubusercontent.com/elMonoAmelio/catalunya-survival/horarios/rod_pack.json",tx=()=>St(new Date).ymd.replace(/-/g,"");function So(){navigator.onLine===!1||location.protocol==="file:"&&!/[?&]pack=1/.test(location.search)||fetch(Q_,{cache:"no-store"}).then(o=>o.ok?o.text():null).then(o=>{if(!o)return;let c;try{c=JSON.parse(o)}catch{return}if(!c||!c.gen||!Array.isArray(c.days)||!c.trips||c.gen<=t.gen)return;try{localStorage.setItem("rod_pack",o)}catch{return}let f=tx(),p=t.days.indexOf(f),x=c.days.indexOf(f),S=p<0?0:ht.filter(L=>L.day===p).length,C=0;if(x>=0)for(let L of c.trips)L[0]===x&&C++;let P=x>=0&&S&&(Math.abs(C-S)/S>.1||!C);if(p<0||p>=t.days.length-2||P){try{sessionStorage.setItem("rod_packmsg",P?"1":"")}catch{}location.reload();return}bo.v=!0}).catch(()=>{})}let bo={v:!1};document.addEventListener("visibilitychange",()=>{document.hidden&&bo.v?(bo.v=!1,bo.reload=!0):!document.hidden&&bo.reload&&location.reload()});try{sessionStorage.getItem("rod_packmsg")==="1"&&(sessionStorage.removeItem("rod_packmsg"),setTimeout(()=>ke("\u{1F5D3}\uFE0F "+__t(579)),1500))}catch{}if(setTimeout(So,4e3),document.addEventListener("visibilitychange",()=>{!document.hidden&&Date.now()-(So.at||0)>6*36e5&&(So.at=Date.now(),So())}),So.at=Date.now(),window.__RODNEW__){let o=window.__RODNEW__,c=y("#ver");c&&c.firstChild&&c.firstChild.nodeType===3&&(c.firstChild.textContent=c.firstChild.textContent.replace(/(\d\d\/\d\d \d\d:\d\d)/,o.slice(8,10)+"/"+o.slice(5,7)+" "+o.slice(11,16)))}function cc(){Em();let o=window.__L||"es",c=pi.mode,f=(p,x,S,C)=>`<div class="irow"><span class="iic" style="--ic:${x}">${p}</span><span class="ilab">${S}</span>${C||""}</div>`;Sr.innerHTML=`<h3 class="ilt">${__t(578)}</h3>
      <div class="icard">${f("\u{1F310}","#0a84ff",__t(580))}<div class="seg2 iseg">${"ca|Catal\xE0,es|Espa\xF1ol,en|English".split(",").map(p=>p.split("|")).map(([p,x])=>`<button type="button" data-lang="${p}" class="${o===p?"on":""}">${x}</button>`).join("")}</div>
      ${f("\u{1F319}","#5e5ce6",__t(581))}<div class="seg2 iseg">${[["auto",__t(361)],["light",__t(582)],["dark",__t(583)]].map(([p,x])=>`<button type="button" data-th="${p}" class="${c===p?"on":""}">${x}</button>`).join("")}</div>
      ${f("\u{1F520}","#8e8e93",__t(584))}<div class="seg2 iseg">${(()=>{let p="";try{p=localStorage.getItem("rod_big")||""}catch{}let x=p==="1"?"1":p==="0"?"0":"a";return[["a",__t(361)],["0","Normal"],["1",__t(585)]].map(([S,C])=>`<button type="button" data-big="${S}" class="${x===S?"on":""}">${C}</button>`).join("")})()}</div></div>${(()=>{let p="";try{p=localStorage.getItem("rod_big")||""}catch{}return p==="1"||p==="0"?"":`<small class="tabAhint ifoot">${__t(586)}</small>`})()}
      <div class="ihd">${__t(204)}</div><div class="icard">${f("\u{1F514}","#ff453a",__t(587),'<div id="tabAbell"></div>')}${(()=>{let p=ic();return p.length>1?`<div class="irow isub"><span class="ilab">${__t(588)}</span></div><div class="alch">${p.map(x=>`<button type="button" data-al="${m(x)}" class="ln${vr.has(x)?" off":""}" style="--c:${J[x]}">${m(x)}</button>`).join("")}</div>`:""})()}</div><small class="tabAhint ifoot">${__t(589)}</small>${ic().length?"":`<small class="tabAhint ifoot">${__t(590)}</small>`}
      <div class="icard">${f("\u{1F4E1}","#30d158",__t(591))}<div id="tabArt" class="ibody"></div>${f("\u2139\uFE0F","#636366",__t(592))}<div id="tabAinf" class="ibody"></div></div>
      <p class="tdisc ifoot">${__t(593)}</p>
      <p class="tabAfoot">MonkiSoft</p>`,Sr.querySelectorAll("[data-al]").forEach(p=>p.onclick=()=>{let x=p.dataset.al,S=ic();vr.has(x)?vr.delete(x):S.filter(C=>!vr.has(C)).length>1&&vr.add(x);try{localStorage.setItem("rod_aloff",JSON.stringify([...vr]))}catch{}ve(!0),cc()}),Sr.querySelectorAll("[data-big]").forEach(p=>p.onclick=()=>{let x=p.dataset.big;try{x==="a"?localStorage.removeItem("rod_big"):localStorage.setItem("rod_big",x)}catch{}window.__txt&&window.__txt(),cc(),ve(!0)}),Sr.querySelectorAll("[data-th]").forEach(p=>p.onclick=()=>{pi.mode=p.dataset.th;try{localStorage.setItem("rod_theme",pi.mode)}catch{}Jl(),cc()}),hd(y("#bell"),y("#tabAbell")),hd(y("#src"),y("#tabArt")),hd(y("#ver"),y("#tabAinf"))}function Li(o){if(!ze.on)return;let c=ze.cur;if(ze.cur=o,document.documentElement.dataset.tab=o,window.__mapHidden=o!=="map",o==="line"&&d.classList.remove("peek"),!window.__mapHidden&&window.__wakeMap&&window.__wakeMap(),Un.querySelectorAll("[data-tab]").forEach(f=>f.classList.toggle("on",f.dataset.tab===o)),ea(),o==="line")(Mt||me>=0)&&(ze.keep={t:Mt,s:me,sk:ze.sk}),!Ct&&!_e&&!Jt&&!Ot&&(Ct=!0,we.at=0),Mt=null,me=-1,d._h="",Ie(),dd();else if(c==="line"){Ct=_e=Ot=!1,Jt="";let f=ze.keep;ze.keep=null,f&&o==="map"&&!Mt&&me<0&&(Mt=f.t,me=f.s,ze.sk=f.sk),d._h="",Ie()}o==="map"&&requestAnimationFrame(()=>requestAnimationFrame(()=>{try{Xh()}catch{}dispatchEvent(new Event("resize"))})),o==="set"&&cc(),o==="now"&&(ve(!0),requestAnimationFrame(sc)),Me=0,a()}Un.onclick=o=>{if(Date.now()<ri.until)return;let c=o.target.closest("[data-tab]");c&&Li(c.dataset.tab)},window.__rodTabSync=()=>{if(!ze.on)return;let o=Mt?"t"+(Mt.num||Mt.vtid):me>=0?"s"+me:"",c=o!==ze.sk;ze.sk=o,o&&c&&ze.cur!=="map"?Li("map"):(_e||Jt||Ot)&&ze.cur!=="line"&&ze.cur!=="map"&&Li("line"),ze.cur==="line"&&dd()};function fd(){let o=lc.matches||document.documentElement.classList.contains("cap");if(o!==ze.on)if(ze.on=o,document.documentElement.classList.toggle("tabmode",o),requestAnimationFrame(()=>requestAnimationFrame(ea)),o||(window.__mapHidden=!1),o){let c="now";try{let f=sessionStorage.getItem("rod_tabgo");f&&(sessionStorage.removeItem("rod_tabgo"),/^(now|map|line|set)$/.test(f)&&(c=f))}catch{}Li(c)}else delete document.documentElement.dataset.tab,Em()}lc.addEventListener?lc.addEventListener("change",fd):lc.addListener(fd),fd();{let o=y("#rc"),c=()=>document.documentElement.style.setProperty("--rch",Math.round(o.getBoundingClientRect().height)+"px");window.ResizeObserver&&new ResizeObserver(c).observe(o),c()}let pd={"\u{1F3D8}":'<path d="M3 21V11l5-4 5 4v10"/><path d="M13 21V9l4-3 4 3v12"/><path d="M2 21h20"/><path d="M7 21v-4h2v4"/>',"\u{1F3E0}":'<path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/>',"\u{1F4BC}":'<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5h6v2"/><path d="M3 13h18"/>',"\u{1F4CD}":'<path d="M12 21s-7-6.5-7-12a7 7 0 0114 0c0 5.5-7 12-7 12z"/><circle cx="12" cy="9" r="2.5"/>',"\u{1F686}":'<rect x="5" y="3" width="14" height="14" rx="3"/><path d="M5 11h14M8 21l2-4M16 21l-2-4"/><circle cx="9" cy="14" r=".6"/><circle cx="15" cy="14" r=".6"/>',"\u{1F6B6}":'<circle cx="13" cy="4" r="2"/><path d="M12 7l-2 6 3 3v5M10 13l-3 8M11 8l4 3h3M11 8l-4 3"/>',"\u{1F689}":'<path d="M4 20h16M6 20V9l6-5 6 5v11"/><path d="M10 20v-5h4v5"/>',"\u26A0\uFE0F":'<path d="M12 3l10 18H2z"/><path d="M12 10v5M12 18v.4"/>',"\u{1F4CC}":'<path d="M9 3h6l-1 6 3 3H7l3-3z"/><path d="M12 12v9"/>',"\u{1F5D3}\uFE0F":'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',"\u{1F4E1}":'<path d="M5 19a10 10 0 0114 0M8 16a6 6 0 018 0"/><circle cx="12" cy="20" r="1"/><path d="M3 15a14 14 0 0118 0"/>',"\u{1F552}":'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',"\u{1F5FA}\uFE0F":'<path d="M9 4L3 6v14l6-2 6 2 6-2V4l-6 2-6-2z"/><path d="M9 4v14M15 6v14"/>',"\u{1F4CA}":'<path d="M4 20V11M10 20V4M16 20v-7M2 20h20"/>',"\u2699\uFE0F":'<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1"/>',"\u{1F310}":'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/>',"\u{1F319}":'<path d="M20 14A8 8 0 1110 4a7 7 0 0010 10z"/>',"\u{1F520}":'<path d="M3 18l4-12 4 12M4.5 14h5M15 18V9h3.5a2.5 2.5 0 010 5H15M15 14h4a2 2 0 010 4h-4"/>',"\u{1F514}":'<path d="M6 16V11a6 6 0 0112 0v5l2 2H4z"/><path d="M10 21h4"/>',"\u{1F515}":'<path d="M6 16V11a6 6 0 0112 0v5l2 2H4z"/><path d="M10 21h4M3 3l18 18"/>',"\u2139\uFE0F":'<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.5"/>',"\u{1F4CB}":'<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V3h6v1M8 10h8M8 14h8M8 18h5"/>',"\u{1F4AC}":'<path d="M4 5h16v11H9l-5 4z"/>',"\u26D4":'<circle cx="12" cy="12" r="9"/><path d="M7 12h10"/>',"\u{1F4F6}":'<path d="M4 20v-3M9 20v-7M14 20V9M19 20V5"/>',"\u23F3":'<path d="M7 3h10M7 21h10M8 3c0 6 8 6 8 9s-8 3-8 9M16 3c0 6-8 6-8 9s8 3 8 9"/>',"\u{1F3D9}\uFE0F":'<path d="M3 21V9h6v12M9 21V4h6v17M15 21v-9h6v9M2 21h20"/>',"\u{1F4E4}":'<path d="M12 15V3M7 8l5-5 5 5"/><path d="M5 12v8h14v-8"/>',"\u2B50":'<path d="M12 3l2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.3 6.4 20.2l1.1-6.2L3 9.6l6.2-.9z"/>'},md=new RegExp("("+Object.keys(pd).map(o=>o.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")).join("|")+")\uFE0F?","g"),ex=o=>`<span class="ico" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${pd[o]||pd[o+"\uFE0F"]||""}</svg></span>`;function nx(o){let c=document.createTreeWalker(o,NodeFilter.SHOW_TEXT),f=[],p;for(;p=c.nextNode();)p.parentElement&&p.parentElement.closest(".ico,script,style,textarea,input")||(md.lastIndex=0,md.test(p.nodeValue)&&f.push(p));for(let x of f){let S=document.createElement("span");S.innerHTML=m(x.nodeValue).replace(md,(C,P)=>ex(P)),x.replaceWith(...S.childNodes)}return f.length}{let o=()=>["#home","#tabs","#tabA","#tabL","#mcs","#onb","#toast","#rc","#inf","#mbtn","#sbtn","#wabtn","#bell","#list"].map(x=>y(x)).filter(Boolean),c=!1,f=()=>{if(!c){c=!0;try{let x=0;o().forEach(S=>{x+=nx(S)}),x&&ze.on&&sc()}finally{c=!1}}},p=new MutationObserver(()=>{c||queueMicrotask(f)});setTimeout(()=>{f(),o().forEach(x=>p.observe(x,{childList:!0,subtree:!0,characterData:!0}))},0)}window.__rod={PIN:on,LASTPIN:Rn,get ONBX(){return{tid:mt.tid,lock:mt.lock,manual:mt.manual}},xferCands:tm,bestXfer:td,xferFirst:Qh,nowState:te,XMIN:Qp,pinNotify:dm,toast:ke,cardEta:Zr,HOME:Xe,WORK:$e,ONB:mt,alertForMe:am,whereAmI:id,departuresFor:Jn,DEPS:Bt,tripByNum:Rs,delayOf:gt,TID:pt,SID:$t,byDay:st,get days(){return t.days},get hist(){return we},get past(){return Dt.cur},get cols(){return mn.mesh?mn.mesh.count:-1},get dist(){return r.dist},get follow(){return Nt},get selTrip(){return Mt},ST:T,TR:ht,FAM:X,act:()=>re,setSpeed:bm,RT:H,pollRT:de,nowState:te,posAt:Gs,activeTrips:I,LL:wt,select:o=>{Mt=o,Ie()}}}var Za=window.__DATA__;var Ve=i=>document.querySelector(i),$s=i=>String(i).replace(/\B(?=(\d{3})+(?!\d))/g,"."),ni=(i,t,e)=>Math.min(e,Math.max(t,i)),np=i=>i.normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase(),hi=Ve("#c"),Ol=new bh({canvas:hi,antialias:!0});Ol.setPixelRatio(Math.min(devicePixelRatio||1,2));var zs=new Go;zs.background=new ye(15659509);var kh=35,Ss=new ti(kh,1,2,1500);zs.add(new fl(16777215,9080992,1));var Xg=new ml(16777215,.9);Xg.position.set(-40,-70,90);zs.add(Xg);var vs=100/Za.w,Nl=Za.w/2,Ul=Za.h/2,Sn=[],ip=new Yi;zs.add(ip);var Nh=new Ir({color:16777215,transparent:!0,opacity:.55});for(let i of Za.m){let t=new Yi,e=[],n=[],s=1e9,r=-1e9,a=1e9,l=-1e9;for(let M of i.g){let w=M.map(y=>{let m=[];for(let $=0;$<y.length;$+=2)m.push(new Vt((y[$]-Nl)*vs,(y[$+1]-Ul)*vs));return m.length>1&&m[0].equals(m[m.length-1])&&m.pop(),m}).filter(y=>y.length>=3);if(!w.length)continue;let N=new Na(w[0]);for(let y=1;y<w.length;y++)N.holes.push(new Lr(w[y]));e.push(N);for(let y of w[0])s=Math.min(s,y.x),r=Math.max(r,y.x),a=Math.min(a,y.y),l=Math.max(l,y.y);for(let y of w)n.push(new Zo(new Mn().setFromPoints(y.map(m=>new j(m.x,m.y,0))),Nh))}if(!e.length)continue;let u;try{u=new ol(e,{depth:1,bevelEnabled:!1})}catch{continue}let h=new ul({color:13421772}),d=new kn(u,h);t.add(d);let b=new Yi;n.forEach(M=>b.add(M)),b.position.z=.04,ip.add(b),t.scale.z=.01,ip.add(t);let g={og:b,rings:i.g,inF:!0,sel:null,code:i.c,name:i.n,pop:i.p,area:i.a,pr:i.pr,rankP:0,rankD:0,group:t,mesh:d,mat:h,cx:(s+r)/2,cy:(a+l)/2,size:Math.max(r-s,l-a),z:.01,zt:.01,rank:0};d.userData.m=g,Sn.push(g)}var yA=Sn.map(i=>i.mesh),kg=i=>{let t=0;for(let e=0;e<i.length;e+=2){let n=(e+2)%i.length;t+=i[e]*i[n+1]-i[n]*i[e+1]}return Math.abs(t)/2},qg=0,Yg=0;for(let i of Sn){for(let t of i.rings)qg+=kg(t[0])-t.slice(1).reduce((e,n)=>e+kg(n),0);Yg+=i.area}var L1=Math.sqrt(Yg/qg),Ph={"08":"Barcelona",17:"Girona",25:"Lleida",43:"Tarragona"},Jg={"08":__t(594),17:__t(595),25:__t(596),43:__t(597)},up="sqrt",hp="pop",tp=0,sp=0,Wa=1,Ll=1,D1={sqrt:i=>Math.sqrt(i),lin:i=>i,log:i=>Math.log10(Math.max(i,1))},rp=i=>hp==="pop"?i.pop:i.pop/i.area,Rh=["#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#b10026","#5c0020"].map(i=>new ye(i));function N1(i){i=ni(i,0,1)*(Rh.length-1);let t=Math.min(Math.floor(i),Rh.length-2);return Rh[t].clone().lerp(Rh[t+1],i-t)}var Xa=i=>i>=100?$s(Math.round(i)):i.toLocaleString("es-ES",{maximumFractionDigits:1});function U1(){sp=0;for(let i of Sn)sp+=i.pop;[...Sn].sort((i,t)=>t.pop-i.pop).forEach((i,t)=>i.rankP=t+1),[...Sn].sort((i,t)=>t.pop/t.area-i.pop/i.area).forEach((i,t)=>i.rankD=t+1),Kg()}var Zg=new ye("#d3d8e2"),jg=new ye("#eceff3");window.__mapTheme=i=>{zs.background=new ye(i?856345:15659509),jg.set(i?"#2b3242":"#eceff3"),Zg.set(i?"#1a1f29":"#d3d8e2"),Nh.color.set(i?856345:16777215),Nh.opacity=i?.7:.55,dp.color.set(i?329483:2764864),fp.color.set(i?9081766:16777215);for(let t of Sn)t.base&&$h(t);zn()};function $h(i){i.mat.color.copy(i.base).lerp(jg,document.documentElement.classList.contains("dark")?.95:.86),i.inF||i.mat.color.lerp(Zg,.8)}function Kg(){Wa=1,Ll=1e12;for(let e of Sn){let n=rp(e);Wa=Math.max(Wa,n),Ll=Math.min(Ll,n)}let i=Math.log10(Math.max(Ll,.01)),t=Math.log10(Wa);for(let e of Sn)e.base=N1((Math.log10(Math.max(rp(e),.01))-i)/(t-i)),$h(e);Ve("#lmin").textContent=Xa(Ll),Ve("#lmax").textContent=Xa(Wa),Ve("#lname").textContent=hp==="pop"?__t(598):__t(599),zh()}function zh(){let i=D1[up],t=i(Wa),e=24*tp;for(let n of Sn)n.zt=tp<=.001?.01:Math.max(.12*Math.min(1,tp),e*i(rp(n))/t)*(n.inF?1:.1);zn()}var $g=Object.fromEntries(Sn.map(i=>[i.code,i])),Lh=[],Qg=[];for(let i of Za.bd){let t=$g[i.a],e=$g[i.b];if(!(!t||!e))for(let n=0;n+3<i.p.length;n+=2)Qg.push((i.p[n]-Nl)*vs,(i.p[n+1]-Ul)*vs,0,(i.p[n+2]-Nl)*vs,(i.p[n+3]-Ul)*vs,0),Lh.push(t,e)}var Uh=new Qi;Uh.setPositions(Qg);var dp=new ps({color:2764864,linewidth:4.4,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3}),fp=new ps({color:16777215,linewidth:2.4,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-6});[dp,fp].forEach((i,t)=>{let e=new kr(Uh,i);e.frustumCulled=!1,e.renderOrder=10+t,zs.add(e)});function O1(){let i=Uh.attributes.instanceStart.data.array;for(let t=0;t<Lh.length;t+=2){let e=Math.max(Lh[t].z,Lh[t+1].z)+.12,n=t/2*6;i[n+2]=e,i[n+5]=e}Uh.attributes.instanceStart.data.needsUpdate=!0}var Oh={};for(let i of Object.keys(Ph)){let t=Sn.filter(d=>d.pr===i),e=0,n=0,s=0,r=1e9,a=-1e9,l=1e9,u=-1e9;for(let d of t)e+=d.area,n+=d.cx*d.area,s+=d.cy*d.area,r=Math.min(r,d.cx),a=Math.max(a,d.cx),l=Math.min(l,d.cy),u=Math.max(u,d.cy);let h=document.createElement("div");h.className="plab",h.textContent=Ph[i],h.title=__t(600)+Jg[i],h.onclick=()=>q1("pr:"+i),document.body.appendChild(h),Oh[i]={el:h,p:new j(n/e,s/e,0),cx:(r+a)/2,cy:(l+u)/2,ext:Math.max(a-r,u-l),ext2:[a-r,u-l],area:e,name:Ph[i]}}var ep=new j;function F1(){for(let i in Oh){let t=Oh[i];ep.copy(t.p).project(Ss),t.el.style.transform=`translate(-50%,-50%) translate(${(ep.x*.5+.5)*innerWidth}px,${(-ep.y*.5+.5)*innerHeight}px)`}}var An={tilt:0,yaw:0,dist:150,tx:0,ty:0},Pe={...An};function B1(){let i=innerWidth/innerHeight,t=Math.tan(kh*Math.PI/360);return Math.max(Za.h*vs*1.1,100*1.1/i)/(2*t)}var k1=document.getElementById("northr");document.getElementById("north").addEventListener("click",()=>{Pe.yaw=Math.round(Pe.yaw/(2*Math.PI))*2*Math.PI,Pe.tilt=0,zn()});function pp(){Object.assign(Pe,{tilt:0,yaw:0,dist:B1(),tx:0,ty:0}),zn()}function $1(){let{tilt:i,yaw:t,dist:e,tx:n,ty:s}=An;Ss.position.set(n+e*Math.sin(i)*Math.sin(t),s-e*Math.sin(i)*Math.cos(t),e*Math.cos(i)),Ss.up.set(-Math.cos(i)*Math.sin(t),Math.cos(i)*Math.cos(t),Math.sin(i)),Ss.lookAt(n,s,0)}var Dl=!0,zg=performance.now(),Ya=new Map,ur=0,Ih=0;function mp(){ur&&(clearTimeout(ur),ur=0,requestAnimationFrame(qa))}function zn(){Dl=!0,mp()}window.__wakeMap=mp;["pointerdown","wheel","touchstart","keydown"].forEach(i=>addEventListener(i,mp,{passive:!0,capture:!0}));function qa(i){ur=0;let t=ni((i-zg)/1e3,0,.05);zg=i;let e=1-Math.exp(-t*10),n=!1;for(let s of Object.keys(An)){let r=Pe[s]-An[s];Math.abs(r)>1e-4*(s==="dist"?10:1)?(An[s]+=r*e,n=!0):An[s]=Pe[s]}for(let s of Sn){let r=s.zt-s.z;Math.abs(r)>.002?(s.z+=r*Math.min(1,e*.8),s.group.scale.z=s.z,s.og.position.z=s.z+.04,n=!0):s.z!==s.zt&&(s.z=s.zt,s.group.scale.z=s.z,s.og.position.z=s.z+.04)}for(let[s,r]of Ya){let a=(i-r)/1800;a>=1?(Ya.delete(s),Gr(s)):Gr(s,.5*Math.sin(Math.PI*a)),n=!0}if(window.__rodTick&&window.__rodTick(i)&&(Dl=!0),window.__mapHidden){Dl=!0,ur=setTimeout(()=>{ur=0,requestAnimationFrame(qa)},1e3);return}if(n||Dl){k1.style.transform=`rotate(${An.yaw}rad) scaleY(${(.55+.45*Math.cos(An.tilt)).toFixed(3)})`;{let s=Math.abs(Math.sin(Pe.yaw/2))<.02&&Pe.tilt<.03,r=document.getElementById("north");r.classList.contains("flat")!==s&&(r.classList.toggle("flat",s),r.title=s?__t(601):__t(602))}$1(),O1(),F1(),window.__rodFrame&&window.__rodFrame(),Ol.render(zs,Ss),Dl=n,Ve("#tilt").value=Math.round(Pe.tilt*180/Math.PI),Ve("#yaw").value=Math.round(((Pe.yaw*180/Math.PI+180)%360+360)%360-180)}if(n||Ya.size){Ih=0,requestAnimationFrame(qa);return}Ih||(Ih=i),i-Ih<1500?requestAnimationFrame(qa):ur=setTimeout(()=>{ur=0,requestAnimationFrame(qa)},120)}function t_(){Ol.setSize(innerWidth,innerHeight,!1),Ss.aspect=innerWidth/innerHeight,Ss.updateProjectionMatrix(),dp.resolution.set(innerWidth,innerHeight),fp.resolution.set(innerWidth,innerHeight),window.__rodResize&&window.__rodResize(),zn()}addEventListener("resize",()=>{t_(),dn.length&&dr()});hi.addEventListener("wheel",i=>{i.preventDefault();let t=i.deltaMode===1?16:1,e=i.deltaY*t;if(i.altKey){let n=(Math.abs(i.deltaX)>Math.abs(i.deltaY)?i.deltaX:i.deltaY)*t;Pe.yaw+=n*.0035}else i.ctrlKey?Pe.dist=ni(Pe.dist*Math.exp(e*.01),6,400):Pe.tilt=ni(Pe.tilt+e*.002,0,1.32);zn()},{passive:!1});hi.addEventListener("contextmenu",i=>i.preventDefault());var ys=new Map,bi=null,zr=0,ap=0,op=0;var Fh=null;hi.addEventListener("pointerdown",i=>{if(i.pointerType!=="mouse"&&!document.body.classList.contains("used")&&(document.body.classList.add("used"),dn.length&&setTimeout(dr,50)),hi.setPointerCapture(i.pointerId),ys.set(i.pointerId,{x:i.clientX,y:i.clientY}),ys.size===1&&(bi={rot:i.button===2||i.altKey,moved:0,multi:!1,touch:i.pointerType!=="mouse"}),ys.size===2){let[t,e]=[...ys.values()];zr=Math.hypot(t.x-e.x,t.y-e.y),ap=Math.atan2(e.y-t.y,e.x-t.x),op=(t.y+e.y)/2,Fh={mode:null,rot:0,sc:0,tl:0},bi&&(bi.multi=!0)}gp()});hi.addEventListener("pointermove",i=>{let t=ys.get(i.pointerId);if(!t){ks={x:i.clientX,y:i.clientY},lp||(lp=requestAnimationFrame(V1));return}let e=i.clientX-t.x,n=i.clientY-t.y;if(t.x=i.clientX,t.y=i.clientY,ys.size===2){let[s,r]=[...ys.values()],a=Math.hypot(s.x-r.x,s.y-r.y),l=Math.atan2(r.y-s.y,r.x-s.x),u=(s.y+r.y)/2,h=l-ap;h>Math.PI&&(h-=2*Math.PI),h<-Math.PI&&(h+=2*Math.PI);let d=zr?a-zr:0,b=u-op,g=Fh||(Fh={mode:null,rot:0,sc:0,tl:0});g.rot+=h,g.sc+=d,g.tl+=b,g.mode?g.mode==="zoom"&&Math.abs(g.rot)>.45&&(g.mode="rotate"):Math.abs(g.rot)>.3?g.mode="rotate":Math.abs(g.tl)>30&&Math.abs(g.sc)<18?g.mode="tilt":Math.abs(g.sc)>12&&(g.mode="zoom"),(g.mode==="zoom"||g.mode==="rotate")&&zr&&(Pe.dist=ni(Pe.dist*zr/a,6,400)),g.mode==="rotate"&&(Pe.yaw+=h,An.yaw=Pe.yaw),g.mode==="tilt"&&(Pe.tilt=ni(Pe.tilt-b*.006,0,1.32),An.tilt=Pe.tilt),zr=a,ap=l,op=u,zn();return}if(bi.moved+=Math.abs(e)+Math.abs(n),bi.rot||i.altKey)Pe.yaw+=e*.005,Pe.tilt=ni(Pe.tilt+n*.004,0,1.32),An.yaw=Pe.yaw,An.tilt=Pe.tilt;else{let s=2*An.dist*Math.tan(kh*Math.PI/360)/innerHeight,r=Math.sin(An.yaw),a=Math.cos(An.yaw),l=1/Math.max(Math.cos(An.tilt),.3);Pe.tx=ni(Pe.tx-a*e*s+-r*n*s*l,-70,70),Pe.ty=ni(Pe.ty-r*e*s+a*n*s*l,-70,70),An.tx=Pe.tx,An.ty=Pe.ty}zn()});var e_=i=>{let t=bi&&!bi.rot&&!bi.multi&&bi.moved<(bi.touch?12:6)&&i.type==="pointerup"&&ys.size===1,e=bi&&bi.touch;ys.delete(i.pointerId),zr=0,Fh=null,ys.size||(bi=null),t&&window.__rodTap&&window.__rodTap(i.clientX,i.clientY)};hi.addEventListener("pointerup",e_);hi.addEventListener("pointercancel",e_);hi.addEventListener("dblclick",pp);addEventListener("keydown",i=>{i.key==="Alt"&&(hi.style.cursor="move")});addEventListener("keyup",i=>{i.key==="Alt"&&(hi.style.cursor="")});addEventListener("blur",()=>{hi.style.cursor=""});var z1=new _l,Vg=new Vt,ks=null,lp=0,Vr=null;function V1(){if(lp=0,!ks||bi)return;Vg.set(ks.x/innerWidth*2-1,-(ks.y/innerHeight)*2+1),z1.setFromCamera(Vg,Ss);let i=null;if(i!==Vr){let e=Vr;Vr=i,e&&Gr(e),i&&Gr(i),zn()}let t=window.__rodHover&&window.__rodHover(ks.x,ks.y);if(t){$r.innerHTML=t,$r.style.display="block";let e=$r.offsetWidth,n=$r.offsetHeight;$r.style.left=ni(ks.x+14,6,innerWidth-e-6)+"px",$r.style.top=ni(ks.y+14,6,innerHeight-n-6)+"px",hi.style.cursor="pointer"}else gp(),hi.style.cursor=""}hi.addEventListener("pointerleave",()=>{if(ks=null,Vr){let i=Vr;Vr=null,Gr(i),zn()}gp()});var $r=Ve("#tip");function gp(){$r.style.display="none"}document.querySelectorAll("[data-metric]").forEach(i=>i.onclick=()=>{hp=i.dataset.metric,document.querySelectorAll("[data-metric]").forEach(t=>t.classList.toggle("on",t===i)),Kg()});document.querySelectorAll("[data-mode]").forEach(i=>i.onclick=()=>{up=i.dataset.mode,document.querySelectorAll("[data-mode]").forEach(t=>t.classList.toggle("on",t===i)),zh()});Ve("#yaw").oninput=i=>{Pe.yaw=+i.target.value*Math.PI/180,zn()};Ve("#tilt").oninput=i=>{Pe.tilt=+i.target.value*Math.PI/180,zn()};Ve("#zin").onclick=()=>{Pe.dist=ni(Pe.dist*.75,6,400),zn()};Ve("#zout").onclick=()=>{Pe.dist=ni(Pe.dist/.75,6,400),zn()};Ve("#rst").onclick=pp;var Hg=["#2563eb","#059669","#7c3aed","#db2777","#0891b2","#ca8a04"],dn=[],Gg={},H1=i=>Gg[i]||(Gg[i]=new Ir({color:i}));function n_(i,t){i.og.children.forEach(e=>e.material=t?H1(t):Nh)}function Gr(i,t=0){let e=i.mat.emissive;i===Vr?e.setHex(5592405):i.sel?e.copy(i.sel.tint):e.setHex(0),t&&e.addScalar(t)}function _p(i,t){let e=1e9,n=-1e9,s=1e9,r=-1e9;for(let h of i)e=Math.min(e,h.cx-h.size/2),n=Math.max(n,h.cx+h.size/2),s=Math.min(s,h.cy-h.size/2),r=Math.max(r,h.cy+h.size/2);let a=innerWidth/innerHeight,l=Math.tan(kh*Math.PI/360),u=i.length===1?ni(i[0].size*3.2+14,14,120):ni(Math.max((r-s)*1.5,(n-e)*1.5/a)/(2*l)+6,14,300);Object.assign(Pe,{tx:(e+n)/2,ty:(s+r)/2,dist:u,tilt:t,yaw:0}),zn()}var hr=Ve("#q"),Ci=Ve("#list"),hn=Ve("#mcs");function Vh(i,t=!0){if(Ci.style.display="none",hr.value="",!i.sel){dn.length>=6&&i_(dn[0].o,!0);let e=new Set(dn.map(s=>s.color)),n=Hg.find(s=>!e.has(s))||Hg[0];i.sel={o:i,color:n,tint:new ye(n).multiplyScalar(.12)},dn.push(i.sel),n_(i,n)}hn.classList.contains("min")&&Fl(!1),Ya.set(i,performance.now()),Gr(i),t&&_p([i],Math.max(Pe.tilt,.9)),dr()}function i_(i,t){let e=dn.indexOf(i.sel);e>=0&&dn.splice(e,1),i.sel=null,n_(i,null),Gr(i),zn(),t||dr()}function s_(i){let t=Math.min(devicePixelRatio||1,2),e=i.clientWidth,n=i.clientHeight;i.width=e*t,i.height=n*t;let s=i.getContext("2d");s.scale(t,t),s.clearRect(0,0,e,n);let r=dn.map(d=>{let b=1e9,g=-1e9,M=1e9,w=-1e9;for(let N of d.o.rings)for(let y=0;y<N[0].length;y+=2)b=Math.min(b,N[0][y]),g=Math.max(g,N[0][y]),M=Math.min(M,N[0][y+1]),w=Math.max(w,N[0][y+1]);return{x0:b,x1:g,y0:M,y1:w}}),a=Math.max(...r.map(d=>Math.max(d.x1-d.x0,d.y1-d.y0))),l=(Math.min(e,n)-22)/a;dn.forEach((d,b)=>{let g=r[b],M=(g.x0+g.x1)/2,w=(g.y0+g.y1)/2;s.beginPath();for(let N of d.o.rings)for(let y of N)for(let m=0;m<y.length;m+=2){let $=e/2+(y[m]-M)*l,V=n/2-(y[m+1]-w)*l;m?s.lineTo($,V):s.moveTo($,V),m===y.length-2&&s.closePath()}s.fillStyle=d.color+"40",s.fill("evenodd"),s.lineWidth=1.6,s.strokeStyle=d.color,s.stroke()});let u=l/L1,h=[.5,1,2,5,10,20,50,100].find(d=>d*u>=28)||100;s.fillStyle="#6b7385",s.fillRect(10,n-12,h*u,2),s.font="10px system-ui",s.fillText(h+" km",12+h*u,n-8)}function dr(){if(!dn.length){hn.innerHTML="",hn.style.display="none",Fl(!1);return}if(hn.style.display="flex",innerWidth<=640){let e=Ve("#inf").getBoundingClientRect().bottom;hn.style.top=Math.round(e+8)+"px",hn.style.maxHeight=Math.max(110,Math.min(innerHeight*(Ve("#rc").classList.contains("min")?.7:.4),Ve("#rc").getBoundingClientRect().top-e-16))+"px",hn.style.width=""}else if(innerHeight<=500){let e=Ve("#inf").getBoundingClientRect().bottom;hn.style.top=Math.round(e+8)+"px",hn.style.maxHeight=Math.max(120,innerHeight-e-20)+"px",hn.style.width="min(290px, 40vw)"}else hn.style.top="",hn.style.maxHeight="",hn.style.width="";window.__fitMcs&&window.__fitMcs();let i=dn.map((e,n)=>{let s=e.o;return`<div class="mc" draggable="true" data-i="${n}" style="--c:${e.color}"><button class="x" data-x="${n}" title="Cerrar">\xD7</button><div class="mh"><i class="dot"></i><b>${s.name}</b><em>${Ph[s.pr]}</em></div><div class="mb">${$s(s.pop)}${__t(608)}${Xa(s.area)} km\xB2 \xB7 ${Xa(s.pop/s.area)}${__t(609)}${s.rankP}${__t(610)}`}).join("");if(dn.length>1){let e=s=>Math.max(...dn.map(s)),n=[[__t(611),s=>s.o.pop,$s],[__t(612),s=>s.o.area,Xa],[__t(613),s=>s.o.pop/s.o.area,Xa]];if(i+=`${__t(614)}`+n.map(([s,r,a])=>`<div class="cr"><span>${s}</span>${dn.map(l=>`<div class="bw"><i style="width:${Math.max(2,r(l)/e(r)*100)}%;background:${l.color}"></i><b>${a(r(l))}</b></div>`).join("")}</div>`).join(""),dn.length===2){let[s,r]=dn.map(h=>h.o),[a,l]=s.pop>=r.pop?[s,r]:[r,s],u=(h,d)=>(h>=d?h/d:d/h).toLocaleString("es-ES",{maximumFractionDigits:1});i+=`<small class="ratio"><b>${a.name}${__t(615)}${u(a.pop,l.pop)}${__t(616)}${l.name}${__t(617)}${u(a.area,l.area)}\xD7 ${a.area>=l.area?__t(618):__t(619)}.</small>`}i+="</div>"}hn.innerHTML=i,hn.querySelectorAll("[data-x]").forEach(e=>e.onclick=n=>{n.stopPropagation(),i_(dn[+e.dataset.x].o)}),hn.querySelectorAll(".mc").forEach(e=>{e.onclick=()=>_p([dn[+e.dataset.i].o],Math.max(Pe.tilt,.9)),e.onmouseenter=()=>{let n=dn[+e.dataset.i].o;Ya.set(n,performance.now())},e.ondragstart=n=>{n.dataTransfer.setData("text/plain",e.dataset.i),e.classList.add("drag")},e.ondragend=()=>e.classList.remove("drag"),e.ondragover=n=>{n.preventDefault(),e.classList.add("over")},e.ondragleave=()=>e.classList.remove("over"),e.ondrop=n=>{n.preventDefault();let s=+n.dataTransfer.getData("text/plain"),r=+e.dataset.i;if(s!==r){let[a]=dn.splice(s,1);dn.splice(r,0,a),dr();let l=Ve("#sil");l&&l.classList.add("flash")}}});let t=Ve("#sil");t&&s_(t)}hr.addEventListener("input",()=>{if(window.__rodSearch){window.__rodSearch(hr.value);return}let i=np(hr.value.trim());if(!i){Ci.style.display="none";return}let t=[],e=[];for(let s of Sn){let r=np(s.name);r.startsWith(i)?t.push(s):r.includes(i)&&e.push(s)}let n=t.sort((s,r)=>r.pop-s.pop).concat(e.sort((s,r)=>r.pop-s.pop)).slice(0,8);Ci.innerHTML=n.map((s,r)=>`<li data-i="${r}">${s.name}<em>${$s(s.pop)}</em></li>`).join("")||__t(575),Ci.style.display="block",Ci.querySelectorAll("li[data-i]").forEach(s=>s.onclick=()=>Vh(n[+s.dataset.i])),Ci._r=n});hr.addEventListener("keydown",i=>{i.key==="Enter"&&Ci._pick?Ci._pick(0):i.key==="Enter"&&Ci._r&&Ci._r[0]&&Vh(Ci._r[0]),i.key==="Escape"&&(hr.value="",Ci.style.display="none")});addEventListener("keydown",i=>{i.key==="Escape"&&i.target!==hr&&r_()});var Wg=0;addEventListener("resize",()=>{clearTimeout(Wg),Wg=setTimeout(()=>{let i=Ve("#sil");i&&s_(i)},120)});var Bh=null,cp=Ve("#chip");function G1(i,t,e=.8){Bh={codes:new Set(i.map(n=>n.code)),label:t},Sn.forEach(n=>{n.inF=Bh.codes.has(n.code),$h(n)}),cp.innerHTML=`${__t(620)}${t}</b> \xB7 ${i.length}${i.length===1?__t(621):__t(622)}</span><button id="chx" title="Quitar filtro">\xD7</button>`,cp.style.display="flex",Ve("#chx").onclick=r_,zh(),_p(i,e),i.slice(0,40).forEach(n=>Ya.set(n,performance.now()))}function r_(){Bh&&(Bh=null,Sn.forEach(i=>{i.inF=!0,$h(i)}),cp.style.display="none",zh())}var W1="prov";function X1(i){let t=[...Sn].sort((a,l)=>l.pop-a.pop),e=[...Sn].sort((a,l)=>l.pop/l.area-a.pop/a.area),[n,s,r]=i.split(":");if(n==="pr")return[Sn.filter(a=>a.pr===s),Jg[s]];if(n==="top")return s==="pop"?[t.slice(0,10),__t(623)]:[e.slice(0,10),__t(624)];if(n==="low")return s==="pop"?[t.slice(-10),__t(625)]:[e.slice(-10),__t(626)];if(n==="size")return[Sn.filter(a=>a.pop>=+s&&a.pop<+r),+r>1e9?`${$s(+s)}${__t(627)}`:+s==0?`${__t(628)}${$s(+r)}${__t(629)}`:`${$s(+s)} \u2013 ${$s(+r-1)}${__t(629)}`];if(n==="n50"){let a=0,l=0;for(let u of t)if(a+=u.pop,l++,a>=sp/2)break;return[t.slice(0,l),`${__t(630)}`]}return[[],""]}function q1(i){let[t,e]=X1(i);t.length&&G1(t,e,i.startsWith("pr:")?.75:.8)}document.querySelectorAll("[data-tab]").forEach(i=>i.onclick=()=>{W1=i.dataset.tab,Ve("#dbody").scrollTop=0});var Hr=Ve("#rc"),Dh=Ve("#mcstab");function Ja(i){Hr.classList.toggle("min",i),Ve("#rcgrab span").textContent=i?__t(672):__t(673),dn.length&&dr()}function Fl(i){hn.classList.toggle("min",i),hn.style.transform="",hn.style.opacity="",Dh.classList.toggle("on",i&&dn.length>0),i&&(Dh.textContent=`\u25B8 ${dn.length} ${dn.length===1?"ficha":"fichas"}`,Dh.style.top=hn.style.top||"124px")}function xp(i,{onMove:t,onEnd:e,axis:n}){let s=null;i.addEventListener("pointerdown",a=>{a.pointerType==="mouse"||!Hh.matches||a.target.closest("input,button:not(#rcgrab),.seg")||(s={x:a.clientX,y:a.clientY,id:a.pointerId,lock:null})}),addEventListener("pointermove",a=>{if(!s||a.pointerId!==s.id)return;let l=a.clientX-s.x,u=a.clientY-s.y;!s.lock&&Math.hypot(l,u)>10&&(s.lock=Math.abs(l)>Math.abs(u)?"x":"y"),s.lock===n&&t&&t(l,u)});let r=a=>{if(!s||a.pointerId!==s.id)return;let l=a.clientX-s.x,u=a.clientY-s.y,h=s.lock;s=null,e(h===n?l:0,h===n?u:0,h)};addEventListener("pointerup",r,!0),addEventListener("pointercancel",r,!0)}Ve("#rcgrab").onclick=()=>Ja(!Hr.classList.contains("min"));(innerWidth<=640||matchMedia("(max-height:500px) and (pointer:coarse)").matches||document.documentElement.classList.contains("cap"))&&Ja(!0);requestAnimationFrame(()=>document.documentElement.classList.remove("boot"));var a_=()=>innerWidth>640;xp(Hr,{axis:"y",onEnd:(i,t)=>{if(!a_())if(t>40&&!Hr.classList.contains("min")){let e=Ve("#dp.open #dbody");(!e||e.scrollTop<=0||t>120)&&Ja(!0)}else t<-30&&Hr.classList.contains("min")&&Ja(!1)}});xp(Hr,{axis:"x",onEnd:i=>{a_()&&(i>50?Ja(!0):i<-30&&Hr.classList.contains("min")&&Ja(!1))}});xp(hn,{axis:"x",onMove:i=>{i<0&&(hn.classList.add("sw"),hn.style.transform=`translateX(${i}px)`,hn.style.opacity=Math.max(.2,1+i/300))},onEnd:i=>{hn.classList.remove("sw"),i<-60?(Fl(!0),window.__rodHide&&!dn.length&&window.__rodHide()):(hn.style.transform="",hn.style.opacity="")}});Dh.onclick=()=>{Fl(!1),dr()};Ve("#dtoggle").onclick=()=>{let i=Ve("#dp").classList.toggle("open");Ve("#rc").classList.toggle("dopen",i),Ve("#dtoggle").textContent=i?Hh.matches&&innerWidth<=640?__t(674):__t(675):__t(676),window.__rodCard&&window.__rodCard()};var Hh=matchMedia("(max-width:640px), (max-height:500px)");function o_(){let i=Ve("#leg");Hh.matches?Ve("#rc").insertBefore(i,Ve("#dtoggle")):document.body.appendChild(i),dn.length&&dr()}Hh.addEventListener("change",o_);o_();t_();U1();pp();Object.assign(An,Pe);for(let i of Sn)i.z=.01;requestAnimationFrame(qa);Bg({scene:zs,camera:Ss,renderer:Ol,goal:Pe,cur:An,invalidate:zn,flyTo:(i,t,e,n)=>{Object.assign(Pe,{tx:(i-Nl)*vs,ty:(t-Ul)*vs,dist:e,tilt:n}),zn()},K:vs,CX:Nl,CY:Ul,mcs:hn,q:hr,list:Ci,munis:Sn,select:Vh,norm:np,fmt:$s,clamp:ni,mcsMin:Fl});window.__app={scene:zs,renderer:Ol,camera:Ss,munis:Sn,labs:Oh,goal:Pe,cur:An,select:Vh,get mode(){return up}};window.__ready=!0;{let i=document.getElementById("ttb"),t=document.getElementById("p");i&&t&&i.addEventListener("click",()=>{let e=t.classList.toggle("tt");i.textContent=e?__t(682):__t(683)})}})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
