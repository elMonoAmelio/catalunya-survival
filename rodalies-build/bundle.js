(()=>{var Vf=0,xu=1,Hf=2;var oo=1,Gf=2,Vr=3,Ts=0,Wn=1,Wi=2,$i=0,Hr=1,vu=2,yu=3,Su=4,Wf=5;var Js=100,$f=101,Xf=102,qf=103,Yf=104,Zf=200,Jf=201,Kf=202,jf=203,bu=204,Mu=205,Qf=206,tp=207,ep=208,np=209,ip=210,sp=211,rp=212,ap=213,op=214,xl=0,vl=1,yl=2,Cr=3,Sl=4,bl=5,Ml=6,wl=7,rc=0,lp=1,cp=2,Ci=0,wu=1,Eu=2,Tu=3,Au=4,Cu=5,Ru=6,Iu=7;var Pu=300,As=301,Ks=302,ac=303,oc=304,lo=306,El=1e3,Bi=1001,Tl=1002,yn=1003,hp=1004;var co=1005;var Tn=1006,lc=1007;var Cs=1008;var jn=1009,Lu=1010,Du=1011,Gr=1012,cc=1013,Ri=1014,mi=1015,Ii=1016,hc=1017,uc=1018,Wr=1020,Nu=35902,Uu=35899,Fu=1021,Ou=1022,gi=1023,zi=1026,Rs=1027,dc=1028,fc=1029,Is=1030,pc=1031;var mc=1033,ho=33776,uo=33777,fo=33778,po=33779,gc=35840,_c=35841,xc=35842,vc=35843,yc=36196,Sc=37492,bc=37496,Mc=37488,wc=37489,mo=37490,Ec=37491,Tc=37808,Ac=37809,Cc=37810,Rc=37811,Ic=37812,Pc=37813,Lc=37814,Dc=37815,Nc=37816,Uc=37817,Fc=37818,Oc=37819,Bc=37820,kc=37821,zc=36492,Vc=36494,Hc=36495,Gc=36283,Wc=36284,go=36285,$c=36286;var Ta=2300,Al=2301,gl=2302,ru=2303,au=2400,ou=2401,lu=2402;var up=3200;var Xc=0,dp=1,cs="",ri="srgb",Aa="srgb-linear",Ca="linear",Ge="srgb";var _l=7680;var fp=519,pp=512,mp=513,gp=514,qc=515,_p=516,xp=517,Yc=518,vp=519,Bu=35044;var ku="300 es",Ei=2e3,Rr=2001;function pg(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function mg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ra(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function yp(){let i=Ra("canvas");return i.style.display="block",i}var nf={},Ir=null;function Ia(...i){let t="THREE."+i.shift();Ir?Ir("log",t,...i):console.log(t,...i)}function Sp(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function fe(...i){i=Sp(i);let t="THREE."+i.shift();if(Ir)Ir("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function ge(...i){i=Sp(i);let t="THREE."+i.shift();if(Ir)Ir("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Gs(...i){let t=i.join(" ");t in nf||(nf[t]=!0,fe(...i))}function bp(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Mp={[xl]:vl,[yl]:Ml,[Sl]:wl,[Cr]:bl,[vl]:xl,[Ml]:yl,[wl]:Sl,[bl]:Cr},Vi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],sf=1234567,ba=Math.PI/180,Pr=180/Math.PI;function ki(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Nn[i&255]+Nn[i>>8&255]+Nn[i>>16&255]+Nn[i>>24&255]+"-"+Nn[t&255]+Nn[t>>8&255]+"-"+Nn[t>>16&15|64]+Nn[t>>24&255]+"-"+Nn[e&63|128]+Nn[e>>8&255]+"-"+Nn[e>>16&255]+Nn[e>>24&255]+Nn[n&255]+Nn[n>>8&255]+Nn[n>>16&255]+Nn[n>>24&255]).toLowerCase()}function Me(i,t,e){return Math.max(t,Math.min(e,i))}function zu(i,t){return(i%t+t)%t}function gg(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function _g(i,t,e){return i!==t?(e-i)/(t-i):0}function Ma(i,t,e){return(1-e)*i+e*t}function xg(i,t,e,n){return Ma(i,t,1-Math.exp(-e*n))}function vg(i,t=1){return t-Math.abs(zu(i,t*2)-t)}function yg(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Sg(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function bg(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Mg(i,t){return i+Math.random()*(t-i)}function wg(i){return i*(.5-Math.random())}function Eg(i){i!==void 0&&(sf=i);let t=sf+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Tg(i){return i*ba}function Ag(i){return i*Pr}function Cg(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Rg(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ig(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Pg(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),m=r((t-n)/2),d=a((t-n)/2),g=r((n-t)/2),x=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*m,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*m,o*c);break;case"ZXZ":i.set(l*m,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*x,l*g,o*c);break;case"YXY":i.set(l*g,o*h,l*x,o*c);break;case"ZYZ":i.set(l*x,l*g,o*h,o*c);break;default:fe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function wi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Xe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Vu={DEG2RAD:ba,RAD2DEG:Pr,generateUUID:ki,clamp:Me,euclideanModulo:zu,mapLinear:gg,inverseLerp:_g,lerp:Ma,damp:xg,pingpong:vg,smoothstep:yg,smootherstep:Sg,randInt:bg,randFloat:Mg,randFloatSpread:wg,seededRandom:Eg,degToRad:Tg,radToDeg:Ag,isPowerOfTwo:Cg,ceilPowerOfTwo:Rg,floorPowerOfTwo:Ig,setQuaternionFromProperEuler:Pg,normalize:Xe,denormalize:wi},Lt=class i{static{i.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Me(this.x,t.x,e.x),this.y=Me(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Me(this.x,t,e),this.y=Me(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Me(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Hi=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],m=n[s+3],d=r[a+0],g=r[a+1],x=r[a+2],A=r[a+3];if(m!==A||l!==d||c!==g||h!==x){let p=l*d+c*g+h*x+m*A;p<0&&(d=-d,g=-g,x=-x,A=-A,p=-p);let f=1-o;if(p<.9995){let N=Math.acos(p),U=Math.sin(N);f=Math.sin(f*N)/U,o=Math.sin(o*N)/U,l=l*f+d*o,c=c*f+g*o,h=h*f+x*o,m=m*f+A*o}else{l=l*f+d*o,c=c*f+g*o,h=h*f+x*o,m=m*f+A*o;let N=1/Math.sqrt(l*l+c*c+h*h+m*m);l*=N,c*=N,h*=N,m*=N}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=m}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],m=r[a],d=r[a+1],g=r[a+2],x=r[a+3];return t[e]=o*x+h*m+l*g-c*d,t[e+1]=l*x+h*d+c*m-o*g,t[e+2]=c*x+h*g+o*d-l*m,t[e+3]=h*x-o*m-l*d-c*g,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),m=o(r/2),d=l(n/2),g=l(s/2),x=l(r/2);switch(a){case"XYZ":this._x=d*h*m+c*g*x,this._y=c*g*m-d*h*x,this._z=c*h*x+d*g*m,this._w=c*h*m-d*g*x;break;case"YXZ":this._x=d*h*m+c*g*x,this._y=c*g*m-d*h*x,this._z=c*h*x-d*g*m,this._w=c*h*m+d*g*x;break;case"ZXY":this._x=d*h*m-c*g*x,this._y=c*g*m+d*h*x,this._z=c*h*x+d*g*m,this._w=c*h*m-d*g*x;break;case"ZYX":this._x=d*h*m-c*g*x,this._y=c*g*m+d*h*x,this._z=c*h*x-d*g*m,this._w=c*h*m+d*g*x;break;case"YZX":this._x=d*h*m+c*g*x,this._y=c*g*m+d*h*x,this._z=c*h*x-d*g*m,this._w=c*h*m-d*g*x;break;case"XZY":this._x=d*h*m-c*g*x,this._y=c*g*m-d*h*x,this._z=c*h*x+d*g*m,this._w=c*h*m+d*g*x;break;default:fe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],m=e[10],d=n+o+m;if(d>0){let g=.5/Math.sqrt(d+1);this._w=.25/g,this._x=(h-l)*g,this._y=(r-c)*g,this._z=(a-s)*g}else if(n>o&&n>m){let g=2*Math.sqrt(1+n-o-m);this._w=(h-l)/g,this._x=.25*g,this._y=(s+a)/g,this._z=(r+c)/g}else if(o>m){let g=2*Math.sqrt(1+o-n-m);this._w=(r-c)/g,this._x=(s+a)/g,this._y=.25*g,this._z=(l+h)/g}else{let g=2*Math.sqrt(1+m-n-o);this._w=(a-s)/g,this._x=(r+c)/g,this._y=(l+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Me(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},G=class i{static{i.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(rf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(rf.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),m=2*(r*n-a*e);return this.x=e+l*c+a*m-o*h,this.y=n+l*h+o*c-r*m,this.z=s+l*m+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Me(this.x,t.x,e.x),this.y=Me(this.y,t.y,e.y),this.z=Me(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Me(this.x,t,e),this.y=Me(this.y,t,e),this.z=Me(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Me(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Dh.copy(this).projectOnVector(t),this.sub(Dh)}reflect(t){return this.sub(Dh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Dh=new G,rf=new Hi,be=class i{static{i.prototype.isMatrix3=!0}constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],m=n[7],d=n[2],g=n[5],x=n[8],A=s[0],p=s[3],f=s[6],N=s[1],U=s[4],T=s[7],b=s[2],D=s[5],z=s[8];return r[0]=a*A+o*N+l*b,r[3]=a*p+o*U+l*D,r[6]=a*f+o*T+l*z,r[1]=c*A+h*N+m*b,r[4]=c*p+h*U+m*D,r[7]=c*f+h*T+m*z,r[2]=d*A+g*N+x*b,r[5]=d*p+g*U+x*D,r[8]=d*f+g*T+x*z,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],m=h*a-o*c,d=o*l-h*r,g=c*r-a*l,x=e*m+n*d+s*g;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let A=1/x;return t[0]=m*A,t[1]=(s*c-h*n)*A,t[2]=(o*n-s*a)*A,t[3]=d*A,t[4]=(h*e-s*l)*A,t[5]=(s*r-o*e)*A,t[6]=g*A,t[7]=(n*l-c*e)*A,t[8]=(a*e-n*r)*A,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Gs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Nh.makeScale(t,e)),this}rotate(t){return Gs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Nh.makeRotation(-t)),this}translate(t,e){return Gs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Nh.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Nh=new be,af=new be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),of=new be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Lg(){let i={enabled:!0,workingColorSpace:Aa,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Ge&&(s.r=os(s.r),s.g=os(s.g),s.b=os(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ge&&(s.r=Ar(s.r),s.g=Ar(s.g),s.b=Ar(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===cs?Ca:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Gs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Gs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Aa]:{primaries:t,whitePoint:n,transfer:Ca,toXYZ:af,fromXYZ:of,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ri},outputColorSpaceConfig:{drawingBufferColorSpace:ri}},[ri]:{primaries:t,whitePoint:n,transfer:Ge,toXYZ:af,fromXYZ:of,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ri}}}),i}var Le=Lg();function os(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ar(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ur,Cl=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ur===void 0&&(ur=Ra("canvas")),ur.width=t.width,ur.height=t.height;let s=ur.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ur}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ra("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=os(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(os(e[n]/255)*255):e[n]=os(e[n]);return{data:e,width:t.width,height:t.height}}else return fe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Dg=0,Lr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Dg++}),this.uuid=ki(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Uh(s[a].image)):r.push(Uh(s[a]))}else r=Uh(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Uh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Cl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(fe("Texture: Unable to serialize Texture."),{})}var Ng=0,Fh=new G,Zn=class i extends Vi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Bi,s=Bi,r=Tn,a=Cs,o=gi,l=jn,c=i.DEFAULT_ANISOTROPY,h=cs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ng++}),this.uuid=ki(),this.name="",this.source=new Lr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Fh).x}get height(){return this.source.getSize(Fh).y}get depth(){return this.source.getSize(Fh).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){fe(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){fe(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Pu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case El:t.x=t.x-Math.floor(t.x);break;case Bi:t.x=t.x<0?0:1;break;case Tl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case El:t.y=t.y-Math.floor(t.y);break;case Bi:t.y=t.y<0?0:1;break;case Tl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Zn.DEFAULT_IMAGE=null;Zn.DEFAULT_MAPPING=Pu;Zn.DEFAULT_ANISOTROPY=1;var We=class i{static{i.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],m=l[8],d=l[1],g=l[5],x=l[9],A=l[2],p=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(m-A)<.01&&Math.abs(x-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(m+A)<.1&&Math.abs(x+p)<.1&&Math.abs(c+g+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let U=(c+1)/2,T=(g+1)/2,b=(f+1)/2,D=(h+d)/4,z=(m+A)/4,M=(x+p)/4;return U>T&&U>b?U<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(U),s=D/n,r=z/n):T>b?T<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),n=D/s,r=M/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=z/r,s=M/r),this.set(n,s,r,e),this}let N=Math.sqrt((p-x)*(p-x)+(m-A)*(m-A)+(d-h)*(d-h));return Math.abs(N)<.001&&(N=1),this.x=(p-x)/N,this.y=(m-A)/N,this.z=(d-h)/N,this.w=Math.acos((c+g+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Me(this.x,t.x,e.x),this.y=Me(this.y,t.y,e.y),this.z=Me(this.z,t.z,e.z),this.w=Me(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Me(this.x,t,e),this.y=Me(this.y,t,e),this.z=Me(this.z,t,e),this.w=Me(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Me(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Rl=class extends Vi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new We(0,0,t,e),this.scissorTest=!1,this.viewport=new We(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Zn(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Tn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Lr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Jn=class extends Rl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Pa=class extends Zn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=yn,this.minFilter=yn,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Il=class extends Zn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=yn,this.minFilter=yn,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Oe=class i{static{i.prototype.isMatrix4=!0}constructor(t,e,n,s,r,a,o,l,c,h,m,d,g,x,A,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,m,d,g,x,A,p)}set(t,e,n,s,r,a,o,l,c,h,m,d,g,x,A,p){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=m,f[14]=d,f[3]=g,f[7]=x,f[11]=A,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/dr.setFromMatrixColumn(t,0).length(),r=1/dr.setFromMatrixColumn(t,1).length(),a=1/dr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),m=Math.sin(r);if(t.order==="XYZ"){let d=a*h,g=a*m,x=o*h,A=o*m;e[0]=l*h,e[4]=-l*m,e[8]=c,e[1]=g+x*c,e[5]=d-A*c,e[9]=-o*l,e[2]=A-d*c,e[6]=x+g*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*h,g=l*m,x=c*h,A=c*m;e[0]=d+A*o,e[4]=x*o-g,e[8]=a*c,e[1]=a*m,e[5]=a*h,e[9]=-o,e[2]=g*o-x,e[6]=A+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*h,g=l*m,x=c*h,A=c*m;e[0]=d-A*o,e[4]=-a*m,e[8]=x+g*o,e[1]=g+x*o,e[5]=a*h,e[9]=A-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*h,g=a*m,x=o*h,A=o*m;e[0]=l*h,e[4]=x*c-g,e[8]=d*c+A,e[1]=l*m,e[5]=A*c+d,e[9]=g*c-x,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,g=a*c,x=o*l,A=o*c;e[0]=l*h,e[4]=A-d*m,e[8]=x*m+g,e[1]=m,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=g*m+x,e[10]=d-A*m}else if(t.order==="XZY"){let d=a*l,g=a*c,x=o*l,A=o*c;e[0]=l*h,e[4]=-m,e[8]=c*h,e[1]=d*m+A,e[5]=a*h,e[9]=g*m-x,e[2]=x*m-g,e[6]=o*h,e[10]=A*m+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ug,t,Fg)}lookAt(t,e,n){let s=this.elements;return ii.subVectors(t,e),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),ms.crossVectors(n,ii),ms.lengthSq()===0&&(Math.abs(n.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),ms.crossVectors(n,ii)),ms.normalize(),Go.crossVectors(ii,ms),s[0]=ms.x,s[4]=Go.x,s[8]=ii.x,s[1]=ms.y,s[5]=Go.y,s[9]=ii.y,s[2]=ms.z,s[6]=Go.z,s[10]=ii.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],m=n[5],d=n[9],g=n[13],x=n[2],A=n[6],p=n[10],f=n[14],N=n[3],U=n[7],T=n[11],b=n[15],D=s[0],z=s[4],M=s[8],L=s[12],k=s[1],$=s[5],nt=s[9],it=s[13],X=s[2],K=s[6],ot=s[10],lt=s[14],bt=s[3],ht=s[7],xt=s[11],gt=s[15];return r[0]=a*D+o*k+l*X+c*bt,r[4]=a*z+o*$+l*K+c*ht,r[8]=a*M+o*nt+l*ot+c*xt,r[12]=a*L+o*it+l*lt+c*gt,r[1]=h*D+m*k+d*X+g*bt,r[5]=h*z+m*$+d*K+g*ht,r[9]=h*M+m*nt+d*ot+g*xt,r[13]=h*L+m*it+d*lt+g*gt,r[2]=x*D+A*k+p*X+f*bt,r[6]=x*z+A*$+p*K+f*ht,r[10]=x*M+A*nt+p*ot+f*xt,r[14]=x*L+A*it+p*lt+f*gt,r[3]=N*D+U*k+T*X+b*bt,r[7]=N*z+U*$+T*K+b*ht,r[11]=N*M+U*nt+T*ot+b*xt,r[15]=N*L+U*it+T*lt+b*gt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],m=t[6],d=t[10],g=t[14],x=t[3],A=t[7],p=t[11],f=t[15],N=l*g-c*d,U=o*g-c*m,T=o*d-l*m,b=a*g-c*h,D=a*d-l*h,z=a*m-o*h;return e*(A*N-p*U+f*T)-n*(x*N-p*b+f*D)+s*(x*U-A*b+f*z)-r*(x*T-A*D+p*z)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],m=t[9],d=t[10],g=t[11],x=t[12],A=t[13],p=t[14],f=t[15],N=e*o-n*a,U=e*l-s*a,T=e*c-r*a,b=n*l-s*o,D=n*c-r*o,z=s*c-r*l,M=h*A-m*x,L=h*p-d*x,k=h*f-g*x,$=m*p-d*A,nt=m*f-g*A,it=d*f-g*p,X=N*it-U*nt+T*$+b*k-D*L+z*M;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let K=1/X;return t[0]=(o*it-l*nt+c*$)*K,t[1]=(s*nt-n*it-r*$)*K,t[2]=(A*z-p*D+f*b)*K,t[3]=(d*D-m*z-g*b)*K,t[4]=(l*k-a*it-c*L)*K,t[5]=(e*it-s*k+r*L)*K,t[6]=(p*T-x*z-f*U)*K,t[7]=(h*z-d*T+g*U)*K,t[8]=(a*nt-o*k+c*M)*K,t[9]=(n*k-e*nt-r*M)*K,t[10]=(x*D-A*T+f*N)*K,t[11]=(m*T-h*D-g*N)*K,t[12]=(o*L-a*$-l*M)*K,t[13]=(e*$-n*L+s*M)*K,t[14]=(A*U-x*b-p*N)*K,t[15]=(h*b-m*U+d*N)*K,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,m=o+o,d=r*c,g=r*h,x=r*m,A=a*h,p=a*m,f=o*m,N=l*c,U=l*h,T=l*m,b=n.x,D=n.y,z=n.z;return s[0]=(1-(A+f))*b,s[1]=(g+T)*b,s[2]=(x-U)*b,s[3]=0,s[4]=(g-T)*D,s[5]=(1-(d+f))*D,s[6]=(p+N)*D,s[7]=0,s[8]=(x+U)*z,s[9]=(p-N)*z,s[10]=(1-(d+A))*z,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=dr.set(s[0],s[1],s[2]).length(),o=dr.set(s[4],s[5],s[6]).length(),l=dr.set(s[8],s[9],s[10]).length();r<0&&(a=-a),yi.copy(this);let c=1/a,h=1/o,m=1/l;return yi.elements[0]*=c,yi.elements[1]*=c,yi.elements[2]*=c,yi.elements[4]*=h,yi.elements[5]*=h,yi.elements[6]*=h,yi.elements[8]*=m,yi.elements[9]*=m,yi.elements[10]*=m,e.setFromRotationMatrix(yi),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=Ei,l=!1){let c=this.elements,h=2*r/(e-t),m=2*r/(n-s),d=(e+t)/(e-t),g=(n+s)/(n-s),x,A;if(l)x=r/(a-r),A=a*r/(a-r);else if(o===Ei)x=-(a+r)/(a-r),A=-2*a*r/(a-r);else if(o===Rr)x=-a/(a-r),A=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=m,c[9]=g,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=A,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Ei,l=!1){let c=this.elements,h=2/(e-t),m=2/(n-s),d=-(e+t)/(e-t),g=-(n+s)/(n-s),x,A;if(l)x=1/(a-r),A=a/(a-r);else if(o===Ei)x=-2/(a-r),A=-(a+r)/(a-r);else if(o===Rr)x=-1/(a-r),A=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=m,c[9]=0,c[13]=g,c[2]=0,c[6]=0,c[10]=x,c[14]=A,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},dr=new G,yi=new Oe,Ug=new G(0,0,0),Fg=new G(1,1,1),ms=new G,Go=new G,ii=new G,lf=new Oe,cf=new Hi,ls=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],m=s[2],d=s[6],g=s[10];switch(e){case"XYZ":this._y=Math.asin(Me(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Me(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-m,r),this._z=0);break;case"ZXY":this._x=Math.asin(Me(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-m,g),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Me(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(d,g),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Me(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-m,r)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-Me(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,g),this._y=0);break;default:fe("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return lf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(lf,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return cf.setFromEuler(this),this.setFromQuaternion(cf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ls.DEFAULT_ORDER="XYZ";var Dr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Og=0,hf=new G,fr=new Hi,ns=new Oe,Wo=new G,pa=new G,Bg=new G,kg=new Hi,uf=new G(1,0,0),df=new G(0,1,0),ff=new G(0,0,1),pf={type:"added"},zg={type:"removed"},pr={type:"childadded",child:null},Oh={type:"childremoved",child:null},Sn=class i extends Vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Og++}),this.uuid=ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new G,e=new ls,n=new Hi,s=new G(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Oe},normalMatrix:{value:new be}}),this.matrix=new Oe,this.matrixWorld=new Oe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Dr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return fr.setFromAxisAngle(t,e),this.quaternion.multiply(fr),this}rotateOnWorldAxis(t,e){return fr.setFromAxisAngle(t,e),this.quaternion.premultiply(fr),this}rotateX(t){return this.rotateOnAxis(uf,t)}rotateY(t){return this.rotateOnAxis(df,t)}rotateZ(t){return this.rotateOnAxis(ff,t)}translateOnAxis(t,e){return hf.copy(t).applyQuaternion(this.quaternion),this.position.add(hf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(uf,t)}translateY(t){return this.translateOnAxis(df,t)}translateZ(t){return this.translateOnAxis(ff,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ns.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Wo.copy(t):Wo.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),pa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ns.lookAt(pa,Wo,this.up):ns.lookAt(Wo,pa,this.up),this.quaternion.setFromRotationMatrix(ns),s&&(ns.extractRotation(s.matrixWorld),fr.setFromRotationMatrix(ns),this.quaternion.premultiply(fr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ge("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(pf),pr.child=t,this.dispatchEvent(pr),pr.child=null):ge("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(zg),Oh.child=t,this.dispatchEvent(Oh),Oh.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ns.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ns.multiply(t.parent.matrixWorld)),t.applyMatrix4(ns),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(pf),pr.child=t,this.dispatchEvent(pr),pr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pa,t,Bg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pa,kg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let m=l[c];r(t.shapes,m)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),m=a(t.shapes),d=a(t.skeletons),g=a(t.animations),x=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),m.length>0&&(n.shapes=m),d.length>0&&(n.skeletons=d),g.length>0&&(n.animations=g),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Sn.DEFAULT_UP=new G(0,1,0);Sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ti=class extends Sn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Vg={type:"move"},Nr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ti,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ti,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ti,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let A of t.hand.values()){let p=e.getJointPose(A,n),f=this._getHandJoint(c,A);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}let h=c.joints["index-finger-tip"],m=c.joints["thumb-tip"],d=h.position.distanceTo(m.position),g=.02,x=.005;c.inputState.pinching&&d>g+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=g-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Vg)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ti;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},wp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gs={h:0,s:0,l:0},$o={h:0,s:0,l:0};function Bh(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var pe=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ri){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Le.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Le.workingColorSpace){return this.r=t,this.g=e,this.b=n,Le.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Le.workingColorSpace){if(t=zu(t,1),e=Me(e,0,1),n=Me(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Bh(a,r,t+1/3),this.g=Bh(a,r,t),this.b=Bh(a,r,t-1/3)}return Le.colorSpaceToWorking(this,s),this}setStyle(t,e=ri){function n(r){r!==void 0&&parseFloat(r)<1&&fe("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:fe("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);fe("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ri){let n=wp[t.toLowerCase()];return n!==void 0?this.setHex(n,e):fe("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=os(t.r),this.g=os(t.g),this.b=os(t.b),this}copyLinearToSRGB(t){return this.r=Ar(t.r),this.g=Ar(t.g),this.b=Ar(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ri){return Le.workingToColorSpace(Un.copy(this),t),Math.round(Me(Un.r*255,0,255))*65536+Math.round(Me(Un.g*255,0,255))*256+Math.round(Me(Un.b*255,0,255))}getHexString(t=ri){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Le.workingColorSpace){Le.workingToColorSpace(Un.copy(this),e);let n=Un.r,s=Un.g,r=Un.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let m=a-o;switch(c=h<=.5?m/(a+o):m/(2-a-o),a){case n:l=(s-r)/m+(s<r?6:0);break;case s:l=(r-n)/m+2;break;case r:l=(n-s)/m+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Le.workingColorSpace){return Le.workingToColorSpace(Un.copy(this),e),t.r=Un.r,t.g=Un.g,t.b=Un.b,t}getStyle(t=ri){Le.workingToColorSpace(Un.copy(this),t);let e=Un.r,n=Un.g,s=Un.b;return t!==ri?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(gs),this.setHSL(gs.h+t,gs.s+e,gs.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(gs),t.getHSL($o);let n=Ma(gs.h,$o.h,e),s=Ma(gs.s,$o.s,e),r=Ma(gs.l,$o.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Un=new pe;pe.NAMES=wp;var La=class extends Sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ls,this.environmentIntensity=1,this.environmentRotation=new ls,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Si=new G,is=new G,kh=new G,ss=new G,mr=new G,gr=new G,mf=new G,zh=new G,Vh=new G,Hh=new G,Gh=new We,Wh=new We,$h=new We,ys=class i{constructor(t=new G,e=new G,n=new G){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Si.subVectors(t,e),s.cross(Si);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Si.subVectors(s,e),is.subVectors(n,e),kh.subVectors(t,e);let a=Si.dot(Si),o=Si.dot(is),l=Si.dot(kh),c=is.dot(is),h=is.dot(kh),m=a*c-o*o;if(m===0)return r.set(0,0,0),null;let d=1/m,g=(c*l-o*h)*d,x=(a*h-o*l)*d;return r.set(1-g-x,x,g)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ss)===null?!1:ss.x>=0&&ss.y>=0&&ss.x+ss.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,ss)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ss.x),l.addScaledVector(a,ss.y),l.addScaledVector(o,ss.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Gh.setScalar(0),Wh.setScalar(0),$h.setScalar(0),Gh.fromBufferAttribute(t,e),Wh.fromBufferAttribute(t,n),$h.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Gh,r.x),a.addScaledVector(Wh,r.y),a.addScaledVector($h,r.z),a}static isFrontFacing(t,e,n,s){return Si.subVectors(n,e),is.subVectors(t,e),Si.cross(is).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Si.subVectors(this.c,this.b),is.subVectors(this.a,this.b),Si.cross(is).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;mr.subVectors(s,n),gr.subVectors(r,n),zh.subVectors(t,n);let l=mr.dot(zh),c=gr.dot(zh);if(l<=0&&c<=0)return e.copy(n);Vh.subVectors(t,s);let h=mr.dot(Vh),m=gr.dot(Vh);if(h>=0&&m<=h)return e.copy(s);let d=l*m-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(mr,a);Hh.subVectors(t,r);let g=mr.dot(Hh),x=gr.dot(Hh);if(x>=0&&g<=x)return e.copy(r);let A=g*c-l*x;if(A<=0&&c>=0&&x<=0)return o=c/(c-x),e.copy(n).addScaledVector(gr,o);let p=h*x-g*m;if(p<=0&&m-h>=0&&g-x>=0)return mf.subVectors(r,s),o=(m-h)/(m-h+(g-x)),e.copy(s).addScaledVector(mf,o);let f=1/(p+A+d);return a=A*f,o=d*f,e.copy(n).addScaledVector(mr,a).addScaledVector(gr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Gn=class{constructor(t=new G(1/0,1/0,1/0),e=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(bi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(bi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=bi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,bi):bi.fromBufferAttribute(r,a),bi.applyMatrix4(t.matrixWorld),this.expandByPoint(bi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Xo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Xo.copy(n.boundingBox)),Xo.applyMatrix4(t.matrixWorld),this.union(Xo)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,bi),bi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ma),qo.subVectors(this.max,ma),_r.subVectors(t.a,ma),xr.subVectors(t.b,ma),vr.subVectors(t.c,ma),_s.subVectors(xr,_r),xs.subVectors(vr,xr),Bs.subVectors(_r,vr);let e=[0,-_s.z,_s.y,0,-xs.z,xs.y,0,-Bs.z,Bs.y,_s.z,0,-_s.x,xs.z,0,-xs.x,Bs.z,0,-Bs.x,-_s.y,_s.x,0,-xs.y,xs.x,0,-Bs.y,Bs.x,0];return!Xh(e,_r,xr,vr,qo)||(e=[1,0,0,0,1,0,0,0,1],!Xh(e,_r,xr,vr,qo))?!1:(Yo.crossVectors(_s,xs),e=[Yo.x,Yo.y,Yo.z],Xh(e,_r,xr,vr,qo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,bi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(bi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(rs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),rs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),rs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),rs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),rs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),rs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),rs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),rs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(rs),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},rs=[new G,new G,new G,new G,new G,new G,new G,new G],bi=new G,Xo=new Gn,_r=new G,xr=new G,vr=new G,_s=new G,xs=new G,Bs=new G,ma=new G,qo=new G,Yo=new G,ks=new G;function Xh(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ks.fromArray(i,r);let o=s.x*Math.abs(ks.x)+s.y*Math.abs(ks.y)+s.z*Math.abs(ks.z),l=t.dot(ks),c=e.dot(ks),h=n.dot(ks);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var fn=new G,Zo=new Lt,Hg=0,qe=class extends Vi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Hg++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Bu,this.updateRanges=[],this.gpuType=mi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Zo.fromBufferAttribute(this,e),Zo.applyMatrix3(t),this.setXY(e,Zo.x,Zo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)fn.fromBufferAttribute(this,e),fn.applyMatrix3(t),this.setXYZ(e,fn.x,fn.y,fn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)fn.fromBufferAttribute(this,e),fn.applyMatrix4(t),this.setXYZ(e,fn.x,fn.y,fn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)fn.fromBufferAttribute(this,e),fn.applyNormalMatrix(t),this.setXYZ(e,fn.x,fn.y,fn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)fn.fromBufferAttribute(this,e),fn.transformDirection(t),this.setXYZ(e,fn.x,fn.y,fn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=wi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Xe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=wi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=wi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=wi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=wi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Xe(e,this.array),n=Xe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Xe(e,this.array),n=Xe(n,this.array),s=Xe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Xe(e,this.array),n=Xe(n,this.array),s=Xe(s,this.array),r=Xe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Da=class extends qe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Na=class extends qe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var on=class extends qe{constructor(t,e,n){super(new Float32Array(t),e,n)}},Gg=new Gn,ga=new G,qh=new G,Kn=class{constructor(t=new G,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Gg.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ga.subVectors(t,this.center);let e=ga.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ga,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(qh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ga.copy(t.center).add(qh)),this.expandByPoint(ga.copy(t.center).sub(qh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Wg=0,pi=new Oe,Yh=new Sn,yr=new G,si=new Gn,_a=new Gn,vn=new G,ln=class i extends Vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wg++}),this.uuid=ki(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(pg(t)?Na:Da)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new be().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return pi.makeRotationFromQuaternion(t),this.applyMatrix4(pi),this}rotateX(t){return pi.makeRotationX(t),this.applyMatrix4(pi),this}rotateY(t){return pi.makeRotationY(t),this.applyMatrix4(pi),this}rotateZ(t){return pi.makeRotationZ(t),this.applyMatrix4(pi),this}translate(t,e,n){return pi.makeTranslation(t,e,n),this.applyMatrix4(pi),this}scale(t,e,n){return pi.makeScale(t,e,n),this.applyMatrix4(pi),this}lookAt(t){return Yh.lookAt(t),Yh.updateMatrix(),this.applyMatrix4(Yh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yr).negate(),this.translate(yr.x,yr.y,yr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new on(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&fe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ge("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];si.setFromBufferAttribute(r),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,si.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,si.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(si.min),this.boundingBox.expandByPoint(si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ge('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ge("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(t){let n=this.boundingSphere.center;if(si.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];_a.setFromBufferAttribute(o),this.morphTargetsRelative?(vn.addVectors(si.min,_a.min),si.expandByPoint(vn),vn.addVectors(si.max,_a.max),si.expandByPoint(vn)):(si.expandByPoint(_a.min),si.expandByPoint(_a.max))}si.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)vn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(vn));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)vn.fromBufferAttribute(o,c),l&&(yr.fromBufferAttribute(t,c),vn.add(yr)),s=Math.max(s,n.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ge('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ge("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new qe(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let M=0;M<n.count;M++)o[M]=new G,l[M]=new G;let c=new G,h=new G,m=new G,d=new Lt,g=new Lt,x=new Lt,A=new G,p=new G;function f(M,L,k){c.fromBufferAttribute(n,M),h.fromBufferAttribute(n,L),m.fromBufferAttribute(n,k),d.fromBufferAttribute(r,M),g.fromBufferAttribute(r,L),x.fromBufferAttribute(r,k),h.sub(c),m.sub(c),g.sub(d),x.sub(d);let $=1/(g.x*x.y-x.x*g.y);isFinite($)&&(A.copy(h).multiplyScalar(x.y).addScaledVector(m,-g.y).multiplyScalar($),p.copy(m).multiplyScalar(g.x).addScaledVector(h,-x.x).multiplyScalar($),o[M].add(A),o[L].add(A),o[k].add(A),l[M].add(p),l[L].add(p),l[k].add(p))}let N=this.groups;N.length===0&&(N=[{start:0,count:t.count}]);for(let M=0,L=N.length;M<L;++M){let k=N[M],$=k.start,nt=k.count;for(let it=$,X=$+nt;it<X;it+=3)f(t.getX(it+0),t.getX(it+1),t.getX(it+2))}let U=new G,T=new G,b=new G,D=new G;function z(M){b.fromBufferAttribute(s,M),D.copy(b);let L=o[M];U.copy(L),U.sub(b.multiplyScalar(b.dot(L))).normalize(),T.crossVectors(D,L);let $=T.dot(l[M])<0?-1:1;a.setXYZW(M,U.x,U.y,U.z,$)}for(let M=0,L=N.length;M<L;++M){let k=N[M],$=k.start,nt=k.count;for(let it=$,X=$+nt;it<X;it+=3)z(t.getX(it+0)),z(t.getX(it+1)),z(t.getX(it+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new qe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,g=n.count;d<g;d++)n.setXYZ(d,0,0,0);let s=new G,r=new G,a=new G,o=new G,l=new G,c=new G,h=new G,m=new G;if(t)for(let d=0,g=t.count;d<g;d+=3){let x=t.getX(d+0),A=t.getX(d+1),p=t.getX(d+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,A),a.fromBufferAttribute(e,p),h.subVectors(a,r),m.subVectors(s,r),h.cross(m),o.fromBufferAttribute(n,x),l.fromBufferAttribute(n,A),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(A,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,g=e.count;d<g;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),m.subVectors(s,r),h.cross(m),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)vn.fromBufferAttribute(t,e),vn.normalize(),t.setXYZ(e,vn.x,vn.y,vn.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,m=o.normalized,d=new c.constructor(l.length*h),g=0,x=0;for(let A=0,p=l.length;A<p;A++){o.isInterleavedBufferAttribute?g=l[A]*o.data.stride+o.offset:g=l[A]*h;for(let f=0;f<h;f++)d[x++]=c[g++]}return new qe(d,h,m)}if(this.index===null)return fe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,m=c.length;h<m;h++){let d=c[h],g=t(d,n);l.push(g)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let m=0,d=c.length;m<d;m++){let g=c[m];h.push(g.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],m=r[c];for(let d=0,g=m.length;d<g;d++)h.push(m[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let m=a[c];this.addGroup(m.start,m.count,m.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Pl=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Bu,this.updateRanges=[],this.version=0,this.uuid=ki()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ki()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ki()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},Hn=new G,Ai=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Hn.fromBufferAttribute(this,e),Hn.applyMatrix4(t),this.setXYZ(e,Hn.x,Hn.y,Hn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Hn.fromBufferAttribute(this,e),Hn.applyNormalMatrix(t),this.setXYZ(e,Hn.x,Hn.y,Hn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Hn.fromBufferAttribute(this,e),Hn.transformDirection(t),this.setXYZ(e,Hn.x,Hn.y,Hn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=wi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Xe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Xe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=wi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=wi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=wi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=wi(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Xe(e,this.array),n=Xe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Xe(e,this.array),n=Xe(n,this.array),s=Xe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Xe(e,this.array),n=Xe(n,this.array),s=Xe(s,this.array),r=Xe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Ia("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new qe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Ia("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Zh=new G,$g=new G,Xg=new be,Mi=class{constructor(t=new G(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Zh.subVectors(n,e).cross($g.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Zh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Xg.getNormalMatrix(t),s=this.coplanarPoint(Zh).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},qg=0,Gi=class extends Vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qg++}),this.uuid=ki(),this.name="",this.type="Material",this.blending=Hr,this.side=Ts,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bu,this.blendDst=Mu,this.blendEquation=Js,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pe(0,0,0),this.blendAlpha=0,this.depthFunc=Cr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_l,this.stencilZFail=_l,this.stencilZPass=_l,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){fe(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){fe(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new pe().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Mi().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Lt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Lt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var as=new G,Jh=new G,Jo=new G,Ko=new G,Ws=class{constructor(t=new G,e=new G(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,as)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=as.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(as.copy(this.origin).addScaledVector(this.direction,e),as.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Jh.copy(t).add(e).multiplyScalar(.5),Jo.copy(e).sub(t).normalize(),Ko.copy(this.origin).sub(Jh);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Jo),o=Ko.dot(this.direction),l=-Ko.dot(Jo),c=Ko.lengthSq(),h=Math.abs(1-a*a),m,d,g,x;if(h>0)if(m=a*l-o,d=a*o-l,x=r*h,m>=0)if(d>=-x)if(d<=x){let A=1/h;m*=A,d*=A,g=m*(m+a*d+2*o)+d*(a*m+d+2*l)+c}else d=r,m=Math.max(0,-(a*d+o)),g=-m*m+d*(d+2*l)+c;else d=-r,m=Math.max(0,-(a*d+o)),g=-m*m+d*(d+2*l)+c;else d<=-x?(m=Math.max(0,-(-a*r+o)),d=m>0?-r:Math.min(Math.max(-r,-l),r),g=-m*m+d*(d+2*l)+c):d<=x?(m=0,d=Math.min(Math.max(-r,-l),r),g=d*(d+2*l)+c):(m=Math.max(0,-(a*r+o)),d=m>0?r:Math.min(Math.max(-r,-l),r),g=-m*m+d*(d+2*l)+c);else d=a>0?-r:r,m=Math.max(0,-(a*d+o)),g=-m*m+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,m),s&&s.copy(Jh).addScaledVector(Jo,d),g}intersectSphere(t,e){if(t.radius<0)return null;as.subVectors(t.center,this.origin);let n=as.dot(this.direction),s=as.dot(as)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,m=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),m>=0?(o=(t.min.z-d.z)*m,l=(t.max.z-d.z)*m):(o=(t.max.z-d.z)*m,l=(t.min.z-d.z)*m),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,as)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,m=t.x-a.x,d=t.y-a.y,g=t.z-a.z,x=e.x-a.x,A=e.y-a.y,p=e.z-a.z,f=n.x-a.x,N=n.y-a.y,U=n.z-a.z,T=Math.abs(l),b=Math.abs(c),D=Math.abs(h),z,M,L,k,$,nt,it,X,K,ot,lt,bt;if(T>=b&&T>=D?(L=l,nt=m,K=x,bt=f,l>=0?(z=c,M=h,k=d,$=g,it=A,X=p,ot=N,lt=U):(z=h,M=c,k=g,$=d,it=p,X=A,ot=U,lt=N)):b>=D?(L=c,nt=d,K=A,bt=N,c>=0?(z=h,M=l,k=g,$=m,it=p,X=x,ot=U,lt=f):(z=l,M=h,k=m,$=g,it=x,X=p,ot=f,lt=U)):(L=h,nt=g,K=p,bt=U,h>=0?(z=l,M=c,k=m,$=d,it=x,X=A,ot=f,lt=N):(z=c,M=l,k=d,$=m,it=A,X=x,ot=N,lt=f)),L===0)return null;let ht=z/L,xt=M/L,gt=1/L,zt=k-ht*nt,Gt=$-xt*nt,Ue=it-ht*K,we=X-xt*K,Pe=ot-ht*bt,dt=lt-xt*bt,mt=Pe*we-dt*Ue,Tt=zt*dt-Gt*Pe,ie=Ue*Gt-we*zt;if(s){if(mt<0||Tt<0||ie<0)return null}else if((mt<0||Tt<0||ie<0)&&(mt>0||Tt>0||ie>0))return null;let Vt=mt+Tt+ie;if(Vt===0)return null;let ue=gt*(mt*nt+Tt*K+ie*bt);return(Vt>0?ue<0:ue>0)?null:this.at(ue/Vt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},$s=class extends Gi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ls,this.combine=rc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},gf=new Oe,zs=new Ws,jo=new Kn,_f=new G,Qo=new G,tl=new G,el=new G,Kh=new G,nl=new G,xf=new G,il=new G,bn=class extends Sn{constructor(t=new ln,e=new $s){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){nl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],m=r[l];h!==0&&(Kh.fromBufferAttribute(m,t),a?nl.addScaledVector(Kh,h):nl.addScaledVector(Kh.sub(e),h))}e.add(nl)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),jo.copy(n.boundingSphere),jo.applyMatrix4(r),zs.copy(t.ray).recast(t.near),!(jo.containsPoint(zs.origin)===!1&&(zs.intersectSphere(jo,_f)===null||zs.origin.distanceToSquared(_f)>(t.far-t.near)**2))&&(gf.copy(r).invert(),zs.copy(t.ray).applyMatrix4(gf),!(n.boundingBox!==null&&zs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,zs)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,m=r.attributes.normal,d=r.groups,g=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,A=d.length;x<A;x++){let p=d[x],f=a[p.materialIndex],N=Math.max(p.start,g.start),U=Math.min(o.count,Math.min(p.start+p.count,g.start+g.count));for(let T=N,b=U;T<b;T+=3){let D=o.getX(T),z=o.getX(T+1),M=o.getX(T+2);s=sl(this,f,t,n,c,h,m,D,z,M),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let x=Math.max(0,g.start),A=Math.min(o.count,g.start+g.count);for(let p=x,f=A;p<f;p+=3){let N=o.getX(p),U=o.getX(p+1),T=o.getX(p+2);s=sl(this,a,t,n,c,h,m,N,U,T),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,A=d.length;x<A;x++){let p=d[x],f=a[p.materialIndex],N=Math.max(p.start,g.start),U=Math.min(l.count,Math.min(p.start+p.count,g.start+g.count));for(let T=N,b=U;T<b;T+=3){let D=T,z=T+1,M=T+2;s=sl(this,f,t,n,c,h,m,D,z,M),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let x=Math.max(0,g.start),A=Math.min(l.count,g.start+g.count);for(let p=x,f=A;p<f;p+=3){let N=p,U=p+1,T=p+2;s=sl(this,a,t,n,c,h,m,N,U,T),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function Yg(i,t,e,n,s,r,a,o){let l;if(t.side===Wn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Ts,o),l===null)return null;il.copy(o),il.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(il);return c<e.near||c>e.far?null:{distance:c,point:il.clone(),object:i}}function sl(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Qo),i.getVertexPosition(l,tl),i.getVertexPosition(c,el);let h=Yg(i,t,e,n,Qo,tl,el,xf);if(h){let m=new G;ys.getBarycoord(xf,Qo,tl,el,m),s&&(h.uv=ys.getInterpolatedAttribute(s,o,l,c,m,new Lt)),r&&(h.uv1=ys.getInterpolatedAttribute(r,o,l,c,m,new Lt)),a&&(h.normal=ys.getInterpolatedAttribute(a,o,l,c,m,new G),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new G,materialIndex:0};ys.getNormal(Qo,tl,el,d.normal),h.face=d,h.barycoord=m}return h}var Ua=class extends Zn{constructor(t=null,e=1,n=1,s,r,a,o,l,c=yn,h=yn,m,d){super(null,a,o,l,c,h,s,r,m,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Fa=class extends qe{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Sr=new Oe,vf=new Oe,rl=[],yf=new Gn,Zg=new Oe,xa=new bn,va=new Kn,Oa=class extends bn{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Fa(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Zg)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Gn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Sr),yf.copy(t.boundingBox).applyMatrix4(Sr),this.boundingBox.union(yf)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Kn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Sr),va.copy(t.boundingSphere).applyMatrix4(Sr),this.boundingSphere.union(va)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(xa.geometry=this.geometry,xa.material=this.material,xa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),va.copy(this.boundingSphere),va.applyMatrix4(n),t.ray.intersectsSphere(va)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Sr),vf.multiplyMatrices(n,Sr),xa.matrixWorld=vf,xa.raycast(t,rl);for(let a=0,o=rl.length;a<o;a++){let l=rl[a];l.instanceId=r,l.object=this,e.push(l)}rl.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Fa(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ua(new Float32Array(s*this.count),s,this.count,dc,mi));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Vs=new Kn,Jg=new Lt(.5,.5),al=new G,Ur=class{constructor(t=new Mi,e=new Mi,n=new Mi,s=new Mi,r=new Mi,a=new Mi){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ei,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],m=r[5],d=r[6],g=r[7],x=r[8],A=r[9],p=r[10],f=r[11],N=r[12],U=r[13],T=r[14],b=r[15];if(s[0].setComponents(c-a,g-h,f-x,b-N).normalize(),s[1].setComponents(c+a,g+h,f+x,b+N).normalize(),s[2].setComponents(c+o,g+m,f+A,b+U).normalize(),s[3].setComponents(c-o,g-m,f-A,b-U).normalize(),n)s[4].setComponents(l,d,p,T).normalize(),s[5].setComponents(c-l,g-d,f-p,b-T).normalize();else if(s[4].setComponents(c-l,g-d,f-p,b-T).normalize(),e===Ei)s[5].setComponents(c+l,g+d,f+p,b+T).normalize();else if(e===Rr)s[5].setComponents(l,d,p,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Vs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Vs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Vs)}intersectsSprite(t){Vs.center.set(0,0,0);let e=Jg.distanceTo(t.center);return Vs.radius=.7071067811865476+e,Vs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Vs)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(al.x=s.normal.x>0?t.max.x:t.min.x,al.y=s.normal.y>0?t.max.y:t.min.y,al.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(al)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Xs=class extends Gi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Ll=new G,Dl=new G,Sf=new Oe,ya=new Ws,ol=new Kn,jh=new G,bf=new G,Nl=class extends Sn{constructor(t=new ln,e=new Xs){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Ll.fromBufferAttribute(e,s-1),Dl.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Ll.distanceTo(Dl);t.setAttribute("lineDistance",new on(n,1))}else fe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ol.copy(n.boundingSphere),ol.applyMatrix4(s),ol.radius+=r,t.ray.intersectsSphere(ol)===!1)return;Sf.copy(s).invert(),ya.copy(t.ray).applyMatrix4(Sf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let g=Math.max(0,a.start),x=Math.min(h.count,a.start+a.count);for(let A=g,p=x-1;A<p;A+=c){let f=h.getX(A),N=h.getX(A+1),U=ll(this,t,ya,l,f,N,A);U&&e.push(U)}if(this.isLineLoop){let A=h.getX(x-1),p=h.getX(g),f=ll(this,t,ya,l,A,p,x-1);f&&e.push(f)}}else{let g=Math.max(0,a.start),x=Math.min(d.count,a.start+a.count);for(let A=g,p=x-1;A<p;A+=c){let f=ll(this,t,ya,l,A,A+1,A);f&&e.push(f)}if(this.isLineLoop){let A=ll(this,t,ya,l,x-1,g,x-1);A&&e.push(A)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function ll(i,t,e,n,s,r,a){let o=i.geometry.attributes.position;if(Ll.fromBufferAttribute(o,s),Dl.fromBufferAttribute(o,r),e.distanceSqToSegment(Ll,Dl,jh,bf)>n)return;jh.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(jh);if(!(c<t.near||c>t.far))return{distance:c,point:bf.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Ba=class extends Nl{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},Ul=class extends Gi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Mf=new Oe,cu=new Ws,cl=new Kn,hl=new G,qs=class extends Sn{constructor(t=new ln,e=new Ul){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),cl.copy(n.boundingSphere),cl.applyMatrix4(s),cl.radius+=r,t.ray.intersectsSphere(cl)===!1)return;Mf.copy(s).invert(),cu.copy(t.ray).applyMatrix4(Mf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,m=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),g=Math.min(c.count,a.start+a.count);for(let x=d,A=g;x<A;x++){let p=c.getX(x);hl.fromBufferAttribute(m,p),wf(hl,p,l,s,t,e,this)}}else{let d=Math.max(0,a.start),g=Math.min(m.count,a.start+a.count);for(let x=d,A=g;x<A;x++)hl.fromBufferAttribute(m,x),wf(hl,x,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function wf(i,t,e,n,s,r,a){let o=cu.distanceSqToPoint(i);if(o<e){let l=new G;cu.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var ka=class extends Zn{constructor(t=[],e=As,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var Ss=class extends Zn{constructor(t,e,n=Ri,s,r,a,o=yn,l=yn,c,h=zi,m=1){if(h!==zi&&h!==Rs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:m};super(d,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Lr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Fl=class extends Ss{constructor(t,e=Ri,n=As,s,r,a=yn,o=yn,l,c=zi){let h={width:t,height:t,depth:1},m=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=m,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},za=class extends Zn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Fr=class i extends ln{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],m=[],d=0,g=0;x("z","y","x",-1,-1,n,e,t,a,r,0),x("z","y","x",1,-1,n,e,-t,a,r,1),x("x","z","y",1,1,t,n,e,s,a,2),x("x","z","y",1,-1,t,n,-e,s,a,3),x("x","y","z",1,-1,t,e,n,s,r,4),x("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new on(c,3)),this.setAttribute("normal",new on(h,3)),this.setAttribute("uv",new on(m,2));function x(A,p,f,N,U,T,b,D,z,M,L){let k=T/z,$=b/M,nt=T/2,it=b/2,X=D/2,K=z+1,ot=M+1,lt=0,bt=0,ht=new G;for(let xt=0;xt<ot;xt++){let gt=xt*$-it;for(let zt=0;zt<K;zt++){let Gt=zt*k-nt;ht[A]=Gt*N,ht[p]=gt*U,ht[f]=X,c.push(ht.x,ht.y,ht.z),ht[A]=0,ht[p]=0,ht[f]=D>0?1:-1,h.push(ht.x,ht.y,ht.z),m.push(zt/z),m.push(1-xt/M),lt+=1}}for(let xt=0;xt<M;xt++)for(let gt=0;gt<z;gt++){let zt=d+gt+K*xt,Gt=d+gt+K*(xt+1),Ue=d+(gt+1)+K*(xt+1),we=d+(gt+1)+K*xt;l.push(zt,Gt,we),l.push(Gt,Ue,we),bt+=6}o.addGroup(g,bt,L),g+=bt,d+=lt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Va=class i extends ln{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],m=[],d=[],g=[],x=0,A=[],p=n/2,f=0;N(),a===!1&&(t>0&&U(!0),e>0&&U(!1)),this.setIndex(h),this.setAttribute("position",new on(m,3)),this.setAttribute("normal",new on(d,3)),this.setAttribute("uv",new on(g,2));function N(){let T=new G,b=new G,D=0,z=(e-t)/n;for(let M=0;M<=r;M++){let L=[],k=M/r,$=k*(e-t)+t;for(let nt=0;nt<=s;nt++){let it=nt/s,X=it*l+o,K=Math.sin(X),ot=Math.cos(X);b.x=$*K,b.y=-k*n+p,b.z=$*ot,m.push(b.x,b.y,b.z),T.set(K,z,ot).normalize(),d.push(T.x,T.y,T.z),g.push(it,1-k),L.push(x++)}A.push(L)}for(let M=0;M<s;M++)for(let L=0;L<r;L++){let k=A[L][M],$=A[L+1][M],nt=A[L+1][M+1],it=A[L][M+1];(t>0||L!==0)&&(h.push(k,$,it),D+=3),(e>0||L!==r-1)&&(h.push($,nt,it),D+=3)}c.addGroup(f,D,0),f+=D}function U(T){let b=x,D=new Lt,z=new G,M=0,L=T===!0?t:e,k=T===!0?1:-1;for(let nt=1;nt<=s;nt++)m.push(0,p*k,0),d.push(0,k,0),g.push(.5,.5),x++;let $=x;for(let nt=0;nt<=s;nt++){let X=nt/s*l+o,K=Math.cos(X),ot=Math.sin(X);z.x=L*ot,z.y=p*k,z.z=L*K,m.push(z.x,z.y,z.z),d.push(0,k,0),D.x=K*.5+.5,D.y=ot*.5*k+.5,g.push(D.x,D.y),x++}for(let nt=0;nt<s;nt++){let it=b+nt,X=$+nt;T===!0?h.push(X,X+1,it):h.push(X+1,X,it),M+=3}c.addGroup(f,M,T===!0?1:2),f+=M}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var ai=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){fe("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,g=(a-h)/d;return(s+g)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new Lt:new G);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new G,s=[],r=[],a=[],o=new G,l=new Oe;for(let g=0;g<=t;g++){let x=g/t;s[g]=this.getTangentAt(x,new G)}r[0]=new G,a[0]=new G;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),m=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),m<=c&&(c=m,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let g=1;g<=t;g++){if(r[g]=r[g-1].clone(),a[g]=a[g-1].clone(),o.crossVectors(s[g-1],s[g]),o.length()>Number.EPSILON){o.normalize();let x=Math.acos(Me(s[g-1].dot(s[g]),-1,1));r[g].applyMatrix4(l.makeRotationAxis(o,x))}a[g].crossVectors(s[g],r[g])}if(e===!0){let g=Math.acos(Me(r[0].dot(r[t]),-1,1));g/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(g=-g);for(let x=1;x<=t;x++)r[x].applyMatrix4(l.makeRotationAxis(s[x],g*x)),a[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Or=class extends ai{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new Lt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),m=Math.sin(this.aRotation),d=l-this.aX,g=c-this.aY;l=d*h-g*m+this.aX,c=d*m+g*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Ol=class extends Or{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Hu(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,m){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,g=(o-a)/h-(l-a)/(h+m)+(l-o)/m;d*=h,g*=h,s(a,o,d,g)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var Ef=new G,Tf=new G,Qh=new Hu,tu=new Hu,eu=new Hu,Bl=class extends ai{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new G){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Tf.subVectors(s[0],s[1]).add(s[0]),c=Tf);let m=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Ef.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ef),this.curveType==="centripetal"||this.curveType==="chordal"){let g=this.curveType==="chordal"?.5:.25,x=Math.pow(c.distanceToSquared(m),g),A=Math.pow(m.distanceToSquared(d),g),p=Math.pow(d.distanceToSquared(h),g);A<1e-4&&(A=1),x<1e-4&&(x=A),p<1e-4&&(p=A),Qh.initNonuniformCatmullRom(c.x,m.x,d.x,h.x,x,A,p),tu.initNonuniformCatmullRom(c.y,m.y,d.y,h.y,x,A,p),eu.initNonuniformCatmullRom(c.z,m.z,d.z,h.z,x,A,p)}else this.curveType==="catmullrom"&&(Qh.initCatmullRom(c.x,m.x,d.x,h.x,this.tension),tu.initCatmullRom(c.y,m.y,d.y,h.y,this.tension),eu.initCatmullRom(c.z,m.z,d.z,h.z,this.tension));return n.set(Qh.calc(l),tu.calc(l),eu.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new G().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Af(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function Kg(i,t){let e=1-i;return e*e*t}function jg(i,t){return 2*(1-i)*i*t}function Qg(i,t){return i*i*t}function wa(i,t,e,n){return Kg(i,t)+jg(i,e)+Qg(i,n)}function t0(i,t){let e=1-i;return e*e*e*t}function e0(i,t){let e=1-i;return 3*e*e*i*t}function n0(i,t){return 3*(1-i)*i*i*t}function i0(i,t){return i*i*i*t}function Ea(i,t,e,n,s){return t0(i,t)+e0(i,e)+n0(i,n)+i0(i,s)}var Ha=class extends ai{constructor(t=new Lt,e=new Lt,n=new Lt,s=new Lt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Lt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ea(t,s.x,r.x,a.x,o.x),Ea(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},kl=class extends ai{constructor(t=new G,e=new G,n=new G,s=new G){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new G){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ea(t,s.x,r.x,a.x,o.x),Ea(t,s.y,r.y,a.y,o.y),Ea(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ga=class extends ai{constructor(t=new Lt,e=new Lt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Lt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Lt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},zl=class extends ai{constructor(t=new G,e=new G){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new G){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new G){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Wa=class extends ai{constructor(t=new Lt,e=new Lt,n=new Lt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Lt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(wa(t,s.x,r.x,a.x),wa(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Vl=class extends ai{constructor(t=new G,e=new G,n=new G){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new G){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(wa(t,s.x,r.x,a.x),wa(t,s.y,r.y,a.y),wa(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},$a=class extends ai{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Lt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],m=s[a>s.length-3?s.length-1:a+2];return n.set(Af(o,l.x,c.x,h.x,m.x),Af(o,l.y,c.y,h.y,m.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Lt().fromArray(s))}return this}},hu=Object.freeze({__proto__:null,ArcCurve:Ol,CatmullRomCurve3:Bl,CubicBezierCurve:Ha,CubicBezierCurve3:kl,EllipseCurve:Or,LineCurve:Ga,LineCurve3:zl,QuadraticBezierCurve:Wa,QuadraticBezierCurve3:Vl,SplineCurve:$a}),Hl=class extends ai{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new hu[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new hu[s.type]().fromJSON(s))}return this}},Ys=class extends Hl{constructor(t){super(),this.type="Path",this.currentPoint=new Lt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Ga(this.currentPoint.clone(),new Lt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Wa(this.currentPoint.clone(),new Lt(t,e),new Lt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new Ha(this.currentPoint.clone(),new Lt(t,e),new Lt(n,s),new Lt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new $a(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new Or(t,e,n,s,r,a,o,l);if(this.curves.length>0){let m=c.getPoint(0);m.equals(this.currentPoint)||this.lineTo(m.x,m.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Br=class extends Ys{constructor(t){super(t),this.uuid=ki(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Ys().fromJSON(s))}return this}};function s0(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Ep(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=c0(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let h=o,m=l;for(let d=e;d<s;d+=e){let g=i[d],x=i[d+1];g<o&&(o=g),x<l&&(l=x),g>h&&(h=g),x>m&&(m=x)}c=Math.max(h-o,m-l),c=c!==0?32767/c:0}return Xa(r,a,e,o,l,c,0),a}function Ep(i,t,e,n,s){let r;if(s===y0(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=Cf(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=Cf(a/n|0,i[a],i[a+1],r);return r&&kr(r,r.next)&&(Ya(r),r=r.next),r}function Zs(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(kr(e,e.next)||nn(e.prev,e,e.next)===0)){if(Ya(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Xa(i,t,e,n,s,r,a){if(!i)return;!a&&r&&p0(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?a0(i,n,s,r):r0(i)){t.push(l.i,i.i,c.i),Ya(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=o0(Zs(i),t),Xa(i,t,e,n,s,r,2)):a===2&&l0(i,t,e,n,s,r):Xa(Zs(i),t,e,n,s,r,1);break}}}function r0(i){let t=i.prev,e=i,n=i.next;if(nn(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(s,r,a),m=Math.min(o,l,c),d=Math.max(s,r,a),g=Math.max(o,l,c),x=n.next;for(;x!==t;){if(x.x>=h&&x.x<=d&&x.y>=m&&x.y<=g&&Sa(s,o,r,l,a,c,x.x,x.y)&&nn(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function a0(i,t,e,n){let s=i.prev,r=i,a=i.next;if(nn(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,m=r.y,d=a.y,g=Math.min(o,l,c),x=Math.min(h,m,d),A=Math.max(o,l,c),p=Math.max(h,m,d),f=uu(g,x,t,e,n),N=uu(A,p,t,e,n),U=i.prevZ,T=i.nextZ;for(;U&&U.z>=f&&T&&T.z<=N;){if(U.x>=g&&U.x<=A&&U.y>=x&&U.y<=p&&U!==s&&U!==a&&Sa(o,h,l,m,c,d,U.x,U.y)&&nn(U.prev,U,U.next)>=0||(U=U.prevZ,T.x>=g&&T.x<=A&&T.y>=x&&T.y<=p&&T!==s&&T!==a&&Sa(o,h,l,m,c,d,T.x,T.y)&&nn(T.prev,T,T.next)>=0))return!1;T=T.nextZ}for(;U&&U.z>=f;){if(U.x>=g&&U.x<=A&&U.y>=x&&U.y<=p&&U!==s&&U!==a&&Sa(o,h,l,m,c,d,U.x,U.y)&&nn(U.prev,U,U.next)>=0)return!1;U=U.prevZ}for(;T&&T.z<=N;){if(T.x>=g&&T.x<=A&&T.y>=x&&T.y<=p&&T!==s&&T!==a&&Sa(o,h,l,m,c,d,T.x,T.y)&&nn(T.prev,T,T.next)>=0)return!1;T=T.nextZ}return!0}function o0(i,t){let e=i;do{let n=e.prev,s=e.next.next;!kr(n,s)&&Ap(n,e,e.next,s)&&qa(n,s)&&qa(s,n)&&(t.push(n.i,e.i,s.i),Ya(e),Ya(e.next),e=i=s),e=e.next}while(e!==i);return Zs(e)}function l0(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&_0(a,o)){let l=Cp(a,o);a=Zs(a,a.next),l=Zs(l,l.next),Xa(a,t,e,n,s,r,0),Xa(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function c0(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=Ep(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(g0(c))}s.sort(h0);for(let r=0;r<s.length;r++)e=u0(s[r],e);return e}function h0(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function u0(i,t){let e=d0(i,t);if(!e)return t;let n=Cp(e,i);return Zs(n,n.next),Zs(e,e.next)}function d0(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(kr(i,e))return e;do{if(kr(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let m=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(m<=n&&m>r&&(r=m,a=e.x<e.next.x?e:e.next,m===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Tp(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let m=Math.abs(s-e.y)/(n-e.x);qa(e,i)&&(m<h||m===h&&(e.x>a.x||e.x===a.x&&f0(a,e)))&&(a=e,h=m)}e=e.next}while(e!==o);return a}function f0(i,t){return nn(i.prev,i,t.prev)<0&&nn(t.next,i,i.next)<0}function p0(i,t,e,n){let s=i;do s.z===0&&(s.z=uu(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,m0(s)}function m0(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function uu(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function g0(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Tp(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Sa(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&Tp(i,t,e,n,s,r,a,o)}function _0(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!x0(i,t)&&(qa(i,t)&&qa(t,i)&&v0(i,t)&&(nn(i.prev,i,t.prev)||nn(i,t.prev,t))||kr(i,t)&&nn(i.prev,i,i.next)>0&&nn(t.prev,t,t.next)>0)}function nn(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function kr(i,t){return i.x===t.x&&i.y===t.y}function Ap(i,t,e,n){let s=dl(nn(i,t,e)),r=dl(nn(i,t,n)),a=dl(nn(e,n,i)),o=dl(nn(e,n,t));return!!(s!==r&&a!==o||s===0&&ul(i,e,t)||r===0&&ul(i,n,t)||a===0&&ul(e,i,n)||o===0&&ul(e,t,n))}function ul(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function dl(i){return i>0?1:i<0?-1:0}function x0(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Ap(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function qa(i,t){return nn(i.prev,i,i.next)<0?nn(i,t,i.next)>=0&&nn(i,i.prev,t)>=0:nn(i,t,i.prev)<0||nn(i,i.next,t)<0}function v0(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Cp(i,t){let e=du(i.i,i.x,i.y),n=du(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Cf(i,t,e,n){let s=du(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ya(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function du(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function y0(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var fu=class{static triangulate(t,e,n=2){return s0(t,e,n)}},Hs=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Rf(t),If(n,t);let a=t.length;e.forEach(Rf);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,If(n,e[l]);let o=fu.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Rf(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function If(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Za=class i extends ln{constructor(t=new Br([new Lt(.5,.5),new Lt(-.5,.5),new Lt(-.5,-.5),new Lt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new on(s,3)),this.setAttribute("uv",new on(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,m=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,g=e.bevelThickness!==void 0?e.bevelThickness:.2,x=e.bevelSize!==void 0?e.bevelSize:g-.1,A=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3,f=e.extrudePath,N=e.UVGenerator!==void 0?e.UVGenerator:S0,U,T=!1,b,D,z,M;if(f){U=f.getSpacedPoints(h),T=!0,d=!1;let at=f.isCatmullRomCurve3?f.closed:!1;b=f.computeFrenetFrames(h,at),D=new G,z=new G,M=new G}d||(p=0,g=0,x=0,A=0);let L=o.extractPoints(c),k=L.shape,$=L.holes;if(!Hs.isClockWise(k)){k=k.reverse();for(let at=0,Mt=$.length;at<Mt;at++){let H=$[at];Hs.isClockWise(H)&&($[at]=H.reverse())}}function it(at){let H=10000000000000001e-36,wt=at[0];for(let It=1;It<=at.length;It++){let le=It%at.length,qt=at[le],he=qt.x-wt.x,ce=qt.y-wt.y,W=he*he+ce*ce,Ce=Math.max(Math.abs(qt.x),Math.abs(qt.y),Math.abs(wt.x),Math.abs(wt.y)),Wt=H*Ce*Ce;if(W<=Wt){at.splice(le,1),It--;continue}wt=qt}}it(k),$.forEach(it);let X=$.length,K=k;for(let at=0;at<X;at++){let Mt=$[at];k=k.concat(Mt)}function ot(at,Mt,H){return Mt||ge("ExtrudeGeometry: vec does not exist"),at.clone().addScaledVector(Mt,H)}let lt=k.length;function bt(at,Mt,H){let wt,It,le,qt=at.x-Mt.x,he=at.y-Mt.y,ce=H.x-at.x,W=H.y-at.y,Ce=qt*qt+he*he,Wt=qt*W-he*ce;if(Math.abs(Wt)>Number.EPSILON){let R=Math.sqrt(Ce),v=Math.sqrt(ce*ce+W*W),tt=Mt.x-he/R,st=Mt.y+qt/R,ct=H.x-W/v,At=H.y+ce/v,Ct=((ct-tt)*W-(At-st)*ce)/(qt*W-he*ce);wt=tt+qt*Ct-at.x,It=st+he*Ct-at.y;let ut=wt*wt+It*It;if(ut<=2)return new Lt(wt,It);le=Math.sqrt(ut/2)}else{let R=!1;qt>Number.EPSILON?ce>Number.EPSILON&&(R=!0):qt<-Number.EPSILON?ce<-Number.EPSILON&&(R=!0):Math.sign(he)===Math.sign(W)&&(R=!0),R?(wt=-he,It=qt,le=Math.sqrt(Ce)):(wt=qt,It=he,le=Math.sqrt(Ce/2))}return new Lt(wt/le,It/le)}let ht=[];for(let at=0,Mt=K.length,H=Mt-1,wt=at+1;at<Mt;at++,H++,wt++)H===Mt&&(H=0),wt===Mt&&(wt=0),ht[at]=bt(K[at],K[H],K[wt]);let xt=[],gt,zt=ht.concat();for(let at=0,Mt=X;at<Mt;at++){let H=$[at];gt=[];for(let wt=0,It=H.length,le=It-1,qt=wt+1;wt<It;wt++,le++,qt++)le===It&&(le=0),qt===It&&(qt=0),gt[wt]=bt(H[wt],H[le],H[qt]);xt.push(gt),zt=zt.concat(gt)}let Gt;if(p===0)Gt=Hs.triangulateShape(K,$);else{let at=[],Mt=[];for(let H=0;H<p;H++){let wt=H/p,It=g*Math.cos(wt*Math.PI/2),le=x*Math.sin(wt*Math.PI/2)+A;for(let qt=0,he=K.length;qt<he;qt++){let ce=ot(K[qt],ht[qt],le);Tt(ce.x,ce.y,-It),wt===0&&at.push(ce)}for(let qt=0,he=X;qt<he;qt++){let ce=$[qt];gt=xt[qt];let W=[];for(let Ce=0,Wt=ce.length;Ce<Wt;Ce++){let R=ot(ce[Ce],gt[Ce],le);Tt(R.x,R.y,-It),wt===0&&W.push(R)}wt===0&&Mt.push(W)}}Gt=Hs.triangulateShape(at,Mt)}let Ue=Gt.length,we=x+A;for(let at=0;at<lt;at++){let Mt=d?ot(k[at],zt[at],we):k[at];T?(z.copy(b.normals[0]).multiplyScalar(Mt.x),D.copy(b.binormals[0]).multiplyScalar(Mt.y),M.copy(U[0]).add(z).add(D),Tt(M.x,M.y,M.z)):Tt(Mt.x,Mt.y,0)}for(let at=1;at<=h;at++)for(let Mt=0;Mt<lt;Mt++){let H=d?ot(k[Mt],zt[Mt],we):k[Mt];T?(z.copy(b.normals[at]).multiplyScalar(H.x),D.copy(b.binormals[at]).multiplyScalar(H.y),M.copy(U[at]).add(z).add(D),Tt(M.x,M.y,M.z)):Tt(H.x,H.y,m/h*at)}for(let at=p-1;at>=0;at--){let Mt=at/p,H=g*Math.cos(Mt*Math.PI/2),wt=x*Math.sin(Mt*Math.PI/2)+A;for(let It=0,le=K.length;It<le;It++){let qt=ot(K[It],ht[It],wt);Tt(qt.x,qt.y,m+H)}for(let It=0,le=$.length;It<le;It++){let qt=$[It];gt=xt[It];for(let he=0,ce=qt.length;he<ce;he++){let W=ot(qt[he],gt[he],wt);T?Tt(W.x,W.y+U[h-1].y,U[h-1].x+H):Tt(W.x,W.y,m+H)}}}Pe(),dt();function Pe(){let at=s.length/3;if(d){let Mt=0,H=lt*Mt;for(let wt=0;wt<Ue;wt++){let It=Gt[wt];ie(It[2]+H,It[1]+H,It[0]+H)}Mt=h+p*2,H=lt*Mt;for(let wt=0;wt<Ue;wt++){let It=Gt[wt];ie(It[0]+H,It[1]+H,It[2]+H)}}else{for(let Mt=0;Mt<Ue;Mt++){let H=Gt[Mt];ie(H[2],H[1],H[0])}for(let Mt=0;Mt<Ue;Mt++){let H=Gt[Mt];ie(H[0]+lt*h,H[1]+lt*h,H[2]+lt*h)}}n.addGroup(at,s.length/3-at,0)}function dt(){let at=s.length/3,Mt=0;mt(K,Mt),Mt+=K.length;for(let H=0,wt=$.length;H<wt;H++){let It=$[H];mt(It,Mt),Mt+=It.length}n.addGroup(at,s.length/3-at,1)}function mt(at,Mt){let H=at.length;for(;--H>=0;){let wt=H,It=H-1;It<0&&(It=at.length-1);for(let le=0,qt=h+p*2;le<qt;le++){let he=lt*le,ce=lt*(le+1),W=Mt+wt+he,Ce=Mt+It+he,Wt=Mt+It+ce,R=Mt+wt+ce;Vt(W,Ce,Wt,R)}}}function Tt(at,Mt,H){l.push(at),l.push(Mt),l.push(H)}function ie(at,Mt,H){ue(at),ue(Mt),ue(H);let wt=s.length/3,It=N.generateTopUV(n,s,wt-3,wt-2,wt-1);de(It[0]),de(It[1]),de(It[2])}function Vt(at,Mt,H,wt){ue(at),ue(Mt),ue(wt),ue(Mt),ue(H),ue(wt);let It=s.length/3,le=N.generateSideWallUV(n,s,It-6,It-3,It-2,It-1);de(le[0]),de(le[1]),de(le[3]),de(le[1]),de(le[2]),de(le[3])}function ue(at){s.push(l[at*3+0]),s.push(l[at*3+1]),s.push(l[at*3+2])}function de(at){r.push(at.x),r.push(at.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return b0(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new hu[s.type]().fromJSON(s)),new i(n,t.options)}},S0={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new Lt(r,a),new Lt(o,l),new Lt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],m=t[n*3+2],d=t[s*3],g=t[s*3+1],x=t[s*3+2],A=t[r*3],p=t[r*3+1],f=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new Lt(a,1-l),new Lt(c,1-m),new Lt(d,1-x),new Lt(A,1-f)]:[new Lt(o,1-l),new Lt(h,1-m),new Lt(g,1-x),new Lt(p,1-f)]}};function b0(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Ja=class i extends ln{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,m=t/o,d=e/l,g=[],x=[],A=[],p=[];for(let f=0;f<h;f++){let N=f*d-a;for(let U=0;U<c;U++){let T=U*m-r;x.push(T,-N,0),A.push(0,0,1),p.push(U/o),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let N=0;N<o;N++){let U=N+c*f,T=N+c*(f+1),b=N+1+c*(f+1),D=N+1+c*f;g.push(U,T,D),g.push(T,b,D)}this.setIndex(g),this.setAttribute("position",new on(x,3)),this.setAttribute("normal",new on(A,3)),this.setAttribute("uv",new on(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Ka=class extends ln{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],n=new Set,s=new G,r=new G;if(t.index!==null){let a=t.attributes.position,o=t.index,l=t.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let m=l[c],d=m.start,g=m.count;for(let x=d,A=d+g;x<A;x+=3)for(let p=0;p<3;p++){let f=o.getX(x+p),N=o.getX(x+(p+1)%3);s.fromBufferAttribute(a,f),r.fromBufferAttribute(a,N),Pf(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{let a=t.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,m=3*o+(c+1)%3;s.fromBufferAttribute(a,h),r.fromBufferAttribute(a,m),Pf(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new on(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function Pf(i,t,e){let n=`${i.x},${i.y},${i.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${i.x},${i.y},${i.z}`;return e.has(n)===!0||e.has(s)===!0?!1:(e.add(n),e.add(s),!0)}function js(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Lf(s))s.isRenderTargetTexture?(fe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Lf(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function On(i){let t={};for(let e=0;e<i.length;e++){let n=js(i[e]);for(let s in n)t[s]=n[s]}return t}function Lf(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function M0(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Gu(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Le.workingColorSpace}var _o={clone:js,merge:On},w0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,E0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Mn=class extends Gi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=w0,this.fragmentShader=E0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=js(t.uniforms),this.uniformsGroups=M0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new pe().setHex(s.value);break;case"v2":this.uniforms[n].value=new Lt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new G().fromArray(s.value);break;case"v4":this.uniforms[n].value=new We().fromArray(s.value);break;case"m3":this.uniforms[n].value=new be().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Oe().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Gl=class extends Mn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var ja=class extends Gi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xc,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ls,this.combine=rc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Wl=class extends Gi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=up,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},$l=class extends Gi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function br(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function nu(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var bs=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Xl=class extends bs{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:au,endingEnd:au}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case ou:r=t,o=2*e-n;break;case lu:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ou:a=t,l=2*n-e;break;case lu:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,m=this._offsetNext,d=this._weightPrev,g=this._weightNext,x=(n-e)/(s-e),A=x*x,p=A*x,f=-d*p+2*d*A-d*x,N=(1+d)*p+(-1.5-2*d)*A+(-.5+d)*x+1,U=(-1-g)*p+(1.5+g)*A+.5*x,T=g*p-g*A;for(let b=0;b!==o;++b)r[b]=f*a[h+b]+N*a[c+b]+U*a[l+b]+T*a[m+b];return r}},ql=class extends bs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),m=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*m+a[l+d]*h;return r}},Yl=class extends bs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Zl=class extends bs{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,m=this.outTangents;if(!h||!m){let x=(n-e)/(s-e),A=1-x;for(let p=0;p!==o;++p)r[p]=a[c+p]*A+a[l+p]*x;return r}let d=o*2,g=t-1;for(let x=0;x!==o;++x){let A=a[c+x],p=a[l+x],f=g*d+x*2,N=m[f],U=m[f+1],T=t*d+x*2,b=h[T],D=h[T+1],z=A0(n,e,N,b,s);r[x]=Rp(z,A,U,D,p)}return r}};function Rp(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function T0(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function A0(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=Rp(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=T0(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var oi=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=br(e,this.TimeBufferType),this.values=br(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:br(t.times,Array),values:br(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),nu(t.settings)&&(n.settings={inTangents:br(t.settings.inTangents,Array),outTangents:br(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Yl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ql(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Xl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Zl(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Ta:e=this.InterpolantFactoryMethodDiscrete;break;case Al:e=this.InterpolantFactoryMethodLinear;break;case gl:e=this.InterpolantFactoryMethodSmooth;break;case ru:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return fe("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ta;case this.InterpolantFactoryMethodLinear:return Al;case this.InterpolantFactoryMethodSmooth:return gl;case this.InterpolantFactoryMethodBezier:return ru}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;nu(this.settings)&&(Df(this.settings.inTangents,t),Df(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ge("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(ge("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){ge("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){ge("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&mg(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){ge("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===gl,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let m=o*n,d=m-n,g=m+n;for(let x=0;x!==n;++x){let A=e[m+x];if(A!==e[d+x]||A!==e[g+x]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let m=o*n,d=a*n;for(let g=0;g!==n;++g)e[d+g]=e[m+g]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,nu(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Df(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}oi.prototype.ValueTypeName="";oi.prototype.TimeBufferType=Float32Array;oi.prototype.ValueBufferType=Float32Array;oi.prototype.DefaultInterpolation=Al;var Ms=class extends oi{constructor(t,e,n){super(t,e,n)}};Ms.prototype.ValueTypeName="bool";Ms.prototype.ValueBufferType=Array;Ms.prototype.DefaultInterpolation=Ta;Ms.prototype.InterpolantFactoryMethodLinear=void 0;Ms.prototype.InterpolantFactoryMethodSmooth=void 0;var Jl=class extends oi{constructor(t,e,n,s){super(t,e,n,s)}};Jl.prototype.ValueTypeName="color";var Kl=class extends oi{constructor(t,e,n,s){super(t,e,n,s)}};Kl.prototype.ValueTypeName="number";var jl=class extends bs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)Hi.slerpFlat(r,0,a,c-o,a,c,l);return r}},Qa=class extends oi{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new jl(this.times,this.values,this.getValueSize(),t)}};Qa.prototype.ValueTypeName="quaternion";Qa.prototype.InterpolantFactoryMethodSmooth=void 0;var ws=class extends oi{constructor(t,e,n){super(t,e,n)}};ws.prototype.ValueTypeName="string";ws.prototype.ValueBufferType=Array;ws.prototype.DefaultInterpolation=Ta;ws.prototype.InterpolantFactoryMethodLinear=void 0;ws.prototype.InterpolantFactoryMethodSmooth=void 0;var Ql=class extends oi{constructor(t,e,n,s){super(t,e,n,s)}};Ql.prototype.ValueTypeName="vector";var tc=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,m){return c.push(h,m),this},this.removeHandler=function(h){let m=c.indexOf(h);return m!==-1&&c.splice(m,2),this},this.getHandler=function(h){for(let m=0,d=c.length;m<d;m+=2){let g=c[m],x=c[m+1];if(g.global&&(g.lastIndex=0),g.test(h))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Ip=new tc,ec=class{constructor(t){this.manager=t!==void 0?t:Ip,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};ec.DEFAULT_MATERIAL_NAME="__DEFAULT";var to=class extends Sn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new pe(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},eo=class extends to{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Sn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new pe(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},iu=new Oe,Nf=new G,Uf=new G,nc=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Lt(512,512),this.mapType=jn,this.map=null,this.mapPass=null,this.matrix=new Oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ur,this._frameExtents=new Lt(1,1),this._viewportCount=1,this._viewports=[new We(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Nf.setFromMatrixPosition(t.matrixWorld),e.position.copy(Nf),Uf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Uf),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){iu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(iu,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Rr||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(iu)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},fl=new G,pl=new Hi,Oi=new G,no=class extends Sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Oe,this.projectionMatrix=new Oe,this.projectionMatrixInverse=new Oe,this.coordinateSystem=Ei,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(fl,pl,Oi),Oi.x===1&&Oi.y===1&&Oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fl,pl,Oi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(fl,pl,Oi),Oi.x===1&&Oi.y===1&&Oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fl,pl,Oi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},vs=new G,Ff=new Lt,Of=new Lt,Fn=class extends no{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Pr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ba*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Pr*2*Math.atan(Math.tan(ba*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){vs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(vs.x,vs.y).multiplyScalar(-t/vs.z),vs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(vs.x,vs.y).multiplyScalar(-t/vs.z)}getViewSize(t,e){return this.getViewBounds(t,Ff,Of),e.subVectors(Of,Ff)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ba*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var zr=class extends no{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},pu=class extends nc{constructor(){super(new zr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},io=class extends to{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Sn.DEFAULT_UP),this.updateMatrix(),this.target=new Sn,this.shadow=new pu}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var so=class extends ln{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var Mr=-90,wr=1,ic=class extends Sn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Fn(Mr,wr,t,e);s.layers=this.layers,this.add(s);let r=new Fn(Mr,wr,t,e);r.layers=this.layers,this.add(r);let a=new Fn(Mr,wr,t,e);a.layers=this.layers,this.add(a);let o=new Fn(Mr,wr,t,e);o.layers=this.layers,this.add(o);let l=new Fn(Mr,wr,t,e);l.layers=this.layers,this.add(l);let c=new Fn(Mr,wr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Ei)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Rr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,m=t.getRenderTarget(),d=t.getActiveCubeFace(),g=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;let A=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=A,t.setRenderTarget(n,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(m,d,g),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},sc=class extends Fn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Wu="\\[\\]\\.:\\/",C0=new RegExp("["+Wu+"]","g"),$u="[^"+Wu+"]",R0="[^"+Wu.replace("\\.","")+"]",I0=/((?:WC+[\/:])*)/.source.replace("WC",$u),P0=/(WCOD+)?/.source.replace("WCOD",R0),L0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",$u),D0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",$u),N0=new RegExp("^"+I0+P0+L0+D0+"$"),U0=["material","materials","bones","map"],mu=class{constructor(t,e,n){let s=n||je.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},je=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(C0,"")}static parseTrackName(t){let e=N0.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);U0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){fe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){ge("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ge("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ge("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ge("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ge("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){ge("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){ge("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;ge("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){ge("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ge("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};je.Composite=mu;je.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};je.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};je.prototype.GetterByBindingType=[je.prototype._getValue_direct,je.prototype._getValue_array,je.prototype._getValue_arrayElement,je.prototype._getValue_toArray];je.prototype.SetterByBindingTypeAndVersioning=[[je.prototype._setValue_direct,je.prototype._setValue_direct_setNeedsUpdate,je.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[je.prototype._setValue_array,je.prototype._setValue_array_setNeedsUpdate,je.prototype._setValue_array_setMatrixWorldNeedsUpdate],[je.prototype._setValue_arrayElement,je.prototype._setValue_arrayElement_setNeedsUpdate,je.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[je.prototype._setValue_fromArray,je.prototype._setValue_fromArray_setNeedsUpdate,je.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var JS=new Float32Array(1);var Es=class extends Pl{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}};var Bf=new Oe,ro=class{constructor(t,e,n=0,s=1/0){this.ray=new Ws(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Dr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ge("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Bf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Bf),this}intersectObject(t,e=!0,n=[]){return gu(t,this,n,e),n.sort(kf),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)gu(t[s],this,n,e);return n.sort(kf),n}};function kf(i,t){return i.distance-t.distance}function gu(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)gu(r[a],t,e,!0)}}var _u=class i{static{i.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};var zf=new G,ml=new G,Er=new G,Tr=new G,su=new G,F0=new G,O0=new G,ao=class{constructor(t=new G,e=new G){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){zf.subVectors(t,this.start),ml.subVectors(this.end,this.start);let n=ml.dot(ml);if(n===0)return 0;let r=ml.dot(zf)/n;return e&&(r=Me(r,0,1)),r}closestPointToPoint(t,e,n){let s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}distanceSqToLine3(t,e=F0,n=O0){let s=10000000000000001e-32,r,a,o=this.start,l=t.start,c=this.end,h=t.end;Er.subVectors(c,o),Tr.subVectors(h,l),su.subVectors(o,l);let m=Er.dot(Er),d=Tr.dot(Tr),g=Tr.dot(su);if(m<=s&&d<=s)return e.copy(o),n.copy(l),e.sub(n),e.dot(e);if(m<=s)r=0,a=g/d,a=Me(a,0,1);else{let x=Er.dot(su);if(d<=s)a=0,r=Me(-x/m,0,1);else{let A=Er.dot(Tr),p=m*d-A*A;p!==0?r=Me((A*g-x*d)/p,0,1):r=0,a=(A*r+g)/d,a<0?(a=0,r=Me(-x/m,0,1)):a>1&&(a=1,r=Me((A-x)/m,0,1))}}return e.copy(o).addScaledVector(Er,r),n.copy(l).addScaledVector(Tr,a),e.distanceToSquared(n)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};function Xu(i,t,e,n){let s=B0(n);switch(e){case Fu:return i*t;case dc:return i*t/s.components*s.byteLength;case fc:return i*t/s.components*s.byteLength;case Is:return i*t*2/s.components*s.byteLength;case pc:return i*t*2/s.components*s.byteLength;case Ou:return i*t*3/s.components*s.byteLength;case gi:return i*t*4/s.components*s.byteLength;case mc:return i*t*4/s.components*s.byteLength;case ho:case uo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case fo:case po:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case _c:case vc:return Math.max(i,16)*Math.max(t,8)/4;case gc:case xc:return Math.max(i,8)*Math.max(t,8)/2;case yc:case Sc:case Mc:case wc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case bc:case mo:case Ec:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Tc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ac:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Cc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Rc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ic:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Pc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Lc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Dc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Nc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Uc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Fc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Oc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Bc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case kc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case zc:case Vc:case Hc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Gc:case Wc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case go:case $c:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function B0(i){switch(i){case jn:case Lu:return{byteLength:1,components:1};case Gr:case Du:case Ii:return{byteLength:2,components:1};case hc:case uc:return{byteLength:2,components:4};case Ri:case cc:case mi:return{byteLength:4,components:1};case Nu:case Uu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?fe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function jp(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function z0(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,m=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let g;if(c instanceof Float32Array)g=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)g=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?g=i.HALF_FLOAT:g=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=i.SHORT;else if(c instanceof Uint32Array)g=i.UNSIGNED_INT;else if(c instanceof Int32Array)g=i.INT;else if(c instanceof Int8Array)g=i.BYTE;else if(c instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:m}}function n(o,l,c){let h=l.array,m=l.updateRanges;if(i.bindBuffer(c,o),m.length===0)i.bufferSubData(c,0,h);else{m.sort((g,x)=>g.start-x.start);let d=0;for(let g=1;g<m.length;g++){let x=m[d],A=m[g];A.start<=x.start+x.count+1?x.count=Math.max(x.count,A.start+A.count-x.start):(++d,m[d]=A)}m.length=d+1;for(let g=0,x=m.length;g<x;g++){let A=m[g];i.bufferSubData(c,A.start*h.BYTES_PER_ELEMENT,h,A.start,A.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var V0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,H0=`#ifdef USE_ALPHAHASH
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
#endif`,G0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,W0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,X0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,q0=`#ifdef USE_AOMAP
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
#endif`,Y0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Z0=`#ifdef USE_BATCHING
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
#endif`,J0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,K0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,j0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Q0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,t_=`#ifdef USE_IRIDESCENCE
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
#endif`,e_=`#ifdef USE_BUMPMAP
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
#endif`,n_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,i_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,s_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,r_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,a_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,o_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,l_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,c_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,h_=`#define PI 3.141592653589793
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
} // validated`,u_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,d_=`vec3 transformedNormal = objectNormal;
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
#endif`,f_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,p_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,m_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,g_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,__="gl_FragColor = linearToOutputTexel( gl_FragColor );",x_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,v_=`#ifdef USE_ENVMAP
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
#endif`,y_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,S_=`#ifdef USE_ENVMAP
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
#endif`,b_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,M_=`#ifdef USE_ENVMAP
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
#endif`,w_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,E_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,T_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,A_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,C_=`#ifdef USE_GRADIENTMAP
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
}`,R_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,I_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,P_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,L_=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,D_=`#ifdef USE_ENVMAP
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
#endif`,N_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,U_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,F_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,O_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,B_=`PhysicalMaterial material;
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
#endif`,k_=`uniform sampler2D dfgLUT;
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
}`,z_=`
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
#endif`,V_=`#if defined( RE_IndirectDiffuse )
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
#endif`,H_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,G_=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,W_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,X_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,q_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Y_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Z_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,J_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,K_=`#if defined( USE_POINTS_UV )
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
#endif`,j_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Q_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ex=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ix=`#ifdef USE_MORPHTARGETS
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
#endif`,sx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ax=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ox=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,hx=`#ifdef USE_NORMALMAP
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
#endif`,ux=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,px=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,_x=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Mx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ex=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Tx=`float getShadowMask() {
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
}`,Ax=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cx=`#ifdef USE_SKINNING
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
#endif`,Rx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ix=`#ifdef USE_SKINNING
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
#endif`,Px=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Lx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Dx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Nx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ux=`#ifdef USE_TRANSMISSION
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
#endif`,Fx=`#ifdef USE_TRANSMISSION
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
#endif`,Ox=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Vx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hx=`uniform sampler2D t2D;
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
}`,Gx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$x=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qx=`#include <common>
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
}`,Yx=`#if DEPTH_PACKING == 3200
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
}`,Zx=`#define DISTANCE
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
}`,Jx=`#define DISTANCE
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
}`,Kx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qx=`uniform float scale;
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
}`,tv=`uniform vec3 diffuse;
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
}`,ev=`#include <common>
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
}`,nv=`uniform vec3 diffuse;
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
}`,iv=`#define LAMBERT
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
}`,sv=`#define LAMBERT
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
}`,rv=`#define MATCAP
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
}`,av=`#define MATCAP
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
}`,ov=`#define NORMAL
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
}`,lv=`#define NORMAL
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
}`,cv=`#define PHONG
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
}`,hv=`#define PHONG
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
}`,uv=`#define STANDARD
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
}`,dv=`#define STANDARD
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
}`,fv=`#define TOON
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
}`,pv=`#define TOON
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
}`,mv=`uniform float size;
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
}`,gv=`uniform vec3 diffuse;
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
}`,_v=`#include <common>
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
}`,xv=`uniform vec3 color;
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
}`,vv=`uniform float rotation;
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
}`,yv=`uniform vec3 diffuse;
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
}`,Ae={alphahash_fragment:V0,alphahash_pars_fragment:H0,alphamap_fragment:G0,alphamap_pars_fragment:W0,alphatest_fragment:$0,alphatest_pars_fragment:X0,aomap_fragment:q0,aomap_pars_fragment:Y0,batching_pars_vertex:Z0,batching_vertex:J0,begin_vertex:K0,beginnormal_vertex:j0,bsdfs:Q0,iridescence_fragment:t_,bumpmap_pars_fragment:e_,clipping_planes_fragment:n_,clipping_planes_pars_fragment:i_,clipping_planes_pars_vertex:s_,clipping_planes_vertex:r_,color_fragment:a_,color_pars_fragment:o_,color_pars_vertex:l_,color_vertex:c_,common:h_,cube_uv_reflection_fragment:u_,defaultnormal_vertex:d_,displacementmap_pars_vertex:f_,displacementmap_vertex:p_,emissivemap_fragment:m_,emissivemap_pars_fragment:g_,colorspace_fragment:__,colorspace_pars_fragment:x_,envmap_fragment:v_,envmap_common_pars_fragment:y_,envmap_pars_fragment:S_,envmap_pars_vertex:b_,envmap_physical_pars_fragment:D_,envmap_vertex:M_,fog_vertex:w_,fog_pars_vertex:E_,fog_fragment:T_,fog_pars_fragment:A_,gradientmap_pars_fragment:C_,lightmap_pars_fragment:R_,lights_lambert_fragment:I_,lights_lambert_pars_fragment:P_,lights_pars_begin:L_,lights_toon_fragment:N_,lights_toon_pars_fragment:U_,lights_phong_fragment:F_,lights_phong_pars_fragment:O_,lights_physical_fragment:B_,lights_physical_pars_fragment:k_,lights_fragment_begin:z_,lights_fragment_maps:V_,lights_fragment_end:H_,lightprobes_pars_fragment:G_,logdepthbuf_fragment:W_,logdepthbuf_pars_fragment:$_,logdepthbuf_pars_vertex:X_,logdepthbuf_vertex:q_,map_fragment:Y_,map_pars_fragment:Z_,map_particle_fragment:J_,map_particle_pars_fragment:K_,metalnessmap_fragment:j_,metalnessmap_pars_fragment:Q_,morphinstance_vertex:tx,morphcolor_vertex:ex,morphnormal_vertex:nx,morphtarget_pars_vertex:ix,morphtarget_vertex:sx,normal_fragment_begin:rx,normal_fragment_maps:ax,normal_pars_fragment:ox,normal_pars_vertex:lx,normal_vertex:cx,normalmap_pars_fragment:hx,clearcoat_normal_fragment_begin:ux,clearcoat_normal_fragment_maps:dx,clearcoat_pars_fragment:fx,iridescence_pars_fragment:px,opaque_fragment:mx,packing:gx,premultiplied_alpha_fragment:_x,project_vertex:xx,dithering_fragment:vx,dithering_pars_fragment:yx,roughnessmap_fragment:Sx,roughnessmap_pars_fragment:bx,shadowmap_pars_fragment:Mx,shadowmap_pars_vertex:wx,shadowmap_vertex:Ex,shadowmask_pars_fragment:Tx,skinbase_vertex:Ax,skinning_pars_vertex:Cx,skinning_vertex:Rx,skinnormal_vertex:Ix,specularmap_fragment:Px,specularmap_pars_fragment:Lx,tonemapping_fragment:Dx,tonemapping_pars_fragment:Nx,transmission_fragment:Ux,transmission_pars_fragment:Fx,uv_pars_fragment:Ox,uv_pars_vertex:Bx,uv_vertex:kx,worldpos_vertex:zx,background_vert:Vx,background_frag:Hx,backgroundCube_vert:Gx,backgroundCube_frag:Wx,cube_vert:$x,cube_frag:Xx,depth_vert:qx,depth_frag:Yx,distance_vert:Zx,distance_frag:Jx,equirect_vert:Kx,equirect_frag:jx,linedashed_vert:Qx,linedashed_frag:tv,meshbasic_vert:ev,meshbasic_frag:nv,meshlambert_vert:iv,meshlambert_frag:sv,meshmatcap_vert:rv,meshmatcap_frag:av,meshnormal_vert:ov,meshnormal_frag:lv,meshphong_vert:cv,meshphong_frag:hv,meshphysical_vert:uv,meshphysical_frag:dv,meshtoon_vert:fv,meshtoon_frag:pv,points_vert:mv,points_frag:gv,shadow_vert:_v,shadow_frag:xv,sprite_vert:vv,sprite_frag:yv},Ft={common:{diffuse:{value:new pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new be},alphaMap:{value:null},alphaMapTransform:{value:new be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new be}},envmap:{envMap:{value:null},envMapRotation:{value:new be},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new be},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new G},probesMax:{value:new G},probesResolution:{value:new G}},points:{diffuse:{value:new pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new be},alphaTest:{value:0},uvTransform:{value:new be}},sprite:{diffuse:{value:new pe(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new be},alphaMap:{value:null},alphaMapTransform:{value:new be},alphaTest:{value:0}}},$n={basic:{uniforms:On([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.fog]),vertexShader:Ae.meshbasic_vert,fragmentShader:Ae.meshbasic_frag},lambert:{uniforms:On([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new pe(0)},envMapIntensity:{value:1}}]),vertexShader:Ae.meshlambert_vert,fragmentShader:Ae.meshlambert_frag},phong:{uniforms:On([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new pe(0)},specular:{value:new pe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ae.meshphong_vert,fragmentShader:Ae.meshphong_frag},standard:{uniforms:On([Ft.common,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.roughnessmap,Ft.metalnessmap,Ft.fog,Ft.lights,{emissive:{value:new pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ae.meshphysical_vert,fragmentShader:Ae.meshphysical_frag},toon:{uniforms:On([Ft.common,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.gradientmap,Ft.fog,Ft.lights,{emissive:{value:new pe(0)}}]),vertexShader:Ae.meshtoon_vert,fragmentShader:Ae.meshtoon_frag},matcap:{uniforms:On([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,{matcap:{value:null}}]),vertexShader:Ae.meshmatcap_vert,fragmentShader:Ae.meshmatcap_frag},points:{uniforms:On([Ft.points,Ft.fog]),vertexShader:Ae.points_vert,fragmentShader:Ae.points_frag},dashed:{uniforms:On([Ft.common,Ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ae.linedashed_vert,fragmentShader:Ae.linedashed_frag},depth:{uniforms:On([Ft.common,Ft.displacementmap]),vertexShader:Ae.depth_vert,fragmentShader:Ae.depth_frag},normal:{uniforms:On([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,{opacity:{value:1}}]),vertexShader:Ae.meshnormal_vert,fragmentShader:Ae.meshnormal_frag},sprite:{uniforms:On([Ft.sprite,Ft.fog]),vertexShader:Ae.sprite_vert,fragmentShader:Ae.sprite_frag},background:{uniforms:{uvTransform:{value:new be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ae.background_vert,fragmentShader:Ae.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new be}},vertexShader:Ae.backgroundCube_vert,fragmentShader:Ae.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ae.cube_vert,fragmentShader:Ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ae.equirect_vert,fragmentShader:Ae.equirect_frag},distance:{uniforms:On([Ft.common,Ft.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ae.distance_vert,fragmentShader:Ae.distance_frag},shadow:{uniforms:On([Ft.lights,Ft.fog,{color:{value:new pe(0)},opacity:{value:1}}]),vertexShader:Ae.shadow_vert,fragmentShader:Ae.shadow_frag}};$n.physical={uniforms:On([$n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new be},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new be},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new be},sheen:{value:0},sheenColor:{value:new pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new be},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new be},attenuationDistance:{value:0},attenuationColor:{value:new pe(0)},specularColor:{value:new pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new be},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new be}}]),vertexShader:Ae.meshphysical_vert,fragmentShader:Ae.meshphysical_frag};var Zc={r:0,b:0,g:0},Sv=new Oe,Qp=new be;Qp.set(-1,0,0,0,1,0,0,0,1);function bv(i,t,e,n,s,r){let a=new pe(0),o=s===!0?0:1,l,c,h=null,m=0,d=null;function g(N){let U=N.isScene===!0?N.background:null;if(U&&U.isTexture){let T=N.backgroundBlurriness>0;U=t.get(U,T)}return U}function x(N){let U=!1,T=g(N);T===null?p(a,o):T&&T.isColor&&(p(T,1),U=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||U)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function A(N,U){let T=g(U);T&&(T.isCubeTexture||T.mapping===lo)?(c===void 0&&(c=new bn(new Fr(1,1,1),new Mn({name:"BackgroundCubeMaterial",uniforms:js($n.backgroundCube.uniforms),vertexShader:$n.backgroundCube.vertexShader,fragmentShader:$n.backgroundCube.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,D,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=T,c.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Sv.makeRotationFromEuler(U.backgroundRotation)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Qp),c.material.toneMapped=Le.getTransfer(T.colorSpace)!==Ge,(h!==T||m!==T.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=T,m=T.version,d=i.toneMapping),c.layers.enableAll(),N.unshift(c,c.geometry,c.material,0,0,null)):T&&T.isTexture&&(l===void 0&&(l=new bn(new Ja(2,2),new Mn({name:"BackgroundMaterial",uniforms:js($n.background.uniforms),vertexShader:$n.background.vertexShader,fragmentShader:$n.background.fragmentShader,side:Ts,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=T,l.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,l.material.toneMapped=Le.getTransfer(T.colorSpace)!==Ge,T.matrixAutoUpdate===!0&&T.updateMatrix(),l.material.uniforms.uvTransform.value.copy(T.matrix),(h!==T||m!==T.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=T,m=T.version,d=i.toneMapping),l.layers.enableAll(),N.unshift(l,l.geometry,l.material,0,0,null))}function p(N,U){N.getRGB(Zc,Gu(i)),e.buffers.color.setClear(Zc.r,Zc.g,Zc.b,U,r)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(N,U=1){a.set(N),o=U,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(N){o=N,p(a,o)},render:x,addToRenderList:A,dispose:f}}function Mv(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o($,nt,it,X,K){let ot=!1,lt=m($,X,it,nt);r!==lt&&(r=lt,c(r.object)),ot=g($,X,it,K),ot&&x($,X,it,K),K!==null&&t.update(K,i.ELEMENT_ARRAY_BUFFER),(ot||a)&&(a=!1,T($,nt,it,X),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function l(){return i.createVertexArray()}function c($){return i.bindVertexArray($)}function h($){return i.deleteVertexArray($)}function m($,nt,it,X){let K=X.wireframe===!0,ot=n[nt.id];ot===void 0&&(ot={},n[nt.id]=ot);let lt=$.isInstancedMesh===!0?$.id:0,bt=ot[lt];bt===void 0&&(bt={},ot[lt]=bt);let ht=bt[it.id];ht===void 0&&(ht={},bt[it.id]=ht);let xt=ht[K];return xt===void 0&&(xt=d(l()),ht[K]=xt),xt}function d($){let nt=[],it=[],X=[];for(let K=0;K<e;K++)nt[K]=0,it[K]=0,X[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:nt,enabledAttributes:it,attributeDivisors:X,object:$,attributes:{},index:null}}function g($,nt,it,X){let K=r.attributes,ot=nt.attributes,lt=0,bt=it.getAttributes();for(let ht in bt)if(bt[ht].location>=0){let gt=K[ht],zt=ot[ht];if(zt===void 0&&(ht==="instanceMatrix"&&$.instanceMatrix&&(zt=$.instanceMatrix),ht==="instanceColor"&&$.instanceColor&&(zt=$.instanceColor)),gt===void 0||gt.attribute!==zt||zt&&gt.data!==zt.data)return!0;lt++}return r.attributesNum!==lt||r.index!==X}function x($,nt,it,X){let K={},ot=nt.attributes,lt=0,bt=it.getAttributes();for(let ht in bt)if(bt[ht].location>=0){let gt=ot[ht];gt===void 0&&(ht==="instanceMatrix"&&$.instanceMatrix&&(gt=$.instanceMatrix),ht==="instanceColor"&&$.instanceColor&&(gt=$.instanceColor));let zt={};zt.attribute=gt,gt&&gt.data&&(zt.data=gt.data),K[ht]=zt,lt++}r.attributes=K,r.attributesNum=lt,r.index=X}function A(){let $=r.newAttributes;for(let nt=0,it=$.length;nt<it;nt++)$[nt]=0}function p($){f($,0)}function f($,nt){let it=r.newAttributes,X=r.enabledAttributes,K=r.attributeDivisors;it[$]=1,X[$]===0&&(i.enableVertexAttribArray($),X[$]=1),K[$]!==nt&&(i.vertexAttribDivisor($,nt),K[$]=nt)}function N(){let $=r.newAttributes,nt=r.enabledAttributes;for(let it=0,X=nt.length;it<X;it++)nt[it]!==$[it]&&(i.disableVertexAttribArray(it),nt[it]=0)}function U($,nt,it,X,K,ot,lt){lt===!0?i.vertexAttribIPointer($,nt,it,K,ot):i.vertexAttribPointer($,nt,it,X,K,ot)}function T($,nt,it,X){A();let K=X.attributes,ot=it.getAttributes(),lt=nt.defaultAttributeValues;for(let bt in ot){let ht=ot[bt];if(ht.location>=0){let xt=K[bt];if(xt===void 0&&(bt==="instanceMatrix"&&$.instanceMatrix&&(xt=$.instanceMatrix),bt==="instanceColor"&&$.instanceColor&&(xt=$.instanceColor)),xt!==void 0){let gt=xt.normalized,zt=xt.itemSize,Gt=t.get(xt);if(Gt===void 0)continue;let Ue=Gt.buffer,we=Gt.type,Pe=Gt.bytesPerElement,dt=we===i.INT||we===i.UNSIGNED_INT||xt.gpuType===cc;if(xt.isInterleavedBufferAttribute){let mt=xt.data,Tt=mt.stride,ie=xt.offset;if(mt.isInstancedInterleavedBuffer){for(let Vt=0;Vt<ht.locationSize;Vt++)f(ht.location+Vt,mt.meshPerAttribute);$.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let Vt=0;Vt<ht.locationSize;Vt++)p(ht.location+Vt);i.bindBuffer(i.ARRAY_BUFFER,Ue);for(let Vt=0;Vt<ht.locationSize;Vt++)U(ht.location+Vt,zt/ht.locationSize,we,gt,Tt*Pe,(ie+zt/ht.locationSize*Vt)*Pe,dt)}else{if(xt.isInstancedBufferAttribute){for(let mt=0;mt<ht.locationSize;mt++)f(ht.location+mt,xt.meshPerAttribute);$.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let mt=0;mt<ht.locationSize;mt++)p(ht.location+mt);i.bindBuffer(i.ARRAY_BUFFER,Ue);for(let mt=0;mt<ht.locationSize;mt++)U(ht.location+mt,zt/ht.locationSize,we,gt,zt*Pe,zt/ht.locationSize*mt*Pe,dt)}}else if(lt!==void 0){let gt=lt[bt];if(gt!==void 0)switch(gt.length){case 2:i.vertexAttrib2fv(ht.location,gt);break;case 3:i.vertexAttrib3fv(ht.location,gt);break;case 4:i.vertexAttrib4fv(ht.location,gt);break;default:i.vertexAttrib1fv(ht.location,gt)}}}}N()}function b(){L();for(let $ in n){let nt=n[$];for(let it in nt){let X=nt[it];for(let K in X){let ot=X[K];for(let lt in ot)h(ot[lt].object),delete ot[lt];delete X[K]}}delete n[$]}}function D($){if(n[$.id]===void 0)return;let nt=n[$.id];for(let it in nt){let X=nt[it];for(let K in X){let ot=X[K];for(let lt in ot)h(ot[lt].object),delete ot[lt];delete X[K]}}delete n[$.id]}function z($){for(let nt in n){let it=n[nt];for(let X in it){let K=it[X];if(K[$.id]===void 0)continue;let ot=K[$.id];for(let lt in ot)h(ot[lt].object),delete ot[lt];delete K[$.id]}}}function M($){for(let nt in n){let it=n[nt],X=$.isInstancedMesh===!0?$.id:0,K=it[X];if(K!==void 0){for(let ot in K){let lt=K[ot];for(let bt in lt)h(lt[bt].object),delete lt[bt];delete K[ot]}delete it[X],Object.keys(it).length===0&&delete n[nt]}}}function L(){k(),a=!0,r!==s&&(r=s,c(r.object))}function k(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:k,dispose:b,releaseStatesOfGeometry:D,releaseStatesOfObject:M,releaseStatesOfProgram:z,initAttributes:A,enableAttribute:p,disableUnusedAttributes:N}}function wv(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let g=0;g<h;g++)d+=c[g];e.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Ev(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let z=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(z){return!(z!==gi&&n.convert(z)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(z){let M=z===Ii&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(z!==jn&&z!==mi&&!M&&n.convert(z)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(z){if(z==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(fe("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let m=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&d===!1&&fe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let g=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),N=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),U=i.getParameter(i.MAX_VARYING_VECTORS),T=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),D=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:m,reversedDepthBuffer:d,maxTextures:g,maxVertexTextures:x,maxTextureSize:A,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:N,maxVaryings:U,maxFragmentUniforms:T,maxSamples:b,samples:D}}function Tv(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Mi,o=new be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(m,d){let g=m.length!==0||d||n!==0||s;return s=d,n=m.length,g},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(m,d){e=h(m,d,0)},this.setState=function(m,d,g){let x=m.clippingPlanes,A=m.clipIntersection,p=m.clipShadows,f=i.get(m);if(!s||x===null||x.length===0||r&&!p)r?h(null):c();else{let N=r?0:n,U=N*4,T=f.clippingState||null;l.value=T,T=h(x,d,U,g);for(let b=0;b!==U;++b)T[b]=e[b];f.clippingState=T,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=N}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(m,d,g,x){let A=m!==null?m.length:0,p=null;if(A!==0){if(p=l.value,x!==!0||p===null){let f=g+A*4,N=d.matrixWorldInverse;o.getNormalMatrix(N),(p===null||p.length<f)&&(p=new Float32Array(f));for(let U=0,T=g;U!==A;++U,T+=4)a.copy(m[U]).applyMatrix4(N,o),a.normal.toArray(p,T),p[T+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,p}}var Xr=4,Av=6,Cv=20,Rv=256,xo=new zr,Pp=new pe,qu=null,Yu=0,Zu=0,Ju=!1,Iv=new G,Qs=new G,Kc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=Iv}=r;qu=this._renderer.getRenderTarget(),Yu=this._renderer.getActiveCubeFace(),Zu=this._renderer.getActiveMipmapLevel(),Ju=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Np(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(qu,Yu,Zu),this._renderer.xr.enabled=Ju,t.scissorTest=!1,$r(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===As||t.mapping===Ks?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),qu=this._renderer.getRenderTarget(),Yu=this._renderer.getActiveCubeFace(),Zu=this._renderer.getActiveMipmapLevel(),Ju=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Tn,minFilter:Tn,generateMipmaps:!1,type:Ii,format:gi,colorSpace:Aa,depthBuffer:!1},s=Lp(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lp(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Pv(r)),this._blurMaterial=Dv(r,t,e),this._ggxMaterial=Lv(r,t,e)}return s}_compileMaterial(t){let e=new bn(new ln,t);this._renderer.compile(e,xo)}_sceneToCubeUV(t,e,n,s,r){let l=new Fn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],m=this._renderer,d=m.autoClear,g=m.toneMapping;m.getClearColor(Pp),m.toneMapping=Ci,m.autoClear=!1,m.state.buffers.depth.getReversed()&&(m.setRenderTarget(s),m.clearDepth(),m.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new bn(new Fr,new $s({name:"PMREM.Background",side:Wn,depthWrite:!1,depthTest:!1})));let A=this._backgroundBox,p=A.material,f=!1,N=t.background;N?N.isColor&&(p.color.copy(N),t.background=null,f=!0):(p.color.copy(Pp),f=!0);for(let U=0;U<6;U++){let T=U%3;T===0?(l.up.set(0,c[U],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[U],r.y,r.z)):T===1?(l.up.set(0,0,c[U]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[U],r.z)):(l.up.set(0,c[U],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[U]));let b=this._cubeSize;$r(s,T*b,U>2?b:0,b,b),m.setRenderTarget(s),f&&m.render(A,l),m.render(t,l)}m.toneMapping=g,m.autoClear=d,t.background=N}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===As||t.mapping===Ks;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Np()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dp());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;$r(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,xo)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),m=Math.sqrt(c*c-h*h),d=c*1.25,g=m*d,{_lodMax:x}=this,A=this._sizeLods[n],p=3*A*(n>x-Xr?n-x+Xr:0),f=4*(this._cubeSize-A);l.envMap.value=t.texture,l.roughness.value=g,l.mipInt.value=x-e,$r(r,p,f,3*A,2*A),s.setRenderTarget(r),s.render(o,xo),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=x-n,$r(t,p,f,3*A,2*A),s.setRenderTarget(t),s.render(o,xo)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],m=3*h*(s>this._lodMax-Xr?s-this._lodMax+Xr:0),d=4*(this._cubeSize-h);$r(e,m,d,3*h,2*h),a.setRenderTarget(e),a.render(l,xo)}};function Pv(i){let t=[],e=[],n=i,s=i-Xr+1+Av;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],m=6,d=6,g=3,x=new Float32Array(g*d*m),A=new Float32Array(g*d*m);for(let f=0;f<m;f++){let N=f%3*2/3-1,U=f>2?0:-1,T=[N,U,0,N+2/3,U,0,N+2/3,U+1,0,N,U,0,N+2/3,U+1,0,N,U+1,0];x.set(T,g*d*f);for(let b=0;b<d;b++){let D=h[b*2]*2-1,z=h[b*2+1]*2-1;f===0?Qs.set(1,z,D):f===1?Qs.set(-D,1,-z):f===2?Qs.set(-D,z,1):f===3?Qs.set(-1,z,-D):f===4?Qs.set(-D,-1,z):Qs.set(D,z,-1),Qs.toArray(A,(f*d+b)*g)}}let p=new ln;p.setAttribute("position",new qe(x,g)),p.setAttribute("outputDirection",new qe(A,g)),e.push(new bn(p,null)),n>Xr&&n--}return{lodMeshes:e,sizeLods:t}}function Lp(i,t,e){let n=new Jn(i,t,e);return n.texture.mapping=lo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function $r(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Lv(i,t,e){return new Mn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Rv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:th(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function Dv(i,t,e){return new Mn({name:"SphericalGaussianBlur",defines:{SAMPLES:Cv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:th(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function Dp(){return new Mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:th(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function Np(){return new Mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:th(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function th(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var jc=class extends Jn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new ka(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Fr(5,5,5),r=new Mn({name:"CubemapFromEquirect",uniforms:js(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Wn,blending:$i});r.uniforms.tEquirect.value=e;let a=new bn(s,r),o=e.minFilter;return e.minFilter===Cs&&(e.minFilter=Tn),new ic(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function Nv(i){let t=new WeakMap,e=new WeakMap,n=null;function s(d,g=!1){return d==null?null:g?a(d):r(d)}function r(d){if(d&&d.isTexture){let g=d.mapping;if(g===ac||g===oc)if(t.has(d)){let x=t.get(d).texture;return o(x,d.mapping)}else{let x=d.image;if(x&&x.height>0){let A=new jc(x.height);return A.fromEquirectangularTexture(i,d),t.set(d,A),d.addEventListener("dispose",c),o(A.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){let g=d.mapping,x=g===ac||g===oc,A=g===As||g===Ks;if(x||A){let p=e.get(d),f=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==f)return n===null&&(n=new Kc(i)),p=x?n.fromEquirectangular(d,p):n.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),p.texture;if(p!==void 0)return p.texture;{let N=d.image;return x&&N&&N.height>0||A&&N&&l(N)?(n===null&&(n=new Kc(i)),p=x?n.fromEquirectangular(d):n.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),d.addEventListener("dispose",h),p.texture):null}}}return d}function o(d,g){return g===ac?d.mapping=As:g===oc&&(d.mapping=Ks),d}function l(d){let g=0,x=6;for(let A=0;A<x;A++)d[A]!==void 0&&g++;return g===x}function c(d){let g=d.target;g.removeEventListener("dispose",c);let x=t.get(g);x!==void 0&&(t.delete(g),x.dispose())}function h(d){let g=d.target;g.removeEventListener("dispose",h);let x=e.get(g);x!==void 0&&(e.delete(g),x.dispose())}function m(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:m}}function Uv(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Gs("WebGLRenderer: "+n+" extension not supported."),s}}}function Fv(i,t,e,n){let s={},r=new WeakMap;function a(m){let d=m.target;d.index!==null&&t.remove(d.index);for(let x in d.attributes)t.remove(d.attributes[x]);d.removeEventListener("dispose",a),delete s[d.id];let g=r.get(d);g&&(t.remove(g),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(m,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(m){let d=m.attributes;for(let g in d)t.update(d[g],i.ARRAY_BUFFER)}function c(m){let d=[],g=m.index,x=m.attributes.position,A=0;if(x===void 0)return;if(g!==null){let N=g.array;A=g.version;for(let U=0,T=N.length;U<T;U+=3){let b=N[U+0],D=N[U+1],z=N[U+2];d.push(b,D,D,z,z,b)}}else{let N=x.array;A=x.version;for(let U=0,T=N.length/3-1;U<T;U+=3){let b=U+0,D=U+1,z=U+2;d.push(b,D,D,z,z,b)}}let p=new(x.count>=65535?Na:Da)(d,1);p.version=A;let f=r.get(m);f&&t.remove(f),r.set(m,p)}function h(m){let d=r.get(m);if(d){let g=m.index;g!==null&&d.version<g.version&&c(m)}else c(m);return r.get(m)}return{get:o,update:l,getWireframeAttribute:h}}function Ov(i,t,e){let n;function s(m){n=m}let r,a;function o(m){r=m.type,a=m.bytesPerElement}function l(m,d){i.drawElements(n,d,r,m*a),e.update(d,n,1)}function c(m,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,m*a,g),e.update(d,n,g))}function h(m,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,m,0,g);let A=0;for(let p=0;p<g;p++)A+=d[p];e.update(A,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Bv(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:ge("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function kv(i,t,e){let n=new WeakMap,s=new We;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,m=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==m){let L=function(){z.dispose(),n.delete(o),o.removeEventListener("dispose",L)};d!==void 0&&d.texture.dispose();let g=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,A=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],N=o.morphAttributes.color||[],U=0;g===!0&&(U=1),x===!0&&(U=2),A===!0&&(U=3);let T=o.attributes.position.count*U,b=1;T>t.maxTextureSize&&(b=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);let D=new Float32Array(T*b*4*m),z=new Pa(D,T,b,m);z.type=mi,z.needsUpdate=!0;let M=U*4;for(let k=0;k<m;k++){let $=p[k],nt=f[k],it=N[k],X=T*b*4*k;for(let K=0;K<$.count;K++){let ot=K*M;g===!0&&(s.fromBufferAttribute($,K),D[X+ot+0]=s.x,D[X+ot+1]=s.y,D[X+ot+2]=s.z,D[X+ot+3]=0),x===!0&&(s.fromBufferAttribute(nt,K),D[X+ot+4]=s.x,D[X+ot+5]=s.y,D[X+ot+6]=s.z,D[X+ot+7]=0),A===!0&&(s.fromBufferAttribute(it,K),D[X+ot+8]=s.x,D[X+ot+9]=s.y,D[X+ot+10]=s.z,D[X+ot+11]=it.itemSize===4?s.w:1)}}d={count:m,texture:z,size:new Lt(T,b)},n.set(o,d),o.addEventListener("dispose",L)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let A=0;A<c.length;A++)g+=c[A];let x=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function zv(i,t,e,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,m=c.geometry,d=t.get(c,m);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let g=c.skeleton;r.get(g)!==h&&(g.update(),r.set(g,h))}return d}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var Vv={[wu]:"LINEAR_TONE_MAPPING",[Eu]:"REINHARD_TONE_MAPPING",[Tu]:"CINEON_TONE_MAPPING",[Au]:"ACES_FILMIC_TONE_MAPPING",[Ru]:"AGX_TONE_MAPPING",[Iu]:"NEUTRAL_TONE_MAPPING",[Cu]:"CUSTOM_TONE_MAPPING"};function Hv(i,t,e,n,s,r){let a=new Jn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new ln;c.setAttribute("position",new on([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new on([0,2,0,0,2,0],2));let h=new Gl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),m=new bn(c,h),d=new zr(-1,1,1,-1,0,1),g=null,x=null,A=!1,p,f=null,N=[],U=!1;this.setSize=function(T,b){a.setSize(T,b),o!==null&&o.setSize(T,b),l!==null&&l.setSize(T,b);for(let D=0;D<N.length;D++){let z=N[D];z.setSize&&z.setSize(T,b)}},this.setEffects=function(T){N=T,U=N.length>0&&N[0].isRenderPass===!0;let b=a.width,D=a.height;N.length>0&&o===null&&(o=new Jn(b,D,{type:Ii,depthBuffer:!1,stencilBuffer:!1}),l=new Jn(b,D,{type:Ii,depthBuffer:!1,stencilBuffer:!1}));for(let z=0;z<N.length;z++){let M=N[z];M.setSize&&M.setSize(b,D)}},this.begin=function(T,b){if(A||T.toneMapping===Ci&&N.length===0)return!1;if(f=b,b!==null){let D=b.width,z=b.height;(a.width!==D||a.height!==z)&&this.setSize(D,z)}return U===!1&&T.setRenderTarget(a),p=T.toneMapping,T.toneMapping=Ci,!0},this.hasRenderPass=function(){return U},this.end=function(T,b){T.toneMapping=p,A=!0;let D=a,z=o;for(let M=0;M<N.length;M++){let L=N[M];L.enabled!==!1&&(L.render(T,z,D,b),L.needsSwap!==!1&&(D=z,z=z===o?l:o))}if(g!==T.outputColorSpace||x!==T.toneMapping){g=T.outputColorSpace,x=T.toneMapping,h.defines={},Le.getTransfer(g)===Ge&&(h.defines.SRGB_TRANSFER="");let M=Vv[x];M&&(h.defines[M]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=D.texture,T.setRenderTarget(f),T.render(m,d),f=null,A=!1},this.isCompositing=function(){return A},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var tm=new Zn,Qu=new Ss(1,1),em=new Pa,nm=new Il,im=new ka,Up=[],Fp=[],Op=new Float32Array(16),Bp=new Float32Array(9),kp=new Float32Array(4);function Yr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Up[s];if(r===void 0&&(r=new Float32Array(s),Up[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function mn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function gn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function eh(i,t){let e=Fp[t];e===void 0&&(e=new Int32Array(t),Fp[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Gv(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Wv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(mn(e,t))return;i.uniform2fv(this.addr,t),gn(e,t)}}function $v(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(mn(e,t))return;i.uniform3fv(this.addr,t),gn(e,t)}}function Xv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(mn(e,t))return;i.uniform4fv(this.addr,t),gn(e,t)}}function qv(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(mn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),gn(e,t)}else{if(mn(e,n))return;kp.set(n),i.uniformMatrix2fv(this.addr,!1,kp),gn(e,n)}}function Yv(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(mn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),gn(e,t)}else{if(mn(e,n))return;Bp.set(n),i.uniformMatrix3fv(this.addr,!1,Bp),gn(e,n)}}function Zv(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(mn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),gn(e,t)}else{if(mn(e,n))return;Op.set(n),i.uniformMatrix4fv(this.addr,!1,Op),gn(e,n)}}function Jv(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Kv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(mn(e,t))return;i.uniform2iv(this.addr,t),gn(e,t)}}function jv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(mn(e,t))return;i.uniform3iv(this.addr,t),gn(e,t)}}function Qv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(mn(e,t))return;i.uniform4iv(this.addr,t),gn(e,t)}}function ty(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function ey(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(mn(e,t))return;i.uniform2uiv(this.addr,t),gn(e,t)}}function ny(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(mn(e,t))return;i.uniform3uiv(this.addr,t),gn(e,t)}}function iy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(mn(e,t))return;i.uniform4uiv(this.addr,t),gn(e,t)}}function sy(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Qu.compareFunction=e.isReversedDepthBuffer()?Yc:qc,r=Qu):r=tm,e.setTexture2D(t||r,s)}function ry(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||nm,s)}function ay(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||im,s)}function oy(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||em,s)}function ly(i){switch(i){case 5126:return Gv;case 35664:return Wv;case 35665:return $v;case 35666:return Xv;case 35674:return qv;case 35675:return Yv;case 35676:return Zv;case 5124:case 35670:return Jv;case 35667:case 35671:return Kv;case 35668:case 35672:return jv;case 35669:case 35673:return Qv;case 5125:return ty;case 36294:return ey;case 36295:return ny;case 36296:return iy;case 35678:case 36198:case 36298:case 36306:case 35682:return sy;case 35679:case 36299:case 36307:return ry;case 35680:case 36300:case 36308:case 36293:return ay;case 36289:case 36303:case 36311:case 36292:return oy}}function cy(i,t){i.uniform1fv(this.addr,t)}function hy(i,t){let e=Yr(t,this.size,2);i.uniform2fv(this.addr,e)}function uy(i,t){let e=Yr(t,this.size,3);i.uniform3fv(this.addr,e)}function dy(i,t){let e=Yr(t,this.size,4);i.uniform4fv(this.addr,e)}function fy(i,t){let e=Yr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function py(i,t){let e=Yr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function my(i,t){let e=Yr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function gy(i,t){i.uniform1iv(this.addr,t)}function _y(i,t){i.uniform2iv(this.addr,t)}function xy(i,t){i.uniform3iv(this.addr,t)}function vy(i,t){i.uniform4iv(this.addr,t)}function yy(i,t){i.uniform1uiv(this.addr,t)}function Sy(i,t){i.uniform2uiv(this.addr,t)}function by(i,t){i.uniform3uiv(this.addr,t)}function My(i,t){i.uniform4uiv(this.addr,t)}function wy(i,t,e){let n=this.cache,s=t.length,r=eh(e,s);mn(n,r)||(i.uniform1iv(this.addr,r),gn(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Qu:a=tm;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Ey(i,t,e){let n=this.cache,s=t.length,r=eh(e,s);mn(n,r)||(i.uniform1iv(this.addr,r),gn(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||nm,r[a])}function Ty(i,t,e){let n=this.cache,s=t.length,r=eh(e,s);mn(n,r)||(i.uniform1iv(this.addr,r),gn(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||im,r[a])}function Ay(i,t,e){let n=this.cache,s=t.length,r=eh(e,s);mn(n,r)||(i.uniform1iv(this.addr,r),gn(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||em,r[a])}function Cy(i){switch(i){case 5126:return cy;case 35664:return hy;case 35665:return uy;case 35666:return dy;case 35674:return fy;case 35675:return py;case 35676:return my;case 5124:case 35670:return gy;case 35667:case 35671:return _y;case 35668:case 35672:return xy;case 35669:case 35673:return vy;case 5125:return yy;case 36294:return Sy;case 36295:return by;case 36296:return My;case 35678:case 36198:case 36298:case 36306:case 35682:return wy;case 35679:case 36299:case 36307:return Ey;case 35680:case 36300:case 36308:case 36293:return Ty;case 36289:case 36303:case 36311:case 36292:return Ay}}var td=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ly(e.type)}},ed=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Cy(e.type)}},nd=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Ku=/(\w+)(\])?(\[|\.)?/g;function zp(i,t){i.seq.push(t),i.map[t.id]=t}function Ry(i,t,e){let n=i.name,s=n.length;for(Ku.lastIndex=0;;){let r=Ku.exec(n),a=Ku.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){zp(e,c===void 0?new td(o,i,t):new ed(o,i,t));break}else{let m=e.map[o];m===void 0&&(m=new nd(o),zp(e,m)),e=m}}}var qr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Ry(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Vp(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Iy=37297,Py=0;function Ly(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Hp=new be;function Dy(i){Le._getMatrix(Hp,Le.workingColorSpace,i);let t=`mat3( ${Hp.elements.map(e=>e.toFixed(4))} )`;switch(Le.getTransfer(i)){case Ca:return[t,"LinearTransferOETF"];case Ge:return[t,"sRGBTransferOETF"];default:return fe("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Gp(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Ly(i.getShaderSource(t),o)}else return r}function Ny(i,t){let e=Dy(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Uy={[wu]:"Linear",[Eu]:"Reinhard",[Tu]:"Cineon",[Au]:"ACESFilmic",[Ru]:"AgX",[Iu]:"Neutral",[Cu]:"Custom"};function Fy(i,t){let e=Uy[t];return e===void 0?(fe("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Jc=new G;function Oy(){Le.getLuminanceCoefficients(Jc);let i=Jc.x.toFixed(4),t=Jc.y.toFixed(4),e=Jc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function By(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(yo).join(`
`)}function ky(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function zy(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function yo(i){return i!==""}function Wp(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function $p(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Vy=/^[ \t]*#include +<([\w\d./]+)>/gm;function id(i){return i.replace(Vy,Gy)}var Hy=new Map;function Gy(i,t){let e=Ae[t];if(e===void 0){let n=Hy.get(t);if(n!==void 0)e=Ae[n],fe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return id(e)}var Wy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xp(i){return i.replace(Wy,$y)}function $y(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function qp(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var Xy={[oo]:"SHADOWMAP_TYPE_PCF",[Vr]:"SHADOWMAP_TYPE_VSM"};function qy(i){return Xy[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Yy={[As]:"ENVMAP_TYPE_CUBE",[Ks]:"ENVMAP_TYPE_CUBE",[lo]:"ENVMAP_TYPE_CUBE_UV"};function Zy(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Yy[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Jy={[Ks]:"ENVMAP_MODE_REFRACTION"};function Ky(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Jy[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var jy={[rc]:"ENVMAP_BLENDING_MULTIPLY",[lp]:"ENVMAP_BLENDING_MIX",[cp]:"ENVMAP_BLENDING_ADD"};function Qy(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":jy[i.combine]||"ENVMAP_BLENDING_NONE"}function tS(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function eS(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=qy(e),c=Zy(e),h=Ky(e),m=Qy(e),d=tS(e),g=By(e),x=ky(r),A=s.createProgram(),p,f,N=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(yo).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(yo).join(`
`),f.length>0&&(f+=`
`)):(p=[qp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yo).join(`
`),f=[qp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+m:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ci?"#define TONE_MAPPING":"",e.toneMapping!==Ci?Ae.tonemapping_pars_fragment:"",e.toneMapping!==Ci?Fy("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ae.colorspace_pars_fragment,Ny("linearToOutputTexel",e.outputColorSpace),Oy(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(yo).join(`
`)),a=id(a),a=Wp(a,e),a=$p(a,e),o=id(o),o=Wp(o,e),o=$p(o,e),a=Xp(a),o=Xp(o),e.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,p=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",e.glslVersion===ku?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ku?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let U=N+p+a,T=N+f+o,b=Vp(s,s.VERTEX_SHADER,U),D=Vp(s,s.FRAGMENT_SHADER,T);s.attachShader(A,b),s.attachShader(A,D),e.index0AttributeName!==void 0?s.bindAttribLocation(A,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(A,0,"position"),s.linkProgram(A);function z($){if(i.debug.checkShaderErrors){let nt=s.getProgramInfoLog(A)||"",it=s.getShaderInfoLog(b)||"",X=s.getShaderInfoLog(D)||"",K=nt.trim(),ot=it.trim(),lt=X.trim(),bt=!0,ht=!0;if(s.getProgramParameter(A,s.LINK_STATUS)===!1)if(bt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,A,b,D);else{let xt=Gp(s,b,"vertex"),gt=Gp(s,D,"fragment");ge("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(A,s.VALIDATE_STATUS)+`

Material Name: `+$.name+`
Material Type: `+$.type+`

Program Info Log: `+K+`
`+xt+`
`+gt)}else K!==""?fe("WebGLProgram: Program Info Log:",K):(ot===""||lt==="")&&(ht=!1);ht&&($.diagnostics={runnable:bt,programLog:K,vertexShader:{log:ot,prefix:p},fragmentShader:{log:lt,prefix:f}})}s.deleteShader(b),s.deleteShader(D),M=new qr(s,A),L=zy(s,A)}let M;this.getUniforms=function(){return M===void 0&&z(this),M};let L;this.getAttributes=function(){return L===void 0&&z(this),L};let k=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=s.getProgramParameter(A,Iy)),k},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(A),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Py++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=b,this.fragmentShader=D,this}var nS=0,sd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new rd(t),e.set(t,n)),n}},rd=class{constructor(t){this.id=nS++,this.code=t,this.usedTimes=0}};function iS(i){return i===Is||i===mo||i===go}function sS(i,t,e,n,s,r){let a=new Dr,o=new sd,l=new Set,c=[],h=new Map,m=n.logarithmicDepthBuffer,d=n.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return l.add(M),M===0?"uv":`uv${M}`}function A(M,L,k,$,nt,it){let X=$.fog,K=nt.geometry,ot=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?$.environment:null,lt=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,bt=t.get(M.envMap||ot,lt),ht=bt&&bt.mapping===lo?bt.image.height:null,xt=g[M.type];M.precision!==null&&(d=n.getMaxPrecision(M.precision),d!==M.precision&&fe("WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));let gt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,zt=gt!==void 0?gt.length:0,Gt=0;K.morphAttributes.position!==void 0&&(Gt=1),K.morphAttributes.normal!==void 0&&(Gt=2),K.morphAttributes.color!==void 0&&(Gt=3);let Ue,we,Pe,dt;if(xt){let ze=$n[xt];Ue=ze.vertexShader,we=ze.fragmentShader}else{Ue=M.vertexShader,we=M.fragmentShader;let ze=o.getVertexShaderStage(M),Fe=o.getFragmentShaderStage(M);o.update(M,ze,Fe),Pe=ze.id,dt=Fe.id}let mt=i.getRenderTarget(),Tt=i.state.buffers.depth.getReversed(),ie=nt.isInstancedMesh===!0,Vt=nt.isBatchedMesh===!0,ue=!!M.map,de=!!M.matcap,at=!!bt,Mt=!!M.aoMap,H=!!M.lightMap,wt=!!M.bumpMap&&M.wireframe===!1,It=!!M.normalMap,le=!!M.displacementMap,qt=!!M.emissiveMap,he=!!M.metalnessMap,ce=!!M.roughnessMap,W=M.anisotropy>0,Ce=M.clearcoat>0,Wt=M.dispersion>0,R=M.retroreflectivity>0,v=M.iridescence>0,tt=M.sheen>0,st=M.transmission>0,ct=W&&!!M.anisotropyMap,At=Ce&&!!M.clearcoatMap,Ct=Ce&&!!M.clearcoatNormalMap,ut=Ce&&!!M.clearcoatRoughnessMap,_t=v&&!!M.iridescenceMap,Dt=v&&!!M.iridescenceThicknessMap,se=tt&&!!M.sheenColorMap,Ot=tt&&!!M.sheenRoughnessMap,Ut=!!M.specularMap,jt=!!M.specularColorMap,re=!!M.specularIntensityMap,_e=st&&!!M.transmissionMap,Y=st&&!!M.thicknessMap,Pt=!!M.gradientMap,pt=!!M.alphaMap,Nt=M.alphaTest>0,Rt=!!M.alphaHash,vt=!!M.extensions,Jt=Ci;M.toneMapped&&(mt===null||mt.isXRRenderTarget===!0)&&(Jt=i.toneMapping);let Qt={shaderID:xt,shaderType:M.type,shaderName:M.name,vertexShader:Ue,fragmentShader:we,defines:M.defines,customVertexShaderID:Pe,customFragmentShaderID:dt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:Vt,batchingColor:Vt&&nt._colorsTexture!==null,instancing:ie,instancingColor:ie&&nt.instanceColor!==null,instancingMorph:ie&&nt.morphTexture!==null,outputColorSpace:mt===null?i.outputColorSpace:mt.isXRRenderTarget===!0?mt.texture.colorSpace:Le.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:ue,matcap:de,envMap:at,envMapMode:at&&bt.mapping,envMapCubeUVHeight:ht,aoMap:Mt,lightMap:H,bumpMap:wt,normalMap:It,displacementMap:le,emissiveMap:qt,normalMapObjectSpace:It&&M.normalMapType===dp,normalMapTangentSpace:It&&M.normalMapType===Xc,packedNormalMap:It&&M.normalMapType===Xc&&iS(M.normalMap.format),metalnessMap:he,roughnessMap:ce,anisotropy:W,anisotropyMap:ct,clearcoat:Ce,clearcoatMap:At,clearcoatNormalMap:Ct,clearcoatRoughnessMap:ut,dispersion:Wt,retroreflection:R,iridescence:v,iridescenceMap:_t,iridescenceThicknessMap:Dt,sheen:tt,sheenColorMap:se,sheenRoughnessMap:Ot,specularMap:Ut,specularColorMap:jt,specularIntensityMap:re,transmission:st,transmissionMap:_e,thicknessMap:Y,gradientMap:Pt,opaque:M.transparent===!1&&M.blending===Hr&&M.alphaToCoverage===!1,alphaMap:pt,alphaTest:Nt,alphaHash:Rt,combine:M.combine,mapUv:ue&&x(M.map.channel),aoMapUv:Mt&&x(M.aoMap.channel),lightMapUv:H&&x(M.lightMap.channel),bumpMapUv:wt&&x(M.bumpMap.channel),normalMapUv:It&&x(M.normalMap.channel),displacementMapUv:le&&x(M.displacementMap.channel),emissiveMapUv:qt&&x(M.emissiveMap.channel),metalnessMapUv:he&&x(M.metalnessMap.channel),roughnessMapUv:ce&&x(M.roughnessMap.channel),anisotropyMapUv:ct&&x(M.anisotropyMap.channel),clearcoatMapUv:At&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:Ct&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ut&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:_t&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:Dt&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:se&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:Ot&&x(M.sheenRoughnessMap.channel),specularMapUv:Ut&&x(M.specularMap.channel),specularColorMapUv:jt&&x(M.specularColorMap.channel),specularIntensityMapUv:re&&x(M.specularIntensityMap.channel),transmissionMapUv:_e&&x(M.transmissionMap.channel),thicknessMapUv:Y&&x(M.thicknessMap.channel),alphaMapUv:pt&&x(M.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(It||W),vertexNormals:!!K.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:nt.isPoints===!0&&!!K.attributes.uv&&(ue||pt),fog:!!X,useFog:M.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||K.attributes.normal===void 0&&It===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:Tt,skinning:nt.isSkinnedMesh===!0,hasPositionAttribute:K.attributes.position!==void 0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:zt,morphTextureStride:Gt,numSunLights:L.sun.length,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numSunLightShadows:L.sunShadowMap.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numLightProbeGrids:it.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&k.length>0,shadowMapType:i.shadowMap.type,toneMapping:Jt,decodeVideoTexture:ue&&M.map.isVideoTexture===!0&&Le.getTransfer(M.map.colorSpace)===Ge,decodeVideoTextureEmissive:qt&&M.emissiveMap.isVideoTexture===!0&&Le.getTransfer(M.emissiveMap.colorSpace)===Ge,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Wi,flipSided:M.side===Wn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:vt&&M.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(vt&&M.extensions.multiDraw===!0||Vt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Qt.vertexUv1s=l.has(1),Qt.vertexUv2s=l.has(2),Qt.vertexUv3s=l.has(3),l.clear(),Qt}function p(M){let L=[];if(M.shaderID?L.push(M.shaderID):(L.push(M.customVertexShaderID),L.push(M.customFragmentShaderID)),M.defines!==void 0)for(let k in M.defines)L.push(k),L.push(M.defines[k]);return M.isRawShaderMaterial===!1&&(f(L,M),N(L,M),L.push(i.outputColorSpace)),L.push(M.customProgramCacheKey),L.join()}function f(M,L){M.push(L.precision),M.push(L.outputColorSpace),M.push(L.envMapMode),M.push(L.envMapCubeUVHeight),M.push(L.mapUv),M.push(L.alphaMapUv),M.push(L.lightMapUv),M.push(L.aoMapUv),M.push(L.bumpMapUv),M.push(L.normalMapUv),M.push(L.displacementMapUv),M.push(L.emissiveMapUv),M.push(L.metalnessMapUv),M.push(L.roughnessMapUv),M.push(L.anisotropyMapUv),M.push(L.clearcoatMapUv),M.push(L.clearcoatNormalMapUv),M.push(L.clearcoatRoughnessMapUv),M.push(L.iridescenceMapUv),M.push(L.iridescenceThicknessMapUv),M.push(L.sheenColorMapUv),M.push(L.sheenRoughnessMapUv),M.push(L.specularMapUv),M.push(L.specularColorMapUv),M.push(L.specularIntensityMapUv),M.push(L.transmissionMapUv),M.push(L.thicknessMapUv),M.push(L.combine),M.push(L.fogExp2),M.push(L.sizeAttenuation),M.push(L.morphTargetsCount),M.push(L.morphAttributeCount),M.push(L.numSunLights),M.push(L.numDirLights),M.push(L.numPointLights),M.push(L.numSpotLights),M.push(L.numSpotLightMaps),M.push(L.numHemiLights),M.push(L.numRectAreaLights),M.push(L.numSunLightShadows),M.push(L.numDirLightShadows),M.push(L.numPointLightShadows),M.push(L.numSpotLightShadows),M.push(L.numSpotLightShadowsWithMaps),M.push(L.numLightProbes),M.push(L.shadowMapType),M.push(L.toneMapping),M.push(L.numClippingPlanes),M.push(L.numClipIntersection),M.push(L.depthPacking)}function N(M,L){a.disableAll(),L.instancing&&a.enable(0),L.instancingColor&&a.enable(1),L.instancingMorph&&a.enable(2),L.matcap&&a.enable(3),L.envMap&&a.enable(4),L.normalMapObjectSpace&&a.enable(5),L.normalMapTangentSpace&&a.enable(6),L.clearcoat&&a.enable(7),L.iridescence&&a.enable(8),L.alphaTest&&a.enable(9),L.vertexColors&&a.enable(10),L.vertexAlphas&&a.enable(11),L.vertexUv1s&&a.enable(12),L.vertexUv2s&&a.enable(13),L.vertexUv3s&&a.enable(14),L.vertexTangents&&a.enable(15),L.anisotropy&&a.enable(16),L.alphaHash&&a.enable(17),L.batching&&a.enable(18),L.dispersion&&a.enable(19),L.retroreflection&&a.enable(24),L.batchingColor&&a.enable(20),L.gradientMap&&a.enable(21),L.packedNormalMap&&a.enable(22),L.vertexNormals&&a.enable(23),M.push(a.mask),a.disableAll(),L.fog&&a.enable(0),L.useFog&&a.enable(1),L.flatShading&&a.enable(2),L.logarithmicDepthBuffer&&a.enable(3),L.reversedDepthBuffer&&a.enable(4),L.skinning&&a.enable(5),L.morphTargets&&a.enable(6),L.morphNormals&&a.enable(7),L.morphColors&&a.enable(8),L.premultipliedAlpha&&a.enable(9),L.shadowMapEnabled&&a.enable(10),L.doubleSided&&a.enable(11),L.flipSided&&a.enable(12),L.useDepthPacking&&a.enable(13),L.dithering&&a.enable(14),L.transmission&&a.enable(15),L.sheen&&a.enable(16),L.opaque&&a.enable(17),L.pointsUvs&&a.enable(18),L.decodeVideoTexture&&a.enable(19),L.decodeVideoTextureEmissive&&a.enable(20),L.alphaToCoverage&&a.enable(21),L.numLightProbeGrids>0&&a.enable(22),L.hasPositionAttribute&&a.enable(23),M.push(a.mask)}function U(M){let L=g[M.type],k;if(L){let $=$n[L];k=_o.clone($.uniforms)}else k=M.uniforms;return k}function T(M,L){let k=h.get(L);return k!==void 0?++k.usedTimes:(k=new eS(i,L,M,s),c.push(k),h.set(L,k)),k}function b(M){if(--M.usedTimes===0){let L=c.indexOf(M);c[L]=c[c.length-1],c.pop(),h.delete(M.cacheKey),M.destroy()}}function D(M){o.remove(M)}function z(){o.dispose()}return{getParameters:A,getProgramCacheKey:p,getUniforms:U,acquireProgram:T,releaseProgram:b,releaseShaderCache:D,programs:c,dispose:z}}function rS(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function aS(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Yp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Zp(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d){let g=0;return d.isInstancedMesh&&(g+=2),d.isSkinnedMesh&&(g+=1),g}function o(d,g,x,A,p,f){let N=i[t];return N===void 0?(N={id:d.id,object:d,geometry:g,material:x,materialVariant:a(d),groupOrder:A,renderOrder:d.renderOrder,z:p,group:f},i[t]=N):(N.id=d.id,N.object=d,N.geometry=g,N.material=x,N.materialVariant=a(d),N.groupOrder=A,N.renderOrder=d.renderOrder,N.z=p,N.group=f),t++,N}function l(d,g,x,A,p,f,N){N.reversedDepth===!0&&(p=-p);let U=o(d,g,x,A,p,f);x.transmission>0?n.push(U):x.transparent===!0?s.push(U):e.push(U)}function c(d,g,x,A,p,f){let N=o(d,g,x,A,p,f);x.transmission>0?n.unshift(N):x.transparent===!0?s.unshift(N):e.unshift(N)}function h(d,g){e.length>1&&e.sort(d||aS),n.length>1&&n.sort(g||Yp),s.length>1&&s.sort(g||Yp)}function m(){for(let d=t,g=i.length;d<g;d++){let x=i[d];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:m,sort:h}}function oS(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Zp,i.set(n,[a])):s>=r.length?(a=new Zp,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function lS(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new G,color:new pe};break;case"SpotLight":e={position:new G,direction:new G,color:new pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new G,color:new pe,distance:0,decay:0};break;case"HemisphereLight":e={direction:new G,skyColor:new pe,groundColor:new pe};break;case"RectAreaLight":e={color:new pe,position:new G,halfWidth:new G,halfHeight:new G};break}return i[t.id]=e,e}}}function cS(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var hS=0;function uS(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function dS(i){let t=new lS,e=cS(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new G);let s=new G,r=new Oe,a=new Oe;function o(c){let h=0,m=0,d=0;for(let nt=0;nt<9;nt++)n.probe[nt].set(0,0,0);let g=0,x=0,A=0,p=0,f=0,N=0,U=0,T=0,b=0,D=0,z=0,M=0,L=0,k=0;c.sort(uS);for(let nt=0,it=c.length;nt<it;nt++){let X=c[nt],K=X.color,ot=X.intensity,lt=X.distance,bt=null;if(X.shadow&&X.shadow.map&&(X.shadow.map.texture.format===Is?bt=X.shadow.map.texture:bt=X.shadow.map.depthTexture||X.shadow.map.texture),X.isAmbientLight)h+=K.r*ot,m+=K.g*ot,d+=K.b*ot;else if(X.isLightProbe){for(let ht=0;ht<9;ht++)n.probe[ht].addScaledVector(X.sh.coefficients[ht],ot);k++}else if(X.isSunLight){let ht=t.get(X);if(ht.color.copy(X.color).multiplyScalar(X.intensity),X.castShadow){let xt=X.shadow,gt=e.get(X);gt.shadowIntensity=xt.intensity,gt.shadowBias=xt.bias,gt.shadowNormalBias=xt.normalBias,gt.shadowRadius=xt.radius,gt.shadowMapSize.copy(xt.mapSize).multiply(xt.getFrameExtents()),n.sunShadow[x]=gt,n.sunShadowMap[x]=bt;let zt=xt.getViewportCount();for(let Gt=0;Gt<zt;Gt++)n.sunShadowMatrix[A+Gt]=xt.getMatrix(Gt),n.sunShadowCascade[A+Gt]=xt._cascadeData[Gt];A+=zt,x++}n.sun[g]=ht,g++}else if(X.isDirectionalLight){let ht=t.get(X);if(ht.color.copy(X.color).multiplyScalar(X.intensity),X.castShadow){let xt=X.shadow,gt=e.get(X);gt.shadowIntensity=xt.intensity,gt.shadowBias=xt.bias,gt.shadowNormalBias=xt.normalBias,gt.shadowRadius=xt.radius,gt.shadowMapSize=xt.mapSize,n.directionalShadow[p]=gt,n.directionalShadowMap[p]=bt,n.directionalShadowMatrix[p]=X.shadow.matrix,b++}n.directional[p]=ht,p++}else if(X.isSpotLight){let ht=t.get(X);ht.position.setFromMatrixPosition(X.matrixWorld),ht.color.copy(K).multiplyScalar(ot),ht.distance=lt,ht.coneCos=Math.cos(X.angle),ht.penumbraCos=Math.cos(X.angle*(1-X.penumbra)),ht.decay=X.decay,n.spot[N]=ht;let xt=X.shadow;if(X.map&&(n.spotLightMap[M]=X.map,M++,xt.updateMatrices(X),X.castShadow&&L++),n.spotLightMatrix[N]=xt.matrix,X.castShadow){let gt=e.get(X);gt.shadowIntensity=xt.intensity,gt.shadowBias=xt.bias,gt.shadowNormalBias=xt.normalBias,gt.shadowRadius=xt.radius,gt.shadowMapSize=xt.mapSize,n.spotShadow[N]=gt,n.spotShadowMap[N]=bt,z++}N++}else if(X.isRectAreaLight){let ht=t.get(X);ht.color.copy(K).multiplyScalar(ot),ht.halfWidth.set(X.width*.5,0,0),ht.halfHeight.set(0,X.height*.5,0),n.rectArea[U]=ht,U++}else if(X.isPointLight){let ht=t.get(X);if(ht.color.copy(X.color).multiplyScalar(X.intensity),ht.distance=X.distance,ht.decay=X.decay,X.castShadow){let xt=X.shadow,gt=e.get(X);gt.shadowIntensity=xt.intensity,gt.shadowBias=xt.bias,gt.shadowNormalBias=xt.normalBias,gt.shadowRadius=xt.radius,gt.shadowMapSize=xt.mapSize,gt.shadowCameraNear=xt.camera.near,gt.shadowCameraFar=xt.camera.far,n.pointShadow[f]=gt,n.pointShadowMap[f]=bt,n.pointShadowMatrix[f]=X.shadow.matrix,D++}n.point[f]=ht,f++}else if(X.isHemisphereLight){let ht=t.get(X);ht.skyColor.copy(X.color).multiplyScalar(ot),ht.groundColor.copy(X.groundColor).multiplyScalar(ot),n.hemi[T]=ht,T++}}U>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ft.LTC_FLOAT_1,n.rectAreaLTC2=Ft.LTC_FLOAT_2):(n.rectAreaLTC1=Ft.LTC_HALF_1,n.rectAreaLTC2=Ft.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=m,n.ambient[2]=d;let $=n.hash;($.sunLength!==g||$.directionalLength!==p||$.pointLength!==f||$.spotLength!==N||$.rectAreaLength!==U||$.hemiLength!==T||$.numSunShadows!==x||$.numDirectionalShadows!==b||$.numPointShadows!==D||$.numSpotShadows!==z||$.numSpotMaps!==M||$.numLightProbes!==k)&&(n.sun.length=g,n.directional.length=p,n.spot.length=N,n.rectArea.length=U,n.point.length=f,n.hemi.length=T,n.sunShadow.length=x,n.sunShadowMap.length=x,n.sunShadowMatrix.length=A,n.sunShadowCascade.length=A,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=D,n.pointShadowMap.length=D,n.pointShadowMatrix.length=D,n.spotShadow.length=z,n.spotShadowMap.length=z,n.spotLightMatrix.length=z+M-L,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=k,$.sunLength=g,$.directionalLength=p,$.pointLength=f,$.spotLength=N,$.rectAreaLength=U,$.hemiLength=T,$.numSunShadows=x,$.numDirectionalShadows=b,$.numPointShadows=D,$.numSpotShadows=z,$.numSpotMaps=M,$.numLightProbes=k,n.version=hS++)}function l(c,h){let m=0,d=0,g=0,x=0,A=0,p=0,f=h.matrixWorldInverse;for(let N=0,U=c.length;N<U;N++){let T=c[N];if(T.isSunLight){let b=n.sun[m];b.direction.setFromMatrixPosition(T.matrixWorld),b.direction.transformDirection(f),m++}else if(T.isDirectionalLight){let b=n.directional[d];b.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(f),d++}else if(T.isSpotLight){let b=n.spot[x];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(f),b.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(f),x++}else if(T.isRectAreaLight){let b=n.rectArea[A];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(f),a.identity(),r.copy(T.matrixWorld),r.premultiply(f),a.extractRotation(r),b.halfWidth.set(T.width*.5,0,0),b.halfHeight.set(0,T.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),A++}else if(T.isPointLight){let b=n.point[g];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(f),g++}else if(T.isHemisphereLight){let b=n.hemi[p];b.direction.setFromMatrixPosition(T.matrixWorld),b.direction.transformDirection(f),p++}}}return{setup:o,setupView:l,state:n}}function Jp(i){let t=new dS(i),e=[],n=[],s=[];function r(d){m.camera=d,e.length=0,n.length=0,s.length=0}function a(d){e.push(d)}function o(d){n.push(d)}function l(d){s.push(d)}function c(){t.setup(e)}function h(d){t.setupView(e,d)}let m={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:m,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function fS(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Jp(i),t.set(s,[o])):r>=a.length?(o=new Jp(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var pS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mS=`uniform sampler2D shadow_pass;
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
}`,gS=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],_S=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],Kp=new Oe,vo=new G,ju=new G;function xS(i,t,e){let n=new Ur,s=new Lt,r=new Lt,a=new We,o=new Wl,l=new $l,c={},h=e.maxTextureSize,m={[Ts]:Wn,[Wn]:Ts,[Wi]:Wi},d=new Mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:pS,fragmentShader:mS}),g=d.clone();g.defines.HORIZONTAL_PASS=1;let x=new ln;x.setAttribute("position",new qe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let A=new bn(x,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=oo;let f=this.type;this.render=function(D,z,M){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||D.length===0)return;this.type===Gf&&(fe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=oo);let L=i.getRenderTarget(),k=i.getActiveCubeFace(),$=i.getActiveMipmapLevel(),nt=i.state;nt.setBlending($i),nt.buffers.depth.getReversed()===!0?nt.buffers.color.setClear(0,0,0,0):nt.buffers.color.setClear(1,1,1,1),nt.buffers.depth.setTest(!0),nt.setScissorTest(!1);let it=f!==this.type;it&&z.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(K=>K.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,K=D.length;X<K;X++){let ot=D[X],lt=ot.shadow;if(lt===void 0){fe("WebGLShadowMap:",ot,"has no shadow.");continue}if(lt.autoUpdate===!1&&lt.needsUpdate===!1)continue;s.copy(lt.mapSize);let bt=lt.getFrameExtents();s.multiply(bt),r.copy(lt.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/bt.x),s.x=r.x*bt.x,lt.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/bt.y),s.y=r.y*bt.y,lt.mapSize.y=r.y));let ht=i.state.buffers.depth.getReversed();if(lt.camera._reversedDepth=ht,lt.map===null||it===!0){if(lt.map!==null&&(lt.map.depthTexture!==null&&(lt.map.depthTexture.dispose(),lt.map.depthTexture=null),lt.map.dispose()),this.type===Vr){if(ot.isPointLight){fe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}lt.map=new Jn(s.x,s.y,{format:Is,type:Ii,minFilter:Tn,magFilter:Tn,generateMipmaps:!1}),lt.map.texture.name=ot.name+".shadowMap",lt.map.depthTexture=new Ss(s.x,s.y,mi),lt.map.depthTexture.name=ot.name+".shadowMapDepth",lt.map.depthTexture.format=zi,lt.map.depthTexture.compareFunction=null,lt.map.depthTexture.minFilter=yn,lt.map.depthTexture.magFilter=yn}else ot.isPointLight?(lt.map=new jc(s.x),lt.map.depthTexture=new Fl(s.x,Ri)):(lt.map=new Jn(s.x,s.y),lt.map.depthTexture=new Ss(s.x,s.y,Ri)),lt.map.depthTexture.name=ot.name+".shadowMap",lt.map.depthTexture.format=zi,this.type===oo?(lt.map.depthTexture.compareFunction=ht?Yc:qc,lt.map.depthTexture.minFilter=Tn,lt.map.depthTexture.magFilter=Tn):(lt.map.depthTexture.compareFunction=null,lt.map.depthTexture.minFilter=yn,lt.map.depthTexture.magFilter=yn);lt.camera.updateProjectionMatrix()}lt.map.isWebGLCubeRenderTarget!==!0&&(lt.map.width!==s.x||lt.map.height!==s.y)&&lt.map.setSize(s.x,s.y);let xt=lt.map.isWebGLCubeRenderTarget?6:lt.getViewportCount();ot.isPointLight!==!0&&lt.updateMatrices(ot,M);for(let gt=0;gt<xt;gt++){let zt=lt.getCamera(gt);if(ot.isPointLight){let Gt=lt.camera,Ue=lt.matrix,we=ot.distance||Gt.far;we!==Gt.far&&(Gt.far=we,Gt.updateProjectionMatrix()),vo.setFromMatrixPosition(ot.matrixWorld),Gt.position.copy(vo),ju.copy(Gt.position),ju.add(gS[gt]),Gt.up.copy(_S[gt]),Gt.lookAt(ju),Gt.updateMatrixWorld(),Ue.makeTranslation(-vo.x,-vo.y,-vo.z),Kp.multiplyMatrices(Gt.projectionMatrix,Gt.matrixWorldInverse),lt._frustum.setFromProjectionMatrix(Kp,Gt.coordinateSystem,Gt.reversedDepth)}if(lt.map.isWebGLCubeRenderTarget)i.setRenderTarget(lt.map,gt),i.clear();else{gt===0&&(i.setRenderTarget(lt.map),i.clear());let Gt=lt.getViewport(gt);a.set(r.x*Gt.x,r.y*Gt.y,r.x*Gt.z,r.y*Gt.w),nt.viewport(a)}n=lt.getFrustum(gt),T(z,M,zt,ot,this.type)}lt.isPointLightShadow!==!0&&this.type===Vr&&N(lt,M),lt.needsUpdate=!1}f=this.type,p.needsUpdate=!1,i.setRenderTarget(L,k,$)};function N(D,z){let M=t.update(A);d.defines.VSM_SAMPLES!==D.blurSamples&&(d.defines.VSM_SAMPLES=D.blurSamples,g.defines.VSM_SAMPLES=D.blurSamples,d.needsUpdate=!0,g.needsUpdate=!0),D.mapPass===null?D.mapPass=new Jn(s.x,s.y,{format:Is,type:Ii}):(D.mapPass.width!==D.map.width||D.mapPass.height!==D.map.height)&&D.mapPass.setSize(D.map.width,D.map.height),d.uniforms.shadow_pass.value=D.map.depthTexture,d.uniforms.resolution.value.set(D.map.width,D.map.height),d.uniforms.radius.value=D.radius,i.setRenderTarget(D.mapPass),i.clear(),i.renderBufferDirect(z,null,M,d,A,null),g.uniforms.shadow_pass.value=D.mapPass.texture,g.uniforms.resolution.value.set(D.map.width,D.map.height),g.uniforms.radius.value=D.radius,i.setRenderTarget(D.map),i.clear(),i.renderBufferDirect(z,null,M,g,A,null)}function U(D,z,M,L){let k=null,$=M.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if($!==void 0)k=$;else if(k=M.isPointLight===!0?l:o,i.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){let nt=k.uuid,it=z.uuid,X=c[nt];X===void 0&&(X={},c[nt]=X);let K=X[it];K===void 0&&(K=k.clone(),X[it]=K,z.addEventListener("dispose",b)),k=K}if(k.visible=z.visible,k.wireframe=z.wireframe,L===Vr?k.side=z.shadowSide!==null?z.shadowSide:z.side:k.side=z.shadowSide!==null?z.shadowSide:m[z.side],k.alphaMap=z.alphaMap,k.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,k.map=z.map,k.clipShadows=z.clipShadows,k.clippingPlanes=z.clippingPlanes,k.clipIntersection=z.clipIntersection,k.displacementMap=z.displacementMap,k.displacementScale=z.displacementScale,k.displacementBias=z.displacementBias,k.wireframeLinewidth=z.wireframeLinewidth,k.linewidth=z.linewidth,M.isPointLight===!0&&k.isMeshDistanceMaterial===!0){let nt=i.properties.get(k);nt.light=M}return k}function T(D,z,M,L,k){if(D.visible===!1)return;if(D.layers.test(z.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&k===Vr)&&(!D.frustumCulled||D.intersectsFrustum(n))){D.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,D.matrixWorld);let it=t.update(D),X=D.material;if(Array.isArray(X)){let K=it.groups;for(let ot=0,lt=K.length;ot<lt;ot++){let bt=K[ot],ht=X[bt.materialIndex];if(ht&&ht.visible){let xt=U(D,ht,L,k);D.onBeforeShadow(i,D,z,M,it,xt,bt),i.renderBufferDirect(M,null,it,xt,D,bt),D.onAfterShadow(i,D,z,M,it,xt,bt)}}}else if(X.visible){let K=U(D,X,L,k);D.onBeforeShadow(i,D,z,M,it,K,null),i.renderBufferDirect(M,null,it,K,D,null),D.onAfterShadow(i,D,z,M,it,K,null)}}let nt=D.children;for(let it=0,X=nt.length;it<X;it++)T(nt[it],z,M,L,k)}function b(D){D.target.removeEventListener("dispose",b);for(let M in c){let L=c[M],k=D.target.uuid;k in L&&(L[k].dispose(),delete L[k])}}}function vS(i,t){function e(){let Y=!1,Pt=new We,pt=null,Nt=new We(0,0,0,0);return{setMask:function(Rt){pt!==Rt&&!Y&&(i.colorMask(Rt,Rt,Rt,Rt),pt=Rt)},setLocked:function(Rt){Y=Rt},setClear:function(Rt,vt,Jt,Qt,ze){ze===!0&&(Rt*=Qt,vt*=Qt,Jt*=Qt),Pt.set(Rt,vt,Jt,Qt),Nt.equals(Pt)===!1&&(i.clearColor(Rt,vt,Jt,Qt),Nt.copy(Pt))},reset:function(){Y=!1,pt=null,Nt.set(-1,0,0,0)}}}function n(){let Y=!1,Pt=!1,pt=null,Nt=null,Rt=null;return{setReversed:function(vt){if(Pt!==vt){let Jt=t.get("EXT_clip_control");vt?Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.ZERO_TO_ONE_EXT):Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.NEGATIVE_ONE_TO_ONE_EXT),Pt=vt;let Qt=Rt;Rt=null,this.setClear(Qt)}},getReversed:function(){return Pt},setTest:function(vt){vt?mt(i.DEPTH_TEST):Tt(i.DEPTH_TEST)},setMask:function(vt){pt!==vt&&!Y&&(i.depthMask(vt),pt=vt)},setFunc:function(vt){if(Pt&&(vt=Mp[vt]),Nt!==vt){switch(vt){case xl:i.depthFunc(i.NEVER);break;case vl:i.depthFunc(i.ALWAYS);break;case yl:i.depthFunc(i.LESS);break;case Cr:i.depthFunc(i.LEQUAL);break;case Sl:i.depthFunc(i.EQUAL);break;case bl:i.depthFunc(i.GEQUAL);break;case Ml:i.depthFunc(i.GREATER);break;case wl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Nt=vt}},setLocked:function(vt){Y=vt},setClear:function(vt){Rt!==vt&&(Rt=vt,Pt&&(vt=1-vt),i.clearDepth(vt))},reset:function(){Y=!1,pt=null,Nt=null,Rt=null,Pt=!1}}}function s(){let Y=!1,Pt=null,pt=null,Nt=null,Rt=null,vt=null,Jt=null,Qt=null,ze=null;return{setTest:function(Fe){Y||(Fe?mt(i.STENCIL_TEST):Tt(i.STENCIL_TEST))},setMask:function(Fe){Pt!==Fe&&!Y&&(i.stencilMask(Fe),Pt=Fe)},setFunc:function(Fe,qn,Pn){(pt!==Fe||Nt!==qn||Rt!==Pn)&&(i.stencilFunc(Fe,qn,Pn),pt=Fe,Nt=qn,Rt=Pn)},setOp:function(Fe,qn,Pn){(vt!==Fe||Jt!==qn||Qt!==Pn)&&(i.stencilOp(Fe,qn,Pn),vt=Fe,Jt=qn,Qt=Pn)},setLocked:function(Fe){Y=Fe},setClear:function(Fe){ze!==Fe&&(i.clearStencil(Fe),ze=Fe)},reset:function(){Y=!1,Pt=null,pt=null,Nt=null,Rt=null,vt=null,Jt=null,Qt=null,ze=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},m={},d={},g=new WeakMap,x=[],A=null,p=!1,f=null,N=null,U=null,T=null,b=null,D=null,z=null,M=new pe(0,0,0),L=0,k=!1,$=null,nt=null,it=null,X=null,K=null,ot=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),lt=!1,bt=0,ht=i.getParameter(i.VERSION);ht.indexOf("WebGL")!==-1?(bt=parseFloat(/^WebGL (\d)/.exec(ht)[1]),lt=bt>=1):ht.indexOf("OpenGL ES")!==-1&&(bt=parseFloat(/^OpenGL ES (\d)/.exec(ht)[1]),lt=bt>=2);let xt=null,gt={},zt=i.getParameter(i.SCISSOR_BOX),Gt=i.getParameter(i.VIEWPORT),Ue=new We().fromArray(zt),we=new We().fromArray(Gt);function Pe(Y,Pt,pt,Nt){let Rt=new Uint8Array(4),vt=i.createTexture();i.bindTexture(Y,vt),i.texParameteri(Y,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(Y,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Jt=0;Jt<pt;Jt++)Y===i.TEXTURE_3D||Y===i.TEXTURE_2D_ARRAY?i.texImage3D(Pt,0,i.RGBA,1,1,Nt,0,i.RGBA,i.UNSIGNED_BYTE,Rt):i.texImage2D(Pt+Jt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Rt);return vt}let dt={};dt[i.TEXTURE_2D]=Pe(i.TEXTURE_2D,i.TEXTURE_2D,1),dt[i.TEXTURE_CUBE_MAP]=Pe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),dt[i.TEXTURE_2D_ARRAY]=Pe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),dt[i.TEXTURE_3D]=Pe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),mt(i.DEPTH_TEST),a.setFunc(Cr),wt(!1),It(xu),mt(i.CULL_FACE),Mt($i);function mt(Y){h[Y]!==!0&&(i.enable(Y),h[Y]=!0)}function Tt(Y){h[Y]!==!1&&(i.disable(Y),h[Y]=!1)}function ie(Y,Pt){return d[Y]!==Pt?(i.bindFramebuffer(Y,Pt),d[Y]=Pt,Y===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=Pt),Y===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=Pt),!0):!1}function Vt(Y,Pt){let pt=x,Nt=!1;if(Y){pt=g.get(Pt),pt===void 0&&(pt=[],g.set(Pt,pt));let Rt=Y.textures;if(pt.length!==Rt.length||pt[0]!==i.COLOR_ATTACHMENT0){for(let vt=0,Jt=Rt.length;vt<Jt;vt++)pt[vt]=i.COLOR_ATTACHMENT0+vt;pt.length=Rt.length,Nt=!0}}else pt[0]!==i.BACK&&(pt[0]=i.BACK,Nt=!0);Nt&&i.drawBuffers(pt)}function ue(Y){return A!==Y?(i.useProgram(Y),A=Y,!0):!1}let de={[Js]:i.FUNC_ADD,[$f]:i.FUNC_SUBTRACT,[Xf]:i.FUNC_REVERSE_SUBTRACT};de[qf]=i.MIN,de[Yf]=i.MAX;let at={[Zf]:i.ZERO,[Jf]:i.ONE,[Kf]:i.SRC_COLOR,[bu]:i.SRC_ALPHA,[ip]:i.SRC_ALPHA_SATURATE,[ep]:i.DST_COLOR,[Qf]:i.DST_ALPHA,[jf]:i.ONE_MINUS_SRC_COLOR,[Mu]:i.ONE_MINUS_SRC_ALPHA,[np]:i.ONE_MINUS_DST_COLOR,[tp]:i.ONE_MINUS_DST_ALPHA,[sp]:i.CONSTANT_COLOR,[rp]:i.ONE_MINUS_CONSTANT_COLOR,[ap]:i.CONSTANT_ALPHA,[op]:i.ONE_MINUS_CONSTANT_ALPHA};function Mt(Y,Pt,pt,Nt,Rt,vt,Jt,Qt,ze,Fe){if(Y===$i){p===!0&&(Tt(i.BLEND),p=!1);return}if(p===!1&&(mt(i.BLEND),p=!0),Y!==Wf){if(Y!==f||Fe!==k){if((N!==Js||b!==Js)&&(i.blendEquation(i.FUNC_ADD),N=Js,b=Js),Fe)switch(Y){case Hr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case vu:i.blendFunc(i.ONE,i.ONE);break;case yu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Su:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ge("WebGLState: Invalid blending: ",Y);break}else switch(Y){case Hr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case vu:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case yu:ge("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Su:ge("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ge("WebGLState: Invalid blending: ",Y);break}U=null,T=null,D=null,z=null,M.set(0,0,0),L=0,f=Y,k=Fe}return}Rt=Rt||Pt,vt=vt||pt,Jt=Jt||Nt,(Pt!==N||Rt!==b)&&(i.blendEquationSeparate(de[Pt],de[Rt]),N=Pt,b=Rt),(pt!==U||Nt!==T||vt!==D||Jt!==z)&&(i.blendFuncSeparate(at[pt],at[Nt],at[vt],at[Jt]),U=pt,T=Nt,D=vt,z=Jt),(Qt.equals(M)===!1||ze!==L)&&(i.blendColor(Qt.r,Qt.g,Qt.b,ze),M.copy(Qt),L=ze),f=Y,k=!1}function H(Y,Pt){Y.side===Wi?Tt(i.CULL_FACE):mt(i.CULL_FACE);let pt=Y.side===Wn;Pt&&(pt=!pt),wt(pt),Y.blending===Hr&&Y.transparent===!1?Mt($i):Mt(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),a.setFunc(Y.depthFunc),a.setTest(Y.depthTest),a.setMask(Y.depthWrite),r.setMask(Y.colorWrite);let Nt=Y.stencilWrite;o.setTest(Nt),Nt&&(o.setMask(Y.stencilWriteMask),o.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),o.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),qt(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?mt(i.SAMPLE_ALPHA_TO_COVERAGE):Tt(i.SAMPLE_ALPHA_TO_COVERAGE)}function wt(Y){$!==Y&&(Y?i.frontFace(i.CW):i.frontFace(i.CCW),$=Y)}function It(Y){Y!==Vf?(mt(i.CULL_FACE),Y!==nt&&(Y===xu?i.cullFace(i.BACK):Y===Hf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Tt(i.CULL_FACE),nt=Y}function le(Y){Y!==it&&(lt&&i.lineWidth(Y),it=Y)}function qt(Y,Pt,pt){Y?(mt(i.POLYGON_OFFSET_FILL),(X!==Pt||K!==pt)&&(X=Pt,K=pt,a.getReversed()&&(Pt=-Pt),i.polygonOffset(Pt,pt))):Tt(i.POLYGON_OFFSET_FILL)}function he(Y){Y?mt(i.SCISSOR_TEST):Tt(i.SCISSOR_TEST)}function ce(Y){Y===void 0&&(Y=i.TEXTURE0+ot-1),xt!==Y&&(i.activeTexture(Y),xt=Y)}function W(Y,Pt,pt){pt===void 0&&(xt===null?pt=i.TEXTURE0+ot-1:pt=xt);let Nt=gt[pt];Nt===void 0&&(Nt={type:void 0,texture:void 0},gt[pt]=Nt),(Nt.type!==Y||Nt.texture!==Pt)&&(xt!==pt&&(i.activeTexture(pt),xt=pt),i.bindTexture(Y,Pt||dt[Y]),Nt.type=Y,Nt.texture=Pt)}function Ce(){let Y=gt[xt];Y!==void 0&&Y.type!==void 0&&(i.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function Wt(){try{i.compressedTexImage2D(...arguments)}catch(Y){ge("WebGLState:",Y)}}function R(){try{i.compressedTexImage3D(...arguments)}catch(Y){ge("WebGLState:",Y)}}function v(){try{i.texSubImage2D(...arguments)}catch(Y){ge("WebGLState:",Y)}}function tt(){try{i.texSubImage3D(...arguments)}catch(Y){ge("WebGLState:",Y)}}function st(){try{i.compressedTexSubImage2D(...arguments)}catch(Y){ge("WebGLState:",Y)}}function ct(){try{i.compressedTexSubImage3D(...arguments)}catch(Y){ge("WebGLState:",Y)}}function At(){try{i.texStorage2D(...arguments)}catch(Y){ge("WebGLState:",Y)}}function Ct(){try{i.texStorage3D(...arguments)}catch(Y){ge("WebGLState:",Y)}}function ut(){try{i.texImage2D(...arguments)}catch(Y){ge("WebGLState:",Y)}}function _t(){try{i.texImage3D(...arguments)}catch(Y){ge("WebGLState:",Y)}}function Dt(Y){return m[Y]!==void 0?m[Y]:i.getParameter(Y)}function se(Y,Pt){m[Y]!==Pt&&(i.pixelStorei(Y,Pt),m[Y]=Pt)}function Ot(Y){Ue.equals(Y)===!1&&(i.scissor(Y.x,Y.y,Y.z,Y.w),Ue.copy(Y))}function Ut(Y){we.equals(Y)===!1&&(i.viewport(Y.x,Y.y,Y.z,Y.w),we.copy(Y))}function jt(Y,Pt){let pt=c.get(Pt);pt===void 0&&(pt=new WeakMap,c.set(Pt,pt));let Nt=pt.get(Y);Nt===void 0&&(Nt=i.getUniformBlockIndex(Pt,Y.name),pt.set(Y,Nt))}function re(Y,Pt){let Nt=c.get(Pt).get(Y);l.get(Pt)!==Nt&&(i.uniformBlockBinding(Pt,Nt,Y.__bindingPointIndex),l.set(Pt,Nt))}function _e(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},m={},xt=null,gt={},d={},g=new WeakMap,x=[],A=null,p=!1,f=null,N=null,U=null,T=null,b=null,D=null,z=null,M=new pe(0,0,0),L=0,k=!1,$=null,nt=null,it=null,X=null,K=null,Ue.set(0,0,i.canvas.width,i.canvas.height),we.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:mt,disable:Tt,bindFramebuffer:ie,drawBuffers:Vt,useProgram:ue,setBlending:Mt,setMaterial:H,setFlipSided:wt,setCullFace:It,setLineWidth:le,setPolygonOffset:qt,setScissorTest:he,activeTexture:ce,bindTexture:W,unbindTexture:Ce,compressedTexImage2D:Wt,compressedTexImage3D:R,texImage2D:ut,texImage3D:_t,pixelStorei:se,getParameter:Dt,updateUBOMapping:jt,uniformBlockBinding:re,texStorage2D:At,texStorage3D:Ct,texSubImage2D:v,texSubImage3D:tt,compressedTexSubImage2D:st,compressedTexSubImage3D:ct,scissor:Ot,viewport:Ut,reset:_e}}function yS(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Lt,h=new WeakMap,m=new Set,d,g=new WeakMap,x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(R,v){return x?new OffscreenCanvas(R,v):Ra("canvas")}function p(R,v,tt){let st=1,ct=Wt(R);if((ct.width>tt||ct.height>tt)&&(st=tt/Math.max(ct.width,ct.height)),st<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let At=Math.floor(st*ct.width),Ct=Math.floor(st*ct.height);d===void 0&&(d=A(At,Ct));let ut=v?A(At,Ct):d;return ut.width=At,ut.height=Ct,ut.getContext("2d").drawImage(R,0,0,At,Ct),fe("WebGLRenderer: Texture has been resized from ("+ct.width+"x"+ct.height+") to ("+At+"x"+Ct+")."),ut}else return"data"in R&&fe("WebGLRenderer: Image in DataTexture is too big ("+ct.width+"x"+ct.height+")."),R;return R}function f(R){return R.generateMipmaps}function N(R){i.generateMipmap(R)}function U(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(R,v,tt,st,ct,At=!1){if(R!==null){if(i[R]!==void 0)return i[R];fe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Ct;st&&(Ct=t.get("EXT_texture_norm16"),Ct||fe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ut=v;if(v===i.RED&&(tt===i.FLOAT&&(ut=i.R32F),tt===i.HALF_FLOAT&&(ut=i.R16F),tt===i.UNSIGNED_BYTE&&(ut=i.R8),tt===i.UNSIGNED_SHORT&&Ct&&(ut=Ct.R16_EXT),tt===i.SHORT&&Ct&&(ut=Ct.R16_SNORM_EXT)),v===i.RED_INTEGER&&(tt===i.UNSIGNED_BYTE&&(ut=i.R8UI),tt===i.UNSIGNED_SHORT&&(ut=i.R16UI),tt===i.UNSIGNED_INT&&(ut=i.R32UI),tt===i.BYTE&&(ut=i.R8I),tt===i.SHORT&&(ut=i.R16I),tt===i.INT&&(ut=i.R32I)),v===i.RG&&(tt===i.FLOAT&&(ut=i.RG32F),tt===i.HALF_FLOAT&&(ut=i.RG16F),tt===i.UNSIGNED_BYTE&&(ut=i.RG8),tt===i.UNSIGNED_SHORT&&Ct&&(ut=Ct.RG16_EXT),tt===i.SHORT&&Ct&&(ut=Ct.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(tt===i.UNSIGNED_BYTE&&(ut=i.RG8UI),tt===i.UNSIGNED_SHORT&&(ut=i.RG16UI),tt===i.UNSIGNED_INT&&(ut=i.RG32UI),tt===i.BYTE&&(ut=i.RG8I),tt===i.SHORT&&(ut=i.RG16I),tt===i.INT&&(ut=i.RG32I)),v===i.RGB_INTEGER&&(tt===i.UNSIGNED_BYTE&&(ut=i.RGB8UI),tt===i.UNSIGNED_SHORT&&(ut=i.RGB16UI),tt===i.UNSIGNED_INT&&(ut=i.RGB32UI),tt===i.BYTE&&(ut=i.RGB8I),tt===i.SHORT&&(ut=i.RGB16I),tt===i.INT&&(ut=i.RGB32I)),v===i.RGBA_INTEGER&&(tt===i.UNSIGNED_BYTE&&(ut=i.RGBA8UI),tt===i.UNSIGNED_SHORT&&(ut=i.RGBA16UI),tt===i.UNSIGNED_INT&&(ut=i.RGBA32UI),tt===i.BYTE&&(ut=i.RGBA8I),tt===i.SHORT&&(ut=i.RGBA16I),tt===i.INT&&(ut=i.RGBA32I)),v===i.RGB&&(tt===i.UNSIGNED_SHORT&&Ct&&(ut=Ct.RGB16_EXT),tt===i.SHORT&&Ct&&(ut=Ct.RGB16_SNORM_EXT),tt===i.UNSIGNED_INT_5_9_9_9_REV&&(ut=i.RGB9_E5),tt===i.UNSIGNED_INT_10F_11F_11F_REV&&(ut=i.R11F_G11F_B10F)),v===i.RGBA){let _t=At?Ca:Le.getTransfer(ct);tt===i.FLOAT&&(ut=i.RGBA32F),tt===i.HALF_FLOAT&&(ut=i.RGBA16F),tt===i.UNSIGNED_BYTE&&(ut=_t===Ge?i.SRGB8_ALPHA8:i.RGBA8),tt===i.UNSIGNED_SHORT&&Ct&&(ut=Ct.RGBA16_EXT),tt===i.SHORT&&Ct&&(ut=Ct.RGBA16_SNORM_EXT),tt===i.UNSIGNED_SHORT_4_4_4_4&&(ut=i.RGBA4),tt===i.UNSIGNED_SHORT_5_5_5_1&&(ut=i.RGB5_A1)}return(ut===i.R16F||ut===i.R32F||ut===i.RG16F||ut===i.RG32F||ut===i.RGBA16F||ut===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ut}function b(R,v){let tt;return R?v===null||v===Ri||v===Wr?tt=i.DEPTH24_STENCIL8:v===mi?tt=i.DEPTH32F_STENCIL8:v===Gr&&(tt=i.DEPTH24_STENCIL8,fe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Ri||v===Wr?tt=i.DEPTH_COMPONENT24:v===mi?tt=i.DEPTH_COMPONENT32F:v===Gr&&(tt=i.DEPTH_COMPONENT16),tt}function D(R,v){return f(R)===!0||R.isFramebufferTexture&&R.minFilter!==yn&&R.minFilter!==Tn?Math.log2(Math.max(v.width,v.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?v.mipmaps.length:1}function z(R){let v=R.target;v.removeEventListener("dispose",z),L(v),v.isVideoTexture&&h.delete(v),v.isHTMLTexture&&m.delete(v)}function M(R){let v=R.target;v.removeEventListener("dispose",M),$(v)}function L(R){let v=n.get(R);if(v.__webglInit===void 0)return;let tt=R.source,st=g.get(tt);if(st){let ct=st[v.__cacheKey];ct.usedTimes--,ct.usedTimes===0&&k(R),Object.keys(st).length===0&&g.delete(tt)}n.remove(R)}function k(R){let v=n.get(R);i.deleteTexture(v.__webglTexture);let tt=R.source,st=g.get(tt);delete st[v.__cacheKey],a.memory.textures--}function $(R){let v=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let st=0;st<6;st++){if(Array.isArray(v.__webglFramebuffer[st]))for(let ct=0;ct<v.__webglFramebuffer[st].length;ct++)i.deleteFramebuffer(v.__webglFramebuffer[st][ct]);else i.deleteFramebuffer(v.__webglFramebuffer[st]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[st])}else{if(Array.isArray(v.__webglFramebuffer))for(let st=0;st<v.__webglFramebuffer.length;st++)i.deleteFramebuffer(v.__webglFramebuffer[st]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let st=0;st<v.__webglColorRenderbuffer.length;st++)v.__webglColorRenderbuffer[st]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[st]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let tt=R.textures;for(let st=0,ct=tt.length;st<ct;st++){let At=n.get(tt[st]);At.__webglTexture&&(i.deleteTexture(At.__webglTexture),a.memory.textures--),n.remove(tt[st])}n.remove(R)}let nt=0;function it(){nt=0}function X(){return nt}function K(R){nt=R}function ot(){let R=nt;return R>=s.maxTextures&&fe("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),nt+=1,R}function lt(R){let v=[];return v.push(R.wrapS),v.push(R.wrapT),v.push(R.wrapR||0),v.push(R.magFilter),v.push(R.minFilter),v.push(R.anisotropy),v.push(R.internalFormat),v.push(R.format),v.push(R.type),v.push(R.generateMipmaps),v.push(R.premultiplyAlpha),v.push(R.flipY),v.push(R.unpackAlignment),v.push(R.colorSpace),v.join()}function bt(R,v){let tt=n.get(R);if(R.isVideoTexture&&W(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&tt.__version!==R.version){let st=R.image;if(st===null)fe("WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)fe("WebGLRenderer: Texture marked for update but image is incomplete");else{Tt(tt,R,v);return}}else R.isExternalTexture&&(tt.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,tt.__webglTexture,i.TEXTURE0+v)}function ht(R,v){let tt=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&tt.__version!==R.version){Tt(tt,R,v);return}else R.isExternalTexture&&(tt.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,tt.__webglTexture,i.TEXTURE0+v)}function xt(R,v){let tt=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&tt.__version!==R.version){Tt(tt,R,v);return}e.bindTexture(i.TEXTURE_3D,tt.__webglTexture,i.TEXTURE0+v)}function gt(R,v){let tt=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&tt.__version!==R.version){ie(tt,R,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,tt.__webglTexture,i.TEXTURE0+v)}let zt={[El]:i.REPEAT,[Bi]:i.CLAMP_TO_EDGE,[Tl]:i.MIRRORED_REPEAT},Gt={[yn]:i.NEAREST,[hp]:i.NEAREST_MIPMAP_NEAREST,[co]:i.NEAREST_MIPMAP_LINEAR,[Tn]:i.LINEAR,[lc]:i.LINEAR_MIPMAP_NEAREST,[Cs]:i.LINEAR_MIPMAP_LINEAR},Ue={[pp]:i.NEVER,[vp]:i.ALWAYS,[mp]:i.LESS,[qc]:i.LEQUAL,[gp]:i.EQUAL,[Yc]:i.GEQUAL,[_p]:i.GREATER,[xp]:i.NOTEQUAL};function we(R,v){if(v.type===mi&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Tn||v.magFilter===lc||v.magFilter===co||v.magFilter===Cs||v.minFilter===Tn||v.minFilter===lc||v.minFilter===co||v.minFilter===Cs)&&fe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,zt[v.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,zt[v.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,zt[v.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,Gt[v.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,Gt[v.minFilter]),v.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,Ue[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===yn||v.minFilter!==co&&v.minFilter!==Cs||v.type===mi&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let tt=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Pe(R,v){let tt=!1;R.__webglInit===void 0&&(R.__webglInit=!0,v.addEventListener("dispose",z));let st=v.source,ct=g.get(st);ct===void 0&&(ct={},g.set(st,ct));let At=lt(v);if(At!==R.__cacheKey){ct[At]===void 0&&(ct[At]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,tt=!0),ct[At].usedTimes++;let Ct=ct[R.__cacheKey];Ct!==void 0&&(ct[R.__cacheKey].usedTimes--,Ct.usedTimes===0&&k(v)),R.__cacheKey=At,R.__webglTexture=ct[At].texture}return tt}function dt(R,v,tt){return Math.floor(Math.floor(R/tt)/v)}function mt(R,v,tt,st){let At=R.updateRanges;if(At.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,tt,st,v.data);else{At.sort((se,Ot)=>se.start-Ot.start);let Ct=0;for(let se=1;se<At.length;se++){let Ot=At[Ct],Ut=At[se],jt=Ot.start+Ot.count,re=dt(Ut.start,v.width,4),_e=dt(Ot.start,v.width,4);Ut.start<=jt+1&&re===_e&&dt(Ut.start+Ut.count-1,v.width,4)===re?Ot.count=Math.max(Ot.count,Ut.start+Ut.count-Ot.start):(++Ct,At[Ct]=Ut)}At.length=Ct+1;let ut=e.getParameter(i.UNPACK_ROW_LENGTH),_t=e.getParameter(i.UNPACK_SKIP_PIXELS),Dt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let se=0,Ot=At.length;se<Ot;se++){let Ut=At[se],jt=Math.floor(Ut.start/4),re=Math.ceil(Ut.count/4),_e=jt%v.width,Y=Math.floor(jt/v.width),Pt=re,pt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,_e),e.pixelStorei(i.UNPACK_SKIP_ROWS,Y),e.texSubImage2D(i.TEXTURE_2D,0,_e,Y,Pt,pt,tt,st,v.data)}R.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,ut),e.pixelStorei(i.UNPACK_SKIP_PIXELS,_t),e.pixelStorei(i.UNPACK_SKIP_ROWS,Dt)}}function Tt(R,v,tt){let st=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(st=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(st=i.TEXTURE_3D);let ct=Pe(R,v),At=v.source;e.bindTexture(st,R.__webglTexture,i.TEXTURE0+tt);let Ct=n.get(At);if(At.version!==Ct.__version||ct===!0){if(e.activeTexture(i.TEXTURE0+tt),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let pt=Le.getPrimaries(Le.workingColorSpace),Nt=v.colorSpace===cs?null:Le.getPrimaries(v.colorSpace),Rt=v.colorSpace===cs||pt===Nt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt)}e.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let _t=p(v.image,!1,s.maxTextureSize);_t=Ce(v,_t);let Dt=r.convert(v.format,v.colorSpace),se=r.convert(v.type),Ot=T(v.internalFormat,Dt,se,v.normalized,v.colorSpace,v.isVideoTexture);we(st,v);let Ut,jt=v.mipmaps,re=v.isVideoTexture!==!0,_e=Ct.__version===void 0||ct===!0,Y=At.dataReady,Pt=D(v,_t);if(v.isDepthTexture)Ot=b(v.format===Rs,v.type),_e&&(re?e.texStorage2D(i.TEXTURE_2D,1,Ot,_t.width,_t.height):e.texImage2D(i.TEXTURE_2D,0,Ot,_t.width,_t.height,0,Dt,se,null));else if(v.isDataTexture)if(jt.length>0){re&&_e&&e.texStorage2D(i.TEXTURE_2D,Pt,Ot,jt[0].width,jt[0].height);for(let pt=0,Nt=jt.length;pt<Nt;pt++)Ut=jt[pt],re?Y&&e.texSubImage2D(i.TEXTURE_2D,pt,0,0,Ut.width,Ut.height,Dt,se,Ut.data):e.texImage2D(i.TEXTURE_2D,pt,Ot,Ut.width,Ut.height,0,Dt,se,Ut.data);v.generateMipmaps=!1}else re?(_e&&e.texStorage2D(i.TEXTURE_2D,Pt,Ot,_t.width,_t.height),Y&&mt(v,_t,Dt,se)):e.texImage2D(i.TEXTURE_2D,0,Ot,_t.width,_t.height,0,Dt,se,_t.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){re&&_e&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Pt,Ot,jt[0].width,jt[0].height,_t.depth);for(let pt=0,Nt=jt.length;pt<Nt;pt++)if(Ut=jt[pt],v.format!==gi)if(Dt!==null)if(re){if(Y)if(v.layerUpdates.size>0){let Rt=Xu(Ut.width,Ut.height,v.format,v.type);for(let vt of v.layerUpdates){let Jt=Ut.data.subarray(vt*Rt/Ut.data.BYTES_PER_ELEMENT,(vt+1)*Rt/Ut.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,pt,0,0,vt,Ut.width,Ut.height,1,Dt,Jt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,pt,0,0,0,Ut.width,Ut.height,_t.depth,Dt,Ut.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,pt,Ot,Ut.width,Ut.height,_t.depth,0,Ut.data,0,0);else fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else re?Y&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,pt,0,0,0,Ut.width,Ut.height,_t.depth,Dt,se,Ut.data):e.texImage3D(i.TEXTURE_2D_ARRAY,pt,Ot,Ut.width,Ut.height,_t.depth,0,Dt,se,Ut.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{re&&_e&&e.texStorage2D(i.TEXTURE_2D,Pt,Ot,jt[0].width,jt[0].height);for(let pt=0,Nt=jt.length;pt<Nt;pt++)Ut=jt[pt],v.format!==gi?Dt!==null?re?Y&&e.compressedTexSubImage2D(i.TEXTURE_2D,pt,0,0,Ut.width,Ut.height,Dt,Ut.data):e.compressedTexImage2D(i.TEXTURE_2D,pt,Ot,Ut.width,Ut.height,0,Ut.data):fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):re?Y&&e.texSubImage2D(i.TEXTURE_2D,pt,0,0,Ut.width,Ut.height,Dt,se,Ut.data):e.texImage2D(i.TEXTURE_2D,pt,Ot,Ut.width,Ut.height,0,Dt,se,Ut.data)}else if(v.isDataArrayTexture)if(re){if(_e&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Pt,Ot,_t.width,_t.height,_t.depth),Y)if(v.layerUpdates.size>0){let pt=Xu(_t.width,_t.height,v.format,v.type);for(let Nt of v.layerUpdates){let Rt=_t.data.subarray(Nt*pt/_t.data.BYTES_PER_ELEMENT,(Nt+1)*pt/_t.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Nt,_t.width,_t.height,1,Dt,se,Rt)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,_t.width,_t.height,_t.depth,Dt,se,_t.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ot,_t.width,_t.height,_t.depth,0,Dt,se,_t.data);else if(v.isData3DTexture)re?(_e&&e.texStorage3D(i.TEXTURE_3D,Pt,Ot,_t.width,_t.height,_t.depth),Y&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,_t.width,_t.height,_t.depth,Dt,se,_t.data)):e.texImage3D(i.TEXTURE_3D,0,Ot,_t.width,_t.height,_t.depth,0,Dt,se,_t.data);else if(v.isFramebufferTexture){if(_e)if(re)e.texStorage2D(i.TEXTURE_2D,Pt,Ot,_t.width,_t.height);else{let pt=_t.width,Nt=_t.height;for(let Rt=0;Rt<Pt;Rt++)e.texImage2D(i.TEXTURE_2D,Rt,Ot,pt,Nt,0,Dt,se,null),pt>>=1,Nt>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){let pt=i.canvas;if(pt.hasAttribute("layoutsubtree")||pt.setAttribute("layoutsubtree","true"),_t.parentNode!==pt){pt.appendChild(_t),m.add(v),pt.onpaint=Nt=>{let Rt=Nt.changedElements;for(let vt of m)Rt.includes(vt.image)&&(vt.needsUpdate=!0)},pt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,_t);else{let Rt=i.RGBA,vt=i.RGBA,Jt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Rt,vt,Jt,_t)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(jt.length>0){if(re&&_e){let pt=Wt(jt[0]);e.texStorage2D(i.TEXTURE_2D,Pt,Ot,pt.width,pt.height)}for(let pt=0,Nt=jt.length;pt<Nt;pt++)Ut=jt[pt],re?Y&&e.texSubImage2D(i.TEXTURE_2D,pt,0,0,Dt,se,Ut):e.texImage2D(i.TEXTURE_2D,pt,Ot,Dt,se,Ut);v.generateMipmaps=!1}else if(re){if(_e){let pt=Wt(_t);e.texStorage2D(i.TEXTURE_2D,Pt,Ot,pt.width,pt.height)}Y&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Dt,se,_t)}else e.texImage2D(i.TEXTURE_2D,0,Ot,Dt,se,_t);f(v)&&N(st),Ct.__version=At.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function ie(R,v,tt){if(v.image.length!==6)return;let st=Pe(R,v),ct=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+tt);let At=n.get(ct);if(ct.version!==At.__version||st===!0){e.activeTexture(i.TEXTURE0+tt);let Ct=Le.getPrimaries(Le.workingColorSpace),ut=v.colorSpace===cs?null:Le.getPrimaries(v.colorSpace),_t=v.colorSpace===cs||Ct===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);let Dt=v.isCompressedTexture||v.image[0].isCompressedTexture,se=v.image[0]&&v.image[0].isDataTexture,Ot=[];for(let vt=0;vt<6;vt++)!Dt&&!se?Ot[vt]=p(v.image[vt],!0,s.maxCubemapSize):Ot[vt]=se?v.image[vt].image:v.image[vt],Ot[vt]=Ce(v,Ot[vt]);let Ut=Ot[0],jt=r.convert(v.format,v.colorSpace),re=r.convert(v.type),_e=T(v.internalFormat,jt,re,v.normalized,v.colorSpace),Y=v.isVideoTexture!==!0,Pt=At.__version===void 0||st===!0,pt=ct.dataReady,Nt=D(v,Ut);we(i.TEXTURE_CUBE_MAP,v);let Rt;if(Dt){Y&&Pt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Nt,_e,Ut.width,Ut.height);for(let vt=0;vt<6;vt++){Rt=Ot[vt].mipmaps;for(let Jt=0;Jt<Rt.length;Jt++){let Qt=Rt[Jt];v.format!==gi?jt!==null?Y?pt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Jt,0,0,Qt.width,Qt.height,jt,Qt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Jt,_e,Qt.width,Qt.height,0,Qt.data):fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Jt,0,0,Qt.width,Qt.height,jt,re,Qt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Jt,_e,Qt.width,Qt.height,0,jt,re,Qt.data)}}}else{if(Rt=v.mipmaps,Y&&Pt){Rt.length>0&&Nt++;let vt=Wt(Ot[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Nt,_e,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(se){Y?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Ot[vt].width,Ot[vt].height,jt,re,Ot[vt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,_e,Ot[vt].width,Ot[vt].height,0,jt,re,Ot[vt].data);for(let Jt=0;Jt<Rt.length;Jt++){let ze=Rt[Jt].image[vt].image;Y?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Jt+1,0,0,ze.width,ze.height,jt,re,ze.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Jt+1,_e,ze.width,ze.height,0,jt,re,ze.data)}}else{Y?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,jt,re,Ot[vt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,_e,jt,re,Ot[vt]);for(let Jt=0;Jt<Rt.length;Jt++){let Qt=Rt[Jt];Y?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Jt+1,0,0,jt,re,Qt.image[vt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Jt+1,_e,jt,re,Qt.image[vt])}}}f(v)&&N(i.TEXTURE_CUBE_MAP),At.__version=ct.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function Vt(R,v,tt,st,ct,At){let Ct=r.convert(tt.format,tt.colorSpace),ut=r.convert(tt.type),_t=T(tt.internalFormat,Ct,ut,tt.normalized,tt.colorSpace),Dt=n.get(v),se=n.get(tt);if(se.__renderTarget=v,!Dt.__hasExternalTextures){let Ot=Math.max(1,v.width>>At),Ut=Math.max(1,v.height>>At);ct===i.TEXTURE_3D||ct===i.TEXTURE_2D_ARRAY?e.texImage3D(ct,At,_t,Ot,Ut,v.depth,0,Ct,ut,null):e.texImage2D(ct,At,_t,Ot,Ut,0,Ct,ut,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),ce(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,st,ct,se.__webglTexture,0,he(v)):(ct===i.TEXTURE_2D||ct>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ct<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,st,ct,se.__webglTexture,At),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ue(R,v,tt){if(i.bindRenderbuffer(i.RENDERBUFFER,R),v.depthBuffer){let st=v.depthTexture,ct=st&&st.isDepthTexture?st.type:null,At=b(v.stencilBuffer,ct),Ct=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ce(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,he(v),At,v.width,v.height):tt?i.renderbufferStorageMultisample(i.RENDERBUFFER,he(v),At,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,At,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ct,i.RENDERBUFFER,R)}else{let st=v.textures;for(let ct=0;ct<st.length;ct++){let At=st[ct],Ct=r.convert(At.format,At.colorSpace),ut=r.convert(At.type),_t=T(At.internalFormat,Ct,ut,At.normalized,At.colorSpace);ce(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,he(v),_t,v.width,v.height):tt?i.renderbufferStorageMultisample(i.RENDERBUFFER,he(v),_t,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,_t,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function de(R,v,tt){let st=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ct=n.get(v.depthTexture);if(ct.__renderTarget=v,(!ct.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),st){if(ct.__webglInit===void 0&&(ct.__webglInit=!0,v.depthTexture.addEventListener("dispose",z)),ct.__webglTexture===void 0){ct.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,ct.__webglTexture),we(i.TEXTURE_CUBE_MAP,v.depthTexture);let Dt=r.convert(v.depthTexture.format),se=r.convert(v.depthTexture.type),Ot;v.depthTexture.format===zi?Ot=i.DEPTH_COMPONENT24:v.depthTexture.format===Rs&&(Ot=i.DEPTH24_STENCIL8);for(let Ut=0;Ut<6;Ut++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0,Ot,v.width,v.height,0,Dt,se,null)}}else bt(v.depthTexture,0);let At=ct.__webglTexture,Ct=he(v),ut=st?i.TEXTURE_CUBE_MAP_POSITIVE_X+tt:i.TEXTURE_2D,_t=v.depthTexture.format===Rs?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===zi)ce(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,_t,ut,At,0,Ct):i.framebufferTexture2D(i.FRAMEBUFFER,_t,ut,At,0);else if(v.depthTexture.format===Rs)ce(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,_t,ut,At,0,Ct):i.framebufferTexture2D(i.FRAMEBUFFER,_t,ut,At,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function at(R){let v=n.get(R),tt=R.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==R.depthTexture){let st=R.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),st){let ct=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,st.removeEventListener("dispose",ct)};st.addEventListener("dispose",ct),v.__depthDisposeCallback=ct}v.__boundDepthTexture=st}if(R.depthTexture&&!v.__autoAllocateDepthBuffer)if(tt)for(let st=0;st<6;st++)de(v.__webglFramebuffer[st],R,st);else{let st=R.texture.mipmaps;st&&st.length>0?de(v.__webglFramebuffer[0],R,0):de(v.__webglFramebuffer,R,0)}else if(tt){v.__webglDepthbuffer=[];for(let st=0;st<6;st++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[st]),v.__webglDepthbuffer[st]===void 0)v.__webglDepthbuffer[st]=i.createRenderbuffer(),ue(v.__webglDepthbuffer[st],R,!1);else{let ct=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,At=v.__webglDepthbuffer[st];i.bindRenderbuffer(i.RENDERBUFFER,At),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,At)}}else{let st=R.texture.mipmaps;if(st&&st.length>0?e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),ue(v.__webglDepthbuffer,R,!1);else{let ct=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,At=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,At),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,At)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Mt(R,v,tt){let st=n.get(R);v!==void 0&&Vt(st.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),tt!==void 0&&at(R)}function H(R){let v=R.texture,tt=n.get(R),st=n.get(v);R.addEventListener("dispose",M);let ct=R.textures,At=R.isWebGLCubeRenderTarget===!0,Ct=ct.length>1;if(Ct||(st.__webglTexture===void 0&&(st.__webglTexture=i.createTexture()),st.__version=v.version,a.memory.textures++),At){tt.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(v.mipmaps&&v.mipmaps.length>0){tt.__webglFramebuffer[ut]=[];for(let _t=0;_t<v.mipmaps.length;_t++)tt.__webglFramebuffer[ut][_t]=i.createFramebuffer()}else tt.__webglFramebuffer[ut]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){tt.__webglFramebuffer=[];for(let ut=0;ut<v.mipmaps.length;ut++)tt.__webglFramebuffer[ut]=i.createFramebuffer()}else tt.__webglFramebuffer=i.createFramebuffer();if(Ct)for(let ut=0,_t=ct.length;ut<_t;ut++){let Dt=n.get(ct[ut]);Dt.__webglTexture===void 0&&(Dt.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&ce(R)===!1){tt.__webglMultisampledFramebuffer=i.createFramebuffer(),tt.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let ut=0;ut<ct.length;ut++){let _t=ct[ut];tt.__webglColorRenderbuffer[ut]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,tt.__webglColorRenderbuffer[ut]);let Dt=r.convert(_t.format,_t.colorSpace),se=r.convert(_t.type),Ot=T(_t.internalFormat,Dt,se,_t.normalized,_t.colorSpace,R.isXRRenderTarget===!0),Ut=he(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ut,Ot,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,tt.__webglColorRenderbuffer[ut])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(tt.__webglDepthRenderbuffer=i.createRenderbuffer(),ue(tt.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(At){e.bindTexture(i.TEXTURE_CUBE_MAP,st.__webglTexture),we(i.TEXTURE_CUBE_MAP,v);for(let ut=0;ut<6;ut++)if(v.mipmaps&&v.mipmaps.length>0)for(let _t=0;_t<v.mipmaps.length;_t++)Vt(tt.__webglFramebuffer[ut][_t],R,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,_t);else Vt(tt.__webglFramebuffer[ut],R,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);f(v)&&N(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ct){for(let ut=0,_t=ct.length;ut<_t;ut++){let Dt=ct[ut],se=n.get(Dt),Ot=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Ot=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Ot,se.__webglTexture),we(Ot,Dt),Vt(tt.__webglFramebuffer,R,Dt,i.COLOR_ATTACHMENT0+ut,Ot,0),f(Dt)&&N(Ot)}e.unbindTexture()}else{let ut=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ut=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ut,st.__webglTexture),we(ut,v),v.mipmaps&&v.mipmaps.length>0)for(let _t=0;_t<v.mipmaps.length;_t++)Vt(tt.__webglFramebuffer[_t],R,v,i.COLOR_ATTACHMENT0,ut,_t);else Vt(tt.__webglFramebuffer,R,v,i.COLOR_ATTACHMENT0,ut,0);f(v)&&N(ut),e.unbindTexture()}R.depthBuffer&&at(R)}function wt(R){let v=R.textures;for(let tt=0,st=v.length;tt<st;tt++){let ct=v[tt];if(f(ct)){let At=U(R),Ct=n.get(ct).__webglTexture;e.bindTexture(At,Ct),N(At),e.unbindTexture()}}}let It=[],le=[];function qt(R){if(R.samples>0){if(ce(R)===!1){let v=R.textures,tt=R.width,st=R.height,ct=i.COLOR_BUFFER_BIT,At=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ct=n.get(R),ut=v.length>1;if(ut)for(let Dt=0;Dt<v.length;Dt++)e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer);let _t=R.texture.mipmaps;_t&&_t.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let Dt=0;Dt<v.length;Dt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ct|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ct|=i.STENCIL_BUFFER_BIT)),ut){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ct.__webglColorRenderbuffer[Dt]);let se=n.get(v[Dt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,se,0)}i.blitFramebuffer(0,0,tt,st,0,0,tt,st,ct,i.NEAREST),l===!0&&(It.length=0,le.length=0,It.push(i.COLOR_ATTACHMENT0+Dt),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(It.push(At),le.push(At),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,le)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,It))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ut)for(let Dt=0;Dt<v.length;Dt++){e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.RENDERBUFFER,Ct.__webglColorRenderbuffer[Dt]);let se=n.get(v[Dt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.TEXTURE_2D,se,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let v=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function he(R){return Math.min(s.maxSamples,R.samples)}function ce(R){let v=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function W(R){let v=a.render.frame;h.get(R)!==v&&(h.set(R,v),R.update())}function Ce(R,v){let tt=R.colorSpace,st=R.format,ct=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||tt!==Aa&&tt!==cs&&(Le.getTransfer(tt)===Ge?(st!==gi||ct!==jn)&&fe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ge("WebGLTextures: Unsupported texture color space:",tt)),v}function Wt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=ot,this.resetTextureUnits=it,this.getTextureUnits=X,this.setTextureUnits=K,this.setTexture2D=bt,this.setTexture2DArray=ht,this.setTexture3D=xt,this.setTextureCube=gt,this.rebindTextures=Mt,this.setupRenderTarget=H,this.updateRenderTargetMipmap=wt,this.updateMultisampleRenderTarget=qt,this.setupDepthRenderbuffer=at,this.setupFrameBufferTexture=Vt,this.useMultisampledRTT=ce,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function SS(i,t){function e(n,s=cs){let r,a=Le.getTransfer(s);if(n===jn)return i.UNSIGNED_BYTE;if(n===hc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===uc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Nu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Uu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Lu)return i.BYTE;if(n===Du)return i.SHORT;if(n===Gr)return i.UNSIGNED_SHORT;if(n===cc)return i.INT;if(n===Ri)return i.UNSIGNED_INT;if(n===mi)return i.FLOAT;if(n===Ii)return i.HALF_FLOAT;if(n===Fu)return i.ALPHA;if(n===Ou)return i.RGB;if(n===gi)return i.RGBA;if(n===zi)return i.DEPTH_COMPONENT;if(n===Rs)return i.DEPTH_STENCIL;if(n===dc)return i.RED;if(n===fc)return i.RED_INTEGER;if(n===Is)return i.RG;if(n===pc)return i.RG_INTEGER;if(n===mc)return i.RGBA_INTEGER;if(n===ho||n===uo||n===fo||n===po)if(a===Ge)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ho)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ho)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===uo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===fo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===po)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===gc||n===_c||n===xc||n===vc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===gc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===_c)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===xc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===vc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===yc||n===Sc||n===bc||n===Mc||n===wc||n===mo||n===Ec)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===yc||n===Sc)return a===Ge?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===bc)return a===Ge?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Mc)return r.COMPRESSED_R11_EAC;if(n===wc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===mo)return r.COMPRESSED_RG11_EAC;if(n===Ec)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Tc||n===Ac||n===Cc||n===Rc||n===Ic||n===Pc||n===Lc||n===Dc||n===Nc||n===Uc||n===Fc||n===Oc||n===Bc||n===kc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Tc)return a===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ac)return a===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Cc)return a===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Rc)return a===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ic)return a===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Pc)return a===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Lc)return a===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Dc)return a===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Nc)return a===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Uc)return a===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Fc)return a===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Oc)return a===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Bc)return a===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===kc)return a===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===zc||n===Vc||n===Hc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===zc)return a===Ge?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Vc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Hc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Gc||n===Wc||n===go||n===$c)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Gc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Wc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===go)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===$c)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Wr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var bS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,MS=`
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

}`,ad=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new za(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Mn({vertexShader:bS,fragmentShader:MS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new bn(new Ja(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},od=class extends Vi{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,m=null,d=null,g=null,x=null,A=typeof XRWebGLBinding<"u",p=new ad,f={},N=e.getContextAttributes(),U=null,T=null,b=[],D=[],z=new Lt,M=null,L=null,k=new Fn;k.viewport=new We;let $=new Fn;$.viewport=new We;let nt=[k,$],it=new sc,X=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(dt){let mt=b[dt];return mt===void 0&&(mt=new Nr,b[dt]=mt),mt.getTargetRaySpace()},this.getControllerGrip=function(dt){let mt=b[dt];return mt===void 0&&(mt=new Nr,b[dt]=mt),mt.getGripSpace()},this.getHand=function(dt){let mt=b[dt];return mt===void 0&&(mt=new Nr,b[dt]=mt),mt.getHandSpace()};function ot(dt){let mt=D.indexOf(dt.inputSource);if(mt===-1)return;let Tt=b[mt];Tt!==void 0&&(Tt.update(dt.inputSource,dt.frame,c||a),Tt.dispatchEvent({type:dt.type,data:dt.inputSource}))}function lt(){s.removeEventListener("select",ot),s.removeEventListener("selectstart",ot),s.removeEventListener("selectend",ot),s.removeEventListener("squeeze",ot),s.removeEventListener("squeezestart",ot),s.removeEventListener("squeezeend",ot),s.removeEventListener("end",lt),s.removeEventListener("inputsourceschange",bt);for(let dt=0;dt<b.length;dt++){let mt=D[dt];mt!==null&&(D[dt]=null,b[dt].disconnect(mt))}X=null,K=null,p.reset();for(let dt in f)delete f[dt];if(t.setRenderTarget(U),g=null,d=null,m=null,s=null,T=null,Pe.stop(),n.isPresenting=!1,t.setPixelRatio(M),t.setSize(z.width,z.height,!1),L!==null){let dt=L.camera;dt.fov=L.fov,dt.zoom=L.zoom,dt.updateProjectionMatrix(),L=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(dt){r=dt,n.isPresenting===!0&&fe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(dt){o=dt,n.isPresenting===!0&&fe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(dt){c=dt},this.getBaseLayer=function(){return d!==null?d:g},this.getBinding=function(){return m===null&&A&&(m=new XRWebGLBinding(s,e)),m},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(dt){if(s=dt,s!==null){if(U=t.getRenderTarget(),s.addEventListener("select",ot),s.addEventListener("selectstart",ot),s.addEventListener("selectend",ot),s.addEventListener("squeeze",ot),s.addEventListener("squeezestart",ot),s.addEventListener("squeezeend",ot),s.addEventListener("end",lt),s.addEventListener("inputsourceschange",bt),N.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(z),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let Tt=null,ie=null,Vt=null;N.depth&&(Vt=N.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Tt=N.stencil?Rs:zi,ie=N.stencil?Wr:Ri);let ue={colorFormat:e.RGBA8,depthFormat:Vt,scaleFactor:r};m=this.getBinding(),d=m.createProjectionLayer(ue),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),T=new Jn(d.textureWidth,d.textureHeight,{format:gi,type:jn,depthTexture:new Ss(d.textureWidth,d.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,Tt),stencilBuffer:N.stencil,colorSpace:t.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Tt={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:r};g=new XRWebGLLayer(s,e,Tt),s.updateRenderState({baseLayer:g}),t.setPixelRatio(1),t.setSize(g.framebufferWidth,g.framebufferHeight,!1),T=new Jn(g.framebufferWidth,g.framebufferHeight,{format:gi,type:jn,colorSpace:t.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Pe.setContext(s),Pe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function bt(dt){for(let mt=0;mt<dt.removed.length;mt++){let Tt=dt.removed[mt],ie=D.indexOf(Tt);ie>=0&&(D[ie]=null,b[ie].disconnect(Tt))}for(let mt=0;mt<dt.added.length;mt++){let Tt=dt.added[mt],ie=D.indexOf(Tt);if(ie===-1){for(let ue=0;ue<b.length;ue++)if(ue>=D.length){D.push(Tt),ie=ue;break}else if(D[ue]===null){D[ue]=Tt,ie=ue;break}if(ie===-1)break}let Vt=b[ie];Vt&&Vt.connect(Tt)}}let ht=new G,xt=new G;function gt(dt,mt,Tt){ht.setFromMatrixPosition(mt.matrixWorld),xt.setFromMatrixPosition(Tt.matrixWorld);let ie=ht.distanceTo(xt),Vt=mt.projectionMatrix.elements,ue=Tt.projectionMatrix.elements,de=Vt[14]/(Vt[10]-1),at=Vt[14]/(Vt[10]+1),Mt=(Vt[9]+1)/Vt[5],H=(Vt[9]-1)/Vt[5],wt=(Vt[8]-1)/Vt[0],It=(ue[8]+1)/ue[0],le=de*wt,qt=de*It,he=ie/(-wt+It),ce=he*-wt;if(mt.matrixWorld.decompose(dt.position,dt.quaternion,dt.scale),dt.translateX(ce),dt.translateZ(he),dt.matrixWorld.compose(dt.position,dt.quaternion,dt.scale),dt.matrixWorldInverse.copy(dt.matrixWorld).invert(),Vt[10]===-1)dt.projectionMatrix.copy(mt.projectionMatrix),dt.projectionMatrixInverse.copy(mt.projectionMatrixInverse);else{let W=de+he,Ce=at+he,Wt=le-ce,R=qt+(ie-ce),v=Mt*at/Ce*W,tt=H*at/Ce*W;dt.projectionMatrix.makePerspective(Wt,R,v,tt,W,Ce),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert()}}function zt(dt,mt){mt===null?dt.matrixWorld.copy(dt.matrix):dt.matrixWorld.multiplyMatrices(mt.matrixWorld,dt.matrix),dt.matrixWorldInverse.copy(dt.matrixWorld).invert()}this.updateCamera=function(dt){if(s===null)return;let mt=dt.near,Tt=dt.far;p.texture!==null&&(p.depthNear>0&&(mt=p.depthNear),p.depthFar>0&&(Tt=p.depthFar)),it.near=$.near=k.near=mt,it.far=$.far=k.far=Tt,(X!==it.near||K!==it.far)&&(s.updateRenderState({depthNear:it.near,depthFar:it.far}),X=it.near,K=it.far),it.layers.mask=dt.layers.mask|6,k.layers.mask=it.layers.mask&-5,$.layers.mask=it.layers.mask&-3;let ie=dt.parent,Vt=it.cameras;zt(it,ie);for(let ue=0;ue<Vt.length;ue++)zt(Vt[ue],ie);Vt.length===2?gt(it,k,$):it.projectionMatrix.copy(k.projectionMatrix),L===null&&dt.isPerspectiveCamera&&(L={camera:dt,fov:dt.fov,zoom:dt.zoom}),Gt(dt,it,ie)};function Gt(dt,mt,Tt){Tt===null?dt.matrix.copy(mt.matrixWorld):(dt.matrix.copy(Tt.matrixWorld),dt.matrix.invert(),dt.matrix.multiply(mt.matrixWorld)),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.updateMatrixWorld(!0),dt.projectionMatrix.copy(mt.projectionMatrix),dt.projectionMatrixInverse.copy(mt.projectionMatrixInverse),dt.isPerspectiveCamera&&(dt.fov=Pr*2*Math.atan(1/dt.projectionMatrix.elements[5]),dt.zoom=1)}this.getCamera=function(){return it},this.getFoveation=function(){if(!(d===null&&g===null))return l},this.setFoveation=function(dt){l=dt,d!==null&&(d.fixedFoveation=dt),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=dt)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(it)},this.getCameraTexture=function(dt){return f[dt]};let Ue=null;function we(dt,mt){if(h=mt.getViewerPose(c||a),x=mt,h!==null){let Tt=h.views;g!==null&&(t.setRenderTargetFramebuffer(T,g.framebuffer),t.setRenderTarget(T));let ie=!1;Tt.length!==it.cameras.length&&(it.cameras.length=0,ie=!0);for(let at=0;at<Tt.length;at++){let Mt=Tt[at],H=null;if(g!==null)H=g.getViewport(Mt);else{let It=m.getViewSubImage(d,Mt);H=It.viewport,at===0&&(t.setRenderTargetTextures(T,It.colorTexture,It.depthStencilTexture),t.setRenderTarget(T))}let wt=nt[at];wt===void 0&&(wt=new Fn,wt.layers.enable(at),wt.viewport=new We,nt[at]=wt),wt.matrix.fromArray(Mt.transform.matrix),wt.matrix.decompose(wt.position,wt.quaternion,wt.scale),wt.projectionMatrix.fromArray(Mt.projectionMatrix),wt.projectionMatrixInverse.copy(wt.projectionMatrix).invert(),wt.viewport.set(H.x,H.y,H.width,H.height),at===0&&(it.matrix.copy(wt.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale)),ie===!0&&it.cameras.push(wt)}let Vt=s.enabledFeatures;if(Vt&&Vt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&A){m=n.getBinding();let at=m.getDepthInformation(Tt[0]);at&&at.isValid&&at.texture&&p.init(at,s.renderState)}if(Vt&&Vt.includes("camera-access")&&A){t.state.unbindTexture(),m=n.getBinding();for(let at=0;at<Tt.length;at++){let Mt=Tt[at].camera;if(Mt){let H=f[Mt];H||(H=new za,f[Mt]=H);let wt=m.getCameraImage(Mt);H.sourceTexture=wt}}}}for(let Tt=0;Tt<b.length;Tt++){let ie=D[Tt],Vt=b[Tt];ie!==null&&Vt!==void 0&&Vt.update(ie,mt,c||a)}Ue&&Ue(dt,mt),mt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:mt}),x=null}let Pe=new jp;Pe.setAnimationLoop(we),this.setAnimationLoop=function(dt){Ue=dt},this.dispose=function(){}}},wS=new Oe,sm=new be;sm.set(-1,0,0,0,1,0,0,0,1);function ES(i,t){function e(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,Gu(i)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function s(p,f,N,U,T){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(p,f):f.isMeshLambertMaterial?(r(p,f),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(p,f),m(p,f)):f.isMeshPhongMaterial?(r(p,f),h(p,f),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(p,f),d(p,f),f.isMeshPhysicalMaterial&&g(p,f,T)):f.isMeshMatcapMaterial?(r(p,f),x(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),A(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?l(p,f,N,U):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,e(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Wn&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,e(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Wn&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,e(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,e(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let N=t.get(f),U=N.envMap,T=N.envMapRotation;U&&(p.envMap.value=U,p.envMapRotation.value.setFromMatrix4(wS.makeRotationFromEuler(T)).transpose(),U.isCubeTexture&&U.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(sm),p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,N,U){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*N,p.scale.value=U*.5,f.map&&(p.map.value=f.map,e(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function h(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function m(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function g(p,f,N){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Wn&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.retroreflectivity>0&&(p.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=N.texture,p.transmissionSamplerSize.value.set(N.width,N.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,f){f.matcap&&(p.matcap.value=f.matcap)}function A(p,f){let N=t.get(f).light;p.referencePosition.value.setFromMatrixPosition(N.matrixWorld),p.nearDistance.value=N.shadow.camera.near,p.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function TS(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,b){let D=b.program;n.uniformBlockBinding(T,D)}function c(T,b){let D=s[T.id];D===void 0&&(p(T),D=h(T),s[T.id]=D,T.addEventListener("dispose",N));let z=b.program;n.updateUBOMapping(T,z);let M=t.render.frame;r[T.id]!==M&&(d(T),r[T.id]=M)}function h(T){let b=m();T.__bindingPointIndex=b;let D=i.createBuffer(),z=T.__size,M=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,D),i.bufferData(i.UNIFORM_BUFFER,z,M),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,D),D}function m(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return ge("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){let b=s[T.id],D=T.uniforms,z=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let M=0,L=D.length;M<L;M++){let k=D[M];if(Array.isArray(k))for(let $=0,nt=k.length;$<nt;$++)g(k[$],M,$,z);else g(k,M,0,z)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(T,b,D,z){if(A(T,b,D,z)===!0){let M=T.__offset,L=T.value;if(Array.isArray(L)){let k=0;for(let $=0;$<L.length;$++){let nt=L[$],it=f(nt);x(nt,T.__data,k),typeof nt!="number"&&typeof nt!="boolean"&&!nt.isMatrix3&&!ArrayBuffer.isView(nt)&&(k+=it.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(L,T.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,M,T.__data)}}function x(T,b,D){typeof T=="number"||typeof T=="boolean"?b[0]=T:T.isMatrix3?(b[0]=T.elements[0],b[1]=T.elements[1],b[2]=T.elements[2],b[3]=0,b[4]=T.elements[3],b[5]=T.elements[4],b[6]=T.elements[5],b[7]=0,b[8]=T.elements[6],b[9]=T.elements[7],b[10]=T.elements[8],b[11]=0):ArrayBuffer.isView(T)?b.set(new T.constructor(T.buffer,T.byteOffset,b.length)):T.toArray(b,D)}function A(T,b,D,z){let M=T.value,L=b+"_"+D;if(z[L]===void 0)return typeof M=="number"||typeof M=="boolean"?z[L]=M:ArrayBuffer.isView(M)?z[L]=M.slice():z[L]=M.clone(),!0;{let k=z[L];if(typeof M=="number"||typeof M=="boolean"){if(k!==M)return z[L]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(k.equals(M)===!1)return k.copy(M),!0}}return!1}function p(T){let b=T.uniforms,D=0,z=16;for(let L=0,k=b.length;L<k;L++){let $=Array.isArray(b[L])?b[L]:[b[L]];for(let nt=0,it=$.length;nt<it;nt++){let X=$[nt],K=Array.isArray(X.value)?X.value:[X.value];for(let ot=0,lt=K.length;ot<lt;ot++){let bt=K[ot],ht=f(bt),xt=D%z,gt=xt%ht.boundary,zt=xt+gt;D+=gt,zt!==0&&z-zt<ht.storage&&(D+=z-zt),X.__data=new Float32Array(ht.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=D,D+=ht.storage}}}let M=D%z;return M>0&&(D+=z-M),T.__size=D,T.__cache={},this}function f(T){let b={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(b.boundary=4,b.storage=4):T.isVector2?(b.boundary=8,b.storage=8):T.isVector3||T.isColor?(b.boundary=16,b.storage=12):T.isVector4?(b.boundary=16,b.storage=16):T.isMatrix3?(b.boundary=48,b.storage=48):T.isMatrix4?(b.boundary=64,b.storage=64):T.isTexture?fe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(T)?(b.boundary=16,b.storage=T.byteLength):fe("WebGLRenderer: Unsupported uniform value type.",T),b}function N(T){let b=T.target;b.removeEventListener("dispose",N);let D=a.indexOf(b.__bindingPointIndex);a.splice(D,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function U(){for(let T in s)i.deleteBuffer(s[T]);a=[],s={},r={}}return{bind:l,update:c,dispose:U}}var AS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Xi=null;function CS(){return Xi===null&&(Xi=new Ua(AS,16,16,Is,Ii),Xi.name="DFG_LUT",Xi.minFilter=Tn,Xi.magFilter=Tn,Xi.wrapS=Bi,Xi.wrapT=Bi,Xi.generateMipmaps=!1,Xi.needsUpdate=!0),Xi}var Qc=class{constructor(t={}){let{canvas:e=yp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:d=!1,outputBufferType:g=jn}=t;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=a;let A=g,p=new Set([mc,pc,fc]),f=new Set([jn,Ri,Gr,Wr,hc,uc]),N=new Uint32Array(4),U=new Int32Array(4),T=new G,b=null,D=null,z=[],M=[],L=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ci,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let k=this,$=!1,nt=null,it=null,X=null,K=null;this._outputColorSpace=ri;let ot=0,lt=0,bt=null,ht=-1,xt=null,gt=new We,zt=new We,Gt=null,Ue=new pe(0),we=0,Pe=e.width,dt=e.height,mt=1,Tt=null,ie=null,Vt=new We(0,0,Pe,dt),ue=new We(0,0,Pe,dt),de=!1,at=new Ur,Mt=!1,H=!1,wt=new Oe,It=new G,le=new We,qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},he=!1;function ce(){return bt===null?mt:1}let W=n;function Ce(w,V){return e.getContext(w,V)}let Wt,R,v,tt,st,ct,At,Ct,ut,_t,Dt,se,Ot,Ut,jt,re,_e,Y,Pt,pt,Nt,Rt,vt;try{let w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:m};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",ze,!1),e.addEventListener("webglcontextrestored",Fe,!1),e.addEventListener("webglcontextcreationerror",qn,!1),W===null){let V="webgl2";if(W=Ce(V,w),W===null)throw Ce(V)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Jt()}catch(w){throw e.removeEventListener("webglcontextlost",ze,!1),e.removeEventListener("webglcontextrestored",Fe,!1),e.removeEventListener("webglcontextcreationerror",qn,!1),ge("WebGLRenderer: "+w.message),w}function Jt(){Wt=new Uv(W),Wt.init(),Nt=new SS(W,Wt),R=new Ev(W,Wt,t,Nt),v=new vS(W,Wt),R.reversedDepthBuffer&&d&&v.buffers.depth.setReversed(!0),it=W.createFramebuffer(),X=W.createFramebuffer(),K=W.createFramebuffer(),tt=new Bv(W),st=new rS,ct=new yS(W,Wt,v,st,R,Nt,tt),At=new Nv(k),Ct=new z0(W),Rt=new Mv(W,Ct),ut=new Fv(W,Ct,tt,Rt),_t=new zv(W,ut,Ct,Rt,tt),Y=new kv(W,R,ct),jt=new Tv(st),Dt=new sS(k,At,Wt,R,Rt,jt),se=new ES(k,st),Ot=new oS,Ut=new fS(Wt),_e=new bv(k,At,v,_t,x,l),re=new xS(k,_t,R),vt=new TS(W,tt,R,v),Pt=new wv(W,Wt,tt),pt=new Ov(W,Wt,tt),tt.programs=Dt.programs,k.capabilities=R,k.extensions=Wt,k.properties=st,k.renderLists=Ot,k.shadowMap=re,k.state=v,k.info=tt}A!==jn&&(L=new Hv(A,e.width,e.height,o,s,r));let Qt=new od(k,W);this.xr=Qt,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){let w=Wt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=Wt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return mt},this.setPixelRatio=function(w){w!==void 0&&(mt=w,this.setSize(Pe,dt,!1))},this.getSize=function(w){return w.set(Pe,dt)},this.setSize=function(w,V,q=!0){if(Qt.isPresenting){fe("WebGLRenderer: Can't change size while VR device is presenting.");return}Pe=w,dt=V,e.width=Math.floor(w*mt),e.height=Math.floor(V*mt),q===!0&&(e.style.width=w+"px",e.style.height=V+"px"),L!==null&&L.setSize(e.width,e.height),this.setViewport(0,0,w,V)},this.getDrawingBufferSize=function(w){return w.set(Pe*mt,dt*mt).floor()},this.setDrawingBufferSize=function(w,V,q){Pe=w,dt=V,mt=q,e.width=Math.floor(w*q),e.height=Math.floor(V*q),this.setViewport(0,0,w,V)},this.setEffects=function(w){if(A===jn){ge("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let V=0;V<w.length;V++)if(w[V].isOutputPass===!0){fe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(gt)},this.getViewport=function(w){return w.copy(Vt)},this.setViewport=function(w,V,q,J){w.isVector4?Vt.set(w.x,w.y,w.z,w.w):Vt.set(w,V,q,J),v.viewport(gt.copy(Vt).multiplyScalar(mt).round())},this.getScissor=function(w){return w.copy(ue)},this.setScissor=function(w,V,q,J){w.isVector4?ue.set(w.x,w.y,w.z,w.w):ue.set(w,V,q,J),v.scissor(zt.copy(ue).multiplyScalar(mt).round())},this.getScissorTest=function(){return de},this.setScissorTest=function(w){v.setScissorTest(de=w)},this.setOpaqueSort=function(w){Tt=w},this.setTransparentSort=function(w){ie=w},this.getClearColor=function(w){return w.copy(_e.getClearColor())},this.setClearColor=function(){_e.setClearColor(...arguments)},this.getClearAlpha=function(){return _e.getClearAlpha()},this.setClearAlpha=function(){_e.setClearAlpha(...arguments)},this.clear=function(w=!0,V=!0,q=!0){let J=0;if(w){let j=!1;if(bt!==null){let kt=bt.texture.format;j=p.has(kt)}if(j){let kt=bt.texture.type,Xt=f.has(kt),Bt=_e.getClearColor(),te=_e.getClearAlpha(),Kt=Bt.r,Se=Bt.g,xe=Bt.b;Xt?(N[0]=Kt,N[1]=Se,N[2]=xe,N[3]=te,W.clearBufferuiv(W.COLOR,0,N)):(U[0]=Kt,U[1]=Se,U[2]=xe,U[3]=te,W.clearBufferiv(W.COLOR,0,U))}else J|=W.COLOR_BUFFER_BIT}V&&(J|=W.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(J|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J!==0&&W.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),nt=w},this.dispose=function(){e.removeEventListener("webglcontextlost",ze,!1),e.removeEventListener("webglcontextrestored",Fe,!1),e.removeEventListener("webglcontextcreationerror",qn,!1),_e.dispose(),Ot.dispose(),Ut.dispose(),st.dispose(),At.dispose(),_t.dispose(),Rt.dispose(),vt.dispose(),Dt.dispose(),Qt.dispose(),Qt.removeEventListener("sessionstart",ta),Qt.removeEventListener("sessionend",ea),_i.stop()};function ze(w){w.preventDefault(),Ia("WebGLRenderer: Context Lost."),$=!0}function Fe(){Ia("WebGLRenderer: Context Restored."),$=!1;let w=tt.autoReset,V=re.enabled,q=re.autoUpdate,J=re.needsUpdate,j=re.type;Jt(),tt.autoReset=w,re.enabled=V,re.autoUpdate=q,re.needsUpdate=J,re.type=j}function qn(w){ge("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Pn(w){let V=w.target;V.removeEventListener("dispose",Pn),xh(V)}function xh(w){Qr(w),st.remove(w)}function Qr(w){let V=st.get(w).programs;V!==void 0&&(V.forEach(function(q){Dt.releaseProgram(q)}),w.isShaderMaterial&&Dt.releaseShaderCache(w))}this.renderBufferDirect=function(w,V,q,J,j,kt){V===null&&(V=qt);let Xt=j.isMesh&&j.matrixWorld.determinantAffine()<0,Bt=sn(w,V,q,J,j);v.setMaterial(J,Xt);let te=q.index,Kt=1;if(J.wireframe===!0){if(te=ut.getWireframeAttribute(q),te===void 0)return;Kt=2}let Se=q.drawRange,xe=q.attributes.position,ee=Se.start*Kt,Be=(Se.start+Se.count)*Kt;kt!==null&&(ee=Math.max(ee,kt.start*Kt),Be=Math.min(Be,(kt.start+kt.count)*Kt)),te!==null?(ee=Math.max(ee,0),Be=Math.min(Be,te.count)):xe!=null&&(ee=Math.max(ee,0),Be=Math.min(Be,xe.count));let rn=Be-ee;if(rn<0||rn===1/0)return;Rt.setup(j,J,Bt,q,te);let Ze,$e=Pt;if(te!==null&&(Ze=Ct.get(te),$e=pt,$e.setIndex(Ze)),j.isMesh)J.wireframe===!0?(v.setLineWidth(J.wireframeLinewidth*ce()),$e.setMode(W.LINES)):$e.setMode(W.TRIANGLES);else if(j.isLine){let xn=J.linewidth;xn===void 0&&(xn=1),v.setLineWidth(xn*ce()),j.isLineSegments?$e.setMode(W.LINES):j.isLineLoop?$e.setMode(W.LINE_LOOP):$e.setMode(W.LINE_STRIP)}else j.isPoints?$e.setMode(W.POINTS):j.isSprite&&$e.setMode(W.TRIANGLES);if(j.isBatchedMesh)if(Wt.get("WEBGL_multi_draw"))$e.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{let xn=j._multiDrawStarts,$t=j._multiDrawCounts,ve=j._multiDrawCount,De=te?Ct.get(te).bytesPerElement:1,wn=st.get(J).currentProgram.getUniforms();for(let ci=0;ci<ve;ci++)wn.setValue(W,"_gl_DrawID",ci),$e.render(xn[ci]/De,$t[ci])}else if(j.isInstancedMesh)$e.renderInstances(ee,rn,j.count);else if(q.isInstancedBufferGeometry){let xn=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,$t=Math.min(q.instanceCount,xn);$e.renderInstances(ee,rn,$t)}else $e.render(ee,rn)};function Pi(w,V,q,J){nt!==null&&w.isNodeMaterial&&nt.setObject(J,w),Mt===!0&&jt.setState(w,q,!1),w.transparent===!0&&w.side===Wi&&w.forceSinglePass===!1?(w.side=Wn,w.needsUpdate=!0,lr(w,V,J),w.side=Ts,w.needsUpdate=!0,lr(w,V,J),w.side=Wi):lr(w,V,J)}this.compile=function(w,V,q=null){q===null&&(q=w),nt!==null&&nt.renderStart(w,V,q),D=Ut.get(q),D.init(V),M.push(D),q.traverseVisible(function(j){j.isLight&&j.layers.test(V.layers)&&(D.pushLight(j),j.castShadow&&D.pushShadow(j))}),w!==q&&w.traverseVisible(function(j){j.isLight&&j.layers.test(V.layers)&&(D.pushLight(j),j.castShadow&&D.pushShadow(j))}),D.setupLights(),nt!==null&&nt.updateLights(D.state.lightsArray),H=this.localClippingEnabled,Mt=jt.init(this.clippingPlanes,H),Mt===!0&&jt.setGlobalState(this.clippingPlanes,V),nt!==null&&re.render(D.state.shadowsArray,q,V);let J=new Set;return w.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;let kt=j.material;if(kt)if(Array.isArray(kt))for(let Xt=0;Xt<kt.length;Xt++){let Bt=kt[Xt];Pi(Bt,q,V,j),J.add(Bt)}else Pi(kt,q,V,j),J.add(kt)}),D=M.pop(),nt!==null&&nt.renderEnd(),J},this.compileAsync=function(w,V,q=null){let J=this.compile(w,V,q);return new Promise(j=>{function kt(){if(J.forEach(function(Xt){let te=st.get(Xt).currentProgram;(te===void 0||te.isReady())&&J.delete(Xt)}),J.size===0){j(w);return}setTimeout(kt,10)}Wt.get("KHR_parallel_shader_compile")!==null?kt():setTimeout(kt,10)})};let fs=null;function Ao(w){fs&&fs(w)}function ta(){_i.stop()}function ea(){_i.start()}let _i=new jp;_i.setAnimationLoop(Ao),typeof self<"u"&&_i.setContext(self),this.setAnimationLoop=function(w){fs=w,Qt.setAnimationLoop(w),w===null?_i.stop():_i.start()},Qt.addEventListener("sessionstart",ta),Qt.addEventListener("sessionend",ea),this.render=function(w,V){if(V!==void 0&&V.isCamera!==!0){ge("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if($===!0)return;nt!==null&&nt.renderStart(w,V);let q=Qt.enabled===!0&&Qt.isPresenting===!0,J=L!==null&&(bt===null||q)&&L.begin(k,bt);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Qt.enabled===!0&&Qt.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(Qt.cameraAutoUpdate===!0&&Qt.updateCamera(V),V=Qt.getCamera()),w.isScene===!0&&w.onBeforeRender(k,w,V,bt),D=Ut.get(w,M.length),D.init(V),D.state.textureUnits=ct.getTextureUnits(),M.push(D),wt.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),at.setFromProjectionMatrix(wt,Ei,V.reversedDepth),H=this.localClippingEnabled,Mt=jt.init(this.clippingPlanes,H),b=Ot.get(w,z.length),b.init(),z.push(b),Qt.enabled===!0&&Qt.isPresenting===!0){let Xt=k.xr.getDepthSensingMesh();Xt!==null&&or(Xt,V,-1/0,k.sortObjects)}or(w,V,0,k.sortObjects),b.finish(),nt!==null&&nt.updateLights(D.state.lightsArray),k.sortObjects===!0&&b.sort(Tt,ie),he=Qt.enabled===!1||Qt.isPresenting===!1||Qt.hasDepthSensing()===!1,he&&_e.addToRenderList(b,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Mt===!0&&jt.beginShadows();let j=D.state.shadowsArray;if(re.render(j,w,V),Mt===!0&&jt.endShadows(),(J&&L.hasRenderPass())===!1){let Xt=b.opaque,Bt=b.transmissive;if(D.setupLights(),V.isArrayCamera){let te=V.cameras;if(Bt.length>0)for(let Kt=0,Se=te.length;Kt<Se;Kt++){let xe=te[Kt];Ns(Xt,Bt,w,xe)}he&&_e.render(w);for(let Kt=0,Se=te.length;Kt<Se;Kt++){let xe=te[Kt];na(b,w,xe,xe.viewport)}}else Bt.length>0&&Ns(Xt,Bt,w,V),he&&_e.render(w),na(b,w,V)}bt!==null&&lt===0&&(ct.updateMultisampleRenderTarget(bt),ct.updateRenderTargetMipmap(bt)),J&&L.end(k),w.isScene===!0&&w.onAfterRender(k,w,V),Rt.resetDefaultState(),ht=-1,xt=null,M.pop(),M.length>0?(D=M[M.length-1],ct.setTextureUnits(D.state.textureUnits),Mt===!0&&jt.setGlobalState(k.clippingPlanes,D.state.camera)):D=null,z.pop(),z.length>0?b=z[z.length-1]:b=null,nt!==null&&nt.renderEnd()};function or(w,V,q,J){if(w.visible===!1)return;if(w.layers.test(V.layers)){if(w.isGroup)q=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(V);else if(w.isLightProbeGrid)D.pushLightProbeGrid(w);else if(w.isLight)D.pushLight(w),w.castShadow&&D.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||w.intersectsFrustum(at)){J&&le.setFromMatrixPosition(w.matrixWorld).applyMatrix4(wt);let Xt=_t.update(w),Bt=w.material;Bt.visible&&b.push(w,Xt,Bt,q,le.z,null,V)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||w.intersectsFrustum(at))){let Xt=_t.update(w),Bt=w.material;if(J&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),le.copy(w.boundingSphere.center)):(Xt.boundingSphere===null&&Xt.computeBoundingSphere(),le.copy(Xt.boundingSphere.center)),le.applyMatrix4(w.matrixWorld).applyMatrix4(wt)),Array.isArray(Bt)){let te=Xt.groups;for(let Kt=0,Se=te.length;Kt<Se;Kt++){let xe=te[Kt],ee=Bt[xe.materialIndex];ee&&ee.visible&&b.push(w,Xt,ee,q,le.z,xe,V)}}else Bt.visible&&b.push(w,Xt,Bt,q,le.z,null,V)}}let kt=w.children;for(let Xt=0,Bt=kt.length;Xt<Bt;Xt++)or(kt[Xt],V,q,J)}function na(w,V,q,J){let{opaque:j,transmissive:kt,transparent:Xt}=w;D.setupLightsView(q),Mt===!0&&jt.setGlobalState(k.clippingPlanes,q),J&&v.viewport(gt.copy(J)),j.length>0&&Us(j,V,q),kt.length>0&&Us(kt,V,q),Xt.length>0&&Us(Xt,V,q),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function Ns(w,V,q,J){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[J.id]===void 0){let ee=Wt.has("EXT_color_buffer_half_float")||Wt.has("EXT_color_buffer_float");D.state.transmissionRenderTarget[J.id]=new Jn(1,1,{generateMipmaps:!0,type:ee?Ii:jn,minFilter:Cs,samples:Math.max(4,R.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Le.workingColorSpace})}let kt=D.state.transmissionRenderTarget[J.id],Xt=J.viewport||gt;kt.setSize(Xt.z*k.transmissionResolutionScale,Xt.w*k.transmissionResolutionScale);let Bt=k.getRenderTarget(),te=k.getActiveCubeFace(),Kt=k.getActiveMipmapLevel();k.setRenderTarget(kt),k.getClearColor(Ue),we=k.getClearAlpha(),we<1&&k.setClearColor(16777215,.5),k.clear(),he&&_e.render(q);let Se=k.toneMapping;k.toneMapping=Ci;let xe=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),D.setupLightsView(J),Mt===!0&&jt.setGlobalState(k.clippingPlanes,J),Us(w,q,J),ct.updateMultisampleRenderTarget(kt),ct.updateRenderTargetMipmap(kt),Wt.has("WEBGL_multisampled_render_to_texture")===!1){let ee=!1;for(let Be=0,rn=V.length;Be<rn;Be++){let Ze=V[Be],{object:$e,geometry:xn,material:$t,group:ve}=Ze;if($t.side===Wi&&$e.layers.test(J.layers)){let De=$t.side;$t.side=Wn,$t.needsUpdate=!0,Co($e,q,J,xn,$t,ve),$t.side=De,$t.needsUpdate=!0,ee=!0}}ee===!0&&(ct.updateMultisampleRenderTarget(kt),ct.updateRenderTargetMipmap(kt))}k.setRenderTarget(Bt,te,Kt),k.setClearColor(Ue,we),xe!==void 0&&(J.viewport=xe),k.toneMapping=Se}function Us(w,V,q){let J=V.isScene===!0?V.overrideMaterial:null;for(let j=0,kt=w.length;j<kt;j++){let Xt=w[j],{object:Bt,geometry:te,group:Kt}=Xt,Se=Xt.material;Se.allowOverride===!0&&J!==null&&(Se=J),Bt.layers.test(q.layers)&&Co(Bt,V,q,te,Se,Kt)}}function Co(w,V,q,J,j,kt){nt!==null&&j.isNodeMaterial&&nt.setObject(w,j),w.onBeforeRender(k,V,q,J,j,kt),w.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),j.onBeforeRender(k,V,q,J,w,kt),j.transparent===!0&&j.side===Wi&&j.forceSinglePass===!1?(j.side=Wn,j.needsUpdate=!0,k.renderBufferDirect(q,V,J,j,w,kt),j.side=Ts,j.needsUpdate=!0,k.renderBufferDirect(q,V,J,j,w,kt),j.side=Wi):k.renderBufferDirect(q,V,J,j,w,kt),w.onAfterRender(k,V,q,J,j,kt)}function lr(w,V,q){V.isScene!==!0&&(V=qt);let J=st.get(w),j=D.state.lights,kt=D.state.shadowsArray,Xt=j.state.version,Bt=Dt.getParameters(w,j.state,kt,V,q,D.state.lightProbeGridArray),te=Dt.getProgramCacheKey(Bt),Kt=J.programs;J.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?V.environment:null,J.fog=V.fog;let Se=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;J.envMap=At.get(w.envMap||J.environment,Se),J.envMapRotation=J.environment!==null&&w.envMap===null?V.environmentRotation:w.envMapRotation,Kt===void 0&&(w.addEventListener("dispose",Pn),Kt=new Map,J.programs=Kt);let xe=Kt.get(te);if(xe!==void 0){if(J.currentProgram===xe&&J.lightsStateVersion===Xt)return Ro(w,Bt),xe}else Bt.uniforms=Dt.getUniforms(w),nt!==null&&w.isNodeMaterial&&nt.build(w,q,Bt),w.onBeforeCompile(Bt,k),xe=Dt.acquireProgram(Bt,te),Kt.set(te,xe),J.uniforms=Bt.uniforms;let ee=J.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(ee.clippingPlanes=jt.uniform),Ro(w,Bt),J.needsLights=Li(w),J.lightsStateVersion=Xt,J.needsLights&&(ee.ambientLightColor.value=j.state.ambient,ee.lightProbe.value=j.state.probe,ee.sunLights.value=j.state.sun,ee.sunLightShadows.value=j.state.sunShadow,ee.directionalLights.value=j.state.directional,ee.directionalLightShadows.value=j.state.directionalShadow,ee.spotLights.value=j.state.spot,ee.spotLightShadows.value=j.state.spotShadow,ee.rectAreaLights.value=j.state.rectArea,ee.ltc_1.value=j.state.rectAreaLTC1,ee.ltc_2.value=j.state.rectAreaLTC2,ee.pointLights.value=j.state.point,ee.pointLightShadows.value=j.state.pointShadow,ee.hemisphereLights.value=j.state.hemi,ee.sunShadowMatrix.value=j.state.sunShadowMatrix,ee.sunShadowCascade.value=j.state.sunShadowCascade,ee.directionalShadowMatrix.value=j.state.directionalShadowMatrix,ee.spotLightMatrix.value=j.state.spotLightMatrix,ee.spotLightMap.value=j.state.spotLightMap,ee.pointShadowMatrix.value=j.state.pointShadowMatrix),J.lightProbeGrid=D.state.lightProbeGridArray.length>0,J.currentProgram=xe,J.uniformsList=null,xe}function ia(w){if(w.uniformsList===null){let V=w.currentProgram.getUniforms();w.uniformsList=qr.seqWithValue(V.seq,w.uniforms)}return w.uniformsList}function Ro(w,V){let q=st.get(w);q.outputColorSpace=V.outputColorSpace,q.batching=V.batching,q.batchingColor=V.batchingColor,q.instancing=V.instancing,q.instancingColor=V.instancingColor,q.instancingMorph=V.instancingMorph,q.skinning=V.skinning,q.morphTargets=V.morphTargets,q.morphNormals=V.morphNormals,q.morphColors=V.morphColors,q.morphTargetsCount=V.morphTargetsCount,q.numClippingPlanes=V.numClippingPlanes,q.numIntersection=V.numClipIntersection,q.vertexAlphas=V.vertexAlphas,q.vertexTangents=V.vertexTangents,q.toneMapping=V.toneMapping}function ti(w,V){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;T.setFromMatrixPosition(V.matrixWorld);for(let q=0,J=w.length;q<J;q++){let j=w[q];if(j.texture!==null&&j.boundingBox.containsPoint(T))return j}return null}function sn(w,V,q,J,j){V.isScene!==!0&&(V=qt),ct.resetTextureUnits();let kt=V.fog,Xt=J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial?V.environment:null,Bt=bt===null?k.outputColorSpace:bt.isXRRenderTarget===!0?bt.texture.colorSpace:Le.workingColorSpace,te=J.isMeshStandardMaterial||J.isMeshLambertMaterial&&!J.envMap||J.isMeshPhongMaterial&&!J.envMap,Kt=At.get(J.envMap||Xt,te),Se=J.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,xe=!!q.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),ee=!!q.morphAttributes.position,Be=!!q.morphAttributes.normal,rn=!!q.morphAttributes.color,Ze=Ci;J.toneMapped&&(bt===null||bt.isXRRenderTarget===!0)&&(Ze=k.toneMapping);let $e=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,xn=$e!==void 0?$e.length:0,$t=st.get(J),ve=D.state.lights;if(Mt===!0&&(H===!0||w!==xt)){let ke=w===xt&&J.id===ht;jt.setState(J,w,ke)}let De=!1;J.version===$t.__version?($t.needsLights&&$t.lightsStateVersion!==ve.state.version||$t.outputColorSpace!==Bt||j.isBatchedMesh&&$t.batching===!1||!j.isBatchedMesh&&$t.batching===!0||j.isBatchedMesh&&$t.batchingColor===!0&&j._colorsTexture===null||j.isBatchedMesh&&$t.batchingColor===!1&&j._colorsTexture!==null||j.isInstancedMesh&&$t.instancing===!1||!j.isInstancedMesh&&$t.instancing===!0||j.isSkinnedMesh&&$t.skinning===!1||!j.isSkinnedMesh&&$t.skinning===!0||j.isInstancedMesh&&$t.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&$t.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&$t.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&$t.instancingMorph===!1&&j.morphTexture!==null||$t.envMap!==Kt||J.fog===!0&&$t.fog!==kt||$t.numClippingPlanes!==void 0&&($t.numClippingPlanes!==jt.numPlanes||$t.numIntersection!==jt.numIntersection)||$t.vertexAlphas!==Se||$t.vertexTangents!==xe||$t.morphTargets!==ee||$t.morphNormals!==Be||$t.morphColors!==rn||$t.toneMapping!==Ze||$t.morphTargetsCount!==xn||!!$t.lightProbeGrid!=D.state.lightProbeGridArray.length>0)&&(De=!0):(De=!0,$t.__version=J.version);let wn=$t.currentProgram;De===!0&&(wn=lr(J,V,j),nt&&J.isNodeMaterial&&nt.onUpdateProgram(J,wn,$t));let ci=!1,hi=!1,kn=!1,Re=wn.getUniforms(),Qe=$t.uniforms;if(v.useProgram(wn.program)&&(ci=!0,hi=!0,kn=!0),J.id!==ht&&(ht=J.id,hi=!0),$t.needsLights){let ke=ti(D.state.lightProbeGridArray,j);$t.lightProbeGrid!==ke&&($t.lightProbeGrid=ke,hi=!0)}if(ci||xt!==w){v.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Re.setValue(W,"projectionMatrix",w.projectionMatrix),Re.setValue(W,"viewMatrix",w.matrixWorldInverse);let Di=Re.map.cameraPosition;Di!==void 0&&Di.setValue(W,It.setFromMatrixPosition(w.matrixWorld)),R.logarithmicDepthBuffer&&Re.setValue(W,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Re.setValue(W,"isOrthographic",w.isOrthographicCamera===!0),xt!==w&&(xt=w,hi=!0,kn=!0)}if($t.needsLights&&(ve.state.sunShadowMap.length>0&&Re.setValue(W,"sunShadowMap",ve.state.sunShadowMap,ct),ve.state.directionalShadowMap.length>0&&Re.setValue(W,"directionalShadowMap",ve.state.directionalShadowMap,ct),ve.state.spotShadowMap.length>0&&Re.setValue(W,"spotShadowMap",ve.state.spotShadowMap,ct),ve.state.pointShadowMap.length>0&&Re.setValue(W,"pointShadowMap",ve.state.pointShadowMap,ct)),j.isSkinnedMesh){Re.setOptional(W,j,"bindMatrix"),Re.setOptional(W,j,"bindMatrixInverse");let ke=j.skeleton;ke&&(ke.boneTexture===null&&ke.computeBoneTexture(),Re.setValue(W,"boneTexture",ke.boneTexture,ct))}j.isBatchedMesh&&(Re.setOptional(W,j,"batchingTexture"),Re.setValue(W,"batchingTexture",j._matricesTexture,ct),Re.setOptional(W,j,"batchingIdTexture"),Re.setValue(W,"batchingIdTexture",j._indirectTexture,ct),Re.setOptional(W,j,"batchingColorTexture"),j._colorsTexture!==null&&Re.setValue(W,"batchingColorTexture",j._colorsTexture,ct));let Ln=q.morphAttributes;if((Ln.position!==void 0||Ln.normal!==void 0||Ln.color!==void 0)&&Y.update(j,q,wn),(hi||$t.receiveShadow!==j.receiveShadow)&&($t.receiveShadow=j.receiveShadow,Re.setValue(W,"receiveShadow",j.receiveShadow)),(J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial)&&J.envMap===null&&V.environment!==null&&(Qe.envMapIntensity.value=V.environmentIntensity),Qe.dfgLUT!==void 0&&(Qe.dfgLUT.value=CS()),hi){if(Re.setValue(W,"toneMappingExposure",k.toneMappingExposure),$t.needsLights&&Ke(Qe,kn),kt&&J.fog===!0&&se.refreshFogUniforms(Qe,kt),se.refreshMaterialUniforms(Qe,J,mt,dt,D.state.transmissionRenderTarget[w.id]),$t.needsLights&&$t.lightProbeGrid){let ke=$t.lightProbeGrid;Qe.probesSH.value=ke.texture,Qe.probesMin.value.copy(ke.boundingBox.min),Qe.probesMax.value.copy(ke.boundingBox.max),Qe.probesResolution.value.copy(ke.resolution)}qr.upload(W,ia($t),Qe,ct)}if(J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(qr.upload(W,ia($t),Qe,ct),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Re.setValue(W,"center",j.center),Re.setValue(W,"modelViewMatrix",j.modelViewMatrix),Re.setValue(W,"normalMatrix",j.normalMatrix),Re.setValue(W,"modelMatrix",j.matrixWorld),J.uniformsGroups!==void 0){let ke=J.uniformsGroups;for(let Di=0,ps=ke.length;Di<ps;Di++){let Io=ke[Di];vt.update(Io,wn),vt.bind(Io,wn)}}return wn}function Ke(w,V){w.ambientLightColor.needsUpdate=V,w.lightProbe.needsUpdate=V,w.sunLights.needsUpdate=V,w.sunLightShadows.needsUpdate=V,w.directionalLights.needsUpdate=V,w.directionalLightShadows.needsUpdate=V,w.pointLights.needsUpdate=V,w.pointLightShadows.needsUpdate=V,w.spotLights.needsUpdate=V,w.spotLightShadows.needsUpdate=V,w.rectAreaLights.needsUpdate=V,w.hemisphereLights.needsUpdate=V}function Li(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return ot},this.getActiveMipmapLevel=function(){return lt},this.getRenderTarget=function(){return bt},this.setRenderTargetTextures=function(w,V,q){let J=st.get(w);J.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),st.get(w.texture).__webglTexture=V,st.get(w.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:q,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,V){let q=st.get(w);q.__webglFramebuffer=V,q.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(w,V=0,q=0){bt=w,ot=V,lt=q;let J=null,j=!1,kt=!1;if(w){let Bt=st.get(w);if(Bt.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(W.FRAMEBUFFER,Bt.__webglFramebuffer),gt.copy(w.viewport),zt.copy(w.scissor),Gt=w.scissorTest,v.viewport(gt),v.scissor(zt),v.setScissorTest(Gt),ht=-1;return}else if(Bt.__webglFramebuffer===void 0)ct.setupRenderTarget(w);else if(Bt.__hasExternalTextures)ct.rebindTextures(w,st.get(w.texture).__webglTexture,st.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Se=w.depthTexture;if(Bt.__boundDepthTexture!==Se){if(Se!==null&&st.has(Se)&&(w.width!==Se.image.width||w.height!==Se.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ct.setupDepthRenderbuffer(w)}}let te=w.texture;(te.isData3DTexture||te.isDataArrayTexture||te.isCompressedArrayTexture)&&(kt=!0);let Kt=st.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Kt[V])?J=Kt[V][q]:J=Kt[V],j=!0):w.samples>0&&ct.useMultisampledRTT(w)===!1?J=st.get(w).__webglMultisampledFramebuffer:Array.isArray(Kt)?J=Kt[q]:J=Kt,gt.copy(w.viewport),zt.copy(w.scissor),Gt=w.scissorTest}else gt.copy(Vt).multiplyScalar(mt).floor(),zt.copy(ue).multiplyScalar(mt).floor(),Gt=de;if(q!==0&&(J=it),v.bindFramebuffer(W.FRAMEBUFFER,J)&&v.drawBuffers(w,J),v.viewport(gt),v.scissor(zt),v.setScissorTest(Gt),j){let Bt=st.get(w.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+V,Bt.__webglTexture,q)}else if(kt){let Bt=V;for(let te=0;te<w.textures.length;te++){let Kt=st.get(w.textures[te]);W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0+te,Kt.__webglTexture,q,Bt)}}else if(w!==null&&q!==0){let Bt=st.get(w.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Bt.__webglTexture,q)}ht=-1};function _n(w){let V=st.get(w);return(V.__readFormat!==w.format||V.__readType!==w.type)&&(V.__readFormat=w.format,V.__readType=w.type,V.__formatReadable=R.textureFormatReadable(w.format),V.__typeReadable=R.textureTypeReadable(w.type)),V}this.readRenderTargetPixels=function(w,V,q,J,j,kt,Xt,Bt=0){if(!(w&&w.isWebGLRenderTarget)){ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let te=st.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Xt!==void 0&&(te=te[Xt]),te){v.bindFramebuffer(W.FRAMEBUFFER,te);try{let Kt=w.textures[Bt],Se=Kt.format,xe=Kt.type;w.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Bt);let ee=_n(Kt);if(ee.__formatReadable===!1){ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ee.__typeReadable===!1){ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=w.width-J&&q>=0&&q<=w.height-j&&W.readPixels(V,q,J,j,Nt.convert(Se),Nt.convert(xe),kt)}finally{let Kt=bt!==null?st.get(bt).__webglFramebuffer:null;v.bindFramebuffer(W.FRAMEBUFFER,Kt)}}},this.readRenderTargetPixelsAsync=async function(w,V,q,J,j,kt,Xt,Bt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let te=st.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Xt!==void 0&&(te=te[Xt]),te)if(V>=0&&V<=w.width-J&&q>=0&&q<=w.height-j){v.bindFramebuffer(W.FRAMEBUFFER,te);let Kt=w.textures[Bt],Se=Kt.format,xe=Kt.type;w.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Bt);let ee=_n(Kt);if(ee.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ee.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Be=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,Be),W.bufferData(W.PIXEL_PACK_BUFFER,kt.byteLength,W.STREAM_READ),W.readPixels(V,q,J,j,Nt.convert(Se),Nt.convert(xe),0),W.bindBuffer(W.PIXEL_PACK_BUFFER,null);let rn=bt!==null?st.get(bt).__webglFramebuffer:null;v.bindFramebuffer(W.FRAMEBUFFER,rn);let Ze=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await bp(W,Ze,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,Be),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,kt),W.bindBuffer(W.PIXEL_PACK_BUFFER,null),W.deleteBuffer(Be),W.deleteSync(Ze),kt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,V=null,q=0){let J=Math.pow(2,-q),j=Math.floor(w.image.width*J),kt=Math.floor(w.image.height*J),Xt=V!==null?V.x:0,Bt=V!==null?V.y:0;ct.setTexture2D(w,0),W.copyTexSubImage2D(W.TEXTURE_2D,q,0,0,Xt,Bt,j,kt),v.unbindTexture()},this.copyTextureToTexture=function(w,V,q=null,J=null,j=0,kt=0){let Xt,Bt,te,Kt,Se,xe,ee,Be,rn,Ze=w.isCompressedTexture?w.mipmaps[kt]:w.image;if(q!==null)Xt=q.max.x-q.min.x,Bt=q.max.y-q.min.y,te=q.isBox3?q.max.z-q.min.z:1,Kt=q.min.x,Se=q.min.y,xe=q.isBox3?q.min.z:0;else{let Qe=Math.pow(2,-j);Xt=Math.floor(Ze.width*Qe),Bt=Math.floor(Ze.height*Qe),w.isDataArrayTexture?te=Ze.depth:w.isData3DTexture?te=Math.floor(Ze.depth*Qe):te=1,Kt=0,Se=0,xe=0}J!==null?(ee=J.x,Be=J.y,rn=J.z):(ee=0,Be=0,rn=0);let $e=Nt.convert(V.format),xn=Nt.convert(V.type),$t;V.isData3DTexture?(ct.setTexture3D(V,0),$t=W.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(ct.setTexture2DArray(V,0),$t=W.TEXTURE_2D_ARRAY):(ct.setTexture2D(V,0),$t=W.TEXTURE_2D),v.activeTexture(W.TEXTURE0),v.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,V.flipY),v.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),v.pixelStorei(W.UNPACK_ALIGNMENT,V.unpackAlignment);let ve=v.getParameter(W.UNPACK_ROW_LENGTH),De=v.getParameter(W.UNPACK_IMAGE_HEIGHT),wn=v.getParameter(W.UNPACK_SKIP_PIXELS),ci=v.getParameter(W.UNPACK_SKIP_ROWS),hi=v.getParameter(W.UNPACK_SKIP_IMAGES);v.pixelStorei(W.UNPACK_ROW_LENGTH,Ze.width),v.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Ze.height),v.pixelStorei(W.UNPACK_SKIP_PIXELS,Kt),v.pixelStorei(W.UNPACK_SKIP_ROWS,Se),v.pixelStorei(W.UNPACK_SKIP_IMAGES,xe);let kn=w.isDataArrayTexture||w.isData3DTexture,Re=V.isDataArrayTexture||V.isData3DTexture;if(w.isDepthTexture){let Qe=st.get(w),Ln=st.get(V),ke=st.get(Qe.__renderTarget),Di=st.get(Ln.__renderTarget);v.bindFramebuffer(W.READ_FRAMEBUFFER,ke.__webglFramebuffer),v.bindFramebuffer(W.DRAW_FRAMEBUFFER,Di.__webglFramebuffer);for(let ps=0;ps<te;ps++)kn&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,st.get(w).__webglTexture,j,xe+ps),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,st.get(V).__webglTexture,kt,rn+ps)),W.blitFramebuffer(Kt,Se,Xt,Bt,ee,Be,Xt,Bt,W.DEPTH_BUFFER_BIT,W.NEAREST);v.bindFramebuffer(W.READ_FRAMEBUFFER,null),v.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if(j!==0||w.isRenderTargetTexture||st.has(w)){let Qe=st.get(w),Ln=st.get(V);v.bindFramebuffer(W.READ_FRAMEBUFFER,X),v.bindFramebuffer(W.DRAW_FRAMEBUFFER,K);for(let ke=0;ke<te;ke++)kn?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Qe.__webglTexture,j,xe+ke):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Qe.__webglTexture,j),Re?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Ln.__webglTexture,kt,rn+ke):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Ln.__webglTexture,kt),j!==0?W.blitFramebuffer(Kt,Se,Xt,Bt,ee,Be,Xt,Bt,W.COLOR_BUFFER_BIT,W.NEAREST):Re?W.copyTexSubImage3D($t,kt,ee,Be,rn+ke,Kt,Se,Xt,Bt):W.copyTexSubImage2D($t,kt,ee,Be,Kt,Se,Xt,Bt);v.bindFramebuffer(W.READ_FRAMEBUFFER,null),v.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else Re?w.isDataTexture||w.isData3DTexture?W.texSubImage3D($t,kt,ee,Be,rn,Xt,Bt,te,$e,xn,Ze.data):V.isCompressedArrayTexture?W.compressedTexSubImage3D($t,kt,ee,Be,rn,Xt,Bt,te,$e,Ze.data):W.texSubImage3D($t,kt,ee,Be,rn,Xt,Bt,te,$e,xn,Ze):w.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,kt,ee,Be,Xt,Bt,$e,xn,Ze.data):w.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,kt,ee,Be,Ze.width,Ze.height,$e,Ze.data):W.texSubImage2D(W.TEXTURE_2D,kt,ee,Be,Xt,Bt,$e,xn,Ze);v.pixelStorei(W.UNPACK_ROW_LENGTH,ve),v.pixelStorei(W.UNPACK_IMAGE_HEIGHT,De),v.pixelStorei(W.UNPACK_SKIP_PIXELS,wn),v.pixelStorei(W.UNPACK_SKIP_ROWS,ci),v.pixelStorei(W.UNPACK_SKIP_IMAGES,hi),kt===0&&V.generateMipmaps&&W.generateMipmap($t),v.unbindTexture()},this.initRenderTarget=function(w){st.get(w).__webglFramebuffer===void 0&&ct.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?ct.setTextureCube(w,0):w.isData3DTexture?ct.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?ct.setTexture2DArray(w,0):ct.setTexture2D(w,0),v.unbindTexture()},this.resetState=function(){ot=0,lt=0,bt=null,v.reset(),Rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Le._getDrawingBufferColorSpace(t),e.unpackColorSpace=Le._getUnpackColorSpace()}};var am=new Gn,nh=new G,hs=class extends so{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new on(t,3)),this.setAttribute("uv",new on(e,2))}applyMatrix4(t){let e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new Es(e,6,1);return this.setAttribute("instanceStart",new Ai(n,3,0)),this.setAttribute("instanceEnd",new Ai(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new Es(e,6,1);return this.setAttribute("instanceColorStart",new Ai(n,3,0)),this.setAttribute("instanceColorEnd",new Ai(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new Ka(t.geometry)),this}fromLineSegments(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gn);let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),am.setFromBufferAttribute(e),this.boundingBox.union(am))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kn),this.boundingBox===null&&this.computeBoundingBox();let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)nh.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(nh)),nh.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(nh));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}};Ft.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Lt},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};$n.line={uniforms:_o.merge([Ft.common,Ft.fog,Ft.line]),vertexShader:`
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
		`};var qi=class extends Mn{constructor(t){super({type:"LineMaterial",uniforms:_o.clone($n.line.uniforms),vertexShader:$n.line.vertexShader,fragmentShader:$n.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0!==this.worldUnits&&(this.needsUpdate=!0),t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var ld=new We,om=new G,lm=new G,An=new We,Cn=new We,Yi=new We,cd=new G,hd=new Oe,Rn=new ao,cm=new G,ih=new Gn,sh=new Kn,Zi=new We,Ji,tr;function hm(i,t,e){return Zi.set(0,0,-t,1).applyMatrix4(i.projectionMatrix),Zi.multiplyScalar(1/Zi.w),Zi.x=tr/e.width,Zi.y=tr/e.height,Zi.applyMatrix4(i.projectionMatrixInverse),Zi.multiplyScalar(1/Zi.w),Math.abs(Math.max(Zi.x,Zi.y))}function RS(i,t){let e=i.matrixWorld,n=i.geometry,s=n.attributes.instanceStart,r=n.attributes.instanceEnd,a=Math.min(n.instanceCount,s.count);for(let o=0,l=a;o<l;o++){Rn.start.fromBufferAttribute(s,o),Rn.end.fromBufferAttribute(r,o),Rn.applyMatrix4(e);let c=new G,h=new G;Ji.distanceSqToSegment(Rn.start,Rn.end,h,c),h.distanceTo(c)<tr*.5&&t.push({point:h,pointOnLine:c,distance:Ji.origin.distanceTo(h),object:i,face:null,faceIndex:o,uv:null,uv1:null})}}function IS(i,t,e){let n=t.projectionMatrix,r=i.material.resolution,a=i.matrixWorld,o=i.geometry,l=o.attributes.instanceStart,c=o.attributes.instanceEnd,h=Math.min(o.instanceCount,l.count),m=-t.near;Ji.at(1,Yi),Yi.w=1,Yi.applyMatrix4(t.matrixWorldInverse),Yi.applyMatrix4(n),Yi.multiplyScalar(1/Yi.w),Yi.x*=r.x/2,Yi.y*=r.y/2,Yi.z=0,cd.copy(Yi),hd.multiplyMatrices(t.matrixWorldInverse,a);for(let d=0,g=h;d<g;d++){if(An.fromBufferAttribute(l,d),Cn.fromBufferAttribute(c,d),An.w=1,Cn.w=1,An.applyMatrix4(hd),Cn.applyMatrix4(hd),An.z>m&&Cn.z>m)continue;if(An.z>m){let U=An.z-Cn.z,T=(An.z-m)/U;An.lerp(Cn,T)}else if(Cn.z>m){let U=Cn.z-An.z,T=(Cn.z-m)/U;Cn.lerp(An,T)}An.applyMatrix4(n),Cn.applyMatrix4(n),An.multiplyScalar(1/An.w),Cn.multiplyScalar(1/Cn.w),An.x*=r.x/2,An.y*=r.y/2,Cn.x*=r.x/2,Cn.y*=r.y/2,Rn.start.copy(An),Rn.start.z=0,Rn.end.copy(Cn),Rn.end.z=0;let A=Rn.closestPointToPointParameter(cd,!0);Rn.at(A,cm);let p=Vu.lerp(An.z,Cn.z,A),f=p>=-1&&p<=1,N=cd.distanceTo(cm)<tr*.5;if(f&&N){Rn.start.fromBufferAttribute(l,d),Rn.end.fromBufferAttribute(c,d),Rn.start.applyMatrix4(a),Rn.end.applyMatrix4(a);let U=new G,T=new G;Ji.distanceSqToSegment(Rn.start,Rn.end,T,U),e.push({point:T,pointOnLine:U,distance:Ji.origin.distanceTo(T),object:i,face:null,faceIndex:d,uv:null,uv1:null})}}}var er=class extends bn{constructor(t=new hs,e=new qi({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,s=new Float32Array(2*e.count);for(let a=0,o=0,l=e.count;a<l;a++,o+=2)om.fromBufferAttribute(e,a),lm.fromBufferAttribute(n,a),s[o]=o===0?0:s[o-1],s[o+1]=s[o]+om.distanceTo(lm);let r=new Es(s,2,1);return t.setAttribute("instanceDistanceStart",new Ai(r,1,0)),t.setAttribute("instanceDistanceEnd",new Ai(r,1,1)),this}raycast(t,e){let n=this.material.worldUnits,s=t.camera;if(s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.'),n===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;let r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;Ji=t.ray;let a=this.matrixWorld,o=this.geometry,l=this.material;tr=l.linewidth+r,o.boundingSphere===null&&o.computeBoundingSphere(),sh.copy(o.boundingSphere).applyMatrix4(a);let c;if(n)c=tr*.5;else{let m=Math.max(s.near,sh.distanceToPoint(Ji.origin));c=hm(s,m,l.resolution)}if(sh.radius+=c,Ji.intersectsSphere(sh)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),ih.copy(o.boundingBox).applyMatrix4(a);let h;if(n)h=tr*.5;else{let m=Math.max(s.near,ih.distanceToPoint(Ji.origin));h=hm(s,m,l.resolution)}ih.expandByScalar(h),Ji.intersectsBox(ih)!==!1&&(n?RS(this,e):IS(this,s,e))}onBeforeRender(t){let e=this.material.uniforms;e&&e.resolution&&(t.getViewport(ld),this.material.uniforms.resolution.value.set(ld.z,ld.w))}};function um(i){let t=window.__ROD__,{scene:e,camera:n,goal:s,cur:r,invalidate:a,K:o,CX:l,CY:c,mcs:h,q:m,list:d,clamp:g,norm:x,munis:A}=i,p=u=>document.querySelector(u),f=u=>String(u).replace(/[<>&"]/g,_=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[_]),N=(u,_)=>[(u-l)*o,(_-c)*o],U=.06,T=t.segs.map(u=>{let _=[],S=[0];for(let E=0;E<u.length;E+=2){let C=N(u[E],u[E+1]);_.length&&S.push(S[S.length-1]+Math.hypot(C[0]-_[_.length-1][0],C[1]-_[_.length-1][1])),_.push(C)}return{p:_,c:S,L:S[S.length-1]}}),b=t.stops.map(([u,_,S,E])=>({n:u,id:E,w:N(_,S),fams:new Set})),D=t.routes.map(([u,_,S])=>({s:u,l:_,c:S})),z=new Map;(t.bus||[]).forEach(([u,_,S,E])=>{let C={days:new Set(u),name:_,stops:S,times:E};S.forEach((I,F)=>{if(F<S.length-1){let O=z.get(I)||[];O.push([C,F]),z.set(I,O)}})});function M(u,_,S){let E=de(),C=t.days.indexOf(E.ymd),I=[];for(let[F,O]of z.get(u)||[]){if(!F.days.has(C))continue;let B=F.times[O];if(B<_||B>S)continue;let Z=F.stops[F.stops.length-1];I.push({sm:B,est:B,dl:0,fam:F.name,dest:b[Z].n,destId:b[Z].id,plat:"",cancel:!1,obs:"",live:!1,num:"",tid:"",tr:null,bus:!0,src:"bus",bstops:F.stops.slice(O)})}return I}let L=(u,_)=>{let S=u.match(/^R([A-Z]*)(\d*)(.*)$/),E=_.match(/^R([A-Z]*)(\d*)(.*)$/);return(S[1]||"").localeCompare(E[1]||"")||(+S[2]||0)-(+E[2]||0)||S[3].localeCompare(E[3])},k=[...new Set(D.map(u=>u.s))].sort(L),$={};D.forEach(u=>{$[u.s]||($[u.s]=u.c)});let nt=t.pats.map(([u,_,S])=>({stops:u,t:_,segs:S})),it=t.trips.map(([u,_,S,E,C],I)=>({day:u,pat:nt[_],fam:D[S].s,c:D[S].c,t0:E,num:C,tid:t.tids[I]})),X={};k.forEach(u=>X[u]=new Set),it.forEach(u=>{u.pat.segs.forEach(_=>X[u.fam].add(_)),u.pat.stops.forEach(_=>b[_].fams.add(u.fam))});let K=t.days.map((u,_)=>it.filter(S=>S.day===_)),ot=new Map(it.map(u=>[u.tid,u])),lt=[124.87404143965449,479.9901289885639,124.62688710863031,249.99562739146893,486.739003764725,248.0364802782304,2037.1344308355726],bt=Math.PI/180,ht=3.922*bt,xt=-39.705*bt;function gt(u,_){let S=u*bt+ht,E=_*bt,C=Math.cos(xt),I=Math.sin(xt),F=Math.cos(E),O=Math.cos(S)*F,B=Math.sin(S)*F,Z=Math.sin(E),et=Math.atan2(B,O*C-Z*I),y=Math.asin(Z*C+O*I),P=Math.sqrt(2/(1+Math.cos(et)*Math.cos(y))),Q=P*Math.cos(y)*Math.sin(et),rt=P*Math.sin(y),[Et,Zt,ne,yt,St,ae,me]=lt;return N((Zt+Et*Q-St)*me,(ae-(yt-ne*rt))*me)}let zt=new Map(b.map((u,_)=>[u.id,_]));function Gt(u){if(u.g)return u.g;let _=[],S=[],E=[0],C=0;return u.segs.forEach((I,F)=>{let O=T[I];O.p.forEach((B,Z)=>{F&&!Z||(_.push(B),S.push(C+O.c[Z]))}),C+=O.L,E.push(C)}),u.g={pts:_,cum:S,stopD:E}}function Ue(u,_,S,E){let C=1e18,I=0;for(let F=0;F+1<u.pts.length;F++){if(u.cum[F+1]<S||u.cum[F]>E)continue;let O=u.pts[F],B=u.pts[F+1],Z=B[0]-O[0],et=B[1]-O[1],y=Z*Z+et*et||1e-9,P=Math.max(0,Math.min(1,((_[0]-O[0])*Z+(_[1]-O[1])*et)/y)),Q=O[0]+Z*P-_[0],rt=O[1]+et*P-_[1],Et=Q*Q+rt*rt;Et<C&&(C=Et,I=u.cum[F]+P*(u.cum[F+1]-u.cum[F]))}return{d:I,err:Math.sqrt(C)}}function we(u,_){let S=0,E=u.cum.length-1;if(_<=0)return u.pts[0];if(_>=u.cum[E])return u.pts[E];for(;E-S>1;){let O=S+E>>1;u.cum[O]<=_?S=O:E=O}let C=(_-u.cum[S])/(u.cum[E]-u.cum[S]||1),I=u.pts[S],F=u.pts[E];return[I[0]+(F[0]-I[0])*C,I[1]+(F[1]-I[1])*C]}let Pe=u=>`${u.slice(6,8)}/${u.slice(4,6)}`,dt=new Intl.DateTimeFormat("es-ES",{timeZone:"Europe/Madrid",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hourCycle:"h23"});function mt(u){let _={};return dt.formatToParts(u).forEach(S=>_[S.type]=S.value),{ymd:_.year+_.month+_.day,min:+_.hour*60+ +_.minute+ +_.second/60}}let Tt=0,ie=null,Vt=0,ue=0;function de(){let u=mt(new Date);if(Tt===0&&ie==null)return{...u,live:!0};let _=ie==null?u.min:Vt+(Tt?(performance.now()-ue)/6e4*Tt:0);return{ymd:u.ymd,min:_,live:!1}}let at=u=>(u=(Math.round(u)%1440+1440)%1440,String(Math.floor(u/60)).padStart(2,"0")+":"+String(u%60).padStart(2,"0")),Mt="https://rodalies.erathegameoftime.com",H={url:"",delays:new Map,tu:new Map,vp:new Map,alerts:[],ok:0,okVP:0,err:"",feedTs:0};try{let u=new URLSearchParams(location.search).get("rt");u&&localStorage.setItem("rod_rt",u);let _=localStorage.getItem("rod_rt");_&&/jhmuyo\.workers\.dev/.test(_)&&(_=Mt,localStorage.setItem("rod_rt",_)),H.url=_||Mt}catch{H.url=Mt}let wt=(u,_)=>fetch(u+_,{cache:"no-store"}).then(S=>{if(!S.ok)throw new Error("HTTP "+S.status);return S.json()}),It=u=>/^51/.test(u||"");async function le(){if(!H.url){he();return}let u=H.url.replace(/\/+$/,"");(!H.repFail||Date.now()-H.repFail>15*6e4)&&wt(u,"/reports.json").then(B=>{B&&Array.isArray(B.items)?(H.rep=B.items,H.repSkew=(B.now||Date.now())-Date.now(),B.tipos&&(H.tipos=B.tipos),H.repOk=Date.now(),H.repFail=0):H.repFail=Date.now()}).catch(()=>{H.repFail=Date.now(),H.repOk=0});let _=!H.adifAt||Date.now()-H.adifAt>11e4,[S,E,C,I,F]=await Promise.allSettled([wt(u,"/trip_updates.json"),wt(u,"/vehicle_positions.json"),wt(u,"/alerts.json"),wt(u,"/notices.json"),_?wt(u,"/adif.json"):Promise.reject(0)]);if(F.status==="fulfilled"&&F.value&&F.value.ok?(H.adif=F.value,H.adifAt=Date.now()):_&&(H.adifAt=Date.now()-6e4),S.status==="fulfilled"){let B=new Map,Z=new Map;for(let et of S.value.entity||[]){let y=et.tripUpdate;if(!y||!y.trip||!It(y.trip.tripId))continue;let P=y.trip.tripId,Q=(y.stopTimeUpdate||[])[0],rt=y.delay;rt==null&&Q&&(rt=(Q.arrival||Q.departure||{}).delay),y.trip.scheduleRelationship==="CANCELED"&&(rt="X"),rt!=null&&B.set(P,rt),Z.set(P,{next:Q?{sid:Q.stopId,t:+((Q.arrival||Q.departure||{}).time||0)}:null})}H.delays=B,H.tu=Z,H.ok=Date.now(),H.feedTs=+((S.value.header||{}).timestamp||0)*1e3,H.err=""}else H.err=S.reason&&S.reason.message||"sin respuesta";if(E.status==="fulfilled"){let B=new Map,Z=Date.now()/1e3;for(let et of E.value.entity||[]){let y=et.vehicle;if(!y||!y.trip||!It(y.trip.tripId)||!y.position)continue;let P=y.vehicle&&y.vehicle.label||"",Q=P.match(/PLATF\.\(([^)]+)\)/),rt=H.vp.get(y.trip.tripId),Et={tid:y.trip.tripId,w:gt(+y.position.longitude,+y.position.latitude),st:y.currentStatus||"",sid:y.stopId||"",ts:+y.timestamp||Z,label:P,plat:Q?Q[1]:"",fam:(P.split("-")[0]||"").trim(),num:y.vehicle&&y.vehicle.id||""};Et.disp=rt?rt.disp:null,B.set(Et.tid,Et)}H.vp=B,H.okVP=Date.now()}let O=[];if(I.status==="fulfilled"&&Array.isArray(I.value.included)){H.okNotices=Date.now();for(let B of I.value.included){let Z=new Set((B.lines||[]).map(P=>P.id).filter(P=>$[P])),et=P=>((P||{}).es||(P||{}).ca||"").trim(),y=[et(B.description),et(B.title)].sort((P,Q)=>Q.length-P.length)[0];y&&O.push({id:"N"+B.externalId,fams:Z,stops:new Set,txt:y,when:(B.date||"")+"T"+(B.time||""),src:"Rodalies",core:B.core||""})}}if(C.status==="fulfilled"){let B=+((C.value.header||{}).timestamp||0);if(H.alertsTs=B,Date.now()/1e3-B<6*3600)for(let Z of C.value.entity||[]){let et=Z.alert;if(!et)continue;let y=new Set,P=new Set;for(let Zt of et.informedEntity||[])(Zt.routeId||"").startsWith("51")&&y.add(Zt.routeId.replace(/^51T\d+/,"")),Zt.stopId&&zt.has(Zt.stopId)&&P.add(zt.get(Zt.stopId));if(!y.size&&!P.size)continue;let Q=(et.descriptionText||et.headerText||{translation:[]}).translation||[],rt=((Q.find(Zt=>Zt.language==="es")||Q[0]||{}).text||"").trim(),Et=+((et.activePeriod||[])[0]||{}).start||0;O.some(Zt=>Zt.txt===rt)||O.push({id:Z.id,fams:y,stops:P,txt:rt,when:Et?new Date(Et*1e3).toISOString().slice(0,19):"",src:"Renfe"})}}if(H.adif&&Date.now()-H.adifAt<15*6e4)for(let[B,Z]of(H.adif.items||[]).entries()){let et=(Z.t?Z.t+". ":"")+Z.txt,y=new Set,P=new Set,Q=x(et);for(let rt of et.matchAll(/\b(R\d{1,2}[NS]?|R3a|RG1|RL\d|RT\d)\b/g))$[rt[1]]&&y.add(rt[1]);b.forEach((rt,Et)=>{rt.fams.size&&rt.n.length>4&&Q.includes(x(rt.n))&&(P.add(Et),y.size||rt.fams.forEach(Zt=>y.add(Zt)))}),O.some(rt=>rt.txt===et)||O.push({id:"A"+B,fams:y,stops:P,txt:et,when:H.adif.upd||"",src:"Adif",lvl:Z.lvl})}if(I.status==="fulfilled"||C.status==="fulfilled"||H.adif){H.alerts=O.sort((B,Z)=>Z.when>B.when?1:-1);try{ig()}catch{}}he(),bh(),w=0,a()}let qt=()=>H.okVP&&Date.now()-H.okVP<9e4;function he(){let u=p("#rtst"),_=p("#mode");if(_){let E=!!qt()&&de().live;_.classList.toggle("on",E),_.classList.toggle("pre",!E),_.textContent=E?"En directo":ce.cur?"Repaso real":"Previsi\xF3n",_.classList.toggle("past",!!ce.cur),_.title=ce.cur?`Retrasos reales de la foto de las ${ce.cur.sn.t} (se toma una cada 15 min)`:""}if(!u)return;H.url?H.err?u.textContent="No se pudo conectar con el puente ("+H.err+"). Se usa el horario.":qt()?u.innerHTML=`Conectado \xB7 ${H.vp.size} trenes con posici\xF3n real y ${H.delays.size} con retraso \xB7 actualizado a las ${new Date(H.okVP).toLocaleTimeString("es-ES",{hour:"2-digit",minute:"2-digit",second:"2-digit"})}`:u.textContent="Conectando\u2026":u.textContent=H.err||"Sin puente: trenes seg\xFAn horario oficial.";let S=p("#rturl");S&&S._shown!==H.url&&(S.value=H.url,S._shown=H.url)}p("#rtsave").onclick=()=>{let u=p("#rturl").value.trim().replace(/\/+(alerts|trip_updates|vehicle_positions)\.json$/,"").replace(/\/+$/,"");if(u&&!/^https?:\/\//.test(u)&&(u="https://"+u),!u){H.err="pega la direcci\xF3n de tu puente",he();return}H.url=u;try{localStorage.setItem("rod_rt",u)}catch{}H.ok=0,H.err="",he(),le()},p("#rtoff").onclick=()=>{H.url=Mt;try{localStorage.removeItem("rod_rt")}catch{}h._h="",le()},setInterval(le,2e4),setTimeout(le,50);let ce={snap:null,key:""};function W(){let u=de();if(u.live||!ve.hoy||!ve.hoy.snaps||Tt&&ie==null)return null;let _=mt(new Date).min;if(u.min>_+1)return null;let S=null;for(let E of ve.hoy.snaps){if(!E.d)continue;let C=Bd(E.t);C<=u.min+1&&(!S||C>S.m)&&(S={m:C,sn:E})}return S&&u.min-S.m<=25?S:null}let Ce=u=>{{let C=vh(u.num);if(C&&C.cx&&de().live)return"X"}let _=ce.cur;if(_){if(_.sn.x&&_.sn.x.includes(u.tid))return"X";let C=_.sn.d[u.tid];return C??0}if(!qt())return null;let S=H.delays.get(u.tid),E=H.vp.get(u.tid);return S==="X"?S:E&&E.pre&&E.preDl>=1?Math.max(typeof S=="number"?S:0,E.preDl*60):S??null},Wt=new Set(k);try{let u=JSON.parse(localStorage.getItem("rod_lines")||"null");Array.isArray(u)&&u.some(_=>k.includes(_))&&(Wt.clear(),u.forEach(_=>k.includes(_)&&Wt.add(_)))}catch{}let R=new hs,v=new hs,tt=new qi({vertexColors:!0,linewidth:3.2,depthTest:!1,transparent:!0}),st=new qi({color:16777215,linewidth:6,depthTest:!1,transparent:!0,opacity:.9}),ct=new er(R,tt),At=new er(v,st);At.renderOrder=20,ct.renderOrder=21,ct.frustumCulled=At.frustumCulled=!1,e.add(At,ct);function Ct(u){let _=u[0]/o+l,S=u[1]/o+c;for(let E of A){if(E._bb===void 0){let I=1e9,F=1e9,O=-1e9,B=-1e9;for(let Z of E.rings||[]){let et=Z[0]||[];for(let y=0;y<et.length;y+=2)et[y]<I&&(I=et[y]),et[y]>O&&(O=et[y]),et[y+1]<F&&(F=et[y+1]),et[y+1]>B&&(B=et[y+1])}E._bb=[I,F,O,B]}let C=E._bb;if(!(_<C[0]||_>C[2]||S<C[1]||S>C[3]))for(let I of E.rings||[]){let F=I[0]||[],O=!1;for(let B=0,Z=F.length,et=Z-2;B<Z;et=B,B+=2){let y=F[B+1],P=F[et+1];y>S!=P>S&&_<(F[et]-F[B])*(S-y)/(P-y)+F[B]&&(O=!O)}if(O)return!0}}return!1}let ut=!1;function _t(){ut||!A.length||(ut=!0,b.forEach(u=>{u.ext=!Ct(u.w)}),T.forEach(u=>{u.ext=!Ct(u.p[0])&&!Ct(u.p[u.p.length-1])&&!Ct(u.p[u.p.length>>1])}))}let Dt=()=>{let u=new Set(Wt.size<=2?Wt:[]);try{q&&q.fam&&u.add(q.fam)}catch{}return u},se="";function Ot(){_t();let u=[],_=[],S=new Set,E=new pe,C=new pe("#d2d0d0"),I=Dt();se=[...I].join();for(let F of k)if(Wt.has(F))for(let O of X[F]){if(S.has(O))continue;S.add(O);let B=T[O].p;E.set($[F]),T[O].ext&&!I.has(F)&&E.lerp(C,.55);for(let Z=0;Z+1<B.length;Z++)u.push(B[Z][0],B[Z][1],U,B[Z+1][0],B[Z+1][1],U),_.push(E.r,E.g,E.b,E.r,E.g,E.b)}u.length||(u.push(0,0,-50,0,0,-50),_.push(0,0,0,0,0,0)),R.setPositions(u),R.setColors(_),v.setPositions(u),a()}Ot();let Ut=u=>new Mn({uniforms:{dpr:{value:Math.min(devicePixelRatio||1,2)},border:{value:new pe(u)}},vertexShader:"attribute float size; attribute vec3 fill; attribute float bw; varying vec3 vF; varying float vS; varying float vB; uniform float dpr; void main(){ vF=fill; vS=size*dpr; vB=bw*dpr; gl_PointSize=vS; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"uniform vec3 border; varying vec3 vF; varying float vS; varying float vB; void main(){ float r=length(gl_PointCoord*2.0-1.0)*vS*0.5; float R=vS*0.5; if(r>R) discard; float a=1.0-smoothstep(R-1.2,R,r); vec3 c = r>R-vB ? border : vF; gl_FragColor=vec4(c,a); }",transparent:!0,depthTest:!1}),jt=new ln,re=b.length,_e=new Float32Array(re*3),Y=new Float32Array(re*3),Pt=new Float32Array(re),pt=new Float32Array(re);b.forEach((u,_)=>{_e[_*3]=u.w[0],_e[_*3+1]=u.w[1],_e[_*3+2]=U,Y.set([1,1,1],_*3),Pt[_]=6,pt[_]=1.6}),jt.setAttribute("position",new qe(_e,3)),jt.setAttribute("fill",new qe(Y,3)),jt.setAttribute("size",new qe(Pt,1)),jt.setAttribute("bw",new qe(pt,1));let Nt=new qs(jt,Ut("#1d2330"));Nt.renderOrder=22,Nt.frustumCulled=!1,e.add(Nt);function Rt(){let u=r.dist<45,_=Dt();b.forEach((S,E)=>{let C=[...S.fams].some(F=>Wt.has(F)),I=S.ext&&![...S.fams].some(F=>_.has(F))&&E!==J;Pt[E]=C?E===J?13:I?3:u?8:5:0,pt[E]=E===J?3:1.6}),jt.attributes.size.needsUpdate=!0,jt.attributes.bw.needsUpdate=!0}let vt=600,Jt=new ln,Qt=new Float32Array(vt*3),ze=new Float32Array(vt*3),Fe=new Float32Array(vt),qn=new Float32Array(vt);Jt.setAttribute("position",new qe(Qt,3)),Jt.setAttribute("fill",new qe(ze,3)),Jt.setAttribute("size",new qe(Fe,1)),Jt.setAttribute("bw",new qe(qn,1));let Pn=new Float32Array(vt);Jt.setAttribute("ang",new qe(Pn,1));let xh=new Mn({uniforms:{dpr:{value:Math.min(devicePixelRatio||1,2)},border:{value:new pe("#ffffff")}},vertexShader:"attribute float size; attribute vec3 fill; attribute float bw; attribute float ang; varying vec3 vF; varying float vS; varying float vB; varying float vA; uniform float dpr; void main(){ vF=fill; vS=size*dpr; vB=bw*dpr; vA=ang; gl_PointSize=vS; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"uniform vec3 border; varying vec3 vF; varying float vS; varying float vB; varying float vA; void main(){ vec2 p=gl_PointCoord*2.0-1.0; float r=length(p)*vS*0.5; float R=vS*0.5; if(r>R) discard; float a=1.0-smoothstep(R-1.2,R,r); vec3 c = r>R-vB ? border : vF; if(vA<50.0){ vec2 d=vec2(sin(vA),-cos(vA)); vec2 n=vec2(cos(vA),sin(vA)); float qy=-dot(p,d); float qx=dot(p,n); float w=(qy+0.66)/0.98*0.48; if(qy>-0.66 && qy<0.32 && abs(qx)<w) c=vec3(1.0); } else if(vA>70.0 && vA<80.0){ if(abs(p.y)<0.36 && abs(abs(p.x)-0.2)<0.1) c=vec3(1.0); } else if(vA>80.0 && vA<90.0){ if((abs(p.x)<0.11 && p.y>-0.5 && p.y<0.16) || length(p-vec2(0.0,0.38))<0.12) c=vec3(1.0); } gl_FragColor=vec4(c,a); }",transparent:!0,depthTest:!1}),Qr=new qs(Jt,xh);Qr.renderOrder=24,Qr.frustumCulled=!1,e.add(Qr);let Pi=new ln,fs=new Float32Array(vt*3),Ao=new Float32Array(vt*3),ta=new Float32Array(vt),ea=new Float32Array(vt);Pi.setAttribute("position",new qe(fs,3)),Pi.setAttribute("fill",new qe(Ao,3)),Pi.setAttribute("size",new qe(ta,1)),Pi.setAttribute("bw",new qe(ea,1));let _i=new qs(Pi,Ut("#ffffff"));_i.renderOrder=23,_i.frustumCulled=!1,e.add(_i);function or(u,_){let S=T[u],E=_*S.L,C=0,I=S.c.length-1;for(;I-C>1;){let et=C+I>>1;S.c[et]<=E?C=et:I=et}let F=S.c[I]-S.c[C]||1,O=(E-S.c[C])/F,B=S.p[C],Z=S.p[I];return[B[0]+(Z[0]-B[0])*O,B[1]+(Z[1]-B[1])*O]}let na=u=>u*u*(3-2*u)*.35+u*.65;function Ns(u,_){let S=u.pat.t,E=u.pat.stops.length,C=S[2*E-2];if(_<S[1]-2||_>C+1)return null;if(_<=S[1])return{w:b[u.pat.stops[0]].w,at:0,next:0,moving:!1};for(let I=0;I<E-1;I++){let F=S[2*I+1],O=S[2*I+2],B=S[2*I+3];if(_<=O){let Z=O>F?(_-F)/(O-F):1;return{w:or(u.pat.segs[I],na(g(Z,0,1))),at:-1,next:I+1,prev:I,moving:!0}}if(_<=B)return{w:b[u.pat.stops[I+1]].w,at:I+1,next:I+1,moving:!1}}return{w:b[u.pat.stops[E-1]].w,at:E-1,next:E-1,moving:!1}}function Us(u){let _=t.days.indexOf(u.ymd),S=[];if(_<0)return{k:_,out:S};let E=(C,I)=>{for(let F of C){if(!Wt.has(F.fam))continue;let O=Ce(F);if(O==="X")continue;let B=(O||0)/60,Z=u.min+I-F.t0-B;if(Z<-2||Z>F.pat.t[F.pat.t.length-2]+1)continue;let et=Ns(F,Z);et&&S.push({tr:F,p:et,rel:Z,dl:B,live:O!=null})}};return E(K[_],0),_>0&&E(K[_-1],1440),{k:_,out:S}}function Co(u,_,S,E){let C=u.pat.stops[0],I=_.dep0,F=null,O=(Z,et)=>{for(let y of Z||[]){let P=y.pat.stops,Q=P.length;if(P[Q-1]!==C||y===u)continue;let rt=y.t0+y.pat.t[2*(Q-1)]-et;if(rt>I+5||rt<I-120)continue;let Et=Gt(y.pat),Zt=Ue(Et,_.w,-1,1e9);if(Zt.err>.6)continue;let ne=Et.stopD,yt=y.pat.t,St=ne.findIndex(Ee=>Ee>Zt.d);St<0&&(St=Q-1);let ae=St===0?yt[1]:yt[2*St-1]+(ne[St]>ne[St-1]?(Zt.d-ne[St-1])/(ne[St]-ne[St-1]):1)*(yt[2*St]-yt[2*St-1]),me=S-(y.t0+ae-et);me<-5||me>120||(!F||Math.abs(me)<Math.abs(F.prevDl))&&(F={prevTr:y,dPrev:Zt.d,prevDl:me,arrO:rt+Math.max(0,me)})}};if(O(K[E],0),E>0&&O(K[E-1],1440),!F)return{prevTr:null,preDl:0};let B=Math.max(I,F.arrO+3);return{...F,depEst:B,preDl:Math.max(0,B-I)}}function lr(u,_,S){let E=u.pat.t,C=_.length;if(!(S>=0))return S<0?_[0]:null;for(let I=0;I<C;I++)if(S<=E[2*I+1]){if(S>=E[2*I]||I===0)return _[I];let F=E[2*I-1],O=E[2*I];return _[I-1]+(_[I]-_[I-1])*(O>F?(S-F)/(O-F):1)}return _[C-1]}let ia=performance.now();function Ro(){let u=[],_=Date.now()/1e3,S=performance.now(),E=Math.min(1,(S-ia)/1e3);ia=S;for(let C of H.vp.values()){let I=ot.get(C.tid),F=I?I.fam:C.fam;if(F&&$[F]&&!Wt.has(F))continue;let O=H.delays.get(C.tid),B=typeof O=="number"?O/60:0,Z=Math.max(0,_-C.ts);C.mvTs!==C.ts&&((!C.mvW||Math.hypot(C.w[0]-C.mvW[0],C.w[1]-C.mvW[1])>.025)&&(C.mvW=C.w,C.mvAt=C.ts),C.mvTs=C.ts),C.still=C.ts-(C.mvAt||C.ts);let et=C.w,y=-1;if(I){let Q=Gt(I.pat),rt=Q.stopD;if(C.dObs==null||C.obsAt!==C.ts){let St=Ue(Q,C.w,-1,1e9);C.dObs=St.d,C.err=St.err,C.obsAt=C.ts}let Et=de(),Zt=t.days.indexOf(Et.ymd),ne=I.day===Zt-1?1440:0,yt=I.t0+I.pat.t[1]-ne;if(C.pre=Et.min+B<yt-1&&(C.dObs>rt[0]+.35||C.err>.6)&&!(C.st==="STOPPED_AT"&&C.sid===b[I.pat.stops[0]].id),C.dep0=yt,C.pre){if(C.atStop=-1,C.next=0,y=0,C.disp=null,C.prevAt!==C.ts&&(C.prevAt=C.ts,Object.assign(C,Co(I,C,Et.min,Zt))),C.prevTr){let St=Gt(C.prevTr.pat);et=we(St,C.dPrev)}}else if(C.err<=.6){let St=rt.findIndex(Ee=>Ee>C.dObs+.08);St<0&&(St=rt.length-1);let ae=rt.reduce((Ee,dn,Ne)=>Math.abs(dn-C.dObs)<Math.abs(rt[Ee]-C.dObs)?Ne:Ee,0);C.atStop=Math.abs(rt[ae]-C.dObs)<.16?ae:-1,C.next=St,y=St;let me=C.dObs;if(C.st==="STOPPED_AT"&&C.atStop>=0)me=rt[C.atStop];else if(St>0){let Ee=(I.pat.t[2*St]-I.pat.t[2*St-1])*60,dn=Ee>0?(rt[St]-rt[St-1])/Ee:0,Ne=de(),oe=t.days.indexOf(Ne.ymd),Fi=I.day===oe-1?1440:0,hr=lr(I,rt,Ne.min+Fi-I.t0-B),tn=C.dObs+dn*Math.min(Z,60);hr!=null&&(tn=Math.min(tn,Math.max(C.dObs,hr))),me=Math.max(C.dObs,Math.min(rt[St]-.03,tn))}C.disp==null||Math.abs(C.disp-me)>1.2?C.disp=me:me>C.disp&&(C.disp+=(me-C.disp)*Math.min(1,E*1.5)),et=we(Q,C.disp)}else if(C.err>2){let St=de(),ae=t.days.indexOf(St.ymd),me=I.day===ae-1?1440:0,Ee=Ns(I,St.min+me-I.t0-B);Ee&&(et=Ee.w,C.est=!0,y=Ee.next),C.atStop=-1,C.next=Ee?Ee.next:-1}else C.atStop=-1,C.next=-1}let P=C.pre?"":C.st==="STOPPED_AT"&&C.atStop>=0||C.atStop>=0&&C.still>30?"st":C.still>=90?"via":"";u.push({tr:I,v:C,w:et,stop:P,p:{w:et},fam:F||"?",c:I?I.c:$[F]||"#6b7385",dl:B,live:!0,real:!0,idx:y,age:Z,cancel:O==="X"})}return u}let ti=new Map,sn=!1,Ke=!1,Li="",_n=[],w=0,V=null,q=null,J=-1,j=!1,kt=0,Xt="";function Bt(u){let _=Tt>0||qt()&&ie==null||!!q,S=_?50:250;if(u-w<S)return!1;w=u,[...Dt()].join()!==se&&(Ot(),Rt());{let y=W(),P=y?y.sn.t:"";ce.cur=y,P!==ce.key&&(ce.key=P,he()),!y&&!de().live&&!ve.at&&wn()}let E=de(),C=qt()&&E.live,I=C?{k:t.days.indexOf(E.ymd),out:Ro()}:Us(E);_n=I.out;let F=new pe,O=0,B=0;for(let y of _n){if(O>=vt)break;Qt[O*3]=y.p.w[0],Qt[O*3+1]=y.p.w[1],Qt[O*3+2]=U+.02;let P=null;if(y.real&&y.v.pre&&y.v.prevTr)P=we(Gt(y.v.prevTr.pat),y.v.dPrev+.35);else if(y.real&&y.tr&&!y.v.pre&&y.v.err<=.6&&y.v.disp!=null&&!(y.v.st==="STOPPED_AT"&&y.v.atStop>=0))P=we(Gt(y.tr.pat),y.v.disp+.35);else if(!y.real&&y.p.moving){let ne=y.tr.pat.t,yt=y.p.prev,St=ne[2*yt+1],ae=ne[2*yt+2],me=ae>St?(y.rel-St)/(ae-St):1;P=or(y.tr.pat.segs[yt],Math.min(1,na(g(me,0,1))+.04))}let Q=y.real?!!y.stop:!y.p.moving;if(y.broke=Id(y),y.broke)Pn[O]=85;else if(Q)Pn[O]=75;else if(P){let ne=Po(y.p.w),yt=Po(P),St=yt[0]-ne[0],ae=yt[1]-ne[1];Pn[O]=Math.hypot(St,ae)>.05?Math.atan2(St,-ae):99}else Pn[O]=99;F.set(y.c||y.tr.c),ze[O*3]=F.r,ze[O*3+1]=F.g,ze[O*3+2]=F.b;let rt=y.tr?y.tr===q:q&&q.vtid===y.v.tid;Fe[O]=rt?22:r.dist<45?17:14,qn[O]=rt?3.5:2.2;let Et=y.real&&y.stop==="via"||!!y.broke,Zt=y.cancel||y.broke?[.86,.15,.15]:y.dl>10?[.86,.15,.15]:y.dl>5?[.92,.48,.05]:y.dl>=1?[.98,.8,.08]:[.09,.64,.29];(y.live&&y.dl>=5||rt||Et)&&(fs[B*3]=y.p.w[0],fs[B*3+1]=y.p.w[1],fs[B*3+2]=U+.01,Ao.set(rt?Zt:Et?[.86,.15,.15]:[.98,.45,.09],B*3),ta[B]=Fe[O]+(rt?16+5*Math.sin(u/220):Et?10+3*Math.sin(u/400):8),ea[B]=rt?2:3,B++),O++}if(Jt.setDrawRange(0,O),Pi.setDrawRange(0,B),["position","fill","size","bw"].forEach(y=>{Jt.attributes[y].needsUpdate=!0,Pi.attributes[y].needsUpdate=!0}),Jt.attributes.ang.needsUpdate=!0,V){let y=_n.find(P=>P.tr===V);if(y){let P=0,Q=innerHeight,rt=h.style.display!=="none"&&!h.classList.contains("min")?h.getBoundingClientRect():null,Et=p("#rc").getBoundingClientRect();innerWidth<=640&&(rt&&(P=rt.bottom),Q=Math.min(Q,Et.top));let Zt=P+(Q-P)/2,ne=Zt-innerHeight/2,yt=2*s.dist*Math.tan(17.5*Math.PI/180)/innerHeight;s.tx=y.p.w[0]-Math.sin(r.yaw)*ne*yt,s.ty=y.p.w[1]+Math.cos(r.yaw)*ne*yt}else qt()&&de().live&&(V=null)}let Z=at(Math.floor(E.min+1e-6));Z!==Xt&&(Xt=Z,p("#ctime").textContent=Z),p("#ntr").textContent=String(_n.length),p("#ntrl").textContent=C?"trenes de Rodalies con posici\xF3n real":"trenes previstos seg\xFAn el horario";{let y=Wt.size<k.length?[...Wt].sort(L).join(", "):"",P=p("#ccount"),Q=ce.cur?`\u23EA ${_n.length} trenes con los retrasos reales de las ${ce.cur.sn.t} \xB7 ${Object.values(ce.cur.sn.d).filter(rt=>rt>=60).length} iban con retraso`:!E.live&&E.min<mt(new Date).min-1&&!Tt?`\u23EA Hora pasada seg\xFAn horario${ve.hoy&&ve.hoy.snaps&&ve.hoy.snaps.some(rt=>rt.d)?` \xB7 hay retrasos reales desde las ${ve.hoy.snaps.find(rt=>rt.d).t}`:" \xB7 a\xFAn no hay fotos con retrasos reales de hoy"}`:`\u{1F686} ${_n.length} ${C?"trenes con posici\xF3n real":"trenes previstos"}${y?` <small>\xB7 ${f(y)}</small>`:""}`;P&&P._t!==Q&&(P.innerHTML=Q,P._t=Q)}let et=new Date;if(p("#cdate").textContent=E.live?"hora actual":Tt?"simulaci\xF3n \xD7"+Tt:di?"en pausa":"hora elegida",I.k<0?p("#src").innerHTML=`<b style="color:#c2410c">Sin horarios para hoy.</b> Los datos guardados van del ${Pe(t.days[0])} al ${Pe(t.days[t.days.length-1])}: actualiza la app.`:C?p("#src").textContent=`En directo \xB7 posiciones de Renfe de hace ${Math.round(Math.max(0,Date.now()/1e3-Math.max(...[...H.vp.values()].map(y=>y.ts),0)))} s`:p("#src").innerHTML='<b style="color:#c2410c">No es tiempo real:</b> '+(H.url?"sin conexi\xF3n con el puente, ":"conecta el puente para ver los trenes reales; ")+"posiciones calculadas con el horario",E.live){let y=Math.round(E.min),P=p("#tsl");document.activeElement!==P&&(P.value=y<240?y+1440:y)}{let y=q?String(q.num||q.vtid||""):"";y!==Bt._sk&&(Bt._sk=y,en(!0))}return en(),u-kt>3e3&&(q||J>=0||j||Ke||Li)&&(kt=u,Ve()),he(),!0}let te=-1,Kt=(()=>{try{return localStorage.getItem("rod_mun")==="1"}catch{return!1}})(),Se=[],xe=document.createElement("button");xe.type="button",xe.id="mbtn",xe.title="Ver los nombres de los municipios",xe.innerHTML="\u{1F3D8}\uFE0F<span>Municipios</span>",xe.onclick=()=>{Kt=!Kt;try{localStorage.setItem("rod_mun",Kt?"1":"")}catch{}xe.classList.toggle("on",Kt),a(),$t()},xe.classList.toggle("on",Kt),document.body.appendChild(xe);let ee=A.slice().sort((u,_)=>_.pop-u.pop);function Be(u){if(u._a)return u._a;let _=null,S=0;for(let E of u.rings||[]){let C=E[0];if(!C)continue;let I=0,F=0,O=0;for(let B=0,Z=C.length;B<Z;B+=2){let et=C[B],y=C[B+1],P=C[(B+2)%Z],Q=C[(B+3)%Z],rt=et*Q-P*y;I+=rt,F+=(et+P)*rt,O+=(y+Q)*rt}Math.abs(I)>S&&(S=Math.abs(I),_=[F/(3*I),O/(3*I)])}return u._a=_?[(_[0]-l)*o,(_[1]-c)*o]:[u.cx,u.cy]}let rn=u=>u>=1e5?1:u>=2e4?2:u>=5e3?3:4,Ze=[0,7.6,6.7,6,5.4],$e=[0,17,15,13,12],xn=u=>u.replace(/^(.*), (el|la|les|els|los|las)$/i,"$2 $1").replace(/^(.*), l'$/i,"l'$1");function $t(){let u=s.tilt<.06&&r.tilt<.08;xe.classList.toggle("show",u);let _=0;if(Kt&&u){let S=[...document.querySelectorAll(".plab, .slab")].filter(I=>I.offsetParent!==null||I.style.display==="block").map(I=>{let F=I.getBoundingClientRect();return[F.left-2,F.top-2,F.right+2,F.bottom+2]}).filter(I=>I[2]>I[0]),E=r.dist,C=E>160?5e4:E>130?2e4:E>105?8e3:E>80?3e3:E>62?800:0;for(let I of ee){let F=rn(I.pop);if(I.pop<C)break;let O=Be(I);if(zn.set(O[0],O[1],U).project(n),Math.abs(zn.x)>1.02||Math.abs(zn.y)>1.02)continue;let B=(zn.x*.5+.5)*innerWidth,Z=(-zn.y*.5+.5)*innerHeight,et=xn(I.name),y=et.length*Ze[F]+8,P=$e[F],Q=[B-y/2,Z-P/2,B+y/2,Z+P/2];if(S.some(Et=>Q[0]<Et[2]&&Et[0]<Q[2]&&Q[1]<Et[3]&&Et[1]<Q[3]))continue;S.push(Q);let rt=Se[_]||(Se[_]=Object.assign(document.createElement("div"),{className:"mlab"}));rt.isConnected||document.body.appendChild(rt),rt._n!==et&&(rt.textContent=et,rt._n=et),rt._t!==F&&(rt.className="mlab t"+F,rt._t=F),rt.style.transform=`translate(${Math.round(B)}px,${Math.round(Z)}px) translate(-50%,-50%)`,rt.style.display="block",_++}}for(;_<Se.length;_++)Se[_].style.display="none"}let ve={at:0,hoy:null,ayer:null,err:""},De="https://raw.githubusercontent.com/elMonoAmelio/catalunya-survival/stats/";function wn(){Date.now()-ve.at<5*6e4||(ve.at=Date.now(),Promise.all(["hoy","ayer","hist"].map(u=>fetch(De+u+".json",{cache:"no-store"}).then(_=>_.ok?_.json():null).catch(()=>null))).then(([u,_,S])=>{ve.hoy=u,ve.ayer=_,ve.hist=S,ve.tr=null,ve.err=u?"":"sin datos",Ke&&(h._h="",Ve()),en(!0)}))}function ci(u){let _={};for(let E of u&&u.snaps||[])for(let C of E.r||[]){let I=/^\d+[A-Z](\d+)/.exec(C);I&&(_[I[1]]=_[I[1]]||[]).push(Math.max(0,E.d&&E.d[C]||0)/60)}let S={};for(let E in _){let C=_[E].sort((I,F)=>I-F);S[E]=Math.round(C[C.length>>1])}return S}function hi(u){if(!ve.tr){let S=new Map;for(let E of ve.hist&&ve.hist.days||[])S.set(E.day,E.tr);for(let E of[ve.ayer,ve.hoy])if(E&&E.day&&!S.has(E.day)){let C=ci(E);Object.keys(C).length&&S.set(E.day,C)}ve.tr=S}let _=[...ve.tr.values()].map(S=>S[String(u)]).filter(S=>S!=null);return _.length?{n:_.length,late:_.filter(S=>S>=5).length,avg:_.reduce((S,E)=>S+E,0)/_.length}:null}let kn=u=>u>=90?"g":u>=80?"y":u>=65?"w":"b",Re={g:"#16a34a",y:"#eab308",w:"#ea7a0c",b:"#dc2626"},Qe=u=>u>10?Re.b:u>5?Re.w:u>=1?Re.y:Re.g,Ln=u=>(u>=.05?"+":"")+(Math.round(u*10)/10).toString().replace(".",",")+" min";function ke(u,_,S){return`<div class="sbars">${u.map(E=>`<div class="sbar" title="${f(E.tip||"")}"><span class="sl">${E.lab}</span><span class="st"><i style="width:${Math.max(2,Math.round(E.w*100))}%;background:${E.c}"></i></span><b class="sv" style="color:${E.c===Re.y?"#a16207":E.c}">${E.val}</b></div>`).join("")}</div>`}function Di(u){if(u=(u||[]).filter(O=>O.n>=10),!u||u.length<2){let O=u&&u[0];return O?`<p class="snote">Primera foto del d\xEDa a las ${O.t}: ${Math.round(O.ok/O.n*100)} % puntuales de ${O.n} trenes. El gr\xE1fico aparece con la segunda foto.</p>`:'<p class="snote">A\xFAn no hay fotos de hoy.</p>'}let _=300,S=92,E=22,C=O=>E+O*(_-E-6)/(u.length-1),I=O=>6+(100-O)/100*(S-22),F=u.map((O,B)=>[C(B),I(O.n?O.ok/O.n*100:100),O]);return`<svg class="schart" viewBox="0 0 ${_} ${S}" role="img" aria-label="Porcentaje de trenes puntuales a lo largo del d\xEDa">
      ${[100,75,50].map(O=>`<line x1="${E}" x2="${_-4}" y1="${I(O)}" y2="${I(O)}" class="gl"/><text x="2" y="${I(O)+3}" class="ax">${O}%</text>`).join("")}
      <polyline points="${F.map(O=>O[0].toFixed(1)+","+O[1].toFixed(1)).join(" ")}" class="ln"/>
      ${F.map(([O,B,Z])=>`<circle cx="${O.toFixed(1)}" cy="${B.toFixed(1)}" r="5" class="pt"><title>${Z.t} \xB7 ${Z.n?Math.round(Z.ok/Z.n*100):100}% puntuales \xB7 ${Z.n} trenes \xB7 ${Z.d5} con +5 min \xB7 retraso medio ${Ln(Z.avg)}${Z.nd?` \xB7 ${Z.nd} sin dato`:""}</title></circle>`).join("")}
      <text x="${E}" y="${S-3}" class="ax">${u[0].t}</text><text x="${_-4}" y="${S-3}" class="ax" text-anchor="end">${u[u.length-1].t}</text></svg>`}function ps(){wn();let u=de(),_=_n.filter(O=>O.real&&qt()&&u.live),S=_.filter(O=>H.delays.has(O.v.tid)),E=S.length,C=_.length-E,I='<div class="tc sts" style="--c:#1d2330"><button class="x" data-cx>\xD7</button><h3>\u{1F4CA} Estad\xEDsticas</h3>';if(E){let O=S.filter(yt=>yt.dl<3).length,B=S.filter(yt=>yt.dl>=5).length,Z=S.filter(yt=>yt.stop==="via").length,et=Math.round(O/E*100);I+=`<small>Ahora mismo \xB7 ${E} trenes con retraso publicado por Renfe${C?` \xB7 ${C} sin dato (no se cuentan)`:""}</small><div class="kpis">
        <div class="kpi ${kn(et)}"><b>${et}%</b><span>puntuales</span></div>
        <div class="kpi ${kn(100-B/E*100*2)}" title="${Math.round(B/E*100)} % de los trenes"><b>${B}</b><span>con 5 min<br>o m\xE1s</span></div>
        <div class="kpi ${Z===0?"g":Z<=2?"w":"b"}"><b>${Z}</b><span>detenidos<br>en la v\xEDa</span></div></div>`;let y=new Map;S.forEach(yt=>{let St=yt.fam,ae=y.get(St)||{n:0,ok:0,sum:0};ae.n++,ae.ok+=yt.dl<3,ae.sum+=Math.max(0,yt.dl),y.set(St,ae)});let P=[...y].filter(([yt])=>$[yt]).sort((yt,St)=>yt[1].ok/yt[1].n-St[1].ok/St[1].n||St[1].sum/St[1].n-yt[1].sum/yt[1].n),Q=P.filter(([,yt])=>yt.ok<yt.n),rt=P.filter(([,yt])=>yt.ok===yt.n);I+="<h4>Puntualidad por l\xEDnea ahora</h4>"+(Q.length?"":'<p class="snote">\u2713 Todas las l\xEDneas van puntuales.</p>')+ke(Q.map(([yt,St])=>({lab:Yn(yt),w:St.ok/St.n,c:Re[kn(St.ok/St.n*100)],val:`${Math.round(St.ok/St.n*100)}% <small>${Ln(St.sum/St.n)}</small>`,tip:`${yt}: ${St.ok} de ${St.n} trenes puntuales \xB7 retraso medio ${Ln(St.sum/St.n)}`})))+(rt.length?`<p class="snote">Puntuales al 100 %: ${rt.map(([yt])=>Yn(yt)).join(" ")}</p>`:"");let Et=new Map;S.forEach(yt=>{if(!yt.tr||yt.v.next==null||yt.v.next<0||yt.v.pre)return;let St=yt.tr.pat.stops[yt.v.next],ae=Et.get(St)||{n:0,sum:0};ae.n++,ae.sum+=Math.max(0,yt.dl),Et.set(St,ae)});let Zt=[...Et].filter(([,yt])=>yt.sum/yt.n>=1).sort((yt,St)=>St[1].sum/St[1].n-yt[1].sum/yt[1].n).slice(0,8),ne=Zt.length?Zt[0][1].sum/Zt[0][1].n:1;I+='<h4>Estaciones con m\xE1s retraso ahora</h4><small class="snote">Retraso medio de los trenes que van a llegar a cada estaci\xF3n</small>'+(Zt.length?ke(Zt.map(([yt,St])=>({lab:`<span class="sn" data-gs="${yt}">${f(b[yt].n)}</span>`,w:St.sum/St.n/ne,c:Qe(St.sum/St.n),val:`${Ln(St.sum/St.n)} <small>${St.n} ${St.n===1?"tren":"trenes"}</small>`,tip:`${b[yt].n}: ${St.n} trenes llegando con ${Ln(St.sum/St.n)} de media`}))):'<p class="snote">\u2713 Ning\xFAn tren llega con retraso ahora mismo.</p>')}else I+='<p class="snote">Las estad\xEDsticas en directo necesitan el puente de tiempo real conectado.</p>';let F=ve.hoy;I+=`<button type="button" class="hmore" data-cols>${ei.on?"\u25BE Quitar columnas del mapa":"\u{1F3D9}\uFE0F Ver el retraso de cada estaci\xF3n en 3D"}</button>`;{Mh("");let O=[...Fs.m].filter(([B,Z])=>$[B]&&Z[0]>=3).map(([B,Z])=>[B,Z[1]/Z[0]]).sort((B,Z)=>B[1]-Z[1]);O.length&&(I+='<h4>\xBFDe qu\xE9 trenes da posici\xF3n Renfe?</h4><small class="snote">De los trenes que seg\xFAn horario circulan ahora, cu\xE1ntos se ven en directo. Si es bajo, en esa l\xEDnea el mapa usa el horario y no avisamos de \xABsin se\xF1al\xBB.</small>'+ke(O.slice(0,8).map(([B,Z])=>({lab:Yn(B),w:Z,c:Re[kn(Z*100)],val:`${Math.round(Z*100)}%`,tip:`${B}: ${Math.round(Z*100)} % de los trenes en circulaci\xF3n con posici\xF3n de Renfe`}))))}{let O=et=>{let y=(et&&et.snaps||[]).filter(rt=>rt.n),P=y.reduce((rt,Et)=>rt+Et.n,0),Q=y.reduce((rt,Et)=>rt+Et.ok,0);return P?Q/P*100:null},B=O(ve.hoy),Z=O(ve.ayer);B!=null&&(I+=`<div class="cmp"><span>Hoy <b class="${kn(B)}">${Math.round(B)} %</b> puntuales</span>${Z!=null?`<span>Ayer <b class="${kn(Z)}">${Math.round(Z)} %</b></span><span>${B>=Z?"\u25B2 mejor":"\u25BC peor"} que ayer</span>`:""}</div>`)}if(I+="<h4>Hoy, a lo largo del d\xEDa</h4>",F&&F.snaps){I+=Di(F.snaps);let O=Object.entries(F.st||{}).map(([et,y])=>[zt.get(et),y]).filter(([et,y])=>et!=null&&y.n>=3).map(([et,y])=>[et,y.sum/y.n/60,y]).filter(et=>et[1]>=1).sort((et,y)=>y[1]-et[1]).slice(0,8);if(O.length){let et=O[0][1];I+='<h4>Estaciones con m\xE1s retraso hoy</h4><small class="snote">Retraso medio de los trenes al llegar \xB7 al menos 3 mediciones</small>'+ke(O.map(([y,P,Q])=>({lab:`<span class="sn" data-gs="${y}">${f(b[y].n)}</span>`,w:P/et,c:Qe(P),val:`${Ln(P)} <small>m\xE1x +${Math.round(Q.max/60)}</small>`,tip:`${b[y].n}: ${Q.n} mediciones hoy (foto cada 15 min) \xB7 ${Q.d5} con 5 min o m\xE1s \xB7 peor +${Math.round(Q.max/60)} min`})))}let B=Object.entries(F.lines||{}).filter(([et,y])=>$[et]&&y.n>=3).sort((et,y)=>et[1].ok/et[1].n-y[1].ok/y[1].n);B.length&&(I+="<h4>L\xEDneas hoy</h4>"+ke(B.map(([et,y])=>({lab:Yn(et),w:y.ok/y.n,c:Re[kn(y.ok/y.n*100)],val:`${Math.round(y.ok/y.n*100)}% <small>${Ln(y.sum/y.n/60)}</small>`,tip:`${et} hoy: ${Math.round(y.ok/y.n*100)}% de las mediciones puntuales \xB7 peor retraso +${Math.round(y.max/60)} min`}))));let Z=F.upd?(Date.now()-Date.parse(F.upd))/6e4:0;I+=`<small class="snote">${Z>40?`<b>\xDAltima foto hace ${Math.round(Z)} min</b> (GitHub a veces retrasa las tareas autom\xE1ticas) \xB7 `:""}Foto cada 15 min del tiempo real de Renfe \xB7 actualizado ${f((F.upd||"").slice(11,16))} \xB7 ${(F.note||"").includes("Solo cuentan")?"solo cuentan los trenes con dato de retraso":"las fotos anteriores a las 12:20 contaban como puntuales los trenes sin dato"}</small>`}else I+=`<p class="snote">${ve.at?"El hist\xF3rico de hoy a\xFAn no est\xE1 disponible: se va reuniendo cada 15 min.":"Cargando\u2026"}</p>`;return I+"</div>"}function Io(u){let _=de(),S=_n.filter(P=>(P.fam||P.tr&&P.tr.fam)===u),E=S.filter(P=>P.real),C=S.length,I=S.filter(P=>P.dl>=5).length,F=S.filter(P=>P.dl<3).length,O=S.filter(P=>P.stop==="via"||P.broke).length,B=H.alerts.filter(P=>P.fams.has(u)),Z=P=>{let Q=P.tr;if(!Q)return"";let rt=P.v;if(P.real&&rt){let Zt=rt.next>=0?b[Q.pat.stops[rt.next]].n:"";return rt.atStop>=0?`en ${b[Q.pat.stops[rt.atStop]].n}`:Zt?`hacia ${Zt}`:""}let Et=P.p;return Et&&Et.next!=null&&Et.next>=0?`hacia ${b[Q.pat.stops[Et.next]].n}`:""},et=S.slice().sort((P,Q)=>Q.dl-P.dl).slice(0,40).map(P=>{let Q=P.tr;return`<li class="go${oa({num:Q?Q.num:P.v.num,tid:Q?Q.tid:P.v.tid})?" sel":""}" data-gt="${f(Q?Q.num:P.v.num)}|${f(P.real?P.v.tid:Q?Q.tid:"")}"><b>${f(Q?Q.num:P.v.num)}</b><span>${Q?Ni(b[Q.pat.stops[Q.pat.stops.length-1]].n,u):""} <small>${f(Z(P))}</small></span>${P.dl>=1?`<em class="dl ${ts(P.dl)}">+${Math.round(P.dl)}</em>`:'<i class="via">en hora</i>'}</li>`}).join(""),y=Mh(u);return`<div class="tc sts" style="--c:${$[u]||"#1d2330"}"><button class="x" data-cx>\xD7</button><h3>${Yn(u)} Estado de la l\xEDnea</h3><small>${_.live?`Ahora \xB7 ${C} trenes${E.length<C?` (${E.length} con posici\xF3n de Renfe)`:""}`:`Seg\xFAn horario a las ${at(_.min)}`}</small>
      <div class="kpis"><div class="kpi ${kn(C?F/C*100:100)}"><b>${C?Math.round(F/C*100):100}%</b><span>puntuales</span></div><div class="kpi ${I?I/Math.max(1,C)>.2?"b":"w":"g"}"><b>${I}</b><span>con 5 min<br>o m\xE1s</span></div><div class="kpi ${O?"b":"g"}"><b>${O}</b><span>detenidos</span></div></div>
      ${B.length?Om(B):'<p class="snote">\u2713 Sin avisos de Rodalies para esta l\xEDnea</p>'}${y<.7?`<p class="snote">Renfe solo da posici\xF3n de ${Math.round(y*100)} % de los trenes de esta l\xEDnea: el resto se muestra seg\xFAn horario.</p>`:""}
      <small style="margin-top:6px">Trenes de m\xE1s a menos retraso \xB7 toca uno para verlo</small><ol>${et||"<li><span>No hay trenes de esta l\xEDnea ahora</span></li>"}</ol>
      <div class="rtb"><button type="button" data-share>\u{1F4E4} Compartir estado</button></div></div>`}let Om=u=>`<div class="al">${u.slice(0,3).map(_=>`<p>\u26A0\uFE0F ${ko(_)} ${f(_.txt)} <small>${zo(_)}</small></p>`).join("")}</div>`,ei={on:!1,mesh:null};function Bm(){let u=ve.hoy,_=[];if(u&&u.st)for(let[S,E]of Object.entries(u.st)){let C=zt.get(S);C!=null&&E.n>=2&&_.push([C,E.sum/E.n/60,E.n])}if(!_.length){let S=new Map;_n.forEach(E=>{if(!E.real||!E.tr||E.v.next==null||E.v.next<0||E.v.pre||!H.delays.has(E.v.tid))return;let C=E.tr.pat.stops[E.v.next],I=S.get(C)||[0,0];I[0]+=Math.max(0,E.dl),I[1]++,S.set(C,I)}),S.forEach((E,C)=>_.push([C,E[0]/E[1],E[1]]))}return _}function km(){if(ei.mesh&&(e.remove(ei.mesh),ei.mesh.geometry.dispose(),ei.mesh.material.dispose(),ei.mesh=null),!ei.on){a();return}let u=Bm();if(!u.length){hn("A\xFAn no hay datos de retraso por estaci\xF3n"),ei.on=!1;return}let _=new Va(.32,.32,1,16);_.rotateX(Math.PI/2),_.translate(0,0,.5);let S=new $s({fog:!1}),E=new Oa(_,S,u.length),C=new Oe,I=new pe;u.forEach(([F,O],B)=>{let Z=.3+Math.min(O,40)*.3;C.makeScale(1,1,Z),C.setPosition(b[F].w[0],b[F].w[1],U),E.setMatrixAt(B,C),I.set(O>10?"#dc2626":O>5?"#ea7a0c":O>=1?"#eab308":"#16a34a"),E.setColorAt(B,I)}),E.renderOrder=25,E.frustumCulled=!1,e.add(E),ei.mesh=E,s.tilt<.5&&(s.tilt=.85),a()}let cr=document.createElement("button");cr.type="button",cr.id="sbtn",cr.title="Estad\xEDsticas de puntualidad",cr.innerHTML="\u{1F4CA}<span>Estad\xEDsticas</span>",cr.onclick=()=>{Ke=!Ke,Ke&&(sn=j=!1,ve.at=0),h._h="",Ve(),a()},document.body.appendChild(cr);function zm(){r.dist<45!=te<45&&(te=r.dist,Rt()),Vm(),$t()}let sa=[],zn=new G;function Vm(){let u=r.dist<30,_=0;if(u){let S=[];for(let E=0;E<re;E++)Pt[E]<4||(zn.set(b[E].w[0],b[E].w[1],U).project(n),!(zn.z>1||Math.abs(zn.x)>1.05||Math.abs(zn.y)>1.05)&&S.push([E,(zn.x*.5+.5)*innerWidth,(-zn.y*.5+.5)*innerHeight]));if(S.length<=70)for(let[E,C,I]of S){let F=sa[_]||(sa[_]=Object.assign(document.createElement("div"),{className:"slab"}));F.isConnected||document.body.appendChild(F),F.textContent=b[E].n,F.dataset.i=E,F.style.display="block",F.style.transform=`translate(${Math.round(C+8)}px,${Math.round(I-7)}px)`,_++}}for(;_<sa.length;_++)sa[_].style.display="none"}function Po(u){return zn.set(u[0],u[1],U).project(n),[(zn.x*.5+.5)*innerWidth,(-zn.y*.5+.5)*innerHeight,zn.z]}function Cd(u,_,S,E){let C=null,I=S*S;for(let F of _n){let[O,B,Z]=Po(F.p.w);if(Z>1)continue;let et=(O-u)**2+(B-_)**2;et<I&&(I=et,C={a:F})}if(C)return C;I=E*E;for(let F=0;F<re;F++){if(!Pt[F])continue;let[O,B,Z]=Po(b[F].w);if(Z>1)continue;let et=(O-u)**2+(B-_)**2;et<I&&(I=et,C={s:F})}return C}window.__rodTap=(u,_)=>{let S=null,E=1e9;for(let I of sa){if(I.style.display==="none")continue;let F=I.getBoundingClientRect();if(u>=F.left-4&&u<=F.right+4&&_>=F.top-4&&_<=F.bottom+4){let O=Math.abs(_-(F.top+F.bottom)/2)*4+(u-F.left);O<E&&(E=O,S=I)}}if(S)return window.__rodPickStation(+S.dataset.i),!0;let C=Cd(u,_,24,18);return C&&C.a?(sn=!1,j=!1,Ke=!1,q=C.a.tr||{vtid:C.a.v.tid},J=-1,V=null,Rt(),Ve(),w=0,a(),!0):C&&C.s!=null?(sn=!1,j=!1,Ke=!1,J=C.s,q=null,V=null,Rt(),Ve(),a(),!0):!1},window.__rodHover=(u,_)=>{let S=Cd(u,_,14,10);if(S&&S.a){let E=S.a,C=E.tr?b[E.tr.pat.stops[E.tr.pat.stops.length-1]].n:"";return`<b><span style="color:${E.c}">\u25A0</span> ${f(E.fam||E.tr&&E.tr.fam||"?")} \xB7 tren ${f(E.tr?E.tr.num:E.v.num)}</b><small>${C?"hacia "+f(C):""}${E.real?(E.dl>=1?` \xB7 <b style="color:#c2410c">+${Math.round(E.dl)} min</b>`:" \xB7 puntual")+" \xB7 en directo":" \xB7 previsto"}</small>`}return S&&S.s!=null?`<b>${f(b[S.s].n)}</b><small>${[...b[S.s].fams].sort(L).join(" \xB7 ")}</small>`:null},window.__rodPickStation=u=>{sn=j=Ke=!1,q=null,V=null,J=u,Rt(),h._h="",Ve(),a()};{let u=p("#rc"),_=()=>{let S=u.getBoundingClientRect().top;document.documentElement.style.setProperty("--mcsmax",Math.max(160,S-64-10)+"px")};try{new ResizeObserver(_).observe(u)}catch{}addEventListener("resize",_),setTimeout(_,300)}if("serviceWorker"in navigator&&location.protocol==="https:"){let u=!1,_=!!navigator.serviceWorker.controller;navigator.serviceWorker.addEventListener("controllerchange",()=>{_&&!u&&(u=!0,location.reload())}),navigator.serviceWorker.register("./sw.js").then(S=>{S.update().catch(()=>{}),document.addEventListener("visibilitychange",()=>{document.hidden||S.update().catch(()=>{})})}).catch(()=>{})}setTimeout(()=>{try{wn()}catch{}},2500),setInterval(()=>{try{ve.at=0,wn()}catch{}},15*6e4),window.__rodTick=Bt,window.__rodFrame=zm,window.__rodResize=()=>{tt.resolution.set(innerWidth,innerHeight),st.resolution.set(innerWidth,innerHeight)},window.__rodResize();let ui={st:-1,f:new Set},Rd=u=>{let _=[...b[u].fams].sort(L);return`<div class="sfc">${_.length>1?`<button type="button" data-sf="" class="${ui.f.size?"":"on"}">Todas</button>`:""}${_.map(S=>`<button type="button" data-sf="${f(S)}" class="ln ${ui.f.size&&!ui.f.has(S)?"off":""}${Wt.has(S)?"":" hid"}" style="--c:${$[S]}">${f(S)}</button>`).join("")}</div>${_.some(S=>!Wt.has(S))?"<small>Las l\xEDneas apagadas en el filtro general no se muestran</small>":""}`},Hm=u=>{let _=(u||"#6b7385").replace("#",""),S=parseInt(_.slice(0,2),16),E=parseInt(_.slice(2,4),16),C=parseInt(_.slice(4,6),16);return(.299*S+.587*E+.114*C)/255>.62?"#1d2330":"#fff"},Ni=(u,_)=>{let S=$[_]||"#6b7385";return`<span class="dst" style="background:${S};color:${Hm(S)}" title="${f(_||"")}">${f(u)}</span>`},Lo=u=>{let _=b[u]&&b[u].id;return Vn.st.includes(_)?"\u{1F3E0} ":pn.st.includes(_)?"\u{1F4BC} ":""},ts=u=>u>10?"d-hi":u>5?"d-md":"d-lo",Gm=/aver[ií]|incid[eè]ncia t[eè]cnica|incidencia t[eé]cnica|problema t[eè]cnic|t[eè]cnic[oa] del propi/i,ra={ref:null,m:new Map};function vh(u){if(ra.ref!==H.alerts){ra.ref=H.alerts,ra.m=new Map;for(let _ of H.alerts){if(_.src!=="Rodalies")continue;let S=_.txt.match(/(?:a causa d[e']|per causa d[e']|debido a|degut a)\s+([^.]{4,140})/i);for(let E of _.txt.matchAll(/\b[Tt]ren\s+(\d{4,6})\b/g))ra.m.set(E[1],{why:S?S[1].trim().replace(/\s+/g," "):"",txt:_.txt,when:_.when,cx:/no circula|no circular[àa]|suprimi|anul[·.]?la|cancel[·.]?la|anulad|cancelad/i.test(_.txt)})}}return ra.m.get(String(u))||null}let aa={ref:null,m:new Map};function Id(u){let _=String(u.tr?u.tr.num:u.v&&u.v.num||"");if(!_)return null;if(aa.ref!==H.alerts){aa.ref=H.alerts,aa.m=new Map;for(let E of H.alerts)if(E.src==="Rodalies"&&Gm.test(E.txt))for(let C of E.txt.matchAll(/\b(\d{4,6})\b/g))aa.m.set(C[1],E)}let S=aa.m.get(_);return S?{why:"aviso",txt:S.txt}:u.real&&u.stop==="via"&&u.v.still>=300?{why:"via",min:Math.round(u.v.still/60)}:null}let oa=u=>{try{let _=q;return _?_.num!=null&&String(_.num)===String(u.num)||u.tid&&(_.tid===u.tid||_.vtid===u.tid):!1}catch{return!1}},Pd=(u,_)=>{let S=M(u,_.min-1,_.min+240).sort((E,C)=>E.est-C.est).slice(0,6);return S.length?`<small style="margin-top:6px">\u{1F68C} Servicio por carretera (obras): autobuses que sustituyen al tren</small><ol>${S.map(E=>`<li><b>${at(E.est)}</b>${Yn(E.fam)}<span>${Ni(E.dest,E.fam)}</span><i class="via">bus</i></li>`).join("")}</ol>`:""},xi=(()=>{try{return JSON.parse(localStorage.getItem("rod_fav")||"[]")}catch{return[]}})(),Wm=()=>{try{localStorage.setItem("rod_fav",JSON.stringify(xi))}catch{}},Ld=u=>!!u&&xi.some(_=>_.num===String(u.num)),an=(()=>{try{let u=JSON.parse(localStorage.getItem("rod_alarm")||"null");return u&&Date.now()-u.at<4*36e5?u:null}catch{return null}})(),Do=()=>{try{localStorage.setItem("rod_alarm",JSON.stringify(an))}catch{}},No=(u,_)=>!!(an&&u&&an.num===String(u.num)&&an.sid===b[u.pat.stops[_]].id);function yh(u,_){try{navigator.vibrate&&navigator.vibrate([400,150,400,150,600])}catch{}hn(u+" \xB7 "+_),"Notification"in window&&Notification.permission==="granted"&&(navigator.serviceWorker&&navigator.serviceWorker.getRegistration?navigator.serviceWorker.getRegistration():Promise.resolve(null)).then(S=>S?S.showNotification(u,{body:_,tag:"alarm",requireInteraction:!0,vibrate:[400,150,400,150,600],icon:"icons/icon-192.png"}):new Notification(u,{body:_})).catch(()=>{})}function $m(){if(!an||an.done)return;let u=de();if(!u.live)return;let _=t.days.indexOf(u.ymd),S=(K[_]||[]).find(B=>String(B.num)===an.num)||(K[_-1]||[]).find(B=>String(B.num)===an.num);if(!S)return;let E=S.pat.stops.findIndex(B=>b[B].id===an.sid);if(E<0)return;let C=Ce(S),I=typeof C=="number"?Math.max(0,C/60):0,F=S.day===_-1?1440:0,O=S.t0+S.pat.t[2*E]+I-F;if(O-u.min<-3){an.done=!0,Do();return}O-u.min<=2&&(an.done=!0,Do(),yh(`\u{1F689} Llegas a ${b[S.pat.stops[E]].n}`,`En unos ${Math.max(0,Math.round(O-u.min))} min (${at(O)}) \xB7 prep\xE1rate para bajar`))}let Uo=new Set;function Xm(){if(!xi.length)return;let u=de();if(!u.live)return;let _=t.days.indexOf(u.ymd);for(let S of xi){let E=(K[_]||[]).find(et=>String(et.num)===S.num);if(!E)continue;let C=E.pat.stops.findIndex(et=>b[et].id===S.sid);if(C<0)continue;let I=E.t0+E.pat.t[2*C+1],F=Ce(E),O=typeof F=="number"?F/60:0,B=I-u.min;if(B<-2||B>60)continue;let Z=u.ymd+S.num+(F==="X"?"X":O>=10?10:O>=5?5:0);Uo.has(Z)||(F==="X"||O>=5?(Uo.add(Z),yh(`\u2B50 Tu tren de las ${at(I)} ${F==="X"?"est\xE1 cancelado":`va con +${Math.round(O)} min`}`,`${E.fam} ${E.num} desde ${b[E.pat.stops[C]].n}${F==="X"?"":` \xB7 saldr\xE1 hacia las ${at(I+O)}`}`)):B<=20&&!Uo.has(u.ymd+S.num+"ok")&&H.vp.has(E.tid)&&(Uo.add(u.ymd+S.num+"ok"),hn(`\u2B50 Tu tren de las ${at(I)} va en hora`)))}}setInterval(()=>{try{$m(),Xm()}catch{}},15e3);let Yn=u=>`<span class="ln" style="--c:${$[u]}">${f(u)}</span>`;function Dd(u,_){return _?u==="X"?'<span class="st late">Cancelado</span>':u>=60?`<span class="st late ${ts(u/60)}">Retraso de ${Math.round(u/60)} min</span>`:'<span class="st ok">Puntual</span>':'<span class="st sch">Seg\xFAn horario \xB7 sin dato en directo</span>'}function Ve(){if(!q&&J<0&&!j&&!sn&&!Ke&&!Li){h.innerHTML="",h._h="",h.style.display="none",h.classList.remove("peek"),Ch();return}let u=de(),_="",S=qt()&&u.live,E=(y,P)=>H.alerts.filter(Q=>[...Q.fams].some(rt=>y.has(rt))||P!=null&&Q.stops.has(P)),C=y=>y.length?`<div class="al">${y.slice(0,4).map(P=>`<p>\u26A0\uFE0F ${ko(P)} ${[...P.fams].sort(L).slice(0,6).map(Yn).join(" ")} ${f(P.txt)} <small>${zo(P)}</small></p>`).join("")}${y.length>4?`<small>y ${y.length-4} avisos m\xE1s</small>`:""}</div>`:"",I=q&&S?_n.find(y=>y.real&&(q.vtid?y.v.tid===q.vtid:y.tr===q)):null;if(Li&&!Ke&&!sn&&!j&&!q&&J<0)_=Io(Li);else if(Ke)_=ps();else if(sn)_=`<div class="tc" style="--c:#1d2330"><button class="x" data-cx>\xD7</button><h3>Novedades</h3><small>${f(p("#ver").textContent.replace(" \xB7 novedades y fuentes",""))}</small><ul class="chg">${p("#chg").innerHTML||"<li>Versi\xF3n de prueba</li>"}</ul>
        <h3 style="margin-top:14px">Fuentes</h3><ul class="fts">
        <li><b>Renfe Operadora</b> \xB7 horarios (GTFS), posici\xF3n de los trenes y retrasos (GTFS-RT) \xB7 <a href="https://data.renfe.com" target="_blank" rel="noopener">data.renfe.com</a> \xB7 licencia CC BY 4.0</li>
        <li><b>Rodalies de Catalunya</b> (Generalitat) \xB7 salidas con v\xEDa, cancelaciones y avisos \xB7 <a href="https://rodalies.gencat.cat" target="_blank" rel="noopener">rodalies.gencat.cat</a></li>
        <li><b>Adif</b> \xB7 incidencias en la infraestructura de Catalu\xF1a \xB7 <a href="https://www.adif.es/viajeros/estado-de-la-red" target="_blank" rel="noopener">estado de la red</a> \xB7 \xA9 Adif</li>
        <li><b>OpenStreetMap</b> \xB7 trazado de las v\xEDas \xB7 <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">\xA9 colaboradores de OpenStreetMap</a>, licencia ODbL</li>
        </ul><small>Los datos se muestran tal como los publican sus fuentes. Ante cualquier duda, manda lo que diga el operador en la estaci\xF3n.</small></div>`;else if(j){let y=H.alerts.filter(P=>[...P.fams].some(Q=>Wt.has(Q))||!P.fams.size);_=`<div class="tc" style="--c:#c2410c"><button class="x" data-cx>\xD7</button><h3>Avisos e incidencias</h3><small>${y.length} avisos activos para las l\xEDneas que tienes visibles</small>${y.map(P=>`<div class="al"><p>${ko(P)} ${[...P.fams].sort(L).map(Yn).join(" ")} <small>${zo(P)}</small></p><p>${f(P.txt)}</p></div>`).join("")||"<p>Sin avisos activos.</p>"}<small>Fuente: avisos oficiales de Rodalies de Catalunya, incidencias en la v\xEDa de Adif (gestor de la infraestructura)${H.alertsTs&&Date.now()/1e3-H.alertsTs<6*3600?" y de Renfe":` \xB7 los avisos GTFS de Renfe no se muestran: Renfe no los actualiza desde el ${H.alertsTs?new Date(H.alertsTs*1e3).toLocaleDateString("es-ES",{day:"numeric",month:"short"}):"\u2014"}`}</small></div>`}else if(I){let y=I.v,P=I.tr,Q=oe=>f(b[P.pat.stops[oe]].n),rt=P?P.pat.stops.length:0,Et=zt.get(y.sid),Zt=Et!=null?f(b[Et].n):f(y.sid),ne=P&&y.atStop>=0?Q(y.atStop):"",yt=P&&y.next>=0?Q(y.next):Zt,St=P&&y.next>0?Q(y.next-1):"",ae=I.broke||Id(I),me=ae?`<b class="stopv">\u26A0\uFE0F ${ae.why==="aviso"?"Tren averiado seg\xFAn Rodalies":`Posible aver\xEDa: detenido en la v\xEDa desde hace ${ae.min} min`}</b>${P&&St?` \xB7 entre ${St} y <b>${yt}</b>`:""}`:I.stop==="via"&&P?`<b class="stopv">\u23F8 Detenido</b> ${St?`entre ${St} y <b>${yt}</b>`:`antes de <b>${yt}</b>`} desde hace ${Math.max(1,Math.round(y.still/60))} min`:y.pre&&P?y.prevTr?`A\xFAn no ha empezado este viaje. Est\xE1 terminando el tren <b>${f(y.prevTr.num)}</b> hacia <b>${Q(0)}</b>${y.prevDl>=1?` con <b>+${Math.round(y.prevDl)} min</b>`:""}: llega hacia las <b>${at(y.arrO)}</b> y saldr\xEDa hacia las <b>${at(y.depEst)}</b>${y.preDl>=1?` (horario ${at(y.dep0)})`:""}`:`A\xFAn no ha empezado este viaje: va hacia <b>${Q(0)}</b>, de donde sale a las <b>${at(y.dep0+I.dl)}</b>`:y.st==="STOPPED_AT"&&ne?`Parado en <b>${ne}</b>`:ne&&y.next>=0&&y.atStop!==y.next?`Saliendo de <b>${ne}</b> hacia <b>${yt}</b>`:St?`Entre ${St} y <b>${yt}</b>`:`Hacia <b>${yt}</b>`,Ee=H.tu.get(y.tid),dn=Ee&&Ee.next&&P&&y.next>=0&&Ee.next.sid===b[P.pat.stops[y.next]].id&&Ee.next.t?new Date(Ee.next.t*1e3).toLocaleTimeString("es-ES",{hour:"2-digit",minute:"2-digit"}):"",Ne=[];if(P){let oe=I.idx>=0?I.idx:0,Fi=y.pre?Math.max(I.dl,y.preDl||0):I.dl,hr=tn=>P.t0+P.pat.t[tn]+Fi;for(let tn=oe;tn<rt;tn++)Ne.push(`<li class="${Lo(P.pat.stops[tn])?"mine":""}${No(P,tn)?" alm":""}"><b>${at(hr(tn===0?1:2*tn))}</b><span title="${Q(tn)}">${Lo(P.pat.stops[tn])}${Q(tn)}</span>${Fi>=1?`<em class="dl ${ts(Fi)}">${y.pre?"\u2248":""}+${Math.round(Fi)}</em>`:""}${tn>0?`<button type="button" class="abtn" data-alarm="${tn}" title="Av\xEDsame 2 min antes de llegar aqu\xED">${No(P,tn)?"\u{1F514}":"\u{1F515}"}</button>`:""}</li>`)}_=`<div class="tc" style="--c:${I.c}"><button class="x" data-cx>\xD7</button><div>${Yn(I.fam)}<b>Tren ${f(P?P.num:y.num)}</b> <span class="lv">\u25CF en directo</span></div>${P?`<h3 class="rt"><span class="o" title="${Q(0)}">${Q(0)}</span><span class="ar">\u2192</span>${Ni(b[P.pat.stops[rt-1]].n,P.fam)}</h3>`:""}
        <p>${me}${dn?` \xB7 prevista ${dn}`:""}${y.plat&&y.st==="STOPPED_AT"&&ne?` \xB7 <b>v\xEDa ${f(y.plat)}</b>`:""}</p><p>${y.pre&&y.prevTr?y.preDl>=1?`<span class="st late">Saldr\xE1 con unos ${Math.round(y.preDl)} min de retraso (estimado)</span>`:'<span class="st ok">Le da tiempo a salir a su hora (estimado)</span>':Dd(H.delays.get(y.tid),H.delays.has(y.tid))}${(()=>{let oe=P&&hi(P.num);return oe&&oe.n>=2?`<span class="thist">\u{1F4CA} \xDAltimos ${oe.n} d\xEDas: ${oe.late?`lleg\xF3 con 5 min o m\xE1s <b>${oe.late} de ${oe.n}</b>`:"<b>siempre puntual</b>"} \xB7 retraso t\xEDpico ${oe.avg<.5?"0":"+"+Math.round(oe.avg)} min</span>`:""})()}${(()=>{let oe=P&&vh(P.num);return oe?`<span class="why" title="${f(oe.txt)}">${oe.why?"Motivo: "+f(oe.why):"Rodalies ha publicado un aviso de este tren"}</span>`:""})()}</p>
        <small>${y.pre?`Renfe ya le pone el n\xFAmero de su pr\xF3ximo viaje. Posici\xF3n real enviada hace ${Math.round(I.age)} s`:y.est?"Renfe da una posici\xF3n que no encaja con su recorrido: se muestra donde deber\xEDa estar seg\xFAn el horario y su retraso":`Posici\xF3n enviada por Renfe hace ${Math.round(I.age)} s${I.age>120?" \xB7 <b>sin actualizar</b>":""}`}</small>
        ${Ne.length?`${I.dl>=1||y.pre&&y.preDl>=1?'<small style="margin-top:6px">Horas con el retraso actual</small>':""}<ol class="stops">${Ne.join("")}</ol>`:""}${C(E(new Set([I.fam])))}
        ${Bo(P?P.num:y.num,"",I.fam)}${P?`<div class="rtb two"><button type="button" data-fav>${Ld(P)?"\u2B50 Es tu tren de cada d\xEDa":"\u2606 Mi tren de cada d\xEDa"}</button><button type="button" data-follow>${V===P?"Dejar de seguir":"Seguir este tren"}</button></div>`:""}</div>`}else if(q&&S)_=`<div class="tc" style="--c:#6b7385"><button class="x" data-cx>\xD7</button><h3>Tren ${f(q.num||q.vtid||"")}</h3><p>Renfe no da ahora la posici\xF3n de este tren: puede haber terminado su viaje, no haber salido o no estar circulando.</p></div>`;else if(q){let y=q,P=y.pat,Q=P.stops.length,rt=Ce(y),Et=typeof rt=="number"?rt/60:0,Zt=t.days.indexOf(u.ymd),ne=y.day===Zt-1?1440:0,yt=u.min+ne-y.t0-Et,St=Ns(y,yt),ae=oe=>y.t0+P.t[oe]+Et,me=oe=>f(b[P.stops[oe]].n),Ee="Fuera de servicio ahora";St&&(Ee=St.moving?`Circulando hacia <b>${me(St.next)}</b> \xB7 llega ${at(ae(2*St.next))}`:St.at===Q-1?`Ha llegado a <b>${me(Q-1)}</b>`:`Parado en <b>${me(St.at)}</b> \xB7 sale ${at(ae(2*St.at+1))}`);let dn=St?St.next:0,Ne=[];for(let oe=dn;oe<Q;oe++)Ne.push(`<li class="${Lo(P.stops[oe])?"mine":""}${No(y,oe)?" alm":""}"><b>${at(ae(2*oe))}</b><span title="${me(oe)}">${Lo(P.stops[oe])}${me(oe)}</span>${Et>=1?`<em class="dl ${ts(Et)}">+${Math.round(Et)}</em>`:""}${oe>0?`<button type="button" class="abtn" data-alarm="${oe}" title="Av\xEDsame 2 min antes de llegar aqu\xED">${No(y,oe)?"\u{1F514}":"\u{1F515}"}</button>`:""}</li>`);_=`<div class="tc" style="--c:${y.c}"><button class="x" data-cx>\xD7</button><div>${Yn(y.fam)}<b>Tren ${f(y.num)}</b> <span class="pv">previsi\xF3n</span></div><h3 class="rt"><span class="o" title="${me(0)}">${me(0)}</span><span class="ar">\u2192</span>${Ni(b[y.pat.stops[Q-1]].n,y.fam)}</h3>
        <p>${Ee}</p><p>${Dd(rt,rt!=null)}${(()=>{let oe=hi(y.num);return oe&&oe.n>=2?`<span class="thist">\u{1F4CA} \xDAltimos ${oe.n} d\xEDas: ${oe.late?`lleg\xF3 con 5 min o m\xE1s <b>${oe.late} de ${oe.n}</b>`:"<b>siempre puntual</b>"} \xB7 retraso t\xEDpico ${oe.avg<.5?"0":"+"+Math.round(oe.avg)} min</span>`:""})()}</p><small>Sale ${at(y.t0+P.t[1])} \xB7 llega ${at(y.t0+P.t[2*Q-2])} (horario)</small>
        ${Et>=1?'<small style="margin-top:6px">Horas con el retraso actual</small>':""}<ol class="stops">${Ne.join("")}</ol>${Bo(y.num,"",y.fam)}<div class="rtb two"><button type="button" data-fav>${Ld(y)?"\u2B50 Es tu tren de cada d\xEDa":"\u2606 Mi tren de cada d\xEDa"}</button><button type="button" data-follow>${V===y?"Dejar de seguir":"Seguir este tren"}</button></div></div>`}else{let y=J,P=t.days.indexOf(u.ymd),Q=[];ui.st!==y&&(ui.st=y,ui.f.clear());let rt=yt=>(!$[yt]||Wt.has(yt))&&(!ui.f.size||ui.f.has(yt));if(P>=0){let yt=(St,ae)=>{for(let me of St){if(!rt(me.fam))continue;let Ee=me.pat.stops.indexOf(y);if(Ee<0||Ee===me.pat.stops.length-1)continue;let dn=Ce(me),Ne=typeof dn=="number"?dn/60:0,oe=me.t0+me.pat.t[2*Ee+1]-ae;oe+Ne<u.min-1||oe>u.min+360||Q.push({tr:me,t:oe,dl:Ne,d:dn,on:H.vp.has(me.tid),past:u.min>me.t0+me.pat.t[1]-ae+2})}};yt(K[P],0),P>0&&yt(K[P-1],1440)}Q.sort((yt,St)=>yt.t+yt.dl-St.t-St.dl);let Et=b[y].id,Zt=ti.get(Et);S&&H.url&&(!Zt||Date.now()-Zt.at>3e4)&&!Zt?.loading&&(ti.set(Et,{...Zt||{},loading:!0,at:Zt?Zt.at:0}),wt(H.url.replace(/\/+$/,""),"/departures.json?stationId="+Et).then(yt=>{ti.set(Et,{at:Date.now(),d:yt}),J===y&&(h._h="",Ve())}).catch(()=>ti.set(Et,{at:Date.now(),err:1})));let ne=S&&Zt&&Zt.d&&Array.isArray(Zt.d.trains)?Zt.d.trains:null;if(ne){let yt=new Map([...H.vp.values()].map(ae=>[String((ot.get(ae.tid)||{}).num||ae.num),ae])),St=ne.filter(ae=>rt((ae.line||{}).id||"")).slice(0,40).map(ae=>{let me=(ae.departureDateHourSelectedStation||"").slice(11,16),Ee=(ae.line||{}).id||"",dn=String(ae.commercialNumber||ae.technicalNumber||""),Ne=yt.get(dn),oe=Ne?H.delays.get(Ne.tid):null;return`<li class="go${oa({num:dn,tid:Ne?Ne.tid:""})?" sel":""}" data-gt="${f(dn)}|${Ne?f(Ne.tid):""}"><b>${f(me)}</b>${$[Ee]?Yn(Ee):`<span class="ln" style="--c:#6b7385">${f(Ee||"?")}</span>`}<span>${Ni((ae.destinationStation||{}).name||"",Ee)}${ae.trainObservations?` \xB7 <i>${f(ae.trainObservations)}</i>`:""}</span>${ae.trainCancelled?"<em>cancelado</em>":typeof oe=="number"&&oe>=60?`<em class="dl ${ts(oe/60)}">+${Math.round(oe/60)}</em>`:""}${ae.platformSelectedStation?`<i class="via">v\xEDa ${f(ae.platformSelectedStation)}</i>`:""}${Ne?'<i class="lvd" title="circulando, posici\xF3n real">\u25CF</i>':'<i class="lvd ph">\u25CF</i>'}</li>`}).join("");_=`<div class="tc" style="--c:#1d2330"><button class="x" data-cx>\xD7</button><h3>${f(b[y].n)}</h3>${Rd(y)}${Bo("",b[y].id,"")}
          <small style="margin-top:6px">Pr\xF3ximas salidas oficiales de Rodalies \xB7 hora prevista \xB7 <span class="lvk">\u25CF</span> tren circulando</small>
          <ol>${St||"<li><span>Rodalies no anuncia salidas ahora mismo</span></li>"}</ol>${Pd(y,u)}${C(E(b[y].fams,y))}<div class="rtb two"><button type="button" data-sethome="home">\u{1F3E0} Es mi casa</button><button type="button" data-sethome="work">\u{1F4BC} Es mi trabajo</button></div></div>`}else _=`<div class="tc" style="--c:#1d2330"><button class="x" data-cx>\xD7</button><h3>${f(b[y].n)}</h3>${Rd(y)}${Bo("",b[y].id,"")}
        <small style="margin-top:6px">${S&&H.url?"Cargando salidas oficiales\u2026 mientras, ":""}Pr\xF3ximas salidas${S?' \xB7 hora prevista con el retraso actual \xB7 <span class="lvk">\u25CF</span> tren circulando':" \xB7 previsi\xF3n seg\xFAn horario (sin tiempo real)"}</small>
        <ol>${Q.slice(0,40).map(yt=>`<li class="go${oa({num:yt.tr.num,tid:yt.tr.tid})?" sel":""}" data-gt="${f(yt.tr.num)}|${f(yt.tr.tid)}"><b>${at(yt.t+yt.dl)}</b>${Yn(yt.tr.fam)}<span>${Ni(b[yt.tr.pat.stops[yt.tr.pat.stops.length-1]].n,yt.tr.fam)}</span>${yt.d==="X"?"<em>cancelado</em>":yt.dl>=1?`<em class="dl ${ts(yt.dl)}">+${Math.round(yt.dl)}</em>`:""}${S?yt.on?'<i class="lvd" title="circulando, posici\xF3n real">\u25CF</i>':yt.past?'<i class="nos" title="deber\xEDa haber salido y Renfe no da su posici\xF3n">sin se\xF1al</i>':'<i class="lvd ph">\u25CF</i>':""}</li>`).join("")||"<li><span>No hay salidas en las pr\xF3ximas 6 horas</span></li>"}</ol>${Pd(y,u)}${C(E(b[y].fams,y))}<div class="rtb two"><button type="button" data-sethome="home">\u{1F3E0} Es mi casa</button><button type="button" data-sethome="work">\u{1F4BC} Es mi trabajo</button></div></div>`}let F=h.scrollTop;if(h._h!==_&&(h.innerHTML=_,h._h=_,h.scrollTop=F),h.style.display="flex",h.classList.remove("min"),Ch(),innerWidth<=640){let y=h.querySelector(".tc");if(y&&!y.querySelector(".mn")){let P=document.createElement("button");P.type="button",P.className="mn",P.setAttribute("aria-label","Encoger o ampliar la ficha"),P.textContent=h.classList.contains("peek")?"\u25B4":"\u25BE",P.onclick=Q=>{Q.stopPropagation(),h.classList.toggle("peek"),P.textContent=h.classList.contains("peek")?"\u25B4":"\u25BE",h.scrollTop=0},y.appendChild(P)}}else h.classList.remove("peek");let O=p("#rc");if(innerWidth<=640&&!O.classList.contains("min")&&!Ve.done&&(Ve.done=1,p("#rcgrab").click()),innerWidth<=640){let y=p("#inf").getBoundingClientRect().bottom;h.style.top=Math.round(y+8)+"px",h.style.width="calc(100vw - 76px)",h.style.maxHeight=Math.max(140,p("#rc").getBoundingClientRect().top-y-16)+"px"}else if(innerHeight<=500){let y=p("#inf").getBoundingClientRect().bottom;h.style.top=Math.round(y+8)+"px",h.style.width="min(290px, 40vw)",h.style.maxHeight=innerHeight-y-20+"px"}else h.style.top="",h.style.width=Ke?"390px":"300px",h.style.maxHeight="";let Z=h.querySelector("[data-cx]");Z&&(Z.onclick=y=>{if(y.stopPropagation(),Ve.done=0,Ke||sn||j||Li&&!q&&J<0){Ke=sn=j=!1,q||J>=0||(Li=""),h._h="",Ve(),a();return}j=!1,sn=!1,Ke=!1,q=null,J=-1,V=null,Rt(),Ve(),w=0,a()}),Fd(h),h.querySelectorAll("[data-alarm]").forEach(y=>y.onclick=P=>{P.stopPropagation();let Q=q&&q.pat?q:ot.get(q&&q.vtid)||null;if(!Q)return;let rt=+y.dataset.alarm,Et=b[Q.pat.stops[rt]].id;an&&an.num===String(Q.num)&&an.sid===Et?(an=null,hn("Aviso de llegada quitado")):(an={num:String(Q.num),sid:Et,at:Date.now()},hn(`\u{1F514} Te aviso 2 min antes de llegar a ${b[Q.pat.stops[rt]].n}`),"Notification"in window&&Notification.permission==="default"&&Notification.requestPermission()),Do(),h._h="",Ve()});{let y=h.querySelector("[data-fav]");y&&(y.onclick=P=>{P.stopPropagation();let Q=q&&q.pat?q:ot.get(q&&q.vtid)||null;if(!Q)return;let rt=xi.findIndex(Et=>Et.num===String(Q.num));if(rt>=0)xi.splice(rt,1),hn("Quitado de tus trenes de cada d\xEDa");else{let Et=[...Vn.st,...pn.st,...Yt.st],Zt=Q.pat.stops.find(ne=>Et.includes(b[ne].id))??Q.pat.stops[0];xi.push({num:String(Q.num),fam:Q.fam,sid:b[Zt].id,t:at(Q.t0+Q.pat.t[2*Q.pat.stops.indexOf(Zt)+1])}),hn(`\u2B50 Te avisar\xE9 si el ${Q.fam} de las ${xi[xi.length-1].t} desde ${b[Zt].n} va con retraso`),"Notification"in window&&Notification.permission==="default"&&Notification.requestPermission()}Wm(),h._h="",Ve(),en(!0)})}{let y=h.querySelector("[data-share]");y&&(y.onclick=()=>{let P=Li,Q=_n.filter(ne=>(ne.fam||ne.tr&&ne.tr.fam)===P),rt=Q.filter(ne=>ne.dl>=5).sort((ne,yt)=>yt.dl-ne.dl),Et=H.alerts.filter(ne=>ne.fams.has(P)),Zt=`${P} a las ${at(de().min)}: ${Q.length} trenes, ${rt.length} con 5 min o m\xE1s${rt.length?" ("+rt.slice(0,4).map(ne=>`${ne.tr?ne.tr.num:ne.v.num} +${Math.round(ne.dl)}`).join(", ")+")":""}.${Et.length?" Aviso: "+Et[0].txt:" Sin avisos."}`;navigator.share?navigator.share({text:Zt}).catch(()=>{}):(navigator.clipboard&&navigator.clipboard.writeText(Zt),hn("Copiado: "+Zt.slice(0,60)+"\u2026"))})}{let y=h.querySelector("[data-cols]");y&&(y.onclick=()=>{ei.on=!ei.on,km(),h._h="",Ve()})}h.querySelectorAll("[data-gs]").forEach(y=>y.onclick=()=>{let P=+y.dataset.gs;Ke=!1,window.__rodPickStation(P),Object.assign(s,{tx:b[P].w[0],ty:b[P].w[1],dist:Math.min(s.dist,20)}),a()}),h.querySelectorAll("[data-sf]").forEach(y=>y.onclick=P=>{P.stopPropagation();let Q=y.dataset.sf;Q?ui.f.has(Q)?ui.f.delete(Q):ui.f.add(Q):ui.f.clear(),h._h="",Ve()}),h.querySelectorAll("[data-gt]").forEach(y=>y.onclick=()=>{let[P,Q]=y.dataset.gt.split("|"),rt=ot.get(Q);Kd({num:P,tid:H.vp.has(Q)?Q:"",tr:rt||null})}),h.querySelectorAll("[data-sethome]").forEach(y=>y.onclick=()=>Rh(J,y.dataset.sethome));let et=h.querySelector("[data-follow]");et&&(et.onclick=()=>{V=V===q?null:q,V?(s.dist=Math.min(s.dist,22),innerWidth<=640&&(h.classList.add("peek"),h.scrollTop=0,p("#rc").classList.contains("min")||p("#rcgrab").click())):h.classList.remove("peek"),h._h="",Ve(),a()})}window.__rodCard=Ve;try{let u=localStorage.getItem("rod_inf");(u==="mini"||u==null)&&p("#inf").classList.add("mini")}catch{}p("#inft").onclick=()=>{let u=p("#inf").classList.toggle("mini");try{localStorage.setItem("rod_inf",u?"mini":"")}catch{}(q||J>=0||j||sn)&&(h._h="",Ve())},p("#ver").onclick=()=>{sn=!0,Ke=!1,j=!1,h._h="",Ve()};let Fo={vacio:"\u{1F7E2}",lleno:"\u{1F7E0}",petado:"\u{1F534}",parado:"\u23F8\uFE0F",calor:"\u{1F975}",abordo:"\u26A0\uFE0F",gente:"\u{1F465}",retraso:"\u23F1\uFE0F",cancel:"\u2716\uFE0F",ascensor:"\u267F",via:"\u26A0\uFE0F"},qm=["vacio","lleno","petado","parado","calor","abordo"],Ym=["gente","retraso","cancel","ascensor","via"],Zm={vacio:"Va con sitio",lleno:"Va lleno",petado:"Muy lleno, cuesta subir",parado:"Parado sin moverse",calor:"Sin aire acondicionado",abordo:"Incidencia a bordo",gente:"Mucha gente esperando",retraso:"Anuncian retraso por megafon\xEDa",cancel:"Anuncian tren cancelado",ascensor:"Ascensor o escalera averiados",via:"Incidencia en la estaci\xF3n"},Oo=u=>(H.tipos||Zm)[u]||u,Sh=(u,_)=>(H.rep||[]).filter(S=>u&&S.num===String(u)&&!S.sid||_&&S.sid===String(_)&&!S.num||u&&_&&S.num===String(u)&&S.sid===String(_)),Nd=u=>{let _=Math.round((Date.now()+(H.repSkew||0)-u.at)/6e4);return _<1?"ahora":`hace ${_} min`},la=(()=>{try{return new Set(JSON.parse(localStorage.getItem("rod_votes")||"[]"))}catch{return new Set}})();function Bo(u,_,S){if(!H.url||!H.repOk)return"";let E=Sh(u,_),C=u?qm:Ym;return`<div class="crowd"><small>\u{1F465} Lo que dicen los viajeros${E.length?"":" \xB7 nadie ha avisado todav\xEDa"}</small>${E.map(I=>`<p><span>${Fo[I.kind]||"\u2022"} <b>${f(Oo(I.kind))}</b> <small>${I.up>1?I.up+" viajeros \xB7 ":""}${Nd(I)}</small></span>${la.has(I.id)?"<small>\u2713</small>":`<button type="button" data-rv="${I.id}:1" title="Lo confirmo">\u{1F44D}</button><button type="button" data-rv="${I.id}:-1" title="Ya no es as\xED">\u{1F44E}</button>`}</p>`).join("")}
      <details><summary>${u?"\xBFVas en este tren? Avisa a los dem\xE1s":"\xBFEst\xE1s en la estaci\xF3n? Avisa a los dem\xE1s"}</summary><div class="ckb">${C.map(I=>`<button type="button" data-rk="${I}" data-rn="${f(u||"")}" data-rs="${f(_||"")}" data-rl="${f(S||"")}">${Fo[I]} ${f(Oo(I))}</button>`).join("")}</div><small>An\xF3nimo \xB7 se borra solo en 90 min \xB7 sin texto libre</small></details></div>`}async function Ud(u,_){try{let E=await(await fetch(H.url.replace(/\/+$/,"")+_,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(u)})).json();if(!E.ok){hn(E.err||"No se ha podido enviar");return}if(E.id){la.add(E.id);try{localStorage.setItem("rod_votes",JSON.stringify([...la].slice(-300)))}catch{}}hn(_==="/vote"?"Gracias, voto guardado":E.n>1?`Gracias \xB7 ya sois ${E.n} avisando de lo mismo`:"Gracias, aviso enviado");let C=await wt(H.url.replace(/\/+$/,""),"/reports.json");C&&C.items&&(H.rep=C.items),h._h="",Ve(),en(!0)}catch{hn("Sin conexi\xF3n con el puente")}}function Fd(u){u.querySelectorAll("[data-rk]").forEach(_=>_.onclick=S=>{S.stopPropagation(),_.disabled=!0,Ud({kind:_.dataset.rk,num:_.dataset.rn,sid:_.dataset.rs,line:_.dataset.rl},"/report")}),u.querySelectorAll("[data-rv]").forEach(_=>_.onclick=S=>{S.stopPropagation();let[E,C]=_.dataset.rv.split(":");la.add(+E);try{localStorage.setItem("rod_votes",JSON.stringify([...la].slice(-300)))}catch{}Ud({id:+E,v:+C},"/vote")})}let Od=0;function hn(u){let _=p("#toast");_||(_=document.createElement("div"),_.id="toast",document.body.appendChild(_)),_.textContent=u,_.className="on",clearTimeout(Od),Od=setTimeout(()=>{_.className=""},2600)}function ko(u){return u.src?`<b class="asrc ${u.src==="Adif"?"adif":""}">${u.src==="Adif"?"Adif \xB7 v\xEDa":f(u.src)}</b>`:""}function zo(u){if(!u.when)return"";let[_,S]=u.when.split("T"),E=mt(new Date),C=E.ymd.slice(0,4)+"-"+E.ymd.slice(4,6)+"-"+E.ymd.slice(6,8);if(_===C&&S){let I=Math.round(E.min-(+S.slice(0,2)*60+ +S.slice(3,5)));return I<1?"ahora":I<60?`hace ${I} min`:`hoy a las ${S.slice(0,5)}`}return`${_.slice(8,10)}/${_.slice(5,7)}${S?" "+S.slice(0,5):""}`}function bh(){let u=p("#alr");if(!u)return;let _=H.alerts.filter(S=>[...S.fams].some(E=>Wt.has(E))).length;u.hidden=!_,u.textContent=`\u26A0\uFE0F ${_} aviso${_===1?"":"s"}`}{let u=p("#alrslot");u&&u.appendChild(p("#alr"))}p("#alr").onclick=()=>{sn=!1,Ke=!1,j=!0,Ve()},p("#wcopy").onclick=async()=>{let u=p("#wcode").textContent;try{await navigator.clipboard.writeText(u),p("#wcopy").textContent="Copiado \u2713"}catch{let S=document.createRange();S.selectNodeContents(p("#wcode"));let E=getSelection();E.removeAllRanges(),E.addRange(S),p("#wcopy").textContent="Selecciona y copia"}setTimeout(()=>p("#wcopy").textContent="Copiar c\xF3digo",2500)};let Jm=zt.get("71801");function Km(u,_){let S=b[u].id,E=ti.get(S);!(qt()&&H.url)||E&&(E.loading||Date.now()-E.at<3e4)||(ti.set(S,{...E||{},loading:!0,at:E?E.at:0}),wt(H.url.replace(/\/+$/,""),"/departures.json?stationId="+S).then(C=>{ti.set(S,{at:Date.now(),d:C}),_&&_()}).catch(()=>ti.set(S,{at:Date.now(),err:1})))}let Bd=u=>+u.slice(0,2)*60+ +u.slice(3,5),ca={k:-2,m:null};function jm(u){let _=t.days.indexOf(de().ymd);if(ca.k!==_){ca.k=_,ca.m=new Map;for(let S of K[_]||[])ca.m.set(String(S.num),S)}return ca.m.get(String(u))||null}let Fs={at:0,m:new Map};function Mh(u){if(Date.now()-Fs.at>6e4){Fs.at=Date.now(),Fs.m=new Map;let S=de(),E=t.days.indexOf(S.ymd);if(E>=0)for(let C of K[E]){let I=S.min-C.t0;if(I<C.pat.t[1]+3||I>C.pat.t[C.pat.t.length-2]-3)continue;let F=Fs.m.get(C.fam)||[0,0];F[0]++,H.vp.has(C.tid)&&F[1]++,Fs.m.set(C.fam,F)}}let _=Fs.m.get(u);return _&&_[0]>=3?_[1]/_[0]:1}function wh(u,_){let S=de(),E=qt()&&S.live&&!_,C=ti.get(b[u].id),I=[],F=new Map([...H.vp.values()].map(B=>[String((ot.get(B.tid)||{}).num||B.num),B]));if(E&&C&&C.d&&Array.isArray(C.d.trains))for(let B of C.d.trains){let Z=(B.departureDateHourSelectedStation||"").slice(11,16);if(!Z)continue;let et=String(B.commercialNumber||B.technicalNumber||""),y=F.get(et),P=y?H.delays.get(y.tid):null,Q=Math.max(typeof P=="number"?Math.max(0,P/60):0,y&&y.pre&&y.preDl||0),rt=Bd(Z);rt<S.min-720&&(rt+=1440),I.push({sm:rt,est:rt+Q,dl:Q,fam:(B.line||{}).id||"",dest:(B.destinationStation||{}).name||"",destId:(B.destinationStation||{}).id||"",plat:B.platformSelectedStation||"",cancel:!!B.trainCancelled,obs:B.trainObservations||"",live:!!y,num:et,tid:y?y.tid:"",tr:y&&ot.get(y.tid)||jm(et),src:"oficial"})}else{let B=t.days.indexOf(S.ymd);if(B<0)return I;let Z=(et,y)=>{for(let P of et){let Q=P.pat.stops.indexOf(u);if(Q<0||Q===P.pat.stops.length-1)continue;let rt=Ce(P),Et=typeof rt=="number"?Math.max(0,rt/60):0,Zt=P.t0+P.pat.t[2*Q+1]-y;if(Zt+Et<S.min-1||Zt>S.min+360)continue;let ne=P.pat.stops[P.pat.stops.length-1];I.push({sm:Zt,est:Zt+Et,dl:Et,fam:P.fam,dest:b[ne].n,destId:b[ne].id,plat:"",cancel:rt==="X",obs:"",live:H.vp.has(P.tid),num:P.num,tid:P.tid,tr:P,src:"horario"})}};Z(K[B],0),B>0&&Z(K[B-1],1440),B+1<t.days.length&&S.min>1080&&Z(K[B+1],-1440)}if(E){let B=new Set(I.map(y=>y.num)),Z=t.days.indexOf(S.ymd),et=(y,P)=>{for(let Q of y||[]){if(B.has(String(Q.num)))continue;let rt=Q.pat.stops.indexOf(u);if(rt<0||rt===Q.pat.stops.length-1)continue;let Et=Q.t0+Q.pat.t[2*rt+1]-P;if(Et<S.min-45||Et>S.min+1||!H.vp.get(Q.tid))continue;let ne=H.delays.get(Q.tid),yt=typeof ne=="number"?Math.max(0,ne/60):0,St=Q.pat.stops[Q.pat.stops.length-1];I.push({sm:Et,est:Et+yt,dl:yt,fam:Q.fam,dest:b[St].n,destId:b[St].id,plat:"",cancel:!1,obs:"",live:!0,num:Q.num,tid:Q.tid,tr:Q,src:"horario"})}};Z>=0&&(et(K[Z],0),Z>0&&et(K[Z-1],1440));for(let y of I){let P=y.tid&&H.vp.get(y.tid),Q=y.tr?y.tr.pat.stops.indexOf(u):-1;y.passed=!!(P&&Q>=0&&!P.pre&&P.next!=null&&P.next>=0&&P.next>Q&&P.atStop!==Q),!y.passed&&y.live&&y.est<S.min&&(y.est=S.min,y.late=!0),y.passed&&(y.gone=!0)}}let O=I.filter(B=>B.gone?S.min-B.est<20:B.est>=S.min-.5).sort((B,Z)=>B.est-Z.est);{let B=O.filter(Z=>Z.gone);if(B.length>2){let Z=new Set(B.slice(0,B.length-2));O=O.filter(et=>!Z.has(et))}}if(!O.filter(B=>!B.gone).length&&I.length&&I[0].src==="oficial"&&!_)return wh(u,!0);for(let B of O){let Z=B.num&&vh(B.num);Z&&Z.cx&&(B.cancel=!0,B.cxWhy=Z.txt)}if(qt()&&S.live){let B=t.days.indexOf(S.ymd);for(let Z of O){if(Z.live||Z.cancel||!Z.tr)continue;let et=Z.tr.day===B-1?1440:Z.tr.day===B+1?-1440:0,y=Z.tr.t0+Z.tr.pat.t[1]-et+(Z.dl||0);Z.ghost=S.min>y+3&&Mh(Z.fam)>=.7}}if(_||(O=O.concat(M(u,S.min-.5,S.min+360)).sort((B,Z)=>B.est-Z.est)),O.some(B=>B.src==="oficial")){let B=Math.max(...O.map(et=>et.sm)),Z=new Set(O.map(et=>et.num));O=O.concat(wh(u,!0).filter(et=>et.sm>B&&!Z.has(String(et.num))))}return O}let kd=(u,_,S,E)=>{let C={key:u,ico:_,name:S,st:[],i:0,walk:10,open:!1};try{let I=JSON.parse(localStorage.getItem("rod_"+u)||"null");I&&Object.assign(C,I)}catch{}return!C.st.length&&E&&(C.st=E),C},Vn=kd("home","\u{1F3E0}","Casa",["79410","79412"]),pn=kd("work","\u{1F4BC}","Trabajo",null),Yt={key:"near",ico:"\u{1F4CD}",name:"Cerca de ti",st:[],i:0,walk:0,open:!1,dist:{},fix:0,err:""},ha=[Yt,Vn,pn];try{Yt.homeW=JSON.parse(localStorage.getItem("rod_homew")||"null")}catch{}Vn.open=!1,pn.open=!1;function zd(u,_){let S=gt(u,_),E=gt(u,_+.009);return 1/Math.hypot(E[0]-S[0],E[1]-S[1])}function Eh(u){if(!navigator.geolocation){Yt.err="Este navegador no da la ubicaci\xF3n",en(!0);return}navigator.geolocation.getCurrentPosition(_=>{let{longitude:S,latitude:E}=_.coords,C=gt(S,E),I=zd(S,E),F=b.map((et,y)=>[y,Math.hypot(et.w[0]-C[0],et.w[1]-C[1])*I]).filter(([et])=>b[et].fams.size).sort((et,y)=>et[1]-y[1]),O=F.filter(([,et],y)=>y===0||et<Math.max(2.5,F[0][1]*1.6)).slice(0,3),B=Yt.st[0]!==b[O[0][0]].id;Yt.w=C,Yt.k=I,Yt.acc=_.coords.accuracy!=null?_.coords.accuracy:999,Yt.st=O.map(([et])=>b[et].id),Yt.dist=Object.fromEntries(O.map(([et,y])=>[b[et].id,y])),Yt.fix=Date.now(),Yt.err="",B&&(Yt.i=0);let Z=[Vn,pn].find(et=>et.st.includes(Yt.st[0])&&Yt.dist[Yt.st[0]]<1.5);en(!0)},_=>{Yt.err=_.code===1?"Sin permiso de ubicaci\xF3n":"No se ha podido obtener la ubicaci\xF3n",en(!0)},{enableHighAccuracy:!1,maximumAge:6e4,timeout:12e3})}let Vd=u=>Math.max(1,Math.round(u*1.3/.08));setTimeout(()=>Eh(!0),400);let Ui={fixes:[],tid:"",no:new Map,shown:""};function Qm(){let u=Ui.fixes;if(u.length<2)return;let _=u[u.length-1],S=u.slice().reverse().find(et=>_.t-et.t>=8e3&&_.t-et.t<=9e4);if(!S)return;let E=Math.hypot(_.w[0]-S.w[0],_.w[1]-S.w[1])*_.k,C=_.spd!=null&&_.spd>0?_.spd*3.6:E/((_.t-S.t)/36e5);if(C<22||C>200)return;let I=[_.w[0]-S.w[0],_.w[1]-S.w[1]],F=null,O=1.2;for(let et of _n){if(!et.tr)continue;let y=Math.hypot(et.p.w[0]-_.w[0],et.p.w[1]-_.w[1])*_.k;if(y>O)continue;let P=et.real?et.v.next:et.p.next;if(P==null||P<0)continue;let Q=b[et.tr.pat.stops[P]].w,rt=[Q[0]-et.p.w[0],Q[1]-et.p.w[1]];if(rt[0]*I[0]+rt[1]*I[1]<=0)continue;let Et=String(et.tr.num);(Ui.no.get(Et)||0)>Date.now()||(O=y,F=et)}if(!F)return;let B=String(F.tr.num);if(Ui.tid===B)return;Ui.tid=B,sn=j=Ke=!1,J=-1,q=F.tr,V=F.tr,Object.assign(s,{tx:F.p.w[0],ty:F.p.w[1],dist:Math.min(s.dist,22)}),innerWidth<=640&&(h.classList.add("peek"),p("#rc").classList.contains("min")||p("#rcgrab").click());{let et=F.tr.pat.stops,y=F.real?F.v.next:F.p.next,P=[...Vn.st,...pn.st],Q=et.findIndex((rt,Et)=>Et>=y&&P.includes(b[rt].id));Q>0&&!(an&&an.num===B)&&(an={num:B,sid:b[et[Q]].id,at:Date.now()},Do())}Rt(),h._h="",Ve(),w=0,a();let Z=p("#onb");Z||(Z=document.createElement("div"),Z.id="onb",document.body.appendChild(Z)),Z.innerHTML=`\u{1F686} Parece que vas en el <b>${f(F.tr.fam)} ${f(F.tr.num)}</b> hacia ${f(b[F.tr.pat.stops[F.tr.pat.stops.length-1]].n)} \xB7 lo sigo${an&&an.num===B?` \xB7 te aviso al llegar a ${f(b[zt.get(an.sid)].n)}`:""} <button type="button" data-onb-no>No es este</button><button type="button" data-onb-x>\u2715</button>`,Z.className="on",Z.querySelector("[data-onb-no]").onclick=()=>{Ui.no.set(B,Date.now()+20*6e4),Ui.tid="",V=null,q=null,h._h="",Ve(),Z.className=""},Z.querySelector("[data-onb-x]").onclick=()=>{Z.className=""},setTimeout(()=>{Z.className=""},15e3)}if(navigator.geolocation&&navigator.geolocation.watchPosition){let u=null,_=()=>{u==null&&(u=navigator.geolocation.watchPosition(E=>{let{longitude:C,latitude:I}=E.coords,F={t:E.timestamp||Date.now(),w:gt(C,I),k:zd(C,I),spd:E.coords.speed};Ui.fixes.push(F),Ui.fixes=Ui.fixes.filter(O=>F.t-O.t<12e4);try{qt()&&de().live&&Qm()}catch{}},()=>{},{enableHighAccuracy:!0,maximumAge:5e3,timeout:2e4}))},S=()=>{u!=null&&(navigator.geolocation.clearWatch(u),u=null)};setTimeout(_,3e3),document.addEventListener("visibilitychange",()=>{document.hidden?S():(Ui.fixes=[],_())})}setInterval(()=>{!document.hidden&&(Date.now()-Yt.fix>11e4||ha.some(u=>u.goAt))&&Eh(!1)},3e4);let es=u=>{try{localStorage.setItem("rod_"+u.key,JSON.stringify({st:u.st,i:u.i,walk:u.walk,open:u.open,hide:u.hide||"",goAt:u.goAt||0}))}catch{}},Th=u=>u.st.length?zt.get(u.st[u.i]||u.st[0]):null;function Hd(u,_,S,E){if(E&&_.bus)return _.bstops.slice(1).some(F=>E.has(F))?"to":"out";if(E&&_.tr){let F=_.tr.pat.stops,O=F.indexOf(u);if(O>=0&&F.slice(O+1).some(B=>E.has(B)))return"to"}if(E&&_.tr)return"out";let C=zt.get(_.destId)??b.findIndex(F=>F.n===_.dest);if(C<0||C==null||S==null)return"otros";let I=F=>Math.hypot(b[F].w[0]-b[S].w[0],b[F].w[1]-b[S].w[1]);return I(C)<I(u)?"to":"out"}let ua=u=>u<1?"ahora":u<60?Math.round(u)+" min":Math.floor(u/60)+" h "+String(Math.round(u%60)).padStart(2,"0"),Gd=0,tg=/sin servicio|sense servei|suspend|interromp|interrump|no circula|no se puede garantizar|no es pot garantir/i;function eg(u,_,S){let E=Th(u);if(u===Yt){if(E==null)return`<div class="hplace"><button type="button" class="hhead hnew" data-hloc><span class="hico">\u{1F4CD}</span><span class="htit"><b>Cerca de ti</b><small>${Yt.err?f(Yt.err)+" \xB7 toca para reintentar":"Buscando tu ubicaci\xF3n\u2026"}</small></span><span class="hchev">\u27F3</span></button></div>`;if([Vn,pn].find(Ht=>Ht.st.includes(Yt.st[0])&&Yt.dist[Yt.st[0]]<1.5))return"";u.walk=Vd(Yt.dist[u.st[u.i]]||0)}if(E==null){let ft=Yt.st.length?zt.get(Yt.st[0]):null,Ht=u===pn?Vn:pn,Te=ft!=null&&!Ht.st.includes(Yt.st[0]);return`<div class="hplace"><div class="hhead hnew"><span class="hico">${u.ico}</span><span class="htit"><b>${u.name}</b><small>${Te?`Est\xE1s en <b>${f(b[ft].n)}</b>`:"Elige tu estaci\xF3n"}</small></span>${Te?`<button type="button" class="hpick" data-hnear="${u.key}">Usar esta</button>`:""}<button type="button" class="hpick alt" data-hset="${u.key}">${Te?"Otra\u2026":"Elegir"}</button></div></div>`}Km(E,()=>en(!0));let C=u===Yt?null:u===Vn?pn:Vn,I=C?Th(C):null,F=I!=null&&I!==E?I:Jm,O=I!=null&&I!==E?C===pn?"el trabajo":"casa":"Barcelona",B=b[E].fams,Z=new Set([...B].filter(ft=>Wt.has(ft))),et=Z.size<B.size,y=!1;Z.size||(Z=new Set(B),et=!1,y=!0);let P=Yt.w?Math.hypot(b[E].w[0]-Yt.w[0],b[E].w[1]-Yt.w[1])*Yt.k:null,Q=P!=null&&Date.now()-Yt.fix<10*6e4,rt=u===Yt||Q&&P>3&&!u.goAt,Et=u!==Yt&&Q&&P<.08&&Yt.acc<=40&&!(u===Vn&&Yt.homeW&&Math.hypot(Yt.homeW[0]-Yt.w[0],Yt.homeW[1]-Yt.w[1])*Yt.k<.05),Zt=u.goAt?(Date.now()-u.goAt)/6e4:null;Zt!=null&&(Zt>60||Et)&&(u.goAt=0,es(u));let ne=!Et&&u!==Yt&&!!u.goAt,yt=ne?Q&&P<=3?Vd(P):Math.max(0,u.walk-Zt):0,St=wh(E),ae=St.filter(ft=>!$[ft.fam]||Wt.has(ft.fam)||y),me=rt||Et?0:ne?yt:u.walk,Ee=H.alerts.filter(ft=>[...ft.fams].some(Ht=>Z.has(Ht))||ft.stops&&ft.stops.has(E)),dn=Ee.some(ft=>tg.test(ft.txt)),Ne={to:[],out:[],otros:[],all:ae},oe=O!=="Barcelona"?new Set(C.st.map(ft=>zt.get(ft)).filter(ft=>ft!=null)):null;ae.forEach(ft=>Ne[Hd(E,ft,F,oe)].push(ft));let Fi="";if(oe&&!Ne.to.length&&ae.length<St.length){let ft=St.filter(Ht=>!ae.includes(Ht)&&Hd(E,Ht,F,oe)==="to");ft.length&&(Ne.to=ft,Fi=[...new Set(ft.map(Ht=>Ht.fam))].sort(L).join(", "))}let hr=ft=>{if(ft==="all")return"Pr\xF3ximas salidas \xB7 todas las direcciones";let Ht=He=>(He.find(fi=>fi.fam)||{}).fam;if(ft==="to")return"Hacia "+Ni(O==="Barcelona"?"Barcelona":b[F].n,Ht(Ne.to)||[...Z][0])+(O!=="Barcelona"?` <small>${O}</small>`:"");let Te=[];for(let He of Ne[ft])Te.some(fi=>fi[0]===He.dest)||Te.push([He.dest,He.fam]);return Te.length?"Hacia "+Te.slice(0,2).map(([He,fi])=>Ni(He,fi)).join(" "):"Otros"},tn=ft=>{let Ht=Ne[ft].find(En=>!En.cancel&&!En.gone&&En.est-_.min>=me);if(!Ht){let En=Ne[ft].find(fg=>!fg.cancel);return En&&!rt?{cls:"v-no",big:"No llegas",small:`El pr\xF3ximo (${at(En.est)}) sale en ${ua(En.est-_.min)}: no da tiempo a pie`}:{cls:"v-no",big:"Sin trenes",small:"No hay salidas pr\xF3ximas en este sentido"}}let Te=Ht.est-_.min-me,He=rt||Et?"v-info":ne?Te<1.5?"v-warn":"v-ok":Te<1.5?"v-bad":Te<5?"v-warn":"v-ok",fi=Ht.ghost?Ne[ft].find(En=>!En.cancel&&!En.ghost&&En.live&&En.est>Ht.est):null;return{cls:He,ghost:!!Ht.ghost,big:rt||Et?Te<1?"Sale ahora":"Sale en "+ua(Te):ne?Te<1.5?"\xA1Date prisa!":"Llegas con "+ua(Te)+" de margen":Te<1.5?"\xA1Sal ya!":"Sal en "+ua(Te),warn:Ht.ghost?`\u26A0\uFE0F Sin se\xF1al de Renfe: puede no pasar${fi?` \xB7 el siguiente en marcha sale a las ${at(fi.est)}`:""}`:dn?"\u26A0\uFE0F Servicio afectado por una incidencia":"",small:`${Ht.bus?"\u{1F68C} autob\xFAs \xB7 ":""}${at(Ht.est)} \xB7 ${Ht.fam} a ${Ht.dest}${Ht.plat?" \xB7 v\xEDa "+Ht.plat:""}${Ht.dl>=1?` \xB7 +${Math.round(Ht.dl)} min`:""}${Ht.arr!=null?` \xB7 llegas a las ${at(Ht.arr)}`:""}`,x:Ht}},og=oe||new Set([F]),lg=ft=>{let Ht=ft.tr;if(!Ht)return null;let Te=Ht.pat.stops,He=Te.indexOf(E);if(He<0)return null;let fi=-1;for(let En=He+1;En<Te.length;En++)if(og.has(Te[En])){fi=En;break}return fi<0?null:ft.est+(Ht.pat.t[2*fi]-Ht.pat.t[2*He+1])};Ne.to.forEach(ft=>{ft.arr=lg(ft)});let Ph=Ne.out.length?"out":"otros",ni=tn("to"),Lh=tn(Ph);if(!rt&&u!==Yt&&ni.x&&ag(u,ni.x,b[E].n,me),Et||u===Yt&&Yt.acc<=40&&(Yt.dist[u.st[u.i]]||9)<.08){for(let ft of[ni.x,Lh.x].concat(u===Yt?[tn("all").x]:[]))if(ft&&!ft.cancel&&ft.est-_.min<=2&&ft.est-_.min>-.5){let Ht="w"+ft.num+"|"+Math.round(ft.sm);Vo.has(Ht)||(Vo.add(Ht),yh(`\u{1F686} Llega tu tren \xB7 ${ft.fam} a ${ft.dest}`,`En unos ${Math.max(0,Math.round(ft.est-_.min))} min a ${b[E].n}${ft.plat?" \xB7 v\xEDa "+ft.plat:""}`))}}let tf=qt()&&_.live,ef=Z.size===1,cg=ft=>{let Ht=ft.est-_.min;return rt?ft.cancel?"cx":Ht<0?"u-miss":"u-info":ft.cancel?"cx":Ht<me?"u-miss":Ht<me+1.5?"u-now":Ht<me+5?"u-soon":"u-ok"},hg=ft=>{if(ft.gone)return`<li class="hr u-gone${ft.live?" on":""}${oa(ft)?" sel":""} go" data-dk="${S.push(ft)-1}" title="Ya ha salido: toca para ver d\xF3nde va"><span class="hrt"><b>${at(ft.est)}</b><small>sali\xF3 hace ${Math.max(1,Math.round(_.min-ft.est))} min</small></span><span class="hrd">${Ni((ef?"":ft.fam+" \xB7 ")+ft.dest,ft.fam)}<small class="hro">tren ${f(ft.num)}</small></span><span class="hrm">${ft.dl>=1?`<em class="dl ${ts(ft.dl)}">+${Math.round(ft.dl)}</em>`:""}</span></li>`;let Ht=!ft.cancel&&ft.est-_.min<me,Te=Sh(ft.num,"");return`<li class="hr ${cg(ft)}${ft.live?" on":""}${ft.ghost?" gh":""}${oa(ft)?" sel":""}${xi.some(He=>He.num===String(ft.num))?" fav":""} go" style="--lc:${$[ft.fam]||"#6b7385"}" data-dk="${S.push(ft)-1}" title="${ft.cancel?"Cancelado":Ht?"No llegas a pie":"Ver este tren en el mapa"}"><span class="hrt"><b>${ft.cancel?"\u2715":Ht?at(ft.est):ua(ft.est-_.min)}</b><small>${ft.cancel?"cancelado":ft.late?"a\xFAn no ha salido":Ht?"no llegas":ft.ghost?'<i class="ghs" title="Deber\xEDa estar circulando y Renfe no da su posici\xF3n">sin se\xF1al</i>':at(ft.est)}</small></span><span class="hrd">${ft.bus?'<i class="bus" title="Autob\xFAs que sustituye al tren por obras">\u{1F68C}</i>':""}${Ni((ef?"":ft.fam+" \xB7 ")+ft.dest,ft.fam)}${Te.length?`<i class="cr" title="${f(Te.map(He=>Oo(He.kind)).join(" \xB7 "))}">${Te.slice(0,2).map(He=>Fo[He.kind]).join("")}</i>`:""}${ft.arr!=null?`<small class="hro">llegas a las ${at(ft.arr)}${(()=>{let He=ft.num&&hi(ft.num);return He&&He.n>=3&&He.late/He.n>=.5?` \xB7 <b class="slate">suele ir tarde (${He.late}/${He.n})</b>`:""})()}</small>`:""}${ft.obs?`<small class="hro">${f(ft.obs)}</small>`:""}</span><span class="hrm">${!ft.cancel&&ft.dl>=1?`<em class="dl ${ts(ft.dl)}">+${Math.round(ft.dl)}</em>`:""}${ft.plat?`<i class="via">v\xEDa ${f(ft.plat)}</i>`:""}</span></li>`},fa=(ft,Ht,Te)=>`<div class="hcol"><div class="hdir">${hr(ft)}${Te?`<button type="button" class="hhide" data-hhide="${u.key}:${Te}" title="Ocultar esta direcci\xF3n">\u2715</button>`:""}</div><div class="hv ${Ht.cls}${Ht.ghost?" gh":""}${Ht.x?" go":""}"${Ht.x?` data-dk="${S.push(Ht.x)-1}"`:""}><b>${Ht.big}</b><small>${f(Ht.small)}</small>${Ht.warn?`<span class="hvw">${f(Ht.warn)}</span>`:""}</div><ol>${Ne[ft].slice(0,(u.more?ft==="all"||u.hide?20:10:ft==="all"?7:u.hide?8:4)+Ne[ft].filter(He=>He.gone).length).map(hg).join("")||"<li><span>\u2014</span></li>"}</ol></div>`;if(u===Yt){let ft=tn("all");var ug=ft.x?`${ft.big} \xB7 <b>${at(ft.x.est)}</b> ${f(ft.x.fam)} a ${f(ft.x.dest)}${ft.x.plat?" \xB7 v\xEDa "+f(ft.x.plat):""}`:ft.big}let dg=u===Yt?ug:ni.x?`${ni.big} \xB7 <b>${at(ni.x.est)}</b>${ni.x.arr!=null?` \u2192 llegas a las <b>${at(ni.x.arr)}</b>`:""} hacia ${f(O)}${ni.x.plat?" \xB7 v\xEDa "+f(ni.x.plat):""}`:"Sin trenes hacia "+f(O);return`<div class="hplace ${u.open?"open":""}"><button type="button" class="hhead" data-ht="${u.key}"><span class="hico">${u.ico}</span><span class="htit"><b>${f(b[E].n)}</b><small class="c${dn?"bad":ni.cls.slice(2)}">${dg}</small></span><span class="hchev">\u25BE</span></button>`+(u.open?`
      <div class="hbody">
        ${u.st.length>1?`<div class="hst">${u.st.map((ft,Ht)=>{let Te=zt.get(ft);return Te==null?"":`<button type="button" data-hs="${u.key}:${Ht}" class="${Ht===u.i?"on":""}">${f(b[Te].n)}</button>`}).join("")}</div>`:""}
        ${u===Yt?`<div class="hwalk">\u{1F4CD} A ${(()=>{let ft=Yt.dist[u.st[u.i]]||0;return ft<1?Math.round(ft*100)*10+" m":ft.toFixed(1).replace(".",",")+" km"})()} \xB7 unos <b>${u.walk} min</b> a pie</div>`:""}
        ${Et?`<div class="hwalk away">\u{1F689} Est\xE1s en la estaci\xF3n: horas de salida del tren \xB7 <a data-hnotst="${u.key}">no, estoy en casa</a></div>`:ne?`<div class="hwalk away">\u{1F6B6} De camino \xB7 te quedan unos <b>${Math.round(yt)} min</b>${Q&&P<=3?" (seg\xFAn tu ubicaci\xF3n)":""} \xB7 <a data-hgo="${u.key}:0">cancelar</a></div>`:""}${rt&&u!==Yt?`<div class="hwalk away">\u{1F4CD} Est\xE1s a ${P<10?P.toFixed(1).replace(".",","):Math.round(P)} km: horas de salida del tren, sin contar el camino</div>`:""}<div class="hwalk"${rt||Et||ne?" hidden":""}><button type="button" class="hgo" data-hgo="${u.key}:1">\u{1F6B6} Ya he salido</button> Tardo <button type="button" data-hw="${u.key}:-1">\u2212</button><b>${me} min</b><button type="button" data-hw="${u.key}:1">+</button> a pie hasta la estaci\xF3n</div>
        ${(()=>{let ft=xi.filter(Ht=>u.st.includes(Ht.sid));return ft.length?`<div class="hfav">${ft.map(Ht=>{let Te=ae.find(He=>String(He.num)===Ht.num);return`\u2B50 <b>${Ht.t}</b> ${f(Ht.fam)} ${Te?Te.cancel?'<em class="dl d-hi">cancelado</em>':Te.gone?"ya ha salido":Te.dl>=1?`<em class="dl ${ts(Te.dl)}">+${Math.round(Te.dl)}</em> sale a las ${at(Te.est)}`:'<b class="okc">en hora</b>':"<small>hoy no circula o a\xFAn falta</small>"}`}).join("<br>")}</div>`:""})()}
        ${et?`<div class="hflt">Solo ${[...Z].sort(L).map(Yn).join(" ")} \xB7 filtro de l\xEDneas activo${Fi?` \xB7 hacia ${O} se muestran ${Fi} (tu filtro no va hasta all\xED)`:""}</div>`:y?`<div class="hflt">El filtro (${[...Wt].sort(L).slice(0,3).map(Yn).join(" ")}) no pasa por aqu\xED: se ven todas tus l\xEDneas</div>`:""}
        ${Ee.length?`<div class="hal ${dn?"bad":""}">\u26A0\uFE0F ${ko(Ee[0])} ${f(Ee[0].txt)} <small>${zo(Ee[0])}</small>${Ee.length>1?` <a data-hal>+${Ee.length-1} avisos</a>`:""}</div>`:`<div class="hok">\u2713 Sin avisos para ${[...Z].sort(L).join(", ")}</div>`}
        ${(()=>{let ft=u.st.flatMap(Ht=>Sh("",Ht));return ft.length?`<div class="hcr">${ft.slice(0,3).map(Ht=>`${Fo[Ht.kind]} <b>${f(Oo(Ht.kind))}</b> <small>${Ht.up>1?Ht.up+" viajeros \xB7 ":""}${Nd(Ht)}</small>`).join("<br>")}</div>`:""})()}
        ${u===Yt?`<div class="hcols one">${fa("all",tn("all"))}</div>`:u.hide==="out"?`<div class="hcols one">${fa("to",ni)}</div><a class="hshow" data-hshow="${u.key}">\u21BA Mostrar la otra direcci\xF3n</a>`:u.hide==="to"?`<div class="hcols one">${fa(Ph,Lh)}</div><a class="hshow" data-hshow="${u.key}">\u21BA Mostrar la otra direcci\xF3n</a>`:`<div class="hcols">${fa("to",ni,"to")}${fa(Ph,Lh,"out")}</div>`}
        ${ae.length>(u===Yt?7:8)?`<button type="button" class="hmore" data-hmore="${u.key}">${u.more?"\u25B4 Menos trenes":"\u25BE M\xE1s trenes \xB7 pr\xF3ximas horas"}</button>`:""}
        <div class="hsrc"><span class="hsrcT" hidden title="${tf?ti.get(b[E].id)?.d?"Salidas oficiales de Rodalies en directo":"Horario + retrasos mientras cargan las salidas oficiales":"Previsi\xF3n seg\xFAn horario (sin tiempo real)"} \xB7 \u25CF = tren circulando">${tf?ti.get(b[E].id)?.d?"\u25CF oficial en directo":"\u25CF horario + retrasos":"seg\xFAn horario"}</span><a data-hmap="${E}">\u{1F5FA}\uFE0F mapa</a>${u===Yt?"<a data-hloc>\u{1F4CD} actualizar</a>":`<a data-hset="${u.key}">\u270E cambiar</a>`}${u===pn?'<a data-hdel="work">\u2715 quitar</a>':""}</div>
      </div>`:"")+"</div>"}let vi={on:(()=>{try{return localStorage.getItem("rod_push")==="1"}catch{return!1}})(),busy:!1},Wd=/iPhone|iPad|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,$d=()=>matchMedia("(display-mode: standalone)").matches||navigator.standalone===!0,da=()=>{let u=[...Vn.st,...pn.st],_=new Set;return u.forEach(S=>{let E=zt.get(S);E!=null&&b[E].fams.forEach(C=>_.add(C))}),{stations:u,lines:[..._].sort(L)}},ng=u=>Uint8Array.from(atob(u.replace(/-/g,"+").replace(/_/g,"/")+"===".slice((u.length+3)%4)),_=>_.charCodeAt(0));async function Xd(){return!("serviceWorker"in navigator)||!("PushManager"in window)||location.protocol!=="https:"?null:await navigator.serviceWorker.getRegistration()||navigator.serviceWorker.register("./sw.js")}async function qd(u){let S=await(await fetch(H.url.replace(/\/+$/,"")+"/push/subscribe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sub:u.toJSON(),...da()})})).json();if(!S.ok)throw new Error(S.err||"error")}let Dn={on:(()=>{try{return localStorage.getItem("rod_ln")==="1"}catch{return!1}})(),seen:null};function ig(){let{lines:u,stations:_}=da(),S=new Set(u),E=new Set(_.map(F=>zt.get(F))),C=H.alerts.filter(F=>[...F.fams].some(O=>S.has(O))||[...F.stops||[]].some(O=>E.has(O)));if(!Dn.seen){try{Dn.seen=new Set(JSON.parse(localStorage.getItem("rod_lnseen")||"[]"))}catch{Dn.seen=new Set}if(!Dn.seen.size){C.forEach(F=>Dn.seen.add(F.id+"|"+F.txt.length)),Yd();return}}let I=C.filter(F=>!Dn.seen.has(F.id+"|"+F.txt.length));if(I.length&&(I.forEach(F=>Dn.seen.add(F.id+"|"+F.txt.length)),Yd(),!(!Dn.on||!("Notification"in window)||Notification.permission!=="granted")))for(let F of I.slice(0,3)){let O=(F.src==="Adif"?"Adif \xB7 v\xEDa":"Rodalies")+(F.fams.size?" \xB7 "+[...F.fams].sort(L).slice(0,4).join(" "):""),B={body:F.txt.slice(0,240),icon:"icons/icon-192.png",tag:"rod-"+F.id};(navigator.serviceWorker&&navigator.serviceWorker.getRegistration?navigator.serviceWorker.getRegistration():Promise.resolve(null)).then(Z=>Z?Z.showNotification(O,B):new Notification(O,B)).catch(()=>{try{new Notification(O,B)}catch{}})}}function Yd(){try{localStorage.setItem("rod_lnseen",JSON.stringify([...Dn.seen].slice(-400)))}catch{}}async function sg(){if(Dn.on)Dn.on=!1,hn("Avisos desactivados");else{if(!("Notification"in window)){hn(Wd&&!$d()?"En iPhone: Compartir \u2192 A\xF1adir a pantalla de inicio y activa los avisos desde la app":"Este navegador no permite avisos");return}if(await Notification.requestPermission()!=="granted"){hn("Sin permiso para avisos: act\xEDvalo en los ajustes del navegador");return}Dn.on=!0,hn("Listo: te aviso de incidencias en "+da().lines.join(", ")+" mientras la app est\xE9 abierta")}try{localStorage.setItem("rod_ln",Dn.on?"1":"")}catch{}en(!0)}async function rg(){if(!H.repOk)return sg();if(!vi.busy){vi.busy=!0;try{let u=await Xd();if(!u){hn(Wd&&!$d()?"En iPhone: Compartir \u2192 A\xF1adir a pantalla de inicio, abre la app desde ah\xED y activa los avisos":"Este navegador no permite avisos (hace falta abrir la web publicada, no el archivo)");return}if(await navigator.serviceWorker.ready,vi.on){let _=await u.pushManager.getSubscription();_&&(fetch(H.url.replace(/\/+$/,"")+"/push/unsubscribe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({endpoint:_.endpoint})}).catch(()=>{}),await _.unsubscribe().catch(()=>{})),vi.on=!1,hn("Avisos desactivados")}else{if(!H.url){hn("Hace falta el puente en directo");return}if(await Notification.requestPermission()!=="granted"){hn("Sin permiso para avisos: act\xEDvalo en los ajustes del navegador");return}let S=(await wt(H.url.replace(/\/+$/,""),"/push/key")).key,E=await u.pushManager.getSubscription()||await u.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:ng(S)});await qd(E),vi.on=!0,hn("Listo: te avisaremos de incidencias en "+da().lines.join(", "))}try{localStorage.setItem("rod_push",vi.on?"1":"")}catch{}}catch(u){hn("No se han podido activar los avisos: "+(u.message||u))}finally{vi.busy=!1,en(!0)}}}async function Zd(){if(vi.on)try{let u=await Xd(),_=u&&await u.pushManager.getSubscription();_&&await qd(_)}catch{}}let Ah=!1,Jd="";function Ch(){let u=q?"t"+(q.tid||q.vtid):J>=0?"s"+J:j?"a":sn?"n":"";u!==Jd&&(Ah=!1,Jd=u);let _=innerWidth<=640&&!!u&&!Ah,S=p("#inf");S.classList.contains("compact")!==_&&(S.classList.toggle("compact",_),requestAnimationFrame(()=>{if(h.style.display!=="none"){let E=S.getBoundingClientRect().bottom;h.style.top=Math.round(E+8)+"px",h.style.maxHeight=Math.max(140,p("#rc").getBoundingClientRect().top-E-16)+"px"}}))}let Vo=new Set;function ag(u,_,S,E){if(!(Dn.on||vi.on)||!("Notification"in window)||Notification.permission!=="granted")return;let C=de(),I=_.sm-C.min-E;if(!C.live||_.dl<10||I>40||Vo.has(_.num+"|"+_.sm))return;Vo.add(_.num+"|"+_.sm);let F=`${u.ico} Tu tren de las ${at(_.sm)} va con +${Math.round(_.dl)} min`,O=`${_.fam} a ${_.dest} desde ${S}: saldr\xE1 hacia las ${at(_.est)}. Puedes salir ${Math.round(_.dl)} min m\xE1s tarde.`;(navigator.serviceWorker&&navigator.serviceWorker.getRegistration?navigator.serviceWorker.getRegistration():Promise.resolve(null)).then(B=>B?B.showNotification(F,{body:O,tag:"rd-"+_.num,icon:"icons/icon-192.png"}):new Notification(F,{body:O})).catch(()=>{try{new Notification(F,{body:O})}catch{}})}function en(u){let _=p("#home");if(!_)return;let S=performance.now();if(!u&&S-Gd<4e3)return;Gd=S;let E=de(),C=[],I=da(),F=y=>{let P=Th(y);return P==null||!Yt.w?1:Math.hypot(b[P].w[0]-Yt.w[0],b[P].w[1]-Yt.w[1])},O=[Yt,...[Vn,pn].sort((y,P)=>F(y)-F(P))],B=O.map(y=>eg(y,E,C)).join("")+(ha.some(y=>y.open)&&I.lines.length,"");if(_.className=ha.some(y=>y.open)?"open":"",_._h===B)return;_._h=B,_.innerHTML=B;{let y=[..._.children].find(P=>P.classList.contains("hplace")&&!P.querySelector(".hnew"));y&&y.classList.add("lead")}let Z=y=>y==="work"?pn:y==="near"?Yt:Vn;_.querySelectorAll("[data-hloc]").forEach(y=>y.onclick=()=>{Yt.err="",Eh(!0)}),_.querySelectorAll("[data-ht]").forEach(y=>y.onclick=()=>{if(p("#inf").classList.contains("compact")){Ah=!0,Ch();return}let P=Z(y.dataset.ht);P.open=!P.open,es(P),en(!0),(q||J>=0||j||sn)&&(h._h="",Ve())}),_.querySelectorAll("[data-hs]").forEach(y=>y.onclick=()=>{let[P,Q]=y.dataset.hs.split(":"),rt=Z(P);rt.i=+Q,es(rt),en(!0)}),_.querySelectorAll("[data-hw]").forEach(y=>y.onclick=()=>{let[P,Q]=y.dataset.hw.split(":"),rt=Z(P);rt.walk=g(rt.walk+ +Q,0,60),es(rt),en(!0)}),_.querySelectorAll("[data-hmap]").forEach(y=>y.onclick=()=>{let P=+y.dataset.hmap;sn=j=Ke=!1,q=null,J=P,Rt(),Object.assign(s,{tx:b[P].w[0],ty:b[P].w[1],dist:18,tilt:Math.max(s.tilt,.5)}),h._h="",Ve(),a()}),_.querySelectorAll("[data-hset]").forEach(y=>y.onclick=()=>{Os=y.dataset.hset,m.value="",m.placeholder=Os==="work"?"Escribe la estaci\xF3n del trabajo\u2026":"Escribe la estaci\xF3n de casa\u2026",m.focus()}),_.querySelectorAll("[data-hnear]").forEach(y=>y.onclick=()=>{let P=zt.get(Yt.st[0]);P!=null&&Rh(P,y.dataset.hnear)}),_.querySelectorAll("[data-hmore]").forEach(y=>y.onclick=()=>{let P=Z(y.dataset.hmore);P.more=!P.more,en(!0)}),_.querySelectorAll("[data-hhide]").forEach(y=>y.onclick=P=>{P.stopPropagation();let[Q,rt]=y.dataset.hhide.split(":"),Et=Z(Q);Et.hide=rt,es(Et),en(!0)}),_.querySelectorAll("[data-hshow]").forEach(y=>y.onclick=()=>{let P=Z(y.dataset.hshow);P.hide="",es(P),en(!0)}),_.querySelectorAll("[data-hgo]").forEach(y=>y.onclick=P=>{P.stopPropagation();let[Q,rt]=y.dataset.hgo.split(":"),Et=Z(Q);Et.goAt=rt==="1"?Date.now():0,es(Et),en(!0)}),_.querySelectorAll("[data-hnotst]").forEach(y=>y.onclick=P=>{P.stopPropagation(),Yt.homeW=Yt.w;try{localStorage.setItem("rod_homew",JSON.stringify(Yt.w))}catch{}en(!0)}),_.querySelectorAll("[data-hdel]").forEach(y=>y.onclick=()=>{pn.st=[],pn.open=!1,es(pn),en(!0),Zd()}),_.querySelectorAll("[data-dk]").forEach(y=>y.onclick=()=>Kd(C[+y.dataset.dk])),_.querySelectorAll("[data-hal]").forEach(y=>y.onclick=()=>p("#alr").click());let et=p("#bell");et||(et=document.createElement("button"),et.type="button",et.id="bell",et.onclick=rg,p("#inf .more").prepend(et));{let y=H.repOk?vi.on:Dn.on;et.hidden=!I.lines.length,et.className=y?"on":"",et.textContent=(y?"\u{1F514} Avisos activados \xB7 ":"\u{1F515} Activar avisos de ")+I.lines.join(", "),et.title=(y?"Avisos activados":"Activar avisos")+" de "+I.lines.join(", ")+(H.repOk?"":" (mientras la app est\xE9 abierta)")}Fd(_)}function Kd(u){if(!u)return;let _=t.days.indexOf(de().ymd),S=_n.find(I=>I.real?u.tid&&I.v.tid===u.tid||u.num&&String(I.tr?I.tr.num:I.v.num)===String(u.num):u.tr&&I.tr===u.tr||u.num&&I.tr&&String(I.tr.num)===String(u.num)),E=u.tr||S&&S.tr||(K[_]||[]).find(I=>String(I.num)===String(u.num));if(sn=j=Ke=!1,J=-1,q=S?S.tr||{vtid:S.v.tid}:E||null,!q)return;V=S&&S.tr?S.tr:null,V&&innerWidth<=640&&(h.classList.add("peek"),p("#rc").classList.contains("min")||p("#rcgrab").click());let C=S?S.p.w:null;C&&Object.assign(s,{tx:C[0],ty:C[1],dist:Math.min(s.dist,22)}),Rt(),h._h="",Ve(),w=0,a()}let Os=!1;m.addEventListener("blur",()=>setTimeout(()=>{Os&&!m.value.trim()&&(Os=!1,m.placeholder="Buscar estaci\xF3n o municipio\u2026")},600));function ZS(){}function Rh(u,_){let S=_==="work"?pn:Vn,E=b[u].id,C=b.filter(I=>I.fams.size&&I!==b[u]&&Math.hypot(I.w[0]-b[u].w[0],I.w[1]-b[u].w[1])<.6).map(I=>I.id);S.st=[E,...C].slice(0,3),S.i=0,S.open=!0,es(S),en(!0),Zd()}let Ho=p("#lines");Ho.innerHTML='<button type="button" class="all" data-f="*">Todas</button>'+k.map(u=>`<button type="button" style="--c:${$[u]}" data-f="${u}">${u}</button>`).join("");function jd(){try{en(!0)}catch{}{let u=p("#linebtn");u||(u=document.createElement("button"),u.type="button",u.id="linebtn",Ho.after(u),u.onclick=()=>{Li=[...Wt][0],Ke=sn=j=!1,h._h="",Ve()});let _=Wt.size===1?[...Wt][0]:"";u.hidden=!_,_&&(u.innerHTML=`\u{1F4CB} Estado de la ${f(_)} ahora`)}Ho.querySelectorAll("[data-f]").forEach(u=>{u.dataset.f!=="*"&&u.classList.toggle("off",!Wt.has(u.dataset.f))})}Ho.querySelectorAll("[data-f]").forEach(u=>u.onclick=()=>{let _=u.dataset.f;_==="*"?k.forEach(S=>Wt.add(S)):Wt.size===k.length?(Wt.clear(),Wt.add(_)):Wt.has(_)?(Wt.delete(_),Wt.size||k.forEach(S=>Wt.add(S))):Wt.add(_);try{localStorage.setItem("rod_lines",JSON.stringify([...Wt]))}catch{}jd(),Ot(),Rt(),bh(),w=0,a()});let Ih=[...document.querySelectorAll("[data-sp]")],di=0;function Qd(u){let _=de();u&&(Tt===u||di===u)?Tt?(Vt=_.min,ie=_.min,Tt=0,di=u):(ue=performance.now(),Tt=u,di=0):u===0?(Tt=0,ie=null,di=0):(Vt=_.min,ue=performance.now(),ie=_.min,Tt=u,di=0),Ih.forEach(S=>{let E=+S.dataset.sp;S.classList.toggle("on",E===(Tt||di)||!Tt&&!di&&ie==null&&E===0),S.classList.toggle("pz",!!di&&E===di),S.textContent=E===0?"Ahora":di===E?"\u25B6 \xD7"+E:Tt===E?"\u23F8 \xD7"+E:"\xD7"+E}),w=0,a()}Ih.forEach(u=>u.onclick=()=>Qd(+u.dataset.sp)),p("#tsl").oninput=u=>{let _=+u.target.value;Vt=_,ie=_,ue=performance.now(),Tt===0&&!di&&Ih.forEach(S=>S.classList.remove("on")),w=0,a()},setInterval(()=>{ie!=null&&Tt&&Vt+(performance.now()-ue)/6e4*Tt>1560&&(Vt=240,ue=performance.now())},1e3),window.__rodSearch=u=>{let _=x(u.trim());if(!_){d.style.display="none",d._pick=null;return}let S=[],E=[];b.forEach((O,B)=>{if(!O.fams.size)return;let Z=x(O.n);Z.startsWith(_)||Z.includes(" "+_)||Z.includes("-"+_)?S.push(B):Z.includes(_)&&E.push(B)});let C=S.concat(E).slice(0,7),I=A.filter(O=>x(O.name).startsWith(_)).sort((O,B)=>B.pop-O.pop).slice(0,3),F=C.map(O=>({h:`\u{1F689} ${f(b[O].n)}<em>${[...b[O].fams].sort(L).slice(0,3).map(B=>`<em class="ls" style="background:${$[B]}">${B}</em>`).join(" ")}</em>`,go:()=>{if(Os){let B=Os;Os=!1,m.placeholder="Buscar estaci\xF3n o municipio\u2026",Rh(O,B);return}sn=!1,j=!1,Ke=!1,J=O,q=null,V=null,Rt(),Object.assign(s,{tx:b[O].w[0],ty:b[O].w[1],dist:Math.min(s.dist,20),tilt:Math.max(s.tilt,.5)}),Ve(),a()}})).concat(I.map(O=>({h:`${f(O.name)}<em>municipio</em>`,go:()=>{Object.assign(s,{tx:O.cx,ty:O.cy,dist:g(O.size*3+14,14,60)}),a()}})));d.innerHTML=F.map((O,B)=>`<li data-i="${B}">${O.h}</li>`).join("")||'<li class="no">Sin resultados</li>',d.style.display="block",d._pick=O=>{F[O]&&(F[O].go(),d.style.display="none",m.value="",m.blur())},d.querySelectorAll("li[data-i]").forEach(O=>O.onclick=()=>d._pick(+O.dataset.i))},jd(),Rt();try{let u=new URLSearchParams(location.search).get("st");if(u){let _=x(u),S=-1,E=0;b.forEach((C,I)=>{if(!C.fams.size)return;let F=x(C.n),O=F===_?3:F.startsWith(_)||_.startsWith(F)?2:F.includes(_)||_.includes(F)?1:0;O>E&&(E=O,S=I)}),S>=0&&setTimeout(()=>{J=S,Rt(),Object.assign(s,{tx:b[S].w[0],ty:b[S].w[1],dist:18,tilt:.5}),Ve(),a()},300)}}catch{}window.__rod={TID:ot,SID:zt,byDay:K,get days(){return t.days},get hist(){return ve},get past(){return ce.cur},get cols(){return ei.mesh?ei.mesh.count:-1},get dist(){return r.dist},get follow(){return V},get selTrip(){return q},ST:b,TR:it,FAM:k,act:()=>_n,setSpeed:Qd,RT:H,pollRT:le,nowState:de,posAt:Ns,activeTrips:Us,select:u=>{q=u,Ve()}}}var jr=window.__DATA__;var Ie=i=>document.querySelector(i),ds=i=>String(i).replace(/\B(?=(\d{3})+(?!\d))/g,"."),Bn=(i,t,e)=>Math.min(e,Math.max(t,i)),fd=i=>i.normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase(),Xn=Ie("#c"),Eo=new Qc({canvas:Xn,antialias:!0});Eo.setPixelRatio(Math.min(devicePixelRatio||1,2));var Ls=new La;Ls.background=new pe(15659509);var ph=35,Qi=new Fn(ph,1,2,1500);Ls.add(new eo(16777215,9080992,1));var vm=new io(16777215,.9);vm.position.set(-40,-70,90);Ls.add(vm);var Ki=100/jr.w,bo=jr.w/2,Mo=jr.h/2,cn=[],pd=new Ti;Ls.add(pd);var ym=new Xs({color:16777215,transparent:!0,opacity:.55});for(let i of jr.m){let t=new Ti,e=[],n=[],s=1e9,r=-1e9,a=1e9,o=-1e9;for(let g of i.g){let x=g.map(p=>{let f=[];for(let N=0;N<p.length;N+=2)f.push(new Lt((p[N]-bo)*Ki,(p[N+1]-Mo)*Ki));return f.length>1&&f[0].equals(f[f.length-1])&&f.pop(),f}).filter(p=>p.length>=3);if(!x.length)continue;let A=new Br(x[0]);for(let p=1;p<x.length;p++)A.holes.push(new Ys(x[p]));e.push(A);for(let p of x[0])s=Math.min(s,p.x),r=Math.max(r,p.x),a=Math.min(a,p.y),o=Math.max(o,p.y);for(let p of x)n.push(new Ba(new ln().setFromPoints(p.map(f=>new G(f.x,f.y,0))),ym))}if(!e.length)continue;let l;try{l=new Za(e,{depth:1,bevelEnabled:!1})}catch{continue}let c=new ja({color:13421772}),h=new bn(l,c);t.add(h);let m=new Ti;n.forEach(g=>m.add(g)),m.position.z=.04,pd.add(m),t.scale.z=.01,pd.add(t);let d={og:m,rings:i.g,inF:!0,sel:null,code:i.c,name:i.n,pop:i.p,area:i.a,pr:i.pr,rankP:0,rankD:0,group:t,mesh:h,mat:c,cx:(s+r)/2,cy:(a+o)/2,size:Math.max(r-s,o-a),z:.01,zt:.01,rank:0};h.userData.m=d,cn.push(d)}var y1=cn.map(i=>i.mesh),dm=i=>{let t=0;for(let e=0;e<i.length;e+=2){let n=(e+2)%i.length;t+=i[e]*i[n+1]-i[n]*i[e+1]}return Math.abs(t)/2},Sm=0,bm=0;for(let i of cn){for(let t of i.rings)Sm+=dm(t[0])-t.slice(1).reduce((e,n)=>e+dm(n),0);bm+=i.area}var PS=Math.sqrt(bm/Sm),ah={"08":"Barcelona",17:"Girona",25:"Lleida",43:"Tarragona"},Mm={"08":"provincia de Barcelona",17:"provincia de Girona",25:"provincia de Lleida",43:"provincia de Tarragona"},Sd="sqrt",bd="pop",ud=0,md=0,Zr=1,So=1,LS={sqrt:i=>Math.sqrt(i),lin:i=>i,log:i=>Math.log10(Math.max(i,1))},gd=i=>bd==="pop"?i.pop:i.pop/i.area,rh=["#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#b10026","#5c0020"].map(i=>new pe(i));function DS(i){i=Bn(i,0,1)*(rh.length-1);let t=Math.min(Math.floor(i),rh.length-2);return rh[t].clone().lerp(rh[t+1],i-t)}var Jr=i=>i>=100?ds(Math.round(i)):i.toLocaleString("es-ES",{maximumFractionDigits:1});function NS(){md=0;for(let i of cn)md+=i.pop;[...cn].sort((i,t)=>t.pop-i.pop).forEach((i,t)=>i.rankP=t+1),[...cn].sort((i,t)=>t.pop/t.area-i.pop/i.area).forEach((i,t)=>i.rankD=t+1),wm()}var US=new pe("#d3d8e2"),FS=new pe("#eceff3");function Md(i){i.mat.color.copy(i.base).lerp(FS,.86),i.inF||i.mat.color.lerp(US,.8)}function wm(){Zr=1,So=1e12;for(let e of cn){let n=gd(e);Zr=Math.max(Zr,n),So=Math.min(So,n)}let i=Math.log10(Math.max(So,.01)),t=Math.log10(Zr);for(let e of cn)e.base=DS((Math.log10(Math.max(gd(e),.01))-i)/(t-i)),Md(e);Ie("#lmin").textContent=Jr(So),Ie("#lmax").textContent=Jr(Zr),Ie("#lname").textContent=bd==="pop"?"habitantes":"hab./km\xB2",mh()}function mh(){let i=LS[Sd],t=i(Zr),e=24*ud;for(let n of cn)n.zt=ud<=.001?.01:Math.max(.12*Math.min(1,ud),e*i(gd(n))/t)*(n.inF?1:.1);In()}var fm=Object.fromEntries(cn.map(i=>[i.code,i])),oh=[],Em=[];for(let i of jr.bd){let t=fm[i.a],e=fm[i.b];if(!(!t||!e))for(let n=0;n+3<i.p.length;n+=2)Em.push((i.p[n]-bo)*Ki,(i.p[n+1]-Mo)*Ki,0,(i.p[n+2]-bo)*Ki,(i.p[n+3]-Mo)*Ki,0),oh.push(t,e)}var hh=new hs;hh.setPositions(Em);var Tm=new qi({color:2764864,linewidth:4.4,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3}),Am=new qi({color:16777215,linewidth:2.4,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-6});[Tm,Am].forEach((i,t)=>{let e=new er(hh,i);e.frustumCulled=!1,e.renderOrder=10+t,Ls.add(e)});function OS(){let i=hh.attributes.instanceStart.data.array;for(let t=0;t<oh.length;t+=2){let e=Math.max(oh[t].z,oh[t+1].z)+.12,n=t/2*6;i[n+2]=e,i[n+5]=e}hh.attributes.instanceStart.data.needsUpdate=!0}var uh={};for(let i of Object.keys(ah)){let t=cn.filter(h=>h.pr===i),e=0,n=0,s=0,r=1e9,a=-1e9,o=1e9,l=-1e9;for(let h of t)e+=h.area,n+=h.cx*h.area,s+=h.cy*h.area,r=Math.min(r,h.cx),a=Math.max(a,h.cx),o=Math.min(o,h.cy),l=Math.max(l,h.cy);let c=document.createElement("div");c.className="plab",c.textContent=ah[i],c.title="Ver solo "+Mm[i],c.onclick=()=>YS("pr:"+i),document.body.appendChild(c),uh[i]={el:c,p:new G(n/e,s/e,0),cx:(r+a)/2,cy:(o+l)/2,ext:Math.max(a-r,l-o),ext2:[a-r,l-o],area:e,name:ah[i]}}var dd=new G;function BS(){for(let i in uh){let t=uh[i];dd.copy(t.p).project(Qi),t.el.style.transform=`translate(-50%,-50%) translate(${(dd.x*.5+.5)*innerWidth}px,${(-dd.y*.5+.5)*innerHeight}px)`}}var un={tilt:0,yaw:0,dist:150,tx:0,ty:0},ye={...un};function kS(){let i=innerWidth/innerHeight,t=Math.tan(ph*Math.PI/360);return Math.max(jr.h*Ki*1.1,100*1.1/i)/(2*t)}var zS=document.getElementById("northr");document.getElementById("north").addEventListener("click",()=>{ye.yaw=Math.round(ye.yaw/(2*Math.PI))*2*Math.PI,ye.tilt=0,In()});function wd(){Object.assign(ye,{tilt:0,yaw:0,dist:kS(),tx:0,ty:0}),In()}function VS(){let{tilt:i,yaw:t,dist:e,tx:n,ty:s}=un;Qi.position.set(n+e*Math.sin(i)*Math.sin(t),s-e*Math.sin(i)*Math.cos(t),e*Math.cos(i)),Qi.up.set(-Math.cos(i)*Math.sin(t),Math.cos(i)*Math.cos(t),Math.sin(i)),Qi.lookAt(n,s,0)}var lh=!0,pm=performance.now(),wo=new Map;function In(){lh=!0}function Cm(i){requestAnimationFrame(Cm);let t=Bn((i-pm)/1e3,0,.05);pm=i;let e=1-Math.exp(-t*10),n=!1;for(let s of Object.keys(un)){let r=ye[s]-un[s];Math.abs(r)>1e-4*(s==="dist"?10:1)?(un[s]+=r*e,n=!0):un[s]=ye[s]}for(let s of cn){let r=s.zt-s.z;Math.abs(r)>.002?(s.z+=r*Math.min(1,e*.8),s.group.scale.z=s.z,s.og.position.z=s.z+.04,n=!0):s.z!==s.zt&&(s.z=s.zt,s.group.scale.z=s.z,s.og.position.z=s.z+.04)}for(let[s,r]of wo){let a=(i-r)/1800;a>=1?(wo.delete(s),ar(s)):ar(s,.5*Math.sin(Math.PI*a)),n=!0}if(window.__rodTick&&window.__rodTick(i)&&(lh=!0),n||lh){zS.style.transform=`rotate(${un.yaw}rad) scaleY(${(.55+.45*Math.cos(un.tilt)).toFixed(3)})`;{let s=Math.abs(Math.sin(ye.yaw/2))<.02&&ye.tilt<.03,r=document.getElementById("north");r.classList.contains("flat")!==s&&(r.classList.toggle("flat",s),r.title=s?"El norte ya est\xE1 arriba":"Poner el norte arriba y el mapa plano")}VS(),OS(),BS(),window.__rodFrame&&window.__rodFrame(),Eo.render(Ls,Qi),lh=n,Ie("#tilt").value=Math.round(ye.tilt*180/Math.PI),Ie("#yaw").value=Math.round(((ye.yaw*180/Math.PI+180)%360+360)%360-180)}}function Rm(){Eo.setSize(innerWidth,innerHeight,!1),Qi.aspect=innerWidth/innerHeight,Qi.updateProjectionMatrix(),Tm.resolution.set(innerWidth,innerHeight),Am.resolution.set(innerWidth,innerHeight),window.__rodResize&&window.__rodResize(),In()}addEventListener("resize",()=>{Rm(),Je.length&&Ds()});Xn.addEventListener("wheel",i=>{i.preventDefault();let t=i.deltaMode===1?16:1,e=i.deltaY*t;if(i.altKey){let n=(Math.abs(i.deltaX)>Math.abs(i.deltaY)?i.deltaX:i.deltaY)*t;ye.yaw+=n*.0035}else i.ctrlKey?ye.dist=Bn(ye.dist*Math.exp(e*.01),6,400):ye.tilt=Bn(ye.tilt+e*.002,0,1.32);In()},{passive:!1});Xn.addEventListener("contextmenu",i=>i.preventDefault());var ji=new Map,Qn=null,ir=0,_d=0,xd=0;var dh=null;Xn.addEventListener("pointerdown",i=>{if(i.pointerType!=="mouse"&&!document.body.classList.contains("used")&&(document.body.classList.add("used"),Je.length&&setTimeout(Ds,50)),Xn.setPointerCapture(i.pointerId),ji.set(i.pointerId,{x:i.clientX,y:i.clientY}),ji.size===1&&(Qn={rot:i.button===2||i.altKey,moved:0,multi:!1,touch:i.pointerType!=="mouse"}),ji.size===2){let[t,e]=[...ji.values()];ir=Math.hypot(t.x-e.x,t.y-e.y),_d=Math.atan2(e.y-t.y,e.x-t.x),xd=(t.y+e.y)/2,dh={mode:null,rot:0,sc:0,tl:0},Qn&&(Qn.multi=!0)}Ed()});Xn.addEventListener("pointermove",i=>{let t=ji.get(i.pointerId);if(!t){us={x:i.clientX,y:i.clientY},vd||(vd=requestAnimationFrame(GS));return}let e=i.clientX-t.x,n=i.clientY-t.y;if(t.x=i.clientX,t.y=i.clientY,ji.size===2){let[s,r]=[...ji.values()],a=Math.hypot(s.x-r.x,s.y-r.y),o=Math.atan2(r.y-s.y,r.x-s.x),l=(s.y+r.y)/2,c=o-_d;c>Math.PI&&(c-=2*Math.PI),c<-Math.PI&&(c+=2*Math.PI);let h=ir?a-ir:0,m=l-xd,d=dh||(dh={mode:null,rot:0,sc:0,tl:0});d.rot+=c,d.sc+=h,d.tl+=m,d.mode?d.mode==="zoom"&&Math.abs(d.rot)>.45&&(d.mode="rotate"):Math.abs(d.rot)>.3?d.mode="rotate":Math.abs(d.tl)>30&&Math.abs(d.sc)<18?d.mode="tilt":Math.abs(d.sc)>12&&(d.mode="zoom"),(d.mode==="zoom"||d.mode==="rotate")&&ir&&(ye.dist=Bn(ye.dist*ir/a,6,400)),d.mode==="rotate"&&(ye.yaw+=c,un.yaw=ye.yaw),d.mode==="tilt"&&(ye.tilt=Bn(ye.tilt-m*.006,0,1.32),un.tilt=ye.tilt),ir=a,_d=o,xd=l,In();return}if(Qn.moved+=Math.abs(e)+Math.abs(n),Qn.rot||i.altKey)ye.yaw+=e*.005,ye.tilt=Bn(ye.tilt+n*.004,0,1.32),un.yaw=ye.yaw,un.tilt=ye.tilt;else{let s=2*un.dist*Math.tan(ph*Math.PI/360)/innerHeight,r=Math.sin(un.yaw),a=Math.cos(un.yaw),o=1/Math.max(Math.cos(un.tilt),.3);ye.tx=Bn(ye.tx-a*e*s+-r*n*s*o,-70,70),ye.ty=Bn(ye.ty-r*e*s+a*n*s*o,-70,70),un.tx=ye.tx,un.ty=ye.ty}In()});var Im=i=>{let t=Qn&&!Qn.rot&&!Qn.multi&&Qn.moved<(Qn.touch?12:6)&&i.type==="pointerup"&&ji.size===1,e=Qn&&Qn.touch;ji.delete(i.pointerId),ir=0,dh=null,ji.size||(Qn=null),t&&window.__rodTap&&window.__rodTap(i.clientX,i.clientY)};Xn.addEventListener("pointerup",Im);Xn.addEventListener("pointercancel",Im);Xn.addEventListener("dblclick",wd);addEventListener("keydown",i=>{i.key==="Alt"&&(Xn.style.cursor="move")});addEventListener("keyup",i=>{i.key==="Alt"&&(Xn.style.cursor="")});addEventListener("blur",()=>{Xn.style.cursor=""});var HS=new ro,mm=new Lt,us=null,vd=0,sr=null;function GS(){if(vd=0,!us||Qn)return;mm.set(us.x/innerWidth*2-1,-(us.y/innerHeight)*2+1),HS.setFromCamera(mm,Qi);let i=null;if(i!==sr){let e=sr;sr=i,e&&ar(e),i&&ar(i),In()}let t=window.__rodHover&&window.__rodHover(us.x,us.y);if(t){nr.innerHTML=t,nr.style.display="block";let e=nr.offsetWidth,n=nr.offsetHeight;nr.style.left=Bn(us.x+14,6,innerWidth-e-6)+"px",nr.style.top=Bn(us.y+14,6,innerHeight-n-6)+"px",Xn.style.cursor="pointer"}else Ed(),Xn.style.cursor=""}Xn.addEventListener("pointerleave",()=>{if(us=null,sr){let i=sr;sr=null,ar(i),In()}Ed()});var nr=Ie("#tip");function Ed(){nr.style.display="none"}document.querySelectorAll("[data-metric]").forEach(i=>i.onclick=()=>{bd=i.dataset.metric,document.querySelectorAll("[data-metric]").forEach(t=>t.classList.toggle("on",t===i)),wm()});document.querySelectorAll("[data-mode]").forEach(i=>i.onclick=()=>{Sd=i.dataset.mode,document.querySelectorAll("[data-mode]").forEach(t=>t.classList.toggle("on",t===i)),mh()});Ie("#yaw").oninput=i=>{ye.yaw=+i.target.value*Math.PI/180,In()};Ie("#tilt").oninput=i=>{ye.tilt=+i.target.value*Math.PI/180,In()};Ie("#zin").onclick=()=>{ye.dist=Bn(ye.dist*.75,6,400),In()};Ie("#zout").onclick=()=>{ye.dist=Bn(ye.dist/.75,6,400),In()};Ie("#rst").onclick=wd;var gm=["#2563eb","#059669","#7c3aed","#db2777","#0891b2","#ca8a04"],Je=[],_m={},WS=i=>_m[i]||(_m[i]=new Xs({color:i}));function Pm(i,t){i.og.children.forEach(e=>e.material=t?WS(t):ym)}function ar(i,t=0){let e=i.mat.emissive;i===sr?e.setHex(5592405):i.sel?e.copy(i.sel.tint):e.setHex(0),t&&e.addScalar(t)}function Td(i,t){let e=1e9,n=-1e9,s=1e9,r=-1e9;for(let c of i)e=Math.min(e,c.cx-c.size/2),n=Math.max(n,c.cx+c.size/2),s=Math.min(s,c.cy-c.size/2),r=Math.max(r,c.cy+c.size/2);let a=innerWidth/innerHeight,o=Math.tan(ph*Math.PI/360),l=i.length===1?Bn(i[0].size*3.2+14,14,120):Bn(Math.max((r-s)*1.5,(n-e)*1.5/a)/(2*o)+6,14,300);Object.assign(ye,{tx:(e+n)/2,ty:(s+r)/2,dist:l,tilt:t,yaw:0}),In()}var Ps=Ie("#q"),li=Ie("#list"),Ye=Ie("#mcs");function gh(i,t=!0){if(li.style.display="none",Ps.value="",!i.sel){Je.length>=6&&Lm(Je[0].o,!0);let e=new Set(Je.map(s=>s.color)),n=gm.find(s=>!e.has(s))||gm[0];i.sel={o:i,color:n,tint:new pe(n).multiplyScalar(.12)},Je.push(i.sel),Pm(i,n)}Ye.classList.contains("min")&&To(!1),wo.set(i,performance.now()),ar(i),t&&Td([i],Math.max(ye.tilt,.9)),Ds()}function Lm(i,t){let e=Je.indexOf(i.sel);e>=0&&Je.splice(e,1),i.sel=null,Pm(i,null),ar(i),In(),t||Ds()}function Dm(i){let t=Math.min(devicePixelRatio||1,2),e=i.clientWidth,n=i.clientHeight;i.width=e*t,i.height=n*t;let s=i.getContext("2d");s.scale(t,t),s.clearRect(0,0,e,n);let r=Je.map(h=>{let m=1e9,d=-1e9,g=1e9,x=-1e9;for(let A of h.o.rings)for(let p=0;p<A[0].length;p+=2)m=Math.min(m,A[0][p]),d=Math.max(d,A[0][p]),g=Math.min(g,A[0][p+1]),x=Math.max(x,A[0][p+1]);return{x0:m,x1:d,y0:g,y1:x}}),a=Math.max(...r.map(h=>Math.max(h.x1-h.x0,h.y1-h.y0))),o=(Math.min(e,n)-22)/a;Je.forEach((h,m)=>{let d=r[m],g=(d.x0+d.x1)/2,x=(d.y0+d.y1)/2;s.beginPath();for(let A of h.o.rings)for(let p of A)for(let f=0;f<p.length;f+=2){let N=e/2+(p[f]-g)*o,U=n/2-(p[f+1]-x)*o;f?s.lineTo(N,U):s.moveTo(N,U),f===p.length-2&&s.closePath()}s.fillStyle=h.color+"40",s.fill("evenodd"),s.lineWidth=1.6,s.strokeStyle=h.color,s.stroke()});let l=o/PS,c=[.5,1,2,5,10,20,50,100].find(h=>h*l>=28)||100;s.fillStyle="#6b7385",s.fillRect(10,n-12,c*l,2),s.font="10px system-ui",s.fillText(c+" km",12+c*l,n-8)}function Ds(){if(!Je.length){Ye.innerHTML="",Ye.style.display="none",To(!1);return}if(Ye.style.display="flex",innerWidth<=640){let e=Ie("#inf").getBoundingClientRect().bottom;Ye.style.top=Math.round(e+8)+"px",Ye.style.maxHeight=Math.max(110,Math.min(innerHeight*(Ie("#rc").classList.contains("min")?.7:.4),Ie("#rc").getBoundingClientRect().top-e-16))+"px",Ye.style.width=""}else if(innerHeight<=500){let e=Ie("#inf").getBoundingClientRect().bottom;Ye.style.top=Math.round(e+8)+"px",Ye.style.maxHeight=Math.max(120,innerHeight-e-20)+"px",Ye.style.width="min(290px, 40vw)"}else Ye.style.top="",Ye.style.maxHeight="",Ye.style.width="";let i=Je.map((e,n)=>{let s=e.o;return`<div class="mc" draggable="true" data-i="${n}" style="--c:${e.color}"><button class="x" data-x="${n}" title="Cerrar">\xD7</button><div class="mh"><i class="dot"></i><b>${s.name}</b><em>${ah[s.pr]}</em></div><div class="mb">${ds(s.pop)} hab.</div><small>${Jr(s.area)} km\xB2 \xB7 ${Jr(s.pop/s.area)} hab./km\xB2 \xB7 n\xBA ${s.rankP} en poblaci\xF3n</small></div>`}).join("");if(Je.length>1){let e=s=>Math.max(...Je.map(s));if(i+='<div class="cmp"><div class="ct">Comparar <small>arrastra una ficha sobre otra para reordenar</small></div><canvas id="sil"></canvas><small class="sc">Siluetas superpuestas a la misma escala</small>'+[["Habitantes",s=>s.o.pop,ds],["Superficie (km\xB2)",s=>s.o.area,Jr],["Densidad (hab./km\xB2)",s=>s.o.pop/s.o.area,Jr]].map(([s,r,a])=>`<div class="cr"><span>${s}</span>${Je.map(o=>`<div class="bw"><i style="width:${Math.max(2,r(o)/e(r)*100)}%;background:${o.color}"></i><b>${a(r(o))}</b></div>`).join("")}</div>`).join(""),Je.length===2){let[s,r]=Je.map(c=>c.o),[a,o]=s.pop>=r.pop?[s,r]:[r,s],l=(c,h)=>(c>=h?c/h:h/c).toLocaleString("es-ES",{maximumFractionDigits:1});i+=`<small class="ratio"><b>${a.name}</b> tiene ${l(a.pop,o.pop)}\xD7 los habitantes de <b>${o.name}</b> y ocupa ${l(a.area,o.area)}\xD7 ${a.area>=o.area?"su superficie":"menos superficie"}.</small>`}i+="</div>"}Ye.innerHTML=i,Ye.querySelectorAll("[data-x]").forEach(e=>e.onclick=n=>{n.stopPropagation(),Lm(Je[+e.dataset.x].o)}),Ye.querySelectorAll(".mc").forEach(e=>{e.onclick=()=>Td([Je[+e.dataset.i].o],Math.max(ye.tilt,.9)),e.onmouseenter=()=>{let n=Je[+e.dataset.i].o;wo.set(n,performance.now())},e.ondragstart=n=>{n.dataTransfer.setData("text/plain",e.dataset.i),e.classList.add("drag")},e.ondragend=()=>e.classList.remove("drag"),e.ondragover=n=>{n.preventDefault(),e.classList.add("over")},e.ondragleave=()=>e.classList.remove("over"),e.ondrop=n=>{n.preventDefault();let s=+n.dataTransfer.getData("text/plain"),r=+e.dataset.i;if(s!==r){let[a]=Je.splice(s,1);Je.splice(r,0,a),Ds();let o=Ie("#sil");o&&o.classList.add("flash")}}});let t=Ie("#sil");t&&Dm(t)}Ps.addEventListener("input",()=>{if(window.__rodSearch){window.__rodSearch(Ps.value);return}let i=fd(Ps.value.trim());if(!i){li.style.display="none";return}let t=[],e=[];for(let s of cn){let r=fd(s.name);r.startsWith(i)?t.push(s):r.includes(i)&&e.push(s)}let n=t.sort((s,r)=>r.pop-s.pop).concat(e.sort((s,r)=>r.pop-s.pop)).slice(0,8);li.innerHTML=n.map((s,r)=>`<li data-i="${r}">${s.name}<em>${ds(s.pop)}</em></li>`).join("")||'<li class="no">Sin resultados</li>',li.style.display="block",li.querySelectorAll("li[data-i]").forEach(s=>s.onclick=()=>gh(n[+s.dataset.i])),li._r=n});Ps.addEventListener("keydown",i=>{i.key==="Enter"&&li._pick?li._pick(0):i.key==="Enter"&&li._r&&li._r[0]&&gh(li._r[0]),i.key==="Escape"&&(Ps.value="",li.style.display="none")});addEventListener("keydown",i=>{i.key==="Escape"&&i.target!==Ps&&Nm()});var xm=0;addEventListener("resize",()=>{clearTimeout(xm),xm=setTimeout(()=>{let i=Ie("#sil");i&&Dm(i)},120)});var fh=null,yd=Ie("#chip");function $S(i,t,e=.8){fh={codes:new Set(i.map(n=>n.code)),label:t},cn.forEach(n=>{n.inF=fh.codes.has(n.code),Md(n)}),yd.innerHTML=`<span>Mostrando: <b>${t}</b> \xB7 ${i.length} municipio${i.length===1?"":"s"}</span><button id="chx" title="Quitar filtro">\xD7</button>`,yd.style.display="flex",Ie("#chx").onclick=Nm,mh(),Td(i,e),i.slice(0,40).forEach(n=>wo.set(n,performance.now()))}function Nm(){fh&&(fh=null,cn.forEach(i=>{i.inF=!0,Md(i)}),yd.style.display="none",mh())}var XS="prov";function qS(i){let t=[...cn].sort((a,o)=>o.pop-a.pop),e=[...cn].sort((a,o)=>o.pop/o.area-a.pop/a.area),[n,s,r]=i.split(":");if(n==="pr")return[cn.filter(a=>a.pr===s),Mm[s]];if(n==="top")return s==="pop"?[t.slice(0,10),"10 con m\xE1s habitantes"]:[e.slice(0,10),"10 m\xE1s densos"];if(n==="low")return s==="pop"?[t.slice(-10),"10 con menos habitantes"]:[e.slice(-10),"10 menos densos"];if(n==="size")return[cn.filter(a=>a.pop>=+s&&a.pop<+r),+r>1e9?`${ds(+s)} o m\xE1s habitantes`:+s==0?`menos de ${ds(+r)} habitantes`:`${ds(+s)} \u2013 ${ds(+r-1)} habitantes`];if(n==="n50"){let a=0,o=0;for(let l of t)if(a+=l.pop,o++,a>=md/2)break;return[t.slice(0,o),"la mitad de la poblaci\xF3n"]}return[[],""]}function YS(i){let[t,e]=qS(i);t.length&&$S(t,e,i.startsWith("pr:")?.75:.8)}document.querySelectorAll("[data-tab]").forEach(i=>i.onclick=()=>{XS=i.dataset.tab,Ie("#dbody").scrollTop=0});var rr=Ie("#rc"),ch=Ie("#mcstab");function Kr(i){rr.classList.toggle("min",i),Ie("#rcgrab span").textContent=i?"Mostrar controles":"Ocultar controles",Je.length&&Ds()}function To(i){Ye.classList.toggle("min",i),Ye.style.transform="",Ye.style.opacity="",ch.classList.toggle("on",i&&Je.length>0),i&&(ch.textContent=`\u25B8 ${Je.length} ${Je.length===1?"ficha":"fichas"}`,ch.style.top=Ye.style.top||"124px")}function Ad(i,{onMove:t,onEnd:e,axis:n}){let s=null;i.addEventListener("pointerdown",a=>{a.pointerType==="mouse"||!_h.matches||a.target.closest("input,button:not(#rcgrab),.seg")||(s={x:a.clientX,y:a.clientY,id:a.pointerId,lock:null})}),addEventListener("pointermove",a=>{if(!s||a.pointerId!==s.id)return;let o=a.clientX-s.x,l=a.clientY-s.y;!s.lock&&Math.hypot(o,l)>10&&(s.lock=Math.abs(o)>Math.abs(l)?"x":"y"),s.lock===n&&t&&t(o,l)});let r=a=>{if(!s||a.pointerId!==s.id)return;let o=a.clientX-s.x,l=a.clientY-s.y,c=s.lock;s=null,e(c===n?o:0,c===n?l:0,c)};addEventListener("pointerup",r,!0),addEventListener("pointercancel",r,!0)}Ie("#rcgrab").onclick=()=>Kr(!rr.classList.contains("min"));innerWidth<=640&&Kr(!0);requestAnimationFrame(()=>document.documentElement.classList.remove("boot"));var Um=()=>innerWidth>640;Ad(rr,{axis:"y",onEnd:(i,t)=>{if(!Um())if(t>40&&!rr.classList.contains("min")){let e=Ie("#dp.open #dbody");(!e||e.scrollTop<=0||t>120)&&Kr(!0)}else t<-30&&rr.classList.contains("min")&&Kr(!1)}});Ad(rr,{axis:"x",onEnd:i=>{Um()&&(i>50?Kr(!0):i<-30&&rr.classList.contains("min")&&Kr(!1))}});Ad(Ye,{axis:"x",onMove:i=>{i<0&&(Ye.classList.add("sw"),Ye.style.transform=`translateX(${i}px)`,Ye.style.opacity=Math.max(.2,1+i/300))},onEnd:i=>{Ye.classList.remove("sw"),i<-60?To(!0):(Ye.style.transform="",Ye.style.opacity="")}});ch.onclick=()=>{To(!1),Ds()};Ie("#dtoggle").onclick=()=>{let i=Ie("#dp").classList.toggle("open");Ie("#rc").classList.toggle("dopen",i),Ie("#dtoggle").textContent=i?_h.matches&&innerWidth<=640?"\u2190 Controles":"En directo \u25B4":"En directo: conectar datos de Renfe \u25BE",window.__rodCard&&window.__rodCard()};var _h=matchMedia("(max-width:640px), (max-height:500px)");function Fm(){let i=Ie("#leg");_h.matches?Ie("#rc").insertBefore(i,Ie("#dtoggle")):document.body.appendChild(i),Je.length&&Ds()}_h.addEventListener("change",Fm);Fm();Rm();NS();wd();Object.assign(un,ye);for(let i of cn)i.z=.01;requestAnimationFrame(Cm);um({scene:Ls,camera:Qi,renderer:Eo,goal:ye,cur:un,invalidate:In,flyTo:(i,t,e,n)=>{Object.assign(ye,{tx:(i-bo)*Ki,ty:(t-Mo)*Ki,dist:e,tilt:n}),In()},K:Ki,CX:bo,CY:Mo,mcs:Ye,q:Ps,list:li,munis:cn,select:gh,norm:fd,fmt:ds,clamp:Bn,mcsMin:To});window.__app={scene:Ls,renderer:Eo,camera:Qi,munis:cn,labs:uh,goal:ye,cur:un,select:gh,get mode(){return Sd}};window.__ready=!0;})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
