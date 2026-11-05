(()=>{var g0=0,cf=1,_0=2;var bl=1,x0=2,ka=3,ar=0,ui=1,fs=2,ps=0,$a=1,uf=2,hf=3,df=4,v0=5;var Or=100,y0=101,S0=102,b0=103,M0=104,w0=200,E0=201,T0=202,A0=203,ff=204,pf=205,C0=206,R0=207,I0=208,P0=209,L0=210,D0=211,N0=212,U0=213,O0=214,Vc=0,Hc=1,Gc=2,Ta=3,Wc=4,Xc=5,qc=6,Yc=7,Ru=0,F0=1,B0=2,ji=0,mf=1,gf=2,_f=3,xf=4,vf=5,yf=6,Sf=7;var bf=300,or=301,Fr=302,Iu=303,Pu=304,Ml=306,Jc=1e3,os=1001,Zc=1002,On=1003,k0=1004;var wl=1005;var Hn=1006,Lu=1007;var lr=1008;var Si=1009,Mf=1010,wf=1011,za=1012,Du=1013,Ki=1014,Bi=1015,Qi=1016,Nu=1017,Uu=1018,Va=1020,Ef=35902,Tf=35899,Af=1021,Cf=1022,ki=1023,cs=1026,cr=1027,Ou=1028,Fu=1029,ur=1030,Bu=1031;var ku=1033,El=33776,Tl=33777,Al=33778,Cl=33779,$u=35840,zu=35841,Vu=35842,Hu=35843,Gu=36196,Wu=37492,Xu=37496,qu=37488,Yu=37489,Rl=37490,Ju=37491,Zu=37808,ju=37809,Ku=37810,Qu=37811,th=37812,eh=37813,nh=37814,ih=37815,sh=37816,rh=37817,ah=37818,oh=37819,lh=37820,ch=37821,uh=36492,hh=36494,dh=36495,fh=36283,ph=36284,Il=36285,mh=36286;var zo=2300,jc=2301,$c=2302,Jd=2303,Zd=2400,jd=2401,Kd=2402;var $0=3200;var gh=0,z0=1,ks="",Ai="srgb",Vo="srgb-linear",Ho="linear",an="srgb";var zc=7680;var V0=519,H0=512,G0=513,W0=514,_h=515,X0=516,q0=517,xh=518,Y0=519,Rf=35044;var If="300 es",Yi=2e3,Aa=2001;function xx(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function vx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Go(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function J0(){let i=Go("canvas");return i.style.display="block",i}var Lm={},Ca=null;function Wo(...i){let t="THREE."+i.shift();Ca?Ca("log",t,...i):console.log(t,...i)}function Z0(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Me(...i){i=Z0(i);let t="THREE."+i.shift();if(Ca)Ca("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function we(...i){i=Z0(i);let t="THREE."+i.shift();if(Ca)Ca("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Rr(...i){let t=i.join(" ");t in Lm||(Lm[t]=!0,Me(...i))}function j0(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var K0={[Vc]:Hc,[Gc]:qc,[Wc]:Yc,[Ta]:Xc,[Hc]:Vc,[qc]:Gc,[Yc]:Wc,[Xc]:Ta},us=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Kn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Dm=1234567,Fo=Math.PI/180,Ra=180/Math.PI;function ls(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Kn[i&255]+Kn[i>>8&255]+Kn[i>>16&255]+Kn[i>>24&255]+"-"+Kn[t&255]+Kn[t>>8&255]+"-"+Kn[t>>16&15|64]+Kn[t>>24&255]+"-"+Kn[e&63|128]+Kn[e>>8&255]+"-"+Kn[e>>16&255]+Kn[e>>24&255]+Kn[n&255]+Kn[n>>8&255]+Kn[n>>16&255]+Kn[n>>24&255]).toLowerCase()}function Ne(i,t,e){return Math.max(t,Math.min(e,i))}function Pf(i,t){return(i%t+t)%t}function yx(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Sx(i,t,e){return i!==t?(e-i)/(t-i):0}function Bo(i,t,e){return(1-e)*i+e*t}function bx(i,t,e,n){return Bo(i,t,1-Math.exp(-e*n))}function Mx(i,t=1){return t-Math.abs(Pf(i,t*2)-t)}function wx(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Ex(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Tx(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Ax(i,t){return i+Math.random()*(t-i)}function Cx(i){return i*(.5-Math.random())}function Rx(i){i!==void 0&&(Dm=i);let t=Dm+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ix(i){return i*Fo}function Px(i){return i*Ra}function Lx(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Dx(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Nx(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ux(i,t,e,n,s){let r=Math.cos,o=Math.sin,l=r(e/2),u=o(e/2),h=r((t+n)/2),d=o((t+n)/2),b=r((t-n)/2),g=o((t-n)/2),M=r((n-t)/2),w=o((n-t)/2);switch(s){case"XYX":i.set(l*d,u*b,u*g,l*h);break;case"YZY":i.set(u*g,l*d,u*b,l*h);break;case"ZXZ":i.set(u*b,u*g,l*d,l*h);break;case"XZX":i.set(l*d,u*w,u*M,l*h);break;case"YXY":i.set(u*M,l*d,u*w,l*h);break;case"ZYZ":i.set(u*w,u*M,l*d,l*h);break;default:Me("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function qi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function cn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Lf={DEG2RAD:Fo,RAD2DEG:Ra,generateUUID:ls,clamp:Ne,euclideanModulo:Pf,mapLinear:yx,inverseLerp:Sx,lerp:Bo,damp:bx,pingpong:Mx,smoothstep:wx,smootherstep:Ex,randInt:Tx,randFloat:Ax,randFloatSpread:Cx,seededRandom:Rx,degToRad:Ix,radToDeg:Px,isPowerOfTwo:Lx,ceilPowerOfTwo:Dx,floorPowerOfTwo:Nx,setQuaternionFromProperEuler:Ux,normalize:cn,denormalize:qi},Wt=class i{static{i.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Ne(this.x,t.x,e.x),this.y=Ne(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Ne(this.x,t,e),this.y=Ne(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},hs=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,l){let u=n[s+0],h=n[s+1],d=n[s+2],b=n[s+3],g=r[o+0],M=r[o+1],w=r[o+2],N=r[o+3];if(b!==N||u!==g||h!==M||d!==w){let y=u*g+h*M+d*w+b*N;y<0&&(g=-g,M=-M,w=-w,N=-N,y=-y);let m=1-l;if(y<.9995){let $=Math.acos(y),V=Math.sin($);m=Math.sin(m*$)/V,l=Math.sin(l*$)/V,u=u*m+g*l,h=h*m+M*l,d=d*m+w*l,b=b*m+N*l}else{u=u*m+g*l,h=h*m+M*l,d=d*m+w*l,b=b*m+N*l;let $=1/Math.sqrt(u*u+h*h+d*d+b*b);u*=$,h*=$,d*=$,b*=$}}t[e]=u,t[e+1]=h,t[e+2]=d,t[e+3]=b}static multiplyQuaternionsFlat(t,e,n,s,r,o){let l=n[s],u=n[s+1],h=n[s+2],d=n[s+3],b=r[o],g=r[o+1],M=r[o+2],w=r[o+3];return t[e]=l*w+d*b+u*M-h*g,t[e+1]=u*w+d*g+h*b-l*M,t[e+2]=h*w+d*M+l*g-u*b,t[e+3]=d*w-l*b-u*g-h*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,l=Math.cos,u=Math.sin,h=l(n/2),d=l(s/2),b=l(r/2),g=u(n/2),M=u(s/2),w=u(r/2);switch(o){case"XYZ":this._x=g*d*b+h*M*w,this._y=h*M*b-g*d*w,this._z=h*d*w+g*M*b,this._w=h*d*b-g*M*w;break;case"YXZ":this._x=g*d*b+h*M*w,this._y=h*M*b-g*d*w,this._z=h*d*w-g*M*b,this._w=h*d*b+g*M*w;break;case"ZXY":this._x=g*d*b-h*M*w,this._y=h*M*b+g*d*w,this._z=h*d*w+g*M*b,this._w=h*d*b-g*M*w;break;case"ZYX":this._x=g*d*b-h*M*w,this._y=h*M*b+g*d*w,this._z=h*d*w-g*M*b,this._w=h*d*b+g*M*w;break;case"YZX":this._x=g*d*b+h*M*w,this._y=h*M*b+g*d*w,this._z=h*d*w-g*M*b,this._w=h*d*b-g*M*w;break;case"XZY":this._x=g*d*b-h*M*w,this._y=h*M*b-g*d*w,this._z=h*d*w+g*M*b,this._w=h*d*b+g*M*w;break;default:Me("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],l=e[5],u=e[9],h=e[2],d=e[6],b=e[10],g=n+l+b;if(g>0){let M=.5/Math.sqrt(g+1);this._w=.25/M,this._x=(d-u)*M,this._y=(r-h)*M,this._z=(o-s)*M}else if(n>l&&n>b){let M=2*Math.sqrt(1+n-l-b);this._w=(d-u)/M,this._x=.25*M,this._y=(s+o)/M,this._z=(r+h)/M}else if(l>b){let M=2*Math.sqrt(1+l-n-b);this._w=(r-h)/M,this._x=(s+o)/M,this._y=.25*M,this._z=(u+d)/M}else{let M=2*Math.sqrt(1+b-n-l);this._w=(o-s)/M,this._x=(r+h)/M,this._y=(u+d)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ne(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,l=e._x,u=e._y,h=e._z,d=e._w;return this._x=n*d+o*l+s*h-r*u,this._y=s*d+o*u+r*l-n*h,this._z=r*d+o*h+n*u-s*l,this._w=o*d-n*l-s*u-r*h,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,l=this.dot(t);l<0&&(n=-n,s=-s,r=-r,o=-o,l=-l);let u=1-e;if(l<.9995){let h=Math.acos(l),d=Math.sin(h);u=Math.sin(u*h)/d,e=Math.sin(e*h)/d,this._x=this._x*u+n*e,this._y=this._y*u+s*e,this._z=this._z*u+r*e,this._w=this._w*u+o*e,this._onChangeCallback()}else this._x=this._x*u+n*e,this._y=this._y*u+s*e,this._z=this._z*u+r*e,this._w=this._w*u+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},j=class i{static{i.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Nm.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Nm.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,l=t.z,u=t.w,h=2*(o*s-l*n),d=2*(l*e-r*s),b=2*(r*n-o*e);return this.x=e+u*h+o*b-l*d,this.y=n+u*d+l*h-r*b,this.z=s+u*b+r*d-o*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Ne(this.x,t.x,e.x),this.y=Ne(this.y,t.y,e.y),this.z=Ne(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Ne(this.x,t,e),this.y=Ne(this.y,t,e),this.z=Ne(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,l=e.y,u=e.z;return this.x=s*u-r*l,this.y=r*o-n*u,this.z=n*l-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Md.copy(this).projectOnVector(t),this.sub(Md)}reflect(t){return this.sub(Md.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Md=new j,Nm=new hs,Le=class i{static{i.prototype.isMatrix3=!0}constructor(t,e,n,s,r,o,l,u,h){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,l,u,h)}set(t,e,n,s,r,o,l,u,h){let d=this.elements;return d[0]=t,d[1]=s,d[2]=l,d[3]=e,d[4]=r,d[5]=u,d[6]=n,d[7]=o,d[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],l=n[3],u=n[6],h=n[1],d=n[4],b=n[7],g=n[2],M=n[5],w=n[8],N=s[0],y=s[3],m=s[6],$=s[1],V=s[4],D=s[7],T=s[2],k=s[5],Y=s[8];return r[0]=o*N+l*$+u*T,r[3]=o*y+l*V+u*k,r[6]=o*m+l*D+u*Y,r[1]=h*N+d*$+b*T,r[4]=h*y+d*V+b*k,r[7]=h*m+d*D+b*Y,r[2]=g*N+M*$+w*T,r[5]=g*y+M*V+w*k,r[8]=g*m+M*D+w*Y,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],l=t[5],u=t[6],h=t[7],d=t[8];return e*o*d-e*l*h-n*r*d+n*l*u+s*r*h-s*o*u}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],l=t[5],u=t[6],h=t[7],d=t[8],b=d*o-l*h,g=l*u-d*r,M=h*r-o*u,w=e*b+n*g+s*M;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);let N=1/w;return t[0]=b*N,t[1]=(s*h-d*n)*N,t[2]=(l*n-s*o)*N,t[3]=g*N,t[4]=(d*e-s*u)*N,t[5]=(s*r-l*e)*N,t[6]=M*N,t[7]=(n*u-h*e)*N,t[8]=(o*e-n*r)*N,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,l){let u=Math.cos(r),h=Math.sin(r);return this.set(n*u,n*h,-n*(u*o+h*l)+o+t,-s*h,s*u,-s*(-h*o+u*l)+l+e,0,0,1),this}scale(t,e){return Rr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(wd.makeScale(t,e)),this}rotate(t){return Rr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(wd.makeRotation(-t)),this}translate(t,e){return Rr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(wd.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},wd=new Le,Um=new Le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Om=new Le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ox(){let i={enabled:!0,workingColorSpace:Vo,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===an&&(s.r=Fs(s.r),s.g=Fs(s.g),s.b=Fs(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===an&&(s.r=Ea(s.r),s.g=Ea(s.g),s.b=Ea(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ks?Ho:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Rr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Rr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Vo]:{primaries:t,whitePoint:n,transfer:Ho,toXYZ:Um,fromXYZ:Om,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ai},outputColorSpaceConfig:{drawingBufferColorSpace:Ai}},[Ai]:{primaries:t,whitePoint:n,transfer:an,toXYZ:Um,fromXYZ:Om,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ai}}}),i}var Ye=Ox();function Fs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ea(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ca,Kc=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ca===void 0&&(ca=Go("canvas")),ca.width=t.width,ca.height=t.height;let s=ca.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ca}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Go("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Fs(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Fs(e[n]/255)*255):e[n]=Fs(e[n]);return{data:e,width:t.width,height:t.height}}else return Me("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Fx=0,Ia=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Fx++}),this.uuid=ls(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,l=s.length;o<l;o++)s[o].isDataTexture?r.push(Ed(s[o].image)):r.push(Ed(s[o]))}else r=Ed(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Ed(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Kc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Me("Texture: Unable to serialize Texture."),{})}var Bx=0,Td=new j,xi=class i extends us{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=os,s=os,r=Hn,o=lr,l=ki,u=Si,h=i.DEFAULT_ANISOTROPY,d=ks){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bx++}),this.uuid=ls(),this.name="",this.source=new Ia(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=h,this.format=l,this.internalFormat=null,this.type=u,this.offset=new Wt(0,0),this.repeat=new Wt(1,1),this.center=new Wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Td).x}get height(){return this.source.getSize(Td).y}get depth(){return this.source.getSize(Td).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Me(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Me(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==bf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Jc:t.x=t.x-Math.floor(t.x);break;case os:t.x=t.x<0?0:1;break;case Zc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Jc:t.y=t.y-Math.floor(t.y);break;case os:t.y=t.y<0?0:1;break;case Zc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};xi.DEFAULT_IMAGE=null;xi.DEFAULT_MAPPING=bf;xi.DEFAULT_ANISOTROPY=1;var on=class i{static{i.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,u=t.elements,h=u[0],d=u[4],b=u[8],g=u[1],M=u[5],w=u[9],N=u[2],y=u[6],m=u[10];if(Math.abs(d-g)<.01&&Math.abs(b-N)<.01&&Math.abs(w-y)<.01){if(Math.abs(d+g)<.1&&Math.abs(b+N)<.1&&Math.abs(w+y)<.1&&Math.abs(h+M+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let V=(h+1)/2,D=(M+1)/2,T=(m+1)/2,k=(d+g)/4,Y=(b+N)/4,R=(w+y)/4;return V>D&&V>T?V<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(V),s=k/n,r=Y/n):D>T?D<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(D),n=k/s,r=R/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=Y/r,s=R/r),this.set(n,s,r,e),this}let $=Math.sqrt((y-w)*(y-w)+(b-N)*(b-N)+(g-d)*(g-d));return Math.abs($)<.001&&($=1),this.x=(y-w)/$,this.y=(b-N)/$,this.z=(g-d)/$,this.w=Math.acos((h+M+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Ne(this.x,t.x,e.x),this.y=Ne(this.y,t.y,e.y),this.z=Ne(this.z,t.z,e.z),this.w=Ne(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Ne(this.x,t,e),this.y=Ne(this.y,t,e),this.z=Ne(this.z,t,e),this.w=Ne(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Qc=class extends us{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Hn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new on(0,0,t,e),this.scissorTest=!1,this.viewport=new on(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new xi(s),o=n.count;for(let l=0;l<o;l++)this.textures[l]=r.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Hn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ia(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},vi=class extends Qc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Xo=class extends xi{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=On,this.minFilter=On,this.wrapR=os,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var tu=class extends xi{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=On,this.minFilter=On,this.wrapR=os,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Ze=class i{static{i.prototype.isMatrix4=!0}constructor(t,e,n,s,r,o,l,u,h,d,b,g,M,w,N,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,l,u,h,d,b,g,M,w,N,y)}set(t,e,n,s,r,o,l,u,h,d,b,g,M,w,N,y){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=l,m[13]=u,m[2]=h,m[6]=d,m[10]=b,m[14]=g,m[3]=M,m[7]=w,m[11]=N,m[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/ua.setFromMatrixColumn(t,0).length(),r=1/ua.setFromMatrixColumn(t,1).length(),o=1/ua.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),l=Math.sin(n),u=Math.cos(s),h=Math.sin(s),d=Math.cos(r),b=Math.sin(r);if(t.order==="XYZ"){let g=o*d,M=o*b,w=l*d,N=l*b;e[0]=u*d,e[4]=-u*b,e[8]=h,e[1]=M+w*h,e[5]=g-N*h,e[9]=-l*u,e[2]=N-g*h,e[6]=w+M*h,e[10]=o*u}else if(t.order==="YXZ"){let g=u*d,M=u*b,w=h*d,N=h*b;e[0]=g+N*l,e[4]=w*l-M,e[8]=o*h,e[1]=o*b,e[5]=o*d,e[9]=-l,e[2]=M*l-w,e[6]=N+g*l,e[10]=o*u}else if(t.order==="ZXY"){let g=u*d,M=u*b,w=h*d,N=h*b;e[0]=g-N*l,e[4]=-o*b,e[8]=w+M*l,e[1]=M+w*l,e[5]=o*d,e[9]=N-g*l,e[2]=-o*h,e[6]=l,e[10]=o*u}else if(t.order==="ZYX"){let g=o*d,M=o*b,w=l*d,N=l*b;e[0]=u*d,e[4]=w*h-M,e[8]=g*h+N,e[1]=u*b,e[5]=N*h+g,e[9]=M*h-w,e[2]=-h,e[6]=l*u,e[10]=o*u}else if(t.order==="YZX"){let g=o*u,M=o*h,w=l*u,N=l*h;e[0]=u*d,e[4]=N-g*b,e[8]=w*b+M,e[1]=b,e[5]=o*d,e[9]=-l*d,e[2]=-h*d,e[6]=M*b+w,e[10]=g-N*b}else if(t.order==="XZY"){let g=o*u,M=o*h,w=l*u,N=l*h;e[0]=u*d,e[4]=-b,e[8]=h*d,e[1]=g*b+N,e[5]=o*d,e[9]=M*b-w,e[2]=w*b-M,e[6]=l*d,e[10]=N*b+g}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(kx,t,$x)}lookAt(t,e,n){let s=this.elements;return Ei.subVectors(t,e),Ei.lengthSq()===0&&(Ei.z=1),Ei.normalize(),Js.crossVectors(n,Ei),Js.lengthSq()===0&&(Math.abs(n.z)===1?Ei.x+=1e-4:Ei.z+=1e-4,Ei.normalize(),Js.crossVectors(n,Ei)),Js.normalize(),fc.crossVectors(Ei,Js),s[0]=Js.x,s[4]=fc.x,s[8]=Ei.x,s[1]=Js.y,s[5]=fc.y,s[9]=Ei.y,s[2]=Js.z,s[6]=fc.z,s[10]=Ei.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],l=n[4],u=n[8],h=n[12],d=n[1],b=n[5],g=n[9],M=n[13],w=n[2],N=n[6],y=n[10],m=n[14],$=n[3],V=n[7],D=n[11],T=n[15],k=s[0],Y=s[4],R=s[8],B=s[12],q=s[1],Z=s[5],ot=s[9],ht=s[13],tt=s[2],st=s[6],pt=s[10],_t=s[14],At=s[3],xt=s[7],wt=s[11],bt=s[15];return r[0]=o*k+l*q+u*tt+h*At,r[4]=o*Y+l*Z+u*st+h*xt,r[8]=o*R+l*ot+u*pt+h*wt,r[12]=o*B+l*ht+u*_t+h*bt,r[1]=d*k+b*q+g*tt+M*At,r[5]=d*Y+b*Z+g*st+M*xt,r[9]=d*R+b*ot+g*pt+M*wt,r[13]=d*B+b*ht+g*_t+M*bt,r[2]=w*k+N*q+y*tt+m*At,r[6]=w*Y+N*Z+y*st+m*xt,r[10]=w*R+N*ot+y*pt+m*wt,r[14]=w*B+N*ht+y*_t+m*bt,r[3]=$*k+V*q+D*tt+T*At,r[7]=$*Y+V*Z+D*st+T*xt,r[11]=$*R+V*ot+D*pt+T*wt,r[15]=$*B+V*ht+D*_t+T*bt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],l=t[5],u=t[9],h=t[13],d=t[2],b=t[6],g=t[10],M=t[14],w=t[3],N=t[7],y=t[11],m=t[15],$=u*M-h*g,V=l*M-h*b,D=l*g-u*b,T=o*M-h*d,k=o*g-u*d,Y=o*b-l*d;return e*(N*$-y*V+m*D)-n*(w*$-y*T+m*k)+s*(w*V-N*T+m*Y)-r*(w*D-N*k+y*Y)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],l=t[9],u=t[2],h=t[6],d=t[10];return e*(o*d-l*h)-n*(r*d-l*u)+s*(r*h-o*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],l=t[5],u=t[6],h=t[7],d=t[8],b=t[9],g=t[10],M=t[11],w=t[12],N=t[13],y=t[14],m=t[15],$=e*l-n*o,V=e*u-s*o,D=e*h-r*o,T=n*u-s*l,k=n*h-r*l,Y=s*h-r*u,R=d*N-b*w,B=d*y-g*w,q=d*m-M*w,Z=b*y-g*N,ot=b*m-M*N,ht=g*m-M*y,tt=$*ht-V*ot+D*Z+T*q-k*B+Y*R;if(tt===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let st=1/tt;return t[0]=(l*ht-u*ot+h*Z)*st,t[1]=(s*ot-n*ht-r*Z)*st,t[2]=(N*Y-y*k+m*T)*st,t[3]=(g*k-b*Y-M*T)*st,t[4]=(u*q-o*ht-h*B)*st,t[5]=(e*ht-s*q+r*B)*st,t[6]=(y*D-w*Y-m*V)*st,t[7]=(d*Y-g*D+M*V)*st,t[8]=(o*ot-l*q+h*R)*st,t[9]=(n*q-e*ot-r*R)*st,t[10]=(w*k-N*D+m*$)*st,t[11]=(b*D-d*k-M*$)*st,t[12]=(l*B-o*Z-u*R)*st,t[13]=(e*Z-n*B+s*R)*st,t[14]=(N*V-w*T-y*$)*st,t[15]=(d*T-b*V+g*$)*st,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,l=t.y,u=t.z,h=r*o,d=r*l;return this.set(h*o+n,h*l-s*u,h*u+s*l,0,h*l+s*u,d*l+n,d*u-s*o,0,h*u-s*l,d*u+s*o,r*u*u+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,l=e._z,u=e._w,h=r+r,d=o+o,b=l+l,g=r*h,M=r*d,w=r*b,N=o*d,y=o*b,m=l*b,$=u*h,V=u*d,D=u*b,T=n.x,k=n.y,Y=n.z;return s[0]=(1-(N+m))*T,s[1]=(M+D)*T,s[2]=(w-V)*T,s[3]=0,s[4]=(M-D)*k,s[5]=(1-(g+m))*k,s[6]=(y+$)*k,s[7]=0,s[8]=(w+V)*Y,s[9]=(y-$)*Y,s[10]=(1-(g+N))*Y,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=ua.set(s[0],s[1],s[2]).length(),l=ua.set(s[4],s[5],s[6]).length(),u=ua.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Hi.copy(this);let h=1/o,d=1/l,b=1/u;return Hi.elements[0]*=h,Hi.elements[1]*=h,Hi.elements[2]*=h,Hi.elements[4]*=d,Hi.elements[5]*=d,Hi.elements[6]*=d,Hi.elements[8]*=b,Hi.elements[9]*=b,Hi.elements[10]*=b,e.setFromRotationMatrix(Hi),n.x=o,n.y=l,n.z=u,this}makePerspective(t,e,n,s,r,o,l=Yi,u=!1){let h=this.elements,d=2*r/(e-t),b=2*r/(n-s),g=(e+t)/(e-t),M=(n+s)/(n-s),w,N;if(u)w=r/(o-r),N=o*r/(o-r);else if(l===Yi)w=-(o+r)/(o-r),N=-2*o*r/(o-r);else if(l===Aa)w=-o/(o-r),N=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return h[0]=d,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=b,h[9]=M,h[13]=0,h[2]=0,h[6]=0,h[10]=w,h[14]=N,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,n,s,r,o,l=Yi,u=!1){let h=this.elements,d=2/(e-t),b=2/(n-s),g=-(e+t)/(e-t),M=-(n+s)/(n-s),w,N;if(u)w=1/(o-r),N=o/(o-r);else if(l===Yi)w=-2/(o-r),N=-(o+r)/(o-r);else if(l===Aa)w=-1/(o-r),N=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return h[0]=d,h[4]=0,h[8]=0,h[12]=g,h[1]=0,h[5]=b,h[9]=0,h[13]=M,h[2]=0,h[6]=0,h[10]=w,h[14]=N,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ua=new j,Hi=new Ze,kx=new j(0,0,0),$x=new j(1,1,1),Js=new j,fc=new j,Ei=new j,Fm=new Ze,Bm=new hs,Bs=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],l=s[8],u=s[1],h=s[5],d=s[9],b=s[2],g=s[6],M=s[10];switch(e){case"XYZ":this._y=Math.asin(Ne(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,M),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Ne(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(l,M),this._z=Math.atan2(u,h)):(this._y=Math.atan2(-b,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ne(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-b,M),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(u,r));break;case"ZYX":this._y=Math.asin(-Ne(b,-1,1)),Math.abs(b)<.9999999?(this._x=Math.atan2(g,M),this._z=Math.atan2(u,r)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(Ne(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-d,h),this._y=Math.atan2(-b,r)):(this._x=0,this._y=Math.atan2(l,M));break;case"XZY":this._z=Math.asin(-Ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(l,r)):(this._x=Math.atan2(-d,M),this._y=0);break;default:Me("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Fm.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Fm,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Bm.setFromEuler(this),this.setFromQuaternion(Bm,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Bs.DEFAULT_ORDER="XYZ";var Pa=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},zx=0,km=new j,ha=new hs,Ls=new Ze,pc=new j,Ro=new j,Vx=new j,Hx=new hs,$m=new j(1,0,0),zm=new j(0,1,0),Vm=new j(0,0,1),Hm={type:"added"},Gx={type:"removed"},da={type:"childadded",child:null},Ad={type:"childremoved",child:null},Fn=class i extends us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zx++}),this.uuid=ls(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new j,e=new Bs,n=new hs,s=new j(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ze},normalMatrix:{value:new Le}}),this.matrix=new Ze,this.matrixWorld=new Ze,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ha.setFromAxisAngle(t,e),this.quaternion.multiply(ha),this}rotateOnWorldAxis(t,e){return ha.setFromAxisAngle(t,e),this.quaternion.premultiply(ha),this}rotateX(t){return this.rotateOnAxis($m,t)}rotateY(t){return this.rotateOnAxis(zm,t)}rotateZ(t){return this.rotateOnAxis(Vm,t)}translateOnAxis(t,e){return km.copy(t).applyQuaternion(this.quaternion),this.position.add(km.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis($m,t)}translateY(t){return this.translateOnAxis(zm,t)}translateZ(t){return this.translateOnAxis(Vm,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ls.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?pc.copy(t):pc.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ro.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ls.lookAt(Ro,pc,this.up):Ls.lookAt(pc,Ro,this.up),this.quaternion.setFromRotationMatrix(Ls),s&&(Ls.extractRotation(s.matrixWorld),ha.setFromRotationMatrix(Ls),this.quaternion.premultiply(ha.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(we("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Hm),da.child=t,this.dispatchEvent(da),da.child=null):we("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Gx),Ad.child=t,this.dispatchEvent(Ad),Ad.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ls.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ls.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ls),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Hm),da.child=t,this.dispatchEvent(da),da.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ro,t,Vx),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ro,Hx,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,l=r.length;o<l;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(l=>({...l})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(l,u){return l[u.uuid]===void 0&&(l[u.uuid]=u.toJSON(t)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let u=l.shapes;if(Array.isArray(u))for(let h=0,d=u.length;h<d;h++){let b=u[h];r(t.shapes,b)}else r(t.shapes,u)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let u=0,h=this.material.length;u<h;u++)l.push(r(t.materials,this.material[u]));s.material=l}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){let u=this.animations[l];s.animations.push(r(t.animations,u))}}if(e){let l=o(t.geometries),u=o(t.materials),h=o(t.textures),d=o(t.images),b=o(t.shapes),g=o(t.skeletons),M=o(t.animations),w=o(t.nodes);l.length>0&&(n.geometries=l),u.length>0&&(n.materials=u),h.length>0&&(n.textures=h),d.length>0&&(n.images=d),b.length>0&&(n.shapes=b),g.length>0&&(n.skeletons=g),M.length>0&&(n.animations=M),w.length>0&&(n.nodes=w)}return n.object=s,n;function o(l){let u=[];for(let h in l){let d=l[h];delete d.metadata,u.push(d)}return u}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Fn.DEFAULT_UP=new j(0,1,0);Fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ji=class extends Fn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Wx={type:"move"},La=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ji,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ji,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ji,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,l=this._targetRay,u=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){o=!0;for(let N of t.hand.values()){let y=e.getJointPose(N,n),m=this._getHandJoint(h,N);y!==null&&(m.matrix.fromArray(y.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=y.radius),m.visible=y!==null}let d=h.joints["index-finger-tip"],b=h.joints["thumb-tip"],g=d.position.distanceTo(b.position),M=.02,w=.005;h.inputState.pinching&&g>M+w?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&g<=M-w&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else u!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(u.matrix.fromArray(r.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,r.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(r.linearVelocity)):u.hasLinearVelocity=!1,r.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(r.angularVelocity)):u.hasAngularVelocity=!1,u.eventsEnabled&&u.dispatchEvent({type:"gripUpdated",data:t,target:this})));l!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(Wx)))}return l!==null&&(l.visible=s!==null),u!==null&&(u.visible=r!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ji;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Q0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zs={h:0,s:0,l:0},mc={h:0,s:0,l:0};function Cd(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var ye=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ai){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ye.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Ye.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ye.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Ye.workingColorSpace){if(t=Pf(t,1),e=Ne(e,0,1),n=Ne(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Cd(o,r,t+1/3),this.g=Cd(o,r,t),this.b=Cd(o,r,t-1/3)}return Ye.colorSpaceToWorking(this,s),this}setStyle(t,e=Ai){function n(r){r!==void 0&&parseFloat(r)<1&&Me("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],l=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Me("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Me("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ai){let n=Q0[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Me("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Fs(t.r),this.g=Fs(t.g),this.b=Fs(t.b),this}copyLinearToSRGB(t){return this.r=Ea(t.r),this.g=Ea(t.g),this.b=Ea(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ai){return Ye.workingToColorSpace(Qn.copy(this),t),Math.round(Ne(Qn.r*255,0,255))*65536+Math.round(Ne(Qn.g*255,0,255))*256+Math.round(Ne(Qn.b*255,0,255))}getHexString(t=Ai){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ye.workingColorSpace){Ye.workingToColorSpace(Qn.copy(this),e);let n=Qn.r,s=Qn.g,r=Qn.b,o=Math.max(n,s,r),l=Math.min(n,s,r),u,h,d=(l+o)/2;if(l===o)u=0,h=0;else{let b=o-l;switch(h=d<=.5?b/(o+l):b/(2-o-l),o){case n:u=(s-r)/b+(s<r?6:0);break;case s:u=(r-n)/b+2;break;case r:u=(n-s)/b+4;break}u/=6}return t.h=u,t.s=h,t.l=d,t}getRGB(t,e=Ye.workingColorSpace){return Ye.workingToColorSpace(Qn.copy(this),e),t.r=Qn.r,t.g=Qn.g,t.b=Qn.b,t}getStyle(t=Ai){Ye.workingToColorSpace(Qn.copy(this),t);let e=Qn.r,n=Qn.g,s=Qn.b;return t!==Ai?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Zs),this.setHSL(Zs.h+t,Zs.s+e,Zs.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Zs),t.getHSL(mc);let n=Bo(Zs.h,mc.h,e),s=Bo(Zs.s,mc.s,e),r=Bo(Zs.l,mc.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Qn=new ye;ye.NAMES=Q0;var qo=class extends Fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bs,this.environmentIntensity=1,this.environmentRotation=new Bs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Gi=new j,Ds=new j,Rd=new j,Ns=new j,fa=new j,pa=new j,Gm=new j,Id=new j,Pd=new j,Ld=new j,Dd=new on,Nd=new on,Ud=new on,tr=class i{constructor(t=new j,e=new j,n=new j){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Gi.subVectors(t,e),s.cross(Gi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Gi.subVectors(s,e),Ds.subVectors(n,e),Rd.subVectors(t,e);let o=Gi.dot(Gi),l=Gi.dot(Ds),u=Gi.dot(Rd),h=Ds.dot(Ds),d=Ds.dot(Rd),b=o*h-l*l;if(b===0)return r.set(0,0,0),null;let g=1/b,M=(h*u-l*d)*g,w=(o*d-l*u)*g;return r.set(1-M-w,w,M)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Ns)===null?!1:Ns.x>=0&&Ns.y>=0&&Ns.x+Ns.y<=1}static getInterpolation(t,e,n,s,r,o,l,u){return this.getBarycoord(t,e,n,s,Ns)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(r,Ns.x),u.addScaledVector(o,Ns.y),u.addScaledVector(l,Ns.z),u)}static getInterpolatedAttribute(t,e,n,s,r,o){return Dd.setScalar(0),Nd.setScalar(0),Ud.setScalar(0),Dd.fromBufferAttribute(t,e),Nd.fromBufferAttribute(t,n),Ud.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Dd,r.x),o.addScaledVector(Nd,r.y),o.addScaledVector(Ud,r.z),o}static isFrontFacing(t,e,n,s){return Gi.subVectors(n,e),Ds.subVectors(t,e),Gi.cross(Ds).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Gi.subVectors(this.c,this.b),Ds.subVectors(this.a,this.b),Gi.cross(Ds).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,l;fa.subVectors(s,n),pa.subVectors(r,n),Id.subVectors(t,n);let u=fa.dot(Id),h=pa.dot(Id);if(u<=0&&h<=0)return e.copy(n);Pd.subVectors(t,s);let d=fa.dot(Pd),b=pa.dot(Pd);if(d>=0&&b<=d)return e.copy(s);let g=u*b-d*h;if(g<=0&&u>=0&&d<=0)return o=u/(u-d),e.copy(n).addScaledVector(fa,o);Ld.subVectors(t,r);let M=fa.dot(Ld),w=pa.dot(Ld);if(w>=0&&M<=w)return e.copy(r);let N=M*h-u*w;if(N<=0&&h>=0&&w<=0)return l=h/(h-w),e.copy(n).addScaledVector(pa,l);let y=d*w-M*b;if(y<=0&&b-d>=0&&M-w>=0)return Gm.subVectors(r,s),l=(b-d)/(b-d+(M-w)),e.copy(s).addScaledVector(Gm,l);let m=1/(y+N+g);return o=N*m,l=g*m,e.copy(n).addScaledVector(fa,o).addScaledVector(pa,l)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ci=class{constructor(t=new j(1/0,1/0,1/0),e=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Wi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Wi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Wi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,l=r.count;o<l;o++)t.isMesh===!0?t.getVertexPosition(o,Wi):Wi.fromBufferAttribute(r,o),Wi.applyMatrix4(t.matrixWorld),this.expandByPoint(Wi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),gc.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),gc.copy(n.boundingBox)),gc.applyMatrix4(t.matrixWorld),this.union(gc)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Wi),Wi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Io),_c.subVectors(this.max,Io),ma.subVectors(t.a,Io),ga.subVectors(t.b,Io),_a.subVectors(t.c,Io),js.subVectors(ga,ma),Ks.subVectors(_a,ga),wr.subVectors(ma,_a);let e=[0,-js.z,js.y,0,-Ks.z,Ks.y,0,-wr.z,wr.y,js.z,0,-js.x,Ks.z,0,-Ks.x,wr.z,0,-wr.x,-js.y,js.x,0,-Ks.y,Ks.x,0,-wr.y,wr.x,0];return!Od(e,ma,ga,_a,_c)||(e=[1,0,0,0,1,0,0,0,1],!Od(e,ma,ga,_a,_c))?!1:(xc.crossVectors(js,Ks),e=[xc.x,xc.y,xc.z],Od(e,ma,ga,_a,_c))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Wi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Wi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Us[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Us[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Us[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Us[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Us[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Us[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Us[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Us[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Us),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Us=[new j,new j,new j,new j,new j,new j,new j,new j],Wi=new j,gc=new ci,ma=new j,ga=new j,_a=new j,js=new j,Ks=new j,wr=new j,Io=new j,_c=new j,xc=new j,Er=new j;function Od(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Er.fromArray(i,r);let l=s.x*Math.abs(Er.x)+s.y*Math.abs(Er.y)+s.z*Math.abs(Er.z),u=t.dot(Er),h=e.dot(Er),d=n.dot(Er);if(Math.max(-Math.max(u,h,d),Math.min(u,h,d))>l)return!1}return!0}var In=new j,vc=new Wt,Xx=0,hn=class extends us{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Xx++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Rf,this.updateRanges=[],this.gpuType=Bi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)vc.fromBufferAttribute(this,e),vc.applyMatrix3(t),this.setXY(e,vc.x,vc.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)In.fromBufferAttribute(this,e),In.applyMatrix3(t),this.setXYZ(e,In.x,In.y,In.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)In.fromBufferAttribute(this,e),In.applyMatrix4(t),this.setXYZ(e,In.x,In.y,In.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)In.fromBufferAttribute(this,e),In.applyNormalMatrix(t),this.setXYZ(e,In.x,In.y,In.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)In.fromBufferAttribute(this,e),In.transformDirection(t),this.setXYZ(e,In.x,In.y,In.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=qi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=cn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=qi(e,this.array)),e}setX(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=qi(e,this.array)),e}setY(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=qi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=qi(e,this.array)),e}setW(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=cn(e,this.array),n=cn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=cn(e,this.array),n=cn(n,this.array),s=cn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=cn(e,this.array),n=cn(n,this.array),s=cn(s,this.array),r=cn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Yo=class extends hn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Jo=class extends hn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var wn=class extends hn{constructor(t,e,n){super(new Float32Array(t),e,n)}},qx=new ci,Po=new j,Fd=new j,yi=class{constructor(t=new j,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):qx.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Po.subVectors(t,this.center);let e=Po.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Po,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Fd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Po.copy(t.center).add(Fd)),this.expandByPoint(Po.copy(t.center).sub(Fd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Yx=0,Fi=new Ze,Bd=new Fn,xa=new j,Ti=new ci,Lo=new ci,Un=new j,En=class i extends us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yx++}),this.uuid=ls(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(xx(t)?Jo:Yo)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Le().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Fi.makeRotationFromQuaternion(t),this.applyMatrix4(Fi),this}rotateX(t){return Fi.makeRotationX(t),this.applyMatrix4(Fi),this}rotateY(t){return Fi.makeRotationY(t),this.applyMatrix4(Fi),this}rotateZ(t){return Fi.makeRotationZ(t),this.applyMatrix4(Fi),this}translate(t,e,n){return Fi.makeTranslation(t,e,n),this.applyMatrix4(Fi),this}scale(t,e,n){return Fi.makeScale(t,e,n),this.applyMatrix4(Fi),this}lookAt(t){return Bd.lookAt(t),Bd.updateMatrix(),this.applyMatrix4(Bd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xa).negate(),this.translate(xa.x,xa.y,xa.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new wn(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Me("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ci);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){we("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Ti.setFromBufferAttribute(r),this.morphTargetsRelative?(Un.addVectors(this.boundingBox.min,Ti.min),this.boundingBox.expandByPoint(Un),Un.addVectors(this.boundingBox.max,Ti.max),this.boundingBox.expandByPoint(Un)):(this.boundingBox.expandByPoint(Ti.min),this.boundingBox.expandByPoint(Ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&we('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){we("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(t){let n=this.boundingSphere.center;if(Ti.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let l=e[r];Lo.setFromBufferAttribute(l),this.morphTargetsRelative?(Un.addVectors(Ti.min,Lo.min),Ti.expandByPoint(Un),Un.addVectors(Ti.max,Lo.max),Ti.expandByPoint(Un)):(Ti.expandByPoint(Lo.min),Ti.expandByPoint(Lo.max))}Ti.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Un.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Un));if(e)for(let r=0,o=e.length;r<o;r++){let l=e[r],u=this.morphTargetsRelative;for(let h=0,d=l.count;h<d;h++)Un.fromBufferAttribute(l,h),u&&(xa.fromBufferAttribute(t,h),Un.add(xa)),s=Math.max(s,n.distanceToSquared(Un))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&we('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){we("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new hn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let l=[],u=[];for(let R=0;R<n.count;R++)l[R]=new j,u[R]=new j;let h=new j,d=new j,b=new j,g=new Wt,M=new Wt,w=new Wt,N=new j,y=new j;function m(R,B,q){h.fromBufferAttribute(n,R),d.fromBufferAttribute(n,B),b.fromBufferAttribute(n,q),g.fromBufferAttribute(r,R),M.fromBufferAttribute(r,B),w.fromBufferAttribute(r,q),d.sub(h),b.sub(h),M.sub(g),w.sub(g);let Z=1/(M.x*w.y-w.x*M.y);isFinite(Z)&&(N.copy(d).multiplyScalar(w.y).addScaledVector(b,-M.y).multiplyScalar(Z),y.copy(b).multiplyScalar(M.x).addScaledVector(d,-w.x).multiplyScalar(Z),l[R].add(N),l[B].add(N),l[q].add(N),u[R].add(y),u[B].add(y),u[q].add(y))}let $=this.groups;$.length===0&&($=[{start:0,count:t.count}]);for(let R=0,B=$.length;R<B;++R){let q=$[R],Z=q.start,ot=q.count;for(let ht=Z,tt=Z+ot;ht<tt;ht+=3)m(t.getX(ht+0),t.getX(ht+1),t.getX(ht+2))}let V=new j,D=new j,T=new j,k=new j;function Y(R){T.fromBufferAttribute(s,R),k.copy(T);let B=l[R];V.copy(B),V.sub(T.multiplyScalar(T.dot(B))).normalize(),D.crossVectors(k,B);let Z=D.dot(u[R])<0?-1:1;o.setXYZW(R,V.x,V.y,V.z,Z)}for(let R=0,B=$.length;R<B;++R){let q=$[R],Z=q.start,ot=q.count;for(let ht=Z,tt=Z+ot;ht<tt;ht+=3)Y(t.getX(ht+0)),Y(t.getX(ht+1)),Y(t.getX(ht+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new hn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let g=0,M=n.count;g<M;g++)n.setXYZ(g,0,0,0);let s=new j,r=new j,o=new j,l=new j,u=new j,h=new j,d=new j,b=new j;if(t)for(let g=0,M=t.count;g<M;g+=3){let w=t.getX(g+0),N=t.getX(g+1),y=t.getX(g+2);s.fromBufferAttribute(e,w),r.fromBufferAttribute(e,N),o.fromBufferAttribute(e,y),d.subVectors(o,r),b.subVectors(s,r),d.cross(b),l.fromBufferAttribute(n,w),u.fromBufferAttribute(n,N),h.fromBufferAttribute(n,y),l.add(d),u.add(d),h.add(d),n.setXYZ(w,l.x,l.y,l.z),n.setXYZ(N,u.x,u.y,u.z),n.setXYZ(y,h.x,h.y,h.z)}else for(let g=0,M=e.count;g<M;g+=3)s.fromBufferAttribute(e,g+0),r.fromBufferAttribute(e,g+1),o.fromBufferAttribute(e,g+2),d.subVectors(o,r),b.subVectors(s,r),d.cross(b),n.setXYZ(g+0,d.x,d.y,d.z),n.setXYZ(g+1,d.x,d.y,d.z),n.setXYZ(g+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Un.fromBufferAttribute(t,e),Un.normalize(),t.setXYZ(e,Un.x,Un.y,Un.z)}toNonIndexed(){function t(l,u){let h=l.array,d=l.itemSize,b=l.normalized,g=new h.constructor(u.length*d),M=0,w=0;for(let N=0,y=u.length;N<y;N++){l.isInterleavedBufferAttribute?M=u[N]*l.data.stride+l.offset:M=u[N]*d;for(let m=0;m<d;m++)g[w++]=h[M++]}return new hn(g,d,b)}if(this.index===null)return Me("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let l in s){let u=s[l],h=t(u,n);e.setAttribute(l,h)}let r=this.morphAttributes;for(let l in r){let u=[],h=r[l];for(let d=0,b=h.length;d<b;d++){let g=h[d],M=t(g,n);u.push(M)}e.morphAttributes[l]=u}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let l=0,u=o.length;l<u;l++){let h=o[l];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let u=this.parameters;for(let h in u)u[h]!==void 0&&(t[h]=u[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let u in n){let h=n[u];t.data.attributes[u]=h.toJSON(t.data)}let s={},r=!1;for(let u in this.morphAttributes){let h=this.morphAttributes[u],d=[];for(let b=0,g=h.length;b<g;b++){let M=h[b];d.push(M.toJSON(t.data))}d.length>0&&(s[u]=d,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let l=this.boundingSphere;return l!==null&&(t.data.boundingSphere=l.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let h in s){let d=s[h];this.setAttribute(h,d.clone(e))}let r=t.morphAttributes;for(let h in r){let d=[],b=r[h];for(let g=0,M=b.length;g<M;g++)d.push(b[g].clone(e));this.morphAttributes[h]=d}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let h=0,d=o.length;h<d;h++){let b=o[h];this.addGroup(b.start,b.count,b.materialIndex)}let l=t.boundingBox;l!==null&&(this.boundingBox=l.clone());let u=t.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},eu=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Rf,this.updateRanges=[],this.version=0,this.uuid=ls()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ls()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ls()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},li=new j,Zi=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)li.fromBufferAttribute(this,e),li.applyMatrix4(t),this.setXYZ(e,li.x,li.y,li.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)li.fromBufferAttribute(this,e),li.applyNormalMatrix(t),this.setXYZ(e,li.x,li.y,li.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)li.fromBufferAttribute(this,e),li.transformDirection(t),this.setXYZ(e,li.x,li.y,li.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=qi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=cn(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=cn(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=cn(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=cn(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=cn(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=qi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=qi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=qi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=qi(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=cn(e,this.array),n=cn(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=cn(e,this.array),n=cn(n,this.array),s=cn(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=cn(e,this.array),n=cn(n,this.array),s=cn(s,this.array),r=cn(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Wo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new hn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Wo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},kd=new j,Jx=new j,Zx=new Le,Xi=class{constructor(t=new j(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=kd.subVectors(n,e).cross(Jx.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(kd),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Zx.getNormalMatrix(t),s=this.coplanarPoint(kd).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},jx=0,ds=class extends us{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jx++}),this.uuid=ls(),this.name="",this.type="Material",this.blending=$a,this.side=ar,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ff,this.blendDst=pf,this.blendEquation=Or,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ye(0,0,0),this.blendAlpha=0,this.depthFunc=Ta,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=V0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zc,this.stencilZFail=zc,this.stencilZPass=zc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Me(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Me(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let l in r){let u=r[l];delete u.metadata,o.push(u)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ye().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Xi().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Wt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Wt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Os=new j,$d=new j,yc=new j,Sc=new j,Ir=class{constructor(t=new j,e=new j(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Os)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Os.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Os.copy(this.origin).addScaledVector(this.direction,e),Os.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){$d.copy(t).add(e).multiplyScalar(.5),yc.copy(e).sub(t).normalize(),Sc.copy(this.origin).sub($d);let r=t.distanceTo(e)*.5,o=-this.direction.dot(yc),l=Sc.dot(this.direction),u=-Sc.dot(yc),h=Sc.lengthSq(),d=Math.abs(1-o*o),b,g,M,w;if(d>0)if(b=o*u-l,g=o*l-u,w=r*d,b>=0)if(g>=-w)if(g<=w){let N=1/d;b*=N,g*=N,M=b*(b+o*g+2*l)+g*(o*b+g+2*u)+h}else g=r,b=Math.max(0,-(o*g+l)),M=-b*b+g*(g+2*u)+h;else g=-r,b=Math.max(0,-(o*g+l)),M=-b*b+g*(g+2*u)+h;else g<=-w?(b=Math.max(0,-(-o*r+l)),g=b>0?-r:Math.min(Math.max(-r,-u),r),M=-b*b+g*(g+2*u)+h):g<=w?(b=0,g=Math.min(Math.max(-r,-u),r),M=g*(g+2*u)+h):(b=Math.max(0,-(o*r+l)),g=b>0?r:Math.min(Math.max(-r,-u),r),M=-b*b+g*(g+2*u)+h);else g=o>0?-r:r,b=Math.max(0,-(o*g+l)),M=-b*b+g*(g+2*u)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,b),s&&s.copy($d).addScaledVector(yc,g),M}intersectSphere(t,e){if(t.radius<0)return null;Os.subVectors(t.center,this.origin);let n=Os.dot(this.direction),s=Os.dot(Os)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),l=n-o,u=n+o;return u<0?null:l<0?this.at(u,e):this.at(l,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,l,u,h=1/this.direction.x,d=1/this.direction.y,b=1/this.direction.z,g=this.origin;return h>=0?(n=(t.min.x-g.x)*h,s=(t.max.x-g.x)*h):(n=(t.max.x-g.x)*h,s=(t.min.x-g.x)*h),d>=0?(r=(t.min.y-g.y)*d,o=(t.max.y-g.y)*d):(r=(t.max.y-g.y)*d,o=(t.min.y-g.y)*d),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),b>=0?(l=(t.min.z-g.z)*b,u=(t.max.z-g.z)*b):(l=(t.max.z-g.z)*b,u=(t.min.z-g.z)*b),n>u||l>s)||((l>n||n!==n)&&(n=l),(u<s||s!==s)&&(s=u),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Os)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,l=this.direction,u=l.x,h=l.y,d=l.z,b=t.x-o.x,g=t.y-o.y,M=t.z-o.z,w=e.x-o.x,N=e.y-o.y,y=e.z-o.z,m=n.x-o.x,$=n.y-o.y,V=n.z-o.z,D=Math.abs(u),T=Math.abs(h),k=Math.abs(d),Y,R,B,q,Z,ot,ht,tt,st,pt,_t,At;if(D>=T&&D>=k?(B=u,ot=b,st=w,At=m,u>=0?(Y=h,R=d,q=g,Z=M,ht=N,tt=y,pt=$,_t=V):(Y=d,R=h,q=M,Z=g,ht=y,tt=N,pt=V,_t=$)):T>=k?(B=h,ot=g,st=N,At=$,h>=0?(Y=d,R=u,q=M,Z=b,ht=y,tt=w,pt=V,_t=m):(Y=u,R=d,q=b,Z=M,ht=w,tt=y,pt=m,_t=V)):(B=d,ot=M,st=y,At=V,d>=0?(Y=u,R=h,q=b,Z=g,ht=w,tt=N,pt=m,_t=$):(Y=h,R=u,q=g,Z=b,ht=N,tt=w,pt=$,_t=m)),B===0)return null;let xt=Y/B,wt=R/B,bt=1/B,Vt=q-xt*ot,ne=Z-wt*ot,je=ht-xt*st,Oe=tt-wt*st,We=pt-xt*At,vt=_t-wt*At,yt=We*Oe-vt*je,Lt=Vt*vt-ne*We,de=je*ne-Oe*Vt;if(s){if(yt<0||Lt<0||de<0)return null}else if((yt<0||Lt<0||de<0)&&(yt>0||Lt>0||de>0))return null;let Kt=yt+Lt+de;if(Kt===0)return null;let ge=bt*(yt*ot+Lt*st+de*At);return(Kt>0?ge<0:ge>0)?null:this.at(ge/Kt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Pr=class extends ds{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bs,this.combine=Ru,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Wm=new Ze,Tr=new Ir,bc=new yi,Xm=new j,Mc=new j,wc=new j,Ec=new j,zd=new j,Tc=new j,qm=new j,Ac=new j,Bn=class extends Fn{constructor(t=new En,e=new Pr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let l=this.morphTargetInfluences;if(r&&l){Tc.set(0,0,0);for(let u=0,h=r.length;u<h;u++){let d=l[u],b=r[u];d!==0&&(zd.fromBufferAttribute(b,t),o?Tc.addScaledVector(zd,d):Tc.addScaledVector(zd.sub(e),d))}e.add(Tc)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),bc.copy(n.boundingSphere),bc.applyMatrix4(r),Tr.copy(t.ray).recast(t.near),!(bc.containsPoint(Tr.origin)===!1&&(Tr.intersectSphere(bc,Xm)===null||Tr.origin.distanceToSquared(Xm)>(t.far-t.near)**2))&&(Wm.copy(r).invert(),Tr.copy(t.ray).applyMatrix4(Wm),!(n.boundingBox!==null&&Tr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Tr)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,l=r.index,u=r.attributes.position,h=r.attributes.uv,d=r.attributes.uv1,b=r.attributes.normal,g=r.groups,M=r.drawRange;if(l!==null)if(Array.isArray(o))for(let w=0,N=g.length;w<N;w++){let y=g[w],m=o[y.materialIndex],$=Math.max(y.start,M.start),V=Math.min(l.count,Math.min(y.start+y.count,M.start+M.count));for(let D=$,T=V;D<T;D+=3){let k=l.getX(D),Y=l.getX(D+1),R=l.getX(D+2);s=Cc(this,m,t,n,h,d,b,k,Y,R),s&&(s.faceIndex=Math.floor(D/3),s.face.materialIndex=y.materialIndex,e.push(s))}}else{let w=Math.max(0,M.start),N=Math.min(l.count,M.start+M.count);for(let y=w,m=N;y<m;y+=3){let $=l.getX(y),V=l.getX(y+1),D=l.getX(y+2);s=Cc(this,o,t,n,h,d,b,$,V,D),s&&(s.faceIndex=Math.floor(y/3),e.push(s))}}else if(u!==void 0)if(Array.isArray(o))for(let w=0,N=g.length;w<N;w++){let y=g[w],m=o[y.materialIndex],$=Math.max(y.start,M.start),V=Math.min(u.count,Math.min(y.start+y.count,M.start+M.count));for(let D=$,T=V;D<T;D+=3){let k=D,Y=D+1,R=D+2;s=Cc(this,m,t,n,h,d,b,k,Y,R),s&&(s.faceIndex=Math.floor(D/3),s.face.materialIndex=y.materialIndex,e.push(s))}}else{let w=Math.max(0,M.start),N=Math.min(u.count,M.start+M.count);for(let y=w,m=N;y<m;y+=3){let $=y,V=y+1,D=y+2;s=Cc(this,o,t,n,h,d,b,$,V,D),s&&(s.faceIndex=Math.floor(y/3),e.push(s))}}}};function Kx(i,t,e,n,s,r,o,l){let u;if(t.side===ui?u=n.intersectTriangle(o,r,s,!0,l):u=n.intersectTriangle(s,r,o,t.side===ar,l),u===null)return null;Ac.copy(l),Ac.applyMatrix4(i.matrixWorld);let h=e.ray.origin.distanceTo(Ac);return h<e.near||h>e.far?null:{distance:h,point:Ac.clone(),object:i}}function Cc(i,t,e,n,s,r,o,l,u,h){i.getVertexPosition(l,Mc),i.getVertexPosition(u,wc),i.getVertexPosition(h,Ec);let d=Kx(i,t,e,n,Mc,wc,Ec,qm);if(d){let b=new j;tr.getBarycoord(qm,Mc,wc,Ec,b),s&&(d.uv=tr.getInterpolatedAttribute(s,l,u,h,b,new Wt)),r&&(d.uv1=tr.getInterpolatedAttribute(r,l,u,h,b,new Wt)),o&&(d.normal=tr.getInterpolatedAttribute(o,l,u,h,b,new j),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));let g={a:l,b:u,c:h,normal:new j,materialIndex:0};tr.getNormal(Mc,wc,Ec,g.normal),d.face=g,d.barycoord=b}return d}var Zo=class extends xi{constructor(t=null,e=1,n=1,s,r,o,l,u,h=On,d=On,b,g){super(null,o,l,u,h,d,s,r,b,g),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var jo=class extends hn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},va=new Ze,Ym=new Ze,Rc=[],Jm=new ci,Qx=new Ze,Do=new Bn,No=new yi,Ko=class extends Bn{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new jo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Qx)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ci),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,va),Jm.copy(t.boundingBox).applyMatrix4(va),this.boundingBox.union(Jm)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new yi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,va),No.copy(t.boundingSphere).applyMatrix4(va),this.boundingSphere.union(No)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let l=0;l<n.length;l++)n[l]=s[o+l]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Do.geometry=this.geometry,Do.material=this.material,Do.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),No.copy(this.boundingSphere),No.applyMatrix4(n),t.ray.intersectsSphere(No)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,va),Ym.multiplyMatrices(n,va),Do.matrixWorld=Ym,Do.raycast(t,Rc);for(let o=0,l=Rc.length;o<l;o++){let u=Rc[o];u.instanceId=r,u.object=this,e.push(u)}Rc.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new jo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Zo(new Float32Array(s*this.count),s,this.count,Ou,Bi));let r=this.morphTexture.source.data.data,o=0;for(let h=0;h<n.length;h++)o+=n[h];let l=this.geometry.morphTargetsRelative?1:1-o,u=s*t;return r[u]=l,r.set(n,u+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ar=new yi,tv=new Wt(.5,.5),Ic=new j,Da=class{constructor(t=new Xi,e=new Xi,n=new Xi,s=new Xi,r=new Xi,o=new Xi){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let l=this.planes;return l[0].copy(t),l[1].copy(e),l[2].copy(n),l[3].copy(s),l[4].copy(r),l[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Yi,n=!1){let s=this.planes,r=t.elements,o=r[0],l=r[1],u=r[2],h=r[3],d=r[4],b=r[5],g=r[6],M=r[7],w=r[8],N=r[9],y=r[10],m=r[11],$=r[12],V=r[13],D=r[14],T=r[15];if(s[0].setComponents(h-o,M-d,m-w,T-$).normalize(),s[1].setComponents(h+o,M+d,m+w,T+$).normalize(),s[2].setComponents(h+l,M+b,m+N,T+V).normalize(),s[3].setComponents(h-l,M-b,m-N,T-V).normalize(),n)s[4].setComponents(u,g,y,D).normalize(),s[5].setComponents(h-u,M-g,m-y,T-D).normalize();else if(s[4].setComponents(h-u,M-g,m-y,T-D).normalize(),e===Yi)s[5].setComponents(h+u,M+g,m+y,T+D).normalize();else if(e===Aa)s[5].setComponents(u,g,y,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ar.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ar.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ar)}intersectsSprite(t){Ar.center.set(0,0,0);let e=tv.distanceTo(t.center);return Ar.radius=.7071067811865476+e,Ar.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ar)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Ic.x=s.normal.x>0?t.max.x:t.min.x,Ic.y=s.normal.y>0?t.max.y:t.min.y,Ic.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ic)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Lr=class extends ds{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},nu=new j,iu=new j,Zm=new Ze,Uo=new Ir,Pc=new yi,Vd=new j,jm=new j,su=class extends Fn{constructor(t=new En,e=new Lr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)nu.fromBufferAttribute(e,s-1),iu.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=nu.distanceTo(iu);t.setAttribute("lineDistance",new wn(n,1))}else Me("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Pc.copy(n.boundingSphere),Pc.applyMatrix4(s),Pc.radius+=r,t.ray.intersectsSphere(Pc)===!1)return;Zm.copy(s).invert(),Uo.copy(t.ray).applyMatrix4(Zm);let l=r/((this.scale.x+this.scale.y+this.scale.z)/3),u=l*l,h=this.isLineSegments?2:1,d=n.index,g=n.attributes.position;if(d!==null){let M=Math.max(0,o.start),w=Math.min(d.count,o.start+o.count);for(let N=M,y=w-1;N<y;N+=h){let m=d.getX(N),$=d.getX(N+1),V=Lc(this,t,Uo,u,m,$,N);V&&e.push(V)}if(this.isLineLoop){let N=d.getX(w-1),y=d.getX(M),m=Lc(this,t,Uo,u,N,y,w-1);m&&e.push(m)}}else{let M=Math.max(0,o.start),w=Math.min(g.count,o.start+o.count);for(let N=M,y=w-1;N<y;N+=h){let m=Lc(this,t,Uo,u,N,N+1,N);m&&e.push(m)}if(this.isLineLoop){let N=Lc(this,t,Uo,u,w-1,M,w-1);N&&e.push(N)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}};function Lc(i,t,e,n,s,r,o){let l=i.geometry.attributes.position;if(nu.fromBufferAttribute(l,s),iu.fromBufferAttribute(l,r),e.distanceSqToSegment(nu,iu,Vd,jm)>n)return;Vd.applyMatrix4(i.matrixWorld);let h=t.ray.origin.distanceTo(Vd);if(!(h<t.near||h>t.far))return{distance:h,point:jm.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Qo=class extends su{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},ru=class extends ds{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Km=new Ze,Qd=new Ir,Dc=new yi,Nc=new j,Dr=class extends Fn{constructor(t=new En,e=new ru){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Dc.copy(n.boundingSphere),Dc.applyMatrix4(s),Dc.radius+=r,t.ray.intersectsSphere(Dc)===!1)return;Km.copy(s).invert(),Qd.copy(t.ray).applyMatrix4(Km);let l=r/((this.scale.x+this.scale.y+this.scale.z)/3),u=l*l,h=n.index,b=n.attributes.position;if(h!==null){let g=Math.max(0,o.start),M=Math.min(h.count,o.start+o.count);for(let w=g,N=M;w<N;w++){let y=h.getX(w);Nc.fromBufferAttribute(b,y),Qm(Nc,y,u,s,t,e,this)}}else{let g=Math.max(0,o.start),M=Math.min(b.count,o.start+o.count);for(let w=g,N=M;w<N;w++)Nc.fromBufferAttribute(b,w),Qm(Nc,w,u,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}};function Qm(i,t,e,n,s,r,o){let l=Qd.distanceSqToPoint(i);if(l<e){let u=new j;Qd.closestPointToPoint(i,u),u.applyMatrix4(n);let h=s.ray.origin.distanceTo(u);if(h<s.near||h>s.far)return;r.push({distance:h,distanceToRay:Math.sqrt(l),point:u,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var tl=class extends xi{constructor(t=[],e=or,n,s,r,o,l,u,h,d){super(t,e,n,s,r,o,l,u,h,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var er=class extends xi{constructor(t,e,n=Ki,s,r,o,l=On,u=On,h,d=cs,b=1){if(d!==cs&&d!==cr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let g={width:t,height:e,depth:b};super(g,s,r,o,l,u,d,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ia(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},au=class extends er{constructor(t,e=Ki,n=or,s,r,o=On,l=On,u,h=cs){let d={width:t,height:t,depth:1},b=[d,d,d,d,d,d];super(t,t,e,n,s,r,o,l,u,h),this.image=b,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},el=class extends xi{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Na=class i extends En{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let l=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let u=[],h=[],d=[],b=[],g=0,M=0;w("z","y","x",-1,-1,n,e,t,o,r,0),w("z","y","x",1,-1,n,e,-t,o,r,1),w("x","z","y",1,1,t,n,e,s,o,2),w("x","z","y",1,-1,t,n,-e,s,o,3),w("x","y","z",1,-1,t,e,n,s,r,4),w("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(u),this.setAttribute("position",new wn(h,3)),this.setAttribute("normal",new wn(d,3)),this.setAttribute("uv",new wn(b,2));function w(N,y,m,$,V,D,T,k,Y,R,B){let q=D/Y,Z=T/R,ot=D/2,ht=T/2,tt=k/2,st=Y+1,pt=R+1,_t=0,At=0,xt=new j;for(let wt=0;wt<pt;wt++){let bt=wt*Z-ht;for(let Vt=0;Vt<st;Vt++){let ne=Vt*q-ot;xt[N]=ne*$,xt[y]=bt*V,xt[m]=tt,h.push(xt.x,xt.y,xt.z),xt[N]=0,xt[y]=0,xt[m]=k>0?1:-1,d.push(xt.x,xt.y,xt.z),b.push(Vt/Y),b.push(1-wt/R),_t+=1}}for(let wt=0;wt<R;wt++)for(let bt=0;bt<Y;bt++){let Vt=g+bt+st*wt,ne=g+bt+st*(wt+1),je=g+(bt+1)+st*(wt+1),Oe=g+(bt+1)+st*wt;u.push(Vt,ne,Oe),u.push(ne,je,Oe),At+=6}l.addGroup(M,At,B),M+=At,g+=_t}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var nl=class i extends En{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,l=0,u=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:l,thetaLength:u};let h=this;s=Math.floor(s),r=Math.floor(r);let d=[],b=[],g=[],M=[],w=0,N=[],y=n/2,m=0;$(),o===!1&&(t>0&&V(!0),e>0&&V(!1)),this.setIndex(d),this.setAttribute("position",new wn(b,3)),this.setAttribute("normal",new wn(g,3)),this.setAttribute("uv",new wn(M,2));function $(){let D=new j,T=new j,k=0,Y=(e-t)/n;for(let R=0;R<=r;R++){let B=[],q=R/r,Z=q*(e-t)+t;for(let ot=0;ot<=s;ot++){let ht=ot/s,tt=ht*u+l,st=Math.sin(tt),pt=Math.cos(tt);T.x=Z*st,T.y=-q*n+y,T.z=Z*pt,b.push(T.x,T.y,T.z),D.set(st,Y,pt).normalize(),g.push(D.x,D.y,D.z),M.push(ht,1-q),B.push(w++)}N.push(B)}for(let R=0;R<s;R++)for(let B=0;B<r;B++){let q=N[B][R],Z=N[B+1][R],ot=N[B+1][R+1],ht=N[B][R+1];(t>0||B!==0)&&(d.push(q,Z,ht),k+=3),(e>0||B!==r-1)&&(d.push(Z,ot,ht),k+=3)}h.addGroup(m,k,0),m+=k}function V(D){let T=w,k=new Wt,Y=new j,R=0,B=D===!0?t:e,q=D===!0?1:-1;for(let ot=1;ot<=s;ot++)b.push(0,y*q,0),g.push(0,q,0),M.push(.5,.5),w++;let Z=w;for(let ot=0;ot<=s;ot++){let tt=ot/s*u+l,st=Math.cos(tt),pt=Math.sin(tt);Y.x=B*pt,Y.y=y*q,Y.z=B*st,b.push(Y.x,Y.y,Y.z),g.push(0,q,0),k.x=st*.5+.5,k.y=pt*.5*q+.5,M.push(k.x,k.y),w++}for(let ot=0;ot<s;ot++){let ht=T+ot,tt=Z+ot;D===!0?d.push(tt,tt+1,ht):d.push(tt+1,tt,ht),R+=3}h.addGroup(m,R,D===!0?1:2),m+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Ci=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Me("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let l=0,u=r-1,h;for(;l<=u;)if(s=Math.floor(l+(u-l)/2),h=n[s]-o,h<0)l=s+1;else if(h>0)u=s-1;else{u=s;break}if(s=u,n[s]===o)return s/(r-1);let d=n[s],g=n[s+1]-d,M=(o-d)/g;return(s+M)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),l=this.getPoint(r),u=e||(o.isVector2?new Wt:new j);return u.copy(l).sub(o).normalize(),u}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new j,s=[],r=[],o=[],l=new j,u=new Ze;for(let M=0;M<=t;M++){let w=M/t;s[M]=this.getTangentAt(w,new j)}r[0]=new j,o[0]=new j;let h=Number.MAX_VALUE,d=Math.abs(s[0].x),b=Math.abs(s[0].y),g=Math.abs(s[0].z);d<=h&&(h=d,n.set(1,0,0)),b<=h&&(h=b,n.set(0,1,0)),g<=h&&n.set(0,0,1),l.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],l),o[0].crossVectors(s[0],r[0]);for(let M=1;M<=t;M++){if(r[M]=r[M-1].clone(),o[M]=o[M-1].clone(),l.crossVectors(s[M-1],s[M]),l.length()>Number.EPSILON){l.normalize();let w=Math.acos(Ne(s[M-1].dot(s[M]),-1,1));r[M].applyMatrix4(u.makeRotationAxis(l,w))}o[M].crossVectors(s[M],r[M])}if(e===!0){let M=Math.acos(Ne(r[0].dot(r[t]),-1,1));M/=t,s[0].dot(l.crossVectors(r[0],r[t]))>0&&(M=-M);for(let w=1;w<=t;w++)r[w].applyMatrix4(u.makeRotationAxis(s[w],M*w)),o[w].crossVectors(s[w],r[w])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Ua=class extends Ci{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,l=!1,u=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=l,this.aRotation=u}getPoint(t,e=new Wt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let l=this.aStartAngle+t*r,u=this.aX+this.xRadius*Math.cos(l),h=this.aY+this.yRadius*Math.sin(l);if(this.aRotation!==0){let d=Math.cos(this.aRotation),b=Math.sin(this.aRotation),g=u-this.aX,M=h-this.aY;u=g*d-M*b+this.aX,h=g*b+M*d+this.aY}return n.set(u,h)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},ou=class extends Ua{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Df(){let i=0,t=0,e=0,n=0;function s(r,o,l,u){i=r,t=l,e=-3*r+3*o-2*l-u,n=2*r-2*o+l+u}return{initCatmullRom:function(r,o,l,u,h){s(o,l,h*(l-r),h*(u-o))},initNonuniformCatmullRom:function(r,o,l,u,h,d,b){let g=(o-r)/h-(l-r)/(h+d)+(l-o)/d,M=(l-o)/d-(u-o)/(d+b)+(u-l)/b;g*=d,M*=d,s(o,l,g,M)},calc:function(r){let o=r*r,l=o*r;return i+t*r+e*o+n*l}}}var t0=new j,e0=new j,Hd=new Df,Gd=new Df,Wd=new Df,lu=class extends Ci{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new j){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,l=Math.floor(o),u=o-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/r)+1)*r:u===0&&l===r-1&&(l=r-2,u=1);let h,d;this.closed||l>0?h=s[(l-1)%r]:(e0.subVectors(s[0],s[1]).add(s[0]),h=e0);let b=s[l%r],g=s[(l+1)%r];if(this.closed||l+2<r?d=s[(l+2)%r]:(t0.subVectors(s[r-1],s[r-2]).add(s[r-1]),d=t0),this.curveType==="centripetal"||this.curveType==="chordal"){let M=this.curveType==="chordal"?.5:.25,w=Math.pow(h.distanceToSquared(b),M),N=Math.pow(b.distanceToSquared(g),M),y=Math.pow(g.distanceToSquared(d),M);N<1e-4&&(N=1),w<1e-4&&(w=N),y<1e-4&&(y=N),Hd.initNonuniformCatmullRom(h.x,b.x,g.x,d.x,w,N,y),Gd.initNonuniformCatmullRom(h.y,b.y,g.y,d.y,w,N,y),Wd.initNonuniformCatmullRom(h.z,b.z,g.z,d.z,w,N,y)}else this.curveType==="catmullrom"&&(Hd.initCatmullRom(h.x,b.x,g.x,d.x,this.tension),Gd.initCatmullRom(h.y,b.y,g.y,d.y,this.tension),Wd.initCatmullRom(h.z,b.z,g.z,d.z,this.tension));return n.set(Hd.calc(u),Gd.calc(u),Wd.calc(u)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new j().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function n0(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,l=i*i,u=i*l;return(2*e-2*n+r+o)*u+(-3*e+3*n-2*r-o)*l+r*i+e}function ev(i,t){let e=1-i;return e*e*t}function nv(i,t){return 2*(1-i)*i*t}function iv(i,t){return i*i*t}function ko(i,t,e,n){return ev(i,t)+nv(i,e)+iv(i,n)}function sv(i,t){let e=1-i;return e*e*e*t}function rv(i,t){let e=1-i;return 3*e*e*i*t}function av(i,t){return 3*(1-i)*i*i*t}function ov(i,t){return i*i*i*t}function $o(i,t,e,n,s){return sv(i,t)+rv(i,e)+av(i,n)+ov(i,s)}var il=class extends Ci{constructor(t=new Wt,e=new Wt,n=new Wt,s=new Wt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Wt){let n=e,s=this.v0,r=this.v1,o=this.v2,l=this.v3;return n.set($o(t,s.x,r.x,o.x,l.x),$o(t,s.y,r.y,o.y,l.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},cu=class extends Ci{constructor(t=new j,e=new j,n=new j,s=new j){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new j){let n=e,s=this.v0,r=this.v1,o=this.v2,l=this.v3;return n.set($o(t,s.x,r.x,o.x,l.x),$o(t,s.y,r.y,o.y,l.y),$o(t,s.z,r.z,o.z,l.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},sl=class extends Ci{constructor(t=new Wt,e=new Wt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Wt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Wt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},uu=class extends Ci{constructor(t=new j,e=new j){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new j){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new j){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},rl=class extends Ci{constructor(t=new Wt,e=new Wt,n=new Wt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Wt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(ko(t,s.x,r.x,o.x),ko(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},hu=class extends Ci{constructor(t=new j,e=new j,n=new j){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new j){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(ko(t,s.x,r.x,o.x),ko(t,s.y,r.y,o.y),ko(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},al=class extends Ci{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Wt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),l=r-o,u=s[o===0?o:o-1],h=s[o],d=s[o>s.length-2?s.length-1:o+1],b=s[o>s.length-3?s.length-1:o+2];return n.set(n0(l,u.x,h.x,d.x,b.x),n0(l,u.y,h.y,d.y,b.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Wt().fromArray(s))}return this}},tf=Object.freeze({__proto__:null,ArcCurve:ou,CatmullRomCurve3:lu,CubicBezierCurve:il,CubicBezierCurve3:cu,EllipseCurve:Ua,LineCurve:sl,LineCurve3:uu,QuadraticBezierCurve:rl,QuadraticBezierCurve3:hu,SplineCurve:al}),du=class extends Ci{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new tf[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,l=this.curves[r],u=l.getLength(),h=u===0?0:1-o/u;return l.getPointAt(h,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],l=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,u=o.getPoints(l);for(let h=0;h<u.length;h++){let d=u[h];n&&n.equals(d)||(e.push(d),n=d)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new tf[s.type]().fromJSON(s))}return this}},Nr=class extends du{constructor(t){super(),this.type="Path",this.currentPoint=new Wt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new sl(this.currentPoint.clone(),new Wt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new rl(this.currentPoint.clone(),new Wt(t,e),new Wt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let l=new il(this.currentPoint.clone(),new Wt(t,e),new Wt(n,s),new Wt(r,o));return this.curves.push(l),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new al(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let l=this.currentPoint.x,u=this.currentPoint.y;return this.absarc(t+l,e+u,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,l,u){let h=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(t+h,e+d,n,s,r,o,l,u),this}absellipse(t,e,n,s,r,o,l,u){let h=new Ua(t,e,n,s,r,o,l,u);if(this.curves.length>0){let b=h.getPoint(0);b.equals(this.currentPoint)||this.lineTo(b.x,b.y)}this.curves.push(h);let d=h.getPoint(1);return this.currentPoint.copy(d),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Oa=class extends Nr{constructor(t){super(t),this.uuid=ls(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Nr().fromJSON(s))}return this}};function lv(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=tg(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let l,u,h;if(n&&(r=fv(i,t,r,e)),i.length>80*e){l=i[0],u=i[1];let d=l,b=u;for(let g=e;g<s;g+=e){let M=i[g],w=i[g+1];M<l&&(l=M),w<u&&(u=w),M>d&&(d=M),w>b&&(b=w)}h=Math.max(d-l,b-u),h=h!==0?32767/h:0}return ol(r,o,e,l,u,h,0),o}function tg(i,t,e,n,s){let r;if(s===wv(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=i0(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=i0(o/n|0,i[o],i[o+1],r);return r&&Fa(r,r.next)&&(cl(r),r=r.next),r}function Ur(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Fa(e,e.next)||Sn(e.prev,e,e.next)===0)){if(cl(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ol(i,t,e,n,s,r,o){if(!i)return;!o&&r&&xv(i,n,s,r);let l=i;for(;i.prev!==i.next;){let u=i.prev,h=i.next;if(r?uv(i,n,s,r):cv(i)){t.push(u.i,i.i,h.i),cl(i),i=h.next,l=h.next;continue}if(i=h,i===l){o?o===1?(i=hv(Ur(i),t),ol(i,t,e,n,s,r,2)):o===2&&dv(i,t,e,n,s,r):ol(Ur(i),t,e,n,s,r,1);break}}}function cv(i){let t=i.prev,e=i,n=i.next;if(Sn(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,l=t.y,u=e.y,h=n.y,d=Math.min(s,r,o),b=Math.min(l,u,h),g=Math.max(s,r,o),M=Math.max(l,u,h),w=n.next;for(;w!==t;){if(w.x>=d&&w.x<=g&&w.y>=b&&w.y<=M&&Oo(s,l,r,u,o,h,w.x,w.y)&&Sn(w.prev,w,w.next)>=0)return!1;w=w.next}return!0}function uv(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Sn(s,r,o)>=0)return!1;let l=s.x,u=r.x,h=o.x,d=s.y,b=r.y,g=o.y,M=Math.min(l,u,h),w=Math.min(d,b,g),N=Math.max(l,u,h),y=Math.max(d,b,g),m=ef(M,w,t,e,n),$=ef(N,y,t,e,n),V=i.prevZ,D=i.nextZ;for(;V&&V.z>=m&&D&&D.z<=$;){if(V.x>=M&&V.x<=N&&V.y>=w&&V.y<=y&&V!==s&&V!==o&&Oo(l,d,u,b,h,g,V.x,V.y)&&Sn(V.prev,V,V.next)>=0||(V=V.prevZ,D.x>=M&&D.x<=N&&D.y>=w&&D.y<=y&&D!==s&&D!==o&&Oo(l,d,u,b,h,g,D.x,D.y)&&Sn(D.prev,D,D.next)>=0))return!1;D=D.nextZ}for(;V&&V.z>=m;){if(V.x>=M&&V.x<=N&&V.y>=w&&V.y<=y&&V!==s&&V!==o&&Oo(l,d,u,b,h,g,V.x,V.y)&&Sn(V.prev,V,V.next)>=0)return!1;V=V.prevZ}for(;D&&D.z<=$;){if(D.x>=M&&D.x<=N&&D.y>=w&&D.y<=y&&D!==s&&D!==o&&Oo(l,d,u,b,h,g,D.x,D.y)&&Sn(D.prev,D,D.next)>=0)return!1;D=D.nextZ}return!0}function hv(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Fa(n,s)&&ng(n,e,e.next,s)&&ll(n,s)&&ll(s,n)&&(t.push(n.i,e.i,s.i),cl(e),cl(e.next),e=i=s),e=e.next}while(e!==i);return Ur(e)}function dv(i,t,e,n,s,r){let o=i;do{let l=o.next.next;for(;l!==o.prev;){if(o.i!==l.i&&Sv(o,l)){let u=ig(o,l);o=Ur(o,o.next),u=Ur(u,u.next),ol(o,t,e,n,s,r,0),ol(u,t,e,n,s,r,0);return}l=l.next}o=o.next}while(o!==i)}function fv(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let l=t[r]*n,u=r<o-1?t[r+1]*n:i.length,h=tg(i,l,u,n,!1);h===h.next&&(h.steiner=!0),s.push(yv(h))}s.sort(pv);for(let r=0;r<s.length;r++)e=mv(s[r],e);return e}function pv(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function mv(i,t){let e=gv(i,t);if(!e)return t;let n=ig(e,i);return Ur(n,n.next),Ur(e,e.next)}function gv(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(Fa(i,e))return e;do{if(Fa(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let b=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(b<=n&&b>r&&(r=b,o=e.x<e.next.x?e:e.next,b===n))return o}e=e.next}while(e!==t);if(!o)return null;let l=o,u=o.x,h=o.y,d=1/0;e=o;do{if(n>=e.x&&e.x>=u&&n!==e.x&&eg(s<h?n:r,s,u,h,s<h?r:n,s,e.x,e.y)){let b=Math.abs(s-e.y)/(n-e.x);ll(e,i)&&(b<d||b===d&&(e.x>o.x||e.x===o.x&&_v(o,e)))&&(o=e,d=b)}e=e.next}while(e!==l);return o}function _v(i,t){return Sn(i.prev,i,t.prev)<0&&Sn(t.next,i,i.next)<0}function xv(i,t,e,n){let s=i;do s.z===0&&(s.z=ef(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,vv(s)}function vv(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,l=0;for(let h=0;h<e&&(l++,o=o.nextZ,!!o);h++);let u=e;for(;l>0||u>0&&o;)l!==0&&(u===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,l--):(s=o,o=o.nextZ,u--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function ef(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function yv(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function eg(i,t,e,n,s,r,o,l){return(s-o)*(t-l)>=(i-o)*(r-l)&&(i-o)*(n-l)>=(e-o)*(t-l)&&(e-o)*(r-l)>=(s-o)*(n-l)}function Oo(i,t,e,n,s,r,o,l){return!(i===o&&t===l)&&eg(i,t,e,n,s,r,o,l)}function Sv(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!bv(i,t)&&(ll(i,t)&&ll(t,i)&&Mv(i,t)&&(Sn(i.prev,i,t.prev)||Sn(i,t.prev,t))||Fa(i,t)&&Sn(i.prev,i,i.next)>0&&Sn(t.prev,t,t.next)>0)}function Sn(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Fa(i,t){return i.x===t.x&&i.y===t.y}function ng(i,t,e,n){let s=Oc(Sn(i,t,e)),r=Oc(Sn(i,t,n)),o=Oc(Sn(e,n,i)),l=Oc(Sn(e,n,t));return!!(s!==r&&o!==l||s===0&&Uc(i,e,t)||r===0&&Uc(i,n,t)||o===0&&Uc(e,i,n)||l===0&&Uc(e,t,n))}function Uc(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Oc(i){return i>0?1:i<0?-1:0}function bv(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&ng(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function ll(i,t){return Sn(i.prev,i,i.next)<0?Sn(i,t,i.next)>=0&&Sn(i,i.prev,t)>=0:Sn(i,t,i.prev)<0||Sn(i,i.next,t)<0}function Mv(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function ig(i,t){let e=nf(i.i,i.x,i.y),n=nf(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function i0(i,t,e,n){let s=nf(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function cl(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function nf(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function wv(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var sf=class{static triangulate(t,e,n=2){return lv(t,e,n)}},Cr=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];s0(t),r0(n,t);let o=t.length;e.forEach(s0);for(let u=0;u<e.length;u++)s.push(o),o+=e[u].length,r0(n,e[u]);let l=sf.triangulate(n,s);for(let u=0;u<l.length;u+=3)r.push(l.slice(u,u+3));return r}};function s0(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function r0(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var ul=class i extends En{constructor(t=new Oa([new Wt(.5,.5),new Wt(-.5,.5),new Wt(-.5,-.5),new Wt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let l=0,u=t.length;l<u;l++){let h=t[l];o(h)}this.setAttribute("position",new wn(s,3)),this.setAttribute("uv",new wn(r,2)),this.computeVertexNormals();function o(l){let u=[],h=e.curveSegments!==void 0?e.curveSegments:12,d=e.steps!==void 0?e.steps:1,b=e.depth!==void 0?e.depth:1,g=e.bevelEnabled!==void 0?e.bevelEnabled:!0,M=e.bevelThickness!==void 0?e.bevelThickness:.2,w=e.bevelSize!==void 0?e.bevelSize:M-.1,N=e.bevelOffset!==void 0?e.bevelOffset:0,y=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,$=e.UVGenerator!==void 0?e.UVGenerator:Ev,V,D=!1,T,k,Y,R;if(m){V=m.getSpacedPoints(d),D=!0,g=!1;let rt=m.isCatmullRomCurve3?m.closed:!1;T=m.computeFrenetFrames(d,rt),k=new j,Y=new j,R=new j}g||(y=0,M=0,w=0,N=0);let B=l.extractPoints(h),q=B.shape,Z=B.holes;if(!Cr.isClockWise(q)){q=q.reverse();for(let rt=0,Rt=Z.length;rt<Rt;rt++){let H=Z[rt];Cr.isClockWise(H)&&(Z[rt]=H.reverse())}}function ht(rt){let H=10000000000000001e-36,Pt=rt[0];for(let $t=1;$t<=rt.length;$t++){let ce=$t%rt.length,pe=rt[ce],Se=pe.x-Pt.x,Ae=pe.y-Pt.y,X=Se*Se+Ae*Ae,Qe=Math.max(Math.abs(pe.x),Math.abs(pe.y),Math.abs(Pt.x),Math.abs(Pt.y)),Fe=H*Qe*Qe;if(X<=Fe){rt.splice(ce,1),$t--;continue}Pt=pe}}ht(q),Z.forEach(ht);let tt=Z.length,st=q;for(let rt=0;rt<tt;rt++){let Rt=Z[rt];q=q.concat(Rt)}function pt(rt,Rt,H){return Rt||we("ExtrudeGeometry: vec does not exist"),rt.clone().addScaledVector(Rt,H)}let _t=q.length;function At(rt,Rt,H){let Pt,$t,ce,pe=rt.x-Rt.x,Se=rt.y-Rt.y,Ae=H.x-rt.x,X=H.y-rt.y,Qe=pe*pe+Se*Se,Fe=pe*X-Se*Ae;if(Math.abs(Fe)>Number.EPSILON){let F=Math.sqrt(Qe),E=Math.sqrt(Ae*Ae+X*X),at=Rt.x-Se/F,lt=Rt.y+pe/F,mt=H.x-X/E,Nt=H.y+Ae/E,Ht=((mt-at)*X-(Nt-lt)*Ae)/(pe*X-Se*Ae);Pt=at+pe*Ht-rt.x,$t=lt+Se*Ht-rt.y;let ft=Pt*Pt+$t*$t;if(ft<=2)return new Wt(Pt,$t);ce=Math.sqrt(ft/2)}else{let F=!1;pe>Number.EPSILON?Ae>Number.EPSILON&&(F=!0):pe<-Number.EPSILON?Ae<-Number.EPSILON&&(F=!0):Math.sign(Se)===Math.sign(X)&&(F=!0),F?(Pt=-Se,$t=pe,ce=Math.sqrt(Qe)):(Pt=pe,$t=Se,ce=Math.sqrt(Qe/2))}return new Wt(Pt/ce,$t/ce)}let xt=[];for(let rt=0,Rt=st.length,H=Rt-1,Pt=rt+1;rt<Rt;rt++,H++,Pt++)H===Rt&&(H=0),Pt===Rt&&(Pt=0),xt[rt]=At(st[rt],st[H],st[Pt]);let wt=[],bt,Vt=xt.concat();for(let rt=0,Rt=tt;rt<Rt;rt++){let H=Z[rt];bt=[];for(let Pt=0,$t=H.length,ce=$t-1,pe=Pt+1;Pt<$t;Pt++,ce++,pe++)ce===$t&&(ce=0),pe===$t&&(pe=0),bt[Pt]=At(H[Pt],H[ce],H[pe]);wt.push(bt),Vt=Vt.concat(bt)}let ne;if(y===0)ne=Cr.triangulateShape(st,Z);else{let rt=[],Rt=[];for(let H=0;H<y;H++){let Pt=H/y,$t=M*Math.cos(Pt*Math.PI/2),ce=w*Math.sin(Pt*Math.PI/2)+N;for(let pe=0,Se=st.length;pe<Se;pe++){let Ae=pt(st[pe],xt[pe],ce);Lt(Ae.x,Ae.y,-$t),Pt===0&&rt.push(Ae)}for(let pe=0,Se=tt;pe<Se;pe++){let Ae=Z[pe];bt=wt[pe];let X=[];for(let Qe=0,Fe=Ae.length;Qe<Fe;Qe++){let F=pt(Ae[Qe],bt[Qe],ce);Lt(F.x,F.y,-$t),Pt===0&&X.push(F)}Pt===0&&Rt.push(X)}}ne=Cr.triangulateShape(rt,Rt)}let je=ne.length,Oe=w+N;for(let rt=0;rt<_t;rt++){let Rt=g?pt(q[rt],Vt[rt],Oe):q[rt];D?(Y.copy(T.normals[0]).multiplyScalar(Rt.x),k.copy(T.binormals[0]).multiplyScalar(Rt.y),R.copy(V[0]).add(Y).add(k),Lt(R.x,R.y,R.z)):Lt(Rt.x,Rt.y,0)}for(let rt=1;rt<=d;rt++)for(let Rt=0;Rt<_t;Rt++){let H=g?pt(q[Rt],Vt[Rt],Oe):q[Rt];D?(Y.copy(T.normals[rt]).multiplyScalar(H.x),k.copy(T.binormals[rt]).multiplyScalar(H.y),R.copy(V[rt]).add(Y).add(k),Lt(R.x,R.y,R.z)):Lt(H.x,H.y,b/d*rt)}for(let rt=y-1;rt>=0;rt--){let Rt=rt/y,H=M*Math.cos(Rt*Math.PI/2),Pt=w*Math.sin(Rt*Math.PI/2)+N;for(let $t=0,ce=st.length;$t<ce;$t++){let pe=pt(st[$t],xt[$t],Pt);Lt(pe.x,pe.y,b+H)}for(let $t=0,ce=Z.length;$t<ce;$t++){let pe=Z[$t];bt=wt[$t];for(let Se=0,Ae=pe.length;Se<Ae;Se++){let X=pt(pe[Se],bt[Se],Pt);D?Lt(X.x,X.y+V[d-1].y,V[d-1].x+H):Lt(X.x,X.y,b+H)}}}We(),vt();function We(){let rt=s.length/3;if(g){let Rt=0,H=_t*Rt;for(let Pt=0;Pt<je;Pt++){let $t=ne[Pt];de($t[2]+H,$t[1]+H,$t[0]+H)}Rt=d+y*2,H=_t*Rt;for(let Pt=0;Pt<je;Pt++){let $t=ne[Pt];de($t[0]+H,$t[1]+H,$t[2]+H)}}else{for(let Rt=0;Rt<je;Rt++){let H=ne[Rt];de(H[2],H[1],H[0])}for(let Rt=0;Rt<je;Rt++){let H=ne[Rt];de(H[0]+_t*d,H[1]+_t*d,H[2]+_t*d)}}n.addGroup(rt,s.length/3-rt,0)}function vt(){let rt=s.length/3,Rt=0;yt(st,Rt),Rt+=st.length;for(let H=0,Pt=Z.length;H<Pt;H++){let $t=Z[H];yt($t,Rt),Rt+=$t.length}n.addGroup(rt,s.length/3-rt,1)}function yt(rt,Rt){let H=rt.length;for(;--H>=0;){let Pt=H,$t=H-1;$t<0&&($t=rt.length-1);for(let ce=0,pe=d+y*2;ce<pe;ce++){let Se=_t*ce,Ae=_t*(ce+1),X=Rt+Pt+Se,Qe=Rt+$t+Se,Fe=Rt+$t+Ae,F=Rt+Pt+Ae;Kt(X,Qe,Fe,F)}}}function Lt(rt,Rt,H){u.push(rt),u.push(Rt),u.push(H)}function de(rt,Rt,H){ge(rt),ge(Rt),ge(H);let Pt=s.length/3,$t=$.generateTopUV(n,s,Pt-3,Pt-2,Pt-1);ee($t[0]),ee($t[1]),ee($t[2])}function Kt(rt,Rt,H,Pt){ge(rt),ge(Rt),ge(Pt),ge(Rt),ge(H),ge(Pt);let $t=s.length/3,ce=$.generateSideWallUV(n,s,$t-6,$t-3,$t-2,$t-1);ee(ce[0]),ee(ce[1]),ee(ce[3]),ee(ce[1]),ee(ce[2]),ee(ce[3])}function ge(rt){s.push(u[rt*3+0]),s.push(u[rt*3+1]),s.push(u[rt*3+2])}function ee(rt){r.push(rt.x),r.push(rt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Tv(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let l=e[t.shapes[r]];n.push(l)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new tf[s.type]().fromJSON(s)),new i(n,t.options)}},Ev={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],l=t[n*3],u=t[n*3+1],h=t[s*3],d=t[s*3+1];return[new Wt(r,o),new Wt(l,u),new Wt(h,d)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],l=t[e*3+1],u=t[e*3+2],h=t[n*3],d=t[n*3+1],b=t[n*3+2],g=t[s*3],M=t[s*3+1],w=t[s*3+2],N=t[r*3],y=t[r*3+1],m=t[r*3+2];return Math.abs(l-d)<Math.abs(o-h)?[new Wt(o,1-u),new Wt(h,1-b),new Wt(g,1-w),new Wt(N,1-m)]:[new Wt(l,1-u),new Wt(d,1-b),new Wt(M,1-w),new Wt(y,1-m)]}};function Tv(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var hl=class i extends En{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,l=Math.floor(n),u=Math.floor(s),h=l+1,d=u+1,b=t/l,g=e/u,M=[],w=[],N=[],y=[];for(let m=0;m<d;m++){let $=m*g-o;for(let V=0;V<h;V++){let D=V*b-r;w.push(D,-$,0),N.push(0,0,1),y.push(V/l),y.push(1-m/u)}}for(let m=0;m<u;m++)for(let $=0;$<l;$++){let V=$+h*m,D=$+h*(m+1),T=$+1+h*(m+1),k=$+1+h*m;M.push(V,D,k),M.push(D,T,k)}this.setIndex(M),this.setAttribute("position",new wn(w,3)),this.setAttribute("normal",new wn(N,3)),this.setAttribute("uv",new wn(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var dl=class extends En{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],n=new Set,s=new j,r=new j;if(t.index!==null){let o=t.attributes.position,l=t.index,u=t.groups;u.length===0&&(u=[{start:0,count:l.count,materialIndex:0}]);for(let h=0,d=u.length;h<d;++h){let b=u[h],g=b.start,M=b.count;for(let w=g,N=g+M;w<N;w+=3)for(let y=0;y<3;y++){let m=l.getX(w+y),$=l.getX(w+(y+1)%3);s.fromBufferAttribute(o,m),r.fromBufferAttribute(o,$),a0(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{let o=t.attributes.position;for(let l=0,u=o.count/3;l<u;l++)for(let h=0;h<3;h++){let d=3*l+h,b=3*l+(h+1)%3;s.fromBufferAttribute(o,d),r.fromBufferAttribute(o,b),a0(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new wn(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function a0(i,t,e){let n=`${i.x},${i.y},${i.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${i.x},${i.y},${i.z}`;return e.has(n)===!0||e.has(s)===!0?!1:(e.add(n),e.add(s),!0)}function Br(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(o0(s))s.isRenderTargetTexture?(Me("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(o0(s[0])){let r=[];for(let o=0,l=s.length;o<l;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function ei(i){let t={};for(let e=0;e<i.length;e++){let n=Br(i[e]);for(let s in n)t[s]=n[s]}return t}function o0(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Av(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Nf(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ye.workingColorSpace}var Pl={clone:Br,merge:ei},Cv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Rv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,kn=class extends ds{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cv,this.fragmentShader=Rv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Br(t.uniforms),this.uniformsGroups=Av(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new ye().setHex(s.value);break;case"v2":this.uniforms[n].value=new Wt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new j().fromArray(s.value);break;case"v4":this.uniforms[n].value=new on().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Le().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Ze().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},fu=class extends kn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var fl=class extends ds{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gh,this.normalScale=new Wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bs,this.combine=Ru,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},pu=class extends ds{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},mu=class extends ds{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ya(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Xd(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var nr=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let l=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===l)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let l=e[1];t<l&&(n=2,r=l);for(let u=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===u)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let l=n+o>>>1;t<e[l]?o=l:n=l+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},gu=class extends nr{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Zd,endingEnd:Zd}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,l=s[r],u=s[o];if(l===void 0)switch(this.getSettings_().endingStart){case jd:r=t,l=2*e-n;break;case Kd:r=s.length-2,l=e+s[r]-s[r+1];break;default:r=t,l=n}if(u===void 0)switch(this.getSettings_().endingEnd){case jd:o=t,u=2*n-e;break;case Kd:o=1,u=n+s[1]-s[0];break;default:o=t-1,u=e}let h=(n-e)*.5,d=this.valueSize;this._weightPrev=h/(e-l),this._weightNext=h/(u-n),this._offsetPrev=r*d,this._offsetNext=o*d}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,u=t*l,h=u-l,d=this._offsetPrev,b=this._offsetNext,g=this._weightPrev,M=this._weightNext,w=(n-e)/(s-e),N=w*w,y=N*w,m=-g*y+2*g*N-g*w,$=(1+g)*y+(-1.5-2*g)*N+(-.5+g)*w+1,V=(-1-M)*y+(1.5+M)*N+.5*w,D=M*y-M*N;for(let T=0;T!==l;++T)r[T]=m*o[d+T]+$*o[h+T]+V*o[u+T]+D*o[b+T];return r}},_u=class extends nr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,u=t*l,h=u-l,d=(n-e)/(s-e),b=1-d;for(let g=0;g!==l;++g)r[g]=o[h+g]*b+o[u+g]*d;return r}},xu=class extends nr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},vu=class extends nr{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,u=t*l,h=u-l,d=this.inTangents,b=this.outTangents;if(!d||!b){let w=(n-e)/(s-e),N=1-w;for(let y=0;y!==l;++y)r[y]=o[h+y]*N+o[u+y]*w;return r}let g=l*2,M=t-1;for(let w=0;w!==l;++w){let N=o[h+w],y=o[u+w],m=M*g+w*2,$=b[m],V=b[m+1],D=t*g+w*2,T=d[D],k=d[D+1],Y=Pv(n,e,$,T,s);r[w]=sg(Y,N,V,k,y)}return r}};function sg(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Iv(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Pv(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let l=sg(r,t,e,n,s)-i;if(Math.abs(l)<1e-10)break;let u=Iv(r,t,e,n,s);if(Math.abs(u)<1e-10)break;r=Math.max(0,Math.min(1,r-l/u))}return r}var Ri=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ya(e,this.TimeBufferType),this.values=ya(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ya(t.times,Array),values:ya(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Xd(t.settings)&&(n.settings={inTangents:ya(t.settings.inTangents,Array),outTangents:ya(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new xu(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new _u(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new gu(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new vu(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case zo:e=this.InterpolantFactoryMethodDiscrete;break;case jc:e=this.InterpolantFactoryMethodLinear;break;case $c:e=this.InterpolantFactoryMethodSmooth;break;case Jd:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Me("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return zo;case this.InterpolantFactoryMethodLinear:return jc;case this.InterpolantFactoryMethodSmooth:return $c;case this.InterpolantFactoryMethodBezier:return Jd}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Xd(this.settings)&&(l0(this.settings.inTangents,t),l0(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let l=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*l,o*l)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(we("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(we("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let l=0;l!==r;l++){let u=n[l];if(typeof u=="number"&&isNaN(u)){we("KeyframeTrack: Time is not a valid number.",this,l,u),t=!1;break}if(o!==null&&o>u){we("KeyframeTrack: Out of order keys.",this,l,u,o),t=!1;break}o=u}if(s!==void 0&&vx(s))for(let l=0,u=s.length;l!==u;++l){let h=s[l];if(isNaN(h)){we("KeyframeTrack: Value is not a valid number.",this,l,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===$c,r=t.length-1,o=1;for(let l=1;l<r;++l){let u=!1,h=t[l],d=t[l+1];if(h!==d&&(l!==1||h!==t[0]))if(s)u=!0;else{let b=l*n,g=b-n,M=b+n;for(let w=0;w!==n;++w){let N=e[b+w];if(N!==e[g+w]||N!==e[M+w]){u=!0;break}}}if(u){if(l!==o){t[o]=t[l];let b=l*n,g=o*n;for(let M=0;M!==n;++M)e[g+M]=e[b+M]}++o}}if(r>0){t[o]=t[r];for(let l=r*n,u=o*n,h=0;h!==n;++h)e[u+h]=e[l+h];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Xd(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function l0(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Ri.prototype.ValueTypeName="";Ri.prototype.TimeBufferType=Float32Array;Ri.prototype.ValueBufferType=Float32Array;Ri.prototype.DefaultInterpolation=jc;var ir=class extends Ri{constructor(t,e,n){super(t,e,n)}};ir.prototype.ValueTypeName="bool";ir.prototype.ValueBufferType=Array;ir.prototype.DefaultInterpolation=zo;ir.prototype.InterpolantFactoryMethodLinear=void 0;ir.prototype.InterpolantFactoryMethodSmooth=void 0;var yu=class extends Ri{constructor(t,e,n,s){super(t,e,n,s)}};yu.prototype.ValueTypeName="color";var Su=class extends Ri{constructor(t,e,n,s){super(t,e,n,s)}};Su.prototype.ValueTypeName="number";var bu=class extends nr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,l=this.valueSize,u=(n-e)/(s-e),h=t*l;for(let d=h+l;h!==d;h+=4)hs.slerpFlat(r,0,o,h-l,o,h,u);return r}},pl=class extends Ri{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new bu(this.times,this.values,this.getValueSize(),t)}};pl.prototype.ValueTypeName="quaternion";pl.prototype.InterpolantFactoryMethodSmooth=void 0;var sr=class extends Ri{constructor(t,e,n){super(t,e,n)}};sr.prototype.ValueTypeName="string";sr.prototype.ValueBufferType=Array;sr.prototype.DefaultInterpolation=zo;sr.prototype.InterpolantFactoryMethodLinear=void 0;sr.prototype.InterpolantFactoryMethodSmooth=void 0;var Mu=class extends Ri{constructor(t,e,n,s){super(t,e,n,s)}};Mu.prototype.ValueTypeName="vector";var wu=class{constructor(t,e,n){let s=this,r=!1,o=0,l=0,u,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(d){l++,r===!1&&s.onStart!==void 0&&s.onStart(d,o,l),r=!0},this.itemEnd=function(d){o++,s.onProgress!==void 0&&s.onProgress(d,o,l),o===l&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),u?u(d):d},this.setURLModifier=function(d){return u=d,this},this.addHandler=function(d,b){return h.push(d,b),this},this.removeHandler=function(d){let b=h.indexOf(d);return b!==-1&&h.splice(b,2),this},this.getHandler=function(d){for(let b=0,g=h.length;b<g;b+=2){let M=h[b],w=h[b+1];if(M.global&&(M.lastIndex=0),M.test(d))return w}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},rg=new wu,Eu=class{constructor(t){this.manager=t!==void 0?t:rg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Eu.DEFAULT_MATERIAL_NAME="__DEFAULT";var ml=class extends Fn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ye(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},gl=class extends ml{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Fn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ye(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},qd=new Ze,c0=new j,u0=new j,Tu=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Wt(512,512),this.mapType=Si,this.map=null,this.mapPass=null,this.matrix=new Ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Da,this._frameExtents=new Wt(1,1),this._viewportCount=1,this._viewports=[new on(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;c0.setFromMatrixPosition(t.matrixWorld),e.position.copy(c0),u0.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(u0),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){qd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(qd,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,l=s?s.w/r.y:1,u=s?s.x/r.x:0,h=s?s.y/r.y:0;t.coordinateSystem===Aa||t.reversedDepth?e.set(.5*o,0,0,.5*o+u,0,.5*l,0,.5*l+h,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+u,0,.5*l,0,.5*l+h,0,0,.5,.5,0,0,0,1),e.multiply(qd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Fc=new j,Bc=new hs,as=new j,_l=class extends Fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ze,this.projectionMatrix=new Ze,this.projectionMatrixInverse=new Ze,this.coordinateSystem=Yi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Fc,Bc,as),as.x===1&&as.y===1&&as.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fc,Bc,as.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Fc,Bc,as),as.x===1&&as.y===1&&as.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fc,Bc,as.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Qs=new j,h0=new Wt,d0=new Wt,ti=class extends _l{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ra*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Fo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ra*2*Math.atan(Math.tan(Fo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Qs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Qs.x,Qs.y).multiplyScalar(-t/Qs.z),Qs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qs.x,Qs.y).multiplyScalar(-t/Qs.z)}getViewSize(t,e){return this.getViewBounds(t,h0,d0),e.subVectors(d0,h0)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Fo*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let u=o.fullWidth,h=o.fullHeight;r+=o.offsetX*s/u,e-=o.offsetY*n/h,s*=o.width/u,n*=o.height/h}let l=this.filmOffset;l!==0&&(r+=t*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Ba=class extends _l{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,l=s+e,u=s-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,o=r+h*this.view.width,l-=d*this.view.offsetY,u=l-d*this.view.height}this.projectionMatrix.makeOrthographic(r,o,l,u,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},rf=class extends Tu{constructor(){super(new Ba(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},xl=class extends ml{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Fn.DEFAULT_UP),this.updateMatrix(),this.target=new Fn,this.shadow=new rf}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var vl=class extends En{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var Sa=-90,ba=1,Au=class extends Fn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new ti(Sa,ba,t,e);s.layers=this.layers,this.add(s);let r=new ti(Sa,ba,t,e);r.layers=this.layers,this.add(r);let o=new ti(Sa,ba,t,e);o.layers=this.layers,this.add(o);let l=new ti(Sa,ba,t,e);l.layers=this.layers,this.add(l);let u=new ti(Sa,ba,t,e);u.layers=this.layers,this.add(u);let h=new ti(Sa,ba,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,l,u]=e;for(let h of e)this.remove(h);if(t===Yi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(t===Aa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,l,u,h,d]=this.children,b=t.getRenderTarget(),g=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),w=t.xr.enabled;t.xr.enabled=!1;let N=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let y=!1;t.isWebGLRenderer===!0?y=t.state.buffers.depth.getReversed():y=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,3,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(n,4,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),n.texture.generateMipmaps=N,t.setRenderTarget(n,5,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,d),t.setRenderTarget(b,g,M),t.xr.enabled=w,n.texture.needsPMREMUpdate=!0}},Cu=class extends ti{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Uf="\\[\\]\\.:\\/",Lv=new RegExp("["+Uf+"]","g"),Of="[^"+Uf+"]",Dv="[^"+Uf.replace("\\.","")+"]",Nv=/((?:WC+[\/:])*)/.source.replace("WC",Of),Uv=/(WCOD+)?/.source.replace("WCOD",Dv),Ov=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Of),Fv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Of),Bv=new RegExp("^"+Nv+Uv+Ov+Fv+"$"),kv=["material","materials","bones","map"],af=class{constructor(t,e,n){let s=n||_n.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},_n=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Lv,"")}static parseTrackName(t){let e=Bv.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);kv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let l=r[o];if(l.name===e||l.uuid===e)return l;let u=n(l.children);if(u)return u}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Me("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=e.objectIndex;switch(n){case"materials":if(!t.material){we("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){we("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){we("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===h){h=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){we("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){we("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){we("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(h!==void 0){if(t[h]===void 0){we("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let o=t[s];if(o===void 0){let h=e.nodeName;we("PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",t);return}let l=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?l=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let u=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){we("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){we("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}u=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(u=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(u=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[u],this.setValue=this.SetterByBindingTypeAndVersioning[u][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};_n.Composite=af;_n.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};_n.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};_n.prototype.GetterByBindingType=[_n.prototype._getValue_direct,_n.prototype._getValue_array,_n.prototype._getValue_arrayElement,_n.prototype._getValue_toArray];_n.prototype.SetterByBindingTypeAndVersioning=[[_n.prototype._setValue_direct,_n.prototype._setValue_direct_setNeedsUpdate,_n.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[_n.prototype._setValue_array,_n.prototype._setValue_array_setNeedsUpdate,_n.prototype._setValue_array_setMatrixWorldNeedsUpdate],[_n.prototype._setValue_arrayElement,_n.prototype._setValue_arrayElement_setNeedsUpdate,_n.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[_n.prototype._setValue_fromArray,_n.prototype._setValue_fromArray_setNeedsUpdate,_n.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Q1=new Float32Array(1);var rr=class extends eu{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}};var f0=new Ze,yl=class{constructor(t,e,n=0,s=1/0){this.ray=new Ir(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Pa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):we("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return f0.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(f0),this}intersectObject(t,e=!0,n=[]){return of(t,this,n,e),n.sort(p0),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)of(t[s],this,n,e);return n.sort(p0),n}};function p0(i,t){return i.distance-t.distance}function of(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,l=r.length;o<l;o++)of(r[o],t,e,!0)}}var lf=class i{static{i.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};var m0=new j,kc=new j,Ma=new j,wa=new j,Yd=new j,$v=new j,zv=new j,Sl=class{constructor(t=new j,e=new j){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){m0.subVectors(t,this.start),kc.subVectors(this.end,this.start);let n=kc.dot(kc);if(n===0)return 0;let r=kc.dot(m0)/n;return e&&(r=Ne(r,0,1)),r}closestPointToPoint(t,e,n){let s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}distanceSqToLine3(t,e=$v,n=zv){let s=10000000000000001e-32,r,o,l=this.start,u=t.start,h=this.end,d=t.end;Ma.subVectors(h,l),wa.subVectors(d,u),Yd.subVectors(l,u);let b=Ma.dot(Ma),g=wa.dot(wa),M=wa.dot(Yd);if(b<=s&&g<=s)return e.copy(l),n.copy(u),e.sub(n),e.dot(e);if(b<=s)r=0,o=M/g,o=Ne(o,0,1);else{let w=Ma.dot(Yd);if(g<=s)o=0,r=Ne(-w/b,0,1);else{let N=Ma.dot(wa),y=b*g-N*N;y!==0?r=Ne((N*M-w*g)/y,0,1):r=0,o=(N*r+M)/g,o<0?(o=0,r=Ne(-w/b,0,1)):o>1&&(o=1,r=Ne((N-w)/b,0,1))}}return e.copy(l).addScaledVector(Ma,r),n.copy(u).addScaledVector(wa,o),e.distanceToSquared(n)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};function Ff(i,t,e,n){let s=Vv(n);switch(e){case Af:return i*t;case Ou:return i*t/s.components*s.byteLength;case Fu:return i*t/s.components*s.byteLength;case ur:return i*t*2/s.components*s.byteLength;case Bu:return i*t*2/s.components*s.byteLength;case Cf:return i*t*3/s.components*s.byteLength;case ki:return i*t*4/s.components*s.byteLength;case ku:return i*t*4/s.components*s.byteLength;case El:case Tl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Al:case Cl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case zu:case Hu:return Math.max(i,16)*Math.max(t,8)/4;case $u:case Vu:return Math.max(i,8)*Math.max(t,8)/2;case Gu:case Wu:case qu:case Yu:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Xu:case Rl:case Ju:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Zu:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ju:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ku:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Qu:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case th:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case eh:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case nh:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ih:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case sh:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case rh:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ah:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case oh:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case lh:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ch:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case uh:case hh:case dh:return Math.ceil(i/4)*Math.ceil(t/4)*16;case fh:case ph:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Il:case mh:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Vv(i){switch(i){case Si:case Mf:return{byteLength:1,components:1};case za:case wf:case Qi:return{byteLength:2,components:1};case Nu:case Uu:return{byteLength:2,components:4};case Ki:case Du:case Bi:return{byteLength:4,components:1};case Ef:case Tf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Me("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Ag(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Gv(i){let t=new WeakMap;function e(l,u){let h=l.array,d=l.usage,b=h.byteLength,g=i.createBuffer();i.bindBuffer(u,g),i.bufferData(u,h,d),l.onUploadCallback();let M;if(h instanceof Float32Array)M=i.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)M=i.HALF_FLOAT;else if(h instanceof Uint16Array)l.isFloat16BufferAttribute?M=i.HALF_FLOAT:M=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)M=i.SHORT;else if(h instanceof Uint32Array)M=i.UNSIGNED_INT;else if(h instanceof Int32Array)M=i.INT;else if(h instanceof Int8Array)M=i.BYTE;else if(h instanceof Uint8Array)M=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)M=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:M,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version,size:b}}function n(l,u,h){let d=u.array,b=u.updateRanges;if(i.bindBuffer(h,l),b.length===0)i.bufferSubData(h,0,d);else{b.sort((M,w)=>M.start-w.start);let g=0;for(let M=1;M<b.length;M++){let w=b[g],N=b[M];N.start<=w.start+w.count+1?w.count=Math.max(w.count,N.start+N.count-w.start):(++g,b[g]=N)}b.length=g+1;for(let M=0,w=b.length;M<w;M++){let N=b[M];i.bufferSubData(h,N.start*d.BYTES_PER_ELEMENT,d,N.start,N.count)}u.clearUpdateRanges()}u.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),t.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);let u=t.get(l);u&&(i.deleteBuffer(u.buffer),t.delete(l))}function o(l,u){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){let d=t.get(l);(!d||d.version<l.version)&&t.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}let h=t.get(l);if(h===void 0)t.set(l,e(l,u));else if(h.version<l.version){if(h.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,l,u),h.version=l.version}}return{get:s,remove:r,update:o}}var Wv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xv=`#ifdef USE_ALPHAHASH
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
#endif`,qv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jv=`#ifdef USE_AOMAP
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
#endif`,Kv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qv=`#ifdef USE_BATCHING
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
#endif`,ty=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ey=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ny=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,iy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,sy=`#ifdef USE_IRIDESCENCE
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
#endif`,ry=`#ifdef USE_BUMPMAP
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
#endif`,ay=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,oy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ly=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,uy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,hy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,dy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,fy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,py=`#define PI 3.141592653589793
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
} // validated`,my=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,gy=`vec3 transformedNormal = objectNormal;
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
#endif`,_y=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sy="gl_FragColor = linearToOutputTexel( gl_FragColor );",by=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,My=`#ifdef USE_ENVMAP
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
#endif`,wy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ey=`#ifdef USE_ENVMAP
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
#endif`,Ty=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ay=`#ifdef USE_ENVMAP
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
#endif`,Cy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ry=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Iy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Py=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ly=`#ifdef USE_GRADIENTMAP
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
}`,Dy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ny=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Uy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Oy=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Fy=`#ifdef USE_ENVMAP
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
#endif`,By=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ky=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$y=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vy=`PhysicalMaterial material;
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
#endif`,Hy=`uniform sampler2D dfgLUT;
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
}`,Gy=`
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
#endif`,Wy=`#if defined( RE_IndirectDiffuse )
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
#endif`,Xy=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qy=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Yy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ky=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,eS=`#if defined( USE_POINTS_UV )
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
#endif`,nS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,iS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,aS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,oS=`#ifdef USE_MORPHTARGETS
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
#endif`,lS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,uS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,hS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,pS=`#ifdef USE_NORMALMAP
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
#endif`,mS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_S=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,SS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,MS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ES=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,TS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,AS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,CS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,RS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,IS=`float getShadowMask() {
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
}`,PS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,LS=`#ifdef USE_SKINNING
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
#endif`,DS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,NS=`#ifdef USE_SKINNING
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
#endif`,US=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,OS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,FS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,BS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,kS=`#ifdef USE_TRANSMISSION
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
#endif`,$S=`#ifdef USE_TRANSMISSION
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
#endif`,zS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,VS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,HS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,GS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,WS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,XS=`uniform sampler2D t2D;
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
}`,qS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,YS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,JS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ZS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jS=`#include <common>
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
}`,KS=`#if DEPTH_PACKING == 3200
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
}`,QS=`#define DISTANCE
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
}`,tb=`#define DISTANCE
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
}`,eb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ib=`uniform float scale;
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
}`,sb=`uniform vec3 diffuse;
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
}`,rb=`#include <common>
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
}`,ab=`uniform vec3 diffuse;
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
}`,ob=`#define LAMBERT
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
}`,lb=`#define LAMBERT
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
}`,cb=`#define MATCAP
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
}`,ub=`#define MATCAP
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
}`,hb=`#define NORMAL
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
}`,db=`#define NORMAL
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
}`,fb=`#define PHONG
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
}`,pb=`#define PHONG
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
}`,mb=`#define STANDARD
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
}`,gb=`#define STANDARD
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
}`,_b=`#define TOON
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
}`,xb=`#define TOON
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
}`,vb=`uniform float size;
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
}`,yb=`uniform vec3 diffuse;
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
}`,Sb=`#include <common>
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
}`,bb=`uniform vec3 color;
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
}`,Mb=`uniform float rotation;
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
}`,wb=`uniform vec3 diffuse;
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
}`,Be={alphahash_fragment:Wv,alphahash_pars_fragment:Xv,alphamap_fragment:qv,alphamap_pars_fragment:Yv,alphatest_fragment:Jv,alphatest_pars_fragment:Zv,aomap_fragment:jv,aomap_pars_fragment:Kv,batching_pars_vertex:Qv,batching_vertex:ty,begin_vertex:ey,beginnormal_vertex:ny,bsdfs:iy,iridescence_fragment:sy,bumpmap_pars_fragment:ry,clipping_planes_fragment:ay,clipping_planes_pars_fragment:oy,clipping_planes_pars_vertex:ly,clipping_planes_vertex:cy,color_fragment:uy,color_pars_fragment:hy,color_pars_vertex:dy,color_vertex:fy,common:py,cube_uv_reflection_fragment:my,defaultnormal_vertex:gy,displacementmap_pars_vertex:_y,displacementmap_vertex:xy,emissivemap_fragment:vy,emissivemap_pars_fragment:yy,colorspace_fragment:Sy,colorspace_pars_fragment:by,envmap_fragment:My,envmap_common_pars_fragment:wy,envmap_pars_fragment:Ey,envmap_pars_vertex:Ty,envmap_physical_pars_fragment:Fy,envmap_vertex:Ay,fog_vertex:Cy,fog_pars_vertex:Ry,fog_fragment:Iy,fog_pars_fragment:Py,gradientmap_pars_fragment:Ly,lightmap_pars_fragment:Dy,lights_lambert_fragment:Ny,lights_lambert_pars_fragment:Uy,lights_pars_begin:Oy,lights_toon_fragment:By,lights_toon_pars_fragment:ky,lights_phong_fragment:$y,lights_phong_pars_fragment:zy,lights_physical_fragment:Vy,lights_physical_pars_fragment:Hy,lights_fragment_begin:Gy,lights_fragment_maps:Wy,lights_fragment_end:Xy,lightprobes_pars_fragment:qy,logdepthbuf_fragment:Yy,logdepthbuf_pars_fragment:Jy,logdepthbuf_pars_vertex:Zy,logdepthbuf_vertex:jy,map_fragment:Ky,map_pars_fragment:Qy,map_particle_fragment:tS,map_particle_pars_fragment:eS,metalnessmap_fragment:nS,metalnessmap_pars_fragment:iS,morphinstance_vertex:sS,morphcolor_vertex:rS,morphnormal_vertex:aS,morphtarget_pars_vertex:oS,morphtarget_vertex:lS,normal_fragment_begin:cS,normal_fragment_maps:uS,normal_pars_fragment:hS,normal_pars_vertex:dS,normal_vertex:fS,normalmap_pars_fragment:pS,clearcoat_normal_fragment_begin:mS,clearcoat_normal_fragment_maps:gS,clearcoat_pars_fragment:_S,iridescence_pars_fragment:xS,opaque_fragment:vS,packing:yS,premultiplied_alpha_fragment:SS,project_vertex:bS,dithering_fragment:MS,dithering_pars_fragment:wS,roughnessmap_fragment:ES,roughnessmap_pars_fragment:TS,shadowmap_pars_fragment:AS,shadowmap_pars_vertex:CS,shadowmap_vertex:RS,shadowmask_pars_fragment:IS,skinbase_vertex:PS,skinning_pars_vertex:LS,skinning_vertex:DS,skinnormal_vertex:NS,specularmap_fragment:US,specularmap_pars_fragment:OS,tonemapping_fragment:FS,tonemapping_pars_fragment:BS,transmission_fragment:kS,transmission_pars_fragment:$S,uv_pars_fragment:zS,uv_pars_vertex:VS,uv_vertex:HS,worldpos_vertex:GS,background_vert:WS,background_frag:XS,backgroundCube_vert:qS,backgroundCube_frag:YS,cube_vert:JS,cube_frag:ZS,depth_vert:jS,depth_frag:KS,distance_vert:QS,distance_frag:tb,equirect_vert:eb,equirect_frag:nb,linedashed_vert:ib,linedashed_frag:sb,meshbasic_vert:rb,meshbasic_frag:ab,meshlambert_vert:ob,meshlambert_frag:lb,meshmatcap_vert:cb,meshmatcap_frag:ub,meshnormal_vert:hb,meshnormal_frag:db,meshphong_vert:fb,meshphong_frag:pb,meshphysical_vert:mb,meshphysical_frag:gb,meshtoon_vert:_b,meshtoon_frag:xb,points_vert:vb,points_frag:yb,shadow_vert:Sb,shadow_frag:bb,sprite_vert:Mb,sprite_frag:wb},qt={common:{diffuse:{value:new ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Le}},envmap:{envMap:{value:null},envMapRotation:{value:new Le},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Le},normalScale:{value:new Wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new j},probesMax:{value:new j},probesResolution:{value:new j}},points:{diffuse:{value:new ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0},uvTransform:{value:new Le}},sprite:{diffuse:{value:new ye(16777215)},opacity:{value:1},center:{value:new Wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}}},hi={basic:{uniforms:ei([qt.common,qt.specularmap,qt.envmap,qt.aomap,qt.lightmap,qt.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:ei([qt.common,qt.specularmap,qt.envmap,qt.aomap,qt.lightmap,qt.emissivemap,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.fog,qt.lights,{emissive:{value:new ye(0)},envMapIntensity:{value:1}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:ei([qt.common,qt.specularmap,qt.envmap,qt.aomap,qt.lightmap,qt.emissivemap,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.fog,qt.lights,{emissive:{value:new ye(0)},specular:{value:new ye(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:ei([qt.common,qt.envmap,qt.aomap,qt.lightmap,qt.emissivemap,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.roughnessmap,qt.metalnessmap,qt.fog,qt.lights,{emissive:{value:new ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:ei([qt.common,qt.aomap,qt.lightmap,qt.emissivemap,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.gradientmap,qt.fog,qt.lights,{emissive:{value:new ye(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:ei([qt.common,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:ei([qt.points,qt.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:ei([qt.common,qt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:ei([qt.common,qt.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:ei([qt.common,qt.bumpmap,qt.normalmap,qt.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:ei([qt.sprite,qt.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new Le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Le}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distance:{uniforms:ei([qt.common,qt.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distance_vert,fragmentShader:Be.distance_frag},shadow:{uniforms:ei([qt.lights,qt.fog,{color:{value:new ye(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};hi.physical={uniforms:ei([hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Le},clearcoatNormalScale:{value:new Wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Le},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Le},sheen:{value:0},sheenColor:{value:new ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Le},transmissionSamplerSize:{value:new Wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Le},attenuationDistance:{value:0},attenuationColor:{value:new ye(0)},specularColor:{value:new ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Le},anisotropyVector:{value:new Wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Le}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};var vh={r:0,b:0,g:0},Eb=new Ze,Cg=new Le;Cg.set(-1,0,0,0,1,0,0,0,1);function Tb(i,t,e,n,s,r){let o=new ye(0),l=s===!0?0:1,u,h,d=null,b=0,g=null;function M($){let V=$.isScene===!0?$.background:null;if(V&&V.isTexture){let D=$.backgroundBlurriness>0;V=t.get(V,D)}return V}function w($){let V=!1,D=M($);D===null?y(o,l):D&&D.isColor&&(y(D,1),V=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?e.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||V)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function N($,V){let D=M(V);D&&(D.isCubeTexture||D.mapping===Ml)?(h===void 0&&(h=new Bn(new Na(1,1,1),new kn({name:"BackgroundCubeMaterial",uniforms:Br(hi.backgroundCube.uniforms),vertexShader:hi.backgroundCube.vertexShader,fragmentShader:hi.backgroundCube.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,k,Y){this.matrixWorld.copyPosition(Y.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=D,h.material.uniforms.backgroundBlurriness.value=V.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=V.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Eb.makeRotationFromEuler(V.backgroundRotation)).transpose(),D.isCubeTexture&&D.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(Cg),h.material.toneMapped=Ye.getTransfer(D.colorSpace)!==an,(d!==D||b!==D.version||g!==i.toneMapping)&&(h.material.needsUpdate=!0,d=D,b=D.version,g=i.toneMapping),h.layers.enableAll(),$.unshift(h,h.geometry,h.material,0,0,null)):D&&D.isTexture&&(u===void 0&&(u=new Bn(new hl(2,2),new kn({name:"BackgroundMaterial",uniforms:Br(hi.background.uniforms),vertexShader:hi.background.vertexShader,fragmentShader:hi.background.fragmentShader,side:ar,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(u)),u.material.uniforms.t2D.value=D,u.material.uniforms.backgroundIntensity.value=V.backgroundIntensity,u.material.toneMapped=Ye.getTransfer(D.colorSpace)!==an,D.matrixAutoUpdate===!0&&D.updateMatrix(),u.material.uniforms.uvTransform.value.copy(D.matrix),(d!==D||b!==D.version||g!==i.toneMapping)&&(u.material.needsUpdate=!0,d=D,b=D.version,g=i.toneMapping),u.layers.enableAll(),$.unshift(u,u.geometry,u.material,0,0,null))}function y($,V){$.getRGB(vh,Nf(i)),e.buffers.color.setClear(vh.r,vh.g,vh.b,V,r)}function m(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return o},setClearColor:function($,V=1){o.set($),l=V,y(o,l)},getClearAlpha:function(){return l},setClearAlpha:function($){l=$,y(o,l)},render:w,addToRenderList:N,dispose:m}}function Ab(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=g(null),r=s,o=!1;function l(Z,ot,ht,tt,st){let pt=!1,_t=b(Z,tt,ht,ot);r!==_t&&(r=_t,h(r.object)),pt=M(Z,tt,ht,st),pt&&w(Z,tt,ht,st),st!==null&&t.update(st,i.ELEMENT_ARRAY_BUFFER),(pt||o)&&(o=!1,D(Z,ot,ht,tt),st!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(st).buffer))}function u(){return i.createVertexArray()}function h(Z){return i.bindVertexArray(Z)}function d(Z){return i.deleteVertexArray(Z)}function b(Z,ot,ht,tt){let st=tt.wireframe===!0,pt=n[ot.id];pt===void 0&&(pt={},n[ot.id]=pt);let _t=Z.isInstancedMesh===!0?Z.id:0,At=pt[_t];At===void 0&&(At={},pt[_t]=At);let xt=At[ht.id];xt===void 0&&(xt={},At[ht.id]=xt);let wt=xt[st];return wt===void 0&&(wt=g(u()),xt[st]=wt),wt}function g(Z){let ot=[],ht=[],tt=[];for(let st=0;st<e;st++)ot[st]=0,ht[st]=0,tt[st]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ot,enabledAttributes:ht,attributeDivisors:tt,object:Z,attributes:{},index:null}}function M(Z,ot,ht,tt){let st=r.attributes,pt=ot.attributes,_t=0,At=ht.getAttributes();for(let xt in At)if(At[xt].location>=0){let bt=st[xt],Vt=pt[xt];if(Vt===void 0&&(xt==="instanceMatrix"&&Z.instanceMatrix&&(Vt=Z.instanceMatrix),xt==="instanceColor"&&Z.instanceColor&&(Vt=Z.instanceColor)),bt===void 0||bt.attribute!==Vt||Vt&&bt.data!==Vt.data)return!0;_t++}return r.attributesNum!==_t||r.index!==tt}function w(Z,ot,ht,tt){let st={},pt=ot.attributes,_t=0,At=ht.getAttributes();for(let xt in At)if(At[xt].location>=0){let bt=pt[xt];bt===void 0&&(xt==="instanceMatrix"&&Z.instanceMatrix&&(bt=Z.instanceMatrix),xt==="instanceColor"&&Z.instanceColor&&(bt=Z.instanceColor));let Vt={};Vt.attribute=bt,bt&&bt.data&&(Vt.data=bt.data),st[xt]=Vt,_t++}r.attributes=st,r.attributesNum=_t,r.index=tt}function N(){let Z=r.newAttributes;for(let ot=0,ht=Z.length;ot<ht;ot++)Z[ot]=0}function y(Z){m(Z,0)}function m(Z,ot){let ht=r.newAttributes,tt=r.enabledAttributes,st=r.attributeDivisors;ht[Z]=1,tt[Z]===0&&(i.enableVertexAttribArray(Z),tt[Z]=1),st[Z]!==ot&&(i.vertexAttribDivisor(Z,ot),st[Z]=ot)}function $(){let Z=r.newAttributes,ot=r.enabledAttributes;for(let ht=0,tt=ot.length;ht<tt;ht++)ot[ht]!==Z[ht]&&(i.disableVertexAttribArray(ht),ot[ht]=0)}function V(Z,ot,ht,tt,st,pt,_t){_t===!0?i.vertexAttribIPointer(Z,ot,ht,st,pt):i.vertexAttribPointer(Z,ot,ht,tt,st,pt)}function D(Z,ot,ht,tt){N();let st=tt.attributes,pt=ht.getAttributes(),_t=ot.defaultAttributeValues;for(let At in pt){let xt=pt[At];if(xt.location>=0){let wt=st[At];if(wt===void 0&&(At==="instanceMatrix"&&Z.instanceMatrix&&(wt=Z.instanceMatrix),At==="instanceColor"&&Z.instanceColor&&(wt=Z.instanceColor)),wt!==void 0){let bt=wt.normalized,Vt=wt.itemSize,ne=t.get(wt);if(ne===void 0)continue;let je=ne.buffer,Oe=ne.type,We=ne.bytesPerElement,vt=Oe===i.INT||Oe===i.UNSIGNED_INT||wt.gpuType===Du;if(wt.isInterleavedBufferAttribute){let yt=wt.data,Lt=yt.stride,de=wt.offset;if(yt.isInstancedInterleavedBuffer){for(let Kt=0;Kt<xt.locationSize;Kt++)m(xt.location+Kt,yt.meshPerAttribute);Z.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let Kt=0;Kt<xt.locationSize;Kt++)y(xt.location+Kt);i.bindBuffer(i.ARRAY_BUFFER,je);for(let Kt=0;Kt<xt.locationSize;Kt++)V(xt.location+Kt,Vt/xt.locationSize,Oe,bt,Lt*We,(de+Vt/xt.locationSize*Kt)*We,vt)}else{if(wt.isInstancedBufferAttribute){for(let yt=0;yt<xt.locationSize;yt++)m(xt.location+yt,wt.meshPerAttribute);Z.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=wt.meshPerAttribute*wt.count)}else for(let yt=0;yt<xt.locationSize;yt++)y(xt.location+yt);i.bindBuffer(i.ARRAY_BUFFER,je);for(let yt=0;yt<xt.locationSize;yt++)V(xt.location+yt,Vt/xt.locationSize,Oe,bt,Vt*We,Vt/xt.locationSize*yt*We,vt)}}else if(_t!==void 0){let bt=_t[At];if(bt!==void 0)switch(bt.length){case 2:i.vertexAttrib2fv(xt.location,bt);break;case 3:i.vertexAttrib3fv(xt.location,bt);break;case 4:i.vertexAttrib4fv(xt.location,bt);break;default:i.vertexAttrib1fv(xt.location,bt)}}}}$()}function T(){B();for(let Z in n){let ot=n[Z];for(let ht in ot){let tt=ot[ht];for(let st in tt){let pt=tt[st];for(let _t in pt)d(pt[_t].object),delete pt[_t];delete tt[st]}}delete n[Z]}}function k(Z){if(n[Z.id]===void 0)return;let ot=n[Z.id];for(let ht in ot){let tt=ot[ht];for(let st in tt){let pt=tt[st];for(let _t in pt)d(pt[_t].object),delete pt[_t];delete tt[st]}}delete n[Z.id]}function Y(Z){for(let ot in n){let ht=n[ot];for(let tt in ht){let st=ht[tt];if(st[Z.id]===void 0)continue;let pt=st[Z.id];for(let _t in pt)d(pt[_t].object),delete pt[_t];delete st[Z.id]}}}function R(Z){for(let ot in n){let ht=n[ot],tt=Z.isInstancedMesh===!0?Z.id:0,st=ht[tt];if(st!==void 0){for(let pt in st){let _t=st[pt];for(let At in _t)d(_t[At].object),delete _t[At];delete st[pt]}delete ht[tt],Object.keys(ht).length===0&&delete n[ot]}}}function B(){q(),o=!0,r!==s&&(r=s,h(r.object))}function q(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:l,reset:B,resetDefaultState:q,dispose:T,releaseStatesOfGeometry:k,releaseStatesOfObject:R,releaseStatesOfProgram:Y,initAttributes:N,enableAttribute:y,disableUnusedAttributes:$}}function Cb(i,t,e){let n;function s(u){n=u}function r(u,h){i.drawArrays(n,u,h),e.update(h,n,1)}function o(u,h,d){d!==0&&(i.drawArraysInstanced(n,u,h,d),e.update(h,n,d))}function l(u,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,h,0,d);let g=0;for(let M=0;M<d;M++)g+=h[M];e.update(g,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=l}function Rb(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let Y=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(Y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(Y){return!(Y!==ki&&n.convert(Y)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(Y){let R=Y===Qi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(Y!==Si&&Y!==Bi&&!R&&n.convert(Y)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function u(Y){if(Y==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";Y="mediump"}return Y==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp",d=u(h);d!==h&&(Me("WebGLRenderer:",h,"not supported, using",d,"instead."),h=d);let b=e.logarithmicDepthBuffer===!0,g=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&g===!1&&Me("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let M=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),w=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),N=i.getParameter(i.MAX_TEXTURE_SIZE),y=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),$=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),V=i.getParameter(i.MAX_VARYING_VECTORS),D=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),k=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:u,textureFormatReadable:o,textureTypeReadable:l,precision:h,logarithmicDepthBuffer:b,reversedDepthBuffer:g,maxTextures:M,maxVertexTextures:w,maxTextureSize:N,maxCubemapSize:y,maxAttributes:m,maxVertexUniforms:$,maxVaryings:V,maxFragmentUniforms:D,maxSamples:T,samples:k}}function Ib(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Xi,l=new Le,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(b,g){let M=b.length!==0||g||n!==0||s;return s=g,n=b.length,M},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(b,g){e=d(b,g,0)},this.setState=function(b,g,M){let w=b.clippingPlanes,N=b.clipIntersection,y=b.clipShadows,m=i.get(b);if(!s||w===null||w.length===0||r&&!y)r?d(null):h();else{let $=r?0:n,V=$*4,D=m.clippingState||null;u.value=D,D=d(w,g,V,M);for(let T=0;T!==V;++T)D[T]=e[T];m.clippingState=D,this.numIntersection=N?this.numPlanes:0,this.numPlanes+=$}};function h(){u.value!==e&&(u.value=e,u.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(b,g,M,w){let N=b!==null?b.length:0,y=null;if(N!==0){if(y=u.value,w!==!0||y===null){let m=M+N*4,$=g.matrixWorldInverse;l.getNormalMatrix($),(y===null||y.length<m)&&(y=new Float32Array(m));for(let V=0,D=M;V!==N;++V,D+=4)o.copy(b[V]).applyMatrix4($,l),o.normal.toArray(y,D),y[D+3]=o.constant}u.value=y,u.needsUpdate=!0}return t.numPlanes=N,t.numIntersection=0,y}}var Ga=4,Pb=6,Lb=20,Db=256,Ll=new Ba,ag=new ye,Bf=null,kf=0,$f=0,zf=!1,Nb=new j,kr=new j,Sh=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:l=Nb}=r;Bf=this._renderer.getRenderTarget(),kf=this._renderer.getActiveCubeFace(),$f=this._renderer.getActiveMipmapLevel(),zf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(t,n,s,u,l),e>0&&this._blur(u,0,0,e),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Bf,kf,$f),this._renderer.xr.enabled=zf,t.scissorTest=!1,Ha(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===or||t.mapping===Fr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Bf=this._renderer.getRenderTarget(),kf=this._renderer.getActiveCubeFace(),$f=this._renderer.getActiveMipmapLevel(),zf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Hn,minFilter:Hn,generateMipmaps:!1,type:Qi,format:ki,colorSpace:Vo,depthBuffer:!1},s=og(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=og(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Ub(r)),this._blurMaterial=Fb(r,t,e),this._ggxMaterial=Ob(r,t,e)}return s}_compileMaterial(t){let e=new Bn(new En,t);this._renderer.compile(e,Ll)}_sceneToCubeUV(t,e,n,s,r){let u=new ti(90,1,e,n),h=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],b=this._renderer,g=b.autoClear,M=b.toneMapping;b.getClearColor(ag),b.toneMapping=ji,b.autoClear=!1,b.state.buffers.depth.getReversed()&&(b.setRenderTarget(s),b.clearDepth(),b.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Bn(new Na,new Pr({name:"PMREM.Background",side:ui,depthWrite:!1,depthTest:!1})));let N=this._backgroundBox,y=N.material,m=!1,$=t.background;$?$.isColor&&(y.color.copy($),t.background=null,m=!0):(y.color.copy(ag),m=!0);for(let V=0;V<6;V++){let D=V%3;D===0?(u.up.set(0,h[V],0),u.position.set(r.x,r.y,r.z),u.lookAt(r.x+d[V],r.y,r.z)):D===1?(u.up.set(0,0,h[V]),u.position.set(r.x,r.y,r.z),u.lookAt(r.x,r.y+d[V],r.z)):(u.up.set(0,h[V],0),u.position.set(r.x,r.y,r.z),u.lookAt(r.x,r.y,r.z+d[V]));let T=this._cubeSize;Ha(s,D*T,V>2?T:0,T,T),b.setRenderTarget(s),m&&b.render(N,u),b.render(t,u)}b.toneMapping=M,b.autoClear=g,t.background=$}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===or||t.mapping===Fr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=cg()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lg());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let l=r.uniforms;l.envMap.value=t;let u=this._cubeSize;Ha(e,0,0,3*u,2*u),n.setRenderTarget(e),n.render(o,Ll)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,l=this._lodMeshes[n];l.material=o;let u=o.uniforms,h=n/(this._lodMeshes.length-1),d=e/(this._lodMeshes.length-1),b=Math.sqrt(h*h-d*d),g=h*1.25,M=b*g,{_lodMax:w}=this,N=this._sizeLods[n],y=3*N*(n>w-Ga?n-w+Ga:0),m=4*(this._cubeSize-N);u.envMap.value=t.texture,u.roughness.value=M,u.mipInt.value=w-e,Ha(r,y,m,3*N,2*N),s.setRenderTarget(r),s.render(l,Ll),u.envMap.value=r.texture,u.roughness.value=0,u.mipInt.value=w-n,Ha(t,y,m,3*N,2*N),s.setRenderTarget(t),s.render(l,Ll)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,s,r){let o=this._renderer,l=this._blurMaterial,u=this._lodMeshes[s];u.material=l;let h=l.uniforms;h.envMap.value=t.texture,h.sigma.value=r,h.mipInt.value=this._lodMax-n;let d=this._sizeLods[s],b=3*d*(s>this._lodMax-Ga?s-this._lodMax+Ga:0),g=4*(this._cubeSize-d);Ha(e,b,g,3*d,2*d),o.setRenderTarget(e),o.render(u,Ll)}};function Ub(i){let t=[],e=[],n=i,s=i-Ga+1+Pb;for(let r=0;r<s;r++){let o=Math.pow(2,n);t.push(o);let l=1/(o-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],b=6,g=6,M=3,w=new Float32Array(M*g*b),N=new Float32Array(M*g*b);for(let m=0;m<b;m++){let $=m%3*2/3-1,V=m>2?0:-1,D=[$,V,0,$+2/3,V,0,$+2/3,V+1,0,$,V,0,$+2/3,V+1,0,$,V+1,0];w.set(D,M*g*m);for(let T=0;T<g;T++){let k=d[T*2]*2-1,Y=d[T*2+1]*2-1;m===0?kr.set(1,Y,k):m===1?kr.set(-k,1,-Y):m===2?kr.set(-k,Y,1):m===3?kr.set(-1,Y,-k):m===4?kr.set(-k,-1,Y):kr.set(k,Y,-1),kr.toArray(N,(m*g+T)*M)}}let y=new En;y.setAttribute("position",new hn(w,M)),y.setAttribute("outputDirection",new hn(N,M)),e.push(new Bn(y,null)),n>Ga&&n--}return{lodMeshes:e,sizeLods:t}}function og(i,t,e){let n=new vi(i,t,e);return n.texture.mapping=Ml,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ha(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Ob(i,t,e){return new kn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Db,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:wh(),fragmentShader:`

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
		`,blending:ps,depthTest:!1,depthWrite:!1})}function Fb(i,t,e){return new kn({name:"SphericalGaussianBlur",defines:{SAMPLES:Lb,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:wh(),fragmentShader:`

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
		`,blending:ps,depthTest:!1,depthWrite:!1})}function lg(){return new kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wh(),fragmentShader:`

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
		`,blending:ps,depthTest:!1,depthWrite:!1})}function cg(){return new kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ps,depthTest:!1,depthWrite:!1})}function wh(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var bh=class extends vi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new tl(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Na(5,5,5),r=new kn({name:"CubemapFromEquirect",uniforms:Br(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ui,blending:ps});r.uniforms.tEquirect.value=e;let o=new Bn(s,r),l=e.minFilter;return e.minFilter===lr&&(e.minFilter=Hn),new Au(1,10,this).update(t,o),e.minFilter=l,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}};function Bb(i){let t=new WeakMap,e=new WeakMap,n=null;function s(g,M=!1){return g==null?null:M?o(g):r(g)}function r(g){if(g&&g.isTexture){let M=g.mapping;if(M===Iu||M===Pu)if(t.has(g)){let w=t.get(g).texture;return l(w,g.mapping)}else{let w=g.image;if(w&&w.height>0){let N=new bh(w.height);return N.fromEquirectangularTexture(i,g),t.set(g,N),g.addEventListener("dispose",h),l(N.texture,g.mapping)}else return null}}return g}function o(g){if(g&&g.isTexture){let M=g.mapping,w=M===Iu||M===Pu,N=M===or||M===Fr;if(w||N){let y=e.get(g),m=y!==void 0?y.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==m)return n===null&&(n=new Sh(i)),y=w?n.fromEquirectangular(g,y):n.fromCubemap(g,y),y.texture.pmremVersion=g.pmremVersion,e.set(g,y),y.texture;if(y!==void 0)return y.texture;{let $=g.image;return w&&$&&$.height>0||N&&$&&u($)?(n===null&&(n=new Sh(i)),y=w?n.fromEquirectangular(g):n.fromCubemap(g),y.texture.pmremVersion=g.pmremVersion,e.set(g,y),g.addEventListener("dispose",d),y.texture):null}}}return g}function l(g,M){return M===Iu?g.mapping=or:M===Pu&&(g.mapping=Fr),g}function u(g){let M=0,w=6;for(let N=0;N<w;N++)g[N]!==void 0&&M++;return M===w}function h(g){let M=g.target;M.removeEventListener("dispose",h);let w=t.get(M);w!==void 0&&(t.delete(M),w.dispose())}function d(g){let M=g.target;M.removeEventListener("dispose",d);let w=e.get(M);w!==void 0&&(e.delete(M),w.dispose())}function b(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:b}}function kb(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Rr("WebGLRenderer: "+n+" extension not supported."),s}}}function $b(i,t,e,n){let s={},r=new WeakMap;function o(b){let g=b.target;g.index!==null&&t.remove(g.index);for(let w in g.attributes)t.remove(g.attributes[w]);g.removeEventListener("dispose",o),delete s[g.id];let M=r.get(g);M&&(t.remove(M),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function l(b,g){return s[g.id]===!0||(g.addEventListener("dispose",o),s[g.id]=!0,e.memory.geometries++),g}function u(b){let g=b.attributes;for(let M in g)t.update(g[M],i.ARRAY_BUFFER)}function h(b){let g=[],M=b.index,w=b.attributes.position,N=0;if(w===void 0)return;if(M!==null){let $=M.array;N=M.version;for(let V=0,D=$.length;V<D;V+=3){let T=$[V+0],k=$[V+1],Y=$[V+2];g.push(T,k,k,Y,Y,T)}}else{let $=w.array;N=w.version;for(let V=0,D=$.length/3-1;V<D;V+=3){let T=V+0,k=V+1,Y=V+2;g.push(T,k,k,Y,Y,T)}}let y=new(w.count>=65535?Jo:Yo)(g,1);y.version=N;let m=r.get(b);m&&t.remove(m),r.set(b,y)}function d(b){let g=r.get(b);if(g){let M=b.index;M!==null&&g.version<M.version&&h(b)}else h(b);return r.get(b)}return{get:l,update:u,getWireframeAttribute:d}}function zb(i,t,e){let n;function s(b){n=b}let r,o;function l(b){r=b.type,o=b.bytesPerElement}function u(b,g){i.drawElements(n,g,r,b*o),e.update(g,n,1)}function h(b,g,M){M!==0&&(i.drawElementsInstanced(n,g,r,b*o,M),e.update(g,n,M))}function d(b,g,M){if(M===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,g,0,r,b,0,M);let N=0;for(let y=0;y<M;y++)N+=g[y];e.update(N,n,1)}this.setMode=s,this.setIndex=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d}function Vb(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,l){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=l*(r/3);break;case i.LINES:e.lines+=l*(r/2);break;case i.LINE_STRIP:e.lines+=l*(r-1);break;case i.LINE_LOOP:e.lines+=l*r;break;case i.POINTS:e.points+=l*r;break;default:we("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Hb(i,t,e){let n=new WeakMap,s=new on;function r(o,l,u){let h=o.morphTargetInfluences,d=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,b=d!==void 0?d.length:0,g=n.get(l);if(g===void 0||g.count!==b){let B=function(){Y.dispose(),n.delete(l),l.removeEventListener("dispose",B)};g!==void 0&&g.texture.dispose();let M=l.morphAttributes.position!==void 0,w=l.morphAttributes.normal!==void 0,N=l.morphAttributes.color!==void 0,y=l.morphAttributes.position||[],m=l.morphAttributes.normal||[],$=l.morphAttributes.color||[],V=0;M===!0&&(V=1),w===!0&&(V=2),N===!0&&(V=3);let D=l.attributes.position.count*V,T=1;D>t.maxTextureSize&&(T=Math.ceil(D/t.maxTextureSize),D=t.maxTextureSize);let k=new Float32Array(D*T*4*b),Y=new Xo(k,D,T,b);Y.type=Bi,Y.needsUpdate=!0;let R=V*4;for(let q=0;q<b;q++){let Z=y[q],ot=m[q],ht=$[q],tt=D*T*4*q;for(let st=0;st<Z.count;st++){let pt=st*R;M===!0&&(s.fromBufferAttribute(Z,st),k[tt+pt+0]=s.x,k[tt+pt+1]=s.y,k[tt+pt+2]=s.z,k[tt+pt+3]=0),w===!0&&(s.fromBufferAttribute(ot,st),k[tt+pt+4]=s.x,k[tt+pt+5]=s.y,k[tt+pt+6]=s.z,k[tt+pt+7]=0),N===!0&&(s.fromBufferAttribute(ht,st),k[tt+pt+8]=s.x,k[tt+pt+9]=s.y,k[tt+pt+10]=s.z,k[tt+pt+11]=ht.itemSize===4?s.w:1)}}g={count:b,texture:Y,size:new Wt(D,T)},n.set(l,g),l.addEventListener("dispose",B)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)u.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let M=0;for(let N=0;N<h.length;N++)M+=h[N];let w=l.morphTargetsRelative?1:1-M;u.getUniforms().setValue(i,"morphTargetBaseInfluence",w),u.getUniforms().setValue(i,"morphTargetInfluences",h)}u.getUniforms().setValue(i,"morphTargetsTexture",g.texture,e),u.getUniforms().setValue(i,"morphTargetsTextureSize",g.size)}return{update:r}}function Gb(i,t,e,n,s){let r=new WeakMap;function o(h){let d=s.render.frame,b=h.geometry,g=t.get(h,b);if(r.get(g)!==d&&(t.update(g),r.set(g,d)),h.isInstancedMesh&&(h.hasEventListener("dispose",u)===!1&&h.addEventListener("dispose",u),r.get(h)!==d&&(e.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,i.ARRAY_BUFFER),r.set(h,d))),h.isSkinnedMesh){let M=h.skeleton;r.get(M)!==d&&(M.update(),r.set(M,d))}return g}function l(){r=new WeakMap}function u(h){let d=h.target;d.removeEventListener("dispose",u),n.releaseStatesOfObject(d),e.remove(d.instanceMatrix),d.instanceColor!==null&&e.remove(d.instanceColor)}return{update:o,dispose:l}}var Wb={[mf]:"LINEAR_TONE_MAPPING",[gf]:"REINHARD_TONE_MAPPING",[_f]:"CINEON_TONE_MAPPING",[xf]:"ACES_FILMIC_TONE_MAPPING",[yf]:"AGX_TONE_MAPPING",[Sf]:"NEUTRAL_TONE_MAPPING",[vf]:"CUSTOM_TONE_MAPPING"};function Xb(i,t,e,n,s,r){let o=new vi(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),l=null,u=null,h=new En;h.setAttribute("position",new wn([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new wn([0,2,0,0,2,0],2));let d=new fu({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),b=new Bn(h,d),g=new Ba(-1,1,1,-1,0,1),M=null,w=null,N=!1,y,m=null,$=[],V=!1;this.setSize=function(D,T){o.setSize(D,T),l!==null&&l.setSize(D,T),u!==null&&u.setSize(D,T);for(let k=0;k<$.length;k++){let Y=$[k];Y.setSize&&Y.setSize(D,T)}},this.setEffects=function(D){$=D,V=$.length>0&&$[0].isRenderPass===!0;let T=o.width,k=o.height;$.length>0&&l===null&&(l=new vi(T,k,{type:Qi,depthBuffer:!1,stencilBuffer:!1}),u=new vi(T,k,{type:Qi,depthBuffer:!1,stencilBuffer:!1}));for(let Y=0;Y<$.length;Y++){let R=$[Y];R.setSize&&R.setSize(T,k)}},this.begin=function(D,T){if(N||D.toneMapping===ji&&$.length===0)return!1;if(m=T,T!==null){let k=T.width,Y=T.height;(o.width!==k||o.height!==Y)&&this.setSize(k,Y)}return V===!1&&D.setRenderTarget(o),y=D.toneMapping,D.toneMapping=ji,!0},this.hasRenderPass=function(){return V},this.end=function(D,T){D.toneMapping=y,N=!0;let k=o,Y=l;for(let R=0;R<$.length;R++){let B=$[R];B.enabled!==!1&&(B.render(D,Y,k,T),B.needsSwap!==!1&&(k=Y,Y=Y===l?u:l))}if(M!==D.outputColorSpace||w!==D.toneMapping){M=D.outputColorSpace,w=D.toneMapping,d.defines={},Ye.getTransfer(M)===an&&(d.defines.SRGB_TRANSFER="");let R=Wb[w];R&&(d.defines[R]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=k.texture,D.setRenderTarget(m),D.render(b,g),m=null,N=!1},this.isCompositing=function(){return N},this.dispose=function(){o.dispose(),l!==null&&l.dispose(),u!==null&&u.dispose(),h.dispose(),d.dispose()}}var Rg=new xi,Gf=new er(1,1),Ig=new Xo,Pg=new tu,Lg=new tl,ug=[],hg=[],dg=new Float32Array(16),fg=new Float32Array(9),pg=new Float32Array(4);function Xa(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=ug[s];if(r===void 0&&(r=new Float32Array(s),ug[s]=r),t!==0){n.toArray(r,0);for(let o=1,l=0;o!==t;++o)l+=e,i[o].toArray(r,l)}return r}function Pn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ln(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Eh(i,t){let e=hg[t];e===void 0&&(e=new Int32Array(t),hg[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function qb(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Yb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pn(e,t))return;i.uniform2fv(this.addr,t),Ln(e,t)}}function Jb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Pn(e,t))return;i.uniform3fv(this.addr,t),Ln(e,t)}}function Zb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pn(e,t))return;i.uniform4fv(this.addr,t),Ln(e,t)}}function jb(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Pn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ln(e,t)}else{if(Pn(e,n))return;pg.set(n),i.uniformMatrix2fv(this.addr,!1,pg),Ln(e,n)}}function Kb(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Pn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ln(e,t)}else{if(Pn(e,n))return;fg.set(n),i.uniformMatrix3fv(this.addr,!1,fg),Ln(e,n)}}function Qb(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Pn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ln(e,t)}else{if(Pn(e,n))return;dg.set(n),i.uniformMatrix4fv(this.addr,!1,dg),Ln(e,n)}}function tM(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function eM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pn(e,t))return;i.uniform2iv(this.addr,t),Ln(e,t)}}function nM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pn(e,t))return;i.uniform3iv(this.addr,t),Ln(e,t)}}function iM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pn(e,t))return;i.uniform4iv(this.addr,t),Ln(e,t)}}function sM(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function rM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pn(e,t))return;i.uniform2uiv(this.addr,t),Ln(e,t)}}function aM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pn(e,t))return;i.uniform3uiv(this.addr,t),Ln(e,t)}}function oM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pn(e,t))return;i.uniform4uiv(this.addr,t),Ln(e,t)}}function lM(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Gf.compareFunction=e.isReversedDepthBuffer()?xh:_h,r=Gf):r=Rg,e.setTexture2D(t||r,s)}function cM(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Pg,s)}function uM(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Lg,s)}function hM(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Ig,s)}function dM(i){switch(i){case 5126:return qb;case 35664:return Yb;case 35665:return Jb;case 35666:return Zb;case 35674:return jb;case 35675:return Kb;case 35676:return Qb;case 5124:case 35670:return tM;case 35667:case 35671:return eM;case 35668:case 35672:return nM;case 35669:case 35673:return iM;case 5125:return sM;case 36294:return rM;case 36295:return aM;case 36296:return oM;case 35678:case 36198:case 36298:case 36306:case 35682:return lM;case 35679:case 36299:case 36307:return cM;case 35680:case 36300:case 36308:case 36293:return uM;case 36289:case 36303:case 36311:case 36292:return hM}}function fM(i,t){i.uniform1fv(this.addr,t)}function pM(i,t){let e=Xa(t,this.size,2);i.uniform2fv(this.addr,e)}function mM(i,t){let e=Xa(t,this.size,3);i.uniform3fv(this.addr,e)}function gM(i,t){let e=Xa(t,this.size,4);i.uniform4fv(this.addr,e)}function _M(i,t){let e=Xa(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function xM(i,t){let e=Xa(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function vM(i,t){let e=Xa(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function yM(i,t){i.uniform1iv(this.addr,t)}function SM(i,t){i.uniform2iv(this.addr,t)}function bM(i,t){i.uniform3iv(this.addr,t)}function MM(i,t){i.uniform4iv(this.addr,t)}function wM(i,t){i.uniform1uiv(this.addr,t)}function EM(i,t){i.uniform2uiv(this.addr,t)}function TM(i,t){i.uniform3uiv(this.addr,t)}function AM(i,t){i.uniform4uiv(this.addr,t)}function CM(i,t,e){let n=this.cache,s=t.length,r=Eh(e,s);Pn(n,r)||(i.uniform1iv(this.addr,r),Ln(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Gf:o=Rg;for(let l=0;l!==s;++l)e.setTexture2D(t[l]||o,r[l])}function RM(i,t,e){let n=this.cache,s=t.length,r=Eh(e,s);Pn(n,r)||(i.uniform1iv(this.addr,r),Ln(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Pg,r[o])}function IM(i,t,e){let n=this.cache,s=t.length,r=Eh(e,s);Pn(n,r)||(i.uniform1iv(this.addr,r),Ln(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Lg,r[o])}function PM(i,t,e){let n=this.cache,s=t.length,r=Eh(e,s);Pn(n,r)||(i.uniform1iv(this.addr,r),Ln(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Ig,r[o])}function LM(i){switch(i){case 5126:return fM;case 35664:return pM;case 35665:return mM;case 35666:return gM;case 35674:return _M;case 35675:return xM;case 35676:return vM;case 5124:case 35670:return yM;case 35667:case 35671:return SM;case 35668:case 35672:return bM;case 35669:case 35673:return MM;case 5125:return wM;case 36294:return EM;case 36295:return TM;case 36296:return AM;case 35678:case 36198:case 36298:case 36306:case 35682:return CM;case 35679:case 36299:case 36307:return RM;case 35680:case 36300:case 36308:case 36293:return IM;case 36289:case 36303:case 36311:case 36292:return PM}}var Wf=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=dM(e.type)}},Xf=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=LM(e.type)}},qf=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let l=s[r];l.setValue(t,e[l.id],n)}}},Vf=/(\w+)(\])?(\[|\.)?/g;function mg(i,t){i.seq.push(t),i.map[t.id]=t}function DM(i,t,e){let n=i.name,s=n.length;for(Vf.lastIndex=0;;){let r=Vf.exec(n),o=Vf.lastIndex,l=r[1],u=r[2]==="]",h=r[3];if(u&&(l=l|0),h===void 0||h==="["&&o+2===s){mg(e,h===void 0?new Wf(l,i,t):new Xf(l,i,t));break}else{let b=e.map[l];b===void 0&&(b=new qf(l),mg(e,b)),e=b}}}var Wa=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let l=t.getActiveUniform(e,o),u=t.getUniformLocation(e,l.name);DM(l,u,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let l=e[r],u=n[l.id];u.needsUpdate!==!1&&l.setValue(t,u.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function gg(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var NM=37297,UM=0;function OM(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let l=o+1;n.push(`${l===t?">":" "} ${l}: ${e[o]}`)}return n.join(`
`)}var _g=new Le;function FM(i){Ye._getMatrix(_g,Ye.workingColorSpace,i);let t=`mat3( ${_g.elements.map(e=>e.toFixed(4))} )`;switch(Ye.getTransfer(i)){case Ho:return[t,"LinearTransferOETF"];case an:return[t,"sRGBTransferOETF"];default:return Me("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function xg(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let l=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+OM(i.getShaderSource(t),l)}else return r}function BM(i,t){let e=FM(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var kM={[mf]:"Linear",[gf]:"Reinhard",[_f]:"Cineon",[xf]:"ACESFilmic",[yf]:"AgX",[Sf]:"Neutral",[vf]:"Custom"};function $M(i,t){let e=kM[t];return e===void 0?(Me("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var yh=new j;function zM(){Ye.getLuminanceCoefficients(yh);let i=yh.x.toFixed(4),t=yh.y.toFixed(4),e=yh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function VM(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Nl).join(`
`)}function HM(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function GM(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,l=1;r.type===i.FLOAT_MAT2&&(l=2),r.type===i.FLOAT_MAT3&&(l=3),r.type===i.FLOAT_MAT4&&(l=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:l}}return e}function Nl(i){return i!==""}function vg(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function yg(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var WM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yf(i){return i.replace(WM,qM)}var XM=new Map;function qM(i,t){let e=Be[t];if(e===void 0){let n=XM.get(t);if(n!==void 0)e=Be[n],Me('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Yf(e)}var YM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sg(i){return i.replace(YM,JM)}function JM(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function bg(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var ZM={[bl]:"SHADOWMAP_TYPE_PCF",[ka]:"SHADOWMAP_TYPE_VSM"};function jM(i){return ZM[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var KM={[or]:"ENVMAP_TYPE_CUBE",[Fr]:"ENVMAP_TYPE_CUBE",[Ml]:"ENVMAP_TYPE_CUBE_UV"};function QM(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":KM[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var t1={[Fr]:"ENVMAP_MODE_REFRACTION"};function e1(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":t1[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var n1={[Ru]:"ENVMAP_BLENDING_MULTIPLY",[F0]:"ENVMAP_BLENDING_MIX",[B0]:"ENVMAP_BLENDING_ADD"};function i1(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":n1[i.combine]||"ENVMAP_BLENDING_NONE"}function s1(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function r1(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,l=e.fragmentShader,u=jM(e),h=QM(e),d=e1(e),b=i1(e),g=s1(e),M=VM(e),w=HM(r),N=s.createProgram(),y,m,$=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(y=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w].filter(Nl).join(`
`),y.length>0&&(y+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w].filter(Nl).join(`
`),m.length>0&&(m+=`
`)):(y=[bg(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+u:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Nl).join(`
`),m=[bg(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMap?"#define "+b:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+u:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ji?"#define TONE_MAPPING":"",e.toneMapping!==ji?Be.tonemapping_pars_fragment:"",e.toneMapping!==ji?$M("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,BM("linearToOutputTexel",e.outputColorSpace),zM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Nl).join(`
`)),o=Yf(o),o=vg(o,e),o=yg(o,e),l=Yf(l),l=vg(l,e),l=yg(l,e),o=Sg(o),l=Sg(l),e.isRawShaderMaterial!==!0&&($=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,m=["#define varying in",e.glslVersion===If?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===If?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let V=$+y+o,D=$+m+l,T=gg(s,s.VERTEX_SHADER,V),k=gg(s,s.FRAGMENT_SHADER,D);s.attachShader(N,T),s.attachShader(N,k),e.index0AttributeName!==void 0?s.bindAttribLocation(N,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(N,0,"position"),s.linkProgram(N);function Y(Z){if(i.debug.checkShaderErrors){let ot=s.getProgramInfoLog(N)||"",ht=s.getShaderInfoLog(T)||"",tt=s.getShaderInfoLog(k)||"",st=ot.trim(),pt=ht.trim(),_t=tt.trim(),At=!0,xt=!0;if(s.getProgramParameter(N,s.LINK_STATUS)===!1)if(At=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,N,T,k);else{let wt=xg(s,T,"vertex"),bt=xg(s,k,"fragment");we("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(N,s.VALIDATE_STATUS)+`

Material Name: `+Z.name+`
Material Type: `+Z.type+`

Program Info Log: `+st+`
`+wt+`
`+bt)}else st!==""?Me("WebGLProgram: Program Info Log:",st):(pt===""||_t==="")&&(xt=!1);xt&&(Z.diagnostics={runnable:At,programLog:st,vertexShader:{log:pt,prefix:y},fragmentShader:{log:_t,prefix:m}})}s.deleteShader(T),s.deleteShader(k),R=new Wa(s,N),B=GM(s,N)}let R;this.getUniforms=function(){return R===void 0&&Y(this),R};let B;this.getAttributes=function(){return B===void 0&&Y(this),B};let q=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return q===!1&&(q=s.getProgramParameter(N,NM)),q},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(N),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=UM++,this.cacheKey=t,this.usedTimes=1,this.program=N,this.vertexShader=T,this.fragmentShader=k,this}var a1=0,Jf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Zf(t),e.set(t,n)),n}},Zf=class{constructor(t){this.id=a1++,this.code=t,this.usedTimes=0}};function o1(i){return i===ur||i===Rl||i===Il}function l1(i,t,e,n,s,r){let o=new Pa,l=new Jf,u=new Set,h=[],d=new Map,b=n.logarithmicDepthBuffer,g=n.precision,M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(R){return u.add(R),R===0?"uv":`uv${R}`}function N(R,B,q,Z,ot,ht){let tt=Z.fog,st=ot.geometry,pt=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?Z.environment:null,_t=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap,At=t.get(R.envMap||pt,_t),xt=At&&At.mapping===Ml?At.image.height:null,wt=M[R.type];R.precision!==null&&(g=n.getMaxPrecision(R.precision),g!==R.precision&&Me("WebGLProgram.getParameters:",R.precision,"not supported, using",g,"instead."));let bt=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,Vt=bt!==void 0?bt.length:0,ne=0;st.morphAttributes.position!==void 0&&(ne=1),st.morphAttributes.normal!==void 0&&(ne=2),st.morphAttributes.color!==void 0&&(ne=3);let je,Oe,We,vt;if(wt){let Je=hi[wt];je=Je.vertexShader,Oe=Je.fragmentShader}else{je=R.vertexShader,Oe=R.fragmentShader;let Je=l.getVertexShaderStage(R),ze=l.getFragmentShaderStage(R);l.update(R,Je,ze),We=Je.id,vt=ze.id}let yt=i.getRenderTarget(),Lt=i.state.buffers.depth.getReversed(),de=ot.isInstancedMesh===!0,Kt=ot.isBatchedMesh===!0,ge=!!R.map,ee=!!R.matcap,rt=!!At,Rt=!!R.aoMap,H=!!R.lightMap,Pt=!!R.bumpMap&&R.wireframe===!1,$t=!!R.normalMap,ce=!!R.displacementMap,pe=!!R.emissiveMap,Se=!!R.metalnessMap,Ae=!!R.roughnessMap,X=R.anisotropy>0,Qe=R.clearcoat>0,Fe=R.dispersion>0,F=R.retroreflectivity>0,E=R.iridescence>0,at=R.sheen>0,lt=R.transmission>0,mt=X&&!!R.anisotropyMap,Nt=Qe&&!!R.clearcoatMap,Ht=Qe&&!!R.clearcoatNormalMap,ft=Qe&&!!R.clearcoatRoughnessMap,Mt=E&&!!R.iridescenceMap,kt=E&&!!R.iridescenceThicknessMap,Dt=at&&!!R.sheenColorMap,Zt=at&&!!R.sheenRoughnessMap,Yt=!!R.specularMap,ue=!!R.specularColorMap,xe=!!R.specularIntensityMap,Te=lt&&!!R.transmissionMap,et=lt&&!!R.thicknessMap,Gt=!!R.gradientMap,St=!!R.alphaMap,Jt=R.alphaTest>0,Qt=!!R.alphaHash,Tt=!!R.extensions,he=ji;R.toneMapped&&(yt===null||yt.isXRRenderTarget===!0)&&(he=i.toneMapping);let le={shaderID:wt,shaderType:R.type,shaderName:R.name,vertexShader:je,fragmentShader:Oe,defines:R.defines,customVertexShaderID:We,customFragmentShaderID:vt,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:g,batching:Kt,batchingColor:Kt&&ot._colorsTexture!==null,instancing:de,instancingColor:de&&ot.instanceColor!==null,instancingMorph:de&&ot.morphTexture!==null,outputColorSpace:yt===null?i.outputColorSpace:yt.isXRRenderTarget===!0?yt.texture.colorSpace:Ye.workingColorSpace,alphaToCoverage:!!R.alphaToCoverage,map:ge,matcap:ee,envMap:rt,envMapMode:rt&&At.mapping,envMapCubeUVHeight:xt,aoMap:Rt,lightMap:H,bumpMap:Pt,normalMap:$t,displacementMap:ce,emissiveMap:pe,normalMapObjectSpace:$t&&R.normalMapType===z0,normalMapTangentSpace:$t&&R.normalMapType===gh,packedNormalMap:$t&&R.normalMapType===gh&&o1(R.normalMap.format),metalnessMap:Se,roughnessMap:Ae,anisotropy:X,anisotropyMap:mt,clearcoat:Qe,clearcoatMap:Nt,clearcoatNormalMap:Ht,clearcoatRoughnessMap:ft,dispersion:Fe,retroreflection:F,iridescence:E,iridescenceMap:Mt,iridescenceThicknessMap:kt,sheen:at,sheenColorMap:Dt,sheenRoughnessMap:Zt,specularMap:Yt,specularColorMap:ue,specularIntensityMap:xe,transmission:lt,transmissionMap:Te,thicknessMap:et,gradientMap:Gt,opaque:R.transparent===!1&&R.blending===$a&&R.alphaToCoverage===!1,alphaMap:St,alphaTest:Jt,alphaHash:Qt,combine:R.combine,mapUv:ge&&w(R.map.channel),aoMapUv:Rt&&w(R.aoMap.channel),lightMapUv:H&&w(R.lightMap.channel),bumpMapUv:Pt&&w(R.bumpMap.channel),normalMapUv:$t&&w(R.normalMap.channel),displacementMapUv:ce&&w(R.displacementMap.channel),emissiveMapUv:pe&&w(R.emissiveMap.channel),metalnessMapUv:Se&&w(R.metalnessMap.channel),roughnessMapUv:Ae&&w(R.roughnessMap.channel),anisotropyMapUv:mt&&w(R.anisotropyMap.channel),clearcoatMapUv:Nt&&w(R.clearcoatMap.channel),clearcoatNormalMapUv:Ht&&w(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ft&&w(R.clearcoatRoughnessMap.channel),iridescenceMapUv:Mt&&w(R.iridescenceMap.channel),iridescenceThicknessMapUv:kt&&w(R.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&w(R.sheenColorMap.channel),sheenRoughnessMapUv:Zt&&w(R.sheenRoughnessMap.channel),specularMapUv:Yt&&w(R.specularMap.channel),specularColorMapUv:ue&&w(R.specularColorMap.channel),specularIntensityMapUv:xe&&w(R.specularIntensityMap.channel),transmissionMapUv:Te&&w(R.transmissionMap.channel),thicknessMapUv:et&&w(R.thicknessMap.channel),alphaMapUv:St&&w(R.alphaMap.channel),vertexTangents:!!st.attributes.tangent&&($t||X),vertexNormals:!!st.attributes.normal,vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,pointsUvs:ot.isPoints===!0&&!!st.attributes.uv&&(ge||St),fog:!!tt,useFog:R.fog===!0,fogExp2:!!tt&&tt.isFogExp2,flatShading:R.wireframe===!1&&(R.flatShading===!0||st.attributes.normal===void 0&&$t===!1&&(R.isMeshLambertMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isMeshPhysicalMaterial)),sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:b,reversedDepthBuffer:Lt,skinning:ot.isSkinnedMesh===!0,hasPositionAttribute:st.attributes.position!==void 0,morphTargets:st.morphAttributes.position!==void 0,morphNormals:st.morphAttributes.normal!==void 0,morphColors:st.morphAttributes.color!==void 0,morphTargetsCount:Vt,morphTextureStride:ne,numSunLights:B.sun.length,numDirLights:B.directional.length,numPointLights:B.point.length,numSpotLights:B.spot.length,numSpotLightMaps:B.spotLightMap.length,numRectAreaLights:B.rectArea.length,numHemiLights:B.hemi.length,numSunLightShadows:B.sunShadowMap.length,numDirLightShadows:B.directionalShadowMap.length,numPointLightShadows:B.pointShadowMap.length,numSpotLightShadows:B.spotShadowMap.length,numSpotLightShadowsWithMaps:B.numSpotLightShadowsWithMaps,numLightProbes:B.numLightProbes,numLightProbeGrids:ht.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:R.dithering,shadowMapEnabled:i.shadowMap.enabled&&q.length>0,shadowMapType:i.shadowMap.type,toneMapping:he,decodeVideoTexture:ge&&R.map.isVideoTexture===!0&&Ye.getTransfer(R.map.colorSpace)===an,decodeVideoTextureEmissive:pe&&R.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(R.emissiveMap.colorSpace)===an,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===fs,flipSided:R.side===ui,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:Tt&&R.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Tt&&R.extensions.multiDraw===!0||Kt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return le.vertexUv1s=u.has(1),le.vertexUv2s=u.has(2),le.vertexUv3s=u.has(3),u.clear(),le}function y(R){let B=[];if(R.shaderID?B.push(R.shaderID):(B.push(R.customVertexShaderID),B.push(R.customFragmentShaderID)),R.defines!==void 0)for(let q in R.defines)B.push(q),B.push(R.defines[q]);return R.isRawShaderMaterial===!1&&(m(B,R),$(B,R),B.push(i.outputColorSpace)),B.push(R.customProgramCacheKey),B.join()}function m(R,B){R.push(B.precision),R.push(B.outputColorSpace),R.push(B.envMapMode),R.push(B.envMapCubeUVHeight),R.push(B.mapUv),R.push(B.alphaMapUv),R.push(B.lightMapUv),R.push(B.aoMapUv),R.push(B.bumpMapUv),R.push(B.normalMapUv),R.push(B.displacementMapUv),R.push(B.emissiveMapUv),R.push(B.metalnessMapUv),R.push(B.roughnessMapUv),R.push(B.anisotropyMapUv),R.push(B.clearcoatMapUv),R.push(B.clearcoatNormalMapUv),R.push(B.clearcoatRoughnessMapUv),R.push(B.iridescenceMapUv),R.push(B.iridescenceThicknessMapUv),R.push(B.sheenColorMapUv),R.push(B.sheenRoughnessMapUv),R.push(B.specularMapUv),R.push(B.specularColorMapUv),R.push(B.specularIntensityMapUv),R.push(B.transmissionMapUv),R.push(B.thicknessMapUv),R.push(B.combine),R.push(B.fogExp2),R.push(B.sizeAttenuation),R.push(B.morphTargetsCount),R.push(B.morphAttributeCount),R.push(B.numSunLights),R.push(B.numDirLights),R.push(B.numPointLights),R.push(B.numSpotLights),R.push(B.numSpotLightMaps),R.push(B.numHemiLights),R.push(B.numRectAreaLights),R.push(B.numSunLightShadows),R.push(B.numDirLightShadows),R.push(B.numPointLightShadows),R.push(B.numSpotLightShadows),R.push(B.numSpotLightShadowsWithMaps),R.push(B.numLightProbes),R.push(B.shadowMapType),R.push(B.toneMapping),R.push(B.numClippingPlanes),R.push(B.numClipIntersection),R.push(B.depthPacking)}function $(R,B){o.disableAll(),B.instancing&&o.enable(0),B.instancingColor&&o.enable(1),B.instancingMorph&&o.enable(2),B.matcap&&o.enable(3),B.envMap&&o.enable(4),B.normalMapObjectSpace&&o.enable(5),B.normalMapTangentSpace&&o.enable(6),B.clearcoat&&o.enable(7),B.iridescence&&o.enable(8),B.alphaTest&&o.enable(9),B.vertexColors&&o.enable(10),B.vertexAlphas&&o.enable(11),B.vertexUv1s&&o.enable(12),B.vertexUv2s&&o.enable(13),B.vertexUv3s&&o.enable(14),B.vertexTangents&&o.enable(15),B.anisotropy&&o.enable(16),B.alphaHash&&o.enable(17),B.batching&&o.enable(18),B.dispersion&&o.enable(19),B.retroreflection&&o.enable(24),B.batchingColor&&o.enable(20),B.gradientMap&&o.enable(21),B.packedNormalMap&&o.enable(22),B.vertexNormals&&o.enable(23),R.push(o.mask),o.disableAll(),B.fog&&o.enable(0),B.useFog&&o.enable(1),B.flatShading&&o.enable(2),B.logarithmicDepthBuffer&&o.enable(3),B.reversedDepthBuffer&&o.enable(4),B.skinning&&o.enable(5),B.morphTargets&&o.enable(6),B.morphNormals&&o.enable(7),B.morphColors&&o.enable(8),B.premultipliedAlpha&&o.enable(9),B.shadowMapEnabled&&o.enable(10),B.doubleSided&&o.enable(11),B.flipSided&&o.enable(12),B.useDepthPacking&&o.enable(13),B.dithering&&o.enable(14),B.transmission&&o.enable(15),B.sheen&&o.enable(16),B.opaque&&o.enable(17),B.pointsUvs&&o.enable(18),B.decodeVideoTexture&&o.enable(19),B.decodeVideoTextureEmissive&&o.enable(20),B.alphaToCoverage&&o.enable(21),B.numLightProbeGrids>0&&o.enable(22),B.hasPositionAttribute&&o.enable(23),R.push(o.mask)}function V(R){let B=M[R.type],q;if(B){let Z=hi[B];q=Pl.clone(Z.uniforms)}else q=R.uniforms;return q}function D(R,B){let q=d.get(B);return q!==void 0?++q.usedTimes:(q=new r1(i,B,R,s),h.push(q),d.set(B,q)),q}function T(R){if(--R.usedTimes===0){let B=h.indexOf(R);h[B]=h[h.length-1],h.pop(),d.delete(R.cacheKey),R.destroy()}}function k(R){l.remove(R)}function Y(){l.dispose()}return{getParameters:N,getProgramCacheKey:y,getUniforms:V,acquireProgram:D,releaseProgram:T,releaseShaderCache:k,programs:h,dispose:Y}}function c1(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let l=i.get(o);return l===void 0&&(l={},i.set(o,l)),l}function n(o){i.delete(o)}function s(o,l,u){i.get(o)[l]=u}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function u1(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Mg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function wg(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(g){let M=0;return g.isInstancedMesh&&(M+=2),g.isSkinnedMesh&&(M+=1),M}function l(g,M,w,N,y,m){let $=i[t];return $===void 0?($={id:g.id,object:g,geometry:M,material:w,materialVariant:o(g),groupOrder:N,renderOrder:g.renderOrder,z:y,group:m},i[t]=$):($.id=g.id,$.object=g,$.geometry=M,$.material=w,$.materialVariant=o(g),$.groupOrder=N,$.renderOrder=g.renderOrder,$.z=y,$.group=m),t++,$}function u(g,M,w,N,y,m,$){$.reversedDepth===!0&&(y=-y);let V=l(g,M,w,N,y,m);w.transmission>0?n.push(V):w.transparent===!0?s.push(V):e.push(V)}function h(g,M,w,N,y,m){let $=l(g,M,w,N,y,m);w.transmission>0?n.unshift($):w.transparent===!0?s.unshift($):e.unshift($)}function d(g,M){e.length>1&&e.sort(g||u1),n.length>1&&n.sort(M||Mg),s.length>1&&s.sort(M||Mg)}function b(){for(let g=t,M=i.length;g<M;g++){let w=i[g];if(w.id===null)break;w.id=null,w.object=null,w.geometry=null,w.material=null,w.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:u,unshift:h,finish:b,sort:d}}function h1(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new wg,i.set(n,[o])):s>=r.length?(o=new wg,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function d1(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new j,color:new ye};break;case"SpotLight":e={position:new j,direction:new j,color:new ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new j,color:new ye,distance:0,decay:0};break;case"HemisphereLight":e={direction:new j,skyColor:new ye,groundColor:new ye};break;case"RectAreaLight":e={color:new ye,position:new j,halfWidth:new j,halfHeight:new j};break}return i[t.id]=e,e}}}function f1(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var p1=0;function m1(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function g1(i){let t=new d1,e=f1(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new j);let s=new j,r=new Ze,o=new Ze;function l(h){let d=0,b=0,g=0;for(let ot=0;ot<9;ot++)n.probe[ot].set(0,0,0);let M=0,w=0,N=0,y=0,m=0,$=0,V=0,D=0,T=0,k=0,Y=0,R=0,B=0,q=0;h.sort(m1);for(let ot=0,ht=h.length;ot<ht;ot++){let tt=h[ot],st=tt.color,pt=tt.intensity,_t=tt.distance,At=null;if(tt.shadow&&tt.shadow.map&&(tt.shadow.map.texture.format===ur?At=tt.shadow.map.texture:At=tt.shadow.map.depthTexture||tt.shadow.map.texture),tt.isAmbientLight)d+=st.r*pt,b+=st.g*pt,g+=st.b*pt;else if(tt.isLightProbe){for(let xt=0;xt<9;xt++)n.probe[xt].addScaledVector(tt.sh.coefficients[xt],pt);q++}else if(tt.isSunLight){let xt=t.get(tt);if(xt.color.copy(tt.color).multiplyScalar(tt.intensity),tt.castShadow){let wt=tt.shadow,bt=e.get(tt);bt.shadowIntensity=wt.intensity,bt.shadowBias=wt.bias,bt.shadowNormalBias=wt.normalBias,bt.shadowRadius=wt.radius,bt.shadowMapSize.copy(wt.mapSize).multiply(wt.getFrameExtents()),n.sunShadow[w]=bt,n.sunShadowMap[w]=At;let Vt=wt.getViewportCount();for(let ne=0;ne<Vt;ne++)n.sunShadowMatrix[N+ne]=wt.getMatrix(ne),n.sunShadowCascade[N+ne]=wt._cascadeData[ne];N+=Vt,w++}n.sun[M]=xt,M++}else if(tt.isDirectionalLight){let xt=t.get(tt);if(xt.color.copy(tt.color).multiplyScalar(tt.intensity),tt.castShadow){let wt=tt.shadow,bt=e.get(tt);bt.shadowIntensity=wt.intensity,bt.shadowBias=wt.bias,bt.shadowNormalBias=wt.normalBias,bt.shadowRadius=wt.radius,bt.shadowMapSize=wt.mapSize,n.directionalShadow[y]=bt,n.directionalShadowMap[y]=At,n.directionalShadowMatrix[y]=tt.shadow.matrix,T++}n.directional[y]=xt,y++}else if(tt.isSpotLight){let xt=t.get(tt);xt.position.setFromMatrixPosition(tt.matrixWorld),xt.color.copy(st).multiplyScalar(pt),xt.distance=_t,xt.coneCos=Math.cos(tt.angle),xt.penumbraCos=Math.cos(tt.angle*(1-tt.penumbra)),xt.decay=tt.decay,n.spot[$]=xt;let wt=tt.shadow;if(tt.map&&(n.spotLightMap[R]=tt.map,R++,wt.updateMatrices(tt),tt.castShadow&&B++),n.spotLightMatrix[$]=wt.matrix,tt.castShadow){let bt=e.get(tt);bt.shadowIntensity=wt.intensity,bt.shadowBias=wt.bias,bt.shadowNormalBias=wt.normalBias,bt.shadowRadius=wt.radius,bt.shadowMapSize=wt.mapSize,n.spotShadow[$]=bt,n.spotShadowMap[$]=At,Y++}$++}else if(tt.isRectAreaLight){let xt=t.get(tt);xt.color.copy(st).multiplyScalar(pt),xt.halfWidth.set(tt.width*.5,0,0),xt.halfHeight.set(0,tt.height*.5,0),n.rectArea[V]=xt,V++}else if(tt.isPointLight){let xt=t.get(tt);if(xt.color.copy(tt.color).multiplyScalar(tt.intensity),xt.distance=tt.distance,xt.decay=tt.decay,tt.castShadow){let wt=tt.shadow,bt=e.get(tt);bt.shadowIntensity=wt.intensity,bt.shadowBias=wt.bias,bt.shadowNormalBias=wt.normalBias,bt.shadowRadius=wt.radius,bt.shadowMapSize=wt.mapSize,bt.shadowCameraNear=wt.camera.near,bt.shadowCameraFar=wt.camera.far,n.pointShadow[m]=bt,n.pointShadowMap[m]=At,n.pointShadowMatrix[m]=tt.shadow.matrix,k++}n.point[m]=xt,m++}else if(tt.isHemisphereLight){let xt=t.get(tt);xt.skyColor.copy(tt.color).multiplyScalar(pt),xt.groundColor.copy(tt.groundColor).multiplyScalar(pt),n.hemi[D]=xt,D++}}V>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=qt.LTC_FLOAT_1,n.rectAreaLTC2=qt.LTC_FLOAT_2):(n.rectAreaLTC1=qt.LTC_HALF_1,n.rectAreaLTC2=qt.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=b,n.ambient[2]=g;let Z=n.hash;(Z.sunLength!==M||Z.directionalLength!==y||Z.pointLength!==m||Z.spotLength!==$||Z.rectAreaLength!==V||Z.hemiLength!==D||Z.numSunShadows!==w||Z.numDirectionalShadows!==T||Z.numPointShadows!==k||Z.numSpotShadows!==Y||Z.numSpotMaps!==R||Z.numLightProbes!==q)&&(n.sun.length=M,n.directional.length=y,n.spot.length=$,n.rectArea.length=V,n.point.length=m,n.hemi.length=D,n.sunShadow.length=w,n.sunShadowMap.length=w,n.sunShadowMatrix.length=N,n.sunShadowCascade.length=N,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=k,n.pointShadowMap.length=k,n.pointShadowMatrix.length=k,n.spotShadow.length=Y,n.spotShadowMap.length=Y,n.spotLightMatrix.length=Y+R-B,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=B,n.numLightProbes=q,Z.sunLength=M,Z.directionalLength=y,Z.pointLength=m,Z.spotLength=$,Z.rectAreaLength=V,Z.hemiLength=D,Z.numSunShadows=w,Z.numDirectionalShadows=T,Z.numPointShadows=k,Z.numSpotShadows=Y,Z.numSpotMaps=R,Z.numLightProbes=q,n.version=p1++)}function u(h,d){let b=0,g=0,M=0,w=0,N=0,y=0,m=d.matrixWorldInverse;for(let $=0,V=h.length;$<V;$++){let D=h[$];if(D.isSunLight){let T=n.sun[b];T.direction.setFromMatrixPosition(D.matrixWorld),T.direction.transformDirection(m),b++}else if(D.isDirectionalLight){let T=n.directional[g];T.direction.setFromMatrixPosition(D.matrixWorld),s.setFromMatrixPosition(D.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),g++}else if(D.isSpotLight){let T=n.spot[w];T.position.setFromMatrixPosition(D.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(D.matrixWorld),s.setFromMatrixPosition(D.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),w++}else if(D.isRectAreaLight){let T=n.rectArea[N];T.position.setFromMatrixPosition(D.matrixWorld),T.position.applyMatrix4(m),o.identity(),r.copy(D.matrixWorld),r.premultiply(m),o.extractRotation(r),T.halfWidth.set(D.width*.5,0,0),T.halfHeight.set(0,D.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),N++}else if(D.isPointLight){let T=n.point[M];T.position.setFromMatrixPosition(D.matrixWorld),T.position.applyMatrix4(m),M++}else if(D.isHemisphereLight){let T=n.hemi[y];T.direction.setFromMatrixPosition(D.matrixWorld),T.direction.transformDirection(m),y++}}}return{setup:l,setupView:u,state:n}}function Eg(i){let t=new g1(i),e=[],n=[],s=[];function r(g){b.camera=g,e.length=0,n.length=0,s.length=0}function o(g){e.push(g)}function l(g){n.push(g)}function u(g){s.push(g)}function h(){t.setup(e)}function d(g){t.setupView(e,g)}let b={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:b,setupLights:h,setupLightsView:d,pushLight:o,pushShadow:l,pushLightProbeGrid:u}}function _1(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),l;return o===void 0?(l=new Eg(i),t.set(s,[l])):r>=o.length?(l=new Eg(i),o.push(l)):l=o[r],l}function n(){t=new WeakMap}return{get:e,dispose:n}}var x1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,v1=`uniform sampler2D shadow_pass;
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
}`,y1=[new j(1,0,0),new j(-1,0,0),new j(0,1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1)],S1=[new j(0,-1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1),new j(0,-1,0),new j(0,-1,0)],Tg=new Ze,Dl=new j,Hf=new j;function b1(i,t,e){let n=new Da,s=new Wt,r=new Wt,o=new on,l=new pu,u=new mu,h={},d=e.maxTextureSize,b={[ar]:ui,[ui]:ar,[fs]:fs},g=new kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Wt},radius:{value:4}},vertexShader:x1,fragmentShader:v1}),M=g.clone();M.defines.HORIZONTAL_PASS=1;let w=new En;w.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let N=new Bn(w,g),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bl;let m=this.type;this.render=function(k,Y,R){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||k.length===0)return;this.type===x0&&(Me("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=bl);let B=i.getRenderTarget(),q=i.getActiveCubeFace(),Z=i.getActiveMipmapLevel(),ot=i.state;ot.setBlending(ps),ot.buffers.depth.getReversed()===!0?ot.buffers.color.setClear(0,0,0,0):ot.buffers.color.setClear(1,1,1,1),ot.buffers.depth.setTest(!0),ot.setScissorTest(!1);let ht=m!==this.type;ht&&Y.traverse(function(tt){tt.material&&(Array.isArray(tt.material)?tt.material.forEach(st=>st.needsUpdate=!0):tt.material.needsUpdate=!0)});for(let tt=0,st=k.length;tt<st;tt++){let pt=k[tt],_t=pt.shadow;if(_t===void 0){Me("WebGLShadowMap:",pt,"has no shadow.");continue}if(_t.autoUpdate===!1&&_t.needsUpdate===!1)continue;s.copy(_t.mapSize);let At=_t.getFrameExtents();s.multiply(At),r.copy(_t.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/At.x),s.x=r.x*At.x,_t.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/At.y),s.y=r.y*At.y,_t.mapSize.y=r.y));let xt=i.state.buffers.depth.getReversed();if(_t.camera._reversedDepth=xt,_t.map===null||ht===!0){if(_t.map!==null&&(_t.map.depthTexture!==null&&(_t.map.depthTexture.dispose(),_t.map.depthTexture=null),_t.map.dispose()),this.type===ka){if(pt.isPointLight){Me("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}_t.map=new vi(s.x,s.y,{format:ur,type:Qi,minFilter:Hn,magFilter:Hn,generateMipmaps:!1}),_t.map.texture.name=pt.name+".shadowMap",_t.map.depthTexture=new er(s.x,s.y,Bi),_t.map.depthTexture.name=pt.name+".shadowMapDepth",_t.map.depthTexture.format=cs,_t.map.depthTexture.compareFunction=null,_t.map.depthTexture.minFilter=On,_t.map.depthTexture.magFilter=On}else pt.isPointLight?(_t.map=new bh(s.x),_t.map.depthTexture=new au(s.x,Ki)):(_t.map=new vi(s.x,s.y),_t.map.depthTexture=new er(s.x,s.y,Ki)),_t.map.depthTexture.name=pt.name+".shadowMap",_t.map.depthTexture.format=cs,this.type===bl?(_t.map.depthTexture.compareFunction=xt?xh:_h,_t.map.depthTexture.minFilter=Hn,_t.map.depthTexture.magFilter=Hn):(_t.map.depthTexture.compareFunction=null,_t.map.depthTexture.minFilter=On,_t.map.depthTexture.magFilter=On);_t.camera.updateProjectionMatrix()}_t.map.isWebGLCubeRenderTarget!==!0&&(_t.map.width!==s.x||_t.map.height!==s.y)&&_t.map.setSize(s.x,s.y);let wt=_t.map.isWebGLCubeRenderTarget?6:_t.getViewportCount();pt.isPointLight!==!0&&_t.updateMatrices(pt,R);for(let bt=0;bt<wt;bt++){let Vt=_t.getCamera(bt);if(pt.isPointLight){let ne=_t.camera,je=_t.matrix,Oe=pt.distance||ne.far;Oe!==ne.far&&(ne.far=Oe,ne.updateProjectionMatrix()),Dl.setFromMatrixPosition(pt.matrixWorld),ne.position.copy(Dl),Hf.copy(ne.position),Hf.add(y1[bt]),ne.up.copy(S1[bt]),ne.lookAt(Hf),ne.updateMatrixWorld(),je.makeTranslation(-Dl.x,-Dl.y,-Dl.z),Tg.multiplyMatrices(ne.projectionMatrix,ne.matrixWorldInverse),_t._frustum.setFromProjectionMatrix(Tg,ne.coordinateSystem,ne.reversedDepth)}if(_t.map.isWebGLCubeRenderTarget)i.setRenderTarget(_t.map,bt),i.clear();else{bt===0&&(i.setRenderTarget(_t.map),i.clear());let ne=_t.getViewport(bt);o.set(r.x*ne.x,r.y*ne.y,r.x*ne.z,r.y*ne.w),ot.viewport(o)}n=_t.getFrustum(bt),D(Y,R,Vt,pt,this.type)}_t.isPointLightShadow!==!0&&this.type===ka&&$(_t,R),_t.needsUpdate=!1}m=this.type,y.needsUpdate=!1,i.setRenderTarget(B,q,Z)};function $(k,Y){let R=t.update(N);g.defines.VSM_SAMPLES!==k.blurSamples&&(g.defines.VSM_SAMPLES=k.blurSamples,M.defines.VSM_SAMPLES=k.blurSamples,g.needsUpdate=!0,M.needsUpdate=!0),k.mapPass===null?k.mapPass=new vi(s.x,s.y,{format:ur,type:Qi}):(k.mapPass.width!==k.map.width||k.mapPass.height!==k.map.height)&&k.mapPass.setSize(k.map.width,k.map.height),g.uniforms.shadow_pass.value=k.map.depthTexture,g.uniforms.resolution.value.set(k.map.width,k.map.height),g.uniforms.radius.value=k.radius,i.setRenderTarget(k.mapPass),i.clear(),i.renderBufferDirect(Y,null,R,g,N,null),M.uniforms.shadow_pass.value=k.mapPass.texture,M.uniforms.resolution.value.set(k.map.width,k.map.height),M.uniforms.radius.value=k.radius,i.setRenderTarget(k.map),i.clear(),i.renderBufferDirect(Y,null,R,M,N,null)}function V(k,Y,R,B){let q=null,Z=R.isPointLight===!0?k.customDistanceMaterial:k.customDepthMaterial;if(Z!==void 0)q=Z;else if(q=R.isPointLight===!0?u:l,i.localClippingEnabled&&Y.clipShadows===!0&&Array.isArray(Y.clippingPlanes)&&Y.clippingPlanes.length!==0||Y.displacementMap&&Y.displacementScale!==0||Y.alphaMap&&Y.alphaTest>0||Y.map&&Y.alphaTest>0||Y.alphaToCoverage===!0){let ot=q.uuid,ht=Y.uuid,tt=h[ot];tt===void 0&&(tt={},h[ot]=tt);let st=tt[ht];st===void 0&&(st=q.clone(),tt[ht]=st,Y.addEventListener("dispose",T)),q=st}if(q.visible=Y.visible,q.wireframe=Y.wireframe,B===ka?q.side=Y.shadowSide!==null?Y.shadowSide:Y.side:q.side=Y.shadowSide!==null?Y.shadowSide:b[Y.side],q.alphaMap=Y.alphaMap,q.alphaTest=Y.alphaToCoverage===!0?.5:Y.alphaTest,q.map=Y.map,q.clipShadows=Y.clipShadows,q.clippingPlanes=Y.clippingPlanes,q.clipIntersection=Y.clipIntersection,q.displacementMap=Y.displacementMap,q.displacementScale=Y.displacementScale,q.displacementBias=Y.displacementBias,q.wireframeLinewidth=Y.wireframeLinewidth,q.linewidth=Y.linewidth,R.isPointLight===!0&&q.isMeshDistanceMaterial===!0){let ot=i.properties.get(q);ot.light=R}return q}function D(k,Y,R,B,q){if(k.visible===!1)return;if(k.layers.test(Y.layers)&&(k.isMesh||k.isLine||k.isPoints)&&(k.castShadow||k.receiveShadow&&q===ka)&&(!k.frustumCulled||k.intersectsFrustum(n))){k.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,k.matrixWorld);let ht=t.update(k),tt=k.material;if(Array.isArray(tt)){let st=ht.groups;for(let pt=0,_t=st.length;pt<_t;pt++){let At=st[pt],xt=tt[At.materialIndex];if(xt&&xt.visible){let wt=V(k,xt,B,q);k.onBeforeShadow(i,k,Y,R,ht,wt,At),i.renderBufferDirect(R,null,ht,wt,k,At),k.onAfterShadow(i,k,Y,R,ht,wt,At)}}}else if(tt.visible){let st=V(k,tt,B,q);k.onBeforeShadow(i,k,Y,R,ht,st,null),i.renderBufferDirect(R,null,ht,st,k,null),k.onAfterShadow(i,k,Y,R,ht,st,null)}}let ot=k.children;for(let ht=0,tt=ot.length;ht<tt;ht++)D(ot[ht],Y,R,B,q)}function T(k){k.target.removeEventListener("dispose",T);for(let R in h){let B=h[R],q=k.target.uuid;q in B&&(B[q].dispose(),delete B[q])}}}function M1(i,t){function e(){let et=!1,Gt=new on,St=null,Jt=new on(0,0,0,0);return{setMask:function(Qt){St!==Qt&&!et&&(i.colorMask(Qt,Qt,Qt,Qt),St=Qt)},setLocked:function(Qt){et=Qt},setClear:function(Qt,Tt,he,le,Je){Je===!0&&(Qt*=le,Tt*=le,he*=le),Gt.set(Qt,Tt,he,le),Jt.equals(Gt)===!1&&(i.clearColor(Qt,Tt,he,le),Jt.copy(Gt))},reset:function(){et=!1,St=null,Jt.set(-1,0,0,0)}}}function n(){let et=!1,Gt=!1,St=null,Jt=null,Qt=null;return{setReversed:function(Tt){if(Gt!==Tt){let he=t.get("EXT_clip_control");Tt?he.clipControlEXT(he.LOWER_LEFT_EXT,he.ZERO_TO_ONE_EXT):he.clipControlEXT(he.LOWER_LEFT_EXT,he.NEGATIVE_ONE_TO_ONE_EXT),Gt=Tt;let le=Qt;Qt=null,this.setClear(le)}},getReversed:function(){return Gt},setTest:function(Tt){Tt?yt(i.DEPTH_TEST):Lt(i.DEPTH_TEST)},setMask:function(Tt){St!==Tt&&!et&&(i.depthMask(Tt),St=Tt)},setFunc:function(Tt){if(Gt&&(Tt=K0[Tt]),Jt!==Tt){switch(Tt){case Vc:i.depthFunc(i.NEVER);break;case Hc:i.depthFunc(i.ALWAYS);break;case Gc:i.depthFunc(i.LESS);break;case Ta:i.depthFunc(i.LEQUAL);break;case Wc:i.depthFunc(i.EQUAL);break;case Xc:i.depthFunc(i.GEQUAL);break;case qc:i.depthFunc(i.GREATER);break;case Yc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Jt=Tt}},setLocked:function(Tt){et=Tt},setClear:function(Tt){Qt!==Tt&&(Qt=Tt,Gt&&(Tt=1-Tt),i.clearDepth(Tt))},reset:function(){et=!1,St=null,Jt=null,Qt=null,Gt=!1}}}function s(){let et=!1,Gt=null,St=null,Jt=null,Qt=null,Tt=null,he=null,le=null,Je=null;return{setTest:function(ze){et||(ze?yt(i.STENCIL_TEST):Lt(i.STENCIL_TEST))},setMask:function(ze){Gt!==ze&&!et&&(i.stencilMask(ze),Gt=ze)},setFunc:function(ze,qn,fi){(St!==ze||Jt!==qn||Qt!==fi)&&(i.stencilFunc(ze,qn,fi),St=ze,Jt=qn,Qt=fi)},setOp:function(ze,qn,fi){(Tt!==ze||he!==qn||le!==fi)&&(i.stencilOp(ze,qn,fi),Tt=ze,he=qn,le=fi)},setLocked:function(ze){et=ze},setClear:function(ze){Je!==ze&&(i.clearStencil(ze),Je=ze)},reset:function(){et=!1,Gt=null,St=null,Jt=null,Qt=null,Tt=null,he=null,le=null,Je=null}}}let r=new e,o=new n,l=new s,u=new WeakMap,h=new WeakMap,d={},b={},g={},M=new WeakMap,w=[],N=null,y=!1,m=null,$=null,V=null,D=null,T=null,k=null,Y=null,R=new ye(0,0,0),B=0,q=!1,Z=null,ot=null,ht=null,tt=null,st=null,pt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),_t=!1,At=0,xt=i.getParameter(i.VERSION);xt.indexOf("WebGL")!==-1?(At=parseFloat(/^WebGL (\d)/.exec(xt)[1]),_t=At>=1):xt.indexOf("OpenGL ES")!==-1&&(At=parseFloat(/^OpenGL ES (\d)/.exec(xt)[1]),_t=At>=2);let wt=null,bt={},Vt=i.getParameter(i.SCISSOR_BOX),ne=i.getParameter(i.VIEWPORT),je=new on().fromArray(Vt),Oe=new on().fromArray(ne);function We(et,Gt,St,Jt){let Qt=new Uint8Array(4),Tt=i.createTexture();i.bindTexture(et,Tt),i.texParameteri(et,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(et,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let he=0;he<St;he++)et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?i.texImage3D(Gt,0,i.RGBA,1,1,Jt,0,i.RGBA,i.UNSIGNED_BYTE,Qt):i.texImage2D(Gt+he,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Qt);return Tt}let vt={};vt[i.TEXTURE_2D]=We(i.TEXTURE_2D,i.TEXTURE_2D,1),vt[i.TEXTURE_CUBE_MAP]=We(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),vt[i.TEXTURE_2D_ARRAY]=We(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),vt[i.TEXTURE_3D]=We(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),l.setClear(0),yt(i.DEPTH_TEST),o.setFunc(Ta),Pt(!1),$t(cf),yt(i.CULL_FACE),Rt(ps);function yt(et){d[et]!==!0&&(i.enable(et),d[et]=!0)}function Lt(et){d[et]!==!1&&(i.disable(et),d[et]=!1)}function de(et,Gt){return g[et]!==Gt?(i.bindFramebuffer(et,Gt),g[et]=Gt,et===i.DRAW_FRAMEBUFFER&&(g[i.FRAMEBUFFER]=Gt),et===i.FRAMEBUFFER&&(g[i.DRAW_FRAMEBUFFER]=Gt),!0):!1}function Kt(et,Gt){let St=w,Jt=!1;if(et){St=M.get(Gt),St===void 0&&(St=[],M.set(Gt,St));let Qt=et.textures;if(St.length!==Qt.length||St[0]!==i.COLOR_ATTACHMENT0){for(let Tt=0,he=Qt.length;Tt<he;Tt++)St[Tt]=i.COLOR_ATTACHMENT0+Tt;St.length=Qt.length,Jt=!0}}else St[0]!==i.BACK&&(St[0]=i.BACK,Jt=!0);Jt&&i.drawBuffers(St)}function ge(et){return N!==et?(i.useProgram(et),N=et,!0):!1}let ee={[Or]:i.FUNC_ADD,[y0]:i.FUNC_SUBTRACT,[S0]:i.FUNC_REVERSE_SUBTRACT};ee[b0]=i.MIN,ee[M0]=i.MAX;let rt={[w0]:i.ZERO,[E0]:i.ONE,[T0]:i.SRC_COLOR,[ff]:i.SRC_ALPHA,[L0]:i.SRC_ALPHA_SATURATE,[I0]:i.DST_COLOR,[C0]:i.DST_ALPHA,[A0]:i.ONE_MINUS_SRC_COLOR,[pf]:i.ONE_MINUS_SRC_ALPHA,[P0]:i.ONE_MINUS_DST_COLOR,[R0]:i.ONE_MINUS_DST_ALPHA,[D0]:i.CONSTANT_COLOR,[N0]:i.ONE_MINUS_CONSTANT_COLOR,[U0]:i.CONSTANT_ALPHA,[O0]:i.ONE_MINUS_CONSTANT_ALPHA};function Rt(et,Gt,St,Jt,Qt,Tt,he,le,Je,ze){if(et===ps){y===!0&&(Lt(i.BLEND),y=!1);return}if(y===!1&&(yt(i.BLEND),y=!0),et!==v0){if(et!==m||ze!==q){if(($!==Or||T!==Or)&&(i.blendEquation(i.FUNC_ADD),$=Or,T=Or),ze)switch(et){case $a:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case uf:i.blendFunc(i.ONE,i.ONE);break;case hf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case df:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:we("WebGLState: Invalid blending: ",et);break}else switch(et){case $a:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case uf:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case hf:we("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case df:we("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:we("WebGLState: Invalid blending: ",et);break}V=null,D=null,k=null,Y=null,R.set(0,0,0),B=0,m=et,q=ze}return}Qt=Qt||Gt,Tt=Tt||St,he=he||Jt,(Gt!==$||Qt!==T)&&(i.blendEquationSeparate(ee[Gt],ee[Qt]),$=Gt,T=Qt),(St!==V||Jt!==D||Tt!==k||he!==Y)&&(i.blendFuncSeparate(rt[St],rt[Jt],rt[Tt],rt[he]),V=St,D=Jt,k=Tt,Y=he),(le.equals(R)===!1||Je!==B)&&(i.blendColor(le.r,le.g,le.b,Je),R.copy(le),B=Je),m=et,q=!1}function H(et,Gt){et.side===fs?Lt(i.CULL_FACE):yt(i.CULL_FACE);let St=et.side===ui;Gt&&(St=!St),Pt(St),et.blending===$a&&et.transparent===!1?Rt(ps):Rt(et.blending,et.blendEquation,et.blendSrc,et.blendDst,et.blendEquationAlpha,et.blendSrcAlpha,et.blendDstAlpha,et.blendColor,et.blendAlpha,et.premultipliedAlpha),o.setFunc(et.depthFunc),o.setTest(et.depthTest),o.setMask(et.depthWrite),r.setMask(et.colorWrite);let Jt=et.stencilWrite;l.setTest(Jt),Jt&&(l.setMask(et.stencilWriteMask),l.setFunc(et.stencilFunc,et.stencilRef,et.stencilFuncMask),l.setOp(et.stencilFail,et.stencilZFail,et.stencilZPass)),pe(et.polygonOffset,et.polygonOffsetFactor,et.polygonOffsetUnits),et.alphaToCoverage===!0?yt(i.SAMPLE_ALPHA_TO_COVERAGE):Lt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Pt(et){Z!==et&&(et?i.frontFace(i.CW):i.frontFace(i.CCW),Z=et)}function $t(et){et!==g0?(yt(i.CULL_FACE),et!==ot&&(et===cf?i.cullFace(i.BACK):et===_0?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Lt(i.CULL_FACE),ot=et}function ce(et){et!==ht&&(_t&&i.lineWidth(et),ht=et)}function pe(et,Gt,St){et?(yt(i.POLYGON_OFFSET_FILL),(tt!==Gt||st!==St)&&(tt=Gt,st=St,o.getReversed()&&(Gt=-Gt),i.polygonOffset(Gt,St))):Lt(i.POLYGON_OFFSET_FILL)}function Se(et){et?yt(i.SCISSOR_TEST):Lt(i.SCISSOR_TEST)}function Ae(et){et===void 0&&(et=i.TEXTURE0+pt-1),wt!==et&&(i.activeTexture(et),wt=et)}function X(et,Gt,St){St===void 0&&(wt===null?St=i.TEXTURE0+pt-1:St=wt);let Jt=bt[St];Jt===void 0&&(Jt={type:void 0,texture:void 0},bt[St]=Jt),(Jt.type!==et||Jt.texture!==Gt)&&(wt!==St&&(i.activeTexture(St),wt=St),i.bindTexture(et,Gt||vt[et]),Jt.type=et,Jt.texture=Gt)}function Qe(){let et=bt[wt];et!==void 0&&et.type!==void 0&&(i.bindTexture(et.type,null),et.type=void 0,et.texture=void 0)}function Fe(){try{i.compressedTexImage2D(...arguments)}catch(et){we("WebGLState:",et)}}function F(){try{i.compressedTexImage3D(...arguments)}catch(et){we("WebGLState:",et)}}function E(){try{i.texSubImage2D(...arguments)}catch(et){we("WebGLState:",et)}}function at(){try{i.texSubImage3D(...arguments)}catch(et){we("WebGLState:",et)}}function lt(){try{i.compressedTexSubImage2D(...arguments)}catch(et){we("WebGLState:",et)}}function mt(){try{i.compressedTexSubImage3D(...arguments)}catch(et){we("WebGLState:",et)}}function Nt(){try{i.texStorage2D(...arguments)}catch(et){we("WebGLState:",et)}}function Ht(){try{i.texStorage3D(...arguments)}catch(et){we("WebGLState:",et)}}function ft(){try{i.texImage2D(...arguments)}catch(et){we("WebGLState:",et)}}function Mt(){try{i.texImage3D(...arguments)}catch(et){we("WebGLState:",et)}}function kt(et){return b[et]!==void 0?b[et]:i.getParameter(et)}function Dt(et,Gt){b[et]!==Gt&&(i.pixelStorei(et,Gt),b[et]=Gt)}function Zt(et){je.equals(et)===!1&&(i.scissor(et.x,et.y,et.z,et.w),je.copy(et))}function Yt(et){Oe.equals(et)===!1&&(i.viewport(et.x,et.y,et.z,et.w),Oe.copy(et))}function ue(et,Gt){let St=h.get(Gt);St===void 0&&(St=new WeakMap,h.set(Gt,St));let Jt=St.get(et);Jt===void 0&&(Jt=i.getUniformBlockIndex(Gt,et.name),St.set(et,Jt))}function xe(et,Gt){let Jt=h.get(Gt).get(et);u.get(Gt)!==Jt&&(i.uniformBlockBinding(Gt,Jt,et.__bindingPointIndex),u.set(Gt,Jt))}function Te(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),d={},b={},wt=null,bt={},g={},M=new WeakMap,w=[],N=null,y=!1,m=null,$=null,V=null,D=null,T=null,k=null,Y=null,R=new ye(0,0,0),B=0,q=!1,Z=null,ot=null,ht=null,tt=null,st=null,je.set(0,0,i.canvas.width,i.canvas.height),Oe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),l.reset()}return{buffers:{color:r,depth:o,stencil:l},enable:yt,disable:Lt,bindFramebuffer:de,drawBuffers:Kt,useProgram:ge,setBlending:Rt,setMaterial:H,setFlipSided:Pt,setCullFace:$t,setLineWidth:ce,setPolygonOffset:pe,setScissorTest:Se,activeTexture:Ae,bindTexture:X,unbindTexture:Qe,compressedTexImage2D:Fe,compressedTexImage3D:F,texImage2D:ft,texImage3D:Mt,pixelStorei:Dt,getParameter:kt,updateUBOMapping:ue,uniformBlockBinding:xe,texStorage2D:Nt,texStorage3D:Ht,texSubImage2D:E,texSubImage3D:at,compressedTexSubImage2D:lt,compressedTexSubImage3D:mt,scissor:Zt,viewport:Yt,reset:Te}}function w1(i,t,e,n,s,r,o){let l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Wt,d=new WeakMap,b=new Set,g,M=new WeakMap,w=!1;try{w=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function N(F,E){return w?new OffscreenCanvas(F,E):Go("canvas")}function y(F,E,at){let lt=1,mt=Fe(F);if((mt.width>at||mt.height>at)&&(lt=at/Math.max(mt.width,mt.height)),lt<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){let Nt=Math.floor(lt*mt.width),Ht=Math.floor(lt*mt.height);g===void 0&&(g=N(Nt,Ht));let ft=E?N(Nt,Ht):g;return ft.width=Nt,ft.height=Ht,ft.getContext("2d").drawImage(F,0,0,Nt,Ht),Me("WebGLRenderer: Texture has been resized from ("+mt.width+"x"+mt.height+") to ("+Nt+"x"+Ht+")."),ft}else return"data"in F&&Me("WebGLRenderer: Image in DataTexture is too big ("+mt.width+"x"+mt.height+")."),F;return F}function m(F){return F.generateMipmaps}function $(F){i.generateMipmap(F)}function V(F){return F.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?i.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function D(F,E,at,lt,mt,Nt=!1){if(F!==null){if(i[F]!==void 0)return i[F];Me("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let Ht;lt&&(Ht=t.get("EXT_texture_norm16"),Ht||Me("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ft=E;if(E===i.RED&&(at===i.FLOAT&&(ft=i.R32F),at===i.HALF_FLOAT&&(ft=i.R16F),at===i.UNSIGNED_BYTE&&(ft=i.R8),at===i.UNSIGNED_SHORT&&Ht&&(ft=Ht.R16_EXT),at===i.SHORT&&Ht&&(ft=Ht.R16_SNORM_EXT)),E===i.RED_INTEGER&&(at===i.UNSIGNED_BYTE&&(ft=i.R8UI),at===i.UNSIGNED_SHORT&&(ft=i.R16UI),at===i.UNSIGNED_INT&&(ft=i.R32UI),at===i.BYTE&&(ft=i.R8I),at===i.SHORT&&(ft=i.R16I),at===i.INT&&(ft=i.R32I)),E===i.RG&&(at===i.FLOAT&&(ft=i.RG32F),at===i.HALF_FLOAT&&(ft=i.RG16F),at===i.UNSIGNED_BYTE&&(ft=i.RG8),at===i.UNSIGNED_SHORT&&Ht&&(ft=Ht.RG16_EXT),at===i.SHORT&&Ht&&(ft=Ht.RG16_SNORM_EXT)),E===i.RG_INTEGER&&(at===i.UNSIGNED_BYTE&&(ft=i.RG8UI),at===i.UNSIGNED_SHORT&&(ft=i.RG16UI),at===i.UNSIGNED_INT&&(ft=i.RG32UI),at===i.BYTE&&(ft=i.RG8I),at===i.SHORT&&(ft=i.RG16I),at===i.INT&&(ft=i.RG32I)),E===i.RGB_INTEGER&&(at===i.UNSIGNED_BYTE&&(ft=i.RGB8UI),at===i.UNSIGNED_SHORT&&(ft=i.RGB16UI),at===i.UNSIGNED_INT&&(ft=i.RGB32UI),at===i.BYTE&&(ft=i.RGB8I),at===i.SHORT&&(ft=i.RGB16I),at===i.INT&&(ft=i.RGB32I)),E===i.RGBA_INTEGER&&(at===i.UNSIGNED_BYTE&&(ft=i.RGBA8UI),at===i.UNSIGNED_SHORT&&(ft=i.RGBA16UI),at===i.UNSIGNED_INT&&(ft=i.RGBA32UI),at===i.BYTE&&(ft=i.RGBA8I),at===i.SHORT&&(ft=i.RGBA16I),at===i.INT&&(ft=i.RGBA32I)),E===i.RGB&&(at===i.UNSIGNED_SHORT&&Ht&&(ft=Ht.RGB16_EXT),at===i.SHORT&&Ht&&(ft=Ht.RGB16_SNORM_EXT),at===i.UNSIGNED_INT_5_9_9_9_REV&&(ft=i.RGB9_E5),at===i.UNSIGNED_INT_10F_11F_11F_REV&&(ft=i.R11F_G11F_B10F)),E===i.RGBA){let Mt=Nt?Ho:Ye.getTransfer(mt);at===i.FLOAT&&(ft=i.RGBA32F),at===i.HALF_FLOAT&&(ft=i.RGBA16F),at===i.UNSIGNED_BYTE&&(ft=Mt===an?i.SRGB8_ALPHA8:i.RGBA8),at===i.UNSIGNED_SHORT&&Ht&&(ft=Ht.RGBA16_EXT),at===i.SHORT&&Ht&&(ft=Ht.RGBA16_SNORM_EXT),at===i.UNSIGNED_SHORT_4_4_4_4&&(ft=i.RGBA4),at===i.UNSIGNED_SHORT_5_5_5_1&&(ft=i.RGB5_A1)}return(ft===i.R16F||ft===i.R32F||ft===i.RG16F||ft===i.RG32F||ft===i.RGBA16F||ft===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ft}function T(F,E){let at;return F?E===null||E===Ki||E===Va?at=i.DEPTH24_STENCIL8:E===Bi?at=i.DEPTH32F_STENCIL8:E===za&&(at=i.DEPTH24_STENCIL8,Me("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ki||E===Va?at=i.DEPTH_COMPONENT24:E===Bi?at=i.DEPTH_COMPONENT32F:E===za&&(at=i.DEPTH_COMPONENT16),at}function k(F,E){return m(F)===!0||F.isFramebufferTexture&&F.minFilter!==On&&F.minFilter!==Hn?Math.log2(Math.max(E.width,E.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?E.mipmaps.length:1}function Y(F){let E=F.target;E.removeEventListener("dispose",Y),B(E),E.isVideoTexture&&d.delete(E),E.isHTMLTexture&&b.delete(E)}function R(F){let E=F.target;E.removeEventListener("dispose",R),Z(E)}function B(F){let E=n.get(F);if(E.__webglInit===void 0)return;let at=F.source,lt=M.get(at);if(lt){let mt=lt[E.__cacheKey];mt.usedTimes--,mt.usedTimes===0&&q(F),Object.keys(lt).length===0&&M.delete(at)}n.remove(F)}function q(F){let E=n.get(F);i.deleteTexture(E.__webglTexture);let at=F.source,lt=M.get(at);delete lt[E.__cacheKey],o.memory.textures--}function Z(F){let E=n.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),n.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let lt=0;lt<6;lt++){if(Array.isArray(E.__webglFramebuffer[lt]))for(let mt=0;mt<E.__webglFramebuffer[lt].length;mt++)i.deleteFramebuffer(E.__webglFramebuffer[lt][mt]);else i.deleteFramebuffer(E.__webglFramebuffer[lt]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[lt])}else{if(Array.isArray(E.__webglFramebuffer))for(let lt=0;lt<E.__webglFramebuffer.length;lt++)i.deleteFramebuffer(E.__webglFramebuffer[lt]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let lt=0;lt<E.__webglColorRenderbuffer.length;lt++)E.__webglColorRenderbuffer[lt]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[lt]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let at=F.textures;for(let lt=0,mt=at.length;lt<mt;lt++){let Nt=n.get(at[lt]);Nt.__webglTexture&&(i.deleteTexture(Nt.__webglTexture),o.memory.textures--),n.remove(at[lt])}n.remove(F)}let ot=0;function ht(){ot=0}function tt(){return ot}function st(F){ot=F}function pt(){let F=ot;return F>=s.maxTextures&&Me("WebGLTextures: Trying to use "+(F+1)+" texture units while this GPU supports only "+s.maxTextures),ot+=1,F}function _t(F){let E=[];return E.push(F.wrapS),E.push(F.wrapT),E.push(F.wrapR||0),E.push(F.magFilter),E.push(F.minFilter),E.push(F.anisotropy),E.push(F.internalFormat),E.push(F.format),E.push(F.type),E.push(F.generateMipmaps),E.push(F.premultiplyAlpha),E.push(F.flipY),E.push(F.unpackAlignment),E.push(F.colorSpace),E.join()}function At(F,E){let at=n.get(F);if(F.isVideoTexture&&X(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&at.__version!==F.version){let lt=F.image;if(lt===null)Me("WebGLRenderer: Texture marked for update but no image data found.");else if(lt.complete===!1)Me("WebGLRenderer: Texture marked for update but image is incomplete");else{Lt(at,F,E);return}}else F.isExternalTexture&&(at.__webglTexture=F.sourceTexture?F.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,at.__webglTexture,i.TEXTURE0+E)}function xt(F,E){let at=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&at.__version!==F.version){Lt(at,F,E);return}else F.isExternalTexture&&(at.__webglTexture=F.sourceTexture?F.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,at.__webglTexture,i.TEXTURE0+E)}function wt(F,E){let at=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&at.__version!==F.version){Lt(at,F,E);return}e.bindTexture(i.TEXTURE_3D,at.__webglTexture,i.TEXTURE0+E)}function bt(F,E){let at=n.get(F);if(F.isCubeDepthTexture!==!0&&F.version>0&&at.__version!==F.version){de(at,F,E);return}e.bindTexture(i.TEXTURE_CUBE_MAP,at.__webglTexture,i.TEXTURE0+E)}let Vt={[Jc]:i.REPEAT,[os]:i.CLAMP_TO_EDGE,[Zc]:i.MIRRORED_REPEAT},ne={[On]:i.NEAREST,[k0]:i.NEAREST_MIPMAP_NEAREST,[wl]:i.NEAREST_MIPMAP_LINEAR,[Hn]:i.LINEAR,[Lu]:i.LINEAR_MIPMAP_NEAREST,[lr]:i.LINEAR_MIPMAP_LINEAR},je={[H0]:i.NEVER,[Y0]:i.ALWAYS,[G0]:i.LESS,[_h]:i.LEQUAL,[W0]:i.EQUAL,[xh]:i.GEQUAL,[X0]:i.GREATER,[q0]:i.NOTEQUAL};function Oe(F,E){if(E.type===Bi&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Hn||E.magFilter===Lu||E.magFilter===wl||E.magFilter===lr||E.minFilter===Hn||E.minFilter===Lu||E.minFilter===wl||E.minFilter===lr)&&Me("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(F,i.TEXTURE_WRAP_S,Vt[E.wrapS]),i.texParameteri(F,i.TEXTURE_WRAP_T,Vt[E.wrapT]),(F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY)&&i.texParameteri(F,i.TEXTURE_WRAP_R,Vt[E.wrapR]),i.texParameteri(F,i.TEXTURE_MAG_FILTER,ne[E.magFilter]),i.texParameteri(F,i.TEXTURE_MIN_FILTER,ne[E.minFilter]),E.compareFunction&&(i.texParameteri(F,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(F,i.TEXTURE_COMPARE_FUNC,je[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===On||E.minFilter!==wl&&E.minFilter!==lr||E.type===Bi&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let at=t.get("EXT_texture_filter_anisotropic");i.texParameterf(F,at.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function We(F,E){let at=!1;F.__webglInit===void 0&&(F.__webglInit=!0,E.addEventListener("dispose",Y));let lt=E.source,mt=M.get(lt);mt===void 0&&(mt={},M.set(lt,mt));let Nt=_t(E);if(Nt!==F.__cacheKey){mt[Nt]===void 0&&(mt[Nt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,at=!0),mt[Nt].usedTimes++;let Ht=mt[F.__cacheKey];Ht!==void 0&&(mt[F.__cacheKey].usedTimes--,Ht.usedTimes===0&&q(E)),F.__cacheKey=Nt,F.__webglTexture=mt[Nt].texture}return at}function vt(F,E,at){return Math.floor(Math.floor(F/at)/E)}function yt(F,E,at,lt){let Nt=F.updateRanges;if(Nt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,E.width,E.height,at,lt,E.data);else{Nt.sort((Dt,Zt)=>Dt.start-Zt.start);let Ht=0;for(let Dt=1;Dt<Nt.length;Dt++){let Zt=Nt[Ht],Yt=Nt[Dt],ue=Zt.start+Zt.count,xe=vt(Yt.start,E.width,4),Te=vt(Zt.start,E.width,4);Yt.start<=ue+1&&xe===Te&&vt(Yt.start+Yt.count-1,E.width,4)===xe?Zt.count=Math.max(Zt.count,Yt.start+Yt.count-Zt.start):(++Ht,Nt[Ht]=Yt)}Nt.length=Ht+1;let ft=e.getParameter(i.UNPACK_ROW_LENGTH),Mt=e.getParameter(i.UNPACK_SKIP_PIXELS),kt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,E.width);for(let Dt=0,Zt=Nt.length;Dt<Zt;Dt++){let Yt=Nt[Dt],ue=Math.floor(Yt.start/4),xe=Math.ceil(Yt.count/4),Te=ue%E.width,et=Math.floor(ue/E.width),Gt=xe,St=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Te),e.pixelStorei(i.UNPACK_SKIP_ROWS,et),e.texSubImage2D(i.TEXTURE_2D,0,Te,et,Gt,St,at,lt,E.data)}F.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,ft),e.pixelStorei(i.UNPACK_SKIP_PIXELS,Mt),e.pixelStorei(i.UNPACK_SKIP_ROWS,kt)}}function Lt(F,E,at){let lt=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(lt=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(lt=i.TEXTURE_3D);let mt=We(F,E),Nt=E.source;e.bindTexture(lt,F.__webglTexture,i.TEXTURE0+at);let Ht=n.get(Nt);if(Nt.version!==Ht.__version||mt===!0){if(e.activeTexture(i.TEXTURE0+at),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){let St=Ye.getPrimaries(Ye.workingColorSpace),Jt=E.colorSpace===ks?null:Ye.getPrimaries(E.colorSpace),Qt=E.colorSpace===ks||St===Jt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qt)}e.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment);let Mt=y(E.image,!1,s.maxTextureSize);Mt=Qe(E,Mt);let kt=r.convert(E.format,E.colorSpace),Dt=r.convert(E.type),Zt=D(E.internalFormat,kt,Dt,E.normalized,E.colorSpace,E.isVideoTexture);Oe(lt,E);let Yt,ue=E.mipmaps,xe=E.isVideoTexture!==!0,Te=Ht.__version===void 0||mt===!0,et=Nt.dataReady,Gt=k(E,Mt);if(E.isDepthTexture)Zt=T(E.format===cr,E.type),Te&&(xe?e.texStorage2D(i.TEXTURE_2D,1,Zt,Mt.width,Mt.height):e.texImage2D(i.TEXTURE_2D,0,Zt,Mt.width,Mt.height,0,kt,Dt,null));else if(E.isDataTexture)if(ue.length>0){xe&&Te&&e.texStorage2D(i.TEXTURE_2D,Gt,Zt,ue[0].width,ue[0].height);for(let St=0,Jt=ue.length;St<Jt;St++)Yt=ue[St],xe?et&&e.texSubImage2D(i.TEXTURE_2D,St,0,0,Yt.width,Yt.height,kt,Dt,Yt.data):e.texImage2D(i.TEXTURE_2D,St,Zt,Yt.width,Yt.height,0,kt,Dt,Yt.data);E.generateMipmaps=!1}else xe?(Te&&e.texStorage2D(i.TEXTURE_2D,Gt,Zt,Mt.width,Mt.height),et&&yt(E,Mt,kt,Dt)):e.texImage2D(i.TEXTURE_2D,0,Zt,Mt.width,Mt.height,0,kt,Dt,Mt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){xe&&Te&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Gt,Zt,ue[0].width,ue[0].height,Mt.depth);for(let St=0,Jt=ue.length;St<Jt;St++)if(Yt=ue[St],E.format!==ki)if(kt!==null)if(xe){if(et)if(E.layerUpdates.size>0){let Qt=Ff(Yt.width,Yt.height,E.format,E.type);for(let Tt of E.layerUpdates){let he=Yt.data.subarray(Tt*Qt/Yt.data.BYTES_PER_ELEMENT,(Tt+1)*Qt/Yt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,St,0,0,Tt,Yt.width,Yt.height,1,kt,he)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,St,0,0,0,Yt.width,Yt.height,Mt.depth,kt,Yt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,St,Zt,Yt.width,Yt.height,Mt.depth,0,Yt.data,0,0);else Me("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else xe?et&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,St,0,0,0,Yt.width,Yt.height,Mt.depth,kt,Dt,Yt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,St,Zt,Yt.width,Yt.height,Mt.depth,0,kt,Dt,Yt.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{xe&&Te&&e.texStorage2D(i.TEXTURE_2D,Gt,Zt,ue[0].width,ue[0].height);for(let St=0,Jt=ue.length;St<Jt;St++)Yt=ue[St],E.format!==ki?kt!==null?xe?et&&e.compressedTexSubImage2D(i.TEXTURE_2D,St,0,0,Yt.width,Yt.height,kt,Yt.data):e.compressedTexImage2D(i.TEXTURE_2D,St,Zt,Yt.width,Yt.height,0,Yt.data):Me("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):xe?et&&e.texSubImage2D(i.TEXTURE_2D,St,0,0,Yt.width,Yt.height,kt,Dt,Yt.data):e.texImage2D(i.TEXTURE_2D,St,Zt,Yt.width,Yt.height,0,kt,Dt,Yt.data)}else if(E.isDataArrayTexture)if(xe){if(Te&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Gt,Zt,Mt.width,Mt.height,Mt.depth),et)if(E.layerUpdates.size>0){let St=Ff(Mt.width,Mt.height,E.format,E.type);for(let Jt of E.layerUpdates){let Qt=Mt.data.subarray(Jt*St/Mt.data.BYTES_PER_ELEMENT,(Jt+1)*St/Mt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Jt,Mt.width,Mt.height,1,kt,Dt,Qt)}E.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Mt.width,Mt.height,Mt.depth,kt,Dt,Mt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Zt,Mt.width,Mt.height,Mt.depth,0,kt,Dt,Mt.data);else if(E.isData3DTexture)xe?(Te&&e.texStorage3D(i.TEXTURE_3D,Gt,Zt,Mt.width,Mt.height,Mt.depth),et&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Mt.width,Mt.height,Mt.depth,kt,Dt,Mt.data)):e.texImage3D(i.TEXTURE_3D,0,Zt,Mt.width,Mt.height,Mt.depth,0,kt,Dt,Mt.data);else if(E.isFramebufferTexture){if(Te)if(xe)e.texStorage2D(i.TEXTURE_2D,Gt,Zt,Mt.width,Mt.height);else{let St=Mt.width,Jt=Mt.height;for(let Qt=0;Qt<Gt;Qt++)e.texImage2D(i.TEXTURE_2D,Qt,Zt,St,Jt,0,kt,Dt,null),St>>=1,Jt>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in i){let St=i.canvas;if(St.hasAttribute("layoutsubtree")||St.setAttribute("layoutsubtree","true"),Mt.parentNode!==St){St.appendChild(Mt),b.add(E),St.onpaint=Jt=>{let Qt=Jt.changedElements;for(let Tt of b)Qt.includes(Tt.image)&&(Tt.needsUpdate=!0)},St.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Mt);else{let Qt=i.RGBA,Tt=i.RGBA,he=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Qt,Tt,he,Mt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ue.length>0){if(xe&&Te){let St=Fe(ue[0]);e.texStorage2D(i.TEXTURE_2D,Gt,Zt,St.width,St.height)}for(let St=0,Jt=ue.length;St<Jt;St++)Yt=ue[St],xe?et&&e.texSubImage2D(i.TEXTURE_2D,St,0,0,kt,Dt,Yt):e.texImage2D(i.TEXTURE_2D,St,Zt,kt,Dt,Yt);E.generateMipmaps=!1}else if(xe){if(Te){let St=Fe(Mt);e.texStorage2D(i.TEXTURE_2D,Gt,Zt,St.width,St.height)}et&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,kt,Dt,Mt)}else e.texImage2D(i.TEXTURE_2D,0,Zt,kt,Dt,Mt);m(E)&&$(lt),Ht.__version=Nt.version,E.onUpdate&&E.onUpdate(E)}F.__version=E.version}function de(F,E,at){if(E.image.length!==6)return;let lt=We(F,E),mt=E.source;e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+at);let Nt=n.get(mt);if(mt.version!==Nt.__version||lt===!0){e.activeTexture(i.TEXTURE0+at);let Ht=Ye.getPrimaries(Ye.workingColorSpace),ft=E.colorSpace===ks?null:Ye.getPrimaries(E.colorSpace),Mt=E.colorSpace===ks||Ht===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);let kt=E.isCompressedTexture||E.image[0].isCompressedTexture,Dt=E.image[0]&&E.image[0].isDataTexture,Zt=[];for(let Tt=0;Tt<6;Tt++)!kt&&!Dt?Zt[Tt]=y(E.image[Tt],!0,s.maxCubemapSize):Zt[Tt]=Dt?E.image[Tt].image:E.image[Tt],Zt[Tt]=Qe(E,Zt[Tt]);let Yt=Zt[0],ue=r.convert(E.format,E.colorSpace),xe=r.convert(E.type),Te=D(E.internalFormat,ue,xe,E.normalized,E.colorSpace),et=E.isVideoTexture!==!0,Gt=Nt.__version===void 0||lt===!0,St=mt.dataReady,Jt=k(E,Yt);Oe(i.TEXTURE_CUBE_MAP,E);let Qt;if(kt){et&&Gt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Jt,Te,Yt.width,Yt.height);for(let Tt=0;Tt<6;Tt++){Qt=Zt[Tt].mipmaps;for(let he=0;he<Qt.length;he++){let le=Qt[he];E.format!==ki?ue!==null?et?St&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,he,0,0,le.width,le.height,ue,le.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,he,Te,le.width,le.height,0,le.data):Me("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):et?St&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,he,0,0,le.width,le.height,ue,xe,le.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,he,Te,le.width,le.height,0,ue,xe,le.data)}}}else{if(Qt=E.mipmaps,et&&Gt){Qt.length>0&&Jt++;let Tt=Fe(Zt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Jt,Te,Tt.width,Tt.height)}for(let Tt=0;Tt<6;Tt++)if(Dt){et?St&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,0,0,Zt[Tt].width,Zt[Tt].height,ue,xe,Zt[Tt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,Te,Zt[Tt].width,Zt[Tt].height,0,ue,xe,Zt[Tt].data);for(let he=0;he<Qt.length;he++){let Je=Qt[he].image[Tt].image;et?St&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,he+1,0,0,Je.width,Je.height,ue,xe,Je.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,he+1,Te,Je.width,Je.height,0,ue,xe,Je.data)}}else{et?St&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,0,0,ue,xe,Zt[Tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,Te,ue,xe,Zt[Tt]);for(let he=0;he<Qt.length;he++){let le=Qt[he];et?St&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,he+1,0,0,ue,xe,le.image[Tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,he+1,Te,ue,xe,le.image[Tt])}}}m(E)&&$(i.TEXTURE_CUBE_MAP),Nt.__version=mt.version,E.onUpdate&&E.onUpdate(E)}F.__version=E.version}function Kt(F,E,at,lt,mt,Nt){let Ht=r.convert(at.format,at.colorSpace),ft=r.convert(at.type),Mt=D(at.internalFormat,Ht,ft,at.normalized,at.colorSpace),kt=n.get(E),Dt=n.get(at);if(Dt.__renderTarget=E,!kt.__hasExternalTextures){let Zt=Math.max(1,E.width>>Nt),Yt=Math.max(1,E.height>>Nt);mt===i.TEXTURE_3D||mt===i.TEXTURE_2D_ARRAY?e.texImage3D(mt,Nt,Mt,Zt,Yt,E.depth,0,Ht,ft,null):e.texImage2D(mt,Nt,Mt,Zt,Yt,0,Ht,ft,null)}e.bindFramebuffer(i.FRAMEBUFFER,F),Ae(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,lt,mt,Dt.__webglTexture,0,Se(E)):(mt===i.TEXTURE_2D||mt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&mt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,lt,mt,Dt.__webglTexture,Nt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ge(F,E,at){if(i.bindRenderbuffer(i.RENDERBUFFER,F),E.depthBuffer){let lt=E.depthTexture,mt=lt&&lt.isDepthTexture?lt.type:null,Nt=T(E.stencilBuffer,mt),Ht=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ae(E)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Se(E),Nt,E.width,E.height):at?i.renderbufferStorageMultisample(i.RENDERBUFFER,Se(E),Nt,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Nt,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ht,i.RENDERBUFFER,F)}else{let lt=E.textures;for(let mt=0;mt<lt.length;mt++){let Nt=lt[mt],Ht=r.convert(Nt.format,Nt.colorSpace),ft=r.convert(Nt.type),Mt=D(Nt.internalFormat,Ht,ft,Nt.normalized,Nt.colorSpace);Ae(E)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Se(E),Mt,E.width,E.height):at?i.renderbufferStorageMultisample(i.RENDERBUFFER,Se(E),Mt,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Mt,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ee(F,E,at){let lt=E.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,F),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let mt=n.get(E.depthTexture);if(mt.__renderTarget=E,(!mt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),lt){if(mt.__webglInit===void 0&&(mt.__webglInit=!0,E.depthTexture.addEventListener("dispose",Y)),mt.__webglTexture===void 0){mt.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,mt.__webglTexture),Oe(i.TEXTURE_CUBE_MAP,E.depthTexture);let kt=r.convert(E.depthTexture.format),Dt=r.convert(E.depthTexture.type),Zt;E.depthTexture.format===cs?Zt=i.DEPTH_COMPONENT24:E.depthTexture.format===cr&&(Zt=i.DEPTH24_STENCIL8);for(let Yt=0;Yt<6;Yt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Yt,0,Zt,E.width,E.height,0,kt,Dt,null)}}else At(E.depthTexture,0);let Nt=mt.__webglTexture,Ht=Se(E),ft=lt?i.TEXTURE_CUBE_MAP_POSITIVE_X+at:i.TEXTURE_2D,Mt=E.depthTexture.format===cr?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(E.depthTexture.format===cs)Ae(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Mt,ft,Nt,0,Ht):i.framebufferTexture2D(i.FRAMEBUFFER,Mt,ft,Nt,0);else if(E.depthTexture.format===cr)Ae(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Mt,ft,Nt,0,Ht):i.framebufferTexture2D(i.FRAMEBUFFER,Mt,ft,Nt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function rt(F){let E=n.get(F),at=F.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==F.depthTexture){let lt=F.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),lt){let mt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,lt.removeEventListener("dispose",mt)};lt.addEventListener("dispose",mt),E.__depthDisposeCallback=mt}E.__boundDepthTexture=lt}if(F.depthTexture&&!E.__autoAllocateDepthBuffer)if(at)for(let lt=0;lt<6;lt++)ee(E.__webglFramebuffer[lt],F,lt);else{let lt=F.texture.mipmaps;lt&&lt.length>0?ee(E.__webglFramebuffer[0],F,0):ee(E.__webglFramebuffer,F,0)}else if(at){E.__webglDepthbuffer=[];for(let lt=0;lt<6;lt++)if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[lt]),E.__webglDepthbuffer[lt]===void 0)E.__webglDepthbuffer[lt]=i.createRenderbuffer(),ge(E.__webglDepthbuffer[lt],F,!1);else{let mt=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Nt=E.__webglDepthbuffer[lt];i.bindRenderbuffer(i.RENDERBUFFER,Nt),i.framebufferRenderbuffer(i.FRAMEBUFFER,mt,i.RENDERBUFFER,Nt)}}else{let lt=F.texture.mipmaps;if(lt&&lt.length>0?e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),ge(E.__webglDepthbuffer,F,!1);else{let mt=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Nt=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Nt),i.framebufferRenderbuffer(i.FRAMEBUFFER,mt,i.RENDERBUFFER,Nt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Rt(F,E,at){let lt=n.get(F);E!==void 0&&Kt(lt.__webglFramebuffer,F,F.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),at!==void 0&&rt(F)}function H(F){let E=F.texture,at=n.get(F),lt=n.get(E);F.addEventListener("dispose",R);let mt=F.textures,Nt=F.isWebGLCubeRenderTarget===!0,Ht=mt.length>1;if(Ht||(lt.__webglTexture===void 0&&(lt.__webglTexture=i.createTexture()),lt.__version=E.version,o.memory.textures++),Nt){at.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(E.mipmaps&&E.mipmaps.length>0){at.__webglFramebuffer[ft]=[];for(let Mt=0;Mt<E.mipmaps.length;Mt++)at.__webglFramebuffer[ft][Mt]=i.createFramebuffer()}else at.__webglFramebuffer[ft]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){at.__webglFramebuffer=[];for(let ft=0;ft<E.mipmaps.length;ft++)at.__webglFramebuffer[ft]=i.createFramebuffer()}else at.__webglFramebuffer=i.createFramebuffer();if(Ht)for(let ft=0,Mt=mt.length;ft<Mt;ft++){let kt=n.get(mt[ft]);kt.__webglTexture===void 0&&(kt.__webglTexture=i.createTexture(),o.memory.textures++)}if(F.samples>0&&Ae(F)===!1){at.__webglMultisampledFramebuffer=i.createFramebuffer(),at.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,at.__webglMultisampledFramebuffer);for(let ft=0;ft<mt.length;ft++){let Mt=mt[ft];at.__webglColorRenderbuffer[ft]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,at.__webglColorRenderbuffer[ft]);let kt=r.convert(Mt.format,Mt.colorSpace),Dt=r.convert(Mt.type),Zt=D(Mt.internalFormat,kt,Dt,Mt.normalized,Mt.colorSpace,F.isXRRenderTarget===!0),Yt=Se(F);i.renderbufferStorageMultisample(i.RENDERBUFFER,Yt,Zt,F.width,F.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,at.__webglColorRenderbuffer[ft])}i.bindRenderbuffer(i.RENDERBUFFER,null),F.depthBuffer&&(at.__webglDepthRenderbuffer=i.createRenderbuffer(),ge(at.__webglDepthRenderbuffer,F,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Nt){e.bindTexture(i.TEXTURE_CUBE_MAP,lt.__webglTexture),Oe(i.TEXTURE_CUBE_MAP,E);for(let ft=0;ft<6;ft++)if(E.mipmaps&&E.mipmaps.length>0)for(let Mt=0;Mt<E.mipmaps.length;Mt++)Kt(at.__webglFramebuffer[ft][Mt],F,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Mt);else Kt(at.__webglFramebuffer[ft],F,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);m(E)&&$(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ht){for(let ft=0,Mt=mt.length;ft<Mt;ft++){let kt=mt[ft],Dt=n.get(kt),Zt=i.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Zt=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Zt,Dt.__webglTexture),Oe(Zt,kt),Kt(at.__webglFramebuffer,F,kt,i.COLOR_ATTACHMENT0+ft,Zt,0),m(kt)&&$(Zt)}e.unbindTexture()}else{let ft=i.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(ft=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ft,lt.__webglTexture),Oe(ft,E),E.mipmaps&&E.mipmaps.length>0)for(let Mt=0;Mt<E.mipmaps.length;Mt++)Kt(at.__webglFramebuffer[Mt],F,E,i.COLOR_ATTACHMENT0,ft,Mt);else Kt(at.__webglFramebuffer,F,E,i.COLOR_ATTACHMENT0,ft,0);m(E)&&$(ft),e.unbindTexture()}F.depthBuffer&&rt(F)}function Pt(F){let E=F.textures;for(let at=0,lt=E.length;at<lt;at++){let mt=E[at];if(m(mt)){let Nt=V(F),Ht=n.get(mt).__webglTexture;e.bindTexture(Nt,Ht),$(Nt),e.unbindTexture()}}}let $t=[],ce=[];function pe(F){if(F.samples>0){if(Ae(F)===!1){let E=F.textures,at=F.width,lt=F.height,mt=i.COLOR_BUFFER_BIT,Nt=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ht=n.get(F),ft=E.length>1;if(ft)for(let kt=0;kt<E.length;kt++)e.bindFramebuffer(i.FRAMEBUFFER,Ht.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+kt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ht.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+kt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ht.__webglMultisampledFramebuffer);let Mt=F.texture.mipmaps;Mt&&Mt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ht.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ht.__webglFramebuffer);for(let kt=0;kt<E.length;kt++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(mt|=i.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(mt|=i.STENCIL_BUFFER_BIT)),ft){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ht.__webglColorRenderbuffer[kt]);let Dt=n.get(E[kt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Dt,0)}i.blitFramebuffer(0,0,at,lt,0,0,at,lt,mt,i.NEAREST),u===!0&&($t.length=0,ce.length=0,$t.push(i.COLOR_ATTACHMENT0+kt),F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&($t.push(Nt),ce.push(Nt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ce)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,$t))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ft)for(let kt=0;kt<E.length;kt++){e.bindFramebuffer(i.FRAMEBUFFER,Ht.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+kt,i.RENDERBUFFER,Ht.__webglColorRenderbuffer[kt]);let Dt=n.get(E[kt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ht.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+kt,i.TEXTURE_2D,Dt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ht.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&u){let E=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function Se(F){return Math.min(s.maxSamples,F.samples)}function Ae(F){let E=n.get(F);return F.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function X(F){let E=o.render.frame;d.get(F)!==E&&(d.set(F,E),F.update())}function Qe(F,E){let at=F.colorSpace,lt=F.format,mt=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||at!==Vo&&at!==ks&&(Ye.getTransfer(at)===an?(lt!==ki||mt!==Si)&&Me("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):we("WebGLTextures: Unsupported texture color space:",at)),E}function Fe(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(h.width=F.naturalWidth||F.width,h.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(h.width=F.displayWidth,h.height=F.displayHeight):(h.width=F.width,h.height=F.height),h}this.allocateTextureUnit=pt,this.resetTextureUnits=ht,this.getTextureUnits=tt,this.setTextureUnits=st,this.setTexture2D=At,this.setTexture2DArray=xt,this.setTexture3D=wt,this.setTextureCube=bt,this.rebindTextures=Rt,this.setupRenderTarget=H,this.updateRenderTargetMipmap=Pt,this.updateMultisampleRenderTarget=pe,this.setupDepthRenderbuffer=rt,this.setupFrameBufferTexture=Kt,this.useMultisampledRTT=Ae,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function E1(i,t){function e(n,s=ks){let r,o=Ye.getTransfer(s);if(n===Si)return i.UNSIGNED_BYTE;if(n===Nu)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Uu)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ef)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Tf)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Mf)return i.BYTE;if(n===wf)return i.SHORT;if(n===za)return i.UNSIGNED_SHORT;if(n===Du)return i.INT;if(n===Ki)return i.UNSIGNED_INT;if(n===Bi)return i.FLOAT;if(n===Qi)return i.HALF_FLOAT;if(n===Af)return i.ALPHA;if(n===Cf)return i.RGB;if(n===ki)return i.RGBA;if(n===cs)return i.DEPTH_COMPONENT;if(n===cr)return i.DEPTH_STENCIL;if(n===Ou)return i.RED;if(n===Fu)return i.RED_INTEGER;if(n===ur)return i.RG;if(n===Bu)return i.RG_INTEGER;if(n===ku)return i.RGBA_INTEGER;if(n===El||n===Tl||n===Al||n===Cl)if(o===an)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===El)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Tl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Al)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Cl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===El)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Tl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Al)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Cl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===$u||n===zu||n===Vu||n===Hu)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===$u)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===zu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Vu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Hu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Gu||n===Wu||n===Xu||n===qu||n===Yu||n===Rl||n===Ju)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Gu||n===Wu)return o===an?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Xu)return o===an?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===qu)return r.COMPRESSED_R11_EAC;if(n===Yu)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Rl)return r.COMPRESSED_RG11_EAC;if(n===Ju)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Zu||n===ju||n===Ku||n===Qu||n===th||n===eh||n===nh||n===ih||n===sh||n===rh||n===ah||n===oh||n===lh||n===ch)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Zu)return o===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ju)return o===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ku)return o===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Qu)return o===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===th)return o===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===eh)return o===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===nh)return o===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ih)return o===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===sh)return o===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===rh)return o===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ah)return o===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===oh)return o===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===lh)return o===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ch)return o===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===uh||n===hh||n===dh)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===uh)return o===an?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===hh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===dh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===fh||n===ph||n===Il||n===mh)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===fh)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ph)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Il)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===mh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Va?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var T1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,A1=`
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

}`,jf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new el(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new kn({vertexShader:T1,fragmentShader:A1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Bn(new hl(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Kf=class extends us{constructor(t,e){super();let n=this,s=null,r=1,o=null,l="local-floor",u=1,h=null,d=null,b=null,g=null,M=null,w=null,N=typeof XRWebGLBinding<"u",y=new jf,m={},$=e.getContextAttributes(),V=null,D=null,T=[],k=[],Y=new Wt,R=null,B=null,q=new ti;q.viewport=new on;let Z=new ti;Z.viewport=new on;let ot=[q,Z],ht=new Cu,tt=null,st=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(vt){let yt=T[vt];return yt===void 0&&(yt=new La,T[vt]=yt),yt.getTargetRaySpace()},this.getControllerGrip=function(vt){let yt=T[vt];return yt===void 0&&(yt=new La,T[vt]=yt),yt.getGripSpace()},this.getHand=function(vt){let yt=T[vt];return yt===void 0&&(yt=new La,T[vt]=yt),yt.getHandSpace()};function pt(vt){let yt=k.indexOf(vt.inputSource);if(yt===-1)return;let Lt=T[yt];Lt!==void 0&&(Lt.update(vt.inputSource,vt.frame,h||o),Lt.dispatchEvent({type:vt.type,data:vt.inputSource}))}function _t(){s.removeEventListener("select",pt),s.removeEventListener("selectstart",pt),s.removeEventListener("selectend",pt),s.removeEventListener("squeeze",pt),s.removeEventListener("squeezestart",pt),s.removeEventListener("squeezeend",pt),s.removeEventListener("end",_t),s.removeEventListener("inputsourceschange",At);for(let vt=0;vt<T.length;vt++){let yt=k[vt];yt!==null&&(k[vt]=null,T[vt].disconnect(yt))}tt=null,st=null,y.reset();for(let vt in m)delete m[vt];if(t.setRenderTarget(V),M=null,g=null,b=null,s=null,D=null,We.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(Y.width,Y.height,!1),B!==null){let vt=B.camera;vt.fov=B.fov,vt.zoom=B.zoom,vt.updateProjectionMatrix(),B=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(vt){r=vt,n.isPresenting===!0&&Me("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(vt){l=vt,n.isPresenting===!0&&Me("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(vt){h=vt},this.getBaseLayer=function(){return g!==null?g:M},this.getBinding=function(){return b===null&&N&&(b=new XRWebGLBinding(s,e)),b},this.getFrame=function(){return w},this.getSession=function(){return s},this.setSession=async function(vt){if(s=vt,s!==null){if(V=t.getRenderTarget(),s.addEventListener("select",pt),s.addEventListener("selectstart",pt),s.addEventListener("selectend",pt),s.addEventListener("squeeze",pt),s.addEventListener("squeezestart",pt),s.addEventListener("squeezeend",pt),s.addEventListener("end",_t),s.addEventListener("inputsourceschange",At),$.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(Y),N&&"createProjectionLayer"in XRWebGLBinding.prototype){let Lt=null,de=null,Kt=null;$.depth&&(Kt=$.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Lt=$.stencil?cr:cs,de=$.stencil?Va:Ki);let ge={colorFormat:e.RGBA8,depthFormat:Kt,scaleFactor:r};b=this.getBinding(),g=b.createProjectionLayer(ge),s.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),D=new vi(g.textureWidth,g.textureHeight,{format:ki,type:Si,depthTexture:new er(g.textureWidth,g.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,Lt),stencilBuffer:$.stencil,colorSpace:t.outputColorSpace,samples:$.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}else{let Lt={antialias:$.antialias,alpha:!0,depth:$.depth,stencil:$.stencil,framebufferScaleFactor:r};M=new XRWebGLLayer(s,e,Lt),s.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),D=new vi(M.framebufferWidth,M.framebufferHeight,{format:ki,type:Si,colorSpace:t.outputColorSpace,stencilBuffer:$.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1,storeMultisampledDepthBuffer:M.ignoreDepthValues===!1,storeMultisampledStencilBuffer:M.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(u),h=null,o=await s.requestReferenceSpace(l),We.setContext(s),We.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function At(vt){for(let yt=0;yt<vt.removed.length;yt++){let Lt=vt.removed[yt],de=k.indexOf(Lt);de>=0&&(k[de]=null,T[de].disconnect(Lt))}for(let yt=0;yt<vt.added.length;yt++){let Lt=vt.added[yt],de=k.indexOf(Lt);if(de===-1){for(let ge=0;ge<T.length;ge++)if(ge>=k.length){k.push(Lt),de=ge;break}else if(k[ge]===null){k[ge]=Lt,de=ge;break}if(de===-1)break}let Kt=T[de];Kt&&Kt.connect(Lt)}}let xt=new j,wt=new j;function bt(vt,yt,Lt){xt.setFromMatrixPosition(yt.matrixWorld),wt.setFromMatrixPosition(Lt.matrixWorld);let de=xt.distanceTo(wt),Kt=yt.projectionMatrix.elements,ge=Lt.projectionMatrix.elements,ee=Kt[14]/(Kt[10]-1),rt=Kt[14]/(Kt[10]+1),Rt=(Kt[9]+1)/Kt[5],H=(Kt[9]-1)/Kt[5],Pt=(Kt[8]-1)/Kt[0],$t=(ge[8]+1)/ge[0],ce=ee*Pt,pe=ee*$t,Se=de/(-Pt+$t),Ae=Se*-Pt;if(yt.matrixWorld.decompose(vt.position,vt.quaternion,vt.scale),vt.translateX(Ae),vt.translateZ(Se),vt.matrixWorld.compose(vt.position,vt.quaternion,vt.scale),vt.matrixWorldInverse.copy(vt.matrixWorld).invert(),Kt[10]===-1)vt.projectionMatrix.copy(yt.projectionMatrix),vt.projectionMatrixInverse.copy(yt.projectionMatrixInverse);else{let X=ee+Se,Qe=rt+Se,Fe=ce-Ae,F=pe+(de-Ae),E=Rt*rt/Qe*X,at=H*rt/Qe*X;vt.projectionMatrix.makePerspective(Fe,F,E,at,X,Qe),vt.projectionMatrixInverse.copy(vt.projectionMatrix).invert()}}function Vt(vt,yt){yt===null?vt.matrixWorld.copy(vt.matrix):vt.matrixWorld.multiplyMatrices(yt.matrixWorld,vt.matrix),vt.matrixWorldInverse.copy(vt.matrixWorld).invert()}this.updateCamera=function(vt){if(s===null)return;let yt=vt.near,Lt=vt.far;y.texture!==null&&(y.depthNear>0&&(yt=y.depthNear),y.depthFar>0&&(Lt=y.depthFar)),ht.near=Z.near=q.near=yt,ht.far=Z.far=q.far=Lt,(tt!==ht.near||st!==ht.far)&&(s.updateRenderState({depthNear:ht.near,depthFar:ht.far}),tt=ht.near,st=ht.far),ht.layers.mask=vt.layers.mask|6,q.layers.mask=ht.layers.mask&-5,Z.layers.mask=ht.layers.mask&-3;let de=vt.parent,Kt=ht.cameras;Vt(ht,de);for(let ge=0;ge<Kt.length;ge++)Vt(Kt[ge],de);Kt.length===2?bt(ht,q,Z):ht.projectionMatrix.copy(q.projectionMatrix),B===null&&vt.isPerspectiveCamera&&(B={camera:vt,fov:vt.fov,zoom:vt.zoom}),ne(vt,ht,de)};function ne(vt,yt,Lt){Lt===null?vt.matrix.copy(yt.matrixWorld):(vt.matrix.copy(Lt.matrixWorld),vt.matrix.invert(),vt.matrix.multiply(yt.matrixWorld)),vt.matrix.decompose(vt.position,vt.quaternion,vt.scale),vt.updateMatrixWorld(!0),vt.projectionMatrix.copy(yt.projectionMatrix),vt.projectionMatrixInverse.copy(yt.projectionMatrixInverse),vt.isPerspectiveCamera&&(vt.fov=Ra*2*Math.atan(1/vt.projectionMatrix.elements[5]),vt.zoom=1)}this.getCamera=function(){return ht},this.getFoveation=function(){if(!(g===null&&M===null))return u},this.setFoveation=function(vt){u=vt,g!==null&&(g.fixedFoveation=vt),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=vt)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(ht)},this.getCameraTexture=function(vt){return m[vt]};let je=null;function Oe(vt,yt){if(d=yt.getViewerPose(h||o),w=yt,d!==null){let Lt=d.views;M!==null&&(t.setRenderTargetFramebuffer(D,M.framebuffer),t.setRenderTarget(D));let de=!1;Lt.length!==ht.cameras.length&&(ht.cameras.length=0,de=!0);for(let rt=0;rt<Lt.length;rt++){let Rt=Lt[rt],H=null;if(M!==null)H=M.getViewport(Rt);else{let $t=b.getViewSubImage(g,Rt);H=$t.viewport,rt===0&&(t.setRenderTargetTextures(D,$t.colorTexture,$t.depthStencilTexture),t.setRenderTarget(D))}let Pt=ot[rt];Pt===void 0&&(Pt=new ti,Pt.layers.enable(rt),Pt.viewport=new on,ot[rt]=Pt),Pt.matrix.fromArray(Rt.transform.matrix),Pt.matrix.decompose(Pt.position,Pt.quaternion,Pt.scale),Pt.projectionMatrix.fromArray(Rt.projectionMatrix),Pt.projectionMatrixInverse.copy(Pt.projectionMatrix).invert(),Pt.viewport.set(H.x,H.y,H.width,H.height),rt===0&&(ht.matrix.copy(Pt.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale)),de===!0&&ht.cameras.push(Pt)}let Kt=s.enabledFeatures;if(Kt&&Kt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&N){b=n.getBinding();let rt=b.getDepthInformation(Lt[0]);rt&&rt.isValid&&rt.texture&&y.init(rt,s.renderState)}if(Kt&&Kt.includes("camera-access")&&N){t.state.unbindTexture(),b=n.getBinding();for(let rt=0;rt<Lt.length;rt++){let Rt=Lt[rt].camera;if(Rt){let H=m[Rt];H||(H=new el,m[Rt]=H);let Pt=b.getCameraImage(Rt);H.sourceTexture=Pt}}}}for(let Lt=0;Lt<T.length;Lt++){let de=k[Lt],Kt=T[Lt];de!==null&&Kt!==void 0&&Kt.update(de,yt,h||o)}je&&je(vt,yt),yt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:yt}),w=null}let We=new Ag;We.setAnimationLoop(Oe),this.setAnimationLoop=function(vt){je=vt},this.dispose=function(){}}},C1=new Ze,Dg=new Le;Dg.set(-1,0,0,0,1,0,0,0,1);function R1(i,t){function e(y,m){y.matrixAutoUpdate===!0&&y.updateMatrix(),m.value.copy(y.matrix)}function n(y,m){m.color.getRGB(y.fogColor.value,Nf(i)),m.isFog?(y.fogNear.value=m.near,y.fogFar.value=m.far):m.isFogExp2&&(y.fogDensity.value=m.density)}function s(y,m,$,V,D){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(y,m):m.isMeshLambertMaterial?(r(y,m),m.envMap&&(y.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(y,m),b(y,m)):m.isMeshPhongMaterial?(r(y,m),d(y,m),m.envMap&&(y.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(y,m),g(y,m),m.isMeshPhysicalMaterial&&M(y,m,D)):m.isMeshMatcapMaterial?(r(y,m),w(y,m)):m.isMeshDepthMaterial?r(y,m):m.isMeshDistanceMaterial?(r(y,m),N(y,m)):m.isMeshNormalMaterial?r(y,m):m.isLineBasicMaterial?(o(y,m),m.isLineDashedMaterial&&l(y,m)):m.isPointsMaterial?u(y,m,$,V):m.isSpriteMaterial?h(y,m):m.isShadowMaterial?(y.color.value.copy(m.color),y.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(y,m){y.opacity.value=m.opacity,m.color&&y.diffuse.value.copy(m.color),m.emissive&&y.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(y.map.value=m.map,e(m.map,y.mapTransform)),m.alphaMap&&(y.alphaMap.value=m.alphaMap,e(m.alphaMap,y.alphaMapTransform)),m.bumpMap&&(y.bumpMap.value=m.bumpMap,e(m.bumpMap,y.bumpMapTransform),y.bumpScale.value=m.bumpScale,m.side===ui&&(y.bumpScale.value*=-1)),m.normalMap&&(y.normalMap.value=m.normalMap,e(m.normalMap,y.normalMapTransform),y.normalScale.value.copy(m.normalScale),m.side===ui&&y.normalScale.value.negate()),m.displacementMap&&(y.displacementMap.value=m.displacementMap,e(m.displacementMap,y.displacementMapTransform),y.displacementScale.value=m.displacementScale,y.displacementBias.value=m.displacementBias),m.emissiveMap&&(y.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,y.emissiveMapTransform)),m.specularMap&&(y.specularMap.value=m.specularMap,e(m.specularMap,y.specularMapTransform)),m.alphaTest>0&&(y.alphaTest.value=m.alphaTest);let $=t.get(m),V=$.envMap,D=$.envMapRotation;V&&(y.envMap.value=V,y.envMapRotation.value.setFromMatrix4(C1.makeRotationFromEuler(D)).transpose(),V.isCubeTexture&&V.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(Dg),y.reflectivity.value=m.reflectivity,y.ior.value=m.ior,y.refractionRatio.value=m.refractionRatio),m.lightMap&&(y.lightMap.value=m.lightMap,y.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,y.lightMapTransform)),m.aoMap&&(y.aoMap.value=m.aoMap,y.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,y.aoMapTransform))}function o(y,m){y.diffuse.value.copy(m.color),y.opacity.value=m.opacity,m.map&&(y.map.value=m.map,e(m.map,y.mapTransform))}function l(y,m){y.dashSize.value=m.dashSize,y.totalSize.value=m.dashSize+m.gapSize,y.scale.value=m.scale}function u(y,m,$,V){y.diffuse.value.copy(m.color),y.opacity.value=m.opacity,y.size.value=m.size*$,y.scale.value=V*.5,m.map&&(y.map.value=m.map,e(m.map,y.uvTransform)),m.alphaMap&&(y.alphaMap.value=m.alphaMap,e(m.alphaMap,y.alphaMapTransform)),m.alphaTest>0&&(y.alphaTest.value=m.alphaTest)}function h(y,m){y.diffuse.value.copy(m.color),y.opacity.value=m.opacity,y.rotation.value=m.rotation,m.map&&(y.map.value=m.map,e(m.map,y.mapTransform)),m.alphaMap&&(y.alphaMap.value=m.alphaMap,e(m.alphaMap,y.alphaMapTransform)),m.alphaTest>0&&(y.alphaTest.value=m.alphaTest)}function d(y,m){y.specular.value.copy(m.specular),y.shininess.value=Math.max(m.shininess,1e-4)}function b(y,m){m.gradientMap&&(y.gradientMap.value=m.gradientMap)}function g(y,m){y.metalness.value=m.metalness,m.metalnessMap&&(y.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,y.metalnessMapTransform)),y.roughness.value=m.roughness,m.roughnessMap&&(y.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,y.roughnessMapTransform)),m.envMap&&(y.envMapIntensity.value=m.envMapIntensity)}function M(y,m,$){y.ior.value=m.ior,m.sheen>0&&(y.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),y.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(y.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,y.sheenColorMapTransform)),m.sheenRoughnessMap&&(y.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,y.sheenRoughnessMapTransform))),m.clearcoat>0&&(y.clearcoat.value=m.clearcoat,y.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(y.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,y.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(y.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===ui&&y.clearcoatNormalScale.value.negate())),m.dispersion>0&&(y.dispersion.value=m.dispersion),m.retroreflectivity>0&&(y.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(y.iridescence.value=m.iridescence,y.iridescenceIOR.value=m.iridescenceIOR,y.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(y.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,y.iridescenceMapTransform)),m.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),m.transmission>0&&(y.transmission.value=m.transmission,y.transmissionSamplerMap.value=$.texture,y.transmissionSamplerSize.value.set($.width,$.height),m.transmissionMap&&(y.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,y.transmissionMapTransform)),y.thickness.value=m.thickness,m.thicknessMap&&(y.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=m.attenuationDistance,y.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(y.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(y.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=m.specularIntensity,y.specularColor.value.copy(m.specularColor),m.specularColorMap&&(y.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,y.specularColorMapTransform)),m.specularIntensityMap&&(y.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,y.specularIntensityMapTransform))}function w(y,m){m.matcap&&(y.matcap.value=m.matcap)}function N(y,m){let $=t.get(m).light;y.referencePosition.value.setFromMatrixPosition($.matrixWorld),y.nearDistance.value=$.shadow.camera.near,y.farDistance.value=$.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function I1(i,t,e,n){let s={},r={},o=[],l=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function u(D,T){let k=T.program;n.uniformBlockBinding(D,k)}function h(D,T){let k=s[D.id];k===void 0&&(y(D),k=d(D),s[D.id]=k,D.addEventListener("dispose",$));let Y=T.program;n.updateUBOMapping(D,Y);let R=t.render.frame;r[D.id]!==R&&(g(D),r[D.id]=R)}function d(D){let T=b();D.__bindingPointIndex=T;let k=i.createBuffer(),Y=D.__size,R=D.usage;return i.bindBuffer(i.UNIFORM_BUFFER,k),i.bufferData(i.UNIFORM_BUFFER,Y,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,k),k}function b(){for(let D=0;D<l;D++)if(o.indexOf(D)===-1)return o.push(D),D;return we("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(D){let T=s[D.id],k=D.uniforms,Y=D.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let R=0,B=k.length;R<B;R++){let q=k[R];if(Array.isArray(q))for(let Z=0,ot=q.length;Z<ot;Z++)M(q[Z],R,Z,Y);else M(q,R,0,Y)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function M(D,T,k,Y){if(N(D,T,k,Y)===!0){let R=D.__offset,B=D.value;if(Array.isArray(B)){let q=0;for(let Z=0;Z<B.length;Z++){let ot=B[Z],ht=m(ot);w(ot,D.__data,q),typeof ot!="number"&&typeof ot!="boolean"&&!ot.isMatrix3&&!ArrayBuffer.isView(ot)&&(q+=ht.storage/Float32Array.BYTES_PER_ELEMENT)}}else w(B,D.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,R,D.__data)}}function w(D,T,k){typeof D=="number"||typeof D=="boolean"?T[0]=D:D.isMatrix3?(T[0]=D.elements[0],T[1]=D.elements[1],T[2]=D.elements[2],T[3]=0,T[4]=D.elements[3],T[5]=D.elements[4],T[6]=D.elements[5],T[7]=0,T[8]=D.elements[6],T[9]=D.elements[7],T[10]=D.elements[8],T[11]=0):ArrayBuffer.isView(D)?T.set(new D.constructor(D.buffer,D.byteOffset,T.length)):D.toArray(T,k)}function N(D,T,k,Y){let R=D.value,B=T+"_"+k;if(Y[B]===void 0)return typeof R=="number"||typeof R=="boolean"?Y[B]=R:ArrayBuffer.isView(R)?Y[B]=R.slice():Y[B]=R.clone(),!0;{let q=Y[B];if(typeof R=="number"||typeof R=="boolean"){if(q!==R)return Y[B]=R,!0}else{if(ArrayBuffer.isView(R))return!0;if(q.equals(R)===!1)return q.copy(R),!0}}return!1}function y(D){let T=D.uniforms,k=0,Y=16;for(let B=0,q=T.length;B<q;B++){let Z=Array.isArray(T[B])?T[B]:[T[B]];for(let ot=0,ht=Z.length;ot<ht;ot++){let tt=Z[ot],st=Array.isArray(tt.value)?tt.value:[tt.value];for(let pt=0,_t=st.length;pt<_t;pt++){let At=st[pt],xt=m(At),wt=k%Y,bt=wt%xt.boundary,Vt=wt+bt;k+=bt,Vt!==0&&Y-Vt<xt.storage&&(k+=Y-Vt),tt.__data=new Float32Array(xt.storage/Float32Array.BYTES_PER_ELEMENT),tt.__offset=k,k+=xt.storage}}}let R=k%Y;return R>0&&(k+=Y-R),D.__size=k,D.__cache={},this}function m(D){let T={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(T.boundary=4,T.storage=4):D.isVector2?(T.boundary=8,T.storage=8):D.isVector3||D.isColor?(T.boundary=16,T.storage=12):D.isVector4?(T.boundary=16,T.storage=16):D.isMatrix3?(T.boundary=48,T.storage=48):D.isMatrix4?(T.boundary=64,T.storage=64):D.isTexture?Me("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(D)?(T.boundary=16,T.storage=D.byteLength):Me("WebGLRenderer: Unsupported uniform value type.",D),T}function $(D){let T=D.target;T.removeEventListener("dispose",$);let k=o.indexOf(T.__bindingPointIndex);o.splice(k,1),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function V(){for(let D in s)i.deleteBuffer(s[D]);o=[],s={},r={}}return{bind:u,update:h,dispose:V}}var P1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ms=null;function L1(){return ms===null&&(ms=new Zo(P1,16,16,ur,Qi),ms.name="DFG_LUT",ms.minFilter=Hn,ms.magFilter=Hn,ms.wrapS=os,ms.wrapT=os,ms.generateMipmaps=!1,ms.needsUpdate=!0),ms}var Mh=class{constructor(t={}){let{canvas:e=J0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:l=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:h=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:b=!1,reversedDepthBuffer:g=!1,outputBufferType:M=Si}=t;this.isWebGLRenderer=!0;let w;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");w=n.getContextAttributes().alpha}else w=o;let N=M,y=new Set([ku,Bu,Fu]),m=new Set([Si,Ki,za,Va,Nu,Uu]),$=new Uint32Array(4),V=new Int32Array(4),D=new j,T=null,k=null,Y=[],R=[],B=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ji,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let q=this,Z=!1,ot=null,ht=null,tt=null,st=null;this._outputColorSpace=Ai;let pt=0,_t=0,At=null,xt=-1,wt=null,bt=new on,Vt=new on,ne=null,je=new ye(0),Oe=0,We=e.width,vt=e.height,yt=1,Lt=null,de=null,Kt=new on(0,0,We,vt),ge=new on(0,0,We,vt),ee=!1,rt=new Da,Rt=!1,H=!1,Pt=new Ze,$t=new j,ce=new on,pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Se=!1;function Ae(){return At===null?yt:1}let X=n;function Qe(P,K){return e.getContext(P,K)}let Fe,F,E,at,lt,mt,Nt,Ht,ft,Mt,kt,Dt,Zt,Yt,ue,xe,Te,et,Gt,St,Jt,Qt,Tt;try{let P={alpha:!0,depth:s,stencil:r,antialias:l,premultipliedAlpha:u,preserveDrawingBuffer:h,powerPreference:d,failIfMajorPerformanceCaveat:b};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Je,!1),e.addEventListener("webglcontextrestored",ze,!1),e.addEventListener("webglcontextcreationerror",qn,!1),X===null){let K="webgl2";if(X=Qe(K,P),X===null)throw Qe(K)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}he()}catch(P){throw e.removeEventListener("webglcontextlost",Je,!1),e.removeEventListener("webglcontextrestored",ze,!1),e.removeEventListener("webglcontextcreationerror",qn,!1),we("WebGLRenderer: "+P.message),P}function he(){Fe=new kb(X),Fe.init(),Jt=new E1(X,Fe),F=new Rb(X,Fe,t,Jt),E=new M1(X,Fe),F.reversedDepthBuffer&&g&&E.buffers.depth.setReversed(!0),ht=X.createFramebuffer(),tt=X.createFramebuffer(),st=X.createFramebuffer(),at=new Vb(X),lt=new c1,mt=new w1(X,Fe,E,lt,F,Jt,at),Nt=new Bb(q),Ht=new Gv(X),Qt=new Ab(X,Ht),ft=new $b(X,Ht,at,Qt),Mt=new Gb(X,ft,Ht,Qt,at),et=new Hb(X,F,mt),ue=new Ib(lt),kt=new l1(q,Nt,Fe,F,Qt,ue),Dt=new R1(q,lt),Zt=new h1,Yt=new _1(Fe),Te=new Tb(q,Nt,E,Mt,w,u),xe=new b1(q,Mt,F),Tt=new I1(X,at,F,E),Gt=new Cb(X,Fe,at),St=new zb(X,Fe,at),at.programs=kt.programs,q.capabilities=F,q.extensions=Fe,q.properties=lt,q.renderLists=Zt,q.shadowMap=xe,q.state=E,q.info=at}N!==Si&&(B=new Xb(N,e.width,e.height,l,s,r));let le=new Kf(q,X);this.xr=le,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){let P=Fe.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){let P=Fe.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return yt},this.setPixelRatio=function(P){P!==void 0&&(yt=P,this.setSize(We,vt,!1))},this.getSize=function(P){return P.set(We,vt)},this.setSize=function(P,K,dt=!0){if(le.isPresenting){Me("WebGLRenderer: Can't change size while VR device is presenting.");return}We=P,vt=K,e.width=Math.floor(P*yt),e.height=Math.floor(K*yt),dt===!0&&(e.style.width=P+"px",e.style.height=K+"px"),B!==null&&B.setSize(e.width,e.height),this.setViewport(0,0,P,K)},this.getDrawingBufferSize=function(P){return P.set(We*yt,vt*yt).floor()},this.setDrawingBufferSize=function(P,K,dt){We=P,vt=K,yt=dt,e.width=Math.floor(P*dt),e.height=Math.floor(K*dt),this.setViewport(0,0,P,K)},this.setEffects=function(P){if(N===Si){we("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(P){for(let K=0;K<P.length;K++)if(P[K].isOutputPass===!0){Me("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}B.setEffects(P||[])},this.getCurrentViewport=function(P){return P.copy(bt)},this.getViewport=function(P){return P.copy(Kt)},this.setViewport=function(P,K,dt,ct){P.isVector4?Kt.set(P.x,P.y,P.z,P.w):Kt.set(P,K,dt,ct),E.viewport(bt.copy(Kt).multiplyScalar(yt).round())},this.getScissor=function(P){return P.copy(ge)},this.setScissor=function(P,K,dt,ct){P.isVector4?ge.set(P.x,P.y,P.z,P.w):ge.set(P,K,dt,ct),E.scissor(Vt.copy(ge).multiplyScalar(yt).round())},this.getScissorTest=function(){return ee},this.setScissorTest=function(P){E.setScissorTest(ee=P)},this.setOpaqueSort=function(P){Lt=P},this.setTransparentSort=function(P){de=P},this.getClearColor=function(P){return P.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor(...arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha(...arguments)},this.clear=function(P=!0,K=!0,dt=!0){let ct=0;if(P){let ut=!1;if(At!==null){let jt=At.texture.format;ut=y.has(jt)}if(ut){let jt=At.texture.type,se=m.has(jt),Ft=Te.getClearColor(),Ot=Te.getClearAlpha(),Ut=Ft.r,me=Ft.g,Ie=Ft.b;se?($[0]=Ut,$[1]=me,$[2]=Ie,$[3]=Ot,X.clearBufferuiv(X.COLOR,0,$)):(V[0]=Ut,V[1]=me,V[2]=Ie,V[3]=Ot,X.clearBufferiv(X.COLOR,0,V))}else ct|=X.COLOR_BUFFER_BIT}K&&(ct|=X.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),dt&&(ct|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ct!==0&&X.clear(ct)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(P){P.setRenderer(this),ot=P},this.dispose=function(){e.removeEventListener("webglcontextlost",Je,!1),e.removeEventListener("webglcontextrestored",ze,!1),e.removeEventListener("webglcontextcreationerror",qn,!1),Te.dispose(),Zt.dispose(),Yt.dispose(),lt.dispose(),Nt.dispose(),Mt.dispose(),Qt.dispose(),Tt.dispose(),kt.dispose(),le.dispose(),le.removeEventListener("sessionstart",Mi),le.removeEventListener("sessionend",Pi),Li.stop()};function Je(P){P.preventDefault(),Wo("WebGLRenderer: Context Lost."),Z=!0}function ze(){Wo("WebGLRenderer: Context Restored."),Z=!1;let P=at.autoReset,K=xe.enabled,dt=xe.autoUpdate,ct=xe.needsUpdate,ut=xe.type;he(),at.autoReset=P,xe.enabled=K,xe.autoUpdate=dt,xe.needsUpdate=ct,xe.type=ut}function qn(P){we("WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function fi(P){let K=P.target;K.removeEventListener("dispose",fi),pr(K)}function pr(P){to(P),lt.remove(P)}function to(P){let K=lt.get(P).programs;K!==void 0&&(K.forEach(function(dt){kt.releaseProgram(dt)}),P.isShaderMaterial&&kt.releaseShaderCache(P))}this.renderBufferDirect=function(P,K,dt,ct,ut,jt){K===null&&(K=pe);let se=ut.isMesh&&ut.matrixWorld.determinantAffine()<0,Ft=Vl(P,K,dt,ct,ut);E.setMaterial(ct,se);let Ot=dt.index,Ut=1;if(ct.wireframe===!0){if(Ot=ft.getWireframeAttribute(dt),Ot===void 0)return;Ut=2}let me=dt.drawRange,Ie=dt.attributes.position,Bt=me.start*Ut,De=(me.start+me.count)*Ut;jt!==null&&(Bt=Math.max(Bt,jt.start*Ut),De=Math.min(De,(jt.start+jt.count)*Ut)),Ot!==null?(Bt=Math.max(Bt,0),De=Math.min(De,Ot.count)):Ie!=null&&(Bt=Math.max(Bt,0),De=Math.min(De,Ie.count));let fe=De-Bt;if(fe<0||fe===1/0)return;Qt.setup(ut,ct,Ft,dt,Ot);let Et,ae=Gt;if(Ot!==null&&(Et=Ht.get(Ot),ae=St,ae.setIndex(Et)),ut.isMesh)ct.wireframe===!0?(E.setLineWidth(ct.wireframeLinewidth*Ae()),ae.setMode(X.LINES)):ae.setMode(X.TRIANGLES);else if(ut.isLine){let Ce=ct.linewidth;Ce===void 0&&(Ce=1),E.setLineWidth(Ce*Ae()),ut.isLineSegments?ae.setMode(X.LINES):ut.isLineLoop?ae.setMode(X.LINE_LOOP):ae.setMode(X.LINE_STRIP)}else ut.isPoints?ae.setMode(X.POINTS):ut.isSprite&&ae.setMode(X.TRIANGLES);if(ut.isBatchedMesh)if(Fe.get("WEBGL_multi_draw"))ae.renderMultiDraw(ut._multiDrawStarts,ut._multiDrawCounts,ut._multiDrawCount);else{let Ce=ut._multiDrawStarts,ie=ut._multiDrawCounts,Dn=ut._multiDrawCount,ke=Ot?Ht.get(Ot).bytesPerElement:1,ii=lt.get(ct).currentProgram.getUniforms();for(let Vn=0;Vn<Dn;Vn++)ii.setValue(X,"_gl_DrawID",Vn),ae.render(Ce[Vn]/ke,ie[Vn])}else if(ut.isInstancedMesh)ae.renderInstances(Bt,fe,ut.count);else if(dt.isInstancedBufferGeometry){let Ce=dt._maxInstanceCount!==void 0?dt._maxInstanceCount:1/0,ie=Math.min(dt.instanceCount,Ce);ae.renderInstances(Bt,fe,ie)}else ae.render(Bt,fe)};function eo(P,K,dt,ct){ot!==null&&P.isNodeMaterial&&ot.setObject(ct,P),Rt===!0&&ue.setState(P,dt,!1),P.transparent===!0&&P.side===fs&&P.forceSinglePass===!1?(P.side=ui,P.needsUpdate=!0,Gs(P,K,ct),P.side=ar,P.needsUpdate=!0,Gs(P,K,ct),P.side=fs):Gs(P,K,ct)}this.compile=function(P,K,dt=null){dt===null&&(dt=P),ot!==null&&ot.renderStart(P,K,dt),k=Yt.get(dt),k.init(K),R.push(k),dt.traverseVisible(function(ut){ut.isLight&&ut.layers.test(K.layers)&&(k.pushLight(ut),ut.castShadow&&k.pushShadow(ut))}),P!==dt&&P.traverseVisible(function(ut){ut.isLight&&ut.layers.test(K.layers)&&(k.pushLight(ut),ut.castShadow&&k.pushShadow(ut))}),k.setupLights(),ot!==null&&ot.updateLights(k.state.lightsArray),H=this.localClippingEnabled,Rt=ue.init(this.clippingPlanes,H),Rt===!0&&ue.setGlobalState(this.clippingPlanes,K),ot!==null&&xe.render(k.state.shadowsArray,dt,K);let ct=new Set;return P.traverse(function(ut){if(!(ut.isMesh||ut.isPoints||ut.isLine||ut.isSprite))return;let jt=ut.material;if(jt)if(Array.isArray(jt))for(let se=0;se<jt.length;se++){let Ft=jt[se];eo(Ft,dt,K,ut),ct.add(Ft)}else eo(jt,dt,K,ut),ct.add(jt)}),k=R.pop(),ot!==null&&ot.renderEnd(),ct},this.compileAsync=function(P,K,dt=null){let ct=this.compile(P,K,dt);return new Promise(ut=>{function jt(){if(ct.forEach(function(se){let Ot=lt.get(se).currentProgram;(Ot===void 0||Ot.isReady())&&ct.delete(se)}),ct.size===0){ut(P);return}setTimeout(jt,10)}Fe.get("KHR_parallel_shader_compile")!==null?jt():setTimeout(jt,10)})};let mr=null;function zn(P){mr&&mr(P)}function Mi(){Li.stop()}function Pi(){Li.start()}let Li=new Ag;Li.setAnimationLoop(zn),typeof self<"u"&&Li.setContext(self),this.setAnimationLoop=function(P){mr=P,le.setAnimationLoop(P),P===null?Li.stop():Li.start()},le.addEventListener("sessionstart",Mi),le.addEventListener("sessionend",Pi),this.render=function(P,K){if(K!==void 0&&K.isCamera!==!0){we("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Z===!0)return;ot!==null&&ot.renderStart(P,K);let dt=le.enabled===!0&&le.isPresenting===!0,ct=B!==null&&(At===null||dt)&&B.begin(q,At);if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(B===null||B.isCompositing()===!1)&&(le.cameraAutoUpdate===!0&&le.updateCamera(K),K=le.getCamera()),P.isScene===!0&&P.onBeforeRender(q,P,K,At),k=Yt.get(P,R.length),k.init(K),k.state.textureUnits=mt.getTextureUnits(),R.push(k),Pt.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),rt.setFromProjectionMatrix(Pt,Yi,K.reversedDepth),H=this.localClippingEnabled,Rt=ue.init(this.clippingPlanes,H),T=Zt.get(P,Y.length),T.init(),Y.push(T),le.enabled===!0&&le.isPresenting===!0){let se=q.xr.getDepthSensingMesh();se!==null&&Hs(se,K,-1/0,q.sortObjects)}Hs(P,K,0,q.sortObjects),T.finish(),ot!==null&&ot.updateLights(k.state.lightsArray),q.sortObjects===!0&&T.sort(Lt,de),Se=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,Se&&Te.addToRenderList(T,P),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Rt===!0&&ue.beginShadows();let ut=k.state.shadowsArray;if(xe.render(ut,P,K),Rt===!0&&ue.endShadows(),(ct&&B.hasRenderPass())===!1){let se=T.opaque,Ft=T.transmissive;if(k.setupLights(),K.isArrayCamera){let Ot=K.cameras;if(Ft.length>0)for(let Ut=0,me=Ot.length;Ut<me;Ut++){let Ie=Ot[Ut];no(se,Ft,P,Ie)}Se&&Te.render(P);for(let Ut=0,me=Ot.length;Ut<me;Ut++){let Ie=Ot[Ut];qr(T,P,Ie,Ie.viewport)}}else Ft.length>0&&no(se,Ft,P,K),Se&&Te.render(P),qr(T,P,K)}At!==null&&_t===0&&(mt.updateMultisampleRenderTarget(At),mt.updateRenderTargetMipmap(At)),ct&&B.end(q),P.isScene===!0&&P.onAfterRender(q,P,K),Qt.resetDefaultState(),xt=-1,wt=null,R.pop(),R.length>0?(k=R[R.length-1],mt.setTextureUnits(k.state.textureUnits),Rt===!0&&ue.setGlobalState(q.clippingPlanes,k.state.camera)):k=null,Y.pop(),Y.length>0?T=Y[Y.length-1]:T=null,ot!==null&&ot.renderEnd()};function Hs(P,K,dt,ct){if(P.visible===!1)return;if(P.layers.test(K.layers)){if(P.isGroup)dt=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(K);else if(P.isLightProbeGrid)k.pushLightProbeGrid(P);else if(P.isLight)k.pushLight(P),P.castShadow&&k.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||P.intersectsFrustum(rt)){ct&&ce.setFromMatrixPosition(P.matrixWorld).applyMatrix4(Pt);let se=Mt.update(P),Ft=P.material;Ft.visible&&T.push(P,se,Ft,dt,ce.z,null,K)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||P.intersectsFrustum(rt))){let se=Mt.update(P),Ft=P.material;if(ct&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),ce.copy(P.boundingSphere.center)):(se.boundingSphere===null&&se.computeBoundingSphere(),ce.copy(se.boundingSphere.center)),ce.applyMatrix4(P.matrixWorld).applyMatrix4(Pt)),Array.isArray(Ft)){let Ot=se.groups;for(let Ut=0,me=Ot.length;Ut<me;Ut++){let Ie=Ot[Ut],Bt=Ft[Ie.materialIndex];Bt&&Bt.visible&&T.push(P,se,Bt,dt,ce.z,Ie,K)}}else Ft.visible&&T.push(P,se,Ft,dt,ce.z,null,K)}}let jt=P.children;for(let se=0,Ft=jt.length;se<Ft;se++)Hs(jt[se],K,dt,ct)}function qr(P,K,dt,ct){let{opaque:ut,transmissive:jt,transparent:se}=P;k.setupLightsView(dt),Rt===!0&&ue.setGlobalState(q.clippingPlanes,dt),ct&&E.viewport(bt.copy(ct)),ut.length>0&&es(ut,K,dt),jt.length>0&&es(jt,K,dt),se.length>0&&es(se,K,dt),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function no(P,K,dt,ct){if((dt.isScene===!0?dt.overrideMaterial:null)!==null)return;if(k.state.transmissionRenderTarget[ct.id]===void 0){let Bt=Fe.has("EXT_color_buffer_half_float")||Fe.has("EXT_color_buffer_float");k.state.transmissionRenderTarget[ct.id]=new vi(1,1,{generateMipmaps:!0,type:Bt?Qi:Si,minFilter:lr,samples:Math.max(4,F.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ye.workingColorSpace})}let jt=k.state.transmissionRenderTarget[ct.id],se=ct.viewport||bt;jt.setSize(se.z*q.transmissionResolutionScale,se.w*q.transmissionResolutionScale);let Ft=q.getRenderTarget(),Ot=q.getActiveCubeFace(),Ut=q.getActiveMipmapLevel();q.setRenderTarget(jt),q.getClearColor(je),Oe=q.getClearAlpha(),Oe<1&&q.setClearColor(16777215,.5),q.clear(),Se&&Te.render(dt);let me=q.toneMapping;q.toneMapping=ji;let Ie=ct.viewport;if(ct.viewport!==void 0&&(ct.viewport=void 0),k.setupLightsView(ct),Rt===!0&&ue.setGlobalState(q.clippingPlanes,ct),es(P,dt,ct),mt.updateMultisampleRenderTarget(jt),mt.updateRenderTargetMipmap(jt),Fe.has("WEBGL_multisampled_render_to_texture")===!1){let Bt=!1;for(let De=0,fe=K.length;De<fe;De++){let Et=K[De],{object:ae,geometry:Ce,material:ie,group:Dn}=Et;if(ie.side===fs&&ae.layers.test(ct.layers)){let ke=ie.side;ie.side=ui,ie.needsUpdate=!0,$l(ae,dt,ct,Ce,ie,Dn),ie.side=ke,ie.needsUpdate=!0,Bt=!0}}Bt===!0&&(mt.updateMultisampleRenderTarget(jt),mt.updateRenderTargetMipmap(jt))}q.setRenderTarget(Ft,Ot,Ut),q.setClearColor(je,Oe),Ie!==void 0&&(ct.viewport=Ie),q.toneMapping=me}function es(P,K,dt){let ct=K.isScene===!0?K.overrideMaterial:null;for(let ut=0,jt=P.length;ut<jt;ut++){let se=P[ut],{object:Ft,geometry:Ot,group:Ut}=se,me=se.material;me.allowOverride===!0&&ct!==null&&(me=ct),Ft.layers.test(dt.layers)&&$l(Ft,K,dt,Ot,me,Ut)}}function $l(P,K,dt,ct,ut,jt){ot!==null&&ut.isNodeMaterial&&ot.setObject(P,ut),P.onBeforeRender(q,K,dt,ct,ut,jt),P.modelViewMatrix.multiplyMatrices(dt.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),ut.onBeforeRender(q,K,dt,ct,P,jt),ut.transparent===!0&&ut.side===fs&&ut.forceSinglePass===!1?(ut.side=ui,ut.needsUpdate=!0,q.renderBufferDirect(dt,K,ct,ut,P,jt),ut.side=ar,ut.needsUpdate=!0,q.renderBufferDirect(dt,K,ct,ut,P,jt),ut.side=fs):q.renderBufferDirect(dt,K,ct,ut,P,jt),P.onAfterRender(q,K,dt,ct,ut,jt)}function Gs(P,K,dt){K.isScene!==!0&&(K=pe);let ct=lt.get(P),ut=k.state.lights,jt=k.state.shadowsArray,se=ut.state.version,Ft=kt.getParameters(P,ut.state,jt,K,dt,k.state.lightProbeGridArray),Ot=kt.getProgramCacheKey(Ft),Ut=ct.programs;ct.environment=P.isMeshStandardMaterial||P.isMeshLambertMaterial||P.isMeshPhongMaterial?K.environment:null,ct.fog=K.fog;let me=P.isMeshStandardMaterial||P.isMeshLambertMaterial&&!P.envMap||P.isMeshPhongMaterial&&!P.envMap;ct.envMap=Nt.get(P.envMap||ct.environment,me),ct.envMapRotation=ct.environment!==null&&P.envMap===null?K.environmentRotation:P.envMapRotation,Ut===void 0&&(P.addEventListener("dispose",fi),Ut=new Map,ct.programs=Ut);let Ie=Ut.get(Ot);if(Ie!==void 0){if(ct.currentProgram===Ie&&ct.lightsStateVersion===se)return gr(P,Ft),Ie}else Ft.uniforms=kt.getUniforms(P),ot!==null&&P.isNodeMaterial&&ot.build(P,dt,Ft),P.onBeforeCompile(Ft,q),Ie=kt.acquireProgram(Ft,Ot),Ut.set(Ot,Ie),ct.uniforms=Ft.uniforms;let Bt=ct.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Bt.clippingPlanes=ue.uniform),gr(P,Ft),ct.needsLights=io(P),ct.lightsStateVersion=se,ct.needsLights&&(Bt.ambientLightColor.value=ut.state.ambient,Bt.lightProbe.value=ut.state.probe,Bt.sunLights.value=ut.state.sun,Bt.sunLightShadows.value=ut.state.sunShadow,Bt.directionalLights.value=ut.state.directional,Bt.directionalLightShadows.value=ut.state.directionalShadow,Bt.spotLights.value=ut.state.spot,Bt.spotLightShadows.value=ut.state.spotShadow,Bt.rectAreaLights.value=ut.state.rectArea,Bt.ltc_1.value=ut.state.rectAreaLTC1,Bt.ltc_2.value=ut.state.rectAreaLTC2,Bt.pointLights.value=ut.state.point,Bt.pointLightShadows.value=ut.state.pointShadow,Bt.hemisphereLights.value=ut.state.hemi,Bt.sunShadowMatrix.value=ut.state.sunShadowMatrix,Bt.sunShadowCascade.value=ut.state.sunShadowCascade,Bt.directionalShadowMatrix.value=ut.state.directionalShadowMatrix,Bt.spotLightMatrix.value=ut.state.spotLightMatrix,Bt.spotLightMap.value=ut.state.spotLightMap,Bt.pointShadowMatrix.value=ut.state.pointShadowMatrix),ct.lightProbeGrid=k.state.lightProbeGridArray.length>0,ct.currentProgram=Ie,ct.uniformsList=null,Ie}function ns(P){if(P.uniformsList===null){let K=P.currentProgram.getUniforms();P.uniformsList=Wa.seqWithValue(K.seq,P.uniforms)}return P.uniformsList}function gr(P,K){let dt=lt.get(P);dt.outputColorSpace=K.outputColorSpace,dt.batching=K.batching,dt.batchingColor=K.batchingColor,dt.instancing=K.instancing,dt.instancingColor=K.instancingColor,dt.instancingMorph=K.instancingMorph,dt.skinning=K.skinning,dt.morphTargets=K.morphTargets,dt.morphNormals=K.morphNormals,dt.morphColors=K.morphColors,dt.morphTargetsCount=K.morphTargetsCount,dt.numClippingPlanes=K.numClippingPlanes,dt.numIntersection=K.numClipIntersection,dt.vertexAlphas=K.vertexAlphas,dt.vertexTangents=K.vertexTangents,dt.toneMapping=K.toneMapping}function zl(P,K){if(P.length===0)return null;if(P.length===1)return P[0].texture!==null?P[0]:null;D.setFromMatrixPosition(K.matrixWorld);for(let dt=0,ct=P.length;dt<ct;dt++){let ut=P[dt];if(ut.texture!==null&&ut.boundingBox.containsPoint(D))return ut}return null}function Vl(P,K,dt,ct,ut){K.isScene!==!0&&(K=pe),mt.resetTextureUnits();let jt=K.fog,se=ct.isMeshStandardMaterial||ct.isMeshLambertMaterial||ct.isMeshPhongMaterial?K.environment:null,Ft=At===null?q.outputColorSpace:At.isXRRenderTarget===!0?At.texture.colorSpace:Ye.workingColorSpace,Ot=ct.isMeshStandardMaterial||ct.isMeshLambertMaterial&&!ct.envMap||ct.isMeshPhongMaterial&&!ct.envMap,Ut=Nt.get(ct.envMap||se,Ot),me=ct.vertexColors===!0&&!!dt.attributes.color&&dt.attributes.color.itemSize===4,Ie=!!dt.attributes.tangent&&(!!ct.normalMap||ct.anisotropy>0),Bt=!!dt.morphAttributes.position,De=!!dt.morphAttributes.normal,fe=!!dt.morphAttributes.color,Et=ji;ct.toneMapped&&(At===null||At.isXRRenderTarget===!0)&&(Et=q.toneMapping);let ae=dt.morphAttributes.position||dt.morphAttributes.normal||dt.morphAttributes.color,Ce=ae!==void 0?ae.length:0,ie=lt.get(ct),Dn=k.state.lights;if(Rt===!0&&(H===!0||P!==wt)){let un=P===wt&&ct.id===xt;ue.setState(ct,P,un)}let ke=!1;ct.version===ie.__version?(ie.needsLights&&ie.lightsStateVersion!==Dn.state.version||ie.outputColorSpace!==Ft||ut.isBatchedMesh&&ie.batching===!1||!ut.isBatchedMesh&&ie.batching===!0||ut.isBatchedMesh&&ie.batchingColor===!0&&ut._colorsTexture===null||ut.isBatchedMesh&&ie.batchingColor===!1&&ut._colorsTexture!==null||ut.isInstancedMesh&&ie.instancing===!1||!ut.isInstancedMesh&&ie.instancing===!0||ut.isSkinnedMesh&&ie.skinning===!1||!ut.isSkinnedMesh&&ie.skinning===!0||ut.isInstancedMesh&&ie.instancingColor===!0&&ut.instanceColor===null||ut.isInstancedMesh&&ie.instancingColor===!1&&ut.instanceColor!==null||ut.isInstancedMesh&&ie.instancingMorph===!0&&ut.morphTexture===null||ut.isInstancedMesh&&ie.instancingMorph===!1&&ut.morphTexture!==null||ie.envMap!==Ut||ct.fog===!0&&ie.fog!==jt||ie.numClippingPlanes!==void 0&&(ie.numClippingPlanes!==ue.numPlanes||ie.numIntersection!==ue.numIntersection)||ie.vertexAlphas!==me||ie.vertexTangents!==Ie||ie.morphTargets!==Bt||ie.morphNormals!==De||ie.morphColors!==fe||ie.toneMapping!==Et||ie.morphTargetsCount!==Ce||!!ie.lightProbeGrid!=k.state.lightProbeGridArray.length>0)&&(ke=!0):(ke=!0,ie.__version=ct.version);let ii=ie.currentProgram;ke===!0&&(ii=Gs(ct,K,ut),ot&&ct.isNodeMaterial&&ot.onUpdateProgram(ct,ii,ie));let Vn=!1,wi=!1,Yn=!1,nn=ii.getUniforms(),xn=ie.uniforms;if(E.useProgram(ii.program)&&(Vn=!0,wi=!0,Yn=!0),ct.id!==xt&&(xt=ct.id,wi=!0),ie.needsLights){let un=zl(k.state.lightProbeGridArray,ut);ie.lightProbeGrid!==un&&(ie.lightProbeGrid=un,wi=!0)}if(Vn||wt!==P){E.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),nn.setValue(X,"projectionMatrix",P.projectionMatrix),nn.setValue(X,"viewMatrix",P.matrixWorldInverse);let ss=nn.map.cameraPosition;ss!==void 0&&ss.setValue(X,$t.setFromMatrixPosition(P.matrixWorld)),F.logarithmicDepthBuffer&&nn.setValue(X,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(ct.isMeshPhongMaterial||ct.isMeshToonMaterial||ct.isMeshLambertMaterial||ct.isMeshBasicMaterial||ct.isMeshStandardMaterial||ct.isShaderMaterial)&&nn.setValue(X,"isOrthographic",P.isOrthographicCamera===!0),wt!==P&&(wt=P,wi=!0,Yn=!0)}if(ie.needsLights&&(Dn.state.sunShadowMap.length>0&&nn.setValue(X,"sunShadowMap",Dn.state.sunShadowMap,mt),Dn.state.directionalShadowMap.length>0&&nn.setValue(X,"directionalShadowMap",Dn.state.directionalShadowMap,mt),Dn.state.spotShadowMap.length>0&&nn.setValue(X,"spotShadowMap",Dn.state.spotShadowMap,mt),Dn.state.pointShadowMap.length>0&&nn.setValue(X,"pointShadowMap",Dn.state.pointShadowMap,mt)),ut.isSkinnedMesh){nn.setOptional(X,ut,"bindMatrix"),nn.setOptional(X,ut,"bindMatrixInverse");let un=ut.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),nn.setValue(X,"boneTexture",un.boneTexture,mt))}ut.isBatchedMesh&&(nn.setOptional(X,ut,"batchingTexture"),nn.setValue(X,"batchingTexture",ut._matricesTexture,mt),nn.setOptional(X,ut,"batchingIdTexture"),nn.setValue(X,"batchingIdTexture",ut._indirectTexture,mt),nn.setOptional(X,ut,"batchingColorTexture"),ut._colorsTexture!==null&&nn.setValue(X,"batchingColorTexture",ut._colorsTexture,mt));let is=dt.morphAttributes;if((is.position!==void 0||is.normal!==void 0||is.color!==void 0)&&et.update(ut,dt,ii),(wi||ie.receiveShadow!==ut.receiveShadow)&&(ie.receiveShadow=ut.receiveShadow,nn.setValue(X,"receiveShadow",ut.receiveShadow)),(ct.isMeshStandardMaterial||ct.isMeshLambertMaterial||ct.isMeshPhongMaterial)&&ct.envMap===null&&K.environment!==null&&(xn.envMapIntensity.value=K.environmentIntensity),xn.dfgLUT!==void 0&&(xn.dfgLUT.value=L1()),wi){if(nn.setValue(X,"toneMappingExposure",q.toneMappingExposure),ie.needsLights&&Hl(xn,Yn),jt&&ct.fog===!0&&Dt.refreshFogUniforms(xn,jt),Dt.refreshMaterialUniforms(xn,ct,yt,vt,k.state.transmissionRenderTarget[P.id]),ie.needsLights&&ie.lightProbeGrid){let un=ie.lightProbeGrid;xn.probesSH.value=un.texture,xn.probesMin.value.copy(un.boundingBox.min),xn.probesMax.value.copy(un.boundingBox.max),xn.probesResolution.value.copy(un.resolution)}Wa.upload(X,ns(ie),xn,mt)}if(ct.isShaderMaterial&&ct.uniformsNeedUpdate===!0&&(Wa.upload(X,ns(ie),xn,mt),ct.uniformsNeedUpdate=!1),ct.isSpriteMaterial&&nn.setValue(X,"center",ut.center),nn.setValue(X,"modelViewMatrix",ut.modelViewMatrix),nn.setValue(X,"normalMatrix",ut.normalMatrix),nn.setValue(X,"modelMatrix",ut.matrixWorld),ct.uniformsGroups!==void 0){let un=ct.uniformsGroups;for(let ss=0,Ws=un.length;ss<Ws;ss++){let ro=un[ss];Tt.update(ro,ii),Tt.bind(ro,ii)}}return ii}function Hl(P,K){P.ambientLightColor.needsUpdate=K,P.lightProbe.needsUpdate=K,P.sunLights.needsUpdate=K,P.sunLightShadows.needsUpdate=K,P.directionalLights.needsUpdate=K,P.directionalLightShadows.needsUpdate=K,P.pointLights.needsUpdate=K,P.pointLightShadows.needsUpdate=K,P.spotLights.needsUpdate=K,P.spotLightShadows.needsUpdate=K,P.rectAreaLights.needsUpdate=K,P.hemisphereLights.needsUpdate=K}function io(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return pt},this.getActiveMipmapLevel=function(){return _t},this.getRenderTarget=function(){return At},this.setRenderTargetTextures=function(P,K,dt){let ct=lt.get(P);ct.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,ct.__autoAllocateDepthBuffer===!1&&(ct.__useRenderToTexture=!1),lt.get(P.texture).__webglTexture=K,lt.get(P.depthTexture).__webglTexture=ct.__autoAllocateDepthBuffer?void 0:dt,ct.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,K){let dt=lt.get(P);dt.__webglFramebuffer=K,dt.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(P,K=0,dt=0){At=P,pt=K,_t=dt;let ct=null,ut=!1,jt=!1;if(P){let Ft=lt.get(P);if(Ft.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(X.FRAMEBUFFER,Ft.__webglFramebuffer),bt.copy(P.viewport),Vt.copy(P.scissor),ne=P.scissorTest,E.viewport(bt),E.scissor(Vt),E.setScissorTest(ne),xt=-1;return}else if(Ft.__webglFramebuffer===void 0)mt.setupRenderTarget(P);else if(Ft.__hasExternalTextures)mt.rebindTextures(P,lt.get(P.texture).__webglTexture,lt.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){let me=P.depthTexture;if(Ft.__boundDepthTexture!==me){if(me!==null&&lt.has(me)&&(P.width!==me.image.width||P.height!==me.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");mt.setupDepthRenderbuffer(P)}}let Ot=P.texture;(Ot.isData3DTexture||Ot.isDataArrayTexture||Ot.isCompressedArrayTexture)&&(jt=!0);let Ut=lt.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Ut[K])?ct=Ut[K][dt]:ct=Ut[K],ut=!0):P.samples>0&&mt.useMultisampledRTT(P)===!1?ct=lt.get(P).__webglMultisampledFramebuffer:Array.isArray(Ut)?ct=Ut[dt]:ct=Ut,bt.copy(P.viewport),Vt.copy(P.scissor),ne=P.scissorTest}else bt.copy(Kt).multiplyScalar(yt).floor(),Vt.copy(ge).multiplyScalar(yt).floor(),ne=ee;if(dt!==0&&(ct=ht),E.bindFramebuffer(X.FRAMEBUFFER,ct)&&E.drawBuffers(P,ct),E.viewport(bt),E.scissor(Vt),E.setScissorTest(ne),ut){let Ft=lt.get(P.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ft.__webglTexture,dt)}else if(jt){let Ft=K;for(let Ot=0;Ot<P.textures.length;Ot++){let Ut=lt.get(P.textures[Ot]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+Ot,Ut.__webglTexture,dt,Ft)}}else if(P!==null&&dt!==0){let Ft=lt.get(P.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Ft.__webglTexture,dt)}xt=-1};function so(P){let K=lt.get(P);return(K.__readFormat!==P.format||K.__readType!==P.type)&&(K.__readFormat=P.format,K.__readType=P.type,K.__formatReadable=F.textureFormatReadable(P.format),K.__typeReadable=F.textureTypeReadable(P.type)),K}this.readRenderTargetPixels=function(P,K,dt,ct,ut,jt,se,Ft=0){if(!(P&&P.isWebGLRenderTarget)){we("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=lt.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&se!==void 0&&(Ot=Ot[se]),Ot){E.bindFramebuffer(X.FRAMEBUFFER,Ot);try{let Ut=P.textures[Ft],me=Ut.format,Ie=Ut.type;P.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Ft);let Bt=so(Ut);if(Bt.__formatReadable===!1){we("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Bt.__typeReadable===!1){we("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=P.width-ct&&dt>=0&&dt<=P.height-ut&&X.readPixels(K,dt,ct,ut,Jt.convert(me),Jt.convert(Ie),jt)}finally{let Ut=At!==null?lt.get(At).__webglFramebuffer:null;E.bindFramebuffer(X.FRAMEBUFFER,Ut)}}},this.readRenderTargetPixelsAsync=async function(P,K,dt,ct,ut,jt,se,Ft=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ot=lt.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&se!==void 0&&(Ot=Ot[se]),Ot)if(K>=0&&K<=P.width-ct&&dt>=0&&dt<=P.height-ut){E.bindFramebuffer(X.FRAMEBUFFER,Ot);let Ut=P.textures[Ft],me=Ut.format,Ie=Ut.type;P.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Ft);let Bt=so(Ut);if(Bt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Bt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let De=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,De),X.bufferData(X.PIXEL_PACK_BUFFER,jt.byteLength,X.STREAM_READ),X.readPixels(K,dt,ct,ut,Jt.convert(me),Jt.convert(Ie),0),X.bindBuffer(X.PIXEL_PACK_BUFFER,null);let fe=At!==null?lt.get(At).__webglFramebuffer:null;E.bindFramebuffer(X.FRAMEBUFFER,fe);let Et=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await j0(X,Et,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,De),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,jt),X.bindBuffer(X.PIXEL_PACK_BUFFER,null),X.deleteBuffer(De),X.deleteSync(Et),jt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,K=null,dt=0){let ct=Math.pow(2,-dt),ut=Math.floor(P.image.width*ct),jt=Math.floor(P.image.height*ct),se=K!==null?K.x:0,Ft=K!==null?K.y:0;mt.setTexture2D(P,0),X.copyTexSubImage2D(X.TEXTURE_2D,dt,0,0,se,Ft,ut,jt),E.unbindTexture()},this.copyTextureToTexture=function(P,K,dt=null,ct=null,ut=0,jt=0){let se,Ft,Ot,Ut,me,Ie,Bt,De,fe,Et=P.isCompressedTexture?P.mipmaps[jt]:P.image;if(dt!==null)se=dt.max.x-dt.min.x,Ft=dt.max.y-dt.min.y,Ot=dt.isBox3?dt.max.z-dt.min.z:1,Ut=dt.min.x,me=dt.min.y,Ie=dt.isBox3?dt.min.z:0;else{let xn=Math.pow(2,-ut);se=Math.floor(Et.width*xn),Ft=Math.floor(Et.height*xn),P.isDataArrayTexture?Ot=Et.depth:P.isData3DTexture?Ot=Math.floor(Et.depth*xn):Ot=1,Ut=0,me=0,Ie=0}ct!==null?(Bt=ct.x,De=ct.y,fe=ct.z):(Bt=0,De=0,fe=0);let ae=Jt.convert(K.format),Ce=Jt.convert(K.type),ie;K.isData3DTexture?(mt.setTexture3D(K,0),ie=X.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(mt.setTexture2DArray(K,0),ie=X.TEXTURE_2D_ARRAY):(mt.setTexture2D(K,0),ie=X.TEXTURE_2D),E.activeTexture(X.TEXTURE0),E.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,K.flipY),E.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),E.pixelStorei(X.UNPACK_ALIGNMENT,K.unpackAlignment);let Dn=E.getParameter(X.UNPACK_ROW_LENGTH),ke=E.getParameter(X.UNPACK_IMAGE_HEIGHT),ii=E.getParameter(X.UNPACK_SKIP_PIXELS),Vn=E.getParameter(X.UNPACK_SKIP_ROWS),wi=E.getParameter(X.UNPACK_SKIP_IMAGES);E.pixelStorei(X.UNPACK_ROW_LENGTH,Et.width),E.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Et.height),E.pixelStorei(X.UNPACK_SKIP_PIXELS,Ut),E.pixelStorei(X.UNPACK_SKIP_ROWS,me),E.pixelStorei(X.UNPACK_SKIP_IMAGES,Ie);let Yn=P.isDataArrayTexture||P.isData3DTexture,nn=K.isDataArrayTexture||K.isData3DTexture;if(P.isDepthTexture){let xn=lt.get(P),is=lt.get(K),un=lt.get(xn.__renderTarget),ss=lt.get(is.__renderTarget);E.bindFramebuffer(X.READ_FRAMEBUFFER,un.__webglFramebuffer),E.bindFramebuffer(X.DRAW_FRAMEBUFFER,ss.__webglFramebuffer);for(let Ws=0;Ws<Ot;Ws++)Yn&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,lt.get(P).__webglTexture,ut,Ie+Ws),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,lt.get(K).__webglTexture,jt,fe+Ws)),X.blitFramebuffer(Ut,me,se,Ft,Bt,De,se,Ft,X.DEPTH_BUFFER_BIT,X.NEAREST);E.bindFramebuffer(X.READ_FRAMEBUFFER,null),E.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(ut!==0||P.isRenderTargetTexture||lt.has(P)){let xn=lt.get(P),is=lt.get(K);E.bindFramebuffer(X.READ_FRAMEBUFFER,tt),E.bindFramebuffer(X.DRAW_FRAMEBUFFER,st);for(let un=0;un<Ot;un++)Yn?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,xn.__webglTexture,ut,Ie+un):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,xn.__webglTexture,ut),nn?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,is.__webglTexture,jt,fe+un):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,is.__webglTexture,jt),ut!==0?X.blitFramebuffer(Ut,me,se,Ft,Bt,De,se,Ft,X.COLOR_BUFFER_BIT,X.NEAREST):nn?X.copyTexSubImage3D(ie,jt,Bt,De,fe+un,Ut,me,se,Ft):X.copyTexSubImage2D(ie,jt,Bt,De,Ut,me,se,Ft);E.bindFramebuffer(X.READ_FRAMEBUFFER,null),E.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else nn?P.isDataTexture||P.isData3DTexture?X.texSubImage3D(ie,jt,Bt,De,fe,se,Ft,Ot,ae,Ce,Et.data):K.isCompressedArrayTexture?X.compressedTexSubImage3D(ie,jt,Bt,De,fe,se,Ft,Ot,ae,Et.data):X.texSubImage3D(ie,jt,Bt,De,fe,se,Ft,Ot,ae,Ce,Et):P.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,jt,Bt,De,se,Ft,ae,Ce,Et.data):P.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,jt,Bt,De,Et.width,Et.height,ae,Et.data):X.texSubImage2D(X.TEXTURE_2D,jt,Bt,De,se,Ft,ae,Ce,Et);E.pixelStorei(X.UNPACK_ROW_LENGTH,Dn),E.pixelStorei(X.UNPACK_IMAGE_HEIGHT,ke),E.pixelStorei(X.UNPACK_SKIP_PIXELS,ii),E.pixelStorei(X.UNPACK_SKIP_ROWS,Vn),E.pixelStorei(X.UNPACK_SKIP_IMAGES,wi),jt===0&&K.generateMipmaps&&X.generateMipmap(ie),E.unbindTexture()},this.initRenderTarget=function(P){lt.get(P).__webglFramebuffer===void 0&&mt.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?mt.setTextureCube(P,0):P.isData3DTexture?mt.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?mt.setTexture2DArray(P,0):mt.setTexture2D(P,0),E.unbindTexture()},this.resetState=function(){pt=0,_t=0,At=null,E.reset(),Qt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Ye._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ye._getUnpackColorSpace()}};var Ug=new ci,Th=new j,ts=class extends vl{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new wn(t,3)),this.setAttribute("uv",new wn(e,2))}applyMatrix4(t){let e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new rr(e,6,1);return this.setAttribute("instanceStart",new Zi(n,3,0)),this.setAttribute("instanceEnd",new Zi(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new rr(e,6,1);return this.setAttribute("instanceColorStart",new Zi(n,3,0)),this.setAttribute("instanceColorEnd",new Zi(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new dl(t.geometry)),this}fromLineSegments(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ci);let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),Ug.setFromBufferAttribute(e),this.boundingBox.union(Ug))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yi),this.boundingBox===null&&this.computeBoundingBox();let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Th.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Th)),Th.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Th));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}};qt.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Wt},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};hi.line={uniforms:Pl.merge([qt.common,qt.fog,qt.line]),vertexShader:`
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
		`};var gs=class extends kn{constructor(t){super({type:"LineMaterial",uniforms:Pl.clone(hi.line.uniforms),vertexShader:hi.line.vertexShader,fragmentShader:hi.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0!==this.worldUnits&&(this.needsUpdate=!0),t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var Qf=new on,Og=new j,Fg=new j,Gn=new on,Wn=new on,_s=new on,tp=new j,ep=new Ze,Xn=new Sl,Bg=new j,Ah=new ci,Ch=new yi,xs=new on,vs,$r;function kg(i,t,e){return xs.set(0,0,-t,1).applyMatrix4(i.projectionMatrix),xs.multiplyScalar(1/xs.w),xs.x=$r/e.width,xs.y=$r/e.height,xs.applyMatrix4(i.projectionMatrixInverse),xs.multiplyScalar(1/xs.w),Math.abs(Math.max(xs.x,xs.y))}function D1(i,t){let e=i.matrixWorld,n=i.geometry,s=n.attributes.instanceStart,r=n.attributes.instanceEnd,o=Math.min(n.instanceCount,s.count);for(let l=0,u=o;l<u;l++){Xn.start.fromBufferAttribute(s,l),Xn.end.fromBufferAttribute(r,l),Xn.applyMatrix4(e);let h=new j,d=new j;vs.distanceSqToSegment(Xn.start,Xn.end,d,h),d.distanceTo(h)<$r*.5&&t.push({point:d,pointOnLine:h,distance:vs.origin.distanceTo(d),object:i,face:null,faceIndex:l,uv:null,uv1:null})}}function N1(i,t,e){let n=t.projectionMatrix,r=i.material.resolution,o=i.matrixWorld,l=i.geometry,u=l.attributes.instanceStart,h=l.attributes.instanceEnd,d=Math.min(l.instanceCount,u.count),b=-t.near;vs.at(1,_s),_s.w=1,_s.applyMatrix4(t.matrixWorldInverse),_s.applyMatrix4(n),_s.multiplyScalar(1/_s.w),_s.x*=r.x/2,_s.y*=r.y/2,_s.z=0,tp.copy(_s),ep.multiplyMatrices(t.matrixWorldInverse,o);for(let g=0,M=d;g<M;g++){if(Gn.fromBufferAttribute(u,g),Wn.fromBufferAttribute(h,g),Gn.w=1,Wn.w=1,Gn.applyMatrix4(ep),Wn.applyMatrix4(ep),Gn.z>b&&Wn.z>b)continue;if(Gn.z>b){let V=Gn.z-Wn.z,D=(Gn.z-b)/V;Gn.lerp(Wn,D)}else if(Wn.z>b){let V=Wn.z-Gn.z,D=(Wn.z-b)/V;Wn.lerp(Gn,D)}Gn.applyMatrix4(n),Wn.applyMatrix4(n),Gn.multiplyScalar(1/Gn.w),Wn.multiplyScalar(1/Wn.w),Gn.x*=r.x/2,Gn.y*=r.y/2,Wn.x*=r.x/2,Wn.y*=r.y/2,Xn.start.copy(Gn),Xn.start.z=0,Xn.end.copy(Wn),Xn.end.z=0;let N=Xn.closestPointToPointParameter(tp,!0);Xn.at(N,Bg);let y=Lf.lerp(Gn.z,Wn.z,N),m=y>=-1&&y<=1,$=tp.distanceTo(Bg)<$r*.5;if(m&&$){Xn.start.fromBufferAttribute(u,g),Xn.end.fromBufferAttribute(h,g),Xn.start.applyMatrix4(o),Xn.end.applyMatrix4(o);let V=new j,D=new j;vs.distanceSqToSegment(Xn.start,Xn.end,D,V),e.push({point:D,pointOnLine:V,distance:vs.origin.distanceTo(D),object:i,face:null,faceIndex:g,uv:null,uv1:null})}}}var zr=class extends Bn{constructor(t=new ts,e=new gs({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,s=new Float32Array(2*e.count);for(let o=0,l=0,u=e.count;o<u;o++,l+=2)Og.fromBufferAttribute(e,o),Fg.fromBufferAttribute(n,o),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+Og.distanceTo(Fg);let r=new rr(s,2,1);return t.setAttribute("instanceDistanceStart",new Zi(r,1,0)),t.setAttribute("instanceDistanceEnd",new Zi(r,1,1)),this}raycast(t,e){let n=this.material.worldUnits,s=t.camera;if(s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.'),n===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;let r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;vs=t.ray;let o=this.matrixWorld,l=this.geometry,u=this.material;$r=u.linewidth+r,l.boundingSphere===null&&l.computeBoundingSphere(),Ch.copy(l.boundingSphere).applyMatrix4(o);let h;if(n)h=$r*.5;else{let b=Math.max(s.near,Ch.distanceToPoint(vs.origin));h=kg(s,b,u.resolution)}if(Ch.radius+=h,vs.intersectsSphere(Ch)===!1)return;l.boundingBox===null&&l.computeBoundingBox(),Ah.copy(l.boundingBox).applyMatrix4(o);let d;if(n)d=$r*.5;else{let b=Math.max(s.near,Ah.distanceToPoint(vs.origin));d=kg(s,b,u.resolution)}Ah.expandByScalar(d),vs.intersectsBox(Ah)!==!1&&(n?D1(this,e):N1(this,s,e))}onBeforeRender(t){let e=this.material.uniforms;e&&e.resolution&&(t.getViewport(Qf),this.material.uniforms.resolution.value.set(Qf.z,Qf.w))}};var Rh=i=>i<90?Math.round(i)+" s":i<5400?Math.round(i/60)+" min":i<129600?Math.round(i/3600)+" h":Math.round(i/86400)+(window.__L==="en"?" days":window.__L==="ca"?" dies":" d\xEDas"),ys=i=>window.__L==="en"?i+" ago":(window.__L==="ca"?"fa ":"hace ")+i;function $g(i){let t=window.__ROD__,{scene:e,camera:n,goal:s,cur:r,invalidate:o,K:l,CX:u,CY:h,mcs:d,q:b,list:g,clamp:M,norm:w,munis:N}=i,y=a=>document.querySelector(a),m=a=>String(a).replace(/[<>&"]/g,c=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[c]),$=(a,c)=>[(a-u)*l,(c-h)*l],V=.06,D=t.segs.map(a=>{let c=[],f=[0];for(let p=0;p<a.length;p+=2){let v=$(a[p],a[p+1]);c.length&&f.push(f[f.length-1]+Math.hypot(v[0]-c[c.length-1][0],v[1]-c[c.length-1][1])),c.push(v)}return{p:c,c:f,L:f[f.length-1]}}),T=t.stops.map(([a,c,f,p])=>({n:a,id:p,w:$(c,f),fams:new Set})),k=t.routes.map(([a,c,f])=>({s:a,l:c,c:f})),Y=new Map;(t.bus||[]).forEach(([a,c,f,p])=>{let v={days:new Set(a),name:c,stops:f,times:p};f.forEach((S,C)=>{if(C<f.length-1){let I=Y.get(S)||[];I.push([v,C]),Y.set(S,I)}})});function R(a,c,f){let p=ee(),v=t.days.indexOf(p.ymd),S=[];for(let[C,I]of Y.get(a)||[]){if(!C.days.has(v))continue;let L=C.times[I];if(L<c||L>f)continue;let U=C.stops[C.stops.length-1];S.push({sm:L,est:L,dl:0,fam:C.name,dest:T[U].n,destId:T[U].id,plat:"",cancel:!1,obs:"",live:!1,num:"",tid:"",tr:null,bus:!0,src:"bus",bstops:C.stops.slice(I)})}return S}let B=(a,c)=>{let f=a.match(/^R([A-Z]*)(\d*)(.*)$/),p=c.match(/^R([A-Z]*)(\d*)(.*)$/);return(f[1]||"").localeCompare(p[1]||"")||(+f[2]||0)-(+p[2]||0)||f[3].localeCompare(p[3])},q=[...new Set(k.map(a=>a.s))].sort(B),Z={};k.forEach(a=>{Z[a.s]||(Z[a.s]=a.c)});let ot=t.pats.map(([a,c,f])=>({stops:a,t:c,segs:f})),ht=t.trips.map(([a,c,f,p,v],S)=>({day:a,pat:ot[c],fam:k[f].s,c:k[f].c,t0:p,num:v,tid:t.tids[S]})),tt={};q.forEach(a=>tt[a]=new Set),ht.forEach(a=>{a.pat.segs.forEach(c=>tt[a.fam].add(c)),a.pat.stops.forEach(c=>T[c].fams.add(a.fam))});let st=t.days.map((a,c)=>ht.filter(f=>f.day===c)),pt=new Map(ht.map(a=>[a.tid,a])),_t=[124.87404143965449,479.9901289885639,124.62688710863031,249.99562739146893,486.739003764725,248.0364802782304,2037.1344308355726],At=Math.PI/180,xt=3.922*At,wt=-39.705*At;function bt(a,c){let f=a*At+xt,p=c*At,v=Math.cos(wt),S=Math.sin(wt),C=Math.cos(p),I=Math.cos(f)*C,L=Math.sin(f)*C,U=Math.sin(p),z=Math.atan2(L,I*v-U*S),x=Math.asin(U*v+I*S),_=Math.sqrt(2/(1+Math.cos(z)*Math.cos(x))),A=_*Math.cos(x)*Math.sin(z),O=_*Math.sin(x),[J,Q,G,nt,W,zt,oe]=_t;return $((Q+J*A-W)*oe,(zt-(nt-G*O))*oe)}let Vt=new Map(T.map((a,c)=>[a.id,c]));function ne(a){if(a.g)return a.g;let c=[],f=[],p=[0],v=0;return a.segs.forEach((S,C)=>{let I=D[S];I.p.forEach((L,U)=>{C&&!U||(c.push(L),f.push(v+I.c[U]))}),v+=I.L,p.push(v)}),a.g={pts:c,cum:f,stopD:p}}function je(a,c,f,p){let v=1e18,S=0;for(let C=0;C+1<a.pts.length;C++){if(a.cum[C+1]<f||a.cum[C]>p)continue;let I=a.pts[C],L=a.pts[C+1],U=L[0]-I[0],z=L[1]-I[1],x=U*U+z*z||1e-9,_=Math.max(0,Math.min(1,((c[0]-I[0])*U+(c[1]-I[1])*z)/x)),A=I[0]+U*_-c[0],O=I[1]+z*_-c[1],J=A*A+O*O;J<v&&(v=J,S=a.cum[C]+_*(a.cum[C+1]-a.cum[C]))}return{d:S,err:Math.sqrt(v)}}function Oe(a,c){let f=0,p=a.cum.length-1;if(c<=0)return a.pts[0];if(c>=a.cum[p])return a.pts[p];for(;p-f>1;){let I=f+p>>1;a.cum[I]<=c?f=I:p=I}let v=(c-a.cum[f])/(a.cum[p]-a.cum[f]||1),S=a.pts[f],C=a.pts[p];return[S[0]+(C[0]-S[0])*v,S[1]+(C[1]-S[1])*v]}let We=a=>`${a.slice(6,8)}/${a.slice(4,6)}`,vt=new Intl.DateTimeFormat("es-ES",{timeZone:"Europe/Madrid",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hourCycle:"h23"});function yt(a){let c={};return vt.formatToParts(a).forEach(f=>c[f.type]=f.value),{ymd:c.year+c.month+c.day,min:+c.hour*60+ +c.minute+ +c.second/60}}let Lt=0,de=null,Kt=0,ge=0;function ee(){let a=yt(new Date);if(Lt===0&&de==null)return{...a,live:!0};let c=de==null?a.min:Kt+(Lt?(performance.now()-ge)/6e4*Lt:0);return{ymd:a.ymd,min:c,live:!1}}let rt=a=>(a=(Math.floor(a+1e-6)%1440+1440)%1440,String(Math.floor(a/60)).padStart(2,"0")+":"+String(a%60).padStart(2,"0")),Rt="https://rodalies.erathegameoftime.com",H={url:"",delays:new Map,tu:new Map,vp:new Map,alerts:[],ok:0,okVP:0,err:"",feedTs:0};try{let a=new URLSearchParams(location.search).get("rt");a&&localStorage.setItem("rod_rt",a);let c=localStorage.getItem("rod_rt");c&&/jhmuyo\.workers\.dev/.test(c)&&(c=Rt,localStorage.setItem("rod_rt",c)),H.url=c||Rt}catch{H.url=Rt}let Pt=(a,c)=>{let f=new AbortController,p=setTimeout(()=>f.abort(),12e3);return fetch(a+c,{cache:"no-store",signal:f.signal}).then(v=>{if(clearTimeout(p),!v.ok)throw new Error("HTTP "+v.status);return v.json()},v=>{throw clearTimeout(p),v})},$t="https://rodalies.jhmuyo.workers.dev";function ce(){return(H.url===Rt&&H.altUntil>Date.now()?$t:H.url).replace(/\/+$/,"")}let pe=a=>/^51/.test(a||""),Se={t0:Date.now(),done:!document.documentElement.classList.contains("splash")};function Ae(){if(Se.done)return;let a=[...Xe.st,...$e.st];if(!((H.ok||H.err||!H.url)&&a.every(f=>{let p=Ft.get(f);return p&&p.at>0&&!p.loading}))&&Date.now()-Se.t0<4e3){setTimeout(Ae,120);return}Se.done=!0;try{_e(!0)}catch{}requestAnimationFrame(()=>requestAnimationFrame(()=>{let f=document.getElementById("splash");f&&(f.classList.add("out"),setTimeout(()=>f.remove(),400)),document.documentElement.classList.remove("splash")}))}setTimeout(Ae,150);async function X(){if(!H.url){mt();return}let a=ce();if(!X.busy){X.busy=1;try{await Qe(a)}finally{X.busy=0}}}async function Qe(a){let c=!H.adifAt||Date.now()-H.adifAt>11e4,f=_=>({status:"fulfilled",value:_}),p=_=>({status:"rejected",reason:_}),v,S,C,I,L,U=null;if(H.noLive&&Date.now()-H.noLive>30*6e4&&(H.noLive=0),!H.noLive)try{U=await Pt(a,"/live.json")}catch(_){if(/HTTP 404/.test(_.message))H.noLive=Date.now();else{if(H.url===Rt&&a!==$t)return H.altUntil=Date.now()+30*6e4,Qe($t);a===$t&&(H.altUntil=0),U={__fail:_}}}if(U&&U.__fail)v=S=C=I=L=p(U.__fail);else if(U&&U.v===1){let _=O=>U[O]&&!U[O].__err?f(U[O]):p(new Error(U[O]&&U[O].__err||"sin dato"));v=_("tu"),S=_("vp"),C=_("al"),I=_("nt"),L=c?_("ad"):p(0);let A=U.rep;A&&Array.isArray(A.items)&&(H.rep=A.items,H.repSkew=(A.now||Date.now())-Date.now(),A.tipos&&(H.tipos=A.tipos),H.repOk=Date.now(),H.repFail=0)}else(!H.repFail||Date.now()-H.repFail>15*6e4)&&Pt(a,"/reports.json").then(_=>{_&&Array.isArray(_.items)?(H.rep=_.items,H.repSkew=(_.now||Date.now())-Date.now(),_.tipos&&(H.tipos=_.tipos),H.repOk=Date.now(),H.repFail=0):H.repFail=Date.now()}).catch(()=>{H.repFail=Date.now(),H.repOk=0}),[v,S,C,I,L]=await Promise.allSettled([Pt(a,"/trip_updates.json"),Pt(a,"/vehicle_positions.json"),Pt(a,"/alerts.json"),Pt(a,"/notices.json"),c?Pt(a,"/adif.json"):Promise.reject(0)]);if(L.status==="fulfilled"&&L.value&&L.value.ok?(H.adif=L.value,H.adifAt=Date.now()):c&&(H.adifAt=Date.now()-6e4),v.status==="fulfilled"){let _=new Map,A=new Map;for(let O of v.value.entity||[]){let J=O.tripUpdate;if(!J||!J.trip||!pe(J.trip.tripId))continue;let Q=J.trip.tripId,G=(J.stopTimeUpdate||[])[0],nt=J.delay;nt==null&&G&&(nt=(G.arrival||G.departure||{}).delay),J.trip.scheduleRelationship==="CANCELED"&&(nt="X"),nt!=null&&_.set(Q,nt),A.set(Q,{next:G?{sid:G.stopId,t:+((G.arrival||G.departure||{}).time||0)}:null})}H.delays=_,H.tu=A,H.ok=Date.now(),H.feedTs=+((v.value.header||{}).timestamp||0)*1e3,H.err=""}else H.err=v.reason&&v.reason.message||__t(0);if(S.status==="fulfilled"){let _=new Map,A=Date.now()/1e3;for(let O of S.value.entity||[]){let J=O.vehicle;if(!J||!J.trip||!pe(J.trip.tripId)||!J.position)continue;let Q=J.vehicle&&J.vehicle.label||"",G=Q.match(/PLATF\.\(([^)]+)\)/),nt=H.vp.get(J.trip.tripId),W={tid:J.trip.tripId,w:bt(+J.position.longitude,+J.position.latitude),st:J.currentStatus||"",sid:J.stopId||"",ts:+J.timestamp||A,label:Q,plat:G?G[1]:"",fam:(Q.split("-")[0]||"").trim(),num:J.vehicle&&J.vehicle.id||""};W.disp=nt?nt.disp:null,_.set(W.tid,W)}H.vp=_,H.okVP=Date.now()}let z=[];if(I.status==="fulfilled"&&Array.isArray(I.value.included)){H.okNotices=Date.now();for(let _ of I.value.included){let A=new Set((_.lines||[]).map(nt=>nt.id).filter(nt=>Z[nt])),O=(nt,W)=>{nt=nt||{},W=W||window.__L;let zt=nt[W];return W==="en"&&zt&&(zt===nt.ca||/\b(els|amb|dels|per una|circulen|serveis|entre .{2,40} i )\b|ç|l·l/i.test(zt))&&(zt=""),(zt||nt.es||nt.ca||"").trim()},J=nt=>[O(_.description,nt),O(_.title,nt)].sort((W,zt)=>zt.length-W.length)[0],Q=J(),G=J("es");Q&&z.push({id:"N"+_.externalId,fams:A,stops:new Set,txt:Q,es:G,when:(_.date||"")+"T"+(_.time||""),src:"Rodalies",core:_.core||""})}}if(C.status==="fulfilled"){let _=+((C.value.header||{}).timestamp||0);if(H.alertsTs=_,Date.now()/1e3-_<6*3600)for(let A of C.value.entity||[]){let O=A.alert;if(!O)continue;let J=new Set,Q=new Set;for(let oe of O.informedEntity||[])(oe.routeId||"").startsWith("51")&&J.add(oe.routeId.replace(/^51T\d+/,"")),oe.stopId&&Vt.has(oe.stopId)&&Q.add(Vt.get(oe.stopId));if(!J.size&&!Q.size)continue;let G=(O.descriptionText||O.headerText||{translation:[]}).translation||[],nt=((G.find(oe=>oe.language==="es")||G[0]||{}).text||"").trim(),W=+((O.activePeriod||[])[0]||{}).start||0,zt=oe=>String(oe||"").toLowerCase().replace(/&#?\w+;/g,"").replace(/[^a-z0-9áéíóúàèòïüñç]+/g,"");z.some(oe=>oe.txt===nt||zt(oe.txt)===zt(nt)||oe.es&&zt(oe.es)===zt(nt))||z.push({id:A.id,fams:J,stops:Q,txt:nt,when:W?new Date(W*1e3).toISOString().slice(0,19):"",src:"Renfe"})}}if(H.adif&&Date.now()-H.adifAt<15*6e4)for(let[_,A]of(H.adif.items||[]).entries()){let O=(A.t?A.t+". ":"")+A.txt,J=new Set,Q=new Set,G=w(O);for(let nt of O.matchAll(/\b(R\d{1,2}[NS]?|R3a|RG1|RL\d|RT\d)\b/g))Z[nt[1]]&&J.add(nt[1]);T.forEach((nt,W)=>{nt.fams.size&&nt.n.length>4&&G.includes(w(nt.n))&&(Q.add(W),J.size||nt.fams.forEach(zt=>J.add(zt)))}),z.some(nt=>nt.txt===O)||z.push({id:"A"+_,fams:J,stops:Q,txt:O,when:H.adif.upd||"",src:"Adif",lvl:A.lvl})}let x=_=>String(_||"").replace(/&#x([0-9a-f]+);/gi,(A,O)=>String.fromCodePoint(parseInt(O,16))).replace(/&#(\d+);/g,(A,O)=>String.fromCodePoint(+O)).replace(/&nbsp;/g," ").replace(/&quot;/g,'"').replace(/&apos;|&#39;/g,"'").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/[\u200B-\u200D\uFEFF]/g,"").replace(/[\u0091\u0092]/g,"\u2019").replace(/[\u0093\u0094]/g,'"').replace(/\u0096|\u0097/g,"\u2013").replace(/\u0085/g,"\u2026").replace(/[\u0080-\u009F]/g,"").replace(/([A-Za-zÀ-ÿ])[\uFFFD\uFFFC](?=[A-Za-zÀ-ÿ])/g,"$1\u2019").replace(/\b([dlDL])\?(?=[aeiouhàèéíòóúAEIOUHÀÈÉÍÒÓÚ])/g,"$1\u2019").replace(/\s+/g," ").trim();for(let _ of z)if(_.txt=x(_.txt),_.es&&(_.es=x(_.es)),_.fams&&_.fams.size>3){let A=_.txt.match(/\bTren\s+(\d{4,6})\b/i);if(A){let O=null;try{O=Ep(A[1])}catch{}O&&(_.fams=new Set([O]))}}if(I.status==="fulfilled"||C.status==="fulfilled"){H.alerts=z.sort((_,A)=>A.when>_.when?1:-1);try{G_()}catch{}}mt(),Jh(),De=0,o()}let Fe=()=>H.okVP&&Date.now()-H.okVP<10*6e4,F=()=>H.okVP&&Date.now()-H.okVP<9e4,E={at:0,v:!1},at=()=>{if(!Fe()||H.vp.size>0)return!1;if(Date.now()-E.at>3e4){E.at=Date.now();let a=yt(new Date),c=t.days.indexOf(a.ymd),f=0;if(c>=0)for(let p of st[c]){let v=a.min-p.t0;v>p.pat.t[1]+2&&v<p.pat.t[p.pat.t.length-2]-2&&f++}E.v=f>=6}return E.v},lt=()=>Fe()&&!at();function mt(){let a=y("#rtst"),c=y("#mode");if(c){let p=[...Dt].filter(I=>{yo("");let L=zi.m.get(I);return L&&L[0]>=2}),v=vo(p),S=!!lt()&&ee().live&&!(p.length&&v.length===p.length);c.classList.toggle("on",S&&F()),c.classList.toggle("pre",!(S&&F())),c.textContent=S&&!F()?__t(1):S?__t(2):ft.cur?__t(3):__t(4),c.classList.toggle("past",!!ft.cur);let C=y("#rcgrab");if(C){let I=C.querySelector(".rdot");I||(I=document.createElement("b"),I.className="rdot",C.insertBefore(I,C.firstChild)),I.className="rdot "+(ft.cur?"past":S&&F()?"on":"pre"),I.title=c.textContent}c.title=ft.cur?`${__t(5)}${ft.cur.sn.t}${__t(6)}`:""}if(!a)return;H.url?H.err?a.textContent=__t(8)+H.err+__t(9):lt()?a.innerHTML=`${__t(10)}${H.vp.size}${__t(11)}${H.delays.size}${__t(12)}${new Date(H.okVP).toLocaleTimeString("es-ES",{hour:"2-digit",minute:"2-digit",second:"2-digit"})}`:at()?a.textContent=__t(13):a.textContent=__t(14):a.textContent=H.err||__t(7);let f=y("#rturl");f&&f._shown!==H.url&&(f.value=H.url,f._shown=H.url)}y("#rtsave").onclick=()=>{let a=y("#rturl").value.trim().replace(/\/+(alerts|trip_updates|vehicle_positions)\.json$/,"").replace(/\/+$/,"");if(a&&!/^https?:\/\//.test(a)&&(a="https://"+a),!a){H.err=__t(15),mt();return}H.url=a;try{localStorage.setItem("rod_rt",a)}catch{}H.ok=0,H.err="",mt(),X()},y("#rtoff").onclick=()=>{H.url=Rt;try{localStorage.removeItem("rod_rt")}catch{}d._h="",X()};let Nt=0;setInterval(()=>{let a=ln.size||ve;(document.hidden?!a||Date.now()-Nt<115e3:Date.now()-Nt<15e3)||(Nt=Date.now(),X())},2e4),setTimeout(()=>{Nt=Date.now(),X()},50),document.addEventListener("visibilitychange",()=>{!document.hidden&&Date.now()-Nt>15e3&&(Nt=Date.now(),X())});let ft={snap:null,key:""};function Mt(){let a=ee();if(a.live||!Ue.hoy||!Ue.hoy.snaps||Lt&&de==null)return null;let c=yt(new Date).min;if(a.min>c+1)return null;let f=null;for(let p of Ue.hoy.snaps){if(!p.d)continue;let v=Gp(p.t);v<=a.min+1&&(!f||v>f.m)&&(f={m:v,sn:p})}return f&&a.min-f.m<=25?f:null}let kt=a=>{{let v=qh(a.num);if(v&&v.cx&&ee().live)return"X"}let c=ft.cur;if(c){if(c.sn.x&&c.sn.x.includes(a.tid))return"X";let v=c.sn.d[a.tid];return v??0}if(!lt())return null;let f=H.delays.get(a.tid),p=H.vp.get(a.tid);return f==="X"?f:p&&p.pre&&p.preDl>=1?Math.max(typeof f=="number"?f:0,p.preDl*60):f??null},Dt=new Set(q);try{let a=JSON.parse(localStorage.getItem("rod_lines")||"null");Array.isArray(a)&&a.some(c=>q.includes(c))&&(Dt.clear(),a.forEach(c=>q.includes(c)&&Dt.add(c)))}catch{}let Zt=new ts,Yt=new ts,ue=new gs({vertexColors:!0,linewidth:3.2,depthTest:!1,transparent:!0}),xe=new gs({color:16777215,linewidth:6,depthTest:!1,transparent:!0,opacity:.9}),Te=new zr(Zt,ue),et=new zr(Yt,xe);et.renderOrder=20,Te.renderOrder=21,Te.frustumCulled=et.frustumCulled=!1,e.add(et,Te);function Gt(a){let c=a[0]/l+u,f=a[1]/l+h;for(let p of N){if(p._bb===void 0){let S=1e9,C=1e9,I=-1e9,L=-1e9;for(let U of p.rings||[]){let z=U[0]||[];for(let x=0;x<z.length;x+=2)z[x]<S&&(S=z[x]),z[x]>I&&(I=z[x]),z[x+1]<C&&(C=z[x+1]),z[x+1]>L&&(L=z[x+1])}p._bb=[S,C,I,L]}let v=p._bb;if(!(c<v[0]||c>v[2]||f<v[1]||f>v[3]))for(let S of p.rings||[]){let C=S[0]||[],I=!1;for(let L=0,U=C.length,z=U-2;L<U;z=L,L+=2){let x=C[L+1],_=C[z+1];x>f!=_>f&&c<(C[z]-C[L])*(f-x)/(_-x)+C[L]&&(I=!I)}if(I)return!0}}return!1}let St=!1;function Jt(){St||!N.length||(St=!0,T.forEach(a=>{a.ext=!Gt(a.w)}),D.forEach(a=>{a.ext=!Gt(a.p[0])&&!Gt(a.p[a.p.length-1])&&!Gt(a.p[a.p.length>>1])}))}let Qt=()=>{let a=new Set(Dt.size<=2?Dt:[]);try{Et&&Et.fam&&a.add(Et.fam)}catch{}return a},Tt="";function he(){Jt();let a=[],c=[],f=new Set,p=new ye,v=new ye("#d2d0d0"),S=Qt();Tt=[...S].join();for(let z of q)if(Dt.has(z))for(let x of tt[z]){if(f.has(x))continue;f.add(x);let _=D[x].p;p.set(Z[z]),D[x].ext&&!S.has(z)&&p.lerp(v,.55);for(let A=0;A+1<_.length;A++)a.push(_[A][0],_[A][1],V,_[A+1][0],_[A+1][1],V),c.push(p.r,p.g,p.b,p.r,p.g,p.b)}a.length||(a.push(0,0,-50,0,0,-50),c.push(0,0,0,0,0,0));let C=new ts,I=new ts;C.setPositions(a),C.setColors(c),I.setPositions(a);let L=Te.geometry,U=et.geometry;Te.geometry=C,et.geometry=I,L&&L.dispose(),U&&U.dispose(),o()}he();let le=a=>new kn({uniforms:{dpr:{value:Math.min(devicePixelRatio||1,2)},border:{value:new ye(a)}},vertexShader:"attribute float size; attribute vec3 fill; attribute float bw; varying vec3 vF; varying float vS; varying float vB; uniform float dpr; void main(){ vF=fill; vS=size*dpr; vB=bw*dpr; gl_PointSize=vS; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"uniform vec3 border; varying vec3 vF; varying float vS; varying float vB; void main(){ float r=length(gl_PointCoord*2.0-1.0)*vS*0.5; float R=vS*0.5; if(r>R) discard; float a=1.0-smoothstep(R-1.2,R,r); vec3 c = r>R-vB ? border : vF; gl_FragColor=vec4(c,a); }",transparent:!0,depthTest:!1}),Je=new En,ze=T.length,qn=new Float32Array(ze*3),fi=new Float32Array(ze*3),pr=new Float32Array(ze),to=new Float32Array(ze);T.forEach((a,c)=>{qn[c*3]=a.w[0],qn[c*3+1]=a.w[1],qn[c*3+2]=V,fi.set([1,1,1],c*3),pr[c]=6,to[c]=1.6}),Je.setAttribute("position",new hn(qn,3)),Je.setAttribute("fill",new hn(fi,3)),Je.setAttribute("size",new hn(pr,1)),Je.setAttribute("bw",new hn(to,1));let eo=le("#1d2330"),mr=new Dr(Je,eo);mr.renderOrder=22,mr.frustumCulled=!1,e.add(mr);function zn(){let a=r.dist<45,c=Qt();T.forEach((f,p)=>{let v=[...f.fams].some(C=>Dt.has(C)),S=f.ext&&![...f.fams].some(C=>c.has(C))&&p!==ae;pr[p]=v?p===ae?13:S?3:a?8:5:0,to[p]=p===ae?3:1.6}),Je.attributes.size.needsUpdate=!0,Je.attributes.bw.needsUpdate=!0}let Mi=600,Pi=new En,Li=new Float32Array(Mi*3),Hs=new Float32Array(Mi*3),qr=new Float32Array(Mi),no=new Float32Array(Mi);Pi.setAttribute("position",new hn(Li,3)),Pi.setAttribute("fill",new hn(Hs,3)),Pi.setAttribute("size",new hn(qr,1)),Pi.setAttribute("bw",new hn(no,1));let es=new Float32Array(Mi);Pi.setAttribute("ang",new hn(es,1));let $l=new kn({uniforms:{dpr:{value:Math.min(devicePixelRatio||1,2)},border:{value:new ye("#ffffff")}},vertexShader:"attribute float size; attribute vec3 fill; attribute float bw; attribute float ang; varying vec3 vF; varying float vS; varying float vB; varying float vA; uniform float dpr; void main(){ vF=fill; vS=size*dpr; vB=bw*dpr; vA=ang; gl_PointSize=vS; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"uniform vec3 border; varying vec3 vF; varying float vS; varying float vB; varying float vA; void main(){ vec2 p=gl_PointCoord*2.0-1.0; float r=length(p)*vS*0.5; float R=vS*0.5; if(r>R) discard; float a=1.0-smoothstep(R-1.2,R,r); vec3 c = r>R-vB ? border : vF; if(vA<50.0){ vec2 d=vec2(sin(vA),-cos(vA)); vec2 n=vec2(cos(vA),sin(vA)); float qy=-dot(p,d); float qx=dot(p,n); float w=(qy+0.66)/0.98*0.48; if(qy>-0.66 && qy<0.32 && abs(qx)<w) c=vec3(1.0); } else if(vA>70.0 && vA<80.0){ if(abs(p.y)<0.36 && abs(abs(p.x)-0.2)<0.1) c=vec3(1.0); } else if(vA>80.0 && vA<90.0){ if((abs(p.x)<0.11 && p.y>-0.5 && p.y<0.16) || length(p-vec2(0.0,0.38))<0.12) c=vec3(1.0); } gl_FragColor=vec4(c,a); }",transparent:!0,depthTest:!1}),Gs=new Dr(Pi,$l);Gs.renderOrder=24,Gs.frustumCulled=!1,e.add(Gs);let ns=new En,gr=new Float32Array(Mi*3),zl=new Float32Array(Mi*3),Vl=new Float32Array(Mi),Hl=new Float32Array(Mi);ns.setAttribute("position",new hn(gr,3)),ns.setAttribute("fill",new hn(zl,3)),ns.setAttribute("size",new hn(Vl,1)),ns.setAttribute("bw",new hn(Hl,1));let io=new Dr(ns,le("#ffffff"));io.renderOrder=23,io.frustumCulled=!1,e.add(io);function so(a,c){let f=D[a],p=c*f.L,v=0,S=f.c.length-1;for(;S-v>1;){let z=v+S>>1;f.c[z]<=p?v=z:S=z}let C=f.c[S]-f.c[v]||1,I=(p-f.c[v])/C,L=f.p[v],U=f.p[S];return[L[0]+(U[0]-L[0])*I,L[1]+(U[1]-L[1])*I]}let P=a=>a*a*(3-2*a)*.35+a*.65;function K(a,c){let f=a.pat.t,p=a.pat.stops.length,v=f[2*p-2];if(c<f[1]-2||c>v+1)return null;if(c<=f[1])return{w:T[a.pat.stops[0]].w,at:0,next:0,moving:!1};for(let S=0;S<p-1;S++){let C=f[2*S+1],I=f[2*S+2],L=f[2*S+3];if(c<=I){let U=I>C?(c-C)/(I-C):1;return{w:so(a.pat.segs[S],P(M(U,0,1))),at:-1,next:S+1,prev:S,moving:!0}}if(c<=L)return{w:T[a.pat.stops[S+1]].w,at:S+1,next:S+1,moving:!1}}return{w:T[a.pat.stops[p-1]].w,at:p-1,next:p-1,moving:!1}}function dt(a){let c=t.days.indexOf(a.ymd),f=[];if(c<0)return{k:c,out:f};let p=(v,S)=>{for(let C of v){if(!Dt.has(C.fam))continue;let I=kt(C);if(I==="X")continue;let L=(I||0)/60,U=a.min+S-C.t0-L;if(U<-2||U>C.pat.t[C.pat.t.length-2]+1)continue;let z=K(C,U);z&&f.push({tr:C,p:z,rel:U,dl:L,live:I!=null})}};return p(st[c],0),c>0&&p(st[c-1],1440),{k:c,out:f}}function ct(a,c,f,p){let v=a.pat.stops[0],S=c.dep0,C=null,I=(U,z)=>{for(let x of U||[]){let _=x.pat.stops,A=_.length;if(_[A-1]!==v||x===a)continue;let O=x.t0+x.pat.t[2*(A-1)]-z;if(O>S+5||O<S-120)continue;let J=ne(x.pat),Q=je(J,c.w,-1,1e9);if(Q.err>.6)continue;let G=J.stopD,nt=x.pat.t,W=G.findIndex(te=>te>Q.d);W<0&&(W=A-1);let zt=W===0?nt[1]:nt[2*W-1]+(G[W]>G[W-1]?(Q.d-G[W-1])/(G[W]-G[W-1]):1)*(nt[2*W]-nt[2*W-1]),oe=f-(x.t0+zt-z);oe<-5||oe>120||(!C||Math.abs(oe)<Math.abs(C.prevDl))&&(C={prevTr:x,dPrev:Q.d,prevDl:oe,arrO:O+Math.max(0,oe)})}};if(I(st[p],0),p>0&&I(st[p-1],1440),!C)return{prevTr:null,preDl:0};let L=Math.max(S,C.arrO+3);return{...C,depEst:L,preDl:Math.max(0,L-S)}}function ut(a,c,f){let p=a.pat.t,v=c.length;if(!(f>=0))return f<0?c[0]:null;for(let S=0;S<v;S++)if(f<=p[2*S+1]){if(f>=p[2*S]||S===0)return c[S];let C=p[2*S-1],I=p[2*S];return c[S-1]+(c[S]-c[S-1])*(I>C?(f-C)/(I-C):1)}return c[v-1]}let jt=performance.now();function se(){let a=[],c=Date.now()/1e3,f=performance.now(),p=Math.min(1,(f-jt)/1e3);jt=f;for(let v of H.vp.values()){let S=pt.get(v.tid),C=S?S.fam:v.fam;if(C&&Z[C]&&!Dt.has(C))continue;let I=H.delays.get(v.tid),L=typeof I=="number"?I/60:0,U=Math.max(0,c-v.ts);v.mvTs!==v.ts&&((!v.mvW||Math.hypot(v.w[0]-v.mvW[0],v.w[1]-v.mvW[1])>.025)&&(v.mvW=v.w,v.mvAt=v.ts),v.mvTs=v.ts),v.still=v.ts-(v.mvAt||v.ts);let z=v.w,x=-1;if(S){let A=ne(S.pat),O=A.stopD;if(v.dObs==null||v.obsAt!==v.ts){let W=je(A,v.w,-1,1e9);v.dObs=W.d,v.err=W.err,v.obsAt=v.ts}let J=ee(),Q=t.days.indexOf(J.ymd),G=S.day===Q-1?1440:0,nt=S.t0+S.pat.t[1]-G;if(v.pre=J.min+L<nt-1&&(v.dObs>O[0]+.35||v.err>.6)&&!(v.st==="STOPPED_AT"&&v.sid===T[S.pat.stops[0]].id),v.dep0=nt,v.pre){if(v.atStop=-1,v.next=0,x=0,v.disp=null,v.prevAt!==v.ts&&(v.prevAt=v.ts,Object.assign(v,ct(S,v,J.min,Q))),v.prevTr){let W=ne(v.prevTr.pat);z=Oe(W,v.dPrev)}}else if(!F()&&S){let W=ee(),zt=t.days.indexOf(W.ymd),oe=S.day===zt-1?1440:0,te=K(S,W.min+oe-S.t0-L);te?(z=te.w,v.est=!0,x=te.next,v.atStop=te.moving?-1:te.at,v.next=te.next,v.before=!1):(v.atStop=-1,v.next=-1)}else if(v.err<=.6){let W=O.findIndex(te=>te>v.dObs+.08);W<0&&(W=O.length-1);let zt=O.reduce((te,tn,Ee)=>Math.abs(tn-v.dObs)<Math.abs(O[te]-v.dObs)?Ee:te,0);v.atStop=Math.abs(O[zt]-v.dObs)<.16?zt:-1;{let te=v.st==="STOPPED_AT"&&v.sid?S.pat.stops.findIndex(tn=>T[tn].id===v.sid):-1;te>=0&&Math.abs(O[te]-v.dObs)<.6&&(v.atStop=te,W<=te&&(W=Math.min(te+1,O.length-1)))}v.before=v.atStop>=0&&v.dObs<O[v.atStop]-.15,v.next=W,x=W;let oe=v.dObs;if(v.st==="STOPPED_AT"&&v.atStop>=0)oe=O[v.atStop];else if(W>0){let te=(S.pat.t[2*W]-S.pat.t[2*W-1])*60,tn=te>0?(O[W]-O[W-1])/te:0,Ee=ee(),be=t.days.indexOf(Ee.ymd),vn=S.day===be-1?1440:0,sn=ut(S,O,Ee.min+vn-S.t0-L),pn=v.dObs+tn*Math.min(U,60);sn!=null&&(pn=Math.min(pn,Math.max(v.dObs,sn))),oe=Math.max(v.dObs,Math.min(O[W]-.03,pn))}v.disp==null||Math.abs(v.disp-oe)>1.2?v.disp=oe:oe>v.disp&&(v.disp+=(oe-v.disp)*Math.min(1,p*1.5)),z=Oe(A,v.disp)}else if(v.err>2){let W=ee(),zt=t.days.indexOf(W.ymd),oe=S.day===zt-1?1440:0,te=K(S,W.min+oe-S.t0-L);te&&(z=te.w,v.est=!0,x=te.next),v.atStop=-1,v.next=te?te.next:-1}else v.atStop=-1,v.next=-1}let _=v.pre?"":v.st==="STOPPED_AT"&&v.atStop>=0||v.atStop>=0&&v.still>30?"st":v.still>=90&&v.atStop<0?"via":"";a.push({tr:S,v,w:z,stop:_,p:{w:z},fam:C||"?",c:S?S.c:Z[C]||"#6b7385",dl:L,live:!0,real:!0,idx:x,age:U,cancel:I==="X"})}return a}let Ft=new Map,Ot=!1,Ut=!1,me="",Ie={st:-1},Bt=[],De=0,fe=null,Et=null,ae=-1,Ce=!1,ie=0,Dn="";function ke(a){let c=Lt>0||!!fe,f=window.__mapHidden?1e3:Lt>0?50:c?200:250;if(a-De<f)return!1;De=a,[...Qt()].join()!==Tt&&(he(),zn());{let x=Mt(),_=x?x.sn.t:"";ft.cur=x,_!==ft.key&&(ft.key=_,mt()),!x&&!ee().live&&!Ue.at&&Gl()}let p=ee(),v=lt()&&p.live,S=v?{k:t.days.indexOf(p.ymd),out:se()}:dt(p);Bt=S.out;let C=new ye,I=0,L=0;for(let x of Bt){if(I>=Mi)break;Li[I*3]=x.p.w[0],Li[I*3+1]=x.p.w[1],Li[I*3+2]=V+.02;let _=null;if(x.real&&x.v.pre&&x.v.prevTr)_=Oe(ne(x.v.prevTr.pat),x.v.dPrev+.35);else if(x.real&&x.tr&&!x.v.pre&&x.v.err<=.6&&x.v.disp!=null&&!(x.v.st==="STOPPED_AT"&&x.v.atStop>=0))_=Oe(ne(x.tr.pat),x.v.disp+.35);else if(!x.real&&x.p.moving){let G=x.tr.pat.t,nt=x.p.prev,W=G[2*nt+1],zt=G[2*nt+2],oe=zt>W?(x.rel-W)/(zt-W):1;_=so(x.tr.pat.segs[nt],Math.min(1,P(M(oe,0,1))+.04))}let A=x.real?!!x.stop:!x.p.moving;if(x.broke=Pp(x),x.broke)es[I]=85;else if(A)es[I]=75;else if(_){let G=Jl(x.p.w),nt=Jl(_),W=nt[0]-G[0],zt=nt[1]-G[1];es[I]=Math.hypot(W,zt)>.05?Math.atan2(W,-zt):99}else es[I]=99;C.set(x.c||x.tr.c),Hs[I*3]=C.r,Hs[I*3+1]=C.g,Hs[I*3+2]=C.b;let O=x.tr?x.tr===Et:Et&&Et.vtid===x.v.tid;qr[I]=O?22:r.dist<45?17:14,no[I]=O?3.5:2.2;let J=x.real&&x.stop==="via"||!!x.broke,Q=x.cancel||x.broke?[.86,.15,.15]:x.dl>10?[.86,.15,.15]:x.dl>5?[.92,.48,.05]:x.dl>=1?[.98,.8,.08]:[.09,.64,.29];(x.live&&x.dl>=5||O||J)&&(gr[L*3]=x.p.w[0],gr[L*3+1]=x.p.w[1],gr[L*3+2]=V+.01,zl.set(O?Q:J?[.86,.15,.15]:[.98,.45,.09],L*3),Vl[L]=qr[I]+(O?16+5*Math.sin(a/220):J?10+3*Math.sin(a/400):8),Hl[L]=O?2:3,L++),I++}if(Pi.setDrawRange(0,I),ns.setDrawRange(0,L),["position","fill","size","bw"].forEach(x=>{Pi.attributes[x].needsUpdate=!0,ns.attributes[x].needsUpdate=!0}),Pi.attributes.ang.needsUpdate=!0,fe){let x=Bt.find(_=>_.tr===fe);if(x){let _=0,A=innerHeight,O=d.style.display!=="none"&&!d.classList.contains("min")?d.getBoundingClientRect():null,J=y("#rc").getBoundingClientRect();innerWidth<=640&&(O&&(_=O.bottom),A=Math.min(A,J.top));let Q=_+(A-_)/2,G=Q-innerHeight/2,nt=2*s.dist*Math.tan(17.5*Math.PI/180)/innerHeight;s.tx=x.p.w[0]-Math.sin(r.yaw)*G*nt,s.ty=x.p.w[1]+Math.cos(r.yaw)*G*nt}else lt()&&ee().live&&(fe=null)}let U=rt(Math.floor(p.min+1e-6));U!==Dn&&(Dn=U,y("#ctime").textContent=U),y("#ntr").textContent=String(Bt.length),y("#ntrl").textContent=v?__t(16):__t(17);{let x=Dt.size<q.length?[...Dt].sort(B).join(", "):"",_=y("#ccount"),A=ft.cur?`\u23EA ${Bt.length}${__t(18)}${ft.cur.sn.t} \xB7 ${Object.values(ft.cur.sn.d).filter(O=>O>=60).length}${__t(19)}`:!p.live&&p.min<yt(new Date).min-1&&!Lt?`${__t(20)}${Ue.hoy&&Ue.hoy.snaps&&Ue.hoy.snaps.some(O=>O.d)?`${__t(21)}${Ue.hoy.snaps.find(O=>O.d).t}`:__t(22)}`:v&&!F()?`\u{1F4F6} ${__t(1)} \xB7 ${__t(23)} ${ys(Math.round((Date.now()-H.okVP)/6e4)+" min")} <small class="nopos">\xB7 ${__t(24)}</small>`:v&&!Bt.some(O=>O.real)&&vo(Dt).length?`\u{1F4E1} ${__t(25)}${x?` <small>\xB7 ${m(x)}</small>`:""} <small class="nopos">\xB7 ${__t(26)}</small>`:`\u{1F686} ${Bt.length} ${v?__t(27):__t(28)}${x?` <small>\xB7 ${m(x)}</small>`:""}${v&&H.okVP?(()=>{let O=Math.max(0,Math.round((Date.now()-H.okVP)/1e3));return` <small class="fresh${O<3?" new":""}">\u25CF ${__t(29)}${ys(O+" s")}</small>`})():""}`;_&&_._t!==A&&(_.innerHTML=A,_._t=A)}{let x=y("#p");x&&x.classList.toggle("ttf",!p.live||!!Lt)}let z=new Date;if(y("#cdate").textContent=p.live?__t(30):Lt?__t(31)+Lt:Ui?__t(32):__t(33),S.k<0?y("#src").innerHTML=`${__t(34)}${We(t.days[0])}${__t(35)}${We(t.days[t.days.length-1])}${__t(36)}`:v?y("#src").textContent=`${F()?__t(37):__t(38)}${ys(Rh(Math.max(0,Date.now()/1e3-Math.max(...[...H.vp.values()].map(x=>x.ts),0))))}`:at()&&p.live?y("#src").innerHTML=__t(39):y("#src").innerHTML=__t(40)+(H.url?__t(41):__t(42))+__t(43),p.live){let x=Math.round(p.min),_=y("#tsl");document.activeElement!==_&&(_.value=x<240?x+1440:x)}{let x=Et?String(Et.num||Et.vtid||""):"";x!==ke._sk&&(ke._sk=x,_e(!0))}return _e(),!ke._sp&&(v||!p.live||at()||!H.url)&&(ke._sp=1,window.__splashOff&&window.__splashOff()),a-ie>3e3&&(Et||ae>=0||Ce||Ut||me)&&(ie=a,Re()),mt(),!0}let ii=-1,Vn=(()=>{try{return localStorage.getItem("rod_mun")==="1"}catch{return!1}})(),wi=[],Yn=document.createElement("button");Yn.type="button",Yn.id="mbtn",Yn.title=__t(44),Yn.innerHTML=__t(45),Yn.onclick=()=>{Vn=!Vn;try{localStorage.setItem("rod_mun",Vn?"1":"")}catch{}Yn.classList.toggle("on",Vn),o(),ro()},Yn.classList.toggle("on",Vn),document.body.appendChild(Yn);let nn=N.slice().sort((a,c)=>c.pop-a.pop);function xn(a){if(a._a)return a._a;let c=null,f=0;for(let p of a.rings||[]){let v=p[0];if(!v)continue;let S=0,C=0,I=0;for(let L=0,U=v.length;L<U;L+=2){let z=v[L],x=v[L+1],_=v[(L+2)%U],A=v[(L+3)%U],O=z*A-_*x;S+=O,C+=(z+_)*O,I+=(x+A)*O}Math.abs(S)>f&&(f=Math.abs(S),c=[C/(3*S),I/(3*S)])}return a._a=c?[(c[0]-u)*l,(c[1]-h)*l]:[a.cx,a.cy]}let is=a=>a>=1e5?1:a>=2e4?2:a>=5e3?3:4,un=[0,7.6,6.7,6,5.4],ss=[0,17,15,13,12],Ws=a=>a.replace(/^(.*), (el|la|les|els|los|las)$/i,"$2 $1").replace(/^(.*), l'$/i,"l'$1");function ro(){let a=s.tilt<.06&&r.tilt<.08;Yn.classList.toggle("show",a);let c=0;if(Vn&&a){let f=[...document.querySelectorAll(".plab, .slab")].filter(S=>S.offsetParent!==null||S.style.display==="block").map(S=>{let C=S.getBoundingClientRect();return[C.left-2,C.top-2,C.right+2,C.bottom+2]}).filter(S=>S[2]>S[0]),p=r.dist,v=p>160?5e4:p>130?2e4:p>105?8e3:p>80?3e3:p>62?800:0;for(let S of nn){let C=is(S.pop);if(S.pop<v)break;let I=xn(S);if(Tn.set(I[0],I[1],V).project(n),Math.abs(Tn.x)>1.02||Math.abs(Tn.y)>1.02)continue;let L=(Tn.x*.5+.5)*innerWidth,U=(-Tn.y*.5+.5)*innerHeight,z=Ws(S.name),x=z.length*un[C]+8,_=ss[C],A=[L-x/2,U-_/2,L+x/2,U+_/2];if(f.some(J=>A[0]<J[2]&&J[0]<A[2]&&A[1]<J[3]&&J[1]<A[3]))continue;f.push(A);let O=wi[c]||(wi[c]=Object.assign(document.createElement("div"),{className:"mlab"}));O.isConnected||document.body.appendChild(O),O._n!==z&&(O.textContent=z,O._n=z),O._t!==C&&(O.className="mlab t"+C,O._t=C),O.style.transform=`translate(${Math.round(L)}px,${Math.round(U)}px) translate(-50%,-50%)`,O.style.display="block",c++}}for(;c<wi.length;c++)wi[c].style.display="none"}let Ue={at:0,hoy:null,ayer:null,err:""},Sp="https://raw.githubusercontent.com/elMonoAmelio/catalunya-survival/stats/";function Gl(){Date.now()-Ue.at<5*6e4||(Ue.at=Date.now(),Promise.all(["hoy","ayer","hist","dias30"].map(a=>fetch(Sp+a+".json",{cache:"no-store"}).then(c=>c.ok?c.json():null).catch(()=>null)).map((a,c)=>c===3?a.then(f=>f||fetch(Sp+"dias.json",{cache:"no-store"}).then(p=>p.ok?p.json():null).catch(()=>null)):a)).then(([a,c,f,p])=>{Ue.hoy=a,Ue.ayer=c,Ue.hist=f,Ue.dias=p,Ue.tr=null,Ue.err=a?"":__t(46),(Ut||me)&&(d._h="",Re()),_e(!0)}))}function h_(a){let c={};for(let p of a&&a.snaps||[])for(let v of p.r||[]){let S=/^\d+[A-Z](\d+)/.exec(v);S&&(c[S[1]]=c[S[1]]||[]).push(Math.max(0,p.d&&p.d[v]||0)/60)}let f={};for(let p in c){let v=c[p].sort((S,C)=>S-C);f[p]=Math.round(v[v.length>>1])}return f}function Wl(a){if(!Ue.tr){let f=new Map;for(let p of Ue.hist&&Ue.hist.days||[])f.set(p.day,p.tr);for(let p of[Ue.ayer,Ue.hoy])if(p&&p.day&&!f.has(p.day)){let v=h_(p);Object.keys(v).length&&f.set(p.day,v)}Ue.tr=f}if(a==="")return null;let c=[...Ue.tr.values()].map(f=>f[String(a)]).filter(f=>f!=null);return c.length?{n:c.length,late:c.filter(f=>f>=5).length,avg:c.reduce((f,p)=>f+p,0)/c.length}:null}let bp=a=>new Date(+a.slice(0,4),+a.slice(4,6)-1,+a.slice(6,8)).getDay(),d_=a=>{let c=-1,f=9,p=bp(a),v=S=>S===0||S===6?S:1;return t.days.forEach((S,C)=>{let I=bp(S),L=S===a?0:I===p?1:v(I)===v(p)?2:9;L<f&&(f=L,c=C)}),f<9?c:-1},Mp=()=>{let a=new Map;for(let c of Ue.hist&&Ue.hist.days||[])c.cx&&a.set(c.day,new Set(c.cx.map(String)));return a},f_=()=>{let a=(Ue.hist&&Ue.hist.days||[]).find(c=>c.cx);return a?a.day:null};function wp(a){Wl("");let c=Mp(),f=0,p=0,v=0,S=0;for(let[C,I]of Ue.tr||[]){let L=d_(C.replace(/-/g,""));if(L<0)continue;let U=Jr(a,L);if(!U)continue;let z=String(U.num);if(c.get(C)&&c.get(C).has(z)){S++,f++;continue}let x=I[z];x!=null&&(f++,v+=x,x>=5&&p++)}return{n:f,late:p,sum:v,nc:S}}let Xl=null,Ep=a=>{if(!Xl){Xl=new Map;for(let c of st)for(let f of c||[])Xl.set(String(f.num),f.fam)}return Xl.get(String(a))};function Tp(a){let c=(Ue.dias&&Ue.dias.days||[]).slice(-30);if(!c.length)return null;let f=new Map;for(let L of c)for(let[U,z]of Object.entries(L.lines||{})){let x=f.get(U)||{n:0,ok:0,s:0,max:0,days:0};x.n+=z.n,x.ok+=z.ok,x.s+=z.avg*z.n,x.max=Math.max(x.max,z.max||0),x.days++,f.set(U,x)}let p=f.get(a);if(!p||p.n<30)return null;let v=[...f.entries()].filter(([L,U])=>Z[L]&&U.n>=30).sort((L,U)=>L[1].ok/L[1].n-U[1].ok/U[1].n),S=v.findIndex(([L])=>L===a),C=Mp(),I=0;for(let L of C.values())for(let U of L)Ep(U)===a&&I++;return{pct:p.ok/p.n*100,avg:p.s/p.n,max:p.max,days:p.days,pos:S+1,of:v.length,nc:I,since:f_()}}let p_=a=>a?`${+a.slice(8,10)}/${+a.slice(5,7)}`:"",Wh=a=>a>=60?`${Math.floor(a/60)} h ${String(Math.round(a%60)).padStart(2,"0")} min`:`${Math.round(a)} min`,ws=a=>a>=90?"g":a>=80?"y":a>=65?"w":"b",Es={g:"#16a34a",y:"#eab308",w:"#ea7a0c",b:"#dc2626"},Ap=a=>a>10?Es.b:a>5?Es.w:a>=1?Es.y:Es.g,Ts=a=>(a>=.05?"+":"")+(Math.round(a*10)/10).toString().replace(".",",")+" min";function ao(a,c,f){return`<div class="sbars">${a.map(p=>`<div class="sbar" title="${m(p.tip||"")}"><span class="sl">${p.lab}</span><span class="st"><i style="width:${Math.max(2,Math.round(p.w*100))}%;background:${p.c}"></i></span><b class="sv" style="color:${p.c===Es.y?"var(--svy,#a16207)":p.c===Es.w?"var(--svw,#c2410c)":p.c}">${p.val}</b></div>`).join("")}</div>`}function m_(a){if(a=(a||[]).filter(G=>G.n>=10),!a||a.length<2){let G=a&&a[0];return G?`${__t(47)}${G.t}: ${Math.round(G.ok/G.n*100)}${__t(48)}${G.n}${__t(49)}`:__t(50)}let c=G=>{let[nt,W]=G.t.split(":").map(Number);return nt*60+W},f=c(a[0]),p=Math.max(f+60,c(a[a.length-1])),v=300,S=112,C=24,I=G=>C+(G-f)*(v-C-8)/(p-f),L=G=>8+(100-G)/100*(S-26),U=G=>G.n?G.ok/G.n*100:100,z=a.map(G=>[I(c(G)),L(U(G)),G]),x=G=>G[0].toFixed(1)+","+G[1].toFixed(1),_=[],A=[];z.forEach((G,nt)=>{nt&&c(G[2])-c(z[nt-1][2])>45&&(_.push(A),A=[]),A.push(G)}),_.push(A);let O=z[z.length-1],J=[];for(let G=Math.ceil(f/180)*3;G*60<p;G+=3)G*60>f+20&&J.push(G);let Q=Math.round(a.reduce((G,nt)=>G+nt.ok,0)/Math.max(1,a.reduce((G,nt)=>G+nt.n,0))*100);return`<svg class="schart" viewBox="0 0 ${v} ${S}${__t(51)}${[100,75,50,25].map(G=>`<line x1="${C}" x2="${v-4}" y1="${L(G)}" y2="${L(G)}" class="gl"/><text x="2" y="${L(G)+3}" class="ax">${G}%</text>`).join("")}
      <line x1="${C}" x2="${v-4}" y1="${L(Q)}" y2="${L(Q)}" class="avg"/>
      ${_.filter(G=>G.length).map(G=>`<polygon points="${x([G[0][0],L(0)])} ${G.map(x).join(" ")} ${x([G[G.length-1][0],L(0)])}" class="ar"/><polyline points="${G.map(x).join(" ")}" class="ln"/>`).join("")}
      ${z.map(([G,nt,W])=>`<circle cx="${G.toFixed(1)}" cy="${nt.toFixed(1)}" r="6" class="hit"><title>${W.t} \xB7 ${Math.round(U(W))}${__t(52)}${W.n}${__t(53)}${W.d5}${__t(54)}${Ts(W.avg)}${W.nd?` \xB7 ${W.nd}${__t(55)}`:""}</title></circle>`).join("")}
      <circle cx="${O[0].toFixed(1)}" cy="${O[1].toFixed(1)}" r="3.5" class="pt"/><text x="${Math.min(O[0],v-30).toFixed(1)}" y="${(O[1]-7).toFixed(1)}" class="lv" text-anchor="middle">${Math.round(U(O[2]))}%</text>
      ${J.map(G=>`<text x="${I(G*60).toFixed(1)}" y="${S-4}" class="ax" text-anchor="middle">${String(G).padStart(2,"0")}h</text>`).join("")}
      <text x="${C}" y="${S-4}" class="ax">${a[0].t}</text></svg><small class="snote">${__t(56)} (${Q}%)</small>`}function g_(){Gl();let a=ee(),c=Bt.filter(I=>I.real&&lt()&&a.live),f=c.filter(I=>H.delays.has(I.v.tid)),p=f.length,v=c.length-p,S=`<div class="tc sts" style="--c:#1d2330"><button class="x" data-cx>\xD7</button><h3 class="ilt sm">${__t(57)}</h3>`;if(p){let I=f.filter(nt=>nt.dl<3).length,L=f.filter(nt=>nt.dl>=5).length,U=f.filter(nt=>nt.stop==="via").length,z=Math.round(I/p*100);S+=`${__t(58)}${p}${__t(59)}${v?` \xB7 ${v}${__t(64)}`:""}</small><div class="kpis">
        <div class="kpi ${ws(z)}"><b>${z}${__t(60)}${ws(100-L/p*100*2)}" title="${Math.round(L/p*100)}${__t(61)}${L}${__t(62)}${U===0?"g":U<=2?"w":"b"}"><b>${U}${__t(63)}`;let x=new Map;f.forEach(nt=>{let W=nt.fam,zt=x.get(W)||{n:0,ok:0,sum:0};zt.n++,zt.ok+=nt.dl<3,zt.sum+=Math.max(0,nt.dl),x.set(W,zt)});let _=[...x].filter(([nt])=>Z[nt]).sort((nt,W)=>nt[1].ok/nt[1].n-W[1].ok/W[1].n||W[1].sum/W[1].n-nt[1].sum/nt[1].n),A=_.filter(([,nt])=>nt.ok<nt.n),O=_.filter(([,nt])=>nt.ok===nt.n);S+=`${__t(65)}`+(A.length?"":__t(66))+ao(A.map(([nt,W])=>({lab:Mn(nt),w:W.ok/W.n,c:Es[ws(W.ok/W.n*100)],val:`${Math.round(W.ok/W.n*100)}% <small>${Ts(W.sum/W.n)}</small>`,tip:`${nt}: ${W.ok}${__t(67)}${W.n}${__t(68)}${Ts(W.sum/W.n)}`})))+(O.length?`${__t(69)}${O.map(([nt])=>Mn(nt)).join(" ")}</p>`:"");let J=new Map;f.forEach(nt=>{if(!nt.tr||nt.v.next==null||nt.v.next<0||nt.v.pre)return;let W=nt.tr.pat.stops[nt.v.next],zt=J.get(W)||{n:0,sum:0};zt.n++,zt.sum+=Math.max(0,nt.dl),J.set(W,zt)});let Q=[...J].filter(([,nt])=>nt.sum/nt.n>=1).sort((nt,W)=>W[1].sum/W[1].n-nt[1].sum/nt[1].n).slice(0,8),G=Q.length?Q[0][1].sum/Q[0][1].n:1;S+=`${__t(70)}`+(Q.length?ao(Q.map(([nt,W])=>({lab:`<span class="sn" data-gs="${nt}">${m(T[nt].n)}</span>`,w:W.sum/W.n/G,c:Ap(W.sum/W.n),val:`${Ts(W.sum/W.n)} <small>${W.n} ${W.n===1?"tren":__t(71)}</small>`,tip:`${T[nt].n}: ${W.n}${__t(72)}${Ts(W.sum/W.n)}${__t(73)}`}))):__t(74))}else S+=`${__t(75)}`;let C=Ue.hoy;S+=`<button type="button" class="hmore" data-cols>${gn.on?__t(76):__t(77)}</button>`;{yo("");let I=[...zi.m].filter(([L,U])=>Z[L]&&U[0]>=3).map(([L,U])=>[L,U[1]/U[0]]).sort((L,U)=>L[1]-U[1]);I.length&&!lt()?S+=`<h4>${__t(78)}</h4><small class="snote">${__t(79)}</small>`:I.length&&(S+=`${__t(80)}`+ao(I.slice(0,8).map(([L,U])=>({lab:Mn(L),w:U,c:Es[ws(U*100)],val:`${Math.round(U*100)}%`,tip:`${L}: ${Math.round(U*100)}${__t(81)}`}))))}{let I=(A,O)=>{let J=(A&&A.snaps||[]).filter(nt=>nt.n&&(!O||nt.t<=O)),Q=J.reduce((nt,W)=>nt+W.n,0),G=J.reduce((nt,W)=>nt+W.ok,0);return Q?G/Q*100:null},L=(Ue.hoy&&Ue.hoy.snaps||[]).filter(A=>A.n).map(A=>A.t).pop(),U=I(Ue.hoy),z=I(Ue.ayer,L),x=U!=null?Math.round(U):null,_=z!=null?Math.round(z):null;U!=null&&(S+=`${__t(82)}${ws(U)}">${Math.round(U)}${__t(83)}${z!=null?`<span>${L?__t(84):__t(85)} <b class="${ws(z)}">${_} %</b></span><span>${x>_?__t(86):x<_?__t(87):__t(88)}</span>`:""}</div>`)}if(S+=`${__t(89)}`,C&&C.snaps){S+=m_(C.snaps);let I=Object.entries(C.st||{}).map(([z,x])=>[Vt.get(z),x]).filter(([z,x])=>z!=null&&x.n>=3).map(([z,x])=>[z,x.sum/x.n/60,x]).filter(z=>z[1]>=1).sort((z,x)=>x[1]-z[1]).slice(0,8);if(I.length){let z=I[0][1];S+=`${__t(90)}`+ao(I.map(([x,_,A])=>({lab:`<span class="sn" data-gs="${x}">${m(T[x].n)}</span>`,w:_/z,c:Ap(_),val:`${Ts(_)}${__t(91)}${Math.round(A.max/60)}</small>`,tip:`${T[x].n}: ${A.n}${__t(92)}${A.d5}${__t(93)}${Math.round(A.max/60)} min`})))}let L=Object.entries(C.lines||{}).filter(([z,x])=>Z[z]&&x.n>=3).sort((z,x)=>z[1].ok/z[1].n-x[1].ok/x[1].n);L.length&&(S+=`${__t(94)}`+ao(L.map(([z,x])=>({lab:Mn(z),w:x.ok/x.n,c:Es[ws(x.ok/x.n*100)],val:`${Math.round(x.ok/x.n*100)}% <small>${Ts(x.sum/x.n/60)}</small>`,tip:`${z}${__t(95)}${Math.round(x.ok/x.n*100)}${__t(96)}${Math.round(x.max/60)} min`}))));let U=C.upd?(Date.now()-Date.parse(C.upd))/6e4:0;S+=`<small class="snote">${U>40?`${__t(98)}${ys(U<90?Math.round(U)+" min":U<2160?Math.round(U/60)+" h":Math.round(U/1440)+(window.__L==="en"?" days":window.__L==="ca"?" dies":" d\xEDas"))}${__t(99)}`:""}${__t(97)}${m((C.upd||"").slice(11,16))} \xB7 ${(C.note||"").includes("Solo cuentan")?__t(100):__t(101)}</small>`}else S+=`<p class="snote">${Ue.at?__t(102):__t(103)}</p>`;return S+"</div>"}function __(a){let c=ee(),f=Bt.filter(_=>(_.fam||_.tr&&_.tr.fam)===a),p=f.filter(_=>_.real),v=f.length,S=f.filter(_=>_.dl>=5).length,C=f.filter(_=>_.dl<3).length,I=f.filter(_=>_.stop==="via"||_.broke).length,L=H.alerts.filter(_=>_.fams.has(a)),U=_=>{let A=_.tr;if(!A)return"";let O=_.v;if(_.real&&O){let Q=O.next>=0?T[A.pat.stops[O.next]].n:"";return O.atStop>=0?`${__t(104)}${T[A.pat.stops[O.atStop]].n}`:Q?`${__t(105)}${Q}`:""}let J=_.p;return J&&J.next!=null&&J.next>=0?`${__t(105)}${T[A.pat.stops[J.next]].n}`:""},z=f.slice().sort((_,A)=>A.dl-_.dl).slice(0,40).map(_=>{let A=_.tr;return`<li class="go${uo({num:A?A.num:_.v.num,tid:A?A.tid:_.v.tid})?" sel":""}" data-gt="${m(A?A.num:_.v.num)}|${m(_.real?_.v.tid:A?A.tid:"")}"><b>${m(A?A.num:_.v.num)}</b><span>${A?Ni(T[A.pat.stops[A.pat.stops.length-1]].n,a):""} <small>${m(U(_))}</small></span>${_.dl>=1?`<em class="dl ${$i(_.dl)}">+${Math.round(_.dl)}</em>`:__t(106)}</li>`}).join(""),x=yo(a);return`<div class="tc sts" style="--c:${Z[a]||"#1d2330"}"><button class="x" data-cx>\xD7</button><h3 class="ilt sm">${Mn(a)} ${__t(107)}</h3><div class="seg2 iseg lseg">${[["now",__t(108)],["30",__t(109)],["trips",__t(110)]].map(([_,A])=>`<button type="button" data-lseg="${_}" class="${Yl.v===_?"on":""}">${A}</button>`).join("")}</div>${Yl.v!=="now"?v_(a,Yl.v):`<small>${c.live?`${__t(114)}${v}${__t(115)}${p.length<v?` (${p.length}${__t(116)}`:""}`:`${__t(117)}${rt(c.min)}`}</small>
      <div class="kpis"><div class="kpi ${v?ws(C/v*100):""}"><b>${v?Math.round(C/v*100)+"%":"\u2014"}${__t(111)}${S?S/Math.max(1,v)>.2?"b":"w":"g"}"><b>${S}${__t(112)}${I?"b":"g"}"><b>${I}${__t(113)}${L.length?y_(L):__t(118)}${x<.7?`${__t(119)}${Math.round(x*100)}${__t(120)}`:""}
      <small style="margin-top:6px">${__t(121)}</small><ol class="${ql.v?"":"lshort"}">${z||__t(122)}</ol>${f.length>6?`<button type="button" class="hmore" data-lmore>${ql.v?__t(123):`\u25BE ${__t(124)} ${Math.min(40,f.length)} ${__t(71)}`}</button>`:""}
      <div class="rtb"><button type="button" data-share>\u{1F4E4} Compartir estado</button></div>`}</div>`}let ql={v:!1},Yl={v:"now"};function x_(a){let c=xm(a,30);if(!c.length)return`<h4>${__t(110)}</h4><p class="snote">${__t(125)}</p>`;let f=c.filter(I=>I.dl!=null),p=f.filter(I=>I.dl>=5).length,v=f.reduce((I,L)=>I+L.dl,0),S=I=>{let L=Vt.get(I);return L!=null?T[L].n.replace(/^Barcelona[ -]+(?=\S)/,""):""},C=c.slice().sort((I,L)=>L.t0-I.t0).slice(0,5).map(I=>`<li><b>${+I.d.slice(6,8)}/${+I.d.slice(4,6)}</b><span>${I.ad!=null?rt(I.ad)+" \xB7 ":""}${m(S(I.a))}${I.a?" \u2192 ":""}${m(S(I.b))}<small>${I.dl==null?__t(126):I.dl>=1?`${__t(127)} <b>+${I.dl} min</b>`:__t(128)} \xB7 tren ${m(I.num)}</small></span><button type="button" class="tripx" data-tripx="${m(I.k)}" title="${__t(129)}" aria-label="${__t(129)}">\u2715</button></li>`).join("");return`<h4>${__t(110)} \xB7 ${c.length}</h4>
      <div class="kpis"><div class="kpi nx"><b>${c.length}</b><span>${c.length===1?__t(130):__t(131)}<br>${__t(132)}</span></div><div class="kpi ${f.length?p/f.length>=.5?"b":p/f.length>=.25?"w":"g":"nx"}"><b>${p}</b><span>${__t(133)}<br>(5 min ${__t(134)})</span></div><div class="kpi ${v>=60?"b":v>=20?"w":"nx"}"><b>${v>=60?`${Math.floor(v/60)} h ${String(Math.round(v%60)).padStart(2,"0")}`:`${Math.round(v)} min`}</b><span>${__t(135)}<br>${__t(136)}</span></div></div>
      <ol class="l30f">${C}</ol>`}function v_(a,c){let f=Tp(a),p=mi.filter(x=>x.fam===a);if(!f&&c!=="trips")return`<h4>${__t(137)}</h4><p class="snote">${Ue.at?__t(138):__t(103)}</p>`;let v=f.since&&f.since>new Date(Date.now()-29*864e5).toISOString().slice(0,10)?`${__t(139)} ${p_(f.since)}`:`${__t(132)}`,S=Math.min(30,f.days),C=`${__t(140)} ${S} ${__t(141)}`,I=f.of>1?(f.pos<=f.of/2?`${Mn(a)} ${__t(142)} <b>${f.pos}.\xAA ${__t(143)}</b> ${__t(144)} ${f.of}`:`${Mn(a)} ${__t(142)} <b>${f.of-f.pos+1}.\xAA ${__t(145)}</b> ${__t(144)} ${f.of}`)+" \xB7 ":"",L=p.map(x=>{let _=wp(x),A=Vt.get(x.sid),O=x.dest&&Vt.get(x.dest);return`<li><b>${m(x.t)}</b><span>${m(A!=null?T[A].n:"")}${O!=null?" \u2192 "+m(T[O].n):""}<small>${_.n?`${__t(146)} <b>${_.late} ${__t(144)} ${_.n} ${__t(141)}</b>${_.nc?` \xB7 <b>${_.nc} ${_.nc===1?__t(147):__t(148)}</b>`:""} \xB7 ${__t(149)} \u2248 <b>${Wh(_.sum)}</b>`:__t(150)}</small></span></li>`}).join(""),U=`<div class="rtb"><button type="button" data-share30>\u{1F4E4} ${__t(151)}</button></div>`,z=`<small class="snote">${__t(152)}</small>`;return c==="trips"?`${x_(a)}
      <h4>${__t(153)}</h4>${p.length?`<ol class="l30f">${L}</ol>`:`<p class="snote">${__t(154)}</p>`}${f?U:""}${z}`:`<h4>${C}</h4>
      <div class="kpis"><div class="kpi ${ws(f.pct)}"><b>${Math.round(f.pct)}%</b><span>${__t(128)}<br>(\u22123 min)</span></div><div class="kpi ${f.avg>=4?"b":f.avg>=2.5?"w":f.avg>=1.5?"y":"g"}"><b>${Ts(f.avg).replace(" min","")}</b><span>${__t(155)}<br>${__t(156)}</span></div>${f.since?`<div class="kpi ${f.nc?f.nc>=10?"b":"w":"g"}"><b>${f.nc}</b><span>${f.nc===1?__t(157):__t(158)}<br>${v}</span></div>`:`<div class="kpi nx"><b>\u2014</b><span>${__t(159)}<br>${__t(160)}</span></div>`}</div>
      <p class="snote">${I}${__t(161)} +${f.max} min \xB7 ${f.days} ${__t(162)}</p>${U}${z}`}let y_=a=>`<div class="al">${a.slice(0,3).map(c=>`<p>\u26A0\uFE0F ${go(c)} ${m(c.txt)} <small>${_o(c)}</small></p>`).join("")}</div>`,gn={on:!1,mesh:null};function Cp(){let a=Ue.hoy,c=[];if(a&&a.st)for(let[f,p]of Object.entries(a.st)){let v=Vt.get(f);v!=null&&p.n>=2&&c.push([v,p.sum/p.n/60,p.n])}if(!c.length){let f=new Map;Bt.forEach(p=>{if(!p.real||!p.tr||p.v.next==null||p.v.next<0||p.v.pre||!H.delays.has(p.v.tid))return;let v=p.tr.pat.stops[p.v.next],S=f.get(v)||[0,0];S[0]+=Math.max(0,p.dl),S[1]++,f.set(v,S)}),f.forEach((p,v)=>c.push([v,p[0]/p[1],p[1]]))}return c}let Rp=()=>Math.min(1,Math.max(.22,r.dist/110));function S_(){if(!gn.mesh||!gn.d)return;let a=Rp();if(Math.abs(a-gn.r)<.04)return;gn.r=a;let c=new Ze;gn.d.forEach(([f,p],v)=>{c.makeScale(a,a,.3+Math.min(p,40)*.3),c.setPosition(T[f].w[0],T[f].w[1],V),gn.mesh.setMatrixAt(v,c)}),gn.mesh.instanceMatrix.needsUpdate=!0,o()}function b_(){if(gn.mesh&&(e.remove(gn.mesh),gn.mesh.geometry.dispose(),gn.mesh.material.dispose(),gn.mesh=null),!gn.on){o();return}let a=Cp();if(!a.length){Ve(__t(163)),gn.on=!1;return}let c=new nl(.32,.32,1,16);c.rotateX(Math.PI/2),c.translate(0,0,.5);let f=new Pr({fog:!1}),p=new Ko(c,f,a.length),v=new Ze,S=new ye;gn.d=a,gn.r=Rp(),a.forEach(([C,I],L)=>{let U=.3+Math.min(I,40)*.3;v.makeScale(gn.r,gn.r,U),v.setPosition(T[C].w[0],T[C].w[1],V),p.setMatrixAt(L,v),S.set(I>10?"#dc2626":I>5?"#ea7a0c":I>=1?"#eab308":"#16a34a"),p.setColorAt(L,S)}),p.renderOrder=25,p.frustumCulled=!1,e.add(p),gn.mesh=p,s.tilt<.5&&(s.tilt=.85),o()}let Yr=document.createElement("button");Yr.type="button",Yr.id="sbtn",Yr.title=__t(164),Yr.innerHTML=__t(165),Yr.onclick=()=>{Ut=!Ut,Ut&&(Ot=Ce=!1,Ue.at=0),d._h="",Re(),o()},document.body.appendChild(Yr);function M_(){r.dist<45!=ii<45&&(ii=r.dist,zn()),S_(),w_(),ro()}let As=[],Tn=new j;function w_(){let a=0;if(gn.on){let f=Cp().sort((v,S)=>S[1]-v[1]),p=[];for(let[v,S]of f){if(a>=30)break;if(Tn.set(T[v].w[0],T[v].w[1],V).project(n),Tn.z>1||Math.abs(Tn.x)>1||Math.abs(Tn.y)>1)continue;let C=(Tn.x*.5+.5)*innerWidth,I=(-Tn.y*.5+.5)*innerHeight;if(p.some(([U,z])=>Math.abs(U-C)<90&&Math.abs(z-I)<18))continue;p.push([C,I]);let L=As[a]||(As[a]=Object.assign(document.createElement("div"),{className:"slab"}));L.isConnected||document.body.appendChild(L),L.textContent=T[v].n+" +"+Math.round(S)+"\u2032",L.dataset.i=v,L.style.display="block",L.style.transform=`translate(${Math.round(C+8)}px,${Math.round(I-8)}px)`,a++}for(;a<As.length;a++)As[a].style.display="none";return}if(r.dist<30){let f=[];for(let p=0;p<ze;p++)pr[p]<4||(Tn.set(T[p].w[0],T[p].w[1],V).project(n),!(Tn.z>1||Math.abs(Tn.x)>1.05||Math.abs(Tn.y)>1.05)&&f.push([p,(Tn.x*.5+.5)*innerWidth,(-Tn.y*.5+.5)*innerHeight]));if(f.length<=70)for(let[p,v,S]of f){let C=As[a]||(As[a]=Object.assign(document.createElement("div"),{className:"slab"}));C.isConnected||document.body.appendChild(C),C.textContent=T[p].n,C.dataset.i=p,C.style.display="block",C.style.transform=`translate(${Math.round(v+8)}px,${Math.round(S-7)}px)`,a++}}for(;a<As.length;a++)As[a].style.display="none"}function Jl(a){return Tn.set(a[0],a[1],V).project(n),[(Tn.x*.5+.5)*innerWidth,(-Tn.y*.5+.5)*innerHeight,Tn.z]}function Xh(a,c,f,p){let v=null,S=f*f;for(let C of Bt){let[I,L,U]=Jl(C.p.w);if(U>1)continue;let z=(I-a)**2+(L-c)**2;z<S&&(S=z,v={a:C})}if(v)return v;S=p*p;for(let C=0;C<ze;C++){if(!pr[C])continue;let[I,L,U]=Jl(T[C].w);if(U>1)continue;let z=(I-a)**2+(L-c)**2;z<S&&(S=z,v={s:C})}return v}let Xs=!1;window.__rodHide=()=>{Xs=!0},document.addEventListener("click",a=>{Xs&&!a.target.closest("#mcs, canvas")&&(Xs=!1)},!0),window.__rodTap=(a,c)=>{let f=Xh(a,c,20,0);if(f&&f.a)return Xs=!1,Ie.st=-1,Ot=!1,Ce=!1,Ut=!1,Et=f.a.tr||{vtid:f.a.v.tid},ae=-1,fe=null,zn(),Re(),De=0,o(),!0;let p=null,v=1e9;for(let C of As){if(C.style.display==="none")continue;let I=C.getBoundingClientRect();if(a>=I.left-4&&a<=I.right+4&&c>=I.top-4&&c<=I.bottom+4){let L=Math.abs(c-(I.top+I.bottom)/2)*4+(a-I.left);L<v&&(v=L,p=C)}}if(p)return window.__rodPickStation(+p.dataset.i),!0;let S=Xh(a,c,24,18);return S&&(S.a||S.s!=null)&&(Xs=!1),S&&(S.a||S.s!=null)&&(Ie.st=-1),S&&S.a?(Ot=!1,Ce=!1,Ut=!1,Et=S.a.tr||{vtid:S.a.v.tid},ae=-1,fe=null,zn(),Re(),De=0,o(),!0):S&&S.s!=null?(Ot=!1,Ce=!1,Ut=!1,ae=S.s,Et=null,fe=null,zn(),Re(),o(),!0):!1},window.__rodHover=(a,c)=>{let f=Xh(a,c,14,10);if(f&&f.a){let p=f.a,v=p.tr?T[p.tr.pat.stops[p.tr.pat.stops.length-1]].n:"";return`<b><span style="color:${p.c}">\u25A0</span> ${m(p.fam||p.tr&&p.tr.fam||"?")}${__t(166)}${m(p.tr?p.tr.num:p.v.num)}</b><small>${v?__t(105)+m(v):""}${p.real?(p.dl>=1?` \xB7 <b style="color:#c2410c">+${Math.round(p.dl)} min</b>`:__t(167))+__t(168):__t(169)}</small>`}return f&&f.s!=null?`<b>${m(T[f.s].n)}</b><small>${[...T[f.s].fams].sort(B).join(" \xB7 ")}</small>`:null},window.__rodPickStation=a=>{Ie.st=-1,Xs=!1,Ot=Ce=Ut=!1,Et=null,fe=null,ae=a,zn(),d._h="",Re(),o()};{let a=y("#rc"),c=()=>{let f=a.getBoundingClientRect().top;document.documentElement.style.setProperty("--mcsmax",Math.max(160,f-64-10)+"px")};try{new ResizeObserver(c).observe(a)}catch{}addEventListener("resize",c),setTimeout(c,300)}if("serviceWorker"in navigator&&location.protocol==="https:"){let a=!1,c=!!navigator.serviceWorker.controller;navigator.serviceWorker.addEventListener("controllerchange",()=>{if(!c||a)return;let f=((y("#ver")||{}).textContent||"").match(/\d+\.\d+/);fetch("./sw.js",{cache:"no-store"}).then(p=>p.text()).then(p=>{let v=(p.match(/VERSION = 'cs-(\d+\.\d+)'/)||[])[1];v&&f&&v!==f[0]&&!a&&(a=!0,location.reload())}).catch(()=>{})}),navigator.serviceWorker.register("./sw.js").then(f=>{f.update().catch(()=>{}),document.addEventListener("visibilitychange",()=>{document.hidden||f.update().catch(()=>{})})}).catch(()=>{})}setTimeout(()=>{try{Gl()}catch{}},2500),setInterval(()=>{try{Ue.at=0,Gl()}catch{}},15*6e4);let pi={mode:(()=>{try{return localStorage.getItem("rod_theme")||"auto"}catch{return"auto"}})()},oo=matchMedia("(prefers-color-scheme: dark)");function Zl(){let a=pi.mode==="dark"||pi.mode==="auto"&&oo.matches;document.documentElement.classList.toggle("dark",a);for(let f=0;f<ze;f++)fi.set(a?[.06,.08,.11]:[1,1,1],f*3);Je.attributes.fill.needsUpdate=!0,eo.uniforms.border.value.set(a?"#e7ebf3":"#1d2330"),window.__mapTheme&&window.__mapTheme(a),_r.textContent=pi.mode==="auto"?a?"\u{1F319}":"\u2600\uFE0F":pi.mode==="dark"?"\u{1F319}":"\u2600\uFE0F",_r.title=__t(170)+{auto:__t(171),dark:__t(172),light:"desactivado"}[pi.mode];let c=document.querySelector("meta[name=theme-color]");c&&(c.content=a?"#0d1119":"#eef1f5"),o()}let _r=document.createElement("button");_r.type="button",_r.id="tbtn",_r.onclick=()=>{pi.mode=pi.mode==="auto"?oo.matches?"light":"dark":pi.mode==="dark"?"light":"dark",pi.mode==="dark"===oo.matches&&(pi.mode="auto");try{localStorage.setItem("rod_theme",pi.mode)}catch{}Zl(),Ve(_r.title)},document.body.appendChild(_r);{let a=document.createElement("a");a.id="wabtn",a.href="https://www.whatsapp.com/channel/0029Vav4hGTId7nPenKMuo2C",a.target="_blank",a.rel="noopener",a.title=__t(173),a.innerHTML=__t(174),document.body.appendChild(a)}oo.addEventListener&&oo.addEventListener("change",Zl),Zl(),window.__rodTick=ke,window.__rodFrame=M_,window.__rodResize=()=>{ue.resolution.set(innerWidth,innerHeight),xe.resolution.set(innerWidth,innerHeight)},window.__rodResize();let Di={st:-1,f:new Set},Ip=a=>{let c=[...T[a].fams].sort(B);return`<div class="sfc">${c.length>1?`<button type="button" data-sf="" class="${Di.f.size?"":"on"}${__t(175)}`:""}${c.map(f=>`<button type="button" data-sf="${m(f)}" class="ln ${Di.f.size&&!Di.f.has(f)?"off":""}${Dt.has(f)?"":" hid"}" style="--c:${Z[f]}">${m(f)}</button>`).join("")}</div>${c.some(f=>!Dt.has(f))?__t(176):""}`},E_=a=>{let c=(a||"#6b7385").replace("#",""),f=parseInt(c.slice(0,2),16),p=parseInt(c.slice(2,4),16),v=parseInt(c.slice(4,6),16);return(.299*f+.587*p+.114*v)/255>.62?"#1d2330":"#fff"},Ni=(a,c)=>{let f=Z[c]||"#6b7385";return`<span class="dst" style="background:${f};color:${E_(f)}" title="${m(c||"")}">${m(a)}</span>`},jl=a=>{let c=T[a]&&T[a].id;return Xe.st.includes(c)?"\u{1F3E0} ":$e.st.includes(c)?"\u{1F4BC} ":""},$i=a=>a>10?"d-hi":a>5?"d-md":"d-lo",T_=/aver[ií]|incid[eè]ncia t[eè]cnica|incidencia t[eé]cnica|problema t[eè]cnic|t[eè]cnic[oa] del propi/i,lo={ref:null,m:new Map};function qh(a){if(lo.ref!==H.alerts){lo.ref=H.alerts,lo.m=new Map;for(let c of H.alerts){if(c.src!=="Rodalies")continue;let f=c.txt.match(/(?:a causa d[e']|per causa d[e']|debido a|degut a|due to|because of|caused by)\s+([^.]{4,140})/i);for(let p of(c.es||c.txt).matchAll(/\b[Tt]ren\s+(\d{4,6})\b/g))lo.m.set(p[1],{why:f?f[1].trim().replace(/\s+/g," "):"",txt:c.txt,when:c.when,cx:/no circula|no circular[àa]|suprimi|anul[·.]?la|cancel[·.]?la|anulad|cancelad/i.test(c.es||c.txt)})}}return lo.m.get(String(a))||null}let co={ref:null,m:new Map};function Pp(a){let c=String(a.tr?a.tr.num:a.v&&a.v.num||"");if(!c)return null;if(co.ref!==H.alerts){co.ref=H.alerts,co.m=new Map;for(let p of H.alerts)if(p.src==="Rodalies"&&T_.test(p.es||p.txt))for(let v of(p.es||p.txt).matchAll(/\b(\d{4,6})\b/g))co.m.set(v[1],p)}let f=co.m.get(c);return f?{why:"aviso",txt:f.txt}:a.real&&a.stop==="via"&&a.v.still>=300?{why:"via",min:Math.round(a.v.still/60)}:null}let uo=a=>{try{let c=Et;return c?c.num!=null&&String(c.num)===String(a.num)||a.tid&&(c.tid===a.tid||c.vtid===a.tid):!1}catch{return!1}},Lp=(a,c)=>{let f=R(a,c.min-1,c.min+240).sort((p,v)=>p.est-v.est).slice(0,6);return f.length?`${__t(177)}${f.map(p=>`<li><b>${rt(p.est)}</b>${Mn(p.fam)}<span>${Ni(p.dest,p.fam)}</span><i class="via">bus</i></li>`).join("")}</ol>`:""},mi=(()=>{try{return JSON.parse(localStorage.getItem("rod_fav")||"[]")}catch{return[]}})(),Dp=()=>{try{localStorage.setItem("rod_fav",JSON.stringify(mi))}catch{}},Np=(a,c)=>{if(a.num===String(c.num))return!0;let f=t.days.indexOf(ee().ymd),p=f>=0?Jr(a,f):null;return!!p&&String(p.num)===String(c.num)},Up=a=>{let c=a.pat.stops.slice(0,-1),f=[...Xe.st,...$e.st];return c.find(p=>f.includes(T[p].id))??c.find(p=>Ct.st.includes(T[p].id))??a.pat.stops[0]},Op=a=>!!a&&mi.some(c=>Np(c,a)),ve=(()=>{try{let a=JSON.parse(localStorage.getItem("rod_alarm")||"null");return a&&Date.now()-a.at<4*36e5?a:null}catch{return null}})(),Cs=()=>{try{localStorage.setItem("rod_alarm",JSON.stringify(ve))}catch{}},Kl=(a,c)=>!!(ve&&a&&ve.num===String(a.num)&&ve.sid===T[a.pat.stops[c]].id);function Ql(a,c){try{window.__vib?window.__vib():navigator.vibrate&&navigator.vibrate([400,150,400,150,600])}catch{}Ve(a+" \xB7 "+c),document.hidden&&"Notification"in window&&Notification.permission==="granted"&&(navigator.serviceWorker&&navigator.serviceWorker.getRegistration?navigator.serviceWorker.getRegistration():Promise.resolve(null)).then(f=>f?f.showNotification(a,{body:c,tag:"alarm",requireInteraction:!0,vibrate:[400,150,400,150,600],icon:"icons/icon-192.png"}):new Notification(a,{body:c})).catch(()=>{})}function A_(){if(!ve||ve.done)return;let a=ee();if(!a.live)return;let c=t.days.indexOf(a.ymd),f=(st[c]||[]).find(L=>String(L.num)===ve.num)||(st[c-1]||[]).find(L=>String(L.num)===ve.num);if(!f)return;let p=f.pat.stops.findIndex(L=>T[L].id===ve.sid);if(p<0)return;let v=kt(f),S=typeof v=="number"?Math.max(0,v/60):0,C=f.day===c-1?1440:0,I=f.t0+f.pat.t[2*p]+S-C;if(I-a.min<-3){ve.done=!0,Cs();return}if(window.__schedAt&&I-2-a.min>.1&&(ve.sch==null||Math.abs(ve.sch-I)>=.5)&&(ve.sch=I,ve.nat=Date.now()+(I-2-a.min)*6e4,Cs(),window.__schedAt(7701,`${__t(178)}${T[f.pat.stops[p]].n}`,__t(179)+` (${rt(I)})`+(L=>L?` \xB7 ${__t(180)} ${L.fam} ${__t(181)} ${rt(L.est)}${L.plat?__t(182)+L.plat:""}`:"")(ic.get(ve.sid)),Date.now()+(I-2-a.min)*6e4)),I-a.min<=2){ve.done=!0,Cs();let L=ic.get(ve.sid),U=L?` \xB7 ${L.lost?__t(183)+" \xB7 "+__t(184):__t(180)} ${L.fam} ${__t(181)} ${rt(L.est)}${L.plat?__t(182)+L.plat:""}`:"",z=Math.round(I-a.min),_=(z>=1?`${__t(186)} ${z}${__t(185)}${rt(I)}) \xB7 ${__t(187)}`:`${__t(188)} (${rt(I)}) \xB7 ${__t(187)}`)+U;window.__schedAt&&ve.nat&&Date.now()>=ve.nat-2e4?document.hidden||Ql(`${__t(178)}${T[f.pat.stops[p]].n}`,_):(window.__schedOff&&window.__schedOff(7701),Ql(`${__t(178)}${T[f.pat.stops[p]].n}`,_))}}function Jr(a,c){let f=+a.t.slice(0,2)*60+ +a.t.slice(3,5),p=st[c]||[],v=(I,L)=>I.t0+I.pat.t[2*L+1],S=null,C=11;for(let I of p){let L=I.pat.stops.findIndex(z=>T[z].id===a.sid);if(L<0||L===I.pat.stops.length-1)continue;let U=Math.abs(v(I,L)-f)+(String(I.num)===a.num?-5:0)+(I.fam===a.fam?0:20)+(a.dest&&T[I.pat.stops[I.pat.stops.length-1]].id!==a.dest?3:0);U<C&&(C=U,S=I)}return S}let tc=new Set;function C_(){if(!mi.length)return;let a=ee();if(!a.live)return;let c=t.days.indexOf(a.ymd);for(let f of mi){let p=Jr(f,c);if(!p)continue;let v=p.pat.stops.findIndex(z=>T[z].id===f.sid);if(v<0)continue;let S=p.t0+p.pat.t[2*v+1],C=kt(p),I=typeof C=="number"?C/60:0,L=S-a.min;if(L<-2||L>60)continue;let U=a.ymd+f.num+(C==="X"?"X":I>=10?10:I>=5?5:0);tc.has(U)||(C==="X"||I>=5?(tc.add(U),Ql(`${__t(189)}${rt(S)} ${C==="X"?__t(190):`${__t(191)}${Math.round(I)} min`}`,`${p.fam} ${p.num}${__t(192)}${T[p.pat.stops[v]].n}${C==="X"?"":`${__t(193)}${rt(S+I)}`}`)):L<=20&&!tc.has(a.ymd+f.num+"ok")&&H.vp.has(p.tid)&&(tc.add(a.ymd+f.num+"ok"),Ve(`${__t(189)}${rt(S)}${__t(194)}`)))}}setInterval(()=>{try{A_(),C_()}catch{}},15e3);let Mn=a=>`<span class="ln" style="--c:${Z[a]}">${m(a)}</span>`;{let a=f=>{let p=/^#?([0-9a-f]{6})$/i.exec(f||"");return p?[0,2,4].map(v=>{let S=parseInt(p[1].slice(v,v+2),16)/255;return S<=.03928?S/12.92:Math.pow((S+.055)/1.055,2.4)}).reduce((v,S,C)=>v+S*[.2126,.7152,.0722][C],0):0},c=[...new Set(Object.values(Z))].filter(f=>a(f)>.3).map(f=>`.ln[style*="--c:${f}"],[data-f][style*="--c:${f}"].on,[data-f][style*="--c:${f}"]:not(.off){color:#14203a!important}`).join("");if(c){let f=document.createElement("style");f.textContent=c,document.head.appendChild(f)}}function Fp(a,c){return c?a==="X"?__t(196):a>=60?`<span class="st late ${$i(a/60)}${__t(197)}${Math.round(a/60)} min</span>`:__t(198):`<span class="st sch">${__t(195)}</span>`}function Yh(){if(!d.classList.contains("peek")||window.__mapHidden||!d.getClientRects().length)return;let a=d.querySelector(".tc");if(!a)return;let c=a.querySelector(".st")||a.querySelector("p"),f=d.getBoundingClientRect().top-d.scrollTop,p=c?c.getBoundingClientRect().bottom-f+3:150;if(c){let v=c.nextElementSibling||c.parentElement!==a&&c.parentElement.nextElementSibling;v&&(p=Math.min(p,v.getBoundingClientRect().top-f-1))}d.style.setProperty("--peekh",Math.round(Math.min(280,Math.max(110,p)))+"px")}function Rs(){try{let a=d,c=document.getElementById("rcgrab"),f=document.getElementById("z");if(!a||!He.on||He.cur!=="map"||a.classList.contains("peek")||!a.getClientRects().length||!c||!c.getClientRects().length){a&&a._fit&&(["max-height","bottom","height","right","width"].forEach(x=>a.style.removeProperty(x)),a._fit=0);return}let v=a.getBoundingClientRect().top,S=c.getBoundingClientRect().top-8,C=Math.max(140,Math.floor(S-v)),I=f&&f.getClientRects().length?f.getBoundingClientRect():null,L=I?Math.max(10,Math.ceil(innerWidth-I.left+8)):10;a._fit=C+"|"+L;let U=a.style,z={"max-height":C+"px",height:"auto",bottom:"auto",width:"auto",right:L+"px"};for(let x in z)(U.getPropertyValue(x)!==z[x]||U.getPropertyPriority(x)!=="important")&&U.setProperty(x,z[x],"important")}catch{}}setInterval(()=>{He.on&&He.cur==="map"&&Rs()},700);try{new MutationObserver(()=>Rs()).observe(d,{attributes:!0,attributeFilter:["style","class"]})}catch{}window.__fitMcs=Rs;try{localStorage.removeItem("rod_dbg")}catch{}if(/[?&]dbg=1/.test(location.search)){let a=document.createElement("pre");a.id="dbgbox",a.style.cssText="position:fixed;left:4px;top:4px;z-index:999;background:rgba(0,0,0,.85);color:#0f0;font:11px/1.25 monospace;padding:6px;margin:0;pointer-events:none;max-width:70vw;white-space:pre-wrap",document.body.appendChild(a),setInterval(()=>{try{let c=p=>{let v=document.querySelector(p);if(!v||!v.getClientRects().length)return"\u2014";let S=v.getBoundingClientRect();return[S.left,S.top,S.right,S.bottom].map(Math.round).join(",")},f=getComputedStyle(d);a.textContent=`v ${document.title.slice(0,0)}${(document.getElementById("ver")||{}).textContent||""}
inner ${innerWidth}x${innerHeight} vv ${window.visualViewport?Math.round(visualViewport.height):"-"}
tab ${He.on?He.cur:"off"} peek ${d.classList.contains("peek")}
mcs ${c("#mcs")}
tc ${c("#mcs .tc")}
rc ${c("#rcgrab")} z ${c("#z")}
maxH ${f.maxHeight} ov ${f.overflowY}
fit ${d._fit||0}
inl ${d.style.cssText.slice(0,160)}`}catch(c){a.textContent="err "+c.message}},1e3)}addEventListener("resize",()=>setTimeout(Rs,80));try{new ResizeObserver(()=>Rs()).observe(document.getElementById("rcgrab")||document.body)}catch{}window.visualViewport&&visualViewport.addEventListener("resize",()=>setTimeout(Rs,80));function Re(){try{R_()}finally{requestAnimationFrame(Rs),window.__rodTabSync&&window.__rodTabSync();try{Yh()}catch{}}}function R_(){if(!Et&&ae<0&&!Ce&&!Ot&&!Ut&&!me){Xs=!1,d.innerHTML="",d._h="",d.style.display="none",d.classList.remove("peek"),od();return}let a=ee(),c="",f=lt()&&a.live,p=(x,_)=>H.alerts.filter(A=>[...A.fams].some(O=>x.has(O))||_!=null&&A.stops.has(_)),v=x=>x.length?`<div class="al">${x.slice(0,4).map(_=>`<p>\u26A0\uFE0F ${go(_)} ${[..._.fams].sort(B).slice(0,6).map(Mn).join(" ")} ${m(_.txt)} <small>${_o(_)}</small></p>`).join("")}${x.length>4?`<small>y ${x.length-4}${__t(199)}`:""}</div>`:"",S=Et&&f?Bt.find(x=>x.real&&(Et.vtid?x.v.tid===Et.vtid:x.tr===Et)):null;if(me&&!Ut&&!Ot&&!Ce&&!Et&&ae<0)c=__(me);else if(Ut)c=g_();else if(Ot)c=`${__t(200)}${m(y("#ver").firstChild.textContent)}</small><ul class="chg">${y("#chg").innerHTML||__t(202)}${__t(201)}`;else if(Ce){let x=H.alerts.filter(_=>[..._.fams].some(A=>Dt.has(A))||!_.fams.size);c=`<div class="tc alrl" style="--c:#c2410c"><button class="x" data-cx>\xD7</button><h3 class="ilt sm">${__t(204)}</h3><small class="ifoot0">${x.length===1?__t(205):x.length+" "+__t(206)}</small>${x.length?`<div class="igl">${x.map(_=>`<div class="igc"><p class="igh">\u26A0\uFE0F ${go(_)} ${_.fams.size>6?`<span class="igall">${__t(207)}</span>`:[..._.fams].sort(B).map(Mn).join(" ")} <small>${_o(_)}</small></p><p class="igt">${m(_.txt)}</p></div>`).join("")}</div>`:`<p>${__t(208)}</p>`}${__t(203)}${H.alertsTs&&Date.now()/1e3-H.alertsTs<6*3600?__t(209):`${__t(210)}${H.alertsTs?new Date(H.alertsTs*1e3).toLocaleDateString("es-ES",{day:"numeric",month:"short"}):"\u2014"}`}</small></div>`}else if(S){let x=S.v,_=S.tr,A=Ee=>m(T[_.pat.stops[Ee]].n),O=_?_.pat.stops.length:0,J=Vt.get(x.sid),Q=J!=null?m(T[J].n):m(x.sid),G=_&&x.atStop>=0?A(x.atStop):"",nt=_&&x.next>=0?A(x.next):Q,W=_&&x.next>0?A(x.next-1):"",zt=S.broke||Pp(S),oe=zt?`<b class="stopv">\u26A0\uFE0F ${zt.why==="aviso"?__t(211):`${__t(212)}${zt.min} min`}</b>${_&&W?`${__t(213)}${W}${__t(214)}${nt}</b>`:""}`:S.stop==="via"&&_?`${__t(215)}${W?`${__t(217)}${W}${__t(214)}${nt}</b>`:`${__t(218)}${nt}</b>`}${__t(216)}${Math.max(1,Math.round(x.still/60))} min`:x.pre&&_?x.prevTr?`${__t(219)}${m(x.prevTr.num)}${__t(220)}${A(0)}</b>${x.prevDl>=1?`${__t(223)}${Math.round(x.prevDl)} min</b>`:""}${__t(221)}${rt(x.arrO)}${__t(222)}${rt(x.depEst)}</b>${x.preDl>=1?`${__t(224)}${rt(x.dep0)})`:""}`:`${__t(225)}${A(0)}${__t(226)}${rt(x.dep0+S.dl)}</b>`:G&&x.before?`Llegando a <b>${G}</b>`:(x.st==="STOPPED_AT"||S.stop==="st")&&G?`${__t(227)}${G}</b>`:G&&x.next>=0&&x.atStop!==x.next?`${__t(228)}${G}${__t(220)}${nt}</b>`:W?`${__t(229)}${W}${__t(214)}${nt}</b>`:`${__t(230)}${nt}</b>`,te=_&&x.next>=0&&!x.pre?rt(Kr(_,x,x.next,_.t0+_.pat.t[2*x.next]+S.dl)):"",tn=[];if(_){let Ee=S.idx>=0?S.idx:0,be=x.pre?Math.max(S.dl,x.preDl||0):S.dl,vn=sn=>_.t0+_.pat.t[sn]+be;for(let sn=Ee;sn<O;sn++)tn.push(`<li class="${jl(_.pat.stops[sn])?"mine":""}${Kl(_,sn)?" alm":""}"><b>${rt(Kr(_,x,sn,vn(sn===0?1:2*sn)))}</b><span title="${A(sn)}">${jl(_.pat.stops[sn])}${A(sn)}</span>${be>=1?`<em class="dl ${$i(be)}">${x.pre?"\u2248":""}+${Math.round(be)}</em>`:""}${sn>0?`<button type="button" class="abtn" data-alarm="${sn}" title="${__t(231)}">${Kl(_,sn)?"\u{1F514}":"\u{1F515}"}</button>`:""}</li>`)}c=`<div class="tc" style="--c:${S.c}"><button class="x" data-cx>\xD7</button><div>${Mn(S.fam)}${__t(232)}${m(_?_.num:x.num)}${__t(233)}${_?`<h3 class="rt"><span class="o" title="${A(0)}">${A(0)}</span><span class="ar">\u2192</span>${Ni(T[_.pat.stops[O-1]].n,_.fam)}</h3>`:""}
        <p>${oe}${te?`${__t(234)}${te}`:""}${x.plat&&x.st==="STOPPED_AT"&&G?`${__t(235)}${m(x.plat)}</b>`:""}</p><p>${x.pre&&x.prevTr?x.preDl>=1?`${__t(236)}${Math.round(x.preDl)}${__t(237)}`:__t(238):Fp(H.delays.get(x.tid),H.delays.has(x.tid))}${(()=>{let Ee=_&&Wl(_.num);return Ee&&Ee.n>=2?`${__t(239)}${Ee.n}${__t(240)}${Ee.late?`${__t(241)} <b>${Ee.late} ${__t(144)} ${Ee.n} ${__t(141)}</b> ${__t(242)}`:__t(243)} \xB7 ${__t(244)} ${Ee.avg<.5?"0":"+"+Math.round(Ee.avg)} min</span>`:""})()}${(()=>{let Ee=_&&qh(_.num);return Ee?`<span class="why" title="${m(Ee.txt)}">${Ee.why?__t(245)+m(Ee.why):__t(246)}</span>`:""})()}</p>
        <small>${x.pre?`${__t(247)}${ys(Rh(S.age))}`:x.est?__t(248):`${__t(249)}${ys(Rh(S.age))}${S.age>120?__t(250):""}`}</small>
        ${tn.length?`${S.dl>=1||x.pre&&x.preDl>=1?`${__t(251)}`:""}<ol class="stops">${tn.join("")}</ol>`:""}${v(p(new Set([S.fam])))}
        ${po(_?_.num:x.num,"",S.fam)}${_?`<div class="rtb two"><button type="button" data-fav>${Op(_)?__t(252):__t(253)}</button><button type="button" data-follow>${nc(_)?__t(254):__t(255)}</button></div>`:""}</div>`}else if(Et&&f&&!Et.pat)c=`${__t(256)}${m(Et.num||Et.vtid||"")}${__t(257)}`;else if(Et){let x=Et,_=x.pat,A=_.stops.length,O=kt(x),J=typeof O=="number"?O/60:0,Q=t.days.indexOf(a.ymd),G=x.day===Q-1?1440:0,nt=a.min+G-x.t0-J,W=K(x,nt),zt=be=>x.t0+_.t[be]+J,oe=be=>m(T[_.stops[be]].n),te=__t(258);W&&(te=W.moving?`${__t(259)}${oe(W.next)}${__t(260)}${rt(zt(2*W.next))}`:W.at===A-1?`${__t(261)}${oe(A-1)}</b>`:`${__t(227)}${oe(W.at)}${__t(262)}${rt(zt(2*W.at+1))}`);let tn=W?W.next:0,Ee=[];for(let be=tn;be<A;be++)Ee.push(`<li class="${jl(_.stops[be])?"mine":""}${Kl(x,be)?" alm":""}"><b>${rt(Kr(x,null,be,zt(2*be)))}</b><span title="${oe(be)}">${jl(_.stops[be])}${oe(be)}</span>${J>=1?`<em class="dl ${$i(J)}">+${Math.round(J)}</em>`:""}${be>0?`<button type="button" class="abtn" data-alarm="${be}" title="${__t(231)}">${Kl(x,be)?"\u{1F514}":"\u{1F515}"}</button>`:""}</li>`);c=`<div class="tc" style="--c:${x.c}"><button class="x" data-cx>\xD7</button><div>${Mn(x.fam)}${__t(232)}${m(x.num)}</b> <span class="pv">${__t(266)}</span></div><h3 class="rt"><span class="o" title="${oe(0)}">${oe(0)}</span><span class="ar">\u2192</span>${Ni(T[x.pat.stops[A-1]].n,x.fam)}</h3>
        <p>${te}</p><p>${Fp(O,O!=null)}${(()=>{let be=Wl(x.num);return be&&be.n>=2?`${__t(239)}${be.n}${__t(240)}${be.late?`${__t(241)} <b>${be.late} ${__t(144)} ${be.n} ${__t(141)}</b> ${__t(242)}`:__t(243)} \xB7 ${__t(244)} ${be.avg<.5?"0":"+"+Math.round(be.avg)} min</span>`:""})()}${__t(263)}${rt(x.t0+_.t[1])}${__t(264)}${rt(x.t0+_.t[2*A-2])}${__t(265)}${J>=1?__t(251):""}<ol class="stops">${Ee.join("")}</ol>${po(x.num,"",x.fam)}<div class="rtb two"><button type="button" data-fav>${Op(x)?__t(252):__t(253)}</button><button type="button" data-follow>${nc(x)?__t(254):__t(255)}</button></div></div>`}else{let x=ae,_=t.days.indexOf(a.ymd),A=[];Di.st!==x&&(Di.st=x,Di.f.clear());let O=W=>(!Z[W]||Dt.has(W))&&(!Di.f.size||Di.f.has(W));if(_>=0){let W=(zt,oe)=>{for(let te of zt){if(!O(te.fam))continue;let tn=te.pat.stops.indexOf(x);if(tn<0||tn===te.pat.stops.length-1)continue;let Ee=kt(te),be=typeof Ee=="number"?Ee/60:0,vn=te.t0+te.pat.t[2*tn+1]-oe;vn+be<a.min-1||vn>a.min+360||A.push({tr:te,t:vn,dl:be,d:Ee,on:H.vp.has(te.tid),past:a.min>te.t0+te.pat.t[1]-oe+2})}};W(st[_],0),_>0&&W(st[_-1],1440)}A.sort((W,zt)=>W.t+W.dl-zt.t-zt.dl);let J=T[x].id,Q=Ft.get(J),G=(f||at()&&a.live)&&H.url;G&&(!Q||Date.now()-Q.at>Vp())&&!Q?.loading&&(Ft.set(J,{...Q||{},loading:!0,at:Q?Q.at:0}),Pt(ce(),"/departures.json?stationId="+J).then(W=>{Ft.set(J,{at:Date.now(),d:W}),ae===x&&(d._h="",Re())}).catch(()=>Ft.set(J,{at:Date.now(),err:1})));let nt=G&&Q&&Q.d&&Array.isArray(Q.d.trains)&&Q.d.trains.length?Q.d.trains:null;if(nt){let W=new Map([...H.vp.values()].map(te=>[String((pt.get(te.tid)||{}).num||te.num),te])),zt=new Map(Jn(x).map(te=>[String(te.num),te])),oe=nt.filter(te=>O((te.line||{}).id||"")).slice(0,40).map(te=>{let tn=String(te.commercialNumber||te.technicalNumber||""),Ee=zt.get(tn),be=Ee?rt(Ee.est):(te.departureDateHourSelectedStation||"").slice(11,16),vn=(te.line||{}).id||"",sn=W.get(tn),pn=Ee?Math.round(Ee.dl)*60:sn?H.delays.get(sn.tid):null,gi=Ee&&(Ee.gone||!Ee.live&&Ee.est<a.min-1);return`<li class="go${gi?" old":""}${uo({num:tn,tid:sn?sn.tid:""})?" sel":""}" data-gt="${m(tn)}|${sn?m(sn.tid):""}"><b>${m(be)}</b>${Z[vn]?Mn(vn):`<span class="ln" style="--c:#6b7385">${m(vn||"?")}</span>`}<span>${Ni((te.destinationStation||{}).name||"",vn)}${te.trainObservations?` \xB7 <i>${m(te.trainObservations)}</i>`:""}${gi?` <small class="oldt">${Ee.gone?__t(267):__t(268)}</small>`:""}</span>${te.trainCancelled?__t(269):typeof pn=="number"&&pn>=60?`<em class="dl ${$i(pn/60)}">+${Math.round(pn/60)}</em>`:""}${te.platformSelectedStation?`${__t(270)}${m(te.platformSelectedStation)}</i>`:""}${sn?'<i class="lvd" title="circulando, posici\xF3n real">\u25CF</i>':'<i class="lvd ph">\u25CF</i>'}</li>`}).join("");c=`<div class="tc" style="--c:#1d2330"><button class="x" data-cx>\xD7</button><h3>${m(T[x].n)}</h3>${Ip(x)}${po("",T[x].id,"")}${__t(271)}${oe||__t(273)}</ol>${Lp(x,a)}${v(p(T[x].fams,x))}${__t(272)}`}else c=`<div class="tc" style="--c:#1d2330"><button class="x" data-cx>\xD7</button><h3>${m(T[x].n)}</h3>${Ip(x)}${po("",T[x].id,"")}
        <small style="margin-top:6px">${f&&H.url?__t(275):""}${__t(274)}${f?__t(276):__t(277)}</small>
        <ol>${A.slice(0,40).map(W=>`<li class="go${uo({num:W.tr.num,tid:W.tr.tid})?" sel":""}" data-gt="${m(W.tr.num)}|${m(W.tr.tid)}"><b>${rt(W.t+W.dl)}</b>${Mn(W.tr.fam)}<span>${Ni(T[W.tr.pat.stops[W.tr.pat.stops.length-1]].n,W.tr.fam)}</span>${W.d==="X"?__t(269):W.dl>=1?`<em class="dl ${$i(W.dl)}">+${Math.round(W.dl)}</em>`:""}${f?W.on?'<i class="lvd" title="circulando, posici\xF3n real">\u25CF</i>':W.past?__t(278):'<i class="lvd ph">\u25CF</i>':""}</li>`).join("")||__t(279)}</ol>${Lp(x,a)}${v(p(T[x].fams,x))}${__t(272)}`}let C=d.scrollTop;if(d._h!==c&&!(d._touch>Date.now())){let x=Q=>((Q&&Q.querySelector("h3")||{}).textContent||"").replace(/[^\p{L}\d]/gu,""),_=d.querySelector(".tc"),A=x(_),O=_?_.scrollTop:0;d.innerHTML=c,d._h=c,d.scrollTop=C;let J=d.querySelector(".tc");J&&O&&A&&x(J)===A&&(J.scrollTop=O)}if(d.style.display="flex",d.classList.toggle("min",Xs),od(),innerWidth<=640){let x=d.querySelector(".tc");if(x&&!x.querySelector(".mn")){let _=document.createElement("button");_.type="button",_.className="mn",_.setAttribute("aria-label",__t(280)),_.textContent=d.classList.contains("peek")?"\u25B4":"\u25BE",_.onclick=O=>{O.stopPropagation(),d.classList.toggle("peek"),d.classList.contains("peek")&&(Zr="",d.querySelectorAll("details[open]").forEach(J=>J.open=!1)),d.scrollTop=0,d.querySelectorAll(".tc").forEach(J=>J.scrollTop=0),requestAnimationFrame(Rs),Yh(),_.textContent=d.classList.contains("peek")?"\u25B4":"\u25BE"};let A=x.querySelector(".x");x.insertBefore(_,A?A.nextSibling:x.firstChild)}}else d.classList.remove("peek");let I=y("#rc");if(innerWidth<=640&&!I.classList.contains("min")&&!Re.done&&(Re.done=1,y("#rcgrab").click()),innerWidth<=640){let x=y("#inf").getBoundingClientRect().bottom;d.style.top=Math.round(x+8)+"px",d.style.width="calc(100vw - 76px)",d.style.maxHeight=Math.max(140,y("#rc").getBoundingClientRect().top-x-16)+"px"}else if(innerHeight<=500){let x=y("#inf").getBoundingClientRect().bottom;d.style.top=Math.round(x+8)+"px",d.style.width="min(290px, 40vw)",d.style.maxHeight=innerHeight-x-20+"px"}else d.style.top="",d.style.width=Ut?"390px":"300px",d.style.maxHeight="";Rs();let U=d.querySelector("[data-cx]");U&&(U.onclick=x=>{if(x.stopPropagation(),Re.done=0,Ut||Ot||Ce||me&&!Et&&ae<0){Ut=Ot=Ce=!1,Et||ae>=0||(me=""),d._h="",Re(),o();return}if(Et&&Ie.st>=0){let _=Ie.st;Ie.st=-1,Et=null,fe=null,ae=_,zn(),d._h="",Re(),De=0,o();return}if(Et&&nc(Et)){let _=Et,A=[...ln],O=ve?{...ve}:null,J=d.querySelector("[data-follow]");J&&J.click(),setTimeout(()=>Ve(`${__t(281)} \xB7 ${_.fam||""} ${_.num}`,{label:__t(282),fn:()=>{A.forEach(([Q,G])=>ri(Q,G)),O&&!ve&&(ve=O,Cs()),Oi("map"),qs({num:String(_.num),tid:_.tid&&H.vp.has(_.tid)?_.tid:"",tr:_}),fe=Et,d._h="",Re(),_e(!0),o()}}),0)}Ie.st=-1,Ce=!1,Ot=!1,Ut=!1,Et=null,ae=-1,fe=null,zn(),Re(),De=0,o()}),zp(d),d.querySelectorAll("[data-alarm]").forEach(x=>x.onclick=_=>{_.stopPropagation();let A=Et&&Et.pat?Et:pt.get(Et&&Et.vtid)||null;if(!A)return;let O=+x.dataset.alarm,J=T[A.pat.stops[O]].id;ve&&ve.num===String(A.num)&&ve.sid===J?(ve=null,window.__schedOff&&window.__schedOff(7701),Ve(__t(283))):(ve={num:String(A.num),sid:J,at:Date.now()},Ve(`${__t(284)}${T[A.pat.stops[O]].n}`),"Notification"in window&&Notification.permission==="default"&&Notification.requestPermission()),Cs(),d._h="",Re()});{let x=d.querySelector("[data-fav]");x&&(x.onclick=_=>{_.stopPropagation();let A=Et&&Et.pat?Et:pt.get(Et&&Et.vtid)||null;if(!A)return;let O=mi.findIndex(J=>Np(J,A));if(O>=0)mi.splice(O,1),Ve(__t(285));else{let J=Up(A);mi.push({num:String(A.num),fam:A.fam,sid:T[J].id,dest:T[A.pat.stops[A.pat.stops.length-1]].id,t:rt(A.t0+A.pat.t[2*A.pat.stops.indexOf(J)+1])}),Ve(`${__t(286)}${A.fam}${__t(287)}${mi[mi.length-1].t}${__t(192)}${T[J].n}${__t(288)}`),"Notification"in window&&Notification.permission==="default"&&Notification.requestPermission()}Dp(),d._h="",Re(),_e(!0)})}{let x=d.querySelector("[data-share]");x&&(x.onclick=()=>{let _=me,A=Bt.filter(G=>(G.fam||G.tr&&G.tr.fam)===_),O=A.filter(G=>G.dl>=5).sort((G,nt)=>nt.dl-G.dl),J=H.alerts.filter(G=>G.fams.has(_)),Q=`${_}${__t(289)}${rt(ee().min)}: ${A.length}${__t(290)}${O.length}${__t(291)}${O.length?" ("+O.slice(0,4).map(G=>`${G.tr?G.tr.num:G.v.num} +${Math.round(G.dl)}`).join(", ")+")":""}.${J.length?__t(292)+J[0].txt:__t(293)}`;navigator.share?navigator.share({text:Q}).catch(()=>{}):(navigator.clipboard&&navigator.clipboard.writeText(Q),Ve(__t(294)+Q.slice(0,60)+"\u2026"))})}d.querySelectorAll("[data-tripx]").forEach(x=>x.onclick=_=>{_.stopPropagation();let A=jn.findIndex(J=>J.k===x.dataset.tripx);if(A<0)return;let[O]=jn.splice(A,1);try{localStorage.setItem("rod_trips",JSON.stringify(jn,(J,Q)=>J==="_n"?void 0:Q))}catch{}d._h="",Re(),Ve(`${__t(295)} \xB7 tren ${O.num}`,{label:__t(282),fn:()=>{jn.push(O);try{localStorage.setItem("rod_trips",JSON.stringify(jn,(J,Q)=>J==="_n"?void 0:Q))}catch{}d._h="",Re()}})}),d.querySelectorAll("[data-lseg]").forEach(x=>x.onclick=_=>{_.stopPropagation(),Yl.v=x.dataset.lseg,d._h="",Re();let A=d.querySelector(".tc");A&&(A.scrollTop=0)});{let x=d.querySelector("[data-lmore]");x&&(x.onclick=()=>{ql.v=!ql.v,d._h="",Re()})}{let x=d.querySelector("[data-share30]");x&&(x.onclick=()=>{let _=me,A=Tp(_);if(!A)return;let O=mi.filter(Q=>Q.fam===_).map(Q=>[Q,wp(Q)]).filter(([,Q])=>Q.n),J=`${__t(296)} ${_} ${__t(297)} ${Math.min(30,A.days)} ${__t(141)}: ${Math.round(A.pct)} % ${__t(298)}, ${__t(299)} ${Ts(A.avg)}${A.nc?`, ${A.nc} ${A.nc===1?__t(157):__t(158)}`:""}.${(Q=>{let G=Q.filter(nt=>nt.dl!=null);return G.length?` ${__t(300)} ${Q.length} ${Q.length===1?__t(130):__t(131)}: ${__t(301)} ${G.filter(nt=>nt.dl>=5).length} ${__t(302)} (\u2248 ${Wh(G.reduce((nt,W)=>nt+W.dl,0))} ${__t(135)}).`:""})(xm(_,30))}${O.map(([Q,G])=>` ${__t(303)} ${Q.t} ${__t(304)} ${G.late} ${__t(144)} ${G.n} ${__t(141)} (\u2248 ${Wh(G.sum)} ${__t(135)}).`).join("")} ${__t(305)}`;navigator.share?navigator.share({text:J}).catch(()=>{}):(navigator.clipboard&&navigator.clipboard.writeText(J),Ve(__t(294)+J.slice(0,60)+"\u2026"))})}{let x=d.querySelector("[data-cols]");x&&(x.onclick=()=>{gn.on=!gn.on,b_(),d._h="",Re()})}d.querySelectorAll("[data-gs]").forEach(x=>x.onclick=()=>{let _=+x.dataset.gs;Ut=!1,window.__rodPickStation(_),Object.assign(s,{tx:T[_].w[0],ty:T[_].w[1],dist:Math.min(s.dist,20)}),o()}),d.querySelectorAll("[data-sf]").forEach(x=>x.onclick=_=>{_.stopPropagation();let A=x.dataset.sf;A?Di.f.has(A)?Di.f.delete(A):Di.f.add(A):Di.f.clear(),d._h="",Re()}),d.querySelectorAll("[data-gt]").forEach(x=>x.onclick=()=>{Ie.st=ae;let[_,A]=x.dataset.gt.split("|"),O=pt.get(A);qs({num:_,tid:H.vp.has(A)?A:"",tr:O||null})}),d.querySelectorAll("[data-sethome]").forEach(x=>x.onclick=()=>cd(ae,x.dataset.sethome));let z=d.querySelector("[data-follow]");z&&(z.onclick=()=>{let x=nc(Et);if(fe=x?null:Et,!x&&Et&&Et.num!=null){let _=Et.pat.stops,A=String(Et.num),O=null,J=1e9;for(let Q of[Xe,$e,Ct]){let G=An(Q);if(G==null||!_.includes(G)||Q===Ct&&!Ct.st.length)continue;let nt=Jn(G).find(W=>String(W.num)===A&&!W.gone);nt&&nt.est<J&&(J=nt.est,O=Q)}O?ri(O.key,A):[...ln.keys()].forEach(Q=>ri(Q,null)),_e(!0)}if(x&&Et&&Et.num!=null){let _=String(Et.num);[...ln].forEach(([A,O])=>{String(O)===_&&ri(A,null)}),Rn.num===_&&(Rn.num=""),gt.tid===_&&(gt.tid="",gt.lock=!1,gt.manual=0,gt.quiet=Date.now()+10*6e4),ve&&ve.num===_&&(ve=null,Cs(),window.__schedOff&&window.__schedOff(7701)),_e(!0)}fe?(s.dist=Math.min(s.dist,22),innerWidth<=640&&(d.classList.add("peek"),d.scrollTop=0,y("#rc").classList.contains("min")||y("#rcgrab").click())):d.classList.remove("peek"),d._h="",Re(),o()})}window.__rodCard=Re;try{let a=localStorage.getItem("rod_inf");(a==="mini"||a==null)&&y("#inf").classList.add("mini")}catch{}y("#inft").onclick=()=>{let a=y("#inf").classList.toggle("mini");try{localStorage.setItem("rod_inf",a?"mini":"")}catch{}(Et||ae>=0||Ce||Ot)&&(d._h="",Re())},y("#ver").onclick=()=>{Ot=!0,Ut=!1,Ce=!1,d._h="",Re()};let I_={parado:'<path d="M9 6v12M15 6v12"/>',calor:'<path d="M12 4a2 2 0 012 2v8.5a4 4 0 11-4 0V6a2 2 0 012-2z"/><path d="M12 11v6"/>',abordo:'<path d="M12 3l10 18H2z"/><path d="M12 10v5M12 18v.4"/>',via:'<path d="M12 3l10 18H2z"/><path d="M12 10v5M12 18v.4"/>',gente:'<circle cx="9" cy="8" r="3"/><path d="M3 20c0-3.5 2.7-6 6-6s6 2.5 6 6"/><circle cx="17" cy="9" r="2.5"/><path d="M16 14.2c2.8.3 5 2.5 5 5.8"/>',retraso:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',cancel:'<circle cx="12" cy="12" r="9"/><path d="M9 9l6 6M15 9l-6 6"/>',ascensor:'<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 9l3-3 3 3M9 15l3 3 3-3"/>'},P_={vacio:"ok",lleno:"warn",petado:"bad",parado:"warn",calor:"warn",abordo:"bad",gente:"warn",retraso:"warn",cancel:"bad",ascensor:"warn",via:"bad"};function Bp(a){let c={vacio:1,lleno:2,petado:3}[a],f=c?[0,1,2].map(p=>`<rect x="${4+p*6}" y="${14-p*4}" width="4" height="${6+p*4}" rx="1" ${p<c?'fill="currentColor"':""}/>`).join(""):I_[a]||'<circle cx="12" cy="12" r="3"/>';return`<svg class="cki ${P_[a]||""}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${f}</svg>`}let ho=new Proxy({},{get:(a,c)=>Bp(c)}),Zr="",L_=["vacio","lleno","petado",__t(306),"calor","abordo"],D_=["gente","retraso","cancel","ascensor","via"],N_={vacio:__t(307),lleno:__t(308),petado:__t(309),parado:__t(310),calor:__t(311),abordo:__t(312),gente:__t(313),retraso:__t(314),cancel:__t(315),ascensor:__t(316),via:__t(317)},fo=a=>(H.tipos||N_)[a]||a,ec=(a,c)=>(H.rep||[]).filter(f=>a&&f.num===String(a)&&!f.sid||c&&f.sid===String(c)&&!f.num||a&&c&&f.num===String(a)&&f.sid===String(c)),kp=a=>{let c=Math.round((Date.now()+(H.repSkew||0)-a.at)/6e4);return c<1?__t(318):ys(c+" min")},jr=(()=>{try{return new Set(JSON.parse(localStorage.getItem("rod_votes")||"[]"))}catch{return new Set}})();function po(a,c,f){if(!H.url||!H.repOk)return"";let p=ec(a,c),v=a?L_:D_;return`<div class="crowd"><small>${Bp("gente")} ${__t(320)}${p.length?"":__t(321)}</small>${p.map(S=>`<p><span><span class="cname">${ho[S.kind]||"\u2022"} <b>${m(fo(S.kind))}</b></span><small class="cmeta">${S.up>1?(S.up>999?"999+":S.up)+" "+__t(322)+" \xB7 ":""}${kp(S)}</small></span>${jr.has(S.id)?`<small class="cvok">\u2713 ${__t(323)}</small>`:`<span class="cvb"><button type="button" data-rv="${S.id}:1" title="${__t(324)}">\u2713 ${__t(325)}</button><button type="button" data-rv="${S.id}:-1" title="${__t(326)}">\u2715 ${__t(327)}</button></span>`}</p>`).join("")}
      <details data-ckd="${m(String(a||"")+"|"+String(c||""))}"${Zr===String(a||"")+"|"+String(c||"")?" open":""}><summary>${a?__t(328):__t(329)}</summary><div class="ckb">${v.map(S=>`<button type="button" data-rk="${S}" data-rn="${m(a||"")}" data-rs="${m(c||"")}" data-rl="${m(f||"")}">${ho[S]} ${m(fo(S))}</button>`).join("")}${__t(319)}`}async function $p(a,c){try{let p=await(await fetch(ce()+c,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)})).json();if(!p.ok){Ve(p.err||__t(330));return}if(p.id){jr.add(p.id);try{localStorage.setItem("rod_votes",JSON.stringify([...jr].slice(-300)))}catch{}}Ve(c==="/vote"?__t(331):p.n>1?`${__t(332)}${p.n}${__t(333)}`:__t(334));let v=await Pt(ce(),"/reports.json");v&&v.items&&(H.rep=v.items),d._h="",Re(),_e(!0)}catch{Ve(__t(335))}}function zp(a){a.querySelectorAll("details[data-ckd]").forEach(c=>c.addEventListener("toggle",()=>{Zr=c.open?c.dataset.ckd:Zr===c.dataset.ckd?"":Zr,c.open&&c.scrollIntoView({block:"nearest",behavior:"smooth"})})),a.querySelectorAll("[data-rk]").forEach(c=>c.onclick=f=>{f.stopPropagation(),c.disabled=!0,Zr="",$p({kind:c.dataset.rk,num:c.dataset.rn,sid:c.dataset.rs,line:c.dataset.rl},"/report")}),a.querySelectorAll("[data-rv]").forEach(c=>c.onclick=f=>{f.stopPropagation();let[p,v]=c.dataset.rv.split(":");jr.add(+p);try{localStorage.setItem("rod_votes",JSON.stringify([...jr].slice(-300)))}catch{}$p({id:+p,v:+v},"/vote"),Ve(+v>0?__t(336):__t(337)),_e(!0),d._h="",Re()})}let mo=0;function Ve(a,c){let f=y("#toast");if(f||(f=document.createElement("div"),f.id="toast",document.body.appendChild(f)),f.textContent=a,c){let p=document.createElement("button");p.type="button",p.className="tact",p.textContent=c.label,p.onclick=v=>{v.stopPropagation(),clearTimeout(mo),f.className="",c.fn()},f.appendChild(p)}if(f.className="on",clearTimeout(mo),mo=setTimeout(()=>{f.className=""},Math.min(1e4,Math.max(4500,String(a).length*70))),!f._tap){f._tap=1,f.onclick=()=>{clearTimeout(mo),f.className=""};let p=null,v=0;f.addEventListener("touchstart",S=>{p=S.touches[0].clientY,v=0,f.style.transition="none"},{passive:!0}),f.addEventListener("touchmove",S=>{p!=null&&(v=Math.min(0,S.touches[0].clientY-p),f.style.translate=`0 ${v}px`,f.style.opacity=String(Math.max(.2,1+v/80)))},{passive:!0}),f.addEventListener("touchend",()=>{f.style.transition="",f.style.translate="",f.style.opacity="",p!=null&&v<-25&&(clearTimeout(mo),f.className=""),p=null})}}function go(a){return a.src?`<b class="asrc ${a.src==="Adif"?"adif":""}">${a.src==="Adif"?__t(338):m(a.src)}</b>`:""}function _o(a){if(!a.when)return"";let[c,f]=a.when.split("T"),p=yt(new Date),v=p.ymd.slice(0,4)+"-"+p.ymd.slice(4,6)+"-"+p.ymd.slice(6,8);if(c===v&&f){let S=Math.round(p.min-(+f.slice(0,2)*60+ +f.slice(3,5)));return S<1?__t(318):S<60?ys(S+" min"):`${__t(339)}${f.slice(0,5)}`}return`${c.slice(8,10)}/${c.slice(5,7)}${f?" "+f.slice(0,5):""}`}function Jh(){let a=y("#alr");if(!a)return;let c=H.alerts.filter(f=>[...f.fams].some(p=>Dt.has(p))).length;a.hidden=!c,a.textContent=`\u26A0\uFE0F ${c}${c===1?__t(340):__t(341)}`}{let a=y("#alrslot");a&&a.appendChild(y("#alr"))}y("#alr").onclick=()=>{Ot=!1,Ut=!1,Ce=!0,Re()},y("#wcopy").onclick=async()=>{let a=y("#wcode").textContent;try{await navigator.clipboard.writeText(a),y("#wcopy").textContent=__t(342)}catch{let f=document.createRange();f.selectNodeContents(y("#wcode"));let p=getSelection();p.removeAllRanges(),p.addRange(f),y("#wcopy").textContent=__t(343)}setTimeout(()=>y("#wcopy").textContent=__t(344),2500)};let U_=Vt.get("71801");function Vp(){return document.hidden?ln.size||ve?12e4:1e12:3e4}function Hp(a,c){let f=T[a].id,p=Ft.get(f);!(Fe()&&H.url)||p&&(p.loading||Date.now()-p.at<Vp())||(Ft.set(f,{...p||{},loading:!0,at:p?p.at:0}),Pt(ce(),"/departures.json?stationId="+f).then(v=>{Ft.set(f,{at:Date.now(),d:v}),c&&c()}).catch(()=>Ft.set(f,{at:Date.now(),err:1})))}let Gp=a=>+a.slice(0,2)*60+ +a.slice(3,5),xo={k:-2,m:null};function Is(a){let c=t.days.indexOf(ee().ymd);if(xo.k!==c){xo.k=c,xo.m=new Map;for(let f of st[c]||[])xo.m.set(String(f.num),f)}return xo.m.get(String(a))||null}let zi={at:0,m:new Map},vo=a=>lt()?(yo(""),[...a].filter(c=>{let f=zi.m.get(c);return f&&f[0]>=2&&f[1]===0}).sort(B)):[];function yo(a){if(Date.now()-zi.at>6e4||zi.vp!==H.vp){zi.at=Date.now(),zi.vp=H.vp,zi.m=new Map;let f=ee(),p=t.days.indexOf(f.ymd);if(p>=0)for(let v of st[p]){let S=f.min-v.t0;if(S<v.pat.t[1]+3||S>v.pat.t[v.pat.t.length-2]-3)continue;let C=zi.m.get(v.fam)||[0,0];C[0]++,H.vp.has(v.tid)&&C[1]++,zi.m.set(v.fam,C)}}let c=zi.m.get(a);return c&&c[0]>=3?c[1]/c[0]:1}function Kr(a,c,f,p){let v=T[a.pat.stops[f]].id;if([...Xe.st,...$e.st].includes(v)){let S=Jn(a.pat.stops[f]).find(C=>String(C.num)===String(a.num));if(S&&!S.gone)return S.est}return Zh(a,c,f,0,p)}function Wp(a,c){if(!a||!c||c.pre||c.dObs==null||c.err==null||c.err>.6)return null;let f=Date.now()/1e3-c.ts;if(f>150||f<-30||(c.still||0)>=90)return null;let p=ne(a.pat).stopD,v=a.pat.t,S,C,I=p.reduce((L,U,z)=>Math.abs(U-c.dObs)<Math.abs(p[L]-c.dObs)?z:L,0);if(Math.abs(p[I]-c.dObs)<.16||c.atStop===I)S=v[2*I+1]??v[2*I],C=I;else{let L=p.findIndex(z=>z>c.dObs);if(L<=0)return null;let U=Math.min(1,Math.max(0,(c.dObs-p[L-1])/(p[L]-p[L-1]||1)));S=v[2*L-1]+U*(v[2*L]-v[2*L-1]),C=L-1}return{t:yt(new Date).min-f/60,tpos:S,j0:C,sd:p}}function Zh(a,c,f,p,v){let S=Wp(a,c);if(!S||f<=S.j0&&!(f===S.j0&&p===1))return v;let C=a.pat.t,I=S.t+(C[2*f+p]??C[2*f])-S.tpos;if(I-S.t>45)return v;let L=(v%1440+1440)%1440,U=((I-L+720)%1440+1440)%1440-720;return U>=-3&&U<=5?v+U:v}function j1(a,c,f,p){let v=Wp(a,c);if(!v)return null;let S=Zh(a,c,f,1,v.t+a.pat.t[2*f+1]-v.tpos);return S-p.min>30||S<p.min-1?null:S}function Jn(a,c){let f=ee(),p=(lt()||at())&&f.live&&!c,v=Ft.get(T[a].id),S=[],C=new Map([...H.vp.values()].map(L=>[String((pt.get(L.tid)||{}).num||L.num),L]));if(p&&v&&v.d&&Array.isArray(v.d.trains)&&v.d.trains.length)for(let L of v.d.trains){let U=(L.departureDateHourSelectedStation||"").slice(11,16);if(!U)continue;let z=String(L.commercialNumber||L.technicalNumber||""),x=C.get(z),_=x?H.delays.get(x.tid):null,A=Math.max(typeof _=="number"?Math.max(0,_/60):0,x&&x.pre&&x.preDl||0),O=Gp(U);O<f.min-720&&(O+=1440);let J=+(L.departureDateHourSelectedStation||"").slice(17,19)||0,Q=O+J/60,G=x&&pt.get(x.tid)||Is(z),nt=G?G.pat.stops.indexOf(a):-1,W=nt>=0?(G.t0+G.pat.t[2*nt+1])%1440:null;if(W!=null){for(;W<Q-720;)W+=1440;for(;W>Q+720;)W-=1440;Math.abs(Q-W)>120&&(W=null)}let zt,oe;W==null?(zt=J||!A?Q:Q+A,oe=J?0:A):J||Math.abs(Q-W)>=1?(zt=Q,oe=Math.max(0,Q-W)):(zt=W+A,oe=A);let te=!1;if(G&&!x&&nt>0&&!J){let tn=t.days.indexOf(f.ymd),Ee=G.day===tn-1?1440:G.day===tn+1?-1440:0,be=G.t0+G.pat.t[1]-Ee;if(f.min<be){let vn=be+(G.pat.t[2*nt+1]-G.pat.t[1]);vn>zt+1&&(zt=vn,te=!0,W!=null&&(oe=Math.max(0,zt-W)))}}if(W!=null&&(O=Math.round(W)),x&&G&&nt>=0){let tn=Zh(G,x,nt,1,zt);tn!==zt&&(zt=Math.max(tn,f.min),W!=null&&(oe=Math.max(0,zt-W)))}S.push({dubious:te,rodLive:!!J,sm:O,est:zt,dl:oe,fam:(L.line||{}).id||"",dest:(L.destinationStation||{}).name||"",destId:(L.destinationStation||{}).id||"",plat:L.platformSelectedStation||"",cancel:!!L.trainCancelled,obs:L.trainObservations||"",live:!!x,num:z,tid:x?x.tid:"",tr:x&&pt.get(x.tid)||Is(z),src:"oficial"})}else{let L=t.days.indexOf(f.ymd);if(L<0)return S;let U=(z,x)=>{for(let _ of z){let A=_.pat.stops.indexOf(a);if(A<0||A===_.pat.stops.length-1)continue;let O=kt(_),J=typeof O=="number"?Math.max(0,O/60):0,Q=_.t0+_.pat.t[2*A+1]-x;if(Q+J<f.min-1||Q>f.min+(f.min>1080||f.min<300?600:360))continue;let G=_.pat.stops[_.pat.stops.length-1];S.push({sm:Q,est:Q+J,dl:J,fam:_.fam,dest:T[G].n,destId:T[G].id,plat:"",cancel:O==="X",obs:"",live:H.vp.has(_.tid),num:_.num,tid:_.tid,tr:_,src:"horario"})}};U(st[L],0),L>0&&U(st[L-1],1440),L+1<t.days.length&&f.min>1080&&U(st[L+1],-1440)}if(p){let L=new Set(S.map(x=>String(x.num))),U=t.days.indexOf(f.ymd),z=(x,_)=>{for(let A of x||[]){if(L.has(String(A.num)))continue;let O=A.pat.stops.indexOf(a);if(O<0||O===A.pat.stops.length-1)continue;let J=A.t0+A.pat.t[2*O+1]-_;if(J<f.min-45||J>f.min+1||!H.vp.get(A.tid))continue;let G=H.delays.get(A.tid),nt=typeof G=="number"?Math.max(0,G/60):0,W=A.pat.stops[A.pat.stops.length-1];S.push({sm:J,est:J+nt,dl:nt,fam:A.fam,dest:T[W].n,destId:T[W].id,plat:"",cancel:!1,obs:"",live:!0,num:A.num,tid:A.tid,tr:A,src:"horario"})}};U>=0&&(z(st[U],0),U>0&&z(st[U-1],1440));for(let x of S){let _=x.tid&&H.vp.get(x.tid),A=x.tr?x.tr.pat.stops.indexOf(a):-1;x.passed=!!(_&&A>=0&&!_.pre&&_.next!=null&&_.next>=0&&_.next>A&&_.atStop!==A),!x.passed&&x.live&&x.est<f.min&&(x.est=f.min,x.late=!0),x.passed&&(x.gone=!0)}}let I=S.filter(L=>L.gone?f.min-L.est<20:L.est>=f.min-.5).sort((L,U)=>L.est-U.est);{let L=I.filter(U=>U.gone);if(L.length>2){let U=new Set(L.slice(0,L.length-2));I=I.filter(z=>!U.has(z))}}if(!I.filter(L=>!L.gone).length&&S.length&&S[0].src==="oficial"&&!c)return Jn(a,!0);for(let L of I){let U=L.num&&qh(L.num);U&&U.cx&&(L.cancel=!0,L.cxWhy=U.txt)}if(lt()&&f.live){let L=t.days.indexOf(f.ymd);for(let U of I){if(U.live||U.cancel||!U.tr)continue;let z=U.tr.day===L-1?1440:U.tr.day===L+1?-1440:0,x=U.tr.t0+U.tr.pat.t[1]-z+(U.dl||0);U.noPos=f.min>x+3&&!U.rodLive,U.ghost=U.noPos&&yo(U.fam)>=.7}}if(c||(I=I.concat(R(a,f.min-.5,f.min+360)).sort((L,U)=>L.est-U.est)),!c&&I.some(L=>L.src==="oficial")){let L=S.filter(x=>x.src==="oficial"),U=Math.max(...L.map(x=>x.sm)),z=new Set(I.map(x=>String(x.num)));I=I.concat(Jn(a,!0).filter(x=>!x.gone&&x.sm<=U&&x.est>=f.min-.5&&!z.has(String(x.num))).map(x=>Object.assign(x,{unconf:!0}))).sort((x,_)=>x.est-_.est)}if(I.some(L=>L.src==="oficial")){let L=Math.max(...I.map(z=>z.sm)),U=new Set(I.map(z=>String(z.num)));I=I.concat(Jn(a,!0).filter(z=>z.sm>L&&!U.has(String(z.num))))}return I}let Xp=(a,c,f,p)=>{let v={key:a,ico:c,name:f,st:[],i:0,walk:10,open:!1};try{let S=JSON.parse(localStorage.getItem("rod_"+a)||"null");S&&Object.assign(v,S)}catch{}return!v.st.length&&p&&(v.st=p),v},Xe=Xp("home","\u{1F3E0}",__t(345),null),$e=Xp("work","\u{1F4BC}",__t(346),null),Ct={key:"near",ico:"\u{1F4CD}",name:__t(347),st:[],i:0,walk:0,open:!1,dist:{},fix:0,err:""};try{let a=t.days.indexOf(ee().ymd),c=[...Xe.st,...$e.st],f=!1;if(a>=0)for(let p of mi){if(c.includes(p.sid))continue;let v=Jr(p,a);if(!v)continue;let S=Up(v);S==null||!c.includes(T[S].id)||(p.sid=T[S].id,p.t=rt(v.t0+v.pat.t[2*v.pat.stops.indexOf(S)+1]),p.num=String(v.num),f=!0)}f&&Dp()}catch{}let Ps=[Ct,Xe,$e];try{Ct.homeW=JSON.parse(localStorage.getItem("rod_homew")||"null")}catch{}Xe.open=!1,$e.open=!1;function qp(a,c){let f=bt(a,c),p=bt(a,c+.009);return 1/Math.hypot(p[0]-f[0],p[1]-f[1])}function jh(a){if(!navigator.geolocation){Ct.err=__t(348),_e(!0);return}navigator.geolocation.getCurrentPosition(c=>{let{longitude:f,latitude:p}=c.coords,v=bt(f,p),S=qp(f,p),C=T.map((z,x)=>[x,Math.hypot(z.w[0]-v[0],z.w[1]-v[1])*S]).filter(([z])=>T[z].fams.size).sort((z,x)=>z[1]-x[1]),I=C.filter(([,z],x)=>x===0||z<Math.max(2.5,C[0][1]*1.6)).slice(0,3),L=Ct.st[0]!==T[I[0][0]].id;Ct.w=v,Ct.k=S,Ct.acc=c.coords.accuracy!=null?c.coords.accuracy:999,Ct.st=I.map(([z])=>T[z].id),Ct.dist=Object.fromEntries(I.map(([z,x])=>[T[z].id,x])),Ct.fix=Date.now(),Ct.err="",L&&(Ct.i=0);let U=[Xe,$e].find(z=>z.st.includes(Ct.st[0])&&Ct.dist[Ct.st[0]]<1.5);_e(!0)},c=>{Ct.err=c.code===1?__t(349):__t(350),_e(!0)},{enableHighAccuracy:!1,maximumAge:6e4,timeout:12e3})}let xr=a=>Math.max(1,Math.round(a*1.3/.08))+3;setTimeout(()=>jh(!0),400);let gt={fixes:[],tid:"",no:new Map,shown:""};try{let a=JSON.parse(localStorage.getItem("rod_onb")||"null");a&&a.tid&&Date.now()-a.at<3*36e5&&a.ymd===yt(new Date).ymd&&(gt.tid=a.tid,gt.manual=a.manual||0,gt.lock=!!a.lock)}catch{}let Yp="";setInterval(()=>{let a=gt.tid+"|"+(gt.manual||0)+"|"+(gt.lock?1:0);if(a!==Yp){Yp=a;try{gt.tid?localStorage.setItem("rod_onb",JSON.stringify({tid:gt.tid,manual:gt.manual||0,lock:!!gt.lock,at:Date.now(),ymd:yt(new Date).ymd})):localStorage.removeItem("rod_onb")}catch{}}},1500);let Rn={num:"",until:0};function nc(a){return!!a&&(fe===a||a.num!=null&&([...ln.values()].some(c=>String(c)===String(a.num))||String(gt.tid)===String(a.num)))}let Jp=()=>{let a=new Set([...ln.values()].map(String));return Rn.num&&Rn.until>Date.now()&&a.add(Rn.num),a};function Kh(a,c){return!!a&&a.est-c.min<=3&&c.min-a.est<=20}function Qh(a){Ve(a?`${__t(351)} (${a})`:__t(351))}function Qr(a,c,f){if(a=String(a),gt.tid&&gt.tid!==a){gt.no.set(gt.tid,Date.now()+20*6e4);let S=jn.findIndex(C=>C.num===String(gt.tid)&&C.d===ee().ymd&&Date.now()-C.t0<3*36e5);if(S>=0){jn.splice(S,1),ea.s=0;try{localStorage.setItem("rod_trips",JSON.stringify(jn,(C,I)=>C==="_n"?void 0:I))}catch{}}}gt.tid=a,gt.cand=null,gt.lock=c==="lock",gt.manual=c==="auto"?0:Date.now()+(c==="lock"?4*36e5:90*6e4),[...ln].forEach(([S,C])=>{String(C)!==a&&ri(S,null)}),Rn.num=a,Rn.until=Date.now()+90*6e4;let p=new Set;for(let S of Ps){let C=An(S);C!=null&&(S.platAt||S.goAt||S===Ct&&Ct.st&&Ct.st.length)&&p.add(C)}gt.from=[...p][0]??(f?(S=>S?An(S):null)(Ps.find(S=>S.key===f)):null);for(let S of Ps)(S.platAt||S.goAt||c!=="auto"&&S.open)&&(S.platAt=0,S.goAt=0,c!=="auto"&&(S.open=!1),si(S));window.__lpAt=Date.now();let v=Bt.find(S=>S.tr&&String(S.tr.num)===a)||dt(ee()).out.find(S=>S.tr&&String(S.tr.num)===a);if(c!=="auto"){let S=v?v.tr:Is(a);if(S){fe=S,Et=S,ae=-1,He.sk="t"+(S.num||S.vtid),Ot=Ce=Ut=!1,d._h="";try{Re(),o()}catch{}}if(![...ln.values()].some(C=>String(C)===a)){let C=f||null,I=1e9;if(!C)for(let L of[Xe,$e,Ct]){let U=An(L),z=U!=null?Jn(U).find(x=>String(x.num)===a&&!x.gone):null;z&&z.est<I&&(I=z.est,C=L.key)}C&&ri(C,a)}}if(v){fe=v.tr;let S=v.tr.pat.stops,C=(()=>{let U=Math.max(v.real&&v.v&&v.v.next>=0?v.v.next:-1,v.p&&v.p.next>=0?v.p.next:-1),z=gt.fixes[gt.fixes.length-1];if(z&&Date.now()-z.t<12e4){let x=-1,_=.6;S.forEach((A,O)=>{let J=Math.hypot(T[A].w[0]-z.w[0],T[A].w[1]-z.w[1])*z.k;J<_&&(_=J,x=O)}),x>=0&&(U=Math.max(U,x))}for(let x of p){let _=S.indexOf(x);_>=0&&(U=Math.max(U,_))}return U<0?1:U})(),I=[...Xe.st,...$e.st,...ic.keys()],L=S.findIndex((U,z)=>z>=C&&!p.has(U)&&I.includes(T[U].id));L>0&&!(ve&&ve.num===a)&&(ve={num:a,sid:T[S[L]].id,at:Date.now()},Cs())}return v}function O_(){let a=gt.fixes;if(a.length<2)return;let c=a[a.length-1],f=a.slice().reverse().find(A=>c.t-A.t>=8e3&&c.t-A.t<=9e4);if(!f)return;let p=Math.hypot(c.w[0]-f.w[0],c.w[1]-f.w[1])*c.k,v=c.spd!=null&&c.spd>0?c.spd*3.6:p/((c.t-f.t)/36e5);if(c.acc!=null&&c.acc>100)return;if(gt.tid&&v<8){if(!gt.slow)gt.slow=c.t;else if(c.t-gt.slow>9e4){let A=T.map((G,nt)=>[nt,G.w?Math.hypot(G.w[0]-c.w[0],G.w[1]-c.w[1])*c.k:99]).filter(G=>G[1]<.35).sort((G,nt)=>G[1]-nt[1])[0],O=Bt.find(G=>G.tr&&String(G.tr.num)===gt.tid),J=O&&(O.real&&O.v&&O.v.w?O.v.w:O.p&&O.p.w),Q=J?Math.hypot(J[0]-c.w[0],J[1]-c.w[1])*c.k>1:!0;if(A&&(!gt.lock||Q)){let G=gt.tid,nt=jn.find(W=>W.num===G&&W.d===ee().ymd);if(nt){nt.b=T[A[0]].id,nt.done=!0;try{localStorage.setItem("rod_trips",JSON.stringify(jn,(W,zt)=>W==="_n"?void 0:zt))}catch{}}gt.no.set(G,Date.now()+90*6e4),gt.tid="",gt.manual=0,gt.lock=!1,gt.slow=0,gt.quiet=Date.now()+10*6e4,fe=null,[...ln].forEach(([W,zt])=>{String(zt)===G&&ri(W,null)}),Rn.num===G&&(Rn.num="");try{saveOnbState&&saveOnbState()}catch{}_e(!0);return}}}else gt.slow=0;if(!gt.tid&&gt.quiet&&Date.now()<gt.quiet||gt.manual&&Date.now()<gt.manual)return;if(gt.tid){if(v<22)return;let A=Bt.find(O=>O.tr&&String(O.tr.num)===gt.tid)||dt(ee()).out.find(O=>O.tr&&String(O.tr.num)===gt.tid);if(A){if(Math.hypot(A.p.w[0]-c.w[0],A.p.w[1]-c.w[1])*c.k<=5){gt.far=0;return}if(gt.far||(gt.far=c.t),c.t-gt.far<12e4)return}gt.far=0}let S=Jp();if(!gt.tid&&S.size&&v>=15&&v<=200&&!(c.acc!=null&&c.acc>80))for(let A of[...Bt.filter(O=>O.real),...dt(ee()).out]){if(!A.tr||!S.has(String(A.tr.num))||(gt.no.get(String(A.tr.num))||0)>Date.now())continue;if(Math.hypot(A.p.w[0]-c.w[0],A.p.w[1]-c.w[1])*c.k<=(A.real?1.6:2.2)){Zp(A);return}}if(v<22||v>200)return;let C=[c.w[0]-f.w[0],c.w[1]-f.w[1]],I=null,L=2.5,U=Bt.filter(A=>A.real),z=dt(ee()).out.filter(A=>A.tr&&!U.some(O=>O.tr&&String(O.tr.num)===String(A.tr.num))),x=Jp();for(let A of[...U,...z]){if(!A.tr||x.size&&!x.has(String(A.tr.num)))continue;let O=A.real?2.5:3.5,J=Math.hypot(A.p.w[0]-c.w[0],A.p.w[1]-c.w[1])*c.k;if(J>Math.min(L,O)||I&&I.real&&!A.real)continue;let Q=A.real?A.v.next:A.p.next;if(Q==null||Q<0)continue;let G=T[A.tr.pat.stops[Q]].w,nt=[G[0]-A.p.w[0],G[1]-A.p.w[1]];if(nt[0]*C[0]+nt[1]*C[1]<=0)continue;let W=String(A.tr.num);(gt.no.get(W)||0)>Date.now()||(L=J,I=A)}if(!I){gt.cand=null;return}let _=String(I.tr.num);if(gt.tid!==_&&!(c.acc!=null&&c.acc>50)){if(!gt.cand||gt.cand.k!==_){gt.cand={k:_,t:c.t};return}c.t-gt.cand.t<2e4||Zp(I)}}function Zp(a){let c=String(a.tr.num);Qr(c,"auto"),Ot=Ce=Ut=!1,ae=-1,Et=a.tr,fe=a.tr,Object.assign(s,{tx:a.p.w[0],ty:a.p.w[1],dist:Math.min(s.dist,22)}),innerWidth<=640&&(d.classList.add("peek"),y("#rc").classList.contains("min")||y("#rcgrab").click()),zn(),d._h="",Re(),De=0,o();let f=y("#onb");f||(f=document.createElement("div"),f.id="onb",document.body.appendChild(f)),f.innerHTML=`${__t(352)}${m(a.tr.fam)} ${m(a.tr.num)}${__t(353)}${m(T[a.tr.pat.stops[a.tr.pat.stops.length-1]].n)}${__t(354)}${ve&&ve.num===c?`${__t(356)}${m(T[Vt.get(ve.sid)].n)}`:""}${__t(355)}`,f.className="on",f.querySelector("[data-onb-no]").onclick=()=>{gt.no.set(c,Date.now()+20*6e4),gt.tid="",gt.lock=!1,fe=null,Et=null,d._h="",Re(),f.className=""},f.querySelector("[data-onb-x]").onclick=()=>{f.className=""},setTimeout(()=>{f.className=""},15e3)}if(navigator.geolocation&&navigator.geolocation.watchPosition){let a=null,c=null,f=0,p=Date.now()+45e3,v=()=>!!(Ps.some(U=>U.goAt)||f>Date.now()&&!gt.lock||p>Date.now()&&!gt.tid),S=U=>{let{longitude:z,latitude:x}=U.coords,_={t:U.timestamp||Date.now(),w:bt(z,x),k:qp(z,x),spd:U.coords.speed,acc:U.coords.accuracy};if(!(gt.fixes.length&&gt.fixes[gt.fixes.length-1].t===_.t)){gt.fixes.push(_),gt.fixes=gt.fixes.filter(A=>_.t-A.t<12e4);{let A=gt.fixes.find(J=>_.t-J.t>=2e4),O=_.spd!=null&&_.spd>0?_.spd*3.6:A?Math.hypot(_.w[0]-A.w[0],_.w[1]-A.w[1])*_.k/((_.t-A.t)/36e5):0;O>=15&&O<250&&(_.acc==null||_.acc<300)&&(f=Date.now()+10*6e4)}try{ee().live&&O_()}catch{}}},C=0,I=()=>{if(!(a!=null||C))if(c=v(),c)a=navigator.geolocation.watchPosition(S,()=>{},{enableHighAccuracy:!0,maximumAge:5e3,timeout:2e4});else{let U=()=>navigator.geolocation.getCurrentPosition(S,()=>{},{enableHighAccuracy:!1,maximumAge:55e3,timeout:2e4});U(),C=setInterval(U,6e4)}};setInterval(()=>{(a!=null||C)&&v()!==c&&(L(),I())},5e3);let L=()=>{a!=null&&(navigator.geolocation.clearWatch(a),a=null),C&&(clearInterval(C),C=0)};setTimeout(I,3e3),document.addEventListener("visibilitychange",()=>{document.hidden?L():(gt.fixes=[],p=Date.now()+45e3,I())})}setInterval(()=>{!document.hidden&&(Date.now()-Ct.fix>11e4||Ps.some(a=>a.goAt))&&jh(!1)},3e4);let si=a=>{try{localStorage.setItem("rod_"+a.key,JSON.stringify({st:a.st,i:a.i,walk:a.walk,open:a.open,hide:a.hide||"",goAt:a.goAt||0,platAt:a.platAt||0,xfer:a.xfer||null}))}catch{}},An=a=>a.st.length?Vt.get(a.st[a.i]||a.st[0]):null;function jp(a,c,f,p){if(p&&c.bus)return c.bstops.slice(1).some(C=>p.has(C))?"to":"out";if(p&&c.tr){let C=c.tr.pat.stops,I=C.indexOf(a);if(I>=0&&C.slice(I+1).some(L=>p.has(L)))return"to"}if(p&&c.tr)return"out";let v=Vt.get(c.destId)??T.findIndex(C=>C.n===c.dest);if(v<0||v==null||f==null)return"otros";let S=C=>Math.hypot(T[C].w[0]-T[f].w[0],T[C].w[1]-T[f].w[1]);return S(v)<S(a)?"to":"out"}let vr=a=>a<1?__t(318):a<60?Math.floor(a)+" min":Math.floor(a/60)+" h "+String(Math.floor(a%60)).padStart(2,"0"),Kp=0,F_=/sin servicio|sense servei|suspend|interromp|interrump|no circula|no se puede garantizar|no es pot garantir/i,Qp=/sin servicio|sense servei|suspend|interromp|interrump|no circula|no hi ha circulaci|cortad|tallad|corte de|tall de|servicio alternativo|servei alternatiu|por carretera|per carretera|no se puede garantizar|no es pot garantir/i,tm=/huelga|vaga\b|strike|servicios? m[ií]nimos|serveis m[ií]nims|demora|retard|retras|v[ií]a [uú]nica|una sola v[ií]a|incidencia|incidència|aver[ií]a|avaria|aturad|detenid|parad[oa]s? en|velocidad reducida|velocitat redu/i,yr=a=>{let c=a.es||a.txt;return Qp.test(c)||Qp.test(a.txt)?3:tm.test(c)||tm.test(a.txt)||a.lvl>=2?2:1},em=4,td=new Map,ic=new Map;function nm(a,c){let f=t.days.indexOf(ee().ymd),p=f+"|"+a+"|"+[...c].join(",");if(td.has(p))return td.get(p);let v=!1,S=new Set,C=new Set;for(let L of st[f]||[]){let U=L.pat.stops,z=U.indexOf(a);if(z>=0)for(let _=z+1;_<U.length;_++){if(c.has(U[_])){v=!0;break}S.add(U[_])}let x=-1;for(let _=1;_<U.length;_++)if(c.has(U[_])){x=_;break}if(x>0)for(let _=0;_<x;_++)C.add(U[_])}let I=v?null:[...S].filter(L=>C.has(L)&&L!==a&&!c.has(L));return td.set(p,I),I}function ed(a,c,f,p){for(let v of p||Jn(a)){if(v.cancel||v.gone||!v.tr||v.est<c-.01)continue;let S=v.tr.pat.stops,C=S.indexOf(a);if(C<0)continue;let I=-1;for(let L=C+1;L<S.length;L++)if(f.has(S[L])){I=L;break}if(!(I<0))return{c:v,fin:v.est+(v.tr.pat.t[2*I]-v.tr.pat.t[2*C+1])}}return null}function B_(a,c,f){let p=ed(a,c+2,f,Jn(a));return p?{c:p.c,fin:p.fin,m:p.c.est-c,lost:!1}:null}function nd(a,c,f,p,v){let S=null,C=new Map,I=Jn(a).filter(L=>!L.cancel&&!L.gone&&L.tr&&L.est-v.min>=p).slice(0,8);for(let L of I){let U=L.tr.pat.stops,z=U.indexOf(a);if(!(z<0))for(let x of f){let _=U.indexOf(x);if(_<=z)continue;let A=L.est+(L.tr.pat.t[2*_]-L.tr.pat.t[2*z+1]);C.has(x)||C.set(x,Jn(x));let O=ed(x,A+em,c,C.get(x));O&&(!S||O.fin<S.finAt-.01||Math.abs(O.fin-S.finAt)<.01&&L.est>S.x.est)&&(S={T:x,x:L,finAt:O.fin})}}return S}function k_(a,c,f,p,v){let S=c.T,C=Jn(S),I=c.fin,L=[];for(let x of C){if(L.length>=5)break;if(x.cancel||x.gone||!x.tr)continue;let _=x.tr.pat.stops,A=_.indexOf(S),O=-1;for(let G=A+1;G<_.length;G++)if(I.has(_[G])){O=G;break}if(O<0||f.x&&f.x.arr!=null&&x.est<f.x.arr-.01)continue;let J=x.est+(x.tr.pat.t[2*O]-x.tr.pat.t[2*A+1]),Q=p&&p.c===x;L.push(`<li class="hr${Q?" pin":""}" style="--lc:${Z[x.fam]||"#6b7385"}"><span class="hrt"><b>${rt(x.est)}</b><small>${f.x&&f.x.arr!=null?x.est-f.x.arr<2?__t(357):Math.floor(x.est-f.x.arr)+" "+__t(358):""}</small></span><span class="hrd">${Ni(x.fam+" \xB7 "+x.dest,x.fam)}<small class="hro">${__t(359)} ${rt(J)}${x.num?" \xB7 "+__t(360)+m(x.num):""}</small></span><span class="hrm">${x.dl>=1?`<em class="dl ${$i(x.dl)}">+${Math.round(x.dl)}</em>`:""}${x.plat?`${__t(270)}${m(x.plat)}</i>`:""}</span></li>`)}let U=(()=>{let x=[];for(let _ of c.cands){let A=nd(An(a),I,[_],0,v);A&&x.push([_,A.finAt])}return x.sort((_,A)=>_[1]-A[1]),x.filter(([_,A])=>A<=x[0][1]+30||c.fixed&&_===S).slice(0,4)})(),z=U.length>1||c.fixed?`<div class="hxst"><span>${__t(361)}:</span><button type="button" data-hxf="${a.key}:" class="${c.fixed?"":"on"}">${__t(362)}</button>${U.map(([x])=>`<button type="button" data-hxf="${a.key}:${m(T[x].id)}" class="${c.fixed&&x===S?"on":""}">${m(T[x].n)}</button>`).join("")}</div>`:"";return`<div class="hxfer"><div class="hdir">\u21C4 ${__t(361)} ${Ni(T[S].n,p?p.c.fam:"")} \u2192 ${m(c.finName)}</div><ol class="hxl">${L.join("")||`<li class="hr"><span class="hrd">${__t(363)}</span></li>`}</ol>${z}</div>`}let im=new Set;function $_(a,c,f){im.has(a)||(im.add(a),fm(c,f,a))}function z_(a,c,f){let p=An(a);if(a===Ct){if(gt.tid)return"";if(p==null)return`${__t(364)}${Ct.err?m(Ct.err)+__t(365):__t(366)}</small></span><span class="hchev">\u27F3</span></button></div>`;if([Xe,$e].find(It=>It.st.includes(Ct.st[0])&&Ct.dist[Ct.st[0]]<1.5)||Date.now()-Ct.fix>10*6e4)return"";a.walk=xr(Ct.dist[a.st[a.i]]||0)}if(p==null){let it=Ct.st.length?Vt.get(Ct.st[0]):null,It=a===$e?Xe:$e,Xt=it!=null&&!It.st.includes(Ct.st[0]);return`<div class="hplace"><div class="hhead hnew"><span class="hico">${a.ico}</span><span class="htit"><b>${a.name}</b><small>${Xt?`${__t(367)}${m(T[it].n)}</b>`:__t(368)}</small></span>${Xt?`<button type="button" class="hpick" data-hnear="${a.key}${__t(369)}`:""}<button type="button" class="hpick alt" data-hset="${a.key}">${Xt?__t(370):__t(371)}</button></div></div>`}Hp(p,()=>_e(!0));let v=a===Ct?null:a===Xe?$e:Xe,S=v?An(v):null,C=S!=null&&S!==p?S:U_,I=S!=null&&S!==p?v===$e?__t(372):"casa":"Barcelona",L=T[p].fams,U=new Set([...L].filter(it=>Dt.has(it))),z=U.size<L.size,x=!1;U.size||(U=new Set(L),z=!1,x=!0);let _=Ct.w?Math.hypot(T[p].w[0]-Ct.w[0],T[p].w[1]-Ct.w[1])*Ct.k:null,A=_!=null&&Date.now()-Ct.fix<10*6e4;a.platAt&&Date.now()-a.platAt>45*6e4&&(a.platAt=0,si(a)),gt.tid&&a.platAt&&(a.platAt=0,si(a));let O=a!==Ct&&!!a.platAt&&!gt.tid,J=a===Ct||A&&_>3&&!a.goAt&&!O,Q=O||a!==Ct&&A&&(_<.08&&Ct.acc<=40||_<.15&&Ct.acc<=100&&Date.now()-Ct.fix<3*6e4)&&!(a===Xe&&Ct.homeW&&Math.hypot(Ct.homeW[0]-Ct.w[0],Ct.homeW[1]-Ct.w[1])*Ct.k<.05),G=a.goAt?(Date.now()-a.goAt)/6e4:null;G!=null&&(G>60||Q)&&(a.goAt=0,si(a)),A&&a!==Ct&&Ct.fix!==a._khFix&&(a._khFix=Ct.fix,(a._kh=(a._kh||[]).filter(it=>Date.now()-it.t<6*6e4)).push({t:Date.now(),km:_}));let nt=A&&a!==Ct&&_<=3&&!(a._noWay>Date.now())&&(a._kh||[]).some(it=>Date.now()-it.t>=6e4&&Date.now()-it.t<=5*6e4&&it.km-_>=.08),W=!Q&&a!==Ct&&(nt||!!a.goAt),zt=W?A&&_<=3?xr(_):Math.max(0,a.walk-G):0,oe=A&&Ct.acc<=150&&a!==Ct&&_>.15&&_<=3,te=oe&&!W&&!Q&&!J&&xr(_)>=a.walk+5?xr(_):null,tn=Jn(p),Ee=tn.filter(it=>!Z[it.fam]||Dt.has(it.fam)||x),be=J||Q?0:W?zt:te??a.walk,vn=H.alerts.filter(it=>[...it.fams].some(It=>U.has(It))||it.stops&&it.stops.has(p)),sn=vn.some(it=>F_.test(it.es||it.txt)),pn={to:[],out:[],otros:[],all:Ee},gi=I!=="Barcelona"?new Set(v.st.map(it=>Vt.get(it)).filter(it=>it!=null)):null,_i=null;if(gi&&a!==Ct){let it=nm(p,gi);if(it&&it.length){let It=a.xfer!=null?Vt.get(a.xfer):null,Xt=It!=null&&it.includes(It)?[It]:it,re=nd(p,gi,Xt,be,c);re&&(_i=Object.assign(re,{fin:gi,finName:T[C].n,cands:it,fixed:It!=null&&it.includes(It)}),Hp(re.T,()=>_e(!0)),C=re.T,gi=new Set([re.T]))}}Ee.forEach(it=>pn[jp(p,it,C,gi)].push(it));let hc="";if(gi&&!pn.to.length&&Ee.length<tn.length){let it=tn.filter(It=>!Ee.includes(It)&&jp(p,It,C,gi)==="to");it.length&&(pn.to=it,hc=[...new Set(it.map(It=>It.fam))].sort(B).join(", "))}let ax=it=>{if(it==="all")return __t(373);let It=re=>(re.find(yn=>yn.fam)||{}).fam;if(it==="to")return __t(374)+Ni(I==="Barcelona"?"Barcelona":T[C].n,It(pn.to)||[...U][0])+(()=>{let re=z&&!hc?[...U].filter(yn=>pn.to.some(oi=>oi.fam===yn)).sort(B):[];return re.length?`<span class="hwf" title="${__t(375)}">${re.map(Mn).join("")}</span>`:""})();let Xt=[];for(let re of pn[it])Xt.some(yn=>yn[0]===re.dest)||Xt.push([re.dest,re.fam]);return Xt.length?__t(374)+Xt.slice(0,2).map(([re,yn])=>Ni(re,yn)).join(" "):__t(376)},Ys=ln.get(a.key);Ys&&!tn.some(it=>String(it.num)===Ys&&!it.gone)&&(Rn.num=Ys,Rn.until=Date.now()+90*6e4,ri(a.key,null));let ra=it=>{let It=Ys&&pn[it].find(rn=>String(rn.num)===Ys&&!rn.gone);if(It&&It.cancel)return{cls:"v-miss",pin:1,x:It,big:__t(377),small:`${rt(It.est)} \xB7 ${It.fam}${__t(378)}${It.dest}${It.num?" \xB7 "+__t(360)+It.num:""}`,warn:""};let Xt=It||pn[it].find(rn=>!rn.cancel&&!rn.gone&&rn.est-c.min>=be);if(!Xt){let rn=pn[it].find(mn=>!mn.cancel);return rn&&!J?{cls:"v-miss",big:__t(379),small:`${__t(380)}${rt(rn.est)}${__t(381)}${vr(rn.est-c.min)}${__t(382)}`}:{cls:"v-no",big:__t(383),small:__t(384)}}let re=Xt.est-c.min-be,yn=J||Q?"v-info":W?re<1.5?"v-warn":"v-ok":re<1.5?"v-bad":re<5?"v-warn":"v-ok",oi=Xt.ghost?pn[it].find(rn=>!rn.cancel&&!rn.ghost&&rn.live&&rn.est>Xt.est):null;if(It&&re<0&&!J&&!Q){let rn=pn[it].find(mn=>!mn.cancel&&!mn.gone&&!mn.ghost&&mn!==Xt&&mn.est-c.min>=be);return{cls:"v-miss",pin:1,miss:1,nxt:rn,x:Xt,ghost:!!Xt.ghost,big:__t(385),small:`${rt(Xt.est)} \xB7 ${Xt.fam}${__t(378)}${Xt.dest}${Xt.plat?__t(182)+Xt.plat:""}${Xt.num?" \xB7 "+__t(360)+Xt.num:""}`,warn:rn?`\u27A1\uFE0F ${__t(386)}: ${rn.est-c.min-be<1?__t(387):__t(388)+" "+vr(rn.est-c.min-be)} \xB7 ${rt(rn.est)}${rn.arr!=null?" \u2192 "+rt(rn.arr):""}${rn.plat?__t(182)+rn.plat:""}${rn.num?" \xB7 "+__t(360)+rn.num:""}`:""}}return{pin:It?1:0,cls:yn,ghost:!!Xt.ghost,soft:!Xt.live&&!Xt.ghost&&!Xt.unconf&&!Xt.cancel?Xt.rodLive?__t(389):__t(390):"",big:J||Q?re<1?__t(391):__t(392)+vr(re):W?re<1.5?__t(393):__t(394)+vr(re)+__t(395):re<1.5?__t(396):__t(397)+vr(re),warn:Xt.unconf?"\u26A0\uFE0F "+__t(398):It&&!Xt.live&&Xt.rodLive&&!Xt.ghost||!Xt.ghost&&Xt.noPos&&It?"":!Xt.ghost&&Xt.late&&It?__t(399):Xt.ghost?`\u26A0\uFE0F ${__t(400)}${oi?`${__t(401)}${rt(oi.est)}`:""}`:sn?__t(402):"",small:`${Xt.bus?__t(403):""}${rt(Xt.est)} \xB7 ${Xt.fam}${__t(378)}${Xt.dest}${Xt.plat?__t(182)+Xt.plat:""}${Xt.dl>=1?` \xB7 +${Math.round(Xt.dl)} min`:""}${Xt.arr!=null?`${__t(404)}${rt(Xt.arr)}`:""}${Xt.num?" \xB7 "+__t(360)+Xt.num:""}`,x:Xt}},ox=gi||new Set([C]),lx=it=>{let It=it.tr;if(!It)return null;let Xt=It.pat.stops,re=Xt.indexOf(p);if(re<0)return null;let yn=-1;for(let oi=re+1;oi<Xt.length;oi++)if(ox.has(Xt[oi])){yn=oi;break}return yn<0?null:it.est+(It.pat.t[2*yn]-It.pat.t[2*re+1])};pn.to.forEach(it=>{it.arr=lx(it)});let To=pn.out.length?"out":"otros",Ke=ra("to"),Ao=ra(To);if(Q||a===Ct&&Ct.acc<=40&&(Ct.dist[a.st[a.i]]||9)<.08){for(let it of[Ke.x,Ao.x].concat(a===Ct?[ra("all").x]:[]))if(it&&ln.has(a.key)&&String(ln.get(a.key))===String(it.num)&&!it.cancel&&it.est-c.min<=2&&it.est-c.min>-.5){let It="w"+it.num+"|"+Math.round(it.sm);dm.has(It)||(dm.add(It),Ql(`${__t(405)}${it.fam}${__t(378)}${it.dest}`,`${Math.round(it.est-c.min)<=1?__t(406):__t(407)+Math.round(it.est-c.min)+" min"}${__t(378)}${T[p].n}${it.plat?__t(182)+it.plat:""}`))}}let Cm=lt()&&c.live,Rm=U.size===1,cx=it=>{let It=it.est-c.min;return J?it.cancel?"cx":It<0?"u-miss":"u-info":it.cancel?"cx":It<be?"u-miss":It<be+1.5?"u-now":It<be+5?"u-soon":"u-ok"},ux=it=>{if(it.gone)return`<li class="hr u-gone${it.live?" on":""}${uo(it)?" sel":""} go" data-dk="${f.push(it)-1}" title="Ya ha salido: toca para ver d\xF3nde va"><span class="hrt"><b>${rt(it.est)}${__t(408)}${ys(Math.max(1,Math.round(c.min-it.est))+" min")}</small></span><span class="hrd">${Ni((Rm?"":it.fam+" \xB7 ")+it.dest,it.fam)}${__t(409)}${m(it.num)}</small></span><span class="hrm">${it.dl>=1?`<em class="dl ${$i(it.dl)}">+${Math.round(it.dl)}</em>`:""}</span></li>`;let It=!it.cancel&&it.est-c.min<be,Xt=ec(it.num,"");return`<li class="hr ${cx(it)}${it.live?" on":""}${it.ghost?" gh":""}${uo(it)?" sel":""}${Ys&&String(it.num)===Ys?" pin":""}${mi.some(re=>{let yn=Jr(re,t.days.indexOf(c.ymd));return yn&&String(yn.num)===String(it.num)})?" fav":""} go" style="--lc:${Z[it.fam]||"#6b7385"}" data-dk="${f.push(it)-1}" title="${it.cancel?__t(377):It?__t(385):__t(410)}"><span class="hrt"><b>${it.cancel?"\u2715":It?rt(it.est):vr(it.est-c.min)}</b><small>${it.cancel?__t(147):it.late?__t(411):It?__t(412):it.ghost?__t(413):rt(it.est)}</small></span><span class="hrd">${it.bus?'<i class="bus" title="Autob\xFAs que sustituye al tren por obras">\u{1F68C}</i>':""}${Ni((Rm?"":it.fam+" \xB7 ")+it.dest,it.fam)}${Xt.length?`<i class="cr" title="${m(Xt.map(re=>fo(re.kind)).join(" \xB7 "))}">${Xt.slice(0,2).map(re=>ho[re.kind]).join("")}</i>`:""}${it.arr!=null?`${__t(414)}${rt(it.arr)}${it.num?" \xB7 "+__t(360)+m(it.num):""}${(()=>{let re=it.num&&Wl(it.num);return re&&re.n>=5&&re.late/re.n>=.5?` \xB7 <b class="slate">${__t(415)} \xB7 ${re.late} ${__t(144)} ${re.n} ${__t(141)}</b>`:""})()}</small>`:""}${it.obs?`<small class="hro">${m(it.obs)}</small>`:""}${it.unconf?`<small class="hro unc">${__t(416)}</small>`:""}</span><span class="hrm">${!it.cancel&&it.dl>=1?`<em class="dl ${$i(it.dl)}">+${Math.round(it.dl)}</em>`:""}${it.plat?`${__t(270)}${m(it.plat)}</i>`:""}</span></li>`},Co=(it,It,Xt)=>`<div class="hcol"><div class="hdir">${ax(it)}${Xt?`<button type="button" class="hhide" data-hhide="${a.key}:${Xt}" title="${__t(417)}">\u2715</button>`:""}</div><div class="hv ${It.cls}${It.ghost||It.pin&&It.x&&It.x.noPos&&!vo([It.x.fam]).length?" gh":""}${It.x?" go":""}"${It.miss&&It.nxt&&It.nxt.num?` data-pinnext="${a.key}:${m(It.nxt.num)}" title="${__t(418)}"`:It.x?` data-dk="${f.push(It.x)-1}"`:""}><b>${It.big}</b>${It.pin?`<button type="button" class="hunpin" data-unpin="${a.key}" title="${__t(419)}">\u{1F4CC} ${__t(420)} \u2715</button>`:""}<small>${m(It.small)}${te!=null&&it!==To?` \xB7 <span class="nw hfar2">${te}\xA0min ${__t(421)}</span>`:""}${It.soft?` \xB7 <span class="hsoft" title="${__t(422)}">\u{1F4E1} ${m(It.soft)}</span>`:""}</small>${It.pin&&It.x&&It.x.num?(re=>re?`<span class="hwhere">\u{1F4CD} ${m(re)}</span>`:"")(ac(It.x.num)):""}${It.warn?`<span class="hvw">${m(It.warn)}</span>`:""}</div><ol>${pn[it].slice(0,(a.more?it==="all"||a.hide?20:10:it==="all"?7:a.hide?8:4)+pn[it].filter(re=>re.gone).length).map(ux).join("")||"<li><span>\u2014</span></li>"}</ol></div>`;if(a===Ct){let it=ra("all");var hx=it.x?`<span class="nw">${it.big}</span> \xB7 <span class="nw"><b>${rt(it.x.est)}</b> ${m(it.x.fam)}${__t(423)}${m(it.x.dest)}${it.x.plat?'<span class="nw">'+__t(182)+m(it.x.plat)+"</span>":""}`:it.big}let en=_i&&Ke.x&&Ke.x.arr!=null?B_(_i.T,Ke.x.arr,_i.fin):null;if(en){let it=a._xc;it&&it.leg===String(Ke.x.num)&&it.conn!==String(en.c.num)&&it.est<en.c.est&&it.live?(en.lost=!0,en.missed=it.est):(!it||it.leg!==String(Ke.x.num)||!it.live||it.conn===String(en.c.num))&&(a._xc={leg:String(Ke.x.num),conn:String(en.c.num),est:en.c.est,live:!!(H.delays&&Date.now()-(a._xt||(a._xt=Date.now()))>3e4)})}en&&(ic.set(T[_i.T].id,{fam:en.c.fam,est:en.c.est,plat:en.c.plat,lost:en.lost}),en.lost&&ln.get(a.key)===String(Ke.x.num)&&$_("xf"+Ke.x.num+"|"+en.c.num,`\u21C4 ${__t(424)} ${T[_i.T].n}`,`${__t(425)}: ${en.c.fam} ${rt(en.c.est)} \u2192 ${rt(en.fin)}${en.c.plat?" \xB7 v\xEDa "+en.c.plat:""}`));let xd=en?`<br><span class="nw hxf ${en.lost?"xbad":en.m<4?"xwarn":"xok"}">\u21C4 ${en.lost?`${__t(426)} ${rt(en.missed)} \xB7 ${__t(184)} `:`${m(T[_i.T].n)} \xB7 `}${Mn(en.c.fam)} <b>${rt(en.c.est)}</b> \u2192 <b>${rt(en.fin)}</b>${en.lost?"":` \xB7 ${Math.floor(en.m)} ${__t(427)}`}</span>`:_i?`<br><span class="nw hxf xbad">\u21C4 ${__t(428)} ${m(T[_i.T].n)}</span>`:"",dx=a===Ct?hx:_i&&Ke.x?`<span class="nw">${Ke.big}${Ke.x.plat?__t(182)+m(Ke.x.plat):""}</span> \xB7 <span class="nw"><b>${rt(Ke.x.est)}</b>${Ke.x.arr!=null?` \u2192 ${m(T[_i.T].n)} <b>${rt(Ke.x.arr)}</b>`:""}</span>${xd}`:Ke.x?`<span class="nw">${Ke.big}${Ke.x.plat?__t(182)+m(Ke.x.plat):""}</span> \xB7 <span class="nw"><b>${rt(Ke.x.est)}</b>${Ke.x.arr!=null?`${__t(430)}${rt(Ke.x.arr)}</b>`:""}${__t(429)}${m(I)}</span>`:__t(431)+m(I),qe=a===Ct?(it=>it.pin?it:null)(ra("all")):Ke.pin?Ke:Ao.pin?Ao:null;qe&&qe.x&&ln.has(a.key)&&pm(qe,T[p].n);let fx=qe?a===Ct?"all":qe===Ke?"to":To:"",aa=!!(qe&&(qe.ghost||qe.x.noPos&&!vo([qe.x.fam]).length||qe.x.cancel)),vd=!!(qe&&qe.miss),oa=aa?pn[fx].find(it=>!it.cancel&&!it.ghost&&!it.gone&&it.est>qe.x.est-.01&&it!==qe.x&&it.est-c.min>=(J||Q?0:be)):null,px=vd?`<span class="nw">${__t(432)} <b>${rt(qe.x.est)}</b></span>${qe.nxt?`<br><span class="nw hnx">${__t(425)} <b>${rt(qe.nxt.est)}</b>${qe.nxt.arr!=null?` \u2192 <b>${rt(qe.nxt.arr)}</b>`:""}</span>`:""}`:"",mx=aa?`<span class="nw">\u26A0\uFE0F ${qe.x.cancel?__t(377):qe.ghost?__t(433):__t(434)}</span>${qe.x.cancel?"":` \xB7 <span class="nw"><b>${rt(qe.x.est)}</b>${qe.x.arr!=null?` \u2192 <b>${rt(qe.x.arr)}</b>`:""}</span>`}${oa?` \xB7 <span class="nw">${__t(184)} <b>${rt(oa.est)}</b>${oa.arr!=null?` \u2192 <b>${rt(oa.arr)}</b>`:""}${oa.plat?__t(182)+m(oa.plat):""}</span>`:""}`:"";return`<div class="hplace ${a.open?"open":""}${qe?" pinned":""}${aa?" pgh":""}"><button type="button" class="hhead" data-ht="${a.key}"><span class="hico">${a.ico}</span><span class="htit"><b>${m(T[p].n)}${qe&&qe.x.num?`<i class="hpn">\u{1F4CC} ${m(qe.x.num)}</i>`:""}</b>${a.open?_i&&xd?`<small class="nofit">${xd.replace(/^<br>/,"")}</small>`:"":`<small class="c${vd||aa&&qe.x.cancel?"bad":aa?"warn":sn?"bad":Ke.cls.slice(2)}">${aa?mx:vd?px:dx}</small>${qe&&qe.x&&qe.x.num?(it=>it?`<small class="nofit hwh2">\u{1F4CD} ${m(it)}</small>`:"")(ac(qe.x.num)):""}`}${a.open?"":(it=>{if(!it||it.num==null)return"";let It=t.days.indexOf(c.ymd),Xt=it.tr,re=Xt?Xt.t0+Xt.pat.t[1]-(Xt.day===It-1?1440:Xt.day===It+1?-1440:0)+(it.dl||0):null,yn=!it.live&&!it.ghost&&!it.unconf&&re!=null&&re>c.min-1,oi=it.cancel?["bad",__t(377)]:it.live?["ok",__t(435)]:yn?["wait",__t(436)]:["warn",__t(433)];return`<small class="nofit hrel ${oi[0]}"><b>${oi[1]}</b></small>`})(qe&&qe.x||Ke.x)}</span><span class="hchev">\u25BE</span></button>`+(a.open?`
      <div class="hbody${a===Ct||a.hide==="out"||a.hide==="to"?" r1":""}">
        ${a===Ct?`<div class="hwalk">\u{1F4CD} A ${(()=>{let it=Ct.dist[a.st[a.i]]||0;return it<1?Math.round(it*100)*10+" m":it.toFixed(1).replace(".",",")+" km"})()}${__t(438)}${a.walk}${__t(439)}`:""}
        ${O?`<div class="hwalk away">${__t(441)}<a data-hplat="${a.key}${__t(440)}`:Q&&!gt.tid?`${__t(442)}${a.key}${__t(443)}`:W?`${__t(444)}${Math.round(zt)} min</b>${A&&_<=3?__t(445):""} \xB7 <a data-hgo="${a.key}:0">${__t(446)}</a></div>`:""}${J&&a!==Ct?`<div class="hwalk away hawg"><span class="hawt">\u{1F4CD} ${__t(447)} ${_<10?_.toFixed(1).replace(".",","):Math.round(_)} km: ${__t(448)}</span>${sd(a)}</div>`:""}${J&&a===Ct?`<div class="hwalk hgw">${sd(a)}</div>`:""}<div class="hwalk"${J?" hidden":""}>${(()=>{let it=Ys||(()=>{let re=(pn.to.length?pn.to:Ee).filter(mn=>mn.num!=null&&!mn.cancel),yn=re.filter(mn=>mn.tr&&mn.tr.pat.stops[0]===p&&mn.est>=c.min-1&&mn.est<=c.min+3).sort((mn,la)=>mn.est-la.est);if(yn[0])return yn[0].num;let oi=[...re];if(gi&&a!==Ct){let mn=t.days.indexOf(c.ymd),la=new Set(re.map(yd=>String(yd.num))),Im=(yd,gx)=>{for(let rs of yd||[]){if(la.has(String(rs.num))||Z[rs.fam]&&!Dt.has(rs.fam)&&!x)continue;let Sd=rs.pat.stops,dc=Sd.indexOf(p);if(dc<0||dc===Sd.length-1||!Sd.slice(dc+1).some(_x=>gi.has(_x)))continue;let Pm=H.delays&&H.delays.get(rs.tid),bd=rs.t0+rs.pat.t[2*dc+1]-gx+(typeof Pm=="number"?Math.max(0,Pm/60):0);bd>c.min+1||bd<c.min-15||(la.add(String(rs.num)),oi.push({num:rs.num,est:bd,tr:rs}))}};mn>=0&&(Im(st[mn],0),mn>0&&Im(st[mn-1],1440))}let rn=oi.filter(mn=>mn.est<=c.min+1&&mn.est>=c.min-15).sort((mn,la)=>la.est-mn.est);return rn[0]?rn[0].num:Ke&&Ke.x&&Ke.x.num})(),It=it!=null?tn.find(re=>String(re.num)===String(it)):null,Xt=Kh(It,c);return it!=null&&!gt.tid?`<button type="button" class="hgo hboard${Xt?"":" off"}" data-hboard="${m(String(it))}"${Xt?"":` data-hbwhen="${It?rt(It.est):""}"`}>\u{1F686} ${Xt&&it?`${__t(449)} ${m(String(it))}`:__t(450)}</button>`:""})()}${Q||gt.tid?"":`<button type="button" class="hgo hplat" data-hplat="${a.key}:1">${__t(451)}</button>`}${sd(a)}</div>
        <div class="hcfgp"${a._cfg?"":" hidden"}><div class="hcl">${__t(452)}</div><div class="hst">${a.st.map((it,It)=>{let Xt=Vt.get(it);return Xt==null?"":`<button type="button" data-hs="${a.key}:${It}" class="${It===a.i?"on":""}">${m(T[Xt].n.replace(/^Barcelona[ -]+(?=\S)/,"")||T[Xt].n)}${It===a.i?" \u2713":""}</button>`}).join("")}</div>${a!==Ct?`<div class="hwrow"><div><div class="hcl">${__t(453)}</div><div class="hstep2"><button type="button" data-hw="${a.key}:-1" aria-label="\u2212">\u2212</button><b>${a.walk} min</b><button type="button" data-hw="${a.key}:1" aria-label="+">+</button></div></div>${oe?`<div class="hposc"><div class="hcl">\u{1F4CD} ${__t(454)}</div><div class="hpv"><span><b>${xr(_)} min</b><small>${_<1?Math.round(_*100)*10+" m":_.toFixed(1).replace(".",",")+" km"}</small></span>${xr(_)!==a.walk?`<button type="button" data-hwset="${a.key}:${xr(_)}">${__t(455)}</button>`:""}</div></div>`:""}</div>`:""}<a class="hcfgmap" data-hcfgmap="${p}">\u2139\uFE0F ${__t(456)}</a></div>
        ${(()=>{let it=mi.filter(It=>a.st.includes(It.sid));return it.length?`<div class="hfav">${it.map(It=>{let Xt=Jr(It,t.days.indexOf(c.ymd)),re=Xt&&Ee.find(yn=>String(yn.num)===String(Xt.num));return`\u2B50 <b>${It.t}</b> ${m(It.fam)} ${re?re.cancel?__t(457):re.gone?__t(267):re.dl>=1?`<em class="dl ${$i(re.dl)}">+${Math.round(re.dl)}${__t(458)}${rt(re.est)}`:__t(459):__t(460)}`}).join("<br>")}</div>`:""})()}
        ${z&&hc?`${__t(461)}${[...U].sort(B).map(Mn).join(" ")}${__t(462)}${I}${__t(463)}${hc}${__t(464)}`:x?`${__t(465)}${[...Dt].sort(B).slice(0,3).map(Mn).join(" ")}${__t(466)}`:""}
        ${vn.length?`<div class="hal ${sn?"bad":""}${hd.v?" open":""}" data-halx>\u26A0\uFE0F ${go(vn[0])} ${m(vn[0].txt)} <small>${_o(vn[0])}</small>${vn.length>1?` <a data-hal>+${vn.length-1}${__t(467)}`:""}</div>`:`${__t(468)}${[...U].sort(B).join(", ")}</div>`}
        ${(()=>{let it=a.st.flatMap(It=>ec("",It));return it.length?`<div class="hcr">${it.slice(0,3).map(It=>`<p><span><span class="cname">${ho[It.kind]} <b>${m(fo(It.kind))}</b></span><small class="cmeta">${It.up>1?(It.up>999?"999+":It.up)+" "+__t(322)+" \xB7 ":""}${kp(It)}</small></span>${jr.has(It.id)?`<small class="hcrok">\u2713 ${__t(323)}</small>`:`<span class="hcrv"><button type="button" data-rv="${It.id}:1" title="${__t(324)}">\u2713 ${__t(325)}</button><button type="button" data-rv="${It.id}:-1" title="${__t(326)}">\u2715 ${__t(327)}</button></span>`}</p>`).join("")}</div>`:""})()}
        ${a===Ct?`<div class="hcols one">${Co("all",ra("all"))}</div>`:a.hide==="out"?`<div class="hcols one">${Co("to",Ke)}</div><a class="hshow" data-hshow="${a.key}${__t(469)}`:a.hide==="to"?`<div class="hcols one">${Co(To,Ao)}</div><a class="hshow" data-hshow="${a.key}${__t(469)}`:`<div class="hcols">${Co("to",Ke,"to")}${Co(To,Ao,"out")}</div>`}
        ${_i?k_(a,_i,Ke,en,c):""}
        ${Ee.length>(a===Ct?7:8)?`<button type="button" class="hmore" data-hmore="${a.key}">${a.more?__t(123):__t(470)}</button>`:""}
        <div class="hsrc"><span class="hsrcT" hidden title="${Cm?Ft.get(T[p].id)?.d?__t(471):__t(472):__t(473)} \xB7 \u25CF = ${__t(474)}">${Cm?Ft.get(T[p].id)?.d?__t(475):__t(476):__t(266)}</span><a data-hmap="${p}${__t(437)}${a===Ct?__t(477):`<a data-hset="${a.key}${__t(478)}`}${a===$e?`${__t(479)}`:""}</div>
      </div>`:"")+"</div>"}let id={v:(()=>{try{return localStorage.getItem("rod_cfgseen")==="1"}catch{return!1}})()},V_='<span class="ico" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M19.42 10.34 L21.90 10.60 L21.90 13.40 L19.42 13.66 L18.42 16.07 L19.99 18.02 L18.02 19.99 L16.07 18.42 L13.66 19.42 L13.40 21.90 L10.60 21.90 L10.34 19.42 L7.93 18.42 L5.98 19.99 L4.01 18.02 L5.58 16.07 L4.58 13.66 L2.10 13.40 L2.10 10.60 L4.58 10.34 L5.58 7.93 L4.01 5.98 L5.98 4.01 L7.93 5.58 L10.34 4.58 L10.60 2.10 L13.40 2.10 L13.66 4.58 L16.07 5.58 L18.02 4.01 L19.99 5.98 L18.42 7.93Z"/><circle cx="12" cy="12" r="3"/></svg></span>',sd=a=>`<button type="button" class="hgo hcfg${a._cfg?" on":""}${id.v?"":" new"}" data-hcfg="${a.key}" title="${__t(480)}" aria-label="${__t(480)}">${V_}</button>`,Vi={on:(()=>{try{return localStorage.getItem("rod_push")==="1"}catch{return!1}})(),busy:!1},sm=/iPhone|iPad|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,rm=()=>matchMedia("(display-mode: standalone)").matches||navigator.standalone===!0,Sr=new Set((()=>{try{return JSON.parse(localStorage.getItem("rod_aloff")||"[]")}catch{return[]}})()),sc=()=>{let a=new Set;return[...Xe.st,...$e.st].forEach(c=>{let f=Vt.get(c);f!=null&&T[f].fams.forEach(p=>a.add(p))}),[...a].sort(B)},So=()=>({stations:[...Xe.st,...$e.st],lines:sc().filter(a=>!Sr.has(a))}),H_=a=>Uint8Array.from(atob(a.replace(/-/g,"+").replace(/_/g,"/")+"===".slice((a.length+3)%4)),c=>c.charCodeAt(0));async function am(){return!("serviceWorker"in navigator)||!("PushManager"in window)||location.protocol!=="https:"?null:await navigator.serviceWorker.getRegistration()||navigator.serviceWorker.register("./sw.js")}async function om(a){let f=await(await fetch(ce()+"/push/subscribe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sub:a.toJSON(),...So()})})).json();if(!f.ok)throw new Error(f.err||"error")}function rd(){let a=An(Xe),c=An($e);if(a==null||c==null)return a!=null?Xe:c!=null?$e:null;if(Ct.w&&Date.now()-Ct.fix<3*36e5){let f=p=>Math.hypot(T[p].w[0]-Ct.w[0],T[p].w[1]-Ct.w[1]);return f(a)<=f(c)?Xe:$e}return new Date().getHours()<13?Xe:$e}function lm(a){let c=rd(),f=c===Xe?$e:Xe,p=c&&An(c),v=f&&An(f);if(p==null||v==null)return!0;let S=(a.es||"")+" "+(a.txt||""),C=t.days.indexOf(ee().ymd),I=ee(),L=[...new Set([...S.matchAll(/\btr(?:en|ain)s?\s*(?:n[º°o.]\s*)?(\d{4,6})\b/gi)].map(z=>z[1]))];if(L.length)return L.some(z=>{let x=Is(z);if(!x)return!1;let _=x.pat.stops,A=_.indexOf(p),O=_.indexOf(v);if(A<0||O<0||A>O)return!1;let J=x.t0+x.pat.t[2*A+1];return J>I.min-60&&J<I.min+150});let U=S.match(/(?:destino|destinaci[óo]|direcci[óo]n?|sentido|sentit|cap a|hacia)\s+(?:a\s+|de\s+)?([^.,;:()]{3,40})/i);if(U){let z=U[1].toLowerCase(),x=T.findIndex(_=>_.n&&z.startsWith(_.n.toLowerCase()));if(x>=0){let _=(st[C]||[]).find(A=>{let O=A.pat.stops;return O[O.length-1]===x&&O.includes(p)&&O.includes(v)});if(_){let A=_.pat.stops;return A.indexOf(p)<A.indexOf(v)}}}return!0}let Zn={on:(()=>{try{return localStorage.getItem("rod_ln")==="1"}catch{return!1}})(),seen:null};function G_(){let{lines:a,stations:c}=So(),f=new Set(a),p=new Set(c.map(C=>Vt.get(C))),v=H.alerts.filter(C=>([...C.fams].some(I=>f.has(I))||[...C.stops||[]].some(I=>p.has(I)))&&lm(C));if(!Zn.seen){try{Zn.seen=new Set(JSON.parse(localStorage.getItem("rod_lnseen")||"[]"))}catch{Zn.seen=new Set}if(!Zn.seen.size){v.forEach(C=>Zn.seen.add(C.id+"|"+C.txt.length)),cm();return}}let S=v.filter(C=>!Zn.seen.has(C.id+"|"+C.txt.length));if(S.length&&(S.forEach(C=>Zn.seen.add(C.id+"|"+C.txt.length)),cm(),!(!Zn.on||!("Notification"in window)||Notification.permission!=="granted")))for(let C of S.slice(0,3)){let I=(C.src==="Adif"?__t(338):"Rodalies")+(C.fams.size?" \xB7 "+[...C.fams].sort(B).slice(0,4).join(" "):""),L={body:C.txt.slice(0,240),icon:"icons/icon-192.png",tag:"rod-"+C.id};(navigator.serviceWorker&&navigator.serviceWorker.getRegistration?navigator.serviceWorker.getRegistration():Promise.resolve(null)).then(U=>U?U.showNotification(I,L):new Notification(I,L)).catch(()=>{try{new Notification(I,L)}catch{}})}}function cm(){try{localStorage.setItem("rod_lnseen",JSON.stringify([...Zn.seen].slice(-400)))}catch{}}async function W_(){if(Zn.on)Zn.on=!1,Ve(__t(481));else{if(!("Notification"in window)){Ve(sm&&!rm()?__t(482):__t(483));return}if(await Notification.requestPermission()!=="granted"){Ve(__t(484));return}Zn.on=!0,Ve(__t(485)+So().lines.join(", ")+__t(486))}try{localStorage.setItem("rod_ln",Zn.on?"1":"")}catch{}_e(!0)}async function X_(){if(!H.repOk||document.documentElement.classList.contains("cap"))return W_();if(!Vi.busy){Vi.busy=!0;try{let a=await am();if(!a){Ve(sm&&!rm()?__t(487):__t(488));return}if(await navigator.serviceWorker.ready,Vi.on){let c=await a.pushManager.getSubscription();c&&(fetch(ce()+"/push/unsubscribe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({endpoint:c.endpoint})}).catch(()=>{}),await c.unsubscribe().catch(()=>{})),Vi.on=!1,Ve(__t(481))}else{if(!H.url){Ve(__t(489));return}if(await Notification.requestPermission()!=="granted"){Ve(__t(484));return}let f=(await Pt(ce(),"/push/key")).key,p=await a.pushManager.getSubscription()||await a.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:H_(f)});await om(p),Vi.on=!0,Ve(__t(490)+So().lines.join(", "))}try{localStorage.setItem("rod_push",Vi.on?"1":"")}catch{}}catch(a){Ve(__t(491)+(a.message||a))}finally{Vi.busy=!1,_e(!0)}}}async function um(){if(Vi.on)try{let a=await am(),c=a&&await a.pushManager.getSubscription();c&&await om(c)}catch{}}let ad=!1,hm="";function od(){let a=Et?"t"+(Et.tid||Et.vtid):ae>=0?"s"+ae:Ce?"a":Ot?"n":"";a!==hm&&(ad=!1,hm=a);let c=innerWidth<=640&&!!a&&!ad&&!document.documentElement.classList.contains("tabmode"),f=y("#inf");f.classList.contains("compact")!==c&&(f.classList.toggle("compact",c),requestAnimationFrame(()=>{if(d.style.display!=="none"){let p=f.getBoundingClientRect().bottom;d.style.top=Math.round(p+8)+"px",d.style.maxHeight=Math.max(140,y("#rc").getBoundingClientRect().top-p-16)+"px"}}))}let dm=new Set,ld=(()=>{let a=yt(new Date).ymd;try{let c=JSON.parse(localStorage.getItem("rod_pn")||"{}");return c.d===a?c:{d:a}}catch{return{d:a}}})();function fm(a,c,f){if(!(!(Zn.on||Vi.on)||!("Notification"in window)||Notification.permission!=="granted")){if(!document.hidden){Ve(a+" \xB7 "+c);return}(navigator.serviceWorker&&navigator.serviceWorker.getRegistration?navigator.serviceWorker.getRegistration():Promise.resolve(null)).then(p=>p?p.showNotification(a,{body:c,tag:f,icon:"icons/andana-192.png"}):new Notification(a,{body:c})).catch(()=>{try{new Notification(a,{body:c})}catch{}})}}function pm(a,c){let f=a.x,p=ee();if(!p.live||f.gone||f.est<p.min-1)return;let v=f.num+"|"+Math.round(f.sm),S=ld[v]||{},C=`${__t(492)} ${rt(f.sm)}`,I=`${f.fam} \u2192 ${f.dest}`,L="",U="";f.cancel?S.c||(S.c=1,L=`\u26A0\uFE0F ${C} ${__t(190)}`,U=`${I}. ${__t(493)}`):a.ghost&&!S.g?(S.g=1,L=`\u26A0\uFE0F ${C} ${__t(494)}`,U=`${I}: ${__t(495)}`):f.dl>=5&&f.dl>=(S.dl||0)+5?(S.dl=Math.round(f.dl),L=`\u23F3 ${C} ${__t(496)} +${S.dl} min`,U=`${I}: ${__t(497)} ${c} ${__t(498)} ${rt(f.est)}.`):f.plat&&S.p&&S.p!==String(f.plat)&&(L=`${__t(499)}: ${C}`,U=`${I}: ${__t(500)} ${f.plat} ${__t(501)} ${S.p}).`),f.plat&&(S.p=String(f.plat)),ld[v]=S;try{localStorage.setItem("rod_pn",JSON.stringify(ld))}catch{}L&&fm(L,U,"pin-"+f.num)}let ta={open:!1,seen:new Set((()=>{try{return JSON.parse(localStorage.getItem("rod_seen")||"[]")}catch{return[]}})())};document.addEventListener("click",a=>{let c=a.target.closest&&a.target.closest("[data-nowx]");if(!c||a.target.closest("a"))return;let f=c.dataset.nowx?c.dataset.nowx.split("|"):[];if(f.length){if(c.classList.contains("col"))ta.open=!0;else{ta.open=!1,f.forEach(p=>ta.seen.add(p));try{localStorage.setItem("rod_seen",JSON.stringify([...ta.seen].slice(-200)))}catch{}}_e(!0)}});function q_(a){let c=a.lines;if(!c.length&&Ct.st&&Ct.st.length){let x=new Set;Ct.st.forEach(_=>{let A=Vt.get(_);A!=null&&T[A].fams.forEach(O=>x.add(O))}),c=[...x].sort(B)}let f=new Set(c),p=H.alerts.filter(x=>!f.size||[...x.fams].some(_=>f.has(_))),v=`<a class="hwa" href="https://www.whatsapp.com/channel/0029Vav4hGTId7nPenKMuo2C" target="_blank" rel="noopener" title="${__t(173)}" aria-label="WhatsApp"><svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path fill="#25d366" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2z"/><path fill="#fff" d="M8.6 7.2c.2-.4.4-.4.7-.4h.5c.2 0 .4 0 .6.5l.8 1.9c.1.2.1.4 0 .6l-.5.7c-.1.2-.2.3 0 .6.5.8 1.1 1.5 1.9 2 .3.2.4.1.6 0l.7-.8c.2-.2.4-.2.6-.1l1.8.9c.3.1.4.2.4.4 0 .5-.2 1.2-.8 1.6-.6.4-1.5.6-2.9 0-1.6-.7-3-2-3.9-3.4-.8-1.2-1.1-2.4-.5-3.5z"/></svg></a>`,S=p.reduce((x,_)=>Math.max(x,yr(_)),0),C=S===3?"\u26D4 ":S===2?"\u26A0\uFE0F ":"\u2139\uFE0F ",I=`<div class="hnowh"><span class="hnowl"><b>${p.length?C+p.length+(p.length===1?__t(340):__t(341)):__t(502)}</b>${c.length?`<span class="hnowc">${c.map(Mn).join("")}</span>`:""}</span>${v}</div>`,L=p.filter(x=>!ta.seen.has(x.id)),U=p.length&&(ta.open||L.length>0),z=p.reduce((x,_)=>Math.max(x,yr(_)),0);return`<div class="hnow${z===3?" bad":z===2?" warn":z===1?" info":""}${p.length&&!U?" col":""}" data-nowx="${m(p.map(x=>x.id).join("|"))}">${I}${_m(a,!0)}${U?p.slice().sort((x,_)=>yr(_)-yr(x)).map(x=>`<div class="igc sv${yr(x)}"><p class="igh">${yr(x)===3?"\u26D4":yr(x)===2?"\u26A0\uFE0F":"\u2139\uFE0F"} ${go(x)} ${x.fams.size>6?`<span class="igall">${__t(207)}</span>`:[...x.fams].sort(B).map(Mn).join(" ")} <small>${_o(x)}</small></p><p class="igt">${m(x.txt)}</p></div>`).join("").replace(/^/,'<div class="igl">')+`</div><small class="hnowt">${__t(503)}</small>`:""}</div>`}let ln=new Map((()=>{try{let a=yt(new Date).ymd;return JSON.parse(localStorage.getItem("rod_pin")||"[]").filter(c=>c[2]===a).map(c=>[c[0],c[1]])}catch{return[]}})());function rc(){if(!document.documentElement.classList.contains("tabmode"))return;let a=[...document.querySelectorAll("#home .hhead .htit small:not(.nofit)")],c=(p,v)=>{p.style.fontSize=v===1?"":(p._f0*v).toFixed(1)+"px",p.querySelectorAll("b").forEach(S=>S.style.fontSize=v===1?"":(p._b0*v).toFixed(1)+"px")},f=1;for(let p of a){if(p.style.whiteSpace="",c(p,1),!p.clientWidth)continue;p._f0=parseFloat(getComputedStyle(p).fontSize);let v=p.querySelector("b");for(p._b0=v?parseFloat(getComputedStyle(v).fontSize):0;p.scrollWidth>p.clientWidth+1&&f>.86;)f-=.02,c(p,f)}if(f<1)for(let p of a)p._f0&&c(p,f);for(let p of a)p.scrollWidth>p.clientWidth+1&&(p.style.whiteSpace="normal")}addEventListener("resize",()=>{try{rc()}catch{}});let mm=(a,c)=>{let f=a==="work"?$e:a==="near"?Ct:Xe,p=f&&An(f);return p==null?null:Jn(p).find(v=>String(v.num)===String(c))||null};function ri(a,c){if(c&&!ln.size&&!gt.tid)try{let f=+(localStorage.getItem("rod_lptip")||0);f<2&&(localStorage.setItem("rod_lptip",f+1),setTimeout(()=>Ve(__t(504)),600))}catch{}if(c){for(let f of[...ln.keys()])f!==a&&ln.delete(f);ln.set(a,c)}else ln.delete(a);try{let f=yt(new Date).ymd;localStorage.setItem("rod_pin",JSON.stringify([...ln].map(([p,v])=>[p,v,f])))}catch{}}let gm=a=>{let c=a&&a.ts?Date.now()/1e3-a.ts:H.okVP?(Date.now()-H.okVP)/1e3:-1;return c>=0?" \xB7 "+ys(Rh(Math.round(c))):""};function ac(a){let c=Bt.find(S=>S.tr&&String(S.tr.num)===String(a));if(!c){let S=Is(a),C=ee(),I=t.days.indexOf(C.ymd);if(!S)return"";let L=S.day===I-1?1440:0,U=S.t0+S.pat.t[1]-L;return U>C.min?__t(505)+T[S.pat.stops[0]].n+" ("+rt(U)+")":""}let f=c.tr,p=S=>T[f.pat.stops[S]].n;if(c.real){let S=c.v;return S.pre?__t(506):S.atStop>=0&&S.before?__t(507)+p(S.atStop):S.atStop>=0&&(S.st==="STOPPED_AT"||c.stop==="st")?F()?__t(508)+p(S.atStop):__t(509)+p(S.atStop)+gm(S):!F()&&S.next>0?__t(510)+p(S.next-1)+__t(511)+p(S.next)+gm(S):S.atStop>=0&&S.next>S.atStop?__t(512)+p(S.atStop)+__t(513)+p(S.next):S.atStop>=0?__t(514)+p(S.atStop):c.stop==="via"&&S.next>0?"\u23F8 "+__t(515)+p(S.next-1)+__t(511)+p(S.next):S.next>0?__t(229)+p(S.next-1)+__t(511)+p(S.next):S.next===0?__t(374)+p(0):""}let v=c.p&&c.p.next;return v>0?__t(516)+p(v-1)+__t(511)+p(v):""}let bo={k:"",v:null};function Y_(a){let c=ee(),f=t.days.indexOf(c.ymd);if(f<0||!a.length)return null;let p=rd(),v=(p&&An(p))??An(Xe)??An($e),S=c.ymd+a.join()+v;if(bo.k===S)return bo.v;bo.k=S;let C=new Set(a),I=v!=null?x=>st[x].filter(_=>{let A=_.pat.stops.indexOf(v);return A>=0&&A<_.pat.stops.length-1}).length:x=>st[x].filter(_=>C.has(_.fam)).length,L=x=>{let _=new Date(+x.slice(0,4),+x.slice(4,6)-1,+x.slice(6)).getDay();return _===0?0:_===6?6:1},U=I(f),z=Math.max(0,...t.days.map((x,_)=>_!==f&&L(x)===L(c.ymd)?I(_):0));return bo.v=z>=20&&U<z*.8?{n:U,ref:z,pct:Math.round(U/z*100),st:v!=null?T[v].n:""}:null,bo.v}function _m(a,c){let f=a.lines||[],p=Y_(f);if(!p)return"";let v=H.alerts.some(S=>[...S.fams].some(C=>f.includes(C))&&/huelga|vaga\b|servicios? m[ií]nimos|serveis m[ií]nims/i.test((S.es||"")+" "+S.txt));return c?`<div class="hnowred">\u{1F5D3}\uFE0F <b>${v?__t(517):__t(518)}</b>: ${p.st?`${__t(519)} ${m(p.st)} ${p.n} ${__t(520)} ${p.ref} ${__t(521)}`:`${__t(522)} ${p.n} ${__t(520)} ${p.ref} ${__t(521)}`} (${p.pct} %). ${v?__t(523):__t(524)}</div>`:`<div class="hred">\u{1F5D3}\uFE0F <b>${v?__t(525):__t(526)}</b> \xB7 ${__t(527)}: ${p.st?`${__t(528)} ${m(p.st)} ${__t(529)} ${p.n} ${__t(144)} ${p.ref} ${__t(71)}`:`${p.n} ${__t(144)} ${p.ref} ${__t(530)} ${f.join(", ")}`} (${p.pct} % ${__t(531)}).</div>`}function J_(a){let c=vo(a.lines||[]);if(!c.length)return"";let f=[Xe,$e].some(p=>{let v=An(p),S=v!=null&&Ft.get(T[v].id);return S&&S.d&&Array.isArray(S.d.trains)&&!S.d.trains.length});return`<div class="hnopos">\u{1F4E1} <b>${__t(532)} ${c.join(", ")}</b> ${__t(533)}${f?" \xB7 "+__t(534):""}: ${__t(535)}</div>`}function Z_(a){if(!Ct.w||gt.lock||gt.manual&&Date.now()<gt.manual)return[];let c=gt.fixes[gt.fixes.length-1];if(!c||Date.now()-c.t>6e4||c.acc!=null&&c.acc>150)return[];let f=Ct.k||1,p=C=>Math.hypot(C.p.w[0]-Ct.w[0],C.p.w[1]-Ct.w[1])*f,v=Bt.find(C=>C.tr===a&&C.p&&C.p.w);if(!v||p(v)<1.5)return[];let S=v.p.next>=0?a.pat.stops[v.p.next]:null;return Bt.filter(C=>C.tr&&C.tr!==a&&C.p&&C.p.w&&p(C)<1&&(S==null||C.p.next>=0&&C.tr.pat.stops.indexOf(S)>=C.p.next)).sort((C,I)=>Math.hypot(C.p.w[0]-Ct.w[0],C.p.w[1]-Ct.w[1])-Math.hypot(I.p.w[0]-Ct.w[0],I.p.w[1]-Ct.w[1])).slice(0,2).map(C=>C.tr)}function j_(a){if(gt.tid)return"";let c=null,f=null;if(ln.size||(fe&&fe.num!=null&&(c=String(fe.num)),!c))return"";let p=Is(c);if(!p)return"";let v=p.pat.stops,S=f?f==="work"?$e:f==="near"?Ct:Xe:null,C=S?An(S):null,I=C!=null?Jn(C).find(Q=>String(Q.num)===c):null,L=S===Xe?$e:S===$e?Xe:null,U=L?An(L):null,z=C!=null?v.indexOf(C):-1,x=ve&&ve.num===c?v.indexOf(Vt.get(ve.sid)):-1;x<=z&&U!=null&&(x=v.indexOf(U,z+1));let _=I&&z>=0&&x>z?I.est+(p.pat.t[2*x]-p.pat.t[2*z+1]):null,A=I?Math.round(I.est-a.min):null,O=ac(c),J=I?`${I.gone?__t(536):__t(537)} ${m(T[C].n)} \xB7 <b>${rt(I.est)}</b>${I.gone?"":` (${A<=0?__t(318):A+" min"})`}${I.plat?__t(182)+m(I.plat):""}${_!=null?` \u2192 ${m(T[v[x]].n)} <b>${rt(_)}</b>`:""}`:m(O||"");return`<div class="hplace onbc chosen"><div class="hhead"><span class="hico">\u{1F4CC}</span><span class="htit"><b>${Mn(p.fam)} ${__t(360)}${m(c)} <span class="hlk">${__t(538)}</span></b><small class="nofit">${J}</small>${I&&O?`<small class="nofit">\u{1F4CD} ${m(O)}</small>`:""}<span class="chbtn"><button type="button" class="hgo hboard" data-hboard="${m(c)}">\u{1F686} ${__t(450)}</button><button type="button" class="chmap" data-chmap="${m(c)}">\u{1F5FA}\uFE0F ${__t(539)}</button></span></span><button type="button" class="hpn onbx" data-unchoose="${m(c)}" aria-label="${__t(254)}">\u2715</button></div></div>`}function K_(a){let c;try{if(c=Q_(a),c!=null)return c}catch(v){console.error(v)}let f=gt.tid?Is(gt.tid):null,p=f?`${__t(540)} ${m(T[f.pat.stops[0]].n)} \xB7 ${rt(f.t0)}`:"";return gt.tid?`<div class="hplace onbc"><div class="hhead"><span class="hico">\u{1F686}</span><span class="htit"><b>${__t(360)}${m(gt.tid)}${gt.lock?` <span class="hlk">${__t(541)}</span>`:""}</b>${p?`<small class="nofit">${p}</small>`:""}</span><button type="button" class="hpn onbx" data-onbx aria-label="Quitar">\u2715</button></div></div>`:""}let Mo={s:null,at:0},jn=(()=>{try{return JSON.parse(localStorage.getItem("rod_trips")||"[]")}catch{return[]}})();function ea(a,c,f,p,v){let S=a.ymd+"|"+c.num,C=c.pat.stops,I=jn.find(L=>L.k===S);if(!(I&&I.done)){if(!I){let L=gt.from!=null?C.indexOf(gt.from):-1;if(Mo.s!=null&&Date.now()-Mo.at<45*6e4){let U=C.indexOf(Mo.s);U>=0&&(L<0||U<L)&&(L=U)}{let U=[...Xe.st,...$e.st],z=L>=0?L:(gt.fixes.length,-1);if(z>=0&&!U.includes(T[C[z]].id)){for(let x=z-1;x>=Math.max(0,z-4);x--)if(U.includes(T[C[x]].id)){L=x;break}}}if(L<0&&gt.fixes.length){let U=gt.fixes[0],z=.6;C.forEach((x,_)=>{let A=Math.hypot(T[x].w[0]-U.w[0],T[x].w[1]-U.w[1])*U.k;A<z&&(z=A,L=_)})}I={k:S,d:a.ymd,num:String(c.num),fam:c.fam,a:L>=0?T[C[L]].id:"",ad:L>=0?Math.round(c.t0+c.pat.t[2*L+1]-p):null,dl:null,mx:0,t0:Date.now()},jn.push(I)}if(ve&&ve.num===String(c.num)&&Vt.get(ve.sid)===C[f]&&(I.b=T[C[f]].id,I.bd=Math.round(c.t0+c.pat.t[2*f]-p)),v!=null&&(I.dl=Math.round(v),I.mx=Math.max(I.mx||0,I.dl)),I.t1=Date.now(),!ea.s||Date.now()-ea.s>3e4||I._n!==I.dl){ea.s=Date.now(),I._n=I.dl;let L=Date.now()-120*864e5;try{localStorage.setItem("rod_trips",JSON.stringify(jn.filter(U=>(U.t1||U.t0)>L),(U,z)=>U==="_n"?void 0:z))}catch{}}}}let xm=(a,c)=>{let f=Date.now()-c*864e5;return jn.filter(p=>p.fam===a&&(p.t1||p.t0)>f&&(p.t1||0)-p.t0>=18e4&&!(p.a&&p.a===p.b))};function Q_(a){if(!gt.tid)return"";[...ln].forEach(([Q,G])=>{String(G)!==String(gt.tid)&&ri(Q,null)});let c=Bt.find(Q=>Q.tr&&String(Q.tr.num)===gt.tid)||dt(a).out.find(Q=>Q.tr&&String(Q.tr.num)===gt.tid);if(!c)return null;let f=c.tr,p=f.pat.stops,v=c.real&&c.v&&c.v.next>=0?c.v.next:c.p&&c.p.next>=0?c.p.next:null;if(v==null){let Q=dt(a).out.find(G=>G.tr&&String(G.tr.num)===gt.tid);v=Q&&Q.p&&Q.p.next>=0?Q.p.next:1}let S=kt(f),C=typeof S=="number"?Math.max(0,S/60):0,I=t.days.indexOf(a.ymd),L=f.day===I-1?1440:0,U=gt.fixes[gt.fixes.length-1],z=U&&Date.now()-U.t<9e4&&(U.acc==null||U.acc<150)?(()=>{let Q=-1,G=.35;return p.forEach((nt,W)=>{let zt=Math.hypot(T[nt].w[0]-U.w[0],T[nt].w[1]-U.w[1])*U.k;zt<G&&(G=zt,Q=W)}),Q})():-1,x=ve&&ve.num===gt.tid?p.indexOf(Vt.get(ve.sid)):-1;if(x>0&&x<v&&z!==x&&!(z>=0&&z<x))return setTimeout(()=>{if(!gt.tid)return;let Q=gt.tid;{let G=jn.find(nt=>nt.num===Q&&nt.d===ee().ymd);if(G){G.done=!0,ea.s=0;try{localStorage.setItem("rod_trips",JSON.stringify(jn,(nt,W)=>nt==="_n"?void 0:W))}catch{}}}gt.no.set(Q,Date.now()+90*6e4),gt.tid="",gt.lock=!1,gt.manual=0,gt.quiet=Date.now()+10*6e4,fe&&String(fe.num)===Q&&(fe=null),[...ln].forEach(([G,nt])=>{String(nt)===Q&&ri(G,null)}),Rn.num===Q&&(Rn.num=""),_e(!0)},0),"";x<v&&(x=p.length-1);let _=Kr(f,c.real?c.v:null,x,f.t0+f.pat.t[2*x]+C-L),A=_-a.min,O=c.real&&c.v.atStop>=0?c.v.atStop:-1;ea(a,f,x,L,typeof S=="number"?C:null);let J=z>=0?`${__t(542)} ${T[p[z]].n}`:ac(f.num)||__t(374)+T[p[v]].n;return`<div class="hplace onbc"><button type="button" class="hhead" data-onbgo><span class="hico">\u{1F686}</span><span class="htit"><b>${Mn(f.fam)} ${__t(360)}${m(f.num)}${gt.lock?` <span class="hlk">${__t(541)}</span>`:""}</b><small class="nofit cok">${m(J)} \xB7 <span class="nw">${__t(543)} ${m(T[p[x]].n)}</span> <span class="nw">${A>=1?__t(104)+vr(A)+" \xB7 ":""}<b>${rt(_)}</b>${C>=1?` <em class="dl ${$i(C)}">+${Math.round(C)}</em>`:""}</span></small>${(Q=>Q.length?`<small class="onbrep">${Q.slice(0,4).map(G=>`<span title="${m(fo(G.kind))}">${ho[G.kind]}${G.up>1?`<b>${G.up>99?"99+":G.up}</b>`:""}</span>`).join("")}</small>`:"")(ec(f.num,""))}</span><span class="hchev">${gt.open?"\u25B4":"\u25BE"}</span></button><button type="button" class="hpn onbx" data-onbx aria-label="${__t(544)}" title="${__t(544)}">\u2715</button>${(Q=>Q.length&&!(gt.manual&&Date.now()<gt.manual)?`<div class="onbch">${Q.map(G=>`<button type="button" class="onbalt" data-onbpick="${m(G.num)}">${__t(545)} ${m(G.num)}?<small>${__t(546)} ${m(T[G.pat.stops[G.pat.stops.length-1]].n.replace(/^Barcelona[ -]+(?=\S)/,""))}</small></button>`).join("")}</div>`:"")(Z_(f))}${gt.open?(()=>{let Q=Math.max(v,0),G=W=>{let zt=Kr(f,c.real?c.v:null,W,f.t0+f.pat.t[2*W]+C-L);return`<li class="${W===x?"dst":""}"><b>${rt(zt)}</b><span>${m(T[p[W]].n)}</span>${W===x?`<i>${__t(547)}</i>`:""}</li>`},nt=[];for(let W=Q;W<=Math.min(x,Q+2);W++)nt.push(G(W));return x>Q+3&&nt.push(`<li class="gap"><b>\u22EE</b><span>${x-Q-3} ${x-Q-3===1?__t(548):__t(549)}</span></li>`),x>Q+2&&nt.push(G(x)),`<div class="onbmore"><small class="onbh">${__t(550)}</small><ol class="onbst">${nt.join("")}</ol>${po(f.num,"",f.fam)}<div class="rtb"><button type="button" data-onbmap>\u{1F5FA}\uFE0F ${__t(539)}</button></div></div>`})():""}</div>`}let oc={until:0};function vm(){let a=gt.tid;if(a){gt.no.set(a,Date.now()+20*6e4),gt.tid="",gt.manual=0,gt.lock=!1,gt.quiet=Date.now()+10*6e4,Rn.num===a&&(Rn.num=""),[...ln].forEach(([c,f])=>{String(f)===a&&ri(c,null)}),ve&&ve.num===a&&(ve=null,Cs(),window.__schedOff&&window.__schedOff(7701)),fe&&String(fe.num)===a&&(fe=null),Et&&String(Et.num)===a&&(Et=null,He.sk=""),d._h="";try{Re(),o()}catch{}_e(!0)}}function ym(a){if(a.hasAttribute("data-onbx")){vm();return}let c=gt.tid,f=gt.lock;Qr(a.dataset.onbpick,"pick"),Ve(`${__t(551)} ${gt.tid}`,c&&c!==gt.tid?{label:__t(282),fn:()=>{Qr(c,f?"lock":"pick"),Ve(`${__t(552)} ${c}`),_e(!0)}}:void 0),_e(!0)}function _e(a){let c=y("#home");if(!c)return;let f=performance.now();if(!a&&f-Kp<4e3||!a&&oc.until>Date.now())return;Kp=f;let p=ee(),v=[],S=So(),C=_=>{let A=An(_);return A==null||!Ct.w?1:Math.hypot(T[A].w[0]-Ct.w[0],T[A].w[1]-Ct.w[1])},I=[Ct,...[Xe,$e].sort((_,A)=>C(_)-C(A))],L=(document.documentElement.classList.contains("tabmode")?q_(S):_m(S))+J_(S)+K_(p)+j_(p)+I.map(_=>z_(_,p,v)).join("")+(Ps.some(_=>_.open)&&S.lines.length,"");c.className=(Ps.some(_=>_.open)?"open":"")+(gt.tid?" onb":"");let U=y("#bell");U||(U=document.createElement("button"),U.type="button",U.id="bell",U.onclick=X_,y("#inf .more").prepend(U));{let _=H.repOk&&!document.documentElement.classList.contains("cap")?Vi.on:Zn.on;U.hidden=!S.lines.length,U.className=_?"on":"",U.textContent=He.on?_?__t(560):__t(561):(_?__t(562):__t(563))+S.lines.join(", "),U.title=(_?__t(564):__t(565))+__t(67)+S.lines.join(", ")+(H.repOk?"":__t(566))}if(c._h===L)return;c._h=L,c.innerHTML=L,rc(),c._onbDel||(c._onbDel=1,c.addEventListener("pointerdown",()=>{oc.until=Date.now()+1500},!0),c.addEventListener("pointerup",()=>{oc.until=Date.now()+400},!0),c.addEventListener("click",_=>{if(window.__lpAt&&Date.now()-window.__lpAt<1e3){_.stopPropagation(),_.preventDefault();return}let A=_.target.closest&&_.target.closest("[data-onbx],[data-onbpick]");A&&(_.stopPropagation(),oc.until=0,ym(A))},!0));{let _=c.querySelector("[data-onbgo]");_&&(_.onclick=A=>{if(A.target.closest("[data-onbx]")){vm();return}let O=A.target.closest("[data-onbpick]");if(O){ym(O);return}gt.open=!gt.open,_e(!0)})}{let _=c.querySelector("[data-onbmap]");_&&(_.onclick=A=>{A.stopPropagation();let O=Bt.find(J=>J.tr&&String(J.tr.num)===gt.tid);O&&(Ot=Ce=Ut=!1,ae=-1,Et=O.tr,fe=O.tr,d._h="",Oi("map"),Re())})}{let _=[...c.children].find(A=>A.classList.contains("hplace")&&!A.querySelector(".hnew"));_&&_.classList.add("lead")}let z=_=>_==="work"?$e:_==="near"?Ct:Xe;c.querySelectorAll("[data-hloc]").forEach(_=>_.onclick=()=>{Ct.err="",jh(!0)}),c.querySelectorAll("[data-ht]").forEach(_=>{let A=0,O=0,J=0,Q=()=>{clearTimeout(A),A=0,_.closest(".hplace")?.classList.remove("lpress")};_.addEventListener("pointerdown",G=>{let nt=_.dataset.ht,W=ln.get(nt);!W||String(gt.tid)===String(W)||(O=G.clientX,J=G.clientY,_.closest(".hplace")?.classList.add("lpress"),A=setTimeout(()=>{A=0,_.closest(".hplace")?.classList.remove("lpress"),_._lpDone=Date.now();let zt=mm(nt,W);if(!Kh(zt,ee())){Qh(zt?rt(zt.est):"");return}let oe=Qr(W,"lock",nt);try{navigator.vibrate&&navigator.vibrate(35)}catch{}Ve(`${__t(552)} ${oe&&oe.tr.fam||""} ${W} \xB7 ${__t(541)}`),_e(!0)},700))}),_.addEventListener("pointermove",G=>{A&&Math.hypot(G.clientX-O,G.clientY-J)>10&&Q()}),["pointerup","pointercancel","pointerleave"].forEach(G=>_.addEventListener(G,()=>{A&&Q()})),_.addEventListener("contextmenu",G=>G.preventDefault())}),c.querySelectorAll("[data-ht]").forEach(_=>_.onclick=()=>{if(_._lpDone&&Date.now()-_._lpDone<1500)return;if(y("#inf").classList.contains("compact")){ad=!0,od();return}let A=z(_.dataset.ht);A.open=!A.open,si(A),_e(!0),(Et||ae>=0||Ce||Ot)&&(d._h="",Re())}),c.querySelectorAll("[data-hxf]").forEach(_=>_.onclick=A=>{A.stopPropagation();let[O,J]=_.dataset.hxf.split(":"),Q=z(O);Q.xfer=J||null,si(Q),_e(!0)});let x=_=>{clearTimeout(_._cfgT),_._cfgT=setTimeout(()=>{_._cfg=!1,_e(!0)},1e4)};c.querySelectorAll("[data-hs]").forEach(_=>_.onclick=()=>{let[A,O]=_.dataset.hs.split(":"),J=z(A);x(J),J.i!==+O&&(J.i=+O,si(J),_e(!0))}),c.querySelectorAll("[data-hcfg]").forEach(_=>_.onclick=A=>{A.stopPropagation();let O=z(_.dataset.hcfg);if(O._cfg=!O._cfg,clearTimeout(O._cfgT),O._cfg&&x(O),!id.v){id.v=!0;try{localStorage.setItem("rod_cfgseen","1")}catch{}}_e(!0)}),c.querySelectorAll("[data-hcfgmap]").forEach(_=>_.onclick=A=>{A.stopPropagation();let O=+_.dataset.hcfgmap;Oi("map"),window.__rodPickStation(O)}),c.querySelectorAll("[data-hwt]").forEach(_=>_.onclick=A=>{A.stopPropagation();let O=z(_.dataset.hwt);O._wedit=!O._wedit,clearTimeout(O._wT),O._wedit&&(O._wT=setTimeout(()=>{O._wedit=!1,_e(!0)},6e3)),_e(!0)}),c.querySelectorAll("[data-hw]").forEach(_=>_.addEventListener("click",()=>{let A=z(_.dataset.hw.split(":")[0]);A._cfg&&x(A)},!0)),c.querySelectorAll("[data-hw]").forEach(_=>_.onclick=()=>{let[A,O]=_.dataset.hw.split(":"),J=z(A);J.walk=M(J.walk+ +O,0,60),si(J),_e(!0)}),c.querySelectorAll("[data-hwset]").forEach(_=>_.onclick=A=>{A.stopPropagation();let[O,J]=_.dataset.hwset.split(":"),Q=z(O);Q.walk=M(+J,0,60),si(Q),Q._cfg&&(clearTimeout(Q._cfgT),Q._cfgT=setTimeout(()=>{Q._cfg=!1,_e(!0)},1e4)),Ve(`${__t(567)}: ${Q.walk} min`),_e(!0)}),c.querySelectorAll("[data-hmap]").forEach(_=>_.onclick=()=>{let A=+_.dataset.hmap;Ot=Ce=Ut=!1,Et=null,ae=A,zn(),Object.assign(s,{tx:T[A].w[0],ty:T[A].w[1],dist:18,tilt:Math.max(s.tilt,.5)}),d._h="",Re(),o()}),c.querySelectorAll("[data-hset]").forEach(_=>_.onclick=()=>Sm(_.dataset.hset)),c.querySelectorAll("[data-hnear]").forEach(_=>_.onclick=()=>{let A=Vt.get(Ct.st[0]);A!=null&&cd(A,_.dataset.hnear)}),c.querySelectorAll("[data-hmore]").forEach(_=>_.onclick=()=>{let A=z(_.dataset.hmore);A.more=!A.more,_e(!0)}),c.querySelectorAll("[data-hhide]").forEach(_=>_.onclick=A=>{A.stopPropagation();let[O,J]=_.dataset.hhide.split(":"),Q=z(O);Q.hide=J,si(Q),_e(!0)}),c.querySelectorAll("[data-hshow]").forEach(_=>_.onclick=()=>{let A=z(_.dataset.hshow);A.hide="",si(A),_e(!0)}),c.querySelectorAll("[data-hgo]").forEach(_=>_.onclick=A=>{A.stopPropagation();let[O,J]=_.dataset.hgo.split(":"),Q=z(O);Q.goAt=J==="1"?Date.now():0,Q.goAt?Q.platAt=0:Q._noWay=Date.now()+15*6e4,si(Q),_e(!0)}),c.querySelectorAll("[data-unchoose]").forEach(_=>_.onclick=A=>{A.stopPropagation();let O=_.dataset.unchoose;[...ln].forEach(([J,Q])=>{String(Q)===O&&ri(J,null)}),Rn.num===O&&(Rn.num=""),fe&&String(fe.num)===O&&(fe=null),ve&&ve.num===O&&(ve=null,Cs()),Et&&String(Et.num)===O&&(Et=null,d._h="",Re()),_e(!0)}),c.querySelectorAll("[data-chmap]").forEach(_=>_.onclick=A=>{A.stopPropagation();let O=Is(_.dataset.chmap);O&&(Oi("map"),qs({num:String(O.num),tid:O.tid&&H.vp.has(O.tid)?O.tid:"",tr:O}),fe=O)}),c.querySelectorAll("[data-hboard]").forEach(_=>_.onclick=A=>{if(A.stopPropagation(),_.classList.contains("off")){Qh(_.dataset.hbwhen);return}let O=Qr(_.dataset.hboard,"lock",_.closest(".hplace")?.querySelector("[data-ht]")?.dataset.ht);Ve(`${__t(552)} ${O&&O.tr.fam||""} ${_.dataset.hboard} \xB7 ${__t(541)}`),_e(!0)}),c.querySelectorAll("[data-hplat]").forEach(_=>_.onclick=A=>{A.stopPropagation();let[O,J]=_.dataset.hplat.split(":"),Q=z(O);if(Q.platAt=J==="1"?Date.now():0,Q.platAt){Q.goAt=0;let G=An(Q);G!=null&&(Mo.s=G,Mo.at=Date.now())}si(Q),_e(!0)}),c.querySelectorAll("[data-hnotst]").forEach(_=>_.onclick=A=>{A.stopPropagation(),Ct.homeW=Ct.w;try{localStorage.setItem("rod_homew",JSON.stringify(Ct.w))}catch{}_e(!0)}),c.querySelectorAll("[data-hdel]").forEach(_=>_.onclick=()=>{$e.st=[],$e.open=!1,si($e),_e(!0),um()}),c.querySelectorAll("[data-dk]").forEach(_=>{let A=0,O=0,J=0,Q=()=>{clearTimeout(A),A=0,_.classList.remove("lpress")};_.addEventListener("pointerdown",G=>{let nt=v[+_.dataset.dk];!nt||nt.num==null||!_.matches("li.hr, .hv")||(O=G.clientX,J=G.clientY,_.classList.add("lpress"),A=setTimeout(()=>{if(A=0,_.classList.remove("lpress"),_._lpDone=Date.now(),!Kh(nt,ee())){Qh(nt.est!=null?rt(nt.est):"");return}let W=Qr(nt.num,"lock",_.closest(".hplace")?.querySelector("[data-ht]")?.dataset.ht);try{navigator.vibrate&&navigator.vibrate(35)}catch{}Ve(`${__t(552)} ${W&&W.tr.fam||nt.fam||""} ${nt.num} \xB7 ${__t(541)}`),_e(!0)},700))}),_.addEventListener("pointermove",G=>{A&&Math.hypot(G.clientX-O,G.clientY-J)>10&&Q()}),["pointerup","pointercancel","pointerleave"].forEach(G=>_.addEventListener(G,()=>{A&&Q()})),_.addEventListener("contextmenu",G=>G.preventDefault())}),c.querySelectorAll(".hv .hwhere").forEach(_=>_.onclick=A=>{A.stopPropagation();let O=_.closest("[data-dk]"),J=O&&v[+O.dataset.dk];J&&(Oi("map"),qs(J))}),c.querySelectorAll("[data-dk]").forEach(_=>_.onclick=()=>{if(_._lpDone&&Date.now()-_._lpDone<1500)return;let A=v[+_.dataset.dk];if(_.matches("li.hr, .hv")&&!A.gone&&A.num!=null){let O=_.closest(".hplace")?.querySelector("[data-ht]")?.dataset.ht;if(O){let J=ln.get(O)===String(A.num);ri(O,J?null:String(A.num)),J&&Rn.num===String(A.num)&&(Rn.num=""),J?Et&&String(Et.num)===String(A.num)&&(Et=null,fe=null,He.sk="",d._h="",Re()):qs(A,!0),_e(!0);return}}if(A.gone&&_.closest("#home")){Ve(`${__t(568)} \xB7 ${A.fam||""} ${A.num||""}`,{label:__t(539),fn:()=>{Oi("map"),qs(A)}});return}qs(A)}),c.querySelectorAll("[data-pinnext]").forEach(_=>_.onclick=A=>{if(A.target.closest("[data-unpin]"))return;let[O,J]=_.dataset.pinnext.split(":");ri(O,J);let Q=mm(O,J);Q&&qs(Q,!0),_e(!0)}),c.querySelectorAll("[data-unpin]").forEach(_=>_.onclick=A=>{A.stopPropagation(),ri(_.dataset.unpin,null),_e(!0)}),c.querySelectorAll("[data-hal]").forEach(_=>_.onclick=()=>y("#alr").click()),zp(c)}function qs(a,c){if(!a)return;let f=t.days.indexOf(ee().ymd),p=Bt.find(C=>C.real?a.tid&&C.v.tid===a.tid||a.num&&String(C.tr?C.tr.num:C.v.num)===String(a.num):a.tr&&C.tr===a.tr||a.num&&C.tr&&String(C.tr.num)===String(a.num)),v=a.tr||p&&p.tr||(st[f]||[]).find(C=>String(C.num)===String(a.num));if(Ot=Ce=Ut=!1,ae=-1,c||void 0,Et=p?p.tr||{vtid:p.v.tid}:v||null,!Et)return;c&&(He.sk="t"+(Et.num||Et.vtid)),fe=p&&p.tr?p.tr:null,fe&&innerWidth<=640&&(d.classList.add("peek"),y("#rc").classList.contains("min")||y("#rcgrab").click());let S=p?p.p.w:null;S&&Object.assign(s,{tx:S[0],ty:S[1],dist:Math.min(s.dist,22)}),zn(),d._h="",Re(),De=0,o()}let na=!1;function Sm(a){na=a||!1,b.value="",b.placeholder=a==="work"?__t(569):a==="home"?__t(570):__t(571),document.documentElement.classList.add("srch"),g.style.display="none",b.focus()}let bm=()=>document.documentElement.classList.remove("srch");{let a=y("#hfind");a&&(a.onclick=()=>Sm(""))}b.addEventListener("blur",()=>setTimeout(()=>{document.activeElement!==b&&bm(),na&&!b.value.trim()&&(na=!1,b.placeholder=__t(571))},600));function K1(){}function cd(a,c){let f=c==="work"?$e:Xe,p=T[a].id,v=T.filter(S=>S.fams.size&&S!==T[a]&&Math.hypot(S.w[0]-T[a].w[0],S.w[1]-T[a].w[1])<.6).map(S=>S.id);f.st=[p,...v].slice(0,3),f.i=0,f.open=!0,si(f),_e(!0),um()}let lc=y("#lines");lc.innerHTML=`${__t(572)}`+q.map(a=>`<button type="button" style="--c:${Z[a]}" data-f="${a}">${a}</button>`).join("");function Mm(){try{_e(!0)}catch{}{let a=y("#linebtn");a||(a=document.createElement("button"),a.type="button",a.id="linebtn",lc.after(a),a.onclick=()=>{me=[...Dt][0],Ut=Ot=Ce=!1,d._h="",Re()});let c=Dt.size===1?[...Dt][0]:"";a.hidden=!c,c&&(a.innerHTML=`${__t(573)}${m(c)}${__t(574)}`)}lc.querySelectorAll("[data-f]").forEach(a=>{a.dataset.f!=="*"&&a.classList.toggle("off",!Dt.has(a.dataset.f))})}lc.querySelectorAll("[data-f]").forEach(a=>a.onclick=()=>{let c=a.dataset.f;c==="*"?q.forEach(f=>Dt.add(f)):Dt.size===q.length?(Dt.clear(),Dt.add(c)):Dt.has(c)?(Dt.delete(c),Dt.size||q.forEach(f=>Dt.add(f))):Dt.add(c);try{localStorage.setItem("rod_lines",JSON.stringify([...Dt]))}catch{}Mm(),he(),zn(),Jh(),De=0,o()});let ud=[...document.querySelectorAll("[data-sp]")],Ui=0;function wm(a){let c=ee();a&&(Lt===a||Ui===a)?Lt?(Kt=c.min,de=c.min,Lt=0,Ui=a):(ge=performance.now(),Lt=a,Ui=0):a===0?(Lt=0,de=null,Ui=0):(Kt=c.min,ge=performance.now(),de=c.min,Lt=a,Ui=0),ud.forEach(f=>{let p=+f.dataset.sp;f.classList.toggle("on",p===(Lt||Ui)||!Lt&&!Ui&&de==null&&p===0),f.classList.toggle("pz",!!Ui&&p===Ui),f.textContent=p===0?__t(108):Ui===p?"\u25B6 \xD7"+p:Lt===p?"\u23F8 \xD7"+p:"\xD7"+p}),De=0,o()}ud.forEach(a=>a.onclick=()=>wm(+a.dataset.sp)),y("#tsl").oninput=a=>{let c=+a.target.value;Kt=c,de=c,ge=performance.now(),Lt===0&&!Ui&&ud.forEach(f=>f.classList.remove("on")),De=0,o()},setInterval(()=>{de!=null&&Lt&&Kt+(performance.now()-ge)/6e4*Lt>1560&&(Kt=240,ge=performance.now())},1e3),window.__rodSearch=a=>{let c=w(a.trim());if(!c){g.style.display="none",g._pick=null;return}let f=[],p=[];T.forEach((I,L)=>{if(!I.fams.size)return;let U=w(I.n);U.startsWith(c)||U.includes(" "+c)||U.includes("-"+c)?f.push(L):U.includes(c)&&p.push(L)});let v=f.concat(p).slice(0,7),S=N.filter(I=>w(I.name).startsWith(c)).sort((I,L)=>L.pop-I.pop).slice(0,3),C=v.map(I=>({h:`\u{1F689} ${m(T[I].n)}<em>${[...T[I].fams].sort(B).slice(0,3).map(L=>`<em class="ls" style="background:${Z[L]}">${L}</em>`).join(" ")}</em>`,go:()=>{if(bm(),na){let L=na;na=!1,b.placeholder=__t(571),cd(I,L);return}He.on&&He.cur!=="map"&&Oi("map"),Ot=!1,Ce=!1,Ut=!1,ae=I,Et=null,fe=null,zn(),Object.assign(s,{tx:T[I].w[0],ty:T[I].w[1],dist:Math.min(s.dist,20),tilt:Math.max(s.tilt,.5)}),Re(),o()}})).concat(S.map(I=>({h:`${m(I.name)}${__t(575)}`,go:()=>{Object.assign(s,{tx:I.cx,ty:I.cy,dist:M(I.size*3+14,14,60)}),o()}})));g.innerHTML=C.map((I,L)=>`<li data-i="${L}">${I.h}</li>`).join("")||__t(576),g.style.display="block",g._pick=I=>{C[I]&&(C[I].go(),g.style.display="none",b.value="",b.blur())},g.querySelectorAll("li[data-i]").forEach(I=>I.onclick=()=>g._pick(+I.dataset.i))},Mm(),zn();try{let a=new URLSearchParams(location.search).get("st");if(a){let c=w(a),f=-1,p=0;T.forEach((v,S)=>{if(!v.fams.size)return;let C=w(v.n),I=C===c?3:C.startsWith(c)||c.startsWith(C)?2:C.includes(c)||c.includes(C)?1:0;I>p&&(p=I,f=S)}),f>=0&&setTimeout(()=>{ae=f,zn(),Object.assign(s,{tx:T[f].w[0],ty:T[f].w[1],dist:18,tilt:.5}),Re(),o()},300)}}catch{}let hd={v:!1};document.addEventListener("click",a=>{!(a.target.closest&&a.target.closest("[data-halx]"))||a.target.closest("a")||(hd.v=!hd.v,_e(!0))}),d.addEventListener("click",a=>{if(!d.classList.contains("peek")&&innerWidth<=640&&Et&&d.querySelector(".mn")&&!a.target.closest("button,a,input,select,label,summary,[data-alarm],[data-gs],[data-gt],[data-sf],[data-al],[role=button]")){let f=d.querySelector(".mn");a.stopPropagation(),f&&f.click();return}if(!d.classList.contains("peek")||a.target.closest("button,a,input"))return;a.stopPropagation(),a.preventDefault(),d.classList.remove("peek");let c=d.querySelector(".mn");c&&(c.textContent="\u25BE"),d.scrollTop=0},!0),d.addEventListener("pointerdown",()=>{d._touch=Date.now()+2500},!0),["pointerup","pointercancel"].forEach(a=>d.addEventListener(a,()=>{d._touch=0},!0));{let a=0,c=0,f=0,p=0;d.addEventListener("touchstart",v=>{p=innerWidth<=640&&Et&&(!He.on||He.cur==="map")&&v.touches.length===1&&!v.target.closest("input")?1:0,p&&(a=v.touches[0].clientX,c=v.touches[0].clientY,f=0)},{passive:!0}),d.addEventListener("touchmove",v=>{if(!p)return;let S=v.touches[0].clientX-a,C=v.touches[0].clientY-c;p===1&&(Math.abs(S)<12&&Math.abs(C)<12||(p=Math.abs(S)>Math.abs(C)*1.3&&S<0?2:0,!p))||(v.preventDefault(),f=Math.min(0,S),d.style.transition="none",d.style.transform=`translateX(${f}px)`,d.style.opacity=String(Math.max(.3,1+f/300)))},{passive:!1}),d.addEventListener("touchend",()=>{if(p!==2){p=0;return}if(p=0,d.style.transition="transform .18s,opacity .18s",f>-90){d.style.transform="",d.style.opacity="";return}d.style.transform="translateX(-110%)",d.style.opacity="0",setTimeout(()=>{let v=d.querySelector("[data-cx]");v&&v.click(),d.style.transition="",d.style.transform="",d.style.opacity=""},180)}),d.addEventListener("touchcancel",()=>{p===2&&(d.style.transform="",d.style.opacity=""),p=0})}let He={on:!1,cur:"now",home:new Map},cc=matchMedia("(max-width:640px), (max-height:500px) and (pointer:coarse)"),Nn=document.createElement("nav");Nn.id="tabs";let tx=[["now","\u{1F552}",__t(108)],["map","\u{1F5FA}\uFE0F",__t(577)],["line","\u{1F4CA}",__t(578)],["set","\u2699\uFE0F",__t(579)]];Nn.innerHTML=tx.map(([a,c,f])=>`<button type="button" data-tab="${a}"><span>${c}</span><small>${f}</small></button>`).join(""),document.body.appendChild(Nn);let br=document.createElement("i");br.className="tind",br.setAttribute("aria-hidden","true"),Nn.prepend(br);let Em=a=>[...Nn.querySelectorAll("[data-tab]")].find(c=>{let f=c.getBoundingClientRect();return a>=f.left&&a<f.right}),dd=a=>{!a||!a.offsetWidth||(br.style.width=a.offsetWidth+"px",br.style.height=a.offsetHeight+"px",br.style.top=a.offsetTop+"px",br.style.transform=`translateX(${a.offsetLeft}px)`)},ia=()=>dd(Nn.querySelector("[data-tab].on")),ex=()=>{try{let a=window.Capacitor,c=a&&a.isNativePlatform&&a.isNativePlatform()&&a.Plugins&&a.Plugins.Haptics;c&&c.selectionChanged().catch(()=>{})}catch{}},ai={on:!1,b:null,moved:!1,until:0};Nn.addEventListener("pointerdown",a=>{let c=Em(a.clientX);if(c){ai.on=!0,ai.b=c,ai.moved=!1,Nn.classList.add("drag"),Nn.querySelectorAll(".hov").forEach(f=>f.classList.remove("hov")),c.classList.add("hov"),dd(c);try{Nn.setPointerCapture(a.pointerId)}catch{}try{let f=window.Capacitor,p=f&&f.Plugins&&f.Plugins.Haptics;p&&f.isNativePlatform()&&p.selectionStart().catch(()=>{})}catch{}}}),Nn.addEventListener("pointermove",a=>{if(!ai.on)return;let c=Em(a.clientX);c&&c!==ai.b&&(ai.b.classList.remove("hov"),c.classList.add("hov"),ai.b=c,ai.moved=!0,dd(c),ex())});let Tm=a=>{if(ai.on){ai.on=!1,Nn.classList.remove("drag"),Nn.querySelectorAll(".hov").forEach(c=>c.classList.remove("hov"));try{let c=window.Capacitor,f=c&&c.Plugins&&c.Plugins.Haptics;f&&c.isNativePlatform()&&f.selectionEnd().catch(()=>{})}catch{}a&&ai.b?(ai.until=Date.now()+500,ai.b.dataset.tab!==He.cur?Oi(ai.b.dataset.tab):ia()):ia()}};Nn.addEventListener("pointerup",()=>Tm(!0)),Nn.addEventListener("pointercancel",()=>Tm(!1)),addEventListener("resize",()=>setTimeout(ia,60));try{new ResizeObserver(()=>ia()).observe(Nn)}catch{}let sa=document.createElement("div");sa.id="tabL",document.body.appendChild(sa);let Mr=document.createElement("div");Mr.id="tabA",Mr.className="box",document.body.appendChild(Mr);let fd=(a,c)=>{a&&(He.home.has(a)||He.home.set(a,[a.parentNode,a.nextSibling]),c.appendChild(a))},Am=()=>{for(let[a,[c,f]]of He.home)try{c.insertBefore(a,f&&f.parentNode===c?f:null)}catch{}He.home.clear()};function pd(){if(!document.getElementById("tabLt")){let S=document.createElement("div");S.id="tabLt",S.textContent=__t(578),document.body.appendChild(S)}let a=[...new Set([Xe,$e].flatMap(S=>{let C=An(S);return C!=null?[...T[C].fams]:[]}))],c=(Dt.size&&Dt.size<=8?[...Dt]:a.length?a:[]).filter(S=>Z[S]).sort(B),f=c.join(","),p=H.alerts.filter(S=>[...S.fams].some(C=>Dt.has(C))).length,v=[Ut,Ce,me,Ot,f,p].join("|");sa._k!==v&&(sa._k=v,sa.innerHTML=`<button type="button" data-tl="stats" class="${Ut?"on":""}">\u{1F4CA} ${__t(57)}</button><button type="button" data-tl="alr" class="${Ce?"on":""}">\u26A0\uFE0F ${p}${p===1?__t(340):__t(341)}</button>${c.map(S=>`<button type="button" data-tl="line:${m(S)}" class="${me===S?"on":""}">\u{1F4CB} ${m(S)}</button>`).join("")}<a href="https://www.whatsapp.com/channel/0029Vav4hGTId7nPenKMuo2C" target="_blank" rel="noopener" title="${__t(173)}">\u{1F4AC}</a>`,sa.querySelectorAll("[data-tl]").forEach(S=>S.onclick=()=>{let C=S.dataset.tl;Ut=C==="stats",Ce=C==="alr",me=C.startsWith("line:")?C.slice(5):"",Ot=!1,Et=null,ae=-1,Ut&&(Ue.at=0),d._h="",Re(),pd()}))}document.addEventListener("visibilitychange",()=>{!document.hidden&&window.__txt&&window.__txt()});let nx="https://raw.githubusercontent.com/elMonoAmelio/catalunya-survival/horarios/rod_pack.json",ix=()=>yt(new Date).ymd.replace(/-/g,"");function wo(){navigator.onLine===!1||location.protocol==="file:"&&!/[?&]pack=1/.test(location.search)||fetch(nx,{cache:"no-store"}).then(a=>a.ok?a.text():null).then(a=>{if(!a)return;let c;try{c=JSON.parse(a)}catch{return}if(!c||!c.gen||!Array.isArray(c.days)||!c.trips||c.gen<=t.gen)return;try{localStorage.setItem("rod_pack",a)}catch{return}let f=ix(),p=t.days.indexOf(f),v=c.days.indexOf(f),S=p<0?0:ht.filter(L=>L.day===p).length,C=0;if(v>=0)for(let L of c.trips)L[0]===v&&C++;let I=v>=0&&S&&(Math.abs(C-S)/S>.1||!C);if(p<0||p>=t.days.length-2||I){try{sessionStorage.setItem("rod_packmsg",I?"1":"")}catch{}location.reload();return}Eo.v=!0}).catch(()=>{})}let Eo={v:!1};document.addEventListener("visibilitychange",()=>{document.hidden&&Eo.v?(Eo.v=!1,Eo.reload=!0):!document.hidden&&Eo.reload&&location.reload()});try{sessionStorage.getItem("rod_packmsg")==="1"&&(sessionStorage.removeItem("rod_packmsg"),setTimeout(()=>Ve("\u{1F5D3}\uFE0F "+__t(580)),1500))}catch{}if(setTimeout(wo,4e3),document.addEventListener("visibilitychange",()=>{!document.hidden&&Date.now()-(wo.at||0)>6*36e5&&(wo.at=Date.now(),wo())}),wo.at=Date.now(),window.__RODNEW__){let a=window.__RODNEW__,c=y("#ver");c&&c.firstChild&&c.firstChild.nodeType===3&&(c.firstChild.textContent=c.firstChild.textContent.replace(/(\d\d\/\d\d \d\d:\d\d)/,a.slice(8,10)+"/"+a.slice(5,7)+" "+a.slice(11,16)))}function uc(){Am();let a=window.__L||"es",c=pi.mode,f=(p,v,S,C)=>`<div class="irow"><span class="iic" style="--ic:${v}">${p}</span><span class="ilab">${S}</span>${C||""}</div>`;Mr.innerHTML=`<h3 class="ilt">${__t(579)}</h3>
      <div class="icard">${f("\u{1F310}","#0a84ff",__t(581))}<div class="seg2 iseg">${"ca|Catal\xE0,es|Espa\xF1ol,en|English".split(",").map(p=>p.split("|")).map(([p,v])=>`<button type="button" data-lang="${p}" class="${a===p?"on":""}">${v}</button>`).join("")}</div>
      ${f("\u{1F319}","#5e5ce6",__t(582))}<div class="seg2 iseg">${[["auto",__t(362)],["light",__t(583)],["dark",__t(584)]].map(([p,v])=>`<button type="button" data-th="${p}" class="${c===p?"on":""}">${v}</button>`).join("")}</div>
      ${f("\u{1F520}","#8e8e93",__t(585))}<div class="seg2 iseg">${(()=>{let p="";try{p=localStorage.getItem("rod_big")||""}catch{}let v=p==="1"?"1":p==="0"?"0":"a";return[["a",__t(362)],["0","Normal"],["1",__t(586)]].map(([S,C])=>`<button type="button" data-big="${S}" class="${v===S?"on":""}">${C}</button>`).join("")})()}</div></div>${(()=>{let p="";try{p=localStorage.getItem("rod_big")||""}catch{}return p==="1"||p==="0"?"":`<small class="tabAhint ifoot">${__t(587)}</small>`})()}
      <div class="ihd">${__t(204)}</div><div class="icard">${f("\u{1F514}","#ff453a",__t(588),'<div id="tabAbell"></div>')}${(()=>{let p=sc();return p.length>1?`<div class="irow isub"><span class="ilab">${__t(589)}</span></div><div class="alch">${p.map(v=>`<button type="button" data-al="${m(v)}" class="ln${Sr.has(v)?" off":""}" style="--c:${Z[v]}">${m(v)}</button>`).join("")}</div>`:""})()}</div><small class="tabAhint ifoot">${__t(590)}</small>${sc().length?"":`<small class="tabAhint ifoot">${__t(591)}</small>`}
      <div class="icard">${f("\u{1F4E1}","#30d158",__t(592))}<div id="tabArt" class="ibody"></div>${f("\u2139\uFE0F","#636366",__t(593))}<div id="tabAinf" class="ibody"></div></div>
      <p class="tdisc ifoot">${__t(594)}</p>
      <p class="tabAfoot">MonkiSoft</p>`,Mr.querySelectorAll("[data-al]").forEach(p=>p.onclick=()=>{let v=p.dataset.al,S=sc();Sr.has(v)?Sr.delete(v):S.filter(C=>!Sr.has(C)).length>1&&Sr.add(v);try{localStorage.setItem("rod_aloff",JSON.stringify([...Sr]))}catch{}_e(!0),uc()}),Mr.querySelectorAll("[data-big]").forEach(p=>p.onclick=()=>{let v=p.dataset.big;try{v==="a"?localStorage.removeItem("rod_big"):localStorage.setItem("rod_big",v)}catch{}window.__txt&&window.__txt(),uc(),_e(!0)}),Mr.querySelectorAll("[data-th]").forEach(p=>p.onclick=()=>{pi.mode=p.dataset.th;try{localStorage.setItem("rod_theme",pi.mode)}catch{}Zl(),uc()}),fd(y("#bell"),y("#tabAbell")),fd(y("#src"),y("#tabArt")),fd(y("#ver"),y("#tabAinf"))}function Oi(a){if(!He.on)return;let c=He.cur;if(He.cur=a,document.documentElement.dataset.tab=a,window.__mapHidden=a!=="map",a!=="map"&&(d.classList.remove("peek","sw"),d.classList.contains("min")&&window.__mcsMin&&window.__mcsMin(!1),d.style.transform="",d.style.opacity=""),!window.__mapHidden&&window.__wakeMap&&window.__wakeMap(),Nn.querySelectorAll("[data-tab]").forEach(f=>f.classList.toggle("on",f.dataset.tab===a)),ia(),a==="line")(Et||ae>=0)&&(He.keep={t:Et,s:ae,sk:He.sk}),!Ut&&!Ce&&!me&&!Ot&&(Ut=!0,Ue.at=0),Et=null,ae=-1,d._h="",Re(),pd();else if(c==="line"){Ut=Ce=Ot=!1,me="";let f=He.keep;He.keep=null,f&&a==="map"&&!Et&&ae<0&&(Et=f.t,ae=f.s,He.sk=f.sk),d._h="",Re()}a==="map"&&requestAnimationFrame(()=>requestAnimationFrame(()=>{try{Yh()}catch{}dispatchEvent(new Event("resize"))})),a==="set"&&uc(),a==="now"&&(_e(!0),requestAnimationFrame(rc)),De=0,o()}Nn.onclick=a=>{if(Date.now()<ai.until)return;let c=a.target.closest("[data-tab]");c&&Oi(c.dataset.tab)},window.__rodTabSync=()=>{if(!He.on)return;let a=Et?"t"+(Et.num||Et.vtid):ae>=0?"s"+ae:"",c=a!==He.sk;He.sk=a,a&&c&&He.cur!=="map"?Oi("map"):(Ce||me||Ot)&&He.cur!=="line"&&He.cur!=="map"&&Oi("line"),He.cur==="line"&&pd()};function md(){let a=cc.matches||document.documentElement.classList.contains("cap");if(a!==He.on)if(He.on=a,document.documentElement.classList.toggle("tabmode",a),requestAnimationFrame(()=>requestAnimationFrame(ia)),a||(window.__mapHidden=!1),a){let c="now";try{let f=sessionStorage.getItem("rod_tabgo");f&&(sessionStorage.removeItem("rod_tabgo"),/^(now|map|line|set)$/.test(f)&&(c=f))}catch{}Oi(c)}else delete document.documentElement.dataset.tab,Am()}cc.addEventListener?cc.addEventListener("change",md):cc.addListener(md),md();{let a=y("#rc"),c=()=>document.documentElement.style.setProperty("--rch",Math.round(a.getBoundingClientRect().height)+"px");window.ResizeObserver&&new ResizeObserver(c).observe(a),c()}let gd={"\u{1F3D8}":'<path d="M3 21V11l5-4 5 4v10"/><path d="M13 21V9l4-3 4 3v12"/><path d="M2 21h20"/><path d="M7 21v-4h2v4"/>',"\u{1F3E0}":'<path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/>',"\u{1F4BC}":'<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5h6v2"/><path d="M3 13h18"/>',"\u{1F4CD}":'<path d="M12 21s-7-6.5-7-12a7 7 0 0114 0c0 5.5-7 12-7 12z"/><circle cx="12" cy="9" r="2.5"/>',"\u{1F686}":'<rect x="5" y="3" width="14" height="14" rx="3"/><path d="M5 11h14M8 21l2-4M16 21l-2-4"/><circle cx="9" cy="14" r=".6"/><circle cx="15" cy="14" r=".6"/>',"\u{1F6B6}":'<circle cx="13" cy="4" r="2"/><path d="M12 7l-2 6 3 3v5M10 13l-3 8M11 8l4 3h3M11 8l-4 3"/>',"\u{1F689}":'<path d="M4 20h16M6 20V9l6-5 6 5v11"/><path d="M10 20v-5h4v5"/>',"\u26A0\uFE0F":'<path d="M12 3l10 18H2z"/><path d="M12 10v5M12 18v.4"/>',"\u{1F4CC}":'<path d="M9 3h6l-1 6 3 3H7l3-3z"/><path d="M12 12v9"/>',"\u{1F5D3}\uFE0F":'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',"\u{1F4E1}":'<path d="M5 19a10 10 0 0114 0M8 16a6 6 0 018 0"/><circle cx="12" cy="20" r="1"/><path d="M3 15a14 14 0 0118 0"/>',"\u{1F552}":'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',"\u{1F5FA}\uFE0F":'<path d="M9 4L3 6v14l6-2 6 2 6-2V4l-6 2-6-2z"/><path d="M9 4v14M15 6v14"/>',"\u{1F4CA}":'<path d="M4 20V11M10 20V4M16 20v-7M2 20h20"/>',"\u2699\uFE0F":'<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1"/>',"\u{1F310}":'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/>',"\u{1F319}":'<path d="M20 14A8 8 0 1110 4a7 7 0 0010 10z"/>',"\u{1F520}":'<path d="M3 18l4-12 4 12M4.5 14h5M15 18V9h3.5a2.5 2.5 0 010 5H15M15 14h4a2 2 0 010 4h-4"/>',"\u{1F514}":'<path d="M6 16V11a6 6 0 0112 0v5l2 2H4z"/><path d="M10 21h4"/>',"\u{1F515}":'<path d="M6 16V11a6 6 0 0112 0v5l2 2H4z"/><path d="M10 21h4M3 3l18 18"/>',"\u2139\uFE0F":'<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.5"/>',"\u{1F4CB}":'<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V3h6v1M8 10h8M8 14h8M8 18h5"/>',"\u{1F4AC}":'<path d="M4 5h16v11H9l-5 4z"/>',"\u26D4":'<circle cx="12" cy="12" r="9"/><path d="M7 12h10"/>',"\u{1F4F6}":'<path d="M4 20v-3M9 20v-7M14 20V9M19 20V5"/>',"\u23F3":'<path d="M7 3h10M7 21h10M8 3c0 6 8 6 8 9s-8 3-8 9M16 3c0 6-8 6-8 9s8 3 8 9"/>',"\u{1F3D9}\uFE0F":'<path d="M3 21V9h6v12M9 21V4h6v17M15 21v-9h6v9M2 21h20"/>',"\u{1F4E4}":'<path d="M12 15V3M7 8l5-5 5 5"/><path d="M5 12v8h14v-8"/>',"\u2B50":'<path d="M12 3l2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.3 6.4 20.2l1.1-6.2L3 9.6l6.2-.9z"/>'},_d=new RegExp("("+Object.keys(gd).map(a=>a.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")).join("|")+")\uFE0F?","g"),sx=a=>`<span class="ico" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${gd[a]||gd[a+"\uFE0F"]||""}</svg></span>`;function rx(a){let c=document.createTreeWalker(a,NodeFilter.SHOW_TEXT),f=[],p;for(;p=c.nextNode();)p.parentElement&&p.parentElement.closest(".ico,script,style,textarea,input")||(_d.lastIndex=0,_d.test(p.nodeValue)&&f.push(p));for(let v of f){let S=document.createElement("span");S.innerHTML=m(v.nodeValue).replace(_d,(C,I)=>sx(I)),v.replaceWith(...S.childNodes)}return f.length}{let a=()=>["#home","#tabs","#tabA","#tabL","#mcs","#onb","#toast","#rc","#inf","#mbtn","#sbtn","#wabtn","#bell","#list"].map(v=>y(v)).filter(Boolean),c=!1,f=()=>{if(!c){c=!0;try{let v=0;a().forEach(S=>{v+=rx(S)}),v&&He.on&&rc()}finally{c=!1}}},p=new MutationObserver(()=>{c||queueMicrotask(f)});setTimeout(()=>{f(),a().forEach(v=>p.observe(v,{childList:!0,subtree:!0,characterData:!0}))},0)}window.__rod={PIN:ln,LASTPIN:Rn,get ONBX(){return{tid:gt.tid,lock:gt.lock,manual:gt.manual}},xferCands:nm,bestXfer:nd,xferFirst:ed,nowState:ee,XMIN:em,pinNotify:pm,toast:Ve,cardEta:Kr,HOME:Xe,WORK:$e,ONB:gt,alertForMe:lm,whereAmI:rd,departuresFor:Jn,DEPS:Ft,tripByNum:Is,delayOf:kt,TID:pt,SID:Vt,byDay:st,get days(){return t.days},get hist(){return Ue},get past(){return ft.cur},get cols(){return gn.mesh?gn.mesh.count:-1},get dist(){return r.dist},get follow(){return fe},get selTrip(){return Et},ST:T,TR:ht,FAM:q,act:()=>Bt,setSpeed:wm,RT:H,pollRT:X,nowState:ee,posAt:K,activeTrips:dt,LL:bt,select:a=>{Et=a,Re()}}}var Ka=window.__DATA__;var Ge=i=>document.querySelector(i),zs=i=>String(i).replace(/\B(?=(\d{3})+(?!\d))/g,"."),ni=(i,t,e)=>Math.min(e,Math.max(t,i)),sp=i=>i.normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase(),di=Ge("#c"),kl=new Mh({canvas:di,antialias:!0});kl.setPixelRatio(Math.min(devicePixelRatio||1,2));var Vs=new qo;Vs.background=new ye(15659509);var $h=35,Ms=new ti($h,1,2,1500);Vs.add(new gl(16777215,9080992,1));var Jg=new xl(16777215,.9);Jg.position.set(-40,-70,90);Vs.add(Jg);var Ss=100/Ka.w,Fl=Ka.w/2,Bl=Ka.h/2,bn=[],rp=new Ji;Vs.add(rp);var Uh=new Lr({color:16777215,transparent:!0,opacity:.55});for(let i of Ka.m){let t=new Ji,e=[],n=[],s=1e9,r=-1e9,o=1e9,l=-1e9;for(let M of i.g){let w=M.map(y=>{let m=[];for(let $=0;$<y.length;$+=2)m.push(new Wt((y[$]-Fl)*Ss,(y[$+1]-Bl)*Ss));return m.length>1&&m[0].equals(m[m.length-1])&&m.pop(),m}).filter(y=>y.length>=3);if(!w.length)continue;let N=new Oa(w[0]);for(let y=1;y<w.length;y++)N.holes.push(new Nr(w[y]));e.push(N);for(let y of w[0])s=Math.min(s,y.x),r=Math.max(r,y.x),o=Math.min(o,y.y),l=Math.max(l,y.y);for(let y of w)n.push(new Qo(new En().setFromPoints(y.map(m=>new j(m.x,m.y,0))),Uh))}if(!e.length)continue;let u;try{u=new ul(e,{depth:1,bevelEnabled:!1})}catch{continue}let h=new fl({color:13421772}),d=new Bn(u,h);t.add(d);let b=new Ji;n.forEach(M=>b.add(M)),b.position.z=.04,rp.add(b),t.scale.z=.01,rp.add(t);let g={og:b,rings:i.g,inF:!0,sel:null,code:i.c,name:i.n,pop:i.p,area:i.a,pr:i.pr,rankP:0,rankD:0,group:t,mesh:d,mat:h,cx:(s+r)/2,cy:(o+l)/2,size:Math.max(r-s,l-o),z:.01,zt:.01,rank:0};d.userData.m=g,bn.push(g)}var MA=bn.map(i=>i.mesh),zg=i=>{let t=0;for(let e=0;e<i.length;e+=2){let n=(e+2)%i.length;t+=i[e]*i[n+1]-i[n]*i[e+1]}return Math.abs(t)/2},Zg=0,jg=0;for(let i of bn){for(let t of i.rings)Zg+=zg(t[0])-t.slice(1).reduce((e,n)=>e+zg(n),0);jg+=i.area}var U1=Math.sqrt(jg/Zg),Lh={"08":"Barcelona",17:"Girona",25:"Lleida",43:"Tarragona"},Kg={"08":__t(595),17:__t(596),25:__t(597),43:__t(598)},dp="sqrt",fp="pop",np=0,ap=0,qa=1,Ul=1,O1={sqrt:i=>Math.sqrt(i),lin:i=>i,log:i=>Math.log10(Math.max(i,1))},op=i=>fp==="pop"?i.pop:i.pop/i.area,Ih=["#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#b10026","#5c0020"].map(i=>new ye(i));function F1(i){i=ni(i,0,1)*(Ih.length-1);let t=Math.min(Math.floor(i),Ih.length-2);return Ih[t].clone().lerp(Ih[t+1],i-t)}var Ya=i=>i>=100?zs(Math.round(i)):i.toLocaleString("es-ES",{maximumFractionDigits:1});function B1(){ap=0;for(let i of bn)ap+=i.pop;[...bn].sort((i,t)=>t.pop-i.pop).forEach((i,t)=>i.rankP=t+1),[...bn].sort((i,t)=>t.pop/t.area-i.pop/i.area).forEach((i,t)=>i.rankD=t+1),e_()}var Qg=new ye("#d3d8e2"),t_=new ye("#eceff3");window.__mapTheme=i=>{Vs.background=new ye(i?856345:15659509),t_.set(i?"#2b3242":"#eceff3"),Qg.set(i?"#1a1f29":"#d3d8e2"),Uh.color.set(i?856345:16777215),Uh.opacity=i?.7:.55,pp.color.set(i?329483:2764864),mp.color.set(i?9081766:16777215);for(let t of bn)t.base&&zh(t);$n()};function zh(i){i.mat.color.copy(i.base).lerp(t_,document.documentElement.classList.contains("dark")?.95:.86),i.inF||i.mat.color.lerp(Qg,.8)}function e_(){qa=1,Ul=1e12;for(let e of bn){let n=op(e);qa=Math.max(qa,n),Ul=Math.min(Ul,n)}let i=Math.log10(Math.max(Ul,.01)),t=Math.log10(qa);for(let e of bn)e.base=F1((Math.log10(Math.max(op(e),.01))-i)/(t-i)),zh(e);Ge("#lmin").textContent=Ya(Ul),Ge("#lmax").textContent=Ya(qa),Ge("#lname").textContent=fp==="pop"?__t(599):__t(600),Vh()}function Vh(){let i=O1[dp],t=i(qa),e=24*np;for(let n of bn)n.zt=np<=.001?.01:Math.max(.12*Math.min(1,np),e*i(op(n))/t)*(n.inF?1:.1);$n()}var Vg=Object.fromEntries(bn.map(i=>[i.code,i])),Dh=[],n_=[];for(let i of Ka.bd){let t=Vg[i.a],e=Vg[i.b];if(!(!t||!e))for(let n=0;n+3<i.p.length;n+=2)n_.push((i.p[n]-Fl)*Ss,(i.p[n+1]-Bl)*Ss,0,(i.p[n+2]-Fl)*Ss,(i.p[n+3]-Bl)*Ss,0),Dh.push(t,e)}var Oh=new ts;Oh.setPositions(n_);var pp=new gs({color:2764864,linewidth:4.4,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3}),mp=new gs({color:16777215,linewidth:2.4,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-6});[pp,mp].forEach((i,t)=>{let e=new zr(Oh,i);e.frustumCulled=!1,e.renderOrder=10+t,Vs.add(e)});function k1(){let i=Oh.attributes.instanceStart.data.array;for(let t=0;t<Dh.length;t+=2){let e=Math.max(Dh[t].z,Dh[t+1].z)+.12,n=t/2*6;i[n+2]=e,i[n+5]=e}Oh.attributes.instanceStart.data.needsUpdate=!0}var Fh={};for(let i of Object.keys(Lh)){let t=bn.filter(d=>d.pr===i),e=0,n=0,s=0,r=1e9,o=-1e9,l=1e9,u=-1e9;for(let d of t)e+=d.area,n+=d.cx*d.area,s+=d.cy*d.area,r=Math.min(r,d.cx),o=Math.max(o,d.cx),l=Math.min(l,d.cy),u=Math.max(u,d.cy);let h=document.createElement("div");h.className="plab",h.textContent=Lh[i],h.title=__t(601)+Kg[i],h.onclick=()=>Z1("pr:"+i),document.body.appendChild(h),Fh[i]={el:h,p:new j(n/e,s/e,0),cx:(r+o)/2,cy:(l+u)/2,ext:Math.max(o-r,u-l),ext2:[o-r,u-l],area:e,name:Lh[i]}}var ip=new j;function $1(){for(let i in Fh){let t=Fh[i];ip.copy(t.p).project(Ms),t.el.style.transform=`translate(-50%,-50%) translate(${(ip.x*.5+.5)*innerWidth}px,${(-ip.y*.5+.5)*innerHeight}px)`}}var Cn={tilt:0,yaw:0,dist:150,tx:0,ty:0},Pe={...Cn};function z1(){let i=innerWidth/innerHeight,t=Math.tan($h*Math.PI/360);return Math.max(Ka.h*Ss*1.1,100*1.1/i)/(2*t)}var V1=document.getElementById("northr");document.getElementById("north").addEventListener("click",()=>{Pe.yaw=Math.round(Pe.yaw/(2*Math.PI))*2*Math.PI,Pe.tilt=0,$n()});function gp(){Object.assign(Pe,{tilt:0,yaw:0,dist:z1(),tx:0,ty:0}),$n()}function H1(){let{tilt:i,yaw:t,dist:e,tx:n,ty:s}=Cn;Ms.position.set(n+e*Math.sin(i)*Math.sin(t),s-e*Math.sin(i)*Math.cos(t),e*Math.cos(i)),Ms.up.set(-Math.cos(i)*Math.sin(t),Math.cos(i)*Math.cos(t),Math.sin(i)),Ms.lookAt(n,s,0)}var Ol=!0,Hg=performance.now(),Za=new Map,hr=0,Ph=0;function _p(){hr&&(clearTimeout(hr),hr=0,requestAnimationFrame(Ja))}function $n(){Ol=!0,_p()}window.__wakeMap=_p;["pointerdown","wheel","touchstart","keydown"].forEach(i=>addEventListener(i,_p,{passive:!0,capture:!0}));function Ja(i){hr=0;let t=ni((i-Hg)/1e3,0,.05);Hg=i;let e=1-Math.exp(-t*10),n=!1;for(let s of Object.keys(Cn)){let r=Pe[s]-Cn[s];Math.abs(r)>1e-4*(s==="dist"?10:1)?(Cn[s]+=r*e,n=!0):Cn[s]=Pe[s]}for(let s of bn){let r=s.zt-s.z;Math.abs(r)>.002?(s.z+=r*Math.min(1,e*.8),s.group.scale.z=s.z,s.og.position.z=s.z+.04,n=!0):s.z!==s.zt&&(s.z=s.zt,s.group.scale.z=s.z,s.og.position.z=s.z+.04)}for(let[s,r]of Za){let o=(i-r)/1800;o>=1?(Za.delete(s),Xr(s)):Xr(s,.5*Math.sin(Math.PI*o)),n=!0}if(window.__rodTick&&window.__rodTick(i)&&(Ol=!0),window.__mapHidden){Ol=!0,hr=setTimeout(()=>{hr=0,requestAnimationFrame(Ja)},1e3);return}if(n||Ol){V1.style.transform=`rotate(${Cn.yaw}rad) scaleY(${(.55+.45*Math.cos(Cn.tilt)).toFixed(3)})`;{let s=Math.abs(Math.sin(Pe.yaw/2))<.02&&Pe.tilt<.03,r=document.getElementById("north");r.classList.contains("flat")!==s&&(r.classList.toggle("flat",s),r.title=s?__t(602):__t(603))}H1(),k1(),$1(),window.__rodFrame&&window.__rodFrame(),kl.render(Vs,Ms),Ol=n,Ge("#tilt").value=Math.round(Pe.tilt*180/Math.PI),Ge("#yaw").value=Math.round(((Pe.yaw*180/Math.PI+180)%360+360)%360-180)}if(n||Za.size){Ph=0,requestAnimationFrame(Ja);return}Ph||(Ph=i),i-Ph<1500?requestAnimationFrame(Ja):hr=setTimeout(()=>{hr=0,requestAnimationFrame(Ja)},120)}function i_(){kl.setSize(innerWidth,innerHeight,!1),Ms.aspect=innerWidth/innerHeight,Ms.updateProjectionMatrix(),pp.resolution.set(innerWidth,innerHeight),mp.resolution.set(innerWidth,innerHeight),window.__rodResize&&window.__rodResize(),$n()}addEventListener("resize",()=>{i_(),fn.length&&fr()});di.addEventListener("wheel",i=>{i.preventDefault();let t=i.deltaMode===1?16:1,e=i.deltaY*t;if(i.altKey){let n=(Math.abs(i.deltaX)>Math.abs(i.deltaY)?i.deltaX:i.deltaY)*t;Pe.yaw+=n*.0035}else i.ctrlKey?Pe.dist=ni(Pe.dist*Math.exp(e*.01),6,400):Pe.tilt=ni(Pe.tilt+e*.002,0,1.32);$n()},{passive:!1});di.addEventListener("contextmenu",i=>i.preventDefault());var bs=new Map,bi=null,Hr=0,lp=0,cp=0;var Bh=null;di.addEventListener("pointerdown",i=>{if(i.pointerType!=="mouse"&&!document.body.classList.contains("used")&&(document.body.classList.add("used"),fn.length&&setTimeout(fr,50)),di.setPointerCapture(i.pointerId),bs.set(i.pointerId,{x:i.clientX,y:i.clientY}),bs.size===1&&(bi={rot:i.button===2||i.altKey,moved:0,multi:!1,touch:i.pointerType!=="mouse"}),bs.size===2){let[t,e]=[...bs.values()];Hr=Math.hypot(t.x-e.x,t.y-e.y),lp=Math.atan2(e.y-t.y,e.x-t.x),cp=(t.y+e.y)/2,Bh={mode:null,rot:0,sc:0,tl:0},bi&&(bi.multi=!0)}xp()});di.addEventListener("pointermove",i=>{let t=bs.get(i.pointerId);if(!t){$s={x:i.clientX,y:i.clientY},up||(up=requestAnimationFrame(W1));return}let e=i.clientX-t.x,n=i.clientY-t.y;if(t.x=i.clientX,t.y=i.clientY,bs.size===2){let[s,r]=[...bs.values()],o=Math.hypot(s.x-r.x,s.y-r.y),l=Math.atan2(r.y-s.y,r.x-s.x),u=(s.y+r.y)/2,h=l-lp;h>Math.PI&&(h-=2*Math.PI),h<-Math.PI&&(h+=2*Math.PI);let d=Hr?o-Hr:0,b=u-cp,g=Bh||(Bh={mode:null,rot:0,sc:0,tl:0});g.rot+=h,g.sc+=d,g.tl+=b,g.mode?g.mode==="zoom"&&Math.abs(g.rot)>.45&&(g.mode="rotate"):Math.abs(g.rot)>.3?g.mode="rotate":Math.abs(g.tl)>30&&Math.abs(g.sc)<18?g.mode="tilt":Math.abs(g.sc)>12&&(g.mode="zoom"),(g.mode==="zoom"||g.mode==="rotate")&&Hr&&(Pe.dist=ni(Pe.dist*Hr/o,6,400)),g.mode==="rotate"&&(Pe.yaw+=h,Cn.yaw=Pe.yaw),g.mode==="tilt"&&(Pe.tilt=ni(Pe.tilt-b*.006,0,1.32),Cn.tilt=Pe.tilt),Hr=o,lp=l,cp=u,$n();return}if(bi.moved+=Math.abs(e)+Math.abs(n),bi.rot||i.altKey)Pe.yaw+=e*.005,Pe.tilt=ni(Pe.tilt+n*.004,0,1.32),Cn.yaw=Pe.yaw,Cn.tilt=Pe.tilt;else{let s=2*Cn.dist*Math.tan($h*Math.PI/360)/innerHeight,r=Math.sin(Cn.yaw),o=Math.cos(Cn.yaw),l=1/Math.max(Math.cos(Cn.tilt),.3);Pe.tx=ni(Pe.tx-o*e*s+-r*n*s*l,-70,70),Pe.ty=ni(Pe.ty-r*e*s+o*n*s*l,-70,70),Cn.tx=Pe.tx,Cn.ty=Pe.ty}$n()});var s_=i=>{let t=bi&&!bi.rot&&!bi.multi&&bi.moved<(bi.touch?12:6)&&i.type==="pointerup"&&bs.size===1,e=bi&&bi.touch;bs.delete(i.pointerId),Hr=0,Bh=null,bs.size||(bi=null),t&&window.__rodTap&&window.__rodTap(i.clientX,i.clientY)};di.addEventListener("pointerup",s_);di.addEventListener("pointercancel",s_);di.addEventListener("dblclick",gp);addEventListener("keydown",i=>{i.key==="Alt"&&(di.style.cursor="move")});addEventListener("keyup",i=>{i.key==="Alt"&&(di.style.cursor="")});addEventListener("blur",()=>{di.style.cursor=""});var G1=new yl,Gg=new Wt,$s=null,up=0,Gr=null;function W1(){if(up=0,!$s||bi)return;Gg.set($s.x/innerWidth*2-1,-($s.y/innerHeight)*2+1),G1.setFromCamera(Gg,Ms);let i=null;if(i!==Gr){let e=Gr;Gr=i,e&&Xr(e),i&&Xr(i),$n()}let t=window.__rodHover&&window.__rodHover($s.x,$s.y);if(t){Vr.innerHTML=t,Vr.style.display="block";let e=Vr.offsetWidth,n=Vr.offsetHeight;Vr.style.left=ni($s.x+14,6,innerWidth-e-6)+"px",Vr.style.top=ni($s.y+14,6,innerHeight-n-6)+"px",di.style.cursor="pointer"}else xp(),di.style.cursor=""}di.addEventListener("pointerleave",()=>{if($s=null,Gr){let i=Gr;Gr=null,Xr(i),$n()}xp()});var Vr=Ge("#tip");function xp(){Vr.style.display="none"}document.querySelectorAll("[data-metric]").forEach(i=>i.onclick=()=>{fp=i.dataset.metric,document.querySelectorAll("[data-metric]").forEach(t=>t.classList.toggle("on",t===i)),e_()});document.querySelectorAll("[data-mode]").forEach(i=>i.onclick=()=>{dp=i.dataset.mode,document.querySelectorAll("[data-mode]").forEach(t=>t.classList.toggle("on",t===i)),Vh()});Ge("#yaw").oninput=i=>{Pe.yaw=+i.target.value*Math.PI/180,$n()};Ge("#tilt").oninput=i=>{Pe.tilt=+i.target.value*Math.PI/180,$n()};Ge("#zin").onclick=()=>{Pe.dist=ni(Pe.dist*.75,6,400),$n()};Ge("#zout").onclick=()=>{Pe.dist=ni(Pe.dist/.75,6,400),$n()};Ge("#rst").onclick=gp;var Wg=["#2563eb","#059669","#7c3aed","#db2777","#0891b2","#ca8a04"],fn=[],Xg={},X1=i=>Xg[i]||(Xg[i]=new Lr({color:i}));function r_(i,t){i.og.children.forEach(e=>e.material=t?X1(t):Uh)}function Xr(i,t=0){let e=i.mat.emissive;i===Gr?e.setHex(5592405):i.sel?e.copy(i.sel.tint):e.setHex(0),t&&e.addScalar(t)}function vp(i,t){let e=1e9,n=-1e9,s=1e9,r=-1e9;for(let h of i)e=Math.min(e,h.cx-h.size/2),n=Math.max(n,h.cx+h.size/2),s=Math.min(s,h.cy-h.size/2),r=Math.max(r,h.cy+h.size/2);let o=innerWidth/innerHeight,l=Math.tan($h*Math.PI/360),u=i.length===1?ni(i[0].size*3.2+14,14,120):ni(Math.max((r-s)*1.5,(n-e)*1.5/o)/(2*l)+6,14,300);Object.assign(Pe,{tx:(e+n)/2,ty:(s+r)/2,dist:u,tilt:t,yaw:0}),$n()}var dr=Ge("#q"),Ii=Ge("#list"),dn=Ge("#mcs");function Hh(i,t=!0){if(Ii.style.display="none",dr.value="",!i.sel){fn.length>=6&&a_(fn[0].o,!0);let e=new Set(fn.map(s=>s.color)),n=Wg.find(s=>!e.has(s))||Wg[0];i.sel={o:i,color:n,tint:new ye(n).multiplyScalar(.12)},fn.push(i.sel),r_(i,n)}dn.classList.contains("min")&&Qa(!1),Za.set(i,performance.now()),Xr(i),t&&vp([i],Math.max(Pe.tilt,.9)),fr()}function a_(i,t){let e=fn.indexOf(i.sel);e>=0&&fn.splice(e,1),i.sel=null,r_(i,null),Xr(i),$n(),t||fr()}function o_(i){let t=Math.min(devicePixelRatio||1,2),e=i.clientWidth,n=i.clientHeight;i.width=e*t,i.height=n*t;let s=i.getContext("2d");s.scale(t,t),s.clearRect(0,0,e,n);let r=fn.map(d=>{let b=1e9,g=-1e9,M=1e9,w=-1e9;for(let N of d.o.rings)for(let y=0;y<N[0].length;y+=2)b=Math.min(b,N[0][y]),g=Math.max(g,N[0][y]),M=Math.min(M,N[0][y+1]),w=Math.max(w,N[0][y+1]);return{x0:b,x1:g,y0:M,y1:w}}),o=Math.max(...r.map(d=>Math.max(d.x1-d.x0,d.y1-d.y0))),l=(Math.min(e,n)-22)/o;fn.forEach((d,b)=>{let g=r[b],M=(g.x0+g.x1)/2,w=(g.y0+g.y1)/2;s.beginPath();for(let N of d.o.rings)for(let y of N)for(let m=0;m<y.length;m+=2){let $=e/2+(y[m]-M)*l,V=n/2-(y[m+1]-w)*l;m?s.lineTo($,V):s.moveTo($,V),m===y.length-2&&s.closePath()}s.fillStyle=d.color+"40",s.fill("evenodd"),s.lineWidth=1.6,s.strokeStyle=d.color,s.stroke()});let u=l/U1,h=[.5,1,2,5,10,20,50,100].find(d=>d*u>=28)||100;s.fillStyle="#6b7385",s.fillRect(10,n-12,h*u,2),s.font="10px system-ui",s.fillText(h+" km",12+h*u,n-8)}function fr(){if(!fn.length){dn.innerHTML="",dn.style.display="none",Qa(!1);return}if(dn.style.display="flex",innerWidth<=640){let e=Ge("#inf").getBoundingClientRect().bottom;dn.style.top=Math.round(e+8)+"px",dn.style.maxHeight=Math.max(110,Math.min(innerHeight*(Ge("#rc").classList.contains("min")?.7:.4),Ge("#rc").getBoundingClientRect().top-e-16))+"px",dn.style.width=""}else if(innerHeight<=500){let e=Ge("#inf").getBoundingClientRect().bottom;dn.style.top=Math.round(e+8)+"px",dn.style.maxHeight=Math.max(120,innerHeight-e-20)+"px",dn.style.width="min(290px, 40vw)"}else dn.style.top="",dn.style.maxHeight="",dn.style.width="";window.__fitMcs&&window.__fitMcs();let i=fn.map((e,n)=>{let s=e.o;return`<div class="mc" draggable="true" data-i="${n}" style="--c:${e.color}"><button class="x" data-x="${n}" title="Cerrar">\xD7</button><div class="mh"><i class="dot"></i><b>${s.name}</b><em>${Lh[s.pr]}</em></div><div class="mb">${zs(s.pop)}${__t(609)}${Ya(s.area)} km\xB2 \xB7 ${Ya(s.pop/s.area)}${__t(610)}${s.rankP}${__t(611)}`}).join("");if(fn.length>1){let e=s=>Math.max(...fn.map(s)),n=[[__t(612),s=>s.o.pop,zs],[__t(613),s=>s.o.area,Ya],[__t(614),s=>s.o.pop/s.o.area,Ya]];if(i+=`${__t(615)}`+n.map(([s,r,o])=>`<div class="cr"><span>${s}</span>${fn.map(l=>`<div class="bw"><i style="width:${Math.max(2,r(l)/e(r)*100)}%;background:${l.color}"></i><b>${o(r(l))}</b></div>`).join("")}</div>`).join(""),fn.length===2){let[s,r]=fn.map(h=>h.o),[o,l]=s.pop>=r.pop?[s,r]:[r,s],u=(h,d)=>(h>=d?h/d:d/h).toLocaleString("es-ES",{maximumFractionDigits:1});i+=`<small class="ratio"><b>${o.name}${__t(616)}${u(o.pop,l.pop)}${__t(617)}${l.name}${__t(618)}${u(o.area,l.area)}\xD7 ${o.area>=l.area?__t(619):__t(620)}.</small>`}i+="</div>"}dn.innerHTML=i,dn.querySelectorAll("[data-x]").forEach(e=>e.onclick=n=>{n.stopPropagation(),a_(fn[+e.dataset.x].o)}),dn.querySelectorAll(".mc").forEach(e=>{e.onclick=()=>vp([fn[+e.dataset.i].o],Math.max(Pe.tilt,.9)),e.onmouseenter=()=>{let n=fn[+e.dataset.i].o;Za.set(n,performance.now())},e.ondragstart=n=>{n.dataTransfer.setData("text/plain",e.dataset.i),e.classList.add("drag")},e.ondragend=()=>e.classList.remove("drag"),e.ondragover=n=>{n.preventDefault(),e.classList.add("over")},e.ondragleave=()=>e.classList.remove("over"),e.ondrop=n=>{n.preventDefault();let s=+n.dataTransfer.getData("text/plain"),r=+e.dataset.i;if(s!==r){let[o]=fn.splice(s,1);fn.splice(r,0,o),fr();let l=Ge("#sil");l&&l.classList.add("flash")}}});let t=Ge("#sil");t&&o_(t)}dr.addEventListener("input",()=>{if(window.__rodSearch){window.__rodSearch(dr.value);return}let i=sp(dr.value.trim());if(!i){Ii.style.display="none";return}let t=[],e=[];for(let s of bn){let r=sp(s.name);r.startsWith(i)?t.push(s):r.includes(i)&&e.push(s)}let n=t.sort((s,r)=>r.pop-s.pop).concat(e.sort((s,r)=>r.pop-s.pop)).slice(0,8);Ii.innerHTML=n.map((s,r)=>`<li data-i="${r}">${s.name}<em>${zs(s.pop)}</em></li>`).join("")||__t(576),Ii.style.display="block",Ii.querySelectorAll("li[data-i]").forEach(s=>s.onclick=()=>Hh(n[+s.dataset.i])),Ii._r=n});dr.addEventListener("keydown",i=>{i.key==="Enter"&&Ii._pick?Ii._pick(0):i.key==="Enter"&&Ii._r&&Ii._r[0]&&Hh(Ii._r[0]),i.key==="Escape"&&(dr.value="",Ii.style.display="none")});addEventListener("keydown",i=>{i.key==="Escape"&&i.target!==dr&&l_()});var qg=0;addEventListener("resize",()=>{clearTimeout(qg),qg=setTimeout(()=>{let i=Ge("#sil");i&&o_(i)},120)});var kh=null,hp=Ge("#chip");function q1(i,t,e=.8){kh={codes:new Set(i.map(n=>n.code)),label:t},bn.forEach(n=>{n.inF=kh.codes.has(n.code),zh(n)}),hp.innerHTML=`${__t(621)}${t}</b> \xB7 ${i.length}${i.length===1?__t(622):__t(623)}</span><button id="chx" title="Quitar filtro">\xD7</button>`,hp.style.display="flex",Ge("#chx").onclick=l_,Vh(),vp(i,e),i.slice(0,40).forEach(n=>Za.set(n,performance.now()))}function l_(){kh&&(kh=null,bn.forEach(i=>{i.inF=!0,zh(i)}),hp.style.display="none",Vh())}var Y1="prov";function J1(i){let t=[...bn].sort((o,l)=>l.pop-o.pop),e=[...bn].sort((o,l)=>l.pop/l.area-o.pop/o.area),[n,s,r]=i.split(":");if(n==="pr")return[bn.filter(o=>o.pr===s),Kg[s]];if(n==="top")return s==="pop"?[t.slice(0,10),__t(624)]:[e.slice(0,10),__t(625)];if(n==="low")return s==="pop"?[t.slice(-10),__t(626)]:[e.slice(-10),__t(627)];if(n==="size")return[bn.filter(o=>o.pop>=+s&&o.pop<+r),+r>1e9?`${zs(+s)}${__t(628)}`:+s==0?`${__t(629)}${zs(+r)}${__t(630)}`:`${zs(+s)} \u2013 ${zs(+r-1)}${__t(630)}`];if(n==="n50"){let o=0,l=0;for(let u of t)if(o+=u.pop,l++,o>=ap/2)break;return[t.slice(0,l),`${__t(631)}`]}return[[],""]}function Z1(i){let[t,e]=J1(i);t.length&&q1(t,e,i.startsWith("pr:")?.75:.8)}document.querySelectorAll("[data-tab]").forEach(i=>i.onclick=()=>{Y1=i.dataset.tab,Ge("#dbody").scrollTop=0});var Wr=Ge("#rc"),Nh=Ge("#mcstab");function ja(i){Wr.classList.toggle("min",i),Ge("#rcgrab span").textContent=i?__t(673):__t(674),fn.length&&fr()}function Qa(i){dn.classList.toggle("min",i),dn.style.transform="",dn.style.opacity="",Nh.classList.toggle("on",i&&fn.length>0),i&&(Nh.textContent=`\u25B8 ${fn.length} ${fn.length===1?"ficha":"fichas"}`,Nh.style.top=dn.style.top||"124px")}function yp(i,{onMove:t,onEnd:e,axis:n}){let s=null;i.addEventListener("pointerdown",o=>{o.pointerType==="mouse"||!Gh.matches||o.target.closest("input,button:not(#rcgrab),.seg")||(s={x:o.clientX,y:o.clientY,id:o.pointerId,lock:null})}),addEventListener("pointermove",o=>{if(!s||o.pointerId!==s.id)return;let l=o.clientX-s.x,u=o.clientY-s.y;!s.lock&&Math.hypot(l,u)>10&&(s.lock=Math.abs(l)>Math.abs(u)?"x":"y"),s.lock===n&&t&&t(l,u)});let r=o=>{if(!s||o.pointerId!==s.id)return;let l=o.clientX-s.x,u=o.clientY-s.y,h=s.lock;s=null,e(h===n?l:0,h===n?u:0,h)};addEventListener("pointerup",r,!0),addEventListener("pointercancel",r,!0)}Ge("#rcgrab").onclick=()=>ja(!Wr.classList.contains("min"));(innerWidth<=640||matchMedia("(max-height:500px) and (pointer:coarse)").matches||document.documentElement.classList.contains("cap"))&&ja(!0);requestAnimationFrame(()=>document.documentElement.classList.remove("boot"));var c_=()=>innerWidth>640;yp(Wr,{axis:"y",onEnd:(i,t)=>{if(!c_())if(t>40&&!Wr.classList.contains("min")){let e=Ge("#dp.open #dbody");(!e||e.scrollTop<=0||t>120)&&ja(!0)}else t<-30&&Wr.classList.contains("min")&&ja(!1)}});yp(Wr,{axis:"x",onEnd:i=>{c_()&&(i>50?ja(!0):i<-30&&Wr.classList.contains("min")&&ja(!1))}});var Yg=()=>{let i=document.documentElement.dataset.tab;return!i||i==="map"};yp(dn,{axis:"x",onMove:i=>{i<0&&Yg()&&(dn.classList.add("sw"),dn.style.transform=`translateX(${i}px)`,dn.style.opacity=Math.max(.2,1+i/300))},onEnd:i=>{dn.classList.remove("sw"),i<-60&&Yg()?(Qa(!0),window.__rodHide&&!fn.length&&window.__rodHide()):(dn.style.transform="",dn.style.opacity="")}});Nh.onclick=()=>{Qa(!1),fr()};window.__mcsMin=i=>Qa(i);Ge("#dtoggle").onclick=()=>{let i=Ge("#dp").classList.toggle("open");Ge("#rc").classList.toggle("dopen",i),Ge("#dtoggle").textContent=i?Gh.matches&&innerWidth<=640?__t(675):__t(676):__t(677),window.__rodCard&&window.__rodCard()};var Gh=matchMedia("(max-width:640px), (max-height:500px)");function u_(){let i=Ge("#leg");Gh.matches?Ge("#rc").insertBefore(i,Ge("#dtoggle")):document.body.appendChild(i),fn.length&&fr()}Gh.addEventListener("change",u_);u_();i_();B1();gp();Object.assign(Cn,Pe);for(let i of bn)i.z=.01;requestAnimationFrame(Ja);$g({scene:Vs,camera:Ms,renderer:kl,goal:Pe,cur:Cn,invalidate:$n,flyTo:(i,t,e,n)=>{Object.assign(Pe,{tx:(i-Fl)*Ss,ty:(t-Bl)*Ss,dist:e,tilt:n}),$n()},K:Ss,CX:Fl,CY:Bl,mcs:dn,q:dr,list:Ii,munis:bn,select:Hh,norm:sp,fmt:zs,clamp:ni,mcsMin:Qa});window.__app={scene:Vs,renderer:kl,camera:Ms,munis:bn,labs:Fh,goal:Pe,cur:Cn,select:Hh,get mode(){return dp}};window.__ready=!0;{let i=document.getElementById("ttb"),t=document.getElementById("p");i&&t&&i.addEventListener("click",()=>{let e=t.classList.toggle("tt");i.textContent=e?__t(683):__t(684)})}})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
