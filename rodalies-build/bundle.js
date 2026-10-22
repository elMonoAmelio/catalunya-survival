(()=>{var Xu=0,jc=1,$u=2;var ua=1,qu=2,lr=3,es=0,In=1,Si=2,Mi=0,cr=1,Qc=2,th=3,eh=4,Yu=5;var Ss=100,Zu=101,Ju=102,Ku=103,ju=104,Qu=200,td=201,ed=202,nd=203,nh=204,ih=205,id=206,sd=207,rd=208,ad=209,od=210,ld=211,cd=212,hd=213,ud=214,co=0,ho=1,uo=2,Zs=3,fo=4,po=5,mo=6,go=7,jo=0,dd=1,fd=2,hi=0,sh=1,rh=2,ah=3,oh=4,lh=5,ch=6,hh=7;var uh=300,ns=301,Ms=302,Qo=303,tl=304,da=306,_o=1e3,mi=1001,xo=1002,dn=1003,pd=1004;var fa=1005;var mn=1006,el=1007;var is=1008;var On=1009,dh=1010,fh=1011,hr=1012,nl=1013,ui=1014,di=1015,fi=1016,il=1017,sl=1018,ur=1020,ph=35902,mh=35899,gh=1021,_h=1022,ti=1023,_i=1026,ss=1027,xh=1028,rl=1029,rs=1030,al=1031;var ol=1033,pa=33776,ma=33777,ga=33778,_a=33779,ll=35840,cl=35841,hl=35842,ul=35843,dl=36196,fl=37492,pl=37496,ml=37488,gl=37489,xa=37490,_l=37491,xl=37808,vl=37809,yl=37810,Sl=37811,Ml=37812,bl=37813,wl=37814,El=37815,Tl=37816,Al=37817,Cl=37818,Rl=37819,Pl=37820,Il=37821,Ll=36492,Dl=36494,Ul=36495,Nl=36283,Fl=36284,va=36285,Ol=36286;var Dr=2300,vo=2301,oo=2302,zc=2303,kc=2400,Vc=2401,Hc=2402;var md=3200;var Bl=0,gd=1,ki="",Wn="srgb",Ur="srgb-linear",Nr="linear",Ne="srgb";var lo=7680;var _d=519,xd=512,vd=513,yd=514,zl=515,Sd=516,Md=517,kl=518,bd=519,vh=35044;var yh="300 es",oi=2e3,Js=2001;function Xf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function $f(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Fr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function wd(){let i=Fr("canvas");return i.style.display="block",i}var cu={},Ks=null;function Or(...i){let t="THREE."+i.shift();Ks?Ks("log",t,...i):console.log(t,...i)}function Ed(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ne(...i){i=Ed(i);let t="THREE."+i.shift();if(Ks)Ks("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function ie(...i){i=Ed(i);let t="THREE."+i.shift();if(Ks)Ks("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function ms(...i){let t=i.join(" ");t in cu||(cu[t]=!0,ne(...i))}function Td(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Ad={[co]:ho,[uo]:mo,[fo]:go,[Zs]:po,[ho]:co,[mo]:uo,[go]:fo,[po]:Zs},xi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],hu=1234567,Rr=Math.PI/180,js=180/Math.PI;function gi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(yn[i&255]+yn[i>>8&255]+yn[i>>16&255]+yn[i>>24&255]+"-"+yn[t&255]+yn[t>>8&255]+"-"+yn[t>>16&15|64]+yn[t>>24&255]+"-"+yn[e&63|128]+yn[e>>8&255]+"-"+yn[e>>16&255]+yn[e>>24&255]+yn[n&255]+yn[n>>8&255]+yn[n>>16&255]+yn[n>>24&255]).toLowerCase()}function ue(i,t,e){return Math.max(t,Math.min(e,i))}function Sh(i,t){return(i%t+t)%t}function qf(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Yf(i,t,e){return i!==t?(e-i)/(t-i):0}function Pr(i,t,e){return(1-e)*i+e*t}function Zf(i,t,e,n){return Pr(i,t,1-Math.exp(-e*n))}function Jf(i,t=1){return t-Math.abs(Sh(i,t*2)-t)}function Kf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function jf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Qf(i,t){return i+Math.floor(Math.random()*(t-i+1))}function tp(i,t){return i+Math.random()*(t-i)}function ep(i){return i*(.5-Math.random())}function np(i){i!==void 0&&(hu=i);let t=hu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ip(i){return i*Rr}function sp(i){return i*js}function rp(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function ap(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function op(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function lp(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),f=r((t-n)/2),u=a((t-n)/2),m=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*f,l*u,o*c);break;case"YZY":i.set(l*u,o*h,l*f,o*c);break;case"ZXZ":i.set(l*f,l*u,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*m,o*c);break;case"YXY":i.set(l*m,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*m,o*h,o*c);break;default:ne("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ai(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Be(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Mh={DEG2RAD:Rr,RAD2DEG:js,generateUUID:gi,clamp:ue,euclideanModulo:Sh,mapLinear:qf,inverseLerp:Yf,lerp:Pr,damp:Zf,pingpong:Jf,smoothstep:Kf,smootherstep:jf,randInt:Qf,randFloat:tp,randFloatSpread:ep,seededRandom:np,degToRad:ip,radToDeg:sp,isPowerOfTwo:rp,ceilPowerOfTwo:ap,floorPowerOfTwo:op,setQuaternionFromProperEuler:lp,normalize:Be,denormalize:ai},Ct=class i{static{i.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ue(this.x,t.x,e.x),this.y=ue(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ue(this.x,t,e),this.y=ue(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ue(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},vi=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3],u=r[a+0],m=r[a+1],g=r[a+2],S=r[a+3];if(f!==S||l!==u||c!==m||h!==g){let p=l*u+c*m+h*g+f*S;p<0&&(u=-u,m=-m,g=-g,S=-S,p=-p);let d=1-o;if(p<.9995){let A=Math.acos(p),C=Math.sin(A);d=Math.sin(d*A)/C,o=Math.sin(o*A)/C,l=l*d+u*o,c=c*d+m*o,h=h*d+g*o,f=f*d+S*o}else{l=l*d+u*o,c=c*d+m*o,h=h*d+g*o,f=f*d+S*o;let A=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=A,c*=A,h*=A,f*=A}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[a],u=r[a+1],m=r[a+2],g=r[a+3];return t[e]=o*g+h*f+l*m-c*u,t[e+1]=l*g+h*u+c*f-o*m,t[e+2]=c*g+h*m+o*u-l*f,t[e+3]=h*g-o*f-l*u-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),f=o(r/2),u=l(n/2),m=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*f+c*m*g,this._y=c*m*f-u*h*g,this._z=c*h*g+u*m*f,this._w=c*h*f-u*m*g;break;case"YXZ":this._x=u*h*f+c*m*g,this._y=c*m*f-u*h*g,this._z=c*h*g-u*m*f,this._w=c*h*f+u*m*g;break;case"ZXY":this._x=u*h*f-c*m*g,this._y=c*m*f+u*h*g,this._z=c*h*g+u*m*f,this._w=c*h*f-u*m*g;break;case"ZYX":this._x=u*h*f-c*m*g,this._y=c*m*f+u*h*g,this._z=c*h*g-u*m*f,this._w=c*h*f+u*m*g;break;case"YZX":this._x=u*h*f+c*m*g,this._y=c*m*f+u*h*g,this._z=c*h*g-u*m*f,this._w=c*h*f-u*m*g;break;case"XZY":this._x=u*h*f-c*m*g,this._y=c*m*f-u*h*g,this._z=c*h*g+u*m*f,this._w=c*h*f+u*m*g;break;default:ne("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],f=e[10],u=n+o+f;if(u>0){let m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(n>o&&n>f){let m=2*Math.sqrt(1+n-o-f);this._w=(h-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>f){let m=2*Math.sqrt(1+o-n-f);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+f-n-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ue(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class i{static{i.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(uu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(uu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),f=2*(r*n-a*e);return this.x=e+l*c+a*f-o*h,this.y=n+l*h+o*c-r*f,this.z=s+l*f+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ue(this.x,t.x,e.x),this.y=ue(this.y,t.y,e.y),this.z=ue(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ue(this.x,t,e),this.y=ue(this.y,t,e),this.z=ue(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ue(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return fc.copy(this).projectOnVector(t),this.sub(fc)}reflect(t){return this.sub(fc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},fc=new L,uu=new vi,ce=class i{static{i.prototype.isMatrix3=!0}constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],m=n[5],g=n[8],S=s[0],p=s[3],d=s[6],A=s[1],C=s[4],y=s[7],M=s[2],E=s[5],P=s[8];return r[0]=a*S+o*A+l*M,r[3]=a*p+o*C+l*E,r[6]=a*d+o*y+l*P,r[1]=c*S+h*A+f*M,r[4]=c*p+h*C+f*E,r[7]=c*d+h*y+f*P,r[2]=u*S+m*A+g*M,r[5]=u*p+m*C+g*E,r[8]=u*d+m*y+g*P,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=h*a-o*c,u=o*l-h*r,m=c*r-a*l,g=e*f+n*u+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let S=1/g;return t[0]=f*S,t[1]=(s*c-h*n)*S,t[2]=(o*n-s*a)*S,t[3]=u*S,t[4]=(h*e-s*l)*S,t[5]=(s*r-o*e)*S,t[6]=m*S,t[7]=(n*l-c*e)*S,t[8]=(a*e-n*r)*S,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return ms("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(pc.makeScale(t,e)),this}rotate(t){return ms("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(pc.makeRotation(-t)),this}translate(t,e){return ms("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(pc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},pc=new ce,du=new ce().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),fu=new ce().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function cp(){let i={enabled:!0,workingColorSpace:Ur,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Ne&&(s.r=Bi(s.r),s.g=Bi(s.g),s.b=Bi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ne&&(s.r=Ys(s.r),s.g=Ys(s.g),s.b=Ys(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ki?Nr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ms("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ms("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ur]:{primaries:t,whitePoint:n,transfer:Nr,toXYZ:du,fromXYZ:fu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Wn},outputColorSpaceConfig:{drawingBufferColorSpace:Wn}},[Wn]:{primaries:t,whitePoint:n,transfer:Ne,toXYZ:du,fromXYZ:fu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Wn}}}),i}var be=cp();function Bi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ys(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ds,yo=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ds===void 0&&(Ds=Fr("canvas")),Ds.width=t.width,Ds.height=t.height;let s=Ds.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Ds}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Fr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Bi(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Bi(e[n]/255)*255):e[n]=Bi(e[n]);return{data:e,width:t.width,height:t.height}}else return ne("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},hp=0,Qs=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=gi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(mc(s[a].image)):r.push(mc(s[a]))}else r=mc(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function mc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?yo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ne("Texture: Unable to serialize Texture."),{})}var up=0,gc=new L,Nn=class i extends xi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=mi,s=mi,r=mn,a=is,o=ti,l=On,c=i.DEFAULT_ANISOTROPY,h=ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:up++}),this.uuid=gi(),this.name="",this.source=new Qs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ct(0,0),this.repeat=new Ct(1,1),this.center=new Ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(gc).x}get height(){return this.source.getSize(gc).y}get depth(){return this.source.getSize(gc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){ne(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ne(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==uh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case _o:t.x=t.x-Math.floor(t.x);break;case mi:t.x=t.x<0?0:1;break;case xo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case _o:t.y=t.y-Math.floor(t.y);break;case mi:t.y=t.y<0?0:1;break;case xo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Nn.DEFAULT_IMAGE=null;Nn.DEFAULT_MAPPING=uh;Nn.DEFAULT_ANISOTROPY=1;var Fe=class i{static{i.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],f=l[8],u=l[1],m=l[5],g=l[9],S=l[2],p=l[6],d=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-S)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+S)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let C=(c+1)/2,y=(m+1)/2,M=(d+1)/2,E=(h+u)/4,P=(f+S)/4,x=(g+p)/4;return C>y&&C>M?C<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(C),s=E/n,r=P/n):y>M?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=E/s,r=x/s):M<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),n=P/r,s=x/r),this.set(n,s,r,e),this}let A=Math.sqrt((p-g)*(p-g)+(f-S)*(f-S)+(u-h)*(u-h));return Math.abs(A)<.001&&(A=1),this.x=(p-g)/A,this.y=(f-S)/A,this.z=(u-h)/A,this.w=Math.acos((c+m+d-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ue(this.x,t.x,e.x),this.y=ue(this.y,t.y,e.y),this.z=ue(this.z,t.z,e.z),this.w=ue(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ue(this.x,t,e),this.y=ue(this.y,t,e),this.z=ue(this.z,t,e),this.w=ue(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ue(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},So=class extends xi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Fe(0,0,t,e),this.scissorTest=!1,this.viewport=new Fe(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Nn(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:mn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Qs(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Fn=class extends So{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Br=class extends Nn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Mo=class extends Nn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var ze=class i{static{i.prototype.isMatrix4=!0}constructor(t,e,n,s,r,a,o,l,c,h,f,u,m,g,S,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,f,u,m,g,S,p)}set(t,e,n,s,r,a,o,l,c,h,f,u,m,g,S,p){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=f,d[14]=u,d[3]=m,d[7]=g,d[11]=S,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Us.setFromMatrixColumn(t,0).length(),r=1/Us.setFromMatrixColumn(t,1).length(),a=1/Us.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let u=a*h,m=a*f,g=o*h,S=o*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=m+g*c,e[5]=u-S*c,e[9]=-o*l,e[2]=S-u*c,e[6]=g+m*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,m=l*f,g=c*h,S=c*f;e[0]=u+S*o,e[4]=g*o-m,e[8]=a*c,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=m*o-g,e[6]=S+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,m=l*f,g=c*h,S=c*f;e[0]=u-S*o,e[4]=-a*f,e[8]=g+m*o,e[1]=m+g*o,e[5]=a*h,e[9]=S-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,m=a*f,g=o*h,S=o*f;e[0]=l*h,e[4]=g*c-m,e[8]=u*c+S,e[1]=l*f,e[5]=S*c+u,e[9]=m*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,m=a*c,g=o*l,S=o*c;e[0]=l*h,e[4]=S-u*f,e[8]=g*f+m,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=m*f+g,e[10]=u-S*f}else if(t.order==="XZY"){let u=a*l,m=a*c,g=o*l,S=o*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=u*f+S,e[5]=a*h,e[9]=m*f-g,e[2]=g*f-m,e[6]=o*h,e[10]=S*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(dp,t,fp)}lookAt(t,e,n){let s=this.elements;return Hn.subVectors(t,e),Hn.lengthSq()===0&&(Hn.z=1),Hn.normalize(),Wi.crossVectors(n,Hn),Wi.lengthSq()===0&&(Math.abs(n.z)===1?Hn.x+=1e-4:Hn.z+=1e-4,Hn.normalize(),Wi.crossVectors(n,Hn)),Wi.normalize(),Na.crossVectors(Hn,Wi),s[0]=Wi.x,s[4]=Na.x,s[8]=Hn.x,s[1]=Wi.y,s[5]=Na.y,s[9]=Hn.y,s[2]=Wi.z,s[6]=Na.z,s[10]=Hn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],m=n[13],g=n[2],S=n[6],p=n[10],d=n[14],A=n[3],C=n[7],y=n[11],M=n[15],E=s[0],P=s[4],x=s[8],T=s[12],U=s[1],z=s[5],$=s[9],q=s[13],B=s[2],W=s[6],et=s[10],j=s[14],ft=s[3],Q=s[7],rt=s[11],ct=s[15];return r[0]=a*E+o*U+l*B+c*ft,r[4]=a*P+o*z+l*W+c*Q,r[8]=a*x+o*$+l*et+c*rt,r[12]=a*T+o*q+l*j+c*ct,r[1]=h*E+f*U+u*B+m*ft,r[5]=h*P+f*z+u*W+m*Q,r[9]=h*x+f*$+u*et+m*rt,r[13]=h*T+f*q+u*j+m*ct,r[2]=g*E+S*U+p*B+d*ft,r[6]=g*P+S*z+p*W+d*Q,r[10]=g*x+S*$+p*et+d*rt,r[14]=g*T+S*q+p*j+d*ct,r[3]=A*E+C*U+y*B+M*ft,r[7]=A*P+C*z+y*W+M*Q,r[11]=A*x+C*$+y*et+M*rt,r[15]=A*T+C*q+y*j+M*ct,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],f=t[6],u=t[10],m=t[14],g=t[3],S=t[7],p=t[11],d=t[15],A=l*m-c*u,C=o*m-c*f,y=o*u-l*f,M=a*m-c*h,E=a*u-l*h,P=a*f-o*h;return e*(S*A-p*C+d*y)-n*(g*A-p*M+d*E)+s*(g*C-S*M+d*P)-r*(g*y-S*E+p*P)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=t[9],u=t[10],m=t[11],g=t[12],S=t[13],p=t[14],d=t[15],A=e*o-n*a,C=e*l-s*a,y=e*c-r*a,M=n*l-s*o,E=n*c-r*o,P=s*c-r*l,x=h*S-f*g,T=h*p-u*g,U=h*d-m*g,z=f*p-u*S,$=f*d-m*S,q=u*d-m*p,B=A*q-C*$+y*z+M*U-E*T+P*x;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let W=1/B;return t[0]=(o*q-l*$+c*z)*W,t[1]=(s*$-n*q-r*z)*W,t[2]=(S*P-p*E+d*M)*W,t[3]=(u*E-f*P-m*M)*W,t[4]=(l*U-a*q-c*T)*W,t[5]=(e*q-s*U+r*T)*W,t[6]=(p*y-g*P-d*C)*W,t[7]=(h*P-u*y+m*C)*W,t[8]=(a*$-o*U+c*x)*W,t[9]=(n*U-e*$-r*x)*W,t[10]=(g*E-S*y+d*A)*W,t[11]=(f*y-h*E-m*A)*W,t[12]=(o*T-a*z-l*x)*W,t[13]=(e*z-n*T+s*x)*W,t[14]=(S*C-g*M-p*A)*W,t[15]=(h*M-f*C+u*A)*W,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,f=o+o,u=r*c,m=r*h,g=r*f,S=a*h,p=a*f,d=o*f,A=l*c,C=l*h,y=l*f,M=n.x,E=n.y,P=n.z;return s[0]=(1-(S+d))*M,s[1]=(m+y)*M,s[2]=(g-C)*M,s[3]=0,s[4]=(m-y)*E,s[5]=(1-(u+d))*E,s[6]=(p+A)*E,s[7]=0,s[8]=(g+C)*P,s[9]=(p-A)*P,s[10]=(1-(u+S))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Us.set(s[0],s[1],s[2]).length(),o=Us.set(s[4],s[5],s[6]).length(),l=Us.set(s[8],s[9],s[10]).length();r<0&&(a=-a),ni.copy(this);let c=1/a,h=1/o,f=1/l;return ni.elements[0]*=c,ni.elements[1]*=c,ni.elements[2]*=c,ni.elements[4]*=h,ni.elements[5]*=h,ni.elements[6]*=h,ni.elements[8]*=f,ni.elements[9]*=f,ni.elements[10]*=f,e.setFromRotationMatrix(ni),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=oi,l=!1){let c=this.elements,h=2*r/(e-t),f=2*r/(n-s),u=(e+t)/(e-t),m=(n+s)/(n-s),g,S;if(l)g=r/(a-r),S=a*r/(a-r);else if(o===oi)g=-(a+r)/(a-r),S=-2*a*r/(a-r);else if(o===Js)g=-a/(a-r),S=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=oi,l=!1){let c=this.elements,h=2/(e-t),f=2/(n-s),u=-(e+t)/(e-t),m=-(n+s)/(n-s),g,S;if(l)g=1/(a-r),S=a/(a-r);else if(o===oi)g=-2/(a-r),S=-(a+r)/(a-r);else if(o===Js)g=-1/(a-r),S=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=g,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Us=new L,ni=new ze,dp=new L(0,0,0),fp=new L(1,1,1),Wi=new L,Na=new L,Hn=new L,pu=new ze,mu=new vi,zi=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(ue(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ue(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(ue(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ue(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ue(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-ue(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:ne("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return pu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(pu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return mu.setFromEuler(this),this.setFromQuaternion(mu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};zi.DEFAULT_ORDER="XYZ";var tr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},pp=0,gu=new L,Ns=new vi,Di=new ze,Fa=new L,br=new L,mp=new L,gp=new vi,_u=new L(1,0,0),xu=new L(0,1,0),vu=new L(0,0,1),yu={type:"added"},_p={type:"removed"},Fs={type:"childadded",child:null},_c={type:"childremoved",child:null},fn=class i extends xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pp++}),this.uuid=gi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new L,e=new zi,n=new vi,s=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ze},normalMatrix:{value:new ce}}),this.matrix=new ze,this.matrixWorld=new ze,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ns.setFromAxisAngle(t,e),this.quaternion.multiply(Ns),this}rotateOnWorldAxis(t,e){return Ns.setFromAxisAngle(t,e),this.quaternion.premultiply(Ns),this}rotateX(t){return this.rotateOnAxis(_u,t)}rotateY(t){return this.rotateOnAxis(xu,t)}rotateZ(t){return this.rotateOnAxis(vu,t)}translateOnAxis(t,e){return gu.copy(t).applyQuaternion(this.quaternion),this.position.add(gu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(_u,t)}translateY(t){return this.translateOnAxis(xu,t)}translateZ(t){return this.translateOnAxis(vu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Di.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Fa.copy(t):Fa.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),br.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Di.lookAt(br,Fa,this.up):Di.lookAt(Fa,br,this.up),this.quaternion.setFromRotationMatrix(Di),s&&(Di.extractRotation(s.matrixWorld),Ns.setFromRotationMatrix(Di),this.quaternion.premultiply(Ns.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ie("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(yu),Fs.child=t,this.dispatchEvent(Fs),Fs.child=null):ie("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(_p),_c.child=t,this.dispatchEvent(_c),_c.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Di.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Di.multiply(t.parent.matrixWorld)),t.applyMatrix4(Di),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(yu),Fs.child=t,this.dispatchEvent(Fs),Fs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(br,t,mp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(br,gp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),f=a(t.shapes),u=a(t.skeletons),m=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};fn.DEFAULT_UP=new L(0,1,0);fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var li=class extends fn{constructor(){super(),this.isGroup=!0,this.type="Group"}},xp={type:"move"},er=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new li,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new li,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new li,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let S of t.hand.values()){let p=e.getJointPose(S,n),d=this._getHandJoint(c,S);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),m=.02,g=.005;c.inputState.pinching&&u>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(xp)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new li;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Cd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xi={h:0,s:0,l:0},Oa={h:0,s:0,l:0};function xc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var se=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Wn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,be.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=be.workingColorSpace){return this.r=t,this.g=e,this.b=n,be.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=be.workingColorSpace){if(t=Sh(t,1),e=ue(e,0,1),n=ue(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=xc(a,r,t+1/3),this.g=xc(a,r,t),this.b=xc(a,r,t-1/3)}return be.colorSpaceToWorking(this,s),this}setStyle(t,e=Wn){function n(r){r!==void 0&&parseFloat(r)<1&&ne("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:ne("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);ne("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Wn){let n=Cd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):ne("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Bi(t.r),this.g=Bi(t.g),this.b=Bi(t.b),this}copyLinearToSRGB(t){return this.r=Ys(t.r),this.g=Ys(t.g),this.b=Ys(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Wn){return be.workingToColorSpace(Sn.copy(this),t),Math.round(ue(Sn.r*255,0,255))*65536+Math.round(ue(Sn.g*255,0,255))*256+Math.round(ue(Sn.b*255,0,255))}getHexString(t=Wn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=be.workingColorSpace){be.workingToColorSpace(Sn.copy(this),e);let n=Sn.r,s=Sn.g,r=Sn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=be.workingColorSpace){return be.workingToColorSpace(Sn.copy(this),e),t.r=Sn.r,t.g=Sn.g,t.b=Sn.b,t}getStyle(t=Wn){be.workingToColorSpace(Sn.copy(this),t);let e=Sn.r,n=Sn.g,s=Sn.b;return t!==Wn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Xi),this.setHSL(Xi.h+t,Xi.s+e,Xi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Xi),t.getHSL(Oa);let n=Pr(Xi.h,Oa.h,e),s=Pr(Xi.s,Oa.s,e),r=Pr(Xi.l,Oa.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Sn=new se;se.NAMES=Cd;var zr=class extends fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zi,this.environmentIntensity=1,this.environmentRotation=new zi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},ii=new L,Ui=new L,vc=new L,Ni=new L,Os=new L,Bs=new L,Su=new L,yc=new L,Sc=new L,Mc=new L,bc=new Fe,wc=new Fe,Ec=new Fe,Zi=class i{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),ii.subVectors(t,e),s.cross(ii);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){ii.subVectors(s,e),Ui.subVectors(n,e),vc.subVectors(t,e);let a=ii.dot(ii),o=ii.dot(Ui),l=ii.dot(vc),c=Ui.dot(Ui),h=Ui.dot(vc),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let u=1/f,m=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-m-g,g,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Ni)===null?!1:Ni.x>=0&&Ni.y>=0&&Ni.x+Ni.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Ni)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ni.x),l.addScaledVector(a,Ni.y),l.addScaledVector(o,Ni.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return bc.setScalar(0),wc.setScalar(0),Ec.setScalar(0),bc.fromBufferAttribute(t,e),wc.fromBufferAttribute(t,n),Ec.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(bc,r.x),a.addScaledVector(wc,r.y),a.addScaledVector(Ec,r.z),a}static isFrontFacing(t,e,n,s){return ii.subVectors(n,e),Ui.subVectors(t,e),ii.cross(Ui).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ii.subVectors(this.c,this.b),Ui.subVectors(this.a,this.b),ii.cross(Ui).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Os.subVectors(s,n),Bs.subVectors(r,n),yc.subVectors(t,n);let l=Os.dot(yc),c=Bs.dot(yc);if(l<=0&&c<=0)return e.copy(n);Sc.subVectors(t,s);let h=Os.dot(Sc),f=Bs.dot(Sc);if(h>=0&&f<=h)return e.copy(s);let u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Os,a);Mc.subVectors(t,r);let m=Os.dot(Mc),g=Bs.dot(Mc);if(g>=0&&m<=g)return e.copy(r);let S=m*c-l*g;if(S<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Bs,o);let p=h*g-m*f;if(p<=0&&f-h>=0&&m-g>=0)return Su.subVectors(r,s),o=(f-h)/(f-h+(m-g)),e.copy(s).addScaledVector(Su,o);let d=1/(p+S+u);return a=S*d,o=u*d,e.copy(n).addScaledVector(Os,a).addScaledVector(Bs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Xn=class{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(si.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(si.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=si.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,si):si.fromBufferAttribute(r,a),si.applyMatrix4(t.matrixWorld),this.expandByPoint(si);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ba.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ba.copy(n.boundingBox)),Ba.applyMatrix4(t.matrixWorld),this.union(Ba)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,si),si.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(wr),za.subVectors(this.max,wr),zs.subVectors(t.a,wr),ks.subVectors(t.b,wr),Vs.subVectors(t.c,wr),$i.subVectors(ks,zs),qi.subVectors(Vs,ks),hs.subVectors(zs,Vs);let e=[0,-$i.z,$i.y,0,-qi.z,qi.y,0,-hs.z,hs.y,$i.z,0,-$i.x,qi.z,0,-qi.x,hs.z,0,-hs.x,-$i.y,$i.x,0,-qi.y,qi.x,0,-hs.y,hs.x,0];return!Tc(e,zs,ks,Vs,za)||(e=[1,0,0,0,1,0,0,0,1],!Tc(e,zs,ks,Vs,za))?!1:(ka.crossVectors($i,qi),e=[ka.x,ka.y,ka.z],Tc(e,zs,ks,Vs,za))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,si).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(si).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Fi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Fi=[new L,new L,new L,new L,new L,new L,new L,new L],si=new L,Ba=new Xn,zs=new L,ks=new L,Vs=new L,$i=new L,qi=new L,hs=new L,wr=new L,za=new L,ka=new L,us=new L;function Tc(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){us.fromArray(i,r);let o=s.x*Math.abs(us.x)+s.y*Math.abs(us.y)+s.z*Math.abs(us.z),l=t.dot(us),c=e.dot(us),h=n.dot(us);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var en=new L,Va=new Ct,vp=0,Ve=class extends xi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=vh,this.updateRanges=[],this.gpuType=di,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Va.fromBufferAttribute(this,e),Va.applyMatrix3(t),this.setXY(e,Va.x,Va.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyMatrix3(t),this.setXYZ(e,en.x,en.y,en.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyMatrix4(t),this.setXYZ(e,en.x,en.y,en.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyNormalMatrix(t),this.setXYZ(e,en.x,en.y,en.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.transformDirection(t),this.setXYZ(e,en.x,en.y,en.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ai(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Be(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ai(e,this.array)),e}setX(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ai(e,this.array)),e}setY(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ai(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ai(e,this.array)),e}setW(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Be(e,this.array),n=Be(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Be(e,this.array),n=Be(n,this.array),s=Be(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Be(e,this.array),n=Be(n,this.array),s=Be(s,this.array),r=Be(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var kr=class extends Ve{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Vr=class extends Ve{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var sn=class extends Ve{constructor(t,e,n){super(new Float32Array(t),e,n)}},yp=new Xn,Er=new L,Ac=new L,Qn=class{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):yp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Er.subVectors(t,this.center);let e=Er.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Er,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ac.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Er.copy(t.center).add(Ac)),this.expandByPoint(Er.copy(t.center).sub(Ac))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Sp=0,jn=new ze,Cc=new fn,Hs=new L,Gn=new Xn,Tr=new Xn,un=new L,je=class i extends xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sp++}),this.uuid=gi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Xf(t)?Vr:kr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ce().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return jn.makeRotationFromQuaternion(t),this.applyMatrix4(jn),this}rotateX(t){return jn.makeRotationX(t),this.applyMatrix4(jn),this}rotateY(t){return jn.makeRotationY(t),this.applyMatrix4(jn),this}rotateZ(t){return jn.makeRotationZ(t),this.applyMatrix4(jn),this}translate(t,e,n){return jn.makeTranslation(t,e,n),this.applyMatrix4(jn),this}scale(t,e,n){return jn.makeScale(t,e,n),this.applyMatrix4(jn),this}lookAt(t){return Cc.lookAt(t),Cc.updateMatrix(),this.applyMatrix4(Cc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hs).negate(),this.translate(Hs.x,Hs.y,Hs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new sn(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&ne("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ie("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Gn.setFromBufferAttribute(r),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,Gn.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,Gn.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint(Gn.min),this.boundingBox.expandByPoint(Gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ie('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ie("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){let n=this.boundingSphere.center;if(Gn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Tr.setFromBufferAttribute(o),this.morphTargetsRelative?(un.addVectors(Gn.min,Tr.min),Gn.expandByPoint(un),un.addVectors(Gn.max,Tr.max),Gn.expandByPoint(un)):(Gn.expandByPoint(Tr.min),Gn.expandByPoint(Tr.max))}Gn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)un.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(un));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)un.fromBufferAttribute(o,c),l&&(Hs.fromBufferAttribute(t,c),un.add(Hs)),s=Math.max(s,n.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ie('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ie("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Ve(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let x=0;x<n.count;x++)o[x]=new L,l[x]=new L;let c=new L,h=new L,f=new L,u=new Ct,m=new Ct,g=new Ct,S=new L,p=new L;function d(x,T,U){c.fromBufferAttribute(n,x),h.fromBufferAttribute(n,T),f.fromBufferAttribute(n,U),u.fromBufferAttribute(r,x),m.fromBufferAttribute(r,T),g.fromBufferAttribute(r,U),h.sub(c),f.sub(c),m.sub(u),g.sub(u);let z=1/(m.x*g.y-g.x*m.y);isFinite(z)&&(S.copy(h).multiplyScalar(g.y).addScaledVector(f,-m.y).multiplyScalar(z),p.copy(f).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(z),o[x].add(S),o[T].add(S),o[U].add(S),l[x].add(p),l[T].add(p),l[U].add(p))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let x=0,T=A.length;x<T;++x){let U=A[x],z=U.start,$=U.count;for(let q=z,B=z+$;q<B;q+=3)d(t.getX(q+0),t.getX(q+1),t.getX(q+2))}let C=new L,y=new L,M=new L,E=new L;function P(x){M.fromBufferAttribute(s,x),E.copy(M);let T=o[x];C.copy(T),C.sub(M.multiplyScalar(M.dot(T))).normalize(),y.crossVectors(E,T);let z=y.dot(l[x])<0?-1:1;a.setXYZW(x,C.x,C.y,C.z,z)}for(let x=0,T=A.length;x<T;++x){let U=A[x],z=U.start,$=U.count;for(let q=z,B=z+$;q<B;q+=3)P(t.getX(q+0)),P(t.getX(q+1)),P(t.getX(q+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Ve(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,m=n.count;u<m;u++)n.setXYZ(u,0,0,0);let s=new L,r=new L,a=new L,o=new L,l=new L,c=new L,h=new L,f=new L;if(t)for(let u=0,m=t.count;u<m;u+=3){let g=t.getX(u+0),S=t.getX(u+1),p=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,S),a.fromBufferAttribute(e,p),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,S),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(S,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,m=e.count;u<m;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)un.fromBufferAttribute(t,e),un.normalize(),t.setXYZ(e,un.x,un.y,un.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,f=o.normalized,u=new c.constructor(l.length*h),m=0,g=0;for(let S=0,p=l.length;S<p;S++){o.isInterleavedBufferAttribute?m=l[S]*o.data.stride+o.offset:m=l[S]*h;for(let d=0;d<h;d++)u[g++]=c[m++]}return new Ve(u,h,f)}if(this.index===null)return ne("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){let u=c[h],m=t(u,n);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){let m=c[f];h.push(m.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],f=r[c];for(let u=0,m=f.length;u<m;u++)h.push(f[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},bo=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=vh,this.updateRanges=[],this.version=0,this.uuid=gi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},Pn=new L,ci=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Pn.fromBufferAttribute(this,e),Pn.applyMatrix4(t),this.setXYZ(e,Pn.x,Pn.y,Pn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Pn.fromBufferAttribute(this,e),Pn.applyNormalMatrix(t),this.setXYZ(e,Pn.x,Pn.y,Pn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Pn.fromBufferAttribute(this,e),Pn.transformDirection(t),this.setXYZ(e,Pn.x,Pn.y,Pn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=ai(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Be(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Be(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Be(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Be(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Be(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ai(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ai(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ai(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ai(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Be(e,this.array),n=Be(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Be(e,this.array),n=Be(n,this.array),s=Be(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Be(e,this.array),n=Be(n,this.array),s=Be(s,this.array),r=Be(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Or("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ve(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Or("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Rc=new L,Mp=new L,bp=new ce,ri=class{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Rc.subVectors(n,e).cross(Mp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Rc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||bp.getNormalMatrix(t),s=this.coplanarPoint(Rc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},wp=0,yi=class extends xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wp++}),this.uuid=gi(),this.name="",this.type="Material",this.blending=cr,this.side=es,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nh,this.blendDst=ih,this.blendEquation=Ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new se(0,0,0),this.blendAlpha=0,this.depthFunc=Zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_d,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=lo,this.stencilZFail=lo,this.stencilZPass=lo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){ne(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ne(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new se().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new ri().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ct().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ct().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Oi=new L,Pc=new L,Ha=new L,Ga=new L,gs=class{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Oi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Oi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Oi.copy(this.origin).addScaledVector(this.direction,e),Oi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Pc.copy(t).add(e).multiplyScalar(.5),Ha.copy(e).sub(t).normalize(),Ga.copy(this.origin).sub(Pc);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Ha),o=Ga.dot(this.direction),l=-Ga.dot(Ha),c=Ga.lengthSq(),h=Math.abs(1-a*a),f,u,m,g;if(h>0)if(f=a*l-o,u=a*o-l,g=r*h,f>=0)if(u>=-g)if(u<=g){let S=1/h;f*=S,u*=S,m=f*(f+a*u+2*o)+u*(a*f+u+2*l)+c}else u=r,f=Math.max(0,-(a*u+o)),m=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(a*u+o)),m=-f*f+u*(u+2*l)+c;else u<=-g?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-l),r),m=-f*f+u*(u+2*l)+c):u<=g?(f=0,u=Math.min(Math.max(-r,-l),r),m=u*(u+2*l)+c):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-l),r),m=-f*f+u*(u+2*l)+c);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),m=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Pc).addScaledVector(Ha,u),m}intersectSphere(t,e){if(t.radius<0)return null;Oi.subVectors(t.center,this.origin);let n=Oi.dot(this.direction),s=Oi.dot(Oi)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-u.z)*f,l=(t.max.z-u.z)*f):(o=(t.max.z-u.z)*f,l=(t.min.z-u.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Oi)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,f=t.x-a.x,u=t.y-a.y,m=t.z-a.z,g=e.x-a.x,S=e.y-a.y,p=e.z-a.z,d=n.x-a.x,A=n.y-a.y,C=n.z-a.z,y=Math.abs(l),M=Math.abs(c),E=Math.abs(h),P,x,T,U,z,$,q,B,W,et,j,ft;if(y>=M&&y>=E?(T=l,$=f,W=g,ft=d,l>=0?(P=c,x=h,U=u,z=m,q=S,B=p,et=A,j=C):(P=h,x=c,U=m,z=u,q=p,B=S,et=C,j=A)):M>=E?(T=c,$=u,W=S,ft=A,c>=0?(P=h,x=l,U=m,z=f,q=p,B=g,et=C,j=d):(P=l,x=h,U=f,z=m,q=g,B=p,et=d,j=C)):(T=h,$=m,W=p,ft=C,h>=0?(P=l,x=c,U=f,z=u,q=g,B=S,et=d,j=A):(P=c,x=l,U=u,z=f,q=S,B=g,et=A,j=d)),T===0)return null;let Q=P/T,rt=x/T,ct=1/T,Jt=U-Q*$,kt=z-rt*$,Te=q-Q*W,ve=B-rt*W,Me=et-Q*ft,Y=j-rt*ft,it=Me*ve-Y*Te,Et=Jt*Y-kt*Me,Qt=Te*kt-ve*Jt;if(s){if(it<0||Et<0||Qt<0)return null}else if((it<0||Et<0||Qt<0)&&(it>0||Et>0||Qt>0))return null;let Rt=it+Et+Qt;if(Rt===0)return null;let qt=ct*(it*$+Et*W+Qt*ft);return(Rt>0?qt<0:qt>0)?null:this.at(qt/Rt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Hr=class extends yi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zi,this.combine=jo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Mu=new ze,ds=new gs,Wa=new Qn,bu=new L,Xa=new L,$a=new L,qa=new L,Ic=new L,Ya=new L,wu=new L,Za=new L,bn=class extends fn{constructor(t=new je,e=new Hr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Ya.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],f=r[l];h!==0&&(Ic.fromBufferAttribute(f,t),a?Ya.addScaledVector(Ic,h):Ya.addScaledVector(Ic.sub(e),h))}e.add(Ya)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Wa.copy(n.boundingSphere),Wa.applyMatrix4(r),ds.copy(t.ray).recast(t.near),!(Wa.containsPoint(ds.origin)===!1&&(ds.intersectSphere(Wa,bu)===null||ds.origin.distanceToSquared(bu)>(t.far-t.near)**2))&&(Mu.copy(r).invert(),ds.copy(t.ray).applyMatrix4(Mu),!(n.boundingBox!==null&&ds.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ds)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,S=u.length;g<S;g++){let p=u[g],d=a[p.materialIndex],A=Math.max(p.start,m.start),C=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let y=A,M=C;y<M;y+=3){let E=o.getX(y),P=o.getX(y+1),x=o.getX(y+2);s=Ja(this,d,t,n,c,h,f,E,P,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,m.start),S=Math.min(o.count,m.start+m.count);for(let p=g,d=S;p<d;p+=3){let A=o.getX(p),C=o.getX(p+1),y=o.getX(p+2);s=Ja(this,a,t,n,c,h,f,A,C,y),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,S=u.length;g<S;g++){let p=u[g],d=a[p.materialIndex],A=Math.max(p.start,m.start),C=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let y=A,M=C;y<M;y+=3){let E=y,P=y+1,x=y+2;s=Ja(this,d,t,n,c,h,f,E,P,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,m.start),S=Math.min(l.count,m.start+m.count);for(let p=g,d=S;p<d;p+=3){let A=p,C=p+1,y=p+2;s=Ja(this,a,t,n,c,h,f,A,C,y),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function Ep(i,t,e,n,s,r,a,o){let l;if(t.side===In?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===es,o),l===null)return null;Za.copy(o),Za.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Za);return c<e.near||c>e.far?null:{distance:c,point:Za.clone(),object:i}}function Ja(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Xa),i.getVertexPosition(l,$a),i.getVertexPosition(c,qa);let h=Ep(i,t,e,n,Xa,$a,qa,wu);if(h){let f=new L;Zi.getBarycoord(wu,Xa,$a,qa,f),s&&(h.uv=Zi.getInterpolatedAttribute(s,o,l,c,f,new Ct)),r&&(h.uv1=Zi.getInterpolatedAttribute(r,o,l,c,f,new Ct)),a&&(h.normal=Zi.getInterpolatedAttribute(a,o,l,c,f,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new L,materialIndex:0};Zi.getNormal(Xa,$a,qa,u.normal),h.face=u,h.barycoord=f}return h}var wo=class extends Nn{constructor(t=null,e=1,n=1,s,r,a,o,l,c=dn,h=dn,f,u){super(null,a,o,l,c,h,s,r,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var fs=new Qn,Tp=new Ct(.5,.5),Ka=new L,nr=class{constructor(t=new ri,e=new ri,n=new ri,s=new ri,r=new ri,a=new ri){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=oi,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],f=r[5],u=r[6],m=r[7],g=r[8],S=r[9],p=r[10],d=r[11],A=r[12],C=r[13],y=r[14],M=r[15];if(s[0].setComponents(c-a,m-h,d-g,M-A).normalize(),s[1].setComponents(c+a,m+h,d+g,M+A).normalize(),s[2].setComponents(c+o,m+f,d+S,M+C).normalize(),s[3].setComponents(c-o,m-f,d-S,M-C).normalize(),n)s[4].setComponents(l,u,p,y).normalize(),s[5].setComponents(c-l,m-u,d-p,M-y).normalize();else if(s[4].setComponents(c-l,m-u,d-p,M-y).normalize(),e===oi)s[5].setComponents(c+l,m+u,d+p,M+y).normalize();else if(e===Js)s[5].setComponents(l,u,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),fs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),fs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(fs)}intersectsSprite(t){fs.center.set(0,0,0);let e=Tp.distanceTo(t.center);return fs.radius=.7071067811865476+e,fs.applyMatrix4(t.matrixWorld),this.intersectsSphere(fs)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Ka.x=s.normal.x>0?t.max.x:t.min.x,Ka.y=s.normal.y>0?t.max.y:t.min.y,Ka.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ka)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var _s=class extends yi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new se(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Eo=new L,To=new L,Eu=new ze,Ar=new gs,ja=new Qn,Lc=new L,Tu=new L,Ao=class extends fn{constructor(t=new je,e=new _s){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Eo.fromBufferAttribute(e,s-1),To.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Eo.distanceTo(To);t.setAttribute("lineDistance",new sn(n,1))}else ne("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ja.copy(n.boundingSphere),ja.applyMatrix4(s),ja.radius+=r,t.ray.intersectsSphere(ja)===!1)return;Eu.copy(s).invert(),Ar.copy(t.ray).applyMatrix4(Eu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let m=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let S=m,p=g-1;S<p;S+=c){let d=h.getX(S),A=h.getX(S+1),C=Qa(this,t,Ar,l,d,A,S);C&&e.push(C)}if(this.isLineLoop){let S=h.getX(g-1),p=h.getX(m),d=Qa(this,t,Ar,l,S,p,g-1);d&&e.push(d)}}else{let m=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let S=m,p=g-1;S<p;S+=c){let d=Qa(this,t,Ar,l,S,S+1,S);d&&e.push(d)}if(this.isLineLoop){let S=Qa(this,t,Ar,l,g-1,m,g-1);S&&e.push(S)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Qa(i,t,e,n,s,r,a){let o=i.geometry.attributes.position;if(Eo.fromBufferAttribute(o,s),To.fromBufferAttribute(o,r),e.distanceSqToSegment(Eo,To,Lc,Tu)>n)return;Lc.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Lc);if(!(c<t.near||c>t.far))return{distance:c,point:Tu.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Gr=class extends Ao{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},Co=class extends yi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new se(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Au=new ze,Gc=new gs,to=new Qn,eo=new L,xs=class extends fn{constructor(t=new je,e=new Co){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),to.copy(n.boundingSphere),to.applyMatrix4(s),to.radius+=r,t.ray.intersectsSphere(to)===!1)return;Au.copy(s).invert(),Gc.copy(t.ray).applyMatrix4(Au);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){let u=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let g=u,S=m;g<S;g++){let p=c.getX(g);eo.fromBufferAttribute(f,p),Cu(eo,p,l,s,t,e,this)}}else{let u=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let g=u,S=m;g<S;g++)eo.fromBufferAttribute(f,g),Cu(eo,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Cu(i,t,e,n,s,r,a){let o=Gc.distanceSqToPoint(i);if(o<e){let l=new L;Gc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Wr=class extends Nn{constructor(t=[],e=ns,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var Ji=class extends Nn{constructor(t,e,n=ui,s,r,a,o=dn,l=dn,c,h=_i,f=1){if(h!==_i&&h!==ss)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:f};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Qs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Ro=class extends Ji{constructor(t,e=ui,n=ns,s,r,a=dn,o=dn,l,c=_i){let h={width:t,height:t,depth:1},f=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Xr=class extends Nn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},ir=class i extends je{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],f=[],u=0,m=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new sn(c,3)),this.setAttribute("normal",new sn(h,3)),this.setAttribute("uv",new sn(f,2));function g(S,p,d,A,C,y,M,E,P,x,T){let U=y/P,z=M/x,$=y/2,q=M/2,B=E/2,W=P+1,et=x+1,j=0,ft=0,Q=new L;for(let rt=0;rt<et;rt++){let ct=rt*z-q;for(let Jt=0;Jt<W;Jt++){let kt=Jt*U-$;Q[S]=kt*A,Q[p]=ct*C,Q[d]=B,c.push(Q.x,Q.y,Q.z),Q[S]=0,Q[p]=0,Q[d]=E>0?1:-1,h.push(Q.x,Q.y,Q.z),f.push(Jt/P),f.push(1-rt/x),j+=1}}for(let rt=0;rt<x;rt++)for(let ct=0;ct<P;ct++){let Jt=u+ct+W*rt,kt=u+ct+W*(rt+1),Te=u+(ct+1)+W*(rt+1),ve=u+(ct+1)+W*rt;l.push(Jt,kt,ve),l.push(kt,Te,ve),ft+=6}o.addGroup(m,ft,T),m+=ft,u+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var $n=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ne("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,m=(a-h)/u;return(s+m)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new Ct:new L);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new L,s=[],r=[],a=[],o=new L,l=new ze;for(let m=0;m<=t;m++){let g=m/t;s[m]=this.getTangentAt(g,new L)}r[0]=new L,a[0]=new L;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let m=1;m<=t;m++){if(r[m]=r[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(s[m-1],s[m]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(ue(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(l.makeRotationAxis(o,g))}a[m].crossVectors(s[m],r[m])}if(e===!0){let m=Math.acos(ue(r[0].dot(r[t]),-1,1));m/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(m=-m);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],m*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},sr=class extends $n{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new Ct){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,m=c-this.aY;l=u*h-m*f+this.aX,c=u*f+m*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Po=class extends sr{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function bh(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,f){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,m=(o-a)/h-(l-a)/(h+f)+(l-o)/f;u*=h,m*=h,s(a,o,u,m)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var Ru=new L,Pu=new L,Dc=new bh,Uc=new bh,Nc=new bh,Io=class extends $n{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new L){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Pu.subVectors(s[0],s[1]).add(s[0]),c=Pu);let f=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Ru.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ru),this.curveType==="centripetal"||this.curveType==="chordal"){let m=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(f),m),S=Math.pow(f.distanceToSquared(u),m),p=Math.pow(u.distanceToSquared(h),m);S<1e-4&&(S=1),g<1e-4&&(g=S),p<1e-4&&(p=S),Dc.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,g,S,p),Uc.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,g,S,p),Nc.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,g,S,p)}else this.curveType==="catmullrom"&&(Dc.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),Uc.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),Nc.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return n.set(Dc.calc(l),Uc.calc(l),Nc.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new L().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Iu(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function Ap(i,t){let e=1-i;return e*e*t}function Cp(i,t){return 2*(1-i)*i*t}function Rp(i,t){return i*i*t}function Ir(i,t,e,n){return Ap(i,t)+Cp(i,e)+Rp(i,n)}function Pp(i,t){let e=1-i;return e*e*e*t}function Ip(i,t){let e=1-i;return 3*e*e*i*t}function Lp(i,t){return 3*(1-i)*i*i*t}function Dp(i,t){return i*i*i*t}function Lr(i,t,e,n,s){return Pp(i,t)+Ip(i,e)+Lp(i,n)+Dp(i,s)}var $r=class extends $n{constructor(t=new Ct,e=new Ct,n=new Ct,s=new Ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Ct){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Lr(t,s.x,r.x,a.x,o.x),Lr(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Lo=class extends $n{constructor(t=new L,e=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new L){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Lr(t,s.x,r.x,a.x,o.x),Lr(t,s.y,r.y,a.y,o.y),Lr(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},qr=class extends $n{constructor(t=new Ct,e=new Ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Ct){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Ct){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Do=class extends $n{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Yr=class extends $n{constructor(t=new Ct,e=new Ct,n=new Ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Ct){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Ir(t,s.x,r.x,a.x),Ir(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Uo=class extends $n{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Ir(t,s.x,r.x,a.x),Ir(t,s.y,r.y,a.y),Ir(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Zr=class extends $n{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Ct){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set(Iu(o,l.x,c.x,h.x,f.x),Iu(o,l.y,c.y,h.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Ct().fromArray(s))}return this}},Wc=Object.freeze({__proto__:null,ArcCurve:Po,CatmullRomCurve3:Io,CubicBezierCurve:$r,CubicBezierCurve3:Lo,EllipseCurve:sr,LineCurve:qr,LineCurve3:Do,QuadraticBezierCurve:Yr,QuadraticBezierCurve3:Uo,SplineCurve:Zr}),No=class extends $n{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Wc[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Wc[s.type]().fromJSON(s))}return this}},vs=class extends No{constructor(t){super(),this.type="Path",this.currentPoint=new Ct,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new qr(this.currentPoint.clone(),new Ct(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Yr(this.currentPoint.clone(),new Ct(t,e),new Ct(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new $r(this.currentPoint.clone(),new Ct(t,e),new Ct(n,s),new Ct(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Zr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new sr(t,e,n,s,r,a,o,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},rr=class extends vs{constructor(t){super(t),this.uuid=gi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new vs().fromJSON(s))}return this}};function Up(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Rd(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=zp(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let h=o,f=l;for(let u=e;u<s;u+=e){let m=i[u],g=i[u+1];m<o&&(o=m),g<l&&(l=g),m>h&&(h=m),g>f&&(f=g)}c=Math.max(h-o,f-l),c=c!==0?32767/c:0}return Jr(r,a,e,o,l,c,0),a}function Rd(i,t,e,n,s){let r;if(s===Jp(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=Lu(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=Lu(a/n|0,i[a],i[a+1],r);return r&&ar(r,r.next)&&(jr(r),r=r.next),r}function ys(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(ar(e,e.next)||qe(e.prev,e,e.next)===0)){if(jr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Jr(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Wp(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Fp(i,n,s,r):Np(i)){t.push(l.i,i.i,c.i),jr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Op(ys(i),t),Jr(i,t,e,n,s,r,2)):a===2&&Bp(i,t,e,n,s,r):Jr(ys(i),t,e,n,s,r,1);break}}}function Np(i){let t=i.prev,e=i,n=i.next;if(qe(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(s,r,a),f=Math.min(o,l,c),u=Math.max(s,r,a),m=Math.max(o,l,c),g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=f&&g.y<=m&&Cr(s,o,r,l,a,c,g.x,g.y)&&qe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Fp(i,t,e,n){let s=i.prev,r=i,a=i.next;if(qe(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,f=r.y,u=a.y,m=Math.min(o,l,c),g=Math.min(h,f,u),S=Math.max(o,l,c),p=Math.max(h,f,u),d=Xc(m,g,t,e,n),A=Xc(S,p,t,e,n),C=i.prevZ,y=i.nextZ;for(;C&&C.z>=d&&y&&y.z<=A;){if(C.x>=m&&C.x<=S&&C.y>=g&&C.y<=p&&C!==s&&C!==a&&Cr(o,h,l,f,c,u,C.x,C.y)&&qe(C.prev,C,C.next)>=0||(C=C.prevZ,y.x>=m&&y.x<=S&&y.y>=g&&y.y<=p&&y!==s&&y!==a&&Cr(o,h,l,f,c,u,y.x,y.y)&&qe(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;C&&C.z>=d;){if(C.x>=m&&C.x<=S&&C.y>=g&&C.y<=p&&C!==s&&C!==a&&Cr(o,h,l,f,c,u,C.x,C.y)&&qe(C.prev,C,C.next)>=0)return!1;C=C.prevZ}for(;y&&y.z<=A;){if(y.x>=m&&y.x<=S&&y.y>=g&&y.y<=p&&y!==s&&y!==a&&Cr(o,h,l,f,c,u,y.x,y.y)&&qe(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Op(i,t){let e=i;do{let n=e.prev,s=e.next.next;!ar(n,s)&&Id(n,e,e.next,s)&&Kr(n,s)&&Kr(s,n)&&(t.push(n.i,e.i,s.i),jr(e),jr(e.next),e=i=s),e=e.next}while(e!==i);return ys(e)}function Bp(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&qp(a,o)){let l=Ld(a,o);a=ys(a,a.next),l=ys(l,l.next),Jr(a,t,e,n,s,r,0),Jr(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function zp(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=Rd(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push($p(c))}s.sort(kp);for(let r=0;r<s.length;r++)e=Vp(s[r],e);return e}function kp(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Vp(i,t){let e=Hp(i,t);if(!e)return t;let n=Ld(e,i);return ys(n,n.next),ys(e,e.next)}function Hp(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(ar(i,e))return e;do{if(ar(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let f=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>r&&(r=f,a=e.x<e.next.x?e:e.next,f===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Pd(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let f=Math.abs(s-e.y)/(n-e.x);Kr(e,i)&&(f<h||f===h&&(e.x>a.x||e.x===a.x&&Gp(a,e)))&&(a=e,h=f)}e=e.next}while(e!==o);return a}function Gp(i,t){return qe(i.prev,i,t.prev)<0&&qe(t.next,i,i.next)<0}function Wp(i,t,e,n){let s=i;do s.z===0&&(s.z=Xc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Xp(s)}function Xp(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function Xc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function $p(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Pd(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Cr(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&Pd(i,t,e,n,s,r,a,o)}function qp(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Yp(i,t)&&(Kr(i,t)&&Kr(t,i)&&Zp(i,t)&&(qe(i.prev,i,t.prev)||qe(i,t.prev,t))||ar(i,t)&&qe(i.prev,i,i.next)>0&&qe(t.prev,t,t.next)>0)}function qe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ar(i,t){return i.x===t.x&&i.y===t.y}function Id(i,t,e,n){let s=io(qe(i,t,e)),r=io(qe(i,t,n)),a=io(qe(e,n,i)),o=io(qe(e,n,t));return!!(s!==r&&a!==o||s===0&&no(i,e,t)||r===0&&no(i,n,t)||a===0&&no(e,i,n)||o===0&&no(e,t,n))}function no(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function io(i){return i>0?1:i<0?-1:0}function Yp(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Id(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Kr(i,t){return qe(i.prev,i,i.next)<0?qe(i,t,i.next)>=0&&qe(i,i.prev,t)>=0:qe(i,t,i.prev)<0||qe(i,i.next,t)<0}function Zp(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Ld(i,t){let e=$c(i.i,i.x,i.y),n=$c(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Lu(i,t,e,n){let s=$c(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function jr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function $c(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Jp(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var qc=class{static triangulate(t,e,n=2){return Up(t,e,n)}},ps=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Du(t),Uu(n,t);let a=t.length;e.forEach(Du);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Uu(n,e[l]);let o=qc.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Du(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Uu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Qr=class i extends je{constructor(t=new rr([new Ct(.5,.5),new Ct(-.5,.5),new Ct(-.5,-.5),new Ct(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new sn(s,3)),this.setAttribute("uv",new sn(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,m=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:m-.1,S=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3,d=e.extrudePath,A=e.UVGenerator!==void 0?e.UVGenerator:Kp,C,y=!1,M,E,P,x;if(d){C=d.getSpacedPoints(h),y=!0,u=!1;let F=d.isCatmullRomCurve3?d.closed:!1;M=d.computeFrenetFrames(h,F),E=new L,P=new L,x=new L}u||(p=0,m=0,g=0,S=0);let T=o.extractPoints(c),U=T.shape,z=T.holes;if(!ps.isClockWise(U)){U=U.reverse();for(let F=0,dt=z.length;F<dt;F++){let vt=z[F];ps.isClockWise(vt)&&(z[F]=vt.reverse())}}function q(F){let vt=10000000000000001e-36,gt=F[0];for(let St=1;St<=F.length;St++){let jt=St%F.length,Kt=F[jt],Bt=Kt.x-gt.x,re=Kt.y-gt.y,I=Bt*Bt+re*re,Ce=Math.max(Math.abs(Kt.x),Math.abs(Kt.y),Math.abs(gt.x),Math.abs(gt.y)),_e=vt*Ce*Ce;if(I<=_e){F.splice(jt,1),St--;continue}gt=Kt}}q(U),z.forEach(q);let B=z.length,W=U;for(let F=0;F<B;F++){let dt=z[F];U=U.concat(dt)}function et(F,dt,vt){return dt||ie("ExtrudeGeometry: vec does not exist"),F.clone().addScaledVector(dt,vt)}let j=U.length;function ft(F,dt,vt){let gt,St,jt,Kt=F.x-dt.x,Bt=F.y-dt.y,re=vt.x-F.x,I=vt.y-F.y,Ce=Kt*Kt+Bt*Bt,_e=Kt*I-Bt*re;if(Math.abs(_e)>Number.EPSILON){let w=Math.sqrt(Ce),_=Math.sqrt(re*re+I*I),k=dt.x-Bt/w,X=dt.y+Kt/w,K=vt.x-I/_,yt=vt.y+re/_,wt=((K-k)*I-(yt-X)*re)/(Kt*I-Bt*re);gt=k+Kt*wt-F.x,St=X+Bt*wt-F.y;let tt=gt*gt+St*St;if(tt<=2)return new Ct(gt,St);jt=Math.sqrt(tt/2)}else{let w=!1;Kt>Number.EPSILON?re>Number.EPSILON&&(w=!0):Kt<-Number.EPSILON?re<-Number.EPSILON&&(w=!0):Math.sign(Bt)===Math.sign(I)&&(w=!0),w?(gt=-Bt,St=Kt,jt=Math.sqrt(Ce)):(gt=Kt,St=Bt,jt=Math.sqrt(Ce/2))}return new Ct(gt/jt,St/jt)}let Q=[];for(let F=0,dt=W.length,vt=dt-1,gt=F+1;F<dt;F++,vt++,gt++)vt===dt&&(vt=0),gt===dt&&(gt=0),Q[F]=ft(W[F],W[vt],W[gt]);let rt=[],ct,Jt=Q.concat();for(let F=0,dt=B;F<dt;F++){let vt=z[F];ct=[];for(let gt=0,St=vt.length,jt=St-1,Kt=gt+1;gt<St;gt++,jt++,Kt++)jt===St&&(jt=0),Kt===St&&(Kt=0),ct[gt]=ft(vt[gt],vt[jt],vt[Kt]);rt.push(ct),Jt=Jt.concat(ct)}let kt;if(p===0)kt=ps.triangulateShape(W,z);else{let F=[],dt=[];for(let vt=0;vt<p;vt++){let gt=vt/p,St=m*Math.cos(gt*Math.PI/2),jt=g*Math.sin(gt*Math.PI/2)+S;for(let Kt=0,Bt=W.length;Kt<Bt;Kt++){let re=et(W[Kt],Q[Kt],jt);Et(re.x,re.y,-St),gt===0&&F.push(re)}for(let Kt=0,Bt=B;Kt<Bt;Kt++){let re=z[Kt];ct=rt[Kt];let I=[];for(let Ce=0,_e=re.length;Ce<_e;Ce++){let w=et(re[Ce],ct[Ce],jt);Et(w.x,w.y,-St),gt===0&&I.push(w)}gt===0&&dt.push(I)}}kt=ps.triangulateShape(F,dt)}let Te=kt.length,ve=g+S;for(let F=0;F<j;F++){let dt=u?et(U[F],Jt[F],ve):U[F];y?(P.copy(M.normals[0]).multiplyScalar(dt.x),E.copy(M.binormals[0]).multiplyScalar(dt.y),x.copy(C[0]).add(P).add(E),Et(x.x,x.y,x.z)):Et(dt.x,dt.y,0)}for(let F=1;F<=h;F++)for(let dt=0;dt<j;dt++){let vt=u?et(U[dt],Jt[dt],ve):U[dt];y?(P.copy(M.normals[F]).multiplyScalar(vt.x),E.copy(M.binormals[F]).multiplyScalar(vt.y),x.copy(C[F]).add(P).add(E),Et(x.x,x.y,x.z)):Et(vt.x,vt.y,f/h*F)}for(let F=p-1;F>=0;F--){let dt=F/p,vt=m*Math.cos(dt*Math.PI/2),gt=g*Math.sin(dt*Math.PI/2)+S;for(let St=0,jt=W.length;St<jt;St++){let Kt=et(W[St],Q[St],gt);Et(Kt.x,Kt.y,f+vt)}for(let St=0,jt=z.length;St<jt;St++){let Kt=z[St];ct=rt[St];for(let Bt=0,re=Kt.length;Bt<re;Bt++){let I=et(Kt[Bt],ct[Bt],gt);y?Et(I.x,I.y+C[h-1].y,C[h-1].x+vt):Et(I.x,I.y,f+vt)}}}Me(),Y();function Me(){let F=s.length/3;if(u){let dt=0,vt=j*dt;for(let gt=0;gt<Te;gt++){let St=kt[gt];Qt(St[2]+vt,St[1]+vt,St[0]+vt)}dt=h+p*2,vt=j*dt;for(let gt=0;gt<Te;gt++){let St=kt[gt];Qt(St[0]+vt,St[1]+vt,St[2]+vt)}}else{for(let dt=0;dt<Te;dt++){let vt=kt[dt];Qt(vt[2],vt[1],vt[0])}for(let dt=0;dt<Te;dt++){let vt=kt[dt];Qt(vt[0]+j*h,vt[1]+j*h,vt[2]+j*h)}}n.addGroup(F,s.length/3-F,0)}function Y(){let F=s.length/3,dt=0;it(W,dt),dt+=W.length;for(let vt=0,gt=z.length;vt<gt;vt++){let St=z[vt];it(St,dt),dt+=St.length}n.addGroup(F,s.length/3-F,1)}function it(F,dt){let vt=F.length;for(;--vt>=0;){let gt=vt,St=vt-1;St<0&&(St=F.length-1);for(let jt=0,Kt=h+p*2;jt<Kt;jt++){let Bt=j*jt,re=j*(jt+1),I=dt+gt+Bt,Ce=dt+St+Bt,_e=dt+St+re,w=dt+gt+re;Rt(I,Ce,_e,w)}}}function Et(F,dt,vt){l.push(F),l.push(dt),l.push(vt)}function Qt(F,dt,vt){qt(F),qt(dt),qt(vt);let gt=s.length/3,St=A.generateTopUV(n,s,gt-3,gt-2,gt-1);Ae(St[0]),Ae(St[1]),Ae(St[2])}function Rt(F,dt,vt,gt){qt(F),qt(dt),qt(gt),qt(dt),qt(vt),qt(gt);let St=s.length/3,jt=A.generateSideWallUV(n,s,St-6,St-3,St-2,St-1);Ae(jt[0]),Ae(jt[1]),Ae(jt[3]),Ae(jt[1]),Ae(jt[2]),Ae(jt[3])}function qt(F){s.push(l[F*3+0]),s.push(l[F*3+1]),s.push(l[F*3+2])}function Ae(F){r.push(F.x),r.push(F.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return jp(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Wc[s.type]().fromJSON(s)),new i(n,t.options)}},Kp={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new Ct(r,a),new Ct(o,l),new Ct(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],f=t[n*3+2],u=t[s*3],m=t[s*3+1],g=t[s*3+2],S=t[r*3],p=t[r*3+1],d=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new Ct(a,1-l),new Ct(c,1-f),new Ct(u,1-g),new Ct(S,1-d)]:[new Ct(o,1-l),new Ct(h,1-f),new Ct(m,1-g),new Ct(p,1-d)]}};function jp(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var ta=class i extends je{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,f=t/o,u=e/l,m=[],g=[],S=[],p=[];for(let d=0;d<h;d++){let A=d*u-a;for(let C=0;C<c;C++){let y=C*f-r;g.push(y,-A,0),S.push(0,0,1),p.push(C/o),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let A=0;A<o;A++){let C=A+c*d,y=A+c*(d+1),M=A+1+c*(d+1),E=A+1+c*d;m.push(C,y,E),m.push(y,M,E)}this.setIndex(m),this.setAttribute("position",new sn(g,3)),this.setAttribute("normal",new sn(S,3)),this.setAttribute("uv",new sn(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var ea=class extends je{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],n=new Set,s=new L,r=new L;if(t.index!==null){let a=t.attributes.position,o=t.index,l=t.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let f=l[c],u=f.start,m=f.count;for(let g=u,S=u+m;g<S;g+=3)for(let p=0;p<3;p++){let d=o.getX(g+p),A=o.getX(g+(p+1)%3);s.fromBufferAttribute(a,d),r.fromBufferAttribute(a,A),Nu(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{let a=t.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,f=3*o+(c+1)%3;s.fromBufferAttribute(a,h),r.fromBufferAttribute(a,f),Nu(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new sn(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function Nu(i,t,e){let n=`${i.x},${i.y},${i.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${i.x},${i.y},${i.z}`;return e.has(n)===!0||e.has(s)===!0?!1:(e.add(n),e.add(s),!0)}function bs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Fu(s))s.isRenderTargetTexture?(ne("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Fu(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function wn(i){let t={};for(let e=0;e<i.length;e++){let n=bs(i[e]);for(let s in n)t[s]=n[s]}return t}function Fu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Qp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function wh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:be.workingColorSpace}var ya={clone:bs,merge:wn},tm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,em=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,pn=class extends yi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tm,this.fragmentShader=em,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=bs(t.uniforms),this.uniformsGroups=Qp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new se().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ct().fromArray(s.value);break;case"v3":this.uniforms[n].value=new L().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Fe().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ce().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ze().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Fo=class extends pn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var na=class extends yi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bl,this.normalScale=new Ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zi,this.combine=jo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Oo=class extends yi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=md,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Bo=class extends yi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Gs(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Fc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Ki=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},zo=class extends Ki{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:kc,endingEnd:kc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Vc:r=t,o=2*e-n;break;case Hc:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Vc:a=t,l=2*n-e;break;case Hc:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,m=this._weightNext,g=(n-e)/(s-e),S=g*g,p=S*g,d=-u*p+2*u*S-u*g,A=(1+u)*p+(-1.5-2*u)*S+(-.5+u)*g+1,C=(-1-m)*p+(1.5+m)*S+.5*g,y=m*p-m*S;for(let M=0;M!==o;++M)r[M]=d*a[h+M]+A*a[c+M]+C*a[l+M]+y*a[f+M];return r}},ko=class extends Ki{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),f=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*f+a[l+u]*h;return r}},Vo=class extends Ki{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Ho=class extends Ki{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,f=this.outTangents;if(!h||!f){let g=(n-e)/(s-e),S=1-g;for(let p=0;p!==o;++p)r[p]=a[c+p]*S+a[l+p]*g;return r}let u=o*2,m=t-1;for(let g=0;g!==o;++g){let S=a[c+g],p=a[l+g],d=m*u+g*2,A=f[d],C=f[d+1],y=t*u+g*2,M=h[y],E=h[y+1],P=im(n,e,A,M,s);r[g]=Dd(P,S,C,E,p)}return r}};function Dd(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function nm(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function im(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=Dd(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=nm(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var qn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Gs(e,this.TimeBufferType),this.values=Gs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Gs(t.times,Array),values:Gs(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Fc(t.settings)&&(n.settings={inTangents:Gs(t.settings.inTangents,Array),outTangents:Gs(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Vo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ko(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new zo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Ho(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Dr:e=this.InterpolantFactoryMethodDiscrete;break;case vo:e=this.InterpolantFactoryMethodLinear;break;case oo:e=this.InterpolantFactoryMethodSmooth;break;case zc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ne("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Dr;case this.InterpolantFactoryMethodLinear:return vo;case this.InterpolantFactoryMethodSmooth:return oo;case this.InterpolantFactoryMethodBezier:return zc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Fc(this.settings)&&(Ou(this.settings.inTangents,t),Ou(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ie("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(ie("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){ie("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){ie("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&$f(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){ie("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===oo,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let f=o*n,u=f-n,m=f+n;for(let g=0;g!==n;++g){let S=e[f+g];if(S!==e[u+g]||S!==e[m+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let f=o*n,u=a*n;for(let m=0;m!==n;++m)e[u+m]=e[f+m]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Fc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Ou(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}qn.prototype.ValueTypeName="";qn.prototype.TimeBufferType=Float32Array;qn.prototype.ValueBufferType=Float32Array;qn.prototype.DefaultInterpolation=vo;var ji=class extends qn{constructor(t,e,n){super(t,e,n)}};ji.prototype.ValueTypeName="bool";ji.prototype.ValueBufferType=Array;ji.prototype.DefaultInterpolation=Dr;ji.prototype.InterpolantFactoryMethodLinear=void 0;ji.prototype.InterpolantFactoryMethodSmooth=void 0;var Go=class extends qn{constructor(t,e,n,s){super(t,e,n,s)}};Go.prototype.ValueTypeName="color";var Wo=class extends qn{constructor(t,e,n,s){super(t,e,n,s)}};Wo.prototype.ValueTypeName="number";var Xo=class extends Ki{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)vi.slerpFlat(r,0,a,c-o,a,c,l);return r}},ia=class extends qn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Xo(this.times,this.values,this.getValueSize(),t)}};ia.prototype.ValueTypeName="quaternion";ia.prototype.InterpolantFactoryMethodSmooth=void 0;var Qi=class extends qn{constructor(t,e,n){super(t,e,n)}};Qi.prototype.ValueTypeName="string";Qi.prototype.ValueBufferType=Array;Qi.prototype.DefaultInterpolation=Dr;Qi.prototype.InterpolantFactoryMethodLinear=void 0;Qi.prototype.InterpolantFactoryMethodSmooth=void 0;var $o=class extends qn{constructor(t,e,n,s){super(t,e,n,s)}};$o.prototype.ValueTypeName="vector";var qo=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){let m=c[f],g=c[f+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Ud=new qo,Yo=class{constructor(t){this.manager=t!==void 0?t:Ud,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Yo.DEFAULT_MATERIAL_NAME="__DEFAULT";var sa=class extends fn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new se(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},ra=class extends sa{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(fn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new se(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Oc=new ze,Bu=new L,zu=new L,Zo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ct(512,512),this.mapType=On,this.map=null,this.mapPass=null,this.matrix=new ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new nr,this._frameExtents=new Ct(1,1),this._viewportCount=1,this._viewports=[new Fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Bu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Bu),zu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(zu),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Oc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Oc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Js||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Oc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},so=new L,ro=new vi,pi=new L,aa=class extends fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ze,this.projectionMatrix=new ze,this.projectionMatrixInverse=new ze,this.coordinateSystem=oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(so,ro,pi),pi.x===1&&pi.y===1&&pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(so,ro,pi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(so,ro,pi),pi.x===1&&pi.y===1&&pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(so,ro,pi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Yi=new L,ku=new Ct,Vu=new Ct,Mn=class extends aa{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=js*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Rr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return js*2*Math.atan(Math.tan(Rr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Yi.x,Yi.y).multiplyScalar(-t/Yi.z),Yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Yi.x,Yi.y).multiplyScalar(-t/Yi.z)}getViewSize(t,e){return this.getViewBounds(t,ku,Vu),e.subVectors(Vu,ku)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Rr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var or=class extends aa{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Yc=class extends Zo{constructor(){super(new or(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},oa=class extends sa{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(fn.DEFAULT_UP),this.updateMatrix(),this.target=new fn,this.shadow=new Yc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var la=class extends je{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var Ws=-90,Xs=1,Jo=class extends fn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Mn(Ws,Xs,t,e);s.layers=this.layers,this.add(s);let r=new Mn(Ws,Xs,t,e);r.layers=this.layers,this.add(r);let a=new Mn(Ws,Xs,t,e);a.layers=this.layers,this.add(a);let o=new Mn(Ws,Xs,t,e);o.layers=this.layers,this.add(o);let l=new Mn(Ws,Xs,t,e);l.layers=this.layers,this.add(l);let c=new Mn(Ws,Xs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===oi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Js)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=S,t.setRenderTarget(n,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(f,u,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ko=class extends Mn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Eh="\\[\\]\\.:\\/",sm=new RegExp("["+Eh+"]","g"),Th="[^"+Eh+"]",rm="[^"+Eh.replace("\\.","")+"]",am=/((?:WC+[\/:])*)/.source.replace("WC",Th),om=/(WCOD+)?/.source.replace("WCOD",rm),lm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Th),cm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Th),hm=new RegExp("^"+am+om+lm+cm+"$"),um=["material","materials","bones","map"],Zc=class{constructor(t,e,n){let s=n||We.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},We=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(sm,"")}static parseTrackName(t){let e=hm.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);um.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){ne("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){ie("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ie("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ie("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ie("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ie("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){ie("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){ie("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;ie("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){ie("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ie("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};We.Composite=Zc;We.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};We.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};We.prototype.GetterByBindingType=[We.prototype._getValue_direct,We.prototype._getValue_array,We.prototype._getValue_arrayElement,We.prototype._getValue_toArray];We.prototype.SetterByBindingTypeAndVersioning=[[We.prototype._setValue_direct,We.prototype._setValue_direct_setNeedsUpdate,We.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[We.prototype._setValue_array,We.prototype._setValue_array_setNeedsUpdate,We.prototype._setValue_array_setMatrixWorldNeedsUpdate],[We.prototype._setValue_arrayElement,We.prototype._setValue_arrayElement_setNeedsUpdate,We.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[We.prototype._setValue_fromArray,We.prototype._setValue_fromArray_setNeedsUpdate,We.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ev=new Float32Array(1);var ts=class extends bo{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}};var Hu=new ze,ca=class{constructor(t,e,n=0,s=1/0){this.ray=new gs(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new tr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ie("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Hu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Hu),this}intersectObject(t,e=!0,n=[]){return Jc(t,this,n,e),n.sort(Gu),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Jc(t[s],this,n,e);return n.sort(Gu),n}};function Gu(i,t){return i.distance-t.distance}function Jc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Jc(r[a],t,e,!0)}}var Kc=class i{static{i.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};var Wu=new L,ao=new L,$s=new L,qs=new L,Bc=new L,dm=new L,fm=new L,ha=class{constructor(t=new L,e=new L){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Wu.subVectors(t,this.start),ao.subVectors(this.end,this.start);let n=ao.dot(ao);if(n===0)return 0;let r=ao.dot(Wu)/n;return e&&(r=ue(r,0,1)),r}closestPointToPoint(t,e,n){let s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}distanceSqToLine3(t,e=dm,n=fm){let s=10000000000000001e-32,r,a,o=this.start,l=t.start,c=this.end,h=t.end;$s.subVectors(c,o),qs.subVectors(h,l),Bc.subVectors(o,l);let f=$s.dot($s),u=qs.dot(qs),m=qs.dot(Bc);if(f<=s&&u<=s)return e.copy(o),n.copy(l),e.sub(n),e.dot(e);if(f<=s)r=0,a=m/u,a=ue(a,0,1);else{let g=$s.dot(Bc);if(u<=s)a=0,r=ue(-g/f,0,1);else{let S=$s.dot(qs),p=f*u-S*S;p!==0?r=ue((S*m-g*u)/p,0,1):r=0,a=(S*r+m)/u,a<0?(a=0,r=ue(-g/f,0,1)):a>1&&(a=1,r=ue((S-g)/f,0,1))}}return e.copy(o).addScaledVector($s,r),n.copy(l).addScaledVector(qs,a),e.distanceToSquared(n)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};function Ah(i,t,e,n){let s=pm(n);switch(e){case gh:return i*t;case xh:return i*t/s.components*s.byteLength;case rl:return i*t/s.components*s.byteLength;case rs:return i*t*2/s.components*s.byteLength;case al:return i*t*2/s.components*s.byteLength;case _h:return i*t*3/s.components*s.byteLength;case ti:return i*t*4/s.components*s.byteLength;case ol:return i*t*4/s.components*s.byteLength;case pa:case ma:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ga:case _a:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case cl:case ul:return Math.max(i,16)*Math.max(t,8)/4;case ll:case hl:return Math.max(i,8)*Math.max(t,8)/2;case dl:case fl:case ml:case gl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case pl:case xa:case _l:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case xl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case vl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case yl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Sl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ml:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case bl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case wl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case El:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Tl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Al:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Cl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Rl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Pl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Il:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ll:case Dl:case Ul:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Nl:case Fl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case va:case Ol:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function pm(i){switch(i){case On:case dh:return{byteLength:1,components:1};case hr:case fh:case fi:return{byteLength:2,components:1};case il:case sl:return{byteLength:2,components:4};case ui:case nl:case di:return{byteLength:4,components:1};case ph:case mh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?ne("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function nf(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function gm(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,f=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){let h=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,h);else{f.sort((m,g)=>m.start-g.start);let u=0;for(let m=1;m<f.length;m++){let g=f[u],S=f[m];S.start<=g.start+g.count+1?g.count=Math.max(g.count,S.start+S.count-g.start):(++u,f[u]=S)}f.length=u+1;for(let m=0,g=f.length;m<g;m++){let S=f[m];i.bufferSubData(c,S.start*h.BYTES_PER_ELEMENT,h,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var _m=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xm=`#ifdef USE_ALPHAHASH
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
#endif`,vm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ym=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Mm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bm=`#ifdef USE_AOMAP
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
#endif`,wm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Em=`#ifdef USE_BATCHING
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
#endif`,Tm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Am=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Pm=`#ifdef USE_IRIDESCENCE
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
#endif`,Im=`#ifdef USE_BUMPMAP
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
#endif`,Lm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Dm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Um=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Nm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Om=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Bm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,zm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,km=`#define PI 3.141592653589793
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
} // validated`,Vm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Hm=`vec3 transformedNormal = objectNormal;
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
#endif`,Gm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$m=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ym=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Zm=`#ifdef USE_ENVMAP
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
#endif`,Jm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Km=`#ifdef USE_ENVMAP
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
#endif`,jm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qm=`#ifdef USE_ENVMAP
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
#endif`,tg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,eg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ng=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ig=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sg=`#ifdef USE_GRADIENTMAP
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
}`,rg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ag=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,og=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lg=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,cg=`#ifdef USE_ENVMAP
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
#endif`,hg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ug=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pg=`PhysicalMaterial material;
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
#endif`,mg=`uniform sampler2D dfgLUT;
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
}`,gg=`
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
#endif`,_g=`#if defined( RE_IndirectDiffuse )
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
#endif`,xg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vg=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,yg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Eg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Tg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ag=`#if defined( USE_POINTS_UV )
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
#endif`,Cg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Rg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Pg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ig=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Lg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dg=`#ifdef USE_MORPHTARGETS
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
#endif`,Ug=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ng=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Fg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Og=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,kg=`#ifdef USE_NORMALMAP
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
#endif`,Vg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Wg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Xg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$g=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,qg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Yg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Zg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Jg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Kg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Qg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,t0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,e0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,n0=`float getShadowMask() {
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
}`,i0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,s0=`#ifdef USE_SKINNING
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
#endif`,r0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,a0=`#ifdef USE_SKINNING
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
#endif`,o0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,l0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,c0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,h0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,u0=`#ifdef USE_TRANSMISSION
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
#endif`,d0=`#ifdef USE_TRANSMISSION
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
#endif`,f0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,p0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,m0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,g0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,_0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,x0=`uniform sampler2D t2D;
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
}`,v0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,y0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,S0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,M0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,b0=`#include <common>
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
}`,w0=`#if DEPTH_PACKING == 3200
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
}`,E0=`#define DISTANCE
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
}`,T0=`#define DISTANCE
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
}`,A0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,C0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,R0=`uniform float scale;
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
}`,P0=`uniform vec3 diffuse;
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
}`,I0=`#include <common>
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
}`,L0=`uniform vec3 diffuse;
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
}`,D0=`#define LAMBERT
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
}`,U0=`#define LAMBERT
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
}`,N0=`#define MATCAP
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
}`,F0=`#define MATCAP
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
}`,O0=`#define NORMAL
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
}`,B0=`#define NORMAL
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
}`,z0=`#define PHONG
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
}`,k0=`#define PHONG
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
}`,V0=`#define STANDARD
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
}`,H0=`#define STANDARD
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
}`,G0=`#define TOON
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
}`,W0=`#define TOON
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
}`,X0=`uniform float size;
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
}`,$0=`uniform vec3 diffuse;
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
}`,q0=`#include <common>
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
}`,Y0=`uniform vec3 color;
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
}`,Z0=`uniform float rotation;
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
}`,J0=`uniform vec3 diffuse;
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
}`,xe={alphahash_fragment:_m,alphahash_pars_fragment:xm,alphamap_fragment:vm,alphamap_pars_fragment:ym,alphatest_fragment:Sm,alphatest_pars_fragment:Mm,aomap_fragment:bm,aomap_pars_fragment:wm,batching_pars_vertex:Em,batching_vertex:Tm,begin_vertex:Am,beginnormal_vertex:Cm,bsdfs:Rm,iridescence_fragment:Pm,bumpmap_pars_fragment:Im,clipping_planes_fragment:Lm,clipping_planes_pars_fragment:Dm,clipping_planes_pars_vertex:Um,clipping_planes_vertex:Nm,color_fragment:Fm,color_pars_fragment:Om,color_pars_vertex:Bm,color_vertex:zm,common:km,cube_uv_reflection_fragment:Vm,defaultnormal_vertex:Hm,displacementmap_pars_vertex:Gm,displacementmap_vertex:Wm,emissivemap_fragment:Xm,emissivemap_pars_fragment:$m,colorspace_fragment:qm,colorspace_pars_fragment:Ym,envmap_fragment:Zm,envmap_common_pars_fragment:Jm,envmap_pars_fragment:Km,envmap_pars_vertex:jm,envmap_physical_pars_fragment:cg,envmap_vertex:Qm,fog_vertex:tg,fog_pars_vertex:eg,fog_fragment:ng,fog_pars_fragment:ig,gradientmap_pars_fragment:sg,lightmap_pars_fragment:rg,lights_lambert_fragment:ag,lights_lambert_pars_fragment:og,lights_pars_begin:lg,lights_toon_fragment:hg,lights_toon_pars_fragment:ug,lights_phong_fragment:dg,lights_phong_pars_fragment:fg,lights_physical_fragment:pg,lights_physical_pars_fragment:mg,lights_fragment_begin:gg,lights_fragment_maps:_g,lights_fragment_end:xg,lightprobes_pars_fragment:vg,logdepthbuf_fragment:yg,logdepthbuf_pars_fragment:Sg,logdepthbuf_pars_vertex:Mg,logdepthbuf_vertex:bg,map_fragment:wg,map_pars_fragment:Eg,map_particle_fragment:Tg,map_particle_pars_fragment:Ag,metalnessmap_fragment:Cg,metalnessmap_pars_fragment:Rg,morphinstance_vertex:Pg,morphcolor_vertex:Ig,morphnormal_vertex:Lg,morphtarget_pars_vertex:Dg,morphtarget_vertex:Ug,normal_fragment_begin:Ng,normal_fragment_maps:Fg,normal_pars_fragment:Og,normal_pars_vertex:Bg,normal_vertex:zg,normalmap_pars_fragment:kg,clearcoat_normal_fragment_begin:Vg,clearcoat_normal_fragment_maps:Hg,clearcoat_pars_fragment:Gg,iridescence_pars_fragment:Wg,opaque_fragment:Xg,packing:$g,premultiplied_alpha_fragment:qg,project_vertex:Yg,dithering_fragment:Zg,dithering_pars_fragment:Jg,roughnessmap_fragment:Kg,roughnessmap_pars_fragment:jg,shadowmap_pars_fragment:Qg,shadowmap_pars_vertex:t0,shadowmap_vertex:e0,shadowmask_pars_fragment:n0,skinbase_vertex:i0,skinning_pars_vertex:s0,skinning_vertex:r0,skinnormal_vertex:a0,specularmap_fragment:o0,specularmap_pars_fragment:l0,tonemapping_fragment:c0,tonemapping_pars_fragment:h0,transmission_fragment:u0,transmission_pars_fragment:d0,uv_pars_fragment:f0,uv_pars_vertex:p0,uv_vertex:m0,worldpos_vertex:g0,background_vert:_0,background_frag:x0,backgroundCube_vert:v0,backgroundCube_frag:y0,cube_vert:S0,cube_frag:M0,depth_vert:b0,depth_frag:w0,distance_vert:E0,distance_frag:T0,equirect_vert:A0,equirect_frag:C0,linedashed_vert:R0,linedashed_frag:P0,meshbasic_vert:I0,meshbasic_frag:L0,meshlambert_vert:D0,meshlambert_frag:U0,meshmatcap_vert:N0,meshmatcap_frag:F0,meshnormal_vert:O0,meshnormal_frag:B0,meshphong_vert:z0,meshphong_frag:k0,meshphysical_vert:V0,meshphysical_frag:H0,meshtoon_vert:G0,meshtoon_frag:W0,points_vert:X0,points_frag:$0,shadow_vert:q0,shadow_frag:Y0,sprite_vert:Z0,sprite_frag:J0},It={common:{diffuse:{value:new se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ce}},envmap:{envMap:{value:null},envMapRotation:{value:new ce},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ce},normalScale:{value:new Ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0},uvTransform:{value:new ce}},sprite:{diffuse:{value:new se(16777215)},opacity:{value:1},center:{value:new Ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}}},Ln={basic:{uniforms:wn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.fog]),vertexShader:xe.meshbasic_vert,fragmentShader:xe.meshbasic_frag},lambert:{uniforms:wn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new se(0)},envMapIntensity:{value:1}}]),vertexShader:xe.meshlambert_vert,fragmentShader:xe.meshlambert_frag},phong:{uniforms:wn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new se(0)},specular:{value:new se(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:xe.meshphong_vert,fragmentShader:xe.meshphong_frag},standard:{uniforms:wn([It.common,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.roughnessmap,It.metalnessmap,It.fog,It.lights,{emissive:{value:new se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xe.meshphysical_vert,fragmentShader:xe.meshphysical_frag},toon:{uniforms:wn([It.common,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.gradientmap,It.fog,It.lights,{emissive:{value:new se(0)}}]),vertexShader:xe.meshtoon_vert,fragmentShader:xe.meshtoon_frag},matcap:{uniforms:wn([It.common,It.bumpmap,It.normalmap,It.displacementmap,It.fog,{matcap:{value:null}}]),vertexShader:xe.meshmatcap_vert,fragmentShader:xe.meshmatcap_frag},points:{uniforms:wn([It.points,It.fog]),vertexShader:xe.points_vert,fragmentShader:xe.points_frag},dashed:{uniforms:wn([It.common,It.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xe.linedashed_vert,fragmentShader:xe.linedashed_frag},depth:{uniforms:wn([It.common,It.displacementmap]),vertexShader:xe.depth_vert,fragmentShader:xe.depth_frag},normal:{uniforms:wn([It.common,It.bumpmap,It.normalmap,It.displacementmap,{opacity:{value:1}}]),vertexShader:xe.meshnormal_vert,fragmentShader:xe.meshnormal_frag},sprite:{uniforms:wn([It.sprite,It.fog]),vertexShader:xe.sprite_vert,fragmentShader:xe.sprite_frag},background:{uniforms:{uvTransform:{value:new ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xe.background_vert,fragmentShader:xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ce}},vertexShader:xe.backgroundCube_vert,fragmentShader:xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xe.cube_vert,fragmentShader:xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xe.equirect_vert,fragmentShader:xe.equirect_frag},distance:{uniforms:wn([It.common,It.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xe.distance_vert,fragmentShader:xe.distance_frag},shadow:{uniforms:wn([It.lights,It.fog,{color:{value:new se(0)},opacity:{value:1}}]),vertexShader:xe.shadow_vert,fragmentShader:xe.shadow_frag}};Ln.physical={uniforms:wn([Ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ce},clearcoatNormalScale:{value:new Ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ce},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ce},sheen:{value:0},sheenColor:{value:new se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ce},transmissionSamplerSize:{value:new Ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ce},attenuationDistance:{value:0},attenuationColor:{value:new se(0)},specularColor:{value:new se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ce},anisotropyVector:{value:new Ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ce}}]),vertexShader:xe.meshphysical_vert,fragmentShader:xe.meshphysical_frag};var Vl={r:0,b:0,g:0},K0=new ze,sf=new ce;sf.set(-1,0,0,0,1,0,0,0,1);function j0(i,t,e,n,s,r){let a=new se(0),o=s===!0?0:1,l,c,h=null,f=0,u=null;function m(A){let C=A.isScene===!0?A.background:null;if(C&&C.isTexture){let y=A.backgroundBlurriness>0;C=t.get(C,y)}return C}function g(A){let C=!1,y=m(A);y===null?p(a,o):y&&y.isColor&&(p(y,1),C=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?e.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||C)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(A,C){let y=m(C);y&&(y.isCubeTexture||y.mapping===da)?(c===void 0&&(c=new bn(new ir(1,1,1),new pn({name:"BackgroundCubeMaterial",uniforms:bs(Ln.backgroundCube.uniforms),vertexShader:Ln.backgroundCube.vertexShader,fragmentShader:Ln.backgroundCube.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,E,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(K0.makeRotationFromEuler(C.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(sf),c.material.toneMapped=be.getTransfer(y.colorSpace)!==Ne,(h!==y||f!==y.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,f=y.version,u=i.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new bn(new ta(2,2),new pn({name:"BackgroundMaterial",uniforms:bs(Ln.background.uniforms),vertexShader:Ln.background.vertexShader,fragmentShader:Ln.background.fragmentShader,side:es,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,l.material.toneMapped=be.getTransfer(y.colorSpace)!==Ne,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||f!==y.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,f=y.version,u=i.toneMapping),l.layers.enableAll(),A.unshift(l,l.geometry,l.material,0,0,null))}function p(A,C){A.getRGB(Vl,wh(i)),e.buffers.color.setClear(Vl.r,Vl.g,Vl.b,C,r)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(A,C=1){a.set(A),o=C,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(A){o=A,p(a,o)},render:g,addToRenderList:S,dispose:d}}function Q0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(z,$,q,B,W){let et=!1,j=f(z,B,q,$);r!==j&&(r=j,c(r.object)),et=m(z,B,q,W),et&&g(z,B,q,W),W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),(et||a)&&(a=!1,y(z,$,q,B),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return i.createVertexArray()}function c(z){return i.bindVertexArray(z)}function h(z){return i.deleteVertexArray(z)}function f(z,$,q,B){let W=B.wireframe===!0,et=n[$.id];et===void 0&&(et={},n[$.id]=et);let j=z.isInstancedMesh===!0?z.id:0,ft=et[j];ft===void 0&&(ft={},et[j]=ft);let Q=ft[q.id];Q===void 0&&(Q={},ft[q.id]=Q);let rt=Q[W];return rt===void 0&&(rt=u(l()),Q[W]=rt),rt}function u(z){let $=[],q=[],B=[];for(let W=0;W<e;W++)$[W]=0,q[W]=0,B[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:q,attributeDivisors:B,object:z,attributes:{},index:null}}function m(z,$,q,B){let W=r.attributes,et=$.attributes,j=0,ft=q.getAttributes();for(let Q in ft)if(ft[Q].location>=0){let ct=W[Q],Jt=et[Q];if(Jt===void 0&&(Q==="instanceMatrix"&&z.instanceMatrix&&(Jt=z.instanceMatrix),Q==="instanceColor"&&z.instanceColor&&(Jt=z.instanceColor)),ct===void 0||ct.attribute!==Jt||Jt&&ct.data!==Jt.data)return!0;j++}return r.attributesNum!==j||r.index!==B}function g(z,$,q,B){let W={},et=$.attributes,j=0,ft=q.getAttributes();for(let Q in ft)if(ft[Q].location>=0){let ct=et[Q];ct===void 0&&(Q==="instanceMatrix"&&z.instanceMatrix&&(ct=z.instanceMatrix),Q==="instanceColor"&&z.instanceColor&&(ct=z.instanceColor));let Jt={};Jt.attribute=ct,ct&&ct.data&&(Jt.data=ct.data),W[Q]=Jt,j++}r.attributes=W,r.attributesNum=j,r.index=B}function S(){let z=r.newAttributes;for(let $=0,q=z.length;$<q;$++)z[$]=0}function p(z){d(z,0)}function d(z,$){let q=r.newAttributes,B=r.enabledAttributes,W=r.attributeDivisors;q[z]=1,B[z]===0&&(i.enableVertexAttribArray(z),B[z]=1),W[z]!==$&&(i.vertexAttribDivisor(z,$),W[z]=$)}function A(){let z=r.newAttributes,$=r.enabledAttributes;for(let q=0,B=$.length;q<B;q++)$[q]!==z[q]&&(i.disableVertexAttribArray(q),$[q]=0)}function C(z,$,q,B,W,et,j){j===!0?i.vertexAttribIPointer(z,$,q,W,et):i.vertexAttribPointer(z,$,q,B,W,et)}function y(z,$,q,B){S();let W=B.attributes,et=q.getAttributes(),j=$.defaultAttributeValues;for(let ft in et){let Q=et[ft];if(Q.location>=0){let rt=W[ft];if(rt===void 0&&(ft==="instanceMatrix"&&z.instanceMatrix&&(rt=z.instanceMatrix),ft==="instanceColor"&&z.instanceColor&&(rt=z.instanceColor)),rt!==void 0){let ct=rt.normalized,Jt=rt.itemSize,kt=t.get(rt);if(kt===void 0)continue;let Te=kt.buffer,ve=kt.type,Me=kt.bytesPerElement,Y=ve===i.INT||ve===i.UNSIGNED_INT||rt.gpuType===nl;if(rt.isInterleavedBufferAttribute){let it=rt.data,Et=it.stride,Qt=rt.offset;if(it.isInstancedInterleavedBuffer){for(let Rt=0;Rt<Q.locationSize;Rt++)d(Q.location+Rt,it.meshPerAttribute);z.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let Rt=0;Rt<Q.locationSize;Rt++)p(Q.location+Rt);i.bindBuffer(i.ARRAY_BUFFER,Te);for(let Rt=0;Rt<Q.locationSize;Rt++)C(Q.location+Rt,Jt/Q.locationSize,ve,ct,Et*Me,(Qt+Jt/Q.locationSize*Rt)*Me,Y)}else{if(rt.isInstancedBufferAttribute){for(let it=0;it<Q.locationSize;it++)d(Q.location+it,rt.meshPerAttribute);z.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let it=0;it<Q.locationSize;it++)p(Q.location+it);i.bindBuffer(i.ARRAY_BUFFER,Te);for(let it=0;it<Q.locationSize;it++)C(Q.location+it,Jt/Q.locationSize,ve,ct,Jt*Me,Jt/Q.locationSize*it*Me,Y)}}else if(j!==void 0){let ct=j[ft];if(ct!==void 0)switch(ct.length){case 2:i.vertexAttrib2fv(Q.location,ct);break;case 3:i.vertexAttrib3fv(Q.location,ct);break;case 4:i.vertexAttrib4fv(Q.location,ct);break;default:i.vertexAttrib1fv(Q.location,ct)}}}}A()}function M(){T();for(let z in n){let $=n[z];for(let q in $){let B=$[q];for(let W in B){let et=B[W];for(let j in et)h(et[j].object),delete et[j];delete B[W]}}delete n[z]}}function E(z){if(n[z.id]===void 0)return;let $=n[z.id];for(let q in $){let B=$[q];for(let W in B){let et=B[W];for(let j in et)h(et[j].object),delete et[j];delete B[W]}}delete n[z.id]}function P(z){for(let $ in n){let q=n[$];for(let B in q){let W=q[B];if(W[z.id]===void 0)continue;let et=W[z.id];for(let j in et)h(et[j].object),delete et[j];delete W[z.id]}}}function x(z){for(let $ in n){let q=n[$],B=z.isInstancedMesh===!0?z.id:0,W=q[B];if(W!==void 0){for(let et in W){let j=W[et];for(let ft in j)h(j[ft].object),delete j[ft];delete W[et]}delete q[B],Object.keys(q).length===0&&delete n[$]}}}function T(){U(),a=!0,r!==s&&(r=s,c(r.object))}function U(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:U,dispose:M,releaseStatesOfGeometry:E,releaseStatesOfObject:x,releaseStatesOfProgram:P,initAttributes:S,enableAttribute:p,disableUnusedAttributes:A}}function t_(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let m=0;m<h;m++)u+=c[m];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function e_(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let P=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(P){return!(P!==ti&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){let x=P===fi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==On&&P!==di&&!x&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(ne("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&ne("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),A=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),C=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:m,maxVertexTextures:g,maxTextureSize:S,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:A,maxVaryings:C,maxFragmentUniforms:y,maxSamples:M,samples:E}}function n_(i){let t=this,e=null,n=0,s=!1,r=!1,a=new ri,o=new ce,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let m=f.length!==0||u||n!==0||s;return s=u,n=f.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,m){let g=f.clippingPlanes,S=f.clipIntersection,p=f.clipShadows,d=i.get(f);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{let A=r?0:n,C=A*4,y=d.clippingState||null;l.value=y,y=h(g,u,C,m);for(let M=0;M!==C;++M)y[M]=e[M];d.clippingState=y,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,u,m,g){let S=f!==null?f.length:0,p=null;if(S!==0){if(p=l.value,g!==!0||p===null){let d=m+S*4,A=u.matrixWorldInverse;o.getNormalMatrix(A),(p===null||p.length<d)&&(p=new Float32Array(d));for(let C=0,y=m;C!==S;++C,y+=4)a.copy(f[C]).applyMatrix4(A,o),a.normal.toArray(p,y),p[y+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,p}}var fr=4,i_=6,s_=20,r_=256,Sa=new or,Nd=new se,Ch=null,Rh=0,Ph=0,Ih=!1,a_=new L,ws=new L,Gl=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=a_}=r;Ch=this._renderer.getRenderTarget(),Rh=this._renderer.getActiveCubeFace(),Ph=this._renderer.getActiveMipmapLevel(),Ih=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Od(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Ch,Rh,Ph),this._renderer.xr.enabled=Ih,t.scissorTest=!1,dr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ns||t.mapping===Ms?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ch=this._renderer.getRenderTarget(),Rh=this._renderer.getActiveCubeFace(),Ph=this._renderer.getActiveMipmapLevel(),Ih=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:mn,minFilter:mn,generateMipmaps:!1,type:fi,format:ti,colorSpace:Ur,depthBuffer:!1},s=Fd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fd(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=o_(r)),this._blurMaterial=c_(r,t,e),this._ggxMaterial=l_(r,t,e)}return s}_compileMaterial(t){let e=new bn(new je,t);this._renderer.compile(e,Sa)}_sceneToCubeUV(t,e,n,s,r){let l=new Mn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,m=f.toneMapping;f.getClearColor(Nd),f.toneMapping=hi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new bn(new ir,new Hr({name:"PMREM.Background",side:In,depthWrite:!1,depthTest:!1})));let S=this._backgroundBox,p=S.material,d=!1,A=t.background;A?A.isColor&&(p.color.copy(A),t.background=null,d=!0):(p.color.copy(Nd),d=!0);for(let C=0;C<6;C++){let y=C%3;y===0?(l.up.set(0,c[C],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[C],r.y,r.z)):y===1?(l.up.set(0,0,c[C]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[C],r.z)):(l.up.set(0,c[C],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[C]));let M=this._cubeSize;dr(s,y*M,C>2?M:0,M,M),f.setRenderTarget(s),d&&f.render(S,l),f.render(t,l)}f.toneMapping=m,f.autoClear=u,t.background=A}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ns||t.mapping===Ms;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Od());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;dr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Sa)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),f=Math.sqrt(c*c-h*h),u=c*1.25,m=f*u,{_lodMax:g}=this,S=this._sizeLods[n],p=3*S*(n>g-fr?n-g+fr:0),d=4*(this._cubeSize-S);l.envMap.value=t.texture,l.roughness.value=m,l.mipInt.value=g-e,dr(r,p,d,3*S,2*S),s.setRenderTarget(r),s.render(o,Sa),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,dr(t,p,d,3*S,2*S),s.setRenderTarget(t),s.render(o,Sa)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],f=3*h*(s>this._lodMax-fr?s-this._lodMax+fr:0),u=4*(this._cubeSize-h);dr(e,f,u,3*h,2*h),a.setRenderTarget(e),a.render(l,Sa)}};function o_(i){let t=[],e=[],n=i,s=i-fr+1+i_;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,u=6,m=3,g=new Float32Array(m*u*f),S=new Float32Array(m*u*f);for(let d=0;d<f;d++){let A=d%3*2/3-1,C=d>2?0:-1,y=[A,C,0,A+2/3,C,0,A+2/3,C+1,0,A,C,0,A+2/3,C+1,0,A,C+1,0];g.set(y,m*u*d);for(let M=0;M<u;M++){let E=h[M*2]*2-1,P=h[M*2+1]*2-1;d===0?ws.set(1,P,E):d===1?ws.set(-E,1,-P):d===2?ws.set(-E,P,1):d===3?ws.set(-1,P,-E):d===4?ws.set(-E,-1,P):ws.set(E,P,-1),ws.toArray(S,(d*u+M)*m)}}let p=new je;p.setAttribute("position",new Ve(g,m)),p.setAttribute("outputDirection",new Ve(S,m)),e.push(new bn(p,null)),n>fr&&n--}return{lodMeshes:e,sizeLods:t}}function Fd(i,t,e){let n=new Fn(i,t,e);return n.texture.mapping=da,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function dr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function l_(i,t,e){return new pn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:r_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:$l(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function c_(i,t,e){return new pn({name:"SphericalGaussianBlur",defines:{SAMPLES:s_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:$l(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function Od(){return new pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$l(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function Bd(){return new pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$l(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function $l(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Wl=class extends Fn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Wr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ir(5,5,5),r=new pn({name:"CubemapFromEquirect",uniforms:bs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:In,blending:Mi});r.uniforms.tEquirect.value=e;let a=new bn(s,r),o=e.minFilter;return e.minFilter===is&&(e.minFilter=mn),new Jo(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function h_(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,m=!1){return u==null?null:m?a(u):r(u)}function r(u){if(u&&u.isTexture){let m=u.mapping;if(m===Qo||m===tl)if(t.has(u)){let g=t.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let S=new Wl(g.height);return S.fromEquirectangularTexture(i,u),t.set(u,S),u.addEventListener("dispose",c),o(S.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let m=u.mapping,g=m===Qo||m===tl,S=m===ns||m===Ms;if(g||S){let p=e.get(u),d=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==d)return n===null&&(n=new Gl(i)),p=g?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),p.texture;if(p!==void 0)return p.texture;{let A=u.image;return g&&A&&A.height>0||S&&A&&l(A)?(n===null&&(n=new Gl(i)),p=g?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function o(u,m){return m===Qo?u.mapping=ns:m===tl&&(u.mapping=Ms),u}function l(u){let m=0,g=6;for(let S=0;S<g;S++)u[S]!==void 0&&m++;return m===g}function c(u){let m=u.target;m.removeEventListener("dispose",c);let g=t.get(m);g!==void 0&&(t.delete(m),g.dispose())}function h(u){let m=u.target;m.removeEventListener("dispose",h);let g=e.get(m);g!==void 0&&(e.delete(m),g.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function u_(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&ms("WebGLRenderer: "+n+" extension not supported."),s}}}function d_(i,t,e,n){let s={},r=new WeakMap;function a(f){let u=f.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete s[u.id];let m=r.get(u);m&&(t.remove(m),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(f,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function l(f){let u=f.attributes;for(let m in u)t.update(u[m],i.ARRAY_BUFFER)}function c(f){let u=[],m=f.index,g=f.attributes.position,S=0;if(g===void 0)return;if(m!==null){let A=m.array;S=m.version;for(let C=0,y=A.length;C<y;C+=3){let M=A[C+0],E=A[C+1],P=A[C+2];u.push(M,E,E,P,P,M)}}else{let A=g.array;S=g.version;for(let C=0,y=A.length/3-1;C<y;C+=3){let M=C+0,E=C+1,P=C+2;u.push(M,E,E,P,P,M)}}let p=new(g.count>=65535?Vr:kr)(u,1);p.version=S;let d=r.get(f);d&&t.remove(d),r.set(f,p)}function h(f){let u=r.get(f);if(u){let m=f.index;m!==null&&u.version<m.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function f_(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,u){i.drawElements(n,u,r,f*a),e.update(u,n,1)}function c(f,u,m){m!==0&&(i.drawElementsInstanced(n,u,r,f*a,m),e.update(u,n,m))}function h(f,u,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,f,0,m);let S=0;for(let p=0;p<m;p++)S+=u[p];e.update(S,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function p_(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:ie("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function m_(i,t,e){let n=new WeakMap,s=new Fe;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==f){let T=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();let m=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,S=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],A=o.morphAttributes.color||[],C=0;m===!0&&(C=1),g===!0&&(C=2),S===!0&&(C=3);let y=o.attributes.position.count*C,M=1;y>t.maxTextureSize&&(M=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let E=new Float32Array(y*M*4*f),P=new Br(E,y,M,f);P.type=di,P.needsUpdate=!0;let x=C*4;for(let U=0;U<f;U++){let z=p[U],$=d[U],q=A[U],B=y*M*4*U;for(let W=0;W<z.count;W++){let et=W*x;m===!0&&(s.fromBufferAttribute(z,W),E[B+et+0]=s.x,E[B+et+1]=s.y,E[B+et+2]=s.z,E[B+et+3]=0),g===!0&&(s.fromBufferAttribute($,W),E[B+et+4]=s.x,E[B+et+5]=s.y,E[B+et+6]=s.z,E[B+et+7]=0),S===!0&&(s.fromBufferAttribute(q,W),E[B+et+8]=s.x,E[B+et+9]=s.y,E[B+et+10]=s.z,E[B+et+11]=q.itemSize===4?s.w:1)}}u={count:f,texture:P,size:new Ct(y,M)},n.set(o,u),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let m=0;for(let S=0;S<c.length;S++)m+=c[S];let g=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function g_(i,t,e,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,f=c.geometry,u=t.get(c,f);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let m=c.skeleton;r.get(m)!==h&&(m.update(),r.set(m,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var __={[sh]:"LINEAR_TONE_MAPPING",[rh]:"REINHARD_TONE_MAPPING",[ah]:"CINEON_TONE_MAPPING",[oh]:"ACES_FILMIC_TONE_MAPPING",[ch]:"AGX_TONE_MAPPING",[hh]:"NEUTRAL_TONE_MAPPING",[lh]:"CUSTOM_TONE_MAPPING"};function x_(i,t,e,n,s,r){let a=new Fn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new je;c.setAttribute("position",new sn([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new sn([0,2,0,0,2,0],2));let h=new Fo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new bn(c,h),u=new or(-1,1,1,-1,0,1),m=null,g=null,S=!1,p,d=null,A=[],C=!1;this.setSize=function(y,M){a.setSize(y,M),o!==null&&o.setSize(y,M),l!==null&&l.setSize(y,M);for(let E=0;E<A.length;E++){let P=A[E];P.setSize&&P.setSize(y,M)}},this.setEffects=function(y){A=y,C=A.length>0&&A[0].isRenderPass===!0;let M=a.width,E=a.height;A.length>0&&o===null&&(o=new Fn(M,E,{type:fi,depthBuffer:!1,stencilBuffer:!1}),l=new Fn(M,E,{type:fi,depthBuffer:!1,stencilBuffer:!1}));for(let P=0;P<A.length;P++){let x=A[P];x.setSize&&x.setSize(M,E)}},this.begin=function(y,M){if(S||y.toneMapping===hi&&A.length===0)return!1;if(d=M,M!==null){let E=M.width,P=M.height;(a.width!==E||a.height!==P)&&this.setSize(E,P)}return C===!1&&y.setRenderTarget(a),p=y.toneMapping,y.toneMapping=hi,!0},this.hasRenderPass=function(){return C},this.end=function(y,M){y.toneMapping=p,S=!0;let E=a,P=o;for(let x=0;x<A.length;x++){let T=A[x];T.enabled!==!1&&(T.render(y,P,E,M),T.needsSwap!==!1&&(E=P,P=P===o?l:o))}if(m!==y.outputColorSpace||g!==y.toneMapping){m=y.outputColorSpace,g=y.toneMapping,h.defines={},be.getTransfer(m)===Ne&&(h.defines.SRGB_TRANSFER="");let x=__[g];x&&(h.defines[x]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=E.texture,y.setRenderTarget(d),y.render(f,u),d=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var rf=new Nn,Uh=new Ji(1,1),af=new Br,of=new Mo,lf=new Wr,zd=[],kd=[],Vd=new Float32Array(16),Hd=new Float32Array(9),Gd=new Float32Array(4);function mr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=zd[s];if(r===void 0&&(r=new Float32Array(s),zd[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function rn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function an(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ql(i,t){let e=kd[t];e===void 0&&(e=new Int32Array(t),kd[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function v_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function y_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(rn(e,t))return;i.uniform2fv(this.addr,t),an(e,t)}}function S_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(rn(e,t))return;i.uniform3fv(this.addr,t),an(e,t)}}function M_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(rn(e,t))return;i.uniform4fv(this.addr,t),an(e,t)}}function b_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(rn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),an(e,t)}else{if(rn(e,n))return;Gd.set(n),i.uniformMatrix2fv(this.addr,!1,Gd),an(e,n)}}function w_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(rn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),an(e,t)}else{if(rn(e,n))return;Hd.set(n),i.uniformMatrix3fv(this.addr,!1,Hd),an(e,n)}}function E_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(rn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),an(e,t)}else{if(rn(e,n))return;Vd.set(n),i.uniformMatrix4fv(this.addr,!1,Vd),an(e,n)}}function T_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function A_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(rn(e,t))return;i.uniform2iv(this.addr,t),an(e,t)}}function C_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(rn(e,t))return;i.uniform3iv(this.addr,t),an(e,t)}}function R_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(rn(e,t))return;i.uniform4iv(this.addr,t),an(e,t)}}function P_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function I_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(rn(e,t))return;i.uniform2uiv(this.addr,t),an(e,t)}}function L_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(rn(e,t))return;i.uniform3uiv(this.addr,t),an(e,t)}}function D_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(rn(e,t))return;i.uniform4uiv(this.addr,t),an(e,t)}}function U_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Uh.compareFunction=e.isReversedDepthBuffer()?kl:zl,r=Uh):r=rf,e.setTexture2D(t||r,s)}function N_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||of,s)}function F_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||lf,s)}function O_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||af,s)}function B_(i){switch(i){case 5126:return v_;case 35664:return y_;case 35665:return S_;case 35666:return M_;case 35674:return b_;case 35675:return w_;case 35676:return E_;case 5124:case 35670:return T_;case 35667:case 35671:return A_;case 35668:case 35672:return C_;case 35669:case 35673:return R_;case 5125:return P_;case 36294:return I_;case 36295:return L_;case 36296:return D_;case 35678:case 36198:case 36298:case 36306:case 35682:return U_;case 35679:case 36299:case 36307:return N_;case 35680:case 36300:case 36308:case 36293:return F_;case 36289:case 36303:case 36311:case 36292:return O_}}function z_(i,t){i.uniform1fv(this.addr,t)}function k_(i,t){let e=mr(t,this.size,2);i.uniform2fv(this.addr,e)}function V_(i,t){let e=mr(t,this.size,3);i.uniform3fv(this.addr,e)}function H_(i,t){let e=mr(t,this.size,4);i.uniform4fv(this.addr,e)}function G_(i,t){let e=mr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function W_(i,t){let e=mr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function X_(i,t){let e=mr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function $_(i,t){i.uniform1iv(this.addr,t)}function q_(i,t){i.uniform2iv(this.addr,t)}function Y_(i,t){i.uniform3iv(this.addr,t)}function Z_(i,t){i.uniform4iv(this.addr,t)}function J_(i,t){i.uniform1uiv(this.addr,t)}function K_(i,t){i.uniform2uiv(this.addr,t)}function j_(i,t){i.uniform3uiv(this.addr,t)}function Q_(i,t){i.uniform4uiv(this.addr,t)}function tx(i,t,e){let n=this.cache,s=t.length,r=ql(e,s);rn(n,r)||(i.uniform1iv(this.addr,r),an(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Uh:a=rf;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function ex(i,t,e){let n=this.cache,s=t.length,r=ql(e,s);rn(n,r)||(i.uniform1iv(this.addr,r),an(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||of,r[a])}function nx(i,t,e){let n=this.cache,s=t.length,r=ql(e,s);rn(n,r)||(i.uniform1iv(this.addr,r),an(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||lf,r[a])}function ix(i,t,e){let n=this.cache,s=t.length,r=ql(e,s);rn(n,r)||(i.uniform1iv(this.addr,r),an(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||af,r[a])}function sx(i){switch(i){case 5126:return z_;case 35664:return k_;case 35665:return V_;case 35666:return H_;case 35674:return G_;case 35675:return W_;case 35676:return X_;case 5124:case 35670:return $_;case 35667:case 35671:return q_;case 35668:case 35672:return Y_;case 35669:case 35673:return Z_;case 5125:return J_;case 36294:return K_;case 36295:return j_;case 36296:return Q_;case 35678:case 36198:case 36298:case 36306:case 35682:return tx;case 35679:case 36299:case 36307:return ex;case 35680:case 36300:case 36308:case 36293:return nx;case 36289:case 36303:case 36311:case 36292:return ix}}var Nh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=B_(e.type)}},Fh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=sx(e.type)}},Oh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Lh=/(\w+)(\])?(\[|\.)?/g;function Wd(i,t){i.seq.push(t),i.map[t.id]=t}function rx(i,t,e){let n=i.name,s=n.length;for(Lh.lastIndex=0;;){let r=Lh.exec(n),a=Lh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Wd(e,c===void 0?new Nh(o,i,t):new Fh(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new Oh(o),Wd(e,f)),e=f}}}var pr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);rx(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Xd(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var ax=37297,ox=0;function lx(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var $d=new ce;function cx(i){be._getMatrix($d,be.workingColorSpace,i);let t=`mat3( ${$d.elements.map(e=>e.toFixed(4))} )`;switch(be.getTransfer(i)){case Nr:return[t,"LinearTransferOETF"];case Ne:return[t,"sRGBTransferOETF"];default:return ne("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function qd(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+lx(i.getShaderSource(t),o)}else return r}function hx(i,t){let e=cx(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var ux={[sh]:"Linear",[rh]:"Reinhard",[ah]:"Cineon",[oh]:"ACESFilmic",[ch]:"AgX",[hh]:"Neutral",[lh]:"Custom"};function dx(i,t){let e=ux[t];return e===void 0?(ne("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Hl=new L;function fx(){be.getLuminanceCoefficients(Hl);let i=Hl.x.toFixed(4),t=Hl.y.toFixed(4),e=Hl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function px(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ba).join(`
`)}function mx(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function gx(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ba(i){return i!==""}function Yd(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Zd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var _x=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bh(i){return i.replace(_x,vx)}var xx=new Map;function vx(i,t){let e=xe[t];if(e===void 0){let n=xx.get(t);if(n!==void 0)e=xe[n],ne('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Bh(e)}var yx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jd(i){return i.replace(yx,Sx)}function Sx(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Kd(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var Mx={[ua]:"SHADOWMAP_TYPE_PCF",[lr]:"SHADOWMAP_TYPE_VSM"};function bx(i){return Mx[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var wx={[ns]:"ENVMAP_TYPE_CUBE",[Ms]:"ENVMAP_TYPE_CUBE",[da]:"ENVMAP_TYPE_CUBE_UV"};function Ex(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":wx[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Tx={[Ms]:"ENVMAP_MODE_REFRACTION"};function Ax(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Tx[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Cx={[jo]:"ENVMAP_BLENDING_MULTIPLY",[dd]:"ENVMAP_BLENDING_MIX",[fd]:"ENVMAP_BLENDING_ADD"};function Rx(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Cx[i.combine]||"ENVMAP_BLENDING_NONE"}function Px(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Ix(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=bx(e),c=Ex(e),h=Ax(e),f=Rx(e),u=Px(e),m=px(e),g=mx(r),S=s.createProgram(),p,d,A=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ba).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ba).join(`
`),d.length>0&&(d+=`
`)):(p=[Kd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ba).join(`
`),d=[Kd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==hi?"#define TONE_MAPPING":"",e.toneMapping!==hi?xe.tonemapping_pars_fragment:"",e.toneMapping!==hi?dx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",xe.colorspace_pars_fragment,hx("linearToOutputTexel",e.outputColorSpace),fx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ba).join(`
`)),a=Bh(a),a=Yd(a,e),a=Zd(a,e),o=Bh(o),o=Yd(o,e),o=Zd(o,e),a=Jd(a),o=Jd(o),e.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",e.glslVersion===yh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===yh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let C=A+p+a,y=A+d+o,M=Xd(s,s.VERTEX_SHADER,C),E=Xd(s,s.FRAGMENT_SHADER,y);s.attachShader(S,M),s.attachShader(S,E),e.index0AttributeName!==void 0?s.bindAttribLocation(S,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function P(z){if(i.debug.checkShaderErrors){let $=s.getProgramInfoLog(S)||"",q=s.getShaderInfoLog(M)||"",B=s.getShaderInfoLog(E)||"",W=$.trim(),et=q.trim(),j=B.trim(),ft=!0,Q=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(ft=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,S,M,E);else{let rt=qd(s,M,"vertex"),ct=qd(s,E,"fragment");ie("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+W+`
`+rt+`
`+ct)}else W!==""?ne("WebGLProgram: Program Info Log:",W):(et===""||j==="")&&(Q=!1);Q&&(z.diagnostics={runnable:ft,programLog:W,vertexShader:{log:et,prefix:p},fragmentShader:{log:j,prefix:d}})}s.deleteShader(M),s.deleteShader(E),x=new pr(s,S),T=gx(s,S)}let x;this.getUniforms=function(){return x===void 0&&P(this),x};let T;this.getAttributes=function(){return T===void 0&&P(this),T};let U=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(S,ax)),U},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ox++,this.cacheKey=t,this.usedTimes=1,this.program=S,this.vertexShader=M,this.fragmentShader=E,this}var Lx=0,zh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new kh(t),e.set(t,n)),n}},kh=class{constructor(t){this.id=Lx++,this.code=t,this.usedTimes=0}};function Dx(i){return i===rs||i===xa||i===va}function Ux(i,t,e,n,s,r){let a=new tr,o=new zh,l=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer,u=n.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function S(x,T,U,z,$,q){let B=z.fog,W=$.geometry,et=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?z.environment:null,j=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,ft=t.get(x.envMap||et,j),Q=ft&&ft.mapping===da?ft.image.height:null,rt=m[x.type];x.precision!==null&&(u=n.getMaxPrecision(x.precision),u!==x.precision&&ne("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));let ct=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Jt=ct!==void 0?ct.length:0,kt=0;W.morphAttributes.position!==void 0&&(kt=1),W.morphAttributes.normal!==void 0&&(kt=2),W.morphAttributes.color!==void 0&&(kt=3);let Te,ve,Me,Y;if(rt){let Oe=Ln[rt];Te=Oe.vertexShader,ve=Oe.fragmentShader}else{Te=x.vertexShader,ve=x.fragmentShader;let Oe=o.getVertexShaderStage(x),Re=o.getFragmentShaderStage(x);o.update(x,Oe,Re),Me=Oe.id,Y=Re.id}let it=i.getRenderTarget(),Et=i.state.buffers.depth.getReversed(),Qt=$.isInstancedMesh===!0,Rt=$.isBatchedMesh===!0,qt=!!x.map,Ae=!!x.matcap,F=!!ft,dt=!!x.aoMap,vt=!!x.lightMap,gt=!!x.bumpMap&&x.wireframe===!1,St=!!x.normalMap,jt=!!x.displacementMap,Kt=!!x.emissiveMap,Bt=!!x.metalnessMap,re=!!x.roughnessMap,I=x.anisotropy>0,Ce=x.clearcoat>0,_e=x.dispersion>0,w=x.retroreflectivity>0,_=x.iridescence>0,k=x.sheen>0,X=x.transmission>0,K=I&&!!x.anisotropyMap,yt=Ce&&!!x.clearcoatMap,wt=Ce&&!!x.clearcoatNormalMap,tt=Ce&&!!x.clearcoatRoughnessMap,at=_&&!!x.iridescenceMap,Tt=_&&!!x.iridescenceThicknessMap,Yt=k&&!!x.sheenColorMap,bt=k&&!!x.sheenRoughnessMap,Mt=!!x.specularMap,Vt=!!x.specularColorMap,te=!!x.specularIntensityMap,oe=X&&!!x.transmissionMap,N=X&&!!x.thicknessMap,Pt=!!x.gradientMap,st=!!x.alphaMap,Lt=x.alphaTest>0,Ut=!!x.alphaHash,ut=!!x.extensions,Zt=hi;x.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(Zt=i.toneMapping);let Wt={shaderID:rt,shaderType:x.type,shaderName:x.name,vertexShader:Te,fragmentShader:ve,defines:x.defines,customVertexShaderID:Me,customFragmentShaderID:Y,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:Rt,batchingColor:Rt&&$._colorsTexture!==null,instancing:Qt,instancingColor:Qt&&$.instanceColor!==null,instancingMorph:Qt&&$.morphTexture!==null,outputColorSpace:it===null?i.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:be.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:qt,matcap:Ae,envMap:F,envMapMode:F&&ft.mapping,envMapCubeUVHeight:Q,aoMap:dt,lightMap:vt,bumpMap:gt,normalMap:St,displacementMap:jt,emissiveMap:Kt,normalMapObjectSpace:St&&x.normalMapType===gd,normalMapTangentSpace:St&&x.normalMapType===Bl,packedNormalMap:St&&x.normalMapType===Bl&&Dx(x.normalMap.format),metalnessMap:Bt,roughnessMap:re,anisotropy:I,anisotropyMap:K,clearcoat:Ce,clearcoatMap:yt,clearcoatNormalMap:wt,clearcoatRoughnessMap:tt,dispersion:_e,retroreflection:w,iridescence:_,iridescenceMap:at,iridescenceThicknessMap:Tt,sheen:k,sheenColorMap:Yt,sheenRoughnessMap:bt,specularMap:Mt,specularColorMap:Vt,specularIntensityMap:te,transmission:X,transmissionMap:oe,thicknessMap:N,gradientMap:Pt,opaque:x.transparent===!1&&x.blending===cr&&x.alphaToCoverage===!1,alphaMap:st,alphaTest:Lt,alphaHash:Ut,combine:x.combine,mapUv:qt&&g(x.map.channel),aoMapUv:dt&&g(x.aoMap.channel),lightMapUv:vt&&g(x.lightMap.channel),bumpMapUv:gt&&g(x.bumpMap.channel),normalMapUv:St&&g(x.normalMap.channel),displacementMapUv:jt&&g(x.displacementMap.channel),emissiveMapUv:Kt&&g(x.emissiveMap.channel),metalnessMapUv:Bt&&g(x.metalnessMap.channel),roughnessMapUv:re&&g(x.roughnessMap.channel),anisotropyMapUv:K&&g(x.anisotropyMap.channel),clearcoatMapUv:yt&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:wt&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:at&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:Tt&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Yt&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:bt&&g(x.sheenRoughnessMap.channel),specularMapUv:Mt&&g(x.specularMap.channel),specularColorMapUv:Vt&&g(x.specularColorMap.channel),specularIntensityMapUv:te&&g(x.specularIntensityMap.channel),transmissionMapUv:oe&&g(x.transmissionMap.channel),thicknessMapUv:N&&g(x.thicknessMap.channel),alphaMapUv:st&&g(x.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(St||I),vertexNormals:!!W.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!W.attributes.uv&&(qt||st),fog:!!B,useFog:x.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||W.attributes.normal===void 0&&St===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Et,skinning:$.isSkinnedMesh===!0,hasPositionAttribute:W.attributes.position!==void 0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:Jt,morphTextureStride:kt,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:q.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:Zt,decodeVideoTexture:qt&&x.map.isVideoTexture===!0&&be.getTransfer(x.map.colorSpace)===Ne,decodeVideoTextureEmissive:Kt&&x.emissiveMap.isVideoTexture===!0&&be.getTransfer(x.emissiveMap.colorSpace)===Ne,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Si,flipSided:x.side===In,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ut&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ut&&x.extensions.multiDraw===!0||Rt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Wt.vertexUv1s=l.has(1),Wt.vertexUv2s=l.has(2),Wt.vertexUv3s=l.has(3),l.clear(),Wt}function p(x){let T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(let U in x.defines)T.push(U),T.push(x.defines[U]);return x.isRawShaderMaterial===!1&&(d(T,x),A(T,x),T.push(i.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function d(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numSunLights),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numSunLightShadows),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function A(x,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function C(x){let T=m[x.type],U;if(T){let z=Ln[T];U=ya.clone(z.uniforms)}else U=x.uniforms;return U}function y(x,T){let U=h.get(T);return U!==void 0?++U.usedTimes:(U=new Ix(i,T,x,s),c.push(U),h.set(T,U)),U}function M(x){if(--x.usedTimes===0){let T=c.indexOf(x);c[T]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function E(x){o.remove(x)}function P(){o.dispose()}return{getParameters:S,getProgramCacheKey:p,getUniforms:C,acquireProgram:y,releaseProgram:M,releaseShaderCache:E,programs:c,dispose:P}}function Nx(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Fx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function jd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Qd(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u){let m=0;return u.isInstancedMesh&&(m+=2),u.isSkinnedMesh&&(m+=1),m}function o(u,m,g,S,p,d){let A=i[t];return A===void 0?(A={id:u.id,object:u,geometry:m,material:g,materialVariant:a(u),groupOrder:S,renderOrder:u.renderOrder,z:p,group:d},i[t]=A):(A.id=u.id,A.object=u,A.geometry=m,A.material=g,A.materialVariant=a(u),A.groupOrder=S,A.renderOrder=u.renderOrder,A.z=p,A.group=d),t++,A}function l(u,m,g,S,p,d,A){A.reversedDepth===!0&&(p=-p);let C=o(u,m,g,S,p,d);g.transmission>0?n.push(C):g.transparent===!0?s.push(C):e.push(C)}function c(u,m,g,S,p,d){let A=o(u,m,g,S,p,d);g.transmission>0?n.unshift(A):g.transparent===!0?s.unshift(A):e.unshift(A)}function h(u,m){e.length>1&&e.sort(u||Fx),n.length>1&&n.sort(m||jd),s.length>1&&s.sort(m||jd)}function f(){for(let u=t,m=i.length;u<m;u++){let g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:f,sort:h}}function Ox(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Qd,i.set(n,[a])):s>=r.length?(a=new Qd,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Bx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new L,color:new se};break;case"SpotLight":e={position:new L,direction:new L,color:new se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new se,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new se,groundColor:new se};break;case"RectAreaLight":e={color:new se,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function zx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var kx=0;function Vx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Hx(i){let t=new Bx,e=zx(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);let s=new L,r=new ze,a=new ze;function o(c){let h=0,f=0,u=0;for(let $=0;$<9;$++)n.probe[$].set(0,0,0);let m=0,g=0,S=0,p=0,d=0,A=0,C=0,y=0,M=0,E=0,P=0,x=0,T=0,U=0;c.sort(Vx);for(let $=0,q=c.length;$<q;$++){let B=c[$],W=B.color,et=B.intensity,j=B.distance,ft=null;if(B.shadow&&B.shadow.map&&(B.shadow.map.texture.format===rs?ft=B.shadow.map.texture:ft=B.shadow.map.depthTexture||B.shadow.map.texture),B.isAmbientLight)h+=W.r*et,f+=W.g*et,u+=W.b*et;else if(B.isLightProbe){for(let Q=0;Q<9;Q++)n.probe[Q].addScaledVector(B.sh.coefficients[Q],et);U++}else if(B.isSunLight){let Q=t.get(B);if(Q.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){let rt=B.shadow,ct=e.get(B);ct.shadowIntensity=rt.intensity,ct.shadowBias=rt.bias,ct.shadowNormalBias=rt.normalBias,ct.shadowRadius=rt.radius,ct.shadowMapSize.copy(rt.mapSize).multiply(rt.getFrameExtents()),n.sunShadow[g]=ct,n.sunShadowMap[g]=ft;let Jt=rt.getViewportCount();for(let kt=0;kt<Jt;kt++)n.sunShadowMatrix[S+kt]=rt.getMatrix(kt),n.sunShadowCascade[S+kt]=rt._cascadeData[kt];S+=Jt,g++}n.sun[m]=Q,m++}else if(B.isDirectionalLight){let Q=t.get(B);if(Q.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){let rt=B.shadow,ct=e.get(B);ct.shadowIntensity=rt.intensity,ct.shadowBias=rt.bias,ct.shadowNormalBias=rt.normalBias,ct.shadowRadius=rt.radius,ct.shadowMapSize=rt.mapSize,n.directionalShadow[p]=ct,n.directionalShadowMap[p]=ft,n.directionalShadowMatrix[p]=B.shadow.matrix,M++}n.directional[p]=Q,p++}else if(B.isSpotLight){let Q=t.get(B);Q.position.setFromMatrixPosition(B.matrixWorld),Q.color.copy(W).multiplyScalar(et),Q.distance=j,Q.coneCos=Math.cos(B.angle),Q.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),Q.decay=B.decay,n.spot[A]=Q;let rt=B.shadow;if(B.map&&(n.spotLightMap[x]=B.map,x++,rt.updateMatrices(B),B.castShadow&&T++),n.spotLightMatrix[A]=rt.matrix,B.castShadow){let ct=e.get(B);ct.shadowIntensity=rt.intensity,ct.shadowBias=rt.bias,ct.shadowNormalBias=rt.normalBias,ct.shadowRadius=rt.radius,ct.shadowMapSize=rt.mapSize,n.spotShadow[A]=ct,n.spotShadowMap[A]=ft,P++}A++}else if(B.isRectAreaLight){let Q=t.get(B);Q.color.copy(W).multiplyScalar(et),Q.halfWidth.set(B.width*.5,0,0),Q.halfHeight.set(0,B.height*.5,0),n.rectArea[C]=Q,C++}else if(B.isPointLight){let Q=t.get(B);if(Q.color.copy(B.color).multiplyScalar(B.intensity),Q.distance=B.distance,Q.decay=B.decay,B.castShadow){let rt=B.shadow,ct=e.get(B);ct.shadowIntensity=rt.intensity,ct.shadowBias=rt.bias,ct.shadowNormalBias=rt.normalBias,ct.shadowRadius=rt.radius,ct.shadowMapSize=rt.mapSize,ct.shadowCameraNear=rt.camera.near,ct.shadowCameraFar=rt.camera.far,n.pointShadow[d]=ct,n.pointShadowMap[d]=ft,n.pointShadowMatrix[d]=B.shadow.matrix,E++}n.point[d]=Q,d++}else if(B.isHemisphereLight){let Q=t.get(B);Q.skyColor.copy(B.color).multiplyScalar(et),Q.groundColor.copy(B.groundColor).multiplyScalar(et),n.hemi[y]=Q,y++}}C>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=It.LTC_FLOAT_1,n.rectAreaLTC2=It.LTC_FLOAT_2):(n.rectAreaLTC1=It.LTC_HALF_1,n.rectAreaLTC2=It.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;let z=n.hash;(z.sunLength!==m||z.directionalLength!==p||z.pointLength!==d||z.spotLength!==A||z.rectAreaLength!==C||z.hemiLength!==y||z.numSunShadows!==g||z.numDirectionalShadows!==M||z.numPointShadows!==E||z.numSpotShadows!==P||z.numSpotMaps!==x||z.numLightProbes!==U)&&(n.sun.length=m,n.directional.length=p,n.spot.length=A,n.rectArea.length=C,n.point.length=d,n.hemi.length=y,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=S,n.sunShadowCascade.length=S,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=P,n.spotShadowMap.length=P,n.spotLightMatrix.length=P+x-T,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=U,z.sunLength=m,z.directionalLength=p,z.pointLength=d,z.spotLength=A,z.rectAreaLength=C,z.hemiLength=y,z.numSunShadows=g,z.numDirectionalShadows=M,z.numPointShadows=E,z.numSpotShadows=P,z.numSpotMaps=x,z.numLightProbes=U,n.version=kx++)}function l(c,h){let f=0,u=0,m=0,g=0,S=0,p=0,d=h.matrixWorldInverse;for(let A=0,C=c.length;A<C;A++){let y=c[A];if(y.isSunLight){let M=n.sun[f];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(d),f++}else if(y.isDirectionalLight){let M=n.directional[u];M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(d),u++}else if(y.isSpotLight){let M=n.spot[g];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(d),M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(d),g++}else if(y.isRectAreaLight){let M=n.rectArea[S];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(d),a.identity(),r.copy(y.matrixWorld),r.premultiply(d),a.extractRotation(r),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),S++}else if(y.isPointLight){let M=n.point[m];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(d),m++}else if(y.isHemisphereLight){let M=n.hemi[p];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(d),p++}}}return{setup:o,setupView:l,state:n}}function tf(i){let t=new Hx(i),e=[],n=[],s=[];function r(u){f.camera=u,e.length=0,n.length=0,s.length=0}function a(u){e.push(u)}function o(u){n.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let f={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Gx(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new tf(i),t.set(s,[o])):r>=a.length?(o=new tf(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var Wx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Xx=`uniform sampler2D shadow_pass;
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
}`,$x=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],qx=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],ef=new ze,Ma=new L,Dh=new L;function Yx(i,t,e){let n=new nr,s=new Ct,r=new Ct,a=new Fe,o=new Oo,l=new Bo,c={},h=e.maxTextureSize,f={[es]:In,[In]:es,[Si]:Si},u=new pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ct},radius:{value:4}},vertexShader:Wx,fragmentShader:Xx}),m=u.clone();m.defines.HORIZONTAL_PASS=1;let g=new je;g.setAttribute("position",new Ve(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let S=new bn(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ua;let d=this.type;this.render=function(E,P,x){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;this.type===qu&&(ne("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ua);let T=i.getRenderTarget(),U=i.getActiveCubeFace(),z=i.getActiveMipmapLevel(),$=i.state;$.setBlending(Mi),$.buffers.depth.getReversed()===!0?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);let q=d!==this.type;q&&P.traverse(function(B){B.material&&(Array.isArray(B.material)?B.material.forEach(W=>W.needsUpdate=!0):B.material.needsUpdate=!0)});for(let B=0,W=E.length;B<W;B++){let et=E[B],j=et.shadow;if(j===void 0){ne("WebGLShadowMap:",et,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;s.copy(j.mapSize);let ft=j.getFrameExtents();s.multiply(ft),r.copy(j.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ft.x),s.x=r.x*ft.x,j.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ft.y),s.y=r.y*ft.y,j.mapSize.y=r.y));let Q=i.state.buffers.depth.getReversed();if(j.camera._reversedDepth=Q,j.map===null||q===!0){if(j.map!==null&&(j.map.depthTexture!==null&&(j.map.depthTexture.dispose(),j.map.depthTexture=null),j.map.dispose()),this.type===lr){if(et.isPointLight){ne("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}j.map=new Fn(s.x,s.y,{format:rs,type:fi,minFilter:mn,magFilter:mn,generateMipmaps:!1}),j.map.texture.name=et.name+".shadowMap",j.map.depthTexture=new Ji(s.x,s.y,di),j.map.depthTexture.name=et.name+".shadowMapDepth",j.map.depthTexture.format=_i,j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=dn,j.map.depthTexture.magFilter=dn}else et.isPointLight?(j.map=new Wl(s.x),j.map.depthTexture=new Ro(s.x,ui)):(j.map=new Fn(s.x,s.y),j.map.depthTexture=new Ji(s.x,s.y,ui)),j.map.depthTexture.name=et.name+".shadowMap",j.map.depthTexture.format=_i,this.type===ua?(j.map.depthTexture.compareFunction=Q?kl:zl,j.map.depthTexture.minFilter=mn,j.map.depthTexture.magFilter=mn):(j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=dn,j.map.depthTexture.magFilter=dn);j.camera.updateProjectionMatrix()}j.map.isWebGLCubeRenderTarget!==!0&&(j.map.width!==s.x||j.map.height!==s.y)&&j.map.setSize(s.x,s.y);let rt=j.map.isWebGLCubeRenderTarget?6:j.getViewportCount();et.isPointLight!==!0&&j.updateMatrices(et,x);for(let ct=0;ct<rt;ct++){let Jt=j.getCamera(ct);if(et.isPointLight){let kt=j.camera,Te=j.matrix,ve=et.distance||kt.far;ve!==kt.far&&(kt.far=ve,kt.updateProjectionMatrix()),Ma.setFromMatrixPosition(et.matrixWorld),kt.position.copy(Ma),Dh.copy(kt.position),Dh.add($x[ct]),kt.up.copy(qx[ct]),kt.lookAt(Dh),kt.updateMatrixWorld(),Te.makeTranslation(-Ma.x,-Ma.y,-Ma.z),ef.multiplyMatrices(kt.projectionMatrix,kt.matrixWorldInverse),j._frustum.setFromProjectionMatrix(ef,kt.coordinateSystem,kt.reversedDepth)}if(j.map.isWebGLCubeRenderTarget)i.setRenderTarget(j.map,ct),i.clear();else{ct===0&&(i.setRenderTarget(j.map),i.clear());let kt=j.getViewport(ct);a.set(r.x*kt.x,r.y*kt.y,r.x*kt.z,r.y*kt.w),$.viewport(a)}n=j.getFrustum(ct),y(P,x,Jt,et,this.type)}j.isPointLightShadow!==!0&&this.type===lr&&A(j,x),j.needsUpdate=!1}d=this.type,p.needsUpdate=!1,i.setRenderTarget(T,U,z)};function A(E,P){let x=t.update(S);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,m.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),E.mapPass===null?E.mapPass=new Fn(s.x,s.y,{format:rs,type:fi}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(P,null,x,u,S,null),m.uniforms.shadow_pass.value=E.mapPass.texture,m.uniforms.resolution.value.set(E.map.width,E.map.height),m.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(P,null,x,m,S,null)}function C(E,P,x,T){let U=null,z=x.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(z!==void 0)U=z;else if(U=x.isPointLight===!0?l:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let $=U.uuid,q=P.uuid,B=c[$];B===void 0&&(B={},c[$]=B);let W=B[q];W===void 0&&(W=U.clone(),B[q]=W,P.addEventListener("dispose",M)),U=W}if(U.visible=P.visible,U.wireframe=P.wireframe,T===lr?U.side=P.shadowSide!==null?P.shadowSide:P.side:U.side=P.shadowSide!==null?P.shadowSide:f[P.side],U.alphaMap=P.alphaMap,U.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,U.map=P.map,U.clipShadows=P.clipShadows,U.clippingPlanes=P.clippingPlanes,U.clipIntersection=P.clipIntersection,U.displacementMap=P.displacementMap,U.displacementScale=P.displacementScale,U.displacementBias=P.displacementBias,U.wireframeLinewidth=P.wireframeLinewidth,U.linewidth=P.linewidth,x.isPointLight===!0&&U.isMeshDistanceMaterial===!0){let $=i.properties.get(U);$.light=x}return U}function y(E,P,x,T,U){if(E.visible===!1)return;if(E.layers.test(P.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&U===lr)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,E.matrixWorld);let q=t.update(E),B=E.material;if(Array.isArray(B)){let W=q.groups;for(let et=0,j=W.length;et<j;et++){let ft=W[et],Q=B[ft.materialIndex];if(Q&&Q.visible){let rt=C(E,Q,T,U);E.onBeforeShadow(i,E,P,x,q,rt,ft),i.renderBufferDirect(x,null,q,rt,E,ft),E.onAfterShadow(i,E,P,x,q,rt,ft)}}}else if(B.visible){let W=C(E,B,T,U);E.onBeforeShadow(i,E,P,x,q,W,null),i.renderBufferDirect(x,null,q,W,E,null),E.onAfterShadow(i,E,P,x,q,W,null)}}let $=E.children;for(let q=0,B=$.length;q<B;q++)y($[q],P,x,T,U)}function M(E){E.target.removeEventListener("dispose",M);for(let x in c){let T=c[x],U=E.target.uuid;U in T&&(T[U].dispose(),delete T[U])}}}function Zx(i,t){function e(){let N=!1,Pt=new Fe,st=null,Lt=new Fe(0,0,0,0);return{setMask:function(Ut){st!==Ut&&!N&&(i.colorMask(Ut,Ut,Ut,Ut),st=Ut)},setLocked:function(Ut){N=Ut},setClear:function(Ut,ut,Zt,Wt,Oe){Oe===!0&&(Ut*=Wt,ut*=Wt,Zt*=Wt),Pt.set(Ut,ut,Zt,Wt),Lt.equals(Pt)===!1&&(i.clearColor(Ut,ut,Zt,Wt),Lt.copy(Pt))},reset:function(){N=!1,st=null,Lt.set(-1,0,0,0)}}}function n(){let N=!1,Pt=!1,st=null,Lt=null,Ut=null;return{setReversed:function(ut){if(Pt!==ut){let Zt=t.get("EXT_clip_control");ut?Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.ZERO_TO_ONE_EXT):Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.NEGATIVE_ONE_TO_ONE_EXT),Pt=ut;let Wt=Ut;Ut=null,this.setClear(Wt)}},getReversed:function(){return Pt},setTest:function(ut){ut?it(i.DEPTH_TEST):Et(i.DEPTH_TEST)},setMask:function(ut){st!==ut&&!N&&(i.depthMask(ut),st=ut)},setFunc:function(ut){if(Pt&&(ut=Ad[ut]),Lt!==ut){switch(ut){case co:i.depthFunc(i.NEVER);break;case ho:i.depthFunc(i.ALWAYS);break;case uo:i.depthFunc(i.LESS);break;case Zs:i.depthFunc(i.LEQUAL);break;case fo:i.depthFunc(i.EQUAL);break;case po:i.depthFunc(i.GEQUAL);break;case mo:i.depthFunc(i.GREATER);break;case go:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Lt=ut}},setLocked:function(ut){N=ut},setClear:function(ut){Ut!==ut&&(Ut=ut,Pt&&(ut=1-ut),i.clearDepth(ut))},reset:function(){N=!1,st=null,Lt=null,Ut=null,Pt=!1}}}function s(){let N=!1,Pt=null,st=null,Lt=null,Ut=null,ut=null,Zt=null,Wt=null,Oe=null;return{setTest:function(Re){N||(Re?it(i.STENCIL_TEST):Et(i.STENCIL_TEST))},setMask:function(Re){Pt!==Re&&!N&&(i.stencilMask(Re),Pt=Re)},setFunc:function(Re,Tn,zn){(st!==Re||Lt!==Tn||Ut!==zn)&&(i.stencilFunc(Re,Tn,zn),st=Re,Lt=Tn,Ut=zn)},setOp:function(Re,Tn,zn){(ut!==Re||Zt!==Tn||Wt!==zn)&&(i.stencilOp(Re,Tn,zn),ut=Re,Zt=Tn,Wt=zn)},setLocked:function(Re){N=Re},setClear:function(Re){Oe!==Re&&(i.clearStencil(Re),Oe=Re)},reset:function(){N=!1,Pt=null,st=null,Lt=null,Ut=null,ut=null,Zt=null,Wt=null,Oe=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},f={},u={},m=new WeakMap,g=[],S=null,p=!1,d=null,A=null,C=null,y=null,M=null,E=null,P=null,x=new se(0,0,0),T=0,U=!1,z=null,$=null,q=null,B=null,W=null,et=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,ft=0,Q=i.getParameter(i.VERSION);Q.indexOf("WebGL")!==-1?(ft=parseFloat(/^WebGL (\d)/.exec(Q)[1]),j=ft>=1):Q.indexOf("OpenGL ES")!==-1&&(ft=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),j=ft>=2);let rt=null,ct={},Jt=i.getParameter(i.SCISSOR_BOX),kt=i.getParameter(i.VIEWPORT),Te=new Fe().fromArray(Jt),ve=new Fe().fromArray(kt);function Me(N,Pt,st,Lt){let Ut=new Uint8Array(4),ut=i.createTexture();i.bindTexture(N,ut),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Zt=0;Zt<st;Zt++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(Pt,0,i.RGBA,1,1,Lt,0,i.RGBA,i.UNSIGNED_BYTE,Ut):i.texImage2D(Pt+Zt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ut);return ut}let Y={};Y[i.TEXTURE_2D]=Me(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=Me(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=Me(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=Me(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),it(i.DEPTH_TEST),a.setFunc(Zs),gt(!1),St(jc),it(i.CULL_FACE),dt(Mi);function it(N){h[N]!==!0&&(i.enable(N),h[N]=!0)}function Et(N){h[N]!==!1&&(i.disable(N),h[N]=!1)}function Qt(N,Pt){return u[N]!==Pt?(i.bindFramebuffer(N,Pt),u[N]=Pt,N===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Pt),N===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Pt),!0):!1}function Rt(N,Pt){let st=g,Lt=!1;if(N){st=m.get(Pt),st===void 0&&(st=[],m.set(Pt,st));let Ut=N.textures;if(st.length!==Ut.length||st[0]!==i.COLOR_ATTACHMENT0){for(let ut=0,Zt=Ut.length;ut<Zt;ut++)st[ut]=i.COLOR_ATTACHMENT0+ut;st.length=Ut.length,Lt=!0}}else st[0]!==i.BACK&&(st[0]=i.BACK,Lt=!0);Lt&&i.drawBuffers(st)}function qt(N){return S!==N?(i.useProgram(N),S=N,!0):!1}let Ae={[Ss]:i.FUNC_ADD,[Zu]:i.FUNC_SUBTRACT,[Ju]:i.FUNC_REVERSE_SUBTRACT};Ae[Ku]=i.MIN,Ae[ju]=i.MAX;let F={[Qu]:i.ZERO,[td]:i.ONE,[ed]:i.SRC_COLOR,[nh]:i.SRC_ALPHA,[od]:i.SRC_ALPHA_SATURATE,[rd]:i.DST_COLOR,[id]:i.DST_ALPHA,[nd]:i.ONE_MINUS_SRC_COLOR,[ih]:i.ONE_MINUS_SRC_ALPHA,[ad]:i.ONE_MINUS_DST_COLOR,[sd]:i.ONE_MINUS_DST_ALPHA,[ld]:i.CONSTANT_COLOR,[cd]:i.ONE_MINUS_CONSTANT_COLOR,[hd]:i.CONSTANT_ALPHA,[ud]:i.ONE_MINUS_CONSTANT_ALPHA};function dt(N,Pt,st,Lt,Ut,ut,Zt,Wt,Oe,Re){if(N===Mi){p===!0&&(Et(i.BLEND),p=!1);return}if(p===!1&&(it(i.BLEND),p=!0),N!==Yu){if(N!==d||Re!==U){if((A!==Ss||M!==Ss)&&(i.blendEquation(i.FUNC_ADD),A=Ss,M=Ss),Re)switch(N){case cr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qc:i.blendFunc(i.ONE,i.ONE);break;case th:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case eh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ie("WebGLState: Invalid blending: ",N);break}else switch(N){case cr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case th:ie("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case eh:ie("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ie("WebGLState: Invalid blending: ",N);break}C=null,y=null,E=null,P=null,x.set(0,0,0),T=0,d=N,U=Re}return}Ut=Ut||Pt,ut=ut||st,Zt=Zt||Lt,(Pt!==A||Ut!==M)&&(i.blendEquationSeparate(Ae[Pt],Ae[Ut]),A=Pt,M=Ut),(st!==C||Lt!==y||ut!==E||Zt!==P)&&(i.blendFuncSeparate(F[st],F[Lt],F[ut],F[Zt]),C=st,y=Lt,E=ut,P=Zt),(Wt.equals(x)===!1||Oe!==T)&&(i.blendColor(Wt.r,Wt.g,Wt.b,Oe),x.copy(Wt),T=Oe),d=N,U=!1}function vt(N,Pt){N.side===Si?Et(i.CULL_FACE):it(i.CULL_FACE);let st=N.side===In;Pt&&(st=!st),gt(st),N.blending===cr&&N.transparent===!1?dt(Mi):dt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);let Lt=N.stencilWrite;o.setTest(Lt),Lt&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Kt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?it(i.SAMPLE_ALPHA_TO_COVERAGE):Et(i.SAMPLE_ALPHA_TO_COVERAGE)}function gt(N){z!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),z=N)}function St(N){N!==Xu?(it(i.CULL_FACE),N!==$&&(N===jc?i.cullFace(i.BACK):N===$u?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Et(i.CULL_FACE),$=N}function jt(N){N!==q&&(j&&i.lineWidth(N),q=N)}function Kt(N,Pt,st){N?(it(i.POLYGON_OFFSET_FILL),(B!==Pt||W!==st)&&(B=Pt,W=st,a.getReversed()&&(Pt=-Pt),i.polygonOffset(Pt,st))):Et(i.POLYGON_OFFSET_FILL)}function Bt(N){N?it(i.SCISSOR_TEST):Et(i.SCISSOR_TEST)}function re(N){N===void 0&&(N=i.TEXTURE0+et-1),rt!==N&&(i.activeTexture(N),rt=N)}function I(N,Pt,st){st===void 0&&(rt===null?st=i.TEXTURE0+et-1:st=rt);let Lt=ct[st];Lt===void 0&&(Lt={type:void 0,texture:void 0},ct[st]=Lt),(Lt.type!==N||Lt.texture!==Pt)&&(rt!==st&&(i.activeTexture(st),rt=st),i.bindTexture(N,Pt||Y[N]),Lt.type=N,Lt.texture=Pt)}function Ce(){let N=ct[rt];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function _e(){try{i.compressedTexImage2D(...arguments)}catch(N){ie("WebGLState:",N)}}function w(){try{i.compressedTexImage3D(...arguments)}catch(N){ie("WebGLState:",N)}}function _(){try{i.texSubImage2D(...arguments)}catch(N){ie("WebGLState:",N)}}function k(){try{i.texSubImage3D(...arguments)}catch(N){ie("WebGLState:",N)}}function X(){try{i.compressedTexSubImage2D(...arguments)}catch(N){ie("WebGLState:",N)}}function K(){try{i.compressedTexSubImage3D(...arguments)}catch(N){ie("WebGLState:",N)}}function yt(){try{i.texStorage2D(...arguments)}catch(N){ie("WebGLState:",N)}}function wt(){try{i.texStorage3D(...arguments)}catch(N){ie("WebGLState:",N)}}function tt(){try{i.texImage2D(...arguments)}catch(N){ie("WebGLState:",N)}}function at(){try{i.texImage3D(...arguments)}catch(N){ie("WebGLState:",N)}}function Tt(N){return f[N]!==void 0?f[N]:i.getParameter(N)}function Yt(N,Pt){f[N]!==Pt&&(i.pixelStorei(N,Pt),f[N]=Pt)}function bt(N){Te.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),Te.copy(N))}function Mt(N){ve.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),ve.copy(N))}function Vt(N,Pt){let st=c.get(Pt);st===void 0&&(st=new WeakMap,c.set(Pt,st));let Lt=st.get(N);Lt===void 0&&(Lt=i.getUniformBlockIndex(Pt,N.name),st.set(N,Lt))}function te(N,Pt){let Lt=c.get(Pt).get(N);l.get(Pt)!==Lt&&(i.uniformBlockBinding(Pt,Lt,N.__bindingPointIndex),l.set(Pt,Lt))}function oe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},f={},rt=null,ct={},u={},m=new WeakMap,g=[],S=null,p=!1,d=null,A=null,C=null,y=null,M=null,E=null,P=null,x=new se(0,0,0),T=0,U=!1,z=null,$=null,q=null,B=null,W=null,Te.set(0,0,i.canvas.width,i.canvas.height),ve.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:it,disable:Et,bindFramebuffer:Qt,drawBuffers:Rt,useProgram:qt,setBlending:dt,setMaterial:vt,setFlipSided:gt,setCullFace:St,setLineWidth:jt,setPolygonOffset:Kt,setScissorTest:Bt,activeTexture:re,bindTexture:I,unbindTexture:Ce,compressedTexImage2D:_e,compressedTexImage3D:w,texImage2D:tt,texImage3D:at,pixelStorei:Yt,getParameter:Tt,updateUBOMapping:Vt,uniformBlockBinding:te,texStorage2D:yt,texStorage3D:wt,texSubImage2D:_,texSubImage3D:k,compressedTexSubImage2D:X,compressedTexSubImage3D:K,scissor:bt,viewport:Mt,reset:oe}}function Jx(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ct,h=new WeakMap,f=new Set,u,m=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(w,_){return g?new OffscreenCanvas(w,_):Fr("canvas")}function p(w,_,k){let X=1,K=_e(w);if((K.width>k||K.height>k)&&(X=k/Math.max(K.width,K.height)),X<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let yt=Math.floor(X*K.width),wt=Math.floor(X*K.height);u===void 0&&(u=S(yt,wt));let tt=_?S(yt,wt):u;return tt.width=yt,tt.height=wt,tt.getContext("2d").drawImage(w,0,0,yt,wt),ne("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+yt+"x"+wt+")."),tt}else return"data"in w&&ne("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),w;return w}function d(w){return w.generateMipmaps}function A(w){i.generateMipmap(w)}function C(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(w,_,k,X,K,yt=!1){if(w!==null){if(i[w]!==void 0)return i[w];ne("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let wt;X&&(wt=t.get("EXT_texture_norm16"),wt||ne("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let tt=_;if(_===i.RED&&(k===i.FLOAT&&(tt=i.R32F),k===i.HALF_FLOAT&&(tt=i.R16F),k===i.UNSIGNED_BYTE&&(tt=i.R8),k===i.UNSIGNED_SHORT&&wt&&(tt=wt.R16_EXT),k===i.SHORT&&wt&&(tt=wt.R16_SNORM_EXT)),_===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(tt=i.R8UI),k===i.UNSIGNED_SHORT&&(tt=i.R16UI),k===i.UNSIGNED_INT&&(tt=i.R32UI),k===i.BYTE&&(tt=i.R8I),k===i.SHORT&&(tt=i.R16I),k===i.INT&&(tt=i.R32I)),_===i.RG&&(k===i.FLOAT&&(tt=i.RG32F),k===i.HALF_FLOAT&&(tt=i.RG16F),k===i.UNSIGNED_BYTE&&(tt=i.RG8),k===i.UNSIGNED_SHORT&&wt&&(tt=wt.RG16_EXT),k===i.SHORT&&wt&&(tt=wt.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(tt=i.RG8UI),k===i.UNSIGNED_SHORT&&(tt=i.RG16UI),k===i.UNSIGNED_INT&&(tt=i.RG32UI),k===i.BYTE&&(tt=i.RG8I),k===i.SHORT&&(tt=i.RG16I),k===i.INT&&(tt=i.RG32I)),_===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(tt=i.RGB8UI),k===i.UNSIGNED_SHORT&&(tt=i.RGB16UI),k===i.UNSIGNED_INT&&(tt=i.RGB32UI),k===i.BYTE&&(tt=i.RGB8I),k===i.SHORT&&(tt=i.RGB16I),k===i.INT&&(tt=i.RGB32I)),_===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(tt=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(tt=i.RGBA16UI),k===i.UNSIGNED_INT&&(tt=i.RGBA32UI),k===i.BYTE&&(tt=i.RGBA8I),k===i.SHORT&&(tt=i.RGBA16I),k===i.INT&&(tt=i.RGBA32I)),_===i.RGB&&(k===i.UNSIGNED_SHORT&&wt&&(tt=wt.RGB16_EXT),k===i.SHORT&&wt&&(tt=wt.RGB16_SNORM_EXT),k===i.UNSIGNED_INT_5_9_9_9_REV&&(tt=i.RGB9_E5),k===i.UNSIGNED_INT_10F_11F_11F_REV&&(tt=i.R11F_G11F_B10F)),_===i.RGBA){let at=yt?Nr:be.getTransfer(K);k===i.FLOAT&&(tt=i.RGBA32F),k===i.HALF_FLOAT&&(tt=i.RGBA16F),k===i.UNSIGNED_BYTE&&(tt=at===Ne?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT&&wt&&(tt=wt.RGBA16_EXT),k===i.SHORT&&wt&&(tt=wt.RGBA16_SNORM_EXT),k===i.UNSIGNED_SHORT_4_4_4_4&&(tt=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(tt=i.RGB5_A1)}return(tt===i.R16F||tt===i.R32F||tt===i.RG16F||tt===i.RG32F||tt===i.RGBA16F||tt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function M(w,_){let k;return w?_===null||_===ui||_===ur?k=i.DEPTH24_STENCIL8:_===di?k=i.DEPTH32F_STENCIL8:_===hr&&(k=i.DEPTH24_STENCIL8,ne("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===ui||_===ur?k=i.DEPTH_COMPONENT24:_===di?k=i.DEPTH_COMPONENT32F:_===hr&&(k=i.DEPTH_COMPONENT16),k}function E(w,_){return d(w)===!0||w.isFramebufferTexture&&w.minFilter!==dn&&w.minFilter!==mn?Math.log2(Math.max(_.width,_.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?_.mipmaps.length:1}function P(w){let _=w.target;_.removeEventListener("dispose",P),T(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&f.delete(_)}function x(w){let _=w.target;_.removeEventListener("dispose",x),z(_)}function T(w){let _=n.get(w);if(_.__webglInit===void 0)return;let k=w.source,X=m.get(k);if(X){let K=X[_.__cacheKey];K.usedTimes--,K.usedTimes===0&&U(w),Object.keys(X).length===0&&m.delete(k)}n.remove(w)}function U(w){let _=n.get(w);i.deleteTexture(_.__webglTexture);let k=w.source,X=m.get(k);delete X[_.__cacheKey],a.memory.textures--}function z(w){let _=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(_.__webglFramebuffer[X]))for(let K=0;K<_.__webglFramebuffer[X].length;K++)i.deleteFramebuffer(_.__webglFramebuffer[X][K]);else i.deleteFramebuffer(_.__webglFramebuffer[X]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[X])}else{if(Array.isArray(_.__webglFramebuffer))for(let X=0;X<_.__webglFramebuffer.length;X++)i.deleteFramebuffer(_.__webglFramebuffer[X]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let X=0;X<_.__webglColorRenderbuffer.length;X++)_.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[X]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let k=w.textures;for(let X=0,K=k.length;X<K;X++){let yt=n.get(k[X]);yt.__webglTexture&&(i.deleteTexture(yt.__webglTexture),a.memory.textures--),n.remove(k[X])}n.remove(w)}let $=0;function q(){$=0}function B(){return $}function W(w){$=w}function et(){let w=$;return w>=s.maxTextures&&ne("WebGLTextures: Trying to use "+(w+1)+" texture units while this GPU supports only "+s.maxTextures),$+=1,w}function j(w){let _=[];return _.push(w.wrapS),_.push(w.wrapT),_.push(w.wrapR||0),_.push(w.magFilter),_.push(w.minFilter),_.push(w.anisotropy),_.push(w.internalFormat),_.push(w.format),_.push(w.type),_.push(w.generateMipmaps),_.push(w.premultiplyAlpha),_.push(w.flipY),_.push(w.unpackAlignment),_.push(w.colorSpace),_.join()}function ft(w,_){let k=n.get(w);if(w.isVideoTexture&&I(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&k.__version!==w.version){let X=w.image;if(X===null)ne("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)ne("WebGLRenderer: Texture marked for update but image is incomplete");else{Et(k,w,_);return}}else w.isExternalTexture&&(k.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+_)}function Q(w,_){let k=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&k.__version!==w.version){Et(k,w,_);return}else w.isExternalTexture&&(k.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+_)}function rt(w,_){let k=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&k.__version!==w.version){Et(k,w,_);return}e.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+_)}function ct(w,_){let k=n.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&k.__version!==w.version){Qt(k,w,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+_)}let Jt={[_o]:i.REPEAT,[mi]:i.CLAMP_TO_EDGE,[xo]:i.MIRRORED_REPEAT},kt={[dn]:i.NEAREST,[pd]:i.NEAREST_MIPMAP_NEAREST,[fa]:i.NEAREST_MIPMAP_LINEAR,[mn]:i.LINEAR,[el]:i.LINEAR_MIPMAP_NEAREST,[is]:i.LINEAR_MIPMAP_LINEAR},Te={[xd]:i.NEVER,[bd]:i.ALWAYS,[vd]:i.LESS,[zl]:i.LEQUAL,[yd]:i.EQUAL,[kl]:i.GEQUAL,[Sd]:i.GREATER,[Md]:i.NOTEQUAL};function ve(w,_){if(_.type===di&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===mn||_.magFilter===el||_.magFilter===fa||_.magFilter===is||_.minFilter===mn||_.minFilter===el||_.minFilter===fa||_.minFilter===is)&&ne("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,Jt[_.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,Jt[_.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,Jt[_.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,kt[_.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,kt[_.minFilter]),_.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,Te[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===dn||_.minFilter!==fa&&_.minFilter!==is||_.type===di&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let k=t.get("EXT_texture_filter_anisotropic");i.texParameterf(w,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Me(w,_){let k=!1;w.__webglInit===void 0&&(w.__webglInit=!0,_.addEventListener("dispose",P));let X=_.source,K=m.get(X);K===void 0&&(K={},m.set(X,K));let yt=j(_);if(yt!==w.__cacheKey){K[yt]===void 0&&(K[yt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,k=!0),K[yt].usedTimes++;let wt=K[w.__cacheKey];wt!==void 0&&(K[w.__cacheKey].usedTimes--,wt.usedTimes===0&&U(_)),w.__cacheKey=yt,w.__webglTexture=K[yt].texture}return k}function Y(w,_,k){return Math.floor(Math.floor(w/k)/_)}function it(w,_,k,X){let yt=w.updateRanges;if(yt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,k,X,_.data);else{yt.sort((Yt,bt)=>Yt.start-bt.start);let wt=0;for(let Yt=1;Yt<yt.length;Yt++){let bt=yt[wt],Mt=yt[Yt],Vt=bt.start+bt.count,te=Y(Mt.start,_.width,4),oe=Y(bt.start,_.width,4);Mt.start<=Vt+1&&te===oe&&Y(Mt.start+Mt.count-1,_.width,4)===te?bt.count=Math.max(bt.count,Mt.start+Mt.count-bt.start):(++wt,yt[wt]=Mt)}yt.length=wt+1;let tt=e.getParameter(i.UNPACK_ROW_LENGTH),at=e.getParameter(i.UNPACK_SKIP_PIXELS),Tt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let Yt=0,bt=yt.length;Yt<bt;Yt++){let Mt=yt[Yt],Vt=Math.floor(Mt.start/4),te=Math.ceil(Mt.count/4),oe=Vt%_.width,N=Math.floor(Vt/_.width),Pt=te,st=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,oe),e.pixelStorei(i.UNPACK_SKIP_ROWS,N),e.texSubImage2D(i.TEXTURE_2D,0,oe,N,Pt,st,k,X,_.data)}w.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,tt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,at),e.pixelStorei(i.UNPACK_SKIP_ROWS,Tt)}}function Et(w,_,k){let X=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(X=i.TEXTURE_3D);let K=Me(w,_),yt=_.source;e.bindTexture(X,w.__webglTexture,i.TEXTURE0+k);let wt=n.get(yt);if(yt.version!==wt.__version||K===!0){if(e.activeTexture(i.TEXTURE0+k),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let st=be.getPrimaries(be.workingColorSpace),Lt=_.colorSpace===ki?null:be.getPrimaries(_.colorSpace),Ut=_.colorSpace===ki||st===Lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ut)}e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let at=p(_.image,!1,s.maxTextureSize);at=Ce(_,at);let Tt=r.convert(_.format,_.colorSpace),Yt=r.convert(_.type),bt=y(_.internalFormat,Tt,Yt,_.normalized,_.colorSpace,_.isVideoTexture);ve(X,_);let Mt,Vt=_.mipmaps,te=_.isVideoTexture!==!0,oe=wt.__version===void 0||K===!0,N=yt.dataReady,Pt=E(_,at);if(_.isDepthTexture)bt=M(_.format===ss,_.type),oe&&(te?e.texStorage2D(i.TEXTURE_2D,1,bt,at.width,at.height):e.texImage2D(i.TEXTURE_2D,0,bt,at.width,at.height,0,Tt,Yt,null));else if(_.isDataTexture)if(Vt.length>0){te&&oe&&e.texStorage2D(i.TEXTURE_2D,Pt,bt,Vt[0].width,Vt[0].height);for(let st=0,Lt=Vt.length;st<Lt;st++)Mt=Vt[st],te?N&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,Mt.width,Mt.height,Tt,Yt,Mt.data):e.texImage2D(i.TEXTURE_2D,st,bt,Mt.width,Mt.height,0,Tt,Yt,Mt.data);_.generateMipmaps=!1}else te?(oe&&e.texStorage2D(i.TEXTURE_2D,Pt,bt,at.width,at.height),N&&it(_,at,Tt,Yt)):e.texImage2D(i.TEXTURE_2D,0,bt,at.width,at.height,0,Tt,Yt,at.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){te&&oe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Pt,bt,Vt[0].width,Vt[0].height,at.depth);for(let st=0,Lt=Vt.length;st<Lt;st++)if(Mt=Vt[st],_.format!==ti)if(Tt!==null)if(te){if(N)if(_.layerUpdates.size>0){let Ut=Ah(Mt.width,Mt.height,_.format,_.type);for(let ut of _.layerUpdates){let Zt=Mt.data.subarray(ut*Ut/Mt.data.BYTES_PER_ELEMENT,(ut+1)*Ut/Mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,ut,Mt.width,Mt.height,1,Tt,Zt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,Mt.width,Mt.height,at.depth,Tt,Mt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,st,bt,Mt.width,Mt.height,at.depth,0,Mt.data,0,0);else ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else te?N&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,Mt.width,Mt.height,at.depth,Tt,Yt,Mt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,st,bt,Mt.width,Mt.height,at.depth,0,Tt,Yt,Mt.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{te&&oe&&e.texStorage2D(i.TEXTURE_2D,Pt,bt,Vt[0].width,Vt[0].height);for(let st=0,Lt=Vt.length;st<Lt;st++)Mt=Vt[st],_.format!==ti?Tt!==null?te?N&&e.compressedTexSubImage2D(i.TEXTURE_2D,st,0,0,Mt.width,Mt.height,Tt,Mt.data):e.compressedTexImage2D(i.TEXTURE_2D,st,bt,Mt.width,Mt.height,0,Mt.data):ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):te?N&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,Mt.width,Mt.height,Tt,Yt,Mt.data):e.texImage2D(i.TEXTURE_2D,st,bt,Mt.width,Mt.height,0,Tt,Yt,Mt.data)}else if(_.isDataArrayTexture)if(te){if(oe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Pt,bt,at.width,at.height,at.depth),N)if(_.layerUpdates.size>0){let st=Ah(at.width,at.height,_.format,_.type);for(let Lt of _.layerUpdates){let Ut=at.data.subarray(Lt*st/at.data.BYTES_PER_ELEMENT,(Lt+1)*st/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Lt,at.width,at.height,1,Tt,Yt,Ut)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,Tt,Yt,at.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,bt,at.width,at.height,at.depth,0,Tt,Yt,at.data);else if(_.isData3DTexture)te?(oe&&e.texStorage3D(i.TEXTURE_3D,Pt,bt,at.width,at.height,at.depth),N&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,Tt,Yt,at.data)):e.texImage3D(i.TEXTURE_3D,0,bt,at.width,at.height,at.depth,0,Tt,Yt,at.data);else if(_.isFramebufferTexture){if(oe)if(te)e.texStorage2D(i.TEXTURE_2D,Pt,bt,at.width,at.height);else{let st=at.width,Lt=at.height;for(let Ut=0;Ut<Pt;Ut++)e.texImage2D(i.TEXTURE_2D,Ut,bt,st,Lt,0,Tt,Yt,null),st>>=1,Lt>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){let st=i.canvas;if(st.hasAttribute("layoutsubtree")||st.setAttribute("layoutsubtree","true"),at.parentNode!==st){st.appendChild(at),f.add(_),st.onpaint=Lt=>{let Ut=Lt.changedElements;for(let ut of f)Ut.includes(ut.image)&&(ut.needsUpdate=!0)},st.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,at);else{let Ut=i.RGBA,ut=i.RGBA,Zt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ut,ut,Zt,at)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Vt.length>0){if(te&&oe){let st=_e(Vt[0]);e.texStorage2D(i.TEXTURE_2D,Pt,bt,st.width,st.height)}for(let st=0,Lt=Vt.length;st<Lt;st++)Mt=Vt[st],te?N&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,Tt,Yt,Mt):e.texImage2D(i.TEXTURE_2D,st,bt,Tt,Yt,Mt);_.generateMipmaps=!1}else if(te){if(oe){let st=_e(at);e.texStorage2D(i.TEXTURE_2D,Pt,bt,st.width,st.height)}N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Tt,Yt,at)}else e.texImage2D(i.TEXTURE_2D,0,bt,Tt,Yt,at);d(_)&&A(X),wt.__version=yt.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function Qt(w,_,k){if(_.image.length!==6)return;let X=Me(w,_),K=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+k);let yt=n.get(K);if(K.version!==yt.__version||X===!0){e.activeTexture(i.TEXTURE0+k);let wt=be.getPrimaries(be.workingColorSpace),tt=_.colorSpace===ki?null:be.getPrimaries(_.colorSpace),at=_.colorSpace===ki||wt===tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);let Tt=_.isCompressedTexture||_.image[0].isCompressedTexture,Yt=_.image[0]&&_.image[0].isDataTexture,bt=[];for(let ut=0;ut<6;ut++)!Tt&&!Yt?bt[ut]=p(_.image[ut],!0,s.maxCubemapSize):bt[ut]=Yt?_.image[ut].image:_.image[ut],bt[ut]=Ce(_,bt[ut]);let Mt=bt[0],Vt=r.convert(_.format,_.colorSpace),te=r.convert(_.type),oe=y(_.internalFormat,Vt,te,_.normalized,_.colorSpace),N=_.isVideoTexture!==!0,Pt=yt.__version===void 0||X===!0,st=K.dataReady,Lt=E(_,Mt);ve(i.TEXTURE_CUBE_MAP,_);let Ut;if(Tt){N&&Pt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Lt,oe,Mt.width,Mt.height);for(let ut=0;ut<6;ut++){Ut=bt[ut].mipmaps;for(let Zt=0;Zt<Ut.length;Zt++){let Wt=Ut[Zt];_.format!==ti?Vt!==null?N?st&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Zt,0,0,Wt.width,Wt.height,Vt,Wt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Zt,oe,Wt.width,Wt.height,0,Wt.data):ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Zt,0,0,Wt.width,Wt.height,Vt,te,Wt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Zt,oe,Wt.width,Wt.height,0,Vt,te,Wt.data)}}}else{if(Ut=_.mipmaps,N&&Pt){Ut.length>0&&Lt++;let ut=_e(bt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Lt,oe,ut.width,ut.height)}for(let ut=0;ut<6;ut++)if(Yt){N?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,bt[ut].width,bt[ut].height,Vt,te,bt[ut].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,oe,bt[ut].width,bt[ut].height,0,Vt,te,bt[ut].data);for(let Zt=0;Zt<Ut.length;Zt++){let Oe=Ut[Zt].image[ut].image;N?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Zt+1,0,0,Oe.width,Oe.height,Vt,te,Oe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Zt+1,oe,Oe.width,Oe.height,0,Vt,te,Oe.data)}}else{N?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,Vt,te,bt[ut]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,oe,Vt,te,bt[ut]);for(let Zt=0;Zt<Ut.length;Zt++){let Wt=Ut[Zt];N?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Zt+1,0,0,Vt,te,Wt.image[ut]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Zt+1,oe,Vt,te,Wt.image[ut])}}}d(_)&&A(i.TEXTURE_CUBE_MAP),yt.__version=K.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function Rt(w,_,k,X,K,yt){let wt=r.convert(k.format,k.colorSpace),tt=r.convert(k.type),at=y(k.internalFormat,wt,tt,k.normalized,k.colorSpace),Tt=n.get(_),Yt=n.get(k);if(Yt.__renderTarget=_,!Tt.__hasExternalTextures){let bt=Math.max(1,_.width>>yt),Mt=Math.max(1,_.height>>yt);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?e.texImage3D(K,yt,at,bt,Mt,_.depth,0,wt,tt,null):e.texImage2D(K,yt,at,bt,Mt,0,wt,tt,null)}e.bindFramebuffer(i.FRAMEBUFFER,w),re(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,K,Yt.__webglTexture,0,Bt(_)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,K,Yt.__webglTexture,yt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function qt(w,_,k){if(i.bindRenderbuffer(i.RENDERBUFFER,w),_.depthBuffer){let X=_.depthTexture,K=X&&X.isDepthTexture?X.type:null,yt=M(_.stencilBuffer,K),wt=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;re(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Bt(_),yt,_.width,_.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,Bt(_),yt,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,yt,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,wt,i.RENDERBUFFER,w)}else{let X=_.textures;for(let K=0;K<X.length;K++){let yt=X[K],wt=r.convert(yt.format,yt.colorSpace),tt=r.convert(yt.type),at=y(yt.internalFormat,wt,tt,yt.normalized,yt.colorSpace);re(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Bt(_),at,_.width,_.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,Bt(_),at,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,at,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ae(w,_,k){let X=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,w),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let K=n.get(_.depthTexture);if(K.__renderTarget=_,(!K.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),X){if(K.__webglInit===void 0&&(K.__webglInit=!0,_.depthTexture.addEventListener("dispose",P)),K.__webglTexture===void 0){K.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),ve(i.TEXTURE_CUBE_MAP,_.depthTexture);let Tt=r.convert(_.depthTexture.format),Yt=r.convert(_.depthTexture.type),bt;_.depthTexture.format===_i?bt=i.DEPTH_COMPONENT24:_.depthTexture.format===ss&&(bt=i.DEPTH24_STENCIL8);for(let Mt=0;Mt<6;Mt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,bt,_.width,_.height,0,Tt,Yt,null)}}else ft(_.depthTexture,0);let yt=K.__webglTexture,wt=Bt(_),tt=X?i.TEXTURE_CUBE_MAP_POSITIVE_X+k:i.TEXTURE_2D,at=_.depthTexture.format===ss?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===_i)re(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,at,tt,yt,0,wt):i.framebufferTexture2D(i.FRAMEBUFFER,at,tt,yt,0);else if(_.depthTexture.format===ss)re(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,at,tt,yt,0,wt):i.framebufferTexture2D(i.FRAMEBUFFER,at,tt,yt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function F(w){let _=n.get(w),k=w.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==w.depthTexture){let X=w.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),X){let K=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,X.removeEventListener("dispose",K)};X.addEventListener("dispose",K),_.__depthDisposeCallback=K}_.__boundDepthTexture=X}if(w.depthTexture&&!_.__autoAllocateDepthBuffer)if(k)for(let X=0;X<6;X++)Ae(_.__webglFramebuffer[X],w,X);else{let X=w.texture.mipmaps;X&&X.length>0?Ae(_.__webglFramebuffer[0],w,0):Ae(_.__webglFramebuffer,w,0)}else if(k){_.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[X]),_.__webglDepthbuffer[X]===void 0)_.__webglDepthbuffer[X]=i.createRenderbuffer(),qt(_.__webglDepthbuffer[X],w,!1);else{let K=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=_.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,yt),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,yt)}}else{let X=w.texture.mipmaps;if(X&&X.length>0?e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),qt(_.__webglDepthbuffer,w,!1);else{let K=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,yt),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,yt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function dt(w,_,k){let X=n.get(w);_!==void 0&&Rt(X.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&F(w)}function vt(w){let _=w.texture,k=n.get(w),X=n.get(_);w.addEventListener("dispose",x);let K=w.textures,yt=w.isWebGLCubeRenderTarget===!0,wt=K.length>1;if(wt||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=_.version,a.memory.textures++),yt){k.__webglFramebuffer=[];for(let tt=0;tt<6;tt++)if(_.mipmaps&&_.mipmaps.length>0){k.__webglFramebuffer[tt]=[];for(let at=0;at<_.mipmaps.length;at++)k.__webglFramebuffer[tt][at]=i.createFramebuffer()}else k.__webglFramebuffer[tt]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){k.__webglFramebuffer=[];for(let tt=0;tt<_.mipmaps.length;tt++)k.__webglFramebuffer[tt]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(wt)for(let tt=0,at=K.length;tt<at;tt++){let Tt=n.get(K[tt]);Tt.__webglTexture===void 0&&(Tt.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&re(w)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let tt=0;tt<K.length;tt++){let at=K[tt];k.__webglColorRenderbuffer[tt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[tt]);let Tt=r.convert(at.format,at.colorSpace),Yt=r.convert(at.type),bt=y(at.internalFormat,Tt,Yt,at.normalized,at.colorSpace,w.isXRRenderTarget===!0),Mt=Bt(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Mt,bt,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+tt,i.RENDERBUFFER,k.__webglColorRenderbuffer[tt])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),qt(k.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(yt){e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),ve(i.TEXTURE_CUBE_MAP,_);for(let tt=0;tt<6;tt++)if(_.mipmaps&&_.mipmaps.length>0)for(let at=0;at<_.mipmaps.length;at++)Rt(k.__webglFramebuffer[tt][at],w,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,at);else Rt(k.__webglFramebuffer[tt],w,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0);d(_)&&A(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(wt){for(let tt=0,at=K.length;tt<at;tt++){let Tt=K[tt],Yt=n.get(Tt),bt=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(bt=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(bt,Yt.__webglTexture),ve(bt,Tt),Rt(k.__webglFramebuffer,w,Tt,i.COLOR_ATTACHMENT0+tt,bt,0),d(Tt)&&A(bt)}e.unbindTexture()}else{let tt=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(tt=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(tt,X.__webglTexture),ve(tt,_),_.mipmaps&&_.mipmaps.length>0)for(let at=0;at<_.mipmaps.length;at++)Rt(k.__webglFramebuffer[at],w,_,i.COLOR_ATTACHMENT0,tt,at);else Rt(k.__webglFramebuffer,w,_,i.COLOR_ATTACHMENT0,tt,0);d(_)&&A(tt),e.unbindTexture()}w.depthBuffer&&F(w)}function gt(w){let _=w.textures;for(let k=0,X=_.length;k<X;k++){let K=_[k];if(d(K)){let yt=C(w),wt=n.get(K).__webglTexture;e.bindTexture(yt,wt),A(yt),e.unbindTexture()}}}let St=[],jt=[];function Kt(w){if(w.samples>0){if(re(w)===!1){let _=w.textures,k=w.width,X=w.height,K=i.COLOR_BUFFER_BIT,yt=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,wt=n.get(w),tt=_.length>1;if(tt)for(let Tt=0;Tt<_.length;Tt++)e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer);let at=w.texture.mipmaps;at&&at.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let Tt=0;Tt<_.length;Tt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),tt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,wt.__webglColorRenderbuffer[Tt]);let Yt=n.get(_[Tt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Yt,0)}i.blitFramebuffer(0,0,k,X,0,0,k,X,K,i.NEAREST),l===!0&&(St.length=0,jt.length=0,St.push(i.COLOR_ATTACHMENT0+Tt),w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&(St.push(yt),jt.push(yt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,jt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,St))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),tt)for(let Tt=0;Tt<_.length;Tt++){e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,wt.__webglColorRenderbuffer[Tt]);let Yt=n.get(_[Tt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,Yt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&l){let _=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function Bt(w){return Math.min(s.maxSamples,w.samples)}function re(w){let _=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function I(w){let _=a.render.frame;h.get(w)!==_&&(h.set(w,_),w.update())}function Ce(w,_){let k=w.colorSpace,X=w.format,K=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||k!==Ur&&k!==ki&&(be.getTransfer(k)===Ne?(X!==ti||K!==On)&&ne("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ie("WebGLTextures: Unsupported texture color space:",k)),_}function _e(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=et,this.resetTextureUnits=q,this.getTextureUnits=B,this.setTextureUnits=W,this.setTexture2D=ft,this.setTexture2DArray=Q,this.setTexture3D=rt,this.setTextureCube=ct,this.rebindTextures=dt,this.setupRenderTarget=vt,this.updateRenderTargetMipmap=gt,this.updateMultisampleRenderTarget=Kt,this.setupDepthRenderbuffer=F,this.setupFrameBufferTexture=Rt,this.useMultisampledRTT=re,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Kx(i,t){function e(n,s=ki){let r,a=be.getTransfer(s);if(n===On)return i.UNSIGNED_BYTE;if(n===il)return i.UNSIGNED_SHORT_4_4_4_4;if(n===sl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ph)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===mh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===dh)return i.BYTE;if(n===fh)return i.SHORT;if(n===hr)return i.UNSIGNED_SHORT;if(n===nl)return i.INT;if(n===ui)return i.UNSIGNED_INT;if(n===di)return i.FLOAT;if(n===fi)return i.HALF_FLOAT;if(n===gh)return i.ALPHA;if(n===_h)return i.RGB;if(n===ti)return i.RGBA;if(n===_i)return i.DEPTH_COMPONENT;if(n===ss)return i.DEPTH_STENCIL;if(n===xh)return i.RED;if(n===rl)return i.RED_INTEGER;if(n===rs)return i.RG;if(n===al)return i.RG_INTEGER;if(n===ol)return i.RGBA_INTEGER;if(n===pa||n===ma||n===ga||n===_a)if(a===Ne)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===pa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ma)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ga)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===_a)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===pa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ma)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ga)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===_a)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ll||n===cl||n===hl||n===ul)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ll)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===cl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===hl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ul)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===dl||n===fl||n===pl||n===ml||n===gl||n===xa||n===_l)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===dl||n===fl)return a===Ne?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===pl)return a===Ne?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ml)return r.COMPRESSED_R11_EAC;if(n===gl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===xa)return r.COMPRESSED_RG11_EAC;if(n===_l)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===xl||n===vl||n===yl||n===Sl||n===Ml||n===bl||n===wl||n===El||n===Tl||n===Al||n===Cl||n===Rl||n===Pl||n===Il)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===xl)return a===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===vl)return a===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===yl)return a===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Sl)return a===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ml)return a===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===bl)return a===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===wl)return a===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===El)return a===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Tl)return a===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Al)return a===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Cl)return a===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Rl)return a===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Pl)return a===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Il)return a===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ll||n===Dl||n===Ul)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ll)return a===Ne?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Dl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ul)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Nl||n===Fl||n===va||n===Ol)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Nl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Fl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===va)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ol)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ur?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var jx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Qx=`
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

}`,Vh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Xr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new pn({vertexShader:jx,fragmentShader:Qx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new bn(new ta(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Hh=class extends xi{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,u=null,m=null,g=null,S=typeof XRWebGLBinding<"u",p=new Vh,d={},A=e.getContextAttributes(),C=null,y=null,M=[],E=[],P=new Ct,x=null,T=null,U=new Mn;U.viewport=new Fe;let z=new Mn;z.viewport=new Fe;let $=[U,z],q=new Ko,B=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let it=M[Y];return it===void 0&&(it=new er,M[Y]=it),it.getTargetRaySpace()},this.getControllerGrip=function(Y){let it=M[Y];return it===void 0&&(it=new er,M[Y]=it),it.getGripSpace()},this.getHand=function(Y){let it=M[Y];return it===void 0&&(it=new er,M[Y]=it),it.getHandSpace()};function et(Y){let it=E.indexOf(Y.inputSource);if(it===-1)return;let Et=M[it];Et!==void 0&&(Et.update(Y.inputSource,Y.frame,c||a),Et.dispatchEvent({type:Y.type,data:Y.inputSource}))}function j(){s.removeEventListener("select",et),s.removeEventListener("selectstart",et),s.removeEventListener("selectend",et),s.removeEventListener("squeeze",et),s.removeEventListener("squeezestart",et),s.removeEventListener("squeezeend",et),s.removeEventListener("end",j),s.removeEventListener("inputsourceschange",ft);for(let Y=0;Y<M.length;Y++){let it=E[Y];it!==null&&(E[Y]=null,M[Y].disconnect(it))}B=null,W=null,p.reset();for(let Y in d)delete d[Y];if(t.setRenderTarget(C),m=null,u=null,f=null,s=null,y=null,Me.stop(),n.isPresenting=!1,t.setPixelRatio(x),t.setSize(P.width,P.height,!1),T!==null){let Y=T.camera;Y.fov=T.fov,Y.zoom=T.zoom,Y.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&ne("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&ne("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return f===null&&S&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(C=t.getRenderTarget(),s.addEventListener("select",et),s.addEventListener("selectstart",et),s.addEventListener("selectend",et),s.addEventListener("squeeze",et),s.addEventListener("squeezestart",et),s.addEventListener("squeezeend",et),s.addEventListener("end",j),s.addEventListener("inputsourceschange",ft),A.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(P),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let Et=null,Qt=null,Rt=null;A.depth&&(Rt=A.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Et=A.stencil?ss:_i,Qt=A.stencil?ur:ui);let qt={colorFormat:e.RGBA8,depthFormat:Rt,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(qt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new Fn(u.textureWidth,u.textureHeight,{format:ti,type:On,depthTexture:new Ji(u.textureWidth,u.textureHeight,Qt,void 0,void 0,void 0,void 0,void 0,void 0,Et),stencilBuffer:A.stencil,colorSpace:t.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Et={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,Et),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),y=new Fn(m.framebufferWidth,m.framebufferHeight,{format:ti,type:On,colorSpace:t.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Me.setContext(s),Me.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function ft(Y){for(let it=0;it<Y.removed.length;it++){let Et=Y.removed[it],Qt=E.indexOf(Et);Qt>=0&&(E[Qt]=null,M[Qt].disconnect(Et))}for(let it=0;it<Y.added.length;it++){let Et=Y.added[it],Qt=E.indexOf(Et);if(Qt===-1){for(let qt=0;qt<M.length;qt++)if(qt>=E.length){E.push(Et),Qt=qt;break}else if(E[qt]===null){E[qt]=Et,Qt=qt;break}if(Qt===-1)break}let Rt=M[Qt];Rt&&Rt.connect(Et)}}let Q=new L,rt=new L;function ct(Y,it,Et){Q.setFromMatrixPosition(it.matrixWorld),rt.setFromMatrixPosition(Et.matrixWorld);let Qt=Q.distanceTo(rt),Rt=it.projectionMatrix.elements,qt=Et.projectionMatrix.elements,Ae=Rt[14]/(Rt[10]-1),F=Rt[14]/(Rt[10]+1),dt=(Rt[9]+1)/Rt[5],vt=(Rt[9]-1)/Rt[5],gt=(Rt[8]-1)/Rt[0],St=(qt[8]+1)/qt[0],jt=Ae*gt,Kt=Ae*St,Bt=Qt/(-gt+St),re=Bt*-gt;if(it.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(re),Y.translateZ(Bt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Rt[10]===-1)Y.projectionMatrix.copy(it.projectionMatrix),Y.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{let I=Ae+Bt,Ce=F+Bt,_e=jt-re,w=Kt+(Qt-re),_=dt*F/Ce*I,k=vt*F/Ce*I;Y.projectionMatrix.makePerspective(_e,w,_,k,I,Ce),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function Jt(Y,it){it===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(it.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let it=Y.near,Et=Y.far;p.texture!==null&&(p.depthNear>0&&(it=p.depthNear),p.depthFar>0&&(Et=p.depthFar)),q.near=z.near=U.near=it,q.far=z.far=U.far=Et,(B!==q.near||W!==q.far)&&(s.updateRenderState({depthNear:q.near,depthFar:q.far}),B=q.near,W=q.far),q.layers.mask=Y.layers.mask|6,U.layers.mask=q.layers.mask&-5,z.layers.mask=q.layers.mask&-3;let Qt=Y.parent,Rt=q.cameras;Jt(q,Qt);for(let qt=0;qt<Rt.length;qt++)Jt(Rt[qt],Qt);Rt.length===2?ct(q,U,z):q.projectionMatrix.copy(U.projectionMatrix),T===null&&Y.isPerspectiveCamera&&(T={camera:Y,fov:Y.fov,zoom:Y.zoom}),kt(Y,q,Qt)};function kt(Y,it,Et){Et===null?Y.matrix.copy(it.matrixWorld):(Y.matrix.copy(Et.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(it.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(it.projectionMatrix),Y.projectionMatrixInverse.copy(it.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=js*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(u===null&&m===null))return l},this.setFoveation=function(Y){l=Y,u!==null&&(u.fixedFoveation=Y),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Y)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(q)},this.getCameraTexture=function(Y){return d[Y]};let Te=null;function ve(Y,it){if(h=it.getViewerPose(c||a),g=it,h!==null){let Et=h.views;m!==null&&(t.setRenderTargetFramebuffer(y,m.framebuffer),t.setRenderTarget(y));let Qt=!1;Et.length!==q.cameras.length&&(q.cameras.length=0,Qt=!0);for(let F=0;F<Et.length;F++){let dt=Et[F],vt=null;if(m!==null)vt=m.getViewport(dt);else{let St=f.getViewSubImage(u,dt);vt=St.viewport,F===0&&(t.setRenderTargetTextures(y,St.colorTexture,St.depthStencilTexture),t.setRenderTarget(y))}let gt=$[F];gt===void 0&&(gt=new Mn,gt.layers.enable(F),gt.viewport=new Fe,$[F]=gt),gt.matrix.fromArray(dt.transform.matrix),gt.matrix.decompose(gt.position,gt.quaternion,gt.scale),gt.projectionMatrix.fromArray(dt.projectionMatrix),gt.projectionMatrixInverse.copy(gt.projectionMatrix).invert(),gt.viewport.set(vt.x,vt.y,vt.width,vt.height),F===0&&(q.matrix.copy(gt.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),Qt===!0&&q.cameras.push(gt)}let Rt=s.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){f=n.getBinding();let F=f.getDepthInformation(Et[0]);F&&F.isValid&&F.texture&&p.init(F,s.renderState)}if(Rt&&Rt.includes("camera-access")&&S){t.state.unbindTexture(),f=n.getBinding();for(let F=0;F<Et.length;F++){let dt=Et[F].camera;if(dt){let vt=d[dt];vt||(vt=new Xr,d[dt]=vt);let gt=f.getCameraImage(dt);vt.sourceTexture=gt}}}}for(let Et=0;Et<M.length;Et++){let Qt=E[Et],Rt=M[Et];Qt!==null&&Rt!==void 0&&Rt.update(Qt,it,c||a)}Te&&Te(Y,it),it.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:it}),g=null}let Me=new nf;Me.setAnimationLoop(ve),this.setAnimationLoop=function(Y){Te=Y},this.dispose=function(){}}},tv=new ze,cf=new ce;cf.set(-1,0,0,0,1,0,0,0,1);function ev(i,t){function e(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,wh(i)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function s(p,d,A,C,y){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(p,d):d.isMeshLambertMaterial?(r(p,d),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(p,d),f(p,d)):d.isMeshPhongMaterial?(r(p,d),h(p,d),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(p,d),u(p,d),d.isMeshPhysicalMaterial&&m(p,d,y)):d.isMeshMatcapMaterial?(r(p,d),g(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),S(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(a(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?l(p,d,A,C):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,e(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===In&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,e(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===In&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,e(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,e(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let A=t.get(d),C=A.envMap,y=A.envMapRotation;C&&(p.envMap.value=C,p.envMapRotation.value.setFromMatrix4(tv.makeRotationFromEuler(y)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(cf),p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,p.aoMapTransform))}function a(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform))}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,A,C){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*A,p.scale.value=C*.5,d.map&&(p.map.value=d.map,e(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function h(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function f(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function u(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,A){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===In&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.retroreflectivity>0&&(p.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=A.texture,p.transmissionSamplerSize.value.set(A.width,A.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,d){d.matcap&&(p.matcap.value=d.matcap)}function S(p,d){let A=t.get(d).light;p.referencePosition.value.setFromMatrixPosition(A.matrixWorld),p.nearDistance.value=A.shadow.camera.near,p.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function nv(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,M){let E=M.program;n.uniformBlockBinding(y,E)}function c(y,M){let E=s[y.id];E===void 0&&(p(y),E=h(y),s[y.id]=E,y.addEventListener("dispose",A));let P=M.program;n.updateUBOMapping(y,P);let x=t.render.frame;r[y.id]!==x&&(u(y),r[y.id]=x)}function h(y){let M=f();y.__bindingPointIndex=M;let E=i.createBuffer(),P=y.__size,x=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,P,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,E),E}function f(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return ie("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){let M=s[y.id],E=y.uniforms,P=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let x=0,T=E.length;x<T;x++){let U=E[x];if(Array.isArray(U))for(let z=0,$=U.length;z<$;z++)m(U[z],x,z,P);else m(U,x,0,P)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(y,M,E,P){if(S(y,M,E,P)===!0){let x=y.__offset,T=y.value;if(Array.isArray(T)){let U=0;for(let z=0;z<T.length;z++){let $=T[z],q=d($);g($,y.__data,U),typeof $!="number"&&typeof $!="boolean"&&!$.isMatrix3&&!ArrayBuffer.isView($)&&(U+=q.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,y.__data)}}function g(y,M,E){typeof y=="number"||typeof y=="boolean"?M[0]=y:y.isMatrix3?(M[0]=y.elements[0],M[1]=y.elements[1],M[2]=y.elements[2],M[3]=0,M[4]=y.elements[3],M[5]=y.elements[4],M[6]=y.elements[5],M[7]=0,M[8]=y.elements[6],M[9]=y.elements[7],M[10]=y.elements[8],M[11]=0):ArrayBuffer.isView(y)?M.set(new y.constructor(y.buffer,y.byteOffset,M.length)):y.toArray(M,E)}function S(y,M,E,P){let x=y.value,T=M+"_"+E;if(P[T]===void 0)return typeof x=="number"||typeof x=="boolean"?P[T]=x:ArrayBuffer.isView(x)?P[T]=x.slice():P[T]=x.clone(),!0;{let U=P[T];if(typeof x=="number"||typeof x=="boolean"){if(U!==x)return P[T]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(U.equals(x)===!1)return U.copy(x),!0}}return!1}function p(y){let M=y.uniforms,E=0,P=16;for(let T=0,U=M.length;T<U;T++){let z=Array.isArray(M[T])?M[T]:[M[T]];for(let $=0,q=z.length;$<q;$++){let B=z[$],W=Array.isArray(B.value)?B.value:[B.value];for(let et=0,j=W.length;et<j;et++){let ft=W[et],Q=d(ft),rt=E%P,ct=rt%Q.boundary,Jt=rt+ct;E+=ct,Jt!==0&&P-Jt<Q.storage&&(E+=P-Jt),B.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=E,E+=Q.storage}}}let x=E%P;return x>0&&(E+=P-x),y.__size=E,y.__cache={},this}function d(y){let M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?ne("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(M.boundary=16,M.storage=y.byteLength):ne("WebGLRenderer: Unsupported uniform value type.",y),M}function A(y){let M=y.target;M.removeEventListener("dispose",A);let E=a.indexOf(M.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function C(){for(let y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:C}}var iv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),bi=null;function sv(){return bi===null&&(bi=new wo(iv,16,16,rs,fi),bi.name="DFG_LUT",bi.minFilter=mn,bi.magFilter=mn,bi.wrapS=mi,bi.wrapT=mi,bi.generateMipmaps=!1,bi.needsUpdate=!0),bi}var Xl=class{constructor(t={}){let{canvas:e=wd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:m=On}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let S=m,p=new Set([ol,al,rl]),d=new Set([On,ui,hr,ur,il,sl]),A=new Uint32Array(4),C=new Int32Array(4),y=new L,M=null,E=null,P=[],x=[],T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=hi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let U=this,z=!1,$=null,q=null,B=null,W=null;this._outputColorSpace=Wn;let et=0,j=0,ft=null,Q=-1,rt=null,ct=new Fe,Jt=new Fe,kt=null,Te=new se(0),ve=0,Me=e.width,Y=e.height,it=1,Et=null,Qt=null,Rt=new Fe(0,0,Me,Y),qt=new Fe(0,0,Me,Y),Ae=!1,F=new nr,dt=!1,vt=!1,gt=new ze,St=new L,jt=new Fe,Kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Bt=!1;function re(){return ft===null?it:1}let I=n;function Ce(v,D){return e.getContext(v,D)}let _e,w,_,k,X,K,yt,wt,tt,at,Tt,Yt,bt,Mt,Vt,te,oe,N,Pt,st,Lt,Ut,ut;try{let v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Oe,!1),e.addEventListener("webglcontextrestored",Re,!1),e.addEventListener("webglcontextcreationerror",Tn,!1),I===null){let D="webgl2";if(I=Ce(D,v),I===null)throw Ce(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Zt()}catch(v){throw e.removeEventListener("webglcontextlost",Oe,!1),e.removeEventListener("webglcontextrestored",Re,!1),e.removeEventListener("webglcontextcreationerror",Tn,!1),ie("WebGLRenderer: "+v.message),v}function Zt(){_e=new u_(I),_e.init(),Lt=new Kx(I,_e),w=new e_(I,_e,t,Lt),_=new Zx(I,_e),w.reversedDepthBuffer&&u&&_.buffers.depth.setReversed(!0),q=I.createFramebuffer(),B=I.createFramebuffer(),W=I.createFramebuffer(),k=new p_(I),X=new Nx,K=new Jx(I,_e,_,X,w,Lt,k),yt=new h_(U),wt=new gm(I),Ut=new Q0(I,wt),tt=new d_(I,wt,k,Ut),at=new g_(I,tt,wt,Ut,k),N=new m_(I,w,K),Vt=new n_(X),Tt=new Ux(U,yt,_e,w,Ut,Vt),Yt=new ev(U,X),bt=new Ox,Mt=new Gx(_e),oe=new j0(U,yt,_,at,g,l),te=new Yx(U,at,w),ut=new nv(I,k,w,_),Pt=new t_(I,_e,k),st=new f_(I,_e,k),k.programs=Tt.programs,U.capabilities=w,U.extensions=_e,U.properties=X,U.renderLists=bt,U.shadowMap=te,U.state=_,U.info=k}S!==On&&(T=new x_(S,e.width,e.height,o,s,r));let Wt=new Hh(U,I);this.xr=Wt,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let v=_e.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=_e.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return it},this.setPixelRatio=function(v){v!==void 0&&(it=v,this.setSize(Me,Y,!1))},this.getSize=function(v){return v.set(Me,Y)},this.setSize=function(v,D,Z=!0){if(Wt.isPresenting){ne("WebGLRenderer: Can't change size while VR device is presenting.");return}Me=v,Y=D,e.width=Math.floor(v*it),e.height=Math.floor(D*it),Z===!0&&(e.style.width=v+"px",e.style.height=D+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,v,D)},this.getDrawingBufferSize=function(v){return v.set(Me*it,Y*it).floor()},this.setDrawingBufferSize=function(v,D,Z){Me=v,Y=D,it=Z,e.width=Math.floor(v*Z),e.height=Math.floor(D*Z),this.setViewport(0,0,v,D)},this.setEffects=function(v){if(S===On){ie("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let D=0;D<v.length;D++)if(v[D].isOutputPass===!0){ne("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(ct)},this.getViewport=function(v){return v.copy(Rt)},this.setViewport=function(v,D,Z,V){v.isVector4?Rt.set(v.x,v.y,v.z,v.w):Rt.set(v,D,Z,V),_.viewport(ct.copy(Rt).multiplyScalar(it).round())},this.getScissor=function(v){return v.copy(qt)},this.setScissor=function(v,D,Z,V){v.isVector4?qt.set(v.x,v.y,v.z,v.w):qt.set(v,D,Z,V),_.scissor(Jt.copy(qt).multiplyScalar(it).round())},this.getScissorTest=function(){return Ae},this.setScissorTest=function(v){_.setScissorTest(Ae=v)},this.setOpaqueSort=function(v){Et=v},this.setTransparentSort=function(v){Qt=v},this.getClearColor=function(v){return v.copy(oe.getClearColor())},this.setClearColor=function(){oe.setClearColor(...arguments)},this.getClearAlpha=function(){return oe.getClearAlpha()},this.setClearAlpha=function(){oe.setClearAlpha(...arguments)},this.clear=function(v=!0,D=!0,Z=!0){let V=0;if(v){let G=!1;if(ft!==null){let At=ft.texture.format;G=p.has(At)}if(G){let At=ft.texture.type,Ot=d.has(At),_t=oe.getClearColor(),Ht=oe.getClearAlpha(),Xt=_t.r,he=_t.g,fe=_t.b;Ot?(A[0]=Xt,A[1]=he,A[2]=fe,A[3]=Ht,I.clearBufferuiv(I.COLOR,0,A)):(C[0]=Xt,C[1]=he,C[2]=fe,C[3]=Ht,I.clearBufferiv(I.COLOR,0,C))}else V|=I.COLOR_BUFFER_BIT}D&&(V|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(V|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&I.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),$=v},this.dispose=function(){e.removeEventListener("webglcontextlost",Oe,!1),e.removeEventListener("webglcontextrestored",Re,!1),e.removeEventListener("webglcontextcreationerror",Tn,!1),oe.dispose(),bt.dispose(),Mt.dispose(),X.dispose(),yt.dispose(),at.dispose(),Ut.dispose(),ut.dispose(),Tt.dispose(),Wt.dispose(),Wt.removeEventListener("sessionstart",Da),Wt.removeEventListener("sessionend",kn),Ke.stop()};function Oe(v){v.preventDefault(),Or("WebGLRenderer: Context Lost."),z=!0}function Re(){Or("WebGLRenderer: Context Restored."),z=!1;let v=k.autoReset,D=te.enabled,Z=te.autoUpdate,V=te.needsUpdate,G=te.type;Zt(),k.autoReset=v,te.enabled=D,te.autoUpdate=Z,te.needsUpdate=V,te.type=G}function Tn(v){ie("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function zn(v){let D=v.target;D.removeEventListener("dispose",zn),Ia(D)}function Ia(v){Ls(v),X.remove(v)}function Ls(v){let D=X.get(v).programs;D!==void 0&&(D.forEach(function(Z){Tt.releaseProgram(Z)}),v.isShaderMaterial&&Tt.releaseShaderCache(v))}this.renderBufferDirect=function(v,D,Z,V,G,At){D===null&&(D=Kt);let Ot=G.isMesh&&G.matrixWorld.determinantAffine()<0,_t=Ua(v,D,Z,V,G);_.setMaterial(V,Ot);let Ht=Z.index,Xt=1;if(V.wireframe===!0){if(Ht=tt.getWireframeAttribute(Z),Ht===void 0)return;Xt=2}let he=Z.drawRange,fe=Z.attributes.position,Gt=he.start*Xt,Pe=(he.start+he.count)*Xt;At!==null&&(Gt=Math.max(Gt,At.start*Xt),Pe=Math.min(Pe,(At.start+At.count)*Xt)),Ht!==null?(Gt=Math.max(Gt,0),Pe=Math.min(Pe,Ht.count)):fe!=null&&(Gt=Math.max(Gt,0),Pe=Math.min(Pe,fe.count));let Ze=Pe-Gt;if(Ze<0||Ze===1/0)return;Ut.setup(G,V,_t,Z,Ht);let ee,Ie=Pt;if(Ht!==null&&(ee=wt.get(Ht),Ie=st,Ie.setIndex(ee)),G.isMesh)V.wireframe===!0?(_.setLineWidth(V.wireframeLinewidth*re()),Ie.setMode(I.LINES)):Ie.setMode(I.TRIANGLES);else if(G.isLine){let ln=V.linewidth;ln===void 0&&(ln=1),_.setLineWidth(ln*re()),G.isLineSegments?Ie.setMode(I.LINES):G.isLineLoop?Ie.setMode(I.LINE_LOOP):Ie.setMode(I.LINE_STRIP)}else G.isPoints?Ie.setMode(I.POINTS):G.isSprite&&Ie.setMode(I.TRIANGLES);if(G.isBatchedMesh)if(_e.get("WEBGL_multi_draw"))Ie.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let ln=G._multiDrawStarts,Nt=G._multiDrawCounts,cn=G._multiDrawCount,pe=Ht?wt.get(Ht).bytesPerElement:1,An=X.get(V).currentProgram.getUniforms();for(let Un=0;Un<cn;Un++)An.setValue(I,"_gl_DrawID",Un),Ie.render(ln[Un]/pe,Nt[Un])}else if(G.isInstancedMesh)Ie.renderInstances(Gt,Ze,G.count);else if(Z.isInstancedBufferGeometry){let ln=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Nt=Math.min(Z.instanceCount,ln);Ie.renderInstances(Gt,Ze,Nt)}else Ie.render(Gt,Ze)};function vr(v,D,Z,V){$!==null&&v.isNodeMaterial&&$.setObject(V,v),dt===!0&&Vt.setState(v,Z,!1),v.transparent===!0&&v.side===Si&&v.forceSinglePass===!1?(v.side=In,v.needsUpdate=!0,nn(v,D,V),v.side=es,v.needsUpdate=!0,nn(v,D,V),v.side=Si):nn(v,D,V)}this.compile=function(v,D,Z=null){Z===null&&(Z=v),$!==null&&$.renderStart(v,D,Z),E=Mt.get(Z),E.init(D),x.push(E),Z.traverseVisible(function(G){G.isLight&&G.layers.test(D.layers)&&(E.pushLight(G),G.castShadow&&E.pushShadow(G))}),v!==Z&&v.traverseVisible(function(G){G.isLight&&G.layers.test(D.layers)&&(E.pushLight(G),G.castShadow&&E.pushShadow(G))}),E.setupLights(),$!==null&&$.updateLights(E.state.lightsArray),vt=this.localClippingEnabled,dt=Vt.init(this.clippingPlanes,vt),dt===!0&&Vt.setGlobalState(this.clippingPlanes,D),$!==null&&te.render(E.state.shadowsArray,Z,D);let V=new Set;return v.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let At=G.material;if(At)if(Array.isArray(At))for(let Ot=0;Ot<At.length;Ot++){let _t=At[Ot];vr(_t,Z,D,G),V.add(_t)}else vr(At,Z,D,G),V.add(At)}),E=x.pop(),$!==null&&$.renderEnd(),V},this.compileAsync=function(v,D,Z=null){let V=this.compile(v,D,Z);return new Promise(G=>{function At(){if(V.forEach(function(Ot){let Ht=X.get(Ot).currentProgram;(Ht===void 0||Ht.isReady())&&V.delete(Ot)}),V.size===0){G(v);return}setTimeout(At,10)}_e.get("KHR_parallel_shader_compile")!==null?At():setTimeout(At,10)})};let yr=null;function La(v){yr&&yr(v)}function Da(){Ke.stop()}function kn(){Ke.start()}let Ke=new nf;Ke.setAnimationLoop(La),typeof self<"u"&&Ke.setContext(self),this.setAnimationLoop=function(v){yr=v,Wt.setAnimationLoop(v),v===null?Ke.stop():Ke.start()},Wt.addEventListener("sessionstart",Da),Wt.addEventListener("sessionend",kn),this.render=function(v,D){if(D!==void 0&&D.isCamera!==!0){ie("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;$!==null&&$.renderStart(v,D);let Z=Wt.enabled===!0&&Wt.isPresenting===!0,V=T!==null&&(ft===null||Z)&&T.begin(U,ft);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Wt.enabled===!0&&Wt.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Wt.cameraAutoUpdate===!0&&Wt.updateCamera(D),D=Wt.getCamera()),v.isScene===!0&&v.onBeforeRender(U,v,D,ft),E=Mt.get(v,x.length),E.init(D),E.state.textureUnits=K.getTextureUnits(),x.push(E),gt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),F.setFromProjectionMatrix(gt,oi,D.reversedDepth),vt=this.localClippingEnabled,dt=Vt.init(this.clippingPlanes,vt),M=bt.get(v,P.length),M.init(),P.push(M),Wt.enabled===!0&&Wt.isPresenting===!0){let Ot=U.xr.getDepthSensingMesh();Ot!==null&&Zn(Ot,D,-1/0,U.sortObjects)}Zn(v,D,0,U.sortObjects),M.finish(),$!==null&&$.updateLights(E.state.lightsArray),U.sortObjects===!0&&M.sort(Et,Qt),Bt=Wt.enabled===!1||Wt.isPresenting===!1||Wt.hasDepthSensing()===!1,Bt&&oe.addToRenderList(M,v),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),dt===!0&&Vt.beginShadows();let G=E.state.shadowsArray;if(te.render(G,v,D),dt===!0&&Vt.endShadows(),(V&&T.hasRenderPass())===!1){let Ot=M.opaque,_t=M.transmissive;if(E.setupLights(),D.isArrayCamera){let Ht=D.cameras;if(_t.length>0)for(let Xt=0,he=Ht.length;Xt<he;Xt++){let fe=Ht[Xt];on(Ot,_t,v,fe)}Bt&&oe.render(v);for(let Xt=0,he=Ht.length;Xt<he;Xt++){let fe=Ht[Xt];Jn(M,v,fe,fe.viewport)}}else _t.length>0&&on(Ot,_t,v,D),Bt&&oe.render(v),Jn(M,v,D)}ft!==null&&j===0&&(K.updateMultisampleRenderTarget(ft),K.updateRenderTargetMipmap(ft)),V&&T.end(U),v.isScene===!0&&v.onAfterRender(U,v,D),Ut.resetDefaultState(),Q=-1,rt=null,x.pop(),x.length>0?(E=x[x.length-1],K.setTextureUnits(E.state.textureUnits),dt===!0&&Vt.setGlobalState(U.clippingPlanes,E.state.camera)):E=null,P.pop(),P.length>0?M=P[P.length-1]:M=null,$!==null&&$.renderEnd()};function Zn(v,D,Z,V){if(v.visible===!1)return;if(v.layers.test(D.layers)){if(v.isGroup)Z=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(D);else if(v.isLightProbeGrid)E.pushLightProbeGrid(v);else if(v.isLight)E.pushLight(v),v.castShadow&&E.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||v.intersectsFrustum(F)){V&&jt.setFromMatrixPosition(v.matrixWorld).applyMatrix4(gt);let Ot=at.update(v),_t=v.material;_t.visible&&M.push(v,Ot,_t,Z,jt.z,null,D)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||v.intersectsFrustum(F))){let Ot=at.update(v),_t=v.material;if(V&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),jt.copy(v.boundingSphere.center)):(Ot.boundingSphere===null&&Ot.computeBoundingSphere(),jt.copy(Ot.boundingSphere.center)),jt.applyMatrix4(v.matrixWorld).applyMatrix4(gt)),Array.isArray(_t)){let Ht=Ot.groups;for(let Xt=0,he=Ht.length;Xt<he;Xt++){let fe=Ht[Xt],Gt=_t[fe.materialIndex];Gt&&Gt.visible&&M.push(v,Ot,Gt,Z,jt.z,fe,D)}}else _t.visible&&M.push(v,Ot,_t,Z,jt.z,null,D)}}let At=v.children;for(let Ot=0,_t=At.length;Ot<_t;Ot++)Zn(At[Ot],D,Z,V)}function Jn(v,D,Z,V){let{opaque:G,transmissive:At,transparent:Ot}=v;E.setupLightsView(Z),dt===!0&&Vt.setGlobalState(U.clippingPlanes,Z),V&&_.viewport(ct.copy(V)),G.length>0&&we(G,D,Z),At.length>0&&we(At,D,Z),Ot.length>0&&we(Ot,D,Z),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function on(v,D,Z,V){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[V.id]===void 0){let Gt=_e.has("EXT_color_buffer_half_float")||_e.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[V.id]=new Fn(1,1,{generateMipmaps:!0,type:Gt?fi:On,minFilter:is,samples:Math.max(4,w.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:be.workingColorSpace})}let At=E.state.transmissionRenderTarget[V.id],Ot=V.viewport||ct;At.setSize(Ot.z*U.transmissionResolutionScale,Ot.w*U.transmissionResolutionScale);let _t=U.getRenderTarget(),Ht=U.getActiveCubeFace(),Xt=U.getActiveMipmapLevel();U.setRenderTarget(At),U.getClearColor(Te),ve=U.getClearAlpha(),ve<1&&U.setClearColor(16777215,.5),U.clear(),Bt&&oe.render(Z);let he=U.toneMapping;U.toneMapping=hi;let fe=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),E.setupLightsView(V),dt===!0&&Vt.setGlobalState(U.clippingPlanes,V),we(v,Z,V),K.updateMultisampleRenderTarget(At),K.updateRenderTargetMipmap(At),_e.has("WEBGL_multisampled_render_to_texture")===!1){let Gt=!1;for(let Pe=0,Ze=D.length;Pe<Ze;Pe++){let ee=D[Pe],{object:Ie,geometry:ln,material:Nt,group:cn}=ee;if(Nt.side===Si&&Ie.layers.test(V.layers)){let pe=Nt.side;Nt.side=In,Nt.needsUpdate=!0,Ye(Ie,Z,V,ln,Nt,cn),Nt.side=pe,Nt.needsUpdate=!0,Gt=!0}}Gt===!0&&(K.updateMultisampleRenderTarget(At),K.updateRenderTargetMipmap(At))}U.setRenderTarget(_t,Ht,Xt),U.setClearColor(Te,ve),fe!==void 0&&(V.viewport=fe),U.toneMapping=he}function we(v,D,Z){let V=D.isScene===!0?D.overrideMaterial:null;for(let G=0,At=v.length;G<At;G++){let Ot=v[G],{object:_t,geometry:Ht,group:Xt}=Ot,he=Ot.material;he.allowOverride===!0&&V!==null&&(he=V),_t.layers.test(Z.layers)&&Ye(_t,D,Z,Ht,he,Xt)}}function Ye(v,D,Z,V,G,At){$!==null&&G.isNodeMaterial&&$.setObject(v,G),v.onBeforeRender(U,D,Z,V,G,At),v.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),G.onBeforeRender(U,D,Z,V,v,At),G.transparent===!0&&G.side===Si&&G.forceSinglePass===!1?(G.side=In,G.needsUpdate=!0,U.renderBufferDirect(Z,D,V,G,v,At),G.side=es,G.needsUpdate=!0,U.renderBufferDirect(Z,D,V,G,v,At),G.side=Si):U.renderBufferDirect(Z,D,V,G,v,At),v.onAfterRender(U,D,Z,V,G,At)}function nn(v,D,Z){D.isScene!==!0&&(D=Kt);let V=X.get(v),G=E.state.lights,At=E.state.shadowsArray,Ot=G.state.version,_t=Tt.getParameters(v,G.state,At,D,Z,E.state.lightProbeGridArray),Ht=Tt.getProgramCacheKey(_t),Xt=V.programs;V.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?D.environment:null,V.fog=D.fog;let he=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;V.envMap=yt.get(v.envMap||V.environment,he),V.envMapRotation=V.environment!==null&&v.envMap===null?D.environmentRotation:v.envMapRotation,Xt===void 0&&(v.addEventListener("dispose",zn),Xt=new Map,V.programs=Xt);let fe=Xt.get(Ht);if(fe!==void 0){if(V.currentProgram===fe&&V.lightsStateVersion===Ot)return Mr(v,_t),fe}else _t.uniforms=Tt.getUniforms(v),$!==null&&v.isNodeMaterial&&$.build(v,Z,_t),v.onBeforeCompile(_t,U),fe=Tt.acquireProgram(_t,Ht),Xt.set(Ht,fe),V.uniforms=_t.uniforms;let Gt=V.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Gt.clippingPlanes=Vt.uniform),Mr(v,_t),V.needsLights=cs(v),V.lightsStateVersion=Ot,V.needsLights&&(Gt.ambientLightColor.value=G.state.ambient,Gt.lightProbe.value=G.state.probe,Gt.sunLights.value=G.state.sun,Gt.sunLightShadows.value=G.state.sunShadow,Gt.directionalLights.value=G.state.directional,Gt.directionalLightShadows.value=G.state.directionalShadow,Gt.spotLights.value=G.state.spot,Gt.spotLightShadows.value=G.state.spotShadow,Gt.rectAreaLights.value=G.state.rectArea,Gt.ltc_1.value=G.state.rectAreaLTC1,Gt.ltc_2.value=G.state.rectAreaLTC2,Gt.pointLights.value=G.state.point,Gt.pointLightShadows.value=G.state.pointShadow,Gt.hemisphereLights.value=G.state.hemi,Gt.sunShadowMatrix.value=G.state.sunShadowMatrix,Gt.sunShadowCascade.value=G.state.sunShadowCascade,Gt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Gt.spotLightMatrix.value=G.state.spotLightMatrix,Gt.spotLightMap.value=G.state.spotLightMap,Gt.pointShadowMatrix.value=G.state.pointShadowMatrix),V.lightProbeGrid=E.state.lightProbeGridArray.length>0,V.currentProgram=fe,V.uniformsList=null,fe}function Sr(v){if(v.uniformsList===null){let D=v.currentProgram.getUniforms();v.uniformsList=pr.seqWithValue(D.seq,v.uniforms)}return v.uniformsList}function Mr(v,D){let Z=X.get(v);Z.outputColorSpace=D.outputColorSpace,Z.batching=D.batching,Z.batchingColor=D.batchingColor,Z.instancing=D.instancing,Z.instancingColor=D.instancingColor,Z.instancingMorph=D.instancingMorph,Z.skinning=D.skinning,Z.morphTargets=D.morphTargets,Z.morphNormals=D.morphNormals,Z.morphColors=D.morphColors,Z.morphTargetsCount=D.morphTargetsCount,Z.numClippingPlanes=D.numClippingPlanes,Z.numIntersection=D.numClipIntersection,Z.vertexAlphas=D.vertexAlphas,Z.vertexTangents=D.vertexTangents,Z.toneMapping=D.toneMapping}function hc(v,D){if(v.length===0)return null;if(v.length===1)return v[0].texture!==null?v[0]:null;y.setFromMatrixPosition(D.matrixWorld);for(let Z=0,V=v.length;Z<V;Z++){let G=v[Z];if(G.texture!==null&&G.boundingBox.containsPoint(y))return G}return null}function Ua(v,D,Z,V,G){D.isScene!==!0&&(D=Kt),K.resetTextureUnits();let At=D.fog,Ot=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?D.environment:null,_t=ft===null?U.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:be.workingColorSpace,Ht=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Xt=yt.get(V.envMap||Ot,Ht),he=V.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,fe=!!Z.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Gt=!!Z.morphAttributes.position,Pe=!!Z.morphAttributes.normal,Ze=!!Z.morphAttributes.color,ee=hi;V.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(ee=U.toneMapping);let Ie=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,ln=Ie!==void 0?Ie.length:0,Nt=X.get(V),cn=E.state.lights;if(dt===!0&&(vt===!0||v!==rt)){let ye=v===rt&&V.id===Q;Vt.setState(V,v,ye)}let pe=!1;V.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==cn.state.version||Nt.outputColorSpace!==_t||G.isBatchedMesh&&Nt.batching===!1||!G.isBatchedMesh&&Nt.batching===!0||G.isBatchedMesh&&Nt.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&Nt.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&Nt.instancing===!1||!G.isInstancedMesh&&Nt.instancing===!0||G.isSkinnedMesh&&Nt.skinning===!1||!G.isSkinnedMesh&&Nt.skinning===!0||G.isInstancedMesh&&Nt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Nt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Nt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Nt.instancingMorph===!1&&G.morphTexture!==null||Nt.envMap!==Xt||V.fog===!0&&Nt.fog!==At||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==Vt.numPlanes||Nt.numIntersection!==Vt.numIntersection)||Nt.vertexAlphas!==he||Nt.vertexTangents!==fe||Nt.morphTargets!==Gt||Nt.morphNormals!==Pe||Nt.morphColors!==Ze||Nt.toneMapping!==ee||Nt.morphTargetsCount!==ln||!!Nt.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(pe=!0):(pe=!0,Nt.__version=V.version);let An=Nt.currentProgram;pe===!0&&(An=nn(V,D,G),$&&V.isNodeMaterial&&$.onUpdateProgram(V,An,Nt));let Un=!1,Cn=!1,Ii=!1,Le=An.getUniforms(),Xe=Nt.uniforms;if(_.useProgram(An.program)&&(Un=!0,Cn=!0,Ii=!0),V.id!==Q&&(Q=V.id,Cn=!0),Nt.needsLights){let ye=hc(E.state.lightProbeGridArray,G);Nt.lightProbeGrid!==ye&&(Nt.lightProbeGrid=ye,Cn=!0)}if(Un||rt!==v){_.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),Le.setValue(I,"projectionMatrix",v.projectionMatrix),Le.setValue(I,"viewMatrix",v.matrixWorldInverse);let ei=Le.map.cameraPosition;ei!==void 0&&ei.setValue(I,St.setFromMatrixPosition(v.matrixWorld)),w.logarithmicDepthBuffer&&Le.setValue(I,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Le.setValue(I,"isOrthographic",v.isOrthographicCamera===!0),rt!==v&&(rt=v,Cn=!0,Ii=!0)}if(Nt.needsLights&&(cn.state.sunShadowMap.length>0&&Le.setValue(I,"sunShadowMap",cn.state.sunShadowMap,K),cn.state.directionalShadowMap.length>0&&Le.setValue(I,"directionalShadowMap",cn.state.directionalShadowMap,K),cn.state.spotShadowMap.length>0&&Le.setValue(I,"spotShadowMap",cn.state.spotShadowMap,K),cn.state.pointShadowMap.length>0&&Le.setValue(I,"pointShadowMap",cn.state.pointShadowMap,K)),G.isSkinnedMesh){Le.setOptional(I,G,"bindMatrix"),Le.setOptional(I,G,"bindMatrixInverse");let ye=G.skeleton;ye&&(ye.boneTexture===null&&ye.computeBoneTexture(),Le.setValue(I,"boneTexture",ye.boneTexture,K))}G.isBatchedMesh&&(Le.setOptional(I,G,"batchingTexture"),Le.setValue(I,"batchingTexture",G._matricesTexture,K),Le.setOptional(I,G,"batchingIdTexture"),Le.setValue(I,"batchingIdTexture",G._indirectTexture,K),Le.setOptional(I,G,"batchingColorTexture"),G._colorsTexture!==null&&Le.setValue(I,"batchingColorTexture",G._colorsTexture,K));let Kn=Z.morphAttributes;if((Kn.position!==void 0||Kn.normal!==void 0||Kn.color!==void 0)&&N.update(G,Z,An),(Cn||Nt.receiveShadow!==G.receiveShadow)&&(Nt.receiveShadow=G.receiveShadow,Le.setValue(I,"receiveShadow",G.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&D.environment!==null&&(Xe.envMapIntensity.value=D.environmentIntensity),Xe.dfgLUT!==void 0&&(Xe.dfgLUT.value=sv()),Cn){if(Le.setValue(I,"toneMappingExposure",U.toneMappingExposure),Nt.needsLights&&uc(Xe,Ii),At&&V.fog===!0&&Yt.refreshFogUniforms(Xe,At),Yt.refreshMaterialUniforms(Xe,V,it,Y,E.state.transmissionRenderTarget[v.id]),Nt.needsLights&&Nt.lightProbeGrid){let ye=Nt.lightProbeGrid;Xe.probesSH.value=ye.texture,Xe.probesMin.value.copy(ye.boundingBox.min),Xe.probesMax.value.copy(ye.boundingBox.max),Xe.probesResolution.value.copy(ye.resolution)}pr.upload(I,Sr(Nt),Xe,K)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(pr.upload(I,Sr(Nt),Xe,K),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Le.setValue(I,"center",G.center),Le.setValue(I,"modelViewMatrix",G.modelViewMatrix),Le.setValue(I,"normalMatrix",G.normalMatrix),Le.setValue(I,"modelMatrix",G.matrixWorld),V.uniformsGroups!==void 0){let ye=V.uniformsGroups;for(let ei=0,b=ye.length;ei<b;ei++){let R=ye[ei];ut.update(R,An),ut.bind(R,An)}}return An}function uc(v,D){v.ambientLightColor.needsUpdate=D,v.lightProbe.needsUpdate=D,v.sunLights.needsUpdate=D,v.sunLightShadows.needsUpdate=D,v.directionalLights.needsUpdate=D,v.directionalLightShadows.needsUpdate=D,v.pointLights.needsUpdate=D,v.pointLightShadows.needsUpdate=D,v.spotLights.needsUpdate=D,v.spotLightShadows.needsUpdate=D,v.rectAreaLights.needsUpdate=D,v.hemisphereLights.needsUpdate=D}function cs(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return et},this.getActiveMipmapLevel=function(){return j},this.getRenderTarget=function(){return ft},this.setRenderTargetTextures=function(v,D,Z){let V=X.get(v);V.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),X.get(v.texture).__webglTexture=D,X.get(v.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:Z,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,D){let Z=X.get(v);Z.__webglFramebuffer=D,Z.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(v,D=0,Z=0){ft=v,et=D,j=Z;let V=null,G=!1,At=!1;if(v){let _t=X.get(v);if(_t.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(I.FRAMEBUFFER,_t.__webglFramebuffer),ct.copy(v.viewport),Jt.copy(v.scissor),kt=v.scissorTest,_.viewport(ct),_.scissor(Jt),_.setScissorTest(kt),Q=-1;return}else if(_t.__webglFramebuffer===void 0)K.setupRenderTarget(v);else if(_t.__hasExternalTextures)K.rebindTextures(v,X.get(v.texture).__webglTexture,X.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let he=v.depthTexture;if(_t.__boundDepthTexture!==he){if(he!==null&&X.has(he)&&(v.width!==he.image.width||v.height!==he.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(v)}}let Ht=v.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(At=!0);let Xt=X.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Xt[D])?V=Xt[D][Z]:V=Xt[D],G=!0):v.samples>0&&K.useMultisampledRTT(v)===!1?V=X.get(v).__webglMultisampledFramebuffer:Array.isArray(Xt)?V=Xt[Z]:V=Xt,ct.copy(v.viewport),Jt.copy(v.scissor),kt=v.scissorTest}else ct.copy(Rt).multiplyScalar(it).floor(),Jt.copy(qt).multiplyScalar(it).floor(),kt=Ae;if(Z!==0&&(V=q),_.bindFramebuffer(I.FRAMEBUFFER,V)&&_.drawBuffers(v,V),_.viewport(ct),_.scissor(Jt),_.setScissorTest(kt),G){let _t=X.get(v.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+D,_t.__webglTexture,Z)}else if(At){let _t=D;for(let Ht=0;Ht<v.textures.length;Ht++){let Xt=X.get(v.textures[Ht]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Ht,Xt.__webglTexture,Z,_t)}}else if(v!==null&&Z!==0){let _t=X.get(v.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,_t.__webglTexture,Z)}Q=-1};function Vn(v){let D=X.get(v);return(D.__readFormat!==v.format||D.__readType!==v.type)&&(D.__readFormat=v.format,D.__readType=v.type,D.__formatReadable=w.textureFormatReadable(v.format),D.__typeReadable=w.textureTypeReadable(v.type)),D}this.readRenderTargetPixels=function(v,D,Z,V,G,At,Ot,_t=0){if(!(v&&v.isWebGLRenderTarget)){ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ht=X.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Ot!==void 0&&(Ht=Ht[Ot]),Ht){_.bindFramebuffer(I.FRAMEBUFFER,Ht);try{let Xt=v.textures[_t],he=Xt.format,fe=Xt.type;v.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+_t);let Gt=Vn(Xt);if(Gt.__formatReadable===!1){ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Gt.__typeReadable===!1){ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=v.width-V&&Z>=0&&Z<=v.height-G&&I.readPixels(D,Z,V,G,Lt.convert(he),Lt.convert(fe),At)}finally{let Xt=ft!==null?X.get(ft).__webglFramebuffer:null;_.bindFramebuffer(I.FRAMEBUFFER,Xt)}}},this.readRenderTargetPixelsAsync=async function(v,D,Z,V,G,At,Ot,_t=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ht=X.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Ot!==void 0&&(Ht=Ht[Ot]),Ht)if(D>=0&&D<=v.width-V&&Z>=0&&Z<=v.height-G){_.bindFramebuffer(I.FRAMEBUFFER,Ht);let Xt=v.textures[_t],he=Xt.format,fe=Xt.type;v.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+_t);let Gt=Vn(Xt);if(Gt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Gt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Pe=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Pe),I.bufferData(I.PIXEL_PACK_BUFFER,At.byteLength,I.STREAM_READ),I.readPixels(D,Z,V,G,Lt.convert(he),Lt.convert(fe),0),I.bindBuffer(I.PIXEL_PACK_BUFFER,null);let Ze=ft!==null?X.get(ft).__webglFramebuffer:null;_.bindFramebuffer(I.FRAMEBUFFER,Ze);let ee=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Td(I,ee,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Pe),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,At),I.bindBuffer(I.PIXEL_PACK_BUFFER,null),I.deleteBuffer(Pe),I.deleteSync(ee),At}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,D=null,Z=0){let V=Math.pow(2,-Z),G=Math.floor(v.image.width*V),At=Math.floor(v.image.height*V),Ot=D!==null?D.x:0,_t=D!==null?D.y:0;K.setTexture2D(v,0),I.copyTexSubImage2D(I.TEXTURE_2D,Z,0,0,Ot,_t,G,At),_.unbindTexture()},this.copyTextureToTexture=function(v,D,Z=null,V=null,G=0,At=0){let Ot,_t,Ht,Xt,he,fe,Gt,Pe,Ze,ee=v.isCompressedTexture?v.mipmaps[At]:v.image;if(Z!==null)Ot=Z.max.x-Z.min.x,_t=Z.max.y-Z.min.y,Ht=Z.isBox3?Z.max.z-Z.min.z:1,Xt=Z.min.x,he=Z.min.y,fe=Z.isBox3?Z.min.z:0;else{let Xe=Math.pow(2,-G);Ot=Math.floor(ee.width*Xe),_t=Math.floor(ee.height*Xe),v.isDataArrayTexture?Ht=ee.depth:v.isData3DTexture?Ht=Math.floor(ee.depth*Xe):Ht=1,Xt=0,he=0,fe=0}V!==null?(Gt=V.x,Pe=V.y,Ze=V.z):(Gt=0,Pe=0,Ze=0);let Ie=Lt.convert(D.format),ln=Lt.convert(D.type),Nt;D.isData3DTexture?(K.setTexture3D(D,0),Nt=I.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(K.setTexture2DArray(D,0),Nt=I.TEXTURE_2D_ARRAY):(K.setTexture2D(D,0),Nt=I.TEXTURE_2D),_.activeTexture(I.TEXTURE0),_.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,D.flipY),_.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),_.pixelStorei(I.UNPACK_ALIGNMENT,D.unpackAlignment);let cn=_.getParameter(I.UNPACK_ROW_LENGTH),pe=_.getParameter(I.UNPACK_IMAGE_HEIGHT),An=_.getParameter(I.UNPACK_SKIP_PIXELS),Un=_.getParameter(I.UNPACK_SKIP_ROWS),Cn=_.getParameter(I.UNPACK_SKIP_IMAGES);_.pixelStorei(I.UNPACK_ROW_LENGTH,ee.width),_.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ee.height),_.pixelStorei(I.UNPACK_SKIP_PIXELS,Xt),_.pixelStorei(I.UNPACK_SKIP_ROWS,he),_.pixelStorei(I.UNPACK_SKIP_IMAGES,fe);let Ii=v.isDataArrayTexture||v.isData3DTexture,Le=D.isDataArrayTexture||D.isData3DTexture;if(v.isDepthTexture){let Xe=X.get(v),Kn=X.get(D),ye=X.get(Xe.__renderTarget),ei=X.get(Kn.__renderTarget);_.bindFramebuffer(I.READ_FRAMEBUFFER,ye.__webglFramebuffer),_.bindFramebuffer(I.DRAW_FRAMEBUFFER,ei.__webglFramebuffer);for(let b=0;b<Ht;b++)Ii&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,X.get(v).__webglTexture,G,fe+b),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,X.get(D).__webglTexture,At,Ze+b)),I.blitFramebuffer(Xt,he,Ot,_t,Gt,Pe,Ot,_t,I.DEPTH_BUFFER_BIT,I.NEAREST);_.bindFramebuffer(I.READ_FRAMEBUFFER,null),_.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(G!==0||v.isRenderTargetTexture||X.has(v)){let Xe=X.get(v),Kn=X.get(D);_.bindFramebuffer(I.READ_FRAMEBUFFER,B),_.bindFramebuffer(I.DRAW_FRAMEBUFFER,W);for(let ye=0;ye<Ht;ye++)Ii?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Xe.__webglTexture,G,fe+ye):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Xe.__webglTexture,G),Le?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Kn.__webglTexture,At,Ze+ye):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Kn.__webglTexture,At),G!==0?I.blitFramebuffer(Xt,he,Ot,_t,Gt,Pe,Ot,_t,I.COLOR_BUFFER_BIT,I.NEAREST):Le?I.copyTexSubImage3D(Nt,At,Gt,Pe,Ze+ye,Xt,he,Ot,_t):I.copyTexSubImage2D(Nt,At,Gt,Pe,Xt,he,Ot,_t);_.bindFramebuffer(I.READ_FRAMEBUFFER,null),_.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Le?v.isDataTexture||v.isData3DTexture?I.texSubImage3D(Nt,At,Gt,Pe,Ze,Ot,_t,Ht,Ie,ln,ee.data):D.isCompressedArrayTexture?I.compressedTexSubImage3D(Nt,At,Gt,Pe,Ze,Ot,_t,Ht,Ie,ee.data):I.texSubImage3D(Nt,At,Gt,Pe,Ze,Ot,_t,Ht,Ie,ln,ee):v.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,At,Gt,Pe,Ot,_t,Ie,ln,ee.data):v.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,At,Gt,Pe,ee.width,ee.height,Ie,ee.data):I.texSubImage2D(I.TEXTURE_2D,At,Gt,Pe,Ot,_t,Ie,ln,ee);_.pixelStorei(I.UNPACK_ROW_LENGTH,cn),_.pixelStorei(I.UNPACK_IMAGE_HEIGHT,pe),_.pixelStorei(I.UNPACK_SKIP_PIXELS,An),_.pixelStorei(I.UNPACK_SKIP_ROWS,Un),_.pixelStorei(I.UNPACK_SKIP_IMAGES,Cn),At===0&&D.generateMipmaps&&I.generateMipmap(Nt),_.unbindTexture()},this.initRenderTarget=function(v){X.get(v).__webglFramebuffer===void 0&&K.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?K.setTextureCube(v,0):v.isData3DTexture?K.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?K.setTexture2DArray(v,0):K.setTexture2D(v,0),_.unbindTexture()},this.resetState=function(){et=0,j=0,ft=null,_.reset(),Ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=be._getDrawingBufferColorSpace(t),e.unpackColorSpace=be._getUnpackColorSpace()}};var uf=new Xn,Yl=new L,Vi=class extends la{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new sn(t,3)),this.setAttribute("uv",new sn(e,2))}applyMatrix4(t){let e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new ts(e,6,1);return this.setAttribute("instanceStart",new ci(n,3,0)),this.setAttribute("instanceEnd",new ci(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new ts(e,6,1);return this.setAttribute("instanceColorStart",new ci(n,3,0)),this.setAttribute("instanceColorEnd",new ci(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new ea(t.geometry)),this}fromLineSegments(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xn);let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),uf.setFromBufferAttribute(e),this.boundingBox.union(uf))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qn),this.boundingBox===null&&this.computeBoundingBox();let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Yl.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Yl)),Yl.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Yl));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}};It.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Ct},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Ln.line={uniforms:ya.merge([It.common,It.fog,It.line]),vertexShader:`
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
		`};var wi=class extends pn{constructor(t){super({type:"LineMaterial",uniforms:ya.clone(Ln.line.uniforms),vertexShader:Ln.line.vertexShader,fragmentShader:Ln.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0!==this.worldUnits&&(this.needsUpdate=!0),t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var Gh=new Fe,df=new L,ff=new L,gn=new Fe,_n=new Fe,Ei=new Fe,Wh=new L,Xh=new ze,xn=new ha,pf=new L,Zl=new Xn,Jl=new Qn,Ti=new Fe,Ai,Es;function mf(i,t,e){return Ti.set(0,0,-t,1).applyMatrix4(i.projectionMatrix),Ti.multiplyScalar(1/Ti.w),Ti.x=Es/e.width,Ti.y=Es/e.height,Ti.applyMatrix4(i.projectionMatrixInverse),Ti.multiplyScalar(1/Ti.w),Math.abs(Math.max(Ti.x,Ti.y))}function rv(i,t){let e=i.matrixWorld,n=i.geometry,s=n.attributes.instanceStart,r=n.attributes.instanceEnd,a=Math.min(n.instanceCount,s.count);for(let o=0,l=a;o<l;o++){xn.start.fromBufferAttribute(s,o),xn.end.fromBufferAttribute(r,o),xn.applyMatrix4(e);let c=new L,h=new L;Ai.distanceSqToSegment(xn.start,xn.end,h,c),h.distanceTo(c)<Es*.5&&t.push({point:h,pointOnLine:c,distance:Ai.origin.distanceTo(h),object:i,face:null,faceIndex:o,uv:null,uv1:null})}}function av(i,t,e){let n=t.projectionMatrix,r=i.material.resolution,a=i.matrixWorld,o=i.geometry,l=o.attributes.instanceStart,c=o.attributes.instanceEnd,h=Math.min(o.instanceCount,l.count),f=-t.near;Ai.at(1,Ei),Ei.w=1,Ei.applyMatrix4(t.matrixWorldInverse),Ei.applyMatrix4(n),Ei.multiplyScalar(1/Ei.w),Ei.x*=r.x/2,Ei.y*=r.y/2,Ei.z=0,Wh.copy(Ei),Xh.multiplyMatrices(t.matrixWorldInverse,a);for(let u=0,m=h;u<m;u++){if(gn.fromBufferAttribute(l,u),_n.fromBufferAttribute(c,u),gn.w=1,_n.w=1,gn.applyMatrix4(Xh),_n.applyMatrix4(Xh),gn.z>f&&_n.z>f)continue;if(gn.z>f){let C=gn.z-_n.z,y=(gn.z-f)/C;gn.lerp(_n,y)}else if(_n.z>f){let C=_n.z-gn.z,y=(_n.z-f)/C;_n.lerp(gn,y)}gn.applyMatrix4(n),_n.applyMatrix4(n),gn.multiplyScalar(1/gn.w),_n.multiplyScalar(1/_n.w),gn.x*=r.x/2,gn.y*=r.y/2,_n.x*=r.x/2,_n.y*=r.y/2,xn.start.copy(gn),xn.start.z=0,xn.end.copy(_n),xn.end.z=0;let S=xn.closestPointToPointParameter(Wh,!0);xn.at(S,pf);let p=Mh.lerp(gn.z,_n.z,S),d=p>=-1&&p<=1,A=Wh.distanceTo(pf)<Es*.5;if(d&&A){xn.start.fromBufferAttribute(l,u),xn.end.fromBufferAttribute(c,u),xn.start.applyMatrix4(a),xn.end.applyMatrix4(a);let C=new L,y=new L;Ai.distanceSqToSegment(xn.start,xn.end,y,C),e.push({point:y,pointOnLine:C,distance:Ai.origin.distanceTo(y),object:i,face:null,faceIndex:u,uv:null,uv1:null})}}}var Ts=class extends bn{constructor(t=new Vi,e=new wi({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,s=new Float32Array(2*e.count);for(let a=0,o=0,l=e.count;a<l;a++,o+=2)df.fromBufferAttribute(e,a),ff.fromBufferAttribute(n,a),s[o]=o===0?0:s[o-1],s[o+1]=s[o]+df.distanceTo(ff);let r=new ts(s,2,1);return t.setAttribute("instanceDistanceStart",new ci(r,1,0)),t.setAttribute("instanceDistanceEnd",new ci(r,1,1)),this}raycast(t,e){let n=this.material.worldUnits,s=t.camera;if(s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.'),n===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;let r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;Ai=t.ray;let a=this.matrixWorld,o=this.geometry,l=this.material;Es=l.linewidth+r,o.boundingSphere===null&&o.computeBoundingSphere(),Jl.copy(o.boundingSphere).applyMatrix4(a);let c;if(n)c=Es*.5;else{let f=Math.max(s.near,Jl.distanceToPoint(Ai.origin));c=mf(s,f,l.resolution)}if(Jl.radius+=c,Ai.intersectsSphere(Jl)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),Zl.copy(o.boundingBox).applyMatrix4(a);let h;if(n)h=Es*.5;else{let f=Math.max(s.near,Zl.distanceToPoint(Ai.origin));h=mf(s,f,l.resolution)}Zl.expandByScalar(h),Ai.intersectsBox(Zl)!==!1&&(n?rv(this,e):av(this,s,e))}onBeforeRender(t){let e=this.material.uniforms;e&&e.resolution&&(t.getViewport(Gh),this.material.uniforms.resolution.value.set(Gh.z,Gh.w))}};function gf(i){let t=window.__ROD__,{scene:e,camera:n,goal:s,cur:r,invalidate:a,K:o,CX:l,CY:c,mcs:h,q:f,list:u,clamp:m,norm:g,munis:S}=i,p=b=>document.querySelector(b),d=b=>String(b).replace(/[<>&"]/g,R=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[R]),A=(b,R)=>[(b-l)*o,(R-c)*o],C=.06,y=t.segs.map(b=>{let R=[],O=[0];for(let H=0;H<b.length;H+=2){let J=A(b[H],b[H+1]);R.length&&O.push(O[O.length-1]+Math.hypot(J[0]-R[R.length-1][0],J[1]-R[R.length-1][1])),R.push(J)}return{p:R,c:O,L:O[O.length-1]}}),M=t.stops.map(([b,R,O,H])=>({n:b,id:H,w:A(R,O),fams:new Set})),E=t.routes.map(([b,R,O])=>({s:b,l:R,c:O})),P=(b,R)=>{let O=b.match(/^R([A-Z]*)(\d*)(.*)$/),H=R.match(/^R([A-Z]*)(\d*)(.*)$/);return(O[1]||"").localeCompare(H[1]||"")||(+O[2]||0)-(+H[2]||0)||O[3].localeCompare(H[3])},x=[...new Set(E.map(b=>b.s))].sort(P),T={};E.forEach(b=>{T[b.s]||(T[b.s]=b.c)});let U=t.pats.map(([b,R,O])=>({stops:b,t:R,segs:O})),z=t.trips.map(([b,R,O,H,J],ot)=>({day:b,pat:U[R],fam:E[O].s,c:E[O].c,t0:H,num:J,tid:t.tids[ot]})),$={};x.forEach(b=>$[b]=new Set),z.forEach(b=>{b.pat.segs.forEach(R=>$[b.fam].add(R)),b.pat.stops.forEach(R=>M[R].fams.add(b.fam))});let q=t.days.map((b,R)=>z.filter(O=>O.day===R)),B=new Map(z.map(b=>[b.tid,b])),W=[124.87404143965449,479.9901289885639,124.62688710863031,249.99562739146893,486.739003764725,248.0364802782304,2037.1344308355726],et=Math.PI/180,j=3.922*et,ft=-39.705*et;function Q(b,R){let O=b*et+j,H=R*et,J=Math.cos(ft),ot=Math.sin(ft),lt=Math.cos(H),ht=Math.cos(O)*lt,Dt=Math.sin(O)*lt,zt=Math.sin(H),Ft=Math.atan2(Dt,ht*J-zt*ot),pt=Math.asin(zt*J+ht*ot),nt=Math.sqrt(2/(1+Math.cos(Ft)*Math.cos(pt))),xt=nt*Math.cos(pt)*Math.sin(Ft),mt=nt*Math.sin(pt),[le,ae,me,$e,ge,Ge,De]=W;return A((ae+le*xt-ge)*De,(Ge-($e-me*mt))*De)}let rt=new Map(M.map((b,R)=>[b.id,R]));function ct(b){if(b.g)return b.g;let R=[],O=[],H=[0],J=0;return b.segs.forEach((ot,lt)=>{let ht=y[ot];ht.p.forEach((Dt,zt)=>{lt&&!zt||(R.push(Dt),O.push(J+ht.c[zt]))}),J+=ht.L,H.push(J)}),b.g={pts:R,cum:O,stopD:H}}function Jt(b,R,O,H){let J=1e18,ot=0;for(let lt=0;lt+1<b.pts.length;lt++){if(b.cum[lt+1]<O||b.cum[lt]>H)continue;let ht=b.pts[lt],Dt=b.pts[lt+1],zt=Dt[0]-ht[0],Ft=Dt[1]-ht[1],pt=zt*zt+Ft*Ft||1e-9,nt=Math.max(0,Math.min(1,((R[0]-ht[0])*zt+(R[1]-ht[1])*Ft)/pt)),xt=ht[0]+zt*nt-R[0],mt=ht[1]+Ft*nt-R[1],le=xt*xt+mt*mt;le<J&&(J=le,ot=b.cum[lt]+nt*(b.cum[lt+1]-b.cum[lt]))}return{d:ot,err:Math.sqrt(J)}}function kt(b,R){let O=0,H=b.cum.length-1;if(R<=0)return b.pts[0];if(R>=b.cum[H])return b.pts[H];for(;H-O>1;){let ht=O+H>>1;b.cum[ht]<=R?O=ht:H=ht}let J=(R-b.cum[O])/(b.cum[H]-b.cum[O]||1),ot=b.pts[O],lt=b.pts[H];return[ot[0]+(lt[0]-ot[0])*J,ot[1]+(lt[1]-ot[1])*J]}let Te=b=>`${b.slice(6,8)}/${b.slice(4,6)}`,ve=new Intl.DateTimeFormat("es-ES",{timeZone:"Europe/Madrid",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hourCycle:"h23"});function Me(b){let R={};return ve.formatToParts(b).forEach(O=>R[O.type]=O.value),{ymd:R.year+R.month+R.day,min:+R.hour*60+ +R.minute+ +R.second/60}}let Y=0,it=null,Et=0,Qt=0;function Rt(){let b=Me(new Date);if(Y===0&&it==null)return{...b,live:!0};let R=it==null?b.min:Et+(Y?(performance.now()-Qt)/6e4*Y:0);return{ymd:b.ymd,min:R,live:!1}}let qt=b=>(b=(Math.round(b)%1440+1440)%1440,String(Math.floor(b/60)).padStart(2,"0")+":"+String(b%60).padStart(2,"0")),Ae="https://rodalies.erathegameoftime.com",F={url:"",delays:new Map,tu:new Map,vp:new Map,alerts:[],ok:0,okVP:0,err:"",feedTs:0};try{let b=new URLSearchParams(location.search).get("rt");b&&localStorage.setItem("rod_rt",b);let R=localStorage.getItem("rod_rt");R&&/jhmuyo\.workers\.dev/.test(R)&&(R=Ae,localStorage.setItem("rod_rt",R)),F.url=R||Ae}catch{F.url=Ae}let dt=(b,R)=>fetch(b+R,{cache:"no-store"}).then(O=>{if(!O.ok)throw new Error("HTTP "+O.status);return O.json()}),vt=b=>/^51/.test(b||"");async function gt(){if(!F.url){jt();return}let b=F.url.replace(/\/+$/,""),R=!F.adifAt||Date.now()-F.adifAt>11e4,[O,H,J,ot,lt]=await Promise.allSettled([dt(b,"/trip_updates.json"),dt(b,"/vehicle_positions.json"),dt(b,"/alerts.json"),dt(b,"/notices.json"),R?dt(b,"/adif.json"):Promise.reject(0)]);if(lt.status==="fulfilled"&&lt.value&&lt.value.ok?(F.adif=lt.value,F.adifAt=Date.now()):R&&(F.adifAt=Date.now()-6e4),O.status==="fulfilled"){let Dt=new Map,zt=new Map;for(let Ft of O.value.entity||[]){let pt=Ft.tripUpdate;if(!pt||!pt.trip||!vt(pt.trip.tripId))continue;let nt=pt.trip.tripId,xt=(pt.stopTimeUpdate||[])[0],mt=pt.delay;mt==null&&xt&&(mt=(xt.arrival||xt.departure||{}).delay),pt.trip.scheduleRelationship==="CANCELED"&&(mt="X"),mt!=null&&Dt.set(nt,mt),zt.set(nt,{next:xt?{sid:xt.stopId,t:+((xt.arrival||xt.departure||{}).time||0)}:null})}F.delays=Dt,F.tu=zt,F.ok=Date.now(),F.feedTs=+((O.value.header||{}).timestamp||0)*1e3,F.err=""}else F.err=O.reason&&O.reason.message||"sin respuesta";if(H.status==="fulfilled"){let Dt=new Map,zt=Date.now()/1e3;for(let Ft of H.value.entity||[]){let pt=Ft.vehicle;if(!pt||!pt.trip||!vt(pt.trip.tripId)||!pt.position)continue;let nt=pt.vehicle&&pt.vehicle.label||"",xt=nt.match(/PLATF\.\(([^)]+)\)/),mt=F.vp.get(pt.trip.tripId),le={tid:pt.trip.tripId,w:Q(+pt.position.longitude,+pt.position.latitude),st:pt.currentStatus||"",sid:pt.stopId||"",ts:+pt.timestamp||zt,label:nt,plat:xt?xt[1]:"",fam:(nt.split("-")[0]||"").trim(),num:pt.vehicle&&pt.vehicle.id||""};le.disp=mt?mt.disp:null,Dt.set(le.tid,le)}F.vp=Dt,F.okVP=Date.now()}let ht=[];if(ot.status==="fulfilled"&&Array.isArray(ot.value.included)){F.okNotices=Date.now();for(let Dt of ot.value.included){let zt=new Set((Dt.lines||[]).map(nt=>nt.id).filter(nt=>T[nt])),Ft=Dt.title||Dt.description||{},pt=(Ft.es||Ft.ca||"").trim();pt&&ht.push({id:"N"+Dt.externalId,fams:zt,stops:new Set,txt:pt,when:(Dt.date||"")+"T"+(Dt.time||""),src:"Rodalies",core:Dt.core||""})}}if(J.status==="fulfilled"){let Dt=+((J.value.header||{}).timestamp||0);if(F.alertsTs=Dt,Date.now()/1e3-Dt<6*3600)for(let zt of J.value.entity||[]){let Ft=zt.alert;if(!Ft)continue;let pt=new Set,nt=new Set;for(let ae of Ft.informedEntity||[])(ae.routeId||"").startsWith("51")&&pt.add(ae.routeId.replace(/^51T\d+/,"")),ae.stopId&&rt.has(ae.stopId)&&nt.add(rt.get(ae.stopId));if(!pt.size&&!nt.size)continue;let xt=(Ft.descriptionText||Ft.headerText||{translation:[]}).translation||[],mt=((xt.find(ae=>ae.language==="es")||xt[0]||{}).text||"").trim(),le=+((Ft.activePeriod||[])[0]||{}).start||0;ht.some(ae=>ae.txt===mt)||ht.push({id:zt.id,fams:pt,stops:nt,txt:mt,when:le?new Date(le*1e3).toISOString().slice(0,19):"",src:"Renfe"})}}if(F.adif&&Date.now()-F.adifAt<15*6e4)for(let[Dt,zt]of(F.adif.items||[]).entries()){let Ft=(zt.t?zt.t+". ":"")+zt.txt,pt=new Set,nt=new Set,xt=g(Ft);for(let mt of Ft.matchAll(/\b(R\d{1,2}[NS]?|R3a|RG1|RL\d|RT\d)\b/g))T[mt[1]]&&pt.add(mt[1]);M.forEach((mt,le)=>{mt.fams.size&&mt.n.length>4&&xt.includes(g(mt.n))&&(nt.add(le),pt.size||mt.fams.forEach(ae=>pt.add(ae)))}),ht.some(mt=>mt.txt===Ft)||ht.push({id:"A"+Dt,fams:pt,stops:nt,txt:Ft,when:F.adif.upd||"",src:"Adif",lvl:zt.lvl})}(ot.status==="fulfilled"||J.status==="fulfilled"||F.adif)&&(F.alerts=ht.sort((Dt,zt)=>zt.when>Dt.when?1:-1)),jt(),he(),Jn=0,a()}let St=()=>F.okVP&&Date.now()-F.okVP<9e4;function jt(){let b=p("#rtst"),R=p("#mode");if(R){let H=!!St()&&Rt().live;R.classList.toggle("on",H),R.classList.toggle("pre",!H),R.textContent=H?"En directo":"Previsi\xF3n"}if(!b)return;F.url?F.err?b.textContent="No se pudo conectar con el puente ("+F.err+"). Se usa el horario.":St()?b.innerHTML=`Conectado \xB7 ${F.vp.size} trenes con posici\xF3n real y ${F.delays.size} con retraso \xB7 actualizado a las ${new Date(F.okVP).toLocaleTimeString("es-ES",{hour:"2-digit",minute:"2-digit",second:"2-digit"})}`:b.textContent="Conectando\u2026":b.textContent=F.err||"Sin puente: trenes seg\xFAn horario oficial.";let O=p("#rturl");O&&O._shown!==F.url&&(O.value=F.url,O._shown=F.url)}p("#rtsave").onclick=()=>{let b=p("#rturl").value.trim().replace(/\/+(alerts|trip_updates|vehicle_positions)\.json$/,"").replace(/\/+$/,"");if(b&&!/^https?:\/\//.test(b)&&(b="https://"+b),!b){F.err="pega la direcci\xF3n de tu puente",jt();return}F.url=b;try{localStorage.setItem("rod_rt",b)}catch{}F.ok=0,F.err="",jt(),gt()},p("#rtoff").onclick=()=>{F.url=Ae;try{localStorage.removeItem("rod_rt")}catch{}h._h="",gt()},setInterval(gt,2e4),setTimeout(gt,50);let Kt=b=>{if(!St())return null;let R=F.delays.get(b.tid);return R??null},Bt=new Set(x),re=new Vi,I=new Vi,Ce=new wi({vertexColors:!0,linewidth:3.2,depthTest:!1,transparent:!0}),_e=new wi({color:16777215,linewidth:6,depthTest:!1,transparent:!0,opacity:.9}),w=new Ts(re,Ce),_=new Ts(I,_e);_.renderOrder=20,w.renderOrder=21,w.frustumCulled=_.frustumCulled=!1,e.add(_,w);function k(){let b=[],R=[],O=new Set,H=new se;for(let J of x)if(Bt.has(J)){H.set(T[J]);for(let ot of $[J]){if(O.has(ot))continue;O.add(ot);let lt=y[ot].p;for(let ht=0;ht+1<lt.length;ht++)b.push(lt[ht][0],lt[ht][1],C,lt[ht+1][0],lt[ht+1][1],C),R.push(H.r,H.g,H.b,H.r,H.g,H.b)}}b.length||(b.push(0,0,-50,0,0,-50),R.push(0,0,0,0,0,0)),re.setPositions(b),re.setColors(R),I.setPositions(b),a()}k();let X=b=>new pn({uniforms:{dpr:{value:Math.min(devicePixelRatio||1,2)},border:{value:new se(b)}},vertexShader:"attribute float size; attribute vec3 fill; attribute float bw; varying vec3 vF; varying float vS; varying float vB; uniform float dpr; void main(){ vF=fill; vS=size*dpr; vB=bw*dpr; gl_PointSize=vS; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"uniform vec3 border; varying vec3 vF; varying float vS; varying float vB; void main(){ float r=length(gl_PointCoord*2.0-1.0)*vS*0.5; float R=vS*0.5; if(r>R) discard; float a=1.0-smoothstep(R-1.2,R,r); vec3 c = r>R-vB ? border : vF; gl_FragColor=vec4(c,a); }",transparent:!0,depthTest:!1}),K=new je,yt=M.length,wt=new Float32Array(yt*3),tt=new Float32Array(yt*3),at=new Float32Array(yt),Tt=new Float32Array(yt);M.forEach((b,R)=>{wt[R*3]=b.w[0],wt[R*3+1]=b.w[1],wt[R*3+2]=C,tt.set([1,1,1],R*3),at[R]=6,Tt[R]=1.6}),K.setAttribute("position",new Ve(wt,3)),K.setAttribute("fill",new Ve(tt,3)),K.setAttribute("size",new Ve(at,1)),K.setAttribute("bw",new Ve(Tt,1));let Yt=new xs(K,X("#1d2330"));Yt.renderOrder=22,Yt.frustumCulled=!1,e.add(Yt);function bt(){let b=r.dist<45;M.forEach((R,O)=>{let H=[...R.fams].some(J=>Bt.has(J));at[O]=H?O===Ye?13:b?8:5:0,Tt[O]=O===Ye?3:1.6}),K.attributes.size.needsUpdate=!0,K.attributes.bw.needsUpdate=!0}let Mt=600,Vt=new je,te=new Float32Array(Mt*3),oe=new Float32Array(Mt*3),N=new Float32Array(Mt),Pt=new Float32Array(Mt);Vt.setAttribute("position",new Ve(te,3)),Vt.setAttribute("fill",new Ve(oe,3)),Vt.setAttribute("size",new Ve(N,1)),Vt.setAttribute("bw",new Ve(Pt,1));let st=new Float32Array(Mt);Vt.setAttribute("ang",new Ve(st,1));let Lt=new pn({uniforms:{dpr:{value:Math.min(devicePixelRatio||1,2)},border:{value:new se("#ffffff")}},vertexShader:"attribute float size; attribute vec3 fill; attribute float bw; attribute float ang; varying vec3 vF; varying float vS; varying float vB; varying float vA; uniform float dpr; void main(){ vF=fill; vS=size*dpr; vB=bw*dpr; vA=ang; gl_PointSize=vS; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"uniform vec3 border; varying vec3 vF; varying float vS; varying float vB; varying float vA; void main(){ vec2 p=gl_PointCoord*2.0-1.0; float r=length(p)*vS*0.5; float R=vS*0.5; if(r>R) discard; float a=1.0-smoothstep(R-1.2,R,r); vec3 c = r>R-vB ? border : vF; if(vA<50.0){ vec2 d=vec2(sin(vA),-cos(vA)); vec2 n=vec2(cos(vA),sin(vA)); float qy=-dot(p,d); float qx=dot(p,n); float w=(qy+0.66)/0.98*0.48; if(qy>-0.66 && qy<0.32 && abs(qx)<w) c=vec3(1.0); } gl_FragColor=vec4(c,a); }",transparent:!0,depthTest:!1}),Ut=new xs(Vt,Lt);Ut.renderOrder=24,Ut.frustumCulled=!1,e.add(Ut);let ut=new je,Zt=new Float32Array(Mt*3),Wt=new Float32Array(Mt*3),Oe=new Float32Array(Mt),Re=new Float32Array(Mt);ut.setAttribute("position",new Ve(Zt,3)),ut.setAttribute("fill",new Ve(Wt,3)),ut.setAttribute("size",new Ve(Oe,1)),ut.setAttribute("bw",new Ve(Re,1));let Tn=new xs(ut,X("#f97316"));Tn.renderOrder=23,Tn.frustumCulled=!1,e.add(Tn);function zn(b,R){let O=y[b],H=R*O.L,J=0,ot=O.c.length-1;for(;ot-J>1;){let Ft=J+ot>>1;O.c[Ft]<=H?J=Ft:ot=Ft}let lt=O.c[ot]-O.c[J]||1,ht=(H-O.c[J])/lt,Dt=O.p[J],zt=O.p[ot];return[Dt[0]+(zt[0]-Dt[0])*ht,Dt[1]+(zt[1]-Dt[1])*ht]}let Ia=b=>b*b*(3-2*b)*.35+b*.65;function Ls(b,R){let O=b.pat.t,H=b.pat.stops.length,J=O[2*H-2];if(R<O[1]-2||R>J+1)return null;if(R<=O[1])return{w:M[b.pat.stops[0]].w,at:0,next:0,moving:!1};for(let ot=0;ot<H-1;ot++){let lt=O[2*ot+1],ht=O[2*ot+2],Dt=O[2*ot+3];if(R<=ht){let zt=ht>lt?(R-lt)/(ht-lt):1;return{w:zn(b.pat.segs[ot],Ia(m(zt,0,1))),at:-1,next:ot+1,prev:ot,moving:!0}}if(R<=Dt)return{w:M[b.pat.stops[ot+1]].w,at:ot+1,next:ot+1,moving:!1}}return{w:M[b.pat.stops[H-1]].w,at:H-1,next:H-1,moving:!1}}function vr(b){let R=t.days.indexOf(b.ymd),O=[];if(R<0)return{k:R,out:O};let H=(J,ot)=>{for(let lt of J){if(!Bt.has(lt.fam))continue;let ht=Kt(lt);if(ht==="X")continue;let Dt=(ht||0)/60,zt=b.min+ot-lt.t0-Dt;if(zt<-2||zt>lt.pat.t[lt.pat.t.length-2]+1)continue;let Ft=Ls(lt,zt);Ft&&O.push({tr:lt,p:Ft,rel:zt,dl:Dt,live:ht!=null})}};return H(q[R],0),R>0&&H(q[R-1],1440),{k:R,out:O}}function yr(b,R,O){let H=b.pat.t,J=R.length;if(!(O>=0))return O<0?R[0]:null;for(let ot=0;ot<J;ot++)if(O<=H[2*ot+1]){if(O>=H[2*ot]||ot===0)return R[ot];let lt=H[2*ot-1],ht=H[2*ot];return R[ot-1]+(R[ot]-R[ot-1])*(ht>lt?(O-lt)/(ht-lt):1)}return R[J-1]}let La=performance.now();function Da(){let b=[],R=Date.now()/1e3,O=performance.now(),H=Math.min(1,(O-La)/1e3);La=O;for(let J of F.vp.values()){let ot=B.get(J.tid),lt=ot?ot.fam:J.fam;if(lt&&T[lt]&&!Bt.has(lt))continue;let ht=F.delays.get(J.tid),Dt=typeof ht=="number"?ht/60:0,zt=Math.max(0,R-J.ts),Ft=J.w,pt=-1;if(ot){let nt=ct(ot.pat),xt=nt.stopD;if(J.dObs==null||J.obsAt!==J.ts){let mt=Jt(nt,J.w,-1,1e9);J.dObs=mt.d,J.err=mt.err,J.obsAt=J.ts}if(J.err<=.6){let mt=xt.findIndex(me=>me>J.dObs+.08);mt<0&&(mt=xt.length-1);let le=xt.reduce((me,$e,ge)=>Math.abs($e-J.dObs)<Math.abs(xt[me]-J.dObs)?ge:me,0);J.atStop=Math.abs(xt[le]-J.dObs)<.16?le:-1,J.next=mt,pt=mt;let ae=J.dObs;if(J.st==="STOPPED_AT"&&J.atStop>=0)ae=xt[J.atStop];else if(mt>0){let me=(ot.pat.t[2*mt]-ot.pat.t[2*mt-1])*60,$e=me>0?(xt[mt]-xt[mt-1])/me:0,ge=Rt(),Ge=t.days.indexOf(ge.ymd),De=ot.day===Ge-1?1440:0,Ue=yr(ot,xt,ge.min+De-ot.t0-Dt),tn=J.dObs+$e*Math.min(zt,60);Ue!=null&&(tn=Math.min(tn,Math.max(J.dObs,Ue))),ae=Math.max(J.dObs,Math.min(xt[mt]-.03,tn))}J.disp==null||Math.abs(J.disp-ae)>1.2?J.disp=ae:ae>J.disp&&(J.disp+=(ae-J.disp)*Math.min(1,H*1.5)),Ft=kt(nt,J.disp)}else if(J.err>2){let mt=Rt(),le=t.days.indexOf(mt.ymd),ae=ot.day===le-1?1440:0,me=Ls(ot,mt.min+ae-ot.t0-Dt);me&&(Ft=me.w,J.est=!0,pt=me.next),J.atStop=-1,J.next=me?me.next:-1}else J.atStop=-1,J.next=-1}b.push({tr:ot,v:J,w:Ft,p:{w:Ft},fam:lt||"?",c:ot?ot.c:T[lt]||"#6b7385",dl:Dt,live:!0,real:!0,idx:pt,age:zt,cancel:ht==="X"})}return b}let kn=new Map,Ke=!1,Zn=[],Jn=0,on=null,we=null,Ye=-1,nn=!1,Sr=0,Mr="";function hc(b){let R=Y>0||St()&&it==null,O=R?50:250;if(b-Jn<O)return!1;Jn=b;let H=Rt(),J=St()&&H.live,ot=J?{k:t.days.indexOf(H.ymd),out:Da()}:vr(H);Zn=ot.out;let lt=new se,ht=0,Dt=0;for(let pt of Zn){if(ht>=Mt)break;te[ht*3]=pt.p.w[0],te[ht*3+1]=pt.p.w[1],te[ht*3+2]=C+.02;let nt=null;if(pt.real&&pt.tr&&pt.v.err<=.6&&pt.v.disp!=null&&!(pt.v.st==="STOPPED_AT"&&pt.v.atStop>=0))nt=kt(ct(pt.tr.pat),pt.v.disp+.35);else if(!pt.real&&pt.p.moving){let mt=pt.tr.pat.t,le=pt.p.prev,ae=mt[2*le+1],me=mt[2*le+2],$e=me>ae?(pt.rel-ae)/(me-ae):1;nt=zn(pt.tr.pat.segs[le],Math.min(1,Ia(m($e,0,1))+.04))}if(nt){let mt=D(pt.p.w),le=D(nt),ae=le[0]-mt[0],me=le[1]-mt[1];st[ht]=Math.hypot(ae,me)>.05?Math.atan2(ae,-me):99}else st[ht]=99;lt.set(pt.c||pt.tr.c),oe[ht*3]=lt.r,oe[ht*3+1]=lt.g,oe[ht*3+2]=lt.b;let xt=pt.tr?pt.tr===we:we&&we.vtid===pt.v.tid;N[ht]=xt?22:r.dist<45?17:14,Pt[ht]=xt?3.5:2.2,(pt.live&&pt.dl>=5||xt)&&(Zt[Dt*3]=pt.p.w[0],Zt[Dt*3+1]=pt.p.w[1],Zt[Dt*3+2]=C+.01,Wt.set(xt?[.11,.14,.19]:[.98,.45,.09],Dt*3),Oe[Dt]=N[ht]+8,Re[Dt]=3,Dt++),ht++}if(Vt.setDrawRange(0,ht),ut.setDrawRange(0,Dt),["position","fill","size","bw"].forEach(pt=>{Vt.attributes[pt].needsUpdate=!0,ut.attributes[pt].needsUpdate=!0}),Vt.attributes.ang.needsUpdate=!0,on){let pt=Zn.find(nt=>nt.tr===on);if(pt){let nt=0,xt=innerHeight,mt=h.style.display!=="none"&&!h.classList.contains("min")?h.getBoundingClientRect():null,le=p("#rc").getBoundingClientRect();innerWidth<=640&&(mt&&(nt=mt.bottom),xt=Math.min(xt,le.top));let ae=nt+(xt-nt)/2,me=ae-innerHeight/2,$e=2*s.dist*Math.tan(17.5*Math.PI/180)/innerHeight;s.tx=pt.p.w[0]-Math.sin(r.yaw)*me*$e,s.ty=pt.p.w[1]+Math.cos(r.yaw)*me*$e}else St()&&Rt().live&&(on=null)}let zt=qt(H.min);zt!==Mr&&(Mr=zt,p("#ctime").textContent=zt),p("#ntr").textContent=String(Zn.length),p("#ntrl").textContent=J?"trenes de Rodalies con posici\xF3n real":"trenes previstos seg\xFAn el horario";let Ft=new Date;if(p("#cdate").textContent=H.live?"hora actual":Y?"simulaci\xF3n \xD7"+Y:ye?"en pausa":"hora elegida",ot.k<0?p("#src").innerHTML=`<b style="color:#c2410c">Sin horarios para hoy.</b> Los datos guardados van del ${Te(t.days[0])} al ${Te(t.days[t.days.length-1])}: actualiza la app.`:J?p("#src").textContent=`En directo \xB7 posiciones de Renfe de hace ${Math.round(Math.max(0,Date.now()/1e3-Math.max(...[...F.vp.values()].map(pt=>pt.ts),0)))} s`:p("#src").innerHTML='<b style="color:#c2410c">No es tiempo real:</b> '+(F.url?"sin conexi\xF3n con el puente, ":"conecta el puente para ver los trenes reales; ")+"posiciones calculadas con el horario",H.live){let pt=Math.round(H.min),nt=p("#tsl");document.activeElement!==nt&&(nt.value=pt<240?pt+1440:pt)}return pe(),b-Sr>3e3&&(we||Ye>=0||nn)&&(Sr=b,_t()),jt(),!0}let Ua=-1;function uc(){r.dist<45!=Ua<45&&(Ua=r.dist,bt()),v()}let cs=[],Vn=new L;function v(){let b=r.dist<30,R=0;if(b){let O=[];for(let H=0;H<yt;H++)at[H]&&(Vn.set(M[H].w[0],M[H].w[1],C).project(n),!(Vn.z>1||Math.abs(Vn.x)>1.05||Math.abs(Vn.y)>1.05)&&O.push([H,(Vn.x*.5+.5)*innerWidth,(-Vn.y*.5+.5)*innerHeight]));if(O.length<=70)for(let[H,J,ot]of O){let lt=cs[R]||(cs[R]=Object.assign(document.createElement("div"),{className:"slab"}));lt.isConnected||document.body.appendChild(lt),lt.textContent=M[H].n,lt.dataset.i=H,lt.style.display="block",lt.style.transform=`translate(${Math.round(J+8)}px,${Math.round(ot-7)}px)`,R++}}for(;R<cs.length;R++)cs[R].style.display="none"}function D(b){return Vn.set(b[0],b[1],C).project(n),[(Vn.x*.5+.5)*innerWidth,(-Vn.y*.5+.5)*innerHeight,Vn.z]}function Z(b,R,O,H){let J=null,ot=O*O;for(let lt of Zn){let[ht,Dt,zt]=D(lt.p.w);if(zt>1)continue;let Ft=(ht-b)**2+(Dt-R)**2;Ft<ot&&(ot=Ft,J={a:lt})}if(J)return J;ot=H*H;for(let lt=0;lt<yt;lt++){if(!at[lt])continue;let[ht,Dt,zt]=D(M[lt].w);if(zt>1)continue;let Ft=(ht-b)**2+(Dt-R)**2;Ft<ot&&(ot=Ft,J={s:lt})}return J}window.__rodTap=(b,R)=>{let O=null,H=1e9;for(let ot of cs){if(ot.style.display==="none")continue;let lt=ot.getBoundingClientRect();if(b>=lt.left-4&&b<=lt.right+4&&R>=lt.top-4&&R<=lt.bottom+4){let ht=Math.abs(R-(lt.top+lt.bottom)/2)*4+(b-lt.left);ht<H&&(H=ht,O=ot)}}if(O)return window.__rodPickStation(+O.dataset.i),!0;let J=Z(b,R,24,18);return J&&J.a?(Ke=!1,nn=!1,we=J.a.tr||{vtid:J.a.v.tid},Ye=-1,on=null,Cn(),bt(),_t(),Jn=0,a(),!0):J&&J.s!=null?(Ke=!1,nn=!1,Ye=J.s,we=null,on=null,Cn(),bt(),_t(),a(),!0):!1},window.__rodHover=(b,R)=>{let O=Z(b,R,14,10);if(O&&O.a){let H=O.a,J=H.tr?M[H.tr.pat.stops[H.tr.pat.stops.length-1]].n:"";return`<b><span style="color:${H.c}">\u25A0</span> ${d(H.fam)} \xB7 tren ${d(H.tr?H.tr.num:H.v.num)}</b><small>${J?"hacia "+d(J):""}${H.real?(H.dl>=1?` \xB7 <b style="color:#c2410c">+${Math.round(H.dl)} min</b>`:" \xB7 puntual")+" \xB7 en directo":" \xB7 previsto"}</small>`}return O&&O.s!=null?`<b>${d(M[O.s].n)}</b><small>${[...M[O.s].fams].sort(P).join(" \xB7 ")}</small>`:null},window.__rodPickStation=b=>{Ke=nn=!1,we=null,on=null,Ye=b,Cn(),bt(),h._h="",_t(),a()};{let b=p("#rc"),R=()=>{let O=b.getBoundingClientRect().top;document.documentElement.style.setProperty("--mcsmax",Math.max(160,O-64-10)+"px")};try{new ResizeObserver(R).observe(b)}catch{}addEventListener("resize",R),setTimeout(R,300)}window.__rodTick=hc,window.__rodFrame=uc,window.__rodResize=()=>{Ce.resolution.set(innerWidth,innerHeight),_e.resolution.set(innerWidth,innerHeight)},window.__rodResize();let V={st:-1,f:new Set},G=b=>{let R=[...M[b].fams].sort(P);return`<div class="sfc">${R.length>1?`<button type="button" data-sf="" class="${V.f.size?"":"on"}">Todas</button>`:""}${R.map(O=>`<button type="button" data-sf="${d(O)}" class="ln ${V.f.size&&!V.f.has(O)?"off":""}${Bt.has(O)?"":" hid"}" style="--c:${T[O]}">${d(O)}</button>`).join("")}</div>${R.some(O=>!Bt.has(O))?"<small>Las l\xEDneas apagadas en el filtro general no se muestran</small>":""}`},At=b=>`<span class="ln" style="--c:${T[b]}">${d(b)}</span>`;function Ot(b,R){return R?b==="X"?'<span class="st late">Cancelado</span>':b>=60?`<span class="st late">Retraso de ${Math.round(b/60)} min</span>`:'<span class="st ok">Puntual</span>':'<span class="st sch">Seg\xFAn horario \xB7 sin dato en directo</span>'}function _t(){if(!we&&Ye<0&&!nn&&!Ke){h.innerHTML="",h._h="",h.style.display="none";return}let b=Rt(),R="",O=St()&&b.live,H=(nt,xt)=>F.alerts.filter(mt=>[...mt.fams].some(le=>nt.has(le))||xt!=null&&mt.stops.has(xt)),J=nt=>nt.length?`<div class="al">${nt.slice(0,4).map(xt=>`<p>\u26A0\uFE0F ${Ht(xt)} ${[...xt.fams].sort(P).slice(0,6).map(At).join(" ")} ${d(xt.txt)} <small>${Xt(xt)}</small></p>`).join("")}${nt.length>4?`<small>y ${nt.length-4} avisos m\xE1s</small>`:""}</div>`:"",ot=we&&O?Zn.find(nt=>nt.real&&(we.vtid?nt.v.tid===we.vtid:nt.tr===we)):null;if(Ke)R=`<div class="tc" style="--c:#1d2330"><button class="x" data-cx>\xD7</button><h3>Novedades</h3><small>${d(p("#ver").textContent.replace(" \xB7 novedades y fuentes",""))}</small><ul class="chg">${p("#chg").innerHTML||"<li>Versi\xF3n de prueba</li>"}</ul>
        <h3 style="margin-top:14px">Fuentes</h3><ul class="fts">
        <li><b>Renfe Operadora</b> \xB7 horarios (GTFS), posici\xF3n de los trenes y retrasos (GTFS-RT) \xB7 <a href="https://data.renfe.com" target="_blank" rel="noopener">data.renfe.com</a> \xB7 licencia CC BY 4.0</li>
        <li><b>Rodalies de Catalunya</b> (Generalitat) \xB7 salidas con v\xEDa, cancelaciones y avisos \xB7 <a href="https://rodalies.gencat.cat" target="_blank" rel="noopener">rodalies.gencat.cat</a></li>
        <li><b>Adif</b> \xB7 incidencias en la infraestructura de Catalu\xF1a \xB7 <a href="https://www.adif.es/viajeros/estado-de-la-red" target="_blank" rel="noopener">estado de la red</a> \xB7 \xA9 Adif</li>
        <li><b>OpenStreetMap</b> \xB7 trazado de las v\xEDas \xB7 <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">\xA9 colaboradores de OpenStreetMap</a>, licencia ODbL</li>
        </ul><small>Los datos se muestran tal como los publican sus fuentes. Ante cualquier duda, manda lo que diga el operador en la estaci\xF3n.</small></div>`;else if(nn){let nt=F.alerts.filter(xt=>[...xt.fams].some(mt=>Bt.has(mt))||!xt.fams.size);R=`<div class="tc" style="--c:#c2410c"><button class="x" data-cx>\xD7</button><h3>Avisos e incidencias</h3><small>${nt.length} avisos activos para las l\xEDneas que tienes visibles</small>${nt.map(xt=>`<div class="al"><p>${Ht(xt)} ${[...xt.fams].sort(P).map(At).join(" ")} <small>${Xt(xt)}</small></p><p>${d(xt.txt)}</p></div>`).join("")||"<p>Sin avisos activos.</p>"}<small>Fuente: avisos oficiales de Rodalies de Catalunya, incidencias en la v\xEDa de Adif (gestor de la infraestructura)${F.alertsTs&&Date.now()/1e3-F.alertsTs<6*3600?" y de Renfe":` \xB7 los avisos GTFS de Renfe no se muestran: Renfe no los actualiza desde el ${F.alertsTs?new Date(F.alertsTs*1e3).toLocaleDateString("es-ES",{day:"numeric",month:"short"}):"\u2014"}`}</small></div>`}else if(ot){let nt=ot.v,xt=ot.tr,mt=hn=>d(M[xt.pat.stops[hn]].n),le=xt?xt.pat.stops.length:0,ae=rt.get(nt.sid),me=ae!=null?d(M[ae].n):d(nt.sid),$e=xt&&nt.atStop>=0?mt(nt.atStop):"",ge=xt&&nt.next>=0?mt(nt.next):me,Ge=xt&&nt.next>0?mt(nt.next-1):"",De=nt.st==="STOPPED_AT"&&$e?`Parado en <b>${$e}</b>`:$e&&nt.next>=0&&nt.atStop!==nt.next?`Saliendo de <b>${$e}</b> hacia <b>${ge}</b>`:Ge?`Entre ${Ge} y <b>${ge}</b>`:`Hacia <b>${ge}</b>`,Ue=F.tu.get(nt.tid),tn=Ue&&Ue.next&&xt&&nt.next>=0&&Ue.next.sid===M[xt.pat.stops[nt.next]].id&&Ue.next.t?new Date(Ue.next.t*1e3).toLocaleTimeString("es-ES",{hour:"2-digit",minute:"2-digit"}):"",Rn=[];if(xt){let hn=ot.idx>=0?ot.idx:0,$t=Ee=>xt.t0+xt.pat.t[Ee]+ot.dl;for(let Ee=hn;Ee<le;Ee++)Rn.push(`<li><b>${qt($t(2*Ee))}</b><span>${mt(Ee)}</span>${ot.dl>=1?`<em>+${Math.round(ot.dl)}</em>`:""}</li>`)}R=`<div class="tc" style="--c:${ot.c}"><button class="x" data-cx>\xD7</button><div>${At(ot.fam)}<b>Tren ${d(xt?xt.num:nt.num)}</b> <span class="lv">\u25CF en directo</span></div>${xt?`<h3>${mt(0)} \u2192 ${mt(le-1)}</h3>`:""}
        <p>${De}${tn?` \xB7 prevista ${tn}`:""}${nt.plat?` \xB7 <b>and\xE9n ${d(nt.plat)}</b>`:""}</p><p>${Ot(F.delays.get(nt.tid),F.delays.has(nt.tid))}</p>
        <small>${nt.est?"Renfe da una posici\xF3n que no encaja con su recorrido: se muestra donde deber\xEDa estar seg\xFAn el horario y su retraso":`Posici\xF3n enviada por Renfe hace ${Math.round(ot.age)} s${ot.age>120?" \xB7 <b>sin actualizar</b>":""}`}</small>
        ${Rn.length?`<small style="margin-top:6px">Pr\xF3ximas paradas \xB7 hora prevista con el retraso actual</small><ol>${Rn.join("")}</ol>`:""}${J(H(new Set([ot.fam])))}
        ${xt?`<div class="rtb"><button type="button" data-follow>${on===xt?"Dejar de seguir":"Seguir este tren"}</button></div>`:""}</div>`}else if(we&&O)R=`<div class="tc" style="--c:#6b7385"><button class="x" data-cx>\xD7</button><h3>Tren ${d(we.num||we.vtid||"")}</h3><p>Renfe no da ahora la posici\xF3n de este tren: puede haber terminado su viaje, no haber salido o no estar circulando.</p></div>`;else if(we){let nt=we,xt=nt.pat,mt=xt.stops.length,le=Kt(nt),ae=typeof le=="number"?le/60:0,me=t.days.indexOf(b.ymd),$e=nt.day===me-1?1440:0,ge=b.min+$e-nt.t0-ae,Ge=Ls(nt,ge),De=$t=>nt.t0+xt.t[$t]+ae,Ue=$t=>d(M[xt.stops[$t]].n),tn="Fuera de servicio ahora";Ge&&(tn=Ge.moving?`Circulando hacia <b>${Ue(Ge.next)}</b> \xB7 llega ${qt(De(2*Ge.next))}`:Ge.at===mt-1?`Ha llegado a <b>${Ue(mt-1)}</b>`:`Parado en <b>${Ue(Ge.at)}</b> \xB7 sale ${qt(De(2*Ge.at+1))}`);let Rn=Ge?Ge.next:0,hn=[];for(let $t=Rn;$t<mt;$t++)hn.push(`<li><b>${qt(De(2*$t))}</b><span>${Ue($t)}</span>${ae>=1?`<em>+${Math.round(ae)}</em>`:""}</li>`);R=`<div class="tc" style="--c:${nt.c}"><button class="x" data-cx>\xD7</button><div>${At(nt.fam)}<b>Tren ${d(nt.num)}</b> <span class="pv">previsi\xF3n</span></div><h3>${Ue(0)} \u2192 ${Ue(mt-1)}</h3>
        <p>${tn}</p><p>${Ot(le,le!=null)}</p><small>Sale ${qt(nt.t0+xt.t[1])} \xB7 llega ${qt(nt.t0+xt.t[2*mt-2])} (horario)</small>
        <small style="margin-top:6px">Pr\xF3ximas paradas${ae>=1?" \xB7 hora prevista con el retraso":""}</small><ol>${hn.join("")}</ol><div class="rtb"><button type="button" data-follow>${on===nt?"Dejar de seguir":"Seguir este tren"}</button></div></div>`}else{let nt=Ye,xt=t.days.indexOf(b.ymd),mt=[];V.st!==nt&&(V.st=nt,V.f.clear());let le=ge=>(!T[ge]||Bt.has(ge))&&(!V.f.size||V.f.has(ge));if(xt>=0){let ge=(Ge,De)=>{for(let Ue of Ge){if(!le(Ue.fam))continue;let tn=Ue.pat.stops.indexOf(nt);if(tn<0||tn===Ue.pat.stops.length-1)continue;let Rn=Kt(Ue),hn=typeof Rn=="number"?Rn/60:0,$t=Ue.t0+Ue.pat.t[2*tn+1]-De;$t+hn<b.min-1||$t>b.min+360||mt.push({tr:Ue,t:$t,dl:hn,d:Rn,on:F.vp.has(Ue.tid),past:b.min>Ue.t0+Ue.pat.t[1]-De+2})}};ge(q[xt],0),xt>0&&ge(q[xt-1],1440)}mt.sort((ge,Ge)=>ge.t+ge.dl-Ge.t-Ge.dl);let ae=M[nt].id,me=kn.get(ae);O&&F.url&&(!me||Date.now()-me.at>3e4)&&!me?.loading&&(kn.set(ae,{...me||{},loading:!0,at:me?me.at:0}),dt(F.url.replace(/\/+$/,""),"/departures.json?stationId="+ae).then(ge=>{kn.set(ae,{at:Date.now(),d:ge}),Ye===nt&&(h._h="",_t())}).catch(()=>kn.set(ae,{at:Date.now(),err:1})));let $e=O&&me&&me.d&&Array.isArray(me.d.trains)?me.d.trains:null;if($e){let ge=new Map([...F.vp.values()].map(De=>[String((B.get(De.tid)||{}).num||De.num),De])),Ge=$e.filter(De=>le((De.line||{}).id||"")).slice(0,40).map(De=>{let Ue=(De.departureDateHourSelectedStation||"").slice(11,16),tn=(De.line||{}).id||"",Rn=String(De.commercialNumber||De.technicalNumber||""),hn=ge.get(Rn),$t=hn?F.delays.get(hn.tid):null;return`<li class="go" data-gt="${d(Rn)}|${hn?d(hn.tid):""}"><b>${d(Ue)}</b>${T[tn]?At(tn):`<span class="ln" style="--c:#6b7385">${d(tn||"?")}</span>`}<span>${d((De.destinationStation||{}).name||"")}${De.trainObservations?` \xB7 <i>${d(De.trainObservations)}</i>`:""}</span>${De.trainCancelled?"<em>cancelado</em>":typeof $t=="number"&&$t>=60?`<em>+${Math.round($t/60)}</em>`:""}${De.platformSelectedStation?`<i class="via">v\xEDa ${d(De.platformSelectedStation)}</i>`:""}${hn?'<i class="lvd" title="circulando, posici\xF3n real">\u25CF</i>':""}</li>`}).join("");R=`<div class="tc" style="--c:#1d2330"><button class="x" data-cx>\xD7</button><h3>${d(M[nt].n)}</h3>${G(nt)}
          <small style="margin-top:6px">Pr\xF3ximas salidas oficiales de Rodalies \xB7 hora prevista \xB7 \u25CF tren circulando</small>
          <ol>${Ge||"<li><span>Rodalies no anuncia salidas ahora mismo</span></li>"}</ol>${J(H(M[nt].fams,nt))}<div class="rtb"><button type="button" data-sethome>\u{1F3E0} Es mi estaci\xF3n</button></div></div>`}else R=`<div class="tc" style="--c:#1d2330"><button class="x" data-cx>\xD7</button><h3>${d(M[nt].n)}</h3>${G(nt)}
        <small style="margin-top:6px">${O&&F.url?"Cargando salidas oficiales\u2026 mientras, ":""}Pr\xF3ximas salidas${O?" \xB7 hora prevista con el retraso actual \xB7 \u25CF tren circulando":" \xB7 previsi\xF3n seg\xFAn horario (sin tiempo real)"}</small>
        <ol>${mt.slice(0,40).map(ge=>`<li class="go" data-gt="${d(ge.tr.num)}|${d(ge.tr.tid)}"><b>${qt(ge.t+ge.dl)}</b>${At(ge.tr.fam)}<span>${d(M[ge.tr.pat.stops[ge.tr.pat.stops.length-1]].n)}</span>${ge.d==="X"?"<em>cancelado</em>":ge.dl>=1?`<em>+${Math.round(ge.dl)}</em>`:""}${O?ge.on?'<i class="lvd" title="circulando, posici\xF3n real">\u25CF</i>':ge.past?'<i class="nos" title="deber\xEDa haber salido y Renfe no da su posici\xF3n">sin se\xF1al</i>':"":""}</li>`).join("")||"<li><span>No hay salidas en las pr\xF3ximas 6 horas</span></li>"}</ol>${J(H(M[nt].fams,nt))}<div class="rtb"><button type="button" data-sethome>\u{1F3E0} Es mi estaci\xF3n</button></div></div>`}let lt=h.scrollTop;h._h!==R&&(h.innerHTML=R,h._h=R,h.scrollTop=lt),h.style.display="flex",h.classList.remove("min");let ht=p("#rc");if(innerWidth<=640&&!ht.classList.contains("min")&&!_t.done&&(_t.done=1,p("#rcgrab").click()),innerWidth<=640){let nt=p("#inf").getBoundingClientRect().bottom;h.style.top=Math.round(nt+8)+"px",h.style.width="calc(100vw - 76px)",h.style.maxHeight=Math.max(140,p("#rc").getBoundingClientRect().top-nt-16)+"px"}else if(innerHeight<=500){let nt=p("#inf").getBoundingClientRect().bottom;h.style.top=Math.round(nt+8)+"px",h.style.width="min(290px, 40vw)",h.style.maxHeight=innerHeight-nt-20+"px"}else h.style.top="",h.style.width="300px",h.style.maxHeight="";let zt=h.querySelector("[data-cx]");zt&&(zt.onclick=nt=>{nt.stopPropagation(),_t.done=0,nn=!1,Ke=!1,we=null,Ye=-1,on=null,bt(),_t(),Jn=0,a()}),h.querySelectorAll("[data-sf]").forEach(nt=>nt.onclick=xt=>{xt.stopPropagation();let mt=nt.dataset.sf;mt?V.f.has(mt)?V.f.delete(mt):V.f.add(mt):V.f.clear(),h._h="",_t()}),h.querySelectorAll("[data-gt]").forEach(nt=>nt.onclick=()=>{let[xt,mt]=nt.dataset.gt.split("|"),le=B.get(mt);An({num:xt,tid:F.vp.has(mt)?mt:"",tr:le||null})});let Ft=h.querySelector("[data-sethome]");Ft&&(Ft.onclick=()=>{Ii(Ye)});let pt=h.querySelector("[data-follow]");pt&&(pt.onclick=()=>{on=on===we?null:we,on&&(s.dist=Math.min(s.dist,22)),_t(),a()})}window.__rodCard=_t;try{localStorage.getItem("rod_inf")==="mini"&&p("#inf").classList.add("mini")}catch{}p("#inft").onclick=()=>{let b=p("#inf").classList.toggle("mini");try{localStorage.setItem("rod_inf",b?"mini":"")}catch{}(we||Ye>=0||nn||Ke)&&(h._h="",_t())},p("#ver").onclick=()=>{Ke=!0,we=null,Ye=-1,nn=!1,h._h="",_t()};function Ht(b){return b.src?`<b class="asrc ${b.src==="Adif"?"adif":""}">${b.src==="Adif"?"Adif \xB7 v\xEDa":d(b.src)}</b>`:""}function Xt(b){if(!b.when)return"";let[R,O]=b.when.split("T"),H=Me(new Date),J=H.ymd.slice(0,4)+"-"+H.ymd.slice(4,6)+"-"+H.ymd.slice(6,8);if(R===J&&O){let ot=Math.round(H.min-(+O.slice(0,2)*60+ +O.slice(3,5)));return ot<1?"ahora":ot<60?`hace ${ot} min`:`hoy a las ${O.slice(0,5)}`}return`${R.slice(8,10)}/${R.slice(5,7)}${O?" "+O.slice(0,5):""}`}function he(){let b=p("#alr");if(!b)return;let R=F.alerts.filter(O=>[...O.fams].some(H=>Bt.has(H))).length;b.hidden=!R,b.textContent=`\u26A0\uFE0F ${R} aviso${R===1?"":"s"}`}p("#alr").onclick=()=>{Ke=!1,nn=!0,we=null,Ye=-1,_t()},p("#wcopy").onclick=async()=>{let b=p("#wcode").textContent;try{await navigator.clipboard.writeText(b),p("#wcopy").textContent="Copiado \u2713"}catch{let O=document.createRange();O.selectNodeContents(p("#wcode"));let H=getSelection();H.removeAllRanges(),H.addRange(O),p("#wcopy").textContent="Selecciona y copia"}setTimeout(()=>p("#wcopy").textContent="Copiar c\xF3digo",2500)};let fe=rt.get("71801");function Gt(b,R){let O=M[b].id,H=kn.get(O);!(St()&&F.url)||H&&(H.loading||Date.now()-H.at<3e4)||(kn.set(O,{...H||{},loading:!0,at:H?H.at:0}),dt(F.url.replace(/\/+$/,""),"/departures.json?stationId="+O).then(J=>{kn.set(O,{at:Date.now(),d:J}),R&&R()}).catch(()=>kn.set(O,{at:Date.now(),err:1})))}let Pe=b=>+b.slice(0,2)*60+ +b.slice(3,5);function Ze(b){let R=Rt(),O=St()&&R.live,H=kn.get(M[b].id),J=[],ot=new Map([...F.vp.values()].map(lt=>[String((B.get(lt.tid)||{}).num||lt.num),lt]));if(O&&H&&H.d&&Array.isArray(H.d.trains))for(let lt of H.d.trains){let ht=(lt.departureDateHourSelectedStation||"").slice(11,16);if(!ht)continue;let Dt=String(lt.commercialNumber||lt.technicalNumber||""),zt=ot.get(Dt),Ft=zt?F.delays.get(zt.tid):null,pt=typeof Ft=="number"?Math.max(0,Ft/60):0,nt=Pe(ht);nt<R.min-720&&(nt+=1440),J.push({sm:nt,est:nt+pt,dl:pt,fam:(lt.line||{}).id||"",dest:(lt.destinationStation||{}).name||"",destId:(lt.destinationStation||{}).id||"",plat:lt.platformSelectedStation||"",cancel:!!lt.trainCancelled,obs:lt.trainObservations||"",live:!!zt,num:Dt,tid:zt?zt.tid:"",src:"oficial"})}else{let lt=t.days.indexOf(R.ymd);if(lt<0)return J;let ht=(Dt,zt)=>{for(let Ft of Dt){let pt=Ft.pat.stops.indexOf(b);if(pt<0||pt===Ft.pat.stops.length-1)continue;let nt=Kt(Ft),xt=typeof nt=="number"?Math.max(0,nt/60):0,mt=Ft.t0+Ft.pat.t[2*pt+1]-zt;if(mt+xt<R.min-1||mt>R.min+240)continue;let le=Ft.pat.stops[Ft.pat.stops.length-1];J.push({sm:mt,est:mt+xt,dl:xt,fam:Ft.fam,dest:M[le].n,destId:M[le].id,plat:"",cancel:nt==="X",obs:"",live:F.vp.has(Ft.tid),num:Ft.num,tid:Ft.tid,tr:Ft,src:"horario"})}};ht(q[lt],0),lt>0&&ht(q[lt-1],1440)}return J.filter(lt=>lt.est>=R.min-.5).sort((lt,ht)=>lt.est-ht.est)}let ee={st:[],i:0,walk:10,open:!1};try{let b=JSON.parse(localStorage.getItem("rod_home")||"null");b&&Object.assign(ee,b)}catch{}ee.st.length||(ee.st=["79410","79412"]);let Ie=()=>{try{localStorage.setItem("rod_home",JSON.stringify({st:ee.st,i:ee.i,walk:ee.walk,open:ee.open}))}catch{}};function ln(b,R){let O=rt.get(R.destId)??M.findIndex(J=>J.n===R.dest);if(O<0||O==null||fe==null)return"otros";let H=J=>Math.hypot(M[J].w[0]-M[fe].w[0],M[J].w[1]-M[fe].w[1]);return H(O)<H(b)?"bcn":"out"}let Nt=b=>b<1?"ahora":b<60?Math.round(b)+" min":Math.floor(b/60)+" h "+String(Math.round(b%60)).padStart(2,"0"),cn=0;function pe(b){let R=p("#home");if(!R)return;let O=performance.now();if(!b&&O-cn<4e3)return;cn=O;let H=rt.get(ee.st[ee.i]||ee.st[0]);if(H==null){R.innerHTML="";return}Gt(H,()=>pe(!0));let J=Rt(),ot=Ze(H),lt=ee.walk,ht=M[H].fams,Dt=F.alerts.filter($t=>[...$t.fams].some(Ee=>ht.has(Ee))),zt=Dt.some($t=>/sin servicio|sense servei|suspend|interromp|interrump|no circula|no se puede garantizar|no es pot garantir/i.test($t.txt)),Ft={bcn:[],out:[],otros:[]};ot.forEach($t=>Ft[ln(H,$t)].push($t));let pt=$t=>{if($t==="bcn")return"Hacia Barcelona";let Ee=[...new Set(Ft[$t].map(Li=>Li.dest))].slice(0,2);return Ee.length?"Hacia "+Ee.join(" \xB7 "):"Otros"},nt=$t=>$t.find(Ee=>!Ee.cancel&&Ee.est-J.min>=lt),xt=$t=>{let Ee=nt(Ft[$t]);if(!Ee){let dc=Ft[$t].find(Wf=>!Wf.cancel);return dc?{cls:"v-no",big:"No llegas",small:`El pr\xF3ximo (${qt(dc.est)}) sale en ${Nt(dc.est-J.min)}: no da tiempo a pie`}:{cls:"v-no",big:"Sin trenes",small:"No hay salidas pr\xF3ximas en este sentido"}}let Li=Ee.est-J.min-lt,Hf=Li<1.5?"v-bad":Li<5?"v-warn":"v-ok",Gf=Li<1.5?"\xA1Sal ya!":"Sal en "+Nt(Li);return{cls:Hf,big:Gf,small:`${zt?"\u26A0\uFE0F servicio afectado \xB7 ":""}${qt(Ee.est)} \xB7 ${Ee.fam} a ${Ee.dest}${Ee.plat?" \xB7 v\xEDa "+Ee.plat:""}${Ee.dl>=1?` \xB7 +${Math.round(Ee.dl)} min`:""}`,x:Ee}},mt=xt("bcn"),le=xt(Ft.out.length?"out":"otros"),ae=d(M[H].n),me=St()&&J.live,$e=[],ge=$t=>`<li class="${$t.cancel?"cx":""} go" data-dk="${$e.push($t)-1}" title="Ver este tren en el mapa"><b class="cd">${$t.cancel?"\u2715":Nt($t.est-J.min)}</b><span><b>${qt($t.est)}</b> ${At($t.fam)} ${d($t.dest)}${$t.obs?` <i>${d($t.obs)}</i>`:""}</span>${$t.dl>=1?`<em>+${Math.round($t.dl)}</em>`:""}${$t.plat?`<i class="via">v\xEDa ${d($t.plat)}</i>`:""}${$t.live?'<i class="lvd">\u25CF</i>':""}</li>`,Ge=($t,Ee)=>`<div class="hcol"><div class="hdir">${pt($t)}</div><div class="hv ${Ee.cls}${Ee.x?" go":""}"${Ee.x?` data-dk="${$e.push(Ee.x)-1}"`:""}><b>${Ee.big}</b><small>${d(Ee.small)}</small></div><ol>${Ft[$t].slice(0,4).map(ge).join("")||"<li><span>\u2014</span></li>"}</ol></div>`,De=mt.x?`${mt.big==="\xA1Sal ya!"?"\xA1Sal ya!":mt.big} \xB7 <b>${qt(mt.x.est)}</b> hacia Barcelona${mt.x.plat?" \xB7 v\xEDa "+d(mt.x.plat):""}`:"Sin trenes hacia Barcelona";R.className=ee.open?"open":"";let Ue=`<button type="button" class="hhead" data-ht><span class="hico">\u{1F3E0}</span><span class="htit"><b>${ae}</b><small class="c${zt?"bad":mt.cls.slice(2)}">${De}</small></span><span class="hchev">\u25BE</span></button>`+(ee.open?`
      <div class="hbody">
        ${ee.st.length>1?`<div class="hst">${ee.st.map(($t,Ee)=>{let Li=rt.get($t);return Li==null?"":`<button type="button" data-hs="${Ee}" class="${Ee===ee.i?"on":""}">${d(M[Li].n)}</button>`}).join("")}</div>`:""}
        <div class="hwalk">\u{1F6B6} Tardo <button type="button" data-hw="-1">\u2212</button><b>${lt} min</b><button type="button" data-hw="1">+</button> a pie hasta la estaci\xF3n</div>
        ${Dt.length?`<div class="hal ${zt?"bad":""}">\u26A0\uFE0F ${Ht(Dt[0])} ${d(Dt[0].txt)} <small>${Xt(Dt[0])}</small>${Dt.length>1?` <a data-hal>+${Dt.length-1} avisos</a>`:""}</div>`:`<div class="hok">\u2713 Sin avisos de Rodalies para ${[...ht].sort(P).join(", ")}</div>`}
        <div class="hcols">${Ge("bcn",mt)}${Ge(Ft.out.length?"out":"otros",le)}</div>
        <small class="hsrc">${me?kn.get(M[H].id)?.d?"Salidas oficiales de Rodalies en directo":"Cargando salidas oficiales\u2026 mientras, horario + retrasos":"Previsi\xF3n seg\xFAn horario (sin tiempo real)"} \xB7 \u25CF tren circulando \xB7 <a data-hmap>ver en el mapa</a> \xB7 <a data-hset>cambiar estaci\xF3n</a></small>
      </div>`:"");if(R._h===Ue)return;R._h=Ue,R.innerHTML=Ue,R.querySelector("[data-ht]").onclick=()=>{ee.open=!ee.open,Ie(),pe(!0),(we||Ye>=0||nn||Ke)&&(h._h="",_t())},R.querySelectorAll("[data-hs]").forEach($t=>$t.onclick=()=>{ee.i=+$t.dataset.hs,Ie(),pe(!0)}),R.querySelectorAll("[data-hw]").forEach($t=>$t.onclick=()=>{ee.walk=m(ee.walk+ +$t.dataset.hw,0,60),Ie(),pe(!0)});let tn=R.querySelector("[data-hmap]");tn&&(tn.onclick=()=>{Ke=nn=!1,we=null,Ye=H,Cn(),bt(),Object.assign(s,{tx:M[H].w[0],ty:M[H].w[1],dist:18,tilt:Math.max(s.tilt,.5)}),h._h="",_t(),a()});let Rn=R.querySelector("[data-hset]");Rn&&(Rn.onclick=()=>{Un=!0,f.value="",f.placeholder="Escribe tu estaci\xF3n\u2026",f.focus()}),R.querySelectorAll("[data-dk]").forEach($t=>$t.onclick=()=>An($e[+$t.dataset.dk]));let hn=R.querySelector("[data-hal]");hn&&(hn.onclick=()=>p("#alr").click())}function An(b){if(!b)return;let R=t.days.indexOf(Rt().ymd),O=Zn.find(ot=>ot.real?b.tid&&ot.v.tid===b.tid||b.num&&String(ot.tr?ot.tr.num:ot.v.num)===String(b.num):b.tr&&ot.tr===b.tr||b.num&&ot.tr&&String(ot.tr.num)===String(b.num)),H=b.tr||O&&O.tr||(q[R]||[]).find(ot=>String(ot.num)===String(b.num));if(Ke=nn=!1,Ye=-1,Cn(),we=O?O.tr||{vtid:O.v.tid}:H||null,!we)return;on=O&&O.tr?O.tr:null;let J=O?O.p.w:null;J&&Object.assign(s,{tx:J[0],ty:J[1],dist:Math.min(s.dist,22)}),bt(),h._h="",_t(),Jn=0,a()}let Un=!1;function Cn(){ee.open&&(ee.open=!1,pe(!0))}function Ii(b){let R=M[b].id,O=M.filter(H=>H.fams.size&&H!==M[b]&&Math.hypot(H.w[0]-M[b].w[0],H.w[1]-M[b].w[1])<.6).map(H=>H.id);ee.st=[R,...O].slice(0,3),ee.i=0,ee.open=!0,Ie(),pe(!0)}let Le=p("#lines");Le.innerHTML='<button type="button" class="all" data-f="*">Todas</button>'+x.map(b=>`<button type="button" style="--c:${T[b]}" data-f="${b}">${b}</button>`).join("");function Xe(){Le.querySelectorAll("[data-f]").forEach(b=>{b.dataset.f!=="*"&&b.classList.toggle("off",!Bt.has(b.dataset.f))})}Le.querySelectorAll("[data-f]").forEach(b=>b.onclick=()=>{let R=b.dataset.f;R==="*"?x.forEach(O=>Bt.add(O)):Bt.size===x.length?(Bt.clear(),Bt.add(R)):Bt.has(R)?(Bt.delete(R),Bt.size||x.forEach(O=>Bt.add(O))):Bt.add(R),Xe(),k(),bt(),he(),Jn=0,a()});let Kn=[...document.querySelectorAll("[data-sp]")],ye=0;function ei(b){let R=Rt();b&&(Y===b||ye===b)?Y?(Et=R.min,it=R.min,Y=0,ye=b):(Qt=performance.now(),Y=b,ye=0):b===0?(Y=0,it=null,ye=0):(Et=R.min,Qt=performance.now(),it=R.min,Y=b,ye=0),Kn.forEach(O=>{let H=+O.dataset.sp;O.classList.toggle("on",H===(Y||ye)||!Y&&!ye&&it==null&&H===0),O.classList.toggle("pz",!!ye&&H===ye),O.textContent=H===0?"Ahora":ye===H?"\u25B6 \xD7"+H:Y===H?"\u23F8 \xD7"+H:"\xD7"+H}),Jn=0,a()}Kn.forEach(b=>b.onclick=()=>ei(+b.dataset.sp)),p("#tsl").oninput=b=>{let R=+b.target.value;Et=R,it=R,Qt=performance.now(),Y===0&&!ye&&Kn.forEach(O=>O.classList.remove("on")),Jn=0,a()},setInterval(()=>{it!=null&&Y&&Et+(performance.now()-Qt)/6e4*Y>1560&&(Et=240,Qt=performance.now())},1e3),window.__rodSearch=b=>{let R=g(b.trim());if(!R){u.style.display="none",u._pick=null;return}let O=[],H=[];M.forEach((ht,Dt)=>{if(!ht.fams.size)return;let zt=g(ht.n);zt.startsWith(R)||zt.includes(" "+R)||zt.includes("-"+R)?O.push(Dt):zt.includes(R)&&H.push(Dt)});let J=O.concat(H).slice(0,7),ot=S.filter(ht=>g(ht.name).startsWith(R)).sort((ht,Dt)=>Dt.pop-ht.pop).slice(0,3),lt=J.map(ht=>({h:`\u{1F689} ${d(M[ht].n)}<em>${[...M[ht].fams].sort(P).slice(0,3).map(Dt=>`<em class="ls" style="background:${T[Dt]}">${Dt}</em>`).join(" ")}</em>`,go:()=>{if(Un){Un=!1,f.placeholder="Buscar estaci\xF3n o municipio\u2026",Ii(ht);return}Ke=!1,nn=!1,Ye=ht,we=null,on=null,Cn(),bt(),Object.assign(s,{tx:M[ht].w[0],ty:M[ht].w[1],dist:Math.min(s.dist,20),tilt:Math.max(s.tilt,.5)}),_t(),a()}})).concat(ot.map(ht=>({h:`${d(ht.name)}<em>municipio</em>`,go:()=>{Object.assign(s,{tx:ht.cx,ty:ht.cy,dist:m(ht.size*3+14,14,60)}),a()}})));u.innerHTML=lt.map((ht,Dt)=>`<li data-i="${Dt}">${ht.h}</li>`).join("")||'<li class="no">Sin resultados</li>',u.style.display="block",u._pick=ht=>{lt[ht]&&(lt[ht].go(),u.style.display="none",f.value="",f.blur())},u.querySelectorAll("li[data-i]").forEach(ht=>ht.onclick=()=>u._pick(+ht.dataset.i))},Xe(),bt();try{let b=new URLSearchParams(location.search).get("st");if(b){let R=g(b),O=-1,H=0;M.forEach((J,ot)=>{if(!J.fams.size)return;let lt=g(J.n),ht=lt===R?3:lt.startsWith(R)||R.startsWith(lt)?2:lt.includes(R)||R.includes(lt)?1:0;ht>H&&(H=ht,O=ot)}),O>=0&&setTimeout(()=>{Ye=O,bt(),Object.assign(s,{tx:M[O].w[0],ty:M[O].w[1],dist:18,tilt:.5}),_t(),a()},300)}}catch{}window.__rod={get follow(){return on},get selTrip(){return we},ST:M,TR:z,FAM:x,act:()=>Zn,setSpeed:ei,RT:F,pollRT:gt,nowState:Rt,posAt:Ls,activeTrips:vr,select:b=>{we=b,_t()}}}var xr=window.__DATA__;var Se=i=>document.querySelector(i),Gi=i=>String(i).replace(/\B(?=(\d{3})+(?!\d))/g,"."),En=(i,t,e)=>Math.min(e,Math.max(t,i)),Yh=i=>i.normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase(),Dn=Se("#c"),Ra=new Xl({canvas:Dn,antialias:!0});Ra.setPixelRatio(Math.min(devicePixelRatio||1,2));var os=new zr;os.background=new se(15659509);var ac=35,Pi=new Mn(ac,1,2,1500);os.add(new ra(16777215,9080992,1));var wf=new oa(16777215,.9);wf.position.set(-40,-70,90);os.add(wf);var Ci=100/xr.w,Ea=xr.w/2,Ta=xr.h/2,Je=[],Zh=new li;os.add(Zh);var Ef=new _s({color:16777215,transparent:!0,opacity:.55});for(let i of xr.m){let t=new li,e=[],n=[],s=1e9,r=-1e9,a=1e9,o=-1e9;for(let m of i.g){let g=m.map(p=>{let d=[];for(let A=0;A<p.length;A+=2)d.push(new Ct((p[A]-Ea)*Ci,(p[A+1]-Ta)*Ci));return d.length>1&&d[0].equals(d[d.length-1])&&d.pop(),d}).filter(p=>p.length>=3);if(!g.length)continue;let S=new rr(g[0]);for(let p=1;p<g.length;p++)S.holes.push(new vs(g[p]));e.push(S);for(let p of g[0])s=Math.min(s,p.x),r=Math.max(r,p.x),a=Math.min(a,p.y),o=Math.max(o,p.y);for(let p of g)n.push(new Gr(new je().setFromPoints(p.map(d=>new L(d.x,d.y,0))),Ef))}if(!e.length)continue;let l;try{l=new Qr(e,{depth:1,bevelEnabled:!1})}catch{continue}let c=new na({color:13421772}),h=new bn(l,c);t.add(h);let f=new li;n.forEach(m=>f.add(m)),f.position.z=.04,Zh.add(f),t.scale.z=.01,Zh.add(t);let u={og:f,rings:i.g,inF:!0,sel:null,code:i.c,name:i.n,pop:i.p,area:i.a,pr:i.pr,rankP:0,rankD:0,group:t,mesh:h,mat:c,cx:(s+r)/2,cy:(a+o)/2,size:Math.max(r-s,o-a),z:.01,zt:.01,rank:0};h.userData.m=u,Je.push(u)}var jM=Je.map(i=>i.mesh),_f=i=>{let t=0;for(let e=0;e<i.length;e+=2){let n=(e+2)%i.length;t+=i[e]*i[n+1]-i[n]*i[e+1]}return Math.abs(t)/2},Tf=0,Af=0;for(let i of Je){for(let t of i.rings)Tf+=_f(t[0])-t.slice(1).reduce((e,n)=>e+_f(n),0);Af+=i.area}var ov=Math.sqrt(Af/Tf),jl={"08":"Barcelona",17:"Girona",25:"Lleida",43:"Tarragona"},Cf={"08":"provincia de Barcelona",17:"provincia de Girona",25:"provincia de Lleida",43:"provincia de Tarragona"},nu="sqrt",iu="pop",$h=0,Jh=0,gr=1,wa=1,lv={sqrt:i=>Math.sqrt(i),lin:i=>i,log:i=>Math.log10(Math.max(i,1))},Kh=i=>iu==="pop"?i.pop:i.pop/i.area,Kl=["#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#b10026","#5c0020"].map(i=>new se(i));function cv(i){i=En(i,0,1)*(Kl.length-1);let t=Math.min(Math.floor(i),Kl.length-2);return Kl[t].clone().lerp(Kl[t+1],i-t)}var _r=i=>i>=100?Gi(Math.round(i)):i.toLocaleString("es-ES",{maximumFractionDigits:1});function hv(){Jh=0;for(let i of Je)Jh+=i.pop;[...Je].sort((i,t)=>t.pop-i.pop).forEach((i,t)=>i.rankP=t+1),[...Je].sort((i,t)=>t.pop/t.area-i.pop/i.area).forEach((i,t)=>i.rankD=t+1),Rf()}var uv=new se("#d3d8e2"),dv=new se("#eceff3");function su(i){i.mat.color.copy(i.base).lerp(dv,.86),i.inF||i.mat.color.lerp(uv,.8)}function Rf(){gr=1,wa=1e12;for(let e of Je){let n=Kh(e);gr=Math.max(gr,n),wa=Math.min(wa,n)}let i=Math.log10(Math.max(wa,.01)),t=Math.log10(gr);for(let e of Je)e.base=cv((Math.log10(Math.max(Kh(e),.01))-i)/(t-i)),su(e);Se("#lmin").textContent=_r(wa),Se("#lmax").textContent=_r(gr),Se("#lname").textContent=iu==="pop"?"habitantes":"hab./km\xB2",oc()}function oc(){let i=lv[nu],t=i(gr),e=24*$h;for(let n of Je)n.zt=$h<=.001?.01:Math.max(.12*Math.min(1,$h),e*i(Kh(n))/t)*(n.inF?1:.1);vn()}var xf=Object.fromEntries(Je.map(i=>[i.code,i])),Ql=[],Pf=[];for(let i of xr.bd){let t=xf[i.a],e=xf[i.b];if(!(!t||!e))for(let n=0;n+3<i.p.length;n+=2)Pf.push((i.p[n]-Ea)*Ci,(i.p[n+1]-Ta)*Ci,0,(i.p[n+2]-Ea)*Ci,(i.p[n+3]-Ta)*Ci,0),Ql.push(t,e)}var nc=new Vi;nc.setPositions(Pf);var If=new wi({color:2764864,linewidth:4.4,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3}),Lf=new wi({color:16777215,linewidth:2.4,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-6});[If,Lf].forEach((i,t)=>{let e=new Ts(nc,i);e.frustumCulled=!1,e.renderOrder=10+t,os.add(e)});function fv(){let i=nc.attributes.instanceStart.data.array;for(let t=0;t<Ql.length;t+=2){let e=Math.max(Ql[t].z,Ql[t+1].z)+.12,n=t/2*6;i[n+2]=e,i[n+5]=e}nc.attributes.instanceStart.data.needsUpdate=!0}var ic={};for(let i of Object.keys(jl)){let t=Je.filter(h=>h.pr===i),e=0,n=0,s=0,r=1e9,a=-1e9,o=1e9,l=-1e9;for(let h of t)e+=h.area,n+=h.cx*h.area,s+=h.cy*h.area,r=Math.min(r,h.cx),a=Math.max(a,h.cx),o=Math.min(o,h.cy),l=Math.max(l,h.cy);let c=document.createElement("div");c.className="plab",c.textContent=jl[i],c.title="Ver solo "+Cf[i],c.onclick=()=>wv("pr:"+i),document.body.appendChild(c),ic[i]={el:c,p:new L(n/e,s/e,0),cx:(r+a)/2,cy:(o+l)/2,ext:Math.max(a-r,l-o),ext2:[a-r,l-o],area:e,name:jl[i]}}var qh=new L;function pv(){for(let i in ic){let t=ic[i];qh.copy(t.p).project(Pi),t.el.style.transform=`translate(-50%,-50%) translate(${(qh.x*.5+.5)*innerWidth}px,${(-qh.y*.5+.5)*innerHeight}px)`}}var Qe={tilt:0,yaw:0,dist:150,tx:0,ty:0},de={...Qe};function mv(){let i=innerWidth/innerHeight,t=Math.tan(ac*Math.PI/360);return Math.max(xr.h*Ci*1.1,100*1.1/i)/(2*t)}var gv=document.getElementById("northr");document.getElementById("north").addEventListener("click",()=>{de.yaw=Math.round(de.yaw/(2*Math.PI))*2*Math.PI,vn()});function ru(){Object.assign(de,{tilt:0,yaw:0,dist:mv(),tx:0,ty:0}),vn()}function _v(){let{tilt:i,yaw:t,dist:e,tx:n,ty:s}=Qe;Pi.position.set(n+e*Math.sin(i)*Math.sin(t),s-e*Math.sin(i)*Math.cos(t),e*Math.cos(i)),Pi.up.set(-Math.cos(i)*Math.sin(t),Math.cos(i)*Math.cos(t),Math.sin(i)),Pi.lookAt(n,s,0)}var tc=!0,vf=performance.now(),Aa=new Map;function vn(){tc=!0}function Df(i){requestAnimationFrame(Df);let t=En((i-vf)/1e3,0,.05);vf=i;let e=1-Math.exp(-t*10),n=!1;for(let s of Object.keys(Qe)){let r=de[s]-Qe[s];Math.abs(r)>1e-4*(s==="dist"?10:1)?(Qe[s]+=r*e,n=!0):Qe[s]=de[s]}for(let s of Je){let r=s.zt-s.z;Math.abs(r)>.002?(s.z+=r*Math.min(1,e*.8),s.group.scale.z=s.z,s.og.position.z=s.z+.04,n=!0):s.z!==s.zt&&(s.z=s.zt,s.group.scale.z=s.z,s.og.position.z=s.z+.04)}for(let[s,r]of Aa){let a=(i-r)/1800;a>=1?(Aa.delete(s),Is(s)):Is(s,.5*Math.sin(Math.PI*a)),n=!0}window.__rodTick&&window.__rodTick(i)&&(tc=!0),(n||tc)&&(gv.style.transform=`rotate(${Qe.yaw}rad) scaleY(${(.55+.45*Math.cos(Qe.tilt)).toFixed(3)})`,_v(),fv(),pv(),window.__rodFrame&&window.__rodFrame(),Ra.render(os,Pi),tc=n,Se("#tilt").value=Math.round(de.tilt*180/Math.PI),Se("#yaw").value=Math.round(((de.yaw*180/Math.PI+180)%360+360)%360-180))}function Uf(){Ra.setSize(innerWidth,innerHeight,!1),Pi.aspect=innerWidth/innerHeight,Pi.updateProjectionMatrix(),If.resolution.set(innerWidth,innerHeight),Lf.resolution.set(innerWidth,innerHeight),window.__rodResize&&window.__rodResize(),vn()}addEventListener("resize",()=>{Uf(),He.length&&ls()});Dn.addEventListener("wheel",i=>{i.preventDefault();let t=i.deltaMode===1?16:1,e=i.deltaY*t;if(i.altKey){let n=(Math.abs(i.deltaX)>Math.abs(i.deltaY)?i.deltaX:i.deltaY)*t;de.yaw+=n*.0035}else i.ctrlKey?de.dist=En(de.dist*Math.exp(e*.01),6,400):de.tilt=En(de.tilt+e*.002,0,1.32);vn()},{passive:!1});Dn.addEventListener("contextmenu",i=>i.preventDefault());var Ri=new Map,Bn=null,Cs=0,jh=0,Qh=0;var sc=null;Dn.addEventListener("pointerdown",i=>{if(i.pointerType!=="mouse"&&!document.body.classList.contains("used")&&(document.body.classList.add("used"),He.length&&setTimeout(ls,50)),Dn.setPointerCapture(i.pointerId),Ri.set(i.pointerId,{x:i.clientX,y:i.clientY}),Ri.size===1&&(Bn={rot:i.button===2||i.altKey,moved:0,multi:!1,touch:i.pointerType!=="mouse"}),Ri.size===2){let[t,e]=[...Ri.values()];Cs=Math.hypot(t.x-e.x,t.y-e.y),jh=Math.atan2(e.y-t.y,e.x-t.x),Qh=(t.y+e.y)/2,sc={mode:null,rot:0,sc:0,tl:0},Bn&&(Bn.multi=!0)}au()});Dn.addEventListener("pointermove",i=>{let t=Ri.get(i.pointerId);if(!t){Hi={x:i.clientX,y:i.clientY},tu||(tu=requestAnimationFrame(vv));return}let e=i.clientX-t.x,n=i.clientY-t.y;if(t.x=i.clientX,t.y=i.clientY,Ri.size===2){let[s,r]=[...Ri.values()],a=Math.hypot(s.x-r.x,s.y-r.y),o=Math.atan2(r.y-s.y,r.x-s.x),l=(s.y+r.y)/2,c=o-jh;c>Math.PI&&(c-=2*Math.PI),c<-Math.PI&&(c+=2*Math.PI);let h=Cs?a-Cs:0,f=l-Qh,u=sc||(sc={mode:null,rot:0,sc:0,tl:0});u.rot+=c,u.sc+=h,u.tl+=f,u.mode?u.mode==="zoom"&&Math.abs(u.rot)>.45&&(u.mode="rotate"):Math.abs(u.rot)>.3?u.mode="rotate":Math.abs(u.tl)>30&&Math.abs(u.sc)<18?u.mode="tilt":Math.abs(u.sc)>12&&(u.mode="zoom"),(u.mode==="zoom"||u.mode==="rotate")&&Cs&&(de.dist=En(de.dist*Cs/a,6,400)),u.mode==="rotate"&&(de.yaw+=c,Qe.yaw=de.yaw),u.mode==="tilt"&&(de.tilt=En(de.tilt-f*.006,0,1.32),Qe.tilt=de.tilt),Cs=a,jh=o,Qh=l,vn();return}if(Bn.moved+=Math.abs(e)+Math.abs(n),Bn.rot||i.altKey)de.yaw+=e*.005,de.tilt=En(de.tilt+n*.004,0,1.32),Qe.yaw=de.yaw,Qe.tilt=de.tilt;else{let s=2*Qe.dist*Math.tan(ac*Math.PI/360)/innerHeight,r=Math.sin(Qe.yaw),a=Math.cos(Qe.yaw),o=1/Math.max(Math.cos(Qe.tilt),.3);de.tx=En(de.tx-a*e*s+-r*n*s*o,-70,70),de.ty=En(de.ty-r*e*s+a*n*s*o,-70,70),Qe.tx=de.tx,Qe.ty=de.ty}vn()});var Nf=i=>{let t=Bn&&!Bn.rot&&!Bn.multi&&Bn.moved<(Bn.touch?12:6)&&i.type==="pointerup"&&Ri.size===1,e=Bn&&Bn.touch;Ri.delete(i.pointerId),Cs=0,sc=null,Ri.size||(Bn=null),t&&window.__rodTap&&window.__rodTap(i.clientX,i.clientY)};Dn.addEventListener("pointerup",Nf);Dn.addEventListener("pointercancel",Nf);Dn.addEventListener("dblclick",ru);addEventListener("keydown",i=>{i.key==="Alt"&&(Dn.style.cursor="move")});addEventListener("keyup",i=>{i.key==="Alt"&&(Dn.style.cursor="")});addEventListener("blur",()=>{Dn.style.cursor=""});var xv=new ca,yf=new Ct,Hi=null,tu=0,Rs=null;function vv(){if(tu=0,!Hi||Bn)return;yf.set(Hi.x/innerWidth*2-1,-(Hi.y/innerHeight)*2+1),xv.setFromCamera(yf,Pi);let i=null;if(i!==Rs){let e=Rs;Rs=i,e&&Is(e),i&&Is(i),vn()}let t=window.__rodHover&&window.__rodHover(Hi.x,Hi.y);if(t){As.innerHTML=t,As.style.display="block";let e=As.offsetWidth,n=As.offsetHeight;As.style.left=En(Hi.x+14,6,innerWidth-e-6)+"px",As.style.top=En(Hi.y+14,6,innerHeight-n-6)+"px",Dn.style.cursor="pointer"}else au(),Dn.style.cursor=""}Dn.addEventListener("pointerleave",()=>{if(Hi=null,Rs){let i=Rs;Rs=null,Is(i),vn()}au()});var As=Se("#tip");function au(){As.style.display="none"}document.querySelectorAll("[data-metric]").forEach(i=>i.onclick=()=>{iu=i.dataset.metric,document.querySelectorAll("[data-metric]").forEach(t=>t.classList.toggle("on",t===i)),Rf()});document.querySelectorAll("[data-mode]").forEach(i=>i.onclick=()=>{nu=i.dataset.mode,document.querySelectorAll("[data-mode]").forEach(t=>t.classList.toggle("on",t===i)),oc()});Se("#yaw").oninput=i=>{de.yaw=+i.target.value*Math.PI/180,vn()};Se("#tilt").oninput=i=>{de.tilt=+i.target.value*Math.PI/180,vn()};Se("#zin").onclick=()=>{de.dist=En(de.dist*.75,6,400),vn()};Se("#zout").onclick=()=>{de.dist=En(de.dist/.75,6,400),vn()};Se("#rst").onclick=ru;var Sf=["#2563eb","#059669","#7c3aed","#db2777","#0891b2","#ca8a04"],He=[],Mf={},yv=i=>Mf[i]||(Mf[i]=new _s({color:i}));function Ff(i,t){i.og.children.forEach(e=>e.material=t?yv(t):Ef)}function Is(i,t=0){let e=i.mat.emissive;i===Rs?e.setHex(5592405):i.sel?e.copy(i.sel.tint):e.setHex(0),t&&e.addScalar(t)}function ou(i,t){let e=1e9,n=-1e9,s=1e9,r=-1e9;for(let c of i)e=Math.min(e,c.cx-c.size/2),n=Math.max(n,c.cx+c.size/2),s=Math.min(s,c.cy-c.size/2),r=Math.max(r,c.cy+c.size/2);let a=innerWidth/innerHeight,o=Math.tan(ac*Math.PI/360),l=i.length===1?En(i[0].size*3.2+14,14,120):En(Math.max((r-s)*1.5,(n-e)*1.5/a)/(2*o)+6,14,300);Object.assign(de,{tx:(e+n)/2,ty:(s+r)/2,dist:l,tilt:t,yaw:0}),vn()}var as=Se("#q"),Yn=Se("#list"),ke=Se("#mcs");function lc(i,t=!0){if(Yn.style.display="none",as.value="",!i.sel){He.length>=6&&Of(He[0].o,!0);let e=new Set(He.map(s=>s.color)),n=Sf.find(s=>!e.has(s))||Sf[0];i.sel={o:i,color:n,tint:new se(n).multiplyScalar(.12)},He.push(i.sel),Ff(i,n)}ke.classList.contains("min")&&Pa(!1),Aa.set(i,performance.now()),Is(i),t&&ou([i],Math.max(de.tilt,.9)),ls()}function Of(i,t){let e=He.indexOf(i.sel);e>=0&&He.splice(e,1),i.sel=null,Ff(i,null),Is(i),vn(),t||ls()}function Bf(i){let t=Math.min(devicePixelRatio||1,2),e=i.clientWidth,n=i.clientHeight;i.width=e*t,i.height=n*t;let s=i.getContext("2d");s.scale(t,t),s.clearRect(0,0,e,n);let r=He.map(h=>{let f=1e9,u=-1e9,m=1e9,g=-1e9;for(let S of h.o.rings)for(let p=0;p<S[0].length;p+=2)f=Math.min(f,S[0][p]),u=Math.max(u,S[0][p]),m=Math.min(m,S[0][p+1]),g=Math.max(g,S[0][p+1]);return{x0:f,x1:u,y0:m,y1:g}}),a=Math.max(...r.map(h=>Math.max(h.x1-h.x0,h.y1-h.y0))),o=(Math.min(e,n)-22)/a;He.forEach((h,f)=>{let u=r[f],m=(u.x0+u.x1)/2,g=(u.y0+u.y1)/2;s.beginPath();for(let S of h.o.rings)for(let p of S)for(let d=0;d<p.length;d+=2){let A=e/2+(p[d]-m)*o,C=n/2-(p[d+1]-g)*o;d?s.lineTo(A,C):s.moveTo(A,C),d===p.length-2&&s.closePath()}s.fillStyle=h.color+"40",s.fill("evenodd"),s.lineWidth=1.6,s.strokeStyle=h.color,s.stroke()});let l=o/ov,c=[.5,1,2,5,10,20,50,100].find(h=>h*l>=28)||100;s.fillStyle="#6b7385",s.fillRect(10,n-12,c*l,2),s.font="10px system-ui",s.fillText(c+" km",12+c*l,n-8)}function ls(){if(!He.length){ke.innerHTML="",ke.style.display="none",Pa(!1);return}if(ke.style.display="flex",innerWidth<=640){let e=Se("#inf").getBoundingClientRect().bottom;ke.style.top=Math.round(e+8)+"px",ke.style.maxHeight=Math.max(110,Math.min(innerHeight*(Se("#rc").classList.contains("min")?.7:.4),Se("#rc").getBoundingClientRect().top-e-16))+"px",ke.style.width=""}else if(innerHeight<=500){let e=Se("#inf").getBoundingClientRect().bottom;ke.style.top=Math.round(e+8)+"px",ke.style.maxHeight=Math.max(120,innerHeight-e-20)+"px",ke.style.width="min(290px, 40vw)"}else ke.style.top="",ke.style.maxHeight="",ke.style.width="";let i=He.map((e,n)=>{let s=e.o;return`<div class="mc" draggable="true" data-i="${n}" style="--c:${e.color}"><button class="x" data-x="${n}" title="Cerrar">\xD7</button><div class="mh"><i class="dot"></i><b>${s.name}</b><em>${jl[s.pr]}</em></div><div class="mb">${Gi(s.pop)} hab.</div><small>${_r(s.area)} km\xB2 \xB7 ${_r(s.pop/s.area)} hab./km\xB2 \xB7 n\xBA ${s.rankP} en poblaci\xF3n</small></div>`}).join("");if(He.length>1){let e=s=>Math.max(...He.map(s));if(i+='<div class="cmp"><div class="ct">Comparar <small>arrastra una ficha sobre otra para reordenar</small></div><canvas id="sil"></canvas><small class="sc">Siluetas superpuestas a la misma escala</small>'+[["Habitantes",s=>s.o.pop,Gi],["Superficie (km\xB2)",s=>s.o.area,_r],["Densidad (hab./km\xB2)",s=>s.o.pop/s.o.area,_r]].map(([s,r,a])=>`<div class="cr"><span>${s}</span>${He.map(o=>`<div class="bw"><i style="width:${Math.max(2,r(o)/e(r)*100)}%;background:${o.color}"></i><b>${a(r(o))}</b></div>`).join("")}</div>`).join(""),He.length===2){let[s,r]=He.map(c=>c.o),[a,o]=s.pop>=r.pop?[s,r]:[r,s],l=(c,h)=>(c>=h?c/h:h/c).toLocaleString("es-ES",{maximumFractionDigits:1});i+=`<small class="ratio"><b>${a.name}</b> tiene ${l(a.pop,o.pop)}\xD7 los habitantes de <b>${o.name}</b> y ocupa ${l(a.area,o.area)}\xD7 ${a.area>=o.area?"su superficie":"menos superficie"}.</small>`}i+="</div>"}ke.innerHTML=i,ke.querySelectorAll("[data-x]").forEach(e=>e.onclick=n=>{n.stopPropagation(),Of(He[+e.dataset.x].o)}),ke.querySelectorAll(".mc").forEach(e=>{e.onclick=()=>ou([He[+e.dataset.i].o],Math.max(de.tilt,.9)),e.onmouseenter=()=>{let n=He[+e.dataset.i].o;Aa.set(n,performance.now())},e.ondragstart=n=>{n.dataTransfer.setData("text/plain",e.dataset.i),e.classList.add("drag")},e.ondragend=()=>e.classList.remove("drag"),e.ondragover=n=>{n.preventDefault(),e.classList.add("over")},e.ondragleave=()=>e.classList.remove("over"),e.ondrop=n=>{n.preventDefault();let s=+n.dataTransfer.getData("text/plain"),r=+e.dataset.i;if(s!==r){let[a]=He.splice(s,1);He.splice(r,0,a),ls();let o=Se("#sil");o&&o.classList.add("flash")}}});let t=Se("#sil");t&&Bf(t)}as.addEventListener("input",()=>{if(window.__rodSearch){window.__rodSearch(as.value);return}let i=Yh(as.value.trim());if(!i){Yn.style.display="none";return}let t=[],e=[];for(let s of Je){let r=Yh(s.name);r.startsWith(i)?t.push(s):r.includes(i)&&e.push(s)}let n=t.sort((s,r)=>r.pop-s.pop).concat(e.sort((s,r)=>r.pop-s.pop)).slice(0,8);Yn.innerHTML=n.map((s,r)=>`<li data-i="${r}">${s.name}<em>${Gi(s.pop)}</em></li>`).join("")||'<li class="no">Sin resultados</li>',Yn.style.display="block",Yn.querySelectorAll("li[data-i]").forEach(s=>s.onclick=()=>lc(n[+s.dataset.i])),Yn._r=n});as.addEventListener("keydown",i=>{i.key==="Enter"&&Yn._pick?Yn._pick(0):i.key==="Enter"&&Yn._r&&Yn._r[0]&&lc(Yn._r[0]),i.key==="Escape"&&(as.value="",Yn.style.display="none")});addEventListener("keydown",i=>{i.key==="Escape"&&i.target!==as&&zf()});var bf=0;addEventListener("resize",()=>{clearTimeout(bf),bf=setTimeout(()=>{let i=Se("#sil");i&&Bf(i)},120)});var rc=null,eu=Se("#chip");function Sv(i,t,e=.8){rc={codes:new Set(i.map(n=>n.code)),label:t},Je.forEach(n=>{n.inF=rc.codes.has(n.code),su(n)}),eu.innerHTML=`<span>Mostrando: <b>${t}</b> \xB7 ${i.length} municipio${i.length===1?"":"s"}</span><button id="chx" title="Quitar filtro">\xD7</button>`,eu.style.display="flex",Se("#chx").onclick=zf,oc(),ou(i,e),i.slice(0,40).forEach(n=>Aa.set(n,performance.now()))}function zf(){rc&&(rc=null,Je.forEach(i=>{i.inF=!0,su(i)}),eu.style.display="none",oc())}var Mv="prov";function bv(i){let t=[...Je].sort((a,o)=>o.pop-a.pop),e=[...Je].sort((a,o)=>o.pop/o.area-a.pop/a.area),[n,s,r]=i.split(":");if(n==="pr")return[Je.filter(a=>a.pr===s),Cf[s]];if(n==="top")return s==="pop"?[t.slice(0,10),"10 con m\xE1s habitantes"]:[e.slice(0,10),"10 m\xE1s densos"];if(n==="low")return s==="pop"?[t.slice(-10),"10 con menos habitantes"]:[e.slice(-10),"10 menos densos"];if(n==="size")return[Je.filter(a=>a.pop>=+s&&a.pop<+r),+r>1e9?`${Gi(+s)} o m\xE1s habitantes`:+s==0?`menos de ${Gi(+r)} habitantes`:`${Gi(+s)} \u2013 ${Gi(+r-1)} habitantes`];if(n==="n50"){let a=0,o=0;for(let l of t)if(a+=l.pop,o++,a>=Jh/2)break;return[t.slice(0,o),"la mitad de la poblaci\xF3n"]}return[[],""]}function wv(i){let[t,e]=bv(i);t.length&&Sv(t,e,i.startsWith("pr:")?.75:.8)}document.querySelectorAll("[data-tab]").forEach(i=>i.onclick=()=>{Mv=i.dataset.tab,Se("#dbody").scrollTop=0});var Ps=Se("#rc"),ec=Se("#mcstab");function Ca(i){Ps.classList.toggle("min",i),Se("#rcgrab span").textContent=i?"Mostrar controles":"Ocultar controles",He.length&&ls()}function Pa(i){ke.classList.toggle("min",i),ke.style.transform="",ke.style.opacity="",ec.classList.toggle("on",i&&He.length>0),i&&(ec.textContent=`\u25B8 ${He.length} ${He.length===1?"ficha":"fichas"}`,ec.style.top=ke.style.top||"124px")}function lu(i,{onMove:t,onEnd:e,axis:n}){let s=null;i.addEventListener("pointerdown",a=>{a.pointerType==="mouse"||!cc.matches||a.target.closest("input,button:not(#rcgrab),.seg")||(s={x:a.clientX,y:a.clientY,id:a.pointerId,lock:null})}),addEventListener("pointermove",a=>{if(!s||a.pointerId!==s.id)return;let o=a.clientX-s.x,l=a.clientY-s.y;!s.lock&&Math.hypot(o,l)>10&&(s.lock=Math.abs(o)>Math.abs(l)?"x":"y"),s.lock===n&&t&&t(o,l)});let r=a=>{if(!s||a.pointerId!==s.id)return;let o=a.clientX-s.x,l=a.clientY-s.y,c=s.lock;s=null,e(c===n?o:0,c===n?l:0,c)};addEventListener("pointerup",r,!0),addEventListener("pointercancel",r,!0)}Se("#rcgrab").onclick=()=>Ca(!Ps.classList.contains("min"));var kf=()=>innerWidth>640;lu(Ps,{axis:"y",onEnd:(i,t)=>{if(!kf())if(t>40&&!Ps.classList.contains("min")){let e=Se("#dp.open #dbody");(!e||e.scrollTop<=0||t>120)&&Ca(!0)}else t<-30&&Ps.classList.contains("min")&&Ca(!1)}});lu(Ps,{axis:"x",onEnd:i=>{kf()&&(i>50?Ca(!0):i<-30&&Ps.classList.contains("min")&&Ca(!1))}});lu(ke,{axis:"x",onMove:i=>{i<0&&(ke.classList.add("sw"),ke.style.transform=`translateX(${i}px)`,ke.style.opacity=Math.max(.2,1+i/300))},onEnd:i=>{ke.classList.remove("sw"),i<-60?Pa(!0):(ke.style.transform="",ke.style.opacity="")}});ec.onclick=()=>{Pa(!1),ls()};Se("#dtoggle").onclick=()=>{let i=Se("#dp").classList.toggle("open");Se("#rc").classList.toggle("dopen",i),Se("#dtoggle").textContent=i?cc.matches&&innerWidth<=640?"\u2190 Controles":"En directo \u25B4":"En directo: conectar datos de Renfe \u25BE",window.__rodCard&&window.__rodCard()};var cc=matchMedia("(max-width:640px), (max-height:500px)");function Vf(){let i=Se("#leg");cc.matches?Se("#rc").insertBefore(i,Se("#dtoggle")):document.body.appendChild(i),He.length&&ls()}cc.addEventListener("change",Vf);Vf();Uf();hv();ru();Object.assign(Qe,de);for(let i of Je)i.z=.01;requestAnimationFrame(Df);gf({scene:os,camera:Pi,renderer:Ra,goal:de,cur:Qe,invalidate:vn,flyTo:(i,t,e,n)=>{Object.assign(de,{tx:(i-Ea)*Ci,ty:(t-Ta)*Ci,dist:e,tilt:n}),vn()},K:Ci,CX:Ea,CY:Ta,mcs:ke,q:as,list:Yn,munis:Je,select:lc,norm:Yh,fmt:Gi,clamp:En,mcsMin:Pa});window.__app={scene:os,renderer:Ra,camera:Pi,munis:Je,labs:ic,goal:de,cur:Qe,select:lc,get mode(){return nu}};window.__ready=!0;})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
