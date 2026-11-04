(()=>{var u0=0,nf=1,h0=2;var gl=1,d0=2,Ua=3,ir=0,li=1,cs=2,us=0,Oa=1,sf=2,rf=3,af=4,f0=5;var Lr=100,p0=101,m0=102,g0=103,_0=104,x0=200,v0=201,y0=202,S0=203,of=204,lf=205,M0=206,b0=207,w0=208,E0=209,T0=210,A0=211,C0=212,R0=213,I0=214,Fc=0,Bc=1,kc=2,Ma=3,$c=4,zc=5,Vc=6,Hc=7,wu=0,P0=1,L0=2,Yi=0,cf=1,uf=2,hf=3,df=4,ff=5,pf=6,mf=7;var gf=300,sr=301,Dr=302,Eu=303,Tu=304,_l=306,Gc=1e3,is=1001,Wc=1002,Fn=1003,D0=1004;var xl=1005;var Wn=1006,Au=1007;var rr=1008;var vi=1009,_f=1010,xf=1011,Fa=1012,Cu=1013,Ji=1014,Li=1015,Zi=1016,Ru=1017,Iu=1018,Ba=1020,vf=35902,yf=35899,Sf=1021,Mf=1022,Di=1023,rs=1026,ar=1027,Pu=1028,Lu=1029,or=1030,Du=1031;var Nu=1033,vl=33776,yl=33777,Sl=33778,Ml=33779,Uu=35840,Ou=35841,Fu=35842,Bu=35843,ku=36196,$u=37492,zu=37496,Vu=37488,Hu=37489,bl=37490,Gu=37491,Wu=37808,Xu=37809,qu=37810,Yu=37811,Ju=37812,Zu=37813,ju=37814,Ku=37815,Qu=37816,th=37817,eh=37818,nh=37819,ih=37820,sh=37821,rh=36492,ah=36494,oh=36495,lh=36283,ch=36284,wl=36285,uh=36286;var Uo=2300,Xc=2301,Uc=2302,Hd=2303,Gd=2400,Wd=2401,Xd=2402;var N0=3200;var hh=0,U0=1,Os="",bi="srgb",Oo="srgb-linear",Fo="linear",an="srgb";var Oc=7680;var O0=519,F0=512,B0=513,k0=514,dh=515,$0=516,z0=517,fh=518,V0=519,bf=35044;var wf="300 es",Wi=2e3,ba=2001;function dx(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function fx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Bo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function H0(){let i=Bo("canvas");return i.style.display="block",i}var Tm={},wa=null;function ko(...i){let t="THREE."+i.shift();wa?wa("log",t,...i):console.log(t,...i)}function G0(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Me(...i){i=G0(i);let t="THREE."+i.shift();if(wa)wa("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Ee(...i){i=G0(i);let t="THREE."+i.shift();if(wa)wa("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Er(...i){let t=i.join(" ");t in Tm||(Tm[t]=!0,Me(...i))}function W0(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var X0={[Fc]:Bc,[kc]:Vc,[$c]:Hc,[Ma]:zc,[Bc]:Fc,[Vc]:kc,[Hc]:$c,[zc]:Ma},as=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Kn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Am=1234567,Po=Math.PI/180,Ea=180/Math.PI;function ss(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Kn[i&255]+Kn[i>>8&255]+Kn[i>>16&255]+Kn[i>>24&255]+"-"+Kn[t&255]+Kn[t>>8&255]+"-"+Kn[t>>16&15|64]+Kn[t>>24&255]+"-"+Kn[e&63|128]+Kn[e>>8&255]+"-"+Kn[e>>16&255]+Kn[e>>24&255]+Kn[n&255]+Kn[n>>8&255]+Kn[n>>16&255]+Kn[n>>24&255]).toLowerCase()}function De(i,t,e){return Math.max(t,Math.min(e,i))}function Ef(i,t){return(i%t+t)%t}function px(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function mx(i,t,e){return i!==t?(e-i)/(t-i):0}function Lo(i,t,e){return(1-e)*i+e*t}function gx(i,t,e,n){return Lo(i,t,1-Math.exp(-e*n))}function _x(i,t=1){return t-Math.abs(Ef(i,t*2)-t)}function xx(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function vx(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function yx(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Sx(i,t){return i+Math.random()*(t-i)}function Mx(i){return i*(.5-Math.random())}function bx(i){i!==void 0&&(Am=i);let t=Am+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function wx(i){return i*Po}function Ex(i){return i*Ea}function Tx(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Ax(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Cx(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Rx(i,t,e,n,s){let r=Math.cos,a=Math.sin,l=r(e/2),u=a(e/2),h=r((t+n)/2),d=a((t+n)/2),S=r((t-n)/2),g=a((t-n)/2),b=r((n-t)/2),w=a((n-t)/2);switch(s){case"XYX":i.set(l*d,u*S,u*g,l*h);break;case"YZY":i.set(u*g,l*d,u*S,l*h);break;case"ZXZ":i.set(u*S,u*g,l*d,l*h);break;case"XZX":i.set(l*d,u*w,u*b,l*h);break;case"YXY":i.set(u*b,l*d,u*w,l*h);break;case"ZYZ":i.set(u*w,u*b,l*d,l*h);break;default:Me("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Gi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function cn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Tf={DEG2RAD:Po,RAD2DEG:Ea,generateUUID:ss,clamp:De,euclideanModulo:Ef,mapLinear:px,inverseLerp:mx,lerp:Lo,damp:gx,pingpong:_x,smoothstep:xx,smootherstep:vx,randInt:yx,randFloat:Sx,randFloatSpread:Mx,seededRandom:bx,degToRad:wx,radToDeg:Ex,isPowerOfTwo:Tx,ceilPowerOfTwo:Ax,floorPowerOfTwo:Cx,setQuaternionFromProperEuler:Rx,normalize:cn,denormalize:Gi},zt=class i{static{i.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=De(this.x,t.x,e.x),this.y=De(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=De(this.x,t,e),this.y=De(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(De(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(De(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},os=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,l){let u=n[s+0],h=n[s+1],d=n[s+2],S=n[s+3],g=r[a+0],b=r[a+1],w=r[a+2],N=r[a+3];if(S!==N||u!==g||h!==b||d!==w){let x=u*g+h*b+d*w+S*N;x<0&&(g=-g,b=-b,w=-w,N=-N,x=-x);let m=1-l;if(x<.9995){let $=Math.acos(x),H=Math.sin($);m=Math.sin(m*$)/H,l=Math.sin(l*$)/H,u=u*m+g*l,h=h*m+b*l,d=d*m+w*l,S=S*m+N*l}else{u=u*m+g*l,h=h*m+b*l,d=d*m+w*l,S=S*m+N*l;let $=1/Math.sqrt(u*u+h*h+d*d+S*S);u*=$,h*=$,d*=$,S*=$}}t[e]=u,t[e+1]=h,t[e+2]=d,t[e+3]=S}static multiplyQuaternionsFlat(t,e,n,s,r,a){let l=n[s],u=n[s+1],h=n[s+2],d=n[s+3],S=r[a],g=r[a+1],b=r[a+2],w=r[a+3];return t[e]=l*w+d*S+u*b-h*g,t[e+1]=u*w+d*g+h*S-l*b,t[e+2]=h*w+d*b+l*g-u*S,t[e+3]=d*w-l*S-u*g-h*b,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,l=Math.cos,u=Math.sin,h=l(n/2),d=l(s/2),S=l(r/2),g=u(n/2),b=u(s/2),w=u(r/2);switch(a){case"XYZ":this._x=g*d*S+h*b*w,this._y=h*b*S-g*d*w,this._z=h*d*w+g*b*S,this._w=h*d*S-g*b*w;break;case"YXZ":this._x=g*d*S+h*b*w,this._y=h*b*S-g*d*w,this._z=h*d*w-g*b*S,this._w=h*d*S+g*b*w;break;case"ZXY":this._x=g*d*S-h*b*w,this._y=h*b*S+g*d*w,this._z=h*d*w+g*b*S,this._w=h*d*S-g*b*w;break;case"ZYX":this._x=g*d*S-h*b*w,this._y=h*b*S+g*d*w,this._z=h*d*w-g*b*S,this._w=h*d*S+g*b*w;break;case"YZX":this._x=g*d*S+h*b*w,this._y=h*b*S+g*d*w,this._z=h*d*w-g*b*S,this._w=h*d*S-g*b*w;break;case"XZY":this._x=g*d*S-h*b*w,this._y=h*b*S-g*d*w,this._z=h*d*w+g*b*S,this._w=h*d*S+g*b*w;break;default:Me("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],l=e[5],u=e[9],h=e[2],d=e[6],S=e[10],g=n+l+S;if(g>0){let b=.5/Math.sqrt(g+1);this._w=.25/b,this._x=(d-u)*b,this._y=(r-h)*b,this._z=(a-s)*b}else if(n>l&&n>S){let b=2*Math.sqrt(1+n-l-S);this._w=(d-u)/b,this._x=.25*b,this._y=(s+a)/b,this._z=(r+h)/b}else if(l>S){let b=2*Math.sqrt(1+l-n-S);this._w=(r-h)/b,this._x=(s+a)/b,this._y=.25*b,this._z=(u+d)/b}else{let b=2*Math.sqrt(1+S-n-l);this._w=(a-s)/b,this._x=(r+h)/b,this._y=(u+d)/b,this._z=.25*b}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(De(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,l=e._x,u=e._y,h=e._z,d=e._w;return this._x=n*d+a*l+s*h-r*u,this._y=s*d+a*u+r*l-n*h,this._z=r*d+a*h+n*u-s*l,this._w=a*d-n*l-s*u-r*h,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,l=this.dot(t);l<0&&(n=-n,s=-s,r=-r,a=-a,l=-l);let u=1-e;if(l<.9995){let h=Math.acos(l),d=Math.sin(h);u=Math.sin(u*h)/d,e=Math.sin(e*h)/d,this._x=this._x*u+n*e,this._y=this._y*u+s*e,this._z=this._z*u+r*e,this._w=this._w*u+a*e,this._onChangeCallback()}else this._x=this._x*u+n*e,this._y=this._y*u+s*e,this._z=this._z*u+r*e,this._w=this._w*u+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Z=class i{static{i.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Cm.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Cm.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,l=t.z,u=t.w,h=2*(a*s-l*n),d=2*(l*e-r*s),S=2*(r*n-a*e);return this.x=e+u*h+a*S-l*d,this.y=n+u*d+l*h-r*S,this.z=s+u*S+r*d-a*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=De(this.x,t.x,e.x),this.y=De(this.y,t.y,e.y),this.z=De(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=De(this.x,t,e),this.y=De(this.y,t,e),this.z=De(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(De(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,l=e.y,u=e.z;return this.x=s*u-r*l,this.y=r*a-n*u,this.z=n*l-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return _d.copy(this).projectOnVector(t),this.sub(_d)}reflect(t){return this.sub(_d.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(De(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},_d=new Z,Cm=new os,Pe=class i{static{i.prototype.isMatrix3=!0}constructor(t,e,n,s,r,a,l,u,h){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,l,u,h)}set(t,e,n,s,r,a,l,u,h){let d=this.elements;return d[0]=t,d[1]=s,d[2]=l,d[3]=e,d[4]=r,d[5]=u,d[6]=n,d[7]=a,d[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],l=n[3],u=n[6],h=n[1],d=n[4],S=n[7],g=n[2],b=n[5],w=n[8],N=s[0],x=s[3],m=s[6],$=s[1],H=s[4],D=s[7],T=s[2],k=s[5],q=s[8];return r[0]=a*N+l*$+u*T,r[3]=a*x+l*H+u*k,r[6]=a*m+l*D+u*q,r[1]=h*N+d*$+S*T,r[4]=h*x+d*H+S*k,r[7]=h*m+d*D+S*q,r[2]=g*N+b*$+w*T,r[5]=g*x+b*H+w*k,r[8]=g*m+b*D+w*q,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],l=t[5],u=t[6],h=t[7],d=t[8];return e*a*d-e*l*h-n*r*d+n*l*u+s*r*h-s*a*u}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],l=t[5],u=t[6],h=t[7],d=t[8],S=d*a-l*h,g=l*u-d*r,b=h*r-a*u,w=e*S+n*g+s*b;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);let N=1/w;return t[0]=S*N,t[1]=(s*h-d*n)*N,t[2]=(l*n-s*a)*N,t[3]=g*N,t[4]=(d*e-s*u)*N,t[5]=(s*r-l*e)*N,t[6]=b*N,t[7]=(n*u-h*e)*N,t[8]=(a*e-n*r)*N,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,l){let u=Math.cos(r),h=Math.sin(r);return this.set(n*u,n*h,-n*(u*a+h*l)+a+t,-s*h,s*u,-s*(-h*a+u*l)+l+e,0,0,1),this}scale(t,e){return Er("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(xd.makeScale(t,e)),this}rotate(t){return Er("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(xd.makeRotation(-t)),this}translate(t,e){return Er("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(xd.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},xd=new Pe,Rm=new Pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Im=new Pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ix(){let i={enabled:!0,workingColorSpace:Oo,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===an&&(s.r=Ns(s.r),s.g=Ns(s.g),s.b=Ns(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===an&&(s.r=Sa(s.r),s.g=Sa(s.g),s.b=Sa(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Os?Fo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Er("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Er("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Oo]:{primaries:t,whitePoint:n,transfer:Fo,toXYZ:Rm,fromXYZ:Im,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:bi},outputColorSpaceConfig:{drawingBufferColorSpace:bi}},[bi]:{primaries:t,whitePoint:n,transfer:an,toXYZ:Rm,fromXYZ:Im,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:bi}}}),i}var qe=Ix();function Ns(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Sa(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ra,qc=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ra===void 0&&(ra=Bo("canvas")),ra.width=t.width,ra.height=t.height;let s=ra.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ra}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Bo("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ns(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ns(e[n]/255)*255):e[n]=Ns(e[n]);return{data:e,width:t.width,height:t.height}}else return Me("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Px=0,Ta=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Px++}),this.uuid=ss(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,l=s.length;a<l;a++)s[a].isDataTexture?r.push(vd(s[a].image)):r.push(vd(s[a]))}else r=vd(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function vd(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?qc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Me("Texture: Unable to serialize Texture."),{})}var Lx=0,yd=new Z,gi=class i extends as{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=is,s=is,r=Wn,a=rr,l=Di,u=vi,h=i.DEFAULT_ANISOTROPY,d=Os){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lx++}),this.uuid=ss(),this.name="",this.source=new Ta(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=l,this.internalFormat=null,this.type=u,this.offset=new zt(0,0),this.repeat=new zt(1,1),this.center=new zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(yd).x}get height(){return this.source.getSize(yd).y}get depth(){return this.source.getSize(yd).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Me(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Me(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==gf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Gc:t.x=t.x-Math.floor(t.x);break;case is:t.x=t.x<0?0:1;break;case Wc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Gc:t.y=t.y-Math.floor(t.y);break;case is:t.y=t.y<0?0:1;break;case Wc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};gi.DEFAULT_IMAGE=null;gi.DEFAULT_MAPPING=gf;gi.DEFAULT_ANISOTROPY=1;var on=class i{static{i.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,u=t.elements,h=u[0],d=u[4],S=u[8],g=u[1],b=u[5],w=u[9],N=u[2],x=u[6],m=u[10];if(Math.abs(d-g)<.01&&Math.abs(S-N)<.01&&Math.abs(w-x)<.01){if(Math.abs(d+g)<.1&&Math.abs(S+N)<.1&&Math.abs(w+x)<.1&&Math.abs(h+b+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let H=(h+1)/2,D=(b+1)/2,T=(m+1)/2,k=(d+g)/4,q=(S+N)/4,R=(w+x)/4;return H>D&&H>T?H<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(H),s=k/n,r=q/n):D>T?D<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(D),n=k/s,r=R/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=q/r,s=R/r),this.set(n,s,r,e),this}let $=Math.sqrt((x-w)*(x-w)+(S-N)*(S-N)+(g-d)*(g-d));return Math.abs($)<.001&&($=1),this.x=(x-w)/$,this.y=(S-N)/$,this.z=(g-d)/$,this.w=Math.acos((h+b+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=De(this.x,t.x,e.x),this.y=De(this.y,t.y,e.y),this.z=De(this.z,t.z,e.z),this.w=De(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=De(this.x,t,e),this.y=De(this.y,t,e),this.z=De(this.z,t,e),this.w=De(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(De(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Yc=class extends as{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new on(0,0,t,e),this.scissorTest=!1,this.viewport=new on(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new gi(s),a=n.count;for(let l=0;l<a;l++)this.textures[l]=r.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Wn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ta(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},_i=class extends Yc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},$o=class extends gi{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=is,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Jc=class extends gi{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=is,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Je=class i{static{i.prototype.isMatrix4=!0}constructor(t,e,n,s,r,a,l,u,h,d,S,g,b,w,N,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,l,u,h,d,S,g,b,w,N,x)}set(t,e,n,s,r,a,l,u,h,d,S,g,b,w,N,x){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=l,m[13]=u,m[2]=h,m[6]=d,m[10]=S,m[14]=g,m[3]=b,m[7]=w,m[11]=N,m[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/aa.setFromMatrixColumn(t,0).length(),r=1/aa.setFromMatrixColumn(t,1).length(),a=1/aa.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),l=Math.sin(n),u=Math.cos(s),h=Math.sin(s),d=Math.cos(r),S=Math.sin(r);if(t.order==="XYZ"){let g=a*d,b=a*S,w=l*d,N=l*S;e[0]=u*d,e[4]=-u*S,e[8]=h,e[1]=b+w*h,e[5]=g-N*h,e[9]=-l*u,e[2]=N-g*h,e[6]=w+b*h,e[10]=a*u}else if(t.order==="YXZ"){let g=u*d,b=u*S,w=h*d,N=h*S;e[0]=g+N*l,e[4]=w*l-b,e[8]=a*h,e[1]=a*S,e[5]=a*d,e[9]=-l,e[2]=b*l-w,e[6]=N+g*l,e[10]=a*u}else if(t.order==="ZXY"){let g=u*d,b=u*S,w=h*d,N=h*S;e[0]=g-N*l,e[4]=-a*S,e[8]=w+b*l,e[1]=b+w*l,e[5]=a*d,e[9]=N-g*l,e[2]=-a*h,e[6]=l,e[10]=a*u}else if(t.order==="ZYX"){let g=a*d,b=a*S,w=l*d,N=l*S;e[0]=u*d,e[4]=w*h-b,e[8]=g*h+N,e[1]=u*S,e[5]=N*h+g,e[9]=b*h-w,e[2]=-h,e[6]=l*u,e[10]=a*u}else if(t.order==="YZX"){let g=a*u,b=a*h,w=l*u,N=l*h;e[0]=u*d,e[4]=N-g*S,e[8]=w*S+b,e[1]=S,e[5]=a*d,e[9]=-l*d,e[2]=-h*d,e[6]=b*S+w,e[10]=g-N*S}else if(t.order==="XZY"){let g=a*u,b=a*h,w=l*u,N=l*h;e[0]=u*d,e[4]=-S,e[8]=h*d,e[1]=g*S+N,e[5]=a*d,e[9]=b*S-w,e[2]=w*S-b,e[6]=l*d,e[10]=N*S+g}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Dx,t,Nx)}lookAt(t,e,n){let s=this.elements;return Si.subVectors(t,e),Si.lengthSq()===0&&(Si.z=1),Si.normalize(),Xs.crossVectors(n,Si),Xs.lengthSq()===0&&(Math.abs(n.z)===1?Si.x+=1e-4:Si.z+=1e-4,Si.normalize(),Xs.crossVectors(n,Si)),Xs.normalize(),lc.crossVectors(Si,Xs),s[0]=Xs.x,s[4]=lc.x,s[8]=Si.x,s[1]=Xs.y,s[5]=lc.y,s[9]=Si.y,s[2]=Xs.z,s[6]=lc.z,s[10]=Si.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],l=n[4],u=n[8],h=n[12],d=n[1],S=n[5],g=n[9],b=n[13],w=n[2],N=n[6],x=n[10],m=n[14],$=n[3],H=n[7],D=n[11],T=n[15],k=s[0],q=s[4],R=s[8],B=s[12],X=s[1],Y=s[5],ot=s[9],ht=s[13],j=s[2],it=s[6],pt=s[10],_t=s[14],At=s[3],xt=s[7],Et=s[11],wt=s[15];return r[0]=a*k+l*X+u*j+h*At,r[4]=a*q+l*Y+u*it+h*xt,r[8]=a*R+l*ot+u*pt+h*Et,r[12]=a*B+l*ht+u*_t+h*wt,r[1]=d*k+S*X+g*j+b*At,r[5]=d*q+S*Y+g*it+b*xt,r[9]=d*R+S*ot+g*pt+b*Et,r[13]=d*B+S*ht+g*_t+b*wt,r[2]=w*k+N*X+x*j+m*At,r[6]=w*q+N*Y+x*it+m*xt,r[10]=w*R+N*ot+x*pt+m*Et,r[14]=w*B+N*ht+x*_t+m*wt,r[3]=$*k+H*X+D*j+T*At,r[7]=$*q+H*Y+D*it+T*xt,r[11]=$*R+H*ot+D*pt+T*Et,r[15]=$*B+H*ht+D*_t+T*wt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],l=t[5],u=t[9],h=t[13],d=t[2],S=t[6],g=t[10],b=t[14],w=t[3],N=t[7],x=t[11],m=t[15],$=u*b-h*g,H=l*b-h*S,D=l*g-u*S,T=a*b-h*d,k=a*g-u*d,q=a*S-l*d;return e*(N*$-x*H+m*D)-n*(w*$-x*T+m*k)+s*(w*H-N*T+m*q)-r*(w*D-N*k+x*q)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],l=t[9],u=t[2],h=t[6],d=t[10];return e*(a*d-l*h)-n*(r*d-l*u)+s*(r*h-a*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],l=t[5],u=t[6],h=t[7],d=t[8],S=t[9],g=t[10],b=t[11],w=t[12],N=t[13],x=t[14],m=t[15],$=e*l-n*a,H=e*u-s*a,D=e*h-r*a,T=n*u-s*l,k=n*h-r*l,q=s*h-r*u,R=d*N-S*w,B=d*x-g*w,X=d*m-b*w,Y=S*x-g*N,ot=S*m-b*N,ht=g*m-b*x,j=$*ht-H*ot+D*Y+T*X-k*B+q*R;if(j===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let it=1/j;return t[0]=(l*ht-u*ot+h*Y)*it,t[1]=(s*ot-n*ht-r*Y)*it,t[2]=(N*q-x*k+m*T)*it,t[3]=(g*k-S*q-b*T)*it,t[4]=(u*X-a*ht-h*B)*it,t[5]=(e*ht-s*X+r*B)*it,t[6]=(x*D-w*q-m*H)*it,t[7]=(d*q-g*D+b*H)*it,t[8]=(a*ot-l*X+h*R)*it,t[9]=(n*X-e*ot-r*R)*it,t[10]=(w*k-N*D+m*$)*it,t[11]=(S*D-d*k-b*$)*it,t[12]=(l*B-a*Y-u*R)*it,t[13]=(e*Y-n*B+s*R)*it,t[14]=(N*H-w*T-x*$)*it,t[15]=(d*T-S*H+g*$)*it,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,l=t.y,u=t.z,h=r*a,d=r*l;return this.set(h*a+n,h*l-s*u,h*u+s*l,0,h*l+s*u,d*l+n,d*u-s*a,0,h*u-s*l,d*u+s*a,r*u*u+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,l=e._z,u=e._w,h=r+r,d=a+a,S=l+l,g=r*h,b=r*d,w=r*S,N=a*d,x=a*S,m=l*S,$=u*h,H=u*d,D=u*S,T=n.x,k=n.y,q=n.z;return s[0]=(1-(N+m))*T,s[1]=(b+D)*T,s[2]=(w-H)*T,s[3]=0,s[4]=(b-D)*k,s[5]=(1-(g+m))*k,s[6]=(x+$)*k,s[7]=0,s[8]=(w+H)*q,s[9]=(x-$)*q,s[10]=(1-(g+N))*q,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=aa.set(s[0],s[1],s[2]).length(),l=aa.set(s[4],s[5],s[6]).length(),u=aa.set(s[8],s[9],s[10]).length();r<0&&(a=-a),$i.copy(this);let h=1/a,d=1/l,S=1/u;return $i.elements[0]*=h,$i.elements[1]*=h,$i.elements[2]*=h,$i.elements[4]*=d,$i.elements[5]*=d,$i.elements[6]*=d,$i.elements[8]*=S,$i.elements[9]*=S,$i.elements[10]*=S,e.setFromRotationMatrix($i),n.x=a,n.y=l,n.z=u,this}makePerspective(t,e,n,s,r,a,l=Wi,u=!1){let h=this.elements,d=2*r/(e-t),S=2*r/(n-s),g=(e+t)/(e-t),b=(n+s)/(n-s),w,N;if(u)w=r/(a-r),N=a*r/(a-r);else if(l===Wi)w=-(a+r)/(a-r),N=-2*a*r/(a-r);else if(l===ba)w=-a/(a-r),N=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return h[0]=d,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=S,h[9]=b,h[13]=0,h[2]=0,h[6]=0,h[10]=w,h[14]=N,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,n,s,r,a,l=Wi,u=!1){let h=this.elements,d=2/(e-t),S=2/(n-s),g=-(e+t)/(e-t),b=-(n+s)/(n-s),w,N;if(u)w=1/(a-r),N=a/(a-r);else if(l===Wi)w=-2/(a-r),N=-(a+r)/(a-r);else if(l===ba)w=-1/(a-r),N=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return h[0]=d,h[4]=0,h[8]=0,h[12]=g,h[1]=0,h[5]=S,h[9]=0,h[13]=b,h[2]=0,h[6]=0,h[10]=w,h[14]=N,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},aa=new Z,$i=new Je,Dx=new Z(0,0,0),Nx=new Z(1,1,1),Xs=new Z,lc=new Z,Si=new Z,Pm=new Je,Lm=new os,Us=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],l=s[8],u=s[1],h=s[5],d=s[9],S=s[2],g=s[6],b=s[10];switch(e){case"XYZ":this._y=Math.asin(De(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,b),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-De(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(l,b),this._z=Math.atan2(u,h)):(this._y=Math.atan2(-S,r),this._z=0);break;case"ZXY":this._x=Math.asin(De(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-S,b),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(u,r));break;case"ZYX":this._y=Math.asin(-De(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(g,b),this._z=Math.atan2(u,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(De(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-d,h),this._y=Math.atan2(-S,r)):(this._x=0,this._y=Math.atan2(l,b));break;case"XZY":this._z=Math.asin(-De(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(l,r)):(this._x=Math.atan2(-d,b),this._y=0);break;default:Me("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Pm.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Pm,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Lm.setFromEuler(this),this.setFromQuaternion(Lm,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Us.DEFAULT_ORDER="XYZ";var Aa=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Ux=0,Dm=new Z,oa=new os,Rs=new Je,cc=new Z,bo=new Z,Ox=new Z,Fx=new os,Nm=new Z(1,0,0),Um=new Z(0,1,0),Om=new Z(0,0,1),Fm={type:"added"},Bx={type:"removed"},la={type:"childadded",child:null},Sd={type:"childremoved",child:null},Bn=class i extends as{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ux++}),this.uuid=ss(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new Z,e=new Us,n=new os,s=new Z(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Je},normalMatrix:{value:new Pe}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Aa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return oa.setFromAxisAngle(t,e),this.quaternion.multiply(oa),this}rotateOnWorldAxis(t,e){return oa.setFromAxisAngle(t,e),this.quaternion.premultiply(oa),this}rotateX(t){return this.rotateOnAxis(Nm,t)}rotateY(t){return this.rotateOnAxis(Um,t)}rotateZ(t){return this.rotateOnAxis(Om,t)}translateOnAxis(t,e){return Dm.copy(t).applyQuaternion(this.quaternion),this.position.add(Dm.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Nm,t)}translateY(t){return this.translateOnAxis(Um,t)}translateZ(t){return this.translateOnAxis(Om,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Rs.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?cc.copy(t):cc.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Rs.lookAt(bo,cc,this.up):Rs.lookAt(cc,bo,this.up),this.quaternion.setFromRotationMatrix(Rs),s&&(Rs.extractRotation(s.matrixWorld),oa.setFromRotationMatrix(Rs),this.quaternion.premultiply(oa.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Ee("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Fm),la.child=t,this.dispatchEvent(la),la.child=null):Ee("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Bx),Sd.child=t,this.dispatchEvent(Sd),Sd.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Rs.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Rs.multiply(t.parent.matrixWorld)),t.applyMatrix4(Rs),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Fm),la.child=t,this.dispatchEvent(la),la.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bo,t,Ox),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bo,Fx,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,l=r.length;a<l;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(l=>({...l})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(l,u){return l[u.uuid]===void 0&&(l[u.uuid]=u.toJSON(t)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let u=l.shapes;if(Array.isArray(u))for(let h=0,d=u.length;h<d;h++){let S=u[h];r(t.shapes,S)}else r(t.shapes,u)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let u=0,h=this.material.length;u<h;u++)l.push(r(t.materials,this.material[u]));s.material=l}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){let u=this.animations[l];s.animations.push(r(t.animations,u))}}if(e){let l=a(t.geometries),u=a(t.materials),h=a(t.textures),d=a(t.images),S=a(t.shapes),g=a(t.skeletons),b=a(t.animations),w=a(t.nodes);l.length>0&&(n.geometries=l),u.length>0&&(n.materials=u),h.length>0&&(n.textures=h),d.length>0&&(n.images=d),S.length>0&&(n.shapes=S),g.length>0&&(n.skeletons=g),b.length>0&&(n.animations=b),w.length>0&&(n.nodes=w)}return n.object=s,n;function a(l){let u=[];for(let h in l){let d=l[h];delete d.metadata,u.push(d)}return u}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Bn.DEFAULT_UP=new Z(0,1,0);Bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Xi=class extends Bn{constructor(){super(),this.isGroup=!0,this.type="Group"}},kx={type:"move"},Ca=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,l=this._targetRay,u=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){a=!0;for(let N of t.hand.values()){let x=e.getJointPose(N,n),m=this._getHandJoint(h,N);x!==null&&(m.matrix.fromArray(x.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=x.radius),m.visible=x!==null}let d=h.joints["index-finger-tip"],S=h.joints["thumb-tip"],g=d.position.distanceTo(S.position),b=.02,w=.005;h.inputState.pinching&&g>b+w?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&g<=b-w&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else u!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(u.matrix.fromArray(r.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,r.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(r.linearVelocity)):u.hasLinearVelocity=!1,r.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(r.angularVelocity)):u.hasAngularVelocity=!1,u.eventsEnabled&&u.dispatchEvent({type:"gripUpdated",data:t,target:this})));l!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(kx)))}return l!==null&&(l.visible=s!==null),u!==null&&(u.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Xi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},q0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qs={h:0,s:0,l:0},uc={h:0,s:0,l:0};function Md(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var ve=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=bi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=qe.workingColorSpace){return this.r=t,this.g=e,this.b=n,qe.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=qe.workingColorSpace){if(t=Ef(t,1),e=De(e,0,1),n=De(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Md(a,r,t+1/3),this.g=Md(a,r,t),this.b=Md(a,r,t-1/3)}return qe.colorSpaceToWorking(this,s),this}setStyle(t,e=bi){function n(r){r!==void 0&&parseFloat(r)<1&&Me("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],l=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Me("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Me("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=bi){let n=q0[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Me("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ns(t.r),this.g=Ns(t.g),this.b=Ns(t.b),this}copyLinearToSRGB(t){return this.r=Sa(t.r),this.g=Sa(t.g),this.b=Sa(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=bi){return qe.workingToColorSpace(Qn.copy(this),t),Math.round(De(Qn.r*255,0,255))*65536+Math.round(De(Qn.g*255,0,255))*256+Math.round(De(Qn.b*255,0,255))}getHexString(t=bi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qe.workingColorSpace){qe.workingToColorSpace(Qn.copy(this),e);let n=Qn.r,s=Qn.g,r=Qn.b,a=Math.max(n,s,r),l=Math.min(n,s,r),u,h,d=(l+a)/2;if(l===a)u=0,h=0;else{let S=a-l;switch(h=d<=.5?S/(a+l):S/(2-a-l),a){case n:u=(s-r)/S+(s<r?6:0);break;case s:u=(r-n)/S+2;break;case r:u=(n-s)/S+4;break}u/=6}return t.h=u,t.s=h,t.l=d,t}getRGB(t,e=qe.workingColorSpace){return qe.workingToColorSpace(Qn.copy(this),e),t.r=Qn.r,t.g=Qn.g,t.b=Qn.b,t}getStyle(t=bi){qe.workingToColorSpace(Qn.copy(this),t);let e=Qn.r,n=Qn.g,s=Qn.b;return t!==bi?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(qs),this.setHSL(qs.h+t,qs.s+e,qs.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(qs),t.getHSL(uc);let n=Lo(qs.h,uc.h,e),s=Lo(qs.s,uc.s,e),r=Lo(qs.l,uc.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Qn=new ve;ve.NAMES=q0;var zo=class extends Bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Us,this.environmentIntensity=1,this.environmentRotation=new Us,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},zi=new Z,Is=new Z,bd=new Z,Ps=new Z,ca=new Z,ua=new Z,Bm=new Z,wd=new Z,Ed=new Z,Td=new Z,Ad=new on,Cd=new on,Rd=new on,js=class i{constructor(t=new Z,e=new Z,n=new Z){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),zi.subVectors(t,e),s.cross(zi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){zi.subVectors(s,e),Is.subVectors(n,e),bd.subVectors(t,e);let a=zi.dot(zi),l=zi.dot(Is),u=zi.dot(bd),h=Is.dot(Is),d=Is.dot(bd),S=a*h-l*l;if(S===0)return r.set(0,0,0),null;let g=1/S,b=(h*u-l*d)*g,w=(a*d-l*u)*g;return r.set(1-b-w,w,b)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Ps)===null?!1:Ps.x>=0&&Ps.y>=0&&Ps.x+Ps.y<=1}static getInterpolation(t,e,n,s,r,a,l,u){return this.getBarycoord(t,e,n,s,Ps)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(r,Ps.x),u.addScaledVector(a,Ps.y),u.addScaledVector(l,Ps.z),u)}static getInterpolatedAttribute(t,e,n,s,r,a){return Ad.setScalar(0),Cd.setScalar(0),Rd.setScalar(0),Ad.fromBufferAttribute(t,e),Cd.fromBufferAttribute(t,n),Rd.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Ad,r.x),a.addScaledVector(Cd,r.y),a.addScaledVector(Rd,r.z),a}static isFrontFacing(t,e,n,s){return zi.subVectors(n,e),Is.subVectors(t,e),zi.cross(Is).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return zi.subVectors(this.c,this.b),Is.subVectors(this.a,this.b),zi.cross(Is).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,l;ca.subVectors(s,n),ua.subVectors(r,n),wd.subVectors(t,n);let u=ca.dot(wd),h=ua.dot(wd);if(u<=0&&h<=0)return e.copy(n);Ed.subVectors(t,s);let d=ca.dot(Ed),S=ua.dot(Ed);if(d>=0&&S<=d)return e.copy(s);let g=u*S-d*h;if(g<=0&&u>=0&&d<=0)return a=u/(u-d),e.copy(n).addScaledVector(ca,a);Td.subVectors(t,r);let b=ca.dot(Td),w=ua.dot(Td);if(w>=0&&b<=w)return e.copy(r);let N=b*h-u*w;if(N<=0&&h>=0&&w<=0)return l=h/(h-w),e.copy(n).addScaledVector(ua,l);let x=d*w-b*S;if(x<=0&&S-d>=0&&b-w>=0)return Bm.subVectors(r,s),l=(S-d)/(S-d+(b-w)),e.copy(s).addScaledVector(Bm,l);let m=1/(x+N+g);return a=N*m,l=g*m,e.copy(n).addScaledVector(ca,a).addScaledVector(ua,l)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},oi=class{constructor(t=new Z(1/0,1/0,1/0),e=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Vi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Vi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Vi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,l=r.count;a<l;a++)t.isMesh===!0?t.getVertexPosition(a,Vi):Vi.fromBufferAttribute(r,a),Vi.applyMatrix4(t.matrixWorld),this.expandByPoint(Vi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),hc.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),hc.copy(n.boundingBox)),hc.applyMatrix4(t.matrixWorld),this.union(hc)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Vi),Vi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(wo),dc.subVectors(this.max,wo),ha.subVectors(t.a,wo),da.subVectors(t.b,wo),fa.subVectors(t.c,wo),Ys.subVectors(da,ha),Js.subVectors(fa,da),yr.subVectors(ha,fa);let e=[0,-Ys.z,Ys.y,0,-Js.z,Js.y,0,-yr.z,yr.y,Ys.z,0,-Ys.x,Js.z,0,-Js.x,yr.z,0,-yr.x,-Ys.y,Ys.x,0,-Js.y,Js.x,0,-yr.y,yr.x,0];return!Id(e,ha,da,fa,dc)||(e=[1,0,0,0,1,0,0,0,1],!Id(e,ha,da,fa,dc))?!1:(fc.crossVectors(Ys,Js),e=[fc.x,fc.y,fc.z],Id(e,ha,da,fa,dc))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Vi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Vi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ls[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ls[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ls[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ls[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ls[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ls[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ls[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ls[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ls),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ls=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],Vi=new Z,hc=new oi,ha=new Z,da=new Z,fa=new Z,Ys=new Z,Js=new Z,yr=new Z,wo=new Z,dc=new Z,fc=new Z,Sr=new Z;function Id(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Sr.fromArray(i,r);let l=s.x*Math.abs(Sr.x)+s.y*Math.abs(Sr.y)+s.z*Math.abs(Sr.z),u=t.dot(Sr),h=e.dot(Sr),d=n.dot(Sr);if(Math.max(-Math.max(u,h,d),Math.min(u,h,d))>l)return!1}return!0}var In=new Z,pc=new zt,$x=0,hn=class extends as{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$x++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=bf,this.updateRanges=[],this.gpuType=Li,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)pc.fromBufferAttribute(this,e),pc.applyMatrix3(t),this.setXY(e,pc.x,pc.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)In.fromBufferAttribute(this,e),In.applyMatrix3(t),this.setXYZ(e,In.x,In.y,In.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)In.fromBufferAttribute(this,e),In.applyMatrix4(t),this.setXYZ(e,In.x,In.y,In.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)In.fromBufferAttribute(this,e),In.applyNormalMatrix(t),this.setXYZ(e,In.x,In.y,In.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)In.fromBufferAttribute(this,e),In.transformDirection(t),this.setXYZ(e,In.x,In.y,In.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Gi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=cn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Gi(e,this.array)),e}setX(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Gi(e,this.array)),e}setY(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Gi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Gi(e,this.array)),e}setW(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=cn(e,this.array),n=cn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=cn(e,this.array),n=cn(n,this.array),s=cn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=cn(e,this.array),n=cn(n,this.array),s=cn(s,this.array),r=cn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Vo=class extends hn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ho=class extends hn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Mn=class extends hn{constructor(t,e,n){super(new Float32Array(t),e,n)}},zx=new oi,Eo=new Z,Pd=new Z,xi=class{constructor(t=new Z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):zx.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Eo.subVectors(t,this.center);let e=Eo.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Eo,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Pd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Eo.copy(t.center).add(Pd)),this.expandByPoint(Eo.copy(t.center).sub(Pd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Vx=0,Pi=new Je,Ld=new Bn,pa=new Z,Mi=new oi,To=new oi,On=new Z,bn=class i extends as{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vx++}),this.uuid=ss(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(dx(t)?Ho:Vo)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Pe().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Pi.makeRotationFromQuaternion(t),this.applyMatrix4(Pi),this}rotateX(t){return Pi.makeRotationX(t),this.applyMatrix4(Pi),this}rotateY(t){return Pi.makeRotationY(t),this.applyMatrix4(Pi),this}rotateZ(t){return Pi.makeRotationZ(t),this.applyMatrix4(Pi),this}translate(t,e,n){return Pi.makeTranslation(t,e,n),this.applyMatrix4(Pi),this}scale(t,e,n){return Pi.makeScale(t,e,n),this.applyMatrix4(Pi),this}lookAt(t){return Ld.lookAt(t),Ld.updateMatrix(),this.applyMatrix4(Ld.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pa).negate(),this.translate(pa.x,pa.y,pa.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Mn(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Me("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new oi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ee("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Mi.setFromBufferAttribute(r),this.morphTargetsRelative?(On.addVectors(this.boundingBox.min,Mi.min),this.boundingBox.expandByPoint(On),On.addVectors(this.boundingBox.max,Mi.max),this.boundingBox.expandByPoint(On)):(this.boundingBox.expandByPoint(Mi.min),this.boundingBox.expandByPoint(Mi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ee('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ee("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(t){let n=this.boundingSphere.center;if(Mi.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let l=e[r];To.setFromBufferAttribute(l),this.morphTargetsRelative?(On.addVectors(Mi.min,To.min),Mi.expandByPoint(On),On.addVectors(Mi.max,To.max),Mi.expandByPoint(On)):(Mi.expandByPoint(To.min),Mi.expandByPoint(To.max))}Mi.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)On.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(On));if(e)for(let r=0,a=e.length;r<a;r++){let l=e[r],u=this.morphTargetsRelative;for(let h=0,d=l.count;h<d;h++)On.fromBufferAttribute(l,h),u&&(pa.fromBufferAttribute(t,h),On.add(pa)),s=Math.max(s,n.distanceToSquared(On))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ee('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Ee("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new hn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let l=[],u=[];for(let R=0;R<n.count;R++)l[R]=new Z,u[R]=new Z;let h=new Z,d=new Z,S=new Z,g=new zt,b=new zt,w=new zt,N=new Z,x=new Z;function m(R,B,X){h.fromBufferAttribute(n,R),d.fromBufferAttribute(n,B),S.fromBufferAttribute(n,X),g.fromBufferAttribute(r,R),b.fromBufferAttribute(r,B),w.fromBufferAttribute(r,X),d.sub(h),S.sub(h),b.sub(g),w.sub(g);let Y=1/(b.x*w.y-w.x*b.y);isFinite(Y)&&(N.copy(d).multiplyScalar(w.y).addScaledVector(S,-b.y).multiplyScalar(Y),x.copy(S).multiplyScalar(b.x).addScaledVector(d,-w.x).multiplyScalar(Y),l[R].add(N),l[B].add(N),l[X].add(N),u[R].add(x),u[B].add(x),u[X].add(x))}let $=this.groups;$.length===0&&($=[{start:0,count:t.count}]);for(let R=0,B=$.length;R<B;++R){let X=$[R],Y=X.start,ot=X.count;for(let ht=Y,j=Y+ot;ht<j;ht+=3)m(t.getX(ht+0),t.getX(ht+1),t.getX(ht+2))}let H=new Z,D=new Z,T=new Z,k=new Z;function q(R){T.fromBufferAttribute(s,R),k.copy(T);let B=l[R];H.copy(B),H.sub(T.multiplyScalar(T.dot(B))).normalize(),D.crossVectors(k,B);let Y=D.dot(u[R])<0?-1:1;a.setXYZW(R,H.x,H.y,H.z,Y)}for(let R=0,B=$.length;R<B;++R){let X=$[R],Y=X.start,ot=X.count;for(let ht=Y,j=Y+ot;ht<j;ht+=3)q(t.getX(ht+0)),q(t.getX(ht+1)),q(t.getX(ht+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new hn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let g=0,b=n.count;g<b;g++)n.setXYZ(g,0,0,0);let s=new Z,r=new Z,a=new Z,l=new Z,u=new Z,h=new Z,d=new Z,S=new Z;if(t)for(let g=0,b=t.count;g<b;g+=3){let w=t.getX(g+0),N=t.getX(g+1),x=t.getX(g+2);s.fromBufferAttribute(e,w),r.fromBufferAttribute(e,N),a.fromBufferAttribute(e,x),d.subVectors(a,r),S.subVectors(s,r),d.cross(S),l.fromBufferAttribute(n,w),u.fromBufferAttribute(n,N),h.fromBufferAttribute(n,x),l.add(d),u.add(d),h.add(d),n.setXYZ(w,l.x,l.y,l.z),n.setXYZ(N,u.x,u.y,u.z),n.setXYZ(x,h.x,h.y,h.z)}else for(let g=0,b=e.count;g<b;g+=3)s.fromBufferAttribute(e,g+0),r.fromBufferAttribute(e,g+1),a.fromBufferAttribute(e,g+2),d.subVectors(a,r),S.subVectors(s,r),d.cross(S),n.setXYZ(g+0,d.x,d.y,d.z),n.setXYZ(g+1,d.x,d.y,d.z),n.setXYZ(g+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)On.fromBufferAttribute(t,e),On.normalize(),t.setXYZ(e,On.x,On.y,On.z)}toNonIndexed(){function t(l,u){let h=l.array,d=l.itemSize,S=l.normalized,g=new h.constructor(u.length*d),b=0,w=0;for(let N=0,x=u.length;N<x;N++){l.isInterleavedBufferAttribute?b=u[N]*l.data.stride+l.offset:b=u[N]*d;for(let m=0;m<d;m++)g[w++]=h[b++]}return new hn(g,d,S)}if(this.index===null)return Me("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let l in s){let u=s[l],h=t(u,n);e.setAttribute(l,h)}let r=this.morphAttributes;for(let l in r){let u=[],h=r[l];for(let d=0,S=h.length;d<S;d++){let g=h[d],b=t(g,n);u.push(b)}e.morphAttributes[l]=u}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let l=0,u=a.length;l<u;l++){let h=a[l];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let u=this.parameters;for(let h in u)u[h]!==void 0&&(t[h]=u[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let u in n){let h=n[u];t.data.attributes[u]=h.toJSON(t.data)}let s={},r=!1;for(let u in this.morphAttributes){let h=this.morphAttributes[u],d=[];for(let S=0,g=h.length;S<g;S++){let b=h[S];d.push(b.toJSON(t.data))}d.length>0&&(s[u]=d,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let l=this.boundingSphere;return l!==null&&(t.data.boundingSphere=l.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let h in s){let d=s[h];this.setAttribute(h,d.clone(e))}let r=t.morphAttributes;for(let h in r){let d=[],S=r[h];for(let g=0,b=S.length;g<b;g++)d.push(S[g].clone(e));this.morphAttributes[h]=d}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let h=0,d=a.length;h<d;h++){let S=a[h];this.addGroup(S.start,S.count,S.materialIndex)}let l=t.boundingBox;l!==null&&(this.boundingBox=l.clone());let u=t.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Zc=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=bf,this.updateRanges=[],this.version=0,this.uuid=ss()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ss()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ss()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},ai=new Z,qi=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)ai.fromBufferAttribute(this,e),ai.applyMatrix4(t),this.setXYZ(e,ai.x,ai.y,ai.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ai.fromBufferAttribute(this,e),ai.applyNormalMatrix(t),this.setXYZ(e,ai.x,ai.y,ai.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ai.fromBufferAttribute(this,e),ai.transformDirection(t),this.setXYZ(e,ai.x,ai.y,ai.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Gi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=cn(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=cn(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=cn(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=cn(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=cn(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Gi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Gi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Gi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Gi(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=cn(e,this.array),n=cn(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=cn(e,this.array),n=cn(n,this.array),s=cn(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=cn(e,this.array),n=cn(n,this.array),s=cn(s,this.array),r=cn(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){ko("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new hn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){ko("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Dd=new Z,Hx=new Z,Gx=new Pe,Hi=class{constructor(t=new Z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Dd.subVectors(n,e).cross(Hx.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Dd),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Gx.getNormalMatrix(t),s=this.coplanarPoint(Dd).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Wx=0,ls=class extends as{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wx++}),this.uuid=ss(),this.name="",this.type="Material",this.blending=Oa,this.side=ir,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=of,this.blendDst=lf,this.blendEquation=Lr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ve(0,0,0),this.blendAlpha=0,this.depthFunc=Ma,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=O0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Oc,this.stencilZFail=Oc,this.stencilZPass=Oc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Me(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Me(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let l in r){let u=r[l];delete u.metadata,a.push(u)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ve().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Hi().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new zt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new zt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Ds=new Z,Nd=new Z,mc=new Z,gc=new Z,Tr=class{constructor(t=new Z,e=new Z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ds)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ds.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ds.copy(this.origin).addScaledVector(this.direction,e),Ds.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Nd.copy(t).add(e).multiplyScalar(.5),mc.copy(e).sub(t).normalize(),gc.copy(this.origin).sub(Nd);let r=t.distanceTo(e)*.5,a=-this.direction.dot(mc),l=gc.dot(this.direction),u=-gc.dot(mc),h=gc.lengthSq(),d=Math.abs(1-a*a),S,g,b,w;if(d>0)if(S=a*u-l,g=a*l-u,w=r*d,S>=0)if(g>=-w)if(g<=w){let N=1/d;S*=N,g*=N,b=S*(S+a*g+2*l)+g*(a*S+g+2*u)+h}else g=r,S=Math.max(0,-(a*g+l)),b=-S*S+g*(g+2*u)+h;else g=-r,S=Math.max(0,-(a*g+l)),b=-S*S+g*(g+2*u)+h;else g<=-w?(S=Math.max(0,-(-a*r+l)),g=S>0?-r:Math.min(Math.max(-r,-u),r),b=-S*S+g*(g+2*u)+h):g<=w?(S=0,g=Math.min(Math.max(-r,-u),r),b=g*(g+2*u)+h):(S=Math.max(0,-(a*r+l)),g=S>0?r:Math.min(Math.max(-r,-u),r),b=-S*S+g*(g+2*u)+h);else g=a>0?-r:r,S=Math.max(0,-(a*g+l)),b=-S*S+g*(g+2*u)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,S),s&&s.copy(Nd).addScaledVector(mc,g),b}intersectSphere(t,e){if(t.radius<0)return null;Ds.subVectors(t.center,this.origin);let n=Ds.dot(this.direction),s=Ds.dot(Ds)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),l=n-a,u=n+a;return u<0?null:l<0?this.at(u,e):this.at(l,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,l,u,h=1/this.direction.x,d=1/this.direction.y,S=1/this.direction.z,g=this.origin;return h>=0?(n=(t.min.x-g.x)*h,s=(t.max.x-g.x)*h):(n=(t.max.x-g.x)*h,s=(t.min.x-g.x)*h),d>=0?(r=(t.min.y-g.y)*d,a=(t.max.y-g.y)*d):(r=(t.max.y-g.y)*d,a=(t.min.y-g.y)*d),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),S>=0?(l=(t.min.z-g.z)*S,u=(t.max.z-g.z)*S):(l=(t.max.z-g.z)*S,u=(t.min.z-g.z)*S),n>u||l>s)||((l>n||n!==n)&&(n=l),(u<s||s!==s)&&(s=u),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Ds)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,l=this.direction,u=l.x,h=l.y,d=l.z,S=t.x-a.x,g=t.y-a.y,b=t.z-a.z,w=e.x-a.x,N=e.y-a.y,x=e.z-a.z,m=n.x-a.x,$=n.y-a.y,H=n.z-a.z,D=Math.abs(u),T=Math.abs(h),k=Math.abs(d),q,R,B,X,Y,ot,ht,j,it,pt,_t,At;if(D>=T&&D>=k?(B=u,ot=S,it=w,At=m,u>=0?(q=h,R=d,X=g,Y=b,ht=N,j=x,pt=$,_t=H):(q=d,R=h,X=b,Y=g,ht=x,j=N,pt=H,_t=$)):T>=k?(B=h,ot=g,it=N,At=$,h>=0?(q=d,R=u,X=b,Y=S,ht=x,j=w,pt=H,_t=m):(q=u,R=d,X=S,Y=b,ht=w,j=x,pt=m,_t=H)):(B=d,ot=b,it=x,At=H,d>=0?(q=u,R=h,X=S,Y=g,ht=w,j=N,pt=m,_t=$):(q=h,R=u,X=g,Y=S,ht=N,j=w,pt=$,_t=m)),B===0)return null;let xt=q/B,Et=R/B,wt=1/B,kt=X-xt*ot,ee=Y-Et*ot,Ze=ht-xt*it,Ne=j-Et*it,We=pt-xt*At,yt=_t-Et*At,St=We*Ne-yt*Ze,Ut=kt*yt-ee*We,ue=Ze*ee-Ne*kt;if(s){if(St<0||Ut<0||ue<0)return null}else if((St<0||Ut<0||ue<0)&&(St>0||Ut>0||ue>0))return null;let jt=St+Ut+ue;if(jt===0)return null;let ge=wt*(St*ot+Ut*it+ue*At);return(jt>0?ge<0:ge>0)?null:this.at(ge/jt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ar=class extends ls{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Us,this.combine=wu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},km=new Je,Mr=new Tr,_c=new xi,$m=new Z,xc=new Z,vc=new Z,yc=new Z,Ud=new Z,Sc=new Z,zm=new Z,Mc=new Z,kn=class extends Bn{constructor(t=new bn,e=new Ar){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let l=this.morphTargetInfluences;if(r&&l){Sc.set(0,0,0);for(let u=0,h=r.length;u<h;u++){let d=l[u],S=r[u];d!==0&&(Ud.fromBufferAttribute(S,t),a?Sc.addScaledVector(Ud,d):Sc.addScaledVector(Ud.sub(e),d))}e.add(Sc)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),_c.copy(n.boundingSphere),_c.applyMatrix4(r),Mr.copy(t.ray).recast(t.near),!(_c.containsPoint(Mr.origin)===!1&&(Mr.intersectSphere(_c,$m)===null||Mr.origin.distanceToSquared($m)>(t.far-t.near)**2))&&(km.copy(r).invert(),Mr.copy(t.ray).applyMatrix4(km),!(n.boundingBox!==null&&Mr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Mr)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,l=r.index,u=r.attributes.position,h=r.attributes.uv,d=r.attributes.uv1,S=r.attributes.normal,g=r.groups,b=r.drawRange;if(l!==null)if(Array.isArray(a))for(let w=0,N=g.length;w<N;w++){let x=g[w],m=a[x.materialIndex],$=Math.max(x.start,b.start),H=Math.min(l.count,Math.min(x.start+x.count,b.start+b.count));for(let D=$,T=H;D<T;D+=3){let k=l.getX(D),q=l.getX(D+1),R=l.getX(D+2);s=bc(this,m,t,n,h,d,S,k,q,R),s&&(s.faceIndex=Math.floor(D/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{let w=Math.max(0,b.start),N=Math.min(l.count,b.start+b.count);for(let x=w,m=N;x<m;x+=3){let $=l.getX(x),H=l.getX(x+1),D=l.getX(x+2);s=bc(this,a,t,n,h,d,S,$,H,D),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}else if(u!==void 0)if(Array.isArray(a))for(let w=0,N=g.length;w<N;w++){let x=g[w],m=a[x.materialIndex],$=Math.max(x.start,b.start),H=Math.min(u.count,Math.min(x.start+x.count,b.start+b.count));for(let D=$,T=H;D<T;D+=3){let k=D,q=D+1,R=D+2;s=bc(this,m,t,n,h,d,S,k,q,R),s&&(s.faceIndex=Math.floor(D/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{let w=Math.max(0,b.start),N=Math.min(u.count,b.start+b.count);for(let x=w,m=N;x<m;x+=3){let $=x,H=x+1,D=x+2;s=bc(this,a,t,n,h,d,S,$,H,D),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}}};function Xx(i,t,e,n,s,r,a,l){let u;if(t.side===li?u=n.intersectTriangle(a,r,s,!0,l):u=n.intersectTriangle(s,r,a,t.side===ir,l),u===null)return null;Mc.copy(l),Mc.applyMatrix4(i.matrixWorld);let h=e.ray.origin.distanceTo(Mc);return h<e.near||h>e.far?null:{distance:h,point:Mc.clone(),object:i}}function bc(i,t,e,n,s,r,a,l,u,h){i.getVertexPosition(l,xc),i.getVertexPosition(u,vc),i.getVertexPosition(h,yc);let d=Xx(i,t,e,n,xc,vc,yc,zm);if(d){let S=new Z;js.getBarycoord(zm,xc,vc,yc,S),s&&(d.uv=js.getInterpolatedAttribute(s,l,u,h,S,new zt)),r&&(d.uv1=js.getInterpolatedAttribute(r,l,u,h,S,new zt)),a&&(d.normal=js.getInterpolatedAttribute(a,l,u,h,S,new Z),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));let g={a:l,b:u,c:h,normal:new Z,materialIndex:0};js.getNormal(xc,vc,yc,g.normal),d.face=g,d.barycoord=S}return d}var Go=class extends gi{constructor(t=null,e=1,n=1,s,r,a,l,u,h=Fn,d=Fn,S,g){super(null,a,l,u,h,d,s,r,S,g),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Wo=class extends hn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ma=new Je,Vm=new Je,wc=[],Hm=new oi,qx=new Je,Ao=new kn,Co=new xi,Xo=class extends kn{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Wo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,qx)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new oi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ma),Hm.copy(t.boundingBox).applyMatrix4(ma),this.boundingBox.union(Hm)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new xi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ma),Co.copy(t.boundingSphere).applyMatrix4(ma),this.boundingSphere.union(Co)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let l=0;l<n.length;l++)n[l]=s[a+l]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Ao.geometry=this.geometry,Ao.material=this.material,Ao.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Co.copy(this.boundingSphere),Co.applyMatrix4(n),t.ray.intersectsSphere(Co)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ma),Vm.multiplyMatrices(n,ma),Ao.matrixWorld=Vm,Ao.raycast(t,wc);for(let a=0,l=wc.length;a<l;a++){let u=wc[a];u.instanceId=r,u.object=this,e.push(u)}wc.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Wo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Go(new Float32Array(s*this.count),s,this.count,Pu,Li));let r=this.morphTexture.source.data.data,a=0;for(let h=0;h<n.length;h++)a+=n[h];let l=this.geometry.morphTargetsRelative?1:1-a,u=s*t;return r[u]=l,r.set(n,u+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},br=new xi,Yx=new zt(.5,.5),Ec=new Z,Ra=class{constructor(t=new Hi,e=new Hi,n=new Hi,s=new Hi,r=new Hi,a=new Hi){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let l=this.planes;return l[0].copy(t),l[1].copy(e),l[2].copy(n),l[3].copy(s),l[4].copy(r),l[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Wi,n=!1){let s=this.planes,r=t.elements,a=r[0],l=r[1],u=r[2],h=r[3],d=r[4],S=r[5],g=r[6],b=r[7],w=r[8],N=r[9],x=r[10],m=r[11],$=r[12],H=r[13],D=r[14],T=r[15];if(s[0].setComponents(h-a,b-d,m-w,T-$).normalize(),s[1].setComponents(h+a,b+d,m+w,T+$).normalize(),s[2].setComponents(h+l,b+S,m+N,T+H).normalize(),s[3].setComponents(h-l,b-S,m-N,T-H).normalize(),n)s[4].setComponents(u,g,x,D).normalize(),s[5].setComponents(h-u,b-g,m-x,T-D).normalize();else if(s[4].setComponents(h-u,b-g,m-x,T-D).normalize(),e===Wi)s[5].setComponents(h+u,b+g,m+x,T+D).normalize();else if(e===ba)s[5].setComponents(u,g,x,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),br.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),br.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(br)}intersectsSprite(t){br.center.set(0,0,0);let e=Yx.distanceTo(t.center);return br.radius=.7071067811865476+e,br.applyMatrix4(t.matrixWorld),this.intersectsSphere(br)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Ec.x=s.normal.x>0?t.max.x:t.min.x,Ec.y=s.normal.y>0?t.max.y:t.min.y,Ec.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ec)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Cr=class extends ls{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},jc=new Z,Kc=new Z,Gm=new Je,Ro=new Tr,Tc=new xi,Od=new Z,Wm=new Z,Qc=class extends Bn{constructor(t=new bn,e=new Cr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)jc.fromBufferAttribute(e,s-1),Kc.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=jc.distanceTo(Kc);t.setAttribute("lineDistance",new Mn(n,1))}else Me("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Tc.copy(n.boundingSphere),Tc.applyMatrix4(s),Tc.radius+=r,t.ray.intersectsSphere(Tc)===!1)return;Gm.copy(s).invert(),Ro.copy(t.ray).applyMatrix4(Gm);let l=r/((this.scale.x+this.scale.y+this.scale.z)/3),u=l*l,h=this.isLineSegments?2:1,d=n.index,g=n.attributes.position;if(d!==null){let b=Math.max(0,a.start),w=Math.min(d.count,a.start+a.count);for(let N=b,x=w-1;N<x;N+=h){let m=d.getX(N),$=d.getX(N+1),H=Ac(this,t,Ro,u,m,$,N);H&&e.push(H)}if(this.isLineLoop){let N=d.getX(w-1),x=d.getX(b),m=Ac(this,t,Ro,u,N,x,w-1);m&&e.push(m)}}else{let b=Math.max(0,a.start),w=Math.min(g.count,a.start+a.count);for(let N=b,x=w-1;N<x;N+=h){let m=Ac(this,t,Ro,u,N,N+1,N);m&&e.push(m)}if(this.isLineLoop){let N=Ac(this,t,Ro,u,w-1,b,w-1);N&&e.push(N)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}};function Ac(i,t,e,n,s,r,a){let l=i.geometry.attributes.position;if(jc.fromBufferAttribute(l,s),Kc.fromBufferAttribute(l,r),e.distanceSqToSegment(jc,Kc,Od,Wm)>n)return;Od.applyMatrix4(i.matrixWorld);let h=t.ray.origin.distanceTo(Od);if(!(h<t.near||h>t.far))return{distance:h,point:Wm.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var qo=class extends Qc{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},tu=class extends ls{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Xm=new Je,qd=new Tr,Cc=new xi,Rc=new Z,Rr=class extends Bn{constructor(t=new bn,e=new tu){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Cc.copy(n.boundingSphere),Cc.applyMatrix4(s),Cc.radius+=r,t.ray.intersectsSphere(Cc)===!1)return;Xm.copy(s).invert(),qd.copy(t.ray).applyMatrix4(Xm);let l=r/((this.scale.x+this.scale.y+this.scale.z)/3),u=l*l,h=n.index,S=n.attributes.position;if(h!==null){let g=Math.max(0,a.start),b=Math.min(h.count,a.start+a.count);for(let w=g,N=b;w<N;w++){let x=h.getX(w);Rc.fromBufferAttribute(S,x),qm(Rc,x,u,s,t,e,this)}}else{let g=Math.max(0,a.start),b=Math.min(S.count,a.start+a.count);for(let w=g,N=b;w<N;w++)Rc.fromBufferAttribute(S,w),qm(Rc,w,u,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}};function qm(i,t,e,n,s,r,a){let l=qd.distanceSqToPoint(i);if(l<e){let u=new Z;qd.closestPointToPoint(i,u),u.applyMatrix4(n);let h=s.ray.origin.distanceTo(u);if(h<s.near||h>s.far)return;r.push({distance:h,distanceToRay:Math.sqrt(l),point:u,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Yo=class extends gi{constructor(t=[],e=sr,n,s,r,a,l,u,h,d){super(t,e,n,s,r,a,l,u,h,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var Ks=class extends gi{constructor(t,e,n=Ji,s,r,a,l=Fn,u=Fn,h,d=rs,S=1){if(d!==rs&&d!==ar)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let g={width:t,height:e,depth:S};super(g,s,r,a,l,u,d,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ta(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},eu=class extends Ks{constructor(t,e=Ji,n=sr,s,r,a=Fn,l=Fn,u,h=rs){let d={width:t,height:t,depth:1},S=[d,d,d,d,d,d];super(t,t,e,n,s,r,a,l,u,h),this.image=S,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Jo=class extends gi{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Ia=class i extends bn{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let l=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let u=[],h=[],d=[],S=[],g=0,b=0;w("z","y","x",-1,-1,n,e,t,a,r,0),w("z","y","x",1,-1,n,e,-t,a,r,1),w("x","z","y",1,1,t,n,e,s,a,2),w("x","z","y",1,-1,t,n,-e,s,a,3),w("x","y","z",1,-1,t,e,n,s,r,4),w("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(u),this.setAttribute("position",new Mn(h,3)),this.setAttribute("normal",new Mn(d,3)),this.setAttribute("uv",new Mn(S,2));function w(N,x,m,$,H,D,T,k,q,R,B){let X=D/q,Y=T/R,ot=D/2,ht=T/2,j=k/2,it=q+1,pt=R+1,_t=0,At=0,xt=new Z;for(let Et=0;Et<pt;Et++){let wt=Et*Y-ht;for(let kt=0;kt<it;kt++){let ee=kt*X-ot;xt[N]=ee*$,xt[x]=wt*H,xt[m]=j,h.push(xt.x,xt.y,xt.z),xt[N]=0,xt[x]=0,xt[m]=k>0?1:-1,d.push(xt.x,xt.y,xt.z),S.push(kt/q),S.push(1-Et/R),_t+=1}}for(let Et=0;Et<R;Et++)for(let wt=0;wt<q;wt++){let kt=g+wt+it*Et,ee=g+wt+it*(Et+1),Ze=g+(wt+1)+it*(Et+1),Ne=g+(wt+1)+it*Et;u.push(kt,ee,Ne),u.push(ee,Ze,Ne),At+=6}l.addGroup(b,At,B),b+=At,g+=_t}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Zo=class i extends bn{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,l=0,u=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:l,thetaLength:u};let h=this;s=Math.floor(s),r=Math.floor(r);let d=[],S=[],g=[],b=[],w=0,N=[],x=n/2,m=0;$(),a===!1&&(t>0&&H(!0),e>0&&H(!1)),this.setIndex(d),this.setAttribute("position",new Mn(S,3)),this.setAttribute("normal",new Mn(g,3)),this.setAttribute("uv",new Mn(b,2));function $(){let D=new Z,T=new Z,k=0,q=(e-t)/n;for(let R=0;R<=r;R++){let B=[],X=R/r,Y=X*(e-t)+t;for(let ot=0;ot<=s;ot++){let ht=ot/s,j=ht*u+l,it=Math.sin(j),pt=Math.cos(j);T.x=Y*it,T.y=-X*n+x,T.z=Y*pt,S.push(T.x,T.y,T.z),D.set(it,q,pt).normalize(),g.push(D.x,D.y,D.z),b.push(ht,1-X),B.push(w++)}N.push(B)}for(let R=0;R<s;R++)for(let B=0;B<r;B++){let X=N[B][R],Y=N[B+1][R],ot=N[B+1][R+1],ht=N[B][R+1];(t>0||B!==0)&&(d.push(X,Y,ht),k+=3),(e>0||B!==r-1)&&(d.push(Y,ot,ht),k+=3)}h.addGroup(m,k,0),m+=k}function H(D){let T=w,k=new zt,q=new Z,R=0,B=D===!0?t:e,X=D===!0?1:-1;for(let ot=1;ot<=s;ot++)S.push(0,x*X,0),g.push(0,X,0),b.push(.5,.5),w++;let Y=w;for(let ot=0;ot<=s;ot++){let j=ot/s*u+l,it=Math.cos(j),pt=Math.sin(j);q.x=B*pt,q.y=x*X,q.z=B*it,S.push(q.x,q.y,q.z),g.push(0,X,0),k.x=it*.5+.5,k.y=pt*.5*X+.5,b.push(k.x,k.y),w++}for(let ot=0;ot<s;ot++){let ht=T+ot,j=Y+ot;D===!0?d.push(j,j+1,ht):d.push(j+1,j,ht),R+=3}h.addGroup(m,R,D===!0?1:2),m+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var wi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Me("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let l=0,u=r-1,h;for(;l<=u;)if(s=Math.floor(l+(u-l)/2),h=n[s]-a,h<0)l=s+1;else if(h>0)u=s-1;else{u=s;break}if(s=u,n[s]===a)return s/(r-1);let d=n[s],g=n[s+1]-d,b=(a-d)/g;return(s+b)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),l=this.getPoint(r),u=e||(a.isVector2?new zt:new Z);return u.copy(l).sub(a).normalize(),u}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new Z,s=[],r=[],a=[],l=new Z,u=new Je;for(let b=0;b<=t;b++){let w=b/t;s[b]=this.getTangentAt(w,new Z)}r[0]=new Z,a[0]=new Z;let h=Number.MAX_VALUE,d=Math.abs(s[0].x),S=Math.abs(s[0].y),g=Math.abs(s[0].z);d<=h&&(h=d,n.set(1,0,0)),S<=h&&(h=S,n.set(0,1,0)),g<=h&&n.set(0,0,1),l.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],l),a[0].crossVectors(s[0],r[0]);for(let b=1;b<=t;b++){if(r[b]=r[b-1].clone(),a[b]=a[b-1].clone(),l.crossVectors(s[b-1],s[b]),l.length()>Number.EPSILON){l.normalize();let w=Math.acos(De(s[b-1].dot(s[b]),-1,1));r[b].applyMatrix4(u.makeRotationAxis(l,w))}a[b].crossVectors(s[b],r[b])}if(e===!0){let b=Math.acos(De(r[0].dot(r[t]),-1,1));b/=t,s[0].dot(l.crossVectors(r[0],r[t]))>0&&(b=-b);for(let w=1;w<=t;w++)r[w].applyMatrix4(u.makeRotationAxis(s[w],b*w)),a[w].crossVectors(s[w],r[w])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Pa=class extends wi{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,l=!1,u=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=l,this.aRotation=u}getPoint(t,e=new zt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let l=this.aStartAngle+t*r,u=this.aX+this.xRadius*Math.cos(l),h=this.aY+this.yRadius*Math.sin(l);if(this.aRotation!==0){let d=Math.cos(this.aRotation),S=Math.sin(this.aRotation),g=u-this.aX,b=h-this.aY;u=g*d-b*S+this.aX,h=g*S+b*d+this.aY}return n.set(u,h)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},nu=class extends Pa{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Af(){let i=0,t=0,e=0,n=0;function s(r,a,l,u){i=r,t=l,e=-3*r+3*a-2*l-u,n=2*r-2*a+l+u}return{initCatmullRom:function(r,a,l,u,h){s(a,l,h*(l-r),h*(u-a))},initNonuniformCatmullRom:function(r,a,l,u,h,d,S){let g=(a-r)/h-(l-r)/(h+d)+(l-a)/d,b=(l-a)/d-(u-a)/(d+S)+(u-l)/S;g*=d,b*=d,s(a,l,g,b)},calc:function(r){let a=r*r,l=a*r;return i+t*r+e*a+n*l}}}var Ym=new Z,Jm=new Z,Fd=new Af,Bd=new Af,kd=new Af,iu=class extends wi{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new Z){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,l=Math.floor(a),u=a-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/r)+1)*r:u===0&&l===r-1&&(l=r-2,u=1);let h,d;this.closed||l>0?h=s[(l-1)%r]:(Jm.subVectors(s[0],s[1]).add(s[0]),h=Jm);let S=s[l%r],g=s[(l+1)%r];if(this.closed||l+2<r?d=s[(l+2)%r]:(Ym.subVectors(s[r-1],s[r-2]).add(s[r-1]),d=Ym),this.curveType==="centripetal"||this.curveType==="chordal"){let b=this.curveType==="chordal"?.5:.25,w=Math.pow(h.distanceToSquared(S),b),N=Math.pow(S.distanceToSquared(g),b),x=Math.pow(g.distanceToSquared(d),b);N<1e-4&&(N=1),w<1e-4&&(w=N),x<1e-4&&(x=N),Fd.initNonuniformCatmullRom(h.x,S.x,g.x,d.x,w,N,x),Bd.initNonuniformCatmullRom(h.y,S.y,g.y,d.y,w,N,x),kd.initNonuniformCatmullRom(h.z,S.z,g.z,d.z,w,N,x)}else this.curveType==="catmullrom"&&(Fd.initCatmullRom(h.x,S.x,g.x,d.x,this.tension),Bd.initCatmullRom(h.y,S.y,g.y,d.y,this.tension),kd.initCatmullRom(h.z,S.z,g.z,d.z,this.tension));return n.set(Fd.calc(u),Bd.calc(u),kd.calc(u)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Z().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Zm(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,l=i*i,u=i*l;return(2*e-2*n+r+a)*u+(-3*e+3*n-2*r-a)*l+r*i+e}function Jx(i,t){let e=1-i;return e*e*t}function Zx(i,t){return 2*(1-i)*i*t}function jx(i,t){return i*i*t}function Do(i,t,e,n){return Jx(i,t)+Zx(i,e)+jx(i,n)}function Kx(i,t){let e=1-i;return e*e*e*t}function Qx(i,t){let e=1-i;return 3*e*e*i*t}function tv(i,t){return 3*(1-i)*i*i*t}function ev(i,t){return i*i*i*t}function No(i,t,e,n,s){return Kx(i,t)+Qx(i,e)+tv(i,n)+ev(i,s)}var jo=class extends wi{constructor(t=new zt,e=new zt,n=new zt,s=new zt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new zt){let n=e,s=this.v0,r=this.v1,a=this.v2,l=this.v3;return n.set(No(t,s.x,r.x,a.x,l.x),No(t,s.y,r.y,a.y,l.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},su=class extends wi{constructor(t=new Z,e=new Z,n=new Z,s=new Z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Z){let n=e,s=this.v0,r=this.v1,a=this.v2,l=this.v3;return n.set(No(t,s.x,r.x,a.x,l.x),No(t,s.y,r.y,a.y,l.y),No(t,s.z,r.z,a.z,l.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ko=class extends wi{constructor(t=new zt,e=new zt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new zt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new zt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ru=class extends wi{constructor(t=new Z,e=new Z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new Z){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Z){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Qo=class extends wi{constructor(t=new zt,e=new zt,n=new zt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new zt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Do(t,s.x,r.x,a.x),Do(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},au=class extends wi{constructor(t=new Z,e=new Z,n=new Z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Z){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Do(t,s.x,r.x,a.x),Do(t,s.y,r.y,a.y),Do(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},tl=class extends wi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new zt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),l=r-a,u=s[a===0?a:a-1],h=s[a],d=s[a>s.length-2?s.length-1:a+1],S=s[a>s.length-3?s.length-1:a+2];return n.set(Zm(l,u.x,h.x,d.x,S.x),Zm(l,u.y,h.y,d.y,S.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new zt().fromArray(s))}return this}},Yd=Object.freeze({__proto__:null,ArcCurve:nu,CatmullRomCurve3:iu,CubicBezierCurve:jo,CubicBezierCurve3:su,EllipseCurve:Pa,LineCurve:Ko,LineCurve3:ru,QuadraticBezierCurve:Qo,QuadraticBezierCurve3:au,SplineCurve:tl}),ou=class extends wi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Yd[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,l=this.curves[r],u=l.getLength(),h=u===0?0:1-a/u;return l.getPointAt(h,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],l=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,u=a.getPoints(l);for(let h=0;h<u.length;h++){let d=u[h];n&&n.equals(d)||(e.push(d),n=d)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Yd[s.type]().fromJSON(s))}return this}},Ir=class extends ou{constructor(t){super(),this.type="Path",this.currentPoint=new zt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Ko(this.currentPoint.clone(),new zt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Qo(this.currentPoint.clone(),new zt(t,e),new zt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let l=new jo(this.currentPoint.clone(),new zt(t,e),new zt(n,s),new zt(r,a));return this.curves.push(l),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new tl(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let l=this.currentPoint.x,u=this.currentPoint.y;return this.absarc(t+l,e+u,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,l,u){let h=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(t+h,e+d,n,s,r,a,l,u),this}absellipse(t,e,n,s,r,a,l,u){let h=new Pa(t,e,n,s,r,a,l,u);if(this.curves.length>0){let S=h.getPoint(0);S.equals(this.currentPoint)||this.lineTo(S.x,S.y)}this.curves.push(h);let d=h.getPoint(1);return this.currentPoint.copy(d),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},La=class extends Ir{constructor(t){super(t),this.uuid=ss(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Ir().fromJSON(s))}return this}};function nv(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Y0(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let l,u,h;if(n&&(r=ov(i,t,r,e)),i.length>80*e){l=i[0],u=i[1];let d=l,S=u;for(let g=e;g<s;g+=e){let b=i[g],w=i[g+1];b<l&&(l=b),w<u&&(u=w),b>d&&(d=b),w>S&&(S=w)}h=Math.max(d-l,S-u),h=h!==0?32767/h:0}return el(r,a,e,l,u,h,0),a}function Y0(i,t,e,n,s){let r;if(s===xv(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=jm(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=jm(a/n|0,i[a],i[a+1],r);return r&&Da(r,r.next)&&(il(r),r=r.next),r}function Pr(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Da(e,e.next)||yn(e.prev,e,e.next)===0)){if(il(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function el(i,t,e,n,s,r,a){if(!i)return;!a&&r&&dv(i,n,s,r);let l=i;for(;i.prev!==i.next;){let u=i.prev,h=i.next;if(r?sv(i,n,s,r):iv(i)){t.push(u.i,i.i,h.i),il(i),i=h.next,l=h.next;continue}if(i=h,i===l){a?a===1?(i=rv(Pr(i),t),el(i,t,e,n,s,r,2)):a===2&&av(i,t,e,n,s,r):el(Pr(i),t,e,n,s,r,1);break}}}function iv(i){let t=i.prev,e=i,n=i.next;if(yn(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,l=t.y,u=e.y,h=n.y,d=Math.min(s,r,a),S=Math.min(l,u,h),g=Math.max(s,r,a),b=Math.max(l,u,h),w=n.next;for(;w!==t;){if(w.x>=d&&w.x<=g&&w.y>=S&&w.y<=b&&Io(s,l,r,u,a,h,w.x,w.y)&&yn(w.prev,w,w.next)>=0)return!1;w=w.next}return!0}function sv(i,t,e,n){let s=i.prev,r=i,a=i.next;if(yn(s,r,a)>=0)return!1;let l=s.x,u=r.x,h=a.x,d=s.y,S=r.y,g=a.y,b=Math.min(l,u,h),w=Math.min(d,S,g),N=Math.max(l,u,h),x=Math.max(d,S,g),m=Jd(b,w,t,e,n),$=Jd(N,x,t,e,n),H=i.prevZ,D=i.nextZ;for(;H&&H.z>=m&&D&&D.z<=$;){if(H.x>=b&&H.x<=N&&H.y>=w&&H.y<=x&&H!==s&&H!==a&&Io(l,d,u,S,h,g,H.x,H.y)&&yn(H.prev,H,H.next)>=0||(H=H.prevZ,D.x>=b&&D.x<=N&&D.y>=w&&D.y<=x&&D!==s&&D!==a&&Io(l,d,u,S,h,g,D.x,D.y)&&yn(D.prev,D,D.next)>=0))return!1;D=D.nextZ}for(;H&&H.z>=m;){if(H.x>=b&&H.x<=N&&H.y>=w&&H.y<=x&&H!==s&&H!==a&&Io(l,d,u,S,h,g,H.x,H.y)&&yn(H.prev,H,H.next)>=0)return!1;H=H.prevZ}for(;D&&D.z<=$;){if(D.x>=b&&D.x<=N&&D.y>=w&&D.y<=x&&D!==s&&D!==a&&Io(l,d,u,S,h,g,D.x,D.y)&&yn(D.prev,D,D.next)>=0)return!1;D=D.nextZ}return!0}function rv(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Da(n,s)&&Z0(n,e,e.next,s)&&nl(n,s)&&nl(s,n)&&(t.push(n.i,e.i,s.i),il(e),il(e.next),e=i=s),e=e.next}while(e!==i);return Pr(e)}function av(i,t,e,n,s,r){let a=i;do{let l=a.next.next;for(;l!==a.prev;){if(a.i!==l.i&&mv(a,l)){let u=j0(a,l);a=Pr(a,a.next),u=Pr(u,u.next),el(a,t,e,n,s,r,0),el(u,t,e,n,s,r,0);return}l=l.next}a=a.next}while(a!==i)}function ov(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let l=t[r]*n,u=r<a-1?t[r+1]*n:i.length,h=Y0(i,l,u,n,!1);h===h.next&&(h.steiner=!0),s.push(pv(h))}s.sort(lv);for(let r=0;r<s.length;r++)e=cv(s[r],e);return e}function lv(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function cv(i,t){let e=uv(i,t);if(!e)return t;let n=j0(e,i);return Pr(n,n.next),Pr(e,e.next)}function uv(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(Da(i,e))return e;do{if(Da(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let S=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(S<=n&&S>r&&(r=S,a=e.x<e.next.x?e:e.next,S===n))return a}e=e.next}while(e!==t);if(!a)return null;let l=a,u=a.x,h=a.y,d=1/0;e=a;do{if(n>=e.x&&e.x>=u&&n!==e.x&&J0(s<h?n:r,s,u,h,s<h?r:n,s,e.x,e.y)){let S=Math.abs(s-e.y)/(n-e.x);nl(e,i)&&(S<d||S===d&&(e.x>a.x||e.x===a.x&&hv(a,e)))&&(a=e,d=S)}e=e.next}while(e!==l);return a}function hv(i,t){return yn(i.prev,i,t.prev)<0&&yn(t.next,i,i.next)<0}function dv(i,t,e,n){let s=i;do s.z===0&&(s.z=Jd(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,fv(s)}function fv(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,l=0;for(let h=0;h<e&&(l++,a=a.nextZ,!!a);h++);let u=e;for(;l>0||u>0&&a;)l!==0&&(u===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,l--):(s=a,a=a.nextZ,u--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function Jd(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function pv(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function J0(i,t,e,n,s,r,a,l){return(s-a)*(t-l)>=(i-a)*(r-l)&&(i-a)*(n-l)>=(e-a)*(t-l)&&(e-a)*(r-l)>=(s-a)*(n-l)}function Io(i,t,e,n,s,r,a,l){return!(i===a&&t===l)&&J0(i,t,e,n,s,r,a,l)}function mv(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!gv(i,t)&&(nl(i,t)&&nl(t,i)&&_v(i,t)&&(yn(i.prev,i,t.prev)||yn(i,t.prev,t))||Da(i,t)&&yn(i.prev,i,i.next)>0&&yn(t.prev,t,t.next)>0)}function yn(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Da(i,t){return i.x===t.x&&i.y===t.y}function Z0(i,t,e,n){let s=Pc(yn(i,t,e)),r=Pc(yn(i,t,n)),a=Pc(yn(e,n,i)),l=Pc(yn(e,n,t));return!!(s!==r&&a!==l||s===0&&Ic(i,e,t)||r===0&&Ic(i,n,t)||a===0&&Ic(e,i,n)||l===0&&Ic(e,t,n))}function Ic(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Pc(i){return i>0?1:i<0?-1:0}function gv(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Z0(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function nl(i,t){return yn(i.prev,i,i.next)<0?yn(i,t,i.next)>=0&&yn(i,i.prev,t)>=0:yn(i,t,i.prev)<0||yn(i,i.next,t)<0}function _v(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function j0(i,t){let e=Zd(i.i,i.x,i.y),n=Zd(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function jm(i,t,e,n){let s=Zd(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function il(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Zd(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function xv(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var jd=class{static triangulate(t,e,n=2){return nv(t,e,n)}},wr=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Km(t),Qm(n,t);let a=t.length;e.forEach(Km);for(let u=0;u<e.length;u++)s.push(a),a+=e[u].length,Qm(n,e[u]);let l=jd.triangulate(n,s);for(let u=0;u<l.length;u+=3)r.push(l.slice(u,u+3));return r}};function Km(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Qm(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var sl=class i extends bn{constructor(t=new La([new zt(.5,.5),new zt(-.5,.5),new zt(-.5,-.5),new zt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let l=0,u=t.length;l<u;l++){let h=t[l];a(h)}this.setAttribute("position",new Mn(s,3)),this.setAttribute("uv",new Mn(r,2)),this.computeVertexNormals();function a(l){let u=[],h=e.curveSegments!==void 0?e.curveSegments:12,d=e.steps!==void 0?e.steps:1,S=e.depth!==void 0?e.depth:1,g=e.bevelEnabled!==void 0?e.bevelEnabled:!0,b=e.bevelThickness!==void 0?e.bevelThickness:.2,w=e.bevelSize!==void 0?e.bevelSize:b-.1,N=e.bevelOffset!==void 0?e.bevelOffset:0,x=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,$=e.UVGenerator!==void 0?e.UVGenerator:vv,H,D=!1,T,k,q,R;if(m){H=m.getSpacedPoints(d),D=!0,g=!1;let st=m.isCatmullRomCurve3?m.closed:!1;T=m.computeFrenetFrames(d,st),k=new Z,q=new Z,R=new Z}g||(x=0,b=0,w=0,N=0);let B=l.extractPoints(h),X=B.shape,Y=B.holes;if(!wr.isClockWise(X)){X=X.reverse();for(let st=0,Rt=Y.length;st<Rt;st++){let G=Y[st];wr.isClockWise(G)&&(Y[st]=G.reverse())}}function ht(st){let G=10000000000000001e-36,Lt=st[0];for(let Bt=1;Bt<=st.length;Bt++){let ce=Bt%st.length,fe=st[ce],de=fe.x-Lt.x,Ae=fe.y-Lt.y,J=de*de+Ae*Ae,Oe=Math.max(Math.abs(fe.x),Math.abs(fe.y),Math.abs(Lt.x),Math.abs(Lt.y)),Ue=G*Oe*Oe;if(J<=Ue){st.splice(ce,1),Bt--;continue}Lt=fe}}ht(X),Y.forEach(ht);let j=Y.length,it=X;for(let st=0;st<j;st++){let Rt=Y[st];X=X.concat(Rt)}function pt(st,Rt,G){return Rt||Ee("ExtrudeGeometry: vec does not exist"),st.clone().addScaledVector(Rt,G)}let _t=X.length;function At(st,Rt,G){let Lt,Bt,ce,fe=st.x-Rt.x,de=st.y-Rt.y,Ae=G.x-st.x,J=G.y-st.y,Oe=fe*fe+de*de,Ue=fe*J-de*Ae;if(Math.abs(Ue)>Number.EPSILON){let F=Math.sqrt(Oe),E=Math.sqrt(Ae*Ae+J*J),rt=Rt.x-de/F,ct=Rt.y+fe/F,vt=G.x-J/E,Dt=G.y+Ae/E,$t=((vt-rt)*J-(Dt-ct)*Ae)/(fe*J-de*Ae);Lt=rt+fe*$t-st.x,Bt=ct+de*$t-st.y;let gt=Lt*Lt+Bt*Bt;if(gt<=2)return new zt(Lt,Bt);ce=Math.sqrt(gt/2)}else{let F=!1;fe>Number.EPSILON?Ae>Number.EPSILON&&(F=!0):fe<-Number.EPSILON?Ae<-Number.EPSILON&&(F=!0):Math.sign(de)===Math.sign(J)&&(F=!0),F?(Lt=-de,Bt=fe,ce=Math.sqrt(Oe)):(Lt=fe,Bt=de,ce=Math.sqrt(Oe/2))}return new zt(Lt/ce,Bt/ce)}let xt=[];for(let st=0,Rt=it.length,G=Rt-1,Lt=st+1;st<Rt;st++,G++,Lt++)G===Rt&&(G=0),Lt===Rt&&(Lt=0),xt[st]=At(it[st],it[G],it[Lt]);let Et=[],wt,kt=xt.concat();for(let st=0,Rt=j;st<Rt;st++){let G=Y[st];wt=[];for(let Lt=0,Bt=G.length,ce=Bt-1,fe=Lt+1;Lt<Bt;Lt++,ce++,fe++)ce===Bt&&(ce=0),fe===Bt&&(fe=0),wt[Lt]=At(G[Lt],G[ce],G[fe]);Et.push(wt),kt=kt.concat(wt)}let ee;if(x===0)ee=wr.triangulateShape(it,Y);else{let st=[],Rt=[];for(let G=0;G<x;G++){let Lt=G/x,Bt=b*Math.cos(Lt*Math.PI/2),ce=w*Math.sin(Lt*Math.PI/2)+N;for(let fe=0,de=it.length;fe<de;fe++){let Ae=pt(it[fe],xt[fe],ce);Ut(Ae.x,Ae.y,-Bt),Lt===0&&st.push(Ae)}for(let fe=0,de=j;fe<de;fe++){let Ae=Y[fe];wt=Et[fe];let J=[];for(let Oe=0,Ue=Ae.length;Oe<Ue;Oe++){let F=pt(Ae[Oe],wt[Oe],ce);Ut(F.x,F.y,-Bt),Lt===0&&J.push(F)}Lt===0&&Rt.push(J)}}ee=wr.triangulateShape(st,Rt)}let Ze=ee.length,Ne=w+N;for(let st=0;st<_t;st++){let Rt=g?pt(X[st],kt[st],Ne):X[st];D?(q.copy(T.normals[0]).multiplyScalar(Rt.x),k.copy(T.binormals[0]).multiplyScalar(Rt.y),R.copy(H[0]).add(q).add(k),Ut(R.x,R.y,R.z)):Ut(Rt.x,Rt.y,0)}for(let st=1;st<=d;st++)for(let Rt=0;Rt<_t;Rt++){let G=g?pt(X[Rt],kt[Rt],Ne):X[Rt];D?(q.copy(T.normals[st]).multiplyScalar(G.x),k.copy(T.binormals[st]).multiplyScalar(G.y),R.copy(H[st]).add(q).add(k),Ut(R.x,R.y,R.z)):Ut(G.x,G.y,S/d*st)}for(let st=x-1;st>=0;st--){let Rt=st/x,G=b*Math.cos(Rt*Math.PI/2),Lt=w*Math.sin(Rt*Math.PI/2)+N;for(let Bt=0,ce=it.length;Bt<ce;Bt++){let fe=pt(it[Bt],xt[Bt],Lt);Ut(fe.x,fe.y,S+G)}for(let Bt=0,ce=Y.length;Bt<ce;Bt++){let fe=Y[Bt];wt=Et[Bt];for(let de=0,Ae=fe.length;de<Ae;de++){let J=pt(fe[de],wt[de],Lt);D?Ut(J.x,J.y+H[d-1].y,H[d-1].x+G):Ut(J.x,J.y,S+G)}}}We(),yt();function We(){let st=s.length/3;if(g){let Rt=0,G=_t*Rt;for(let Lt=0;Lt<Ze;Lt++){let Bt=ee[Lt];ue(Bt[2]+G,Bt[1]+G,Bt[0]+G)}Rt=d+x*2,G=_t*Rt;for(let Lt=0;Lt<Ze;Lt++){let Bt=ee[Lt];ue(Bt[0]+G,Bt[1]+G,Bt[2]+G)}}else{for(let Rt=0;Rt<Ze;Rt++){let G=ee[Rt];ue(G[2],G[1],G[0])}for(let Rt=0;Rt<Ze;Rt++){let G=ee[Rt];ue(G[0]+_t*d,G[1]+_t*d,G[2]+_t*d)}}n.addGroup(st,s.length/3-st,0)}function yt(){let st=s.length/3,Rt=0;St(it,Rt),Rt+=it.length;for(let G=0,Lt=Y.length;G<Lt;G++){let Bt=Y[G];St(Bt,Rt),Rt+=Bt.length}n.addGroup(st,s.length/3-st,1)}function St(st,Rt){let G=st.length;for(;--G>=0;){let Lt=G,Bt=G-1;Bt<0&&(Bt=st.length-1);for(let ce=0,fe=d+x*2;ce<fe;ce++){let de=_t*ce,Ae=_t*(ce+1),J=Rt+Lt+de,Oe=Rt+Bt+de,Ue=Rt+Bt+Ae,F=Rt+Lt+Ae;jt(J,Oe,Ue,F)}}}function Ut(st,Rt,G){u.push(st),u.push(Rt),u.push(G)}function ue(st,Rt,G){ge(st),ge(Rt),ge(G);let Lt=s.length/3,Bt=$.generateTopUV(n,s,Lt-3,Lt-2,Lt-1);Qt(Bt[0]),Qt(Bt[1]),Qt(Bt[2])}function jt(st,Rt,G,Lt){ge(st),ge(Rt),ge(Lt),ge(Rt),ge(G),ge(Lt);let Bt=s.length/3,ce=$.generateSideWallUV(n,s,Bt-6,Bt-3,Bt-2,Bt-1);Qt(ce[0]),Qt(ce[1]),Qt(ce[3]),Qt(ce[1]),Qt(ce[2]),Qt(ce[3])}function ge(st){s.push(u[st*3+0]),s.push(u[st*3+1]),s.push(u[st*3+2])}function Qt(st){r.push(st.x),r.push(st.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return yv(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let l=e[t.shapes[r]];n.push(l)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Yd[s.type]().fromJSON(s)),new i(n,t.options)}},vv={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],l=t[n*3],u=t[n*3+1],h=t[s*3],d=t[s*3+1];return[new zt(r,a),new zt(l,u),new zt(h,d)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],l=t[e*3+1],u=t[e*3+2],h=t[n*3],d=t[n*3+1],S=t[n*3+2],g=t[s*3],b=t[s*3+1],w=t[s*3+2],N=t[r*3],x=t[r*3+1],m=t[r*3+2];return Math.abs(l-d)<Math.abs(a-h)?[new zt(a,1-u),new zt(h,1-S),new zt(g,1-w),new zt(N,1-m)]:[new zt(l,1-u),new zt(d,1-S),new zt(b,1-w),new zt(x,1-m)]}};function yv(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var rl=class i extends bn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,l=Math.floor(n),u=Math.floor(s),h=l+1,d=u+1,S=t/l,g=e/u,b=[],w=[],N=[],x=[];for(let m=0;m<d;m++){let $=m*g-a;for(let H=0;H<h;H++){let D=H*S-r;w.push(D,-$,0),N.push(0,0,1),x.push(H/l),x.push(1-m/u)}}for(let m=0;m<u;m++)for(let $=0;$<l;$++){let H=$+h*m,D=$+h*(m+1),T=$+1+h*(m+1),k=$+1+h*m;b.push(H,D,k),b.push(D,T,k)}this.setIndex(b),this.setAttribute("position",new Mn(w,3)),this.setAttribute("normal",new Mn(N,3)),this.setAttribute("uv",new Mn(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var al=class extends bn{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],n=new Set,s=new Z,r=new Z;if(t.index!==null){let a=t.attributes.position,l=t.index,u=t.groups;u.length===0&&(u=[{start:0,count:l.count,materialIndex:0}]);for(let h=0,d=u.length;h<d;++h){let S=u[h],g=S.start,b=S.count;for(let w=g,N=g+b;w<N;w+=3)for(let x=0;x<3;x++){let m=l.getX(w+x),$=l.getX(w+(x+1)%3);s.fromBufferAttribute(a,m),r.fromBufferAttribute(a,$),t0(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{let a=t.attributes.position;for(let l=0,u=a.count/3;l<u;l++)for(let h=0;h<3;h++){let d=3*l+h,S=3*l+(h+1)%3;s.fromBufferAttribute(a,d),r.fromBufferAttribute(a,S),t0(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new Mn(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function t0(i,t,e){let n=`${i.x},${i.y},${i.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${i.x},${i.y},${i.z}`;return e.has(n)===!0||e.has(s)===!0?!1:(e.add(n),e.add(s),!0)}function Nr(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(e0(s))s.isRenderTargetTexture?(Me("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(e0(s[0])){let r=[];for(let a=0,l=s.length;a<l;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function ei(i){let t={};for(let e=0;e<i.length;e++){let n=Nr(i[e]);for(let s in n)t[s]=n[s]}return t}function e0(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Sv(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Cf(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:qe.workingColorSpace}var El={clone:Nr,merge:ei},Mv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,$n=class extends ls{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mv,this.fragmentShader=bv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Nr(t.uniforms),this.uniformsGroups=Sv(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new ve().setHex(s.value);break;case"v2":this.uniforms[n].value=new zt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new Z().fromArray(s.value);break;case"v4":this.uniforms[n].value=new on().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Pe().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Je().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},lu=class extends $n{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var ol=class extends ls{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hh,this.normalScale=new zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Us,this.combine=wu,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},cu=class extends ls{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=N0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},uu=class extends ls{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ga(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function $d(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Qs=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let l=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===l)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let l=e[1];t<l&&(n=2,r=l);for(let u=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===u)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let l=n+a>>>1;t<e[l]?a=l:n=l+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},hu=class extends Qs{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Gd,endingEnd:Gd}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,l=s[r],u=s[a];if(l===void 0)switch(this.getSettings_().endingStart){case Wd:r=t,l=2*e-n;break;case Xd:r=s.length-2,l=e+s[r]-s[r+1];break;default:r=t,l=n}if(u===void 0)switch(this.getSettings_().endingEnd){case Wd:a=t,u=2*n-e;break;case Xd:a=1,u=n+s[1]-s[0];break;default:a=t-1,u=e}let h=(n-e)*.5,d=this.valueSize;this._weightPrev=h/(e-l),this._weightNext=h/(u-n),this._offsetPrev=r*d,this._offsetNext=a*d}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,u=t*l,h=u-l,d=this._offsetPrev,S=this._offsetNext,g=this._weightPrev,b=this._weightNext,w=(n-e)/(s-e),N=w*w,x=N*w,m=-g*x+2*g*N-g*w,$=(1+g)*x+(-1.5-2*g)*N+(-.5+g)*w+1,H=(-1-b)*x+(1.5+b)*N+.5*w,D=b*x-b*N;for(let T=0;T!==l;++T)r[T]=m*a[d+T]+$*a[h+T]+H*a[u+T]+D*a[S+T];return r}},du=class extends Qs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,u=t*l,h=u-l,d=(n-e)/(s-e),S=1-d;for(let g=0;g!==l;++g)r[g]=a[h+g]*S+a[u+g]*d;return r}},fu=class extends Qs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},pu=class extends Qs{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,u=t*l,h=u-l,d=this.inTangents,S=this.outTangents;if(!d||!S){let w=(n-e)/(s-e),N=1-w;for(let x=0;x!==l;++x)r[x]=a[h+x]*N+a[u+x]*w;return r}let g=l*2,b=t-1;for(let w=0;w!==l;++w){let N=a[h+w],x=a[u+w],m=b*g+w*2,$=S[m],H=S[m+1],D=t*g+w*2,T=d[D],k=d[D+1],q=Ev(n,e,$,T,s);r[w]=K0(q,N,H,k,x)}return r}};function K0(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function wv(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Ev(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let l=K0(r,t,e,n,s)-i;if(Math.abs(l)<1e-10)break;let u=wv(r,t,e,n,s);if(Math.abs(u)<1e-10)break;r=Math.max(0,Math.min(1,r-l/u))}return r}var Ei=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ga(e,this.TimeBufferType),this.values=ga(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ga(t.times,Array),values:ga(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),$d(t.settings)&&(n.settings={inTangents:ga(t.settings.inTangents,Array),outTangents:ga(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new fu(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new du(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new hu(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new pu(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Uo:e=this.InterpolantFactoryMethodDiscrete;break;case Xc:e=this.InterpolantFactoryMethodLinear;break;case Uc:e=this.InterpolantFactoryMethodSmooth;break;case Hd:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Me("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Uo;case this.InterpolantFactoryMethodLinear:return Xc;case this.InterpolantFactoryMethodSmooth:return Uc;case this.InterpolantFactoryMethodBezier:return Hd}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;$d(this.settings)&&(n0(this.settings.inTangents,t),n0(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let l=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*l,a*l)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Ee("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ee("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let l=0;l!==r;l++){let u=n[l];if(typeof u=="number"&&isNaN(u)){Ee("KeyframeTrack: Time is not a valid number.",this,l,u),t=!1;break}if(a!==null&&a>u){Ee("KeyframeTrack: Out of order keys.",this,l,u,a),t=!1;break}a=u}if(s!==void 0&&fx(s))for(let l=0,u=s.length;l!==u;++l){let h=s[l];if(isNaN(h)){Ee("KeyframeTrack: Value is not a valid number.",this,l,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Uc,r=t.length-1,a=1;for(let l=1;l<r;++l){let u=!1,h=t[l],d=t[l+1];if(h!==d&&(l!==1||h!==t[0]))if(s)u=!0;else{let S=l*n,g=S-n,b=S+n;for(let w=0;w!==n;++w){let N=e[S+w];if(N!==e[g+w]||N!==e[b+w]){u=!0;break}}}if(u){if(l!==a){t[a]=t[l];let S=l*n,g=a*n;for(let b=0;b!==n;++b)e[g+b]=e[S+b]}++a}}if(r>0){t[a]=t[r];for(let l=r*n,u=a*n,h=0;h!==n;++h)e[u+h]=e[l+h];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,$d(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function n0(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Ei.prototype.ValueTypeName="";Ei.prototype.TimeBufferType=Float32Array;Ei.prototype.ValueBufferType=Float32Array;Ei.prototype.DefaultInterpolation=Xc;var tr=class extends Ei{constructor(t,e,n){super(t,e,n)}};tr.prototype.ValueTypeName="bool";tr.prototype.ValueBufferType=Array;tr.prototype.DefaultInterpolation=Uo;tr.prototype.InterpolantFactoryMethodLinear=void 0;tr.prototype.InterpolantFactoryMethodSmooth=void 0;var mu=class extends Ei{constructor(t,e,n,s){super(t,e,n,s)}};mu.prototype.ValueTypeName="color";var gu=class extends Ei{constructor(t,e,n,s){super(t,e,n,s)}};gu.prototype.ValueTypeName="number";var _u=class extends Qs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,u=(n-e)/(s-e),h=t*l;for(let d=h+l;h!==d;h+=4)os.slerpFlat(r,0,a,h-l,a,h,u);return r}},ll=class extends Ei{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new _u(this.times,this.values,this.getValueSize(),t)}};ll.prototype.ValueTypeName="quaternion";ll.prototype.InterpolantFactoryMethodSmooth=void 0;var er=class extends Ei{constructor(t,e,n){super(t,e,n)}};er.prototype.ValueTypeName="string";er.prototype.ValueBufferType=Array;er.prototype.DefaultInterpolation=Uo;er.prototype.InterpolantFactoryMethodLinear=void 0;er.prototype.InterpolantFactoryMethodSmooth=void 0;var xu=class extends Ei{constructor(t,e,n,s){super(t,e,n,s)}};xu.prototype.ValueTypeName="vector";var vu=class{constructor(t,e,n){let s=this,r=!1,a=0,l=0,u,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(d){l++,r===!1&&s.onStart!==void 0&&s.onStart(d,a,l),r=!0},this.itemEnd=function(d){a++,s.onProgress!==void 0&&s.onProgress(d,a,l),a===l&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),u?u(d):d},this.setURLModifier=function(d){return u=d,this},this.addHandler=function(d,S){return h.push(d,S),this},this.removeHandler=function(d){let S=h.indexOf(d);return S!==-1&&h.splice(S,2),this},this.getHandler=function(d){for(let S=0,g=h.length;S<g;S+=2){let b=h[S],w=h[S+1];if(b.global&&(b.lastIndex=0),b.test(d))return w}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Q0=new vu,yu=class{constructor(t){this.manager=t!==void 0?t:Q0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};yu.DEFAULT_MATERIAL_NAME="__DEFAULT";var cl=class extends Bn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ve(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},ul=class extends cl{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Bn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ve(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},zd=new Je,i0=new Z,s0=new Z,Su=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new zt(512,512),this.mapType=vi,this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ra,this._frameExtents=new zt(1,1),this._viewportCount=1,this._viewports=[new on(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;i0.setFromMatrixPosition(t.matrixWorld),e.position.copy(i0),s0.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(s0),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){zd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(zd,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,l=s?s.w/r.y:1,u=s?s.x/r.x:0,h=s?s.y/r.y:0;t.coordinateSystem===ba||t.reversedDepth?e.set(.5*a,0,0,.5*a+u,0,.5*l,0,.5*l+h,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+u,0,.5*l,0,.5*l+h,0,0,.5,.5,0,0,0,1),e.multiply(zd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Lc=new Z,Dc=new os,ns=new Z,hl=class extends Bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=Wi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Lc,Dc,ns),ns.x===1&&ns.y===1&&ns.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Lc,Dc,ns.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Lc,Dc,ns),ns.x===1&&ns.y===1&&ns.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Lc,Dc,ns.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Zs=new Z,r0=new zt,a0=new zt,ti=class extends hl{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ea*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Po*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ea*2*Math.atan(Math.tan(Po*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Zs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Zs.x,Zs.y).multiplyScalar(-t/Zs.z),Zs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zs.x,Zs.y).multiplyScalar(-t/Zs.z)}getViewSize(t,e){return this.getViewBounds(t,r0,a0),e.subVectors(a0,r0)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Po*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let u=a.fullWidth,h=a.fullHeight;r+=a.offsetX*s/u,e-=a.offsetY*n/h,s*=a.width/u,n*=a.height/h}let l=this.filmOffset;l!==0&&(r+=t*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Na=class extends hl{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,l=s+e,u=s-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,l-=d*this.view.offsetY,u=l-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,l,u,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Kd=class extends Su{constructor(){super(new Na(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},dl=class extends cl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Bn.DEFAULT_UP),this.updateMatrix(),this.target=new Bn,this.shadow=new Kd}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var fl=class extends bn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var _a=-90,xa=1,Mu=class extends Bn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new ti(_a,xa,t,e);s.layers=this.layers,this.add(s);let r=new ti(_a,xa,t,e);r.layers=this.layers,this.add(r);let a=new ti(_a,xa,t,e);a.layers=this.layers,this.add(a);let l=new ti(_a,xa,t,e);l.layers=this.layers,this.add(l);let u=new ti(_a,xa,t,e);u.layers=this.layers,this.add(u);let h=new ti(_a,xa,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,l,u]=e;for(let h of e)this.remove(h);if(t===Wi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(t===ba)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,l,u,h,d]=this.children,S=t.getRenderTarget(),g=t.getActiveCubeFace(),b=t.getActiveMipmapLevel(),w=t.xr.enabled;t.xr.enabled=!1;let N=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let x=!1;t.isWebGLRenderer===!0?x=t.state.buffers.depth.getReversed():x=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,3,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(n,4,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),n.texture.generateMipmaps=N,t.setRenderTarget(n,5,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,d),t.setRenderTarget(S,g,b),t.xr.enabled=w,n.texture.needsPMREMUpdate=!0}},bu=class extends ti{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Rf="\\[\\]\\.:\\/",Tv=new RegExp("["+Rf+"]","g"),If="[^"+Rf+"]",Av="[^"+Rf.replace("\\.","")+"]",Cv=/((?:WC+[\/:])*)/.source.replace("WC",If),Rv=/(WCOD+)?/.source.replace("WCOD",Av),Iv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",If),Pv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",If),Lv=new RegExp("^"+Cv+Rv+Iv+Pv+"$"),Dv=["material","materials","bones","map"],Qd=class{constructor(t,e,n){let s=n||gn.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},gn=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Tv,"")}static parseTrackName(t){let e=Lv.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Dv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let l=r[a];if(l.name===e||l.uuid===e)return l;let u=n(l.children);if(u)return u}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Me("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=e.objectIndex;switch(n){case"materials":if(!t.material){Ee("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ee("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ee("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===h){h=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ee("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ee("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Ee("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(h!==void 0){if(t[h]===void 0){Ee("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let a=t[s];if(a===void 0){let h=e.nodeName;Ee("PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",t);return}let l=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?l=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let u=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Ee("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ee("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}u=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(u=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(u=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[u],this.setValue=this.SetterByBindingTypeAndVersioning[u][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};gn.Composite=Qd;gn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};gn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};gn.prototype.GetterByBindingType=[gn.prototype._getValue_direct,gn.prototype._getValue_array,gn.prototype._getValue_arrayElement,gn.prototype._getValue_toArray];gn.prototype.SetterByBindingTypeAndVersioning=[[gn.prototype._setValue_direct,gn.prototype._setValue_direct_setNeedsUpdate,gn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[gn.prototype._setValue_array,gn.prototype._setValue_array_setNeedsUpdate,gn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[gn.prototype._setValue_arrayElement,gn.prototype._setValue_arrayElement_setNeedsUpdate,gn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[gn.prototype._setValue_fromArray,gn.prototype._setValue_fromArray_setNeedsUpdate,gn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var q1=new Float32Array(1);var nr=class extends Zc{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}};var o0=new Je,pl=class{constructor(t,e,n=0,s=1/0){this.ray=new Tr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Aa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Ee("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return o0.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(o0),this}intersectObject(t,e=!0,n=[]){return tf(t,this,n,e),n.sort(l0),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)tf(t[s],this,n,e);return n.sort(l0),n}};function l0(i,t){return i.distance-t.distance}function tf(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,l=r.length;a<l;a++)tf(r[a],t,e,!0)}}var ef=class i{static{i.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};var c0=new Z,Nc=new Z,va=new Z,ya=new Z,Vd=new Z,Nv=new Z,Uv=new Z,ml=class{constructor(t=new Z,e=new Z){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){c0.subVectors(t,this.start),Nc.subVectors(this.end,this.start);let n=Nc.dot(Nc);if(n===0)return 0;let r=Nc.dot(c0)/n;return e&&(r=De(r,0,1)),r}closestPointToPoint(t,e,n){let s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}distanceSqToLine3(t,e=Nv,n=Uv){let s=10000000000000001e-32,r,a,l=this.start,u=t.start,h=this.end,d=t.end;va.subVectors(h,l),ya.subVectors(d,u),Vd.subVectors(l,u);let S=va.dot(va),g=ya.dot(ya),b=ya.dot(Vd);if(S<=s&&g<=s)return e.copy(l),n.copy(u),e.sub(n),e.dot(e);if(S<=s)r=0,a=b/g,a=De(a,0,1);else{let w=va.dot(Vd);if(g<=s)a=0,r=De(-w/S,0,1);else{let N=va.dot(ya),x=S*g-N*N;x!==0?r=De((N*b-w*g)/x,0,1):r=0,a=(N*r+b)/g,a<0?(a=0,r=De(-w/S,0,1)):a>1&&(a=1,r=De((N-w)/S,0,1))}}return e.copy(l).addScaledVector(va,r),n.copy(u).addScaledVector(ya,a),e.distanceToSquared(n)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};function Pf(i,t,e,n){let s=Ov(n);switch(e){case Sf:return i*t;case Pu:return i*t/s.components*s.byteLength;case Lu:return i*t/s.components*s.byteLength;case or:return i*t*2/s.components*s.byteLength;case Du:return i*t*2/s.components*s.byteLength;case Mf:return i*t*3/s.components*s.byteLength;case Di:return i*t*4/s.components*s.byteLength;case Nu:return i*t*4/s.components*s.byteLength;case vl:case yl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Sl:case Ml:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ou:case Bu:return Math.max(i,16)*Math.max(t,8)/4;case Uu:case Fu:return Math.max(i,8)*Math.max(t,8)/2;case ku:case $u:case Vu:case Hu:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case zu:case bl:case Gu:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Wu:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Xu:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case qu:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Yu:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ju:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Zu:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ju:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ku:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Qu:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case th:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case eh:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case nh:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ih:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case sh:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case rh:case ah:case oh:return Math.ceil(i/4)*Math.ceil(t/4)*16;case lh:case ch:return Math.ceil(i/4)*Math.ceil(t/4)*8;case wl:case uh:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ov(i){switch(i){case vi:case _f:return{byteLength:1,components:1};case Fa:case xf:case Zi:return{byteLength:2,components:1};case Ru:case Iu:return{byteLength:2,components:4};case Ji:case Cu:case Li:return{byteLength:4,components:1};case vf:case yf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Me("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Sg(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Bv(i){let t=new WeakMap;function e(l,u){let h=l.array,d=l.usage,S=h.byteLength,g=i.createBuffer();i.bindBuffer(u,g),i.bufferData(u,h,d),l.onUploadCallback();let b;if(h instanceof Float32Array)b=i.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)b=i.HALF_FLOAT;else if(h instanceof Uint16Array)l.isFloat16BufferAttribute?b=i.HALF_FLOAT:b=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)b=i.SHORT;else if(h instanceof Uint32Array)b=i.UNSIGNED_INT;else if(h instanceof Int32Array)b=i.INT;else if(h instanceof Int8Array)b=i.BYTE;else if(h instanceof Uint8Array)b=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)b=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:b,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version,size:S}}function n(l,u,h){let d=u.array,S=u.updateRanges;if(i.bindBuffer(h,l),S.length===0)i.bufferSubData(h,0,d);else{S.sort((b,w)=>b.start-w.start);let g=0;for(let b=1;b<S.length;b++){let w=S[g],N=S[b];N.start<=w.start+w.count+1?w.count=Math.max(w.count,N.start+N.count-w.start):(++g,S[g]=N)}S.length=g+1;for(let b=0,w=S.length;b<w;b++){let N=S[b];i.bufferSubData(h,N.start*d.BYTES_PER_ELEMENT,d,N.start,N.count)}u.clearUpdateRanges()}u.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),t.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);let u=t.get(l);u&&(i.deleteBuffer(u.buffer),t.delete(l))}function a(l,u){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){let d=t.get(l);(!d||d.version<l.version)&&t.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}let h=t.get(l);if(h===void 0)t.set(l,e(l,u));else if(h.version<l.version){if(h.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,l,u),h.version=l.version}}return{get:s,remove:r,update:a}}var kv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$v=`#ifdef USE_ALPHAHASH
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
#endif`,zv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wv=`#ifdef USE_AOMAP
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
#endif`,Xv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qv=`#ifdef USE_BATCHING
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
#endif`,Yv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Jv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Kv=`#ifdef USE_IRIDESCENCE
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
#endif`,Qv=`#ifdef USE_BUMPMAP
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
#endif`,ty=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ey=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ny=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,iy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ry=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ay=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,oy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,ly=`#define PI 3.141592653589793
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
} // validated`,cy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,uy=`vec3 transformedNormal = objectNormal;
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
#endif`,hy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,py=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,my="gl_FragColor = linearToOutputTexel( gl_FragColor );",gy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_y=`#ifdef USE_ENVMAP
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
#endif`,xy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,vy=`#ifdef USE_ENVMAP
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
#endif`,yy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sy=`#ifdef USE_ENVMAP
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
#endif`,My=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,by=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ey=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ty=`#ifdef USE_GRADIENTMAP
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
}`,Ay=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Cy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ry=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Iy=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Py=`#ifdef USE_ENVMAP
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
#endif`,Ly=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Dy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ny=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Uy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Oy=`PhysicalMaterial material;
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
#endif`,Fy=`uniform sampler2D dfgLUT;
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
}`,By=`
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
#endif`,ky=`#if defined( RE_IndirectDiffuse )
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
#endif`,$y=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zy=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Vy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Xy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Jy=`#if defined( USE_POINTS_UV )
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
#endif`,Zy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ky=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Qy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,eS=`#ifdef USE_MORPHTARGETS
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
#endif`,nS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,sS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,rS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,aS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,lS=`#ifdef USE_NORMALMAP
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
#endif`,cS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,uS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,mS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_S=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,SS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,MS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,wS=`float getShadowMask() {
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
}`,ES=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,TS=`#ifdef USE_SKINNING
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
#endif`,AS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,CS=`#ifdef USE_SKINNING
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
#endif`,RS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,IS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,PS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,LS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,DS=`#ifdef USE_TRANSMISSION
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
#endif`,NS=`#ifdef USE_TRANSMISSION
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
#endif`,US=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,OS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,FS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,BS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,kS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$S=`uniform sampler2D t2D;
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
}`,zS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,VS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,HS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,GS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WS=`#include <common>
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
}`,XS=`#if DEPTH_PACKING == 3200
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
}`,qS=`#define DISTANCE
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
}`,YS=`#define DISTANCE
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
}`,JS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ZS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jS=`uniform float scale;
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
}`,KS=`uniform vec3 diffuse;
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
}`,QS=`#include <common>
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
}`,tM=`uniform vec3 diffuse;
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
}`,eM=`#define LAMBERT
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
}`,nM=`#define LAMBERT
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
}`,iM=`#define MATCAP
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
}`,sM=`#define MATCAP
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
}`,rM=`#define NORMAL
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
}`,aM=`#define NORMAL
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
}`,oM=`#define PHONG
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
}`,lM=`#define PHONG
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
}`,cM=`#define STANDARD
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
}`,uM=`#define STANDARD
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
}`,hM=`#define TOON
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
}`,dM=`#define TOON
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
}`,fM=`uniform float size;
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
}`,pM=`uniform vec3 diffuse;
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
}`,mM=`#include <common>
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
}`,gM=`uniform vec3 color;
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
}`,_M=`uniform float rotation;
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
}`,xM=`uniform vec3 diffuse;
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
}`,Be={alphahash_fragment:kv,alphahash_pars_fragment:$v,alphamap_fragment:zv,alphamap_pars_fragment:Vv,alphatest_fragment:Hv,alphatest_pars_fragment:Gv,aomap_fragment:Wv,aomap_pars_fragment:Xv,batching_pars_vertex:qv,batching_vertex:Yv,begin_vertex:Jv,beginnormal_vertex:Zv,bsdfs:jv,iridescence_fragment:Kv,bumpmap_pars_fragment:Qv,clipping_planes_fragment:ty,clipping_planes_pars_fragment:ey,clipping_planes_pars_vertex:ny,clipping_planes_vertex:iy,color_fragment:sy,color_pars_fragment:ry,color_pars_vertex:ay,color_vertex:oy,common:ly,cube_uv_reflection_fragment:cy,defaultnormal_vertex:uy,displacementmap_pars_vertex:hy,displacementmap_vertex:dy,emissivemap_fragment:fy,emissivemap_pars_fragment:py,colorspace_fragment:my,colorspace_pars_fragment:gy,envmap_fragment:_y,envmap_common_pars_fragment:xy,envmap_pars_fragment:vy,envmap_pars_vertex:yy,envmap_physical_pars_fragment:Py,envmap_vertex:Sy,fog_vertex:My,fog_pars_vertex:by,fog_fragment:wy,fog_pars_fragment:Ey,gradientmap_pars_fragment:Ty,lightmap_pars_fragment:Ay,lights_lambert_fragment:Cy,lights_lambert_pars_fragment:Ry,lights_pars_begin:Iy,lights_toon_fragment:Ly,lights_toon_pars_fragment:Dy,lights_phong_fragment:Ny,lights_phong_pars_fragment:Uy,lights_physical_fragment:Oy,lights_physical_pars_fragment:Fy,lights_fragment_begin:By,lights_fragment_maps:ky,lights_fragment_end:$y,lightprobes_pars_fragment:zy,logdepthbuf_fragment:Vy,logdepthbuf_pars_fragment:Hy,logdepthbuf_pars_vertex:Gy,logdepthbuf_vertex:Wy,map_fragment:Xy,map_pars_fragment:qy,map_particle_fragment:Yy,map_particle_pars_fragment:Jy,metalnessmap_fragment:Zy,metalnessmap_pars_fragment:jy,morphinstance_vertex:Ky,morphcolor_vertex:Qy,morphnormal_vertex:tS,morphtarget_pars_vertex:eS,morphtarget_vertex:nS,normal_fragment_begin:iS,normal_fragment_maps:sS,normal_pars_fragment:rS,normal_pars_vertex:aS,normal_vertex:oS,normalmap_pars_fragment:lS,clearcoat_normal_fragment_begin:cS,clearcoat_normal_fragment_maps:uS,clearcoat_pars_fragment:hS,iridescence_pars_fragment:dS,opaque_fragment:fS,packing:pS,premultiplied_alpha_fragment:mS,project_vertex:gS,dithering_fragment:_S,dithering_pars_fragment:xS,roughnessmap_fragment:vS,roughnessmap_pars_fragment:yS,shadowmap_pars_fragment:SS,shadowmap_pars_vertex:MS,shadowmap_vertex:bS,shadowmask_pars_fragment:wS,skinbase_vertex:ES,skinning_pars_vertex:TS,skinning_vertex:AS,skinnormal_vertex:CS,specularmap_fragment:RS,specularmap_pars_fragment:IS,tonemapping_fragment:PS,tonemapping_pars_fragment:LS,transmission_fragment:DS,transmission_pars_fragment:NS,uv_pars_fragment:US,uv_pars_vertex:OS,uv_vertex:FS,worldpos_vertex:BS,background_vert:kS,background_frag:$S,backgroundCube_vert:zS,backgroundCube_frag:VS,cube_vert:HS,cube_frag:GS,depth_vert:WS,depth_frag:XS,distance_vert:qS,distance_frag:YS,equirect_vert:JS,equirect_frag:ZS,linedashed_vert:jS,linedashed_frag:KS,meshbasic_vert:QS,meshbasic_frag:tM,meshlambert_vert:eM,meshlambert_frag:nM,meshmatcap_vert:iM,meshmatcap_frag:sM,meshnormal_vert:rM,meshnormal_frag:aM,meshphong_vert:oM,meshphong_frag:lM,meshphysical_vert:cM,meshphysical_frag:uM,meshtoon_vert:hM,meshtoon_frag:dM,points_vert:fM,points_frag:pM,shadow_vert:mM,shadow_frag:gM,sprite_vert:_M,sprite_frag:xM},Wt={common:{diffuse:{value:new ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Pe}},envmap:{envMap:{value:null},envMapRotation:{value:new Pe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Pe},normalScale:{value:new zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Z},probesMax:{value:new Z},probesResolution:{value:new Z}},points:{diffuse:{value:new ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0},uvTransform:{value:new Pe}},sprite:{diffuse:{value:new ve(16777215)},opacity:{value:1},center:{value:new zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0}}},ci={basic:{uniforms:ei([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:ei([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,Wt.lights,{emissive:{value:new ve(0)},envMapIntensity:{value:1}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:ei([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,Wt.lights,{emissive:{value:new ve(0)},specular:{value:new ve(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:ei([Wt.common,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.roughnessmap,Wt.metalnessmap,Wt.fog,Wt.lights,{emissive:{value:new ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:ei([Wt.common,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.gradientmap,Wt.fog,Wt.lights,{emissive:{value:new ve(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:ei([Wt.common,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:ei([Wt.points,Wt.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:ei([Wt.common,Wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:ei([Wt.common,Wt.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:ei([Wt.common,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:ei([Wt.sprite,Wt.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new Pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Pe}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distance:{uniforms:ei([Wt.common,Wt.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distance_vert,fragmentShader:Be.distance_frag},shadow:{uniforms:ei([Wt.lights,Wt.fog,{color:{value:new ve(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};ci.physical={uniforms:ei([ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Pe},clearcoatNormalScale:{value:new zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Pe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Pe},sheen:{value:0},sheenColor:{value:new ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Pe},transmissionSamplerSize:{value:new zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Pe},attenuationDistance:{value:0},attenuationColor:{value:new ve(0)},specularColor:{value:new ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Pe},anisotropyVector:{value:new zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Pe}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};var ph={r:0,b:0,g:0},vM=new Je,Mg=new Pe;Mg.set(-1,0,0,0,1,0,0,0,1);function yM(i,t,e,n,s,r){let a=new ve(0),l=s===!0?0:1,u,h,d=null,S=0,g=null;function b($){let H=$.isScene===!0?$.background:null;if(H&&H.isTexture){let D=$.backgroundBlurriness>0;H=t.get(H,D)}return H}function w($){let H=!1,D=b($);D===null?x(a,l):D&&D.isColor&&(x(D,1),H=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?e.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||H)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function N($,H){let D=b(H);D&&(D.isCubeTexture||D.mapping===_l)?(h===void 0&&(h=new kn(new Ia(1,1,1),new $n({name:"BackgroundCubeMaterial",uniforms:Nr(ci.backgroundCube.uniforms),vertexShader:ci.backgroundCube.vertexShader,fragmentShader:ci.backgroundCube.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,k,q){this.matrixWorld.copyPosition(q.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=D,h.material.uniforms.backgroundBlurriness.value=H.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=H.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(vM.makeRotationFromEuler(H.backgroundRotation)).transpose(),D.isCubeTexture&&D.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(Mg),h.material.toneMapped=qe.getTransfer(D.colorSpace)!==an,(d!==D||S!==D.version||g!==i.toneMapping)&&(h.material.needsUpdate=!0,d=D,S=D.version,g=i.toneMapping),h.layers.enableAll(),$.unshift(h,h.geometry,h.material,0,0,null)):D&&D.isTexture&&(u===void 0&&(u=new kn(new rl(2,2),new $n({name:"BackgroundMaterial",uniforms:Nr(ci.background.uniforms),vertexShader:ci.background.vertexShader,fragmentShader:ci.background.fragmentShader,side:ir,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(u)),u.material.uniforms.t2D.value=D,u.material.uniforms.backgroundIntensity.value=H.backgroundIntensity,u.material.toneMapped=qe.getTransfer(D.colorSpace)!==an,D.matrixAutoUpdate===!0&&D.updateMatrix(),u.material.uniforms.uvTransform.value.copy(D.matrix),(d!==D||S!==D.version||g!==i.toneMapping)&&(u.material.needsUpdate=!0,d=D,S=D.version,g=i.toneMapping),u.layers.enableAll(),$.unshift(u,u.geometry,u.material,0,0,null))}function x($,H){$.getRGB(ph,Cf(i)),e.buffers.color.setClear(ph.r,ph.g,ph.b,H,r)}function m(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return a},setClearColor:function($,H=1){a.set($),l=H,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function($){l=$,x(a,l)},render:w,addToRenderList:N,dispose:m}}function SM(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=g(null),r=s,a=!1;function l(Y,ot,ht,j,it){let pt=!1,_t=S(Y,j,ht,ot);r!==_t&&(r=_t,h(r.object)),pt=b(Y,j,ht,it),pt&&w(Y,j,ht,it),it!==null&&t.update(it,i.ELEMENT_ARRAY_BUFFER),(pt||a)&&(a=!1,D(Y,ot,ht,j),it!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(it).buffer))}function u(){return i.createVertexArray()}function h(Y){return i.bindVertexArray(Y)}function d(Y){return i.deleteVertexArray(Y)}function S(Y,ot,ht,j){let it=j.wireframe===!0,pt=n[ot.id];pt===void 0&&(pt={},n[ot.id]=pt);let _t=Y.isInstancedMesh===!0?Y.id:0,At=pt[_t];At===void 0&&(At={},pt[_t]=At);let xt=At[ht.id];xt===void 0&&(xt={},At[ht.id]=xt);let Et=xt[it];return Et===void 0&&(Et=g(u()),xt[it]=Et),Et}function g(Y){let ot=[],ht=[],j=[];for(let it=0;it<e;it++)ot[it]=0,ht[it]=0,j[it]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ot,enabledAttributes:ht,attributeDivisors:j,object:Y,attributes:{},index:null}}function b(Y,ot,ht,j){let it=r.attributes,pt=ot.attributes,_t=0,At=ht.getAttributes();for(let xt in At)if(At[xt].location>=0){let wt=it[xt],kt=pt[xt];if(kt===void 0&&(xt==="instanceMatrix"&&Y.instanceMatrix&&(kt=Y.instanceMatrix),xt==="instanceColor"&&Y.instanceColor&&(kt=Y.instanceColor)),wt===void 0||wt.attribute!==kt||kt&&wt.data!==kt.data)return!0;_t++}return r.attributesNum!==_t||r.index!==j}function w(Y,ot,ht,j){let it={},pt=ot.attributes,_t=0,At=ht.getAttributes();for(let xt in At)if(At[xt].location>=0){let wt=pt[xt];wt===void 0&&(xt==="instanceMatrix"&&Y.instanceMatrix&&(wt=Y.instanceMatrix),xt==="instanceColor"&&Y.instanceColor&&(wt=Y.instanceColor));let kt={};kt.attribute=wt,wt&&wt.data&&(kt.data=wt.data),it[xt]=kt,_t++}r.attributes=it,r.attributesNum=_t,r.index=j}function N(){let Y=r.newAttributes;for(let ot=0,ht=Y.length;ot<ht;ot++)Y[ot]=0}function x(Y){m(Y,0)}function m(Y,ot){let ht=r.newAttributes,j=r.enabledAttributes,it=r.attributeDivisors;ht[Y]=1,j[Y]===0&&(i.enableVertexAttribArray(Y),j[Y]=1),it[Y]!==ot&&(i.vertexAttribDivisor(Y,ot),it[Y]=ot)}function $(){let Y=r.newAttributes,ot=r.enabledAttributes;for(let ht=0,j=ot.length;ht<j;ht++)ot[ht]!==Y[ht]&&(i.disableVertexAttribArray(ht),ot[ht]=0)}function H(Y,ot,ht,j,it,pt,_t){_t===!0?i.vertexAttribIPointer(Y,ot,ht,it,pt):i.vertexAttribPointer(Y,ot,ht,j,it,pt)}function D(Y,ot,ht,j){N();let it=j.attributes,pt=ht.getAttributes(),_t=ot.defaultAttributeValues;for(let At in pt){let xt=pt[At];if(xt.location>=0){let Et=it[At];if(Et===void 0&&(At==="instanceMatrix"&&Y.instanceMatrix&&(Et=Y.instanceMatrix),At==="instanceColor"&&Y.instanceColor&&(Et=Y.instanceColor)),Et!==void 0){let wt=Et.normalized,kt=Et.itemSize,ee=t.get(Et);if(ee===void 0)continue;let Ze=ee.buffer,Ne=ee.type,We=ee.bytesPerElement,yt=Ne===i.INT||Ne===i.UNSIGNED_INT||Et.gpuType===Cu;if(Et.isInterleavedBufferAttribute){let St=Et.data,Ut=St.stride,ue=Et.offset;if(St.isInstancedInterleavedBuffer){for(let jt=0;jt<xt.locationSize;jt++)m(xt.location+jt,St.meshPerAttribute);Y.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let jt=0;jt<xt.locationSize;jt++)x(xt.location+jt);i.bindBuffer(i.ARRAY_BUFFER,Ze);for(let jt=0;jt<xt.locationSize;jt++)H(xt.location+jt,kt/xt.locationSize,Ne,wt,Ut*We,(ue+kt/xt.locationSize*jt)*We,yt)}else{if(Et.isInstancedBufferAttribute){for(let St=0;St<xt.locationSize;St++)m(xt.location+St,Et.meshPerAttribute);Y.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=Et.meshPerAttribute*Et.count)}else for(let St=0;St<xt.locationSize;St++)x(xt.location+St);i.bindBuffer(i.ARRAY_BUFFER,Ze);for(let St=0;St<xt.locationSize;St++)H(xt.location+St,kt/xt.locationSize,Ne,wt,kt*We,kt/xt.locationSize*St*We,yt)}}else if(_t!==void 0){let wt=_t[At];if(wt!==void 0)switch(wt.length){case 2:i.vertexAttrib2fv(xt.location,wt);break;case 3:i.vertexAttrib3fv(xt.location,wt);break;case 4:i.vertexAttrib4fv(xt.location,wt);break;default:i.vertexAttrib1fv(xt.location,wt)}}}}$()}function T(){B();for(let Y in n){let ot=n[Y];for(let ht in ot){let j=ot[ht];for(let it in j){let pt=j[it];for(let _t in pt)d(pt[_t].object),delete pt[_t];delete j[it]}}delete n[Y]}}function k(Y){if(n[Y.id]===void 0)return;let ot=n[Y.id];for(let ht in ot){let j=ot[ht];for(let it in j){let pt=j[it];for(let _t in pt)d(pt[_t].object),delete pt[_t];delete j[it]}}delete n[Y.id]}function q(Y){for(let ot in n){let ht=n[ot];for(let j in ht){let it=ht[j];if(it[Y.id]===void 0)continue;let pt=it[Y.id];for(let _t in pt)d(pt[_t].object),delete pt[_t];delete it[Y.id]}}}function R(Y){for(let ot in n){let ht=n[ot],j=Y.isInstancedMesh===!0?Y.id:0,it=ht[j];if(it!==void 0){for(let pt in it){let _t=it[pt];for(let At in _t)d(_t[At].object),delete _t[At];delete it[pt]}delete ht[j],Object.keys(ht).length===0&&delete n[ot]}}}function B(){X(),a=!0,r!==s&&(r=s,h(r.object))}function X(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:l,reset:B,resetDefaultState:X,dispose:T,releaseStatesOfGeometry:k,releaseStatesOfObject:R,releaseStatesOfProgram:q,initAttributes:N,enableAttribute:x,disableUnusedAttributes:$}}function MM(i,t,e){let n;function s(u){n=u}function r(u,h){i.drawArrays(n,u,h),e.update(h,n,1)}function a(u,h,d){d!==0&&(i.drawArraysInstanced(n,u,h,d),e.update(h,n,d))}function l(u,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,h,0,d);let g=0;for(let b=0;b<d;b++)g+=h[b];e.update(g,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=l}function bM(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let q=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(q.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(q){return!(q!==Di&&n.convert(q)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(q){let R=q===Zi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(q!==vi&&q!==Li&&!R&&n.convert(q)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function u(q){if(q==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";q="mediump"}return q==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp",d=u(h);d!==h&&(Me("WebGLRenderer:",h,"not supported, using",d,"instead."),h=d);let S=e.logarithmicDepthBuffer===!0,g=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&g===!1&&Me("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let b=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),w=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),N=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),$=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),H=i.getParameter(i.MAX_VARYING_VECTORS),D=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),k=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:u,textureFormatReadable:a,textureTypeReadable:l,precision:h,logarithmicDepthBuffer:S,reversedDepthBuffer:g,maxTextures:b,maxVertexTextures:w,maxTextureSize:N,maxCubemapSize:x,maxAttributes:m,maxVertexUniforms:$,maxVaryings:H,maxFragmentUniforms:D,maxSamples:T,samples:k}}function wM(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Hi,l=new Pe,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(S,g){let b=S.length!==0||g||n!==0||s;return s=g,n=S.length,b},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(S,g){e=d(S,g,0)},this.setState=function(S,g,b){let w=S.clippingPlanes,N=S.clipIntersection,x=S.clipShadows,m=i.get(S);if(!s||w===null||w.length===0||r&&!x)r?d(null):h();else{let $=r?0:n,H=$*4,D=m.clippingState||null;u.value=D,D=d(w,g,H,b);for(let T=0;T!==H;++T)D[T]=e[T];m.clippingState=D,this.numIntersection=N?this.numPlanes:0,this.numPlanes+=$}};function h(){u.value!==e&&(u.value=e,u.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(S,g,b,w){let N=S!==null?S.length:0,x=null;if(N!==0){if(x=u.value,w!==!0||x===null){let m=b+N*4,$=g.matrixWorldInverse;l.getNormalMatrix($),(x===null||x.length<m)&&(x=new Float32Array(m));for(let H=0,D=b;H!==N;++H,D+=4)a.copy(S[H]).applyMatrix4($,l),a.normal.toArray(x,D),x[D+3]=a.constant}u.value=x,u.needsUpdate=!0}return t.numPlanes=N,t.numIntersection=0,x}}var $a=4,EM=6,TM=20,AM=256,Tl=new Na,tg=new ve,Lf=null,Df=0,Nf=0,Uf=!1,CM=new Z,Ur=new Z,gh=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:l=CM}=r;Lf=this._renderer.getRenderTarget(),Df=this._renderer.getActiveCubeFace(),Nf=this._renderer.getActiveMipmapLevel(),Uf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(t,n,s,u,l),e>0&&this._blur(u,0,0,e),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ig(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ng(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Lf,Df,Nf),this._renderer.xr.enabled=Uf,t.scissorTest=!1,ka(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===sr||t.mapping===Dr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Lf=this._renderer.getRenderTarget(),Df=this._renderer.getActiveCubeFace(),Nf=this._renderer.getActiveMipmapLevel(),Uf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Wn,minFilter:Wn,generateMipmaps:!1,type:Zi,format:Di,colorSpace:Oo,depthBuffer:!1},s=eg(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=eg(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=RM(r)),this._blurMaterial=PM(r,t,e),this._ggxMaterial=IM(r,t,e)}return s}_compileMaterial(t){let e=new kn(new bn,t);this._renderer.compile(e,Tl)}_sceneToCubeUV(t,e,n,s,r){let u=new ti(90,1,e,n),h=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],S=this._renderer,g=S.autoClear,b=S.toneMapping;S.getClearColor(tg),S.toneMapping=Yi,S.autoClear=!1,S.state.buffers.depth.getReversed()&&(S.setRenderTarget(s),S.clearDepth(),S.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new kn(new Ia,new Ar({name:"PMREM.Background",side:li,depthWrite:!1,depthTest:!1})));let N=this._backgroundBox,x=N.material,m=!1,$=t.background;$?$.isColor&&(x.color.copy($),t.background=null,m=!0):(x.color.copy(tg),m=!0);for(let H=0;H<6;H++){let D=H%3;D===0?(u.up.set(0,h[H],0),u.position.set(r.x,r.y,r.z),u.lookAt(r.x+d[H],r.y,r.z)):D===1?(u.up.set(0,0,h[H]),u.position.set(r.x,r.y,r.z),u.lookAt(r.x,r.y+d[H],r.z)):(u.up.set(0,h[H],0),u.position.set(r.x,r.y,r.z),u.lookAt(r.x,r.y,r.z+d[H]));let T=this._cubeSize;ka(s,D*T,H>2?T:0,T,T),S.setRenderTarget(s),m&&S.render(N,u),S.render(t,u)}S.toneMapping=b,S.autoClear=g,t.background=$}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===sr||t.mapping===Dr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ig()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ng());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let l=r.uniforms;l.envMap.value=t;let u=this._cubeSize;ka(e,0,0,3*u,2*u),n.setRenderTarget(e),n.render(a,Tl)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,l=this._lodMeshes[n];l.material=a;let u=a.uniforms,h=n/(this._lodMeshes.length-1),d=e/(this._lodMeshes.length-1),S=Math.sqrt(h*h-d*d),g=h*1.25,b=S*g,{_lodMax:w}=this,N=this._sizeLods[n],x=3*N*(n>w-$a?n-w+$a:0),m=4*(this._cubeSize-N);u.envMap.value=t.texture,u.roughness.value=b,u.mipInt.value=w-e,ka(r,x,m,3*N,2*N),s.setRenderTarget(r),s.render(l,Tl),u.envMap.value=r.texture,u.roughness.value=0,u.mipInt.value=w-n,ka(t,x,m,3*N,2*N),s.setRenderTarget(t),s.render(l,Tl)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,l=this._blurMaterial,u=this._lodMeshes[s];u.material=l;let h=l.uniforms;h.envMap.value=t.texture,h.sigma.value=r,h.mipInt.value=this._lodMax-n;let d=this._sizeLods[s],S=3*d*(s>this._lodMax-$a?s-this._lodMax+$a:0),g=4*(this._cubeSize-d);ka(e,S,g,3*d,2*d),a.setRenderTarget(e),a.render(u,Tl)}};function RM(i){let t=[],e=[],n=i,s=i-$a+1+EM;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],S=6,g=6,b=3,w=new Float32Array(b*g*S),N=new Float32Array(b*g*S);for(let m=0;m<S;m++){let $=m%3*2/3-1,H=m>2?0:-1,D=[$,H,0,$+2/3,H,0,$+2/3,H+1,0,$,H,0,$+2/3,H+1,0,$,H+1,0];w.set(D,b*g*m);for(let T=0;T<g;T++){let k=d[T*2]*2-1,q=d[T*2+1]*2-1;m===0?Ur.set(1,q,k):m===1?Ur.set(-k,1,-q):m===2?Ur.set(-k,q,1):m===3?Ur.set(-1,q,-k):m===4?Ur.set(-k,-1,q):Ur.set(k,q,-1),Ur.toArray(N,(m*g+T)*b)}}let x=new bn;x.setAttribute("position",new hn(w,b)),x.setAttribute("outputDirection",new hn(N,b)),e.push(new kn(x,null)),n>$a&&n--}return{lodMeshes:e,sizeLods:t}}function eg(i,t,e){let n=new _i(i,t,e);return n.texture.mapping=_l,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ka(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function IM(i,t,e){return new $n({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:AM,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:vh(),fragmentShader:`

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
		`,blending:us,depthTest:!1,depthWrite:!1})}function PM(i,t,e){return new $n({name:"SphericalGaussianBlur",defines:{SAMPLES:TM,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:vh(),fragmentShader:`

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
		`,blending:us,depthTest:!1,depthWrite:!1})}function ng(){return new $n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vh(),fragmentShader:`

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
		`,blending:us,depthTest:!1,depthWrite:!1})}function ig(){return new $n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:us,depthTest:!1,depthWrite:!1})}function vh(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var _h=class extends _i{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Yo(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ia(5,5,5),r=new $n({name:"CubemapFromEquirect",uniforms:Nr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:li,blending:us});r.uniforms.tEquirect.value=e;let a=new kn(s,r),l=e.minFilter;return e.minFilter===rr&&(e.minFilter=Wn),new Mu(1,10,this).update(t,a),e.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function LM(i){let t=new WeakMap,e=new WeakMap,n=null;function s(g,b=!1){return g==null?null:b?a(g):r(g)}function r(g){if(g&&g.isTexture){let b=g.mapping;if(b===Eu||b===Tu)if(t.has(g)){let w=t.get(g).texture;return l(w,g.mapping)}else{let w=g.image;if(w&&w.height>0){let N=new _h(w.height);return N.fromEquirectangularTexture(i,g),t.set(g,N),g.addEventListener("dispose",h),l(N.texture,g.mapping)}else return null}}return g}function a(g){if(g&&g.isTexture){let b=g.mapping,w=b===Eu||b===Tu,N=b===sr||b===Dr;if(w||N){let x=e.get(g),m=x!==void 0?x.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==m)return n===null&&(n=new gh(i)),x=w?n.fromEquirectangular(g,x):n.fromCubemap(g,x),x.texture.pmremVersion=g.pmremVersion,e.set(g,x),x.texture;if(x!==void 0)return x.texture;{let $=g.image;return w&&$&&$.height>0||N&&$&&u($)?(n===null&&(n=new gh(i)),x=w?n.fromEquirectangular(g):n.fromCubemap(g),x.texture.pmremVersion=g.pmremVersion,e.set(g,x),g.addEventListener("dispose",d),x.texture):null}}}return g}function l(g,b){return b===Eu?g.mapping=sr:b===Tu&&(g.mapping=Dr),g}function u(g){let b=0,w=6;for(let N=0;N<w;N++)g[N]!==void 0&&b++;return b===w}function h(g){let b=g.target;b.removeEventListener("dispose",h);let w=t.get(b);w!==void 0&&(t.delete(b),w.dispose())}function d(g){let b=g.target;b.removeEventListener("dispose",d);let w=e.get(b);w!==void 0&&(e.delete(b),w.dispose())}function S(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:S}}function DM(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Er("WebGLRenderer: "+n+" extension not supported."),s}}}function NM(i,t,e,n){let s={},r=new WeakMap;function a(S){let g=S.target;g.index!==null&&t.remove(g.index);for(let w in g.attributes)t.remove(g.attributes[w]);g.removeEventListener("dispose",a),delete s[g.id];let b=r.get(g);b&&(t.remove(b),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function l(S,g){return s[g.id]===!0||(g.addEventListener("dispose",a),s[g.id]=!0,e.memory.geometries++),g}function u(S){let g=S.attributes;for(let b in g)t.update(g[b],i.ARRAY_BUFFER)}function h(S){let g=[],b=S.index,w=S.attributes.position,N=0;if(w===void 0)return;if(b!==null){let $=b.array;N=b.version;for(let H=0,D=$.length;H<D;H+=3){let T=$[H+0],k=$[H+1],q=$[H+2];g.push(T,k,k,q,q,T)}}else{let $=w.array;N=w.version;for(let H=0,D=$.length/3-1;H<D;H+=3){let T=H+0,k=H+1,q=H+2;g.push(T,k,k,q,q,T)}}let x=new(w.count>=65535?Ho:Vo)(g,1);x.version=N;let m=r.get(S);m&&t.remove(m),r.set(S,x)}function d(S){let g=r.get(S);if(g){let b=S.index;b!==null&&g.version<b.version&&h(S)}else h(S);return r.get(S)}return{get:l,update:u,getWireframeAttribute:d}}function UM(i,t,e){let n;function s(S){n=S}let r,a;function l(S){r=S.type,a=S.bytesPerElement}function u(S,g){i.drawElements(n,g,r,S*a),e.update(g,n,1)}function h(S,g,b){b!==0&&(i.drawElementsInstanced(n,g,r,S*a,b),e.update(g,n,b))}function d(S,g,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,g,0,r,S,0,b);let N=0;for(let x=0;x<b;x++)N+=g[x];e.update(N,n,1)}this.setMode=s,this.setIndex=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d}function OM(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,l){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=l*(r/3);break;case i.LINES:e.lines+=l*(r/2);break;case i.LINE_STRIP:e.lines+=l*(r-1);break;case i.LINE_LOOP:e.lines+=l*r;break;case i.POINTS:e.points+=l*r;break;default:Ee("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function FM(i,t,e){let n=new WeakMap,s=new on;function r(a,l,u){let h=a.morphTargetInfluences,d=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,S=d!==void 0?d.length:0,g=n.get(l);if(g===void 0||g.count!==S){let B=function(){q.dispose(),n.delete(l),l.removeEventListener("dispose",B)};g!==void 0&&g.texture.dispose();let b=l.morphAttributes.position!==void 0,w=l.morphAttributes.normal!==void 0,N=l.morphAttributes.color!==void 0,x=l.morphAttributes.position||[],m=l.morphAttributes.normal||[],$=l.morphAttributes.color||[],H=0;b===!0&&(H=1),w===!0&&(H=2),N===!0&&(H=3);let D=l.attributes.position.count*H,T=1;D>t.maxTextureSize&&(T=Math.ceil(D/t.maxTextureSize),D=t.maxTextureSize);let k=new Float32Array(D*T*4*S),q=new $o(k,D,T,S);q.type=Li,q.needsUpdate=!0;let R=H*4;for(let X=0;X<S;X++){let Y=x[X],ot=m[X],ht=$[X],j=D*T*4*X;for(let it=0;it<Y.count;it++){let pt=it*R;b===!0&&(s.fromBufferAttribute(Y,it),k[j+pt+0]=s.x,k[j+pt+1]=s.y,k[j+pt+2]=s.z,k[j+pt+3]=0),w===!0&&(s.fromBufferAttribute(ot,it),k[j+pt+4]=s.x,k[j+pt+5]=s.y,k[j+pt+6]=s.z,k[j+pt+7]=0),N===!0&&(s.fromBufferAttribute(ht,it),k[j+pt+8]=s.x,k[j+pt+9]=s.y,k[j+pt+10]=s.z,k[j+pt+11]=ht.itemSize===4?s.w:1)}}g={count:S,texture:q,size:new zt(D,T)},n.set(l,g),l.addEventListener("dispose",B)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)u.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let b=0;for(let N=0;N<h.length;N++)b+=h[N];let w=l.morphTargetsRelative?1:1-b;u.getUniforms().setValue(i,"morphTargetBaseInfluence",w),u.getUniforms().setValue(i,"morphTargetInfluences",h)}u.getUniforms().setValue(i,"morphTargetsTexture",g.texture,e),u.getUniforms().setValue(i,"morphTargetsTextureSize",g.size)}return{update:r}}function BM(i,t,e,n,s){let r=new WeakMap;function a(h){let d=s.render.frame,S=h.geometry,g=t.get(h,S);if(r.get(g)!==d&&(t.update(g),r.set(g,d)),h.isInstancedMesh&&(h.hasEventListener("dispose",u)===!1&&h.addEventListener("dispose",u),r.get(h)!==d&&(e.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,i.ARRAY_BUFFER),r.set(h,d))),h.isSkinnedMesh){let b=h.skeleton;r.get(b)!==d&&(b.update(),r.set(b,d))}return g}function l(){r=new WeakMap}function u(h){let d=h.target;d.removeEventListener("dispose",u),n.releaseStatesOfObject(d),e.remove(d.instanceMatrix),d.instanceColor!==null&&e.remove(d.instanceColor)}return{update:a,dispose:l}}var kM={[cf]:"LINEAR_TONE_MAPPING",[uf]:"REINHARD_TONE_MAPPING",[hf]:"CINEON_TONE_MAPPING",[df]:"ACES_FILMIC_TONE_MAPPING",[pf]:"AGX_TONE_MAPPING",[mf]:"NEUTRAL_TONE_MAPPING",[ff]:"CUSTOM_TONE_MAPPING"};function $M(i,t,e,n,s,r){let a=new _i(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),l=null,u=null,h=new bn;h.setAttribute("position",new Mn([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Mn([0,2,0,0,2,0],2));let d=new lu({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),S=new kn(h,d),g=new Na(-1,1,1,-1,0,1),b=null,w=null,N=!1,x,m=null,$=[],H=!1;this.setSize=function(D,T){a.setSize(D,T),l!==null&&l.setSize(D,T),u!==null&&u.setSize(D,T);for(let k=0;k<$.length;k++){let q=$[k];q.setSize&&q.setSize(D,T)}},this.setEffects=function(D){$=D,H=$.length>0&&$[0].isRenderPass===!0;let T=a.width,k=a.height;$.length>0&&l===null&&(l=new _i(T,k,{type:Zi,depthBuffer:!1,stencilBuffer:!1}),u=new _i(T,k,{type:Zi,depthBuffer:!1,stencilBuffer:!1}));for(let q=0;q<$.length;q++){let R=$[q];R.setSize&&R.setSize(T,k)}},this.begin=function(D,T){if(N||D.toneMapping===Yi&&$.length===0)return!1;if(m=T,T!==null){let k=T.width,q=T.height;(a.width!==k||a.height!==q)&&this.setSize(k,q)}return H===!1&&D.setRenderTarget(a),x=D.toneMapping,D.toneMapping=Yi,!0},this.hasRenderPass=function(){return H},this.end=function(D,T){D.toneMapping=x,N=!0;let k=a,q=l;for(let R=0;R<$.length;R++){let B=$[R];B.enabled!==!1&&(B.render(D,q,k,T),B.needsSwap!==!1&&(k=q,q=q===l?u:l))}if(b!==D.outputColorSpace||w!==D.toneMapping){b=D.outputColorSpace,w=D.toneMapping,d.defines={},qe.getTransfer(b)===an&&(d.defines.SRGB_TRANSFER="");let R=kM[w];R&&(d.defines[R]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=k.texture,D.setRenderTarget(m),D.render(S,g),m=null,N=!1},this.isCompositing=function(){return N},this.dispose=function(){a.dispose(),l!==null&&l.dispose(),u!==null&&u.dispose(),h.dispose(),d.dispose()}}var bg=new gi,Bf=new Ks(1,1),wg=new $o,Eg=new Jc,Tg=new Yo,sg=[],rg=[],ag=new Float32Array(16),og=new Float32Array(9),lg=new Float32Array(4);function Va(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=sg[s];if(r===void 0&&(r=new Float32Array(s),sg[s]=r),t!==0){n.toArray(r,0);for(let a=1,l=0;a!==t;++a)l+=e,i[a].toArray(r,l)}return r}function Ln(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Dn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function yh(i,t){let e=rg[t];e===void 0&&(e=new Int32Array(t),rg[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function zM(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function VM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ln(e,t))return;i.uniform2fv(this.addr,t),Dn(e,t)}}function HM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ln(e,t))return;i.uniform3fv(this.addr,t),Dn(e,t)}}function GM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ln(e,t))return;i.uniform4fv(this.addr,t),Dn(e,t)}}function WM(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ln(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Dn(e,t)}else{if(Ln(e,n))return;lg.set(n),i.uniformMatrix2fv(this.addr,!1,lg),Dn(e,n)}}function XM(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ln(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Dn(e,t)}else{if(Ln(e,n))return;og.set(n),i.uniformMatrix3fv(this.addr,!1,og),Dn(e,n)}}function qM(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ln(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Dn(e,t)}else{if(Ln(e,n))return;ag.set(n),i.uniformMatrix4fv(this.addr,!1,ag),Dn(e,n)}}function YM(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function JM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ln(e,t))return;i.uniform2iv(this.addr,t),Dn(e,t)}}function ZM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ln(e,t))return;i.uniform3iv(this.addr,t),Dn(e,t)}}function jM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ln(e,t))return;i.uniform4iv(this.addr,t),Dn(e,t)}}function KM(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function QM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ln(e,t))return;i.uniform2uiv(this.addr,t),Dn(e,t)}}function tb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ln(e,t))return;i.uniform3uiv(this.addr,t),Dn(e,t)}}function eb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ln(e,t))return;i.uniform4uiv(this.addr,t),Dn(e,t)}}function nb(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Bf.compareFunction=e.isReversedDepthBuffer()?fh:dh,r=Bf):r=bg,e.setTexture2D(t||r,s)}function ib(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Eg,s)}function sb(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Tg,s)}function rb(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||wg,s)}function ab(i){switch(i){case 5126:return zM;case 35664:return VM;case 35665:return HM;case 35666:return GM;case 35674:return WM;case 35675:return XM;case 35676:return qM;case 5124:case 35670:return YM;case 35667:case 35671:return JM;case 35668:case 35672:return ZM;case 35669:case 35673:return jM;case 5125:return KM;case 36294:return QM;case 36295:return tb;case 36296:return eb;case 35678:case 36198:case 36298:case 36306:case 35682:return nb;case 35679:case 36299:case 36307:return ib;case 35680:case 36300:case 36308:case 36293:return sb;case 36289:case 36303:case 36311:case 36292:return rb}}function ob(i,t){i.uniform1fv(this.addr,t)}function lb(i,t){let e=Va(t,this.size,2);i.uniform2fv(this.addr,e)}function cb(i,t){let e=Va(t,this.size,3);i.uniform3fv(this.addr,e)}function ub(i,t){let e=Va(t,this.size,4);i.uniform4fv(this.addr,e)}function hb(i,t){let e=Va(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function db(i,t){let e=Va(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function fb(i,t){let e=Va(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function pb(i,t){i.uniform1iv(this.addr,t)}function mb(i,t){i.uniform2iv(this.addr,t)}function gb(i,t){i.uniform3iv(this.addr,t)}function _b(i,t){i.uniform4iv(this.addr,t)}function xb(i,t){i.uniform1uiv(this.addr,t)}function vb(i,t){i.uniform2uiv(this.addr,t)}function yb(i,t){i.uniform3uiv(this.addr,t)}function Sb(i,t){i.uniform4uiv(this.addr,t)}function Mb(i,t,e){let n=this.cache,s=t.length,r=yh(e,s);Ln(n,r)||(i.uniform1iv(this.addr,r),Dn(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Bf:a=bg;for(let l=0;l!==s;++l)e.setTexture2D(t[l]||a,r[l])}function bb(i,t,e){let n=this.cache,s=t.length,r=yh(e,s);Ln(n,r)||(i.uniform1iv(this.addr,r),Dn(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Eg,r[a])}function wb(i,t,e){let n=this.cache,s=t.length,r=yh(e,s);Ln(n,r)||(i.uniform1iv(this.addr,r),Dn(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Tg,r[a])}function Eb(i,t,e){let n=this.cache,s=t.length,r=yh(e,s);Ln(n,r)||(i.uniform1iv(this.addr,r),Dn(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||wg,r[a])}function Tb(i){switch(i){case 5126:return ob;case 35664:return lb;case 35665:return cb;case 35666:return ub;case 35674:return hb;case 35675:return db;case 35676:return fb;case 5124:case 35670:return pb;case 35667:case 35671:return mb;case 35668:case 35672:return gb;case 35669:case 35673:return _b;case 5125:return xb;case 36294:return vb;case 36295:return yb;case 36296:return Sb;case 35678:case 36198:case 36298:case 36306:case 35682:return Mb;case 35679:case 36299:case 36307:return bb;case 35680:case 36300:case 36308:case 36293:return wb;case 36289:case 36303:case 36311:case 36292:return Eb}}var kf=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ab(e.type)}},$f=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Tb(e.type)}},zf=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let l=s[r];l.setValue(t,e[l.id],n)}}},Of=/(\w+)(\])?(\[|\.)?/g;function cg(i,t){i.seq.push(t),i.map[t.id]=t}function Ab(i,t,e){let n=i.name,s=n.length;for(Of.lastIndex=0;;){let r=Of.exec(n),a=Of.lastIndex,l=r[1],u=r[2]==="]",h=r[3];if(u&&(l=l|0),h===void 0||h==="["&&a+2===s){cg(e,h===void 0?new kf(l,i,t):new $f(l,i,t));break}else{let S=e.map[l];S===void 0&&(S=new zf(l),cg(e,S)),e=S}}}var za=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let l=t.getActiveUniform(e,a),u=t.getUniformLocation(e,l.name);Ab(l,u,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let l=e[r],u=n[l.id];u.needsUpdate!==!1&&l.setValue(t,u.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function ug(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Cb=37297,Rb=0;function Ib(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let l=a+1;n.push(`${l===t?">":" "} ${l}: ${e[a]}`)}return n.join(`
`)}var hg=new Pe;function Pb(i){qe._getMatrix(hg,qe.workingColorSpace,i);let t=`mat3( ${hg.elements.map(e=>e.toFixed(4))} )`;switch(qe.getTransfer(i)){case Fo:return[t,"LinearTransferOETF"];case an:return[t,"sRGBTransferOETF"];default:return Me("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function dg(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let l=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Ib(i.getShaderSource(t),l)}else return r}function Lb(i,t){let e=Pb(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Db={[cf]:"Linear",[uf]:"Reinhard",[hf]:"Cineon",[df]:"ACESFilmic",[pf]:"AgX",[mf]:"Neutral",[ff]:"Custom"};function Nb(i,t){let e=Db[t];return e===void 0?(Me("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var mh=new Z;function Ub(){qe.getLuminanceCoefficients(mh);let i=mh.x.toFixed(4),t=mh.y.toFixed(4),e=mh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ob(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Cl).join(`
`)}function Fb(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Bb(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,l=1;r.type===i.FLOAT_MAT2&&(l=2),r.type===i.FLOAT_MAT3&&(l=3),r.type===i.FLOAT_MAT4&&(l=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:l}}return e}function Cl(i){return i!==""}function fg(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function pg(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var kb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vf(i){return i.replace(kb,zb)}var $b=new Map;function zb(i,t){let e=Be[t];if(e===void 0){let n=$b.get(t);if(n!==void 0)e=Be[n],Me('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Vf(e)}var Vb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mg(i){return i.replace(Vb,Hb)}function Hb(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function gg(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var Gb={[gl]:"SHADOWMAP_TYPE_PCF",[Ua]:"SHADOWMAP_TYPE_VSM"};function Wb(i){return Gb[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Xb={[sr]:"ENVMAP_TYPE_CUBE",[Dr]:"ENVMAP_TYPE_CUBE",[_l]:"ENVMAP_TYPE_CUBE_UV"};function qb(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Xb[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Yb={[Dr]:"ENVMAP_MODE_REFRACTION"};function Jb(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Yb[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Zb={[wu]:"ENVMAP_BLENDING_MULTIPLY",[P0]:"ENVMAP_BLENDING_MIX",[L0]:"ENVMAP_BLENDING_ADD"};function jb(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Zb[i.combine]||"ENVMAP_BLENDING_NONE"}function Kb(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Qb(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,l=e.fragmentShader,u=Wb(e),h=qb(e),d=Jb(e),S=jb(e),g=Kb(e),b=Ob(e),w=Fb(r),N=s.createProgram(),x,m,$=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w].filter(Cl).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w].filter(Cl).join(`
`),m.length>0&&(m+=`
`)):(x=[gg(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+u:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cl).join(`
`),m=[gg(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMap?"#define "+S:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+u:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Yi?"#define TONE_MAPPING":"",e.toneMapping!==Yi?Be.tonemapping_pars_fragment:"",e.toneMapping!==Yi?Nb("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,Lb("linearToOutputTexel",e.outputColorSpace),Ub(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Cl).join(`
`)),a=Vf(a),a=fg(a,e),a=pg(a,e),l=Vf(l),l=fg(l,e),l=pg(l,e),a=mg(a),l=mg(l),e.isRawShaderMaterial!==!0&&($=`#version 300 es
`,x=[b,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",e.glslVersion===wf?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===wf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let H=$+x+a,D=$+m+l,T=ug(s,s.VERTEX_SHADER,H),k=ug(s,s.FRAGMENT_SHADER,D);s.attachShader(N,T),s.attachShader(N,k),e.index0AttributeName!==void 0?s.bindAttribLocation(N,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(N,0,"position"),s.linkProgram(N);function q(Y){if(i.debug.checkShaderErrors){let ot=s.getProgramInfoLog(N)||"",ht=s.getShaderInfoLog(T)||"",j=s.getShaderInfoLog(k)||"",it=ot.trim(),pt=ht.trim(),_t=j.trim(),At=!0,xt=!0;if(s.getProgramParameter(N,s.LINK_STATUS)===!1)if(At=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,N,T,k);else{let Et=dg(s,T,"vertex"),wt=dg(s,k,"fragment");Ee("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(N,s.VALIDATE_STATUS)+`

Material Name: `+Y.name+`
Material Type: `+Y.type+`

Program Info Log: `+it+`
`+Et+`
`+wt)}else it!==""?Me("WebGLProgram: Program Info Log:",it):(pt===""||_t==="")&&(xt=!1);xt&&(Y.diagnostics={runnable:At,programLog:it,vertexShader:{log:pt,prefix:x},fragmentShader:{log:_t,prefix:m}})}s.deleteShader(T),s.deleteShader(k),R=new za(s,N),B=Bb(s,N)}let R;this.getUniforms=function(){return R===void 0&&q(this),R};let B;this.getAttributes=function(){return B===void 0&&q(this),B};let X=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return X===!1&&(X=s.getProgramParameter(N,Cb)),X},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(N),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Rb++,this.cacheKey=t,this.usedTimes=1,this.program=N,this.vertexShader=T,this.fragmentShader=k,this}var t1=0,Hf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Gf(t),e.set(t,n)),n}},Gf=class{constructor(t){this.id=t1++,this.code=t,this.usedTimes=0}};function e1(i){return i===or||i===bl||i===wl}function n1(i,t,e,n,s,r){let a=new Aa,l=new Hf,u=new Set,h=[],d=new Map,S=n.logarithmicDepthBuffer,g=n.precision,b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(R){return u.add(R),R===0?"uv":`uv${R}`}function N(R,B,X,Y,ot,ht){let j=Y.fog,it=ot.geometry,pt=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?Y.environment:null,_t=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap,At=t.get(R.envMap||pt,_t),xt=At&&At.mapping===_l?At.image.height:null,Et=b[R.type];R.precision!==null&&(g=n.getMaxPrecision(R.precision),g!==R.precision&&Me("WebGLProgram.getParameters:",R.precision,"not supported, using",g,"instead."));let wt=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,kt=wt!==void 0?wt.length:0,ee=0;it.morphAttributes.position!==void 0&&(ee=1),it.morphAttributes.normal!==void 0&&(ee=2),it.morphAttributes.color!==void 0&&(ee=3);let Ze,Ne,We,yt;if(Et){let tn=ci[Et];Ze=tn.vertexShader,Ne=tn.fragmentShader}else{Ze=R.vertexShader,Ne=R.fragmentShader;let tn=l.getVertexShaderStage(R),je=l.getFragmentShaderStage(R);l.update(R,tn,je),We=tn.id,yt=je.id}let St=i.getRenderTarget(),Ut=i.state.buffers.depth.getReversed(),ue=ot.isInstancedMesh===!0,jt=ot.isBatchedMesh===!0,ge=!!R.map,Qt=!!R.matcap,st=!!At,Rt=!!R.aoMap,G=!!R.lightMap,Lt=!!R.bumpMap&&R.wireframe===!1,Bt=!!R.normalMap,ce=!!R.displacementMap,fe=!!R.emissiveMap,de=!!R.metalnessMap,Ae=!!R.roughnessMap,J=R.anisotropy>0,Oe=R.clearcoat>0,Ue=R.dispersion>0,F=R.retroreflectivity>0,E=R.iridescence>0,rt=R.sheen>0,ct=R.transmission>0,vt=J&&!!R.anisotropyMap,Dt=Oe&&!!R.clearcoatMap,$t=Oe&&!!R.clearcoatNormalMap,gt=Oe&&!!R.clearcoatRoughnessMap,dt=E&&!!R.iridescenceMap,Xt=E&&!!R.iridescenceThicknessMap,he=rt&&!!R.sheenColorMap,Jt=rt&&!!R.sheenRoughnessMap,Ht=!!R.specularMap,le=!!R.specularColorMap,pe=!!R.specularIntensityMap,Ce=ct&&!!R.transmissionMap,Q=ct&&!!R.thicknessMap,qt=!!R.gradientMap,Mt=!!R.alphaMap,Gt=R.alphaTest>0,Kt=!!R.alphaHash,Tt=!!R.extensions,oe=Yi;R.toneMapped&&(St===null||St.isXRRenderTarget===!0)&&(oe=i.toneMapping);let ie={shaderID:Et,shaderType:R.type,shaderName:R.name,vertexShader:Ze,fragmentShader:Ne,defines:R.defines,customVertexShaderID:We,customFragmentShaderID:yt,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:g,batching:jt,batchingColor:jt&&ot._colorsTexture!==null,instancing:ue,instancingColor:ue&&ot.instanceColor!==null,instancingMorph:ue&&ot.morphTexture!==null,outputColorSpace:St===null?i.outputColorSpace:St.isXRRenderTarget===!0?St.texture.colorSpace:qe.workingColorSpace,alphaToCoverage:!!R.alphaToCoverage,map:ge,matcap:Qt,envMap:st,envMapMode:st&&At.mapping,envMapCubeUVHeight:xt,aoMap:Rt,lightMap:G,bumpMap:Lt,normalMap:Bt,displacementMap:ce,emissiveMap:fe,normalMapObjectSpace:Bt&&R.normalMapType===U0,normalMapTangentSpace:Bt&&R.normalMapType===hh,packedNormalMap:Bt&&R.normalMapType===hh&&e1(R.normalMap.format),metalnessMap:de,roughnessMap:Ae,anisotropy:J,anisotropyMap:vt,clearcoat:Oe,clearcoatMap:Dt,clearcoatNormalMap:$t,clearcoatRoughnessMap:gt,dispersion:Ue,retroreflection:F,iridescence:E,iridescenceMap:dt,iridescenceThicknessMap:Xt,sheen:rt,sheenColorMap:he,sheenRoughnessMap:Jt,specularMap:Ht,specularColorMap:le,specularIntensityMap:pe,transmission:ct,transmissionMap:Ce,thicknessMap:Q,gradientMap:qt,opaque:R.transparent===!1&&R.blending===Oa&&R.alphaToCoverage===!1,alphaMap:Mt,alphaTest:Gt,alphaHash:Kt,combine:R.combine,mapUv:ge&&w(R.map.channel),aoMapUv:Rt&&w(R.aoMap.channel),lightMapUv:G&&w(R.lightMap.channel),bumpMapUv:Lt&&w(R.bumpMap.channel),normalMapUv:Bt&&w(R.normalMap.channel),displacementMapUv:ce&&w(R.displacementMap.channel),emissiveMapUv:fe&&w(R.emissiveMap.channel),metalnessMapUv:de&&w(R.metalnessMap.channel),roughnessMapUv:Ae&&w(R.roughnessMap.channel),anisotropyMapUv:vt&&w(R.anisotropyMap.channel),clearcoatMapUv:Dt&&w(R.clearcoatMap.channel),clearcoatNormalMapUv:$t&&w(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:gt&&w(R.clearcoatRoughnessMap.channel),iridescenceMapUv:dt&&w(R.iridescenceMap.channel),iridescenceThicknessMapUv:Xt&&w(R.iridescenceThicknessMap.channel),sheenColorMapUv:he&&w(R.sheenColorMap.channel),sheenRoughnessMapUv:Jt&&w(R.sheenRoughnessMap.channel),specularMapUv:Ht&&w(R.specularMap.channel),specularColorMapUv:le&&w(R.specularColorMap.channel),specularIntensityMapUv:pe&&w(R.specularIntensityMap.channel),transmissionMapUv:Ce&&w(R.transmissionMap.channel),thicknessMapUv:Q&&w(R.thicknessMap.channel),alphaMapUv:Mt&&w(R.alphaMap.channel),vertexTangents:!!it.attributes.tangent&&(Bt||J),vertexNormals:!!it.attributes.normal,vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,pointsUvs:ot.isPoints===!0&&!!it.attributes.uv&&(ge||Mt),fog:!!j,useFog:R.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:R.wireframe===!1&&(R.flatShading===!0||it.attributes.normal===void 0&&Bt===!1&&(R.isMeshLambertMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isMeshPhysicalMaterial)),sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:Ut,skinning:ot.isSkinnedMesh===!0,hasPositionAttribute:it.attributes.position!==void 0,morphTargets:it.morphAttributes.position!==void 0,morphNormals:it.morphAttributes.normal!==void 0,morphColors:it.morphAttributes.color!==void 0,morphTargetsCount:kt,morphTextureStride:ee,numSunLights:B.sun.length,numDirLights:B.directional.length,numPointLights:B.point.length,numSpotLights:B.spot.length,numSpotLightMaps:B.spotLightMap.length,numRectAreaLights:B.rectArea.length,numHemiLights:B.hemi.length,numSunLightShadows:B.sunShadowMap.length,numDirLightShadows:B.directionalShadowMap.length,numPointLightShadows:B.pointShadowMap.length,numSpotLightShadows:B.spotShadowMap.length,numSpotLightShadowsWithMaps:B.numSpotLightShadowsWithMaps,numLightProbes:B.numLightProbes,numLightProbeGrids:ht.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:R.dithering,shadowMapEnabled:i.shadowMap.enabled&&X.length>0,shadowMapType:i.shadowMap.type,toneMapping:oe,decodeVideoTexture:ge&&R.map.isVideoTexture===!0&&qe.getTransfer(R.map.colorSpace)===an,decodeVideoTextureEmissive:fe&&R.emissiveMap.isVideoTexture===!0&&qe.getTransfer(R.emissiveMap.colorSpace)===an,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===cs,flipSided:R.side===li,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:Tt&&R.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Tt&&R.extensions.multiDraw===!0||jt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return ie.vertexUv1s=u.has(1),ie.vertexUv2s=u.has(2),ie.vertexUv3s=u.has(3),u.clear(),ie}function x(R){let B=[];if(R.shaderID?B.push(R.shaderID):(B.push(R.customVertexShaderID),B.push(R.customFragmentShaderID)),R.defines!==void 0)for(let X in R.defines)B.push(X),B.push(R.defines[X]);return R.isRawShaderMaterial===!1&&(m(B,R),$(B,R),B.push(i.outputColorSpace)),B.push(R.customProgramCacheKey),B.join()}function m(R,B){R.push(B.precision),R.push(B.outputColorSpace),R.push(B.envMapMode),R.push(B.envMapCubeUVHeight),R.push(B.mapUv),R.push(B.alphaMapUv),R.push(B.lightMapUv),R.push(B.aoMapUv),R.push(B.bumpMapUv),R.push(B.normalMapUv),R.push(B.displacementMapUv),R.push(B.emissiveMapUv),R.push(B.metalnessMapUv),R.push(B.roughnessMapUv),R.push(B.anisotropyMapUv),R.push(B.clearcoatMapUv),R.push(B.clearcoatNormalMapUv),R.push(B.clearcoatRoughnessMapUv),R.push(B.iridescenceMapUv),R.push(B.iridescenceThicknessMapUv),R.push(B.sheenColorMapUv),R.push(B.sheenRoughnessMapUv),R.push(B.specularMapUv),R.push(B.specularColorMapUv),R.push(B.specularIntensityMapUv),R.push(B.transmissionMapUv),R.push(B.thicknessMapUv),R.push(B.combine),R.push(B.fogExp2),R.push(B.sizeAttenuation),R.push(B.morphTargetsCount),R.push(B.morphAttributeCount),R.push(B.numSunLights),R.push(B.numDirLights),R.push(B.numPointLights),R.push(B.numSpotLights),R.push(B.numSpotLightMaps),R.push(B.numHemiLights),R.push(B.numRectAreaLights),R.push(B.numSunLightShadows),R.push(B.numDirLightShadows),R.push(B.numPointLightShadows),R.push(B.numSpotLightShadows),R.push(B.numSpotLightShadowsWithMaps),R.push(B.numLightProbes),R.push(B.shadowMapType),R.push(B.toneMapping),R.push(B.numClippingPlanes),R.push(B.numClipIntersection),R.push(B.depthPacking)}function $(R,B){a.disableAll(),B.instancing&&a.enable(0),B.instancingColor&&a.enable(1),B.instancingMorph&&a.enable(2),B.matcap&&a.enable(3),B.envMap&&a.enable(4),B.normalMapObjectSpace&&a.enable(5),B.normalMapTangentSpace&&a.enable(6),B.clearcoat&&a.enable(7),B.iridescence&&a.enable(8),B.alphaTest&&a.enable(9),B.vertexColors&&a.enable(10),B.vertexAlphas&&a.enable(11),B.vertexUv1s&&a.enable(12),B.vertexUv2s&&a.enable(13),B.vertexUv3s&&a.enable(14),B.vertexTangents&&a.enable(15),B.anisotropy&&a.enable(16),B.alphaHash&&a.enable(17),B.batching&&a.enable(18),B.dispersion&&a.enable(19),B.retroreflection&&a.enable(24),B.batchingColor&&a.enable(20),B.gradientMap&&a.enable(21),B.packedNormalMap&&a.enable(22),B.vertexNormals&&a.enable(23),R.push(a.mask),a.disableAll(),B.fog&&a.enable(0),B.useFog&&a.enable(1),B.flatShading&&a.enable(2),B.logarithmicDepthBuffer&&a.enable(3),B.reversedDepthBuffer&&a.enable(4),B.skinning&&a.enable(5),B.morphTargets&&a.enable(6),B.morphNormals&&a.enable(7),B.morphColors&&a.enable(8),B.premultipliedAlpha&&a.enable(9),B.shadowMapEnabled&&a.enable(10),B.doubleSided&&a.enable(11),B.flipSided&&a.enable(12),B.useDepthPacking&&a.enable(13),B.dithering&&a.enable(14),B.transmission&&a.enable(15),B.sheen&&a.enable(16),B.opaque&&a.enable(17),B.pointsUvs&&a.enable(18),B.decodeVideoTexture&&a.enable(19),B.decodeVideoTextureEmissive&&a.enable(20),B.alphaToCoverage&&a.enable(21),B.numLightProbeGrids>0&&a.enable(22),B.hasPositionAttribute&&a.enable(23),R.push(a.mask)}function H(R){let B=b[R.type],X;if(B){let Y=ci[B];X=El.clone(Y.uniforms)}else X=R.uniforms;return X}function D(R,B){let X=d.get(B);return X!==void 0?++X.usedTimes:(X=new Qb(i,B,R,s),h.push(X),d.set(B,X)),X}function T(R){if(--R.usedTimes===0){let B=h.indexOf(R);h[B]=h[h.length-1],h.pop(),d.delete(R.cacheKey),R.destroy()}}function k(R){l.remove(R)}function q(){l.dispose()}return{getParameters:N,getProgramCacheKey:x,getUniforms:H,acquireProgram:D,releaseProgram:T,releaseShaderCache:k,programs:h,dispose:q}}function i1(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let l=i.get(a);return l===void 0&&(l={},i.set(a,l)),l}function n(a){i.delete(a)}function s(a,l,u){i.get(a)[l]=u}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function s1(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function _g(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function xg(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(g){let b=0;return g.isInstancedMesh&&(b+=2),g.isSkinnedMesh&&(b+=1),b}function l(g,b,w,N,x,m){let $=i[t];return $===void 0?($={id:g.id,object:g,geometry:b,material:w,materialVariant:a(g),groupOrder:N,renderOrder:g.renderOrder,z:x,group:m},i[t]=$):($.id=g.id,$.object=g,$.geometry=b,$.material=w,$.materialVariant=a(g),$.groupOrder=N,$.renderOrder=g.renderOrder,$.z=x,$.group=m),t++,$}function u(g,b,w,N,x,m,$){$.reversedDepth===!0&&(x=-x);let H=l(g,b,w,N,x,m);w.transmission>0?n.push(H):w.transparent===!0?s.push(H):e.push(H)}function h(g,b,w,N,x,m){let $=l(g,b,w,N,x,m);w.transmission>0?n.unshift($):w.transparent===!0?s.unshift($):e.unshift($)}function d(g,b){e.length>1&&e.sort(g||s1),n.length>1&&n.sort(b||_g),s.length>1&&s.sort(b||_g)}function S(){for(let g=t,b=i.length;g<b;g++){let w=i[g];if(w.id===null)break;w.id=null,w.object=null,w.geometry=null,w.material=null,w.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:u,unshift:h,finish:S,sort:d}}function r1(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new xg,i.set(n,[a])):s>=r.length?(a=new xg,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function a1(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new Z,color:new ve};break;case"SpotLight":e={position:new Z,direction:new Z,color:new ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new Z,color:new ve,distance:0,decay:0};break;case"HemisphereLight":e={direction:new Z,skyColor:new ve,groundColor:new ve};break;case"RectAreaLight":e={color:new ve,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return i[t.id]=e,e}}}function o1(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var l1=0;function c1(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function u1(i){let t=new a1,e=o1(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new Z);let s=new Z,r=new Je,a=new Je;function l(h){let d=0,S=0,g=0;for(let ot=0;ot<9;ot++)n.probe[ot].set(0,0,0);let b=0,w=0,N=0,x=0,m=0,$=0,H=0,D=0,T=0,k=0,q=0,R=0,B=0,X=0;h.sort(c1);for(let ot=0,ht=h.length;ot<ht;ot++){let j=h[ot],it=j.color,pt=j.intensity,_t=j.distance,At=null;if(j.shadow&&j.shadow.map&&(j.shadow.map.texture.format===or?At=j.shadow.map.texture:At=j.shadow.map.depthTexture||j.shadow.map.texture),j.isAmbientLight)d+=it.r*pt,S+=it.g*pt,g+=it.b*pt;else if(j.isLightProbe){for(let xt=0;xt<9;xt++)n.probe[xt].addScaledVector(j.sh.coefficients[xt],pt);X++}else if(j.isSunLight){let xt=t.get(j);if(xt.color.copy(j.color).multiplyScalar(j.intensity),j.castShadow){let Et=j.shadow,wt=e.get(j);wt.shadowIntensity=Et.intensity,wt.shadowBias=Et.bias,wt.shadowNormalBias=Et.normalBias,wt.shadowRadius=Et.radius,wt.shadowMapSize.copy(Et.mapSize).multiply(Et.getFrameExtents()),n.sunShadow[w]=wt,n.sunShadowMap[w]=At;let kt=Et.getViewportCount();for(let ee=0;ee<kt;ee++)n.sunShadowMatrix[N+ee]=Et.getMatrix(ee),n.sunShadowCascade[N+ee]=Et._cascadeData[ee];N+=kt,w++}n.sun[b]=xt,b++}else if(j.isDirectionalLight){let xt=t.get(j);if(xt.color.copy(j.color).multiplyScalar(j.intensity),j.castShadow){let Et=j.shadow,wt=e.get(j);wt.shadowIntensity=Et.intensity,wt.shadowBias=Et.bias,wt.shadowNormalBias=Et.normalBias,wt.shadowRadius=Et.radius,wt.shadowMapSize=Et.mapSize,n.directionalShadow[x]=wt,n.directionalShadowMap[x]=At,n.directionalShadowMatrix[x]=j.shadow.matrix,T++}n.directional[x]=xt,x++}else if(j.isSpotLight){let xt=t.get(j);xt.position.setFromMatrixPosition(j.matrixWorld),xt.color.copy(it).multiplyScalar(pt),xt.distance=_t,xt.coneCos=Math.cos(j.angle),xt.penumbraCos=Math.cos(j.angle*(1-j.penumbra)),xt.decay=j.decay,n.spot[$]=xt;let Et=j.shadow;if(j.map&&(n.spotLightMap[R]=j.map,R++,Et.updateMatrices(j),j.castShadow&&B++),n.spotLightMatrix[$]=Et.matrix,j.castShadow){let wt=e.get(j);wt.shadowIntensity=Et.intensity,wt.shadowBias=Et.bias,wt.shadowNormalBias=Et.normalBias,wt.shadowRadius=Et.radius,wt.shadowMapSize=Et.mapSize,n.spotShadow[$]=wt,n.spotShadowMap[$]=At,q++}$++}else if(j.isRectAreaLight){let xt=t.get(j);xt.color.copy(it).multiplyScalar(pt),xt.halfWidth.set(j.width*.5,0,0),xt.halfHeight.set(0,j.height*.5,0),n.rectArea[H]=xt,H++}else if(j.isPointLight){let xt=t.get(j);if(xt.color.copy(j.color).multiplyScalar(j.intensity),xt.distance=j.distance,xt.decay=j.decay,j.castShadow){let Et=j.shadow,wt=e.get(j);wt.shadowIntensity=Et.intensity,wt.shadowBias=Et.bias,wt.shadowNormalBias=Et.normalBias,wt.shadowRadius=Et.radius,wt.shadowMapSize=Et.mapSize,wt.shadowCameraNear=Et.camera.near,wt.shadowCameraFar=Et.camera.far,n.pointShadow[m]=wt,n.pointShadowMap[m]=At,n.pointShadowMatrix[m]=j.shadow.matrix,k++}n.point[m]=xt,m++}else if(j.isHemisphereLight){let xt=t.get(j);xt.skyColor.copy(j.color).multiplyScalar(pt),xt.groundColor.copy(j.groundColor).multiplyScalar(pt),n.hemi[D]=xt,D++}}H>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Wt.LTC_FLOAT_1,n.rectAreaLTC2=Wt.LTC_FLOAT_2):(n.rectAreaLTC1=Wt.LTC_HALF_1,n.rectAreaLTC2=Wt.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=S,n.ambient[2]=g;let Y=n.hash;(Y.sunLength!==b||Y.directionalLength!==x||Y.pointLength!==m||Y.spotLength!==$||Y.rectAreaLength!==H||Y.hemiLength!==D||Y.numSunShadows!==w||Y.numDirectionalShadows!==T||Y.numPointShadows!==k||Y.numSpotShadows!==q||Y.numSpotMaps!==R||Y.numLightProbes!==X)&&(n.sun.length=b,n.directional.length=x,n.spot.length=$,n.rectArea.length=H,n.point.length=m,n.hemi.length=D,n.sunShadow.length=w,n.sunShadowMap.length=w,n.sunShadowMatrix.length=N,n.sunShadowCascade.length=N,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=k,n.pointShadowMap.length=k,n.pointShadowMatrix.length=k,n.spotShadow.length=q,n.spotShadowMap.length=q,n.spotLightMatrix.length=q+R-B,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=B,n.numLightProbes=X,Y.sunLength=b,Y.directionalLength=x,Y.pointLength=m,Y.spotLength=$,Y.rectAreaLength=H,Y.hemiLength=D,Y.numSunShadows=w,Y.numDirectionalShadows=T,Y.numPointShadows=k,Y.numSpotShadows=q,Y.numSpotMaps=R,Y.numLightProbes=X,n.version=l1++)}function u(h,d){let S=0,g=0,b=0,w=0,N=0,x=0,m=d.matrixWorldInverse;for(let $=0,H=h.length;$<H;$++){let D=h[$];if(D.isSunLight){let T=n.sun[S];T.direction.setFromMatrixPosition(D.matrixWorld),T.direction.transformDirection(m),S++}else if(D.isDirectionalLight){let T=n.directional[g];T.direction.setFromMatrixPosition(D.matrixWorld),s.setFromMatrixPosition(D.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),g++}else if(D.isSpotLight){let T=n.spot[w];T.position.setFromMatrixPosition(D.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(D.matrixWorld),s.setFromMatrixPosition(D.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),w++}else if(D.isRectAreaLight){let T=n.rectArea[N];T.position.setFromMatrixPosition(D.matrixWorld),T.position.applyMatrix4(m),a.identity(),r.copy(D.matrixWorld),r.premultiply(m),a.extractRotation(r),T.halfWidth.set(D.width*.5,0,0),T.halfHeight.set(0,D.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),N++}else if(D.isPointLight){let T=n.point[b];T.position.setFromMatrixPosition(D.matrixWorld),T.position.applyMatrix4(m),b++}else if(D.isHemisphereLight){let T=n.hemi[x];T.direction.setFromMatrixPosition(D.matrixWorld),T.direction.transformDirection(m),x++}}}return{setup:l,setupView:u,state:n}}function vg(i){let t=new u1(i),e=[],n=[],s=[];function r(g){S.camera=g,e.length=0,n.length=0,s.length=0}function a(g){e.push(g)}function l(g){n.push(g)}function u(g){s.push(g)}function h(){t.setup(e)}function d(g){t.setupView(e,g)}let S={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:S,setupLights:h,setupLightsView:d,pushLight:a,pushShadow:l,pushLightProbeGrid:u}}function h1(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),l;return a===void 0?(l=new vg(i),t.set(s,[l])):r>=a.length?(l=new vg(i),a.push(l)):l=a[r],l}function n(){t=new WeakMap}return{get:e,dispose:n}}var d1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,f1=`uniform sampler2D shadow_pass;
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
}`,p1=[new Z(1,0,0),new Z(-1,0,0),new Z(0,1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1)],m1=[new Z(0,-1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,-1,0),new Z(0,-1,0)],yg=new Je,Al=new Z,Ff=new Z;function g1(i,t,e){let n=new Ra,s=new zt,r=new zt,a=new on,l=new cu,u=new uu,h={},d=e.maxTextureSize,S={[ir]:li,[li]:ir,[cs]:cs},g=new $n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new zt},radius:{value:4}},vertexShader:d1,fragmentShader:f1}),b=g.clone();b.defines.HORIZONTAL_PASS=1;let w=new bn;w.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let N=new kn(w,g),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gl;let m=this.type;this.render=function(k,q,R){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||k.length===0)return;this.type===d0&&(Me("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=gl);let B=i.getRenderTarget(),X=i.getActiveCubeFace(),Y=i.getActiveMipmapLevel(),ot=i.state;ot.setBlending(us),ot.buffers.depth.getReversed()===!0?ot.buffers.color.setClear(0,0,0,0):ot.buffers.color.setClear(1,1,1,1),ot.buffers.depth.setTest(!0),ot.setScissorTest(!1);let ht=m!==this.type;ht&&q.traverse(function(j){j.material&&(Array.isArray(j.material)?j.material.forEach(it=>it.needsUpdate=!0):j.material.needsUpdate=!0)});for(let j=0,it=k.length;j<it;j++){let pt=k[j],_t=pt.shadow;if(_t===void 0){Me("WebGLShadowMap:",pt,"has no shadow.");continue}if(_t.autoUpdate===!1&&_t.needsUpdate===!1)continue;s.copy(_t.mapSize);let At=_t.getFrameExtents();s.multiply(At),r.copy(_t.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/At.x),s.x=r.x*At.x,_t.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/At.y),s.y=r.y*At.y,_t.mapSize.y=r.y));let xt=i.state.buffers.depth.getReversed();if(_t.camera._reversedDepth=xt,_t.map===null||ht===!0){if(_t.map!==null&&(_t.map.depthTexture!==null&&(_t.map.depthTexture.dispose(),_t.map.depthTexture=null),_t.map.dispose()),this.type===Ua){if(pt.isPointLight){Me("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}_t.map=new _i(s.x,s.y,{format:or,type:Zi,minFilter:Wn,magFilter:Wn,generateMipmaps:!1}),_t.map.texture.name=pt.name+".shadowMap",_t.map.depthTexture=new Ks(s.x,s.y,Li),_t.map.depthTexture.name=pt.name+".shadowMapDepth",_t.map.depthTexture.format=rs,_t.map.depthTexture.compareFunction=null,_t.map.depthTexture.minFilter=Fn,_t.map.depthTexture.magFilter=Fn}else pt.isPointLight?(_t.map=new _h(s.x),_t.map.depthTexture=new eu(s.x,Ji)):(_t.map=new _i(s.x,s.y),_t.map.depthTexture=new Ks(s.x,s.y,Ji)),_t.map.depthTexture.name=pt.name+".shadowMap",_t.map.depthTexture.format=rs,this.type===gl?(_t.map.depthTexture.compareFunction=xt?fh:dh,_t.map.depthTexture.minFilter=Wn,_t.map.depthTexture.magFilter=Wn):(_t.map.depthTexture.compareFunction=null,_t.map.depthTexture.minFilter=Fn,_t.map.depthTexture.magFilter=Fn);_t.camera.updateProjectionMatrix()}_t.map.isWebGLCubeRenderTarget!==!0&&(_t.map.width!==s.x||_t.map.height!==s.y)&&_t.map.setSize(s.x,s.y);let Et=_t.map.isWebGLCubeRenderTarget?6:_t.getViewportCount();pt.isPointLight!==!0&&_t.updateMatrices(pt,R);for(let wt=0;wt<Et;wt++){let kt=_t.getCamera(wt);if(pt.isPointLight){let ee=_t.camera,Ze=_t.matrix,Ne=pt.distance||ee.far;Ne!==ee.far&&(ee.far=Ne,ee.updateProjectionMatrix()),Al.setFromMatrixPosition(pt.matrixWorld),ee.position.copy(Al),Ff.copy(ee.position),Ff.add(p1[wt]),ee.up.copy(m1[wt]),ee.lookAt(Ff),ee.updateMatrixWorld(),Ze.makeTranslation(-Al.x,-Al.y,-Al.z),yg.multiplyMatrices(ee.projectionMatrix,ee.matrixWorldInverse),_t._frustum.setFromProjectionMatrix(yg,ee.coordinateSystem,ee.reversedDepth)}if(_t.map.isWebGLCubeRenderTarget)i.setRenderTarget(_t.map,wt),i.clear();else{wt===0&&(i.setRenderTarget(_t.map),i.clear());let ee=_t.getViewport(wt);a.set(r.x*ee.x,r.y*ee.y,r.x*ee.z,r.y*ee.w),ot.viewport(a)}n=_t.getFrustum(wt),D(q,R,kt,pt,this.type)}_t.isPointLightShadow!==!0&&this.type===Ua&&$(_t,R),_t.needsUpdate=!1}m=this.type,x.needsUpdate=!1,i.setRenderTarget(B,X,Y)};function $(k,q){let R=t.update(N);g.defines.VSM_SAMPLES!==k.blurSamples&&(g.defines.VSM_SAMPLES=k.blurSamples,b.defines.VSM_SAMPLES=k.blurSamples,g.needsUpdate=!0,b.needsUpdate=!0),k.mapPass===null?k.mapPass=new _i(s.x,s.y,{format:or,type:Zi}):(k.mapPass.width!==k.map.width||k.mapPass.height!==k.map.height)&&k.mapPass.setSize(k.map.width,k.map.height),g.uniforms.shadow_pass.value=k.map.depthTexture,g.uniforms.resolution.value.set(k.map.width,k.map.height),g.uniforms.radius.value=k.radius,i.setRenderTarget(k.mapPass),i.clear(),i.renderBufferDirect(q,null,R,g,N,null),b.uniforms.shadow_pass.value=k.mapPass.texture,b.uniforms.resolution.value.set(k.map.width,k.map.height),b.uniforms.radius.value=k.radius,i.setRenderTarget(k.map),i.clear(),i.renderBufferDirect(q,null,R,b,N,null)}function H(k,q,R,B){let X=null,Y=R.isPointLight===!0?k.customDistanceMaterial:k.customDepthMaterial;if(Y!==void 0)X=Y;else if(X=R.isPointLight===!0?u:l,i.localClippingEnabled&&q.clipShadows===!0&&Array.isArray(q.clippingPlanes)&&q.clippingPlanes.length!==0||q.displacementMap&&q.displacementScale!==0||q.alphaMap&&q.alphaTest>0||q.map&&q.alphaTest>0||q.alphaToCoverage===!0){let ot=X.uuid,ht=q.uuid,j=h[ot];j===void 0&&(j={},h[ot]=j);let it=j[ht];it===void 0&&(it=X.clone(),j[ht]=it,q.addEventListener("dispose",T)),X=it}if(X.visible=q.visible,X.wireframe=q.wireframe,B===Ua?X.side=q.shadowSide!==null?q.shadowSide:q.side:X.side=q.shadowSide!==null?q.shadowSide:S[q.side],X.alphaMap=q.alphaMap,X.alphaTest=q.alphaToCoverage===!0?.5:q.alphaTest,X.map=q.map,X.clipShadows=q.clipShadows,X.clippingPlanes=q.clippingPlanes,X.clipIntersection=q.clipIntersection,X.displacementMap=q.displacementMap,X.displacementScale=q.displacementScale,X.displacementBias=q.displacementBias,X.wireframeLinewidth=q.wireframeLinewidth,X.linewidth=q.linewidth,R.isPointLight===!0&&X.isMeshDistanceMaterial===!0){let ot=i.properties.get(X);ot.light=R}return X}function D(k,q,R,B,X){if(k.visible===!1)return;if(k.layers.test(q.layers)&&(k.isMesh||k.isLine||k.isPoints)&&(k.castShadow||k.receiveShadow&&X===Ua)&&(!k.frustumCulled||k.intersectsFrustum(n))){k.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,k.matrixWorld);let ht=t.update(k),j=k.material;if(Array.isArray(j)){let it=ht.groups;for(let pt=0,_t=it.length;pt<_t;pt++){let At=it[pt],xt=j[At.materialIndex];if(xt&&xt.visible){let Et=H(k,xt,B,X);k.onBeforeShadow(i,k,q,R,ht,Et,At),i.renderBufferDirect(R,null,ht,Et,k,At),k.onAfterShadow(i,k,q,R,ht,Et,At)}}}else if(j.visible){let it=H(k,j,B,X);k.onBeforeShadow(i,k,q,R,ht,it,null),i.renderBufferDirect(R,null,ht,it,k,null),k.onAfterShadow(i,k,q,R,ht,it,null)}}let ot=k.children;for(let ht=0,j=ot.length;ht<j;ht++)D(ot[ht],q,R,B,X)}function T(k){k.target.removeEventListener("dispose",T);for(let R in h){let B=h[R],X=k.target.uuid;X in B&&(B[X].dispose(),delete B[X])}}}function _1(i,t){function e(){let Q=!1,qt=new on,Mt=null,Gt=new on(0,0,0,0);return{setMask:function(Kt){Mt!==Kt&&!Q&&(i.colorMask(Kt,Kt,Kt,Kt),Mt=Kt)},setLocked:function(Kt){Q=Kt},setClear:function(Kt,Tt,oe,ie,tn){tn===!0&&(Kt*=ie,Tt*=ie,oe*=ie),qt.set(Kt,Tt,oe,ie),Gt.equals(qt)===!1&&(i.clearColor(Kt,Tt,oe,ie),Gt.copy(qt))},reset:function(){Q=!1,Mt=null,Gt.set(-1,0,0,0)}}}function n(){let Q=!1,qt=!1,Mt=null,Gt=null,Kt=null;return{setReversed:function(Tt){if(qt!==Tt){let oe=t.get("EXT_clip_control");Tt?oe.clipControlEXT(oe.LOWER_LEFT_EXT,oe.ZERO_TO_ONE_EXT):oe.clipControlEXT(oe.LOWER_LEFT_EXT,oe.NEGATIVE_ONE_TO_ONE_EXT),qt=Tt;let ie=Kt;Kt=null,this.setClear(ie)}},getReversed:function(){return qt},setTest:function(Tt){Tt?St(i.DEPTH_TEST):Ut(i.DEPTH_TEST)},setMask:function(Tt){Mt!==Tt&&!Q&&(i.depthMask(Tt),Mt=Tt)},setFunc:function(Tt){if(qt&&(Tt=X0[Tt]),Gt!==Tt){switch(Tt){case Fc:i.depthFunc(i.NEVER);break;case Bc:i.depthFunc(i.ALWAYS);break;case kc:i.depthFunc(i.LESS);break;case Ma:i.depthFunc(i.LEQUAL);break;case $c:i.depthFunc(i.EQUAL);break;case zc:i.depthFunc(i.GEQUAL);break;case Vc:i.depthFunc(i.GREATER);break;case Hc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Gt=Tt}},setLocked:function(Tt){Q=Tt},setClear:function(Tt){Kt!==Tt&&(Kt=Tt,qt&&(Tt=1-Tt),i.clearDepth(Tt))},reset:function(){Q=!1,Mt=null,Gt=null,Kt=null,qt=!1}}}function s(){let Q=!1,qt=null,Mt=null,Gt=null,Kt=null,Tt=null,oe=null,ie=null,tn=null;return{setTest:function(je){Q||(je?St(i.STENCIL_TEST):Ut(i.STENCIL_TEST))},setMask:function(je){qt!==je&&!Q&&(i.stencilMask(je),qt=je)},setFunc:function(je,Vn,hi){(Mt!==je||Gt!==Vn||Kt!==hi)&&(i.stencilFunc(je,Vn,hi),Mt=je,Gt=Vn,Kt=hi)},setOp:function(je,Vn,hi){(Tt!==je||oe!==Vn||ie!==hi)&&(i.stencilOp(je,Vn,hi),Tt=je,oe=Vn,ie=hi)},setLocked:function(je){Q=je},setClear:function(je){tn!==je&&(i.clearStencil(je),tn=je)},reset:function(){Q=!1,qt=null,Mt=null,Gt=null,Kt=null,Tt=null,oe=null,ie=null,tn=null}}}let r=new e,a=new n,l=new s,u=new WeakMap,h=new WeakMap,d={},S={},g={},b=new WeakMap,w=[],N=null,x=!1,m=null,$=null,H=null,D=null,T=null,k=null,q=null,R=new ve(0,0,0),B=0,X=!1,Y=null,ot=null,ht=null,j=null,it=null,pt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),_t=!1,At=0,xt=i.getParameter(i.VERSION);xt.indexOf("WebGL")!==-1?(At=parseFloat(/^WebGL (\d)/.exec(xt)[1]),_t=At>=1):xt.indexOf("OpenGL ES")!==-1&&(At=parseFloat(/^OpenGL ES (\d)/.exec(xt)[1]),_t=At>=2);let Et=null,wt={},kt=i.getParameter(i.SCISSOR_BOX),ee=i.getParameter(i.VIEWPORT),Ze=new on().fromArray(kt),Ne=new on().fromArray(ee);function We(Q,qt,Mt,Gt){let Kt=new Uint8Array(4),Tt=i.createTexture();i.bindTexture(Q,Tt),i.texParameteri(Q,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(Q,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let oe=0;oe<Mt;oe++)Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?i.texImage3D(qt,0,i.RGBA,1,1,Gt,0,i.RGBA,i.UNSIGNED_BYTE,Kt):i.texImage2D(qt+oe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Kt);return Tt}let yt={};yt[i.TEXTURE_2D]=We(i.TEXTURE_2D,i.TEXTURE_2D,1),yt[i.TEXTURE_CUBE_MAP]=We(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),yt[i.TEXTURE_2D_ARRAY]=We(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),yt[i.TEXTURE_3D]=We(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),l.setClear(0),St(i.DEPTH_TEST),a.setFunc(Ma),Lt(!1),Bt(nf),St(i.CULL_FACE),Rt(us);function St(Q){d[Q]!==!0&&(i.enable(Q),d[Q]=!0)}function Ut(Q){d[Q]!==!1&&(i.disable(Q),d[Q]=!1)}function ue(Q,qt){return g[Q]!==qt?(i.bindFramebuffer(Q,qt),g[Q]=qt,Q===i.DRAW_FRAMEBUFFER&&(g[i.FRAMEBUFFER]=qt),Q===i.FRAMEBUFFER&&(g[i.DRAW_FRAMEBUFFER]=qt),!0):!1}function jt(Q,qt){let Mt=w,Gt=!1;if(Q){Mt=b.get(qt),Mt===void 0&&(Mt=[],b.set(qt,Mt));let Kt=Q.textures;if(Mt.length!==Kt.length||Mt[0]!==i.COLOR_ATTACHMENT0){for(let Tt=0,oe=Kt.length;Tt<oe;Tt++)Mt[Tt]=i.COLOR_ATTACHMENT0+Tt;Mt.length=Kt.length,Gt=!0}}else Mt[0]!==i.BACK&&(Mt[0]=i.BACK,Gt=!0);Gt&&i.drawBuffers(Mt)}function ge(Q){return N!==Q?(i.useProgram(Q),N=Q,!0):!1}let Qt={[Lr]:i.FUNC_ADD,[p0]:i.FUNC_SUBTRACT,[m0]:i.FUNC_REVERSE_SUBTRACT};Qt[g0]=i.MIN,Qt[_0]=i.MAX;let st={[x0]:i.ZERO,[v0]:i.ONE,[y0]:i.SRC_COLOR,[of]:i.SRC_ALPHA,[T0]:i.SRC_ALPHA_SATURATE,[w0]:i.DST_COLOR,[M0]:i.DST_ALPHA,[S0]:i.ONE_MINUS_SRC_COLOR,[lf]:i.ONE_MINUS_SRC_ALPHA,[E0]:i.ONE_MINUS_DST_COLOR,[b0]:i.ONE_MINUS_DST_ALPHA,[A0]:i.CONSTANT_COLOR,[C0]:i.ONE_MINUS_CONSTANT_COLOR,[R0]:i.CONSTANT_ALPHA,[I0]:i.ONE_MINUS_CONSTANT_ALPHA};function Rt(Q,qt,Mt,Gt,Kt,Tt,oe,ie,tn,je){if(Q===us){x===!0&&(Ut(i.BLEND),x=!1);return}if(x===!1&&(St(i.BLEND),x=!0),Q!==f0){if(Q!==m||je!==X){if(($!==Lr||T!==Lr)&&(i.blendEquation(i.FUNC_ADD),$=Lr,T=Lr),je)switch(Q){case Oa:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case sf:i.blendFunc(i.ONE,i.ONE);break;case rf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case af:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ee("WebGLState: Invalid blending: ",Q);break}else switch(Q){case Oa:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case sf:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case rf:Ee("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case af:Ee("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ee("WebGLState: Invalid blending: ",Q);break}H=null,D=null,k=null,q=null,R.set(0,0,0),B=0,m=Q,X=je}return}Kt=Kt||qt,Tt=Tt||Mt,oe=oe||Gt,(qt!==$||Kt!==T)&&(i.blendEquationSeparate(Qt[qt],Qt[Kt]),$=qt,T=Kt),(Mt!==H||Gt!==D||Tt!==k||oe!==q)&&(i.blendFuncSeparate(st[Mt],st[Gt],st[Tt],st[oe]),H=Mt,D=Gt,k=Tt,q=oe),(ie.equals(R)===!1||tn!==B)&&(i.blendColor(ie.r,ie.g,ie.b,tn),R.copy(ie),B=tn),m=Q,X=!1}function G(Q,qt){Q.side===cs?Ut(i.CULL_FACE):St(i.CULL_FACE);let Mt=Q.side===li;qt&&(Mt=!Mt),Lt(Mt),Q.blending===Oa&&Q.transparent===!1?Rt(us):Rt(Q.blending,Q.blendEquation,Q.blendSrc,Q.blendDst,Q.blendEquationAlpha,Q.blendSrcAlpha,Q.blendDstAlpha,Q.blendColor,Q.blendAlpha,Q.premultipliedAlpha),a.setFunc(Q.depthFunc),a.setTest(Q.depthTest),a.setMask(Q.depthWrite),r.setMask(Q.colorWrite);let Gt=Q.stencilWrite;l.setTest(Gt),Gt&&(l.setMask(Q.stencilWriteMask),l.setFunc(Q.stencilFunc,Q.stencilRef,Q.stencilFuncMask),l.setOp(Q.stencilFail,Q.stencilZFail,Q.stencilZPass)),fe(Q.polygonOffset,Q.polygonOffsetFactor,Q.polygonOffsetUnits),Q.alphaToCoverage===!0?St(i.SAMPLE_ALPHA_TO_COVERAGE):Ut(i.SAMPLE_ALPHA_TO_COVERAGE)}function Lt(Q){Y!==Q&&(Q?i.frontFace(i.CW):i.frontFace(i.CCW),Y=Q)}function Bt(Q){Q!==u0?(St(i.CULL_FACE),Q!==ot&&(Q===nf?i.cullFace(i.BACK):Q===h0?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ut(i.CULL_FACE),ot=Q}function ce(Q){Q!==ht&&(_t&&i.lineWidth(Q),ht=Q)}function fe(Q,qt,Mt){Q?(St(i.POLYGON_OFFSET_FILL),(j!==qt||it!==Mt)&&(j=qt,it=Mt,a.getReversed()&&(qt=-qt),i.polygonOffset(qt,Mt))):Ut(i.POLYGON_OFFSET_FILL)}function de(Q){Q?St(i.SCISSOR_TEST):Ut(i.SCISSOR_TEST)}function Ae(Q){Q===void 0&&(Q=i.TEXTURE0+pt-1),Et!==Q&&(i.activeTexture(Q),Et=Q)}function J(Q,qt,Mt){Mt===void 0&&(Et===null?Mt=i.TEXTURE0+pt-1:Mt=Et);let Gt=wt[Mt];Gt===void 0&&(Gt={type:void 0,texture:void 0},wt[Mt]=Gt),(Gt.type!==Q||Gt.texture!==qt)&&(Et!==Mt&&(i.activeTexture(Mt),Et=Mt),i.bindTexture(Q,qt||yt[Q]),Gt.type=Q,Gt.texture=qt)}function Oe(){let Q=wt[Et];Q!==void 0&&Q.type!==void 0&&(i.bindTexture(Q.type,null),Q.type=void 0,Q.texture=void 0)}function Ue(){try{i.compressedTexImage2D(...arguments)}catch(Q){Ee("WebGLState:",Q)}}function F(){try{i.compressedTexImage3D(...arguments)}catch(Q){Ee("WebGLState:",Q)}}function E(){try{i.texSubImage2D(...arguments)}catch(Q){Ee("WebGLState:",Q)}}function rt(){try{i.texSubImage3D(...arguments)}catch(Q){Ee("WebGLState:",Q)}}function ct(){try{i.compressedTexSubImage2D(...arguments)}catch(Q){Ee("WebGLState:",Q)}}function vt(){try{i.compressedTexSubImage3D(...arguments)}catch(Q){Ee("WebGLState:",Q)}}function Dt(){try{i.texStorage2D(...arguments)}catch(Q){Ee("WebGLState:",Q)}}function $t(){try{i.texStorage3D(...arguments)}catch(Q){Ee("WebGLState:",Q)}}function gt(){try{i.texImage2D(...arguments)}catch(Q){Ee("WebGLState:",Q)}}function dt(){try{i.texImage3D(...arguments)}catch(Q){Ee("WebGLState:",Q)}}function Xt(Q){return S[Q]!==void 0?S[Q]:i.getParameter(Q)}function he(Q,qt){S[Q]!==qt&&(i.pixelStorei(Q,qt),S[Q]=qt)}function Jt(Q){Ze.equals(Q)===!1&&(i.scissor(Q.x,Q.y,Q.z,Q.w),Ze.copy(Q))}function Ht(Q){Ne.equals(Q)===!1&&(i.viewport(Q.x,Q.y,Q.z,Q.w),Ne.copy(Q))}function le(Q,qt){let Mt=h.get(qt);Mt===void 0&&(Mt=new WeakMap,h.set(qt,Mt));let Gt=Mt.get(Q);Gt===void 0&&(Gt=i.getUniformBlockIndex(qt,Q.name),Mt.set(Q,Gt))}function pe(Q,qt){let Gt=h.get(qt).get(Q);u.get(qt)!==Gt&&(i.uniformBlockBinding(qt,Gt,Q.__bindingPointIndex),u.set(qt,Gt))}function Ce(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),d={},S={},Et=null,wt={},g={},b=new WeakMap,w=[],N=null,x=!1,m=null,$=null,H=null,D=null,T=null,k=null,q=null,R=new ve(0,0,0),B=0,X=!1,Y=null,ot=null,ht=null,j=null,it=null,Ze.set(0,0,i.canvas.width,i.canvas.height),Ne.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),l.reset()}return{buffers:{color:r,depth:a,stencil:l},enable:St,disable:Ut,bindFramebuffer:ue,drawBuffers:jt,useProgram:ge,setBlending:Rt,setMaterial:G,setFlipSided:Lt,setCullFace:Bt,setLineWidth:ce,setPolygonOffset:fe,setScissorTest:de,activeTexture:Ae,bindTexture:J,unbindTexture:Oe,compressedTexImage2D:Ue,compressedTexImage3D:F,texImage2D:gt,texImage3D:dt,pixelStorei:he,getParameter:Xt,updateUBOMapping:le,uniformBlockBinding:pe,texStorage2D:Dt,texStorage3D:$t,texSubImage2D:E,texSubImage3D:rt,compressedTexSubImage2D:ct,compressedTexSubImage3D:vt,scissor:Jt,viewport:Ht,reset:Ce}}function x1(i,t,e,n,s,r,a){let l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new zt,d=new WeakMap,S=new Set,g,b=new WeakMap,w=!1;try{w=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function N(F,E){return w?new OffscreenCanvas(F,E):Bo("canvas")}function x(F,E,rt){let ct=1,vt=Ue(F);if((vt.width>rt||vt.height>rt)&&(ct=rt/Math.max(vt.width,vt.height)),ct<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){let Dt=Math.floor(ct*vt.width),$t=Math.floor(ct*vt.height);g===void 0&&(g=N(Dt,$t));let gt=E?N(Dt,$t):g;return gt.width=Dt,gt.height=$t,gt.getContext("2d").drawImage(F,0,0,Dt,$t),Me("WebGLRenderer: Texture has been resized from ("+vt.width+"x"+vt.height+") to ("+Dt+"x"+$t+")."),gt}else return"data"in F&&Me("WebGLRenderer: Image in DataTexture is too big ("+vt.width+"x"+vt.height+")."),F;return F}function m(F){return F.generateMipmaps}function $(F){i.generateMipmap(F)}function H(F){return F.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?i.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function D(F,E,rt,ct,vt,Dt=!1){if(F!==null){if(i[F]!==void 0)return i[F];Me("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let $t;ct&&($t=t.get("EXT_texture_norm16"),$t||Me("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let gt=E;if(E===i.RED&&(rt===i.FLOAT&&(gt=i.R32F),rt===i.HALF_FLOAT&&(gt=i.R16F),rt===i.UNSIGNED_BYTE&&(gt=i.R8),rt===i.UNSIGNED_SHORT&&$t&&(gt=$t.R16_EXT),rt===i.SHORT&&$t&&(gt=$t.R16_SNORM_EXT)),E===i.RED_INTEGER&&(rt===i.UNSIGNED_BYTE&&(gt=i.R8UI),rt===i.UNSIGNED_SHORT&&(gt=i.R16UI),rt===i.UNSIGNED_INT&&(gt=i.R32UI),rt===i.BYTE&&(gt=i.R8I),rt===i.SHORT&&(gt=i.R16I),rt===i.INT&&(gt=i.R32I)),E===i.RG&&(rt===i.FLOAT&&(gt=i.RG32F),rt===i.HALF_FLOAT&&(gt=i.RG16F),rt===i.UNSIGNED_BYTE&&(gt=i.RG8),rt===i.UNSIGNED_SHORT&&$t&&(gt=$t.RG16_EXT),rt===i.SHORT&&$t&&(gt=$t.RG16_SNORM_EXT)),E===i.RG_INTEGER&&(rt===i.UNSIGNED_BYTE&&(gt=i.RG8UI),rt===i.UNSIGNED_SHORT&&(gt=i.RG16UI),rt===i.UNSIGNED_INT&&(gt=i.RG32UI),rt===i.BYTE&&(gt=i.RG8I),rt===i.SHORT&&(gt=i.RG16I),rt===i.INT&&(gt=i.RG32I)),E===i.RGB_INTEGER&&(rt===i.UNSIGNED_BYTE&&(gt=i.RGB8UI),rt===i.UNSIGNED_SHORT&&(gt=i.RGB16UI),rt===i.UNSIGNED_INT&&(gt=i.RGB32UI),rt===i.BYTE&&(gt=i.RGB8I),rt===i.SHORT&&(gt=i.RGB16I),rt===i.INT&&(gt=i.RGB32I)),E===i.RGBA_INTEGER&&(rt===i.UNSIGNED_BYTE&&(gt=i.RGBA8UI),rt===i.UNSIGNED_SHORT&&(gt=i.RGBA16UI),rt===i.UNSIGNED_INT&&(gt=i.RGBA32UI),rt===i.BYTE&&(gt=i.RGBA8I),rt===i.SHORT&&(gt=i.RGBA16I),rt===i.INT&&(gt=i.RGBA32I)),E===i.RGB&&(rt===i.UNSIGNED_SHORT&&$t&&(gt=$t.RGB16_EXT),rt===i.SHORT&&$t&&(gt=$t.RGB16_SNORM_EXT),rt===i.UNSIGNED_INT_5_9_9_9_REV&&(gt=i.RGB9_E5),rt===i.UNSIGNED_INT_10F_11F_11F_REV&&(gt=i.R11F_G11F_B10F)),E===i.RGBA){let dt=Dt?Fo:qe.getTransfer(vt);rt===i.FLOAT&&(gt=i.RGBA32F),rt===i.HALF_FLOAT&&(gt=i.RGBA16F),rt===i.UNSIGNED_BYTE&&(gt=dt===an?i.SRGB8_ALPHA8:i.RGBA8),rt===i.UNSIGNED_SHORT&&$t&&(gt=$t.RGBA16_EXT),rt===i.SHORT&&$t&&(gt=$t.RGBA16_SNORM_EXT),rt===i.UNSIGNED_SHORT_4_4_4_4&&(gt=i.RGBA4),rt===i.UNSIGNED_SHORT_5_5_5_1&&(gt=i.RGB5_A1)}return(gt===i.R16F||gt===i.R32F||gt===i.RG16F||gt===i.RG32F||gt===i.RGBA16F||gt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),gt}function T(F,E){let rt;return F?E===null||E===Ji||E===Ba?rt=i.DEPTH24_STENCIL8:E===Li?rt=i.DEPTH32F_STENCIL8:E===Fa&&(rt=i.DEPTH24_STENCIL8,Me("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ji||E===Ba?rt=i.DEPTH_COMPONENT24:E===Li?rt=i.DEPTH_COMPONENT32F:E===Fa&&(rt=i.DEPTH_COMPONENT16),rt}function k(F,E){return m(F)===!0||F.isFramebufferTexture&&F.minFilter!==Fn&&F.minFilter!==Wn?Math.log2(Math.max(E.width,E.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?E.mipmaps.length:1}function q(F){let E=F.target;E.removeEventListener("dispose",q),B(E),E.isVideoTexture&&d.delete(E),E.isHTMLTexture&&S.delete(E)}function R(F){let E=F.target;E.removeEventListener("dispose",R),Y(E)}function B(F){let E=n.get(F);if(E.__webglInit===void 0)return;let rt=F.source,ct=b.get(rt);if(ct){let vt=ct[E.__cacheKey];vt.usedTimes--,vt.usedTimes===0&&X(F),Object.keys(ct).length===0&&b.delete(rt)}n.remove(F)}function X(F){let E=n.get(F);i.deleteTexture(E.__webglTexture);let rt=F.source,ct=b.get(rt);delete ct[E.__cacheKey],a.memory.textures--}function Y(F){let E=n.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),n.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let ct=0;ct<6;ct++){if(Array.isArray(E.__webglFramebuffer[ct]))for(let vt=0;vt<E.__webglFramebuffer[ct].length;vt++)i.deleteFramebuffer(E.__webglFramebuffer[ct][vt]);else i.deleteFramebuffer(E.__webglFramebuffer[ct]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[ct])}else{if(Array.isArray(E.__webglFramebuffer))for(let ct=0;ct<E.__webglFramebuffer.length;ct++)i.deleteFramebuffer(E.__webglFramebuffer[ct]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ct=0;ct<E.__webglColorRenderbuffer.length;ct++)E.__webglColorRenderbuffer[ct]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[ct]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let rt=F.textures;for(let ct=0,vt=rt.length;ct<vt;ct++){let Dt=n.get(rt[ct]);Dt.__webglTexture&&(i.deleteTexture(Dt.__webglTexture),a.memory.textures--),n.remove(rt[ct])}n.remove(F)}let ot=0;function ht(){ot=0}function j(){return ot}function it(F){ot=F}function pt(){let F=ot;return F>=s.maxTextures&&Me("WebGLTextures: Trying to use "+(F+1)+" texture units while this GPU supports only "+s.maxTextures),ot+=1,F}function _t(F){let E=[];return E.push(F.wrapS),E.push(F.wrapT),E.push(F.wrapR||0),E.push(F.magFilter),E.push(F.minFilter),E.push(F.anisotropy),E.push(F.internalFormat),E.push(F.format),E.push(F.type),E.push(F.generateMipmaps),E.push(F.premultiplyAlpha),E.push(F.flipY),E.push(F.unpackAlignment),E.push(F.colorSpace),E.join()}function At(F,E){let rt=n.get(F);if(F.isVideoTexture&&J(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&rt.__version!==F.version){let ct=F.image;if(ct===null)Me("WebGLRenderer: Texture marked for update but no image data found.");else if(ct.complete===!1)Me("WebGLRenderer: Texture marked for update but image is incomplete");else{Ut(rt,F,E);return}}else F.isExternalTexture&&(rt.__webglTexture=F.sourceTexture?F.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,rt.__webglTexture,i.TEXTURE0+E)}function xt(F,E){let rt=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&rt.__version!==F.version){Ut(rt,F,E);return}else F.isExternalTexture&&(rt.__webglTexture=F.sourceTexture?F.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,rt.__webglTexture,i.TEXTURE0+E)}function Et(F,E){let rt=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&rt.__version!==F.version){Ut(rt,F,E);return}e.bindTexture(i.TEXTURE_3D,rt.__webglTexture,i.TEXTURE0+E)}function wt(F,E){let rt=n.get(F);if(F.isCubeDepthTexture!==!0&&F.version>0&&rt.__version!==F.version){ue(rt,F,E);return}e.bindTexture(i.TEXTURE_CUBE_MAP,rt.__webglTexture,i.TEXTURE0+E)}let kt={[Gc]:i.REPEAT,[is]:i.CLAMP_TO_EDGE,[Wc]:i.MIRRORED_REPEAT},ee={[Fn]:i.NEAREST,[D0]:i.NEAREST_MIPMAP_NEAREST,[xl]:i.NEAREST_MIPMAP_LINEAR,[Wn]:i.LINEAR,[Au]:i.LINEAR_MIPMAP_NEAREST,[rr]:i.LINEAR_MIPMAP_LINEAR},Ze={[F0]:i.NEVER,[V0]:i.ALWAYS,[B0]:i.LESS,[dh]:i.LEQUAL,[k0]:i.EQUAL,[fh]:i.GEQUAL,[$0]:i.GREATER,[z0]:i.NOTEQUAL};function Ne(F,E){if(E.type===Li&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Wn||E.magFilter===Au||E.magFilter===xl||E.magFilter===rr||E.minFilter===Wn||E.minFilter===Au||E.minFilter===xl||E.minFilter===rr)&&Me("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(F,i.TEXTURE_WRAP_S,kt[E.wrapS]),i.texParameteri(F,i.TEXTURE_WRAP_T,kt[E.wrapT]),(F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY)&&i.texParameteri(F,i.TEXTURE_WRAP_R,kt[E.wrapR]),i.texParameteri(F,i.TEXTURE_MAG_FILTER,ee[E.magFilter]),i.texParameteri(F,i.TEXTURE_MIN_FILTER,ee[E.minFilter]),E.compareFunction&&(i.texParameteri(F,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(F,i.TEXTURE_COMPARE_FUNC,Ze[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Fn||E.minFilter!==xl&&E.minFilter!==rr||E.type===Li&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let rt=t.get("EXT_texture_filter_anisotropic");i.texParameterf(F,rt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function We(F,E){let rt=!1;F.__webglInit===void 0&&(F.__webglInit=!0,E.addEventListener("dispose",q));let ct=E.source,vt=b.get(ct);vt===void 0&&(vt={},b.set(ct,vt));let Dt=_t(E);if(Dt!==F.__cacheKey){vt[Dt]===void 0&&(vt[Dt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,rt=!0),vt[Dt].usedTimes++;let $t=vt[F.__cacheKey];$t!==void 0&&(vt[F.__cacheKey].usedTimes--,$t.usedTimes===0&&X(E)),F.__cacheKey=Dt,F.__webglTexture=vt[Dt].texture}return rt}function yt(F,E,rt){return Math.floor(Math.floor(F/rt)/E)}function St(F,E,rt,ct){let Dt=F.updateRanges;if(Dt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,E.width,E.height,rt,ct,E.data);else{Dt.sort((he,Jt)=>he.start-Jt.start);let $t=0;for(let he=1;he<Dt.length;he++){let Jt=Dt[$t],Ht=Dt[he],le=Jt.start+Jt.count,pe=yt(Ht.start,E.width,4),Ce=yt(Jt.start,E.width,4);Ht.start<=le+1&&pe===Ce&&yt(Ht.start+Ht.count-1,E.width,4)===pe?Jt.count=Math.max(Jt.count,Ht.start+Ht.count-Jt.start):(++$t,Dt[$t]=Ht)}Dt.length=$t+1;let gt=e.getParameter(i.UNPACK_ROW_LENGTH),dt=e.getParameter(i.UNPACK_SKIP_PIXELS),Xt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,E.width);for(let he=0,Jt=Dt.length;he<Jt;he++){let Ht=Dt[he],le=Math.floor(Ht.start/4),pe=Math.ceil(Ht.count/4),Ce=le%E.width,Q=Math.floor(le/E.width),qt=pe,Mt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Ce),e.pixelStorei(i.UNPACK_SKIP_ROWS,Q),e.texSubImage2D(i.TEXTURE_2D,0,Ce,Q,qt,Mt,rt,ct,E.data)}F.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,gt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,dt),e.pixelStorei(i.UNPACK_SKIP_ROWS,Xt)}}function Ut(F,E,rt){let ct=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ct=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ct=i.TEXTURE_3D);let vt=We(F,E),Dt=E.source;e.bindTexture(ct,F.__webglTexture,i.TEXTURE0+rt);let $t=n.get(Dt);if(Dt.version!==$t.__version||vt===!0){if(e.activeTexture(i.TEXTURE0+rt),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){let Mt=qe.getPrimaries(qe.workingColorSpace),Gt=E.colorSpace===Os?null:qe.getPrimaries(E.colorSpace),Kt=E.colorSpace===Os||Mt===Gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt)}e.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment);let dt=x(E.image,!1,s.maxTextureSize);dt=Oe(E,dt);let Xt=r.convert(E.format,E.colorSpace),he=r.convert(E.type),Jt=D(E.internalFormat,Xt,he,E.normalized,E.colorSpace,E.isVideoTexture);Ne(ct,E);let Ht,le=E.mipmaps,pe=E.isVideoTexture!==!0,Ce=$t.__version===void 0||vt===!0,Q=Dt.dataReady,qt=k(E,dt);if(E.isDepthTexture)Jt=T(E.format===ar,E.type),Ce&&(pe?e.texStorage2D(i.TEXTURE_2D,1,Jt,dt.width,dt.height):e.texImage2D(i.TEXTURE_2D,0,Jt,dt.width,dt.height,0,Xt,he,null));else if(E.isDataTexture)if(le.length>0){pe&&Ce&&e.texStorage2D(i.TEXTURE_2D,qt,Jt,le[0].width,le[0].height);for(let Mt=0,Gt=le.length;Mt<Gt;Mt++)Ht=le[Mt],pe?Q&&e.texSubImage2D(i.TEXTURE_2D,Mt,0,0,Ht.width,Ht.height,Xt,he,Ht.data):e.texImage2D(i.TEXTURE_2D,Mt,Jt,Ht.width,Ht.height,0,Xt,he,Ht.data);E.generateMipmaps=!1}else pe?(Ce&&e.texStorage2D(i.TEXTURE_2D,qt,Jt,dt.width,dt.height),Q&&St(E,dt,Xt,he)):e.texImage2D(i.TEXTURE_2D,0,Jt,dt.width,dt.height,0,Xt,he,dt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){pe&&Ce&&e.texStorage3D(i.TEXTURE_2D_ARRAY,qt,Jt,le[0].width,le[0].height,dt.depth);for(let Mt=0,Gt=le.length;Mt<Gt;Mt++)if(Ht=le[Mt],E.format!==Di)if(Xt!==null)if(pe){if(Q)if(E.layerUpdates.size>0){let Kt=Pf(Ht.width,Ht.height,E.format,E.type);for(let Tt of E.layerUpdates){let oe=Ht.data.subarray(Tt*Kt/Ht.data.BYTES_PER_ELEMENT,(Tt+1)*Kt/Ht.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Mt,0,0,Tt,Ht.width,Ht.height,1,Xt,oe)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Mt,0,0,0,Ht.width,Ht.height,dt.depth,Xt,Ht.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Mt,Jt,Ht.width,Ht.height,dt.depth,0,Ht.data,0,0);else Me("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else pe?Q&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Mt,0,0,0,Ht.width,Ht.height,dt.depth,Xt,he,Ht.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Mt,Jt,Ht.width,Ht.height,dt.depth,0,Xt,he,Ht.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{pe&&Ce&&e.texStorage2D(i.TEXTURE_2D,qt,Jt,le[0].width,le[0].height);for(let Mt=0,Gt=le.length;Mt<Gt;Mt++)Ht=le[Mt],E.format!==Di?Xt!==null?pe?Q&&e.compressedTexSubImage2D(i.TEXTURE_2D,Mt,0,0,Ht.width,Ht.height,Xt,Ht.data):e.compressedTexImage2D(i.TEXTURE_2D,Mt,Jt,Ht.width,Ht.height,0,Ht.data):Me("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pe?Q&&e.texSubImage2D(i.TEXTURE_2D,Mt,0,0,Ht.width,Ht.height,Xt,he,Ht.data):e.texImage2D(i.TEXTURE_2D,Mt,Jt,Ht.width,Ht.height,0,Xt,he,Ht.data)}else if(E.isDataArrayTexture)if(pe){if(Ce&&e.texStorage3D(i.TEXTURE_2D_ARRAY,qt,Jt,dt.width,dt.height,dt.depth),Q)if(E.layerUpdates.size>0){let Mt=Pf(dt.width,dt.height,E.format,E.type);for(let Gt of E.layerUpdates){let Kt=dt.data.subarray(Gt*Mt/dt.data.BYTES_PER_ELEMENT,(Gt+1)*Mt/dt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Gt,dt.width,dt.height,1,Xt,he,Kt)}E.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,dt.width,dt.height,dt.depth,Xt,he,dt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Jt,dt.width,dt.height,dt.depth,0,Xt,he,dt.data);else if(E.isData3DTexture)pe?(Ce&&e.texStorage3D(i.TEXTURE_3D,qt,Jt,dt.width,dt.height,dt.depth),Q&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,dt.width,dt.height,dt.depth,Xt,he,dt.data)):e.texImage3D(i.TEXTURE_3D,0,Jt,dt.width,dt.height,dt.depth,0,Xt,he,dt.data);else if(E.isFramebufferTexture){if(Ce)if(pe)e.texStorage2D(i.TEXTURE_2D,qt,Jt,dt.width,dt.height);else{let Mt=dt.width,Gt=dt.height;for(let Kt=0;Kt<qt;Kt++)e.texImage2D(i.TEXTURE_2D,Kt,Jt,Mt,Gt,0,Xt,he,null),Mt>>=1,Gt>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in i){let Mt=i.canvas;if(Mt.hasAttribute("layoutsubtree")||Mt.setAttribute("layoutsubtree","true"),dt.parentNode!==Mt){Mt.appendChild(dt),S.add(E),Mt.onpaint=Gt=>{let Kt=Gt.changedElements;for(let Tt of S)Kt.includes(Tt.image)&&(Tt.needsUpdate=!0)},Mt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,dt);else{let Kt=i.RGBA,Tt=i.RGBA,oe=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Kt,Tt,oe,dt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(le.length>0){if(pe&&Ce){let Mt=Ue(le[0]);e.texStorage2D(i.TEXTURE_2D,qt,Jt,Mt.width,Mt.height)}for(let Mt=0,Gt=le.length;Mt<Gt;Mt++)Ht=le[Mt],pe?Q&&e.texSubImage2D(i.TEXTURE_2D,Mt,0,0,Xt,he,Ht):e.texImage2D(i.TEXTURE_2D,Mt,Jt,Xt,he,Ht);E.generateMipmaps=!1}else if(pe){if(Ce){let Mt=Ue(dt);e.texStorage2D(i.TEXTURE_2D,qt,Jt,Mt.width,Mt.height)}Q&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Xt,he,dt)}else e.texImage2D(i.TEXTURE_2D,0,Jt,Xt,he,dt);m(E)&&$(ct),$t.__version=Dt.version,E.onUpdate&&E.onUpdate(E)}F.__version=E.version}function ue(F,E,rt){if(E.image.length!==6)return;let ct=We(F,E),vt=E.source;e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+rt);let Dt=n.get(vt);if(vt.version!==Dt.__version||ct===!0){e.activeTexture(i.TEXTURE0+rt);let $t=qe.getPrimaries(qe.workingColorSpace),gt=E.colorSpace===Os?null:qe.getPrimaries(E.colorSpace),dt=E.colorSpace===Os||$t===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);let Xt=E.isCompressedTexture||E.image[0].isCompressedTexture,he=E.image[0]&&E.image[0].isDataTexture,Jt=[];for(let Tt=0;Tt<6;Tt++)!Xt&&!he?Jt[Tt]=x(E.image[Tt],!0,s.maxCubemapSize):Jt[Tt]=he?E.image[Tt].image:E.image[Tt],Jt[Tt]=Oe(E,Jt[Tt]);let Ht=Jt[0],le=r.convert(E.format,E.colorSpace),pe=r.convert(E.type),Ce=D(E.internalFormat,le,pe,E.normalized,E.colorSpace),Q=E.isVideoTexture!==!0,qt=Dt.__version===void 0||ct===!0,Mt=vt.dataReady,Gt=k(E,Ht);Ne(i.TEXTURE_CUBE_MAP,E);let Kt;if(Xt){Q&&qt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Gt,Ce,Ht.width,Ht.height);for(let Tt=0;Tt<6;Tt++){Kt=Jt[Tt].mipmaps;for(let oe=0;oe<Kt.length;oe++){let ie=Kt[oe];E.format!==Di?le!==null?Q?Mt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,oe,0,0,ie.width,ie.height,le,ie.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,oe,Ce,ie.width,ie.height,0,ie.data):Me("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Q?Mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,oe,0,0,ie.width,ie.height,le,pe,ie.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,oe,Ce,ie.width,ie.height,0,le,pe,ie.data)}}}else{if(Kt=E.mipmaps,Q&&qt){Kt.length>0&&Gt++;let Tt=Ue(Jt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Gt,Ce,Tt.width,Tt.height)}for(let Tt=0;Tt<6;Tt++)if(he){Q?Mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,0,0,Jt[Tt].width,Jt[Tt].height,le,pe,Jt[Tt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,Ce,Jt[Tt].width,Jt[Tt].height,0,le,pe,Jt[Tt].data);for(let oe=0;oe<Kt.length;oe++){let tn=Kt[oe].image[Tt].image;Q?Mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,oe+1,0,0,tn.width,tn.height,le,pe,tn.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,oe+1,Ce,tn.width,tn.height,0,le,pe,tn.data)}}else{Q?Mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,0,0,le,pe,Jt[Tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,Ce,le,pe,Jt[Tt]);for(let oe=0;oe<Kt.length;oe++){let ie=Kt[oe];Q?Mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,oe+1,0,0,le,pe,ie.image[Tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,oe+1,Ce,le,pe,ie.image[Tt])}}}m(E)&&$(i.TEXTURE_CUBE_MAP),Dt.__version=vt.version,E.onUpdate&&E.onUpdate(E)}F.__version=E.version}function jt(F,E,rt,ct,vt,Dt){let $t=r.convert(rt.format,rt.colorSpace),gt=r.convert(rt.type),dt=D(rt.internalFormat,$t,gt,rt.normalized,rt.colorSpace),Xt=n.get(E),he=n.get(rt);if(he.__renderTarget=E,!Xt.__hasExternalTextures){let Jt=Math.max(1,E.width>>Dt),Ht=Math.max(1,E.height>>Dt);vt===i.TEXTURE_3D||vt===i.TEXTURE_2D_ARRAY?e.texImage3D(vt,Dt,dt,Jt,Ht,E.depth,0,$t,gt,null):e.texImage2D(vt,Dt,dt,Jt,Ht,0,$t,gt,null)}e.bindFramebuffer(i.FRAMEBUFFER,F),Ae(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ct,vt,he.__webglTexture,0,de(E)):(vt===i.TEXTURE_2D||vt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&vt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ct,vt,he.__webglTexture,Dt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ge(F,E,rt){if(i.bindRenderbuffer(i.RENDERBUFFER,F),E.depthBuffer){let ct=E.depthTexture,vt=ct&&ct.isDepthTexture?ct.type:null,Dt=T(E.stencilBuffer,vt),$t=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ae(E)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de(E),Dt,E.width,E.height):rt?i.renderbufferStorageMultisample(i.RENDERBUFFER,de(E),Dt,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Dt,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,$t,i.RENDERBUFFER,F)}else{let ct=E.textures;for(let vt=0;vt<ct.length;vt++){let Dt=ct[vt],$t=r.convert(Dt.format,Dt.colorSpace),gt=r.convert(Dt.type),dt=D(Dt.internalFormat,$t,gt,Dt.normalized,Dt.colorSpace);Ae(E)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de(E),dt,E.width,E.height):rt?i.renderbufferStorageMultisample(i.RENDERBUFFER,de(E),dt,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,dt,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Qt(F,E,rt){let ct=E.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,F),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let vt=n.get(E.depthTexture);if(vt.__renderTarget=E,(!vt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ct){if(vt.__webglInit===void 0&&(vt.__webglInit=!0,E.depthTexture.addEventListener("dispose",q)),vt.__webglTexture===void 0){vt.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,vt.__webglTexture),Ne(i.TEXTURE_CUBE_MAP,E.depthTexture);let Xt=r.convert(E.depthTexture.format),he=r.convert(E.depthTexture.type),Jt;E.depthTexture.format===rs?Jt=i.DEPTH_COMPONENT24:E.depthTexture.format===ar&&(Jt=i.DEPTH24_STENCIL8);for(let Ht=0;Ht<6;Ht++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ht,0,Jt,E.width,E.height,0,Xt,he,null)}}else At(E.depthTexture,0);let Dt=vt.__webglTexture,$t=de(E),gt=ct?i.TEXTURE_CUBE_MAP_POSITIVE_X+rt:i.TEXTURE_2D,dt=E.depthTexture.format===ar?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(E.depthTexture.format===rs)Ae(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,dt,gt,Dt,0,$t):i.framebufferTexture2D(i.FRAMEBUFFER,dt,gt,Dt,0);else if(E.depthTexture.format===ar)Ae(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,dt,gt,Dt,0,$t):i.framebufferTexture2D(i.FRAMEBUFFER,dt,gt,Dt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function st(F){let E=n.get(F),rt=F.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==F.depthTexture){let ct=F.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ct){let vt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ct.removeEventListener("dispose",vt)};ct.addEventListener("dispose",vt),E.__depthDisposeCallback=vt}E.__boundDepthTexture=ct}if(F.depthTexture&&!E.__autoAllocateDepthBuffer)if(rt)for(let ct=0;ct<6;ct++)Qt(E.__webglFramebuffer[ct],F,ct);else{let ct=F.texture.mipmaps;ct&&ct.length>0?Qt(E.__webglFramebuffer[0],F,0):Qt(E.__webglFramebuffer,F,0)}else if(rt){E.__webglDepthbuffer=[];for(let ct=0;ct<6;ct++)if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[ct]),E.__webglDepthbuffer[ct]===void 0)E.__webglDepthbuffer[ct]=i.createRenderbuffer(),ge(E.__webglDepthbuffer[ct],F,!1);else{let vt=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Dt=E.__webglDepthbuffer[ct];i.bindRenderbuffer(i.RENDERBUFFER,Dt),i.framebufferRenderbuffer(i.FRAMEBUFFER,vt,i.RENDERBUFFER,Dt)}}else{let ct=F.texture.mipmaps;if(ct&&ct.length>0?e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),ge(E.__webglDepthbuffer,F,!1);else{let vt=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Dt=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Dt),i.framebufferRenderbuffer(i.FRAMEBUFFER,vt,i.RENDERBUFFER,Dt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Rt(F,E,rt){let ct=n.get(F);E!==void 0&&jt(ct.__webglFramebuffer,F,F.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),rt!==void 0&&st(F)}function G(F){let E=F.texture,rt=n.get(F),ct=n.get(E);F.addEventListener("dispose",R);let vt=F.textures,Dt=F.isWebGLCubeRenderTarget===!0,$t=vt.length>1;if($t||(ct.__webglTexture===void 0&&(ct.__webglTexture=i.createTexture()),ct.__version=E.version,a.memory.textures++),Dt){rt.__webglFramebuffer=[];for(let gt=0;gt<6;gt++)if(E.mipmaps&&E.mipmaps.length>0){rt.__webglFramebuffer[gt]=[];for(let dt=0;dt<E.mipmaps.length;dt++)rt.__webglFramebuffer[gt][dt]=i.createFramebuffer()}else rt.__webglFramebuffer[gt]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){rt.__webglFramebuffer=[];for(let gt=0;gt<E.mipmaps.length;gt++)rt.__webglFramebuffer[gt]=i.createFramebuffer()}else rt.__webglFramebuffer=i.createFramebuffer();if($t)for(let gt=0,dt=vt.length;gt<dt;gt++){let Xt=n.get(vt[gt]);Xt.__webglTexture===void 0&&(Xt.__webglTexture=i.createTexture(),a.memory.textures++)}if(F.samples>0&&Ae(F)===!1){rt.__webglMultisampledFramebuffer=i.createFramebuffer(),rt.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,rt.__webglMultisampledFramebuffer);for(let gt=0;gt<vt.length;gt++){let dt=vt[gt];rt.__webglColorRenderbuffer[gt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,rt.__webglColorRenderbuffer[gt]);let Xt=r.convert(dt.format,dt.colorSpace),he=r.convert(dt.type),Jt=D(dt.internalFormat,Xt,he,dt.normalized,dt.colorSpace,F.isXRRenderTarget===!0),Ht=de(F);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ht,Jt,F.width,F.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,rt.__webglColorRenderbuffer[gt])}i.bindRenderbuffer(i.RENDERBUFFER,null),F.depthBuffer&&(rt.__webglDepthRenderbuffer=i.createRenderbuffer(),ge(rt.__webglDepthRenderbuffer,F,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Dt){e.bindTexture(i.TEXTURE_CUBE_MAP,ct.__webglTexture),Ne(i.TEXTURE_CUBE_MAP,E);for(let gt=0;gt<6;gt++)if(E.mipmaps&&E.mipmaps.length>0)for(let dt=0;dt<E.mipmaps.length;dt++)jt(rt.__webglFramebuffer[gt][dt],F,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,dt);else jt(rt.__webglFramebuffer[gt],F,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0);m(E)&&$(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if($t){for(let gt=0,dt=vt.length;gt<dt;gt++){let Xt=vt[gt],he=n.get(Xt),Jt=i.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Jt=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Jt,he.__webglTexture),Ne(Jt,Xt),jt(rt.__webglFramebuffer,F,Xt,i.COLOR_ATTACHMENT0+gt,Jt,0),m(Xt)&&$(Jt)}e.unbindTexture()}else{let gt=i.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(gt=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(gt,ct.__webglTexture),Ne(gt,E),E.mipmaps&&E.mipmaps.length>0)for(let dt=0;dt<E.mipmaps.length;dt++)jt(rt.__webglFramebuffer[dt],F,E,i.COLOR_ATTACHMENT0,gt,dt);else jt(rt.__webglFramebuffer,F,E,i.COLOR_ATTACHMENT0,gt,0);m(E)&&$(gt),e.unbindTexture()}F.depthBuffer&&st(F)}function Lt(F){let E=F.textures;for(let rt=0,ct=E.length;rt<ct;rt++){let vt=E[rt];if(m(vt)){let Dt=H(F),$t=n.get(vt).__webglTexture;e.bindTexture(Dt,$t),$(Dt),e.unbindTexture()}}}let Bt=[],ce=[];function fe(F){if(F.samples>0){if(Ae(F)===!1){let E=F.textures,rt=F.width,ct=F.height,vt=i.COLOR_BUFFER_BIT,Dt=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$t=n.get(F),gt=E.length>1;if(gt)for(let Xt=0;Xt<E.length;Xt++)e.bindFramebuffer(i.FRAMEBUFFER,$t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Xt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,$t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Xt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,$t.__webglMultisampledFramebuffer);let dt=F.texture.mipmaps;dt&&dt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,$t.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,$t.__webglFramebuffer);for(let Xt=0;Xt<E.length;Xt++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(vt|=i.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(vt|=i.STENCIL_BUFFER_BIT)),gt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,$t.__webglColorRenderbuffer[Xt]);let he=n.get(E[Xt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,he,0)}i.blitFramebuffer(0,0,rt,ct,0,0,rt,ct,vt,i.NEAREST),u===!0&&(Bt.length=0,ce.length=0,Bt.push(i.COLOR_ATTACHMENT0+Xt),F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&(Bt.push(Dt),ce.push(Dt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ce)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Bt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),gt)for(let Xt=0;Xt<E.length;Xt++){e.bindFramebuffer(i.FRAMEBUFFER,$t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Xt,i.RENDERBUFFER,$t.__webglColorRenderbuffer[Xt]);let he=n.get(E[Xt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,$t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Xt,i.TEXTURE_2D,he,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,$t.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&u){let E=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function de(F){return Math.min(s.maxSamples,F.samples)}function Ae(F){let E=n.get(F);return F.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function J(F){let E=a.render.frame;d.get(F)!==E&&(d.set(F,E),F.update())}function Oe(F,E){let rt=F.colorSpace,ct=F.format,vt=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||rt!==Oo&&rt!==Os&&(qe.getTransfer(rt)===an?(ct!==Di||vt!==vi)&&Me("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ee("WebGLTextures: Unsupported texture color space:",rt)),E}function Ue(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(h.width=F.naturalWidth||F.width,h.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(h.width=F.displayWidth,h.height=F.displayHeight):(h.width=F.width,h.height=F.height),h}this.allocateTextureUnit=pt,this.resetTextureUnits=ht,this.getTextureUnits=j,this.setTextureUnits=it,this.setTexture2D=At,this.setTexture2DArray=xt,this.setTexture3D=Et,this.setTextureCube=wt,this.rebindTextures=Rt,this.setupRenderTarget=G,this.updateRenderTargetMipmap=Lt,this.updateMultisampleRenderTarget=fe,this.setupDepthRenderbuffer=st,this.setupFrameBufferTexture=jt,this.useMultisampledRTT=Ae,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function v1(i,t){function e(n,s=Os){let r,a=qe.getTransfer(s);if(n===vi)return i.UNSIGNED_BYTE;if(n===Ru)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Iu)return i.UNSIGNED_SHORT_5_5_5_1;if(n===vf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===yf)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===_f)return i.BYTE;if(n===xf)return i.SHORT;if(n===Fa)return i.UNSIGNED_SHORT;if(n===Cu)return i.INT;if(n===Ji)return i.UNSIGNED_INT;if(n===Li)return i.FLOAT;if(n===Zi)return i.HALF_FLOAT;if(n===Sf)return i.ALPHA;if(n===Mf)return i.RGB;if(n===Di)return i.RGBA;if(n===rs)return i.DEPTH_COMPONENT;if(n===ar)return i.DEPTH_STENCIL;if(n===Pu)return i.RED;if(n===Lu)return i.RED_INTEGER;if(n===or)return i.RG;if(n===Du)return i.RG_INTEGER;if(n===Nu)return i.RGBA_INTEGER;if(n===vl||n===yl||n===Sl||n===Ml)if(a===an)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===vl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===yl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Sl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ml)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===vl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===yl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Sl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ml)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Uu||n===Ou||n===Fu||n===Bu)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Uu)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ou)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Fu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Bu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ku||n===$u||n===zu||n===Vu||n===Hu||n===bl||n===Gu)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ku||n===$u)return a===an?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===zu)return a===an?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Vu)return r.COMPRESSED_R11_EAC;if(n===Hu)return r.COMPRESSED_SIGNED_R11_EAC;if(n===bl)return r.COMPRESSED_RG11_EAC;if(n===Gu)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Wu||n===Xu||n===qu||n===Yu||n===Ju||n===Zu||n===ju||n===Ku||n===Qu||n===th||n===eh||n===nh||n===ih||n===sh)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Wu)return a===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Xu)return a===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===qu)return a===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Yu)return a===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ju)return a===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Zu)return a===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ju)return a===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ku)return a===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Qu)return a===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===th)return a===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===eh)return a===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===nh)return a===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ih)return a===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===sh)return a===an?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===rh||n===ah||n===oh)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===rh)return a===an?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ah)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===oh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===lh||n===ch||n===wl||n===uh)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===lh)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ch)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===wl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===uh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ba?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var y1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,S1=`
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

}`,Wf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Jo(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new $n({vertexShader:y1,fragmentShader:S1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new kn(new rl(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Xf=class extends as{constructor(t,e){super();let n=this,s=null,r=1,a=null,l="local-floor",u=1,h=null,d=null,S=null,g=null,b=null,w=null,N=typeof XRWebGLBinding<"u",x=new Wf,m={},$=e.getContextAttributes(),H=null,D=null,T=[],k=[],q=new zt,R=null,B=null,X=new ti;X.viewport=new on;let Y=new ti;Y.viewport=new on;let ot=[X,Y],ht=new bu,j=null,it=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(yt){let St=T[yt];return St===void 0&&(St=new Ca,T[yt]=St),St.getTargetRaySpace()},this.getControllerGrip=function(yt){let St=T[yt];return St===void 0&&(St=new Ca,T[yt]=St),St.getGripSpace()},this.getHand=function(yt){let St=T[yt];return St===void 0&&(St=new Ca,T[yt]=St),St.getHandSpace()};function pt(yt){let St=k.indexOf(yt.inputSource);if(St===-1)return;let Ut=T[St];Ut!==void 0&&(Ut.update(yt.inputSource,yt.frame,h||a),Ut.dispatchEvent({type:yt.type,data:yt.inputSource}))}function _t(){s.removeEventListener("select",pt),s.removeEventListener("selectstart",pt),s.removeEventListener("selectend",pt),s.removeEventListener("squeeze",pt),s.removeEventListener("squeezestart",pt),s.removeEventListener("squeezeend",pt),s.removeEventListener("end",_t),s.removeEventListener("inputsourceschange",At);for(let yt=0;yt<T.length;yt++){let St=k[yt];St!==null&&(k[yt]=null,T[yt].disconnect(St))}j=null,it=null,x.reset();for(let yt in m)delete m[yt];if(t.setRenderTarget(H),b=null,g=null,S=null,s=null,D=null,We.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(q.width,q.height,!1),B!==null){let yt=B.camera;yt.fov=B.fov,yt.zoom=B.zoom,yt.updateProjectionMatrix(),B=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(yt){r=yt,n.isPresenting===!0&&Me("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(yt){l=yt,n.isPresenting===!0&&Me("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(yt){h=yt},this.getBaseLayer=function(){return g!==null?g:b},this.getBinding=function(){return S===null&&N&&(S=new XRWebGLBinding(s,e)),S},this.getFrame=function(){return w},this.getSession=function(){return s},this.setSession=async function(yt){if(s=yt,s!==null){if(H=t.getRenderTarget(),s.addEventListener("select",pt),s.addEventListener("selectstart",pt),s.addEventListener("selectend",pt),s.addEventListener("squeeze",pt),s.addEventListener("squeezestart",pt),s.addEventListener("squeezeend",pt),s.addEventListener("end",_t),s.addEventListener("inputsourceschange",At),$.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(q),N&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ut=null,ue=null,jt=null;$.depth&&(jt=$.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Ut=$.stencil?ar:rs,ue=$.stencil?Ba:Ji);let ge={colorFormat:e.RGBA8,depthFormat:jt,scaleFactor:r};S=this.getBinding(),g=S.createProjectionLayer(ge),s.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),D=new _i(g.textureWidth,g.textureHeight,{format:Di,type:vi,depthTexture:new Ks(g.textureWidth,g.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,Ut),stencilBuffer:$.stencil,colorSpace:t.outputColorSpace,samples:$.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}else{let Ut={antialias:$.antialias,alpha:!0,depth:$.depth,stencil:$.stencil,framebufferScaleFactor:r};b=new XRWebGLLayer(s,e,Ut),s.updateRenderState({baseLayer:b}),t.setPixelRatio(1),t.setSize(b.framebufferWidth,b.framebufferHeight,!1),D=new _i(b.framebufferWidth,b.framebufferHeight,{format:Di,type:vi,colorSpace:t.outputColorSpace,stencilBuffer:$.stencil,resolveDepthBuffer:b.ignoreDepthValues===!1,resolveStencilBuffer:b.ignoreDepthValues===!1,storeMultisampledDepthBuffer:b.ignoreDepthValues===!1,storeMultisampledStencilBuffer:b.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(u),h=null,a=await s.requestReferenceSpace(l),We.setContext(s),We.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function At(yt){for(let St=0;St<yt.removed.length;St++){let Ut=yt.removed[St],ue=k.indexOf(Ut);ue>=0&&(k[ue]=null,T[ue].disconnect(Ut))}for(let St=0;St<yt.added.length;St++){let Ut=yt.added[St],ue=k.indexOf(Ut);if(ue===-1){for(let ge=0;ge<T.length;ge++)if(ge>=k.length){k.push(Ut),ue=ge;break}else if(k[ge]===null){k[ge]=Ut,ue=ge;break}if(ue===-1)break}let jt=T[ue];jt&&jt.connect(Ut)}}let xt=new Z,Et=new Z;function wt(yt,St,Ut){xt.setFromMatrixPosition(St.matrixWorld),Et.setFromMatrixPosition(Ut.matrixWorld);let ue=xt.distanceTo(Et),jt=St.projectionMatrix.elements,ge=Ut.projectionMatrix.elements,Qt=jt[14]/(jt[10]-1),st=jt[14]/(jt[10]+1),Rt=(jt[9]+1)/jt[5],G=(jt[9]-1)/jt[5],Lt=(jt[8]-1)/jt[0],Bt=(ge[8]+1)/ge[0],ce=Qt*Lt,fe=Qt*Bt,de=ue/(-Lt+Bt),Ae=de*-Lt;if(St.matrixWorld.decompose(yt.position,yt.quaternion,yt.scale),yt.translateX(Ae),yt.translateZ(de),yt.matrixWorld.compose(yt.position,yt.quaternion,yt.scale),yt.matrixWorldInverse.copy(yt.matrixWorld).invert(),jt[10]===-1)yt.projectionMatrix.copy(St.projectionMatrix),yt.projectionMatrixInverse.copy(St.projectionMatrixInverse);else{let J=Qt+de,Oe=st+de,Ue=ce-Ae,F=fe+(ue-Ae),E=Rt*st/Oe*J,rt=G*st/Oe*J;yt.projectionMatrix.makePerspective(Ue,F,E,rt,J,Oe),yt.projectionMatrixInverse.copy(yt.projectionMatrix).invert()}}function kt(yt,St){St===null?yt.matrixWorld.copy(yt.matrix):yt.matrixWorld.multiplyMatrices(St.matrixWorld,yt.matrix),yt.matrixWorldInverse.copy(yt.matrixWorld).invert()}this.updateCamera=function(yt){if(s===null)return;let St=yt.near,Ut=yt.far;x.texture!==null&&(x.depthNear>0&&(St=x.depthNear),x.depthFar>0&&(Ut=x.depthFar)),ht.near=Y.near=X.near=St,ht.far=Y.far=X.far=Ut,(j!==ht.near||it!==ht.far)&&(s.updateRenderState({depthNear:ht.near,depthFar:ht.far}),j=ht.near,it=ht.far),ht.layers.mask=yt.layers.mask|6,X.layers.mask=ht.layers.mask&-5,Y.layers.mask=ht.layers.mask&-3;let ue=yt.parent,jt=ht.cameras;kt(ht,ue);for(let ge=0;ge<jt.length;ge++)kt(jt[ge],ue);jt.length===2?wt(ht,X,Y):ht.projectionMatrix.copy(X.projectionMatrix),B===null&&yt.isPerspectiveCamera&&(B={camera:yt,fov:yt.fov,zoom:yt.zoom}),ee(yt,ht,ue)};function ee(yt,St,Ut){Ut===null?yt.matrix.copy(St.matrixWorld):(yt.matrix.copy(Ut.matrixWorld),yt.matrix.invert(),yt.matrix.multiply(St.matrixWorld)),yt.matrix.decompose(yt.position,yt.quaternion,yt.scale),yt.updateMatrixWorld(!0),yt.projectionMatrix.copy(St.projectionMatrix),yt.projectionMatrixInverse.copy(St.projectionMatrixInverse),yt.isPerspectiveCamera&&(yt.fov=Ea*2*Math.atan(1/yt.projectionMatrix.elements[5]),yt.zoom=1)}this.getCamera=function(){return ht},this.getFoveation=function(){if(!(g===null&&b===null))return u},this.setFoveation=function(yt){u=yt,g!==null&&(g.fixedFoveation=yt),b!==null&&b.fixedFoveation!==void 0&&(b.fixedFoveation=yt)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(ht)},this.getCameraTexture=function(yt){return m[yt]};let Ze=null;function Ne(yt,St){if(d=St.getViewerPose(h||a),w=St,d!==null){let Ut=d.views;b!==null&&(t.setRenderTargetFramebuffer(D,b.framebuffer),t.setRenderTarget(D));let ue=!1;Ut.length!==ht.cameras.length&&(ht.cameras.length=0,ue=!0);for(let st=0;st<Ut.length;st++){let Rt=Ut[st],G=null;if(b!==null)G=b.getViewport(Rt);else{let Bt=S.getViewSubImage(g,Rt);G=Bt.viewport,st===0&&(t.setRenderTargetTextures(D,Bt.colorTexture,Bt.depthStencilTexture),t.setRenderTarget(D))}let Lt=ot[st];Lt===void 0&&(Lt=new ti,Lt.layers.enable(st),Lt.viewport=new on,ot[st]=Lt),Lt.matrix.fromArray(Rt.transform.matrix),Lt.matrix.decompose(Lt.position,Lt.quaternion,Lt.scale),Lt.projectionMatrix.fromArray(Rt.projectionMatrix),Lt.projectionMatrixInverse.copy(Lt.projectionMatrix).invert(),Lt.viewport.set(G.x,G.y,G.width,G.height),st===0&&(ht.matrix.copy(Lt.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale)),ue===!0&&ht.cameras.push(Lt)}let jt=s.enabledFeatures;if(jt&&jt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&N){S=n.getBinding();let st=S.getDepthInformation(Ut[0]);st&&st.isValid&&st.texture&&x.init(st,s.renderState)}if(jt&&jt.includes("camera-access")&&N){t.state.unbindTexture(),S=n.getBinding();for(let st=0;st<Ut.length;st++){let Rt=Ut[st].camera;if(Rt){let G=m[Rt];G||(G=new Jo,m[Rt]=G);let Lt=S.getCameraImage(Rt);G.sourceTexture=Lt}}}}for(let Ut=0;Ut<T.length;Ut++){let ue=k[Ut],jt=T[Ut];ue!==null&&jt!==void 0&&jt.update(ue,St,h||a)}Ze&&Ze(yt,St),St.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:St}),w=null}let We=new Sg;We.setAnimationLoop(Ne),this.setAnimationLoop=function(yt){Ze=yt},this.dispose=function(){}}},M1=new Je,Ag=new Pe;Ag.set(-1,0,0,0,1,0,0,0,1);function b1(i,t){function e(x,m){x.matrixAutoUpdate===!0&&x.updateMatrix(),m.value.copy(x.matrix)}function n(x,m){m.color.getRGB(x.fogColor.value,Cf(i)),m.isFog?(x.fogNear.value=m.near,x.fogFar.value=m.far):m.isFogExp2&&(x.fogDensity.value=m.density)}function s(x,m,$,H,D){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(x,m):m.isMeshLambertMaterial?(r(x,m),m.envMap&&(x.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(x,m),S(x,m)):m.isMeshPhongMaterial?(r(x,m),d(x,m),m.envMap&&(x.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(x,m),g(x,m),m.isMeshPhysicalMaterial&&b(x,m,D)):m.isMeshMatcapMaterial?(r(x,m),w(x,m)):m.isMeshDepthMaterial?r(x,m):m.isMeshDistanceMaterial?(r(x,m),N(x,m)):m.isMeshNormalMaterial?r(x,m):m.isLineBasicMaterial?(a(x,m),m.isLineDashedMaterial&&l(x,m)):m.isPointsMaterial?u(x,m,$,H):m.isSpriteMaterial?h(x,m):m.isShadowMaterial?(x.color.value.copy(m.color),x.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(x,m){x.opacity.value=m.opacity,m.color&&x.diffuse.value.copy(m.color),m.emissive&&x.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(x.map.value=m.map,e(m.map,x.mapTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,e(m.alphaMap,x.alphaMapTransform)),m.bumpMap&&(x.bumpMap.value=m.bumpMap,e(m.bumpMap,x.bumpMapTransform),x.bumpScale.value=m.bumpScale,m.side===li&&(x.bumpScale.value*=-1)),m.normalMap&&(x.normalMap.value=m.normalMap,e(m.normalMap,x.normalMapTransform),x.normalScale.value.copy(m.normalScale),m.side===li&&x.normalScale.value.negate()),m.displacementMap&&(x.displacementMap.value=m.displacementMap,e(m.displacementMap,x.displacementMapTransform),x.displacementScale.value=m.displacementScale,x.displacementBias.value=m.displacementBias),m.emissiveMap&&(x.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,x.emissiveMapTransform)),m.specularMap&&(x.specularMap.value=m.specularMap,e(m.specularMap,x.specularMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest);let $=t.get(m),H=$.envMap,D=$.envMapRotation;H&&(x.envMap.value=H,x.envMapRotation.value.setFromMatrix4(M1.makeRotationFromEuler(D)).transpose(),H.isCubeTexture&&H.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(Ag),x.reflectivity.value=m.reflectivity,x.ior.value=m.ior,x.refractionRatio.value=m.refractionRatio),m.lightMap&&(x.lightMap.value=m.lightMap,x.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,x.lightMapTransform)),m.aoMap&&(x.aoMap.value=m.aoMap,x.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,x.aoMapTransform))}function a(x,m){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,m.map&&(x.map.value=m.map,e(m.map,x.mapTransform))}function l(x,m){x.dashSize.value=m.dashSize,x.totalSize.value=m.dashSize+m.gapSize,x.scale.value=m.scale}function u(x,m,$,H){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,x.size.value=m.size*$,x.scale.value=H*.5,m.map&&(x.map.value=m.map,e(m.map,x.uvTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,e(m.alphaMap,x.alphaMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest)}function h(x,m){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,x.rotation.value=m.rotation,m.map&&(x.map.value=m.map,e(m.map,x.mapTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,e(m.alphaMap,x.alphaMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest)}function d(x,m){x.specular.value.copy(m.specular),x.shininess.value=Math.max(m.shininess,1e-4)}function S(x,m){m.gradientMap&&(x.gradientMap.value=m.gradientMap)}function g(x,m){x.metalness.value=m.metalness,m.metalnessMap&&(x.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,x.metalnessMapTransform)),x.roughness.value=m.roughness,m.roughnessMap&&(x.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,x.roughnessMapTransform)),m.envMap&&(x.envMapIntensity.value=m.envMapIntensity)}function b(x,m,$){x.ior.value=m.ior,m.sheen>0&&(x.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),x.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(x.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,x.sheenColorMapTransform)),m.sheenRoughnessMap&&(x.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,x.sheenRoughnessMapTransform))),m.clearcoat>0&&(x.clearcoat.value=m.clearcoat,x.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(x.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,x.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(x.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===li&&x.clearcoatNormalScale.value.negate())),m.dispersion>0&&(x.dispersion.value=m.dispersion),m.retroreflectivity>0&&(x.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(x.iridescence.value=m.iridescence,x.iridescenceIOR.value=m.iridescenceIOR,x.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(x.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,x.iridescenceMapTransform)),m.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),m.transmission>0&&(x.transmission.value=m.transmission,x.transmissionSamplerMap.value=$.texture,x.transmissionSamplerSize.value.set($.width,$.height),m.transmissionMap&&(x.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,x.transmissionMapTransform)),x.thickness.value=m.thickness,m.thicknessMap&&(x.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=m.attenuationDistance,x.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(x.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(x.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=m.specularIntensity,x.specularColor.value.copy(m.specularColor),m.specularColorMap&&(x.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,x.specularColorMapTransform)),m.specularIntensityMap&&(x.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,x.specularIntensityMapTransform))}function w(x,m){m.matcap&&(x.matcap.value=m.matcap)}function N(x,m){let $=t.get(m).light;x.referencePosition.value.setFromMatrixPosition($.matrixWorld),x.nearDistance.value=$.shadow.camera.near,x.farDistance.value=$.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function w1(i,t,e,n){let s={},r={},a=[],l=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function u(D,T){let k=T.program;n.uniformBlockBinding(D,k)}function h(D,T){let k=s[D.id];k===void 0&&(x(D),k=d(D),s[D.id]=k,D.addEventListener("dispose",$));let q=T.program;n.updateUBOMapping(D,q);let R=t.render.frame;r[D.id]!==R&&(g(D),r[D.id]=R)}function d(D){let T=S();D.__bindingPointIndex=T;let k=i.createBuffer(),q=D.__size,R=D.usage;return i.bindBuffer(i.UNIFORM_BUFFER,k),i.bufferData(i.UNIFORM_BUFFER,q,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,k),k}function S(){for(let D=0;D<l;D++)if(a.indexOf(D)===-1)return a.push(D),D;return Ee("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(D){let T=s[D.id],k=D.uniforms,q=D.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let R=0,B=k.length;R<B;R++){let X=k[R];if(Array.isArray(X))for(let Y=0,ot=X.length;Y<ot;Y++)b(X[Y],R,Y,q);else b(X,R,0,q)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function b(D,T,k,q){if(N(D,T,k,q)===!0){let R=D.__offset,B=D.value;if(Array.isArray(B)){let X=0;for(let Y=0;Y<B.length;Y++){let ot=B[Y],ht=m(ot);w(ot,D.__data,X),typeof ot!="number"&&typeof ot!="boolean"&&!ot.isMatrix3&&!ArrayBuffer.isView(ot)&&(X+=ht.storage/Float32Array.BYTES_PER_ELEMENT)}}else w(B,D.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,R,D.__data)}}function w(D,T,k){typeof D=="number"||typeof D=="boolean"?T[0]=D:D.isMatrix3?(T[0]=D.elements[0],T[1]=D.elements[1],T[2]=D.elements[2],T[3]=0,T[4]=D.elements[3],T[5]=D.elements[4],T[6]=D.elements[5],T[7]=0,T[8]=D.elements[6],T[9]=D.elements[7],T[10]=D.elements[8],T[11]=0):ArrayBuffer.isView(D)?T.set(new D.constructor(D.buffer,D.byteOffset,T.length)):D.toArray(T,k)}function N(D,T,k,q){let R=D.value,B=T+"_"+k;if(q[B]===void 0)return typeof R=="number"||typeof R=="boolean"?q[B]=R:ArrayBuffer.isView(R)?q[B]=R.slice():q[B]=R.clone(),!0;{let X=q[B];if(typeof R=="number"||typeof R=="boolean"){if(X!==R)return q[B]=R,!0}else{if(ArrayBuffer.isView(R))return!0;if(X.equals(R)===!1)return X.copy(R),!0}}return!1}function x(D){let T=D.uniforms,k=0,q=16;for(let B=0,X=T.length;B<X;B++){let Y=Array.isArray(T[B])?T[B]:[T[B]];for(let ot=0,ht=Y.length;ot<ht;ot++){let j=Y[ot],it=Array.isArray(j.value)?j.value:[j.value];for(let pt=0,_t=it.length;pt<_t;pt++){let At=it[pt],xt=m(At),Et=k%q,wt=Et%xt.boundary,kt=Et+wt;k+=wt,kt!==0&&q-kt<xt.storage&&(k+=q-kt),j.__data=new Float32Array(xt.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=k,k+=xt.storage}}}let R=k%q;return R>0&&(k+=q-R),D.__size=k,D.__cache={},this}function m(D){let T={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(T.boundary=4,T.storage=4):D.isVector2?(T.boundary=8,T.storage=8):D.isVector3||D.isColor?(T.boundary=16,T.storage=12):D.isVector4?(T.boundary=16,T.storage=16):D.isMatrix3?(T.boundary=48,T.storage=48):D.isMatrix4?(T.boundary=64,T.storage=64):D.isTexture?Me("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(D)?(T.boundary=16,T.storage=D.byteLength):Me("WebGLRenderer: Unsupported uniform value type.",D),T}function $(D){let T=D.target;T.removeEventListener("dispose",$);let k=a.indexOf(T.__bindingPointIndex);a.splice(k,1),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function H(){for(let D in s)i.deleteBuffer(s[D]);a=[],s={},r={}}return{bind:u,update:h,dispose:H}}var E1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),hs=null;function T1(){return hs===null&&(hs=new Go(E1,16,16,or,Zi),hs.name="DFG_LUT",hs.minFilter=Wn,hs.magFilter=Wn,hs.wrapS=is,hs.wrapT=is,hs.generateMipmaps=!1,hs.needsUpdate=!0),hs}var xh=class{constructor(t={}){let{canvas:e=H0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:h=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:S=!1,reversedDepthBuffer:g=!1,outputBufferType:b=vi}=t;this.isWebGLRenderer=!0;let w;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");w=n.getContextAttributes().alpha}else w=a;let N=b,x=new Set([Nu,Du,Lu]),m=new Set([vi,Ji,Fa,Ba,Ru,Iu]),$=new Uint32Array(4),H=new Int32Array(4),D=new Z,T=null,k=null,q=[],R=[],B=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Yi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let X=this,Y=!1,ot=null,ht=null,j=null,it=null;this._outputColorSpace=bi;let pt=0,_t=0,At=null,xt=-1,Et=null,wt=new on,kt=new on,ee=null,Ze=new ve(0),Ne=0,We=e.width,yt=e.height,St=1,Ut=null,ue=null,jt=new on(0,0,We,yt),ge=new on(0,0,We,yt),Qt=!1,st=new Ra,Rt=!1,G=!1,Lt=new Je,Bt=new Z,ce=new on,fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},de=!1;function Ae(){return At===null?St:1}let J=n;function Oe(I,K){return e.getContext(I,K)}let Ue,F,E,rt,ct,vt,Dt,$t,gt,dt,Xt,he,Jt,Ht,le,pe,Ce,Q,qt,Mt,Gt,Kt,Tt;try{let I={alpha:!0,depth:s,stencil:r,antialias:l,premultipliedAlpha:u,preserveDrawingBuffer:h,powerPreference:d,failIfMajorPerformanceCaveat:S};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",tn,!1),e.addEventListener("webglcontextrestored",je,!1),e.addEventListener("webglcontextcreationerror",Vn,!1),J===null){let K="webgl2";if(J=Oe(K,I),J===null)throw Oe(K)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}oe()}catch(I){throw e.removeEventListener("webglcontextlost",tn,!1),e.removeEventListener("webglcontextrestored",je,!1),e.removeEventListener("webglcontextcreationerror",Vn,!1),Ee("WebGLRenderer: "+I.message),I}function oe(){Ue=new DM(J),Ue.init(),Gt=new v1(J,Ue),F=new bM(J,Ue,t,Gt),E=new _1(J,Ue),F.reversedDepthBuffer&&g&&E.buffers.depth.setReversed(!0),ht=J.createFramebuffer(),j=J.createFramebuffer(),it=J.createFramebuffer(),rt=new OM(J),ct=new i1,vt=new x1(J,Ue,E,ct,F,Gt,rt),Dt=new LM(X),$t=new Bv(J),Kt=new SM(J,$t),gt=new NM(J,$t,rt,Kt),dt=new BM(J,gt,$t,Kt,rt),Q=new FM(J,F,vt),le=new wM(ct),Xt=new n1(X,Dt,Ue,F,Kt,le),he=new b1(X,ct),Jt=new r1,Ht=new h1(Ue),Ce=new yM(X,Dt,E,dt,w,u),pe=new g1(X,dt,F),Tt=new w1(J,rt,F,E),qt=new MM(J,Ue,rt),Mt=new UM(J,Ue,rt),rt.programs=Xt.programs,X.capabilities=F,X.extensions=Ue,X.properties=ct,X.renderLists=Jt,X.shadowMap=pe,X.state=E,X.info=rt}N!==vi&&(B=new $M(N,e.width,e.height,l,s,r));let ie=new Xf(X,J);this.xr=ie,this.getContext=function(){return J},this.getContextAttributes=function(){return J.getContextAttributes()},this.forceContextLoss=function(){let I=Ue.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){let I=Ue.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return St},this.setPixelRatio=function(I){I!==void 0&&(St=I,this.setSize(We,yt,!1))},this.getSize=function(I){return I.set(We,yt)},this.setSize=function(I,K,ft=!0){if(ie.isPresenting){Me("WebGLRenderer: Can't change size while VR device is presenting.");return}We=I,yt=K,e.width=Math.floor(I*St),e.height=Math.floor(K*St),ft===!0&&(e.style.width=I+"px",e.style.height=K+"px"),B!==null&&B.setSize(e.width,e.height),this.setViewport(0,0,I,K)},this.getDrawingBufferSize=function(I){return I.set(We*St,yt*St).floor()},this.setDrawingBufferSize=function(I,K,ft){We=I,yt=K,St=ft,e.width=Math.floor(I*ft),e.height=Math.floor(K*ft),this.setViewport(0,0,I,K)},this.setEffects=function(I){if(N===vi){Ee("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(I){for(let K=0;K<I.length;K++)if(I[K].isOutputPass===!0){Me("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}B.setEffects(I||[])},this.getCurrentViewport=function(I){return I.copy(wt)},this.getViewport=function(I){return I.copy(jt)},this.setViewport=function(I,K,ft,lt){I.isVector4?jt.set(I.x,I.y,I.z,I.w):jt.set(I,K,ft,lt),E.viewport(wt.copy(jt).multiplyScalar(St).round())},this.getScissor=function(I){return I.copy(ge)},this.setScissor=function(I,K,ft,lt){I.isVector4?ge.set(I.x,I.y,I.z,I.w):ge.set(I,K,ft,lt),E.scissor(kt.copy(ge).multiplyScalar(St).round())},this.getScissorTest=function(){return Qt},this.setScissorTest=function(I){E.setScissorTest(Qt=I)},this.setOpaqueSort=function(I){Ut=I},this.setTransparentSort=function(I){ue=I},this.getClearColor=function(I){return I.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor(...arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha(...arguments)},this.clear=function(I=!0,K=!0,ft=!0){let lt=0;if(I){let ut=!1;if(At!==null){let Ft=At.texture.format;ut=x.has(Ft)}if(ut){let Ft=At.texture.type,Ot=m.has(Ft),Ct=Ce.getClearColor(),Yt=Ce.getClearAlpha(),se=Ct.r,re=Ct.g,be=Ct.b;Ot?($[0]=se,$[1]=re,$[2]=be,$[3]=Yt,J.clearBufferuiv(J.COLOR,0,$)):(H[0]=se,H[1]=re,H[2]=be,H[3]=Yt,J.clearBufferiv(J.COLOR,0,H))}else lt|=J.COLOR_BUFFER_BIT}K&&(lt|=J.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ft&&(lt|=J.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),lt!==0&&J.clear(lt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(I){I.setRenderer(this),ot=I},this.dispose=function(){e.removeEventListener("webglcontextlost",tn,!1),e.removeEventListener("webglcontextrestored",je,!1),e.removeEventListener("webglcontextcreationerror",Vn,!1),Ce.dispose(),Jt.dispose(),Ht.dispose(),ct.dispose(),Dt.dispose(),dt.dispose(),Kt.dispose(),Tt.dispose(),Xt.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",hr),ie.removeEventListener("sessionend",dr),Ui.stop()};function tn(I){I.preventDefault(),ko("WebGLRenderer: Context Lost."),Y=!0}function je(){ko("WebGLRenderer: Context Restored."),Y=!1;let I=rt.autoReset,K=pe.enabled,ft=pe.autoUpdate,lt=pe.needsUpdate,ut=pe.type;oe(),rt.autoReset=I,pe.enabled=K,pe.autoUpdate=ft,pe.needsUpdate=lt,pe.type=ut}function Vn(I){Ee("WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function hi(I){let K=I.target;K.removeEventListener("dispose",hi),Ul(K)}function Ul(I){Ja(I),ct.remove(I)}function Ja(I){let K=ct.get(I).programs;K!==void 0&&(K.forEach(function(ft){Xt.releaseProgram(ft)}),I.isShaderMaterial&&Xt.releaseShaderCache(I))}this.renderBufferDirect=function(I,K,ft,lt,ut,Ft){K===null&&(K=fe);let Ot=ut.isMesh&&ut.matrixWorld.determinantAffine()<0,Ct=Ka(I,K,ft,lt,ut);E.setMaterial(lt,Ot);let Yt=ft.index,se=1;if(lt.wireframe===!0){if(Yt=gt.getWireframeAttribute(ft),Yt===void 0)return;se=2}let re=ft.drawRange,be=ft.attributes.position,Nt=re.start*se,bt=(re.start+re.count)*se;Ft!==null&&(Nt=Math.max(Nt,Ft.start*se),bt=Math.min(bt,(Ft.start+Ft.count)*se)),Yt!==null?(Nt=Math.max(Nt,0),bt=Math.min(bt,Yt.count)):be!=null&&(Nt=Math.max(Nt,0),bt=Math.min(bt,be.count));let me=bt-Nt;if(me<0||me===1/0)return;Kt.setup(ut,lt,Ct,ft,Yt);let _e,nn=qt;if(Yt!==null&&(_e=$t.get(Yt),nn=Mt,nn.setIndex(_e)),ut.isMesh)lt.wireframe===!0?(E.setLineWidth(lt.wireframeLinewidth*Ae()),nn.setMode(J.LINES)):nn.setMode(J.TRIANGLES);else if(ut.isLine){let Pn=lt.linewidth;Pn===void 0&&(Pn=1),E.setLineWidth(Pn*Ae()),ut.isLineSegments?nn.setMode(J.LINES):ut.isLineLoop?nn.setMode(J.LINE_LOOP):nn.setMode(J.LINE_STRIP)}else ut.isPoints?nn.setMode(J.POINTS):ut.isSprite&&nn.setMode(J.TRIANGLES);if(ut.isBatchedMesh)if(Ue.get("WEBGL_multi_draw"))nn.renderMultiDraw(ut._multiDrawStarts,ut._multiDrawCounts,ut._multiDrawCount);else{let Pn=ut._multiDrawStarts,te=ut._multiDrawCounts,Nn=ut._multiDrawCount,Fe=Yt?$t.get(Yt).bytesPerElement:1,Gn=ct.get(lt).currentProgram.getUniforms();for(let Cn=0;Cn<Nn;Cn++)Gn.setValue(J,"_gl_DrawID",Cn),nn.render(Pn[Cn]/Fe,te[Cn])}else if(ut.isInstancedMesh)nn.renderInstances(Nt,me,ut.count);else if(ft.isInstancedBufferGeometry){let Pn=ft._maxInstanceCount!==void 0?ft._maxInstanceCount:1/0,te=Math.min(ft.instanceCount,Pn);nn.renderInstances(Nt,me,te)}else nn.render(Nt,me)};function Hn(I,K,ft,lt){ot!==null&&I.isNodeMaterial&&ot.setObject(lt,I),Rt===!0&&le.setState(I,ft,!1),I.transparent===!0&&I.side===cs&&I.forceSinglePass===!1?(I.side=li,I.needsUpdate=!0,ys(I,K,lt),I.side=ir,I.needsUpdate=!0,ys(I,K,lt),I.side=cs):ys(I,K,lt)}this.compile=function(I,K,ft=null){ft===null&&(ft=I),ot!==null&&ot.renderStart(I,K,ft),k=Ht.get(ft),k.init(K),R.push(k),ft.traverseVisible(function(ut){ut.isLight&&ut.layers.test(K.layers)&&(k.pushLight(ut),ut.castShadow&&k.pushShadow(ut))}),I!==ft&&I.traverseVisible(function(ut){ut.isLight&&ut.layers.test(K.layers)&&(k.pushLight(ut),ut.castShadow&&k.pushShadow(ut))}),k.setupLights(),ot!==null&&ot.updateLights(k.state.lightsArray),G=this.localClippingEnabled,Rt=le.init(this.clippingPlanes,G),Rt===!0&&le.setGlobalState(this.clippingPlanes,K),ot!==null&&pe.render(k.state.shadowsArray,ft,K);let lt=new Set;return I.traverse(function(ut){if(!(ut.isMesh||ut.isPoints||ut.isLine||ut.isSprite))return;let Ft=ut.material;if(Ft)if(Array.isArray(Ft))for(let Ot=0;Ot<Ft.length;Ot++){let Ct=Ft[Ot];Hn(Ct,ft,K,ut),lt.add(Ct)}else Hn(Ft,ft,K,ut),lt.add(Ft)}),k=R.pop(),ot!==null&&ot.renderEnd(),lt},this.compileAsync=function(I,K,ft=null){let lt=this.compile(I,K,ft);return new Promise(ut=>{function Ft(){if(lt.forEach(function(Ot){let Yt=ct.get(Ot).currentProgram;(Yt===void 0||Yt.isReady())&&lt.delete(Ot)}),lt.size===0){ut(I);return}setTimeout(Ft,10)}Ue.get("KHR_parallel_shader_compile")!==null?Ft():setTimeout(Ft,10)})};let di=null;function Ni(I){di&&di(I)}function hr(){Ui.stop()}function dr(){Ui.start()}let Ui=new Sg;Ui.setAnimationLoop(Ni),typeof self<"u"&&Ui.setContext(self),this.setAnimationLoop=function(I){di=I,ie.setAnimationLoop(I),I===null?Ui.stop():Ui.start()},ie.addEventListener("sessionstart",hr),ie.addEventListener("sessionend",dr),this.render=function(I,K){if(K!==void 0&&K.isCamera!==!0){Ee("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Y===!0)return;ot!==null&&ot.renderStart(I,K);let ft=ie.enabled===!0&&ie.isPresenting===!0,lt=B!==null&&(At===null||ft)&&B.begin(X,At);if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(B===null||B.isCompositing()===!1)&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(K),K=ie.getCamera()),I.isScene===!0&&I.onBeforeRender(X,I,K,At),k=Ht.get(I,R.length),k.init(K),k.state.textureUnits=vt.getTextureUnits(),R.push(k),Lt.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),st.setFromProjectionMatrix(Lt,Wi,K.reversedDepth),G=this.localClippingEnabled,Rt=le.init(this.clippingPlanes,G),T=Jt.get(I,q.length),T.init(),q.push(T),ie.enabled===!0&&ie.isPresenting===!0){let Ot=X.xr.getDepthSensingMesh();Ot!==null&&Hr(Ot,K,-1/0,X.sortObjects)}Hr(I,K,0,X.sortObjects),T.finish(),ot!==null&&ot.updateLights(k.state.lightsArray),X.sortObjects===!0&&T.sort(Ut,ue),de=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,de&&Ce.addToRenderList(T,I),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Rt===!0&&le.beginShadows();let ut=k.state.shadowsArray;if(pe.render(ut,I,K),Rt===!0&&le.endShadows(),(lt&&B.hasRenderPass())===!1){let Ot=T.opaque,Ct=T.transmissive;if(k.setupLights(),K.isArrayCamera){let Yt=K.cameras;if(Ct.length>0)for(let se=0,re=Yt.length;se<re;se++){let be=Yt[se];Ol(Ot,Ct,I,be)}de&&Ce.render(I);for(let se=0,re=Yt.length;se<re;se++){let be=Yt[se];$s(T,I,be,be.viewport)}}else Ct.length>0&&Ol(Ot,Ct,I,K),de&&Ce.render(I),$s(T,I,K)}At!==null&&_t===0&&(vt.updateMultisampleRenderTarget(At),vt.updateRenderTargetMipmap(At)),lt&&B.end(X),I.isScene===!0&&I.onAfterRender(X,I,K),Kt.resetDefaultState(),xt=-1,Et=null,R.pop(),R.length>0?(k=R[R.length-1],vt.setTextureUnits(k.state.textureUnits),Rt===!0&&le.setGlobalState(X.clippingPlanes,k.state.camera)):k=null,q.pop(),q.length>0?T=q[q.length-1]:T=null,ot!==null&&ot.renderEnd()};function Hr(I,K,ft,lt){if(I.visible===!1)return;if(I.layers.test(K.layers)){if(I.isGroup)ft=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(K);else if(I.isLightProbeGrid)k.pushLightProbeGrid(I);else if(I.isLight)k.pushLight(I),I.castShadow&&k.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||I.intersectsFrustum(st)){lt&&ce.setFromMatrixPosition(I.matrixWorld).applyMatrix4(Lt);let Ot=dt.update(I),Ct=I.material;Ct.visible&&T.push(I,Ot,Ct,ft,ce.z,null,K)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||I.intersectsFrustum(st))){let Ot=dt.update(I),Ct=I.material;if(lt&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),ce.copy(I.boundingSphere.center)):(Ot.boundingSphere===null&&Ot.computeBoundingSphere(),ce.copy(Ot.boundingSphere.center)),ce.applyMatrix4(I.matrixWorld).applyMatrix4(Lt)),Array.isArray(Ct)){let Yt=Ot.groups;for(let se=0,re=Yt.length;se<re;se++){let be=Yt[se],Nt=Ct[be.materialIndex];Nt&&Nt.visible&&T.push(I,Ot,Nt,ft,ce.z,be,K)}}else Ct.visible&&T.push(I,Ot,Ct,ft,ce.z,null,K)}}let Ft=I.children;for(let Ot=0,Ct=Ft.length;Ot<Ct;Ot++)Hr(Ft[Ot],K,ft,lt)}function $s(I,K,ft,lt){let{opaque:ut,transmissive:Ft,transparent:Ot}=I;k.setupLightsView(ft),Rt===!0&&le.setGlobalState(X.clippingPlanes,ft),lt&&E.viewport(wt.copy(lt)),ut.length>0&&zs(ut,K,ft),Ft.length>0&&zs(Ft,K,ft),Ot.length>0&&zs(Ot,K,ft),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function Ol(I,K,ft,lt){if((ft.isScene===!0?ft.overrideMaterial:null)!==null)return;if(k.state.transmissionRenderTarget[lt.id]===void 0){let Nt=Ue.has("EXT_color_buffer_half_float")||Ue.has("EXT_color_buffer_float");k.state.transmissionRenderTarget[lt.id]=new _i(1,1,{generateMipmaps:!0,type:Nt?Zi:vi,minFilter:rr,samples:Math.max(4,F.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:qe.workingColorSpace})}let Ft=k.state.transmissionRenderTarget[lt.id],Ot=lt.viewport||wt;Ft.setSize(Ot.z*X.transmissionResolutionScale,Ot.w*X.transmissionResolutionScale);let Ct=X.getRenderTarget(),Yt=X.getActiveCubeFace(),se=X.getActiveMipmapLevel();X.setRenderTarget(Ft),X.getClearColor(Ze),Ne=X.getClearAlpha(),Ne<1&&X.setClearColor(16777215,.5),X.clear(),de&&Ce.render(ft);let re=X.toneMapping;X.toneMapping=Yi;let be=lt.viewport;if(lt.viewport!==void 0&&(lt.viewport=void 0),k.setupLightsView(lt),Rt===!0&&le.setGlobalState(X.clippingPlanes,lt),zs(I,ft,lt),vt.updateMultisampleRenderTarget(Ft),vt.updateRenderTargetMipmap(Ft),Ue.has("WEBGL_multisampled_render_to_texture")===!1){let Nt=!1;for(let bt=0,me=K.length;bt<me;bt++){let _e=K[bt],{object:nn,geometry:Pn,material:te,group:Nn}=_e;if(te.side===cs&&nn.layers.test(lt.layers)){let Fe=te.side;te.side=li,te.needsUpdate=!0,Ki(nn,ft,lt,Pn,te,Nn),te.side=Fe,te.needsUpdate=!0,Nt=!0}}Nt===!0&&(vt.updateMultisampleRenderTarget(Ft),vt.updateRenderTargetMipmap(Ft))}X.setRenderTarget(Ct,Yt,se),X.setClearColor(Ze,Ne),be!==void 0&&(lt.viewport=be),X.toneMapping=re}function zs(I,K,ft){let lt=K.isScene===!0?K.overrideMaterial:null;for(let ut=0,Ft=I.length;ut<Ft;ut++){let Ot=I[ut],{object:Ct,geometry:Yt,group:se}=Ot,re=Ot.material;re.allowOverride===!0&&lt!==null&&(re=lt),Ct.layers.test(ft.layers)&&Ki(Ct,K,ft,Yt,re,se)}}function Ki(I,K,ft,lt,ut,Ft){ot!==null&&ut.isNodeMaterial&&ot.setObject(I,ut),I.onBeforeRender(X,K,ft,lt,ut,Ft),I.modelViewMatrix.multiplyMatrices(ft.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),ut.onBeforeRender(X,K,ft,lt,I,Ft),ut.transparent===!0&&ut.side===cs&&ut.forceSinglePass===!1?(ut.side=li,ut.needsUpdate=!0,X.renderBufferDirect(ft,K,lt,ut,I,Ft),ut.side=ir,ut.needsUpdate=!0,X.renderBufferDirect(ft,K,lt,ut,I,Ft),ut.side=cs):X.renderBufferDirect(ft,K,lt,ut,I,Ft),I.onAfterRender(X,K,ft,lt,ut,Ft)}function ys(I,K,ft){K.isScene!==!0&&(K=fe);let lt=ct.get(I),ut=k.state.lights,Ft=k.state.shadowsArray,Ot=ut.state.version,Ct=Xt.getParameters(I,ut.state,Ft,K,ft,k.state.lightProbeGridArray),Yt=Xt.getProgramCacheKey(Ct),se=lt.programs;lt.environment=I.isMeshStandardMaterial||I.isMeshLambertMaterial||I.isMeshPhongMaterial?K.environment:null,lt.fog=K.fog;let re=I.isMeshStandardMaterial||I.isMeshLambertMaterial&&!I.envMap||I.isMeshPhongMaterial&&!I.envMap;lt.envMap=Dt.get(I.envMap||lt.environment,re),lt.envMapRotation=lt.environment!==null&&I.envMap===null?K.environmentRotation:I.envMapRotation,se===void 0&&(I.addEventListener("dispose",hi),se=new Map,lt.programs=se);let be=se.get(Yt);if(be!==void 0){if(lt.currentProgram===be&&lt.lightsStateVersion===Ot)return ja(I,Ct),be}else Ct.uniforms=Xt.getUniforms(I),ot!==null&&I.isNodeMaterial&&ot.build(I,ft,Ct),I.onBeforeCompile(Ct,X),be=Xt.acquireProgram(Ct,Yt),se.set(Yt,be),lt.uniforms=Ct.uniforms;let Nt=lt.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Nt.clippingPlanes=le.uniform),ja(I,Ct),lt.needsLights=kl(I),lt.lightsStateVersion=Ot,lt.needsLights&&(Nt.ambientLightColor.value=ut.state.ambient,Nt.lightProbe.value=ut.state.probe,Nt.sunLights.value=ut.state.sun,Nt.sunLightShadows.value=ut.state.sunShadow,Nt.directionalLights.value=ut.state.directional,Nt.directionalLightShadows.value=ut.state.directionalShadow,Nt.spotLights.value=ut.state.spot,Nt.spotLightShadows.value=ut.state.spotShadow,Nt.rectAreaLights.value=ut.state.rectArea,Nt.ltc_1.value=ut.state.rectAreaLTC1,Nt.ltc_2.value=ut.state.rectAreaLTC2,Nt.pointLights.value=ut.state.point,Nt.pointLightShadows.value=ut.state.pointShadow,Nt.hemisphereLights.value=ut.state.hemi,Nt.sunShadowMatrix.value=ut.state.sunShadowMatrix,Nt.sunShadowCascade.value=ut.state.sunShadowCascade,Nt.directionalShadowMatrix.value=ut.state.directionalShadowMatrix,Nt.spotLightMatrix.value=ut.state.spotLightMatrix,Nt.spotLightMap.value=ut.state.spotLightMap,Nt.pointShadowMatrix.value=ut.state.pointShadowMatrix),lt.lightProbeGrid=k.state.lightProbeGridArray.length>0,lt.currentProgram=be,lt.uniformsList=null,be}function Za(I){if(I.uniformsList===null){let K=I.currentProgram.getUniforms();I.uniformsList=za.seqWithValue(K.seq,I.uniforms)}return I.uniformsList}function ja(I,K){let ft=ct.get(I);ft.outputColorSpace=K.outputColorSpace,ft.batching=K.batching,ft.batchingColor=K.batchingColor,ft.instancing=K.instancing,ft.instancingColor=K.instancingColor,ft.instancingMorph=K.instancingMorph,ft.skinning=K.skinning,ft.morphTargets=K.morphTargets,ft.morphNormals=K.morphNormals,ft.morphColors=K.morphColors,ft.morphTargetsCount=K.morphTargetsCount,ft.numClippingPlanes=K.numClippingPlanes,ft.numIntersection=K.numClipIntersection,ft.vertexAlphas=K.vertexAlphas,ft.vertexTangents=K.vertexTangents,ft.toneMapping=K.toneMapping}function Fl(I,K){if(I.length===0)return null;if(I.length===1)return I[0].texture!==null?I[0]:null;D.setFromMatrixPosition(K.matrixWorld);for(let ft=0,lt=I.length;ft<lt;ft++){let ut=I[ft];if(ut.texture!==null&&ut.boundingBox.containsPoint(D))return ut}return null}function Ka(I,K,ft,lt,ut){K.isScene!==!0&&(K=fe),vt.resetTextureUnits();let Ft=K.fog,Ot=lt.isMeshStandardMaterial||lt.isMeshLambertMaterial||lt.isMeshPhongMaterial?K.environment:null,Ct=At===null?X.outputColorSpace:At.isXRRenderTarget===!0?At.texture.colorSpace:qe.workingColorSpace,Yt=lt.isMeshStandardMaterial||lt.isMeshLambertMaterial&&!lt.envMap||lt.isMeshPhongMaterial&&!lt.envMap,se=Dt.get(lt.envMap||Ot,Yt),re=lt.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,be=!!ft.attributes.tangent&&(!!lt.normalMap||lt.anisotropy>0),Nt=!!ft.morphAttributes.position,bt=!!ft.morphAttributes.normal,me=!!ft.morphAttributes.color,_e=Yi;lt.toneMapped&&(At===null||At.isXRRenderTarget===!0)&&(_e=X.toneMapping);let nn=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,Pn=nn!==void 0?nn.length:0,te=ct.get(lt),Nn=k.state.lights;if(Rt===!0&&(G===!0||I!==Et)){let un=I===Et&&lt.id===xt;le.setState(lt,I,un)}let Fe=!1;lt.version===te.__version?(te.needsLights&&te.lightsStateVersion!==Nn.state.version||te.outputColorSpace!==Ct||ut.isBatchedMesh&&te.batching===!1||!ut.isBatchedMesh&&te.batching===!0||ut.isBatchedMesh&&te.batchingColor===!0&&ut._colorsTexture===null||ut.isBatchedMesh&&te.batchingColor===!1&&ut._colorsTexture!==null||ut.isInstancedMesh&&te.instancing===!1||!ut.isInstancedMesh&&te.instancing===!0||ut.isSkinnedMesh&&te.skinning===!1||!ut.isSkinnedMesh&&te.skinning===!0||ut.isInstancedMesh&&te.instancingColor===!0&&ut.instanceColor===null||ut.isInstancedMesh&&te.instancingColor===!1&&ut.instanceColor!==null||ut.isInstancedMesh&&te.instancingMorph===!0&&ut.morphTexture===null||ut.isInstancedMesh&&te.instancingMorph===!1&&ut.morphTexture!==null||te.envMap!==se||lt.fog===!0&&te.fog!==Ft||te.numClippingPlanes!==void 0&&(te.numClippingPlanes!==le.numPlanes||te.numIntersection!==le.numIntersection)||te.vertexAlphas!==re||te.vertexTangents!==be||te.morphTargets!==Nt||te.morphNormals!==bt||te.morphColors!==me||te.toneMapping!==_e||te.morphTargetsCount!==Pn||!!te.lightProbeGrid!=k.state.lightProbeGridArray.length>0)&&(Fe=!0):(Fe=!0,te.__version=lt.version);let Gn=te.currentProgram;Fe===!0&&(Gn=ys(lt,K,ut),ot&&lt.isNodeMaterial&&ot.onUpdateProgram(lt,Gn,te));let Cn=!1,Qi=!1,Hs=!1,sn=Gn.getUniforms(),_n=te.uniforms;if(E.useProgram(Gn.program)&&(Cn=!0,Qi=!0,Hs=!0),lt.id!==xt&&(xt=lt.id,Qi=!0),te.needsLights){let un=Fl(k.state.lightProbeGridArray,ut);te.lightProbeGrid!==un&&(te.lightProbeGrid=un,Qi=!0)}if(Cn||Et!==I){E.buffers.depth.getReversed()&&I.reversedDepth!==!0&&(I._reversedDepth=!0,I.updateProjectionMatrix()),sn.setValue(J,"projectionMatrix",I.projectionMatrix),sn.setValue(J,"viewMatrix",I.matrixWorldInverse);let Oi=sn.map.cameraPosition;Oi!==void 0&&Oi.setValue(J,Bt.setFromMatrixPosition(I.matrixWorld)),F.logarithmicDepthBuffer&&sn.setValue(J,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(lt.isMeshPhongMaterial||lt.isMeshToonMaterial||lt.isMeshLambertMaterial||lt.isMeshBasicMaterial||lt.isMeshStandardMaterial||lt.isShaderMaterial)&&sn.setValue(J,"isOrthographic",I.isOrthographicCamera===!0),Et!==I&&(Et=I,Qi=!0,Hs=!0)}if(te.needsLights&&(Nn.state.sunShadowMap.length>0&&sn.setValue(J,"sunShadowMap",Nn.state.sunShadowMap,vt),Nn.state.directionalShadowMap.length>0&&sn.setValue(J,"directionalShadowMap",Nn.state.directionalShadowMap,vt),Nn.state.spotShadowMap.length>0&&sn.setValue(J,"spotShadowMap",Nn.state.spotShadowMap,vt),Nn.state.pointShadowMap.length>0&&sn.setValue(J,"pointShadowMap",Nn.state.pointShadowMap,vt)),ut.isSkinnedMesh){sn.setOptional(J,ut,"bindMatrix"),sn.setOptional(J,ut,"bindMatrixInverse");let un=ut.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),sn.setValue(J,"boneTexture",un.boneTexture,vt))}ut.isBatchedMesh&&(sn.setOptional(J,ut,"batchingTexture"),sn.setValue(J,"batchingTexture",ut._matricesTexture,vt),sn.setOptional(J,ut,"batchingIdTexture"),sn.setValue(J,"batchingIdTexture",ut._indirectTexture,vt),sn.setOptional(J,ut,"batchingColorTexture"),ut._colorsTexture!==null&&sn.setValue(J,"batchingColorTexture",ut._colorsTexture,vt));let ts=ft.morphAttributes;if((ts.position!==void 0||ts.normal!==void 0||ts.color!==void 0)&&Q.update(ut,ft,Gn),(Qi||te.receiveShadow!==ut.receiveShadow)&&(te.receiveShadow=ut.receiveShadow,sn.setValue(J,"receiveShadow",ut.receiveShadow)),(lt.isMeshStandardMaterial||lt.isMeshLambertMaterial||lt.isMeshPhongMaterial)&&lt.envMap===null&&K.environment!==null&&(_n.envMapIntensity.value=K.environmentIntensity),_n.dfgLUT!==void 0&&(_n.dfgLUT.value=T1()),Qi){if(sn.setValue(J,"toneMappingExposure",X.toneMappingExposure),te.needsLights&&Bl(_n,Hs),Ft&&lt.fog===!0&&he.refreshFogUniforms(_n,Ft),he.refreshMaterialUniforms(_n,lt,St,yt,k.state.transmissionRenderTarget[I.id]),te.needsLights&&te.lightProbeGrid){let un=te.lightProbeGrid;_n.probesSH.value=un.texture,_n.probesMin.value.copy(un.boundingBox.min),_n.probesMax.value.copy(un.boundingBox.max),_n.probesResolution.value.copy(un.resolution)}za.upload(J,Za(te),_n,vt)}if(lt.isShaderMaterial&&lt.uniformsNeedUpdate===!0&&(za.upload(J,Za(te),_n,vt),lt.uniformsNeedUpdate=!1),lt.isSpriteMaterial&&sn.setValue(J,"center",ut.center),sn.setValue(J,"modelViewMatrix",ut.modelViewMatrix),sn.setValue(J,"normalMatrix",ut.normalMatrix),sn.setValue(J,"modelMatrix",ut.matrixWorld),lt.uniformsGroups!==void 0){let un=lt.uniformsGroups;for(let Oi=0,we=un.length;Oi<we;Oi++){let Qa=un[Oi];Tt.update(Qa,Gn),Tt.bind(Qa,Gn)}}return Gn}function Bl(I,K){I.ambientLightColor.needsUpdate=K,I.lightProbe.needsUpdate=K,I.sunLights.needsUpdate=K,I.sunLightShadows.needsUpdate=K,I.directionalLights.needsUpdate=K,I.directionalLightShadows.needsUpdate=K,I.pointLights.needsUpdate=K,I.pointLightShadows.needsUpdate=K,I.spotLights.needsUpdate=K,I.spotLightShadows.needsUpdate=K,I.rectAreaLights.needsUpdate=K,I.hemisphereLights.needsUpdate=K}function kl(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return pt},this.getActiveMipmapLevel=function(){return _t},this.getRenderTarget=function(){return At},this.setRenderTargetTextures=function(I,K,ft){let lt=ct.get(I);lt.__autoAllocateDepthBuffer=I.resolveDepthBuffer===!1,lt.__autoAllocateDepthBuffer===!1&&(lt.__useRenderToTexture=!1),ct.get(I.texture).__webglTexture=K,ct.get(I.depthTexture).__webglTexture=lt.__autoAllocateDepthBuffer?void 0:ft,lt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(I,K){let ft=ct.get(I);ft.__webglFramebuffer=K,ft.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(I,K=0,ft=0){At=I,pt=K,_t=ft;let lt=null,ut=!1,Ft=!1;if(I){let Ct=ct.get(I);if(Ct.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(J.FRAMEBUFFER,Ct.__webglFramebuffer),wt.copy(I.viewport),kt.copy(I.scissor),ee=I.scissorTest,E.viewport(wt),E.scissor(kt),E.setScissorTest(ee),xt=-1;return}else if(Ct.__webglFramebuffer===void 0)vt.setupRenderTarget(I);else if(Ct.__hasExternalTextures)vt.rebindTextures(I,ct.get(I.texture).__webglTexture,ct.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){let re=I.depthTexture;if(Ct.__boundDepthTexture!==re){if(re!==null&&ct.has(re)&&(I.width!==re.image.width||I.height!==re.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");vt.setupDepthRenderbuffer(I)}}let Yt=I.texture;(Yt.isData3DTexture||Yt.isDataArrayTexture||Yt.isCompressedArrayTexture)&&(Ft=!0);let se=ct.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(se[K])?lt=se[K][ft]:lt=se[K],ut=!0):I.samples>0&&vt.useMultisampledRTT(I)===!1?lt=ct.get(I).__webglMultisampledFramebuffer:Array.isArray(se)?lt=se[ft]:lt=se,wt.copy(I.viewport),kt.copy(I.scissor),ee=I.scissorTest}else wt.copy(jt).multiplyScalar(St).floor(),kt.copy(ge).multiplyScalar(St).floor(),ee=Qt;if(ft!==0&&(lt=ht),E.bindFramebuffer(J.FRAMEBUFFER,lt)&&E.drawBuffers(I,lt),E.viewport(wt),E.scissor(kt),E.setScissorTest(ee),ut){let Ct=ct.get(I.texture);J.framebufferTexture2D(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ct.__webglTexture,ft)}else if(Ft){let Ct=K;for(let Yt=0;Yt<I.textures.length;Yt++){let se=ct.get(I.textures[Yt]);J.framebufferTextureLayer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+Yt,se.__webglTexture,ft,Ct)}}else if(I!==null&&ft!==0){let Ct=ct.get(I.texture);J.framebufferTexture2D(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,Ct.__webglTexture,ft)}xt=-1};function Vs(I){let K=ct.get(I);return(K.__readFormat!==I.format||K.__readType!==I.type)&&(K.__readFormat=I.format,K.__readType=I.type,K.__formatReadable=F.textureFormatReadable(I.format),K.__typeReadable=F.textureTypeReadable(I.type)),K}this.readRenderTargetPixels=function(I,K,ft,lt,ut,Ft,Ot,Ct=0){if(!(I&&I.isWebGLRenderTarget)){Ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Yt=ct.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Ot!==void 0&&(Yt=Yt[Ot]),Yt){E.bindFramebuffer(J.FRAMEBUFFER,Yt);try{let se=I.textures[Ct],re=se.format,be=se.type;I.textures.length>1&&J.readBuffer(J.COLOR_ATTACHMENT0+Ct);let Nt=Vs(se);if(Nt.__formatReadable===!1){Ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Nt.__typeReadable===!1){Ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=I.width-lt&&ft>=0&&ft<=I.height-ut&&J.readPixels(K,ft,lt,ut,Gt.convert(re),Gt.convert(be),Ft)}finally{let se=At!==null?ct.get(At).__webglFramebuffer:null;E.bindFramebuffer(J.FRAMEBUFFER,se)}}},this.readRenderTargetPixelsAsync=async function(I,K,ft,lt,ut,Ft,Ot,Ct=0){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Yt=ct.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Ot!==void 0&&(Yt=Yt[Ot]),Yt)if(K>=0&&K<=I.width-lt&&ft>=0&&ft<=I.height-ut){E.bindFramebuffer(J.FRAMEBUFFER,Yt);let se=I.textures[Ct],re=se.format,be=se.type;I.textures.length>1&&J.readBuffer(J.COLOR_ATTACHMENT0+Ct);let Nt=Vs(se);if(Nt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Nt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let bt=J.createBuffer();J.bindBuffer(J.PIXEL_PACK_BUFFER,bt),J.bufferData(J.PIXEL_PACK_BUFFER,Ft.byteLength,J.STREAM_READ),J.readPixels(K,ft,lt,ut,Gt.convert(re),Gt.convert(be),0),J.bindBuffer(J.PIXEL_PACK_BUFFER,null);let me=At!==null?ct.get(At).__webglFramebuffer:null;E.bindFramebuffer(J.FRAMEBUFFER,me);let _e=J.fenceSync(J.SYNC_GPU_COMMANDS_COMPLETE,0);return J.flush(),await W0(J,_e,4),J.bindBuffer(J.PIXEL_PACK_BUFFER,bt),J.getBufferSubData(J.PIXEL_PACK_BUFFER,0,Ft),J.bindBuffer(J.PIXEL_PACK_BUFFER,null),J.deleteBuffer(bt),J.deleteSync(_e),Ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(I,K=null,ft=0){let lt=Math.pow(2,-ft),ut=Math.floor(I.image.width*lt),Ft=Math.floor(I.image.height*lt),Ot=K!==null?K.x:0,Ct=K!==null?K.y:0;vt.setTexture2D(I,0),J.copyTexSubImage2D(J.TEXTURE_2D,ft,0,0,Ot,Ct,ut,Ft),E.unbindTexture()},this.copyTextureToTexture=function(I,K,ft=null,lt=null,ut=0,Ft=0){let Ot,Ct,Yt,se,re,be,Nt,bt,me,_e=I.isCompressedTexture?I.mipmaps[Ft]:I.image;if(ft!==null)Ot=ft.max.x-ft.min.x,Ct=ft.max.y-ft.min.y,Yt=ft.isBox3?ft.max.z-ft.min.z:1,se=ft.min.x,re=ft.min.y,be=ft.isBox3?ft.min.z:0;else{let _n=Math.pow(2,-ut);Ot=Math.floor(_e.width*_n),Ct=Math.floor(_e.height*_n),I.isDataArrayTexture?Yt=_e.depth:I.isData3DTexture?Yt=Math.floor(_e.depth*_n):Yt=1,se=0,re=0,be=0}lt!==null?(Nt=lt.x,bt=lt.y,me=lt.z):(Nt=0,bt=0,me=0);let nn=Gt.convert(K.format),Pn=Gt.convert(K.type),te;K.isData3DTexture?(vt.setTexture3D(K,0),te=J.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(vt.setTexture2DArray(K,0),te=J.TEXTURE_2D_ARRAY):(vt.setTexture2D(K,0),te=J.TEXTURE_2D),E.activeTexture(J.TEXTURE0),E.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,K.flipY),E.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),E.pixelStorei(J.UNPACK_ALIGNMENT,K.unpackAlignment);let Nn=E.getParameter(J.UNPACK_ROW_LENGTH),Fe=E.getParameter(J.UNPACK_IMAGE_HEIGHT),Gn=E.getParameter(J.UNPACK_SKIP_PIXELS),Cn=E.getParameter(J.UNPACK_SKIP_ROWS),Qi=E.getParameter(J.UNPACK_SKIP_IMAGES);E.pixelStorei(J.UNPACK_ROW_LENGTH,_e.width),E.pixelStorei(J.UNPACK_IMAGE_HEIGHT,_e.height),E.pixelStorei(J.UNPACK_SKIP_PIXELS,se),E.pixelStorei(J.UNPACK_SKIP_ROWS,re),E.pixelStorei(J.UNPACK_SKIP_IMAGES,be);let Hs=I.isDataArrayTexture||I.isData3DTexture,sn=K.isDataArrayTexture||K.isData3DTexture;if(I.isDepthTexture){let _n=ct.get(I),ts=ct.get(K),un=ct.get(_n.__renderTarget),Oi=ct.get(ts.__renderTarget);E.bindFramebuffer(J.READ_FRAMEBUFFER,un.__webglFramebuffer),E.bindFramebuffer(J.DRAW_FRAMEBUFFER,Oi.__webglFramebuffer);for(let we=0;we<Yt;we++)Hs&&(J.framebufferTextureLayer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,ct.get(I).__webglTexture,ut,be+we),J.framebufferTextureLayer(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,ct.get(K).__webglTexture,Ft,me+we)),J.blitFramebuffer(se,re,Ot,Ct,Nt,bt,Ot,Ct,J.DEPTH_BUFFER_BIT,J.NEAREST);E.bindFramebuffer(J.READ_FRAMEBUFFER,null),E.bindFramebuffer(J.DRAW_FRAMEBUFFER,null)}else if(ut!==0||I.isRenderTargetTexture||ct.has(I)){let _n=ct.get(I),ts=ct.get(K);E.bindFramebuffer(J.READ_FRAMEBUFFER,j),E.bindFramebuffer(J.DRAW_FRAMEBUFFER,it);for(let un=0;un<Yt;un++)Hs?J.framebufferTextureLayer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,_n.__webglTexture,ut,be+un):J.framebufferTexture2D(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,_n.__webglTexture,ut),sn?J.framebufferTextureLayer(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,ts.__webglTexture,Ft,me+un):J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,ts.__webglTexture,Ft),ut!==0?J.blitFramebuffer(se,re,Ot,Ct,Nt,bt,Ot,Ct,J.COLOR_BUFFER_BIT,J.NEAREST):sn?J.copyTexSubImage3D(te,Ft,Nt,bt,me+un,se,re,Ot,Ct):J.copyTexSubImage2D(te,Ft,Nt,bt,se,re,Ot,Ct);E.bindFramebuffer(J.READ_FRAMEBUFFER,null),E.bindFramebuffer(J.DRAW_FRAMEBUFFER,null)}else sn?I.isDataTexture||I.isData3DTexture?J.texSubImage3D(te,Ft,Nt,bt,me,Ot,Ct,Yt,nn,Pn,_e.data):K.isCompressedArrayTexture?J.compressedTexSubImage3D(te,Ft,Nt,bt,me,Ot,Ct,Yt,nn,_e.data):J.texSubImage3D(te,Ft,Nt,bt,me,Ot,Ct,Yt,nn,Pn,_e):I.isDataTexture?J.texSubImage2D(J.TEXTURE_2D,Ft,Nt,bt,Ot,Ct,nn,Pn,_e.data):I.isCompressedTexture?J.compressedTexSubImage2D(J.TEXTURE_2D,Ft,Nt,bt,_e.width,_e.height,nn,_e.data):J.texSubImage2D(J.TEXTURE_2D,Ft,Nt,bt,Ot,Ct,nn,Pn,_e);E.pixelStorei(J.UNPACK_ROW_LENGTH,Nn),E.pixelStorei(J.UNPACK_IMAGE_HEIGHT,Fe),E.pixelStorei(J.UNPACK_SKIP_PIXELS,Gn),E.pixelStorei(J.UNPACK_SKIP_ROWS,Cn),E.pixelStorei(J.UNPACK_SKIP_IMAGES,Qi),Ft===0&&K.generateMipmaps&&J.generateMipmap(te),E.unbindTexture()},this.initRenderTarget=function(I){ct.get(I).__webglFramebuffer===void 0&&vt.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?vt.setTextureCube(I,0):I.isData3DTexture?vt.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?vt.setTexture2DArray(I,0):vt.setTexture2D(I,0),E.unbindTexture()},this.resetState=function(){pt=0,_t=0,At=null,E.reset(),Kt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=qe._getDrawingBufferColorSpace(t),e.unpackColorSpace=qe._getUnpackColorSpace()}};var Rg=new oi,Sh=new Z,ji=class extends fl{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new Mn(t,3)),this.setAttribute("uv",new Mn(e,2))}applyMatrix4(t){let e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new nr(e,6,1);return this.setAttribute("instanceStart",new qi(n,3,0)),this.setAttribute("instanceEnd",new qi(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new nr(e,6,1);return this.setAttribute("instanceColorStart",new qi(n,3,0)),this.setAttribute("instanceColorEnd",new qi(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new al(t.geometry)),this}fromLineSegments(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new oi);let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),Rg.setFromBufferAttribute(e),this.boundingBox.union(Rg))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xi),this.boundingBox===null&&this.computeBoundingBox();let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Sh.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Sh)),Sh.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Sh));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}};Wt.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new zt},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};ci.line={uniforms:El.merge([Wt.common,Wt.fog,Wt.line]),vertexShader:`
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
		`};var ds=class extends $n{constructor(t){super({type:"LineMaterial",uniforms:El.clone(ci.line.uniforms),vertexShader:ci.line.vertexShader,fragmentShader:ci.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0!==this.worldUnits&&(this.needsUpdate=!0),t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var qf=new on,Ig=new Z,Pg=new Z,Xn=new on,qn=new on,fs=new on,Yf=new Z,Jf=new Je,Yn=new ml,Lg=new Z,Mh=new oi,bh=new xi,ps=new on,ms,Or;function Dg(i,t,e){return ps.set(0,0,-t,1).applyMatrix4(i.projectionMatrix),ps.multiplyScalar(1/ps.w),ps.x=Or/e.width,ps.y=Or/e.height,ps.applyMatrix4(i.projectionMatrixInverse),ps.multiplyScalar(1/ps.w),Math.abs(Math.max(ps.x,ps.y))}function A1(i,t){let e=i.matrixWorld,n=i.geometry,s=n.attributes.instanceStart,r=n.attributes.instanceEnd,a=Math.min(n.instanceCount,s.count);for(let l=0,u=a;l<u;l++){Yn.start.fromBufferAttribute(s,l),Yn.end.fromBufferAttribute(r,l),Yn.applyMatrix4(e);let h=new Z,d=new Z;ms.distanceSqToSegment(Yn.start,Yn.end,d,h),d.distanceTo(h)<Or*.5&&t.push({point:d,pointOnLine:h,distance:ms.origin.distanceTo(d),object:i,face:null,faceIndex:l,uv:null,uv1:null})}}function C1(i,t,e){let n=t.projectionMatrix,r=i.material.resolution,a=i.matrixWorld,l=i.geometry,u=l.attributes.instanceStart,h=l.attributes.instanceEnd,d=Math.min(l.instanceCount,u.count),S=-t.near;ms.at(1,fs),fs.w=1,fs.applyMatrix4(t.matrixWorldInverse),fs.applyMatrix4(n),fs.multiplyScalar(1/fs.w),fs.x*=r.x/2,fs.y*=r.y/2,fs.z=0,Yf.copy(fs),Jf.multiplyMatrices(t.matrixWorldInverse,a);for(let g=0,b=d;g<b;g++){if(Xn.fromBufferAttribute(u,g),qn.fromBufferAttribute(h,g),Xn.w=1,qn.w=1,Xn.applyMatrix4(Jf),qn.applyMatrix4(Jf),Xn.z>S&&qn.z>S)continue;if(Xn.z>S){let H=Xn.z-qn.z,D=(Xn.z-S)/H;Xn.lerp(qn,D)}else if(qn.z>S){let H=qn.z-Xn.z,D=(qn.z-S)/H;qn.lerp(Xn,D)}Xn.applyMatrix4(n),qn.applyMatrix4(n),Xn.multiplyScalar(1/Xn.w),qn.multiplyScalar(1/qn.w),Xn.x*=r.x/2,Xn.y*=r.y/2,qn.x*=r.x/2,qn.y*=r.y/2,Yn.start.copy(Xn),Yn.start.z=0,Yn.end.copy(qn),Yn.end.z=0;let N=Yn.closestPointToPointParameter(Yf,!0);Yn.at(N,Lg);let x=Tf.lerp(Xn.z,qn.z,N),m=x>=-1&&x<=1,$=Yf.distanceTo(Lg)<Or*.5;if(m&&$){Yn.start.fromBufferAttribute(u,g),Yn.end.fromBufferAttribute(h,g),Yn.start.applyMatrix4(a),Yn.end.applyMatrix4(a);let H=new Z,D=new Z;ms.distanceSqToSegment(Yn.start,Yn.end,D,H),e.push({point:D,pointOnLine:H,distance:ms.origin.distanceTo(D),object:i,face:null,faceIndex:g,uv:null,uv1:null})}}}var Fr=class extends kn{constructor(t=new ji,e=new ds({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,s=new Float32Array(2*e.count);for(let a=0,l=0,u=e.count;a<u;a++,l+=2)Ig.fromBufferAttribute(e,a),Pg.fromBufferAttribute(n,a),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+Ig.distanceTo(Pg);let r=new nr(s,2,1);return t.setAttribute("instanceDistanceStart",new qi(r,1,0)),t.setAttribute("instanceDistanceEnd",new qi(r,1,1)),this}raycast(t,e){let n=this.material.worldUnits,s=t.camera;if(s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.'),n===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;let r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;ms=t.ray;let a=this.matrixWorld,l=this.geometry,u=this.material;Or=u.linewidth+r,l.boundingSphere===null&&l.computeBoundingSphere(),bh.copy(l.boundingSphere).applyMatrix4(a);let h;if(n)h=Or*.5;else{let S=Math.max(s.near,bh.distanceToPoint(ms.origin));h=Dg(s,S,u.resolution)}if(bh.radius+=h,ms.intersectsSphere(bh)===!1)return;l.boundingBox===null&&l.computeBoundingBox(),Mh.copy(l.boundingBox).applyMatrix4(a);let d;if(n)d=Or*.5;else{let S=Math.max(s.near,Mh.distanceToPoint(ms.origin));d=Dg(s,S,u.resolution)}Mh.expandByScalar(d),ms.intersectsBox(Mh)!==!1&&(n?A1(this,e):C1(this,s,e))}onBeforeRender(t){let e=this.material.uniforms;e&&e.resolution&&(t.getViewport(qf),this.material.uniforms.resolution.value.set(qf.z,qf.w))}};var wh=i=>i<90?Math.round(i)+" s":i<5400?Math.round(i/60)+" min":i<129600?Math.round(i/3600)+" h":Math.round(i/86400)+(window.__L==="en"?" days":window.__L==="ca"?" dies":" d\xEDas"),gs=i=>window.__L==="en"?i+" ago":(window.__L==="ca"?"fa ":"hace ")+i;function Ng(i){let t=window.__ROD__,{scene:e,camera:n,goal:s,cur:r,invalidate:a,K:l,CX:u,CY:h,mcs:d,q:S,list:g,clamp:b,norm:w,munis:N}=i,x=o=>document.querySelector(o),m=o=>String(o).replace(/[<>&"]/g,c=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[c]),$=(o,c)=>[(o-u)*l,(c-h)*l],H=.06,D=t.segs.map(o=>{let c=[],f=[0];for(let p=0;p<o.length;p+=2){let v=$(o[p],o[p+1]);c.length&&f.push(f[f.length-1]+Math.hypot(v[0]-c[c.length-1][0],v[1]-c[c.length-1][1])),c.push(v)}return{p:c,c:f,L:f[f.length-1]}}),T=t.stops.map(([o,c,f,p])=>({n:o,id:p,w:$(c,f),fams:new Set})),k=t.routes.map(([o,c,f])=>({s:o,l:c,c:f})),q=new Map;(t.bus||[]).forEach(([o,c,f,p])=>{let v={days:new Set(o),name:c,stops:f,times:p};f.forEach((y,C)=>{if(C<f.length-1){let L=q.get(y)||[];L.push([v,C]),q.set(y,L)}})});function R(o,c,f){let p=Qt(),v=t.days.indexOf(p.ymd),y=[];for(let[C,L]of q.get(o)||[]){if(!C.days.has(v))continue;let P=C.times[L];if(P<c||P>f)continue;let U=C.stops[C.stops.length-1];y.push({sm:P,est:P,dl:0,fam:C.name,dest:T[U].n,destId:T[U].id,plat:"",cancel:!1,obs:"",live:!1,num:"",tid:"",tr:null,bus:!0,src:"bus",bstops:C.stops.slice(L)})}return y}let B=(o,c)=>{let f=o.match(/^R([A-Z]*)(\d*)(.*)$/),p=c.match(/^R([A-Z]*)(\d*)(.*)$/);return(f[1]||"").localeCompare(p[1]||"")||(+f[2]||0)-(+p[2]||0)||f[3].localeCompare(p[3])},X=[...new Set(k.map(o=>o.s))].sort(B),Y={};k.forEach(o=>{Y[o.s]||(Y[o.s]=o.c)});let ot=t.pats.map(([o,c,f])=>({stops:o,t:c,segs:f})),ht=t.trips.map(([o,c,f,p,v],y)=>({day:o,pat:ot[c],fam:k[f].s,c:k[f].c,t0:p,num:v,tid:t.tids[y]})),j={};X.forEach(o=>j[o]=new Set),ht.forEach(o=>{o.pat.segs.forEach(c=>j[o.fam].add(c)),o.pat.stops.forEach(c=>T[c].fams.add(o.fam))});let it=t.days.map((o,c)=>ht.filter(f=>f.day===c)),pt=new Map(ht.map(o=>[o.tid,o])),_t=[124.87404143965449,479.9901289885639,124.62688710863031,249.99562739146893,486.739003764725,248.0364802782304,2037.1344308355726],At=Math.PI/180,xt=3.922*At,Et=-39.705*At;function wt(o,c){let f=o*At+xt,p=c*At,v=Math.cos(Et),y=Math.sin(Et),C=Math.cos(p),L=Math.cos(f)*C,P=Math.sin(f)*C,U=Math.sin(p),V=Math.atan2(P,L*v-U*y),_=Math.asin(U*v+L*y),M=Math.sqrt(2/(1+Math.cos(V)*Math.cos(_))),A=M*Math.cos(_)*Math.sin(V),O=M*Math.sin(_),[et,nt,z,at,W,ne,Se]=_t;return $((nt+et*A-W)*Se,(ne-(at-z*O))*Se)}let kt=new Map(T.map((o,c)=>[o.id,c]));function ee(o){if(o.g)return o.g;let c=[],f=[],p=[0],v=0;return o.segs.forEach((y,C)=>{let L=D[y];L.p.forEach((P,U)=>{C&&!U||(c.push(P),f.push(v+L.c[U]))}),v+=L.L,p.push(v)}),o.g={pts:c,cum:f,stopD:p}}function Ze(o,c,f,p){let v=1e18,y=0;for(let C=0;C+1<o.pts.length;C++){if(o.cum[C+1]<f||o.cum[C]>p)continue;let L=o.pts[C],P=o.pts[C+1],U=P[0]-L[0],V=P[1]-L[1],_=U*U+V*V||1e-9,M=Math.max(0,Math.min(1,((c[0]-L[0])*U+(c[1]-L[1])*V)/_)),A=L[0]+U*M-c[0],O=L[1]+V*M-c[1],et=A*A+O*O;et<v&&(v=et,y=o.cum[C]+M*(o.cum[C+1]-o.cum[C]))}return{d:y,err:Math.sqrt(v)}}function Ne(o,c){let f=0,p=o.cum.length-1;if(c<=0)return o.pts[0];if(c>=o.cum[p])return o.pts[p];for(;p-f>1;){let L=f+p>>1;o.cum[L]<=c?f=L:p=L}let v=(c-o.cum[f])/(o.cum[p]-o.cum[f]||1),y=o.pts[f],C=o.pts[p];return[y[0]+(C[0]-y[0])*v,y[1]+(C[1]-y[1])*v]}let We=o=>`${o.slice(6,8)}/${o.slice(4,6)}`,yt=new Intl.DateTimeFormat("es-ES",{timeZone:"Europe/Madrid",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hourCycle:"h23"});function St(o){let c={};return yt.formatToParts(o).forEach(f=>c[f.type]=f.value),{ymd:c.year+c.month+c.day,min:+c.hour*60+ +c.minute+ +c.second/60}}let Ut=0,ue=null,jt=0,ge=0;function Qt(){let o=St(new Date);if(Ut===0&&ue==null)return{...o,live:!0};let c=ue==null?o.min:jt+(Ut?(performance.now()-ge)/6e4*Ut:0);return{ymd:o.ymd,min:c,live:!1}}let st=o=>(o=(Math.floor(o+1e-6)%1440+1440)%1440,String(Math.floor(o/60)).padStart(2,"0")+":"+String(o%60).padStart(2,"0")),Rt="https://rodalies.erathegameoftime.com",G={url:"",delays:new Map,tu:new Map,vp:new Map,alerts:[],ok:0,okVP:0,err:"",feedTs:0};try{let o=new URLSearchParams(location.search).get("rt");o&&localStorage.setItem("rod_rt",o);let c=localStorage.getItem("rod_rt");c&&/jhmuyo\.workers\.dev/.test(c)&&(c=Rt,localStorage.setItem("rod_rt",c)),G.url=c||Rt}catch{G.url=Rt}let Lt=(o,c)=>{let f=new AbortController,p=setTimeout(()=>f.abort(),12e3);return fetch(o+c,{cache:"no-store",signal:f.signal}).then(v=>{if(clearTimeout(p),!v.ok)throw new Error("HTTP "+v.status);return v.json()},v=>{throw clearTimeout(p),v})},Bt="https://rodalies.jhmuyo.workers.dev";function ce(){return(G.url===Rt&&G.altUntil>Date.now()?Bt:G.url).replace(/\/+$/,"")}let fe=o=>/^51/.test(o||"");async function de(){if(!G.url){rt();return}let o=ce();if(!de.busy){de.busy=1;try{await Ae(o)}finally{de.busy=0}}}async function Ae(o){let c=!G.adifAt||Date.now()-G.adifAt>11e4,f=_=>({status:"fulfilled",value:_}),p=_=>({status:"rejected",reason:_}),v,y,C,L,P,U=null;if(G.noLive&&Date.now()-G.noLive>30*6e4&&(G.noLive=0),!G.noLive)try{U=await Lt(o,"/live.json")}catch(_){if(/HTTP 404/.test(_.message))G.noLive=Date.now();else{if(G.url===Rt&&o!==Bt)return G.altUntil=Date.now()+30*6e4,Ae(Bt);o===Bt&&(G.altUntil=0),U={__fail:_}}}if(U&&U.__fail)v=y=C=L=P=p(U.__fail);else if(U&&U.v===1){let _=A=>U[A]&&!U[A].__err?f(U[A]):p(new Error(U[A]&&U[A].__err||"sin dato"));v=_("tu"),y=_("vp"),C=_("al"),L=_("nt"),P=c?_("ad"):p(0);let M=U.rep;M&&Array.isArray(M.items)&&(G.rep=M.items,G.repSkew=(M.now||Date.now())-Date.now(),M.tipos&&(G.tipos=M.tipos),G.repOk=Date.now(),G.repFail=0)}else(!G.repFail||Date.now()-G.repFail>15*6e4)&&Lt(o,"/reports.json").then(_=>{_&&Array.isArray(_.items)?(G.rep=_.items,G.repSkew=(_.now||Date.now())-Date.now(),_.tipos&&(G.tipos=_.tipos),G.repOk=Date.now(),G.repFail=0):G.repFail=Date.now()}).catch(()=>{G.repFail=Date.now(),G.repOk=0}),[v,y,C,L,P]=await Promise.allSettled([Lt(o,"/trip_updates.json"),Lt(o,"/vehicle_positions.json"),Lt(o,"/alerts.json"),Lt(o,"/notices.json"),c?Lt(o,"/adif.json"):Promise.reject(0)]);if(P.status==="fulfilled"&&P.value&&P.value.ok?(G.adif=P.value,G.adifAt=Date.now()):c&&(G.adifAt=Date.now()-6e4),v.status==="fulfilled"){let _=new Map,M=new Map;for(let A of v.value.entity||[]){let O=A.tripUpdate;if(!O||!O.trip||!fe(O.trip.tripId))continue;let et=O.trip.tripId,nt=(O.stopTimeUpdate||[])[0],z=O.delay;z==null&&nt&&(z=(nt.arrival||nt.departure||{}).delay),O.trip.scheduleRelationship==="CANCELED"&&(z="X"),z!=null&&_.set(et,z),M.set(et,{next:nt?{sid:nt.stopId,t:+((nt.arrival||nt.departure||{}).time||0)}:null})}G.delays=_,G.tu=M,G.ok=Date.now(),G.feedTs=+((v.value.header||{}).timestamp||0)*1e3,G.err=""}else G.err=v.reason&&v.reason.message||__t(0);if(y.status==="fulfilled"){let _=new Map,M=Date.now()/1e3;for(let A of y.value.entity||[]){let O=A.vehicle;if(!O||!O.trip||!fe(O.trip.tripId)||!O.position)continue;let et=O.vehicle&&O.vehicle.label||"",nt=et.match(/PLATF\.\(([^)]+)\)/),z=G.vp.get(O.trip.tripId),at={tid:O.trip.tripId,w:wt(+O.position.longitude,+O.position.latitude),st:O.currentStatus||"",sid:O.stopId||"",ts:+O.timestamp||M,label:et,plat:nt?nt[1]:"",fam:(et.split("-")[0]||"").trim(),num:O.vehicle&&O.vehicle.id||""};at.disp=z?z.disp:null,_.set(at.tid,at)}G.vp=_,G.okVP=Date.now()}let V=[];if(L.status==="fulfilled"&&Array.isArray(L.value.included)){G.okNotices=Date.now();for(let _ of L.value.included){let M=new Set((_.lines||[]).map(z=>z.id).filter(z=>Y[z])),A=(z,at)=>{z=z||{},at=at||window.__L;let W=z[at];return at==="en"&&W&&(W===z.ca||/\b(els|amb|dels|per una|circulen|serveis|entre .{2,40} i )\b|ç|l·l/i.test(W))&&(W=""),(W||z.es||z.ca||"").trim()},O=z=>[A(_.description,z),A(_.title,z)].sort((at,W)=>W.length-at.length)[0],et=O(),nt=O("es");et&&V.push({id:"N"+_.externalId,fams:M,stops:new Set,txt:et,es:nt,when:(_.date||"")+"T"+(_.time||""),src:"Rodalies",core:_.core||""})}}if(C.status==="fulfilled"){let _=+((C.value.header||{}).timestamp||0);if(G.alertsTs=_,Date.now()/1e3-_<6*3600)for(let M of C.value.entity||[]){let A=M.alert;if(!A)continue;let O=new Set,et=new Set;for(let W of A.informedEntity||[])(W.routeId||"").startsWith("51")&&O.add(W.routeId.replace(/^51T\d+/,"")),W.stopId&&kt.has(W.stopId)&&et.add(kt.get(W.stopId));if(!O.size&&!et.size)continue;let nt=(A.descriptionText||A.headerText||{translation:[]}).translation||[],z=((nt.find(W=>W.language==="es")||nt[0]||{}).text||"").trim(),at=+((A.activePeriod||[])[0]||{}).start||0;V.some(W=>W.txt===z)||V.push({id:M.id,fams:O,stops:et,txt:z,when:at?new Date(at*1e3).toISOString().slice(0,19):"",src:"Renfe"})}}if(G.adif&&Date.now()-G.adifAt<15*6e4)for(let[_,M]of(G.adif.items||[]).entries()){let A=(M.t?M.t+". ":"")+M.txt,O=new Set,et=new Set,nt=w(A);for(let z of A.matchAll(/\b(R\d{1,2}[NS]?|R3a|RG1|RL\d|RT\d)\b/g))Y[z[1]]&&O.add(z[1]);T.forEach((z,at)=>{z.fams.size&&z.n.length>4&&nt.includes(w(z.n))&&(et.add(at),O.size||z.fams.forEach(W=>O.add(W)))}),V.some(z=>z.txt===A)||V.push({id:"A"+_,fams:O,stops:et,txt:A,when:G.adif.upd||"",src:"Adif",lvl:M.lvl})}if(L.status==="fulfilled"||C.status==="fulfilled"){G.alerts=V.sort((_,M)=>M.when>_.when?1:-1);try{B_()}catch{}}rt(),Hh(),be=0,a()}let J=()=>G.okVP&&Date.now()-G.okVP<10*6e4,Oe=()=>G.okVP&&Date.now()-G.okVP<9e4,Ue={at:0,v:!1},F=()=>{if(!J()||G.vp.size>0)return!1;if(Date.now()-Ue.at>3e4){Ue.at=Date.now();let o=St(new Date),c=t.days.indexOf(o.ymd),f=0;if(c>=0)for(let p of it[c]){let v=o.min-p.t0;v>p.pat.t[1]+2&&v<p.pat.t[p.pat.t.length-2]-2&&f++}Ue.v=f>=6}return Ue.v},E=()=>J()&&!F();function rt(){let o=x("#rtst"),c=x("#mode");if(c){let p=[...dt].filter(L=>{po("");let P=Bi.m.get(L);return P&&P[0]>=2}),v=fo(p),y=!!E()&&Qt().live&&!(p.length&&v.length===p.length);c.classList.toggle("on",y&&Oe()),c.classList.toggle("pre",!(y&&Oe())),c.textContent=y&&!Oe()?__t(1):y?__t(2):Dt.cur?__t(3):__t(4),c.classList.toggle("past",!!Dt.cur);let C=x("#rcgrab");if(C){let L=C.querySelector(".rdot");L||(L=document.createElement("b"),L.className="rdot",C.insertBefore(L,C.firstChild)),L.className="rdot "+(Dt.cur?"past":y&&Oe()?"on":"pre"),L.title=c.textContent}c.title=Dt.cur?`${__t(5)}${Dt.cur.sn.t}${__t(6)}`:""}if(!o)return;G.url?G.err?o.textContent=__t(8)+G.err+__t(9):E()?o.innerHTML=`${__t(10)}${G.vp.size}${__t(11)}${G.delays.size}${__t(12)}${new Date(G.okVP).toLocaleTimeString("es-ES",{hour:"2-digit",minute:"2-digit",second:"2-digit"})}`:F()?o.textContent=__t(13):o.textContent=__t(14):o.textContent=G.err||__t(7);let f=x("#rturl");f&&f._shown!==G.url&&(f.value=G.url,f._shown=G.url)}x("#rtsave").onclick=()=>{let o=x("#rturl").value.trim().replace(/\/+(alerts|trip_updates|vehicle_positions)\.json$/,"").replace(/\/+$/,"");if(o&&!/^https?:\/\//.test(o)&&(o="https://"+o),!o){G.err=__t(15),rt();return}G.url=o;try{localStorage.setItem("rod_rt",o)}catch{}G.ok=0,G.err="",rt(),de()},x("#rtoff").onclick=()=>{G.url=Rt;try{localStorage.removeItem("rod_rt")}catch{}d._h="",de()};let ct=0;setInterval(()=>{let o=ln.size||xe;(document.hidden?!o||Date.now()-ct<115e3:Date.now()-ct<15e3)||(ct=Date.now(),de())},2e4),setTimeout(()=>{ct=Date.now(),de()},50),document.addEventListener("visibilitychange",()=>{!document.hidden&&Date.now()-ct>15e3&&(ct=Date.now(),de())});let Dt={snap:null,key:""};function $t(){let o=Qt();if(o.live||!we.hoy||!we.hoy.snaps||Ut&&ue==null)return null;let c=St(new Date).min;if(o.min>c+1)return null;let f=null;for(let p of we.hoy.snaps){if(!p.d)continue;let v=Fp(p.t);v<=o.min+1&&(!f||v>f.m)&&(f={m:v,sn:p})}return f&&o.min-f.m<=25?f:null}let gt=o=>{{let v=zh(o.num);if(v&&v.cx&&Qt().live)return"X"}let c=Dt.cur;if(c){if(c.sn.x&&c.sn.x.includes(o.tid))return"X";let v=c.sn.d[o.tid];return v??0}if(!E())return null;let f=G.delays.get(o.tid),p=G.vp.get(o.tid);return f==="X"?f:p&&p.pre&&p.preDl>=1?Math.max(typeof f=="number"?f:0,p.preDl*60):f??null},dt=new Set(X);try{let o=JSON.parse(localStorage.getItem("rod_lines")||"null");Array.isArray(o)&&o.some(c=>X.includes(c))&&(dt.clear(),o.forEach(c=>X.includes(c)&&dt.add(c)))}catch{}let Xt=new ji,he=new ji,Jt=new ds({vertexColors:!0,linewidth:3.2,depthTest:!1,transparent:!0}),Ht=new ds({color:16777215,linewidth:6,depthTest:!1,transparent:!0,opacity:.9}),le=new Fr(Xt,Jt),pe=new Fr(he,Ht);pe.renderOrder=20,le.renderOrder=21,le.frustumCulled=pe.frustumCulled=!1,e.add(pe,le);function Ce(o){let c=o[0]/l+u,f=o[1]/l+h;for(let p of N){if(p._bb===void 0){let y=1e9,C=1e9,L=-1e9,P=-1e9;for(let U of p.rings||[]){let V=U[0]||[];for(let _=0;_<V.length;_+=2)V[_]<y&&(y=V[_]),V[_]>L&&(L=V[_]),V[_+1]<C&&(C=V[_+1]),V[_+1]>P&&(P=V[_+1])}p._bb=[y,C,L,P]}let v=p._bb;if(!(c<v[0]||c>v[2]||f<v[1]||f>v[3]))for(let y of p.rings||[]){let C=y[0]||[],L=!1;for(let P=0,U=C.length,V=U-2;P<U;V=P,P+=2){let _=C[P+1],M=C[V+1];_>f!=M>f&&c<(C[V]-C[P])*(f-_)/(M-_)+C[P]&&(L=!L)}if(L)return!0}}return!1}let Q=!1;function qt(){Q||!N.length||(Q=!0,T.forEach(o=>{o.ext=!Ce(o.w)}),D.forEach(o=>{o.ext=!Ce(o.p[0])&&!Ce(o.p[o.p.length-1])&&!Ce(o.p[o.p.length>>1])}))}let Mt=()=>{let o=new Set(dt.size<=2?dt:[]);try{bt&&bt.fam&&o.add(bt.fam)}catch{}return o},Gt="";function Kt(){qt();let o=[],c=[],f=new Set,p=new ve,v=new ve("#d2d0d0"),y=Mt();Gt=[...y].join();for(let V of X)if(dt.has(V))for(let _ of j[V]){if(f.has(_))continue;f.add(_);let M=D[_].p;p.set(Y[V]),D[_].ext&&!y.has(V)&&p.lerp(v,.55);for(let A=0;A+1<M.length;A++)o.push(M[A][0],M[A][1],H,M[A+1][0],M[A+1][1],H),c.push(p.r,p.g,p.b,p.r,p.g,p.b)}o.length||(o.push(0,0,-50,0,0,-50),c.push(0,0,0,0,0,0));let C=new ji,L=new ji;C.setPositions(o),C.setColors(c),L.setPositions(o);let P=le.geometry,U=pe.geometry;le.geometry=C,pe.geometry=L,P&&P.dispose(),U&&U.dispose(),a()}Kt();let Tt=o=>new $n({uniforms:{dpr:{value:Math.min(devicePixelRatio||1,2)},border:{value:new ve(o)}},vertexShader:"attribute float size; attribute vec3 fill; attribute float bw; varying vec3 vF; varying float vS; varying float vB; uniform float dpr; void main(){ vF=fill; vS=size*dpr; vB=bw*dpr; gl_PointSize=vS; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"uniform vec3 border; varying vec3 vF; varying float vS; varying float vB; void main(){ float r=length(gl_PointCoord*2.0-1.0)*vS*0.5; float R=vS*0.5; if(r>R) discard; float a=1.0-smoothstep(R-1.2,R,r); vec3 c = r>R-vB ? border : vF; gl_FragColor=vec4(c,a); }",transparent:!0,depthTest:!1}),oe=new bn,ie=T.length,tn=new Float32Array(ie*3),je=new Float32Array(ie*3),Vn=new Float32Array(ie),hi=new Float32Array(ie);T.forEach((o,c)=>{tn[c*3]=o.w[0],tn[c*3+1]=o.w[1],tn[c*3+2]=H,je.set([1,1,1],c*3),Vn[c]=6,hi[c]=1.6}),oe.setAttribute("position",new hn(tn,3)),oe.setAttribute("fill",new hn(je,3)),oe.setAttribute("size",new hn(Vn,1)),oe.setAttribute("bw",new hn(hi,1));let Ul=Tt("#1d2330"),Ja=new Rr(oe,Ul);Ja.renderOrder=22,Ja.frustumCulled=!1,e.add(Ja);function Hn(){let o=r.dist<45,c=Mt();T.forEach((f,p)=>{let v=[...f.fams].some(C=>dt.has(C)),y=f.ext&&![...f.fams].some(C=>c.has(C))&&p!==me;Vn[p]=v?p===me?13:y?3:o?8:5:0,hi[p]=p===me?3:1.6}),oe.attributes.size.needsUpdate=!0,oe.attributes.bw.needsUpdate=!0}let di=600,Ni=new bn,hr=new Float32Array(di*3),dr=new Float32Array(di*3),Ui=new Float32Array(di),Hr=new Float32Array(di);Ni.setAttribute("position",new hn(hr,3)),Ni.setAttribute("fill",new hn(dr,3)),Ni.setAttribute("size",new hn(Ui,1)),Ni.setAttribute("bw",new hn(Hr,1));let $s=new Float32Array(di);Ni.setAttribute("ang",new hn($s,1));let Ol=new $n({uniforms:{dpr:{value:Math.min(devicePixelRatio||1,2)},border:{value:new ve("#ffffff")}},vertexShader:"attribute float size; attribute vec3 fill; attribute float bw; attribute float ang; varying vec3 vF; varying float vS; varying float vB; varying float vA; uniform float dpr; void main(){ vF=fill; vS=size*dpr; vB=bw*dpr; vA=ang; gl_PointSize=vS; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"uniform vec3 border; varying vec3 vF; varying float vS; varying float vB; varying float vA; void main(){ vec2 p=gl_PointCoord*2.0-1.0; float r=length(p)*vS*0.5; float R=vS*0.5; if(r>R) discard; float a=1.0-smoothstep(R-1.2,R,r); vec3 c = r>R-vB ? border : vF; if(vA<50.0){ vec2 d=vec2(sin(vA),-cos(vA)); vec2 n=vec2(cos(vA),sin(vA)); float qy=-dot(p,d); float qx=dot(p,n); float w=(qy+0.66)/0.98*0.48; if(qy>-0.66 && qy<0.32 && abs(qx)<w) c=vec3(1.0); } else if(vA>70.0 && vA<80.0){ if(abs(p.y)<0.36 && abs(abs(p.x)-0.2)<0.1) c=vec3(1.0); } else if(vA>80.0 && vA<90.0){ if((abs(p.x)<0.11 && p.y>-0.5 && p.y<0.16) || length(p-vec2(0.0,0.38))<0.12) c=vec3(1.0); } gl_FragColor=vec4(c,a); }",transparent:!0,depthTest:!1}),zs=new Rr(Ni,Ol);zs.renderOrder=24,zs.frustumCulled=!1,e.add(zs);let Ki=new bn,ys=new Float32Array(di*3),Za=new Float32Array(di*3),ja=new Float32Array(di),Fl=new Float32Array(di);Ki.setAttribute("position",new hn(ys,3)),Ki.setAttribute("fill",new hn(Za,3)),Ki.setAttribute("size",new hn(ja,1)),Ki.setAttribute("bw",new hn(Fl,1));let Ka=new Rr(Ki,Tt("#ffffff"));Ka.renderOrder=23,Ka.frustumCulled=!1,e.add(Ka);function Bl(o,c){let f=D[o],p=c*f.L,v=0,y=f.c.length-1;for(;y-v>1;){let V=v+y>>1;f.c[V]<=p?v=V:y=V}let C=f.c[y]-f.c[v]||1,L=(p-f.c[v])/C,P=f.p[v],U=f.p[y];return[P[0]+(U[0]-P[0])*L,P[1]+(U[1]-P[1])*L]}let kl=o=>o*o*(3-2*o)*.35+o*.65;function Vs(o,c){let f=o.pat.t,p=o.pat.stops.length,v=f[2*p-2];if(c<f[1]-2||c>v+1)return null;if(c<=f[1])return{w:T[o.pat.stops[0]].w,at:0,next:0,moving:!1};for(let y=0;y<p-1;y++){let C=f[2*y+1],L=f[2*y+2],P=f[2*y+3];if(c<=L){let U=L>C?(c-C)/(L-C):1;return{w:Bl(o.pat.segs[y],kl(b(U,0,1))),at:-1,next:y+1,prev:y,moving:!0}}if(c<=P)return{w:T[o.pat.stops[y+1]].w,at:y+1,next:y+1,moving:!1}}return{w:T[o.pat.stops[p-1]].w,at:p-1,next:p-1,moving:!1}}function I(o){let c=t.days.indexOf(o.ymd),f=[];if(c<0)return{k:c,out:f};let p=(v,y)=>{for(let C of v){if(!dt.has(C.fam))continue;let L=gt(C);if(L==="X")continue;let P=(L||0)/60,U=o.min+y-C.t0-P;if(U<-2||U>C.pat.t[C.pat.t.length-2]+1)continue;let V=Vs(C,U);V&&f.push({tr:C,p:V,rel:U,dl:P,live:L!=null})}};return p(it[c],0),c>0&&p(it[c-1],1440),{k:c,out:f}}function K(o,c,f,p){let v=o.pat.stops[0],y=c.dep0,C=null,L=(U,V)=>{for(let _ of U||[]){let M=_.pat.stops,A=M.length;if(M[A-1]!==v||_===o)continue;let O=_.t0+_.pat.t[2*(A-1)]-V;if(O>y+5||O<y-120)continue;let et=ee(_.pat),nt=Ze(et,c.w,-1,1e9);if(nt.err>.6)continue;let z=et.stopD,at=_.pat.t,W=z.findIndex(Zt=>Zt>nt.d);W<0&&(W=A-1);let ne=W===0?at[1]:at[2*W-1]+(z[W]>z[W-1]?(nt.d-z[W-1])/(z[W]-z[W-1]):1)*(at[2*W]-at[2*W-1]),Se=f-(_.t0+ne-V);Se<-5||Se>120||(!C||Math.abs(Se)<Math.abs(C.prevDl))&&(C={prevTr:_,dPrev:nt.d,prevDl:Se,arrO:O+Math.max(0,Se)})}};if(L(it[p],0),p>0&&L(it[p-1],1440),!C)return{prevTr:null,preDl:0};let P=Math.max(y,C.arrO+3);return{...C,depEst:P,preDl:Math.max(0,P-y)}}function ft(o,c,f){let p=o.pat.t,v=c.length;if(!(f>=0))return f<0?c[0]:null;for(let y=0;y<v;y++)if(f<=p[2*y+1]){if(f>=p[2*y]||y===0)return c[y];let C=p[2*y-1],L=p[2*y];return c[y-1]+(c[y]-c[y-1])*(L>C?(f-C)/(L-C):1)}return c[v-1]}let lt=performance.now();function ut(){let o=[],c=Date.now()/1e3,f=performance.now(),p=Math.min(1,(f-lt)/1e3);lt=f;for(let v of G.vp.values()){let y=pt.get(v.tid),C=y?y.fam:v.fam;if(C&&Y[C]&&!dt.has(C))continue;let L=G.delays.get(v.tid),P=typeof L=="number"?L/60:0,U=Math.max(0,c-v.ts);v.mvTs!==v.ts&&((!v.mvW||Math.hypot(v.w[0]-v.mvW[0],v.w[1]-v.mvW[1])>.025)&&(v.mvW=v.w,v.mvAt=v.ts),v.mvTs=v.ts),v.still=v.ts-(v.mvAt||v.ts);let V=v.w,_=-1;if(y){let A=ee(y.pat),O=A.stopD;if(v.dObs==null||v.obsAt!==v.ts){let W=Ze(A,v.w,-1,1e9);v.dObs=W.d,v.err=W.err,v.obsAt=v.ts}let et=Qt(),nt=t.days.indexOf(et.ymd),z=y.day===nt-1?1440:0,at=y.t0+y.pat.t[1]-z;if(v.pre=et.min+P<at-1&&(v.dObs>O[0]+.35||v.err>.6)&&!(v.st==="STOPPED_AT"&&v.sid===T[y.pat.stops[0]].id),v.dep0=at,v.pre){if(v.atStop=-1,v.next=0,_=0,v.disp=null,v.prevAt!==v.ts&&(v.prevAt=v.ts,Object.assign(v,K(y,v,et.min,nt))),v.prevTr){let W=ee(v.prevTr.pat);V=Ne(W,v.dPrev)}}else if(!Oe()&&y){let W=Qt(),ne=t.days.indexOf(W.ymd),Se=y.day===ne-1?1440:0,Zt=Vs(y,W.min+Se-y.t0-P);Zt?(V=Zt.w,v.est=!0,_=Zt.next,v.atStop=Zt.moving?-1:Zt.at,v.next=Zt.next,v.before=!1):(v.atStop=-1,v.next=-1)}else if(v.err<=.6){let W=O.findIndex(Zt=>Zt>v.dObs+.08);W<0&&(W=O.length-1);let ne=O.reduce((Zt,$e,Te)=>Math.abs($e-v.dObs)<Math.abs(O[Zt]-v.dObs)?Te:Zt,0);v.atStop=Math.abs(O[ne]-v.dObs)<.16?ne:-1;{let Zt=v.st==="STOPPED_AT"&&v.sid?y.pat.stops.findIndex($e=>T[$e].id===v.sid):-1;Zt>=0&&Math.abs(O[Zt]-v.dObs)<.6&&(v.atStop=Zt,W<=Zt&&(W=Math.min(Zt+1,O.length-1)))}v.before=v.atStop>=0&&v.dObs<O[v.atStop]-.15,v.next=W,_=W;let Se=v.dObs;if(v.st==="STOPPED_AT"&&v.atStop>=0)Se=O[v.atStop];else if(W>0){let Zt=(y.pat.t[2*W]-y.pat.t[2*W-1])*60,$e=Zt>0?(O[W]-O[W-1])/Zt:0,Te=Qt(),Le=t.days.indexOf(Te.ymd),Ke=y.day===Le-1?1440:0,ze=ft(y,O,Te.min+Ke-y.t0-P),xn=v.dObs+$e*Math.min(U,60);ze!=null&&(xn=Math.min(xn,Math.max(v.dObs,ze))),Se=Math.max(v.dObs,Math.min(O[W]-.03,xn))}v.disp==null||Math.abs(v.disp-Se)>1.2?v.disp=Se:Se>v.disp&&(v.disp+=(Se-v.disp)*Math.min(1,p*1.5)),V=Ne(A,v.disp)}else if(v.err>2){let W=Qt(),ne=t.days.indexOf(W.ymd),Se=y.day===ne-1?1440:0,Zt=Vs(y,W.min+Se-y.t0-P);Zt&&(V=Zt.w,v.est=!0,_=Zt.next),v.atStop=-1,v.next=Zt?Zt.next:-1}else v.atStop=-1,v.next=-1}let M=v.pre?"":v.st==="STOPPED_AT"&&v.atStop>=0||v.atStop>=0&&v.still>30?"st":v.still>=90&&v.atStop<0?"via":"";o.push({tr:y,v,w:V,stop:M,p:{w:V},fam:C||"?",c:y?y.c:Y[C]||"#6b7385",dl:P,live:!0,real:!0,idx:_,age:U,cancel:L==="X"})}return o}let Ft=new Map,Ot=!1,Ct=!1,Yt="",se={st:-1},re=[],be=0,Nt=null,bt=null,me=-1,_e=!1,nn=0,Pn="";function te(o){let c=Ut>0||!!Nt,f=window.__mapHidden?1e3:Ut>0?50:c?200:250;if(o-be<f)return!1;be=o,[...Mt()].join()!==Gt&&(Kt(),Hn());{let _=$t(),M=_?_.sn.t:"";Dt.cur=_,M!==Dt.key&&(Dt.key=M,rt()),!_&&!Qt().live&&!we.at&&$l()}let p=Qt(),v=E()&&p.live,y=v?{k:t.days.indexOf(p.ymd),out:ut()}:I(p);re=y.out;let C=new ve,L=0,P=0;for(let _ of re){if(L>=di)break;hr[L*3]=_.p.w[0],hr[L*3+1]=_.p.w[1],hr[L*3+2]=H+.02;let M=null;if(_.real&&_.v.pre&&_.v.prevTr)M=Ne(ee(_.v.prevTr.pat),_.v.dPrev+.35);else if(_.real&&_.tr&&!_.v.pre&&_.v.err<=.6&&_.v.disp!=null&&!(_.v.st==="STOPPED_AT"&&_.v.atStop>=0))M=Ne(ee(_.tr.pat),_.v.disp+.35);else if(!_.real&&_.p.moving){let z=_.tr.pat.t,at=_.p.prev,W=z[2*at+1],ne=z[2*at+2],Se=ne>W?(_.rel-W)/(ne-W):1;M=Bl(_.tr.pat.segs[at],Math.min(1,kl(b(Se,0,1))+.04))}let A=_.real?!!_.stop:!_.p.moving;if(_.broke=wp(_),_.broke)$s[L]=85;else if(A)$s[L]=75;else if(M){let z=Gl(_.p.w),at=Gl(M),W=at[0]-z[0],ne=at[1]-z[1];$s[L]=Math.hypot(W,ne)>.05?Math.atan2(W,-ne):99}else $s[L]=99;C.set(_.c||_.tr.c),dr[L*3]=C.r,dr[L*3+1]=C.g,dr[L*3+2]=C.b;let O=_.tr?_.tr===bt:bt&&bt.vtid===_.v.tid;Ui[L]=O?22:r.dist<45?17:14,Hr[L]=O?3.5:2.2;let et=_.real&&_.stop==="via"||!!_.broke,nt=_.cancel||_.broke?[.86,.15,.15]:_.dl>10?[.86,.15,.15]:_.dl>5?[.92,.48,.05]:_.dl>=1?[.98,.8,.08]:[.09,.64,.29];(_.live&&_.dl>=5||O||et)&&(ys[P*3]=_.p.w[0],ys[P*3+1]=_.p.w[1],ys[P*3+2]=H+.01,Za.set(O?nt:et?[.86,.15,.15]:[.98,.45,.09],P*3),ja[P]=Ui[L]+(O?16+5*Math.sin(o/220):et?10+3*Math.sin(o/400):8),Fl[P]=O?2:3,P++),L++}if(Ni.setDrawRange(0,L),Ki.setDrawRange(0,P),["position","fill","size","bw"].forEach(_=>{Ni.attributes[_].needsUpdate=!0,Ki.attributes[_].needsUpdate=!0}),Ni.attributes.ang.needsUpdate=!0,Nt){let _=re.find(M=>M.tr===Nt);if(_){let M=0,A=innerHeight,O=d.style.display!=="none"&&!d.classList.contains("min")?d.getBoundingClientRect():null,et=x("#rc").getBoundingClientRect();innerWidth<=640&&(O&&(M=O.bottom),A=Math.min(A,et.top));let nt=M+(A-M)/2,z=nt-innerHeight/2,at=2*s.dist*Math.tan(17.5*Math.PI/180)/innerHeight;s.tx=_.p.w[0]-Math.sin(r.yaw)*z*at,s.ty=_.p.w[1]+Math.cos(r.yaw)*z*at}else E()&&Qt().live&&(Nt=null)}let U=st(Math.floor(p.min+1e-6));U!==Pn&&(Pn=U,x("#ctime").textContent=U),x("#ntr").textContent=String(re.length),x("#ntrl").textContent=v?__t(16):__t(17);{let _=dt.size<X.length?[...dt].sort(B).join(", "):"",M=x("#ccount"),A=Dt.cur?`\u23EA ${re.length}${__t(18)}${Dt.cur.sn.t} \xB7 ${Object.values(Dt.cur.sn.d).filter(O=>O>=60).length}${__t(19)}`:!p.live&&p.min<St(new Date).min-1&&!Ut?`${__t(20)}${we.hoy&&we.hoy.snaps&&we.hoy.snaps.some(O=>O.d)?`${__t(21)}${we.hoy.snaps.find(O=>O.d).t}`:__t(22)}`:v&&!Oe()?`\u{1F4F6} ${__t(1)} \xB7 ${__t(23)} ${gs(Math.round((Date.now()-G.okVP)/6e4)+" min")} <small class="nopos">\xB7 ${__t(24)}</small>`:v&&!re.some(O=>O.real)&&fo(dt).length?`\u{1F4E1} ${__t(25)}${_?` <small>\xB7 ${m(_)}</small>`:""} <small class="nopos">\xB7 ${__t(26)}</small>`:`\u{1F686} ${re.length} ${v?__t(27):__t(28)}${_?` <small>\xB7 ${m(_)}</small>`:""}${v&&G.okVP?(()=>{let O=Math.max(0,Math.round((Date.now()-G.okVP)/1e3));return` <small class="fresh${O<3?" new":""}">\u25CF ${__t(29)}${gs(O+" s")}</small>`})():""}`;M&&M._t!==A&&(M.innerHTML=A,M._t=A)}{let _=x("#p");_&&_.classList.toggle("ttf",!p.live||!!Ut)}let V=new Date;if(x("#cdate").textContent=p.live?__t(30):Ut?__t(31)+Ut:Ri?__t(32):__t(33),y.k<0?x("#src").innerHTML=`${__t(34)}${We(t.days[0])}${__t(35)}${We(t.days[t.days.length-1])}${__t(36)}`:v?x("#src").textContent=`${Oe()?__t(37):__t(38)}${gs(wh(Math.max(0,Date.now()/1e3-Math.max(...[...G.vp.values()].map(_=>_.ts),0))))}`:F()&&p.live?x("#src").innerHTML=__t(39):x("#src").innerHTML=__t(40)+(G.url?__t(41):__t(42))+__t(43),p.live){let _=Math.round(p.min),M=x("#tsl");document.activeElement!==M&&(M.value=_<240?_+1440:_)}{let _=bt?String(bt.num||bt.vtid||""):"";_!==te._sk&&(te._sk=_,ye(!0))}return ye(),!te._sp&&(v||!p.live||F()||!G.url)&&(te._sp=1,window.__splashOff&&window.__splashOff()),o-nn>3e3&&(bt||me>=0||_e||Ct||Yt)&&(nn=o,Ie()),rt(),!0}let Nn=-1,Fe=(()=>{try{return localStorage.getItem("rod_mun")==="1"}catch{return!1}})(),Gn=[],Cn=document.createElement("button");Cn.type="button",Cn.id="mbtn",Cn.title=__t(44),Cn.innerHTML=__t(45),Cn.onclick=()=>{Fe=!Fe;try{localStorage.setItem("rod_mun",Fe?"1":"")}catch{}Cn.classList.toggle("on",Fe),a(),Oi()},Cn.classList.toggle("on",Fe),document.body.appendChild(Cn);let Qi=N.slice().sort((o,c)=>c.pop-o.pop);function Hs(o){if(o._a)return o._a;let c=null,f=0;for(let p of o.rings||[]){let v=p[0];if(!v)continue;let y=0,C=0,L=0;for(let P=0,U=v.length;P<U;P+=2){let V=v[P],_=v[P+1],M=v[(P+2)%U],A=v[(P+3)%U],O=V*A-M*_;y+=O,C+=(V+M)*O,L+=(_+A)*O}Math.abs(y)>f&&(f=Math.abs(y),c=[C/(3*y),L/(3*y)])}return o._a=c?[(c[0]-u)*l,(c[1]-h)*l]:[o.cx,o.cy]}let sn=o=>o>=1e5?1:o>=2e4?2:o>=5e3?3:4,_n=[0,7.6,6.7,6,5.4],ts=[0,17,15,13,12],un=o=>o.replace(/^(.*), (el|la|les|els|los|las)$/i,"$2 $1").replace(/^(.*), l'$/i,"l'$1");function Oi(){let o=s.tilt<.06&&r.tilt<.08;Cn.classList.toggle("show",o);let c=0;if(Fe&&o){let f=[...document.querySelectorAll(".plab, .slab")].filter(y=>y.offsetParent!==null||y.style.display==="block").map(y=>{let C=y.getBoundingClientRect();return[C.left-2,C.top-2,C.right+2,C.bottom+2]}).filter(y=>y[2]>y[0]),p=r.dist,v=p>160?5e4:p>130?2e4:p>105?8e3:p>80?3e3:p>62?800:0;for(let y of Qi){let C=sn(y.pop);if(y.pop<v)break;let L=Hs(y);if(wn.set(L[0],L[1],H).project(n),Math.abs(wn.x)>1.02||Math.abs(wn.y)>1.02)continue;let P=(wn.x*.5+.5)*innerWidth,U=(-wn.y*.5+.5)*innerHeight,V=un(y.name),_=V.length*_n[C]+8,M=ts[C],A=[P-_/2,U-M/2,P+_/2,U+M/2];if(f.some(et=>A[0]<et[2]&&et[0]<A[2]&&A[1]<et[3]&&et[1]<A[3]))continue;f.push(A);let O=Gn[c]||(Gn[c]=Object.assign(document.createElement("div"),{className:"mlab"}));O.isConnected||document.body.appendChild(O),O._n!==V&&(O.textContent=V,O._n=V),O._t!==C&&(O.className="mlab t"+C,O._t=C),O.style.transform=`translate(${Math.round(P)}px,${Math.round(U)}px) translate(-50%,-50%)`,O.style.display="block",c++}}for(;c<Gn.length;c++)Gn[c].style.display="none"}let we={at:0,hoy:null,ayer:null,err:""},Qa="https://raw.githubusercontent.com/elMonoAmelio/catalunya-survival/stats/";function $l(){Date.now()-we.at<5*6e4||(we.at=Date.now(),Promise.all(["hoy","ayer","hist","dias30"].map(o=>fetch(Qa+o+".json",{cache:"no-store"}).then(c=>c.ok?c.json():null).catch(()=>null)).map((o,c)=>c===3?o.then(f=>f||fetch(Qa+"dias.json",{cache:"no-store"}).then(p=>p.ok?p.json():null).catch(()=>null)):o)).then(([o,c,f,p])=>{we.hoy=o,we.ayer=c,we.hist=f,we.dias=p,we.tr=null,we.err=o?"":__t(46),(Ct||Yt)&&(d._h="",Ie()),ye(!0)}))}function s_(o){let c={};for(let p of o&&o.snaps||[])for(let v of p.r||[]){let y=/^\d+[A-Z](\d+)/.exec(v);y&&(c[y[1]]=c[y[1]]||[]).push(Math.max(0,p.d&&p.d[v]||0)/60)}let f={};for(let p in c){let v=c[p].sort((y,C)=>y-C);f[p]=Math.round(v[v.length>>1])}return f}function zl(o){if(!we.tr){let f=new Map;for(let p of we.hist&&we.hist.days||[])f.set(p.day,p.tr);for(let p of[we.ayer,we.hoy])if(p&&p.day&&!f.has(p.day)){let v=s_(p);Object.keys(v).length&&f.set(p.day,v)}we.tr=f}if(o==="")return null;let c=[...we.tr.values()].map(f=>f[String(o)]).filter(f=>f!=null);return c.length?{n:c.length,late:c.filter(f=>f>=5).length,avg:c.reduce((f,p)=>f+p,0)/c.length}:null}let mp=o=>new Date(+o.slice(0,4),+o.slice(4,6)-1,+o.slice(6,8)).getDay(),r_=o=>{let c=-1,f=9,p=mp(o),v=y=>y===0||y===6?y:1;return t.days.forEach((y,C)=>{let L=mp(y),P=y===o?0:L===p?1:v(L)===v(p)?2:9;P<f&&(f=P,c=C)}),f<9?c:-1},gp=()=>{let o=new Map;for(let c of we.hist&&we.hist.days||[])c.cx&&o.set(c.day,new Set(c.cx.map(String)));return o},a_=()=>{let o=(we.hist&&we.hist.days||[]).find(c=>c.cx);return o?o.day:null};function _p(o){zl("");let c=gp(),f=0,p=0,v=0,y=0;for(let[C,L]of we.tr||[]){let P=r_(C.replace(/-/g,""));if(P<0)continue;let U=Wr(o,P);if(!U)continue;let V=String(U.num);if(c.get(C)&&c.get(C).has(V)){y++,f++;continue}let _=L[V];_!=null&&(f++,v+=_,_>=5&&p++)}return{n:f,late:p,sum:v,nc:y}}let Vl=null,o_=o=>{if(!Vl){Vl=new Map;for(let c of it)for(let f of c||[])Vl.set(String(f.num),f.fam)}return Vl.get(String(o))};function xp(o){let c=(we.dias&&we.dias.days||[]).slice(-30);if(!c.length)return null;let f=new Map;for(let P of c)for(let[U,V]of Object.entries(P.lines||{})){let _=f.get(U)||{n:0,ok:0,s:0,max:0,days:0};_.n+=V.n,_.ok+=V.ok,_.s+=V.avg*V.n,_.max=Math.max(_.max,V.max||0),_.days++,f.set(U,_)}let p=f.get(o);if(!p||p.n<30)return null;let v=[...f.entries()].filter(([P,U])=>Y[P]&&U.n>=30).sort((P,U)=>P[1].ok/P[1].n-U[1].ok/U[1].n),y=v.findIndex(([P])=>P===o),C=gp(),L=0;for(let P of C.values())for(let U of P)o_(U)===o&&L++;return{pct:p.ok/p.n*100,avg:p.s/p.n,max:p.max,days:p.days,pos:y+1,of:v.length,nc:L,since:a_()}}let l_=o=>o?`${+o.slice(8,10)}/${+o.slice(5,7)}`:"",$h=o=>o>=60?`${Math.floor(o/60)} h ${String(Math.round(o%60)).padStart(2,"0")} min`:`${Math.round(o)} min`,Ss=o=>o>=90?"g":o>=80?"y":o>=65?"w":"b",Ms={g:"#16a34a",y:"#eab308",w:"#ea7a0c",b:"#dc2626"},vp=o=>o>10?Ms.b:o>5?Ms.w:o>=1?Ms.y:Ms.g,bs=o=>(o>=.05?"+":"")+(Math.round(o*10)/10).toString().replace(".",",")+" min";function to(o,c,f){return`<div class="sbars">${o.map(p=>`<div class="sbar" title="${m(p.tip||"")}"><span class="sl">${p.lab}</span><span class="st"><i style="width:${Math.max(2,Math.round(p.w*100))}%;background:${p.c}"></i></span><b class="sv" style="color:${p.c===Ms.y?"var(--svy,#a16207)":p.c===Ms.w?"var(--svw,#c2410c)":p.c}">${p.val}</b></div>`).join("")}</div>`}function c_(o){if(o=(o||[]).filter(z=>z.n>=10),!o||o.length<2){let z=o&&o[0];return z?`${__t(47)}${z.t}: ${Math.round(z.ok/z.n*100)}${__t(48)}${z.n}${__t(49)}`:__t(50)}let c=z=>{let[at,W]=z.t.split(":").map(Number);return at*60+W},f=c(o[0]),p=Math.max(f+60,c(o[o.length-1])),v=300,y=112,C=24,L=z=>C+(z-f)*(v-C-8)/(p-f),P=z=>8+(100-z)/100*(y-26),U=z=>z.n?z.ok/z.n*100:100,V=o.map(z=>[L(c(z)),P(U(z)),z]),_=z=>z[0].toFixed(1)+","+z[1].toFixed(1),M=[],A=[];V.forEach((z,at)=>{at&&c(z[2])-c(V[at-1][2])>45&&(M.push(A),A=[]),A.push(z)}),M.push(A);let O=V[V.length-1],et=[];for(let z=Math.ceil(f/180)*3;z*60<p;z+=3)z*60>f+20&&et.push(z);let nt=Math.round(o.reduce((z,at)=>z+at.ok,0)/Math.max(1,o.reduce((z,at)=>z+at.n,0))*100);return`<svg class="schart" viewBox="0 0 ${v} ${y}${__t(51)}${[100,75,50,25].map(z=>`<line x1="${C}" x2="${v-4}" y1="${P(z)}" y2="${P(z)}" class="gl"/><text x="2" y="${P(z)+3}" class="ax">${z}%</text>`).join("")}
      <line x1="${C}" x2="${v-4}" y1="${P(nt)}" y2="${P(nt)}" class="avg"/>
      ${M.filter(z=>z.length).map(z=>`<polygon points="${_([z[0][0],P(0)])} ${z.map(_).join(" ")} ${_([z[z.length-1][0],P(0)])}" class="ar"/><polyline points="${z.map(_).join(" ")}" class="ln"/>`).join("")}
      ${V.map(([z,at,W])=>`<circle cx="${z.toFixed(1)}" cy="${at.toFixed(1)}" r="6" class="hit"><title>${W.t} \xB7 ${Math.round(U(W))}${__t(52)}${W.n}${__t(53)}${W.d5}${__t(54)}${bs(W.avg)}${W.nd?` \xB7 ${W.nd}${__t(55)}`:""}</title></circle>`).join("")}
      <circle cx="${O[0].toFixed(1)}" cy="${O[1].toFixed(1)}" r="3.5" class="pt"/><text x="${Math.min(O[0],v-30).toFixed(1)}" y="${(O[1]-7).toFixed(1)}" class="lv" text-anchor="middle">${Math.round(U(O[2]))}%</text>
      ${et.map(z=>`<text x="${L(z*60).toFixed(1)}" y="${y-4}" class="ax" text-anchor="middle">${String(z).padStart(2,"0")}h</text>`).join("")}
      <text x="${C}" y="${y-4}" class="ax">${o[0].t}</text></svg><small class="snote">${__t(56)} (${nt}%)</small>`}function u_(){$l();let o=Qt(),c=re.filter(L=>L.real&&E()&&o.live),f=c.filter(L=>G.delays.has(L.v.tid)),p=f.length,v=c.length-p,y=`${__t(57)}`;if(p){let L=f.filter(at=>at.dl<3).length,P=f.filter(at=>at.dl>=5).length,U=f.filter(at=>at.stop==="via").length,V=Math.round(L/p*100);y+=`${__t(58)}${p}${__t(59)}${v?` \xB7 ${v}${__t(64)}`:""}</small><div class="kpis">
        <div class="kpi ${Ss(V)}"><b>${V}${__t(60)}${Ss(100-P/p*100*2)}" title="${Math.round(P/p*100)}${__t(61)}${P}${__t(62)}${U===0?"g":U<=2?"w":"b"}"><b>${U}${__t(63)}`;let _=new Map;f.forEach(at=>{let W=at.fam,ne=_.get(W)||{n:0,ok:0,sum:0};ne.n++,ne.ok+=at.dl<3,ne.sum+=Math.max(0,at.dl),_.set(W,ne)});let M=[..._].filter(([at])=>Y[at]).sort((at,W)=>at[1].ok/at[1].n-W[1].ok/W[1].n||W[1].sum/W[1].n-at[1].sum/at[1].n),A=M.filter(([,at])=>at.ok<at.n),O=M.filter(([,at])=>at.ok===at.n);y+=`${__t(65)}`+(A.length?"":__t(66))+to(A.map(([at,W])=>({lab:En(at),w:W.ok/W.n,c:Ms[Ss(W.ok/W.n*100)],val:`${Math.round(W.ok/W.n*100)}% <small>${bs(W.sum/W.n)}</small>`,tip:`${at}: ${W.ok}${__t(67)}${W.n}${__t(68)}${bs(W.sum/W.n)}`})))+(O.length?`${__t(69)}${O.map(([at])=>En(at)).join(" ")}</p>`:"");let et=new Map;f.forEach(at=>{if(!at.tr||at.v.next==null||at.v.next<0||at.v.pre)return;let W=at.tr.pat.stops[at.v.next],ne=et.get(W)||{n:0,sum:0};ne.n++,ne.sum+=Math.max(0,at.dl),et.set(W,ne)});let nt=[...et].filter(([,at])=>at.sum/at.n>=1).sort((at,W)=>W[1].sum/W[1].n-at[1].sum/at[1].n).slice(0,8),z=nt.length?nt[0][1].sum/nt[0][1].n:1;y+=`${__t(70)}`+(nt.length?to(nt.map(([at,W])=>({lab:`<span class="sn" data-gs="${at}">${m(T[at].n)}</span>`,w:W.sum/W.n/z,c:vp(W.sum/W.n),val:`${bs(W.sum/W.n)} <small>${W.n} ${W.n===1?"tren":__t(71)}</small>`,tip:`${T[at].n}: ${W.n}${__t(72)}${bs(W.sum/W.n)}${__t(73)}`}))):__t(74))}else y+=`${__t(75)}`;let C=we.hoy;y+=`<button type="button" class="hmore" data-cols>${mn.on?__t(76):__t(77)}</button>`;{po("");let L=[...Bi.m].filter(([P,U])=>Y[P]&&U[0]>=3).map(([P,U])=>[P,U[1]/U[0]]).sort((P,U)=>P[1]-U[1]);L.length&&!E()?y+=`<h4>${__t(78)}</h4><small class="snote">${__t(79)}</small>`:L.length&&(y+=`${__t(80)}`+to(L.slice(0,8).map(([P,U])=>({lab:En(P),w:U,c:Ms[Ss(U*100)],val:`${Math.round(U*100)}%`,tip:`${P}: ${Math.round(U*100)}${__t(81)}`}))))}{let L=(A,O)=>{let et=(A&&A.snaps||[]).filter(at=>at.n&&(!O||at.t<=O)),nt=et.reduce((at,W)=>at+W.n,0),z=et.reduce((at,W)=>at+W.ok,0);return nt?z/nt*100:null},P=(we.hoy&&we.hoy.snaps||[]).filter(A=>A.n).map(A=>A.t).pop(),U=L(we.hoy),V=L(we.ayer,P),_=U!=null?Math.round(U):null,M=V!=null?Math.round(V):null;U!=null&&(y+=`${__t(82)}${Ss(U)}">${Math.round(U)}${__t(83)}${V!=null?`<span>${P?__t(84):__t(85)} <b class="${Ss(V)}">${M} %</b></span><span>${_>M?__t(86):_<M?__t(87):__t(88)}</span>`:""}</div>`)}if(y+=`${__t(89)}`,C&&C.snaps){y+=c_(C.snaps);let L=Object.entries(C.st||{}).map(([V,_])=>[kt.get(V),_]).filter(([V,_])=>V!=null&&_.n>=3).map(([V,_])=>[V,_.sum/_.n/60,_]).filter(V=>V[1]>=1).sort((V,_)=>_[1]-V[1]).slice(0,8);if(L.length){let V=L[0][1];y+=`${__t(90)}`+to(L.map(([_,M,A])=>({lab:`<span class="sn" data-gs="${_}">${m(T[_].n)}</span>`,w:M/V,c:vp(M),val:`${bs(M)}${__t(91)}${Math.round(A.max/60)}</small>`,tip:`${T[_].n}: ${A.n}${__t(92)}${A.d5}${__t(93)}${Math.round(A.max/60)} min`})))}let P=Object.entries(C.lines||{}).filter(([V,_])=>Y[V]&&_.n>=3).sort((V,_)=>V[1].ok/V[1].n-_[1].ok/_[1].n);P.length&&(y+=`${__t(94)}`+to(P.map(([V,_])=>({lab:En(V),w:_.ok/_.n,c:Ms[Ss(_.ok/_.n*100)],val:`${Math.round(_.ok/_.n*100)}% <small>${bs(_.sum/_.n/60)}</small>`,tip:`${V}${__t(95)}${Math.round(_.ok/_.n*100)}${__t(96)}${Math.round(_.max/60)} min`}))));let U=C.upd?(Date.now()-Date.parse(C.upd))/6e4:0;y+=`<small class="snote">${U>40?`${__t(98)}${gs(U<90?Math.round(U)+" min":U<2160?Math.round(U/60)+" h":Math.round(U/1440)+(window.__L==="en"?" days":window.__L==="ca"?" dies":" d\xEDas"))}${__t(99)}`:""}${__t(97)}${m((C.upd||"").slice(11,16))} \xB7 ${(C.note||"").includes("Solo cuentan")?__t(100):__t(101)}</small>`}else y+=`<p class="snote">${we.at?__t(102):__t(103)}</p>`;return y+"</div>"}function h_(o){let c=Qt(),f=re.filter(M=>(M.fam||M.tr&&M.tr.fam)===o),p=f.filter(M=>M.real),v=f.length,y=f.filter(M=>M.dl>=5).length,C=f.filter(M=>M.dl<3).length,L=f.filter(M=>M.stop==="via"||M.broke).length,P=G.alerts.filter(M=>M.fams.has(o)),U=M=>{let A=M.tr;if(!A)return"";let O=M.v;if(M.real&&O){let nt=O.next>=0?T[A.pat.stops[O.next]].n:"";return O.atStop>=0?`${__t(104)}${T[A.pat.stops[O.atStop]].n}`:nt?`${__t(105)}${nt}`:""}let et=M.p;return et&&et.next!=null&&et.next>=0?`${__t(105)}${T[A.pat.stops[et.next]].n}`:""},V=f.slice().sort((M,A)=>A.dl-M.dl).slice(0,40).map(M=>{let A=M.tr;return`<li class="go${so({num:A?A.num:M.v.num,tid:A?A.tid:M.v.tid})?" sel":""}" data-gt="${m(A?A.num:M.v.num)}|${m(M.real?M.v.tid:A?A.tid:"")}"><b>${m(A?A.num:M.v.num)}</b><span>${A?Ci(T[A.pat.stops[A.pat.stops.length-1]].n,o):""} <small>${m(U(M))}</small></span>${M.dl>=1?`<em class="dl ${Fi(M.dl)}">+${Math.round(M.dl)}</em>`:__t(106)}</li>`}).join(""),_=po(o);return`<div class="tc sts" style="--c:${Y[o]||"#1d2330"}"><button class="x" data-cx>\xD7</button><h3>${En(o)}${__t(107)}${c.live?`${__t(111)}${v}${__t(112)}${p.length<v?` (${p.length}${__t(113)}`:""}`:`${__t(114)}${st(c.min)}`}</small>
      <div class="kpis"><div class="kpi ${v?Ss(C/v*100):""}"><b>${v?Math.round(C/v*100)+"%":"\u2014"}${__t(108)}${y?y/Math.max(1,v)>.2?"b":"w":"g"}"><b>${y}${__t(109)}${L?"b":"g"}"><b>${L}${__t(110)}${P.length?p_(P):__t(115)}${_<.7?`${__t(116)}${Math.round(_*100)}${__t(117)}`:""}
      <small style="margin-top:6px">Trenes de m\xE1s a menos retraso \xB7 toca uno para verlo</small><ol class="${Hl.v?"":"lshort"}">${V||__t(118)}</ol>${f.length>6?`<button type="button" class="hmore" data-lmore>${Hl.v?__t(119):`\u25BE ${__t(120)} ${Math.min(40,f.length)} ${__t(71)}`}</button>`:""}
      <div class="rtb"><button type="button" data-share>\u{1F4E4} Compartir estado</button></div>${f_(o)}</div>`}let Hl={v:!1};function d_(o){let c=dm(o,30);if(!c.length)return`<h4>${__t(121)}</h4><p class="snote">${__t(122)}</p>`;let f=c.filter(L=>L.dl!=null),p=f.filter(L=>L.dl>=5).length,v=f.reduce((L,P)=>L+P.dl,0),y=L=>{let P=kt.get(L);return P!=null?T[P].n.replace(/^Barcelona[ -]+(?=\S)/,""):""},C=c.slice().sort((L,P)=>P.t0-L.t0).slice(0,5).map(L=>`<li><b>${+L.d.slice(6,8)}/${+L.d.slice(4,6)}</b><span>${L.ad!=null?st(L.ad)+" \xB7 ":""}${m(y(L.a))}${L.a?" \u2192 ":""}${m(y(L.b))}<small>${L.dl==null?__t(123):L.dl>=1?`${__t(124)} <b>+${L.dl} min</b>`:__t(125)} \xB7 tren ${m(L.num)}</small></span><button type="button" class="tripx" data-tripx="${m(L.k)}" title="${__t(126)}" aria-label="${__t(126)}">\u2715</button></li>`).join("");return`<h4>${__t(121)} \xB7 ${c.length}</h4>
      <div class="kpis"><div class="kpi nx"><b>${c.length}</b><span>${c.length===1?__t(127):__t(128)}<br>${__t(129)}</span></div><div class="kpi ${f.length?p/f.length>=.5?"b":p/f.length>=.25?"w":"g":"nx"}"><b>${p}</b><span>${__t(130)}<br>(5 min ${__t(131)})</span></div><div class="kpi ${v>=60?"b":v>=20?"w":"nx"}"><b>${v>=60?`${Math.floor(v/60)} h ${String(Math.round(v%60)).padStart(2,"0")}`:`${Math.round(v)} min`}</b><span>${__t(132)}<br>${__t(133)}</span></div></div>
      <ol class="l30f">${C}</ol>`}function f_(o){let c=xp(o),f=pi.filter(P=>P.fam===o);if(!c)return`<h4>${__t(134)}</h4><p class="snote">${we.at?__t(135):__t(103)}</p>`;let p=c.since&&c.since>new Date(Date.now()-29*864e5).toISOString().slice(0,10)?`${__t(136)} ${l_(c.since)}`:`${__t(129)}`,v=Math.min(30,c.days),y=`${__t(137)} ${v} ${__t(138)}`,C=c.of>1?(c.pos<=c.of/2?`${En(o)} ${__t(139)} <b>${c.pos}.\xAA ${__t(140)}</b> ${__t(141)} ${c.of}`:`${En(o)} ${__t(139)} <b>${c.of-c.pos+1}.\xAA ${__t(142)}</b> ${__t(141)} ${c.of}`)+" \xB7 ":"",L=f.map(P=>{let U=_p(P),V=kt.get(P.sid),_=P.dest&&kt.get(P.dest);return`<li><b>${m(P.t)}</b><span>${m(V!=null?T[V].n:"")}${_!=null?" \u2192 "+m(T[_].n):""}<small>${U.n?`${__t(143)} <b>${U.late} ${__t(141)} ${U.n} ${__t(138)}</b>${U.nc?` \xB7 <b>${U.nc} ${U.nc===1?__t(144):__t(145)}</b>`:""} \xB7 ${__t(146)} \u2248 <b>${$h(U.sum)}</b>`:__t(147)}</small></span></li>`}).join("");return`<h4>${y}</h4>
      <div class="kpis"><div class="kpi ${Ss(c.pct)}"><b>${Math.round(c.pct)}%</b><span>${__t(125)}<br>(\u22123 min)</span></div><div class="kpi ${c.avg>=4?"b":c.avg>=2.5?"w":c.avg>=1.5?"y":"g"}"><b>${bs(c.avg).replace(" min","")}</b><span>${__t(148)}<br>${__t(149)}</span></div>${c.since?`<div class="kpi ${c.nc?c.nc>=10?"b":"w":"g"}"><b>${c.nc}</b><span>${c.nc===1?__t(150):__t(151)}<br>${p}</span></div>`:`<div class="kpi nx"><b>\u2014</b><span>${__t(152)}<br>${__t(153)}</span></div>`}</div>
      <p class="snote">${C}${__t(154)} +${c.max} min \xB7 ${c.days} ${__t(155)}</p>
      ${d_(o)}
      <h4>${__t(156)}</h4>${f.length?`<ol class="l30f">${L}</ol>`:`<p class="snote">${__t(157)}</p>`}
      <div class="rtb"><button type="button" data-share30>\u{1F4E4} ${__t(158)}</button></div>
      <small class="snote">${__t(159)}</small>`}let p_=o=>`<div class="al">${o.slice(0,3).map(c=>`<p>\u26A0\uFE0F ${co(c)} ${m(c.txt)} <small>${uo(c)}</small></p>`).join("")}</div>`,mn={on:!1,mesh:null};function yp(){let o=we.hoy,c=[];if(o&&o.st)for(let[f,p]of Object.entries(o.st)){let v=kt.get(f);v!=null&&p.n>=2&&c.push([v,p.sum/p.n/60,p.n])}if(!c.length){let f=new Map;re.forEach(p=>{if(!p.real||!p.tr||p.v.next==null||p.v.next<0||p.v.pre||!G.delays.has(p.v.tid))return;let v=p.tr.pat.stops[p.v.next],y=f.get(v)||[0,0];y[0]+=Math.max(0,p.dl),y[1]++,f.set(v,y)}),f.forEach((p,v)=>c.push([v,p[0]/p[1],p[1]]))}return c}let Sp=()=>Math.min(1,Math.max(.22,r.dist/110));function m_(){if(!mn.mesh||!mn.d)return;let o=Sp();if(Math.abs(o-mn.r)<.04)return;mn.r=o;let c=new Je;mn.d.forEach(([f,p],v)=>{c.makeScale(o,o,.3+Math.min(p,40)*.3),c.setPosition(T[f].w[0],T[f].w[1],H),mn.mesh.setMatrixAt(v,c)}),mn.mesh.instanceMatrix.needsUpdate=!0,a()}function g_(){if(mn.mesh&&(e.remove(mn.mesh),mn.mesh.geometry.dispose(),mn.mesh.material.dispose(),mn.mesh=null),!mn.on){a();return}let o=yp();if(!o.length){Ve(__t(160)),mn.on=!1;return}let c=new Zo(.32,.32,1,16);c.rotateX(Math.PI/2),c.translate(0,0,.5);let f=new Ar({fog:!1}),p=new Xo(c,f,o.length),v=new Je,y=new ve;mn.d=o,mn.r=Sp(),o.forEach(([C,L],P)=>{let U=.3+Math.min(L,40)*.3;v.makeScale(mn.r,mn.r,U),v.setPosition(T[C].w[0],T[C].w[1],H),p.setMatrixAt(P,v),y.set(L>10?"#dc2626":L>5?"#ea7a0c":L>=1?"#eab308":"#16a34a"),p.setColorAt(P,y)}),p.renderOrder=25,p.frustumCulled=!1,e.add(p),mn.mesh=p,s.tilt<.5&&(s.tilt=.85),a()}let Gr=document.createElement("button");Gr.type="button",Gr.id="sbtn",Gr.title=__t(161),Gr.innerHTML=__t(162),Gr.onclick=()=>{Ct=!Ct,Ct&&(Ot=_e=!1,we.at=0),d._h="",Ie(),a()},document.body.appendChild(Gr);function __(){r.dist<45!=Nn<45&&(Nn=r.dist,Hn()),m_(),x_(),Oi()}let ws=[],wn=new Z;function x_(){let o=0;if(mn.on){let f=yp().sort((v,y)=>y[1]-v[1]),p=[];for(let[v,y]of f){if(o>=30)break;if(wn.set(T[v].w[0],T[v].w[1],H).project(n),wn.z>1||Math.abs(wn.x)>1||Math.abs(wn.y)>1)continue;let C=(wn.x*.5+.5)*innerWidth,L=(-wn.y*.5+.5)*innerHeight;if(p.some(([U,V])=>Math.abs(U-C)<90&&Math.abs(V-L)<18))continue;p.push([C,L]);let P=ws[o]||(ws[o]=Object.assign(document.createElement("div"),{className:"slab"}));P.isConnected||document.body.appendChild(P),P.textContent=T[v].n+" +"+Math.round(y)+"\u2032",P.dataset.i=v,P.style.display="block",P.style.transform=`translate(${Math.round(C+8)}px,${Math.round(L-8)}px)`,o++}for(;o<ws.length;o++)ws[o].style.display="none";return}if(r.dist<30){let f=[];for(let p=0;p<ie;p++)Vn[p]<4||(wn.set(T[p].w[0],T[p].w[1],H).project(n),!(wn.z>1||Math.abs(wn.x)>1.05||Math.abs(wn.y)>1.05)&&f.push([p,(wn.x*.5+.5)*innerWidth,(-wn.y*.5+.5)*innerHeight]));if(f.length<=70)for(let[p,v,y]of f){let C=ws[o]||(ws[o]=Object.assign(document.createElement("div"),{className:"slab"}));C.isConnected||document.body.appendChild(C),C.textContent=T[p].n,C.dataset.i=p,C.style.display="block",C.style.transform=`translate(${Math.round(v+8)}px,${Math.round(y-7)}px)`,o++}}for(;o<ws.length;o++)ws[o].style.display="none"}function Gl(o){return wn.set(o[0],o[1],H).project(n),[(wn.x*.5+.5)*innerWidth,(-wn.y*.5+.5)*innerHeight,wn.z]}function Mp(o,c,f,p){let v=null,y=f*f;for(let C of re){let[L,P,U]=Gl(C.p.w);if(U>1)continue;let V=(L-o)**2+(P-c)**2;V<y&&(y=V,v={a:C})}if(v)return v;y=p*p;for(let C=0;C<ie;C++){if(!Vn[C])continue;let[L,P,U]=Gl(T[C].w);if(U>1)continue;let V=(L-o)**2+(P-c)**2;V<y&&(y=V,v={s:C})}return v}let fr=!1;window.__rodHide=()=>{fr=!0},document.addEventListener("click",o=>{fr&&!o.target.closest("#mcs, canvas")&&(fr=!1)},!0),window.__rodTap=(o,c)=>{let f=null,p=1e9;for(let y of ws){if(y.style.display==="none")continue;let C=y.getBoundingClientRect();if(o>=C.left-4&&o<=C.right+4&&c>=C.top-4&&c<=C.bottom+4){let L=Math.abs(c-(C.top+C.bottom)/2)*4+(o-C.left);L<p&&(p=L,f=y)}}if(f)return window.__rodPickStation(+f.dataset.i),!0;let v=Mp(o,c,24,18);return v&&(v.a||v.s!=null)&&(fr=!1),v&&(v.a||v.s!=null)&&(se.st=-1),v&&v.a?(Ot=!1,_e=!1,Ct=!1,bt=v.a.tr||{vtid:v.a.v.tid},me=-1,Nt=null,Hn(),Ie(),be=0,a(),!0):v&&v.s!=null?(Ot=!1,_e=!1,Ct=!1,me=v.s,bt=null,Nt=null,Hn(),Ie(),a(),!0):!1},window.__rodHover=(o,c)=>{let f=Mp(o,c,14,10);if(f&&f.a){let p=f.a,v=p.tr?T[p.tr.pat.stops[p.tr.pat.stops.length-1]].n:"";return`<b><span style="color:${p.c}">\u25A0</span> ${m(p.fam||p.tr&&p.tr.fam||"?")}${__t(163)}${m(p.tr?p.tr.num:p.v.num)}</b><small>${v?__t(105)+m(v):""}${p.real?(p.dl>=1?` \xB7 <b style="color:#c2410c">+${Math.round(p.dl)} min</b>`:__t(164))+__t(165):__t(166)}</small>`}return f&&f.s!=null?`<b>${m(T[f.s].n)}</b><small>${[...T[f.s].fams].sort(B).join(" \xB7 ")}</small>`:null},window.__rodPickStation=o=>{se.st=-1,fr=!1,Ot=_e=Ct=!1,bt=null,Nt=null,me=o,Hn(),d._h="",Ie(),a()};{let o=x("#rc"),c=()=>{let f=o.getBoundingClientRect().top;document.documentElement.style.setProperty("--mcsmax",Math.max(160,f-64-10)+"px")};try{new ResizeObserver(c).observe(o)}catch{}addEventListener("resize",c),setTimeout(c,300)}if("serviceWorker"in navigator&&location.protocol==="https:"){let o=!1,c=!!navigator.serviceWorker.controller;navigator.serviceWorker.addEventListener("controllerchange",()=>{if(!c||o)return;let f=((x("#ver")||{}).textContent||"").match(/\d+\.\d+/);fetch("./sw.js",{cache:"no-store"}).then(p=>p.text()).then(p=>{let v=(p.match(/VERSION = 'cs-(\d+\.\d+)'/)||[])[1];v&&f&&v!==f[0]&&!o&&(o=!0,location.reload())}).catch(()=>{})}),navigator.serviceWorker.register("./sw.js").then(f=>{f.update().catch(()=>{}),document.addEventListener("visibilitychange",()=>{document.hidden||f.update().catch(()=>{})})}).catch(()=>{})}setTimeout(()=>{try{$l()}catch{}},2500),setInterval(()=>{try{we.at=0,$l()}catch{}},15*6e4);let fi={mode:(()=>{try{return localStorage.getItem("rod_theme")||"auto"}catch{return"auto"}})()},eo=matchMedia("(prefers-color-scheme: dark)");function Wl(){let o=fi.mode==="dark"||fi.mode==="auto"&&eo.matches;document.documentElement.classList.toggle("dark",o);for(let f=0;f<ie;f++)je.set(o?[.06,.08,.11]:[1,1,1],f*3);oe.attributes.fill.needsUpdate=!0,Ul.uniforms.border.value.set(o?"#e7ebf3":"#1d2330"),window.__mapTheme&&window.__mapTheme(o),pr.textContent=fi.mode==="auto"?o?"\u{1F319}":"\u2600\uFE0F":fi.mode==="dark"?"\u{1F319}":"\u2600\uFE0F",pr.title=__t(167)+{auto:__t(168),dark:__t(169),light:"desactivado"}[fi.mode];let c=document.querySelector("meta[name=theme-color]");c&&(c.content=o?"#0d1119":"#eef1f5"),a()}let pr=document.createElement("button");pr.type="button",pr.id="tbtn",pr.onclick=()=>{fi.mode=fi.mode==="auto"?eo.matches?"light":"dark":fi.mode==="dark"?"light":"dark",fi.mode==="dark"===eo.matches&&(fi.mode="auto");try{localStorage.setItem("rod_theme",fi.mode)}catch{}Wl(),Ve(pr.title)},document.body.appendChild(pr);{let o=document.createElement("a");o.id="wabtn",o.href="https://www.whatsapp.com/channel/0029Vav4hGTId7nPenKMuo2C",o.target="_blank",o.rel="noopener",o.title=__t(170),o.innerHTML=__t(171),document.body.appendChild(o)}eo.addEventListener&&eo.addEventListener("change",Wl),Wl(),window.__rodTick=te,window.__rodFrame=__,window.__rodResize=()=>{Jt.resolution.set(innerWidth,innerHeight),Ht.resolution.set(innerWidth,innerHeight)},window.__rodResize();let Ai={st:-1,f:new Set},bp=o=>{let c=[...T[o].fams].sort(B);return`<div class="sfc">${c.length>1?`<button type="button" data-sf="" class="${Ai.f.size?"":"on"}${__t(172)}`:""}${c.map(f=>`<button type="button" data-sf="${m(f)}" class="ln ${Ai.f.size&&!Ai.f.has(f)?"off":""}${dt.has(f)?"":" hid"}" style="--c:${Y[f]}">${m(f)}</button>`).join("")}</div>${c.some(f=>!dt.has(f))?__t(173):""}`},v_=o=>{let c=(o||"#6b7385").replace("#",""),f=parseInt(c.slice(0,2),16),p=parseInt(c.slice(2,4),16),v=parseInt(c.slice(4,6),16);return(.299*f+.587*p+.114*v)/255>.62?"#1d2330":"#fff"},Ci=(o,c)=>{let f=Y[c]||"#6b7385";return`<span class="dst" style="background:${f};color:${v_(f)}" title="${m(c||"")}">${m(o)}</span>`},Xl=o=>{let c=T[o]&&T[o].id;return Ye.st.includes(c)?"\u{1F3E0} ":ke.st.includes(c)?"\u{1F4BC} ":""},Fi=o=>o>10?"d-hi":o>5?"d-md":"d-lo",y_=/aver[ií]|incid[eè]ncia t[eè]cnica|incidencia t[eé]cnica|problema t[eè]cnic|t[eè]cnic[oa] del propi/i,no={ref:null,m:new Map};function zh(o){if(no.ref!==G.alerts){no.ref=G.alerts,no.m=new Map;for(let c of G.alerts){if(c.src!=="Rodalies")continue;let f=c.txt.match(/(?:a causa d[e']|per causa d[e']|debido a|degut a|due to|because of|caused by)\s+([^.]{4,140})/i);for(let p of(c.es||c.txt).matchAll(/\b[Tt]ren\s+(\d{4,6})\b/g))no.m.set(p[1],{why:f?f[1].trim().replace(/\s+/g," "):"",txt:c.txt,when:c.when,cx:/no circula|no circular[àa]|suprimi|anul[·.]?la|cancel[·.]?la|anulad|cancelad/i.test(c.es||c.txt)})}}return no.m.get(String(o))||null}let io={ref:null,m:new Map};function wp(o){let c=String(o.tr?o.tr.num:o.v&&o.v.num||"");if(!c)return null;if(io.ref!==G.alerts){io.ref=G.alerts,io.m=new Map;for(let p of G.alerts)if(p.src==="Rodalies"&&y_.test(p.es||p.txt))for(let v of(p.es||p.txt).matchAll(/\b(\d{4,6})\b/g))io.m.set(v[1],p)}let f=io.m.get(c);return f?{why:"aviso",txt:f.txt}:o.real&&o.stop==="via"&&o.v.still>=300?{why:"via",min:Math.round(o.v.still/60)}:null}let so=o=>{try{let c=bt;return c?c.num!=null&&String(c.num)===String(o.num)||o.tid&&(c.tid===o.tid||c.vtid===o.tid):!1}catch{return!1}},Ep=(o,c)=>{let f=R(o,c.min-1,c.min+240).sort((p,v)=>p.est-v.est).slice(0,6);return f.length?`${__t(174)}${f.map(p=>`<li><b>${st(p.est)}</b>${En(p.fam)}<span>${Ci(p.dest,p.fam)}</span><i class="via">bus</i></li>`).join("")}</ol>`:""},pi=(()=>{try{return JSON.parse(localStorage.getItem("rod_fav")||"[]")}catch{return[]}})(),Tp=()=>{try{localStorage.setItem("rod_fav",JSON.stringify(pi))}catch{}},Ap=(o,c)=>{if(o.num===String(c.num))return!0;let f=t.days.indexOf(Qt().ymd),p=f>=0?Wr(o,f):null;return!!p&&String(p.num)===String(c.num)},Cp=o=>{let c=o.pat.stops.slice(0,-1),f=[...Ye.st,...ke.st];return c.find(p=>f.includes(T[p].id))??c.find(p=>It.st.includes(T[p].id))??o.pat.stops[0]},Rp=o=>!!o&&pi.some(c=>Ap(c,o)),xe=(()=>{try{let o=JSON.parse(localStorage.getItem("rod_alarm")||"null");return o&&Date.now()-o.at<4*36e5?o:null}catch{return null}})(),Es=()=>{try{localStorage.setItem("rod_alarm",JSON.stringify(xe))}catch{}},ql=(o,c)=>!!(xe&&o&&xe.num===String(o.num)&&xe.sid===T[o.pat.stops[c]].id);function Yl(o,c){try{window.__vib?window.__vib():navigator.vibrate&&navigator.vibrate([400,150,400,150,600])}catch{}Ve(o+" \xB7 "+c),document.hidden&&"Notification"in window&&Notification.permission==="granted"&&(navigator.serviceWorker&&navigator.serviceWorker.getRegistration?navigator.serviceWorker.getRegistration():Promise.resolve(null)).then(f=>f?f.showNotification(o,{body:c,tag:"alarm",requireInteraction:!0,vibrate:[400,150,400,150,600],icon:"icons/icon-192.png"}):new Notification(o,{body:c})).catch(()=>{})}function S_(){if(!xe||xe.done)return;let o=Qt();if(!o.live)return;let c=t.days.indexOf(o.ymd),f=(it[c]||[]).find(P=>String(P.num)===xe.num)||(it[c-1]||[]).find(P=>String(P.num)===xe.num);if(!f)return;let p=f.pat.stops.findIndex(P=>T[P].id===xe.sid);if(p<0)return;let v=gt(f),y=typeof v=="number"?Math.max(0,v/60):0,C=f.day===c-1?1440:0,L=f.t0+f.pat.t[2*p]+y-C;if(L-o.min<-3){xe.done=!0,Es();return}if(window.__schedAt&&L-2-o.min>.1&&(xe.sch==null||Math.abs(xe.sch-L)>=.5)&&(xe.sch=L,xe.nat=Date.now()+(L-2-o.min)*6e4,Es(),window.__schedAt(7701,`${__t(175)}${T[f.pat.stops[p]].n}`,__t(176)+` (${st(L)})`+(P=>P?` \xB7 ${__t(177)} ${P.fam} ${__t(178)} ${st(P.est)}${P.plat?__t(179)+P.plat:""}`:"")(Kl.get(xe.sid)),Date.now()+(L-2-o.min)*6e4)),L-o.min<=2){xe.done=!0,Es();let P=Kl.get(xe.sid),U=P?` \xB7 ${P.lost?__t(180)+" \xB7 "+__t(181):__t(177)} ${P.fam} ${__t(178)} ${st(P.est)}${P.plat?__t(179)+P.plat:""}`:"",V=Math.round(L-o.min),M=(V>=1?`${__t(183)} ${V}${__t(182)}${st(L)}) \xB7 ${__t(184)}`:`${__t(185)} (${st(L)}) \xB7 ${__t(184)}`)+U;window.__schedAt&&xe.nat&&Date.now()>=xe.nat-2e4?document.hidden||Yl(`${__t(175)}${T[f.pat.stops[p]].n}`,M):(window.__schedOff&&window.__schedOff(7701),Yl(`${__t(175)}${T[f.pat.stops[p]].n}`,M))}}function Wr(o,c){let f=+o.t.slice(0,2)*60+ +o.t.slice(3,5),p=it[c]||[],v=(L,P)=>L.t0+L.pat.t[2*P+1],y=null,C=11;for(let L of p){let P=L.pat.stops.findIndex(V=>T[V].id===o.sid);if(P<0||P===L.pat.stops.length-1)continue;let U=Math.abs(v(L,P)-f)+(String(L.num)===o.num?-5:0)+(L.fam===o.fam?0:20)+(o.dest&&T[L.pat.stops[L.pat.stops.length-1]].id!==o.dest?3:0);U<C&&(C=U,y=L)}return y}let Jl=new Set;function M_(){if(!pi.length)return;let o=Qt();if(!o.live)return;let c=t.days.indexOf(o.ymd);for(let f of pi){let p=Wr(f,c);if(!p)continue;let v=p.pat.stops.findIndex(V=>T[V].id===f.sid);if(v<0)continue;let y=p.t0+p.pat.t[2*v+1],C=gt(p),L=typeof C=="number"?C/60:0,P=y-o.min;if(P<-2||P>60)continue;let U=o.ymd+f.num+(C==="X"?"X":L>=10?10:L>=5?5:0);Jl.has(U)||(C==="X"||L>=5?(Jl.add(U),Yl(`${__t(186)}${st(y)} ${C==="X"?__t(187):`${__t(188)}${Math.round(L)} min`}`,`${p.fam} ${p.num}${__t(189)}${T[p.pat.stops[v]].n}${C==="X"?"":`${__t(190)}${st(y+L)}`}`)):P<=20&&!Jl.has(o.ymd+f.num+"ok")&&G.vp.has(p.tid)&&(Jl.add(o.ymd+f.num+"ok"),Ve(`${__t(186)}${st(y)}${__t(191)}`)))}}setInterval(()=>{try{S_(),M_()}catch{}},15e3);let En=o=>`<span class="ln" style="--c:${Y[o]}">${m(o)}</span>`;{let o=f=>{let p=/^#?([0-9a-f]{6})$/i.exec(f||"");return p?[0,2,4].map(v=>{let y=parseInt(p[1].slice(v,v+2),16)/255;return y<=.03928?y/12.92:Math.pow((y+.055)/1.055,2.4)}).reduce((v,y,C)=>v+y*[.2126,.7152,.0722][C],0):0},c=[...new Set(Object.values(Y))].filter(f=>o(f)>.3).map(f=>`.ln[style*="--c:${f}"],[data-f][style*="--c:${f}"].on,[data-f][style*="--c:${f}"]:not(.off){color:#14203a!important}`).join("");if(c){let f=document.createElement("style");f.textContent=c,document.head.appendChild(f)}}function Ip(o,c){return c?o==="X"?__t(193):o>=60?`<span class="st late ${Fi(o/60)}${__t(194)}${Math.round(o/60)} min</span>`:__t(195):`<span class="st sch">${__t(192)}</span>`}function Vh(){if(!d.classList.contains("peek")||window.__mapHidden||!d.getClientRects().length)return;let o=d.querySelector(".tc");if(!o)return;let c=o.querySelector(".st")||o.querySelector("p"),f=d.getBoundingClientRect().top-d.scrollTop,p=c?c.getBoundingClientRect().bottom-f+3:150;if(c){let v=c.nextElementSibling||c.parentElement!==o&&c.parentElement.nextElementSibling;v&&(p=Math.min(p,v.getBoundingClientRect().top-f-1))}d.style.setProperty("--peekh",Math.round(Math.min(280,Math.max(110,p)))+"px")}function Ts(){try{let o=d,c=document.getElementById("rcgrab"),f=document.getElementById("z");if(!o||!He.on||He.cur!=="map"||o.classList.contains("peek")||!o.getClientRects().length||!c||!c.getClientRects().length){o&&o._fit&&(["max-height","bottom","height","right","width"].forEach(_=>o.style.removeProperty(_)),o._fit=0);return}let v=o.getBoundingClientRect().top,y=c.getBoundingClientRect().top-8,C=Math.max(140,Math.floor(y-v)),L=f&&f.getClientRects().length?f.getBoundingClientRect():null,P=L?Math.max(10,Math.ceil(innerWidth-L.left+8)):10;o._fit=C+"|"+P;let U=o.style,V={"max-height":C+"px",height:"auto",bottom:"auto",width:"auto",right:P+"px"};for(let _ in V)(U.getPropertyValue(_)!==V[_]||U.getPropertyPriority(_)!=="important")&&U.setProperty(_,V[_],"important")}catch{}}setInterval(()=>{He.on&&He.cur==="map"&&Ts()},700);try{new MutationObserver(()=>Ts()).observe(d,{attributes:!0,attributeFilter:["style","class"]})}catch{}window.__fitMcs=Ts;try{localStorage.removeItem("rod_dbg")}catch{}if(/[?&]dbg=1/.test(location.search)){let o=document.createElement("pre");o.id="dbgbox",o.style.cssText="position:fixed;left:4px;top:4px;z-index:999;background:rgba(0,0,0,.85);color:#0f0;font:11px/1.25 monospace;padding:6px;margin:0;pointer-events:none;max-width:70vw;white-space:pre-wrap",document.body.appendChild(o),setInterval(()=>{try{let c=p=>{let v=document.querySelector(p);if(!v||!v.getClientRects().length)return"\u2014";let y=v.getBoundingClientRect();return[y.left,y.top,y.right,y.bottom].map(Math.round).join(",")},f=getComputedStyle(d);o.textContent=`v ${document.title.slice(0,0)}${(document.getElementById("ver")||{}).textContent||""}
inner ${innerWidth}x${innerHeight} vv ${window.visualViewport?Math.round(visualViewport.height):"-"}
tab ${He.on?He.cur:"off"} peek ${d.classList.contains("peek")}
mcs ${c("#mcs")}
tc ${c("#mcs .tc")}
rc ${c("#rcgrab")} z ${c("#z")}
maxH ${f.maxHeight} ov ${f.overflowY}
fit ${d._fit||0}
inl ${d.style.cssText.slice(0,160)}`}catch(c){o.textContent="err "+c.message}},1e3)}addEventListener("resize",()=>setTimeout(Ts,80));try{new ResizeObserver(()=>Ts()).observe(document.getElementById("rcgrab")||document.body)}catch{}window.visualViewport&&visualViewport.addEventListener("resize",()=>setTimeout(Ts,80));function Ie(){try{b_()}finally{requestAnimationFrame(Ts),window.__rodTabSync&&window.__rodTabSync();try{Vh()}catch{}}}function b_(){if(!bt&&me<0&&!_e&&!Ot&&!Ct&&!Yt){fr=!1,d.innerHTML="",d._h="",d.style.display="none",d.classList.remove("peek"),ed();return}let o=Qt(),c="",f=E()&&o.live,p=(_,M)=>G.alerts.filter(A=>[...A.fams].some(O=>_.has(O))||M!=null&&A.stops.has(M)),v=_=>_.length?`<div class="al">${_.slice(0,4).map(M=>`<p>\u26A0\uFE0F ${co(M)} ${[...M.fams].sort(B).slice(0,6).map(En).join(" ")} ${m(M.txt)} <small>${uo(M)}</small></p>`).join("")}${_.length>4?`<small>y ${_.length-4}${__t(196)}`:""}</div>`:"",y=bt&&f?re.find(_=>_.real&&(bt.vtid?_.v.tid===bt.vtid:_.tr===bt)):null;if(Yt&&!Ct&&!Ot&&!_e&&!bt&&me<0)c=h_(Yt);else if(Ct)c=u_();else if(Ot)c=`${__t(197)}${m(x("#ver").firstChild.textContent)}</small><ul class="chg">${x("#chg").innerHTML||__t(199)}${__t(198)}`;else if(_e){let _=G.alerts.filter(M=>[...M.fams].some(A=>dt.has(A))||!M.fams.size);c=`${__t(200)}${_.length}${__t(201)}${_.map(M=>`<div class="al"><p>${co(M)} ${[...M.fams].sort(B).map(En).join(" ")} <small>${uo(M)}</small></p><p>${m(M.txt)}</p></div>`).join("")||__t(203)}${__t(202)}${G.alertsTs&&Date.now()/1e3-G.alertsTs<6*3600?__t(204):`${__t(205)}${G.alertsTs?new Date(G.alertsTs*1e3).toLocaleDateString("es-ES",{day:"numeric",month:"short"}):"\u2014"}`}</small></div>`}else if(y){let _=y.v,M=y.tr,A=Te=>m(T[M.pat.stops[Te]].n),O=M?M.pat.stops.length:0,et=kt.get(_.sid),nt=et!=null?m(T[et].n):m(_.sid),z=M&&_.atStop>=0?A(_.atStop):"",at=M&&_.next>=0?A(_.next):nt,W=M&&_.next>0?A(_.next-1):"",ne=y.broke||wp(y),Se=ne?`<b class="stopv">\u26A0\uFE0F ${ne.why==="aviso"?__t(206):`${__t(207)}${ne.min} min`}</b>${M&&W?`${__t(208)}${W}${__t(209)}${at}</b>`:""}`:y.stop==="via"&&M?`${__t(210)}${W?`${__t(212)}${W}${__t(209)}${at}</b>`:`${__t(213)}${at}</b>`}${__t(211)}${Math.max(1,Math.round(_.still/60))} min`:_.pre&&M?_.prevTr?`${__t(214)}${m(_.prevTr.num)}${__t(215)}${A(0)}</b>${_.prevDl>=1?`${__t(218)}${Math.round(_.prevDl)} min</b>`:""}${__t(216)}${st(_.arrO)}${__t(217)}${st(_.depEst)}</b>${_.preDl>=1?`${__t(219)}${st(_.dep0)})`:""}`:`${__t(220)}${A(0)}${__t(221)}${st(_.dep0+y.dl)}</b>`:z&&_.before?`Llegando a <b>${z}</b>`:(_.st==="STOPPED_AT"||y.stop==="st")&&z?`${__t(222)}${z}</b>`:z&&_.next>=0&&_.atStop!==_.next?`${__t(223)}${z}${__t(215)}${at}</b>`:W?`${__t(224)}${W}${__t(209)}${at}</b>`:`${__t(225)}${at}</b>`,Zt=M&&_.next>=0&&!_.pre?st(Yr(M,_,_.next,M.t0+M.pat.t[2*_.next]+y.dl)):"",$e=[];if(M){let Te=y.idx>=0?y.idx:0,Le=_.pre?Math.max(y.dl,_.preDl||0):y.dl,Ke=ze=>M.t0+M.pat.t[ze]+Le;for(let ze=Te;ze<O;ze++)$e.push(`<li class="${Xl(M.pat.stops[ze])?"mine":""}${ql(M,ze)?" alm":""}"><b>${st(Yr(M,_,ze,Ke(ze===0?1:2*ze)))}</b><span title="${A(ze)}">${Xl(M.pat.stops[ze])}${A(ze)}</span>${Le>=1?`<em class="dl ${Fi(Le)}">${_.pre?"\u2248":""}+${Math.round(Le)}</em>`:""}${ze>0?`<button type="button" class="abtn" data-alarm="${ze}" title="${__t(226)}">${ql(M,ze)?"\u{1F514}":"\u{1F515}"}</button>`:""}</li>`)}c=`<div class="tc" style="--c:${y.c}"><button class="x" data-cx>\xD7</button><div>${En(y.fam)}${__t(227)}${m(M?M.num:_.num)}${__t(228)}${M?`<h3 class="rt"><span class="o" title="${A(0)}">${A(0)}</span><span class="ar">\u2192</span>${Ci(T[M.pat.stops[O-1]].n,M.fam)}</h3>`:""}
        <p>${Se}${Zt?`${__t(229)}${Zt}`:""}${_.plat&&_.st==="STOPPED_AT"&&z?`${__t(230)}${m(_.plat)}</b>`:""}</p><p>${_.pre&&_.prevTr?_.preDl>=1?`${__t(231)}${Math.round(_.preDl)}${__t(232)}`:__t(233):Ip(G.delays.get(_.tid),G.delays.has(_.tid))}${(()=>{let Te=M&&zl(M.num);return Te&&Te.n>=2?`${__t(234)}${Te.n}${__t(235)}${Te.late?`${__t(236)} <b>${Te.late} ${__t(141)} ${Te.n} ${__t(138)}</b> ${__t(237)}`:__t(238)} \xB7 ${__t(239)} ${Te.avg<.5?"0":"+"+Math.round(Te.avg)} min</span>`:""})()}${(()=>{let Te=M&&zh(M.num);return Te?`<span class="why" title="${m(Te.txt)}">${Te.why?__t(240)+m(Te.why):__t(241)}</span>`:""})()}</p>
        <small>${_.pre?`${__t(242)}${gs(wh(y.age))}`:_.est?__t(243):`${__t(244)}${gs(wh(y.age))}${y.age>120?__t(245):""}`}</small>
        ${$e.length?`${y.dl>=1||_.pre&&_.preDl>=1?`${__t(246)}`:""}<ol class="stops">${$e.join("")}</ol>`:""}${v(p(new Set([y.fam])))}
        ${oo(M?M.num:_.num,"",y.fam)}${M?`<div class="rtb two"><button type="button" data-fav>${Rp(M)?__t(247):__t(248)}</button><button type="button" data-follow>${jl(M)?__t(249):__t(250)}</button></div>`:""}</div>`}else if(bt&&f&&!bt.pat)c=`${__t(251)}${m(bt.num||bt.vtid||"")}${__t(252)}`;else if(bt){let _=bt,M=_.pat,A=M.stops.length,O=gt(_),et=typeof O=="number"?O/60:0,nt=t.days.indexOf(o.ymd),z=_.day===nt-1?1440:0,at=o.min+z-_.t0-et,W=Vs(_,at),ne=Le=>_.t0+M.t[Le]+et,Se=Le=>m(T[M.stops[Le]].n),Zt=__t(253);W&&(Zt=W.moving?`${__t(254)}${Se(W.next)}${__t(255)}${st(ne(2*W.next))}`:W.at===A-1?`${__t(256)}${Se(A-1)}</b>`:`${__t(222)}${Se(W.at)}${__t(257)}${st(ne(2*W.at+1))}`);let $e=W?W.next:0,Te=[];for(let Le=$e;Le<A;Le++)Te.push(`<li class="${Xl(M.stops[Le])?"mine":""}${ql(_,Le)?" alm":""}"><b>${st(Yr(_,null,Le,ne(2*Le)))}</b><span title="${Se(Le)}">${Xl(M.stops[Le])}${Se(Le)}</span>${et>=1?`<em class="dl ${Fi(et)}">+${Math.round(et)}</em>`:""}${Le>0?`<button type="button" class="abtn" data-alarm="${Le}" title="${__t(226)}">${ql(_,Le)?"\u{1F514}":"\u{1F515}"}</button>`:""}</li>`);c=`<div class="tc" style="--c:${_.c}"><button class="x" data-cx>\xD7</button><div>${En(_.fam)}${__t(227)}${m(_.num)}</b> <span class="pv">${__t(261)}</span></div><h3 class="rt"><span class="o" title="${Se(0)}">${Se(0)}</span><span class="ar">\u2192</span>${Ci(T[_.pat.stops[A-1]].n,_.fam)}</h3>
        <p>${Zt}</p><p>${Ip(O,O!=null)}${(()=>{let Le=zl(_.num);return Le&&Le.n>=2?`${__t(234)}${Le.n}${__t(235)}${Le.late?`${__t(236)} <b>${Le.late} ${__t(141)} ${Le.n} ${__t(138)}</b> ${__t(237)}`:__t(238)} \xB7 ${__t(239)} ${Le.avg<.5?"0":"+"+Math.round(Le.avg)} min</span>`:""})()}${__t(258)}${st(_.t0+M.t[1])}${__t(259)}${st(_.t0+M.t[2*A-2])}${__t(260)}${et>=1?__t(246):""}<ol class="stops">${Te.join("")}</ol>${oo(_.num,"",_.fam)}<div class="rtb two"><button type="button" data-fav>${Rp(_)?__t(247):__t(248)}</button><button type="button" data-follow>${jl(_)?__t(249):__t(250)}</button></div></div>`}else{let _=me,M=t.days.indexOf(o.ymd),A=[];Ai.st!==_&&(Ai.st=_,Ai.f.clear());let O=W=>(!Y[W]||dt.has(W))&&(!Ai.f.size||Ai.f.has(W));if(M>=0){let W=(ne,Se)=>{for(let Zt of ne){if(!O(Zt.fam))continue;let $e=Zt.pat.stops.indexOf(_);if($e<0||$e===Zt.pat.stops.length-1)continue;let Te=gt(Zt),Le=typeof Te=="number"?Te/60:0,Ke=Zt.t0+Zt.pat.t[2*$e+1]-Se;Ke+Le<o.min-1||Ke>o.min+360||A.push({tr:Zt,t:Ke,dl:Le,d:Te,on:G.vp.has(Zt.tid),past:o.min>Zt.t0+Zt.pat.t[1]-Se+2})}};W(it[M],0),M>0&&W(it[M-1],1440)}A.sort((W,ne)=>W.t+W.dl-ne.t-ne.dl);let et=T[_].id,nt=Ft.get(et),z=(f||F()&&o.live)&&G.url;z&&(!nt||Date.now()-nt.at>Up())&&!nt?.loading&&(Ft.set(et,{...nt||{},loading:!0,at:nt?nt.at:0}),Lt(ce(),"/departures.json?stationId="+et).then(W=>{Ft.set(et,{at:Date.now(),d:W}),me===_&&(d._h="",Ie())}).catch(()=>Ft.set(et,{at:Date.now(),err:1})));let at=z&&nt&&nt.d&&Array.isArray(nt.d.trains)&&nt.d.trains.length?nt.d.trains:null;if(at){let W=new Map([...G.vp.values()].map(Zt=>[String((pt.get(Zt.tid)||{}).num||Zt.num),Zt])),ne=new Map(Jn(_).map(Zt=>[String(Zt.num),Zt])),Se=at.filter(Zt=>O((Zt.line||{}).id||"")).slice(0,40).map(Zt=>{let $e=String(Zt.commercialNumber||Zt.technicalNumber||""),Te=ne.get($e),Le=Te?st(Te.est):(Zt.departureDateHourSelectedStation||"").slice(11,16),Ke=(Zt.line||{}).id||"",ze=W.get($e),xn=Te?Math.round(Te.dl)*60:ze?G.delays.get(ze.tid):null,vr=Te&&(Te.gone||!Te.live&&Te.est<o.min-1);return`<li class="go${vr?" old":""}${so({num:$e,tid:ze?ze.tid:""})?" sel":""}" data-gt="${m($e)}|${ze?m(ze.tid):""}"><b>${m(Le)}</b>${Y[Ke]?En(Ke):`<span class="ln" style="--c:#6b7385">${m(Ke||"?")}</span>`}<span>${Ci((Zt.destinationStation||{}).name||"",Ke)}${Zt.trainObservations?` \xB7 <i>${m(Zt.trainObservations)}</i>`:""}${vr?` <small class="oldt">${Te.gone?__t(262):__t(263)}</small>`:""}</span>${Zt.trainCancelled?__t(264):typeof xn=="number"&&xn>=60?`<em class="dl ${Fi(xn/60)}">+${Math.round(xn/60)}</em>`:""}${Zt.platformSelectedStation?`${__t(265)}${m(Zt.platformSelectedStation)}</i>`:""}${ze?'<i class="lvd" title="circulando, posici\xF3n real">\u25CF</i>':'<i class="lvd ph">\u25CF</i>'}</li>`}).join("");c=`<div class="tc" style="--c:#1d2330"><button class="x" data-cx>\xD7</button><h3>${m(T[_].n)}</h3>${bp(_)}${oo("",T[_].id,"")}${__t(266)}${Se||__t(268)}</ol>${Ep(_,o)}${v(p(T[_].fams,_))}${__t(267)}`}else c=`<div class="tc" style="--c:#1d2330"><button class="x" data-cx>\xD7</button><h3>${m(T[_].n)}</h3>${bp(_)}${oo("",T[_].id,"")}
        <small style="margin-top:6px">${f&&G.url?__t(270):""}${__t(269)}${f?__t(271):__t(272)}</small>
        <ol>${A.slice(0,40).map(W=>`<li class="go${so({num:W.tr.num,tid:W.tr.tid})?" sel":""}" data-gt="${m(W.tr.num)}|${m(W.tr.tid)}"><b>${st(W.t+W.dl)}</b>${En(W.tr.fam)}<span>${Ci(T[W.tr.pat.stops[W.tr.pat.stops.length-1]].n,W.tr.fam)}</span>${W.d==="X"?__t(264):W.dl>=1?`<em class="dl ${Fi(W.dl)}">+${Math.round(W.dl)}</em>`:""}${f?W.on?'<i class="lvd" title="circulando, posici\xF3n real">\u25CF</i>':W.past?__t(273):'<i class="lvd ph">\u25CF</i>':""}</li>`).join("")||__t(274)}</ol>${Ep(_,o)}${v(p(T[_].fams,_))}${__t(267)}`}let C=d.scrollTop;if(d._h!==c&&!(d._touch>Date.now())){let _=nt=>((nt&&nt.querySelector("h3")||{}).textContent||"").replace(/[^\p{L}\d]/gu,""),M=d.querySelector(".tc"),A=_(M),O=M?M.scrollTop:0;d.innerHTML=c,d._h=c,d.scrollTop=C;let et=d.querySelector(".tc");et&&O&&A&&_(et)===A&&(et.scrollTop=O)}if(d.style.display="flex",d.classList.toggle("min",fr),ed(),innerWidth<=640){let _=d.querySelector(".tc");if(_&&!_.querySelector(".mn")){let M=document.createElement("button");M.type="button",M.className="mn",M.setAttribute("aria-label",__t(275)),M.textContent=d.classList.contains("peek")?"\u25B4":"\u25BE",M.onclick=O=>{O.stopPropagation(),d.classList.toggle("peek"),d.classList.contains("peek")&&(Xr="",d.querySelectorAll("details[open]").forEach(et=>et.open=!1)),d.scrollTop=0,d.querySelectorAll(".tc").forEach(et=>et.scrollTop=0),requestAnimationFrame(Ts),Vh(),M.textContent=d.classList.contains("peek")?"\u25B4":"\u25BE"};let A=_.querySelector(".x");_.insertBefore(M,A?A.nextSibling:_.firstChild)}}else d.classList.remove("peek");let L=x("#rc");if(innerWidth<=640&&!L.classList.contains("min")&&!Ie.done&&(Ie.done=1,x("#rcgrab").click()),innerWidth<=640){let _=x("#inf").getBoundingClientRect().bottom;d.style.top=Math.round(_+8)+"px",d.style.width="calc(100vw - 76px)",d.style.maxHeight=Math.max(140,x("#rc").getBoundingClientRect().top-_-16)+"px"}else if(innerHeight<=500){let _=x("#inf").getBoundingClientRect().bottom;d.style.top=Math.round(_+8)+"px",d.style.width="min(290px, 40vw)",d.style.maxHeight=innerHeight-_-20+"px"}else d.style.top="",d.style.width=Ct?"390px":"300px",d.style.maxHeight="";Ts();let U=d.querySelector("[data-cx]");U&&(U.onclick=_=>{if(_.stopPropagation(),Ie.done=0,Ct||Ot||_e||Yt&&!bt&&me<0){Ct=Ot=_e=!1,bt||me>=0||(Yt=""),d._h="",Ie(),a();return}if(bt&&se.st>=0){let M=se.st;se.st=-1,bt=null,Nt=null,me=M,Hn(),d._h="",Ie(),be=0,a();return}if(bt&&jl(bt)){let M=bt,A=[...ln],O=xe?{...xe}:null,et=d.querySelector("[data-follow]");et&&et.click(),setTimeout(()=>Ve(`${__t(276)} \xB7 ${M.fam||""} ${M.num}`,{label:__t(277),fn:()=>{A.forEach(([nt,z])=>ii(nt,z)),O&&!xe&&(xe=O,Es()),Ii("map"),Gs({num:String(M.num),tid:M.tid&&G.vp.has(M.tid)?M.tid:"",tr:M}),Nt=bt,d._h="",Ie(),ye(!0),a()}}),0)}se.st=-1,_e=!1,Ot=!1,Ct=!1,bt=null,me=-1,Nt=null,Hn(),Ie(),be=0,a()}),Np(d),d.querySelectorAll("[data-alarm]").forEach(_=>_.onclick=M=>{M.stopPropagation();let A=bt&&bt.pat?bt:pt.get(bt&&bt.vtid)||null;if(!A)return;let O=+_.dataset.alarm,et=T[A.pat.stops[O]].id;xe&&xe.num===String(A.num)&&xe.sid===et?(xe=null,window.__schedOff&&window.__schedOff(7701),Ve(__t(278))):(xe={num:String(A.num),sid:et,at:Date.now()},Ve(`${__t(279)}${T[A.pat.stops[O]].n}`),"Notification"in window&&Notification.permission==="default"&&Notification.requestPermission()),Es(),d._h="",Ie()});{let _=d.querySelector("[data-fav]");_&&(_.onclick=M=>{M.stopPropagation();let A=bt&&bt.pat?bt:pt.get(bt&&bt.vtid)||null;if(!A)return;let O=pi.findIndex(et=>Ap(et,A));if(O>=0)pi.splice(O,1),Ve(__t(280));else{let et=Cp(A);pi.push({num:String(A.num),fam:A.fam,sid:T[et].id,dest:T[A.pat.stops[A.pat.stops.length-1]].id,t:st(A.t0+A.pat.t[2*A.pat.stops.indexOf(et)+1])}),Ve(`${__t(281)}${A.fam}${__t(282)}${pi[pi.length-1].t}${__t(189)}${T[et].n}${__t(283)}`),"Notification"in window&&Notification.permission==="default"&&Notification.requestPermission()}Tp(),d._h="",Ie(),ye(!0)})}{let _=d.querySelector("[data-share]");_&&(_.onclick=()=>{let M=Yt,A=re.filter(z=>(z.fam||z.tr&&z.tr.fam)===M),O=A.filter(z=>z.dl>=5).sort((z,at)=>at.dl-z.dl),et=G.alerts.filter(z=>z.fams.has(M)),nt=`${M}${__t(284)}${st(Qt().min)}: ${A.length}${__t(285)}${O.length}${__t(286)}${O.length?" ("+O.slice(0,4).map(z=>`${z.tr?z.tr.num:z.v.num} +${Math.round(z.dl)}`).join(", ")+")":""}.${et.length?__t(287)+et[0].txt:__t(288)}`;navigator.share?navigator.share({text:nt}).catch(()=>{}):(navigator.clipboard&&navigator.clipboard.writeText(nt),Ve(__t(289)+nt.slice(0,60)+"\u2026"))})}d.querySelectorAll("[data-tripx]").forEach(_=>_.onclick=M=>{M.stopPropagation();let A=jn.findIndex(et=>et.k===_.dataset.tripx);if(A<0)return;let[O]=jn.splice(A,1);try{localStorage.setItem("rod_trips",JSON.stringify(jn,(et,nt)=>et==="_n"?void 0:nt))}catch{}d._h="",Ie(),Ve(`${__t(290)} \xB7 tren ${O.num}`,{label:__t(277),fn:()=>{jn.push(O);try{localStorage.setItem("rod_trips",JSON.stringify(jn,(et,nt)=>et==="_n"?void 0:nt))}catch{}d._h="",Ie()}})});{let _=d.querySelector("[data-lmore]");_&&(_.onclick=()=>{Hl.v=!Hl.v,d._h="",Ie()})}{let _=d.querySelector("[data-share30]");_&&(_.onclick=()=>{let M=Yt,A=xp(M);if(!A)return;let O=pi.filter(nt=>nt.fam===M).map(nt=>[nt,_p(nt)]).filter(([,nt])=>nt.n),et=`${__t(291)} ${M} ${__t(292)} ${Math.min(30,A.days)} ${__t(138)}: ${Math.round(A.pct)} % ${__t(293)}, ${__t(294)} ${bs(A.avg)}${A.nc?`, ${A.nc} ${A.nc===1?__t(150):__t(151)}`:""}.${(nt=>{let z=nt.filter(at=>at.dl!=null);return z.length?` ${__t(295)} ${nt.length} ${nt.length===1?__t(127):__t(128)}: ${__t(296)} ${z.filter(at=>at.dl>=5).length} ${__t(297)} (\u2248 ${$h(z.reduce((at,W)=>at+W.dl,0))} ${__t(132)}).`:""})(dm(M,30))}${O.map(([nt,z])=>` ${__t(298)} ${nt.t} ${__t(299)} ${z.late} ${__t(141)} ${z.n} ${__t(138)} (\u2248 ${$h(z.sum)} ${__t(132)}).`).join("")} ${__t(300)}`;navigator.share?navigator.share({text:et}).catch(()=>{}):(navigator.clipboard&&navigator.clipboard.writeText(et),Ve(__t(289)+et.slice(0,60)+"\u2026"))})}{let _=d.querySelector("[data-cols]");_&&(_.onclick=()=>{mn.on=!mn.on,g_(),d._h="",Ie()})}d.querySelectorAll("[data-gs]").forEach(_=>_.onclick=()=>{let M=+_.dataset.gs;Ct=!1,window.__rodPickStation(M),Object.assign(s,{tx:T[M].w[0],ty:T[M].w[1],dist:Math.min(s.dist,20)}),a()}),d.querySelectorAll("[data-sf]").forEach(_=>_.onclick=M=>{M.stopPropagation();let A=_.dataset.sf;A?Ai.f.has(A)?Ai.f.delete(A):Ai.f.add(A):Ai.f.clear(),d._h="",Ie()}),d.querySelectorAll("[data-gt]").forEach(_=>_.onclick=()=>{se.st=me;let[M,A]=_.dataset.gt.split("|"),O=pt.get(A);Gs({num:M,tid:G.vp.has(A)?A:"",tr:O||null})}),d.querySelectorAll("[data-sethome]").forEach(_=>_.onclick=()=>id(me,_.dataset.sethome));let V=d.querySelector("[data-follow]");V&&(V.onclick=()=>{let _=jl(bt);if(Nt=_?null:bt,!_&&bt&&bt.num!=null){let M=bt.pat.stops,A=String(bt.num),O=null,et=1e9;for(let nt of[Ye,ke,It]){let z=Tn(nt);if(z==null||!M.includes(z)||nt===It&&!It.st.length)continue;let at=Jn(z).find(W=>String(W.num)===A&&!W.gone);at&&at.est<et&&(et=at.est,O=nt)}O?ii(O.key,A):[...ln.keys()].forEach(nt=>ii(nt,null)),ye(!0)}if(_&&bt&&bt.num!=null){let M=String(bt.num);[...ln].forEach(([A,O])=>{String(O)===M&&ii(A,null)}),Rn.num===M&&(Rn.num=""),mt.tid===M&&(mt.tid="",mt.lock=!1,mt.manual=0,mt.quiet=Date.now()+10*6e4),xe&&xe.num===M&&(xe=null,Es(),window.__schedOff&&window.__schedOff(7701)),ye(!0)}Nt?(s.dist=Math.min(s.dist,22),innerWidth<=640&&(d.classList.add("peek"),d.scrollTop=0,x("#rc").classList.contains("min")||x("#rcgrab").click())):d.classList.remove("peek"),d._h="",Ie(),a()})}window.__rodCard=Ie;try{let o=localStorage.getItem("rod_inf");(o==="mini"||o==null)&&x("#inf").classList.add("mini")}catch{}x("#inft").onclick=()=>{let o=x("#inf").classList.toggle("mini");try{localStorage.setItem("rod_inf",o?"mini":"")}catch{}(bt||me>=0||_e||Ot)&&(d._h="",Ie())},x("#ver").onclick=()=>{Ot=!0,Ct=!1,_e=!1,d._h="",Ie()};let w_={parado:'<path d="M9 6v12M15 6v12"/>',calor:'<path d="M12 4a2 2 0 012 2v8.5a4 4 0 11-4 0V6a2 2 0 012-2z"/><path d="M12 11v6"/>',abordo:'<path d="M12 3l10 18H2z"/><path d="M12 10v5M12 18v.4"/>',via:'<path d="M12 3l10 18H2z"/><path d="M12 10v5M12 18v.4"/>',gente:'<circle cx="9" cy="8" r="3"/><path d="M3 20c0-3.5 2.7-6 6-6s6 2.5 6 6"/><circle cx="17" cy="9" r="2.5"/><path d="M16 14.2c2.8.3 5 2.5 5 5.8"/>',retraso:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',cancel:'<circle cx="12" cy="12" r="9"/><path d="M9 9l6 6M15 9l-6 6"/>',ascensor:'<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 9l3-3 3 3M9 15l3 3 3-3"/>'},E_={vacio:"ok",lleno:"warn",petado:"bad",parado:"warn",calor:"warn",abordo:"bad",gente:"warn",retraso:"warn",cancel:"bad",ascensor:"warn",via:"bad"};function Pp(o){let c={vacio:1,lleno:2,petado:3}[o],f=c?[0,1,2].map(p=>`<rect x="${4+p*6}" y="${14-p*4}" width="4" height="${6+p*4}" rx="1" ${p<c?'fill="currentColor"':""}/>`).join(""):w_[o]||'<circle cx="12" cy="12" r="3"/>';return`<svg class="cki ${E_[o]||""}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${f}</svg>`}let ro=new Proxy({},{get:(o,c)=>Pp(c)}),Xr="",T_=["vacio","lleno","petado",__t(301),"calor","abordo"],A_=["gente","retraso","cancel","ascensor","via"],C_={vacio:__t(302),lleno:__t(303),petado:__t(304),parado:__t(305),calor:__t(306),abordo:__t(307),gente:__t(308),retraso:__t(309),cancel:__t(310),ascensor:__t(311),via:__t(312)},ao=o=>(G.tipos||C_)[o]||o,Zl=(o,c)=>(G.rep||[]).filter(f=>o&&f.num===String(o)&&!f.sid||c&&f.sid===String(c)&&!f.num||o&&c&&f.num===String(o)&&f.sid===String(c)),Lp=o=>{let c=Math.round((Date.now()+(G.repSkew||0)-o.at)/6e4);return c<1?__t(313):gs(c+" min")},qr=(()=>{try{return new Set(JSON.parse(localStorage.getItem("rod_votes")||"[]"))}catch{return new Set}})();function oo(o,c,f){if(!G.url||!G.repOk)return"";let p=Zl(o,c),v=o?T_:A_;return`<div class="crowd"><small>${Pp("gente")} ${__t(315)}${p.length?"":__t(316)}</small>${p.map(y=>`<p><span><span class="cname">${ro[y.kind]||"\u2022"} <b>${m(ao(y.kind))}</b></span><small class="cmeta">${y.up>1?(y.up>999?"999+":y.up)+" "+__t(317)+" \xB7 ":""}${Lp(y)}</small></span>${qr.has(y.id)?`<small class="cvok">\u2713 ${__t(318)}</small>`:`<span class="cvb"><button type="button" data-rv="${y.id}:1" title="${__t(319)}">\u2713 ${__t(320)}</button><button type="button" data-rv="${y.id}:-1" title="${__t(321)}">\u2715 ${__t(322)}</button></span>`}</p>`).join("")}
      <details data-ckd="${m(String(o||"")+"|"+String(c||""))}"${Xr===String(o||"")+"|"+String(c||"")?" open":""}><summary>${o?__t(323):__t(324)}</summary><div class="ckb">${v.map(y=>`<button type="button" data-rk="${y}" data-rn="${m(o||"")}" data-rs="${m(c||"")}" data-rl="${m(f||"")}">${ro[y]} ${m(ao(y))}</button>`).join("")}${__t(314)}`}async function Dp(o,c){try{let p=await(await fetch(ce()+c,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)})).json();if(!p.ok){Ve(p.err||__t(325));return}if(p.id){qr.add(p.id);try{localStorage.setItem("rod_votes",JSON.stringify([...qr].slice(-300)))}catch{}}Ve(c==="/vote"?__t(326):p.n>1?`${__t(327)}${p.n}${__t(328)}`:__t(329));let v=await Lt(ce(),"/reports.json");v&&v.items&&(G.rep=v.items),d._h="",Ie(),ye(!0)}catch{Ve(__t(330))}}function Np(o){o.querySelectorAll("details[data-ckd]").forEach(c=>c.addEventListener("toggle",()=>{Xr=c.open?c.dataset.ckd:Xr===c.dataset.ckd?"":Xr,c.open&&c.scrollIntoView({block:"nearest",behavior:"smooth"})})),o.querySelectorAll("[data-rk]").forEach(c=>c.onclick=f=>{f.stopPropagation(),c.disabled=!0,Xr="",Dp({kind:c.dataset.rk,num:c.dataset.rn,sid:c.dataset.rs,line:c.dataset.rl},"/report")}),o.querySelectorAll("[data-rv]").forEach(c=>c.onclick=f=>{f.stopPropagation();let[p,v]=c.dataset.rv.split(":");qr.add(+p);try{localStorage.setItem("rod_votes",JSON.stringify([...qr].slice(-300)))}catch{}Dp({id:+p,v:+v},"/vote"),Ve(+v>0?__t(331):__t(332)),ye(!0),d._h="",Ie()})}let lo=0;function Ve(o,c){let f=x("#toast");if(f||(f=document.createElement("div"),f.id="toast",document.body.appendChild(f)),f.textContent=o,c){let p=document.createElement("button");p.type="button",p.className="tact",p.textContent=c.label,p.onclick=v=>{v.stopPropagation(),clearTimeout(lo),f.className="",c.fn()},f.appendChild(p)}if(f.className="on",clearTimeout(lo),lo=setTimeout(()=>{f.className=""},Math.min(1e4,Math.max(4500,String(o).length*70))),!f._tap){f._tap=1,f.onclick=()=>{clearTimeout(lo),f.className=""};let p=null,v=0;f.addEventListener("touchstart",y=>{p=y.touches[0].clientY,v=0,f.style.transition="none"},{passive:!0}),f.addEventListener("touchmove",y=>{p!=null&&(v=Math.min(0,y.touches[0].clientY-p),f.style.translate=`0 ${v}px`,f.style.opacity=String(Math.max(.2,1+v/80)))},{passive:!0}),f.addEventListener("touchend",()=>{f.style.transition="",f.style.translate="",f.style.opacity="",p!=null&&v<-25&&(clearTimeout(lo),f.className=""),p=null})}}function co(o){return o.src?`<b class="asrc ${o.src==="Adif"?"adif":""}">${o.src==="Adif"?__t(333):m(o.src)}</b>`:""}function uo(o){if(!o.when)return"";let[c,f]=o.when.split("T"),p=St(new Date),v=p.ymd.slice(0,4)+"-"+p.ymd.slice(4,6)+"-"+p.ymd.slice(6,8);if(c===v&&f){let y=Math.round(p.min-(+f.slice(0,2)*60+ +f.slice(3,5)));return y<1?__t(313):y<60?gs(y+" min"):`${__t(334)}${f.slice(0,5)}`}return`${c.slice(8,10)}/${c.slice(5,7)}${f?" "+f.slice(0,5):""}`}function Hh(){let o=x("#alr");if(!o)return;let c=G.alerts.filter(f=>[...f.fams].some(p=>dt.has(p))).length;o.hidden=!c,o.textContent=`\u26A0\uFE0F ${c}${c===1?__t(335):__t(336)}`}{let o=x("#alrslot");o&&o.appendChild(x("#alr"))}x("#alr").onclick=()=>{Ot=!1,Ct=!1,_e=!0,Ie()},x("#wcopy").onclick=async()=>{let o=x("#wcode").textContent;try{await navigator.clipboard.writeText(o),x("#wcopy").textContent=__t(337)}catch{let f=document.createRange();f.selectNodeContents(x("#wcode"));let p=getSelection();p.removeAllRanges(),p.addRange(f),x("#wcopy").textContent=__t(338)}setTimeout(()=>x("#wcopy").textContent=__t(339),2500)};let R_=kt.get("71801");function Up(){return document.hidden?ln.size||xe?12e4:1e12:3e4}function Op(o,c){let f=T[o].id,p=Ft.get(f);!(J()&&G.url)||p&&(p.loading||Date.now()-p.at<Up())||(Ft.set(f,{...p||{},loading:!0,at:p?p.at:0}),Lt(ce(),"/departures.json?stationId="+f).then(v=>{Ft.set(f,{at:Date.now(),d:v}),c&&c()}).catch(()=>Ft.set(f,{at:Date.now(),err:1})))}let Fp=o=>+o.slice(0,2)*60+ +o.slice(3,5),ho={k:-2,m:null};function As(o){let c=t.days.indexOf(Qt().ymd);if(ho.k!==c){ho.k=c,ho.m=new Map;for(let f of it[c]||[])ho.m.set(String(f.num),f)}return ho.m.get(String(o))||null}let Bi={at:0,m:new Map},fo=o=>E()?(po(""),[...o].filter(c=>{let f=Bi.m.get(c);return f&&f[0]>=2&&f[1]===0}).sort(B)):[];function po(o){if(Date.now()-Bi.at>6e4||Bi.vp!==G.vp){Bi.at=Date.now(),Bi.vp=G.vp,Bi.m=new Map;let f=Qt(),p=t.days.indexOf(f.ymd);if(p>=0)for(let v of it[p]){let y=f.min-v.t0;if(y<v.pat.t[1]+3||y>v.pat.t[v.pat.t.length-2]-3)continue;let C=Bi.m.get(v.fam)||[0,0];C[0]++,G.vp.has(v.tid)&&C[1]++,Bi.m.set(v.fam,C)}}let c=Bi.m.get(o);return c&&c[0]>=3?c[1]/c[0]:1}function Yr(o,c,f,p){let v=T[o.pat.stops[f]].id;if([...Ye.st,...ke.st].includes(v)){let y=Jn(o.pat.stops[f]).find(C=>String(C.num)===String(o.num));if(y&&!y.gone)return y.est}return Gh(o,c,f,0,p)}function Bp(o,c){if(!o||!c||c.pre||c.dObs==null||c.err==null||c.err>.6)return null;let f=Date.now()/1e3-c.ts;if(f>150||f<-30||(c.still||0)>=90)return null;let p=ee(o.pat).stopD,v=o.pat.t,y,C,L=p.reduce((P,U,V)=>Math.abs(U-c.dObs)<Math.abs(p[P]-c.dObs)?V:P,0);if(Math.abs(p[L]-c.dObs)<.16||c.atStop===L)y=v[2*L+1]??v[2*L],C=L;else{let P=p.findIndex(V=>V>c.dObs);if(P<=0)return null;let U=Math.min(1,Math.max(0,(c.dObs-p[P-1])/(p[P]-p[P-1]||1)));y=v[2*P-1]+U*(v[2*P]-v[2*P-1]),C=P-1}return{t:St(new Date).min-f/60,tpos:y,j0:C,sd:p}}function Gh(o,c,f,p,v){let y=Bp(o,c);if(!y||f<=y.j0&&!(f===y.j0&&p===1))return v;let C=o.pat.t,L=y.t+(C[2*f+p]??C[2*f])-y.tpos;if(L-y.t>45)return v;let P=(v%1440+1440)%1440,U=((L-P+720)%1440+1440)%1440-720;return U>=-3&&U<=5?v+U:v}function W1(o,c,f,p){let v=Bp(o,c);if(!v)return null;let y=Gh(o,c,f,1,v.t+o.pat.t[2*f+1]-v.tpos);return y-p.min>30||y<p.min-1?null:y}function Jn(o,c){let f=Qt(),p=(E()||F())&&f.live&&!c,v=Ft.get(T[o].id),y=[],C=new Map([...G.vp.values()].map(P=>[String((pt.get(P.tid)||{}).num||P.num),P]));if(p&&v&&v.d&&Array.isArray(v.d.trains)&&v.d.trains.length)for(let P of v.d.trains){let U=(P.departureDateHourSelectedStation||"").slice(11,16);if(!U)continue;let V=String(P.commercialNumber||P.technicalNumber||""),_=C.get(V),M=_?G.delays.get(_.tid):null,A=Math.max(typeof M=="number"?Math.max(0,M/60):0,_&&_.pre&&_.preDl||0),O=Fp(U);O<f.min-720&&(O+=1440);let et=+(P.departureDateHourSelectedStation||"").slice(17,19)||0,nt=O+et/60,z=_&&pt.get(_.tid)||As(V),at=z?z.pat.stops.indexOf(o):-1,W=at>=0?(z.t0+z.pat.t[2*at+1])%1440:null;if(W!=null){for(;W<nt-720;)W+=1440;for(;W>nt+720;)W-=1440;Math.abs(nt-W)>120&&(W=null)}let ne,Se;W==null?(ne=et||!A?nt:nt+A,Se=et?0:A):et||Math.abs(nt-W)>=1?(ne=nt,Se=Math.max(0,nt-W)):(ne=W+A,Se=A);let Zt=!1;if(z&&!_&&at>0&&!et){let $e=t.days.indexOf(f.ymd),Te=z.day===$e-1?1440:z.day===$e+1?-1440:0,Le=z.t0+z.pat.t[1]-Te;if(f.min<Le){let Ke=Le+(z.pat.t[2*at+1]-z.pat.t[1]);Ke>ne+1&&(ne=Ke,Zt=!0,W!=null&&(Se=Math.max(0,ne-W)))}}if(W!=null&&(O=Math.round(W)),_&&z&&at>=0){let $e=Gh(z,_,at,1,ne);$e!==ne&&(ne=Math.max($e,f.min),W!=null&&(Se=Math.max(0,ne-W)))}y.push({dubious:Zt,rodLive:!!et,sm:O,est:ne,dl:Se,fam:(P.line||{}).id||"",dest:(P.destinationStation||{}).name||"",destId:(P.destinationStation||{}).id||"",plat:P.platformSelectedStation||"",cancel:!!P.trainCancelled,obs:P.trainObservations||"",live:!!_,num:V,tid:_?_.tid:"",tr:_&&pt.get(_.tid)||As(V),src:"oficial"})}else{let P=t.days.indexOf(f.ymd);if(P<0)return y;let U=(V,_)=>{for(let M of V){let A=M.pat.stops.indexOf(o);if(A<0||A===M.pat.stops.length-1)continue;let O=gt(M),et=typeof O=="number"?Math.max(0,O/60):0,nt=M.t0+M.pat.t[2*A+1]-_;if(nt+et<f.min-1||nt>f.min+(f.min>1080||f.min<300?600:360))continue;let z=M.pat.stops[M.pat.stops.length-1];y.push({sm:nt,est:nt+et,dl:et,fam:M.fam,dest:T[z].n,destId:T[z].id,plat:"",cancel:O==="X",obs:"",live:G.vp.has(M.tid),num:M.num,tid:M.tid,tr:M,src:"horario"})}};U(it[P],0),P>0&&U(it[P-1],1440),P+1<t.days.length&&f.min>1080&&U(it[P+1],-1440)}if(p){let P=new Set(y.map(_=>String(_.num))),U=t.days.indexOf(f.ymd),V=(_,M)=>{for(let A of _||[]){if(P.has(String(A.num)))continue;let O=A.pat.stops.indexOf(o);if(O<0||O===A.pat.stops.length-1)continue;let et=A.t0+A.pat.t[2*O+1]-M;if(et<f.min-45||et>f.min+1||!G.vp.get(A.tid))continue;let z=G.delays.get(A.tid),at=typeof z=="number"?Math.max(0,z/60):0,W=A.pat.stops[A.pat.stops.length-1];y.push({sm:et,est:et+at,dl:at,fam:A.fam,dest:T[W].n,destId:T[W].id,plat:"",cancel:!1,obs:"",live:!0,num:A.num,tid:A.tid,tr:A,src:"horario"})}};U>=0&&(V(it[U],0),U>0&&V(it[U-1],1440));for(let _ of y){let M=_.tid&&G.vp.get(_.tid),A=_.tr?_.tr.pat.stops.indexOf(o):-1;_.passed=!!(M&&A>=0&&!M.pre&&M.next!=null&&M.next>=0&&M.next>A&&M.atStop!==A),!_.passed&&_.live&&_.est<f.min&&(_.est=f.min,_.late=!0),_.passed&&(_.gone=!0)}}let L=y.filter(P=>P.gone?f.min-P.est<20:P.est>=f.min-.5).sort((P,U)=>P.est-U.est);{let P=L.filter(U=>U.gone);if(P.length>2){let U=new Set(P.slice(0,P.length-2));L=L.filter(V=>!U.has(V))}}if(!L.filter(P=>!P.gone).length&&y.length&&y[0].src==="oficial"&&!c)return Jn(o,!0);for(let P of L){let U=P.num&&zh(P.num);U&&U.cx&&(P.cancel=!0,P.cxWhy=U.txt)}if(E()&&f.live){let P=t.days.indexOf(f.ymd);for(let U of L){if(U.live||U.cancel||!U.tr)continue;let V=U.tr.day===P-1?1440:U.tr.day===P+1?-1440:0,_=U.tr.t0+U.tr.pat.t[1]-V+(U.dl||0);U.noPos=f.min>_+3&&!U.rodLive,U.ghost=U.noPos&&po(U.fam)>=.7}}if(c||(L=L.concat(R(o,f.min-.5,f.min+360)).sort((P,U)=>P.est-U.est)),!c&&L.some(P=>P.src==="oficial")){let P=y.filter(_=>_.src==="oficial"),U=Math.max(...P.map(_=>_.sm)),V=new Set(L.map(_=>String(_.num)));L=L.concat(Jn(o,!0).filter(_=>!_.gone&&_.sm<=U&&_.est>=f.min-.5&&!V.has(String(_.num))).map(_=>Object.assign(_,{unconf:!0}))).sort((_,M)=>_.est-M.est)}if(L.some(P=>P.src==="oficial")){let P=Math.max(...L.map(V=>V.sm)),U=new Set(L.map(V=>String(V.num)));L=L.concat(Jn(o,!0).filter(V=>V.sm>P&&!U.has(String(V.num))))}return L}let kp=(o,c,f,p)=>{let v={key:o,ico:c,name:f,st:[],i:0,walk:10,open:!1};try{let y=JSON.parse(localStorage.getItem("rod_"+o)||"null");y&&Object.assign(v,y)}catch{}return!v.st.length&&p&&(v.st=p),v},Ye=kp("home","\u{1F3E0}",__t(340),null),ke=kp("work","\u{1F4BC}",__t(341),null),It={key:"near",ico:"\u{1F4CD}",name:__t(342),st:[],i:0,walk:0,open:!1,dist:{},fix:0,err:""};try{let o=t.days.indexOf(Qt().ymd),c=[...Ye.st,...ke.st],f=!1;if(o>=0)for(let p of pi){if(c.includes(p.sid))continue;let v=Wr(p,o);if(!v)continue;let y=Cp(v);y==null||!c.includes(T[y].id)||(p.sid=T[y].id,p.t=st(v.t0+v.pat.t[2*v.pat.stops.indexOf(y)+1]),p.num=String(v.num),f=!0)}f&&Tp()}catch{}let Cs=[It,Ye,ke];try{It.homeW=JSON.parse(localStorage.getItem("rod_homew")||"null")}catch{}Ye.open=!1,ke.open=!1;function $p(o,c){let f=wt(o,c),p=wt(o,c+.009);return 1/Math.hypot(p[0]-f[0],p[1]-f[1])}function Wh(o){if(!navigator.geolocation){It.err=__t(343),ye(!0);return}navigator.geolocation.getCurrentPosition(c=>{let{longitude:f,latitude:p}=c.coords,v=wt(f,p),y=$p(f,p),C=T.map((V,_)=>[_,Math.hypot(V.w[0]-v[0],V.w[1]-v[1])*y]).filter(([V])=>T[V].fams.size).sort((V,_)=>V[1]-_[1]),L=C.filter(([,V],_)=>_===0||V<Math.max(2.5,C[0][1]*1.6)).slice(0,3),P=It.st[0]!==T[L[0][0]].id;It.w=v,It.k=y,It.acc=c.coords.accuracy!=null?c.coords.accuracy:999,It.st=L.map(([V])=>T[V].id),It.dist=Object.fromEntries(L.map(([V,_])=>[T[V].id,_])),It.fix=Date.now(),It.err="",P&&(It.i=0);let U=[Ye,ke].find(V=>V.st.includes(It.st[0])&&It.dist[It.st[0]]<1.5);ye(!0)},c=>{It.err=c.code===1?__t(344):__t(345),ye(!0)},{enableHighAccuracy:!1,maximumAge:6e4,timeout:12e3})}let zp=o=>Math.max(1,Math.round(o*1.3/.08));setTimeout(()=>Wh(!0),400);let mt={fixes:[],tid:"",no:new Map,shown:""};try{let o=JSON.parse(localStorage.getItem("rod_onb")||"null");o&&o.tid&&Date.now()-o.at<3*36e5&&o.ymd===St(new Date).ymd&&(mt.tid=o.tid,mt.manual=o.manual||0,mt.lock=!!o.lock)}catch{}let Vp="";setInterval(()=>{let o=mt.tid+"|"+(mt.manual||0)+"|"+(mt.lock?1:0);if(o!==Vp){Vp=o;try{mt.tid?localStorage.setItem("rod_onb",JSON.stringify({tid:mt.tid,manual:mt.manual||0,lock:!!mt.lock,at:Date.now(),ymd:St(new Date).ymd})):localStorage.removeItem("rod_onb")}catch{}}},1500);let Rn={num:"",until:0};function jl(o){return!!o&&(Nt===o||o.num!=null&&([...ln.values()].some(c=>String(c)===String(o.num))||String(mt.tid)===String(o.num)))}let Hp=()=>{let o=new Set([...ln.values()].map(String));return Rn.num&&Rn.until>Date.now()&&o.add(Rn.num),o};function Xh(o,c){return!!o&&o.est-c.min<=3&&c.min-o.est<=20}function qh(o){Ve(o?`${__t(346)} (${o})`:__t(346))}function Jr(o,c,f){if(o=String(o),mt.tid&&mt.tid!==o){mt.no.set(mt.tid,Date.now()+20*6e4);let y=jn.findIndex(C=>C.num===String(mt.tid)&&C.d===Qt().ymd&&Date.now()-C.t0<3*36e5);if(y>=0){jn.splice(y,1),jr.s=0;try{localStorage.setItem("rod_trips",JSON.stringify(jn,(C,L)=>C==="_n"?void 0:L))}catch{}}}mt.tid=o,mt.cand=null,mt.lock=c==="lock",mt.manual=c==="auto"?0:Date.now()+(c==="lock"?4*36e5:90*6e4),[...ln].forEach(([y,C])=>{String(C)!==o&&ii(y,null)}),Rn.num=o,Rn.until=Date.now()+90*6e4;let p=new Set;for(let y of Cs){let C=Tn(y);C!=null&&(y.platAt||y.goAt||y===It&&It.st&&It.st.length)&&p.add(C)}mt.from=[...p][0]??(f?(y=>y?Tn(y):null)(Cs.find(y=>y.key===f)):null);for(let y of Cs)(y.platAt||y.goAt||c!=="auto"&&y.open)&&(y.platAt=0,y.goAt=0,c!=="auto"&&(y.open=!1),mi(y));window.__lpAt=Date.now();let v=re.find(y=>y.tr&&String(y.tr.num)===o)||I(Qt()).out.find(y=>y.tr&&String(y.tr.num)===o);if(c!=="auto"){let y=v?v.tr:As(o);if(y){Nt=y,bt=y,me=-1,He.sk="t"+(y.num||y.vtid),Ot=_e=Ct=!1,d._h="";try{Ie(),a()}catch{}}if(![...ln.values()].some(C=>String(C)===o)){let C=f||null,L=1e9;if(!C)for(let P of[Ye,ke,It]){let U=Tn(P),V=U!=null?Jn(U).find(_=>String(_.num)===o&&!_.gone):null;V&&V.est<L&&(L=V.est,C=P.key)}C&&ii(C,o)}}if(v){Nt=v.tr;let y=v.tr.pat.stops,C=(()=>{let U=Math.max(v.real&&v.v&&v.v.next>=0?v.v.next:-1,v.p&&v.p.next>=0?v.p.next:-1),V=mt.fixes[mt.fixes.length-1];if(V&&Date.now()-V.t<12e4){let _=-1,M=.6;y.forEach((A,O)=>{let et=Math.hypot(T[A].w[0]-V.w[0],T[A].w[1]-V.w[1])*V.k;et<M&&(M=et,_=O)}),_>=0&&(U=Math.max(U,_))}for(let _ of p){let M=y.indexOf(_);M>=0&&(U=Math.max(U,M))}return U<0?1:U})(),L=[...Ye.st,...ke.st,...Kl.keys()],P=y.findIndex((U,V)=>V>=C&&!p.has(U)&&L.includes(T[U].id));P>0&&!(xe&&xe.num===o)&&(xe={num:o,sid:T[y[P]].id,at:Date.now()},Es())}return v}function I_(){let o=mt.fixes;if(o.length<2)return;let c=o[o.length-1],f=o.slice().reverse().find(A=>c.t-A.t>=8e3&&c.t-A.t<=9e4);if(!f)return;let p=Math.hypot(c.w[0]-f.w[0],c.w[1]-f.w[1])*c.k,v=c.spd!=null&&c.spd>0?c.spd*3.6:p/((c.t-f.t)/36e5);if(c.acc!=null&&c.acc>100)return;if(mt.tid&&v<8){if(!mt.slow)mt.slow=c.t;else if(c.t-mt.slow>9e4){let A=T.map((z,at)=>[at,z.w?Math.hypot(z.w[0]-c.w[0],z.w[1]-c.w[1])*c.k:99]).filter(z=>z[1]<.35).sort((z,at)=>z[1]-at[1])[0],O=re.find(z=>z.tr&&String(z.tr.num)===mt.tid),et=O&&(O.real&&O.v&&O.v.w?O.v.w:O.p&&O.p.w),nt=et?Math.hypot(et[0]-c.w[0],et[1]-c.w[1])*c.k>1:!0;if(A&&(!mt.lock||nt)){let z=mt.tid,at=jn.find(W=>W.num===z&&W.d===Qt().ymd);if(at){at.b=T[A[0]].id,at.done=!0;try{localStorage.setItem("rod_trips",JSON.stringify(jn,(W,ne)=>W==="_n"?void 0:ne))}catch{}}mt.no.set(z,Date.now()+90*6e4),mt.tid="",mt.manual=0,mt.lock=!1,mt.slow=0,mt.quiet=Date.now()+10*6e4,Nt=null,[...ln].forEach(([W,ne])=>{String(ne)===z&&ii(W,null)}),Rn.num===z&&(Rn.num="");try{saveOnbState&&saveOnbState()}catch{}ye(!0);return}}}else mt.slow=0;if(!mt.tid&&mt.quiet&&Date.now()<mt.quiet||mt.manual&&Date.now()<mt.manual)return;if(mt.tid){if(v<22)return;let A=re.find(O=>O.tr&&String(O.tr.num)===mt.tid)||I(Qt()).out.find(O=>O.tr&&String(O.tr.num)===mt.tid);if(A){if(Math.hypot(A.p.w[0]-c.w[0],A.p.w[1]-c.w[1])*c.k<=5){mt.far=0;return}if(mt.far||(mt.far=c.t),c.t-mt.far<12e4)return}mt.far=0}let y=Hp();if(!mt.tid&&y.size&&v>=15&&v<=200&&!(c.acc!=null&&c.acc>80))for(let A of[...re.filter(O=>O.real),...I(Qt()).out]){if(!A.tr||!y.has(String(A.tr.num))||(mt.no.get(String(A.tr.num))||0)>Date.now())continue;if(Math.hypot(A.p.w[0]-c.w[0],A.p.w[1]-c.w[1])*c.k<=(A.real?1.6:2.2)){Gp(A);return}}if(v<22||v>200)return;let C=[c.w[0]-f.w[0],c.w[1]-f.w[1]],L=null,P=2.5,U=re.filter(A=>A.real),V=I(Qt()).out.filter(A=>A.tr&&!U.some(O=>O.tr&&String(O.tr.num)===String(A.tr.num))),_=Hp();for(let A of[...U,...V]){if(!A.tr||_.size&&!_.has(String(A.tr.num)))continue;let O=A.real?2.5:3.5,et=Math.hypot(A.p.w[0]-c.w[0],A.p.w[1]-c.w[1])*c.k;if(et>Math.min(P,O)||L&&L.real&&!A.real)continue;let nt=A.real?A.v.next:A.p.next;if(nt==null||nt<0)continue;let z=T[A.tr.pat.stops[nt]].w,at=[z[0]-A.p.w[0],z[1]-A.p.w[1]];if(at[0]*C[0]+at[1]*C[1]<=0)continue;let W=String(A.tr.num);(mt.no.get(W)||0)>Date.now()||(P=et,L=A)}if(!L){mt.cand=null;return}let M=String(L.tr.num);if(mt.tid!==M&&!(c.acc!=null&&c.acc>50)){if(!mt.cand||mt.cand.k!==M){mt.cand={k:M,t:c.t};return}c.t-mt.cand.t<2e4||Gp(L)}}function Gp(o){let c=String(o.tr.num);Jr(c,"auto"),Ot=_e=Ct=!1,me=-1,bt=o.tr,Nt=o.tr,Object.assign(s,{tx:o.p.w[0],ty:o.p.w[1],dist:Math.min(s.dist,22)}),innerWidth<=640&&(d.classList.add("peek"),x("#rc").classList.contains("min")||x("#rcgrab").click()),Hn(),d._h="",Ie(),be=0,a();let f=x("#onb");f||(f=document.createElement("div"),f.id="onb",document.body.appendChild(f)),f.innerHTML=`${__t(347)}${m(o.tr.fam)} ${m(o.tr.num)}${__t(348)}${m(T[o.tr.pat.stops[o.tr.pat.stops.length-1]].n)}${__t(349)}${xe&&xe.num===c?`${__t(351)}${m(T[kt.get(xe.sid)].n)}`:""}${__t(350)}`,f.className="on",f.querySelector("[data-onb-no]").onclick=()=>{mt.no.set(c,Date.now()+20*6e4),mt.tid="",mt.lock=!1,Nt=null,bt=null,d._h="",Ie(),f.className=""},f.querySelector("[data-onb-x]").onclick=()=>{f.className=""},setTimeout(()=>{f.className=""},15e3)}if(navigator.geolocation&&navigator.geolocation.watchPosition){let o=null,c=null,f=0,p=Date.now()+45e3,v=()=>!!(Cs.some(U=>U.goAt)||f>Date.now()&&!mt.lock||p>Date.now()&&!mt.tid),y=U=>{let{longitude:V,latitude:_}=U.coords,M={t:U.timestamp||Date.now(),w:wt(V,_),k:$p(V,_),spd:U.coords.speed,acc:U.coords.accuracy};if(!(mt.fixes.length&&mt.fixes[mt.fixes.length-1].t===M.t)){mt.fixes.push(M),mt.fixes=mt.fixes.filter(A=>M.t-A.t<12e4);{let A=mt.fixes.find(et=>M.t-et.t>=2e4),O=M.spd!=null&&M.spd>0?M.spd*3.6:A?Math.hypot(M.w[0]-A.w[0],M.w[1]-A.w[1])*M.k/((M.t-A.t)/36e5):0;O>=15&&O<250&&(M.acc==null||M.acc<300)&&(f=Date.now()+10*6e4)}try{Qt().live&&I_()}catch{}}},C=0,L=()=>{if(!(o!=null||C))if(c=v(),c)o=navigator.geolocation.watchPosition(y,()=>{},{enableHighAccuracy:!0,maximumAge:5e3,timeout:2e4});else{let U=()=>navigator.geolocation.getCurrentPosition(y,()=>{},{enableHighAccuracy:!1,maximumAge:55e3,timeout:2e4});U(),C=setInterval(U,6e4)}};setInterval(()=>{(o!=null||C)&&v()!==c&&(P(),L())},5e3);let P=()=>{o!=null&&(navigator.geolocation.clearWatch(o),o=null),C&&(clearInterval(C),C=0)};setTimeout(L,3e3),document.addEventListener("visibilitychange",()=>{document.hidden?P():(mt.fixes=[],p=Date.now()+45e3,L())})}setInterval(()=>{!document.hidden&&(Date.now()-It.fix>11e4||Cs.some(o=>o.goAt))&&Wh(!1)},3e4);let mi=o=>{try{localStorage.setItem("rod_"+o.key,JSON.stringify({st:o.st,i:o.i,walk:o.walk,open:o.open,hide:o.hide||"",goAt:o.goAt||0,platAt:o.platAt||0,xfer:o.xfer||null}))}catch{}},Tn=o=>o.st.length?kt.get(o.st[o.i]||o.st[0]):null;function Wp(o,c,f,p){if(p&&c.bus)return c.bstops.slice(1).some(C=>p.has(C))?"to":"out";if(p&&c.tr){let C=c.tr.pat.stops,L=C.indexOf(o);if(L>=0&&C.slice(L+1).some(P=>p.has(P)))return"to"}if(p&&c.tr)return"out";let v=kt.get(c.destId)??T.findIndex(C=>C.n===c.dest);if(v<0||v==null||f==null)return"otros";let y=C=>Math.hypot(T[C].w[0]-T[f].w[0],T[C].w[1]-T[f].w[1]);return y(v)<y(o)?"to":"out"}let mr=o=>o<1?__t(313):o<60?Math.floor(o)+" min":Math.floor(o/60)+" h "+String(Math.floor(o%60)).padStart(2,"0"),Xp=0,P_=/sin servicio|sense servei|suspend|interromp|interrump|no circula|no se puede garantizar|no es pot garantir/i,qp=/sin servicio|sense servei|suspend|interromp|interrump|no circula|no hi ha circulaci|cortad|tallad|corte de|tall de|servicio alternativo|servei alternatiu|por carretera|per carretera|no se puede garantizar|no es pot garantir/i,Yp=/huelga|vaga\b|strike|servicios? m[ií]nimos|serveis m[ií]nims|demora|retard|retras|v[ií]a [uú]nica|una sola v[ií]a|incidencia|incidència|aver[ií]a|avaria|aturad|detenid|parad[oa]s? en|velocidad reducida|velocitat redu/i,mo=o=>{let c=o.es||o.txt;return qp.test(c)||qp.test(o.txt)?3:Yp.test(c)||Yp.test(o.txt)||o.lvl>=2?2:1},Jp=4,Yh=new Map,Kl=new Map;function Zp(o,c){let f=t.days.indexOf(Qt().ymd),p=f+"|"+o+"|"+[...c].join(",");if(Yh.has(p))return Yh.get(p);let v=!1,y=new Set,C=new Set;for(let P of it[f]||[]){let U=P.pat.stops,V=U.indexOf(o);if(V>=0)for(let M=V+1;M<U.length;M++){if(c.has(U[M])){v=!0;break}y.add(U[M])}let _=-1;for(let M=1;M<U.length;M++)if(c.has(U[M])){_=M;break}if(_>0)for(let M=0;M<_;M++)C.add(U[M])}let L=v?null:[...y].filter(P=>C.has(P)&&P!==o&&!c.has(P));return Yh.set(p,L),L}function Jh(o,c,f,p){for(let v of p||Jn(o)){if(v.cancel||v.gone||!v.tr||v.est<c-.01)continue;let y=v.tr.pat.stops,C=y.indexOf(o);if(C<0)continue;let L=-1;for(let P=C+1;P<y.length;P++)if(f.has(y[P])){L=P;break}if(!(L<0))return{c:v,fin:v.est+(v.tr.pat.t[2*L]-v.tr.pat.t[2*C+1])}}return null}function L_(o,c,f){let p=Jh(o,c+2,f,Jn(o));return p?{c:p.c,fin:p.fin,m:p.c.est-c,lost:!1}:null}function Zh(o,c,f,p,v){let y=null,C=new Map,L=Jn(o).filter(P=>!P.cancel&&!P.gone&&P.tr&&P.est-v.min>=p).slice(0,8);for(let P of L){let U=P.tr.pat.stops,V=U.indexOf(o);if(!(V<0))for(let _ of f){let M=U.indexOf(_);if(M<=V)continue;let A=P.est+(P.tr.pat.t[2*M]-P.tr.pat.t[2*V+1]);C.has(_)||C.set(_,Jn(_));let O=Jh(_,A+Jp,c,C.get(_));O&&(!y||O.fin<y.finAt-.01||Math.abs(O.fin-y.finAt)<.01&&P.est>y.x.est)&&(y={T:_,x:P,finAt:O.fin})}}return y}function D_(o,c,f,p,v){let y=c.T,C=Jn(y),L=c.fin,P=[];for(let _ of C){if(P.length>=5)break;if(_.cancel||_.gone||!_.tr)continue;let M=_.tr.pat.stops,A=M.indexOf(y),O=-1;for(let z=A+1;z<M.length;z++)if(L.has(M[z])){O=z;break}if(O<0||f.x&&f.x.arr!=null&&_.est<f.x.arr-.01)continue;let et=_.est+(_.tr.pat.t[2*O]-_.tr.pat.t[2*A+1]),nt=p&&p.c===_;P.push(`<li class="hr${nt?" pin":""}" style="--lc:${Y[_.fam]||"#6b7385"}"><span class="hrt"><b>${st(_.est)}</b><small>${f.x&&f.x.arr!=null?_.est-f.x.arr<2?__t(352):Math.floor(_.est-f.x.arr)+" "+__t(353):""}</small></span><span class="hrd">${Ci(_.fam+" \xB7 "+_.dest,_.fam)}<small class="hro">${__t(354)} ${st(et)}${_.num?" \xB7 "+__t(355)+m(_.num):""}</small></span><span class="hrm">${_.dl>=1?`<em class="dl ${Fi(_.dl)}">+${Math.round(_.dl)}</em>`:""}${_.plat?`${__t(265)}${m(_.plat)}</i>`:""}</span></li>`)}let U=(()=>{let _=[];for(let M of c.cands){let A=Zh(Tn(o),L,[M],0,v);A&&_.push([M,A.finAt])}return _.sort((M,A)=>M[1]-A[1]),_.filter(([M,A])=>A<=_[0][1]+30||c.fixed&&M===y).slice(0,4)})(),V=U.length>1||c.fixed?`<div class="hxst"><span>${__t(356)}:</span><button type="button" data-hxf="${o.key}:" class="${c.fixed?"":"on"}">${__t(357)}</button>${U.map(([_])=>`<button type="button" data-hxf="${o.key}:${m(T[_].id)}" class="${c.fixed&&_===y?"on":""}">${m(T[_].n)}</button>`).join("")}</div>`:"";return`<div class="hxfer"><div class="hdir">\u21C4 ${__t(356)} ${Ci(T[y].n,p?p.c.fam:"")} \u2192 ${m(c.finName)}</div><ol class="hxl">${P.join("")||`<li class="hr"><span class="hrd">${__t(358)}</span></li>`}</ol>${V}</div>`}let jp=new Set;function N_(o,c,f){jp.has(o)||(jp.add(o),om(c,f,o))}function U_(o,c,f){let p=Tn(o);if(o===It){if(mt.tid)return"";if(p==null)return`${__t(359)}${It.err?m(It.err)+__t(360):__t(361)}</small></span><span class="hchev">\u27F3</span></button></div>`;if([Ye,ke].find(Pt=>Pt.st.includes(It.st[0])&&It.dist[It.st[0]]<1.5)||Date.now()-It.fix>10*6e4)return"";o.walk=zp(It.dist[o.st[o.i]]||0)}if(p==null){let tt=It.st.length?kt.get(It.st[0]):null,Pt=o===ke?Ye:ke,Vt=tt!=null&&!Pt.st.includes(It.st[0]);return`<div class="hplace"><div class="hhead hnew"><span class="hico">${o.ico}</span><span class="htit"><b>${o.name}</b><small>${Vt?`${__t(362)}${m(T[tt].n)}</b>`:__t(363)}</small></span>${Vt?`<button type="button" class="hpick" data-hnear="${o.key}${__t(364)}`:""}<button type="button" class="hpick alt" data-hset="${o.key}">${Vt?__t(365):__t(366)}</button></div></div>`}Op(p,()=>ye(!0));let v=o===It?null:o===Ye?ke:Ye,y=v?Tn(v):null,C=y!=null&&y!==p?y:R_,L=y!=null&&y!==p?v===ke?__t(367):"casa":"Barcelona",P=T[p].fams,U=new Set([...P].filter(tt=>dt.has(tt))),V=U.size<P.size,_=!1;U.size||(U=new Set(P),V=!1,_=!0);let M=It.w?Math.hypot(T[p].w[0]-It.w[0],T[p].w[1]-It.w[1])*It.k:null,A=M!=null&&Date.now()-It.fix<10*6e4;o.platAt&&Date.now()-o.platAt>45*6e4&&(o.platAt=0,mi(o)),mt.tid&&o.platAt&&(o.platAt=0,mi(o));let O=o!==It&&!!o.platAt&&!mt.tid,et=o===It||A&&M>3&&!o.goAt&&!O,nt=O||o!==It&&A&&(M<.08&&It.acc<=40||M<.15&&It.acc<=100&&Date.now()-It.fix<3*6e4)&&!(o===Ye&&It.homeW&&Math.hypot(It.homeW[0]-It.w[0],It.homeW[1]-It.w[1])*It.k<.05),z=o.goAt?(Date.now()-o.goAt)/6e4:null;z!=null&&(z>60||nt)&&(o.goAt=0,mi(o)),A&&o!==It&&It.fix!==o._khFix&&(o._khFix=It.fix,(o._kh=(o._kh||[]).filter(tt=>Date.now()-tt.t<6*6e4)).push({t:Date.now(),km:M}));let at=A&&o!==It&&M<=3&&!(o._noWay>Date.now())&&(o._kh||[]).some(tt=>Date.now()-tt.t>=6e4&&Date.now()-tt.t<=5*6e4&&tt.km-M>=.08),W=!nt&&o!==It&&(at||!!o.goAt),ne=W?A&&M<=3?zp(M):Math.max(0,o.walk-z):0,Se=Jn(p),Zt=Se.filter(tt=>!Y[tt.fam]||dt.has(tt.fam)||_),$e=et||nt?0:W?ne:o.walk,Te=G.alerts.filter(tt=>[...tt.fams].some(Pt=>U.has(Pt))||tt.stops&&tt.stops.has(p)),Le=Te.some(tt=>P_.test(tt.es||tt.txt)),Ke={to:[],out:[],otros:[],all:Zt},ze=L!=="Barcelona"?new Set(v.st.map(tt=>kt.get(tt)).filter(tt=>tt!=null)):null,xn=null;if(ze&&o!==It){let tt=Zp(p,ze);if(tt&&tt.length){let Pt=o.xfer!=null?kt.get(o.xfer):null,Vt=Pt!=null&&tt.includes(Pt)?[Pt]:tt,ae=Zh(p,ze,Vt,$e,c);ae&&(xn=Object.assign(ae,{fin:ze,finName:T[C].n,cands:tt,fixed:Pt!=null&&tt.includes(Pt)}),Op(ae.T,()=>ye(!0)),C=ae.T,ze=new Set([ae.T]))}}Zt.forEach(tt=>Ke[Wp(p,tt,C,ze)].push(tt));let vr="";if(ze&&!Ke.to.length&&Zt.length<Se.length){let tt=Se.filter(Pt=>!Zt.includes(Pt)&&Wp(p,Pt,C,ze)==="to");tt.length&&(Ke.to=tt,vr=[...new Set(tt.map(Pt=>Pt.fam))].sort(B).join(", "))}let tx=tt=>{if(tt==="all")return __t(368);let Pt=ae=>(ae.find(vn=>vn.fam)||{}).fam;if(tt==="to")return __t(369)+Ci(L==="Barcelona"?"Barcelona":T[C].n,Pt(Ke.to)||[...U][0])+(()=>{let ae=V&&!vr?[...U].filter(vn=>Ke.to.some(ri=>ri.fam===vn)).sort(B):[];return ae.length?`<span class="hwf" title="${__t(370)}">${ae.map(En).join("")}</span>`:""})();let Vt=[];for(let ae of Ke[tt])Vt.some(vn=>vn[0]===ae.dest)||Vt.push([ae.dest,ae.fam]);return Vt.length?__t(369)+Vt.slice(0,2).map(([ae,vn])=>Ci(ae,vn)).join(" "):__t(371)},Ws=ln.get(o.key);Ws&&!Se.some(tt=>String(tt.num)===Ws&&!tt.gone)&&(Rn.num=Ws,Rn.until=Date.now()+90*6e4,ii(o.key,null));let ea=tt=>{let Pt=Ws&&Ke[tt].find(rn=>String(rn.num)===Ws&&!rn.gone);if(Pt&&Pt.cancel)return{cls:"v-miss",pin:1,x:Pt,big:__t(372),small:`${st(Pt.est)} \xB7 ${Pt.fam}${__t(373)}${Pt.dest}${Pt.num?" \xB7 "+__t(355)+Pt.num:""}`,warn:""};let Vt=Pt||Ke[tt].find(rn=>!rn.cancel&&!rn.gone&&rn.est-c.min>=$e);if(!Vt){let rn=Ke[tt].find(pn=>!pn.cancel);return rn&&!et?{cls:"v-miss",big:__t(374),small:`${__t(375)}${st(rn.est)}${__t(376)}${mr(rn.est-c.min)}${__t(377)}`}:{cls:"v-no",big:__t(378),small:__t(379)}}let ae=Vt.est-c.min-$e,vn=et||nt?"v-info":W?ae<1.5?"v-warn":"v-ok":ae<1.5?"v-bad":ae<5?"v-warn":"v-ok",ri=Vt.ghost?Ke[tt].find(rn=>!rn.cancel&&!rn.ghost&&rn.live&&rn.est>Vt.est):null;if(Pt&&ae<0&&!et&&!nt){let rn=Ke[tt].find(pn=>!pn.cancel&&!pn.gone&&!pn.ghost&&pn!==Vt&&pn.est-c.min>=$e);return{cls:"v-miss",pin:1,miss:1,nxt:rn,x:Vt,ghost:!!Vt.ghost,big:__t(380),small:`${st(Vt.est)} \xB7 ${Vt.fam}${__t(373)}${Vt.dest}${Vt.plat?__t(179)+Vt.plat:""}${Vt.num?" \xB7 "+__t(355)+Vt.num:""}`,warn:rn?`\u27A1\uFE0F ${__t(381)}: ${rn.est-c.min-$e<1?__t(382):__t(383)+" "+mr(rn.est-c.min-$e)} \xB7 ${st(rn.est)}${rn.arr!=null?" \u2192 "+st(rn.arr):""}${rn.plat?__t(179)+rn.plat:""}${rn.num?" \xB7 "+__t(355)+rn.num:""}`:""}}return{pin:Pt?1:0,cls:vn,ghost:!!Vt.ghost,soft:!Vt.live&&!Vt.ghost&&!Vt.unconf&&!Vt.cancel?Vt.rodLive?__t(384):__t(385):"",big:et||nt?ae<1?__t(386):__t(387)+mr(ae):W?ae<1.5?__t(388):__t(389)+mr(ae)+__t(390):ae<1.5?__t(391):__t(392)+mr(ae),warn:Vt.unconf?"\u26A0\uFE0F "+__t(393):Pt&&!Vt.live&&Vt.rodLive&&!Vt.ghost||!Vt.ghost&&Vt.noPos&&Pt?"":!Vt.ghost&&Vt.late&&Pt?__t(394):Vt.ghost?`\u26A0\uFE0F ${__t(395)}${ri?`${__t(396)}${st(ri.est)}`:""}`:Le?__t(397):"",small:`${Vt.bus?__t(398):""}${st(Vt.est)} \xB7 ${Vt.fam}${__t(373)}${Vt.dest}${Vt.plat?__t(179)+Vt.plat:""}${Vt.dl>=1?` \xB7 +${Math.round(Vt.dl)} min`:""}${Vt.arr!=null?`${__t(399)}${st(Vt.arr)}`:""}${Vt.num?" \xB7 "+__t(355)+Vt.num:""}`,x:Vt}},ex=ze||new Set([C]),nx=tt=>{let Pt=tt.tr;if(!Pt)return null;let Vt=Pt.pat.stops,ae=Vt.indexOf(p);if(ae<0)return null;let vn=-1;for(let ri=ae+1;ri<Vt.length;ri++)if(ex.has(Vt[ri])){vn=ri;break}return vn<0?null:tt.est+(Pt.pat.t[2*vn]-Pt.pat.t[2*ae+1])};Ke.to.forEach(tt=>{tt.arr=nx(tt)});let ac=Ke.out.length?"out":"otros",Qe=ea("to"),So=ea(ac);if(nt||o===It&&It.acc<=40&&(It.dist[o.st[o.i]]||9)<.08){for(let tt of[Qe.x,So.x].concat(o===It?[ea("all").x]:[]))if(tt&&ln.has(o.key)&&String(ln.get(o.key))===String(tt.num)&&!tt.cancel&&tt.est-c.min<=2&&tt.est-c.min>-.5){let Pt="w"+tt.num+"|"+Math.round(tt.sm);am.has(Pt)||(am.add(Pt),Yl(`${__t(400)}${tt.fam}${__t(373)}${tt.dest}`,`${Math.round(tt.est-c.min)<=1?__t(401):__t(402)+Math.round(tt.est-c.min)+" min"}${__t(373)}${T[p].n}${tt.plat?__t(179)+tt.plat:""}`))}}let Mm=E()&&c.live,bm=U.size===1,ix=tt=>{let Pt=tt.est-c.min;return et?tt.cancel?"cx":Pt<0?"u-miss":"u-info":tt.cancel?"cx":Pt<$e?"u-miss":Pt<$e+1.5?"u-now":Pt<$e+5?"u-soon":"u-ok"},sx=tt=>{if(tt.gone)return`<li class="hr u-gone${tt.live?" on":""}${so(tt)?" sel":""} go" data-dk="${f.push(tt)-1}" title="Ya ha salido: toca para ver d\xF3nde va"><span class="hrt"><b>${st(tt.est)}${__t(403)}${gs(Math.max(1,Math.round(c.min-tt.est))+" min")}</small></span><span class="hrd">${Ci((bm?"":tt.fam+" \xB7 ")+tt.dest,tt.fam)}${__t(404)}${m(tt.num)}</small></span><span class="hrm">${tt.dl>=1?`<em class="dl ${Fi(tt.dl)}">+${Math.round(tt.dl)}</em>`:""}</span></li>`;let Pt=!tt.cancel&&tt.est-c.min<$e,Vt=Zl(tt.num,"");return`<li class="hr ${ix(tt)}${tt.live?" on":""}${tt.ghost?" gh":""}${so(tt)?" sel":""}${Ws&&String(tt.num)===Ws?" pin":""}${pi.some(ae=>{let vn=Wr(ae,t.days.indexOf(c.ymd));return vn&&String(vn.num)===String(tt.num)})?" fav":""} go" style="--lc:${Y[tt.fam]||"#6b7385"}" data-dk="${f.push(tt)-1}" title="${tt.cancel?__t(372):Pt?__t(380):__t(405)}"><span class="hrt"><b>${tt.cancel?"\u2715":Pt?st(tt.est):mr(tt.est-c.min)}</b><small>${tt.cancel?__t(144):tt.late?__t(406):Pt?__t(407):tt.ghost?__t(408):st(tt.est)}</small></span><span class="hrd">${tt.bus?'<i class="bus" title="Autob\xFAs que sustituye al tren por obras">\u{1F68C}</i>':""}${Ci((bm?"":tt.fam+" \xB7 ")+tt.dest,tt.fam)}${Vt.length?`<i class="cr" title="${m(Vt.map(ae=>ao(ae.kind)).join(" \xB7 "))}">${Vt.slice(0,2).map(ae=>ro[ae.kind]).join("")}</i>`:""}${tt.arr!=null?`${__t(409)}${st(tt.arr)}${tt.num?" \xB7 "+__t(355)+m(tt.num):""}${(()=>{let ae=tt.num&&zl(tt.num);return ae&&ae.n>=5&&ae.late/ae.n>=.5?` \xB7 <b class="slate">${__t(410)} \xB7 ${ae.late} ${__t(141)} ${ae.n} ${__t(138)}</b>`:""})()}</small>`:""}${tt.obs?`<small class="hro">${m(tt.obs)}</small>`:""}${tt.unconf?`<small class="hro unc">${__t(411)}</small>`:""}</span><span class="hrm">${!tt.cancel&&tt.dl>=1?`<em class="dl ${Fi(tt.dl)}">+${Math.round(tt.dl)}</em>`:""}${tt.plat?`${__t(265)}${m(tt.plat)}</i>`:""}</span></li>`},Mo=(tt,Pt,Vt)=>`<div class="hcol"><div class="hdir">${tx(tt)}${Vt?`<button type="button" class="hhide" data-hhide="${o.key}:${Vt}" title="${__t(412)}">\u2715</button>`:""}</div><div class="hv ${Pt.cls}${Pt.ghost||Pt.pin&&Pt.x&&Pt.x.noPos&&!fo([Pt.x.fam]).length?" gh":""}${Pt.x?" go":""}"${Pt.miss&&Pt.nxt&&Pt.nxt.num?` data-pinnext="${o.key}:${m(Pt.nxt.num)}" title="${__t(413)}"`:Pt.x?` data-dk="${f.push(Pt.x)-1}"`:""}><b>${Pt.big}</b>${Pt.pin?`<button type="button" class="hunpin" data-unpin="${o.key}" title="${__t(414)}">\u{1F4CC} ${__t(415)} \u2715</button>`:""}<small>${m(Pt.small)}${Pt.soft?` \xB7 <span class="hsoft" title="${__t(416)}">\u{1F4E1} ${m(Pt.soft)}</span>`:""}</small>${Pt.pin&&Pt.x&&Pt.x.num?(ae=>ae?`<span class="hwhere">\u{1F4CD} ${m(ae)}</span>`:"")(ec(Pt.x.num)):""}${Pt.warn?`<span class="hvw">${m(Pt.warn)}</span>`:""}</div><ol>${Ke[tt].slice(0,(o.more?tt==="all"||o.hide?20:10:tt==="all"?7:o.hide?8:4)+Ke[tt].filter(ae=>ae.gone).length).map(sx).join("")||"<li><span>\u2014</span></li>"}</ol></div>`;if(o===It){let tt=ea("all");var rx=tt.x?`<span class="nw">${tt.big}</span> \xB7 <span class="nw"><b>${st(tt.x.est)}</b> ${m(tt.x.fam)}${__t(417)}${m(tt.x.dest)}${tt.x.plat?'<span class="nw">'+__t(179)+m(tt.x.plat)+"</span>":""}`:tt.big}let en=xn&&Qe.x&&Qe.x.arr!=null?L_(xn.T,Qe.x.arr,xn.fin):null;if(en){let tt=o._xc;tt&&tt.leg===String(Qe.x.num)&&tt.conn!==String(en.c.num)&&tt.est<en.c.est&&tt.live?(en.lost=!0,en.missed=tt.est):(!tt||tt.leg!==String(Qe.x.num)||!tt.live||tt.conn===String(en.c.num))&&(o._xc={leg:String(Qe.x.num),conn:String(en.c.num),est:en.c.est,live:!!(G.delays&&Date.now()-(o._xt||(o._xt=Date.now()))>3e4)})}en&&(Kl.set(T[xn.T].id,{fam:en.c.fam,est:en.c.est,plat:en.c.plat,lost:en.lost}),en.lost&&ln.get(o.key)===String(Qe.x.num)&&N_("xf"+Qe.x.num+"|"+en.c.num,`\u21C4 ${__t(418)} ${T[xn.T].n}`,`${__t(419)}: ${en.c.fam} ${st(en.c.est)} \u2192 ${st(en.fin)}${en.c.plat?" \xB7 v\xEDa "+en.c.plat:""}`));let dd=en?`<br><span class="nw hxf ${en.lost?"xbad":en.m<4?"xwarn":"xok"}">\u21C4 ${en.lost?`${__t(420)} ${st(en.missed)} \xB7 ${__t(181)} `:`${m(T[xn.T].n)} \xB7 `}${En(en.c.fam)} <b>${st(en.c.est)}</b> \u2192 <b>${st(en.fin)}</b>${en.lost?"":` \xB7 ${Math.floor(en.m)} ${__t(421)}`}</span>`:xn?`<br><span class="nw hxf xbad">\u21C4 ${__t(422)} ${m(T[xn.T].n)}</span>`:"",ax=o===It?rx:xn&&Qe.x?`<span class="nw">${Qe.big}${Qe.x.plat?__t(179)+m(Qe.x.plat):""}</span> \xB7 <span class="nw"><b>${st(Qe.x.est)}</b>${Qe.x.arr!=null?` \u2192 ${m(T[xn.T].n)} <b>${st(Qe.x.arr)}</b>`:""}</span>${dd}`:Qe.x?`<span class="nw">${Qe.big}${Qe.x.plat?__t(179)+m(Qe.x.plat):""}</span> \xB7 <span class="nw"><b>${st(Qe.x.est)}</b>${Qe.x.arr!=null?`${__t(424)}${st(Qe.x.arr)}</b>`:""}${__t(423)}${m(L)}</span>`:__t(425)+m(L),Xe=o===It?(tt=>tt.pin?tt:null)(ea("all")):Qe.pin?Qe:So.pin?So:null;Xe&&Xe.x&&ln.has(o.key)&&lm(Xe,T[p].n);let ox=Xe?o===It?"all":Xe===Qe?"to":ac:"",na=!!(Xe&&(Xe.ghost||Xe.x.noPos&&!fo([Xe.x.fam]).length||Xe.x.cancel)),fd=!!(Xe&&Xe.miss),ia=na?Ke[ox].find(tt=>!tt.cancel&&!tt.ghost&&!tt.gone&&tt.est>Xe.x.est-.01&&tt!==Xe.x&&tt.est-c.min>=(et||nt?0:$e)):null,lx=fd?`<span class="nw">${__t(426)} <b>${st(Xe.x.est)}</b></span>${Xe.nxt?`<br><span class="nw hnx">${__t(419)} <b>${st(Xe.nxt.est)}</b>${Xe.nxt.arr!=null?` \u2192 <b>${st(Xe.nxt.arr)}</b>`:""}</span>`:""}`:"",cx=na?`<span class="nw">\u26A0\uFE0F ${Xe.x.cancel?__t(372):Xe.ghost?__t(427):__t(428)}</span>${Xe.x.cancel?"":` \xB7 <span class="nw"><b>${st(Xe.x.est)}</b>${Xe.x.arr!=null?` \u2192 <b>${st(Xe.x.arr)}</b>`:""}</span>`}${ia?` \xB7 <span class="nw">${__t(181)} <b>${st(ia.est)}</b>${ia.arr!=null?` \u2192 <b>${st(ia.arr)}</b>`:""}${ia.plat?__t(179)+m(ia.plat):""}</span>`:""}`:"";return`<div class="hplace ${o.open?"open":""}${Xe?" pinned":""}${na?" pgh":""}"><button type="button" class="hhead" data-ht="${o.key}"><span class="hico">${o.ico}</span><span class="htit"><b>${m(T[p].n)}${Xe&&Xe.x.num?`<i class="hpn">\u{1F4CC} ${m(Xe.x.num)}</i>`:""}</b>${o.open?xn&&dd?`<small class="nofit">${dd.replace(/^<br>/,"")}</small>`:"":`<small class="c${fd||na&&Xe.x.cancel?"bad":na?"warn":Le?"bad":Qe.cls.slice(2)}">${na?cx:fd?lx:ax}</small>${Xe&&Xe.x&&Xe.x.num?(tt=>tt?`<small class="nofit hwh2">\u{1F4CD} ${m(tt)}</small>`:"")(ec(Xe.x.num)):""}`}${o.open?"":(tt=>{if(!tt||tt.num==null)return"";let Pt=t.days.indexOf(c.ymd),Vt=tt.tr,ae=Vt?Vt.t0+Vt.pat.t[1]-(Vt.day===Pt-1?1440:Vt.day===Pt+1?-1440:0)+(tt.dl||0):null,vn=!tt.live&&!tt.ghost&&!tt.unconf&&ae!=null&&ae>c.min-1,ri=tt.cancel?["bad",__t(372)]:tt.live?["ok",__t(429)]:vn?["wait",__t(430)]:["warn",__t(427)];return`<small class="nofit hrel ${ri[0]}"><b>${ri[1]}</b></small>`})(Xe&&Xe.x||Qe.x)}</span><span class="hchev">\u25BE</span></button>`+(o.open?`
      <div class="hbody${o===It||o.hide==="out"||o.hide==="to"?" r1":""}">
        ${o===It?`<div class="hwalk">\u{1F4CD} A ${(()=>{let tt=It.dist[o.st[o.i]]||0;return tt<1?Math.round(tt*100)*10+" m":tt.toFixed(1).replace(".",",")+" km"})()}${__t(432)}${o.walk}${__t(433)}`:""}
        ${O?`<div class="hwalk away">${__t(435)}<a data-hplat="${o.key}${__t(434)}`:nt&&!mt.tid?`${__t(436)}${o.key}${__t(437)}`:W?`${__t(438)}${Math.round(ne)} min</b>${A&&M<=3?__t(439):""} \xB7 <a data-hgo="${o.key}:0">${__t(440)}</a></div>`:""}${et&&o!==It?`<div class="hwalk away hawg"><span class="hawt">\u{1F4CD} ${__t(441)} ${M<10?M.toFixed(1).replace(".",","):Math.round(M)} km: ${__t(442)}</span>${Kh(o)}</div>`:""}${et&&o===It?`<div class="hwalk hgw">${Kh(o)}</div>`:""}<div class="hwalk"${et?" hidden":""}>${(()=>{let tt=Ws||(()=>{let ae=(Ke.to.length?Ke.to:Zt).filter(pn=>pn.num!=null&&!pn.cancel),vn=ae.filter(pn=>pn.tr&&pn.tr.pat.stops[0]===p&&pn.est>=c.min-1&&pn.est<=c.min+3).sort((pn,sa)=>pn.est-sa.est);if(vn[0])return vn[0].num;let ri=[...ae];if(ze&&o!==It){let pn=t.days.indexOf(c.ymd),sa=new Set(ae.map(pd=>String(pd.num))),wm=(pd,ux)=>{for(let es of pd||[]){if(sa.has(String(es.num))||Y[es.fam]&&!dt.has(es.fam)&&!_)continue;let md=es.pat.stops,oc=md.indexOf(p);if(oc<0||oc===md.length-1||!md.slice(oc+1).some(hx=>ze.has(hx)))continue;let Em=G.delays&&G.delays.get(es.tid),gd=es.t0+es.pat.t[2*oc+1]-ux+(typeof Em=="number"?Math.max(0,Em/60):0);gd>c.min+1||gd<c.min-15||(sa.add(String(es.num)),ri.push({num:es.num,est:gd,tr:es}))}};pn>=0&&(wm(it[pn],0),pn>0&&wm(it[pn-1],1440))}let rn=ri.filter(pn=>pn.est<=c.min+1&&pn.est>=c.min-15).sort((pn,sa)=>sa.est-pn.est);return rn[0]?rn[0].num:Qe&&Qe.x&&Qe.x.num})(),Pt=tt!=null?Se.find(ae=>String(ae.num)===String(tt)):null,Vt=Xh(Pt,c);return tt!=null&&!mt.tid?`<button type="button" class="hgo hboard${Vt?"":" off"}" data-hboard="${m(String(tt))}"${Vt?"":` data-hbwhen="${Pt?st(Pt.est):""}"`}>\u{1F686} ${Vt&&tt?`${__t(443)} ${m(String(tt))}`:__t(444)}</button>`:""})()}${nt||mt.tid?"":`<button type="button" class="hgo hplat" data-hplat="${o.key}:1">${__t(445)}</button>`}${Kh(o)}</div>
        <div class="hcfgp"${o._cfg?"":" hidden"}><div class="hcl">${__t(446)}</div><div class="hst">${o.st.map((tt,Pt)=>{let Vt=kt.get(tt);return Vt==null?"":`<button type="button" data-hs="${o.key}:${Pt}" class="${Pt===o.i?"on":""}">${m(T[Vt].n.replace(/^Barcelona[ -]+(?=\S)/,"")||T[Vt].n)}${Pt===o.i?" \u2713":""}</button>`}).join("")}</div>${o!==It?`<div class="hcl">${__t(447)}</div><div class="hstep2"><button type="button" data-hw="${o.key}:-1" aria-label="\u2212">\u2212</button><b>${o.walk} min</b><button type="button" data-hw="${o.key}:1" aria-label="+">+</button></div>`:""}<a class="hcfgmap" data-hcfgmap="${p}">\u2139\uFE0F ${__t(448)}</a></div>
        ${(()=>{let tt=pi.filter(Pt=>o.st.includes(Pt.sid));return tt.length?`<div class="hfav">${tt.map(Pt=>{let Vt=Wr(Pt,t.days.indexOf(c.ymd)),ae=Vt&&Zt.find(vn=>String(vn.num)===String(Vt.num));return`\u2B50 <b>${Pt.t}</b> ${m(Pt.fam)} ${ae?ae.cancel?__t(449):ae.gone?__t(262):ae.dl>=1?`<em class="dl ${Fi(ae.dl)}">+${Math.round(ae.dl)}${__t(450)}${st(ae.est)}`:__t(451):__t(452)}`}).join("<br>")}</div>`:""})()}
        ${V&&vr?`${__t(453)}${[...U].sort(B).map(En).join(" ")}${__t(454)}${L}${__t(455)}${vr}${__t(456)}`:_?`${__t(457)}${[...dt].sort(B).slice(0,3).map(En).join(" ")}${__t(458)}`:""}
        ${Te.length?`<div class="hal ${Le?"bad":""}${rd.v?" open":""}" data-halx>\u26A0\uFE0F ${co(Te[0])} ${m(Te[0].txt)} <small>${uo(Te[0])}</small>${Te.length>1?` <a data-hal>+${Te.length-1}${__t(459)}`:""}</div>`:`${__t(460)}${[...U].sort(B).join(", ")}</div>`}
        ${(()=>{let tt=o.st.flatMap(Pt=>Zl("",Pt));return tt.length?`<div class="hcr">${tt.slice(0,3).map(Pt=>`<p><span><span class="cname">${ro[Pt.kind]} <b>${m(ao(Pt.kind))}</b></span><small class="cmeta">${Pt.up>1?(Pt.up>999?"999+":Pt.up)+" "+__t(317)+" \xB7 ":""}${Lp(Pt)}</small></span>${qr.has(Pt.id)?`<small class="hcrok">\u2713 ${__t(318)}</small>`:`<span class="hcrv"><button type="button" data-rv="${Pt.id}:1" title="${__t(319)}">\u2713 ${__t(320)}</button><button type="button" data-rv="${Pt.id}:-1" title="${__t(321)}">\u2715 ${__t(322)}</button></span>`}</p>`).join("")}</div>`:""})()}
        ${o===It?`<div class="hcols one">${Mo("all",ea("all"))}</div>`:o.hide==="out"?`<div class="hcols one">${Mo("to",Qe)}</div><a class="hshow" data-hshow="${o.key}${__t(461)}`:o.hide==="to"?`<div class="hcols one">${Mo(ac,So)}</div><a class="hshow" data-hshow="${o.key}${__t(461)}`:`<div class="hcols">${Mo("to",Qe,"to")}${Mo(ac,So,"out")}</div>`}
        ${xn?D_(o,xn,Qe,en,c):""}
        ${Zt.length>(o===It?7:8)?`<button type="button" class="hmore" data-hmore="${o.key}">${o.more?__t(119):__t(462)}</button>`:""}
        <div class="hsrc"><span class="hsrcT" hidden title="${Mm?Ft.get(T[p].id)?.d?__t(463):__t(464):__t(465)} \xB7 \u25CF = ${__t(466)}">${Mm?Ft.get(T[p].id)?.d?__t(467):__t(468):__t(261)}</span><a data-hmap="${p}${__t(431)}${o===It?__t(469):`<a data-hset="${o.key}${__t(470)}`}${o===ke?`${__t(471)}`:""}</div>
      </div>`:"")+"</div>"}let jh={v:(()=>{try{return localStorage.getItem("rod_cfgseen")==="1"}catch{return!1}})()},O_='<span class="ico" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M19.42 10.34 L21.90 10.60 L21.90 13.40 L19.42 13.66 L18.42 16.07 L19.99 18.02 L18.02 19.99 L16.07 18.42 L13.66 19.42 L13.40 21.90 L10.60 21.90 L10.34 19.42 L7.93 18.42 L5.98 19.99 L4.01 18.02 L5.58 16.07 L4.58 13.66 L2.10 13.40 L2.10 10.60 L4.58 10.34 L5.58 7.93 L4.01 5.98 L5.98 4.01 L7.93 5.58 L10.34 4.58 L10.60 2.10 L13.40 2.10 L13.66 4.58 L16.07 5.58 L18.02 4.01 L19.99 5.98 L18.42 7.93Z"/><circle cx="12" cy="12" r="3"/></svg></span>',Kh=o=>`<button type="button" class="hgo hcfg${o._cfg?" on":""}${jh.v?"":" new"}" data-hcfg="${o.key}" title="${__t(472)}" aria-label="${__t(472)}">${O_}</button>`,ki={on:(()=>{try{return localStorage.getItem("rod_push")==="1"}catch{return!1}})(),busy:!1},Kp=/iPhone|iPad|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,Qp=()=>matchMedia("(display-mode: standalone)").matches||navigator.standalone===!0,gr=new Set((()=>{try{return JSON.parse(localStorage.getItem("rod_aloff")||"[]")}catch{return[]}})()),Ql=()=>{let o=new Set;return[...Ye.st,...ke.st].forEach(c=>{let f=kt.get(c);f!=null&&T[f].fams.forEach(p=>o.add(p))}),[...o].sort(B)},go=()=>({stations:[...Ye.st,...ke.st],lines:Ql().filter(o=>!gr.has(o))}),F_=o=>Uint8Array.from(atob(o.replace(/-/g,"+").replace(/_/g,"/")+"===".slice((o.length+3)%4)),c=>c.charCodeAt(0));async function tm(){return!("serviceWorker"in navigator)||!("PushManager"in window)||location.protocol!=="https:"?null:await navigator.serviceWorker.getRegistration()||navigator.serviceWorker.register("./sw.js")}async function em(o){let f=await(await fetch(ce()+"/push/subscribe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sub:o.toJSON(),...go()})})).json();if(!f.ok)throw new Error(f.err||"error")}function Qh(){let o=Tn(Ye),c=Tn(ke);if(o==null||c==null)return o!=null?Ye:c!=null?ke:null;if(It.w&&Date.now()-It.fix<3*36e5){let f=p=>Math.hypot(T[p].w[0]-It.w[0],T[p].w[1]-It.w[1]);return f(o)<=f(c)?Ye:ke}return new Date().getHours()<13?Ye:ke}function nm(o){let c=Qh(),f=c===Ye?ke:Ye,p=c&&Tn(c),v=f&&Tn(f);if(p==null||v==null)return!0;let y=(o.es||"")+" "+(o.txt||""),C=t.days.indexOf(Qt().ymd),L=Qt(),P=[...new Set([...y.matchAll(/\btr(?:en|ain)s?\s*(?:n[º°o.]\s*)?(\d{4,6})\b/gi)].map(V=>V[1]))];if(P.length)return P.some(V=>{let _=As(V);if(!_)return!1;let M=_.pat.stops,A=M.indexOf(p),O=M.indexOf(v);if(A<0||O<0||A>O)return!1;let et=_.t0+_.pat.t[2*A+1];return et>L.min-60&&et<L.min+150});let U=y.match(/(?:destino|destinaci[óo]|direcci[óo]n?|sentido|sentit|cap a|hacia)\s+(?:a\s+|de\s+)?([^.,;:()]{3,40})/i);if(U){let V=U[1].toLowerCase(),_=T.findIndex(M=>M.n&&V.startsWith(M.n.toLowerCase()));if(_>=0){let M=(it[C]||[]).find(A=>{let O=A.pat.stops;return O[O.length-1]===_&&O.includes(p)&&O.includes(v)});if(M){let A=M.pat.stops;return A.indexOf(p)<A.indexOf(v)}}}return!0}let Zn={on:(()=>{try{return localStorage.getItem("rod_ln")==="1"}catch{return!1}})(),seen:null};function B_(){let{lines:o,stations:c}=go(),f=new Set(o),p=new Set(c.map(C=>kt.get(C))),v=G.alerts.filter(C=>([...C.fams].some(L=>f.has(L))||[...C.stops||[]].some(L=>p.has(L)))&&nm(C));if(!Zn.seen){try{Zn.seen=new Set(JSON.parse(localStorage.getItem("rod_lnseen")||"[]"))}catch{Zn.seen=new Set}if(!Zn.seen.size){v.forEach(C=>Zn.seen.add(C.id+"|"+C.txt.length)),im();return}}let y=v.filter(C=>!Zn.seen.has(C.id+"|"+C.txt.length));if(y.length&&(y.forEach(C=>Zn.seen.add(C.id+"|"+C.txt.length)),im(),!(!Zn.on||!("Notification"in window)||Notification.permission!=="granted")))for(let C of y.slice(0,3)){let L=(C.src==="Adif"?__t(333):"Rodalies")+(C.fams.size?" \xB7 "+[...C.fams].sort(B).slice(0,4).join(" "):""),P={body:C.txt.slice(0,240),icon:"icons/icon-192.png",tag:"rod-"+C.id};(navigator.serviceWorker&&navigator.serviceWorker.getRegistration?navigator.serviceWorker.getRegistration():Promise.resolve(null)).then(U=>U?U.showNotification(L,P):new Notification(L,P)).catch(()=>{try{new Notification(L,P)}catch{}})}}function im(){try{localStorage.setItem("rod_lnseen",JSON.stringify([...Zn.seen].slice(-400)))}catch{}}async function k_(){if(Zn.on)Zn.on=!1,Ve(__t(473));else{if(!("Notification"in window)){Ve(Kp&&!Qp()?__t(474):__t(475));return}if(await Notification.requestPermission()!=="granted"){Ve(__t(476));return}Zn.on=!0,Ve(__t(477)+go().lines.join(", ")+__t(478))}try{localStorage.setItem("rod_ln",Zn.on?"1":"")}catch{}ye(!0)}async function $_(){if(!G.repOk||document.documentElement.classList.contains("cap"))return k_();if(!ki.busy){ki.busy=!0;try{let o=await tm();if(!o){Ve(Kp&&!Qp()?__t(479):__t(480));return}if(await navigator.serviceWorker.ready,ki.on){let c=await o.pushManager.getSubscription();c&&(fetch(ce()+"/push/unsubscribe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({endpoint:c.endpoint})}).catch(()=>{}),await c.unsubscribe().catch(()=>{})),ki.on=!1,Ve(__t(473))}else{if(!G.url){Ve(__t(481));return}if(await Notification.requestPermission()!=="granted"){Ve(__t(476));return}let f=(await Lt(ce(),"/push/key")).key,p=await o.pushManager.getSubscription()||await o.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:F_(f)});await em(p),ki.on=!0,Ve(__t(482)+go().lines.join(", "))}try{localStorage.setItem("rod_push",ki.on?"1":"")}catch{}}catch(o){Ve(__t(483)+(o.message||o))}finally{ki.busy=!1,ye(!0)}}}async function sm(){if(ki.on)try{let o=await tm(),c=o&&await o.pushManager.getSubscription();c&&await em(c)}catch{}}let td=!1,rm="";function ed(){let o=bt?"t"+(bt.tid||bt.vtid):me>=0?"s"+me:_e?"a":Ot?"n":"";o!==rm&&(td=!1,rm=o);let c=innerWidth<=640&&!!o&&!td&&!document.documentElement.classList.contains("tabmode"),f=x("#inf");f.classList.contains("compact")!==c&&(f.classList.toggle("compact",c),requestAnimationFrame(()=>{if(d.style.display!=="none"){let p=f.getBoundingClientRect().bottom;d.style.top=Math.round(p+8)+"px",d.style.maxHeight=Math.max(140,x("#rc").getBoundingClientRect().top-p-16)+"px"}}))}let am=new Set,nd=(()=>{let o=St(new Date).ymd;try{let c=JSON.parse(localStorage.getItem("rod_pn")||"{}");return c.d===o?c:{d:o}}catch{return{d:o}}})();function om(o,c,f){if(!(!(Zn.on||ki.on)||!("Notification"in window)||Notification.permission!=="granted")){if(!document.hidden){Ve(o+" \xB7 "+c);return}(navigator.serviceWorker&&navigator.serviceWorker.getRegistration?navigator.serviceWorker.getRegistration():Promise.resolve(null)).then(p=>p?p.showNotification(o,{body:c,tag:f,icon:"icons/andana-192.png"}):new Notification(o,{body:c})).catch(()=>{try{new Notification(o,{body:c})}catch{}})}}function lm(o,c){let f=o.x,p=Qt();if(!p.live||f.gone||f.est<p.min-1)return;let v=f.num+"|"+Math.round(f.sm),y=nd[v]||{},C=`${__t(484)} ${st(f.sm)}`,L=`${f.fam} \u2192 ${f.dest}`,P="",U="";f.cancel?y.c||(y.c=1,P=`\u26A0\uFE0F ${C} ${__t(187)}`,U=`${L}. ${__t(485)}`):o.ghost&&!y.g?(y.g=1,P=`\u26A0\uFE0F ${C} ${__t(486)}`,U=`${L}: ${__t(487)}`):f.dl>=5&&f.dl>=(y.dl||0)+5?(y.dl=Math.round(f.dl),P=`\u23F3 ${C} ${__t(488)} +${y.dl} min`,U=`${L}: ${__t(489)} ${c} ${__t(490)} ${st(f.est)}.`):f.plat&&y.p&&y.p!==String(f.plat)&&(P=`${__t(491)}: ${C}`,U=`${L}: ${__t(492)} ${f.plat} ${__t(493)} ${y.p}).`),f.plat&&(y.p=String(f.plat)),nd[v]=y;try{localStorage.setItem("rod_pn",JSON.stringify(nd))}catch{}P&&om(P,U,"pin-"+f.num)}let Zr={open:!1,seen:new Set((()=>{try{return JSON.parse(localStorage.getItem("rod_seen")||"[]")}catch{return[]}})())};document.addEventListener("click",o=>{let c=o.target.closest&&o.target.closest("[data-nowx]");if(!c||o.target.closest("a"))return;let f=c.dataset.nowx?c.dataset.nowx.split("|"):[];if(f.length){if(c.classList.contains("col"))Zr.open=!0;else{Zr.open=!1,f.forEach(p=>Zr.seen.add(p));try{localStorage.setItem("rod_seen",JSON.stringify([...Zr.seen].slice(-200)))}catch{}}ye(!0)}});function z_(o){let c=o.lines;if(!c.length&&It.st&&It.st.length){let _=new Set;It.st.forEach(M=>{let A=kt.get(M);A!=null&&T[A].fams.forEach(O=>_.add(O))}),c=[..._].sort(B)}let f=new Set(c),p=G.alerts.filter(_=>!f.size||[..._.fams].some(M=>f.has(M))),v=`<a class="hwa" href="https://www.whatsapp.com/channel/0029Vav4hGTId7nPenKMuo2C" target="_blank" rel="noopener" title="${__t(170)}" aria-label="WhatsApp"><svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path fill="#25d366" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2z"/><path fill="#fff" d="M8.6 7.2c.2-.4.4-.4.7-.4h.5c.2 0 .4 0 .6.5l.8 1.9c.1.2.1.4 0 .6l-.5.7c-.1.2-.2.3 0 .6.5.8 1.1 1.5 1.9 2 .3.2.4.1.6 0l.7-.8c.2-.2.4-.2.6-.1l1.8.9c.3.1.4.2.4.4 0 .5-.2 1.2-.8 1.6-.6.4-1.5.6-2.9 0-1.6-.7-3-2-3.9-3.4-.8-1.2-1.1-2.4-.5-3.5z"/></svg></a>`,y=p.reduce((_,M)=>Math.max(_,mo(M)),0),C=y===3?"\u26D4 ":y===2?"\u26A0\uFE0F ":"\u2139\uFE0F ",L=`<div class="hnowh"><span class="hnowl"><b>${p.length?C+p.length+(p.length===1?__t(335):__t(336)):__t(494)}</b>${c.length?c.map(En).join(""):""}</span>${v}</div>`,P=p.filter(_=>!Zr.seen.has(_.id)),U=p.length&&(Zr.open||P.length>0),V=p.reduce((_,M)=>Math.max(_,mo(M)),0);return`<div class="hnow${V===3?" bad":V===2?" warn":V===1?" info":""}${p.length&&!U?" col":""}" data-nowx="${m(p.map(_=>_.id).join("|"))}">${L}${hm(o,!0)}${U?p.slice().sort((_,M)=>mo(M)-mo(_)).map(_=>`<p class="sv${mo(_)}">${co(_)} ${m(_.txt)} <small>${uo(_)}</small></p>`).join("")+`<small class="hnowt">${__t(495)}</small>`:""}</div>`}let ln=new Map((()=>{try{let o=St(new Date).ymd;return JSON.parse(localStorage.getItem("rod_pin")||"[]").filter(c=>c[2]===o).map(c=>[c[0],c[1]])}catch{return[]}})());function tc(){if(!document.documentElement.classList.contains("tabmode"))return;let o=[...document.querySelectorAll("#home .hhead .htit small:not(.nofit)")],c=(p,v)=>{p.style.fontSize=v===1?"":(p._f0*v).toFixed(1)+"px",p.querySelectorAll("b").forEach(y=>y.style.fontSize=v===1?"":(p._b0*v).toFixed(1)+"px")},f=1;for(let p of o){if(p.style.whiteSpace="",c(p,1),!p.clientWidth)continue;p._f0=parseFloat(getComputedStyle(p).fontSize);let v=p.querySelector("b");for(p._b0=v?parseFloat(getComputedStyle(v).fontSize):0;p.scrollWidth>p.clientWidth+1&&f>.86;)f-=.02,c(p,f)}if(f<1)for(let p of o)p._f0&&c(p,f);for(let p of o)p.scrollWidth>p.clientWidth+1&&(p.style.whiteSpace="normal")}addEventListener("resize",()=>{try{tc()}catch{}});let cm=(o,c)=>{let f=o==="work"?ke:o==="near"?It:Ye,p=f&&Tn(f);return p==null?null:Jn(p).find(v=>String(v.num)===String(c))||null};function ii(o,c){if(c&&!ln.size&&!mt.tid)try{let f=+(localStorage.getItem("rod_lptip")||0);f<2&&(localStorage.setItem("rod_lptip",f+1),setTimeout(()=>Ve(__t(496)),600))}catch{}if(c){for(let f of[...ln.keys()])f!==o&&ln.delete(f);ln.set(o,c)}else ln.delete(o);try{let f=St(new Date).ymd;localStorage.setItem("rod_pin",JSON.stringify([...ln].map(([p,v])=>[p,v,f])))}catch{}}let um=o=>{let c=o&&o.ts?Date.now()/1e3-o.ts:G.okVP?(Date.now()-G.okVP)/1e3:-1;return c>=0?" \xB7 "+gs(wh(Math.round(c))):""};function ec(o){let c=re.find(y=>y.tr&&String(y.tr.num)===String(o));if(!c){let y=As(o),C=Qt(),L=t.days.indexOf(C.ymd);if(!y)return"";let P=y.day===L-1?1440:0,U=y.t0+y.pat.t[1]-P;return U>C.min?__t(497)+T[y.pat.stops[0]].n+" ("+st(U)+")":""}let f=c.tr,p=y=>T[f.pat.stops[y]].n;if(c.real){let y=c.v;return y.pre?__t(498):y.atStop>=0&&y.before?__t(499)+p(y.atStop):y.atStop>=0&&(y.st==="STOPPED_AT"||c.stop==="st")?Oe()?__t(500)+p(y.atStop):__t(501)+p(y.atStop)+um(y):!Oe()&&y.next>0?__t(502)+p(y.next-1)+__t(503)+p(y.next)+um(y):y.atStop>=0&&y.next>y.atStop?__t(504)+p(y.atStop)+__t(505)+p(y.next):y.atStop>=0?__t(506)+p(y.atStop):c.stop==="via"&&y.next>0?"\u23F8 "+__t(507)+p(y.next-1)+__t(503)+p(y.next):y.next>0?__t(224)+p(y.next-1)+__t(503)+p(y.next):y.next===0?__t(369)+p(0):""}let v=c.p&&c.p.next;return v>0?__t(508)+p(v-1)+__t(503)+p(v):""}let _o={k:"",v:null};function V_(o){let c=Qt(),f=t.days.indexOf(c.ymd);if(f<0||!o.length)return null;let p=Qh(),v=(p&&Tn(p))??Tn(Ye)??Tn(ke),y=c.ymd+o.join()+v;if(_o.k===y)return _o.v;_o.k=y;let C=new Set(o),L=v!=null?_=>it[_].filter(M=>{let A=M.pat.stops.indexOf(v);return A>=0&&A<M.pat.stops.length-1}).length:_=>it[_].filter(M=>C.has(M.fam)).length,P=_=>{let M=new Date(+_.slice(0,4),+_.slice(4,6)-1,+_.slice(6)).getDay();return M===0?0:M===6?6:1},U=L(f),V=Math.max(0,...t.days.map((_,M)=>M!==f&&P(_)===P(c.ymd)?L(M):0));return _o.v=V>=20&&U<V*.8?{n:U,ref:V,pct:Math.round(U/V*100),st:v!=null?T[v].n:""}:null,_o.v}function hm(o,c){let f=o.lines||[],p=V_(f);if(!p)return"";let v=G.alerts.some(y=>[...y.fams].some(C=>f.includes(C))&&/huelga|vaga\b|servicios? m[ií]nimos|serveis m[ií]nims/i.test((y.es||"")+" "+y.txt));return c?`<div class="hnowred">\u{1F5D3}\uFE0F <b>${v?__t(509):__t(510)}</b>: ${p.st?`${__t(511)} ${m(p.st)} ${p.n} ${__t(512)} ${p.ref} ${__t(513)}`:`${__t(514)} ${p.n} ${__t(512)} ${p.ref} ${__t(513)}`} (${p.pct} %). ${v?__t(515):__t(516)}</div>`:`<div class="hred">\u{1F5D3}\uFE0F <b>${v?__t(517):__t(518)}</b> \xB7 ${__t(519)}: ${p.st?`${__t(520)} ${m(p.st)} ${__t(521)} ${p.n} ${__t(141)} ${p.ref} ${__t(71)}`:`${p.n} ${__t(141)} ${p.ref} ${__t(522)} ${f.join(", ")}`} (${p.pct} % ${__t(523)}).</div>`}function H_(o){let c=fo(o.lines||[]);if(!c.length)return"";let f=[Ye,ke].some(p=>{let v=Tn(p),y=v!=null&&Ft.get(T[v].id);return y&&y.d&&Array.isArray(y.d.trains)&&!y.d.trains.length});return`<div class="hnopos">\u{1F4E1} <b>${__t(524)} ${c.join(", ")}</b> ${__t(525)}${f?" \xB7 "+__t(526):""}: ${__t(527)}</div>`}function G_(o){if(!It.w||mt.lock||mt.manual&&Date.now()<mt.manual)return[];let c=mt.fixes[mt.fixes.length-1];if(!c||Date.now()-c.t>6e4||c.acc!=null&&c.acc>150)return[];let f=It.k||1,p=C=>Math.hypot(C.p.w[0]-It.w[0],C.p.w[1]-It.w[1])*f,v=re.find(C=>C.tr===o&&C.p&&C.p.w);if(!v||p(v)<1.5)return[];let y=v.p.next>=0?o.pat.stops[v.p.next]:null;return re.filter(C=>C.tr&&C.tr!==o&&C.p&&C.p.w&&p(C)<1&&(y==null||C.p.next>=0&&C.tr.pat.stops.indexOf(y)>=C.p.next)).sort((C,L)=>Math.hypot(C.p.w[0]-It.w[0],C.p.w[1]-It.w[1])-Math.hypot(L.p.w[0]-It.w[0],L.p.w[1]-It.w[1])).slice(0,2).map(C=>C.tr)}function W_(o){if(mt.tid)return"";let c=null,f=null;if(ln.size||(Nt&&Nt.num!=null&&(c=String(Nt.num)),!c))return"";let p=As(c);if(!p)return"";let v=p.pat.stops,y=f?f==="work"?ke:f==="near"?It:Ye:null,C=y?Tn(y):null,L=C!=null?Jn(C).find(nt=>String(nt.num)===c):null,P=y===Ye?ke:y===ke?Ye:null,U=P?Tn(P):null,V=C!=null?v.indexOf(C):-1,_=xe&&xe.num===c?v.indexOf(kt.get(xe.sid)):-1;_<=V&&U!=null&&(_=v.indexOf(U,V+1));let M=L&&V>=0&&_>V?L.est+(p.pat.t[2*_]-p.pat.t[2*V+1]):null,A=L?Math.round(L.est-o.min):null,O=ec(c),et=L?`${L.gone?__t(528):__t(529)} ${m(T[C].n)} \xB7 <b>${st(L.est)}</b>${L.gone?"":` (${A<=0?__t(313):A+" min"})`}${L.plat?__t(179)+m(L.plat):""}${M!=null?` \u2192 ${m(T[v[_]].n)} <b>${st(M)}</b>`:""}`:m(O||"");return`<div class="hplace onbc chosen"><div class="hhead"><span class="hico">\u{1F4CC}</span><span class="htit"><b>${En(p.fam)} ${__t(355)}${m(c)} <span class="hlk">${__t(530)}</span></b><small class="nofit">${et}</small>${L&&O?`<small class="nofit">\u{1F4CD} ${m(O)}</small>`:""}<span class="chbtn"><button type="button" class="hgo hboard" data-hboard="${m(c)}">\u{1F686} ${__t(444)}</button><button type="button" class="chmap" data-chmap="${m(c)}">\u{1F5FA}\uFE0F ${__t(531)}</button></span></span><button type="button" class="hpn onbx" data-unchoose="${m(c)}" aria-label="${__t(249)}">\u2715</button></div></div>`}function X_(o){let c;try{if(c=q_(o),c!=null)return c}catch(v){console.error(v)}let f=mt.tid?As(mt.tid):null,p=f?`${__t(532)} ${m(T[f.pat.stops[0]].n)} \xB7 ${st(f.t0)}`:"";return mt.tid?`<div class="hplace onbc"><div class="hhead"><span class="hico">\u{1F686}</span><span class="htit"><b>${__t(355)}${m(mt.tid)}${mt.lock?` <span class="hlk">${__t(533)}</span>`:""}</b>${p?`<small class="nofit">${p}</small>`:""}</span><button type="button" class="hpn onbx" data-onbx aria-label="Quitar">\u2715</button></div></div>`:""}let xo={s:null,at:0},jn=(()=>{try{return JSON.parse(localStorage.getItem("rod_trips")||"[]")}catch{return[]}})();function jr(o,c,f,p,v){let y=o.ymd+"|"+c.num,C=c.pat.stops,L=jn.find(P=>P.k===y);if(!(L&&L.done)){if(!L){let P=mt.from!=null?C.indexOf(mt.from):-1;if(xo.s!=null&&Date.now()-xo.at<45*6e4){let U=C.indexOf(xo.s);U>=0&&(P<0||U<P)&&(P=U)}{let U=[...Ye.st,...ke.st],V=P>=0?P:(mt.fixes.length,-1);if(V>=0&&!U.includes(T[C[V]].id)){for(let _=V-1;_>=Math.max(0,V-4);_--)if(U.includes(T[C[_]].id)){P=_;break}}}if(P<0&&mt.fixes.length){let U=mt.fixes[0],V=.6;C.forEach((_,M)=>{let A=Math.hypot(T[_].w[0]-U.w[0],T[_].w[1]-U.w[1])*U.k;A<V&&(V=A,P=M)})}L={k:y,d:o.ymd,num:String(c.num),fam:c.fam,a:P>=0?T[C[P]].id:"",ad:P>=0?Math.round(c.t0+c.pat.t[2*P+1]-p):null,dl:null,mx:0,t0:Date.now()},jn.push(L)}if(xe&&xe.num===String(c.num)&&kt.get(xe.sid)===C[f]&&(L.b=T[C[f]].id,L.bd=Math.round(c.t0+c.pat.t[2*f]-p)),v!=null&&(L.dl=Math.round(v),L.mx=Math.max(L.mx||0,L.dl)),L.t1=Date.now(),!jr.s||Date.now()-jr.s>3e4||L._n!==L.dl){jr.s=Date.now(),L._n=L.dl;let P=Date.now()-120*864e5;try{localStorage.setItem("rod_trips",JSON.stringify(jn.filter(U=>(U.t1||U.t0)>P),(U,V)=>U==="_n"?void 0:V))}catch{}}}}let dm=(o,c)=>{let f=Date.now()-c*864e5;return jn.filter(p=>p.fam===o&&(p.t1||p.t0)>f&&(p.t1||0)-p.t0>=18e4&&!(p.a&&p.a===p.b))};function q_(o){if(!mt.tid)return"";[...ln].forEach(([nt,z])=>{String(z)!==String(mt.tid)&&ii(nt,null)});let c=re.find(nt=>nt.tr&&String(nt.tr.num)===mt.tid)||I(o).out.find(nt=>nt.tr&&String(nt.tr.num)===mt.tid);if(!c)return null;let f=c.tr,p=f.pat.stops,v=c.real&&c.v&&c.v.next>=0?c.v.next:c.p&&c.p.next>=0?c.p.next:null;if(v==null){let nt=I(o).out.find(z=>z.tr&&String(z.tr.num)===mt.tid);v=nt&&nt.p&&nt.p.next>=0?nt.p.next:1}let y=gt(f),C=typeof y=="number"?Math.max(0,y/60):0,L=t.days.indexOf(o.ymd),P=f.day===L-1?1440:0,U=mt.fixes[mt.fixes.length-1],V=U&&Date.now()-U.t<9e4&&(U.acc==null||U.acc<150)?(()=>{let nt=-1,z=.35;return p.forEach((at,W)=>{let ne=Math.hypot(T[at].w[0]-U.w[0],T[at].w[1]-U.w[1])*U.k;ne<z&&(z=ne,nt=W)}),nt})():-1,_=xe&&xe.num===mt.tid?p.indexOf(kt.get(xe.sid)):-1;if(_>0&&_<v&&V!==_&&!(V>=0&&V<_))return setTimeout(()=>{if(!mt.tid)return;let nt=mt.tid;{let z=jn.find(at=>at.num===nt&&at.d===Qt().ymd);if(z){z.done=!0,jr.s=0;try{localStorage.setItem("rod_trips",JSON.stringify(jn,(at,W)=>at==="_n"?void 0:W))}catch{}}}mt.no.set(nt,Date.now()+90*6e4),mt.tid="",mt.lock=!1,mt.manual=0,mt.quiet=Date.now()+10*6e4,Nt&&String(Nt.num)===nt&&(Nt=null),[...ln].forEach(([z,at])=>{String(at)===nt&&ii(z,null)}),Rn.num===nt&&(Rn.num=""),ye(!0)},0),"";_<v&&(_=p.length-1);let M=Yr(f,c.real?c.v:null,_,f.t0+f.pat.t[2*_]+C-P),A=M-o.min,O=c.real&&c.v.atStop>=0?c.v.atStop:-1;jr(o,f,_,P,typeof y=="number"?C:null);let et=V>=0?`${__t(534)} ${T[p[V]].n}`:ec(f.num)||__t(369)+T[p[v]].n;return`<div class="hplace onbc"><button type="button" class="hhead" data-onbgo><span class="hico">\u{1F686}</span><span class="htit"><b>${En(f.fam)} ${__t(355)}${m(f.num)}${mt.lock?` <span class="hlk">${__t(533)}</span>`:""}</b><small class="nofit cok">${m(et)} \xB7 <span class="nw">${__t(535)} ${m(T[p[_]].n)}</span> <span class="nw">${A>=1?__t(104)+mr(A)+" \xB7 ":""}<b>${st(M)}</b>${C>=1?` <em class="dl ${Fi(C)}">+${Math.round(C)}</em>`:""}</span></small>${(nt=>nt.length?`<small class="onbrep">${nt.slice(0,4).map(z=>`<span title="${m(ao(z.kind))}">${ro[z.kind]}${z.up>1?`<b>${z.up>99?"99+":z.up}</b>`:""}</span>`).join("")}</small>`:"")(Zl(f.num,""))}</span><span class="hchev">${mt.open?"\u25B4":"\u25BE"}</span></button><button type="button" class="hpn onbx" data-onbx aria-label="${__t(536)}" title="${__t(536)}">\u2715</button>${(nt=>nt.length&&!(mt.manual&&Date.now()<mt.manual)?`<div class="onbch">${nt.map(z=>`<button type="button" class="onbalt" data-onbpick="${m(z.num)}">${__t(537)} ${m(z.num)}?<small>${__t(538)} ${m(T[z.pat.stops[z.pat.stops.length-1]].n.replace(/^Barcelona[ -]+(?=\S)/,""))}</small></button>`).join("")}</div>`:"")(G_(f))}${mt.open?(()=>{let nt=Math.max(v,0),z=W=>{let ne=Yr(f,c.real?c.v:null,W,f.t0+f.pat.t[2*W]+C-P);return`<li class="${W===_?"dst":""}"><b>${st(ne)}</b><span>${m(T[p[W]].n)}</span>${W===_?`<i>${__t(539)}</i>`:""}</li>`},at=[];for(let W=nt;W<=Math.min(_,nt+2);W++)at.push(z(W));return _>nt+3&&at.push(`<li class="gap"><b>\u22EE</b><span>${_-nt-3} ${_-nt-3===1?__t(540):__t(541)}</span></li>`),_>nt+2&&at.push(z(_)),`<div class="onbmore"><small class="onbh">${__t(542)}</small><ol class="onbst">${at.join("")}</ol>${oo(f.num,"",f.fam)}<div class="rtb"><button type="button" data-onbmap>\u{1F5FA}\uFE0F ${__t(531)}</button></div></div>`})():""}</div>`}let nc={until:0};function fm(){let o=mt.tid;if(o){mt.no.set(o,Date.now()+20*6e4),mt.tid="",mt.manual=0,mt.lock=!1,mt.quiet=Date.now()+10*6e4,Rn.num===o&&(Rn.num=""),[...ln].forEach(([c,f])=>{String(f)===o&&ii(c,null)}),xe&&xe.num===o&&(xe=null,Es(),window.__schedOff&&window.__schedOff(7701)),Nt&&String(Nt.num)===o&&(Nt=null),bt&&String(bt.num)===o&&(bt=null,He.sk=""),d._h="";try{Ie(),a()}catch{}ye(!0)}}function pm(o){if(o.hasAttribute("data-onbx")){fm();return}let c=mt.tid,f=mt.lock;Jr(o.dataset.onbpick,"pick"),Ve(`${__t(543)} ${mt.tid}`,c&&c!==mt.tid?{label:__t(277),fn:()=>{Jr(c,f?"lock":"pick"),Ve(`${__t(544)} ${c}`),ye(!0)}}:void 0),ye(!0)}function ye(o){let c=x("#home");if(!c)return;let f=performance.now();if(!o&&f-Xp<4e3||!o&&nc.until>Date.now())return;Xp=f;let p=Qt(),v=[],y=go(),C=M=>{let A=Tn(M);return A==null||!It.w?1:Math.hypot(T[A].w[0]-It.w[0],T[A].w[1]-It.w[1])},L=[It,...[Ye,ke].sort((M,A)=>C(M)-C(A))],P=(document.documentElement.classList.contains("tabmode")?z_(y):hm(y))+H_(y)+X_(p)+W_(p)+L.map(M=>U_(M,p,v)).join("")+(Cs.some(M=>M.open)&&y.lines.length,"");c.className=(Cs.some(M=>M.open)?"open":"")+(mt.tid?" onb":"");let U=x("#bell");U||(U=document.createElement("button"),U.type="button",U.id="bell",U.onclick=$_,x("#inf .more").prepend(U));{let M=G.repOk&&!document.documentElement.classList.contains("cap")?ki.on:Zn.on;U.hidden=!y.lines.length,U.className=M?"on":"",U.textContent=(M?__t(552):__t(553))+y.lines.join(", "),U.title=(M?__t(554):__t(555))+__t(67)+y.lines.join(", ")+(G.repOk?"":__t(556))}if(c._h===P)return;c._h=P,c.innerHTML=P,tc(),c._onbDel||(c._onbDel=1,c.addEventListener("pointerdown",()=>{nc.until=Date.now()+1500},!0),c.addEventListener("pointerup",()=>{nc.until=Date.now()+400},!0),c.addEventListener("click",M=>{if(window.__lpAt&&Date.now()-window.__lpAt<1e3){M.stopPropagation(),M.preventDefault();return}let A=M.target.closest&&M.target.closest("[data-onbx],[data-onbpick]");A&&(M.stopPropagation(),nc.until=0,pm(A))},!0));{let M=c.querySelector("[data-onbgo]");M&&(M.onclick=A=>{if(A.target.closest("[data-onbx]")){fm();return}let O=A.target.closest("[data-onbpick]");if(O){pm(O);return}mt.open=!mt.open,ye(!0)})}{let M=c.querySelector("[data-onbmap]");M&&(M.onclick=A=>{A.stopPropagation();let O=re.find(et=>et.tr&&String(et.tr.num)===mt.tid);O&&(Ot=_e=Ct=!1,me=-1,bt=O.tr,Nt=O.tr,d._h="",Ii("map"),Ie())})}{let M=[...c.children].find(A=>A.classList.contains("hplace")&&!A.querySelector(".hnew"));M&&M.classList.add("lead")}let V=M=>M==="work"?ke:M==="near"?It:Ye;c.querySelectorAll("[data-hloc]").forEach(M=>M.onclick=()=>{It.err="",Wh(!0)}),c.querySelectorAll("[data-ht]").forEach(M=>{let A=0,O=0,et=0,nt=()=>{clearTimeout(A),A=0,M.closest(".hplace")?.classList.remove("lpress")};M.addEventListener("pointerdown",z=>{let at=M.dataset.ht,W=ln.get(at);!W||String(mt.tid)===String(W)||(O=z.clientX,et=z.clientY,M.closest(".hplace")?.classList.add("lpress"),A=setTimeout(()=>{A=0,M.closest(".hplace")?.classList.remove("lpress"),M._lpDone=Date.now();let ne=cm(at,W);if(!Xh(ne,Qt())){qh(ne?st(ne.est):"");return}let Se=Jr(W,"lock",at);try{navigator.vibrate&&navigator.vibrate(35)}catch{}Ve(`${__t(544)} ${Se&&Se.tr.fam||""} ${W} \xB7 ${__t(533)}`),ye(!0)},700))}),M.addEventListener("pointermove",z=>{A&&Math.hypot(z.clientX-O,z.clientY-et)>10&&nt()}),["pointerup","pointercancel","pointerleave"].forEach(z=>M.addEventListener(z,()=>{A&&nt()})),M.addEventListener("contextmenu",z=>z.preventDefault())}),c.querySelectorAll("[data-ht]").forEach(M=>M.onclick=()=>{if(M._lpDone&&Date.now()-M._lpDone<1500)return;if(x("#inf").classList.contains("compact")){td=!0,ed();return}let A=V(M.dataset.ht);A.open=!A.open,mi(A),ye(!0),(bt||me>=0||_e||Ot)&&(d._h="",Ie())}),c.querySelectorAll("[data-hxf]").forEach(M=>M.onclick=A=>{A.stopPropagation();let[O,et]=M.dataset.hxf.split(":"),nt=V(O);nt.xfer=et||null,mi(nt),ye(!0)});let _=M=>{clearTimeout(M._cfgT),M._cfgT=setTimeout(()=>{M._cfg=!1,ye(!0)},1e4)};c.querySelectorAll("[data-hs]").forEach(M=>M.onclick=()=>{let[A,O]=M.dataset.hs.split(":"),et=V(A);_(et),et.i!==+O&&(et.i=+O,mi(et),ye(!0))}),c.querySelectorAll("[data-hcfg]").forEach(M=>M.onclick=A=>{A.stopPropagation();let O=V(M.dataset.hcfg);if(O._cfg=!O._cfg,clearTimeout(O._cfgT),O._cfg&&_(O),!jh.v){jh.v=!0;try{localStorage.setItem("rod_cfgseen","1")}catch{}}ye(!0)}),c.querySelectorAll("[data-hcfgmap]").forEach(M=>M.onclick=A=>{A.stopPropagation();let O=+M.dataset.hcfgmap;Ii("map"),window.__rodPickStation(O)}),c.querySelectorAll("[data-hwt]").forEach(M=>M.onclick=A=>{A.stopPropagation();let O=V(M.dataset.hwt);O._wedit=!O._wedit,clearTimeout(O._wT),O._wedit&&(O._wT=setTimeout(()=>{O._wedit=!1,ye(!0)},6e3)),ye(!0)}),c.querySelectorAll("[data-hw]").forEach(M=>M.addEventListener("click",()=>{let A=V(M.dataset.hw.split(":")[0]);A._cfg&&_(A)},!0)),c.querySelectorAll("[data-hw]").forEach(M=>M.onclick=()=>{let[A,O]=M.dataset.hw.split(":"),et=V(A);et.walk=b(et.walk+ +O,0,60),mi(et),ye(!0)}),c.querySelectorAll("[data-hmap]").forEach(M=>M.onclick=()=>{let A=+M.dataset.hmap;Ot=_e=Ct=!1,bt=null,me=A,Hn(),Object.assign(s,{tx:T[A].w[0],ty:T[A].w[1],dist:18,tilt:Math.max(s.tilt,.5)}),d._h="",Ie(),a()}),c.querySelectorAll("[data-hset]").forEach(M=>M.onclick=()=>mm(M.dataset.hset)),c.querySelectorAll("[data-hnear]").forEach(M=>M.onclick=()=>{let A=kt.get(It.st[0]);A!=null&&id(A,M.dataset.hnear)}),c.querySelectorAll("[data-hmore]").forEach(M=>M.onclick=()=>{let A=V(M.dataset.hmore);A.more=!A.more,ye(!0)}),c.querySelectorAll("[data-hhide]").forEach(M=>M.onclick=A=>{A.stopPropagation();let[O,et]=M.dataset.hhide.split(":"),nt=V(O);nt.hide=et,mi(nt),ye(!0)}),c.querySelectorAll("[data-hshow]").forEach(M=>M.onclick=()=>{let A=V(M.dataset.hshow);A.hide="",mi(A),ye(!0)}),c.querySelectorAll("[data-hgo]").forEach(M=>M.onclick=A=>{A.stopPropagation();let[O,et]=M.dataset.hgo.split(":"),nt=V(O);nt.goAt=et==="1"?Date.now():0,nt.goAt?nt.platAt=0:nt._noWay=Date.now()+15*6e4,mi(nt),ye(!0)}),c.querySelectorAll("[data-unchoose]").forEach(M=>M.onclick=A=>{A.stopPropagation();let O=M.dataset.unchoose;[...ln].forEach(([et,nt])=>{String(nt)===O&&ii(et,null)}),Rn.num===O&&(Rn.num=""),Nt&&String(Nt.num)===O&&(Nt=null),xe&&xe.num===O&&(xe=null,Es()),bt&&String(bt.num)===O&&(bt=null,d._h="",Ie()),ye(!0)}),c.querySelectorAll("[data-chmap]").forEach(M=>M.onclick=A=>{A.stopPropagation();let O=As(M.dataset.chmap);O&&(Ii("map"),Gs({num:String(O.num),tid:O.tid&&G.vp.has(O.tid)?O.tid:"",tr:O}),Nt=O)}),c.querySelectorAll("[data-hboard]").forEach(M=>M.onclick=A=>{if(A.stopPropagation(),M.classList.contains("off")){qh(M.dataset.hbwhen);return}let O=Jr(M.dataset.hboard,"lock",M.closest(".hplace")?.querySelector("[data-ht]")?.dataset.ht);Ve(`${__t(544)} ${O&&O.tr.fam||""} ${M.dataset.hboard} \xB7 ${__t(533)}`),ye(!0)}),c.querySelectorAll("[data-hplat]").forEach(M=>M.onclick=A=>{A.stopPropagation();let[O,et]=M.dataset.hplat.split(":"),nt=V(O);if(nt.platAt=et==="1"?Date.now():0,nt.platAt){nt.goAt=0;let z=Tn(nt);z!=null&&(xo.s=z,xo.at=Date.now())}mi(nt),ye(!0)}),c.querySelectorAll("[data-hnotst]").forEach(M=>M.onclick=A=>{A.stopPropagation(),It.homeW=It.w;try{localStorage.setItem("rod_homew",JSON.stringify(It.w))}catch{}ye(!0)}),c.querySelectorAll("[data-hdel]").forEach(M=>M.onclick=()=>{ke.st=[],ke.open=!1,mi(ke),ye(!0),sm()}),c.querySelectorAll("[data-dk]").forEach(M=>{let A=0,O=0,et=0,nt=()=>{clearTimeout(A),A=0,M.classList.remove("lpress")};M.addEventListener("pointerdown",z=>{let at=v[+M.dataset.dk];!at||at.num==null||!M.matches("li.hr, .hv")||(O=z.clientX,et=z.clientY,M.classList.add("lpress"),A=setTimeout(()=>{if(A=0,M.classList.remove("lpress"),M._lpDone=Date.now(),!Xh(at,Qt())){qh(at.est!=null?st(at.est):"");return}let W=Jr(at.num,"lock",M.closest(".hplace")?.querySelector("[data-ht]")?.dataset.ht);try{navigator.vibrate&&navigator.vibrate(35)}catch{}Ve(`${__t(544)} ${W&&W.tr.fam||at.fam||""} ${at.num} \xB7 ${__t(533)}`),ye(!0)},700))}),M.addEventListener("pointermove",z=>{A&&Math.hypot(z.clientX-O,z.clientY-et)>10&&nt()}),["pointerup","pointercancel","pointerleave"].forEach(z=>M.addEventListener(z,()=>{A&&nt()})),M.addEventListener("contextmenu",z=>z.preventDefault())}),c.querySelectorAll(".hv .hwhere").forEach(M=>M.onclick=A=>{A.stopPropagation();let O=M.closest("[data-dk]"),et=O&&v[+O.dataset.dk];et&&(Ii("map"),Gs(et))}),c.querySelectorAll("[data-dk]").forEach(M=>M.onclick=()=>{if(M._lpDone&&Date.now()-M._lpDone<1500)return;let A=v[+M.dataset.dk];if(M.matches("li.hr, .hv")&&!A.gone&&A.num!=null){let O=M.closest(".hplace")?.querySelector("[data-ht]")?.dataset.ht;if(O){let et=ln.get(O)===String(A.num);ii(O,et?null:String(A.num)),et&&Rn.num===String(A.num)&&(Rn.num=""),et?bt&&String(bt.num)===String(A.num)&&(bt=null,Nt=null,He.sk="",d._h="",Ie()):Gs(A,!0),ye(!0);return}}if(A.gone&&M.closest("#home")){Ve(`${__t(557)} \xB7 ${A.fam||""} ${A.num||""}`,{label:__t(531),fn:()=>{Ii("map"),Gs(A)}});return}Gs(A)}),c.querySelectorAll("[data-pinnext]").forEach(M=>M.onclick=A=>{if(A.target.closest("[data-unpin]"))return;let[O,et]=M.dataset.pinnext.split(":");ii(O,et);let nt=cm(O,et);nt&&Gs(nt,!0),ye(!0)}),c.querySelectorAll("[data-unpin]").forEach(M=>M.onclick=A=>{A.stopPropagation(),ii(M.dataset.unpin,null),ye(!0)}),c.querySelectorAll("[data-hal]").forEach(M=>M.onclick=()=>x("#alr").click()),Np(c)}function Gs(o,c){if(!o)return;let f=t.days.indexOf(Qt().ymd),p=re.find(C=>C.real?o.tid&&C.v.tid===o.tid||o.num&&String(C.tr?C.tr.num:C.v.num)===String(o.num):o.tr&&C.tr===o.tr||o.num&&C.tr&&String(C.tr.num)===String(o.num)),v=o.tr||p&&p.tr||(it[f]||[]).find(C=>String(C.num)===String(o.num));if(Ot=_e=Ct=!1,me=-1,c||void 0,bt=p?p.tr||{vtid:p.v.tid}:v||null,!bt)return;c&&(He.sk="t"+(bt.num||bt.vtid)),Nt=p&&p.tr?p.tr:null,Nt&&innerWidth<=640&&(d.classList.add("peek"),x("#rc").classList.contains("min")||x("#rcgrab").click());let y=p?p.p.w:null;y&&Object.assign(s,{tx:y[0],ty:y[1],dist:Math.min(s.dist,22)}),Hn(),d._h="",Ie(),be=0,a()}let Kr=!1;function mm(o){Kr=o||!1,S.value="",S.placeholder=o==="work"?__t(558):o==="home"?__t(559):__t(560),document.documentElement.classList.add("srch"),g.style.display="none",S.focus()}let gm=()=>document.documentElement.classList.remove("srch");{let o=x("#hfind");o&&(o.onclick=()=>mm(""))}S.addEventListener("blur",()=>setTimeout(()=>{document.activeElement!==S&&gm(),Kr&&!S.value.trim()&&(Kr=!1,S.placeholder=__t(560))},600));function X1(){}function id(o,c){let f=c==="work"?ke:Ye,p=T[o].id,v=T.filter(y=>y.fams.size&&y!==T[o]&&Math.hypot(y.w[0]-T[o].w[0],y.w[1]-T[o].w[1])<.6).map(y=>y.id);f.st=[p,...v].slice(0,3),f.i=0,f.open=!0,mi(f),ye(!0),sm()}let ic=x("#lines");ic.innerHTML=`${__t(561)}`+X.map(o=>`<button type="button" style="--c:${Y[o]}" data-f="${o}">${o}</button>`).join("");function _m(){try{ye(!0)}catch{}{let o=x("#linebtn");o||(o=document.createElement("button"),o.type="button",o.id="linebtn",ic.after(o),o.onclick=()=>{Yt=[...dt][0],Ct=Ot=_e=!1,d._h="",Ie()});let c=dt.size===1?[...dt][0]:"";o.hidden=!c,c&&(o.innerHTML=`${__t(562)}${m(c)}${__t(563)}`)}ic.querySelectorAll("[data-f]").forEach(o=>{o.dataset.f!=="*"&&o.classList.toggle("off",!dt.has(o.dataset.f))})}ic.querySelectorAll("[data-f]").forEach(o=>o.onclick=()=>{let c=o.dataset.f;c==="*"?X.forEach(f=>dt.add(f)):dt.size===X.length?(dt.clear(),dt.add(c)):dt.has(c)?(dt.delete(c),dt.size||X.forEach(f=>dt.add(f))):dt.add(c);try{localStorage.setItem("rod_lines",JSON.stringify([...dt]))}catch{}_m(),Kt(),Hn(),Hh(),be=0,a()});let sd=[...document.querySelectorAll("[data-sp]")],Ri=0;function xm(o){let c=Qt();o&&(Ut===o||Ri===o)?Ut?(jt=c.min,ue=c.min,Ut=0,Ri=o):(ge=performance.now(),Ut=o,Ri=0):o===0?(Ut=0,ue=null,Ri=0):(jt=c.min,ge=performance.now(),ue=c.min,Ut=o,Ri=0),sd.forEach(f=>{let p=+f.dataset.sp;f.classList.toggle("on",p===(Ut||Ri)||!Ut&&!Ri&&ue==null&&p===0),f.classList.toggle("pz",!!Ri&&p===Ri),f.textContent=p===0?__t(564):Ri===p?"\u25B6 \xD7"+p:Ut===p?"\u23F8 \xD7"+p:"\xD7"+p}),be=0,a()}sd.forEach(o=>o.onclick=()=>xm(+o.dataset.sp)),x("#tsl").oninput=o=>{let c=+o.target.value;jt=c,ue=c,ge=performance.now(),Ut===0&&!Ri&&sd.forEach(f=>f.classList.remove("on")),be=0,a()},setInterval(()=>{ue!=null&&Ut&&jt+(performance.now()-ge)/6e4*Ut>1560&&(jt=240,ge=performance.now())},1e3),window.__rodSearch=o=>{let c=w(o.trim());if(!c){g.style.display="none",g._pick=null;return}let f=[],p=[];T.forEach((L,P)=>{if(!L.fams.size)return;let U=w(L.n);U.startsWith(c)||U.includes(" "+c)||U.includes("-"+c)?f.push(P):U.includes(c)&&p.push(P)});let v=f.concat(p).slice(0,7),y=N.filter(L=>w(L.name).startsWith(c)).sort((L,P)=>P.pop-L.pop).slice(0,3),C=v.map(L=>({h:`\u{1F689} ${m(T[L].n)}<em>${[...T[L].fams].sort(B).slice(0,3).map(P=>`<em class="ls" style="background:${Y[P]}">${P}</em>`).join(" ")}</em>`,go:()=>{if(gm(),Kr){let P=Kr;Kr=!1,S.placeholder=__t(560),id(L,P);return}He.on&&He.cur!=="map"&&Ii("map"),Ot=!1,_e=!1,Ct=!1,me=L,bt=null,Nt=null,Hn(),Object.assign(s,{tx:T[L].w[0],ty:T[L].w[1],dist:Math.min(s.dist,20),tilt:Math.max(s.tilt,.5)}),Ie(),a()}})).concat(y.map(L=>({h:`${m(L.name)}${__t(565)}`,go:()=>{Object.assign(s,{tx:L.cx,ty:L.cy,dist:b(L.size*3+14,14,60)}),a()}})));g.innerHTML=C.map((L,P)=>`<li data-i="${P}">${L.h}</li>`).join("")||__t(566),g.style.display="block",g._pick=L=>{C[L]&&(C[L].go(),g.style.display="none",S.value="",S.blur())},g.querySelectorAll("li[data-i]").forEach(L=>L.onclick=()=>g._pick(+L.dataset.i))},_m(),Hn();try{let o=new URLSearchParams(location.search).get("st");if(o){let c=w(o),f=-1,p=0;T.forEach((v,y)=>{if(!v.fams.size)return;let C=w(v.n),L=C===c?3:C.startsWith(c)||c.startsWith(C)?2:C.includes(c)||c.includes(C)?1:0;L>p&&(p=L,f=y)}),f>=0&&setTimeout(()=>{me=f,Hn(),Object.assign(s,{tx:T[f].w[0],ty:T[f].w[1],dist:18,tilt:.5}),Ie(),a()},300)}}catch{}let rd={v:!1};document.addEventListener("click",o=>{!(o.target.closest&&o.target.closest("[data-halx]"))||o.target.closest("a")||(rd.v=!rd.v,ye(!0))}),d.addEventListener("click",o=>{if(!d.classList.contains("peek")&&innerWidth<=640&&bt&&d.querySelector(".mn")&&!o.target.closest("button,a,input,select,label,summary,[data-alarm],[data-gs],[data-gt],[data-sf],[data-al],[role=button]")){let f=d.querySelector(".mn");o.stopPropagation(),f&&f.click();return}if(!d.classList.contains("peek")||o.target.closest("button,a,input"))return;o.stopPropagation(),o.preventDefault(),d.classList.remove("peek");let c=d.querySelector(".mn");c&&(c.textContent="\u25BE"),d.scrollTop=0},!0),d.addEventListener("pointerdown",()=>{d._touch=Date.now()+2500},!0),["pointerup","pointercancel"].forEach(o=>d.addEventListener(o,()=>{d._touch=0},!0));{let o=0,c=0,f=0,p=0;d.addEventListener("touchstart",v=>{p=innerWidth<=640&&bt&&(!He.on||He.cur==="map")&&v.touches.length===1&&!v.target.closest("input")?1:0,p&&(o=v.touches[0].clientX,c=v.touches[0].clientY,f=0)},{passive:!0}),d.addEventListener("touchmove",v=>{if(!p)return;let y=v.touches[0].clientX-o,C=v.touches[0].clientY-c;p===1&&(Math.abs(y)<12&&Math.abs(C)<12||(p=Math.abs(y)>Math.abs(C)*1.3&&y<0?2:0,!p))||(v.preventDefault(),f=Math.min(0,y),d.style.transition="none",d.style.transform=`translateX(${f}px)`,d.style.opacity=String(Math.max(.3,1+f/300)))},{passive:!1}),d.addEventListener("touchend",()=>{if(p!==2){p=0;return}if(p=0,d.style.transition="transform .18s,opacity .18s",f>-90){d.style.transform="",d.style.opacity="";return}d.style.transform="translateX(-110%)",d.style.opacity="0",setTimeout(()=>{let v=d.querySelector("[data-cx]");v&&v.click(),d.style.transition="",d.style.transform="",d.style.opacity=""},180)}),d.addEventListener("touchcancel",()=>{p===2&&(d.style.transform="",d.style.opacity=""),p=0})}let He={on:!1,cur:"now",home:new Map},sc=matchMedia("(max-width:640px), (max-height:500px) and (pointer:coarse)"),Un=document.createElement("nav");Un.id="tabs";let Y_=[["now","\u{1F552}",__t(564)],["map","\u{1F5FA}\uFE0F",__t(567)],["line","\u{1F4CA}",__t(568)],["set","\u2699\uFE0F",__t(569)]];Un.innerHTML=Y_.map(([o,c,f])=>`<button type="button" data-tab="${o}"><span>${c}</span><small>${f}</small></button>`).join(""),document.body.appendChild(Un);let _r=document.createElement("i");_r.className="tind",_r.setAttribute("aria-hidden","true"),Un.prepend(_r);let vm=o=>[...Un.querySelectorAll("[data-tab]")].find(c=>{let f=c.getBoundingClientRect();return o>=f.left&&o<f.right}),ad=o=>{!o||!o.offsetWidth||(_r.style.width=o.offsetWidth+"px",_r.style.height=o.offsetHeight+"px",_r.style.top=o.offsetTop+"px",_r.style.transform=`translateX(${o.offsetLeft}px)`)},Qr=()=>ad(Un.querySelector("[data-tab].on")),J_=()=>{try{let o=window.Capacitor,c=o&&o.isNativePlatform&&o.isNativePlatform()&&o.Plugins&&o.Plugins.Haptics;c&&c.selectionChanged().catch(()=>{})}catch{}},si={on:!1,b:null,moved:!1,until:0};Un.addEventListener("pointerdown",o=>{let c=vm(o.clientX);if(c){si.on=!0,si.b=c,si.moved=!1,Un.classList.add("drag"),Un.querySelectorAll(".hov").forEach(f=>f.classList.remove("hov")),c.classList.add("hov"),ad(c);try{Un.setPointerCapture(o.pointerId)}catch{}try{let f=window.Capacitor,p=f&&f.Plugins&&f.Plugins.Haptics;p&&f.isNativePlatform()&&p.selectionStart().catch(()=>{})}catch{}}}),Un.addEventListener("pointermove",o=>{if(!si.on)return;let c=vm(o.clientX);c&&c!==si.b&&(si.b.classList.remove("hov"),c.classList.add("hov"),si.b=c,si.moved=!0,ad(c),J_())});let ym=o=>{if(si.on){si.on=!1,Un.classList.remove("drag"),Un.querySelectorAll(".hov").forEach(c=>c.classList.remove("hov"));try{let c=window.Capacitor,f=c&&c.Plugins&&c.Plugins.Haptics;f&&c.isNativePlatform()&&f.selectionEnd().catch(()=>{})}catch{}o&&si.b?(si.until=Date.now()+500,si.b.dataset.tab!==He.cur?Ii(si.b.dataset.tab):Qr()):Qr()}};Un.addEventListener("pointerup",()=>ym(!0)),Un.addEventListener("pointercancel",()=>ym(!1)),addEventListener("resize",()=>setTimeout(Qr,60));try{new ResizeObserver(()=>Qr()).observe(Un)}catch{}let ta=document.createElement("div");ta.id="tabL",document.body.appendChild(ta);let xr=document.createElement("div");xr.id="tabA",xr.className="box",document.body.appendChild(xr);let od=(o,c)=>{o&&(He.home.has(o)||He.home.set(o,[o.parentNode,o.nextSibling]),c.appendChild(o))},Sm=()=>{for(let[o,[c,f]]of He.home)try{c.insertBefore(o,f&&f.parentNode===c?f:null)}catch{}He.home.clear()};function ld(){let o=[...new Set([Ye,ke].flatMap(y=>{let C=Tn(y);return C!=null?[...T[C].fams]:[]}))],c=(dt.size&&dt.size<=8?[...dt]:o.length?o:[]).filter(y=>Y[y]).sort(B),f=c.join(","),p=G.alerts.filter(y=>[...y.fams].some(C=>dt.has(C))).length,v=[Ct,_e,Yt,Ot,f,p].join("|");ta._k!==v&&(ta._k=v,ta.innerHTML=`<button type="button" data-tl="stats" class="${Ct?"on":""}">\u{1F4CA} ${__t(570)}</button><button type="button" data-tl="alr" class="${_e?"on":""}">\u26A0\uFE0F ${p}${p===1?__t(335):__t(336)}</button>${c.map(y=>`<button type="button" data-tl="line:${m(y)}" class="${Yt===y?"on":""}">\u{1F4CB} ${m(y)}</button>`).join("")}<a href="https://www.whatsapp.com/channel/0029Vav4hGTId7nPenKMuo2C" target="_blank" rel="noopener" title="${__t(170)}">\u{1F4AC}</a>`,ta.querySelectorAll("[data-tl]").forEach(y=>y.onclick=()=>{let C=y.dataset.tl;Ct=C==="stats",_e=C==="alr",Yt=C.startsWith("line:")?C.slice(5):"",Ot=!1,bt=null,me=-1,Ct&&(we.at=0),d._h="",Ie(),ld()}))}document.addEventListener("visibilitychange",()=>{!document.hidden&&window.__txt&&window.__txt()});let Z_="https://raw.githubusercontent.com/elMonoAmelio/catalunya-survival/horarios/rod_pack.json",j_=()=>St(new Date).ymd.replace(/-/g,"");function vo(){navigator.onLine===!1||location.protocol==="file:"&&!/[?&]pack=1/.test(location.search)||fetch(Z_,{cache:"no-store"}).then(o=>o.ok?o.text():null).then(o=>{if(!o)return;let c;try{c=JSON.parse(o)}catch{return}if(!c||!c.gen||!Array.isArray(c.days)||!c.trips||c.gen<=t.gen)return;try{localStorage.setItem("rod_pack",o)}catch{return}let f=j_(),p=t.days.indexOf(f),v=c.days.indexOf(f),y=p<0?0:ht.filter(P=>P.day===p).length,C=0;if(v>=0)for(let P of c.trips)P[0]===v&&C++;let L=v>=0&&y&&(Math.abs(C-y)/y>.1||!C);if(p<0||p>=t.days.length-2||L){try{sessionStorage.setItem("rod_packmsg",L?"1":"")}catch{}location.reload();return}yo.v=!0}).catch(()=>{})}let yo={v:!1};document.addEventListener("visibilitychange",()=>{document.hidden&&yo.v?(yo.v=!1,yo.reload=!0):!document.hidden&&yo.reload&&location.reload()});try{sessionStorage.getItem("rod_packmsg")==="1"&&(sessionStorage.removeItem("rod_packmsg"),setTimeout(()=>Ve("\u{1F5D3}\uFE0F "+__t(571)),1500))}catch{}if(setTimeout(vo,4e3),document.addEventListener("visibilitychange",()=>{!document.hidden&&Date.now()-(vo.at||0)>6*36e5&&(vo.at=Date.now(),vo())}),vo.at=Date.now(),window.__RODNEW__){let o=window.__RODNEW__,c=x("#ver");c&&c.firstChild&&c.firstChild.nodeType===3&&(c.firstChild.textContent=c.firstChild.textContent.replace(/(\d\d\/\d\d \d\d:\d\d)/,o.slice(8,10)+"/"+o.slice(5,7)+" "+o.slice(11,16)))}function rc(){Sm();let o=window.__L||"es",c=fi.mode;xr.innerHTML=`<h3>${__t(569)}</h3>
      <h4>\u{1F310} ${__t(572)}</h4><div class="seg2">${"ca|Catal\xE0,es|Espa\xF1ol,en|English".split(",").map(f=>f.split("|")).map(([f,p])=>`<button type="button" data-lang="${f}" class="${o===f?"on":""}">${p}</button>`).join("")}</div>
      <h4>\u{1F319} ${__t(573)}</h4><div class="seg2">${[["auto",__t(357)],["light",__t(574)],["dark",__t(575)]].map(([f,p])=>`<button type="button" data-th="${f}" class="${c===f?"on":""}">${p}</button>`).join("")}</div>
      <h4>\u{1F520} ${__t(576)}</h4><div class="seg2">${(()=>{let f="";try{f=localStorage.getItem("rod_big")||""}catch{}let p=f==="1"?"1":f==="0"?"0":"a";return[["a",__t(357)],["0","Normal"],["1",__t(577)]].map(([v,y])=>`<button type="button" data-big="${v}" class="${p===v?"on":""}">${y}</button>`).join("")})()}</div>${(()=>{let f="";try{f=localStorage.getItem("rod_big")||""}catch{}return f==="1"||f==="0"?"":`<small class="tabAhint">${__t(578)}</small>`})()}
      <h4>\u{1F514} ${__t(579)}</h4><div id="tabAbell"></div><small class="tabAhint">${__t(580)}</small>${Ql().length?"":`<small class="tabAhint">${__t(581)}</small>`}${(()=>{let f=Ql();return f.length>1?`<small class="tabAhint">${__t(582)}</small><div class="alch">${f.map(p=>`<button type="button" data-al="${m(p)}" class="ln${gr.has(p)?" off":""}" style="--c:${Y[p]}">${m(p)}</button>`).join("")}</div>`:""})()}
      <h4>\u{1F4E1} ${__t(583)}</h4><div id="tabArt"></div>
      <h4>\u2139\uFE0F ${__t(584)}</h4><div id="tabAinf"></div><p class="tdisc">${__t(585)}</p>
      <p class="tabAfoot">MonkiSoft</p>`,xr.querySelectorAll("[data-al]").forEach(f=>f.onclick=()=>{let p=f.dataset.al,v=Ql();gr.has(p)?gr.delete(p):v.filter(y=>!gr.has(y)).length>1&&gr.add(p);try{localStorage.setItem("rod_aloff",JSON.stringify([...gr]))}catch{}ye(!0),rc()}),xr.querySelectorAll("[data-big]").forEach(f=>f.onclick=()=>{let p=f.dataset.big;try{p==="a"?localStorage.removeItem("rod_big"):localStorage.setItem("rod_big",p)}catch{}window.__txt&&window.__txt(),rc(),ye(!0)}),xr.querySelectorAll("[data-th]").forEach(f=>f.onclick=()=>{fi.mode=f.dataset.th;try{localStorage.setItem("rod_theme",fi.mode)}catch{}Wl(),rc()}),od(x("#bell"),x("#tabAbell")),od(x("#src"),x("#tabArt")),od(x("#ver"),x("#tabAinf"))}function Ii(o){if(!He.on)return;let c=He.cur;if(He.cur=o,document.documentElement.dataset.tab=o,window.__mapHidden=o!=="map",o==="line"&&d.classList.remove("peek"),!window.__mapHidden&&window.__wakeMap&&window.__wakeMap(),Un.querySelectorAll("[data-tab]").forEach(f=>f.classList.toggle("on",f.dataset.tab===o)),Qr(),o==="line")(bt||me>=0)&&(He.keep={t:bt,s:me,sk:He.sk}),!Ct&&!_e&&!Yt&&!Ot&&(Ct=!0,we.at=0),bt=null,me=-1,d._h="",Ie(),ld();else if(c==="line"){Ct=_e=Ot=!1,Yt="";let f=He.keep;He.keep=null,f&&o==="map"&&!bt&&me<0&&(bt=f.t,me=f.s,He.sk=f.sk),d._h="",Ie()}o==="map"&&requestAnimationFrame(()=>requestAnimationFrame(()=>{try{Vh()}catch{}dispatchEvent(new Event("resize"))})),o==="set"&&rc(),o==="now"&&(ye(!0),requestAnimationFrame(tc)),be=0,a()}Un.onclick=o=>{if(Date.now()<si.until)return;let c=o.target.closest("[data-tab]");c&&Ii(c.dataset.tab)},window.__rodTabSync=()=>{if(!He.on)return;let o=bt?"t"+(bt.num||bt.vtid):me>=0?"s"+me:"",c=o!==He.sk;He.sk=o,o&&c&&He.cur!=="map"?Ii("map"):(_e||Yt||Ot)&&He.cur!=="line"&&He.cur!=="map"&&Ii("line"),He.cur==="line"&&ld()};function cd(){let o=sc.matches||document.documentElement.classList.contains("cap");if(o!==He.on)if(He.on=o,document.documentElement.classList.toggle("tabmode",o),requestAnimationFrame(()=>requestAnimationFrame(Qr)),o||(window.__mapHidden=!1),o){let c="now";try{let f=sessionStorage.getItem("rod_tabgo");f&&(sessionStorage.removeItem("rod_tabgo"),/^(now|map|line|set)$/.test(f)&&(c=f))}catch{}Ii(c)}else delete document.documentElement.dataset.tab,Sm()}sc.addEventListener?sc.addEventListener("change",cd):sc.addListener(cd),cd();{let o=x("#rc"),c=()=>document.documentElement.style.setProperty("--rch",Math.round(o.getBoundingClientRect().height)+"px");window.ResizeObserver&&new ResizeObserver(c).observe(o),c()}let ud={"\u{1F3D8}":'<path d="M3 21V11l5-4 5 4v10"/><path d="M13 21V9l4-3 4 3v12"/><path d="M2 21h20"/><path d="M7 21v-4h2v4"/>',"\u{1F3E0}":'<path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/>',"\u{1F4BC}":'<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5h6v2"/><path d="M3 13h18"/>',"\u{1F4CD}":'<path d="M12 21s-7-6.5-7-12a7 7 0 0114 0c0 5.5-7 12-7 12z"/><circle cx="12" cy="9" r="2.5"/>',"\u{1F686}":'<rect x="5" y="3" width="14" height="14" rx="3"/><path d="M5 11h14M8 21l2-4M16 21l-2-4"/><circle cx="9" cy="14" r=".6"/><circle cx="15" cy="14" r=".6"/>',"\u{1F6B6}":'<circle cx="13" cy="4" r="2"/><path d="M12 7l-2 6 3 3v5M10 13l-3 8M11 8l4 3h3M11 8l-4 3"/>',"\u{1F689}":'<path d="M4 20h16M6 20V9l6-5 6 5v11"/><path d="M10 20v-5h4v5"/>',"\u26A0\uFE0F":'<path d="M12 3l10 18H2z"/><path d="M12 10v5M12 18v.4"/>',"\u{1F4CC}":'<path d="M9 3h6l-1 6 3 3H7l3-3z"/><path d="M12 12v9"/>',"\u{1F5D3}\uFE0F":'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',"\u{1F4E1}":'<path d="M5 19a10 10 0 0114 0M8 16a6 6 0 018 0"/><circle cx="12" cy="20" r="1"/><path d="M3 15a14 14 0 0118 0"/>',"\u{1F552}":'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',"\u{1F5FA}\uFE0F":'<path d="M9 4L3 6v14l6-2 6 2 6-2V4l-6 2-6-2z"/><path d="M9 4v14M15 6v14"/>',"\u{1F4CA}":'<path d="M4 20V11M10 20V4M16 20v-7M2 20h20"/>',"\u2699\uFE0F":'<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1"/>',"\u{1F310}":'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/>',"\u{1F319}":'<path d="M20 14A8 8 0 1110 4a7 7 0 0010 10z"/>',"\u{1F520}":'<path d="M3 18l4-12 4 12M4.5 14h5M15 18V9h3.5a2.5 2.5 0 010 5H15M15 14h4a2 2 0 010 4h-4"/>',"\u{1F514}":'<path d="M6 16V11a6 6 0 0112 0v5l2 2H4z"/><path d="M10 21h4"/>',"\u{1F515}":'<path d="M6 16V11a6 6 0 0112 0v5l2 2H4z"/><path d="M10 21h4M3 3l18 18"/>',"\u2139\uFE0F":'<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.5"/>',"\u{1F4CB}":'<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V3h6v1M8 10h8M8 14h8M8 18h5"/>',"\u{1F4AC}":'<path d="M4 5h16v11H9l-5 4z"/>',"\u26D4":'<circle cx="12" cy="12" r="9"/><path d="M7 12h10"/>',"\u{1F4F6}":'<path d="M4 20v-3M9 20v-7M14 20V9M19 20V5"/>',"\u23F3":'<path d="M7 3h10M7 21h10M8 3c0 6 8 6 8 9s-8 3-8 9M16 3c0 6-8 6-8 9s8 3 8 9"/>',"\u{1F3D9}\uFE0F":'<path d="M3 21V9h6v12M9 21V4h6v17M15 21v-9h6v9M2 21h20"/>',"\u{1F4E4}":'<path d="M12 15V3M7 8l5-5 5 5"/><path d="M5 12v8h14v-8"/>',"\u2B50":'<path d="M12 3l2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.3 6.4 20.2l1.1-6.2L3 9.6l6.2-.9z"/>'},hd=new RegExp("("+Object.keys(ud).map(o=>o.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")).join("|")+")\uFE0F?","g"),K_=o=>`<span class="ico" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${ud[o]||ud[o+"\uFE0F"]||""}</svg></span>`;function Q_(o){let c=document.createTreeWalker(o,NodeFilter.SHOW_TEXT),f=[],p;for(;p=c.nextNode();)p.parentElement&&p.parentElement.closest(".ico,script,style,textarea,input")||(hd.lastIndex=0,hd.test(p.nodeValue)&&f.push(p));for(let v of f){let y=document.createElement("span");y.innerHTML=m(v.nodeValue).replace(hd,(C,L)=>K_(L)),v.replaceWith(...y.childNodes)}return f.length}{let o=()=>["#home","#tabs","#tabA","#tabL","#mcs","#onb","#toast","#rc","#inf","#mbtn","#sbtn","#wabtn","#bell","#list"].map(v=>x(v)).filter(Boolean),c=!1,f=()=>{if(!c){c=!0;try{let v=0;o().forEach(y=>{v+=Q_(y)}),v&&He.on&&tc()}finally{c=!1}}},p=new MutationObserver(()=>{c||queueMicrotask(f)});setTimeout(()=>{f(),o().forEach(v=>p.observe(v,{childList:!0,subtree:!0,characterData:!0}))},0)}window.__rod={PIN:ln,LASTPIN:Rn,get ONBX(){return{tid:mt.tid,lock:mt.lock,manual:mt.manual}},xferCands:Zp,bestXfer:Zh,xferFirst:Jh,nowState:Qt,XMIN:Jp,pinNotify:lm,toast:Ve,cardEta:Yr,HOME:Ye,WORK:ke,ONB:mt,alertForMe:nm,whereAmI:Qh,departuresFor:Jn,DEPS:Ft,tripByNum:As,delayOf:gt,TID:pt,SID:kt,byDay:it,get days(){return t.days},get hist(){return we},get past(){return Dt.cur},get cols(){return mn.mesh?mn.mesh.count:-1},get dist(){return r.dist},get follow(){return Nt},get selTrip(){return bt},ST:T,TR:ht,FAM:X,act:()=>re,setSpeed:xm,RT:G,pollRT:de,nowState:Qt,posAt:Vs,activeTrips:I,LL:wt,select:o=>{bt=o,Ie()}}}var Ya=window.__DATA__;var Ge=i=>document.querySelector(i),Bs=i=>String(i).replace(/\B(?=(\d{3})+(?!\d))/g,"."),ni=(i,t,e)=>Math.min(e,Math.max(t,i)),Kf=i=>i.normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase(),ui=Ge("#c"),Dl=new xh({canvas:ui,antialias:!0});Dl.setPixelRatio(Math.min(devicePixelRatio||1,2));var ks=new zo;ks.background=new ve(15659509);var Uh=35,vs=new ti(Uh,1,2,1500);ks.add(new ul(16777215,9080992,1));var Vg=new dl(16777215,.9);Vg.position.set(-40,-70,90);ks.add(Vg);var _s=100/Ya.w,Pl=Ya.w/2,Ll=Ya.h/2,Sn=[],Qf=new Xi;ks.add(Qf);var Ih=new Cr({color:16777215,transparent:!0,opacity:.55});for(let i of Ya.m){let t=new Xi,e=[],n=[],s=1e9,r=-1e9,a=1e9,l=-1e9;for(let b of i.g){let w=b.map(x=>{let m=[];for(let $=0;$<x.length;$+=2)m.push(new zt((x[$]-Pl)*_s,(x[$+1]-Ll)*_s));return m.length>1&&m[0].equals(m[m.length-1])&&m.pop(),m}).filter(x=>x.length>=3);if(!w.length)continue;let N=new La(w[0]);for(let x=1;x<w.length;x++)N.holes.push(new Ir(w[x]));e.push(N);for(let x of w[0])s=Math.min(s,x.x),r=Math.max(r,x.x),a=Math.min(a,x.y),l=Math.max(l,x.y);for(let x of w)n.push(new qo(new bn().setFromPoints(x.map(m=>new Z(m.x,m.y,0))),Ih))}if(!e.length)continue;let u;try{u=new sl(e,{depth:1,bevelEnabled:!1})}catch{continue}let h=new ol({color:13421772}),d=new kn(u,h);t.add(d);let S=new Xi;n.forEach(b=>S.add(b)),S.position.z=.04,Qf.add(S),t.scale.z=.01,Qf.add(t);let g={og:S,rings:i.g,inF:!0,sel:null,code:i.c,name:i.n,pop:i.p,area:i.a,pr:i.pr,rankP:0,rankD:0,group:t,mesh:d,mat:h,cx:(s+r)/2,cy:(a+l)/2,size:Math.max(r-s,l-a),z:.01,zt:.01,rank:0};d.userData.m=g,Sn.push(g)}var _A=Sn.map(i=>i.mesh),Ug=i=>{let t=0;for(let e=0;e<i.length;e+=2){let n=(e+2)%i.length;t+=i[e]*i[n+1]-i[n]*i[e+1]}return Math.abs(t)/2},Hg=0,Gg=0;for(let i of Sn){for(let t of i.rings)Hg+=Ug(t[0])-t.slice(1).reduce((e,n)=>e+Ug(n),0);Gg+=i.area}var R1=Math.sqrt(Gg/Hg),Ah={"08":"Barcelona",17:"Girona",25:"Lleida",43:"Tarragona"},Wg={"08":__t(586),17:__t(587),25:__t(588),43:__t(589)},ap="sqrt",op="pop",Zf=0,tp=0,Ha=1,Rl=1,I1={sqrt:i=>Math.sqrt(i),lin:i=>i,log:i=>Math.log10(Math.max(i,1))},ep=i=>op==="pop"?i.pop:i.pop/i.area,Eh=["#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#b10026","#5c0020"].map(i=>new ve(i));function P1(i){i=ni(i,0,1)*(Eh.length-1);let t=Math.min(Math.floor(i),Eh.length-2);return Eh[t].clone().lerp(Eh[t+1],i-t)}var Ga=i=>i>=100?Bs(Math.round(i)):i.toLocaleString("es-ES",{maximumFractionDigits:1});function L1(){tp=0;for(let i of Sn)tp+=i.pop;[...Sn].sort((i,t)=>t.pop-i.pop).forEach((i,t)=>i.rankP=t+1),[...Sn].sort((i,t)=>t.pop/t.area-i.pop/i.area).forEach((i,t)=>i.rankD=t+1),Yg()}var Xg=new ve("#d3d8e2"),qg=new ve("#eceff3");window.__mapTheme=i=>{ks.background=new ve(i?856345:15659509),qg.set(i?"#2b3242":"#eceff3"),Xg.set(i?"#1a1f29":"#d3d8e2"),Ih.color.set(i?856345:16777215),Ih.opacity=i?.7:.55,lp.color.set(i?329483:2764864),cp.color.set(i?9081766:16777215);for(let t of Sn)t.base&&Oh(t);zn()};function Oh(i){i.mat.color.copy(i.base).lerp(qg,document.documentElement.classList.contains("dark")?.95:.86),i.inF||i.mat.color.lerp(Xg,.8)}function Yg(){Ha=1,Rl=1e12;for(let e of Sn){let n=ep(e);Ha=Math.max(Ha,n),Rl=Math.min(Rl,n)}let i=Math.log10(Math.max(Rl,.01)),t=Math.log10(Ha);for(let e of Sn)e.base=P1((Math.log10(Math.max(ep(e),.01))-i)/(t-i)),Oh(e);Ge("#lmin").textContent=Ga(Rl),Ge("#lmax").textContent=Ga(Ha),Ge("#lname").textContent=op==="pop"?__t(590):__t(591),Fh()}function Fh(){let i=I1[ap],t=i(Ha),e=24*Zf;for(let n of Sn)n.zt=Zf<=.001?.01:Math.max(.12*Math.min(1,Zf),e*i(ep(n))/t)*(n.inF?1:.1);zn()}var Og=Object.fromEntries(Sn.map(i=>[i.code,i])),Ch=[],Jg=[];for(let i of Ya.bd){let t=Og[i.a],e=Og[i.b];if(!(!t||!e))for(let n=0;n+3<i.p.length;n+=2)Jg.push((i.p[n]-Pl)*_s,(i.p[n+1]-Ll)*_s,0,(i.p[n+2]-Pl)*_s,(i.p[n+3]-Ll)*_s,0),Ch.push(t,e)}var Ph=new ji;Ph.setPositions(Jg);var lp=new ds({color:2764864,linewidth:4.4,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3}),cp=new ds({color:16777215,linewidth:2.4,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-6});[lp,cp].forEach((i,t)=>{let e=new Fr(Ph,i);e.frustumCulled=!1,e.renderOrder=10+t,ks.add(e)});function D1(){let i=Ph.attributes.instanceStart.data.array;for(let t=0;t<Ch.length;t+=2){let e=Math.max(Ch[t].z,Ch[t+1].z)+.12,n=t/2*6;i[n+2]=e,i[n+5]=e}Ph.attributes.instanceStart.data.needsUpdate=!0}var Lh={};for(let i of Object.keys(Ah)){let t=Sn.filter(d=>d.pr===i),e=0,n=0,s=0,r=1e9,a=-1e9,l=1e9,u=-1e9;for(let d of t)e+=d.area,n+=d.cx*d.area,s+=d.cy*d.area,r=Math.min(r,d.cx),a=Math.max(a,d.cx),l=Math.min(l,d.cy),u=Math.max(u,d.cy);let h=document.createElement("div");h.className="plab",h.textContent=Ah[i],h.title=__t(592)+Wg[i],h.onclick=()=>G1("pr:"+i),document.body.appendChild(h),Lh[i]={el:h,p:new Z(n/e,s/e,0),cx:(r+a)/2,cy:(l+u)/2,ext:Math.max(a-r,u-l),ext2:[a-r,u-l],area:e,name:Ah[i]}}var jf=new Z;function N1(){for(let i in Lh){let t=Lh[i];jf.copy(t.p).project(vs),t.el.style.transform=`translate(-50%,-50%) translate(${(jf.x*.5+.5)*innerWidth}px,${(-jf.y*.5+.5)*innerHeight}px)`}}var An={tilt:0,yaw:0,dist:150,tx:0,ty:0},Re={...An};function U1(){let i=innerWidth/innerHeight,t=Math.tan(Uh*Math.PI/360);return Math.max(Ya.h*_s*1.1,100*1.1/i)/(2*t)}var O1=document.getElementById("northr");document.getElementById("north").addEventListener("click",()=>{Re.yaw=Math.round(Re.yaw/(2*Math.PI))*2*Math.PI,Re.tilt=0,zn()});function up(){Object.assign(Re,{tilt:0,yaw:0,dist:U1(),tx:0,ty:0}),zn()}function F1(){let{tilt:i,yaw:t,dist:e,tx:n,ty:s}=An;vs.position.set(n+e*Math.sin(i)*Math.sin(t),s-e*Math.sin(i)*Math.cos(t),e*Math.cos(i)),vs.up.set(-Math.cos(i)*Math.sin(t),Math.cos(i)*Math.cos(t),Math.sin(i)),vs.lookAt(n,s,0)}var Il=!0,Fg=performance.now(),Xa=new Map,lr=0,Th=0;function hp(){lr&&(clearTimeout(lr),lr=0,requestAnimationFrame(Wa))}function zn(){Il=!0,hp()}window.__wakeMap=hp;["pointerdown","wheel","touchstart","keydown"].forEach(i=>addEventListener(i,hp,{passive:!0,capture:!0}));function Wa(i){lr=0;let t=ni((i-Fg)/1e3,0,.05);Fg=i;let e=1-Math.exp(-t*10),n=!1;for(let s of Object.keys(An)){let r=Re[s]-An[s];Math.abs(r)>1e-4*(s==="dist"?10:1)?(An[s]+=r*e,n=!0):An[s]=Re[s]}for(let s of Sn){let r=s.zt-s.z;Math.abs(r)>.002?(s.z+=r*Math.min(1,e*.8),s.group.scale.z=s.z,s.og.position.z=s.z+.04,n=!0):s.z!==s.zt&&(s.z=s.zt,s.group.scale.z=s.z,s.og.position.z=s.z+.04)}for(let[s,r]of Xa){let a=(i-r)/1800;a>=1?(Xa.delete(s),Vr(s)):Vr(s,.5*Math.sin(Math.PI*a)),n=!0}if(window.__rodTick&&window.__rodTick(i)&&(Il=!0),window.__mapHidden){Il=!0,lr=setTimeout(()=>{lr=0,requestAnimationFrame(Wa)},1e3);return}if(n||Il){O1.style.transform=`rotate(${An.yaw}rad) scaleY(${(.55+.45*Math.cos(An.tilt)).toFixed(3)})`;{let s=Math.abs(Math.sin(Re.yaw/2))<.02&&Re.tilt<.03,r=document.getElementById("north");r.classList.contains("flat")!==s&&(r.classList.toggle("flat",s),r.title=s?__t(593):__t(594))}F1(),D1(),N1(),window.__rodFrame&&window.__rodFrame(),Dl.render(ks,vs),Il=n,Ge("#tilt").value=Math.round(Re.tilt*180/Math.PI),Ge("#yaw").value=Math.round(((Re.yaw*180/Math.PI+180)%360+360)%360-180)}if(n||Xa.size){Th=0,requestAnimationFrame(Wa);return}Th||(Th=i),i-Th<1500?requestAnimationFrame(Wa):lr=setTimeout(()=>{lr=0,requestAnimationFrame(Wa)},120)}function Zg(){Dl.setSize(innerWidth,innerHeight,!1),vs.aspect=innerWidth/innerHeight,vs.updateProjectionMatrix(),lp.resolution.set(innerWidth,innerHeight),cp.resolution.set(innerWidth,innerHeight),window.__rodResize&&window.__rodResize(),zn()}addEventListener("resize",()=>{Zg(),fn.length&&ur()});ui.addEventListener("wheel",i=>{i.preventDefault();let t=i.deltaMode===1?16:1,e=i.deltaY*t;if(i.altKey){let n=(Math.abs(i.deltaX)>Math.abs(i.deltaY)?i.deltaX:i.deltaY)*t;Re.yaw+=n*.0035}else i.ctrlKey?Re.dist=ni(Re.dist*Math.exp(e*.01),6,400):Re.tilt=ni(Re.tilt+e*.002,0,1.32);zn()},{passive:!1});ui.addEventListener("contextmenu",i=>i.preventDefault());var xs=new Map,yi=null,kr=0,np=0,ip=0;var Dh=null;ui.addEventListener("pointerdown",i=>{if(i.pointerType!=="mouse"&&!document.body.classList.contains("used")&&(document.body.classList.add("used"),fn.length&&setTimeout(ur,50)),ui.setPointerCapture(i.pointerId),xs.set(i.pointerId,{x:i.clientX,y:i.clientY}),xs.size===1&&(yi={rot:i.button===2||i.altKey,moved:0,multi:!1,touch:i.pointerType!=="mouse"}),xs.size===2){let[t,e]=[...xs.values()];kr=Math.hypot(t.x-e.x,t.y-e.y),np=Math.atan2(e.y-t.y,e.x-t.x),ip=(t.y+e.y)/2,Dh={mode:null,rot:0,sc:0,tl:0},yi&&(yi.multi=!0)}dp()});ui.addEventListener("pointermove",i=>{let t=xs.get(i.pointerId);if(!t){Fs={x:i.clientX,y:i.clientY},sp||(sp=requestAnimationFrame(k1));return}let e=i.clientX-t.x,n=i.clientY-t.y;if(t.x=i.clientX,t.y=i.clientY,xs.size===2){let[s,r]=[...xs.values()],a=Math.hypot(s.x-r.x,s.y-r.y),l=Math.atan2(r.y-s.y,r.x-s.x),u=(s.y+r.y)/2,h=l-np;h>Math.PI&&(h-=2*Math.PI),h<-Math.PI&&(h+=2*Math.PI);let d=kr?a-kr:0,S=u-ip,g=Dh||(Dh={mode:null,rot:0,sc:0,tl:0});g.rot+=h,g.sc+=d,g.tl+=S,g.mode?g.mode==="zoom"&&Math.abs(g.rot)>.45&&(g.mode="rotate"):Math.abs(g.rot)>.3?g.mode="rotate":Math.abs(g.tl)>30&&Math.abs(g.sc)<18?g.mode="tilt":Math.abs(g.sc)>12&&(g.mode="zoom"),(g.mode==="zoom"||g.mode==="rotate")&&kr&&(Re.dist=ni(Re.dist*kr/a,6,400)),g.mode==="rotate"&&(Re.yaw+=h,An.yaw=Re.yaw),g.mode==="tilt"&&(Re.tilt=ni(Re.tilt-S*.006,0,1.32),An.tilt=Re.tilt),kr=a,np=l,ip=u,zn();return}if(yi.moved+=Math.abs(e)+Math.abs(n),yi.rot||i.altKey)Re.yaw+=e*.005,Re.tilt=ni(Re.tilt+n*.004,0,1.32),An.yaw=Re.yaw,An.tilt=Re.tilt;else{let s=2*An.dist*Math.tan(Uh*Math.PI/360)/innerHeight,r=Math.sin(An.yaw),a=Math.cos(An.yaw),l=1/Math.max(Math.cos(An.tilt),.3);Re.tx=ni(Re.tx-a*e*s+-r*n*s*l,-70,70),Re.ty=ni(Re.ty-r*e*s+a*n*s*l,-70,70),An.tx=Re.tx,An.ty=Re.ty}zn()});var jg=i=>{let t=yi&&!yi.rot&&!yi.multi&&yi.moved<(yi.touch?12:6)&&i.type==="pointerup"&&xs.size===1,e=yi&&yi.touch;xs.delete(i.pointerId),kr=0,Dh=null,xs.size||(yi=null),t&&window.__rodTap&&window.__rodTap(i.clientX,i.clientY)};ui.addEventListener("pointerup",jg);ui.addEventListener("pointercancel",jg);ui.addEventListener("dblclick",up);addEventListener("keydown",i=>{i.key==="Alt"&&(ui.style.cursor="move")});addEventListener("keyup",i=>{i.key==="Alt"&&(ui.style.cursor="")});addEventListener("blur",()=>{ui.style.cursor=""});var B1=new pl,Bg=new zt,Fs=null,sp=0,$r=null;function k1(){if(sp=0,!Fs||yi)return;Bg.set(Fs.x/innerWidth*2-1,-(Fs.y/innerHeight)*2+1),B1.setFromCamera(Bg,vs);let i=null;if(i!==$r){let e=$r;$r=i,e&&Vr(e),i&&Vr(i),zn()}let t=window.__rodHover&&window.__rodHover(Fs.x,Fs.y);if(t){Br.innerHTML=t,Br.style.display="block";let e=Br.offsetWidth,n=Br.offsetHeight;Br.style.left=ni(Fs.x+14,6,innerWidth-e-6)+"px",Br.style.top=ni(Fs.y+14,6,innerHeight-n-6)+"px",ui.style.cursor="pointer"}else dp(),ui.style.cursor=""}ui.addEventListener("pointerleave",()=>{if(Fs=null,$r){let i=$r;$r=null,Vr(i),zn()}dp()});var Br=Ge("#tip");function dp(){Br.style.display="none"}document.querySelectorAll("[data-metric]").forEach(i=>i.onclick=()=>{op=i.dataset.metric,document.querySelectorAll("[data-metric]").forEach(t=>t.classList.toggle("on",t===i)),Yg()});document.querySelectorAll("[data-mode]").forEach(i=>i.onclick=()=>{ap=i.dataset.mode,document.querySelectorAll("[data-mode]").forEach(t=>t.classList.toggle("on",t===i)),Fh()});Ge("#yaw").oninput=i=>{Re.yaw=+i.target.value*Math.PI/180,zn()};Ge("#tilt").oninput=i=>{Re.tilt=+i.target.value*Math.PI/180,zn()};Ge("#zin").onclick=()=>{Re.dist=ni(Re.dist*.75,6,400),zn()};Ge("#zout").onclick=()=>{Re.dist=ni(Re.dist/.75,6,400),zn()};Ge("#rst").onclick=up;var kg=["#2563eb","#059669","#7c3aed","#db2777","#0891b2","#ca8a04"],fn=[],$g={},$1=i=>$g[i]||($g[i]=new Cr({color:i}));function Kg(i,t){i.og.children.forEach(e=>e.material=t?$1(t):Ih)}function Vr(i,t=0){let e=i.mat.emissive;i===$r?e.setHex(5592405):i.sel?e.copy(i.sel.tint):e.setHex(0),t&&e.addScalar(t)}function fp(i,t){let e=1e9,n=-1e9,s=1e9,r=-1e9;for(let h of i)e=Math.min(e,h.cx-h.size/2),n=Math.max(n,h.cx+h.size/2),s=Math.min(s,h.cy-h.size/2),r=Math.max(r,h.cy+h.size/2);let a=innerWidth/innerHeight,l=Math.tan(Uh*Math.PI/360),u=i.length===1?ni(i[0].size*3.2+14,14,120):ni(Math.max((r-s)*1.5,(n-e)*1.5/a)/(2*l)+6,14,300);Object.assign(Re,{tx:(e+n)/2,ty:(s+r)/2,dist:u,tilt:t,yaw:0}),zn()}var cr=Ge("#q"),Ti=Ge("#list"),dn=Ge("#mcs");function Bh(i,t=!0){if(Ti.style.display="none",cr.value="",!i.sel){fn.length>=6&&Qg(fn[0].o,!0);let e=new Set(fn.map(s=>s.color)),n=kg.find(s=>!e.has(s))||kg[0];i.sel={o:i,color:n,tint:new ve(n).multiplyScalar(.12)},fn.push(i.sel),Kg(i,n)}dn.classList.contains("min")&&Nl(!1),Xa.set(i,performance.now()),Vr(i),t&&fp([i],Math.max(Re.tilt,.9)),ur()}function Qg(i,t){let e=fn.indexOf(i.sel);e>=0&&fn.splice(e,1),i.sel=null,Kg(i,null),Vr(i),zn(),t||ur()}function t_(i){let t=Math.min(devicePixelRatio||1,2),e=i.clientWidth,n=i.clientHeight;i.width=e*t,i.height=n*t;let s=i.getContext("2d");s.scale(t,t),s.clearRect(0,0,e,n);let r=fn.map(d=>{let S=1e9,g=-1e9,b=1e9,w=-1e9;for(let N of d.o.rings)for(let x=0;x<N[0].length;x+=2)S=Math.min(S,N[0][x]),g=Math.max(g,N[0][x]),b=Math.min(b,N[0][x+1]),w=Math.max(w,N[0][x+1]);return{x0:S,x1:g,y0:b,y1:w}}),a=Math.max(...r.map(d=>Math.max(d.x1-d.x0,d.y1-d.y0))),l=(Math.min(e,n)-22)/a;fn.forEach((d,S)=>{let g=r[S],b=(g.x0+g.x1)/2,w=(g.y0+g.y1)/2;s.beginPath();for(let N of d.o.rings)for(let x of N)for(let m=0;m<x.length;m+=2){let $=e/2+(x[m]-b)*l,H=n/2-(x[m+1]-w)*l;m?s.lineTo($,H):s.moveTo($,H),m===x.length-2&&s.closePath()}s.fillStyle=d.color+"40",s.fill("evenodd"),s.lineWidth=1.6,s.strokeStyle=d.color,s.stroke()});let u=l/R1,h=[.5,1,2,5,10,20,50,100].find(d=>d*u>=28)||100;s.fillStyle="#6b7385",s.fillRect(10,n-12,h*u,2),s.font="10px system-ui",s.fillText(h+" km",12+h*u,n-8)}function ur(){if(!fn.length){dn.innerHTML="",dn.style.display="none",Nl(!1);return}if(dn.style.display="flex",innerWidth<=640){let e=Ge("#inf").getBoundingClientRect().bottom;dn.style.top=Math.round(e+8)+"px",dn.style.maxHeight=Math.max(110,Math.min(innerHeight*(Ge("#rc").classList.contains("min")?.7:.4),Ge("#rc").getBoundingClientRect().top-e-16))+"px",dn.style.width=""}else if(innerHeight<=500){let e=Ge("#inf").getBoundingClientRect().bottom;dn.style.top=Math.round(e+8)+"px",dn.style.maxHeight=Math.max(120,innerHeight-e-20)+"px",dn.style.width="min(290px, 40vw)"}else dn.style.top="",dn.style.maxHeight="",dn.style.width="";window.__fitMcs&&window.__fitMcs();let i=fn.map((e,n)=>{let s=e.o;return`<div class="mc" draggable="true" data-i="${n}" style="--c:${e.color}"><button class="x" data-x="${n}" title="Cerrar">\xD7</button><div class="mh"><i class="dot"></i><b>${s.name}</b><em>${Ah[s.pr]}</em></div><div class="mb">${Bs(s.pop)}${__t(600)}${Ga(s.area)} km\xB2 \xB7 ${Ga(s.pop/s.area)}${__t(601)}${s.rankP}${__t(602)}`}).join("");if(fn.length>1){let e=s=>Math.max(...fn.map(s)),n=[[__t(603),s=>s.o.pop,Bs],[__t(604),s=>s.o.area,Ga],[__t(605),s=>s.o.pop/s.o.area,Ga]];if(i+=`${__t(606)}`+n.map(([s,r,a])=>`<div class="cr"><span>${s}</span>${fn.map(l=>`<div class="bw"><i style="width:${Math.max(2,r(l)/e(r)*100)}%;background:${l.color}"></i><b>${a(r(l))}</b></div>`).join("")}</div>`).join(""),fn.length===2){let[s,r]=fn.map(h=>h.o),[a,l]=s.pop>=r.pop?[s,r]:[r,s],u=(h,d)=>(h>=d?h/d:d/h).toLocaleString("es-ES",{maximumFractionDigits:1});i+=`<small class="ratio"><b>${a.name}${__t(607)}${u(a.pop,l.pop)}${__t(608)}${l.name}${__t(609)}${u(a.area,l.area)}\xD7 ${a.area>=l.area?__t(610):__t(611)}.</small>`}i+="</div>"}dn.innerHTML=i,dn.querySelectorAll("[data-x]").forEach(e=>e.onclick=n=>{n.stopPropagation(),Qg(fn[+e.dataset.x].o)}),dn.querySelectorAll(".mc").forEach(e=>{e.onclick=()=>fp([fn[+e.dataset.i].o],Math.max(Re.tilt,.9)),e.onmouseenter=()=>{let n=fn[+e.dataset.i].o;Xa.set(n,performance.now())},e.ondragstart=n=>{n.dataTransfer.setData("text/plain",e.dataset.i),e.classList.add("drag")},e.ondragend=()=>e.classList.remove("drag"),e.ondragover=n=>{n.preventDefault(),e.classList.add("over")},e.ondragleave=()=>e.classList.remove("over"),e.ondrop=n=>{n.preventDefault();let s=+n.dataTransfer.getData("text/plain"),r=+e.dataset.i;if(s!==r){let[a]=fn.splice(s,1);fn.splice(r,0,a),ur();let l=Ge("#sil");l&&l.classList.add("flash")}}});let t=Ge("#sil");t&&t_(t)}cr.addEventListener("input",()=>{if(window.__rodSearch){window.__rodSearch(cr.value);return}let i=Kf(cr.value.trim());if(!i){Ti.style.display="none";return}let t=[],e=[];for(let s of Sn){let r=Kf(s.name);r.startsWith(i)?t.push(s):r.includes(i)&&e.push(s)}let n=t.sort((s,r)=>r.pop-s.pop).concat(e.sort((s,r)=>r.pop-s.pop)).slice(0,8);Ti.innerHTML=n.map((s,r)=>`<li data-i="${r}">${s.name}<em>${Bs(s.pop)}</em></li>`).join("")||__t(566),Ti.style.display="block",Ti.querySelectorAll("li[data-i]").forEach(s=>s.onclick=()=>Bh(n[+s.dataset.i])),Ti._r=n});cr.addEventListener("keydown",i=>{i.key==="Enter"&&Ti._pick?Ti._pick(0):i.key==="Enter"&&Ti._r&&Ti._r[0]&&Bh(Ti._r[0]),i.key==="Escape"&&(cr.value="",Ti.style.display="none")});addEventListener("keydown",i=>{i.key==="Escape"&&i.target!==cr&&e_()});var zg=0;addEventListener("resize",()=>{clearTimeout(zg),zg=setTimeout(()=>{let i=Ge("#sil");i&&t_(i)},120)});var Nh=null,rp=Ge("#chip");function z1(i,t,e=.8){Nh={codes:new Set(i.map(n=>n.code)),label:t},Sn.forEach(n=>{n.inF=Nh.codes.has(n.code),Oh(n)}),rp.innerHTML=`${__t(612)}${t}</b> \xB7 ${i.length}${i.length===1?__t(613):__t(614)}</span><button id="chx" title="Quitar filtro">\xD7</button>`,rp.style.display="flex",Ge("#chx").onclick=e_,Fh(),fp(i,e),i.slice(0,40).forEach(n=>Xa.set(n,performance.now()))}function e_(){Nh&&(Nh=null,Sn.forEach(i=>{i.inF=!0,Oh(i)}),rp.style.display="none",Fh())}var V1="prov";function H1(i){let t=[...Sn].sort((a,l)=>l.pop-a.pop),e=[...Sn].sort((a,l)=>l.pop/l.area-a.pop/a.area),[n,s,r]=i.split(":");if(n==="pr")return[Sn.filter(a=>a.pr===s),Wg[s]];if(n==="top")return s==="pop"?[t.slice(0,10),__t(615)]:[e.slice(0,10),__t(616)];if(n==="low")return s==="pop"?[t.slice(-10),__t(617)]:[e.slice(-10),__t(618)];if(n==="size")return[Sn.filter(a=>a.pop>=+s&&a.pop<+r),+r>1e9?`${Bs(+s)}${__t(619)}`:+s==0?`${__t(620)}${Bs(+r)}${__t(621)}`:`${Bs(+s)} \u2013 ${Bs(+r-1)}${__t(621)}`];if(n==="n50"){let a=0,l=0;for(let u of t)if(a+=u.pop,l++,a>=tp/2)break;return[t.slice(0,l),`${__t(622)}`]}return[[],""]}function G1(i){let[t,e]=H1(i);t.length&&z1(t,e,i.startsWith("pr:")?.75:.8)}document.querySelectorAll("[data-tab]").forEach(i=>i.onclick=()=>{V1=i.dataset.tab,Ge("#dbody").scrollTop=0});var zr=Ge("#rc"),Rh=Ge("#mcstab");function qa(i){zr.classList.toggle("min",i),Ge("#rcgrab span").textContent=i?__t(664):__t(665),fn.length&&ur()}function Nl(i){dn.classList.toggle("min",i),dn.style.transform="",dn.style.opacity="",Rh.classList.toggle("on",i&&fn.length>0),i&&(Rh.textContent=`\u25B8 ${fn.length} ${fn.length===1?"ficha":"fichas"}`,Rh.style.top=dn.style.top||"124px")}function pp(i,{onMove:t,onEnd:e,axis:n}){let s=null;i.addEventListener("pointerdown",a=>{a.pointerType==="mouse"||!kh.matches||a.target.closest("input,button:not(#rcgrab),.seg")||(s={x:a.clientX,y:a.clientY,id:a.pointerId,lock:null})}),addEventListener("pointermove",a=>{if(!s||a.pointerId!==s.id)return;let l=a.clientX-s.x,u=a.clientY-s.y;!s.lock&&Math.hypot(l,u)>10&&(s.lock=Math.abs(l)>Math.abs(u)?"x":"y"),s.lock===n&&t&&t(l,u)});let r=a=>{if(!s||a.pointerId!==s.id)return;let l=a.clientX-s.x,u=a.clientY-s.y,h=s.lock;s=null,e(h===n?l:0,h===n?u:0,h)};addEventListener("pointerup",r,!0),addEventListener("pointercancel",r,!0)}Ge("#rcgrab").onclick=()=>qa(!zr.classList.contains("min"));(innerWidth<=640||matchMedia("(max-height:500px) and (pointer:coarse)").matches||document.documentElement.classList.contains("cap"))&&qa(!0);requestAnimationFrame(()=>document.documentElement.classList.remove("boot"));var n_=()=>innerWidth>640;pp(zr,{axis:"y",onEnd:(i,t)=>{if(!n_())if(t>40&&!zr.classList.contains("min")){let e=Ge("#dp.open #dbody");(!e||e.scrollTop<=0||t>120)&&qa(!0)}else t<-30&&zr.classList.contains("min")&&qa(!1)}});pp(zr,{axis:"x",onEnd:i=>{n_()&&(i>50?qa(!0):i<-30&&zr.classList.contains("min")&&qa(!1))}});pp(dn,{axis:"x",onMove:i=>{i<0&&(dn.classList.add("sw"),dn.style.transform=`translateX(${i}px)`,dn.style.opacity=Math.max(.2,1+i/300))},onEnd:i=>{dn.classList.remove("sw"),i<-60?(Nl(!0),window.__rodHide&&!fn.length&&window.__rodHide()):(dn.style.transform="",dn.style.opacity="")}});Rh.onclick=()=>{Nl(!1),ur()};Ge("#dtoggle").onclick=()=>{let i=Ge("#dp").classList.toggle("open");Ge("#rc").classList.toggle("dopen",i),Ge("#dtoggle").textContent=i?kh.matches&&innerWidth<=640?__t(666):__t(667):__t(668),window.__rodCard&&window.__rodCard()};var kh=matchMedia("(max-width:640px), (max-height:500px)");function i_(){let i=Ge("#leg");kh.matches?Ge("#rc").insertBefore(i,Ge("#dtoggle")):document.body.appendChild(i),fn.length&&ur()}kh.addEventListener("change",i_);i_();Zg();L1();up();Object.assign(An,Re);for(let i of Sn)i.z=.01;requestAnimationFrame(Wa);Ng({scene:ks,camera:vs,renderer:Dl,goal:Re,cur:An,invalidate:zn,flyTo:(i,t,e,n)=>{Object.assign(Re,{tx:(i-Pl)*_s,ty:(t-Ll)*_s,dist:e,tilt:n}),zn()},K:_s,CX:Pl,CY:Ll,mcs:dn,q:cr,list:Ti,munis:Sn,select:Bh,norm:Kf,fmt:Bs,clamp:ni,mcsMin:Nl});window.__app={scene:ks,renderer:Dl,camera:vs,munis:Sn,labs:Lh,goal:Re,cur:An,select:Bh,get mode(){return ap}};window.__ready=!0;{let i=document.getElementById("ttb"),t=document.getElementById("p");i&&t&&i.addEventListener("click",()=>{let e=t.classList.toggle("tt");i.textContent=e?__t(674):__t(675)})}})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
