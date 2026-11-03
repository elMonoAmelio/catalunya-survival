(()=>{var Vm=0,Hd=1,Hm=2;var al=1,Gm=2,Aa=3,Ks=0,si=1,os=2,ls=0,Ca=1,Gd=2,Wd=3,Xd=4,Wm=5;var Ir=100,Xm=101,qm=102,Ym=103,Zm=104,Jm=200,jm=201,Km=202,Qm=203,qd=204,Yd=205,t0=206,e0=207,n0=208,i0=209,s0=210,r0=211,a0=212,o0=213,l0=214,Tc=0,Ac=1,Cc=2,pa=3,Rc=4,Ic=5,Pc=6,Lc=7,fh=0,c0=1,h0=2,Wi=0,Zd=1,Jd=2,jd=3,Kd=4,Qd=5,tf=6,ef=7;var nf=300,Qs=301,Pr=302,ph=303,mh=304,ol=306,Dc=1e3,es=1001,Nc=1002,Fn=1003,u0=1004;var ll=1005;var Gn=1006,gh=1007;var tr=1008;var gi=1009,sf=1010,rf=1011,Ra=1012,_h=1013,Xi=1014,Ci=1015,qi=1016,xh=1017,vh=1018,Ia=1020,af=35902,of=35899,lf=1021,cf=1022,Ri=1023,is=1026,er=1027,yh=1028,Sh=1029,nr=1030,Mh=1031;var bh=1033,cl=33776,hl=33777,ul=33778,dl=33779,wh=35840,Eh=35841,Th=35842,Ah=35843,Ch=36196,Rh=37492,Ih=37496,Ph=37488,Lh=37489,fl=37490,Dh=37491,Nh=37808,Uh=37809,Fh=37810,Oh=37811,Bh=37812,kh=37813,zh=37814,$h=37815,Vh=37816,Hh=37817,Gh=37818,Wh=37819,Xh=37820,qh=37821,Yh=36492,Zh=36494,Jh=36495,jh=36283,Kh=36284,pl=36285,Qh=36286;var Eo=2300,Uc=2301,wc=2302,Id=2303,Pd=2400,Ld=2401,Dd=2402;var d0=3200;var tu=0,f0=1,Ps="",yi="srgb",To="srgb-linear",Ao="linear",rn="srgb";var Ec=7680;var p0=519,m0=512,g0=513,_0=514,eu=515,x0=516,v0=517,nu=518,y0=519,hf=35044;var uf="300 es",Vi=2e3,ma=2001;function O_(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function B_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Co(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function S0(){let i=Co("canvas");return i.style.display="block",i}var sm={},ga=null;function Ro(...i){let t="THREE."+i.shift();ga?ga("log",t,...i):console.log(t,...i)}function M0(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ye(...i){i=M0(i);let t="THREE."+i.shift();if(ga)ga("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function be(...i){i=M0(i);let t="THREE."+i.shift();if(ga)ga("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function br(...i){let t=i.join(" ");t in sm||(sm[t]=!0,ye(...i))}function b0(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var w0={[Tc]:Ac,[Cc]:Pc,[Rc]:Lc,[pa]:Ic,[Ac]:Tc,[Pc]:Cc,[Lc]:Rc,[Ic]:pa},ss=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Jn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],rm=1234567,So=Math.PI/180,_a=180/Math.PI;function ns(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Jn[i&255]+Jn[i>>8&255]+Jn[i>>16&255]+Jn[i>>24&255]+"-"+Jn[t&255]+Jn[t>>8&255]+"-"+Jn[t>>16&15|64]+Jn[t>>24&255]+"-"+Jn[e&63|128]+Jn[e>>8&255]+"-"+Jn[e>>16&255]+Jn[e>>24&255]+Jn[n&255]+Jn[n>>8&255]+Jn[n>>16&255]+Jn[n>>24&255]).toLowerCase()}function Pe(i,t,e){return Math.max(t,Math.min(e,i))}function df(i,t){return(i%t+t)%t}function k_(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function z_(i,t,e){return i!==t?(e-i)/(t-i):0}function Mo(i,t,e){return(1-e)*i+e*t}function $_(i,t,e,n){return Mo(i,t,1-Math.exp(-e*n))}function V_(i,t=1){return t-Math.abs(df(i,t*2)-t)}function H_(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function G_(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function W_(i,t){return i+Math.floor(Math.random()*(t-i+1))}function X_(i,t){return i+Math.random()*(t-i)}function q_(i){return i*(.5-Math.random())}function Y_(i){i!==void 0&&(rm=i);let t=rm+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Z_(i){return i*So}function J_(i){return i*_a}function j_(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function K_(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Q_(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function tx(i,t,e,n,s){let r=Math.cos,a=Math.sin,l=r(e/2),h=a(e/2),u=r((t+n)/2),d=a((t+n)/2),v=r((t-n)/2),g=a((t-n)/2),S=r((n-t)/2),w=a((n-t)/2);switch(s){case"XYX":i.set(l*d,h*v,h*g,l*u);break;case"YZY":i.set(h*g,l*d,h*v,l*u);break;case"ZXZ":i.set(h*v,h*g,l*d,l*u);break;case"XZX":i.set(l*d,h*w,h*S,l*u);break;case"YXY":i.set(h*S,l*d,h*w,l*u);break;case"ZYZ":i.set(h*w,h*S,l*d,l*u);break;default:ye("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function $i(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function on(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var ff={DEG2RAD:So,RAD2DEG:_a,generateUUID:ns,clamp:Pe,euclideanModulo:df,mapLinear:k_,inverseLerp:z_,lerp:Mo,damp:$_,pingpong:V_,smoothstep:H_,smootherstep:G_,randInt:W_,randFloat:X_,randFloatSpread:q_,seededRandom:Y_,degToRad:Z_,radToDeg:J_,isPowerOfTwo:j_,ceilPowerOfTwo:K_,floorPowerOfTwo:Q_,setQuaternionFromProperEuler:tx,normalize:on,denormalize:$i},zt=class i{static{i.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Pe(this.x,t.x,e.x),this.y=Pe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Pe(this.x,t,e),this.y=Pe(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Pe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},rs=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,l){let h=n[s+0],u=n[s+1],d=n[s+2],v=n[s+3],g=r[a+0],S=r[a+1],w=r[a+2],L=r[a+3];if(v!==L||h!==g||u!==S||d!==w){let _=h*g+u*S+d*w+v*L;_<0&&(g=-g,S=-S,w=-w,L=-L,_=-_);let m=1-l;if(_<.9995){let z=Math.acos(_),$=Math.sin(z);m=Math.sin(m*z)/$,l=Math.sin(l*z)/$,h=h*m+g*l,u=u*m+S*l,d=d*m+w*l,v=v*m+L*l}else{h=h*m+g*l,u=u*m+S*l,d=d*m+w*l,v=v*m+L*l;let z=1/Math.sqrt(h*h+u*u+d*d+v*v);h*=z,u*=z,d*=z,v*=z}}t[e]=h,t[e+1]=u,t[e+2]=d,t[e+3]=v}static multiplyQuaternionsFlat(t,e,n,s,r,a){let l=n[s],h=n[s+1],u=n[s+2],d=n[s+3],v=r[a],g=r[a+1],S=r[a+2],w=r[a+3];return t[e]=l*w+d*v+h*S-u*g,t[e+1]=h*w+d*g+u*v-l*S,t[e+2]=u*w+d*S+l*g-h*v,t[e+3]=d*w-l*v-h*g-u*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,l=Math.cos,h=Math.sin,u=l(n/2),d=l(s/2),v=l(r/2),g=h(n/2),S=h(s/2),w=h(r/2);switch(a){case"XYZ":this._x=g*d*v+u*S*w,this._y=u*S*v-g*d*w,this._z=u*d*w+g*S*v,this._w=u*d*v-g*S*w;break;case"YXZ":this._x=g*d*v+u*S*w,this._y=u*S*v-g*d*w,this._z=u*d*w-g*S*v,this._w=u*d*v+g*S*w;break;case"ZXY":this._x=g*d*v-u*S*w,this._y=u*S*v+g*d*w,this._z=u*d*w+g*S*v,this._w=u*d*v-g*S*w;break;case"ZYX":this._x=g*d*v-u*S*w,this._y=u*S*v+g*d*w,this._z=u*d*w-g*S*v,this._w=u*d*v+g*S*w;break;case"YZX":this._x=g*d*v+u*S*w,this._y=u*S*v+g*d*w,this._z=u*d*w-g*S*v,this._w=u*d*v-g*S*w;break;case"XZY":this._x=g*d*v-u*S*w,this._y=u*S*v-g*d*w,this._z=u*d*w+g*S*v,this._w=u*d*v+g*S*w;break;default:ye("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],l=e[5],h=e[9],u=e[2],d=e[6],v=e[10],g=n+l+v;if(g>0){let S=.5/Math.sqrt(g+1);this._w=.25/S,this._x=(d-h)*S,this._y=(r-u)*S,this._z=(a-s)*S}else if(n>l&&n>v){let S=2*Math.sqrt(1+n-l-v);this._w=(d-h)/S,this._x=.25*S,this._y=(s+a)/S,this._z=(r+u)/S}else if(l>v){let S=2*Math.sqrt(1+l-n-v);this._w=(r-u)/S,this._x=(s+a)/S,this._y=.25*S,this._z=(h+d)/S}else{let S=2*Math.sqrt(1+v-n-l);this._w=(a-s)/S,this._x=(r+u)/S,this._y=(h+d)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Pe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,l=e._x,h=e._y,u=e._z,d=e._w;return this._x=n*d+a*l+s*u-r*h,this._y=s*d+a*h+r*l-n*u,this._z=r*d+a*u+n*h-s*l,this._w=a*d-n*l-s*h-r*u,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,l=this.dot(t);l<0&&(n=-n,s=-s,r=-r,a=-a,l=-l);let h=1-e;if(l<.9995){let u=Math.acos(l),d=Math.sin(u);h=Math.sin(h*u)/d,e=Math.sin(e*u)/d,this._x=this._x*h+n*e,this._y=this._y*h+s*e,this._z=this._z*h+r*e,this._w=this._w*h+a*e,this._onChangeCallback()}else this._x=this._x*h+n*e,this._y=this._y*h+s*e,this._z=this._z*h+r*e,this._w=this._w*h+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Z=class i{static{i.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(am.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(am.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,l=t.z,h=t.w,u=2*(a*s-l*n),d=2*(l*e-r*s),v=2*(r*n-a*e);return this.x=e+h*u+a*v-l*d,this.y=n+h*d+l*u-r*v,this.z=s+h*v+r*d-a*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Pe(this.x,t.x,e.x),this.y=Pe(this.y,t.y,e.y),this.z=Pe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Pe(this.x,t,e),this.y=Pe(this.y,t,e),this.z=Pe(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Pe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,l=e.y,h=e.z;return this.x=s*h-r*l,this.y=r*a-n*h,this.z=n*l-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return sd.copy(this).projectOnVector(t),this.sub(sd)}reflect(t){return this.sub(sd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},sd=new Z,am=new rs,Re=class i{static{i.prototype.isMatrix3=!0}constructor(t,e,n,s,r,a,l,h,u){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,l,h,u)}set(t,e,n,s,r,a,l,h,u){let d=this.elements;return d[0]=t,d[1]=s,d[2]=l,d[3]=e,d[4]=r,d[5]=h,d[6]=n,d[7]=a,d[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],l=n[3],h=n[6],u=n[1],d=n[4],v=n[7],g=n[2],S=n[5],w=n[8],L=s[0],_=s[3],m=s[6],z=s[1],$=s[4],I=s[7],T=s[2],O=s[5],W=s[8];return r[0]=a*L+l*z+h*T,r[3]=a*_+l*$+h*O,r[6]=a*m+l*I+h*W,r[1]=u*L+d*z+v*T,r[4]=u*_+d*$+v*O,r[7]=u*m+d*I+v*W,r[2]=g*L+S*z+w*T,r[5]=g*_+S*$+w*O,r[8]=g*m+S*I+w*W,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],l=t[5],h=t[6],u=t[7],d=t[8];return e*a*d-e*l*u-n*r*d+n*l*h+s*r*u-s*a*h}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],l=t[5],h=t[6],u=t[7],d=t[8],v=d*a-l*u,g=l*h-d*r,S=u*r-a*h,w=e*v+n*g+s*S;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);let L=1/w;return t[0]=v*L,t[1]=(s*u-d*n)*L,t[2]=(l*n-s*a)*L,t[3]=g*L,t[4]=(d*e-s*h)*L,t[5]=(s*r-l*e)*L,t[6]=S*L,t[7]=(n*h-u*e)*L,t[8]=(a*e-n*r)*L,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,l){let h=Math.cos(r),u=Math.sin(r);return this.set(n*h,n*u,-n*(h*a+u*l)+a+t,-s*u,s*h,-s*(-u*a+h*l)+l+e,0,0,1),this}scale(t,e){return br("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(rd.makeScale(t,e)),this}rotate(t){return br("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(rd.makeRotation(-t)),this}translate(t,e){return br("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(rd.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},rd=new Re,om=new Re().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),lm=new Re().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ex(){let i={enabled:!0,workingColorSpace:To,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===rn&&(s.r=Rs(s.r),s.g=Rs(s.g),s.b=Rs(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===rn&&(s.r=fa(s.r),s.g=fa(s.g),s.b=fa(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ps?Ao:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return br("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return br("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[To]:{primaries:t,whitePoint:n,transfer:Ao,toXYZ:om,fromXYZ:lm,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:yi},outputColorSpaceConfig:{drawingBufferColorSpace:yi}},[yi]:{primaries:t,whitePoint:n,transfer:rn,toXYZ:om,fromXYZ:lm,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:yi}}}),i}var Xe=ex();function Rs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function fa(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var jr,Fc=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{jr===void 0&&(jr=Co("canvas")),jr.width=t.width,jr.height=t.height;let s=jr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=jr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Co("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Rs(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Rs(e[n]/255)*255):e[n]=Rs(e[n]);return{data:e,width:t.width,height:t.height}}else return ye("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},nx=0,xa=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:nx++}),this.uuid=ns(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,l=s.length;a<l;a++)s[a].isDataTexture?r.push(ad(s[a].image)):r.push(ad(s[a]))}else r=ad(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function ad(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Fc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ye("Texture: Unable to serialize Texture."),{})}var ix=0,od=new Z,fi=class i extends ss{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=es,s=es,r=Gn,a=tr,l=Ri,h=gi,u=i.DEFAULT_ANISOTROPY,d=Ps){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ix++}),this.uuid=ns(),this.name="",this.source=new xa(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=u,this.format=l,this.internalFormat=null,this.type=h,this.offset=new zt(0,0),this.repeat=new zt(1,1),this.center=new zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Re,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(od).x}get height(){return this.source.getSize(od).y}get depth(){return this.source.getSize(od).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){ye(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ye(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==nf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Dc:t.x=t.x-Math.floor(t.x);break;case es:t.x=t.x<0?0:1;break;case Nc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Dc:t.y=t.y-Math.floor(t.y);break;case es:t.y=t.y<0?0:1;break;case Nc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};fi.DEFAULT_IMAGE=null;fi.DEFAULT_MAPPING=nf;fi.DEFAULT_ANISOTROPY=1;var an=class i{static{i.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,h=t.elements,u=h[0],d=h[4],v=h[8],g=h[1],S=h[5],w=h[9],L=h[2],_=h[6],m=h[10];if(Math.abs(d-g)<.01&&Math.abs(v-L)<.01&&Math.abs(w-_)<.01){if(Math.abs(d+g)<.1&&Math.abs(v+L)<.1&&Math.abs(w+_)<.1&&Math.abs(u+S+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let $=(u+1)/2,I=(S+1)/2,T=(m+1)/2,O=(d+g)/4,W=(v+L)/4,A=(w+_)/4;return $>I&&$>T?$<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt($),s=O/n,r=W/n):I>T?I<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(I),n=O/s,r=A/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=W/r,s=A/r),this.set(n,s,r,e),this}let z=Math.sqrt((_-w)*(_-w)+(v-L)*(v-L)+(g-d)*(g-d));return Math.abs(z)<.001&&(z=1),this.x=(_-w)/z,this.y=(v-L)/z,this.z=(g-d)/z,this.w=Math.acos((u+S+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Pe(this.x,t.x,e.x),this.y=Pe(this.y,t.y,e.y),this.z=Pe(this.z,t.z,e.z),this.w=Pe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Pe(this.x,t,e),this.y=Pe(this.y,t,e),this.z=Pe(this.z,t,e),this.w=Pe(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Pe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Oc=class extends ss{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new an(0,0,t,e),this.scissorTest=!1,this.viewport=new an(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new fi(s),a=n.count;for(let l=0;l<a;l++)this.textures[l]=r.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Gn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new xa(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},pi=class extends Oc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Io=class extends fi{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Bc=class extends fi{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var qe=class i{static{i.prototype.isMatrix4=!0}constructor(t,e,n,s,r,a,l,h,u,d,v,g,S,w,L,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,l,h,u,d,v,g,S,w,L,_)}set(t,e,n,s,r,a,l,h,u,d,v,g,S,w,L,_){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=l,m[13]=h,m[2]=u,m[6]=d,m[10]=v,m[14]=g,m[3]=S,m[7]=w,m[11]=L,m[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Kr.setFromMatrixColumn(t,0).length(),r=1/Kr.setFromMatrixColumn(t,1).length(),a=1/Kr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),l=Math.sin(n),h=Math.cos(s),u=Math.sin(s),d=Math.cos(r),v=Math.sin(r);if(t.order==="XYZ"){let g=a*d,S=a*v,w=l*d,L=l*v;e[0]=h*d,e[4]=-h*v,e[8]=u,e[1]=S+w*u,e[5]=g-L*u,e[9]=-l*h,e[2]=L-g*u,e[6]=w+S*u,e[10]=a*h}else if(t.order==="YXZ"){let g=h*d,S=h*v,w=u*d,L=u*v;e[0]=g+L*l,e[4]=w*l-S,e[8]=a*u,e[1]=a*v,e[5]=a*d,e[9]=-l,e[2]=S*l-w,e[6]=L+g*l,e[10]=a*h}else if(t.order==="ZXY"){let g=h*d,S=h*v,w=u*d,L=u*v;e[0]=g-L*l,e[4]=-a*v,e[8]=w+S*l,e[1]=S+w*l,e[5]=a*d,e[9]=L-g*l,e[2]=-a*u,e[6]=l,e[10]=a*h}else if(t.order==="ZYX"){let g=a*d,S=a*v,w=l*d,L=l*v;e[0]=h*d,e[4]=w*u-S,e[8]=g*u+L,e[1]=h*v,e[5]=L*u+g,e[9]=S*u-w,e[2]=-u,e[6]=l*h,e[10]=a*h}else if(t.order==="YZX"){let g=a*h,S=a*u,w=l*h,L=l*u;e[0]=h*d,e[4]=L-g*v,e[8]=w*v+S,e[1]=v,e[5]=a*d,e[9]=-l*d,e[2]=-u*d,e[6]=S*v+w,e[10]=g-L*v}else if(t.order==="XZY"){let g=a*h,S=a*u,w=l*h,L=l*u;e[0]=h*d,e[4]=-v,e[8]=u*d,e[1]=g*v+L,e[5]=a*d,e[9]=S*v-w,e[2]=w*v-S,e[6]=l*d,e[10]=L*v+g}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(sx,t,rx)}lookAt(t,e,n){let s=this.elements;return xi.subVectors(t,e),xi.lengthSq()===0&&(xi.z=1),xi.normalize(),$s.crossVectors(n,xi),$s.lengthSq()===0&&(Math.abs(n.z)===1?xi.x+=1e-4:xi.z+=1e-4,xi.normalize(),$s.crossVectors(n,xi)),$s.normalize(),jl.crossVectors(xi,$s),s[0]=$s.x,s[4]=jl.x,s[8]=xi.x,s[1]=$s.y,s[5]=jl.y,s[9]=xi.y,s[2]=$s.z,s[6]=jl.z,s[10]=xi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],l=n[4],h=n[8],u=n[12],d=n[1],v=n[5],g=n[9],S=n[13],w=n[2],L=n[6],_=n[10],m=n[14],z=n[3],$=n[7],I=n[11],T=n[15],O=s[0],W=s[4],A=s[8],F=s[12],G=s[1],X=s[5],st=s[9],ht=s[13],j=s[2],et=s[6],pt=s[10],gt=s[14],At=s[3],_t=s[7],wt=s[11],bt=s[15];return r[0]=a*O+l*G+h*j+u*At,r[4]=a*W+l*X+h*et+u*_t,r[8]=a*A+l*st+h*pt+u*wt,r[12]=a*F+l*ht+h*gt+u*bt,r[1]=d*O+v*G+g*j+S*At,r[5]=d*W+v*X+g*et+S*_t,r[9]=d*A+v*st+g*pt+S*wt,r[13]=d*F+v*ht+g*gt+S*bt,r[2]=w*O+L*G+_*j+m*At,r[6]=w*W+L*X+_*et+m*_t,r[10]=w*A+L*st+_*pt+m*wt,r[14]=w*F+L*ht+_*gt+m*bt,r[3]=z*O+$*G+I*j+T*At,r[7]=z*W+$*X+I*et+T*_t,r[11]=z*A+$*st+I*pt+T*wt,r[15]=z*F+$*ht+I*gt+T*bt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],l=t[5],h=t[9],u=t[13],d=t[2],v=t[6],g=t[10],S=t[14],w=t[3],L=t[7],_=t[11],m=t[15],z=h*S-u*g,$=l*S-u*v,I=l*g-h*v,T=a*S-u*d,O=a*g-h*d,W=a*v-l*d;return e*(L*z-_*$+m*I)-n*(w*z-_*T+m*O)+s*(w*$-L*T+m*W)-r*(w*I-L*O+_*W)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],l=t[9],h=t[2],u=t[6],d=t[10];return e*(a*d-l*u)-n*(r*d-l*h)+s*(r*u-a*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],l=t[5],h=t[6],u=t[7],d=t[8],v=t[9],g=t[10],S=t[11],w=t[12],L=t[13],_=t[14],m=t[15],z=e*l-n*a,$=e*h-s*a,I=e*u-r*a,T=n*h-s*l,O=n*u-r*l,W=s*u-r*h,A=d*L-v*w,F=d*_-g*w,G=d*m-S*w,X=v*_-g*L,st=v*m-S*L,ht=g*m-S*_,j=z*ht-$*st+I*X+T*G-O*F+W*A;if(j===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let et=1/j;return t[0]=(l*ht-h*st+u*X)*et,t[1]=(s*st-n*ht-r*X)*et,t[2]=(L*W-_*O+m*T)*et,t[3]=(g*O-v*W-S*T)*et,t[4]=(h*G-a*ht-u*F)*et,t[5]=(e*ht-s*G+r*F)*et,t[6]=(_*I-w*W-m*$)*et,t[7]=(d*W-g*I+S*$)*et,t[8]=(a*st-l*G+u*A)*et,t[9]=(n*G-e*st-r*A)*et,t[10]=(w*O-L*I+m*z)*et,t[11]=(v*I-d*O-S*z)*et,t[12]=(l*F-a*X-h*A)*et,t[13]=(e*X-n*F+s*A)*et,t[14]=(L*$-w*T-_*z)*et,t[15]=(d*T-v*$+g*z)*et,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,l=t.y,h=t.z,u=r*a,d=r*l;return this.set(u*a+n,u*l-s*h,u*h+s*l,0,u*l+s*h,d*l+n,d*h-s*a,0,u*h-s*l,d*h+s*a,r*h*h+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,l=e._z,h=e._w,u=r+r,d=a+a,v=l+l,g=r*u,S=r*d,w=r*v,L=a*d,_=a*v,m=l*v,z=h*u,$=h*d,I=h*v,T=n.x,O=n.y,W=n.z;return s[0]=(1-(L+m))*T,s[1]=(S+I)*T,s[2]=(w-$)*T,s[3]=0,s[4]=(S-I)*O,s[5]=(1-(g+m))*O,s[6]=(_+z)*O,s[7]=0,s[8]=(w+$)*W,s[9]=(_-z)*W,s[10]=(1-(g+L))*W,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Kr.set(s[0],s[1],s[2]).length(),l=Kr.set(s[4],s[5],s[6]).length(),h=Kr.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Oi.copy(this);let u=1/a,d=1/l,v=1/h;return Oi.elements[0]*=u,Oi.elements[1]*=u,Oi.elements[2]*=u,Oi.elements[4]*=d,Oi.elements[5]*=d,Oi.elements[6]*=d,Oi.elements[8]*=v,Oi.elements[9]*=v,Oi.elements[10]*=v,e.setFromRotationMatrix(Oi),n.x=a,n.y=l,n.z=h,this}makePerspective(t,e,n,s,r,a,l=Vi,h=!1){let u=this.elements,d=2*r/(e-t),v=2*r/(n-s),g=(e+t)/(e-t),S=(n+s)/(n-s),w,L;if(h)w=r/(a-r),L=a*r/(a-r);else if(l===Vi)w=-(a+r)/(a-r),L=-2*a*r/(a-r);else if(l===ma)w=-a/(a-r),L=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return u[0]=d,u[4]=0,u[8]=g,u[12]=0,u[1]=0,u[5]=v,u[9]=S,u[13]=0,u[2]=0,u[6]=0,u[10]=w,u[14]=L,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(t,e,n,s,r,a,l=Vi,h=!1){let u=this.elements,d=2/(e-t),v=2/(n-s),g=-(e+t)/(e-t),S=-(n+s)/(n-s),w,L;if(h)w=1/(a-r),L=a/(a-r);else if(l===Vi)w=-2/(a-r),L=-(a+r)/(a-r);else if(l===ma)w=-1/(a-r),L=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return u[0]=d,u[4]=0,u[8]=0,u[12]=g,u[1]=0,u[5]=v,u[9]=0,u[13]=S,u[2]=0,u[6]=0,u[10]=w,u[14]=L,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Kr=new Z,Oi=new qe,sx=new Z(0,0,0),rx=new Z(1,1,1),$s=new Z,jl=new Z,xi=new Z,cm=new qe,hm=new rs,Is=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],l=s[8],h=s[1],u=s[5],d=s[9],v=s[2],g=s[6],S=s[10];switch(e){case"XYZ":this._y=Math.asin(Pe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,S),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(g,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Pe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(l,S),this._z=Math.atan2(h,u)):(this._y=Math.atan2(-v,r),this._z=0);break;case"ZXY":this._x=Math.asin(Pe(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(h,r));break;case"ZYX":this._y=Math.asin(-Pe(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(g,S),this._z=Math.atan2(h,r)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Pe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-v,r)):(this._x=0,this._y=Math.atan2(l,S));break;case"XZY":this._z=Math.asin(-Pe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(g,u),this._y=Math.atan2(l,r)):(this._x=Math.atan2(-d,S),this._y=0);break;default:ye("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return cm.makeRotationFromQuaternion(t),this.setFromRotationMatrix(cm,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return hm.setFromEuler(this),this.setFromQuaternion(hm,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Is.DEFAULT_ORDER="XYZ";var va=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},ax=0,um=new Z,Qr=new rs,ws=new qe,Kl=new Z,fo=new Z,ox=new Z,lx=new rs,dm=new Z(1,0,0),fm=new Z(0,1,0),pm=new Z(0,0,1),mm={type:"added"},cx={type:"removed"},ta={type:"childadded",child:null},ld={type:"childremoved",child:null},On=class i extends ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ax++}),this.uuid=ns(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new Z,e=new Is,n=new rs,s=new Z(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new qe},normalMatrix:{value:new Re}}),this.matrix=new qe,this.matrixWorld=new qe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new va,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Qr.setFromAxisAngle(t,e),this.quaternion.multiply(Qr),this}rotateOnWorldAxis(t,e){return Qr.setFromAxisAngle(t,e),this.quaternion.premultiply(Qr),this}rotateX(t){return this.rotateOnAxis(dm,t)}rotateY(t){return this.rotateOnAxis(fm,t)}rotateZ(t){return this.rotateOnAxis(pm,t)}translateOnAxis(t,e){return um.copy(t).applyQuaternion(this.quaternion),this.position.add(um.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(dm,t)}translateY(t){return this.translateOnAxis(fm,t)}translateZ(t){return this.translateOnAxis(pm,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ws.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Kl.copy(t):Kl.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),fo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ws.lookAt(fo,Kl,this.up):ws.lookAt(Kl,fo,this.up),this.quaternion.setFromRotationMatrix(ws),s&&(ws.extractRotation(s.matrixWorld),Qr.setFromRotationMatrix(ws),this.quaternion.premultiply(Qr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(be("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(mm),ta.child=t,this.dispatchEvent(ta),ta.child=null):be("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(cx),ld.child=t,this.dispatchEvent(ld),ld.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ws.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ws.multiply(t.parent.matrixWorld)),t.applyMatrix4(ws),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(mm),ta.child=t,this.dispatchEvent(ta),ta.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fo,t,ox),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fo,lx,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,l=r.length;a<l;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(l=>({...l})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(l,h){return l[h.uuid]===void 0&&(l[h.uuid]=h.toJSON(t)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let h=l.shapes;if(Array.isArray(h))for(let u=0,d=h.length;u<d;u++){let v=h[u];r(t.shapes,v)}else r(t.shapes,h)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let h=0,u=this.material.length;h<u;h++)l.push(r(t.materials,this.material[h]));s.material=l}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){let h=this.animations[l];s.animations.push(r(t.animations,h))}}if(e){let l=a(t.geometries),h=a(t.materials),u=a(t.textures),d=a(t.images),v=a(t.shapes),g=a(t.skeletons),S=a(t.animations),w=a(t.nodes);l.length>0&&(n.geometries=l),h.length>0&&(n.materials=h),u.length>0&&(n.textures=u),d.length>0&&(n.images=d),v.length>0&&(n.shapes=v),g.length>0&&(n.skeletons=g),S.length>0&&(n.animations=S),w.length>0&&(n.nodes=w)}return n.object=s,n;function a(l){let h=[];for(let u in l){let d=l[u];delete d.metadata,h.push(d)}return h}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};On.DEFAULT_UP=new Z(0,1,0);On.DEFAULT_MATRIX_AUTO_UPDATE=!0;On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Hi=class extends On{constructor(){super(),this.isGroup=!0,this.type="Group"}},hx={type:"move"},ya=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,l=this._targetRay,h=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){a=!0;for(let L of t.hand.values()){let _=e.getJointPose(L,n),m=this._getHandJoint(u,L);_!==null&&(m.matrix.fromArray(_.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=_.radius),m.visible=_!==null}let d=u.joints["index-finger-tip"],v=u.joints["thumb-tip"],g=d.position.distanceTo(v.position),S=.02,w=.005;u.inputState.pinching&&g>S+w?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&g<=S-w&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else h!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(h.matrix.fromArray(r.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,r.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(r.linearVelocity)):h.hasLinearVelocity=!1,r.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(r.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:t,target:this})));l!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(hx)))}return l!==null&&(l.visible=s!==null),h!==null&&(h.visible=r!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Hi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},E0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vs={h:0,s:0,l:0},Ql={h:0,s:0,l:0};function cd(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var xe=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=yi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Xe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Xe.workingColorSpace){return this.r=t,this.g=e,this.b=n,Xe.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Xe.workingColorSpace){if(t=df(t,1),e=Pe(e,0,1),n=Pe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=cd(a,r,t+1/3),this.g=cd(a,r,t),this.b=cd(a,r,t-1/3)}return Xe.colorSpaceToWorking(this,s),this}setStyle(t,e=yi){function n(r){r!==void 0&&parseFloat(r)<1&&ye("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],l=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:ye("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);ye("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=yi){let n=E0[t.toLowerCase()];return n!==void 0?this.setHex(n,e):ye("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Rs(t.r),this.g=Rs(t.g),this.b=Rs(t.b),this}copyLinearToSRGB(t){return this.r=fa(t.r),this.g=fa(t.g),this.b=fa(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=yi){return Xe.workingToColorSpace(jn.copy(this),t),Math.round(Pe(jn.r*255,0,255))*65536+Math.round(Pe(jn.g*255,0,255))*256+Math.round(Pe(jn.b*255,0,255))}getHexString(t=yi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Xe.workingColorSpace){Xe.workingToColorSpace(jn.copy(this),e);let n=jn.r,s=jn.g,r=jn.b,a=Math.max(n,s,r),l=Math.min(n,s,r),h,u,d=(l+a)/2;if(l===a)h=0,u=0;else{let v=a-l;switch(u=d<=.5?v/(a+l):v/(2-a-l),a){case n:h=(s-r)/v+(s<r?6:0);break;case s:h=(r-n)/v+2;break;case r:h=(n-s)/v+4;break}h/=6}return t.h=h,t.s=u,t.l=d,t}getRGB(t,e=Xe.workingColorSpace){return Xe.workingToColorSpace(jn.copy(this),e),t.r=jn.r,t.g=jn.g,t.b=jn.b,t}getStyle(t=yi){Xe.workingToColorSpace(jn.copy(this),t);let e=jn.r,n=jn.g,s=jn.b;return t!==yi?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Vs),this.setHSL(Vs.h+t,Vs.s+e,Vs.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Vs),t.getHSL(Ql);let n=Mo(Vs.h,Ql.h,e),s=Mo(Vs.s,Ql.s,e),r=Mo(Vs.l,Ql.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},jn=new xe;xe.NAMES=E0;var Po=class extends On{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Is,this.environmentIntensity=1,this.environmentRotation=new Is,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Bi=new Z,Es=new Z,hd=new Z,Ts=new Z,ea=new Z,na=new Z,gm=new Z,ud=new Z,dd=new Z,fd=new Z,pd=new an,md=new an,gd=new an,Xs=class i{constructor(t=new Z,e=new Z,n=new Z){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Bi.subVectors(t,e),s.cross(Bi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Bi.subVectors(s,e),Es.subVectors(n,e),hd.subVectors(t,e);let a=Bi.dot(Bi),l=Bi.dot(Es),h=Bi.dot(hd),u=Es.dot(Es),d=Es.dot(hd),v=a*u-l*l;if(v===0)return r.set(0,0,0),null;let g=1/v,S=(u*h-l*d)*g,w=(a*d-l*h)*g;return r.set(1-S-w,w,S)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Ts)===null?!1:Ts.x>=0&&Ts.y>=0&&Ts.x+Ts.y<=1}static getInterpolation(t,e,n,s,r,a,l,h){return this.getBarycoord(t,e,n,s,Ts)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(r,Ts.x),h.addScaledVector(a,Ts.y),h.addScaledVector(l,Ts.z),h)}static getInterpolatedAttribute(t,e,n,s,r,a){return pd.setScalar(0),md.setScalar(0),gd.setScalar(0),pd.fromBufferAttribute(t,e),md.fromBufferAttribute(t,n),gd.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(pd,r.x),a.addScaledVector(md,r.y),a.addScaledVector(gd,r.z),a}static isFrontFacing(t,e,n,s){return Bi.subVectors(n,e),Es.subVectors(t,e),Bi.cross(Es).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Bi.subVectors(this.c,this.b),Es.subVectors(this.a,this.b),Bi.cross(Es).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,l;ea.subVectors(s,n),na.subVectors(r,n),ud.subVectors(t,n);let h=ea.dot(ud),u=na.dot(ud);if(h<=0&&u<=0)return e.copy(n);dd.subVectors(t,s);let d=ea.dot(dd),v=na.dot(dd);if(d>=0&&v<=d)return e.copy(s);let g=h*v-d*u;if(g<=0&&h>=0&&d<=0)return a=h/(h-d),e.copy(n).addScaledVector(ea,a);fd.subVectors(t,r);let S=ea.dot(fd),w=na.dot(fd);if(w>=0&&S<=w)return e.copy(r);let L=S*u-h*w;if(L<=0&&u>=0&&w<=0)return l=u/(u-w),e.copy(n).addScaledVector(na,l);let _=d*w-S*v;if(_<=0&&v-d>=0&&S-w>=0)return gm.subVectors(r,s),l=(v-d)/(v-d+(S-w)),e.copy(s).addScaledVector(gm,l);let m=1/(_+L+g);return a=L*m,l=g*m,e.copy(n).addScaledVector(ea,a).addScaledVector(na,l)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ii=class{constructor(t=new Z(1/0,1/0,1/0),e=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ki.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ki.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=ki.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,l=r.count;a<l;a++)t.isMesh===!0?t.getVertexPosition(a,ki):ki.fromBufferAttribute(r,a),ki.applyMatrix4(t.matrixWorld),this.expandByPoint(ki);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),tc.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),tc.copy(n.boundingBox)),tc.applyMatrix4(t.matrixWorld),this.union(tc)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ki),ki.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(po),ec.subVectors(this.max,po),ia.subVectors(t.a,po),sa.subVectors(t.b,po),ra.subVectors(t.c,po),Hs.subVectors(sa,ia),Gs.subVectors(ra,sa),xr.subVectors(ia,ra);let e=[0,-Hs.z,Hs.y,0,-Gs.z,Gs.y,0,-xr.z,xr.y,Hs.z,0,-Hs.x,Gs.z,0,-Gs.x,xr.z,0,-xr.x,-Hs.y,Hs.x,0,-Gs.y,Gs.x,0,-xr.y,xr.x,0];return!_d(e,ia,sa,ra,ec)||(e=[1,0,0,0,1,0,0,0,1],!_d(e,ia,sa,ra,ec))?!1:(nc.crossVectors(Hs,Gs),e=[nc.x,nc.y,nc.z],_d(e,ia,sa,ra,ec))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ki).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ki).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(As[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),As[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),As[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),As[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),As[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),As[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),As[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),As[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(As),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},As=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],ki=new Z,tc=new ii,ia=new Z,sa=new Z,ra=new Z,Hs=new Z,Gs=new Z,xr=new Z,po=new Z,ec=new Z,nc=new Z,vr=new Z;function _d(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){vr.fromArray(i,r);let l=s.x*Math.abs(vr.x)+s.y*Math.abs(vr.y)+s.z*Math.abs(vr.z),h=t.dot(vr),u=e.dot(vr),d=n.dot(vr);if(Math.max(-Math.max(h,u,d),Math.min(h,u,d))>l)return!1}return!0}var Tn=new Z,ic=new zt,ux=0,hn=class extends ss{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ux++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=hf,this.updateRanges=[],this.gpuType=Ci,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ic.fromBufferAttribute(this,e),ic.applyMatrix3(t),this.setXY(e,ic.x,ic.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Tn.fromBufferAttribute(this,e),Tn.applyMatrix3(t),this.setXYZ(e,Tn.x,Tn.y,Tn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Tn.fromBufferAttribute(this,e),Tn.applyMatrix4(t),this.setXYZ(e,Tn.x,Tn.y,Tn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Tn.fromBufferAttribute(this,e),Tn.applyNormalMatrix(t),this.setXYZ(e,Tn.x,Tn.y,Tn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Tn.fromBufferAttribute(this,e),Tn.transformDirection(t),this.setXYZ(e,Tn.x,Tn.y,Tn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=$i(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=on(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=$i(e,this.array)),e}setX(t,e){return this.normalized&&(e=on(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=$i(e,this.array)),e}setY(t,e){return this.normalized&&(e=on(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=$i(e,this.array)),e}setZ(t,e){return this.normalized&&(e=on(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=$i(e,this.array)),e}setW(t,e){return this.normalized&&(e=on(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=on(e,this.array),n=on(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=on(e,this.array),n=on(n,this.array),s=on(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=on(e,this.array),n=on(n,this.array),s=on(s,this.array),r=on(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Lo=class extends hn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Do=class extends hn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Sn=class extends hn{constructor(t,e,n){super(new Float32Array(t),e,n)}},dx=new ii,mo=new Z,xd=new Z,mi=class{constructor(t=new Z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):dx.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;mo.subVectors(t,this.center);let e=mo.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(mo,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(xd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(mo.copy(t.center).add(xd)),this.expandByPoint(mo.copy(t.center).sub(xd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},fx=0,Ai=new qe,vd=new On,aa=new Z,vi=new ii,go=new ii,Un=new Z,Mn=class i extends ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fx++}),this.uuid=ns(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(O_(t)?Do:Lo)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Re().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Ai.makeRotationFromQuaternion(t),this.applyMatrix4(Ai),this}rotateX(t){return Ai.makeRotationX(t),this.applyMatrix4(Ai),this}rotateY(t){return Ai.makeRotationY(t),this.applyMatrix4(Ai),this}rotateZ(t){return Ai.makeRotationZ(t),this.applyMatrix4(Ai),this}translate(t,e,n){return Ai.makeTranslation(t,e,n),this.applyMatrix4(Ai),this}scale(t,e,n){return Ai.makeScale(t,e,n),this.applyMatrix4(Ai),this}lookAt(t){return vd.lookAt(t),vd.updateMatrix(),this.applyMatrix4(vd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(aa).negate(),this.translate(aa.x,aa.y,aa.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Sn(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&ye("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ii);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){be("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];vi.setFromBufferAttribute(r),this.morphTargetsRelative?(Un.addVectors(this.boundingBox.min,vi.min),this.boundingBox.expandByPoint(Un),Un.addVectors(this.boundingBox.max,vi.max),this.boundingBox.expandByPoint(Un)):(this.boundingBox.expandByPoint(vi.min),this.boundingBox.expandByPoint(vi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&be('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){be("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(t){let n=this.boundingSphere.center;if(vi.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let l=e[r];go.setFromBufferAttribute(l),this.morphTargetsRelative?(Un.addVectors(vi.min,go.min),vi.expandByPoint(Un),Un.addVectors(vi.max,go.max),vi.expandByPoint(Un)):(vi.expandByPoint(go.min),vi.expandByPoint(go.max))}vi.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Un.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Un));if(e)for(let r=0,a=e.length;r<a;r++){let l=e[r],h=this.morphTargetsRelative;for(let u=0,d=l.count;u<d;u++)Un.fromBufferAttribute(l,u),h&&(aa.fromBufferAttribute(t,u),Un.add(aa)),s=Math.max(s,n.distanceToSquared(Un))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&be('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){be("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new hn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let l=[],h=[];for(let A=0;A<n.count;A++)l[A]=new Z,h[A]=new Z;let u=new Z,d=new Z,v=new Z,g=new zt,S=new zt,w=new zt,L=new Z,_=new Z;function m(A,F,G){u.fromBufferAttribute(n,A),d.fromBufferAttribute(n,F),v.fromBufferAttribute(n,G),g.fromBufferAttribute(r,A),S.fromBufferAttribute(r,F),w.fromBufferAttribute(r,G),d.sub(u),v.sub(u),S.sub(g),w.sub(g);let X=1/(S.x*w.y-w.x*S.y);isFinite(X)&&(L.copy(d).multiplyScalar(w.y).addScaledVector(v,-S.y).multiplyScalar(X),_.copy(v).multiplyScalar(S.x).addScaledVector(d,-w.x).multiplyScalar(X),l[A].add(L),l[F].add(L),l[G].add(L),h[A].add(_),h[F].add(_),h[G].add(_))}let z=this.groups;z.length===0&&(z=[{start:0,count:t.count}]);for(let A=0,F=z.length;A<F;++A){let G=z[A],X=G.start,st=G.count;for(let ht=X,j=X+st;ht<j;ht+=3)m(t.getX(ht+0),t.getX(ht+1),t.getX(ht+2))}let $=new Z,I=new Z,T=new Z,O=new Z;function W(A){T.fromBufferAttribute(s,A),O.copy(T);let F=l[A];$.copy(F),$.sub(T.multiplyScalar(T.dot(F))).normalize(),I.crossVectors(O,F);let X=I.dot(h[A])<0?-1:1;a.setXYZW(A,$.x,$.y,$.z,X)}for(let A=0,F=z.length;A<F;++A){let G=z[A],X=G.start,st=G.count;for(let ht=X,j=X+st;ht<j;ht+=3)W(t.getX(ht+0)),W(t.getX(ht+1)),W(t.getX(ht+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new hn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let g=0,S=n.count;g<S;g++)n.setXYZ(g,0,0,0);let s=new Z,r=new Z,a=new Z,l=new Z,h=new Z,u=new Z,d=new Z,v=new Z;if(t)for(let g=0,S=t.count;g<S;g+=3){let w=t.getX(g+0),L=t.getX(g+1),_=t.getX(g+2);s.fromBufferAttribute(e,w),r.fromBufferAttribute(e,L),a.fromBufferAttribute(e,_),d.subVectors(a,r),v.subVectors(s,r),d.cross(v),l.fromBufferAttribute(n,w),h.fromBufferAttribute(n,L),u.fromBufferAttribute(n,_),l.add(d),h.add(d),u.add(d),n.setXYZ(w,l.x,l.y,l.z),n.setXYZ(L,h.x,h.y,h.z),n.setXYZ(_,u.x,u.y,u.z)}else for(let g=0,S=e.count;g<S;g+=3)s.fromBufferAttribute(e,g+0),r.fromBufferAttribute(e,g+1),a.fromBufferAttribute(e,g+2),d.subVectors(a,r),v.subVectors(s,r),d.cross(v),n.setXYZ(g+0,d.x,d.y,d.z),n.setXYZ(g+1,d.x,d.y,d.z),n.setXYZ(g+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Un.fromBufferAttribute(t,e),Un.normalize(),t.setXYZ(e,Un.x,Un.y,Un.z)}toNonIndexed(){function t(l,h){let u=l.array,d=l.itemSize,v=l.normalized,g=new u.constructor(h.length*d),S=0,w=0;for(let L=0,_=h.length;L<_;L++){l.isInterleavedBufferAttribute?S=h[L]*l.data.stride+l.offset:S=h[L]*d;for(let m=0;m<d;m++)g[w++]=u[S++]}return new hn(g,d,v)}if(this.index===null)return ye("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let l in s){let h=s[l],u=t(h,n);e.setAttribute(l,u)}let r=this.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,v=u.length;d<v;d++){let g=u[d],S=t(g,n);h.push(S)}e.morphAttributes[l]=h}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let h=this.parameters;for(let u in h)h[u]!==void 0&&(t[u]=h[u]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let h in n){let u=n[h];t.data.attributes[h]=u.toJSON(t.data)}let s={},r=!1;for(let h in this.morphAttributes){let u=this.morphAttributes[h],d=[];for(let v=0,g=u.length;v<g;v++){let S=u[v];d.push(S.toJSON(t.data))}d.length>0&&(s[h]=d,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let l=this.boundingSphere;return l!==null&&(t.data.boundingSphere=l.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let u in s){let d=s[u];this.setAttribute(u,d.clone(e))}let r=t.morphAttributes;for(let u in r){let d=[],v=r[u];for(let g=0,S=v.length;g<S;g++)d.push(v[g].clone(e));this.morphAttributes[u]=d}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let u=0,d=a.length;u<d;u++){let v=a[u];this.addGroup(v.start,v.count,v.materialIndex)}let l=t.boundingBox;l!==null&&(this.boundingBox=l.clone());let h=t.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},kc=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=hf,this.updateRanges=[],this.version=0,this.uuid=ns()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ns()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ns()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},ni=new Z,Gi=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)ni.fromBufferAttribute(this,e),ni.applyMatrix4(t),this.setXYZ(e,ni.x,ni.y,ni.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ni.fromBufferAttribute(this,e),ni.applyNormalMatrix(t),this.setXYZ(e,ni.x,ni.y,ni.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ni.fromBufferAttribute(this,e),ni.transformDirection(t),this.setXYZ(e,ni.x,ni.y,ni.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=$i(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=on(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=on(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=on(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=on(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=on(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=$i(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=$i(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=$i(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=$i(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=on(e,this.array),n=on(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=on(e,this.array),n=on(n,this.array),s=on(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=on(e,this.array),n=on(n,this.array),s=on(s,this.array),r=on(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Ro("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new hn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Ro("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},yd=new Z,px=new Z,mx=new Re,zi=class{constructor(t=new Z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=yd.subVectors(n,e).cross(px.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(yd),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||mx.getNormalMatrix(t),s=this.coplanarPoint(yd).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},gx=0,as=class extends ss{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gx++}),this.uuid=ns(),this.name="",this.type="Material",this.blending=Ca,this.side=Ks,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qd,this.blendDst=Yd,this.blendEquation=Ir,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xe(0,0,0),this.blendAlpha=0,this.depthFunc=pa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=p0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ec,this.stencilZFail=Ec,this.stencilZPass=Ec,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){ye(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ye(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let l in r){let h=r[l];delete h.metadata,a.push(h)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new xe().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new zi().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new zt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new zt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Cs=new Z,Sd=new Z,sc=new Z,rc=new Z,wr=class{constructor(t=new Z,e=new Z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Cs)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Cs.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Cs.copy(this.origin).addScaledVector(this.direction,e),Cs.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Sd.copy(t).add(e).multiplyScalar(.5),sc.copy(e).sub(t).normalize(),rc.copy(this.origin).sub(Sd);let r=t.distanceTo(e)*.5,a=-this.direction.dot(sc),l=rc.dot(this.direction),h=-rc.dot(sc),u=rc.lengthSq(),d=Math.abs(1-a*a),v,g,S,w;if(d>0)if(v=a*h-l,g=a*l-h,w=r*d,v>=0)if(g>=-w)if(g<=w){let L=1/d;v*=L,g*=L,S=v*(v+a*g+2*l)+g*(a*v+g+2*h)+u}else g=r,v=Math.max(0,-(a*g+l)),S=-v*v+g*(g+2*h)+u;else g=-r,v=Math.max(0,-(a*g+l)),S=-v*v+g*(g+2*h)+u;else g<=-w?(v=Math.max(0,-(-a*r+l)),g=v>0?-r:Math.min(Math.max(-r,-h),r),S=-v*v+g*(g+2*h)+u):g<=w?(v=0,g=Math.min(Math.max(-r,-h),r),S=g*(g+2*h)+u):(v=Math.max(0,-(a*r+l)),g=v>0?r:Math.min(Math.max(-r,-h),r),S=-v*v+g*(g+2*h)+u);else g=a>0?-r:r,v=Math.max(0,-(a*g+l)),S=-v*v+g*(g+2*h)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,v),s&&s.copy(Sd).addScaledVector(sc,g),S}intersectSphere(t,e){if(t.radius<0)return null;Cs.subVectors(t.center,this.origin);let n=Cs.dot(this.direction),s=Cs.dot(Cs)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),l=n-a,h=n+a;return h<0?null:l<0?this.at(h,e):this.at(l,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,l,h,u=1/this.direction.x,d=1/this.direction.y,v=1/this.direction.z,g=this.origin;return u>=0?(n=(t.min.x-g.x)*u,s=(t.max.x-g.x)*u):(n=(t.max.x-g.x)*u,s=(t.min.x-g.x)*u),d>=0?(r=(t.min.y-g.y)*d,a=(t.max.y-g.y)*d):(r=(t.max.y-g.y)*d,a=(t.min.y-g.y)*d),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),v>=0?(l=(t.min.z-g.z)*v,h=(t.max.z-g.z)*v):(l=(t.max.z-g.z)*v,h=(t.min.z-g.z)*v),n>h||l>s)||((l>n||n!==n)&&(n=l),(h<s||s!==s)&&(s=h),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Cs)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,l=this.direction,h=l.x,u=l.y,d=l.z,v=t.x-a.x,g=t.y-a.y,S=t.z-a.z,w=e.x-a.x,L=e.y-a.y,_=e.z-a.z,m=n.x-a.x,z=n.y-a.y,$=n.z-a.z,I=Math.abs(h),T=Math.abs(u),O=Math.abs(d),W,A,F,G,X,st,ht,j,et,pt,gt,At;if(I>=T&&I>=O?(F=h,st=v,et=w,At=m,h>=0?(W=u,A=d,G=g,X=S,ht=L,j=_,pt=z,gt=$):(W=d,A=u,G=S,X=g,ht=_,j=L,pt=$,gt=z)):T>=O?(F=u,st=g,et=L,At=z,u>=0?(W=d,A=h,G=S,X=v,ht=_,j=w,pt=$,gt=m):(W=h,A=d,G=v,X=S,ht=w,j=_,pt=m,gt=$)):(F=d,st=S,et=_,At=$,d>=0?(W=h,A=u,G=v,X=g,ht=w,j=L,pt=m,gt=z):(W=u,A=h,G=g,X=v,ht=L,j=w,pt=z,gt=m)),F===0)return null;let _t=W/F,wt=A/F,bt=1/F,Wt=G-_t*st,te=X-wt*st,Ye=ht-_t*et,Le=j-wt*et,Ve=pt-_t*At,vt=gt-wt*At,yt=Ve*Le-vt*Ye,Ut=Wt*vt-te*Ve,he=Ye*te-Le*Wt;if(s){if(yt<0||Ut<0||he<0)return null}else if((yt<0||Ut<0||he<0)&&(yt>0||Ut>0||he>0))return null;let jt=yt+Ut+he;if(jt===0)return null;let ge=bt*(yt*st+Ut*et+he*At);return(jt>0?ge<0:ge>0)?null:this.at(ge/jt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Er=class extends as{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Is,this.combine=fh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},_m=new qe,yr=new wr,ac=new mi,xm=new Z,oc=new Z,lc=new Z,cc=new Z,Md=new Z,hc=new Z,vm=new Z,uc=new Z,Bn=class extends On{constructor(t=new Mn,e=new Er){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let l=this.morphTargetInfluences;if(r&&l){hc.set(0,0,0);for(let h=0,u=r.length;h<u;h++){let d=l[h],v=r[h];d!==0&&(Md.fromBufferAttribute(v,t),a?hc.addScaledVector(Md,d):hc.addScaledVector(Md.sub(e),d))}e.add(hc)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ac.copy(n.boundingSphere),ac.applyMatrix4(r),yr.copy(t.ray).recast(t.near),!(ac.containsPoint(yr.origin)===!1&&(yr.intersectSphere(ac,xm)===null||yr.origin.distanceToSquared(xm)>(t.far-t.near)**2))&&(_m.copy(r).invert(),yr.copy(t.ray).applyMatrix4(_m),!(n.boundingBox!==null&&yr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,yr)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,l=r.index,h=r.attributes.position,u=r.attributes.uv,d=r.attributes.uv1,v=r.attributes.normal,g=r.groups,S=r.drawRange;if(l!==null)if(Array.isArray(a))for(let w=0,L=g.length;w<L;w++){let _=g[w],m=a[_.materialIndex],z=Math.max(_.start,S.start),$=Math.min(l.count,Math.min(_.start+_.count,S.start+S.count));for(let I=z,T=$;I<T;I+=3){let O=l.getX(I),W=l.getX(I+1),A=l.getX(I+2);s=dc(this,m,t,n,u,d,v,O,W,A),s&&(s.faceIndex=Math.floor(I/3),s.face.materialIndex=_.materialIndex,e.push(s))}}else{let w=Math.max(0,S.start),L=Math.min(l.count,S.start+S.count);for(let _=w,m=L;_<m;_+=3){let z=l.getX(_),$=l.getX(_+1),I=l.getX(_+2);s=dc(this,a,t,n,u,d,v,z,$,I),s&&(s.faceIndex=Math.floor(_/3),e.push(s))}}else if(h!==void 0)if(Array.isArray(a))for(let w=0,L=g.length;w<L;w++){let _=g[w],m=a[_.materialIndex],z=Math.max(_.start,S.start),$=Math.min(h.count,Math.min(_.start+_.count,S.start+S.count));for(let I=z,T=$;I<T;I+=3){let O=I,W=I+1,A=I+2;s=dc(this,m,t,n,u,d,v,O,W,A),s&&(s.faceIndex=Math.floor(I/3),s.face.materialIndex=_.materialIndex,e.push(s))}}else{let w=Math.max(0,S.start),L=Math.min(h.count,S.start+S.count);for(let _=w,m=L;_<m;_+=3){let z=_,$=_+1,I=_+2;s=dc(this,a,t,n,u,d,v,z,$,I),s&&(s.faceIndex=Math.floor(_/3),e.push(s))}}}};function _x(i,t,e,n,s,r,a,l){let h;if(t.side===si?h=n.intersectTriangle(a,r,s,!0,l):h=n.intersectTriangle(s,r,a,t.side===Ks,l),h===null)return null;uc.copy(l),uc.applyMatrix4(i.matrixWorld);let u=e.ray.origin.distanceTo(uc);return u<e.near||u>e.far?null:{distance:u,point:uc.clone(),object:i}}function dc(i,t,e,n,s,r,a,l,h,u){i.getVertexPosition(l,oc),i.getVertexPosition(h,lc),i.getVertexPosition(u,cc);let d=_x(i,t,e,n,oc,lc,cc,vm);if(d){let v=new Z;Xs.getBarycoord(vm,oc,lc,cc,v),s&&(d.uv=Xs.getInterpolatedAttribute(s,l,h,u,v,new zt)),r&&(d.uv1=Xs.getInterpolatedAttribute(r,l,h,u,v,new zt)),a&&(d.normal=Xs.getInterpolatedAttribute(a,l,h,u,v,new Z),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));let g={a:l,b:h,c:u,normal:new Z,materialIndex:0};Xs.getNormal(oc,lc,cc,g.normal),d.face=g,d.barycoord=v}return d}var No=class extends fi{constructor(t=null,e=1,n=1,s,r,a,l,h,u=Fn,d=Fn,v,g){super(null,a,l,h,u,d,s,r,v,g),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Uo=class extends hn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},oa=new qe,ym=new qe,fc=[],Sm=new ii,xx=new qe,_o=new Bn,xo=new mi,Fo=class extends Bn{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Uo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,xx)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ii),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,oa),Sm.copy(t.boundingBox).applyMatrix4(oa),this.boundingBox.union(Sm)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new mi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,oa),xo.copy(t.boundingSphere).applyMatrix4(oa),this.boundingSphere.union(xo)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let l=0;l<n.length;l++)n[l]=s[a+l]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(_o.geometry=this.geometry,_o.material=this.material,_o.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xo.copy(this.boundingSphere),xo.applyMatrix4(n),t.ray.intersectsSphere(xo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,oa),ym.multiplyMatrices(n,oa),_o.matrixWorld=ym,_o.raycast(t,fc);for(let a=0,l=fc.length;a<l;a++){let h=fc[a];h.instanceId=r,h.object=this,e.push(h)}fc.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Uo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new No(new Float32Array(s*this.count),s,this.count,yh,Ci));let r=this.morphTexture.source.data.data,a=0;for(let u=0;u<n.length;u++)a+=n[u];let l=this.geometry.morphTargetsRelative?1:1-a,h=s*t;return r[h]=l,r.set(n,h+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Sr=new mi,vx=new zt(.5,.5),pc=new Z,Sa=class{constructor(t=new zi,e=new zi,n=new zi,s=new zi,r=new zi,a=new zi){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let l=this.planes;return l[0].copy(t),l[1].copy(e),l[2].copy(n),l[3].copy(s),l[4].copy(r),l[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Vi,n=!1){let s=this.planes,r=t.elements,a=r[0],l=r[1],h=r[2],u=r[3],d=r[4],v=r[5],g=r[6],S=r[7],w=r[8],L=r[9],_=r[10],m=r[11],z=r[12],$=r[13],I=r[14],T=r[15];if(s[0].setComponents(u-a,S-d,m-w,T-z).normalize(),s[1].setComponents(u+a,S+d,m+w,T+z).normalize(),s[2].setComponents(u+l,S+v,m+L,T+$).normalize(),s[3].setComponents(u-l,S-v,m-L,T-$).normalize(),n)s[4].setComponents(h,g,_,I).normalize(),s[5].setComponents(u-h,S-g,m-_,T-I).normalize();else if(s[4].setComponents(u-h,S-g,m-_,T-I).normalize(),e===Vi)s[5].setComponents(u+h,S+g,m+_,T+I).normalize();else if(e===ma)s[5].setComponents(h,g,_,I).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Sr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Sr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Sr)}intersectsSprite(t){Sr.center.set(0,0,0);let e=vx.distanceTo(t.center);return Sr.radius=.7071067811865476+e,Sr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Sr)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(pc.x=s.normal.x>0?t.max.x:t.min.x,pc.y=s.normal.y>0?t.max.y:t.min.y,pc.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(pc)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Tr=class extends as{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},zc=new Z,$c=new Z,Mm=new qe,vo=new wr,mc=new mi,bd=new Z,bm=new Z,Vc=class extends On{constructor(t=new Mn,e=new Tr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)zc.fromBufferAttribute(e,s-1),$c.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=zc.distanceTo($c);t.setAttribute("lineDistance",new Sn(n,1))}else ye("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),mc.copy(n.boundingSphere),mc.applyMatrix4(s),mc.radius+=r,t.ray.intersectsSphere(mc)===!1)return;Mm.copy(s).invert(),vo.copy(t.ray).applyMatrix4(Mm);let l=r/((this.scale.x+this.scale.y+this.scale.z)/3),h=l*l,u=this.isLineSegments?2:1,d=n.index,g=n.attributes.position;if(d!==null){let S=Math.max(0,a.start),w=Math.min(d.count,a.start+a.count);for(let L=S,_=w-1;L<_;L+=u){let m=d.getX(L),z=d.getX(L+1),$=gc(this,t,vo,h,m,z,L);$&&e.push($)}if(this.isLineLoop){let L=d.getX(w-1),_=d.getX(S),m=gc(this,t,vo,h,L,_,w-1);m&&e.push(m)}}else{let S=Math.max(0,a.start),w=Math.min(g.count,a.start+a.count);for(let L=S,_=w-1;L<_;L+=u){let m=gc(this,t,vo,h,L,L+1,L);m&&e.push(m)}if(this.isLineLoop){let L=gc(this,t,vo,h,w-1,S,w-1);L&&e.push(L)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}};function gc(i,t,e,n,s,r,a){let l=i.geometry.attributes.position;if(zc.fromBufferAttribute(l,s),$c.fromBufferAttribute(l,r),e.distanceSqToSegment(zc,$c,bd,bm)>n)return;bd.applyMatrix4(i.matrixWorld);let u=t.ray.origin.distanceTo(bd);if(!(u<t.near||u>t.far))return{distance:u,point:bm.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Oo=class extends Vc{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},Hc=class extends as{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},wm=new qe,Nd=new wr,_c=new mi,xc=new Z,Ar=class extends On{constructor(t=new Mn,e=new Hc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_c.copy(n.boundingSphere),_c.applyMatrix4(s),_c.radius+=r,t.ray.intersectsSphere(_c)===!1)return;wm.copy(s).invert(),Nd.copy(t.ray).applyMatrix4(wm);let l=r/((this.scale.x+this.scale.y+this.scale.z)/3),h=l*l,u=n.index,v=n.attributes.position;if(u!==null){let g=Math.max(0,a.start),S=Math.min(u.count,a.start+a.count);for(let w=g,L=S;w<L;w++){let _=u.getX(w);xc.fromBufferAttribute(v,_),Em(xc,_,h,s,t,e,this)}}else{let g=Math.max(0,a.start),S=Math.min(v.count,a.start+a.count);for(let w=g,L=S;w<L;w++)xc.fromBufferAttribute(v,w),Em(xc,w,h,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}};function Em(i,t,e,n,s,r,a){let l=Nd.distanceSqToPoint(i);if(l<e){let h=new Z;Nd.closestPointToPoint(i,h),h.applyMatrix4(n);let u=s.ray.origin.distanceTo(h);if(u<s.near||u>s.far)return;r.push({distance:u,distanceToRay:Math.sqrt(l),point:h,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Bo=class extends fi{constructor(t=[],e=Qs,n,s,r,a,l,h,u,d){super(t,e,n,s,r,a,l,h,u,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var qs=class extends fi{constructor(t,e,n=Xi,s,r,a,l=Fn,h=Fn,u,d=is,v=1){if(d!==is&&d!==er)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let g={width:t,height:e,depth:v};super(g,s,r,a,l,h,d,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new xa(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Gc=class extends qs{constructor(t,e=Xi,n=Qs,s,r,a=Fn,l=Fn,h,u=is){let d={width:t,height:t,depth:1},v=[d,d,d,d,d,d];super(t,t,e,n,s,r,a,l,h,u),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},ko=class extends fi{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Ma=class i extends Mn{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let l=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let h=[],u=[],d=[],v=[],g=0,S=0;w("z","y","x",-1,-1,n,e,t,a,r,0),w("z","y","x",1,-1,n,e,-t,a,r,1),w("x","z","y",1,1,t,n,e,s,a,2),w("x","z","y",1,-1,t,n,-e,s,a,3),w("x","y","z",1,-1,t,e,n,s,r,4),w("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(h),this.setAttribute("position",new Sn(u,3)),this.setAttribute("normal",new Sn(d,3)),this.setAttribute("uv",new Sn(v,2));function w(L,_,m,z,$,I,T,O,W,A,F){let G=I/W,X=T/A,st=I/2,ht=T/2,j=O/2,et=W+1,pt=A+1,gt=0,At=0,_t=new Z;for(let wt=0;wt<pt;wt++){let bt=wt*X-ht;for(let Wt=0;Wt<et;Wt++){let te=Wt*G-st;_t[L]=te*z,_t[_]=bt*$,_t[m]=j,u.push(_t.x,_t.y,_t.z),_t[L]=0,_t[_]=0,_t[m]=O>0?1:-1,d.push(_t.x,_t.y,_t.z),v.push(Wt/W),v.push(1-wt/A),gt+=1}}for(let wt=0;wt<A;wt++)for(let bt=0;bt<W;bt++){let Wt=g+bt+et*wt,te=g+bt+et*(wt+1),Ye=g+(bt+1)+et*(wt+1),Le=g+(bt+1)+et*wt;h.push(Wt,te,Le),h.push(te,Ye,Le),At+=6}l.addGroup(S,At,F),S+=At,g+=gt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var zo=class i extends Mn{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,l=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:l,thetaLength:h};let u=this;s=Math.floor(s),r=Math.floor(r);let d=[],v=[],g=[],S=[],w=0,L=[],_=n/2,m=0;z(),a===!1&&(t>0&&$(!0),e>0&&$(!1)),this.setIndex(d),this.setAttribute("position",new Sn(v,3)),this.setAttribute("normal",new Sn(g,3)),this.setAttribute("uv",new Sn(S,2));function z(){let I=new Z,T=new Z,O=0,W=(e-t)/n;for(let A=0;A<=r;A++){let F=[],G=A/r,X=G*(e-t)+t;for(let st=0;st<=s;st++){let ht=st/s,j=ht*h+l,et=Math.sin(j),pt=Math.cos(j);T.x=X*et,T.y=-G*n+_,T.z=X*pt,v.push(T.x,T.y,T.z),I.set(et,W,pt).normalize(),g.push(I.x,I.y,I.z),S.push(ht,1-G),F.push(w++)}L.push(F)}for(let A=0;A<s;A++)for(let F=0;F<r;F++){let G=L[F][A],X=L[F+1][A],st=L[F+1][A+1],ht=L[F][A+1];(t>0||F!==0)&&(d.push(G,X,ht),O+=3),(e>0||F!==r-1)&&(d.push(X,st,ht),O+=3)}u.addGroup(m,O,0),m+=O}function $(I){let T=w,O=new zt,W=new Z,A=0,F=I===!0?t:e,G=I===!0?1:-1;for(let st=1;st<=s;st++)v.push(0,_*G,0),g.push(0,G,0),S.push(.5,.5),w++;let X=w;for(let st=0;st<=s;st++){let j=st/s*h+l,et=Math.cos(j),pt=Math.sin(j);W.x=F*pt,W.y=_*G,W.z=F*et,v.push(W.x,W.y,W.z),g.push(0,G,0),O.x=et*.5+.5,O.y=pt*.5*G+.5,S.push(O.x,O.y),w++}for(let st=0;st<s;st++){let ht=T+st,j=X+st;I===!0?d.push(j,j+1,ht):d.push(j+1,j,ht),A+=3}u.addGroup(m,A,I===!0?1:2),m+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Si=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ye("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let l=0,h=r-1,u;for(;l<=h;)if(s=Math.floor(l+(h-l)/2),u=n[s]-a,u<0)l=s+1;else if(u>0)h=s-1;else{h=s;break}if(s=h,n[s]===a)return s/(r-1);let d=n[s],g=n[s+1]-d,S=(a-d)/g;return(s+S)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),l=this.getPoint(r),h=e||(a.isVector2?new zt:new Z);return h.copy(l).sub(a).normalize(),h}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new Z,s=[],r=[],a=[],l=new Z,h=new qe;for(let S=0;S<=t;S++){let w=S/t;s[S]=this.getTangentAt(w,new Z)}r[0]=new Z,a[0]=new Z;let u=Number.MAX_VALUE,d=Math.abs(s[0].x),v=Math.abs(s[0].y),g=Math.abs(s[0].z);d<=u&&(u=d,n.set(1,0,0)),v<=u&&(u=v,n.set(0,1,0)),g<=u&&n.set(0,0,1),l.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],l),a[0].crossVectors(s[0],r[0]);for(let S=1;S<=t;S++){if(r[S]=r[S-1].clone(),a[S]=a[S-1].clone(),l.crossVectors(s[S-1],s[S]),l.length()>Number.EPSILON){l.normalize();let w=Math.acos(Pe(s[S-1].dot(s[S]),-1,1));r[S].applyMatrix4(h.makeRotationAxis(l,w))}a[S].crossVectors(s[S],r[S])}if(e===!0){let S=Math.acos(Pe(r[0].dot(r[t]),-1,1));S/=t,s[0].dot(l.crossVectors(r[0],r[t]))>0&&(S=-S);for(let w=1;w<=t;w++)r[w].applyMatrix4(h.makeRotationAxis(s[w],S*w)),a[w].crossVectors(s[w],r[w])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},ba=class extends Si{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,l=!1,h=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=l,this.aRotation=h}getPoint(t,e=new zt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let l=this.aStartAngle+t*r,h=this.aX+this.xRadius*Math.cos(l),u=this.aY+this.yRadius*Math.sin(l);if(this.aRotation!==0){let d=Math.cos(this.aRotation),v=Math.sin(this.aRotation),g=h-this.aX,S=u-this.aY;h=g*d-S*v+this.aX,u=g*v+S*d+this.aY}return n.set(h,u)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Wc=class extends ba{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function pf(){let i=0,t=0,e=0,n=0;function s(r,a,l,h){i=r,t=l,e=-3*r+3*a-2*l-h,n=2*r-2*a+l+h}return{initCatmullRom:function(r,a,l,h,u){s(a,l,u*(l-r),u*(h-a))},initNonuniformCatmullRom:function(r,a,l,h,u,d,v){let g=(a-r)/u-(l-r)/(u+d)+(l-a)/d,S=(l-a)/d-(h-a)/(d+v)+(h-l)/v;g*=d,S*=d,s(a,l,g,S)},calc:function(r){let a=r*r,l=a*r;return i+t*r+e*a+n*l}}}var Tm=new Z,Am=new Z,wd=new pf,Ed=new pf,Td=new pf,Xc=class extends Si{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new Z){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,l=Math.floor(a),h=a-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/r)+1)*r:h===0&&l===r-1&&(l=r-2,h=1);let u,d;this.closed||l>0?u=s[(l-1)%r]:(Am.subVectors(s[0],s[1]).add(s[0]),u=Am);let v=s[l%r],g=s[(l+1)%r];if(this.closed||l+2<r?d=s[(l+2)%r]:(Tm.subVectors(s[r-1],s[r-2]).add(s[r-1]),d=Tm),this.curveType==="centripetal"||this.curveType==="chordal"){let S=this.curveType==="chordal"?.5:.25,w=Math.pow(u.distanceToSquared(v),S),L=Math.pow(v.distanceToSquared(g),S),_=Math.pow(g.distanceToSquared(d),S);L<1e-4&&(L=1),w<1e-4&&(w=L),_<1e-4&&(_=L),wd.initNonuniformCatmullRom(u.x,v.x,g.x,d.x,w,L,_),Ed.initNonuniformCatmullRom(u.y,v.y,g.y,d.y,w,L,_),Td.initNonuniformCatmullRom(u.z,v.z,g.z,d.z,w,L,_)}else this.curveType==="catmullrom"&&(wd.initCatmullRom(u.x,v.x,g.x,d.x,this.tension),Ed.initCatmullRom(u.y,v.y,g.y,d.y,this.tension),Td.initCatmullRom(u.z,v.z,g.z,d.z,this.tension));return n.set(wd.calc(h),Ed.calc(h),Td.calc(h)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Z().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Cm(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,l=i*i,h=i*l;return(2*e-2*n+r+a)*h+(-3*e+3*n-2*r-a)*l+r*i+e}function yx(i,t){let e=1-i;return e*e*t}function Sx(i,t){return 2*(1-i)*i*t}function Mx(i,t){return i*i*t}function bo(i,t,e,n){return yx(i,t)+Sx(i,e)+Mx(i,n)}function bx(i,t){let e=1-i;return e*e*e*t}function wx(i,t){let e=1-i;return 3*e*e*i*t}function Ex(i,t){return 3*(1-i)*i*i*t}function Tx(i,t){return i*i*i*t}function wo(i,t,e,n,s){return bx(i,t)+wx(i,e)+Ex(i,n)+Tx(i,s)}var $o=class extends Si{constructor(t=new zt,e=new zt,n=new zt,s=new zt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new zt){let n=e,s=this.v0,r=this.v1,a=this.v2,l=this.v3;return n.set(wo(t,s.x,r.x,a.x,l.x),wo(t,s.y,r.y,a.y,l.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},qc=class extends Si{constructor(t=new Z,e=new Z,n=new Z,s=new Z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Z){let n=e,s=this.v0,r=this.v1,a=this.v2,l=this.v3;return n.set(wo(t,s.x,r.x,a.x,l.x),wo(t,s.y,r.y,a.y,l.y),wo(t,s.z,r.z,a.z,l.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Vo=class extends Si{constructor(t=new zt,e=new zt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new zt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new zt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Yc=class extends Si{constructor(t=new Z,e=new Z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new Z){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Z){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ho=class extends Si{constructor(t=new zt,e=new zt,n=new zt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new zt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(bo(t,s.x,r.x,a.x),bo(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Zc=class extends Si{constructor(t=new Z,e=new Z,n=new Z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Z){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(bo(t,s.x,r.x,a.x),bo(t,s.y,r.y,a.y),bo(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Go=class extends Si{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new zt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),l=r-a,h=s[a===0?a:a-1],u=s[a],d=s[a>s.length-2?s.length-1:a+1],v=s[a>s.length-3?s.length-1:a+2];return n.set(Cm(l,h.x,u.x,d.x,v.x),Cm(l,h.y,u.y,d.y,v.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new zt().fromArray(s))}return this}},Ud=Object.freeze({__proto__:null,ArcCurve:Wc,CatmullRomCurve3:Xc,CubicBezierCurve:$o,CubicBezierCurve3:qc,EllipseCurve:ba,LineCurve:Vo,LineCurve3:Yc,QuadraticBezierCurve:Ho,QuadraticBezierCurve3:Zc,SplineCurve:Go}),Jc=class extends Si{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ud[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,l=this.curves[r],h=l.getLength(),u=h===0?0:1-a/h;return l.getPointAt(u,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],l=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,h=a.getPoints(l);for(let u=0;u<h.length;u++){let d=h[u];n&&n.equals(d)||(e.push(d),n=d)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Ud[s.type]().fromJSON(s))}return this}},Cr=class extends Jc{constructor(t){super(),this.type="Path",this.currentPoint=new zt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Vo(this.currentPoint.clone(),new zt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Ho(this.currentPoint.clone(),new zt(t,e),new zt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let l=new $o(this.currentPoint.clone(),new zt(t,e),new zt(n,s),new zt(r,a));return this.curves.push(l),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Go(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absarc(t+l,e+h,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,l,h){let u=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(t+u,e+d,n,s,r,a,l,h),this}absellipse(t,e,n,s,r,a,l,h){let u=new ba(t,e,n,s,r,a,l,h);if(this.curves.length>0){let v=u.getPoint(0);v.equals(this.currentPoint)||this.lineTo(v.x,v.y)}this.curves.push(u);let d=u.getPoint(1);return this.currentPoint.copy(d),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},wa=class extends Cr{constructor(t){super(t),this.uuid=ns(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Cr().fromJSON(s))}return this}};function Ax(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=T0(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let l,h,u;if(n&&(r=Lx(i,t,r,e)),i.length>80*e){l=i[0],h=i[1];let d=l,v=h;for(let g=e;g<s;g+=e){let S=i[g],w=i[g+1];S<l&&(l=S),w<h&&(h=w),S>d&&(d=S),w>v&&(v=w)}u=Math.max(d-l,v-h),u=u!==0?32767/u:0}return Wo(r,a,e,l,h,u,0),a}function T0(i,t,e,n,s){let r;if(s===Hx(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=Rm(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=Rm(a/n|0,i[a],i[a+1],r);return r&&Ea(r,r.next)&&(qo(r),r=r.next),r}function Rr(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Ea(e,e.next)||vn(e.prev,e,e.next)===0)){if(qo(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Wo(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Ox(i,n,s,r);let l=i;for(;i.prev!==i.next;){let h=i.prev,u=i.next;if(r?Rx(i,n,s,r):Cx(i)){t.push(h.i,i.i,u.i),qo(i),i=u.next,l=u.next;continue}if(i=u,i===l){a?a===1?(i=Ix(Rr(i),t),Wo(i,t,e,n,s,r,2)):a===2&&Px(i,t,e,n,s,r):Wo(Rr(i),t,e,n,s,r,1);break}}}function Cx(i){let t=i.prev,e=i,n=i.next;if(vn(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,l=t.y,h=e.y,u=n.y,d=Math.min(s,r,a),v=Math.min(l,h,u),g=Math.max(s,r,a),S=Math.max(l,h,u),w=n.next;for(;w!==t;){if(w.x>=d&&w.x<=g&&w.y>=v&&w.y<=S&&yo(s,l,r,h,a,u,w.x,w.y)&&vn(w.prev,w,w.next)>=0)return!1;w=w.next}return!0}function Rx(i,t,e,n){let s=i.prev,r=i,a=i.next;if(vn(s,r,a)>=0)return!1;let l=s.x,h=r.x,u=a.x,d=s.y,v=r.y,g=a.y,S=Math.min(l,h,u),w=Math.min(d,v,g),L=Math.max(l,h,u),_=Math.max(d,v,g),m=Fd(S,w,t,e,n),z=Fd(L,_,t,e,n),$=i.prevZ,I=i.nextZ;for(;$&&$.z>=m&&I&&I.z<=z;){if($.x>=S&&$.x<=L&&$.y>=w&&$.y<=_&&$!==s&&$!==a&&yo(l,d,h,v,u,g,$.x,$.y)&&vn($.prev,$,$.next)>=0||($=$.prevZ,I.x>=S&&I.x<=L&&I.y>=w&&I.y<=_&&I!==s&&I!==a&&yo(l,d,h,v,u,g,I.x,I.y)&&vn(I.prev,I,I.next)>=0))return!1;I=I.nextZ}for(;$&&$.z>=m;){if($.x>=S&&$.x<=L&&$.y>=w&&$.y<=_&&$!==s&&$!==a&&yo(l,d,h,v,u,g,$.x,$.y)&&vn($.prev,$,$.next)>=0)return!1;$=$.prevZ}for(;I&&I.z<=z;){if(I.x>=S&&I.x<=L&&I.y>=w&&I.y<=_&&I!==s&&I!==a&&yo(l,d,h,v,u,g,I.x,I.y)&&vn(I.prev,I,I.next)>=0)return!1;I=I.nextZ}return!0}function Ix(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Ea(n,s)&&C0(n,e,e.next,s)&&Xo(n,s)&&Xo(s,n)&&(t.push(n.i,e.i,s.i),qo(e),qo(e.next),e=i=s),e=e.next}while(e!==i);return Rr(e)}function Px(i,t,e,n,s,r){let a=i;do{let l=a.next.next;for(;l!==a.prev;){if(a.i!==l.i&&zx(a,l)){let h=R0(a,l);a=Rr(a,a.next),h=Rr(h,h.next),Wo(a,t,e,n,s,r,0),Wo(h,t,e,n,s,r,0);return}l=l.next}a=a.next}while(a!==i)}function Lx(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let l=t[r]*n,h=r<a-1?t[r+1]*n:i.length,u=T0(i,l,h,n,!1);u===u.next&&(u.steiner=!0),s.push(kx(u))}s.sort(Dx);for(let r=0;r<s.length;r++)e=Nx(s[r],e);return e}function Dx(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Nx(i,t){let e=Ux(i,t);if(!e)return t;let n=R0(e,i);return Rr(n,n.next),Rr(e,e.next)}function Ux(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(Ea(i,e))return e;do{if(Ea(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let v=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(v<=n&&v>r&&(r=v,a=e.x<e.next.x?e:e.next,v===n))return a}e=e.next}while(e!==t);if(!a)return null;let l=a,h=a.x,u=a.y,d=1/0;e=a;do{if(n>=e.x&&e.x>=h&&n!==e.x&&A0(s<u?n:r,s,h,u,s<u?r:n,s,e.x,e.y)){let v=Math.abs(s-e.y)/(n-e.x);Xo(e,i)&&(v<d||v===d&&(e.x>a.x||e.x===a.x&&Fx(a,e)))&&(a=e,d=v)}e=e.next}while(e!==l);return a}function Fx(i,t){return vn(i.prev,i,t.prev)<0&&vn(t.next,i,i.next)<0}function Ox(i,t,e,n){let s=i;do s.z===0&&(s.z=Fd(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Bx(s)}function Bx(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,l=0;for(let u=0;u<e&&(l++,a=a.nextZ,!!a);u++);let h=e;for(;l>0||h>0&&a;)l!==0&&(h===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,l--):(s=a,a=a.nextZ,h--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function Fd(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function kx(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function A0(i,t,e,n,s,r,a,l){return(s-a)*(t-l)>=(i-a)*(r-l)&&(i-a)*(n-l)>=(e-a)*(t-l)&&(e-a)*(r-l)>=(s-a)*(n-l)}function yo(i,t,e,n,s,r,a,l){return!(i===a&&t===l)&&A0(i,t,e,n,s,r,a,l)}function zx(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!$x(i,t)&&(Xo(i,t)&&Xo(t,i)&&Vx(i,t)&&(vn(i.prev,i,t.prev)||vn(i,t.prev,t))||Ea(i,t)&&vn(i.prev,i,i.next)>0&&vn(t.prev,t,t.next)>0)}function vn(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Ea(i,t){return i.x===t.x&&i.y===t.y}function C0(i,t,e,n){let s=yc(vn(i,t,e)),r=yc(vn(i,t,n)),a=yc(vn(e,n,i)),l=yc(vn(e,n,t));return!!(s!==r&&a!==l||s===0&&vc(i,e,t)||r===0&&vc(i,n,t)||a===0&&vc(e,i,n)||l===0&&vc(e,t,n))}function vc(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function yc(i){return i>0?1:i<0?-1:0}function $x(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&C0(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Xo(i,t){return vn(i.prev,i,i.next)<0?vn(i,t,i.next)>=0&&vn(i,i.prev,t)>=0:vn(i,t,i.prev)<0||vn(i,i.next,t)<0}function Vx(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function R0(i,t){let e=Od(i.i,i.x,i.y),n=Od(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Rm(i,t,e,n){let s=Od(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function qo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Od(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Hx(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Bd=class{static triangulate(t,e,n=2){return Ax(t,e,n)}},Mr=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Im(t),Pm(n,t);let a=t.length;e.forEach(Im);for(let h=0;h<e.length;h++)s.push(a),a+=e[h].length,Pm(n,e[h]);let l=Bd.triangulate(n,s);for(let h=0;h<l.length;h+=3)r.push(l.slice(h,h+3));return r}};function Im(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Pm(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Yo=class i extends Mn{constructor(t=new wa([new zt(.5,.5),new zt(-.5,.5),new zt(-.5,-.5),new zt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let l=0,h=t.length;l<h;l++){let u=t[l];a(u)}this.setAttribute("position",new Sn(s,3)),this.setAttribute("uv",new Sn(r,2)),this.computeVertexNormals();function a(l){let h=[],u=e.curveSegments!==void 0?e.curveSegments:12,d=e.steps!==void 0?e.steps:1,v=e.depth!==void 0?e.depth:1,g=e.bevelEnabled!==void 0?e.bevelEnabled:!0,S=e.bevelThickness!==void 0?e.bevelThickness:.2,w=e.bevelSize!==void 0?e.bevelSize:S-.1,L=e.bevelOffset!==void 0?e.bevelOffset:0,_=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,z=e.UVGenerator!==void 0?e.UVGenerator:Gx,$,I=!1,T,O,W,A;if(m){$=m.getSpacedPoints(d),I=!0,g=!1;let nt=m.isCatmullRomCurve3?m.closed:!1;T=m.computeFrenetFrames(d,nt),O=new Z,W=new Z,A=new Z}g||(_=0,S=0,w=0,L=0);let F=l.extractPoints(u),G=F.shape,X=F.holes;if(!Mr.isClockWise(G)){G=G.reverse();for(let nt=0,Rt=X.length;nt<Rt;nt++){let V=X[nt];Mr.isClockWise(V)&&(X[nt]=V.reverse())}}function ht(nt){let V=10000000000000001e-36,Pt=nt[0];for(let Bt=1;Bt<=nt.length;Bt++){let ce=Bt%nt.length,fe=nt[ce],de=fe.x-Pt.x,Te=fe.y-Pt.y,Y=de*de+Te*Te,Fe=Math.max(Math.abs(fe.x),Math.abs(fe.y),Math.abs(Pt.x),Math.abs(Pt.y)),De=V*Fe*Fe;if(Y<=De){nt.splice(ce,1),Bt--;continue}Pt=fe}}ht(G),X.forEach(ht);let j=X.length,et=G;for(let nt=0;nt<j;nt++){let Rt=X[nt];G=G.concat(Rt)}function pt(nt,Rt,V){return Rt||be("ExtrudeGeometry: vec does not exist"),nt.clone().addScaledVector(Rt,V)}let gt=G.length;function At(nt,Rt,V){let Pt,Bt,ce,fe=nt.x-Rt.x,de=nt.y-Rt.y,Te=V.x-nt.x,Y=V.y-nt.y,Fe=fe*fe+de*de,De=fe*Y-de*Te;if(Math.abs(De)>Number.EPSILON){let U=Math.sqrt(Fe),E=Math.sqrt(Te*Te+Y*Y),it=Rt.x-de/U,lt=Rt.y+fe/U,xt=V.x-Y/E,Lt=V.y+Te/E,kt=((xt-it)*Y-(Lt-lt)*Te)/(fe*Y-de*Te);Pt=it+fe*kt-nt.x,Bt=lt+de*kt-nt.y;let mt=Pt*Pt+Bt*Bt;if(mt<=2)return new zt(Pt,Bt);ce=Math.sqrt(mt/2)}else{let U=!1;fe>Number.EPSILON?Te>Number.EPSILON&&(U=!0):fe<-Number.EPSILON?Te<-Number.EPSILON&&(U=!0):Math.sign(de)===Math.sign(Y)&&(U=!0),U?(Pt=-de,Bt=fe,ce=Math.sqrt(Fe)):(Pt=fe,Bt=de,ce=Math.sqrt(Fe/2))}return new zt(Pt/ce,Bt/ce)}let _t=[];for(let nt=0,Rt=et.length,V=Rt-1,Pt=nt+1;nt<Rt;nt++,V++,Pt++)V===Rt&&(V=0),Pt===Rt&&(Pt=0),_t[nt]=At(et[nt],et[V],et[Pt]);let wt=[],bt,Wt=_t.concat();for(let nt=0,Rt=j;nt<Rt;nt++){let V=X[nt];bt=[];for(let Pt=0,Bt=V.length,ce=Bt-1,fe=Pt+1;Pt<Bt;Pt++,ce++,fe++)ce===Bt&&(ce=0),fe===Bt&&(fe=0),bt[Pt]=At(V[Pt],V[ce],V[fe]);wt.push(bt),Wt=Wt.concat(bt)}let te;if(_===0)te=Mr.triangulateShape(et,X);else{let nt=[],Rt=[];for(let V=0;V<_;V++){let Pt=V/_,Bt=S*Math.cos(Pt*Math.PI/2),ce=w*Math.sin(Pt*Math.PI/2)+L;for(let fe=0,de=et.length;fe<de;fe++){let Te=pt(et[fe],_t[fe],ce);Ut(Te.x,Te.y,-Bt),Pt===0&&nt.push(Te)}for(let fe=0,de=j;fe<de;fe++){let Te=X[fe];bt=wt[fe];let Y=[];for(let Fe=0,De=Te.length;Fe<De;Fe++){let U=pt(Te[Fe],bt[Fe],ce);Ut(U.x,U.y,-Bt),Pt===0&&Y.push(U)}Pt===0&&Rt.push(Y)}}te=Mr.triangulateShape(nt,Rt)}let Ye=te.length,Le=w+L;for(let nt=0;nt<gt;nt++){let Rt=g?pt(G[nt],Wt[nt],Le):G[nt];I?(W.copy(T.normals[0]).multiplyScalar(Rt.x),O.copy(T.binormals[0]).multiplyScalar(Rt.y),A.copy($[0]).add(W).add(O),Ut(A.x,A.y,A.z)):Ut(Rt.x,Rt.y,0)}for(let nt=1;nt<=d;nt++)for(let Rt=0;Rt<gt;Rt++){let V=g?pt(G[Rt],Wt[Rt],Le):G[Rt];I?(W.copy(T.normals[nt]).multiplyScalar(V.x),O.copy(T.binormals[nt]).multiplyScalar(V.y),A.copy($[nt]).add(W).add(O),Ut(A.x,A.y,A.z)):Ut(V.x,V.y,v/d*nt)}for(let nt=_-1;nt>=0;nt--){let Rt=nt/_,V=S*Math.cos(Rt*Math.PI/2),Pt=w*Math.sin(Rt*Math.PI/2)+L;for(let Bt=0,ce=et.length;Bt<ce;Bt++){let fe=pt(et[Bt],_t[Bt],Pt);Ut(fe.x,fe.y,v+V)}for(let Bt=0,ce=X.length;Bt<ce;Bt++){let fe=X[Bt];bt=wt[Bt];for(let de=0,Te=fe.length;de<Te;de++){let Y=pt(fe[de],bt[de],Pt);I?Ut(Y.x,Y.y+$[d-1].y,$[d-1].x+V):Ut(Y.x,Y.y,v+V)}}}Ve(),vt();function Ve(){let nt=s.length/3;if(g){let Rt=0,V=gt*Rt;for(let Pt=0;Pt<Ye;Pt++){let Bt=te[Pt];he(Bt[2]+V,Bt[1]+V,Bt[0]+V)}Rt=d+_*2,V=gt*Rt;for(let Pt=0;Pt<Ye;Pt++){let Bt=te[Pt];he(Bt[0]+V,Bt[1]+V,Bt[2]+V)}}else{for(let Rt=0;Rt<Ye;Rt++){let V=te[Rt];he(V[2],V[1],V[0])}for(let Rt=0;Rt<Ye;Rt++){let V=te[Rt];he(V[0]+gt*d,V[1]+gt*d,V[2]+gt*d)}}n.addGroup(nt,s.length/3-nt,0)}function vt(){let nt=s.length/3,Rt=0;yt(et,Rt),Rt+=et.length;for(let V=0,Pt=X.length;V<Pt;V++){let Bt=X[V];yt(Bt,Rt),Rt+=Bt.length}n.addGroup(nt,s.length/3-nt,1)}function yt(nt,Rt){let V=nt.length;for(;--V>=0;){let Pt=V,Bt=V-1;Bt<0&&(Bt=nt.length-1);for(let ce=0,fe=d+_*2;ce<fe;ce++){let de=gt*ce,Te=gt*(ce+1),Y=Rt+Pt+de,Fe=Rt+Bt+de,De=Rt+Bt+Te,U=Rt+Pt+Te;jt(Y,Fe,De,U)}}}function Ut(nt,Rt,V){h.push(nt),h.push(Rt),h.push(V)}function he(nt,Rt,V){ge(nt),ge(Rt),ge(V);let Pt=s.length/3,Bt=z.generateTopUV(n,s,Pt-3,Pt-2,Pt-1);ee(Bt[0]),ee(Bt[1]),ee(Bt[2])}function jt(nt,Rt,V,Pt){ge(nt),ge(Rt),ge(Pt),ge(Rt),ge(V),ge(Pt);let Bt=s.length/3,ce=z.generateSideWallUV(n,s,Bt-6,Bt-3,Bt-2,Bt-1);ee(ce[0]),ee(ce[1]),ee(ce[3]),ee(ce[1]),ee(ce[2]),ee(ce[3])}function ge(nt){s.push(h[nt*3+0]),s.push(h[nt*3+1]),s.push(h[nt*3+2])}function ee(nt){r.push(nt.x),r.push(nt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Wx(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let l=e[t.shapes[r]];n.push(l)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Ud[s.type]().fromJSON(s)),new i(n,t.options)}},Gx={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],l=t[n*3],h=t[n*3+1],u=t[s*3],d=t[s*3+1];return[new zt(r,a),new zt(l,h),new zt(u,d)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],l=t[e*3+1],h=t[e*3+2],u=t[n*3],d=t[n*3+1],v=t[n*3+2],g=t[s*3],S=t[s*3+1],w=t[s*3+2],L=t[r*3],_=t[r*3+1],m=t[r*3+2];return Math.abs(l-d)<Math.abs(a-u)?[new zt(a,1-h),new zt(u,1-v),new zt(g,1-w),new zt(L,1-m)]:[new zt(l,1-h),new zt(d,1-v),new zt(S,1-w),new zt(_,1-m)]}};function Wx(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Zo=class i extends Mn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,l=Math.floor(n),h=Math.floor(s),u=l+1,d=h+1,v=t/l,g=e/h,S=[],w=[],L=[],_=[];for(let m=0;m<d;m++){let z=m*g-a;for(let $=0;$<u;$++){let I=$*v-r;w.push(I,-z,0),L.push(0,0,1),_.push($/l),_.push(1-m/h)}}for(let m=0;m<h;m++)for(let z=0;z<l;z++){let $=z+u*m,I=z+u*(m+1),T=z+1+u*(m+1),O=z+1+u*m;S.push($,I,O),S.push(I,T,O)}this.setIndex(S),this.setAttribute("position",new Sn(w,3)),this.setAttribute("normal",new Sn(L,3)),this.setAttribute("uv",new Sn(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Jo=class extends Mn{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],n=new Set,s=new Z,r=new Z;if(t.index!==null){let a=t.attributes.position,l=t.index,h=t.groups;h.length===0&&(h=[{start:0,count:l.count,materialIndex:0}]);for(let u=0,d=h.length;u<d;++u){let v=h[u],g=v.start,S=v.count;for(let w=g,L=g+S;w<L;w+=3)for(let _=0;_<3;_++){let m=l.getX(w+_),z=l.getX(w+(_+1)%3);s.fromBufferAttribute(a,m),r.fromBufferAttribute(a,z),Lm(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{let a=t.attributes.position;for(let l=0,h=a.count/3;l<h;l++)for(let u=0;u<3;u++){let d=3*l+u,v=3*l+(u+1)%3;s.fromBufferAttribute(a,d),r.fromBufferAttribute(a,v),Lm(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new Sn(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function Lm(i,t,e){let n=`${i.x},${i.y},${i.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${i.x},${i.y},${i.z}`;return e.has(n)===!0||e.has(s)===!0?!1:(e.add(n),e.add(s),!0)}function Lr(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Dm(s))s.isRenderTargetTexture?(ye("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Dm(s[0])){let r=[];for(let a=0,l=s.length;a<l;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Qn(i){let t={};for(let e=0;e<i.length;e++){let n=Lr(i[e]);for(let s in n)t[s]=n[s]}return t}function Dm(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Xx(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function mf(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Xe.workingColorSpace}var ml={clone:Lr,merge:Qn},qx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,kn=class extends as{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qx,this.fragmentShader=Yx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Lr(t.uniforms),this.uniformsGroups=Xx(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new xe().setHex(s.value);break;case"v2":this.uniforms[n].value=new zt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new Z().fromArray(s.value);break;case"v4":this.uniforms[n].value=new an().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Re().fromArray(s.value);break;case"m4":this.uniforms[n].value=new qe().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},jc=class extends kn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var jo=class extends as{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=tu,this.normalScale=new zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Is,this.combine=fh,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Kc=class extends as{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=d0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Qc=class extends as{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function la(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Ad(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Ys=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let l=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===l)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let l=e[1];t<l&&(n=2,r=l);for(let h=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===h)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let l=n+a>>>1;t<e[l]?a=l:n=l+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},th=class extends Ys{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Pd,endingEnd:Pd}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,l=s[r],h=s[a];if(l===void 0)switch(this.getSettings_().endingStart){case Ld:r=t,l=2*e-n;break;case Dd:r=s.length-2,l=e+s[r]-s[r+1];break;default:r=t,l=n}if(h===void 0)switch(this.getSettings_().endingEnd){case Ld:a=t,h=2*n-e;break;case Dd:a=1,h=n+s[1]-s[0];break;default:a=t-1,h=e}let u=(n-e)*.5,d=this.valueSize;this._weightPrev=u/(e-l),this._weightNext=u/(h-n),this._offsetPrev=r*d,this._offsetNext=a*d}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,h=t*l,u=h-l,d=this._offsetPrev,v=this._offsetNext,g=this._weightPrev,S=this._weightNext,w=(n-e)/(s-e),L=w*w,_=L*w,m=-g*_+2*g*L-g*w,z=(1+g)*_+(-1.5-2*g)*L+(-.5+g)*w+1,$=(-1-S)*_+(1.5+S)*L+.5*w,I=S*_-S*L;for(let T=0;T!==l;++T)r[T]=m*a[d+T]+z*a[u+T]+$*a[h+T]+I*a[v+T];return r}},eh=class extends Ys{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,h=t*l,u=h-l,d=(n-e)/(s-e),v=1-d;for(let g=0;g!==l;++g)r[g]=a[u+g]*v+a[h+g]*d;return r}},nh=class extends Ys{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},ih=class extends Ys{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,h=t*l,u=h-l,d=this.inTangents,v=this.outTangents;if(!d||!v){let w=(n-e)/(s-e),L=1-w;for(let _=0;_!==l;++_)r[_]=a[u+_]*L+a[h+_]*w;return r}let g=l*2,S=t-1;for(let w=0;w!==l;++w){let L=a[u+w],_=a[h+w],m=S*g+w*2,z=v[m],$=v[m+1],I=t*g+w*2,T=d[I],O=d[I+1],W=Jx(n,e,z,T,s);r[w]=I0(W,L,$,O,_)}return r}};function I0(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Zx(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Jx(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let l=I0(r,t,e,n,s)-i;if(Math.abs(l)<1e-10)break;let h=Zx(r,t,e,n,s);if(Math.abs(h)<1e-10)break;r=Math.max(0,Math.min(1,r-l/h))}return r}var Mi=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=la(e,this.TimeBufferType),this.values=la(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:la(t.times,Array),values:la(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Ad(t.settings)&&(n.settings={inTangents:la(t.settings.inTangents,Array),outTangents:la(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new nh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new eh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new th(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new ih(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Eo:e=this.InterpolantFactoryMethodDiscrete;break;case Uc:e=this.InterpolantFactoryMethodLinear;break;case wc:e=this.InterpolantFactoryMethodSmooth;break;case Id:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ye("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Eo;case this.InterpolantFactoryMethodLinear:return Uc;case this.InterpolantFactoryMethodSmooth:return wc;case this.InterpolantFactoryMethodBezier:return Id}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Ad(this.settings)&&(Nm(this.settings.inTangents,t),Nm(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let l=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*l,a*l)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(be("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(be("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let l=0;l!==r;l++){let h=n[l];if(typeof h=="number"&&isNaN(h)){be("KeyframeTrack: Time is not a valid number.",this,l,h),t=!1;break}if(a!==null&&a>h){be("KeyframeTrack: Out of order keys.",this,l,h,a),t=!1;break}a=h}if(s!==void 0&&B_(s))for(let l=0,h=s.length;l!==h;++l){let u=s[l];if(isNaN(u)){be("KeyframeTrack: Value is not a valid number.",this,l,u),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===wc,r=t.length-1,a=1;for(let l=1;l<r;++l){let h=!1,u=t[l],d=t[l+1];if(u!==d&&(l!==1||u!==t[0]))if(s)h=!0;else{let v=l*n,g=v-n,S=v+n;for(let w=0;w!==n;++w){let L=e[v+w];if(L!==e[g+w]||L!==e[S+w]){h=!0;break}}}if(h){if(l!==a){t[a]=t[l];let v=l*n,g=a*n;for(let S=0;S!==n;++S)e[g+S]=e[v+S]}++a}}if(r>0){t[a]=t[r];for(let l=r*n,h=a*n,u=0;u!==n;++u)e[h+u]=e[l+u];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Ad(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Nm(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Mi.prototype.ValueTypeName="";Mi.prototype.TimeBufferType=Float32Array;Mi.prototype.ValueBufferType=Float32Array;Mi.prototype.DefaultInterpolation=Uc;var Zs=class extends Mi{constructor(t,e,n){super(t,e,n)}};Zs.prototype.ValueTypeName="bool";Zs.prototype.ValueBufferType=Array;Zs.prototype.DefaultInterpolation=Eo;Zs.prototype.InterpolantFactoryMethodLinear=void 0;Zs.prototype.InterpolantFactoryMethodSmooth=void 0;var sh=class extends Mi{constructor(t,e,n,s){super(t,e,n,s)}};sh.prototype.ValueTypeName="color";var rh=class extends Mi{constructor(t,e,n,s){super(t,e,n,s)}};rh.prototype.ValueTypeName="number";var ah=class extends Ys{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,h=(n-e)/(s-e),u=t*l;for(let d=u+l;u!==d;u+=4)rs.slerpFlat(r,0,a,u-l,a,u,h);return r}},Ko=class extends Mi{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new ah(this.times,this.values,this.getValueSize(),t)}};Ko.prototype.ValueTypeName="quaternion";Ko.prototype.InterpolantFactoryMethodSmooth=void 0;var Js=class extends Mi{constructor(t,e,n){super(t,e,n)}};Js.prototype.ValueTypeName="string";Js.prototype.ValueBufferType=Array;Js.prototype.DefaultInterpolation=Eo;Js.prototype.InterpolantFactoryMethodLinear=void 0;Js.prototype.InterpolantFactoryMethodSmooth=void 0;var oh=class extends Mi{constructor(t,e,n,s){super(t,e,n,s)}};oh.prototype.ValueTypeName="vector";var lh=class{constructor(t,e,n){let s=this,r=!1,a=0,l=0,h,u=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(d){l++,r===!1&&s.onStart!==void 0&&s.onStart(d,a,l),r=!0},this.itemEnd=function(d){a++,s.onProgress!==void 0&&s.onProgress(d,a,l),a===l&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),h?h(d):d},this.setURLModifier=function(d){return h=d,this},this.addHandler=function(d,v){return u.push(d,v),this},this.removeHandler=function(d){let v=u.indexOf(d);return v!==-1&&u.splice(v,2),this},this.getHandler=function(d){for(let v=0,g=u.length;v<g;v+=2){let S=u[v],w=u[v+1];if(S.global&&(S.lastIndex=0),S.test(d))return w}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},P0=new lh,ch=class{constructor(t){this.manager=t!==void 0?t:P0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};ch.DEFAULT_MATERIAL_NAME="__DEFAULT";var Qo=class extends On{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new xe(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},tl=class extends Qo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(On.DEFAULT_UP),this.updateMatrix(),this.groundColor=new xe(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Cd=new qe,Um=new Z,Fm=new Z,hh=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new zt(512,512),this.mapType=gi,this.map=null,this.mapPass=null,this.matrix=new qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Sa,this._frameExtents=new zt(1,1),this._viewportCount=1,this._viewports=[new an(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Um.setFromMatrixPosition(t.matrixWorld),e.position.copy(Um),Fm.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Fm),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Cd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Cd,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,l=s?s.w/r.y:1,h=s?s.x/r.x:0,u=s?s.y/r.y:0;t.coordinateSystem===ma||t.reversedDepth?e.set(.5*a,0,0,.5*a+h,0,.5*l,0,.5*l+u,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+h,0,.5*l,0,.5*l+u,0,0,.5,.5,0,0,0,1),e.multiply(Cd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Sc=new Z,Mc=new rs,ts=new Z,el=class extends On{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qe,this.projectionMatrix=new qe,this.projectionMatrixInverse=new qe,this.coordinateSystem=Vi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Sc,Mc,ts),ts.x===1&&ts.y===1&&ts.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Sc,Mc,ts.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Sc,Mc,ts),ts.x===1&&ts.y===1&&ts.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Sc,Mc,ts.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ws=new Z,Om=new zt,Bm=new zt,Kn=class extends el{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=_a*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(So*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return _a*2*Math.atan(Math.tan(So*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ws.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ws.x,Ws.y).multiplyScalar(-t/Ws.z),Ws.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ws.x,Ws.y).multiplyScalar(-t/Ws.z)}getViewSize(t,e){return this.getViewBounds(t,Om,Bm),e.subVectors(Bm,Om)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(So*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let h=a.fullWidth,u=a.fullHeight;r+=a.offsetX*s/h,e-=a.offsetY*n/u,s*=a.width/h,n*=a.height/u}let l=this.filmOffset;l!==0&&(r+=t*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Ta=class extends el{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,l=s+e,h=s-e;if(this.view!==null&&this.view.enabled){let u=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,a=r+u*this.view.width,l-=d*this.view.offsetY,h=l-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,l,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},kd=class extends hh{constructor(){super(new Ta(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},nl=class extends Qo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(On.DEFAULT_UP),this.updateMatrix(),this.target=new On,this.shadow=new kd}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var il=class extends Mn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var ca=-90,ha=1,uh=class extends On{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Kn(ca,ha,t,e);s.layers=this.layers,this.add(s);let r=new Kn(ca,ha,t,e);r.layers=this.layers,this.add(r);let a=new Kn(ca,ha,t,e);a.layers=this.layers,this.add(a);let l=new Kn(ca,ha,t,e);l.layers=this.layers,this.add(l);let h=new Kn(ca,ha,t,e);h.layers=this.layers,this.add(h);let u=new Kn(ca,ha,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,l,h]=e;for(let u of e)this.remove(u);if(t===Vi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(t===ma)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,l,h,u,d]=this.children,v=t.getRenderTarget(),g=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),w=t.xr.enabled;t.xr.enabled=!1;let L=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let _=!1;t.isWebGLRenderer===!0?_=t.state.buffers.depth.getReversed():_=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,3,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(n,4,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),n.texture.generateMipmaps=L,t.setRenderTarget(n,5,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,d),t.setRenderTarget(v,g,S),t.xr.enabled=w,n.texture.needsPMREMUpdate=!0}},dh=class extends Kn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var gf="\\[\\]\\.:\\/",jx=new RegExp("["+gf+"]","g"),_f="[^"+gf+"]",Kx="[^"+gf.replace("\\.","")+"]",Qx=/((?:WC+[\/:])*)/.source.replace("WC",_f),tv=/(WCOD+)?/.source.replace("WCOD",Kx),ev=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",_f),nv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",_f),iv=new RegExp("^"+Qx+tv+ev+nv+"$"),sv=["material","materials","bones","map"],zd=class{constructor(t,e,n){let s=n||gn.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},gn=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(jx,"")}static parseTrackName(t){let e=iv.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);sv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let l=r[a];if(l.name===e||l.uuid===e)return l;let h=n(l.children);if(h)return h}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){ye("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=e.objectIndex;switch(n){case"materials":if(!t.material){be("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){be("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){be("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===u){u=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){be("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){be("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){be("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(u!==void 0){if(t[u]===void 0){be("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}let a=t[s];if(a===void 0){let u=e.nodeName;be("PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",t);return}let l=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?l=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let h=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){be("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){be("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}h=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(h=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(h=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[h],this.setValue=this.SetterByBindingTypeAndVersioning[h][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};gn.Composite=zd;gn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};gn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};gn.prototype.GetterByBindingType=[gn.prototype._getValue_direct,gn.prototype._getValue_array,gn.prototype._getValue_arrayElement,gn.prototype._getValue_toArray];gn.prototype.SetterByBindingTypeAndVersioning=[[gn.prototype._setValue_direct,gn.prototype._setValue_direct_setNeedsUpdate,gn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[gn.prototype._setValue_array,gn.prototype._setValue_array_setNeedsUpdate,gn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[gn.prototype._setValue_arrayElement,gn.prototype._setValue_arrayElement_setNeedsUpdate,gn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[gn.prototype._setValue_fromArray,gn.prototype._setValue_fromArray_setNeedsUpdate,gn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var x1=new Float32Array(1);var js=class extends kc{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}};var km=new qe,sl=class{constructor(t,e,n=0,s=1/0){this.ray=new wr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new va,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):be("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return km.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(km),this}intersectObject(t,e=!0,n=[]){return $d(t,this,n,e),n.sort(zm),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)$d(t[s],this,n,e);return n.sort(zm),n}};function zm(i,t){return i.distance-t.distance}function $d(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,l=r.length;a<l;a++)$d(r[a],t,e,!0)}}var Vd=class i{static{i.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};var $m=new Z,bc=new Z,ua=new Z,da=new Z,Rd=new Z,rv=new Z,av=new Z,rl=class{constructor(t=new Z,e=new Z){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){$m.subVectors(t,this.start),bc.subVectors(this.end,this.start);let n=bc.dot(bc);if(n===0)return 0;let r=bc.dot($m)/n;return e&&(r=Pe(r,0,1)),r}closestPointToPoint(t,e,n){let s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}distanceSqToLine3(t,e=rv,n=av){let s=10000000000000001e-32,r,a,l=this.start,h=t.start,u=this.end,d=t.end;ua.subVectors(u,l),da.subVectors(d,h),Rd.subVectors(l,h);let v=ua.dot(ua),g=da.dot(da),S=da.dot(Rd);if(v<=s&&g<=s)return e.copy(l),n.copy(h),e.sub(n),e.dot(e);if(v<=s)r=0,a=S/g,a=Pe(a,0,1);else{let w=ua.dot(Rd);if(g<=s)a=0,r=Pe(-w/v,0,1);else{let L=ua.dot(da),_=v*g-L*L;_!==0?r=Pe((L*S-w*g)/_,0,1):r=0,a=(L*r+S)/g,a<0?(a=0,r=Pe(-w/v,0,1)):a>1&&(a=1,r=Pe((L-w)/v,0,1))}}return e.copy(l).addScaledVector(ua,r),n.copy(h).addScaledVector(da,a),e.distanceToSquared(n)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};function xf(i,t,e,n){let s=ov(n);switch(e){case lf:return i*t;case yh:return i*t/s.components*s.byteLength;case Sh:return i*t/s.components*s.byteLength;case nr:return i*t*2/s.components*s.byteLength;case Mh:return i*t*2/s.components*s.byteLength;case cf:return i*t*3/s.components*s.byteLength;case Ri:return i*t*4/s.components*s.byteLength;case bh:return i*t*4/s.components*s.byteLength;case cl:case hl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ul:case dl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Eh:case Ah:return Math.max(i,16)*Math.max(t,8)/4;case wh:case Th:return Math.max(i,8)*Math.max(t,8)/2;case Ch:case Rh:case Ph:case Lh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ih:case fl:case Dh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Nh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Uh:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Fh:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Oh:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Bh:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case kh:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case zh:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case $h:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Vh:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Hh:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Gh:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Wh:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Xh:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case qh:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Yh:case Zh:case Jh:return Math.ceil(i/4)*Math.ceil(t/4)*16;case jh:case Kh:return Math.ceil(i/4)*Math.ceil(t/4)*8;case pl:case Qh:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ov(i){switch(i){case gi:case sf:return{byteLength:1,components:1};case Ra:case rf:case qi:return{byteLength:2,components:1};case xh:case vh:return{byteLength:2,components:4};case Xi:case _h:case Ci:return{byteLength:4,components:1};case af:case of:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?ye("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Q0(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function cv(i){let t=new WeakMap;function e(l,h){let u=l.array,d=l.usage,v=u.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,u,d),l.onUploadCallback();let S;if(u instanceof Float32Array)S=i.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)S=i.HALF_FLOAT;else if(u instanceof Uint16Array)l.isFloat16BufferAttribute?S=i.HALF_FLOAT:S=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)S=i.SHORT;else if(u instanceof Uint32Array)S=i.UNSIGNED_INT;else if(u instanceof Int32Array)S=i.INT;else if(u instanceof Int8Array)S=i.BYTE;else if(u instanceof Uint8Array)S=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)S=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:S,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:v}}function n(l,h,u){let d=h.array,v=h.updateRanges;if(i.bindBuffer(u,l),v.length===0)i.bufferSubData(u,0,d);else{v.sort((S,w)=>S.start-w.start);let g=0;for(let S=1;S<v.length;S++){let w=v[g],L=v[S];L.start<=w.start+w.count+1?w.count=Math.max(w.count,L.start+L.count-w.start):(++g,v[g]=L)}v.length=g+1;for(let S=0,w=v.length;S<w;S++){let L=v[S];i.bufferSubData(u,L.start*d.BYTES_PER_ELEMENT,d,L.start,L.count)}h.clearUpdateRanges()}h.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),t.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=t.get(l);h&&(i.deleteBuffer(h.buffer),t.delete(l))}function a(l,h){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){let d=t.get(l);(!d||d.version<l.version)&&t.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}let u=t.get(l);if(u===void 0)t.set(l,e(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,l,h),u.version=l.version}}return{get:s,remove:r,update:a}}var hv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,uv=`#ifdef USE_ALPHAHASH
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
#endif`,dv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gv=`#ifdef USE_AOMAP
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
#endif`,_v=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xv=`#ifdef USE_BATCHING
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
#endif`,vv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Sv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,bv=`#ifdef USE_IRIDESCENCE
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
#endif`,wv=`#ifdef USE_BUMPMAP
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
#endif`,Ev=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Tv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Av=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Rv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Iv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Pv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Lv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Dv=`#define PI 3.141592653589793
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
} // validated`,Nv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Uv=`vec3 transformedNormal = objectNormal;
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
#endif`,Fv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ov=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zv="gl_FragColor = linearToOutputTexel( gl_FragColor );",$v=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Vv=`#ifdef USE_ENVMAP
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
#endif`,Hv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Gv=`#ifdef USE_ENVMAP
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
#endif`,Wv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xv=`#ifdef USE_ENVMAP
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
#endif`,qv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jv=`#ifdef USE_GRADIENTMAP
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
}`,Kv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ty=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ey=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,ny=`#ifdef USE_ENVMAP
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
#endif`,iy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ry=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ay=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,oy=`PhysicalMaterial material;
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
#endif`,ly=`uniform sampler2D dfgLUT;
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
}`,cy=`
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
#endif`,hy=`#if defined( RE_IndirectDiffuse )
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
#endif`,uy=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dy=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,fy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,py=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,my=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_y=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,yy=`#if defined( USE_POINTS_UV )
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
#endif`,Sy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,My=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,by=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ey=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ty=`#ifdef USE_MORPHTARGETS
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
#endif`,Ay=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ry=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Iy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Py=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ly=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Dy=`#ifdef USE_NORMALMAP
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
#endif`,Ny=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Uy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Fy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Oy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,By=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ky=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,zy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$y=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Yy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Zy=`float getShadowMask() {
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
}`,Jy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jy=`#ifdef USE_SKINNING
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
#endif`,Ky=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qy=`#ifdef USE_SKINNING
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
#endif`,tS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,eS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,iS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,sS=`#ifdef USE_TRANSMISSION
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
#endif`,rS=`#ifdef USE_TRANSMISSION
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
#endif`,aS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,oS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,hS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,uS=`uniform sampler2D t2D;
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
}`,dS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,pS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gS=`#include <common>
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
}`,_S=`#if DEPTH_PACKING == 3200
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
}`,xS=`#define DISTANCE
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
}`,vS=`#define DISTANCE
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
}`,yS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,SS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MS=`uniform float scale;
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
}`,bS=`uniform vec3 diffuse;
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
}`,wS=`#include <common>
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
}`,ES=`uniform vec3 diffuse;
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
}`,TS=`#define LAMBERT
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
}`,AS=`#define LAMBERT
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
}`,CS=`#define MATCAP
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
}`,RS=`#define MATCAP
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
}`,IS=`#define NORMAL
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
}`,PS=`#define NORMAL
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
}`,LS=`#define PHONG
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
}`,DS=`#define PHONG
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
}`,NS=`#define STANDARD
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
}`,US=`#define STANDARD
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
}`,FS=`#define TOON
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
}`,OS=`#define TOON
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
}`,BS=`uniform float size;
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
}`,kS=`uniform vec3 diffuse;
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
}`,zS=`#include <common>
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
}`,$S=`uniform vec3 color;
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
}`,VS=`uniform float rotation;
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
}`,HS=`uniform vec3 diffuse;
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
}`,Be={alphahash_fragment:hv,alphahash_pars_fragment:uv,alphamap_fragment:dv,alphamap_pars_fragment:fv,alphatest_fragment:pv,alphatest_pars_fragment:mv,aomap_fragment:gv,aomap_pars_fragment:_v,batching_pars_vertex:xv,batching_vertex:vv,begin_vertex:yv,beginnormal_vertex:Sv,bsdfs:Mv,iridescence_fragment:bv,bumpmap_pars_fragment:wv,clipping_planes_fragment:Ev,clipping_planes_pars_fragment:Tv,clipping_planes_pars_vertex:Av,clipping_planes_vertex:Cv,color_fragment:Rv,color_pars_fragment:Iv,color_pars_vertex:Pv,color_vertex:Lv,common:Dv,cube_uv_reflection_fragment:Nv,defaultnormal_vertex:Uv,displacementmap_pars_vertex:Fv,displacementmap_vertex:Ov,emissivemap_fragment:Bv,emissivemap_pars_fragment:kv,colorspace_fragment:zv,colorspace_pars_fragment:$v,envmap_fragment:Vv,envmap_common_pars_fragment:Hv,envmap_pars_fragment:Gv,envmap_pars_vertex:Wv,envmap_physical_pars_fragment:ny,envmap_vertex:Xv,fog_vertex:qv,fog_pars_vertex:Yv,fog_fragment:Zv,fog_pars_fragment:Jv,gradientmap_pars_fragment:jv,lightmap_pars_fragment:Kv,lights_lambert_fragment:Qv,lights_lambert_pars_fragment:ty,lights_pars_begin:ey,lights_toon_fragment:iy,lights_toon_pars_fragment:sy,lights_phong_fragment:ry,lights_phong_pars_fragment:ay,lights_physical_fragment:oy,lights_physical_pars_fragment:ly,lights_fragment_begin:cy,lights_fragment_maps:hy,lights_fragment_end:uy,lightprobes_pars_fragment:dy,logdepthbuf_fragment:fy,logdepthbuf_pars_fragment:py,logdepthbuf_pars_vertex:my,logdepthbuf_vertex:gy,map_fragment:_y,map_pars_fragment:xy,map_particle_fragment:vy,map_particle_pars_fragment:yy,metalnessmap_fragment:Sy,metalnessmap_pars_fragment:My,morphinstance_vertex:by,morphcolor_vertex:wy,morphnormal_vertex:Ey,morphtarget_pars_vertex:Ty,morphtarget_vertex:Ay,normal_fragment_begin:Cy,normal_fragment_maps:Ry,normal_pars_fragment:Iy,normal_pars_vertex:Py,normal_vertex:Ly,normalmap_pars_fragment:Dy,clearcoat_normal_fragment_begin:Ny,clearcoat_normal_fragment_maps:Uy,clearcoat_pars_fragment:Fy,iridescence_pars_fragment:Oy,opaque_fragment:By,packing:ky,premultiplied_alpha_fragment:zy,project_vertex:$y,dithering_fragment:Vy,dithering_pars_fragment:Hy,roughnessmap_fragment:Gy,roughnessmap_pars_fragment:Wy,shadowmap_pars_fragment:Xy,shadowmap_pars_vertex:qy,shadowmap_vertex:Yy,shadowmask_pars_fragment:Zy,skinbase_vertex:Jy,skinning_pars_vertex:jy,skinning_vertex:Ky,skinnormal_vertex:Qy,specularmap_fragment:tS,specularmap_pars_fragment:eS,tonemapping_fragment:nS,tonemapping_pars_fragment:iS,transmission_fragment:sS,transmission_pars_fragment:rS,uv_pars_fragment:aS,uv_pars_vertex:oS,uv_vertex:lS,worldpos_vertex:cS,background_vert:hS,background_frag:uS,backgroundCube_vert:dS,backgroundCube_frag:fS,cube_vert:pS,cube_frag:mS,depth_vert:gS,depth_frag:_S,distance_vert:xS,distance_frag:vS,equirect_vert:yS,equirect_frag:SS,linedashed_vert:MS,linedashed_frag:bS,meshbasic_vert:wS,meshbasic_frag:ES,meshlambert_vert:TS,meshlambert_frag:AS,meshmatcap_vert:CS,meshmatcap_frag:RS,meshnormal_vert:IS,meshnormal_frag:PS,meshphong_vert:LS,meshphong_frag:DS,meshphysical_vert:NS,meshphysical_frag:US,meshtoon_vert:FS,meshtoon_frag:OS,points_vert:BS,points_frag:kS,shadow_vert:zS,shadow_frag:$S,sprite_vert:VS,sprite_frag:HS},Gt={common:{diffuse:{value:new xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Re},alphaMap:{value:null},alphaMapTransform:{value:new Re},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Re}},envmap:{envMap:{value:null},envMapRotation:{value:new Re},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Re}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Re}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Re},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Re},normalScale:{value:new zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Re},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Re}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Re}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Re}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Z},probesMax:{value:new Z},probesResolution:{value:new Z}},points:{diffuse:{value:new xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Re},alphaTest:{value:0},uvTransform:{value:new Re}},sprite:{diffuse:{value:new xe(16777215)},opacity:{value:1},center:{value:new zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Re},alphaMap:{value:null},alphaMapTransform:{value:new Re},alphaTest:{value:0}}},ri={basic:{uniforms:Qn([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:Qn([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,Gt.lights,{emissive:{value:new xe(0)},envMapIntensity:{value:1}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:Qn([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,Gt.lights,{emissive:{value:new xe(0)},specular:{value:new xe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:Qn([Gt.common,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.roughnessmap,Gt.metalnessmap,Gt.fog,Gt.lights,{emissive:{value:new xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:Qn([Gt.common,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.gradientmap,Gt.fog,Gt.lights,{emissive:{value:new xe(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:Qn([Gt.common,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:Qn([Gt.points,Gt.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:Qn([Gt.common,Gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:Qn([Gt.common,Gt.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:Qn([Gt.common,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:Qn([Gt.sprite,Gt.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new Re},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Re}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distance:{uniforms:Qn([Gt.common,Gt.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distance_vert,fragmentShader:Be.distance_frag},shadow:{uniforms:Qn([Gt.lights,Gt.fog,{color:{value:new xe(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};ri.physical={uniforms:Qn([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Re},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Re},clearcoatNormalScale:{value:new zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Re},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Re},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Re},sheen:{value:0},sheenColor:{value:new xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Re},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Re},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Re},transmissionSamplerSize:{value:new zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Re},attenuationDistance:{value:0},attenuationColor:{value:new xe(0)},specularColor:{value:new xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Re},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Re},anisotropyVector:{value:new zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Re}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};var iu={r:0,b:0,g:0},GS=new qe,tg=new Re;tg.set(-1,0,0,0,1,0,0,0,1);function WS(i,t,e,n,s,r){let a=new xe(0),l=s===!0?0:1,h,u,d=null,v=0,g=null;function S(z){let $=z.isScene===!0?z.background:null;if($&&$.isTexture){let I=z.backgroundBlurriness>0;$=t.get($,I)}return $}function w(z){let $=!1,I=S(z);I===null?_(a,l):I&&I.isColor&&(_(I,1),$=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?e.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||$)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function L(z,$){let I=S($);I&&(I.isCubeTexture||I.mapping===ol)?(u===void 0&&(u=new Bn(new Ma(1,1,1),new kn({name:"BackgroundCubeMaterial",uniforms:Lr(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,O,W){this.matrixWorld.copyPosition(W.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),u.material.uniforms.envMap.value=I,u.material.uniforms.backgroundBlurriness.value=$.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=$.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(GS.makeRotationFromEuler($.backgroundRotation)).transpose(),I.isCubeTexture&&I.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(tg),u.material.toneMapped=Xe.getTransfer(I.colorSpace)!==rn,(d!==I||v!==I.version||g!==i.toneMapping)&&(u.material.needsUpdate=!0,d=I,v=I.version,g=i.toneMapping),u.layers.enableAll(),z.unshift(u,u.geometry,u.material,0,0,null)):I&&I.isTexture&&(h===void 0&&(h=new Bn(new Zo(2,2),new kn({name:"BackgroundMaterial",uniforms:Lr(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:Ks,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(h)),h.material.uniforms.t2D.value=I,h.material.uniforms.backgroundIntensity.value=$.backgroundIntensity,h.material.toneMapped=Xe.getTransfer(I.colorSpace)!==rn,I.matrixAutoUpdate===!0&&I.updateMatrix(),h.material.uniforms.uvTransform.value.copy(I.matrix),(d!==I||v!==I.version||g!==i.toneMapping)&&(h.material.needsUpdate=!0,d=I,v=I.version,g=i.toneMapping),h.layers.enableAll(),z.unshift(h,h.geometry,h.material,0,0,null))}function _(z,$){z.getRGB(iu,mf(i)),e.buffers.color.setClear(iu.r,iu.g,iu.b,$,r)}function m(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return a},setClearColor:function(z,$=1){a.set(z),l=$,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(z){l=z,_(a,l)},render:w,addToRenderList:L,dispose:m}}function XS(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=g(null),r=s,a=!1;function l(X,st,ht,j,et){let pt=!1,gt=v(X,j,ht,st);r!==gt&&(r=gt,u(r.object)),pt=S(X,j,ht,et),pt&&w(X,j,ht,et),et!==null&&t.update(et,i.ELEMENT_ARRAY_BUFFER),(pt||a)&&(a=!1,I(X,st,ht,j),et!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(et).buffer))}function h(){return i.createVertexArray()}function u(X){return i.bindVertexArray(X)}function d(X){return i.deleteVertexArray(X)}function v(X,st,ht,j){let et=j.wireframe===!0,pt=n[st.id];pt===void 0&&(pt={},n[st.id]=pt);let gt=X.isInstancedMesh===!0?X.id:0,At=pt[gt];At===void 0&&(At={},pt[gt]=At);let _t=At[ht.id];_t===void 0&&(_t={},At[ht.id]=_t);let wt=_t[et];return wt===void 0&&(wt=g(h()),_t[et]=wt),wt}function g(X){let st=[],ht=[],j=[];for(let et=0;et<e;et++)st[et]=0,ht[et]=0,j[et]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:st,enabledAttributes:ht,attributeDivisors:j,object:X,attributes:{},index:null}}function S(X,st,ht,j){let et=r.attributes,pt=st.attributes,gt=0,At=ht.getAttributes();for(let _t in At)if(At[_t].location>=0){let bt=et[_t],Wt=pt[_t];if(Wt===void 0&&(_t==="instanceMatrix"&&X.instanceMatrix&&(Wt=X.instanceMatrix),_t==="instanceColor"&&X.instanceColor&&(Wt=X.instanceColor)),bt===void 0||bt.attribute!==Wt||Wt&&bt.data!==Wt.data)return!0;gt++}return r.attributesNum!==gt||r.index!==j}function w(X,st,ht,j){let et={},pt=st.attributes,gt=0,At=ht.getAttributes();for(let _t in At)if(At[_t].location>=0){let bt=pt[_t];bt===void 0&&(_t==="instanceMatrix"&&X.instanceMatrix&&(bt=X.instanceMatrix),_t==="instanceColor"&&X.instanceColor&&(bt=X.instanceColor));let Wt={};Wt.attribute=bt,bt&&bt.data&&(Wt.data=bt.data),et[_t]=Wt,gt++}r.attributes=et,r.attributesNum=gt,r.index=j}function L(){let X=r.newAttributes;for(let st=0,ht=X.length;st<ht;st++)X[st]=0}function _(X){m(X,0)}function m(X,st){let ht=r.newAttributes,j=r.enabledAttributes,et=r.attributeDivisors;ht[X]=1,j[X]===0&&(i.enableVertexAttribArray(X),j[X]=1),et[X]!==st&&(i.vertexAttribDivisor(X,st),et[X]=st)}function z(){let X=r.newAttributes,st=r.enabledAttributes;for(let ht=0,j=st.length;ht<j;ht++)st[ht]!==X[ht]&&(i.disableVertexAttribArray(ht),st[ht]=0)}function $(X,st,ht,j,et,pt,gt){gt===!0?i.vertexAttribIPointer(X,st,ht,et,pt):i.vertexAttribPointer(X,st,ht,j,et,pt)}function I(X,st,ht,j){L();let et=j.attributes,pt=ht.getAttributes(),gt=st.defaultAttributeValues;for(let At in pt){let _t=pt[At];if(_t.location>=0){let wt=et[At];if(wt===void 0&&(At==="instanceMatrix"&&X.instanceMatrix&&(wt=X.instanceMatrix),At==="instanceColor"&&X.instanceColor&&(wt=X.instanceColor)),wt!==void 0){let bt=wt.normalized,Wt=wt.itemSize,te=t.get(wt);if(te===void 0)continue;let Ye=te.buffer,Le=te.type,Ve=te.bytesPerElement,vt=Le===i.INT||Le===i.UNSIGNED_INT||wt.gpuType===_h;if(wt.isInterleavedBufferAttribute){let yt=wt.data,Ut=yt.stride,he=wt.offset;if(yt.isInstancedInterleavedBuffer){for(let jt=0;jt<_t.locationSize;jt++)m(_t.location+jt,yt.meshPerAttribute);X.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let jt=0;jt<_t.locationSize;jt++)_(_t.location+jt);i.bindBuffer(i.ARRAY_BUFFER,Ye);for(let jt=0;jt<_t.locationSize;jt++)$(_t.location+jt,Wt/_t.locationSize,Le,bt,Ut*Ve,(he+Wt/_t.locationSize*jt)*Ve,vt)}else{if(wt.isInstancedBufferAttribute){for(let yt=0;yt<_t.locationSize;yt++)m(_t.location+yt,wt.meshPerAttribute);X.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=wt.meshPerAttribute*wt.count)}else for(let yt=0;yt<_t.locationSize;yt++)_(_t.location+yt);i.bindBuffer(i.ARRAY_BUFFER,Ye);for(let yt=0;yt<_t.locationSize;yt++)$(_t.location+yt,Wt/_t.locationSize,Le,bt,Wt*Ve,Wt/_t.locationSize*yt*Ve,vt)}}else if(gt!==void 0){let bt=gt[At];if(bt!==void 0)switch(bt.length){case 2:i.vertexAttrib2fv(_t.location,bt);break;case 3:i.vertexAttrib3fv(_t.location,bt);break;case 4:i.vertexAttrib4fv(_t.location,bt);break;default:i.vertexAttrib1fv(_t.location,bt)}}}}z()}function T(){F();for(let X in n){let st=n[X];for(let ht in st){let j=st[ht];for(let et in j){let pt=j[et];for(let gt in pt)d(pt[gt].object),delete pt[gt];delete j[et]}}delete n[X]}}function O(X){if(n[X.id]===void 0)return;let st=n[X.id];for(let ht in st){let j=st[ht];for(let et in j){let pt=j[et];for(let gt in pt)d(pt[gt].object),delete pt[gt];delete j[et]}}delete n[X.id]}function W(X){for(let st in n){let ht=n[st];for(let j in ht){let et=ht[j];if(et[X.id]===void 0)continue;let pt=et[X.id];for(let gt in pt)d(pt[gt].object),delete pt[gt];delete et[X.id]}}}function A(X){for(let st in n){let ht=n[st],j=X.isInstancedMesh===!0?X.id:0,et=ht[j];if(et!==void 0){for(let pt in et){let gt=et[pt];for(let At in gt)d(gt[At].object),delete gt[At];delete et[pt]}delete ht[j],Object.keys(ht).length===0&&delete n[st]}}}function F(){G(),a=!0,r!==s&&(r=s,u(r.object))}function G(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:l,reset:F,resetDefaultState:G,dispose:T,releaseStatesOfGeometry:O,releaseStatesOfObject:A,releaseStatesOfProgram:W,initAttributes:L,enableAttribute:_,disableUnusedAttributes:z}}function qS(i,t,e){let n;function s(h){n=h}function r(h,u){i.drawArrays(n,h,u),e.update(u,n,1)}function a(h,u,d){d!==0&&(i.drawArraysInstanced(n,h,u,d),e.update(u,n,d))}function l(h,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,u,0,d);let g=0;for(let S=0;S<d;S++)g+=u[S];e.update(g,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=l}function YS(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let W=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(W.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(W){return!(W!==Ri&&n.convert(W)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(W){let A=W===qi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(W!==gi&&W!==Ci&&!A&&n.convert(W)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function h(W){if(W==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";W="mediump"}return W==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=e.precision!==void 0?e.precision:"highp",d=h(u);d!==u&&(ye("WebGLRenderer:",u,"not supported, using",d,"instead."),u=d);let v=e.logarithmicDepthBuffer===!0,g=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&g===!1&&ye("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let S=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),w=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),L=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),z=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),$=i.getParameter(i.MAX_VARYING_VECTORS),I=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),O=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:h,textureFormatReadable:a,textureTypeReadable:l,precision:u,logarithmicDepthBuffer:v,reversedDepthBuffer:g,maxTextures:S,maxVertexTextures:w,maxTextureSize:L,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:z,maxVaryings:$,maxFragmentUniforms:I,maxSamples:T,samples:O}}function ZS(i){let t=this,e=null,n=0,s=!1,r=!1,a=new zi,l=new Re,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){let S=v.length!==0||g||n!==0||s;return s=g,n=v.length,S},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(v,g){e=d(v,g,0)},this.setState=function(v,g,S){let w=v.clippingPlanes,L=v.clipIntersection,_=v.clipShadows,m=i.get(v);if(!s||w===null||w.length===0||r&&!_)r?d(null):u();else{let z=r?0:n,$=z*4,I=m.clippingState||null;h.value=I,I=d(w,g,$,S);for(let T=0;T!==$;++T)I[T]=e[T];m.clippingState=I,this.numIntersection=L?this.numPlanes:0,this.numPlanes+=z}};function u(){h.value!==e&&(h.value=e,h.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(v,g,S,w){let L=v!==null?v.length:0,_=null;if(L!==0){if(_=h.value,w!==!0||_===null){let m=S+L*4,z=g.matrixWorldInverse;l.getNormalMatrix(z),(_===null||_.length<m)&&(_=new Float32Array(m));for(let $=0,I=S;$!==L;++$,I+=4)a.copy(v[$]).applyMatrix4(z,l),a.normal.toArray(_,I),_[I+3]=a.constant}h.value=_,h.needsUpdate=!0}return t.numPlanes=L,t.numIntersection=0,_}}var La=4,JS=6,jS=20,KS=256,gl=new Ta,L0=new xe,vf=null,yf=0,Sf=0,Mf=!1,QS=new Z,Dr=new Z,ru=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:l=QS}=r;vf=this._renderer.getRenderTarget(),yf=this._renderer.getActiveCubeFace(),Sf=this._renderer.getActiveMipmapLevel(),Mf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(t,n,s,h,l),e>0&&this._blur(h,0,0,e),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=U0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=N0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(vf,yf,Sf),this._renderer.xr.enabled=Mf,t.scissorTest=!1,Pa(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Qs||t.mapping===Pr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),vf=this._renderer.getRenderTarget(),yf=this._renderer.getActiveCubeFace(),Sf=this._renderer.getActiveMipmapLevel(),Mf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Gn,minFilter:Gn,generateMipmaps:!1,type:qi,format:Ri,colorSpace:To,depthBuffer:!1},s=D0(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=D0(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=tM(r)),this._blurMaterial=nM(r,t,e),this._ggxMaterial=eM(r,t,e)}return s}_compileMaterial(t){let e=new Bn(new Mn,t);this._renderer.compile(e,gl)}_sceneToCubeUV(t,e,n,s,r){let h=new Kn(90,1,e,n),u=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,S=v.toneMapping;v.getClearColor(L0),v.toneMapping=Wi,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(s),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Bn(new Ma,new Er({name:"PMREM.Background",side:si,depthWrite:!1,depthTest:!1})));let L=this._backgroundBox,_=L.material,m=!1,z=t.background;z?z.isColor&&(_.color.copy(z),t.background=null,m=!0):(_.color.copy(L0),m=!0);for(let $=0;$<6;$++){let I=$%3;I===0?(h.up.set(0,u[$],0),h.position.set(r.x,r.y,r.z),h.lookAt(r.x+d[$],r.y,r.z)):I===1?(h.up.set(0,0,u[$]),h.position.set(r.x,r.y,r.z),h.lookAt(r.x,r.y+d[$],r.z)):(h.up.set(0,u[$],0),h.position.set(r.x,r.y,r.z),h.lookAt(r.x,r.y,r.z+d[$]));let T=this._cubeSize;Pa(s,I*T,$>2?T:0,T,T),v.setRenderTarget(s),m&&v.render(L,h),v.render(t,h)}v.toneMapping=S,v.autoClear=g,t.background=z}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Qs||t.mapping===Pr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=U0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=N0());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let l=r.uniforms;l.envMap.value=t;let h=this._cubeSize;Pa(e,0,0,3*h,2*h),n.setRenderTarget(e),n.render(a,gl)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,l=this._lodMeshes[n];l.material=a;let h=a.uniforms,u=n/(this._lodMeshes.length-1),d=e/(this._lodMeshes.length-1),v=Math.sqrt(u*u-d*d),g=u*1.25,S=v*g,{_lodMax:w}=this,L=this._sizeLods[n],_=3*L*(n>w-La?n-w+La:0),m=4*(this._cubeSize-L);h.envMap.value=t.texture,h.roughness.value=S,h.mipInt.value=w-e,Pa(r,_,m,3*L,2*L),s.setRenderTarget(r),s.render(l,gl),h.envMap.value=r.texture,h.roughness.value=0,h.mipInt.value=w-n,Pa(t,_,m,3*L,2*L),s.setRenderTarget(t),s.render(l,gl)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,l=this._blurMaterial,h=this._lodMeshes[s];h.material=l;let u=l.uniforms;u.envMap.value=t.texture,u.sigma.value=r,u.mipInt.value=this._lodMax-n;let d=this._sizeLods[s],v=3*d*(s>this._lodMax-La?s-this._lodMax+La:0),g=4*(this._cubeSize-d);Pa(e,v,g,3*d,2*d),a.setRenderTarget(e),a.render(h,gl)}};function tM(i){let t=[],e=[],n=i,s=i-La+1+JS;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],v=6,g=6,S=3,w=new Float32Array(S*g*v),L=new Float32Array(S*g*v);for(let m=0;m<v;m++){let z=m%3*2/3-1,$=m>2?0:-1,I=[z,$,0,z+2/3,$,0,z+2/3,$+1,0,z,$,0,z+2/3,$+1,0,z,$+1,0];w.set(I,S*g*m);for(let T=0;T<g;T++){let O=d[T*2]*2-1,W=d[T*2+1]*2-1;m===0?Dr.set(1,W,O):m===1?Dr.set(-O,1,-W):m===2?Dr.set(-O,W,1):m===3?Dr.set(-1,W,-O):m===4?Dr.set(-O,-1,W):Dr.set(O,W,-1),Dr.toArray(L,(m*g+T)*S)}}let _=new Mn;_.setAttribute("position",new hn(w,S)),_.setAttribute("outputDirection",new hn(L,S)),e.push(new Bn(_,null)),n>La&&n--}return{lodMeshes:e,sizeLods:t}}function D0(i,t,e){let n=new pi(i,t,e);return n.texture.mapping=ol,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Pa(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function eM(i,t,e){return new kn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:KS,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:lu(),fragmentShader:`

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
		`,blending:ls,depthTest:!1,depthWrite:!1})}function nM(i,t,e){return new kn({name:"SphericalGaussianBlur",defines:{SAMPLES:jS,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:lu(),fragmentShader:`

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
		`,blending:ls,depthTest:!1,depthWrite:!1})}function N0(){return new kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lu(),fragmentShader:`

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
		`,blending:ls,depthTest:!1,depthWrite:!1})}function U0(){return new kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ls,depthTest:!1,depthWrite:!1})}function lu(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var au=class extends pi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Bo(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ma(5,5,5),r=new kn({name:"CubemapFromEquirect",uniforms:Lr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:si,blending:ls});r.uniforms.tEquirect.value=e;let a=new Bn(s,r),l=e.minFilter;return e.minFilter===tr&&(e.minFilter=Gn),new uh(1,10,this).update(t,a),e.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function iM(i){let t=new WeakMap,e=new WeakMap,n=null;function s(g,S=!1){return g==null?null:S?a(g):r(g)}function r(g){if(g&&g.isTexture){let S=g.mapping;if(S===ph||S===mh)if(t.has(g)){let w=t.get(g).texture;return l(w,g.mapping)}else{let w=g.image;if(w&&w.height>0){let L=new au(w.height);return L.fromEquirectangularTexture(i,g),t.set(g,L),g.addEventListener("dispose",u),l(L.texture,g.mapping)}else return null}}return g}function a(g){if(g&&g.isTexture){let S=g.mapping,w=S===ph||S===mh,L=S===Qs||S===Pr;if(w||L){let _=e.get(g),m=_!==void 0?_.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==m)return n===null&&(n=new ru(i)),_=w?n.fromEquirectangular(g,_):n.fromCubemap(g,_),_.texture.pmremVersion=g.pmremVersion,e.set(g,_),_.texture;if(_!==void 0)return _.texture;{let z=g.image;return w&&z&&z.height>0||L&&z&&h(z)?(n===null&&(n=new ru(i)),_=w?n.fromEquirectangular(g):n.fromCubemap(g),_.texture.pmremVersion=g.pmremVersion,e.set(g,_),g.addEventListener("dispose",d),_.texture):null}}}return g}function l(g,S){return S===ph?g.mapping=Qs:S===mh&&(g.mapping=Pr),g}function h(g){let S=0,w=6;for(let L=0;L<w;L++)g[L]!==void 0&&S++;return S===w}function u(g){let S=g.target;S.removeEventListener("dispose",u);let w=t.get(S);w!==void 0&&(t.delete(S),w.dispose())}function d(g){let S=g.target;S.removeEventListener("dispose",d);let w=e.get(S);w!==void 0&&(e.delete(S),w.dispose())}function v(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:v}}function sM(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&br("WebGLRenderer: "+n+" extension not supported."),s}}}function rM(i,t,e,n){let s={},r=new WeakMap;function a(v){let g=v.target;g.index!==null&&t.remove(g.index);for(let w in g.attributes)t.remove(g.attributes[w]);g.removeEventListener("dispose",a),delete s[g.id];let S=r.get(g);S&&(t.remove(S),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function l(v,g){return s[g.id]===!0||(g.addEventListener("dispose",a),s[g.id]=!0,e.memory.geometries++),g}function h(v){let g=v.attributes;for(let S in g)t.update(g[S],i.ARRAY_BUFFER)}function u(v){let g=[],S=v.index,w=v.attributes.position,L=0;if(w===void 0)return;if(S!==null){let z=S.array;L=S.version;for(let $=0,I=z.length;$<I;$+=3){let T=z[$+0],O=z[$+1],W=z[$+2];g.push(T,O,O,W,W,T)}}else{let z=w.array;L=w.version;for(let $=0,I=z.length/3-1;$<I;$+=3){let T=$+0,O=$+1,W=$+2;g.push(T,O,O,W,W,T)}}let _=new(w.count>=65535?Do:Lo)(g,1);_.version=L;let m=r.get(v);m&&t.remove(m),r.set(v,_)}function d(v){let g=r.get(v);if(g){let S=v.index;S!==null&&g.version<S.version&&u(v)}else u(v);return r.get(v)}return{get:l,update:h,getWireframeAttribute:d}}function aM(i,t,e){let n;function s(v){n=v}let r,a;function l(v){r=v.type,a=v.bytesPerElement}function h(v,g){i.drawElements(n,g,r,v*a),e.update(g,n,1)}function u(v,g,S){S!==0&&(i.drawElementsInstanced(n,g,r,v*a,S),e.update(g,n,S))}function d(v,g,S){if(S===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,g,0,r,v,0,S);let L=0;for(let _=0;_<S;_++)L+=g[_];e.update(L,n,1)}this.setMode=s,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function oM(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,l){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=l*(r/3);break;case i.LINES:e.lines+=l*(r/2);break;case i.LINE_STRIP:e.lines+=l*(r-1);break;case i.LINE_LOOP:e.lines+=l*r;break;case i.POINTS:e.points+=l*r;break;default:be("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function lM(i,t,e){let n=new WeakMap,s=new an;function r(a,l,h){let u=a.morphTargetInfluences,d=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,v=d!==void 0?d.length:0,g=n.get(l);if(g===void 0||g.count!==v){let F=function(){W.dispose(),n.delete(l),l.removeEventListener("dispose",F)};g!==void 0&&g.texture.dispose();let S=l.morphAttributes.position!==void 0,w=l.morphAttributes.normal!==void 0,L=l.morphAttributes.color!==void 0,_=l.morphAttributes.position||[],m=l.morphAttributes.normal||[],z=l.morphAttributes.color||[],$=0;S===!0&&($=1),w===!0&&($=2),L===!0&&($=3);let I=l.attributes.position.count*$,T=1;I>t.maxTextureSize&&(T=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);let O=new Float32Array(I*T*4*v),W=new Io(O,I,T,v);W.type=Ci,W.needsUpdate=!0;let A=$*4;for(let G=0;G<v;G++){let X=_[G],st=m[G],ht=z[G],j=I*T*4*G;for(let et=0;et<X.count;et++){let pt=et*A;S===!0&&(s.fromBufferAttribute(X,et),O[j+pt+0]=s.x,O[j+pt+1]=s.y,O[j+pt+2]=s.z,O[j+pt+3]=0),w===!0&&(s.fromBufferAttribute(st,et),O[j+pt+4]=s.x,O[j+pt+5]=s.y,O[j+pt+6]=s.z,O[j+pt+7]=0),L===!0&&(s.fromBufferAttribute(ht,et),O[j+pt+8]=s.x,O[j+pt+9]=s.y,O[j+pt+10]=s.z,O[j+pt+11]=ht.itemSize===4?s.w:1)}}g={count:v,texture:W,size:new zt(I,T)},n.set(l,g),l.addEventListener("dispose",F)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)h.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let S=0;for(let L=0;L<u.length;L++)S+=u[L];let w=l.morphTargetsRelative?1:1-S;h.getUniforms().setValue(i,"morphTargetBaseInfluence",w),h.getUniforms().setValue(i,"morphTargetInfluences",u)}h.getUniforms().setValue(i,"morphTargetsTexture",g.texture,e),h.getUniforms().setValue(i,"morphTargetsTextureSize",g.size)}return{update:r}}function cM(i,t,e,n,s){let r=new WeakMap;function a(u){let d=s.render.frame,v=u.geometry,g=t.get(u,v);if(r.get(g)!==d&&(t.update(g),r.set(g,d)),u.isInstancedMesh&&(u.hasEventListener("dispose",h)===!1&&u.addEventListener("dispose",h),r.get(u)!==d&&(e.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&e.update(u.instanceColor,i.ARRAY_BUFFER),r.set(u,d))),u.isSkinnedMesh){let S=u.skeleton;r.get(S)!==d&&(S.update(),r.set(S,d))}return g}function l(){r=new WeakMap}function h(u){let d=u.target;d.removeEventListener("dispose",h),n.releaseStatesOfObject(d),e.remove(d.instanceMatrix),d.instanceColor!==null&&e.remove(d.instanceColor)}return{update:a,dispose:l}}var hM={[Zd]:"LINEAR_TONE_MAPPING",[Jd]:"REINHARD_TONE_MAPPING",[jd]:"CINEON_TONE_MAPPING",[Kd]:"ACES_FILMIC_TONE_MAPPING",[tf]:"AGX_TONE_MAPPING",[ef]:"NEUTRAL_TONE_MAPPING",[Qd]:"CUSTOM_TONE_MAPPING"};function uM(i,t,e,n,s,r){let a=new pi(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),l=null,h=null,u=new Mn;u.setAttribute("position",new Sn([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Sn([0,2,0,0,2,0],2));let d=new jc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),v=new Bn(u,d),g=new Ta(-1,1,1,-1,0,1),S=null,w=null,L=!1,_,m=null,z=[],$=!1;this.setSize=function(I,T){a.setSize(I,T),l!==null&&l.setSize(I,T),h!==null&&h.setSize(I,T);for(let O=0;O<z.length;O++){let W=z[O];W.setSize&&W.setSize(I,T)}},this.setEffects=function(I){z=I,$=z.length>0&&z[0].isRenderPass===!0;let T=a.width,O=a.height;z.length>0&&l===null&&(l=new pi(T,O,{type:qi,depthBuffer:!1,stencilBuffer:!1}),h=new pi(T,O,{type:qi,depthBuffer:!1,stencilBuffer:!1}));for(let W=0;W<z.length;W++){let A=z[W];A.setSize&&A.setSize(T,O)}},this.begin=function(I,T){if(L||I.toneMapping===Wi&&z.length===0)return!1;if(m=T,T!==null){let O=T.width,W=T.height;(a.width!==O||a.height!==W)&&this.setSize(O,W)}return $===!1&&I.setRenderTarget(a),_=I.toneMapping,I.toneMapping=Wi,!0},this.hasRenderPass=function(){return $},this.end=function(I,T){I.toneMapping=_,L=!0;let O=a,W=l;for(let A=0;A<z.length;A++){let F=z[A];F.enabled!==!1&&(F.render(I,W,O,T),F.needsSwap!==!1&&(O=W,W=W===l?h:l))}if(S!==I.outputColorSpace||w!==I.toneMapping){S=I.outputColorSpace,w=I.toneMapping,d.defines={},Xe.getTransfer(S)===rn&&(d.defines.SRGB_TRANSFER="");let A=hM[w];A&&(d.defines[A]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=O.texture,I.setRenderTarget(m),I.render(v,g),m=null,L=!1},this.isCompositing=function(){return L},this.dispose=function(){a.dispose(),l!==null&&l.dispose(),h!==null&&h.dispose(),u.dispose(),d.dispose()}}var eg=new fi,Ef=new qs(1,1),ng=new Io,ig=new Bc,sg=new Bo,F0=[],O0=[],B0=new Float32Array(16),k0=new Float32Array(9),z0=new Float32Array(4);function Na(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=F0[s];if(r===void 0&&(r=new Float32Array(s),F0[s]=r),t!==0){n.toArray(r,0);for(let a=1,l=0;a!==t;++a)l+=e,i[a].toArray(r,l)}return r}function In(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Pn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function cu(i,t){let e=O0[t];e===void 0&&(e=new Int32Array(t),O0[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function dM(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function fM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(In(e,t))return;i.uniform2fv(this.addr,t),Pn(e,t)}}function pM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(In(e,t))return;i.uniform3fv(this.addr,t),Pn(e,t)}}function mM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(In(e,t))return;i.uniform4fv(this.addr,t),Pn(e,t)}}function gM(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(In(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Pn(e,t)}else{if(In(e,n))return;z0.set(n),i.uniformMatrix2fv(this.addr,!1,z0),Pn(e,n)}}function _M(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(In(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Pn(e,t)}else{if(In(e,n))return;k0.set(n),i.uniformMatrix3fv(this.addr,!1,k0),Pn(e,n)}}function xM(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(In(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Pn(e,t)}else{if(In(e,n))return;B0.set(n),i.uniformMatrix4fv(this.addr,!1,B0),Pn(e,n)}}function vM(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function yM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(In(e,t))return;i.uniform2iv(this.addr,t),Pn(e,t)}}function SM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(In(e,t))return;i.uniform3iv(this.addr,t),Pn(e,t)}}function MM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(In(e,t))return;i.uniform4iv(this.addr,t),Pn(e,t)}}function bM(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function wM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(In(e,t))return;i.uniform2uiv(this.addr,t),Pn(e,t)}}function EM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(In(e,t))return;i.uniform3uiv(this.addr,t),Pn(e,t)}}function TM(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(In(e,t))return;i.uniform4uiv(this.addr,t),Pn(e,t)}}function AM(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ef.compareFunction=e.isReversedDepthBuffer()?nu:eu,r=Ef):r=eg,e.setTexture2D(t||r,s)}function CM(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||ig,s)}function RM(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||sg,s)}function IM(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||ng,s)}function PM(i){switch(i){case 5126:return dM;case 35664:return fM;case 35665:return pM;case 35666:return mM;case 35674:return gM;case 35675:return _M;case 35676:return xM;case 5124:case 35670:return vM;case 35667:case 35671:return yM;case 35668:case 35672:return SM;case 35669:case 35673:return MM;case 5125:return bM;case 36294:return wM;case 36295:return EM;case 36296:return TM;case 35678:case 36198:case 36298:case 36306:case 35682:return AM;case 35679:case 36299:case 36307:return CM;case 35680:case 36300:case 36308:case 36293:return RM;case 36289:case 36303:case 36311:case 36292:return IM}}function LM(i,t){i.uniform1fv(this.addr,t)}function DM(i,t){let e=Na(t,this.size,2);i.uniform2fv(this.addr,e)}function NM(i,t){let e=Na(t,this.size,3);i.uniform3fv(this.addr,e)}function UM(i,t){let e=Na(t,this.size,4);i.uniform4fv(this.addr,e)}function FM(i,t){let e=Na(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function OM(i,t){let e=Na(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function BM(i,t){let e=Na(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function kM(i,t){i.uniform1iv(this.addr,t)}function zM(i,t){i.uniform2iv(this.addr,t)}function $M(i,t){i.uniform3iv(this.addr,t)}function VM(i,t){i.uniform4iv(this.addr,t)}function HM(i,t){i.uniform1uiv(this.addr,t)}function GM(i,t){i.uniform2uiv(this.addr,t)}function WM(i,t){i.uniform3uiv(this.addr,t)}function XM(i,t){i.uniform4uiv(this.addr,t)}function qM(i,t,e){let n=this.cache,s=t.length,r=cu(e,s);In(n,r)||(i.uniform1iv(this.addr,r),Pn(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Ef:a=eg;for(let l=0;l!==s;++l)e.setTexture2D(t[l]||a,r[l])}function YM(i,t,e){let n=this.cache,s=t.length,r=cu(e,s);In(n,r)||(i.uniform1iv(this.addr,r),Pn(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||ig,r[a])}function ZM(i,t,e){let n=this.cache,s=t.length,r=cu(e,s);In(n,r)||(i.uniform1iv(this.addr,r),Pn(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||sg,r[a])}function JM(i,t,e){let n=this.cache,s=t.length,r=cu(e,s);In(n,r)||(i.uniform1iv(this.addr,r),Pn(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||ng,r[a])}function jM(i){switch(i){case 5126:return LM;case 35664:return DM;case 35665:return NM;case 35666:return UM;case 35674:return FM;case 35675:return OM;case 35676:return BM;case 5124:case 35670:return kM;case 35667:case 35671:return zM;case 35668:case 35672:return $M;case 35669:case 35673:return VM;case 5125:return HM;case 36294:return GM;case 36295:return WM;case 36296:return XM;case 35678:case 36198:case 36298:case 36306:case 35682:return qM;case 35679:case 36299:case 36307:return YM;case 35680:case 36300:case 36308:case 36293:return ZM;case 36289:case 36303:case 36311:case 36292:return JM}}var Tf=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=PM(e.type)}},Af=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=jM(e.type)}},Cf=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let l=s[r];l.setValue(t,e[l.id],n)}}},bf=/(\w+)(\])?(\[|\.)?/g;function $0(i,t){i.seq.push(t),i.map[t.id]=t}function KM(i,t,e){let n=i.name,s=n.length;for(bf.lastIndex=0;;){let r=bf.exec(n),a=bf.lastIndex,l=r[1],h=r[2]==="]",u=r[3];if(h&&(l=l|0),u===void 0||u==="["&&a+2===s){$0(e,u===void 0?new Tf(l,i,t):new Af(l,i,t));break}else{let v=e.map[l];v===void 0&&(v=new Cf(l),$0(e,v)),e=v}}}var Da=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let l=t.getActiveUniform(e,a),h=t.getUniformLocation(e,l.name);KM(l,h,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let l=e[r],h=n[l.id];h.needsUpdate!==!1&&l.setValue(t,h.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function V0(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var QM=37297,tb=0;function eb(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let l=a+1;n.push(`${l===t?">":" "} ${l}: ${e[a]}`)}return n.join(`
`)}var H0=new Re;function nb(i){Xe._getMatrix(H0,Xe.workingColorSpace,i);let t=`mat3( ${H0.elements.map(e=>e.toFixed(4))} )`;switch(Xe.getTransfer(i)){case Ao:return[t,"LinearTransferOETF"];case rn:return[t,"sRGBTransferOETF"];default:return ye("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function G0(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let l=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+eb(i.getShaderSource(t),l)}else return r}function ib(i,t){let e=nb(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var sb={[Zd]:"Linear",[Jd]:"Reinhard",[jd]:"Cineon",[Kd]:"ACESFilmic",[tf]:"AgX",[ef]:"Neutral",[Qd]:"Custom"};function rb(i,t){let e=sb[t];return e===void 0?(ye("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var su=new Z;function ab(){Xe.getLuminanceCoefficients(su);let i=su.x.toFixed(4),t=su.y.toFixed(4),e=su.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ob(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xl).join(`
`)}function lb(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function cb(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,l=1;r.type===i.FLOAT_MAT2&&(l=2),r.type===i.FLOAT_MAT3&&(l=3),r.type===i.FLOAT_MAT4&&(l=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:l}}return e}function xl(i){return i!==""}function W0(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function X0(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var hb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rf(i){return i.replace(hb,db)}var ub=new Map;function db(i,t){let e=Be[t];if(e===void 0){let n=ub.get(t);if(n!==void 0)e=Be[n],ye('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Rf(e)}var fb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function q0(i){return i.replace(fb,pb)}function pb(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Y0(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var mb={[al]:"SHADOWMAP_TYPE_PCF",[Aa]:"SHADOWMAP_TYPE_VSM"};function gb(i){return mb[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var _b={[Qs]:"ENVMAP_TYPE_CUBE",[Pr]:"ENVMAP_TYPE_CUBE",[ol]:"ENVMAP_TYPE_CUBE_UV"};function xb(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":_b[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var vb={[Pr]:"ENVMAP_MODE_REFRACTION"};function yb(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":vb[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Sb={[fh]:"ENVMAP_BLENDING_MULTIPLY",[c0]:"ENVMAP_BLENDING_MIX",[h0]:"ENVMAP_BLENDING_ADD"};function Mb(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Sb[i.combine]||"ENVMAP_BLENDING_NONE"}function bb(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function wb(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,l=e.fragmentShader,h=gb(e),u=xb(e),d=yb(e),v=Mb(e),g=bb(e),S=ob(e),w=lb(r),L=s.createProgram(),_,m,z=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w].filter(xl).join(`
`),_.length>0&&(_+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w].filter(xl).join(`
`),m.length>0&&(m+=`
`)):(_=[Y0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xl).join(`
`),m=[Y0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",e.envMap?"#define "+v:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Wi?"#define TONE_MAPPING":"",e.toneMapping!==Wi?Be.tonemapping_pars_fragment:"",e.toneMapping!==Wi?rb("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,ib("linearToOutputTexel",e.outputColorSpace),ab(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(xl).join(`
`)),a=Rf(a),a=W0(a,e),a=X0(a,e),l=Rf(l),l=W0(l,e),l=X0(l,e),a=q0(a),l=q0(l),e.isRawShaderMaterial!==!0&&(z=`#version 300 es
`,_=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,m=["#define varying in",e.glslVersion===uf?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===uf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let $=z+_+a,I=z+m+l,T=V0(s,s.VERTEX_SHADER,$),O=V0(s,s.FRAGMENT_SHADER,I);s.attachShader(L,T),s.attachShader(L,O),e.index0AttributeName!==void 0?s.bindAttribLocation(L,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(L,0,"position"),s.linkProgram(L);function W(X){if(i.debug.checkShaderErrors){let st=s.getProgramInfoLog(L)||"",ht=s.getShaderInfoLog(T)||"",j=s.getShaderInfoLog(O)||"",et=st.trim(),pt=ht.trim(),gt=j.trim(),At=!0,_t=!0;if(s.getProgramParameter(L,s.LINK_STATUS)===!1)if(At=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,L,T,O);else{let wt=G0(s,T,"vertex"),bt=G0(s,O,"fragment");be("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(L,s.VALIDATE_STATUS)+`

Material Name: `+X.name+`
Material Type: `+X.type+`

Program Info Log: `+et+`
`+wt+`
`+bt)}else et!==""?ye("WebGLProgram: Program Info Log:",et):(pt===""||gt==="")&&(_t=!1);_t&&(X.diagnostics={runnable:At,programLog:et,vertexShader:{log:pt,prefix:_},fragmentShader:{log:gt,prefix:m}})}s.deleteShader(T),s.deleteShader(O),A=new Da(s,L),F=cb(s,L)}let A;this.getUniforms=function(){return A===void 0&&W(this),A};let F;this.getAttributes=function(){return F===void 0&&W(this),F};let G=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return G===!1&&(G=s.getProgramParameter(L,QM)),G},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(L),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=tb++,this.cacheKey=t,this.usedTimes=1,this.program=L,this.vertexShader=T,this.fragmentShader=O,this}var Eb=0,If=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Pf(t),e.set(t,n)),n}},Pf=class{constructor(t){this.id=Eb++,this.code=t,this.usedTimes=0}};function Tb(i){return i===nr||i===fl||i===pl}function Ab(i,t,e,n,s,r){let a=new va,l=new If,h=new Set,u=[],d=new Map,v=n.logarithmicDepthBuffer,g=n.precision,S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(A){return h.add(A),A===0?"uv":`uv${A}`}function L(A,F,G,X,st,ht){let j=X.fog,et=st.geometry,pt=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?X.environment:null,gt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap,At=t.get(A.envMap||pt,gt),_t=At&&At.mapping===ol?At.image.height:null,wt=S[A.type];A.precision!==null&&(g=n.getMaxPrecision(A.precision),g!==A.precision&&ye("WebGLProgram.getParameters:",A.precision,"not supported, using",g,"instead."));let bt=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,Wt=bt!==void 0?bt.length:0,te=0;et.morphAttributes.position!==void 0&&(te=1),et.morphAttributes.normal!==void 0&&(te=2),et.morphAttributes.color!==void 0&&(te=3);let Ye,Le,Ve,vt;if(wt){let tn=ri[wt];Ye=tn.vertexShader,Le=tn.fragmentShader}else{Ye=A.vertexShader,Le=A.fragmentShader;let tn=l.getVertexShaderStage(A),Ze=l.getFragmentShaderStage(A);l.update(A,tn,Ze),Ve=tn.id,vt=Ze.id}let yt=i.getRenderTarget(),Ut=i.state.buffers.depth.getReversed(),he=st.isInstancedMesh===!0,jt=st.isBatchedMesh===!0,ge=!!A.map,ee=!!A.matcap,nt=!!At,Rt=!!A.aoMap,V=!!A.lightMap,Pt=!!A.bumpMap&&A.wireframe===!1,Bt=!!A.normalMap,ce=!!A.displacementMap,fe=!!A.emissiveMap,de=!!A.metalnessMap,Te=!!A.roughnessMap,Y=A.anisotropy>0,Fe=A.clearcoat>0,De=A.dispersion>0,U=A.retroreflectivity>0,E=A.iridescence>0,it=A.sheen>0,lt=A.transmission>0,xt=Y&&!!A.anisotropyMap,Lt=Fe&&!!A.clearcoatMap,kt=Fe&&!!A.clearcoatNormalMap,mt=Fe&&!!A.clearcoatRoughnessMap,ut=E&&!!A.iridescenceMap,Xt=E&&!!A.iridescenceThicknessMap,ue=it&&!!A.sheenColorMap,Yt=it&&!!A.sheenRoughnessMap,Vt=!!A.specularMap,oe=!!A.specularColorMap,pe=!!A.specularIntensityMap,Ae=lt&&!!A.transmissionMap,Q=lt&&!!A.thicknessMap,qt=!!A.gradientMap,St=!!A.alphaMap,Ht=A.alphaTest>0,Kt=!!A.alphaHash,Tt=!!A.extensions,se=Wi;A.toneMapped&&(yt===null||yt.isXRRenderTarget===!0)&&(se=i.toneMapping);let ne={shaderID:wt,shaderType:A.type,shaderName:A.name,vertexShader:Ye,fragmentShader:Le,defines:A.defines,customVertexShaderID:Ve,customFragmentShaderID:vt,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:g,batching:jt,batchingColor:jt&&st._colorsTexture!==null,instancing:he,instancingColor:he&&st.instanceColor!==null,instancingMorph:he&&st.morphTexture!==null,outputColorSpace:yt===null?i.outputColorSpace:yt.isXRRenderTarget===!0?yt.texture.colorSpace:Xe.workingColorSpace,alphaToCoverage:!!A.alphaToCoverage,map:ge,matcap:ee,envMap:nt,envMapMode:nt&&At.mapping,envMapCubeUVHeight:_t,aoMap:Rt,lightMap:V,bumpMap:Pt,normalMap:Bt,displacementMap:ce,emissiveMap:fe,normalMapObjectSpace:Bt&&A.normalMapType===f0,normalMapTangentSpace:Bt&&A.normalMapType===tu,packedNormalMap:Bt&&A.normalMapType===tu&&Tb(A.normalMap.format),metalnessMap:de,roughnessMap:Te,anisotropy:Y,anisotropyMap:xt,clearcoat:Fe,clearcoatMap:Lt,clearcoatNormalMap:kt,clearcoatRoughnessMap:mt,dispersion:De,retroreflection:U,iridescence:E,iridescenceMap:ut,iridescenceThicknessMap:Xt,sheen:it,sheenColorMap:ue,sheenRoughnessMap:Yt,specularMap:Vt,specularColorMap:oe,specularIntensityMap:pe,transmission:lt,transmissionMap:Ae,thicknessMap:Q,gradientMap:qt,opaque:A.transparent===!1&&A.blending===Ca&&A.alphaToCoverage===!1,alphaMap:St,alphaTest:Ht,alphaHash:Kt,combine:A.combine,mapUv:ge&&w(A.map.channel),aoMapUv:Rt&&w(A.aoMap.channel),lightMapUv:V&&w(A.lightMap.channel),bumpMapUv:Pt&&w(A.bumpMap.channel),normalMapUv:Bt&&w(A.normalMap.channel),displacementMapUv:ce&&w(A.displacementMap.channel),emissiveMapUv:fe&&w(A.emissiveMap.channel),metalnessMapUv:de&&w(A.metalnessMap.channel),roughnessMapUv:Te&&w(A.roughnessMap.channel),anisotropyMapUv:xt&&w(A.anisotropyMap.channel),clearcoatMapUv:Lt&&w(A.clearcoatMap.channel),clearcoatNormalMapUv:kt&&w(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:mt&&w(A.clearcoatRoughnessMap.channel),iridescenceMapUv:ut&&w(A.iridescenceMap.channel),iridescenceThicknessMapUv:Xt&&w(A.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&w(A.sheenColorMap.channel),sheenRoughnessMapUv:Yt&&w(A.sheenRoughnessMap.channel),specularMapUv:Vt&&w(A.specularMap.channel),specularColorMapUv:oe&&w(A.specularColorMap.channel),specularIntensityMapUv:pe&&w(A.specularIntensityMap.channel),transmissionMapUv:Ae&&w(A.transmissionMap.channel),thicknessMapUv:Q&&w(A.thicknessMap.channel),alphaMapUv:St&&w(A.alphaMap.channel),vertexTangents:!!et.attributes.tangent&&(Bt||Y),vertexNormals:!!et.attributes.normal,vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,pointsUvs:st.isPoints===!0&&!!et.attributes.uv&&(ge||St),fog:!!j,useFog:A.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:A.wireframe===!1&&(A.flatShading===!0||et.attributes.normal===void 0&&Bt===!1&&(A.isMeshLambertMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isMeshPhysicalMaterial)),sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Ut,skinning:st.isSkinnedMesh===!0,hasPositionAttribute:et.attributes.position!==void 0,morphTargets:et.morphAttributes.position!==void 0,morphNormals:et.morphAttributes.normal!==void 0,morphColors:et.morphAttributes.color!==void 0,morphTargetsCount:Wt,morphTextureStride:te,numSunLights:F.sun.length,numDirLights:F.directional.length,numPointLights:F.point.length,numSpotLights:F.spot.length,numSpotLightMaps:F.spotLightMap.length,numRectAreaLights:F.rectArea.length,numHemiLights:F.hemi.length,numSunLightShadows:F.sunShadowMap.length,numDirLightShadows:F.directionalShadowMap.length,numPointLightShadows:F.pointShadowMap.length,numSpotLightShadows:F.spotShadowMap.length,numSpotLightShadowsWithMaps:F.numSpotLightShadowsWithMaps,numLightProbes:F.numLightProbes,numLightProbeGrids:ht.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:A.dithering,shadowMapEnabled:i.shadowMap.enabled&&G.length>0,shadowMapType:i.shadowMap.type,toneMapping:se,decodeVideoTexture:ge&&A.map.isVideoTexture===!0&&Xe.getTransfer(A.map.colorSpace)===rn,decodeVideoTextureEmissive:fe&&A.emissiveMap.isVideoTexture===!0&&Xe.getTransfer(A.emissiveMap.colorSpace)===rn,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===os,flipSided:A.side===si,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Tt&&A.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Tt&&A.extensions.multiDraw===!0||jt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return ne.vertexUv1s=h.has(1),ne.vertexUv2s=h.has(2),ne.vertexUv3s=h.has(3),h.clear(),ne}function _(A){let F=[];if(A.shaderID?F.push(A.shaderID):(F.push(A.customVertexShaderID),F.push(A.customFragmentShaderID)),A.defines!==void 0)for(let G in A.defines)F.push(G),F.push(A.defines[G]);return A.isRawShaderMaterial===!1&&(m(F,A),z(F,A),F.push(i.outputColorSpace)),F.push(A.customProgramCacheKey),F.join()}function m(A,F){A.push(F.precision),A.push(F.outputColorSpace),A.push(F.envMapMode),A.push(F.envMapCubeUVHeight),A.push(F.mapUv),A.push(F.alphaMapUv),A.push(F.lightMapUv),A.push(F.aoMapUv),A.push(F.bumpMapUv),A.push(F.normalMapUv),A.push(F.displacementMapUv),A.push(F.emissiveMapUv),A.push(F.metalnessMapUv),A.push(F.roughnessMapUv),A.push(F.anisotropyMapUv),A.push(F.clearcoatMapUv),A.push(F.clearcoatNormalMapUv),A.push(F.clearcoatRoughnessMapUv),A.push(F.iridescenceMapUv),A.push(F.iridescenceThicknessMapUv),A.push(F.sheenColorMapUv),A.push(F.sheenRoughnessMapUv),A.push(F.specularMapUv),A.push(F.specularColorMapUv),A.push(F.specularIntensityMapUv),A.push(F.transmissionMapUv),A.push(F.thicknessMapUv),A.push(F.combine),A.push(F.fogExp2),A.push(F.sizeAttenuation),A.push(F.morphTargetsCount),A.push(F.morphAttributeCount),A.push(F.numSunLights),A.push(F.numDirLights),A.push(F.numPointLights),A.push(F.numSpotLights),A.push(F.numSpotLightMaps),A.push(F.numHemiLights),A.push(F.numRectAreaLights),A.push(F.numSunLightShadows),A.push(F.numDirLightShadows),A.push(F.numPointLightShadows),A.push(F.numSpotLightShadows),A.push(F.numSpotLightShadowsWithMaps),A.push(F.numLightProbes),A.push(F.shadowMapType),A.push(F.toneMapping),A.push(F.numClippingPlanes),A.push(F.numClipIntersection),A.push(F.depthPacking)}function z(A,F){a.disableAll(),F.instancing&&a.enable(0),F.instancingColor&&a.enable(1),F.instancingMorph&&a.enable(2),F.matcap&&a.enable(3),F.envMap&&a.enable(4),F.normalMapObjectSpace&&a.enable(5),F.normalMapTangentSpace&&a.enable(6),F.clearcoat&&a.enable(7),F.iridescence&&a.enable(8),F.alphaTest&&a.enable(9),F.vertexColors&&a.enable(10),F.vertexAlphas&&a.enable(11),F.vertexUv1s&&a.enable(12),F.vertexUv2s&&a.enable(13),F.vertexUv3s&&a.enable(14),F.vertexTangents&&a.enable(15),F.anisotropy&&a.enable(16),F.alphaHash&&a.enable(17),F.batching&&a.enable(18),F.dispersion&&a.enable(19),F.retroreflection&&a.enable(24),F.batchingColor&&a.enable(20),F.gradientMap&&a.enable(21),F.packedNormalMap&&a.enable(22),F.vertexNormals&&a.enable(23),A.push(a.mask),a.disableAll(),F.fog&&a.enable(0),F.useFog&&a.enable(1),F.flatShading&&a.enable(2),F.logarithmicDepthBuffer&&a.enable(3),F.reversedDepthBuffer&&a.enable(4),F.skinning&&a.enable(5),F.morphTargets&&a.enable(6),F.morphNormals&&a.enable(7),F.morphColors&&a.enable(8),F.premultipliedAlpha&&a.enable(9),F.shadowMapEnabled&&a.enable(10),F.doubleSided&&a.enable(11),F.flipSided&&a.enable(12),F.useDepthPacking&&a.enable(13),F.dithering&&a.enable(14),F.transmission&&a.enable(15),F.sheen&&a.enable(16),F.opaque&&a.enable(17),F.pointsUvs&&a.enable(18),F.decodeVideoTexture&&a.enable(19),F.decodeVideoTextureEmissive&&a.enable(20),F.alphaToCoverage&&a.enable(21),F.numLightProbeGrids>0&&a.enable(22),F.hasPositionAttribute&&a.enable(23),A.push(a.mask)}function $(A){let F=S[A.type],G;if(F){let X=ri[F];G=ml.clone(X.uniforms)}else G=A.uniforms;return G}function I(A,F){let G=d.get(F);return G!==void 0?++G.usedTimes:(G=new wb(i,F,A,s),u.push(G),d.set(F,G)),G}function T(A){if(--A.usedTimes===0){let F=u.indexOf(A);u[F]=u[u.length-1],u.pop(),d.delete(A.cacheKey),A.destroy()}}function O(A){l.remove(A)}function W(){l.dispose()}return{getParameters:L,getProgramCacheKey:_,getUniforms:$,acquireProgram:I,releaseProgram:T,releaseShaderCache:O,programs:u,dispose:W}}function Cb(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let l=i.get(a);return l===void 0&&(l={},i.set(a,l)),l}function n(a){i.delete(a)}function s(a,l,h){i.get(a)[l]=h}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Rb(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Z0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function J0(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(g){let S=0;return g.isInstancedMesh&&(S+=2),g.isSkinnedMesh&&(S+=1),S}function l(g,S,w,L,_,m){let z=i[t];return z===void 0?(z={id:g.id,object:g,geometry:S,material:w,materialVariant:a(g),groupOrder:L,renderOrder:g.renderOrder,z:_,group:m},i[t]=z):(z.id=g.id,z.object=g,z.geometry=S,z.material=w,z.materialVariant=a(g),z.groupOrder=L,z.renderOrder=g.renderOrder,z.z=_,z.group=m),t++,z}function h(g,S,w,L,_,m,z){z.reversedDepth===!0&&(_=-_);let $=l(g,S,w,L,_,m);w.transmission>0?n.push($):w.transparent===!0?s.push($):e.push($)}function u(g,S,w,L,_,m){let z=l(g,S,w,L,_,m);w.transmission>0?n.unshift(z):w.transparent===!0?s.unshift(z):e.unshift(z)}function d(g,S){e.length>1&&e.sort(g||Rb),n.length>1&&n.sort(S||Z0),s.length>1&&s.sort(S||Z0)}function v(){for(let g=t,S=i.length;g<S;g++){let w=i[g];if(w.id===null)break;w.id=null,w.object=null,w.geometry=null,w.material=null,w.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:h,unshift:u,finish:v,sort:d}}function Ib(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new J0,i.set(n,[a])):s>=r.length?(a=new J0,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Pb(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new Z,color:new xe};break;case"SpotLight":e={position:new Z,direction:new Z,color:new xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new Z,color:new xe,distance:0,decay:0};break;case"HemisphereLight":e={direction:new Z,skyColor:new xe,groundColor:new xe};break;case"RectAreaLight":e={color:new xe,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return i[t.id]=e,e}}}function Lb(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Db=0;function Nb(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Ub(i){let t=new Pb,e=Lb(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new Z);let s=new Z,r=new qe,a=new qe;function l(u){let d=0,v=0,g=0;for(let st=0;st<9;st++)n.probe[st].set(0,0,0);let S=0,w=0,L=0,_=0,m=0,z=0,$=0,I=0,T=0,O=0,W=0,A=0,F=0,G=0;u.sort(Nb);for(let st=0,ht=u.length;st<ht;st++){let j=u[st],et=j.color,pt=j.intensity,gt=j.distance,At=null;if(j.shadow&&j.shadow.map&&(j.shadow.map.texture.format===nr?At=j.shadow.map.texture:At=j.shadow.map.depthTexture||j.shadow.map.texture),j.isAmbientLight)d+=et.r*pt,v+=et.g*pt,g+=et.b*pt;else if(j.isLightProbe){for(let _t=0;_t<9;_t++)n.probe[_t].addScaledVector(j.sh.coefficients[_t],pt);G++}else if(j.isSunLight){let _t=t.get(j);if(_t.color.copy(j.color).multiplyScalar(j.intensity),j.castShadow){let wt=j.shadow,bt=e.get(j);bt.shadowIntensity=wt.intensity,bt.shadowBias=wt.bias,bt.shadowNormalBias=wt.normalBias,bt.shadowRadius=wt.radius,bt.shadowMapSize.copy(wt.mapSize).multiply(wt.getFrameExtents()),n.sunShadow[w]=bt,n.sunShadowMap[w]=At;let Wt=wt.getViewportCount();for(let te=0;te<Wt;te++)n.sunShadowMatrix[L+te]=wt.getMatrix(te),n.sunShadowCascade[L+te]=wt._cascadeData[te];L+=Wt,w++}n.sun[S]=_t,S++}else if(j.isDirectionalLight){let _t=t.get(j);if(_t.color.copy(j.color).multiplyScalar(j.intensity),j.castShadow){let wt=j.shadow,bt=e.get(j);bt.shadowIntensity=wt.intensity,bt.shadowBias=wt.bias,bt.shadowNormalBias=wt.normalBias,bt.shadowRadius=wt.radius,bt.shadowMapSize=wt.mapSize,n.directionalShadow[_]=bt,n.directionalShadowMap[_]=At,n.directionalShadowMatrix[_]=j.shadow.matrix,T++}n.directional[_]=_t,_++}else if(j.isSpotLight){let _t=t.get(j);_t.position.setFromMatrixPosition(j.matrixWorld),_t.color.copy(et).multiplyScalar(pt),_t.distance=gt,_t.coneCos=Math.cos(j.angle),_t.penumbraCos=Math.cos(j.angle*(1-j.penumbra)),_t.decay=j.decay,n.spot[z]=_t;let wt=j.shadow;if(j.map&&(n.spotLightMap[A]=j.map,A++,wt.updateMatrices(j),j.castShadow&&F++),n.spotLightMatrix[z]=wt.matrix,j.castShadow){let bt=e.get(j);bt.shadowIntensity=wt.intensity,bt.shadowBias=wt.bias,bt.shadowNormalBias=wt.normalBias,bt.shadowRadius=wt.radius,bt.shadowMapSize=wt.mapSize,n.spotShadow[z]=bt,n.spotShadowMap[z]=At,W++}z++}else if(j.isRectAreaLight){let _t=t.get(j);_t.color.copy(et).multiplyScalar(pt),_t.halfWidth.set(j.width*.5,0,0),_t.halfHeight.set(0,j.height*.5,0),n.rectArea[$]=_t,$++}else if(j.isPointLight){let _t=t.get(j);if(_t.color.copy(j.color).multiplyScalar(j.intensity),_t.distance=j.distance,_t.decay=j.decay,j.castShadow){let wt=j.shadow,bt=e.get(j);bt.shadowIntensity=wt.intensity,bt.shadowBias=wt.bias,bt.shadowNormalBias=wt.normalBias,bt.shadowRadius=wt.radius,bt.shadowMapSize=wt.mapSize,bt.shadowCameraNear=wt.camera.near,bt.shadowCameraFar=wt.camera.far,n.pointShadow[m]=bt,n.pointShadowMap[m]=At,n.pointShadowMatrix[m]=j.shadow.matrix,O++}n.point[m]=_t,m++}else if(j.isHemisphereLight){let _t=t.get(j);_t.skyColor.copy(j.color).multiplyScalar(pt),_t.groundColor.copy(j.groundColor).multiplyScalar(pt),n.hemi[I]=_t,I++}}$>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Gt.LTC_FLOAT_1,n.rectAreaLTC2=Gt.LTC_FLOAT_2):(n.rectAreaLTC1=Gt.LTC_HALF_1,n.rectAreaLTC2=Gt.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=v,n.ambient[2]=g;let X=n.hash;(X.sunLength!==S||X.directionalLength!==_||X.pointLength!==m||X.spotLength!==z||X.rectAreaLength!==$||X.hemiLength!==I||X.numSunShadows!==w||X.numDirectionalShadows!==T||X.numPointShadows!==O||X.numSpotShadows!==W||X.numSpotMaps!==A||X.numLightProbes!==G)&&(n.sun.length=S,n.directional.length=_,n.spot.length=z,n.rectArea.length=$,n.point.length=m,n.hemi.length=I,n.sunShadow.length=w,n.sunShadowMap.length=w,n.sunShadowMatrix.length=L,n.sunShadowCascade.length=L,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=O,n.pointShadowMap.length=O,n.pointShadowMatrix.length=O,n.spotShadow.length=W,n.spotShadowMap.length=W,n.spotLightMatrix.length=W+A-F,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=F,n.numLightProbes=G,X.sunLength=S,X.directionalLength=_,X.pointLength=m,X.spotLength=z,X.rectAreaLength=$,X.hemiLength=I,X.numSunShadows=w,X.numDirectionalShadows=T,X.numPointShadows=O,X.numSpotShadows=W,X.numSpotMaps=A,X.numLightProbes=G,n.version=Db++)}function h(u,d){let v=0,g=0,S=0,w=0,L=0,_=0,m=d.matrixWorldInverse;for(let z=0,$=u.length;z<$;z++){let I=u[z];if(I.isSunLight){let T=n.sun[v];T.direction.setFromMatrixPosition(I.matrixWorld),T.direction.transformDirection(m),v++}else if(I.isDirectionalLight){let T=n.directional[g];T.direction.setFromMatrixPosition(I.matrixWorld),s.setFromMatrixPosition(I.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),g++}else if(I.isSpotLight){let T=n.spot[w];T.position.setFromMatrixPosition(I.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(I.matrixWorld),s.setFromMatrixPosition(I.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),w++}else if(I.isRectAreaLight){let T=n.rectArea[L];T.position.setFromMatrixPosition(I.matrixWorld),T.position.applyMatrix4(m),a.identity(),r.copy(I.matrixWorld),r.premultiply(m),a.extractRotation(r),T.halfWidth.set(I.width*.5,0,0),T.halfHeight.set(0,I.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),L++}else if(I.isPointLight){let T=n.point[S];T.position.setFromMatrixPosition(I.matrixWorld),T.position.applyMatrix4(m),S++}else if(I.isHemisphereLight){let T=n.hemi[_];T.direction.setFromMatrixPosition(I.matrixWorld),T.direction.transformDirection(m),_++}}}return{setup:l,setupView:h,state:n}}function j0(i){let t=new Ub(i),e=[],n=[],s=[];function r(g){v.camera=g,e.length=0,n.length=0,s.length=0}function a(g){e.push(g)}function l(g){n.push(g)}function h(g){s.push(g)}function u(){t.setup(e)}function d(g){t.setupView(e,g)}let v={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:v,setupLights:u,setupLightsView:d,pushLight:a,pushShadow:l,pushLightProbeGrid:h}}function Fb(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),l;return a===void 0?(l=new j0(i),t.set(s,[l])):r>=a.length?(l=new j0(i),a.push(l)):l=a[r],l}function n(){t=new WeakMap}return{get:e,dispose:n}}var Ob=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bb=`uniform sampler2D shadow_pass;
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
}`,kb=[new Z(1,0,0),new Z(-1,0,0),new Z(0,1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1)],zb=[new Z(0,-1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,-1,0),new Z(0,-1,0)],K0=new qe,_l=new Z,wf=new Z;function $b(i,t,e){let n=new Sa,s=new zt,r=new zt,a=new an,l=new Kc,h=new Qc,u={},d=e.maxTextureSize,v={[Ks]:si,[si]:Ks,[os]:os},g=new kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new zt},radius:{value:4}},vertexShader:Ob,fragmentShader:Bb}),S=g.clone();S.defines.HORIZONTAL_PASS=1;let w=new Mn;w.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let L=new Bn(w,g),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=al;let m=this.type;this.render=function(O,W,A){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||O.length===0)return;this.type===Gm&&(ye("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=al);let F=i.getRenderTarget(),G=i.getActiveCubeFace(),X=i.getActiveMipmapLevel(),st=i.state;st.setBlending(ls),st.buffers.depth.getReversed()===!0?st.buffers.color.setClear(0,0,0,0):st.buffers.color.setClear(1,1,1,1),st.buffers.depth.setTest(!0),st.setScissorTest(!1);let ht=m!==this.type;ht&&W.traverse(function(j){j.material&&(Array.isArray(j.material)?j.material.forEach(et=>et.needsUpdate=!0):j.material.needsUpdate=!0)});for(let j=0,et=O.length;j<et;j++){let pt=O[j],gt=pt.shadow;if(gt===void 0){ye("WebGLShadowMap:",pt,"has no shadow.");continue}if(gt.autoUpdate===!1&&gt.needsUpdate===!1)continue;s.copy(gt.mapSize);let At=gt.getFrameExtents();s.multiply(At),r.copy(gt.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/At.x),s.x=r.x*At.x,gt.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/At.y),s.y=r.y*At.y,gt.mapSize.y=r.y));let _t=i.state.buffers.depth.getReversed();if(gt.camera._reversedDepth=_t,gt.map===null||ht===!0){if(gt.map!==null&&(gt.map.depthTexture!==null&&(gt.map.depthTexture.dispose(),gt.map.depthTexture=null),gt.map.dispose()),this.type===Aa){if(pt.isPointLight){ye("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}gt.map=new pi(s.x,s.y,{format:nr,type:qi,minFilter:Gn,magFilter:Gn,generateMipmaps:!1}),gt.map.texture.name=pt.name+".shadowMap",gt.map.depthTexture=new qs(s.x,s.y,Ci),gt.map.depthTexture.name=pt.name+".shadowMapDepth",gt.map.depthTexture.format=is,gt.map.depthTexture.compareFunction=null,gt.map.depthTexture.minFilter=Fn,gt.map.depthTexture.magFilter=Fn}else pt.isPointLight?(gt.map=new au(s.x),gt.map.depthTexture=new Gc(s.x,Xi)):(gt.map=new pi(s.x,s.y),gt.map.depthTexture=new qs(s.x,s.y,Xi)),gt.map.depthTexture.name=pt.name+".shadowMap",gt.map.depthTexture.format=is,this.type===al?(gt.map.depthTexture.compareFunction=_t?nu:eu,gt.map.depthTexture.minFilter=Gn,gt.map.depthTexture.magFilter=Gn):(gt.map.depthTexture.compareFunction=null,gt.map.depthTexture.minFilter=Fn,gt.map.depthTexture.magFilter=Fn);gt.camera.updateProjectionMatrix()}gt.map.isWebGLCubeRenderTarget!==!0&&(gt.map.width!==s.x||gt.map.height!==s.y)&&gt.map.setSize(s.x,s.y);let wt=gt.map.isWebGLCubeRenderTarget?6:gt.getViewportCount();pt.isPointLight!==!0&&gt.updateMatrices(pt,A);for(let bt=0;bt<wt;bt++){let Wt=gt.getCamera(bt);if(pt.isPointLight){let te=gt.camera,Ye=gt.matrix,Le=pt.distance||te.far;Le!==te.far&&(te.far=Le,te.updateProjectionMatrix()),_l.setFromMatrixPosition(pt.matrixWorld),te.position.copy(_l),wf.copy(te.position),wf.add(kb[bt]),te.up.copy(zb[bt]),te.lookAt(wf),te.updateMatrixWorld(),Ye.makeTranslation(-_l.x,-_l.y,-_l.z),K0.multiplyMatrices(te.projectionMatrix,te.matrixWorldInverse),gt._frustum.setFromProjectionMatrix(K0,te.coordinateSystem,te.reversedDepth)}if(gt.map.isWebGLCubeRenderTarget)i.setRenderTarget(gt.map,bt),i.clear();else{bt===0&&(i.setRenderTarget(gt.map),i.clear());let te=gt.getViewport(bt);a.set(r.x*te.x,r.y*te.y,r.x*te.z,r.y*te.w),st.viewport(a)}n=gt.getFrustum(bt),I(W,A,Wt,pt,this.type)}gt.isPointLightShadow!==!0&&this.type===Aa&&z(gt,A),gt.needsUpdate=!1}m=this.type,_.needsUpdate=!1,i.setRenderTarget(F,G,X)};function z(O,W){let A=t.update(L);g.defines.VSM_SAMPLES!==O.blurSamples&&(g.defines.VSM_SAMPLES=O.blurSamples,S.defines.VSM_SAMPLES=O.blurSamples,g.needsUpdate=!0,S.needsUpdate=!0),O.mapPass===null?O.mapPass=new pi(s.x,s.y,{format:nr,type:qi}):(O.mapPass.width!==O.map.width||O.mapPass.height!==O.map.height)&&O.mapPass.setSize(O.map.width,O.map.height),g.uniforms.shadow_pass.value=O.map.depthTexture,g.uniforms.resolution.value.set(O.map.width,O.map.height),g.uniforms.radius.value=O.radius,i.setRenderTarget(O.mapPass),i.clear(),i.renderBufferDirect(W,null,A,g,L,null),S.uniforms.shadow_pass.value=O.mapPass.texture,S.uniforms.resolution.value.set(O.map.width,O.map.height),S.uniforms.radius.value=O.radius,i.setRenderTarget(O.map),i.clear(),i.renderBufferDirect(W,null,A,S,L,null)}function $(O,W,A,F){let G=null,X=A.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(X!==void 0)G=X;else if(G=A.isPointLight===!0?h:l,i.localClippingEnabled&&W.clipShadows===!0&&Array.isArray(W.clippingPlanes)&&W.clippingPlanes.length!==0||W.displacementMap&&W.displacementScale!==0||W.alphaMap&&W.alphaTest>0||W.map&&W.alphaTest>0||W.alphaToCoverage===!0){let st=G.uuid,ht=W.uuid,j=u[st];j===void 0&&(j={},u[st]=j);let et=j[ht];et===void 0&&(et=G.clone(),j[ht]=et,W.addEventListener("dispose",T)),G=et}if(G.visible=W.visible,G.wireframe=W.wireframe,F===Aa?G.side=W.shadowSide!==null?W.shadowSide:W.side:G.side=W.shadowSide!==null?W.shadowSide:v[W.side],G.alphaMap=W.alphaMap,G.alphaTest=W.alphaToCoverage===!0?.5:W.alphaTest,G.map=W.map,G.clipShadows=W.clipShadows,G.clippingPlanes=W.clippingPlanes,G.clipIntersection=W.clipIntersection,G.displacementMap=W.displacementMap,G.displacementScale=W.displacementScale,G.displacementBias=W.displacementBias,G.wireframeLinewidth=W.wireframeLinewidth,G.linewidth=W.linewidth,A.isPointLight===!0&&G.isMeshDistanceMaterial===!0){let st=i.properties.get(G);st.light=A}return G}function I(O,W,A,F,G){if(O.visible===!1)return;if(O.layers.test(W.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&G===Aa)&&(!O.frustumCulled||O.intersectsFrustum(n))){O.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,O.matrixWorld);let ht=t.update(O),j=O.material;if(Array.isArray(j)){let et=ht.groups;for(let pt=0,gt=et.length;pt<gt;pt++){let At=et[pt],_t=j[At.materialIndex];if(_t&&_t.visible){let wt=$(O,_t,F,G);O.onBeforeShadow(i,O,W,A,ht,wt,At),i.renderBufferDirect(A,null,ht,wt,O,At),O.onAfterShadow(i,O,W,A,ht,wt,At)}}}else if(j.visible){let et=$(O,j,F,G);O.onBeforeShadow(i,O,W,A,ht,et,null),i.renderBufferDirect(A,null,ht,et,O,null),O.onAfterShadow(i,O,W,A,ht,et,null)}}let st=O.children;for(let ht=0,j=st.length;ht<j;ht++)I(st[ht],W,A,F,G)}function T(O){O.target.removeEventListener("dispose",T);for(let A in u){let F=u[A],G=O.target.uuid;G in F&&(F[G].dispose(),delete F[G])}}}function Vb(i,t){function e(){let Q=!1,qt=new an,St=null,Ht=new an(0,0,0,0);return{setMask:function(Kt){St!==Kt&&!Q&&(i.colorMask(Kt,Kt,Kt,Kt),St=Kt)},setLocked:function(Kt){Q=Kt},setClear:function(Kt,Tt,se,ne,tn){tn===!0&&(Kt*=ne,Tt*=ne,se*=ne),qt.set(Kt,Tt,se,ne),Ht.equals(qt)===!1&&(i.clearColor(Kt,Tt,se,ne),Ht.copy(qt))},reset:function(){Q=!1,St=null,Ht.set(-1,0,0,0)}}}function n(){let Q=!1,qt=!1,St=null,Ht=null,Kt=null;return{setReversed:function(Tt){if(qt!==Tt){let se=t.get("EXT_clip_control");Tt?se.clipControlEXT(se.LOWER_LEFT_EXT,se.ZERO_TO_ONE_EXT):se.clipControlEXT(se.LOWER_LEFT_EXT,se.NEGATIVE_ONE_TO_ONE_EXT),qt=Tt;let ne=Kt;Kt=null,this.setClear(ne)}},getReversed:function(){return qt},setTest:function(Tt){Tt?yt(i.DEPTH_TEST):Ut(i.DEPTH_TEST)},setMask:function(Tt){St!==Tt&&!Q&&(i.depthMask(Tt),St=Tt)},setFunc:function(Tt){if(qt&&(Tt=w0[Tt]),Ht!==Tt){switch(Tt){case Tc:i.depthFunc(i.NEVER);break;case Ac:i.depthFunc(i.ALWAYS);break;case Cc:i.depthFunc(i.LESS);break;case pa:i.depthFunc(i.LEQUAL);break;case Rc:i.depthFunc(i.EQUAL);break;case Ic:i.depthFunc(i.GEQUAL);break;case Pc:i.depthFunc(i.GREATER);break;case Lc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ht=Tt}},setLocked:function(Tt){Q=Tt},setClear:function(Tt){Kt!==Tt&&(Kt=Tt,qt&&(Tt=1-Tt),i.clearDepth(Tt))},reset:function(){Q=!1,St=null,Ht=null,Kt=null,qt=!1}}}function s(){let Q=!1,qt=null,St=null,Ht=null,Kt=null,Tt=null,se=null,ne=null,tn=null;return{setTest:function(Ze){Q||(Ze?yt(i.STENCIL_TEST):Ut(i.STENCIL_TEST))},setMask:function(Ze){qt!==Ze&&!Q&&(i.stencilMask(Ze),qt=Ze)},setFunc:function(Ze,$n,oi){(St!==Ze||Ht!==$n||Kt!==oi)&&(i.stencilFunc(Ze,$n,oi),St=Ze,Ht=$n,Kt=oi)},setOp:function(Ze,$n,oi){(Tt!==Ze||se!==$n||ne!==oi)&&(i.stencilOp(Ze,$n,oi),Tt=Ze,se=$n,ne=oi)},setLocked:function(Ze){Q=Ze},setClear:function(Ze){tn!==Ze&&(i.clearStencil(Ze),tn=Ze)},reset:function(){Q=!1,qt=null,St=null,Ht=null,Kt=null,Tt=null,se=null,ne=null,tn=null}}}let r=new e,a=new n,l=new s,h=new WeakMap,u=new WeakMap,d={},v={},g={},S=new WeakMap,w=[],L=null,_=!1,m=null,z=null,$=null,I=null,T=null,O=null,W=null,A=new xe(0,0,0),F=0,G=!1,X=null,st=null,ht=null,j=null,et=null,pt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),gt=!1,At=0,_t=i.getParameter(i.VERSION);_t.indexOf("WebGL")!==-1?(At=parseFloat(/^WebGL (\d)/.exec(_t)[1]),gt=At>=1):_t.indexOf("OpenGL ES")!==-1&&(At=parseFloat(/^OpenGL ES (\d)/.exec(_t)[1]),gt=At>=2);let wt=null,bt={},Wt=i.getParameter(i.SCISSOR_BOX),te=i.getParameter(i.VIEWPORT),Ye=new an().fromArray(Wt),Le=new an().fromArray(te);function Ve(Q,qt,St,Ht){let Kt=new Uint8Array(4),Tt=i.createTexture();i.bindTexture(Q,Tt),i.texParameteri(Q,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(Q,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let se=0;se<St;se++)Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?i.texImage3D(qt,0,i.RGBA,1,1,Ht,0,i.RGBA,i.UNSIGNED_BYTE,Kt):i.texImage2D(qt+se,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Kt);return Tt}let vt={};vt[i.TEXTURE_2D]=Ve(i.TEXTURE_2D,i.TEXTURE_2D,1),vt[i.TEXTURE_CUBE_MAP]=Ve(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),vt[i.TEXTURE_2D_ARRAY]=Ve(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),vt[i.TEXTURE_3D]=Ve(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),l.setClear(0),yt(i.DEPTH_TEST),a.setFunc(pa),Pt(!1),Bt(Hd),yt(i.CULL_FACE),Rt(ls);function yt(Q){d[Q]!==!0&&(i.enable(Q),d[Q]=!0)}function Ut(Q){d[Q]!==!1&&(i.disable(Q),d[Q]=!1)}function he(Q,qt){return g[Q]!==qt?(i.bindFramebuffer(Q,qt),g[Q]=qt,Q===i.DRAW_FRAMEBUFFER&&(g[i.FRAMEBUFFER]=qt),Q===i.FRAMEBUFFER&&(g[i.DRAW_FRAMEBUFFER]=qt),!0):!1}function jt(Q,qt){let St=w,Ht=!1;if(Q){St=S.get(qt),St===void 0&&(St=[],S.set(qt,St));let Kt=Q.textures;if(St.length!==Kt.length||St[0]!==i.COLOR_ATTACHMENT0){for(let Tt=0,se=Kt.length;Tt<se;Tt++)St[Tt]=i.COLOR_ATTACHMENT0+Tt;St.length=Kt.length,Ht=!0}}else St[0]!==i.BACK&&(St[0]=i.BACK,Ht=!0);Ht&&i.drawBuffers(St)}function ge(Q){return L!==Q?(i.useProgram(Q),L=Q,!0):!1}let ee={[Ir]:i.FUNC_ADD,[Xm]:i.FUNC_SUBTRACT,[qm]:i.FUNC_REVERSE_SUBTRACT};ee[Ym]=i.MIN,ee[Zm]=i.MAX;let nt={[Jm]:i.ZERO,[jm]:i.ONE,[Km]:i.SRC_COLOR,[qd]:i.SRC_ALPHA,[s0]:i.SRC_ALPHA_SATURATE,[n0]:i.DST_COLOR,[t0]:i.DST_ALPHA,[Qm]:i.ONE_MINUS_SRC_COLOR,[Yd]:i.ONE_MINUS_SRC_ALPHA,[i0]:i.ONE_MINUS_DST_COLOR,[e0]:i.ONE_MINUS_DST_ALPHA,[r0]:i.CONSTANT_COLOR,[a0]:i.ONE_MINUS_CONSTANT_COLOR,[o0]:i.CONSTANT_ALPHA,[l0]:i.ONE_MINUS_CONSTANT_ALPHA};function Rt(Q,qt,St,Ht,Kt,Tt,se,ne,tn,Ze){if(Q===ls){_===!0&&(Ut(i.BLEND),_=!1);return}if(_===!1&&(yt(i.BLEND),_=!0),Q!==Wm){if(Q!==m||Ze!==G){if((z!==Ir||T!==Ir)&&(i.blendEquation(i.FUNC_ADD),z=Ir,T=Ir),Ze)switch(Q){case Ca:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Gd:i.blendFunc(i.ONE,i.ONE);break;case Wd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Xd:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:be("WebGLState: Invalid blending: ",Q);break}else switch(Q){case Ca:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Gd:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Wd:be("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Xd:be("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:be("WebGLState: Invalid blending: ",Q);break}$=null,I=null,O=null,W=null,A.set(0,0,0),F=0,m=Q,G=Ze}return}Kt=Kt||qt,Tt=Tt||St,se=se||Ht,(qt!==z||Kt!==T)&&(i.blendEquationSeparate(ee[qt],ee[Kt]),z=qt,T=Kt),(St!==$||Ht!==I||Tt!==O||se!==W)&&(i.blendFuncSeparate(nt[St],nt[Ht],nt[Tt],nt[se]),$=St,I=Ht,O=Tt,W=se),(ne.equals(A)===!1||tn!==F)&&(i.blendColor(ne.r,ne.g,ne.b,tn),A.copy(ne),F=tn),m=Q,G=!1}function V(Q,qt){Q.side===os?Ut(i.CULL_FACE):yt(i.CULL_FACE);let St=Q.side===si;qt&&(St=!St),Pt(St),Q.blending===Ca&&Q.transparent===!1?Rt(ls):Rt(Q.blending,Q.blendEquation,Q.blendSrc,Q.blendDst,Q.blendEquationAlpha,Q.blendSrcAlpha,Q.blendDstAlpha,Q.blendColor,Q.blendAlpha,Q.premultipliedAlpha),a.setFunc(Q.depthFunc),a.setTest(Q.depthTest),a.setMask(Q.depthWrite),r.setMask(Q.colorWrite);let Ht=Q.stencilWrite;l.setTest(Ht),Ht&&(l.setMask(Q.stencilWriteMask),l.setFunc(Q.stencilFunc,Q.stencilRef,Q.stencilFuncMask),l.setOp(Q.stencilFail,Q.stencilZFail,Q.stencilZPass)),fe(Q.polygonOffset,Q.polygonOffsetFactor,Q.polygonOffsetUnits),Q.alphaToCoverage===!0?yt(i.SAMPLE_ALPHA_TO_COVERAGE):Ut(i.SAMPLE_ALPHA_TO_COVERAGE)}function Pt(Q){X!==Q&&(Q?i.frontFace(i.CW):i.frontFace(i.CCW),X=Q)}function Bt(Q){Q!==Vm?(yt(i.CULL_FACE),Q!==st&&(Q===Hd?i.cullFace(i.BACK):Q===Hm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ut(i.CULL_FACE),st=Q}function ce(Q){Q!==ht&&(gt&&i.lineWidth(Q),ht=Q)}function fe(Q,qt,St){Q?(yt(i.POLYGON_OFFSET_FILL),(j!==qt||et!==St)&&(j=qt,et=St,a.getReversed()&&(qt=-qt),i.polygonOffset(qt,St))):Ut(i.POLYGON_OFFSET_FILL)}function de(Q){Q?yt(i.SCISSOR_TEST):Ut(i.SCISSOR_TEST)}function Te(Q){Q===void 0&&(Q=i.TEXTURE0+pt-1),wt!==Q&&(i.activeTexture(Q),wt=Q)}function Y(Q,qt,St){St===void 0&&(wt===null?St=i.TEXTURE0+pt-1:St=wt);let Ht=bt[St];Ht===void 0&&(Ht={type:void 0,texture:void 0},bt[St]=Ht),(Ht.type!==Q||Ht.texture!==qt)&&(wt!==St&&(i.activeTexture(St),wt=St),i.bindTexture(Q,qt||vt[Q]),Ht.type=Q,Ht.texture=qt)}function Fe(){let Q=bt[wt];Q!==void 0&&Q.type!==void 0&&(i.bindTexture(Q.type,null),Q.type=void 0,Q.texture=void 0)}function De(){try{i.compressedTexImage2D(...arguments)}catch(Q){be("WebGLState:",Q)}}function U(){try{i.compressedTexImage3D(...arguments)}catch(Q){be("WebGLState:",Q)}}function E(){try{i.texSubImage2D(...arguments)}catch(Q){be("WebGLState:",Q)}}function it(){try{i.texSubImage3D(...arguments)}catch(Q){be("WebGLState:",Q)}}function lt(){try{i.compressedTexSubImage2D(...arguments)}catch(Q){be("WebGLState:",Q)}}function xt(){try{i.compressedTexSubImage3D(...arguments)}catch(Q){be("WebGLState:",Q)}}function Lt(){try{i.texStorage2D(...arguments)}catch(Q){be("WebGLState:",Q)}}function kt(){try{i.texStorage3D(...arguments)}catch(Q){be("WebGLState:",Q)}}function mt(){try{i.texImage2D(...arguments)}catch(Q){be("WebGLState:",Q)}}function ut(){try{i.texImage3D(...arguments)}catch(Q){be("WebGLState:",Q)}}function Xt(Q){return v[Q]!==void 0?v[Q]:i.getParameter(Q)}function ue(Q,qt){v[Q]!==qt&&(i.pixelStorei(Q,qt),v[Q]=qt)}function Yt(Q){Ye.equals(Q)===!1&&(i.scissor(Q.x,Q.y,Q.z,Q.w),Ye.copy(Q))}function Vt(Q){Le.equals(Q)===!1&&(i.viewport(Q.x,Q.y,Q.z,Q.w),Le.copy(Q))}function oe(Q,qt){let St=u.get(qt);St===void 0&&(St=new WeakMap,u.set(qt,St));let Ht=St.get(Q);Ht===void 0&&(Ht=i.getUniformBlockIndex(qt,Q.name),St.set(Q,Ht))}function pe(Q,qt){let Ht=u.get(qt).get(Q);h.get(qt)!==Ht&&(i.uniformBlockBinding(qt,Ht,Q.__bindingPointIndex),h.set(qt,Ht))}function Ae(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),d={},v={},wt=null,bt={},g={},S=new WeakMap,w=[],L=null,_=!1,m=null,z=null,$=null,I=null,T=null,O=null,W=null,A=new xe(0,0,0),F=0,G=!1,X=null,st=null,ht=null,j=null,et=null,Ye.set(0,0,i.canvas.width,i.canvas.height),Le.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),l.reset()}return{buffers:{color:r,depth:a,stencil:l},enable:yt,disable:Ut,bindFramebuffer:he,drawBuffers:jt,useProgram:ge,setBlending:Rt,setMaterial:V,setFlipSided:Pt,setCullFace:Bt,setLineWidth:ce,setPolygonOffset:fe,setScissorTest:de,activeTexture:Te,bindTexture:Y,unbindTexture:Fe,compressedTexImage2D:De,compressedTexImage3D:U,texImage2D:mt,texImage3D:ut,pixelStorei:ue,getParameter:Xt,updateUBOMapping:oe,uniformBlockBinding:pe,texStorage2D:Lt,texStorage3D:kt,texSubImage2D:E,texSubImage3D:it,compressedTexSubImage2D:lt,compressedTexSubImage3D:xt,scissor:Yt,viewport:Vt,reset:Ae}}function Hb(i,t,e,n,s,r,a){let l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new zt,d=new WeakMap,v=new Set,g,S=new WeakMap,w=!1;try{w=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function L(U,E){return w?new OffscreenCanvas(U,E):Co("canvas")}function _(U,E,it){let lt=1,xt=De(U);if((xt.width>it||xt.height>it)&&(lt=it/Math.max(xt.width,xt.height)),lt<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){let Lt=Math.floor(lt*xt.width),kt=Math.floor(lt*xt.height);g===void 0&&(g=L(Lt,kt));let mt=E?L(Lt,kt):g;return mt.width=Lt,mt.height=kt,mt.getContext("2d").drawImage(U,0,0,Lt,kt),ye("WebGLRenderer: Texture has been resized from ("+xt.width+"x"+xt.height+") to ("+Lt+"x"+kt+")."),mt}else return"data"in U&&ye("WebGLRenderer: Image in DataTexture is too big ("+xt.width+"x"+xt.height+")."),U;return U}function m(U){return U.generateMipmaps}function z(U){i.generateMipmap(U)}function $(U){return U.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?i.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function I(U,E,it,lt,xt,Lt=!1){if(U!==null){if(i[U]!==void 0)return i[U];ye("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let kt;lt&&(kt=t.get("EXT_texture_norm16"),kt||ye("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let mt=E;if(E===i.RED&&(it===i.FLOAT&&(mt=i.R32F),it===i.HALF_FLOAT&&(mt=i.R16F),it===i.UNSIGNED_BYTE&&(mt=i.R8),it===i.UNSIGNED_SHORT&&kt&&(mt=kt.R16_EXT),it===i.SHORT&&kt&&(mt=kt.R16_SNORM_EXT)),E===i.RED_INTEGER&&(it===i.UNSIGNED_BYTE&&(mt=i.R8UI),it===i.UNSIGNED_SHORT&&(mt=i.R16UI),it===i.UNSIGNED_INT&&(mt=i.R32UI),it===i.BYTE&&(mt=i.R8I),it===i.SHORT&&(mt=i.R16I),it===i.INT&&(mt=i.R32I)),E===i.RG&&(it===i.FLOAT&&(mt=i.RG32F),it===i.HALF_FLOAT&&(mt=i.RG16F),it===i.UNSIGNED_BYTE&&(mt=i.RG8),it===i.UNSIGNED_SHORT&&kt&&(mt=kt.RG16_EXT),it===i.SHORT&&kt&&(mt=kt.RG16_SNORM_EXT)),E===i.RG_INTEGER&&(it===i.UNSIGNED_BYTE&&(mt=i.RG8UI),it===i.UNSIGNED_SHORT&&(mt=i.RG16UI),it===i.UNSIGNED_INT&&(mt=i.RG32UI),it===i.BYTE&&(mt=i.RG8I),it===i.SHORT&&(mt=i.RG16I),it===i.INT&&(mt=i.RG32I)),E===i.RGB_INTEGER&&(it===i.UNSIGNED_BYTE&&(mt=i.RGB8UI),it===i.UNSIGNED_SHORT&&(mt=i.RGB16UI),it===i.UNSIGNED_INT&&(mt=i.RGB32UI),it===i.BYTE&&(mt=i.RGB8I),it===i.SHORT&&(mt=i.RGB16I),it===i.INT&&(mt=i.RGB32I)),E===i.RGBA_INTEGER&&(it===i.UNSIGNED_BYTE&&(mt=i.RGBA8UI),it===i.UNSIGNED_SHORT&&(mt=i.RGBA16UI),it===i.UNSIGNED_INT&&(mt=i.RGBA32UI),it===i.BYTE&&(mt=i.RGBA8I),it===i.SHORT&&(mt=i.RGBA16I),it===i.INT&&(mt=i.RGBA32I)),E===i.RGB&&(it===i.UNSIGNED_SHORT&&kt&&(mt=kt.RGB16_EXT),it===i.SHORT&&kt&&(mt=kt.RGB16_SNORM_EXT),it===i.UNSIGNED_INT_5_9_9_9_REV&&(mt=i.RGB9_E5),it===i.UNSIGNED_INT_10F_11F_11F_REV&&(mt=i.R11F_G11F_B10F)),E===i.RGBA){let ut=Lt?Ao:Xe.getTransfer(xt);it===i.FLOAT&&(mt=i.RGBA32F),it===i.HALF_FLOAT&&(mt=i.RGBA16F),it===i.UNSIGNED_BYTE&&(mt=ut===rn?i.SRGB8_ALPHA8:i.RGBA8),it===i.UNSIGNED_SHORT&&kt&&(mt=kt.RGBA16_EXT),it===i.SHORT&&kt&&(mt=kt.RGBA16_SNORM_EXT),it===i.UNSIGNED_SHORT_4_4_4_4&&(mt=i.RGBA4),it===i.UNSIGNED_SHORT_5_5_5_1&&(mt=i.RGB5_A1)}return(mt===i.R16F||mt===i.R32F||mt===i.RG16F||mt===i.RG32F||mt===i.RGBA16F||mt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),mt}function T(U,E){let it;return U?E===null||E===Xi||E===Ia?it=i.DEPTH24_STENCIL8:E===Ci?it=i.DEPTH32F_STENCIL8:E===Ra&&(it=i.DEPTH24_STENCIL8,ye("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Xi||E===Ia?it=i.DEPTH_COMPONENT24:E===Ci?it=i.DEPTH_COMPONENT32F:E===Ra&&(it=i.DEPTH_COMPONENT16),it}function O(U,E){return m(U)===!0||U.isFramebufferTexture&&U.minFilter!==Fn&&U.minFilter!==Gn?Math.log2(Math.max(E.width,E.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?E.mipmaps.length:1}function W(U){let E=U.target;E.removeEventListener("dispose",W),F(E),E.isVideoTexture&&d.delete(E),E.isHTMLTexture&&v.delete(E)}function A(U){let E=U.target;E.removeEventListener("dispose",A),X(E)}function F(U){let E=n.get(U);if(E.__webglInit===void 0)return;let it=U.source,lt=S.get(it);if(lt){let xt=lt[E.__cacheKey];xt.usedTimes--,xt.usedTimes===0&&G(U),Object.keys(lt).length===0&&S.delete(it)}n.remove(U)}function G(U){let E=n.get(U);i.deleteTexture(E.__webglTexture);let it=U.source,lt=S.get(it);delete lt[E.__cacheKey],a.memory.textures--}function X(U){let E=n.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),n.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let lt=0;lt<6;lt++){if(Array.isArray(E.__webglFramebuffer[lt]))for(let xt=0;xt<E.__webglFramebuffer[lt].length;xt++)i.deleteFramebuffer(E.__webglFramebuffer[lt][xt]);else i.deleteFramebuffer(E.__webglFramebuffer[lt]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[lt])}else{if(Array.isArray(E.__webglFramebuffer))for(let lt=0;lt<E.__webglFramebuffer.length;lt++)i.deleteFramebuffer(E.__webglFramebuffer[lt]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let lt=0;lt<E.__webglColorRenderbuffer.length;lt++)E.__webglColorRenderbuffer[lt]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[lt]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let it=U.textures;for(let lt=0,xt=it.length;lt<xt;lt++){let Lt=n.get(it[lt]);Lt.__webglTexture&&(i.deleteTexture(Lt.__webglTexture),a.memory.textures--),n.remove(it[lt])}n.remove(U)}let st=0;function ht(){st=0}function j(){return st}function et(U){st=U}function pt(){let U=st;return U>=s.maxTextures&&ye("WebGLTextures: Trying to use "+(U+1)+" texture units while this GPU supports only "+s.maxTextures),st+=1,U}function gt(U){let E=[];return E.push(U.wrapS),E.push(U.wrapT),E.push(U.wrapR||0),E.push(U.magFilter),E.push(U.minFilter),E.push(U.anisotropy),E.push(U.internalFormat),E.push(U.format),E.push(U.type),E.push(U.generateMipmaps),E.push(U.premultiplyAlpha),E.push(U.flipY),E.push(U.unpackAlignment),E.push(U.colorSpace),E.join()}function At(U,E){let it=n.get(U);if(U.isVideoTexture&&Y(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&it.__version!==U.version){let lt=U.image;if(lt===null)ye("WebGLRenderer: Texture marked for update but no image data found.");else if(lt.complete===!1)ye("WebGLRenderer: Texture marked for update but image is incomplete");else{Ut(it,U,E);return}}else U.isExternalTexture&&(it.__webglTexture=U.sourceTexture?U.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,it.__webglTexture,i.TEXTURE0+E)}function _t(U,E){let it=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&it.__version!==U.version){Ut(it,U,E);return}else U.isExternalTexture&&(it.__webglTexture=U.sourceTexture?U.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,it.__webglTexture,i.TEXTURE0+E)}function wt(U,E){let it=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&it.__version!==U.version){Ut(it,U,E);return}e.bindTexture(i.TEXTURE_3D,it.__webglTexture,i.TEXTURE0+E)}function bt(U,E){let it=n.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&it.__version!==U.version){he(it,U,E);return}e.bindTexture(i.TEXTURE_CUBE_MAP,it.__webglTexture,i.TEXTURE0+E)}let Wt={[Dc]:i.REPEAT,[es]:i.CLAMP_TO_EDGE,[Nc]:i.MIRRORED_REPEAT},te={[Fn]:i.NEAREST,[u0]:i.NEAREST_MIPMAP_NEAREST,[ll]:i.NEAREST_MIPMAP_LINEAR,[Gn]:i.LINEAR,[gh]:i.LINEAR_MIPMAP_NEAREST,[tr]:i.LINEAR_MIPMAP_LINEAR},Ye={[m0]:i.NEVER,[y0]:i.ALWAYS,[g0]:i.LESS,[eu]:i.LEQUAL,[_0]:i.EQUAL,[nu]:i.GEQUAL,[x0]:i.GREATER,[v0]:i.NOTEQUAL};function Le(U,E){if(E.type===Ci&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Gn||E.magFilter===gh||E.magFilter===ll||E.magFilter===tr||E.minFilter===Gn||E.minFilter===gh||E.minFilter===ll||E.minFilter===tr)&&ye("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(U,i.TEXTURE_WRAP_S,Wt[E.wrapS]),i.texParameteri(U,i.TEXTURE_WRAP_T,Wt[E.wrapT]),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,Wt[E.wrapR]),i.texParameteri(U,i.TEXTURE_MAG_FILTER,te[E.magFilter]),i.texParameteri(U,i.TEXTURE_MIN_FILTER,te[E.minFilter]),E.compareFunction&&(i.texParameteri(U,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(U,i.TEXTURE_COMPARE_FUNC,Ye[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Fn||E.minFilter!==ll&&E.minFilter!==tr||E.type===Ci&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let it=t.get("EXT_texture_filter_anisotropic");i.texParameterf(U,it.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function Ve(U,E){let it=!1;U.__webglInit===void 0&&(U.__webglInit=!0,E.addEventListener("dispose",W));let lt=E.source,xt=S.get(lt);xt===void 0&&(xt={},S.set(lt,xt));let Lt=gt(E);if(Lt!==U.__cacheKey){xt[Lt]===void 0&&(xt[Lt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,it=!0),xt[Lt].usedTimes++;let kt=xt[U.__cacheKey];kt!==void 0&&(xt[U.__cacheKey].usedTimes--,kt.usedTimes===0&&G(E)),U.__cacheKey=Lt,U.__webglTexture=xt[Lt].texture}return it}function vt(U,E,it){return Math.floor(Math.floor(U/it)/E)}function yt(U,E,it,lt){let Lt=U.updateRanges;if(Lt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,E.width,E.height,it,lt,E.data);else{Lt.sort((ue,Yt)=>ue.start-Yt.start);let kt=0;for(let ue=1;ue<Lt.length;ue++){let Yt=Lt[kt],Vt=Lt[ue],oe=Yt.start+Yt.count,pe=vt(Vt.start,E.width,4),Ae=vt(Yt.start,E.width,4);Vt.start<=oe+1&&pe===Ae&&vt(Vt.start+Vt.count-1,E.width,4)===pe?Yt.count=Math.max(Yt.count,Vt.start+Vt.count-Yt.start):(++kt,Lt[kt]=Vt)}Lt.length=kt+1;let mt=e.getParameter(i.UNPACK_ROW_LENGTH),ut=e.getParameter(i.UNPACK_SKIP_PIXELS),Xt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,E.width);for(let ue=0,Yt=Lt.length;ue<Yt;ue++){let Vt=Lt[ue],oe=Math.floor(Vt.start/4),pe=Math.ceil(Vt.count/4),Ae=oe%E.width,Q=Math.floor(oe/E.width),qt=pe,St=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Ae),e.pixelStorei(i.UNPACK_SKIP_ROWS,Q),e.texSubImage2D(i.TEXTURE_2D,0,Ae,Q,qt,St,it,lt,E.data)}U.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,mt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,ut),e.pixelStorei(i.UNPACK_SKIP_ROWS,Xt)}}function Ut(U,E,it){let lt=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(lt=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(lt=i.TEXTURE_3D);let xt=Ve(U,E),Lt=E.source;e.bindTexture(lt,U.__webglTexture,i.TEXTURE0+it);let kt=n.get(Lt);if(Lt.version!==kt.__version||xt===!0){if(e.activeTexture(i.TEXTURE0+it),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){let St=Xe.getPrimaries(Xe.workingColorSpace),Ht=E.colorSpace===Ps?null:Xe.getPrimaries(E.colorSpace),Kt=E.colorSpace===Ps||St===Ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt)}e.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment);let ut=_(E.image,!1,s.maxTextureSize);ut=Fe(E,ut);let Xt=r.convert(E.format,E.colorSpace),ue=r.convert(E.type),Yt=I(E.internalFormat,Xt,ue,E.normalized,E.colorSpace,E.isVideoTexture);Le(lt,E);let Vt,oe=E.mipmaps,pe=E.isVideoTexture!==!0,Ae=kt.__version===void 0||xt===!0,Q=Lt.dataReady,qt=O(E,ut);if(E.isDepthTexture)Yt=T(E.format===er,E.type),Ae&&(pe?e.texStorage2D(i.TEXTURE_2D,1,Yt,ut.width,ut.height):e.texImage2D(i.TEXTURE_2D,0,Yt,ut.width,ut.height,0,Xt,ue,null));else if(E.isDataTexture)if(oe.length>0){pe&&Ae&&e.texStorage2D(i.TEXTURE_2D,qt,Yt,oe[0].width,oe[0].height);for(let St=0,Ht=oe.length;St<Ht;St++)Vt=oe[St],pe?Q&&e.texSubImage2D(i.TEXTURE_2D,St,0,0,Vt.width,Vt.height,Xt,ue,Vt.data):e.texImage2D(i.TEXTURE_2D,St,Yt,Vt.width,Vt.height,0,Xt,ue,Vt.data);E.generateMipmaps=!1}else pe?(Ae&&e.texStorage2D(i.TEXTURE_2D,qt,Yt,ut.width,ut.height),Q&&yt(E,ut,Xt,ue)):e.texImage2D(i.TEXTURE_2D,0,Yt,ut.width,ut.height,0,Xt,ue,ut.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){pe&&Ae&&e.texStorage3D(i.TEXTURE_2D_ARRAY,qt,Yt,oe[0].width,oe[0].height,ut.depth);for(let St=0,Ht=oe.length;St<Ht;St++)if(Vt=oe[St],E.format!==Ri)if(Xt!==null)if(pe){if(Q)if(E.layerUpdates.size>0){let Kt=xf(Vt.width,Vt.height,E.format,E.type);for(let Tt of E.layerUpdates){let se=Vt.data.subarray(Tt*Kt/Vt.data.BYTES_PER_ELEMENT,(Tt+1)*Kt/Vt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,St,0,0,Tt,Vt.width,Vt.height,1,Xt,se)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,St,0,0,0,Vt.width,Vt.height,ut.depth,Xt,Vt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,St,Yt,Vt.width,Vt.height,ut.depth,0,Vt.data,0,0);else ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else pe?Q&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,St,0,0,0,Vt.width,Vt.height,ut.depth,Xt,ue,Vt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,St,Yt,Vt.width,Vt.height,ut.depth,0,Xt,ue,Vt.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{pe&&Ae&&e.texStorage2D(i.TEXTURE_2D,qt,Yt,oe[0].width,oe[0].height);for(let St=0,Ht=oe.length;St<Ht;St++)Vt=oe[St],E.format!==Ri?Xt!==null?pe?Q&&e.compressedTexSubImage2D(i.TEXTURE_2D,St,0,0,Vt.width,Vt.height,Xt,Vt.data):e.compressedTexImage2D(i.TEXTURE_2D,St,Yt,Vt.width,Vt.height,0,Vt.data):ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pe?Q&&e.texSubImage2D(i.TEXTURE_2D,St,0,0,Vt.width,Vt.height,Xt,ue,Vt.data):e.texImage2D(i.TEXTURE_2D,St,Yt,Vt.width,Vt.height,0,Xt,ue,Vt.data)}else if(E.isDataArrayTexture)if(pe){if(Ae&&e.texStorage3D(i.TEXTURE_2D_ARRAY,qt,Yt,ut.width,ut.height,ut.depth),Q)if(E.layerUpdates.size>0){let St=xf(ut.width,ut.height,E.format,E.type);for(let Ht of E.layerUpdates){let Kt=ut.data.subarray(Ht*St/ut.data.BYTES_PER_ELEMENT,(Ht+1)*St/ut.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ht,ut.width,ut.height,1,Xt,ue,Kt)}E.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ut.width,ut.height,ut.depth,Xt,ue,ut.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Yt,ut.width,ut.height,ut.depth,0,Xt,ue,ut.data);else if(E.isData3DTexture)pe?(Ae&&e.texStorage3D(i.TEXTURE_3D,qt,Yt,ut.width,ut.height,ut.depth),Q&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ut.width,ut.height,ut.depth,Xt,ue,ut.data)):e.texImage3D(i.TEXTURE_3D,0,Yt,ut.width,ut.height,ut.depth,0,Xt,ue,ut.data);else if(E.isFramebufferTexture){if(Ae)if(pe)e.texStorage2D(i.TEXTURE_2D,qt,Yt,ut.width,ut.height);else{let St=ut.width,Ht=ut.height;for(let Kt=0;Kt<qt;Kt++)e.texImage2D(i.TEXTURE_2D,Kt,Yt,St,Ht,0,Xt,ue,null),St>>=1,Ht>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in i){let St=i.canvas;if(St.hasAttribute("layoutsubtree")||St.setAttribute("layoutsubtree","true"),ut.parentNode!==St){St.appendChild(ut),v.add(E),St.onpaint=Ht=>{let Kt=Ht.changedElements;for(let Tt of v)Kt.includes(Tt.image)&&(Tt.needsUpdate=!0)},St.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ut);else{let Kt=i.RGBA,Tt=i.RGBA,se=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Kt,Tt,se,ut)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(oe.length>0){if(pe&&Ae){let St=De(oe[0]);e.texStorage2D(i.TEXTURE_2D,qt,Yt,St.width,St.height)}for(let St=0,Ht=oe.length;St<Ht;St++)Vt=oe[St],pe?Q&&e.texSubImage2D(i.TEXTURE_2D,St,0,0,Xt,ue,Vt):e.texImage2D(i.TEXTURE_2D,St,Yt,Xt,ue,Vt);E.generateMipmaps=!1}else if(pe){if(Ae){let St=De(ut);e.texStorage2D(i.TEXTURE_2D,qt,Yt,St.width,St.height)}Q&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Xt,ue,ut)}else e.texImage2D(i.TEXTURE_2D,0,Yt,Xt,ue,ut);m(E)&&z(lt),kt.__version=Lt.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function he(U,E,it){if(E.image.length!==6)return;let lt=Ve(U,E),xt=E.source;e.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+it);let Lt=n.get(xt);if(xt.version!==Lt.__version||lt===!0){e.activeTexture(i.TEXTURE0+it);let kt=Xe.getPrimaries(Xe.workingColorSpace),mt=E.colorSpace===Ps?null:Xe.getPrimaries(E.colorSpace),ut=E.colorSpace===Ps||kt===mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);let Xt=E.isCompressedTexture||E.image[0].isCompressedTexture,ue=E.image[0]&&E.image[0].isDataTexture,Yt=[];for(let Tt=0;Tt<6;Tt++)!Xt&&!ue?Yt[Tt]=_(E.image[Tt],!0,s.maxCubemapSize):Yt[Tt]=ue?E.image[Tt].image:E.image[Tt],Yt[Tt]=Fe(E,Yt[Tt]);let Vt=Yt[0],oe=r.convert(E.format,E.colorSpace),pe=r.convert(E.type),Ae=I(E.internalFormat,oe,pe,E.normalized,E.colorSpace),Q=E.isVideoTexture!==!0,qt=Lt.__version===void 0||lt===!0,St=xt.dataReady,Ht=O(E,Vt);Le(i.TEXTURE_CUBE_MAP,E);let Kt;if(Xt){Q&&qt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Ht,Ae,Vt.width,Vt.height);for(let Tt=0;Tt<6;Tt++){Kt=Yt[Tt].mipmaps;for(let se=0;se<Kt.length;se++){let ne=Kt[se];E.format!==Ri?oe!==null?Q?St&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,se,0,0,ne.width,ne.height,oe,ne.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,se,Ae,ne.width,ne.height,0,ne.data):ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Q?St&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,se,0,0,ne.width,ne.height,oe,pe,ne.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,se,Ae,ne.width,ne.height,0,oe,pe,ne.data)}}}else{if(Kt=E.mipmaps,Q&&qt){Kt.length>0&&Ht++;let Tt=De(Yt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Ht,Ae,Tt.width,Tt.height)}for(let Tt=0;Tt<6;Tt++)if(ue){Q?St&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,0,0,Yt[Tt].width,Yt[Tt].height,oe,pe,Yt[Tt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,Ae,Yt[Tt].width,Yt[Tt].height,0,oe,pe,Yt[Tt].data);for(let se=0;se<Kt.length;se++){let tn=Kt[se].image[Tt].image;Q?St&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,se+1,0,0,tn.width,tn.height,oe,pe,tn.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,se+1,Ae,tn.width,tn.height,0,oe,pe,tn.data)}}else{Q?St&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,0,0,oe,pe,Yt[Tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,Ae,oe,pe,Yt[Tt]);for(let se=0;se<Kt.length;se++){let ne=Kt[se];Q?St&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,se+1,0,0,oe,pe,ne.image[Tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,se+1,Ae,oe,pe,ne.image[Tt])}}}m(E)&&z(i.TEXTURE_CUBE_MAP),Lt.__version=xt.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function jt(U,E,it,lt,xt,Lt){let kt=r.convert(it.format,it.colorSpace),mt=r.convert(it.type),ut=I(it.internalFormat,kt,mt,it.normalized,it.colorSpace),Xt=n.get(E),ue=n.get(it);if(ue.__renderTarget=E,!Xt.__hasExternalTextures){let Yt=Math.max(1,E.width>>Lt),Vt=Math.max(1,E.height>>Lt);xt===i.TEXTURE_3D||xt===i.TEXTURE_2D_ARRAY?e.texImage3D(xt,Lt,ut,Yt,Vt,E.depth,0,kt,mt,null):e.texImage2D(xt,Lt,ut,Yt,Vt,0,kt,mt,null)}e.bindFramebuffer(i.FRAMEBUFFER,U),Te(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,lt,xt,ue.__webglTexture,0,de(E)):(xt===i.TEXTURE_2D||xt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&xt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,lt,xt,ue.__webglTexture,Lt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ge(U,E,it){if(i.bindRenderbuffer(i.RENDERBUFFER,U),E.depthBuffer){let lt=E.depthTexture,xt=lt&&lt.isDepthTexture?lt.type:null,Lt=T(E.stencilBuffer,xt),kt=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Te(E)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de(E),Lt,E.width,E.height):it?i.renderbufferStorageMultisample(i.RENDERBUFFER,de(E),Lt,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Lt,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,kt,i.RENDERBUFFER,U)}else{let lt=E.textures;for(let xt=0;xt<lt.length;xt++){let Lt=lt[xt],kt=r.convert(Lt.format,Lt.colorSpace),mt=r.convert(Lt.type),ut=I(Lt.internalFormat,kt,mt,Lt.normalized,Lt.colorSpace);Te(E)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de(E),ut,E.width,E.height):it?i.renderbufferStorageMultisample(i.RENDERBUFFER,de(E),ut,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,ut,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ee(U,E,it){let lt=E.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,U),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let xt=n.get(E.depthTexture);if(xt.__renderTarget=E,(!xt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),lt){if(xt.__webglInit===void 0&&(xt.__webglInit=!0,E.depthTexture.addEventListener("dispose",W)),xt.__webglTexture===void 0){xt.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,xt.__webglTexture),Le(i.TEXTURE_CUBE_MAP,E.depthTexture);let Xt=r.convert(E.depthTexture.format),ue=r.convert(E.depthTexture.type),Yt;E.depthTexture.format===is?Yt=i.DEPTH_COMPONENT24:E.depthTexture.format===er&&(Yt=i.DEPTH24_STENCIL8);for(let Vt=0;Vt<6;Vt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Vt,0,Yt,E.width,E.height,0,Xt,ue,null)}}else At(E.depthTexture,0);let Lt=xt.__webglTexture,kt=de(E),mt=lt?i.TEXTURE_CUBE_MAP_POSITIVE_X+it:i.TEXTURE_2D,ut=E.depthTexture.format===er?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(E.depthTexture.format===is)Te(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ut,mt,Lt,0,kt):i.framebufferTexture2D(i.FRAMEBUFFER,ut,mt,Lt,0);else if(E.depthTexture.format===er)Te(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ut,mt,Lt,0,kt):i.framebufferTexture2D(i.FRAMEBUFFER,ut,mt,Lt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function nt(U){let E=n.get(U),it=U.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==U.depthTexture){let lt=U.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),lt){let xt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,lt.removeEventListener("dispose",xt)};lt.addEventListener("dispose",xt),E.__depthDisposeCallback=xt}E.__boundDepthTexture=lt}if(U.depthTexture&&!E.__autoAllocateDepthBuffer)if(it)for(let lt=0;lt<6;lt++)ee(E.__webglFramebuffer[lt],U,lt);else{let lt=U.texture.mipmaps;lt&&lt.length>0?ee(E.__webglFramebuffer[0],U,0):ee(E.__webglFramebuffer,U,0)}else if(it){E.__webglDepthbuffer=[];for(let lt=0;lt<6;lt++)if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[lt]),E.__webglDepthbuffer[lt]===void 0)E.__webglDepthbuffer[lt]=i.createRenderbuffer(),ge(E.__webglDepthbuffer[lt],U,!1);else{let xt=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Lt=E.__webglDepthbuffer[lt];i.bindRenderbuffer(i.RENDERBUFFER,Lt),i.framebufferRenderbuffer(i.FRAMEBUFFER,xt,i.RENDERBUFFER,Lt)}}else{let lt=U.texture.mipmaps;if(lt&&lt.length>0?e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),ge(E.__webglDepthbuffer,U,!1);else{let xt=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Lt=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Lt),i.framebufferRenderbuffer(i.FRAMEBUFFER,xt,i.RENDERBUFFER,Lt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Rt(U,E,it){let lt=n.get(U);E!==void 0&&jt(lt.__webglFramebuffer,U,U.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),it!==void 0&&nt(U)}function V(U){let E=U.texture,it=n.get(U),lt=n.get(E);U.addEventListener("dispose",A);let xt=U.textures,Lt=U.isWebGLCubeRenderTarget===!0,kt=xt.length>1;if(kt||(lt.__webglTexture===void 0&&(lt.__webglTexture=i.createTexture()),lt.__version=E.version,a.memory.textures++),Lt){it.__webglFramebuffer=[];for(let mt=0;mt<6;mt++)if(E.mipmaps&&E.mipmaps.length>0){it.__webglFramebuffer[mt]=[];for(let ut=0;ut<E.mipmaps.length;ut++)it.__webglFramebuffer[mt][ut]=i.createFramebuffer()}else it.__webglFramebuffer[mt]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){it.__webglFramebuffer=[];for(let mt=0;mt<E.mipmaps.length;mt++)it.__webglFramebuffer[mt]=i.createFramebuffer()}else it.__webglFramebuffer=i.createFramebuffer();if(kt)for(let mt=0,ut=xt.length;mt<ut;mt++){let Xt=n.get(xt[mt]);Xt.__webglTexture===void 0&&(Xt.__webglTexture=i.createTexture(),a.memory.textures++)}if(U.samples>0&&Te(U)===!1){it.__webglMultisampledFramebuffer=i.createFramebuffer(),it.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,it.__webglMultisampledFramebuffer);for(let mt=0;mt<xt.length;mt++){let ut=xt[mt];it.__webglColorRenderbuffer[mt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,it.__webglColorRenderbuffer[mt]);let Xt=r.convert(ut.format,ut.colorSpace),ue=r.convert(ut.type),Yt=I(ut.internalFormat,Xt,ue,ut.normalized,ut.colorSpace,U.isXRRenderTarget===!0),Vt=de(U);i.renderbufferStorageMultisample(i.RENDERBUFFER,Vt,Yt,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,it.__webglColorRenderbuffer[mt])}i.bindRenderbuffer(i.RENDERBUFFER,null),U.depthBuffer&&(it.__webglDepthRenderbuffer=i.createRenderbuffer(),ge(it.__webglDepthRenderbuffer,U,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Lt){e.bindTexture(i.TEXTURE_CUBE_MAP,lt.__webglTexture),Le(i.TEXTURE_CUBE_MAP,E);for(let mt=0;mt<6;mt++)if(E.mipmaps&&E.mipmaps.length>0)for(let ut=0;ut<E.mipmaps.length;ut++)jt(it.__webglFramebuffer[mt][ut],U,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,ut);else jt(it.__webglFramebuffer[mt],U,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0);m(E)&&z(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(kt){for(let mt=0,ut=xt.length;mt<ut;mt++){let Xt=xt[mt],ue=n.get(Xt),Yt=i.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Yt=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Yt,ue.__webglTexture),Le(Yt,Xt),jt(it.__webglFramebuffer,U,Xt,i.COLOR_ATTACHMENT0+mt,Yt,0),m(Xt)&&z(Yt)}e.unbindTexture()}else{let mt=i.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(mt=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(mt,lt.__webglTexture),Le(mt,E),E.mipmaps&&E.mipmaps.length>0)for(let ut=0;ut<E.mipmaps.length;ut++)jt(it.__webglFramebuffer[ut],U,E,i.COLOR_ATTACHMENT0,mt,ut);else jt(it.__webglFramebuffer,U,E,i.COLOR_ATTACHMENT0,mt,0);m(E)&&z(mt),e.unbindTexture()}U.depthBuffer&&nt(U)}function Pt(U){let E=U.textures;for(let it=0,lt=E.length;it<lt;it++){let xt=E[it];if(m(xt)){let Lt=$(U),kt=n.get(xt).__webglTexture;e.bindTexture(Lt,kt),z(Lt),e.unbindTexture()}}}let Bt=[],ce=[];function fe(U){if(U.samples>0){if(Te(U)===!1){let E=U.textures,it=U.width,lt=U.height,xt=i.COLOR_BUFFER_BIT,Lt=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,kt=n.get(U),mt=E.length>1;if(mt)for(let Xt=0;Xt<E.length;Xt++)e.bindFramebuffer(i.FRAMEBUFFER,kt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Xt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,kt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Xt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,kt.__webglMultisampledFramebuffer);let ut=U.texture.mipmaps;ut&&ut.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,kt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,kt.__webglFramebuffer);for(let Xt=0;Xt<E.length;Xt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(xt|=i.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(xt|=i.STENCIL_BUFFER_BIT)),mt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,kt.__webglColorRenderbuffer[Xt]);let ue=n.get(E[Xt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ue,0)}i.blitFramebuffer(0,0,it,lt,0,0,it,lt,xt,i.NEAREST),h===!0&&(Bt.length=0,ce.length=0,Bt.push(i.COLOR_ATTACHMENT0+Xt),U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&(Bt.push(Lt),ce.push(Lt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ce)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Bt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),mt)for(let Xt=0;Xt<E.length;Xt++){e.bindFramebuffer(i.FRAMEBUFFER,kt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Xt,i.RENDERBUFFER,kt.__webglColorRenderbuffer[Xt]);let ue=n.get(E[Xt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,kt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Xt,i.TEXTURE_2D,ue,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,kt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&h){let E=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function de(U){return Math.min(s.maxSamples,U.samples)}function Te(U){let E=n.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Y(U){let E=a.render.frame;d.get(U)!==E&&(d.set(U,E),U.update())}function Fe(U,E){let it=U.colorSpace,lt=U.format,xt=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||it!==To&&it!==Ps&&(Xe.getTransfer(it)===rn?(lt!==Ri||xt!==gi)&&ye("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):be("WebGLTextures: Unsupported texture color space:",it)),E}function De(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(u.width=U.naturalWidth||U.width,u.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(u.width=U.displayWidth,u.height=U.displayHeight):(u.width=U.width,u.height=U.height),u}this.allocateTextureUnit=pt,this.resetTextureUnits=ht,this.getTextureUnits=j,this.setTextureUnits=et,this.setTexture2D=At,this.setTexture2DArray=_t,this.setTexture3D=wt,this.setTextureCube=bt,this.rebindTextures=Rt,this.setupRenderTarget=V,this.updateRenderTargetMipmap=Pt,this.updateMultisampleRenderTarget=fe,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=jt,this.useMultisampledRTT=Te,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Gb(i,t){function e(n,s=Ps){let r,a=Xe.getTransfer(s);if(n===gi)return i.UNSIGNED_BYTE;if(n===xh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===vh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===af)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===of)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===sf)return i.BYTE;if(n===rf)return i.SHORT;if(n===Ra)return i.UNSIGNED_SHORT;if(n===_h)return i.INT;if(n===Xi)return i.UNSIGNED_INT;if(n===Ci)return i.FLOAT;if(n===qi)return i.HALF_FLOAT;if(n===lf)return i.ALPHA;if(n===cf)return i.RGB;if(n===Ri)return i.RGBA;if(n===is)return i.DEPTH_COMPONENT;if(n===er)return i.DEPTH_STENCIL;if(n===yh)return i.RED;if(n===Sh)return i.RED_INTEGER;if(n===nr)return i.RG;if(n===Mh)return i.RG_INTEGER;if(n===bh)return i.RGBA_INTEGER;if(n===cl||n===hl||n===ul||n===dl)if(a===rn)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===cl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===hl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ul)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===dl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===cl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===hl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ul)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===dl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===wh||n===Eh||n===Th||n===Ah)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===wh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Eh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Th)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ah)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ch||n===Rh||n===Ih||n===Ph||n===Lh||n===fl||n===Dh)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ch||n===Rh)return a===rn?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ih)return a===rn?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ph)return r.COMPRESSED_R11_EAC;if(n===Lh)return r.COMPRESSED_SIGNED_R11_EAC;if(n===fl)return r.COMPRESSED_RG11_EAC;if(n===Dh)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Nh||n===Uh||n===Fh||n===Oh||n===Bh||n===kh||n===zh||n===$h||n===Vh||n===Hh||n===Gh||n===Wh||n===Xh||n===qh)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Nh)return a===rn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Uh)return a===rn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Fh)return a===rn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Oh)return a===rn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Bh)return a===rn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===kh)return a===rn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===zh)return a===rn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===$h)return a===rn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Vh)return a===rn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Hh)return a===rn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Gh)return a===rn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Wh)return a===rn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Xh)return a===rn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===qh)return a===rn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Yh||n===Zh||n===Jh)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Yh)return a===rn?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Zh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Jh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===jh||n===Kh||n===pl||n===Qh)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===jh)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Kh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===pl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Qh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ia?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Wb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Xb=`
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

}`,Lf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new ko(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new kn({vertexShader:Wb,fragmentShader:Xb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Bn(new Zo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Df=class extends ss{constructor(t,e){super();let n=this,s=null,r=1,a=null,l="local-floor",h=1,u=null,d=null,v=null,g=null,S=null,w=null,L=typeof XRWebGLBinding<"u",_=new Lf,m={},z=e.getContextAttributes(),$=null,I=null,T=[],O=[],W=new zt,A=null,F=null,G=new Kn;G.viewport=new an;let X=new Kn;X.viewport=new an;let st=[G,X],ht=new dh,j=null,et=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(vt){let yt=T[vt];return yt===void 0&&(yt=new ya,T[vt]=yt),yt.getTargetRaySpace()},this.getControllerGrip=function(vt){let yt=T[vt];return yt===void 0&&(yt=new ya,T[vt]=yt),yt.getGripSpace()},this.getHand=function(vt){let yt=T[vt];return yt===void 0&&(yt=new ya,T[vt]=yt),yt.getHandSpace()};function pt(vt){let yt=O.indexOf(vt.inputSource);if(yt===-1)return;let Ut=T[yt];Ut!==void 0&&(Ut.update(vt.inputSource,vt.frame,u||a),Ut.dispatchEvent({type:vt.type,data:vt.inputSource}))}function gt(){s.removeEventListener("select",pt),s.removeEventListener("selectstart",pt),s.removeEventListener("selectend",pt),s.removeEventListener("squeeze",pt),s.removeEventListener("squeezestart",pt),s.removeEventListener("squeezeend",pt),s.removeEventListener("end",gt),s.removeEventListener("inputsourceschange",At);for(let vt=0;vt<T.length;vt++){let yt=O[vt];yt!==null&&(O[vt]=null,T[vt].disconnect(yt))}j=null,et=null,_.reset();for(let vt in m)delete m[vt];if(t.setRenderTarget($),S=null,g=null,v=null,s=null,I=null,Ve.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(W.width,W.height,!1),F!==null){let vt=F.camera;vt.fov=F.fov,vt.zoom=F.zoom,vt.updateProjectionMatrix(),F=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(vt){r=vt,n.isPresenting===!0&&ye("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(vt){l=vt,n.isPresenting===!0&&ye("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(vt){u=vt},this.getBaseLayer=function(){return g!==null?g:S},this.getBinding=function(){return v===null&&L&&(v=new XRWebGLBinding(s,e)),v},this.getFrame=function(){return w},this.getSession=function(){return s},this.setSession=async function(vt){if(s=vt,s!==null){if($=t.getRenderTarget(),s.addEventListener("select",pt),s.addEventListener("selectstart",pt),s.addEventListener("selectend",pt),s.addEventListener("squeeze",pt),s.addEventListener("squeezestart",pt),s.addEventListener("squeezeend",pt),s.addEventListener("end",gt),s.addEventListener("inputsourceschange",At),z.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(W),L&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ut=null,he=null,jt=null;z.depth&&(jt=z.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Ut=z.stencil?er:is,he=z.stencil?Ia:Xi);let ge={colorFormat:e.RGBA8,depthFormat:jt,scaleFactor:r};v=this.getBinding(),g=v.createProjectionLayer(ge),s.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),I=new pi(g.textureWidth,g.textureHeight,{format:Ri,type:gi,depthTexture:new qs(g.textureWidth,g.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,Ut),stencilBuffer:z.stencil,colorSpace:t.outputColorSpace,samples:z.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}else{let Ut={antialias:z.antialias,alpha:!0,depth:z.depth,stencil:z.stencil,framebufferScaleFactor:r};S=new XRWebGLLayer(s,e,Ut),s.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),I=new pi(S.framebufferWidth,S.framebufferHeight,{format:Ri,type:gi,colorSpace:t.outputColorSpace,stencilBuffer:z.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1,storeMultisampledDepthBuffer:S.ignoreDepthValues===!1,storeMultisampledStencilBuffer:S.ignoreDepthValues===!1})}I.isXRRenderTarget=!0,this.setFoveation(h),u=null,a=await s.requestReferenceSpace(l),Ve.setContext(s),Ve.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function At(vt){for(let yt=0;yt<vt.removed.length;yt++){let Ut=vt.removed[yt],he=O.indexOf(Ut);he>=0&&(O[he]=null,T[he].disconnect(Ut))}for(let yt=0;yt<vt.added.length;yt++){let Ut=vt.added[yt],he=O.indexOf(Ut);if(he===-1){for(let ge=0;ge<T.length;ge++)if(ge>=O.length){O.push(Ut),he=ge;break}else if(O[ge]===null){O[ge]=Ut,he=ge;break}if(he===-1)break}let jt=T[he];jt&&jt.connect(Ut)}}let _t=new Z,wt=new Z;function bt(vt,yt,Ut){_t.setFromMatrixPosition(yt.matrixWorld),wt.setFromMatrixPosition(Ut.matrixWorld);let he=_t.distanceTo(wt),jt=yt.projectionMatrix.elements,ge=Ut.projectionMatrix.elements,ee=jt[14]/(jt[10]-1),nt=jt[14]/(jt[10]+1),Rt=(jt[9]+1)/jt[5],V=(jt[9]-1)/jt[5],Pt=(jt[8]-1)/jt[0],Bt=(ge[8]+1)/ge[0],ce=ee*Pt,fe=ee*Bt,de=he/(-Pt+Bt),Te=de*-Pt;if(yt.matrixWorld.decompose(vt.position,vt.quaternion,vt.scale),vt.translateX(Te),vt.translateZ(de),vt.matrixWorld.compose(vt.position,vt.quaternion,vt.scale),vt.matrixWorldInverse.copy(vt.matrixWorld).invert(),jt[10]===-1)vt.projectionMatrix.copy(yt.projectionMatrix),vt.projectionMatrixInverse.copy(yt.projectionMatrixInverse);else{let Y=ee+de,Fe=nt+de,De=ce-Te,U=fe+(he-Te),E=Rt*nt/Fe*Y,it=V*nt/Fe*Y;vt.projectionMatrix.makePerspective(De,U,E,it,Y,Fe),vt.projectionMatrixInverse.copy(vt.projectionMatrix).invert()}}function Wt(vt,yt){yt===null?vt.matrixWorld.copy(vt.matrix):vt.matrixWorld.multiplyMatrices(yt.matrixWorld,vt.matrix),vt.matrixWorldInverse.copy(vt.matrixWorld).invert()}this.updateCamera=function(vt){if(s===null)return;let yt=vt.near,Ut=vt.far;_.texture!==null&&(_.depthNear>0&&(yt=_.depthNear),_.depthFar>0&&(Ut=_.depthFar)),ht.near=X.near=G.near=yt,ht.far=X.far=G.far=Ut,(j!==ht.near||et!==ht.far)&&(s.updateRenderState({depthNear:ht.near,depthFar:ht.far}),j=ht.near,et=ht.far),ht.layers.mask=vt.layers.mask|6,G.layers.mask=ht.layers.mask&-5,X.layers.mask=ht.layers.mask&-3;let he=vt.parent,jt=ht.cameras;Wt(ht,he);for(let ge=0;ge<jt.length;ge++)Wt(jt[ge],he);jt.length===2?bt(ht,G,X):ht.projectionMatrix.copy(G.projectionMatrix),F===null&&vt.isPerspectiveCamera&&(F={camera:vt,fov:vt.fov,zoom:vt.zoom}),te(vt,ht,he)};function te(vt,yt,Ut){Ut===null?vt.matrix.copy(yt.matrixWorld):(vt.matrix.copy(Ut.matrixWorld),vt.matrix.invert(),vt.matrix.multiply(yt.matrixWorld)),vt.matrix.decompose(vt.position,vt.quaternion,vt.scale),vt.updateMatrixWorld(!0),vt.projectionMatrix.copy(yt.projectionMatrix),vt.projectionMatrixInverse.copy(yt.projectionMatrixInverse),vt.isPerspectiveCamera&&(vt.fov=_a*2*Math.atan(1/vt.projectionMatrix.elements[5]),vt.zoom=1)}this.getCamera=function(){return ht},this.getFoveation=function(){if(!(g===null&&S===null))return h},this.setFoveation=function(vt){h=vt,g!==null&&(g.fixedFoveation=vt),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=vt)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(ht)},this.getCameraTexture=function(vt){return m[vt]};let Ye=null;function Le(vt,yt){if(d=yt.getViewerPose(u||a),w=yt,d!==null){let Ut=d.views;S!==null&&(t.setRenderTargetFramebuffer(I,S.framebuffer),t.setRenderTarget(I));let he=!1;Ut.length!==ht.cameras.length&&(ht.cameras.length=0,he=!0);for(let nt=0;nt<Ut.length;nt++){let Rt=Ut[nt],V=null;if(S!==null)V=S.getViewport(Rt);else{let Bt=v.getViewSubImage(g,Rt);V=Bt.viewport,nt===0&&(t.setRenderTargetTextures(I,Bt.colorTexture,Bt.depthStencilTexture),t.setRenderTarget(I))}let Pt=st[nt];Pt===void 0&&(Pt=new Kn,Pt.layers.enable(nt),Pt.viewport=new an,st[nt]=Pt),Pt.matrix.fromArray(Rt.transform.matrix),Pt.matrix.decompose(Pt.position,Pt.quaternion,Pt.scale),Pt.projectionMatrix.fromArray(Rt.projectionMatrix),Pt.projectionMatrixInverse.copy(Pt.projectionMatrix).invert(),Pt.viewport.set(V.x,V.y,V.width,V.height),nt===0&&(ht.matrix.copy(Pt.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale)),he===!0&&ht.cameras.push(Pt)}let jt=s.enabledFeatures;if(jt&&jt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&L){v=n.getBinding();let nt=v.getDepthInformation(Ut[0]);nt&&nt.isValid&&nt.texture&&_.init(nt,s.renderState)}if(jt&&jt.includes("camera-access")&&L){t.state.unbindTexture(),v=n.getBinding();for(let nt=0;nt<Ut.length;nt++){let Rt=Ut[nt].camera;if(Rt){let V=m[Rt];V||(V=new ko,m[Rt]=V);let Pt=v.getCameraImage(Rt);V.sourceTexture=Pt}}}}for(let Ut=0;Ut<T.length;Ut++){let he=O[Ut],jt=T[Ut];he!==null&&jt!==void 0&&jt.update(he,yt,u||a)}Ye&&Ye(vt,yt),yt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:yt}),w=null}let Ve=new Q0;Ve.setAnimationLoop(Le),this.setAnimationLoop=function(vt){Ye=vt},this.dispose=function(){}}},qb=new qe,rg=new Re;rg.set(-1,0,0,0,1,0,0,0,1);function Yb(i,t){function e(_,m){_.matrixAutoUpdate===!0&&_.updateMatrix(),m.value.copy(_.matrix)}function n(_,m){m.color.getRGB(_.fogColor.value,mf(i)),m.isFog?(_.fogNear.value=m.near,_.fogFar.value=m.far):m.isFogExp2&&(_.fogDensity.value=m.density)}function s(_,m,z,$,I){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(_,m):m.isMeshLambertMaterial?(r(_,m),m.envMap&&(_.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(_,m),v(_,m)):m.isMeshPhongMaterial?(r(_,m),d(_,m),m.envMap&&(_.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(_,m),g(_,m),m.isMeshPhysicalMaterial&&S(_,m,I)):m.isMeshMatcapMaterial?(r(_,m),w(_,m)):m.isMeshDepthMaterial?r(_,m):m.isMeshDistanceMaterial?(r(_,m),L(_,m)):m.isMeshNormalMaterial?r(_,m):m.isLineBasicMaterial?(a(_,m),m.isLineDashedMaterial&&l(_,m)):m.isPointsMaterial?h(_,m,z,$):m.isSpriteMaterial?u(_,m):m.isShadowMaterial?(_.color.value.copy(m.color),_.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(_,m){_.opacity.value=m.opacity,m.color&&_.diffuse.value.copy(m.color),m.emissive&&_.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(_.map.value=m.map,e(m.map,_.mapTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,e(m.alphaMap,_.alphaMapTransform)),m.bumpMap&&(_.bumpMap.value=m.bumpMap,e(m.bumpMap,_.bumpMapTransform),_.bumpScale.value=m.bumpScale,m.side===si&&(_.bumpScale.value*=-1)),m.normalMap&&(_.normalMap.value=m.normalMap,e(m.normalMap,_.normalMapTransform),_.normalScale.value.copy(m.normalScale),m.side===si&&_.normalScale.value.negate()),m.displacementMap&&(_.displacementMap.value=m.displacementMap,e(m.displacementMap,_.displacementMapTransform),_.displacementScale.value=m.displacementScale,_.displacementBias.value=m.displacementBias),m.emissiveMap&&(_.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,_.emissiveMapTransform)),m.specularMap&&(_.specularMap.value=m.specularMap,e(m.specularMap,_.specularMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest);let z=t.get(m),$=z.envMap,I=z.envMapRotation;$&&(_.envMap.value=$,_.envMapRotation.value.setFromMatrix4(qb.makeRotationFromEuler(I)).transpose(),$.isCubeTexture&&$.isRenderTargetTexture===!1&&_.envMapRotation.value.premultiply(rg),_.reflectivity.value=m.reflectivity,_.ior.value=m.ior,_.refractionRatio.value=m.refractionRatio),m.lightMap&&(_.lightMap.value=m.lightMap,_.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,_.lightMapTransform)),m.aoMap&&(_.aoMap.value=m.aoMap,_.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,_.aoMapTransform))}function a(_,m){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,m.map&&(_.map.value=m.map,e(m.map,_.mapTransform))}function l(_,m){_.dashSize.value=m.dashSize,_.totalSize.value=m.dashSize+m.gapSize,_.scale.value=m.scale}function h(_,m,z,$){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,_.size.value=m.size*z,_.scale.value=$*.5,m.map&&(_.map.value=m.map,e(m.map,_.uvTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,e(m.alphaMap,_.alphaMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest)}function u(_,m){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,_.rotation.value=m.rotation,m.map&&(_.map.value=m.map,e(m.map,_.mapTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,e(m.alphaMap,_.alphaMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest)}function d(_,m){_.specular.value.copy(m.specular),_.shininess.value=Math.max(m.shininess,1e-4)}function v(_,m){m.gradientMap&&(_.gradientMap.value=m.gradientMap)}function g(_,m){_.metalness.value=m.metalness,m.metalnessMap&&(_.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,_.metalnessMapTransform)),_.roughness.value=m.roughness,m.roughnessMap&&(_.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,_.roughnessMapTransform)),m.envMap&&(_.envMapIntensity.value=m.envMapIntensity)}function S(_,m,z){_.ior.value=m.ior,m.sheen>0&&(_.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),_.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(_.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,_.sheenColorMapTransform)),m.sheenRoughnessMap&&(_.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,_.sheenRoughnessMapTransform))),m.clearcoat>0&&(_.clearcoat.value=m.clearcoat,_.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(_.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,_.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(_.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===si&&_.clearcoatNormalScale.value.negate())),m.dispersion>0&&(_.dispersion.value=m.dispersion),m.retroreflectivity>0&&(_.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(_.iridescence.value=m.iridescence,_.iridescenceIOR.value=m.iridescenceIOR,_.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(_.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,_.iridescenceMapTransform)),m.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),m.transmission>0&&(_.transmission.value=m.transmission,_.transmissionSamplerMap.value=z.texture,_.transmissionSamplerSize.value.set(z.width,z.height),m.transmissionMap&&(_.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,_.transmissionMapTransform)),_.thickness.value=m.thickness,m.thicknessMap&&(_.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=m.attenuationDistance,_.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(_.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(_.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=m.specularIntensity,_.specularColor.value.copy(m.specularColor),m.specularColorMap&&(_.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,_.specularColorMapTransform)),m.specularIntensityMap&&(_.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,_.specularIntensityMapTransform))}function w(_,m){m.matcap&&(_.matcap.value=m.matcap)}function L(_,m){let z=t.get(m).light;_.referencePosition.value.setFromMatrixPosition(z.matrixWorld),_.nearDistance.value=z.shadow.camera.near,_.farDistance.value=z.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Zb(i,t,e,n){let s={},r={},a=[],l=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function h(I,T){let O=T.program;n.uniformBlockBinding(I,O)}function u(I,T){let O=s[I.id];O===void 0&&(_(I),O=d(I),s[I.id]=O,I.addEventListener("dispose",z));let W=T.program;n.updateUBOMapping(I,W);let A=t.render.frame;r[I.id]!==A&&(g(I),r[I.id]=A)}function d(I){let T=v();I.__bindingPointIndex=T;let O=i.createBuffer(),W=I.__size,A=I.usage;return i.bindBuffer(i.UNIFORM_BUFFER,O),i.bufferData(i.UNIFORM_BUFFER,W,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,O),O}function v(){for(let I=0;I<l;I++)if(a.indexOf(I)===-1)return a.push(I),I;return be("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(I){let T=s[I.id],O=I.uniforms,W=I.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let A=0,F=O.length;A<F;A++){let G=O[A];if(Array.isArray(G))for(let X=0,st=G.length;X<st;X++)S(G[X],A,X,W);else S(G,A,0,W)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function S(I,T,O,W){if(L(I,T,O,W)===!0){let A=I.__offset,F=I.value;if(Array.isArray(F)){let G=0;for(let X=0;X<F.length;X++){let st=F[X],ht=m(st);w(st,I.__data,G),typeof st!="number"&&typeof st!="boolean"&&!st.isMatrix3&&!ArrayBuffer.isView(st)&&(G+=ht.storage/Float32Array.BYTES_PER_ELEMENT)}}else w(F,I.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,A,I.__data)}}function w(I,T,O){typeof I=="number"||typeof I=="boolean"?T[0]=I:I.isMatrix3?(T[0]=I.elements[0],T[1]=I.elements[1],T[2]=I.elements[2],T[3]=0,T[4]=I.elements[3],T[5]=I.elements[4],T[6]=I.elements[5],T[7]=0,T[8]=I.elements[6],T[9]=I.elements[7],T[10]=I.elements[8],T[11]=0):ArrayBuffer.isView(I)?T.set(new I.constructor(I.buffer,I.byteOffset,T.length)):I.toArray(T,O)}function L(I,T,O,W){let A=I.value,F=T+"_"+O;if(W[F]===void 0)return typeof A=="number"||typeof A=="boolean"?W[F]=A:ArrayBuffer.isView(A)?W[F]=A.slice():W[F]=A.clone(),!0;{let G=W[F];if(typeof A=="number"||typeof A=="boolean"){if(G!==A)return W[F]=A,!0}else{if(ArrayBuffer.isView(A))return!0;if(G.equals(A)===!1)return G.copy(A),!0}}return!1}function _(I){let T=I.uniforms,O=0,W=16;for(let F=0,G=T.length;F<G;F++){let X=Array.isArray(T[F])?T[F]:[T[F]];for(let st=0,ht=X.length;st<ht;st++){let j=X[st],et=Array.isArray(j.value)?j.value:[j.value];for(let pt=0,gt=et.length;pt<gt;pt++){let At=et[pt],_t=m(At),wt=O%W,bt=wt%_t.boundary,Wt=wt+bt;O+=bt,Wt!==0&&W-Wt<_t.storage&&(O+=W-Wt),j.__data=new Float32Array(_t.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=O,O+=_t.storage}}}let A=O%W;return A>0&&(O+=W-A),I.__size=O,I.__cache={},this}function m(I){let T={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(T.boundary=4,T.storage=4):I.isVector2?(T.boundary=8,T.storage=8):I.isVector3||I.isColor?(T.boundary=16,T.storage=12):I.isVector4?(T.boundary=16,T.storage=16):I.isMatrix3?(T.boundary=48,T.storage=48):I.isMatrix4?(T.boundary=64,T.storage=64):I.isTexture?ye("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(I)?(T.boundary=16,T.storage=I.byteLength):ye("WebGLRenderer: Unsupported uniform value type.",I),T}function z(I){let T=I.target;T.removeEventListener("dispose",z);let O=a.indexOf(T.__bindingPointIndex);a.splice(O,1),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function $(){for(let I in s)i.deleteBuffer(s[I]);a=[],s={},r={}}return{bind:h,update:u,dispose:$}}var Jb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),cs=null;function jb(){return cs===null&&(cs=new No(Jb,16,16,nr,qi),cs.name="DFG_LUT",cs.minFilter=Gn,cs.magFilter=Gn,cs.wrapS=es,cs.wrapT=es,cs.generateMipmaps=!1,cs.needsUpdate=!0),cs}var ou=class{constructor(t={}){let{canvas:e=S0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:u=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:g=!1,outputBufferType:S=gi}=t;this.isWebGLRenderer=!0;let w;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");w=n.getContextAttributes().alpha}else w=a;let L=S,_=new Set([bh,Mh,Sh]),m=new Set([gi,Xi,Ra,Ia,xh,vh]),z=new Uint32Array(4),$=new Int32Array(4),I=new Z,T=null,O=null,W=[],A=[],F=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let G=this,X=!1,st=null,ht=null,j=null,et=null;this._outputColorSpace=yi;let pt=0,gt=0,At=null,_t=-1,wt=null,bt=new an,Wt=new an,te=null,Ye=new xe(0),Le=0,Ve=e.width,vt=e.height,yt=1,Ut=null,he=null,jt=new an(0,0,Ve,vt),ge=new an(0,0,Ve,vt),ee=!1,nt=new Sa,Rt=!1,V=!1,Pt=new qe,Bt=new Z,ce=new an,fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},de=!1;function Te(){return At===null?yt:1}let Y=n;function Fe(R,K){return e.getContext(R,K)}let De,U,E,it,lt,xt,Lt,kt,mt,ut,Xt,ue,Yt,Vt,oe,pe,Ae,Q,qt,St,Ht,Kt,Tt;try{let R={alpha:!0,depth:s,stencil:r,antialias:l,premultipliedAlpha:h,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:v};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",tn,!1),e.addEventListener("webglcontextrestored",Ze,!1),e.addEventListener("webglcontextcreationerror",$n,!1),Y===null){let K="webgl2";if(Y=Fe(K,R),Y===null)throw Fe(K)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}se()}catch(R){throw e.removeEventListener("webglcontextlost",tn,!1),e.removeEventListener("webglcontextrestored",Ze,!1),e.removeEventListener("webglcontextcreationerror",$n,!1),be("WebGLRenderer: "+R.message),R}function se(){De=new sM(Y),De.init(),Ht=new Gb(Y,De),U=new YS(Y,De,t,Ht),E=new Vb(Y,De),U.reversedDepthBuffer&&g&&E.buffers.depth.setReversed(!0),ht=Y.createFramebuffer(),j=Y.createFramebuffer(),et=Y.createFramebuffer(),it=new oM(Y),lt=new Cb,xt=new Hb(Y,De,E,lt,U,Ht,it),Lt=new iM(G),kt=new cv(Y),Kt=new XS(Y,kt),mt=new rM(Y,kt,it,Kt),ut=new cM(Y,mt,kt,Kt,it),Q=new lM(Y,U,xt),oe=new ZS(lt),Xt=new Ab(G,Lt,De,U,Kt,oe),ue=new Yb(G,lt),Yt=new Ib,Vt=new Fb(De),Ae=new WS(G,Lt,E,ut,w,h),pe=new $b(G,ut,U),Tt=new Zb(Y,it,U,E),qt=new qS(Y,De,it),St=new aM(Y,De,it),it.programs=Xt.programs,G.capabilities=U,G.extensions=De,G.properties=lt,G.renderLists=Yt,G.shadowMap=pe,G.state=E,G.info=it}L!==gi&&(F=new uM(L,e.width,e.height,l,s,r));let ne=new Df(G,Y);this.xr=ne,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){let R=De.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=De.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return yt},this.setPixelRatio=function(R){R!==void 0&&(yt=R,this.setSize(Ve,vt,!1))},this.getSize=function(R){return R.set(Ve,vt)},this.setSize=function(R,K,ft=!0){if(ne.isPresenting){ye("WebGLRenderer: Can't change size while VR device is presenting.");return}Ve=R,vt=K,e.width=Math.floor(R*yt),e.height=Math.floor(K*yt),ft===!0&&(e.style.width=R+"px",e.style.height=K+"px"),F!==null&&F.setSize(e.width,e.height),this.setViewport(0,0,R,K)},this.getDrawingBufferSize=function(R){return R.set(Ve*yt,vt*yt).floor()},this.setDrawingBufferSize=function(R,K,ft){Ve=R,vt=K,yt=ft,e.width=Math.floor(R*ft),e.height=Math.floor(K*ft),this.setViewport(0,0,R,K)},this.setEffects=function(R){if(L===gi){be("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let K=0;K<R.length;K++)if(R[K].isOutputPass===!0){ye("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}F.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(bt)},this.getViewport=function(R){return R.copy(jt)},this.setViewport=function(R,K,ft,ot){R.isVector4?jt.set(R.x,R.y,R.z,R.w):jt.set(R,K,ft,ot),E.viewport(bt.copy(jt).multiplyScalar(yt).round())},this.getScissor=function(R){return R.copy(ge)},this.setScissor=function(R,K,ft,ot){R.isVector4?ge.set(R.x,R.y,R.z,R.w):ge.set(R,K,ft,ot),E.scissor(Wt.copy(ge).multiplyScalar(yt).round())},this.getScissorTest=function(){return ee},this.setScissorTest=function(R){E.setScissorTest(ee=R)},this.setOpaqueSort=function(R){Ut=R},this.setTransparentSort=function(R){he=R},this.getClearColor=function(R){return R.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor(...arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha(...arguments)},this.clear=function(R=!0,K=!0,ft=!0){let ot=0;if(R){let ct=!1;if(At!==null){let Ot=At.texture.format;ct=_.has(Ot)}if(ct){let Ot=At.texture.type,Ft=m.has(Ot),Ct=Ae.getClearColor(),Zt=Ae.getClearAlpha(),ie=Ct.r,ae=Ct.g,Me=Ct.b;Ft?(z[0]=ie,z[1]=ae,z[2]=Me,z[3]=Zt,Y.clearBufferuiv(Y.COLOR,0,z)):($[0]=ie,$[1]=ae,$[2]=Me,$[3]=Zt,Y.clearBufferiv(Y.COLOR,0,$))}else ot|=Y.COLOR_BUFFER_BIT}K&&(ot|=Y.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ft&&(ot|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ot!==0&&Y.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),st=R},this.dispose=function(){e.removeEventListener("webglcontextlost",tn,!1),e.removeEventListener("webglcontextrestored",Ze,!1),e.removeEventListener("webglcontextcreationerror",$n,!1),Ae.dispose(),Yt.dispose(),Vt.dispose(),lt.dispose(),Lt.dispose(),ut.dispose(),Kt.dispose(),Tt.dispose(),Xt.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",ar),ne.removeEventListener("sessionend",or),Pi.stop()};function tn(R){R.preventDefault(),Ro("WebGLRenderer: Context Lost."),X=!0}function Ze(){Ro("WebGLRenderer: Context Restored."),X=!1;let R=it.autoReset,K=pe.enabled,ft=pe.autoUpdate,ot=pe.needsUpdate,ct=pe.type;se(),it.autoReset=R,pe.enabled=K,pe.autoUpdate=ft,pe.needsUpdate=ot,pe.type=ct}function $n(R){be("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function oi(R){let K=R.target;K.removeEventListener("dispose",oi),El(K)}function El(R){$a(R),lt.remove(R)}function $a(R){let K=lt.get(R).programs;K!==void 0&&(K.forEach(function(ft){Xt.releaseProgram(ft)}),R.isShaderMaterial&&Xt.releaseShaderCache(R))}this.renderBufferDirect=function(R,K,ft,ot,ct,Ot){K===null&&(K=fe);let Ft=ct.isMesh&&ct.matrixWorld.determinantAffine()<0,Ct=Ga(R,K,ft,ot,ct);E.setMaterial(ot,Ft);let Zt=ft.index,ie=1;if(ot.wireframe===!0){if(Zt=mt.getWireframeAttribute(ft),Zt===void 0)return;ie=2}let ae=ft.drawRange,Me=ft.attributes.position,Nt=ae.start*ie,Mt=(ae.start+ae.count)*ie;Ot!==null&&(Nt=Math.max(Nt,Ot.start*ie),Mt=Math.min(Mt,(Ot.start+Ot.count)*ie)),Zt!==null?(Nt=Math.max(Nt,0),Mt=Math.min(Mt,Zt.count)):Me!=null&&(Nt=Math.max(Nt,0),Mt=Math.min(Mt,Me.count));let me=Mt-Nt;if(me<0||me===1/0)return;Kt.setup(ct,ot,Ct,ft,Zt);let _e,nn=qt;if(Zt!==null&&(_e=kt.get(Zt),nn=St,nn.setIndex(_e)),ct.isMesh)ot.wireframe===!0?(E.setLineWidth(ot.wireframeLinewidth*Te()),nn.setMode(Y.LINES)):nn.setMode(Y.TRIANGLES);else if(ct.isLine){let An=ot.linewidth;An===void 0&&(An=1),E.setLineWidth(An*Te()),ct.isLineSegments?nn.setMode(Y.LINES):ct.isLineLoop?nn.setMode(Y.LINE_LOOP):nn.setMode(Y.LINE_STRIP)}else ct.isPoints?nn.setMode(Y.POINTS):ct.isSprite&&nn.setMode(Y.TRIANGLES);if(ct.isBatchedMesh)if(De.get("WEBGL_multi_draw"))nn.renderMultiDraw(ct._multiDrawStarts,ct._multiDrawCounts,ct._multiDrawCount);else{let An=ct._multiDrawStarts,Qt=ct._multiDrawCounts,Ln=ct._multiDrawCount,Oe=Zt?kt.get(Zt).bytesPerElement:1,Hn=lt.get(ot).currentProgram.getUniforms();for(let En=0;En<Ln;En++)Hn.setValue(Y,"_gl_DrawID",En),nn.render(An[En]/Oe,Qt[En])}else if(ct.isInstancedMesh)nn.renderInstances(Nt,me,ct.count);else if(ft.isInstancedBufferGeometry){let An=ft._maxInstanceCount!==void 0?ft._maxInstanceCount:1/0,Qt=Math.min(ft.instanceCount,An);nn.renderInstances(Nt,me,Qt)}else nn.render(Nt,me)};function Vn(R,K,ft,ot){st!==null&&R.isNodeMaterial&&st.setObject(ot,R),Rt===!0&&oe.setState(R,ft,!1),R.transparent===!0&&R.side===os&&R.forceSinglePass===!1?(R.side=si,R.needsUpdate=!0,xs(R,K,ot),R.side=Ks,R.needsUpdate=!0,xs(R,K,ot),R.side=os):xs(R,K,ot)}this.compile=function(R,K,ft=null){ft===null&&(ft=R),st!==null&&st.renderStart(R,K,ft),O=Vt.get(ft),O.init(K),A.push(O),ft.traverseVisible(function(ct){ct.isLight&&ct.layers.test(K.layers)&&(O.pushLight(ct),ct.castShadow&&O.pushShadow(ct))}),R!==ft&&R.traverseVisible(function(ct){ct.isLight&&ct.layers.test(K.layers)&&(O.pushLight(ct),ct.castShadow&&O.pushShadow(ct))}),O.setupLights(),st!==null&&st.updateLights(O.state.lightsArray),V=this.localClippingEnabled,Rt=oe.init(this.clippingPlanes,V),Rt===!0&&oe.setGlobalState(this.clippingPlanes,K),st!==null&&pe.render(O.state.shadowsArray,ft,K);let ot=new Set;return R.traverse(function(ct){if(!(ct.isMesh||ct.isPoints||ct.isLine||ct.isSprite))return;let Ot=ct.material;if(Ot)if(Array.isArray(Ot))for(let Ft=0;Ft<Ot.length;Ft++){let Ct=Ot[Ft];Vn(Ct,ft,K,ct),ot.add(Ct)}else Vn(Ot,ft,K,ct),ot.add(Ot)}),O=A.pop(),st!==null&&st.renderEnd(),ot},this.compileAsync=function(R,K,ft=null){let ot=this.compile(R,K,ft);return new Promise(ct=>{function Ot(){if(ot.forEach(function(Ft){let Zt=lt.get(Ft).currentProgram;(Zt===void 0||Zt.isReady())&&ot.delete(Ft)}),ot.size===0){ct(R);return}setTimeout(Ot,10)}De.get("KHR_parallel_shader_compile")!==null?Ot():setTimeout(Ot,10)})};let li=null;function Ii(R){li&&li(R)}function ar(){Pi.stop()}function or(){Pi.start()}let Pi=new Q0;Pi.setAnimationLoop(Ii),typeof self<"u"&&Pi.setContext(self),this.setAnimationLoop=function(R){li=R,ne.setAnimationLoop(R),R===null?Pi.stop():Pi.start()},ne.addEventListener("sessionstart",ar),ne.addEventListener("sessionend",or),this.render=function(R,K){if(K!==void 0&&K.isCamera!==!0){be("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(X===!0)return;st!==null&&st.renderStart(R,K);let ft=ne.enabled===!0&&ne.isPresenting===!0,ot=F!==null&&(At===null||ft)&&F.begin(G,At);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(F===null||F.isCompositing()===!1)&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(K),K=ne.getCamera()),R.isScene===!0&&R.onBeforeRender(G,R,K,At),O=Vt.get(R,A.length),O.init(K),O.state.textureUnits=xt.getTextureUnits(),A.push(O),Pt.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),nt.setFromProjectionMatrix(Pt,Vi,K.reversedDepth),V=this.localClippingEnabled,Rt=oe.init(this.clippingPlanes,V),T=Yt.get(R,W.length),T.init(),W.push(T),ne.enabled===!0&&ne.isPresenting===!0){let Ft=G.xr.getDepthSensingMesh();Ft!==null&&$r(Ft,K,-1/0,G.sortObjects)}$r(R,K,0,G.sortObjects),T.finish(),st!==null&&st.updateLights(O.state.lightsArray),G.sortObjects===!0&&T.sort(Ut,he),de=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,de&&Ae.addToRenderList(T,R),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Rt===!0&&oe.beginShadows();let ct=O.state.shadowsArray;if(pe.render(ct,R,K),Rt===!0&&oe.endShadows(),(ot&&F.hasRenderPass())===!1){let Ft=T.opaque,Ct=T.transmissive;if(O.setupLights(),K.isArrayCamera){let Zt=K.cameras;if(Ct.length>0)for(let ie=0,ae=Zt.length;ie<ae;ie++){let Me=Zt[ie];Tl(Ft,Ct,R,Me)}de&&Ae.render(R);for(let ie=0,ae=Zt.length;ie<ae;ie++){let Me=Zt[ie];Us(T,R,Me,Me.viewport)}}else Ct.length>0&&Tl(Ft,Ct,R,K),de&&Ae.render(R),Us(T,R,K)}At!==null&&gt===0&&(xt.updateMultisampleRenderTarget(At),xt.updateRenderTargetMipmap(At)),ot&&F.end(G),R.isScene===!0&&R.onAfterRender(G,R,K),Kt.resetDefaultState(),_t=-1,wt=null,A.pop(),A.length>0?(O=A[A.length-1],xt.setTextureUnits(O.state.textureUnits),Rt===!0&&oe.setGlobalState(G.clippingPlanes,O.state.camera)):O=null,W.pop(),W.length>0?T=W[W.length-1]:T=null,st!==null&&st.renderEnd()};function $r(R,K,ft,ot){if(R.visible===!1)return;if(R.layers.test(K.layers)){if(R.isGroup)ft=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(K);else if(R.isLightProbeGrid)O.pushLightProbeGrid(R);else if(R.isLight)O.pushLight(R),R.castShadow&&O.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||R.intersectsFrustum(nt)){ot&&ce.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Pt);let Ft=ut.update(R),Ct=R.material;Ct.visible&&T.push(R,Ft,Ct,ft,ce.z,null,K)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||R.intersectsFrustum(nt))){let Ft=ut.update(R),Ct=R.material;if(ot&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ce.copy(R.boundingSphere.center)):(Ft.boundingSphere===null&&Ft.computeBoundingSphere(),ce.copy(Ft.boundingSphere.center)),ce.applyMatrix4(R.matrixWorld).applyMatrix4(Pt)),Array.isArray(Ct)){let Zt=Ft.groups;for(let ie=0,ae=Zt.length;ie<ae;ie++){let Me=Zt[ie],Nt=Ct[Me.materialIndex];Nt&&Nt.visible&&T.push(R,Ft,Nt,ft,ce.z,Me,K)}}else Ct.visible&&T.push(R,Ft,Ct,ft,ce.z,null,K)}}let Ot=R.children;for(let Ft=0,Ct=Ot.length;Ft<Ct;Ft++)$r(Ot[Ft],K,ft,ot)}function Us(R,K,ft,ot){let{opaque:ct,transmissive:Ot,transparent:Ft}=R;O.setupLightsView(ft),Rt===!0&&oe.setGlobalState(G.clippingPlanes,ft),ot&&E.viewport(bt.copy(ot)),ct.length>0&&Fs(ct,K,ft),Ot.length>0&&Fs(Ot,K,ft),Ft.length>0&&Fs(Ft,K,ft),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function Tl(R,K,ft,ot){if((ft.isScene===!0?ft.overrideMaterial:null)!==null)return;if(O.state.transmissionRenderTarget[ot.id]===void 0){let Nt=De.has("EXT_color_buffer_half_float")||De.has("EXT_color_buffer_float");O.state.transmissionRenderTarget[ot.id]=new pi(1,1,{generateMipmaps:!0,type:Nt?qi:gi,minFilter:tr,samples:Math.max(4,U.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Xe.workingColorSpace})}let Ot=O.state.transmissionRenderTarget[ot.id],Ft=ot.viewport||bt;Ot.setSize(Ft.z*G.transmissionResolutionScale,Ft.w*G.transmissionResolutionScale);let Ct=G.getRenderTarget(),Zt=G.getActiveCubeFace(),ie=G.getActiveMipmapLevel();G.setRenderTarget(Ot),G.getClearColor(Ye),Le=G.getClearAlpha(),Le<1&&G.setClearColor(16777215,.5),G.clear(),de&&Ae.render(ft);let ae=G.toneMapping;G.toneMapping=Wi;let Me=ot.viewport;if(ot.viewport!==void 0&&(ot.viewport=void 0),O.setupLightsView(ot),Rt===!0&&oe.setGlobalState(G.clippingPlanes,ot),Fs(R,ft,ot),xt.updateMultisampleRenderTarget(Ot),xt.updateRenderTargetMipmap(Ot),De.has("WEBGL_multisampled_render_to_texture")===!1){let Nt=!1;for(let Mt=0,me=K.length;Mt<me;Mt++){let _e=K[Mt],{object:nn,geometry:An,material:Qt,group:Ln}=_e;if(Qt.side===os&&nn.layers.test(ot.layers)){let Oe=Qt.side;Qt.side=si,Qt.needsUpdate=!0,Zi(nn,ft,ot,An,Qt,Ln),Qt.side=Oe,Qt.needsUpdate=!0,Nt=!0}}Nt===!0&&(xt.updateMultisampleRenderTarget(Ot),xt.updateRenderTargetMipmap(Ot))}G.setRenderTarget(Ct,Zt,ie),G.setClearColor(Ye,Le),Me!==void 0&&(ot.viewport=Me),G.toneMapping=ae}function Fs(R,K,ft){let ot=K.isScene===!0?K.overrideMaterial:null;for(let ct=0,Ot=R.length;ct<Ot;ct++){let Ft=R[ct],{object:Ct,geometry:Zt,group:ie}=Ft,ae=Ft.material;ae.allowOverride===!0&&ot!==null&&(ae=ot),Ct.layers.test(ft.layers)&&Zi(Ct,K,ft,Zt,ae,ie)}}function Zi(R,K,ft,ot,ct,Ot){st!==null&&ct.isNodeMaterial&&st.setObject(R,ct),R.onBeforeRender(G,K,ft,ot,ct,Ot),R.modelViewMatrix.multiplyMatrices(ft.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),ct.onBeforeRender(G,K,ft,ot,R,Ot),ct.transparent===!0&&ct.side===os&&ct.forceSinglePass===!1?(ct.side=si,ct.needsUpdate=!0,G.renderBufferDirect(ft,K,ot,ct,R,Ot),ct.side=Ks,ct.needsUpdate=!0,G.renderBufferDirect(ft,K,ot,ct,R,Ot),ct.side=os):G.renderBufferDirect(ft,K,ot,ct,R,Ot),R.onAfterRender(G,K,ft,ot,ct,Ot)}function xs(R,K,ft){K.isScene!==!0&&(K=fe);let ot=lt.get(R),ct=O.state.lights,Ot=O.state.shadowsArray,Ft=ct.state.version,Ct=Xt.getParameters(R,ct.state,Ot,K,ft,O.state.lightProbeGridArray),Zt=Xt.getProgramCacheKey(Ct),ie=ot.programs;ot.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?K.environment:null,ot.fog=K.fog;let ae=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;ot.envMap=Lt.get(R.envMap||ot.environment,ae),ot.envMapRotation=ot.environment!==null&&R.envMap===null?K.environmentRotation:R.envMapRotation,ie===void 0&&(R.addEventListener("dispose",oi),ie=new Map,ot.programs=ie);let Me=ie.get(Zt);if(Me!==void 0){if(ot.currentProgram===Me&&ot.lightsStateVersion===Ft)return Ha(R,Ct),Me}else Ct.uniforms=Xt.getUniforms(R),st!==null&&R.isNodeMaterial&&st.build(R,ft,Ct),R.onBeforeCompile(Ct,G),Me=Xt.acquireProgram(Ct,Zt),ie.set(Zt,Me),ot.uniforms=Ct.uniforms;let Nt=ot.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Nt.clippingPlanes=oe.uniform),Ha(R,Ct),ot.needsLights=Rl(R),ot.lightsStateVersion=Ft,ot.needsLights&&(Nt.ambientLightColor.value=ct.state.ambient,Nt.lightProbe.value=ct.state.probe,Nt.sunLights.value=ct.state.sun,Nt.sunLightShadows.value=ct.state.sunShadow,Nt.directionalLights.value=ct.state.directional,Nt.directionalLightShadows.value=ct.state.directionalShadow,Nt.spotLights.value=ct.state.spot,Nt.spotLightShadows.value=ct.state.spotShadow,Nt.rectAreaLights.value=ct.state.rectArea,Nt.ltc_1.value=ct.state.rectAreaLTC1,Nt.ltc_2.value=ct.state.rectAreaLTC2,Nt.pointLights.value=ct.state.point,Nt.pointLightShadows.value=ct.state.pointShadow,Nt.hemisphereLights.value=ct.state.hemi,Nt.sunShadowMatrix.value=ct.state.sunShadowMatrix,Nt.sunShadowCascade.value=ct.state.sunShadowCascade,Nt.directionalShadowMatrix.value=ct.state.directionalShadowMatrix,Nt.spotLightMatrix.value=ct.state.spotLightMatrix,Nt.spotLightMap.value=ct.state.spotLightMap,Nt.pointShadowMatrix.value=ct.state.pointShadowMatrix),ot.lightProbeGrid=O.state.lightProbeGridArray.length>0,ot.currentProgram=Me,ot.uniformsList=null,Me}function Va(R){if(R.uniformsList===null){let K=R.currentProgram.getUniforms();R.uniformsList=Da.seqWithValue(K.seq,R.uniforms)}return R.uniformsList}function Ha(R,K){let ft=lt.get(R);ft.outputColorSpace=K.outputColorSpace,ft.batching=K.batching,ft.batchingColor=K.batchingColor,ft.instancing=K.instancing,ft.instancingColor=K.instancingColor,ft.instancingMorph=K.instancingMorph,ft.skinning=K.skinning,ft.morphTargets=K.morphTargets,ft.morphNormals=K.morphNormals,ft.morphColors=K.morphColors,ft.morphTargetsCount=K.morphTargetsCount,ft.numClippingPlanes=K.numClippingPlanes,ft.numIntersection=K.numClipIntersection,ft.vertexAlphas=K.vertexAlphas,ft.vertexTangents=K.vertexTangents,ft.toneMapping=K.toneMapping}function Al(R,K){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;I.setFromMatrixPosition(K.matrixWorld);for(let ft=0,ot=R.length;ft<ot;ft++){let ct=R[ft];if(ct.texture!==null&&ct.boundingBox.containsPoint(I))return ct}return null}function Ga(R,K,ft,ot,ct){K.isScene!==!0&&(K=fe),xt.resetTextureUnits();let Ot=K.fog,Ft=ot.isMeshStandardMaterial||ot.isMeshLambertMaterial||ot.isMeshPhongMaterial?K.environment:null,Ct=At===null?G.outputColorSpace:At.isXRRenderTarget===!0?At.texture.colorSpace:Xe.workingColorSpace,Zt=ot.isMeshStandardMaterial||ot.isMeshLambertMaterial&&!ot.envMap||ot.isMeshPhongMaterial&&!ot.envMap,ie=Lt.get(ot.envMap||Ft,Zt),ae=ot.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,Me=!!ft.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),Nt=!!ft.morphAttributes.position,Mt=!!ft.morphAttributes.normal,me=!!ft.morphAttributes.color,_e=Wi;ot.toneMapped&&(At===null||At.isXRRenderTarget===!0)&&(_e=G.toneMapping);let nn=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,An=nn!==void 0?nn.length:0,Qt=lt.get(ot),Ln=O.state.lights;if(Rt===!0&&(V===!0||R!==wt)){let ln=R===wt&&ot.id===_t;oe.setState(ot,R,ln)}let Oe=!1;ot.version===Qt.__version?(Qt.needsLights&&Qt.lightsStateVersion!==Ln.state.version||Qt.outputColorSpace!==Ct||ct.isBatchedMesh&&Qt.batching===!1||!ct.isBatchedMesh&&Qt.batching===!0||ct.isBatchedMesh&&Qt.batchingColor===!0&&ct._colorsTexture===null||ct.isBatchedMesh&&Qt.batchingColor===!1&&ct._colorsTexture!==null||ct.isInstancedMesh&&Qt.instancing===!1||!ct.isInstancedMesh&&Qt.instancing===!0||ct.isSkinnedMesh&&Qt.skinning===!1||!ct.isSkinnedMesh&&Qt.skinning===!0||ct.isInstancedMesh&&Qt.instancingColor===!0&&ct.instanceColor===null||ct.isInstancedMesh&&Qt.instancingColor===!1&&ct.instanceColor!==null||ct.isInstancedMesh&&Qt.instancingMorph===!0&&ct.morphTexture===null||ct.isInstancedMesh&&Qt.instancingMorph===!1&&ct.morphTexture!==null||Qt.envMap!==ie||ot.fog===!0&&Qt.fog!==Ot||Qt.numClippingPlanes!==void 0&&(Qt.numClippingPlanes!==oe.numPlanes||Qt.numIntersection!==oe.numIntersection)||Qt.vertexAlphas!==ae||Qt.vertexTangents!==Me||Qt.morphTargets!==Nt||Qt.morphNormals!==Mt||Qt.morphColors!==me||Qt.toneMapping!==_e||Qt.morphTargetsCount!==An||!!Qt.lightProbeGrid!=O.state.lightProbeGridArray.length>0)&&(Oe=!0):(Oe=!0,Qt.__version=ot.version);let Hn=Qt.currentProgram;Oe===!0&&(Hn=xs(ot,K,ct),st&&ot.isNodeMaterial&&st.onUpdateProgram(ot,Hn,Qt));let En=!1,Ji=!1,Bs=!1,sn=Hn.getUniforms(),_n=Qt.uniforms;if(E.useProgram(Hn.program)&&(En=!0,Ji=!0,Bs=!0),ot.id!==_t&&(_t=ot.id,Ji=!0),Qt.needsLights){let ln=Al(O.state.lightProbeGridArray,ct);Qt.lightProbeGrid!==ln&&(Qt.lightProbeGrid=ln,Ji=!0)}if(En||wt!==R){E.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),sn.setValue(Y,"projectionMatrix",R.projectionMatrix),sn.setValue(Y,"viewMatrix",R.matrixWorldInverse);let Li=sn.map.cameraPosition;Li!==void 0&&Li.setValue(Y,Bt.setFromMatrixPosition(R.matrixWorld)),U.logarithmicDepthBuffer&&sn.setValue(Y,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&sn.setValue(Y,"isOrthographic",R.isOrthographicCamera===!0),wt!==R&&(wt=R,Ji=!0,Bs=!0)}if(Qt.needsLights&&(Ln.state.sunShadowMap.length>0&&sn.setValue(Y,"sunShadowMap",Ln.state.sunShadowMap,xt),Ln.state.directionalShadowMap.length>0&&sn.setValue(Y,"directionalShadowMap",Ln.state.directionalShadowMap,xt),Ln.state.spotShadowMap.length>0&&sn.setValue(Y,"spotShadowMap",Ln.state.spotShadowMap,xt),Ln.state.pointShadowMap.length>0&&sn.setValue(Y,"pointShadowMap",Ln.state.pointShadowMap,xt)),ct.isSkinnedMesh){sn.setOptional(Y,ct,"bindMatrix"),sn.setOptional(Y,ct,"bindMatrixInverse");let ln=ct.skeleton;ln&&(ln.boneTexture===null&&ln.computeBoneTexture(),sn.setValue(Y,"boneTexture",ln.boneTexture,xt))}ct.isBatchedMesh&&(sn.setOptional(Y,ct,"batchingTexture"),sn.setValue(Y,"batchingTexture",ct._matricesTexture,xt),sn.setOptional(Y,ct,"batchingIdTexture"),sn.setValue(Y,"batchingIdTexture",ct._indirectTexture,xt),sn.setOptional(Y,ct,"batchingColorTexture"),ct._colorsTexture!==null&&sn.setValue(Y,"batchingColorTexture",ct._colorsTexture,xt));let ji=ft.morphAttributes;if((ji.position!==void 0||ji.normal!==void 0||ji.color!==void 0)&&Q.update(ct,ft,Hn),(Ji||Qt.receiveShadow!==ct.receiveShadow)&&(Qt.receiveShadow=ct.receiveShadow,sn.setValue(Y,"receiveShadow",ct.receiveShadow)),(ot.isMeshStandardMaterial||ot.isMeshLambertMaterial||ot.isMeshPhongMaterial)&&ot.envMap===null&&K.environment!==null&&(_n.envMapIntensity.value=K.environmentIntensity),_n.dfgLUT!==void 0&&(_n.dfgLUT.value=jb()),Ji){if(sn.setValue(Y,"toneMappingExposure",G.toneMappingExposure),Qt.needsLights&&Cl(_n,Bs),Ot&&ot.fog===!0&&ue.refreshFogUniforms(_n,Ot),ue.refreshMaterialUniforms(_n,ot,yt,vt,O.state.transmissionRenderTarget[R.id]),Qt.needsLights&&Qt.lightProbeGrid){let ln=Qt.lightProbeGrid;_n.probesSH.value=ln.texture,_n.probesMin.value.copy(ln.boundingBox.min),_n.probesMax.value.copy(ln.boundingBox.max),_n.probesResolution.value.copy(ln.resolution)}Da.upload(Y,Va(Qt),_n,xt)}if(ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(Da.upload(Y,Va(Qt),_n,xt),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&sn.setValue(Y,"center",ct.center),sn.setValue(Y,"modelViewMatrix",ct.modelViewMatrix),sn.setValue(Y,"normalMatrix",ct.normalMatrix),sn.setValue(Y,"modelMatrix",ct.matrixWorld),ot.uniformsGroups!==void 0){let ln=ot.uniformsGroups;for(let Li=0,Ne=ln.length;Li<Ne;Li++){let Il=ln[Li];Tt.update(Il,Hn),Tt.bind(Il,Hn)}}return Hn}function Cl(R,K){R.ambientLightColor.needsUpdate=K,R.lightProbe.needsUpdate=K,R.sunLights.needsUpdate=K,R.sunLightShadows.needsUpdate=K,R.directionalLights.needsUpdate=K,R.directionalLightShadows.needsUpdate=K,R.pointLights.needsUpdate=K,R.pointLightShadows.needsUpdate=K,R.spotLights.needsUpdate=K,R.spotLightShadows.needsUpdate=K,R.rectAreaLights.needsUpdate=K,R.hemisphereLights.needsUpdate=K}function Rl(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return pt},this.getActiveMipmapLevel=function(){return gt},this.getRenderTarget=function(){return At},this.setRenderTargetTextures=function(R,K,ft){let ot=lt.get(R);ot.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ot.__autoAllocateDepthBuffer===!1&&(ot.__useRenderToTexture=!1),lt.get(R.texture).__webglTexture=K,lt.get(R.depthTexture).__webglTexture=ot.__autoAllocateDepthBuffer?void 0:ft,ot.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,K){let ft=lt.get(R);ft.__webglFramebuffer=K,ft.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(R,K=0,ft=0){At=R,pt=K,gt=ft;let ot=null,ct=!1,Ot=!1;if(R){let Ct=lt.get(R);if(Ct.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(Y.FRAMEBUFFER,Ct.__webglFramebuffer),bt.copy(R.viewport),Wt.copy(R.scissor),te=R.scissorTest,E.viewport(bt),E.scissor(Wt),E.setScissorTest(te),_t=-1;return}else if(Ct.__webglFramebuffer===void 0)xt.setupRenderTarget(R);else if(Ct.__hasExternalTextures)xt.rebindTextures(R,lt.get(R.texture).__webglTexture,lt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let ae=R.depthTexture;if(Ct.__boundDepthTexture!==ae){if(ae!==null&&lt.has(ae)&&(R.width!==ae.image.width||R.height!==ae.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");xt.setupDepthRenderbuffer(R)}}let Zt=R.texture;(Zt.isData3DTexture||Zt.isDataArrayTexture||Zt.isCompressedArrayTexture)&&(Ot=!0);let ie=lt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ie[K])?ot=ie[K][ft]:ot=ie[K],ct=!0):R.samples>0&&xt.useMultisampledRTT(R)===!1?ot=lt.get(R).__webglMultisampledFramebuffer:Array.isArray(ie)?ot=ie[ft]:ot=ie,bt.copy(R.viewport),Wt.copy(R.scissor),te=R.scissorTest}else bt.copy(jt).multiplyScalar(yt).floor(),Wt.copy(ge).multiplyScalar(yt).floor(),te=ee;if(ft!==0&&(ot=ht),E.bindFramebuffer(Y.FRAMEBUFFER,ot)&&E.drawBuffers(R,ot),E.viewport(bt),E.scissor(Wt),E.setScissorTest(te),ct){let Ct=lt.get(R.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ct.__webglTexture,ft)}else if(Ot){let Ct=K;for(let Zt=0;Zt<R.textures.length;Zt++){let ie=lt.get(R.textures[Zt]);Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0+Zt,ie.__webglTexture,ft,Ct)}}else if(R!==null&&ft!==0){let Ct=lt.get(R.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Ct.__webglTexture,ft)}_t=-1};function Os(R){let K=lt.get(R);return(K.__readFormat!==R.format||K.__readType!==R.type)&&(K.__readFormat=R.format,K.__readType=R.type,K.__formatReadable=U.textureFormatReadable(R.format),K.__typeReadable=U.textureTypeReadable(R.type)),K}this.readRenderTargetPixels=function(R,K,ft,ot,ct,Ot,Ft,Ct=0){if(!(R&&R.isWebGLRenderTarget)){be("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Zt=lt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ft!==void 0&&(Zt=Zt[Ft]),Zt){E.bindFramebuffer(Y.FRAMEBUFFER,Zt);try{let ie=R.textures[Ct],ae=ie.format,Me=ie.type;R.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Ct);let Nt=Os(ie);if(Nt.__formatReadable===!1){be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Nt.__typeReadable===!1){be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=R.width-ot&&ft>=0&&ft<=R.height-ct&&Y.readPixels(K,ft,ot,ct,Ht.convert(ae),Ht.convert(Me),Ot)}finally{let ie=At!==null?lt.get(At).__webglFramebuffer:null;E.bindFramebuffer(Y.FRAMEBUFFER,ie)}}},this.readRenderTargetPixelsAsync=async function(R,K,ft,ot,ct,Ot,Ft,Ct=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Zt=lt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ft!==void 0&&(Zt=Zt[Ft]),Zt)if(K>=0&&K<=R.width-ot&&ft>=0&&ft<=R.height-ct){E.bindFramebuffer(Y.FRAMEBUFFER,Zt);let ie=R.textures[Ct],ae=ie.format,Me=ie.type;R.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Ct);let Nt=Os(ie);if(Nt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Nt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Mt=Y.createBuffer();Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Mt),Y.bufferData(Y.PIXEL_PACK_BUFFER,Ot.byteLength,Y.STREAM_READ),Y.readPixels(K,ft,ot,ct,Ht.convert(ae),Ht.convert(Me),0),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,null);let me=At!==null?lt.get(At).__webglFramebuffer:null;E.bindFramebuffer(Y.FRAMEBUFFER,me);let _e=Y.fenceSync(Y.SYNC_GPU_COMMANDS_COMPLETE,0);return Y.flush(),await b0(Y,_e,4),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Mt),Y.getBufferSubData(Y.PIXEL_PACK_BUFFER,0,Ot),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,null),Y.deleteBuffer(Mt),Y.deleteSync(_e),Ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,K=null,ft=0){let ot=Math.pow(2,-ft),ct=Math.floor(R.image.width*ot),Ot=Math.floor(R.image.height*ot),Ft=K!==null?K.x:0,Ct=K!==null?K.y:0;xt.setTexture2D(R,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,ft,0,0,Ft,Ct,ct,Ot),E.unbindTexture()},this.copyTextureToTexture=function(R,K,ft=null,ot=null,ct=0,Ot=0){let Ft,Ct,Zt,ie,ae,Me,Nt,Mt,me,_e=R.isCompressedTexture?R.mipmaps[Ot]:R.image;if(ft!==null)Ft=ft.max.x-ft.min.x,Ct=ft.max.y-ft.min.y,Zt=ft.isBox3?ft.max.z-ft.min.z:1,ie=ft.min.x,ae=ft.min.y,Me=ft.isBox3?ft.min.z:0;else{let _n=Math.pow(2,-ct);Ft=Math.floor(_e.width*_n),Ct=Math.floor(_e.height*_n),R.isDataArrayTexture?Zt=_e.depth:R.isData3DTexture?Zt=Math.floor(_e.depth*_n):Zt=1,ie=0,ae=0,Me=0}ot!==null?(Nt=ot.x,Mt=ot.y,me=ot.z):(Nt=0,Mt=0,me=0);let nn=Ht.convert(K.format),An=Ht.convert(K.type),Qt;K.isData3DTexture?(xt.setTexture3D(K,0),Qt=Y.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(xt.setTexture2DArray(K,0),Qt=Y.TEXTURE_2D_ARRAY):(xt.setTexture2D(K,0),Qt=Y.TEXTURE_2D),E.activeTexture(Y.TEXTURE0),E.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,K.flipY),E.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),E.pixelStorei(Y.UNPACK_ALIGNMENT,K.unpackAlignment);let Ln=E.getParameter(Y.UNPACK_ROW_LENGTH),Oe=E.getParameter(Y.UNPACK_IMAGE_HEIGHT),Hn=E.getParameter(Y.UNPACK_SKIP_PIXELS),En=E.getParameter(Y.UNPACK_SKIP_ROWS),Ji=E.getParameter(Y.UNPACK_SKIP_IMAGES);E.pixelStorei(Y.UNPACK_ROW_LENGTH,_e.width),E.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,_e.height),E.pixelStorei(Y.UNPACK_SKIP_PIXELS,ie),E.pixelStorei(Y.UNPACK_SKIP_ROWS,ae),E.pixelStorei(Y.UNPACK_SKIP_IMAGES,Me);let Bs=R.isDataArrayTexture||R.isData3DTexture,sn=K.isDataArrayTexture||K.isData3DTexture;if(R.isDepthTexture){let _n=lt.get(R),ji=lt.get(K),ln=lt.get(_n.__renderTarget),Li=lt.get(ji.__renderTarget);E.bindFramebuffer(Y.READ_FRAMEBUFFER,ln.__webglFramebuffer),E.bindFramebuffer(Y.DRAW_FRAMEBUFFER,Li.__webglFramebuffer);for(let Ne=0;Ne<Zt;Ne++)Bs&&(Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,lt.get(R).__webglTexture,ct,Me+Ne),Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,lt.get(K).__webglTexture,Ot,me+Ne)),Y.blitFramebuffer(ie,ae,Ft,Ct,Nt,Mt,Ft,Ct,Y.DEPTH_BUFFER_BIT,Y.NEAREST);E.bindFramebuffer(Y.READ_FRAMEBUFFER,null),E.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else if(ct!==0||R.isRenderTargetTexture||lt.has(R)){let _n=lt.get(R),ji=lt.get(K);E.bindFramebuffer(Y.READ_FRAMEBUFFER,j),E.bindFramebuffer(Y.DRAW_FRAMEBUFFER,et);for(let ln=0;ln<Zt;ln++)Bs?Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,_n.__webglTexture,ct,Me+ln):Y.framebufferTexture2D(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,_n.__webglTexture,ct),sn?Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,ji.__webglTexture,Ot,me+ln):Y.framebufferTexture2D(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,ji.__webglTexture,Ot),ct!==0?Y.blitFramebuffer(ie,ae,Ft,Ct,Nt,Mt,Ft,Ct,Y.COLOR_BUFFER_BIT,Y.NEAREST):sn?Y.copyTexSubImage3D(Qt,Ot,Nt,Mt,me+ln,ie,ae,Ft,Ct):Y.copyTexSubImage2D(Qt,Ot,Nt,Mt,ie,ae,Ft,Ct);E.bindFramebuffer(Y.READ_FRAMEBUFFER,null),E.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else sn?R.isDataTexture||R.isData3DTexture?Y.texSubImage3D(Qt,Ot,Nt,Mt,me,Ft,Ct,Zt,nn,An,_e.data):K.isCompressedArrayTexture?Y.compressedTexSubImage3D(Qt,Ot,Nt,Mt,me,Ft,Ct,Zt,nn,_e.data):Y.texSubImage3D(Qt,Ot,Nt,Mt,me,Ft,Ct,Zt,nn,An,_e):R.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,Ot,Nt,Mt,Ft,Ct,nn,An,_e.data):R.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,Ot,Nt,Mt,_e.width,_e.height,nn,_e.data):Y.texSubImage2D(Y.TEXTURE_2D,Ot,Nt,Mt,Ft,Ct,nn,An,_e);E.pixelStorei(Y.UNPACK_ROW_LENGTH,Ln),E.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,Oe),E.pixelStorei(Y.UNPACK_SKIP_PIXELS,Hn),E.pixelStorei(Y.UNPACK_SKIP_ROWS,En),E.pixelStorei(Y.UNPACK_SKIP_IMAGES,Ji),Ot===0&&K.generateMipmaps&&Y.generateMipmap(Qt),E.unbindTexture()},this.initRenderTarget=function(R){lt.get(R).__webglFramebuffer===void 0&&xt.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?xt.setTextureCube(R,0):R.isData3DTexture?xt.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?xt.setTexture2DArray(R,0):xt.setTexture2D(R,0),E.unbindTexture()},this.resetState=function(){pt=0,gt=0,At=null,E.reset(),Kt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Xe._getDrawingBufferColorSpace(t),e.unpackColorSpace=Xe._getUnpackColorSpace()}};var og=new ii,hu=new Z,Yi=class extends il{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new Sn(t,3)),this.setAttribute("uv",new Sn(e,2))}applyMatrix4(t){let e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new js(e,6,1);return this.setAttribute("instanceStart",new Gi(n,3,0)),this.setAttribute("instanceEnd",new Gi(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new js(e,6,1);return this.setAttribute("instanceColorStart",new Gi(n,3,0)),this.setAttribute("instanceColorEnd",new Gi(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new Jo(t.geometry)),this}fromLineSegments(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ii);let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),og.setFromBufferAttribute(e),this.boundingBox.union(og))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mi),this.boundingBox===null&&this.computeBoundingBox();let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)hu.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(hu)),hu.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(hu));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}};Gt.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new zt},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};ri.line={uniforms:ml.merge([Gt.common,Gt.fog,Gt.line]),vertexShader:`
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
		`};var hs=class extends kn{constructor(t){super({type:"LineMaterial",uniforms:ml.clone(ri.line.uniforms),vertexShader:ri.line.vertexShader,fragmentShader:ri.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0!==this.worldUnits&&(this.needsUpdate=!0),t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var Nf=new an,lg=new Z,cg=new Z,Wn=new an,Xn=new an,us=new an,Uf=new Z,Ff=new qe,qn=new rl,hg=new Z,uu=new ii,du=new mi,ds=new an,fs,Nr;function ug(i,t,e){return ds.set(0,0,-t,1).applyMatrix4(i.projectionMatrix),ds.multiplyScalar(1/ds.w),ds.x=Nr/e.width,ds.y=Nr/e.height,ds.applyMatrix4(i.projectionMatrixInverse),ds.multiplyScalar(1/ds.w),Math.abs(Math.max(ds.x,ds.y))}function Kb(i,t){let e=i.matrixWorld,n=i.geometry,s=n.attributes.instanceStart,r=n.attributes.instanceEnd,a=Math.min(n.instanceCount,s.count);for(let l=0,h=a;l<h;l++){qn.start.fromBufferAttribute(s,l),qn.end.fromBufferAttribute(r,l),qn.applyMatrix4(e);let u=new Z,d=new Z;fs.distanceSqToSegment(qn.start,qn.end,d,u),d.distanceTo(u)<Nr*.5&&t.push({point:d,pointOnLine:u,distance:fs.origin.distanceTo(d),object:i,face:null,faceIndex:l,uv:null,uv1:null})}}function Qb(i,t,e){let n=t.projectionMatrix,r=i.material.resolution,a=i.matrixWorld,l=i.geometry,h=l.attributes.instanceStart,u=l.attributes.instanceEnd,d=Math.min(l.instanceCount,h.count),v=-t.near;fs.at(1,us),us.w=1,us.applyMatrix4(t.matrixWorldInverse),us.applyMatrix4(n),us.multiplyScalar(1/us.w),us.x*=r.x/2,us.y*=r.y/2,us.z=0,Uf.copy(us),Ff.multiplyMatrices(t.matrixWorldInverse,a);for(let g=0,S=d;g<S;g++){if(Wn.fromBufferAttribute(h,g),Xn.fromBufferAttribute(u,g),Wn.w=1,Xn.w=1,Wn.applyMatrix4(Ff),Xn.applyMatrix4(Ff),Wn.z>v&&Xn.z>v)continue;if(Wn.z>v){let $=Wn.z-Xn.z,I=(Wn.z-v)/$;Wn.lerp(Xn,I)}else if(Xn.z>v){let $=Xn.z-Wn.z,I=(Xn.z-v)/$;Xn.lerp(Wn,I)}Wn.applyMatrix4(n),Xn.applyMatrix4(n),Wn.multiplyScalar(1/Wn.w),Xn.multiplyScalar(1/Xn.w),Wn.x*=r.x/2,Wn.y*=r.y/2,Xn.x*=r.x/2,Xn.y*=r.y/2,qn.start.copy(Wn),qn.start.z=0,qn.end.copy(Xn),qn.end.z=0;let L=qn.closestPointToPointParameter(Uf,!0);qn.at(L,hg);let _=ff.lerp(Wn.z,Xn.z,L),m=_>=-1&&_<=1,z=Uf.distanceTo(hg)<Nr*.5;if(m&&z){qn.start.fromBufferAttribute(h,g),qn.end.fromBufferAttribute(u,g),qn.start.applyMatrix4(a),qn.end.applyMatrix4(a);let $=new Z,I=new Z;fs.distanceSqToSegment(qn.start,qn.end,I,$),e.push({point:I,pointOnLine:$,distance:fs.origin.distanceTo(I),object:i,face:null,faceIndex:g,uv:null,uv1:null})}}}var Ur=class extends Bn{constructor(t=new Yi,e=new hs({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,s=new Float32Array(2*e.count);for(let a=0,l=0,h=e.count;a<h;a++,l+=2)lg.fromBufferAttribute(e,a),cg.fromBufferAttribute(n,a),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+lg.distanceTo(cg);let r=new js(s,2,1);return t.setAttribute("instanceDistanceStart",new Gi(r,1,0)),t.setAttribute("instanceDistanceEnd",new Gi(r,1,1)),this}raycast(t,e){let n=this.material.worldUnits,s=t.camera;if(s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.'),n===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;let r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;fs=t.ray;let a=this.matrixWorld,l=this.geometry,h=this.material;Nr=h.linewidth+r,l.boundingSphere===null&&l.computeBoundingSphere(),du.copy(l.boundingSphere).applyMatrix4(a);let u;if(n)u=Nr*.5;else{let v=Math.max(s.near,du.distanceToPoint(fs.origin));u=ug(s,v,h.resolution)}if(du.radius+=u,fs.intersectsSphere(du)===!1)return;l.boundingBox===null&&l.computeBoundingBox(),uu.copy(l.boundingBox).applyMatrix4(a);let d;if(n)d=Nr*.5;else{let v=Math.max(s.near,uu.distanceToPoint(fs.origin));d=ug(s,v,h.resolution)}uu.expandByScalar(d),fs.intersectsBox(uu)!==!1&&(n?Kb(this,e):Qb(this,s,e))}onBeforeRender(t){let e=this.material.uniforms;e&&e.resolution&&(t.getViewport(Nf),this.material.uniforms.resolution.value.set(Nf.z,Nf.w))}};var fu=i=>i<90?Math.round(i)+" s":i<5400?Math.round(i/60)+" min":i<129600?Math.round(i/3600)+" h":Math.round(i/86400)+(window.__L==="en"?" days":window.__L==="ca"?" dies":" d\xEDas"),ps=i=>window.__L==="en"?i+" ago":(window.__L==="ca"?"fa ":"hace ")+i;function dg(i){let t=window.__ROD__,{scene:e,camera:n,goal:s,cur:r,invalidate:a,K:l,CX:h,CY:u,mcs:d,q:v,list:g,clamp:S,norm:w,munis:L}=i,_=o=>document.querySelector(o),m=o=>String(o).replace(/[<>&"]/g,c=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[c]),z=(o,c)=>[(o-h)*l,(c-u)*l],$=.06,I=t.segs.map(o=>{let c=[],f=[0];for(let p=0;p<o.length;p+=2){let y=z(o[p],o[p+1]);c.length&&f.push(f[f.length-1]+Math.hypot(y[0]-c[c.length-1][0],y[1]-c[c.length-1][1])),c.push(y)}return{p:c,c:f,L:f[f.length-1]}}),T=t.stops.map(([o,c,f,p])=>({n:o,id:p,w:z(c,f),fams:new Set})),O=t.routes.map(([o,c,f])=>({s:o,l:c,c:f})),W=new Map;(t.bus||[]).forEach(([o,c,f,p])=>{let y={days:new Set(o),name:c,stops:f,times:p};f.forEach((M,P)=>{if(P<f.length-1){let N=W.get(M)||[];N.push([y,P]),W.set(M,N)}})});function A(o,c,f){let p=ee(),y=t.days.indexOf(p.ymd),M=[];for(let[P,N]of W.get(o)||[]){if(!P.days.has(y))continue;let D=P.times[N];if(D<c||D>f)continue;let k=P.stops[P.stops.length-1];M.push({sm:D,est:D,dl:0,fam:P.name,dest:T[k].n,destId:T[k].id,plat:"",cancel:!1,obs:"",live:!1,num:"",tid:"",tr:null,bus:!0,src:"bus",bstops:P.stops.slice(N)})}return M}let F=(o,c)=>{let f=o.match(/^R([A-Z]*)(\d*)(.*)$/),p=c.match(/^R([A-Z]*)(\d*)(.*)$/);return(f[1]||"").localeCompare(p[1]||"")||(+f[2]||0)-(+p[2]||0)||f[3].localeCompare(p[3])},G=[...new Set(O.map(o=>o.s))].sort(F),X={};O.forEach(o=>{X[o.s]||(X[o.s]=o.c)});let st=t.pats.map(([o,c,f])=>({stops:o,t:c,segs:f})),ht=t.trips.map(([o,c,f,p,y],M)=>({day:o,pat:st[c],fam:O[f].s,c:O[f].c,t0:p,num:y,tid:t.tids[M]})),j={};G.forEach(o=>j[o]=new Set),ht.forEach(o=>{o.pat.segs.forEach(c=>j[o.fam].add(c)),o.pat.stops.forEach(c=>T[c].fams.add(o.fam))});let et=t.days.map((o,c)=>ht.filter(f=>f.day===c)),pt=new Map(ht.map(o=>[o.tid,o])),gt=[124.87404143965449,479.9901289885639,124.62688710863031,249.99562739146893,486.739003764725,248.0364802782304,2037.1344308355726],At=Math.PI/180,_t=3.922*At,wt=-39.705*At;function bt(o,c){let f=o*At+_t,p=c*At,y=Math.cos(wt),M=Math.sin(wt),P=Math.cos(p),N=Math.cos(f)*P,D=Math.sin(f)*P,k=Math.sin(p),H=Math.atan2(D,N*y-k*M),x=Math.asin(k*y+N*M),b=Math.sqrt(2/(1+Math.cos(H)*Math.cos(x))),C=b*Math.cos(x)*Math.sin(H),B=b*Math.sin(x),[at,rt,q,dt,J,le,ve]=gt;return z((rt+at*C-J)*ve,(le-(dt-q*B))*ve)}let Wt=new Map(T.map((o,c)=>[o.id,c]));function te(o){if(o.g)return o.g;let c=[],f=[],p=[0],y=0;return o.segs.forEach((M,P)=>{let N=I[M];N.p.forEach((D,k)=>{P&&!k||(c.push(D),f.push(y+N.c[k]))}),y+=N.L,p.push(y)}),o.g={pts:c,cum:f,stopD:p}}function Ye(o,c,f,p){let y=1e18,M=0;for(let P=0;P+1<o.pts.length;P++){if(o.cum[P+1]<f||o.cum[P]>p)continue;let N=o.pts[P],D=o.pts[P+1],k=D[0]-N[0],H=D[1]-N[1],x=k*k+H*H||1e-9,b=Math.max(0,Math.min(1,((c[0]-N[0])*k+(c[1]-N[1])*H)/x)),C=N[0]+k*b-c[0],B=N[1]+H*b-c[1],at=C*C+B*B;at<y&&(y=at,M=o.cum[P]+b*(o.cum[P+1]-o.cum[P]))}return{d:M,err:Math.sqrt(y)}}function Le(o,c){let f=0,p=o.cum.length-1;if(c<=0)return o.pts[0];if(c>=o.cum[p])return o.pts[p];for(;p-f>1;){let N=f+p>>1;o.cum[N]<=c?f=N:p=N}let y=(c-o.cum[f])/(o.cum[p]-o.cum[f]||1),M=o.pts[f],P=o.pts[p];return[M[0]+(P[0]-M[0])*y,M[1]+(P[1]-M[1])*y]}let Ve=o=>`${o.slice(6,8)}/${o.slice(4,6)}`,vt=new Intl.DateTimeFormat("es-ES",{timeZone:"Europe/Madrid",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hourCycle:"h23"});function yt(o){let c={};return vt.formatToParts(o).forEach(f=>c[f.type]=f.value),{ymd:c.year+c.month+c.day,min:+c.hour*60+ +c.minute+ +c.second/60}}let Ut=0,he=null,jt=0,ge=0;function ee(){let o=yt(new Date);if(Ut===0&&he==null)return{...o,live:!0};let c=he==null?o.min:jt+(Ut?(performance.now()-ge)/6e4*Ut:0);return{ymd:o.ymd,min:c,live:!1}}let nt=o=>(o=(Math.floor(o+1e-6)%1440+1440)%1440,String(Math.floor(o/60)).padStart(2,"0")+":"+String(o%60).padStart(2,"0")),Rt="https://rodalies.erathegameoftime.com",V={url:"",delays:new Map,tu:new Map,vp:new Map,alerts:[],ok:0,okVP:0,err:"",feedTs:0};try{let o=new URLSearchParams(location.search).get("rt");o&&localStorage.setItem("rod_rt",o);let c=localStorage.getItem("rod_rt");c&&/jhmuyo\.workers\.dev/.test(c)&&(c=Rt,localStorage.setItem("rod_rt",c)),V.url=c||Rt}catch{V.url=Rt}let Pt=(o,c)=>{let f=new AbortController,p=setTimeout(()=>f.abort(),12e3);return fetch(o+c,{cache:"no-store",signal:f.signal}).then(y=>{if(clearTimeout(p),!y.ok)throw new Error("HTTP "+y.status);return y.json()},y=>{throw clearTimeout(p),y})},Bt="https://rodalies.jhmuyo.workers.dev";function ce(){return(V.url===Rt&&V.altUntil>Date.now()?Bt:V.url).replace(/\/+$/,"")}let fe=o=>/^51/.test(o||"");async function de(){if(!V.url){it();return}let o=ce();if(!de.busy){de.busy=1;try{await Te(o)}finally{de.busy=0}}}async function Te(o){let c=!V.adifAt||Date.now()-V.adifAt>11e4,f=x=>({status:"fulfilled",value:x}),p=x=>({status:"rejected",reason:x}),y,M,P,N,D,k=null;if(V.noLive&&Date.now()-V.noLive>30*6e4&&(V.noLive=0),!V.noLive)try{k=await Pt(o,"/live.json")}catch(x){if(/HTTP 404/.test(x.message))V.noLive=Date.now();else{if(V.url===Rt&&o!==Bt)return V.altUntil=Date.now()+30*6e4,Te(Bt);o===Bt&&(V.altUntil=0),k={__fail:x}}}if(k&&k.__fail)y=M=P=N=D=p(k.__fail);else if(k&&k.v===1){let x=C=>k[C]&&!k[C].__err?f(k[C]):p(new Error(k[C]&&k[C].__err||"sin dato"));y=x("tu"),M=x("vp"),P=x("al"),N=x("nt"),D=c?x("ad"):p(0);let b=k.rep;b&&Array.isArray(b.items)&&(V.rep=b.items,V.repSkew=(b.now||Date.now())-Date.now(),b.tipos&&(V.tipos=b.tipos),V.repOk=Date.now(),V.repFail=0)}else(!V.repFail||Date.now()-V.repFail>15*6e4)&&Pt(o,"/reports.json").then(x=>{x&&Array.isArray(x.items)?(V.rep=x.items,V.repSkew=(x.now||Date.now())-Date.now(),x.tipos&&(V.tipos=x.tipos),V.repOk=Date.now(),V.repFail=0):V.repFail=Date.now()}).catch(()=>{V.repFail=Date.now(),V.repOk=0}),[y,M,P,N,D]=await Promise.allSettled([Pt(o,"/trip_updates.json"),Pt(o,"/vehicle_positions.json"),Pt(o,"/alerts.json"),Pt(o,"/notices.json"),c?Pt(o,"/adif.json"):Promise.reject(0)]);if(D.status==="fulfilled"&&D.value&&D.value.ok?(V.adif=D.value,V.adifAt=Date.now()):c&&(V.adifAt=Date.now()-6e4),y.status==="fulfilled"){let x=new Map,b=new Map;for(let C of y.value.entity||[]){let B=C.tripUpdate;if(!B||!B.trip||!fe(B.trip.tripId))continue;let at=B.trip.tripId,rt=(B.stopTimeUpdate||[])[0],q=B.delay;q==null&&rt&&(q=(rt.arrival||rt.departure||{}).delay),B.trip.scheduleRelationship==="CANCELED"&&(q="X"),q!=null&&x.set(at,q),b.set(at,{next:rt?{sid:rt.stopId,t:+((rt.arrival||rt.departure||{}).time||0)}:null})}V.delays=x,V.tu=b,V.ok=Date.now(),V.feedTs=+((y.value.header||{}).timestamp||0)*1e3,V.err=""}else V.err=y.reason&&y.reason.message||__t(0);if(M.status==="fulfilled"){let x=new Map,b=Date.now()/1e3;for(let C of M.value.entity||[]){let B=C.vehicle;if(!B||!B.trip||!fe(B.trip.tripId)||!B.position)continue;let at=B.vehicle&&B.vehicle.label||"",rt=at.match(/PLATF\.\(([^)]+)\)/),q=V.vp.get(B.trip.tripId),dt={tid:B.trip.tripId,w:bt(+B.position.longitude,+B.position.latitude),st:B.currentStatus||"",sid:B.stopId||"",ts:+B.timestamp||b,label:at,plat:rt?rt[1]:"",fam:(at.split("-")[0]||"").trim(),num:B.vehicle&&B.vehicle.id||""};dt.disp=q?q.disp:null,x.set(dt.tid,dt)}V.vp=x,V.okVP=Date.now()}let H=[];if(N.status==="fulfilled"&&Array.isArray(N.value.included)){V.okNotices=Date.now();for(let x of N.value.included){let b=new Set((x.lines||[]).map(q=>q.id).filter(q=>X[q])),C=(q,dt)=>{q=q||{},dt=dt||window.__L;let J=q[dt];return dt==="en"&&J&&(J===q.ca||/\b(els|amb|dels|per una|circulen|serveis|entre .{2,40} i )\b|ç|l·l/i.test(J))&&(J=""),(J||q.es||q.ca||"").trim()},B=q=>[C(x.description,q),C(x.title,q)].sort((dt,J)=>J.length-dt.length)[0],at=B(),rt=B("es");at&&H.push({id:"N"+x.externalId,fams:b,stops:new Set,txt:at,es:rt,when:(x.date||"")+"T"+(x.time||""),src:"Rodalies",core:x.core||""})}}if(P.status==="fulfilled"){let x=+((P.value.header||{}).timestamp||0);if(V.alertsTs=x,Date.now()/1e3-x<6*3600)for(let b of P.value.entity||[]){let C=b.alert;if(!C)continue;let B=new Set,at=new Set;for(let J of C.informedEntity||[])(J.routeId||"").startsWith("51")&&B.add(J.routeId.replace(/^51T\d+/,"")),J.stopId&&Wt.has(J.stopId)&&at.add(Wt.get(J.stopId));if(!B.size&&!at.size)continue;let rt=(C.descriptionText||C.headerText||{translation:[]}).translation||[],q=((rt.find(J=>J.language==="es")||rt[0]||{}).text||"").trim(),dt=+((C.activePeriod||[])[0]||{}).start||0;H.some(J=>J.txt===q)||H.push({id:b.id,fams:B,stops:at,txt:q,when:dt?new Date(dt*1e3).toISOString().slice(0,19):"",src:"Renfe"})}}if(V.adif&&Date.now()-V.adifAt<15*6e4)for(let[x,b]of(V.adif.items||[]).entries()){let C=(b.t?b.t+". ":"")+b.txt,B=new Set,at=new Set,rt=w(C);for(let q of C.matchAll(/\b(R\d{1,2}[NS]?|R3a|RG1|RL\d|RT\d)\b/g))X[q[1]]&&B.add(q[1]);T.forEach((q,dt)=>{q.fams.size&&q.n.length>4&&rt.includes(w(q.n))&&(at.add(dt),B.size||q.fams.forEach(J=>B.add(J)))}),H.some(q=>q.txt===C)||H.push({id:"A"+x,fams:B,stops:at,txt:C,when:V.adif.upd||"",src:"Adif",lvl:b.lvl})}if(N.status==="fulfilled"||P.status==="fulfilled"){V.alerts=H.sort((x,b)=>b.when>x.when?1:-1);try{u_()}catch{}}it(),Nu(),Me=0,a()}let Y=()=>V.okVP&&Date.now()-V.okVP<10*6e4,Fe=()=>V.okVP&&Date.now()-V.okVP<9e4,De={at:0,v:!1},U=()=>{if(!Y()||V.vp.size>0)return!1;if(Date.now()-De.at>3e4){De.at=Date.now();let o=yt(new Date),c=t.days.indexOf(o.ymd),f=0;if(c>=0)for(let p of et[c]){let y=o.min-p.t0;y>p.pat.t[1]+2&&y<p.pat.t[p.pat.t.length-2]-2&&f++}De.v=f>=6}return De.v},E=()=>Y()&&!U();function it(){let o=_("#rtst"),c=_("#mode");if(c){let p=[...ut].filter(N=>{no("");let D=Ui.m.get(N);return D&&D[0]>=2}),y=eo(p),M=!!E()&&ee().live&&!(p.length&&y.length===p.length);c.classList.toggle("on",M&&Fe()),c.classList.toggle("pre",!(M&&Fe())),c.textContent=M&&!Fe()?__t(1):M?__t(2):Lt.cur?__t(3):__t(4),c.classList.toggle("past",!!Lt.cur);let P=_("#rcgrab");if(P){let N=P.querySelector(".rdot");N||(N=document.createElement("b"),N.className="rdot",P.insertBefore(N,P.firstChild)),N.className="rdot "+(Lt.cur?"past":M&&Fe()?"on":"pre"),N.title=c.textContent}c.title=Lt.cur?`${__t(5)}${Lt.cur.sn.t}${__t(6)}`:""}if(!o)return;V.url?V.err?o.textContent=__t(8)+V.err+__t(9):E()?o.innerHTML=`${__t(10)}${V.vp.size}${__t(11)}${V.delays.size}${__t(12)}${new Date(V.okVP).toLocaleTimeString("es-ES",{hour:"2-digit",minute:"2-digit",second:"2-digit"})}`:U()?o.textContent=__t(13):o.textContent=__t(14):o.textContent=V.err||__t(7);let f=_("#rturl");f&&f._shown!==V.url&&(f.value=V.url,f._shown=V.url)}_("#rtsave").onclick=()=>{let o=_("#rturl").value.trim().replace(/\/+(alerts|trip_updates|vehicle_positions)\.json$/,"").replace(/\/+$/,"");if(o&&!/^https?:\/\//.test(o)&&(o="https://"+o),!o){V.err=__t(15),it();return}V.url=o;try{localStorage.setItem("rod_rt",o)}catch{}V.ok=0,V.err="",it(),de()},_("#rtoff").onclick=()=>{V.url=Rt;try{localStorage.removeItem("rod_rt")}catch{}d._h="",de()};let lt=0;setInterval(()=>{let o=cn.size||Se;(document.hidden?!o||Date.now()-lt<115e3:Date.now()-lt<15e3)||(lt=Date.now(),de())},2e4),setTimeout(()=>{lt=Date.now(),de()},50),document.addEventListener("visibilitychange",()=>{!document.hidden&&Date.now()-lt>15e3&&(lt=Date.now(),de())});let Lt={snap:null,key:""};function kt(){let o=ee();if(o.live||!Ne.hoy||!Ne.hoy.snaps||Ut&&he==null)return null;let c=yt(new Date).min;if(o.min>c+1)return null;let f=null;for(let p of Ne.hoy.snaps){if(!p.d)continue;let y=_p(p.t);y<=o.min+1&&(!f||y>f.m)&&(f={m:y,sn:p})}return f&&o.min-f.m<=25?f:null}let mt=o=>{{let y=Iu(o.num);if(y&&y.cx&&ee().live)return"X"}let c=Lt.cur;if(c){if(c.sn.x&&c.sn.x.includes(o.tid))return"X";let y=c.sn.d[o.tid];return y??0}if(!E())return null;let f=V.delays.get(o.tid),p=V.vp.get(o.tid);return f==="X"?f:p&&p.pre&&p.preDl>=1?Math.max(typeof f=="number"?f:0,p.preDl*60):f??null},ut=new Set(G);try{let o=JSON.parse(localStorage.getItem("rod_lines")||"null");Array.isArray(o)&&o.some(c=>G.includes(c))&&(ut.clear(),o.forEach(c=>G.includes(c)&&ut.add(c)))}catch{}let Xt=new Yi,ue=new Yi,Yt=new hs({vertexColors:!0,linewidth:3.2,depthTest:!1,transparent:!0}),Vt=new hs({color:16777215,linewidth:6,depthTest:!1,transparent:!0,opacity:.9}),oe=new Ur(Xt,Yt),pe=new Ur(ue,Vt);pe.renderOrder=20,oe.renderOrder=21,oe.frustumCulled=pe.frustumCulled=!1,e.add(pe,oe);function Ae(o){let c=o[0]/l+h,f=o[1]/l+u;for(let p of L){if(p._bb===void 0){let M=1e9,P=1e9,N=-1e9,D=-1e9;for(let k of p.rings||[]){let H=k[0]||[];for(let x=0;x<H.length;x+=2)H[x]<M&&(M=H[x]),H[x]>N&&(N=H[x]),H[x+1]<P&&(P=H[x+1]),H[x+1]>D&&(D=H[x+1])}p._bb=[M,P,N,D]}let y=p._bb;if(!(c<y[0]||c>y[2]||f<y[1]||f>y[3]))for(let M of p.rings||[]){let P=M[0]||[],N=!1;for(let D=0,k=P.length,H=k-2;D<k;H=D,D+=2){let x=P[D+1],b=P[H+1];x>f!=b>f&&c<(P[H]-P[D])*(f-x)/(b-x)+P[D]&&(N=!N)}if(N)return!0}}return!1}let Q=!1;function qt(){Q||!L.length||(Q=!0,T.forEach(o=>{o.ext=!Ae(o.w)}),I.forEach(o=>{o.ext=!Ae(o.p[0])&&!Ae(o.p[o.p.length-1])&&!Ae(o.p[o.p.length>>1])}))}let St=()=>{let o=new Set(ut.size<=2?ut:[]);try{Mt&&Mt.fam&&o.add(Mt.fam)}catch{}return o},Ht="";function Kt(){qt();let o=[],c=[],f=new Set,p=new xe,y=new xe("#d2d0d0"),M=St();Ht=[...M].join();for(let H of G)if(ut.has(H))for(let x of j[H]){if(f.has(x))continue;f.add(x);let b=I[x].p;p.set(X[H]),I[x].ext&&!M.has(H)&&p.lerp(y,.55);for(let C=0;C+1<b.length;C++)o.push(b[C][0],b[C][1],$,b[C+1][0],b[C+1][1],$),c.push(p.r,p.g,p.b,p.r,p.g,p.b)}o.length||(o.push(0,0,-50,0,0,-50),c.push(0,0,0,0,0,0));let P=new Yi,N=new Yi;P.setPositions(o),P.setColors(c),N.setPositions(o);let D=oe.geometry,k=pe.geometry;oe.geometry=P,pe.geometry=N,D&&D.dispose(),k&&k.dispose(),a()}Kt();let Tt=o=>new kn({uniforms:{dpr:{value:Math.min(devicePixelRatio||1,2)},border:{value:new xe(o)}},vertexShader:"attribute float size; attribute vec3 fill; attribute float bw; varying vec3 vF; varying float vS; varying float vB; uniform float dpr; void main(){ vF=fill; vS=size*dpr; vB=bw*dpr; gl_PointSize=vS; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"uniform vec3 border; varying vec3 vF; varying float vS; varying float vB; void main(){ float r=length(gl_PointCoord*2.0-1.0)*vS*0.5; float R=vS*0.5; if(r>R) discard; float a=1.0-smoothstep(R-1.2,R,r); vec3 c = r>R-vB ? border : vF; gl_FragColor=vec4(c,a); }",transparent:!0,depthTest:!1}),se=new Mn,ne=T.length,tn=new Float32Array(ne*3),Ze=new Float32Array(ne*3),$n=new Float32Array(ne),oi=new Float32Array(ne);T.forEach((o,c)=>{tn[c*3]=o.w[0],tn[c*3+1]=o.w[1],tn[c*3+2]=$,Ze.set([1,1,1],c*3),$n[c]=6,oi[c]=1.6}),se.setAttribute("position",new hn(tn,3)),se.setAttribute("fill",new hn(Ze,3)),se.setAttribute("size",new hn($n,1)),se.setAttribute("bw",new hn(oi,1));let El=Tt("#1d2330"),$a=new Ar(se,El);$a.renderOrder=22,$a.frustumCulled=!1,e.add($a);function Vn(){let o=r.dist<45,c=St();T.forEach((f,p)=>{let y=[...f.fams].some(P=>ut.has(P)),M=f.ext&&![...f.fams].some(P=>c.has(P))&&p!==me;$n[p]=y?p===me?13:M?3:o?8:5:0,oi[p]=p===me?3:1.6}),se.attributes.size.needsUpdate=!0,se.attributes.bw.needsUpdate=!0}let li=600,Ii=new Mn,ar=new Float32Array(li*3),or=new Float32Array(li*3),Pi=new Float32Array(li),$r=new Float32Array(li);Ii.setAttribute("position",new hn(ar,3)),Ii.setAttribute("fill",new hn(or,3)),Ii.setAttribute("size",new hn(Pi,1)),Ii.setAttribute("bw",new hn($r,1));let Us=new Float32Array(li);Ii.setAttribute("ang",new hn(Us,1));let Tl=new kn({uniforms:{dpr:{value:Math.min(devicePixelRatio||1,2)},border:{value:new xe("#ffffff")}},vertexShader:"attribute float size; attribute vec3 fill; attribute float bw; attribute float ang; varying vec3 vF; varying float vS; varying float vB; varying float vA; uniform float dpr; void main(){ vF=fill; vS=size*dpr; vB=bw*dpr; vA=ang; gl_PointSize=vS; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"uniform vec3 border; varying vec3 vF; varying float vS; varying float vB; varying float vA; void main(){ vec2 p=gl_PointCoord*2.0-1.0; float r=length(p)*vS*0.5; float R=vS*0.5; if(r>R) discard; float a=1.0-smoothstep(R-1.2,R,r); vec3 c = r>R-vB ? border : vF; if(vA<50.0){ vec2 d=vec2(sin(vA),-cos(vA)); vec2 n=vec2(cos(vA),sin(vA)); float qy=-dot(p,d); float qx=dot(p,n); float w=(qy+0.66)/0.98*0.48; if(qy>-0.66 && qy<0.32 && abs(qx)<w) c=vec3(1.0); } else if(vA>70.0 && vA<80.0){ if(abs(p.y)<0.36 && abs(abs(p.x)-0.2)<0.1) c=vec3(1.0); } else if(vA>80.0 && vA<90.0){ if((abs(p.x)<0.11 && p.y>-0.5 && p.y<0.16) || length(p-vec2(0.0,0.38))<0.12) c=vec3(1.0); } gl_FragColor=vec4(c,a); }",transparent:!0,depthTest:!1}),Fs=new Ar(Ii,Tl);Fs.renderOrder=24,Fs.frustumCulled=!1,e.add(Fs);let Zi=new Mn,xs=new Float32Array(li*3),Va=new Float32Array(li*3),Ha=new Float32Array(li),Al=new Float32Array(li);Zi.setAttribute("position",new hn(xs,3)),Zi.setAttribute("fill",new hn(Va,3)),Zi.setAttribute("size",new hn(Ha,1)),Zi.setAttribute("bw",new hn(Al,1));let Ga=new Ar(Zi,Tt("#ffffff"));Ga.renderOrder=23,Ga.frustumCulled=!1,e.add(Ga);function Cl(o,c){let f=I[o],p=c*f.L,y=0,M=f.c.length-1;for(;M-y>1;){let H=y+M>>1;f.c[H]<=p?y=H:M=H}let P=f.c[M]-f.c[y]||1,N=(p-f.c[y])/P,D=f.p[y],k=f.p[M];return[D[0]+(k[0]-D[0])*N,D[1]+(k[1]-D[1])*N]}let Rl=o=>o*o*(3-2*o)*.35+o*.65;function Os(o,c){let f=o.pat.t,p=o.pat.stops.length,y=f[2*p-2];if(c<f[1]-2||c>y+1)return null;if(c<=f[1])return{w:T[o.pat.stops[0]].w,at:0,next:0,moving:!1};for(let M=0;M<p-1;M++){let P=f[2*M+1],N=f[2*M+2],D=f[2*M+3];if(c<=N){let k=N>P?(c-P)/(N-P):1;return{w:Cl(o.pat.segs[M],Rl(S(k,0,1))),at:-1,next:M+1,prev:M,moving:!0}}if(c<=D)return{w:T[o.pat.stops[M+1]].w,at:M+1,next:M+1,moving:!1}}return{w:T[o.pat.stops[p-1]].w,at:p-1,next:p-1,moving:!1}}function R(o){let c=t.days.indexOf(o.ymd),f=[];if(c<0)return{k:c,out:f};let p=(y,M)=>{for(let P of y){if(!ut.has(P.fam))continue;let N=mt(P);if(N==="X")continue;let D=(N||0)/60,k=o.min+M-P.t0-D;if(k<-2||k>P.pat.t[P.pat.t.length-2]+1)continue;let H=Os(P,k);H&&f.push({tr:P,p:H,rel:k,dl:D,live:N!=null})}};return p(et[c],0),c>0&&p(et[c-1],1440),{k:c,out:f}}function K(o,c,f,p){let y=o.pat.stops[0],M=c.dep0,P=null,N=(k,H)=>{for(let x of k||[]){let b=x.pat.stops,C=b.length;if(b[C-1]!==y||x===o)continue;let B=x.t0+x.pat.t[2*(C-1)]-H;if(B>M+5||B<M-120)continue;let at=te(x.pat),rt=Ye(at,c.w,-1,1e9);if(rt.err>.6)continue;let q=at.stopD,dt=x.pat.t,J=q.findIndex(Jt=>Jt>rt.d);J<0&&(J=C-1);let le=J===0?dt[1]:dt[2*J-1]+(q[J]>q[J-1]?(rt.d-q[J-1])/(q[J]-q[J-1]):1)*(dt[2*J]-dt[2*J-1]),ve=f-(x.t0+le-H);ve<-5||ve>120||(!P||Math.abs(ve)<Math.abs(P.prevDl))&&(P={prevTr:x,dPrev:rt.d,prevDl:ve,arrO:B+Math.max(0,ve)})}};if(N(et[p],0),p>0&&N(et[p-1],1440),!P)return{prevTr:null,preDl:0};let D=Math.max(M,P.arrO+3);return{...P,depEst:D,preDl:Math.max(0,D-M)}}function ft(o,c,f){let p=o.pat.t,y=c.length;if(!(f>=0))return f<0?c[0]:null;for(let M=0;M<y;M++)if(f<=p[2*M+1]){if(f>=p[2*M]||M===0)return c[M];let P=p[2*M-1],N=p[2*M];return c[M-1]+(c[M]-c[M-1])*(N>P?(f-P)/(N-P):1)}return c[y-1]}let ot=performance.now();function ct(){let o=[],c=Date.now()/1e3,f=performance.now(),p=Math.min(1,(f-ot)/1e3);ot=f;for(let y of V.vp.values()){let M=pt.get(y.tid),P=M?M.fam:y.fam;if(P&&X[P]&&!ut.has(P))continue;let N=V.delays.get(y.tid),D=typeof N=="number"?N/60:0,k=Math.max(0,c-y.ts);y.mvTs!==y.ts&&((!y.mvW||Math.hypot(y.w[0]-y.mvW[0],y.w[1]-y.mvW[1])>.025)&&(y.mvW=y.w,y.mvAt=y.ts),y.mvTs=y.ts),y.still=y.ts-(y.mvAt||y.ts);let H=y.w,x=-1;if(M){let C=te(M.pat),B=C.stopD;if(y.dObs==null||y.obsAt!==y.ts){let J=Ye(C,y.w,-1,1e9);y.dObs=J.d,y.err=J.err,y.obsAt=y.ts}let at=ee(),rt=t.days.indexOf(at.ymd),q=M.day===rt-1?1440:0,dt=M.t0+M.pat.t[1]-q;if(y.pre=at.min+D<dt-1&&(y.dObs>B[0]+.35||y.err>.6)&&!(y.st==="STOPPED_AT"&&y.sid===T[M.pat.stops[0]].id),y.dep0=dt,y.pre){if(y.atStop=-1,y.next=0,x=0,y.disp=null,y.prevAt!==y.ts&&(y.prevAt=y.ts,Object.assign(y,K(M,y,at.min,rt))),y.prevTr){let J=te(y.prevTr.pat);H=Le(J,y.dPrev)}}else if(!Fe()&&M){let J=ee(),le=t.days.indexOf(J.ymd),ve=M.day===le-1?1440:0,Jt=Os(M,J.min+ve-M.t0-D);Jt?(H=Jt.w,y.est=!0,x=Jt.next,y.atStop=Jt.moving?-1:Jt.at,y.next=Jt.next,y.before=!1):(y.atStop=-1,y.next=-1)}else if(y.err<=.6){let J=B.findIndex(Jt=>Jt>y.dObs+.08);J<0&&(J=B.length-1);let le=B.reduce((Jt,ke,Ee)=>Math.abs(ke-y.dObs)<Math.abs(B[Jt]-y.dObs)?Ee:Jt,0);y.atStop=Math.abs(B[le]-y.dObs)<.16?le:-1;{let Jt=y.st==="STOPPED_AT"&&y.sid?M.pat.stops.findIndex(ke=>T[ke].id===y.sid):-1;Jt>=0&&Math.abs(B[Jt]-y.dObs)<.6&&(y.atStop=Jt,J<=Jt&&(J=Math.min(Jt+1,B.length-1)))}y.before=y.atStop>=0&&y.dObs<B[y.atStop]-.15,y.next=J,x=J;let ve=y.dObs;if(y.st==="STOPPED_AT"&&y.atStop>=0)ve=B[y.atStop];else if(J>0){let Jt=(M.pat.t[2*J]-M.pat.t[2*J-1])*60,ke=Jt>0?(B[J]-B[J-1])/Jt:0,Ee=ee(),Ie=t.days.indexOf(Ee.ymd),Je=M.day===Ie-1?1440:0,Ge=ft(M,B,Ee.min+Je-M.t0-D),xn=y.dObs+ke*Math.min(k,60);Ge!=null&&(xn=Math.min(xn,Math.max(y.dObs,Ge))),ve=Math.max(y.dObs,Math.min(B[J]-.03,xn))}y.disp==null||Math.abs(y.disp-ve)>1.2?y.disp=ve:ve>y.disp&&(y.disp+=(ve-y.disp)*Math.min(1,p*1.5)),H=Le(C,y.disp)}else if(y.err>2){let J=ee(),le=t.days.indexOf(J.ymd),ve=M.day===le-1?1440:0,Jt=Os(M,J.min+ve-M.t0-D);Jt&&(H=Jt.w,y.est=!0,x=Jt.next),y.atStop=-1,y.next=Jt?Jt.next:-1}else y.atStop=-1,y.next=-1}let b=y.pre?"":y.st==="STOPPED_AT"&&y.atStop>=0||y.atStop>=0&&y.still>30?"st":y.still>=90&&y.atStop<0?"via":"";o.push({tr:M,v:y,w:H,stop:b,p:{w:H},fam:P||"?",c:M?M.c:X[P]||"#6b7385",dl:D,live:!0,real:!0,idx:x,age:k,cancel:N==="X"})}return o}let Ot=new Map,Ft=!1,Ct=!1,Zt="",ie={st:-1},ae=[],Me=0,Nt=null,Mt=null,me=-1,_e=!1,nn=0,An="";function Qt(o){let c=Ut>0||!!Nt,f=window.__mapHidden?1e3:Ut>0?50:c?200:250;if(o-Me<f)return!1;Me=o,[...St()].join()!==Ht&&(Kt(),Vn());{let x=kt(),b=x?x.sn.t:"";Lt.cur=x,b!==Lt.key&&(Lt.key=b,it()),!x&&!ee().live&&!Ne.at&&Pl()}let p=ee(),y=E()&&p.live,M=y?{k:t.days.indexOf(p.ymd),out:ct()}:R(p);ae=M.out;let P=new xe,N=0,D=0;for(let x of ae){if(N>=li)break;ar[N*3]=x.p.w[0],ar[N*3+1]=x.p.w[1],ar[N*3+2]=$+.02;let b=null;if(x.real&&x.v.pre&&x.v.prevTr)b=Le(te(x.v.prevTr.pat),x.v.dPrev+.35);else if(x.real&&x.tr&&!x.v.pre&&x.v.err<=.6&&x.v.disp!=null&&!(x.v.st==="STOPPED_AT"&&x.v.atStop>=0))b=Le(te(x.tr.pat),x.v.disp+.35);else if(!x.real&&x.p.moving){let q=x.tr.pat.t,dt=x.p.prev,J=q[2*dt+1],le=q[2*dt+2],ve=le>J?(x.rel-J)/(le-J):1;b=Cl(x.tr.pat.segs[dt],Math.min(1,Rl(S(ve,0,1))+.04))}let C=x.real?!!x.stop:!x.p.moving;if(x.broke=op(x),x.broke)Us[N]=85;else if(C)Us[N]=75;else if(b){let q=Ll(x.p.w),dt=Ll(b),J=dt[0]-q[0],le=dt[1]-q[1];Us[N]=Math.hypot(J,le)>.05?Math.atan2(J,-le):99}else Us[N]=99;P.set(x.c||x.tr.c),or[N*3]=P.r,or[N*3+1]=P.g,or[N*3+2]=P.b;let B=x.tr?x.tr===Mt:Mt&&Mt.vtid===x.v.tid;Pi[N]=B?22:r.dist<45?17:14,$r[N]=B?3.5:2.2;let at=x.real&&x.stop==="via"||!!x.broke,rt=x.cancel||x.broke?[.86,.15,.15]:x.dl>10?[.86,.15,.15]:x.dl>5?[.92,.48,.05]:x.dl>=1?[.98,.8,.08]:[.09,.64,.29];(x.live&&x.dl>=5||B||at)&&(xs[D*3]=x.p.w[0],xs[D*3+1]=x.p.w[1],xs[D*3+2]=$+.01,Va.set(B?rt:at?[.86,.15,.15]:[.98,.45,.09],D*3),Ha[D]=Pi[N]+(B?16+5*Math.sin(o/220):at?10+3*Math.sin(o/400):8),Al[D]=B?2:3,D++),N++}if(Ii.setDrawRange(0,N),Zi.setDrawRange(0,D),["position","fill","size","bw"].forEach(x=>{Ii.attributes[x].needsUpdate=!0,Zi.attributes[x].needsUpdate=!0}),Ii.attributes.ang.needsUpdate=!0,Nt){let x=ae.find(b=>b.tr===Nt);if(x){let b=0,C=innerHeight,B=d.style.display!=="none"&&!d.classList.contains("min")?d.getBoundingClientRect():null,at=_("#rc").getBoundingClientRect();innerWidth<=640&&(B&&(b=B.bottom),C=Math.min(C,at.top));let rt=b+(C-b)/2,q=rt-innerHeight/2,dt=2*s.dist*Math.tan(17.5*Math.PI/180)/innerHeight;s.tx=x.p.w[0]-Math.sin(r.yaw)*q*dt,s.ty=x.p.w[1]+Math.cos(r.yaw)*q*dt}else E()&&ee().live&&(Nt=null)}let k=nt(Math.floor(p.min+1e-6));k!==An&&(An=k,_("#ctime").textContent=k),_("#ntr").textContent=String(ae.length),_("#ntrl").textContent=y?__t(16):__t(17);{let x=ut.size<G.length?[...ut].sort(F).join(", "):"",b=_("#ccount"),C=Lt.cur?`\u23EA ${ae.length}${__t(18)}${Lt.cur.sn.t} \xB7 ${Object.values(Lt.cur.sn.d).filter(B=>B>=60).length}${__t(19)}`:!p.live&&p.min<yt(new Date).min-1&&!Ut?`${__t(20)}${Ne.hoy&&Ne.hoy.snaps&&Ne.hoy.snaps.some(B=>B.d)?`${__t(21)}${Ne.hoy.snaps.find(B=>B.d).t}`:__t(22)}`:y&&!Fe()?`\u{1F4F6} ${__t(1)} \xB7 ${__t(23)} ${ps(Math.round((Date.now()-V.okVP)/6e4)+" min")} <small class="nopos">\xB7 ${__t(24)}</small>`:y&&!ae.some(B=>B.real)&&eo(ut).length?`\u{1F4E1} ${__t(25)}${x?` <small>\xB7 ${m(x)}</small>`:""} <small class="nopos">\xB7 ${__t(26)}</small>`:`\u{1F686} ${ae.length} ${y?__t(27):__t(28)}${x?` <small>\xB7 ${m(x)}</small>`:""}${y&&V.okVP?(()=>{let B=Math.max(0,Math.round((Date.now()-V.okVP)/1e3));return` <small class="fresh${B<3?" new":""}">\u25CF ${__t(29)}${ps(B+" s")}</small>`})():""}`;b&&b._t!==C&&(b.innerHTML=C,b._t=C)}{let x=_("#p");x&&x.classList.toggle("ttf",!p.live||!!Ut)}let H=new Date;if(_("#cdate").textContent=p.live?__t(30):Ut?__t(31)+Ut:Ti?__t(32):__t(33),M.k<0?_("#src").innerHTML=`${__t(34)}${Ve(t.days[0])}${__t(35)}${Ve(t.days[t.days.length-1])}${__t(36)}`:y?_("#src").textContent=`${Fe()?__t(37):__t(38)}${ps(fu(Math.max(0,Date.now()/1e3-Math.max(...[...V.vp.values()].map(x=>x.ts),0))))}`:U()&&p.live?_("#src").innerHTML=__t(39):_("#src").innerHTML=__t(40)+(V.url?__t(41):__t(42))+__t(43),p.live){let x=Math.round(p.min),b=_("#tsl");document.activeElement!==b&&(b.value=x<240?x+1440:x)}{let x=Mt?String(Mt.num||Mt.vtid||""):"";x!==Qt._sk&&(Qt._sk=x,we(!0))}return we(),!Qt._sp&&(y||!p.live||U()||!V.url)&&(Qt._sp=1,window.__splashOff&&window.__splashOff()),o-nn>3e3&&(Mt||me>=0||_e||Ct||Zt)&&(nn=o,Ue()),it(),!0}let Ln=-1,Oe=(()=>{try{return localStorage.getItem("rod_mun")==="1"}catch{return!1}})(),Hn=[],En=document.createElement("button");En.type="button",En.id="mbtn",En.title=__t(44),En.innerHTML=__t(45),En.onclick=()=>{Oe=!Oe;try{localStorage.setItem("rod_mun",Oe?"1":"")}catch{}En.classList.toggle("on",Oe),a(),Li()},En.classList.toggle("on",Oe),document.body.appendChild(En);let Ji=L.slice().sort((o,c)=>c.pop-o.pop);function Bs(o){if(o._a)return o._a;let c=null,f=0;for(let p of o.rings||[]){let y=p[0];if(!y)continue;let M=0,P=0,N=0;for(let D=0,k=y.length;D<k;D+=2){let H=y[D],x=y[D+1],b=y[(D+2)%k],C=y[(D+3)%k],B=H*C-b*x;M+=B,P+=(H+b)*B,N+=(x+C)*B}Math.abs(M)>f&&(f=Math.abs(M),c=[P/(3*M),N/(3*M)])}return o._a=c?[(c[0]-h)*l,(c[1]-u)*l]:[o.cx,o.cy]}let sn=o=>o>=1e5?1:o>=2e4?2:o>=5e3?3:4,_n=[0,7.6,6.7,6,5.4],ji=[0,17,15,13,12],ln=o=>o.replace(/^(.*), (el|la|les|els|los|las)$/i,"$2 $1").replace(/^(.*), l'$/i,"l'$1");function Li(){let o=s.tilt<.06&&r.tilt<.08;En.classList.toggle("show",o);let c=0;if(Oe&&o){let f=[...document.querySelectorAll(".plab, .slab")].filter(M=>M.offsetParent!==null||M.style.display==="block").map(M=>{let P=M.getBoundingClientRect();return[P.left-2,P.top-2,P.right+2,P.bottom+2]}).filter(M=>M[2]>M[0]),p=r.dist,y=p>160?5e4:p>130?2e4:p>105?8e3:p>80?3e3:p>62?800:0;for(let M of Ji){let P=sn(M.pop);if(M.pop<y)break;let N=Bs(M);if(bn.set(N[0],N[1],$).project(n),Math.abs(bn.x)>1.02||Math.abs(bn.y)>1.02)continue;let D=(bn.x*.5+.5)*innerWidth,k=(-bn.y*.5+.5)*innerHeight,H=ln(M.name),x=H.length*_n[P]+8,b=ji[P],C=[D-x/2,k-b/2,D+x/2,k+b/2];if(f.some(at=>C[0]<at[2]&&at[0]<C[2]&&C[1]<at[3]&&at[1]<C[3]))continue;f.push(C);let B=Hn[c]||(Hn[c]=Object.assign(document.createElement("div"),{className:"mlab"}));B.isConnected||document.body.appendChild(B),B._n!==H&&(B.textContent=H,B._n=H),B._t!==P&&(B.className="mlab t"+P,B._t=P),B.style.transform=`translate(${Math.round(D)}px,${Math.round(k)}px) translate(-50%,-50%)`,B.style.display="block",c++}}for(;c<Hn.length;c++)Hn[c].style.display="none"}let Ne={at:0,hoy:null,ayer:null,err:""},Il="https://raw.githubusercontent.com/elMonoAmelio/catalunya-survival/stats/";function Pl(){Date.now()-Ne.at<5*6e4||(Ne.at=Date.now(),Promise.all(["hoy","ayer","hist"].map(o=>fetch(Il+o+".json",{cache:"no-store"}).then(c=>c.ok?c.json():null).catch(()=>null))).then(([o,c,f])=>{Ne.hoy=o,Ne.ayer=c,Ne.hist=f,Ne.tr=null,Ne.err=o?"":__t(46),Ct&&(d._h="",Ue()),we(!0)}))}function Fg(o){let c={};for(let p of o&&o.snaps||[])for(let y of p.r||[]){let M=/^\d+[A-Z](\d+)/.exec(y);M&&(c[M[1]]=c[M[1]]||[]).push(Math.max(0,p.d&&p.d[y]||0)/60)}let f={};for(let p in c){let y=c[p].sort((M,P)=>M-P);f[p]=Math.round(y[y.length>>1])}return f}function Ru(o){if(!Ne.tr){let f=new Map;for(let p of Ne.hist&&Ne.hist.days||[])f.set(p.day,p.tr);for(let p of[Ne.ayer,Ne.hoy])if(p&&p.day&&!f.has(p.day)){let y=Fg(p);Object.keys(y).length&&f.set(p.day,y)}Ne.tr=f}let c=[...Ne.tr.values()].map(f=>f[String(o)]).filter(f=>f!=null);return c.length?{n:c.length,late:c.filter(f=>f>=5).length,avg:c.reduce((f,p)=>f+p,0)/c.length}:null}let ks=o=>o>=90?"g":o>=80?"y":o>=65?"w":"b",vs={g:"#16a34a",y:"#eab308",w:"#ea7a0c",b:"#dc2626"},np=o=>o>10?vs.b:o>5?vs.w:o>=1?vs.y:vs.g,lr=o=>(o>=.05?"+":"")+(Math.round(o*10)/10).toString().replace(".",",")+" min";function Wa(o,c,f){return`<div class="sbars">${o.map(p=>`<div class="sbar" title="${m(p.tip||"")}"><span class="sl">${p.lab}</span><span class="st"><i style="width:${Math.max(2,Math.round(p.w*100))}%;background:${p.c}"></i></span><b class="sv" style="color:${p.c===vs.y?"var(--svy,#a16207)":p.c===vs.w?"var(--svw,#c2410c)":p.c}">${p.val}</b></div>`).join("")}</div>`}function Og(o){if(o=(o||[]).filter(q=>q.n>=10),!o||o.length<2){let q=o&&o[0];return q?`${__t(47)}${q.t}: ${Math.round(q.ok/q.n*100)}${__t(48)}${q.n}${__t(49)}`:__t(50)}let c=q=>{let[dt,J]=q.t.split(":").map(Number);return dt*60+J},f=c(o[0]),p=Math.max(f+60,c(o[o.length-1])),y=300,M=112,P=24,N=q=>P+(q-f)*(y-P-8)/(p-f),D=q=>8+(100-q)/100*(M-26),k=q=>q.n?q.ok/q.n*100:100,H=o.map(q=>[N(c(q)),D(k(q)),q]),x=q=>q[0].toFixed(1)+","+q[1].toFixed(1),b=[],C=[];H.forEach((q,dt)=>{dt&&c(q[2])-c(H[dt-1][2])>45&&(b.push(C),C=[]),C.push(q)}),b.push(C);let B=H[H.length-1],at=[];for(let q=Math.ceil(f/180)*3;q*60<p;q+=3)q*60>f+20&&at.push(q);let rt=Math.round(o.reduce((q,dt)=>q+dt.ok,0)/Math.max(1,o.reduce((q,dt)=>q+dt.n,0))*100);return`<svg class="schart" viewBox="0 0 ${y} ${M}${__t(51)}${[100,75,50,25].map(q=>`<line x1="${P}" x2="${y-4}" y1="${D(q)}" y2="${D(q)}" class="gl"/><text x="2" y="${D(q)+3}" class="ax">${q}%</text>`).join("")}
      <line x1="${P}" x2="${y-4}" y1="${D(rt)}" y2="${D(rt)}" class="avg"/>
      ${b.filter(q=>q.length).map(q=>`<polygon points="${x([q[0][0],D(0)])} ${q.map(x).join(" ")} ${x([q[q.length-1][0],D(0)])}" class="ar"/><polyline points="${q.map(x).join(" ")}" class="ln"/>`).join("")}
      ${H.map(([q,dt,J])=>`<circle cx="${q.toFixed(1)}" cy="${dt.toFixed(1)}" r="6" class="hit"><title>${J.t} \xB7 ${Math.round(k(J))}${__t(52)}${J.n}${__t(53)}${J.d5}${__t(54)}${lr(J.avg)}${J.nd?` \xB7 ${J.nd}${__t(55)}`:""}</title></circle>`).join("")}
      <circle cx="${B[0].toFixed(1)}" cy="${B[1].toFixed(1)}" r="3.5" class="pt"/><text x="${Math.min(B[0],y-30).toFixed(1)}" y="${(B[1]-7).toFixed(1)}" class="lv" text-anchor="middle">${Math.round(k(B[2]))}%</text>
      ${at.map(q=>`<text x="${N(q*60).toFixed(1)}" y="${M-4}" class="ax" text-anchor="middle">${String(q).padStart(2,"0")}h</text>`).join("")}
      <text x="${P}" y="${M-4}" class="ax">${o[0].t}</text></svg><small class="snote">${__t(56)} (${rt}%)</small>`}function Bg(){Pl();let o=ee(),c=ae.filter(N=>N.real&&E()&&o.live),f=c.filter(N=>V.delays.has(N.v.tid)),p=f.length,y=c.length-p,M=`${__t(57)}`;if(p){let N=f.filter(dt=>dt.dl<3).length,D=f.filter(dt=>dt.dl>=5).length,k=f.filter(dt=>dt.stop==="via").length,H=Math.round(N/p*100);M+=`${__t(58)}${p}${__t(59)}${y?` \xB7 ${y}${__t(64)}`:""}</small><div class="kpis">
        <div class="kpi ${ks(H)}"><b>${H}${__t(60)}${ks(100-D/p*100*2)}" title="${Math.round(D/p*100)}${__t(61)}${D}${__t(62)}${k===0?"g":k<=2?"w":"b"}"><b>${k}${__t(63)}`;let x=new Map;f.forEach(dt=>{let J=dt.fam,le=x.get(J)||{n:0,ok:0,sum:0};le.n++,le.ok+=dt.dl<3,le.sum+=Math.max(0,dt.dl),x.set(J,le)});let b=[...x].filter(([dt])=>X[dt]).sort((dt,J)=>dt[1].ok/dt[1].n-J[1].ok/J[1].n||J[1].sum/J[1].n-dt[1].sum/dt[1].n),C=b.filter(([,dt])=>dt.ok<dt.n),B=b.filter(([,dt])=>dt.ok===dt.n);M+=`${__t(65)}`+(C.length?"":__t(66))+Wa(C.map(([dt,J])=>({lab:Cn(dt),w:J.ok/J.n,c:vs[ks(J.ok/J.n*100)],val:`${Math.round(J.ok/J.n*100)}% <small>${lr(J.sum/J.n)}</small>`,tip:`${dt}: ${J.ok}${__t(67)}${J.n}${__t(68)}${lr(J.sum/J.n)}`})))+(B.length?`${__t(69)}${B.map(([dt])=>Cn(dt)).join(" ")}</p>`:"");let at=new Map;f.forEach(dt=>{if(!dt.tr||dt.v.next==null||dt.v.next<0||dt.v.pre)return;let J=dt.tr.pat.stops[dt.v.next],le=at.get(J)||{n:0,sum:0};le.n++,le.sum+=Math.max(0,dt.dl),at.set(J,le)});let rt=[...at].filter(([,dt])=>dt.sum/dt.n>=1).sort((dt,J)=>J[1].sum/J[1].n-dt[1].sum/dt[1].n).slice(0,8),q=rt.length?rt[0][1].sum/rt[0][1].n:1;M+=`${__t(70)}`+(rt.length?Wa(rt.map(([dt,J])=>({lab:`<span class="sn" data-gs="${dt}">${m(T[dt].n)}</span>`,w:J.sum/J.n/q,c:np(J.sum/J.n),val:`${lr(J.sum/J.n)} <small>${J.n} ${J.n===1?"tren":__t(71)}</small>`,tip:`${T[dt].n}: ${J.n}${__t(72)}${lr(J.sum/J.n)}${__t(73)}`}))):__t(74))}else M+=`${__t(75)}`;let P=Ne.hoy;M+=`<button type="button" class="hmore" data-cols>${mn.on?__t(76):__t(77)}</button>`;{no("");let N=[...Ui.m].filter(([D,k])=>X[D]&&k[0]>=3).map(([D,k])=>[D,k[1]/k[0]]).sort((D,k)=>D[1]-k[1]);N.length&&!E()?M+=`<h4>${__t(78)}</h4><small class="snote">${__t(79)}</small>`:N.length&&(M+=`${__t(80)}`+Wa(N.slice(0,8).map(([D,k])=>({lab:Cn(D),w:k,c:vs[ks(k*100)],val:`${Math.round(k*100)}%`,tip:`${D}: ${Math.round(k*100)}${__t(81)}`}))))}{let N=(C,B)=>{let at=(C&&C.snaps||[]).filter(dt=>dt.n&&(!B||dt.t<=B)),rt=at.reduce((dt,J)=>dt+J.n,0),q=at.reduce((dt,J)=>dt+J.ok,0);return rt?q/rt*100:null},D=(Ne.hoy&&Ne.hoy.snaps||[]).filter(C=>C.n).map(C=>C.t).pop(),k=N(Ne.hoy),H=N(Ne.ayer,D),x=k!=null?Math.round(k):null,b=H!=null?Math.round(H):null;k!=null&&(M+=`${__t(82)}${ks(k)}">${Math.round(k)}${__t(83)}${H!=null?`<span>${D?__t(84):__t(85)} <b class="${ks(H)}">${b} %</b></span><span>${x>b?__t(86):x<b?__t(87):__t(88)}</span>`:""}</div>`)}if(M+=`${__t(89)}`,P&&P.snaps){M+=Og(P.snaps);let N=Object.entries(P.st||{}).map(([H,x])=>[Wt.get(H),x]).filter(([H,x])=>H!=null&&x.n>=3).map(([H,x])=>[H,x.sum/x.n/60,x]).filter(H=>H[1]>=1).sort((H,x)=>x[1]-H[1]).slice(0,8);if(N.length){let H=N[0][1];M+=`${__t(90)}`+Wa(N.map(([x,b,C])=>({lab:`<span class="sn" data-gs="${x}">${m(T[x].n)}</span>`,w:b/H,c:np(b),val:`${lr(b)}${__t(91)}${Math.round(C.max/60)}</small>`,tip:`${T[x].n}: ${C.n}${__t(92)}${C.d5}${__t(93)}${Math.round(C.max/60)} min`})))}let D=Object.entries(P.lines||{}).filter(([H,x])=>X[H]&&x.n>=3).sort((H,x)=>H[1].ok/H[1].n-x[1].ok/x[1].n);D.length&&(M+=`${__t(94)}`+Wa(D.map(([H,x])=>({lab:Cn(H),w:x.ok/x.n,c:vs[ks(x.ok/x.n*100)],val:`${Math.round(x.ok/x.n*100)}% <small>${lr(x.sum/x.n/60)}</small>`,tip:`${H}${__t(95)}${Math.round(x.ok/x.n*100)}${__t(96)}${Math.round(x.max/60)} min`}))));let k=P.upd?(Date.now()-Date.parse(P.upd))/6e4:0;M+=`<small class="snote">${k>40?`${__t(98)}${ps(k<90?Math.round(k)+" min":k<2160?Math.round(k/60)+" h":Math.round(k/1440)+(window.__L==="en"?" days":window.__L==="ca"?" dies":" d\xEDas"))}${__t(99)}`:""}${__t(97)}${m((P.upd||"").slice(11,16))} \xB7 ${(P.note||"").includes("Solo cuentan")?__t(100):__t(101)}</small>`}else M+=`<p class="snote">${Ne.at?__t(102):__t(103)}</p>`;return M+"</div>"}function kg(o){let c=ee(),f=ae.filter(b=>(b.fam||b.tr&&b.tr.fam)===o),p=f.filter(b=>b.real),y=f.length,M=f.filter(b=>b.dl>=5).length,P=f.filter(b=>b.dl<3).length,N=f.filter(b=>b.stop==="via"||b.broke).length,D=V.alerts.filter(b=>b.fams.has(o)),k=b=>{let C=b.tr;if(!C)return"";let B=b.v;if(b.real&&B){let rt=B.next>=0?T[C.pat.stops[B.next]].n:"";return B.atStop>=0?`${__t(104)}${T[C.pat.stops[B.atStop]].n}`:rt?`${__t(105)}${rt}`:""}let at=b.p;return at&&at.next!=null&&at.next>=0?`${__t(105)}${T[C.pat.stops[at.next]].n}`:""},H=f.slice().sort((b,C)=>C.dl-b.dl).slice(0,40).map(b=>{let C=b.tr;return`<li class="go${Za({num:C?C.num:b.v.num,tid:C?C.tid:b.v.tid})?" sel":""}" data-gt="${m(C?C.num:b.v.num)}|${m(b.real?b.v.tid:C?C.tid:"")}"><b>${m(C?C.num:b.v.num)}</b><span>${C?Ei(T[C.pat.stops[C.pat.stops.length-1]].n,o):""} <small>${m(k(b))}</small></span>${b.dl>=1?`<em class="dl ${Di(b.dl)}">+${Math.round(b.dl)}</em>`:__t(106)}</li>`}).join(""),x=no(o);return`<div class="tc sts" style="--c:${X[o]||"#1d2330"}"><button class="x" data-cx>\xD7</button><h3>${Cn(o)}${__t(107)}${c.live?`${__t(113)}${y}${__t(114)}${p.length<y?` (${p.length}${__t(115)}`:""}`:`${__t(116)}${nt(c.min)}`}</small>
      <div class="kpis"><div class="kpi ${y?ks(P/y*100):""}"><b>${y?Math.round(P/y*100)+"%":"\u2014"}${__t(108)}${M?M/Math.max(1,y)>.2?"b":"w":"g"}"><b>${M}${__t(109)}${N?"b":"g"}"><b>${N}${__t(110)}${D.length?zg(D):__t(117)}${x<.7?`${__t(118)}${Math.round(x*100)}${__t(119)}`:""}${__t(111)}${H||__t(120)}${__t(112)}`}let zg=o=>`<div class="al">${o.slice(0,3).map(c=>`<p>\u26A0\uFE0F ${Ka(c)} ${m(c.txt)} <small>${Qa(c)}</small></p>`).join("")}</div>`,mn={on:!1,mesh:null};function ip(){let o=Ne.hoy,c=[];if(o&&o.st)for(let[f,p]of Object.entries(o.st)){let y=Wt.get(f);y!=null&&p.n>=2&&c.push([y,p.sum/p.n/60,p.n])}if(!c.length){let f=new Map;ae.forEach(p=>{if(!p.real||!p.tr||p.v.next==null||p.v.next<0||p.v.pre||!V.delays.has(p.v.tid))return;let y=p.tr.pat.stops[p.v.next],M=f.get(y)||[0,0];M[0]+=Math.max(0,p.dl),M[1]++,f.set(y,M)}),f.forEach((p,y)=>c.push([y,p[0]/p[1],p[1]]))}return c}let sp=()=>Math.min(1,Math.max(.22,r.dist/110));function $g(){if(!mn.mesh||!mn.d)return;let o=sp();if(Math.abs(o-mn.r)<.04)return;mn.r=o;let c=new qe;mn.d.forEach(([f,p],y)=>{c.makeScale(o,o,.3+Math.min(p,40)*.3),c.setPosition(T[f].w[0],T[f].w[1],$),mn.mesh.setMatrixAt(y,c)}),mn.mesh.instanceMatrix.needsUpdate=!0,a()}function Vg(){if(mn.mesh&&(e.remove(mn.mesh),mn.mesh.geometry.dispose(),mn.mesh.material.dispose(),mn.mesh=null),!mn.on){a();return}let o=ip();if(!o.length){Ke(__t(121)),mn.on=!1;return}let c=new zo(.32,.32,1,16);c.rotateX(Math.PI/2),c.translate(0,0,.5);let f=new Er({fog:!1}),p=new Fo(c,f,o.length),y=new qe,M=new xe;mn.d=o,mn.r=sp(),o.forEach(([P,N],D)=>{let k=.3+Math.min(N,40)*.3;y.makeScale(mn.r,mn.r,k),y.setPosition(T[P].w[0],T[P].w[1],$),p.setMatrixAt(D,y),M.set(N>10?"#dc2626":N>5?"#ea7a0c":N>=1?"#eab308":"#16a34a"),p.setColorAt(D,M)}),p.renderOrder=25,p.frustumCulled=!1,e.add(p),mn.mesh=p,s.tilt<.5&&(s.tilt=.85),a()}let Vr=document.createElement("button");Vr.type="button",Vr.id="sbtn",Vr.title=__t(122),Vr.innerHTML=__t(123),Vr.onclick=()=>{Ct=!Ct,Ct&&(Ft=_e=!1,Ne.at=0),d._h="",Ue(),a()},document.body.appendChild(Vr);function Hg(){r.dist<45!=Ln<45&&(Ln=r.dist,Vn()),$g(),Gg(),Li()}let ys=[],bn=new Z;function Gg(){let o=0;if(mn.on){let f=ip().sort((y,M)=>M[1]-y[1]),p=[];for(let[y,M]of f){if(o>=30)break;if(bn.set(T[y].w[0],T[y].w[1],$).project(n),bn.z>1||Math.abs(bn.x)>1||Math.abs(bn.y)>1)continue;let P=(bn.x*.5+.5)*innerWidth,N=(-bn.y*.5+.5)*innerHeight;if(p.some(([k,H])=>Math.abs(k-P)<90&&Math.abs(H-N)<18))continue;p.push([P,N]);let D=ys[o]||(ys[o]=Object.assign(document.createElement("div"),{className:"slab"}));D.isConnected||document.body.appendChild(D),D.textContent=T[y].n+" +"+Math.round(M)+"\u2032",D.dataset.i=y,D.style.display="block",D.style.transform=`translate(${Math.round(P+8)}px,${Math.round(N-8)}px)`,o++}for(;o<ys.length;o++)ys[o].style.display="none";return}if(r.dist<30){let f=[];for(let p=0;p<ne;p++)$n[p]<4||(bn.set(T[p].w[0],T[p].w[1],$).project(n),!(bn.z>1||Math.abs(bn.x)>1.05||Math.abs(bn.y)>1.05)&&f.push([p,(bn.x*.5+.5)*innerWidth,(-bn.y*.5+.5)*innerHeight]));if(f.length<=70)for(let[p,y,M]of f){let P=ys[o]||(ys[o]=Object.assign(document.createElement("div"),{className:"slab"}));P.isConnected||document.body.appendChild(P),P.textContent=T[p].n,P.dataset.i=p,P.style.display="block",P.style.transform=`translate(${Math.round(y+8)}px,${Math.round(M-7)}px)`,o++}}for(;o<ys.length;o++)ys[o].style.display="none"}function Ll(o){return bn.set(o[0],o[1],$).project(n),[(bn.x*.5+.5)*innerWidth,(-bn.y*.5+.5)*innerHeight,bn.z]}function rp(o,c,f,p){let y=null,M=f*f;for(let P of ae){let[N,D,k]=Ll(P.p.w);if(k>1)continue;let H=(N-o)**2+(D-c)**2;H<M&&(M=H,y={a:P})}if(y)return y;M=p*p;for(let P=0;P<ne;P++){if(!$n[P])continue;let[N,D,k]=Ll(T[P].w);if(k>1)continue;let H=(N-o)**2+(D-c)**2;H<M&&(M=H,y={s:P})}return y}let cr=!1;window.__rodHide=()=>{cr=!0},document.addEventListener("click",o=>{cr&&!o.target.closest("#mcs, canvas")&&(cr=!1)},!0),window.__rodTap=(o,c)=>{let f=null,p=1e9;for(let M of ys){if(M.style.display==="none")continue;let P=M.getBoundingClientRect();if(o>=P.left-4&&o<=P.right+4&&c>=P.top-4&&c<=P.bottom+4){let N=Math.abs(c-(P.top+P.bottom)/2)*4+(o-P.left);N<p&&(p=N,f=M)}}if(f)return window.__rodPickStation(+f.dataset.i),!0;let y=rp(o,c,24,18);return y&&(y.a||y.s!=null)&&(cr=!1),y&&(y.a||y.s!=null)&&(ie.st=-1),y&&y.a?(Ft=!1,_e=!1,Ct=!1,Mt=y.a.tr||{vtid:y.a.v.tid},me=-1,Nt=null,Vn(),Ue(),Me=0,a(),!0):y&&y.s!=null?(Ft=!1,_e=!1,Ct=!1,me=y.s,Mt=null,Nt=null,Vn(),Ue(),a(),!0):!1},window.__rodHover=(o,c)=>{let f=rp(o,c,14,10);if(f&&f.a){let p=f.a,y=p.tr?T[p.tr.pat.stops[p.tr.pat.stops.length-1]].n:"";return`<b><span style="color:${p.c}">\u25A0</span> ${m(p.fam||p.tr&&p.tr.fam||"?")}${__t(124)}${m(p.tr?p.tr.num:p.v.num)}</b><small>${y?__t(105)+m(y):""}${p.real?(p.dl>=1?` \xB7 <b style="color:#c2410c">+${Math.round(p.dl)} min</b>`:__t(125))+__t(126):__t(127)}</small>`}return f&&f.s!=null?`<b>${m(T[f.s].n)}</b><small>${[...T[f.s].fams].sort(F).join(" \xB7 ")}</small>`:null},window.__rodPickStation=o=>{ie.st=-1,cr=!1,Ft=_e=Ct=!1,Mt=null,Nt=null,me=o,Vn(),d._h="",Ue(),a()};{let o=_("#rc"),c=()=>{let f=o.getBoundingClientRect().top;document.documentElement.style.setProperty("--mcsmax",Math.max(160,f-64-10)+"px")};try{new ResizeObserver(c).observe(o)}catch{}addEventListener("resize",c),setTimeout(c,300)}if("serviceWorker"in navigator&&location.protocol==="https:"){let o=!1,c=!!navigator.serviceWorker.controller;navigator.serviceWorker.addEventListener("controllerchange",()=>{if(!c||o)return;let f=((_("#ver")||{}).textContent||"").match(/\d+\.\d+/);fetch("./sw.js",{cache:"no-store"}).then(p=>p.text()).then(p=>{let y=(p.match(/VERSION = 'cs-(\d+\.\d+)'/)||[])[1];y&&f&&y!==f[0]&&!o&&(o=!0,location.reload())}).catch(()=>{})}),navigator.serviceWorker.register("./sw.js").then(f=>{f.update().catch(()=>{}),document.addEventListener("visibilitychange",()=>{document.hidden||f.update().catch(()=>{})})}).catch(()=>{})}setTimeout(()=>{try{Pl()}catch{}},2500),setInterval(()=>{try{Ne.at=0,Pl()}catch{}},15*6e4);let ci={mode:(()=>{try{return localStorage.getItem("rod_theme")||"auto"}catch{return"auto"}})()},Xa=matchMedia("(prefers-color-scheme: dark)");function Dl(){let o=ci.mode==="dark"||ci.mode==="auto"&&Xa.matches;document.documentElement.classList.toggle("dark",o);for(let f=0;f<ne;f++)Ze.set(o?[.06,.08,.11]:[1,1,1],f*3);se.attributes.fill.needsUpdate=!0,El.uniforms.border.value.set(o?"#e7ebf3":"#1d2330"),window.__mapTheme&&window.__mapTheme(o),hr.textContent=ci.mode==="auto"?o?"\u{1F319}":"\u2600\uFE0F":ci.mode==="dark"?"\u{1F319}":"\u2600\uFE0F",hr.title=__t(128)+{auto:__t(129),dark:__t(130),light:"desactivado"}[ci.mode];let c=document.querySelector("meta[name=theme-color]");c&&(c.content=o?"#0d1119":"#eef1f5"),a()}let hr=document.createElement("button");hr.type="button",hr.id="tbtn",hr.onclick=()=>{ci.mode=ci.mode==="auto"?Xa.matches?"light":"dark":ci.mode==="dark"?"light":"dark",ci.mode==="dark"===Xa.matches&&(ci.mode="auto");try{localStorage.setItem("rod_theme",ci.mode)}catch{}Dl(),Ke(hr.title)},document.body.appendChild(hr);{let o=document.createElement("a");o.id="wabtn",o.href="https://www.whatsapp.com/channel/0029Vav4hGTId7nPenKMuo2C",o.target="_blank",o.rel="noopener",o.title=__t(131),o.innerHTML=__t(132),document.body.appendChild(o)}Xa.addEventListener&&Xa.addEventListener("change",Dl),Dl(),window.__rodTick=Qt,window.__rodFrame=Hg,window.__rodResize=()=>{Yt.resolution.set(innerWidth,innerHeight),Vt.resolution.set(innerWidth,innerHeight)},window.__rodResize();let wi={st:-1,f:new Set},ap=o=>{let c=[...T[o].fams].sort(F);return`<div class="sfc">${c.length>1?`<button type="button" data-sf="" class="${wi.f.size?"":"on"}${__t(133)}`:""}${c.map(f=>`<button type="button" data-sf="${m(f)}" class="ln ${wi.f.size&&!wi.f.has(f)?"off":""}${ut.has(f)?"":" hid"}" style="--c:${X[f]}">${m(f)}</button>`).join("")}</div>${c.some(f=>!ut.has(f))?__t(134):""}`},Wg=o=>{let c=(o||"#6b7385").replace("#",""),f=parseInt(c.slice(0,2),16),p=parseInt(c.slice(2,4),16),y=parseInt(c.slice(4,6),16);return(.299*f+.587*p+.114*y)/255>.62?"#1d2330":"#fff"},Ei=(o,c)=>{let f=X[c]||"#6b7385";return`<span class="dst" style="background:${f};color:${Wg(f)}" title="${m(c||"")}">${m(o)}</span>`},Nl=o=>{let c=T[o]&&T[o].id;return Qe.st.includes(c)?"\u{1F3E0} ":He.st.includes(c)?"\u{1F4BC} ":""},Di=o=>o>10?"d-hi":o>5?"d-md":"d-lo",Xg=/aver[ií]|incid[eè]ncia t[eè]cnica|incidencia t[eé]cnica|problema t[eè]cnic|t[eè]cnic[oa] del propi/i,qa={ref:null,m:new Map};function Iu(o){if(qa.ref!==V.alerts){qa.ref=V.alerts,qa.m=new Map;for(let c of V.alerts){if(c.src!=="Rodalies")continue;let f=c.txt.match(/(?:a causa d[e']|per causa d[e']|debido a|degut a|due to|because of|caused by)\s+([^.]{4,140})/i);for(let p of(c.es||c.txt).matchAll(/\b[Tt]ren\s+(\d{4,6})\b/g))qa.m.set(p[1],{why:f?f[1].trim().replace(/\s+/g," "):"",txt:c.txt,when:c.when,cx:/no circula|no circular[àa]|suprimi|anul[·.]?la|cancel[·.]?la|anulad|cancelad/i.test(c.es||c.txt)})}}return qa.m.get(String(o))||null}let Ya={ref:null,m:new Map};function op(o){let c=String(o.tr?o.tr.num:o.v&&o.v.num||"");if(!c)return null;if(Ya.ref!==V.alerts){Ya.ref=V.alerts,Ya.m=new Map;for(let p of V.alerts)if(p.src==="Rodalies"&&Xg.test(p.es||p.txt))for(let y of(p.es||p.txt).matchAll(/\b(\d{4,6})\b/g))Ya.m.set(y[1],p)}let f=Ya.m.get(c);return f?{why:"aviso",txt:f.txt}:o.real&&o.stop==="via"&&o.v.still>=300?{why:"via",min:Math.round(o.v.still/60)}:null}let Za=o=>{try{let c=Mt;return c?c.num!=null&&String(c.num)===String(o.num)||o.tid&&(c.tid===o.tid||c.vtid===o.tid):!1}catch{return!1}},lp=(o,c)=>{let f=A(o,c.min-1,c.min+240).sort((p,y)=>p.est-y.est).slice(0,6);return f.length?`${__t(135)}${f.map(p=>`<li><b>${nt(p.est)}</b>${Cn(p.fam)}<span>${Ei(p.dest,p.fam)}</span><i class="via">bus</i></li>`).join("")}</ol>`:""},Ni=(()=>{try{return JSON.parse(localStorage.getItem("rod_fav")||"[]")}catch{return[]}})(),qg=()=>{try{localStorage.setItem("rod_fav",JSON.stringify(Ni))}catch{}},cp=o=>!!o&&Ni.some(c=>c.num===String(o.num)),Se=(()=>{try{let o=JSON.parse(localStorage.getItem("rod_alarm")||"null");return o&&Date.now()-o.at<4*36e5?o:null}catch{return null}})(),Ss=()=>{try{localStorage.setItem("rod_alarm",JSON.stringify(Se))}catch{}},Ul=(o,c)=>!!(Se&&o&&Se.num===String(o.num)&&Se.sid===T[o.pat.stops[c]].id);function Fl(o,c){try{window.__vib?window.__vib():navigator.vibrate&&navigator.vibrate([400,150,400,150,600])}catch{}Ke(o+" \xB7 "+c),document.hidden&&"Notification"in window&&Notification.permission==="granted"&&(navigator.serviceWorker&&navigator.serviceWorker.getRegistration?navigator.serviceWorker.getRegistration():Promise.resolve(null)).then(f=>f?f.showNotification(o,{body:c,tag:"alarm",requireInteraction:!0,vibrate:[400,150,400,150,600],icon:"icons/icon-192.png"}):new Notification(o,{body:c})).catch(()=>{})}function Yg(){if(!Se||Se.done)return;let o=ee();if(!o.live)return;let c=t.days.indexOf(o.ymd),f=(et[c]||[]).find(D=>String(D.num)===Se.num)||(et[c-1]||[]).find(D=>String(D.num)===Se.num);if(!f)return;let p=f.pat.stops.findIndex(D=>T[D].id===Se.sid);if(p<0)return;let y=mt(f),M=typeof y=="number"?Math.max(0,y/60):0,P=f.day===c-1?1440:0,N=f.t0+f.pat.t[2*p]+M-P;if(N-o.min<-3){Se.done=!0,Ss();return}if(window.__schedAt&&N-2-o.min>.1&&(Se.sch==null||Math.abs(Se.sch-N)>=.5)&&(Se.sch=N,Se.nat=Date.now()+(N-2-o.min)*6e4,Ss(),window.__schedAt(7701,`${__t(136)}${T[f.pat.stops[p]].n}`,__t(137)+` (${nt(N)})`+(D=>D?` \xB7 ${__t(138)} ${D.fam} ${__t(139)} ${nt(D.est)}${D.plat?__t(140)+D.plat:""}`:"")(Vl.get(Se.sid)),Date.now()+(N-2-o.min)*6e4)),N-o.min<=2){Se.done=!0,Ss();let D=Vl.get(Se.sid),k=D?` \xB7 ${D.lost?__t(141)+" \xB7 "+__t(142):__t(138)} ${D.fam} ${__t(139)} ${nt(D.est)}${D.plat?__t(140)+D.plat:""}`:"",H=Math.round(N-o.min),b=(H>=1?`${__t(144)} ${H}${__t(143)}${nt(N)}) \xB7 ${__t(145)}`:`${__t(146)} (${nt(N)}) \xB7 ${__t(145)}`)+k;window.__schedAt&&Se.nat&&Date.now()>=Se.nat-2e4?document.hidden||Fl(`${__t(136)}${T[f.pat.stops[p]].n}`,b):(window.__schedOff&&window.__schedOff(7701),Fl(`${__t(136)}${T[f.pat.stops[p]].n}`,b))}}function Pu(o,c){let f=+o.t.slice(0,2)*60+ +o.t.slice(3,5),p=et[c]||[],y=(N,D)=>N.t0+N.pat.t[2*D+1],M=null,P=11;for(let N of p){let D=N.pat.stops.findIndex(H=>T[H].id===o.sid);if(D<0||D===N.pat.stops.length-1)continue;let k=Math.abs(y(N,D)-f)+(String(N.num)===o.num?-5:0)+(N.fam===o.fam?0:20)+(o.dest&&T[N.pat.stops[N.pat.stops.length-1]].id!==o.dest?3:0);k<P&&(P=k,M=N)}return M}let Ol=new Set;function Zg(){if(!Ni.length)return;let o=ee();if(!o.live)return;let c=t.days.indexOf(o.ymd);for(let f of Ni){let p=Pu(f,c);if(!p)continue;let y=p.pat.stops.findIndex(H=>T[H].id===f.sid);if(y<0)continue;let M=p.t0+p.pat.t[2*y+1],P=mt(p),N=typeof P=="number"?P/60:0,D=M-o.min;if(D<-2||D>60)continue;let k=o.ymd+f.num+(P==="X"?"X":N>=10?10:N>=5?5:0);Ol.has(k)||(P==="X"||N>=5?(Ol.add(k),Fl(`${__t(147)}${nt(M)} ${P==="X"?__t(148):`${__t(149)}${Math.round(N)} min`}`,`${p.fam} ${p.num}${__t(150)}${T[p.pat.stops[y]].n}${P==="X"?"":`${__t(151)}${nt(M+N)}`}`)):D<=20&&!Ol.has(o.ymd+f.num+"ok")&&V.vp.has(p.tid)&&(Ol.add(o.ymd+f.num+"ok"),Ke(`${__t(147)}${nt(M)}${__t(152)}`)))}}setInterval(()=>{try{Yg(),Zg()}catch{}},15e3);let Cn=o=>`<span class="ln" style="--c:${X[o]}">${m(o)}</span>`;{let o=f=>{let p=/^#?([0-9a-f]{6})$/i.exec(f||"");return p?[0,2,4].map(y=>{let M=parseInt(p[1].slice(y,y+2),16)/255;return M<=.03928?M/12.92:Math.pow((M+.055)/1.055,2.4)}).reduce((y,M,P)=>y+M*[.2126,.7152,.0722][P],0):0},c=[...new Set(Object.values(X))].filter(f=>o(f)>.3).map(f=>`.ln[style*="--c:${f}"],[data-f][style*="--c:${f}"].on,[data-f][style*="--c:${f}"]:not(.off){color:#14203a!important}`).join("");if(c){let f=document.createElement("style");f.textContent=c,document.head.appendChild(f)}}function hp(o,c){return c?o==="X"?__t(154):o>=60?`<span class="st late ${Di(o/60)}${__t(155)}${Math.round(o/60)} min</span>`:__t(156):`<span class="st sch">${__t(153)}</span>`}function Lu(){if(!d.classList.contains("peek")||window.__mapHidden||!d.getClientRects().length)return;let o=d.querySelector(".tc");if(!o)return;let c=o.querySelector(".st")||o.querySelector("p"),f=d.getBoundingClientRect().top-d.scrollTop,p=c?c.getBoundingClientRect().bottom-f+3:150;if(c){let y=c.nextElementSibling||c.parentElement!==o&&c.parentElement.nextElementSibling;y&&(p=Math.min(p,y.getBoundingClientRect().top-f-1))}d.style.setProperty("--peekh",Math.round(Math.min(280,Math.max(110,p)))+"px")}function Ms(){try{let o=d,c=document.getElementById("rcgrab"),f=document.getElementById("z");if(!o||!ze.on||ze.cur!=="map"||o.classList.contains("peek")||!o.getClientRects().length||!c||!c.getClientRects().length){o&&o._fit&&(["max-height","bottom","height","right","width"].forEach(x=>o.style.removeProperty(x)),o._fit=0);return}let y=o.getBoundingClientRect().top,M=c.getBoundingClientRect().top-8,P=Math.max(140,Math.floor(M-y)),N=f&&f.getClientRects().length?f.getBoundingClientRect():null,D=N?Math.max(10,Math.ceil(innerWidth-N.left+8)):10;o._fit=P+"|"+D;let k=o.style,H={"max-height":P+"px",height:"auto",bottom:"auto",width:"auto",right:D+"px"};for(let x in H)(k.getPropertyValue(x)!==H[x]||k.getPropertyPriority(x)!=="important")&&k.setProperty(x,H[x],"important")}catch{}}setInterval(()=>{ze.on&&ze.cur==="map"&&Ms()},700);try{new MutationObserver(()=>Ms()).observe(d,{attributes:!0,attributeFilter:["style","class"]})}catch{}window.__fitMcs=Ms;try{localStorage.removeItem("rod_dbg")}catch{}if(/[?&]dbg=1/.test(location.search)){let o=document.createElement("pre");o.id="dbgbox",o.style.cssText="position:fixed;left:4px;top:4px;z-index:999;background:rgba(0,0,0,.85);color:#0f0;font:11px/1.25 monospace;padding:6px;margin:0;pointer-events:none;max-width:70vw;white-space:pre-wrap",document.body.appendChild(o),setInterval(()=>{try{let c=p=>{let y=document.querySelector(p);if(!y||!y.getClientRects().length)return"\u2014";let M=y.getBoundingClientRect();return[M.left,M.top,M.right,M.bottom].map(Math.round).join(",")},f=getComputedStyle(d);o.textContent=`v ${document.title.slice(0,0)}${(document.getElementById("ver")||{}).textContent||""}
inner ${innerWidth}x${innerHeight} vv ${window.visualViewport?Math.round(visualViewport.height):"-"}
tab ${ze.on?ze.cur:"off"} peek ${d.classList.contains("peek")}
mcs ${c("#mcs")}
tc ${c("#mcs .tc")}
rc ${c("#rcgrab")} z ${c("#z")}
maxH ${f.maxHeight} ov ${f.overflowY}
fit ${d._fit||0}
inl ${d.style.cssText.slice(0,160)}`}catch(c){o.textContent="err "+c.message}},1e3)}addEventListener("resize",()=>setTimeout(Ms,80));try{new ResizeObserver(()=>Ms()).observe(document.getElementById("rcgrab")||document.body)}catch{}window.visualViewport&&visualViewport.addEventListener("resize",()=>setTimeout(Ms,80));function Ue(){try{Jg()}finally{requestAnimationFrame(Ms),window.__rodTabSync&&window.__rodTabSync();try{Lu()}catch{}}}function Jg(){if(!Mt&&me<0&&!_e&&!Ft&&!Ct&&!Zt){cr=!1,d.innerHTML="",d._h="",d.style.display="none",d.classList.remove("peek"),Wu();return}let o=ee(),c="",f=E()&&o.live,p=(x,b)=>V.alerts.filter(C=>[...C.fams].some(B=>x.has(B))||b!=null&&C.stops.has(b)),y=x=>x.length?`<div class="al">${x.slice(0,4).map(b=>`<p>\u26A0\uFE0F ${Ka(b)} ${[...b.fams].sort(F).slice(0,6).map(Cn).join(" ")} ${m(b.txt)} <small>${Qa(b)}</small></p>`).join("")}${x.length>4?`<small>y ${x.length-4}${__t(157)}`:""}</div>`:"",M=Mt&&f?ae.find(x=>x.real&&(Mt.vtid?x.v.tid===Mt.vtid:x.tr===Mt)):null;if(Zt&&!Ct&&!Ft&&!_e&&!Mt&&me<0)c=kg(Zt);else if(Ct)c=Bg();else if(Ft)c=`${__t(158)}${m(_("#ver").firstChild.textContent)}</small><ul class="chg">${_("#chg").innerHTML||__t(160)}${__t(159)}`;else if(_e){let x=V.alerts.filter(b=>[...b.fams].some(C=>ut.has(C))||!b.fams.size);c=`${__t(161)}${x.length}${__t(162)}${x.map(b=>`<div class="al"><p>${Ka(b)} ${[...b.fams].sort(F).map(Cn).join(" ")} <small>${Qa(b)}</small></p><p>${m(b.txt)}</p></div>`).join("")||__t(164)}${__t(163)}${V.alertsTs&&Date.now()/1e3-V.alertsTs<6*3600?__t(165):`${__t(166)}${V.alertsTs?new Date(V.alertsTs*1e3).toLocaleDateString("es-ES",{day:"numeric",month:"short"}):"\u2014"}`}</small></div>`}else if(M){let x=M.v,b=M.tr,C=Ee=>m(T[b.pat.stops[Ee]].n),B=b?b.pat.stops.length:0,at=Wt.get(x.sid),rt=at!=null?m(T[at].n):m(x.sid),q=b&&x.atStop>=0?C(x.atStop):"",dt=b&&x.next>=0?C(x.next):rt,J=b&&x.next>0?C(x.next-1):"",le=M.broke||op(M),ve=le?`<b class="stopv">\u26A0\uFE0F ${le.why==="aviso"?__t(167):`${__t(168)}${le.min} min`}</b>${b&&J?`${__t(169)}${J}${__t(170)}${dt}</b>`:""}`:M.stop==="via"&&b?`${__t(171)}${J?`${__t(173)}${J}${__t(170)}${dt}</b>`:`${__t(174)}${dt}</b>`}${__t(172)}${Math.max(1,Math.round(x.still/60))} min`:x.pre&&b?x.prevTr?`${__t(175)}${m(x.prevTr.num)}${__t(176)}${C(0)}</b>${x.prevDl>=1?`${__t(179)}${Math.round(x.prevDl)} min</b>`:""}${__t(177)}${nt(x.arrO)}${__t(178)}${nt(x.depEst)}</b>${x.preDl>=1?`${__t(180)}${nt(x.dep0)})`:""}`:`${__t(181)}${C(0)}${__t(182)}${nt(x.dep0+M.dl)}</b>`:q&&x.before?`Llegando a <b>${q}</b>`:(x.st==="STOPPED_AT"||M.stop==="st")&&q?`${__t(183)}${q}</b>`:q&&x.next>=0&&x.atStop!==x.next?`${__t(184)}${q}${__t(176)}${dt}</b>`:J?`${__t(185)}${J}${__t(170)}${dt}</b>`:`${__t(186)}${dt}</b>`,Jt=b&&x.next>=0&&!x.pre?nt(io(b,x,x.next,b.t0+b.pat.t[2*x.next]+M.dl)):"",ke=[];if(b){let Ee=M.idx>=0?M.idx:0,Ie=x.pre?Math.max(M.dl,x.preDl||0):M.dl,Je=Ge=>b.t0+b.pat.t[Ge]+Ie;for(let Ge=Ee;Ge<B;Ge++)ke.push(`<li class="${Nl(b.pat.stops[Ge])?"mine":""}${Ul(b,Ge)?" alm":""}"><b>${nt(io(b,x,Ge,Je(Ge===0?1:2*Ge)))}</b><span title="${C(Ge)}">${Nl(b.pat.stops[Ge])}${C(Ge)}</span>${Ie>=1?`<em class="dl ${Di(Ie)}">${x.pre?"\u2248":""}+${Math.round(Ie)}</em>`:""}${Ge>0?`<button type="button" class="abtn" data-alarm="${Ge}" title="${__t(187)}">${Ul(b,Ge)?"\u{1F514}":"\u{1F515}"}</button>`:""}</li>`)}c=`<div class="tc" style="--c:${M.c}"><button class="x" data-cx>\xD7</button><div>${Cn(M.fam)}${__t(188)}${m(b?b.num:x.num)}${__t(189)}${b?`<h3 class="rt"><span class="o" title="${C(0)}">${C(0)}</span><span class="ar">\u2192</span>${Ei(T[b.pat.stops[B-1]].n,b.fam)}</h3>`:""}
        <p>${ve}${Jt?`${__t(190)}${Jt}`:""}${x.plat&&x.st==="STOPPED_AT"&&q?`${__t(191)}${m(x.plat)}</b>`:""}</p><p>${x.pre&&x.prevTr?x.preDl>=1?`${__t(192)}${Math.round(x.preDl)}${__t(193)}`:__t(194):hp(V.delays.get(x.tid),V.delays.has(x.tid))}${(()=>{let Ee=b&&Ru(b.num);return Ee&&Ee.n>=2?`${__t(195)}${Ee.n}${__t(196)}${Ee.late?`${__t(197)} <b>${Ee.late} ${__t(198)} ${Ee.n} ${__t(199)}</b> ${__t(200)}`:__t(201)} \xB7 ${__t(202)} ${Ee.avg<.5?"0":"+"+Math.round(Ee.avg)} min</span>`:""})()}${(()=>{let Ee=b&&Iu(b.num);return Ee?`<span class="why" title="${m(Ee.txt)}">${Ee.why?__t(203)+m(Ee.why):__t(204)}</span>`:""})()}</p>
        <small>${x.pre?`${__t(205)}${ps(fu(M.age))}`:x.est?__t(206):`${__t(207)}${ps(fu(M.age))}${M.age>120?__t(208):""}`}</small>
        ${ke.length?`${M.dl>=1||x.pre&&x.preDl>=1?`${__t(209)}`:""}<ol class="stops">${ke.join("")}</ol>`:""}${y(p(new Set([M.fam])))}
        ${zl(b?b.num:x.num,"",M.fam)}${b?`<div class="rtb two"><button type="button" data-fav>${cp(b)?__t(210):__t(211)}</button><button type="button" data-follow>${$l(b)?__t(212):__t(213)}</button></div>`:""}</div>`}else if(Mt&&f&&!Mt.pat)c=`${__t(214)}${m(Mt.num||Mt.vtid||"")}${__t(215)}`;else if(Mt){let x=Mt,b=x.pat,C=b.stops.length,B=mt(x),at=typeof B=="number"?B/60:0,rt=t.days.indexOf(o.ymd),q=x.day===rt-1?1440:0,dt=o.min+q-x.t0-at,J=Os(x,dt),le=Ie=>x.t0+b.t[Ie]+at,ve=Ie=>m(T[b.stops[Ie]].n),Jt=__t(216);J&&(Jt=J.moving?`${__t(217)}${ve(J.next)}${__t(218)}${nt(le(2*J.next))}`:J.at===C-1?`${__t(219)}${ve(C-1)}</b>`:`${__t(183)}${ve(J.at)}${__t(220)}${nt(le(2*J.at+1))}`);let ke=J?J.next:0,Ee=[];for(let Ie=ke;Ie<C;Ie++)Ee.push(`<li class="${Nl(b.stops[Ie])?"mine":""}${Ul(x,Ie)?" alm":""}"><b>${nt(io(x,null,Ie,le(2*Ie)))}</b><span title="${ve(Ie)}">${Nl(b.stops[Ie])}${ve(Ie)}</span>${at>=1?`<em class="dl ${Di(at)}">+${Math.round(at)}</em>`:""}${Ie>0?`<button type="button" class="abtn" data-alarm="${Ie}" title="${__t(187)}">${Ul(x,Ie)?"\u{1F514}":"\u{1F515}"}</button>`:""}</li>`);c=`<div class="tc" style="--c:${x.c}"><button class="x" data-cx>\xD7</button><div>${Cn(x.fam)}${__t(188)}${m(x.num)}</b> <span class="pv">${__t(224)}</span></div><h3 class="rt"><span class="o" title="${ve(0)}">${ve(0)}</span><span class="ar">\u2192</span>${Ei(T[x.pat.stops[C-1]].n,x.fam)}</h3>
        <p>${Jt}</p><p>${hp(B,B!=null)}${(()=>{let Ie=Ru(x.num);return Ie&&Ie.n>=2?`${__t(195)}${Ie.n}${__t(196)}${Ie.late?`${__t(197)} <b>${Ie.late} ${__t(198)} ${Ie.n} ${__t(199)}</b> ${__t(200)}`:__t(201)} \xB7 ${__t(202)} ${Ie.avg<.5?"0":"+"+Math.round(Ie.avg)} min</span>`:""})()}${__t(221)}${nt(x.t0+b.t[1])}${__t(222)}${nt(x.t0+b.t[2*C-2])}${__t(223)}${at>=1?__t(209):""}<ol class="stops">${Ee.join("")}</ol>${zl(x.num,"",x.fam)}<div class="rtb two"><button type="button" data-fav>${cp(x)?__t(210):__t(211)}</button><button type="button" data-follow>${$l(x)?__t(212):__t(213)}</button></div></div>`}else{let x=me,b=t.days.indexOf(o.ymd),C=[];wi.st!==x&&(wi.st=x,wi.f.clear());let B=J=>(!X[J]||ut.has(J))&&(!wi.f.size||wi.f.has(J));if(b>=0){let J=(le,ve)=>{for(let Jt of le){if(!B(Jt.fam))continue;let ke=Jt.pat.stops.indexOf(x);if(ke<0||ke===Jt.pat.stops.length-1)continue;let Ee=mt(Jt),Ie=typeof Ee=="number"?Ee/60:0,Je=Jt.t0+Jt.pat.t[2*ke+1]-ve;Je+Ie<o.min-1||Je>o.min+360||C.push({tr:Jt,t:Je,dl:Ie,d:Ee,on:V.vp.has(Jt.tid),past:o.min>Jt.t0+Jt.pat.t[1]-ve+2})}};J(et[b],0),b>0&&J(et[b-1],1440)}C.sort((J,le)=>J.t+J.dl-le.t-le.dl);let at=T[x].id,rt=Ot.get(at),q=(f||U()&&o.live)&&V.url;q&&(!rt||Date.now()-rt.at>mp())&&!rt?.loading&&(Ot.set(at,{...rt||{},loading:!0,at:rt?rt.at:0}),Pt(ce(),"/departures.json?stationId="+at).then(J=>{Ot.set(at,{at:Date.now(),d:J}),me===x&&(d._h="",Ue())}).catch(()=>Ot.set(at,{at:Date.now(),err:1})));let dt=q&&rt&&rt.d&&Array.isArray(rt.d.trains)&&rt.d.trains.length?rt.d.trains:null;if(dt){let J=new Map([...V.vp.values()].map(Jt=>[String((pt.get(Jt.tid)||{}).num||Jt.num),Jt])),le=new Map(Yn(x).map(Jt=>[String(Jt.num),Jt])),ve=dt.filter(Jt=>B((Jt.line||{}).id||"")).slice(0,40).map(Jt=>{let ke=String(Jt.commercialNumber||Jt.technicalNumber||""),Ee=le.get(ke),Ie=Ee?nt(Ee.est):(Jt.departureDateHourSelectedStation||"").slice(11,16),Je=(Jt.line||{}).id||"",Ge=J.get(ke),xn=Ee?Math.round(Ee.dl)*60:Ge?V.delays.get(Ge.tid):null,gr=Ee&&(Ee.gone||!Ee.live&&Ee.est<o.min-1);return`<li class="go${gr?" old":""}${Za({num:ke,tid:Ge?Ge.tid:""})?" sel":""}" data-gt="${m(ke)}|${Ge?m(Ge.tid):""}"><b>${m(Ie)}</b>${X[Je]?Cn(Je):`<span class="ln" style="--c:#6b7385">${m(Je||"?")}</span>`}<span>${Ei((Jt.destinationStation||{}).name||"",Je)}${Jt.trainObservations?` \xB7 <i>${m(Jt.trainObservations)}</i>`:""}${gr?` <small class="oldt">${Ee.gone?__t(225):__t(226)}</small>`:""}</span>${Jt.trainCancelled?__t(227):typeof xn=="number"&&xn>=60?`<em class="dl ${Di(xn/60)}">+${Math.round(xn/60)}</em>`:""}${Jt.platformSelectedStation?`${__t(228)}${m(Jt.platformSelectedStation)}</i>`:""}${Ge?'<i class="lvd" title="circulando, posici\xF3n real">\u25CF</i>':'<i class="lvd ph">\u25CF</i>'}</li>`}).join("");c=`<div class="tc" style="--c:#1d2330"><button class="x" data-cx>\xD7</button><h3>${m(T[x].n)}</h3>${ap(x)}${zl("",T[x].id,"")}${__t(229)}${ve||__t(231)}</ol>${lp(x,o)}${y(p(T[x].fams,x))}${__t(230)}`}else c=`<div class="tc" style="--c:#1d2330"><button class="x" data-cx>\xD7</button><h3>${m(T[x].n)}</h3>${ap(x)}${zl("",T[x].id,"")}
        <small style="margin-top:6px">${f&&V.url?__t(233):""}${__t(232)}${f?__t(234):__t(235)}</small>
        <ol>${C.slice(0,40).map(J=>`<li class="go${Za({num:J.tr.num,tid:J.tr.tid})?" sel":""}" data-gt="${m(J.tr.num)}|${m(J.tr.tid)}"><b>${nt(J.t+J.dl)}</b>${Cn(J.tr.fam)}<span>${Ei(T[J.tr.pat.stops[J.tr.pat.stops.length-1]].n,J.tr.fam)}</span>${J.d==="X"?__t(227):J.dl>=1?`<em class="dl ${Di(J.dl)}">+${Math.round(J.dl)}</em>`:""}${f?J.on?'<i class="lvd" title="circulando, posici\xF3n real">\u25CF</i>':J.past?__t(236):'<i class="lvd ph">\u25CF</i>':""}</li>`).join("")||__t(237)}</ol>${lp(x,o)}${y(p(T[x].fams,x))}${__t(230)}`}let P=d.scrollTop;if(d._h!==c&&!(d._touch>Date.now())){let x=rt=>((rt&&rt.querySelector("h3")||{}).textContent||"").replace(/[^\p{L}\d]/gu,""),b=d.querySelector(".tc"),C=x(b),B=b?b.scrollTop:0;d.innerHTML=c,d._h=c,d.scrollTop=P;let at=d.querySelector(".tc");at&&B&&C&&x(at)===C&&(at.scrollTop=B)}if(d.style.display="flex",d.classList.toggle("min",cr),Wu(),innerWidth<=640){let x=d.querySelector(".tc");if(x&&!x.querySelector(".mn")){let b=document.createElement("button");b.type="button",b.className="mn",b.setAttribute("aria-label",__t(238)),b.textContent=d.classList.contains("peek")?"\u25B4":"\u25BE",b.onclick=B=>{B.stopPropagation(),d.classList.toggle("peek"),d.classList.contains("peek")&&(Hr="",d.querySelectorAll("details[open]").forEach(at=>at.open=!1)),d.scrollTop=0,d.querySelectorAll(".tc").forEach(at=>at.scrollTop=0),requestAnimationFrame(Ms),Lu(),b.textContent=d.classList.contains("peek")?"\u25B4":"\u25BE"};let C=x.querySelector(".x");x.insertBefore(b,C?C.nextSibling:x.firstChild)}}else d.classList.remove("peek");let N=_("#rc");if(innerWidth<=640&&!N.classList.contains("min")&&!Ue.done&&(Ue.done=1,_("#rcgrab").click()),innerWidth<=640){let x=_("#inf").getBoundingClientRect().bottom;d.style.top=Math.round(x+8)+"px",d.style.width="calc(100vw - 76px)",d.style.maxHeight=Math.max(140,_("#rc").getBoundingClientRect().top-x-16)+"px"}else if(innerHeight<=500){let x=_("#inf").getBoundingClientRect().bottom;d.style.top=Math.round(x+8)+"px",d.style.width="min(290px, 40vw)",d.style.maxHeight=innerHeight-x-20+"px"}else d.style.top="",d.style.width=Ct?"390px":"300px",d.style.maxHeight="";Ms();let k=d.querySelector("[data-cx]");k&&(k.onclick=x=>{if(x.stopPropagation(),Ue.done=0,Ct||Ft||_e||Zt&&!Mt&&me<0){Ct=Ft=_e=!1,Mt||me>=0||(Zt=""),d._h="",Ue(),a();return}if(Mt&&ie.st>=0){let b=ie.st;ie.st=-1,Mt=null,Nt=null,me=b,Vn(),d._h="",Ue(),Me=0,a();return}if(Mt&&$l(Mt)){let b=Mt,C=[...cn],B=Se?{...Se}:null,at=d.querySelector("[data-follow]");at&&at.click(),setTimeout(()=>Ke(`${__t(239)} \xB7 ${b.fam||""} ${b.num}`,{label:__t(240),fn:()=>{C.forEach(([rt,q])=>ui(rt,q)),B&&!Se&&(Se=B,Ss()),Ki("map"),fr({num:String(b.num),tid:b.tid&&V.vp.has(b.tid)?b.tid:"",tr:b}),Nt=Mt,d._h="",Ue(),we(!0),a()}}),0)}ie.st=-1,_e=!1,Ft=!1,Ct=!1,Mt=null,me=-1,Nt=null,Vn(),Ue(),Me=0,a()}),pp(d),d.querySelectorAll("[data-alarm]").forEach(x=>x.onclick=b=>{b.stopPropagation();let C=Mt&&Mt.pat?Mt:pt.get(Mt&&Mt.vtid)||null;if(!C)return;let B=+x.dataset.alarm,at=T[C.pat.stops[B]].id;Se&&Se.num===String(C.num)&&Se.sid===at?(Se=null,window.__schedOff&&window.__schedOff(7701),Ke(__t(241))):(Se={num:String(C.num),sid:at,at:Date.now()},Ke(`${__t(242)}${T[C.pat.stops[B]].n}`),"Notification"in window&&Notification.permission==="default"&&Notification.requestPermission()),Ss(),d._h="",Ue()});{let x=d.querySelector("[data-fav]");x&&(x.onclick=b=>{b.stopPropagation();let C=Mt&&Mt.pat?Mt:pt.get(Mt&&Mt.vtid)||null;if(!C)return;let B=Ni.findIndex(at=>at.num===String(C.num));if(B>=0)Ni.splice(B,1),Ke(__t(243));else{let at=[...Qe.st,...He.st,...It.st],rt=C.pat.stops.find(q=>at.includes(T[q].id))??C.pat.stops[0];Ni.push({num:String(C.num),fam:C.fam,sid:T[rt].id,dest:T[C.pat.stops[C.pat.stops.length-1]].id,t:nt(C.t0+C.pat.t[2*C.pat.stops.indexOf(rt)+1])}),Ke(`${__t(244)}${C.fam}${__t(245)}${Ni[Ni.length-1].t}${__t(150)}${T[rt].n}${__t(246)}`),"Notification"in window&&Notification.permission==="default"&&Notification.requestPermission()}qg(),d._h="",Ue(),we(!0)})}{let x=d.querySelector("[data-share]");x&&(x.onclick=()=>{let b=Zt,C=ae.filter(q=>(q.fam||q.tr&&q.tr.fam)===b),B=C.filter(q=>q.dl>=5).sort((q,dt)=>dt.dl-q.dl),at=V.alerts.filter(q=>q.fams.has(b)),rt=`${b}${__t(247)}${nt(ee().min)}: ${C.length}${__t(248)}${B.length}${__t(249)}${B.length?" ("+B.slice(0,4).map(q=>`${q.tr?q.tr.num:q.v.num} +${Math.round(q.dl)}`).join(", ")+")":""}.${at.length?__t(250)+at[0].txt:__t(251)}`;navigator.share?navigator.share({text:rt}).catch(()=>{}):(navigator.clipboard&&navigator.clipboard.writeText(rt),Ke(__t(252)+rt.slice(0,60)+"\u2026"))})}{let x=d.querySelector("[data-cols]");x&&(x.onclick=()=>{mn.on=!mn.on,Vg(),d._h="",Ue()})}d.querySelectorAll("[data-gs]").forEach(x=>x.onclick=()=>{let b=+x.dataset.gs;Ct=!1,window.__rodPickStation(b),Object.assign(s,{tx:T[b].w[0],ty:T[b].w[1],dist:Math.min(s.dist,20)}),a()}),d.querySelectorAll("[data-sf]").forEach(x=>x.onclick=b=>{b.stopPropagation();let C=x.dataset.sf;C?wi.f.has(C)?wi.f.delete(C):wi.f.add(C):wi.f.clear(),d._h="",Ue()}),d.querySelectorAll("[data-gt]").forEach(x=>x.onclick=()=>{ie.st=me;let[b,C]=x.dataset.gt.split("|"),B=pt.get(C);fr({num:b,tid:V.vp.has(C)?C:"",tr:B||null})}),d.querySelectorAll("[data-sethome]").forEach(x=>x.onclick=()=>qu(me,x.dataset.sethome));let H=d.querySelector("[data-follow]");H&&(H.onclick=()=>{let x=$l(Mt);if(Nt=x?null:Mt,!x&&Mt&&Mt.num!=null){let b=Mt.pat.stops,C=String(Mt.num),B=null,at=1e9;for(let rt of[Qe,He,It]){let q=Rn(rt);if(q==null||!b.includes(q)||rt===It&&!It.st.length)continue;let dt=Yn(q).find(J=>String(J.num)===C&&!J.gone);dt&&dt.est<at&&(at=dt.est,B=rt)}B?ui(B.key,C):[...cn.keys()].forEach(rt=>ui(rt,null)),we(!0)}if(x&&Mt&&Mt.num!=null){let b=String(Mt.num);[...cn].forEach(([C,B])=>{String(B)===b&&ui(C,null)}),Dn.num===b&&(Dn.num=""),Et.tid===b&&(Et.tid="",Et.lock=!1,Et.manual=0,Et.quiet=Date.now()+10*6e4),Se&&Se.num===b&&(Se=null,Ss(),window.__schedOff&&window.__schedOff(7701)),we(!0)}Nt?(s.dist=Math.min(s.dist,22),innerWidth<=640&&(d.classList.add("peek"),d.scrollTop=0,_("#rc").classList.contains("min")||_("#rcgrab").click())):d.classList.remove("peek"),d._h="",Ue(),a()})}window.__rodCard=Ue;try{let o=localStorage.getItem("rod_inf");(o==="mini"||o==null)&&_("#inf").classList.add("mini")}catch{}_("#inft").onclick=()=>{let o=_("#inf").classList.toggle("mini");try{localStorage.setItem("rod_inf",o?"mini":"")}catch{}(Mt||me>=0||_e||Ft)&&(d._h="",Ue())},_("#ver").onclick=()=>{Ft=!0,Ct=!1,_e=!1,d._h="",Ue()};let jg={parado:'<path d="M9 6v12M15 6v12"/>',calor:'<path d="M12 4a2 2 0 012 2v8.5a4 4 0 11-4 0V6a2 2 0 012-2z"/><path d="M12 11v6"/>',abordo:'<path d="M12 3l10 18H2z"/><path d="M12 10v5M12 18v.4"/>',via:'<path d="M12 3l10 18H2z"/><path d="M12 10v5M12 18v.4"/>',gente:'<circle cx="9" cy="8" r="3"/><path d="M3 20c0-3.5 2.7-6 6-6s6 2.5 6 6"/><circle cx="17" cy="9" r="2.5"/><path d="M16 14.2c2.8.3 5 2.5 5 5.8"/>',retraso:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',cancel:'<circle cx="12" cy="12" r="9"/><path d="M9 9l6 6M15 9l-6 6"/>',ascensor:'<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 9l3-3 3 3M9 15l3 3 3-3"/>'},Kg={vacio:"ok",lleno:"warn",petado:"bad",parado:"warn",calor:"warn",abordo:"bad",gente:"warn",retraso:"warn",cancel:"bad",ascensor:"warn",via:"bad"};function up(o){let c={vacio:1,lleno:2,petado:3}[o],f=c?[0,1,2].map(p=>`<rect x="${4+p*6}" y="${14-p*4}" width="4" height="${6+p*4}" rx="1" ${p<c?'fill="currentColor"':""}/>`).join(""):jg[o]||'<circle cx="12" cy="12" r="3"/>';return`<svg class="cki ${Kg[o]||""}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${f}</svg>`}let Bl=new Proxy({},{get:(o,c)=>up(c)}),Hr="",Qg=["vacio","lleno","petado",__t(253),"calor","abordo"],t_=["gente","retraso","cancel","ascensor","via"],e_={vacio:__t(254),lleno:__t(255),petado:__t(256),parado:__t(257),calor:__t(258),abordo:__t(259),gente:__t(260),retraso:__t(261),cancel:__t(262),ascensor:__t(263),via:__t(264)},kl=o=>(V.tipos||e_)[o]||o,Du=(o,c)=>(V.rep||[]).filter(f=>o&&f.num===String(o)&&!f.sid||c&&f.sid===String(c)&&!f.num||o&&c&&f.num===String(o)&&f.sid===String(c)),dp=o=>{let c=Math.round((Date.now()+(V.repSkew||0)-o.at)/6e4);return c<1?__t(265):ps(c+" min")},Ja=(()=>{try{return new Set(JSON.parse(localStorage.getItem("rod_votes")||"[]"))}catch{return new Set}})();function zl(o,c,f){if(!V.url||!V.repOk)return"";let p=Du(o,c),y=o?Qg:t_;return`<div class="crowd"><small>${up("gente")} ${__t(267)}${p.length?"":__t(268)}</small>${p.map(M=>`<p><span>${Bl[M.kind]||"\u2022"} <b>${m(kl(M.kind))}</b> <small>${M.up>1?M.up+__t(269):""}${dp(M)}</small></span>${Ja.has(M.id)?"<small>\u2713</small>":`<button type="button" data-rv="${M.id}:1">${__t(270)}</button><button type="button" data-rv="${M.id}:-1">${__t(271)}</button>`}</p>`).join("")}
      <details data-ckd="${m(String(o||"")+"|"+String(c||""))}"${Hr===String(o||"")+"|"+String(c||"")?" open":""}><summary>${o?__t(272):__t(273)}</summary><div class="ckb">${y.map(M=>`<button type="button" data-rk="${M}" data-rn="${m(o||"")}" data-rs="${m(c||"")}" data-rl="${m(f||"")}">${Bl[M]} ${m(kl(M))}</button>`).join("")}${__t(266)}`}async function fp(o,c){try{let p=await(await fetch(ce()+c,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)})).json();if(!p.ok){Ke(p.err||__t(274));return}if(p.id){Ja.add(p.id);try{localStorage.setItem("rod_votes",JSON.stringify([...Ja].slice(-300)))}catch{}}Ke(c==="/vote"?__t(275):p.n>1?`${__t(276)}${p.n}${__t(277)}`:__t(278));let y=await Pt(ce(),"/reports.json");y&&y.items&&(V.rep=y.items),d._h="",Ue(),we(!0)}catch{Ke(__t(279))}}function pp(o){o.querySelectorAll("details[data-ckd]").forEach(c=>c.addEventListener("toggle",()=>{Hr=c.open?c.dataset.ckd:Hr===c.dataset.ckd?"":Hr,c.open&&c.scrollIntoView({block:"nearest",behavior:"smooth"})})),o.querySelectorAll("[data-rk]").forEach(c=>c.onclick=f=>{f.stopPropagation(),c.disabled=!0,Hr="",fp({kind:c.dataset.rk,num:c.dataset.rn,sid:c.dataset.rs,line:c.dataset.rl},"/report")}),o.querySelectorAll("[data-rv]").forEach(c=>c.onclick=f=>{f.stopPropagation();let[p,y]=c.dataset.rv.split(":");Ja.add(+p);try{localStorage.setItem("rod_votes",JSON.stringify([...Ja].slice(-300)))}catch{}fp({id:+p,v:+y},"/vote")})}let ja=0;function Ke(o,c){let f=_("#toast");if(f||(f=document.createElement("div"),f.id="toast",document.body.appendChild(f)),f.textContent=o,c){let p=document.createElement("button");p.type="button",p.className="tact",p.textContent=c.label,p.onclick=y=>{y.stopPropagation(),clearTimeout(ja),f.className="",c.fn()},f.appendChild(p)}if(f.className="on",clearTimeout(ja),ja=setTimeout(()=>{f.className=""},Math.min(1e4,Math.max(4500,String(o).length*70))),!f._tap){f._tap=1,f.onclick=()=>{clearTimeout(ja),f.className=""};let p=null,y=0;f.addEventListener("touchstart",M=>{p=M.touches[0].clientY,y=0,f.style.transition="none"},{passive:!0}),f.addEventListener("touchmove",M=>{p!=null&&(y=Math.min(0,M.touches[0].clientY-p),f.style.translate=`0 ${y}px`,f.style.opacity=String(Math.max(.2,1+y/80)))},{passive:!0}),f.addEventListener("touchend",()=>{f.style.transition="",f.style.translate="",f.style.opacity="",p!=null&&y<-25&&(clearTimeout(ja),f.className=""),p=null})}}function Ka(o){return o.src?`<b class="asrc ${o.src==="Adif"?"adif":""}">${o.src==="Adif"?__t(280):m(o.src)}</b>`:""}function Qa(o){if(!o.when)return"";let[c,f]=o.when.split("T"),p=yt(new Date),y=p.ymd.slice(0,4)+"-"+p.ymd.slice(4,6)+"-"+p.ymd.slice(6,8);if(c===y&&f){let M=Math.round(p.min-(+f.slice(0,2)*60+ +f.slice(3,5)));return M<1?__t(265):M<60?ps(M+" min"):`${__t(281)}${f.slice(0,5)}`}return`${c.slice(8,10)}/${c.slice(5,7)}${f?" "+f.slice(0,5):""}`}function Nu(){let o=_("#alr");if(!o)return;let c=V.alerts.filter(f=>[...f.fams].some(p=>ut.has(p))).length;o.hidden=!c,o.textContent=`\u26A0\uFE0F ${c}${c===1?__t(282):__t(283)}`}{let o=_("#alrslot");o&&o.appendChild(_("#alr"))}_("#alr").onclick=()=>{Ft=!1,Ct=!1,_e=!0,Ue()},_("#wcopy").onclick=async()=>{let o=_("#wcode").textContent;try{await navigator.clipboard.writeText(o),_("#wcopy").textContent=__t(284)}catch{let f=document.createRange();f.selectNodeContents(_("#wcode"));let p=getSelection();p.removeAllRanges(),p.addRange(f),_("#wcopy").textContent=__t(285)}setTimeout(()=>_("#wcopy").textContent=__t(286),2500)};let n_=Wt.get("71801");function mp(){return document.hidden?cn.size||Se?12e4:1e12:3e4}function gp(o,c){let f=T[o].id,p=Ot.get(f);!(Y()&&V.url)||p&&(p.loading||Date.now()-p.at<mp())||(Ot.set(f,{...p||{},loading:!0,at:p?p.at:0}),Pt(ce(),"/departures.json?stationId="+f).then(y=>{Ot.set(f,{at:Date.now(),d:y}),c&&c()}).catch(()=>Ot.set(f,{at:Date.now(),err:1})))}let _p=o=>+o.slice(0,2)*60+ +o.slice(3,5),to={k:-2,m:null};function bs(o){let c=t.days.indexOf(ee().ymd);if(to.k!==c){to.k=c,to.m=new Map;for(let f of et[c]||[])to.m.set(String(f.num),f)}return to.m.get(String(o))||null}let Ui={at:0,m:new Map},eo=o=>E()?(no(""),[...o].filter(c=>{let f=Ui.m.get(c);return f&&f[0]>=2&&f[1]===0}).sort(F)):[];function no(o){if(Date.now()-Ui.at>6e4||Ui.vp!==V.vp){Ui.at=Date.now(),Ui.vp=V.vp,Ui.m=new Map;let f=ee(),p=t.days.indexOf(f.ymd);if(p>=0)for(let y of et[p]){let M=f.min-y.t0;if(M<y.pat.t[1]+3||M>y.pat.t[y.pat.t.length-2]-3)continue;let P=Ui.m.get(y.fam)||[0,0];P[0]++,V.vp.has(y.tid)&&P[1]++,Ui.m.set(y.fam,P)}}let c=Ui.m.get(o);return c&&c[0]>=3?c[1]/c[0]:1}function io(o,c,f,p){let y=T[o.pat.stops[f]].id;if([...Qe.st,...He.st].includes(y)){let M=Yn(o.pat.stops[f]).find(P=>String(P.num)===String(o.num));if(M&&!M.gone)return M.est}return Uu(o,c,f,0,p)}function xp(o,c){if(!o||!c||c.pre||c.dObs==null||c.err==null||c.err>.6)return null;let f=Date.now()/1e3-c.ts;if(f>150||f<-30||(c.still||0)>=90)return null;let p=te(o.pat).stopD,y=o.pat.t,M,P,N=p.reduce((D,k,H)=>Math.abs(k-c.dObs)<Math.abs(p[D]-c.dObs)?H:D,0);if(Math.abs(p[N]-c.dObs)<.16||c.atStop===N)M=y[2*N+1]??y[2*N],P=N;else{let D=p.findIndex(H=>H>c.dObs);if(D<=0)return null;let k=Math.min(1,Math.max(0,(c.dObs-p[D-1])/(p[D]-p[D-1]||1)));M=y[2*D-1]+k*(y[2*D]-y[2*D-1]),P=D-1}return{t:yt(new Date).min-f/60,tpos:M,j0:P,sd:p}}function Uu(o,c,f,p,y){let M=xp(o,c);if(!M||f<=M.j0&&!(f===M.j0&&p===1))return y;let P=o.pat.t,N=M.t+(P[2*f+p]??P[2*f])-M.tpos;if(N-M.t>45)return y;let D=(y%1440+1440)%1440,k=((N-D+720)%1440+1440)%1440-720;return k>=-3&&k<=5?y+k:y}function g1(o,c,f,p){let y=xp(o,c);if(!y)return null;let M=Uu(o,c,f,1,y.t+o.pat.t[2*f+1]-y.tpos);return M-p.min>30||M<p.min-1?null:M}function Yn(o,c){let f=ee(),p=(E()||U())&&f.live&&!c,y=Ot.get(T[o].id),M=[],P=new Map([...V.vp.values()].map(D=>[String((pt.get(D.tid)||{}).num||D.num),D]));if(p&&y&&y.d&&Array.isArray(y.d.trains)&&y.d.trains.length)for(let D of y.d.trains){let k=(D.departureDateHourSelectedStation||"").slice(11,16);if(!k)continue;let H=String(D.commercialNumber||D.technicalNumber||""),x=P.get(H),b=x?V.delays.get(x.tid):null,C=Math.max(typeof b=="number"?Math.max(0,b/60):0,x&&x.pre&&x.preDl||0),B=_p(k);B<f.min-720&&(B+=1440);let at=+(D.departureDateHourSelectedStation||"").slice(17,19)||0,rt=B+at/60,q=x&&pt.get(x.tid)||bs(H),dt=q?q.pat.stops.indexOf(o):-1,J=dt>=0?(q.t0+q.pat.t[2*dt+1])%1440:null;if(J!=null){for(;J<rt-720;)J+=1440;for(;J>rt+720;)J-=1440;Math.abs(rt-J)>120&&(J=null)}let le,ve;J==null?(le=at||!C?rt:rt+C,ve=at?0:C):at||Math.abs(rt-J)>=1?(le=rt,ve=Math.max(0,rt-J)):(le=J+C,ve=C);let Jt=!1;if(q&&!x&&dt>0&&!at){let ke=t.days.indexOf(f.ymd),Ee=q.day===ke-1?1440:q.day===ke+1?-1440:0,Ie=q.t0+q.pat.t[1]-Ee;if(f.min<Ie){let Je=Ie+(q.pat.t[2*dt+1]-q.pat.t[1]);Je>le+1&&(le=Je,Jt=!0,J!=null&&(ve=Math.max(0,le-J)))}}if(J!=null&&(B=Math.round(J)),x&&q&&dt>=0){let ke=Uu(q,x,dt,1,le);ke!==le&&(le=Math.max(ke,f.min),J!=null&&(ve=Math.max(0,le-J)))}M.push({dubious:Jt,rodLive:!!at,sm:B,est:le,dl:ve,fam:(D.line||{}).id||"",dest:(D.destinationStation||{}).name||"",destId:(D.destinationStation||{}).id||"",plat:D.platformSelectedStation||"",cancel:!!D.trainCancelled,obs:D.trainObservations||"",live:!!x,num:H,tid:x?x.tid:"",tr:x&&pt.get(x.tid)||bs(H),src:"oficial"})}else{let D=t.days.indexOf(f.ymd);if(D<0)return M;let k=(H,x)=>{for(let b of H){let C=b.pat.stops.indexOf(o);if(C<0||C===b.pat.stops.length-1)continue;let B=mt(b),at=typeof B=="number"?Math.max(0,B/60):0,rt=b.t0+b.pat.t[2*C+1]-x;if(rt+at<f.min-1||rt>f.min+(f.min>1080||f.min<300?600:360))continue;let q=b.pat.stops[b.pat.stops.length-1];M.push({sm:rt,est:rt+at,dl:at,fam:b.fam,dest:T[q].n,destId:T[q].id,plat:"",cancel:B==="X",obs:"",live:V.vp.has(b.tid),num:b.num,tid:b.tid,tr:b,src:"horario"})}};k(et[D],0),D>0&&k(et[D-1],1440),D+1<t.days.length&&f.min>1080&&k(et[D+1],-1440)}if(p){let D=new Set(M.map(x=>String(x.num))),k=t.days.indexOf(f.ymd),H=(x,b)=>{for(let C of x||[]){if(D.has(String(C.num)))continue;let B=C.pat.stops.indexOf(o);if(B<0||B===C.pat.stops.length-1)continue;let at=C.t0+C.pat.t[2*B+1]-b;if(at<f.min-45||at>f.min+1||!V.vp.get(C.tid))continue;let q=V.delays.get(C.tid),dt=typeof q=="number"?Math.max(0,q/60):0,J=C.pat.stops[C.pat.stops.length-1];M.push({sm:at,est:at+dt,dl:dt,fam:C.fam,dest:T[J].n,destId:T[J].id,plat:"",cancel:!1,obs:"",live:!0,num:C.num,tid:C.tid,tr:C,src:"horario"})}};k>=0&&(H(et[k],0),k>0&&H(et[k-1],1440));for(let x of M){let b=x.tid&&V.vp.get(x.tid),C=x.tr?x.tr.pat.stops.indexOf(o):-1;x.passed=!!(b&&C>=0&&!b.pre&&b.next!=null&&b.next>=0&&b.next>C&&b.atStop!==C),!x.passed&&x.live&&x.est<f.min&&(x.est=f.min,x.late=!0),x.passed&&(x.gone=!0)}}let N=M.filter(D=>D.gone?f.min-D.est<20:D.est>=f.min-.5).sort((D,k)=>D.est-k.est);{let D=N.filter(k=>k.gone);if(D.length>2){let k=new Set(D.slice(0,D.length-2));N=N.filter(H=>!k.has(H))}}if(!N.filter(D=>!D.gone).length&&M.length&&M[0].src==="oficial"&&!c)return Yn(o,!0);for(let D of N){let k=D.num&&Iu(D.num);k&&k.cx&&(D.cancel=!0,D.cxWhy=k.txt)}if(E()&&f.live){let D=t.days.indexOf(f.ymd);for(let k of N){if(k.live||k.cancel||!k.tr)continue;let H=k.tr.day===D-1?1440:k.tr.day===D+1?-1440:0,x=k.tr.t0+k.tr.pat.t[1]-H+(k.dl||0);k.noPos=f.min>x+3&&!k.rodLive,k.ghost=k.noPos&&no(k.fam)>=.7}}if(c||(N=N.concat(A(o,f.min-.5,f.min+360)).sort((D,k)=>D.est-k.est)),!c&&N.some(D=>D.src==="oficial")){let D=M.filter(x=>x.src==="oficial"),k=Math.max(...D.map(x=>x.sm)),H=new Set(N.map(x=>String(x.num)));N=N.concat(Yn(o,!0).filter(x=>!x.gone&&x.sm<=k&&x.est>=f.min-.5&&!H.has(String(x.num))).map(x=>Object.assign(x,{unconf:!0}))).sort((x,b)=>x.est-b.est)}if(N.some(D=>D.src==="oficial")){let D=Math.max(...N.map(H=>H.sm)),k=new Set(N.map(H=>String(H.num)));N=N.concat(Yn(o,!0).filter(H=>H.sm>D&&!k.has(String(H.num))))}return N}let vp=(o,c,f,p)=>{let y={key:o,ico:c,name:f,st:[],i:0,walk:10,open:!1};try{let M=JSON.parse(localStorage.getItem("rod_"+o)||"null");M&&Object.assign(y,M)}catch{}return!y.st.length&&p&&(y.st=p),y},Qe=vp("home","\u{1F3E0}",__t(287),null),He=vp("work","\u{1F4BC}",__t(288),null),It={key:"near",ico:"\u{1F4CD}",name:__t(289),st:[],i:0,walk:0,open:!1,dist:{},fix:0,err:""},zs=[It,Qe,He];try{It.homeW=JSON.parse(localStorage.getItem("rod_homew")||"null")}catch{}Qe.open=!1,He.open=!1;function yp(o,c){let f=bt(o,c),p=bt(o,c+.009);return 1/Math.hypot(p[0]-f[0],p[1]-f[1])}function Fu(o){if(!navigator.geolocation){It.err=__t(290),we(!0);return}navigator.geolocation.getCurrentPosition(c=>{let{longitude:f,latitude:p}=c.coords,y=bt(f,p),M=yp(f,p),P=T.map((H,x)=>[x,Math.hypot(H.w[0]-y[0],H.w[1]-y[1])*M]).filter(([H])=>T[H].fams.size).sort((H,x)=>H[1]-x[1]),N=P.filter(([,H],x)=>x===0||H<Math.max(2.5,P[0][1]*1.6)).slice(0,3),D=It.st[0]!==T[N[0][0]].id;It.w=y,It.k=M,It.acc=c.coords.accuracy!=null?c.coords.accuracy:999,It.st=N.map(([H])=>T[H].id),It.dist=Object.fromEntries(N.map(([H,x])=>[T[H].id,x])),It.fix=Date.now(),It.err="",D&&(It.i=0);let k=[Qe,He].find(H=>H.st.includes(It.st[0])&&It.dist[It.st[0]]<1.5);we(!0)},c=>{It.err=c.code===1?__t(291):__t(292),we(!0)},{enableHighAccuracy:!1,maximumAge:6e4,timeout:12e3})}let Sp=o=>Math.max(1,Math.round(o*1.3/.08));setTimeout(()=>Fu(!0),400);let Et={fixes:[],tid:"",no:new Map,shown:""};try{let o=JSON.parse(localStorage.getItem("rod_onb")||"null");o&&o.tid&&Date.now()-o.at<3*36e5&&o.ymd===yt(new Date).ymd&&(Et.tid=o.tid,Et.manual=o.manual||0,Et.lock=!!o.lock)}catch{}let Mp="";setInterval(()=>{let o=Et.tid+"|"+(Et.manual||0)+"|"+(Et.lock?1:0);if(o!==Mp){Mp=o;try{Et.tid?localStorage.setItem("rod_onb",JSON.stringify({tid:Et.tid,manual:Et.manual||0,lock:!!Et.lock,at:Date.now(),ymd:yt(new Date).ymd})):localStorage.removeItem("rod_onb")}catch{}}},1500);let Dn={num:"",until:0};function $l(o){return!!o&&(Nt===o||o.num!=null&&([...cn.values()].some(c=>String(c)===String(o.num))||String(Et.tid)===String(o.num)))}let bp=()=>{let o=new Set([...cn.values()].map(String));return Dn.num&&Dn.until>Date.now()&&o.add(Dn.num),o};function Ou(o,c){return!!o&&o.est-c.min<=3&&c.min-o.est<=20}function Bu(o){Ke(o?`${__t(293)} (${o})`:__t(293))}function so(o,c,f){o=String(o),Et.tid&&Et.tid!==o&&Et.no.set(Et.tid,Date.now()+20*6e4),Et.tid=o,Et.cand=null,Et.lock=c==="lock",Et.manual=c==="auto"?0:Date.now()+(c==="lock"?4*36e5:90*6e4),[...cn].forEach(([M,P])=>{String(P)!==o&&ui(M,null)}),Dn.num=o,Dn.until=Date.now()+90*6e4;let p=new Set;for(let M of zs){let P=Rn(M);P!=null&&(M.platAt||M.goAt||M===It&&It.st&&It.st.length)&&p.add(P)}for(let M of zs)(M.platAt||M.goAt||c!=="auto"&&M.open)&&(M.platAt=0,M.goAt=0,c!=="auto"&&(M.open=!1),hi(M));window.__lpAt=Date.now();let y=ae.find(M=>M.tr&&String(M.tr.num)===o)||R(ee()).out.find(M=>M.tr&&String(M.tr.num)===o);if(c!=="auto"){let M=y?y.tr:bs(o);if(M){Nt=M,Mt=M,me=-1,ze.sk="t"+(M.num||M.vtid),Ft=_e=Ct=!1,d._h="";try{Ue(),a()}catch{}}if(![...cn.values()].some(P=>String(P)===o)){let P=f||null,N=1e9;if(!P)for(let D of[Qe,He,It]){let k=Rn(D),H=k!=null?Yn(k).find(x=>String(x.num)===o&&!x.gone):null;H&&H.est<N&&(N=H.est,P=D.key)}P&&ui(P,o)}}if(y){Nt=y.tr;let M=y.tr.pat.stops,P=y.real?y.v.next:y.p.next,N=[...Qe.st,...He.st,...Vl.keys()],D=M.findIndex((k,H)=>H>=P&&!p.has(k)&&N.includes(T[k].id));D>0&&!(Se&&Se.num===o)&&(Se={num:o,sid:T[M[D]].id,at:Date.now()},Ss())}return y}function i_(){let o=Et.fixes;if(o.length<2)return;let c=o[o.length-1],f=o.slice().reverse().find(C=>c.t-C.t>=8e3&&c.t-C.t<=9e4);if(!f)return;let p=Math.hypot(c.w[0]-f.w[0],c.w[1]-f.w[1])*c.k,y=c.spd!=null&&c.spd>0?c.spd*3.6:p/((c.t-f.t)/36e5);if(c.acc!=null&&c.acc>100)return;if(Et.tid&&!Et.lock&&y<8){if(!Et.slow)Et.slow=c.t;else if(c.t-Et.slow>9e4&&T.some(C=>C.w&&Math.hypot(C.w[0]-c.w[0],C.w[1]-c.w[1])*c.k<.35)){Et.tid="",Et.manual=0,Et.lock=!1,Et.slow=0,Et.quiet=Date.now()+10*6e4,Nt=null,we(!0);return}}else Et.slow=0;if(!Et.tid&&Et.quiet&&Date.now()<Et.quiet||Et.manual&&Date.now()<Et.manual)return;if(Et.tid){if(y<22)return;let C=ae.find(B=>B.tr&&String(B.tr.num)===Et.tid)||R(ee()).out.find(B=>B.tr&&String(B.tr.num)===Et.tid);if(C){if(Math.hypot(C.p.w[0]-c.w[0],C.p.w[1]-c.w[1])*c.k<=5){Et.far=0;return}if(Et.far||(Et.far=c.t),c.t-Et.far<12e4)return}Et.far=0}let M=bp();if(!Et.tid&&M.size&&y>=15&&y<=200&&!(c.acc!=null&&c.acc>80))for(let C of[...ae.filter(B=>B.real),...R(ee()).out]){if(!C.tr||!M.has(String(C.tr.num))||(Et.no.get(String(C.tr.num))||0)>Date.now())continue;if(Math.hypot(C.p.w[0]-c.w[0],C.p.w[1]-c.w[1])*c.k<=(C.real?1.6:2.2)){wp(C);return}}if(y<22||y>200)return;let P=[c.w[0]-f.w[0],c.w[1]-f.w[1]],N=null,D=2.5,k=ae.filter(C=>C.real),H=R(ee()).out.filter(C=>C.tr&&!k.some(B=>B.tr&&String(B.tr.num)===String(C.tr.num))),x=bp();for(let C of[...k,...H]){if(!C.tr||x.size&&!x.has(String(C.tr.num)))continue;let B=C.real?2.5:3.5,at=Math.hypot(C.p.w[0]-c.w[0],C.p.w[1]-c.w[1])*c.k;if(at>Math.min(D,B)||N&&N.real&&!C.real)continue;let rt=C.real?C.v.next:C.p.next;if(rt==null||rt<0)continue;let q=T[C.tr.pat.stops[rt]].w,dt=[q[0]-C.p.w[0],q[1]-C.p.w[1]];if(dt[0]*P[0]+dt[1]*P[1]<=0)continue;let J=String(C.tr.num);(Et.no.get(J)||0)>Date.now()||(D=at,N=C)}if(!N){Et.cand=null;return}let b=String(N.tr.num);if(Et.tid!==b&&!(c.acc!=null&&c.acc>50)){if(!Et.cand||Et.cand.k!==b){Et.cand={k:b,t:c.t};return}c.t-Et.cand.t<2e4||wp(N)}}function wp(o){let c=String(o.tr.num);so(c,"auto"),Ft=_e=Ct=!1,me=-1,Mt=o.tr,Nt=o.tr,Object.assign(s,{tx:o.p.w[0],ty:o.p.w[1],dist:Math.min(s.dist,22)}),innerWidth<=640&&(d.classList.add("peek"),_("#rc").classList.contains("min")||_("#rcgrab").click()),Vn(),d._h="",Ue(),Me=0,a();let f=_("#onb");f||(f=document.createElement("div"),f.id="onb",document.body.appendChild(f)),f.innerHTML=`${__t(294)}${m(o.tr.fam)} ${m(o.tr.num)}${__t(295)}${m(T[o.tr.pat.stops[o.tr.pat.stops.length-1]].n)}${__t(296)}${Se&&Se.num===c?`${__t(298)}${m(T[Wt.get(Se.sid)].n)}`:""}${__t(297)}`,f.className="on",f.querySelector("[data-onb-no]").onclick=()=>{Et.no.set(c,Date.now()+20*6e4),Et.tid="",Et.lock=!1,Nt=null,Mt=null,d._h="",Ue(),f.className=""},f.querySelector("[data-onb-x]").onclick=()=>{f.className=""},setTimeout(()=>{f.className=""},15e3)}if(navigator.geolocation&&navigator.geolocation.watchPosition){let o=null,c=null,f=0,p=()=>!!(zs.some(D=>D.goAt)||f>Date.now()&&!Et.lock),y=D=>{let{longitude:k,latitude:H}=D.coords,x={t:D.timestamp||Date.now(),w:bt(k,H),k:yp(k,H),spd:D.coords.speed,acc:D.coords.accuracy};if(!(Et.fixes.length&&Et.fixes[Et.fixes.length-1].t===x.t)){Et.fixes.push(x),Et.fixes=Et.fixes.filter(b=>x.t-b.t<12e4);{let b=Et.fixes.find(B=>x.t-B.t>=2e4),C=x.spd!=null&&x.spd>0?x.spd*3.6:b?Math.hypot(x.w[0]-b.w[0],x.w[1]-b.w[1])*x.k/((x.t-b.t)/36e5):0;C>=15&&C<250&&(x.acc==null||x.acc<300)&&(f=Date.now()+10*6e4)}try{ee().live&&i_()}catch{}}},M=0,P=()=>{if(!(o!=null||M))if(c=p(),c)o=navigator.geolocation.watchPosition(y,()=>{},{enableHighAccuracy:!0,maximumAge:5e3,timeout:2e4});else{let D=()=>navigator.geolocation.getCurrentPosition(y,()=>{},{enableHighAccuracy:!1,maximumAge:55e3,timeout:2e4});D(),M=setInterval(D,6e4)}};setInterval(()=>{(o!=null||M)&&p()!==c&&(N(),P())},15e3);let N=()=>{o!=null&&(navigator.geolocation.clearWatch(o),o=null),M&&(clearInterval(M),M=0)};setTimeout(P,3e3),document.addEventListener("visibilitychange",()=>{document.hidden?N():(Et.fixes=[],P())})}setInterval(()=>{!document.hidden&&(Date.now()-It.fix>11e4||zs.some(o=>o.goAt))&&Fu(!1)},3e4);let hi=o=>{try{localStorage.setItem("rod_"+o.key,JSON.stringify({st:o.st,i:o.i,walk:o.walk,open:o.open,hide:o.hide||"",goAt:o.goAt||0,platAt:o.platAt||0,xfer:o.xfer||null}))}catch{}},Rn=o=>o.st.length?Wt.get(o.st[o.i]||o.st[0]):null;function Ep(o,c,f,p){if(p&&c.bus)return c.bstops.slice(1).some(P=>p.has(P))?"to":"out";if(p&&c.tr){let P=c.tr.pat.stops,N=P.indexOf(o);if(N>=0&&P.slice(N+1).some(D=>p.has(D)))return"to"}if(p&&c.tr)return"out";let y=Wt.get(c.destId)??T.findIndex(P=>P.n===c.dest);if(y<0||y==null||f==null)return"otros";let M=P=>Math.hypot(T[P].w[0]-T[f].w[0],T[P].w[1]-T[f].w[1]);return M(y)<M(o)?"to":"out"}let ur=o=>o<1?__t(265):o<60?Math.floor(o)+" min":Math.floor(o/60)+" h "+String(Math.floor(o%60)).padStart(2,"0"),Tp=0,s_=/sin servicio|sense servei|suspend|interromp|interrump|no circula|no se puede garantizar|no es pot garantir/i,Ap=/sin servicio|sense servei|suspend|interromp|interrump|no circula|no hi ha circulaci|cortad|tallad|corte de|tall de|servicio alternativo|servei alternatiu|por carretera|per carretera|no se puede garantizar|no es pot garantir/i,Cp=/huelga|vaga\b|strike|servicios? m[ií]nimos|serveis m[ií]nims|demora|retard|retras|v[ií]a [uú]nica|una sola v[ií]a|incidencia|incidència|aver[ií]a|avaria|aturad|detenid|parad[oa]s? en|velocidad reducida|velocitat redu/i,ro=o=>{let c=o.es||o.txt;return Ap.test(c)||Ap.test(o.txt)?3:Cp.test(c)||Cp.test(o.txt)||o.lvl>=2?2:1},Rp=4,ku=new Map,Vl=new Map;function Ip(o,c){let f=t.days.indexOf(ee().ymd),p=f+"|"+o+"|"+[...c].join(",");if(ku.has(p))return ku.get(p);let y=!1,M=new Set,P=new Set;for(let D of et[f]||[]){let k=D.pat.stops,H=k.indexOf(o);if(H>=0)for(let b=H+1;b<k.length;b++){if(c.has(k[b])){y=!0;break}M.add(k[b])}let x=-1;for(let b=1;b<k.length;b++)if(c.has(k[b])){x=b;break}if(x>0)for(let b=0;b<x;b++)P.add(k[b])}let N=y?null:[...M].filter(D=>P.has(D)&&D!==o&&!c.has(D));return ku.set(p,N),N}function zu(o,c,f,p){for(let y of p||Yn(o)){if(y.cancel||y.gone||!y.tr||y.est<c-.01)continue;let M=y.tr.pat.stops,P=M.indexOf(o);if(P<0)continue;let N=-1;for(let D=P+1;D<M.length;D++)if(f.has(M[D])){N=D;break}if(!(N<0))return{c:y,fin:y.est+(y.tr.pat.t[2*N]-y.tr.pat.t[2*P+1])}}return null}function r_(o,c,f){let p=zu(o,c+2,f,Yn(o));return p?{c:p.c,fin:p.fin,m:p.c.est-c,lost:!1}:null}function $u(o,c,f,p,y){let M=null,P=new Map,N=Yn(o).filter(D=>!D.cancel&&!D.gone&&D.tr&&D.est-y.min>=p).slice(0,8);for(let D of N){let k=D.tr.pat.stops,H=k.indexOf(o);if(!(H<0))for(let x of f){let b=k.indexOf(x);if(b<=H)continue;let C=D.est+(D.tr.pat.t[2*b]-D.tr.pat.t[2*H+1]);P.has(x)||P.set(x,Yn(x));let B=zu(x,C+Rp,c,P.get(x));B&&(!M||B.fin<M.finAt-.01||Math.abs(B.fin-M.finAt)<.01&&D.est>M.x.est)&&(M={T:x,x:D,finAt:B.fin})}}return M}function a_(o,c,f,p,y){let M=c.T,P=Yn(M),N=c.fin,D=[];for(let x of P){if(D.length>=5)break;if(x.cancel||x.gone||!x.tr)continue;let b=x.tr.pat.stops,C=b.indexOf(M),B=-1;for(let q=C+1;q<b.length;q++)if(N.has(b[q])){B=q;break}if(B<0||f.x&&f.x.arr!=null&&x.est<f.x.arr-.01)continue;let at=x.est+(x.tr.pat.t[2*B]-x.tr.pat.t[2*C+1]),rt=p&&p.c===x;D.push(`<li class="hr${rt?" pin":""}" style="--lc:${X[x.fam]||"#6b7385"}"><span class="hrt"><b>${nt(x.est)}</b><small>${f.x&&f.x.arr!=null?x.est-f.x.arr<2?__t(299):Math.floor(x.est-f.x.arr)+" "+__t(300):""}</small></span><span class="hrd">${Ei(x.fam+" \xB7 "+x.dest,x.fam)}<small class="hro">${__t(301)} ${nt(at)}${x.num?" \xB7 "+__t(302)+m(x.num):""}</small></span><span class="hrm">${x.dl>=1?`<em class="dl ${Di(x.dl)}">+${Math.round(x.dl)}</em>`:""}${x.plat?`${__t(228)}${m(x.plat)}</i>`:""}</span></li>`)}let k=(()=>{let x=[];for(let b of c.cands){let C=$u(Rn(o),N,[b],0,y);C&&x.push([b,C.finAt])}return x.sort((b,C)=>b[1]-C[1]),x.filter(([b,C])=>C<=x[0][1]+30||c.fixed&&b===M).slice(0,4)})(),H=k.length>1||c.fixed?`<div class="hxst"><span>${__t(303)}:</span><button type="button" data-hxf="${o.key}:" class="${c.fixed?"":"on"}">${__t(304)}</button>${k.map(([x])=>`<button type="button" data-hxf="${o.key}:${m(T[x].id)}" class="${c.fixed&&x===M?"on":""}">${m(T[x].n)}</button>`).join("")}</div>`:"";return`<div class="hxfer"><div class="hdir">\u21C4 ${__t(303)} ${Ei(T[M].n,p?p.c.fam:"")} \u2192 ${m(c.finName)}</div><ol class="hxl">${D.join("")||`<li class="hr"><span class="hrd">${__t(305)}</span></li>`}</ol>${H}</div>`}let Pp=new Set;function o_(o,c,f){Pp.has(o)||(Pp.add(o),Vp(c,f,o))}function l_(o,c,f){let p=Rn(o);if(o===It){if(Et.tid)return"";if(p==null)return`${__t(306)}${It.err?m(It.err)+__t(307):__t(308)}</small></span><span class="hchev">\u27F3</span></button></div>`;if([Qe,He].find(Dt=>Dt.st.includes(It.st[0])&&It.dist[It.st[0]]<1.5)||Date.now()-It.fix>10*6e4)return"";o.walk=Sp(It.dist[o.st[o.i]]||0)}if(p==null){let tt=It.st.length?Wt.get(It.st[0]):null,Dt=o===He?Qe:He,$t=tt!=null&&!Dt.st.includes(It.st[0]);return`<div class="hplace"><div class="hhead hnew"><span class="hico">${o.ico}</span><span class="htit"><b>${o.name}</b><small>${$t?`${__t(309)}${m(T[tt].n)}</b>`:__t(310)}</small></span>${$t?`<button type="button" class="hpick" data-hnear="${o.key}${__t(311)}`:""}<button type="button" class="hpick alt" data-hset="${o.key}">${$t?__t(312):__t(313)}</button></div></div>`}gp(p,()=>we(!0));let y=o===It?null:o===Qe?He:Qe,M=y?Rn(y):null,P=M!=null&&M!==p?M:n_,N=M!=null&&M!==p?y===He?__t(314):"casa":"Barcelona",D=T[p].fams,k=new Set([...D].filter(tt=>ut.has(tt))),H=k.size<D.size,x=!1;k.size||(k=new Set(D),H=!1,x=!0);let b=It.w?Math.hypot(T[p].w[0]-It.w[0],T[p].w[1]-It.w[1])*It.k:null,C=b!=null&&Date.now()-It.fix<10*6e4;o.platAt&&Date.now()-o.platAt>45*6e4&&(o.platAt=0,hi(o)),Et.tid&&o.platAt&&(o.platAt=0,hi(o));let B=o!==It&&!!o.platAt&&!Et.tid,at=o===It||C&&b>3&&!o.goAt&&!B,rt=B||o!==It&&C&&(b<.08&&It.acc<=40||b<.15&&It.acc<=100&&Date.now()-It.fix<3*6e4)&&!(o===Qe&&It.homeW&&Math.hypot(It.homeW[0]-It.w[0],It.homeW[1]-It.w[1])*It.k<.05),q=o.goAt?(Date.now()-o.goAt)/6e4:null;q!=null&&(q>60||rt)&&(o.goAt=0,hi(o)),C&&o!==It&&It.fix!==o._khFix&&(o._khFix=It.fix,(o._kh=(o._kh||[]).filter(tt=>Date.now()-tt.t<6*6e4)).push({t:Date.now(),km:b}));let dt=C&&o!==It&&b<=3&&!(o._noWay>Date.now())&&(o._kh||[]).some(tt=>Date.now()-tt.t>=6e4&&Date.now()-tt.t<=5*6e4&&tt.km-b>=.08),J=!rt&&o!==It&&(dt||!!o.goAt),le=J?C&&b<=3?Sp(b):Math.max(0,o.walk-q):0,ve=Yn(p),Jt=ve.filter(tt=>!X[tt.fam]||ut.has(tt.fam)||x),ke=at||rt?0:J?le:o.walk,Ee=V.alerts.filter(tt=>[...tt.fams].some(Dt=>k.has(Dt))||tt.stops&&tt.stops.has(p)),Ie=Ee.some(tt=>s_.test(tt.es||tt.txt)),Je={to:[],out:[],otros:[],all:Jt},Ge=N!=="Barcelona"?new Set(y.st.map(tt=>Wt.get(tt)).filter(tt=>tt!=null)):null,xn=null;if(Ge&&o!==It){let tt=Ip(p,Ge);if(tt&&tt.length){let Dt=o.xfer!=null?Wt.get(o.xfer):null,$t=Dt!=null&&tt.includes(Dt)?[Dt]:tt,re=$u(p,Ge,$t,ke,c);re&&(xn=Object.assign(re,{fin:Ge,finName:T[P].n,cands:tt,fixed:Dt!=null&&tt.includes(Dt)}),gp(re.T,()=>we(!0)),P=re.T,Ge=new Set([re.T]))}}Jt.forEach(tt=>Je[Ep(p,tt,P,Ge)].push(tt));let gr="";if(Ge&&!Je.to.length&&Jt.length<ve.length){let tt=ve.filter(Dt=>!Jt.includes(Dt)&&Ep(p,Dt,P,Ge)==="to");tt.length&&(Je.to=tt,gr=[...new Set(tt.map(Dt=>Dt.fam))].sort(F).join(", "))}let A_=tt=>{if(tt==="all")return __t(315);let Dt=re=>(re.find(fn=>fn.fam)||{}).fam;if(tt==="to")return __t(316)+Ei(N==="Barcelona"?"Barcelona":T[P].n,Dt(Je.to)||[...k][0])+(()=>{let re=H&&!gr?[...k].filter(fn=>Je.to.some(di=>di.fam===fn)).sort(F):[];return re.length?`<span class="hwf" title="${__t(317)}">${re.map(Cn).join("")}</span>`:""})();let $t=[];for(let re of Je[tt])$t.some(fn=>fn[0]===re.dest)||$t.push([re.dest,re.fam]);return $t.length?__t(316)+$t.slice(0,2).map(([re,fn])=>Ei(re,fn)).join(" "):__t(318)},Qi=cn.get(o.key);Qi&&!ve.some(tt=>String(tt.num)===Qi&&!tt.gone)&&(Dn.num=Qi,Dn.until=Date.now()+90*6e4,ui(o.key,null));let Yr=tt=>{let Dt=Qi&&Je[tt].find(pn=>String(pn.num)===Qi&&!pn.gone);if(Dt&&Dt.cancel)return{cls:"v-miss",pin:1,x:Dt,big:__t(319),small:`${nt(Dt.est)} \xB7 ${Dt.fam}${__t(320)}${Dt.dest}${Dt.num?" \xB7 "+__t(302)+Dt.num:""}`,warn:""};let $t=Dt||Je[tt].find(pn=>!pn.cancel&&!pn.gone&&pn.est-c.min>=ke);if(!$t){let pn=Je[tt].find(_r=>!_r.cancel);return pn&&!at?{cls:"v-miss",big:__t(321),small:`${__t(322)}${nt(pn.est)}${__t(323)}${ur(pn.est-c.min)}${__t(324)}`}:{cls:"v-no",big:__t(325),small:__t(326)}}let re=$t.est-c.min-ke,fn=at||rt?"v-info":J?re<1.5?"v-warn":"v-ok":re<1.5?"v-bad":re<5?"v-warn":"v-ok",di=$t.ghost?Je[tt].find(pn=>!pn.cancel&&!pn.ghost&&pn.live&&pn.est>$t.est):null;if(Dt&&re<0&&!at&&!rt){let pn=Je[tt].find(_r=>!_r.cancel&&!_r.gone&&!_r.ghost&&_r!==$t&&_r.est-c.min>=ke);return{cls:"v-miss",pin:1,miss:1,nxt:pn,x:$t,ghost:!!$t.ghost,big:__t(327),small:`${nt($t.est)} \xB7 ${$t.fam}${__t(320)}${$t.dest}${$t.plat?__t(140)+$t.plat:""}${$t.num?" \xB7 "+__t(302)+$t.num:""}`,warn:pn?`\u27A1\uFE0F ${__t(328)}: ${pn.est-c.min-ke<1?__t(329):__t(330)+" "+ur(pn.est-c.min-ke)} \xB7 ${nt(pn.est)}${pn.arr!=null?" \u2192 "+nt(pn.arr):""}${pn.plat?__t(140)+pn.plat:""}${pn.num?" \xB7 "+__t(302)+pn.num:""}`:""}}return{pin:Dt?1:0,cls:fn,ghost:!!$t.ghost,soft:!$t.live&&!$t.ghost&&!$t.unconf&&!$t.cancel?$t.rodLive?__t(331):__t(332):"",big:at||rt?re<1?__t(333):__t(334)+ur(re):J?re<1.5?__t(335):__t(336)+ur(re)+__t(337):re<1.5?__t(338):__t(339)+ur(re),warn:$t.unconf?"\u26A0\uFE0F "+__t(340):Dt&&!$t.live&&$t.rodLive&&!$t.ghost||!$t.ghost&&$t.noPos&&Dt?"":!$t.ghost&&$t.late&&Dt?__t(341):$t.ghost?`\u26A0\uFE0F ${__t(342)}${di?`${__t(343)}${nt(di.est)}`:""}`:Ie?__t(344):"",small:`${$t.bus?__t(345):""}${nt($t.est)} \xB7 ${$t.fam}${__t(320)}${$t.dest}${$t.plat?__t(140)+$t.plat:""}${$t.dl>=1?` \xB7 +${Math.round($t.dl)} min`:""}${$t.arr!=null?`${__t(346)}${nt($t.arr)}`:""}${$t.num?" \xB7 "+__t(302)+$t.num:""}`,x:$t}},C_=Ge||new Set([P]),R_=tt=>{let Dt=tt.tr;if(!Dt)return null;let $t=Dt.pat.stops,re=$t.indexOf(p);if(re<0)return null;let fn=-1;for(let di=re+1;di<$t.length;di++)if(C_.has($t[di])){fn=di;break}return fn<0?null:tt.est+(Dt.pat.t[2*fn]-Dt.pat.t[2*re+1])};Je.to.forEach(tt=>{tt.arr=R_(tt)});let Jl=Je.out.length?"out":"otros",je=Yr("to"),ho=Yr(Jl);if(rt||o===It&&It.acc<=40&&(It.dist[o.st[o.i]]||9)<.08){for(let tt of[je.x,ho.x].concat(o===It?[Yr("all").x]:[]))if(tt&&cn.has(o.key)&&String(cn.get(o.key))===String(tt.num)&&!tt.cancel&&tt.est-c.min<=2&&tt.est-c.min>-.5){let Dt="w"+tt.num+"|"+Math.round(tt.sm);$p.has(Dt)||($p.add(Dt),Fl(`${__t(347)}${tt.fam}${__t(320)}${tt.dest}`,`${Math.round(tt.est-c.min)<=1?__t(348):__t(349)+Math.round(tt.est-c.min)+" min"}${__t(320)}${T[p].n}${tt.plat?__t(140)+tt.plat:""}`))}}let nm=E()&&c.live,im=k.size===1,I_=tt=>{let Dt=tt.est-c.min;return at?tt.cancel?"cx":Dt<0?"u-miss":"u-info":tt.cancel?"cx":Dt<ke?"u-miss":Dt<ke+1.5?"u-now":Dt<ke+5?"u-soon":"u-ok"},P_=tt=>{if(tt.gone)return`<li class="hr u-gone${tt.live?" on":""}${Za(tt)?" sel":""} go" data-dk="${f.push(tt)-1}" title="Ya ha salido: toca para ver d\xF3nde va"><span class="hrt"><b>${nt(tt.est)}${__t(350)}${ps(Math.max(1,Math.round(c.min-tt.est))+" min")}</small></span><span class="hrd">${Ei((im?"":tt.fam+" \xB7 ")+tt.dest,tt.fam)}${__t(351)}${m(tt.num)}</small></span><span class="hrm">${tt.dl>=1?`<em class="dl ${Di(tt.dl)}">+${Math.round(tt.dl)}</em>`:""}</span></li>`;let Dt=!tt.cancel&&tt.est-c.min<ke,$t=Du(tt.num,"");return`<li class="hr ${I_(tt)}${tt.live?" on":""}${tt.ghost?" gh":""}${Za(tt)?" sel":""}${Qi&&String(tt.num)===Qi?" pin":""}${Ni.some(re=>{let fn=Pu(re,t.days.indexOf(c.ymd));return fn&&String(fn.num)===String(tt.num)})?" fav":""} go" style="--lc:${X[tt.fam]||"#6b7385"}" data-dk="${f.push(tt)-1}" title="${tt.cancel?__t(319):Dt?__t(327):__t(352)}"><span class="hrt"><b>${tt.cancel?"\u2715":Dt?nt(tt.est):ur(tt.est-c.min)}</b><small>${tt.cancel?__t(353):tt.late?__t(354):Dt?__t(355):tt.ghost?__t(356):nt(tt.est)}</small></span><span class="hrd">${tt.bus?'<i class="bus" title="Autob\xFAs que sustituye al tren por obras">\u{1F68C}</i>':""}${Ei((im?"":tt.fam+" \xB7 ")+tt.dest,tt.fam)}${$t.length?`<i class="cr" title="${m($t.map(re=>kl(re.kind)).join(" \xB7 "))}">${$t.slice(0,2).map(re=>Bl[re.kind]).join("")}</i>`:""}${tt.arr!=null?`${__t(357)}${nt(tt.arr)}${tt.num?" \xB7 "+__t(302)+m(tt.num):""}${(()=>{let re=tt.num&&Ru(tt.num);return re&&re.n>=3&&re.late/re.n>=.5?`${__t(358)}${re.late}/${re.n})</b>`:""})()}</small>`:""}${tt.obs?`<small class="hro">${m(tt.obs)}</small>`:""}${tt.unconf?`<small class="hro unc">${__t(359)}</small>`:""}</span><span class="hrm">${!tt.cancel&&tt.dl>=1?`<em class="dl ${Di(tt.dl)}">+${Math.round(tt.dl)}</em>`:""}${tt.plat?`${__t(228)}${m(tt.plat)}</i>`:""}</span></li>`},uo=(tt,Dt,$t)=>`<div class="hcol"><div class="hdir">${A_(tt)}${$t?`<button type="button" class="hhide" data-hhide="${o.key}:${$t}" title="${__t(360)}">\u2715</button>`:""}</div><div class="hv ${Dt.cls}${Dt.ghost||Dt.pin&&Dt.x&&Dt.x.noPos&&!eo([Dt.x.fam]).length?" gh":""}${Dt.x?" go":""}"${Dt.miss&&Dt.nxt&&Dt.nxt.num?` data-pinnext="${o.key}:${m(Dt.nxt.num)}" title="${__t(361)}"`:Dt.x?` data-dk="${f.push(Dt.x)-1}"`:""}><b>${Dt.big}</b>${Dt.pin?`<button type="button" class="hunpin" data-unpin="${o.key}" title="${__t(362)}">\u{1F4CC} ${__t(363)} \u2715</button>`:""}<small>${m(Dt.small)}${Dt.soft?` \xB7 <span class="hsoft" title="${__t(364)}">\u{1F4E1} ${m(Dt.soft)}</span>`:""}</small>${Dt.pin&&Dt.x&&Dt.x.num?(re=>re?`<span class="hwhere">\u{1F4CD} ${m(re)}</span>`:"")(Wl(Dt.x.num)):""}${Dt.warn?`<span class="hvw">${m(Dt.warn)}</span>`:""}</div><ol>${Je[tt].slice(0,(o.more?tt==="all"||o.hide?20:10:tt==="all"?7:o.hide?8:4)+Je[tt].filter(re=>re.gone).length).map(P_).join("")||"<li><span>\u2014</span></li>"}</ol></div>`;if(o===It){let tt=Yr("all");var L_=tt.x?`<span class="nw">${tt.big}</span> \xB7 <span class="nw"><b>${nt(tt.x.est)}</b> ${m(tt.x.fam)}${__t(365)}${m(tt.x.dest)}${tt.x.plat?'<span class="nw">'+__t(140)+m(tt.x.plat)+"</span>":""}`:tt.big}let en=xn&&je.x&&je.x.arr!=null?r_(xn.T,je.x.arr,xn.fin):null;if(en){let tt=o._xc;tt&&tt.leg===String(je.x.num)&&tt.conn!==String(en.c.num)&&tt.est<en.c.est&&tt.live?(en.lost=!0,en.missed=tt.est):(!tt||tt.leg!==String(je.x.num)||!tt.live||tt.conn===String(en.c.num))&&(o._xc={leg:String(je.x.num),conn:String(en.c.num),est:en.c.est,live:!!(V.delays&&Date.now()-(o._xt||(o._xt=Date.now()))>3e4)})}en&&(Vl.set(T[xn.T].id,{fam:en.c.fam,est:en.c.est,plat:en.c.plat,lost:en.lost}),en.lost&&cn.get(o.key)===String(je.x.num)&&o_("xf"+je.x.num+"|"+en.c.num,`\u21C4 ${__t(366)} ${T[xn.T].n}`,`${__t(367)}: ${en.c.fam} ${nt(en.c.est)} \u2192 ${nt(en.fin)}${en.c.plat?" \xB7 v\xEDa "+en.c.plat:""}`));let nd=en?`<br><span class="nw hxf ${en.lost?"xbad":en.m<4?"xwarn":"xok"}">\u21C4 ${en.lost?`${__t(368)} ${nt(en.missed)} \xB7 ${__t(142)} `:`${m(T[xn.T].n)} \xB7 `}${Cn(en.c.fam)} <b>${nt(en.c.est)}</b> \u2192 <b>${nt(en.fin)}</b>${en.lost?"":` \xB7 ${Math.floor(en.m)} ${__t(369)}`}</span>`:xn?`<br><span class="nw hxf xbad">\u21C4 ${__t(370)} ${m(T[xn.T].n)}</span>`:"",D_=o===It?L_:xn&&je.x?`<span class="nw">${je.big}${je.x.plat?__t(140)+m(je.x.plat):""}</span> \xB7 <span class="nw"><b>${nt(je.x.est)}</b>${je.x.arr!=null?` \u2192 ${m(T[xn.T].n)} <b>${nt(je.x.arr)}</b>`:""}</span>${nd}`:je.x?`<span class="nw">${je.big}${je.x.plat?__t(140)+m(je.x.plat):""}</span> \xB7 <span class="nw"><b>${nt(je.x.est)}</b>${je.x.arr!=null?`${__t(372)}${nt(je.x.arr)}</b>`:""}${__t(371)}${m(N)}</span>`:__t(373)+m(N),We=o===It?(tt=>tt.pin?tt:null)(Yr("all")):je.pin?je:ho.pin?ho:null;We&&We.x&&cn.has(o.key)&&Hp(We,T[p].n);let N_=We?o===It?"all":We===je?"to":Jl:"",Zr=!!(We&&(We.ghost||We.x.noPos&&!eo([We.x.fam]).length||We.x.cancel)),id=!!(We&&We.miss),Jr=Zr?Je[N_].find(tt=>!tt.cancel&&!tt.ghost&&!tt.gone&&tt.est>We.x.est-.01&&tt!==We.x&&tt.est-c.min>=(at||rt?0:ke)):null,U_=id?`<span class="nw">${__t(374)} <b>${nt(We.x.est)}</b></span>${We.nxt?`<br><span class="nw hnx">${__t(367)} <b>${nt(We.nxt.est)}</b>${We.nxt.arr!=null?` \u2192 <b>${nt(We.nxt.arr)}</b>`:""}</span>`:""}`:"",F_=Zr?`<span class="nw">\u26A0\uFE0F ${We.x.cancel?__t(319):We.ghost?__t(375):__t(376)}</span>${We.x.cancel?"":` \xB7 <span class="nw"><b>${nt(We.x.est)}</b>${We.x.arr!=null?` \u2192 <b>${nt(We.x.arr)}</b>`:""}</span>`}${Jr?` \xB7 <span class="nw">${__t(142)} <b>${nt(Jr.est)}</b>${Jr.arr!=null?` \u2192 <b>${nt(Jr.arr)}</b>`:""}${Jr.plat?__t(140)+m(Jr.plat):""}</span>`:""}`:"";return`<div class="hplace ${o.open?"open":""}${We?" pinned":""}${Zr?" pgh":""}"><button type="button" class="hhead" data-ht="${o.key}"><span class="hico">${o.ico}</span><span class="htit"><b>${m(T[p].n)}${We&&We.x.num?`<i class="hpn">\u{1F4CC} ${m(We.x.num)}</i>`:""}</b>${o.open?xn&&nd?`<small class="nofit">${nd.replace(/^<br>/,"")}</small>`:"":`<small class="c${id||Zr&&We.x.cancel?"bad":Zr?"warn":Ie?"bad":je.cls.slice(2)}">${Zr?F_:id?U_:D_}</small>${We&&We.x&&We.x.num?(tt=>tt?`<small class="nofit hwh2">\u{1F4CD} ${m(tt)}</small>`:"")(Wl(We.x.num)):""}`}${o.open?"":(tt=>{if(!tt||tt.num==null)return"";let Dt=t.days.indexOf(c.ymd),$t=tt.tr,re=$t?$t.t0+$t.pat.t[1]-($t.day===Dt-1?1440:$t.day===Dt+1?-1440:0)+(tt.dl||0):null,fn=!tt.live&&!tt.ghost&&!tt.unconf&&re!=null&&re>c.min-1,di=tt.cancel?["bad",__t(319)]:tt.live?["ok",__t(377)]:fn?["wait",__t(378)]:["warn",__t(375)];return`<small class="nofit hrel ${di[0]}"><b>${di[1]}</b></small>`})(We&&We.x||je.x)}</span><span class="hchev">\u25BE</span></button>`+(o.open?`
      <div class="hbody${o===It||o.hide==="out"||o.hide==="to"?" r1":""}">
        ${o===It?`<div class="hwalk">\u{1F4CD} A ${(()=>{let tt=It.dist[o.st[o.i]]||0;return tt<1?Math.round(tt*100)*10+" m":tt.toFixed(1).replace(".",",")+" km"})()}${__t(380)}${o.walk}${__t(381)}`:""}
        ${B?`<div class="hwalk away">${__t(383)}<a data-hplat="${o.key}${__t(382)}`:rt&&!Et.tid?`${__t(384)}${o.key}${__t(385)}`:J?`${__t(386)}${Math.round(le)} min</b>${C&&b<=3?__t(387):""} \xB7 <a data-hgo="${o.key}:0">${__t(388)}</a></div>`:""}${at&&o!==It?`${__t(389)}${b<10?b.toFixed(1).replace(".",","):Math.round(b)}${__t(390)}`:""}${at?`<div class="hwalk hgw">${Lp(o)}</div>`:""}<div class="hwalk"${at?" hidden":""}>${(()=>{let tt=Qi||(()=>{let re=(Je.to.length?Je.to:Jt).filter(fn=>fn.num!=null&&!fn.cancel&&fn.est>=c.min-4&&fn.est<=c.min+1).sort((fn,di)=>Math.abs(fn.est-c.min)-Math.abs(di.est-c.min));return re[0]?re[0].num:je&&je.x&&je.x.num})(),Dt=tt!=null?ve.find(re=>String(re.num)===String(tt)):null,$t=Ou(Dt,c);return(tt!=null&&!Et.tid?`<button type="button" class="hgo hboard${$t?"":" off"}" data-hboard="${m(String(tt))}"${$t?"":` data-hbwhen="${Dt?nt(Dt.est):""}"`}>\u{1F686} ${$t&&tt?`${__t(391)} ${m(String(tt))}`:__t(392)}</button>`:"")+(Qi?`<button type="button" class="hgo hmap" data-chmap="${m(String(Qi))}" title="${__t(393)}">\u{1F5FA}\uFE0F ${__t(394)}</button>`:"")})()}${rt||Et.tid?"":`<button type="button" class="hgo hplat" data-hplat="${o.key}:1">${__t(395)}</button>`}${Lp(o)}</div>
        <div class="hcfgp"${o._cfg?"":" hidden"}><div class="hcl">${__t(396)}</div><div class="hst">${o.st.map((tt,Dt)=>{let $t=Wt.get(tt);return $t==null?"":`<button type="button" data-hs="${o.key}:${Dt}" class="${Dt===o.i?"on":""}">${m(T[$t].n.replace(/^Barcelona[ -]+(?=\S)/,"")||T[$t].n)}${Dt===o.i?" \u2713":""}</button>`}).join("")}</div>${o!==It?`<div class="hcl">${__t(397)}</div><div class="hstep2"><button type="button" data-hw="${o.key}:-1" aria-label="\u2212">\u2212</button><b>${o.walk} min</b><button type="button" data-hw="${o.key}:1" aria-label="+">+</button></div>`:""}<a class="hcfgmap" data-hcfgmap="${p}">\u2139\uFE0F ${__t(398)}</a></div>
        ${(()=>{let tt=Ni.filter(Dt=>o.st.includes(Dt.sid));return tt.length?`<div class="hfav">${tt.map(Dt=>{let $t=Pu(Dt,t.days.indexOf(c.ymd)),re=$t&&Jt.find(fn=>String(fn.num)===String($t.num));return`\u2B50 <b>${Dt.t}</b> ${m(Dt.fam)} ${re?re.cancel?__t(399):re.gone?__t(225):re.dl>=1?`<em class="dl ${Di(re.dl)}">+${Math.round(re.dl)}${__t(400)}${nt(re.est)}`:__t(401):__t(402)}`}).join("<br>")}</div>`:""})()}
        ${H&&gr?`${__t(403)}${[...k].sort(F).map(Cn).join(" ")}${__t(404)}${N}${__t(405)}${gr}${__t(406)}`:x?`${__t(407)}${[...ut].sort(F).slice(0,3).map(Cn).join(" ")}${__t(408)}`:""}
        ${Ee.length?`<div class="hal ${Ie?"bad":""}${Zu.v?" open":""}" data-halx>\u26A0\uFE0F ${Ka(Ee[0])} ${m(Ee[0].txt)} <small>${Qa(Ee[0])}</small>${Ee.length>1?` <a data-hal>+${Ee.length-1}${__t(409)}`:""}</div>`:`${__t(410)}${[...k].sort(F).join(", ")}</div>`}
        ${(()=>{let tt=o.st.flatMap(Dt=>Du("",Dt));return tt.length?`<div class="hcr">${tt.slice(0,3).map(Dt=>`${Bl[Dt.kind]} <b>${m(kl(Dt.kind))}</b> <small>${Dt.up>1?Dt.up+__t(269):""}${dp(Dt)}</small>`).join("<br>")}</div>`:""})()}
        ${o===It?`<div class="hcols one">${uo("all",Yr("all"))}</div>`:o.hide==="out"?`<div class="hcols one">${uo("to",je)}</div><a class="hshow" data-hshow="${o.key}${__t(411)}`:o.hide==="to"?`<div class="hcols one">${uo(Jl,ho)}</div><a class="hshow" data-hshow="${o.key}${__t(411)}`:`<div class="hcols">${uo("to",je,"to")}${uo(Jl,ho,"out")}</div>`}
        ${xn?a_(o,xn,je,en,c):""}
        ${Jt.length>(o===It?7:8)?`<button type="button" class="hmore" data-hmore="${o.key}">${o.more?__t(412):__t(413)}</button>`:""}
        <div class="hsrc"><span class="hsrcT" hidden title="${nm?Ot.get(T[p].id)?.d?__t(414):__t(415):__t(416)} \xB7 \u25CF = ${__t(417)}">${nm?Ot.get(T[p].id)?.d?__t(418):__t(419):__t(224)}</span><a data-hmap="${p}${__t(379)}${o===It?__t(420):`<a data-hset="${o.key}${__t(421)}`}${o===He?`${__t(422)}`:""}</div>
      </div>`:"")+"</div>"}let Vu={v:(()=>{try{return localStorage.getItem("rod_cfgseen")==="1"}catch{return!1}})()},c_='<span class="ico" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M19.42 10.34 L21.90 10.60 L21.90 13.40 L19.42 13.66 L18.42 16.07 L19.99 18.02 L18.02 19.99 L16.07 18.42 L13.66 19.42 L13.40 21.90 L10.60 21.90 L10.34 19.42 L7.93 18.42 L5.98 19.99 L4.01 18.02 L5.58 16.07 L4.58 13.66 L2.10 13.40 L2.10 10.60 L4.58 10.34 L5.58 7.93 L4.01 5.98 L5.98 4.01 L7.93 5.58 L10.34 4.58 L10.60 2.10 L13.40 2.10 L13.66 4.58 L16.07 5.58 L18.02 4.01 L19.99 5.98 L18.42 7.93Z"/><circle cx="12" cy="12" r="3"/></svg></span>',Lp=o=>`<button type="button" class="hgo hcfg${o._cfg?" on":""}${Vu.v?"":" new"}" data-hcfg="${o.key}" title="${__t(423)}" aria-label="${__t(423)}">${c_}</button>`,Fi={on:(()=>{try{return localStorage.getItem("rod_push")==="1"}catch{return!1}})(),busy:!1},Dp=/iPhone|iPad|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,Np=()=>matchMedia("(display-mode: standalone)").matches||navigator.standalone===!0,dr=new Set((()=>{try{return JSON.parse(localStorage.getItem("rod_aloff")||"[]")}catch{return[]}})()),Hl=()=>{let o=new Set;return[...Qe.st,...He.st].forEach(c=>{let f=Wt.get(c);f!=null&&T[f].fams.forEach(p=>o.add(p))}),[...o].sort(F)},ao=()=>({stations:[...Qe.st,...He.st],lines:Hl().filter(o=>!dr.has(o))}),h_=o=>Uint8Array.from(atob(o.replace(/-/g,"+").replace(/_/g,"/")+"===".slice((o.length+3)%4)),c=>c.charCodeAt(0));async function Up(){return!("serviceWorker"in navigator)||!("PushManager"in window)||location.protocol!=="https:"?null:await navigator.serviceWorker.getRegistration()||navigator.serviceWorker.register("./sw.js")}async function Fp(o){let f=await(await fetch(ce()+"/push/subscribe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sub:o.toJSON(),...ao()})})).json();if(!f.ok)throw new Error(f.err||"error")}function Hu(){let o=Rn(Qe),c=Rn(He);if(o==null||c==null)return o!=null?Qe:c!=null?He:null;if(It.w&&Date.now()-It.fix<3*36e5){let f=p=>Math.hypot(T[p].w[0]-It.w[0],T[p].w[1]-It.w[1]);return f(o)<=f(c)?Qe:He}return new Date().getHours()<13?Qe:He}function Op(o){let c=Hu(),f=c===Qe?He:Qe,p=c&&Rn(c),y=f&&Rn(f);if(p==null||y==null)return!0;let M=(o.es||"")+" "+(o.txt||""),P=t.days.indexOf(ee().ymd),N=ee(),D=[...new Set([...M.matchAll(/\btr(?:en|ain)s?\s*(?:n[º°o.]\s*)?(\d{4,6})\b/gi)].map(H=>H[1]))];if(D.length)return D.some(H=>{let x=bs(H);if(!x)return!1;let b=x.pat.stops,C=b.indexOf(p),B=b.indexOf(y);if(C<0||B<0||C>B)return!1;let at=x.t0+x.pat.t[2*C+1];return at>N.min-60&&at<N.min+150});let k=M.match(/(?:destino|destinaci[óo]|direcci[óo]n?|sentido|sentit|cap a|hacia)\s+(?:a\s+|de\s+)?([^.,;:()]{3,40})/i);if(k){let H=k[1].toLowerCase(),x=T.findIndex(b=>b.n&&H.startsWith(b.n.toLowerCase()));if(x>=0){let b=(et[P]||[]).find(C=>{let B=C.pat.stops;return B[B.length-1]===x&&B.includes(p)&&B.includes(y)});if(b){let C=b.pat.stops;return C.indexOf(p)<C.indexOf(y)}}}return!0}let Zn={on:(()=>{try{return localStorage.getItem("rod_ln")==="1"}catch{return!1}})(),seen:null};function u_(){let{lines:o,stations:c}=ao(),f=new Set(o),p=new Set(c.map(P=>Wt.get(P))),y=V.alerts.filter(P=>([...P.fams].some(N=>f.has(N))||[...P.stops||[]].some(N=>p.has(N)))&&Op(P));if(!Zn.seen){try{Zn.seen=new Set(JSON.parse(localStorage.getItem("rod_lnseen")||"[]"))}catch{Zn.seen=new Set}if(!Zn.seen.size){y.forEach(P=>Zn.seen.add(P.id+"|"+P.txt.length)),Bp();return}}let M=y.filter(P=>!Zn.seen.has(P.id+"|"+P.txt.length));if(M.length&&(M.forEach(P=>Zn.seen.add(P.id+"|"+P.txt.length)),Bp(),!(!Zn.on||!("Notification"in window)||Notification.permission!=="granted")))for(let P of M.slice(0,3)){let N=(P.src==="Adif"?__t(280):"Rodalies")+(P.fams.size?" \xB7 "+[...P.fams].sort(F).slice(0,4).join(" "):""),D={body:P.txt.slice(0,240),icon:"icons/icon-192.png",tag:"rod-"+P.id};(navigator.serviceWorker&&navigator.serviceWorker.getRegistration?navigator.serviceWorker.getRegistration():Promise.resolve(null)).then(k=>k?k.showNotification(N,D):new Notification(N,D)).catch(()=>{try{new Notification(N,D)}catch{}})}}function Bp(){try{localStorage.setItem("rod_lnseen",JSON.stringify([...Zn.seen].slice(-400)))}catch{}}async function d_(){if(Zn.on)Zn.on=!1,Ke(__t(424));else{if(!("Notification"in window)){Ke(Dp&&!Np()?__t(425):__t(426));return}if(await Notification.requestPermission()!=="granted"){Ke(__t(427));return}Zn.on=!0,Ke(__t(428)+ao().lines.join(", ")+__t(429))}try{localStorage.setItem("rod_ln",Zn.on?"1":"")}catch{}we(!0)}async function f_(){if(!V.repOk||document.documentElement.classList.contains("cap"))return d_();if(!Fi.busy){Fi.busy=!0;try{let o=await Up();if(!o){Ke(Dp&&!Np()?__t(430):__t(431));return}if(await navigator.serviceWorker.ready,Fi.on){let c=await o.pushManager.getSubscription();c&&(fetch(ce()+"/push/unsubscribe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({endpoint:c.endpoint})}).catch(()=>{}),await c.unsubscribe().catch(()=>{})),Fi.on=!1,Ke(__t(424))}else{if(!V.url){Ke(__t(432));return}if(await Notification.requestPermission()!=="granted"){Ke(__t(427));return}let f=(await Pt(ce(),"/push/key")).key,p=await o.pushManager.getSubscription()||await o.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:h_(f)});await Fp(p),Fi.on=!0,Ke(__t(433)+ao().lines.join(", "))}try{localStorage.setItem("rod_push",Fi.on?"1":"")}catch{}}catch(o){Ke(__t(434)+(o.message||o))}finally{Fi.busy=!1,we(!0)}}}async function kp(){if(Fi.on)try{let o=await Up(),c=o&&await o.pushManager.getSubscription();c&&await Fp(c)}catch{}}let Gu=!1,zp="";function Wu(){let o=Mt?"t"+(Mt.tid||Mt.vtid):me>=0?"s"+me:_e?"a":Ft?"n":"";o!==zp&&(Gu=!1,zp=o);let c=innerWidth<=640&&!!o&&!Gu&&!document.documentElement.classList.contains("tabmode"),f=_("#inf");f.classList.contains("compact")!==c&&(f.classList.toggle("compact",c),requestAnimationFrame(()=>{if(d.style.display!=="none"){let p=f.getBoundingClientRect().bottom;d.style.top=Math.round(p+8)+"px",d.style.maxHeight=Math.max(140,_("#rc").getBoundingClientRect().top-p-16)+"px"}}))}let $p=new Set,Xu=(()=>{let o=yt(new Date).ymd;try{let c=JSON.parse(localStorage.getItem("rod_pn")||"{}");return c.d===o?c:{d:o}}catch{return{d:o}}})();function Vp(o,c,f){if(!(!(Zn.on||Fi.on)||!("Notification"in window)||Notification.permission!=="granted")){if(!document.hidden){Ke(o+" \xB7 "+c);return}(navigator.serviceWorker&&navigator.serviceWorker.getRegistration?navigator.serviceWorker.getRegistration():Promise.resolve(null)).then(p=>p?p.showNotification(o,{body:c,tag:f,icon:"icons/andana-192.png"}):new Notification(o,{body:c})).catch(()=>{try{new Notification(o,{body:c})}catch{}})}}function Hp(o,c){let f=o.x,p=ee();if(!p.live||f.gone||f.est<p.min-1)return;let y=f.num+"|"+Math.round(f.sm),M=Xu[y]||{},P=`${__t(435)} ${nt(f.sm)}`,N=`${f.fam} \u2192 ${f.dest}`,D="",k="";f.cancel?M.c||(M.c=1,D=`\u26A0\uFE0F ${P} ${__t(148)}`,k=`${N}. ${__t(436)}`):o.ghost&&!M.g?(M.g=1,D=`\u26A0\uFE0F ${P} ${__t(437)}`,k=`${N}: ${__t(438)}`):f.dl>=5&&f.dl>=(M.dl||0)+5?(M.dl=Math.round(f.dl),D=`\u23F3 ${P} ${__t(439)} +${M.dl} min`,k=`${N}: ${__t(440)} ${c} ${__t(441)} ${nt(f.est)}.`):f.plat&&M.p&&M.p!==String(f.plat)&&(D=`${__t(442)}: ${P}`,k=`${N}: ${__t(443)} ${f.plat} ${__t(444)} ${M.p}).`),f.plat&&(M.p=String(f.plat)),Xu[y]=M;try{localStorage.setItem("rod_pn",JSON.stringify(Xu))}catch{}D&&Vp(D,k,"pin-"+f.num)}let Gr={open:!1,seen:new Set((()=>{try{return JSON.parse(localStorage.getItem("rod_seen")||"[]")}catch{return[]}})())};document.addEventListener("click",o=>{let c=o.target.closest&&o.target.closest("[data-nowx]");if(!c||o.target.closest("a"))return;let f=c.dataset.nowx?c.dataset.nowx.split("|"):[];if(f.length){if(c.classList.contains("col"))Gr.open=!0;else{Gr.open=!1,f.forEach(p=>Gr.seen.add(p));try{localStorage.setItem("rod_seen",JSON.stringify([...Gr.seen].slice(-200)))}catch{}}we(!0)}});function p_(o){let c=o.lines;if(!c.length&&It.st&&It.st.length){let x=new Set;It.st.forEach(b=>{let C=Wt.get(b);C!=null&&T[C].fams.forEach(B=>x.add(B))}),c=[...x].sort(F)}let f=new Set(c),p=V.alerts.filter(x=>!f.size||[...x.fams].some(b=>f.has(b))),y=`<a class="hwa" href="https://www.whatsapp.com/channel/0029Vav4hGTId7nPenKMuo2C" target="_blank" rel="noopener" title="${__t(131)}" aria-label="WhatsApp"><svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path fill="#25d366" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2z"/><path fill="#fff" d="M8.6 7.2c.2-.4.4-.4.7-.4h.5c.2 0 .4 0 .6.5l.8 1.9c.1.2.1.4 0 .6l-.5.7c-.1.2-.2.3 0 .6.5.8 1.1 1.5 1.9 2 .3.2.4.1.6 0l.7-.8c.2-.2.4-.2.6-.1l1.8.9c.3.1.4.2.4.4 0 .5-.2 1.2-.8 1.6-.6.4-1.5.6-2.9 0-1.6-.7-3-2-3.9-3.4-.8-1.2-1.1-2.4-.5-3.5z"/></svg></a>`,M=p.reduce((x,b)=>Math.max(x,ro(b)),0),P=M===3?"\u26D4 ":M===2?"\u26A0\uFE0F ":"\u2139\uFE0F ",N=`<div class="hnowh"><span class="hnowl"><b>${p.length?P+p.length+(p.length===1?__t(282):__t(283)):__t(445)}</b>${c.length?c.map(Cn).join(""):""}</span>${y}</div>`,D=p.filter(x=>!Gr.seen.has(x.id)),k=p.length&&(Gr.open||D.length>0),H=p.reduce((x,b)=>Math.max(x,ro(b)),0);return`<div class="hnow${H===3?" bad":H===2?" warn":H===1?" info":""}${p.length&&!k?" col":""}" data-nowx="${m(p.map(x=>x.id).join("|"))}">${N}${Xp(o,!0)}${k?p.slice().sort((x,b)=>ro(b)-ro(x)).map(x=>`<p class="sv${ro(x)}">${Ka(x)} ${m(x.txt)} <small>${Qa(x)}</small></p>`).join("")+`<small class="hnowt">${__t(446)}</small>`:""}</div>`}let cn=new Map((()=>{try{let o=yt(new Date).ymd;return JSON.parse(localStorage.getItem("rod_pin")||"[]").filter(c=>c[2]===o).map(c=>[c[0],c[1]])}catch{return[]}})());function Gl(){if(!document.documentElement.classList.contains("tabmode"))return;let o=[...document.querySelectorAll("#home .hhead .htit small:not(.nofit)")],c=(p,y)=>{p.style.fontSize=y===1?"":(p._f0*y).toFixed(1)+"px",p.querySelectorAll("b").forEach(M=>M.style.fontSize=y===1?"":(p._b0*y).toFixed(1)+"px")},f=1;for(let p of o){if(p.style.whiteSpace="",c(p,1),!p.clientWidth)continue;p._f0=parseFloat(getComputedStyle(p).fontSize);let y=p.querySelector("b");for(p._b0=y?parseFloat(getComputedStyle(y).fontSize):0;p.scrollWidth>p.clientWidth+1&&f>.86;)f-=.02,c(p,f)}if(f<1)for(let p of o)p._f0&&c(p,f);for(let p of o)p.scrollWidth>p.clientWidth+1&&(p.style.whiteSpace="normal")}addEventListener("resize",()=>{try{Gl()}catch{}});let Gp=(o,c)=>{let f=o==="work"?He:o==="near"?It:Qe,p=f&&Rn(f);return p==null?null:Yn(p).find(y=>String(y.num)===String(c))||null};function ui(o,c){if(c&&!cn.size&&!Et.tid)try{let f=+(localStorage.getItem("rod_lptip")||0);f<2&&(localStorage.setItem("rod_lptip",f+1),setTimeout(()=>Ke(__t(447)),600))}catch{}if(c){for(let f of[...cn.keys()])f!==o&&cn.delete(f);cn.set(o,c)}else cn.delete(o);try{let f=yt(new Date).ymd;localStorage.setItem("rod_pin",JSON.stringify([...cn].map(([p,y])=>[p,y,f])))}catch{}}let Wp=o=>{let c=o&&o.ts?Date.now()/1e3-o.ts:V.okVP?(Date.now()-V.okVP)/1e3:-1;return c>=0?" \xB7 "+ps(fu(Math.round(c))):""};function Wl(o){let c=ae.find(M=>M.tr&&String(M.tr.num)===String(o));if(!c){let M=bs(o),P=ee(),N=t.days.indexOf(P.ymd);if(!M)return"";let D=M.day===N-1?1440:0,k=M.t0+M.pat.t[1]-D;return k>P.min?__t(448)+T[M.pat.stops[0]].n+" ("+nt(k)+")":""}let f=c.tr,p=M=>T[f.pat.stops[M]].n;if(c.real){let M=c.v;return M.pre?__t(449):M.atStop>=0&&M.before?__t(450)+p(M.atStop):M.atStop>=0&&(M.st==="STOPPED_AT"||c.stop==="st")?Fe()?__t(451)+p(M.atStop):__t(452)+p(M.atStop)+Wp(M):!Fe()&&M.next>0?__t(453)+p(M.next-1)+__t(454)+p(M.next)+Wp(M):M.atStop>=0&&M.next>M.atStop?__t(455)+p(M.atStop)+__t(456)+p(M.next):M.atStop>=0?__t(457)+p(M.atStop):c.stop==="via"&&M.next>0?"\u23F8 "+__t(458)+p(M.next-1)+__t(454)+p(M.next):M.next>0?__t(185)+p(M.next-1)+__t(454)+p(M.next):M.next===0?__t(316)+p(0):""}let y=c.p&&c.p.next;return y>0?__t(459)+p(y-1)+__t(454)+p(y):""}let oo={k:"",v:null};function m_(o){let c=ee(),f=t.days.indexOf(c.ymd);if(f<0||!o.length)return null;let p=Hu(),y=(p&&Rn(p))??Rn(Qe)??Rn(He),M=c.ymd+o.join()+y;if(oo.k===M)return oo.v;oo.k=M;let P=new Set(o),N=y!=null?x=>et[x].filter(b=>{let C=b.pat.stops.indexOf(y);return C>=0&&C<b.pat.stops.length-1}).length:x=>et[x].filter(b=>P.has(b.fam)).length,D=x=>{let b=new Date(+x.slice(0,4),+x.slice(4,6)-1,+x.slice(6)).getDay();return b===0?0:b===6?6:1},k=N(f),H=Math.max(0,...t.days.map((x,b)=>b!==f&&D(x)===D(c.ymd)?N(b):0));return oo.v=H>=20&&k<H*.8?{n:k,ref:H,pct:Math.round(k/H*100),st:y!=null?T[y].n:""}:null,oo.v}function Xp(o,c){let f=o.lines||[],p=m_(f);if(!p)return"";let y=V.alerts.some(M=>[...M.fams].some(P=>f.includes(P))&&/huelga|vaga\b|servicios? m[ií]nimos|serveis m[ií]nims/i.test((M.es||"")+" "+M.txt));return c?`<div class="hnowred">\u{1F5D3}\uFE0F <b>${y?__t(460):__t(461)}</b>: ${p.st?`${__t(462)} ${m(p.st)} ${p.n} ${__t(463)} ${p.ref} ${__t(464)}`:`${__t(465)} ${p.n} ${__t(463)} ${p.ref} ${__t(464)}`} (${p.pct} %). ${y?__t(466):__t(467)}</div>`:`<div class="hred">\u{1F5D3}\uFE0F <b>${y?__t(468):__t(469)}</b> \xB7 ${__t(470)}: ${p.st?`${__t(471)} ${m(p.st)} ${__t(472)} ${p.n} ${__t(198)} ${p.ref} ${__t(71)}`:`${p.n} ${__t(198)} ${p.ref} ${__t(473)} ${f.join(", ")}`} (${p.pct} % ${__t(474)}).</div>`}function g_(o){let c=eo(o.lines||[]);if(!c.length)return"";let f=[Qe,He].some(p=>{let y=Rn(p),M=y!=null&&Ot.get(T[y].id);return M&&M.d&&Array.isArray(M.d.trains)&&!M.d.trains.length});return`<div class="hnopos">\u{1F4E1} <b>${__t(475)} ${c.join(", ")}</b> ${__t(476)}${f?" \xB7 "+__t(477):""}: ${__t(478)}</div>`}function __(o){if(!It.w)return[];let c=It.k||1;return ae.filter(f=>f.tr&&f.tr!==o&&f.p&&f.p.w&&Math.hypot(f.p.w[0]-It.w[0],f.p.w[1]-It.w[1])*c<3).sort((f,p)=>Math.hypot(f.p.w[0]-It.w[0],f.p.w[1]-It.w[1])-Math.hypot(p.p.w[0]-It.w[0],p.p.w[1]-It.w[1])).slice(0,2).map(f=>f.tr)}function x_(o){if(Et.tid)return"";let c=null,f=null;if(cn.size||(Nt&&Nt.num!=null&&(c=String(Nt.num)),!c))return"";let p=bs(c);if(!p)return"";let y=p.pat.stops,M=f?f==="work"?He:f==="near"?It:Qe:null,P=M?Rn(M):null,N=P!=null?Yn(P).find(rt=>String(rt.num)===c):null,D=M===Qe?He:M===He?Qe:null,k=D?Rn(D):null,H=P!=null?y.indexOf(P):-1,x=Se&&Se.num===c?y.indexOf(Wt.get(Se.sid)):-1;x<=H&&k!=null&&(x=y.indexOf(k,H+1));let b=N&&H>=0&&x>H?N.est+(p.pat.t[2*x]-p.pat.t[2*H+1]):null,C=N?Math.round(N.est-o.min):null,B=Wl(c),at=N?`${N.gone?__t(479):__t(480)} ${m(T[P].n)} \xB7 <b>${nt(N.est)}</b>${N.gone?"":` (${C<=0?__t(265):C+" min"})`}${N.plat?__t(140)+m(N.plat):""}${b!=null?` \u2192 ${m(T[y[x]].n)} <b>${nt(b)}</b>`:""}`:m(B||"");return`<div class="hplace onbc chosen"><div class="hhead"><span class="hico">\u{1F4CC}</span><span class="htit"><b>${Cn(p.fam)} ${__t(302)}${m(c)} <span class="hlk">${__t(481)}</span></b><small class="nofit">${at}</small>${N&&B?`<small class="nofit">\u{1F4CD} ${m(B)}</small>`:""}<span class="chbtn"><button type="button" class="hgo hboard" data-hboard="${m(c)}">\u{1F686} ${__t(392)}</button><button type="button" class="chmap" data-chmap="${m(c)}">\u{1F5FA}\uFE0F ${__t(393)}</button></span></span><button type="button" class="hpn onbx" data-unchoose="${m(c)}" aria-label="${__t(212)}">\u2715</button></div></div>`}function v_(o){let c;try{if(c=y_(o),c!=null)return c}catch(y){console.error(y)}let f=Et.tid?bs(Et.tid):null,p=f?`${__t(482)} ${m(T[f.pat.stops[0]].n)} \xB7 ${nt(f.t0)}`:"";return Et.tid?`<div class="hplace onbc"><div class="hhead"><span class="hico">\u{1F686}</span><span class="htit"><b>${__t(302)}${m(Et.tid)}${Et.lock?` <span class="hlk">${__t(483)}</span>`:""}</b>${p?`<small class="nofit">${p}</small>`:""}</span><button type="button" class="hpn onbx" data-onbx aria-label="Quitar">\u2715</button></div></div>`:""}function y_(o){if(!Et.tid)return"";[...cn].forEach(([rt,q])=>{String(q)!==String(Et.tid)&&ui(rt,null)});let c=ae.find(rt=>rt.tr&&String(rt.tr.num)===Et.tid)||R(o).out.find(rt=>rt.tr&&String(rt.tr.num)===Et.tid);if(!c)return null;let f=c.tr,p=f.pat.stops,y=c.real&&c.v&&c.v.next>=0?c.v.next:c.p&&c.p.next>=0?c.p.next:null;if(y==null){let rt=R(o).out.find(q=>q.tr&&String(q.tr.num)===Et.tid);y=rt&&rt.p&&rt.p.next>=0?rt.p.next:1}let M=mt(f),P=typeof M=="number"?Math.max(0,M/60):0,N=t.days.indexOf(o.ymd),D=f.day===N-1?1440:0,k=Et.fixes[Et.fixes.length-1],H=k&&Date.now()-k.t<9e4&&(k.acc==null||k.acc<150)?(()=>{let rt=-1,q=.35;return p.forEach((dt,J)=>{let le=Math.hypot(T[dt].w[0]-k.w[0],T[dt].w[1]-k.w[1])*k.k;le<q&&(q=le,rt=J)}),rt})():-1,x=Se&&Se.num===Et.tid?p.indexOf(Wt.get(Se.sid)):-1;if(x>0&&x<y&&H!==x&&!(H>=0&&H<x))return setTimeout(()=>{if(!Et.tid)return;let rt=Et.tid;Et.tid="",Et.lock=!1,Et.manual=0,Et.quiet=Date.now()+10*6e4,Nt&&String(Nt.num)===rt&&(Nt=null),[...cn].forEach(([q,dt])=>{String(dt)===rt&&ui(q,null)}),Dn.num===rt&&(Dn.num=""),we(!0)},0),"";x<y&&(x=p.length-1);let b=io(f,c.real?c.v:null,x,f.t0+f.pat.t[2*x]+P-D),C=b-o.min,B=c.real&&c.v.atStop>=0?c.v.atStop:-1,at=H>=0?`${__t(484)} ${T[p[H]].n}`:Wl(f.num)||__t(316)+T[p[y]].n;return`<div class="hplace onbc"><button type="button" class="hhead" data-onbgo><span class="hico">\u{1F686}</span><span class="htit"><b>${Cn(f.fam)} ${__t(302)}${m(f.num)}${Et.lock?` <span class="hlk">${__t(483)}</span>`:""}</b><small class="nofit cok">${m(at)} \xB7 <span class="nw">${__t(485)} ${m(T[p[x]].n)}</span> <span class="nw">${C>=1?__t(104)+ur(C)+" \xB7 ":""}<b>${nt(b)}</b>${P>=1?` <em class="dl ${Di(P)}">+${Math.round(P)}</em>`:""}</span></small></span><span class="hchev">\u203A</span></button><button type="button" class="hpn onbx" data-onbx aria-label="${__t(486)}" title="${__t(486)}">\u2715</button>${(rt=>rt.length&&!(Et.manual&&Date.now()<Et.manual)?`<div class="onbch">${rt.map(q=>`<button type="button" class="onbalt" data-onbpick="${m(q.num)}">${__t(487)} ${m(q.num)}?</button>`).join("")}</div>`:"")(__(f))}</div>`}let Xl={until:0};function qp(){let o=Et.tid;if(o){Et.no.set(o,Date.now()+20*6e4),Et.tid="",Et.manual=0,Et.lock=!1,Et.quiet=Date.now()+10*6e4,Dn.num===o&&(Dn.num=""),[...cn].forEach(([c,f])=>{String(f)===o&&ui(c,null)}),Se&&Se.num===o&&(Se=null,Ss(),window.__schedOff&&window.__schedOff(7701)),Nt&&String(Nt.num)===o&&(Nt=null),Mt&&String(Mt.num)===o&&(Mt=null,ze.sk=""),d._h="";try{Ue(),a()}catch{}we(!0)}}function Yp(o){if(o.hasAttribute("data-onbx")){qp();return}so(o.dataset.onbpick,"pick"),Ke(`${__t(488)} ${Et.tid}`),we(!0)}function we(o){let c=_("#home");if(!c)return;let f=performance.now();if(!o&&f-Tp<4e3||!o&&Xl.until>Date.now())return;Tp=f;let p=ee(),y=[],M=ao(),P=b=>{let C=Rn(b);return C==null||!It.w?1:Math.hypot(T[C].w[0]-It.w[0],T[C].w[1]-It.w[1])},N=[It,...[Qe,He].sort((b,C)=>P(b)-P(C))],D=(document.documentElement.classList.contains("tabmode")?p_(M):Xp(M))+g_(M)+v_(p)+x_(p)+N.map(b=>l_(b,p,y)).join("")+(zs.some(b=>b.open)&&M.lines.length,"");c.className=(zs.some(b=>b.open)?"open":"")+(Et.tid?" onb":"");let k=_("#bell");k||(k=document.createElement("button"),k.type="button",k.id="bell",k.onclick=f_,_("#inf .more").prepend(k));{let b=V.repOk&&!document.documentElement.classList.contains("cap")?Fi.on:Zn.on;k.hidden=!M.lines.length,k.className=b?"on":"",k.textContent=(b?__t(496):__t(497))+M.lines.join(", "),k.title=(b?__t(498):__t(499))+__t(67)+M.lines.join(", ")+(V.repOk?"":__t(500))}if(c._h===D)return;c._h=D,c.innerHTML=D,Gl(),c._onbDel||(c._onbDel=1,c.addEventListener("pointerdown",()=>{Xl.until=Date.now()+1500},!0),c.addEventListener("pointerup",()=>{Xl.until=Date.now()+400},!0),c.addEventListener("click",b=>{if(window.__lpAt&&Date.now()-window.__lpAt<1e3){b.stopPropagation(),b.preventDefault();return}let C=b.target.closest&&b.target.closest("[data-onbx],[data-onbpick]");C&&(b.stopPropagation(),Xl.until=0,Yp(C))},!0));{let b=c.querySelector("[data-onbgo]");b&&(b.onclick=C=>{if(C.target.closest("[data-onbx]")){qp();return}let B=C.target.closest("[data-onbpick]");if(B){Yp(B);return}let at=ae.find(rt=>rt.tr&&String(rt.tr.num)===Et.tid);at&&(Ft=_e=Ct=!1,me=-1,Mt=at.tr,d._h="",Ue())})}{let b=[...c.children].find(C=>C.classList.contains("hplace")&&!C.querySelector(".hnew"));b&&b.classList.add("lead")}let H=b=>b==="work"?He:b==="near"?It:Qe;c.querySelectorAll("[data-hloc]").forEach(b=>b.onclick=()=>{It.err="",Fu(!0)}),c.querySelectorAll("[data-ht]").forEach(b=>{let C=0,B=0,at=0,rt=()=>{clearTimeout(C),C=0,b.closest(".hplace")?.classList.remove("lpress")};b.addEventListener("pointerdown",q=>{let dt=b.dataset.ht,J=cn.get(dt);!J||String(Et.tid)===String(J)||(B=q.clientX,at=q.clientY,b.closest(".hplace")?.classList.add("lpress"),C=setTimeout(()=>{C=0,b.closest(".hplace")?.classList.remove("lpress"),b._lpDone=Date.now();let le=Gp(dt,J);if(!Ou(le,ee())){Bu(le?nt(le.est):"");return}let ve=so(J,"lock",dt);try{navigator.vibrate&&navigator.vibrate(35)}catch{}Ke(`${__t(488)} ${ve&&ve.tr.fam||""} ${J} \xB7 ${__t(483)}`),we(!0)},700))}),b.addEventListener("pointermove",q=>{C&&Math.hypot(q.clientX-B,q.clientY-at)>10&&rt()}),["pointerup","pointercancel","pointerleave"].forEach(q=>b.addEventListener(q,()=>{C&&rt()})),b.addEventListener("contextmenu",q=>q.preventDefault())}),c.querySelectorAll("[data-ht]").forEach(b=>b.onclick=()=>{if(b._lpDone&&Date.now()-b._lpDone<1500)return;if(_("#inf").classList.contains("compact")){Gu=!0,Wu();return}let C=H(b.dataset.ht);C.open=!C.open,hi(C),we(!0),(Mt||me>=0||_e||Ft)&&(d._h="",Ue())}),c.querySelectorAll("[data-hxf]").forEach(b=>b.onclick=C=>{C.stopPropagation();let[B,at]=b.dataset.hxf.split(":"),rt=H(B);rt.xfer=at||null,hi(rt),we(!0)});let x=b=>{clearTimeout(b._cfgT),b._cfgT=setTimeout(()=>{b._cfg=!1,we(!0)},1e4)};c.querySelectorAll("[data-hs]").forEach(b=>b.onclick=()=>{let[C,B]=b.dataset.hs.split(":"),at=H(C);x(at),at.i!==+B&&(at.i=+B,hi(at),we(!0))}),c.querySelectorAll("[data-hcfg]").forEach(b=>b.onclick=C=>{C.stopPropagation();let B=H(b.dataset.hcfg);if(B._cfg=!B._cfg,clearTimeout(B._cfgT),B._cfg&&x(B),!Vu.v){Vu.v=!0;try{localStorage.setItem("rod_cfgseen","1")}catch{}}we(!0)}),c.querySelectorAll("[data-hcfgmap]").forEach(b=>b.onclick=C=>{C.stopPropagation();let B=+b.dataset.hcfgmap;Ki("map"),window.__rodPickStation(B)}),c.querySelectorAll("[data-hwt]").forEach(b=>b.onclick=C=>{C.stopPropagation();let B=H(b.dataset.hwt);B._wedit=!B._wedit,clearTimeout(B._wT),B._wedit&&(B._wT=setTimeout(()=>{B._wedit=!1,we(!0)},6e3)),we(!0)}),c.querySelectorAll("[data-hw]").forEach(b=>b.addEventListener("click",()=>{let C=H(b.dataset.hw.split(":")[0]);C._cfg&&x(C)},!0)),c.querySelectorAll("[data-hw]").forEach(b=>b.onclick=()=>{let[C,B]=b.dataset.hw.split(":"),at=H(C);at.walk=S(at.walk+ +B,0,60),hi(at),we(!0)}),c.querySelectorAll("[data-hmap]").forEach(b=>b.onclick=()=>{let C=+b.dataset.hmap;Ft=_e=Ct=!1,Mt=null,me=C,Vn(),Object.assign(s,{tx:T[C].w[0],ty:T[C].w[1],dist:18,tilt:Math.max(s.tilt,.5)}),d._h="",Ue(),a()}),c.querySelectorAll("[data-hset]").forEach(b=>b.onclick=()=>Zp(b.dataset.hset)),c.querySelectorAll("[data-hnear]").forEach(b=>b.onclick=()=>{let C=Wt.get(It.st[0]);C!=null&&qu(C,b.dataset.hnear)}),c.querySelectorAll("[data-hmore]").forEach(b=>b.onclick=()=>{let C=H(b.dataset.hmore);C.more=!C.more,we(!0)}),c.querySelectorAll("[data-hhide]").forEach(b=>b.onclick=C=>{C.stopPropagation();let[B,at]=b.dataset.hhide.split(":"),rt=H(B);rt.hide=at,hi(rt),we(!0)}),c.querySelectorAll("[data-hshow]").forEach(b=>b.onclick=()=>{let C=H(b.dataset.hshow);C.hide="",hi(C),we(!0)}),c.querySelectorAll("[data-hgo]").forEach(b=>b.onclick=C=>{C.stopPropagation();let[B,at]=b.dataset.hgo.split(":"),rt=H(B);rt.goAt=at==="1"?Date.now():0,rt.goAt?rt.platAt=0:rt._noWay=Date.now()+15*6e4,hi(rt),we(!0)}),c.querySelectorAll("[data-unchoose]").forEach(b=>b.onclick=C=>{C.stopPropagation();let B=b.dataset.unchoose;[...cn].forEach(([at,rt])=>{String(rt)===B&&ui(at,null)}),Dn.num===B&&(Dn.num=""),Nt&&String(Nt.num)===B&&(Nt=null),Se&&Se.num===B&&(Se=null,Ss()),Mt&&String(Mt.num)===B&&(Mt=null,d._h="",Ue()),we(!0)}),c.querySelectorAll("[data-chmap]").forEach(b=>b.onclick=C=>{C.stopPropagation();let B=bs(b.dataset.chmap);B&&(Ki("map"),fr({num:String(B.num),tid:B.tid&&V.vp.has(B.tid)?B.tid:"",tr:B}),Nt=B)}),c.querySelectorAll("[data-hboard]").forEach(b=>b.onclick=C=>{if(C.stopPropagation(),b.classList.contains("off")){Bu(b.dataset.hbwhen);return}let B=so(b.dataset.hboard,"lock",b.closest(".hplace")?.querySelector("[data-ht]")?.dataset.ht);Ke(`${__t(488)} ${B&&B.tr.fam||""} ${b.dataset.hboard} \xB7 ${__t(483)}`),we(!0)}),c.querySelectorAll("[data-hplat]").forEach(b=>b.onclick=C=>{C.stopPropagation();let[B,at]=b.dataset.hplat.split(":"),rt=H(B);rt.platAt=at==="1"?Date.now():0,rt.platAt&&(rt.goAt=0),hi(rt),we(!0)}),c.querySelectorAll("[data-hnotst]").forEach(b=>b.onclick=C=>{C.stopPropagation(),It.homeW=It.w;try{localStorage.setItem("rod_homew",JSON.stringify(It.w))}catch{}we(!0)}),c.querySelectorAll("[data-hdel]").forEach(b=>b.onclick=()=>{He.st=[],He.open=!1,hi(He),we(!0),kp()}),c.querySelectorAll("[data-dk]").forEach(b=>{let C=0,B=0,at=0,rt=()=>{clearTimeout(C),C=0,b.classList.remove("lpress")};b.addEventListener("pointerdown",q=>{let dt=y[+b.dataset.dk];!dt||dt.num==null||!b.matches("li.hr, .hv")||(B=q.clientX,at=q.clientY,b.classList.add("lpress"),C=setTimeout(()=>{if(C=0,b.classList.remove("lpress"),b._lpDone=Date.now(),!Ou(dt,ee())){Bu(dt.est!=null?nt(dt.est):"");return}let J=so(dt.num,"lock",b.closest(".hplace")?.querySelector("[data-ht]")?.dataset.ht);try{navigator.vibrate&&navigator.vibrate(35)}catch{}Ke(`${__t(488)} ${J&&J.tr.fam||dt.fam||""} ${dt.num} \xB7 ${__t(483)}`),we(!0)},700))}),b.addEventListener("pointermove",q=>{C&&Math.hypot(q.clientX-B,q.clientY-at)>10&&rt()}),["pointerup","pointercancel","pointerleave"].forEach(q=>b.addEventListener(q,()=>{C&&rt()})),b.addEventListener("contextmenu",q=>q.preventDefault())}),c.querySelectorAll("[data-dk]").forEach(b=>b.onclick=()=>{if(b._lpDone&&Date.now()-b._lpDone<1500)return;let C=y[+b.dataset.dk];if(b.matches("li.hr, .hv")&&!C.gone&&C.num!=null){let B=b.closest(".hplace")?.querySelector("[data-ht]")?.dataset.ht;if(B){let at=cn.get(B)===String(C.num);ui(B,at?null:String(C.num)),at&&Dn.num===String(C.num)&&(Dn.num=""),at?Mt&&String(Mt.num)===String(C.num)&&(Mt=null,Nt=null,ze.sk="",d._h="",Ue()):fr(C,!0),we(!0);return}}if(C.gone&&b.closest("#home")){Ke(`${__t(501)} \xB7 ${C.fam||""} ${C.num||""}`,{label:__t(393),fn:()=>{Ki("map"),fr(C)}});return}fr(C)}),c.querySelectorAll("[data-pinnext]").forEach(b=>b.onclick=C=>{if(C.target.closest("[data-unpin]"))return;let[B,at]=b.dataset.pinnext.split(":");ui(B,at);let rt=Gp(B,at);rt&&fr(rt,!0),we(!0)}),c.querySelectorAll("[data-unpin]").forEach(b=>b.onclick=C=>{C.stopPropagation(),ui(b.dataset.unpin,null),we(!0)}),c.querySelectorAll("[data-hal]").forEach(b=>b.onclick=()=>_("#alr").click()),pp(c)}function fr(o,c){if(!o)return;let f=t.days.indexOf(ee().ymd),p=ae.find(P=>P.real?o.tid&&P.v.tid===o.tid||o.num&&String(P.tr?P.tr.num:P.v.num)===String(o.num):o.tr&&P.tr===o.tr||o.num&&P.tr&&String(P.tr.num)===String(o.num)),y=o.tr||p&&p.tr||(et[f]||[]).find(P=>String(P.num)===String(o.num));if(Ft=_e=Ct=!1,me=-1,c||void 0,Mt=p?p.tr||{vtid:p.v.tid}:y||null,!Mt)return;c&&(ze.sk="t"+(Mt.num||Mt.vtid)),Nt=p&&p.tr?p.tr:null,Nt&&innerWidth<=640&&(d.classList.add("peek"),_("#rc").classList.contains("min")||_("#rcgrab").click());let M=p?p.p.w:null;M&&Object.assign(s,{tx:M[0],ty:M[1],dist:Math.min(s.dist,22)}),Vn(),d._h="",Ue(),Me=0,a()}let Wr=!1;function Zp(o){Wr=o||!1,v.value="",v.placeholder=o==="work"?__t(502):o==="home"?__t(503):__t(504),document.documentElement.classList.add("srch"),g.style.display="none",v.focus()}let Jp=()=>document.documentElement.classList.remove("srch");{let o=_("#hfind");o&&(o.onclick=()=>Zp(""))}v.addEventListener("blur",()=>setTimeout(()=>{document.activeElement!==v&&Jp(),Wr&&!v.value.trim()&&(Wr=!1,v.placeholder=__t(504))},600));function _1(){}function qu(o,c){let f=c==="work"?He:Qe,p=T[o].id,y=T.filter(M=>M.fams.size&&M!==T[o]&&Math.hypot(M.w[0]-T[o].w[0],M.w[1]-T[o].w[1])<.6).map(M=>M.id);f.st=[p,...y].slice(0,3),f.i=0,f.open=!0,hi(f),we(!0),kp()}let ql=_("#lines");ql.innerHTML=`${__t(505)}`+G.map(o=>`<button type="button" style="--c:${X[o]}" data-f="${o}">${o}</button>`).join("");function jp(){try{we(!0)}catch{}{let o=_("#linebtn");o||(o=document.createElement("button"),o.type="button",o.id="linebtn",ql.after(o),o.onclick=()=>{Zt=[...ut][0],Ct=Ft=_e=!1,d._h="",Ue()});let c=ut.size===1?[...ut][0]:"";o.hidden=!c,c&&(o.innerHTML=`${__t(506)}${m(c)}${__t(507)}`)}ql.querySelectorAll("[data-f]").forEach(o=>{o.dataset.f!=="*"&&o.classList.toggle("off",!ut.has(o.dataset.f))})}ql.querySelectorAll("[data-f]").forEach(o=>o.onclick=()=>{let c=o.dataset.f;c==="*"?G.forEach(f=>ut.add(f)):ut.size===G.length?(ut.clear(),ut.add(c)):ut.has(c)?(ut.delete(c),ut.size||G.forEach(f=>ut.add(f))):ut.add(c);try{localStorage.setItem("rod_lines",JSON.stringify([...ut]))}catch{}jp(),Kt(),Vn(),Nu(),Me=0,a()});let Yu=[...document.querySelectorAll("[data-sp]")],Ti=0;function Kp(o){let c=ee();o&&(Ut===o||Ti===o)?Ut?(jt=c.min,he=c.min,Ut=0,Ti=o):(ge=performance.now(),Ut=o,Ti=0):o===0?(Ut=0,he=null,Ti=0):(jt=c.min,ge=performance.now(),he=c.min,Ut=o,Ti=0),Yu.forEach(f=>{let p=+f.dataset.sp;f.classList.toggle("on",p===(Ut||Ti)||!Ut&&!Ti&&he==null&&p===0),f.classList.toggle("pz",!!Ti&&p===Ti),f.textContent=p===0?__t(508):Ti===p?"\u25B6 \xD7"+p:Ut===p?"\u23F8 \xD7"+p:"\xD7"+p}),Me=0,a()}Yu.forEach(o=>o.onclick=()=>Kp(+o.dataset.sp)),_("#tsl").oninput=o=>{let c=+o.target.value;jt=c,he=c,ge=performance.now(),Ut===0&&!Ti&&Yu.forEach(f=>f.classList.remove("on")),Me=0,a()},setInterval(()=>{he!=null&&Ut&&jt+(performance.now()-ge)/6e4*Ut>1560&&(jt=240,ge=performance.now())},1e3),window.__rodSearch=o=>{let c=w(o.trim());if(!c){g.style.display="none",g._pick=null;return}let f=[],p=[];T.forEach((N,D)=>{if(!N.fams.size)return;let k=w(N.n);k.startsWith(c)||k.includes(" "+c)||k.includes("-"+c)?f.push(D):k.includes(c)&&p.push(D)});let y=f.concat(p).slice(0,7),M=L.filter(N=>w(N.name).startsWith(c)).sort((N,D)=>D.pop-N.pop).slice(0,3),P=y.map(N=>({h:`\u{1F689} ${m(T[N].n)}<em>${[...T[N].fams].sort(F).slice(0,3).map(D=>`<em class="ls" style="background:${X[D]}">${D}</em>`).join(" ")}</em>`,go:()=>{if(Jp(),Wr){let D=Wr;Wr=!1,v.placeholder=__t(504),qu(N,D);return}ze.on&&ze.cur!=="map"&&Ki("map"),Ft=!1,_e=!1,Ct=!1,me=N,Mt=null,Nt=null,Vn(),Object.assign(s,{tx:T[N].w[0],ty:T[N].w[1],dist:Math.min(s.dist,20),tilt:Math.max(s.tilt,.5)}),Ue(),a()}})).concat(M.map(N=>({h:`${m(N.name)}${__t(509)}`,go:()=>{Object.assign(s,{tx:N.cx,ty:N.cy,dist:S(N.size*3+14,14,60)}),a()}})));g.innerHTML=P.map((N,D)=>`<li data-i="${D}">${N.h}</li>`).join("")||__t(510),g.style.display="block",g._pick=N=>{P[N]&&(P[N].go(),g.style.display="none",v.value="",v.blur())},g.querySelectorAll("li[data-i]").forEach(N=>N.onclick=()=>g._pick(+N.dataset.i))},jp(),Vn();try{let o=new URLSearchParams(location.search).get("st");if(o){let c=w(o),f=-1,p=0;T.forEach((y,M)=>{if(!y.fams.size)return;let P=w(y.n),N=P===c?3:P.startsWith(c)||c.startsWith(P)?2:P.includes(c)||c.includes(P)?1:0;N>p&&(p=N,f=M)}),f>=0&&setTimeout(()=>{me=f,Vn(),Object.assign(s,{tx:T[f].w[0],ty:T[f].w[1],dist:18,tilt:.5}),Ue(),a()},300)}}catch{}let Zu={v:!1};document.addEventListener("click",o=>{!(o.target.closest&&o.target.closest("[data-halx]"))||o.target.closest("a")||(Zu.v=!Zu.v,we(!0))}),d.addEventListener("click",o=>{if(!d.classList.contains("peek")&&innerWidth<=640&&Mt&&d.querySelector(".mn")&&!o.target.closest("button,a,input,select,label,summary,[data-alarm],[data-gs],[data-gt],[data-sf],[data-al],[role=button]")){let f=d.querySelector(".mn");o.stopPropagation(),f&&f.click();return}if(!d.classList.contains("peek")||o.target.closest("button,a,input"))return;o.stopPropagation(),o.preventDefault(),d.classList.remove("peek");let c=d.querySelector(".mn");c&&(c.textContent="\u25BE"),d.scrollTop=0},!0),d.addEventListener("pointerdown",()=>{d._touch=Date.now()+2500},!0),["pointerup","pointercancel"].forEach(o=>d.addEventListener(o,()=>{d._touch=0},!0));{let o=0,c=0,f=0,p=0;d.addEventListener("touchstart",y=>{p=innerWidth<=640&&Mt&&(!ze.on||ze.cur==="map")&&y.touches.length===1&&!y.target.closest("input")?1:0,p&&(o=y.touches[0].clientX,c=y.touches[0].clientY,f=0)},{passive:!0}),d.addEventListener("touchmove",y=>{if(!p)return;let M=y.touches[0].clientX-o,P=y.touches[0].clientY-c;p===1&&(Math.abs(M)<12&&Math.abs(P)<12||(p=Math.abs(M)>Math.abs(P)*1.3&&M<0?2:0,!p))||(y.preventDefault(),f=Math.min(0,M),d.style.transition="none",d.style.transform=`translateX(${f}px)`,d.style.opacity=String(Math.max(.3,1+f/300)))},{passive:!1}),d.addEventListener("touchend",()=>{if(p!==2){p=0;return}if(p=0,d.style.transition="transform .18s,opacity .18s",f>-90){d.style.transform="",d.style.opacity="";return}d.style.transform="translateX(-110%)",d.style.opacity="0",setTimeout(()=>{let y=d.querySelector("[data-cx]");y&&y.click(),d.style.transition="",d.style.transform="",d.style.opacity=""},180)}),d.addEventListener("touchcancel",()=>{p===2&&(d.style.transform="",d.style.opacity=""),p=0})}let ze={on:!1,cur:"now",home:new Map},Yl=matchMedia("(max-width:640px), (max-height:500px) and (pointer:coarse)"),Nn=document.createElement("nav");Nn.id="tabs";let S_=[["now","\u{1F552}",__t(508)],["map","\u{1F5FA}\uFE0F",__t(394)],["line","\u{1F4CA}",__t(511)],["set","\u2699\uFE0F",__t(512)]];Nn.innerHTML=S_.map(([o,c,f])=>`<button type="button" data-tab="${o}"><span>${c}</span><small>${f}</small></button>`).join(""),document.body.appendChild(Nn);let pr=document.createElement("i");pr.className="tind",pr.setAttribute("aria-hidden","true"),Nn.prepend(pr);let Qp=o=>[...Nn.querySelectorAll("[data-tab]")].find(c=>{let f=c.getBoundingClientRect();return o>=f.left&&o<f.right}),Ju=o=>{!o||!o.offsetWidth||(pr.style.width=o.offsetWidth+"px",pr.style.height=o.offsetHeight+"px",pr.style.top=o.offsetTop+"px",pr.style.transform=`translateX(${o.offsetLeft}px)`)},Xr=()=>Ju(Nn.querySelector("[data-tab].on")),M_=()=>{try{let o=window.Capacitor,c=o&&o.isNativePlatform&&o.isNativePlatform()&&o.Plugins&&o.Plugins.Haptics;c&&c.selectionChanged().catch(()=>{})}catch{}},ei={on:!1,b:null,moved:!1,until:0};Nn.addEventListener("pointerdown",o=>{let c=Qp(o.clientX);if(c){ei.on=!0,ei.b=c,ei.moved=!1,Nn.classList.add("drag"),Nn.querySelectorAll(".hov").forEach(f=>f.classList.remove("hov")),c.classList.add("hov"),Ju(c);try{Nn.setPointerCapture(o.pointerId)}catch{}try{let f=window.Capacitor,p=f&&f.Plugins&&f.Plugins.Haptics;p&&f.isNativePlatform()&&p.selectionStart().catch(()=>{})}catch{}}}),Nn.addEventListener("pointermove",o=>{if(!ei.on)return;let c=Qp(o.clientX);c&&c!==ei.b&&(ei.b.classList.remove("hov"),c.classList.add("hov"),ei.b=c,ei.moved=!0,Ju(c),M_())});let tm=o=>{if(ei.on){ei.on=!1,Nn.classList.remove("drag"),Nn.querySelectorAll(".hov").forEach(c=>c.classList.remove("hov"));try{let c=window.Capacitor,f=c&&c.Plugins&&c.Plugins.Haptics;f&&c.isNativePlatform()&&f.selectionEnd().catch(()=>{})}catch{}o&&ei.b?(ei.until=Date.now()+500,ei.b.dataset.tab!==ze.cur?Ki(ei.b.dataset.tab):Xr()):Xr()}};Nn.addEventListener("pointerup",()=>tm(!0)),Nn.addEventListener("pointercancel",()=>tm(!1)),addEventListener("resize",()=>setTimeout(Xr,60));try{new ResizeObserver(()=>Xr()).observe(Nn)}catch{}let qr=document.createElement("div");qr.id="tabL",document.body.appendChild(qr);let mr=document.createElement("div");mr.id="tabA",mr.className="box",document.body.appendChild(mr);let ju=(o,c)=>{o&&(ze.home.has(o)||ze.home.set(o,[o.parentNode,o.nextSibling]),c.appendChild(o))},em=()=>{for(let[o,[c,f]]of ze.home)try{c.insertBefore(o,f&&f.parentNode===c?f:null)}catch{}ze.home.clear()};function Ku(){let o=[...new Set([Qe,He].flatMap(M=>{let P=Rn(M);return P!=null?[...T[P].fams]:[]}))],c=(ut.size&&ut.size<=8?[...ut]:o.length?o:[]).filter(M=>X[M]).sort(F),f=c.join(","),p=V.alerts.filter(M=>[...M.fams].some(P=>ut.has(P))).length,y=[Ct,_e,Zt,Ft,f,p].join("|");qr._k!==y&&(qr._k=y,qr.innerHTML=`<button type="button" data-tl="stats" class="${Ct?"on":""}">\u{1F4CA} ${__t(513)}</button><button type="button" data-tl="alr" class="${_e?"on":""}">\u26A0\uFE0F ${p}${p===1?__t(282):__t(283)}</button>${c.map(M=>`<button type="button" data-tl="line:${m(M)}" class="${Zt===M?"on":""}">\u{1F4CB} ${m(M)}</button>`).join("")}<a href="https://www.whatsapp.com/channel/0029Vav4hGTId7nPenKMuo2C" target="_blank" rel="noopener" title="${__t(131)}">\u{1F4AC}</a>`,qr.querySelectorAll("[data-tl]").forEach(M=>M.onclick=()=>{let P=M.dataset.tl;Ct=P==="stats",_e=P==="alr",Zt=P.startsWith("line:")?P.slice(5):"",Ft=!1,Mt=null,me=-1,Ct&&(Ne.at=0),d._h="",Ue(),Ku()}))}document.addEventListener("visibilitychange",()=>{!document.hidden&&window.__txt&&window.__txt()});let b_="https://raw.githubusercontent.com/elMonoAmelio/catalunya-survival/horarios/rod_pack.json",w_=()=>yt(new Date).ymd.replace(/-/g,"");function lo(){navigator.onLine===!1||location.protocol==="file:"&&!/[?&]pack=1/.test(location.search)||fetch(b_,{cache:"no-store"}).then(o=>o.ok?o.text():null).then(o=>{if(!o)return;let c;try{c=JSON.parse(o)}catch{return}if(!c||!c.gen||!Array.isArray(c.days)||!c.trips||c.gen<=t.gen)return;try{localStorage.setItem("rod_pack",o)}catch{return}let f=w_(),p=t.days.indexOf(f),y=c.days.indexOf(f),M=p<0?0:ht.filter(D=>D.day===p).length,P=0;if(y>=0)for(let D of c.trips)D[0]===y&&P++;let N=y>=0&&M&&(Math.abs(P-M)/M>.1||!P);if(p<0||p>=t.days.length-2||N){try{sessionStorage.setItem("rod_packmsg",N?"1":"")}catch{}location.reload();return}co.v=!0}).catch(()=>{})}let co={v:!1};document.addEventListener("visibilitychange",()=>{document.hidden&&co.v?(co.v=!1,co.reload=!0):!document.hidden&&co.reload&&location.reload()});try{sessionStorage.getItem("rod_packmsg")==="1"&&(sessionStorage.removeItem("rod_packmsg"),setTimeout(()=>Ke("\u{1F5D3}\uFE0F "+__t(514)),1500))}catch{}if(setTimeout(lo,4e3),document.addEventListener("visibilitychange",()=>{!document.hidden&&Date.now()-(lo.at||0)>6*36e5&&(lo.at=Date.now(),lo())}),lo.at=Date.now(),window.__RODNEW__){let o=window.__RODNEW__,c=_("#ver");c&&c.firstChild&&c.firstChild.nodeType===3&&(c.firstChild.textContent=c.firstChild.textContent.replace(/(\d\d\/\d\d \d\d:\d\d)/,o.slice(8,10)+"/"+o.slice(5,7)+" "+o.slice(11,16)))}function Zl(){em();let o=window.__L||"es",c=ci.mode;mr.innerHTML=`<h3>${__t(512)}</h3>
      <h4>\u{1F310} ${__t(515)}</h4><div class="seg2">${"ca|Catal\xE0,es|Espa\xF1ol,en|English".split(",").map(f=>f.split("|")).map(([f,p])=>`<button type="button" data-lang="${f}" class="${o===f?"on":""}">${p}</button>`).join("")}</div>
      <h4>\u{1F319} ${__t(516)}</h4><div class="seg2">${[["auto",__t(304)],["light",__t(517)],["dark",__t(518)]].map(([f,p])=>`<button type="button" data-th="${f}" class="${c===f?"on":""}">${p}</button>`).join("")}</div>
      <h4>\u{1F520} ${__t(519)}</h4><div class="seg2">${(()=>{let f="";try{f=localStorage.getItem("rod_big")||""}catch{}let p=f==="1"?"1":f==="0"?"0":"a";return[["a",__t(304)],["0","Normal"],["1",__t(520)]].map(([y,M])=>`<button type="button" data-big="${y}" class="${p===y?"on":""}">${M}</button>`).join("")})()}</div>${(()=>{let f="";try{f=localStorage.getItem("rod_big")||""}catch{}return f==="1"||f==="0"?"":`<small class="tabAhint">${__t(521)}</small>`})()}
      <h4>\u{1F514} ${__t(522)}</h4><div id="tabAbell"></div><small class="tabAhint">${__t(523)}</small>${Hl().length?"":`<small class="tabAhint">${__t(524)}</small>`}${(()=>{let f=Hl();return f.length>1?`<small class="tabAhint">${__t(525)}</small><div class="alch">${f.map(p=>`<button type="button" data-al="${m(p)}" class="ln${dr.has(p)?" off":""}" style="--c:${X[p]}">${m(p)}</button>`).join("")}</div>`:""})()}
      <h4>\u{1F4E1} ${__t(526)}</h4><div id="tabArt"></div>
      <h4>\u2139\uFE0F ${__t(527)}</h4><div id="tabAinf"></div><p class="tdisc">${__t(528)}</p>
      <p class="tabAfoot">MonkiSoft</p>`,mr.querySelectorAll("[data-al]").forEach(f=>f.onclick=()=>{let p=f.dataset.al,y=Hl();dr.has(p)?dr.delete(p):y.filter(M=>!dr.has(M)).length>1&&dr.add(p);try{localStorage.setItem("rod_aloff",JSON.stringify([...dr]))}catch{}we(!0),Zl()}),mr.querySelectorAll("[data-big]").forEach(f=>f.onclick=()=>{let p=f.dataset.big;try{p==="a"?localStorage.removeItem("rod_big"):localStorage.setItem("rod_big",p)}catch{}window.__txt&&window.__txt(),Zl(),we(!0)}),mr.querySelectorAll("[data-th]").forEach(f=>f.onclick=()=>{ci.mode=f.dataset.th;try{localStorage.setItem("rod_theme",ci.mode)}catch{}Dl(),Zl()}),ju(_("#bell"),_("#tabAbell")),ju(_("#src"),_("#tabArt")),ju(_("#ver"),_("#tabAinf"))}function Ki(o){if(!ze.on)return;let c=ze.cur;if(ze.cur=o,document.documentElement.dataset.tab=o,window.__mapHidden=o!=="map",o==="line"&&d.classList.remove("peek"),!window.__mapHidden&&window.__wakeMap&&window.__wakeMap(),Nn.querySelectorAll("[data-tab]").forEach(f=>f.classList.toggle("on",f.dataset.tab===o)),Xr(),o==="line")(Mt||me>=0)&&(ze.keep={t:Mt,s:me,sk:ze.sk}),!Ct&&!_e&&!Zt&&!Ft&&(Ct=!0,Ne.at=0),Mt=null,me=-1,d._h="",Ue(),Ku();else if(c==="line"){Ct=_e=Ft=!1,Zt="";let f=ze.keep;ze.keep=null,f&&o==="map"&&!Mt&&me<0&&(Mt=f.t,me=f.s,ze.sk=f.sk),d._h="",Ue()}o==="map"&&requestAnimationFrame(()=>requestAnimationFrame(()=>{try{Lu()}catch{}dispatchEvent(new Event("resize"))})),o==="set"&&Zl(),o==="now"&&(we(!0),requestAnimationFrame(Gl)),Me=0,a()}Nn.onclick=o=>{if(Date.now()<ei.until)return;let c=o.target.closest("[data-tab]");c&&Ki(c.dataset.tab)},window.__rodTabSync=()=>{if(!ze.on)return;let o=Mt?"t"+(Mt.num||Mt.vtid):me>=0?"s"+me:"",c=o!==ze.sk;ze.sk=o,o&&c&&ze.cur!=="map"?Ki("map"):(_e||Zt||Ft)&&ze.cur!=="line"&&ze.cur!=="map"&&Ki("line"),ze.cur==="line"&&Ku()};function Qu(){let o=Yl.matches||document.documentElement.classList.contains("cap");if(o!==ze.on)if(ze.on=o,document.documentElement.classList.toggle("tabmode",o),requestAnimationFrame(()=>requestAnimationFrame(Xr)),o||(window.__mapHidden=!1),o){let c="now";try{let f=sessionStorage.getItem("rod_tabgo");f&&(sessionStorage.removeItem("rod_tabgo"),/^(now|map|line|set)$/.test(f)&&(c=f))}catch{}Ki(c)}else delete document.documentElement.dataset.tab,em()}Yl.addEventListener?Yl.addEventListener("change",Qu):Yl.addListener(Qu),Qu();{let o=_("#rc"),c=()=>document.documentElement.style.setProperty("--rch",Math.round(o.getBoundingClientRect().height)+"px");window.ResizeObserver&&new ResizeObserver(c).observe(o),c()}let td={"\u{1F3D8}":'<path d="M3 21V11l5-4 5 4v10"/><path d="M13 21V9l4-3 4 3v12"/><path d="M2 21h20"/><path d="M7 21v-4h2v4"/>',"\u{1F3E0}":'<path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/>',"\u{1F4BC}":'<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5h6v2"/><path d="M3 13h18"/>',"\u{1F4CD}":'<path d="M12 21s-7-6.5-7-12a7 7 0 0114 0c0 5.5-7 12-7 12z"/><circle cx="12" cy="9" r="2.5"/>',"\u{1F686}":'<rect x="5" y="3" width="14" height="14" rx="3"/><path d="M5 11h14M8 21l2-4M16 21l-2-4"/><circle cx="9" cy="14" r=".6"/><circle cx="15" cy="14" r=".6"/>',"\u{1F6B6}":'<circle cx="13" cy="4" r="2"/><path d="M12 7l-2 6 3 3v5M10 13l-3 8M11 8l4 3h3M11 8l-4 3"/>',"\u{1F689}":'<path d="M4 20h16M6 20V9l6-5 6 5v11"/><path d="M10 20v-5h4v5"/>',"\u26A0\uFE0F":'<path d="M12 3l10 18H2z"/><path d="M12 10v5M12 18v.4"/>',"\u{1F4CC}":'<path d="M9 3h6l-1 6 3 3H7l3-3z"/><path d="M12 12v9"/>',"\u{1F5D3}\uFE0F":'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',"\u{1F4E1}":'<path d="M5 19a10 10 0 0114 0M8 16a6 6 0 018 0"/><circle cx="12" cy="20" r="1"/><path d="M3 15a14 14 0 0118 0"/>',"\u{1F552}":'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',"\u{1F5FA}\uFE0F":'<path d="M9 4L3 6v14l6-2 6 2 6-2V4l-6 2-6-2z"/><path d="M9 4v14M15 6v14"/>',"\u{1F4CA}":'<path d="M4 20V11M10 20V4M16 20v-7M2 20h20"/>',"\u2699\uFE0F":'<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1"/>',"\u{1F310}":'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/>',"\u{1F319}":'<path d="M20 14A8 8 0 1110 4a7 7 0 0010 10z"/>',"\u{1F520}":'<path d="M3 18l4-12 4 12M4.5 14h5M15 18V9h3.5a2.5 2.5 0 010 5H15M15 14h4a2 2 0 010 4h-4"/>',"\u{1F514}":'<path d="M6 16V11a6 6 0 0112 0v5l2 2H4z"/><path d="M10 21h4"/>',"\u{1F515}":'<path d="M6 16V11a6 6 0 0112 0v5l2 2H4z"/><path d="M10 21h4M3 3l18 18"/>',"\u2139\uFE0F":'<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.5"/>',"\u{1F4CB}":'<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V3h6v1M8 10h8M8 14h8M8 18h5"/>',"\u{1F4AC}":'<path d="M4 5h16v11H9l-5 4z"/>',"\u26D4":'<circle cx="12" cy="12" r="9"/><path d="M7 12h10"/>',"\u{1F4F6}":'<path d="M4 20v-3M9 20v-7M14 20V9M19 20V5"/>',"\u23F3":'<path d="M7 3h10M7 21h10M8 3c0 6 8 6 8 9s-8 3-8 9M16 3c0 6-8 6-8 9s8 3 8 9"/>',"\u{1F3D9}\uFE0F":'<path d="M3 21V9h6v12M9 21V4h6v17M15 21v-9h6v9M2 21h20"/>',"\u2B50":'<path d="M12 3l2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.3 6.4 20.2l1.1-6.2L3 9.6l6.2-.9z"/>'},ed=new RegExp("("+Object.keys(td).map(o=>o.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")).join("|")+")\uFE0F?","g"),E_=o=>`<span class="ico" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${td[o]||td[o+"\uFE0F"]||""}</svg></span>`;function T_(o){let c=document.createTreeWalker(o,NodeFilter.SHOW_TEXT),f=[],p;for(;p=c.nextNode();)p.parentElement&&p.parentElement.closest(".ico,script,style,textarea,input")||(ed.lastIndex=0,ed.test(p.nodeValue)&&f.push(p));for(let y of f){let M=document.createElement("span");M.innerHTML=m(y.nodeValue).replace(ed,(P,N)=>E_(N)),y.replaceWith(...M.childNodes)}return f.length}{let o=()=>["#home","#tabs","#tabA","#tabL","#mcs","#onb","#toast","#rc","#inf","#mbtn","#sbtn","#wabtn","#bell","#list"].map(y=>_(y)).filter(Boolean),c=!1,f=()=>{if(!c){c=!0;try{let y=0;o().forEach(M=>{y+=T_(M)}),y&&ze.on&&Gl()}finally{c=!1}}},p=new MutationObserver(()=>{c||queueMicrotask(f)});setTimeout(()=>{f(),o().forEach(y=>p.observe(y,{childList:!0,subtree:!0,characterData:!0}))},0)}window.__rod={PIN:cn,LASTPIN:Dn,get ONBX(){return{tid:Et.tid,lock:Et.lock,manual:Et.manual}},xferCands:Ip,bestXfer:$u,xferFirst:zu,nowState:ee,XMIN:Rp,pinNotify:Hp,toast:Ke,cardEta:io,HOME:Qe,WORK:He,ONB:Et,alertForMe:Op,whereAmI:Hu,departuresFor:Yn,DEPS:Ot,tripByNum:bs,delayOf:mt,TID:pt,SID:Wt,byDay:et,get days(){return t.days},get hist(){return Ne},get past(){return Lt.cur},get cols(){return mn.mesh?mn.mesh.count:-1},get dist(){return r.dist},get follow(){return Nt},get selTrip(){return Mt},ST:T,TR:ht,FAM:G,act:()=>ae,setSpeed:Kp,RT:V,pollRT:de,nowState:ee,posAt:Os,activeTrips:R,LL:bt,select:o=>{Mt=o,Ue()}}}var za=window.__DATA__;var $e=i=>document.querySelector(i),Ds=i=>String(i).replace(/\B(?=(\d{3})+(?!\d))/g,"."),ti=(i,t,e)=>Math.min(e,Math.max(t,i)),kf=i=>i.normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase(),ai=$e("#c"),bl=new ou({canvas:ai,antialias:!0});bl.setPixelRatio(Math.min(devicePixelRatio||1,2));var Ns=new Po;Ns.background=new xe(15659509);var wu=35,_s=new Kn(wu,1,2,1500);Ns.add(new tl(16777215,9080992,1));var yg=new nl(16777215,.9);yg.position.set(-40,-70,90);Ns.add(yg);var ms=100/za.w,Sl=za.w/2,Ml=za.h/2,yn=[],zf=new Hi;Ns.add(zf);var vu=new Tr({color:16777215,transparent:!0,opacity:.55});for(let i of za.m){let t=new Hi,e=[],n=[],s=1e9,r=-1e9,a=1e9,l=-1e9;for(let S of i.g){let w=S.map(_=>{let m=[];for(let z=0;z<_.length;z+=2)m.push(new zt((_[z]-Sl)*ms,(_[z+1]-Ml)*ms));return m.length>1&&m[0].equals(m[m.length-1])&&m.pop(),m}).filter(_=>_.length>=3);if(!w.length)continue;let L=new wa(w[0]);for(let _=1;_<w.length;_++)L.holes.push(new Cr(w[_]));e.push(L);for(let _ of w[0])s=Math.min(s,_.x),r=Math.max(r,_.x),a=Math.min(a,_.y),l=Math.max(l,_.y);for(let _ of w)n.push(new Oo(new Mn().setFromPoints(_.map(m=>new Z(m.x,m.y,0))),vu))}if(!e.length)continue;let h;try{h=new Yo(e,{depth:1,bevelEnabled:!1})}catch{continue}let u=new jo({color:13421772}),d=new Bn(h,u);t.add(d);let v=new Hi;n.forEach(S=>v.add(S)),v.position.z=.04,zf.add(v),t.scale.z=.01,zf.add(t);let g={og:v,rings:i.g,inF:!0,sel:null,code:i.c,name:i.n,pop:i.p,area:i.a,pr:i.pr,rankP:0,rankD:0,group:t,mesh:d,mat:u,cx:(s+r)/2,cy:(a+l)/2,size:Math.max(r-s,l-a),z:.01,zt:.01,rank:0};d.userData.m=g,yn.push(g)}var VT=yn.map(i=>i.mesh),fg=i=>{let t=0;for(let e=0;e<i.length;e+=2){let n=(e+2)%i.length;t+=i[e]*i[n+1]-i[n]*i[e+1]}return Math.abs(t)/2},Sg=0,Mg=0;for(let i of yn){for(let t of i.rings)Sg+=fg(t[0])-t.slice(1).reduce((e,n)=>e+fg(n),0);Mg+=i.area}var t1=Math.sqrt(Mg/Sg),gu={"08":"Barcelona",17:"Girona",25:"Lleida",43:"Tarragona"},bg={"08":__t(529),17:__t(530),25:__t(531),43:__t(532)},qf="sqrt",Yf="pop",Of=0,$f=0,Ua=1,vl=1,e1={sqrt:i=>Math.sqrt(i),lin:i=>i,log:i=>Math.log10(Math.max(i,1))},Vf=i=>Yf==="pop"?i.pop:i.pop/i.area,pu=["#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#b10026","#5c0020"].map(i=>new xe(i));function n1(i){i=ti(i,0,1)*(pu.length-1);let t=Math.min(Math.floor(i),pu.length-2);return pu[t].clone().lerp(pu[t+1],i-t)}var Fa=i=>i>=100?Ds(Math.round(i)):i.toLocaleString("es-ES",{maximumFractionDigits:1});function i1(){$f=0;for(let i of yn)$f+=i.pop;[...yn].sort((i,t)=>t.pop-i.pop).forEach((i,t)=>i.rankP=t+1),[...yn].sort((i,t)=>t.pop/t.area-i.pop/i.area).forEach((i,t)=>i.rankD=t+1),Tg()}var wg=new xe("#d3d8e2"),Eg=new xe("#eceff3");window.__mapTheme=i=>{Ns.background=new xe(i?856345:15659509),Eg.set(i?"#2b3242":"#eceff3"),wg.set(i?"#1a1f29":"#d3d8e2"),vu.color.set(i?856345:16777215),vu.opacity=i?.7:.55,Zf.color.set(i?329483:2764864),Jf.color.set(i?9081766:16777215);for(let t of yn)t.base&&Eu(t);zn()};function Eu(i){i.mat.color.copy(i.base).lerp(Eg,document.documentElement.classList.contains("dark")?.95:.86),i.inF||i.mat.color.lerp(wg,.8)}function Tg(){Ua=1,vl=1e12;for(let e of yn){let n=Vf(e);Ua=Math.max(Ua,n),vl=Math.min(vl,n)}let i=Math.log10(Math.max(vl,.01)),t=Math.log10(Ua);for(let e of yn)e.base=n1((Math.log10(Math.max(Vf(e),.01))-i)/(t-i)),Eu(e);$e("#lmin").textContent=Fa(vl),$e("#lmax").textContent=Fa(Ua),$e("#lname").textContent=Yf==="pop"?__t(533):__t(534),Tu()}function Tu(){let i=e1[qf],t=i(Ua),e=24*Of;for(let n of yn)n.zt=Of<=.001?.01:Math.max(.12*Math.min(1,Of),e*i(Vf(n))/t)*(n.inF?1:.1);zn()}var pg=Object.fromEntries(yn.map(i=>[i.code,i])),_u=[],Ag=[];for(let i of za.bd){let t=pg[i.a],e=pg[i.b];if(!(!t||!e))for(let n=0;n+3<i.p.length;n+=2)Ag.push((i.p[n]-Sl)*ms,(i.p[n+1]-Ml)*ms,0,(i.p[n+2]-Sl)*ms,(i.p[n+3]-Ml)*ms,0),_u.push(t,e)}var yu=new Yi;yu.setPositions(Ag);var Zf=new hs({color:2764864,linewidth:4.4,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3}),Jf=new hs({color:16777215,linewidth:2.4,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-6});[Zf,Jf].forEach((i,t)=>{let e=new Ur(yu,i);e.frustumCulled=!1,e.renderOrder=10+t,Ns.add(e)});function s1(){let i=yu.attributes.instanceStart.data.array;for(let t=0;t<_u.length;t+=2){let e=Math.max(_u[t].z,_u[t+1].z)+.12,n=t/2*6;i[n+2]=e,i[n+5]=e}yu.attributes.instanceStart.data.needsUpdate=!0}var Su={};for(let i of Object.keys(gu)){let t=yn.filter(d=>d.pr===i),e=0,n=0,s=0,r=1e9,a=-1e9,l=1e9,h=-1e9;for(let d of t)e+=d.area,n+=d.cx*d.area,s+=d.cy*d.area,r=Math.min(r,d.cx),a=Math.max(a,d.cx),l=Math.min(l,d.cy),h=Math.max(h,d.cy);let u=document.createElement("div");u.className="plab",u.textContent=gu[i],u.title=__t(535)+bg[i],u.onclick=()=>m1("pr:"+i),document.body.appendChild(u),Su[i]={el:u,p:new Z(n/e,s/e,0),cx:(r+a)/2,cy:(l+h)/2,ext:Math.max(a-r,h-l),ext2:[a-r,h-l],area:e,name:gu[i]}}var Bf=new Z;function r1(){for(let i in Su){let t=Su[i];Bf.copy(t.p).project(_s),t.el.style.transform=`translate(-50%,-50%) translate(${(Bf.x*.5+.5)*innerWidth}px,${(-Bf.y*.5+.5)*innerHeight}px)`}}var wn={tilt:0,yaw:0,dist:150,tx:0,ty:0},Ce={...wn};function a1(){let i=innerWidth/innerHeight,t=Math.tan(wu*Math.PI/360);return Math.max(za.h*ms*1.1,100*1.1/i)/(2*t)}var o1=document.getElementById("northr");document.getElementById("north").addEventListener("click",()=>{Ce.yaw=Math.round(Ce.yaw/(2*Math.PI))*2*Math.PI,Ce.tilt=0,zn()});function jf(){Object.assign(Ce,{tilt:0,yaw:0,dist:a1(),tx:0,ty:0}),zn()}function l1(){let{tilt:i,yaw:t,dist:e,tx:n,ty:s}=wn;_s.position.set(n+e*Math.sin(i)*Math.sin(t),s-e*Math.sin(i)*Math.cos(t),e*Math.cos(i)),_s.up.set(-Math.cos(i)*Math.sin(t),Math.cos(i)*Math.cos(t),Math.sin(i)),_s.lookAt(n,s,0)}var yl=!0,mg=performance.now(),Ba=new Map,ir=0,mu=0;function Kf(){ir&&(clearTimeout(ir),ir=0,requestAnimationFrame(Oa))}function zn(){yl=!0,Kf()}window.__wakeMap=Kf;["pointerdown","wheel","touchstart","keydown"].forEach(i=>addEventListener(i,Kf,{passive:!0,capture:!0}));function Oa(i){ir=0;let t=ti((i-mg)/1e3,0,.05);mg=i;let e=1-Math.exp(-t*10),n=!1;for(let s of Object.keys(wn)){let r=Ce[s]-wn[s];Math.abs(r)>1e-4*(s==="dist"?10:1)?(wn[s]+=r*e,n=!0):wn[s]=Ce[s]}for(let s of yn){let r=s.zt-s.z;Math.abs(r)>.002?(s.z+=r*Math.min(1,e*.8),s.group.scale.z=s.z,s.og.position.z=s.z+.04,n=!0):s.z!==s.zt&&(s.z=s.zt,s.group.scale.z=s.z,s.og.position.z=s.z+.04)}for(let[s,r]of Ba){let a=(i-r)/1800;a>=1?(Ba.delete(s),zr(s)):zr(s,.5*Math.sin(Math.PI*a)),n=!0}if(window.__rodTick&&window.__rodTick(i)&&(yl=!0),window.__mapHidden){yl=!0,ir=setTimeout(()=>{ir=0,requestAnimationFrame(Oa)},1e3);return}if(n||yl){o1.style.transform=`rotate(${wn.yaw}rad) scaleY(${(.55+.45*Math.cos(wn.tilt)).toFixed(3)})`;{let s=Math.abs(Math.sin(Ce.yaw/2))<.02&&Ce.tilt<.03,r=document.getElementById("north");r.classList.contains("flat")!==s&&(r.classList.toggle("flat",s),r.title=s?__t(536):__t(537))}l1(),s1(),r1(),window.__rodFrame&&window.__rodFrame(),bl.render(Ns,_s),yl=n,$e("#tilt").value=Math.round(Ce.tilt*180/Math.PI),$e("#yaw").value=Math.round(((Ce.yaw*180/Math.PI+180)%360+360)%360-180)}if(n||Ba.size){mu=0,requestAnimationFrame(Oa);return}mu||(mu=i),i-mu<1500?requestAnimationFrame(Oa):ir=setTimeout(()=>{ir=0,requestAnimationFrame(Oa)},120)}function Cg(){bl.setSize(innerWidth,innerHeight,!1),_s.aspect=innerWidth/innerHeight,_s.updateProjectionMatrix(),Zf.resolution.set(innerWidth,innerHeight),Jf.resolution.set(innerWidth,innerHeight),window.__rodResize&&window.__rodResize(),zn()}addEventListener("resize",()=>{Cg(),dn.length&&rr()});ai.addEventListener("wheel",i=>{i.preventDefault();let t=i.deltaMode===1?16:1,e=i.deltaY*t;if(i.altKey){let n=(Math.abs(i.deltaX)>Math.abs(i.deltaY)?i.deltaX:i.deltaY)*t;Ce.yaw+=n*.0035}else i.ctrlKey?Ce.dist=ti(Ce.dist*Math.exp(e*.01),6,400):Ce.tilt=ti(Ce.tilt+e*.002,0,1.32);zn()},{passive:!1});ai.addEventListener("contextmenu",i=>i.preventDefault());var gs=new Map,_i=null,Or=0,Hf=0,Gf=0;var Mu=null;ai.addEventListener("pointerdown",i=>{if(i.pointerType!=="mouse"&&!document.body.classList.contains("used")&&(document.body.classList.add("used"),dn.length&&setTimeout(rr,50)),ai.setPointerCapture(i.pointerId),gs.set(i.pointerId,{x:i.clientX,y:i.clientY}),gs.size===1&&(_i={rot:i.button===2||i.altKey,moved:0,multi:!1,touch:i.pointerType!=="mouse"}),gs.size===2){let[t,e]=[...gs.values()];Or=Math.hypot(t.x-e.x,t.y-e.y),Hf=Math.atan2(e.y-t.y,e.x-t.x),Gf=(t.y+e.y)/2,Mu={mode:null,rot:0,sc:0,tl:0},_i&&(_i.multi=!0)}Qf()});ai.addEventListener("pointermove",i=>{let t=gs.get(i.pointerId);if(!t){Ls={x:i.clientX,y:i.clientY},Wf||(Wf=requestAnimationFrame(h1));return}let e=i.clientX-t.x,n=i.clientY-t.y;if(t.x=i.clientX,t.y=i.clientY,gs.size===2){let[s,r]=[...gs.values()],a=Math.hypot(s.x-r.x,s.y-r.y),l=Math.atan2(r.y-s.y,r.x-s.x),h=(s.y+r.y)/2,u=l-Hf;u>Math.PI&&(u-=2*Math.PI),u<-Math.PI&&(u+=2*Math.PI);let d=Or?a-Or:0,v=h-Gf,g=Mu||(Mu={mode:null,rot:0,sc:0,tl:0});g.rot+=u,g.sc+=d,g.tl+=v,g.mode?g.mode==="zoom"&&Math.abs(g.rot)>.45&&(g.mode="rotate"):Math.abs(g.rot)>.3?g.mode="rotate":Math.abs(g.tl)>30&&Math.abs(g.sc)<18?g.mode="tilt":Math.abs(g.sc)>12&&(g.mode="zoom"),(g.mode==="zoom"||g.mode==="rotate")&&Or&&(Ce.dist=ti(Ce.dist*Or/a,6,400)),g.mode==="rotate"&&(Ce.yaw+=u,wn.yaw=Ce.yaw),g.mode==="tilt"&&(Ce.tilt=ti(Ce.tilt-v*.006,0,1.32),wn.tilt=Ce.tilt),Or=a,Hf=l,Gf=h,zn();return}if(_i.moved+=Math.abs(e)+Math.abs(n),_i.rot||i.altKey)Ce.yaw+=e*.005,Ce.tilt=ti(Ce.tilt+n*.004,0,1.32),wn.yaw=Ce.yaw,wn.tilt=Ce.tilt;else{let s=2*wn.dist*Math.tan(wu*Math.PI/360)/innerHeight,r=Math.sin(wn.yaw),a=Math.cos(wn.yaw),l=1/Math.max(Math.cos(wn.tilt),.3);Ce.tx=ti(Ce.tx-a*e*s+-r*n*s*l,-70,70),Ce.ty=ti(Ce.ty-r*e*s+a*n*s*l,-70,70),wn.tx=Ce.tx,wn.ty=Ce.ty}zn()});var Rg=i=>{let t=_i&&!_i.rot&&!_i.multi&&_i.moved<(_i.touch?12:6)&&i.type==="pointerup"&&gs.size===1,e=_i&&_i.touch;gs.delete(i.pointerId),Or=0,Mu=null,gs.size||(_i=null),t&&window.__rodTap&&window.__rodTap(i.clientX,i.clientY)};ai.addEventListener("pointerup",Rg);ai.addEventListener("pointercancel",Rg);ai.addEventListener("dblclick",jf);addEventListener("keydown",i=>{i.key==="Alt"&&(ai.style.cursor="move")});addEventListener("keyup",i=>{i.key==="Alt"&&(ai.style.cursor="")});addEventListener("blur",()=>{ai.style.cursor=""});var c1=new sl,gg=new zt,Ls=null,Wf=0,Br=null;function h1(){if(Wf=0,!Ls||_i)return;gg.set(Ls.x/innerWidth*2-1,-(Ls.y/innerHeight)*2+1),c1.setFromCamera(gg,_s);let i=null;if(i!==Br){let e=Br;Br=i,e&&zr(e),i&&zr(i),zn()}let t=window.__rodHover&&window.__rodHover(Ls.x,Ls.y);if(t){Fr.innerHTML=t,Fr.style.display="block";let e=Fr.offsetWidth,n=Fr.offsetHeight;Fr.style.left=ti(Ls.x+14,6,innerWidth-e-6)+"px",Fr.style.top=ti(Ls.y+14,6,innerHeight-n-6)+"px",ai.style.cursor="pointer"}else Qf(),ai.style.cursor=""}ai.addEventListener("pointerleave",()=>{if(Ls=null,Br){let i=Br;Br=null,zr(i),zn()}Qf()});var Fr=$e("#tip");function Qf(){Fr.style.display="none"}document.querySelectorAll("[data-metric]").forEach(i=>i.onclick=()=>{Yf=i.dataset.metric,document.querySelectorAll("[data-metric]").forEach(t=>t.classList.toggle("on",t===i)),Tg()});document.querySelectorAll("[data-mode]").forEach(i=>i.onclick=()=>{qf=i.dataset.mode,document.querySelectorAll("[data-mode]").forEach(t=>t.classList.toggle("on",t===i)),Tu()});$e("#yaw").oninput=i=>{Ce.yaw=+i.target.value*Math.PI/180,zn()};$e("#tilt").oninput=i=>{Ce.tilt=+i.target.value*Math.PI/180,zn()};$e("#zin").onclick=()=>{Ce.dist=ti(Ce.dist*.75,6,400),zn()};$e("#zout").onclick=()=>{Ce.dist=ti(Ce.dist/.75,6,400),zn()};$e("#rst").onclick=jf;var _g=["#2563eb","#059669","#7c3aed","#db2777","#0891b2","#ca8a04"],dn=[],xg={},u1=i=>xg[i]||(xg[i]=new Tr({color:i}));function Ig(i,t){i.og.children.forEach(e=>e.material=t?u1(t):vu)}function zr(i,t=0){let e=i.mat.emissive;i===Br?e.setHex(5592405):i.sel?e.copy(i.sel.tint):e.setHex(0),t&&e.addScalar(t)}function tp(i,t){let e=1e9,n=-1e9,s=1e9,r=-1e9;for(let u of i)e=Math.min(e,u.cx-u.size/2),n=Math.max(n,u.cx+u.size/2),s=Math.min(s,u.cy-u.size/2),r=Math.max(r,u.cy+u.size/2);let a=innerWidth/innerHeight,l=Math.tan(wu*Math.PI/360),h=i.length===1?ti(i[0].size*3.2+14,14,120):ti(Math.max((r-s)*1.5,(n-e)*1.5/a)/(2*l)+6,14,300);Object.assign(Ce,{tx:(e+n)/2,ty:(s+r)/2,dist:h,tilt:t,yaw:0}),zn()}var sr=$e("#q"),bi=$e("#list"),un=$e("#mcs");function Au(i,t=!0){if(bi.style.display="none",sr.value="",!i.sel){dn.length>=6&&Pg(dn[0].o,!0);let e=new Set(dn.map(s=>s.color)),n=_g.find(s=>!e.has(s))||_g[0];i.sel={o:i,color:n,tint:new xe(n).multiplyScalar(.12)},dn.push(i.sel),Ig(i,n)}un.classList.contains("min")&&wl(!1),Ba.set(i,performance.now()),zr(i),t&&tp([i],Math.max(Ce.tilt,.9)),rr()}function Pg(i,t){let e=dn.indexOf(i.sel);e>=0&&dn.splice(e,1),i.sel=null,Ig(i,null),zr(i),zn(),t||rr()}function Lg(i){let t=Math.min(devicePixelRatio||1,2),e=i.clientWidth,n=i.clientHeight;i.width=e*t,i.height=n*t;let s=i.getContext("2d");s.scale(t,t),s.clearRect(0,0,e,n);let r=dn.map(d=>{let v=1e9,g=-1e9,S=1e9,w=-1e9;for(let L of d.o.rings)for(let _=0;_<L[0].length;_+=2)v=Math.min(v,L[0][_]),g=Math.max(g,L[0][_]),S=Math.min(S,L[0][_+1]),w=Math.max(w,L[0][_+1]);return{x0:v,x1:g,y0:S,y1:w}}),a=Math.max(...r.map(d=>Math.max(d.x1-d.x0,d.y1-d.y0))),l=(Math.min(e,n)-22)/a;dn.forEach((d,v)=>{let g=r[v],S=(g.x0+g.x1)/2,w=(g.y0+g.y1)/2;s.beginPath();for(let L of d.o.rings)for(let _ of L)for(let m=0;m<_.length;m+=2){let z=e/2+(_[m]-S)*l,$=n/2-(_[m+1]-w)*l;m?s.lineTo(z,$):s.moveTo(z,$),m===_.length-2&&s.closePath()}s.fillStyle=d.color+"40",s.fill("evenodd"),s.lineWidth=1.6,s.strokeStyle=d.color,s.stroke()});let h=l/t1,u=[.5,1,2,5,10,20,50,100].find(d=>d*h>=28)||100;s.fillStyle="#6b7385",s.fillRect(10,n-12,u*h,2),s.font="10px system-ui",s.fillText(u+" km",12+u*h,n-8)}function rr(){if(!dn.length){un.innerHTML="",un.style.display="none",wl(!1);return}if(un.style.display="flex",innerWidth<=640){let e=$e("#inf").getBoundingClientRect().bottom;un.style.top=Math.round(e+8)+"px",un.style.maxHeight=Math.max(110,Math.min(innerHeight*($e("#rc").classList.contains("min")?.7:.4),$e("#rc").getBoundingClientRect().top-e-16))+"px",un.style.width=""}else if(innerHeight<=500){let e=$e("#inf").getBoundingClientRect().bottom;un.style.top=Math.round(e+8)+"px",un.style.maxHeight=Math.max(120,innerHeight-e-20)+"px",un.style.width="min(290px, 40vw)"}else un.style.top="",un.style.maxHeight="",un.style.width="";window.__fitMcs&&window.__fitMcs();let i=dn.map((e,n)=>{let s=e.o;return`<div class="mc" draggable="true" data-i="${n}" style="--c:${e.color}"><button class="x" data-x="${n}" title="Cerrar">\xD7</button><div class="mh"><i class="dot"></i><b>${s.name}</b><em>${gu[s.pr]}</em></div><div class="mb">${Ds(s.pop)}${__t(543)}${Fa(s.area)} km\xB2 \xB7 ${Fa(s.pop/s.area)}${__t(544)}${s.rankP}${__t(545)}`}).join("");if(dn.length>1){let e=s=>Math.max(...dn.map(s)),n=[[__t(546),s=>s.o.pop,Ds],[__t(547),s=>s.o.area,Fa],[__t(548),s=>s.o.pop/s.o.area,Fa]];if(i+=`${__t(549)}`+n.map(([s,r,a])=>`<div class="cr"><span>${s}</span>${dn.map(l=>`<div class="bw"><i style="width:${Math.max(2,r(l)/e(r)*100)}%;background:${l.color}"></i><b>${a(r(l))}</b></div>`).join("")}</div>`).join(""),dn.length===2){let[s,r]=dn.map(u=>u.o),[a,l]=s.pop>=r.pop?[s,r]:[r,s],h=(u,d)=>(u>=d?u/d:d/u).toLocaleString("es-ES",{maximumFractionDigits:1});i+=`<small class="ratio"><b>${a.name}${__t(550)}${h(a.pop,l.pop)}${__t(551)}${l.name}${__t(552)}${h(a.area,l.area)}\xD7 ${a.area>=l.area?__t(553):__t(554)}.</small>`}i+="</div>"}un.innerHTML=i,un.querySelectorAll("[data-x]").forEach(e=>e.onclick=n=>{n.stopPropagation(),Pg(dn[+e.dataset.x].o)}),un.querySelectorAll(".mc").forEach(e=>{e.onclick=()=>tp([dn[+e.dataset.i].o],Math.max(Ce.tilt,.9)),e.onmouseenter=()=>{let n=dn[+e.dataset.i].o;Ba.set(n,performance.now())},e.ondragstart=n=>{n.dataTransfer.setData("text/plain",e.dataset.i),e.classList.add("drag")},e.ondragend=()=>e.classList.remove("drag"),e.ondragover=n=>{n.preventDefault(),e.classList.add("over")},e.ondragleave=()=>e.classList.remove("over"),e.ondrop=n=>{n.preventDefault();let s=+n.dataTransfer.getData("text/plain"),r=+e.dataset.i;if(s!==r){let[a]=dn.splice(s,1);dn.splice(r,0,a),rr();let l=$e("#sil");l&&l.classList.add("flash")}}});let t=$e("#sil");t&&Lg(t)}sr.addEventListener("input",()=>{if(window.__rodSearch){window.__rodSearch(sr.value);return}let i=kf(sr.value.trim());if(!i){bi.style.display="none";return}let t=[],e=[];for(let s of yn){let r=kf(s.name);r.startsWith(i)?t.push(s):r.includes(i)&&e.push(s)}let n=t.sort((s,r)=>r.pop-s.pop).concat(e.sort((s,r)=>r.pop-s.pop)).slice(0,8);bi.innerHTML=n.map((s,r)=>`<li data-i="${r}">${s.name}<em>${Ds(s.pop)}</em></li>`).join("")||__t(510),bi.style.display="block",bi.querySelectorAll("li[data-i]").forEach(s=>s.onclick=()=>Au(n[+s.dataset.i])),bi._r=n});sr.addEventListener("keydown",i=>{i.key==="Enter"&&bi._pick?bi._pick(0):i.key==="Enter"&&bi._r&&bi._r[0]&&Au(bi._r[0]),i.key==="Escape"&&(sr.value="",bi.style.display="none")});addEventListener("keydown",i=>{i.key==="Escape"&&i.target!==sr&&Dg()});var vg=0;addEventListener("resize",()=>{clearTimeout(vg),vg=setTimeout(()=>{let i=$e("#sil");i&&Lg(i)},120)});var bu=null,Xf=$e("#chip");function d1(i,t,e=.8){bu={codes:new Set(i.map(n=>n.code)),label:t},yn.forEach(n=>{n.inF=bu.codes.has(n.code),Eu(n)}),Xf.innerHTML=`${__t(555)}${t}</b> \xB7 ${i.length}${i.length===1?__t(556):__t(557)}</span><button id="chx" title="Quitar filtro">\xD7</button>`,Xf.style.display="flex",$e("#chx").onclick=Dg,Tu(),tp(i,e),i.slice(0,40).forEach(n=>Ba.set(n,performance.now()))}function Dg(){bu&&(bu=null,yn.forEach(i=>{i.inF=!0,Eu(i)}),Xf.style.display="none",Tu())}var f1="prov";function p1(i){let t=[...yn].sort((a,l)=>l.pop-a.pop),e=[...yn].sort((a,l)=>l.pop/l.area-a.pop/a.area),[n,s,r]=i.split(":");if(n==="pr")return[yn.filter(a=>a.pr===s),bg[s]];if(n==="top")return s==="pop"?[t.slice(0,10),__t(558)]:[e.slice(0,10),__t(559)];if(n==="low")return s==="pop"?[t.slice(-10),__t(560)]:[e.slice(-10),__t(561)];if(n==="size")return[yn.filter(a=>a.pop>=+s&&a.pop<+r),+r>1e9?`${Ds(+s)}${__t(562)}`:+s==0?`${__t(563)}${Ds(+r)}${__t(564)}`:`${Ds(+s)} \u2013 ${Ds(+r-1)}${__t(564)}`];if(n==="n50"){let a=0,l=0;for(let h of t)if(a+=h.pop,l++,a>=$f/2)break;return[t.slice(0,l),`${__t(565)}`]}return[[],""]}function m1(i){let[t,e]=p1(i);t.length&&d1(t,e,i.startsWith("pr:")?.75:.8)}document.querySelectorAll("[data-tab]").forEach(i=>i.onclick=()=>{f1=i.dataset.tab,$e("#dbody").scrollTop=0});var kr=$e("#rc"),xu=$e("#mcstab");function ka(i){kr.classList.toggle("min",i),$e("#rcgrab span").textContent=i?__t(607):__t(608),dn.length&&rr()}function wl(i){un.classList.toggle("min",i),un.style.transform="",un.style.opacity="",xu.classList.toggle("on",i&&dn.length>0),i&&(xu.textContent=`\u25B8 ${dn.length} ${dn.length===1?"ficha":"fichas"}`,xu.style.top=un.style.top||"124px")}function ep(i,{onMove:t,onEnd:e,axis:n}){let s=null;i.addEventListener("pointerdown",a=>{a.pointerType==="mouse"||!Cu.matches||a.target.closest("input,button:not(#rcgrab),.seg")||(s={x:a.clientX,y:a.clientY,id:a.pointerId,lock:null})}),addEventListener("pointermove",a=>{if(!s||a.pointerId!==s.id)return;let l=a.clientX-s.x,h=a.clientY-s.y;!s.lock&&Math.hypot(l,h)>10&&(s.lock=Math.abs(l)>Math.abs(h)?"x":"y"),s.lock===n&&t&&t(l,h)});let r=a=>{if(!s||a.pointerId!==s.id)return;let l=a.clientX-s.x,h=a.clientY-s.y,u=s.lock;s=null,e(u===n?l:0,u===n?h:0,u)};addEventListener("pointerup",r,!0),addEventListener("pointercancel",r,!0)}$e("#rcgrab").onclick=()=>ka(!kr.classList.contains("min"));(innerWidth<=640||matchMedia("(max-height:500px) and (pointer:coarse)").matches||document.documentElement.classList.contains("cap"))&&ka(!0);requestAnimationFrame(()=>document.documentElement.classList.remove("boot"));var Ng=()=>innerWidth>640;ep(kr,{axis:"y",onEnd:(i,t)=>{if(!Ng())if(t>40&&!kr.classList.contains("min")){let e=$e("#dp.open #dbody");(!e||e.scrollTop<=0||t>120)&&ka(!0)}else t<-30&&kr.classList.contains("min")&&ka(!1)}});ep(kr,{axis:"x",onEnd:i=>{Ng()&&(i>50?ka(!0):i<-30&&kr.classList.contains("min")&&ka(!1))}});ep(un,{axis:"x",onMove:i=>{i<0&&(un.classList.add("sw"),un.style.transform=`translateX(${i}px)`,un.style.opacity=Math.max(.2,1+i/300))},onEnd:i=>{un.classList.remove("sw"),i<-60?(wl(!0),window.__rodHide&&!dn.length&&window.__rodHide()):(un.style.transform="",un.style.opacity="")}});xu.onclick=()=>{wl(!1),rr()};$e("#dtoggle").onclick=()=>{let i=$e("#dp").classList.toggle("open");$e("#rc").classList.toggle("dopen",i),$e("#dtoggle").textContent=i?Cu.matches&&innerWidth<=640?__t(609):__t(610):__t(611),window.__rodCard&&window.__rodCard()};var Cu=matchMedia("(max-width:640px), (max-height:500px)");function Ug(){let i=$e("#leg");Cu.matches?$e("#rc").insertBefore(i,$e("#dtoggle")):document.body.appendChild(i),dn.length&&rr()}Cu.addEventListener("change",Ug);Ug();Cg();i1();jf();Object.assign(wn,Ce);for(let i of yn)i.z=.01;requestAnimationFrame(Oa);dg({scene:Ns,camera:_s,renderer:bl,goal:Ce,cur:wn,invalidate:zn,flyTo:(i,t,e,n)=>{Object.assign(Ce,{tx:(i-Sl)*ms,ty:(t-Ml)*ms,dist:e,tilt:n}),zn()},K:ms,CX:Sl,CY:Ml,mcs:un,q:sr,list:bi,munis:yn,select:Au,norm:kf,fmt:Ds,clamp:ti,mcsMin:wl});window.__app={scene:Ns,renderer:bl,camera:_s,munis:yn,labs:Su,goal:Ce,cur:wn,select:Au,get mode(){return qf}};window.__ready=!0;{let i=document.getElementById("ttb"),t=document.getElementById("p");i&&t&&i.addEventListener("click",()=>{let e=t.classList.toggle("tt");i.textContent=e?__t(617):__t(618)})}})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
