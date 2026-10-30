(()=>{var am=0,Md=1,om=2;var Zo=1,lm=2,va=3,ks=0,Jn=1,Ji=2,ji=0,ya=1,bd=2,wd=3,Ed=4,cm=5;var gr=100,hm=101,um=102,dm=103,fm=104,pm=200,mm=201,gm=202,_m=203,Td=204,Ad=205,xm=206,vm=207,ym=208,Sm=209,Mm=210,bm=211,wm=212,Em=213,Tm=214,uc=0,dc=1,fc=2,aa=3,pc=4,mc=5,gc=6,_c=7,Kc=0,Am=1,Cm=2,Ui=0,Cd=1,Rd=2,Id=3,Pd=4,Ld=5,Dd=6,Nd=7;var Ud=300,zs=301,_r=302,Qc=303,th=304,Jo=306,xc=1e3,Gi=1001,vc=1002,Cn=1003,Rm=1004;var jo=1005;var Un=1006,eh=1007;var $s=1008;var ri=1009,Fd=1010,Od=1011,Sa=1012,nh=1013,Fi=1014,Si=1015,Oi=1016,ih=1017,sh=1018,Ma=1020,Bd=35902,kd=35899,zd=1021,$d=1022,Mi=1023,Xi=1026,Vs=1027,rh=1028,ah=1029,Hs=1030,oh=1031;var lh=1033,Ko=33776,Qo=33777,tl=33778,el=33779,ch=35840,hh=35841,uh=35842,dh=35843,fh=36196,ph=37492,mh=37496,gh=37488,_h=37489,nl=37490,xh=37491,vh=37808,yh=37809,Sh=37810,Mh=37811,bh=37812,wh=37813,Eh=37814,Th=37815,Ah=37816,Ch=37817,Rh=37818,Ih=37819,Ph=37820,Lh=37821,Dh=36492,Nh=36494,Uh=36495,Fh=36283,Oh=36284,il=36285,Bh=36286;var po=2300,yc=2301,cc=2302,cd=2303,hd=2400,ud=2401,dd=2402;var Im=3200;var kh=0,Pm=1,Ss="",ui="srgb",mo="srgb-linear",go="linear",Ke="srgb";var hc=7680;var Lm=519,Dm=512,Nm=513,Um=514,zh=515,Fm=516,Om=517,$h=518,Bm=519,Vd=35044;var Hd="300 es",Li=2e3,oa=2001;function J0(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function j0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function _o(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function km(){let i=_o("canvas");return i.style.display="block",i}var Mp={},la=null;function xo(...i){let t="THREE."+i.shift();la?la("log",t,...i):console.log(t,...i)}function zm(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function xe(...i){i=zm(i);let t="THREE."+i.shift();if(la)la("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function ye(...i){i=zm(i);let t="THREE."+i.shift();if(la)la("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function cr(...i){let t=i.join(" ");t in Mp||(Mp[t]=!0,xe(...i))}function $m(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Vm={[uc]:dc,[fc]:gc,[pc]:_c,[aa]:mc,[dc]:uc,[gc]:fc,[_c]:pc,[mc]:aa},qi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},zn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],bp=1234567,co=Math.PI/180,ca=180/Math.PI;function Wi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(zn[i&255]+zn[i>>8&255]+zn[i>>16&255]+zn[i>>24&255]+"-"+zn[t&255]+zn[t>>8&255]+"-"+zn[t>>16&15|64]+zn[t>>24&255]+"-"+zn[e&63|128]+zn[e>>8&255]+"-"+zn[e>>16&255]+zn[e>>24&255]+zn[n&255]+zn[n>>8&255]+zn[n>>16&255]+zn[n>>24&255]).toLowerCase()}function Re(i,t,e){return Math.max(t,Math.min(e,i))}function Gd(i,t){return(i%t+t)%t}function K0(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Q0(i,t,e){return i!==t?(e-i)/(t-i):0}function ho(i,t,e){return(1-e)*i+e*t}function t_(i,t,e,n){return ho(i,t,1-Math.exp(-e*n))}function e_(i,t=1){return t-Math.abs(Gd(i,t*2)-t)}function n_(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function i_(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function s_(i,t){return i+Math.floor(Math.random()*(t-i+1))}function r_(i,t){return i+Math.random()*(t-i)}function a_(i){return i*(.5-Math.random())}function o_(i){i!==void 0&&(bp=i);let t=bp+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function l_(i){return i*co}function c_(i){return i*ca}function h_(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function u_(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function d_(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function f_(i,t,e,n,s){let r=Math.cos,a=Math.sin,l=r(e/2),c=a(e/2),h=r((t+n)/2),d=a((t+n)/2),v=r((t-n)/2),f=a((t-n)/2),y=r((n-t)/2),S=a((n-t)/2);switch(s){case"XYX":i.set(l*d,c*v,c*f,l*h);break;case"YZY":i.set(c*f,l*d,c*v,l*h);break;case"ZXZ":i.set(c*v,c*f,l*d,l*h);break;case"XZX":i.set(l*d,c*S,c*y,l*h);break;case"YXY":i.set(c*y,l*d,c*S,l*h);break;case"ZYZ":i.set(c*S,c*y,l*d,l*h);break;default:xe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Pi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function tn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Wd={DEG2RAD:co,RAD2DEG:ca,generateUUID:Wi,clamp:Re,euclideanModulo:Gd,mapLinear:K0,inverseLerp:Q0,lerp:ho,damp:t_,pingpong:e_,smoothstep:n_,smootherstep:i_,randInt:s_,randFloat:r_,randFloatSpread:a_,seededRandom:o_,degToRad:l_,radToDeg:c_,isPowerOfTwo:h_,ceilPowerOfTwo:u_,floorPowerOfTwo:d_,setQuaternionFromProperEuler:f_,normalize:tn,denormalize:Pi},$t=class i{static{i.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Re(this.x,t.x,e.x),this.y=Re(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Re(this.x,t,e),this.y=Re(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Yi=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,l){let c=n[s+0],h=n[s+1],d=n[s+2],v=n[s+3],f=r[a+0],y=r[a+1],S=r[a+2],I=r[a+3];if(v!==I||c!==f||h!==y||d!==S){let _=c*f+h*y+d*S+v*I;_<0&&(f=-f,y=-y,S=-S,I=-I,_=-_);let m=1-l;if(_<.9995){let O=Math.acos(_),B=Math.sin(O);m=Math.sin(m*O)/B,l=Math.sin(l*O)/B,c=c*m+f*l,h=h*m+y*l,d=d*m+S*l,v=v*m+I*l}else{c=c*m+f*l,h=h*m+y*l,d=d*m+S*l,v=v*m+I*l;let O=1/Math.sqrt(c*c+h*h+d*d+v*v);c*=O,h*=O,d*=O,v*=O}}t[e]=c,t[e+1]=h,t[e+2]=d,t[e+3]=v}static multiplyQuaternionsFlat(t,e,n,s,r,a){let l=n[s],c=n[s+1],h=n[s+2],d=n[s+3],v=r[a],f=r[a+1],y=r[a+2],S=r[a+3];return t[e]=l*S+d*v+c*y-h*f,t[e+1]=c*S+d*f+h*v-l*y,t[e+2]=h*S+d*y+l*f-c*v,t[e+3]=d*S-l*v-c*f-h*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,l=Math.cos,c=Math.sin,h=l(n/2),d=l(s/2),v=l(r/2),f=c(n/2),y=c(s/2),S=c(r/2);switch(a){case"XYZ":this._x=f*d*v+h*y*S,this._y=h*y*v-f*d*S,this._z=h*d*S+f*y*v,this._w=h*d*v-f*y*S;break;case"YXZ":this._x=f*d*v+h*y*S,this._y=h*y*v-f*d*S,this._z=h*d*S-f*y*v,this._w=h*d*v+f*y*S;break;case"ZXY":this._x=f*d*v-h*y*S,this._y=h*y*v+f*d*S,this._z=h*d*S+f*y*v,this._w=h*d*v-f*y*S;break;case"ZYX":this._x=f*d*v-h*y*S,this._y=h*y*v+f*d*S,this._z=h*d*S-f*y*v,this._w=h*d*v+f*y*S;break;case"YZX":this._x=f*d*v+h*y*S,this._y=h*y*v+f*d*S,this._z=h*d*S-f*y*v,this._w=h*d*v-f*y*S;break;case"XZY":this._x=f*d*v-h*y*S,this._y=h*y*v-f*d*S,this._z=h*d*S+f*y*v,this._w=h*d*v+f*y*S;break;default:xe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],l=e[5],c=e[9],h=e[2],d=e[6],v=e[10],f=n+l+v;if(f>0){let y=.5/Math.sqrt(f+1);this._w=.25/y,this._x=(d-c)*y,this._y=(r-h)*y,this._z=(a-s)*y}else if(n>l&&n>v){let y=2*Math.sqrt(1+n-l-v);this._w=(d-c)/y,this._x=.25*y,this._y=(s+a)/y,this._z=(r+h)/y}else if(l>v){let y=2*Math.sqrt(1+l-n-v);this._w=(r-h)/y,this._x=(s+a)/y,this._y=.25*y,this._z=(c+d)/y}else{let y=2*Math.sqrt(1+v-n-l);this._w=(a-s)/y,this._x=(r+h)/y,this._y=(c+d)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Re(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,l=e._x,c=e._y,h=e._z,d=e._w;return this._x=n*d+a*l+s*h-r*c,this._y=s*d+a*c+r*l-n*h,this._z=r*d+a*h+n*c-s*l,this._w=a*d-n*l-s*c-r*h,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,l=this.dot(t);l<0&&(n=-n,s=-s,r=-r,a=-a,l=-l);let c=1-e;if(l<.9995){let h=Math.acos(l),d=Math.sin(h);c=Math.sin(c*h)/d,e=Math.sin(e*h)/d,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},X=class i{static{i.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(wp.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(wp.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,l=t.z,c=t.w,h=2*(a*s-l*n),d=2*(l*e-r*s),v=2*(r*n-a*e);return this.x=e+c*h+a*v-l*d,this.y=n+c*d+l*h-r*v,this.z=s+c*v+r*d-a*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Re(this.x,t.x,e.x),this.y=Re(this.y,t.y,e.y),this.z=Re(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Re(this.x,t,e),this.y=Re(this.y,t,e),this.z=Re(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,l=e.y,c=e.z;return this.x=s*c-r*l,this.y=r*a-n*c,this.z=n*l-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ou.copy(this).projectOnVector(t),this.sub(Ou)}reflect(t){return this.sub(Ou.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ou=new X,wp=new Yi,Ae=class i{static{i.prototype.isMatrix3=!0}constructor(t,e,n,s,r,a,l,c,h){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,l,c,h)}set(t,e,n,s,r,a,l,c,h){let d=this.elements;return d[0]=t,d[1]=s,d[2]=l,d[3]=e,d[4]=r,d[5]=c,d[6]=n,d[7]=a,d[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],l=n[3],c=n[6],h=n[1],d=n[4],v=n[7],f=n[2],y=n[5],S=n[8],I=s[0],_=s[3],m=s[6],O=s[1],B=s[4],R=s[7],E=s[2],F=s[5],G=s[8];return r[0]=a*I+l*O+c*E,r[3]=a*_+l*B+c*F,r[6]=a*m+l*R+c*G,r[1]=h*I+d*O+v*E,r[4]=h*_+d*B+v*F,r[7]=h*m+d*R+v*G,r[2]=f*I+y*O+S*E,r[5]=f*_+y*B+S*F,r[8]=f*m+y*R+S*G,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],l=t[5],c=t[6],h=t[7],d=t[8];return e*a*d-e*l*h-n*r*d+n*l*c+s*r*h-s*a*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],l=t[5],c=t[6],h=t[7],d=t[8],v=d*a-l*h,f=l*c-d*r,y=h*r-a*c,S=e*v+n*f+s*y;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);let I=1/S;return t[0]=v*I,t[1]=(s*h-d*n)*I,t[2]=(l*n-s*a)*I,t[3]=f*I,t[4]=(d*e-s*c)*I,t[5]=(s*r-l*e)*I,t[6]=y*I,t[7]=(n*c-h*e)*I,t[8]=(a*e-n*r)*I,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,l){let c=Math.cos(r),h=Math.sin(r);return this.set(n*c,n*h,-n*(c*a+h*l)+a+t,-s*h,s*c,-s*(-h*a+c*l)+l+e,0,0,1),this}scale(t,e){return cr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Bu.makeScale(t,e)),this}rotate(t){return cr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Bu.makeRotation(-t)),this}translate(t,e){return cr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Bu.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Bu=new Ae,Ep=new Ae().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Tp=new Ae().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function p_(){let i={enabled:!0,workingColorSpace:mo,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Ke&&(s.r=vs(s.r),s.g=vs(s.g),s.b=vs(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ke&&(s.r=ra(s.r),s.g=ra(s.g),s.b=ra(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ss?go:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return cr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return cr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[mo]:{primaries:t,whitePoint:n,transfer:go,toXYZ:Ep,fromXYZ:Tp,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ui},outputColorSpaceConfig:{drawingBufferColorSpace:ui}},[ui]:{primaries:t,whitePoint:n,transfer:Ke,toXYZ:Ep,fromXYZ:Tp,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ui}}}),i}var ke=p_();function vs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ra(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Hr,Sc=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Hr===void 0&&(Hr=_o("canvas")),Hr.width=t.width,Hr.height=t.height;let s=Hr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Hr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=_o("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=vs(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(vs(e[n]/255)*255):e[n]=vs(e[n]);return{data:e,width:t.width,height:t.height}}else return xe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},m_=0,ha=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:m_++}),this.uuid=Wi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,l=s.length;a<l;a++)s[a].isDataTexture?r.push(ku(s[a].image)):r.push(ku(s[a]))}else r=ku(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function ku(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Sc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(xe("Texture: Unable to serialize Texture."),{})}var g_=0,zu=new X,ni=class i extends qi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Gi,s=Gi,r=Un,a=$s,l=Mi,c=ri,h=i.DEFAULT_ANISOTROPY,d=Ss){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:g_++}),this.uuid=Wi(),this.name="",this.source=new ha(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=l,this.internalFormat=null,this.type=c,this.offset=new $t(0,0),this.repeat=new $t(1,1),this.center=new $t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ae,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(zu).x}get height(){return this.source.getSize(zu).y}get depth(){return this.source.getSize(zu).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){xe(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){xe(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ud)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case xc:t.x=t.x-Math.floor(t.x);break;case Gi:t.x=t.x<0?0:1;break;case vc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case xc:t.y=t.y-Math.floor(t.y);break;case Gi:t.y=t.y<0?0:1;break;case vc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ni.DEFAULT_IMAGE=null;ni.DEFAULT_MAPPING=Ud;ni.DEFAULT_ANISOTROPY=1;var Qe=class i{static{i.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,h=c[0],d=c[4],v=c[8],f=c[1],y=c[5],S=c[9],I=c[2],_=c[6],m=c[10];if(Math.abs(d-f)<.01&&Math.abs(v-I)<.01&&Math.abs(S-_)<.01){if(Math.abs(d+f)<.1&&Math.abs(v+I)<.1&&Math.abs(S+_)<.1&&Math.abs(h+y+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let B=(h+1)/2,R=(y+1)/2,E=(m+1)/2,F=(d+f)/4,G=(v+I)/4,T=(S+_)/4;return B>R&&B>E?B<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(B),s=F/n,r=G/n):R>E?R<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(R),n=F/s,r=T/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=G/r,s=T/r),this.set(n,s,r,e),this}let O=Math.sqrt((_-S)*(_-S)+(v-I)*(v-I)+(f-d)*(f-d));return Math.abs(O)<.001&&(O=1),this.x=(_-S)/O,this.y=(v-I)/O,this.z=(f-d)/O,this.w=Math.acos((h+y+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Re(this.x,t.x,e.x),this.y=Re(this.y,t.y,e.y),this.z=Re(this.z,t.z,e.z),this.w=Re(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Re(this.x,t,e),this.y=Re(this.y,t,e),this.z=Re(this.z,t,e),this.w=Re(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Mc=class extends qi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Un,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Qe(0,0,t,e),this.scissorTest=!1,this.viewport=new Qe(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new ni(s),a=n.count;for(let l=0;l<a;l++)this.textures[l]=r.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Un,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new ha(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ii=class extends Mc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},vo=class extends ni{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var bc=class extends ni{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var $e=class i{static{i.prototype.isMatrix4=!0}constructor(t,e,n,s,r,a,l,c,h,d,v,f,y,S,I,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,l,c,h,d,v,f,y,S,I,_)}set(t,e,n,s,r,a,l,c,h,d,v,f,y,S,I,_){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=l,m[13]=c,m[2]=h,m[6]=d,m[10]=v,m[14]=f,m[3]=y,m[7]=S,m[11]=I,m[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Gr.setFromMatrixColumn(t,0).length(),r=1/Gr.setFromMatrixColumn(t,1).length(),a=1/Gr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),l=Math.sin(n),c=Math.cos(s),h=Math.sin(s),d=Math.cos(r),v=Math.sin(r);if(t.order==="XYZ"){let f=a*d,y=a*v,S=l*d,I=l*v;e[0]=c*d,e[4]=-c*v,e[8]=h,e[1]=y+S*h,e[5]=f-I*h,e[9]=-l*c,e[2]=I-f*h,e[6]=S+y*h,e[10]=a*c}else if(t.order==="YXZ"){let f=c*d,y=c*v,S=h*d,I=h*v;e[0]=f+I*l,e[4]=S*l-y,e[8]=a*h,e[1]=a*v,e[5]=a*d,e[9]=-l,e[2]=y*l-S,e[6]=I+f*l,e[10]=a*c}else if(t.order==="ZXY"){let f=c*d,y=c*v,S=h*d,I=h*v;e[0]=f-I*l,e[4]=-a*v,e[8]=S+y*l,e[1]=y+S*l,e[5]=a*d,e[9]=I-f*l,e[2]=-a*h,e[6]=l,e[10]=a*c}else if(t.order==="ZYX"){let f=a*d,y=a*v,S=l*d,I=l*v;e[0]=c*d,e[4]=S*h-y,e[8]=f*h+I,e[1]=c*v,e[5]=I*h+f,e[9]=y*h-S,e[2]=-h,e[6]=l*c,e[10]=a*c}else if(t.order==="YZX"){let f=a*c,y=a*h,S=l*c,I=l*h;e[0]=c*d,e[4]=I-f*v,e[8]=S*v+y,e[1]=v,e[5]=a*d,e[9]=-l*d,e[2]=-h*d,e[6]=y*v+S,e[10]=f-I*v}else if(t.order==="XZY"){let f=a*c,y=a*h,S=l*c,I=l*h;e[0]=c*d,e[4]=-v,e[8]=h*d,e[1]=f*v+I,e[5]=a*d,e[9]=y*v-S,e[2]=S*v-y,e[6]=l*d,e[10]=I*v+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(__,t,x_)}lookAt(t,e,n){let s=this.elements;return ci.subVectors(t,e),ci.lengthSq()===0&&(ci.z=1),ci.normalize(),Cs.crossVectors(n,ci),Cs.lengthSq()===0&&(Math.abs(n.z)===1?ci.x+=1e-4:ci.z+=1e-4,ci.normalize(),Cs.crossVectors(n,ci)),Cs.normalize(),Fl.crossVectors(ci,Cs),s[0]=Cs.x,s[4]=Fl.x,s[8]=ci.x,s[1]=Cs.y,s[5]=Fl.y,s[9]=ci.y,s[2]=Cs.z,s[6]=Fl.z,s[10]=ci.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],l=n[4],c=n[8],h=n[12],d=n[1],v=n[5],f=n[9],y=n[13],S=n[2],I=n[6],_=n[10],m=n[14],O=n[3],B=n[7],R=n[11],E=n[15],F=s[0],G=s[4],T=s[8],N=s[12],H=s[1],q=s[5],st=s[9],ot=s[13],J=s[2],Q=s[6],ht=s[10],ft=s[14],Tt=s[3],pt=s[7],Mt=s[11],St=s[15];return r[0]=a*F+l*H+c*J+h*Tt,r[4]=a*G+l*q+c*Q+h*pt,r[8]=a*T+l*st+c*ht+h*Mt,r[12]=a*N+l*ot+c*ft+h*St,r[1]=d*F+v*H+f*J+y*Tt,r[5]=d*G+v*q+f*Q+y*pt,r[9]=d*T+v*st+f*ht+y*Mt,r[13]=d*N+v*ot+f*ft+y*St,r[2]=S*F+I*H+_*J+m*Tt,r[6]=S*G+I*q+_*Q+m*pt,r[10]=S*T+I*st+_*ht+m*Mt,r[14]=S*N+I*ot+_*ft+m*St,r[3]=O*F+B*H+R*J+E*Tt,r[7]=O*G+B*q+R*Q+E*pt,r[11]=O*T+B*st+R*ht+E*Mt,r[15]=O*N+B*ot+R*ft+E*St,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],l=t[5],c=t[9],h=t[13],d=t[2],v=t[6],f=t[10],y=t[14],S=t[3],I=t[7],_=t[11],m=t[15],O=c*y-h*f,B=l*y-h*v,R=l*f-c*v,E=a*y-h*d,F=a*f-c*d,G=a*v-l*d;return e*(I*O-_*B+m*R)-n*(S*O-_*E+m*F)+s*(S*B-I*E+m*G)-r*(S*R-I*F+_*G)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10];return e*(a*d-l*h)-n*(r*d-l*c)+s*(r*h-a*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],l=t[5],c=t[6],h=t[7],d=t[8],v=t[9],f=t[10],y=t[11],S=t[12],I=t[13],_=t[14],m=t[15],O=e*l-n*a,B=e*c-s*a,R=e*h-r*a,E=n*c-s*l,F=n*h-r*l,G=s*h-r*c,T=d*I-v*S,N=d*_-f*S,H=d*m-y*S,q=v*_-f*I,st=v*m-y*I,ot=f*m-y*_,J=O*ot-B*st+R*q+E*H-F*N+G*T;if(J===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let Q=1/J;return t[0]=(l*ot-c*st+h*q)*Q,t[1]=(s*st-n*ot-r*q)*Q,t[2]=(I*G-_*F+m*E)*Q,t[3]=(f*F-v*G-y*E)*Q,t[4]=(c*H-a*ot-h*N)*Q,t[5]=(e*ot-s*H+r*N)*Q,t[6]=(_*R-S*G-m*B)*Q,t[7]=(d*G-f*R+y*B)*Q,t[8]=(a*st-l*H+h*T)*Q,t[9]=(n*H-e*st-r*T)*Q,t[10]=(S*F-I*R+m*O)*Q,t[11]=(v*R-d*F-y*O)*Q,t[12]=(l*N-a*q-c*T)*Q,t[13]=(e*q-n*N+s*T)*Q,t[14]=(I*B-S*E-_*O)*Q,t[15]=(d*E-v*B+f*O)*Q,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,l=t.y,c=t.z,h=r*a,d=r*l;return this.set(h*a+n,h*l-s*c,h*c+s*l,0,h*l+s*c,d*l+n,d*c-s*a,0,h*c-s*l,d*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,l=e._z,c=e._w,h=r+r,d=a+a,v=l+l,f=r*h,y=r*d,S=r*v,I=a*d,_=a*v,m=l*v,O=c*h,B=c*d,R=c*v,E=n.x,F=n.y,G=n.z;return s[0]=(1-(I+m))*E,s[1]=(y+R)*E,s[2]=(S-B)*E,s[3]=0,s[4]=(y-R)*F,s[5]=(1-(f+m))*F,s[6]=(_+O)*F,s[7]=0,s[8]=(S+B)*G,s[9]=(_-O)*G,s[10]=(1-(f+I))*G,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Gr.set(s[0],s[1],s[2]).length(),l=Gr.set(s[4],s[5],s[6]).length(),c=Gr.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Ai.copy(this);let h=1/a,d=1/l,v=1/c;return Ai.elements[0]*=h,Ai.elements[1]*=h,Ai.elements[2]*=h,Ai.elements[4]*=d,Ai.elements[5]*=d,Ai.elements[6]*=d,Ai.elements[8]*=v,Ai.elements[9]*=v,Ai.elements[10]*=v,e.setFromRotationMatrix(Ai),n.x=a,n.y=l,n.z=c,this}makePerspective(t,e,n,s,r,a,l=Li,c=!1){let h=this.elements,d=2*r/(e-t),v=2*r/(n-s),f=(e+t)/(e-t),y=(n+s)/(n-s),S,I;if(c)S=r/(a-r),I=a*r/(a-r);else if(l===Li)S=-(a+r)/(a-r),I=-2*a*r/(a-r);else if(l===oa)S=-a/(a-r),I=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return h[0]=d,h[4]=0,h[8]=f,h[12]=0,h[1]=0,h[5]=v,h[9]=y,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=I,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,n,s,r,a,l=Li,c=!1){let h=this.elements,d=2/(e-t),v=2/(n-s),f=-(e+t)/(e-t),y=-(n+s)/(n-s),S,I;if(c)S=1/(a-r),I=a/(a-r);else if(l===Li)S=-2/(a-r),I=-(a+r)/(a-r);else if(l===oa)S=-1/(a-r),I=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return h[0]=d,h[4]=0,h[8]=0,h[12]=f,h[1]=0,h[5]=v,h[9]=0,h[13]=y,h[2]=0,h[6]=0,h[10]=S,h[14]=I,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Gr=new X,Ai=new $e,__=new X(0,0,0),x_=new X(1,1,1),Cs=new X,Fl=new X,ci=new X,Ap=new $e,Cp=new Yi,ys=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],l=s[8],c=s[1],h=s[5],d=s[9],v=s[2],f=s[6],y=s[10];switch(e){case"XYZ":this._y=Math.asin(Re(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,y),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Re(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(l,y),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-v,r),this._z=0);break;case"ZXY":this._x=Math.asin(Re(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Re(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(f,y),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(Re(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,h),this._y=Math.atan2(-v,r)):(this._x=0,this._y=Math.atan2(l,y));break;case"XZY":this._z=Math.asin(-Re(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,h),this._y=Math.atan2(l,r)):(this._x=Math.atan2(-d,y),this._y=0);break;default:xe("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ap.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ap,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Cp.setFromEuler(this),this.setFromQuaternion(Cp,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ys.DEFAULT_ORDER="XYZ";var ua=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},v_=0,Rp=new X,Wr=new Yi,ps=new $e,Ol=new X,eo=new X,y_=new X,S_=new Yi,Ip=new X(1,0,0),Pp=new X(0,1,0),Lp=new X(0,0,1),Dp={type:"added"},M_={type:"removed"},Xr={type:"childadded",child:null},$u={type:"childremoved",child:null},Rn=class i extends qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:v_++}),this.uuid=Wi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new X,e=new ys,n=new Yi,s=new X(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new $e},normalMatrix:{value:new Ae}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ua,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Wr.setFromAxisAngle(t,e),this.quaternion.multiply(Wr),this}rotateOnWorldAxis(t,e){return Wr.setFromAxisAngle(t,e),this.quaternion.premultiply(Wr),this}rotateX(t){return this.rotateOnAxis(Ip,t)}rotateY(t){return this.rotateOnAxis(Pp,t)}rotateZ(t){return this.rotateOnAxis(Lp,t)}translateOnAxis(t,e){return Rp.copy(t).applyQuaternion(this.quaternion),this.position.add(Rp.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ip,t)}translateY(t){return this.translateOnAxis(Pp,t)}translateZ(t){return this.translateOnAxis(Lp,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ps.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ol.copy(t):Ol.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),eo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ps.lookAt(eo,Ol,this.up):ps.lookAt(Ol,eo,this.up),this.quaternion.setFromRotationMatrix(ps),s&&(ps.extractRotation(s.matrixWorld),Wr.setFromRotationMatrix(ps),this.quaternion.premultiply(Wr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ye("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Dp),Xr.child=t,this.dispatchEvent(Xr),Xr.child=null):ye("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(M_),$u.child=t,this.dispatchEvent($u),$u.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ps.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ps.multiply(t.parent.matrixWorld)),t.applyMatrix4(ps),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Dp),Xr.child=t,this.dispatchEvent(Xr),Xr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(eo,t,y_),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(eo,S_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,l=r.length;a<l;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(l=>({...l})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let c=l.shapes;if(Array.isArray(c))for(let h=0,d=c.length;h<d;h++){let v=c[h];r(t.shapes,v)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let c=0,h=this.material.length;c<h;c++)l.push(r(t.materials,this.material[c]));s.material=l}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){let c=this.animations[l];s.animations.push(r(t.animations,c))}}if(e){let l=a(t.geometries),c=a(t.materials),h=a(t.textures),d=a(t.images),v=a(t.shapes),f=a(t.skeletons),y=a(t.animations),S=a(t.nodes);l.length>0&&(n.geometries=l),c.length>0&&(n.materials=c),h.length>0&&(n.textures=h),d.length>0&&(n.images=d),v.length>0&&(n.shapes=v),f.length>0&&(n.skeletons=f),y.length>0&&(n.animations=y),S.length>0&&(n.nodes=S)}return n.object=s,n;function a(l){let c=[];for(let h in l){let d=l[h];delete d.metadata,c.push(d)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Rn.DEFAULT_UP=new X(0,1,0);Rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Di=class extends Rn{constructor(){super(),this.isGroup=!0,this.type="Group"}},b_={type:"move"},da=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Di,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Di,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Di,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,l=this._targetRay,c=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){a=!0;for(let I of t.hand.values()){let _=e.getJointPose(I,n),m=this._getHandJoint(h,I);_!==null&&(m.matrix.fromArray(_.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=_.radius),m.visible=_!==null}let d=h.joints["index-finger-tip"],v=h.joints["thumb-tip"],f=d.position.distanceTo(v.position),y=.02,S=.005;h.inputState.pinching&&f>y+S?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&f<=y-S&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));l!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(b_)))}return l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Di;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Hm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rs={h:0,s:0,l:0},Bl={h:0,s:0,l:0};function Vu(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var ge=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ui){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ke.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ke.workingColorSpace){return this.r=t,this.g=e,this.b=n,ke.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ke.workingColorSpace){if(t=Gd(t,1),e=Re(e,0,1),n=Re(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Vu(a,r,t+1/3),this.g=Vu(a,r,t),this.b=Vu(a,r,t-1/3)}return ke.colorSpaceToWorking(this,s),this}setStyle(t,e=ui){function n(r){r!==void 0&&parseFloat(r)<1&&xe("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],l=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:xe("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);xe("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ui){let n=Hm[t.toLowerCase()];return n!==void 0?this.setHex(n,e):xe("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=vs(t.r),this.g=vs(t.g),this.b=vs(t.b),this}copyLinearToSRGB(t){return this.r=ra(t.r),this.g=ra(t.g),this.b=ra(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ui){return ke.workingToColorSpace($n.copy(this),t),Math.round(Re($n.r*255,0,255))*65536+Math.round(Re($n.g*255,0,255))*256+Math.round(Re($n.b*255,0,255))}getHexString(t=ui){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ke.workingColorSpace){ke.workingToColorSpace($n.copy(this),e);let n=$n.r,s=$n.g,r=$n.b,a=Math.max(n,s,r),l=Math.min(n,s,r),c,h,d=(l+a)/2;if(l===a)c=0,h=0;else{let v=a-l;switch(h=d<=.5?v/(a+l):v/(2-a-l),a){case n:c=(s-r)/v+(s<r?6:0);break;case s:c=(r-n)/v+2;break;case r:c=(n-s)/v+4;break}c/=6}return t.h=c,t.s=h,t.l=d,t}getRGB(t,e=ke.workingColorSpace){return ke.workingToColorSpace($n.copy(this),e),t.r=$n.r,t.g=$n.g,t.b=$n.b,t}getStyle(t=ui){ke.workingToColorSpace($n.copy(this),t);let e=$n.r,n=$n.g,s=$n.b;return t!==ui?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Rs),this.setHSL(Rs.h+t,Rs.s+e,Rs.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Rs),t.getHSL(Bl);let n=ho(Rs.h,Bl.h,e),s=ho(Rs.s,Bl.s,e),r=ho(Rs.l,Bl.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},$n=new ge;ge.NAMES=Hm;var yo=class extends Rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ys,this.environmentIntensity=1,this.environmentRotation=new ys,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ci=new X,ms=new X,Hu=new X,gs=new X,qr=new X,Yr=new X,Np=new X,Gu=new X,Wu=new X,Xu=new X,qu=new Qe,Yu=new Qe,Zu=new Qe,Ds=class i{constructor(t=new X,e=new X,n=new X){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Ci.subVectors(t,e),s.cross(Ci);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Ci.subVectors(s,e),ms.subVectors(n,e),Hu.subVectors(t,e);let a=Ci.dot(Ci),l=Ci.dot(ms),c=Ci.dot(Hu),h=ms.dot(ms),d=ms.dot(Hu),v=a*h-l*l;if(v===0)return r.set(0,0,0),null;let f=1/v,y=(h*c-l*d)*f,S=(a*d-l*c)*f;return r.set(1-y-S,S,y)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,gs)===null?!1:gs.x>=0&&gs.y>=0&&gs.x+gs.y<=1}static getInterpolation(t,e,n,s,r,a,l,c){return this.getBarycoord(t,e,n,s,gs)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,gs.x),c.addScaledVector(a,gs.y),c.addScaledVector(l,gs.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return qu.setScalar(0),Yu.setScalar(0),Zu.setScalar(0),qu.fromBufferAttribute(t,e),Yu.fromBufferAttribute(t,n),Zu.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(qu,r.x),a.addScaledVector(Yu,r.y),a.addScaledVector(Zu,r.z),a}static isFrontFacing(t,e,n,s){return Ci.subVectors(n,e),ms.subVectors(t,e),Ci.cross(ms).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ci.subVectors(this.c,this.b),ms.subVectors(this.a,this.b),Ci.cross(ms).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,l;qr.subVectors(s,n),Yr.subVectors(r,n),Gu.subVectors(t,n);let c=qr.dot(Gu),h=Yr.dot(Gu);if(c<=0&&h<=0)return e.copy(n);Wu.subVectors(t,s);let d=qr.dot(Wu),v=Yr.dot(Wu);if(d>=0&&v<=d)return e.copy(s);let f=c*v-d*h;if(f<=0&&c>=0&&d<=0)return a=c/(c-d),e.copy(n).addScaledVector(qr,a);Xu.subVectors(t,r);let y=qr.dot(Xu),S=Yr.dot(Xu);if(S>=0&&y<=S)return e.copy(r);let I=y*h-c*S;if(I<=0&&h>=0&&S<=0)return l=h/(h-S),e.copy(n).addScaledVector(Yr,l);let _=d*S-y*v;if(_<=0&&v-d>=0&&y-S>=0)return Np.subVectors(r,s),l=(v-d)/(v-d+(y-S)),e.copy(s).addScaledVector(Np,l);let m=1/(_+I+f);return a=I*m,l=f*m,e.copy(n).addScaledVector(qr,a).addScaledVector(Yr,l)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Zn=class{constructor(t=new X(1/0,1/0,1/0),e=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ri.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ri.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Ri.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,l=r.count;a<l;a++)t.isMesh===!0?t.getVertexPosition(a,Ri):Ri.fromBufferAttribute(r,a),Ri.applyMatrix4(t.matrixWorld),this.expandByPoint(Ri);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),kl.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),kl.copy(n.boundingBox)),kl.applyMatrix4(t.matrixWorld),this.union(kl)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ri),Ri.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(no),zl.subVectors(this.max,no),Zr.subVectors(t.a,no),Jr.subVectors(t.b,no),jr.subVectors(t.c,no),Is.subVectors(Jr,Zr),Ps.subVectors(jr,Jr),sr.subVectors(Zr,jr);let e=[0,-Is.z,Is.y,0,-Ps.z,Ps.y,0,-sr.z,sr.y,Is.z,0,-Is.x,Ps.z,0,-Ps.x,sr.z,0,-sr.x,-Is.y,Is.x,0,-Ps.y,Ps.x,0,-sr.y,sr.x,0];return!Ju(e,Zr,Jr,jr,zl)||(e=[1,0,0,0,1,0,0,0,1],!Ju(e,Zr,Jr,jr,zl))?!1:($l.crossVectors(Is,Ps),e=[$l.x,$l.y,$l.z],Ju(e,Zr,Jr,jr,zl))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ri).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ri).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(_s[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),_s[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),_s[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),_s[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),_s[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),_s[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),_s[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),_s[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(_s),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},_s=[new X,new X,new X,new X,new X,new X,new X,new X],Ri=new X,kl=new Zn,Zr=new X,Jr=new X,jr=new X,Is=new X,Ps=new X,sr=new X,no=new X,zl=new X,$l=new X,rr=new X;function Ju(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){rr.fromArray(i,r);let l=s.x*Math.abs(rr.x)+s.y*Math.abs(rr.y)+s.z*Math.abs(rr.z),c=t.dot(rr),h=e.dot(rr),d=n.dot(rr);if(Math.max(-Math.max(c,h,d),Math.min(c,h,d))>l)return!1}return!0}var Mn=new X,Vl=new $t,w_=0,nn=class extends qi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:w_++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Vd,this.updateRanges=[],this.gpuType=Si,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Vl.fromBufferAttribute(this,e),Vl.applyMatrix3(t),this.setXY(e,Vl.x,Vl.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Mn.fromBufferAttribute(this,e),Mn.applyMatrix3(t),this.setXYZ(e,Mn.x,Mn.y,Mn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Mn.fromBufferAttribute(this,e),Mn.applyMatrix4(t),this.setXYZ(e,Mn.x,Mn.y,Mn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Mn.fromBufferAttribute(this,e),Mn.applyNormalMatrix(t),this.setXYZ(e,Mn.x,Mn.y,Mn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Mn.fromBufferAttribute(this,e),Mn.transformDirection(t),this.setXYZ(e,Mn.x,Mn.y,Mn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Pi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=tn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Pi(e,this.array)),e}setX(t,e){return this.normalized&&(e=tn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Pi(e,this.array)),e}setY(t,e){return this.normalized&&(e=tn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Pi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=tn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Pi(e,this.array)),e}setW(t,e){return this.normalized&&(e=tn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=tn(e,this.array),n=tn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=tn(e,this.array),n=tn(n,this.array),s=tn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=tn(e,this.array),n=tn(n,this.array),s=tn(s,this.array),r=tn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var So=class extends nn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Mo=class extends nn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var gn=class extends nn{constructor(t,e,n){super(new Float32Array(t),e,n)}},E_=new Zn,io=new X,ju=new X,si=class{constructor(t=new X,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):E_.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;io.subVectors(t,this.center);let e=io.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(io,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ju.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(io.copy(t.center).add(ju)),this.expandByPoint(io.copy(t.center).sub(ju))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},T_=0,yi=new $e,Ku=new Rn,Kr=new X,hi=new Zn,so=new Zn,An=new X,_n=class i extends qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:T_++}),this.uuid=Wi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(J0(t)?Mo:So)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ae().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return yi.makeRotationFromQuaternion(t),this.applyMatrix4(yi),this}rotateX(t){return yi.makeRotationX(t),this.applyMatrix4(yi),this}rotateY(t){return yi.makeRotationY(t),this.applyMatrix4(yi),this}rotateZ(t){return yi.makeRotationZ(t),this.applyMatrix4(yi),this}translate(t,e,n){return yi.makeTranslation(t,e,n),this.applyMatrix4(yi),this}scale(t,e,n){return yi.makeScale(t,e,n),this.applyMatrix4(yi),this}lookAt(t){return Ku.lookAt(t),Ku.updateMatrix(),this.applyMatrix4(Ku.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Kr).negate(),this.translate(Kr.x,Kr.y,Kr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new gn(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&xe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ye("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];hi.setFromBufferAttribute(r),this.morphTargetsRelative?(An.addVectors(this.boundingBox.min,hi.min),this.boundingBox.expandByPoint(An),An.addVectors(this.boundingBox.max,hi.max),this.boundingBox.expandByPoint(An)):(this.boundingBox.expandByPoint(hi.min),this.boundingBox.expandByPoint(hi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ye('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new si);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ye("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(t){let n=this.boundingSphere.center;if(hi.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let l=e[r];so.setFromBufferAttribute(l),this.morphTargetsRelative?(An.addVectors(hi.min,so.min),hi.expandByPoint(An),An.addVectors(hi.max,so.max),hi.expandByPoint(An)):(hi.expandByPoint(so.min),hi.expandByPoint(so.max))}hi.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)An.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(An));if(e)for(let r=0,a=e.length;r<a;r++){let l=e[r],c=this.morphTargetsRelative;for(let h=0,d=l.count;h<d;h++)An.fromBufferAttribute(l,h),c&&(Kr.fromBufferAttribute(t,h),An.add(Kr)),s=Math.max(s,n.distanceToSquared(An))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ye('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ye("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new nn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let l=[],c=[];for(let T=0;T<n.count;T++)l[T]=new X,c[T]=new X;let h=new X,d=new X,v=new X,f=new $t,y=new $t,S=new $t,I=new X,_=new X;function m(T,N,H){h.fromBufferAttribute(n,T),d.fromBufferAttribute(n,N),v.fromBufferAttribute(n,H),f.fromBufferAttribute(r,T),y.fromBufferAttribute(r,N),S.fromBufferAttribute(r,H),d.sub(h),v.sub(h),y.sub(f),S.sub(f);let q=1/(y.x*S.y-S.x*y.y);isFinite(q)&&(I.copy(d).multiplyScalar(S.y).addScaledVector(v,-y.y).multiplyScalar(q),_.copy(v).multiplyScalar(y.x).addScaledVector(d,-S.x).multiplyScalar(q),l[T].add(I),l[N].add(I),l[H].add(I),c[T].add(_),c[N].add(_),c[H].add(_))}let O=this.groups;O.length===0&&(O=[{start:0,count:t.count}]);for(let T=0,N=O.length;T<N;++T){let H=O[T],q=H.start,st=H.count;for(let ot=q,J=q+st;ot<J;ot+=3)m(t.getX(ot+0),t.getX(ot+1),t.getX(ot+2))}let B=new X,R=new X,E=new X,F=new X;function G(T){E.fromBufferAttribute(s,T),F.copy(E);let N=l[T];B.copy(N),B.sub(E.multiplyScalar(E.dot(N))).normalize(),R.crossVectors(F,N);let q=R.dot(c[T])<0?-1:1;a.setXYZW(T,B.x,B.y,B.z,q)}for(let T=0,N=O.length;T<N;++T){let H=O[T],q=H.start,st=H.count;for(let ot=q,J=q+st;ot<J;ot+=3)G(t.getX(ot+0)),G(t.getX(ot+1)),G(t.getX(ot+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new nn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,y=n.count;f<y;f++)n.setXYZ(f,0,0,0);let s=new X,r=new X,a=new X,l=new X,c=new X,h=new X,d=new X,v=new X;if(t)for(let f=0,y=t.count;f<y;f+=3){let S=t.getX(f+0),I=t.getX(f+1),_=t.getX(f+2);s.fromBufferAttribute(e,S),r.fromBufferAttribute(e,I),a.fromBufferAttribute(e,_),d.subVectors(a,r),v.subVectors(s,r),d.cross(v),l.fromBufferAttribute(n,S),c.fromBufferAttribute(n,I),h.fromBufferAttribute(n,_),l.add(d),c.add(d),h.add(d),n.setXYZ(S,l.x,l.y,l.z),n.setXYZ(I,c.x,c.y,c.z),n.setXYZ(_,h.x,h.y,h.z)}else for(let f=0,y=e.count;f<y;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),d.subVectors(a,r),v.subVectors(s,r),d.cross(v),n.setXYZ(f+0,d.x,d.y,d.z),n.setXYZ(f+1,d.x,d.y,d.z),n.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)An.fromBufferAttribute(t,e),An.normalize(),t.setXYZ(e,An.x,An.y,An.z)}toNonIndexed(){function t(l,c){let h=l.array,d=l.itemSize,v=l.normalized,f=new h.constructor(c.length*d),y=0,S=0;for(let I=0,_=c.length;I<_;I++){l.isInterleavedBufferAttribute?y=c[I]*l.data.stride+l.offset:y=c[I]*d;for(let m=0;m<d;m++)f[S++]=h[y++]}return new nn(f,d,v)}if(this.index===null)return xe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let l in s){let c=s[l],h=t(c,n);e.setAttribute(l,h)}let r=this.morphAttributes;for(let l in r){let c=[],h=r[l];for(let d=0,v=h.length;d<v;d++){let f=h[d],y=t(f,n);c.push(y)}e.morphAttributes[l]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let l=0,c=a.length;l<c;l++){let h=a[l];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let h in c)c[h]!==void 0&&(t[h]=c[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let h=n[c];t.data.attributes[c]=h.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let h=this.morphAttributes[c],d=[];for(let v=0,f=h.length;v<f;v++){let y=h[v];d.push(y.toJSON(t.data))}d.length>0&&(s[c]=d,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let l=this.boundingSphere;return l!==null&&(t.data.boundingSphere=l.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let h in s){let d=s[h];this.setAttribute(h,d.clone(e))}let r=t.morphAttributes;for(let h in r){let d=[],v=r[h];for(let f=0,y=v.length;f<y;f++)d.push(v[f].clone(e));this.morphAttributes[h]=d}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let h=0,d=a.length;h<d;h++){let v=a[h];this.addGroup(v.start,v.count,v.materialIndex)}let l=t.boundingBox;l!==null&&(this.boundingBox=l.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},wc=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Vd,this.updateRanges=[],this.version=0,this.uuid=Wi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},Yn=new X,Ni=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Yn.fromBufferAttribute(this,e),Yn.applyMatrix4(t),this.setXYZ(e,Yn.x,Yn.y,Yn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Yn.fromBufferAttribute(this,e),Yn.applyNormalMatrix(t),this.setXYZ(e,Yn.x,Yn.y,Yn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Yn.fromBufferAttribute(this,e),Yn.transformDirection(t),this.setXYZ(e,Yn.x,Yn.y,Yn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Pi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=tn(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=tn(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=tn(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=tn(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=tn(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Pi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Pi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Pi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Pi(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=tn(e,this.array),n=tn(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=tn(e,this.array),n=tn(n,this.array),s=tn(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=tn(e,this.array),n=tn(n,this.array),s=tn(s,this.array),r=tn(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){xo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new nn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){xo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Qu=new X,A_=new X,C_=new Ae,Ii=class{constructor(t=new X(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Qu.subVectors(n,e).cross(A_.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Qu),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||C_.getNormalMatrix(t),s=this.coplanarPoint(Qu).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},R_=0,Zi=class extends qi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:R_++}),this.uuid=Wi(),this.name="",this.type="Material",this.blending=ya,this.side=ks,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Td,this.blendDst=Ad,this.blendEquation=gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ge(0,0,0),this.blendAlpha=0,this.depthFunc=aa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hc,this.stencilZFail=hc,this.stencilZPass=hc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){xe(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){xe(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let l in r){let c=r[l];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ge().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Ii().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new $t().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new $t().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var xs=new X,td=new X,Hl=new X,Gl=new X,hr=class{constructor(t=new X,e=new X(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,xs)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=xs.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(xs.copy(this.origin).addScaledVector(this.direction,e),xs.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){td.copy(t).add(e).multiplyScalar(.5),Hl.copy(e).sub(t).normalize(),Gl.copy(this.origin).sub(td);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Hl),l=Gl.dot(this.direction),c=-Gl.dot(Hl),h=Gl.lengthSq(),d=Math.abs(1-a*a),v,f,y,S;if(d>0)if(v=a*c-l,f=a*l-c,S=r*d,v>=0)if(f>=-S)if(f<=S){let I=1/d;v*=I,f*=I,y=v*(v+a*f+2*l)+f*(a*v+f+2*c)+h}else f=r,v=Math.max(0,-(a*f+l)),y=-v*v+f*(f+2*c)+h;else f=-r,v=Math.max(0,-(a*f+l)),y=-v*v+f*(f+2*c)+h;else f<=-S?(v=Math.max(0,-(-a*r+l)),f=v>0?-r:Math.min(Math.max(-r,-c),r),y=-v*v+f*(f+2*c)+h):f<=S?(v=0,f=Math.min(Math.max(-r,-c),r),y=f*(f+2*c)+h):(v=Math.max(0,-(a*r+l)),f=v>0?r:Math.min(Math.max(-r,-c),r),y=-v*v+f*(f+2*c)+h);else f=a>0?-r:r,v=Math.max(0,-(a*f+l)),y=-v*v+f*(f+2*c)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,v),s&&s.copy(td).addScaledVector(Hl,f),y}intersectSphere(t,e){if(t.radius<0)return null;xs.subVectors(t.center,this.origin);let n=xs.dot(this.direction),s=xs.dot(xs)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),l=n-a,c=n+a;return c<0?null:l<0?this.at(c,e):this.at(l,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,l,c,h=1/this.direction.x,d=1/this.direction.y,v=1/this.direction.z,f=this.origin;return h>=0?(n=(t.min.x-f.x)*h,s=(t.max.x-f.x)*h):(n=(t.max.x-f.x)*h,s=(t.min.x-f.x)*h),d>=0?(r=(t.min.y-f.y)*d,a=(t.max.y-f.y)*d):(r=(t.max.y-f.y)*d,a=(t.min.y-f.y)*d),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),v>=0?(l=(t.min.z-f.z)*v,c=(t.max.z-f.z)*v):(l=(t.max.z-f.z)*v,c=(t.min.z-f.z)*v),n>c||l>s)||((l>n||n!==n)&&(n=l),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,xs)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,l=this.direction,c=l.x,h=l.y,d=l.z,v=t.x-a.x,f=t.y-a.y,y=t.z-a.z,S=e.x-a.x,I=e.y-a.y,_=e.z-a.z,m=n.x-a.x,O=n.y-a.y,B=n.z-a.z,R=Math.abs(c),E=Math.abs(h),F=Math.abs(d),G,T,N,H,q,st,ot,J,Q,ht,ft,Tt;if(R>=E&&R>=F?(N=c,st=v,Q=S,Tt=m,c>=0?(G=h,T=d,H=f,q=y,ot=I,J=_,ht=O,ft=B):(G=d,T=h,H=y,q=f,ot=_,J=I,ht=B,ft=O)):E>=F?(N=h,st=f,Q=I,Tt=O,h>=0?(G=d,T=c,H=y,q=v,ot=_,J=S,ht=B,ft=m):(G=c,T=d,H=v,q=y,ot=S,J=_,ht=m,ft=B)):(N=d,st=y,Q=_,Tt=B,d>=0?(G=c,T=h,H=v,q=f,ot=S,J=I,ht=m,ft=O):(G=h,T=c,H=f,q=v,ot=I,J=S,ht=O,ft=m)),N===0)return null;let pt=G/N,Mt=T/N,St=1/N,qt=H-pt*st,jt=q-Mt*st,Ve=ot-pt*Q,Ie=J-Mt*Q,Fe=ht-pt*Tt,_t=ft-Mt*Tt,vt=Fe*Ie-_t*Ve,Pt=qt*_t-jt*Fe,oe=Ve*jt-Ie*qt;if(s){if(vt<0||Pt<0||oe<0)return null}else if((vt<0||Pt<0||oe<0)&&(vt>0||Pt>0||oe>0))return null;let Yt=vt+Pt+oe;if(Yt===0)return null;let pe=St*(vt*st+Pt*Q+oe*Tt);return(Yt>0?pe<0:pe>0)?null:this.at(pe/Yt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ur=class extends Zi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ys,this.combine=Kc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Up=new $e,ar=new hr,Wl=new si,Fp=new X,Xl=new X,ql=new X,Yl=new X,ed=new X,Zl=new X,Op=new X,Jl=new X,In=class extends Rn{constructor(t=new _n,e=new ur){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let l=this.morphTargetInfluences;if(r&&l){Zl.set(0,0,0);for(let c=0,h=r.length;c<h;c++){let d=l[c],v=r[c];d!==0&&(ed.fromBufferAttribute(v,t),a?Zl.addScaledVector(ed,d):Zl.addScaledVector(ed.sub(e),d))}e.add(Zl)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Wl.copy(n.boundingSphere),Wl.applyMatrix4(r),ar.copy(t.ray).recast(t.near),!(Wl.containsPoint(ar.origin)===!1&&(ar.intersectSphere(Wl,Fp)===null||ar.origin.distanceToSquared(Fp)>(t.far-t.near)**2))&&(Up.copy(r).invert(),ar.copy(t.ray).applyMatrix4(Up),!(n.boundingBox!==null&&ar.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ar)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,l=r.index,c=r.attributes.position,h=r.attributes.uv,d=r.attributes.uv1,v=r.attributes.normal,f=r.groups,y=r.drawRange;if(l!==null)if(Array.isArray(a))for(let S=0,I=f.length;S<I;S++){let _=f[S],m=a[_.materialIndex],O=Math.max(_.start,y.start),B=Math.min(l.count,Math.min(_.start+_.count,y.start+y.count));for(let R=O,E=B;R<E;R+=3){let F=l.getX(R),G=l.getX(R+1),T=l.getX(R+2);s=jl(this,m,t,n,h,d,v,F,G,T),s&&(s.faceIndex=Math.floor(R/3),s.face.materialIndex=_.materialIndex,e.push(s))}}else{let S=Math.max(0,y.start),I=Math.min(l.count,y.start+y.count);for(let _=S,m=I;_<m;_+=3){let O=l.getX(_),B=l.getX(_+1),R=l.getX(_+2);s=jl(this,a,t,n,h,d,v,O,B,R),s&&(s.faceIndex=Math.floor(_/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let S=0,I=f.length;S<I;S++){let _=f[S],m=a[_.materialIndex],O=Math.max(_.start,y.start),B=Math.min(c.count,Math.min(_.start+_.count,y.start+y.count));for(let R=O,E=B;R<E;R+=3){let F=R,G=R+1,T=R+2;s=jl(this,m,t,n,h,d,v,F,G,T),s&&(s.faceIndex=Math.floor(R/3),s.face.materialIndex=_.materialIndex,e.push(s))}}else{let S=Math.max(0,y.start),I=Math.min(c.count,y.start+y.count);for(let _=S,m=I;_<m;_+=3){let O=_,B=_+1,R=_+2;s=jl(this,a,t,n,h,d,v,O,B,R),s&&(s.faceIndex=Math.floor(_/3),e.push(s))}}}};function I_(i,t,e,n,s,r,a,l){let c;if(t.side===Jn?c=n.intersectTriangle(a,r,s,!0,l):c=n.intersectTriangle(s,r,a,t.side===ks,l),c===null)return null;Jl.copy(l),Jl.applyMatrix4(i.matrixWorld);let h=e.ray.origin.distanceTo(Jl);return h<e.near||h>e.far?null:{distance:h,point:Jl.clone(),object:i}}function jl(i,t,e,n,s,r,a,l,c,h){i.getVertexPosition(l,Xl),i.getVertexPosition(c,ql),i.getVertexPosition(h,Yl);let d=I_(i,t,e,n,Xl,ql,Yl,Op);if(d){let v=new X;Ds.getBarycoord(Op,Xl,ql,Yl,v),s&&(d.uv=Ds.getInterpolatedAttribute(s,l,c,h,v,new $t)),r&&(d.uv1=Ds.getInterpolatedAttribute(r,l,c,h,v,new $t)),a&&(d.normal=Ds.getInterpolatedAttribute(a,l,c,h,v,new X),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));let f={a:l,b:c,c:h,normal:new X,materialIndex:0};Ds.getNormal(Xl,ql,Yl,f.normal),d.face=f,d.barycoord=v}return d}var bo=class extends ni{constructor(t=null,e=1,n=1,s,r,a,l,c,h=Cn,d=Cn,v,f){super(null,a,l,c,h,d,s,r,v,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var wo=class extends nn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Qr=new $e,Bp=new $e,Kl=[],kp=new Zn,P_=new $e,ro=new In,ao=new si,Eo=class extends In{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new wo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,P_)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Zn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Qr),kp.copy(t.boundingBox).applyMatrix4(Qr),this.boundingBox.union(kp)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new si),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Qr),ao.copy(t.boundingSphere).applyMatrix4(Qr),this.boundingSphere.union(ao)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let l=0;l<n.length;l++)n[l]=s[a+l]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(ro.geometry=this.geometry,ro.material=this.material,ro.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ao.copy(this.boundingSphere),ao.applyMatrix4(n),t.ray.intersectsSphere(ao)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Qr),Bp.multiplyMatrices(n,Qr),ro.matrixWorld=Bp,ro.raycast(t,Kl);for(let a=0,l=Kl.length;a<l;a++){let c=Kl[a];c.instanceId=r,c.object=this,e.push(c)}Kl.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new wo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new bo(new Float32Array(s*this.count),s,this.count,rh,Si));let r=this.morphTexture.source.data.data,a=0;for(let h=0;h<n.length;h++)a+=n[h];let l=this.geometry.morphTargetsRelative?1:1-a,c=s*t;return r[c]=l,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},or=new si,L_=new $t(.5,.5),Ql=new X,fa=class{constructor(t=new Ii,e=new Ii,n=new Ii,s=new Ii,r=new Ii,a=new Ii){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let l=this.planes;return l[0].copy(t),l[1].copy(e),l[2].copy(n),l[3].copy(s),l[4].copy(r),l[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Li,n=!1){let s=this.planes,r=t.elements,a=r[0],l=r[1],c=r[2],h=r[3],d=r[4],v=r[5],f=r[6],y=r[7],S=r[8],I=r[9],_=r[10],m=r[11],O=r[12],B=r[13],R=r[14],E=r[15];if(s[0].setComponents(h-a,y-d,m-S,E-O).normalize(),s[1].setComponents(h+a,y+d,m+S,E+O).normalize(),s[2].setComponents(h+l,y+v,m+I,E+B).normalize(),s[3].setComponents(h-l,y-v,m-I,E-B).normalize(),n)s[4].setComponents(c,f,_,R).normalize(),s[5].setComponents(h-c,y-f,m-_,E-R).normalize();else if(s[4].setComponents(h-c,y-f,m-_,E-R).normalize(),e===Li)s[5].setComponents(h+c,y+f,m+_,E+R).normalize();else if(e===oa)s[5].setComponents(c,f,_,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),or.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),or.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(or)}intersectsSprite(t){or.center.set(0,0,0);let e=L_.distanceTo(t.center);return or.radius=.7071067811865476+e,or.applyMatrix4(t.matrixWorld),this.intersectsSphere(or)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Ql.x=s.normal.x>0?t.max.x:t.min.x,Ql.y=s.normal.y>0?t.max.y:t.min.y,Ql.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ql)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var dr=class extends Zi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Ec=new X,Tc=new X,zp=new $e,oo=new hr,tc=new si,nd=new X,$p=new X,Ac=class extends Rn{constructor(t=new _n,e=new dr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Ec.fromBufferAttribute(e,s-1),Tc.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Ec.distanceTo(Tc);t.setAttribute("lineDistance",new gn(n,1))}else xe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),tc.copy(n.boundingSphere),tc.applyMatrix4(s),tc.radius+=r,t.ray.intersectsSphere(tc)===!1)return;zp.copy(s).invert(),oo.copy(t.ray).applyMatrix4(zp);let l=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,h=this.isLineSegments?2:1,d=n.index,f=n.attributes.position;if(d!==null){let y=Math.max(0,a.start),S=Math.min(d.count,a.start+a.count);for(let I=y,_=S-1;I<_;I+=h){let m=d.getX(I),O=d.getX(I+1),B=ec(this,t,oo,c,m,O,I);B&&e.push(B)}if(this.isLineLoop){let I=d.getX(S-1),_=d.getX(y),m=ec(this,t,oo,c,I,_,S-1);m&&e.push(m)}}else{let y=Math.max(0,a.start),S=Math.min(f.count,a.start+a.count);for(let I=y,_=S-1;I<_;I+=h){let m=ec(this,t,oo,c,I,I+1,I);m&&e.push(m)}if(this.isLineLoop){let I=ec(this,t,oo,c,S-1,y,S-1);I&&e.push(I)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}};function ec(i,t,e,n,s,r,a){let l=i.geometry.attributes.position;if(Ec.fromBufferAttribute(l,s),Tc.fromBufferAttribute(l,r),e.distanceSqToSegment(Ec,Tc,nd,$p)>n)return;nd.applyMatrix4(i.matrixWorld);let h=t.ray.origin.distanceTo(nd);if(!(h<t.near||h>t.far))return{distance:h,point:$p.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var To=class extends Ac{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},Cc=class extends Zi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Vp=new $e,fd=new hr,nc=new si,ic=new X,fr=class extends Rn{constructor(t=new _n,e=new Cc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),nc.copy(n.boundingSphere),nc.applyMatrix4(s),nc.radius+=r,t.ray.intersectsSphere(nc)===!1)return;Vp.copy(s).invert(),fd.copy(t.ray).applyMatrix4(Vp);let l=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,h=n.index,v=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),y=Math.min(h.count,a.start+a.count);for(let S=f,I=y;S<I;S++){let _=h.getX(S);ic.fromBufferAttribute(v,_),Hp(ic,_,c,s,t,e,this)}}else{let f=Math.max(0,a.start),y=Math.min(v.count,a.start+a.count);for(let S=f,I=y;S<I;S++)ic.fromBufferAttribute(v,S),Hp(ic,S,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}};function Hp(i,t,e,n,s,r,a){let l=fd.distanceSqToPoint(i);if(l<e){let c=new X;fd.closestPointToPoint(i,c),c.applyMatrix4(n);let h=s.ray.origin.distanceTo(c);if(h<s.near||h>s.far)return;r.push({distance:h,distanceToRay:Math.sqrt(l),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Ao=class extends ni{constructor(t=[],e=zs,n,s,r,a,l,c,h,d){super(t,e,n,s,r,a,l,c,h,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var Ns=class extends ni{constructor(t,e,n=Fi,s,r,a,l=Cn,c=Cn,h,d=Xi,v=1){if(d!==Xi&&d!==Vs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:v};super(f,s,r,a,l,c,d,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ha(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Rc=class extends Ns{constructor(t,e=Fi,n=zs,s,r,a=Cn,l=Cn,c,h=Xi){let d={width:t,height:t,depth:1},v=[d,d,d,d,d,d];super(t,t,e,n,s,r,a,l,c,h),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Co=class extends ni{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},pa=class i extends _n{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let l=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],h=[],d=[],v=[],f=0,y=0;S("z","y","x",-1,-1,n,e,t,a,r,0),S("z","y","x",1,-1,n,e,-t,a,r,1),S("x","z","y",1,1,t,n,e,s,a,2),S("x","z","y",1,-1,t,n,-e,s,a,3),S("x","y","z",1,-1,t,e,n,s,r,4),S("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new gn(h,3)),this.setAttribute("normal",new gn(d,3)),this.setAttribute("uv",new gn(v,2));function S(I,_,m,O,B,R,E,F,G,T,N){let H=R/G,q=E/T,st=R/2,ot=E/2,J=F/2,Q=G+1,ht=T+1,ft=0,Tt=0,pt=new X;for(let Mt=0;Mt<ht;Mt++){let St=Mt*q-ot;for(let qt=0;qt<Q;qt++){let jt=qt*H-st;pt[I]=jt*O,pt[_]=St*B,pt[m]=J,h.push(pt.x,pt.y,pt.z),pt[I]=0,pt[_]=0,pt[m]=F>0?1:-1,d.push(pt.x,pt.y,pt.z),v.push(qt/G),v.push(1-Mt/T),ft+=1}}for(let Mt=0;Mt<T;Mt++)for(let St=0;St<G;St++){let qt=f+St+Q*Mt,jt=f+St+Q*(Mt+1),Ve=f+(St+1)+Q*(Mt+1),Ie=f+(St+1)+Q*Mt;c.push(qt,jt,Ie),c.push(jt,Ve,Ie),Tt+=6}l.addGroup(y,Tt,N),y+=Tt,f+=ft}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Ro=class i extends _n{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,l=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:l,thetaLength:c};let h=this;s=Math.floor(s),r=Math.floor(r);let d=[],v=[],f=[],y=[],S=0,I=[],_=n/2,m=0;O(),a===!1&&(t>0&&B(!0),e>0&&B(!1)),this.setIndex(d),this.setAttribute("position",new gn(v,3)),this.setAttribute("normal",new gn(f,3)),this.setAttribute("uv",new gn(y,2));function O(){let R=new X,E=new X,F=0,G=(e-t)/n;for(let T=0;T<=r;T++){let N=[],H=T/r,q=H*(e-t)+t;for(let st=0;st<=s;st++){let ot=st/s,J=ot*c+l,Q=Math.sin(J),ht=Math.cos(J);E.x=q*Q,E.y=-H*n+_,E.z=q*ht,v.push(E.x,E.y,E.z),R.set(Q,G,ht).normalize(),f.push(R.x,R.y,R.z),y.push(ot,1-H),N.push(S++)}I.push(N)}for(let T=0;T<s;T++)for(let N=0;N<r;N++){let H=I[N][T],q=I[N+1][T],st=I[N+1][T+1],ot=I[N][T+1];(t>0||N!==0)&&(d.push(H,q,ot),F+=3),(e>0||N!==r-1)&&(d.push(q,st,ot),F+=3)}h.addGroup(m,F,0),m+=F}function B(R){let E=S,F=new $t,G=new X,T=0,N=R===!0?t:e,H=R===!0?1:-1;for(let st=1;st<=s;st++)v.push(0,_*H,0),f.push(0,H,0),y.push(.5,.5),S++;let q=S;for(let st=0;st<=s;st++){let J=st/s*c+l,Q=Math.cos(J),ht=Math.sin(J);G.x=N*ht,G.y=_*H,G.z=N*Q,v.push(G.x,G.y,G.z),f.push(0,H,0),F.x=Q*.5+.5,F.y=ht*.5*H+.5,y.push(F.x,F.y),S++}for(let st=0;st<s;st++){let ot=E+st,J=q+st;R===!0?d.push(J,J+1,ot):d.push(J+1,J,ot),T+=3}h.addGroup(m,T,R===!0?1:2),m+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var di=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){xe("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let l=0,c=r-1,h;for(;l<=c;)if(s=Math.floor(l+(c-l)/2),h=n[s]-a,h<0)l=s+1;else if(h>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let d=n[s],f=n[s+1]-d,y=(a-d)/f;return(s+y)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),l=this.getPoint(r),c=e||(a.isVector2?new $t:new X);return c.copy(l).sub(a).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new X,s=[],r=[],a=[],l=new X,c=new $e;for(let y=0;y<=t;y++){let S=y/t;s[y]=this.getTangentAt(S,new X)}r[0]=new X,a[0]=new X;let h=Number.MAX_VALUE,d=Math.abs(s[0].x),v=Math.abs(s[0].y),f=Math.abs(s[0].z);d<=h&&(h=d,n.set(1,0,0)),v<=h&&(h=v,n.set(0,1,0)),f<=h&&n.set(0,0,1),l.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],l),a[0].crossVectors(s[0],r[0]);for(let y=1;y<=t;y++){if(r[y]=r[y-1].clone(),a[y]=a[y-1].clone(),l.crossVectors(s[y-1],s[y]),l.length()>Number.EPSILON){l.normalize();let S=Math.acos(Re(s[y-1].dot(s[y]),-1,1));r[y].applyMatrix4(c.makeRotationAxis(l,S))}a[y].crossVectors(s[y],r[y])}if(e===!0){let y=Math.acos(Re(r[0].dot(r[t]),-1,1));y/=t,s[0].dot(l.crossVectors(r[0],r[t]))>0&&(y=-y);for(let S=1;S<=t;S++)r[S].applyMatrix4(c.makeRotationAxis(s[S],y*S)),a[S].crossVectors(s[S],r[S])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},ma=class extends di{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,l=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=l,this.aRotation=c}getPoint(t,e=new $t){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let l=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(l),h=this.aY+this.yRadius*Math.sin(l);if(this.aRotation!==0){let d=Math.cos(this.aRotation),v=Math.sin(this.aRotation),f=c-this.aX,y=h-this.aY;c=f*d-y*v+this.aX,h=f*v+y*d+this.aY}return n.set(c,h)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Ic=class extends ma{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Xd(){let i=0,t=0,e=0,n=0;function s(r,a,l,c){i=r,t=l,e=-3*r+3*a-2*l-c,n=2*r-2*a+l+c}return{initCatmullRom:function(r,a,l,c,h){s(a,l,h*(l-r),h*(c-a))},initNonuniformCatmullRom:function(r,a,l,c,h,d,v){let f=(a-r)/h-(l-r)/(h+d)+(l-a)/d,y=(l-a)/d-(c-a)/(d+v)+(c-l)/v;f*=d,y*=d,s(a,l,f,y)},calc:function(r){let a=r*r,l=a*r;return i+t*r+e*a+n*l}}}var Gp=new X,Wp=new X,id=new Xd,sd=new Xd,rd=new Xd,Pc=class extends di{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new X){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,l=Math.floor(a),c=a-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/r)+1)*r:c===0&&l===r-1&&(l=r-2,c=1);let h,d;this.closed||l>0?h=s[(l-1)%r]:(Wp.subVectors(s[0],s[1]).add(s[0]),h=Wp);let v=s[l%r],f=s[(l+1)%r];if(this.closed||l+2<r?d=s[(l+2)%r]:(Gp.subVectors(s[r-1],s[r-2]).add(s[r-1]),d=Gp),this.curveType==="centripetal"||this.curveType==="chordal"){let y=this.curveType==="chordal"?.5:.25,S=Math.pow(h.distanceToSquared(v),y),I=Math.pow(v.distanceToSquared(f),y),_=Math.pow(f.distanceToSquared(d),y);I<1e-4&&(I=1),S<1e-4&&(S=I),_<1e-4&&(_=I),id.initNonuniformCatmullRom(h.x,v.x,f.x,d.x,S,I,_),sd.initNonuniformCatmullRom(h.y,v.y,f.y,d.y,S,I,_),rd.initNonuniformCatmullRom(h.z,v.z,f.z,d.z,S,I,_)}else this.curveType==="catmullrom"&&(id.initCatmullRom(h.x,v.x,f.x,d.x,this.tension),sd.initCatmullRom(h.y,v.y,f.y,d.y,this.tension),rd.initCatmullRom(h.z,v.z,f.z,d.z,this.tension));return n.set(id.calc(c),sd.calc(c),rd.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new X().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Xp(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,l=i*i,c=i*l;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*l+r*i+e}function D_(i,t){let e=1-i;return e*e*t}function N_(i,t){return 2*(1-i)*i*t}function U_(i,t){return i*i*t}function uo(i,t,e,n){return D_(i,t)+N_(i,e)+U_(i,n)}function F_(i,t){let e=1-i;return e*e*e*t}function O_(i,t){let e=1-i;return 3*e*e*i*t}function B_(i,t){return 3*(1-i)*i*i*t}function k_(i,t){return i*i*i*t}function fo(i,t,e,n,s){return F_(i,t)+O_(i,e)+B_(i,n)+k_(i,s)}var Io=class extends di{constructor(t=new $t,e=new $t,n=new $t,s=new $t){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new $t){let n=e,s=this.v0,r=this.v1,a=this.v2,l=this.v3;return n.set(fo(t,s.x,r.x,a.x,l.x),fo(t,s.y,r.y,a.y,l.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Lc=class extends di{constructor(t=new X,e=new X,n=new X,s=new X){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new X){let n=e,s=this.v0,r=this.v1,a=this.v2,l=this.v3;return n.set(fo(t,s.x,r.x,a.x,l.x),fo(t,s.y,r.y,a.y,l.y),fo(t,s.z,r.z,a.z,l.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Po=class extends di{constructor(t=new $t,e=new $t){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new $t){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new $t){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Dc=class extends di{constructor(t=new X,e=new X){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new X){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new X){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Lo=class extends di{constructor(t=new $t,e=new $t,n=new $t){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new $t){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(uo(t,s.x,r.x,a.x),uo(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Nc=class extends di{constructor(t=new X,e=new X,n=new X){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new X){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(uo(t,s.x,r.x,a.x),uo(t,s.y,r.y,a.y),uo(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Do=class extends di{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new $t){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),l=r-a,c=s[a===0?a:a-1],h=s[a],d=s[a>s.length-2?s.length-1:a+1],v=s[a>s.length-3?s.length-1:a+2];return n.set(Xp(l,c.x,h.x,d.x,v.x),Xp(l,c.y,h.y,d.y,v.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new $t().fromArray(s))}return this}},pd=Object.freeze({__proto__:null,ArcCurve:Ic,CatmullRomCurve3:Pc,CubicBezierCurve:Io,CubicBezierCurve3:Lc,EllipseCurve:ma,LineCurve:Po,LineCurve3:Dc,QuadraticBezierCurve:Lo,QuadraticBezierCurve3:Nc,SplineCurve:Do}),Uc=class extends di{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new pd[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,l=this.curves[r],c=l.getLength(),h=c===0?0:1-a/c;return l.getPointAt(h,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],l=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(l);for(let h=0;h<c.length;h++){let d=c[h];n&&n.equals(d)||(e.push(d),n=d)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new pd[s.type]().fromJSON(s))}return this}},pr=class extends Uc{constructor(t){super(),this.type="Path",this.currentPoint=new $t,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Po(this.currentPoint.clone(),new $t(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Lo(this.currentPoint.clone(),new $t(t,e),new $t(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let l=new Io(this.currentPoint.clone(),new $t(t,e),new $t(n,s),new $t(r,a));return this.curves.push(l),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Do(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let l=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+l,e+c,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,l,c){let h=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(t+h,e+d,n,s,r,a,l,c),this}absellipse(t,e,n,s,r,a,l,c){let h=new ma(t,e,n,s,r,a,l,c);if(this.curves.length>0){let v=h.getPoint(0);v.equals(this.currentPoint)||this.lineTo(v.x,v.y)}this.curves.push(h);let d=h.getPoint(1);return this.currentPoint.copy(d),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},ga=class extends pr{constructor(t){super(t),this.uuid=Wi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new pr().fromJSON(s))}return this}};function z_(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Gm(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let l,c,h;if(n&&(r=W_(i,t,r,e)),i.length>80*e){l=i[0],c=i[1];let d=l,v=c;for(let f=e;f<s;f+=e){let y=i[f],S=i[f+1];y<l&&(l=y),S<c&&(c=S),y>d&&(d=y),S>v&&(v=S)}h=Math.max(d-l,v-c),h=h!==0?32767/h:0}return No(r,a,e,l,c,h,0),a}function Gm(i,t,e,n,s){let r;if(s===nx(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=qp(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=qp(a/n|0,i[a],i[a+1],r);return r&&_a(r,r.next)&&(Fo(r),r=r.next),r}function mr(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(_a(e,e.next)||fn(e.prev,e,e.next)===0)){if(Fo(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function No(i,t,e,n,s,r,a){if(!i)return;!a&&r&&J_(i,n,s,r);let l=i;for(;i.prev!==i.next;){let c=i.prev,h=i.next;if(r?V_(i,n,s,r):$_(i)){t.push(c.i,i.i,h.i),Fo(i),i=h.next,l=h.next;continue}if(i=h,i===l){a?a===1?(i=H_(mr(i),t),No(i,t,e,n,s,r,2)):a===2&&G_(i,t,e,n,s,r):No(mr(i),t,e,n,s,r,1);break}}}function $_(i){let t=i.prev,e=i,n=i.next;if(fn(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,l=t.y,c=e.y,h=n.y,d=Math.min(s,r,a),v=Math.min(l,c,h),f=Math.max(s,r,a),y=Math.max(l,c,h),S=n.next;for(;S!==t;){if(S.x>=d&&S.x<=f&&S.y>=v&&S.y<=y&&lo(s,l,r,c,a,h,S.x,S.y)&&fn(S.prev,S,S.next)>=0)return!1;S=S.next}return!0}function V_(i,t,e,n){let s=i.prev,r=i,a=i.next;if(fn(s,r,a)>=0)return!1;let l=s.x,c=r.x,h=a.x,d=s.y,v=r.y,f=a.y,y=Math.min(l,c,h),S=Math.min(d,v,f),I=Math.max(l,c,h),_=Math.max(d,v,f),m=md(y,S,t,e,n),O=md(I,_,t,e,n),B=i.prevZ,R=i.nextZ;for(;B&&B.z>=m&&R&&R.z<=O;){if(B.x>=y&&B.x<=I&&B.y>=S&&B.y<=_&&B!==s&&B!==a&&lo(l,d,c,v,h,f,B.x,B.y)&&fn(B.prev,B,B.next)>=0||(B=B.prevZ,R.x>=y&&R.x<=I&&R.y>=S&&R.y<=_&&R!==s&&R!==a&&lo(l,d,c,v,h,f,R.x,R.y)&&fn(R.prev,R,R.next)>=0))return!1;R=R.nextZ}for(;B&&B.z>=m;){if(B.x>=y&&B.x<=I&&B.y>=S&&B.y<=_&&B!==s&&B!==a&&lo(l,d,c,v,h,f,B.x,B.y)&&fn(B.prev,B,B.next)>=0)return!1;B=B.prevZ}for(;R&&R.z<=O;){if(R.x>=y&&R.x<=I&&R.y>=S&&R.y<=_&&R!==s&&R!==a&&lo(l,d,c,v,h,f,R.x,R.y)&&fn(R.prev,R,R.next)>=0)return!1;R=R.nextZ}return!0}function H_(i,t){let e=i;do{let n=e.prev,s=e.next.next;!_a(n,s)&&Xm(n,e,e.next,s)&&Uo(n,s)&&Uo(s,n)&&(t.push(n.i,e.i,s.i),Fo(e),Fo(e.next),e=i=s),e=e.next}while(e!==i);return mr(e)}function G_(i,t,e,n,s,r){let a=i;do{let l=a.next.next;for(;l!==a.prev;){if(a.i!==l.i&&Q_(a,l)){let c=qm(a,l);a=mr(a,a.next),c=mr(c,c.next),No(a,t,e,n,s,r,0),No(c,t,e,n,s,r,0);return}l=l.next}a=a.next}while(a!==i)}function W_(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let l=t[r]*n,c=r<a-1?t[r+1]*n:i.length,h=Gm(i,l,c,n,!1);h===h.next&&(h.steiner=!0),s.push(K_(h))}s.sort(X_);for(let r=0;r<s.length;r++)e=q_(s[r],e);return e}function X_(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function q_(i,t){let e=Y_(i,t);if(!e)return t;let n=qm(e,i);return mr(n,n.next),mr(e,e.next)}function Y_(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(_a(i,e))return e;do{if(_a(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let v=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(v<=n&&v>r&&(r=v,a=e.x<e.next.x?e:e.next,v===n))return a}e=e.next}while(e!==t);if(!a)return null;let l=a,c=a.x,h=a.y,d=1/0;e=a;do{if(n>=e.x&&e.x>=c&&n!==e.x&&Wm(s<h?n:r,s,c,h,s<h?r:n,s,e.x,e.y)){let v=Math.abs(s-e.y)/(n-e.x);Uo(e,i)&&(v<d||v===d&&(e.x>a.x||e.x===a.x&&Z_(a,e)))&&(a=e,d=v)}e=e.next}while(e!==l);return a}function Z_(i,t){return fn(i.prev,i,t.prev)<0&&fn(t.next,i,i.next)<0}function J_(i,t,e,n){let s=i;do s.z===0&&(s.z=md(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,j_(s)}function j_(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,l=0;for(let h=0;h<e&&(l++,a=a.nextZ,!!a);h++);let c=e;for(;l>0||c>0&&a;)l!==0&&(c===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,l--):(s=a,a=a.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function md(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function K_(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Wm(i,t,e,n,s,r,a,l){return(s-a)*(t-l)>=(i-a)*(r-l)&&(i-a)*(n-l)>=(e-a)*(t-l)&&(e-a)*(r-l)>=(s-a)*(n-l)}function lo(i,t,e,n,s,r,a,l){return!(i===a&&t===l)&&Wm(i,t,e,n,s,r,a,l)}function Q_(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!tx(i,t)&&(Uo(i,t)&&Uo(t,i)&&ex(i,t)&&(fn(i.prev,i,t.prev)||fn(i,t.prev,t))||_a(i,t)&&fn(i.prev,i,i.next)>0&&fn(t.prev,t,t.next)>0)}function fn(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function _a(i,t){return i.x===t.x&&i.y===t.y}function Xm(i,t,e,n){let s=rc(fn(i,t,e)),r=rc(fn(i,t,n)),a=rc(fn(e,n,i)),l=rc(fn(e,n,t));return!!(s!==r&&a!==l||s===0&&sc(i,e,t)||r===0&&sc(i,n,t)||a===0&&sc(e,i,n)||l===0&&sc(e,t,n))}function sc(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function rc(i){return i>0?1:i<0?-1:0}function tx(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Xm(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Uo(i,t){return fn(i.prev,i,i.next)<0?fn(i,t,i.next)>=0&&fn(i,i.prev,t)>=0:fn(i,t,i.prev)<0||fn(i,i.next,t)<0}function ex(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function qm(i,t){let e=gd(i.i,i.x,i.y),n=gd(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function qp(i,t,e,n){let s=gd(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Fo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function gd(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function nx(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var _d=class{static triangulate(t,e,n=2){return z_(t,e,n)}},lr=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Yp(t),Zp(n,t);let a=t.length;e.forEach(Yp);for(let c=0;c<e.length;c++)s.push(a),a+=e[c].length,Zp(n,e[c]);let l=_d.triangulate(n,s);for(let c=0;c<l.length;c+=3)r.push(l.slice(c,c+3));return r}};function Yp(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Zp(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Oo=class i extends _n{constructor(t=new ga([new $t(.5,.5),new $t(-.5,.5),new $t(-.5,-.5),new $t(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let l=0,c=t.length;l<c;l++){let h=t[l];a(h)}this.setAttribute("position",new gn(s,3)),this.setAttribute("uv",new gn(r,2)),this.computeVertexNormals();function a(l){let c=[],h=e.curveSegments!==void 0?e.curveSegments:12,d=e.steps!==void 0?e.steps:1,v=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,y=e.bevelThickness!==void 0?e.bevelThickness:.2,S=e.bevelSize!==void 0?e.bevelSize:y-.1,I=e.bevelOffset!==void 0?e.bevelOffset:0,_=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,O=e.UVGenerator!==void 0?e.UVGenerator:ix,B,R=!1,E,F,G,T;if(m){B=m.getSpacedPoints(d),R=!0,f=!1;let at=m.isCatmullRomCurve3?m.closed:!1;E=m.computeFrenetFrames(d,at),F=new X,G=new X,T=new X}f||(_=0,y=0,S=0,I=0);let N=l.extractPoints(h),H=N.shape,q=N.holes;if(!lr.isClockWise(H)){H=H.reverse();for(let at=0,At=q.length;at<At;at++){let $=q[at];lr.isClockWise($)&&(q[at]=$.reverse())}}function ot(at){let $=10000000000000001e-36,Ct=at[0];for(let Bt=1;Bt<=at.length;Bt++){let de=Bt%at.length,he=at[de],ue=he.x-Ct.x,Se=he.y-Ct.y,W=ue*ue+Se*Se,Ce=Math.max(Math.abs(he.x),Math.abs(he.y),Math.abs(Ct.x),Math.abs(Ct.y)),we=$*Ce*Ce;if(W<=we){at.splice(de,1),Bt--;continue}Ct=he}}ot(H),q.forEach(ot);let J=q.length,Q=H;for(let at=0;at<J;at++){let At=q[at];H=H.concat(At)}function ht(at,At,$){return At||ye("ExtrudeGeometry: vec does not exist"),at.clone().addScaledVector(At,$)}let ft=H.length;function Tt(at,At,$){let Ct,Bt,de,he=at.x-At.x,ue=at.y-At.y,Se=$.x-at.x,W=$.y-at.y,Ce=he*he+ue*ue,we=he*W-ue*Se;if(Math.abs(we)>Number.EPSILON){let L=Math.sqrt(Ce),b=Math.sqrt(Se*Se+W*W),tt=At.x-ue/L,K=At.y+he/L,mt=$.x-W/b,Dt=$.y+Se/b,Ft=((mt-tt)*W-(Dt-K)*Se)/(he*W-ue*Se);Ct=tt+he*Ft-at.x,Bt=K+ue*Ft-at.y;let gt=Ct*Ct+Bt*Bt;if(gt<=2)return new $t(Ct,Bt);de=Math.sqrt(gt/2)}else{let L=!1;he>Number.EPSILON?Se>Number.EPSILON&&(L=!0):he<-Number.EPSILON?Se<-Number.EPSILON&&(L=!0):Math.sign(ue)===Math.sign(W)&&(L=!0),L?(Ct=-ue,Bt=he,de=Math.sqrt(Ce)):(Ct=he,Bt=ue,de=Math.sqrt(Ce/2))}return new $t(Ct/de,Bt/de)}let pt=[];for(let at=0,At=Q.length,$=At-1,Ct=at+1;at<At;at++,$++,Ct++)$===At&&($=0),Ct===At&&(Ct=0),pt[at]=Tt(Q[at],Q[$],Q[Ct]);let Mt=[],St,qt=pt.concat();for(let at=0,At=J;at<At;at++){let $=q[at];St=[];for(let Ct=0,Bt=$.length,de=Bt-1,he=Ct+1;Ct<Bt;Ct++,de++,he++)de===Bt&&(de=0),he===Bt&&(he=0),St[Ct]=Tt($[Ct],$[de],$[he]);Mt.push(St),qt=qt.concat(St)}let jt;if(_===0)jt=lr.triangulateShape(Q,q);else{let at=[],At=[];for(let $=0;$<_;$++){let Ct=$/_,Bt=y*Math.cos(Ct*Math.PI/2),de=S*Math.sin(Ct*Math.PI/2)+I;for(let he=0,ue=Q.length;he<ue;he++){let Se=ht(Q[he],pt[he],de);Pt(Se.x,Se.y,-Bt),Ct===0&&at.push(Se)}for(let he=0,ue=J;he<ue;he++){let Se=q[he];St=Mt[he];let W=[];for(let Ce=0,we=Se.length;Ce<we;Ce++){let L=ht(Se[Ce],St[Ce],de);Pt(L.x,L.y,-Bt),Ct===0&&W.push(L)}Ct===0&&At.push(W)}}jt=lr.triangulateShape(at,At)}let Ve=jt.length,Ie=S+I;for(let at=0;at<ft;at++){let At=f?ht(H[at],qt[at],Ie):H[at];R?(G.copy(E.normals[0]).multiplyScalar(At.x),F.copy(E.binormals[0]).multiplyScalar(At.y),T.copy(B[0]).add(G).add(F),Pt(T.x,T.y,T.z)):Pt(At.x,At.y,0)}for(let at=1;at<=d;at++)for(let At=0;At<ft;At++){let $=f?ht(H[At],qt[At],Ie):H[At];R?(G.copy(E.normals[at]).multiplyScalar($.x),F.copy(E.binormals[at]).multiplyScalar($.y),T.copy(B[at]).add(G).add(F),Pt(T.x,T.y,T.z)):Pt($.x,$.y,v/d*at)}for(let at=_-1;at>=0;at--){let At=at/_,$=y*Math.cos(At*Math.PI/2),Ct=S*Math.sin(At*Math.PI/2)+I;for(let Bt=0,de=Q.length;Bt<de;Bt++){let he=ht(Q[Bt],pt[Bt],Ct);Pt(he.x,he.y,v+$)}for(let Bt=0,de=q.length;Bt<de;Bt++){let he=q[Bt];St=Mt[Bt];for(let ue=0,Se=he.length;ue<Se;ue++){let W=ht(he[ue],St[ue],Ct);R?Pt(W.x,W.y+B[d-1].y,B[d-1].x+$):Pt(W.x,W.y,v+$)}}}Fe(),_t();function Fe(){let at=s.length/3;if(f){let At=0,$=ft*At;for(let Ct=0;Ct<Ve;Ct++){let Bt=jt[Ct];oe(Bt[2]+$,Bt[1]+$,Bt[0]+$)}At=d+_*2,$=ft*At;for(let Ct=0;Ct<Ve;Ct++){let Bt=jt[Ct];oe(Bt[0]+$,Bt[1]+$,Bt[2]+$)}}else{for(let At=0;At<Ve;At++){let $=jt[At];oe($[2],$[1],$[0])}for(let At=0;At<Ve;At++){let $=jt[At];oe($[0]+ft*d,$[1]+ft*d,$[2]+ft*d)}}n.addGroup(at,s.length/3-at,0)}function _t(){let at=s.length/3,At=0;vt(Q,At),At+=Q.length;for(let $=0,Ct=q.length;$<Ct;$++){let Bt=q[$];vt(Bt,At),At+=Bt.length}n.addGroup(at,s.length/3-at,1)}function vt(at,At){let $=at.length;for(;--$>=0;){let Ct=$,Bt=$-1;Bt<0&&(Bt=at.length-1);for(let de=0,he=d+_*2;de<he;de++){let ue=ft*de,Se=ft*(de+1),W=At+Ct+ue,Ce=At+Bt+ue,we=At+Bt+Se,L=At+Ct+Se;Yt(W,Ce,we,L)}}}function Pt(at,At,$){c.push(at),c.push(At),c.push($)}function oe(at,At,$){pe(at),pe(At),pe($);let Ct=s.length/3,Bt=O.generateTopUV(n,s,Ct-3,Ct-2,Ct-1);se(Bt[0]),se(Bt[1]),se(Bt[2])}function Yt(at,At,$,Ct){pe(at),pe(At),pe(Ct),pe(At),pe($),pe(Ct);let Bt=s.length/3,de=O.generateSideWallUV(n,s,Bt-6,Bt-3,Bt-2,Bt-1);se(de[0]),se(de[1]),se(de[3]),se(de[1]),se(de[2]),se(de[3])}function pe(at){s.push(c[at*3+0]),s.push(c[at*3+1]),s.push(c[at*3+2])}function se(at){r.push(at.x),r.push(at.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return sx(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let l=e[t.shapes[r]];n.push(l)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new pd[s.type]().fromJSON(s)),new i(n,t.options)}},ix={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],l=t[n*3],c=t[n*3+1],h=t[s*3],d=t[s*3+1];return[new $t(r,a),new $t(l,c),new $t(h,d)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],l=t[e*3+1],c=t[e*3+2],h=t[n*3],d=t[n*3+1],v=t[n*3+2],f=t[s*3],y=t[s*3+1],S=t[s*3+2],I=t[r*3],_=t[r*3+1],m=t[r*3+2];return Math.abs(l-d)<Math.abs(a-h)?[new $t(a,1-c),new $t(h,1-v),new $t(f,1-S),new $t(I,1-m)]:[new $t(l,1-c),new $t(d,1-v),new $t(y,1-S),new $t(_,1-m)]}};function sx(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Bo=class i extends _n{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,l=Math.floor(n),c=Math.floor(s),h=l+1,d=c+1,v=t/l,f=e/c,y=[],S=[],I=[],_=[];for(let m=0;m<d;m++){let O=m*f-a;for(let B=0;B<h;B++){let R=B*v-r;S.push(R,-O,0),I.push(0,0,1),_.push(B/l),_.push(1-m/c)}}for(let m=0;m<c;m++)for(let O=0;O<l;O++){let B=O+h*m,R=O+h*(m+1),E=O+1+h*(m+1),F=O+1+h*m;y.push(B,R,F),y.push(R,E,F)}this.setIndex(y),this.setAttribute("position",new gn(S,3)),this.setAttribute("normal",new gn(I,3)),this.setAttribute("uv",new gn(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var ko=class extends _n{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],n=new Set,s=new X,r=new X;if(t.index!==null){let a=t.attributes.position,l=t.index,c=t.groups;c.length===0&&(c=[{start:0,count:l.count,materialIndex:0}]);for(let h=0,d=c.length;h<d;++h){let v=c[h],f=v.start,y=v.count;for(let S=f,I=f+y;S<I;S+=3)for(let _=0;_<3;_++){let m=l.getX(S+_),O=l.getX(S+(_+1)%3);s.fromBufferAttribute(a,m),r.fromBufferAttribute(a,O),Jp(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{let a=t.attributes.position;for(let l=0,c=a.count/3;l<c;l++)for(let h=0;h<3;h++){let d=3*l+h,v=3*l+(h+1)%3;s.fromBufferAttribute(a,d),r.fromBufferAttribute(a,v),Jp(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new gn(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function Jp(i,t,e){let n=`${i.x},${i.y},${i.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${i.x},${i.y},${i.z}`;return e.has(n)===!0||e.has(s)===!0?!1:(e.add(n),e.add(s),!0)}function xr(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(jp(s))s.isRenderTargetTexture?(xe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(jp(s[0])){let r=[];for(let a=0,l=s.length;a<l;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Hn(i){let t={};for(let e=0;e<i.length;e++){let n=xr(i[e]);for(let s in n)t[s]=n[s]}return t}function jp(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function rx(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function qd(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ke.workingColorSpace}var sl={clone:xr,merge:Hn},ax=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ox=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Pn=class extends Zi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ax,this.fragmentShader=ox,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=xr(t.uniforms),this.uniformsGroups=rx(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new ge().setHex(s.value);break;case"v2":this.uniforms[n].value=new $t().fromArray(s.value);break;case"v3":this.uniforms[n].value=new X().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Qe().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ae().fromArray(s.value);break;case"m4":this.uniforms[n].value=new $e().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Fc=class extends Pn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var zo=class extends Zi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kh,this.normalScale=new $t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ys,this.combine=Kc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Oc=class extends Zi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Im,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Bc=class extends Zi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ta(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function ad(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Us=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let l=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===l)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let l=e[1];t<l&&(n=2,r=l);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let l=n+a>>>1;t<e[l]?a=l:n=l+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},kc=class extends Us{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:hd,endingEnd:hd}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,l=s[r],c=s[a];if(l===void 0)switch(this.getSettings_().endingStart){case ud:r=t,l=2*e-n;break;case dd:r=s.length-2,l=e+s[r]-s[r+1];break;default:r=t,l=n}if(c===void 0)switch(this.getSettings_().endingEnd){case ud:a=t,c=2*n-e;break;case dd:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}let h=(n-e)*.5,d=this.valueSize;this._weightPrev=h/(e-l),this._weightNext=h/(c-n),this._offsetPrev=r*d,this._offsetNext=a*d}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=t*l,h=c-l,d=this._offsetPrev,v=this._offsetNext,f=this._weightPrev,y=this._weightNext,S=(n-e)/(s-e),I=S*S,_=I*S,m=-f*_+2*f*I-f*S,O=(1+f)*_+(-1.5-2*f)*I+(-.5+f)*S+1,B=(-1-y)*_+(1.5+y)*I+.5*S,R=y*_-y*I;for(let E=0;E!==l;++E)r[E]=m*a[d+E]+O*a[h+E]+B*a[c+E]+R*a[v+E];return r}},zc=class extends Us{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=t*l,h=c-l,d=(n-e)/(s-e),v=1-d;for(let f=0;f!==l;++f)r[f]=a[h+f]*v+a[c+f]*d;return r}},$c=class extends Us{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Vc=class extends Us{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=t*l,h=c-l,d=this.inTangents,v=this.outTangents;if(!d||!v){let S=(n-e)/(s-e),I=1-S;for(let _=0;_!==l;++_)r[_]=a[h+_]*I+a[c+_]*S;return r}let f=l*2,y=t-1;for(let S=0;S!==l;++S){let I=a[h+S],_=a[c+S],m=y*f+S*2,O=v[m],B=v[m+1],R=t*f+S*2,E=d[R],F=d[R+1],G=cx(n,e,O,E,s);r[S]=Ym(G,I,B,F,_)}return r}};function Ym(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function lx(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function cx(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let l=Ym(r,t,e,n,s)-i;if(Math.abs(l)<1e-10)break;let c=lx(r,t,e,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-l/c))}return r}var fi=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ta(e,this.TimeBufferType),this.values=ta(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ta(t.times,Array),values:ta(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),ad(t.settings)&&(n.settings={inTangents:ta(t.settings.inTangents,Array),outTangents:ta(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new $c(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new zc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new kc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Vc(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case po:e=this.InterpolantFactoryMethodDiscrete;break;case yc:e=this.InterpolantFactoryMethodLinear;break;case cc:e=this.InterpolantFactoryMethodSmooth;break;case cd:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return xe("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return po;case this.InterpolantFactoryMethodLinear:return yc;case this.InterpolantFactoryMethodSmooth:return cc;case this.InterpolantFactoryMethodBezier:return cd}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;ad(this.settings)&&(Kp(this.settings.inTangents,t),Kp(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let l=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*l,a*l)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ye("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(ye("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let l=0;l!==r;l++){let c=n[l];if(typeof c=="number"&&isNaN(c)){ye("KeyframeTrack: Time is not a valid number.",this,l,c),t=!1;break}if(a!==null&&a>c){ye("KeyframeTrack: Out of order keys.",this,l,c,a),t=!1;break}a=c}if(s!==void 0&&j0(s))for(let l=0,c=s.length;l!==c;++l){let h=s[l];if(isNaN(h)){ye("KeyframeTrack: Value is not a valid number.",this,l,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===cc,r=t.length-1,a=1;for(let l=1;l<r;++l){let c=!1,h=t[l],d=t[l+1];if(h!==d&&(l!==1||h!==t[0]))if(s)c=!0;else{let v=l*n,f=v-n,y=v+n;for(let S=0;S!==n;++S){let I=e[v+S];if(I!==e[f+S]||I!==e[y+S]){c=!0;break}}}if(c){if(l!==a){t[a]=t[l];let v=l*n,f=a*n;for(let y=0;y!==n;++y)e[f+y]=e[v+y]}++a}}if(r>0){t[a]=t[r];for(let l=r*n,c=a*n,h=0;h!==n;++h)e[c+h]=e[l+h];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,ad(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Kp(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}fi.prototype.ValueTypeName="";fi.prototype.TimeBufferType=Float32Array;fi.prototype.ValueBufferType=Float32Array;fi.prototype.DefaultInterpolation=yc;var Fs=class extends fi{constructor(t,e,n){super(t,e,n)}};Fs.prototype.ValueTypeName="bool";Fs.prototype.ValueBufferType=Array;Fs.prototype.DefaultInterpolation=po;Fs.prototype.InterpolantFactoryMethodLinear=void 0;Fs.prototype.InterpolantFactoryMethodSmooth=void 0;var Hc=class extends fi{constructor(t,e,n,s){super(t,e,n,s)}};Hc.prototype.ValueTypeName="color";var Gc=class extends fi{constructor(t,e,n,s){super(t,e,n,s)}};Gc.prototype.ValueTypeName="number";var Wc=class extends Us{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=(n-e)/(s-e),h=t*l;for(let d=h+l;h!==d;h+=4)Yi.slerpFlat(r,0,a,h-l,a,h,c);return r}},$o=class extends fi{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Wc(this.times,this.values,this.getValueSize(),t)}};$o.prototype.ValueTypeName="quaternion";$o.prototype.InterpolantFactoryMethodSmooth=void 0;var Os=class extends fi{constructor(t,e,n){super(t,e,n)}};Os.prototype.ValueTypeName="string";Os.prototype.ValueBufferType=Array;Os.prototype.DefaultInterpolation=po;Os.prototype.InterpolantFactoryMethodLinear=void 0;Os.prototype.InterpolantFactoryMethodSmooth=void 0;var Xc=class extends fi{constructor(t,e,n,s){super(t,e,n,s)}};Xc.prototype.ValueTypeName="vector";var qc=class{constructor(t,e,n){let s=this,r=!1,a=0,l=0,c,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(d){l++,r===!1&&s.onStart!==void 0&&s.onStart(d,a,l),r=!0},this.itemEnd=function(d){a++,s.onProgress!==void 0&&s.onProgress(d,a,l),a===l&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),c?c(d):d},this.setURLModifier=function(d){return c=d,this},this.addHandler=function(d,v){return h.push(d,v),this},this.removeHandler=function(d){let v=h.indexOf(d);return v!==-1&&h.splice(v,2),this},this.getHandler=function(d){for(let v=0,f=h.length;v<f;v+=2){let y=h[v],S=h[v+1];if(y.global&&(y.lastIndex=0),y.test(d))return S}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Zm=new qc,Yc=class{constructor(t){this.manager=t!==void 0?t:Zm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Yc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Vo=class extends Rn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ge(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Ho=class extends Vo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Rn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ge(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},od=new $e,Qp=new X,tm=new X,Zc=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $t(512,512),this.mapType=ri,this.map=null,this.mapPass=null,this.matrix=new $e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fa,this._frameExtents=new $t(1,1),this._viewportCount=1,this._viewports=[new Qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Qp.setFromMatrixPosition(t.matrixWorld),e.position.copy(Qp),tm.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(tm),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){od.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(od,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,l=s?s.w/r.y:1,c=s?s.x/r.x:0,h=s?s.y/r.y:0;t.coordinateSystem===oa||t.reversedDepth?e.set(.5*a,0,0,.5*a+c,0,.5*l,0,.5*l+h,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+c,0,.5*l,0,.5*l+h,0,0,.5,.5,0,0,0,1),e.multiply(od)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},ac=new X,oc=new Yi,Hi=new X,Go=class extends Rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=Li,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ac,oc,Hi),Hi.x===1&&Hi.y===1&&Hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ac,oc,Hi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(ac,oc,Hi),Hi.x===1&&Hi.y===1&&Hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ac,oc,Hi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ls=new X,em=new $t,nm=new $t,Vn=class extends Go{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ca*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(co*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ca*2*Math.atan(Math.tan(co*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ls.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ls.x,Ls.y).multiplyScalar(-t/Ls.z),Ls.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ls.x,Ls.y).multiplyScalar(-t/Ls.z)}getViewSize(t,e){return this.getViewBounds(t,em,nm),e.subVectors(nm,em)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(co*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,h=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/h,s*=a.width/c,n*=a.height/h}let l=this.filmOffset;l!==0&&(r+=t*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var xa=class extends Go{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,l=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,l-=d*this.view.offsetY,c=l-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,l,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},xd=class extends Zc{constructor(){super(new xa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Wo=class extends Vo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rn.DEFAULT_UP),this.updateMatrix(),this.target=new Rn,this.shadow=new xd}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Xo=class extends _n{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var ea=-90,na=1,Jc=class extends Rn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Vn(ea,na,t,e);s.layers=this.layers,this.add(s);let r=new Vn(ea,na,t,e);r.layers=this.layers,this.add(r);let a=new Vn(ea,na,t,e);a.layers=this.layers,this.add(a);let l=new Vn(ea,na,t,e);l.layers=this.layers,this.add(l);let c=new Vn(ea,na,t,e);c.layers=this.layers,this.add(c);let h=new Vn(ea,na,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,l,c]=e;for(let h of e)this.remove(h);if(t===Li)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===oa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,l,c,h,d]=this.children,v=t.getRenderTarget(),f=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),S=t.xr.enabled;t.xr.enabled=!1;let I=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let _=!1;t.isWebGLRenderer===!0?_=t.state.buffers.depth.getReversed():_=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,3,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),n.texture.generateMipmaps=I,t.setRenderTarget(n,5,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,d),t.setRenderTarget(v,f,y),t.xr.enabled=S,n.texture.needsPMREMUpdate=!0}},jc=class extends Vn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Yd="\\[\\]\\.:\\/",hx=new RegExp("["+Yd+"]","g"),Zd="[^"+Yd+"]",ux="[^"+Yd.replace("\\.","")+"]",dx=/((?:WC+[\/:])*)/.source.replace("WC",Zd),fx=/(WCOD+)?/.source.replace("WCOD",ux),px=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Zd),mx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Zd),gx=new RegExp("^"+dx+fx+px+mx+"$"),_x=["material","materials","bones","map"],vd=class{constructor(t,e,n){let s=n||hn.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},hn=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(hx,"")}static parseTrackName(t){let e=gx.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);_x.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let l=r[a];if(l.name===e||l.uuid===e)return l;let c=n(l.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){xe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=e.objectIndex;switch(n){case"materials":if(!t.material){ye("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ye("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ye("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===h){h=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ye("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ye("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){ye("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(h!==void 0){if(t[h]===void 0){ye("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let a=t[s];if(a===void 0){let h=e.nodeName;ye("PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",t);return}let l=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?l=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){ye("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ye("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};hn.Composite=vd;hn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};hn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};hn.prototype.GetterByBindingType=[hn.prototype._getValue_direct,hn.prototype._getValue_array,hn.prototype._getValue_arrayElement,hn.prototype._getValue_toArray];hn.prototype.SetterByBindingTypeAndVersioning=[[hn.prototype._setValue_direct,hn.prototype._setValue_direct_setNeedsUpdate,hn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[hn.prototype._setValue_array,hn.prototype._setValue_array_setNeedsUpdate,hn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[hn.prototype._setValue_arrayElement,hn.prototype._setValue_arrayElement_setNeedsUpdate,hn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[hn.prototype._setValue_fromArray,hn.prototype._setValue_fromArray_setNeedsUpdate,hn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Pb=new Float32Array(1);var Bs=class extends wc{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}};var im=new $e,qo=class{constructor(t,e,n=0,s=1/0){this.ray=new hr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new ua,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ye("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return im.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(im),this}intersectObject(t,e=!0,n=[]){return yd(t,this,n,e),n.sort(sm),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)yd(t[s],this,n,e);return n.sort(sm),n}};function sm(i,t){return i.distance-t.distance}function yd(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,l=r.length;a<l;a++)yd(r[a],t,e,!0)}}var Sd=class i{static{i.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};var rm=new X,lc=new X,ia=new X,sa=new X,ld=new X,xx=new X,vx=new X,Yo=class{constructor(t=new X,e=new X){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){rm.subVectors(t,this.start),lc.subVectors(this.end,this.start);let n=lc.dot(lc);if(n===0)return 0;let r=lc.dot(rm)/n;return e&&(r=Re(r,0,1)),r}closestPointToPoint(t,e,n){let s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}distanceSqToLine3(t,e=xx,n=vx){let s=10000000000000001e-32,r,a,l=this.start,c=t.start,h=this.end,d=t.end;ia.subVectors(h,l),sa.subVectors(d,c),ld.subVectors(l,c);let v=ia.dot(ia),f=sa.dot(sa),y=sa.dot(ld);if(v<=s&&f<=s)return e.copy(l),n.copy(c),e.sub(n),e.dot(e);if(v<=s)r=0,a=y/f,a=Re(a,0,1);else{let S=ia.dot(ld);if(f<=s)a=0,r=Re(-S/v,0,1);else{let I=ia.dot(sa),_=v*f-I*I;_!==0?r=Re((I*y-S*f)/_,0,1):r=0,a=(I*r+y)/f,a<0?(a=0,r=Re(-S/v,0,1)):a>1&&(a=1,r=Re((I-S)/v,0,1))}}return e.copy(l).addScaledVector(ia,r),n.copy(c).addScaledVector(sa,a),e.distanceToSquared(n)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};function Jd(i,t,e,n){let s=yx(n);switch(e){case zd:return i*t;case rh:return i*t/s.components*s.byteLength;case ah:return i*t/s.components*s.byteLength;case Hs:return i*t*2/s.components*s.byteLength;case oh:return i*t*2/s.components*s.byteLength;case $d:return i*t*3/s.components*s.byteLength;case Mi:return i*t*4/s.components*s.byteLength;case lh:return i*t*4/s.components*s.byteLength;case Ko:case Qo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case tl:case el:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case hh:case dh:return Math.max(i,16)*Math.max(t,8)/4;case ch:case uh:return Math.max(i,8)*Math.max(t,8)/2;case fh:case ph:case gh:case _h:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case mh:case nl:case xh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case vh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case yh:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Sh:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Mh:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case bh:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case wh:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Eh:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Th:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ah:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ch:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Rh:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ih:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ph:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Lh:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Dh:case Nh:case Uh:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Fh:case Oh:return Math.ceil(i/4)*Math.ceil(t/4)*8;case il:case Bh:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function yx(i){switch(i){case ri:case Fd:return{byteLength:1,components:1};case Sa:case Od:case Oi:return{byteLength:2,components:1};case ih:case sh:return{byteLength:2,components:4};case Fi:case nh:case Si:return{byteLength:4,components:1};case Bd:case kd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?xe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function _g(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Mx(i){let t=new WeakMap;function e(l,c){let h=l.array,d=l.usage,v=h.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,h,d),l.onUploadCallback();let y;if(h instanceof Float32Array)y=i.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)y=i.HALF_FLOAT;else if(h instanceof Uint16Array)l.isFloat16BufferAttribute?y=i.HALF_FLOAT:y=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)y=i.SHORT;else if(h instanceof Uint32Array)y=i.UNSIGNED_INT;else if(h instanceof Int32Array)y=i.INT;else if(h instanceof Int8Array)y=i.BYTE;else if(h instanceof Uint8Array)y=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)y=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:f,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version,size:v}}function n(l,c,h){let d=c.array,v=c.updateRanges;if(i.bindBuffer(h,l),v.length===0)i.bufferSubData(h,0,d);else{v.sort((y,S)=>y.start-S.start);let f=0;for(let y=1;y<v.length;y++){let S=v[f],I=v[y];I.start<=S.start+S.count+1?S.count=Math.max(S.count,I.start+I.count-S.start):(++f,v[f]=I)}v.length=f+1;for(let y=0,S=v.length;y<S;y++){let I=v[y];i.bufferSubData(h,I.start*d.BYTES_PER_ELEMENT,d,I.start,I.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),t.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);let c=t.get(l);c&&(i.deleteBuffer(c.buffer),t.delete(l))}function a(l,c){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){let d=t.get(l);(!d||d.version<l.version)&&t.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}let h=t.get(l);if(h===void 0)t.set(l,e(l,c));else if(h.version<l.version){if(h.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,l,c),h.version=l.version}}return{get:s,remove:r,update:a}}var bx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wx=`#ifdef USE_ALPHAHASH
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
#endif`,Ex=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Tx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ax=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Cx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rx=`#ifdef USE_AOMAP
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
#endif`,Ix=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Px=`#ifdef USE_BATCHING
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
#endif`,Lx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Dx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Nx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ux=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Fx=`#ifdef USE_IRIDESCENCE
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
#endif`,Ox=`#ifdef USE_BUMPMAP
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
#endif`,Bx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,kx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$x=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Hx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Gx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Wx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Xx=`#define PI 3.141592653589793
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
} // validated`,qx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Yx=`vec3 transformedNormal = objectNormal;
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
#endif`,Zx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Jx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Kx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qx="gl_FragColor = linearToOutputTexel( gl_FragColor );",tv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ev=`#ifdef USE_ENVMAP
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
#endif`,nv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,iv=`#ifdef USE_ENVMAP
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
#endif`,sv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rv=`#ifdef USE_ENVMAP
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
#endif`,av=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ov=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hv=`#ifdef USE_GRADIENTMAP
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
}`,uv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pv=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,mv=`#ifdef USE_ENVMAP
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
#endif`,gv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_v=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yv=`PhysicalMaterial material;
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
#endif`,Sv=`uniform sampler2D dfgLUT;
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
}`,Mv=`
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
#endif`,bv=`#if defined( RE_IndirectDiffuse )
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
#endif`,wv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ev=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Tv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Av=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Iv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Pv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Lv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Dv=`#if defined( USE_POINTS_UV )
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
#endif`,Nv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Uv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ov=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kv=`#ifdef USE_MORPHTARGETS
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
#endif`,zv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$v=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Vv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Hv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Xv=`#ifdef USE_NORMALMAP
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
#endif`,qv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Kv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Qv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ty=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ey=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ny=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,iy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ry=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ay=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,oy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ly=`float getShadowMask() {
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
}`,cy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hy=`#ifdef USE_SKINNING
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
#endif`,uy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dy=`#ifdef USE_SKINNING
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
#endif`,fy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,py=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,my=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,_y=`#ifdef USE_TRANSMISSION
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
#endif`,xy=`#ifdef USE_TRANSMISSION
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
#endif`,vy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,My=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,by=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wy=`uniform sampler2D t2D;
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
}`,Ey=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ty=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ay=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ry=`#include <common>
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
}`,Iy=`#if DEPTH_PACKING == 3200
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
}`,Py=`#define DISTANCE
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
}`,Ly=`#define DISTANCE
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
}`,Dy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ny=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Uy=`uniform float scale;
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
}`,Fy=`uniform vec3 diffuse;
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
}`,Oy=`#include <common>
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
}`,By=`uniform vec3 diffuse;
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
}`,ky=`#define LAMBERT
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
}`,zy=`#define LAMBERT
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
}`,$y=`#define MATCAP
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
}`,Vy=`#define MATCAP
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
}`,Hy=`#define NORMAL
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
}`,Gy=`#define NORMAL
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
}`,Wy=`#define PHONG
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
}`,Xy=`#define PHONG
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
}`,qy=`#define STANDARD
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
}`,Yy=`#define STANDARD
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
}`,Zy=`#define TOON
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
}`,Jy=`#define TOON
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
}`,jy=`uniform float size;
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
}`,Ky=`uniform vec3 diffuse;
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
}`,Qy=`#include <common>
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
}`,tS=`uniform vec3 color;
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
}`,eS=`uniform float rotation;
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
}`,nS=`uniform vec3 diffuse;
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
}`,Le={alphahash_fragment:bx,alphahash_pars_fragment:wx,alphamap_fragment:Ex,alphamap_pars_fragment:Tx,alphatest_fragment:Ax,alphatest_pars_fragment:Cx,aomap_fragment:Rx,aomap_pars_fragment:Ix,batching_pars_vertex:Px,batching_vertex:Lx,begin_vertex:Dx,beginnormal_vertex:Nx,bsdfs:Ux,iridescence_fragment:Fx,bumpmap_pars_fragment:Ox,clipping_planes_fragment:Bx,clipping_planes_pars_fragment:kx,clipping_planes_pars_vertex:zx,clipping_planes_vertex:$x,color_fragment:Vx,color_pars_fragment:Hx,color_pars_vertex:Gx,color_vertex:Wx,common:Xx,cube_uv_reflection_fragment:qx,defaultnormal_vertex:Yx,displacementmap_pars_vertex:Zx,displacementmap_vertex:Jx,emissivemap_fragment:jx,emissivemap_pars_fragment:Kx,colorspace_fragment:Qx,colorspace_pars_fragment:tv,envmap_fragment:ev,envmap_common_pars_fragment:nv,envmap_pars_fragment:iv,envmap_pars_vertex:sv,envmap_physical_pars_fragment:mv,envmap_vertex:rv,fog_vertex:av,fog_pars_vertex:ov,fog_fragment:lv,fog_pars_fragment:cv,gradientmap_pars_fragment:hv,lightmap_pars_fragment:uv,lights_lambert_fragment:dv,lights_lambert_pars_fragment:fv,lights_pars_begin:pv,lights_toon_fragment:gv,lights_toon_pars_fragment:_v,lights_phong_fragment:xv,lights_phong_pars_fragment:vv,lights_physical_fragment:yv,lights_physical_pars_fragment:Sv,lights_fragment_begin:Mv,lights_fragment_maps:bv,lights_fragment_end:wv,lightprobes_pars_fragment:Ev,logdepthbuf_fragment:Tv,logdepthbuf_pars_fragment:Av,logdepthbuf_pars_vertex:Cv,logdepthbuf_vertex:Rv,map_fragment:Iv,map_pars_fragment:Pv,map_particle_fragment:Lv,map_particle_pars_fragment:Dv,metalnessmap_fragment:Nv,metalnessmap_pars_fragment:Uv,morphinstance_vertex:Fv,morphcolor_vertex:Ov,morphnormal_vertex:Bv,morphtarget_pars_vertex:kv,morphtarget_vertex:zv,normal_fragment_begin:$v,normal_fragment_maps:Vv,normal_pars_fragment:Hv,normal_pars_vertex:Gv,normal_vertex:Wv,normalmap_pars_fragment:Xv,clearcoat_normal_fragment_begin:qv,clearcoat_normal_fragment_maps:Yv,clearcoat_pars_fragment:Zv,iridescence_pars_fragment:Jv,opaque_fragment:jv,packing:Kv,premultiplied_alpha_fragment:Qv,project_vertex:ty,dithering_fragment:ey,dithering_pars_fragment:ny,roughnessmap_fragment:iy,roughnessmap_pars_fragment:sy,shadowmap_pars_fragment:ry,shadowmap_pars_vertex:ay,shadowmap_vertex:oy,shadowmask_pars_fragment:ly,skinbase_vertex:cy,skinning_pars_vertex:hy,skinning_vertex:uy,skinnormal_vertex:dy,specularmap_fragment:fy,specularmap_pars_fragment:py,tonemapping_fragment:my,tonemapping_pars_fragment:gy,transmission_fragment:_y,transmission_pars_fragment:xy,uv_pars_fragment:vy,uv_pars_vertex:yy,uv_vertex:Sy,worldpos_vertex:My,background_vert:by,background_frag:wy,backgroundCube_vert:Ey,backgroundCube_frag:Ty,cube_vert:Ay,cube_frag:Cy,depth_vert:Ry,depth_frag:Iy,distance_vert:Py,distance_frag:Ly,equirect_vert:Dy,equirect_frag:Ny,linedashed_vert:Uy,linedashed_frag:Fy,meshbasic_vert:Oy,meshbasic_frag:By,meshlambert_vert:ky,meshlambert_frag:zy,meshmatcap_vert:$y,meshmatcap_frag:Vy,meshnormal_vert:Hy,meshnormal_frag:Gy,meshphong_vert:Wy,meshphong_frag:Xy,meshphysical_vert:qy,meshphysical_frag:Yy,meshtoon_vert:Zy,meshtoon_frag:Jy,points_vert:jy,points_frag:Ky,shadow_vert:Qy,shadow_frag:tS,sprite_vert:eS,sprite_frag:nS},Vt={common:{diffuse:{value:new ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ae},alphaMap:{value:null},alphaMapTransform:{value:new Ae},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ae}},envmap:{envMap:{value:null},envMapRotation:{value:new Ae},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ae}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ae}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ae},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ae},normalScale:{value:new $t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ae},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ae}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ae}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ae}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new X},probesMax:{value:new X},probesResolution:{value:new X}},points:{diffuse:{value:new ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ae},alphaTest:{value:0},uvTransform:{value:new Ae}},sprite:{diffuse:{value:new ge(16777215)},opacity:{value:1},center:{value:new $t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ae},alphaMap:{value:null},alphaMapTransform:{value:new Ae},alphaTest:{value:0}}},jn={basic:{uniforms:Hn([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.fog]),vertexShader:Le.meshbasic_vert,fragmentShader:Le.meshbasic_frag},lambert:{uniforms:Hn([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,Vt.lights,{emissive:{value:new ge(0)},envMapIntensity:{value:1}}]),vertexShader:Le.meshlambert_vert,fragmentShader:Le.meshlambert_frag},phong:{uniforms:Hn([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,Vt.lights,{emissive:{value:new ge(0)},specular:{value:new ge(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Le.meshphong_vert,fragmentShader:Le.meshphong_frag},standard:{uniforms:Hn([Vt.common,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.roughnessmap,Vt.metalnessmap,Vt.fog,Vt.lights,{emissive:{value:new ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag},toon:{uniforms:Hn([Vt.common,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.gradientmap,Vt.fog,Vt.lights,{emissive:{value:new ge(0)}}]),vertexShader:Le.meshtoon_vert,fragmentShader:Le.meshtoon_frag},matcap:{uniforms:Hn([Vt.common,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,{matcap:{value:null}}]),vertexShader:Le.meshmatcap_vert,fragmentShader:Le.meshmatcap_frag},points:{uniforms:Hn([Vt.points,Vt.fog]),vertexShader:Le.points_vert,fragmentShader:Le.points_frag},dashed:{uniforms:Hn([Vt.common,Vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Le.linedashed_vert,fragmentShader:Le.linedashed_frag},depth:{uniforms:Hn([Vt.common,Vt.displacementmap]),vertexShader:Le.depth_vert,fragmentShader:Le.depth_frag},normal:{uniforms:Hn([Vt.common,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,{opacity:{value:1}}]),vertexShader:Le.meshnormal_vert,fragmentShader:Le.meshnormal_frag},sprite:{uniforms:Hn([Vt.sprite,Vt.fog]),vertexShader:Le.sprite_vert,fragmentShader:Le.sprite_frag},background:{uniforms:{uvTransform:{value:new Ae},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Le.background_vert,fragmentShader:Le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ae}},vertexShader:Le.backgroundCube_vert,fragmentShader:Le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Le.cube_vert,fragmentShader:Le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Le.equirect_vert,fragmentShader:Le.equirect_frag},distance:{uniforms:Hn([Vt.common,Vt.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Le.distance_vert,fragmentShader:Le.distance_frag},shadow:{uniforms:Hn([Vt.lights,Vt.fog,{color:{value:new ge(0)},opacity:{value:1}}]),vertexShader:Le.shadow_vert,fragmentShader:Le.shadow_frag}};jn.physical={uniforms:Hn([jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ae},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ae},clearcoatNormalScale:{value:new $t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ae},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ae},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ae},sheen:{value:0},sheenColor:{value:new ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ae},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ae},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ae},transmissionSamplerSize:{value:new $t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ae},attenuationDistance:{value:0},attenuationColor:{value:new ge(0)},specularColor:{value:new ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ae},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ae},anisotropyVector:{value:new $t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ae}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag};var Vh={r:0,b:0,g:0},iS=new $e,xg=new Ae;xg.set(-1,0,0,0,1,0,0,0,1);function sS(i,t,e,n,s,r){let a=new ge(0),l=s===!0?0:1,c,h,d=null,v=0,f=null;function y(O){let B=O.isScene===!0?O.background:null;if(B&&B.isTexture){let R=O.backgroundBlurriness>0;B=t.get(B,R)}return B}function S(O){let B=!1,R=y(O);R===null?_(a,l):R&&R.isColor&&(_(R,1),B=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?e.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||B)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function I(O,B){let R=y(B);R&&(R.isCubeTexture||R.mapping===Jo)?(h===void 0&&(h=new In(new pa(1,1,1),new Pn({name:"BackgroundCubeMaterial",uniforms:xr(jn.backgroundCube.uniforms),vertexShader:jn.backgroundCube.vertexShader,fragmentShader:jn.backgroundCube.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,F,G){this.matrixWorld.copyPosition(G.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=R,h.material.uniforms.backgroundBlurriness.value=B.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(iS.makeRotationFromEuler(B.backgroundRotation)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(xg),h.material.toneMapped=ke.getTransfer(R.colorSpace)!==Ke,(d!==R||v!==R.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,d=R,v=R.version,f=i.toneMapping),h.layers.enableAll(),O.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new In(new Bo(2,2),new Pn({name:"BackgroundMaterial",uniforms:xr(jn.background.uniforms),vertexShader:jn.background.vertexShader,fragmentShader:jn.background.fragmentShader,side:ks,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,c.material.toneMapped=ke.getTransfer(R.colorSpace)!==Ke,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(d!==R||v!==R.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,d=R,v=R.version,f=i.toneMapping),c.layers.enableAll(),O.unshift(c,c.geometry,c.material,0,0,null))}function _(O,B){O.getRGB(Vh,qd(i)),e.buffers.color.setClear(Vh.r,Vh.g,Vh.b,B,r)}function m(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(O,B=1){a.set(O),l=B,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(O){l=O,_(a,l)},render:S,addToRenderList:I,dispose:m}}function rS(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function l(q,st,ot,J,Q){let ht=!1,ft=v(q,J,ot,st);r!==ft&&(r=ft,h(r.object)),ht=y(q,J,ot,Q),ht&&S(q,J,ot,Q),Q!==null&&t.update(Q,i.ELEMENT_ARRAY_BUFFER),(ht||a)&&(a=!1,R(q,st,ot,J),Q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Q).buffer))}function c(){return i.createVertexArray()}function h(q){return i.bindVertexArray(q)}function d(q){return i.deleteVertexArray(q)}function v(q,st,ot,J){let Q=J.wireframe===!0,ht=n[st.id];ht===void 0&&(ht={},n[st.id]=ht);let ft=q.isInstancedMesh===!0?q.id:0,Tt=ht[ft];Tt===void 0&&(Tt={},ht[ft]=Tt);let pt=Tt[ot.id];pt===void 0&&(pt={},Tt[ot.id]=pt);let Mt=pt[Q];return Mt===void 0&&(Mt=f(c()),pt[Q]=Mt),Mt}function f(q){let st=[],ot=[],J=[];for(let Q=0;Q<e;Q++)st[Q]=0,ot[Q]=0,J[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:st,enabledAttributes:ot,attributeDivisors:J,object:q,attributes:{},index:null}}function y(q,st,ot,J){let Q=r.attributes,ht=st.attributes,ft=0,Tt=ot.getAttributes();for(let pt in Tt)if(Tt[pt].location>=0){let St=Q[pt],qt=ht[pt];if(qt===void 0&&(pt==="instanceMatrix"&&q.instanceMatrix&&(qt=q.instanceMatrix),pt==="instanceColor"&&q.instanceColor&&(qt=q.instanceColor)),St===void 0||St.attribute!==qt||qt&&St.data!==qt.data)return!0;ft++}return r.attributesNum!==ft||r.index!==J}function S(q,st,ot,J){let Q={},ht=st.attributes,ft=0,Tt=ot.getAttributes();for(let pt in Tt)if(Tt[pt].location>=0){let St=ht[pt];St===void 0&&(pt==="instanceMatrix"&&q.instanceMatrix&&(St=q.instanceMatrix),pt==="instanceColor"&&q.instanceColor&&(St=q.instanceColor));let qt={};qt.attribute=St,St&&St.data&&(qt.data=St.data),Q[pt]=qt,ft++}r.attributes=Q,r.attributesNum=ft,r.index=J}function I(){let q=r.newAttributes;for(let st=0,ot=q.length;st<ot;st++)q[st]=0}function _(q){m(q,0)}function m(q,st){let ot=r.newAttributes,J=r.enabledAttributes,Q=r.attributeDivisors;ot[q]=1,J[q]===0&&(i.enableVertexAttribArray(q),J[q]=1),Q[q]!==st&&(i.vertexAttribDivisor(q,st),Q[q]=st)}function O(){let q=r.newAttributes,st=r.enabledAttributes;for(let ot=0,J=st.length;ot<J;ot++)st[ot]!==q[ot]&&(i.disableVertexAttribArray(ot),st[ot]=0)}function B(q,st,ot,J,Q,ht,ft){ft===!0?i.vertexAttribIPointer(q,st,ot,Q,ht):i.vertexAttribPointer(q,st,ot,J,Q,ht)}function R(q,st,ot,J){I();let Q=J.attributes,ht=ot.getAttributes(),ft=st.defaultAttributeValues;for(let Tt in ht){let pt=ht[Tt];if(pt.location>=0){let Mt=Q[Tt];if(Mt===void 0&&(Tt==="instanceMatrix"&&q.instanceMatrix&&(Mt=q.instanceMatrix),Tt==="instanceColor"&&q.instanceColor&&(Mt=q.instanceColor)),Mt!==void 0){let St=Mt.normalized,qt=Mt.itemSize,jt=t.get(Mt);if(jt===void 0)continue;let Ve=jt.buffer,Ie=jt.type,Fe=jt.bytesPerElement,_t=Ie===i.INT||Ie===i.UNSIGNED_INT||Mt.gpuType===nh;if(Mt.isInterleavedBufferAttribute){let vt=Mt.data,Pt=vt.stride,oe=Mt.offset;if(vt.isInstancedInterleavedBuffer){for(let Yt=0;Yt<pt.locationSize;Yt++)m(pt.location+Yt,vt.meshPerAttribute);q.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let Yt=0;Yt<pt.locationSize;Yt++)_(pt.location+Yt);i.bindBuffer(i.ARRAY_BUFFER,Ve);for(let Yt=0;Yt<pt.locationSize;Yt++)B(pt.location+Yt,qt/pt.locationSize,Ie,St,Pt*Fe,(oe+qt/pt.locationSize*Yt)*Fe,_t)}else{if(Mt.isInstancedBufferAttribute){for(let vt=0;vt<pt.locationSize;vt++)m(pt.location+vt,Mt.meshPerAttribute);q.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let vt=0;vt<pt.locationSize;vt++)_(pt.location+vt);i.bindBuffer(i.ARRAY_BUFFER,Ve);for(let vt=0;vt<pt.locationSize;vt++)B(pt.location+vt,qt/pt.locationSize,Ie,St,qt*Fe,qt/pt.locationSize*vt*Fe,_t)}}else if(ft!==void 0){let St=ft[Tt];if(St!==void 0)switch(St.length){case 2:i.vertexAttrib2fv(pt.location,St);break;case 3:i.vertexAttrib3fv(pt.location,St);break;case 4:i.vertexAttrib4fv(pt.location,St);break;default:i.vertexAttrib1fv(pt.location,St)}}}}O()}function E(){N();for(let q in n){let st=n[q];for(let ot in st){let J=st[ot];for(let Q in J){let ht=J[Q];for(let ft in ht)d(ht[ft].object),delete ht[ft];delete J[Q]}}delete n[q]}}function F(q){if(n[q.id]===void 0)return;let st=n[q.id];for(let ot in st){let J=st[ot];for(let Q in J){let ht=J[Q];for(let ft in ht)d(ht[ft].object),delete ht[ft];delete J[Q]}}delete n[q.id]}function G(q){for(let st in n){let ot=n[st];for(let J in ot){let Q=ot[J];if(Q[q.id]===void 0)continue;let ht=Q[q.id];for(let ft in ht)d(ht[ft].object),delete ht[ft];delete Q[q.id]}}}function T(q){for(let st in n){let ot=n[st],J=q.isInstancedMesh===!0?q.id:0,Q=ot[J];if(Q!==void 0){for(let ht in Q){let ft=Q[ht];for(let Tt in ft)d(ft[Tt].object),delete ft[Tt];delete Q[ht]}delete ot[J],Object.keys(ot).length===0&&delete n[st]}}}function N(){H(),a=!0,r!==s&&(r=s,h(r.object))}function H(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:l,reset:N,resetDefaultState:H,dispose:E,releaseStatesOfGeometry:F,releaseStatesOfObject:T,releaseStatesOfProgram:G,initAttributes:I,enableAttribute:_,disableUnusedAttributes:O}}function aS(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,d){d!==0&&(i.drawArraysInstanced(n,c,h,d),e.update(h,n,d))}function l(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let f=0;for(let y=0;y<d;y++)f+=h[y];e.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=l}function oS(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let G=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(G.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(G){return!(G!==Mi&&n.convert(G)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(G){let T=G===Oi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(G!==ri&&G!==Si&&!T&&n.convert(G)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(G){if(G==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";G="mediump"}return G==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp",d=c(h);d!==h&&(xe("WebGLRenderer:",h,"not supported, using",d,"instead."),h=d);let v=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&xe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let y=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),I=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),O=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),B=i.getParameter(i.MAX_VARYING_VECTORS),R=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),F=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:l,precision:h,logarithmicDepthBuffer:v,reversedDepthBuffer:f,maxTextures:y,maxVertexTextures:S,maxTextureSize:I,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:O,maxVaryings:B,maxFragmentUniforms:R,maxSamples:E,samples:F}}function lS(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Ii,l=new Ae,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(v,f){let y=v.length!==0||f||n!==0||s;return s=f,n=v.length,y},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(v,f){e=d(v,f,0)},this.setState=function(v,f,y){let S=v.clippingPlanes,I=v.clipIntersection,_=v.clipShadows,m=i.get(v);if(!s||S===null||S.length===0||r&&!_)r?d(null):h();else{let O=r?0:n,B=O*4,R=m.clippingState||null;c.value=R,R=d(S,f,B,y);for(let E=0;E!==B;++E)R[E]=e[E];m.clippingState=R,this.numIntersection=I?this.numPlanes:0,this.numPlanes+=O}};function h(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(v,f,y,S){let I=v!==null?v.length:0,_=null;if(I!==0){if(_=c.value,S!==!0||_===null){let m=y+I*4,O=f.matrixWorldInverse;l.getNormalMatrix(O),(_===null||_.length<m)&&(_=new Float32Array(m));for(let B=0,R=y;B!==I;++B,R+=4)a.copy(v[B]).applyMatrix4(O,l),a.normal.toArray(_,R),_[R+3]=a.constant}c.value=_,c.needsUpdate=!0}return t.numPlanes=I,t.numIntersection=0,_}}var wa=4,cS=6,hS=20,uS=256,rl=new xa,Jm=new ge,jd=null,Kd=0,Qd=0,tf=!1,dS=new X,vr=new X,Gh=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:l=dS}=r;jd=this._renderer.getRenderTarget(),Kd=this._renderer.getActiveCubeFace(),Qd=this._renderer.getActiveMipmapLevel(),tf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,l),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Km(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(jd,Kd,Qd),this._renderer.xr.enabled=tf,t.scissorTest=!1,ba(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===zs||t.mapping===_r?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),jd=this._renderer.getRenderTarget(),Kd=this._renderer.getActiveCubeFace(),Qd=this._renderer.getActiveMipmapLevel(),tf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Un,minFilter:Un,generateMipmaps:!1,type:Oi,format:Mi,colorSpace:mo,depthBuffer:!1},s=jm(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jm(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=fS(r)),this._blurMaterial=mS(r,t,e),this._ggxMaterial=pS(r,t,e)}return s}_compileMaterial(t){let e=new In(new _n,t);this._renderer.compile(e,rl)}_sceneToCubeUV(t,e,n,s,r){let c=new Vn(90,1,e,n),h=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],v=this._renderer,f=v.autoClear,y=v.toneMapping;v.getClearColor(Jm),v.toneMapping=Ui,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(s),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new In(new pa,new ur({name:"PMREM.Background",side:Jn,depthWrite:!1,depthTest:!1})));let I=this._backgroundBox,_=I.material,m=!1,O=t.background;O?O.isColor&&(_.color.copy(O),t.background=null,m=!0):(_.color.copy(Jm),m=!0);for(let B=0;B<6;B++){let R=B%3;R===0?(c.up.set(0,h[B],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+d[B],r.y,r.z)):R===1?(c.up.set(0,0,h[B]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+d[B],r.z)):(c.up.set(0,h[B],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+d[B]));let E=this._cubeSize;ba(s,R*E,B>2?E:0,E,E),v.setRenderTarget(s),m&&v.render(I,c),v.render(t,c)}v.toneMapping=y,v.autoClear=f,t.background=O}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===zs||t.mapping===_r;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qm()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Km());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let l=r.uniforms;l.envMap.value=t;let c=this._cubeSize;ba(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,rl)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,l=this._lodMeshes[n];l.material=a;let c=a.uniforms,h=n/(this._lodMeshes.length-1),d=e/(this._lodMeshes.length-1),v=Math.sqrt(h*h-d*d),f=h*1.25,y=v*f,{_lodMax:S}=this,I=this._sizeLods[n],_=3*I*(n>S-wa?n-S+wa:0),m=4*(this._cubeSize-I);c.envMap.value=t.texture,c.roughness.value=y,c.mipInt.value=S-e,ba(r,_,m,3*I,2*I),s.setRenderTarget(r),s.render(l,rl),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=S-n,ba(t,_,m,3*I,2*I),s.setRenderTarget(t),s.render(l,rl)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,l=this._blurMaterial,c=this._lodMeshes[s];c.material=l;let h=l.uniforms;h.envMap.value=t.texture,h.sigma.value=r,h.mipInt.value=this._lodMax-n;let d=this._sizeLods[s],v=3*d*(s>this._lodMax-wa?s-this._lodMax+wa:0),f=4*(this._cubeSize-d);ba(e,v,f,3*d,2*d),a.setRenderTarget(e),a.render(c,rl)}};function fS(i){let t=[],e=[],n=i,s=i-wa+1+cS;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let l=1/(a-2),c=-l,h=1+l,d=[c,c,h,c,h,h,c,c,h,h,c,h],v=6,f=6,y=3,S=new Float32Array(y*f*v),I=new Float32Array(y*f*v);for(let m=0;m<v;m++){let O=m%3*2/3-1,B=m>2?0:-1,R=[O,B,0,O+2/3,B,0,O+2/3,B+1,0,O,B,0,O+2/3,B+1,0,O,B+1,0];S.set(R,y*f*m);for(let E=0;E<f;E++){let F=d[E*2]*2-1,G=d[E*2+1]*2-1;m===0?vr.set(1,G,F):m===1?vr.set(-F,1,-G):m===2?vr.set(-F,G,1):m===3?vr.set(-1,G,-F):m===4?vr.set(-F,-1,G):vr.set(F,G,-1),vr.toArray(I,(m*f+E)*y)}}let _=new _n;_.setAttribute("position",new nn(S,y)),_.setAttribute("outputDirection",new nn(I,y)),e.push(new In(_,null)),n>wa&&n--}return{lodMeshes:e,sizeLods:t}}function jm(i,t,e){let n=new ii(i,t,e);return n.texture.mapping=Jo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ba(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function pS(i,t,e){return new Pn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:uS,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:qh(),fragmentShader:`

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
		`,blending:ji,depthTest:!1,depthWrite:!1})}function mS(i,t,e){return new Pn({name:"SphericalGaussianBlur",defines:{SAMPLES:hS,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:qh(),fragmentShader:`

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
		`,blending:ji,depthTest:!1,depthWrite:!1})}function Km(){return new Pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qh(),fragmentShader:`

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
		`,blending:ji,depthTest:!1,depthWrite:!1})}function Qm(){return new Pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function qh(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Wh=class extends ii{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ao(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new pa(5,5,5),r=new Pn({name:"CubemapFromEquirect",uniforms:xr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Jn,blending:ji});r.uniforms.tEquirect.value=e;let a=new In(s,r),l=e.minFilter;return e.minFilter===$s&&(e.minFilter=Un),new Jc(1,10,this).update(t,a),e.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function gS(i){let t=new WeakMap,e=new WeakMap,n=null;function s(f,y=!1){return f==null?null:y?a(f):r(f)}function r(f){if(f&&f.isTexture){let y=f.mapping;if(y===Qc||y===th)if(t.has(f)){let S=t.get(f).texture;return l(S,f.mapping)}else{let S=f.image;if(S&&S.height>0){let I=new Wh(S.height);return I.fromEquirectangularTexture(i,f),t.set(f,I),f.addEventListener("dispose",h),l(I.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){let y=f.mapping,S=y===Qc||y===th,I=y===zs||y===_r;if(S||I){let _=e.get(f),m=_!==void 0?_.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return n===null&&(n=new Gh(i)),_=S?n.fromEquirectangular(f,_):n.fromCubemap(f,_),_.texture.pmremVersion=f.pmremVersion,e.set(f,_),_.texture;if(_!==void 0)return _.texture;{let O=f.image;return S&&O&&O.height>0||I&&O&&c(O)?(n===null&&(n=new Gh(i)),_=S?n.fromEquirectangular(f):n.fromCubemap(f),_.texture.pmremVersion=f.pmremVersion,e.set(f,_),f.addEventListener("dispose",d),_.texture):null}}}return f}function l(f,y){return y===Qc?f.mapping=zs:y===th&&(f.mapping=_r),f}function c(f){let y=0,S=6;for(let I=0;I<S;I++)f[I]!==void 0&&y++;return y===S}function h(f){let y=f.target;y.removeEventListener("dispose",h);let S=t.get(y);S!==void 0&&(t.delete(y),S.dispose())}function d(f){let y=f.target;y.removeEventListener("dispose",d);let S=e.get(y);S!==void 0&&(e.delete(y),S.dispose())}function v(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:v}}function _S(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&cr("WebGLRenderer: "+n+" extension not supported."),s}}}function xS(i,t,e,n){let s={},r=new WeakMap;function a(v){let f=v.target;f.index!==null&&t.remove(f.index);for(let S in f.attributes)t.remove(f.attributes[S]);f.removeEventListener("dispose",a),delete s[f.id];let y=r.get(f);y&&(t.remove(y),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function l(v,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function c(v){let f=v.attributes;for(let y in f)t.update(f[y],i.ARRAY_BUFFER)}function h(v){let f=[],y=v.index,S=v.attributes.position,I=0;if(S===void 0)return;if(y!==null){let O=y.array;I=y.version;for(let B=0,R=O.length;B<R;B+=3){let E=O[B+0],F=O[B+1],G=O[B+2];f.push(E,F,F,G,G,E)}}else{let O=S.array;I=S.version;for(let B=0,R=O.length/3-1;B<R;B+=3){let E=B+0,F=B+1,G=B+2;f.push(E,F,F,G,G,E)}}let _=new(S.count>=65535?Mo:So)(f,1);_.version=I;let m=r.get(v);m&&t.remove(m),r.set(v,_)}function d(v){let f=r.get(v);if(f){let y=v.index;y!==null&&f.version<y.version&&h(v)}else h(v);return r.get(v)}return{get:l,update:c,getWireframeAttribute:d}}function vS(i,t,e){let n;function s(v){n=v}let r,a;function l(v){r=v.type,a=v.bytesPerElement}function c(v,f){i.drawElements(n,f,r,v*a),e.update(f,n,1)}function h(v,f,y){y!==0&&(i.drawElementsInstanced(n,f,r,v*a,y),e.update(f,n,y))}function d(v,f,y){if(y===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,v,0,y);let I=0;for(let _=0;_<y;_++)I+=f[_];e.update(I,n,1)}this.setMode=s,this.setIndex=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d}function yS(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,l){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=l*(r/3);break;case i.LINES:e.lines+=l*(r/2);break;case i.LINE_STRIP:e.lines+=l*(r-1);break;case i.LINE_LOOP:e.lines+=l*r;break;case i.POINTS:e.points+=l*r;break;default:ye("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function SS(i,t,e){let n=new WeakMap,s=new Qe;function r(a,l,c){let h=a.morphTargetInfluences,d=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,v=d!==void 0?d.length:0,f=n.get(l);if(f===void 0||f.count!==v){let N=function(){G.dispose(),n.delete(l),l.removeEventListener("dispose",N)};f!==void 0&&f.texture.dispose();let y=l.morphAttributes.position!==void 0,S=l.morphAttributes.normal!==void 0,I=l.morphAttributes.color!==void 0,_=l.morphAttributes.position||[],m=l.morphAttributes.normal||[],O=l.morphAttributes.color||[],B=0;y===!0&&(B=1),S===!0&&(B=2),I===!0&&(B=3);let R=l.attributes.position.count*B,E=1;R>t.maxTextureSize&&(E=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);let F=new Float32Array(R*E*4*v),G=new vo(F,R,E,v);G.type=Si,G.needsUpdate=!0;let T=B*4;for(let H=0;H<v;H++){let q=_[H],st=m[H],ot=O[H],J=R*E*4*H;for(let Q=0;Q<q.count;Q++){let ht=Q*T;y===!0&&(s.fromBufferAttribute(q,Q),F[J+ht+0]=s.x,F[J+ht+1]=s.y,F[J+ht+2]=s.z,F[J+ht+3]=0),S===!0&&(s.fromBufferAttribute(st,Q),F[J+ht+4]=s.x,F[J+ht+5]=s.y,F[J+ht+6]=s.z,F[J+ht+7]=0),I===!0&&(s.fromBufferAttribute(ot,Q),F[J+ht+8]=s.x,F[J+ht+9]=s.y,F[J+ht+10]=s.z,F[J+ht+11]=ot.itemSize===4?s.w:1)}}f={count:v,texture:G,size:new $t(R,E)},n.set(l,f),l.addEventListener("dispose",N)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let y=0;for(let I=0;I<h.length;I++)y+=h[I];let S=l.morphTargetsRelative?1:1-y;c.getUniforms().setValue(i,"morphTargetBaseInfluence",S),c.getUniforms().setValue(i,"morphTargetInfluences",h)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function MS(i,t,e,n,s){let r=new WeakMap;function a(h){let d=s.render.frame,v=h.geometry,f=t.get(h,v);if(r.get(f)!==d&&(t.update(f),r.set(f,d)),h.isInstancedMesh&&(h.hasEventListener("dispose",c)===!1&&h.addEventListener("dispose",c),r.get(h)!==d&&(e.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,i.ARRAY_BUFFER),r.set(h,d))),h.isSkinnedMesh){let y=h.skeleton;r.get(y)!==d&&(y.update(),r.set(y,d))}return f}function l(){r=new WeakMap}function c(h){let d=h.target;d.removeEventListener("dispose",c),n.releaseStatesOfObject(d),e.remove(d.instanceMatrix),d.instanceColor!==null&&e.remove(d.instanceColor)}return{update:a,dispose:l}}var bS={[Cd]:"LINEAR_TONE_MAPPING",[Rd]:"REINHARD_TONE_MAPPING",[Id]:"CINEON_TONE_MAPPING",[Pd]:"ACES_FILMIC_TONE_MAPPING",[Dd]:"AGX_TONE_MAPPING",[Nd]:"NEUTRAL_TONE_MAPPING",[Ld]:"CUSTOM_TONE_MAPPING"};function wS(i,t,e,n,s,r){let a=new ii(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),l=null,c=null,h=new _n;h.setAttribute("position",new gn([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new gn([0,2,0,0,2,0],2));let d=new Fc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),v=new In(h,d),f=new xa(-1,1,1,-1,0,1),y=null,S=null,I=!1,_,m=null,O=[],B=!1;this.setSize=function(R,E){a.setSize(R,E),l!==null&&l.setSize(R,E),c!==null&&c.setSize(R,E);for(let F=0;F<O.length;F++){let G=O[F];G.setSize&&G.setSize(R,E)}},this.setEffects=function(R){O=R,B=O.length>0&&O[0].isRenderPass===!0;let E=a.width,F=a.height;O.length>0&&l===null&&(l=new ii(E,F,{type:Oi,depthBuffer:!1,stencilBuffer:!1}),c=new ii(E,F,{type:Oi,depthBuffer:!1,stencilBuffer:!1}));for(let G=0;G<O.length;G++){let T=O[G];T.setSize&&T.setSize(E,F)}},this.begin=function(R,E){if(I||R.toneMapping===Ui&&O.length===0)return!1;if(m=E,E!==null){let F=E.width,G=E.height;(a.width!==F||a.height!==G)&&this.setSize(F,G)}return B===!1&&R.setRenderTarget(a),_=R.toneMapping,R.toneMapping=Ui,!0},this.hasRenderPass=function(){return B},this.end=function(R,E){R.toneMapping=_,I=!0;let F=a,G=l;for(let T=0;T<O.length;T++){let N=O[T];N.enabled!==!1&&(N.render(R,G,F,E),N.needsSwap!==!1&&(F=G,G=G===l?c:l))}if(y!==R.outputColorSpace||S!==R.toneMapping){y=R.outputColorSpace,S=R.toneMapping,d.defines={},ke.getTransfer(y)===Ke&&(d.defines.SRGB_TRANSFER="");let T=bS[S];T&&(d.defines[T]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=F.texture,R.setRenderTarget(m),R.render(v,f),m=null,I=!1},this.isCompositing=function(){return I},this.dispose=function(){a.dispose(),l!==null&&l.dispose(),c!==null&&c.dispose(),h.dispose(),d.dispose()}}var vg=new ni,sf=new Ns(1,1),yg=new vo,Sg=new bc,Mg=new Ao,tg=[],eg=[],ng=new Float32Array(16),ig=new Float32Array(9),sg=new Float32Array(4);function Ta(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=tg[s];if(r===void 0&&(r=new Float32Array(s),tg[s]=r),t!==0){n.toArray(r,0);for(let a=1,l=0;a!==t;++a)l+=e,i[a].toArray(r,l)}return r}function bn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function wn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Yh(i,t){let e=eg[t];e===void 0&&(e=new Int32Array(t),eg[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function ES(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function TS(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(bn(e,t))return;i.uniform2fv(this.addr,t),wn(e,t)}}function AS(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(bn(e,t))return;i.uniform3fv(this.addr,t),wn(e,t)}}function CS(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(bn(e,t))return;i.uniform4fv(this.addr,t),wn(e,t)}}function RS(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(bn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),wn(e,t)}else{if(bn(e,n))return;sg.set(n),i.uniformMatrix2fv(this.addr,!1,sg),wn(e,n)}}function IS(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(bn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),wn(e,t)}else{if(bn(e,n))return;ig.set(n),i.uniformMatrix3fv(this.addr,!1,ig),wn(e,n)}}function PS(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(bn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),wn(e,t)}else{if(bn(e,n))return;ng.set(n),i.uniformMatrix4fv(this.addr,!1,ng),wn(e,n)}}function LS(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function DS(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(bn(e,t))return;i.uniform2iv(this.addr,t),wn(e,t)}}function NS(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(bn(e,t))return;i.uniform3iv(this.addr,t),wn(e,t)}}function US(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(bn(e,t))return;i.uniform4iv(this.addr,t),wn(e,t)}}function FS(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function OS(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(bn(e,t))return;i.uniform2uiv(this.addr,t),wn(e,t)}}function BS(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(bn(e,t))return;i.uniform3uiv(this.addr,t),wn(e,t)}}function kS(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(bn(e,t))return;i.uniform4uiv(this.addr,t),wn(e,t)}}function zS(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(sf.compareFunction=e.isReversedDepthBuffer()?$h:zh,r=sf):r=vg,e.setTexture2D(t||r,s)}function $S(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Sg,s)}function VS(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Mg,s)}function HS(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||yg,s)}function GS(i){switch(i){case 5126:return ES;case 35664:return TS;case 35665:return AS;case 35666:return CS;case 35674:return RS;case 35675:return IS;case 35676:return PS;case 5124:case 35670:return LS;case 35667:case 35671:return DS;case 35668:case 35672:return NS;case 35669:case 35673:return US;case 5125:return FS;case 36294:return OS;case 36295:return BS;case 36296:return kS;case 35678:case 36198:case 36298:case 36306:case 35682:return zS;case 35679:case 36299:case 36307:return $S;case 35680:case 36300:case 36308:case 36293:return VS;case 36289:case 36303:case 36311:case 36292:return HS}}function WS(i,t){i.uniform1fv(this.addr,t)}function XS(i,t){let e=Ta(t,this.size,2);i.uniform2fv(this.addr,e)}function qS(i,t){let e=Ta(t,this.size,3);i.uniform3fv(this.addr,e)}function YS(i,t){let e=Ta(t,this.size,4);i.uniform4fv(this.addr,e)}function ZS(i,t){let e=Ta(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function JS(i,t){let e=Ta(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function jS(i,t){let e=Ta(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function KS(i,t){i.uniform1iv(this.addr,t)}function QS(i,t){i.uniform2iv(this.addr,t)}function tM(i,t){i.uniform3iv(this.addr,t)}function eM(i,t){i.uniform4iv(this.addr,t)}function nM(i,t){i.uniform1uiv(this.addr,t)}function iM(i,t){i.uniform2uiv(this.addr,t)}function sM(i,t){i.uniform3uiv(this.addr,t)}function rM(i,t){i.uniform4uiv(this.addr,t)}function aM(i,t,e){let n=this.cache,s=t.length,r=Yh(e,s);bn(n,r)||(i.uniform1iv(this.addr,r),wn(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=sf:a=vg;for(let l=0;l!==s;++l)e.setTexture2D(t[l]||a,r[l])}function oM(i,t,e){let n=this.cache,s=t.length,r=Yh(e,s);bn(n,r)||(i.uniform1iv(this.addr,r),wn(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Sg,r[a])}function lM(i,t,e){let n=this.cache,s=t.length,r=Yh(e,s);bn(n,r)||(i.uniform1iv(this.addr,r),wn(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Mg,r[a])}function cM(i,t,e){let n=this.cache,s=t.length,r=Yh(e,s);bn(n,r)||(i.uniform1iv(this.addr,r),wn(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||yg,r[a])}function hM(i){switch(i){case 5126:return WS;case 35664:return XS;case 35665:return qS;case 35666:return YS;case 35674:return ZS;case 35675:return JS;case 35676:return jS;case 5124:case 35670:return KS;case 35667:case 35671:return QS;case 35668:case 35672:return tM;case 35669:case 35673:return eM;case 5125:return nM;case 36294:return iM;case 36295:return sM;case 36296:return rM;case 35678:case 36198:case 36298:case 36306:case 35682:return aM;case 35679:case 36299:case 36307:return oM;case 35680:case 36300:case 36308:case 36293:return lM;case 36289:case 36303:case 36311:case 36292:return cM}}var rf=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=GS(e.type)}},af=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=hM(e.type)}},of=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let l=s[r];l.setValue(t,e[l.id],n)}}},ef=/(\w+)(\])?(\[|\.)?/g;function rg(i,t){i.seq.push(t),i.map[t.id]=t}function uM(i,t,e){let n=i.name,s=n.length;for(ef.lastIndex=0;;){let r=ef.exec(n),a=ef.lastIndex,l=r[1],c=r[2]==="]",h=r[3];if(c&&(l=l|0),h===void 0||h==="["&&a+2===s){rg(e,h===void 0?new rf(l,i,t):new af(l,i,t));break}else{let v=e.map[l];v===void 0&&(v=new of(l),rg(e,v)),e=v}}}var Ea=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let l=t.getActiveUniform(e,a),c=t.getUniformLocation(e,l.name);uM(l,c,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let l=e[r],c=n[l.id];c.needsUpdate!==!1&&l.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function ag(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var dM=37297,fM=0;function pM(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let l=a+1;n.push(`${l===t?">":" "} ${l}: ${e[a]}`)}return n.join(`
`)}var og=new Ae;function mM(i){ke._getMatrix(og,ke.workingColorSpace,i);let t=`mat3( ${og.elements.map(e=>e.toFixed(4))} )`;switch(ke.getTransfer(i)){case go:return[t,"LinearTransferOETF"];case Ke:return[t,"sRGBTransferOETF"];default:return xe("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function lg(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let l=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+pM(i.getShaderSource(t),l)}else return r}function gM(i,t){let e=mM(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var _M={[Cd]:"Linear",[Rd]:"Reinhard",[Id]:"Cineon",[Pd]:"ACESFilmic",[Dd]:"AgX",[Nd]:"Neutral",[Ld]:"Custom"};function xM(i,t){let e=_M[t];return e===void 0?(xe("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Hh=new X;function vM(){ke.getLuminanceCoefficients(Hh);let i=Hh.x.toFixed(4),t=Hh.y.toFixed(4),e=Hh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yM(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ol).join(`
`)}function SM(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function MM(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,l=1;r.type===i.FLOAT_MAT2&&(l=2),r.type===i.FLOAT_MAT3&&(l=3),r.type===i.FLOAT_MAT4&&(l=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:l}}return e}function ol(i){return i!==""}function cg(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function hg(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var bM=/^[ \t]*#include +<([\w\d./]+)>/gm;function lf(i){return i.replace(bM,EM)}var wM=new Map;function EM(i,t){let e=Le[t];if(e===void 0){let n=wM.get(t);if(n!==void 0)e=Le[n],xe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return lf(e)}var TM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ug(i){return i.replace(TM,AM)}function AM(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function dg(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var CM={[Zo]:"SHADOWMAP_TYPE_PCF",[va]:"SHADOWMAP_TYPE_VSM"};function RM(i){return CM[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var IM={[zs]:"ENVMAP_TYPE_CUBE",[_r]:"ENVMAP_TYPE_CUBE",[Jo]:"ENVMAP_TYPE_CUBE_UV"};function PM(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":IM[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var LM={[_r]:"ENVMAP_MODE_REFRACTION"};function DM(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":LM[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var NM={[Kc]:"ENVMAP_BLENDING_MULTIPLY",[Am]:"ENVMAP_BLENDING_MIX",[Cm]:"ENVMAP_BLENDING_ADD"};function UM(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":NM[i.combine]||"ENVMAP_BLENDING_NONE"}function FM(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function OM(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,l=e.fragmentShader,c=RM(e),h=PM(e),d=DM(e),v=UM(e),f=FM(e),y=yM(e),S=SM(r),I=s.createProgram(),_,m,O=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S].filter(ol).join(`
`),_.length>0&&(_+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S].filter(ol).join(`
`),m.length>0&&(m+=`
`)):(_=[dg(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ol).join(`
`),m=[dg(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMap?"#define "+v:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ui?"#define TONE_MAPPING":"",e.toneMapping!==Ui?Le.tonemapping_pars_fragment:"",e.toneMapping!==Ui?xM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Le.colorspace_pars_fragment,gM("linearToOutputTexel",e.outputColorSpace),vM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ol).join(`
`)),a=lf(a),a=cg(a,e),a=hg(a,e),l=lf(l),l=cg(l,e),l=hg(l,e),a=ug(a),l=ug(l),e.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,_=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,m=["#define varying in",e.glslVersion===Hd?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Hd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let B=O+_+a,R=O+m+l,E=ag(s,s.VERTEX_SHADER,B),F=ag(s,s.FRAGMENT_SHADER,R);s.attachShader(I,E),s.attachShader(I,F),e.index0AttributeName!==void 0?s.bindAttribLocation(I,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(I,0,"position"),s.linkProgram(I);function G(q){if(i.debug.checkShaderErrors){let st=s.getProgramInfoLog(I)||"",ot=s.getShaderInfoLog(E)||"",J=s.getShaderInfoLog(F)||"",Q=st.trim(),ht=ot.trim(),ft=J.trim(),Tt=!0,pt=!0;if(s.getProgramParameter(I,s.LINK_STATUS)===!1)if(Tt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,I,E,F);else{let Mt=lg(s,E,"vertex"),St=lg(s,F,"fragment");ye("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(I,s.VALIDATE_STATUS)+`

Material Name: `+q.name+`
Material Type: `+q.type+`

Program Info Log: `+Q+`
`+Mt+`
`+St)}else Q!==""?xe("WebGLProgram: Program Info Log:",Q):(ht===""||ft==="")&&(pt=!1);pt&&(q.diagnostics={runnable:Tt,programLog:Q,vertexShader:{log:ht,prefix:_},fragmentShader:{log:ft,prefix:m}})}s.deleteShader(E),s.deleteShader(F),T=new Ea(s,I),N=MM(s,I)}let T;this.getUniforms=function(){return T===void 0&&G(this),T};let N;this.getAttributes=function(){return N===void 0&&G(this),N};let H=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return H===!1&&(H=s.getProgramParameter(I,dM)),H},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(I),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=fM++,this.cacheKey=t,this.usedTimes=1,this.program=I,this.vertexShader=E,this.fragmentShader=F,this}var BM=0,cf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new hf(t),e.set(t,n)),n}},hf=class{constructor(t){this.id=BM++,this.code=t,this.usedTimes=0}};function kM(i){return i===Hs||i===nl||i===il}function zM(i,t,e,n,s,r){let a=new ua,l=new cf,c=new Set,h=[],d=new Map,v=n.logarithmicDepthBuffer,f=n.precision,y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(T){return c.add(T),T===0?"uv":`uv${T}`}function I(T,N,H,q,st,ot){let J=q.fog,Q=st.geometry,ht=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?q.environment:null,ft=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,Tt=t.get(T.envMap||ht,ft),pt=Tt&&Tt.mapping===Jo?Tt.image.height:null,Mt=y[T.type];T.precision!==null&&(f=n.getMaxPrecision(T.precision),f!==T.precision&&xe("WebGLProgram.getParameters:",T.precision,"not supported, using",f,"instead."));let St=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,qt=St!==void 0?St.length:0,jt=0;Q.morphAttributes.position!==void 0&&(jt=1),Q.morphAttributes.normal!==void 0&&(jt=2),Q.morphAttributes.color!==void 0&&(jt=3);let Ve,Ie,Fe,_t;if(Mt){let Je=jn[Mt];Ve=Je.vertexShader,Ie=Je.fragmentShader}else{Ve=T.vertexShader,Ie=T.fragmentShader;let Je=l.getVertexShaderStage(T),Ee=l.getFragmentShaderStage(T);l.update(T,Je,Ee),Fe=Je.id,_t=Ee.id}let vt=i.getRenderTarget(),Pt=i.state.buffers.depth.getReversed(),oe=st.isInstancedMesh===!0,Yt=st.isBatchedMesh===!0,pe=!!T.map,se=!!T.matcap,at=!!Tt,At=!!T.aoMap,$=!!T.lightMap,Ct=!!T.bumpMap&&T.wireframe===!1,Bt=!!T.normalMap,de=!!T.displacementMap,he=!!T.emissiveMap,ue=!!T.metalnessMap,Se=!!T.roughnessMap,W=T.anisotropy>0,Ce=T.clearcoat>0,we=T.dispersion>0,L=T.retroreflectivity>0,b=T.iridescence>0,tt=T.sheen>0,K=T.transmission>0,mt=W&&!!T.anisotropyMap,Dt=Ce&&!!T.clearcoatMap,Ft=Ce&&!!T.clearcoatNormalMap,gt=Ce&&!!T.clearcoatRoughnessMap,yt=b&&!!T.iridescenceMap,kt=b&&!!T.iridescenceThicknessMap,re=tt&&!!T.sheenColorMap,Xt=tt&&!!T.sheenRoughnessMap,Ht=!!T.specularMap,ae=!!T.specularColorMap,me=!!T.specularIntensityMap,Me=K&&!!T.transmissionMap,j=K&&!!T.thicknessMap,Ut=!!T.gradientMap,xt=!!T.alphaMap,zt=T.alphaTest>0,Zt=!!T.alphaHash,Et=!!T.extensions,le=Ui;T.toneMapped&&(vt===null||vt.isXRRenderTarget===!0)&&(le=i.toneMapping);let ee={shaderID:Mt,shaderType:T.type,shaderName:T.name,vertexShader:Ve,fragmentShader:Ie,defines:T.defines,customVertexShaderID:Fe,customFragmentShaderID:_t,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:f,batching:Yt,batchingColor:Yt&&st._colorsTexture!==null,instancing:oe,instancingColor:oe&&st.instanceColor!==null,instancingMorph:oe&&st.morphTexture!==null,outputColorSpace:vt===null?i.outputColorSpace:vt.isXRRenderTarget===!0?vt.texture.colorSpace:ke.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:pe,matcap:se,envMap:at,envMapMode:at&&Tt.mapping,envMapCubeUVHeight:pt,aoMap:At,lightMap:$,bumpMap:Ct,normalMap:Bt,displacementMap:de,emissiveMap:he,normalMapObjectSpace:Bt&&T.normalMapType===Pm,normalMapTangentSpace:Bt&&T.normalMapType===kh,packedNormalMap:Bt&&T.normalMapType===kh&&kM(T.normalMap.format),metalnessMap:ue,roughnessMap:Se,anisotropy:W,anisotropyMap:mt,clearcoat:Ce,clearcoatMap:Dt,clearcoatNormalMap:Ft,clearcoatRoughnessMap:gt,dispersion:we,retroreflection:L,iridescence:b,iridescenceMap:yt,iridescenceThicknessMap:kt,sheen:tt,sheenColorMap:re,sheenRoughnessMap:Xt,specularMap:Ht,specularColorMap:ae,specularIntensityMap:me,transmission:K,transmissionMap:Me,thicknessMap:j,gradientMap:Ut,opaque:T.transparent===!1&&T.blending===ya&&T.alphaToCoverage===!1,alphaMap:xt,alphaTest:zt,alphaHash:Zt,combine:T.combine,mapUv:pe&&S(T.map.channel),aoMapUv:At&&S(T.aoMap.channel),lightMapUv:$&&S(T.lightMap.channel),bumpMapUv:Ct&&S(T.bumpMap.channel),normalMapUv:Bt&&S(T.normalMap.channel),displacementMapUv:de&&S(T.displacementMap.channel),emissiveMapUv:he&&S(T.emissiveMap.channel),metalnessMapUv:ue&&S(T.metalnessMap.channel),roughnessMapUv:Se&&S(T.roughnessMap.channel),anisotropyMapUv:mt&&S(T.anisotropyMap.channel),clearcoatMapUv:Dt&&S(T.clearcoatMap.channel),clearcoatNormalMapUv:Ft&&S(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:gt&&S(T.clearcoatRoughnessMap.channel),iridescenceMapUv:yt&&S(T.iridescenceMap.channel),iridescenceThicknessMapUv:kt&&S(T.iridescenceThicknessMap.channel),sheenColorMapUv:re&&S(T.sheenColorMap.channel),sheenRoughnessMapUv:Xt&&S(T.sheenRoughnessMap.channel),specularMapUv:Ht&&S(T.specularMap.channel),specularColorMapUv:ae&&S(T.specularColorMap.channel),specularIntensityMapUv:me&&S(T.specularIntensityMap.channel),transmissionMapUv:Me&&S(T.transmissionMap.channel),thicknessMapUv:j&&S(T.thicknessMap.channel),alphaMapUv:xt&&S(T.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(Bt||W),vertexNormals:!!Q.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:st.isPoints===!0&&!!Q.attributes.uv&&(pe||xt),fog:!!J,useFog:T.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||Q.attributes.normal===void 0&&Bt===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Pt,skinning:st.isSkinnedMesh===!0,hasPositionAttribute:Q.attributes.position!==void 0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:qt,morphTextureStride:jt,numSunLights:N.sun.length,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numSunLightShadows:N.sunShadowMap.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numLightProbeGrids:ot.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&H.length>0,shadowMapType:i.shadowMap.type,toneMapping:le,decodeVideoTexture:pe&&T.map.isVideoTexture===!0&&ke.getTransfer(T.map.colorSpace)===Ke,decodeVideoTextureEmissive:he&&T.emissiveMap.isVideoTexture===!0&&ke.getTransfer(T.emissiveMap.colorSpace)===Ke,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Ji,flipSided:T.side===Jn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Et&&T.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Et&&T.extensions.multiDraw===!0||Yt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return ee.vertexUv1s=c.has(1),ee.vertexUv2s=c.has(2),ee.vertexUv3s=c.has(3),c.clear(),ee}function _(T){let N=[];if(T.shaderID?N.push(T.shaderID):(N.push(T.customVertexShaderID),N.push(T.customFragmentShaderID)),T.defines!==void 0)for(let H in T.defines)N.push(H),N.push(T.defines[H]);return T.isRawShaderMaterial===!1&&(m(N,T),O(N,T),N.push(i.outputColorSpace)),N.push(T.customProgramCacheKey),N.join()}function m(T,N){T.push(N.precision),T.push(N.outputColorSpace),T.push(N.envMapMode),T.push(N.envMapCubeUVHeight),T.push(N.mapUv),T.push(N.alphaMapUv),T.push(N.lightMapUv),T.push(N.aoMapUv),T.push(N.bumpMapUv),T.push(N.normalMapUv),T.push(N.displacementMapUv),T.push(N.emissiveMapUv),T.push(N.metalnessMapUv),T.push(N.roughnessMapUv),T.push(N.anisotropyMapUv),T.push(N.clearcoatMapUv),T.push(N.clearcoatNormalMapUv),T.push(N.clearcoatRoughnessMapUv),T.push(N.iridescenceMapUv),T.push(N.iridescenceThicknessMapUv),T.push(N.sheenColorMapUv),T.push(N.sheenRoughnessMapUv),T.push(N.specularMapUv),T.push(N.specularColorMapUv),T.push(N.specularIntensityMapUv),T.push(N.transmissionMapUv),T.push(N.thicknessMapUv),T.push(N.combine),T.push(N.fogExp2),T.push(N.sizeAttenuation),T.push(N.morphTargetsCount),T.push(N.morphAttributeCount),T.push(N.numSunLights),T.push(N.numDirLights),T.push(N.numPointLights),T.push(N.numSpotLights),T.push(N.numSpotLightMaps),T.push(N.numHemiLights),T.push(N.numRectAreaLights),T.push(N.numSunLightShadows),T.push(N.numDirLightShadows),T.push(N.numPointLightShadows),T.push(N.numSpotLightShadows),T.push(N.numSpotLightShadowsWithMaps),T.push(N.numLightProbes),T.push(N.shadowMapType),T.push(N.toneMapping),T.push(N.numClippingPlanes),T.push(N.numClipIntersection),T.push(N.depthPacking)}function O(T,N){a.disableAll(),N.instancing&&a.enable(0),N.instancingColor&&a.enable(1),N.instancingMorph&&a.enable(2),N.matcap&&a.enable(3),N.envMap&&a.enable(4),N.normalMapObjectSpace&&a.enable(5),N.normalMapTangentSpace&&a.enable(6),N.clearcoat&&a.enable(7),N.iridescence&&a.enable(8),N.alphaTest&&a.enable(9),N.vertexColors&&a.enable(10),N.vertexAlphas&&a.enable(11),N.vertexUv1s&&a.enable(12),N.vertexUv2s&&a.enable(13),N.vertexUv3s&&a.enable(14),N.vertexTangents&&a.enable(15),N.anisotropy&&a.enable(16),N.alphaHash&&a.enable(17),N.batching&&a.enable(18),N.dispersion&&a.enable(19),N.retroreflection&&a.enable(24),N.batchingColor&&a.enable(20),N.gradientMap&&a.enable(21),N.packedNormalMap&&a.enable(22),N.vertexNormals&&a.enable(23),T.push(a.mask),a.disableAll(),N.fog&&a.enable(0),N.useFog&&a.enable(1),N.flatShading&&a.enable(2),N.logarithmicDepthBuffer&&a.enable(3),N.reversedDepthBuffer&&a.enable(4),N.skinning&&a.enable(5),N.morphTargets&&a.enable(6),N.morphNormals&&a.enable(7),N.morphColors&&a.enable(8),N.premultipliedAlpha&&a.enable(9),N.shadowMapEnabled&&a.enable(10),N.doubleSided&&a.enable(11),N.flipSided&&a.enable(12),N.useDepthPacking&&a.enable(13),N.dithering&&a.enable(14),N.transmission&&a.enable(15),N.sheen&&a.enable(16),N.opaque&&a.enable(17),N.pointsUvs&&a.enable(18),N.decodeVideoTexture&&a.enable(19),N.decodeVideoTextureEmissive&&a.enable(20),N.alphaToCoverage&&a.enable(21),N.numLightProbeGrids>0&&a.enable(22),N.hasPositionAttribute&&a.enable(23),T.push(a.mask)}function B(T){let N=y[T.type],H;if(N){let q=jn[N];H=sl.clone(q.uniforms)}else H=T.uniforms;return H}function R(T,N){let H=d.get(N);return H!==void 0?++H.usedTimes:(H=new OM(i,N,T,s),h.push(H),d.set(N,H)),H}function E(T){if(--T.usedTimes===0){let N=h.indexOf(T);h[N]=h[h.length-1],h.pop(),d.delete(T.cacheKey),T.destroy()}}function F(T){l.remove(T)}function G(){l.dispose()}return{getParameters:I,getProgramCacheKey:_,getUniforms:B,acquireProgram:R,releaseProgram:E,releaseShaderCache:F,programs:h,dispose:G}}function $M(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let l=i.get(a);return l===void 0&&(l={},i.set(a,l)),l}function n(a){i.delete(a)}function s(a,l,c){i.get(a)[l]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function VM(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function fg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function pg(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(f){let y=0;return f.isInstancedMesh&&(y+=2),f.isSkinnedMesh&&(y+=1),y}function l(f,y,S,I,_,m){let O=i[t];return O===void 0?(O={id:f.id,object:f,geometry:y,material:S,materialVariant:a(f),groupOrder:I,renderOrder:f.renderOrder,z:_,group:m},i[t]=O):(O.id=f.id,O.object=f,O.geometry=y,O.material=S,O.materialVariant=a(f),O.groupOrder=I,O.renderOrder=f.renderOrder,O.z=_,O.group=m),t++,O}function c(f,y,S,I,_,m,O){O.reversedDepth===!0&&(_=-_);let B=l(f,y,S,I,_,m);S.transmission>0?n.push(B):S.transparent===!0?s.push(B):e.push(B)}function h(f,y,S,I,_,m){let O=l(f,y,S,I,_,m);S.transmission>0?n.unshift(O):S.transparent===!0?s.unshift(O):e.unshift(O)}function d(f,y){e.length>1&&e.sort(f||VM),n.length>1&&n.sort(y||fg),s.length>1&&s.sort(y||fg)}function v(){for(let f=t,y=i.length;f<y;f++){let S=i[f];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:h,finish:v,sort:d}}function HM(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new pg,i.set(n,[a])):s>=r.length?(a=new pg,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function GM(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new X,color:new ge};break;case"SpotLight":e={position:new X,direction:new X,color:new ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new X,color:new ge,distance:0,decay:0};break;case"HemisphereLight":e={direction:new X,skyColor:new ge,groundColor:new ge};break;case"RectAreaLight":e={color:new ge,position:new X,halfWidth:new X,halfHeight:new X};break}return i[t.id]=e,e}}}function WM(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var XM=0;function qM(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function YM(i){let t=new GM,e=WM(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new X);let s=new X,r=new $e,a=new $e;function l(h){let d=0,v=0,f=0;for(let st=0;st<9;st++)n.probe[st].set(0,0,0);let y=0,S=0,I=0,_=0,m=0,O=0,B=0,R=0,E=0,F=0,G=0,T=0,N=0,H=0;h.sort(qM);for(let st=0,ot=h.length;st<ot;st++){let J=h[st],Q=J.color,ht=J.intensity,ft=J.distance,Tt=null;if(J.shadow&&J.shadow.map&&(J.shadow.map.texture.format===Hs?Tt=J.shadow.map.texture:Tt=J.shadow.map.depthTexture||J.shadow.map.texture),J.isAmbientLight)d+=Q.r*ht,v+=Q.g*ht,f+=Q.b*ht;else if(J.isLightProbe){for(let pt=0;pt<9;pt++)n.probe[pt].addScaledVector(J.sh.coefficients[pt],ht);H++}else if(J.isSunLight){let pt=t.get(J);if(pt.color.copy(J.color).multiplyScalar(J.intensity),J.castShadow){let Mt=J.shadow,St=e.get(J);St.shadowIntensity=Mt.intensity,St.shadowBias=Mt.bias,St.shadowNormalBias=Mt.normalBias,St.shadowRadius=Mt.radius,St.shadowMapSize.copy(Mt.mapSize).multiply(Mt.getFrameExtents()),n.sunShadow[S]=St,n.sunShadowMap[S]=Tt;let qt=Mt.getViewportCount();for(let jt=0;jt<qt;jt++)n.sunShadowMatrix[I+jt]=Mt.getMatrix(jt),n.sunShadowCascade[I+jt]=Mt._cascadeData[jt];I+=qt,S++}n.sun[y]=pt,y++}else if(J.isDirectionalLight){let pt=t.get(J);if(pt.color.copy(J.color).multiplyScalar(J.intensity),J.castShadow){let Mt=J.shadow,St=e.get(J);St.shadowIntensity=Mt.intensity,St.shadowBias=Mt.bias,St.shadowNormalBias=Mt.normalBias,St.shadowRadius=Mt.radius,St.shadowMapSize=Mt.mapSize,n.directionalShadow[_]=St,n.directionalShadowMap[_]=Tt,n.directionalShadowMatrix[_]=J.shadow.matrix,E++}n.directional[_]=pt,_++}else if(J.isSpotLight){let pt=t.get(J);pt.position.setFromMatrixPosition(J.matrixWorld),pt.color.copy(Q).multiplyScalar(ht),pt.distance=ft,pt.coneCos=Math.cos(J.angle),pt.penumbraCos=Math.cos(J.angle*(1-J.penumbra)),pt.decay=J.decay,n.spot[O]=pt;let Mt=J.shadow;if(J.map&&(n.spotLightMap[T]=J.map,T++,Mt.updateMatrices(J),J.castShadow&&N++),n.spotLightMatrix[O]=Mt.matrix,J.castShadow){let St=e.get(J);St.shadowIntensity=Mt.intensity,St.shadowBias=Mt.bias,St.shadowNormalBias=Mt.normalBias,St.shadowRadius=Mt.radius,St.shadowMapSize=Mt.mapSize,n.spotShadow[O]=St,n.spotShadowMap[O]=Tt,G++}O++}else if(J.isRectAreaLight){let pt=t.get(J);pt.color.copy(Q).multiplyScalar(ht),pt.halfWidth.set(J.width*.5,0,0),pt.halfHeight.set(0,J.height*.5,0),n.rectArea[B]=pt,B++}else if(J.isPointLight){let pt=t.get(J);if(pt.color.copy(J.color).multiplyScalar(J.intensity),pt.distance=J.distance,pt.decay=J.decay,J.castShadow){let Mt=J.shadow,St=e.get(J);St.shadowIntensity=Mt.intensity,St.shadowBias=Mt.bias,St.shadowNormalBias=Mt.normalBias,St.shadowRadius=Mt.radius,St.shadowMapSize=Mt.mapSize,St.shadowCameraNear=Mt.camera.near,St.shadowCameraFar=Mt.camera.far,n.pointShadow[m]=St,n.pointShadowMap[m]=Tt,n.pointShadowMatrix[m]=J.shadow.matrix,F++}n.point[m]=pt,m++}else if(J.isHemisphereLight){let pt=t.get(J);pt.skyColor.copy(J.color).multiplyScalar(ht),pt.groundColor.copy(J.groundColor).multiplyScalar(ht),n.hemi[R]=pt,R++}}B>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Vt.LTC_FLOAT_1,n.rectAreaLTC2=Vt.LTC_FLOAT_2):(n.rectAreaLTC1=Vt.LTC_HALF_1,n.rectAreaLTC2=Vt.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=v,n.ambient[2]=f;let q=n.hash;(q.sunLength!==y||q.directionalLength!==_||q.pointLength!==m||q.spotLength!==O||q.rectAreaLength!==B||q.hemiLength!==R||q.numSunShadows!==S||q.numDirectionalShadows!==E||q.numPointShadows!==F||q.numSpotShadows!==G||q.numSpotMaps!==T||q.numLightProbes!==H)&&(n.sun.length=y,n.directional.length=_,n.spot.length=O,n.rectArea.length=B,n.point.length=m,n.hemi.length=R,n.sunShadow.length=S,n.sunShadowMap.length=S,n.sunShadowMatrix.length=I,n.sunShadowCascade.length=I,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=F,n.pointShadowMap.length=F,n.pointShadowMatrix.length=F,n.spotShadow.length=G,n.spotShadowMap.length=G,n.spotLightMatrix.length=G+T-N,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=N,n.numLightProbes=H,q.sunLength=y,q.directionalLength=_,q.pointLength=m,q.spotLength=O,q.rectAreaLength=B,q.hemiLength=R,q.numSunShadows=S,q.numDirectionalShadows=E,q.numPointShadows=F,q.numSpotShadows=G,q.numSpotMaps=T,q.numLightProbes=H,n.version=XM++)}function c(h,d){let v=0,f=0,y=0,S=0,I=0,_=0,m=d.matrixWorldInverse;for(let O=0,B=h.length;O<B;O++){let R=h[O];if(R.isSunLight){let E=n.sun[v];E.direction.setFromMatrixPosition(R.matrixWorld),E.direction.transformDirection(m),v++}else if(R.isDirectionalLight){let E=n.directional[f];E.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),f++}else if(R.isSpotLight){let E=n.spot[S];E.position.setFromMatrixPosition(R.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),S++}else if(R.isRectAreaLight){let E=n.rectArea[I];E.position.setFromMatrixPosition(R.matrixWorld),E.position.applyMatrix4(m),a.identity(),r.copy(R.matrixWorld),r.premultiply(m),a.extractRotation(r),E.halfWidth.set(R.width*.5,0,0),E.halfHeight.set(0,R.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),I++}else if(R.isPointLight){let E=n.point[y];E.position.setFromMatrixPosition(R.matrixWorld),E.position.applyMatrix4(m),y++}else if(R.isHemisphereLight){let E=n.hemi[_];E.direction.setFromMatrixPosition(R.matrixWorld),E.direction.transformDirection(m),_++}}}return{setup:l,setupView:c,state:n}}function mg(i){let t=new YM(i),e=[],n=[],s=[];function r(f){v.camera=f,e.length=0,n.length=0,s.length=0}function a(f){e.push(f)}function l(f){n.push(f)}function c(f){s.push(f)}function h(){t.setup(e)}function d(f){t.setupView(e,f)}let v={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:v,setupLights:h,setupLightsView:d,pushLight:a,pushShadow:l,pushLightProbeGrid:c}}function ZM(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),l;return a===void 0?(l=new mg(i),t.set(s,[l])):r>=a.length?(l=new mg(i),a.push(l)):l=a[r],l}function n(){t=new WeakMap}return{get:e,dispose:n}}var JM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jM=`uniform sampler2D shadow_pass;
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
}`,KM=[new X(1,0,0),new X(-1,0,0),new X(0,1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1)],QM=[new X(0,-1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1),new X(0,-1,0),new X(0,-1,0)],gg=new $e,al=new X,nf=new X;function tb(i,t,e){let n=new fa,s=new $t,r=new $t,a=new Qe,l=new Oc,c=new Bc,h={},d=e.maxTextureSize,v={[ks]:Jn,[Jn]:ks,[Ji]:Ji},f=new Pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $t},radius:{value:4}},vertexShader:JM,fragmentShader:jM}),y=f.clone();y.defines.HORIZONTAL_PASS=1;let S=new _n;S.setAttribute("position",new nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let I=new In(S,f),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zo;let m=this.type;this.render=function(F,G,T){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||F.length===0)return;this.type===lm&&(xe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Zo);let N=i.getRenderTarget(),H=i.getActiveCubeFace(),q=i.getActiveMipmapLevel(),st=i.state;st.setBlending(ji),st.buffers.depth.getReversed()===!0?st.buffers.color.setClear(0,0,0,0):st.buffers.color.setClear(1,1,1,1),st.buffers.depth.setTest(!0),st.setScissorTest(!1);let ot=m!==this.type;ot&&G.traverse(function(J){J.material&&(Array.isArray(J.material)?J.material.forEach(Q=>Q.needsUpdate=!0):J.material.needsUpdate=!0)});for(let J=0,Q=F.length;J<Q;J++){let ht=F[J],ft=ht.shadow;if(ft===void 0){xe("WebGLShadowMap:",ht,"has no shadow.");continue}if(ft.autoUpdate===!1&&ft.needsUpdate===!1)continue;s.copy(ft.mapSize);let Tt=ft.getFrameExtents();s.multiply(Tt),r.copy(ft.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/Tt.x),s.x=r.x*Tt.x,ft.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/Tt.y),s.y=r.y*Tt.y,ft.mapSize.y=r.y));let pt=i.state.buffers.depth.getReversed();if(ft.camera._reversedDepth=pt,ft.map===null||ot===!0){if(ft.map!==null&&(ft.map.depthTexture!==null&&(ft.map.depthTexture.dispose(),ft.map.depthTexture=null),ft.map.dispose()),this.type===va){if(ht.isPointLight){xe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}ft.map=new ii(s.x,s.y,{format:Hs,type:Oi,minFilter:Un,magFilter:Un,generateMipmaps:!1}),ft.map.texture.name=ht.name+".shadowMap",ft.map.depthTexture=new Ns(s.x,s.y,Si),ft.map.depthTexture.name=ht.name+".shadowMapDepth",ft.map.depthTexture.format=Xi,ft.map.depthTexture.compareFunction=null,ft.map.depthTexture.minFilter=Cn,ft.map.depthTexture.magFilter=Cn}else ht.isPointLight?(ft.map=new Wh(s.x),ft.map.depthTexture=new Rc(s.x,Fi)):(ft.map=new ii(s.x,s.y),ft.map.depthTexture=new Ns(s.x,s.y,Fi)),ft.map.depthTexture.name=ht.name+".shadowMap",ft.map.depthTexture.format=Xi,this.type===Zo?(ft.map.depthTexture.compareFunction=pt?$h:zh,ft.map.depthTexture.minFilter=Un,ft.map.depthTexture.magFilter=Un):(ft.map.depthTexture.compareFunction=null,ft.map.depthTexture.minFilter=Cn,ft.map.depthTexture.magFilter=Cn);ft.camera.updateProjectionMatrix()}ft.map.isWebGLCubeRenderTarget!==!0&&(ft.map.width!==s.x||ft.map.height!==s.y)&&ft.map.setSize(s.x,s.y);let Mt=ft.map.isWebGLCubeRenderTarget?6:ft.getViewportCount();ht.isPointLight!==!0&&ft.updateMatrices(ht,T);for(let St=0;St<Mt;St++){let qt=ft.getCamera(St);if(ht.isPointLight){let jt=ft.camera,Ve=ft.matrix,Ie=ht.distance||jt.far;Ie!==jt.far&&(jt.far=Ie,jt.updateProjectionMatrix()),al.setFromMatrixPosition(ht.matrixWorld),jt.position.copy(al),nf.copy(jt.position),nf.add(KM[St]),jt.up.copy(QM[St]),jt.lookAt(nf),jt.updateMatrixWorld(),Ve.makeTranslation(-al.x,-al.y,-al.z),gg.multiplyMatrices(jt.projectionMatrix,jt.matrixWorldInverse),ft._frustum.setFromProjectionMatrix(gg,jt.coordinateSystem,jt.reversedDepth)}if(ft.map.isWebGLCubeRenderTarget)i.setRenderTarget(ft.map,St),i.clear();else{St===0&&(i.setRenderTarget(ft.map),i.clear());let jt=ft.getViewport(St);a.set(r.x*jt.x,r.y*jt.y,r.x*jt.z,r.y*jt.w),st.viewport(a)}n=ft.getFrustum(St),R(G,T,qt,ht,this.type)}ft.isPointLightShadow!==!0&&this.type===va&&O(ft,T),ft.needsUpdate=!1}m=this.type,_.needsUpdate=!1,i.setRenderTarget(N,H,q)};function O(F,G){let T=t.update(I);f.defines.VSM_SAMPLES!==F.blurSamples&&(f.defines.VSM_SAMPLES=F.blurSamples,y.defines.VSM_SAMPLES=F.blurSamples,f.needsUpdate=!0,y.needsUpdate=!0),F.mapPass===null?F.mapPass=new ii(s.x,s.y,{format:Hs,type:Oi}):(F.mapPass.width!==F.map.width||F.mapPass.height!==F.map.height)&&F.mapPass.setSize(F.map.width,F.map.height),f.uniforms.shadow_pass.value=F.map.depthTexture,f.uniforms.resolution.value.set(F.map.width,F.map.height),f.uniforms.radius.value=F.radius,i.setRenderTarget(F.mapPass),i.clear(),i.renderBufferDirect(G,null,T,f,I,null),y.uniforms.shadow_pass.value=F.mapPass.texture,y.uniforms.resolution.value.set(F.map.width,F.map.height),y.uniforms.radius.value=F.radius,i.setRenderTarget(F.map),i.clear(),i.renderBufferDirect(G,null,T,y,I,null)}function B(F,G,T,N){let H=null,q=T.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(q!==void 0)H=q;else if(H=T.isPointLight===!0?c:l,i.localClippingEnabled&&G.clipShadows===!0&&Array.isArray(G.clippingPlanes)&&G.clippingPlanes.length!==0||G.displacementMap&&G.displacementScale!==0||G.alphaMap&&G.alphaTest>0||G.map&&G.alphaTest>0||G.alphaToCoverage===!0){let st=H.uuid,ot=G.uuid,J=h[st];J===void 0&&(J={},h[st]=J);let Q=J[ot];Q===void 0&&(Q=H.clone(),J[ot]=Q,G.addEventListener("dispose",E)),H=Q}if(H.visible=G.visible,H.wireframe=G.wireframe,N===va?H.side=G.shadowSide!==null?G.shadowSide:G.side:H.side=G.shadowSide!==null?G.shadowSide:v[G.side],H.alphaMap=G.alphaMap,H.alphaTest=G.alphaToCoverage===!0?.5:G.alphaTest,H.map=G.map,H.clipShadows=G.clipShadows,H.clippingPlanes=G.clippingPlanes,H.clipIntersection=G.clipIntersection,H.displacementMap=G.displacementMap,H.displacementScale=G.displacementScale,H.displacementBias=G.displacementBias,H.wireframeLinewidth=G.wireframeLinewidth,H.linewidth=G.linewidth,T.isPointLight===!0&&H.isMeshDistanceMaterial===!0){let st=i.properties.get(H);st.light=T}return H}function R(F,G,T,N,H){if(F.visible===!1)return;if(F.layers.test(G.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&H===va)&&(!F.frustumCulled||F.intersectsFrustum(n))){F.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,F.matrixWorld);let ot=t.update(F),J=F.material;if(Array.isArray(J)){let Q=ot.groups;for(let ht=0,ft=Q.length;ht<ft;ht++){let Tt=Q[ht],pt=J[Tt.materialIndex];if(pt&&pt.visible){let Mt=B(F,pt,N,H);F.onBeforeShadow(i,F,G,T,ot,Mt,Tt),i.renderBufferDirect(T,null,ot,Mt,F,Tt),F.onAfterShadow(i,F,G,T,ot,Mt,Tt)}}}else if(J.visible){let Q=B(F,J,N,H);F.onBeforeShadow(i,F,G,T,ot,Q,null),i.renderBufferDirect(T,null,ot,Q,F,null),F.onAfterShadow(i,F,G,T,ot,Q,null)}}let st=F.children;for(let ot=0,J=st.length;ot<J;ot++)R(st[ot],G,T,N,H)}function E(F){F.target.removeEventListener("dispose",E);for(let T in h){let N=h[T],H=F.target.uuid;H in N&&(N[H].dispose(),delete N[H])}}}function eb(i,t){function e(){let j=!1,Ut=new Qe,xt=null,zt=new Qe(0,0,0,0);return{setMask:function(Zt){xt!==Zt&&!j&&(i.colorMask(Zt,Zt,Zt,Zt),xt=Zt)},setLocked:function(Zt){j=Zt},setClear:function(Zt,Et,le,ee,Je){Je===!0&&(Zt*=ee,Et*=ee,le*=ee),Ut.set(Zt,Et,le,ee),zt.equals(Ut)===!1&&(i.clearColor(Zt,Et,le,ee),zt.copy(Ut))},reset:function(){j=!1,xt=null,zt.set(-1,0,0,0)}}}function n(){let j=!1,Ut=!1,xt=null,zt=null,Zt=null;return{setReversed:function(Et){if(Ut!==Et){let le=t.get("EXT_clip_control");Et?le.clipControlEXT(le.LOWER_LEFT_EXT,le.ZERO_TO_ONE_EXT):le.clipControlEXT(le.LOWER_LEFT_EXT,le.NEGATIVE_ONE_TO_ONE_EXT),Ut=Et;let ee=Zt;Zt=null,this.setClear(ee)}},getReversed:function(){return Ut},setTest:function(Et){Et?vt(i.DEPTH_TEST):Pt(i.DEPTH_TEST)},setMask:function(Et){xt!==Et&&!j&&(i.depthMask(Et),xt=Et)},setFunc:function(Et){if(Ut&&(Et=Vm[Et]),zt!==Et){switch(Et){case uc:i.depthFunc(i.NEVER);break;case dc:i.depthFunc(i.ALWAYS);break;case fc:i.depthFunc(i.LESS);break;case aa:i.depthFunc(i.LEQUAL);break;case pc:i.depthFunc(i.EQUAL);break;case mc:i.depthFunc(i.GEQUAL);break;case gc:i.depthFunc(i.GREATER);break;case _c:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}zt=Et}},setLocked:function(Et){j=Et},setClear:function(Et){Zt!==Et&&(Zt=Et,Ut&&(Et=1-Et),i.clearDepth(Et))},reset:function(){j=!1,xt=null,zt=null,Zt=null,Ut=!1}}}function s(){let j=!1,Ut=null,xt=null,zt=null,Zt=null,Et=null,le=null,ee=null,Je=null;return{setTest:function(Ee){j||(Ee?vt(i.STENCIL_TEST):Pt(i.STENCIL_TEST))},setMask:function(Ee){Ut!==Ee&&!j&&(i.stencilMask(Ee),Ut=Ee)},setFunc:function(Ee,mn,yn){(xt!==Ee||zt!==mn||Zt!==yn)&&(i.stencilFunc(Ee,mn,yn),xt=Ee,zt=mn,Zt=yn)},setOp:function(Ee,mn,yn){(Et!==Ee||le!==mn||ee!==yn)&&(i.stencilOp(Ee,mn,yn),Et=Ee,le=mn,ee=yn)},setLocked:function(Ee){j=Ee},setClear:function(Ee){Je!==Ee&&(i.clearStencil(Ee),Je=Ee)},reset:function(){j=!1,Ut=null,xt=null,zt=null,Zt=null,Et=null,le=null,ee=null,Je=null}}}let r=new e,a=new n,l=new s,c=new WeakMap,h=new WeakMap,d={},v={},f={},y=new WeakMap,S=[],I=null,_=!1,m=null,O=null,B=null,R=null,E=null,F=null,G=null,T=new ge(0,0,0),N=0,H=!1,q=null,st=null,ot=null,J=null,Q=null,ht=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ft=!1,Tt=0,pt=i.getParameter(i.VERSION);pt.indexOf("WebGL")!==-1?(Tt=parseFloat(/^WebGL (\d)/.exec(pt)[1]),ft=Tt>=1):pt.indexOf("OpenGL ES")!==-1&&(Tt=parseFloat(/^OpenGL ES (\d)/.exec(pt)[1]),ft=Tt>=2);let Mt=null,St={},qt=i.getParameter(i.SCISSOR_BOX),jt=i.getParameter(i.VIEWPORT),Ve=new Qe().fromArray(qt),Ie=new Qe().fromArray(jt);function Fe(j,Ut,xt,zt){let Zt=new Uint8Array(4),Et=i.createTexture();i.bindTexture(j,Et),i.texParameteri(j,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(j,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let le=0;le<xt;le++)j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?i.texImage3D(Ut,0,i.RGBA,1,1,zt,0,i.RGBA,i.UNSIGNED_BYTE,Zt):i.texImage2D(Ut+le,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Zt);return Et}let _t={};_t[i.TEXTURE_2D]=Fe(i.TEXTURE_2D,i.TEXTURE_2D,1),_t[i.TEXTURE_CUBE_MAP]=Fe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),_t[i.TEXTURE_2D_ARRAY]=Fe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),_t[i.TEXTURE_3D]=Fe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),l.setClear(0),vt(i.DEPTH_TEST),a.setFunc(aa),Ct(!1),Bt(Md),vt(i.CULL_FACE),At(ji);function vt(j){d[j]!==!0&&(i.enable(j),d[j]=!0)}function Pt(j){d[j]!==!1&&(i.disable(j),d[j]=!1)}function oe(j,Ut){return f[j]!==Ut?(i.bindFramebuffer(j,Ut),f[j]=Ut,j===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=Ut),j===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=Ut),!0):!1}function Yt(j,Ut){let xt=S,zt=!1;if(j){xt=y.get(Ut),xt===void 0&&(xt=[],y.set(Ut,xt));let Zt=j.textures;if(xt.length!==Zt.length||xt[0]!==i.COLOR_ATTACHMENT0){for(let Et=0,le=Zt.length;Et<le;Et++)xt[Et]=i.COLOR_ATTACHMENT0+Et;xt.length=Zt.length,zt=!0}}else xt[0]!==i.BACK&&(xt[0]=i.BACK,zt=!0);zt&&i.drawBuffers(xt)}function pe(j){return I!==j?(i.useProgram(j),I=j,!0):!1}let se={[gr]:i.FUNC_ADD,[hm]:i.FUNC_SUBTRACT,[um]:i.FUNC_REVERSE_SUBTRACT};se[dm]=i.MIN,se[fm]=i.MAX;let at={[pm]:i.ZERO,[mm]:i.ONE,[gm]:i.SRC_COLOR,[Td]:i.SRC_ALPHA,[Mm]:i.SRC_ALPHA_SATURATE,[ym]:i.DST_COLOR,[xm]:i.DST_ALPHA,[_m]:i.ONE_MINUS_SRC_COLOR,[Ad]:i.ONE_MINUS_SRC_ALPHA,[Sm]:i.ONE_MINUS_DST_COLOR,[vm]:i.ONE_MINUS_DST_ALPHA,[bm]:i.CONSTANT_COLOR,[wm]:i.ONE_MINUS_CONSTANT_COLOR,[Em]:i.CONSTANT_ALPHA,[Tm]:i.ONE_MINUS_CONSTANT_ALPHA};function At(j,Ut,xt,zt,Zt,Et,le,ee,Je,Ee){if(j===ji){_===!0&&(Pt(i.BLEND),_=!1);return}if(_===!1&&(vt(i.BLEND),_=!0),j!==cm){if(j!==m||Ee!==H){if((O!==gr||E!==gr)&&(i.blendEquation(i.FUNC_ADD),O=gr,E=gr),Ee)switch(j){case ya:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case bd:i.blendFunc(i.ONE,i.ONE);break;case wd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ed:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ye("WebGLState: Invalid blending: ",j);break}else switch(j){case ya:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case bd:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case wd:ye("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ed:ye("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ye("WebGLState: Invalid blending: ",j);break}B=null,R=null,F=null,G=null,T.set(0,0,0),N=0,m=j,H=Ee}return}Zt=Zt||Ut,Et=Et||xt,le=le||zt,(Ut!==O||Zt!==E)&&(i.blendEquationSeparate(se[Ut],se[Zt]),O=Ut,E=Zt),(xt!==B||zt!==R||Et!==F||le!==G)&&(i.blendFuncSeparate(at[xt],at[zt],at[Et],at[le]),B=xt,R=zt,F=Et,G=le),(ee.equals(T)===!1||Je!==N)&&(i.blendColor(ee.r,ee.g,ee.b,Je),T.copy(ee),N=Je),m=j,H=!1}function $(j,Ut){j.side===Ji?Pt(i.CULL_FACE):vt(i.CULL_FACE);let xt=j.side===Jn;Ut&&(xt=!xt),Ct(xt),j.blending===ya&&j.transparent===!1?At(ji):At(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),a.setFunc(j.depthFunc),a.setTest(j.depthTest),a.setMask(j.depthWrite),r.setMask(j.colorWrite);let zt=j.stencilWrite;l.setTest(zt),zt&&(l.setMask(j.stencilWriteMask),l.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),l.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),he(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?vt(i.SAMPLE_ALPHA_TO_COVERAGE):Pt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ct(j){q!==j&&(j?i.frontFace(i.CW):i.frontFace(i.CCW),q=j)}function Bt(j){j!==am?(vt(i.CULL_FACE),j!==st&&(j===Md?i.cullFace(i.BACK):j===om?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Pt(i.CULL_FACE),st=j}function de(j){j!==ot&&(ft&&i.lineWidth(j),ot=j)}function he(j,Ut,xt){j?(vt(i.POLYGON_OFFSET_FILL),(J!==Ut||Q!==xt)&&(J=Ut,Q=xt,a.getReversed()&&(Ut=-Ut),i.polygonOffset(Ut,xt))):Pt(i.POLYGON_OFFSET_FILL)}function ue(j){j?vt(i.SCISSOR_TEST):Pt(i.SCISSOR_TEST)}function Se(j){j===void 0&&(j=i.TEXTURE0+ht-1),Mt!==j&&(i.activeTexture(j),Mt=j)}function W(j,Ut,xt){xt===void 0&&(Mt===null?xt=i.TEXTURE0+ht-1:xt=Mt);let zt=St[xt];zt===void 0&&(zt={type:void 0,texture:void 0},St[xt]=zt),(zt.type!==j||zt.texture!==Ut)&&(Mt!==xt&&(i.activeTexture(xt),Mt=xt),i.bindTexture(j,Ut||_t[j]),zt.type=j,zt.texture=Ut)}function Ce(){let j=St[Mt];j!==void 0&&j.type!==void 0&&(i.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function we(){try{i.compressedTexImage2D(...arguments)}catch(j){ye("WebGLState:",j)}}function L(){try{i.compressedTexImage3D(...arguments)}catch(j){ye("WebGLState:",j)}}function b(){try{i.texSubImage2D(...arguments)}catch(j){ye("WebGLState:",j)}}function tt(){try{i.texSubImage3D(...arguments)}catch(j){ye("WebGLState:",j)}}function K(){try{i.compressedTexSubImage2D(...arguments)}catch(j){ye("WebGLState:",j)}}function mt(){try{i.compressedTexSubImage3D(...arguments)}catch(j){ye("WebGLState:",j)}}function Dt(){try{i.texStorage2D(...arguments)}catch(j){ye("WebGLState:",j)}}function Ft(){try{i.texStorage3D(...arguments)}catch(j){ye("WebGLState:",j)}}function gt(){try{i.texImage2D(...arguments)}catch(j){ye("WebGLState:",j)}}function yt(){try{i.texImage3D(...arguments)}catch(j){ye("WebGLState:",j)}}function kt(j){return v[j]!==void 0?v[j]:i.getParameter(j)}function re(j,Ut){v[j]!==Ut&&(i.pixelStorei(j,Ut),v[j]=Ut)}function Xt(j){Ve.equals(j)===!1&&(i.scissor(j.x,j.y,j.z,j.w),Ve.copy(j))}function Ht(j){Ie.equals(j)===!1&&(i.viewport(j.x,j.y,j.z,j.w),Ie.copy(j))}function ae(j,Ut){let xt=h.get(Ut);xt===void 0&&(xt=new WeakMap,h.set(Ut,xt));let zt=xt.get(j);zt===void 0&&(zt=i.getUniformBlockIndex(Ut,j.name),xt.set(j,zt))}function me(j,Ut){let zt=h.get(Ut).get(j);c.get(Ut)!==zt&&(i.uniformBlockBinding(Ut,zt,j.__bindingPointIndex),c.set(Ut,zt))}function Me(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),d={},v={},Mt=null,St={},f={},y=new WeakMap,S=[],I=null,_=!1,m=null,O=null,B=null,R=null,E=null,F=null,G=null,T=new ge(0,0,0),N=0,H=!1,q=null,st=null,ot=null,J=null,Q=null,Ve.set(0,0,i.canvas.width,i.canvas.height),Ie.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),l.reset()}return{buffers:{color:r,depth:a,stencil:l},enable:vt,disable:Pt,bindFramebuffer:oe,drawBuffers:Yt,useProgram:pe,setBlending:At,setMaterial:$,setFlipSided:Ct,setCullFace:Bt,setLineWidth:de,setPolygonOffset:he,setScissorTest:ue,activeTexture:Se,bindTexture:W,unbindTexture:Ce,compressedTexImage2D:we,compressedTexImage3D:L,texImage2D:gt,texImage3D:yt,pixelStorei:re,getParameter:kt,updateUBOMapping:ae,uniformBlockBinding:me,texStorage2D:Dt,texStorage3D:Ft,texSubImage2D:b,texSubImage3D:tt,compressedTexSubImage2D:K,compressedTexSubImage3D:mt,scissor:Xt,viewport:Ht,reset:Me}}function nb(i,t,e,n,s,r,a){let l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new $t,d=new WeakMap,v=new Set,f,y=new WeakMap,S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function I(L,b){return S?new OffscreenCanvas(L,b):_o("canvas")}function _(L,b,tt){let K=1,mt=we(L);if((mt.width>tt||mt.height>tt)&&(K=tt/Math.max(mt.width,mt.height)),K<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){let Dt=Math.floor(K*mt.width),Ft=Math.floor(K*mt.height);f===void 0&&(f=I(Dt,Ft));let gt=b?I(Dt,Ft):f;return gt.width=Dt,gt.height=Ft,gt.getContext("2d").drawImage(L,0,0,Dt,Ft),xe("WebGLRenderer: Texture has been resized from ("+mt.width+"x"+mt.height+") to ("+Dt+"x"+Ft+")."),gt}else return"data"in L&&xe("WebGLRenderer: Image in DataTexture is too big ("+mt.width+"x"+mt.height+")."),L;return L}function m(L){return L.generateMipmaps}function O(L){i.generateMipmap(L)}function B(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function R(L,b,tt,K,mt,Dt=!1){if(L!==null){if(i[L]!==void 0)return i[L];xe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Ft;K&&(Ft=t.get("EXT_texture_norm16"),Ft||xe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let gt=b;if(b===i.RED&&(tt===i.FLOAT&&(gt=i.R32F),tt===i.HALF_FLOAT&&(gt=i.R16F),tt===i.UNSIGNED_BYTE&&(gt=i.R8),tt===i.UNSIGNED_SHORT&&Ft&&(gt=Ft.R16_EXT),tt===i.SHORT&&Ft&&(gt=Ft.R16_SNORM_EXT)),b===i.RED_INTEGER&&(tt===i.UNSIGNED_BYTE&&(gt=i.R8UI),tt===i.UNSIGNED_SHORT&&(gt=i.R16UI),tt===i.UNSIGNED_INT&&(gt=i.R32UI),tt===i.BYTE&&(gt=i.R8I),tt===i.SHORT&&(gt=i.R16I),tt===i.INT&&(gt=i.R32I)),b===i.RG&&(tt===i.FLOAT&&(gt=i.RG32F),tt===i.HALF_FLOAT&&(gt=i.RG16F),tt===i.UNSIGNED_BYTE&&(gt=i.RG8),tt===i.UNSIGNED_SHORT&&Ft&&(gt=Ft.RG16_EXT),tt===i.SHORT&&Ft&&(gt=Ft.RG16_SNORM_EXT)),b===i.RG_INTEGER&&(tt===i.UNSIGNED_BYTE&&(gt=i.RG8UI),tt===i.UNSIGNED_SHORT&&(gt=i.RG16UI),tt===i.UNSIGNED_INT&&(gt=i.RG32UI),tt===i.BYTE&&(gt=i.RG8I),tt===i.SHORT&&(gt=i.RG16I),tt===i.INT&&(gt=i.RG32I)),b===i.RGB_INTEGER&&(tt===i.UNSIGNED_BYTE&&(gt=i.RGB8UI),tt===i.UNSIGNED_SHORT&&(gt=i.RGB16UI),tt===i.UNSIGNED_INT&&(gt=i.RGB32UI),tt===i.BYTE&&(gt=i.RGB8I),tt===i.SHORT&&(gt=i.RGB16I),tt===i.INT&&(gt=i.RGB32I)),b===i.RGBA_INTEGER&&(tt===i.UNSIGNED_BYTE&&(gt=i.RGBA8UI),tt===i.UNSIGNED_SHORT&&(gt=i.RGBA16UI),tt===i.UNSIGNED_INT&&(gt=i.RGBA32UI),tt===i.BYTE&&(gt=i.RGBA8I),tt===i.SHORT&&(gt=i.RGBA16I),tt===i.INT&&(gt=i.RGBA32I)),b===i.RGB&&(tt===i.UNSIGNED_SHORT&&Ft&&(gt=Ft.RGB16_EXT),tt===i.SHORT&&Ft&&(gt=Ft.RGB16_SNORM_EXT),tt===i.UNSIGNED_INT_5_9_9_9_REV&&(gt=i.RGB9_E5),tt===i.UNSIGNED_INT_10F_11F_11F_REV&&(gt=i.R11F_G11F_B10F)),b===i.RGBA){let yt=Dt?go:ke.getTransfer(mt);tt===i.FLOAT&&(gt=i.RGBA32F),tt===i.HALF_FLOAT&&(gt=i.RGBA16F),tt===i.UNSIGNED_BYTE&&(gt=yt===Ke?i.SRGB8_ALPHA8:i.RGBA8),tt===i.UNSIGNED_SHORT&&Ft&&(gt=Ft.RGBA16_EXT),tt===i.SHORT&&Ft&&(gt=Ft.RGBA16_SNORM_EXT),tt===i.UNSIGNED_SHORT_4_4_4_4&&(gt=i.RGBA4),tt===i.UNSIGNED_SHORT_5_5_5_1&&(gt=i.RGB5_A1)}return(gt===i.R16F||gt===i.R32F||gt===i.RG16F||gt===i.RG32F||gt===i.RGBA16F||gt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),gt}function E(L,b){let tt;return L?b===null||b===Fi||b===Ma?tt=i.DEPTH24_STENCIL8:b===Si?tt=i.DEPTH32F_STENCIL8:b===Sa&&(tt=i.DEPTH24_STENCIL8,xe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Fi||b===Ma?tt=i.DEPTH_COMPONENT24:b===Si?tt=i.DEPTH_COMPONENT32F:b===Sa&&(tt=i.DEPTH_COMPONENT16),tt}function F(L,b){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==Cn&&L.minFilter!==Un?Math.log2(Math.max(b.width,b.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?b.mipmaps.length:1}function G(L){let b=L.target;b.removeEventListener("dispose",G),N(b),b.isVideoTexture&&d.delete(b),b.isHTMLTexture&&v.delete(b)}function T(L){let b=L.target;b.removeEventListener("dispose",T),q(b)}function N(L){let b=n.get(L);if(b.__webglInit===void 0)return;let tt=L.source,K=y.get(tt);if(K){let mt=K[b.__cacheKey];mt.usedTimes--,mt.usedTimes===0&&H(L),Object.keys(K).length===0&&y.delete(tt)}n.remove(L)}function H(L){let b=n.get(L);i.deleteTexture(b.__webglTexture);let tt=L.source,K=y.get(tt);delete K[b.__cacheKey],a.memory.textures--}function q(L){let b=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(b.__webglFramebuffer[K]))for(let mt=0;mt<b.__webglFramebuffer[K].length;mt++)i.deleteFramebuffer(b.__webglFramebuffer[K][mt]);else i.deleteFramebuffer(b.__webglFramebuffer[K]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[K])}else{if(Array.isArray(b.__webglFramebuffer))for(let K=0;K<b.__webglFramebuffer.length;K++)i.deleteFramebuffer(b.__webglFramebuffer[K]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let K=0;K<b.__webglColorRenderbuffer.length;K++)b.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[K]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let tt=L.textures;for(let K=0,mt=tt.length;K<mt;K++){let Dt=n.get(tt[K]);Dt.__webglTexture&&(i.deleteTexture(Dt.__webglTexture),a.memory.textures--),n.remove(tt[K])}n.remove(L)}let st=0;function ot(){st=0}function J(){return st}function Q(L){st=L}function ht(){let L=st;return L>=s.maxTextures&&xe("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+s.maxTextures),st+=1,L}function ft(L){let b=[];return b.push(L.wrapS),b.push(L.wrapT),b.push(L.wrapR||0),b.push(L.magFilter),b.push(L.minFilter),b.push(L.anisotropy),b.push(L.internalFormat),b.push(L.format),b.push(L.type),b.push(L.generateMipmaps),b.push(L.premultiplyAlpha),b.push(L.flipY),b.push(L.unpackAlignment),b.push(L.colorSpace),b.join()}function Tt(L,b){let tt=n.get(L);if(L.isVideoTexture&&W(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&tt.__version!==L.version){let K=L.image;if(K===null)xe("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)xe("WebGLRenderer: Texture marked for update but image is incomplete");else{Pt(tt,L,b);return}}else L.isExternalTexture&&(tt.__webglTexture=L.sourceTexture?L.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,tt.__webglTexture,i.TEXTURE0+b)}function pt(L,b){let tt=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&tt.__version!==L.version){Pt(tt,L,b);return}else L.isExternalTexture&&(tt.__webglTexture=L.sourceTexture?L.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,tt.__webglTexture,i.TEXTURE0+b)}function Mt(L,b){let tt=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&tt.__version!==L.version){Pt(tt,L,b);return}e.bindTexture(i.TEXTURE_3D,tt.__webglTexture,i.TEXTURE0+b)}function St(L,b){let tt=n.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&tt.__version!==L.version){oe(tt,L,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,tt.__webglTexture,i.TEXTURE0+b)}let qt={[xc]:i.REPEAT,[Gi]:i.CLAMP_TO_EDGE,[vc]:i.MIRRORED_REPEAT},jt={[Cn]:i.NEAREST,[Rm]:i.NEAREST_MIPMAP_NEAREST,[jo]:i.NEAREST_MIPMAP_LINEAR,[Un]:i.LINEAR,[eh]:i.LINEAR_MIPMAP_NEAREST,[$s]:i.LINEAR_MIPMAP_LINEAR},Ve={[Dm]:i.NEVER,[Bm]:i.ALWAYS,[Nm]:i.LESS,[zh]:i.LEQUAL,[Um]:i.EQUAL,[$h]:i.GEQUAL,[Fm]:i.GREATER,[Om]:i.NOTEQUAL};function Ie(L,b){if(b.type===Si&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Un||b.magFilter===eh||b.magFilter===jo||b.magFilter===$s||b.minFilter===Un||b.minFilter===eh||b.minFilter===jo||b.minFilter===$s)&&xe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,qt[b.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,qt[b.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,qt[b.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,jt[b.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,jt[b.minFilter]),b.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,Ve[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Cn||b.minFilter!==jo&&b.minFilter!==$s||b.type===Si&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let tt=t.get("EXT_texture_filter_anisotropic");i.texParameterf(L,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Fe(L,b){let tt=!1;L.__webglInit===void 0&&(L.__webglInit=!0,b.addEventListener("dispose",G));let K=b.source,mt=y.get(K);mt===void 0&&(mt={},y.set(K,mt));let Dt=ft(b);if(Dt!==L.__cacheKey){mt[Dt]===void 0&&(mt[Dt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,tt=!0),mt[Dt].usedTimes++;let Ft=mt[L.__cacheKey];Ft!==void 0&&(mt[L.__cacheKey].usedTimes--,Ft.usedTimes===0&&H(b)),L.__cacheKey=Dt,L.__webglTexture=mt[Dt].texture}return tt}function _t(L,b,tt){return Math.floor(Math.floor(L/tt)/b)}function vt(L,b,tt,K){let Dt=L.updateRanges;if(Dt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,b.width,b.height,tt,K,b.data);else{Dt.sort((re,Xt)=>re.start-Xt.start);let Ft=0;for(let re=1;re<Dt.length;re++){let Xt=Dt[Ft],Ht=Dt[re],ae=Xt.start+Xt.count,me=_t(Ht.start,b.width,4),Me=_t(Xt.start,b.width,4);Ht.start<=ae+1&&me===Me&&_t(Ht.start+Ht.count-1,b.width,4)===me?Xt.count=Math.max(Xt.count,Ht.start+Ht.count-Xt.start):(++Ft,Dt[Ft]=Ht)}Dt.length=Ft+1;let gt=e.getParameter(i.UNPACK_ROW_LENGTH),yt=e.getParameter(i.UNPACK_SKIP_PIXELS),kt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,b.width);for(let re=0,Xt=Dt.length;re<Xt;re++){let Ht=Dt[re],ae=Math.floor(Ht.start/4),me=Math.ceil(Ht.count/4),Me=ae%b.width,j=Math.floor(ae/b.width),Ut=me,xt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Me),e.pixelStorei(i.UNPACK_SKIP_ROWS,j),e.texSubImage2D(i.TEXTURE_2D,0,Me,j,Ut,xt,tt,K,b.data)}L.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,gt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,yt),e.pixelStorei(i.UNPACK_SKIP_ROWS,kt)}}function Pt(L,b,tt){let K=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(K=i.TEXTURE_3D);let mt=Fe(L,b),Dt=b.source;e.bindTexture(K,L.__webglTexture,i.TEXTURE0+tt);let Ft=n.get(Dt);if(Dt.version!==Ft.__version||mt===!0){if(e.activeTexture(i.TEXTURE0+tt),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){let xt=ke.getPrimaries(ke.workingColorSpace),zt=b.colorSpace===Ss?null:ke.getPrimaries(b.colorSpace),Zt=b.colorSpace===Ss||xt===zt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt)}e.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment);let yt=_(b.image,!1,s.maxTextureSize);yt=Ce(b,yt);let kt=r.convert(b.format,b.colorSpace),re=r.convert(b.type),Xt=R(b.internalFormat,kt,re,b.normalized,b.colorSpace,b.isVideoTexture);Ie(K,b);let Ht,ae=b.mipmaps,me=b.isVideoTexture!==!0,Me=Ft.__version===void 0||mt===!0,j=Dt.dataReady,Ut=F(b,yt);if(b.isDepthTexture)Xt=E(b.format===Vs,b.type),Me&&(me?e.texStorage2D(i.TEXTURE_2D,1,Xt,yt.width,yt.height):e.texImage2D(i.TEXTURE_2D,0,Xt,yt.width,yt.height,0,kt,re,null));else if(b.isDataTexture)if(ae.length>0){me&&Me&&e.texStorage2D(i.TEXTURE_2D,Ut,Xt,ae[0].width,ae[0].height);for(let xt=0,zt=ae.length;xt<zt;xt++)Ht=ae[xt],me?j&&e.texSubImage2D(i.TEXTURE_2D,xt,0,0,Ht.width,Ht.height,kt,re,Ht.data):e.texImage2D(i.TEXTURE_2D,xt,Xt,Ht.width,Ht.height,0,kt,re,Ht.data);b.generateMipmaps=!1}else me?(Me&&e.texStorage2D(i.TEXTURE_2D,Ut,Xt,yt.width,yt.height),j&&vt(b,yt,kt,re)):e.texImage2D(i.TEXTURE_2D,0,Xt,yt.width,yt.height,0,kt,re,yt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){me&&Me&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ut,Xt,ae[0].width,ae[0].height,yt.depth);for(let xt=0,zt=ae.length;xt<zt;xt++)if(Ht=ae[xt],b.format!==Mi)if(kt!==null)if(me){if(j)if(b.layerUpdates.size>0){let Zt=Jd(Ht.width,Ht.height,b.format,b.type);for(let Et of b.layerUpdates){let le=Ht.data.subarray(Et*Zt/Ht.data.BYTES_PER_ELEMENT,(Et+1)*Zt/Ht.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,xt,0,0,Et,Ht.width,Ht.height,1,kt,le)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,xt,0,0,0,Ht.width,Ht.height,yt.depth,kt,Ht.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,xt,Xt,Ht.width,Ht.height,yt.depth,0,Ht.data,0,0);else xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else me?j&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,xt,0,0,0,Ht.width,Ht.height,yt.depth,kt,re,Ht.data):e.texImage3D(i.TEXTURE_2D_ARRAY,xt,Xt,Ht.width,Ht.height,yt.depth,0,kt,re,Ht.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{me&&Me&&e.texStorage2D(i.TEXTURE_2D,Ut,Xt,ae[0].width,ae[0].height);for(let xt=0,zt=ae.length;xt<zt;xt++)Ht=ae[xt],b.format!==Mi?kt!==null?me?j&&e.compressedTexSubImage2D(i.TEXTURE_2D,xt,0,0,Ht.width,Ht.height,kt,Ht.data):e.compressedTexImage2D(i.TEXTURE_2D,xt,Xt,Ht.width,Ht.height,0,Ht.data):xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):me?j&&e.texSubImage2D(i.TEXTURE_2D,xt,0,0,Ht.width,Ht.height,kt,re,Ht.data):e.texImage2D(i.TEXTURE_2D,xt,Xt,Ht.width,Ht.height,0,kt,re,Ht.data)}else if(b.isDataArrayTexture)if(me){if(Me&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ut,Xt,yt.width,yt.height,yt.depth),j)if(b.layerUpdates.size>0){let xt=Jd(yt.width,yt.height,b.format,b.type);for(let zt of b.layerUpdates){let Zt=yt.data.subarray(zt*xt/yt.data.BYTES_PER_ELEMENT,(zt+1)*xt/yt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,zt,yt.width,yt.height,1,kt,re,Zt)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,yt.width,yt.height,yt.depth,kt,re,yt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Xt,yt.width,yt.height,yt.depth,0,kt,re,yt.data);else if(b.isData3DTexture)me?(Me&&e.texStorage3D(i.TEXTURE_3D,Ut,Xt,yt.width,yt.height,yt.depth),j&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,yt.width,yt.height,yt.depth,kt,re,yt.data)):e.texImage3D(i.TEXTURE_3D,0,Xt,yt.width,yt.height,yt.depth,0,kt,re,yt.data);else if(b.isFramebufferTexture){if(Me)if(me)e.texStorage2D(i.TEXTURE_2D,Ut,Xt,yt.width,yt.height);else{let xt=yt.width,zt=yt.height;for(let Zt=0;Zt<Ut;Zt++)e.texImage2D(i.TEXTURE_2D,Zt,Xt,xt,zt,0,kt,re,null),xt>>=1,zt>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in i){let xt=i.canvas;if(xt.hasAttribute("layoutsubtree")||xt.setAttribute("layoutsubtree","true"),yt.parentNode!==xt){xt.appendChild(yt),v.add(b),xt.onpaint=zt=>{let Zt=zt.changedElements;for(let Et of v)Zt.includes(Et.image)&&(Et.needsUpdate=!0)},xt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,yt);else{let Zt=i.RGBA,Et=i.RGBA,le=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Zt,Et,le,yt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ae.length>0){if(me&&Me){let xt=we(ae[0]);e.texStorage2D(i.TEXTURE_2D,Ut,Xt,xt.width,xt.height)}for(let xt=0,zt=ae.length;xt<zt;xt++)Ht=ae[xt],me?j&&e.texSubImage2D(i.TEXTURE_2D,xt,0,0,kt,re,Ht):e.texImage2D(i.TEXTURE_2D,xt,Xt,kt,re,Ht);b.generateMipmaps=!1}else if(me){if(Me){let xt=we(yt);e.texStorage2D(i.TEXTURE_2D,Ut,Xt,xt.width,xt.height)}j&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,kt,re,yt)}else e.texImage2D(i.TEXTURE_2D,0,Xt,kt,re,yt);m(b)&&O(K),Ft.__version=Dt.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function oe(L,b,tt){if(b.image.length!==6)return;let K=Fe(L,b),mt=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+tt);let Dt=n.get(mt);if(mt.version!==Dt.__version||K===!0){e.activeTexture(i.TEXTURE0+tt);let Ft=ke.getPrimaries(ke.workingColorSpace),gt=b.colorSpace===Ss?null:ke.getPrimaries(b.colorSpace),yt=b.colorSpace===Ss||Ft===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);let kt=b.isCompressedTexture||b.image[0].isCompressedTexture,re=b.image[0]&&b.image[0].isDataTexture,Xt=[];for(let Et=0;Et<6;Et++)!kt&&!re?Xt[Et]=_(b.image[Et],!0,s.maxCubemapSize):Xt[Et]=re?b.image[Et].image:b.image[Et],Xt[Et]=Ce(b,Xt[Et]);let Ht=Xt[0],ae=r.convert(b.format,b.colorSpace),me=r.convert(b.type),Me=R(b.internalFormat,ae,me,b.normalized,b.colorSpace),j=b.isVideoTexture!==!0,Ut=Dt.__version===void 0||K===!0,xt=mt.dataReady,zt=F(b,Ht);Ie(i.TEXTURE_CUBE_MAP,b);let Zt;if(kt){j&&Ut&&e.texStorage2D(i.TEXTURE_CUBE_MAP,zt,Me,Ht.width,Ht.height);for(let Et=0;Et<6;Et++){Zt=Xt[Et].mipmaps;for(let le=0;le<Zt.length;le++){let ee=Zt[le];b.format!==Mi?ae!==null?j?xt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,le,0,0,ee.width,ee.height,ae,ee.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,le,Me,ee.width,ee.height,0,ee.data):xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):j?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,le,0,0,ee.width,ee.height,ae,me,ee.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,le,Me,ee.width,ee.height,0,ae,me,ee.data)}}}else{if(Zt=b.mipmaps,j&&Ut){Zt.length>0&&zt++;let Et=we(Xt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,zt,Me,Et.width,Et.height)}for(let Et=0;Et<6;Et++)if(re){j?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,Xt[Et].width,Xt[Et].height,ae,me,Xt[Et].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,Me,Xt[Et].width,Xt[Et].height,0,ae,me,Xt[Et].data);for(let le=0;le<Zt.length;le++){let Je=Zt[le].image[Et].image;j?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,le+1,0,0,Je.width,Je.height,ae,me,Je.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,le+1,Me,Je.width,Je.height,0,ae,me,Je.data)}}else{j?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,ae,me,Xt[Et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,Me,ae,me,Xt[Et]);for(let le=0;le<Zt.length;le++){let ee=Zt[le];j?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,le+1,0,0,ae,me,ee.image[Et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,le+1,Me,ae,me,ee.image[Et])}}}m(b)&&O(i.TEXTURE_CUBE_MAP),Dt.__version=mt.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function Yt(L,b,tt,K,mt,Dt){let Ft=r.convert(tt.format,tt.colorSpace),gt=r.convert(tt.type),yt=R(tt.internalFormat,Ft,gt,tt.normalized,tt.colorSpace),kt=n.get(b),re=n.get(tt);if(re.__renderTarget=b,!kt.__hasExternalTextures){let Xt=Math.max(1,b.width>>Dt),Ht=Math.max(1,b.height>>Dt);mt===i.TEXTURE_3D||mt===i.TEXTURE_2D_ARRAY?e.texImage3D(mt,Dt,yt,Xt,Ht,b.depth,0,Ft,gt,null):e.texImage2D(mt,Dt,yt,Xt,Ht,0,Ft,gt,null)}e.bindFramebuffer(i.FRAMEBUFFER,L),Se(b)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,mt,re.__webglTexture,0,ue(b)):(mt===i.TEXTURE_2D||mt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&mt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,mt,re.__webglTexture,Dt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function pe(L,b,tt){if(i.bindRenderbuffer(i.RENDERBUFFER,L),b.depthBuffer){let K=b.depthTexture,mt=K&&K.isDepthTexture?K.type:null,Dt=E(b.stencilBuffer,mt),Ft=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Se(b)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue(b),Dt,b.width,b.height):tt?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue(b),Dt,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Dt,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ft,i.RENDERBUFFER,L)}else{let K=b.textures;for(let mt=0;mt<K.length;mt++){let Dt=K[mt],Ft=r.convert(Dt.format,Dt.colorSpace),gt=r.convert(Dt.type),yt=R(Dt.internalFormat,Ft,gt,Dt.normalized,Dt.colorSpace);Se(b)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue(b),yt,b.width,b.height):tt?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue(b),yt,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,yt,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function se(L,b,tt){let K=b.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,L),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let mt=n.get(b.depthTexture);if(mt.__renderTarget=b,(!mt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),K){if(mt.__webglInit===void 0&&(mt.__webglInit=!0,b.depthTexture.addEventListener("dispose",G)),mt.__webglTexture===void 0){mt.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,mt.__webglTexture),Ie(i.TEXTURE_CUBE_MAP,b.depthTexture);let kt=r.convert(b.depthTexture.format),re=r.convert(b.depthTexture.type),Xt;b.depthTexture.format===Xi?Xt=i.DEPTH_COMPONENT24:b.depthTexture.format===Vs&&(Xt=i.DEPTH24_STENCIL8);for(let Ht=0;Ht<6;Ht++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ht,0,Xt,b.width,b.height,0,kt,re,null)}}else Tt(b.depthTexture,0);let Dt=mt.__webglTexture,Ft=ue(b),gt=K?i.TEXTURE_CUBE_MAP_POSITIVE_X+tt:i.TEXTURE_2D,yt=b.depthTexture.format===Vs?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(b.depthTexture.format===Xi)Se(b)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,yt,gt,Dt,0,Ft):i.framebufferTexture2D(i.FRAMEBUFFER,yt,gt,Dt,0);else if(b.depthTexture.format===Vs)Se(b)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,yt,gt,Dt,0,Ft):i.framebufferTexture2D(i.FRAMEBUFFER,yt,gt,Dt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function at(L){let b=n.get(L),tt=L.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==L.depthTexture){let K=L.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),K){let mt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,K.removeEventListener("dispose",mt)};K.addEventListener("dispose",mt),b.__depthDisposeCallback=mt}b.__boundDepthTexture=K}if(L.depthTexture&&!b.__autoAllocateDepthBuffer)if(tt)for(let K=0;K<6;K++)se(b.__webglFramebuffer[K],L,K);else{let K=L.texture.mipmaps;K&&K.length>0?se(b.__webglFramebuffer[0],L,0):se(b.__webglFramebuffer,L,0)}else if(tt){b.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[K]),b.__webglDepthbuffer[K]===void 0)b.__webglDepthbuffer[K]=i.createRenderbuffer(),pe(b.__webglDepthbuffer[K],L,!1);else{let mt=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Dt=b.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,Dt),i.framebufferRenderbuffer(i.FRAMEBUFFER,mt,i.RENDERBUFFER,Dt)}}else{let K=L.texture.mipmaps;if(K&&K.length>0?e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),pe(b.__webglDepthbuffer,L,!1);else{let mt=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Dt=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Dt),i.framebufferRenderbuffer(i.FRAMEBUFFER,mt,i.RENDERBUFFER,Dt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function At(L,b,tt){let K=n.get(L);b!==void 0&&Yt(K.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),tt!==void 0&&at(L)}function $(L){let b=L.texture,tt=n.get(L),K=n.get(b);L.addEventListener("dispose",T);let mt=L.textures,Dt=L.isWebGLCubeRenderTarget===!0,Ft=mt.length>1;if(Ft||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=b.version,a.memory.textures++),Dt){tt.__webglFramebuffer=[];for(let gt=0;gt<6;gt++)if(b.mipmaps&&b.mipmaps.length>0){tt.__webglFramebuffer[gt]=[];for(let yt=0;yt<b.mipmaps.length;yt++)tt.__webglFramebuffer[gt][yt]=i.createFramebuffer()}else tt.__webglFramebuffer[gt]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){tt.__webglFramebuffer=[];for(let gt=0;gt<b.mipmaps.length;gt++)tt.__webglFramebuffer[gt]=i.createFramebuffer()}else tt.__webglFramebuffer=i.createFramebuffer();if(Ft)for(let gt=0,yt=mt.length;gt<yt;gt++){let kt=n.get(mt[gt]);kt.__webglTexture===void 0&&(kt.__webglTexture=i.createTexture(),a.memory.textures++)}if(L.samples>0&&Se(L)===!1){tt.__webglMultisampledFramebuffer=i.createFramebuffer(),tt.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let gt=0;gt<mt.length;gt++){let yt=mt[gt];tt.__webglColorRenderbuffer[gt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,tt.__webglColorRenderbuffer[gt]);let kt=r.convert(yt.format,yt.colorSpace),re=r.convert(yt.type),Xt=R(yt.internalFormat,kt,re,yt.normalized,yt.colorSpace,L.isXRRenderTarget===!0),Ht=ue(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ht,Xt,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,tt.__webglColorRenderbuffer[gt])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(tt.__webglDepthRenderbuffer=i.createRenderbuffer(),pe(tt.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Dt){e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),Ie(i.TEXTURE_CUBE_MAP,b);for(let gt=0;gt<6;gt++)if(b.mipmaps&&b.mipmaps.length>0)for(let yt=0;yt<b.mipmaps.length;yt++)Yt(tt.__webglFramebuffer[gt][yt],L,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,yt);else Yt(tt.__webglFramebuffer[gt],L,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0);m(b)&&O(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ft){for(let gt=0,yt=mt.length;gt<yt;gt++){let kt=mt[gt],re=n.get(kt),Xt=i.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Xt=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Xt,re.__webglTexture),Ie(Xt,kt),Yt(tt.__webglFramebuffer,L,kt,i.COLOR_ATTACHMENT0+gt,Xt,0),m(kt)&&O(Xt)}e.unbindTexture()}else{let gt=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(gt=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(gt,K.__webglTexture),Ie(gt,b),b.mipmaps&&b.mipmaps.length>0)for(let yt=0;yt<b.mipmaps.length;yt++)Yt(tt.__webglFramebuffer[yt],L,b,i.COLOR_ATTACHMENT0,gt,yt);else Yt(tt.__webglFramebuffer,L,b,i.COLOR_ATTACHMENT0,gt,0);m(b)&&O(gt),e.unbindTexture()}L.depthBuffer&&at(L)}function Ct(L){let b=L.textures;for(let tt=0,K=b.length;tt<K;tt++){let mt=b[tt];if(m(mt)){let Dt=B(L),Ft=n.get(mt).__webglTexture;e.bindTexture(Dt,Ft),O(Dt),e.unbindTexture()}}}let Bt=[],de=[];function he(L){if(L.samples>0){if(Se(L)===!1){let b=L.textures,tt=L.width,K=L.height,mt=i.COLOR_BUFFER_BIT,Dt=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ft=n.get(L),gt=b.length>1;if(gt)for(let kt=0;kt<b.length;kt++)e.bindFramebuffer(i.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+kt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+kt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer);let yt=L.texture.mipmaps;yt&&yt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer);for(let kt=0;kt<b.length;kt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(mt|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(mt|=i.STENCIL_BUFFER_BIT)),gt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ft.__webglColorRenderbuffer[kt]);let re=n.get(b[kt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,re,0)}i.blitFramebuffer(0,0,tt,K,0,0,tt,K,mt,i.NEAREST),c===!0&&(Bt.length=0,de.length=0,Bt.push(i.COLOR_ATTACHMENT0+kt),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&(Bt.push(Dt),de.push(Dt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,de)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Bt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),gt)for(let kt=0;kt<b.length;kt++){e.bindFramebuffer(i.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+kt,i.RENDERBUFFER,Ft.__webglColorRenderbuffer[kt]);let re=n.get(b[kt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+kt,i.TEXTURE_2D,re,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&c){let b=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function ue(L){return Math.min(s.maxSamples,L.samples)}function Se(L){let b=n.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function W(L){let b=a.render.frame;d.get(L)!==b&&(d.set(L,b),L.update())}function Ce(L,b){let tt=L.colorSpace,K=L.format,mt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||tt!==mo&&tt!==Ss&&(ke.getTransfer(tt)===Ke?(K!==Mi||mt!==ri)&&xe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ye("WebGLTextures: Unsupported texture color space:",tt)),b}function we(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(h.width=L.naturalWidth||L.width,h.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(h.width=L.displayWidth,h.height=L.displayHeight):(h.width=L.width,h.height=L.height),h}this.allocateTextureUnit=ht,this.resetTextureUnits=ot,this.getTextureUnits=J,this.setTextureUnits=Q,this.setTexture2D=Tt,this.setTexture2DArray=pt,this.setTexture3D=Mt,this.setTextureCube=St,this.rebindTextures=At,this.setupRenderTarget=$,this.updateRenderTargetMipmap=Ct,this.updateMultisampleRenderTarget=he,this.setupDepthRenderbuffer=at,this.setupFrameBufferTexture=Yt,this.useMultisampledRTT=Se,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function ib(i,t){function e(n,s=Ss){let r,a=ke.getTransfer(s);if(n===ri)return i.UNSIGNED_BYTE;if(n===ih)return i.UNSIGNED_SHORT_4_4_4_4;if(n===sh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Bd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===kd)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Fd)return i.BYTE;if(n===Od)return i.SHORT;if(n===Sa)return i.UNSIGNED_SHORT;if(n===nh)return i.INT;if(n===Fi)return i.UNSIGNED_INT;if(n===Si)return i.FLOAT;if(n===Oi)return i.HALF_FLOAT;if(n===zd)return i.ALPHA;if(n===$d)return i.RGB;if(n===Mi)return i.RGBA;if(n===Xi)return i.DEPTH_COMPONENT;if(n===Vs)return i.DEPTH_STENCIL;if(n===rh)return i.RED;if(n===ah)return i.RED_INTEGER;if(n===Hs)return i.RG;if(n===oh)return i.RG_INTEGER;if(n===lh)return i.RGBA_INTEGER;if(n===Ko||n===Qo||n===tl||n===el)if(a===Ke)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ko)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Qo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===tl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===el)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ko)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Qo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===tl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===el)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ch||n===hh||n===uh||n===dh)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ch)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===hh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===uh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===dh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===fh||n===ph||n===mh||n===gh||n===_h||n===nl||n===xh)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===fh||n===ph)return a===Ke?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===mh)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===gh)return r.COMPRESSED_R11_EAC;if(n===_h)return r.COMPRESSED_SIGNED_R11_EAC;if(n===nl)return r.COMPRESSED_RG11_EAC;if(n===xh)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===vh||n===yh||n===Sh||n===Mh||n===bh||n===wh||n===Eh||n===Th||n===Ah||n===Ch||n===Rh||n===Ih||n===Ph||n===Lh)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===vh)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===yh)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Sh)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Mh)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===bh)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===wh)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Eh)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Th)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ah)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ch)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Rh)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ih)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ph)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Lh)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Dh||n===Nh||n===Uh)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Dh)return a===Ke?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Nh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Uh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Fh||n===Oh||n===il||n===Bh)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Fh)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Oh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===il)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Bh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ma?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var sb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rb=`
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

}`,uf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Co(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Pn({vertexShader:sb,fragmentShader:rb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new In(new Bo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},df=class extends qi{constructor(t,e){super();let n=this,s=null,r=1,a=null,l="local-floor",c=1,h=null,d=null,v=null,f=null,y=null,S=null,I=typeof XRWebGLBinding<"u",_=new uf,m={},O=e.getContextAttributes(),B=null,R=null,E=[],F=[],G=new $t,T=null,N=null,H=new Vn;H.viewport=new Qe;let q=new Vn;q.viewport=new Qe;let st=[H,q],ot=new jc,J=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(_t){let vt=E[_t];return vt===void 0&&(vt=new da,E[_t]=vt),vt.getTargetRaySpace()},this.getControllerGrip=function(_t){let vt=E[_t];return vt===void 0&&(vt=new da,E[_t]=vt),vt.getGripSpace()},this.getHand=function(_t){let vt=E[_t];return vt===void 0&&(vt=new da,E[_t]=vt),vt.getHandSpace()};function ht(_t){let vt=F.indexOf(_t.inputSource);if(vt===-1)return;let Pt=E[vt];Pt!==void 0&&(Pt.update(_t.inputSource,_t.frame,h||a),Pt.dispatchEvent({type:_t.type,data:_t.inputSource}))}function ft(){s.removeEventListener("select",ht),s.removeEventListener("selectstart",ht),s.removeEventListener("selectend",ht),s.removeEventListener("squeeze",ht),s.removeEventListener("squeezestart",ht),s.removeEventListener("squeezeend",ht),s.removeEventListener("end",ft),s.removeEventListener("inputsourceschange",Tt);for(let _t=0;_t<E.length;_t++){let vt=F[_t];vt!==null&&(F[_t]=null,E[_t].disconnect(vt))}J=null,Q=null,_.reset();for(let _t in m)delete m[_t];if(t.setRenderTarget(B),y=null,f=null,v=null,s=null,R=null,Fe.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(G.width,G.height,!1),N!==null){let _t=N.camera;_t.fov=N.fov,_t.zoom=N.zoom,_t.updateProjectionMatrix(),N=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(_t){r=_t,n.isPresenting===!0&&xe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(_t){l=_t,n.isPresenting===!0&&xe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(_t){h=_t},this.getBaseLayer=function(){return f!==null?f:y},this.getBinding=function(){return v===null&&I&&(v=new XRWebGLBinding(s,e)),v},this.getFrame=function(){return S},this.getSession=function(){return s},this.setSession=async function(_t){if(s=_t,s!==null){if(B=t.getRenderTarget(),s.addEventListener("select",ht),s.addEventListener("selectstart",ht),s.addEventListener("selectend",ht),s.addEventListener("squeeze",ht),s.addEventListener("squeezestart",ht),s.addEventListener("squeezeend",ht),s.addEventListener("end",ft),s.addEventListener("inputsourceschange",Tt),O.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(G),I&&"createProjectionLayer"in XRWebGLBinding.prototype){let Pt=null,oe=null,Yt=null;O.depth&&(Yt=O.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Pt=O.stencil?Vs:Xi,oe=O.stencil?Ma:Fi);let pe={colorFormat:e.RGBA8,depthFormat:Yt,scaleFactor:r};v=this.getBinding(),f=v.createProjectionLayer(pe),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),R=new ii(f.textureWidth,f.textureHeight,{format:Mi,type:ri,depthTexture:new Ns(f.textureWidth,f.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,Pt),stencilBuffer:O.stencil,colorSpace:t.outputColorSpace,samples:O.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let Pt={antialias:O.antialias,alpha:!0,depth:O.depth,stencil:O.stencil,framebufferScaleFactor:r};y=new XRWebGLLayer(s,e,Pt),s.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),R=new ii(y.framebufferWidth,y.framebufferHeight,{format:Mi,type:ri,colorSpace:t.outputColorSpace,stencilBuffer:O.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1,storeMultisampledDepthBuffer:y.ignoreDepthValues===!1,storeMultisampledStencilBuffer:y.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(c),h=null,a=await s.requestReferenceSpace(l),Fe.setContext(s),Fe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Tt(_t){for(let vt=0;vt<_t.removed.length;vt++){let Pt=_t.removed[vt],oe=F.indexOf(Pt);oe>=0&&(F[oe]=null,E[oe].disconnect(Pt))}for(let vt=0;vt<_t.added.length;vt++){let Pt=_t.added[vt],oe=F.indexOf(Pt);if(oe===-1){for(let pe=0;pe<E.length;pe++)if(pe>=F.length){F.push(Pt),oe=pe;break}else if(F[pe]===null){F[pe]=Pt,oe=pe;break}if(oe===-1)break}let Yt=E[oe];Yt&&Yt.connect(Pt)}}let pt=new X,Mt=new X;function St(_t,vt,Pt){pt.setFromMatrixPosition(vt.matrixWorld),Mt.setFromMatrixPosition(Pt.matrixWorld);let oe=pt.distanceTo(Mt),Yt=vt.projectionMatrix.elements,pe=Pt.projectionMatrix.elements,se=Yt[14]/(Yt[10]-1),at=Yt[14]/(Yt[10]+1),At=(Yt[9]+1)/Yt[5],$=(Yt[9]-1)/Yt[5],Ct=(Yt[8]-1)/Yt[0],Bt=(pe[8]+1)/pe[0],de=se*Ct,he=se*Bt,ue=oe/(-Ct+Bt),Se=ue*-Ct;if(vt.matrixWorld.decompose(_t.position,_t.quaternion,_t.scale),_t.translateX(Se),_t.translateZ(ue),_t.matrixWorld.compose(_t.position,_t.quaternion,_t.scale),_t.matrixWorldInverse.copy(_t.matrixWorld).invert(),Yt[10]===-1)_t.projectionMatrix.copy(vt.projectionMatrix),_t.projectionMatrixInverse.copy(vt.projectionMatrixInverse);else{let W=se+ue,Ce=at+ue,we=de-Se,L=he+(oe-Se),b=At*at/Ce*W,tt=$*at/Ce*W;_t.projectionMatrix.makePerspective(we,L,b,tt,W,Ce),_t.projectionMatrixInverse.copy(_t.projectionMatrix).invert()}}function qt(_t,vt){vt===null?_t.matrixWorld.copy(_t.matrix):_t.matrixWorld.multiplyMatrices(vt.matrixWorld,_t.matrix),_t.matrixWorldInverse.copy(_t.matrixWorld).invert()}this.updateCamera=function(_t){if(s===null)return;let vt=_t.near,Pt=_t.far;_.texture!==null&&(_.depthNear>0&&(vt=_.depthNear),_.depthFar>0&&(Pt=_.depthFar)),ot.near=q.near=H.near=vt,ot.far=q.far=H.far=Pt,(J!==ot.near||Q!==ot.far)&&(s.updateRenderState({depthNear:ot.near,depthFar:ot.far}),J=ot.near,Q=ot.far),ot.layers.mask=_t.layers.mask|6,H.layers.mask=ot.layers.mask&-5,q.layers.mask=ot.layers.mask&-3;let oe=_t.parent,Yt=ot.cameras;qt(ot,oe);for(let pe=0;pe<Yt.length;pe++)qt(Yt[pe],oe);Yt.length===2?St(ot,H,q):ot.projectionMatrix.copy(H.projectionMatrix),N===null&&_t.isPerspectiveCamera&&(N={camera:_t,fov:_t.fov,zoom:_t.zoom}),jt(_t,ot,oe)};function jt(_t,vt,Pt){Pt===null?_t.matrix.copy(vt.matrixWorld):(_t.matrix.copy(Pt.matrixWorld),_t.matrix.invert(),_t.matrix.multiply(vt.matrixWorld)),_t.matrix.decompose(_t.position,_t.quaternion,_t.scale),_t.updateMatrixWorld(!0),_t.projectionMatrix.copy(vt.projectionMatrix),_t.projectionMatrixInverse.copy(vt.projectionMatrixInverse),_t.isPerspectiveCamera&&(_t.fov=ca*2*Math.atan(1/_t.projectionMatrix.elements[5]),_t.zoom=1)}this.getCamera=function(){return ot},this.getFoveation=function(){if(!(f===null&&y===null))return c},this.setFoveation=function(_t){c=_t,f!==null&&(f.fixedFoveation=_t),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=_t)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(ot)},this.getCameraTexture=function(_t){return m[_t]};let Ve=null;function Ie(_t,vt){if(d=vt.getViewerPose(h||a),S=vt,d!==null){let Pt=d.views;y!==null&&(t.setRenderTargetFramebuffer(R,y.framebuffer),t.setRenderTarget(R));let oe=!1;Pt.length!==ot.cameras.length&&(ot.cameras.length=0,oe=!0);for(let at=0;at<Pt.length;at++){let At=Pt[at],$=null;if(y!==null)$=y.getViewport(At);else{let Bt=v.getViewSubImage(f,At);$=Bt.viewport,at===0&&(t.setRenderTargetTextures(R,Bt.colorTexture,Bt.depthStencilTexture),t.setRenderTarget(R))}let Ct=st[at];Ct===void 0&&(Ct=new Vn,Ct.layers.enable(at),Ct.viewport=new Qe,st[at]=Ct),Ct.matrix.fromArray(At.transform.matrix),Ct.matrix.decompose(Ct.position,Ct.quaternion,Ct.scale),Ct.projectionMatrix.fromArray(At.projectionMatrix),Ct.projectionMatrixInverse.copy(Ct.projectionMatrix).invert(),Ct.viewport.set($.x,$.y,$.width,$.height),at===0&&(ot.matrix.copy(Ct.matrix),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale)),oe===!0&&ot.cameras.push(Ct)}let Yt=s.enabledFeatures;if(Yt&&Yt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&I){v=n.getBinding();let at=v.getDepthInformation(Pt[0]);at&&at.isValid&&at.texture&&_.init(at,s.renderState)}if(Yt&&Yt.includes("camera-access")&&I){t.state.unbindTexture(),v=n.getBinding();for(let at=0;at<Pt.length;at++){let At=Pt[at].camera;if(At){let $=m[At];$||($=new Co,m[At]=$);let Ct=v.getCameraImage(At);$.sourceTexture=Ct}}}}for(let Pt=0;Pt<E.length;Pt++){let oe=F[Pt],Yt=E[Pt];oe!==null&&Yt!==void 0&&Yt.update(oe,vt,h||a)}Ve&&Ve(_t,vt),vt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:vt}),S=null}let Fe=new _g;Fe.setAnimationLoop(Ie),this.setAnimationLoop=function(_t){Ve=_t},this.dispose=function(){}}},ab=new $e,bg=new Ae;bg.set(-1,0,0,0,1,0,0,0,1);function ob(i,t){function e(_,m){_.matrixAutoUpdate===!0&&_.updateMatrix(),m.value.copy(_.matrix)}function n(_,m){m.color.getRGB(_.fogColor.value,qd(i)),m.isFog?(_.fogNear.value=m.near,_.fogFar.value=m.far):m.isFogExp2&&(_.fogDensity.value=m.density)}function s(_,m,O,B,R){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(_,m):m.isMeshLambertMaterial?(r(_,m),m.envMap&&(_.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(_,m),v(_,m)):m.isMeshPhongMaterial?(r(_,m),d(_,m),m.envMap&&(_.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(_,m),f(_,m),m.isMeshPhysicalMaterial&&y(_,m,R)):m.isMeshMatcapMaterial?(r(_,m),S(_,m)):m.isMeshDepthMaterial?r(_,m):m.isMeshDistanceMaterial?(r(_,m),I(_,m)):m.isMeshNormalMaterial?r(_,m):m.isLineBasicMaterial?(a(_,m),m.isLineDashedMaterial&&l(_,m)):m.isPointsMaterial?c(_,m,O,B):m.isSpriteMaterial?h(_,m):m.isShadowMaterial?(_.color.value.copy(m.color),_.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(_,m){_.opacity.value=m.opacity,m.color&&_.diffuse.value.copy(m.color),m.emissive&&_.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(_.map.value=m.map,e(m.map,_.mapTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,e(m.alphaMap,_.alphaMapTransform)),m.bumpMap&&(_.bumpMap.value=m.bumpMap,e(m.bumpMap,_.bumpMapTransform),_.bumpScale.value=m.bumpScale,m.side===Jn&&(_.bumpScale.value*=-1)),m.normalMap&&(_.normalMap.value=m.normalMap,e(m.normalMap,_.normalMapTransform),_.normalScale.value.copy(m.normalScale),m.side===Jn&&_.normalScale.value.negate()),m.displacementMap&&(_.displacementMap.value=m.displacementMap,e(m.displacementMap,_.displacementMapTransform),_.displacementScale.value=m.displacementScale,_.displacementBias.value=m.displacementBias),m.emissiveMap&&(_.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,_.emissiveMapTransform)),m.specularMap&&(_.specularMap.value=m.specularMap,e(m.specularMap,_.specularMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest);let O=t.get(m),B=O.envMap,R=O.envMapRotation;B&&(_.envMap.value=B,_.envMapRotation.value.setFromMatrix4(ab.makeRotationFromEuler(R)).transpose(),B.isCubeTexture&&B.isRenderTargetTexture===!1&&_.envMapRotation.value.premultiply(bg),_.reflectivity.value=m.reflectivity,_.ior.value=m.ior,_.refractionRatio.value=m.refractionRatio),m.lightMap&&(_.lightMap.value=m.lightMap,_.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,_.lightMapTransform)),m.aoMap&&(_.aoMap.value=m.aoMap,_.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,_.aoMapTransform))}function a(_,m){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,m.map&&(_.map.value=m.map,e(m.map,_.mapTransform))}function l(_,m){_.dashSize.value=m.dashSize,_.totalSize.value=m.dashSize+m.gapSize,_.scale.value=m.scale}function c(_,m,O,B){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,_.size.value=m.size*O,_.scale.value=B*.5,m.map&&(_.map.value=m.map,e(m.map,_.uvTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,e(m.alphaMap,_.alphaMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest)}function h(_,m){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,_.rotation.value=m.rotation,m.map&&(_.map.value=m.map,e(m.map,_.mapTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,e(m.alphaMap,_.alphaMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest)}function d(_,m){_.specular.value.copy(m.specular),_.shininess.value=Math.max(m.shininess,1e-4)}function v(_,m){m.gradientMap&&(_.gradientMap.value=m.gradientMap)}function f(_,m){_.metalness.value=m.metalness,m.metalnessMap&&(_.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,_.metalnessMapTransform)),_.roughness.value=m.roughness,m.roughnessMap&&(_.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,_.roughnessMapTransform)),m.envMap&&(_.envMapIntensity.value=m.envMapIntensity)}function y(_,m,O){_.ior.value=m.ior,m.sheen>0&&(_.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),_.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(_.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,_.sheenColorMapTransform)),m.sheenRoughnessMap&&(_.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,_.sheenRoughnessMapTransform))),m.clearcoat>0&&(_.clearcoat.value=m.clearcoat,_.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(_.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,_.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(_.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Jn&&_.clearcoatNormalScale.value.negate())),m.dispersion>0&&(_.dispersion.value=m.dispersion),m.retroreflectivity>0&&(_.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(_.iridescence.value=m.iridescence,_.iridescenceIOR.value=m.iridescenceIOR,_.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(_.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,_.iridescenceMapTransform)),m.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),m.transmission>0&&(_.transmission.value=m.transmission,_.transmissionSamplerMap.value=O.texture,_.transmissionSamplerSize.value.set(O.width,O.height),m.transmissionMap&&(_.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,_.transmissionMapTransform)),_.thickness.value=m.thickness,m.thicknessMap&&(_.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=m.attenuationDistance,_.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(_.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(_.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=m.specularIntensity,_.specularColor.value.copy(m.specularColor),m.specularColorMap&&(_.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,_.specularColorMapTransform)),m.specularIntensityMap&&(_.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,_.specularIntensityMapTransform))}function S(_,m){m.matcap&&(_.matcap.value=m.matcap)}function I(_,m){let O=t.get(m).light;_.referencePosition.value.setFromMatrixPosition(O.matrixWorld),_.nearDistance.value=O.shadow.camera.near,_.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function lb(i,t,e,n){let s={},r={},a=[],l=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(R,E){let F=E.program;n.uniformBlockBinding(R,F)}function h(R,E){let F=s[R.id];F===void 0&&(_(R),F=d(R),s[R.id]=F,R.addEventListener("dispose",O));let G=E.program;n.updateUBOMapping(R,G);let T=t.render.frame;r[R.id]!==T&&(f(R),r[R.id]=T)}function d(R){let E=v();R.__bindingPointIndex=E;let F=i.createBuffer(),G=R.__size,T=R.usage;return i.bindBuffer(i.UNIFORM_BUFFER,F),i.bufferData(i.UNIFORM_BUFFER,G,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,F),F}function v(){for(let R=0;R<l;R++)if(a.indexOf(R)===-1)return a.push(R),R;return ye("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(R){let E=s[R.id],F=R.uniforms,G=R.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let T=0,N=F.length;T<N;T++){let H=F[T];if(Array.isArray(H))for(let q=0,st=H.length;q<st;q++)y(H[q],T,q,G);else y(H,T,0,G)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function y(R,E,F,G){if(I(R,E,F,G)===!0){let T=R.__offset,N=R.value;if(Array.isArray(N)){let H=0;for(let q=0;q<N.length;q++){let st=N[q],ot=m(st);S(st,R.__data,H),typeof st!="number"&&typeof st!="boolean"&&!st.isMatrix3&&!ArrayBuffer.isView(st)&&(H+=ot.storage/Float32Array.BYTES_PER_ELEMENT)}}else S(N,R.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,T,R.__data)}}function S(R,E,F){typeof R=="number"||typeof R=="boolean"?E[0]=R:R.isMatrix3?(E[0]=R.elements[0],E[1]=R.elements[1],E[2]=R.elements[2],E[3]=0,E[4]=R.elements[3],E[5]=R.elements[4],E[6]=R.elements[5],E[7]=0,E[8]=R.elements[6],E[9]=R.elements[7],E[10]=R.elements[8],E[11]=0):ArrayBuffer.isView(R)?E.set(new R.constructor(R.buffer,R.byteOffset,E.length)):R.toArray(E,F)}function I(R,E,F,G){let T=R.value,N=E+"_"+F;if(G[N]===void 0)return typeof T=="number"||typeof T=="boolean"?G[N]=T:ArrayBuffer.isView(T)?G[N]=T.slice():G[N]=T.clone(),!0;{let H=G[N];if(typeof T=="number"||typeof T=="boolean"){if(H!==T)return G[N]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(H.equals(T)===!1)return H.copy(T),!0}}return!1}function _(R){let E=R.uniforms,F=0,G=16;for(let N=0,H=E.length;N<H;N++){let q=Array.isArray(E[N])?E[N]:[E[N]];for(let st=0,ot=q.length;st<ot;st++){let J=q[st],Q=Array.isArray(J.value)?J.value:[J.value];for(let ht=0,ft=Q.length;ht<ft;ht++){let Tt=Q[ht],pt=m(Tt),Mt=F%G,St=Mt%pt.boundary,qt=Mt+St;F+=St,qt!==0&&G-qt<pt.storage&&(F+=G-qt),J.__data=new Float32Array(pt.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=F,F+=pt.storage}}}let T=F%G;return T>0&&(F+=G-T),R.__size=F,R.__cache={},this}function m(R){let E={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(E.boundary=4,E.storage=4):R.isVector2?(E.boundary=8,E.storage=8):R.isVector3||R.isColor?(E.boundary=16,E.storage=12):R.isVector4?(E.boundary=16,E.storage=16):R.isMatrix3?(E.boundary=48,E.storage=48):R.isMatrix4?(E.boundary=64,E.storage=64):R.isTexture?xe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(R)?(E.boundary=16,E.storage=R.byteLength):xe("WebGLRenderer: Unsupported uniform value type.",R),E}function O(R){let E=R.target;E.removeEventListener("dispose",O);let F=a.indexOf(E.__bindingPointIndex);a.splice(F,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function B(){for(let R in s)i.deleteBuffer(s[R]);a=[],s={},r={}}return{bind:c,update:h,dispose:B}}var cb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ki=null;function hb(){return Ki===null&&(Ki=new bo(cb,16,16,Hs,Oi),Ki.name="DFG_LUT",Ki.minFilter=Un,Ki.magFilter=Un,Ki.wrapS=Gi,Ki.wrapT=Gi,Ki.generateMipmaps=!1,Ki.needsUpdate=!0),Ki}var Xh=class{constructor(t={}){let{canvas:e=km(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:f=!1,outputBufferType:y=ri}=t;this.isWebGLRenderer=!0;let S;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=n.getContextAttributes().alpha}else S=a;let I=y,_=new Set([lh,oh,ah]),m=new Set([ri,Fi,Sa,Ma,ih,sh]),O=new Uint32Array(4),B=new Int32Array(4),R=new X,E=null,F=null,G=[],T=[],N=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ui,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let H=this,q=!1,st=null,ot=null,J=null,Q=null;this._outputColorSpace=ui;let ht=0,ft=0,Tt=null,pt=-1,Mt=null,St=new Qe,qt=new Qe,jt=null,Ve=new ge(0),Ie=0,Fe=e.width,_t=e.height,vt=1,Pt=null,oe=null,Yt=new Qe(0,0,Fe,_t),pe=new Qe(0,0,Fe,_t),se=!1,at=new fa,At=!1,$=!1,Ct=new $e,Bt=new X,de=new Qe,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ue=!1;function Se(){return Tt===null?vt:1}let W=n;function Ce(A,V){return e.getContext(A,V)}let we,L,b,tt,K,mt,Dt,Ft,gt,yt,kt,re,Xt,Ht,ae,me,Me,j,Ut,xt,zt,Zt,Et;try{let A={alpha:!0,depth:s,stencil:r,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:d,failIfMajorPerformanceCaveat:v};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Je,!1),e.addEventListener("webglcontextrestored",Ee,!1),e.addEventListener("webglcontextcreationerror",mn,!1),W===null){let V="webgl2";if(W=Ce(V,A),W===null)throw Ce(V)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}le()}catch(A){throw e.removeEventListener("webglcontextlost",Je,!1),e.removeEventListener("webglcontextrestored",Ee,!1),e.removeEventListener("webglcontextcreationerror",mn,!1),ye("WebGLRenderer: "+A.message),A}function le(){we=new _S(W),we.init(),zt=new ib(W,we),L=new oS(W,we,t,zt),b=new eb(W,we),L.reversedDepthBuffer&&f&&b.buffers.depth.setReversed(!0),ot=W.createFramebuffer(),J=W.createFramebuffer(),Q=W.createFramebuffer(),tt=new yS(W),K=new $M,mt=new nb(W,we,b,K,L,zt,tt),Dt=new gS(H),Ft=new Mx(W),Zt=new rS(W,Ft),gt=new xS(W,Ft,tt,Zt),yt=new MS(W,gt,Ft,Zt,tt),j=new SS(W,L,mt),ae=new lS(K),kt=new zM(H,Dt,we,L,Zt,ae),re=new ob(H,K),Xt=new HM,Ht=new ZM(we),Me=new sS(H,Dt,b,yt,S,c),me=new tb(H,yt,L),Et=new lb(W,tt,L,b),Ut=new aS(W,we,tt),xt=new vS(W,we,tt),tt.programs=kt.programs,H.capabilities=L,H.extensions=we,H.properties=K,H.renderLists=Xt,H.shadowMap=me,H.state=b,H.info=tt}I!==ri&&(N=new wS(I,e.width,e.height,l,s,r));let ee=new df(H,W);this.xr=ee,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){let A=we.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=we.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return vt},this.setPixelRatio=function(A){A!==void 0&&(vt=A,this.setSize(Fe,_t,!1))},this.getSize=function(A){return A.set(Fe,_t)},this.setSize=function(A,V,et=!0){if(ee.isPresenting){xe("WebGLRenderer: Can't change size while VR device is presenting.");return}Fe=A,_t=V,e.width=Math.floor(A*vt),e.height=Math.floor(V*vt),et===!0&&(e.style.width=A+"px",e.style.height=V+"px"),N!==null&&N.setSize(e.width,e.height),this.setViewport(0,0,A,V)},this.getDrawingBufferSize=function(A){return A.set(Fe*vt,_t*vt).floor()},this.setDrawingBufferSize=function(A,V,et){Fe=A,_t=V,vt=et,e.width=Math.floor(A*et),e.height=Math.floor(V*et),this.setViewport(0,0,A,V)},this.setEffects=function(A){if(I===ri){ye("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let V=0;V<A.length;V++)if(A[V].isOutputPass===!0){xe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(St)},this.getViewport=function(A){return A.copy(Yt)},this.setViewport=function(A,V,et,nt){A.isVector4?Yt.set(A.x,A.y,A.z,A.w):Yt.set(A,V,et,nt),b.viewport(St.copy(Yt).multiplyScalar(vt).round())},this.getScissor=function(A){return A.copy(pe)},this.setScissor=function(A,V,et,nt){A.isVector4?pe.set(A.x,A.y,A.z,A.w):pe.set(A,V,et,nt),b.scissor(qt.copy(pe).multiplyScalar(vt).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(A){b.setScissorTest(se=A)},this.setOpaqueSort=function(A){Pt=A},this.setTransparentSort=function(A){oe=A},this.getClearColor=function(A){return A.copy(Me.getClearColor())},this.setClearColor=function(){Me.setClearColor(...arguments)},this.getClearAlpha=function(){return Me.getClearAlpha()},this.setClearAlpha=function(){Me.setClearAlpha(...arguments)},this.clear=function(A=!0,V=!0,et=!0){let nt=0;if(A){let rt=!1;if(Tt!==null){let It=Tt.texture.format;rt=_.has(It)}if(rt){let It=Tt.texture.type,Gt=m.has(It),Rt=Me.getClearColor(),ut=Me.getClearAlpha(),Lt=Rt.r,Kt=Rt.g,Pe=Rt.b;Gt?(O[0]=Lt,O[1]=Kt,O[2]=Pe,O[3]=ut,W.clearBufferuiv(W.COLOR,0,O)):(B[0]=Lt,B[1]=Kt,B[2]=Pe,B[3]=ut,W.clearBufferiv(W.COLOR,0,B))}else nt|=W.COLOR_BUFFER_BIT}V&&(nt|=W.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),et&&(nt|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),nt!==0&&W.clear(nt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),st=A},this.dispose=function(){e.removeEventListener("webglcontextlost",Je,!1),e.removeEventListener("webglcontextrestored",Ee,!1),e.removeEventListener("webglcontextcreationerror",mn,!1),Me.dispose(),Xt.dispose(),Ht.dispose(),K.dispose(),Dt.dispose(),yt.dispose(),Zt.dispose(),Et.dispose(),kt.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",ml),ee.removeEventListener("sessionend",Pr),Wn.stop()};function Je(A){A.preventDefault(),xo("WebGLRenderer: Context Lost."),q=!0}function Ee(){xo("WebGLRenderer: Context Restored."),q=!1;let A=tt.autoReset,V=me.enabled,et=me.autoUpdate,nt=me.needsUpdate,rt=me.type;le(),tt.autoReset=A,me.enabled=V,me.autoUpdate=et,me.needsUpdate=nt,me.type=rt}function mn(A){ye("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function yn(A){let V=A.target;V.removeEventListener("dispose",yn),Ar(V)}function Ar(A){Cr(A),K.remove(A)}function Cr(A){let V=K.get(A).programs;V!==void 0&&(V.forEach(function(et){kt.releaseProgram(et)}),A.isShaderMaterial&&kt.releaseShaderCache(A))}this.renderBufferDirect=function(A,V,et,nt,rt,It){V===null&&(V=he);let Gt=rt.isMesh&&rt.matrixWorld.determinantAffine()<0,Rt=fu(A,V,et,nt,rt);b.setMaterial(nt,Gt);let ut=et.index,Lt=1;if(nt.wireframe===!0){if(ut=gt.getWireframeAttribute(et),ut===void 0)return;Lt=2}let Kt=et.drawRange,Pe=et.attributes.position,te=Kt.start*Lt,Oe=(Kt.start+Kt.count)*Lt;It!==null&&(te=Math.max(te,It.start*Lt),Oe=Math.min(Oe,(It.start+It.count)*Lt)),ut!==null?(te=Math.max(te,0),Oe=Math.min(Oe,ut.count)):Pe!=null&&(te=Math.max(te,0),Oe=Math.min(Oe,Pe.count));let un=Oe-te;if(un<0||un===1/0)return;Zt.setup(rt,nt,Rt,et,ut);let qe,Ye=Ut;if(ut!==null&&(qe=Ft.get(ut),Ye=xt,Ye.setIndex(qe)),rt.isMesh)nt.wireframe===!0?(b.setLineWidth(nt.wireframeLinewidth*Se()),Ye.setMode(W.LINES)):Ye.setMode(W.TRIANGLES);else if(rt.isLine){let on=nt.linewidth;on===void 0&&(on=1),b.setLineWidth(on*Se()),rt.isLineSegments?Ye.setMode(W.LINES):rt.isLineLoop?Ye.setMode(W.LINE_LOOP):Ye.setMode(W.LINE_STRIP)}else rt.isPoints?Ye.setMode(W.POINTS):rt.isSprite&&Ye.setMode(W.TRIANGLES);if(rt.isBatchedMesh)if(we.get("WEBGL_multi_draw"))Ye.renderMultiDraw(rt._multiDrawStarts,rt._multiDrawCounts,rt._multiDrawCount);else{let on=rt._multiDrawStarts,Qt=rt._multiDrawCounts,Dn=rt._multiDrawCount,ze=ut?Ft.get(ut).bytesPerElement:1,Qn=K.get(nt).currentProgram.getUniforms();for(let mi=0;mi<Dn;mi++)Qn.setValue(W,"_gl_DrawID",mi),Ye.render(on[mi]/ze,Qt[mi])}else if(rt.isInstancedMesh)Ye.renderInstances(te,un,rt.count);else if(et.isInstancedBufferGeometry){let on=et._maxInstanceCount!==void 0?et._maxInstanceCount:1/0,Qt=Math.min(et.instanceCount,on);Ye.renderInstances(te,un,Qt)}else Ye.render(te,un)};function Rr(A,V,et,nt){st!==null&&A.isNodeMaterial&&st.setObject(nt,A),At===!0&&ae.setState(A,et,!1),A.transparent===!0&&A.side===Ji&&A.forceSinglePass===!1?(A.side=Jn,A.needsUpdate=!0,Ys(A,V,nt),A.side=ks,A.needsUpdate=!0,Ys(A,V,nt),A.side=Ji):Ys(A,V,nt)}this.compile=function(A,V,et=null){et===null&&(et=A),st!==null&&st.renderStart(A,V,et),F=Ht.get(et),F.init(V),T.push(F),et.traverseVisible(function(rt){rt.isLight&&rt.layers.test(V.layers)&&(F.pushLight(rt),rt.castShadow&&F.pushShadow(rt))}),A!==et&&A.traverseVisible(function(rt){rt.isLight&&rt.layers.test(V.layers)&&(F.pushLight(rt),rt.castShadow&&F.pushShadow(rt))}),F.setupLights(),st!==null&&st.updateLights(F.state.lightsArray),$=this.localClippingEnabled,At=ae.init(this.clippingPlanes,$),At===!0&&ae.setGlobalState(this.clippingPlanes,V),st!==null&&me.render(F.state.shadowsArray,et,V);let nt=new Set;return A.traverse(function(rt){if(!(rt.isMesh||rt.isPoints||rt.isLine||rt.isSprite))return;let It=rt.material;if(It)if(Array.isArray(It))for(let Gt=0;Gt<It.length;Gt++){let Rt=It[Gt];Rr(Rt,et,V,rt),nt.add(Rt)}else Rr(It,et,V,rt),nt.add(It)}),F=T.pop(),st!==null&&st.renderEnd(),nt},this.compileAsync=function(A,V,et=null){let nt=this.compile(A,V,et);return new Promise(rt=>{function It(){if(nt.forEach(function(Gt){let ut=K.get(Gt).currentProgram;(ut===void 0||ut.isReady())&&nt.delete(Gt)}),nt.size===0){rt(A);return}setTimeout(It,10)}we.get("KHR_parallel_shader_compile")!==null?It():setTimeout(It,10)})};let Ir=null;function Xs(A){Ir&&Ir(A)}function ml(){Wn.stop()}function Pr(){Wn.start()}let Wn=new _g;Wn.setAnimationLoop(Xs),typeof self<"u"&&Wn.setContext(self),this.setAnimationLoop=function(A){Ir=A,ee.setAnimationLoop(A),A===null?Wn.stop():Wn.start()},ee.addEventListener("sessionstart",ml),ee.addEventListener("sessionend",Pr),this.render=function(A,V){if(V!==void 0&&V.isCamera!==!0){ye("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(q===!0)return;st!==null&&st.renderStart(A,V);let et=ee.enabled===!0&&ee.isPresenting===!0,nt=N!==null&&(Tt===null||et)&&N.begin(H,Tt);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(V),V=ee.getCamera()),A.isScene===!0&&A.onBeforeRender(H,A,V,Tt),F=Ht.get(A,T.length),F.init(V),F.state.textureUnits=mt.getTextureUnits(),T.push(F),Ct.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),at.setFromProjectionMatrix(Ct,Li,V.reversedDepth),$=this.localClippingEnabled,At=ae.init(this.clippingPlanes,$),E=Xt.get(A,G.length),E.init(),G.push(E),ee.enabled===!0&&ee.isPresenting===!0){let Gt=H.xr.getDepthSensingMesh();Gt!==null&&Es(Gt,V,-1/0,H.sortObjects)}Es(A,V,0,H.sortObjects),E.finish(),st!==null&&st.updateLights(F.state.lightsArray),H.sortObjects===!0&&E.sort(Pt,oe),ue=ee.enabled===!1||ee.isPresenting===!1||ee.hasDepthSensing()===!1,ue&&Me.addToRenderList(E,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),At===!0&&ae.beginShadows();let rt=F.state.shadowsArray;if(me.render(rt,A,V),At===!0&&ae.endShadows(),(nt&&N.hasRenderPass())===!1){let Gt=E.opaque,Rt=E.transmissive;if(F.setupLights(),V.isArrayCamera){let ut=V.cameras;if(Rt.length>0)for(let Lt=0,Kt=ut.length;Lt<Kt;Lt++){let Pe=ut[Lt];La(Gt,Rt,A,Pe)}ue&&Me.render(A);for(let Lt=0,Kt=ut.length;Lt<Kt;Lt++){let Pe=ut[Lt];Pa(E,A,Pe,Pe.viewport)}}else Rt.length>0&&La(Gt,Rt,A,V),ue&&Me.render(A),Pa(E,A,V)}Tt!==null&&ft===0&&(mt.updateMultisampleRenderTarget(Tt),mt.updateRenderTargetMipmap(Tt)),nt&&N.end(H),A.isScene===!0&&A.onAfterRender(H,A,V),Zt.resetDefaultState(),pt=-1,Mt=null,T.pop(),T.length>0?(F=T[T.length-1],mt.setTextureUnits(F.state.textureUnits),At===!0&&ae.setGlobalState(H.clippingPlanes,F.state.camera)):F=null,G.pop(),G.length>0?E=G[G.length-1]:E=null,st!==null&&st.renderEnd()};function Es(A,V,et,nt){if(A.visible===!1)return;if(A.layers.test(V.layers)){if(A.isGroup)et=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(V);else if(A.isLightProbeGrid)F.pushLightProbeGrid(A);else if(A.isLight)F.pushLight(A),A.castShadow&&F.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(at)){nt&&de.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ct);let Gt=yt.update(A),Rt=A.material;Rt.visible&&E.push(A,Gt,Rt,et,de.z,null,V)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(at))){let Gt=yt.update(A),Rt=A.material;if(nt&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),de.copy(A.boundingSphere.center)):(Gt.boundingSphere===null&&Gt.computeBoundingSphere(),de.copy(Gt.boundingSphere.center)),de.applyMatrix4(A.matrixWorld).applyMatrix4(Ct)),Array.isArray(Rt)){let ut=Gt.groups;for(let Lt=0,Kt=ut.length;Lt<Kt;Lt++){let Pe=ut[Lt],te=Rt[Pe.materialIndex];te&&te.visible&&E.push(A,Gt,te,et,de.z,Pe,V)}}else Rt.visible&&E.push(A,Gt,Rt,et,de.z,null,V)}}let It=A.children;for(let Gt=0,Rt=It.length;Gt<Rt;Gt++)Es(It[Gt],V,et,nt)}function Pa(A,V,et,nt){let{opaque:rt,transmissive:It,transparent:Gt}=A;F.setupLightsView(et),At===!0&&ae.setGlobalState(H.clippingPlanes,et),nt&&b.viewport(St.copy(nt)),rt.length>0&&qs(rt,V,et),It.length>0&&qs(It,V,et),Gt.length>0&&qs(Gt,V,et),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function La(A,V,et,nt){if((et.isScene===!0?et.overrideMaterial:null)!==null)return;if(F.state.transmissionRenderTarget[nt.id]===void 0){let te=we.has("EXT_color_buffer_half_float")||we.has("EXT_color_buffer_float");F.state.transmissionRenderTarget[nt.id]=new ii(1,1,{generateMipmaps:!0,type:te?Oi:ri,minFilter:$s,samples:Math.max(4,L.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ke.workingColorSpace})}let It=F.state.transmissionRenderTarget[nt.id],Gt=nt.viewport||St;It.setSize(Gt.z*H.transmissionResolutionScale,Gt.w*H.transmissionResolutionScale);let Rt=H.getRenderTarget(),ut=H.getActiveCubeFace(),Lt=H.getActiveMipmapLevel();H.setRenderTarget(It),H.getClearColor(Ve),Ie=H.getClearAlpha(),Ie<1&&H.setClearColor(16777215,.5),H.clear(),ue&&Me.render(et);let Kt=H.toneMapping;H.toneMapping=Ui;let Pe=nt.viewport;if(nt.viewport!==void 0&&(nt.viewport=void 0),F.setupLightsView(nt),At===!0&&ae.setGlobalState(H.clippingPlanes,nt),qs(A,et,nt),mt.updateMultisampleRenderTarget(It),mt.updateRenderTargetMipmap(It),we.has("WEBGL_multisampled_render_to_texture")===!1){let te=!1;for(let Oe=0,un=V.length;Oe<un;Oe++){let qe=V[Oe],{object:Ye,geometry:on,material:Qt,group:Dn}=qe;if(Qt.side===Ji&&Ye.layers.test(nt.layers)){let ze=Qt.side;Qt.side=Jn,Qt.needsUpdate=!0,Lr(Ye,et,nt,on,Qt,Dn),Qt.side=ze,Qt.needsUpdate=!0,te=!0}}te===!0&&(mt.updateMultisampleRenderTarget(It),mt.updateRenderTargetMipmap(It))}H.setRenderTarget(Rt,ut,Lt),H.setClearColor(Ve,Ie),Pe!==void 0&&(nt.viewport=Pe),H.toneMapping=Kt}function qs(A,V,et){let nt=V.isScene===!0?V.overrideMaterial:null;for(let rt=0,It=A.length;rt<It;rt++){let Gt=A[rt],{object:Rt,geometry:ut,group:Lt}=Gt,Kt=Gt.material;Kt.allowOverride===!0&&nt!==null&&(Kt=nt),Rt.layers.test(et.layers)&&Lr(Rt,V,et,ut,Kt,Lt)}}function Lr(A,V,et,nt,rt,It){st!==null&&rt.isNodeMaterial&&st.setObject(A,rt),A.onBeforeRender(H,V,et,nt,rt,It),A.modelViewMatrix.multiplyMatrices(et.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),rt.onBeforeRender(H,V,et,nt,A,It),rt.transparent===!0&&rt.side===Ji&&rt.forceSinglePass===!1?(rt.side=Jn,rt.needsUpdate=!0,H.renderBufferDirect(et,V,nt,rt,A,It),rt.side=ks,rt.needsUpdate=!0,H.renderBufferDirect(et,V,nt,rt,A,It),rt.side=Ji):H.renderBufferDirect(et,V,nt,rt,A,It),A.onAfterRender(H,V,et,nt,rt,It)}function Ys(A,V,et){V.isScene!==!0&&(V=he);let nt=K.get(A),rt=F.state.lights,It=F.state.shadowsArray,Gt=rt.state.version,Rt=kt.getParameters(A,rt.state,It,V,et,F.state.lightProbeGridArray),ut=kt.getProgramCacheKey(Rt),Lt=nt.programs;nt.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?V.environment:null,nt.fog=V.fog;let Kt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;nt.envMap=Dt.get(A.envMap||nt.environment,Kt),nt.envMapRotation=nt.environment!==null&&A.envMap===null?V.environmentRotation:A.envMapRotation,Lt===void 0&&(A.addEventListener("dispose",yn),Lt=new Map,nt.programs=Lt);let Pe=Lt.get(ut);if(Pe!==void 0){if(nt.currentProgram===Pe&&nt.lightsStateVersion===Gt)return Ts(A,Rt),Pe}else Rt.uniforms=kt.getUniforms(A),st!==null&&A.isNodeMaterial&&st.build(A,et,Rt),A.onBeforeCompile(Rt,H),Pe=kt.acquireProgram(Rt,ut),Lt.set(ut,Pe),nt.uniforms=Rt.uniforms;let te=nt.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(te.clippingPlanes=ae.uniform),Ts(A,Rt),nt.needsLights=gl(A),nt.lightsStateVersion=Gt,nt.needsLights&&(te.ambientLightColor.value=rt.state.ambient,te.lightProbe.value=rt.state.probe,te.sunLights.value=rt.state.sun,te.sunLightShadows.value=rt.state.sunShadow,te.directionalLights.value=rt.state.directional,te.directionalLightShadows.value=rt.state.directionalShadow,te.spotLights.value=rt.state.spot,te.spotLightShadows.value=rt.state.spotShadow,te.rectAreaLights.value=rt.state.rectArea,te.ltc_1.value=rt.state.rectAreaLTC1,te.ltc_2.value=rt.state.rectAreaLTC2,te.pointLights.value=rt.state.point,te.pointLightShadows.value=rt.state.pointShadow,te.hemisphereLights.value=rt.state.hemi,te.sunShadowMatrix.value=rt.state.sunShadowMatrix,te.sunShadowCascade.value=rt.state.sunShadowCascade,te.directionalShadowMatrix.value=rt.state.directionalShadowMatrix,te.spotLightMatrix.value=rt.state.spotLightMatrix,te.spotLightMap.value=rt.state.spotLightMap,te.pointShadowMatrix.value=rt.state.pointShadowMatrix),nt.lightProbeGrid=F.state.lightProbeGridArray.length>0,nt.currentProgram=Pe,nt.uniformsList=null,Pe}function Da(A){if(A.uniformsList===null){let V=A.currentProgram.getUniforms();A.uniformsList=Ea.seqWithValue(V.seq,A.uniforms)}return A.uniformsList}function Ts(A,V){let et=K.get(A);et.outputColorSpace=V.outputColorSpace,et.batching=V.batching,et.batchingColor=V.batchingColor,et.instancing=V.instancing,et.instancingColor=V.instancingColor,et.instancingMorph=V.instancingMorph,et.skinning=V.skinning,et.morphTargets=V.morphTargets,et.morphNormals=V.morphNormals,et.morphColors=V.morphColors,et.morphTargetsCount=V.morphTargetsCount,et.numClippingPlanes=V.numClippingPlanes,et.numIntersection=V.numClipIntersection,et.vertexAlphas=V.vertexAlphas,et.vertexTangents=V.vertexTangents,et.toneMapping=V.toneMapping}function Zs(A,V){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;R.setFromMatrixPosition(V.matrixWorld);for(let et=0,nt=A.length;et<nt;et++){let rt=A[et];if(rt.texture!==null&&rt.boundingBox.containsPoint(R))return rt}return null}function fu(A,V,et,nt,rt){V.isScene!==!0&&(V=he),mt.resetTextureUnits();let It=V.fog,Gt=nt.isMeshStandardMaterial||nt.isMeshLambertMaterial||nt.isMeshPhongMaterial?V.environment:null,Rt=Tt===null?H.outputColorSpace:Tt.isXRRenderTarget===!0?Tt.texture.colorSpace:ke.workingColorSpace,ut=nt.isMeshStandardMaterial||nt.isMeshLambertMaterial&&!nt.envMap||nt.isMeshPhongMaterial&&!nt.envMap,Lt=Dt.get(nt.envMap||Gt,ut),Kt=nt.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,Pe=!!et.attributes.tangent&&(!!nt.normalMap||nt.anisotropy>0),te=!!et.morphAttributes.position,Oe=!!et.morphAttributes.normal,un=!!et.morphAttributes.color,qe=Ui;nt.toneMapped&&(Tt===null||Tt.isXRRenderTarget===!0)&&(qe=H.toneMapping);let Ye=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,on=Ye!==void 0?Ye.length:0,Qt=K.get(nt),Dn=F.state.lights;if(At===!0&&($===!0||A!==Mt)){let en=A===Mt&&nt.id===pt;ae.setState(nt,A,en)}let ze=!1;nt.version===Qt.__version?(Qt.needsLights&&Qt.lightsStateVersion!==Dn.state.version||Qt.outputColorSpace!==Rt||rt.isBatchedMesh&&Qt.batching===!1||!rt.isBatchedMesh&&Qt.batching===!0||rt.isBatchedMesh&&Qt.batchingColor===!0&&rt._colorsTexture===null||rt.isBatchedMesh&&Qt.batchingColor===!1&&rt._colorsTexture!==null||rt.isInstancedMesh&&Qt.instancing===!1||!rt.isInstancedMesh&&Qt.instancing===!0||rt.isSkinnedMesh&&Qt.skinning===!1||!rt.isSkinnedMesh&&Qt.skinning===!0||rt.isInstancedMesh&&Qt.instancingColor===!0&&rt.instanceColor===null||rt.isInstancedMesh&&Qt.instancingColor===!1&&rt.instanceColor!==null||rt.isInstancedMesh&&Qt.instancingMorph===!0&&rt.morphTexture===null||rt.isInstancedMesh&&Qt.instancingMorph===!1&&rt.morphTexture!==null||Qt.envMap!==Lt||nt.fog===!0&&Qt.fog!==It||Qt.numClippingPlanes!==void 0&&(Qt.numClippingPlanes!==ae.numPlanes||Qt.numIntersection!==ae.numIntersection)||Qt.vertexAlphas!==Kt||Qt.vertexTangents!==Pe||Qt.morphTargets!==te||Qt.morphNormals!==Oe||Qt.morphColors!==un||Qt.toneMapping!==qe||Qt.morphTargetsCount!==on||!!Qt.lightProbeGrid!=F.state.lightProbeGridArray.length>0)&&(ze=!0):(ze=!0,Qt.__version=nt.version);let Qn=Qt.currentProgram;ze===!0&&(Qn=Ys(nt,V,rt),st&&nt.isNodeMaterial&&st.onUpdateProgram(nt,Qn,Qt));let mi=!1,ki=!1,os=!1,ne=Qn.getUniforms(),dn=Qt.uniforms;if(b.useProgram(Qn.program)&&(mi=!0,ki=!0,os=!0),nt.id!==pt&&(pt=nt.id,ki=!0),Qt.needsLights){let en=Zs(F.state.lightProbeGridArray,rt);Qt.lightProbeGrid!==en&&(Qt.lightProbeGrid=en,ki=!0)}if(mi||Mt!==A){b.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),ne.setValue(W,"projectionMatrix",A.projectionMatrix),ne.setValue(W,"viewMatrix",A.matrixWorldInverse);let gi=ne.map.cameraPosition;gi!==void 0&&gi.setValue(W,Bt.setFromMatrixPosition(A.matrixWorld)),L.logarithmicDepthBuffer&&ne.setValue(W,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(nt.isMeshPhongMaterial||nt.isMeshToonMaterial||nt.isMeshLambertMaterial||nt.isMeshBasicMaterial||nt.isMeshStandardMaterial||nt.isShaderMaterial)&&ne.setValue(W,"isOrthographic",A.isOrthographicCamera===!0),Mt!==A&&(Mt=A,ki=!0,os=!0)}if(Qt.needsLights&&(Dn.state.sunShadowMap.length>0&&ne.setValue(W,"sunShadowMap",Dn.state.sunShadowMap,mt),Dn.state.directionalShadowMap.length>0&&ne.setValue(W,"directionalShadowMap",Dn.state.directionalShadowMap,mt),Dn.state.spotShadowMap.length>0&&ne.setValue(W,"spotShadowMap",Dn.state.spotShadowMap,mt),Dn.state.pointShadowMap.length>0&&ne.setValue(W,"pointShadowMap",Dn.state.pointShadowMap,mt)),rt.isSkinnedMesh){ne.setOptional(W,rt,"bindMatrix"),ne.setOptional(W,rt,"bindMatrixInverse");let en=rt.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),ne.setValue(W,"boneTexture",en.boneTexture,mt))}rt.isBatchedMesh&&(ne.setOptional(W,rt,"batchingTexture"),ne.setValue(W,"batchingTexture",rt._matricesTexture,mt),ne.setOptional(W,rt,"batchingIdTexture"),ne.setValue(W,"batchingIdTexture",rt._indirectTexture,mt),ne.setOptional(W,rt,"batchingColorTexture"),rt._colorsTexture!==null&&ne.setValue(W,"batchingColorTexture",rt._colorsTexture,mt));let oi=et.morphAttributes;if((oi.position!==void 0||oi.normal!==void 0||oi.color!==void 0)&&j.update(rt,et,Qn),(ki||Qt.receiveShadow!==rt.receiveShadow)&&(Qt.receiveShadow=rt.receiveShadow,ne.setValue(W,"receiveShadow",rt.receiveShadow)),(nt.isMeshStandardMaterial||nt.isMeshLambertMaterial||nt.isMeshPhongMaterial)&&nt.envMap===null&&V.environment!==null&&(dn.envMapIntensity.value=V.environmentIntensity),dn.dfgLUT!==void 0&&(dn.dfgLUT.value=hb()),ki){if(ne.setValue(W,"toneMappingExposure",H.toneMappingExposure),Qt.needsLights&&pu(dn,os),It&&nt.fog===!0&&re.refreshFogUniforms(dn,It),re.refreshMaterialUniforms(dn,nt,vt,_t,F.state.transmissionRenderTarget[A.id]),Qt.needsLights&&Qt.lightProbeGrid){let en=Qt.lightProbeGrid;dn.probesSH.value=en.texture,dn.probesMin.value.copy(en.boundingBox.min),dn.probesMax.value.copy(en.boundingBox.max),dn.probesResolution.value.copy(en.resolution)}Ea.upload(W,Da(Qt),dn,mt)}if(nt.isShaderMaterial&&nt.uniformsNeedUpdate===!0&&(Ea.upload(W,Da(Qt),dn,mt),nt.uniformsNeedUpdate=!1),nt.isSpriteMaterial&&ne.setValue(W,"center",rt.center),ne.setValue(W,"modelViewMatrix",rt.modelViewMatrix),ne.setValue(W,"normalMatrix",rt.normalMatrix),ne.setValue(W,"modelMatrix",rt.matrixWorld),nt.uniformsGroups!==void 0){let en=nt.uniformsGroups;for(let gi=0,Xn=en.length;gi<Xn;gi++){let _i=en[gi];Et.update(_i,Qn),Et.bind(_i,Qn)}}return Qn}function pu(A,V){A.ambientLightColor.needsUpdate=V,A.lightProbe.needsUpdate=V,A.sunLights.needsUpdate=V,A.sunLightShadows.needsUpdate=V,A.directionalLights.needsUpdate=V,A.directionalLightShadows.needsUpdate=V,A.pointLights.needsUpdate=V,A.pointLightShadows.needsUpdate=V,A.spotLights.needsUpdate=V,A.spotLightShadows.needsUpdate=V,A.rectAreaLights.needsUpdate=V,A.hemisphereLights.needsUpdate=V}function gl(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return ht},this.getActiveMipmapLevel=function(){return ft},this.getRenderTarget=function(){return Tt},this.setRenderTargetTextures=function(A,V,et){let nt=K.get(A);nt.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,nt.__autoAllocateDepthBuffer===!1&&(nt.__useRenderToTexture=!1),K.get(A.texture).__webglTexture=V,K.get(A.depthTexture).__webglTexture=nt.__autoAllocateDepthBuffer?void 0:et,nt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,V){let et=K.get(A);et.__webglFramebuffer=V,et.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(A,V=0,et=0){Tt=A,ht=V,ft=et;let nt=null,rt=!1,It=!1;if(A){let Rt=K.get(A);if(Rt.__useDefaultFramebuffer!==void 0){b.bindFramebuffer(W.FRAMEBUFFER,Rt.__webglFramebuffer),St.copy(A.viewport),qt.copy(A.scissor),jt=A.scissorTest,b.viewport(St),b.scissor(qt),b.setScissorTest(jt),pt=-1;return}else if(Rt.__webglFramebuffer===void 0)mt.setupRenderTarget(A);else if(Rt.__hasExternalTextures)mt.rebindTextures(A,K.get(A.texture).__webglTexture,K.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let Kt=A.depthTexture;if(Rt.__boundDepthTexture!==Kt){if(Kt!==null&&K.has(Kt)&&(A.width!==Kt.image.width||A.height!==Kt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");mt.setupDepthRenderbuffer(A)}}let ut=A.texture;(ut.isData3DTexture||ut.isDataArrayTexture||ut.isCompressedArrayTexture)&&(It=!0);let Lt=K.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Lt[V])?nt=Lt[V][et]:nt=Lt[V],rt=!0):A.samples>0&&mt.useMultisampledRTT(A)===!1?nt=K.get(A).__webglMultisampledFramebuffer:Array.isArray(Lt)?nt=Lt[et]:nt=Lt,St.copy(A.viewport),qt.copy(A.scissor),jt=A.scissorTest}else St.copy(Yt).multiplyScalar(vt).floor(),qt.copy(pe).multiplyScalar(vt).floor(),jt=se;if(et!==0&&(nt=ot),b.bindFramebuffer(W.FRAMEBUFFER,nt)&&b.drawBuffers(A,nt),b.viewport(St),b.scissor(qt),b.setScissorTest(jt),rt){let Rt=K.get(A.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+V,Rt.__webglTexture,et)}else if(It){let Rt=V;for(let ut=0;ut<A.textures.length;ut++){let Lt=K.get(A.textures[ut]);W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0+ut,Lt.__webglTexture,et,Rt)}}else if(A!==null&&et!==0){let Rt=K.get(A.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Rt.__webglTexture,et)}pt=-1};function _l(A){let V=K.get(A);return(V.__readFormat!==A.format||V.__readType!==A.type)&&(V.__readFormat=A.format,V.__readType=A.type,V.__formatReadable=L.textureFormatReadable(A.format),V.__typeReadable=L.textureTypeReadable(A.type)),V}this.readRenderTargetPixels=function(A,V,et,nt,rt,It,Gt,Rt=0){if(!(A&&A.isWebGLRenderTarget)){ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ut=K.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Gt!==void 0&&(ut=ut[Gt]),ut){b.bindFramebuffer(W.FRAMEBUFFER,ut);try{let Lt=A.textures[Rt],Kt=Lt.format,Pe=Lt.type;A.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Rt);let te=_l(Lt);if(te.__formatReadable===!1){ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(te.__typeReadable===!1){ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=A.width-nt&&et>=0&&et<=A.height-rt&&W.readPixels(V,et,nt,rt,zt.convert(Kt),zt.convert(Pe),It)}finally{let Lt=Tt!==null?K.get(Tt).__webglFramebuffer:null;b.bindFramebuffer(W.FRAMEBUFFER,Lt)}}},this.readRenderTargetPixelsAsync=async function(A,V,et,nt,rt,It,Gt,Rt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ut=K.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Gt!==void 0&&(ut=ut[Gt]),ut)if(V>=0&&V<=A.width-nt&&et>=0&&et<=A.height-rt){b.bindFramebuffer(W.FRAMEBUFFER,ut);let Lt=A.textures[Rt],Kt=Lt.format,Pe=Lt.type;A.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Rt);let te=_l(Lt);if(te.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(te.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Oe=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,Oe),W.bufferData(W.PIXEL_PACK_BUFFER,It.byteLength,W.STREAM_READ),W.readPixels(V,et,nt,rt,zt.convert(Kt),zt.convert(Pe),0),W.bindBuffer(W.PIXEL_PACK_BUFFER,null);let un=Tt!==null?K.get(Tt).__webglFramebuffer:null;b.bindFramebuffer(W.FRAMEBUFFER,un);let qe=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await $m(W,qe,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,Oe),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,It),W.bindBuffer(W.PIXEL_PACK_BUFFER,null),W.deleteBuffer(Oe),W.deleteSync(qe),It}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,V=null,et=0){let nt=Math.pow(2,-et),rt=Math.floor(A.image.width*nt),It=Math.floor(A.image.height*nt),Gt=V!==null?V.x:0,Rt=V!==null?V.y:0;mt.setTexture2D(A,0),W.copyTexSubImage2D(W.TEXTURE_2D,et,0,0,Gt,Rt,rt,It),b.unbindTexture()},this.copyTextureToTexture=function(A,V,et=null,nt=null,rt=0,It=0){let Gt,Rt,ut,Lt,Kt,Pe,te,Oe,un,qe=A.isCompressedTexture?A.mipmaps[It]:A.image;if(et!==null)Gt=et.max.x-et.min.x,Rt=et.max.y-et.min.y,ut=et.isBox3?et.max.z-et.min.z:1,Lt=et.min.x,Kt=et.min.y,Pe=et.isBox3?et.min.z:0;else{let dn=Math.pow(2,-rt);Gt=Math.floor(qe.width*dn),Rt=Math.floor(qe.height*dn),A.isDataArrayTexture?ut=qe.depth:A.isData3DTexture?ut=Math.floor(qe.depth*dn):ut=1,Lt=0,Kt=0,Pe=0}nt!==null?(te=nt.x,Oe=nt.y,un=nt.z):(te=0,Oe=0,un=0);let Ye=zt.convert(V.format),on=zt.convert(V.type),Qt;V.isData3DTexture?(mt.setTexture3D(V,0),Qt=W.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(mt.setTexture2DArray(V,0),Qt=W.TEXTURE_2D_ARRAY):(mt.setTexture2D(V,0),Qt=W.TEXTURE_2D),b.activeTexture(W.TEXTURE0),b.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,V.flipY),b.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),b.pixelStorei(W.UNPACK_ALIGNMENT,V.unpackAlignment);let Dn=b.getParameter(W.UNPACK_ROW_LENGTH),ze=b.getParameter(W.UNPACK_IMAGE_HEIGHT),Qn=b.getParameter(W.UNPACK_SKIP_PIXELS),mi=b.getParameter(W.UNPACK_SKIP_ROWS),ki=b.getParameter(W.UNPACK_SKIP_IMAGES);b.pixelStorei(W.UNPACK_ROW_LENGTH,qe.width),b.pixelStorei(W.UNPACK_IMAGE_HEIGHT,qe.height),b.pixelStorei(W.UNPACK_SKIP_PIXELS,Lt),b.pixelStorei(W.UNPACK_SKIP_ROWS,Kt),b.pixelStorei(W.UNPACK_SKIP_IMAGES,Pe);let os=A.isDataArrayTexture||A.isData3DTexture,ne=V.isDataArrayTexture||V.isData3DTexture;if(A.isDepthTexture){let dn=K.get(A),oi=K.get(V),en=K.get(dn.__renderTarget),gi=K.get(oi.__renderTarget);b.bindFramebuffer(W.READ_FRAMEBUFFER,en.__webglFramebuffer),b.bindFramebuffer(W.DRAW_FRAMEBUFFER,gi.__webglFramebuffer);for(let Xn=0;Xn<ut;Xn++)os&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,K.get(A).__webglTexture,rt,Pe+Xn),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,K.get(V).__webglTexture,It,un+Xn)),W.blitFramebuffer(Lt,Kt,Gt,Rt,te,Oe,Gt,Rt,W.DEPTH_BUFFER_BIT,W.NEAREST);b.bindFramebuffer(W.READ_FRAMEBUFFER,null),b.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if(rt!==0||A.isRenderTargetTexture||K.has(A)){let dn=K.get(A),oi=K.get(V);b.bindFramebuffer(W.READ_FRAMEBUFFER,J),b.bindFramebuffer(W.DRAW_FRAMEBUFFER,Q);for(let en=0;en<ut;en++)os?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,dn.__webglTexture,rt,Pe+en):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,dn.__webglTexture,rt),ne?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,oi.__webglTexture,It,un+en):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,oi.__webglTexture,It),rt!==0?W.blitFramebuffer(Lt,Kt,Gt,Rt,te,Oe,Gt,Rt,W.COLOR_BUFFER_BIT,W.NEAREST):ne?W.copyTexSubImage3D(Qt,It,te,Oe,un+en,Lt,Kt,Gt,Rt):W.copyTexSubImage2D(Qt,It,te,Oe,Lt,Kt,Gt,Rt);b.bindFramebuffer(W.READ_FRAMEBUFFER,null),b.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else ne?A.isDataTexture||A.isData3DTexture?W.texSubImage3D(Qt,It,te,Oe,un,Gt,Rt,ut,Ye,on,qe.data):V.isCompressedArrayTexture?W.compressedTexSubImage3D(Qt,It,te,Oe,un,Gt,Rt,ut,Ye,qe.data):W.texSubImage3D(Qt,It,te,Oe,un,Gt,Rt,ut,Ye,on,qe):A.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,It,te,Oe,Gt,Rt,Ye,on,qe.data):A.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,It,te,Oe,qe.width,qe.height,Ye,qe.data):W.texSubImage2D(W.TEXTURE_2D,It,te,Oe,Gt,Rt,Ye,on,qe);b.pixelStorei(W.UNPACK_ROW_LENGTH,Dn),b.pixelStorei(W.UNPACK_IMAGE_HEIGHT,ze),b.pixelStorei(W.UNPACK_SKIP_PIXELS,Qn),b.pixelStorei(W.UNPACK_SKIP_ROWS,mi),b.pixelStorei(W.UNPACK_SKIP_IMAGES,ki),It===0&&V.generateMipmaps&&W.generateMipmap(Qt),b.unbindTexture()},this.initRenderTarget=function(A){K.get(A).__webglFramebuffer===void 0&&mt.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?mt.setTextureCube(A,0):A.isData3DTexture?mt.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?mt.setTexture2DArray(A,0):mt.setTexture2D(A,0),b.unbindTexture()},this.resetState=function(){ht=0,ft=0,Tt=null,b.reset(),Zt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ke._getDrawingBufferColorSpace(t),e.unpackColorSpace=ke._getUnpackColorSpace()}};var Eg=new Zn,Zh=new X,Bi=class extends Xo{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new gn(t,3)),this.setAttribute("uv",new gn(e,2))}applyMatrix4(t){let e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new Bs(e,6,1);return this.setAttribute("instanceStart",new Ni(n,3,0)),this.setAttribute("instanceEnd",new Ni(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new Bs(e,6,1);return this.setAttribute("instanceColorStart",new Ni(n,3,0)),this.setAttribute("instanceColorEnd",new Ni(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new ko(t.geometry)),this}fromLineSegments(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zn);let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),Eg.setFromBufferAttribute(e),this.boundingBox.union(Eg))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new si),this.boundingBox===null&&this.computeBoundingBox();let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Zh.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Zh)),Zh.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Zh));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}};Vt.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new $t},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};jn.line={uniforms:sl.merge([Vt.common,Vt.fog,Vt.line]),vertexShader:`
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
		`};var Qi=class extends Pn{constructor(t){super({type:"LineMaterial",uniforms:sl.clone(jn.line.uniforms),vertexShader:jn.line.vertexShader,fragmentShader:jn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0!==this.worldUnits&&(this.needsUpdate=!0),t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var ff=new Qe,Tg=new X,Ag=new X,Fn=new Qe,On=new Qe,ts=new Qe,pf=new X,mf=new $e,Bn=new Yo,Cg=new X,Jh=new Zn,jh=new si,es=new Qe,ns,yr;function Rg(i,t,e){return es.set(0,0,-t,1).applyMatrix4(i.projectionMatrix),es.multiplyScalar(1/es.w),es.x=yr/e.width,es.y=yr/e.height,es.applyMatrix4(i.projectionMatrixInverse),es.multiplyScalar(1/es.w),Math.abs(Math.max(es.x,es.y))}function ub(i,t){let e=i.matrixWorld,n=i.geometry,s=n.attributes.instanceStart,r=n.attributes.instanceEnd,a=Math.min(n.instanceCount,s.count);for(let l=0,c=a;l<c;l++){Bn.start.fromBufferAttribute(s,l),Bn.end.fromBufferAttribute(r,l),Bn.applyMatrix4(e);let h=new X,d=new X;ns.distanceSqToSegment(Bn.start,Bn.end,d,h),d.distanceTo(h)<yr*.5&&t.push({point:d,pointOnLine:h,distance:ns.origin.distanceTo(d),object:i,face:null,faceIndex:l,uv:null,uv1:null})}}function db(i,t,e){let n=t.projectionMatrix,r=i.material.resolution,a=i.matrixWorld,l=i.geometry,c=l.attributes.instanceStart,h=l.attributes.instanceEnd,d=Math.min(l.instanceCount,c.count),v=-t.near;ns.at(1,ts),ts.w=1,ts.applyMatrix4(t.matrixWorldInverse),ts.applyMatrix4(n),ts.multiplyScalar(1/ts.w),ts.x*=r.x/2,ts.y*=r.y/2,ts.z=0,pf.copy(ts),mf.multiplyMatrices(t.matrixWorldInverse,a);for(let f=0,y=d;f<y;f++){if(Fn.fromBufferAttribute(c,f),On.fromBufferAttribute(h,f),Fn.w=1,On.w=1,Fn.applyMatrix4(mf),On.applyMatrix4(mf),Fn.z>v&&On.z>v)continue;if(Fn.z>v){let B=Fn.z-On.z,R=(Fn.z-v)/B;Fn.lerp(On,R)}else if(On.z>v){let B=On.z-Fn.z,R=(On.z-v)/B;On.lerp(Fn,R)}Fn.applyMatrix4(n),On.applyMatrix4(n),Fn.multiplyScalar(1/Fn.w),On.multiplyScalar(1/On.w),Fn.x*=r.x/2,Fn.y*=r.y/2,On.x*=r.x/2,On.y*=r.y/2,Bn.start.copy(Fn),Bn.start.z=0,Bn.end.copy(On),Bn.end.z=0;let I=Bn.closestPointToPointParameter(pf,!0);Bn.at(I,Cg);let _=Wd.lerp(Fn.z,On.z,I),m=_>=-1&&_<=1,O=pf.distanceTo(Cg)<yr*.5;if(m&&O){Bn.start.fromBufferAttribute(c,f),Bn.end.fromBufferAttribute(h,f),Bn.start.applyMatrix4(a),Bn.end.applyMatrix4(a);let B=new X,R=new X;ns.distanceSqToSegment(Bn.start,Bn.end,R,B),e.push({point:R,pointOnLine:B,distance:ns.origin.distanceTo(R),object:i,face:null,faceIndex:f,uv:null,uv1:null})}}}var Sr=class extends In{constructor(t=new Bi,e=new Qi({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,s=new Float32Array(2*e.count);for(let a=0,l=0,c=e.count;a<c;a++,l+=2)Tg.fromBufferAttribute(e,a),Ag.fromBufferAttribute(n,a),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+Tg.distanceTo(Ag);let r=new Bs(s,2,1);return t.setAttribute("instanceDistanceStart",new Ni(r,1,0)),t.setAttribute("instanceDistanceEnd",new Ni(r,1,1)),this}raycast(t,e){let n=this.material.worldUnits,s=t.camera;if(s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.'),n===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;let r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;ns=t.ray;let a=this.matrixWorld,l=this.geometry,c=this.material;yr=c.linewidth+r,l.boundingSphere===null&&l.computeBoundingSphere(),jh.copy(l.boundingSphere).applyMatrix4(a);let h;if(n)h=yr*.5;else{let v=Math.max(s.near,jh.distanceToPoint(ns.origin));h=Rg(s,v,c.resolution)}if(jh.radius+=h,ns.intersectsSphere(jh)===!1)return;l.boundingBox===null&&l.computeBoundingBox(),Jh.copy(l.boundingBox).applyMatrix4(a);let d;if(n)d=yr*.5;else{let v=Math.max(s.near,Jh.distanceToPoint(ns.origin));d=Rg(s,v,c.resolution)}Jh.expandByScalar(d),ns.intersectsBox(Jh)!==!1&&(n?ub(this,e):db(this,s,e))}onBeforeRender(t){let e=this.material.uniforms;e&&e.resolution&&(t.getViewport(ff),this.material.uniforms.resolution.value.set(ff.z,ff.w))}};var Kh=i=>i<90?Math.round(i)+" s":i<5400?Math.round(i/60)+" min":i<129600?Math.round(i/3600)+" h":Math.round(i/86400)+(window.__L==="en"?" days":window.__L==="ca"?" dies":" d\xEDas"),is=i=>window.__L==="en"?i+" ago":(window.__L==="ca"?"fa ":"hace ")+i;function Ig(i){let t=window.__ROD__,{scene:e,camera:n,goal:s,cur:r,invalidate:a,K:l,CX:c,CY:h,mcs:d,q:v,list:f,clamp:y,norm:S,munis:I}=i,_=o=>document.querySelector(o),m=o=>String(o).replace(/[<>&"]/g,u=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[u]),O=(o,u)=>[(o-c)*l,(u-h)*l],B=.06,R=t.segs.map(o=>{let u=[],p=[0];for(let x=0;x<o.length;x+=2){let M=O(o[x],o[x+1]);u.length&&p.push(p[p.length-1]+Math.hypot(M[0]-u[u.length-1][0],M[1]-u[u.length-1][1])),u.push(M)}return{p:u,c:p,L:p[p.length-1]}}),E=t.stops.map(([o,u,p,x])=>({n:o,id:x,w:O(u,p),fams:new Set})),F=t.routes.map(([o,u,p])=>({s:o,l:u,c:p})),G=new Map;(t.bus||[]).forEach(([o,u,p,x])=>{let M={days:new Set(o),name:u,stops:p,times:x};p.forEach((w,P)=>{if(P<p.length-1){let U=G.get(w)||[];U.push([M,P]),G.set(w,U)}})});function T(o,u,p){let x=se(),M=t.days.indexOf(x.ymd),w=[];for(let[P,U]of G.get(o)||[]){if(!P.days.has(M))continue;let D=P.times[U];if(D<u||D>p)continue;let z=P.stops[P.stops.length-1];w.push({sm:D,est:D,dl:0,fam:P.name,dest:E[z].n,destId:E[z].id,plat:"",cancel:!1,obs:"",live:!1,num:"",tid:"",tr:null,bus:!0,src:"bus",bstops:P.stops.slice(U)})}return w}let N=(o,u)=>{let p=o.match(/^R([A-Z]*)(\d*)(.*)$/),x=u.match(/^R([A-Z]*)(\d*)(.*)$/);return(p[1]||"").localeCompare(x[1]||"")||(+p[2]||0)-(+x[2]||0)||p[3].localeCompare(x[3])},H=[...new Set(F.map(o=>o.s))].sort(N),q={};F.forEach(o=>{q[o.s]||(q[o.s]=o.c)});let st=t.pats.map(([o,u,p])=>({stops:o,t:u,segs:p})),ot=t.trips.map(([o,u,p,x,M],w)=>({day:o,pat:st[u],fam:F[p].s,c:F[p].c,t0:x,num:M,tid:t.tids[w]})),J={};H.forEach(o=>J[o]=new Set),ot.forEach(o=>{o.pat.segs.forEach(u=>J[o.fam].add(u)),o.pat.stops.forEach(u=>E[u].fams.add(o.fam))});let Q=t.days.map((o,u)=>ot.filter(p=>p.day===u)),ht=new Map(ot.map(o=>[o.tid,o])),ft=[124.87404143965449,479.9901289885639,124.62688710863031,249.99562739146893,486.739003764725,248.0364802782304,2037.1344308355726],Tt=Math.PI/180,pt=3.922*Tt,Mt=-39.705*Tt;function St(o,u){let p=o*Tt+pt,x=u*Tt,M=Math.cos(Mt),w=Math.sin(Mt),P=Math.cos(x),U=Math.cos(p)*P,D=Math.sin(p)*P,z=Math.sin(x),Z=Math.atan2(D,U*M-z*w),g=Math.asin(z*M+U*w),C=Math.sqrt(2/(1+Math.cos(Z)*Math.cos(g))),k=C*Math.cos(g)*Math.sin(Z),Y=C*Math.sin(g),[ct,wt,dt,bt,it,ce,_e]=ft;return O((wt+ct*k-it)*_e,(ce-(bt-dt*Y))*_e)}let qt=new Map(E.map((o,u)=>[o.id,u]));function jt(o){if(o.g)return o.g;let u=[],p=[],x=[0],M=0;return o.segs.forEach((w,P)=>{let U=R[w];U.p.forEach((D,z)=>{P&&!z||(u.push(D),p.push(M+U.c[z]))}),M+=U.L,x.push(M)}),o.g={pts:u,cum:p,stopD:x}}function Ve(o,u,p,x){let M=1e18,w=0;for(let P=0;P+1<o.pts.length;P++){if(o.cum[P+1]<p||o.cum[P]>x)continue;let U=o.pts[P],D=o.pts[P+1],z=D[0]-U[0],Z=D[1]-U[1],g=z*z+Z*Z||1e-9,C=Math.max(0,Math.min(1,((u[0]-U[0])*z+(u[1]-U[1])*Z)/g)),k=U[0]+z*C-u[0],Y=U[1]+Z*C-u[1],ct=k*k+Y*Y;ct<M&&(M=ct,w=o.cum[P]+C*(o.cum[P+1]-o.cum[P]))}return{d:w,err:Math.sqrt(M)}}function Ie(o,u){let p=0,x=o.cum.length-1;if(u<=0)return o.pts[0];if(u>=o.cum[x])return o.pts[x];for(;x-p>1;){let U=p+x>>1;o.cum[U]<=u?p=U:x=U}let M=(u-o.cum[p])/(o.cum[x]-o.cum[p]||1),w=o.pts[p],P=o.pts[x];return[w[0]+(P[0]-w[0])*M,w[1]+(P[1]-w[1])*M]}let Fe=o=>`${o.slice(6,8)}/${o.slice(4,6)}`,_t=new Intl.DateTimeFormat("es-ES",{timeZone:"Europe/Madrid",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hourCycle:"h23"});function vt(o){let u={};return _t.formatToParts(o).forEach(p=>u[p.type]=p.value),{ymd:u.year+u.month+u.day,min:+u.hour*60+ +u.minute+ +u.second/60}}let Pt=0,oe=null,Yt=0,pe=0;function se(){let o=vt(new Date);if(Pt===0&&oe==null)return{...o,live:!0};let u=oe==null?o.min:Yt+(Pt?(performance.now()-pe)/6e4*Pt:0);return{ymd:o.ymd,min:u,live:!1}}let at=o=>(o=(Math.floor(o+1e-6)%1440+1440)%1440,String(Math.floor(o/60)).padStart(2,"0")+":"+String(o%60).padStart(2,"0")),At="https://rodalies.erathegameoftime.com",$={url:"",delays:new Map,tu:new Map,vp:new Map,alerts:[],ok:0,okVP:0,err:"",feedTs:0};try{let o=new URLSearchParams(location.search).get("rt");o&&localStorage.setItem("rod_rt",o);let u=localStorage.getItem("rod_rt");u&&/jhmuyo\.workers\.dev/.test(u)&&(u=At,localStorage.setItem("rod_rt",u)),$.url=u||At}catch{$.url=At}let Ct=(o,u)=>fetch(o+u,{cache:"no-store"}).then(p=>{if(!p.ok)throw new Error("HTTP "+p.status);return p.json()}),Bt=o=>/^51/.test(o||"");async function de(){if(!$.url){we();return}let o=$.url.replace(/\/+$/,"");(!$.repFail||Date.now()-$.repFail>15*6e4)&&Ct(o,"/reports.json").then(D=>{D&&Array.isArray(D.items)?($.rep=D.items,$.repSkew=(D.now||Date.now())-Date.now(),D.tipos&&($.tipos=D.tipos),$.repOk=Date.now(),$.repFail=0):$.repFail=Date.now()}).catch(()=>{$.repFail=Date.now(),$.repOk=0});let u=!$.adifAt||Date.now()-$.adifAt>11e4,[p,x,M,w,P]=await Promise.allSettled([Ct(o,"/trip_updates.json"),Ct(o,"/vehicle_positions.json"),Ct(o,"/alerts.json"),Ct(o,"/notices.json"),u?Ct(o,"/adif.json"):Promise.reject(0)]);if(P.status==="fulfilled"&&P.value&&P.value.ok?($.adif=P.value,$.adifAt=Date.now()):u&&($.adifAt=Date.now()-6e4),p.status==="fulfilled"){let D=new Map,z=new Map;for(let Z of p.value.entity||[]){let g=Z.tripUpdate;if(!g||!g.trip||!Bt(g.trip.tripId))continue;let C=g.trip.tripId,k=(g.stopTimeUpdate||[])[0],Y=g.delay;Y==null&&k&&(Y=(k.arrival||k.departure||{}).delay),g.trip.scheduleRelationship==="CANCELED"&&(Y="X"),Y!=null&&D.set(C,Y),z.set(C,{next:k?{sid:k.stopId,t:+((k.arrival||k.departure||{}).time||0)}:null})}$.delays=D,$.tu=z,$.ok=Date.now(),$.feedTs=+((p.value.header||{}).timestamp||0)*1e3,$.err=""}else $.err=p.reason&&p.reason.message||__t(0);if(x.status==="fulfilled"){let D=new Map,z=Date.now()/1e3;for(let Z of x.value.entity||[]){let g=Z.vehicle;if(!g||!g.trip||!Bt(g.trip.tripId)||!g.position)continue;let C=g.vehicle&&g.vehicle.label||"",k=C.match(/PLATF\.\(([^)]+)\)/),Y=$.vp.get(g.trip.tripId),ct={tid:g.trip.tripId,w:St(+g.position.longitude,+g.position.latitude),st:g.currentStatus||"",sid:g.stopId||"",ts:+g.timestamp||z,label:C,plat:k?k[1]:"",fam:(C.split("-")[0]||"").trim(),num:g.vehicle&&g.vehicle.id||""};ct.disp=Y?Y.disp:null,D.set(ct.tid,ct)}$.vp=D,$.okVP=Date.now()}let U=[];if(w.status==="fulfilled"&&Array.isArray(w.value.included)){$.okNotices=Date.now();for(let D of w.value.included){let z=new Set((D.lines||[]).map(Y=>Y.id).filter(Y=>q[Y])),Z=(Y,ct)=>{Y=Y||{},ct=ct||window.__L;let wt=Y[ct];return ct==="en"&&wt&&(wt===Y.ca||/\b(els|amb|dels|per una|circulen|serveis|entre .{2,40} i )\b|ç|l·l/i.test(wt))&&(wt=""),(wt||Y.es||Y.ca||"").trim()},g=Y=>[Z(D.description,Y),Z(D.title,Y)].sort((ct,wt)=>wt.length-ct.length)[0],C=g(),k=g("es");C&&U.push({id:"N"+D.externalId,fams:z,stops:new Set,txt:C,es:k,when:(D.date||"")+"T"+(D.time||""),src:"Rodalies",core:D.core||""})}}if(M.status==="fulfilled"){let D=+((M.value.header||{}).timestamp||0);if($.alertsTs=D,Date.now()/1e3-D<6*3600)for(let z of M.value.entity||[]){let Z=z.alert;if(!Z)continue;let g=new Set,C=new Set;for(let wt of Z.informedEntity||[])(wt.routeId||"").startsWith("51")&&g.add(wt.routeId.replace(/^51T\d+/,"")),wt.stopId&&qt.has(wt.stopId)&&C.add(qt.get(wt.stopId));if(!g.size&&!C.size)continue;let k=(Z.descriptionText||Z.headerText||{translation:[]}).translation||[],Y=((k.find(wt=>wt.language==="es")||k[0]||{}).text||"").trim(),ct=+((Z.activePeriod||[])[0]||{}).start||0;U.some(wt=>wt.txt===Y)||U.push({id:z.id,fams:g,stops:C,txt:Y,when:ct?new Date(ct*1e3).toISOString().slice(0,19):"",src:"Renfe"})}}if($.adif&&Date.now()-$.adifAt<15*6e4)for(let[D,z]of($.adif.items||[]).entries()){let Z=(z.t?z.t+". ":"")+z.txt,g=new Set,C=new Set,k=S(Z);for(let Y of Z.matchAll(/\b(R\d{1,2}[NS]?|R3a|RG1|RL\d|RT\d)\b/g))q[Y[1]]&&g.add(Y[1]);E.forEach((Y,ct)=>{Y.fams.size&&Y.n.length>4&&k.includes(S(Y.n))&&(C.add(ct),g.size||Y.fams.forEach(wt=>g.add(wt)))}),U.some(Y=>Y.txt===Z)||U.push({id:"A"+D,fams:g,stops:C,txt:Z,when:$.adif.upd||"",src:"Adif",lvl:z.lvl})}if(w.status==="fulfilled"||M.status==="fulfilled"){$.alerts=U.sort((D,z)=>z.when>D.when?1:-1);try{w0()}catch{}}we(),yu(),Gt=0,a()}let he=()=>$.okVP&&Date.now()-$.okVP<10*6e4,ue=()=>$.okVP&&Date.now()-$.okVP<9e4,Se={at:0,v:!1},W=()=>{if(!he()||$.vp.size>0)return!1;if(Date.now()-Se.at>3e4){Se.at=Date.now();let o=vt(new Date),u=t.days.indexOf(o.ymd),p=0;if(u>=0)for(let x of Q[u]){let M=o.min-x.t0;M>x.pat.t[1]+2&&M<x.pat.t[x.pat.t.length-2]-2&&p++}Se.v=p>=6}return Se.v},Ce=()=>he()&&!W();function we(){let o=_("#rtst"),u=_("#mode");if(u){let x=[...K].filter(U=>{Wa("");let D=wi.m.get(U);return D&&D[0]>=2}),M=Ga(x),w=!!Ce()&&se().live&&!(x.length&&M.length===x.length);u.classList.toggle("on",w&&ue()),u.classList.toggle("pre",!(w&&ue())),u.textContent=w&&!ue()?__t(1):w?__t(2):L.cur?__t(3):__t(4),u.classList.toggle("past",!!L.cur);let P=_("#rcgrab");if(P){let U=P.querySelector(".rdot");U||(U=document.createElement("b"),U.className="rdot",P.insertBefore(U,P.firstChild)),U.className="rdot "+(L.cur?"past":w&&ue()?"on":"pre"),U.title=u.textContent}u.title=L.cur?`${__t(5)}${L.cur.sn.t}${__t(6)}`:""}if(!o)return;$.url?$.err?o.textContent=__t(8)+$.err+__t(9):Ce()?o.innerHTML=`${__t(10)}${$.vp.size}${__t(11)}${$.delays.size}${__t(12)}${new Date($.okVP).toLocaleTimeString("es-ES",{hour:"2-digit",minute:"2-digit",second:"2-digit"})}`:W()?o.textContent=__t(13):o.textContent=__t(14):o.textContent=$.err||__t(7);let p=_("#rturl");p&&p._shown!==$.url&&(p.value=$.url,p._shown=$.url)}_("#rtsave").onclick=()=>{let o=_("#rturl").value.trim().replace(/\/+(alerts|trip_updates|vehicle_positions)\.json$/,"").replace(/\/+$/,"");if(o&&!/^https?:\/\//.test(o)&&(o="https://"+o),!o){$.err=__t(15),we();return}$.url=o;try{localStorage.setItem("rod_rt",o)}catch{}$.ok=0,$.err="",we(),de()},_("#rtoff").onclick=()=>{$.url=At;try{localStorage.removeItem("rod_rt")}catch{}d._h="",de()},setInterval(de,2e4),setTimeout(de,50);let L={snap:null,key:""};function b(){let o=se();if(o.live||!ne.hoy||!ne.hoy.snaps||Pt&&oe==null)return null;let u=vt(new Date).min;if(o.min>u+1)return null;let p=null;for(let x of ne.hoy.snaps){if(!x.d)continue;let M=Xf(x.t);M<=o.min+1&&(!p||M>p.m)&&(p={m:M,sn:x})}return p&&o.min-p.m<=25?p:null}let tt=o=>{{let M=mu(o.num);if(M&&M.cx&&se().live)return"X"}let u=L.cur;if(u){if(u.sn.x&&u.sn.x.includes(o.tid))return"X";let M=u.sn.d[o.tid];return M??0}if(!Ce())return null;let p=$.delays.get(o.tid),x=$.vp.get(o.tid);return p==="X"?p:x&&x.pre&&x.preDl>=1?Math.max(typeof p=="number"?p:0,x.preDl*60):p??null},K=new Set(H);try{let o=JSON.parse(localStorage.getItem("rod_lines")||"null");Array.isArray(o)&&o.some(u=>H.includes(u))&&(K.clear(),o.forEach(u=>H.includes(u)&&K.add(u)))}catch{}let mt=new Bi,Dt=new Bi,Ft=new Qi({vertexColors:!0,linewidth:3.2,depthTest:!1,transparent:!0}),gt=new Qi({color:16777215,linewidth:6,depthTest:!1,transparent:!0,opacity:.9}),yt=new Sr(mt,Ft),kt=new Sr(Dt,gt);kt.renderOrder=20,yt.renderOrder=21,yt.frustumCulled=kt.frustumCulled=!1,e.add(kt,yt);function re(o){let u=o[0]/l+c,p=o[1]/l+h;for(let x of I){if(x._bb===void 0){let w=1e9,P=1e9,U=-1e9,D=-1e9;for(let z of x.rings||[]){let Z=z[0]||[];for(let g=0;g<Z.length;g+=2)Z[g]<w&&(w=Z[g]),Z[g]>U&&(U=Z[g]),Z[g+1]<P&&(P=Z[g+1]),Z[g+1]>D&&(D=Z[g+1])}x._bb=[w,P,U,D]}let M=x._bb;if(!(u<M[0]||u>M[2]||p<M[1]||p>M[3]))for(let w of x.rings||[]){let P=w[0]||[],U=!1;for(let D=0,z=P.length,Z=z-2;D<z;Z=D,D+=2){let g=P[D+1],C=P[Z+1];g>p!=C>p&&u<(P[Z]-P[D])*(p-g)/(C-g)+P[D]&&(U=!U)}if(U)return!0}}return!1}let Xt=!1;function Ht(){Xt||!I.length||(Xt=!0,E.forEach(o=>{o.ext=!re(o.w)}),R.forEach(o=>{o.ext=!re(o.p[0])&&!re(o.p[o.p.length-1])&&!re(o.p[o.p.length>>1])}))}let ae=()=>{let o=new Set(K.size<=2?K:[]);try{ut&&ut.fam&&o.add(ut.fam)}catch{}return o},me="";function Me(){Ht();let o=[],u=[],p=new Set,x=new ge,M=new ge("#d2d0d0"),w=ae();me=[...w].join();for(let Z of H)if(K.has(Z))for(let g of J[Z]){if(p.has(g))continue;p.add(g);let C=R[g].p;x.set(q[Z]),R[g].ext&&!w.has(Z)&&x.lerp(M,.55);for(let k=0;k+1<C.length;k++)o.push(C[k][0],C[k][1],B,C[k+1][0],C[k+1][1],B),u.push(x.r,x.g,x.b,x.r,x.g,x.b)}o.length||(o.push(0,0,-50,0,0,-50),u.push(0,0,0,0,0,0));let P=new Bi,U=new Bi;P.setPositions(o),P.setColors(u),U.setPositions(o);let D=yt.geometry,z=kt.geometry;yt.geometry=P,kt.geometry=U,D&&D.dispose(),z&&z.dispose(),a()}Me();let j=o=>new Pn({uniforms:{dpr:{value:Math.min(devicePixelRatio||1,2)},border:{value:new ge(o)}},vertexShader:"attribute float size; attribute vec3 fill; attribute float bw; varying vec3 vF; varying float vS; varying float vB; uniform float dpr; void main(){ vF=fill; vS=size*dpr; vB=bw*dpr; gl_PointSize=vS; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"uniform vec3 border; varying vec3 vF; varying float vS; varying float vB; void main(){ float r=length(gl_PointCoord*2.0-1.0)*vS*0.5; float R=vS*0.5; if(r>R) discard; float a=1.0-smoothstep(R-1.2,R,r); vec3 c = r>R-vB ? border : vF; gl_FragColor=vec4(c,a); }",transparent:!0,depthTest:!1}),Ut=new _n,xt=E.length,zt=new Float32Array(xt*3),Zt=new Float32Array(xt*3),Et=new Float32Array(xt),le=new Float32Array(xt);E.forEach((o,u)=>{zt[u*3]=o.w[0],zt[u*3+1]=o.w[1],zt[u*3+2]=B,Zt.set([1,1,1],u*3),Et[u]=6,le[u]=1.6}),Ut.setAttribute("position",new nn(zt,3)),Ut.setAttribute("fill",new nn(Zt,3)),Ut.setAttribute("size",new nn(Et,1)),Ut.setAttribute("bw",new nn(le,1));let ee=j("#1d2330"),Je=new fr(Ut,ee);Je.renderOrder=22,Je.frustumCulled=!1,e.add(Je);function Ee(){let o=r.dist<45,u=ae();E.forEach((p,x)=>{let M=[...p.fams].some(P=>K.has(P)),w=p.ext&&![...p.fams].some(P=>u.has(P))&&x!==Lt;Et[x]=M?x===Lt?13:w?3:o?8:5:0,le[x]=x===Lt?3:1.6}),Ut.attributes.size.needsUpdate=!0,Ut.attributes.bw.needsUpdate=!0}let mn=600,yn=new _n,Ar=new Float32Array(mn*3),Cr=new Float32Array(mn*3),Rr=new Float32Array(mn),Ir=new Float32Array(mn);yn.setAttribute("position",new nn(Ar,3)),yn.setAttribute("fill",new nn(Cr,3)),yn.setAttribute("size",new nn(Rr,1)),yn.setAttribute("bw",new nn(Ir,1));let Xs=new Float32Array(mn);yn.setAttribute("ang",new nn(Xs,1));let ml=new Pn({uniforms:{dpr:{value:Math.min(devicePixelRatio||1,2)},border:{value:new ge("#ffffff")}},vertexShader:"attribute float size; attribute vec3 fill; attribute float bw; attribute float ang; varying vec3 vF; varying float vS; varying float vB; varying float vA; uniform float dpr; void main(){ vF=fill; vS=size*dpr; vB=bw*dpr; vA=ang; gl_PointSize=vS; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"uniform vec3 border; varying vec3 vF; varying float vS; varying float vB; varying float vA; void main(){ vec2 p=gl_PointCoord*2.0-1.0; float r=length(p)*vS*0.5; float R=vS*0.5; if(r>R) discard; float a=1.0-smoothstep(R-1.2,R,r); vec3 c = r>R-vB ? border : vF; if(vA<50.0){ vec2 d=vec2(sin(vA),-cos(vA)); vec2 n=vec2(cos(vA),sin(vA)); float qy=-dot(p,d); float qx=dot(p,n); float w=(qy+0.66)/0.98*0.48; if(qy>-0.66 && qy<0.32 && abs(qx)<w) c=vec3(1.0); } else if(vA>70.0 && vA<80.0){ if(abs(p.y)<0.36 && abs(abs(p.x)-0.2)<0.1) c=vec3(1.0); } else if(vA>80.0 && vA<90.0){ if((abs(p.x)<0.11 && p.y>-0.5 && p.y<0.16) || length(p-vec2(0.0,0.38))<0.12) c=vec3(1.0); } gl_FragColor=vec4(c,a); }",transparent:!0,depthTest:!1}),Pr=new fr(yn,ml);Pr.renderOrder=24,Pr.frustumCulled=!1,e.add(Pr);let Wn=new _n,Es=new Float32Array(mn*3),Pa=new Float32Array(mn*3),La=new Float32Array(mn),qs=new Float32Array(mn);Wn.setAttribute("position",new nn(Es,3)),Wn.setAttribute("fill",new nn(Pa,3)),Wn.setAttribute("size",new nn(La,1)),Wn.setAttribute("bw",new nn(qs,1));let Lr=new fr(Wn,j("#ffffff"));Lr.renderOrder=23,Lr.frustumCulled=!1,e.add(Lr);function Ys(o,u){let p=R[o],x=u*p.L,M=0,w=p.c.length-1;for(;w-M>1;){let Z=M+w>>1;p.c[Z]<=x?M=Z:w=Z}let P=p.c[w]-p.c[M]||1,U=(x-p.c[M])/P,D=p.p[M],z=p.p[w];return[D[0]+(z[0]-D[0])*U,D[1]+(z[1]-D[1])*U]}let Da=o=>o*o*(3-2*o)*.35+o*.65;function Ts(o,u){let p=o.pat.t,x=o.pat.stops.length,M=p[2*x-2];if(u<p[1]-2||u>M+1)return null;if(u<=p[1])return{w:E[o.pat.stops[0]].w,at:0,next:0,moving:!1};for(let w=0;w<x-1;w++){let P=p[2*w+1],U=p[2*w+2],D=p[2*w+3];if(u<=U){let z=U>P?(u-P)/(U-P):1;return{w:Ys(o.pat.segs[w],Da(y(z,0,1))),at:-1,next:w+1,prev:w,moving:!0}}if(u<=D)return{w:E[o.pat.stops[w+1]].w,at:w+1,next:w+1,moving:!1}}return{w:E[o.pat.stops[x-1]].w,at:x-1,next:x-1,moving:!1}}function Zs(o){let u=t.days.indexOf(o.ymd),p=[];if(u<0)return{k:u,out:p};let x=(M,w)=>{for(let P of M){if(!K.has(P.fam))continue;let U=tt(P);if(U==="X")continue;let D=(U||0)/60,z=o.min+w-P.t0-D;if(z<-2||z>P.pat.t[P.pat.t.length-2]+1)continue;let Z=Ts(P,z);Z&&p.push({tr:P,p:Z,rel:z,dl:D,live:U!=null})}};return x(Q[u],0),u>0&&x(Q[u-1],1440),{k:u,out:p}}function fu(o,u,p,x){let M=o.pat.stops[0],w=u.dep0,P=null,U=(z,Z)=>{for(let g of z||[]){let C=g.pat.stops,k=C.length;if(C[k-1]!==M||g===o)continue;let Y=g.t0+g.pat.t[2*(k-1)]-Z;if(Y>w+5||Y<w-120)continue;let ct=jt(g.pat),wt=Ve(ct,u.w,-1,1e9);if(wt.err>.6)continue;let dt=ct.stopD,bt=g.pat.t,it=dt.findIndex(Wt=>Wt>wt.d);it<0&&(it=k-1);let ce=it===0?bt[1]:bt[2*it-1]+(dt[it]>dt[it-1]?(wt.d-dt[it-1])/(dt[it]-dt[it-1]):1)*(bt[2*it]-bt[2*it-1]),_e=p-(g.t0+ce-Z);_e<-5||_e>120||(!P||Math.abs(_e)<Math.abs(P.prevDl))&&(P={prevTr:g,dPrev:wt.d,prevDl:_e,arrO:Y+Math.max(0,_e)})}};if(U(Q[x],0),x>0&&U(Q[x-1],1440),!P)return{prevTr:null,preDl:0};let D=Math.max(w,P.arrO+3);return{...P,depEst:D,preDl:Math.max(0,D-w)}}function pu(o,u,p){let x=o.pat.t,M=u.length;if(!(p>=0))return p<0?u[0]:null;for(let w=0;w<M;w++)if(p<=x[2*w+1]){if(p>=x[2*w]||w===0)return u[w];let P=x[2*w-1],U=x[2*w];return u[w-1]+(u[w]-u[w-1])*(U>P?(p-P)/(U-P):1)}return u[M-1]}let gl=performance.now();function _l(){let o=[],u=Date.now()/1e3,p=performance.now(),x=Math.min(1,(p-gl)/1e3);gl=p;for(let M of $.vp.values()){let w=ht.get(M.tid),P=w?w.fam:M.fam;if(P&&q[P]&&!K.has(P))continue;let U=$.delays.get(M.tid),D=typeof U=="number"?U/60:0,z=Math.max(0,u-M.ts);M.mvTs!==M.ts&&((!M.mvW||Math.hypot(M.w[0]-M.mvW[0],M.w[1]-M.mvW[1])>.025)&&(M.mvW=M.w,M.mvAt=M.ts),M.mvTs=M.ts),M.still=M.ts-(M.mvAt||M.ts);let Z=M.w,g=-1;if(w){let k=jt(w.pat),Y=k.stopD;if(M.dObs==null||M.obsAt!==M.ts){let it=Ve(k,M.w,-1,1e9);M.dObs=it.d,M.err=it.err,M.obsAt=M.ts}let ct=se(),wt=t.days.indexOf(ct.ymd),dt=w.day===wt-1?1440:0,bt=w.t0+w.pat.t[1]-dt;if(M.pre=ct.min+D<bt-1&&(M.dObs>Y[0]+.35||M.err>.6)&&!(M.st==="STOPPED_AT"&&M.sid===E[w.pat.stops[0]].id),M.dep0=bt,M.pre){if(M.atStop=-1,M.next=0,g=0,M.disp=null,M.prevAt!==M.ts&&(M.prevAt=M.ts,Object.assign(M,fu(w,M,ct.min,wt))),M.prevTr){let it=jt(M.prevTr.pat);Z=Ie(it,M.dPrev)}}else if(!ue()&&w){let it=se(),ce=t.days.indexOf(it.ymd),_e=w.day===ce-1?1440:0,Wt=Ts(w,it.min+_e-w.t0-D);Wt?(Z=Wt.w,M.est=!0,g=Wt.next,M.atStop=Wt.moving?-1:Wt.at,M.next=Wt.next,M.before=!1):(M.atStop=-1,M.next=-1)}else if(M.err<=.6){let it=Y.findIndex(Wt=>Wt>M.dObs+.08);it<0&&(it=Y.length-1);let ce=Y.reduce((Wt,He,Te)=>Math.abs(He-M.dObs)<Math.abs(Y[Wt]-M.dObs)?Te:Wt,0);M.atStop=Math.abs(Y[ce]-M.dObs)<.16?ce:-1;{let Wt=M.st==="STOPPED_AT"&&M.sid?w.pat.stops.findIndex(He=>E[He].id===M.sid):-1;Wt>=0&&Math.abs(Y[Wt]-M.dObs)<.6&&(M.atStop=Wt,it<=Wt&&(it=Math.min(Wt+1,Y.length-1)))}M.before=M.atStop>=0&&M.dObs<Y[M.atStop]-.15,M.next=it,g=it;let _e=M.dObs;if(M.st==="STOPPED_AT"&&M.atStop>=0)_e=Y[M.atStop];else if(it>0){let Wt=(w.pat.t[2*it]-w.pat.t[2*it-1])*60,He=Wt>0?(Y[it]-Y[it-1])/Wt:0,Te=se(),fe=t.days.indexOf(Te.ymd),Sn=w.day===fe-1?1440:0,Ze=pu(w,Y,Te.min+Sn-w.t0-D),Vi=M.dObs+He*Math.min(z,60);Ze!=null&&(Vi=Math.min(Vi,Math.max(M.dObs,Ze))),_e=Math.max(M.dObs,Math.min(Y[it]-.03,Vi))}M.disp==null||Math.abs(M.disp-_e)>1.2?M.disp=_e:_e>M.disp&&(M.disp+=(_e-M.disp)*Math.min(1,x*1.5)),Z=Ie(k,M.disp)}else if(M.err>2){let it=se(),ce=t.days.indexOf(it.ymd),_e=w.day===ce-1?1440:0,Wt=Ts(w,it.min+_e-w.t0-D);Wt&&(Z=Wt.w,M.est=!0,g=Wt.next),M.atStop=-1,M.next=Wt?Wt.next:-1}else M.atStop=-1,M.next=-1}let C=M.pre?"":M.st==="STOPPED_AT"&&M.atStop>=0||M.atStop>=0&&M.still>30?"st":M.still>=90&&M.atStop<0?"via":"";o.push({tr:w,v:M,w:Z,stop:C,p:{w:Z},fam:P||"?",c:w?w.c:q[P]||"#6b7385",dl:D,live:!0,real:!0,idx:g,age:z,cancel:U==="X"})}return o}let A=new Map,V=!1,et=!1,nt="",rt={st:-1},It=[],Gt=0,Rt=null,ut=null,Lt=-1,Kt=!1,Pe=0,te="";function Oe(o){let u=Pt>0||Ce()&&oe==null||!!ut,p=window.__mapHidden?1e3:u?50:250;if(o-Gt<p)return!1;Gt=o,[...ae()].join()!==me&&(Me(),Ee());{let g=b(),C=g?g.sn.t:"";L.cur=g,C!==L.key&&(L.key=C,we()),!g&&!se().live&&!ne.at&&oi()}let x=se(),M=Ce()&&x.live,w=M?{k:t.days.indexOf(x.ymd),out:_l()}:Zs(x);It=w.out;let P=new ge,U=0,D=0;for(let g of It){if(U>=mn)break;Ar[U*3]=g.p.w[0],Ar[U*3+1]=g.p.w[1],Ar[U*3+2]=B+.02;let C=null;if(g.real&&g.v.pre&&g.v.prevTr)C=Ie(jt(g.v.prevTr.pat),g.v.dPrev+.35);else if(g.real&&g.tr&&!g.v.pre&&g.v.err<=.6&&g.v.disp!=null&&!(g.v.st==="STOPPED_AT"&&g.v.atStop>=0))C=Ie(jt(g.tr.pat),g.v.disp+.35);else if(!g.real&&g.p.moving){let dt=g.tr.pat.t,bt=g.p.prev,it=dt[2*bt+1],ce=dt[2*bt+2],_e=ce>it?(g.rel-it)/(ce-it):1;C=Ys(g.tr.pat.segs[bt],Math.min(1,Da(y(_e,0,1))+.04))}let k=g.real?!!g.stop:!g.p.moving;if(g.broke=kf(g),g.broke)Xs[U]=85;else if(k)Xs[U]=75;else if(C){let dt=xl(g.p.w),bt=xl(C),it=bt[0]-dt[0],ce=bt[1]-dt[1];Xs[U]=Math.hypot(it,ce)>.05?Math.atan2(it,-ce):99}else Xs[U]=99;P.set(g.c||g.tr.c),Cr[U*3]=P.r,Cr[U*3+1]=P.g,Cr[U*3+2]=P.b;let Y=g.tr?g.tr===ut:ut&&ut.vtid===g.v.tid;Rr[U]=Y?22:r.dist<45?17:14,Ir[U]=Y?3.5:2.2;let ct=g.real&&g.stop==="via"||!!g.broke,wt=g.cancel||g.broke?[.86,.15,.15]:g.dl>10?[.86,.15,.15]:g.dl>5?[.92,.48,.05]:g.dl>=1?[.98,.8,.08]:[.09,.64,.29];(g.live&&g.dl>=5||Y||ct)&&(Es[D*3]=g.p.w[0],Es[D*3+1]=g.p.w[1],Es[D*3+2]=B+.01,Pa.set(Y?wt:ct?[.86,.15,.15]:[.98,.45,.09],D*3),La[D]=Rr[U]+(Y?16+5*Math.sin(o/220):ct?10+3*Math.sin(o/400):8),qs[D]=Y?2:3,D++),U++}if(yn.setDrawRange(0,U),Wn.setDrawRange(0,D),["position","fill","size","bw"].forEach(g=>{yn.attributes[g].needsUpdate=!0,Wn.attributes[g].needsUpdate=!0}),yn.attributes.ang.needsUpdate=!0,Rt){let g=It.find(C=>C.tr===Rt);if(g){let C=0,k=innerHeight,Y=d.style.display!=="none"&&!d.classList.contains("min")?d.getBoundingClientRect():null,ct=_("#rc").getBoundingClientRect();innerWidth<=640&&(Y&&(C=Y.bottom),k=Math.min(k,ct.top));let wt=C+(k-C)/2,dt=wt-innerHeight/2,bt=2*s.dist*Math.tan(17.5*Math.PI/180)/innerHeight;s.tx=g.p.w[0]-Math.sin(r.yaw)*dt*bt,s.ty=g.p.w[1]+Math.cos(r.yaw)*dt*bt}else Ce()&&se().live&&(Rt=null)}let z=at(Math.floor(x.min+1e-6));z!==te&&(te=z,_("#ctime").textContent=z),_("#ntr").textContent=String(It.length),_("#ntrl").textContent=M?__t(16):__t(17);{let g=K.size<H.length?[...K].sort(N).join(", "):"",C=_("#ccount"),k=L.cur?`\u23EA ${It.length}${__t(18)}${L.cur.sn.t} \xB7 ${Object.values(L.cur.sn.d).filter(Y=>Y>=60).length}${__t(19)}`:!x.live&&x.min<vt(new Date).min-1&&!Pt?`${__t(20)}${ne.hoy&&ne.hoy.snaps&&ne.hoy.snaps.some(Y=>Y.d)?`${__t(21)}${ne.hoy.snaps.find(Y=>Y.d).t}`:__t(22)}`:M&&!ue()?`\u{1F4F6} ${__t(1)} \xB7 ${__t(23)} ${is(Math.round((Date.now()-$.okVP)/6e4)+" min")} <small class="nopos">\xB7 ${__t(24)}</small>`:M&&!It.some(Y=>Y.real)&&Ga(K).length?`\u{1F4E1} ${__t(25)}${g?` <small>\xB7 ${m(g)}</small>`:""} <small class="nopos">\xB7 ${__t(26)}</small>`:`\u{1F686} ${It.length} ${M?__t(27):__t(28)}${g?` <small>\xB7 ${m(g)}</small>`:""}${M&&$.okVP?(()=>{let Y=Math.max(0,Math.round((Date.now()-$.okVP)/1e3));return` <small class="fresh${Y<3?" new":""}">\u25CF ${__t(29)}${is(Y+" s")}</small>`})():""}`;C&&C._t!==k&&(C.innerHTML=k,C._t=k)}{let g=_("#p");g&&g.classList.toggle("ttf",!x.live||!!Pt)}let Z=new Date;if(_("#cdate").textContent=x.live?__t(30):Pt?__t(31)+Pt:vi?__t(32):__t(33),w.k<0?_("#src").innerHTML=`${__t(34)}${Fe(t.days[0])}${__t(35)}${Fe(t.days[t.days.length-1])}${__t(36)}`:M?_("#src").textContent=`${ue()?__t(37):__t(38)}${is(Kh(Math.max(0,Date.now()/1e3-Math.max(...[...$.vp.values()].map(g=>g.ts),0))))}`:W()&&x.live?_("#src").innerHTML=__t(39):_("#src").innerHTML=__t(40)+($.url?__t(41):__t(42))+__t(43),x.live){let g=Math.round(x.min),C=_("#tsl");document.activeElement!==C&&(C.value=g<240?g+1440:g)}{let g=ut?String(ut.num||ut.vtid||""):"";g!==Oe._sk&&(Oe._sk=g,De(!0))}return De(),!Oe._sp&&(M||!x.live||W()||!$.url)&&(Oe._sp=1,window.__splashOff&&window.__splashOff()),o-Pe>3e3&&(ut||Lt>=0||Kt||et||nt)&&(Pe=o,Ne()),we(),!0}let un=-1,qe=(()=>{try{return localStorage.getItem("rod_mun")==="1"}catch{return!1}})(),Ye=[],on=document.createElement("button");on.type="button",on.id="mbtn",on.title=__t(44),on.innerHTML=__t(45),on.onclick=()=>{qe=!qe;try{localStorage.setItem("rod_mun",qe?"1":"")}catch{}on.classList.toggle("on",qe),a(),os()},on.classList.toggle("on",qe),document.body.appendChild(on);let Qt=I.slice().sort((o,u)=>u.pop-o.pop);function Dn(o){if(o._a)return o._a;let u=null,p=0;for(let x of o.rings||[]){let M=x[0];if(!M)continue;let w=0,P=0,U=0;for(let D=0,z=M.length;D<z;D+=2){let Z=M[D],g=M[D+1],C=M[(D+2)%z],k=M[(D+3)%z],Y=Z*k-C*g;w+=Y,P+=(Z+C)*Y,U+=(g+k)*Y}Math.abs(w)>p&&(p=Math.abs(w),u=[P/(3*w),U/(3*w)])}return o._a=u?[(u[0]-c)*l,(u[1]-h)*l]:[o.cx,o.cy]}let ze=o=>o>=1e5?1:o>=2e4?2:o>=5e3?3:4,Qn=[0,7.6,6.7,6,5.4],mi=[0,17,15,13,12],ki=o=>o.replace(/^(.*), (el|la|les|els|los|las)$/i,"$2 $1").replace(/^(.*), l'$/i,"l'$1");function os(){let o=s.tilt<.06&&r.tilt<.08;on.classList.toggle("show",o);let u=0;if(qe&&o){let p=[...document.querySelectorAll(".plab, .slab")].filter(w=>w.offsetParent!==null||w.style.display==="block").map(w=>{let P=w.getBoundingClientRect();return[P.left-2,P.top-2,P.right+2,P.bottom+2]}).filter(w=>w[2]>w[0]),x=r.dist,M=x>160?5e4:x>130?2e4:x>105?8e3:x>80?3e3:x>62?800:0;for(let w of Qt){let P=ze(w.pop);if(w.pop<M)break;let U=Dn(w);if(xn.set(U[0],U[1],B).project(n),Math.abs(xn.x)>1.02||Math.abs(xn.y)>1.02)continue;let D=(xn.x*.5+.5)*innerWidth,z=(-xn.y*.5+.5)*innerHeight,Z=ki(w.name),g=Z.length*Qn[P]+8,C=mi[P],k=[D-g/2,z-C/2,D+g/2,z+C/2];if(p.some(ct=>k[0]<ct[2]&&ct[0]<k[2]&&k[1]<ct[3]&&ct[1]<k[3]))continue;p.push(k);let Y=Ye[u]||(Ye[u]=Object.assign(document.createElement("div"),{className:"mlab"}));Y.isConnected||document.body.appendChild(Y),Y._n!==Z&&(Y.textContent=Z,Y._n=Z),Y._t!==P&&(Y.className="mlab t"+P,Y._t=P),Y.style.transform=`translate(${Math.round(D)}px,${Math.round(z)}px) translate(-50%,-50%)`,Y.style.display="block",u++}}for(;u<Ye.length;u++)Ye[u].style.display="none"}let ne={at:0,hoy:null,ayer:null,err:""},dn="https://raw.githubusercontent.com/elMonoAmelio/catalunya-survival/stats/";function oi(){Date.now()-ne.at<5*6e4||(ne.at=Date.now(),Promise.all(["hoy","ayer","hist"].map(o=>fetch(dn+o+".json",{cache:"no-store"}).then(u=>u.ok?u.json():null).catch(()=>null))).then(([o,u,p])=>{ne.hoy=o,ne.ayer=u,ne.hist=p,ne.tr=null,ne.err=o?"":__t(46),et&&(d._h="",Ne()),De(!0)}))}function en(o){let u={};for(let x of o&&o.snaps||[])for(let M of x.r||[]){let w=/^\d+[A-Z](\d+)/.exec(M);w&&(u[w[1]]=u[w[1]]||[]).push(Math.max(0,x.d&&x.d[M]||0)/60)}let p={};for(let x in u){let M=u[x].sort((w,P)=>w-P);p[x]=Math.round(M[M.length>>1])}return p}function gi(o){if(!ne.tr){let p=new Map;for(let x of ne.hist&&ne.hist.days||[])p.set(x.day,x.tr);for(let x of[ne.ayer,ne.hoy])if(x&&x.day&&!p.has(x.day)){let M=en(x);Object.keys(M).length&&p.set(x.day,M)}ne.tr=p}let u=[...ne.tr.values()].map(p=>p[String(o)]).filter(p=>p!=null);return u.length?{n:u.length,late:u.filter(p=>p>=5).length,avg:u.reduce((p,x)=>p+x,0)/u.length}:null}let Xn=o=>o>=90?"g":o>=80?"y":o>=65?"w":"b",_i={g:"#16a34a",y:"#eab308",w:"#ea7a0c",b:"#dc2626"},Nf=o=>o>10?_i.b:o>5?_i.w:o>=1?_i.y:_i.g,Js=o=>(o>=.05?"+":"")+(Math.round(o*10)/10).toString().replace(".",",")+" min";function Na(o,u,p){return`<div class="sbars">${o.map(x=>`<div class="sbar" title="${m(x.tip||"")}"><span class="sl">${x.lab}</span><span class="st"><i style="width:${Math.max(2,Math.round(x.w*100))}%;background:${x.c}"></i></span><b class="sv" style="color:${x.c===_i.y?"var(--svy,#a16207)":x.c===_i.w?"var(--svw,#c2410c)":x.c}">${x.val}</b></div>`).join("")}</div>`}function e0(o){if(o=(o||[]).filter(dt=>dt.n>=10),!o||o.length<2){let dt=o&&o[0];return dt?`${__t(47)}${dt.t}: ${Math.round(dt.ok/dt.n*100)}${__t(48)}${dt.n}${__t(49)}`:__t(50)}let u=dt=>{let[bt,it]=dt.t.split(":").map(Number);return bt*60+it},p=u(o[0]),x=Math.max(p+60,u(o[o.length-1])),M=300,w=112,P=24,U=dt=>P+(dt-p)*(M-P-8)/(x-p),D=dt=>8+(100-dt)/100*(w-26),z=dt=>dt.n?dt.ok/dt.n*100:100,Z=o.map(dt=>[U(u(dt)),D(z(dt)),dt]),g=dt=>dt[0].toFixed(1)+","+dt[1].toFixed(1),C=[],k=[];Z.forEach((dt,bt)=>{bt&&u(dt[2])-u(Z[bt-1][2])>45&&(C.push(k),k=[]),k.push(dt)}),C.push(k);let Y=Z[Z.length-1],ct=[];for(let dt=Math.ceil(p/180)*3;dt*60<x;dt+=3)dt*60>p+20&&ct.push(dt);let wt=Math.round(o.reduce((dt,bt)=>dt+bt.ok,0)/Math.max(1,o.reduce((dt,bt)=>dt+bt.n,0))*100);return`<svg class="schart" viewBox="0 0 ${M} ${w}${__t(51)}${[100,75,50,25].map(dt=>`<line x1="${P}" x2="${M-4}" y1="${D(dt)}" y2="${D(dt)}" class="gl"/><text x="2" y="${D(dt)+3}" class="ax">${dt}%</text>`).join("")}
      <line x1="${P}" x2="${M-4}" y1="${D(wt)}" y2="${D(wt)}" class="avg"/>
      ${C.filter(dt=>dt.length).map(dt=>`<polygon points="${g([dt[0][0],D(0)])} ${dt.map(g).join(" ")} ${g([dt[dt.length-1][0],D(0)])}" class="ar"/><polyline points="${dt.map(g).join(" ")}" class="ln"/>`).join("")}
      ${Z.map(([dt,bt,it])=>`<circle cx="${dt.toFixed(1)}" cy="${bt.toFixed(1)}" r="6" class="hit"><title>${it.t} \xB7 ${Math.round(z(it))}${__t(52)}${it.n}${__t(53)}${it.d5}${__t(54)}${Js(it.avg)}${it.nd?` \xB7 ${it.nd}${__t(55)}`:""}</title></circle>`).join("")}
      <circle cx="${Y[0].toFixed(1)}" cy="${Y[1].toFixed(1)}" r="3.5" class="pt"/><text x="${Math.min(Y[0],M-30).toFixed(1)}" y="${(Y[1]-7).toFixed(1)}" class="lv" text-anchor="middle">${Math.round(z(Y[2]))}%</text>
      ${ct.map(dt=>`<text x="${U(dt*60).toFixed(1)}" y="${w-4}" class="ax" text-anchor="middle">${String(dt).padStart(2,"0")}h</text>`).join("")}
      <text x="${P}" y="${w-4}" class="ax">${o[0].t}</text></svg><small class="snote">${__t(56)} (${wt}%)</small>`}function n0(){oi();let o=se(),u=It.filter(U=>U.real&&Ce()&&o.live),p=u.filter(U=>$.delays.has(U.v.tid)),x=p.length,M=u.length-x,w=`${__t(57)}`;if(x){let U=p.filter(bt=>bt.dl<3).length,D=p.filter(bt=>bt.dl>=5).length,z=p.filter(bt=>bt.stop==="via").length,Z=Math.round(U/x*100);w+=`${__t(58)}${x}${__t(59)}${M?` \xB7 ${M}${__t(64)}`:""}</small><div class="kpis">
        <div class="kpi ${Xn(Z)}"><b>${Z}${__t(60)}${Xn(100-D/x*100*2)}" title="${Math.round(D/x*100)}${__t(61)}${D}${__t(62)}${z===0?"g":z<=2?"w":"b"}"><b>${z}${__t(63)}`;let g=new Map;p.forEach(bt=>{let it=bt.fam,ce=g.get(it)||{n:0,ok:0,sum:0};ce.n++,ce.ok+=bt.dl<3,ce.sum+=Math.max(0,bt.dl),g.set(it,ce)});let C=[...g].filter(([bt])=>q[bt]).sort((bt,it)=>bt[1].ok/bt[1].n-it[1].ok/it[1].n||it[1].sum/it[1].n-bt[1].sum/bt[1].n),k=C.filter(([,bt])=>bt.ok<bt.n),Y=C.filter(([,bt])=>bt.ok===bt.n);w+=`${__t(65)}`+(k.length?"":__t(66))+Na(k.map(([bt,it])=>({lab:Nn(bt),w:it.ok/it.n,c:_i[Xn(it.ok/it.n*100)],val:`${Math.round(it.ok/it.n*100)}% <small>${Js(it.sum/it.n)}</small>`,tip:`${bt}: ${it.ok}${__t(67)}${it.n}${__t(68)}${Js(it.sum/it.n)}`})))+(Y.length?`${__t(69)}${Y.map(([bt])=>Nn(bt)).join(" ")}</p>`:"");let ct=new Map;p.forEach(bt=>{if(!bt.tr||bt.v.next==null||bt.v.next<0||bt.v.pre)return;let it=bt.tr.pat.stops[bt.v.next],ce=ct.get(it)||{n:0,sum:0};ce.n++,ce.sum+=Math.max(0,bt.dl),ct.set(it,ce)});let wt=[...ct].filter(([,bt])=>bt.sum/bt.n>=1).sort((bt,it)=>it[1].sum/it[1].n-bt[1].sum/bt[1].n).slice(0,8),dt=wt.length?wt[0][1].sum/wt[0][1].n:1;w+=`${__t(70)}`+(wt.length?Na(wt.map(([bt,it])=>({lab:`<span class="sn" data-gs="${bt}">${m(E[bt].n)}</span>`,w:it.sum/it.n/dt,c:Nf(it.sum/it.n),val:`${Js(it.sum/it.n)} <small>${it.n} ${it.n===1?"tren":__t(71)}</small>`,tip:`${E[bt].n}: ${it.n}${__t(72)}${Js(it.sum/it.n)}${__t(73)}`}))):__t(74))}else w+=`${__t(75)}`;let P=ne.hoy;w+=`<button type="button" class="hmore" data-cols>${cn.on?__t(76):__t(77)}</button>`;{Wa("");let U=[...wi.m].filter(([D,z])=>q[D]&&z[0]>=3).map(([D,z])=>[D,z[1]/z[0]]).sort((D,z)=>D[1]-z[1]);U.length&&!Ce()?w+=`<h4>${__t(78)}</h4><small class="snote">${__t(79)}</small>`:U.length&&(w+=`${__t(80)}`+Na(U.slice(0,8).map(([D,z])=>({lab:Nn(D),w:z,c:_i[Xn(z*100)],val:`${Math.round(z*100)}%`,tip:`${D}: ${Math.round(z*100)}${__t(81)}`}))))}{let U=(k,Y)=>{let ct=(k&&k.snaps||[]).filter(bt=>bt.n&&(!Y||bt.t<=Y)),wt=ct.reduce((bt,it)=>bt+it.n,0),dt=ct.reduce((bt,it)=>bt+it.ok,0);return wt?dt/wt*100:null},D=(ne.hoy&&ne.hoy.snaps||[]).filter(k=>k.n).map(k=>k.t).pop(),z=U(ne.hoy),Z=U(ne.ayer,D),g=z!=null?Math.round(z):null,C=Z!=null?Math.round(Z):null;z!=null&&(w+=`${__t(82)}${Xn(z)}">${Math.round(z)}${__t(83)}${Z!=null?`<span>${D?__t(84):__t(85)} <b class="${Xn(Z)}">${C} %</b></span><span>${g>C?__t(86):g<C?__t(87):__t(88)}</span>`:""}</div>`)}if(w+=`${__t(89)}`,P&&P.snaps){w+=e0(P.snaps);let U=Object.entries(P.st||{}).map(([Z,g])=>[qt.get(Z),g]).filter(([Z,g])=>Z!=null&&g.n>=3).map(([Z,g])=>[Z,g.sum/g.n/60,g]).filter(Z=>Z[1]>=1).sort((Z,g)=>g[1]-Z[1]).slice(0,8);if(U.length){let Z=U[0][1];w+=`${__t(90)}`+Na(U.map(([g,C,k])=>({lab:`<span class="sn" data-gs="${g}">${m(E[g].n)}</span>`,w:C/Z,c:Nf(C),val:`${Js(C)}${__t(91)}${Math.round(k.max/60)}</small>`,tip:`${E[g].n}: ${k.n}${__t(92)}${k.d5}${__t(93)}${Math.round(k.max/60)} min`})))}let D=Object.entries(P.lines||{}).filter(([Z,g])=>q[Z]&&g.n>=3).sort((Z,g)=>Z[1].ok/Z[1].n-g[1].ok/g[1].n);D.length&&(w+=`${__t(94)}`+Na(D.map(([Z,g])=>({lab:Nn(Z),w:g.ok/g.n,c:_i[Xn(g.ok/g.n*100)],val:`${Math.round(g.ok/g.n*100)}% <small>${Js(g.sum/g.n/60)}</small>`,tip:`${Z}${__t(95)}${Math.round(g.ok/g.n*100)}${__t(96)}${Math.round(g.max/60)} min`}))));let z=P.upd?(Date.now()-Date.parse(P.upd))/6e4:0;w+=`<small class="snote">${z>40?`${__t(98)}${is(z<90?Math.round(z)+" min":z<2160?Math.round(z/60)+" h":Math.round(z/1440)+(window.__L==="en"?" days":window.__L==="ca"?" dies":" d\xEDas"))}${__t(99)}`:""}${__t(97)}${m((P.upd||"").slice(11,16))} \xB7 ${(P.note||"").includes("Solo cuentan")?__t(100):__t(101)}</small>`}else w+=`<p class="snote">${ne.at?__t(102):__t(103)}</p>`;return w+"</div>"}function i0(o){let u=se(),p=It.filter(C=>(C.fam||C.tr&&C.tr.fam)===o),x=p.filter(C=>C.real),M=p.length,w=p.filter(C=>C.dl>=5).length,P=p.filter(C=>C.dl<3).length,U=p.filter(C=>C.stop==="via"||C.broke).length,D=$.alerts.filter(C=>C.fams.has(o)),z=C=>{let k=C.tr;if(!k)return"";let Y=C.v;if(C.real&&Y){let wt=Y.next>=0?E[k.pat.stops[Y.next]].n:"";return Y.atStop>=0?`${__t(104)}${E[k.pat.stops[Y.atStop]].n}`:wt?`${__t(105)}${wt}`:""}let ct=C.p;return ct&&ct.next!=null&&ct.next>=0?`${__t(105)}${E[k.pat.stops[ct.next]].n}`:""},Z=p.slice().sort((C,k)=>k.dl-C.dl).slice(0,40).map(C=>{let k=C.tr;return`<li class="go${Ba({num:k?k.num:C.v.num,tid:k?k.tid:C.v.tid})?" sel":""}" data-gt="${m(k?k.num:C.v.num)}|${m(C.real?C.v.tid:k?k.tid:"")}"><b>${m(k?k.num:C.v.num)}</b><span>${k?zi(E[k.pat.stops[k.pat.stops.length-1]].n,o):""} <small>${m(z(C))}</small></span>${C.dl>=1?`<em class="dl ${$i(C.dl)}">+${Math.round(C.dl)}</em>`:__t(106)}</li>`}).join(""),g=Wa(o);return`<div class="tc sts" style="--c:${q[o]||"#1d2330"}"><button class="x" data-cx>\xD7</button><h3>${Nn(o)}${__t(107)}${u.live?`${__t(113)}${M}${__t(114)}${x.length<M?` (${x.length}${__t(115)}`:""}`:`${__t(116)}${at(u.min)}`}</small>
      <div class="kpis"><div class="kpi ${M?Xn(P/M*100):""}"><b>${M?Math.round(P/M*100)+"%":"\u2014"}${__t(108)}${w?w/Math.max(1,M)>.2?"b":"w":"g"}"><b>${w}${__t(109)}${U?"b":"g"}"><b>${U}${__t(110)}${D.length?s0(D):__t(117)}${g<.7?`${__t(118)}${Math.round(g*100)}${__t(119)}`:""}${__t(111)}${Z||__t(120)}${__t(112)}`}let s0=o=>`<div class="al">${o.slice(0,3).map(u=>`<p>\u26A0\uFE0F ${za(u)} ${m(u.txt)} <small>${$a(u)}</small></p>`).join("")}</div>`,cn={on:!1,mesh:null};function Uf(){let o=ne.hoy,u=[];if(o&&o.st)for(let[p,x]of Object.entries(o.st)){let M=qt.get(p);M!=null&&x.n>=2&&u.push([M,x.sum/x.n/60,x.n])}if(!u.length){let p=new Map;It.forEach(x=>{if(!x.real||!x.tr||x.v.next==null||x.v.next<0||x.v.pre||!$.delays.has(x.v.tid))return;let M=x.tr.pat.stops[x.v.next],w=p.get(M)||[0,0];w[0]+=Math.max(0,x.dl),w[1]++,p.set(M,w)}),p.forEach((x,M)=>u.push([M,x[0]/x[1],x[1]]))}return u}let Ff=()=>Math.min(1,Math.max(.22,r.dist/110));function r0(){if(!cn.mesh||!cn.d)return;let o=Ff();if(Math.abs(o-cn.r)<.04)return;cn.r=o;let u=new $e;cn.d.forEach(([p,x],M)=>{u.makeScale(o,o,.3+Math.min(x,40)*.3),u.setPosition(E[p].w[0],E[p].w[1],B),cn.mesh.setMatrixAt(M,u)}),cn.mesh.instanceMatrix.needsUpdate=!0,a()}function a0(){if(cn.mesh&&(e.remove(cn.mesh),cn.mesh.geometry.dispose(),cn.mesh.material.dispose(),cn.mesh=null),!cn.on){a();return}let o=Uf();if(!o.length){ln(__t(121)),cn.on=!1;return}let u=new Ro(.32,.32,1,16);u.rotateX(Math.PI/2),u.translate(0,0,.5);let p=new ur({fog:!1}),x=new Eo(u,p,o.length),M=new $e,w=new ge;cn.d=o,cn.r=Ff(),o.forEach(([P,U],D)=>{let z=.3+Math.min(U,40)*.3;M.makeScale(cn.r,cn.r,z),M.setPosition(E[P].w[0],E[P].w[1],B),x.setMatrixAt(D,M),w.set(U>10?"#dc2626":U>5?"#ea7a0c":U>=1?"#eab308":"#16a34a"),x.setColorAt(D,w)}),x.renderOrder=25,x.frustumCulled=!1,e.add(x),cn.mesh=x,s.tilt<.5&&(s.tilt=.85),a()}let Dr=document.createElement("button");Dr.type="button",Dr.id="sbtn",Dr.title=__t(122),Dr.innerHTML=__t(123),Dr.onclick=()=>{et=!et,et&&(V=Kt=!1,ne.at=0),d._h="",Ne(),a()},document.body.appendChild(Dr);function o0(){r.dist<45!=un<45&&(un=r.dist,Ee()),r0(),l0(),os()}let ls=[],xn=new X;function l0(){let o=0;if(cn.on){let p=Uf().sort((M,w)=>w[1]-M[1]),x=[];for(let[M,w]of p){if(o>=30)break;if(xn.set(E[M].w[0],E[M].w[1],B).project(n),xn.z>1||Math.abs(xn.x)>1||Math.abs(xn.y)>1)continue;let P=(xn.x*.5+.5)*innerWidth,U=(-xn.y*.5+.5)*innerHeight;if(x.some(([z,Z])=>Math.abs(z-P)<90&&Math.abs(Z-U)<18))continue;x.push([P,U]);let D=ls[o]||(ls[o]=Object.assign(document.createElement("div"),{className:"slab"}));D.isConnected||document.body.appendChild(D),D.textContent=E[M].n+" +"+Math.round(w)+"\u2032",D.dataset.i=M,D.style.display="block",D.style.transform=`translate(${Math.round(P+8)}px,${Math.round(U-8)}px)`,o++}for(;o<ls.length;o++)ls[o].style.display="none";return}if(r.dist<30){let p=[];for(let x=0;x<xt;x++)Et[x]<4||(xn.set(E[x].w[0],E[x].w[1],B).project(n),!(xn.z>1||Math.abs(xn.x)>1.05||Math.abs(xn.y)>1.05)&&p.push([x,(xn.x*.5+.5)*innerWidth,(-xn.y*.5+.5)*innerHeight]));if(p.length<=70)for(let[x,M,w]of p){let P=ls[o]||(ls[o]=Object.assign(document.createElement("div"),{className:"slab"}));P.isConnected||document.body.appendChild(P),P.textContent=E[x].n,P.dataset.i=x,P.style.display="block",P.style.transform=`translate(${Math.round(M+8)}px,${Math.round(w-7)}px)`,o++}}for(;o<ls.length;o++)ls[o].style.display="none"}function xl(o){return xn.set(o[0],o[1],B).project(n),[(xn.x*.5+.5)*innerWidth,(-xn.y*.5+.5)*innerHeight,xn.z]}function Of(o,u,p,x){let M=null,w=p*p;for(let P of It){let[U,D,z]=xl(P.p.w);if(z>1)continue;let Z=(U-o)**2+(D-u)**2;Z<w&&(w=Z,M={a:P})}if(M)return M;w=x*x;for(let P=0;P<xt;P++){if(!Et[P])continue;let[U,D,z]=xl(E[P].w);if(z>1)continue;let Z=(U-o)**2+(D-u)**2;Z<w&&(w=Z,M={s:P})}return M}let js=!1;window.__rodHide=()=>{js=!0},document.addEventListener("click",o=>{js&&!o.target.closest("#mcs, canvas")&&(js=!1)},!0),window.__rodTap=(o,u)=>{let p=null,x=1e9;for(let w of ls){if(w.style.display==="none")continue;let P=w.getBoundingClientRect();if(o>=P.left-4&&o<=P.right+4&&u>=P.top-4&&u<=P.bottom+4){let U=Math.abs(u-(P.top+P.bottom)/2)*4+(o-P.left);U<x&&(x=U,p=w)}}if(p)return window.__rodPickStation(+p.dataset.i),!0;let M=Of(o,u,24,18);return M&&(M.a||M.s!=null)&&(js=!1),M&&(M.a||M.s!=null)&&(rt.st=-1),M&&M.a?(V=!1,Kt=!1,et=!1,ut=M.a.tr||{vtid:M.a.v.tid},Lt=-1,Rt=null,Ee(),Ne(),Gt=0,a(),!0):M&&M.s!=null?(V=!1,Kt=!1,et=!1,Lt=M.s,ut=null,Rt=null,Ee(),Ne(),a(),!0):!1},window.__rodHover=(o,u)=>{let p=Of(o,u,14,10);if(p&&p.a){let x=p.a,M=x.tr?E[x.tr.pat.stops[x.tr.pat.stops.length-1]].n:"";return`<b><span style="color:${x.c}">\u25A0</span> ${m(x.fam||x.tr&&x.tr.fam||"?")}${__t(124)}${m(x.tr?x.tr.num:x.v.num)}</b><small>${M?__t(105)+m(M):""}${x.real?(x.dl>=1?` \xB7 <b style="color:#c2410c">+${Math.round(x.dl)} min</b>`:__t(125))+__t(126):__t(127)}</small>`}return p&&p.s!=null?`<b>${m(E[p.s].n)}</b><small>${[...E[p.s].fams].sort(N).join(" \xB7 ")}</small>`:null},window.__rodPickStation=o=>{rt.st=-1,js=!1,V=Kt=et=!1,ut=null,Rt=null,Lt=o,Ee(),d._h="",Ne(),a()};{let o=_("#rc"),u=()=>{let p=o.getBoundingClientRect().top;document.documentElement.style.setProperty("--mcsmax",Math.max(160,p-64-10)+"px")};try{new ResizeObserver(u).observe(o)}catch{}addEventListener("resize",u),setTimeout(u,300)}if("serviceWorker"in navigator&&location.protocol==="https:"){let o=!1,u=!!navigator.serviceWorker.controller;navigator.serviceWorker.addEventListener("controllerchange",()=>{if(!u||o)return;let p=((_("#ver")||{}).textContent||"").match(/\d+\.\d+/);fetch("./sw.js",{cache:"no-store"}).then(x=>x.text()).then(x=>{let M=(x.match(/VERSION = 'cs-(\d+\.\d+)'/)||[])[1];M&&p&&M!==p[0]&&!o&&(o=!0,location.reload())}).catch(()=>{})}),navigator.serviceWorker.register("./sw.js").then(p=>{p.update().catch(()=>{}),document.addEventListener("visibilitychange",()=>{document.hidden||p.update().catch(()=>{})})}).catch(()=>{})}setTimeout(()=>{try{oi()}catch{}},2500),setInterval(()=>{try{ne.at=0,oi()}catch{}},15*6e4);let ti={mode:(()=>{try{return localStorage.getItem("rod_theme")||"auto"}catch{return"auto"}})()},Ua=matchMedia("(prefers-color-scheme: dark)");function vl(){let o=ti.mode==="dark"||ti.mode==="auto"&&Ua.matches;document.documentElement.classList.toggle("dark",o);for(let p=0;p<xt;p++)Zt.set(o?[.06,.08,.11]:[1,1,1],p*3);Ut.attributes.fill.needsUpdate=!0,ee.uniforms.border.value.set(o?"#e7ebf3":"#1d2330"),window.__mapTheme&&window.__mapTheme(o),Ks.textContent=ti.mode==="auto"?o?"\u{1F319}":"\u2600\uFE0F":ti.mode==="dark"?"\u{1F319}":"\u2600\uFE0F",Ks.title=__t(128)+{auto:__t(129),dark:__t(130),light:"desactivado"}[ti.mode];let u=document.querySelector("meta[name=theme-color]");u&&(u.content=o?"#0d1119":"#eef1f5"),a()}let Ks=document.createElement("button");Ks.type="button",Ks.id="tbtn",Ks.onclick=()=>{ti.mode=ti.mode==="auto"?Ua.matches?"light":"dark":ti.mode==="dark"?"light":"dark",ti.mode==="dark"===Ua.matches&&(ti.mode="auto");try{localStorage.setItem("rod_theme",ti.mode)}catch{}vl(),ln(Ks.title)},document.body.appendChild(Ks);{let o=document.createElement("a");o.id="wabtn",o.href="https://www.whatsapp.com/channel/0029Vav4hGTId7nPenKMuo2C",o.target="_blank",o.rel="noopener",o.title=__t(131),o.innerHTML=__t(132),document.body.appendChild(o)}Ua.addEventListener&&Ua.addEventListener("change",vl),vl(),window.__rodTick=Oe,window.__rodFrame=o0,window.__rodResize=()=>{Ft.resolution.set(innerWidth,innerHeight),gt.resolution.set(innerWidth,innerHeight)},window.__rodResize();let xi={st:-1,f:new Set},Bf=o=>{let u=[...E[o].fams].sort(N);return`<div class="sfc">${u.length>1?`<button type="button" data-sf="" class="${xi.f.size?"":"on"}${__t(133)}`:""}${u.map(p=>`<button type="button" data-sf="${m(p)}" class="ln ${xi.f.size&&!xi.f.has(p)?"off":""}${K.has(p)?"":" hid"}" style="--c:${q[p]}">${m(p)}</button>`).join("")}</div>${u.some(p=>!K.has(p))?__t(134):""}`},c0=o=>{let u=(o||"#6b7385").replace("#",""),p=parseInt(u.slice(0,2),16),x=parseInt(u.slice(2,4),16),M=parseInt(u.slice(4,6),16);return(.299*p+.587*x+.114*M)/255>.62?"#1d2330":"#fff"},zi=(o,u)=>{let p=q[u]||"#6b7385";return`<span class="dst" style="background:${p};color:${c0(p)}" title="${m(u||"")}">${m(o)}</span>`},yl=o=>{let u=E[o]&&E[o].id;return je.st.includes(u)?"\u{1F3E0} ":We.st.includes(u)?"\u{1F4BC} ":""},$i=o=>o>10?"d-hi":o>5?"d-md":"d-lo",h0=/aver[ií]|incid[eè]ncia t[eè]cnica|incidencia t[eé]cnica|problema t[eè]cnic|t[eè]cnic[oa] del propi/i,Fa={ref:null,m:new Map};function mu(o){if(Fa.ref!==$.alerts){Fa.ref=$.alerts,Fa.m=new Map;for(let u of $.alerts){if(u.src!=="Rodalies")continue;let p=u.txt.match(/(?:a causa d[e']|per causa d[e']|debido a|degut a|due to|because of|caused by)\s+([^.]{4,140})/i);for(let x of(u.es||u.txt).matchAll(/\b[Tt]ren\s+(\d{4,6})\b/g))Fa.m.set(x[1],{why:p?p[1].trim().replace(/\s+/g," "):"",txt:u.txt,when:u.when,cx:/no circula|no circular[àa]|suprimi|anul[·.]?la|cancel[·.]?la|anulad|cancelad/i.test(u.es||u.txt)})}}return Fa.m.get(String(o))||null}let Oa={ref:null,m:new Map};function kf(o){let u=String(o.tr?o.tr.num:o.v&&o.v.num||"");if(!u)return null;if(Oa.ref!==$.alerts){Oa.ref=$.alerts,Oa.m=new Map;for(let x of $.alerts)if(x.src==="Rodalies"&&h0.test(x.es||x.txt))for(let M of(x.es||x.txt).matchAll(/\b(\d{4,6})\b/g))Oa.m.set(M[1],x)}let p=Oa.m.get(u);return p?{why:"aviso",txt:p.txt}:o.real&&o.stop==="via"&&o.v.still>=300?{why:"via",min:Math.round(o.v.still/60)}:null}let Ba=o=>{try{let u=ut;return u?u.num!=null&&String(u.num)===String(o.num)||o.tid&&(u.tid===o.tid||u.vtid===o.tid):!1}catch{return!1}},zf=(o,u)=>{let p=T(o,u.min-1,u.min+240).sort((x,M)=>x.est-M.est).slice(0,6);return p.length?`${__t(135)}${p.map(x=>`<li><b>${at(x.est)}</b>${Nn(x.fam)}<span>${zi(x.dest,x.fam)}</span><i class="via">bus</i></li>`).join("")}</ol>`:""},bi=(()=>{try{return JSON.parse(localStorage.getItem("rod_fav")||"[]")}catch{return[]}})(),u0=()=>{try{localStorage.setItem("rod_fav",JSON.stringify(bi))}catch{}},$f=o=>!!o&&bi.some(u=>u.num===String(o.num)),Be=(()=>{try{let o=JSON.parse(localStorage.getItem("rod_alarm")||"null");return o&&Date.now()-o.at<4*36e5?o:null}catch{return null}})(),As=()=>{try{localStorage.setItem("rod_alarm",JSON.stringify(Be))}catch{}},Sl=(o,u)=>!!(Be&&o&&Be.num===String(o.num)&&Be.sid===E[o.pat.stops[u]].id);function Ml(o,u){try{window.__vib?window.__vib():navigator.vibrate&&navigator.vibrate([400,150,400,150,600])}catch{}ln(o+" \xB7 "+u),document.hidden&&"Notification"in window&&Notification.permission==="granted"&&(navigator.serviceWorker&&navigator.serviceWorker.getRegistration?navigator.serviceWorker.getRegistration():Promise.resolve(null)).then(p=>p?p.showNotification(o,{body:u,tag:"alarm",requireInteraction:!0,vibrate:[400,150,400,150,600],icon:"icons/icon-192.png"}):new Notification(o,{body:u})).catch(()=>{})}function d0(){if(!Be||Be.done)return;let o=se();if(!o.live)return;let u=t.days.indexOf(o.ymd),p=(Q[u]||[]).find(D=>String(D.num)===Be.num)||(Q[u-1]||[]).find(D=>String(D.num)===Be.num);if(!p)return;let x=p.pat.stops.findIndex(D=>E[D].id===Be.sid);if(x<0)return;let M=tt(p),w=typeof M=="number"?Math.max(0,M/60):0,P=p.day===u-1?1440:0,U=p.t0+p.pat.t[2*x]+w-P;if(U-o.min<-3){Be.done=!0,As();return}if(window.__schedAt&&U-2-o.min>.1&&(Be.sch==null||Math.abs(Be.sch-U)>=.5)&&(Be.sch=U,Be.nat=Date.now()+(U-2-o.min)*6e4,As(),window.__schedAt(7701,`${__t(136)}${E[p.pat.stops[x]].n}`,__t(137)+` (${at(U)})`,Date.now()+(U-2-o.min)*6e4)),U-o.min<=2){Be.done=!0,As();let D=Math.round(U-o.min),z=D>=1?`${__t(139)} ${D}${__t(138)}${at(U)}) \xB7 ${__t(140)}`:`${__t(141)} (${at(U)}) \xB7 ${__t(140)}`;window.__schedAt&&Be.nat&&Date.now()>=Be.nat-2e4?document.hidden||Ml(`${__t(136)}${E[p.pat.stops[x]].n}`,z):(window.__schedOff&&window.__schedOff(7701),Ml(`${__t(136)}${E[p.pat.stops[x]].n}`,z))}}function gu(o,u){let p=+o.t.slice(0,2)*60+ +o.t.slice(3,5),x=Q[u]||[],M=(U,D)=>U.t0+U.pat.t[2*D+1],w=null,P=11;for(let U of x){let D=U.pat.stops.findIndex(Z=>E[Z].id===o.sid);if(D<0||D===U.pat.stops.length-1)continue;let z=Math.abs(M(U,D)-p)+(String(U.num)===o.num?-5:0)+(U.fam===o.fam?0:20)+(o.dest&&E[U.pat.stops[U.pat.stops.length-1]].id!==o.dest?3:0);z<P&&(P=z,w=U)}return w}let bl=new Set;function f0(){if(!bi.length)return;let o=se();if(!o.live)return;let u=t.days.indexOf(o.ymd);for(let p of bi){let x=gu(p,u);if(!x)continue;let M=x.pat.stops.findIndex(Z=>E[Z].id===p.sid);if(M<0)continue;let w=x.t0+x.pat.t[2*M+1],P=tt(x),U=typeof P=="number"?P/60:0,D=w-o.min;if(D<-2||D>60)continue;let z=o.ymd+p.num+(P==="X"?"X":U>=10?10:U>=5?5:0);bl.has(z)||(P==="X"||U>=5?(bl.add(z),Ml(`${__t(142)}${at(w)} ${P==="X"?__t(143):`${__t(144)}${Math.round(U)} min`}`,`${x.fam} ${x.num}${__t(145)}${E[x.pat.stops[M]].n}${P==="X"?"":`${__t(146)}${at(w+U)}`}`)):D<=20&&!bl.has(o.ymd+p.num+"ok")&&$.vp.has(x.tid)&&(bl.add(o.ymd+p.num+"ok"),ln(`${__t(142)}${at(w)}${__t(147)}`)))}}setInterval(()=>{try{d0(),f0()}catch{}},15e3);let Nn=o=>`<span class="ln" style="--c:${q[o]}">${m(o)}</span>`;{let o=p=>{let x=/^#?([0-9a-f]{6})$/i.exec(p||"");return x?[0,2,4].map(M=>{let w=parseInt(x[1].slice(M,M+2),16)/255;return w<=.03928?w/12.92:Math.pow((w+.055)/1.055,2.4)}).reduce((M,w,P)=>M+w*[.2126,.7152,.0722][P],0):0},u=[...new Set(Object.values(q))].filter(p=>o(p)>.3).map(p=>`.ln[style*="--c:${p}"],[data-f][style*="--c:${p}"].on,[data-f][style*="--c:${p}"]:not(.off){color:#14203a!important}`).join("");if(u){let p=document.createElement("style");p.textContent=u,document.head.appendChild(p)}}function Vf(o,u){return u?o==="X"?__t(149):o>=60?`<span class="st late ${$i(o/60)}${__t(150)}${Math.round(o/60)} min</span>`:__t(151):__t(148)}function _u(){if(!d.classList.contains("peek")||window.__mapHidden||!d.getClientRects().length)return;let o=d.querySelector(".tc");if(!o)return;let u=o.querySelector(".st")||o.querySelector("p"),p=d.getBoundingClientRect().top-d.scrollTop,x=u?u.getBoundingClientRect().bottom-p+3:150;if(u){let M=u.nextElementSibling||u.parentElement!==o&&u.parentElement.nextElementSibling;M&&(x=Math.min(x,M.getBoundingClientRect().top-p-1))}d.style.setProperty("--peekh",Math.round(Math.min(280,Math.max(110,x)))+"px")}function cs(){try{let o=d,u=document.getElementById("rcgrab"),p=document.getElementById("z");if(!o||!Xe.on||Xe.cur!=="map"||o.classList.contains("peek")||!o.getClientRects().length||!u||!u.getClientRects().length){o&&o._fit&&(["max-height","bottom","height","right","width"].forEach(g=>o.style.removeProperty(g)),o._fit=0);return}let M=o.getBoundingClientRect().top,w=u.getBoundingClientRect().top-8,P=Math.max(140,Math.floor(w-M)),U=p&&p.getClientRects().length?p.getBoundingClientRect():null,D=U?Math.max(10,Math.ceil(innerWidth-U.left+8)):10;o._fit=P+"|"+D;let z=o.style,Z={"max-height":P+"px",height:"auto",bottom:"auto",width:"auto",right:D+"px"};for(let g in Z)(z.getPropertyValue(g)!==Z[g]||z.getPropertyPriority(g)!=="important")&&z.setProperty(g,Z[g],"important")}catch{}}setInterval(()=>{Xe.on&&Xe.cur==="map"&&cs()},700);try{new MutationObserver(()=>cs()).observe(d,{attributes:!0,attributeFilter:["style","class"]})}catch{}window.__fitMcs=cs;try{localStorage.removeItem("rod_dbg")}catch{}if(/[?&]dbg=1/.test(location.search)){let o=document.createElement("pre");o.id="dbgbox",o.style.cssText="position:fixed;left:4px;top:4px;z-index:999;background:rgba(0,0,0,.85);color:#0f0;font:11px/1.25 monospace;padding:6px;margin:0;pointer-events:none;max-width:70vw;white-space:pre-wrap",document.body.appendChild(o),setInterval(()=>{try{let u=x=>{let M=document.querySelector(x);if(!M||!M.getClientRects().length)return"\u2014";let w=M.getBoundingClientRect();return[w.left,w.top,w.right,w.bottom].map(Math.round).join(",")},p=getComputedStyle(d);o.textContent=`v ${document.title.slice(0,0)}${(document.getElementById("ver")||{}).textContent||""}
inner ${innerWidth}x${innerHeight} vv ${window.visualViewport?Math.round(visualViewport.height):"-"}
tab ${Xe.on?Xe.cur:"off"} peek ${d.classList.contains("peek")}
mcs ${u("#mcs")}
tc ${u("#mcs .tc")}
rc ${u("#rcgrab")} z ${u("#z")}
maxH ${p.maxHeight} ov ${p.overflowY}
fit ${d._fit||0}
inl ${d.style.cssText.slice(0,160)}`}catch(u){o.textContent="err "+u.message}},1e3)}addEventListener("resize",()=>setTimeout(cs,80));try{new ResizeObserver(()=>cs()).observe(document.getElementById("rcgrab")||document.body)}catch{}window.visualViewport&&visualViewport.addEventListener("resize",()=>setTimeout(cs,80));function Ne(){try{p0()}finally{requestAnimationFrame(cs),window.__rodTabSync&&window.__rodTabSync();try{_u()}catch{}}}function p0(){if(!ut&&Lt<0&&!Kt&&!V&&!et&&!nt){js=!1,d.innerHTML="",d._h="",d.style.display="none",d.classList.remove("peek"),wu();return}let o=se(),u="",p=Ce()&&o.live,x=(g,C)=>$.alerts.filter(k=>[...k.fams].some(Y=>g.has(Y))||C!=null&&k.stops.has(C)),M=g=>g.length?`<div class="al">${g.slice(0,4).map(C=>`<p>\u26A0\uFE0F ${za(C)} ${[...C.fams].sort(N).slice(0,6).map(Nn).join(" ")} ${m(C.txt)} <small>${$a(C)}</small></p>`).join("")}${g.length>4?`<small>y ${g.length-4}${__t(152)}`:""}</div>`:"",w=ut&&p?It.find(g=>g.real&&(ut.vtid?g.v.tid===ut.vtid:g.tr===ut)):null;if(nt&&!et&&!V&&!Kt&&!ut&&Lt<0)u=i0(nt);else if(et)u=n0();else if(V)u=`${__t(153)}${m(_("#ver").firstChild.textContent)}</small><ul class="chg">${_("#chg").innerHTML||__t(155)}${__t(154)}`;else if(Kt){let g=$.alerts.filter(C=>[...C.fams].some(k=>K.has(k))||!C.fams.size);u=`${__t(156)}${g.length}${__t(157)}${g.map(C=>`<div class="al"><p>${za(C)} ${[...C.fams].sort(N).map(Nn).join(" ")} <small>${$a(C)}</small></p><p>${m(C.txt)}</p></div>`).join("")||__t(159)}${__t(158)}${$.alertsTs&&Date.now()/1e3-$.alertsTs<6*3600?__t(160):`${__t(161)}${$.alertsTs?new Date($.alertsTs*1e3).toLocaleDateString("es-ES",{day:"numeric",month:"short"}):"\u2014"}`}</small></div>`}else if(w){let g=w.v,C=w.tr,k=Te=>m(E[C.pat.stops[Te]].n),Y=C?C.pat.stops.length:0,ct=qt.get(g.sid),wt=ct!=null?m(E[ct].n):m(g.sid),dt=C&&g.atStop>=0?k(g.atStop):"",bt=C&&g.next>=0?k(g.next):wt,it=C&&g.next>0?k(g.next-1):"",ce=w.broke||kf(w),_e=ce?`<b class="stopv">\u26A0\uFE0F ${ce.why==="aviso"?__t(162):`${__t(163)}${ce.min} min`}</b>${C&&it?`${__t(164)}${it}${__t(165)}${bt}</b>`:""}`:w.stop==="via"&&C?`${__t(166)}${it?`${__t(168)}${it}${__t(165)}${bt}</b>`:`${__t(169)}${bt}</b>`}${__t(167)}${Math.max(1,Math.round(g.still/60))} min`:g.pre&&C?g.prevTr?`${__t(170)}${m(g.prevTr.num)}${__t(171)}${k(0)}</b>${g.prevDl>=1?`${__t(174)}${Math.round(g.prevDl)} min</b>`:""}${__t(172)}${at(g.arrO)}${__t(173)}${at(g.depEst)}</b>${g.preDl>=1?`${__t(175)}${at(g.dep0)})`:""}`:`${__t(176)}${k(0)}${__t(177)}${at(g.dep0+w.dl)}</b>`:dt&&g.before?`Llegando a <b>${dt}</b>`:(g.st==="STOPPED_AT"||w.stop==="st")&&dt?`${__t(178)}${dt}</b>`:dt&&g.next>=0&&g.atStop!==g.next?`${__t(179)}${dt}${__t(171)}${bt}</b>`:it?`${__t(180)}${it}${__t(165)}${bt}</b>`:`${__t(181)}${bt}</b>`,Wt=C&&g.next>=0&&!g.pre?at(Xa(C,g,g.next,C.t0+C.pat.t[2*g.next]+w.dl)):"",He=[];if(C){let Te=w.idx>=0?w.idx:0,fe=g.pre?Math.max(w.dl,g.preDl||0):w.dl,Sn=Ze=>C.t0+C.pat.t[Ze]+fe;for(let Ze=Te;Ze<Y;Ze++)He.push(`<li class="${yl(C.pat.stops[Ze])?"mine":""}${Sl(C,Ze)?" alm":""}"><b>${at(Xa(C,g,Ze,Sn(Ze===0?1:2*Ze)))}</b><span title="${k(Ze)}">${yl(C.pat.stops[Ze])}${k(Ze)}</span>${fe>=1?`<em class="dl ${$i(fe)}">${g.pre?"\u2248":""}+${Math.round(fe)}</em>`:""}${Ze>0?`<button type="button" class="abtn" data-alarm="${Ze}" title="${__t(182)}">${Sl(C,Ze)?"\u{1F514}":"\u{1F515}"}</button>`:""}</li>`)}u=`<div class="tc" style="--c:${w.c}"><button class="x" data-cx>\xD7</button><div>${Nn(w.fam)}${__t(183)}${m(C?C.num:g.num)}${__t(184)}${C?`<h3 class="rt"><span class="o" title="${k(0)}">${k(0)}</span><span class="ar">\u2192</span>${zi(E[C.pat.stops[Y-1]].n,C.fam)}</h3>`:""}
        <p>${_e}${Wt?`${__t(185)}${Wt}`:""}${g.plat&&g.st==="STOPPED_AT"&&dt?`${__t(186)}${m(g.plat)}</b>`:""}</p><p>${g.pre&&g.prevTr?g.preDl>=1?`${__t(187)}${Math.round(g.preDl)}${__t(188)}`:__t(189):Vf($.delays.get(g.tid),$.delays.has(g.tid))}${(()=>{let Te=C&&gi(C.num);return Te&&Te.n>=2?`${__t(190)}${Te.n}${__t(191)}${Te.late?`${__t(192)} <b>${Te.late} ${__t(193)} ${Te.n} ${__t(194)}</b> ${__t(195)}`:__t(196)} \xB7 ${__t(197)} ${Te.avg<.5?"0":"+"+Math.round(Te.avg)} min</span>`:""})()}${(()=>{let Te=C&&mu(C.num);return Te?`<span class="why" title="${m(Te.txt)}">${Te.why?__t(198)+m(Te.why):__t(199)}</span>`:""})()}</p>
        <small>${g.pre?`${__t(200)}${is(Kh(w.age))}`:g.est?__t(201):`${__t(202)}${is(Kh(w.age))}${w.age>120?__t(203):""}`}</small>
        ${He.length?`${w.dl>=1||g.pre&&g.preDl>=1?`${__t(204)}`:""}<ol class="stops">${He.join("")}</ol>`:""}${M(x(new Set([w.fam])))}
        ${Tl(C?C.num:g.num,"",w.fam)}${C?`<div class="rtb two"><button type="button" data-fav>${$f(C)?__t(205):__t(206)}</button><button type="button" data-follow>${Rt===C?__t(207):__t(208)}</button></div>`:""}</div>`}else if(ut&&p&&!ut.pat)u=`${__t(209)}${m(ut.num||ut.vtid||"")}${__t(210)}`;else if(ut){let g=ut,C=g.pat,k=C.stops.length,Y=tt(g),ct=typeof Y=="number"?Y/60:0,wt=t.days.indexOf(o.ymd),dt=g.day===wt-1?1440:0,bt=o.min+dt-g.t0-ct,it=Ts(g,bt),ce=fe=>g.t0+C.t[fe]+ct,_e=fe=>m(E[C.stops[fe]].n),Wt=__t(211);it&&(Wt=it.moving?`${__t(212)}${_e(it.next)}${__t(213)}${at(ce(2*it.next))}`:it.at===k-1?`${__t(214)}${_e(k-1)}</b>`:`${__t(178)}${_e(it.at)}${__t(215)}${at(ce(2*it.at+1))}`);let He=it?it.next:0,Te=[];for(let fe=He;fe<k;fe++)Te.push(`<li class="${yl(C.stops[fe])?"mine":""}${Sl(g,fe)?" alm":""}"><b>${at(Xa(g,null,fe,ce(2*fe)))}</b><span title="${_e(fe)}">${yl(C.stops[fe])}${_e(fe)}</span>${ct>=1?`<em class="dl ${$i(ct)}">+${Math.round(ct)}</em>`:""}${fe>0?`<button type="button" class="abtn" data-alarm="${fe}" title="${__t(182)}">${Sl(g,fe)?"\u{1F514}":"\u{1F515}"}</button>`:""}</li>`);u=`<div class="tc" style="--c:${g.c}"><button class="x" data-cx>\xD7</button><div>${Nn(g.fam)}${__t(183)}${m(g.num)}</b> <span class="pv">${__t(219)}</span></div><h3 class="rt"><span class="o" title="${_e(0)}">${_e(0)}</span><span class="ar">\u2192</span>${zi(E[g.pat.stops[k-1]].n,g.fam)}</h3>
        <p>${Wt}</p><p>${Vf(Y,Y!=null)}${(()=>{let fe=gi(g.num);return fe&&fe.n>=2?`${__t(190)}${fe.n}${__t(191)}${fe.late?`${__t(192)} <b>${fe.late} ${__t(193)} ${fe.n} ${__t(194)}</b> ${__t(195)}`:__t(196)} \xB7 ${__t(197)} ${fe.avg<.5?"0":"+"+Math.round(fe.avg)} min</span>`:""})()}${__t(216)}${at(g.t0+C.t[1])}${__t(217)}${at(g.t0+C.t[2*k-2])}${__t(218)}${ct>=1?__t(204):""}<ol class="stops">${Te.join("")}</ol>${Tl(g.num,"",g.fam)}<div class="rtb two"><button type="button" data-fav>${$f(g)?__t(205):__t(206)}</button><button type="button" data-follow>${Rt===g?__t(207):__t(208)}</button></div></div>`}else{let g=Lt,C=t.days.indexOf(o.ymd),k=[];xi.st!==g&&(xi.st=g,xi.f.clear());let Y=it=>(!q[it]||K.has(it))&&(!xi.f.size||xi.f.has(it));if(C>=0){let it=(ce,_e)=>{for(let Wt of ce){if(!Y(Wt.fam))continue;let He=Wt.pat.stops.indexOf(g);if(He<0||He===Wt.pat.stops.length-1)continue;let Te=tt(Wt),fe=typeof Te=="number"?Te/60:0,Sn=Wt.t0+Wt.pat.t[2*He+1]-_e;Sn+fe<o.min-1||Sn>o.min+360||k.push({tr:Wt,t:Sn,dl:fe,d:Te,on:$.vp.has(Wt.tid),past:o.min>Wt.t0+Wt.pat.t[1]-_e+2})}};it(Q[C],0),C>0&&it(Q[C-1],1440)}k.sort((it,ce)=>it.t+it.dl-ce.t-ce.dl);let ct=E[g].id,wt=A.get(ct),dt=(p||W()&&o.live)&&$.url;dt&&(!wt||Date.now()-wt.at>3e4)&&!wt?.loading&&(A.set(ct,{...wt||{},loading:!0,at:wt?wt.at:0}),Ct($.url.replace(/\/+$/,""),"/departures.json?stationId="+ct).then(it=>{A.set(ct,{at:Date.now(),d:it}),Lt===g&&(d._h="",Ne())}).catch(()=>A.set(ct,{at:Date.now(),err:1})));let bt=dt&&wt&&wt.d&&Array.isArray(wt.d.trains)&&wt.d.trains.length?wt.d.trains:null;if(bt){let it=new Map([...$.vp.values()].map(Wt=>[String((ht.get(Wt.tid)||{}).num||Wt.num),Wt])),ce=new Map(hs(g).map(Wt=>[String(Wt.num),Wt])),_e=bt.filter(Wt=>Y((Wt.line||{}).id||"")).slice(0,40).map(Wt=>{let He=String(Wt.commercialNumber||Wt.technicalNumber||""),Te=ce.get(He),fe=Te?at(Te.est):(Wt.departureDateHourSelectedStation||"").slice(11,16),Sn=(Wt.line||{}).id||"",Ze=it.get(He),Vi=Te?Math.round(Te.dl)*60:Ze?$.delays.get(Ze.tid):null,ds=Te&&(Te.gone||!Te.live&&Te.est<o.min-1);return`<li class="go${ds?" old":""}${Ba({num:He,tid:Ze?Ze.tid:""})?" sel":""}" data-gt="${m(He)}|${Ze?m(Ze.tid):""}"><b>${m(fe)}</b>${q[Sn]?Nn(Sn):`<span class="ln" style="--c:#6b7385">${m(Sn||"?")}</span>`}<span>${zi((Wt.destinationStation||{}).name||"",Sn)}${Wt.trainObservations?` \xB7 <i>${m(Wt.trainObservations)}</i>`:""}${ds?` <small class="oldt">${Te.gone?__t(220):__t(221)}</small>`:""}</span>${Wt.trainCancelled?__t(222):typeof Vi=="number"&&Vi>=60?`<em class="dl ${$i(Vi/60)}">+${Math.round(Vi/60)}</em>`:""}${Wt.platformSelectedStation?`${__t(223)}${m(Wt.platformSelectedStation)}</i>`:""}${Ze?'<i class="lvd" title="circulando, posici\xF3n real">\u25CF</i>':'<i class="lvd ph">\u25CF</i>'}</li>`}).join("");u=`<div class="tc" style="--c:#1d2330"><button class="x" data-cx>\xD7</button><h3>${m(E[g].n)}</h3>${Bf(g)}${Tl("",E[g].id,"")}${__t(224)}${_e||__t(226)}</ol>${zf(g,o)}${M(x(E[g].fams,g))}${__t(225)}`}else u=`<div class="tc" style="--c:#1d2330"><button class="x" data-cx>\xD7</button><h3>${m(E[g].n)}</h3>${Bf(g)}${Tl("",E[g].id,"")}
        <small style="margin-top:6px">${p&&$.url?__t(228):""}${__t(227)}${p?__t(229):__t(230)}</small>
        <ol>${k.slice(0,40).map(it=>`<li class="go${Ba({num:it.tr.num,tid:it.tr.tid})?" sel":""}" data-gt="${m(it.tr.num)}|${m(it.tr.tid)}"><b>${at(it.t+it.dl)}</b>${Nn(it.tr.fam)}<span>${zi(E[it.tr.pat.stops[it.tr.pat.stops.length-1]].n,it.tr.fam)}</span>${it.d==="X"?__t(222):it.dl>=1?`<em class="dl ${$i(it.dl)}">+${Math.round(it.dl)}</em>`:""}${p?it.on?'<i class="lvd" title="circulando, posici\xF3n real">\u25CF</i>':it.past?__t(231):'<i class="lvd ph">\u25CF</i>':""}</li>`).join("")||__t(232)}</ol>${zf(g,o)}${M(x(E[g].fams,g))}${__t(225)}`}let P=d.scrollTop;if(d._h!==u&&(d.innerHTML=u,d._h=u,d.scrollTop=P),d.style.display="flex",d.classList.toggle("min",js),wu(),innerWidth<=640){let g=d.querySelector(".tc");if(g&&!g.querySelector(".mn")){let C=document.createElement("button");C.type="button",C.className="mn",C.setAttribute("aria-label",__t(233)),C.textContent=d.classList.contains("peek")?"\u25B4":"\u25BE",C.onclick=Y=>{Y.stopPropagation(),d.classList.toggle("peek"),requestAnimationFrame(cs),_u(),C.textContent=d.classList.contains("peek")?"\u25B4":"\u25BE",d.scrollTop=0};let k=g.querySelector(".x");g.insertBefore(C,k?k.nextSibling:g.firstChild)}}else d.classList.remove("peek");let U=_("#rc");if(innerWidth<=640&&!U.classList.contains("min")&&!Ne.done&&(Ne.done=1,_("#rcgrab").click()),innerWidth<=640){let g=_("#inf").getBoundingClientRect().bottom;d.style.top=Math.round(g+8)+"px",d.style.width="calc(100vw - 76px)",d.style.maxHeight=Math.max(140,_("#rc").getBoundingClientRect().top-g-16)+"px"}else if(innerHeight<=500){let g=_("#inf").getBoundingClientRect().bottom;d.style.top=Math.round(g+8)+"px",d.style.width="min(290px, 40vw)",d.style.maxHeight=innerHeight-g-20+"px"}else d.style.top="",d.style.width=et?"390px":"300px",d.style.maxHeight="";cs();let z=d.querySelector("[data-cx]");z&&(z.onclick=g=>{if(g.stopPropagation(),Ne.done=0,et||V||Kt||nt&&!ut&&Lt<0){et=V=Kt=!1,ut||Lt>=0||(nt=""),d._h="",Ne(),a();return}if(ut&&rt.st>=0){let C=rt.st;rt.st=-1,ut=null,Rt=null,Lt=C,Ee(),d._h="",Ne(),Gt=0,a();return}rt.st=-1,Kt=!1,V=!1,et=!1,ut=null,Lt=-1,Rt=null,Ee(),Ne(),Gt=0,a()}),Wf(d),d.querySelectorAll("[data-alarm]").forEach(g=>g.onclick=C=>{C.stopPropagation();let k=ut&&ut.pat?ut:ht.get(ut&&ut.vtid)||null;if(!k)return;let Y=+g.dataset.alarm,ct=E[k.pat.stops[Y]].id;Be&&Be.num===String(k.num)&&Be.sid===ct?(Be=null,window.__schedOff&&window.__schedOff(7701),ln(__t(234))):(Be={num:String(k.num),sid:ct,at:Date.now()},ln(`${__t(235)}${E[k.pat.stops[Y]].n}`),"Notification"in window&&Notification.permission==="default"&&Notification.requestPermission()),As(),d._h="",Ne()});{let g=d.querySelector("[data-fav]");g&&(g.onclick=C=>{C.stopPropagation();let k=ut&&ut.pat?ut:ht.get(ut&&ut.vtid)||null;if(!k)return;let Y=bi.findIndex(ct=>ct.num===String(k.num));if(Y>=0)bi.splice(Y,1),ln(__t(236));else{let ct=[...je.st,...We.st,...Nt.st],wt=k.pat.stops.find(dt=>ct.includes(E[dt].id))??k.pat.stops[0];bi.push({num:String(k.num),fam:k.fam,sid:E[wt].id,dest:E[k.pat.stops[k.pat.stops.length-1]].id,t:at(k.t0+k.pat.t[2*k.pat.stops.indexOf(wt)+1])}),ln(`${__t(237)}${k.fam}${__t(238)}${bi[bi.length-1].t}${__t(145)}${E[wt].n}${__t(239)}`),"Notification"in window&&Notification.permission==="default"&&Notification.requestPermission()}u0(),d._h="",Ne(),De(!0)})}{let g=d.querySelector("[data-share]");g&&(g.onclick=()=>{let C=nt,k=It.filter(dt=>(dt.fam||dt.tr&&dt.tr.fam)===C),Y=k.filter(dt=>dt.dl>=5).sort((dt,bt)=>bt.dl-dt.dl),ct=$.alerts.filter(dt=>dt.fams.has(C)),wt=`${C}${__t(240)}${at(se().min)}: ${k.length}${__t(241)}${Y.length}${__t(242)}${Y.length?" ("+Y.slice(0,4).map(dt=>`${dt.tr?dt.tr.num:dt.v.num} +${Math.round(dt.dl)}`).join(", ")+")":""}.${ct.length?__t(243)+ct[0].txt:__t(244)}`;navigator.share?navigator.share({text:wt}).catch(()=>{}):(navigator.clipboard&&navigator.clipboard.writeText(wt),ln(__t(245)+wt.slice(0,60)+"\u2026"))})}{let g=d.querySelector("[data-cols]");g&&(g.onclick=()=>{cn.on=!cn.on,a0(),d._h="",Ne()})}d.querySelectorAll("[data-gs]").forEach(g=>g.onclick=()=>{let C=+g.dataset.gs;et=!1,window.__rodPickStation(C),Object.assign(s,{tx:E[C].w[0],ty:E[C].w[1],dist:Math.min(s.dist,20)}),a()}),d.querySelectorAll("[data-sf]").forEach(g=>g.onclick=C=>{C.stopPropagation();let k=g.dataset.sf;k?xi.f.has(k)?xi.f.delete(k):xi.f.add(k):xi.f.clear(),d._h="",Ne()}),d.querySelectorAll("[data-gt]").forEach(g=>g.onclick=()=>{rt.st=Lt;let[C,k]=g.dataset.gt.split("|"),Y=ht.get(k);Pl({num:C,tid:$.vp.has(k)?k:"",tr:Y||null})}),d.querySelectorAll("[data-sethome]").forEach(g=>g.onclick=()=>Au(Lt,g.dataset.sethome));let Z=d.querySelector("[data-follow]");Z&&(Z.onclick=()=>{let g=Rt===ut;if(Rt=g?null:ut,!g&&ut&&ut.num!=null){let C=ut.pat.stops,k=String(ut.num);for(let Y of[Cl(),Nt,je,We]){let ct=Y&&li(Y);if(ct!=null&&C.includes(ct)&&!(Y===Nt&&!Nt.st.length)&&hs(ct).some(wt=>String(wt.num)===k&&!wt.gone)){Ur(Y.key,k);break}}De(!0)}if(g&&ut&&ut.num!=null){let C=String(ut.num);[...us].forEach(([k,Y])=>{String(Y)===C&&Ur(k,null)}),Jt.tid===C&&(Jt.tid="",Jt.manual=0,Jt.quiet=Date.now()+10*6e4),Be&&Be.num===C&&(Be=null,As(),window.__schedOff&&window.__schedOff(7701)),De(!0)}Rt?(s.dist=Math.min(s.dist,22),innerWidth<=640&&(d.classList.add("peek"),d.scrollTop=0,_("#rc").classList.contains("min")||_("#rcgrab").click())):d.classList.remove("peek"),d._h="",Ne(),a()})}window.__rodCard=Ne;try{let o=localStorage.getItem("rod_inf");(o==="mini"||o==null)&&_("#inf").classList.add("mini")}catch{}_("#inft").onclick=()=>{let o=_("#inf").classList.toggle("mini");try{localStorage.setItem("rod_inf",o?"mini":"")}catch{}(ut||Lt>=0||Kt||V)&&(d._h="",Ne())},_("#ver").onclick=()=>{V=!0,et=!1,Kt=!1,d._h="",Ne()};let wl={vacio:"\u{1F7E2}",lleno:"\u{1F7E0}",petado:"\u{1F534}",parado:"\u23F8\uFE0F",calor:"\u{1F975}",abordo:"\u26A0\uFE0F",gente:"\u{1F465}",retraso:"\u23F1\uFE0F",cancel:"\u2716\uFE0F",ascensor:"\u267F",via:"\u26A0\uFE0F"},m0=["vacio","lleno","petado",__t(246),"calor","abordo"],g0=["gente","retraso","cancel","ascensor","via"],_0={vacio:__t(247),lleno:__t(248),petado:__t(249),parado:__t(250),calor:__t(251),abordo:__t(252),gente:__t(253),retraso:__t(254),cancel:__t(255),ascensor:__t(256),via:__t(257)},El=o=>($.tipos||_0)[o]||o,xu=(o,u)=>($.rep||[]).filter(p=>o&&p.num===String(o)&&!p.sid||u&&p.sid===String(u)&&!p.num||o&&u&&p.num===String(o)&&p.sid===String(u)),Hf=o=>{let u=Math.round((Date.now()+($.repSkew||0)-o.at)/6e4);return u<1?__t(258):is(u+" min")},ka=(()=>{try{return new Set(JSON.parse(localStorage.getItem("rod_votes")||"[]"))}catch{return new Set}})();function Tl(o,u,p){if(!$.url||!$.repOk)return"";let x=xu(o,u),M=o?m0:g0;return`${__t(259)}${x.length?"":__t(261)}</small>${x.map(w=>`<p><span>${wl[w.kind]||"\u2022"} <b>${m(El(w.kind))}</b> <small>${w.up>1?w.up+__t(262):""}${Hf(w)}</small></span>${ka.has(w.id)?"<small>\u2713</small>":`<button type="button" data-rv="${w.id}:1" title="Lo confirmo">\u{1F44D}</button><button type="button" data-rv="${w.id}:-1" title="Ya no es as\xED">\u{1F44E}</button>`}</p>`).join("")}
      <details><summary>${o?__t(263):__t(264)}</summary><div class="ckb">${M.map(w=>`<button type="button" data-rk="${w}" data-rn="${m(o||"")}" data-rs="${m(u||"")}" data-rl="${m(p||"")}">${wl[w]} ${m(El(w))}</button>`).join("")}${__t(260)}`}async function Gf(o,u){try{let x=await(await fetch($.url.replace(/\/+$/,"")+u,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)})).json();if(!x.ok){ln(x.err||__t(265));return}if(x.id){ka.add(x.id);try{localStorage.setItem("rod_votes",JSON.stringify([...ka].slice(-300)))}catch{}}ln(u==="/vote"?__t(266):x.n>1?`${__t(267)}${x.n}${__t(268)}`:__t(269));let M=await Ct($.url.replace(/\/+$/,""),"/reports.json");M&&M.items&&($.rep=M.items),d._h="",Ne(),De(!0)}catch{ln(__t(270))}}function Wf(o){o.querySelectorAll("[data-rk]").forEach(u=>u.onclick=p=>{p.stopPropagation(),u.disabled=!0,Gf({kind:u.dataset.rk,num:u.dataset.rn,sid:u.dataset.rs,line:u.dataset.rl},"/report")}),o.querySelectorAll("[data-rv]").forEach(u=>u.onclick=p=>{p.stopPropagation();let[x,M]=u.dataset.rv.split(":");ka.add(+x);try{localStorage.setItem("rod_votes",JSON.stringify([...ka].slice(-300)))}catch{}Gf({id:+x,v:+M},"/vote")})}let vu=0;function ln(o){let u=_("#toast");u||(u=document.createElement("div"),u.id="toast",document.body.appendChild(u)),u.textContent=o,u.className="on",clearTimeout(vu),vu=setTimeout(()=>{u.className=""},Math.min(1e4,Math.max(4500,String(o).length*70))),u._tap||(u._tap=1,u.onclick=()=>{clearTimeout(vu),u.className=""})}function za(o){return o.src?`<b class="asrc ${o.src==="Adif"?"adif":""}">${o.src==="Adif"?__t(271):m(o.src)}</b>`:""}function $a(o){if(!o.when)return"";let[u,p]=o.when.split("T"),x=vt(new Date),M=x.ymd.slice(0,4)+"-"+x.ymd.slice(4,6)+"-"+x.ymd.slice(6,8);if(u===M&&p){let w=Math.round(x.min-(+p.slice(0,2)*60+ +p.slice(3,5)));return w<1?__t(258):w<60?is(w+" min"):`${__t(272)}${p.slice(0,5)}`}return`${u.slice(8,10)}/${u.slice(5,7)}${p?" "+p.slice(0,5):""}`}function yu(){let o=_("#alr");if(!o)return;let u=$.alerts.filter(p=>[...p.fams].some(x=>K.has(x))).length;o.hidden=!u,o.textContent=`\u26A0\uFE0F ${u}${u===1?__t(273):__t(274)}`}{let o=_("#alrslot");o&&o.appendChild(_("#alr"))}_("#alr").onclick=()=>{V=!1,et=!1,Kt=!0,Ne()},_("#wcopy").onclick=async()=>{let o=_("#wcode").textContent;try{await navigator.clipboard.writeText(o),_("#wcopy").textContent=__t(275)}catch{let p=document.createRange();p.selectNodeContents(_("#wcode"));let x=getSelection();x.removeAllRanges(),x.addRange(p),_("#wcopy").textContent=__t(276)}setTimeout(()=>_("#wcopy").textContent=__t(277),2500)};let x0=qt.get("71801");function v0(o,u){let p=E[o].id,x=A.get(p);!(he()&&$.url)||x&&(x.loading||Date.now()-x.at<3e4)||(A.set(p,{...x||{},loading:!0,at:x?x.at:0}),Ct($.url.replace(/\/+$/,""),"/departures.json?stationId="+p).then(M=>{A.set(p,{at:Date.now(),d:M}),u&&u()}).catch(()=>A.set(p,{at:Date.now(),err:1})))}let Xf=o=>+o.slice(0,2)*60+ +o.slice(3,5),Va={k:-2,m:null};function Ha(o){let u=t.days.indexOf(se().ymd);if(Va.k!==u){Va.k=u,Va.m=new Map;for(let p of Q[u]||[])Va.m.set(String(p.num),p)}return Va.m.get(String(o))||null}let wi={at:0,m:new Map},Ga=o=>Ce()?(Wa(""),[...o].filter(u=>{let p=wi.m.get(u);return p&&p[0]>=2&&p[1]===0}).sort(N)):[];function Wa(o){if(Date.now()-wi.at>6e4||wi.vp!==$.vp){wi.at=Date.now(),wi.vp=$.vp,wi.m=new Map;let p=se(),x=t.days.indexOf(p.ymd);if(x>=0)for(let M of Q[x]){let w=p.min-M.t0;if(w<M.pat.t[1]+3||w>M.pat.t[M.pat.t.length-2]-3)continue;let P=wi.m.get(M.fam)||[0,0];P[0]++,$.vp.has(M.tid)&&P[1]++,wi.m.set(M.fam,P)}}let u=wi.m.get(o);return u&&u[0]>=3?u[1]/u[0]:1}function Xa(o,u,p,x){let M=E[o.pat.stops[p]].id;if([...je.st,...We.st].includes(M)){let w=hs(o.pat.stops[p]).find(P=>String(P.num)===String(o.num));if(w&&!w.gone)return w.est}return Su(o,u,p,0,x)}function qf(o,u){if(!o||!u||u.pre||u.dObs==null||u.err==null||u.err>.6)return null;let p=Date.now()/1e3-u.ts;if(p>150||p<-30||(u.still||0)>=90)return null;let x=jt(o.pat).stopD,M=o.pat.t,w,P,U=x.reduce((D,z,Z)=>Math.abs(z-u.dObs)<Math.abs(x[D]-u.dObs)?Z:D,0);if(Math.abs(x[U]-u.dObs)<.16||u.atStop===U)w=M[2*U+1]??M[2*U],P=U;else{let D=x.findIndex(Z=>Z>u.dObs);if(D<=0)return null;let z=Math.min(1,Math.max(0,(u.dObs-x[D-1])/(x[D]-x[D-1]||1)));w=M[2*D-1]+z*(M[2*D]-M[2*D-1]),P=D-1}return{t:vt(new Date).min-p/60,tpos:w,j0:P,sd:x}}function Su(o,u,p,x,M){let w=qf(o,u);if(!w||p<=w.j0&&!(p===w.j0&&x===1))return M;let P=o.pat.t,U=w.t+(P[2*p+x]??P[2*p])-w.tpos;if(U-w.t>45)return M;let D=(M%1440+1440)%1440,z=((U-D+720)%1440+1440)%1440-720;return z>=-3&&z<=5?M+z:M}function Rb(o,u,p,x){let M=qf(o,u);if(!M)return null;let w=Su(o,u,p,1,M.t+o.pat.t[2*p+1]-M.tpos);return w-x.min>30||w<x.min-1?null:w}function hs(o,u){let p=se(),x=(Ce()||W())&&p.live&&!u,M=A.get(E[o].id),w=[],P=new Map([...$.vp.values()].map(D=>[String((ht.get(D.tid)||{}).num||D.num),D]));if(x&&M&&M.d&&Array.isArray(M.d.trains)&&M.d.trains.length)for(let D of M.d.trains){let z=(D.departureDateHourSelectedStation||"").slice(11,16);if(!z)continue;let Z=String(D.commercialNumber||D.technicalNumber||""),g=P.get(Z),C=g?$.delays.get(g.tid):null,k=Math.max(typeof C=="number"?Math.max(0,C/60):0,g&&g.pre&&g.preDl||0),Y=Xf(z);Y<p.min-720&&(Y+=1440);let ct=+(D.departureDateHourSelectedStation||"").slice(17,19)||0,wt=Y+ct/60,dt=g&&ht.get(g.tid)||Ha(Z),bt=dt?dt.pat.stops.indexOf(o):-1,it=bt>=0?(dt.t0+dt.pat.t[2*bt+1])%1440:null;if(it!=null){for(;it<wt-720;)it+=1440;for(;it>wt+720;)it-=1440;Math.abs(wt-it)>120&&(it=null)}let ce,_e;it==null?(ce=ct||!k?wt:wt+k,_e=ct?0:k):ct||Math.abs(wt-it)>=1?(ce=wt,_e=Math.max(0,wt-it)):(ce=it+k,_e=k);let Wt=!1;if(dt&&!g&&bt>0&&!ct){let He=t.days.indexOf(p.ymd),Te=dt.day===He-1?1440:dt.day===He+1?-1440:0,fe=dt.t0+dt.pat.t[1]-Te;if(p.min<fe){let Sn=fe+(dt.pat.t[2*bt+1]-dt.pat.t[1]);Sn>ce+1&&(ce=Sn,Wt=!0,it!=null&&(_e=Math.max(0,ce-it)))}}if(it!=null&&(Y=Math.round(it)),g&&dt&&bt>=0){let He=Su(dt,g,bt,1,ce);He!==ce&&(ce=Math.max(He,p.min),it!=null&&(_e=Math.max(0,ce-it)))}w.push({dubious:Wt,rodLive:!!ct,sm:Y,est:ce,dl:_e,fam:(D.line||{}).id||"",dest:(D.destinationStation||{}).name||"",destId:(D.destinationStation||{}).id||"",plat:D.platformSelectedStation||"",cancel:!!D.trainCancelled,obs:D.trainObservations||"",live:!!g,num:Z,tid:g?g.tid:"",tr:g&&ht.get(g.tid)||Ha(Z),src:"oficial"})}else{let D=t.days.indexOf(p.ymd);if(D<0)return w;let z=(Z,g)=>{for(let C of Z){let k=C.pat.stops.indexOf(o);if(k<0||k===C.pat.stops.length-1)continue;let Y=tt(C),ct=typeof Y=="number"?Math.max(0,Y/60):0,wt=C.t0+C.pat.t[2*k+1]-g;if(wt+ct<p.min-1||wt>p.min+(p.min>1080||p.min<300?600:360))continue;let dt=C.pat.stops[C.pat.stops.length-1];w.push({sm:wt,est:wt+ct,dl:ct,fam:C.fam,dest:E[dt].n,destId:E[dt].id,plat:"",cancel:Y==="X",obs:"",live:$.vp.has(C.tid),num:C.num,tid:C.tid,tr:C,src:"horario"})}};z(Q[D],0),D>0&&z(Q[D-1],1440),D+1<t.days.length&&p.min>1080&&z(Q[D+1],-1440)}if(x){let D=new Set(w.map(g=>String(g.num))),z=t.days.indexOf(p.ymd),Z=(g,C)=>{for(let k of g||[]){if(D.has(String(k.num)))continue;let Y=k.pat.stops.indexOf(o);if(Y<0||Y===k.pat.stops.length-1)continue;let ct=k.t0+k.pat.t[2*Y+1]-C;if(ct<p.min-45||ct>p.min+1||!$.vp.get(k.tid))continue;let dt=$.delays.get(k.tid),bt=typeof dt=="number"?Math.max(0,dt/60):0,it=k.pat.stops[k.pat.stops.length-1];w.push({sm:ct,est:ct+bt,dl:bt,fam:k.fam,dest:E[it].n,destId:E[it].id,plat:"",cancel:!1,obs:"",live:!0,num:k.num,tid:k.tid,tr:k,src:"horario"})}};z>=0&&(Z(Q[z],0),z>0&&Z(Q[z-1],1440));for(let g of w){let C=g.tid&&$.vp.get(g.tid),k=g.tr?g.tr.pat.stops.indexOf(o):-1;g.passed=!!(C&&k>=0&&!C.pre&&C.next!=null&&C.next>=0&&C.next>k&&C.atStop!==k),!g.passed&&g.live&&g.est<p.min&&(g.est=p.min,g.late=!0),g.passed&&(g.gone=!0)}}let U=w.filter(D=>D.gone?p.min-D.est<20:D.est>=p.min-.5).sort((D,z)=>D.est-z.est);{let D=U.filter(z=>z.gone);if(D.length>2){let z=new Set(D.slice(0,D.length-2));U=U.filter(Z=>!z.has(Z))}}if(!U.filter(D=>!D.gone).length&&w.length&&w[0].src==="oficial"&&!u)return hs(o,!0);for(let D of U){let z=D.num&&mu(D.num);z&&z.cx&&(D.cancel=!0,D.cxWhy=z.txt)}if(Ce()&&p.live){let D=t.days.indexOf(p.ymd);for(let z of U){if(z.live||z.cancel||!z.tr)continue;let Z=z.tr.day===D-1?1440:z.tr.day===D+1?-1440:0,g=z.tr.t0+z.tr.pat.t[1]-Z+(z.dl||0);z.noPos=p.min>g+3&&!z.rodLive,z.ghost=z.noPos&&Wa(z.fam)>=.7}}if(u||(U=U.concat(T(o,p.min-.5,p.min+360)).sort((D,z)=>D.est-z.est)),!u&&U.some(D=>D.src==="oficial")){let D=w.filter(g=>g.src==="oficial"),z=Math.max(...D.map(g=>g.sm)),Z=new Set(U.map(g=>String(g.num)));U=U.concat(hs(o,!0).filter(g=>!g.gone&&g.sm<=z&&g.est>=p.min-.5&&!Z.has(String(g.num))).map(g=>Object.assign(g,{unconf:!0}))).sort((g,C)=>g.est-C.est)}if(U.some(D=>D.src==="oficial")){let D=Math.max(...U.map(Z=>Z.sm)),z=new Set(U.map(Z=>String(Z.num)));U=U.concat(hs(o,!0).filter(Z=>Z.sm>D&&!z.has(String(Z.num))))}return U}let Yf=(o,u,p,x)=>{let M={key:o,ico:u,name:p,st:[],i:0,walk:10,open:!1};try{let w=JSON.parse(localStorage.getItem("rod_"+o)||"null");w&&Object.assign(M,w)}catch{}return!M.st.length&&x&&(M.st=x),M},je=Yf("home","\u{1F3E0}",__t(278),null),We=Yf("work","\u{1F4BC}",__t(279),null),Nt={key:"near",ico:"\u{1F4CD}",name:__t(280),st:[],i:0,walk:0,open:!1,dist:{},fix:0,err:""},qa=[Nt,je,We];try{Nt.homeW=JSON.parse(localStorage.getItem("rod_homew")||"null")}catch{}je.open=!1,We.open=!1;function Zf(o,u){let p=St(o,u),x=St(o,u+.009);return 1/Math.hypot(x[0]-p[0],x[1]-p[1])}function Mu(o){if(!navigator.geolocation){Nt.err=__t(281),De(!0);return}navigator.geolocation.getCurrentPosition(u=>{let{longitude:p,latitude:x}=u.coords,M=St(p,x),w=Zf(p,x),P=E.map((Z,g)=>[g,Math.hypot(Z.w[0]-M[0],Z.w[1]-M[1])*w]).filter(([Z])=>E[Z].fams.size).sort((Z,g)=>Z[1]-g[1]),U=P.filter(([,Z],g)=>g===0||Z<Math.max(2.5,P[0][1]*1.6)).slice(0,3),D=Nt.st[0]!==E[U[0][0]].id;Nt.w=M,Nt.k=w,Nt.acc=u.coords.accuracy!=null?u.coords.accuracy:999,Nt.st=U.map(([Z])=>E[Z].id),Nt.dist=Object.fromEntries(U.map(([Z,g])=>[E[Z].id,g])),Nt.fix=Date.now(),Nt.err="",D&&(Nt.i=0);let z=[je,We].find(Z=>Z.st.includes(Nt.st[0])&&Nt.dist[Nt.st[0]]<1.5);De(!0)},u=>{Nt.err=u.code===1?__t(282):__t(283),De(!0)},{enableHighAccuracy:!1,maximumAge:6e4,timeout:12e3})}let Jf=o=>Math.max(1,Math.round(o*1.3/.08));setTimeout(()=>Mu(!0),400);let Jt={fixes:[],tid:"",no:new Map,shown:""};function y0(){let o=Jt.fixes;if(o.length<2)return;let u=o[o.length-1],p=o.slice().reverse().find(C=>u.t-C.t>=8e3&&u.t-C.t<=9e4);if(!p)return;let x=Math.hypot(u.w[0]-p.w[0],u.w[1]-p.w[1])*u.k,M=u.spd!=null&&u.spd>0?u.spd*3.6:x/((u.t-p.t)/36e5);if(u.acc!=null&&u.acc>100)return;if(Jt.tid&&M<8){if(!Jt.slow)Jt.slow=u.t;else if(u.t-Jt.slow>9e4&&E.some(C=>C.w&&Math.hypot(C.w[0]-u.w[0],C.w[1]-u.w[1])*u.k<.35)){Jt.tid="",Jt.manual=0,Jt.slow=0,Jt.quiet=Date.now()+10*6e4,Rt=null,De(!0);return}}else Jt.slow=0;if(!Jt.tid&&Jt.quiet&&Date.now()<Jt.quiet||Jt.manual&&Date.now()<Jt.manual)return;if(Jt.tid){if(M<22)return;let C=It.find(k=>k.tr&&String(k.tr.num)===Jt.tid)||Zs(se()).out.find(k=>k.tr&&String(k.tr.num)===Jt.tid);if(C){if(Math.hypot(C.p.w[0]-u.w[0],C.p.w[1]-u.w[1])*u.k<=5){Jt.far=0;return}if(Jt.far||(Jt.far=u.t),u.t-Jt.far<12e4)return}Jt.far=0}if(M<22||M>200)return;let w=[u.w[0]-p.w[0],u.w[1]-p.w[1]],P=null,U=2.5,D=It.filter(C=>C.real),z=Zs(se()).out.filter(C=>C.tr&&!D.some(k=>k.tr&&String(k.tr.num)===String(C.tr.num)));for(let C of[...D,...z]){if(!C.tr)continue;let k=C.real?2.5:3.5,Y=Math.hypot(C.p.w[0]-u.w[0],C.p.w[1]-u.w[1])*u.k;if(Y>Math.min(U,k)||P&&P.real&&!C.real)continue;let ct=C.real?C.v.next:C.p.next;if(ct==null||ct<0)continue;let wt=E[C.tr.pat.stops[ct]].w,dt=[wt[0]-C.p.w[0],wt[1]-C.p.w[1]];if(dt[0]*w[0]+dt[1]*w[1]<=0)continue;let bt=String(C.tr.num);(Jt.no.get(bt)||0)>Date.now()||(U=Y,P=C)}if(!P){Jt.cand=null;return}let Z=String(P.tr.num);if(Jt.tid===Z||u.acc!=null&&u.acc>50)return;if(!Jt.cand||Jt.cand.k!==Z){Jt.cand={k:Z,t:u.t};return}if(u.t-Jt.cand.t<2e4)return;Jt.cand=null,Jt.tid=Z,V=Kt=et=!1,Lt=-1,ut=P.tr,Rt=P.tr,Object.assign(s,{tx:P.p.w[0],ty:P.p.w[1],dist:Math.min(s.dist,22)}),innerWidth<=640&&(d.classList.add("peek"),_("#rc").classList.contains("min")||_("#rcgrab").click());{let C=P.tr.pat.stops,k=P.real?P.v.next:P.p.next,Y=[...je.st,...We.st],ct=C.findIndex((wt,dt)=>dt>=k&&Y.includes(E[wt].id));ct>0&&!(Be&&Be.num===Z)&&(Be={num:Z,sid:E[C[ct]].id,at:Date.now()},As())}Ee(),d._h="",Ne(),Gt=0,a();let g=_("#onb");g||(g=document.createElement("div"),g.id="onb",document.body.appendChild(g)),g.innerHTML=`${__t(284)}${m(P.tr.fam)} ${m(P.tr.num)}${__t(285)}${m(E[P.tr.pat.stops[P.tr.pat.stops.length-1]].n)}${__t(286)}${Be&&Be.num===Z?`${__t(288)}${m(E[qt.get(Be.sid)].n)}`:""}${__t(287)}`,g.className="on",g.querySelector("[data-onb-no]").onclick=()=>{Jt.no.set(Z,Date.now()+20*6e4),Jt.tid="",Rt=null,ut=null,d._h="",Ne(),g.className=""},g.querySelector("[data-onb-x]").onclick=()=>{g.className=""},setTimeout(()=>{g.className=""},15e3)}if(navigator.geolocation&&navigator.geolocation.watchPosition){let o=null,u=()=>{o==null&&(o=navigator.geolocation.watchPosition(x=>{let{longitude:M,latitude:w}=x.coords,P={t:x.timestamp||Date.now(),w:St(M,w),k:Zf(M,w),spd:x.coords.speed,acc:x.coords.accuracy};Jt.fixes.push(P),Jt.fixes=Jt.fixes.filter(U=>P.t-U.t<12e4);try{se().live&&y0()}catch{}},()=>{},{enableHighAccuracy:!0,maximumAge:5e3,timeout:2e4}))},p=()=>{o!=null&&(navigator.geolocation.clearWatch(o),o=null)};setTimeout(u,3e3),document.addEventListener("visibilitychange",()=>{document.hidden?p():(Jt.fixes=[],u())})}setInterval(()=>{!document.hidden&&(Date.now()-Nt.fix>11e4||qa.some(o=>o.goAt))&&Mu(!1)},3e4);let Ei=o=>{try{localStorage.setItem("rod_"+o.key,JSON.stringify({st:o.st,i:o.i,walk:o.walk,open:o.open,hide:o.hide||"",goAt:o.goAt||0,platAt:o.platAt||0}))}catch{}},li=o=>o.st.length?qt.get(o.st[o.i]||o.st[0]):null;function jf(o,u,p,x){if(x&&u.bus)return u.bstops.slice(1).some(P=>x.has(P))?"to":"out";if(x&&u.tr){let P=u.tr.pat.stops,U=P.indexOf(o);if(U>=0&&P.slice(U+1).some(D=>x.has(D)))return"to"}if(x&&u.tr)return"out";let M=qt.get(u.destId)??E.findIndex(P=>P.n===u.dest);if(M<0||M==null||p==null)return"otros";let w=P=>Math.hypot(E[P].w[0]-E[p].w[0],E[P].w[1]-E[p].w[1]);return w(M)<w(o)?"to":"out"}let Qs=o=>o<1?__t(258):o<60?Math.floor(o)+" min":Math.floor(o/60)+" h "+String(Math.floor(o%60)).padStart(2,"0"),Kf=0,S0=/sin servicio|sense servei|suspend|interromp|interrump|no circula|no se puede garantizar|no es pot garantir/i,Qf=/sin servicio|sense servei|suspend|interromp|interrump|no circula|no hi ha circulaci|cortad|tallad|corte de|tall de|servicio alternativo|servei alternatiu|por carretera|per carretera|no se puede garantizar|no es pot garantir/i,tp=/huelga|vaga\b|strike|servicios? m[ií]nimos|serveis m[ií]nims|demora|retard|retras|v[ií]a [uú]nica|una sola v[ií]a|incidencia|incidència|aver[ií]a|avaria|aturad|detenid|parad[oa]s? en|velocidad reducida|velocitat redu/i,Ya=o=>{let u=o.es||o.txt;return Qf.test(u)||Qf.test(o.txt)?3:tp.test(u)||tp.test(o.txt)||o.lvl>=2?2:1};function M0(o,u,p){let x=li(o);if(o===Nt){if(Jt.tid)return"";if(x==null)return`${__t(289)}${Nt.err?m(Nt.err)+__t(290):__t(291)}</small></span><span class="hchev">\u27F3</span></button></div>`;if([je,We].find(Ot=>Ot.st.includes(Nt.st[0])&&Nt.dist[Nt.st[0]]<1.5)||Date.now()-Nt.fix>10*6e4)return"";o.walk=Jf(Nt.dist[o.st[o.i]]||0)}if(x==null){let lt=Nt.st.length?qt.get(Nt.st[0]):null,Ot=o===We?je:We,ie=lt!=null&&!Ot.st.includes(Nt.st[0]);return`<div class="hplace"><div class="hhead hnew"><span class="hico">${o.ico}</span><span class="htit"><b>${o.name}</b><small>${ie?`${__t(292)}${m(E[lt].n)}</b>`:__t(293)}</small></span>${ie?`<button type="button" class="hpick" data-hnear="${o.key}${__t(294)}`:""}<button type="button" class="hpick alt" data-hset="${o.key}">${ie?__t(295):__t(296)}</button></div></div>`}v0(x,()=>De(!0));let M=o===Nt?null:o===je?We:je,w=M?li(M):null,P=w!=null&&w!==x?w:x0,U=w!=null&&w!==x?M===We?__t(297):"casa":"Barcelona",D=E[x].fams,z=new Set([...D].filter(lt=>K.has(lt))),Z=z.size<D.size,g=!1;z.size||(z=new Set(D),Z=!1,g=!0);let C=Nt.w?Math.hypot(E[x].w[0]-Nt.w[0],E[x].w[1]-Nt.w[1])*Nt.k:null,k=C!=null&&Date.now()-Nt.fix<10*6e4;o.platAt&&Date.now()-o.platAt>45*6e4&&(o.platAt=0,Ei(o));let Y=o!==Nt&&!!o.platAt,ct=o===Nt||k&&C>3&&!o.goAt&&!Y,wt=Y||o!==Nt&&k&&C<.08&&Nt.acc<=40&&!(o===je&&Nt.homeW&&Math.hypot(Nt.homeW[0]-Nt.w[0],Nt.homeW[1]-Nt.w[1])*Nt.k<.05),dt=o.goAt?(Date.now()-o.goAt)/6e4:null;dt!=null&&(dt>60||wt)&&(o.goAt=0,Ei(o));let bt=!wt&&o!==Nt&&!!o.goAt,it=bt?k&&C<=3?Jf(C):Math.max(0,o.walk-dt):0,ce=hs(x),_e=ce.filter(lt=>!q[lt.fam]||K.has(lt.fam)||g),Wt=ct||wt?0:bt?it:o.walk,He=$.alerts.filter(lt=>[...lt.fams].some(Ot=>z.has(Ot))||lt.stops&&lt.stops.has(x)),Te=He.some(lt=>S0.test(lt.es||lt.txt)),fe={to:[],out:[],otros:[],all:_e},Sn=U!=="Barcelona"?new Set(M.st.map(lt=>qt.get(lt)).filter(lt=>lt!=null)):null;_e.forEach(lt=>fe[jf(x,lt,P,Sn)].push(lt));let Ze="";if(Sn&&!fe.to.length&&_e.length<ce.length){let lt=ce.filter(Ot=>!_e.includes(Ot)&&jf(x,Ot,P,Sn)==="to");lt.length&&(fe.to=lt,Ze=[...new Set(lt.map(Ot=>Ot.fam))].sort(N).join(", "))}let Vi=lt=>{if(lt==="all")return __t(298);let Ot=ve=>(ve.find(Tn=>Tn.fam)||{}).fam;if(lt==="to")return __t(299)+zi(U==="Barcelona"?"Barcelona":E[P].n,Ot(fe.to)||[...z][0])+(()=>{let ve=Z&&!Ze?[...z].filter(Tn=>fe.to.some(fs=>fs.fam===Tn)).sort(N):[];return ve.length?`<span class="hwf" title="${__t(300)}">${ve.map(Nn).join("")}</span>`:""})();let ie=[];for(let ve of fe[lt])ie.some(Tn=>Tn[0]===ve.dest)||ie.push([ve.dest,ve.fam]);return ie.length?__t(299)+ie.slice(0,2).map(([ve,Tn])=>zi(ve,Tn)).join(" "):__t(301)},ds=us.get(o.key);ds&&!ce.some(lt=>String(lt.num)===ds&&!lt.gone)&&Ur(o.key,null);let zr=lt=>{let Ot=ds&&fe[lt].find(an=>String(an.num)===ds&&!an.gone);if(Ot&&Ot.cancel)return{cls:"v-miss",pin:1,x:Ot,big:__t(302),small:`${at(Ot.est)} \xB7 ${Ot.fam}${__t(303)}${Ot.dest}${Ot.num?" \xB7 "+__t(304)+Ot.num:""}`,warn:""};let ie=Ot||fe[lt].find(an=>!an.cancel&&!an.gone&&an.est-u.min>=Wt);if(!ie){let an=fe[lt].find(ir=>!ir.cancel);return an&&!ct?{cls:"v-miss",big:__t(305),small:`${__t(306)}${at(an.est)}${__t(307)}${Qs(an.est-u.min)}${__t(308)}`}:{cls:"v-no",big:__t(309),small:__t(310)}}let ve=ie.est-u.min-Wt,Tn=ct||wt?"v-info":bt?ve<1.5?"v-warn":"v-ok":ve<1.5?"v-bad":ve<5?"v-warn":"v-ok",fs=ie.ghost?fe[lt].find(an=>!an.cancel&&!an.ghost&&an.live&&an.est>ie.est):null;if(Ot&&ve<0&&!ct&&!wt){let an=fe[lt].find(ir=>!ir.cancel&&!ir.gone&&!ir.ghost&&ir!==ie&&ir.est-u.min>=Wt);return{cls:"v-miss",pin:1,miss:1,nxt:an,x:ie,ghost:!!ie.ghost,big:__t(311),small:`${at(ie.est)} \xB7 ${ie.fam}${__t(303)}${ie.dest}${ie.plat?__t(312)+ie.plat:""}${ie.num?" \xB7 "+__t(304)+ie.num:""}`,warn:an?`\u27A1\uFE0F ${__t(313)}: ${an.est-u.min-Wt<1?__t(314):__t(315)+" "+Qs(an.est-u.min-Wt)} \xB7 ${at(an.est)}${an.arr!=null?" \u2192 "+at(an.arr):""}${an.plat?__t(312)+an.plat:""}${an.num?" \xB7 "+__t(304)+an.num:""}`:""}}return{pin:Ot?1:0,cls:Tn,ghost:!!ie.ghost,big:ct||wt?ve<1?__t(316):__t(317)+Qs(ve):bt?ve<1.5?__t(318):__t(319)+Qs(ve)+__t(320):ve<1.5?__t(321):__t(322)+Qs(ve),warn:ie.unconf?"\u26A0\uFE0F "+__t(323):Ot&&!ie.live&&ie.rodLive&&!ie.ghost?"\u{1F4E1} "+__t(324):!ie.ghost&&ie.noPos&&Ot?"\u{1F4E1} "+__t(325):!ie.ghost&&ie.late&&Ot?__t(326):ie.ghost?`\u26A0\uFE0F ${__t(327)}${fs?`${__t(328)}${at(fs.est)}`:""}`:Te?__t(329):"",small:`${ie.bus?__t(330):""}${at(ie.est)} \xB7 ${ie.fam}${__t(303)}${ie.dest}${ie.plat?__t(312)+ie.plat:""}${ie.dl>=1?` \xB7 +${Math.round(ie.dl)} min`:""}${ie.arr!=null?`${__t(331)}${at(ie.arr)}`:""}${ie.num?" \xB7 "+__t(304)+ie.num:""}`,x:ie}},$0=Sn||new Set([P]),V0=lt=>{let Ot=lt.tr;if(!Ot)return null;let ie=Ot.pat.stops,ve=ie.indexOf(x);if(ve<0)return null;let Tn=-1;for(let fs=ve+1;fs<ie.length;fs++)if($0.has(ie[fs])){Tn=fs;break}return Tn<0?null:lt.est+(Ot.pat.t[2*Tn]-Ot.pat.t[2*ve+1])};fe.to.forEach(lt=>{lt.arr=V0(lt)});let Ul=fe.out.length?"out":"otros",ei=zr("to"),Qa=zr(Ul);if(wt||o===Nt&&Nt.acc<=40&&(Nt.dist[o.st[o.i]]||9)<.08){for(let lt of[ei.x,Qa.x].concat(o===Nt?[zr("all").x]:[]))if(lt&&us.has(o.key)&&String(us.get(o.key))===String(lt.num)&&!lt.cancel&&lt.est-u.min<=2&&lt.est-u.min>-.5){let Ot="w"+lt.num+"|"+Math.round(lt.sm);cp.has(Ot)||(cp.add(Ot),Ml(`${__t(332)}${lt.fam}${__t(303)}${lt.dest}`,`${Math.round(lt.est-u.min)<=1?__t(333):__t(334)+Math.round(lt.est-u.min)+" min"}${__t(303)}${E[x].n}${lt.plat?__t(312)+lt.plat:""}`))}}let yp=Ce()&&u.live,Sp=z.size===1,H0=lt=>{let Ot=lt.est-u.min;return ct?lt.cancel?"cx":Ot<0?"u-miss":"u-info":lt.cancel?"cx":Ot<Wt?"u-miss":Ot<Wt+1.5?"u-now":Ot<Wt+5?"u-soon":"u-ok"},G0=lt=>{if(lt.gone)return`<li class="hr u-gone${lt.live?" on":""}${Ba(lt)?" sel":""} go" data-dk="${p.push(lt)-1}" title="Ya ha salido: toca para ver d\xF3nde va"><span class="hrt"><b>${at(lt.est)}${__t(335)}${is(Math.max(1,Math.round(u.min-lt.est))+" min")}</small></span><span class="hrd">${zi((Sp?"":lt.fam+" \xB7 ")+lt.dest,lt.fam)}${__t(336)}${m(lt.num)}</small></span><span class="hrm">${lt.dl>=1?`<em class="dl ${$i(lt.dl)}">+${Math.round(lt.dl)}</em>`:""}</span></li>`;let Ot=!lt.cancel&&lt.est-u.min<Wt,ie=xu(lt.num,"");return`<li class="hr ${H0(lt)}${lt.live?" on":""}${lt.ghost?" gh":""}${Ba(lt)?" sel":""}${ds&&String(lt.num)===ds?" pin":""}${bi.some(ve=>{let Tn=gu(ve,t.days.indexOf(u.ymd));return Tn&&String(Tn.num)===String(lt.num)})?" fav":""} go" style="--lc:${q[lt.fam]||"#6b7385"}" data-dk="${p.push(lt)-1}" title="${lt.cancel?__t(302):Ot?__t(311):__t(337)}"><span class="hrt"><b>${lt.cancel?"\u2715":Ot?at(lt.est):Qs(lt.est-u.min)}</b><small>${lt.cancel?__t(338):lt.late?__t(339):Ot?__t(340):lt.ghost?__t(341):at(lt.est)}</small></span><span class="hrd">${lt.bus?'<i class="bus" title="Autob\xFAs que sustituye al tren por obras">\u{1F68C}</i>':""}${zi((Sp?"":lt.fam+" \xB7 ")+lt.dest,lt.fam)}${ie.length?`<i class="cr" title="${m(ie.map(ve=>El(ve.kind)).join(" \xB7 "))}">${ie.slice(0,2).map(ve=>wl[ve.kind]).join("")}</i>`:""}${lt.arr!=null?`${__t(342)}${at(lt.arr)}${lt.num?" \xB7 "+__t(304)+m(lt.num):""}${(()=>{let ve=lt.num&&gi(lt.num);return ve&&ve.n>=3&&ve.late/ve.n>=.5?`${__t(343)}${ve.late}/${ve.n})</b>`:""})()}</small>`:""}${lt.obs?`<small class="hro">${m(lt.obs)}</small>`:""}${lt.unconf?`<small class="hro unc">${__t(344)}</small>`:""}</span><span class="hrm">${!lt.cancel&&lt.dl>=1?`<em class="dl ${$i(lt.dl)}">+${Math.round(lt.dl)}</em>`:""}${lt.plat?`${__t(223)}${m(lt.plat)}</i>`:""}</span></li>`},to=(lt,Ot,ie)=>`<div class="hcol"><div class="hdir">${Vi(lt)}${ie?`<button type="button" class="hhide" data-hhide="${o.key}:${ie}" title="${__t(345)}">\u2715</button>`:""}</div><div class="hv ${Ot.cls}${Ot.ghost||Ot.pin&&Ot.x&&Ot.x.noPos&&!Ga([Ot.x.fam]).length?" gh":""}${Ot.x?" go":""}"${Ot.miss&&Ot.nxt&&Ot.nxt.num?` data-pinnext="${o.key}:${m(Ot.nxt.num)}" title="${__t(346)}"`:Ot.x?` data-dk="${p.push(Ot.x)-1}"`:""}><b>${Ot.big}</b>${Ot.pin?`<button type="button" class="hunpin" data-unpin="${o.key}" title="${__t(347)}">\u{1F4CC} ${__t(348)} \u2715</button>`:""}<small>${m(Ot.small)}</small>${Ot.pin&&Ot.x&&Ot.x.num?(ve=>ve?`<span class="hwhere">\u{1F4CD} ${m(ve)}</span>`:"")(Tu(Ot.x.num)):""}${Ot.warn?`<span class="hvw">${m(Ot.warn)}</span>`:""}</div><ol>${fe[lt].slice(0,(o.more?lt==="all"||o.hide?20:10:lt==="all"?7:o.hide?8:4)+fe[lt].filter(ve=>ve.gone).length).map(G0).join("")||"<li><span>\u2014</span></li>"}</ol></div>`;if(o===Nt){let lt=zr("all");var W0=lt.x?`<span class="nw">${lt.big}</span> \xB7 <span class="nw"><b>${at(lt.x.est)}</b> ${m(lt.x.fam)}${__t(349)}${m(lt.x.dest)}${lt.x.plat?'<span class="nw">'+__t(312)+m(lt.x.plat)+"</span>":""}`:lt.big}let X0=o===Nt?W0:ei.x?`<span class="nw">${ei.big}${ei.x.plat?__t(312)+m(ei.x.plat):""}</span> \xB7 <span class="nw"><b>${at(ei.x.est)}</b>${ei.x.arr!=null?`${__t(351)}${at(ei.x.arr)}</b>`:""}${__t(350)}${m(U)}</span>`:__t(352)+m(U),Ge=o===Nt?(lt=>lt.pin?lt:null)(zr("all")):ei.pin?ei:Qa.pin?Qa:null;Ge&&Ge.x&&us.has(o.key)&&hp(Ge,E[x].n);let q0=Ge?o===Nt?"all":Ge===ei?"to":Ul:"",$r=!!(Ge&&(Ge.ghost||Ge.x.noPos&&!Ga([Ge.x.fam]).length||Ge.x.cancel)),Fu=!!(Ge&&Ge.miss),Vr=$r?fe[q0].find(lt=>!lt.cancel&&!lt.ghost&&!lt.gone&&lt.est>Ge.x.est-.01&&lt!==Ge.x&&lt.est-u.min>=(ct||wt?0:Wt)):null,Y0=Fu?`<span class="nw">${__t(353)} <b>${at(Ge.x.est)}</b></span>${Ge.nxt?`<br><span class="nw hnx">${__t(354)} <b>${at(Ge.nxt.est)}</b>${Ge.nxt.arr!=null?` \u2192 <b>${at(Ge.nxt.arr)}</b>`:""}</span>`:""}`:"",Z0=$r?`<span class="nw">\u26A0\uFE0F ${Ge.x.cancel?__t(302):Ge.ghost?__t(355):__t(356)}</span>${Ge.x.cancel?"":` \xB7 <span class="nw"><b>${at(Ge.x.est)}</b>${Ge.x.arr!=null?` \u2192 <b>${at(Ge.x.arr)}</b>`:""}</span>`}${Vr?` \xB7 <span class="nw">${__t(357)} <b>${at(Vr.est)}</b>${Vr.arr!=null?` \u2192 <b>${at(Vr.arr)}</b>`:""}${Vr.plat?__t(312)+m(Vr.plat):""}</span>`:""}`:"";return`<div class="hplace ${o.open?"open":""}${Ge?" pinned":""}${$r?" pgh":""}"><button type="button" class="hhead" data-ht="${o.key}"><span class="hico">${o.ico}</span><span class="htit"><b>${m(E[x].n)}${Ge&&Ge.x.num?`<i class="hpn">\u{1F4CC} ${m(Ge.x.num)}</i>`:""}</b><small class="c${Fu||$r&&Ge.x.cancel?"bad":$r?"warn":Te?"bad":ei.cls.slice(2)}">${$r?Z0:Fu?Y0:X0}</small>${Ge&&Ge.x&&Ge.x.num?(lt=>lt?`<small class="nofit hwh2">\u{1F4CD} ${m(lt)}</small>`:"")(Tu(Ge.x.num)):""}</span><span class="hchev">\u25BE</span></button>`+(o.open?`
      <div class="hbody">
        ${o.st.length>1?`<div class="hst">${o.st.map((lt,Ot)=>{let ie=qt.get(lt);return ie==null?"":`<button type="button" data-hs="${o.key}:${Ot}" class="${Ot===o.i?"on":""}">${m(E[ie].n)}</button>`}).join("")}</div>`:""}
        ${o===Nt?`<div class="hwalk">\u{1F4CD} A ${(()=>{let lt=Nt.dist[o.st[o.i]]||0;return lt<1?Math.round(lt*100)*10+" m":lt.toFixed(1).replace(".",",")+" km"})()}${__t(359)}${o.walk}${__t(360)}`:""}
        ${Y?`<div class="hwalk away">${__t(362)}<a data-hplat="${o.key}${__t(361)}`:wt?`${__t(363)}${o.key}${__t(364)}`:bt?`${__t(365)}${Math.round(it)} min</b>${k&&C<=3?__t(366):""} \xB7 <a data-hgo="${o.key}${__t(361)}`:""}${ct&&o!==Nt?`${__t(367)}${C<10?C.toFixed(1).replace(".",","):Math.round(C)}${__t(368)}`:""}<div class="hwalk"${ct||wt||bt?" hidden":""}><button type="button" class="hgo" data-hgo="${o.key}:1">\u{1F6B6} Ya he salido</button><button type="button" class="hgo hplat" data-hplat="${o.key}:1">${__t(369)}</button><span class="hstep" title="${__t(370)}">${__t(371)} <button type="button" data-hw="${o.key}:-1">\u2212</button><b>${o.walk} min</b><button type="button" data-hw="${o.key}:1">+</button> ${__t(372)}</span></div>
        ${(()=>{let lt=bi.filter(Ot=>o.st.includes(Ot.sid));return lt.length?`<div class="hfav">${lt.map(Ot=>{let ie=gu(Ot,t.days.indexOf(u.ymd)),ve=ie&&_e.find(Tn=>String(Tn.num)===String(ie.num));return`\u2B50 <b>${Ot.t}</b> ${m(Ot.fam)} ${ve?ve.cancel?__t(373):ve.gone?__t(220):ve.dl>=1?`<em class="dl ${$i(ve.dl)}">+${Math.round(ve.dl)}${__t(374)}${at(ve.est)}`:__t(375):__t(376)}`}).join("<br>")}</div>`:""})()}
        ${Z&&Ze?`${__t(377)}${[...z].sort(N).map(Nn).join(" ")}${__t(378)}${U}${__t(379)}${Ze}${__t(380)}`:g?`${__t(381)}${[...K].sort(N).slice(0,3).map(Nn).join(" ")}${__t(382)}`:""}
        ${He.length?`<div class="hal ${Te?"bad":""}${Ru.v?" open":""}" data-halx>\u26A0\uFE0F ${za(He[0])} ${m(He[0].txt)} <small>${$a(He[0])}</small>${He.length>1?` <a data-hal>+${He.length-1}${__t(383)}`:""}</div>`:`${__t(384)}${[...z].sort(N).join(", ")}</div>`}
        ${(()=>{let lt=o.st.flatMap(Ot=>xu("",Ot));return lt.length?`<div class="hcr">${lt.slice(0,3).map(Ot=>`${wl[Ot.kind]} <b>${m(El(Ot.kind))}</b> <small>${Ot.up>1?Ot.up+__t(262):""}${Hf(Ot)}</small>`).join("<br>")}</div>`:""})()}
        ${o===Nt?`<div class="hcols one">${to("all",zr("all"))}</div>`:o.hide==="out"?`<div class="hcols one">${to("to",ei)}</div><a class="hshow" data-hshow="${o.key}${__t(385)}`:o.hide==="to"?`<div class="hcols one">${to(Ul,Qa)}</div><a class="hshow" data-hshow="${o.key}${__t(385)}`:`<div class="hcols">${to("to",ei,"to")}${to(Ul,Qa,"out")}</div>`}
        ${_e.length>(o===Nt?7:8)?`<button type="button" class="hmore" data-hmore="${o.key}">${o.more?__t(386):__t(387)}</button>`:""}
        <div class="hsrc"><span class="hsrcT" hidden title="${yp?A.get(E[x].id)?.d?__t(388):__t(389):__t(390)} \xB7 \u25CF = ${__t(391)}">${yp?A.get(E[x].id)?.d?__t(392):__t(393):__t(219)}</span><a data-hmap="${x}${__t(358)}${o===Nt?__t(394):`<a data-hset="${o.key}${__t(395)}`}${o===We?`${__t(396)}`:""}</div>
      </div>`:"")+"</div>"}let Ti={on:(()=>{try{return localStorage.getItem("rod_push")==="1"}catch{return!1}})(),busy:!1},ep=/iPhone|iPad|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,np=()=>matchMedia("(display-mode: standalone)").matches||navigator.standalone===!0,tr=new Set((()=>{try{return JSON.parse(localStorage.getItem("rod_aloff")||"[]")}catch{return[]}})()),Al=()=>{let o=new Set;return[...je.st,...We.st].forEach(u=>{let p=qt.get(u);p!=null&&E[p].fams.forEach(x=>o.add(x))}),[...o].sort(N)},Za=()=>({stations:[...je.st,...We.st],lines:Al().filter(o=>!tr.has(o))}),b0=o=>Uint8Array.from(atob(o.replace(/-/g,"+").replace(/_/g,"/")+"===".slice((o.length+3)%4)),u=>u.charCodeAt(0));async function ip(){return!("serviceWorker"in navigator)||!("PushManager"in window)||location.protocol!=="https:"?null:await navigator.serviceWorker.getRegistration()||navigator.serviceWorker.register("./sw.js")}async function sp(o){let p=await(await fetch($.url.replace(/\/+$/,"")+"/push/subscribe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sub:o.toJSON(),...Za()})})).json();if(!p.ok)throw new Error(p.err||"error")}function Cl(){let o=li(je),u=li(We);if(o==null||u==null)return o!=null?je:u!=null?We:null;if(Nt.w&&Date.now()-Nt.fix<3*36e5){let p=x=>Math.hypot(E[x].w[0]-Nt.w[0],E[x].w[1]-Nt.w[1]);return p(o)<=p(u)?je:We}return new Date().getHours()<13?je:We}function rp(o){let u=Cl(),p=u===je?We:je,x=u&&li(u),M=p&&li(p);if(x==null||M==null)return!0;let w=(o.es||"")+" "+(o.txt||""),P=t.days.indexOf(se().ymd),U=se(),D=[...new Set([...w.matchAll(/\btr(?:en|ain)s?\s*(?:n[º°o.]\s*)?(\d{4,6})\b/gi)].map(Z=>Z[1]))];if(D.length)return D.some(Z=>{let g=Ha(Z);if(!g)return!1;let C=g.pat.stops,k=C.indexOf(x),Y=C.indexOf(M);if(k<0||Y<0||k>Y)return!1;let ct=g.t0+g.pat.t[2*k+1];return ct>U.min-60&&ct<U.min+150});let z=w.match(/(?:destino|destinaci[óo]|direcci[óo]n?|sentido|sentit|cap a|hacia)\s+(?:a\s+|de\s+)?([^.,;:()]{3,40})/i);if(z){let Z=z[1].toLowerCase(),g=E.findIndex(C=>C.n&&Z.startsWith(C.n.toLowerCase()));if(g>=0){let C=(Q[P]||[]).find(k=>{let Y=k.pat.stops;return Y[Y.length-1]===g&&Y.includes(x)&&Y.includes(M)});if(C){let k=C.pat.stops;return k.indexOf(x)<k.indexOf(M)}}}return!0}let kn={on:(()=>{try{return localStorage.getItem("rod_ln")==="1"}catch{return!1}})(),seen:null};function w0(){let{lines:o,stations:u}=Za(),p=new Set(o),x=new Set(u.map(P=>qt.get(P))),M=$.alerts.filter(P=>([...P.fams].some(U=>p.has(U))||[...P.stops||[]].some(U=>x.has(U)))&&rp(P));if(!kn.seen){try{kn.seen=new Set(JSON.parse(localStorage.getItem("rod_lnseen")||"[]"))}catch{kn.seen=new Set}if(!kn.seen.size){M.forEach(P=>kn.seen.add(P.id+"|"+P.txt.length)),ap();return}}let w=M.filter(P=>!kn.seen.has(P.id+"|"+P.txt.length));if(w.length&&(w.forEach(P=>kn.seen.add(P.id+"|"+P.txt.length)),ap(),!(!kn.on||!("Notification"in window)||Notification.permission!=="granted")))for(let P of w.slice(0,3)){let U=(P.src==="Adif"?__t(271):"Rodalies")+(P.fams.size?" \xB7 "+[...P.fams].sort(N).slice(0,4).join(" "):""),D={body:P.txt.slice(0,240),icon:"icons/icon-192.png",tag:"rod-"+P.id};(navigator.serviceWorker&&navigator.serviceWorker.getRegistration?navigator.serviceWorker.getRegistration():Promise.resolve(null)).then(z=>z?z.showNotification(U,D):new Notification(U,D)).catch(()=>{try{new Notification(U,D)}catch{}})}}function ap(){try{localStorage.setItem("rod_lnseen",JSON.stringify([...kn.seen].slice(-400)))}catch{}}async function E0(){if(kn.on)kn.on=!1,ln(__t(397));else{if(!("Notification"in window)){ln(ep&&!np()?__t(398):__t(399));return}if(await Notification.requestPermission()!=="granted"){ln(__t(400));return}kn.on=!0,ln(__t(401)+Za().lines.join(", ")+__t(402))}try{localStorage.setItem("rod_ln",kn.on?"1":"")}catch{}De(!0)}async function T0(){if(!$.repOk)return E0();if(!Ti.busy){Ti.busy=!0;try{let o=await ip();if(!o){ln(ep&&!np()?__t(403):__t(404));return}if(await navigator.serviceWorker.ready,Ti.on){let u=await o.pushManager.getSubscription();u&&(fetch($.url.replace(/\/+$/,"")+"/push/unsubscribe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({endpoint:u.endpoint})}).catch(()=>{}),await u.unsubscribe().catch(()=>{})),Ti.on=!1,ln(__t(397))}else{if(!$.url){ln(__t(405));return}if(await Notification.requestPermission()!=="granted"){ln(__t(400));return}let p=(await Ct($.url.replace(/\/+$/,""),"/push/key")).key,x=await o.pushManager.getSubscription()||await o.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:b0(p)});await sp(x),Ti.on=!0,ln(__t(406)+Za().lines.join(", "))}try{localStorage.setItem("rod_push",Ti.on?"1":"")}catch{}}catch(o){ln(__t(407)+(o.message||o))}finally{Ti.busy=!1,De(!0)}}}async function op(){if(Ti.on)try{let o=await ip(),u=o&&await o.pushManager.getSubscription();u&&await sp(u)}catch{}}let bu=!1,lp="";function wu(){let o=ut?"t"+(ut.tid||ut.vtid):Lt>=0?"s"+Lt:Kt?"a":V?"n":"";o!==lp&&(bu=!1,lp=o);let u=innerWidth<=640&&!!o&&!bu&&!document.documentElement.classList.contains("tabmode"),p=_("#inf");p.classList.contains("compact")!==u&&(p.classList.toggle("compact",u),requestAnimationFrame(()=>{if(d.style.display!=="none"){let x=p.getBoundingClientRect().bottom;d.style.top=Math.round(x+8)+"px",d.style.maxHeight=Math.max(140,_("#rc").getBoundingClientRect().top-x-16)+"px"}}))}let cp=new Set,Eu=(()=>{let o=vt(new Date).ymd;try{let u=JSON.parse(localStorage.getItem("rod_pn")||"{}");return u.d===o?u:{d:o}}catch{return{d:o}}})();function A0(o,u,p){if(!(!(kn.on||Ti.on)||!("Notification"in window)||Notification.permission!=="granted")){if(!document.hidden){ln(o+" \xB7 "+u);return}(navigator.serviceWorker&&navigator.serviceWorker.getRegistration?navigator.serviceWorker.getRegistration():Promise.resolve(null)).then(x=>x?x.showNotification(o,{body:u,tag:p,icon:"icons/andana-192.png"}):new Notification(o,{body:u})).catch(()=>{try{new Notification(o,{body:u})}catch{}})}}function hp(o,u){let p=o.x,x=se();if(!x.live||p.gone||p.est<x.min-1)return;let M=p.num+"|"+Math.round(p.sm),w=Eu[M]||{},P=`${__t(408)} ${at(p.sm)}`,U=`${p.fam} \u2192 ${p.dest}`,D="",z="";p.cancel?w.c||(w.c=1,D=`\u26A0\uFE0F ${P} ${__t(143)}`,z=`${U}. ${__t(409)}`):o.ghost&&!w.g?(w.g=1,D=`\u26A0\uFE0F ${P} ${__t(410)}`,z=`${U}: ${__t(411)}`):p.dl>=5&&p.dl>=(w.dl||0)+5?(w.dl=Math.round(p.dl),D=`\u23F3 ${P} ${__t(412)} +${w.dl} min`,z=`${U}: ${__t(413)} ${u} ${__t(414)} ${at(p.est)}.`):p.plat&&w.p&&w.p!==String(p.plat)&&(D=`${__t(415)}: ${P}`,z=`${U}: ${__t(416)} ${p.plat} ${__t(417)} ${w.p}).`),p.plat&&(w.p=String(p.plat)),Eu[M]=w;try{localStorage.setItem("rod_pn",JSON.stringify(Eu))}catch{}D&&A0(D,z,"pin-"+p.num)}let Nr={open:!1,seen:new Set((()=>{try{return JSON.parse(localStorage.getItem("rod_seen")||"[]")}catch{return[]}})())};document.addEventListener("click",o=>{let u=o.target.closest&&o.target.closest("[data-nowx]");if(!u||o.target.closest("a"))return;let p=u.dataset.nowx?u.dataset.nowx.split("|"):[];if(p.length){if(u.classList.contains("col"))Nr.open=!0;else{Nr.open=!1,p.forEach(x=>Nr.seen.add(x));try{localStorage.setItem("rod_seen",JSON.stringify([...Nr.seen].slice(-200)))}catch{}}De(!0)}});function C0(o){let u=o.lines;if(!u.length&&Nt.st&&Nt.st.length){let g=new Set;Nt.st.forEach(C=>{let k=qt.get(C);k!=null&&E[k].fams.forEach(Y=>g.add(Y))}),u=[...g].sort(N)}let p=new Set(u),x=$.alerts.filter(g=>!p.size||[...g.fams].some(C=>p.has(C))),M=`<a class="hwa" href="https://www.whatsapp.com/channel/0029Vav4hGTId7nPenKMuo2C" target="_blank" rel="noopener" title="${__t(131)}" aria-label="WhatsApp"><svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path fill="#25d366" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2z"/><path fill="#fff" d="M8.6 7.2c.2-.4.4-.4.7-.4h.5c.2 0 .4 0 .6.5l.8 1.9c.1.2.1.4 0 .6l-.5.7c-.1.2-.2.3 0 .6.5.8 1.1 1.5 1.9 2 .3.2.4.1.6 0l.7-.8c.2-.2.4-.2.6-.1l1.8.9c.3.1.4.2.4.4 0 .5-.2 1.2-.8 1.6-.6.4-1.5.6-2.9 0-1.6-.7-3-2-3.9-3.4-.8-1.2-1.1-2.4-.5-3.5z"/></svg></a>`,w=x.reduce((g,C)=>Math.max(g,Ya(C)),0),P=w===3?"\u26D4 ":w===2?"\u26A0\uFE0F ":"\u2139\uFE0F ",U=`<div class="hnowh"><span class="hnowl"><b>${x.length?P+x.length+(x.length===1?__t(273):__t(274)):__t(418)}</b>${u.length?u.map(Nn).join(""):""}</span>${M}</div>`,D=x.filter(g=>!Nr.seen.has(g.id)),z=x.length&&(Nr.open||D.length>0),Z=x.reduce((g,C)=>Math.max(g,Ya(C)),0);return`<div class="hnow${Z===3?" bad":Z===2?" warn":Z===1?" info":""}${x.length&&!z?" col":""}" data-nowx="${m(x.map(g=>g.id).join("|"))}">${U}${dp(o,!0)}${z?x.slice().sort((g,C)=>Ya(C)-Ya(g)).map(g=>`<p class="sv${Ya(g)}">${za(g)} ${m(g.txt)} <small>${$a(g)}</small></p>`).join("")+`<small class="hnowt">${__t(419)}</small>`:""}</div>`}let us=new Map((()=>{try{let o=vt(new Date).ymd;return JSON.parse(localStorage.getItem("rod_pin")||"[]").filter(u=>u[2]===o).map(u=>[u[0],u[1]])}catch{return[]}})());function Rl(){if(!document.documentElement.classList.contains("tabmode"))return;let o=[...document.querySelectorAll("#home .hhead .htit small:not(.nofit)")],u=(x,M)=>{x.style.fontSize=M===1?"":(x._f0*M).toFixed(1)+"px",x.querySelectorAll("b").forEach(w=>w.style.fontSize=M===1?"":(x._b0*M).toFixed(1)+"px")},p=1;for(let x of o){if(x.style.whiteSpace="",u(x,1),!x.clientWidth)continue;x._f0=parseFloat(getComputedStyle(x).fontSize);let M=x.querySelector("b");for(x._b0=M?parseFloat(getComputedStyle(M).fontSize):0;x.scrollWidth>x.clientWidth+1&&p>.86;)p-=.02,u(x,p)}if(p<1)for(let x of o)x._f0&&u(x,p);for(let x of o)x.scrollWidth>x.clientWidth+1&&(x.style.whiteSpace="normal")}addEventListener("resize",()=>{try{Rl()}catch{}});let R0=(o,u)=>{let p=o==="work"?We:o==="near"?Nt:je,x=p&&li(p);return x==null?null:hs(x).find(M=>String(M.num)===String(u))||null};function Ur(o,u){u?us.set(o,u):us.delete(o);try{let p=vt(new Date).ymd;localStorage.setItem("rod_pin",JSON.stringify([...us].map(([x,M])=>[x,M,p])))}catch{}}let up=o=>{let u=o&&o.ts?Date.now()/1e3-o.ts:$.okVP?(Date.now()-$.okVP)/1e3:-1;return u>=0?" \xB7 "+is(Kh(Math.round(u))):""};function Tu(o){let u=It.find(w=>w.tr&&String(w.tr.num)===String(o));if(!u){let w=Ha(o),P=se(),U=t.days.indexOf(P.ymd);if(!w)return"";let D=w.day===U-1?1440:0,z=w.t0+w.pat.t[1]-D;return z>P.min?__t(420)+E[w.pat.stops[0]].n+" ("+at(z)+")":""}let p=u.tr,x=w=>E[p.pat.stops[w]].n;if(u.real){let w=u.v;return w.pre?__t(421):w.atStop>=0&&w.before?__t(422)+x(w.atStop):w.atStop>=0&&(w.st==="STOPPED_AT"||u.stop==="st")?ue()?__t(423)+x(w.atStop):__t(424)+x(w.atStop)+up(w):!ue()&&w.next>0?__t(425)+x(w.next-1)+__t(426)+x(w.next)+up(w):w.atStop>=0&&w.next>w.atStop?__t(427)+x(w.atStop)+__t(428)+x(w.next):w.atStop>=0?__t(429)+x(w.atStop):u.stop==="via"&&w.next>0?"\u23F8 "+__t(430)+x(w.next-1)+__t(426)+x(w.next):w.next>0?__t(180)+x(w.next-1)+__t(426)+x(w.next):w.next===0?__t(299)+x(0):""}let M=u.p&&u.p.next;return M>0?__t(431)+x(M-1)+__t(426)+x(M):""}let Ja={k:"",v:null};function I0(o){let u=se(),p=t.days.indexOf(u.ymd);if(p<0||!o.length)return null;let x=Cl(),M=(x&&li(x))??li(je)??li(We),w=u.ymd+o.join()+M;if(Ja.k===w)return Ja.v;Ja.k=w;let P=new Set(o),U=M!=null?g=>Q[g].filter(C=>{let k=C.pat.stops.indexOf(M);return k>=0&&k<C.pat.stops.length-1}).length:g=>Q[g].filter(C=>P.has(C.fam)).length,D=g=>{let C=new Date(+g.slice(0,4),+g.slice(4,6)-1,+g.slice(6)).getDay();return C===0?0:C===6?6:1},z=U(p),Z=Math.max(0,...t.days.map((g,C)=>C!==p&&D(g)===D(u.ymd)?U(C):0));return Ja.v=Z>=20&&z<Z*.8?{n:z,ref:Z,pct:Math.round(z/Z*100),st:M!=null?E[M].n:""}:null,Ja.v}function dp(o,u){let p=o.lines||[],x=I0(p);if(!x)return"";let M=$.alerts.some(w=>[...w.fams].some(P=>p.includes(P))&&/huelga|vaga\b|servicios? m[ií]nimos|serveis m[ií]nims/i.test((w.es||"")+" "+w.txt));return u?`<div class="hnowred">\u{1F5D3}\uFE0F <b>${M?__t(432):__t(433)}</b>: ${x.st?`${__t(434)} ${m(x.st)} ${x.n} ${__t(435)} ${x.ref} ${__t(436)}`:`${__t(437)} ${x.n} ${__t(435)} ${x.ref} ${__t(436)}`} (${x.pct} %). ${M?__t(438):__t(439)}</div>`:`<div class="hred">\u{1F5D3}\uFE0F <b>${M?__t(440):__t(441)}</b> \xB7 ${__t(442)}: ${x.st?`${__t(443)} ${m(x.st)} ${__t(444)} ${x.n} ${__t(193)} ${x.ref} ${__t(71)}`:`${x.n} ${__t(193)} ${x.ref} ${__t(445)} ${p.join(", ")}`} (${x.pct} % ${__t(446)}).</div>`}function P0(o){let u=Ga(o.lines||[]);if(!u.length)return"";let p=[je,We].some(x=>{let M=li(x),w=M!=null&&A.get(E[M].id);return w&&w.d&&Array.isArray(w.d.trains)&&!w.d.trains.length});return`<div class="hnopos">\u{1F4E1} <b>${__t(447)} ${u.join(", ")}</b> ${__t(448)}${p?" \xB7 "+__t(449):""}: ${__t(450)}</div>`}function L0(o){if(!Nt.w)return[];let u=Nt.k||1;return It.filter(p=>p.tr&&p.tr!==o&&p.p&&p.p.w&&Math.hypot(p.p.w[0]-Nt.w[0],p.p.w[1]-Nt.w[1])*u<3).sort((p,x)=>Math.hypot(p.p.w[0]-Nt.w[0],p.p.w[1]-Nt.w[1])-Math.hypot(x.p.w[0]-Nt.w[0],x.p.w[1]-Nt.w[1])).slice(0,2).map(p=>p.tr)}function D0(o){if(!Jt.tid)return"";let u=It.find(Y=>Y.tr&&String(Y.tr.num)===Jt.tid)||Zs(o).out.find(Y=>Y.tr&&String(Y.tr.num)===Jt.tid);if(!u)return"";let p=u.tr,x=p.pat.stops,M=u.real?u.v.next:u.p.next;if(M==null||M<0)return"";let w=tt(p),P=typeof w=="number"?Math.max(0,w/60):0,U=t.days.indexOf(o.ymd),D=p.day===U-1?1440:0,z=Be&&Be.num===Jt.tid?x.indexOf(qt.get(Be.sid)):-1;z<M&&(z=x.length-1);let Z=Xa(p,u.real?u.v:null,z,p.t0+p.pat.t[2*z]+P-D),g=Z-o.min,C=u.real&&u.v.atStop>=0?u.v.atStop:-1,k=Tu(p.num)||__t(299)+E[x[M]].n;return`<div class="hplace onbc"><button type="button" class="hhead" data-onbgo><span class="hico">\u{1F686}</span><span class="htit"><b>${Nn(p.fam)} ${__t(304)}${m(p.num)}</b><small class="nofit cok">${m(k)} \xB7 <span class="nw">${__t(451)} ${m(E[x[z]].n)}</span> <span class="nw">${g>=1?__t(104)+Qs(g)+" \xB7 ":""}<b>${at(Z)}</b>${P>=1?` <em class="dl ${$i(P)}">+${Math.round(P)}</em>`:""}</span></small></span><span class="hchev">\u203A</span></button><button type="button" class="hpn onbx" data-onbx aria-label="${__t(452)}" title="${__t(452)}">\u2715</button>${(Y=>Y.length&&!(Jt.manual&&Date.now()<Jt.manual)?`<div class="onbch">${Y.map(ct=>`<button type="button" class="onbalt" data-onbpick="${m(ct.num)}">${__t(453)} ${m(ct.num)}?</button>`).join("")}</div>`:"")(L0(p))}</div>`}let Il={until:0};function N0(o){if(o.hasAttribute("data-onbx")){Jt.no.set(Jt.tid,Date.now()+20*6e4),Jt.tid="",Jt.manual=0,Jt.quiet=Date.now()+10*6e4,Rt=null,De(!0);return}Jt.no.set(Jt.tid,Date.now()+20*6e4),Jt.tid=o.dataset.onbpick,Jt.manual=Date.now()+90*6e4;let u=It.find(p=>p.tr&&String(p.tr.num)===Jt.tid);if(u){Rt=u.tr;let p=u.tr.pat.stops,x=u.real?u.v.next:u.p.next,M=[...je.st,...We.st],w=p.findIndex((P,U)=>U>=x&&M.includes(E[P].id));w>0&&(Be={num:Jt.tid,sid:E[p[w]].id,at:Date.now()},As())}ln(`${__t(454)} ${Jt.tid}`),De(!0)}function De(o){let u=_("#home");if(!u)return;let p=performance.now();if(!o&&p-Kf<4e3||!o&&Il.until>Date.now())return;Kf=p;let x=se(),M=[],w=Za(),P=g=>{let C=li(g);return C==null||!Nt.w?1:Math.hypot(E[C].w[0]-Nt.w[0],E[C].w[1]-Nt.w[1])},U=[Nt,...[je,We].sort((g,C)=>P(g)-P(C))],D=(document.documentElement.classList.contains("tabmode")?C0(w):dp(w))+P0(w)+D0(x)+U.map(g=>M0(g,x,M)).join("")+(qa.some(g=>g.open)&&w.lines.length,"");u.className=qa.some(g=>g.open)?"open":"";let z=_("#bell");z||(z=document.createElement("button"),z.type="button",z.id="bell",z.onclick=T0,_("#inf .more").prepend(z));{let g=$.repOk?Ti.on:kn.on;z.hidden=!w.lines.length,z.className=g?"on":"",z.textContent=(g?__t(462):__t(463))+w.lines.join(", "),z.title=(g?__t(464):__t(465))+__t(67)+w.lines.join(", ")+($.repOk?"":__t(466))}if(u._h===D)return;u._h=D,u.innerHTML=D,Rl(),u._onbDel||(u._onbDel=1,u.addEventListener("pointerdown",()=>{Il.until=Date.now()+1500},!0),u.addEventListener("pointerup",()=>{Il.until=Date.now()+400},!0),u.addEventListener("click",g=>{let C=g.target.closest&&g.target.closest("[data-onbx],[data-onbpick]");C&&(g.stopPropagation(),Il.until=0,N0(C))},!0));{let g=u.querySelector("[data-onbgo]");g&&(g.onclick=C=>{if(C.target.closest("[data-onbx]")){Jt.no.set(Jt.tid,Date.now()+20*6e4),Jt.tid="",Jt.manual=0,Rt=null,De(!0);return}let k=C.target.closest("[data-onbpick]");if(k){Jt.no.set(Jt.tid,Date.now()+20*6e4),Jt.tid=k.dataset.onbpick,Jt.manual=Date.now()+90*6e4;let ct=It.find(wt=>wt.tr&&String(wt.tr.num)===Jt.tid);if(ct){Rt=ct.tr,ut=ct.tr;let wt=ct.tr.pat.stops,dt=ct.real?ct.v.next:ct.p.next,bt=[...je.st,...We.st],it=wt.findIndex((ce,_e)=>_e>=dt&&bt.includes(E[ce].id));it>0&&(Be={num:Jt.tid,sid:E[wt[it]].id,at:Date.now()},As()),d._h="",Ne()}De(!0);return}let Y=It.find(ct=>ct.tr&&String(ct.tr.num)===Jt.tid);Y&&(V=Kt=et=!1,Lt=-1,ut=Y.tr,d._h="",Ne())})}{let g=[...u.children].find(C=>C.classList.contains("hplace")&&!C.querySelector(".hnew"));g&&g.classList.add("lead")}let Z=g=>g==="work"?We:g==="near"?Nt:je;u.querySelectorAll("[data-hloc]").forEach(g=>g.onclick=()=>{Nt.err="",Mu(!0)}),u.querySelectorAll("[data-ht]").forEach(g=>g.onclick=()=>{if(_("#inf").classList.contains("compact")){bu=!0,wu();return}let C=Z(g.dataset.ht);C.open=!C.open,Ei(C),De(!0),(ut||Lt>=0||Kt||V)&&(d._h="",Ne())}),u.querySelectorAll("[data-hs]").forEach(g=>g.onclick=()=>{let[C,k]=g.dataset.hs.split(":"),Y=Z(C);Y.i=+k,Ei(Y),De(!0)}),u.querySelectorAll("[data-hw]").forEach(g=>g.onclick=()=>{let[C,k]=g.dataset.hw.split(":"),Y=Z(C);Y.walk=y(Y.walk+ +k,0,60),Ei(Y),De(!0)}),u.querySelectorAll("[data-hmap]").forEach(g=>g.onclick=()=>{let C=+g.dataset.hmap;V=Kt=et=!1,ut=null,Lt=C,Ee(),Object.assign(s,{tx:E[C].w[0],ty:E[C].w[1],dist:18,tilt:Math.max(s.tilt,.5)}),d._h="",Ne(),a()}),u.querySelectorAll("[data-hset]").forEach(g=>g.onclick=()=>fp(g.dataset.hset)),u.querySelectorAll("[data-hnear]").forEach(g=>g.onclick=()=>{let C=qt.get(Nt.st[0]);C!=null&&Au(C,g.dataset.hnear)}),u.querySelectorAll("[data-hmore]").forEach(g=>g.onclick=()=>{let C=Z(g.dataset.hmore);C.more=!C.more,De(!0)}),u.querySelectorAll("[data-hhide]").forEach(g=>g.onclick=C=>{C.stopPropagation();let[k,Y]=g.dataset.hhide.split(":"),ct=Z(k);ct.hide=Y,Ei(ct),De(!0)}),u.querySelectorAll("[data-hshow]").forEach(g=>g.onclick=()=>{let C=Z(g.dataset.hshow);C.hide="",Ei(C),De(!0)}),u.querySelectorAll("[data-hgo]").forEach(g=>g.onclick=C=>{C.stopPropagation();let[k,Y]=g.dataset.hgo.split(":"),ct=Z(k);ct.goAt=Y==="1"?Date.now():0,ct.goAt&&(ct.platAt=0),Ei(ct),De(!0)}),u.querySelectorAll("[data-hplat]").forEach(g=>g.onclick=C=>{C.stopPropagation();let[k,Y]=g.dataset.hplat.split(":"),ct=Z(k);ct.platAt=Y==="1"?Date.now():0,ct.platAt&&(ct.goAt=0),Ei(ct),De(!0)}),u.querySelectorAll("[data-hnotst]").forEach(g=>g.onclick=C=>{C.stopPropagation(),Nt.homeW=Nt.w;try{localStorage.setItem("rod_homew",JSON.stringify(Nt.w))}catch{}De(!0)}),u.querySelectorAll("[data-hdel]").forEach(g=>g.onclick=()=>{We.st=[],We.open=!1,Ei(We),De(!0),op()}),u.querySelectorAll("[data-dk]").forEach(g=>g.onclick=()=>{let C=M[+g.dataset.dk];if(g.matches("li.hr, .hv")&&!C.gone&&C.num!=null){let k=g.closest(".hplace")?.querySelector("[data-ht]")?.dataset.ht;if(k){let Y=us.get(k)===String(C.num);Ur(k,Y?null:String(C.num)),Y?ut&&String(ut.num)===String(C.num)&&(ut=null,Rt=null,Xe.sk="",d._h="",Ne()):Pl(C,!0),De(!0);return}}Pl(C)}),u.querySelectorAll("[data-pinnext]").forEach(g=>g.onclick=C=>{if(C.target.closest("[data-unpin]"))return;let[k,Y]=g.dataset.pinnext.split(":");Ur(k,Y);let ct=R0(k,Y);ct&&Pl(ct,!0),De(!0)}),u.querySelectorAll("[data-unpin]").forEach(g=>g.onclick=C=>{C.stopPropagation(),Ur(g.dataset.unpin,null),De(!0)}),u.querySelectorAll("[data-hal]").forEach(g=>g.onclick=()=>_("#alr").click()),Wf(u)}function Pl(o,u){if(!o)return;let p=t.days.indexOf(se().ymd),x=It.find(P=>P.real?o.tid&&P.v.tid===o.tid||o.num&&String(P.tr?P.tr.num:P.v.num)===String(o.num):o.tr&&P.tr===o.tr||o.num&&P.tr&&String(P.tr.num)===String(o.num)),M=o.tr||x&&x.tr||(Q[p]||[]).find(P=>String(P.num)===String(o.num));if(V=Kt=et=!1,Lt=-1,u||void 0,ut=x?x.tr||{vtid:x.v.tid}:M||null,!ut)return;u&&(Xe.sk="t"+(ut.num||ut.vtid)),Rt=x&&x.tr?x.tr:null,Rt&&innerWidth<=640&&(d.classList.add("peek"),_("#rc").classList.contains("min")||_("#rcgrab").click());let w=x?x.p.w:null;w&&Object.assign(s,{tx:w[0],ty:w[1],dist:Math.min(s.dist,22)}),Ee(),d._h="",Ne(),Gt=0,a()}let Fr=!1;function fp(o){Fr=o||!1,v.value="",v.placeholder=o==="work"?__t(467):o==="home"?__t(468):__t(469),document.documentElement.classList.add("srch"),f.style.display="none",v.focus()}let pp=()=>document.documentElement.classList.remove("srch");{let o=_("#hfind");o&&(o.onclick=()=>fp(""))}v.addEventListener("blur",()=>setTimeout(()=>{document.activeElement!==v&&pp(),Fr&&!v.value.trim()&&(Fr=!1,v.placeholder=__t(469))},600));function Ib(){}function Au(o,u){let p=u==="work"?We:je,x=E[o].id,M=E.filter(w=>w.fams.size&&w!==E[o]&&Math.hypot(w.w[0]-E[o].w[0],w.w[1]-E[o].w[1])<.6).map(w=>w.id);p.st=[x,...M].slice(0,3),p.i=0,p.open=!0,Ei(p),De(!0),op()}let Ll=_("#lines");Ll.innerHTML=`${__t(470)}`+H.map(o=>`<button type="button" style="--c:${q[o]}" data-f="${o}">${o}</button>`).join("");function mp(){try{De(!0)}catch{}{let o=_("#linebtn");o||(o=document.createElement("button"),o.type="button",o.id="linebtn",Ll.after(o),o.onclick=()=>{nt=[...K][0],et=V=Kt=!1,d._h="",Ne()});let u=K.size===1?[...K][0]:"";o.hidden=!u,u&&(o.innerHTML=`${__t(471)}${m(u)}${__t(472)}`)}Ll.querySelectorAll("[data-f]").forEach(o=>{o.dataset.f!=="*"&&o.classList.toggle("off",!K.has(o.dataset.f))})}Ll.querySelectorAll("[data-f]").forEach(o=>o.onclick=()=>{let u=o.dataset.f;u==="*"?H.forEach(p=>K.add(p)):K.size===H.length?(K.clear(),K.add(u)):K.has(u)?(K.delete(u),K.size||H.forEach(p=>K.add(p))):K.add(u);try{localStorage.setItem("rod_lines",JSON.stringify([...K]))}catch{}mp(),Me(),Ee(),yu(),Gt=0,a()});let Cu=[...document.querySelectorAll("[data-sp]")],vi=0;function gp(o){let u=se();o&&(Pt===o||vi===o)?Pt?(Yt=u.min,oe=u.min,Pt=0,vi=o):(pe=performance.now(),Pt=o,vi=0):o===0?(Pt=0,oe=null,vi=0):(Yt=u.min,pe=performance.now(),oe=u.min,Pt=o,vi=0),Cu.forEach(p=>{let x=+p.dataset.sp;p.classList.toggle("on",x===(Pt||vi)||!Pt&&!vi&&oe==null&&x===0),p.classList.toggle("pz",!!vi&&x===vi),p.textContent=x===0?__t(473):vi===x?"\u25B6 \xD7"+x:Pt===x?"\u23F8 \xD7"+x:"\xD7"+x}),Gt=0,a()}Cu.forEach(o=>o.onclick=()=>gp(+o.dataset.sp)),_("#tsl").oninput=o=>{let u=+o.target.value;Yt=u,oe=u,pe=performance.now(),Pt===0&&!vi&&Cu.forEach(p=>p.classList.remove("on")),Gt=0,a()},setInterval(()=>{oe!=null&&Pt&&Yt+(performance.now()-pe)/6e4*Pt>1560&&(Yt=240,pe=performance.now())},1e3),window.__rodSearch=o=>{let u=S(o.trim());if(!u){f.style.display="none",f._pick=null;return}let p=[],x=[];E.forEach((U,D)=>{if(!U.fams.size)return;let z=S(U.n);z.startsWith(u)||z.includes(" "+u)||z.includes("-"+u)?p.push(D):z.includes(u)&&x.push(D)});let M=p.concat(x).slice(0,7),w=I.filter(U=>S(U.name).startsWith(u)).sort((U,D)=>D.pop-U.pop).slice(0,3),P=M.map(U=>({h:`\u{1F689} ${m(E[U].n)}<em>${[...E[U].fams].sort(N).slice(0,3).map(D=>`<em class="ls" style="background:${q[D]}">${D}</em>`).join(" ")}</em>`,go:()=>{if(pp(),Fr){let D=Fr;Fr=!1,v.placeholder=__t(469),Au(U,D);return}Xe.on&&Xe.cur!=="map"&&kr("map"),V=!1,Kt=!1,et=!1,Lt=U,ut=null,Rt=null,Ee(),Object.assign(s,{tx:E[U].w[0],ty:E[U].w[1],dist:Math.min(s.dist,20),tilt:Math.max(s.tilt,.5)}),Ne(),a()}})).concat(w.map(U=>({h:`${m(U.name)}${__t(474)}`,go:()=>{Object.assign(s,{tx:U.cx,ty:U.cy,dist:y(U.size*3+14,14,60)}),a()}})));f.innerHTML=P.map((U,D)=>`<li data-i="${D}">${U.h}</li>`).join("")||__t(475),f.style.display="block",f._pick=U=>{P[U]&&(P[U].go(),f.style.display="none",v.value="",v.blur())},f.querySelectorAll("li[data-i]").forEach(U=>U.onclick=()=>f._pick(+U.dataset.i))},mp(),Ee();try{let o=new URLSearchParams(location.search).get("st");if(o){let u=S(o),p=-1,x=0;E.forEach((M,w)=>{if(!M.fams.size)return;let P=S(M.n),U=P===u?3:P.startsWith(u)||u.startsWith(P)?2:P.includes(u)||u.includes(P)?1:0;U>x&&(x=U,p=w)}),p>=0&&setTimeout(()=>{Lt=p,Ee(),Object.assign(s,{tx:E[p].w[0],ty:E[p].w[1],dist:18,tilt:.5}),Ne(),a()},300)}}catch{}let Ru={v:!1};document.addEventListener("click",o=>{!(o.target.closest&&o.target.closest("[data-halx]"))||o.target.closest("a")||(Ru.v=!Ru.v,De(!0))}),d.addEventListener("click",o=>{if(!d.classList.contains("peek")||o.target.closest("button,a,input"))return;o.stopPropagation(),o.preventDefault(),d.classList.remove("peek");let u=d.querySelector(".mn");u&&(u.textContent="\u25BE"),d.scrollTop=0},!0);let Xe={on:!1,cur:"now",home:new Map},Dl=matchMedia("(max-width:640px), (max-height:500px) and (pointer:coarse)"),En=document.createElement("nav");En.id="tabs";let U0=[["now","\u{1F552}",__t(473)],["map","\u{1F5FA}\uFE0F",__t(476)],["line","\u{1F4CA}",__t(477)],["set","\u2699\uFE0F",__t(478)]];En.innerHTML=U0.map(([o,u,p])=>`<button type="button" data-tab="${o}"><span>${u}</span><small>${p}</small></button>`).join(""),document.body.appendChild(En);let er=document.createElement("i");er.className="tind",er.setAttribute("aria-hidden","true"),En.prepend(er);let _p=o=>[...En.querySelectorAll("[data-tab]")].find(u=>{let p=u.getBoundingClientRect();return o>=p.left&&o<p.right}),Iu=o=>{!o||!o.offsetWidth||(er.style.width=o.offsetWidth+"px",er.style.height=o.offsetHeight+"px",er.style.top=o.offsetTop+"px",er.style.transform=`translateX(${o.offsetLeft}px)`)},Or=()=>Iu(En.querySelector("[data-tab].on")),F0=()=>{try{let o=window.Capacitor,u=o&&o.isNativePlatform&&o.isNativePlatform()&&o.Plugins&&o.Plugins.Haptics;u&&u.selectionChanged().catch(()=>{})}catch{}},qn={on:!1,b:null,moved:!1,until:0};En.addEventListener("pointerdown",o=>{let u=_p(o.clientX);if(u){qn.on=!0,qn.b=u,qn.moved=!1,En.classList.add("drag"),En.querySelectorAll(".hov").forEach(p=>p.classList.remove("hov")),u.classList.add("hov"),Iu(u);try{En.setPointerCapture(o.pointerId)}catch{}try{let p=window.Capacitor,x=p&&p.Plugins&&p.Plugins.Haptics;x&&p.isNativePlatform()&&x.selectionStart().catch(()=>{})}catch{}}}),En.addEventListener("pointermove",o=>{if(!qn.on)return;let u=_p(o.clientX);u&&u!==qn.b&&(qn.b.classList.remove("hov"),u.classList.add("hov"),qn.b=u,qn.moved=!0,Iu(u),F0())});let xp=o=>{if(qn.on){qn.on=!1,En.classList.remove("drag"),En.querySelectorAll(".hov").forEach(u=>u.classList.remove("hov"));try{let u=window.Capacitor,p=u&&u.Plugins&&u.Plugins.Haptics;p&&u.isNativePlatform()&&p.selectionEnd().catch(()=>{})}catch{}o&&qn.b?(qn.until=Date.now()+500,qn.b.dataset.tab!==Xe.cur?kr(qn.b.dataset.tab):Or()):Or()}};En.addEventListener("pointerup",()=>xp(!0)),En.addEventListener("pointercancel",()=>xp(!1)),addEventListener("resize",()=>setTimeout(Or,60));try{new ResizeObserver(()=>Or()).observe(En)}catch{}let Br=document.createElement("div");Br.id="tabL",document.body.appendChild(Br);let nr=document.createElement("div");nr.id="tabA",nr.className="box",document.body.appendChild(nr);let Pu=(o,u)=>{o&&(Xe.home.has(o)||Xe.home.set(o,[o.parentNode,o.nextSibling]),u.appendChild(o))},vp=()=>{for(let[o,[u,p]]of Xe.home)try{u.insertBefore(o,p&&p.parentNode===u?p:null)}catch{}Xe.home.clear()};function Lu(){let o=K.size===1?[...K][0]:"",u=$.alerts.filter(x=>[...x.fams].some(M=>K.has(M))).length,p=[et,Kt,nt,V,o,u].join("|");Br._k!==p&&(Br._k=p,Br.innerHTML=`<button type="button" data-tl="stats" class="${et?"on":""}">\u{1F4CA} ${__t(479)}</button><button type="button" data-tl="alr" class="${Kt?"on":""}">\u26A0\uFE0F ${u}${u===1?__t(273):__t(274)}</button>${o?`<button type="button" data-tl="line" class="${nt?"on":""}">\u{1F4CB} ${m(o)}</button>`:""}<a href="https://www.whatsapp.com/channel/0029Vav4hGTId7nPenKMuo2C" target="_blank" rel="noopener" title="${__t(131)}">\u{1F4AC}</a>`,Br.querySelectorAll("[data-tl]").forEach(x=>x.onclick=()=>{let M=x.dataset.tl;et=M==="stats",Kt=M==="alr",nt=M==="line"?o:"",V=!1,ut=null,Lt=-1,et&&(ne.at=0),d._h="",Ne(),Lu()}))}document.addEventListener("visibilitychange",()=>{!document.hidden&&window.__txt&&window.__txt()});let O0="https://raw.githubusercontent.com/elMonoAmelio/catalunya-survival/horarios/rod_pack.json",B0=()=>vt(new Date).ymd.replace(/-/g,"");function ja(){navigator.onLine===!1||location.protocol==="file:"&&!/[?&]pack=1/.test(location.search)||fetch(O0,{cache:"no-store"}).then(o=>o.ok?o.text():null).then(o=>{if(!o)return;let u;try{u=JSON.parse(o)}catch{return}if(!u||!u.gen||!Array.isArray(u.days)||!u.trips||u.gen<=t.gen)return;try{localStorage.setItem("rod_pack",o)}catch{return}let p=B0(),x=t.days.indexOf(p),M=u.days.indexOf(p),w=x<0?0:ot.filter(D=>D.day===x).length,P=0;if(M>=0)for(let D of u.trips)D[0]===M&&P++;let U=M>=0&&w&&(Math.abs(P-w)/w>.1||!P);if(x<0||x>=t.days.length-2||U){try{sessionStorage.setItem("rod_packmsg",U?"1":"")}catch{}location.reload();return}Ka.v=!0}).catch(()=>{})}let Ka={v:!1};document.addEventListener("visibilitychange",()=>{document.hidden&&Ka.v?(Ka.v=!1,Ka.reload=!0):!document.hidden&&Ka.reload&&location.reload()});try{sessionStorage.getItem("rod_packmsg")==="1"&&(sessionStorage.removeItem("rod_packmsg"),setTimeout(()=>ln("\u{1F5D3}\uFE0F "+__t(480)),1500))}catch{}if(setTimeout(ja,4e3),document.addEventListener("visibilitychange",()=>{!document.hidden&&Date.now()-(ja.at||0)>6*36e5&&(ja.at=Date.now(),ja())}),ja.at=Date.now(),window.__RODNEW__){let o=window.__RODNEW__,u=_("#ver");u&&u.firstChild&&u.firstChild.nodeType===3&&(u.firstChild.textContent=u.firstChild.textContent.replace(/(\d\d\/\d\d \d\d:\d\d)/,o.slice(8,10)+"/"+o.slice(5,7)+" "+o.slice(11,16)))}function Nl(){vp();let o=window.__L||"es",u=ti.mode;nr.innerHTML=`<h3>${__t(478)}</h3>
      <h4>\u{1F310} ${__t(481)}</h4><div class="seg2">${"ca|Catal\xE0,es|Espa\xF1ol,en|English".split(",").map(p=>p.split("|")).map(([p,x])=>`<button type="button" data-lang="${p}" class="${o===p?"on":""}">${x}</button>`).join("")}</div>
      <h4>\u{1F319} ${__t(482)}</h4><div class="seg2">${[["auto",__t(483)],["light",__t(484)],["dark",__t(485)]].map(([p,x])=>`<button type="button" data-th="${p}" class="${u===p?"on":""}">${x}</button>`).join("")}</div>
      <h4>\u{1F520} ${__t(486)}</h4><div class="seg2">${(()=>{let p="";try{p=localStorage.getItem("rod_big")||""}catch{}let x=p==="1"?"1":p==="0"?"0":"a";return[["a",__t(483)],["0","Normal"],["1",__t(487)]].map(([M,w])=>`<button type="button" data-big="${M}" class="${x===M?"on":""}">${w}</button>`).join("")})()}</div>${(()=>{let p="";try{p=localStorage.getItem("rod_big")||""}catch{}return p==="1"||p==="0"?"":`<small class="tabAhint">${__t(488)}</small>`})()}
      <h4>\u{1F514} ${__t(489)}</h4><div id="tabAbell"></div><small class="tabAhint">${__t(490)}</small>${Al().length?"":`<small class="tabAhint">${__t(491)}</small>`}${(()=>{let p=Al();return p.length>1?`<small class="tabAhint">${__t(492)}</small><div class="alch">${p.map(x=>`<button type="button" data-al="${m(x)}" class="ln${tr.has(x)?" off":""}" style="--c:${q[x]}">${m(x)}</button>`).join("")}</div>`:""})()}
      <h4>\u{1F4E1} ${__t(493)}</h4><div id="tabArt"></div>
      <h4>\u2139\uFE0F ${__t(494)}</h4><div id="tabAinf"></div>
      <p class="tabAfoot">MonkiSoft</p>`,nr.querySelectorAll("[data-al]").forEach(p=>p.onclick=()=>{let x=p.dataset.al,M=Al();tr.has(x)?tr.delete(x):M.filter(w=>!tr.has(w)).length>1&&tr.add(x);try{localStorage.setItem("rod_aloff",JSON.stringify([...tr]))}catch{}De(!0),Nl()}),nr.querySelectorAll("[data-big]").forEach(p=>p.onclick=()=>{let x=p.dataset.big;try{x==="a"?localStorage.removeItem("rod_big"):localStorage.setItem("rod_big",x)}catch{}window.__txt&&window.__txt(),Nl(),De(!0)}),nr.querySelectorAll("[data-th]").forEach(p=>p.onclick=()=>{ti.mode=p.dataset.th;try{localStorage.setItem("rod_theme",ti.mode)}catch{}vl(),Nl()}),Pu(_("#bell"),_("#tabAbell")),Pu(_("#src"),_("#tabArt")),Pu(_("#ver"),_("#tabAinf"))}function kr(o){if(!Xe.on)return;let u=Xe.cur;if(Xe.cur=o,document.documentElement.dataset.tab=o,window.__mapHidden=o!=="map",En.querySelectorAll("[data-tab]").forEach(p=>p.classList.toggle("on",p.dataset.tab===o)),Or(),o==="line")(ut||Lt>=0)&&(Xe.keep={t:ut,s:Lt,sk:Xe.sk}),!et&&!Kt&&!nt&&!V&&(et=!0,ne.at=0),ut=null,Lt=-1,d._h="",Ne(),Lu();else if(u==="line"){et=Kt=V=!1,nt="";let p=Xe.keep;Xe.keep=null,p&&o==="map"&&!ut&&Lt<0&&(ut=p.t,Lt=p.s,Xe.sk=p.sk),d._h="",Ne()}o==="map"&&requestAnimationFrame(()=>requestAnimationFrame(()=>{try{_u()}catch{}dispatchEvent(new Event("resize"))})),o==="set"&&Nl(),o==="now"&&(De(!0),requestAnimationFrame(Rl)),Gt=0,a()}En.onclick=o=>{if(Date.now()<qn.until)return;let u=o.target.closest("[data-tab]");u&&kr(u.dataset.tab)},window.__rodTabSync=()=>{if(!Xe.on)return;let o=ut?"t"+(ut.num||ut.vtid):Lt>=0?"s"+Lt:"",u=o!==Xe.sk;Xe.sk=o,o&&u&&Xe.cur!=="map"?kr("map"):(Kt||nt||V)&&Xe.cur!=="line"&&Xe.cur!=="map"&&kr("line"),Xe.cur==="line"&&Lu()};function Du(){let o=Dl.matches||document.documentElement.classList.contains("cap");if(o!==Xe.on)if(Xe.on=o,document.documentElement.classList.toggle("tabmode",o),requestAnimationFrame(()=>requestAnimationFrame(Or)),o||(window.__mapHidden=!1),o){let u="now";try{let p=sessionStorage.getItem("rod_tabgo");p&&(sessionStorage.removeItem("rod_tabgo"),/^(now|map|line|set)$/.test(p)&&(u=p))}catch{}kr(u)}else delete document.documentElement.dataset.tab,vp()}Dl.addEventListener?Dl.addEventListener("change",Du):Dl.addListener(Du),Du();{let o=_("#rc"),u=()=>document.documentElement.style.setProperty("--rch",Math.round(o.getBoundingClientRect().height)+"px");window.ResizeObserver&&new ResizeObserver(u).observe(o),u()}let Nu={"\u{1F3D8}":'<path d="M3 21V11l5-4 5 4v10"/><path d="M13 21V9l4-3 4 3v12"/><path d="M2 21h20"/><path d="M7 21v-4h2v4"/>',"\u{1F3E0}":'<path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/>',"\u{1F4BC}":'<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5h6v2"/><path d="M3 13h18"/>',"\u{1F4CD}":'<path d="M12 21s-7-6.5-7-12a7 7 0 0114 0c0 5.5-7 12-7 12z"/><circle cx="12" cy="9" r="2.5"/>',"\u{1F686}":'<rect x="5" y="3" width="14" height="14" rx="3"/><path d="M5 11h14M8 21l2-4M16 21l-2-4"/><circle cx="9" cy="14" r=".6"/><circle cx="15" cy="14" r=".6"/>',"\u{1F6B6}":'<circle cx="13" cy="4" r="2"/><path d="M12 7l-2 6 3 3v5M10 13l-3 8M11 8l4 3h3M11 8l-4 3"/>',"\u{1F689}":'<path d="M4 20h16M6 20V9l6-5 6 5v11"/><path d="M10 20v-5h4v5"/>',"\u26A0\uFE0F":'<path d="M12 3l10 18H2z"/><path d="M12 10v5M12 18v.4"/>',"\u{1F4CC}":'<path d="M9 3h6l-1 6 3 3H7l3-3z"/><path d="M12 12v9"/>',"\u{1F5D3}\uFE0F":'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',"\u{1F4E1}":'<path d="M5 19a10 10 0 0114 0M8 16a6 6 0 018 0"/><circle cx="12" cy="20" r="1"/><path d="M3 15a14 14 0 0118 0"/>',"\u{1F552}":'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',"\u{1F5FA}\uFE0F":'<path d="M9 4L3 6v14l6-2 6 2 6-2V4l-6 2-6-2z"/><path d="M9 4v14M15 6v14"/>',"\u{1F4CA}":'<path d="M4 20V11M10 20V4M16 20v-7M2 20h20"/>',"\u2699\uFE0F":'<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1"/>',"\u{1F310}":'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/>',"\u{1F319}":'<path d="M20 14A8 8 0 1110 4a7 7 0 0010 10z"/>',"\u{1F520}":'<path d="M3 18l4-12 4 12M4.5 14h5M15 18V9h3.5a2.5 2.5 0 010 5H15M15 14h4a2 2 0 010 4h-4"/>',"\u{1F514}":'<path d="M6 16V11a6 6 0 0112 0v5l2 2H4z"/><path d="M10 21h4"/>',"\u{1F515}":'<path d="M6 16V11a6 6 0 0112 0v5l2 2H4z"/><path d="M10 21h4M3 3l18 18"/>',"\u2139\uFE0F":'<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.5"/>',"\u{1F4CB}":'<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V3h6v1M8 10h8M8 14h8M8 18h5"/>',"\u{1F4AC}":'<path d="M4 5h16v11H9l-5 4z"/>',"\u26D4":'<circle cx="12" cy="12" r="9"/><path d="M7 12h10"/>',"\u{1F4F6}":'<path d="M4 20v-3M9 20v-7M14 20V9M19 20V5"/>',"\u23F3":'<path d="M7 3h10M7 21h10M8 3c0 6 8 6 8 9s-8 3-8 9M16 3c0 6-8 6-8 9s8 3 8 9"/>',"\u{1F3D9}\uFE0F":'<path d="M3 21V9h6v12M9 21V4h6v17M15 21v-9h6v9M2 21h20"/>',"\u2B50":'<path d="M12 3l2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.3 6.4 20.2l1.1-6.2L3 9.6l6.2-.9z"/>'},Uu=new RegExp("("+Object.keys(Nu).map(o=>o.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")).join("|")+")\uFE0F?","g"),k0=o=>`<span class="ico" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${Nu[o]||Nu[o+"\uFE0F"]||""}</svg></span>`;function z0(o){let u=document.createTreeWalker(o,NodeFilter.SHOW_TEXT),p=[],x;for(;x=u.nextNode();)x.parentElement&&x.parentElement.closest(".ico,script,style,textarea,input")||(Uu.lastIndex=0,Uu.test(x.nodeValue)&&p.push(x));for(let M of p){let w=document.createElement("span");w.innerHTML=m(M.nodeValue).replace(Uu,(P,U)=>k0(U)),M.replaceWith(...w.childNodes)}return p.length}{let o=()=>["#home","#tabs","#tabA","#tabL","#mcs","#onb","#toast","#rc","#inf","#mbtn","#sbtn","#wabtn","#bell","#list"].map(M=>_(M)).filter(Boolean),u=!1,p=()=>{if(!u){u=!0;try{let M=0;o().forEach(w=>{M+=z0(w)}),M&&Xe.on&&Rl()}finally{u=!1}}},x=new MutationObserver(()=>{u||queueMicrotask(p)});setTimeout(()=>{p(),o().forEach(M=>x.observe(M,{childList:!0,subtree:!0,characterData:!0}))},0)}window.__rod={pinNotify:hp,toast:ln,cardEta:Xa,HOME:je,WORK:We,ONB:Jt,alertForMe:rp,whereAmI:Cl,departuresFor:hs,DEPS:A,tripByNum:Ha,delayOf:tt,TID:ht,SID:qt,byDay:Q,get days(){return t.days},get hist(){return ne},get past(){return L.cur},get cols(){return cn.mesh?cn.mesh.count:-1},get dist(){return r.dist},get follow(){return Rt},get selTrip(){return ut},ST:E,TR:ot,FAM:H,act:()=>It,setSpeed:gp,RT:$,pollRT:de,nowState:se,posAt:Ts,activeTrips:Zs,LL:St,select:o=>{ut=o,Ne()}}}var Ia=window.__DATA__;var Ue=i=>document.querySelector(i),bs=i=>String(i).replace(/\B(?=(\d{3})+(?!\d))/g,"."),Gn=(i,t,e)=>Math.min(e,Math.max(t,i)),xf=i=>i.normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase(),Kn=Ue("#c"),fl=new Xh({canvas:Kn,antialias:!0});fl.setPixelRatio(Math.min(devicePixelRatio||1,2));var ws=new yo;ws.background=new ge(15659509);var lu=35,as=new Vn(lu,1,2,1500);ws.add(new Ho(16777215,9080992,1));var Bg=new Wo(16777215,.9);Bg.position.set(-40,-70,90);ws.add(Bg);var ss=100/Ia.w,hl=Ia.w/2,ul=Ia.h/2,pn=[],vf=new Di;ws.add(vf);var iu=new dr({color:16777215,transparent:!0,opacity:.55});for(let i of Ia.m){let t=new Di,e=[],n=[],s=1e9,r=-1e9,a=1e9,l=-1e9;for(let y of i.g){let S=y.map(_=>{let m=[];for(let O=0;O<_.length;O+=2)m.push(new $t((_[O]-hl)*ss,(_[O+1]-ul)*ss));return m.length>1&&m[0].equals(m[m.length-1])&&m.pop(),m}).filter(_=>_.length>=3);if(!S.length)continue;let I=new ga(S[0]);for(let _=1;_<S.length;_++)I.holes.push(new pr(S[_]));e.push(I);for(let _ of S[0])s=Math.min(s,_.x),r=Math.max(r,_.x),a=Math.min(a,_.y),l=Math.max(l,_.y);for(let _ of S)n.push(new To(new _n().setFromPoints(_.map(m=>new X(m.x,m.y,0))),iu))}if(!e.length)continue;let c;try{c=new Oo(e,{depth:1,bevelEnabled:!1})}catch{continue}let h=new zo({color:13421772}),d=new In(c,h);t.add(d);let v=new Di;n.forEach(y=>v.add(y)),v.position.z=.04,vf.add(v),t.scale.z=.01,vf.add(t);let f={og:v,rings:i.g,inF:!0,sel:null,code:i.c,name:i.n,pop:i.p,area:i.a,pr:i.pr,rankP:0,rankD:0,group:t,mesh:d,mat:h,cx:(s+r)/2,cy:(a+l)/2,size:Math.max(r-s,l-a),z:.01,zt:.01,rank:0};d.userData.m=f,pn.push(f)}var eT=pn.map(i=>i.mesh),Pg=i=>{let t=0;for(let e=0;e<i.length;e+=2){let n=(e+2)%i.length;t+=i[e]*i[n+1]-i[n]*i[e+1]}return Math.abs(t)/2},kg=0,zg=0;for(let i of pn){for(let t of i.rings)kg+=Pg(t[0])-t.slice(1).reduce((e,n)=>e+Pg(n),0);zg+=i.area}var fb=Math.sqrt(zg/kg),tu={"08":"Barcelona",17:"Girona",25:"Lleida",43:"Tarragona"},$g={"08":__t(495),17:__t(496),25:__t(497),43:__t(498)},Tf="sqrt",Af="pop",gf=0,yf=0,Aa=1,ll=1,pb={sqrt:i=>Math.sqrt(i),lin:i=>i,log:i=>Math.log10(Math.max(i,1))},Sf=i=>Af==="pop"?i.pop:i.pop/i.area,Qh=["#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#b10026","#5c0020"].map(i=>new ge(i));function mb(i){i=Gn(i,0,1)*(Qh.length-1);let t=Math.min(Math.floor(i),Qh.length-2);return Qh[t].clone().lerp(Qh[t+1],i-t)}var Ca=i=>i>=100?bs(Math.round(i)):i.toLocaleString("es-ES",{maximumFractionDigits:1});function gb(){yf=0;for(let i of pn)yf+=i.pop;[...pn].sort((i,t)=>t.pop-i.pop).forEach((i,t)=>i.rankP=t+1),[...pn].sort((i,t)=>t.pop/t.area-i.pop/i.area).forEach((i,t)=>i.rankD=t+1),Gg()}var Vg=new ge("#d3d8e2"),Hg=new ge("#eceff3");window.__mapTheme=i=>{ws.background=new ge(i?856345:15659509),Hg.set(i?"#2b3242":"#eceff3"),Vg.set(i?"#1a1f29":"#d3d8e2"),iu.color.set(i?856345:16777215),iu.opacity=i?.7:.55,Cf.color.set(i?329483:2764864),Rf.color.set(i?9081766:16777215);for(let t of pn)t.base&&cu(t);Ln()};function cu(i){i.mat.color.copy(i.base).lerp(Hg,document.documentElement.classList.contains("dark")?.95:.86),i.inF||i.mat.color.lerp(Vg,.8)}function Gg(){Aa=1,ll=1e12;for(let e of pn){let n=Sf(e);Aa=Math.max(Aa,n),ll=Math.min(ll,n)}let i=Math.log10(Math.max(ll,.01)),t=Math.log10(Aa);for(let e of pn)e.base=mb((Math.log10(Math.max(Sf(e),.01))-i)/(t-i)),cu(e);Ue("#lmin").textContent=Ca(ll),Ue("#lmax").textContent=Ca(Aa),Ue("#lname").textContent=Af==="pop"?__t(499):__t(500),hu()}function hu(){let i=pb[Tf],t=i(Aa),e=24*gf;for(let n of pn)n.zt=gf<=.001?.01:Math.max(.12*Math.min(1,gf),e*i(Sf(n))/t)*(n.inF?1:.1);Ln()}var Lg=Object.fromEntries(pn.map(i=>[i.code,i])),eu=[],Wg=[];for(let i of Ia.bd){let t=Lg[i.a],e=Lg[i.b];if(!(!t||!e))for(let n=0;n+3<i.p.length;n+=2)Wg.push((i.p[n]-hl)*ss,(i.p[n+1]-ul)*ss,0,(i.p[n+2]-hl)*ss,(i.p[n+3]-ul)*ss,0),eu.push(t,e)}var su=new Bi;su.setPositions(Wg);var Cf=new Qi({color:2764864,linewidth:4.4,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3}),Rf=new Qi({color:16777215,linewidth:2.4,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-6});[Cf,Rf].forEach((i,t)=>{let e=new Sr(su,i);e.frustumCulled=!1,e.renderOrder=10+t,ws.add(e)});function _b(){let i=su.attributes.instanceStart.data.array;for(let t=0;t<eu.length;t+=2){let e=Math.max(eu[t].z,eu[t+1].z)+.12,n=t/2*6;i[n+2]=e,i[n+5]=e}su.attributes.instanceStart.data.needsUpdate=!0}var ru={};for(let i of Object.keys(tu)){let t=pn.filter(d=>d.pr===i),e=0,n=0,s=0,r=1e9,a=-1e9,l=1e9,c=-1e9;for(let d of t)e+=d.area,n+=d.cx*d.area,s+=d.cy*d.area,r=Math.min(r,d.cx),a=Math.max(a,d.cx),l=Math.min(l,d.cy),c=Math.max(c,d.cy);let h=document.createElement("div");h.className="plab",h.textContent=tu[i],h.title=__t(501)+$g[i],h.onclick=()=>Cb("pr:"+i),document.body.appendChild(h),ru[i]={el:h,p:new X(n/e,s/e,0),cx:(r+a)/2,cy:(l+c)/2,ext:Math.max(a-r,c-l),ext2:[a-r,c-l],area:e,name:tu[i]}}var _f=new X;function xb(){for(let i in ru){let t=ru[i];_f.copy(t.p).project(as),t.el.style.transform=`translate(-50%,-50%) translate(${(_f.x*.5+.5)*innerWidth}px,${(-_f.y*.5+.5)*innerHeight}px)`}}var vn={tilt:0,yaw:0,dist:150,tx:0,ty:0},be={...vn};function vb(){let i=innerWidth/innerHeight,t=Math.tan(lu*Math.PI/360);return Math.max(Ia.h*ss*1.1,100*1.1/i)/(2*t)}var yb=document.getElementById("northr");document.getElementById("north").addEventListener("click",()=>{be.yaw=Math.round(be.yaw/(2*Math.PI))*2*Math.PI,be.tilt=0,Ln()});function If(){Object.assign(be,{tilt:0,yaw:0,dist:vb(),tx:0,ty:0}),Ln()}function Sb(){let{tilt:i,yaw:t,dist:e,tx:n,ty:s}=vn;as.position.set(n+e*Math.sin(i)*Math.sin(t),s-e*Math.sin(i)*Math.cos(t),e*Math.cos(i)),as.up.set(-Math.cos(i)*Math.sin(t),Math.cos(i)*Math.cos(t),Math.sin(i)),as.lookAt(n,s,0)}var cl=!0,Dg=performance.now(),dl=new Map;function Ln(){cl=!0}function Xg(i){requestAnimationFrame(Xg);let t=Gn((i-Dg)/1e3,0,.05);Dg=i;let e=1-Math.exp(-t*10),n=!1;for(let s of Object.keys(vn)){let r=be[s]-vn[s];Math.abs(r)>1e-4*(s==="dist"?10:1)?(vn[s]+=r*e,n=!0):vn[s]=be[s]}for(let s of pn){let r=s.zt-s.z;Math.abs(r)>.002?(s.z+=r*Math.min(1,e*.8),s.group.scale.z=s.z,s.og.position.z=s.z+.04,n=!0):s.z!==s.zt&&(s.z=s.zt,s.group.scale.z=s.z,s.og.position.z=s.z+.04)}for(let[s,r]of dl){let a=(i-r)/1800;a>=1?(dl.delete(s),Tr(s)):Tr(s,.5*Math.sin(Math.PI*a)),n=!0}if(window.__rodTick&&window.__rodTick(i)&&(cl=!0),window.__mapHidden){cl=!0;return}if(n||cl){yb.style.transform=`rotate(${vn.yaw}rad) scaleY(${(.55+.45*Math.cos(vn.tilt)).toFixed(3)})`;{let s=Math.abs(Math.sin(be.yaw/2))<.02&&be.tilt<.03,r=document.getElementById("north");r.classList.contains("flat")!==s&&(r.classList.toggle("flat",s),r.title=s?__t(502):__t(503))}Sb(),_b(),xb(),window.__rodFrame&&window.__rodFrame(),fl.render(ws,as),cl=n,Ue("#tilt").value=Math.round(be.tilt*180/Math.PI),Ue("#yaw").value=Math.round(((be.yaw*180/Math.PI+180)%360+360)%360-180)}}function qg(){fl.setSize(innerWidth,innerHeight,!1),as.aspect=innerWidth/innerHeight,as.updateProjectionMatrix(),Cf.resolution.set(innerWidth,innerHeight),Rf.resolution.set(innerWidth,innerHeight),window.__rodResize&&window.__rodResize(),Ln()}addEventListener("resize",()=>{qg(),rn.length&&Ws()});Kn.addEventListener("wheel",i=>{i.preventDefault();let t=i.deltaMode===1?16:1,e=i.deltaY*t;if(i.altKey){let n=(Math.abs(i.deltaX)>Math.abs(i.deltaY)?i.deltaX:i.deltaY)*t;be.yaw+=n*.0035}else i.ctrlKey?be.dist=Gn(be.dist*Math.exp(e*.01),6,400):be.tilt=Gn(be.tilt+e*.002,0,1.32);Ln()},{passive:!1});Kn.addEventListener("contextmenu",i=>i.preventDefault());var rs=new Map,ai=null,br=0,Mf=0,bf=0;var au=null;Kn.addEventListener("pointerdown",i=>{if(i.pointerType!=="mouse"&&!document.body.classList.contains("used")&&(document.body.classList.add("used"),rn.length&&setTimeout(Ws,50)),Kn.setPointerCapture(i.pointerId),rs.set(i.pointerId,{x:i.clientX,y:i.clientY}),rs.size===1&&(ai={rot:i.button===2||i.altKey,moved:0,multi:!1,touch:i.pointerType!=="mouse"}),rs.size===2){let[t,e]=[...rs.values()];br=Math.hypot(t.x-e.x,t.y-e.y),Mf=Math.atan2(e.y-t.y,e.x-t.x),bf=(t.y+e.y)/2,au={mode:null,rot:0,sc:0,tl:0},ai&&(ai.multi=!0)}Pf()});Kn.addEventListener("pointermove",i=>{let t=rs.get(i.pointerId);if(!t){Ms={x:i.clientX,y:i.clientY},wf||(wf=requestAnimationFrame(bb));return}let e=i.clientX-t.x,n=i.clientY-t.y;if(t.x=i.clientX,t.y=i.clientY,rs.size===2){let[s,r]=[...rs.values()],a=Math.hypot(s.x-r.x,s.y-r.y),l=Math.atan2(r.y-s.y,r.x-s.x),c=(s.y+r.y)/2,h=l-Mf;h>Math.PI&&(h-=2*Math.PI),h<-Math.PI&&(h+=2*Math.PI);let d=br?a-br:0,v=c-bf,f=au||(au={mode:null,rot:0,sc:0,tl:0});f.rot+=h,f.sc+=d,f.tl+=v,f.mode?f.mode==="zoom"&&Math.abs(f.rot)>.45&&(f.mode="rotate"):Math.abs(f.rot)>.3?f.mode="rotate":Math.abs(f.tl)>30&&Math.abs(f.sc)<18?f.mode="tilt":Math.abs(f.sc)>12&&(f.mode="zoom"),(f.mode==="zoom"||f.mode==="rotate")&&br&&(be.dist=Gn(be.dist*br/a,6,400)),f.mode==="rotate"&&(be.yaw+=h,vn.yaw=be.yaw),f.mode==="tilt"&&(be.tilt=Gn(be.tilt-v*.006,0,1.32),vn.tilt=be.tilt),br=a,Mf=l,bf=c,Ln();return}if(ai.moved+=Math.abs(e)+Math.abs(n),ai.rot||i.altKey)be.yaw+=e*.005,be.tilt=Gn(be.tilt+n*.004,0,1.32),vn.yaw=be.yaw,vn.tilt=be.tilt;else{let s=2*vn.dist*Math.tan(lu*Math.PI/360)/innerHeight,r=Math.sin(vn.yaw),a=Math.cos(vn.yaw),l=1/Math.max(Math.cos(vn.tilt),.3);be.tx=Gn(be.tx-a*e*s+-r*n*s*l,-70,70),be.ty=Gn(be.ty-r*e*s+a*n*s*l,-70,70),vn.tx=be.tx,vn.ty=be.ty}Ln()});var Yg=i=>{let t=ai&&!ai.rot&&!ai.multi&&ai.moved<(ai.touch?12:6)&&i.type==="pointerup"&&rs.size===1,e=ai&&ai.touch;rs.delete(i.pointerId),br=0,au=null,rs.size||(ai=null),t&&window.__rodTap&&window.__rodTap(i.clientX,i.clientY)};Kn.addEventListener("pointerup",Yg);Kn.addEventListener("pointercancel",Yg);Kn.addEventListener("dblclick",If);addEventListener("keydown",i=>{i.key==="Alt"&&(Kn.style.cursor="move")});addEventListener("keyup",i=>{i.key==="Alt"&&(Kn.style.cursor="")});addEventListener("blur",()=>{Kn.style.cursor=""});var Mb=new qo,Ng=new $t,Ms=null,wf=0,wr=null;function bb(){if(wf=0,!Ms||ai)return;Ng.set(Ms.x/innerWidth*2-1,-(Ms.y/innerHeight)*2+1),Mb.setFromCamera(Ng,as);let i=null;if(i!==wr){let e=wr;wr=i,e&&Tr(e),i&&Tr(i),Ln()}let t=window.__rodHover&&window.__rodHover(Ms.x,Ms.y);if(t){Mr.innerHTML=t,Mr.style.display="block";let e=Mr.offsetWidth,n=Mr.offsetHeight;Mr.style.left=Gn(Ms.x+14,6,innerWidth-e-6)+"px",Mr.style.top=Gn(Ms.y+14,6,innerHeight-n-6)+"px",Kn.style.cursor="pointer"}else Pf(),Kn.style.cursor=""}Kn.addEventListener("pointerleave",()=>{if(Ms=null,wr){let i=wr;wr=null,Tr(i),Ln()}Pf()});var Mr=Ue("#tip");function Pf(){Mr.style.display="none"}document.querySelectorAll("[data-metric]").forEach(i=>i.onclick=()=>{Af=i.dataset.metric,document.querySelectorAll("[data-metric]").forEach(t=>t.classList.toggle("on",t===i)),Gg()});document.querySelectorAll("[data-mode]").forEach(i=>i.onclick=()=>{Tf=i.dataset.mode,document.querySelectorAll("[data-mode]").forEach(t=>t.classList.toggle("on",t===i)),hu()});Ue("#yaw").oninput=i=>{be.yaw=+i.target.value*Math.PI/180,Ln()};Ue("#tilt").oninput=i=>{be.tilt=+i.target.value*Math.PI/180,Ln()};Ue("#zin").onclick=()=>{be.dist=Gn(be.dist*.75,6,400),Ln()};Ue("#zout").onclick=()=>{be.dist=Gn(be.dist/.75,6,400),Ln()};Ue("#rst").onclick=If;var Ug=["#2563eb","#059669","#7c3aed","#db2777","#0891b2","#ca8a04"],rn=[],Fg={},wb=i=>Fg[i]||(Fg[i]=new dr({color:i}));function Zg(i,t){i.og.children.forEach(e=>e.material=t?wb(t):iu)}function Tr(i,t=0){let e=i.mat.emissive;i===wr?e.setHex(5592405):i.sel?e.copy(i.sel.tint):e.setHex(0),t&&e.addScalar(t)}function Lf(i,t){let e=1e9,n=-1e9,s=1e9,r=-1e9;for(let h of i)e=Math.min(e,h.cx-h.size/2),n=Math.max(n,h.cx+h.size/2),s=Math.min(s,h.cy-h.size/2),r=Math.max(r,h.cy+h.size/2);let a=innerWidth/innerHeight,l=Math.tan(lu*Math.PI/360),c=i.length===1?Gn(i[0].size*3.2+14,14,120):Gn(Math.max((r-s)*1.5,(n-e)*1.5/a)/(2*l)+6,14,300);Object.assign(be,{tx:(e+n)/2,ty:(s+r)/2,dist:c,tilt:t,yaw:0}),Ln()}var Gs=Ue("#q"),pi=Ue("#list"),sn=Ue("#mcs");function uu(i,t=!0){if(pi.style.display="none",Gs.value="",!i.sel){rn.length>=6&&Jg(rn[0].o,!0);let e=new Set(rn.map(s=>s.color)),n=Ug.find(s=>!e.has(s))||Ug[0];i.sel={o:i,color:n,tint:new ge(n).multiplyScalar(.12)},rn.push(i.sel),Zg(i,n)}sn.classList.contains("min")&&pl(!1),dl.set(i,performance.now()),Tr(i),t&&Lf([i],Math.max(be.tilt,.9)),Ws()}function Jg(i,t){let e=rn.indexOf(i.sel);e>=0&&rn.splice(e,1),i.sel=null,Zg(i,null),Tr(i),Ln(),t||Ws()}function jg(i){let t=Math.min(devicePixelRatio||1,2),e=i.clientWidth,n=i.clientHeight;i.width=e*t,i.height=n*t;let s=i.getContext("2d");s.scale(t,t),s.clearRect(0,0,e,n);let r=rn.map(d=>{let v=1e9,f=-1e9,y=1e9,S=-1e9;for(let I of d.o.rings)for(let _=0;_<I[0].length;_+=2)v=Math.min(v,I[0][_]),f=Math.max(f,I[0][_]),y=Math.min(y,I[0][_+1]),S=Math.max(S,I[0][_+1]);return{x0:v,x1:f,y0:y,y1:S}}),a=Math.max(...r.map(d=>Math.max(d.x1-d.x0,d.y1-d.y0))),l=(Math.min(e,n)-22)/a;rn.forEach((d,v)=>{let f=r[v],y=(f.x0+f.x1)/2,S=(f.y0+f.y1)/2;s.beginPath();for(let I of d.o.rings)for(let _ of I)for(let m=0;m<_.length;m+=2){let O=e/2+(_[m]-y)*l,B=n/2-(_[m+1]-S)*l;m?s.lineTo(O,B):s.moveTo(O,B),m===_.length-2&&s.closePath()}s.fillStyle=d.color+"40",s.fill("evenodd"),s.lineWidth=1.6,s.strokeStyle=d.color,s.stroke()});let c=l/fb,h=[.5,1,2,5,10,20,50,100].find(d=>d*c>=28)||100;s.fillStyle="#6b7385",s.fillRect(10,n-12,h*c,2),s.font="10px system-ui",s.fillText(h+" km",12+h*c,n-8)}function Ws(){if(!rn.length){sn.innerHTML="",sn.style.display="none",pl(!1);return}if(sn.style.display="flex",innerWidth<=640){let e=Ue("#inf").getBoundingClientRect().bottom;sn.style.top=Math.round(e+8)+"px",sn.style.maxHeight=Math.max(110,Math.min(innerHeight*(Ue("#rc").classList.contains("min")?.7:.4),Ue("#rc").getBoundingClientRect().top-e-16))+"px",sn.style.width=""}else if(innerHeight<=500){let e=Ue("#inf").getBoundingClientRect().bottom;sn.style.top=Math.round(e+8)+"px",sn.style.maxHeight=Math.max(120,innerHeight-e-20)+"px",sn.style.width="min(290px, 40vw)"}else sn.style.top="",sn.style.maxHeight="",sn.style.width="";window.__fitMcs&&window.__fitMcs();let i=rn.map((e,n)=>{let s=e.o;return`<div class="mc" draggable="true" data-i="${n}" style="--c:${e.color}"><button class="x" data-x="${n}" title="Cerrar">\xD7</button><div class="mh"><i class="dot"></i><b>${s.name}</b><em>${tu[s.pr]}</em></div><div class="mb">${bs(s.pop)}${__t(509)}${Ca(s.area)} km\xB2 \xB7 ${Ca(s.pop/s.area)}${__t(510)}${s.rankP}${__t(511)}`}).join("");if(rn.length>1){let e=s=>Math.max(...rn.map(s)),n=[[__t(512),s=>s.o.pop,bs],[__t(513),s=>s.o.area,Ca],[__t(514),s=>s.o.pop/s.o.area,Ca]];if(i+=`${__t(515)}`+n.map(([s,r,a])=>`<div class="cr"><span>${s}</span>${rn.map(l=>`<div class="bw"><i style="width:${Math.max(2,r(l)/e(r)*100)}%;background:${l.color}"></i><b>${a(r(l))}</b></div>`).join("")}</div>`).join(""),rn.length===2){let[s,r]=rn.map(h=>h.o),[a,l]=s.pop>=r.pop?[s,r]:[r,s],c=(h,d)=>(h>=d?h/d:d/h).toLocaleString("es-ES",{maximumFractionDigits:1});i+=`<small class="ratio"><b>${a.name}${__t(516)}${c(a.pop,l.pop)}${__t(517)}${l.name}${__t(518)}${c(a.area,l.area)}\xD7 ${a.area>=l.area?__t(519):__t(520)}.</small>`}i+="</div>"}sn.innerHTML=i,sn.querySelectorAll("[data-x]").forEach(e=>e.onclick=n=>{n.stopPropagation(),Jg(rn[+e.dataset.x].o)}),sn.querySelectorAll(".mc").forEach(e=>{e.onclick=()=>Lf([rn[+e.dataset.i].o],Math.max(be.tilt,.9)),e.onmouseenter=()=>{let n=rn[+e.dataset.i].o;dl.set(n,performance.now())},e.ondragstart=n=>{n.dataTransfer.setData("text/plain",e.dataset.i),e.classList.add("drag")},e.ondragend=()=>e.classList.remove("drag"),e.ondragover=n=>{n.preventDefault(),e.classList.add("over")},e.ondragleave=()=>e.classList.remove("over"),e.ondrop=n=>{n.preventDefault();let s=+n.dataTransfer.getData("text/plain"),r=+e.dataset.i;if(s!==r){let[a]=rn.splice(s,1);rn.splice(r,0,a),Ws();let l=Ue("#sil");l&&l.classList.add("flash")}}});let t=Ue("#sil");t&&jg(t)}Gs.addEventListener("input",()=>{if(window.__rodSearch){window.__rodSearch(Gs.value);return}let i=xf(Gs.value.trim());if(!i){pi.style.display="none";return}let t=[],e=[];for(let s of pn){let r=xf(s.name);r.startsWith(i)?t.push(s):r.includes(i)&&e.push(s)}let n=t.sort((s,r)=>r.pop-s.pop).concat(e.sort((s,r)=>r.pop-s.pop)).slice(0,8);pi.innerHTML=n.map((s,r)=>`<li data-i="${r}">${s.name}<em>${bs(s.pop)}</em></li>`).join("")||__t(475),pi.style.display="block",pi.querySelectorAll("li[data-i]").forEach(s=>s.onclick=()=>uu(n[+s.dataset.i])),pi._r=n});Gs.addEventListener("keydown",i=>{i.key==="Enter"&&pi._pick?pi._pick(0):i.key==="Enter"&&pi._r&&pi._r[0]&&uu(pi._r[0]),i.key==="Escape"&&(Gs.value="",pi.style.display="none")});addEventListener("keydown",i=>{i.key==="Escape"&&i.target!==Gs&&Kg()});var Og=0;addEventListener("resize",()=>{clearTimeout(Og),Og=setTimeout(()=>{let i=Ue("#sil");i&&jg(i)},120)});var ou=null,Ef=Ue("#chip");function Eb(i,t,e=.8){ou={codes:new Set(i.map(n=>n.code)),label:t},pn.forEach(n=>{n.inF=ou.codes.has(n.code),cu(n)}),Ef.innerHTML=`${__t(521)}${t}</b> \xB7 ${i.length}${i.length===1?__t(522):__t(523)}</span><button id="chx" title="Quitar filtro">\xD7</button>`,Ef.style.display="flex",Ue("#chx").onclick=Kg,hu(),Lf(i,e),i.slice(0,40).forEach(n=>dl.set(n,performance.now()))}function Kg(){ou&&(ou=null,pn.forEach(i=>{i.inF=!0,cu(i)}),Ef.style.display="none",hu())}var Tb="prov";function Ab(i){let t=[...pn].sort((a,l)=>l.pop-a.pop),e=[...pn].sort((a,l)=>l.pop/l.area-a.pop/a.area),[n,s,r]=i.split(":");if(n==="pr")return[pn.filter(a=>a.pr===s),$g[s]];if(n==="top")return s==="pop"?[t.slice(0,10),__t(524)]:[e.slice(0,10),__t(525)];if(n==="low")return s==="pop"?[t.slice(-10),__t(526)]:[e.slice(-10),__t(527)];if(n==="size")return[pn.filter(a=>a.pop>=+s&&a.pop<+r),+r>1e9?`${bs(+s)}${__t(528)}`:+s==0?`${__t(529)}${bs(+r)}${__t(530)}`:`${bs(+s)} \u2013 ${bs(+r-1)}${__t(530)}`];if(n==="n50"){let a=0,l=0;for(let c of t)if(a+=c.pop,l++,a>=yf/2)break;return[t.slice(0,l),`${__t(531)}`]}return[[],""]}function Cb(i){let[t,e]=Ab(i);t.length&&Eb(t,e,i.startsWith("pr:")?.75:.8)}document.querySelectorAll("[data-tab]").forEach(i=>i.onclick=()=>{Tb=i.dataset.tab,Ue("#dbody").scrollTop=0});var Er=Ue("#rc"),nu=Ue("#mcstab");function Ra(i){Er.classList.toggle("min",i),Ue("#rcgrab span").textContent=i?__t(573):__t(574),rn.length&&Ws()}function pl(i){sn.classList.toggle("min",i),sn.style.transform="",sn.style.opacity="",nu.classList.toggle("on",i&&rn.length>0),i&&(nu.textContent=`\u25B8 ${rn.length} ${rn.length===1?"ficha":"fichas"}`,nu.style.top=sn.style.top||"124px")}function Df(i,{onMove:t,onEnd:e,axis:n}){let s=null;i.addEventListener("pointerdown",a=>{a.pointerType==="mouse"||!du.matches||a.target.closest("input,button:not(#rcgrab),.seg")||(s={x:a.clientX,y:a.clientY,id:a.pointerId,lock:null})}),addEventListener("pointermove",a=>{if(!s||a.pointerId!==s.id)return;let l=a.clientX-s.x,c=a.clientY-s.y;!s.lock&&Math.hypot(l,c)>10&&(s.lock=Math.abs(l)>Math.abs(c)?"x":"y"),s.lock===n&&t&&t(l,c)});let r=a=>{if(!s||a.pointerId!==s.id)return;let l=a.clientX-s.x,c=a.clientY-s.y,h=s.lock;s=null,e(h===n?l:0,h===n?c:0,h)};addEventListener("pointerup",r,!0),addEventListener("pointercancel",r,!0)}Ue("#rcgrab").onclick=()=>Ra(!Er.classList.contains("min"));(innerWidth<=640||matchMedia("(max-height:500px) and (pointer:coarse)").matches||document.documentElement.classList.contains("cap"))&&Ra(!0);requestAnimationFrame(()=>document.documentElement.classList.remove("boot"));var Qg=()=>innerWidth>640;Df(Er,{axis:"y",onEnd:(i,t)=>{if(!Qg())if(t>40&&!Er.classList.contains("min")){let e=Ue("#dp.open #dbody");(!e||e.scrollTop<=0||t>120)&&Ra(!0)}else t<-30&&Er.classList.contains("min")&&Ra(!1)}});Df(Er,{axis:"x",onEnd:i=>{Qg()&&(i>50?Ra(!0):i<-30&&Er.classList.contains("min")&&Ra(!1))}});Df(sn,{axis:"x",onMove:i=>{i<0&&(sn.classList.add("sw"),sn.style.transform=`translateX(${i}px)`,sn.style.opacity=Math.max(.2,1+i/300))},onEnd:i=>{sn.classList.remove("sw"),i<-60?(pl(!0),window.__rodHide&&!rn.length&&window.__rodHide()):(sn.style.transform="",sn.style.opacity="")}});nu.onclick=()=>{pl(!1),Ws()};Ue("#dtoggle").onclick=()=>{let i=Ue("#dp").classList.toggle("open");Ue("#rc").classList.toggle("dopen",i),Ue("#dtoggle").textContent=i?du.matches&&innerWidth<=640?__t(575):__t(576):__t(577),window.__rodCard&&window.__rodCard()};var du=matchMedia("(max-width:640px), (max-height:500px)");function t0(){let i=Ue("#leg");du.matches?Ue("#rc").insertBefore(i,Ue("#dtoggle")):document.body.appendChild(i),rn.length&&Ws()}du.addEventListener("change",t0);t0();qg();gb();If();Object.assign(vn,be);for(let i of pn)i.z=.01;requestAnimationFrame(Xg);Ig({scene:ws,camera:as,renderer:fl,goal:be,cur:vn,invalidate:Ln,flyTo:(i,t,e,n)=>{Object.assign(be,{tx:(i-hl)*ss,ty:(t-ul)*ss,dist:e,tilt:n}),Ln()},K:ss,CX:hl,CY:ul,mcs:sn,q:Gs,list:pi,munis:pn,select:uu,norm:xf,fmt:bs,clamp:Gn,mcsMin:pl});window.__app={scene:ws,renderer:fl,camera:as,munis:pn,labs:ru,goal:be,cur:vn,select:uu,get mode(){return Tf}};window.__ready=!0;{let i=document.getElementById("ttb"),t=document.getElementById("p");i&&t&&i.addEventListener("click",()=>{let e=t.classList.toggle("tt");i.textContent=e?__t(583):__t(584)})}})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
