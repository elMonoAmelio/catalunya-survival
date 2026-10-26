(()=>{var Zf=0,Eu=1,Jf=2;var uo=1,Kf=2,Gr=3,As=0,Hn=1,Wi=2,$i=0,Wr=1,Tu=2,Au=3,Cu=4,jf=5;var Ks=100,Qf=101,tp=102,ep=103,np=104,ip=200,sp=201,rp=202,ap=203,Ru=204,Iu=205,op=206,lp=207,cp=208,hp=209,up=210,dp=211,fp=212,pp=213,mp=214,yl=0,Sl=1,bl=2,Ir=3,Ml=4,wl=5,El=6,Tl=7,oc=0,gp=1,_p=2,Ci=0,Pu=1,Lu=2,Du=3,Nu=4,Uu=5,Fu=6,Ou=7;var Bu=300,Cs=301,js=302,lc=303,cc=304,fo=306,Al=1e3,Bi=1001,Cl=1002,vn=1003,xp=1004;var po=1005;var Tn=1006,hc=1007;var Rs=1008;var Kn=1009,ku=1010,zu=1011,$r=1012,uc=1013,Ri=1014,di=1015,Ii=1016,dc=1017,fc=1018,Xr=1020,Vu=35902,Hu=35899,Gu=1021,Wu=1022,fi=1023,zi=1026,Is=1027,pc=1028,mc=1029,Ps=1030,gc=1031;var _c=1033,mo=33776,go=33777,_o=33778,xo=33779,xc=35840,vc=35841,yc=35842,Sc=35843,bc=36196,Mc=37492,wc=37496,Ec=37488,Tc=37489,vo=37490,Ac=37491,Cc=37808,Rc=37809,Ic=37810,Pc=37811,Lc=37812,Dc=37813,Nc=37814,Uc=37815,Fc=37816,Oc=37817,Bc=37818,kc=37819,zc=37820,Vc=37821,Hc=36492,Gc=36494,Wc=36495,$c=36283,Xc=36284,yo=36285,qc=36286;var Ia=2300,Rl=2301,xl=2302,du=2303,fu=2400,pu=2401,mu=2402;var vp=3200;var Yc=0,yp=1,hs="",ri="srgb",Pa="srgb-linear",La="linear",Ge="srgb";var vl=7680;var Sp=519,bp=512,Mp=513,wp=514,Zc=515,Ep=516,Tp=517,Jc=518,Ap=519,$u=35044;var Xu="300 es",Ei=2e3,Pr=2001;function bg(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Mg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Da(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Cp(){let i=Da("canvas");return i.style.display="block",i}var uf={},Lr=null;function Na(...i){let t="THREE."+i.shift();Lr?Lr("log",t,...i):console.log(t,...i)}function Rp(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function me(...i){i=Rp(i);let t="THREE."+i.shift();if(Lr)Lr("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function _e(...i){i=Rp(i);let t="THREE."+i.shift();if(Lr)Lr("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Ws(...i){let t=i.join(" ");t in uf||(uf[t]=!0,me(...i))}function Ip(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Pp={[yl]:Sl,[bl]:El,[Ml]:Tl,[Ir]:wl,[Sl]:yl,[El]:bl,[Tl]:Ml,[wl]:Ir},Vi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],df=1234567,Ta=Math.PI/180,Dr=180/Math.PI;function ki(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pn[i&255]+Pn[i>>8&255]+Pn[i>>16&255]+Pn[i>>24&255]+"-"+Pn[t&255]+Pn[t>>8&255]+"-"+Pn[t>>16&15|64]+Pn[t>>24&255]+"-"+Pn[e&63|128]+Pn[e>>8&255]+"-"+Pn[e>>16&255]+Pn[e>>24&255]+Pn[n&255]+Pn[n>>8&255]+Pn[n>>16&255]+Pn[n>>24&255]).toLowerCase()}function be(i,t,e){return Math.max(t,Math.min(e,i))}function qu(i,t){return(i%t+t)%t}function wg(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Eg(i,t,e){return i!==t?(e-i)/(t-i):0}function Aa(i,t,e){return(1-e)*i+e*t}function Tg(i,t,e,n){return Aa(i,t,1-Math.exp(-e*n))}function Ag(i,t=1){return t-Math.abs(qu(i,t*2)-t)}function Cg(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Rg(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Ig(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Pg(i,t){return i+Math.random()*(t-i)}function Lg(i){return i*(.5-Math.random())}function Dg(i){i!==void 0&&(df=i);let t=df+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ng(i){return i*Ta}function Ug(i){return i*Dr}function Fg(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Og(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Bg(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function kg(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),m=r((t-n)/2),d=a((t-n)/2),g=r((n-t)/2),x=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*m,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*m,o*c);break;case"ZXZ":i.set(l*m,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*x,l*g,o*c);break;case"YXY":i.set(l*g,o*h,l*x,o*c);break;case"ZYZ":i.set(l*x,l*g,o*h,o*c);break;default:me("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function wi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Xe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Yu={DEG2RAD:Ta,RAD2DEG:Dr,generateUUID:ki,clamp:be,euclideanModulo:qu,mapLinear:wg,inverseLerp:Eg,lerp:Aa,damp:Tg,pingpong:Ag,smoothstep:Cg,smootherstep:Rg,randInt:Ig,randFloat:Pg,randFloatSpread:Lg,seededRandom:Dg,degToRad:Ng,radToDeg:Ug,isPowerOfTwo:Fg,ceilPowerOfTwo:Og,floorPowerOfTwo:Bg,setQuaternionFromProperEuler:kg,normalize:Xe,denormalize:wi},Lt=class i{static{i.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=be(this.x,t.x,e.x),this.y=be(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=be(this.x,t,e),this.y=be(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(be(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Hi=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],m=n[s+3],d=r[a+0],g=r[a+1],x=r[a+2],A=r[a+3];if(m!==A||l!==d||c!==g||h!==x){let p=l*d+c*g+h*x+m*A;p<0&&(d=-d,g=-g,x=-x,A=-A,p=-p);let f=1-o;if(p<.9995){let N=Math.acos(p),F=Math.sin(N);f=Math.sin(f*N)/F,o=Math.sin(o*N)/F,l=l*f+d*o,c=c*f+g*o,h=h*f+x*o,m=m*f+A*o}else{l=l*f+d*o,c=c*f+g*o,h=h*f+x*o,m=m*f+A*o;let N=1/Math.sqrt(l*l+c*c+h*h+m*m);l*=N,c*=N,h*=N,m*=N}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=m}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],m=r[a],d=r[a+1],g=r[a+2],x=r[a+3];return t[e]=o*x+h*m+l*g-c*d,t[e+1]=l*x+h*d+c*m-o*g,t[e+2]=c*x+h*g+o*d-l*m,t[e+3]=h*x-o*m-l*d-c*g,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),m=o(r/2),d=l(n/2),g=l(s/2),x=l(r/2);switch(a){case"XYZ":this._x=d*h*m+c*g*x,this._y=c*g*m-d*h*x,this._z=c*h*x+d*g*m,this._w=c*h*m-d*g*x;break;case"YXZ":this._x=d*h*m+c*g*x,this._y=c*g*m-d*h*x,this._z=c*h*x-d*g*m,this._w=c*h*m+d*g*x;break;case"ZXY":this._x=d*h*m-c*g*x,this._y=c*g*m+d*h*x,this._z=c*h*x+d*g*m,this._w=c*h*m-d*g*x;break;case"ZYX":this._x=d*h*m-c*g*x,this._y=c*g*m+d*h*x,this._z=c*h*x-d*g*m,this._w=c*h*m+d*g*x;break;case"YZX":this._x=d*h*m+c*g*x,this._y=c*g*m+d*h*x,this._z=c*h*x-d*g*m,this._w=c*h*m-d*g*x;break;case"XZY":this._x=d*h*m-c*g*x,this._y=c*g*m-d*h*x,this._z=c*h*x+d*g*m,this._w=c*h*m+d*g*x;break;default:me("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],m=e[10],d=n+o+m;if(d>0){let g=.5/Math.sqrt(d+1);this._w=.25/g,this._x=(h-l)*g,this._y=(r-c)*g,this._z=(a-s)*g}else if(n>o&&n>m){let g=2*Math.sqrt(1+n-o-m);this._w=(h-l)/g,this._x=.25*g,this._y=(s+a)/g,this._z=(r+c)/g}else if(o>m){let g=2*Math.sqrt(1+o-n-m);this._w=(r-c)/g,this._x=(s+a)/g,this._y=.25*g,this._z=(l+h)/g}else{let g=2*Math.sqrt(1+m-n-o);this._w=(a-s)/g,this._x=(r+c)/g,this._y=(l+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(be(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},G=class i{static{i.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ff.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ff.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),m=2*(r*n-a*e);return this.x=e+l*c+a*m-o*h,this.y=n+l*h+o*c-r*m,this.z=s+l*m+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=be(this.x,t.x,e.x),this.y=be(this.y,t.y,e.y),this.z=be(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=be(this.x,t,e),this.y=be(this.y,t,e),this.z=be(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(be(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return zh.copy(this).projectOnVector(t),this.sub(zh)}reflect(t){return this.sub(zh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},zh=new G,ff=new Hi,Se=class i{static{i.prototype.isMatrix3=!0}constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],m=n[7],d=n[2],g=n[5],x=n[8],A=s[0],p=s[3],f=s[6],N=s[1],F=s[4],T=s[7],b=s[2],D=s[5],z=s[8];return r[0]=a*A+o*N+l*b,r[3]=a*p+o*F+l*D,r[6]=a*f+o*T+l*z,r[1]=c*A+h*N+m*b,r[4]=c*p+h*F+m*D,r[7]=c*f+h*T+m*z,r[2]=d*A+g*N+x*b,r[5]=d*p+g*F+x*D,r[8]=d*f+g*T+x*z,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],m=h*a-o*c,d=o*l-h*r,g=c*r-a*l,x=e*m+n*d+s*g;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let A=1/x;return t[0]=m*A,t[1]=(s*c-h*n)*A,t[2]=(o*n-s*a)*A,t[3]=d*A,t[4]=(h*e-s*l)*A,t[5]=(s*r-o*e)*A,t[6]=g*A,t[7]=(n*l-c*e)*A,t[8]=(a*e-n*r)*A,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Ws("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Vh.makeScale(t,e)),this}rotate(t){return Ws("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Vh.makeRotation(-t)),this}translate(t,e){return Ws("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Vh.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Vh=new Se,pf=new Se().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),mf=new Se().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function zg(){let i={enabled:!0,workingColorSpace:Pa,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Ge&&(s.r=ls(s.r),s.g=ls(s.g),s.b=ls(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ge&&(s.r=Rr(s.r),s.g=Rr(s.g),s.b=Rr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===hs?La:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ws("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ws("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Pa]:{primaries:t,whitePoint:n,transfer:La,toXYZ:pf,fromXYZ:mf,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ri},outputColorSpaceConfig:{drawingBufferColorSpace:ri}},[ri]:{primaries:t,whitePoint:n,transfer:Ge,toXYZ:pf,fromXYZ:mf,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ri}}}),i}var Le=zg();function ls(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Rr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var fr,Il=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{fr===void 0&&(fr=Da("canvas")),fr.width=t.width,fr.height=t.height;let s=fr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=fr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Da("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ls(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ls(e[n]/255)*255):e[n]=ls(e[n]);return{data:e,width:t.width,height:t.height}}else return me("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Vg=0,Nr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Vg++}),this.uuid=ki(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Hh(s[a].image)):r.push(Hh(s[a]))}else r=Hh(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Hh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Il.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(me("Texture: Unable to serialize Texture."),{})}var Hg=0,Gh=new G,Yn=class i extends Vi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Bi,s=Bi,r=Tn,a=Rs,o=fi,l=Kn,c=i.DEFAULT_ANISOTROPY,h=hs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hg++}),this.uuid=ki(),this.name="",this.source=new Nr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Se,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Gh).x}get height(){return this.source.getSize(Gh).y}get depth(){return this.source.getSize(Gh).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){me(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){me(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Bu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Al:t.x=t.x-Math.floor(t.x);break;case Bi:t.x=t.x<0?0:1;break;case Cl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Al:t.y=t.y-Math.floor(t.y);break;case Bi:t.y=t.y<0?0:1;break;case Cl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Yn.DEFAULT_IMAGE=null;Yn.DEFAULT_MAPPING=Bu;Yn.DEFAULT_ANISOTROPY=1;var We=class i{static{i.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],m=l[8],d=l[1],g=l[5],x=l[9],A=l[2],p=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(m-A)<.01&&Math.abs(x-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(m+A)<.1&&Math.abs(x+p)<.1&&Math.abs(c+g+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let F=(c+1)/2,T=(g+1)/2,b=(f+1)/2,D=(h+d)/4,z=(m+A)/4,M=(x+p)/4;return F>T&&F>b?F<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(F),s=D/n,r=z/n):T>b?T<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),n=D/s,r=M/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=z/r,s=M/r),this.set(n,s,r,e),this}let N=Math.sqrt((p-x)*(p-x)+(m-A)*(m-A)+(d-h)*(d-h));return Math.abs(N)<.001&&(N=1),this.x=(p-x)/N,this.y=(m-A)/N,this.z=(d-h)/N,this.w=Math.acos((c+g+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=be(this.x,t.x,e.x),this.y=be(this.y,t.y,e.y),this.z=be(this.z,t.z,e.z),this.w=be(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=be(this.x,t,e),this.y=be(this.y,t,e),this.z=be(this.z,t,e),this.w=be(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(be(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Pl=class extends Vi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new We(0,0,t,e),this.scissorTest=!1,this.viewport=new We(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Yn(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Tn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Nr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Zn=class extends Pl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ua=class extends Yn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=vn,this.minFilter=vn,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ll=class extends Yn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=vn,this.minFilter=vn,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Be=class i{static{i.prototype.isMatrix4=!0}constructor(t,e,n,s,r,a,o,l,c,h,m,d,g,x,A,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,m,d,g,x,A,p)}set(t,e,n,s,r,a,o,l,c,h,m,d,g,x,A,p){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=m,f[14]=d,f[3]=g,f[7]=x,f[11]=A,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/pr.setFromMatrixColumn(t,0).length(),r=1/pr.setFromMatrixColumn(t,1).length(),a=1/pr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),m=Math.sin(r);if(t.order==="XYZ"){let d=a*h,g=a*m,x=o*h,A=o*m;e[0]=l*h,e[4]=-l*m,e[8]=c,e[1]=g+x*c,e[5]=d-A*c,e[9]=-o*l,e[2]=A-d*c,e[6]=x+g*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*h,g=l*m,x=c*h,A=c*m;e[0]=d+A*o,e[4]=x*o-g,e[8]=a*c,e[1]=a*m,e[5]=a*h,e[9]=-o,e[2]=g*o-x,e[6]=A+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*h,g=l*m,x=c*h,A=c*m;e[0]=d-A*o,e[4]=-a*m,e[8]=x+g*o,e[1]=g+x*o,e[5]=a*h,e[9]=A-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*h,g=a*m,x=o*h,A=o*m;e[0]=l*h,e[4]=x*c-g,e[8]=d*c+A,e[1]=l*m,e[5]=A*c+d,e[9]=g*c-x,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,g=a*c,x=o*l,A=o*c;e[0]=l*h,e[4]=A-d*m,e[8]=x*m+g,e[1]=m,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=g*m+x,e[10]=d-A*m}else if(t.order==="XZY"){let d=a*l,g=a*c,x=o*l,A=o*c;e[0]=l*h,e[4]=-m,e[8]=c*h,e[1]=d*m+A,e[5]=a*h,e[9]=g*m-x,e[2]=x*m-g,e[6]=o*h,e[10]=A*m+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Gg,t,Wg)}lookAt(t,e,n){let s=this.elements;return ii.subVectors(t,e),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),gs.crossVectors(n,ii),gs.lengthSq()===0&&(Math.abs(n.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),gs.crossVectors(n,ii)),gs.normalize(),$o.crossVectors(ii,gs),s[0]=gs.x,s[4]=$o.x,s[8]=ii.x,s[1]=gs.y,s[5]=$o.y,s[9]=ii.y,s[2]=gs.z,s[6]=$o.z,s[10]=ii.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],m=n[5],d=n[9],g=n[13],x=n[2],A=n[6],p=n[10],f=n[14],N=n[3],F=n[7],T=n[11],b=n[15],D=s[0],z=s[4],M=s[8],L=s[12],k=s[1],$=s[5],et=s[9],it=s[13],q=s[2],j=s[6],ot=s[10],lt=s[14],bt=s[3],ht=s[7],vt=s[11],gt=s[15];return r[0]=a*D+o*k+l*q+c*bt,r[4]=a*z+o*$+l*j+c*ht,r[8]=a*M+o*et+l*ot+c*vt,r[12]=a*L+o*it+l*lt+c*gt,r[1]=h*D+m*k+d*q+g*bt,r[5]=h*z+m*$+d*j+g*ht,r[9]=h*M+m*et+d*ot+g*vt,r[13]=h*L+m*it+d*lt+g*gt,r[2]=x*D+A*k+p*q+f*bt,r[6]=x*z+A*$+p*j+f*ht,r[10]=x*M+A*et+p*ot+f*vt,r[14]=x*L+A*it+p*lt+f*gt,r[3]=N*D+F*k+T*q+b*bt,r[7]=N*z+F*$+T*j+b*ht,r[11]=N*M+F*et+T*ot+b*vt,r[15]=N*L+F*it+T*lt+b*gt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],m=t[6],d=t[10],g=t[14],x=t[3],A=t[7],p=t[11],f=t[15],N=l*g-c*d,F=o*g-c*m,T=o*d-l*m,b=a*g-c*h,D=a*d-l*h,z=a*m-o*h;return e*(A*N-p*F+f*T)-n*(x*N-p*b+f*D)+s*(x*F-A*b+f*z)-r*(x*T-A*D+p*z)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],m=t[9],d=t[10],g=t[11],x=t[12],A=t[13],p=t[14],f=t[15],N=e*o-n*a,F=e*l-s*a,T=e*c-r*a,b=n*l-s*o,D=n*c-r*o,z=s*c-r*l,M=h*A-m*x,L=h*p-d*x,k=h*f-g*x,$=m*p-d*A,et=m*f-g*A,it=d*f-g*p,q=N*it-F*et+T*$+b*k-D*L+z*M;if(q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let j=1/q;return t[0]=(o*it-l*et+c*$)*j,t[1]=(s*et-n*it-r*$)*j,t[2]=(A*z-p*D+f*b)*j,t[3]=(d*D-m*z-g*b)*j,t[4]=(l*k-a*it-c*L)*j,t[5]=(e*it-s*k+r*L)*j,t[6]=(p*T-x*z-f*F)*j,t[7]=(h*z-d*T+g*F)*j,t[8]=(a*et-o*k+c*M)*j,t[9]=(n*k-e*et-r*M)*j,t[10]=(x*D-A*T+f*N)*j,t[11]=(m*T-h*D-g*N)*j,t[12]=(o*L-a*$-l*M)*j,t[13]=(e*$-n*L+s*M)*j,t[14]=(A*F-x*b-p*N)*j,t[15]=(h*b-m*F+d*N)*j,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,m=o+o,d=r*c,g=r*h,x=r*m,A=a*h,p=a*m,f=o*m,N=l*c,F=l*h,T=l*m,b=n.x,D=n.y,z=n.z;return s[0]=(1-(A+f))*b,s[1]=(g+T)*b,s[2]=(x-F)*b,s[3]=0,s[4]=(g-T)*D,s[5]=(1-(d+f))*D,s[6]=(p+N)*D,s[7]=0,s[8]=(x+F)*z,s[9]=(p-N)*z,s[10]=(1-(d+A))*z,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=pr.set(s[0],s[1],s[2]).length(),o=pr.set(s[4],s[5],s[6]).length(),l=pr.set(s[8],s[9],s[10]).length();r<0&&(a=-a),yi.copy(this);let c=1/a,h=1/o,m=1/l;return yi.elements[0]*=c,yi.elements[1]*=c,yi.elements[2]*=c,yi.elements[4]*=h,yi.elements[5]*=h,yi.elements[6]*=h,yi.elements[8]*=m,yi.elements[9]*=m,yi.elements[10]*=m,e.setFromRotationMatrix(yi),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=Ei,l=!1){let c=this.elements,h=2*r/(e-t),m=2*r/(n-s),d=(e+t)/(e-t),g=(n+s)/(n-s),x,A;if(l)x=r/(a-r),A=a*r/(a-r);else if(o===Ei)x=-(a+r)/(a-r),A=-2*a*r/(a-r);else if(o===Pr)x=-a/(a-r),A=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=m,c[9]=g,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=A,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Ei,l=!1){let c=this.elements,h=2/(e-t),m=2/(n-s),d=-(e+t)/(e-t),g=-(n+s)/(n-s),x,A;if(l)x=1/(a-r),A=a/(a-r);else if(o===Ei)x=-2/(a-r),A=-(a+r)/(a-r);else if(o===Pr)x=-1/(a-r),A=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=m,c[9]=0,c[13]=g,c[2]=0,c[6]=0,c[10]=x,c[14]=A,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},pr=new G,yi=new Be,Gg=new G(0,0,0),Wg=new G(1,1,1),gs=new G,$o=new G,ii=new G,gf=new Be,_f=new Hi,cs=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],m=s[2],d=s[6],g=s[10];switch(e){case"XYZ":this._y=Math.asin(be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-be(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-m,r),this._z=0);break;case"ZXY":this._x=Math.asin(be(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-m,g),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-be(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(d,g),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(be(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-m,r)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,g),this._y=0);break;default:me("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return gf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(gf,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return _f.setFromEuler(this),this.setFromQuaternion(_f,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};cs.DEFAULT_ORDER="XYZ";var Ur=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},$g=0,xf=new G,mr=new Hi,is=new Be,Xo=new G,xa=new G,Xg=new G,qg=new Hi,vf=new G(1,0,0),yf=new G(0,1,0),Sf=new G(0,0,1),bf={type:"added"},Yg={type:"removed"},gr={type:"childadded",child:null},Wh={type:"childremoved",child:null},yn=class i extends Vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$g++}),this.uuid=ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new G,e=new cs,n=new Hi,s=new G(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Be},normalMatrix:{value:new Se}}),this.matrix=new Be,this.matrixWorld=new Be,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ur,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return mr.setFromAxisAngle(t,e),this.quaternion.multiply(mr),this}rotateOnWorldAxis(t,e){return mr.setFromAxisAngle(t,e),this.quaternion.premultiply(mr),this}rotateX(t){return this.rotateOnAxis(vf,t)}rotateY(t){return this.rotateOnAxis(yf,t)}rotateZ(t){return this.rotateOnAxis(Sf,t)}translateOnAxis(t,e){return xf.copy(t).applyQuaternion(this.quaternion),this.position.add(xf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(vf,t)}translateY(t){return this.translateOnAxis(yf,t)}translateZ(t){return this.translateOnAxis(Sf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(is.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Xo.copy(t):Xo.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),xa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?is.lookAt(xa,Xo,this.up):is.lookAt(Xo,xa,this.up),this.quaternion.setFromRotationMatrix(is),s&&(is.extractRotation(s.matrixWorld),mr.setFromRotationMatrix(is),this.quaternion.premultiply(mr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(_e("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(bf),gr.child=t,this.dispatchEvent(gr),gr.child=null):_e("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Yg),Wh.child=t,this.dispatchEvent(Wh),Wh.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),is.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),is.multiply(t.parent.matrixWorld)),t.applyMatrix4(is),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(bf),gr.child=t,this.dispatchEvent(gr),gr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xa,t,Xg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xa,qg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let m=l[c];r(t.shapes,m)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),m=a(t.shapes),d=a(t.skeletons),g=a(t.animations),x=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),m.length>0&&(n.shapes=m),d.length>0&&(n.skeletons=d),g.length>0&&(n.animations=g),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};yn.DEFAULT_UP=new G(0,1,0);yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ti=class extends yn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Zg={type:"move"},Fr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ti,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ti,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ti,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let A of t.hand.values()){let p=e.getJointPose(A,n),f=this._getHandJoint(c,A);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}let h=c.joints["index-finger-tip"],m=c.joints["thumb-tip"],d=h.position.distanceTo(m.position),g=.02,x=.005;c.inputState.pinching&&d>g+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=g-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Zg)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ti;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Lp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_s={h:0,s:0,l:0},qo={h:0,s:0,l:0};function $h(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var pe=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ri){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Le.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Le.workingColorSpace){return this.r=t,this.g=e,this.b=n,Le.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Le.workingColorSpace){if(t=qu(t,1),e=be(e,0,1),n=be(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=$h(a,r,t+1/3),this.g=$h(a,r,t),this.b=$h(a,r,t-1/3)}return Le.colorSpaceToWorking(this,s),this}setStyle(t,e=ri){function n(r){r!==void 0&&parseFloat(r)<1&&me("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:me("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);me("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ri){let n=Lp[t.toLowerCase()];return n!==void 0?this.setHex(n,e):me("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ls(t.r),this.g=ls(t.g),this.b=ls(t.b),this}copyLinearToSRGB(t){return this.r=Rr(t.r),this.g=Rr(t.g),this.b=Rr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ri){return Le.workingToColorSpace(Ln.copy(this),t),Math.round(be(Ln.r*255,0,255))*65536+Math.round(be(Ln.g*255,0,255))*256+Math.round(be(Ln.b*255,0,255))}getHexString(t=ri){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Le.workingColorSpace){Le.workingToColorSpace(Ln.copy(this),e);let n=Ln.r,s=Ln.g,r=Ln.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let m=a-o;switch(c=h<=.5?m/(a+o):m/(2-a-o),a){case n:l=(s-r)/m+(s<r?6:0);break;case s:l=(r-n)/m+2;break;case r:l=(n-s)/m+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Le.workingColorSpace){return Le.workingToColorSpace(Ln.copy(this),e),t.r=Ln.r,t.g=Ln.g,t.b=Ln.b,t}getStyle(t=ri){Le.workingToColorSpace(Ln.copy(this),t);let e=Ln.r,n=Ln.g,s=Ln.b;return t!==ri?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(_s),this.setHSL(_s.h+t,_s.s+e,_s.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(_s),t.getHSL(qo);let n=Aa(_s.h,qo.h,e),s=Aa(_s.s,qo.s,e),r=Aa(_s.l,qo.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ln=new pe;pe.NAMES=Lp;var Fa=class extends yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cs,this.environmentIntensity=1,this.environmentRotation=new cs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Si=new G,ss=new G,Xh=new G,rs=new G,_r=new G,xr=new G,Mf=new G,qh=new G,Yh=new G,Zh=new G,Jh=new We,Kh=new We,jh=new We,Ss=class i{constructor(t=new G,e=new G,n=new G){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Si.subVectors(t,e),s.cross(Si);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Si.subVectors(s,e),ss.subVectors(n,e),Xh.subVectors(t,e);let a=Si.dot(Si),o=Si.dot(ss),l=Si.dot(Xh),c=ss.dot(ss),h=ss.dot(Xh),m=a*c-o*o;if(m===0)return r.set(0,0,0),null;let d=1/m,g=(c*l-o*h)*d,x=(a*h-o*l)*d;return r.set(1-g-x,x,g)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,rs)===null?!1:rs.x>=0&&rs.y>=0&&rs.x+rs.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,rs)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,rs.x),l.addScaledVector(a,rs.y),l.addScaledVector(o,rs.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Jh.setScalar(0),Kh.setScalar(0),jh.setScalar(0),Jh.fromBufferAttribute(t,e),Kh.fromBufferAttribute(t,n),jh.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Jh,r.x),a.addScaledVector(Kh,r.y),a.addScaledVector(jh,r.z),a}static isFrontFacing(t,e,n,s){return Si.subVectors(n,e),ss.subVectors(t,e),Si.cross(ss).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Si.subVectors(this.c,this.b),ss.subVectors(this.a,this.b),Si.cross(ss).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;_r.subVectors(s,n),xr.subVectors(r,n),qh.subVectors(t,n);let l=_r.dot(qh),c=xr.dot(qh);if(l<=0&&c<=0)return e.copy(n);Yh.subVectors(t,s);let h=_r.dot(Yh),m=xr.dot(Yh);if(h>=0&&m<=h)return e.copy(s);let d=l*m-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(_r,a);Zh.subVectors(t,r);let g=_r.dot(Zh),x=xr.dot(Zh);if(x>=0&&g<=x)return e.copy(r);let A=g*c-l*x;if(A<=0&&c>=0&&x<=0)return o=c/(c-x),e.copy(n).addScaledVector(xr,o);let p=h*x-g*m;if(p<=0&&m-h>=0&&g-x>=0)return Mf.subVectors(r,s),o=(m-h)/(m-h+(g-x)),e.copy(s).addScaledVector(Mf,o);let f=1/(p+A+d);return a=A*f,o=d*f,e.copy(n).addScaledVector(_r,a).addScaledVector(xr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Vn=class{constructor(t=new G(1/0,1/0,1/0),e=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(bi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(bi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=bi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,bi):bi.fromBufferAttribute(r,a),bi.applyMatrix4(t.matrixWorld),this.expandByPoint(bi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Yo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Yo.copy(n.boundingBox)),Yo.applyMatrix4(t.matrixWorld),this.union(Yo)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,bi),bi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(va),Zo.subVectors(this.max,va),vr.subVectors(t.a,va),yr.subVectors(t.b,va),Sr.subVectors(t.c,va),xs.subVectors(yr,vr),vs.subVectors(Sr,yr),ks.subVectors(vr,Sr);let e=[0,-xs.z,xs.y,0,-vs.z,vs.y,0,-ks.z,ks.y,xs.z,0,-xs.x,vs.z,0,-vs.x,ks.z,0,-ks.x,-xs.y,xs.x,0,-vs.y,vs.x,0,-ks.y,ks.x,0];return!Qh(e,vr,yr,Sr,Zo)||(e=[1,0,0,0,1,0,0,0,1],!Qh(e,vr,yr,Sr,Zo))?!1:(Jo.crossVectors(xs,vs),e=[Jo.x,Jo.y,Jo.z],Qh(e,vr,yr,Sr,Zo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,bi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(bi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(as[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),as[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),as[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),as[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),as[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),as[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),as[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),as[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(as),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},as=[new G,new G,new G,new G,new G,new G,new G,new G],bi=new G,Yo=new Vn,vr=new G,yr=new G,Sr=new G,xs=new G,vs=new G,ks=new G,va=new G,Zo=new G,Jo=new G,zs=new G;function Qh(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){zs.fromArray(i,r);let o=s.x*Math.abs(zs.x)+s.y*Math.abs(zs.y)+s.z*Math.abs(zs.z),l=t.dot(zs),c=e.dot(zs),h=n.dot(zs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var dn=new G,Ko=new Lt,Jg=0,qe=class extends Vi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Jg++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=$u,this.updateRanges=[],this.gpuType=di,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ko.fromBufferAttribute(this,e),Ko.applyMatrix3(t),this.setXY(e,Ko.x,Ko.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)dn.fromBufferAttribute(this,e),dn.applyMatrix3(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)dn.fromBufferAttribute(this,e),dn.applyMatrix4(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)dn.fromBufferAttribute(this,e),dn.applyNormalMatrix(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)dn.fromBufferAttribute(this,e),dn.transformDirection(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=wi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Xe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=wi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=wi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=wi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=wi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Xe(e,this.array),n=Xe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Xe(e,this.array),n=Xe(n,this.array),s=Xe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Xe(e,this.array),n=Xe(n,this.array),s=Xe(s,this.array),r=Xe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Oa=class extends qe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ba=class extends qe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ln=class extends qe{constructor(t,e,n){super(new Float32Array(t),e,n)}},Kg=new Vn,ya=new G,tu=new G,Jn=class{constructor(t=new G,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Kg.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ya.subVectors(t,this.center);let e=ya.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ya,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(tu.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ya.copy(t.center).add(tu)),this.expandByPoint(ya.copy(t.center).sub(tu))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},jg=0,ui=new Be,eu=new yn,br=new G,si=new Vn,Sa=new Vn,xn=new G,cn=class i extends Vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jg++}),this.uuid=ki(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(bg(t)?Ba:Oa)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Se().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return ui.makeRotationFromQuaternion(t),this.applyMatrix4(ui),this}rotateX(t){return ui.makeRotationX(t),this.applyMatrix4(ui),this}rotateY(t){return ui.makeRotationY(t),this.applyMatrix4(ui),this}rotateZ(t){return ui.makeRotationZ(t),this.applyMatrix4(ui),this}translate(t,e,n){return ui.makeTranslation(t,e,n),this.applyMatrix4(ui),this}scale(t,e,n){return ui.makeScale(t,e,n),this.applyMatrix4(ui),this}lookAt(t){return eu.lookAt(t),eu.updateMatrix(),this.applyMatrix4(eu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(br).negate(),this.translate(br.x,br.y,br.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ln(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&me("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){_e("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];si.setFromBufferAttribute(r),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,si.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,si.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(si.min),this.boundingBox.expandByPoint(si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&_e('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){_e("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(t){let n=this.boundingSphere.center;if(si.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Sa.setFromBufferAttribute(o),this.morphTargetsRelative?(xn.addVectors(si.min,Sa.min),si.expandByPoint(xn),xn.addVectors(si.max,Sa.max),si.expandByPoint(xn)):(si.expandByPoint(Sa.min),si.expandByPoint(Sa.max))}si.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)xn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(xn));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)xn.fromBufferAttribute(o,c),l&&(br.fromBufferAttribute(t,c),xn.add(br)),s=Math.max(s,n.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&_e('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){_e("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new qe(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let M=0;M<n.count;M++)o[M]=new G,l[M]=new G;let c=new G,h=new G,m=new G,d=new Lt,g=new Lt,x=new Lt,A=new G,p=new G;function f(M,L,k){c.fromBufferAttribute(n,M),h.fromBufferAttribute(n,L),m.fromBufferAttribute(n,k),d.fromBufferAttribute(r,M),g.fromBufferAttribute(r,L),x.fromBufferAttribute(r,k),h.sub(c),m.sub(c),g.sub(d),x.sub(d);let $=1/(g.x*x.y-x.x*g.y);isFinite($)&&(A.copy(h).multiplyScalar(x.y).addScaledVector(m,-g.y).multiplyScalar($),p.copy(m).multiplyScalar(g.x).addScaledVector(h,-x.x).multiplyScalar($),o[M].add(A),o[L].add(A),o[k].add(A),l[M].add(p),l[L].add(p),l[k].add(p))}let N=this.groups;N.length===0&&(N=[{start:0,count:t.count}]);for(let M=0,L=N.length;M<L;++M){let k=N[M],$=k.start,et=k.count;for(let it=$,q=$+et;it<q;it+=3)f(t.getX(it+0),t.getX(it+1),t.getX(it+2))}let F=new G,T=new G,b=new G,D=new G;function z(M){b.fromBufferAttribute(s,M),D.copy(b);let L=o[M];F.copy(L),F.sub(b.multiplyScalar(b.dot(L))).normalize(),T.crossVectors(D,L);let $=T.dot(l[M])<0?-1:1;a.setXYZW(M,F.x,F.y,F.z,$)}for(let M=0,L=N.length;M<L;++M){let k=N[M],$=k.start,et=k.count;for(let it=$,q=$+et;it<q;it+=3)z(t.getX(it+0)),z(t.getX(it+1)),z(t.getX(it+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new qe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,g=n.count;d<g;d++)n.setXYZ(d,0,0,0);let s=new G,r=new G,a=new G,o=new G,l=new G,c=new G,h=new G,m=new G;if(t)for(let d=0,g=t.count;d<g;d+=3){let x=t.getX(d+0),A=t.getX(d+1),p=t.getX(d+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,A),a.fromBufferAttribute(e,p),h.subVectors(a,r),m.subVectors(s,r),h.cross(m),o.fromBufferAttribute(n,x),l.fromBufferAttribute(n,A),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(A,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,g=e.count;d<g;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),m.subVectors(s,r),h.cross(m),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)xn.fromBufferAttribute(t,e),xn.normalize(),t.setXYZ(e,xn.x,xn.y,xn.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,m=o.normalized,d=new c.constructor(l.length*h),g=0,x=0;for(let A=0,p=l.length;A<p;A++){o.isInterleavedBufferAttribute?g=l[A]*o.data.stride+o.offset:g=l[A]*h;for(let f=0;f<h;f++)d[x++]=c[g++]}return new qe(d,h,m)}if(this.index===null)return me("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,m=c.length;h<m;h++){let d=c[h],g=t(d,n);l.push(g)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let m=0,d=c.length;m<d;m++){let g=c[m];h.push(g.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],m=r[c];for(let d=0,g=m.length;d<g;d++)h.push(m[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let m=a[c];this.addGroup(m.start,m.count,m.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Dl=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=$u,this.updateRanges=[],this.version=0,this.uuid=ki()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ki()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ki()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},zn=new G,Ai=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)zn.fromBufferAttribute(this,e),zn.applyMatrix4(t),this.setXYZ(e,zn.x,zn.y,zn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)zn.fromBufferAttribute(this,e),zn.applyNormalMatrix(t),this.setXYZ(e,zn.x,zn.y,zn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)zn.fromBufferAttribute(this,e),zn.transformDirection(t),this.setXYZ(e,zn.x,zn.y,zn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=wi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Xe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Xe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=wi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=wi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=wi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=wi(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Xe(e,this.array),n=Xe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Xe(e,this.array),n=Xe(n,this.array),s=Xe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Xe(e,this.array),n=Xe(n,this.array),s=Xe(s,this.array),r=Xe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Na("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new qe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Na("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},nu=new G,Qg=new G,t0=new Se,Mi=class{constructor(t=new G(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=nu.subVectors(n,e).cross(Qg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(nu),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||t0.getNormalMatrix(t),s=this.coplanarPoint(nu).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},e0=0,Gi=class extends Vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:e0++}),this.uuid=ki(),this.name="",this.type="Material",this.blending=Wr,this.side=As,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ru,this.blendDst=Iu,this.blendEquation=Ks,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pe(0,0,0),this.blendAlpha=0,this.depthFunc=Ir,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vl,this.stencilZFail=vl,this.stencilZPass=vl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){me(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){me(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new pe().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Mi().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Lt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Lt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var os=new G,iu=new G,jo=new G,Qo=new G,$s=class{constructor(t=new G,e=new G(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,os)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=os.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(os.copy(this.origin).addScaledVector(this.direction,e),os.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){iu.copy(t).add(e).multiplyScalar(.5),jo.copy(e).sub(t).normalize(),Qo.copy(this.origin).sub(iu);let r=t.distanceTo(e)*.5,a=-this.direction.dot(jo),o=Qo.dot(this.direction),l=-Qo.dot(jo),c=Qo.lengthSq(),h=Math.abs(1-a*a),m,d,g,x;if(h>0)if(m=a*l-o,d=a*o-l,x=r*h,m>=0)if(d>=-x)if(d<=x){let A=1/h;m*=A,d*=A,g=m*(m+a*d+2*o)+d*(a*m+d+2*l)+c}else d=r,m=Math.max(0,-(a*d+o)),g=-m*m+d*(d+2*l)+c;else d=-r,m=Math.max(0,-(a*d+o)),g=-m*m+d*(d+2*l)+c;else d<=-x?(m=Math.max(0,-(-a*r+o)),d=m>0?-r:Math.min(Math.max(-r,-l),r),g=-m*m+d*(d+2*l)+c):d<=x?(m=0,d=Math.min(Math.max(-r,-l),r),g=d*(d+2*l)+c):(m=Math.max(0,-(a*r+o)),d=m>0?r:Math.min(Math.max(-r,-l),r),g=-m*m+d*(d+2*l)+c);else d=a>0?-r:r,m=Math.max(0,-(a*d+o)),g=-m*m+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,m),s&&s.copy(iu).addScaledVector(jo,d),g}intersectSphere(t,e){if(t.radius<0)return null;os.subVectors(t.center,this.origin);let n=os.dot(this.direction),s=os.dot(os)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,m=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),m>=0?(o=(t.min.z-d.z)*m,l=(t.max.z-d.z)*m):(o=(t.max.z-d.z)*m,l=(t.min.z-d.z)*m),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,os)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,m=t.x-a.x,d=t.y-a.y,g=t.z-a.z,x=e.x-a.x,A=e.y-a.y,p=e.z-a.z,f=n.x-a.x,N=n.y-a.y,F=n.z-a.z,T=Math.abs(l),b=Math.abs(c),D=Math.abs(h),z,M,L,k,$,et,it,q,j,ot,lt,bt;if(T>=b&&T>=D?(L=l,et=m,j=x,bt=f,l>=0?(z=c,M=h,k=d,$=g,it=A,q=p,ot=N,lt=F):(z=h,M=c,k=g,$=d,it=p,q=A,ot=F,lt=N)):b>=D?(L=c,et=d,j=A,bt=N,c>=0?(z=h,M=l,k=g,$=m,it=p,q=x,ot=F,lt=f):(z=l,M=h,k=m,$=g,it=x,q=p,ot=f,lt=F)):(L=h,et=g,j=p,bt=F,h>=0?(z=l,M=c,k=m,$=d,it=x,q=A,ot=f,lt=N):(z=c,M=l,k=d,$=m,it=A,q=x,ot=N,lt=f)),L===0)return null;let ht=z/L,vt=M/L,gt=1/L,kt=k-ht*et,Wt=$-vt*et,Fe=it-ht*j,Me=q-vt*j,Ie=ot-ht*bt,dt=lt-vt*bt,mt=Ie*Me-dt*Fe,Tt=kt*dt-Wt*Ie,se=Fe*Wt-Me*kt;if(s){if(mt<0||Tt<0||se<0)return null}else if((mt<0||Tt<0||se<0)&&(mt>0||Tt>0||se>0))return null;let zt=mt+Tt+se;if(zt===0)return null;let de=gt*(mt*et+Tt*j+se*bt);return(zt>0?de<0:de>0)?null:this.at(de/zt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Xs=class extends Gi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cs,this.combine=oc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},wf=new Be,Vs=new $s,tl=new Jn,Ef=new G,el=new G,nl=new G,il=new G,su=new G,sl=new G,Tf=new G,rl=new G,Sn=class extends yn{constructor(t=new cn,e=new Xs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){sl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],m=r[l];h!==0&&(su.fromBufferAttribute(m,t),a?sl.addScaledVector(su,h):sl.addScaledVector(su.sub(e),h))}e.add(sl)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),tl.copy(n.boundingSphere),tl.applyMatrix4(r),Vs.copy(t.ray).recast(t.near),!(tl.containsPoint(Vs.origin)===!1&&(Vs.intersectSphere(tl,Ef)===null||Vs.origin.distanceToSquared(Ef)>(t.far-t.near)**2))&&(wf.copy(r).invert(),Vs.copy(t.ray).applyMatrix4(wf),!(n.boundingBox!==null&&Vs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Vs)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,m=r.attributes.normal,d=r.groups,g=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,A=d.length;x<A;x++){let p=d[x],f=a[p.materialIndex],N=Math.max(p.start,g.start),F=Math.min(o.count,Math.min(p.start+p.count,g.start+g.count));for(let T=N,b=F;T<b;T+=3){let D=o.getX(T),z=o.getX(T+1),M=o.getX(T+2);s=al(this,f,t,n,c,h,m,D,z,M),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let x=Math.max(0,g.start),A=Math.min(o.count,g.start+g.count);for(let p=x,f=A;p<f;p+=3){let N=o.getX(p),F=o.getX(p+1),T=o.getX(p+2);s=al(this,a,t,n,c,h,m,N,F,T),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,A=d.length;x<A;x++){let p=d[x],f=a[p.materialIndex],N=Math.max(p.start,g.start),F=Math.min(l.count,Math.min(p.start+p.count,g.start+g.count));for(let T=N,b=F;T<b;T+=3){let D=T,z=T+1,M=T+2;s=al(this,f,t,n,c,h,m,D,z,M),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let x=Math.max(0,g.start),A=Math.min(l.count,g.start+g.count);for(let p=x,f=A;p<f;p+=3){let N=p,F=p+1,T=p+2;s=al(this,a,t,n,c,h,m,N,F,T),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function n0(i,t,e,n,s,r,a,o){let l;if(t.side===Hn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===As,o),l===null)return null;rl.copy(o),rl.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(rl);return c<e.near||c>e.far?null:{distance:c,point:rl.clone(),object:i}}function al(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,el),i.getVertexPosition(l,nl),i.getVertexPosition(c,il);let h=n0(i,t,e,n,el,nl,il,Tf);if(h){let m=new G;Ss.getBarycoord(Tf,el,nl,il,m),s&&(h.uv=Ss.getInterpolatedAttribute(s,o,l,c,m,new Lt)),r&&(h.uv1=Ss.getInterpolatedAttribute(r,o,l,c,m,new Lt)),a&&(h.normal=Ss.getInterpolatedAttribute(a,o,l,c,m,new G),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new G,materialIndex:0};Ss.getNormal(el,nl,il,d.normal),h.face=d,h.barycoord=m}return h}var ka=class extends Yn{constructor(t=null,e=1,n=1,s,r,a,o,l,c=vn,h=vn,m,d){super(null,a,o,l,c,h,s,r,m,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var za=class extends qe{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Mr=new Be,Af=new Be,ol=[],Cf=new Vn,i0=new Be,ba=new Sn,Ma=new Jn,Va=class extends Sn{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new za(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,i0)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Vn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Mr),Cf.copy(t.boundingBox).applyMatrix4(Mr),this.boundingBox.union(Cf)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Jn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Mr),Ma.copy(t.boundingSphere).applyMatrix4(Mr),this.boundingSphere.union(Ma)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(ba.geometry=this.geometry,ba.material=this.material,ba.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ma.copy(this.boundingSphere),Ma.applyMatrix4(n),t.ray.intersectsSphere(Ma)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Mr),Af.multiplyMatrices(n,Mr),ba.matrixWorld=Af,ba.raycast(t,ol);for(let a=0,o=ol.length;a<o;a++){let l=ol[a];l.instanceId=r,l.object=this,e.push(l)}ol.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new za(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ka(new Float32Array(s*this.count),s,this.count,pc,di));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Hs=new Jn,s0=new Lt(.5,.5),ll=new G,Or=class{constructor(t=new Mi,e=new Mi,n=new Mi,s=new Mi,r=new Mi,a=new Mi){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ei,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],m=r[5],d=r[6],g=r[7],x=r[8],A=r[9],p=r[10],f=r[11],N=r[12],F=r[13],T=r[14],b=r[15];if(s[0].setComponents(c-a,g-h,f-x,b-N).normalize(),s[1].setComponents(c+a,g+h,f+x,b+N).normalize(),s[2].setComponents(c+o,g+m,f+A,b+F).normalize(),s[3].setComponents(c-o,g-m,f-A,b-F).normalize(),n)s[4].setComponents(l,d,p,T).normalize(),s[5].setComponents(c-l,g-d,f-p,b-T).normalize();else if(s[4].setComponents(c-l,g-d,f-p,b-T).normalize(),e===Ei)s[5].setComponents(c+l,g+d,f+p,b+T).normalize();else if(e===Pr)s[5].setComponents(l,d,p,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Hs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Hs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Hs)}intersectsSprite(t){Hs.center.set(0,0,0);let e=s0.distanceTo(t.center);return Hs.radius=.7071067811865476+e,Hs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Hs)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(ll.x=s.normal.x>0?t.max.x:t.min.x,ll.y=s.normal.y>0?t.max.y:t.min.y,ll.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ll)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var qs=class extends Gi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Nl=new G,Ul=new G,Rf=new Be,wa=new $s,cl=new Jn,ru=new G,If=new G,Fl=class extends yn{constructor(t=new cn,e=new qs){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Nl.fromBufferAttribute(e,s-1),Ul.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Nl.distanceTo(Ul);t.setAttribute("lineDistance",new ln(n,1))}else me("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),cl.copy(n.boundingSphere),cl.applyMatrix4(s),cl.radius+=r,t.ray.intersectsSphere(cl)===!1)return;Rf.copy(s).invert(),wa.copy(t.ray).applyMatrix4(Rf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let g=Math.max(0,a.start),x=Math.min(h.count,a.start+a.count);for(let A=g,p=x-1;A<p;A+=c){let f=h.getX(A),N=h.getX(A+1),F=hl(this,t,wa,l,f,N,A);F&&e.push(F)}if(this.isLineLoop){let A=h.getX(x-1),p=h.getX(g),f=hl(this,t,wa,l,A,p,x-1);f&&e.push(f)}}else{let g=Math.max(0,a.start),x=Math.min(d.count,a.start+a.count);for(let A=g,p=x-1;A<p;A+=c){let f=hl(this,t,wa,l,A,A+1,A);f&&e.push(f)}if(this.isLineLoop){let A=hl(this,t,wa,l,x-1,g,x-1);A&&e.push(A)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function hl(i,t,e,n,s,r,a){let o=i.geometry.attributes.position;if(Nl.fromBufferAttribute(o,s),Ul.fromBufferAttribute(o,r),e.distanceSqToSegment(Nl,Ul,ru,If)>n)return;ru.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(ru);if(!(c<t.near||c>t.far))return{distance:c,point:If.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Ha=class extends Fl{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},Ol=class extends Gi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Pf=new Be,gu=new $s,ul=new Jn,dl=new G,Ys=class extends yn{constructor(t=new cn,e=new Ol){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ul.copy(n.boundingSphere),ul.applyMatrix4(s),ul.radius+=r,t.ray.intersectsSphere(ul)===!1)return;Pf.copy(s).invert(),gu.copy(t.ray).applyMatrix4(Pf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,m=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),g=Math.min(c.count,a.start+a.count);for(let x=d,A=g;x<A;x++){let p=c.getX(x);dl.fromBufferAttribute(m,p),Lf(dl,p,l,s,t,e,this)}}else{let d=Math.max(0,a.start),g=Math.min(m.count,a.start+a.count);for(let x=d,A=g;x<A;x++)dl.fromBufferAttribute(m,x),Lf(dl,x,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Lf(i,t,e,n,s,r,a){let o=gu.distanceSqToPoint(i);if(o<e){let l=new G;gu.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Ga=class extends Yn{constructor(t=[],e=Cs,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var bs=class extends Yn{constructor(t,e,n=Ri,s,r,a,o=vn,l=vn,c,h=zi,m=1){if(h!==zi&&h!==Is)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:m};super(d,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Nr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Bl=class extends bs{constructor(t,e=Ri,n=Cs,s,r,a=vn,o=vn,l,c=zi){let h={width:t,height:t,depth:1},m=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=m,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Wa=class extends Yn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Br=class i extends cn{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],m=[],d=0,g=0;x("z","y","x",-1,-1,n,e,t,a,r,0),x("z","y","x",1,-1,n,e,-t,a,r,1),x("x","z","y",1,1,t,n,e,s,a,2),x("x","z","y",1,-1,t,n,-e,s,a,3),x("x","y","z",1,-1,t,e,n,s,r,4),x("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ln(c,3)),this.setAttribute("normal",new ln(h,3)),this.setAttribute("uv",new ln(m,2));function x(A,p,f,N,F,T,b,D,z,M,L){let k=T/z,$=b/M,et=T/2,it=b/2,q=D/2,j=z+1,ot=M+1,lt=0,bt=0,ht=new G;for(let vt=0;vt<ot;vt++){let gt=vt*$-it;for(let kt=0;kt<j;kt++){let Wt=kt*k-et;ht[A]=Wt*N,ht[p]=gt*F,ht[f]=q,c.push(ht.x,ht.y,ht.z),ht[A]=0,ht[p]=0,ht[f]=D>0?1:-1,h.push(ht.x,ht.y,ht.z),m.push(kt/z),m.push(1-vt/M),lt+=1}}for(let vt=0;vt<M;vt++)for(let gt=0;gt<z;gt++){let kt=d+gt+j*vt,Wt=d+gt+j*(vt+1),Fe=d+(gt+1)+j*(vt+1),Me=d+(gt+1)+j*vt;l.push(kt,Wt,Me),l.push(Wt,Fe,Me),bt+=6}o.addGroup(g,bt,L),g+=bt,d+=lt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var $a=class i extends cn{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],m=[],d=[],g=[],x=0,A=[],p=n/2,f=0;N(),a===!1&&(t>0&&F(!0),e>0&&F(!1)),this.setIndex(h),this.setAttribute("position",new ln(m,3)),this.setAttribute("normal",new ln(d,3)),this.setAttribute("uv",new ln(g,2));function N(){let T=new G,b=new G,D=0,z=(e-t)/n;for(let M=0;M<=r;M++){let L=[],k=M/r,$=k*(e-t)+t;for(let et=0;et<=s;et++){let it=et/s,q=it*l+o,j=Math.sin(q),ot=Math.cos(q);b.x=$*j,b.y=-k*n+p,b.z=$*ot,m.push(b.x,b.y,b.z),T.set(j,z,ot).normalize(),d.push(T.x,T.y,T.z),g.push(it,1-k),L.push(x++)}A.push(L)}for(let M=0;M<s;M++)for(let L=0;L<r;L++){let k=A[L][M],$=A[L+1][M],et=A[L+1][M+1],it=A[L][M+1];(t>0||L!==0)&&(h.push(k,$,it),D+=3),(e>0||L!==r-1)&&(h.push($,et,it),D+=3)}c.addGroup(f,D,0),f+=D}function F(T){let b=x,D=new Lt,z=new G,M=0,L=T===!0?t:e,k=T===!0?1:-1;for(let et=1;et<=s;et++)m.push(0,p*k,0),d.push(0,k,0),g.push(.5,.5),x++;let $=x;for(let et=0;et<=s;et++){let q=et/s*l+o,j=Math.cos(q),ot=Math.sin(q);z.x=L*ot,z.y=p*k,z.z=L*j,m.push(z.x,z.y,z.z),d.push(0,k,0),D.x=j*.5+.5,D.y=ot*.5*k+.5,g.push(D.x,D.y),x++}for(let et=0;et<s;et++){let it=b+et,q=$+et;T===!0?h.push(q,q+1,it):h.push(q+1,q,it),M+=3}c.addGroup(f,M,T===!0?1:2),f+=M}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var ai=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){me("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,g=(a-h)/d;return(s+g)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new Lt:new G);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new G,s=[],r=[],a=[],o=new G,l=new Be;for(let g=0;g<=t;g++){let x=g/t;s[g]=this.getTangentAt(x,new G)}r[0]=new G,a[0]=new G;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),m=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),m<=c&&(c=m,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let g=1;g<=t;g++){if(r[g]=r[g-1].clone(),a[g]=a[g-1].clone(),o.crossVectors(s[g-1],s[g]),o.length()>Number.EPSILON){o.normalize();let x=Math.acos(be(s[g-1].dot(s[g]),-1,1));r[g].applyMatrix4(l.makeRotationAxis(o,x))}a[g].crossVectors(s[g],r[g])}if(e===!0){let g=Math.acos(be(r[0].dot(r[t]),-1,1));g/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(g=-g);for(let x=1;x<=t;x++)r[x].applyMatrix4(l.makeRotationAxis(s[x],g*x)),a[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},kr=class extends ai{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new Lt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),m=Math.sin(this.aRotation),d=l-this.aX,g=c-this.aY;l=d*h-g*m+this.aX,c=d*m+g*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},kl=class extends kr{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Zu(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,m){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,g=(o-a)/h-(l-a)/(h+m)+(l-o)/m;d*=h,g*=h,s(a,o,d,g)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var Df=new G,Nf=new G,au=new Zu,ou=new Zu,lu=new Zu,zl=class extends ai{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new G){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Nf.subVectors(s[0],s[1]).add(s[0]),c=Nf);let m=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Df.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Df),this.curveType==="centripetal"||this.curveType==="chordal"){let g=this.curveType==="chordal"?.5:.25,x=Math.pow(c.distanceToSquared(m),g),A=Math.pow(m.distanceToSquared(d),g),p=Math.pow(d.distanceToSquared(h),g);A<1e-4&&(A=1),x<1e-4&&(x=A),p<1e-4&&(p=A),au.initNonuniformCatmullRom(c.x,m.x,d.x,h.x,x,A,p),ou.initNonuniformCatmullRom(c.y,m.y,d.y,h.y,x,A,p),lu.initNonuniformCatmullRom(c.z,m.z,d.z,h.z,x,A,p)}else this.curveType==="catmullrom"&&(au.initCatmullRom(c.x,m.x,d.x,h.x,this.tension),ou.initCatmullRom(c.y,m.y,d.y,h.y,this.tension),lu.initCatmullRom(c.z,m.z,d.z,h.z,this.tension));return n.set(au.calc(l),ou.calc(l),lu.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new G().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Uf(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function r0(i,t){let e=1-i;return e*e*t}function a0(i,t){return 2*(1-i)*i*t}function o0(i,t){return i*i*t}function Ca(i,t,e,n){return r0(i,t)+a0(i,e)+o0(i,n)}function l0(i,t){let e=1-i;return e*e*e*t}function c0(i,t){let e=1-i;return 3*e*e*i*t}function h0(i,t){return 3*(1-i)*i*i*t}function u0(i,t){return i*i*i*t}function Ra(i,t,e,n,s){return l0(i,t)+c0(i,e)+h0(i,n)+u0(i,s)}var Xa=class extends ai{constructor(t=new Lt,e=new Lt,n=new Lt,s=new Lt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Lt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ra(t,s.x,r.x,a.x,o.x),Ra(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Vl=class extends ai{constructor(t=new G,e=new G,n=new G,s=new G){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new G){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ra(t,s.x,r.x,a.x,o.x),Ra(t,s.y,r.y,a.y,o.y),Ra(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},qa=class extends ai{constructor(t=new Lt,e=new Lt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Lt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Lt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Hl=class extends ai{constructor(t=new G,e=new G){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new G){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new G){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ya=class extends ai{constructor(t=new Lt,e=new Lt,n=new Lt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Lt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Ca(t,s.x,r.x,a.x),Ca(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Gl=class extends ai{constructor(t=new G,e=new G,n=new G){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new G){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Ca(t,s.x,r.x,a.x),Ca(t,s.y,r.y,a.y),Ca(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Za=class extends ai{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Lt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],m=s[a>s.length-3?s.length-1:a+2];return n.set(Uf(o,l.x,c.x,h.x,m.x),Uf(o,l.y,c.y,h.y,m.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Lt().fromArray(s))}return this}},_u=Object.freeze({__proto__:null,ArcCurve:kl,CatmullRomCurve3:zl,CubicBezierCurve:Xa,CubicBezierCurve3:Vl,EllipseCurve:kr,LineCurve:qa,LineCurve3:Hl,QuadraticBezierCurve:Ya,QuadraticBezierCurve3:Gl,SplineCurve:Za}),Wl=class extends ai{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new _u[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new _u[s.type]().fromJSON(s))}return this}},Zs=class extends Wl{constructor(t){super(),this.type="Path",this.currentPoint=new Lt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new qa(this.currentPoint.clone(),new Lt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Ya(this.currentPoint.clone(),new Lt(t,e),new Lt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new Xa(this.currentPoint.clone(),new Lt(t,e),new Lt(n,s),new Lt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Za(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new kr(t,e,n,s,r,a,o,l);if(this.curves.length>0){let m=c.getPoint(0);m.equals(this.currentPoint)||this.lineTo(m.x,m.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},zr=class extends Zs{constructor(t){super(t),this.uuid=ki(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Zs().fromJSON(s))}return this}};function d0(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Dp(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=_0(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let h=o,m=l;for(let d=e;d<s;d+=e){let g=i[d],x=i[d+1];g<o&&(o=g),x<l&&(l=x),g>h&&(h=g),x>m&&(m=x)}c=Math.max(h-o,m-l),c=c!==0?32767/c:0}return Ja(r,a,e,o,l,c,0),a}function Dp(i,t,e,n,s){let r;if(s===C0(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=Ff(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=Ff(a/n|0,i[a],i[a+1],r);return r&&Vr(r,r.next)&&(ja(r),r=r.next),r}function Js(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Vr(e,e.next)||en(e.prev,e,e.next)===0)){if(ja(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ja(i,t,e,n,s,r,a){if(!i)return;!a&&r&&b0(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?p0(i,n,s,r):f0(i)){t.push(l.i,i.i,c.i),ja(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=m0(Js(i),t),Ja(i,t,e,n,s,r,2)):a===2&&g0(i,t,e,n,s,r):Ja(Js(i),t,e,n,s,r,1);break}}}function f0(i){let t=i.prev,e=i,n=i.next;if(en(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(s,r,a),m=Math.min(o,l,c),d=Math.max(s,r,a),g=Math.max(o,l,c),x=n.next;for(;x!==t;){if(x.x>=h&&x.x<=d&&x.y>=m&&x.y<=g&&Ea(s,o,r,l,a,c,x.x,x.y)&&en(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function p0(i,t,e,n){let s=i.prev,r=i,a=i.next;if(en(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,m=r.y,d=a.y,g=Math.min(o,l,c),x=Math.min(h,m,d),A=Math.max(o,l,c),p=Math.max(h,m,d),f=xu(g,x,t,e,n),N=xu(A,p,t,e,n),F=i.prevZ,T=i.nextZ;for(;F&&F.z>=f&&T&&T.z<=N;){if(F.x>=g&&F.x<=A&&F.y>=x&&F.y<=p&&F!==s&&F!==a&&Ea(o,h,l,m,c,d,F.x,F.y)&&en(F.prev,F,F.next)>=0||(F=F.prevZ,T.x>=g&&T.x<=A&&T.y>=x&&T.y<=p&&T!==s&&T!==a&&Ea(o,h,l,m,c,d,T.x,T.y)&&en(T.prev,T,T.next)>=0))return!1;T=T.nextZ}for(;F&&F.z>=f;){if(F.x>=g&&F.x<=A&&F.y>=x&&F.y<=p&&F!==s&&F!==a&&Ea(o,h,l,m,c,d,F.x,F.y)&&en(F.prev,F,F.next)>=0)return!1;F=F.prevZ}for(;T&&T.z<=N;){if(T.x>=g&&T.x<=A&&T.y>=x&&T.y<=p&&T!==s&&T!==a&&Ea(o,h,l,m,c,d,T.x,T.y)&&en(T.prev,T,T.next)>=0)return!1;T=T.nextZ}return!0}function m0(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Vr(n,s)&&Up(n,e,e.next,s)&&Ka(n,s)&&Ka(s,n)&&(t.push(n.i,e.i,s.i),ja(e),ja(e.next),e=i=s),e=e.next}while(e!==i);return Js(e)}function g0(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&E0(a,o)){let l=Fp(a,o);a=Js(a,a.next),l=Js(l,l.next),Ja(a,t,e,n,s,r,0),Ja(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function _0(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=Dp(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(w0(c))}s.sort(x0);for(let r=0;r<s.length;r++)e=v0(s[r],e);return e}function x0(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function v0(i,t){let e=y0(i,t);if(!e)return t;let n=Fp(e,i);return Js(n,n.next),Js(e,e.next)}function y0(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(Vr(i,e))return e;do{if(Vr(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let m=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(m<=n&&m>r&&(r=m,a=e.x<e.next.x?e:e.next,m===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Np(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let m=Math.abs(s-e.y)/(n-e.x);Ka(e,i)&&(m<h||m===h&&(e.x>a.x||e.x===a.x&&S0(a,e)))&&(a=e,h=m)}e=e.next}while(e!==o);return a}function S0(i,t){return en(i.prev,i,t.prev)<0&&en(t.next,i,i.next)<0}function b0(i,t,e,n){let s=i;do s.z===0&&(s.z=xu(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,M0(s)}function M0(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function xu(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function w0(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Np(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Ea(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&Np(i,t,e,n,s,r,a,o)}function E0(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!T0(i,t)&&(Ka(i,t)&&Ka(t,i)&&A0(i,t)&&(en(i.prev,i,t.prev)||en(i,t.prev,t))||Vr(i,t)&&en(i.prev,i,i.next)>0&&en(t.prev,t,t.next)>0)}function en(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Vr(i,t){return i.x===t.x&&i.y===t.y}function Up(i,t,e,n){let s=pl(en(i,t,e)),r=pl(en(i,t,n)),a=pl(en(e,n,i)),o=pl(en(e,n,t));return!!(s!==r&&a!==o||s===0&&fl(i,e,t)||r===0&&fl(i,n,t)||a===0&&fl(e,i,n)||o===0&&fl(e,t,n))}function fl(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function pl(i){return i>0?1:i<0?-1:0}function T0(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Up(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ka(i,t){return en(i.prev,i,i.next)<0?en(i,t,i.next)>=0&&en(i,i.prev,t)>=0:en(i,t,i.prev)<0||en(i,i.next,t)<0}function A0(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Fp(i,t){let e=vu(i.i,i.x,i.y),n=vu(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Ff(i,t,e,n){let s=vu(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ja(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function vu(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function C0(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var yu=class{static triangulate(t,e,n=2){return d0(t,e,n)}},Gs=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Of(t),Bf(n,t);let a=t.length;e.forEach(Of);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Bf(n,e[l]);let o=yu.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Of(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Bf(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Qa=class i extends cn{constructor(t=new zr([new Lt(.5,.5),new Lt(-.5,.5),new Lt(-.5,-.5),new Lt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new ln(s,3)),this.setAttribute("uv",new ln(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,m=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,g=e.bevelThickness!==void 0?e.bevelThickness:.2,x=e.bevelSize!==void 0?e.bevelSize:g-.1,A=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3,f=e.extrudePath,N=e.UVGenerator!==void 0?e.UVGenerator:R0,F,T=!1,b,D,z,M;if(f){F=f.getSpacedPoints(h),T=!0,d=!1;let at=f.isCatmullRomCurve3?f.closed:!1;b=f.computeFrenetFrames(h,at),D=new G,z=new G,M=new G}d||(p=0,g=0,x=0,A=0);let L=o.extractPoints(c),k=L.shape,$=L.holes;if(!Gs.isClockWise(k)){k=k.reverse();for(let at=0,Mt=$.length;at<Mt;at++){let H=$[at];Gs.isClockWise(H)&&($[at]=H.reverse())}}function it(at){let H=10000000000000001e-36,wt=at[0];for(let It=1;It<=at.length;It++){let ce=It%at.length,Zt=at[ce],ue=Zt.x-wt.x,he=Zt.y-wt.y,W=ue*ue+he*he,Ae=Math.max(Math.abs(Zt.x),Math.abs(Zt.y),Math.abs(wt.x),Math.abs(wt.y)),$t=H*Ae*Ae;if(W<=$t){at.splice(ce,1),It--;continue}wt=Zt}}it(k),$.forEach(it);let q=$.length,j=k;for(let at=0;at<q;at++){let Mt=$[at];k=k.concat(Mt)}function ot(at,Mt,H){return Mt||_e("ExtrudeGeometry: vec does not exist"),at.clone().addScaledVector(Mt,H)}let lt=k.length;function bt(at,Mt,H){let wt,It,ce,Zt=at.x-Mt.x,ue=at.y-Mt.y,he=H.x-at.x,W=H.y-at.y,Ae=Zt*Zt+ue*ue,$t=Zt*W-ue*he;if(Math.abs($t)>Number.EPSILON){let I=Math.sqrt(Ae),v=Math.sqrt(he*he+W*W),Q=Mt.x-ue/I,st=Mt.y+Zt/I,ct=H.x-W/v,Ct=H.y+he/v,Rt=((ct-Q)*W-(Ct-st)*he)/(Zt*W-ue*he);wt=Q+Zt*Rt-at.x,It=st+ue*Rt-at.y;let ut=wt*wt+It*It;if(ut<=2)return new Lt(wt,It);ce=Math.sqrt(ut/2)}else{let I=!1;Zt>Number.EPSILON?he>Number.EPSILON&&(I=!0):Zt<-Number.EPSILON?he<-Number.EPSILON&&(I=!0):Math.sign(ue)===Math.sign(W)&&(I=!0),I?(wt=-ue,It=Zt,ce=Math.sqrt(Ae)):(wt=Zt,It=ue,ce=Math.sqrt(Ae/2))}return new Lt(wt/ce,It/ce)}let ht=[];for(let at=0,Mt=j.length,H=Mt-1,wt=at+1;at<Mt;at++,H++,wt++)H===Mt&&(H=0),wt===Mt&&(wt=0),ht[at]=bt(j[at],j[H],j[wt]);let vt=[],gt,kt=ht.concat();for(let at=0,Mt=q;at<Mt;at++){let H=$[at];gt=[];for(let wt=0,It=H.length,ce=It-1,Zt=wt+1;wt<It;wt++,ce++,Zt++)ce===It&&(ce=0),Zt===It&&(Zt=0),gt[wt]=bt(H[wt],H[ce],H[Zt]);vt.push(gt),kt=kt.concat(gt)}let Wt;if(p===0)Wt=Gs.triangulateShape(j,$);else{let at=[],Mt=[];for(let H=0;H<p;H++){let wt=H/p,It=g*Math.cos(wt*Math.PI/2),ce=x*Math.sin(wt*Math.PI/2)+A;for(let Zt=0,ue=j.length;Zt<ue;Zt++){let he=ot(j[Zt],ht[Zt],ce);Tt(he.x,he.y,-It),wt===0&&at.push(he)}for(let Zt=0,ue=q;Zt<ue;Zt++){let he=$[Zt];gt=vt[Zt];let W=[];for(let Ae=0,$t=he.length;Ae<$t;Ae++){let I=ot(he[Ae],gt[Ae],ce);Tt(I.x,I.y,-It),wt===0&&W.push(I)}wt===0&&Mt.push(W)}}Wt=Gs.triangulateShape(at,Mt)}let Fe=Wt.length,Me=x+A;for(let at=0;at<lt;at++){let Mt=d?ot(k[at],kt[at],Me):k[at];T?(z.copy(b.normals[0]).multiplyScalar(Mt.x),D.copy(b.binormals[0]).multiplyScalar(Mt.y),M.copy(F[0]).add(z).add(D),Tt(M.x,M.y,M.z)):Tt(Mt.x,Mt.y,0)}for(let at=1;at<=h;at++)for(let Mt=0;Mt<lt;Mt++){let H=d?ot(k[Mt],kt[Mt],Me):k[Mt];T?(z.copy(b.normals[at]).multiplyScalar(H.x),D.copy(b.binormals[at]).multiplyScalar(H.y),M.copy(F[at]).add(z).add(D),Tt(M.x,M.y,M.z)):Tt(H.x,H.y,m/h*at)}for(let at=p-1;at>=0;at--){let Mt=at/p,H=g*Math.cos(Mt*Math.PI/2),wt=x*Math.sin(Mt*Math.PI/2)+A;for(let It=0,ce=j.length;It<ce;It++){let Zt=ot(j[It],ht[It],wt);Tt(Zt.x,Zt.y,m+H)}for(let It=0,ce=$.length;It<ce;It++){let Zt=$[It];gt=vt[It];for(let ue=0,he=Zt.length;ue<he;ue++){let W=ot(Zt[ue],gt[ue],wt);T?Tt(W.x,W.y+F[h-1].y,F[h-1].x+H):Tt(W.x,W.y,m+H)}}}Ie(),dt();function Ie(){let at=s.length/3;if(d){let Mt=0,H=lt*Mt;for(let wt=0;wt<Fe;wt++){let It=Wt[wt];se(It[2]+H,It[1]+H,It[0]+H)}Mt=h+p*2,H=lt*Mt;for(let wt=0;wt<Fe;wt++){let It=Wt[wt];se(It[0]+H,It[1]+H,It[2]+H)}}else{for(let Mt=0;Mt<Fe;Mt++){let H=Wt[Mt];se(H[2],H[1],H[0])}for(let Mt=0;Mt<Fe;Mt++){let H=Wt[Mt];se(H[0]+lt*h,H[1]+lt*h,H[2]+lt*h)}}n.addGroup(at,s.length/3-at,0)}function dt(){let at=s.length/3,Mt=0;mt(j,Mt),Mt+=j.length;for(let H=0,wt=$.length;H<wt;H++){let It=$[H];mt(It,Mt),Mt+=It.length}n.addGroup(at,s.length/3-at,1)}function mt(at,Mt){let H=at.length;for(;--H>=0;){let wt=H,It=H-1;It<0&&(It=at.length-1);for(let ce=0,Zt=h+p*2;ce<Zt;ce++){let ue=lt*ce,he=lt*(ce+1),W=Mt+wt+ue,Ae=Mt+It+ue,$t=Mt+It+he,I=Mt+wt+he;zt(W,Ae,$t,I)}}}function Tt(at,Mt,H){l.push(at),l.push(Mt),l.push(H)}function se(at,Mt,H){de(at),de(Mt),de(H);let wt=s.length/3,It=N.generateTopUV(n,s,wt-3,wt-2,wt-1);fe(It[0]),fe(It[1]),fe(It[2])}function zt(at,Mt,H,wt){de(at),de(Mt),de(wt),de(Mt),de(H),de(wt);let It=s.length/3,ce=N.generateSideWallUV(n,s,It-6,It-3,It-2,It-1);fe(ce[0]),fe(ce[1]),fe(ce[3]),fe(ce[1]),fe(ce[2]),fe(ce[3])}function de(at){s.push(l[at*3+0]),s.push(l[at*3+1]),s.push(l[at*3+2])}function fe(at){r.push(at.x),r.push(at.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return I0(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new _u[s.type]().fromJSON(s)),new i(n,t.options)}},R0={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new Lt(r,a),new Lt(o,l),new Lt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],m=t[n*3+2],d=t[s*3],g=t[s*3+1],x=t[s*3+2],A=t[r*3],p=t[r*3+1],f=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new Lt(a,1-l),new Lt(c,1-m),new Lt(d,1-x),new Lt(A,1-f)]:[new Lt(o,1-l),new Lt(h,1-m),new Lt(g,1-x),new Lt(p,1-f)]}};function I0(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var to=class i extends cn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,m=t/o,d=e/l,g=[],x=[],A=[],p=[];for(let f=0;f<h;f++){let N=f*d-a;for(let F=0;F<c;F++){let T=F*m-r;x.push(T,-N,0),A.push(0,0,1),p.push(F/o),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let N=0;N<o;N++){let F=N+c*f,T=N+c*(f+1),b=N+1+c*(f+1),D=N+1+c*f;g.push(F,T,D),g.push(T,b,D)}this.setIndex(g),this.setAttribute("position",new ln(x,3)),this.setAttribute("normal",new ln(A,3)),this.setAttribute("uv",new ln(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var eo=class extends cn{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],n=new Set,s=new G,r=new G;if(t.index!==null){let a=t.attributes.position,o=t.index,l=t.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let m=l[c],d=m.start,g=m.count;for(let x=d,A=d+g;x<A;x+=3)for(let p=0;p<3;p++){let f=o.getX(x+p),N=o.getX(x+(p+1)%3);s.fromBufferAttribute(a,f),r.fromBufferAttribute(a,N),kf(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{let a=t.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,m=3*o+(c+1)%3;s.fromBufferAttribute(a,h),r.fromBufferAttribute(a,m),kf(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new ln(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function kf(i,t,e){let n=`${i.x},${i.y},${i.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${i.x},${i.y},${i.z}`;return e.has(n)===!0||e.has(s)===!0?!1:(e.add(n),e.add(s),!0)}function Qs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(zf(s))s.isRenderTargetTexture?(me("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(zf(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Nn(i){let t={};for(let e=0;e<i.length;e++){let n=Qs(i[e]);for(let s in n)t[s]=n[s]}return t}function zf(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function P0(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ju(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Le.workingColorSpace}var So={clone:Qs,merge:Nn},L0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,D0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,bn=class extends Gi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=L0,this.fragmentShader=D0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Qs(t.uniforms),this.uniformsGroups=P0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new pe().setHex(s.value);break;case"v2":this.uniforms[n].value=new Lt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new G().fromArray(s.value);break;case"v4":this.uniforms[n].value=new We().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Se().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Be().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},$l=class extends bn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var no=class extends Gi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yc,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cs,this.combine=oc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Xl=class extends Gi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ql=class extends Gi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function wr(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function cu(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Ms=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Yl=class extends Ms{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:fu,endingEnd:fu}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case pu:r=t,o=2*e-n;break;case mu:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case pu:a=t,l=2*n-e;break;case mu:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,m=this._offsetNext,d=this._weightPrev,g=this._weightNext,x=(n-e)/(s-e),A=x*x,p=A*x,f=-d*p+2*d*A-d*x,N=(1+d)*p+(-1.5-2*d)*A+(-.5+d)*x+1,F=(-1-g)*p+(1.5+g)*A+.5*x,T=g*p-g*A;for(let b=0;b!==o;++b)r[b]=f*a[h+b]+N*a[c+b]+F*a[l+b]+T*a[m+b];return r}},Zl=class extends Ms{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),m=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*m+a[l+d]*h;return r}},Jl=class extends Ms{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Kl=class extends Ms{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,m=this.outTangents;if(!h||!m){let x=(n-e)/(s-e),A=1-x;for(let p=0;p!==o;++p)r[p]=a[c+p]*A+a[l+p]*x;return r}let d=o*2,g=t-1;for(let x=0;x!==o;++x){let A=a[c+x],p=a[l+x],f=g*d+x*2,N=m[f],F=m[f+1],T=t*d+x*2,b=h[T],D=h[T+1],z=U0(n,e,N,b,s);r[x]=Op(z,A,F,D,p)}return r}};function Op(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function N0(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function U0(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=Op(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=N0(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var oi=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=wr(e,this.TimeBufferType),this.values=wr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:wr(t.times,Array),values:wr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),cu(t.settings)&&(n.settings={inTangents:wr(t.settings.inTangents,Array),outTangents:wr(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Jl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Zl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Yl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Kl(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Ia:e=this.InterpolantFactoryMethodDiscrete;break;case Rl:e=this.InterpolantFactoryMethodLinear;break;case xl:e=this.InterpolantFactoryMethodSmooth;break;case du:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return me("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ia;case this.InterpolantFactoryMethodLinear:return Rl;case this.InterpolantFactoryMethodSmooth:return xl;case this.InterpolantFactoryMethodBezier:return du}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;cu(this.settings)&&(Vf(this.settings.inTangents,t),Vf(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(_e("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(_e("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){_e("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){_e("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Mg(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){_e("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===xl,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let m=o*n,d=m-n,g=m+n;for(let x=0;x!==n;++x){let A=e[m+x];if(A!==e[d+x]||A!==e[g+x]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let m=o*n,d=a*n;for(let g=0;g!==n;++g)e[d+g]=e[m+g]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,cu(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Vf(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}oi.prototype.ValueTypeName="";oi.prototype.TimeBufferType=Float32Array;oi.prototype.ValueBufferType=Float32Array;oi.prototype.DefaultInterpolation=Rl;var ws=class extends oi{constructor(t,e,n){super(t,e,n)}};ws.prototype.ValueTypeName="bool";ws.prototype.ValueBufferType=Array;ws.prototype.DefaultInterpolation=Ia;ws.prototype.InterpolantFactoryMethodLinear=void 0;ws.prototype.InterpolantFactoryMethodSmooth=void 0;var jl=class extends oi{constructor(t,e,n,s){super(t,e,n,s)}};jl.prototype.ValueTypeName="color";var Ql=class extends oi{constructor(t,e,n,s){super(t,e,n,s)}};Ql.prototype.ValueTypeName="number";var tc=class extends Ms{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)Hi.slerpFlat(r,0,a,c-o,a,c,l);return r}},io=class extends oi{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new tc(this.times,this.values,this.getValueSize(),t)}};io.prototype.ValueTypeName="quaternion";io.prototype.InterpolantFactoryMethodSmooth=void 0;var Es=class extends oi{constructor(t,e,n){super(t,e,n)}};Es.prototype.ValueTypeName="string";Es.prototype.ValueBufferType=Array;Es.prototype.DefaultInterpolation=Ia;Es.prototype.InterpolantFactoryMethodLinear=void 0;Es.prototype.InterpolantFactoryMethodSmooth=void 0;var ec=class extends oi{constructor(t,e,n,s){super(t,e,n,s)}};ec.prototype.ValueTypeName="vector";var nc=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,m){return c.push(h,m),this},this.removeHandler=function(h){let m=c.indexOf(h);return m!==-1&&c.splice(m,2),this},this.getHandler=function(h){for(let m=0,d=c.length;m<d;m+=2){let g=c[m],x=c[m+1];if(g.global&&(g.lastIndex=0),g.test(h))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Bp=new nc,ic=class{constructor(t){this.manager=t!==void 0?t:Bp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};ic.DEFAULT_MATERIAL_NAME="__DEFAULT";var so=class extends yn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new pe(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},ro=class extends so{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(yn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new pe(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},hu=new Be,Hf=new G,Gf=new G,sc=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Lt(512,512),this.mapType=Kn,this.map=null,this.mapPass=null,this.matrix=new Be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Or,this._frameExtents=new Lt(1,1),this._viewportCount=1,this._viewports=[new We(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Hf.setFromMatrixPosition(t.matrixWorld),e.position.copy(Hf),Gf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Gf),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){hu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(hu,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Pr||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(hu)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},ml=new G,gl=new Hi,Oi=new G,ao=class extends yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Be,this.projectionMatrix=new Be,this.projectionMatrixInverse=new Be,this.coordinateSystem=Ei,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ml,gl,Oi),Oi.x===1&&Oi.y===1&&Oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ml,gl,Oi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(ml,gl,Oi),Oi.x===1&&Oi.y===1&&Oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ml,gl,Oi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ys=new G,Wf=new Lt,$f=new Lt,Dn=class extends ao{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Dr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ta*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Dr*2*Math.atan(Math.tan(Ta*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ys.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ys.x,ys.y).multiplyScalar(-t/ys.z),ys.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ys.x,ys.y).multiplyScalar(-t/ys.z)}getViewSize(t,e){return this.getViewBounds(t,Wf,$f),e.subVectors($f,Wf)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ta*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Hr=class extends ao{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Su=class extends sc{constructor(){super(new Hr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},oo=class extends so{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yn.DEFAULT_UP),this.updateMatrix(),this.target=new yn,this.shadow=new Su}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var lo=class extends cn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var Er=-90,Tr=1,rc=class extends yn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Dn(Er,Tr,t,e);s.layers=this.layers,this.add(s);let r=new Dn(Er,Tr,t,e);r.layers=this.layers,this.add(r);let a=new Dn(Er,Tr,t,e);a.layers=this.layers,this.add(a);let o=new Dn(Er,Tr,t,e);o.layers=this.layers,this.add(o);let l=new Dn(Er,Tr,t,e);l.layers=this.layers,this.add(l);let c=new Dn(Er,Tr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Ei)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Pr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,m=t.getRenderTarget(),d=t.getActiveCubeFace(),g=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;let A=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=A,t.setRenderTarget(n,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(m,d,g),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},ac=class extends Dn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Ku="\\[\\]\\.:\\/",F0=new RegExp("["+Ku+"]","g"),ju="[^"+Ku+"]",O0="[^"+Ku.replace("\\.","")+"]",B0=/((?:WC+[\/:])*)/.source.replace("WC",ju),k0=/(WCOD+)?/.source.replace("WCOD",O0),z0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ju),V0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ju),H0=new RegExp("^"+B0+k0+z0+V0+"$"),G0=["material","materials","bones","map"],bu=class{constructor(t,e,n){let s=n||je.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},je=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(F0,"")}static parseTrackName(t){let e=H0.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);G0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){me("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){_e("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){_e("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){_e("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){_e("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){_e("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){_e("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){_e("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;_e("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){_e("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){_e("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};je.Composite=bu;je.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};je.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};je.prototype.GetterByBindingType=[je.prototype._getValue_direct,je.prototype._getValue_array,je.prototype._getValue_arrayElement,je.prototype._getValue_toArray];je.prototype.SetterByBindingTypeAndVersioning=[[je.prototype._setValue_direct,je.prototype._setValue_direct_setNeedsUpdate,je.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[je.prototype._setValue_array,je.prototype._setValue_array_setNeedsUpdate,je.prototype._setValue_array_setMatrixWorldNeedsUpdate],[je.prototype._setValue_arrayElement,je.prototype._setValue_arrayElement_setNeedsUpdate,je.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[je.prototype._setValue_fromArray,je.prototype._setValue_fromArray_setNeedsUpdate,je.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var nb=new Float32Array(1);var Ts=class extends Dl{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}};var Xf=new Be,co=class{constructor(t,e,n=0,s=1/0){this.ray=new $s(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Ur,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):_e("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Xf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Xf),this}intersectObject(t,e=!0,n=[]){return Mu(t,this,n,e),n.sort(qf),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Mu(t[s],this,n,e);return n.sort(qf),n}};function qf(i,t){return i.distance-t.distance}function Mu(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Mu(r[a],t,e,!0)}}var wu=class i{static{i.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};var Yf=new G,_l=new G,Ar=new G,Cr=new G,uu=new G,W0=new G,$0=new G,ho=class{constructor(t=new G,e=new G){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Yf.subVectors(t,this.start),_l.subVectors(this.end,this.start);let n=_l.dot(_l);if(n===0)return 0;let r=_l.dot(Yf)/n;return e&&(r=be(r,0,1)),r}closestPointToPoint(t,e,n){let s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}distanceSqToLine3(t,e=W0,n=$0){let s=10000000000000001e-32,r,a,o=this.start,l=t.start,c=this.end,h=t.end;Ar.subVectors(c,o),Cr.subVectors(h,l),uu.subVectors(o,l);let m=Ar.dot(Ar),d=Cr.dot(Cr),g=Cr.dot(uu);if(m<=s&&d<=s)return e.copy(o),n.copy(l),e.sub(n),e.dot(e);if(m<=s)r=0,a=g/d,a=be(a,0,1);else{let x=Ar.dot(uu);if(d<=s)a=0,r=be(-x/m,0,1);else{let A=Ar.dot(Cr),p=m*d-A*A;p!==0?r=be((A*g-x*d)/p,0,1):r=0,a=(A*r+g)/d,a<0?(a=0,r=be(-x/m,0,1)):a>1&&(a=1,r=be((A-x)/m,0,1))}}return e.copy(o).addScaledVector(Ar,r),n.copy(l).addScaledVector(Cr,a),e.distanceToSquared(n)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};function Qu(i,t,e,n){let s=X0(n);switch(e){case Gu:return i*t;case pc:return i*t/s.components*s.byteLength;case mc:return i*t/s.components*s.byteLength;case Ps:return i*t*2/s.components*s.byteLength;case gc:return i*t*2/s.components*s.byteLength;case Wu:return i*t*3/s.components*s.byteLength;case fi:return i*t*4/s.components*s.byteLength;case _c:return i*t*4/s.components*s.byteLength;case mo:case go:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case _o:case xo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case vc:case Sc:return Math.max(i,16)*Math.max(t,8)/4;case xc:case yc:return Math.max(i,8)*Math.max(t,8)/2;case bc:case Mc:case Ec:case Tc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case wc:case vo:case Ac:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Cc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Rc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ic:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Pc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Lc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Dc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Nc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Uc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Fc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Oc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Bc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case kc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case zc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Vc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Hc:case Gc:case Wc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case $c:case Xc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case yo:case qc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function X0(i){switch(i){case Kn:case ku:return{byteLength:1,components:1};case $r:case zu:case Ii:return{byteLength:2,components:1};case dc:case fc:return{byteLength:2,components:4};case Ri:case uc:case di:return{byteLength:4,components:1};case Vu:case Hu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?me("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function am(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Y0(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,m=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let g;if(c instanceof Float32Array)g=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)g=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?g=i.HALF_FLOAT:g=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=i.SHORT;else if(c instanceof Uint32Array)g=i.UNSIGNED_INT;else if(c instanceof Int32Array)g=i.INT;else if(c instanceof Int8Array)g=i.BYTE;else if(c instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:m}}function n(o,l,c){let h=l.array,m=l.updateRanges;if(i.bindBuffer(c,o),m.length===0)i.bufferSubData(c,0,h);else{m.sort((g,x)=>g.start-x.start);let d=0;for(let g=1;g<m.length;g++){let x=m[d],A=m[g];A.start<=x.start+x.count+1?x.count=Math.max(x.count,A.start+A.count-x.start):(++d,m[d]=A)}m.length=d+1;for(let g=0,x=m.length;g<x;g++){let A=m[g];i.bufferSubData(c,A.start*h.BYTES_PER_ELEMENT,h,A.start,A.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Z0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,J0=`#ifdef USE_ALPHAHASH
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
#endif`,K0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,j0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Q0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,t_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,e_=`#ifdef USE_AOMAP
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
#endif`,n_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,i_=`#ifdef USE_BATCHING
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
#endif`,s_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,r_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,a_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,o_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,l_=`#ifdef USE_IRIDESCENCE
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
#endif`,c_=`#ifdef USE_BUMPMAP
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
#endif`,h_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,u_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,d_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,f_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,p_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,m_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,g_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,__=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,x_=`#define PI 3.141592653589793
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
} // validated`,v_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,y_=`vec3 transformedNormal = objectNormal;
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
#endif`,S_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,b_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,M_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,w_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,E_="gl_FragColor = linearToOutputTexel( gl_FragColor );",T_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,A_=`#ifdef USE_ENVMAP
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
#endif`,C_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,R_=`#ifdef USE_ENVMAP
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
#endif`,I_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,P_=`#ifdef USE_ENVMAP
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
#endif`,L_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,D_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,N_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,U_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,F_=`#ifdef USE_GRADIENTMAP
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
}`,O_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,B_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,k_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,z_=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,V_=`#ifdef USE_ENVMAP
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
#endif`,H_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,G_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,W_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,X_=`PhysicalMaterial material;
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
#endif`,q_=`uniform sampler2D dfgLUT;
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
}`,Y_=`
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
#endif`,Z_=`#if defined( RE_IndirectDiffuse )
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
#endif`,J_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,K_=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,j_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Q_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ex=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,nx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ix=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,rx=`#if defined( USE_POINTS_UV )
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
#endif`,ax=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ox=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ux=`#ifdef USE_MORPHTARGETS
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
#endif`,dx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,px=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,mx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_x=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,xx=`#ifdef USE_NORMALMAP
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
#endif`,vx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Sx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Mx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ex=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Tx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ax=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Rx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ix=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Px=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Lx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Dx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Nx=`float getShadowMask() {
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
}`,Ux=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fx=`#ifdef USE_SKINNING
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
#endif`,Ox=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bx=`#ifdef USE_SKINNING
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
#endif`,kx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gx=`#ifdef USE_TRANSMISSION
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
#endif`,Wx=`#ifdef USE_TRANSMISSION
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
#endif`,$x=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Zx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jx=`uniform sampler2D t2D;
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
}`,Kx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Qx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ev=`#include <common>
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
}`,nv=`#if DEPTH_PACKING == 3200
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
}`,iv=`#define DISTANCE
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
}`,sv=`#define DISTANCE
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
}`,rv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,av=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ov=`uniform float scale;
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
}`,lv=`uniform vec3 diffuse;
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
}`,cv=`#include <common>
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
}`,hv=`uniform vec3 diffuse;
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
}`,uv=`#define LAMBERT
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
}`,dv=`#define LAMBERT
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
}`,fv=`#define MATCAP
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
}`,pv=`#define MATCAP
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
}`,mv=`#define NORMAL
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
}`,gv=`#define NORMAL
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
}`,_v=`#define PHONG
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
}`,xv=`#define PHONG
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
}`,vv=`#define STANDARD
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
}`,yv=`#define STANDARD
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
}`,Sv=`#define TOON
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
}`,bv=`#define TOON
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
}`,Mv=`uniform float size;
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
}`,wv=`uniform vec3 diffuse;
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
}`,Ev=`#include <common>
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
}`,Tv=`uniform vec3 color;
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
}`,Av=`uniform float rotation;
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
}`,Cv=`uniform vec3 diffuse;
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
}`,Te={alphahash_fragment:Z0,alphahash_pars_fragment:J0,alphamap_fragment:K0,alphamap_pars_fragment:j0,alphatest_fragment:Q0,alphatest_pars_fragment:t_,aomap_fragment:e_,aomap_pars_fragment:n_,batching_pars_vertex:i_,batching_vertex:s_,begin_vertex:r_,beginnormal_vertex:a_,bsdfs:o_,iridescence_fragment:l_,bumpmap_pars_fragment:c_,clipping_planes_fragment:h_,clipping_planes_pars_fragment:u_,clipping_planes_pars_vertex:d_,clipping_planes_vertex:f_,color_fragment:p_,color_pars_fragment:m_,color_pars_vertex:g_,color_vertex:__,common:x_,cube_uv_reflection_fragment:v_,defaultnormal_vertex:y_,displacementmap_pars_vertex:S_,displacementmap_vertex:b_,emissivemap_fragment:M_,emissivemap_pars_fragment:w_,colorspace_fragment:E_,colorspace_pars_fragment:T_,envmap_fragment:A_,envmap_common_pars_fragment:C_,envmap_pars_fragment:R_,envmap_pars_vertex:I_,envmap_physical_pars_fragment:V_,envmap_vertex:P_,fog_vertex:L_,fog_pars_vertex:D_,fog_fragment:N_,fog_pars_fragment:U_,gradientmap_pars_fragment:F_,lightmap_pars_fragment:O_,lights_lambert_fragment:B_,lights_lambert_pars_fragment:k_,lights_pars_begin:z_,lights_toon_fragment:H_,lights_toon_pars_fragment:G_,lights_phong_fragment:W_,lights_phong_pars_fragment:$_,lights_physical_fragment:X_,lights_physical_pars_fragment:q_,lights_fragment_begin:Y_,lights_fragment_maps:Z_,lights_fragment_end:J_,lightprobes_pars_fragment:K_,logdepthbuf_fragment:j_,logdepthbuf_pars_fragment:Q_,logdepthbuf_pars_vertex:tx,logdepthbuf_vertex:ex,map_fragment:nx,map_pars_fragment:ix,map_particle_fragment:sx,map_particle_pars_fragment:rx,metalnessmap_fragment:ax,metalnessmap_pars_fragment:ox,morphinstance_vertex:lx,morphcolor_vertex:cx,morphnormal_vertex:hx,morphtarget_pars_vertex:ux,morphtarget_vertex:dx,normal_fragment_begin:fx,normal_fragment_maps:px,normal_pars_fragment:mx,normal_pars_vertex:gx,normal_vertex:_x,normalmap_pars_fragment:xx,clearcoat_normal_fragment_begin:vx,clearcoat_normal_fragment_maps:yx,clearcoat_pars_fragment:Sx,iridescence_pars_fragment:bx,opaque_fragment:Mx,packing:wx,premultiplied_alpha_fragment:Ex,project_vertex:Tx,dithering_fragment:Ax,dithering_pars_fragment:Cx,roughnessmap_fragment:Rx,roughnessmap_pars_fragment:Ix,shadowmap_pars_fragment:Px,shadowmap_pars_vertex:Lx,shadowmap_vertex:Dx,shadowmask_pars_fragment:Nx,skinbase_vertex:Ux,skinning_pars_vertex:Fx,skinning_vertex:Ox,skinnormal_vertex:Bx,specularmap_fragment:kx,specularmap_pars_fragment:zx,tonemapping_fragment:Vx,tonemapping_pars_fragment:Hx,transmission_fragment:Gx,transmission_pars_fragment:Wx,uv_pars_fragment:$x,uv_pars_vertex:Xx,uv_vertex:qx,worldpos_vertex:Yx,background_vert:Zx,background_frag:Jx,backgroundCube_vert:Kx,backgroundCube_frag:jx,cube_vert:Qx,cube_frag:tv,depth_vert:ev,depth_frag:nv,distance_vert:iv,distance_frag:sv,equirect_vert:rv,equirect_frag:av,linedashed_vert:ov,linedashed_frag:lv,meshbasic_vert:cv,meshbasic_frag:hv,meshlambert_vert:uv,meshlambert_frag:dv,meshmatcap_vert:fv,meshmatcap_frag:pv,meshnormal_vert:mv,meshnormal_frag:gv,meshphong_vert:_v,meshphong_frag:xv,meshphysical_vert:vv,meshphysical_frag:yv,meshtoon_vert:Sv,meshtoon_frag:bv,points_vert:Mv,points_frag:wv,shadow_vert:Ev,shadow_frag:Tv,sprite_vert:Av,sprite_frag:Cv},Ft={common:{diffuse:{value:new pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Se},alphaMap:{value:null},alphaMapTransform:{value:new Se},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Se}},envmap:{envMap:{value:null},envMapRotation:{value:new Se},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Se}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Se}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Se},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Se},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Se},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Se}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Se}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Se}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new G},probesMax:{value:new G},probesResolution:{value:new G}},points:{diffuse:{value:new pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Se},alphaTest:{value:0},uvTransform:{value:new Se}},sprite:{diffuse:{value:new pe(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Se},alphaMap:{value:null},alphaMapTransform:{value:new Se},alphaTest:{value:0}}},Gn={basic:{uniforms:Nn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.fog]),vertexShader:Te.meshbasic_vert,fragmentShader:Te.meshbasic_frag},lambert:{uniforms:Nn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new pe(0)},envMapIntensity:{value:1}}]),vertexShader:Te.meshlambert_vert,fragmentShader:Te.meshlambert_frag},phong:{uniforms:Nn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new pe(0)},specular:{value:new pe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Te.meshphong_vert,fragmentShader:Te.meshphong_frag},standard:{uniforms:Nn([Ft.common,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.roughnessmap,Ft.metalnessmap,Ft.fog,Ft.lights,{emissive:{value:new pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Te.meshphysical_vert,fragmentShader:Te.meshphysical_frag},toon:{uniforms:Nn([Ft.common,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.gradientmap,Ft.fog,Ft.lights,{emissive:{value:new pe(0)}}]),vertexShader:Te.meshtoon_vert,fragmentShader:Te.meshtoon_frag},matcap:{uniforms:Nn([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,{matcap:{value:null}}]),vertexShader:Te.meshmatcap_vert,fragmentShader:Te.meshmatcap_frag},points:{uniforms:Nn([Ft.points,Ft.fog]),vertexShader:Te.points_vert,fragmentShader:Te.points_frag},dashed:{uniforms:Nn([Ft.common,Ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Te.linedashed_vert,fragmentShader:Te.linedashed_frag},depth:{uniforms:Nn([Ft.common,Ft.displacementmap]),vertexShader:Te.depth_vert,fragmentShader:Te.depth_frag},normal:{uniforms:Nn([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,{opacity:{value:1}}]),vertexShader:Te.meshnormal_vert,fragmentShader:Te.meshnormal_frag},sprite:{uniforms:Nn([Ft.sprite,Ft.fog]),vertexShader:Te.sprite_vert,fragmentShader:Te.sprite_frag},background:{uniforms:{uvTransform:{value:new Se},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Te.background_vert,fragmentShader:Te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Se}},vertexShader:Te.backgroundCube_vert,fragmentShader:Te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Te.cube_vert,fragmentShader:Te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Te.equirect_vert,fragmentShader:Te.equirect_frag},distance:{uniforms:Nn([Ft.common,Ft.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Te.distance_vert,fragmentShader:Te.distance_frag},shadow:{uniforms:Nn([Ft.lights,Ft.fog,{color:{value:new pe(0)},opacity:{value:1}}]),vertexShader:Te.shadow_vert,fragmentShader:Te.shadow_frag}};Gn.physical={uniforms:Nn([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Se},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Se},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Se},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Se},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Se},sheen:{value:0},sheenColor:{value:new pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Se},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Se},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Se},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Se},attenuationDistance:{value:0},attenuationColor:{value:new pe(0)},specularColor:{value:new pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Se},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Se},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Se}}]),vertexShader:Te.meshphysical_vert,fragmentShader:Te.meshphysical_frag};var Kc={r:0,b:0,g:0},Rv=new Be,om=new Se;om.set(-1,0,0,0,1,0,0,0,1);function Iv(i,t,e,n,s,r){let a=new pe(0),o=s===!0?0:1,l,c,h=null,m=0,d=null;function g(N){let F=N.isScene===!0?N.background:null;if(F&&F.isTexture){let T=N.backgroundBlurriness>0;F=t.get(F,T)}return F}function x(N){let F=!1,T=g(N);T===null?p(a,o):T&&T.isColor&&(p(T,1),F=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||F)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function A(N,F){let T=g(F);T&&(T.isCubeTexture||T.mapping===fo)?(c===void 0&&(c=new Sn(new Br(1,1,1),new bn({name:"BackgroundCubeMaterial",uniforms:Qs(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,D,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=T,c.material.uniforms.backgroundBlurriness.value=F.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Rv.makeRotationFromEuler(F.backgroundRotation)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(om),c.material.toneMapped=Le.getTransfer(T.colorSpace)!==Ge,(h!==T||m!==T.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=T,m=T.version,d=i.toneMapping),c.layers.enableAll(),N.unshift(c,c.geometry,c.material,0,0,null)):T&&T.isTexture&&(l===void 0&&(l=new Sn(new to(2,2),new bn({name:"BackgroundMaterial",uniforms:Qs(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:As,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=T,l.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,l.material.toneMapped=Le.getTransfer(T.colorSpace)!==Ge,T.matrixAutoUpdate===!0&&T.updateMatrix(),l.material.uniforms.uvTransform.value.copy(T.matrix),(h!==T||m!==T.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=T,m=T.version,d=i.toneMapping),l.layers.enableAll(),N.unshift(l,l.geometry,l.material,0,0,null))}function p(N,F){N.getRGB(Kc,Ju(i)),e.buffers.color.setClear(Kc.r,Kc.g,Kc.b,F,r)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(N,F=1){a.set(N),o=F,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(N){o=N,p(a,o)},render:x,addToRenderList:A,dispose:f}}function Pv(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o($,et,it,q,j){let ot=!1,lt=m($,q,it,et);r!==lt&&(r=lt,c(r.object)),ot=g($,q,it,j),ot&&x($,q,it,j),j!==null&&t.update(j,i.ELEMENT_ARRAY_BUFFER),(ot||a)&&(a=!1,T($,et,it,q),j!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function l(){return i.createVertexArray()}function c($){return i.bindVertexArray($)}function h($){return i.deleteVertexArray($)}function m($,et,it,q){let j=q.wireframe===!0,ot=n[et.id];ot===void 0&&(ot={},n[et.id]=ot);let lt=$.isInstancedMesh===!0?$.id:0,bt=ot[lt];bt===void 0&&(bt={},ot[lt]=bt);let ht=bt[it.id];ht===void 0&&(ht={},bt[it.id]=ht);let vt=ht[j];return vt===void 0&&(vt=d(l()),ht[j]=vt),vt}function d($){let et=[],it=[],q=[];for(let j=0;j<e;j++)et[j]=0,it[j]=0,q[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:et,enabledAttributes:it,attributeDivisors:q,object:$,attributes:{},index:null}}function g($,et,it,q){let j=r.attributes,ot=et.attributes,lt=0,bt=it.getAttributes();for(let ht in bt)if(bt[ht].location>=0){let gt=j[ht],kt=ot[ht];if(kt===void 0&&(ht==="instanceMatrix"&&$.instanceMatrix&&(kt=$.instanceMatrix),ht==="instanceColor"&&$.instanceColor&&(kt=$.instanceColor)),gt===void 0||gt.attribute!==kt||kt&&gt.data!==kt.data)return!0;lt++}return r.attributesNum!==lt||r.index!==q}function x($,et,it,q){let j={},ot=et.attributes,lt=0,bt=it.getAttributes();for(let ht in bt)if(bt[ht].location>=0){let gt=ot[ht];gt===void 0&&(ht==="instanceMatrix"&&$.instanceMatrix&&(gt=$.instanceMatrix),ht==="instanceColor"&&$.instanceColor&&(gt=$.instanceColor));let kt={};kt.attribute=gt,gt&&gt.data&&(kt.data=gt.data),j[ht]=kt,lt++}r.attributes=j,r.attributesNum=lt,r.index=q}function A(){let $=r.newAttributes;for(let et=0,it=$.length;et<it;et++)$[et]=0}function p($){f($,0)}function f($,et){let it=r.newAttributes,q=r.enabledAttributes,j=r.attributeDivisors;it[$]=1,q[$]===0&&(i.enableVertexAttribArray($),q[$]=1),j[$]!==et&&(i.vertexAttribDivisor($,et),j[$]=et)}function N(){let $=r.newAttributes,et=r.enabledAttributes;for(let it=0,q=et.length;it<q;it++)et[it]!==$[it]&&(i.disableVertexAttribArray(it),et[it]=0)}function F($,et,it,q,j,ot,lt){lt===!0?i.vertexAttribIPointer($,et,it,j,ot):i.vertexAttribPointer($,et,it,q,j,ot)}function T($,et,it,q){A();let j=q.attributes,ot=it.getAttributes(),lt=et.defaultAttributeValues;for(let bt in ot){let ht=ot[bt];if(ht.location>=0){let vt=j[bt];if(vt===void 0&&(bt==="instanceMatrix"&&$.instanceMatrix&&(vt=$.instanceMatrix),bt==="instanceColor"&&$.instanceColor&&(vt=$.instanceColor)),vt!==void 0){let gt=vt.normalized,kt=vt.itemSize,Wt=t.get(vt);if(Wt===void 0)continue;let Fe=Wt.buffer,Me=Wt.type,Ie=Wt.bytesPerElement,dt=Me===i.INT||Me===i.UNSIGNED_INT||vt.gpuType===uc;if(vt.isInterleavedBufferAttribute){let mt=vt.data,Tt=mt.stride,se=vt.offset;if(mt.isInstancedInterleavedBuffer){for(let zt=0;zt<ht.locationSize;zt++)f(ht.location+zt,mt.meshPerAttribute);$.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let zt=0;zt<ht.locationSize;zt++)p(ht.location+zt);i.bindBuffer(i.ARRAY_BUFFER,Fe);for(let zt=0;zt<ht.locationSize;zt++)F(ht.location+zt,kt/ht.locationSize,Me,gt,Tt*Ie,(se+kt/ht.locationSize*zt)*Ie,dt)}else{if(vt.isInstancedBufferAttribute){for(let mt=0;mt<ht.locationSize;mt++)f(ht.location+mt,vt.meshPerAttribute);$.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let mt=0;mt<ht.locationSize;mt++)p(ht.location+mt);i.bindBuffer(i.ARRAY_BUFFER,Fe);for(let mt=0;mt<ht.locationSize;mt++)F(ht.location+mt,kt/ht.locationSize,Me,gt,kt*Ie,kt/ht.locationSize*mt*Ie,dt)}}else if(lt!==void 0){let gt=lt[bt];if(gt!==void 0)switch(gt.length){case 2:i.vertexAttrib2fv(ht.location,gt);break;case 3:i.vertexAttrib3fv(ht.location,gt);break;case 4:i.vertexAttrib4fv(ht.location,gt);break;default:i.vertexAttrib1fv(ht.location,gt)}}}}N()}function b(){L();for(let $ in n){let et=n[$];for(let it in et){let q=et[it];for(let j in q){let ot=q[j];for(let lt in ot)h(ot[lt].object),delete ot[lt];delete q[j]}}delete n[$]}}function D($){if(n[$.id]===void 0)return;let et=n[$.id];for(let it in et){let q=et[it];for(let j in q){let ot=q[j];for(let lt in ot)h(ot[lt].object),delete ot[lt];delete q[j]}}delete n[$.id]}function z($){for(let et in n){let it=n[et];for(let q in it){let j=it[q];if(j[$.id]===void 0)continue;let ot=j[$.id];for(let lt in ot)h(ot[lt].object),delete ot[lt];delete j[$.id]}}}function M($){for(let et in n){let it=n[et],q=$.isInstancedMesh===!0?$.id:0,j=it[q];if(j!==void 0){for(let ot in j){let lt=j[ot];for(let bt in lt)h(lt[bt].object),delete lt[bt];delete j[ot]}delete it[q],Object.keys(it).length===0&&delete n[et]}}}function L(){k(),a=!0,r!==s&&(r=s,c(r.object))}function k(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:k,dispose:b,releaseStatesOfGeometry:D,releaseStatesOfObject:M,releaseStatesOfProgram:z,initAttributes:A,enableAttribute:p,disableUnusedAttributes:N}}function Lv(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let g=0;g<h;g++)d+=c[g];e.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Dv(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let z=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(z){return!(z!==fi&&n.convert(z)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(z){let M=z===Ii&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(z!==Kn&&z!==di&&!M&&n.convert(z)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(z){if(z==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(me("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let m=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&d===!1&&me("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let g=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),N=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),F=i.getParameter(i.MAX_VARYING_VECTORS),T=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),D=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:m,reversedDepthBuffer:d,maxTextures:g,maxVertexTextures:x,maxTextureSize:A,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:N,maxVaryings:F,maxFragmentUniforms:T,maxSamples:b,samples:D}}function Nv(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Mi,o=new Se,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(m,d){let g=m.length!==0||d||n!==0||s;return s=d,n=m.length,g},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(m,d){e=h(m,d,0)},this.setState=function(m,d,g){let x=m.clippingPlanes,A=m.clipIntersection,p=m.clipShadows,f=i.get(m);if(!s||x===null||x.length===0||r&&!p)r?h(null):c();else{let N=r?0:n,F=N*4,T=f.clippingState||null;l.value=T,T=h(x,d,F,g);for(let b=0;b!==F;++b)T[b]=e[b];f.clippingState=T,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=N}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(m,d,g,x){let A=m!==null?m.length:0,p=null;if(A!==0){if(p=l.value,x!==!0||p===null){let f=g+A*4,N=d.matrixWorldInverse;o.getNormalMatrix(N),(p===null||p.length<f)&&(p=new Float32Array(f));for(let F=0,T=g;F!==A;++F,T+=4)a.copy(m[F]).applyMatrix4(N,o),a.normal.toArray(p,T),p[T+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,p}}var Yr=4,Uv=6,Fv=20,Ov=256,bo=new Hr,kp=new pe,td=null,ed=0,nd=0,id=!1,Bv=new G,tr=new G,Qc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=Bv}=r;td=this._renderer.getRenderTarget(),ed=this._renderer.getActiveCubeFace(),nd=this._renderer.getActiveMipmapLevel(),id=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(td,ed,nd),this._renderer.xr.enabled=id,t.scissorTest=!1,qr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Cs||t.mapping===js?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),td=this._renderer.getRenderTarget(),ed=this._renderer.getActiveCubeFace(),nd=this._renderer.getActiveMipmapLevel(),id=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Tn,minFilter:Tn,generateMipmaps:!1,type:Ii,format:fi,colorSpace:Pa,depthBuffer:!1},s=zp(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zp(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=kv(r)),this._blurMaterial=Vv(r,t,e),this._ggxMaterial=zv(r,t,e)}return s}_compileMaterial(t){let e=new Sn(new cn,t);this._renderer.compile(e,bo)}_sceneToCubeUV(t,e,n,s,r){let l=new Dn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],m=this._renderer,d=m.autoClear,g=m.toneMapping;m.getClearColor(kp),m.toneMapping=Ci,m.autoClear=!1,m.state.buffers.depth.getReversed()&&(m.setRenderTarget(s),m.clearDepth(),m.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Sn(new Br,new Xs({name:"PMREM.Background",side:Hn,depthWrite:!1,depthTest:!1})));let A=this._backgroundBox,p=A.material,f=!1,N=t.background;N?N.isColor&&(p.color.copy(N),t.background=null,f=!0):(p.color.copy(kp),f=!0);for(let F=0;F<6;F++){let T=F%3;T===0?(l.up.set(0,c[F],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[F],r.y,r.z)):T===1?(l.up.set(0,0,c[F]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[F],r.z)):(l.up.set(0,c[F],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[F]));let b=this._cubeSize;qr(s,T*b,F>2?b:0,b,b),m.setRenderTarget(s),f&&m.render(A,l),m.render(t,l)}m.toneMapping=g,m.autoClear=d,t.background=N}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Cs||t.mapping===js;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hp()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vp());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;qr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,bo)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),m=Math.sqrt(c*c-h*h),d=c*1.25,g=m*d,{_lodMax:x}=this,A=this._sizeLods[n],p=3*A*(n>x-Yr?n-x+Yr:0),f=4*(this._cubeSize-A);l.envMap.value=t.texture,l.roughness.value=g,l.mipInt.value=x-e,qr(r,p,f,3*A,2*A),s.setRenderTarget(r),s.render(o,bo),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=x-n,qr(t,p,f,3*A,2*A),s.setRenderTarget(t),s.render(o,bo)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],m=3*h*(s>this._lodMax-Yr?s-this._lodMax+Yr:0),d=4*(this._cubeSize-h);qr(e,m,d,3*h,2*h),a.setRenderTarget(e),a.render(l,bo)}};function kv(i){let t=[],e=[],n=i,s=i-Yr+1+Uv;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],m=6,d=6,g=3,x=new Float32Array(g*d*m),A=new Float32Array(g*d*m);for(let f=0;f<m;f++){let N=f%3*2/3-1,F=f>2?0:-1,T=[N,F,0,N+2/3,F,0,N+2/3,F+1,0,N,F,0,N+2/3,F+1,0,N,F+1,0];x.set(T,g*d*f);for(let b=0;b<d;b++){let D=h[b*2]*2-1,z=h[b*2+1]*2-1;f===0?tr.set(1,z,D):f===1?tr.set(-D,1,-z):f===2?tr.set(-D,z,1):f===3?tr.set(-1,z,-D):f===4?tr.set(-D,-1,z):tr.set(D,z,-1),tr.toArray(A,(f*d+b)*g)}}let p=new cn;p.setAttribute("position",new qe(x,g)),p.setAttribute("outputDirection",new qe(A,g)),e.push(new Sn(p,null)),n>Yr&&n--}return{lodMeshes:e,sizeLods:t}}function zp(i,t,e){let n=new Zn(i,t,e);return n.texture.mapping=fo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function qr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function zv(i,t,e){return new bn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Ov,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:nh(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function Vv(i,t,e){return new bn({name:"SphericalGaussianBlur",defines:{SAMPLES:Fv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:nh(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function Vp(){return new bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nh(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function Hp(){return new bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function nh(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var th=class extends Zn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ga(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Br(5,5,5),r=new bn({name:"CubemapFromEquirect",uniforms:Qs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Hn,blending:$i});r.uniforms.tEquirect.value=e;let a=new Sn(s,r),o=e.minFilter;return e.minFilter===Rs&&(e.minFilter=Tn),new rc(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function Hv(i){let t=new WeakMap,e=new WeakMap,n=null;function s(d,g=!1){return d==null?null:g?a(d):r(d)}function r(d){if(d&&d.isTexture){let g=d.mapping;if(g===lc||g===cc)if(t.has(d)){let x=t.get(d).texture;return o(x,d.mapping)}else{let x=d.image;if(x&&x.height>0){let A=new th(x.height);return A.fromEquirectangularTexture(i,d),t.set(d,A),d.addEventListener("dispose",c),o(A.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){let g=d.mapping,x=g===lc||g===cc,A=g===Cs||g===js;if(x||A){let p=e.get(d),f=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==f)return n===null&&(n=new Qc(i)),p=x?n.fromEquirectangular(d,p):n.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),p.texture;if(p!==void 0)return p.texture;{let N=d.image;return x&&N&&N.height>0||A&&N&&l(N)?(n===null&&(n=new Qc(i)),p=x?n.fromEquirectangular(d):n.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),d.addEventListener("dispose",h),p.texture):null}}}return d}function o(d,g){return g===lc?d.mapping=Cs:g===cc&&(d.mapping=js),d}function l(d){let g=0,x=6;for(let A=0;A<x;A++)d[A]!==void 0&&g++;return g===x}function c(d){let g=d.target;g.removeEventListener("dispose",c);let x=t.get(g);x!==void 0&&(t.delete(g),x.dispose())}function h(d){let g=d.target;g.removeEventListener("dispose",h);let x=e.get(g);x!==void 0&&(e.delete(g),x.dispose())}function m(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:m}}function Gv(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Ws("WebGLRenderer: "+n+" extension not supported."),s}}}function Wv(i,t,e,n){let s={},r=new WeakMap;function a(m){let d=m.target;d.index!==null&&t.remove(d.index);for(let x in d.attributes)t.remove(d.attributes[x]);d.removeEventListener("dispose",a),delete s[d.id];let g=r.get(d);g&&(t.remove(g),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(m,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(m){let d=m.attributes;for(let g in d)t.update(d[g],i.ARRAY_BUFFER)}function c(m){let d=[],g=m.index,x=m.attributes.position,A=0;if(x===void 0)return;if(g!==null){let N=g.array;A=g.version;for(let F=0,T=N.length;F<T;F+=3){let b=N[F+0],D=N[F+1],z=N[F+2];d.push(b,D,D,z,z,b)}}else{let N=x.array;A=x.version;for(let F=0,T=N.length/3-1;F<T;F+=3){let b=F+0,D=F+1,z=F+2;d.push(b,D,D,z,z,b)}}let p=new(x.count>=65535?Ba:Oa)(d,1);p.version=A;let f=r.get(m);f&&t.remove(f),r.set(m,p)}function h(m){let d=r.get(m);if(d){let g=m.index;g!==null&&d.version<g.version&&c(m)}else c(m);return r.get(m)}return{get:o,update:l,getWireframeAttribute:h}}function $v(i,t,e){let n;function s(m){n=m}let r,a;function o(m){r=m.type,a=m.bytesPerElement}function l(m,d){i.drawElements(n,d,r,m*a),e.update(d,n,1)}function c(m,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,m*a,g),e.update(d,n,g))}function h(m,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,m,0,g);let A=0;for(let p=0;p<g;p++)A+=d[p];e.update(A,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Xv(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:_e("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function qv(i,t,e){let n=new WeakMap,s=new We;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,m=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==m){let L=function(){z.dispose(),n.delete(o),o.removeEventListener("dispose",L)};d!==void 0&&d.texture.dispose();let g=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,A=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],N=o.morphAttributes.color||[],F=0;g===!0&&(F=1),x===!0&&(F=2),A===!0&&(F=3);let T=o.attributes.position.count*F,b=1;T>t.maxTextureSize&&(b=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);let D=new Float32Array(T*b*4*m),z=new Ua(D,T,b,m);z.type=di,z.needsUpdate=!0;let M=F*4;for(let k=0;k<m;k++){let $=p[k],et=f[k],it=N[k],q=T*b*4*k;for(let j=0;j<$.count;j++){let ot=j*M;g===!0&&(s.fromBufferAttribute($,j),D[q+ot+0]=s.x,D[q+ot+1]=s.y,D[q+ot+2]=s.z,D[q+ot+3]=0),x===!0&&(s.fromBufferAttribute(et,j),D[q+ot+4]=s.x,D[q+ot+5]=s.y,D[q+ot+6]=s.z,D[q+ot+7]=0),A===!0&&(s.fromBufferAttribute(it,j),D[q+ot+8]=s.x,D[q+ot+9]=s.y,D[q+ot+10]=s.z,D[q+ot+11]=it.itemSize===4?s.w:1)}}d={count:m,texture:z,size:new Lt(T,b)},n.set(o,d),o.addEventListener("dispose",L)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let A=0;A<c.length;A++)g+=c[A];let x=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Yv(i,t,e,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,m=c.geometry,d=t.get(c,m);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let g=c.skeleton;r.get(g)!==h&&(g.update(),r.set(g,h))}return d}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var Zv={[Pu]:"LINEAR_TONE_MAPPING",[Lu]:"REINHARD_TONE_MAPPING",[Du]:"CINEON_TONE_MAPPING",[Nu]:"ACES_FILMIC_TONE_MAPPING",[Fu]:"AGX_TONE_MAPPING",[Ou]:"NEUTRAL_TONE_MAPPING",[Uu]:"CUSTOM_TONE_MAPPING"};function Jv(i,t,e,n,s,r){let a=new Zn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new cn;c.setAttribute("position",new ln([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ln([0,2,0,0,2,0],2));let h=new $l({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),m=new Sn(c,h),d=new Hr(-1,1,1,-1,0,1),g=null,x=null,A=!1,p,f=null,N=[],F=!1;this.setSize=function(T,b){a.setSize(T,b),o!==null&&o.setSize(T,b),l!==null&&l.setSize(T,b);for(let D=0;D<N.length;D++){let z=N[D];z.setSize&&z.setSize(T,b)}},this.setEffects=function(T){N=T,F=N.length>0&&N[0].isRenderPass===!0;let b=a.width,D=a.height;N.length>0&&o===null&&(o=new Zn(b,D,{type:Ii,depthBuffer:!1,stencilBuffer:!1}),l=new Zn(b,D,{type:Ii,depthBuffer:!1,stencilBuffer:!1}));for(let z=0;z<N.length;z++){let M=N[z];M.setSize&&M.setSize(b,D)}},this.begin=function(T,b){if(A||T.toneMapping===Ci&&N.length===0)return!1;if(f=b,b!==null){let D=b.width,z=b.height;(a.width!==D||a.height!==z)&&this.setSize(D,z)}return F===!1&&T.setRenderTarget(a),p=T.toneMapping,T.toneMapping=Ci,!0},this.hasRenderPass=function(){return F},this.end=function(T,b){T.toneMapping=p,A=!0;let D=a,z=o;for(let M=0;M<N.length;M++){let L=N[M];L.enabled!==!1&&(L.render(T,z,D,b),L.needsSwap!==!1&&(D=z,z=z===o?l:o))}if(g!==T.outputColorSpace||x!==T.toneMapping){g=T.outputColorSpace,x=T.toneMapping,h.defines={},Le.getTransfer(g)===Ge&&(h.defines.SRGB_TRANSFER="");let M=Zv[x];M&&(h.defines[M]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=D.texture,T.setRenderTarget(f),T.render(m,d),f=null,A=!1},this.isCompositing=function(){return A},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var lm=new Yn,ad=new bs(1,1),cm=new Ua,hm=new Ll,um=new Ga,Gp=[],Wp=[],$p=new Float32Array(16),Xp=new Float32Array(9),qp=new Float32Array(4);function Jr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Gp[s];if(r===void 0&&(r=new Float32Array(s),Gp[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function pn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function mn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ih(i,t){let e=Wp[t];e===void 0&&(e=new Int32Array(t),Wp[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Kv(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function jv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pn(e,t))return;i.uniform2fv(this.addr,t),mn(e,t)}}function Qv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(pn(e,t))return;i.uniform3fv(this.addr,t),mn(e,t)}}function ty(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pn(e,t))return;i.uniform4fv(this.addr,t),mn(e,t)}}function ey(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(pn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),mn(e,t)}else{if(pn(e,n))return;qp.set(n),i.uniformMatrix2fv(this.addr,!1,qp),mn(e,n)}}function ny(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(pn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),mn(e,t)}else{if(pn(e,n))return;Xp.set(n),i.uniformMatrix3fv(this.addr,!1,Xp),mn(e,n)}}function iy(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(pn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),mn(e,t)}else{if(pn(e,n))return;$p.set(n),i.uniformMatrix4fv(this.addr,!1,$p),mn(e,n)}}function sy(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function ry(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pn(e,t))return;i.uniform2iv(this.addr,t),mn(e,t)}}function ay(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pn(e,t))return;i.uniform3iv(this.addr,t),mn(e,t)}}function oy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pn(e,t))return;i.uniform4iv(this.addr,t),mn(e,t)}}function ly(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function cy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pn(e,t))return;i.uniform2uiv(this.addr,t),mn(e,t)}}function hy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pn(e,t))return;i.uniform3uiv(this.addr,t),mn(e,t)}}function uy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pn(e,t))return;i.uniform4uiv(this.addr,t),mn(e,t)}}function dy(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ad.compareFunction=e.isReversedDepthBuffer()?Jc:Zc,r=ad):r=lm,e.setTexture2D(t||r,s)}function fy(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||hm,s)}function py(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||um,s)}function my(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||cm,s)}function gy(i){switch(i){case 5126:return Kv;case 35664:return jv;case 35665:return Qv;case 35666:return ty;case 35674:return ey;case 35675:return ny;case 35676:return iy;case 5124:case 35670:return sy;case 35667:case 35671:return ry;case 35668:case 35672:return ay;case 35669:case 35673:return oy;case 5125:return ly;case 36294:return cy;case 36295:return hy;case 36296:return uy;case 35678:case 36198:case 36298:case 36306:case 35682:return dy;case 35679:case 36299:case 36307:return fy;case 35680:case 36300:case 36308:case 36293:return py;case 36289:case 36303:case 36311:case 36292:return my}}function _y(i,t){i.uniform1fv(this.addr,t)}function xy(i,t){let e=Jr(t,this.size,2);i.uniform2fv(this.addr,e)}function vy(i,t){let e=Jr(t,this.size,3);i.uniform3fv(this.addr,e)}function yy(i,t){let e=Jr(t,this.size,4);i.uniform4fv(this.addr,e)}function Sy(i,t){let e=Jr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function by(i,t){let e=Jr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function My(i,t){let e=Jr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function wy(i,t){i.uniform1iv(this.addr,t)}function Ey(i,t){i.uniform2iv(this.addr,t)}function Ty(i,t){i.uniform3iv(this.addr,t)}function Ay(i,t){i.uniform4iv(this.addr,t)}function Cy(i,t){i.uniform1uiv(this.addr,t)}function Ry(i,t){i.uniform2uiv(this.addr,t)}function Iy(i,t){i.uniform3uiv(this.addr,t)}function Py(i,t){i.uniform4uiv(this.addr,t)}function Ly(i,t,e){let n=this.cache,s=t.length,r=ih(e,s);pn(n,r)||(i.uniform1iv(this.addr,r),mn(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=ad:a=lm;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Dy(i,t,e){let n=this.cache,s=t.length,r=ih(e,s);pn(n,r)||(i.uniform1iv(this.addr,r),mn(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||hm,r[a])}function Ny(i,t,e){let n=this.cache,s=t.length,r=ih(e,s);pn(n,r)||(i.uniform1iv(this.addr,r),mn(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||um,r[a])}function Uy(i,t,e){let n=this.cache,s=t.length,r=ih(e,s);pn(n,r)||(i.uniform1iv(this.addr,r),mn(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||cm,r[a])}function Fy(i){switch(i){case 5126:return _y;case 35664:return xy;case 35665:return vy;case 35666:return yy;case 35674:return Sy;case 35675:return by;case 35676:return My;case 5124:case 35670:return wy;case 35667:case 35671:return Ey;case 35668:case 35672:return Ty;case 35669:case 35673:return Ay;case 5125:return Cy;case 36294:return Ry;case 36295:return Iy;case 36296:return Py;case 35678:case 36198:case 36298:case 36306:case 35682:return Ly;case 35679:case 36299:case 36307:return Dy;case 35680:case 36300:case 36308:case 36293:return Ny;case 36289:case 36303:case 36311:case 36292:return Uy}}var od=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=gy(e.type)}},ld=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Fy(e.type)}},cd=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},sd=/(\w+)(\])?(\[|\.)?/g;function Yp(i,t){i.seq.push(t),i.map[t.id]=t}function Oy(i,t,e){let n=i.name,s=n.length;for(sd.lastIndex=0;;){let r=sd.exec(n),a=sd.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Yp(e,c===void 0?new od(o,i,t):new ld(o,i,t));break}else{let m=e.map[o];m===void 0&&(m=new cd(o),Yp(e,m)),e=m}}}var Zr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Oy(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Zp(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var By=37297,ky=0;function zy(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Jp=new Se;function Vy(i){Le._getMatrix(Jp,Le.workingColorSpace,i);let t=`mat3( ${Jp.elements.map(e=>e.toFixed(4))} )`;switch(Le.getTransfer(i)){case La:return[t,"LinearTransferOETF"];case Ge:return[t,"sRGBTransferOETF"];default:return me("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Kp(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+zy(i.getShaderSource(t),o)}else return r}function Hy(i,t){let e=Vy(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Gy={[Pu]:"Linear",[Lu]:"Reinhard",[Du]:"Cineon",[Nu]:"ACESFilmic",[Fu]:"AgX",[Ou]:"Neutral",[Uu]:"Custom"};function Wy(i,t){let e=Gy[t];return e===void 0?(me("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var jc=new G;function $y(){Le.getLuminanceCoefficients(jc);let i=jc.x.toFixed(4),t=jc.y.toFixed(4),e=jc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Xy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wo).join(`
`)}function qy(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Yy(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function wo(i){return i!==""}function jp(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Qp(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Zy=/^[ \t]*#include +<([\w\d./]+)>/gm;function hd(i){return i.replace(Zy,Ky)}var Jy=new Map;function Ky(i,t){let e=Te[t];if(e===void 0){let n=Jy.get(t);if(n!==void 0)e=Te[n],me('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return hd(e)}var jy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tm(i){return i.replace(jy,Qy)}function Qy(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function em(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var tS={[uo]:"SHADOWMAP_TYPE_PCF",[Gr]:"SHADOWMAP_TYPE_VSM"};function eS(i){return tS[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var nS={[Cs]:"ENVMAP_TYPE_CUBE",[js]:"ENVMAP_TYPE_CUBE",[fo]:"ENVMAP_TYPE_CUBE_UV"};function iS(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":nS[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var sS={[js]:"ENVMAP_MODE_REFRACTION"};function rS(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":sS[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var aS={[oc]:"ENVMAP_BLENDING_MULTIPLY",[gp]:"ENVMAP_BLENDING_MIX",[_p]:"ENVMAP_BLENDING_ADD"};function oS(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":aS[i.combine]||"ENVMAP_BLENDING_NONE"}function lS(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function cS(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=eS(e),c=iS(e),h=rS(e),m=oS(e),d=lS(e),g=Xy(e),x=qy(r),A=s.createProgram(),p,f,N=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(wo).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(wo).join(`
`),f.length>0&&(f+=`
`)):(p=[em(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wo).join(`
`),f=[em(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+m:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ci?"#define TONE_MAPPING":"",e.toneMapping!==Ci?Te.tonemapping_pars_fragment:"",e.toneMapping!==Ci?Wy("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Te.colorspace_pars_fragment,Hy("linearToOutputTexel",e.outputColorSpace),$y(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(wo).join(`
`)),a=hd(a),a=jp(a,e),a=Qp(a,e),o=hd(o),o=jp(o,e),o=Qp(o,e),a=tm(a),o=tm(o),e.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,p=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",e.glslVersion===Xu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Xu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let F=N+p+a,T=N+f+o,b=Zp(s,s.VERTEX_SHADER,F),D=Zp(s,s.FRAGMENT_SHADER,T);s.attachShader(A,b),s.attachShader(A,D),e.index0AttributeName!==void 0?s.bindAttribLocation(A,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(A,0,"position"),s.linkProgram(A);function z($){if(i.debug.checkShaderErrors){let et=s.getProgramInfoLog(A)||"",it=s.getShaderInfoLog(b)||"",q=s.getShaderInfoLog(D)||"",j=et.trim(),ot=it.trim(),lt=q.trim(),bt=!0,ht=!0;if(s.getProgramParameter(A,s.LINK_STATUS)===!1)if(bt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,A,b,D);else{let vt=Kp(s,b,"vertex"),gt=Kp(s,D,"fragment");_e("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(A,s.VALIDATE_STATUS)+`

Material Name: `+$.name+`
Material Type: `+$.type+`

Program Info Log: `+j+`
`+vt+`
`+gt)}else j!==""?me("WebGLProgram: Program Info Log:",j):(ot===""||lt==="")&&(ht=!1);ht&&($.diagnostics={runnable:bt,programLog:j,vertexShader:{log:ot,prefix:p},fragmentShader:{log:lt,prefix:f}})}s.deleteShader(b),s.deleteShader(D),M=new Zr(s,A),L=Yy(s,A)}let M;this.getUniforms=function(){return M===void 0&&z(this),M};let L;this.getAttributes=function(){return L===void 0&&z(this),L};let k=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=s.getProgramParameter(A,By)),k},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(A),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ky++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=b,this.fragmentShader=D,this}var hS=0,ud=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new dd(t),e.set(t,n)),n}},dd=class{constructor(t){this.id=hS++,this.code=t,this.usedTimes=0}};function uS(i){return i===Ps||i===vo||i===yo}function dS(i,t,e,n,s,r){let a=new Ur,o=new ud,l=new Set,c=[],h=new Map,m=n.logarithmicDepthBuffer,d=n.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return l.add(M),M===0?"uv":`uv${M}`}function A(M,L,k,$,et,it){let q=$.fog,j=et.geometry,ot=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?$.environment:null,lt=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,bt=t.get(M.envMap||ot,lt),ht=bt&&bt.mapping===fo?bt.image.height:null,vt=g[M.type];M.precision!==null&&(d=n.getMaxPrecision(M.precision),d!==M.precision&&me("WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));let gt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,kt=gt!==void 0?gt.length:0,Wt=0;j.morphAttributes.position!==void 0&&(Wt=1),j.morphAttributes.normal!==void 0&&(Wt=2),j.morphAttributes.color!==void 0&&(Wt=3);let Fe,Me,Ie,dt;if(vt){let ze=Gn[vt];Fe=ze.vertexShader,Me=ze.fragmentShader}else{Fe=M.vertexShader,Me=M.fragmentShader;let ze=o.getVertexShaderStage(M),De=o.getFragmentShaderStage(M);o.update(M,ze,De),Ie=ze.id,dt=De.id}let mt=i.getRenderTarget(),Tt=i.state.buffers.depth.getReversed(),se=et.isInstancedMesh===!0,zt=et.isBatchedMesh===!0,de=!!M.map,fe=!!M.matcap,at=!!bt,Mt=!!M.aoMap,H=!!M.lightMap,wt=!!M.bumpMap&&M.wireframe===!1,It=!!M.normalMap,ce=!!M.displacementMap,Zt=!!M.emissiveMap,ue=!!M.metalnessMap,he=!!M.roughnessMap,W=M.anisotropy>0,Ae=M.clearcoat>0,$t=M.dispersion>0,I=M.retroreflectivity>0,v=M.iridescence>0,Q=M.sheen>0,st=M.transmission>0,ct=W&&!!M.anisotropyMap,Ct=Ae&&!!M.clearcoatMap,Rt=Ae&&!!M.clearcoatNormalMap,ut=Ae&&!!M.clearcoatRoughnessMap,_t=v&&!!M.iridescenceMap,Dt=v&&!!M.iridescenceThicknessMap,re=Q&&!!M.sheenColorMap,Ot=Q&&!!M.sheenRoughnessMap,Nt=!!M.specularMap,Qt=!!M.specularColorMap,ae=!!M.specularIntensityMap,xe=st&&!!M.transmissionMap,Y=st&&!!M.thicknessMap,Pt=!!M.gradientMap,pt=!!M.alphaMap,Ut=M.alphaTest>0,Vt=!!M.alphaHash,xt=!!M.extensions,Jt=Ci;M.toneMapped&&(mt===null||mt.isXRRenderTarget===!0)&&(Jt=i.toneMapping);let Xt={shaderID:vt,shaderType:M.type,shaderName:M.name,vertexShader:Fe,fragmentShader:Me,defines:M.defines,customVertexShaderID:Ie,customFragmentShaderID:dt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:zt,batchingColor:zt&&et._colorsTexture!==null,instancing:se,instancingColor:se&&et.instanceColor!==null,instancingMorph:se&&et.morphTexture!==null,outputColorSpace:mt===null?i.outputColorSpace:mt.isXRRenderTarget===!0?mt.texture.colorSpace:Le.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:de,matcap:fe,envMap:at,envMapMode:at&&bt.mapping,envMapCubeUVHeight:ht,aoMap:Mt,lightMap:H,bumpMap:wt,normalMap:It,displacementMap:ce,emissiveMap:Zt,normalMapObjectSpace:It&&M.normalMapType===yp,normalMapTangentSpace:It&&M.normalMapType===Yc,packedNormalMap:It&&M.normalMapType===Yc&&uS(M.normalMap.format),metalnessMap:ue,roughnessMap:he,anisotropy:W,anisotropyMap:ct,clearcoat:Ae,clearcoatMap:Ct,clearcoatNormalMap:Rt,clearcoatRoughnessMap:ut,dispersion:$t,retroreflection:I,iridescence:v,iridescenceMap:_t,iridescenceThicknessMap:Dt,sheen:Q,sheenColorMap:re,sheenRoughnessMap:Ot,specularMap:Nt,specularColorMap:Qt,specularIntensityMap:ae,transmission:st,transmissionMap:xe,thicknessMap:Y,gradientMap:Pt,opaque:M.transparent===!1&&M.blending===Wr&&M.alphaToCoverage===!1,alphaMap:pt,alphaTest:Ut,alphaHash:Vt,combine:M.combine,mapUv:de&&x(M.map.channel),aoMapUv:Mt&&x(M.aoMap.channel),lightMapUv:H&&x(M.lightMap.channel),bumpMapUv:wt&&x(M.bumpMap.channel),normalMapUv:It&&x(M.normalMap.channel),displacementMapUv:ce&&x(M.displacementMap.channel),emissiveMapUv:Zt&&x(M.emissiveMap.channel),metalnessMapUv:ue&&x(M.metalnessMap.channel),roughnessMapUv:he&&x(M.roughnessMap.channel),anisotropyMapUv:ct&&x(M.anisotropyMap.channel),clearcoatMapUv:Ct&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ut&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:_t&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:Dt&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:re&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:Ot&&x(M.sheenRoughnessMap.channel),specularMapUv:Nt&&x(M.specularMap.channel),specularColorMapUv:Qt&&x(M.specularColorMap.channel),specularIntensityMapUv:ae&&x(M.specularIntensityMap.channel),transmissionMapUv:xe&&x(M.transmissionMap.channel),thicknessMapUv:Y&&x(M.thicknessMap.channel),alphaMapUv:pt&&x(M.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(It||W),vertexNormals:!!j.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:et.isPoints===!0&&!!j.attributes.uv&&(de||pt),fog:!!q,useFog:M.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||j.attributes.normal===void 0&&It===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:Tt,skinning:et.isSkinnedMesh===!0,hasPositionAttribute:j.attributes.position!==void 0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:kt,morphTextureStride:Wt,numSunLights:L.sun.length,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numSunLightShadows:L.sunShadowMap.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numLightProbeGrids:it.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&k.length>0,shadowMapType:i.shadowMap.type,toneMapping:Jt,decodeVideoTexture:de&&M.map.isVideoTexture===!0&&Le.getTransfer(M.map.colorSpace)===Ge,decodeVideoTextureEmissive:Zt&&M.emissiveMap.isVideoTexture===!0&&Le.getTransfer(M.emissiveMap.colorSpace)===Ge,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Wi,flipSided:M.side===Hn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:xt&&M.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xt&&M.extensions.multiDraw===!0||zt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Xt.vertexUv1s=l.has(1),Xt.vertexUv2s=l.has(2),Xt.vertexUv3s=l.has(3),l.clear(),Xt}function p(M){let L=[];if(M.shaderID?L.push(M.shaderID):(L.push(M.customVertexShaderID),L.push(M.customFragmentShaderID)),M.defines!==void 0)for(let k in M.defines)L.push(k),L.push(M.defines[k]);return M.isRawShaderMaterial===!1&&(f(L,M),N(L,M),L.push(i.outputColorSpace)),L.push(M.customProgramCacheKey),L.join()}function f(M,L){M.push(L.precision),M.push(L.outputColorSpace),M.push(L.envMapMode),M.push(L.envMapCubeUVHeight),M.push(L.mapUv),M.push(L.alphaMapUv),M.push(L.lightMapUv),M.push(L.aoMapUv),M.push(L.bumpMapUv),M.push(L.normalMapUv),M.push(L.displacementMapUv),M.push(L.emissiveMapUv),M.push(L.metalnessMapUv),M.push(L.roughnessMapUv),M.push(L.anisotropyMapUv),M.push(L.clearcoatMapUv),M.push(L.clearcoatNormalMapUv),M.push(L.clearcoatRoughnessMapUv),M.push(L.iridescenceMapUv),M.push(L.iridescenceThicknessMapUv),M.push(L.sheenColorMapUv),M.push(L.sheenRoughnessMapUv),M.push(L.specularMapUv),M.push(L.specularColorMapUv),M.push(L.specularIntensityMapUv),M.push(L.transmissionMapUv),M.push(L.thicknessMapUv),M.push(L.combine),M.push(L.fogExp2),M.push(L.sizeAttenuation),M.push(L.morphTargetsCount),M.push(L.morphAttributeCount),M.push(L.numSunLights),M.push(L.numDirLights),M.push(L.numPointLights),M.push(L.numSpotLights),M.push(L.numSpotLightMaps),M.push(L.numHemiLights),M.push(L.numRectAreaLights),M.push(L.numSunLightShadows),M.push(L.numDirLightShadows),M.push(L.numPointLightShadows),M.push(L.numSpotLightShadows),M.push(L.numSpotLightShadowsWithMaps),M.push(L.numLightProbes),M.push(L.shadowMapType),M.push(L.toneMapping),M.push(L.numClippingPlanes),M.push(L.numClipIntersection),M.push(L.depthPacking)}function N(M,L){a.disableAll(),L.instancing&&a.enable(0),L.instancingColor&&a.enable(1),L.instancingMorph&&a.enable(2),L.matcap&&a.enable(3),L.envMap&&a.enable(4),L.normalMapObjectSpace&&a.enable(5),L.normalMapTangentSpace&&a.enable(6),L.clearcoat&&a.enable(7),L.iridescence&&a.enable(8),L.alphaTest&&a.enable(9),L.vertexColors&&a.enable(10),L.vertexAlphas&&a.enable(11),L.vertexUv1s&&a.enable(12),L.vertexUv2s&&a.enable(13),L.vertexUv3s&&a.enable(14),L.vertexTangents&&a.enable(15),L.anisotropy&&a.enable(16),L.alphaHash&&a.enable(17),L.batching&&a.enable(18),L.dispersion&&a.enable(19),L.retroreflection&&a.enable(24),L.batchingColor&&a.enable(20),L.gradientMap&&a.enable(21),L.packedNormalMap&&a.enable(22),L.vertexNormals&&a.enable(23),M.push(a.mask),a.disableAll(),L.fog&&a.enable(0),L.useFog&&a.enable(1),L.flatShading&&a.enable(2),L.logarithmicDepthBuffer&&a.enable(3),L.reversedDepthBuffer&&a.enable(4),L.skinning&&a.enable(5),L.morphTargets&&a.enable(6),L.morphNormals&&a.enable(7),L.morphColors&&a.enable(8),L.premultipliedAlpha&&a.enable(9),L.shadowMapEnabled&&a.enable(10),L.doubleSided&&a.enable(11),L.flipSided&&a.enable(12),L.useDepthPacking&&a.enable(13),L.dithering&&a.enable(14),L.transmission&&a.enable(15),L.sheen&&a.enable(16),L.opaque&&a.enable(17),L.pointsUvs&&a.enable(18),L.decodeVideoTexture&&a.enable(19),L.decodeVideoTextureEmissive&&a.enable(20),L.alphaToCoverage&&a.enable(21),L.numLightProbeGrids>0&&a.enable(22),L.hasPositionAttribute&&a.enable(23),M.push(a.mask)}function F(M){let L=g[M.type],k;if(L){let $=Gn[L];k=So.clone($.uniforms)}else k=M.uniforms;return k}function T(M,L){let k=h.get(L);return k!==void 0?++k.usedTimes:(k=new cS(i,L,M,s),c.push(k),h.set(L,k)),k}function b(M){if(--M.usedTimes===0){let L=c.indexOf(M);c[L]=c[c.length-1],c.pop(),h.delete(M.cacheKey),M.destroy()}}function D(M){o.remove(M)}function z(){o.dispose()}return{getParameters:A,getProgramCacheKey:p,getUniforms:F,acquireProgram:T,releaseProgram:b,releaseShaderCache:D,programs:c,dispose:z}}function fS(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function pS(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function nm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function im(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d){let g=0;return d.isInstancedMesh&&(g+=2),d.isSkinnedMesh&&(g+=1),g}function o(d,g,x,A,p,f){let N=i[t];return N===void 0?(N={id:d.id,object:d,geometry:g,material:x,materialVariant:a(d),groupOrder:A,renderOrder:d.renderOrder,z:p,group:f},i[t]=N):(N.id=d.id,N.object=d,N.geometry=g,N.material=x,N.materialVariant=a(d),N.groupOrder=A,N.renderOrder=d.renderOrder,N.z=p,N.group=f),t++,N}function l(d,g,x,A,p,f,N){N.reversedDepth===!0&&(p=-p);let F=o(d,g,x,A,p,f);x.transmission>0?n.push(F):x.transparent===!0?s.push(F):e.push(F)}function c(d,g,x,A,p,f){let N=o(d,g,x,A,p,f);x.transmission>0?n.unshift(N):x.transparent===!0?s.unshift(N):e.unshift(N)}function h(d,g){e.length>1&&e.sort(d||pS),n.length>1&&n.sort(g||nm),s.length>1&&s.sort(g||nm)}function m(){for(let d=t,g=i.length;d<g;d++){let x=i[d];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:m,sort:h}}function mS(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new im,i.set(n,[a])):s>=r.length?(a=new im,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function gS(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new G,color:new pe};break;case"SpotLight":e={position:new G,direction:new G,color:new pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new G,color:new pe,distance:0,decay:0};break;case"HemisphereLight":e={direction:new G,skyColor:new pe,groundColor:new pe};break;case"RectAreaLight":e={color:new pe,position:new G,halfWidth:new G,halfHeight:new G};break}return i[t.id]=e,e}}}function _S(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var xS=0;function vS(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function yS(i){let t=new gS,e=_S(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new G);let s=new G,r=new Be,a=new Be;function o(c){let h=0,m=0,d=0;for(let et=0;et<9;et++)n.probe[et].set(0,0,0);let g=0,x=0,A=0,p=0,f=0,N=0,F=0,T=0,b=0,D=0,z=0,M=0,L=0,k=0;c.sort(vS);for(let et=0,it=c.length;et<it;et++){let q=c[et],j=q.color,ot=q.intensity,lt=q.distance,bt=null;if(q.shadow&&q.shadow.map&&(q.shadow.map.texture.format===Ps?bt=q.shadow.map.texture:bt=q.shadow.map.depthTexture||q.shadow.map.texture),q.isAmbientLight)h+=j.r*ot,m+=j.g*ot,d+=j.b*ot;else if(q.isLightProbe){for(let ht=0;ht<9;ht++)n.probe[ht].addScaledVector(q.sh.coefficients[ht],ot);k++}else if(q.isSunLight){let ht=t.get(q);if(ht.color.copy(q.color).multiplyScalar(q.intensity),q.castShadow){let vt=q.shadow,gt=e.get(q);gt.shadowIntensity=vt.intensity,gt.shadowBias=vt.bias,gt.shadowNormalBias=vt.normalBias,gt.shadowRadius=vt.radius,gt.shadowMapSize.copy(vt.mapSize).multiply(vt.getFrameExtents()),n.sunShadow[x]=gt,n.sunShadowMap[x]=bt;let kt=vt.getViewportCount();for(let Wt=0;Wt<kt;Wt++)n.sunShadowMatrix[A+Wt]=vt.getMatrix(Wt),n.sunShadowCascade[A+Wt]=vt._cascadeData[Wt];A+=kt,x++}n.sun[g]=ht,g++}else if(q.isDirectionalLight){let ht=t.get(q);if(ht.color.copy(q.color).multiplyScalar(q.intensity),q.castShadow){let vt=q.shadow,gt=e.get(q);gt.shadowIntensity=vt.intensity,gt.shadowBias=vt.bias,gt.shadowNormalBias=vt.normalBias,gt.shadowRadius=vt.radius,gt.shadowMapSize=vt.mapSize,n.directionalShadow[p]=gt,n.directionalShadowMap[p]=bt,n.directionalShadowMatrix[p]=q.shadow.matrix,b++}n.directional[p]=ht,p++}else if(q.isSpotLight){let ht=t.get(q);ht.position.setFromMatrixPosition(q.matrixWorld),ht.color.copy(j).multiplyScalar(ot),ht.distance=lt,ht.coneCos=Math.cos(q.angle),ht.penumbraCos=Math.cos(q.angle*(1-q.penumbra)),ht.decay=q.decay,n.spot[N]=ht;let vt=q.shadow;if(q.map&&(n.spotLightMap[M]=q.map,M++,vt.updateMatrices(q),q.castShadow&&L++),n.spotLightMatrix[N]=vt.matrix,q.castShadow){let gt=e.get(q);gt.shadowIntensity=vt.intensity,gt.shadowBias=vt.bias,gt.shadowNormalBias=vt.normalBias,gt.shadowRadius=vt.radius,gt.shadowMapSize=vt.mapSize,n.spotShadow[N]=gt,n.spotShadowMap[N]=bt,z++}N++}else if(q.isRectAreaLight){let ht=t.get(q);ht.color.copy(j).multiplyScalar(ot),ht.halfWidth.set(q.width*.5,0,0),ht.halfHeight.set(0,q.height*.5,0),n.rectArea[F]=ht,F++}else if(q.isPointLight){let ht=t.get(q);if(ht.color.copy(q.color).multiplyScalar(q.intensity),ht.distance=q.distance,ht.decay=q.decay,q.castShadow){let vt=q.shadow,gt=e.get(q);gt.shadowIntensity=vt.intensity,gt.shadowBias=vt.bias,gt.shadowNormalBias=vt.normalBias,gt.shadowRadius=vt.radius,gt.shadowMapSize=vt.mapSize,gt.shadowCameraNear=vt.camera.near,gt.shadowCameraFar=vt.camera.far,n.pointShadow[f]=gt,n.pointShadowMap[f]=bt,n.pointShadowMatrix[f]=q.shadow.matrix,D++}n.point[f]=ht,f++}else if(q.isHemisphereLight){let ht=t.get(q);ht.skyColor.copy(q.color).multiplyScalar(ot),ht.groundColor.copy(q.groundColor).multiplyScalar(ot),n.hemi[T]=ht,T++}}F>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ft.LTC_FLOAT_1,n.rectAreaLTC2=Ft.LTC_FLOAT_2):(n.rectAreaLTC1=Ft.LTC_HALF_1,n.rectAreaLTC2=Ft.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=m,n.ambient[2]=d;let $=n.hash;($.sunLength!==g||$.directionalLength!==p||$.pointLength!==f||$.spotLength!==N||$.rectAreaLength!==F||$.hemiLength!==T||$.numSunShadows!==x||$.numDirectionalShadows!==b||$.numPointShadows!==D||$.numSpotShadows!==z||$.numSpotMaps!==M||$.numLightProbes!==k)&&(n.sun.length=g,n.directional.length=p,n.spot.length=N,n.rectArea.length=F,n.point.length=f,n.hemi.length=T,n.sunShadow.length=x,n.sunShadowMap.length=x,n.sunShadowMatrix.length=A,n.sunShadowCascade.length=A,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=D,n.pointShadowMap.length=D,n.pointShadowMatrix.length=D,n.spotShadow.length=z,n.spotShadowMap.length=z,n.spotLightMatrix.length=z+M-L,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=k,$.sunLength=g,$.directionalLength=p,$.pointLength=f,$.spotLength=N,$.rectAreaLength=F,$.hemiLength=T,$.numSunShadows=x,$.numDirectionalShadows=b,$.numPointShadows=D,$.numSpotShadows=z,$.numSpotMaps=M,$.numLightProbes=k,n.version=xS++)}function l(c,h){let m=0,d=0,g=0,x=0,A=0,p=0,f=h.matrixWorldInverse;for(let N=0,F=c.length;N<F;N++){let T=c[N];if(T.isSunLight){let b=n.sun[m];b.direction.setFromMatrixPosition(T.matrixWorld),b.direction.transformDirection(f),m++}else if(T.isDirectionalLight){let b=n.directional[d];b.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(f),d++}else if(T.isSpotLight){let b=n.spot[x];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(f),b.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(f),x++}else if(T.isRectAreaLight){let b=n.rectArea[A];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(f),a.identity(),r.copy(T.matrixWorld),r.premultiply(f),a.extractRotation(r),b.halfWidth.set(T.width*.5,0,0),b.halfHeight.set(0,T.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),A++}else if(T.isPointLight){let b=n.point[g];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(f),g++}else if(T.isHemisphereLight){let b=n.hemi[p];b.direction.setFromMatrixPosition(T.matrixWorld),b.direction.transformDirection(f),p++}}}return{setup:o,setupView:l,state:n}}function sm(i){let t=new yS(i),e=[],n=[],s=[];function r(d){m.camera=d,e.length=0,n.length=0,s.length=0}function a(d){e.push(d)}function o(d){n.push(d)}function l(d){s.push(d)}function c(){t.setup(e)}function h(d){t.setupView(e,d)}let m={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:m,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function SS(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new sm(i),t.set(s,[o])):r>=a.length?(o=new sm(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var bS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,MS=`uniform sampler2D shadow_pass;
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
}`,wS=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],ES=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],rm=new Be,Mo=new G,rd=new G;function TS(i,t,e){let n=new Or,s=new Lt,r=new Lt,a=new We,o=new Xl,l=new ql,c={},h=e.maxTextureSize,m={[As]:Hn,[Hn]:As,[Wi]:Wi},d=new bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:bS,fragmentShader:MS}),g=d.clone();g.defines.HORIZONTAL_PASS=1;let x=new cn;x.setAttribute("position",new qe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let A=new Sn(x,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=uo;let f=this.type;this.render=function(D,z,M){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||D.length===0)return;this.type===Kf&&(me("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=uo);let L=i.getRenderTarget(),k=i.getActiveCubeFace(),$=i.getActiveMipmapLevel(),et=i.state;et.setBlending($i),et.buffers.depth.getReversed()===!0?et.buffers.color.setClear(0,0,0,0):et.buffers.color.setClear(1,1,1,1),et.buffers.depth.setTest(!0),et.setScissorTest(!1);let it=f!==this.type;it&&z.traverse(function(q){q.material&&(Array.isArray(q.material)?q.material.forEach(j=>j.needsUpdate=!0):q.material.needsUpdate=!0)});for(let q=0,j=D.length;q<j;q++){let ot=D[q],lt=ot.shadow;if(lt===void 0){me("WebGLShadowMap:",ot,"has no shadow.");continue}if(lt.autoUpdate===!1&&lt.needsUpdate===!1)continue;s.copy(lt.mapSize);let bt=lt.getFrameExtents();s.multiply(bt),r.copy(lt.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/bt.x),s.x=r.x*bt.x,lt.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/bt.y),s.y=r.y*bt.y,lt.mapSize.y=r.y));let ht=i.state.buffers.depth.getReversed();if(lt.camera._reversedDepth=ht,lt.map===null||it===!0){if(lt.map!==null&&(lt.map.depthTexture!==null&&(lt.map.depthTexture.dispose(),lt.map.depthTexture=null),lt.map.dispose()),this.type===Gr){if(ot.isPointLight){me("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}lt.map=new Zn(s.x,s.y,{format:Ps,type:Ii,minFilter:Tn,magFilter:Tn,generateMipmaps:!1}),lt.map.texture.name=ot.name+".shadowMap",lt.map.depthTexture=new bs(s.x,s.y,di),lt.map.depthTexture.name=ot.name+".shadowMapDepth",lt.map.depthTexture.format=zi,lt.map.depthTexture.compareFunction=null,lt.map.depthTexture.minFilter=vn,lt.map.depthTexture.magFilter=vn}else ot.isPointLight?(lt.map=new th(s.x),lt.map.depthTexture=new Bl(s.x,Ri)):(lt.map=new Zn(s.x,s.y),lt.map.depthTexture=new bs(s.x,s.y,Ri)),lt.map.depthTexture.name=ot.name+".shadowMap",lt.map.depthTexture.format=zi,this.type===uo?(lt.map.depthTexture.compareFunction=ht?Jc:Zc,lt.map.depthTexture.minFilter=Tn,lt.map.depthTexture.magFilter=Tn):(lt.map.depthTexture.compareFunction=null,lt.map.depthTexture.minFilter=vn,lt.map.depthTexture.magFilter=vn);lt.camera.updateProjectionMatrix()}lt.map.isWebGLCubeRenderTarget!==!0&&(lt.map.width!==s.x||lt.map.height!==s.y)&&lt.map.setSize(s.x,s.y);let vt=lt.map.isWebGLCubeRenderTarget?6:lt.getViewportCount();ot.isPointLight!==!0&&lt.updateMatrices(ot,M);for(let gt=0;gt<vt;gt++){let kt=lt.getCamera(gt);if(ot.isPointLight){let Wt=lt.camera,Fe=lt.matrix,Me=ot.distance||Wt.far;Me!==Wt.far&&(Wt.far=Me,Wt.updateProjectionMatrix()),Mo.setFromMatrixPosition(ot.matrixWorld),Wt.position.copy(Mo),rd.copy(Wt.position),rd.add(wS[gt]),Wt.up.copy(ES[gt]),Wt.lookAt(rd),Wt.updateMatrixWorld(),Fe.makeTranslation(-Mo.x,-Mo.y,-Mo.z),rm.multiplyMatrices(Wt.projectionMatrix,Wt.matrixWorldInverse),lt._frustum.setFromProjectionMatrix(rm,Wt.coordinateSystem,Wt.reversedDepth)}if(lt.map.isWebGLCubeRenderTarget)i.setRenderTarget(lt.map,gt),i.clear();else{gt===0&&(i.setRenderTarget(lt.map),i.clear());let Wt=lt.getViewport(gt);a.set(r.x*Wt.x,r.y*Wt.y,r.x*Wt.z,r.y*Wt.w),et.viewport(a)}n=lt.getFrustum(gt),T(z,M,kt,ot,this.type)}lt.isPointLightShadow!==!0&&this.type===Gr&&N(lt,M),lt.needsUpdate=!1}f=this.type,p.needsUpdate=!1,i.setRenderTarget(L,k,$)};function N(D,z){let M=t.update(A);d.defines.VSM_SAMPLES!==D.blurSamples&&(d.defines.VSM_SAMPLES=D.blurSamples,g.defines.VSM_SAMPLES=D.blurSamples,d.needsUpdate=!0,g.needsUpdate=!0),D.mapPass===null?D.mapPass=new Zn(s.x,s.y,{format:Ps,type:Ii}):(D.mapPass.width!==D.map.width||D.mapPass.height!==D.map.height)&&D.mapPass.setSize(D.map.width,D.map.height),d.uniforms.shadow_pass.value=D.map.depthTexture,d.uniforms.resolution.value.set(D.map.width,D.map.height),d.uniforms.radius.value=D.radius,i.setRenderTarget(D.mapPass),i.clear(),i.renderBufferDirect(z,null,M,d,A,null),g.uniforms.shadow_pass.value=D.mapPass.texture,g.uniforms.resolution.value.set(D.map.width,D.map.height),g.uniforms.radius.value=D.radius,i.setRenderTarget(D.map),i.clear(),i.renderBufferDirect(z,null,M,g,A,null)}function F(D,z,M,L){let k=null,$=M.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if($!==void 0)k=$;else if(k=M.isPointLight===!0?l:o,i.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){let et=k.uuid,it=z.uuid,q=c[et];q===void 0&&(q={},c[et]=q);let j=q[it];j===void 0&&(j=k.clone(),q[it]=j,z.addEventListener("dispose",b)),k=j}if(k.visible=z.visible,k.wireframe=z.wireframe,L===Gr?k.side=z.shadowSide!==null?z.shadowSide:z.side:k.side=z.shadowSide!==null?z.shadowSide:m[z.side],k.alphaMap=z.alphaMap,k.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,k.map=z.map,k.clipShadows=z.clipShadows,k.clippingPlanes=z.clippingPlanes,k.clipIntersection=z.clipIntersection,k.displacementMap=z.displacementMap,k.displacementScale=z.displacementScale,k.displacementBias=z.displacementBias,k.wireframeLinewidth=z.wireframeLinewidth,k.linewidth=z.linewidth,M.isPointLight===!0&&k.isMeshDistanceMaterial===!0){let et=i.properties.get(k);et.light=M}return k}function T(D,z,M,L,k){if(D.visible===!1)return;if(D.layers.test(z.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&k===Gr)&&(!D.frustumCulled||D.intersectsFrustum(n))){D.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,D.matrixWorld);let it=t.update(D),q=D.material;if(Array.isArray(q)){let j=it.groups;for(let ot=0,lt=j.length;ot<lt;ot++){let bt=j[ot],ht=q[bt.materialIndex];if(ht&&ht.visible){let vt=F(D,ht,L,k);D.onBeforeShadow(i,D,z,M,it,vt,bt),i.renderBufferDirect(M,null,it,vt,D,bt),D.onAfterShadow(i,D,z,M,it,vt,bt)}}}else if(q.visible){let j=F(D,q,L,k);D.onBeforeShadow(i,D,z,M,it,j,null),i.renderBufferDirect(M,null,it,j,D,null),D.onAfterShadow(i,D,z,M,it,j,null)}}let et=D.children;for(let it=0,q=et.length;it<q;it++)T(et[it],z,M,L,k)}function b(D){D.target.removeEventListener("dispose",b);for(let M in c){let L=c[M],k=D.target.uuid;k in L&&(L[k].dispose(),delete L[k])}}}function AS(i,t){function e(){let Y=!1,Pt=new We,pt=null,Ut=new We(0,0,0,0);return{setMask:function(Vt){pt!==Vt&&!Y&&(i.colorMask(Vt,Vt,Vt,Vt),pt=Vt)},setLocked:function(Vt){Y=Vt},setClear:function(Vt,xt,Jt,Xt,ze){ze===!0&&(Vt*=Xt,xt*=Xt,Jt*=Xt),Pt.set(Vt,xt,Jt,Xt),Ut.equals(Pt)===!1&&(i.clearColor(Vt,xt,Jt,Xt),Ut.copy(Pt))},reset:function(){Y=!1,pt=null,Ut.set(-1,0,0,0)}}}function n(){let Y=!1,Pt=!1,pt=null,Ut=null,Vt=null;return{setReversed:function(xt){if(Pt!==xt){let Jt=t.get("EXT_clip_control");xt?Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.ZERO_TO_ONE_EXT):Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.NEGATIVE_ONE_TO_ONE_EXT),Pt=xt;let Xt=Vt;Vt=null,this.setClear(Xt)}},getReversed:function(){return Pt},setTest:function(xt){xt?mt(i.DEPTH_TEST):Tt(i.DEPTH_TEST)},setMask:function(xt){pt!==xt&&!Y&&(i.depthMask(xt),pt=xt)},setFunc:function(xt){if(Pt&&(xt=Pp[xt]),Ut!==xt){switch(xt){case yl:i.depthFunc(i.NEVER);break;case Sl:i.depthFunc(i.ALWAYS);break;case bl:i.depthFunc(i.LESS);break;case Ir:i.depthFunc(i.LEQUAL);break;case Ml:i.depthFunc(i.EQUAL);break;case wl:i.depthFunc(i.GEQUAL);break;case El:i.depthFunc(i.GREATER);break;case Tl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ut=xt}},setLocked:function(xt){Y=xt},setClear:function(xt){Vt!==xt&&(Vt=xt,Pt&&(xt=1-xt),i.clearDepth(xt))},reset:function(){Y=!1,pt=null,Ut=null,Vt=null,Pt=!1}}}function s(){let Y=!1,Pt=null,pt=null,Ut=null,Vt=null,xt=null,Jt=null,Xt=null,ze=null;return{setTest:function(De){Y||(De?mt(i.STENCIL_TEST):Tt(i.STENCIL_TEST))},setMask:function(De){Pt!==De&&!Y&&(i.stencilMask(De),Pt=De)},setFunc:function(De,Fn,Qn){(pt!==De||Ut!==Fn||Vt!==Qn)&&(i.stencilFunc(De,Fn,Qn),pt=De,Ut=Fn,Vt=Qn)},setOp:function(De,Fn,Qn){(xt!==De||Jt!==Fn||Xt!==Qn)&&(i.stencilOp(De,Fn,Qn),xt=De,Jt=Fn,Xt=Qn)},setLocked:function(De){Y=De},setClear:function(De){ze!==De&&(i.clearStencil(De),ze=De)},reset:function(){Y=!1,Pt=null,pt=null,Ut=null,Vt=null,xt=null,Jt=null,Xt=null,ze=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},m={},d={},g=new WeakMap,x=[],A=null,p=!1,f=null,N=null,F=null,T=null,b=null,D=null,z=null,M=new pe(0,0,0),L=0,k=!1,$=null,et=null,it=null,q=null,j=null,ot=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),lt=!1,bt=0,ht=i.getParameter(i.VERSION);ht.indexOf("WebGL")!==-1?(bt=parseFloat(/^WebGL (\d)/.exec(ht)[1]),lt=bt>=1):ht.indexOf("OpenGL ES")!==-1&&(bt=parseFloat(/^OpenGL ES (\d)/.exec(ht)[1]),lt=bt>=2);let vt=null,gt={},kt=i.getParameter(i.SCISSOR_BOX),Wt=i.getParameter(i.VIEWPORT),Fe=new We().fromArray(kt),Me=new We().fromArray(Wt);function Ie(Y,Pt,pt,Ut){let Vt=new Uint8Array(4),xt=i.createTexture();i.bindTexture(Y,xt),i.texParameteri(Y,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(Y,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Jt=0;Jt<pt;Jt++)Y===i.TEXTURE_3D||Y===i.TEXTURE_2D_ARRAY?i.texImage3D(Pt,0,i.RGBA,1,1,Ut,0,i.RGBA,i.UNSIGNED_BYTE,Vt):i.texImage2D(Pt+Jt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Vt);return xt}let dt={};dt[i.TEXTURE_2D]=Ie(i.TEXTURE_2D,i.TEXTURE_2D,1),dt[i.TEXTURE_CUBE_MAP]=Ie(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),dt[i.TEXTURE_2D_ARRAY]=Ie(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),dt[i.TEXTURE_3D]=Ie(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),mt(i.DEPTH_TEST),a.setFunc(Ir),wt(!1),It(Eu),mt(i.CULL_FACE),Mt($i);function mt(Y){h[Y]!==!0&&(i.enable(Y),h[Y]=!0)}function Tt(Y){h[Y]!==!1&&(i.disable(Y),h[Y]=!1)}function se(Y,Pt){return d[Y]!==Pt?(i.bindFramebuffer(Y,Pt),d[Y]=Pt,Y===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=Pt),Y===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=Pt),!0):!1}function zt(Y,Pt){let pt=x,Ut=!1;if(Y){pt=g.get(Pt),pt===void 0&&(pt=[],g.set(Pt,pt));let Vt=Y.textures;if(pt.length!==Vt.length||pt[0]!==i.COLOR_ATTACHMENT0){for(let xt=0,Jt=Vt.length;xt<Jt;xt++)pt[xt]=i.COLOR_ATTACHMENT0+xt;pt.length=Vt.length,Ut=!0}}else pt[0]!==i.BACK&&(pt[0]=i.BACK,Ut=!0);Ut&&i.drawBuffers(pt)}function de(Y){return A!==Y?(i.useProgram(Y),A=Y,!0):!1}let fe={[Ks]:i.FUNC_ADD,[Qf]:i.FUNC_SUBTRACT,[tp]:i.FUNC_REVERSE_SUBTRACT};fe[ep]=i.MIN,fe[np]=i.MAX;let at={[ip]:i.ZERO,[sp]:i.ONE,[rp]:i.SRC_COLOR,[Ru]:i.SRC_ALPHA,[up]:i.SRC_ALPHA_SATURATE,[cp]:i.DST_COLOR,[op]:i.DST_ALPHA,[ap]:i.ONE_MINUS_SRC_COLOR,[Iu]:i.ONE_MINUS_SRC_ALPHA,[hp]:i.ONE_MINUS_DST_COLOR,[lp]:i.ONE_MINUS_DST_ALPHA,[dp]:i.CONSTANT_COLOR,[fp]:i.ONE_MINUS_CONSTANT_COLOR,[pp]:i.CONSTANT_ALPHA,[mp]:i.ONE_MINUS_CONSTANT_ALPHA};function Mt(Y,Pt,pt,Ut,Vt,xt,Jt,Xt,ze,De){if(Y===$i){p===!0&&(Tt(i.BLEND),p=!1);return}if(p===!1&&(mt(i.BLEND),p=!0),Y!==jf){if(Y!==f||De!==k){if((N!==Ks||b!==Ks)&&(i.blendEquation(i.FUNC_ADD),N=Ks,b=Ks),De)switch(Y){case Wr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Tu:i.blendFunc(i.ONE,i.ONE);break;case Au:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Cu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:_e("WebGLState: Invalid blending: ",Y);break}else switch(Y){case Wr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Tu:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Au:_e("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Cu:_e("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:_e("WebGLState: Invalid blending: ",Y);break}F=null,T=null,D=null,z=null,M.set(0,0,0),L=0,f=Y,k=De}return}Vt=Vt||Pt,xt=xt||pt,Jt=Jt||Ut,(Pt!==N||Vt!==b)&&(i.blendEquationSeparate(fe[Pt],fe[Vt]),N=Pt,b=Vt),(pt!==F||Ut!==T||xt!==D||Jt!==z)&&(i.blendFuncSeparate(at[pt],at[Ut],at[xt],at[Jt]),F=pt,T=Ut,D=xt,z=Jt),(Xt.equals(M)===!1||ze!==L)&&(i.blendColor(Xt.r,Xt.g,Xt.b,ze),M.copy(Xt),L=ze),f=Y,k=!1}function H(Y,Pt){Y.side===Wi?Tt(i.CULL_FACE):mt(i.CULL_FACE);let pt=Y.side===Hn;Pt&&(pt=!pt),wt(pt),Y.blending===Wr&&Y.transparent===!1?Mt($i):Mt(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),a.setFunc(Y.depthFunc),a.setTest(Y.depthTest),a.setMask(Y.depthWrite),r.setMask(Y.colorWrite);let Ut=Y.stencilWrite;o.setTest(Ut),Ut&&(o.setMask(Y.stencilWriteMask),o.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),o.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),Zt(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?mt(i.SAMPLE_ALPHA_TO_COVERAGE):Tt(i.SAMPLE_ALPHA_TO_COVERAGE)}function wt(Y){$!==Y&&(Y?i.frontFace(i.CW):i.frontFace(i.CCW),$=Y)}function It(Y){Y!==Zf?(mt(i.CULL_FACE),Y!==et&&(Y===Eu?i.cullFace(i.BACK):Y===Jf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Tt(i.CULL_FACE),et=Y}function ce(Y){Y!==it&&(lt&&i.lineWidth(Y),it=Y)}function Zt(Y,Pt,pt){Y?(mt(i.POLYGON_OFFSET_FILL),(q!==Pt||j!==pt)&&(q=Pt,j=pt,a.getReversed()&&(Pt=-Pt),i.polygonOffset(Pt,pt))):Tt(i.POLYGON_OFFSET_FILL)}function ue(Y){Y?mt(i.SCISSOR_TEST):Tt(i.SCISSOR_TEST)}function he(Y){Y===void 0&&(Y=i.TEXTURE0+ot-1),vt!==Y&&(i.activeTexture(Y),vt=Y)}function W(Y,Pt,pt){pt===void 0&&(vt===null?pt=i.TEXTURE0+ot-1:pt=vt);let Ut=gt[pt];Ut===void 0&&(Ut={type:void 0,texture:void 0},gt[pt]=Ut),(Ut.type!==Y||Ut.texture!==Pt)&&(vt!==pt&&(i.activeTexture(pt),vt=pt),i.bindTexture(Y,Pt||dt[Y]),Ut.type=Y,Ut.texture=Pt)}function Ae(){let Y=gt[vt];Y!==void 0&&Y.type!==void 0&&(i.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function $t(){try{i.compressedTexImage2D(...arguments)}catch(Y){_e("WebGLState:",Y)}}function I(){try{i.compressedTexImage3D(...arguments)}catch(Y){_e("WebGLState:",Y)}}function v(){try{i.texSubImage2D(...arguments)}catch(Y){_e("WebGLState:",Y)}}function Q(){try{i.texSubImage3D(...arguments)}catch(Y){_e("WebGLState:",Y)}}function st(){try{i.compressedTexSubImage2D(...arguments)}catch(Y){_e("WebGLState:",Y)}}function ct(){try{i.compressedTexSubImage3D(...arguments)}catch(Y){_e("WebGLState:",Y)}}function Ct(){try{i.texStorage2D(...arguments)}catch(Y){_e("WebGLState:",Y)}}function Rt(){try{i.texStorage3D(...arguments)}catch(Y){_e("WebGLState:",Y)}}function ut(){try{i.texImage2D(...arguments)}catch(Y){_e("WebGLState:",Y)}}function _t(){try{i.texImage3D(...arguments)}catch(Y){_e("WebGLState:",Y)}}function Dt(Y){return m[Y]!==void 0?m[Y]:i.getParameter(Y)}function re(Y,Pt){m[Y]!==Pt&&(i.pixelStorei(Y,Pt),m[Y]=Pt)}function Ot(Y){Fe.equals(Y)===!1&&(i.scissor(Y.x,Y.y,Y.z,Y.w),Fe.copy(Y))}function Nt(Y){Me.equals(Y)===!1&&(i.viewport(Y.x,Y.y,Y.z,Y.w),Me.copy(Y))}function Qt(Y,Pt){let pt=c.get(Pt);pt===void 0&&(pt=new WeakMap,c.set(Pt,pt));let Ut=pt.get(Y);Ut===void 0&&(Ut=i.getUniformBlockIndex(Pt,Y.name),pt.set(Y,Ut))}function ae(Y,Pt){let Ut=c.get(Pt).get(Y);l.get(Pt)!==Ut&&(i.uniformBlockBinding(Pt,Ut,Y.__bindingPointIndex),l.set(Pt,Ut))}function xe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},m={},vt=null,gt={},d={},g=new WeakMap,x=[],A=null,p=!1,f=null,N=null,F=null,T=null,b=null,D=null,z=null,M=new pe(0,0,0),L=0,k=!1,$=null,et=null,it=null,q=null,j=null,Fe.set(0,0,i.canvas.width,i.canvas.height),Me.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:mt,disable:Tt,bindFramebuffer:se,drawBuffers:zt,useProgram:de,setBlending:Mt,setMaterial:H,setFlipSided:wt,setCullFace:It,setLineWidth:ce,setPolygonOffset:Zt,setScissorTest:ue,activeTexture:he,bindTexture:W,unbindTexture:Ae,compressedTexImage2D:$t,compressedTexImage3D:I,texImage2D:ut,texImage3D:_t,pixelStorei:re,getParameter:Dt,updateUBOMapping:Qt,uniformBlockBinding:ae,texStorage2D:Ct,texStorage3D:Rt,texSubImage2D:v,texSubImage3D:Q,compressedTexSubImage2D:st,compressedTexSubImage3D:ct,scissor:Ot,viewport:Nt,reset:xe}}function CS(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Lt,h=new WeakMap,m=new Set,d,g=new WeakMap,x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(I,v){return x?new OffscreenCanvas(I,v):Da("canvas")}function p(I,v,Q){let st=1,ct=$t(I);if((ct.width>Q||ct.height>Q)&&(st=Q/Math.max(ct.width,ct.height)),st<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let Ct=Math.floor(st*ct.width),Rt=Math.floor(st*ct.height);d===void 0&&(d=A(Ct,Rt));let ut=v?A(Ct,Rt):d;return ut.width=Ct,ut.height=Rt,ut.getContext("2d").drawImage(I,0,0,Ct,Rt),me("WebGLRenderer: Texture has been resized from ("+ct.width+"x"+ct.height+") to ("+Ct+"x"+Rt+")."),ut}else return"data"in I&&me("WebGLRenderer: Image in DataTexture is too big ("+ct.width+"x"+ct.height+")."),I;return I}function f(I){return I.generateMipmaps}function N(I){i.generateMipmap(I)}function F(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(I,v,Q,st,ct,Ct=!1){if(I!==null){if(i[I]!==void 0)return i[I];me("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Rt;st&&(Rt=t.get("EXT_texture_norm16"),Rt||me("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ut=v;if(v===i.RED&&(Q===i.FLOAT&&(ut=i.R32F),Q===i.HALF_FLOAT&&(ut=i.R16F),Q===i.UNSIGNED_BYTE&&(ut=i.R8),Q===i.UNSIGNED_SHORT&&Rt&&(ut=Rt.R16_EXT),Q===i.SHORT&&Rt&&(ut=Rt.R16_SNORM_EXT)),v===i.RED_INTEGER&&(Q===i.UNSIGNED_BYTE&&(ut=i.R8UI),Q===i.UNSIGNED_SHORT&&(ut=i.R16UI),Q===i.UNSIGNED_INT&&(ut=i.R32UI),Q===i.BYTE&&(ut=i.R8I),Q===i.SHORT&&(ut=i.R16I),Q===i.INT&&(ut=i.R32I)),v===i.RG&&(Q===i.FLOAT&&(ut=i.RG32F),Q===i.HALF_FLOAT&&(ut=i.RG16F),Q===i.UNSIGNED_BYTE&&(ut=i.RG8),Q===i.UNSIGNED_SHORT&&Rt&&(ut=Rt.RG16_EXT),Q===i.SHORT&&Rt&&(ut=Rt.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(Q===i.UNSIGNED_BYTE&&(ut=i.RG8UI),Q===i.UNSIGNED_SHORT&&(ut=i.RG16UI),Q===i.UNSIGNED_INT&&(ut=i.RG32UI),Q===i.BYTE&&(ut=i.RG8I),Q===i.SHORT&&(ut=i.RG16I),Q===i.INT&&(ut=i.RG32I)),v===i.RGB_INTEGER&&(Q===i.UNSIGNED_BYTE&&(ut=i.RGB8UI),Q===i.UNSIGNED_SHORT&&(ut=i.RGB16UI),Q===i.UNSIGNED_INT&&(ut=i.RGB32UI),Q===i.BYTE&&(ut=i.RGB8I),Q===i.SHORT&&(ut=i.RGB16I),Q===i.INT&&(ut=i.RGB32I)),v===i.RGBA_INTEGER&&(Q===i.UNSIGNED_BYTE&&(ut=i.RGBA8UI),Q===i.UNSIGNED_SHORT&&(ut=i.RGBA16UI),Q===i.UNSIGNED_INT&&(ut=i.RGBA32UI),Q===i.BYTE&&(ut=i.RGBA8I),Q===i.SHORT&&(ut=i.RGBA16I),Q===i.INT&&(ut=i.RGBA32I)),v===i.RGB&&(Q===i.UNSIGNED_SHORT&&Rt&&(ut=Rt.RGB16_EXT),Q===i.SHORT&&Rt&&(ut=Rt.RGB16_SNORM_EXT),Q===i.UNSIGNED_INT_5_9_9_9_REV&&(ut=i.RGB9_E5),Q===i.UNSIGNED_INT_10F_11F_11F_REV&&(ut=i.R11F_G11F_B10F)),v===i.RGBA){let _t=Ct?La:Le.getTransfer(ct);Q===i.FLOAT&&(ut=i.RGBA32F),Q===i.HALF_FLOAT&&(ut=i.RGBA16F),Q===i.UNSIGNED_BYTE&&(ut=_t===Ge?i.SRGB8_ALPHA8:i.RGBA8),Q===i.UNSIGNED_SHORT&&Rt&&(ut=Rt.RGBA16_EXT),Q===i.SHORT&&Rt&&(ut=Rt.RGBA16_SNORM_EXT),Q===i.UNSIGNED_SHORT_4_4_4_4&&(ut=i.RGBA4),Q===i.UNSIGNED_SHORT_5_5_5_1&&(ut=i.RGB5_A1)}return(ut===i.R16F||ut===i.R32F||ut===i.RG16F||ut===i.RG32F||ut===i.RGBA16F||ut===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ut}function b(I,v){let Q;return I?v===null||v===Ri||v===Xr?Q=i.DEPTH24_STENCIL8:v===di?Q=i.DEPTH32F_STENCIL8:v===$r&&(Q=i.DEPTH24_STENCIL8,me("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Ri||v===Xr?Q=i.DEPTH_COMPONENT24:v===di?Q=i.DEPTH_COMPONENT32F:v===$r&&(Q=i.DEPTH_COMPONENT16),Q}function D(I,v){return f(I)===!0||I.isFramebufferTexture&&I.minFilter!==vn&&I.minFilter!==Tn?Math.log2(Math.max(v.width,v.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?v.mipmaps.length:1}function z(I){let v=I.target;v.removeEventListener("dispose",z),L(v),v.isVideoTexture&&h.delete(v),v.isHTMLTexture&&m.delete(v)}function M(I){let v=I.target;v.removeEventListener("dispose",M),$(v)}function L(I){let v=n.get(I);if(v.__webglInit===void 0)return;let Q=I.source,st=g.get(Q);if(st){let ct=st[v.__cacheKey];ct.usedTimes--,ct.usedTimes===0&&k(I),Object.keys(st).length===0&&g.delete(Q)}n.remove(I)}function k(I){let v=n.get(I);i.deleteTexture(v.__webglTexture);let Q=I.source,st=g.get(Q);delete st[v.__cacheKey],a.memory.textures--}function $(I){let v=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let st=0;st<6;st++){if(Array.isArray(v.__webglFramebuffer[st]))for(let ct=0;ct<v.__webglFramebuffer[st].length;ct++)i.deleteFramebuffer(v.__webglFramebuffer[st][ct]);else i.deleteFramebuffer(v.__webglFramebuffer[st]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[st])}else{if(Array.isArray(v.__webglFramebuffer))for(let st=0;st<v.__webglFramebuffer.length;st++)i.deleteFramebuffer(v.__webglFramebuffer[st]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let st=0;st<v.__webglColorRenderbuffer.length;st++)v.__webglColorRenderbuffer[st]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[st]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let Q=I.textures;for(let st=0,ct=Q.length;st<ct;st++){let Ct=n.get(Q[st]);Ct.__webglTexture&&(i.deleteTexture(Ct.__webglTexture),a.memory.textures--),n.remove(Q[st])}n.remove(I)}let et=0;function it(){et=0}function q(){return et}function j(I){et=I}function ot(){let I=et;return I>=s.maxTextures&&me("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+s.maxTextures),et+=1,I}function lt(I){let v=[];return v.push(I.wrapS),v.push(I.wrapT),v.push(I.wrapR||0),v.push(I.magFilter),v.push(I.minFilter),v.push(I.anisotropy),v.push(I.internalFormat),v.push(I.format),v.push(I.type),v.push(I.generateMipmaps),v.push(I.premultiplyAlpha),v.push(I.flipY),v.push(I.unpackAlignment),v.push(I.colorSpace),v.join()}function bt(I,v){let Q=n.get(I);if(I.isVideoTexture&&W(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&Q.__version!==I.version){let st=I.image;if(st===null)me("WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)me("WebGLRenderer: Texture marked for update but image is incomplete");else{Tt(Q,I,v);return}}else I.isExternalTexture&&(Q.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,Q.__webglTexture,i.TEXTURE0+v)}function ht(I,v){let Q=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&Q.__version!==I.version){Tt(Q,I,v);return}else I.isExternalTexture&&(Q.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,Q.__webglTexture,i.TEXTURE0+v)}function vt(I,v){let Q=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&Q.__version!==I.version){Tt(Q,I,v);return}e.bindTexture(i.TEXTURE_3D,Q.__webglTexture,i.TEXTURE0+v)}function gt(I,v){let Q=n.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&Q.__version!==I.version){se(Q,I,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture,i.TEXTURE0+v)}let kt={[Al]:i.REPEAT,[Bi]:i.CLAMP_TO_EDGE,[Cl]:i.MIRRORED_REPEAT},Wt={[vn]:i.NEAREST,[xp]:i.NEAREST_MIPMAP_NEAREST,[po]:i.NEAREST_MIPMAP_LINEAR,[Tn]:i.LINEAR,[hc]:i.LINEAR_MIPMAP_NEAREST,[Rs]:i.LINEAR_MIPMAP_LINEAR},Fe={[bp]:i.NEVER,[Ap]:i.ALWAYS,[Mp]:i.LESS,[Zc]:i.LEQUAL,[wp]:i.EQUAL,[Jc]:i.GEQUAL,[Ep]:i.GREATER,[Tp]:i.NOTEQUAL};function Me(I,v){if(v.type===di&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Tn||v.magFilter===hc||v.magFilter===po||v.magFilter===Rs||v.minFilter===Tn||v.minFilter===hc||v.minFilter===po||v.minFilter===Rs)&&me("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,kt[v.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,kt[v.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,kt[v.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,Wt[v.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,Wt[v.minFilter]),v.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,Fe[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===vn||v.minFilter!==po&&v.minFilter!==Rs||v.type===di&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let Q=t.get("EXT_texture_filter_anisotropic");i.texParameterf(I,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Ie(I,v){let Q=!1;I.__webglInit===void 0&&(I.__webglInit=!0,v.addEventListener("dispose",z));let st=v.source,ct=g.get(st);ct===void 0&&(ct={},g.set(st,ct));let Ct=lt(v);if(Ct!==I.__cacheKey){ct[Ct]===void 0&&(ct[Ct]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,Q=!0),ct[Ct].usedTimes++;let Rt=ct[I.__cacheKey];Rt!==void 0&&(ct[I.__cacheKey].usedTimes--,Rt.usedTimes===0&&k(v)),I.__cacheKey=Ct,I.__webglTexture=ct[Ct].texture}return Q}function dt(I,v,Q){return Math.floor(Math.floor(I/Q)/v)}function mt(I,v,Q,st){let Ct=I.updateRanges;if(Ct.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,Q,st,v.data);else{Ct.sort((re,Ot)=>re.start-Ot.start);let Rt=0;for(let re=1;re<Ct.length;re++){let Ot=Ct[Rt],Nt=Ct[re],Qt=Ot.start+Ot.count,ae=dt(Nt.start,v.width,4),xe=dt(Ot.start,v.width,4);Nt.start<=Qt+1&&ae===xe&&dt(Nt.start+Nt.count-1,v.width,4)===ae?Ot.count=Math.max(Ot.count,Nt.start+Nt.count-Ot.start):(++Rt,Ct[Rt]=Nt)}Ct.length=Rt+1;let ut=e.getParameter(i.UNPACK_ROW_LENGTH),_t=e.getParameter(i.UNPACK_SKIP_PIXELS),Dt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let re=0,Ot=Ct.length;re<Ot;re++){let Nt=Ct[re],Qt=Math.floor(Nt.start/4),ae=Math.ceil(Nt.count/4),xe=Qt%v.width,Y=Math.floor(Qt/v.width),Pt=ae,pt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,xe),e.pixelStorei(i.UNPACK_SKIP_ROWS,Y),e.texSubImage2D(i.TEXTURE_2D,0,xe,Y,Pt,pt,Q,st,v.data)}I.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,ut),e.pixelStorei(i.UNPACK_SKIP_PIXELS,_t),e.pixelStorei(i.UNPACK_SKIP_ROWS,Dt)}}function Tt(I,v,Q){let st=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(st=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(st=i.TEXTURE_3D);let ct=Ie(I,v),Ct=v.source;e.bindTexture(st,I.__webglTexture,i.TEXTURE0+Q);let Rt=n.get(Ct);if(Ct.version!==Rt.__version||ct===!0){if(e.activeTexture(i.TEXTURE0+Q),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let pt=Le.getPrimaries(Le.workingColorSpace),Ut=v.colorSpace===hs?null:Le.getPrimaries(v.colorSpace),Vt=v.colorSpace===hs||pt===Ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Vt)}e.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let _t=p(v.image,!1,s.maxTextureSize);_t=Ae(v,_t);let Dt=r.convert(v.format,v.colorSpace),re=r.convert(v.type),Ot=T(v.internalFormat,Dt,re,v.normalized,v.colorSpace,v.isVideoTexture);Me(st,v);let Nt,Qt=v.mipmaps,ae=v.isVideoTexture!==!0,xe=Rt.__version===void 0||ct===!0,Y=Ct.dataReady,Pt=D(v,_t);if(v.isDepthTexture)Ot=b(v.format===Is,v.type),xe&&(ae?e.texStorage2D(i.TEXTURE_2D,1,Ot,_t.width,_t.height):e.texImage2D(i.TEXTURE_2D,0,Ot,_t.width,_t.height,0,Dt,re,null));else if(v.isDataTexture)if(Qt.length>0){ae&&xe&&e.texStorage2D(i.TEXTURE_2D,Pt,Ot,Qt[0].width,Qt[0].height);for(let pt=0,Ut=Qt.length;pt<Ut;pt++)Nt=Qt[pt],ae?Y&&e.texSubImage2D(i.TEXTURE_2D,pt,0,0,Nt.width,Nt.height,Dt,re,Nt.data):e.texImage2D(i.TEXTURE_2D,pt,Ot,Nt.width,Nt.height,0,Dt,re,Nt.data);v.generateMipmaps=!1}else ae?(xe&&e.texStorage2D(i.TEXTURE_2D,Pt,Ot,_t.width,_t.height),Y&&mt(v,_t,Dt,re)):e.texImage2D(i.TEXTURE_2D,0,Ot,_t.width,_t.height,0,Dt,re,_t.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){ae&&xe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Pt,Ot,Qt[0].width,Qt[0].height,_t.depth);for(let pt=0,Ut=Qt.length;pt<Ut;pt++)if(Nt=Qt[pt],v.format!==fi)if(Dt!==null)if(ae){if(Y)if(v.layerUpdates.size>0){let Vt=Qu(Nt.width,Nt.height,v.format,v.type);for(let xt of v.layerUpdates){let Jt=Nt.data.subarray(xt*Vt/Nt.data.BYTES_PER_ELEMENT,(xt+1)*Vt/Nt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,pt,0,0,xt,Nt.width,Nt.height,1,Dt,Jt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,pt,0,0,0,Nt.width,Nt.height,_t.depth,Dt,Nt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,pt,Ot,Nt.width,Nt.height,_t.depth,0,Nt.data,0,0);else me("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ae?Y&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,pt,0,0,0,Nt.width,Nt.height,_t.depth,Dt,re,Nt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,pt,Ot,Nt.width,Nt.height,_t.depth,0,Dt,re,Nt.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{ae&&xe&&e.texStorage2D(i.TEXTURE_2D,Pt,Ot,Qt[0].width,Qt[0].height);for(let pt=0,Ut=Qt.length;pt<Ut;pt++)Nt=Qt[pt],v.format!==fi?Dt!==null?ae?Y&&e.compressedTexSubImage2D(i.TEXTURE_2D,pt,0,0,Nt.width,Nt.height,Dt,Nt.data):e.compressedTexImage2D(i.TEXTURE_2D,pt,Ot,Nt.width,Nt.height,0,Nt.data):me("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ae?Y&&e.texSubImage2D(i.TEXTURE_2D,pt,0,0,Nt.width,Nt.height,Dt,re,Nt.data):e.texImage2D(i.TEXTURE_2D,pt,Ot,Nt.width,Nt.height,0,Dt,re,Nt.data)}else if(v.isDataArrayTexture)if(ae){if(xe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Pt,Ot,_t.width,_t.height,_t.depth),Y)if(v.layerUpdates.size>0){let pt=Qu(_t.width,_t.height,v.format,v.type);for(let Ut of v.layerUpdates){let Vt=_t.data.subarray(Ut*pt/_t.data.BYTES_PER_ELEMENT,(Ut+1)*pt/_t.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ut,_t.width,_t.height,1,Dt,re,Vt)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,_t.width,_t.height,_t.depth,Dt,re,_t.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ot,_t.width,_t.height,_t.depth,0,Dt,re,_t.data);else if(v.isData3DTexture)ae?(xe&&e.texStorage3D(i.TEXTURE_3D,Pt,Ot,_t.width,_t.height,_t.depth),Y&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,_t.width,_t.height,_t.depth,Dt,re,_t.data)):e.texImage3D(i.TEXTURE_3D,0,Ot,_t.width,_t.height,_t.depth,0,Dt,re,_t.data);else if(v.isFramebufferTexture){if(xe)if(ae)e.texStorage2D(i.TEXTURE_2D,Pt,Ot,_t.width,_t.height);else{let pt=_t.width,Ut=_t.height;for(let Vt=0;Vt<Pt;Vt++)e.texImage2D(i.TEXTURE_2D,Vt,Ot,pt,Ut,0,Dt,re,null),pt>>=1,Ut>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){let pt=i.canvas;if(pt.hasAttribute("layoutsubtree")||pt.setAttribute("layoutsubtree","true"),_t.parentNode!==pt){pt.appendChild(_t),m.add(v),pt.onpaint=Ut=>{let Vt=Ut.changedElements;for(let xt of m)Vt.includes(xt.image)&&(xt.needsUpdate=!0)},pt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,_t);else{let Vt=i.RGBA,xt=i.RGBA,Jt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Vt,xt,Jt,_t)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Qt.length>0){if(ae&&xe){let pt=$t(Qt[0]);e.texStorage2D(i.TEXTURE_2D,Pt,Ot,pt.width,pt.height)}for(let pt=0,Ut=Qt.length;pt<Ut;pt++)Nt=Qt[pt],ae?Y&&e.texSubImage2D(i.TEXTURE_2D,pt,0,0,Dt,re,Nt):e.texImage2D(i.TEXTURE_2D,pt,Ot,Dt,re,Nt);v.generateMipmaps=!1}else if(ae){if(xe){let pt=$t(_t);e.texStorage2D(i.TEXTURE_2D,Pt,Ot,pt.width,pt.height)}Y&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Dt,re,_t)}else e.texImage2D(i.TEXTURE_2D,0,Ot,Dt,re,_t);f(v)&&N(st),Rt.__version=Ct.version,v.onUpdate&&v.onUpdate(v)}I.__version=v.version}function se(I,v,Q){if(v.image.length!==6)return;let st=Ie(I,v),ct=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+Q);let Ct=n.get(ct);if(ct.version!==Ct.__version||st===!0){e.activeTexture(i.TEXTURE0+Q);let Rt=Le.getPrimaries(Le.workingColorSpace),ut=v.colorSpace===hs?null:Le.getPrimaries(v.colorSpace),_t=v.colorSpace===hs||Rt===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);let Dt=v.isCompressedTexture||v.image[0].isCompressedTexture,re=v.image[0]&&v.image[0].isDataTexture,Ot=[];for(let xt=0;xt<6;xt++)!Dt&&!re?Ot[xt]=p(v.image[xt],!0,s.maxCubemapSize):Ot[xt]=re?v.image[xt].image:v.image[xt],Ot[xt]=Ae(v,Ot[xt]);let Nt=Ot[0],Qt=r.convert(v.format,v.colorSpace),ae=r.convert(v.type),xe=T(v.internalFormat,Qt,ae,v.normalized,v.colorSpace),Y=v.isVideoTexture!==!0,Pt=Ct.__version===void 0||st===!0,pt=ct.dataReady,Ut=D(v,Nt);Me(i.TEXTURE_CUBE_MAP,v);let Vt;if(Dt){Y&&Pt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Ut,xe,Nt.width,Nt.height);for(let xt=0;xt<6;xt++){Vt=Ot[xt].mipmaps;for(let Jt=0;Jt<Vt.length;Jt++){let Xt=Vt[Jt];v.format!==fi?Qt!==null?Y?pt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Jt,0,0,Xt.width,Xt.height,Qt,Xt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Jt,xe,Xt.width,Xt.height,0,Xt.data):me("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Jt,0,0,Xt.width,Xt.height,Qt,ae,Xt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Jt,xe,Xt.width,Xt.height,0,Qt,ae,Xt.data)}}}else{if(Vt=v.mipmaps,Y&&Pt){Vt.length>0&&Ut++;let xt=$t(Ot[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Ut,xe,xt.width,xt.height)}for(let xt=0;xt<6;xt++)if(re){Y?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Ot[xt].width,Ot[xt].height,Qt,ae,Ot[xt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,xe,Ot[xt].width,Ot[xt].height,0,Qt,ae,Ot[xt].data);for(let Jt=0;Jt<Vt.length;Jt++){let ze=Vt[Jt].image[xt].image;Y?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Jt+1,0,0,ze.width,ze.height,Qt,ae,ze.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Jt+1,xe,ze.width,ze.height,0,Qt,ae,ze.data)}}else{Y?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Qt,ae,Ot[xt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,xe,Qt,ae,Ot[xt]);for(let Jt=0;Jt<Vt.length;Jt++){let Xt=Vt[Jt];Y?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Jt+1,0,0,Qt,ae,Xt.image[xt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Jt+1,xe,Qt,ae,Xt.image[xt])}}}f(v)&&N(i.TEXTURE_CUBE_MAP),Ct.__version=ct.version,v.onUpdate&&v.onUpdate(v)}I.__version=v.version}function zt(I,v,Q,st,ct,Ct){let Rt=r.convert(Q.format,Q.colorSpace),ut=r.convert(Q.type),_t=T(Q.internalFormat,Rt,ut,Q.normalized,Q.colorSpace),Dt=n.get(v),re=n.get(Q);if(re.__renderTarget=v,!Dt.__hasExternalTextures){let Ot=Math.max(1,v.width>>Ct),Nt=Math.max(1,v.height>>Ct);ct===i.TEXTURE_3D||ct===i.TEXTURE_2D_ARRAY?e.texImage3D(ct,Ct,_t,Ot,Nt,v.depth,0,Rt,ut,null):e.texImage2D(ct,Ct,_t,Ot,Nt,0,Rt,ut,null)}e.bindFramebuffer(i.FRAMEBUFFER,I),he(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,st,ct,re.__webglTexture,0,ue(v)):(ct===i.TEXTURE_2D||ct>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ct<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,st,ct,re.__webglTexture,Ct),e.bindFramebuffer(i.FRAMEBUFFER,null)}function de(I,v,Q){if(i.bindRenderbuffer(i.RENDERBUFFER,I),v.depthBuffer){let st=v.depthTexture,ct=st&&st.isDepthTexture?st.type:null,Ct=b(v.stencilBuffer,ct),Rt=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;he(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue(v),Ct,v.width,v.height):Q?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue(v),Ct,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Ct,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Rt,i.RENDERBUFFER,I)}else{let st=v.textures;for(let ct=0;ct<st.length;ct++){let Ct=st[ct],Rt=r.convert(Ct.format,Ct.colorSpace),ut=r.convert(Ct.type),_t=T(Ct.internalFormat,Rt,ut,Ct.normalized,Ct.colorSpace);he(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue(v),_t,v.width,v.height):Q?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue(v),_t,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,_t,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function fe(I,v,Q){let st=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,I),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ct=n.get(v.depthTexture);if(ct.__renderTarget=v,(!ct.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),st){if(ct.__webglInit===void 0&&(ct.__webglInit=!0,v.depthTexture.addEventListener("dispose",z)),ct.__webglTexture===void 0){ct.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,ct.__webglTexture),Me(i.TEXTURE_CUBE_MAP,v.depthTexture);let Dt=r.convert(v.depthTexture.format),re=r.convert(v.depthTexture.type),Ot;v.depthTexture.format===zi?Ot=i.DEPTH_COMPONENT24:v.depthTexture.format===Is&&(Ot=i.DEPTH24_STENCIL8);for(let Nt=0;Nt<6;Nt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,0,Ot,v.width,v.height,0,Dt,re,null)}}else bt(v.depthTexture,0);let Ct=ct.__webglTexture,Rt=ue(v),ut=st?i.TEXTURE_CUBE_MAP_POSITIVE_X+Q:i.TEXTURE_2D,_t=v.depthTexture.format===Is?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===zi)he(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,_t,ut,Ct,0,Rt):i.framebufferTexture2D(i.FRAMEBUFFER,_t,ut,Ct,0);else if(v.depthTexture.format===Is)he(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,_t,ut,Ct,0,Rt):i.framebufferTexture2D(i.FRAMEBUFFER,_t,ut,Ct,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function at(I){let v=n.get(I),Q=I.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==I.depthTexture){let st=I.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),st){let ct=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,st.removeEventListener("dispose",ct)};st.addEventListener("dispose",ct),v.__depthDisposeCallback=ct}v.__boundDepthTexture=st}if(I.depthTexture&&!v.__autoAllocateDepthBuffer)if(Q)for(let st=0;st<6;st++)fe(v.__webglFramebuffer[st],I,st);else{let st=I.texture.mipmaps;st&&st.length>0?fe(v.__webglFramebuffer[0],I,0):fe(v.__webglFramebuffer,I,0)}else if(Q){v.__webglDepthbuffer=[];for(let st=0;st<6;st++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[st]),v.__webglDepthbuffer[st]===void 0)v.__webglDepthbuffer[st]=i.createRenderbuffer(),de(v.__webglDepthbuffer[st],I,!1);else{let ct=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ct=v.__webglDepthbuffer[st];i.bindRenderbuffer(i.RENDERBUFFER,Ct),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,Ct)}}else{let st=I.texture.mipmaps;if(st&&st.length>0?e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),de(v.__webglDepthbuffer,I,!1);else{let ct=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ct=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Ct),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,Ct)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Mt(I,v,Q){let st=n.get(I);v!==void 0&&zt(st.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Q!==void 0&&at(I)}function H(I){let v=I.texture,Q=n.get(I),st=n.get(v);I.addEventListener("dispose",M);let ct=I.textures,Ct=I.isWebGLCubeRenderTarget===!0,Rt=ct.length>1;if(Rt||(st.__webglTexture===void 0&&(st.__webglTexture=i.createTexture()),st.__version=v.version,a.memory.textures++),Ct){Q.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(v.mipmaps&&v.mipmaps.length>0){Q.__webglFramebuffer[ut]=[];for(let _t=0;_t<v.mipmaps.length;_t++)Q.__webglFramebuffer[ut][_t]=i.createFramebuffer()}else Q.__webglFramebuffer[ut]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){Q.__webglFramebuffer=[];for(let ut=0;ut<v.mipmaps.length;ut++)Q.__webglFramebuffer[ut]=i.createFramebuffer()}else Q.__webglFramebuffer=i.createFramebuffer();if(Rt)for(let ut=0,_t=ct.length;ut<_t;ut++){let Dt=n.get(ct[ut]);Dt.__webglTexture===void 0&&(Dt.__webglTexture=i.createTexture(),a.memory.textures++)}if(I.samples>0&&he(I)===!1){Q.__webglMultisampledFramebuffer=i.createFramebuffer(),Q.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let ut=0;ut<ct.length;ut++){let _t=ct[ut];Q.__webglColorRenderbuffer[ut]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Q.__webglColorRenderbuffer[ut]);let Dt=r.convert(_t.format,_t.colorSpace),re=r.convert(_t.type),Ot=T(_t.internalFormat,Dt,re,_t.normalized,_t.colorSpace,I.isXRRenderTarget===!0),Nt=ue(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,Nt,Ot,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,Q.__webglColorRenderbuffer[ut])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(Q.__webglDepthRenderbuffer=i.createRenderbuffer(),de(Q.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Ct){e.bindTexture(i.TEXTURE_CUBE_MAP,st.__webglTexture),Me(i.TEXTURE_CUBE_MAP,v);for(let ut=0;ut<6;ut++)if(v.mipmaps&&v.mipmaps.length>0)for(let _t=0;_t<v.mipmaps.length;_t++)zt(Q.__webglFramebuffer[ut][_t],I,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,_t);else zt(Q.__webglFramebuffer[ut],I,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);f(v)&&N(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Rt){for(let ut=0,_t=ct.length;ut<_t;ut++){let Dt=ct[ut],re=n.get(Dt),Ot=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Ot=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Ot,re.__webglTexture),Me(Ot,Dt),zt(Q.__webglFramebuffer,I,Dt,i.COLOR_ATTACHMENT0+ut,Ot,0),f(Dt)&&N(Ot)}e.unbindTexture()}else{let ut=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ut=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ut,st.__webglTexture),Me(ut,v),v.mipmaps&&v.mipmaps.length>0)for(let _t=0;_t<v.mipmaps.length;_t++)zt(Q.__webglFramebuffer[_t],I,v,i.COLOR_ATTACHMENT0,ut,_t);else zt(Q.__webglFramebuffer,I,v,i.COLOR_ATTACHMENT0,ut,0);f(v)&&N(ut),e.unbindTexture()}I.depthBuffer&&at(I)}function wt(I){let v=I.textures;for(let Q=0,st=v.length;Q<st;Q++){let ct=v[Q];if(f(ct)){let Ct=F(I),Rt=n.get(ct).__webglTexture;e.bindTexture(Ct,Rt),N(Ct),e.unbindTexture()}}}let It=[],ce=[];function Zt(I){if(I.samples>0){if(he(I)===!1){let v=I.textures,Q=I.width,st=I.height,ct=i.COLOR_BUFFER_BIT,Ct=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Rt=n.get(I),ut=v.length>1;if(ut)for(let Dt=0;Dt<v.length;Dt++)e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer);let _t=I.texture.mipmaps;_t&&_t.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer);for(let Dt=0;Dt<v.length;Dt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ct|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ct|=i.STENCIL_BUFFER_BIT)),ut){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Rt.__webglColorRenderbuffer[Dt]);let re=n.get(v[Dt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,re,0)}i.blitFramebuffer(0,0,Q,st,0,0,Q,st,ct,i.NEAREST),l===!0&&(It.length=0,ce.length=0,It.push(i.COLOR_ATTACHMENT0+Dt),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&(It.push(Ct),ce.push(Ct),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ce)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,It))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ut)for(let Dt=0;Dt<v.length;Dt++){e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.RENDERBUFFER,Rt.__webglColorRenderbuffer[Dt]);let re=n.get(v[Dt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.TEXTURE_2D,re,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&l){let v=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function ue(I){return Math.min(s.maxSamples,I.samples)}function he(I){let v=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function W(I){let v=a.render.frame;h.get(I)!==v&&(h.set(I,v),I.update())}function Ae(I,v){let Q=I.colorSpace,st=I.format,ct=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||Q!==Pa&&Q!==hs&&(Le.getTransfer(Q)===Ge?(st!==fi||ct!==Kn)&&me("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):_e("WebGLTextures: Unsupported texture color space:",Q)),v}function $t(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=ot,this.resetTextureUnits=it,this.getTextureUnits=q,this.setTextureUnits=j,this.setTexture2D=bt,this.setTexture2DArray=ht,this.setTexture3D=vt,this.setTextureCube=gt,this.rebindTextures=Mt,this.setupRenderTarget=H,this.updateRenderTargetMipmap=wt,this.updateMultisampleRenderTarget=Zt,this.setupDepthRenderbuffer=at,this.setupFrameBufferTexture=zt,this.useMultisampledRTT=he,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function RS(i,t){function e(n,s=hs){let r,a=Le.getTransfer(s);if(n===Kn)return i.UNSIGNED_BYTE;if(n===dc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===fc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Vu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Hu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ku)return i.BYTE;if(n===zu)return i.SHORT;if(n===$r)return i.UNSIGNED_SHORT;if(n===uc)return i.INT;if(n===Ri)return i.UNSIGNED_INT;if(n===di)return i.FLOAT;if(n===Ii)return i.HALF_FLOAT;if(n===Gu)return i.ALPHA;if(n===Wu)return i.RGB;if(n===fi)return i.RGBA;if(n===zi)return i.DEPTH_COMPONENT;if(n===Is)return i.DEPTH_STENCIL;if(n===pc)return i.RED;if(n===mc)return i.RED_INTEGER;if(n===Ps)return i.RG;if(n===gc)return i.RG_INTEGER;if(n===_c)return i.RGBA_INTEGER;if(n===mo||n===go||n===_o||n===xo)if(a===Ge)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===mo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===go)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===_o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===xo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===mo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===go)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===_o)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===xo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===xc||n===vc||n===yc||n===Sc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===xc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===vc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===yc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Sc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===bc||n===Mc||n===wc||n===Ec||n===Tc||n===vo||n===Ac)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===bc||n===Mc)return a===Ge?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===wc)return a===Ge?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ec)return r.COMPRESSED_R11_EAC;if(n===Tc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===vo)return r.COMPRESSED_RG11_EAC;if(n===Ac)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Cc||n===Rc||n===Ic||n===Pc||n===Lc||n===Dc||n===Nc||n===Uc||n===Fc||n===Oc||n===Bc||n===kc||n===zc||n===Vc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Cc)return a===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Rc)return a===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ic)return a===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Pc)return a===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Lc)return a===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Dc)return a===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Nc)return a===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Uc)return a===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Fc)return a===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Oc)return a===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Bc)return a===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===kc)return a===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===zc)return a===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Vc)return a===Ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Hc||n===Gc||n===Wc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Hc)return a===Ge?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Gc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Wc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===$c||n===Xc||n===yo||n===qc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===$c)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Xc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===yo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===qc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Xr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var IS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,PS=`
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

}`,fd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Wa(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new bn({vertexShader:IS,fragmentShader:PS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Sn(new to(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},pd=class extends Vi{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,m=null,d=null,g=null,x=null,A=typeof XRWebGLBinding<"u",p=new fd,f={},N=e.getContextAttributes(),F=null,T=null,b=[],D=[],z=new Lt,M=null,L=null,k=new Dn;k.viewport=new We;let $=new Dn;$.viewport=new We;let et=[k,$],it=new ac,q=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(dt){let mt=b[dt];return mt===void 0&&(mt=new Fr,b[dt]=mt),mt.getTargetRaySpace()},this.getControllerGrip=function(dt){let mt=b[dt];return mt===void 0&&(mt=new Fr,b[dt]=mt),mt.getGripSpace()},this.getHand=function(dt){let mt=b[dt];return mt===void 0&&(mt=new Fr,b[dt]=mt),mt.getHandSpace()};function ot(dt){let mt=D.indexOf(dt.inputSource);if(mt===-1)return;let Tt=b[mt];Tt!==void 0&&(Tt.update(dt.inputSource,dt.frame,c||a),Tt.dispatchEvent({type:dt.type,data:dt.inputSource}))}function lt(){s.removeEventListener("select",ot),s.removeEventListener("selectstart",ot),s.removeEventListener("selectend",ot),s.removeEventListener("squeeze",ot),s.removeEventListener("squeezestart",ot),s.removeEventListener("squeezeend",ot),s.removeEventListener("end",lt),s.removeEventListener("inputsourceschange",bt);for(let dt=0;dt<b.length;dt++){let mt=D[dt];mt!==null&&(D[dt]=null,b[dt].disconnect(mt))}q=null,j=null,p.reset();for(let dt in f)delete f[dt];if(t.setRenderTarget(F),g=null,d=null,m=null,s=null,T=null,Ie.stop(),n.isPresenting=!1,t.setPixelRatio(M),t.setSize(z.width,z.height,!1),L!==null){let dt=L.camera;dt.fov=L.fov,dt.zoom=L.zoom,dt.updateProjectionMatrix(),L=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(dt){r=dt,n.isPresenting===!0&&me("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(dt){o=dt,n.isPresenting===!0&&me("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(dt){c=dt},this.getBaseLayer=function(){return d!==null?d:g},this.getBinding=function(){return m===null&&A&&(m=new XRWebGLBinding(s,e)),m},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(dt){if(s=dt,s!==null){if(F=t.getRenderTarget(),s.addEventListener("select",ot),s.addEventListener("selectstart",ot),s.addEventListener("selectend",ot),s.addEventListener("squeeze",ot),s.addEventListener("squeezestart",ot),s.addEventListener("squeezeend",ot),s.addEventListener("end",lt),s.addEventListener("inputsourceschange",bt),N.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(z),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let Tt=null,se=null,zt=null;N.depth&&(zt=N.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Tt=N.stencil?Is:zi,se=N.stencil?Xr:Ri);let de={colorFormat:e.RGBA8,depthFormat:zt,scaleFactor:r};m=this.getBinding(),d=m.createProjectionLayer(de),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),T=new Zn(d.textureWidth,d.textureHeight,{format:fi,type:Kn,depthTexture:new bs(d.textureWidth,d.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,Tt),stencilBuffer:N.stencil,colorSpace:t.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Tt={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:r};g=new XRWebGLLayer(s,e,Tt),s.updateRenderState({baseLayer:g}),t.setPixelRatio(1),t.setSize(g.framebufferWidth,g.framebufferHeight,!1),T=new Zn(g.framebufferWidth,g.framebufferHeight,{format:fi,type:Kn,colorSpace:t.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ie.setContext(s),Ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function bt(dt){for(let mt=0;mt<dt.removed.length;mt++){let Tt=dt.removed[mt],se=D.indexOf(Tt);se>=0&&(D[se]=null,b[se].disconnect(Tt))}for(let mt=0;mt<dt.added.length;mt++){let Tt=dt.added[mt],se=D.indexOf(Tt);if(se===-1){for(let de=0;de<b.length;de++)if(de>=D.length){D.push(Tt),se=de;break}else if(D[de]===null){D[de]=Tt,se=de;break}if(se===-1)break}let zt=b[se];zt&&zt.connect(Tt)}}let ht=new G,vt=new G;function gt(dt,mt,Tt){ht.setFromMatrixPosition(mt.matrixWorld),vt.setFromMatrixPosition(Tt.matrixWorld);let se=ht.distanceTo(vt),zt=mt.projectionMatrix.elements,de=Tt.projectionMatrix.elements,fe=zt[14]/(zt[10]-1),at=zt[14]/(zt[10]+1),Mt=(zt[9]+1)/zt[5],H=(zt[9]-1)/zt[5],wt=(zt[8]-1)/zt[0],It=(de[8]+1)/de[0],ce=fe*wt,Zt=fe*It,ue=se/(-wt+It),he=ue*-wt;if(mt.matrixWorld.decompose(dt.position,dt.quaternion,dt.scale),dt.translateX(he),dt.translateZ(ue),dt.matrixWorld.compose(dt.position,dt.quaternion,dt.scale),dt.matrixWorldInverse.copy(dt.matrixWorld).invert(),zt[10]===-1)dt.projectionMatrix.copy(mt.projectionMatrix),dt.projectionMatrixInverse.copy(mt.projectionMatrixInverse);else{let W=fe+ue,Ae=at+ue,$t=ce-he,I=Zt+(se-he),v=Mt*at/Ae*W,Q=H*at/Ae*W;dt.projectionMatrix.makePerspective($t,I,v,Q,W,Ae),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert()}}function kt(dt,mt){mt===null?dt.matrixWorld.copy(dt.matrix):dt.matrixWorld.multiplyMatrices(mt.matrixWorld,dt.matrix),dt.matrixWorldInverse.copy(dt.matrixWorld).invert()}this.updateCamera=function(dt){if(s===null)return;let mt=dt.near,Tt=dt.far;p.texture!==null&&(p.depthNear>0&&(mt=p.depthNear),p.depthFar>0&&(Tt=p.depthFar)),it.near=$.near=k.near=mt,it.far=$.far=k.far=Tt,(q!==it.near||j!==it.far)&&(s.updateRenderState({depthNear:it.near,depthFar:it.far}),q=it.near,j=it.far),it.layers.mask=dt.layers.mask|6,k.layers.mask=it.layers.mask&-5,$.layers.mask=it.layers.mask&-3;let se=dt.parent,zt=it.cameras;kt(it,se);for(let de=0;de<zt.length;de++)kt(zt[de],se);zt.length===2?gt(it,k,$):it.projectionMatrix.copy(k.projectionMatrix),L===null&&dt.isPerspectiveCamera&&(L={camera:dt,fov:dt.fov,zoom:dt.zoom}),Wt(dt,it,se)};function Wt(dt,mt,Tt){Tt===null?dt.matrix.copy(mt.matrixWorld):(dt.matrix.copy(Tt.matrixWorld),dt.matrix.invert(),dt.matrix.multiply(mt.matrixWorld)),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.updateMatrixWorld(!0),dt.projectionMatrix.copy(mt.projectionMatrix),dt.projectionMatrixInverse.copy(mt.projectionMatrixInverse),dt.isPerspectiveCamera&&(dt.fov=Dr*2*Math.atan(1/dt.projectionMatrix.elements[5]),dt.zoom=1)}this.getCamera=function(){return it},this.getFoveation=function(){if(!(d===null&&g===null))return l},this.setFoveation=function(dt){l=dt,d!==null&&(d.fixedFoveation=dt),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=dt)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(it)},this.getCameraTexture=function(dt){return f[dt]};let Fe=null;function Me(dt,mt){if(h=mt.getViewerPose(c||a),x=mt,h!==null){let Tt=h.views;g!==null&&(t.setRenderTargetFramebuffer(T,g.framebuffer),t.setRenderTarget(T));let se=!1;Tt.length!==it.cameras.length&&(it.cameras.length=0,se=!0);for(let at=0;at<Tt.length;at++){let Mt=Tt[at],H=null;if(g!==null)H=g.getViewport(Mt);else{let It=m.getViewSubImage(d,Mt);H=It.viewport,at===0&&(t.setRenderTargetTextures(T,It.colorTexture,It.depthStencilTexture),t.setRenderTarget(T))}let wt=et[at];wt===void 0&&(wt=new Dn,wt.layers.enable(at),wt.viewport=new We,et[at]=wt),wt.matrix.fromArray(Mt.transform.matrix),wt.matrix.decompose(wt.position,wt.quaternion,wt.scale),wt.projectionMatrix.fromArray(Mt.projectionMatrix),wt.projectionMatrixInverse.copy(wt.projectionMatrix).invert(),wt.viewport.set(H.x,H.y,H.width,H.height),at===0&&(it.matrix.copy(wt.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale)),se===!0&&it.cameras.push(wt)}let zt=s.enabledFeatures;if(zt&&zt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&A){m=n.getBinding();let at=m.getDepthInformation(Tt[0]);at&&at.isValid&&at.texture&&p.init(at,s.renderState)}if(zt&&zt.includes("camera-access")&&A){t.state.unbindTexture(),m=n.getBinding();for(let at=0;at<Tt.length;at++){let Mt=Tt[at].camera;if(Mt){let H=f[Mt];H||(H=new Wa,f[Mt]=H);let wt=m.getCameraImage(Mt);H.sourceTexture=wt}}}}for(let Tt=0;Tt<b.length;Tt++){let se=D[Tt],zt=b[Tt];se!==null&&zt!==void 0&&zt.update(se,mt,c||a)}Fe&&Fe(dt,mt),mt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:mt}),x=null}let Ie=new am;Ie.setAnimationLoop(Me),this.setAnimationLoop=function(dt){Fe=dt},this.dispose=function(){}}},LS=new Be,dm=new Se;dm.set(-1,0,0,0,1,0,0,0,1);function DS(i,t){function e(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,Ju(i)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function s(p,f,N,F,T){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(p,f):f.isMeshLambertMaterial?(r(p,f),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(p,f),m(p,f)):f.isMeshPhongMaterial?(r(p,f),h(p,f),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(p,f),d(p,f),f.isMeshPhysicalMaterial&&g(p,f,T)):f.isMeshMatcapMaterial?(r(p,f),x(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),A(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?l(p,f,N,F):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,e(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Hn&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,e(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Hn&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,e(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,e(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let N=t.get(f),F=N.envMap,T=N.envMapRotation;F&&(p.envMap.value=F,p.envMapRotation.value.setFromMatrix4(LS.makeRotationFromEuler(T)).transpose(),F.isCubeTexture&&F.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(dm),p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,N,F){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*N,p.scale.value=F*.5,f.map&&(p.map.value=f.map,e(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function h(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function m(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function g(p,f,N){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Hn&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.retroreflectivity>0&&(p.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=N.texture,p.transmissionSamplerSize.value.set(N.width,N.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,f){f.matcap&&(p.matcap.value=f.matcap)}function A(p,f){let N=t.get(f).light;p.referencePosition.value.setFromMatrixPosition(N.matrixWorld),p.nearDistance.value=N.shadow.camera.near,p.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function NS(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,b){let D=b.program;n.uniformBlockBinding(T,D)}function c(T,b){let D=s[T.id];D===void 0&&(p(T),D=h(T),s[T.id]=D,T.addEventListener("dispose",N));let z=b.program;n.updateUBOMapping(T,z);let M=t.render.frame;r[T.id]!==M&&(d(T),r[T.id]=M)}function h(T){let b=m();T.__bindingPointIndex=b;let D=i.createBuffer(),z=T.__size,M=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,D),i.bufferData(i.UNIFORM_BUFFER,z,M),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,D),D}function m(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return _e("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){let b=s[T.id],D=T.uniforms,z=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let M=0,L=D.length;M<L;M++){let k=D[M];if(Array.isArray(k))for(let $=0,et=k.length;$<et;$++)g(k[$],M,$,z);else g(k,M,0,z)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(T,b,D,z){if(A(T,b,D,z)===!0){let M=T.__offset,L=T.value;if(Array.isArray(L)){let k=0;for(let $=0;$<L.length;$++){let et=L[$],it=f(et);x(et,T.__data,k),typeof et!="number"&&typeof et!="boolean"&&!et.isMatrix3&&!ArrayBuffer.isView(et)&&(k+=it.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(L,T.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,M,T.__data)}}function x(T,b,D){typeof T=="number"||typeof T=="boolean"?b[0]=T:T.isMatrix3?(b[0]=T.elements[0],b[1]=T.elements[1],b[2]=T.elements[2],b[3]=0,b[4]=T.elements[3],b[5]=T.elements[4],b[6]=T.elements[5],b[7]=0,b[8]=T.elements[6],b[9]=T.elements[7],b[10]=T.elements[8],b[11]=0):ArrayBuffer.isView(T)?b.set(new T.constructor(T.buffer,T.byteOffset,b.length)):T.toArray(b,D)}function A(T,b,D,z){let M=T.value,L=b+"_"+D;if(z[L]===void 0)return typeof M=="number"||typeof M=="boolean"?z[L]=M:ArrayBuffer.isView(M)?z[L]=M.slice():z[L]=M.clone(),!0;{let k=z[L];if(typeof M=="number"||typeof M=="boolean"){if(k!==M)return z[L]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(k.equals(M)===!1)return k.copy(M),!0}}return!1}function p(T){let b=T.uniforms,D=0,z=16;for(let L=0,k=b.length;L<k;L++){let $=Array.isArray(b[L])?b[L]:[b[L]];for(let et=0,it=$.length;et<it;et++){let q=$[et],j=Array.isArray(q.value)?q.value:[q.value];for(let ot=0,lt=j.length;ot<lt;ot++){let bt=j[ot],ht=f(bt),vt=D%z,gt=vt%ht.boundary,kt=vt+gt;D+=gt,kt!==0&&z-kt<ht.storage&&(D+=z-kt),q.__data=new Float32Array(ht.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=D,D+=ht.storage}}}let M=D%z;return M>0&&(D+=z-M),T.__size=D,T.__cache={},this}function f(T){let b={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(b.boundary=4,b.storage=4):T.isVector2?(b.boundary=8,b.storage=8):T.isVector3||T.isColor?(b.boundary=16,b.storage=12):T.isVector4?(b.boundary=16,b.storage=16):T.isMatrix3?(b.boundary=48,b.storage=48):T.isMatrix4?(b.boundary=64,b.storage=64):T.isTexture?me("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(T)?(b.boundary=16,b.storage=T.byteLength):me("WebGLRenderer: Unsupported uniform value type.",T),b}function N(T){let b=T.target;b.removeEventListener("dispose",N);let D=a.indexOf(b.__bindingPointIndex);a.splice(D,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function F(){for(let T in s)i.deleteBuffer(s[T]);a=[],s={},r={}}return{bind:l,update:c,dispose:F}}var US=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Xi=null;function FS(){return Xi===null&&(Xi=new ka(US,16,16,Ps,Ii),Xi.name="DFG_LUT",Xi.minFilter=Tn,Xi.magFilter=Tn,Xi.wrapS=Bi,Xi.wrapT=Bi,Xi.generateMipmaps=!1,Xi.needsUpdate=!0),Xi}var eh=class{constructor(t={}){let{canvas:e=Cp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:d=!1,outputBufferType:g=Kn}=t;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=a;let A=g,p=new Set([_c,gc,mc]),f=new Set([Kn,Ri,$r,Xr,dc,fc]),N=new Uint32Array(4),F=new Int32Array(4),T=new G,b=null,D=null,z=[],M=[],L=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ci,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let k=this,$=!1,et=null,it=null,q=null,j=null;this._outputColorSpace=ri;let ot=0,lt=0,bt=null,ht=-1,vt=null,gt=new We,kt=new We,Wt=null,Fe=new pe(0),Me=0,Ie=e.width,dt=e.height,mt=1,Tt=null,se=null,zt=new We(0,0,Ie,dt),de=new We(0,0,Ie,dt),fe=!1,at=new Or,Mt=!1,H=!1,wt=new Be,It=new G,ce=new We,Zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ue=!1;function he(){return bt===null?mt:1}let W=n;function Ae(w,X){return e.getContext(w,X)}let $t,I,v,Q,st,ct,Ct,Rt,ut,_t,Dt,re,Ot,Nt,Qt,ae,xe,Y,Pt,pt,Ut,Vt,xt;try{let w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:m};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",ze,!1),e.addEventListener("webglcontextrestored",De,!1),e.addEventListener("webglcontextcreationerror",Fn,!1),W===null){let X="webgl2";if(W=Ae(X,w),W===null)throw Ae(X)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Jt()}catch(w){throw e.removeEventListener("webglcontextlost",ze,!1),e.removeEventListener("webglcontextrestored",De,!1),e.removeEventListener("webglcontextcreationerror",Fn,!1),_e("WebGLRenderer: "+w.message),w}function Jt(){$t=new Gv(W),$t.init(),Ut=new RS(W,$t),I=new Dv(W,$t,t,Ut),v=new AS(W,$t),I.reversedDepthBuffer&&d&&v.buffers.depth.setReversed(!0),it=W.createFramebuffer(),q=W.createFramebuffer(),j=W.createFramebuffer(),Q=new Xv(W),st=new fS,ct=new CS(W,$t,v,st,I,Ut,Q),Ct=new Hv(k),Rt=new Y0(W),Vt=new Pv(W,Rt),ut=new Wv(W,Rt,Q,Vt),_t=new Yv(W,ut,Rt,Vt,Q),Y=new qv(W,I,ct),Qt=new Nv(st),Dt=new dS(k,Ct,$t,I,Vt,Qt),re=new DS(k,st),Ot=new mS,Nt=new SS($t),xe=new Iv(k,Ct,v,_t,x,l),ae=new TS(k,_t,I),xt=new NS(W,Q,I,v),Pt=new Lv(W,$t,Q),pt=new $v(W,$t,Q),Q.programs=Dt.programs,k.capabilities=I,k.extensions=$t,k.properties=st,k.renderLists=Ot,k.shadowMap=ae,k.state=v,k.info=Q}A!==Kn&&(L=new Jv(A,e.width,e.height,o,s,r));let Xt=new pd(k,W);this.xr=Xt,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){let w=$t.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=$t.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return mt},this.setPixelRatio=function(w){w!==void 0&&(mt=w,this.setSize(Ie,dt,!1))},this.getSize=function(w){return w.set(Ie,dt)},this.setSize=function(w,X,nt=!0){if(Xt.isPresenting){me("WebGLRenderer: Can't change size while VR device is presenting.");return}Ie=w,dt=X,e.width=Math.floor(w*mt),e.height=Math.floor(X*mt),nt===!0&&(e.style.width=w+"px",e.style.height=X+"px"),L!==null&&L.setSize(e.width,e.height),this.setViewport(0,0,w,X)},this.getDrawingBufferSize=function(w){return w.set(Ie*mt,dt*mt).floor()},this.setDrawingBufferSize=function(w,X,nt){Ie=w,dt=X,mt=nt,e.width=Math.floor(w*nt),e.height=Math.floor(X*nt),this.setViewport(0,0,w,X)},this.setEffects=function(w){if(A===Kn){_e("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let X=0;X<w.length;X++)if(w[X].isOutputPass===!0){me("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(gt)},this.getViewport=function(w){return w.copy(zt)},this.setViewport=function(w,X,nt,V){w.isVector4?zt.set(w.x,w.y,w.z,w.w):zt.set(w,X,nt,V),v.viewport(gt.copy(zt).multiplyScalar(mt).round())},this.getScissor=function(w){return w.copy(de)},this.setScissor=function(w,X,nt,V){w.isVector4?de.set(w.x,w.y,w.z,w.w):de.set(w,X,nt,V),v.scissor(kt.copy(de).multiplyScalar(mt).round())},this.getScissorTest=function(){return fe},this.setScissorTest=function(w){v.setScissorTest(fe=w)},this.setOpaqueSort=function(w){Tt=w},this.setTransparentSort=function(w){se=w},this.getClearColor=function(w){return w.copy(xe.getClearColor())},this.setClearColor=function(){xe.setClearColor(...arguments)},this.getClearAlpha=function(){return xe.getClearAlpha()},this.setClearAlpha=function(){xe.setClearAlpha(...arguments)},this.clear=function(w=!0,X=!0,nt=!0){let V=0;if(w){let J=!1;if(bt!==null){let At=bt.texture.format;J=p.has(At)}if(J){let At=bt.texture.type,qt=f.has(At),Bt=xe.getClearColor(),te=xe.getClearAlpha(),ne=Bt.r,ve=Bt.g,we=Bt.b;qt?(N[0]=ne,N[1]=ve,N[2]=we,N[3]=te,W.clearBufferuiv(W.COLOR,0,N)):(F[0]=ne,F[1]=ve,F[2]=we,F[3]=te,W.clearBufferiv(W.COLOR,0,F))}else V|=W.COLOR_BUFFER_BIT}X&&(V|=W.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),nt&&(V|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&W.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),et=w},this.dispose=function(){e.removeEventListener("webglcontextlost",ze,!1),e.removeEventListener("webglcontextrestored",De,!1),e.removeEventListener("webglcontextcreationerror",Fn,!1),xe.dispose(),Ot.dispose(),Nt.dispose(),st.dispose(),Ct.dispose(),_t.dispose(),Vt.dispose(),xt.dispose(),Dt.dispose(),Xt.dispose(),Xt.removeEventListener("sessionstart",ea),Xt.removeEventListener("sessionend",na),Pi.stop()};function ze(w){w.preventDefault(),Na("WebGLRenderer: Context Lost."),$=!0}function De(){Na("WebGLRenderer: Context Restored."),$=!1;let w=Q.autoReset,X=ae.enabled,nt=ae.autoUpdate,V=ae.needsUpdate,J=ae.type;Jt(),Q.autoReset=w,ae.enabled=X,ae.autoUpdate=nt,ae.needsUpdate=V,ae.type=J}function Fn(w){_e("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Qn(w){let X=w.target;X.removeEventListener("dispose",Qn),Ns(X)}function Ns(w){bh(w),st.remove(w)}function bh(w){let X=st.get(w).programs;X!==void 0&&(X.forEach(function(nt){Dt.releaseProgram(nt)}),w.isShaderMaterial&&Dt.releaseShaderCache(w))}this.renderBufferDirect=function(w,X,nt,V,J,At){X===null&&(X=Zt);let qt=J.isMesh&&J.matrixWorld.determinantAffine()<0,Bt=ti(w,X,nt,V,J);v.setMaterial(V,qt);let te=nt.index,ne=1;if(V.wireframe===!0){if(te=ut.getWireframeAttribute(nt),te===void 0)return;ne=2}let ve=nt.drawRange,we=nt.attributes.position,Gt=ve.start*ne,ke=(ve.start+ve.count)*ne;At!==null&&(Gt=Math.max(Gt,At.start*ne),ke=Math.min(ke,(At.start+At.count)*ne)),te!==null?(Gt=Math.max(Gt,0),ke=Math.min(ke,te.count)):we!=null&&(Gt=Math.max(Gt,0),ke=Math.min(ke,we.count));let rn=ke-Gt;if(rn<0||rn===1/0)return;Vt.setup(J,V,Bt,nt,te);let Ze,$e=Pt;if(te!==null&&(Ze=Rt.get(te),$e=pt,$e.setIndex(Ze)),J.isMesh)V.wireframe===!0?(v.setLineWidth(V.wireframeLinewidth*he()),$e.setMode(W.LINES)):$e.setMode(W.TRIANGLES);else if(J.isLine){let gn=V.linewidth;gn===void 0&&(gn=1),v.setLineWidth(gn*he()),J.isLineSegments?$e.setMode(W.LINES):J.isLineLoop?$e.setMode(W.LINE_LOOP):$e.setMode(W.LINE_STRIP)}else J.isPoints?$e.setMode(W.POINTS):J.isSprite&&$e.setMode(W.TRIANGLES);if(J.isBatchedMesh)if($t.get("WEBGL_multi_draw"))$e.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{let gn=J._multiDrawStarts,Yt=J._multiDrawCounts,_n=J._multiDrawCount,ee=te?Rt.get(te).bytesPerElement:1,$n=st.get(V).currentProgram.getUniforms();for(let On=0;On<_n;On++)$n.setValue(W,"_gl_DrawID",On),$e.render(gn[On]/ee,Yt[On])}else if(J.isInstancedMesh)$e.renderInstances(Gt,rn,J.count);else if(nt.isInstancedBufferGeometry){let gn=nt._maxInstanceCount!==void 0?nt._maxInstanceCount:1/0,Yt=Math.min(nt.instanceCount,gn);$e.renderInstances(Gt,rn,Yt)}else $e.render(Gt,rn)};function lr(w,X,nt,V){et!==null&&w.isNodeMaterial&&et.setObject(V,w),Mt===!0&&Qt.setState(w,nt,!1),w.transparent===!0&&w.side===Wi&&w.forceSinglePass===!1?(w.side=Hn,w.needsUpdate=!0,hr(w,X,V),w.side=As,w.needsUpdate=!0,hr(w,X,V),w.side=Wi):hr(w,X,V)}this.compile=function(w,X,nt=null){nt===null&&(nt=w),et!==null&&et.renderStart(w,X,nt),D=Nt.get(nt),D.init(X),M.push(D),nt.traverseVisible(function(J){J.isLight&&J.layers.test(X.layers)&&(D.pushLight(J),J.castShadow&&D.pushShadow(J))}),w!==nt&&w.traverseVisible(function(J){J.isLight&&J.layers.test(X.layers)&&(D.pushLight(J),J.castShadow&&D.pushShadow(J))}),D.setupLights(),et!==null&&et.updateLights(D.state.lightsArray),H=this.localClippingEnabled,Mt=Qt.init(this.clippingPlanes,H),Mt===!0&&Qt.setGlobalState(this.clippingPlanes,X),et!==null&&ae.render(D.state.shadowsArray,nt,X);let V=new Set;return w.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;let At=J.material;if(At)if(Array.isArray(At))for(let qt=0;qt<At.length;qt++){let Bt=At[qt];lr(Bt,nt,X,J),V.add(Bt)}else lr(At,nt,X,J),V.add(At)}),D=M.pop(),et!==null&&et.renderEnd(),V},this.compileAsync=function(w,X,nt=null){let V=this.compile(w,X,nt);return new Promise(J=>{function At(){if(V.forEach(function(qt){let te=st.get(qt).currentProgram;(te===void 0||te.isReady())&&V.delete(qt)}),V.size===0){J(w);return}setTimeout(At,10)}$t.get("KHR_parallel_shader_compile")!==null?At():setTimeout(At,10)})};let pi=null;function cr(w){pi&&pi(w)}function ea(){Pi.stop()}function na(){Pi.start()}let Pi=new am;Pi.setAnimationLoop(cr),typeof self<"u"&&Pi.setContext(self),this.setAnimationLoop=function(w){pi=w,Xt.setAnimationLoop(w),w===null?Pi.stop():Pi.start()},Xt.addEventListener("sessionstart",ea),Xt.addEventListener("sessionend",na),this.render=function(w,X){if(X!==void 0&&X.isCamera!==!0){_e("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if($===!0)return;et!==null&&et.renderStart(w,X);let nt=Xt.enabled===!0&&Xt.isPresenting===!0,V=L!==null&&(bt===null||nt)&&L.begin(k,bt);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Xt.enabled===!0&&Xt.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(Xt.cameraAutoUpdate===!0&&Xt.updateCamera(X),X=Xt.getCamera()),w.isScene===!0&&w.onBeforeRender(k,w,X,bt),D=Nt.get(w,M.length),D.init(X),D.state.textureUnits=ct.getTextureUnits(),M.push(D),wt.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),at.setFromProjectionMatrix(wt,Ei,X.reversedDepth),H=this.localClippingEnabled,Mt=Qt.init(this.clippingPlanes,H),b=Ot.get(w,z.length),b.init(),z.push(b),Xt.enabled===!0&&Xt.isPresenting===!0){let qt=k.xr.getDepthSensingMesh();qt!==null&&Us(qt,X,-1/0,k.sortObjects)}Us(w,X,0,k.sortObjects),b.finish(),et!==null&&et.updateLights(D.state.lightsArray),k.sortObjects===!0&&b.sort(Tt,se),ue=Xt.enabled===!1||Xt.isPresenting===!1||Xt.hasDepthSensing()===!1,ue&&xe.addToRenderList(b,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Mt===!0&&Qt.beginShadows();let J=D.state.shadowsArray;if(ae.render(J,w,X),Mt===!0&&Qt.endShadows(),(V&&L.hasRenderPass())===!1){let qt=b.opaque,Bt=b.transmissive;if(D.setupLights(),X.isArrayCamera){let te=X.cameras;if(Bt.length>0)for(let ne=0,ve=te.length;ne<ve;ne++){let we=te[ne];sa(qt,Bt,w,we)}ue&&xe.render(w);for(let ne=0,ve=te.length;ne<ve;ne++){let we=te[ne];ia(b,w,we,we.viewport)}}else Bt.length>0&&sa(qt,Bt,w,X),ue&&xe.render(w),ia(b,w,X)}bt!==null&&lt===0&&(ct.updateMultisampleRenderTarget(bt),ct.updateRenderTargetMipmap(bt)),V&&L.end(k),w.isScene===!0&&w.onAfterRender(k,w,X),Vt.resetDefaultState(),ht=-1,vt=null,M.pop(),M.length>0?(D=M[M.length-1],ct.setTextureUnits(D.state.textureUnits),Mt===!0&&Qt.setGlobalState(k.clippingPlanes,D.state.camera)):D=null,z.pop(),z.length>0?b=z[z.length-1]:b=null,et!==null&&et.renderEnd()};function Us(w,X,nt,V){if(w.visible===!1)return;if(w.layers.test(X.layers)){if(w.isGroup)nt=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(X);else if(w.isLightProbeGrid)D.pushLightProbeGrid(w);else if(w.isLight)D.pushLight(w),w.castShadow&&D.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||w.intersectsFrustum(at)){V&&ce.setFromMatrixPosition(w.matrixWorld).applyMatrix4(wt);let qt=_t.update(w),Bt=w.material;Bt.visible&&b.push(w,qt,Bt,nt,ce.z,null,X)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||w.intersectsFrustum(at))){let qt=_t.update(w),Bt=w.material;if(V&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ce.copy(w.boundingSphere.center)):(qt.boundingSphere===null&&qt.computeBoundingSphere(),ce.copy(qt.boundingSphere.center)),ce.applyMatrix4(w.matrixWorld).applyMatrix4(wt)),Array.isArray(Bt)){let te=qt.groups;for(let ne=0,ve=te.length;ne<ve;ne++){let we=te[ne],Gt=Bt[we.materialIndex];Gt&&Gt.visible&&b.push(w,qt,Gt,nt,ce.z,we,X)}}else Bt.visible&&b.push(w,qt,Bt,nt,ce.z,null,X)}}let At=w.children;for(let qt=0,Bt=At.length;qt<Bt;qt++)Us(At[qt],X,nt,V)}function ia(w,X,nt,V){let{opaque:J,transmissive:At,transparent:qt}=w;D.setupLightsView(nt),Mt===!0&&Qt.setGlobalState(k.clippingPlanes,nt),V&&v.viewport(gt.copy(V)),J.length>0&&ts(J,X,nt),At.length>0&&ts(At,X,nt),qt.length>0&&ts(qt,X,nt),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function sa(w,X,nt,V){if((nt.isScene===!0?nt.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[V.id]===void 0){let Gt=$t.has("EXT_color_buffer_half_float")||$t.has("EXT_color_buffer_float");D.state.transmissionRenderTarget[V.id]=new Zn(1,1,{generateMipmaps:!0,type:Gt?Ii:Kn,minFilter:Rs,samples:Math.max(4,I.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Le.workingColorSpace})}let At=D.state.transmissionRenderTarget[V.id],qt=V.viewport||gt;At.setSize(qt.z*k.transmissionResolutionScale,qt.w*k.transmissionResolutionScale);let Bt=k.getRenderTarget(),te=k.getActiveCubeFace(),ne=k.getActiveMipmapLevel();k.setRenderTarget(At),k.getClearColor(Fe),Me=k.getClearAlpha(),Me<1&&k.setClearColor(16777215,.5),k.clear(),ue&&xe.render(nt);let ve=k.toneMapping;k.toneMapping=Ci;let we=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),D.setupLightsView(V),Mt===!0&&Qt.setGlobalState(k.clippingPlanes,V),ts(w,nt,V),ct.updateMultisampleRenderTarget(At),ct.updateRenderTargetMipmap(At),$t.has("WEBGL_multisampled_render_to_texture")===!1){let Gt=!1;for(let ke=0,rn=X.length;ke<rn;ke++){let Ze=X[ke],{object:$e,geometry:gn,material:Yt,group:_n}=Ze;if(Yt.side===Wi&&$e.layers.test(V.layers)){let ee=Yt.side;Yt.side=Hn,Yt.needsUpdate=!0,ra($e,nt,V,gn,Yt,_n),Yt.side=ee,Yt.needsUpdate=!0,Gt=!0}}Gt===!0&&(ct.updateMultisampleRenderTarget(At),ct.updateRenderTargetMipmap(At))}k.setRenderTarget(Bt,te,ne),k.setClearColor(Fe,Me),we!==void 0&&(V.viewport=we),k.toneMapping=ve}function ts(w,X,nt){let V=X.isScene===!0?X.overrideMaterial:null;for(let J=0,At=w.length;J<At;J++){let qt=w[J],{object:Bt,geometry:te,group:ne}=qt,ve=qt.material;ve.allowOverride===!0&&V!==null&&(ve=V),Bt.layers.test(nt.layers)&&ra(Bt,X,nt,te,ve,ne)}}function ra(w,X,nt,V,J,At){et!==null&&J.isNodeMaterial&&et.setObject(w,J),w.onBeforeRender(k,X,nt,V,J,At),w.modelViewMatrix.multiplyMatrices(nt.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),J.onBeforeRender(k,X,nt,V,w,At),J.transparent===!0&&J.side===Wi&&J.forceSinglePass===!1?(J.side=Hn,J.needsUpdate=!0,k.renderBufferDirect(nt,X,V,J,w,At),J.side=As,J.needsUpdate=!0,k.renderBufferDirect(nt,X,V,J,w,At),J.side=Wi):k.renderBufferDirect(nt,X,V,J,w,At),w.onAfterRender(k,X,nt,V,J,At)}function hr(w,X,nt){X.isScene!==!0&&(X=Zt);let V=st.get(w),J=D.state.lights,At=D.state.shadowsArray,qt=J.state.version,Bt=Dt.getParameters(w,J.state,At,X,nt,D.state.lightProbeGridArray),te=Dt.getProgramCacheKey(Bt),ne=V.programs;V.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?X.environment:null,V.fog=X.fog;let ve=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;V.envMap=Ct.get(w.envMap||V.environment,ve),V.envMapRotation=V.environment!==null&&w.envMap===null?X.environmentRotation:w.envMapRotation,ne===void 0&&(w.addEventListener("dispose",Qn),ne=new Map,V.programs=ne);let we=ne.get(te);if(we!==void 0){if(V.currentProgram===we&&V.lightsStateVersion===qt)return aa(w,Bt),we}else Bt.uniforms=Dt.getUniforms(w),et!==null&&w.isNodeMaterial&&et.build(w,nt,Bt),w.onBeforeCompile(Bt,k),we=Dt.acquireProgram(Bt,te),ne.set(te,we),V.uniforms=Bt.uniforms;let Gt=V.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Gt.clippingPlanes=Qt.uniform),aa(w,Bt),V.needsLights=Ke(w),V.lightsStateVersion=qt,V.needsLights&&(Gt.ambientLightColor.value=J.state.ambient,Gt.lightProbe.value=J.state.probe,Gt.sunLights.value=J.state.sun,Gt.sunLightShadows.value=J.state.sunShadow,Gt.directionalLights.value=J.state.directional,Gt.directionalLightShadows.value=J.state.directionalShadow,Gt.spotLights.value=J.state.spot,Gt.spotLightShadows.value=J.state.spotShadow,Gt.rectAreaLights.value=J.state.rectArea,Gt.ltc_1.value=J.state.rectAreaLTC1,Gt.ltc_2.value=J.state.rectAreaLTC2,Gt.pointLights.value=J.state.point,Gt.pointLightShadows.value=J.state.pointShadow,Gt.hemisphereLights.value=J.state.hemi,Gt.sunShadowMatrix.value=J.state.sunShadowMatrix,Gt.sunShadowCascade.value=J.state.sunShadowCascade,Gt.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Gt.spotLightMatrix.value=J.state.spotLightMatrix,Gt.spotLightMap.value=J.state.spotLightMap,Gt.pointShadowMatrix.value=J.state.pointShadowMatrix),V.lightProbeGrid=D.state.lightProbeGridArray.length>0,V.currentProgram=we,V.uniformsList=null,we}function Po(w){if(w.uniformsList===null){let X=w.currentProgram.getUniforms();w.uniformsList=Zr.seqWithValue(X.seq,w.uniforms)}return w.uniformsList}function aa(w,X){let nt=st.get(w);nt.outputColorSpace=X.outputColorSpace,nt.batching=X.batching,nt.batchingColor=X.batchingColor,nt.instancing=X.instancing,nt.instancingColor=X.instancingColor,nt.instancingMorph=X.instancingMorph,nt.skinning=X.skinning,nt.morphTargets=X.morphTargets,nt.morphNormals=X.morphNormals,nt.morphColors=X.morphColors,nt.morphTargetsCount=X.morphTargetsCount,nt.numClippingPlanes=X.numClippingPlanes,nt.numIntersection=X.numClipIntersection,nt.vertexAlphas=X.vertexAlphas,nt.vertexTangents=X.vertexTangents,nt.toneMapping=X.toneMapping}function Mh(w,X){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;T.setFromMatrixPosition(X.matrixWorld);for(let nt=0,V=w.length;nt<V;nt++){let J=w[nt];if(J.texture!==null&&J.boundingBox.containsPoint(T))return J}return null}function ti(w,X,nt,V,J){X.isScene!==!0&&(X=Zt),ct.resetTextureUnits();let At=X.fog,qt=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?X.environment:null,Bt=bt===null?k.outputColorSpace:bt.isXRRenderTarget===!0?bt.texture.colorSpace:Le.workingColorSpace,te=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,ne=Ct.get(V.envMap||qt,te),ve=V.vertexColors===!0&&!!nt.attributes.color&&nt.attributes.color.itemSize===4,we=!!nt.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Gt=!!nt.morphAttributes.position,ke=!!nt.morphAttributes.normal,rn=!!nt.morphAttributes.color,Ze=Ci;V.toneMapped&&(bt===null||bt.isXRRenderTarget===!0)&&(Ze=k.toneMapping);let $e=nt.morphAttributes.position||nt.morphAttributes.normal||nt.morphAttributes.color,gn=$e!==void 0?$e.length:0,Yt=st.get(V),_n=D.state.lights;if(Mt===!0&&(H===!0||w!==vt)){let Oe=w===vt&&V.id===ht;Qt.setState(V,w,Oe)}let ee=!1;V.version===Yt.__version?(Yt.needsLights&&Yt.lightsStateVersion!==_n.state.version||Yt.outputColorSpace!==Bt||J.isBatchedMesh&&Yt.batching===!1||!J.isBatchedMesh&&Yt.batching===!0||J.isBatchedMesh&&Yt.batchingColor===!0&&J._colorsTexture===null||J.isBatchedMesh&&Yt.batchingColor===!1&&J._colorsTexture!==null||J.isInstancedMesh&&Yt.instancing===!1||!J.isInstancedMesh&&Yt.instancing===!0||J.isSkinnedMesh&&Yt.skinning===!1||!J.isSkinnedMesh&&Yt.skinning===!0||J.isInstancedMesh&&Yt.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Yt.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Yt.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Yt.instancingMorph===!1&&J.morphTexture!==null||Yt.envMap!==ne||V.fog===!0&&Yt.fog!==At||Yt.numClippingPlanes!==void 0&&(Yt.numClippingPlanes!==Qt.numPlanes||Yt.numIntersection!==Qt.numIntersection)||Yt.vertexAlphas!==ve||Yt.vertexTangents!==we||Yt.morphTargets!==Gt||Yt.morphNormals!==ke||Yt.morphColors!==rn||Yt.toneMapping!==Ze||Yt.morphTargetsCount!==gn||!!Yt.lightProbeGrid!=D.state.lightProbeGridArray.length>0)&&(ee=!0):(ee=!0,Yt.__version=V.version);let $n=Yt.currentProgram;ee===!0&&($n=hr(V,X,J),et&&V.isNodeMaterial&&et.onUpdateProgram(V,$n,Yt));let On=!1,Li=!1,Di=!1,Ce=$n.getUniforms(),He=Yt.uniforms;if(v.useProgram($n.program)&&(On=!0,Li=!0,Di=!0),V.id!==ht&&(ht=V.id,Li=!0),Yt.needsLights){let Oe=Mh(D.state.lightProbeGridArray,J);Yt.lightProbeGrid!==Oe&&(Yt.lightProbeGrid=Oe,Li=!0)}if(On||vt!==w){v.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Ce.setValue(W,"projectionMatrix",w.projectionMatrix),Ce.setValue(W,"viewMatrix",w.matrixWorldInverse);let Xn=Ce.map.cameraPosition;Xn!==void 0&&Xn.setValue(W,It.setFromMatrixPosition(w.matrixWorld)),I.logarithmicDepthBuffer&&Ce.setValue(W,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Ce.setValue(W,"isOrthographic",w.isOrthographicCamera===!0),vt!==w&&(vt=w,Li=!0,Di=!0)}if(Yt.needsLights&&(_n.state.sunShadowMap.length>0&&Ce.setValue(W,"sunShadowMap",_n.state.sunShadowMap,ct),_n.state.directionalShadowMap.length>0&&Ce.setValue(W,"directionalShadowMap",_n.state.directionalShadowMap,ct),_n.state.spotShadowMap.length>0&&Ce.setValue(W,"spotShadowMap",_n.state.spotShadowMap,ct),_n.state.pointShadowMap.length>0&&Ce.setValue(W,"pointShadowMap",_n.state.pointShadowMap,ct)),J.isSkinnedMesh){Ce.setOptional(W,J,"bindMatrix"),Ce.setOptional(W,J,"bindMatrixInverse");let Oe=J.skeleton;Oe&&(Oe.boneTexture===null&&Oe.computeBoneTexture(),Ce.setValue(W,"boneTexture",Oe.boneTexture,ct))}J.isBatchedMesh&&(Ce.setOptional(W,J,"batchingTexture"),Ce.setValue(W,"batchingTexture",J._matricesTexture,ct),Ce.setOptional(W,J,"batchingIdTexture"),Ce.setValue(W,"batchingIdTexture",J._indirectTexture,ct),Ce.setOptional(W,J,"batchingColorTexture"),J._colorsTexture!==null&&Ce.setValue(W,"batchingColorTexture",J._colorsTexture,ct));let gi=nt.morphAttributes;if((gi.position!==void 0||gi.normal!==void 0||gi.color!==void 0)&&Y.update(J,nt,$n),(Li||Yt.receiveShadow!==J.receiveShadow)&&(Yt.receiveShadow=J.receiveShadow,Ce.setValue(W,"receiveShadow",J.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&X.environment!==null&&(He.envMapIntensity.value=X.environmentIntensity),He.dfgLUT!==void 0&&(He.dfgLUT.value=FS()),Li){if(Ce.setValue(W,"toneMappingExposure",k.toneMappingExposure),Yt.needsLights&&sn(He,Di),At&&V.fog===!0&&re.refreshFogUniforms(He,At),re.refreshMaterialUniforms(He,V,mt,dt,D.state.transmissionRenderTarget[w.id]),Yt.needsLights&&Yt.lightProbeGrid){let Oe=Yt.lightProbeGrid;He.probesSH.value=Oe.texture,He.probesMin.value.copy(Oe.boundingBox.min),He.probesMax.value.copy(Oe.boundingBox.max),He.probesResolution.value.copy(Oe.resolution)}Zr.upload(W,Po(Yt),He,ct)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Zr.upload(W,Po(Yt),He,ct),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Ce.setValue(W,"center",J.center),Ce.setValue(W,"modelViewMatrix",J.modelViewMatrix),Ce.setValue(W,"normalMatrix",J.normalMatrix),Ce.setValue(W,"modelMatrix",J.matrixWorld),V.uniformsGroups!==void 0){let Oe=V.uniformsGroups;for(let Xn=0,ms=Oe.length;Xn<ms;Xn++){let Lo=Oe[Xn];xt.update(Lo,$n),xt.bind(Lo,$n)}}return $n}function sn(w,X){w.ambientLightColor.needsUpdate=X,w.lightProbe.needsUpdate=X,w.sunLights.needsUpdate=X,w.sunLightShadows.needsUpdate=X,w.directionalLights.needsUpdate=X,w.directionalLightShadows.needsUpdate=X,w.pointLights.needsUpdate=X,w.pointLightShadows.needsUpdate=X,w.spotLights.needsUpdate=X,w.spotLightShadows.needsUpdate=X,w.rectAreaLights.needsUpdate=X,w.hemisphereLights.needsUpdate=X}function Ke(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return ot},this.getActiveMipmapLevel=function(){return lt},this.getRenderTarget=function(){return bt},this.setRenderTargetTextures=function(w,X,nt){let V=st.get(w);V.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),st.get(w.texture).__webglTexture=X,st.get(w.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:nt,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,X){let nt=st.get(w);nt.__webglFramebuffer=X,nt.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(w,X=0,nt=0){bt=w,ot=X,lt=nt;let V=null,J=!1,At=!1;if(w){let Bt=st.get(w);if(Bt.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(W.FRAMEBUFFER,Bt.__webglFramebuffer),gt.copy(w.viewport),kt.copy(w.scissor),Wt=w.scissorTest,v.viewport(gt),v.scissor(kt),v.setScissorTest(Wt),ht=-1;return}else if(Bt.__webglFramebuffer===void 0)ct.setupRenderTarget(w);else if(Bt.__hasExternalTextures)ct.rebindTextures(w,st.get(w.texture).__webglTexture,st.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let ve=w.depthTexture;if(Bt.__boundDepthTexture!==ve){if(ve!==null&&st.has(ve)&&(w.width!==ve.image.width||w.height!==ve.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ct.setupDepthRenderbuffer(w)}}let te=w.texture;(te.isData3DTexture||te.isDataArrayTexture||te.isCompressedArrayTexture)&&(At=!0);let ne=st.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(ne[X])?V=ne[X][nt]:V=ne[X],J=!0):w.samples>0&&ct.useMultisampledRTT(w)===!1?V=st.get(w).__webglMultisampledFramebuffer:Array.isArray(ne)?V=ne[nt]:V=ne,gt.copy(w.viewport),kt.copy(w.scissor),Wt=w.scissorTest}else gt.copy(zt).multiplyScalar(mt).floor(),kt.copy(de).multiplyScalar(mt).floor(),Wt=fe;if(nt!==0&&(V=it),v.bindFramebuffer(W.FRAMEBUFFER,V)&&v.drawBuffers(w,V),v.viewport(gt),v.scissor(kt),v.setScissorTest(Wt),J){let Bt=st.get(w.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+X,Bt.__webglTexture,nt)}else if(At){let Bt=X;for(let te=0;te<w.textures.length;te++){let ne=st.get(w.textures[te]);W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0+te,ne.__webglTexture,nt,Bt)}}else if(w!==null&&nt!==0){let Bt=st.get(w.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Bt.__webglTexture,nt)}ht=-1};function mi(w){let X=st.get(w);return(X.__readFormat!==w.format||X.__readType!==w.type)&&(X.__readFormat=w.format,X.__readType=w.type,X.__formatReadable=I.textureFormatReadable(w.format),X.__typeReadable=I.textureTypeReadable(w.type)),X}this.readRenderTargetPixels=function(w,X,nt,V,J,At,qt,Bt=0){if(!(w&&w.isWebGLRenderTarget)){_e("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let te=st.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&qt!==void 0&&(te=te[qt]),te){v.bindFramebuffer(W.FRAMEBUFFER,te);try{let ne=w.textures[Bt],ve=ne.format,we=ne.type;w.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Bt);let Gt=mi(ne);if(Gt.__formatReadable===!1){_e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Gt.__typeReadable===!1){_e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=w.width-V&&nt>=0&&nt<=w.height-J&&W.readPixels(X,nt,V,J,Ut.convert(ve),Ut.convert(we),At)}finally{let ne=bt!==null?st.get(bt).__webglFramebuffer:null;v.bindFramebuffer(W.FRAMEBUFFER,ne)}}},this.readRenderTargetPixelsAsync=async function(w,X,nt,V,J,At,qt,Bt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let te=st.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&qt!==void 0&&(te=te[qt]),te)if(X>=0&&X<=w.width-V&&nt>=0&&nt<=w.height-J){v.bindFramebuffer(W.FRAMEBUFFER,te);let ne=w.textures[Bt],ve=ne.format,we=ne.type;w.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Bt);let Gt=mi(ne);if(Gt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Gt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ke=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,ke),W.bufferData(W.PIXEL_PACK_BUFFER,At.byteLength,W.STREAM_READ),W.readPixels(X,nt,V,J,Ut.convert(ve),Ut.convert(we),0),W.bindBuffer(W.PIXEL_PACK_BUFFER,null);let rn=bt!==null?st.get(bt).__webglFramebuffer:null;v.bindFramebuffer(W.FRAMEBUFFER,rn);let Ze=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await Ip(W,Ze,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,ke),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,At),W.bindBuffer(W.PIXEL_PACK_BUFFER,null),W.deleteBuffer(ke),W.deleteSync(Ze),At}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,X=null,nt=0){let V=Math.pow(2,-nt),J=Math.floor(w.image.width*V),At=Math.floor(w.image.height*V),qt=X!==null?X.x:0,Bt=X!==null?X.y:0;ct.setTexture2D(w,0),W.copyTexSubImage2D(W.TEXTURE_2D,nt,0,0,qt,Bt,J,At),v.unbindTexture()},this.copyTextureToTexture=function(w,X,nt=null,V=null,J=0,At=0){let qt,Bt,te,ne,ve,we,Gt,ke,rn,Ze=w.isCompressedTexture?w.mipmaps[At]:w.image;if(nt!==null)qt=nt.max.x-nt.min.x,Bt=nt.max.y-nt.min.y,te=nt.isBox3?nt.max.z-nt.min.z:1,ne=nt.min.x,ve=nt.min.y,we=nt.isBox3?nt.min.z:0;else{let He=Math.pow(2,-J);qt=Math.floor(Ze.width*He),Bt=Math.floor(Ze.height*He),w.isDataArrayTexture?te=Ze.depth:w.isData3DTexture?te=Math.floor(Ze.depth*He):te=1,ne=0,ve=0,we=0}V!==null?(Gt=V.x,ke=V.y,rn=V.z):(Gt=0,ke=0,rn=0);let $e=Ut.convert(X.format),gn=Ut.convert(X.type),Yt;X.isData3DTexture?(ct.setTexture3D(X,0),Yt=W.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(ct.setTexture2DArray(X,0),Yt=W.TEXTURE_2D_ARRAY):(ct.setTexture2D(X,0),Yt=W.TEXTURE_2D),v.activeTexture(W.TEXTURE0),v.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,X.flipY),v.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),v.pixelStorei(W.UNPACK_ALIGNMENT,X.unpackAlignment);let _n=v.getParameter(W.UNPACK_ROW_LENGTH),ee=v.getParameter(W.UNPACK_IMAGE_HEIGHT),$n=v.getParameter(W.UNPACK_SKIP_PIXELS),On=v.getParameter(W.UNPACK_SKIP_ROWS),Li=v.getParameter(W.UNPACK_SKIP_IMAGES);v.pixelStorei(W.UNPACK_ROW_LENGTH,Ze.width),v.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Ze.height),v.pixelStorei(W.UNPACK_SKIP_PIXELS,ne),v.pixelStorei(W.UNPACK_SKIP_ROWS,ve),v.pixelStorei(W.UNPACK_SKIP_IMAGES,we);let Di=w.isDataArrayTexture||w.isData3DTexture,Ce=X.isDataArrayTexture||X.isData3DTexture;if(w.isDepthTexture){let He=st.get(w),gi=st.get(X),Oe=st.get(He.__renderTarget),Xn=st.get(gi.__renderTarget);v.bindFramebuffer(W.READ_FRAMEBUFFER,Oe.__webglFramebuffer),v.bindFramebuffer(W.DRAW_FRAMEBUFFER,Xn.__webglFramebuffer);for(let ms=0;ms<te;ms++)Di&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,st.get(w).__webglTexture,J,we+ms),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,st.get(X).__webglTexture,At,rn+ms)),W.blitFramebuffer(ne,ve,qt,Bt,Gt,ke,qt,Bt,W.DEPTH_BUFFER_BIT,W.NEAREST);v.bindFramebuffer(W.READ_FRAMEBUFFER,null),v.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if(J!==0||w.isRenderTargetTexture||st.has(w)){let He=st.get(w),gi=st.get(X);v.bindFramebuffer(W.READ_FRAMEBUFFER,q),v.bindFramebuffer(W.DRAW_FRAMEBUFFER,j);for(let Oe=0;Oe<te;Oe++)Di?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,He.__webglTexture,J,we+Oe):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,He.__webglTexture,J),Ce?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,gi.__webglTexture,At,rn+Oe):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,gi.__webglTexture,At),J!==0?W.blitFramebuffer(ne,ve,qt,Bt,Gt,ke,qt,Bt,W.COLOR_BUFFER_BIT,W.NEAREST):Ce?W.copyTexSubImage3D(Yt,At,Gt,ke,rn+Oe,ne,ve,qt,Bt):W.copyTexSubImage2D(Yt,At,Gt,ke,ne,ve,qt,Bt);v.bindFramebuffer(W.READ_FRAMEBUFFER,null),v.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else Ce?w.isDataTexture||w.isData3DTexture?W.texSubImage3D(Yt,At,Gt,ke,rn,qt,Bt,te,$e,gn,Ze.data):X.isCompressedArrayTexture?W.compressedTexSubImage3D(Yt,At,Gt,ke,rn,qt,Bt,te,$e,Ze.data):W.texSubImage3D(Yt,At,Gt,ke,rn,qt,Bt,te,$e,gn,Ze):w.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,At,Gt,ke,qt,Bt,$e,gn,Ze.data):w.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,At,Gt,ke,Ze.width,Ze.height,$e,Ze.data):W.texSubImage2D(W.TEXTURE_2D,At,Gt,ke,qt,Bt,$e,gn,Ze);v.pixelStorei(W.UNPACK_ROW_LENGTH,_n),v.pixelStorei(W.UNPACK_IMAGE_HEIGHT,ee),v.pixelStorei(W.UNPACK_SKIP_PIXELS,$n),v.pixelStorei(W.UNPACK_SKIP_ROWS,On),v.pixelStorei(W.UNPACK_SKIP_IMAGES,Li),At===0&&X.generateMipmaps&&W.generateMipmap(Yt),v.unbindTexture()},this.initRenderTarget=function(w){st.get(w).__webglFramebuffer===void 0&&ct.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?ct.setTextureCube(w,0):w.isData3DTexture?ct.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?ct.setTexture2DArray(w,0):ct.setTexture2D(w,0),v.unbindTexture()},this.resetState=function(){ot=0,lt=0,bt=null,v.reset(),Vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Le._getDrawingBufferColorSpace(t),e.unpackColorSpace=Le._getUnpackColorSpace()}};var pm=new Vn,sh=new G,us=class extends lo{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new ln(t,3)),this.setAttribute("uv",new ln(e,2))}applyMatrix4(t){let e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new Ts(e,6,1);return this.setAttribute("instanceStart",new Ai(n,3,0)),this.setAttribute("instanceEnd",new Ai(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new Ts(e,6,1);return this.setAttribute("instanceColorStart",new Ai(n,3,0)),this.setAttribute("instanceColorEnd",new Ai(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new eo(t.geometry)),this}fromLineSegments(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vn);let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),pm.setFromBufferAttribute(e),this.boundingBox.union(pm))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jn),this.boundingBox===null&&this.computeBoundingBox();let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)sh.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(sh)),sh.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(sh));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}};Ft.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Lt},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Gn.line={uniforms:So.merge([Ft.common,Ft.fog,Ft.line]),vertexShader:`
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
		`};var qi=class extends bn{constructor(t){super({type:"LineMaterial",uniforms:So.clone(Gn.line.uniforms),vertexShader:Gn.line.vertexShader,fragmentShader:Gn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0!==this.worldUnits&&(this.needsUpdate=!0),t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var md=new We,mm=new G,gm=new G,An=new We,Cn=new We,Yi=new We,gd=new G,_d=new Be,Rn=new ho,_m=new G,rh=new Vn,ah=new Jn,Zi=new We,Ji,er;function xm(i,t,e){return Zi.set(0,0,-t,1).applyMatrix4(i.projectionMatrix),Zi.multiplyScalar(1/Zi.w),Zi.x=er/e.width,Zi.y=er/e.height,Zi.applyMatrix4(i.projectionMatrixInverse),Zi.multiplyScalar(1/Zi.w),Math.abs(Math.max(Zi.x,Zi.y))}function OS(i,t){let e=i.matrixWorld,n=i.geometry,s=n.attributes.instanceStart,r=n.attributes.instanceEnd,a=Math.min(n.instanceCount,s.count);for(let o=0,l=a;o<l;o++){Rn.start.fromBufferAttribute(s,o),Rn.end.fromBufferAttribute(r,o),Rn.applyMatrix4(e);let c=new G,h=new G;Ji.distanceSqToSegment(Rn.start,Rn.end,h,c),h.distanceTo(c)<er*.5&&t.push({point:h,pointOnLine:c,distance:Ji.origin.distanceTo(h),object:i,face:null,faceIndex:o,uv:null,uv1:null})}}function BS(i,t,e){let n=t.projectionMatrix,r=i.material.resolution,a=i.matrixWorld,o=i.geometry,l=o.attributes.instanceStart,c=o.attributes.instanceEnd,h=Math.min(o.instanceCount,l.count),m=-t.near;Ji.at(1,Yi),Yi.w=1,Yi.applyMatrix4(t.matrixWorldInverse),Yi.applyMatrix4(n),Yi.multiplyScalar(1/Yi.w),Yi.x*=r.x/2,Yi.y*=r.y/2,Yi.z=0,gd.copy(Yi),_d.multiplyMatrices(t.matrixWorldInverse,a);for(let d=0,g=h;d<g;d++){if(An.fromBufferAttribute(l,d),Cn.fromBufferAttribute(c,d),An.w=1,Cn.w=1,An.applyMatrix4(_d),Cn.applyMatrix4(_d),An.z>m&&Cn.z>m)continue;if(An.z>m){let F=An.z-Cn.z,T=(An.z-m)/F;An.lerp(Cn,T)}else if(Cn.z>m){let F=Cn.z-An.z,T=(Cn.z-m)/F;Cn.lerp(An,T)}An.applyMatrix4(n),Cn.applyMatrix4(n),An.multiplyScalar(1/An.w),Cn.multiplyScalar(1/Cn.w),An.x*=r.x/2,An.y*=r.y/2,Cn.x*=r.x/2,Cn.y*=r.y/2,Rn.start.copy(An),Rn.start.z=0,Rn.end.copy(Cn),Rn.end.z=0;let A=Rn.closestPointToPointParameter(gd,!0);Rn.at(A,_m);let p=Yu.lerp(An.z,Cn.z,A),f=p>=-1&&p<=1,N=gd.distanceTo(_m)<er*.5;if(f&&N){Rn.start.fromBufferAttribute(l,d),Rn.end.fromBufferAttribute(c,d),Rn.start.applyMatrix4(a),Rn.end.applyMatrix4(a);let F=new G,T=new G;Ji.distanceSqToSegment(Rn.start,Rn.end,T,F),e.push({point:T,pointOnLine:F,distance:Ji.origin.distanceTo(T),object:i,face:null,faceIndex:d,uv:null,uv1:null})}}}var nr=class extends Sn{constructor(t=new us,e=new qi({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,s=new Float32Array(2*e.count);for(let a=0,o=0,l=e.count;a<l;a++,o+=2)mm.fromBufferAttribute(e,a),gm.fromBufferAttribute(n,a),s[o]=o===0?0:s[o-1],s[o+1]=s[o]+mm.distanceTo(gm);let r=new Ts(s,2,1);return t.setAttribute("instanceDistanceStart",new Ai(r,1,0)),t.setAttribute("instanceDistanceEnd",new Ai(r,1,1)),this}raycast(t,e){let n=this.material.worldUnits,s=t.camera;if(s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.'),n===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;let r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;Ji=t.ray;let a=this.matrixWorld,o=this.geometry,l=this.material;er=l.linewidth+r,o.boundingSphere===null&&o.computeBoundingSphere(),ah.copy(o.boundingSphere).applyMatrix4(a);let c;if(n)c=er*.5;else{let m=Math.max(s.near,ah.distanceToPoint(Ji.origin));c=xm(s,m,l.resolution)}if(ah.radius+=c,Ji.intersectsSphere(ah)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),rh.copy(o.boundingBox).applyMatrix4(a);let h;if(n)h=er*.5;else{let m=Math.max(s.near,rh.distanceToPoint(Ji.origin));h=xm(s,m,l.resolution)}rh.expandByScalar(h),Ji.intersectsBox(rh)!==!1&&(n?OS(this,e):BS(this,s,e))}onBeforeRender(t){let e=this.material.uniforms;e&&e.resolution&&(t.getViewport(md),this.material.uniforms.resolution.value.set(md.z,md.w))}};function vm(i){let t=window.__ROD__,{scene:e,camera:n,goal:s,cur:r,invalidate:a,K:o,CX:l,CY:c,mcs:h,q:m,list:d,clamp:g,norm:x,munis:A}=i,p=u=>document.querySelector(u),f=u=>String(u).replace(/[<>&"]/g,_=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[_]),N=(u,_)=>[(u-l)*o,(_-c)*o],F=.06,T=t.segs.map(u=>{let _=[],S=[0];for(let E=0;E<u.length;E+=2){let C=N(u[E],u[E+1]);_.length&&S.push(S[S.length-1]+Math.hypot(C[0]-_[_.length-1][0],C[1]-_[_.length-1][1])),_.push(C)}return{p:_,c:S,L:S[S.length-1]}}),b=t.stops.map(([u,_,S,E])=>({n:u,id:E,w:N(_,S),fams:new Set})),D=t.routes.map(([u,_,S])=>({s:u,l:_,c:S})),z=new Map;(t.bus||[]).forEach(([u,_,S,E])=>{let C={days:new Set(u),name:_,stops:S,times:E};S.forEach((R,O)=>{if(O<S.length-1){let U=z.get(R)||[];U.push([C,O]),z.set(R,U)}})});function M(u,_,S){let E=fe(),C=t.days.indexOf(E.ymd),R=[];for(let[O,U]of z.get(u)||[]){if(!O.days.has(C))continue;let B=O.times[U];if(B<_||B>S)continue;let Z=O.stops[O.stops.length-1];R.push({sm:B,est:B,dl:0,fam:O.name,dest:b[Z].n,destId:b[Z].id,plat:"",cancel:!1,obs:"",live:!1,num:"",tid:"",tr:null,bus:!0,src:"bus",bstops:O.stops.slice(U)})}return R}let L=(u,_)=>{let S=u.match(/^R([A-Z]*)(\d*)(.*)$/),E=_.match(/^R([A-Z]*)(\d*)(.*)$/);return(S[1]||"").localeCompare(E[1]||"")||(+S[2]||0)-(+E[2]||0)||S[3].localeCompare(E[3])},k=[...new Set(D.map(u=>u.s))].sort(L),$={};D.forEach(u=>{$[u.s]||($[u.s]=u.c)});let et=t.pats.map(([u,_,S])=>({stops:u,t:_,segs:S})),it=t.trips.map(([u,_,S,E,C],R)=>({day:u,pat:et[_],fam:D[S].s,c:D[S].c,t0:E,num:C,tid:t.tids[R]})),q={};k.forEach(u=>q[u]=new Set),it.forEach(u=>{u.pat.segs.forEach(_=>q[u.fam].add(_)),u.pat.stops.forEach(_=>b[_].fams.add(u.fam))});let j=t.days.map((u,_)=>it.filter(S=>S.day===_)),ot=new Map(it.map(u=>[u.tid,u])),lt=[124.87404143965449,479.9901289885639,124.62688710863031,249.99562739146893,486.739003764725,248.0364802782304,2037.1344308355726],bt=Math.PI/180,ht=3.922*bt,vt=-39.705*bt;function gt(u,_){let S=u*bt+ht,E=_*bt,C=Math.cos(vt),R=Math.sin(vt),O=Math.cos(E),U=Math.cos(S)*O,B=Math.sin(S)*O,Z=Math.sin(E),tt=Math.atan2(B,U*C-Z*R),y=Math.asin(Z*C+U*R),P=Math.sqrt(2/(1+Math.cos(tt)*Math.cos(y))),K=P*Math.cos(y)*Math.sin(tt),rt=P*Math.sin(y),[Et,jt,ie,yt,St,oe,ge]=lt;return N((jt+Et*K-St)*ge,(oe-(yt-ie*rt))*ge)}let kt=new Map(b.map((u,_)=>[u.id,_]));function Wt(u){if(u.g)return u.g;let _=[],S=[],E=[0],C=0;return u.segs.forEach((R,O)=>{let U=T[R];U.p.forEach((B,Z)=>{O&&!Z||(_.push(B),S.push(C+U.c[Z]))}),C+=U.L,E.push(C)}),u.g={pts:_,cum:S,stopD:E}}function Fe(u,_,S,E){let C=1e18,R=0;for(let O=0;O+1<u.pts.length;O++){if(u.cum[O+1]<S||u.cum[O]>E)continue;let U=u.pts[O],B=u.pts[O+1],Z=B[0]-U[0],tt=B[1]-U[1],y=Z*Z+tt*tt||1e-9,P=Math.max(0,Math.min(1,((_[0]-U[0])*Z+(_[1]-U[1])*tt)/y)),K=U[0]+Z*P-_[0],rt=U[1]+tt*P-_[1],Et=K*K+rt*rt;Et<C&&(C=Et,R=u.cum[O]+P*(u.cum[O+1]-u.cum[O]))}return{d:R,err:Math.sqrt(C)}}function Me(u,_){let S=0,E=u.cum.length-1;if(_<=0)return u.pts[0];if(_>=u.cum[E])return u.pts[E];for(;E-S>1;){let U=S+E>>1;u.cum[U]<=_?S=U:E=U}let C=(_-u.cum[S])/(u.cum[E]-u.cum[S]||1),R=u.pts[S],O=u.pts[E];return[R[0]+(O[0]-R[0])*C,R[1]+(O[1]-R[1])*C]}let Ie=u=>`${u.slice(6,8)}/${u.slice(4,6)}`,dt=new Intl.DateTimeFormat("es-ES",{timeZone:"Europe/Madrid",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hourCycle:"h23"});function mt(u){let _={};return dt.formatToParts(u).forEach(S=>_[S.type]=S.value),{ymd:_.year+_.month+_.day,min:+_.hour*60+ +_.minute+ +_.second/60}}let Tt=0,se=null,zt=0,de=0;function fe(){let u=mt(new Date);if(Tt===0&&se==null)return{...u,live:!0};let _=se==null?u.min:zt+(Tt?(performance.now()-de)/6e4*Tt:0);return{ymd:u.ymd,min:_,live:!1}}let at=u=>(u=(Math.round(u)%1440+1440)%1440,String(Math.floor(u/60)).padStart(2,"0")+":"+String(u%60).padStart(2,"0")),Mt="https://rodalies.erathegameoftime.com",H={url:"",delays:new Map,tu:new Map,vp:new Map,alerts:[],ok:0,okVP:0,err:"",feedTs:0};try{let u=new URLSearchParams(location.search).get("rt");u&&localStorage.setItem("rod_rt",u);let _=localStorage.getItem("rod_rt");_&&/jhmuyo\.workers\.dev/.test(_)&&(_=Mt,localStorage.setItem("rod_rt",_)),H.url=_||Mt}catch{H.url=Mt}let wt=(u,_)=>fetch(u+_,{cache:"no-store"}).then(S=>{if(!S.ok)throw new Error("HTTP "+S.status);return S.json()}),It=u=>/^51/.test(u||"");async function ce(){if(!H.url){ue();return}let u=H.url.replace(/\/+$/,"");(!H.repFail||Date.now()-H.repFail>15*6e4)&&wt(u,"/reports.json").then(B=>{B&&Array.isArray(B.items)?(H.rep=B.items,H.repSkew=(B.now||Date.now())-Date.now(),B.tipos&&(H.tipos=B.tipos),H.repOk=Date.now(),H.repFail=0):H.repFail=Date.now()}).catch(()=>{H.repFail=Date.now(),H.repOk=0});let _=!H.adifAt||Date.now()-H.adifAt>11e4,[S,E,C,R,O]=await Promise.allSettled([wt(u,"/trip_updates.json"),wt(u,"/vehicle_positions.json"),wt(u,"/alerts.json"),wt(u,"/notices.json"),_?wt(u,"/adif.json"):Promise.reject(0)]);if(O.status==="fulfilled"&&O.value&&O.value.ok?(H.adif=O.value,H.adifAt=Date.now()):_&&(H.adifAt=Date.now()-6e4),S.status==="fulfilled"){let B=new Map,Z=new Map;for(let tt of S.value.entity||[]){let y=tt.tripUpdate;if(!y||!y.trip||!It(y.trip.tripId))continue;let P=y.trip.tripId,K=(y.stopTimeUpdate||[])[0],rt=y.delay;rt==null&&K&&(rt=(K.arrival||K.departure||{}).delay),y.trip.scheduleRelationship==="CANCELED"&&(rt="X"),rt!=null&&B.set(P,rt),Z.set(P,{next:K?{sid:K.stopId,t:+((K.arrival||K.departure||{}).time||0)}:null})}H.delays=B,H.tu=Z,H.ok=Date.now(),H.feedTs=+((S.value.header||{}).timestamp||0)*1e3,H.err=""}else H.err=S.reason&&S.reason.message||"sin respuesta";if(E.status==="fulfilled"){let B=new Map,Z=Date.now()/1e3;for(let tt of E.value.entity||[]){let y=tt.vehicle;if(!y||!y.trip||!It(y.trip.tripId)||!y.position)continue;let P=y.vehicle&&y.vehicle.label||"",K=P.match(/PLATF\.\(([^)]+)\)/),rt=H.vp.get(y.trip.tripId),Et={tid:y.trip.tripId,w:gt(+y.position.longitude,+y.position.latitude),st:y.currentStatus||"",sid:y.stopId||"",ts:+y.timestamp||Z,label:P,plat:K?K[1]:"",fam:(P.split("-")[0]||"").trim(),num:y.vehicle&&y.vehicle.id||""};Et.disp=rt?rt.disp:null,B.set(Et.tid,Et)}H.vp=B,H.okVP=Date.now()}let U=[];if(R.status==="fulfilled"&&Array.isArray(R.value.included)){H.okNotices=Date.now();for(let B of R.value.included){let Z=new Set((B.lines||[]).map(P=>P.id).filter(P=>$[P])),tt=P=>((P||{}).es||(P||{}).ca||"").trim(),y=[tt(B.description),tt(B.title)].sort((P,K)=>K.length-P.length)[0];y&&U.push({id:"N"+B.externalId,fams:Z,stops:new Set,txt:y,when:(B.date||"")+"T"+(B.time||""),src:"Rodalies",core:B.core||""})}}if(C.status==="fulfilled"){let B=+((C.value.header||{}).timestamp||0);if(H.alertsTs=B,Date.now()/1e3-B<6*3600)for(let Z of C.value.entity||[]){let tt=Z.alert;if(!tt)continue;let y=new Set,P=new Set;for(let jt of tt.informedEntity||[])(jt.routeId||"").startsWith("51")&&y.add(jt.routeId.replace(/^51T\d+/,"")),jt.stopId&&kt.has(jt.stopId)&&P.add(kt.get(jt.stopId));if(!y.size&&!P.size)continue;let K=(tt.descriptionText||tt.headerText||{translation:[]}).translation||[],rt=((K.find(jt=>jt.language==="es")||K[0]||{}).text||"").trim(),Et=+((tt.activePeriod||[])[0]||{}).start||0;U.some(jt=>jt.txt===rt)||U.push({id:Z.id,fams:y,stops:P,txt:rt,when:Et?new Date(Et*1e3).toISOString().slice(0,19):"",src:"Renfe"})}}if(H.adif&&Date.now()-H.adifAt<15*6e4)for(let[B,Z]of(H.adif.items||[]).entries()){let tt=(Z.t?Z.t+". ":"")+Z.txt,y=new Set,P=new Set,K=x(tt);for(let rt of tt.matchAll(/\b(R\d{1,2}[NS]?|R3a|RG1|RL\d|RT\d)\b/g))$[rt[1]]&&y.add(rt[1]);b.forEach((rt,Et)=>{rt.fams.size&&rt.n.length>4&&K.includes(x(rt.n))&&(P.add(Et),y.size||rt.fams.forEach(jt=>y.add(jt)))}),U.some(rt=>rt.txt===tt)||U.push({id:"A"+B,fams:y,stops:P,txt:tt,when:H.adif.upd||"",src:"Adif",lvl:Z.lvl})}if(R.status==="fulfilled"||C.status==="fulfilled"||H.adif){H.alerts=U.sort((B,Z)=>Z.when>B.when?1:-1);try{ug()}catch{}}ue(),Rh(),X=0,a()}let Zt=()=>H.okVP&&Date.now()-H.okVP<9e4;function ue(){let u=p("#rtst"),_=p("#mode");if(_){let E=!!Zt()&&fe().live;_.classList.toggle("on",E),_.classList.toggle("pre",!E),_.textContent=E?"En directo":he.cur?"Repaso real":"Previsi\xF3n",_.classList.toggle("past",!!he.cur),_.title=he.cur?`Retrasos reales de la foto de las ${he.cur.sn.t} (se toma una cada 15 min)`:""}if(!u)return;H.url?H.err?u.textContent="No se pudo conectar con el puente ("+H.err+"). Se usa el horario.":Zt()?u.innerHTML=`Conectado \xB7 ${H.vp.size} trenes con posici\xF3n real y ${H.delays.size} con retraso \xB7 actualizado a las ${new Date(H.okVP).toLocaleTimeString("es-ES",{hour:"2-digit",minute:"2-digit",second:"2-digit"})}`:u.textContent="Conectando\u2026":u.textContent=H.err||"Sin puente: trenes seg\xFAn horario oficial.";let S=p("#rturl");S&&S._shown!==H.url&&(S.value=H.url,S._shown=H.url)}p("#rtsave").onclick=()=>{let u=p("#rturl").value.trim().replace(/\/+(alerts|trip_updates|vehicle_positions)\.json$/,"").replace(/\/+$/,"");if(u&&!/^https?:\/\//.test(u)&&(u="https://"+u),!u){H.err="pega la direcci\xF3n de tu puente",ue();return}H.url=u;try{localStorage.setItem("rod_rt",u)}catch{}H.ok=0,H.err="",ue(),ce()},p("#rtoff").onclick=()=>{H.url=Mt;try{localStorage.removeItem("rod_rt")}catch{}h._h="",ce()},setInterval(ce,2e4),setTimeout(ce,50);let he={snap:null,key:""};function W(){let u=fe();if(u.live||!ee.hoy||!ee.hoy.snaps||Tt&&se==null)return null;let _=mt(new Date).min;if(u.min>_+1)return null;let S=null;for(let E of ee.hoy.snaps){if(!E.d)continue;let C=Xd(E.t);C<=u.min+1&&(!S||C>S.m)&&(S={m:C,sn:E})}return S&&u.min-S.m<=25?S:null}let Ae=u=>{{let C=Eh(u.num);if(C&&C.cx&&fe().live)return"X"}let _=he.cur;if(_){if(_.sn.x&&_.sn.x.includes(u.tid))return"X";let C=_.sn.d[u.tid];return C??0}if(!Zt())return null;let S=H.delays.get(u.tid),E=H.vp.get(u.tid);return S==="X"?S:E&&E.pre&&E.preDl>=1?Math.max(typeof S=="number"?S:0,E.preDl*60):S??null},$t=new Set(k);try{let u=JSON.parse(localStorage.getItem("rod_lines")||"null");Array.isArray(u)&&u.some(_=>k.includes(_))&&($t.clear(),u.forEach(_=>k.includes(_)&&$t.add(_)))}catch{}let I=new us,v=new us,Q=new qi({vertexColors:!0,linewidth:3.2,depthTest:!1,transparent:!0}),st=new qi({color:16777215,linewidth:6,depthTest:!1,transparent:!0,opacity:.9}),ct=new nr(I,Q),Ct=new nr(v,st);Ct.renderOrder=20,ct.renderOrder=21,ct.frustumCulled=Ct.frustumCulled=!1,e.add(Ct,ct);function Rt(u){let _=u[0]/o+l,S=u[1]/o+c;for(let E of A){if(E._bb===void 0){let R=1e9,O=1e9,U=-1e9,B=-1e9;for(let Z of E.rings||[]){let tt=Z[0]||[];for(let y=0;y<tt.length;y+=2)tt[y]<R&&(R=tt[y]),tt[y]>U&&(U=tt[y]),tt[y+1]<O&&(O=tt[y+1]),tt[y+1]>B&&(B=tt[y+1])}E._bb=[R,O,U,B]}let C=E._bb;if(!(_<C[0]||_>C[2]||S<C[1]||S>C[3]))for(let R of E.rings||[]){let O=R[0]||[],U=!1;for(let B=0,Z=O.length,tt=Z-2;B<Z;tt=B,B+=2){let y=O[B+1],P=O[tt+1];y>S!=P>S&&_<(O[tt]-O[B])*(S-y)/(P-y)+O[B]&&(U=!U)}if(U)return!0}}return!1}let ut=!1;function _t(){ut||!A.length||(ut=!0,b.forEach(u=>{u.ext=!Rt(u.w)}),T.forEach(u=>{u.ext=!Rt(u.p[0])&&!Rt(u.p[u.p.length-1])&&!Rt(u.p[u.p.length>>1])}))}let Dt=()=>{let u=new Set($t.size<=2?$t:[]);try{V&&V.fam&&u.add(V.fam)}catch{}return u},re="";function Ot(){_t();let u=[],_=[],S=new Set,E=new pe,C=new pe("#d2d0d0"),R=Dt();re=[...R].join();for(let O of k)if($t.has(O))for(let U of q[O]){if(S.has(U))continue;S.add(U);let B=T[U].p;E.set($[O]),T[U].ext&&!R.has(O)&&E.lerp(C,.55);for(let Z=0;Z+1<B.length;Z++)u.push(B[Z][0],B[Z][1],F,B[Z+1][0],B[Z+1][1],F),_.push(E.r,E.g,E.b,E.r,E.g,E.b)}u.length||(u.push(0,0,-50,0,0,-50),_.push(0,0,0,0,0,0)),I.setPositions(u),I.setColors(_),v.setPositions(u),a()}Ot();let Nt=u=>new bn({uniforms:{dpr:{value:Math.min(devicePixelRatio||1,2)},border:{value:new pe(u)}},vertexShader:"attribute float size; attribute vec3 fill; attribute float bw; varying vec3 vF; varying float vS; varying float vB; uniform float dpr; void main(){ vF=fill; vS=size*dpr; vB=bw*dpr; gl_PointSize=vS; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"uniform vec3 border; varying vec3 vF; varying float vS; varying float vB; void main(){ float r=length(gl_PointCoord*2.0-1.0)*vS*0.5; float R=vS*0.5; if(r>R) discard; float a=1.0-smoothstep(R-1.2,R,r); vec3 c = r>R-vB ? border : vF; gl_FragColor=vec4(c,a); }",transparent:!0,depthTest:!1}),Qt=new cn,ae=b.length,xe=new Float32Array(ae*3),Y=new Float32Array(ae*3),Pt=new Float32Array(ae),pt=new Float32Array(ae);b.forEach((u,_)=>{xe[_*3]=u.w[0],xe[_*3+1]=u.w[1],xe[_*3+2]=F,Y.set([1,1,1],_*3),Pt[_]=6,pt[_]=1.6}),Qt.setAttribute("position",new qe(xe,3)),Qt.setAttribute("fill",new qe(Y,3)),Qt.setAttribute("size",new qe(Pt,1)),Qt.setAttribute("bw",new qe(pt,1));let Ut=Nt("#1d2330"),Vt=new Ys(Qt,Ut);Vt.renderOrder=22,Vt.frustumCulled=!1,e.add(Vt);function xt(){let u=r.dist<45,_=Dt();b.forEach((S,E)=>{let C=[...S.fams].some(O=>$t.has(O)),R=S.ext&&![...S.fams].some(O=>_.has(O))&&E!==J;Pt[E]=C?E===J?13:R?3:u?8:5:0,pt[E]=E===J?3:1.6}),Qt.attributes.size.needsUpdate=!0,Qt.attributes.bw.needsUpdate=!0}let Jt=600,Xt=new cn,ze=new Float32Array(Jt*3),De=new Float32Array(Jt*3),Fn=new Float32Array(Jt),Qn=new Float32Array(Jt);Xt.setAttribute("position",new qe(ze,3)),Xt.setAttribute("fill",new qe(De,3)),Xt.setAttribute("size",new qe(Fn,1)),Xt.setAttribute("bw",new qe(Qn,1));let Ns=new Float32Array(Jt);Xt.setAttribute("ang",new qe(Ns,1));let bh=new bn({uniforms:{dpr:{value:Math.min(devicePixelRatio||1,2)},border:{value:new pe("#ffffff")}},vertexShader:"attribute float size; attribute vec3 fill; attribute float bw; attribute float ang; varying vec3 vF; varying float vS; varying float vB; varying float vA; uniform float dpr; void main(){ vF=fill; vS=size*dpr; vB=bw*dpr; vA=ang; gl_PointSize=vS; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"uniform vec3 border; varying vec3 vF; varying float vS; varying float vB; varying float vA; void main(){ vec2 p=gl_PointCoord*2.0-1.0; float r=length(p)*vS*0.5; float R=vS*0.5; if(r>R) discard; float a=1.0-smoothstep(R-1.2,R,r); vec3 c = r>R-vB ? border : vF; if(vA<50.0){ vec2 d=vec2(sin(vA),-cos(vA)); vec2 n=vec2(cos(vA),sin(vA)); float qy=-dot(p,d); float qx=dot(p,n); float w=(qy+0.66)/0.98*0.48; if(qy>-0.66 && qy<0.32 && abs(qx)<w) c=vec3(1.0); } else if(vA>70.0 && vA<80.0){ if(abs(p.y)<0.36 && abs(abs(p.x)-0.2)<0.1) c=vec3(1.0); } else if(vA>80.0 && vA<90.0){ if((abs(p.x)<0.11 && p.y>-0.5 && p.y<0.16) || length(p-vec2(0.0,0.38))<0.12) c=vec3(1.0); } gl_FragColor=vec4(c,a); }",transparent:!0,depthTest:!1}),lr=new Ys(Xt,bh);lr.renderOrder=24,lr.frustumCulled=!1,e.add(lr);let pi=new cn,cr=new Float32Array(Jt*3),ea=new Float32Array(Jt*3),na=new Float32Array(Jt),Pi=new Float32Array(Jt);pi.setAttribute("position",new qe(cr,3)),pi.setAttribute("fill",new qe(ea,3)),pi.setAttribute("size",new qe(na,1)),pi.setAttribute("bw",new qe(Pi,1));let Us=new Ys(pi,Nt("#ffffff"));Us.renderOrder=23,Us.frustumCulled=!1,e.add(Us);function ia(u,_){let S=T[u],E=_*S.L,C=0,R=S.c.length-1;for(;R-C>1;){let tt=C+R>>1;S.c[tt]<=E?C=tt:R=tt}let O=S.c[R]-S.c[C]||1,U=(E-S.c[C])/O,B=S.p[C],Z=S.p[R];return[B[0]+(Z[0]-B[0])*U,B[1]+(Z[1]-B[1])*U]}let sa=u=>u*u*(3-2*u)*.35+u*.65;function ts(u,_){let S=u.pat.t,E=u.pat.stops.length,C=S[2*E-2];if(_<S[1]-2||_>C+1)return null;if(_<=S[1])return{w:b[u.pat.stops[0]].w,at:0,next:0,moving:!1};for(let R=0;R<E-1;R++){let O=S[2*R+1],U=S[2*R+2],B=S[2*R+3];if(_<=U){let Z=U>O?(_-O)/(U-O):1;return{w:ia(u.pat.segs[R],sa(g(Z,0,1))),at:-1,next:R+1,prev:R,moving:!0}}if(_<=B)return{w:b[u.pat.stops[R+1]].w,at:R+1,next:R+1,moving:!1}}return{w:b[u.pat.stops[E-1]].w,at:E-1,next:E-1,moving:!1}}function ra(u){let _=t.days.indexOf(u.ymd),S=[];if(_<0)return{k:_,out:S};let E=(C,R)=>{for(let O of C){if(!$t.has(O.fam))continue;let U=Ae(O);if(U==="X")continue;let B=(U||0)/60,Z=u.min+R-O.t0-B;if(Z<-2||Z>O.pat.t[O.pat.t.length-2]+1)continue;let tt=ts(O,Z);tt&&S.push({tr:O,p:tt,rel:Z,dl:B,live:U!=null})}};return E(j[_],0),_>0&&E(j[_-1],1440),{k:_,out:S}}function hr(u,_,S,E){let C=u.pat.stops[0],R=_.dep0,O=null,U=(Z,tt)=>{for(let y of Z||[]){let P=y.pat.stops,K=P.length;if(P[K-1]!==C||y===u)continue;let rt=y.t0+y.pat.t[2*(K-1)]-tt;if(rt>R+5||rt<R-120)continue;let Et=Wt(y.pat),jt=Fe(Et,_.w,-1,1e9);if(jt.err>.6)continue;let ie=Et.stopD,yt=y.pat.t,St=ie.findIndex(Ee=>Ee>jt.d);St<0&&(St=K-1);let oe=St===0?yt[1]:yt[2*St-1]+(ie[St]>ie[St-1]?(jt.d-ie[St-1])/(ie[St]-ie[St-1]):1)*(yt[2*St]-yt[2*St-1]),ge=S-(y.t0+oe-tt);ge<-5||ge>120||(!O||Math.abs(ge)<Math.abs(O.prevDl))&&(O={prevTr:y,dPrev:jt.d,prevDl:ge,arrO:rt+Math.max(0,ge)})}};if(U(j[E],0),E>0&&U(j[E-1],1440),!O)return{prevTr:null,preDl:0};let B=Math.max(R,O.arrO+3);return{...O,depEst:B,preDl:Math.max(0,B-R)}}function Po(u,_,S){let E=u.pat.t,C=_.length;if(!(S>=0))return S<0?_[0]:null;for(let R=0;R<C;R++)if(S<=E[2*R+1]){if(S>=E[2*R]||R===0)return _[R];let O=E[2*R-1],U=E[2*R];return _[R-1]+(_[R]-_[R-1])*(U>O?(S-O)/(U-O):1)}return _[C-1]}let aa=performance.now();function Mh(){let u=[],_=Date.now()/1e3,S=performance.now(),E=Math.min(1,(S-aa)/1e3);aa=S;for(let C of H.vp.values()){let R=ot.get(C.tid),O=R?R.fam:C.fam;if(O&&$[O]&&!$t.has(O))continue;let U=H.delays.get(C.tid),B=typeof U=="number"?U/60:0,Z=Math.max(0,_-C.ts);C.mvTs!==C.ts&&((!C.mvW||Math.hypot(C.w[0]-C.mvW[0],C.w[1]-C.mvW[1])>.025)&&(C.mvW=C.w,C.mvAt=C.ts),C.mvTs=C.ts),C.still=C.ts-(C.mvAt||C.ts);let tt=C.w,y=-1;if(R){let K=Wt(R.pat),rt=K.stopD;if(C.dObs==null||C.obsAt!==C.ts){let St=Fe(K,C.w,-1,1e9);C.dObs=St.d,C.err=St.err,C.obsAt=C.ts}let Et=fe(),jt=t.days.indexOf(Et.ymd),ie=R.day===jt-1?1440:0,yt=R.t0+R.pat.t[1]-ie;if(C.pre=Et.min+B<yt-1&&(C.dObs>rt[0]+.35||C.err>.6)&&!(C.st==="STOPPED_AT"&&C.sid===b[R.pat.stops[0]].id),C.dep0=yt,C.pre){if(C.atStop=-1,C.next=0,y=0,C.disp=null,C.prevAt!==C.ts&&(C.prevAt=C.ts,Object.assign(C,hr(R,C,Et.min,jt))),C.prevTr){let St=Wt(C.prevTr.pat);tt=Me(St,C.dPrev)}}else if(C.err<=.6){let St=rt.findIndex(Ee=>Ee>C.dObs+.08);St<0&&(St=rt.length-1);let oe=rt.reduce((Ee,un,Ne)=>Math.abs(un-C.dObs)<Math.abs(rt[Ee]-C.dObs)?Ne:Ee,0);C.atStop=Math.abs(rt[oe]-C.dObs)<.16?oe:-1,C.next=St,y=St;let ge=C.dObs;if(C.st==="STOPPED_AT"&&C.atStop>=0)ge=rt[C.atStop];else if(St>0){let Ee=(R.pat.t[2*St]-R.pat.t[2*St-1])*60,un=Ee>0?(rt[St]-rt[St-1])/Ee:0,Ne=fe(),le=t.days.indexOf(Ne.ymd),Fi=R.day===le-1?1440:0,dr=Po(R,rt,Ne.min+Fi-R.t0-B),Qe=C.dObs+un*Math.min(Z,60);dr!=null&&(Qe=Math.min(Qe,Math.max(C.dObs,dr))),ge=Math.max(C.dObs,Math.min(rt[St]-.03,Qe))}C.disp==null||Math.abs(C.disp-ge)>1.2?C.disp=ge:ge>C.disp&&(C.disp+=(ge-C.disp)*Math.min(1,E*1.5)),tt=Me(K,C.disp)}else if(C.err>2){let St=fe(),oe=t.days.indexOf(St.ymd),ge=R.day===oe-1?1440:0,Ee=ts(R,St.min+ge-R.t0-B);Ee&&(tt=Ee.w,C.est=!0,y=Ee.next),C.atStop=-1,C.next=Ee?Ee.next:-1}else C.atStop=-1,C.next=-1}let P=C.pre?"":C.st==="STOPPED_AT"&&C.atStop>=0||C.atStop>=0&&C.still>30?"st":C.still>=90?"via":"";u.push({tr:R,v:C,w:tt,stop:P,p:{w:tt},fam:O||"?",c:R?R.c:$[O]||"#6b7385",dl:B,live:!0,real:!0,idx:y,age:Z,cancel:U==="X"})}return u}let ti=new Map,sn=!1,Ke=!1,mi="",w=[],X=0,nt=null,V=null,J=-1,At=!1,qt=0,Bt="";function te(u){let _=Tt>0||Zt()&&se==null||!!V,S=_?50:250;if(u-X<S)return!1;X=u,[...Dt()].join()!==re&&(Ot(),xt());{let y=W(),P=y?y.sn.t:"";he.cur=y,P!==he.key&&(he.key=P,ue()),!y&&!fe().live&&!ee.at&&On()}let E=fe(),C=Zt()&&E.live,R=C?{k:t.days.indexOf(E.ymd),out:Mh()}:ra(E);w=R.out;let O=new pe,U=0,B=0;for(let y of w){if(U>=Jt)break;ze[U*3]=y.p.w[0],ze[U*3+1]=y.p.w[1],ze[U*3+2]=F+.02;let P=null;if(y.real&&y.v.pre&&y.v.prevTr)P=Me(Wt(y.v.prevTr.pat),y.v.dPrev+.35);else if(y.real&&y.tr&&!y.v.pre&&y.v.err<=.6&&y.v.disp!=null&&!(y.v.st==="STOPPED_AT"&&y.v.atStop>=0))P=Me(Wt(y.tr.pat),y.v.disp+.35);else if(!y.real&&y.p.moving){let ie=y.tr.pat.t,yt=y.p.prev,St=ie[2*yt+1],oe=ie[2*yt+2],ge=oe>St?(y.rel-St)/(oe-St):1;P=ia(y.tr.pat.segs[yt],Math.min(1,sa(g(ge,0,1))+.04))}let K=y.real?!!y.stop:!y.p.moving;if(y.broke=Bd(y),y.broke)Ns[U]=85;else if(K)Ns[U]=75;else if(P){let ie=Do(y.p.w),yt=Do(P),St=yt[0]-ie[0],oe=yt[1]-ie[1];Ns[U]=Math.hypot(St,oe)>.05?Math.atan2(St,-oe):99}else Ns[U]=99;O.set(y.c||y.tr.c),De[U*3]=O.r,De[U*3+1]=O.g,De[U*3+2]=O.b;let rt=y.tr?y.tr===V:V&&V.vtid===y.v.tid;Fn[U]=rt?22:r.dist<45?17:14,Qn[U]=rt?3.5:2.2;let Et=y.real&&y.stop==="via"||!!y.broke,jt=y.cancel||y.broke?[.86,.15,.15]:y.dl>10?[.86,.15,.15]:y.dl>5?[.92,.48,.05]:y.dl>=1?[.98,.8,.08]:[.09,.64,.29];(y.live&&y.dl>=5||rt||Et)&&(cr[B*3]=y.p.w[0],cr[B*3+1]=y.p.w[1],cr[B*3+2]=F+.01,ea.set(rt?jt:Et?[.86,.15,.15]:[.98,.45,.09],B*3),na[B]=Fn[U]+(rt?16+5*Math.sin(u/220):Et?10+3*Math.sin(u/400):8),Pi[B]=rt?2:3,B++),U++}if(Xt.setDrawRange(0,U),pi.setDrawRange(0,B),["position","fill","size","bw"].forEach(y=>{Xt.attributes[y].needsUpdate=!0,pi.attributes[y].needsUpdate=!0}),Xt.attributes.ang.needsUpdate=!0,nt){let y=w.find(P=>P.tr===nt);if(y){let P=0,K=innerHeight,rt=h.style.display!=="none"&&!h.classList.contains("min")?h.getBoundingClientRect():null,Et=p("#rc").getBoundingClientRect();innerWidth<=640&&(rt&&(P=rt.bottom),K=Math.min(K,Et.top));let jt=P+(K-P)/2,ie=jt-innerHeight/2,yt=2*s.dist*Math.tan(17.5*Math.PI/180)/innerHeight;s.tx=y.p.w[0]-Math.sin(r.yaw)*ie*yt,s.ty=y.p.w[1]+Math.cos(r.yaw)*ie*yt}else Zt()&&fe().live&&(nt=null)}let Z=at(Math.floor(E.min+1e-6));Z!==Bt&&(Bt=Z,p("#ctime").textContent=Z),p("#ntr").textContent=String(w.length),p("#ntrl").textContent=C?"trenes de Rodalies con posici\xF3n real":"trenes previstos seg\xFAn el horario";{let y=$t.size<k.length?[...$t].sort(L).join(", "):"",P=p("#ccount"),K=he.cur?`\u23EA ${w.length} trenes con los retrasos reales de las ${he.cur.sn.t} \xB7 ${Object.values(he.cur.sn.d).filter(rt=>rt>=60).length} iban con retraso`:!E.live&&E.min<mt(new Date).min-1&&!Tt?`\u23EA Hora pasada seg\xFAn horario${ee.hoy&&ee.hoy.snaps&&ee.hoy.snaps.some(rt=>rt.d)?` \xB7 hay retrasos reales desde las ${ee.hoy.snaps.find(rt=>rt.d).t}`:" \xB7 a\xFAn no hay fotos con retrasos reales de hoy"}`:`\u{1F686} ${w.length} ${C?"trenes con posici\xF3n real":"trenes previstos"}${y?` <small>\xB7 ${f(y)}</small>`:""}`;P&&P._t!==K&&(P.innerHTML=K,P._t=K)}let tt=new Date;if(p("#cdate").textContent=E.live?"hora actual":Tt?"simulaci\xF3n \xD7"+Tt:hi?"en pausa":"hora elegida",R.k<0?p("#src").innerHTML=`<b style="color:#c2410c">Sin horarios para hoy.</b> Los datos guardados van del ${Ie(t.days[0])} al ${Ie(t.days[t.days.length-1])}: actualiza la app.`:C?p("#src").textContent=`En directo \xB7 posiciones de Renfe de hace ${Math.round(Math.max(0,Date.now()/1e3-Math.max(...[...H.vp.values()].map(y=>y.ts),0)))} s`:p("#src").innerHTML='<b style="color:#c2410c">No es tiempo real:</b> '+(H.url?"sin conexi\xF3n con el puente, ":"conecta el puente para ver los trenes reales; ")+"posiciones calculadas con el horario",E.live){let y=Math.round(E.min),P=p("#tsl");document.activeElement!==P&&(P.value=y<240?y+1440:y)}{let y=V?String(V.num||V.vtid||""):"";y!==te._sk&&(te._sk=y,tn(!0))}return tn(),u-qt>3e3&&(V||J>=0||At||Ke||mi)&&(qt=u,Ve()),ue(),!0}let ne=-1,ve=(()=>{try{return localStorage.getItem("rod_mun")==="1"}catch{return!1}})(),we=[],Gt=document.createElement("button");Gt.type="button",Gt.id="mbtn",Gt.title="Ver los nombres de los municipios",Gt.innerHTML="\u{1F3D8}\uFE0F<span>Municipios</span>",Gt.onclick=()=>{ve=!ve;try{localStorage.setItem("rod_mun",ve?"1":"")}catch{}Gt.classList.toggle("on",ve),a(),_n()},Gt.classList.toggle("on",ve),document.body.appendChild(Gt);let ke=A.slice().sort((u,_)=>_.pop-u.pop);function rn(u){if(u._a)return u._a;let _=null,S=0;for(let E of u.rings||[]){let C=E[0];if(!C)continue;let R=0,O=0,U=0;for(let B=0,Z=C.length;B<Z;B+=2){let tt=C[B],y=C[B+1],P=C[(B+2)%Z],K=C[(B+3)%Z],rt=tt*K-P*y;R+=rt,O+=(tt+P)*rt,U+=(y+K)*rt}Math.abs(R)>S&&(S=Math.abs(R),_=[O/(3*R),U/(3*R)])}return u._a=_?[(_[0]-l)*o,(_[1]-c)*o]:[u.cx,u.cy]}let Ze=u=>u>=1e5?1:u>=2e4?2:u>=5e3?3:4,$e=[0,7.6,6.7,6,5.4],gn=[0,17,15,13,12],Yt=u=>u.replace(/^(.*), (el|la|les|els|los|las)$/i,"$2 $1").replace(/^(.*), l'$/i,"l'$1");function _n(){let u=s.tilt<.06&&r.tilt<.08;Gt.classList.toggle("show",u);let _=0;if(ve&&u){let S=[...document.querySelectorAll(".plab, .slab")].filter(R=>R.offsetParent!==null||R.style.display==="block").map(R=>{let O=R.getBoundingClientRect();return[O.left-2,O.top-2,O.right+2,O.bottom+2]}).filter(R=>R[2]>R[0]),E=r.dist,C=E>160?5e4:E>130?2e4:E>105?8e3:E>80?3e3:E>62?800:0;for(let R of ke){let O=Ze(R.pop);if(R.pop<C)break;let U=rn(R);if(Bn.set(U[0],U[1],F).project(n),Math.abs(Bn.x)>1.02||Math.abs(Bn.y)>1.02)continue;let B=(Bn.x*.5+.5)*innerWidth,Z=(-Bn.y*.5+.5)*innerHeight,tt=Yt(R.name),y=tt.length*$e[O]+8,P=gn[O],K=[B-y/2,Z-P/2,B+y/2,Z+P/2];if(S.some(Et=>K[0]<Et[2]&&Et[0]<K[2]&&K[1]<Et[3]&&Et[1]<K[3]))continue;S.push(K);let rt=we[_]||(we[_]=Object.assign(document.createElement("div"),{className:"mlab"}));rt.isConnected||document.body.appendChild(rt),rt._n!==tt&&(rt.textContent=tt,rt._n=tt),rt._t!==O&&(rt.className="mlab t"+O,rt._t=O),rt.style.transform=`translate(${Math.round(B)}px,${Math.round(Z)}px) translate(-50%,-50%)`,rt.style.display="block",_++}}for(;_<we.length;_++)we[_].style.display="none"}let ee={at:0,hoy:null,ayer:null,err:""},$n="https://raw.githubusercontent.com/elMonoAmelio/catalunya-survival/stats/";function On(){Date.now()-ee.at<5*6e4||(ee.at=Date.now(),Promise.all(["hoy","ayer","hist"].map(u=>fetch($n+u+".json",{cache:"no-store"}).then(_=>_.ok?_.json():null).catch(()=>null))).then(([u,_,S])=>{ee.hoy=u,ee.ayer=_,ee.hist=S,ee.tr=null,ee.err=u?"":"sin datos",Ke&&(h._h="",Ve()),tn(!0)}))}function Li(u){let _={};for(let E of u&&u.snaps||[])for(let C of E.r||[]){let R=/^\d+[A-Z](\d+)/.exec(C);R&&(_[R[1]]=_[R[1]]||[]).push(Math.max(0,E.d&&E.d[C]||0)/60)}let S={};for(let E in _){let C=_[E].sort((R,O)=>R-O);S[E]=Math.round(C[C.length>>1])}return S}function Di(u){if(!ee.tr){let S=new Map;for(let E of ee.hist&&ee.hist.days||[])S.set(E.day,E.tr);for(let E of[ee.ayer,ee.hoy])if(E&&E.day&&!S.has(E.day)){let C=Li(E);Object.keys(C).length&&S.set(E.day,C)}ee.tr=S}let _=[...ee.tr.values()].map(S=>S[String(u)]).filter(S=>S!=null);return _.length?{n:_.length,late:_.filter(S=>S>=5).length,avg:_.reduce((S,E)=>S+E,0)/_.length}:null}let Ce=u=>u>=90?"g":u>=80?"y":u>=65?"w":"b",He={g:"#16a34a",y:"#eab308",w:"#ea7a0c",b:"#dc2626"},gi=u=>u>10?He.b:u>5?He.w:u>=1?He.y:He.g,Oe=u=>(u>=.05?"+":"")+(Math.round(u*10)/10).toString().replace(".",",")+" min";function Xn(u,_,S){return`<div class="sbars">${u.map(E=>`<div class="sbar" title="${f(E.tip||"")}"><span class="sl">${E.lab}</span><span class="st"><i style="width:${Math.max(2,Math.round(E.w*100))}%;background:${E.c}"></i></span><b class="sv" style="color:${E.c===He.y?"#a16207":E.c}">${E.val}</b></div>`).join("")}</div>`}function ms(u){if(u=(u||[]).filter(U=>U.n>=10),!u||u.length<2){let U=u&&u[0];return U?`<p class="snote">Primera foto del d\xEDa a las ${U.t}: ${Math.round(U.ok/U.n*100)} % puntuales de ${U.n} trenes. El gr\xE1fico aparece con la segunda foto.</p>`:'<p class="snote">A\xFAn no hay fotos de hoy.</p>'}let _=300,S=92,E=22,C=U=>E+U*(_-E-6)/(u.length-1),R=U=>6+(100-U)/100*(S-22),O=u.map((U,B)=>[C(B),R(U.n?U.ok/U.n*100:100),U]);return`<svg class="schart" viewBox="0 0 ${_} ${S}" role="img" aria-label="Porcentaje de trenes puntuales a lo largo del d\xEDa">
      ${[100,75,50].map(U=>`<line x1="${E}" x2="${_-4}" y1="${R(U)}" y2="${R(U)}" class="gl"/><text x="2" y="${R(U)+3}" class="ax">${U}%</text>`).join("")}
      <polyline points="${O.map(U=>U[0].toFixed(1)+","+U[1].toFixed(1)).join(" ")}" class="ln"/>
      ${O.map(([U,B,Z])=>`<circle cx="${U.toFixed(1)}" cy="${B.toFixed(1)}" r="5" class="pt"><title>${Z.t} \xB7 ${Z.n?Math.round(Z.ok/Z.n*100):100}% puntuales \xB7 ${Z.n} trenes \xB7 ${Z.d5} con +5 min \xB7 retraso medio ${Oe(Z.avg)}${Z.nd?` \xB7 ${Z.nd} sin dato`:""}</title></circle>`).join("")}
      <text x="${E}" y="${S-3}" class="ax">${u[0].t}</text><text x="${_-4}" y="${S-3}" class="ax" text-anchor="end">${u[u.length-1].t}</text></svg>`}function Lo(){On();let u=fe(),_=w.filter(U=>U.real&&Zt()&&u.live),S=_.filter(U=>H.delays.has(U.v.tid)),E=S.length,C=_.length-E,R='<div class="tc sts" style="--c:#1d2330"><button class="x" data-cx>\xD7</button><h3>\u{1F4CA} Estad\xEDsticas</h3>';if(E){let U=S.filter(yt=>yt.dl<3).length,B=S.filter(yt=>yt.dl>=5).length,Z=S.filter(yt=>yt.stop==="via").length,tt=Math.round(U/E*100);R+=`<small>Ahora mismo \xB7 ${E} trenes con retraso publicado por Renfe${C?` \xB7 ${C} sin dato (no se cuentan)`:""}</small><div class="kpis">
        <div class="kpi ${Ce(tt)}"><b>${tt}%</b><span>puntuales</span></div>
        <div class="kpi ${Ce(100-B/E*100*2)}" title="${Math.round(B/E*100)} % de los trenes"><b>${B}</b><span>con 5 min<br>o m\xE1s</span></div>
        <div class="kpi ${Z===0?"g":Z<=2?"w":"b"}"><b>${Z}</b><span>detenidos<br>en la v\xEDa</span></div></div>`;let y=new Map;S.forEach(yt=>{let St=yt.fam,oe=y.get(St)||{n:0,ok:0,sum:0};oe.n++,oe.ok+=yt.dl<3,oe.sum+=Math.max(0,yt.dl),y.set(St,oe)});let P=[...y].filter(([yt])=>$[yt]).sort((yt,St)=>yt[1].ok/yt[1].n-St[1].ok/St[1].n||St[1].sum/St[1].n-yt[1].sum/yt[1].n),K=P.filter(([,yt])=>yt.ok<yt.n),rt=P.filter(([,yt])=>yt.ok===yt.n);R+="<h4>Puntualidad por l\xEDnea ahora</h4>"+(K.length?"":'<p class="snote">\u2713 Todas las l\xEDneas van puntuales.</p>')+Xn(K.map(([yt,St])=>({lab:qn(yt),w:St.ok/St.n,c:He[Ce(St.ok/St.n*100)],val:`${Math.round(St.ok/St.n*100)}% <small>${Oe(St.sum/St.n)}</small>`,tip:`${yt}: ${St.ok} de ${St.n} trenes puntuales \xB7 retraso medio ${Oe(St.sum/St.n)}`})))+(rt.length?`<p class="snote">Puntuales al 100 %: ${rt.map(([yt])=>qn(yt)).join(" ")}</p>`:"");let Et=new Map;S.forEach(yt=>{if(!yt.tr||yt.v.next==null||yt.v.next<0||yt.v.pre)return;let St=yt.tr.pat.stops[yt.v.next],oe=Et.get(St)||{n:0,sum:0};oe.n++,oe.sum+=Math.max(0,yt.dl),Et.set(St,oe)});let jt=[...Et].filter(([,yt])=>yt.sum/yt.n>=1).sort((yt,St)=>St[1].sum/St[1].n-yt[1].sum/yt[1].n).slice(0,8),ie=jt.length?jt[0][1].sum/jt[0][1].n:1;R+='<h4>Estaciones con m\xE1s retraso ahora</h4><small class="snote">Retraso medio de los trenes que van a llegar a cada estaci\xF3n</small>'+(jt.length?Xn(jt.map(([yt,St])=>({lab:`<span class="sn" data-gs="${yt}">${f(b[yt].n)}</span>`,w:St.sum/St.n/ie,c:gi(St.sum/St.n),val:`${Oe(St.sum/St.n)} <small>${St.n} ${St.n===1?"tren":"trenes"}</small>`,tip:`${b[yt].n}: ${St.n} trenes llegando con ${Oe(St.sum/St.n)} de media`}))):'<p class="snote">\u2713 Ning\xFAn tren llega con retraso ahora mismo.</p>')}else R+='<p class="snote">Las estad\xEDsticas en directo necesitan el puente de tiempo real conectado.</p>';let O=ee.hoy;R+=`<button type="button" class="hmore" data-cols>${ei.on?"\u25BE Quitar columnas del mapa":"\u{1F3D9}\uFE0F Ver el retraso de cada estaci\xF3n en 3D"}</button>`;{Ih("");let U=[...Os.m].filter(([B,Z])=>$[B]&&Z[0]>=3).map(([B,Z])=>[B,Z[1]/Z[0]]).sort((B,Z)=>B[1]-Z[1]);U.length&&(R+='<h4>\xBFDe qu\xE9 trenes da posici\xF3n Renfe?</h4><small class="snote">De los trenes que seg\xFAn horario circulan ahora, cu\xE1ntos se ven en directo. Si es bajo, en esa l\xEDnea el mapa usa el horario y no avisamos de \xABsin se\xF1al\xBB.</small>'+Xn(U.slice(0,8).map(([B,Z])=>({lab:qn(B),w:Z,c:He[Ce(Z*100)],val:`${Math.round(Z*100)}%`,tip:`${B}: ${Math.round(Z*100)} % de los trenes en circulaci\xF3n con posici\xF3n de Renfe`}))))}{let U=tt=>{let y=(tt&&tt.snaps||[]).filter(rt=>rt.n),P=y.reduce((rt,Et)=>rt+Et.n,0),K=y.reduce((rt,Et)=>rt+Et.ok,0);return P?K/P*100:null},B=U(ee.hoy),Z=U(ee.ayer);B!=null&&(R+=`<div class="cmp"><span>Hoy <b class="${Ce(B)}">${Math.round(B)} %</b> puntuales</span>${Z!=null?`<span>Ayer <b class="${Ce(Z)}">${Math.round(Z)} %</b></span><span>${B>=Z?"\u25B2 mejor":"\u25BC peor"} que ayer</span>`:""}</div>`)}if(R+="<h4>Hoy, a lo largo del d\xEDa</h4>",O&&O.snaps){R+=ms(O.snaps);let U=Object.entries(O.st||{}).map(([tt,y])=>[kt.get(tt),y]).filter(([tt,y])=>tt!=null&&y.n>=3).map(([tt,y])=>[tt,y.sum/y.n/60,y]).filter(tt=>tt[1]>=1).sort((tt,y)=>y[1]-tt[1]).slice(0,8);if(U.length){let tt=U[0][1];R+='<h4>Estaciones con m\xE1s retraso hoy</h4><small class="snote">Retraso medio de los trenes al llegar \xB7 al menos 3 mediciones</small>'+Xn(U.map(([y,P,K])=>({lab:`<span class="sn" data-gs="${y}">${f(b[y].n)}</span>`,w:P/tt,c:gi(P),val:`${Oe(P)} <small>m\xE1x +${Math.round(K.max/60)}</small>`,tip:`${b[y].n}: ${K.n} mediciones hoy (foto cada 15 min) \xB7 ${K.d5} con 5 min o m\xE1s \xB7 peor +${Math.round(K.max/60)} min`})))}let B=Object.entries(O.lines||{}).filter(([tt,y])=>$[tt]&&y.n>=3).sort((tt,y)=>tt[1].ok/tt[1].n-y[1].ok/y[1].n);B.length&&(R+="<h4>L\xEDneas hoy</h4>"+Xn(B.map(([tt,y])=>({lab:qn(tt),w:y.ok/y.n,c:He[Ce(y.ok/y.n*100)],val:`${Math.round(y.ok/y.n*100)}% <small>${Oe(y.sum/y.n/60)}</small>`,tip:`${tt} hoy: ${Math.round(y.ok/y.n*100)}% de las mediciones puntuales \xB7 peor retraso +${Math.round(y.max/60)} min`}))));let Z=O.upd?(Date.now()-Date.parse(O.upd))/6e4:0;R+=`<small class="snote">${Z>40?`<b>\xDAltima foto hace ${Math.round(Z)} min</b> (GitHub a veces retrasa las tareas autom\xE1ticas) \xB7 `:""}Foto cada 15 min del tiempo real de Renfe \xB7 actualizado ${f((O.upd||"").slice(11,16))} \xB7 ${(O.note||"").includes("Solo cuentan")?"solo cuentan los trenes con dato de retraso":"las fotos anteriores a las 12:20 contaban como puntuales los trenes sin dato"}</small>`}else R+=`<p class="snote">${ee.at?"El hist\xF3rico de hoy a\xFAn no est\xE1 disponible: se va reuniendo cada 15 min.":"Cargando\u2026"}</p>`;return R+"</div>"}function Wm(u){let _=fe(),S=w.filter(P=>(P.fam||P.tr&&P.tr.fam)===u),E=S.filter(P=>P.real),C=S.length,R=S.filter(P=>P.dl>=5).length,O=S.filter(P=>P.dl<3).length,U=S.filter(P=>P.stop==="via"||P.broke).length,B=H.alerts.filter(P=>P.fams.has(u)),Z=P=>{let K=P.tr;if(!K)return"";let rt=P.v;if(P.real&&rt){let jt=rt.next>=0?b[K.pat.stops[rt.next]].n:"";return rt.atStop>=0?`en ${b[K.pat.stops[rt.atStop]].n}`:jt?`hacia ${jt}`:""}let Et=P.p;return Et&&Et.next!=null&&Et.next>=0?`hacia ${b[K.pat.stops[Et.next]].n}`:""},tt=S.slice().sort((P,K)=>K.dl-P.dl).slice(0,40).map(P=>{let K=P.tr;return`<li class="go${ua({num:K?K.num:P.v.num,tid:K?K.tid:P.v.tid})?" sel":""}" data-gt="${f(K?K.num:P.v.num)}|${f(P.real?P.v.tid:K?K.tid:"")}"><b>${f(K?K.num:P.v.num)}</b><span>${K?Ni(b[K.pat.stops[K.pat.stops.length-1]].n,u):""} <small>${f(Z(P))}</small></span>${P.dl>=1?`<em class="dl ${es(P.dl)}">+${Math.round(P.dl)}</em>`:'<i class="via">en hora</i>'}</li>`}).join(""),y=Ih(u);return`<div class="tc sts" style="--c:${$[u]||"#1d2330"}"><button class="x" data-cx>\xD7</button><h3>${qn(u)} Estado de la l\xEDnea</h3><small>${_.live?`Ahora \xB7 ${C} trenes${E.length<C?` (${E.length} con posici\xF3n de Renfe)`:""}`:`Seg\xFAn horario a las ${at(_.min)}`}</small>
      <div class="kpis"><div class="kpi ${Ce(C?O/C*100:100)}"><b>${C?Math.round(O/C*100):100}%</b><span>puntuales</span></div><div class="kpi ${R?R/Math.max(1,C)>.2?"b":"w":"g"}"><b>${R}</b><span>con 5 min<br>o m\xE1s</span></div><div class="kpi ${U?"b":"g"}"><b>${U}</b><span>detenidos</span></div></div>
      ${B.length?$m(B):'<p class="snote">\u2713 Sin avisos de Rodalies para esta l\xEDnea</p>'}${y<.7?`<p class="snote">Renfe solo da posici\xF3n de ${Math.round(y*100)} % de los trenes de esta l\xEDnea: el resto se muestra seg\xFAn horario.</p>`:""}
      <small style="margin-top:6px">Trenes de m\xE1s a menos retraso \xB7 toca uno para verlo</small><ol>${tt||"<li><span>No hay trenes de esta l\xEDnea ahora</span></li>"}</ol>
      <div class="rtb"><button type="button" data-share>\u{1F4E4} Compartir estado</button></div></div>`}let $m=u=>`<div class="al">${u.slice(0,3).map(_=>`<p>\u26A0\uFE0F ${Vo(_)} ${f(_.txt)} <small>${Ho(_)}</small></p>`).join("")}</div>`,ei={on:!1,mesh:null};function Xm(){let u=ee.hoy,_=[];if(u&&u.st)for(let[S,E]of Object.entries(u.st)){let C=kt.get(S);C!=null&&E.n>=2&&_.push([C,E.sum/E.n/60,E.n])}if(!_.length){let S=new Map;w.forEach(E=>{if(!E.real||!E.tr||E.v.next==null||E.v.next<0||E.v.pre||!H.delays.has(E.v.tid))return;let C=E.tr.pat.stops[E.v.next],R=S.get(C)||[0,0];R[0]+=Math.max(0,E.dl),R[1]++,S.set(C,R)}),S.forEach((E,C)=>_.push([C,E[0]/E[1],E[1]]))}return _}function qm(){if(ei.mesh&&(e.remove(ei.mesh),ei.mesh.geometry.dispose(),ei.mesh.material.dispose(),ei.mesh=null),!ei.on){a();return}let u=Xm();if(!u.length){on("A\xFAn no hay datos de retraso por estaci\xF3n"),ei.on=!1;return}let _=new $a(.32,.32,1,16);_.rotateX(Math.PI/2),_.translate(0,0,.5);let S=new Xs({fog:!1}),E=new Va(_,S,u.length),C=new Be,R=new pe;u.forEach(([O,U],B)=>{let Z=.3+Math.min(U,40)*.3;C.makeScale(1,1,Z),C.setPosition(b[O].w[0],b[O].w[1],F),E.setMatrixAt(B,C),R.set(U>10?"#dc2626":U>5?"#ea7a0c":U>=1?"#eab308":"#16a34a"),E.setColorAt(B,R)}),E.renderOrder=25,E.frustumCulled=!1,e.add(E),ei.mesh=E,s.tilt<.5&&(s.tilt=.85),a()}let ur=document.createElement("button");ur.type="button",ur.id="sbtn",ur.title="Estad\xEDsticas de puntualidad",ur.innerHTML="\u{1F4CA}<span>Estad\xEDsticas</span>",ur.onclick=()=>{Ke=!Ke,Ke&&(sn=At=!1,ee.at=0),h._h="",Ve(),a()},document.body.appendChild(ur);function Ym(){r.dist<45!=ne<45&&(ne=r.dist,xt()),Zm(),_n()}let oa=[],Bn=new G;function Zm(){let u=r.dist<30,_=0;if(u){let S=[];for(let E=0;E<ae;E++)Pt[E]<4||(Bn.set(b[E].w[0],b[E].w[1],F).project(n),!(Bn.z>1||Math.abs(Bn.x)>1.05||Math.abs(Bn.y)>1.05)&&S.push([E,(Bn.x*.5+.5)*innerWidth,(-Bn.y*.5+.5)*innerHeight]));if(S.length<=70)for(let[E,C,R]of S){let O=oa[_]||(oa[_]=Object.assign(document.createElement("div"),{className:"slab"}));O.isConnected||document.body.appendChild(O),O.textContent=b[E].n,O.dataset.i=E,O.style.display="block",O.style.transform=`translate(${Math.round(C+8)}px,${Math.round(R-7)}px)`,_++}}for(;_<oa.length;_++)oa[_].style.display="none"}function Do(u){return Bn.set(u[0],u[1],F).project(n),[(Bn.x*.5+.5)*innerWidth,(-Bn.y*.5+.5)*innerHeight,Bn.z]}function Fd(u,_,S,E){let C=null,R=S*S;for(let O of w){let[U,B,Z]=Do(O.p.w);if(Z>1)continue;let tt=(U-u)**2+(B-_)**2;tt<R&&(R=tt,C={a:O})}if(C)return C;R=E*E;for(let O=0;O<ae;O++){if(!Pt[O])continue;let[U,B,Z]=Do(b[O].w);if(Z>1)continue;let tt=(U-u)**2+(B-_)**2;tt<R&&(R=tt,C={s:O})}return C}window.__rodTap=(u,_)=>{let S=null,E=1e9;for(let R of oa){if(R.style.display==="none")continue;let O=R.getBoundingClientRect();if(u>=O.left-4&&u<=O.right+4&&_>=O.top-4&&_<=O.bottom+4){let U=Math.abs(_-(O.top+O.bottom)/2)*4+(u-O.left);U<E&&(E=U,S=R)}}if(S)return window.__rodPickStation(+S.dataset.i),!0;let C=Fd(u,_,24,18);return C&&C.a?(sn=!1,At=!1,Ke=!1,V=C.a.tr||{vtid:C.a.v.tid},J=-1,nt=null,xt(),Ve(),X=0,a(),!0):C&&C.s!=null?(sn=!1,At=!1,Ke=!1,J=C.s,V=null,nt=null,xt(),Ve(),a(),!0):!1},window.__rodHover=(u,_)=>{let S=Fd(u,_,14,10);if(S&&S.a){let E=S.a,C=E.tr?b[E.tr.pat.stops[E.tr.pat.stops.length-1]].n:"";return`<b><span style="color:${E.c}">\u25A0</span> ${f(E.fam||E.tr&&E.tr.fam||"?")} \xB7 tren ${f(E.tr?E.tr.num:E.v.num)}</b><small>${C?"hacia "+f(C):""}${E.real?(E.dl>=1?` \xB7 <b style="color:#c2410c">+${Math.round(E.dl)} min</b>`:" \xB7 puntual")+" \xB7 en directo":" \xB7 previsto"}</small>`}return S&&S.s!=null?`<b>${f(b[S.s].n)}</b><small>${[...b[S.s].fams].sort(L).join(" \xB7 ")}</small>`:null},window.__rodPickStation=u=>{sn=At=Ke=!1,V=null,nt=null,J=u,xt(),h._h="",Ve(),a()};{let u=p("#rc"),_=()=>{let S=u.getBoundingClientRect().top;document.documentElement.style.setProperty("--mcsmax",Math.max(160,S-64-10)+"px")};try{new ResizeObserver(_).observe(u)}catch{}addEventListener("resize",_),setTimeout(_,300)}if("serviceWorker"in navigator&&location.protocol==="https:"){let u=!1,_=!!navigator.serviceWorker.controller;navigator.serviceWorker.addEventListener("controllerchange",()=>{_&&!u&&(u=!0,location.reload())}),navigator.serviceWorker.register("./sw.js").then(S=>{S.update().catch(()=>{}),document.addEventListener("visibilitychange",()=>{document.hidden||S.update().catch(()=>{})})}).catch(()=>{})}setTimeout(()=>{try{On()}catch{}},2500),setInterval(()=>{try{ee.at=0,On()}catch{}},15*6e4);let _i={mode:(()=>{try{return localStorage.getItem("rod_theme")||"auto"}catch{return"auto"}})()},la=matchMedia("(prefers-color-scheme: dark)");function wh(){let u=_i.mode==="dark"||_i.mode==="auto"&&la.matches;document.documentElement.classList.toggle("dark",u);for(let S=0;S<ae;S++)Y.set(u?[.06,.08,.11]:[1,1,1],S*3);Qt.attributes.fill.needsUpdate=!0,Ut.uniforms.border.value.set(u?"#e7ebf3":"#1d2330"),window.__mapTheme&&window.__mapTheme(u),Fs.textContent=_i.mode==="auto"?u?"\u{1F319}":"\u2600\uFE0F":_i.mode==="dark"?"\u{1F319}":"\u2600\uFE0F",Fs.title="Modo noche: "+{auto:"autom\xE1tico (como el m\xF3vil)",dark:"siempre activado",light:"desactivado"}[_i.mode];let _=document.querySelector("meta[name=theme-color]");_&&(_.content=u?"#0d1119":"#eef1f5"),a()}let Fs=document.createElement("button");Fs.type="button",Fs.id="tbtn",Fs.onclick=()=>{_i.mode=_i.mode==="auto"?la.matches?"light":"dark":_i.mode==="dark"?"light":"dark",_i.mode==="dark"===la.matches&&(_i.mode="auto");try{localStorage.setItem("rod_theme",_i.mode)}catch{}wh(),on(Fs.title)},document.body.appendChild(Fs),la.addEventListener&&la.addEventListener("change",wh),wh(),window.__rodTick=te,window.__rodFrame=Ym,window.__rodResize=()=>{Q.resolution.set(innerWidth,innerHeight),st.resolution.set(innerWidth,innerHeight)},window.__rodResize();let ci={st:-1,f:new Set},Od=u=>{let _=[...b[u].fams].sort(L);return`<div class="sfc">${_.length>1?`<button type="button" data-sf="" class="${ci.f.size?"":"on"}">Todas</button>`:""}${_.map(S=>`<button type="button" data-sf="${f(S)}" class="ln ${ci.f.size&&!ci.f.has(S)?"off":""}${$t.has(S)?"":" hid"}" style="--c:${$[S]}">${f(S)}</button>`).join("")}</div>${_.some(S=>!$t.has(S))?"<small>Las l\xEDneas apagadas en el filtro general no se muestran</small>":""}`},Jm=u=>{let _=(u||"#6b7385").replace("#",""),S=parseInt(_.slice(0,2),16),E=parseInt(_.slice(2,4),16),C=parseInt(_.slice(4,6),16);return(.299*S+.587*E+.114*C)/255>.62?"#1d2330":"#fff"},Ni=(u,_)=>{let S=$[_]||"#6b7385";return`<span class="dst" style="background:${S};color:${Jm(S)}" title="${f(_||"")}">${f(u)}</span>`},No=u=>{let _=b[u]&&b[u].id;return kn.st.includes(_)?"\u{1F3E0} ":fn.st.includes(_)?"\u{1F4BC} ":""},es=u=>u>10?"d-hi":u>5?"d-md":"d-lo",Km=/aver[ií]|incid[eè]ncia t[eè]cnica|incidencia t[eé]cnica|problema t[eè]cnic|t[eè]cnic[oa] del propi/i,ca={ref:null,m:new Map};function Eh(u){if(ca.ref!==H.alerts){ca.ref=H.alerts,ca.m=new Map;for(let _ of H.alerts){if(_.src!=="Rodalies")continue;let S=_.txt.match(/(?:a causa d[e']|per causa d[e']|debido a|degut a)\s+([^.]{4,140})/i);for(let E of _.txt.matchAll(/\b[Tt]ren\s+(\d{4,6})\b/g))ca.m.set(E[1],{why:S?S[1].trim().replace(/\s+/g," "):"",txt:_.txt,when:_.when,cx:/no circula|no circular[àa]|suprimi|anul[·.]?la|cancel[·.]?la|anulad|cancelad/i.test(_.txt)})}}return ca.m.get(String(u))||null}let ha={ref:null,m:new Map};function Bd(u){let _=String(u.tr?u.tr.num:u.v&&u.v.num||"");if(!_)return null;if(ha.ref!==H.alerts){ha.ref=H.alerts,ha.m=new Map;for(let E of H.alerts)if(E.src==="Rodalies"&&Km.test(E.txt))for(let C of E.txt.matchAll(/\b(\d{4,6})\b/g))ha.m.set(C[1],E)}let S=ha.m.get(_);return S?{why:"aviso",txt:S.txt}:u.real&&u.stop==="via"&&u.v.still>=300?{why:"via",min:Math.round(u.v.still/60)}:null}let ua=u=>{try{let _=V;return _?_.num!=null&&String(_.num)===String(u.num)||u.tid&&(_.tid===u.tid||_.vtid===u.tid):!1}catch{return!1}},kd=(u,_)=>{let S=M(u,_.min-1,_.min+240).sort((E,C)=>E.est-C.est).slice(0,6);return S.length?`<small style="margin-top:6px">\u{1F68C} Servicio por carretera (obras): autobuses que sustituyen al tren</small><ol>${S.map(E=>`<li><b>${at(E.est)}</b>${qn(E.fam)}<span>${Ni(E.dest,E.fam)}</span><i class="via">bus</i></li>`).join("")}</ol>`:""},xi=(()=>{try{return JSON.parse(localStorage.getItem("rod_fav")||"[]")}catch{return[]}})(),jm=()=>{try{localStorage.setItem("rod_fav",JSON.stringify(xi))}catch{}},zd=u=>!!u&&xi.some(_=>_.num===String(u.num)),an=(()=>{try{let u=JSON.parse(localStorage.getItem("rod_alarm")||"null");return u&&Date.now()-u.at<4*36e5?u:null}catch{return null}})(),Uo=()=>{try{localStorage.setItem("rod_alarm",JSON.stringify(an))}catch{}},Fo=(u,_)=>!!(an&&u&&an.num===String(u.num)&&an.sid===b[u.pat.stops[_]].id);function Th(u,_){try{navigator.vibrate&&navigator.vibrate([400,150,400,150,600])}catch{}on(u+" \xB7 "+_),"Notification"in window&&Notification.permission==="granted"&&(navigator.serviceWorker&&navigator.serviceWorker.getRegistration?navigator.serviceWorker.getRegistration():Promise.resolve(null)).then(S=>S?S.showNotification(u,{body:_,tag:"alarm",requireInteraction:!0,vibrate:[400,150,400,150,600],icon:"icons/icon-192.png"}):new Notification(u,{body:_})).catch(()=>{})}function Qm(){if(!an||an.done)return;let u=fe();if(!u.live)return;let _=t.days.indexOf(u.ymd),S=(j[_]||[]).find(B=>String(B.num)===an.num)||(j[_-1]||[]).find(B=>String(B.num)===an.num);if(!S)return;let E=S.pat.stops.findIndex(B=>b[B].id===an.sid);if(E<0)return;let C=Ae(S),R=typeof C=="number"?Math.max(0,C/60):0,O=S.day===_-1?1440:0,U=S.t0+S.pat.t[2*E]+R-O;if(U-u.min<-3){an.done=!0,Uo();return}U-u.min<=2&&(an.done=!0,Uo(),Th(`\u{1F689} Llegas a ${b[S.pat.stops[E]].n}`,`En unos ${Math.max(0,Math.round(U-u.min))} min (${at(U)}) \xB7 prep\xE1rate para bajar`))}function Ah(u,_){let S=+u.t.slice(0,2)*60+ +u.t.slice(3,5),E=j[_]||[],C=(U,B)=>U.t0+U.pat.t[2*B+1],R=null,O=11;for(let U of E){let B=U.pat.stops.findIndex(tt=>b[tt].id===u.sid);if(B<0||B===U.pat.stops.length-1)continue;let Z=Math.abs(C(U,B)-S)+(String(U.num)===u.num?-5:0)+(U.fam===u.fam?0:20)+(u.dest&&b[U.pat.stops[U.pat.stops.length-1]].id!==u.dest?3:0);Z<O&&(O=Z,R=U)}return R}let Oo=new Set;function tg(){if(!xi.length)return;let u=fe();if(!u.live)return;let _=t.days.indexOf(u.ymd);for(let S of xi){let E=Ah(S,_);if(!E)continue;let C=E.pat.stops.findIndex(tt=>b[tt].id===S.sid);if(C<0)continue;let R=E.t0+E.pat.t[2*C+1],O=Ae(E),U=typeof O=="number"?O/60:0,B=R-u.min;if(B<-2||B>60)continue;let Z=u.ymd+S.num+(O==="X"?"X":U>=10?10:U>=5?5:0);Oo.has(Z)||(O==="X"||U>=5?(Oo.add(Z),Th(`\u2B50 Tu tren de las ${at(R)} ${O==="X"?"est\xE1 cancelado":`va con +${Math.round(U)} min`}`,`${E.fam} ${E.num} desde ${b[E.pat.stops[C]].n}${O==="X"?"":` \xB7 saldr\xE1 hacia las ${at(R+U)}`}`)):B<=20&&!Oo.has(u.ymd+S.num+"ok")&&H.vp.has(E.tid)&&(Oo.add(u.ymd+S.num+"ok"),on(`\u2B50 Tu tren de las ${at(R)} va en hora`)))}}setInterval(()=>{try{Qm(),tg()}catch{}},15e3);let qn=u=>`<span class="ln" style="--c:${$[u]}">${f(u)}</span>`;function Vd(u,_){return _?u==="X"?'<span class="st late">Cancelado</span>':u>=60?`<span class="st late ${es(u/60)}">Retraso de ${Math.round(u/60)} min</span>`:'<span class="st ok">Puntual</span>':'<span class="st sch">Seg\xFAn horario \xB7 sin dato en directo</span>'}function Ve(){if(!V&&J<0&&!At&&!sn&&!Ke&&!mi){h.innerHTML="",h._h="",h.style.display="none",h.classList.remove("peek"),Uh();return}let u=fe(),_="",S=Zt()&&u.live,E=(y,P)=>H.alerts.filter(K=>[...K.fams].some(rt=>y.has(rt))||P!=null&&K.stops.has(P)),C=y=>y.length?`<div class="al">${y.slice(0,4).map(P=>`<p>\u26A0\uFE0F ${Vo(P)} ${[...P.fams].sort(L).slice(0,6).map(qn).join(" ")} ${f(P.txt)} <small>${Ho(P)}</small></p>`).join("")}${y.length>4?`<small>y ${y.length-4} avisos m\xE1s</small>`:""}</div>`:"",R=V&&S?w.find(y=>y.real&&(V.vtid?y.v.tid===V.vtid:y.tr===V)):null;if(mi&&!Ke&&!sn&&!At&&!V&&J<0)_=Wm(mi);else if(Ke)_=Lo();else if(sn)_=`<div class="tc" style="--c:#1d2330"><button class="x" data-cx>\xD7</button><h3>Novedades</h3><small>${f(p("#ver").textContent.replace(" \xB7 novedades y fuentes",""))}</small><ul class="chg">${p("#chg").innerHTML||"<li>Versi\xF3n de prueba</li>"}</ul>
        <h3 style="margin-top:14px">Fuentes</h3><ul class="fts">
        <li><b>Renfe Operadora</b> \xB7 horarios (GTFS), posici\xF3n de los trenes y retrasos (GTFS-RT) \xB7 <a href="https://data.renfe.com" target="_blank" rel="noopener">data.renfe.com</a> \xB7 licencia CC BY 4.0</li>
        <li><b>Rodalies de Catalunya</b> (Generalitat) \xB7 salidas con v\xEDa, cancelaciones y avisos \xB7 <a href="https://rodalies.gencat.cat" target="_blank" rel="noopener">rodalies.gencat.cat</a></li>
        <li><b>Adif</b> \xB7 incidencias en la infraestructura de Catalu\xF1a \xB7 <a href="https://www.adif.es/viajeros/estado-de-la-red" target="_blank" rel="noopener">estado de la red</a> \xB7 \xA9 Adif</li>
        <li><b>OpenStreetMap</b> \xB7 trazado de las v\xEDas \xB7 <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">\xA9 colaboradores de OpenStreetMap</a>, licencia ODbL</li>
        </ul><small>Los datos se muestran tal como los publican sus fuentes. Ante cualquier duda, manda lo que diga el operador en la estaci\xF3n.</small></div>`;else if(At){let y=H.alerts.filter(P=>[...P.fams].some(K=>$t.has(K))||!P.fams.size);_=`<div class="tc" style="--c:#c2410c"><button class="x" data-cx>\xD7</button><h3>Avisos e incidencias</h3><small>${y.length} avisos activos para las l\xEDneas que tienes visibles</small>${y.map(P=>`<div class="al"><p>${Vo(P)} ${[...P.fams].sort(L).map(qn).join(" ")} <small>${Ho(P)}</small></p><p>${f(P.txt)}</p></div>`).join("")||"<p>Sin avisos activos.</p>"}<small>Fuente: avisos oficiales de Rodalies de Catalunya, incidencias en la v\xEDa de Adif (gestor de la infraestructura)${H.alertsTs&&Date.now()/1e3-H.alertsTs<6*3600?" y de Renfe":` \xB7 los avisos GTFS de Renfe no se muestran: Renfe no los actualiza desde el ${H.alertsTs?new Date(H.alertsTs*1e3).toLocaleDateString("es-ES",{day:"numeric",month:"short"}):"\u2014"}`}</small></div>`}else if(R){let y=R.v,P=R.tr,K=le=>f(b[P.pat.stops[le]].n),rt=P?P.pat.stops.length:0,Et=kt.get(y.sid),jt=Et!=null?f(b[Et].n):f(y.sid),ie=P&&y.atStop>=0?K(y.atStop):"",yt=P&&y.next>=0?K(y.next):jt,St=P&&y.next>0?K(y.next-1):"",oe=R.broke||Bd(R),ge=oe?`<b class="stopv">\u26A0\uFE0F ${oe.why==="aviso"?"Tren averiado seg\xFAn Rodalies":`Posible aver\xEDa: detenido en la v\xEDa desde hace ${oe.min} min`}</b>${P&&St?` \xB7 entre ${St} y <b>${yt}</b>`:""}`:R.stop==="via"&&P?`<b class="stopv">\u23F8 Detenido</b> ${St?`entre ${St} y <b>${yt}</b>`:`antes de <b>${yt}</b>`} desde hace ${Math.max(1,Math.round(y.still/60))} min`:y.pre&&P?y.prevTr?`A\xFAn no ha empezado este viaje. Est\xE1 terminando el tren <b>${f(y.prevTr.num)}</b> hacia <b>${K(0)}</b>${y.prevDl>=1?` con <b>+${Math.round(y.prevDl)} min</b>`:""}: llega hacia las <b>${at(y.arrO)}</b> y saldr\xEDa hacia las <b>${at(y.depEst)}</b>${y.preDl>=1?` (horario ${at(y.dep0)})`:""}`:`A\xFAn no ha empezado este viaje: va hacia <b>${K(0)}</b>, de donde sale a las <b>${at(y.dep0+R.dl)}</b>`:y.st==="STOPPED_AT"&&ie?`Parado en <b>${ie}</b>`:ie&&y.next>=0&&y.atStop!==y.next?`Saliendo de <b>${ie}</b> hacia <b>${yt}</b>`:St?`Entre ${St} y <b>${yt}</b>`:`Hacia <b>${yt}</b>`,Ee=H.tu.get(y.tid),un=Ee&&Ee.next&&P&&y.next>=0&&Ee.next.sid===b[P.pat.stops[y.next]].id&&Ee.next.t?new Date(Ee.next.t*1e3).toLocaleTimeString("es-ES",{hour:"2-digit",minute:"2-digit"}):"",Ne=[];if(P){let le=R.idx>=0?R.idx:0,Fi=y.pre?Math.max(R.dl,y.preDl||0):R.dl,dr=Qe=>P.t0+P.pat.t[Qe]+Fi;for(let Qe=le;Qe<rt;Qe++)Ne.push(`<li class="${No(P.pat.stops[Qe])?"mine":""}${Fo(P,Qe)?" alm":""}"><b>${at(dr(Qe===0?1:2*Qe))}</b><span title="${K(Qe)}">${No(P.pat.stops[Qe])}${K(Qe)}</span>${Fi>=1?`<em class="dl ${es(Fi)}">${y.pre?"\u2248":""}+${Math.round(Fi)}</em>`:""}${Qe>0?`<button type="button" class="abtn" data-alarm="${Qe}" title="Av\xEDsame 2 min antes de llegar aqu\xED">${Fo(P,Qe)?"\u{1F514}":"\u{1F515}"}</button>`:""}</li>`)}_=`<div class="tc" style="--c:${R.c}"><button class="x" data-cx>\xD7</button><div>${qn(R.fam)}<b>Tren ${f(P?P.num:y.num)}</b> <span class="lv">\u25CF en directo</span></div>${P?`<h3 class="rt"><span class="o" title="${K(0)}">${K(0)}</span><span class="ar">\u2192</span>${Ni(b[P.pat.stops[rt-1]].n,P.fam)}</h3>`:""}
        <p>${ge}${un?` \xB7 prevista ${un}`:""}${y.plat&&y.st==="STOPPED_AT"&&ie?` \xB7 <b>v\xEDa ${f(y.plat)}</b>`:""}</p><p>${y.pre&&y.prevTr?y.preDl>=1?`<span class="st late">Saldr\xE1 con unos ${Math.round(y.preDl)} min de retraso (estimado)</span>`:'<span class="st ok">Le da tiempo a salir a su hora (estimado)</span>':Vd(H.delays.get(y.tid),H.delays.has(y.tid))}${(()=>{let le=P&&Di(P.num);return le&&le.n>=2?`<span class="thist">\u{1F4CA} \xDAltimos ${le.n} d\xEDas: ${le.late?`lleg\xF3 con 5 min o m\xE1s <b>${le.late} de ${le.n}</b>`:"<b>siempre puntual</b>"} \xB7 retraso t\xEDpico ${le.avg<.5?"0":"+"+Math.round(le.avg)} min</span>`:""})()}${(()=>{let le=P&&Eh(P.num);return le?`<span class="why" title="${f(le.txt)}">${le.why?"Motivo: "+f(le.why):"Rodalies ha publicado un aviso de este tren"}</span>`:""})()}</p>
        <small>${y.pre?`Renfe ya le pone el n\xFAmero de su pr\xF3ximo viaje. Posici\xF3n real enviada hace ${Math.round(R.age)} s`:y.est?"Renfe da una posici\xF3n que no encaja con su recorrido: se muestra donde deber\xEDa estar seg\xFAn el horario y su retraso":`Posici\xF3n enviada por Renfe hace ${Math.round(R.age)} s${R.age>120?" \xB7 <b>sin actualizar</b>":""}`}</small>
        ${Ne.length?`${R.dl>=1||y.pre&&y.preDl>=1?'<small style="margin-top:6px">Horas con el retraso actual</small>':""}<ol class="stops">${Ne.join("")}</ol>`:""}${C(E(new Set([R.fam])))}
        ${zo(P?P.num:y.num,"",R.fam)}${P?`<div class="rtb two"><button type="button" data-fav>${zd(P)?"\u2B50 Es tu tren de cada d\xEDa":"\u2606 Mi tren de cada d\xEDa"}</button><button type="button" data-follow>${nt===P?"Dejar de seguir":"Seguir este tren"}</button></div>`:""}</div>`}else if(V&&S)_=`<div class="tc" style="--c:#6b7385"><button class="x" data-cx>\xD7</button><h3>Tren ${f(V.num||V.vtid||"")}</h3><p>Renfe no da ahora la posici\xF3n de este tren: puede haber terminado su viaje, no haber salido o no estar circulando.</p></div>`;else if(V){let y=V,P=y.pat,K=P.stops.length,rt=Ae(y),Et=typeof rt=="number"?rt/60:0,jt=t.days.indexOf(u.ymd),ie=y.day===jt-1?1440:0,yt=u.min+ie-y.t0-Et,St=ts(y,yt),oe=le=>y.t0+P.t[le]+Et,ge=le=>f(b[P.stops[le]].n),Ee="Fuera de servicio ahora";St&&(Ee=St.moving?`Circulando hacia <b>${ge(St.next)}</b> \xB7 llega ${at(oe(2*St.next))}`:St.at===K-1?`Ha llegado a <b>${ge(K-1)}</b>`:`Parado en <b>${ge(St.at)}</b> \xB7 sale ${at(oe(2*St.at+1))}`);let un=St?St.next:0,Ne=[];for(let le=un;le<K;le++)Ne.push(`<li class="${No(P.stops[le])?"mine":""}${Fo(y,le)?" alm":""}"><b>${at(oe(2*le))}</b><span title="${ge(le)}">${No(P.stops[le])}${ge(le)}</span>${Et>=1?`<em class="dl ${es(Et)}">+${Math.round(Et)}</em>`:""}${le>0?`<button type="button" class="abtn" data-alarm="${le}" title="Av\xEDsame 2 min antes de llegar aqu\xED">${Fo(y,le)?"\u{1F514}":"\u{1F515}"}</button>`:""}</li>`);_=`<div class="tc" style="--c:${y.c}"><button class="x" data-cx>\xD7</button><div>${qn(y.fam)}<b>Tren ${f(y.num)}</b> <span class="pv">previsi\xF3n</span></div><h3 class="rt"><span class="o" title="${ge(0)}">${ge(0)}</span><span class="ar">\u2192</span>${Ni(b[y.pat.stops[K-1]].n,y.fam)}</h3>
        <p>${Ee}</p><p>${Vd(rt,rt!=null)}${(()=>{let le=Di(y.num);return le&&le.n>=2?`<span class="thist">\u{1F4CA} \xDAltimos ${le.n} d\xEDas: ${le.late?`lleg\xF3 con 5 min o m\xE1s <b>${le.late} de ${le.n}</b>`:"<b>siempre puntual</b>"} \xB7 retraso t\xEDpico ${le.avg<.5?"0":"+"+Math.round(le.avg)} min</span>`:""})()}</p><small>Sale ${at(y.t0+P.t[1])} \xB7 llega ${at(y.t0+P.t[2*K-2])} (horario)</small>
        ${Et>=1?'<small style="margin-top:6px">Horas con el retraso actual</small>':""}<ol class="stops">${Ne.join("")}</ol>${zo(y.num,"",y.fam)}<div class="rtb two"><button type="button" data-fav>${zd(y)?"\u2B50 Es tu tren de cada d\xEDa":"\u2606 Mi tren de cada d\xEDa"}</button><button type="button" data-follow>${nt===y?"Dejar de seguir":"Seguir este tren"}</button></div></div>`}else{let y=J,P=t.days.indexOf(u.ymd),K=[];ci.st!==y&&(ci.st=y,ci.f.clear());let rt=yt=>(!$[yt]||$t.has(yt))&&(!ci.f.size||ci.f.has(yt));if(P>=0){let yt=(St,oe)=>{for(let ge of St){if(!rt(ge.fam))continue;let Ee=ge.pat.stops.indexOf(y);if(Ee<0||Ee===ge.pat.stops.length-1)continue;let un=Ae(ge),Ne=typeof un=="number"?un/60:0,le=ge.t0+ge.pat.t[2*Ee+1]-oe;le+Ne<u.min-1||le>u.min+360||K.push({tr:ge,t:le,dl:Ne,d:un,on:H.vp.has(ge.tid),past:u.min>ge.t0+ge.pat.t[1]-oe+2})}};yt(j[P],0),P>0&&yt(j[P-1],1440)}K.sort((yt,St)=>yt.t+yt.dl-St.t-St.dl);let Et=b[y].id,jt=ti.get(Et);S&&H.url&&(!jt||Date.now()-jt.at>3e4)&&!jt?.loading&&(ti.set(Et,{...jt||{},loading:!0,at:jt?jt.at:0}),wt(H.url.replace(/\/+$/,""),"/departures.json?stationId="+Et).then(yt=>{ti.set(Et,{at:Date.now(),d:yt}),J===y&&(h._h="",Ve())}).catch(()=>ti.set(Et,{at:Date.now(),err:1})));let ie=S&&jt&&jt.d&&Array.isArray(jt.d.trains)?jt.d.trains:null;if(ie){let yt=new Map([...H.vp.values()].map(oe=>[String((ot.get(oe.tid)||{}).num||oe.num),oe])),St=ie.filter(oe=>rt((oe.line||{}).id||"")).slice(0,40).map(oe=>{let ge=(oe.departureDateHourSelectedStation||"").slice(11,16),Ee=(oe.line||{}).id||"",un=String(oe.commercialNumber||oe.technicalNumber||""),Ne=yt.get(un),le=Ne?H.delays.get(Ne.tid):null;return`<li class="go${ua({num:un,tid:Ne?Ne.tid:""})?" sel":""}" data-gt="${f(un)}|${Ne?f(Ne.tid):""}"><b>${f(ge)}</b>${$[Ee]?qn(Ee):`<span class="ln" style="--c:#6b7385">${f(Ee||"?")}</span>`}<span>${Ni((oe.destinationStation||{}).name||"",Ee)}${oe.trainObservations?` \xB7 <i>${f(oe.trainObservations)}</i>`:""}</span>${oe.trainCancelled?"<em>cancelado</em>":typeof le=="number"&&le>=60?`<em class="dl ${es(le/60)}">+${Math.round(le/60)}</em>`:""}${oe.platformSelectedStation?`<i class="via">v\xEDa ${f(oe.platformSelectedStation)}</i>`:""}${Ne?'<i class="lvd" title="circulando, posici\xF3n real">\u25CF</i>':'<i class="lvd ph">\u25CF</i>'}</li>`}).join("");_=`<div class="tc" style="--c:#1d2330"><button class="x" data-cx>\xD7</button><h3>${f(b[y].n)}</h3>${Od(y)}${zo("",b[y].id,"")}
          <small style="margin-top:6px">Pr\xF3ximas salidas oficiales de Rodalies \xB7 hora prevista \xB7 <span class="lvk">\u25CF</span> tren circulando</small>
          <ol>${St||"<li><span>Rodalies no anuncia salidas ahora mismo</span></li>"}</ol>${kd(y,u)}${C(E(b[y].fams,y))}<div class="rtb two"><button type="button" data-sethome="home">\u{1F3E0} Es mi casa</button><button type="button" data-sethome="work">\u{1F4BC} Es mi trabajo</button></div></div>`}else _=`<div class="tc" style="--c:#1d2330"><button class="x" data-cx>\xD7</button><h3>${f(b[y].n)}</h3>${Od(y)}${zo("",b[y].id,"")}
        <small style="margin-top:6px">${S&&H.url?"Cargando salidas oficiales\u2026 mientras, ":""}Pr\xF3ximas salidas${S?' \xB7 hora prevista con el retraso actual \xB7 <span class="lvk">\u25CF</span> tren circulando':" \xB7 previsi\xF3n seg\xFAn horario (sin tiempo real)"}</small>
        <ol>${K.slice(0,40).map(yt=>`<li class="go${ua({num:yt.tr.num,tid:yt.tr.tid})?" sel":""}" data-gt="${f(yt.tr.num)}|${f(yt.tr.tid)}"><b>${at(yt.t+yt.dl)}</b>${qn(yt.tr.fam)}<span>${Ni(b[yt.tr.pat.stops[yt.tr.pat.stops.length-1]].n,yt.tr.fam)}</span>${yt.d==="X"?"<em>cancelado</em>":yt.dl>=1?`<em class="dl ${es(yt.dl)}">+${Math.round(yt.dl)}</em>`:""}${S?yt.on?'<i class="lvd" title="circulando, posici\xF3n real">\u25CF</i>':yt.past?'<i class="nos" title="deber\xEDa haber salido y Renfe no da su posici\xF3n">sin se\xF1al</i>':'<i class="lvd ph">\u25CF</i>':""}</li>`).join("")||"<li><span>No hay salidas en las pr\xF3ximas 6 horas</span></li>"}</ol>${kd(y,u)}${C(E(b[y].fams,y))}<div class="rtb two"><button type="button" data-sethome="home">\u{1F3E0} Es mi casa</button><button type="button" data-sethome="work">\u{1F4BC} Es mi trabajo</button></div></div>`}let O=h.scrollTop;if(h._h!==_&&(h.innerHTML=_,h._h=_,h.scrollTop=O),h.style.display="flex",h.classList.remove("min"),Uh(),innerWidth<=640){let y=h.querySelector(".tc");if(y&&!y.querySelector(".mn")){let P=document.createElement("button");P.type="button",P.className="mn",P.setAttribute("aria-label","Encoger o ampliar la ficha"),P.textContent=h.classList.contains("peek")?"\u25B4":"\u25BE",P.onclick=K=>{K.stopPropagation(),h.classList.toggle("peek"),P.textContent=h.classList.contains("peek")?"\u25B4":"\u25BE",h.scrollTop=0},y.appendChild(P)}}else h.classList.remove("peek");let U=p("#rc");if(innerWidth<=640&&!U.classList.contains("min")&&!Ve.done&&(Ve.done=1,p("#rcgrab").click()),innerWidth<=640){let y=p("#inf").getBoundingClientRect().bottom;h.style.top=Math.round(y+8)+"px",h.style.width="calc(100vw - 76px)",h.style.maxHeight=Math.max(140,p("#rc").getBoundingClientRect().top-y-16)+"px"}else if(innerHeight<=500){let y=p("#inf").getBoundingClientRect().bottom;h.style.top=Math.round(y+8)+"px",h.style.width="min(290px, 40vw)",h.style.maxHeight=innerHeight-y-20+"px"}else h.style.top="",h.style.width=Ke?"390px":"300px",h.style.maxHeight="";let Z=h.querySelector("[data-cx]");Z&&(Z.onclick=y=>{if(y.stopPropagation(),Ve.done=0,Ke||sn||At||mi&&!V&&J<0){Ke=sn=At=!1,V||J>=0||(mi=""),h._h="",Ve(),a();return}At=!1,sn=!1,Ke=!1,V=null,J=-1,nt=null,xt(),Ve(),X=0,a()}),Wd(h),h.querySelectorAll("[data-alarm]").forEach(y=>y.onclick=P=>{P.stopPropagation();let K=V&&V.pat?V:ot.get(V&&V.vtid)||null;if(!K)return;let rt=+y.dataset.alarm,Et=b[K.pat.stops[rt]].id;an&&an.num===String(K.num)&&an.sid===Et?(an=null,on("Aviso de llegada quitado")):(an={num:String(K.num),sid:Et,at:Date.now()},on(`\u{1F514} Te aviso 2 min antes de llegar a ${b[K.pat.stops[rt]].n}`),"Notification"in window&&Notification.permission==="default"&&Notification.requestPermission()),Uo(),h._h="",Ve()});{let y=h.querySelector("[data-fav]");y&&(y.onclick=P=>{P.stopPropagation();let K=V&&V.pat?V:ot.get(V&&V.vtid)||null;if(!K)return;let rt=xi.findIndex(Et=>Et.num===String(K.num));if(rt>=0)xi.splice(rt,1),on("Quitado de tus trenes de cada d\xEDa");else{let Et=[...kn.st,...fn.st,...Kt.st],jt=K.pat.stops.find(ie=>Et.includes(b[ie].id))??K.pat.stops[0];xi.push({num:String(K.num),fam:K.fam,sid:b[jt].id,dest:b[K.pat.stops[K.pat.stops.length-1]].id,t:at(K.t0+K.pat.t[2*K.pat.stops.indexOf(jt)+1])}),on(`\u2B50 Te avisar\xE9 si el ${K.fam} de las ${xi[xi.length-1].t} desde ${b[jt].n} va con retraso`),"Notification"in window&&Notification.permission==="default"&&Notification.requestPermission()}jm(),h._h="",Ve(),tn(!0)})}{let y=h.querySelector("[data-share]");y&&(y.onclick=()=>{let P=mi,K=w.filter(ie=>(ie.fam||ie.tr&&ie.tr.fam)===P),rt=K.filter(ie=>ie.dl>=5).sort((ie,yt)=>yt.dl-ie.dl),Et=H.alerts.filter(ie=>ie.fams.has(P)),jt=`${P} a las ${at(fe().min)}: ${K.length} trenes, ${rt.length} con 5 min o m\xE1s${rt.length?" ("+rt.slice(0,4).map(ie=>`${ie.tr?ie.tr.num:ie.v.num} +${Math.round(ie.dl)}`).join(", ")+")":""}.${Et.length?" Aviso: "+Et[0].txt:" Sin avisos."}`;navigator.share?navigator.share({text:jt}).catch(()=>{}):(navigator.clipboard&&navigator.clipboard.writeText(jt),on("Copiado: "+jt.slice(0,60)+"\u2026"))})}{let y=h.querySelector("[data-cols]");y&&(y.onclick=()=>{ei.on=!ei.on,qm(),h._h="",Ve()})}h.querySelectorAll("[data-gs]").forEach(y=>y.onclick=()=>{let P=+y.dataset.gs;Ke=!1,window.__rodPickStation(P),Object.assign(s,{tx:b[P].w[0],ty:b[P].w[1],dist:Math.min(s.dist,20)}),a()}),h.querySelectorAll("[data-sf]").forEach(y=>y.onclick=P=>{P.stopPropagation();let K=y.dataset.sf;K?ci.f.has(K)?ci.f.delete(K):ci.f.add(K):ci.f.clear(),h._h="",Ve()}),h.querySelectorAll("[data-gt]").forEach(y=>y.onclick=()=>{let[P,K]=y.dataset.gt.split("|"),rt=ot.get(K);af({num:P,tid:H.vp.has(K)?K:"",tr:rt||null})}),h.querySelectorAll("[data-sethome]").forEach(y=>y.onclick=()=>Fh(J,y.dataset.sethome));let tt=h.querySelector("[data-follow]");tt&&(tt.onclick=()=>{nt=nt===V?null:V,nt?(s.dist=Math.min(s.dist,22),innerWidth<=640&&(h.classList.add("peek"),h.scrollTop=0,p("#rc").classList.contains("min")||p("#rcgrab").click())):h.classList.remove("peek"),h._h="",Ve(),a()})}window.__rodCard=Ve;try{let u=localStorage.getItem("rod_inf");(u==="mini"||u==null)&&p("#inf").classList.add("mini")}catch{}p("#inft").onclick=()=>{let u=p("#inf").classList.toggle("mini");try{localStorage.setItem("rod_inf",u?"mini":"")}catch{}(V||J>=0||At||sn)&&(h._h="",Ve())},p("#ver").onclick=()=>{sn=!0,Ke=!1,At=!1,h._h="",Ve()};let Bo={vacio:"\u{1F7E2}",lleno:"\u{1F7E0}",petado:"\u{1F534}",parado:"\u23F8\uFE0F",calor:"\u{1F975}",abordo:"\u26A0\uFE0F",gente:"\u{1F465}",retraso:"\u23F1\uFE0F",cancel:"\u2716\uFE0F",ascensor:"\u267F",via:"\u26A0\uFE0F"},eg=["vacio","lleno","petado","parado","calor","abordo"],ng=["gente","retraso","cancel","ascensor","via"],ig={vacio:"Va con sitio",lleno:"Va lleno",petado:"Muy lleno, cuesta subir",parado:"Parado sin moverse",calor:"Sin aire acondicionado",abordo:"Incidencia a bordo",gente:"Mucha gente esperando",retraso:"Anuncian retraso por megafon\xEDa",cancel:"Anuncian tren cancelado",ascensor:"Ascensor o escalera averiados",via:"Incidencia en la estaci\xF3n"},ko=u=>(H.tipos||ig)[u]||u,Ch=(u,_)=>(H.rep||[]).filter(S=>u&&S.num===String(u)&&!S.sid||_&&S.sid===String(_)&&!S.num||u&&_&&S.num===String(u)&&S.sid===String(_)),Hd=u=>{let _=Math.round((Date.now()+(H.repSkew||0)-u.at)/6e4);return _<1?"ahora":`hace ${_} min`},da=(()=>{try{return new Set(JSON.parse(localStorage.getItem("rod_votes")||"[]"))}catch{return new Set}})();function zo(u,_,S){if(!H.url||!H.repOk)return"";let E=Ch(u,_),C=u?eg:ng;return`<div class="crowd"><small>\u{1F465} Lo que dicen los viajeros${E.length?"":" \xB7 nadie ha avisado todav\xEDa"}</small>${E.map(R=>`<p><span>${Bo[R.kind]||"\u2022"} <b>${f(ko(R.kind))}</b> <small>${R.up>1?R.up+" viajeros \xB7 ":""}${Hd(R)}</small></span>${da.has(R.id)?"<small>\u2713</small>":`<button type="button" data-rv="${R.id}:1" title="Lo confirmo">\u{1F44D}</button><button type="button" data-rv="${R.id}:-1" title="Ya no es as\xED">\u{1F44E}</button>`}</p>`).join("")}
      <details><summary>${u?"\xBFVas en este tren? Avisa a los dem\xE1s":"\xBFEst\xE1s en la estaci\xF3n? Avisa a los dem\xE1s"}</summary><div class="ckb">${C.map(R=>`<button type="button" data-rk="${R}" data-rn="${f(u||"")}" data-rs="${f(_||"")}" data-rl="${f(S||"")}">${Bo[R]} ${f(ko(R))}</button>`).join("")}</div><small>An\xF3nimo \xB7 se borra solo en 90 min \xB7 sin texto libre</small></details></div>`}async function Gd(u,_){try{let E=await(await fetch(H.url.replace(/\/+$/,"")+_,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(u)})).json();if(!E.ok){on(E.err||"No se ha podido enviar");return}if(E.id){da.add(E.id);try{localStorage.setItem("rod_votes",JSON.stringify([...da].slice(-300)))}catch{}}on(_==="/vote"?"Gracias, voto guardado":E.n>1?`Gracias \xB7 ya sois ${E.n} avisando de lo mismo`:"Gracias, aviso enviado");let C=await wt(H.url.replace(/\/+$/,""),"/reports.json");C&&C.items&&(H.rep=C.items),h._h="",Ve(),tn(!0)}catch{on("Sin conexi\xF3n con el puente")}}function Wd(u){u.querySelectorAll("[data-rk]").forEach(_=>_.onclick=S=>{S.stopPropagation(),_.disabled=!0,Gd({kind:_.dataset.rk,num:_.dataset.rn,sid:_.dataset.rs,line:_.dataset.rl},"/report")}),u.querySelectorAll("[data-rv]").forEach(_=>_.onclick=S=>{S.stopPropagation();let[E,C]=_.dataset.rv.split(":");da.add(+E);try{localStorage.setItem("rod_votes",JSON.stringify([...da].slice(-300)))}catch{}Gd({id:+E,v:+C},"/vote")})}let $d=0;function on(u){let _=p("#toast");_||(_=document.createElement("div"),_.id="toast",document.body.appendChild(_)),_.textContent=u,_.className="on",clearTimeout($d),$d=setTimeout(()=>{_.className=""},2600)}function Vo(u){return u.src?`<b class="asrc ${u.src==="Adif"?"adif":""}">${u.src==="Adif"?"Adif \xB7 v\xEDa":f(u.src)}</b>`:""}function Ho(u){if(!u.when)return"";let[_,S]=u.when.split("T"),E=mt(new Date),C=E.ymd.slice(0,4)+"-"+E.ymd.slice(4,6)+"-"+E.ymd.slice(6,8);if(_===C&&S){let R=Math.round(E.min-(+S.slice(0,2)*60+ +S.slice(3,5)));return R<1?"ahora":R<60?`hace ${R} min`:`hoy a las ${S.slice(0,5)}`}return`${_.slice(8,10)}/${_.slice(5,7)}${S?" "+S.slice(0,5):""}`}function Rh(){let u=p("#alr");if(!u)return;let _=H.alerts.filter(S=>[...S.fams].some(E=>$t.has(E))).length;u.hidden=!_,u.textContent=`\u26A0\uFE0F ${_} aviso${_===1?"":"s"}`}{let u=p("#alrslot");u&&u.appendChild(p("#alr"))}p("#alr").onclick=()=>{sn=!1,Ke=!1,At=!0,Ve()},p("#wcopy").onclick=async()=>{let u=p("#wcode").textContent;try{await navigator.clipboard.writeText(u),p("#wcopy").textContent="Copiado \u2713"}catch{let S=document.createRange();S.selectNodeContents(p("#wcode"));let E=getSelection();E.removeAllRanges(),E.addRange(S),p("#wcopy").textContent="Selecciona y copia"}setTimeout(()=>p("#wcopy").textContent="Copiar c\xF3digo",2500)};let sg=kt.get("71801");function rg(u,_){let S=b[u].id,E=ti.get(S);!(Zt()&&H.url)||E&&(E.loading||Date.now()-E.at<3e4)||(ti.set(S,{...E||{},loading:!0,at:E?E.at:0}),wt(H.url.replace(/\/+$/,""),"/departures.json?stationId="+S).then(C=>{ti.set(S,{at:Date.now(),d:C}),_&&_()}).catch(()=>ti.set(S,{at:Date.now(),err:1})))}let Xd=u=>+u.slice(0,2)*60+ +u.slice(3,5),fa={k:-2,m:null};function ag(u){let _=t.days.indexOf(fe().ymd);if(fa.k!==_){fa.k=_,fa.m=new Map;for(let S of j[_]||[])fa.m.set(String(S.num),S)}return fa.m.get(String(u))||null}let Os={at:0,m:new Map};function Ih(u){if(Date.now()-Os.at>6e4){Os.at=Date.now(),Os.m=new Map;let S=fe(),E=t.days.indexOf(S.ymd);if(E>=0)for(let C of j[E]){let R=S.min-C.t0;if(R<C.pat.t[1]+3||R>C.pat.t[C.pat.t.length-2]-3)continue;let O=Os.m.get(C.fam)||[0,0];O[0]++,H.vp.has(C.tid)&&O[1]++,Os.m.set(C.fam,O)}}let _=Os.m.get(u);return _&&_[0]>=3?_[1]/_[0]:1}function Ph(u,_){let S=fe(),E=Zt()&&S.live&&!_,C=ti.get(b[u].id),R=[],O=new Map([...H.vp.values()].map(B=>[String((ot.get(B.tid)||{}).num||B.num),B]));if(E&&C&&C.d&&Array.isArray(C.d.trains))for(let B of C.d.trains){let Z=(B.departureDateHourSelectedStation||"").slice(11,16);if(!Z)continue;let tt=String(B.commercialNumber||B.technicalNumber||""),y=O.get(tt),P=y?H.delays.get(y.tid):null,K=Math.max(typeof P=="number"?Math.max(0,P/60):0,y&&y.pre&&y.preDl||0),rt=Xd(Z);rt<S.min-720&&(rt+=1440),R.push({sm:rt,est:rt+K,dl:K,fam:(B.line||{}).id||"",dest:(B.destinationStation||{}).name||"",destId:(B.destinationStation||{}).id||"",plat:B.platformSelectedStation||"",cancel:!!B.trainCancelled,obs:B.trainObservations||"",live:!!y,num:tt,tid:y?y.tid:"",tr:y&&ot.get(y.tid)||ag(tt),src:"oficial"})}else{let B=t.days.indexOf(S.ymd);if(B<0)return R;let Z=(tt,y)=>{for(let P of tt){let K=P.pat.stops.indexOf(u);if(K<0||K===P.pat.stops.length-1)continue;let rt=Ae(P),Et=typeof rt=="number"?Math.max(0,rt/60):0,jt=P.t0+P.pat.t[2*K+1]-y;if(jt+Et<S.min-1||jt>S.min+360)continue;let ie=P.pat.stops[P.pat.stops.length-1];R.push({sm:jt,est:jt+Et,dl:Et,fam:P.fam,dest:b[ie].n,destId:b[ie].id,plat:"",cancel:rt==="X",obs:"",live:H.vp.has(P.tid),num:P.num,tid:P.tid,tr:P,src:"horario"})}};Z(j[B],0),B>0&&Z(j[B-1],1440),B+1<t.days.length&&S.min>1080&&Z(j[B+1],-1440)}if(E){let B=new Set(R.map(y=>y.num)),Z=t.days.indexOf(S.ymd),tt=(y,P)=>{for(let K of y||[]){if(B.has(String(K.num)))continue;let rt=K.pat.stops.indexOf(u);if(rt<0||rt===K.pat.stops.length-1)continue;let Et=K.t0+K.pat.t[2*rt+1]-P;if(Et<S.min-45||Et>S.min+1||!H.vp.get(K.tid))continue;let ie=H.delays.get(K.tid),yt=typeof ie=="number"?Math.max(0,ie/60):0,St=K.pat.stops[K.pat.stops.length-1];R.push({sm:Et,est:Et+yt,dl:yt,fam:K.fam,dest:b[St].n,destId:b[St].id,plat:"",cancel:!1,obs:"",live:!0,num:K.num,tid:K.tid,tr:K,src:"horario"})}};Z>=0&&(tt(j[Z],0),Z>0&&tt(j[Z-1],1440));for(let y of R){let P=y.tid&&H.vp.get(y.tid),K=y.tr?y.tr.pat.stops.indexOf(u):-1;y.passed=!!(P&&K>=0&&!P.pre&&P.next!=null&&P.next>=0&&P.next>K&&P.atStop!==K),!y.passed&&y.live&&y.est<S.min&&(y.est=S.min,y.late=!0),y.passed&&(y.gone=!0)}}let U=R.filter(B=>B.gone?S.min-B.est<20:B.est>=S.min-.5).sort((B,Z)=>B.est-Z.est);{let B=U.filter(Z=>Z.gone);if(B.length>2){let Z=new Set(B.slice(0,B.length-2));U=U.filter(tt=>!Z.has(tt))}}if(!U.filter(B=>!B.gone).length&&R.length&&R[0].src==="oficial"&&!_)return Ph(u,!0);for(let B of U){let Z=B.num&&Eh(B.num);Z&&Z.cx&&(B.cancel=!0,B.cxWhy=Z.txt)}if(Zt()&&S.live){let B=t.days.indexOf(S.ymd);for(let Z of U){if(Z.live||Z.cancel||!Z.tr)continue;let tt=Z.tr.day===B-1?1440:Z.tr.day===B+1?-1440:0,y=Z.tr.t0+Z.tr.pat.t[1]-tt+(Z.dl||0);Z.ghost=S.min>y+3&&Ih(Z.fam)>=.7}}if(_||(U=U.concat(M(u,S.min-.5,S.min+360)).sort((B,Z)=>B.est-Z.est)),U.some(B=>B.src==="oficial")){let B=Math.max(...U.map(tt=>tt.sm)),Z=new Set(U.map(tt=>tt.num));U=U.concat(Ph(u,!0).filter(tt=>tt.sm>B&&!Z.has(String(tt.num))))}return U}let qd=(u,_,S,E)=>{let C={key:u,ico:_,name:S,st:[],i:0,walk:10,open:!1};try{let R=JSON.parse(localStorage.getItem("rod_"+u)||"null");R&&Object.assign(C,R)}catch{}return!C.st.length&&E&&(C.st=E),C},kn=qd("home","\u{1F3E0}","Casa",["79410","79412"]),fn=qd("work","\u{1F4BC}","Trabajo",null),Kt={key:"near",ico:"\u{1F4CD}",name:"Cerca de ti",st:[],i:0,walk:0,open:!1,dist:{},fix:0,err:""},pa=[Kt,kn,fn];try{Kt.homeW=JSON.parse(localStorage.getItem("rod_homew")||"null")}catch{}kn.open=!1,fn.open=!1;function Yd(u,_){let S=gt(u,_),E=gt(u,_+.009);return 1/Math.hypot(E[0]-S[0],E[1]-S[1])}function Lh(u){if(!navigator.geolocation){Kt.err="Este navegador no da la ubicaci\xF3n",tn(!0);return}navigator.geolocation.getCurrentPosition(_=>{let{longitude:S,latitude:E}=_.coords,C=gt(S,E),R=Yd(S,E),O=b.map((tt,y)=>[y,Math.hypot(tt.w[0]-C[0],tt.w[1]-C[1])*R]).filter(([tt])=>b[tt].fams.size).sort((tt,y)=>tt[1]-y[1]),U=O.filter(([,tt],y)=>y===0||tt<Math.max(2.5,O[0][1]*1.6)).slice(0,3),B=Kt.st[0]!==b[U[0][0]].id;Kt.w=C,Kt.k=R,Kt.acc=_.coords.accuracy!=null?_.coords.accuracy:999,Kt.st=U.map(([tt])=>b[tt].id),Kt.dist=Object.fromEntries(U.map(([tt,y])=>[b[tt].id,y])),Kt.fix=Date.now(),Kt.err="",B&&(Kt.i=0);let Z=[kn,fn].find(tt=>tt.st.includes(Kt.st[0])&&Kt.dist[Kt.st[0]]<1.5);tn(!0)},_=>{Kt.err=_.code===1?"Sin permiso de ubicaci\xF3n":"No se ha podido obtener la ubicaci\xF3n",tn(!0)},{enableHighAccuracy:!1,maximumAge:6e4,timeout:12e3})}let Zd=u=>Math.max(1,Math.round(u*1.3/.08));setTimeout(()=>Lh(!0),400);let Ui={fixes:[],tid:"",no:new Map,shown:""};function og(){let u=Ui.fixes;if(u.length<2)return;let _=u[u.length-1],S=u.slice().reverse().find(tt=>_.t-tt.t>=8e3&&_.t-tt.t<=9e4);if(!S)return;let E=Math.hypot(_.w[0]-S.w[0],_.w[1]-S.w[1])*_.k,C=_.spd!=null&&_.spd>0?_.spd*3.6:E/((_.t-S.t)/36e5);if(C<22||C>200)return;let R=[_.w[0]-S.w[0],_.w[1]-S.w[1]],O=null,U=1.2;for(let tt of w){if(!tt.tr)continue;let y=Math.hypot(tt.p.w[0]-_.w[0],tt.p.w[1]-_.w[1])*_.k;if(y>U)continue;let P=tt.real?tt.v.next:tt.p.next;if(P==null||P<0)continue;let K=b[tt.tr.pat.stops[P]].w,rt=[K[0]-tt.p.w[0],K[1]-tt.p.w[1]];if(rt[0]*R[0]+rt[1]*R[1]<=0)continue;let Et=String(tt.tr.num);(Ui.no.get(Et)||0)>Date.now()||(U=y,O=tt)}if(!O)return;let B=String(O.tr.num);if(Ui.tid===B)return;Ui.tid=B,sn=At=Ke=!1,J=-1,V=O.tr,nt=O.tr,Object.assign(s,{tx:O.p.w[0],ty:O.p.w[1],dist:Math.min(s.dist,22)}),innerWidth<=640&&(h.classList.add("peek"),p("#rc").classList.contains("min")||p("#rcgrab").click());{let tt=O.tr.pat.stops,y=O.real?O.v.next:O.p.next,P=[...kn.st,...fn.st],K=tt.findIndex((rt,Et)=>Et>=y&&P.includes(b[rt].id));K>0&&!(an&&an.num===B)&&(an={num:B,sid:b[tt[K]].id,at:Date.now()},Uo())}xt(),h._h="",Ve(),X=0,a();let Z=p("#onb");Z||(Z=document.createElement("div"),Z.id="onb",document.body.appendChild(Z)),Z.innerHTML=`\u{1F686} Parece que vas en el <b>${f(O.tr.fam)} ${f(O.tr.num)}</b> hacia ${f(b[O.tr.pat.stops[O.tr.pat.stops.length-1]].n)} \xB7 lo sigo${an&&an.num===B?` \xB7 te aviso al llegar a ${f(b[kt.get(an.sid)].n)}`:""} <button type="button" data-onb-no>No es este</button><button type="button" data-onb-x>\u2715</button>`,Z.className="on",Z.querySelector("[data-onb-no]").onclick=()=>{Ui.no.set(B,Date.now()+20*6e4),Ui.tid="",nt=null,V=null,h._h="",Ve(),Z.className=""},Z.querySelector("[data-onb-x]").onclick=()=>{Z.className=""},setTimeout(()=>{Z.className=""},15e3)}if(navigator.geolocation&&navigator.geolocation.watchPosition){let u=null,_=()=>{u==null&&(u=navigator.geolocation.watchPosition(E=>{let{longitude:C,latitude:R}=E.coords,O={t:E.timestamp||Date.now(),w:gt(C,R),k:Yd(C,R),spd:E.coords.speed};Ui.fixes.push(O),Ui.fixes=Ui.fixes.filter(U=>O.t-U.t<12e4);try{Zt()&&fe().live&&og()}catch{}},()=>{},{enableHighAccuracy:!0,maximumAge:5e3,timeout:2e4}))},S=()=>{u!=null&&(navigator.geolocation.clearWatch(u),u=null)};setTimeout(_,3e3),document.addEventListener("visibilitychange",()=>{document.hidden?S():(Ui.fixes=[],_())})}setInterval(()=>{!document.hidden&&(Date.now()-Kt.fix>11e4||pa.some(u=>u.goAt))&&Lh(!1)},3e4);let ns=u=>{try{localStorage.setItem("rod_"+u.key,JSON.stringify({st:u.st,i:u.i,walk:u.walk,open:u.open,hide:u.hide||"",goAt:u.goAt||0}))}catch{}},Dh=u=>u.st.length?kt.get(u.st[u.i]||u.st[0]):null;function Jd(u,_,S,E){if(E&&_.bus)return _.bstops.slice(1).some(O=>E.has(O))?"to":"out";if(E&&_.tr){let O=_.tr.pat.stops,U=O.indexOf(u);if(U>=0&&O.slice(U+1).some(B=>E.has(B)))return"to"}if(E&&_.tr)return"out";let C=kt.get(_.destId)??b.findIndex(O=>O.n===_.dest);if(C<0||C==null||S==null)return"otros";let R=O=>Math.hypot(b[O].w[0]-b[S].w[0],b[O].w[1]-b[S].w[1]);return R(C)<R(u)?"to":"out"}let ma=u=>u<1?"ahora":u<60?Math.round(u)+" min":Math.floor(u/60)+" h "+String(Math.round(u%60)).padStart(2,"0"),Kd=0,lg=/sin servicio|sense servei|suspend|interromp|interrump|no circula|no se puede garantizar|no es pot garantir/i;function cg(u,_,S){let E=Dh(u);if(u===Kt){if(E==null)return`<div class="hplace"><button type="button" class="hhead hnew" data-hloc><span class="hico">\u{1F4CD}</span><span class="htit"><b>Cerca de ti</b><small>${Kt.err?f(Kt.err)+" \xB7 toca para reintentar":"Buscando tu ubicaci\xF3n\u2026"}</small></span><span class="hchev">\u27F3</span></button></div>`;if([kn,fn].find(Ht=>Ht.st.includes(Kt.st[0])&&Kt.dist[Kt.st[0]]<1.5))return"";u.walk=Zd(Kt.dist[u.st[u.i]]||0)}if(E==null){let ft=Kt.st.length?kt.get(Kt.st[0]):null,Ht=u===fn?kn:fn,Ue=ft!=null&&!Ht.st.includes(Kt.st[0]);return`<div class="hplace"><div class="hhead hnew"><span class="hico">${u.ico}</span><span class="htit"><b>${u.name}</b><small>${Ue?`Est\xE1s en <b>${f(b[ft].n)}</b>`:"Elige tu estaci\xF3n"}</small></span>${Ue?`<button type="button" class="hpick" data-hnear="${u.key}">Usar esta</button>`:""}<button type="button" class="hpick alt" data-hset="${u.key}">${Ue?"Otra\u2026":"Elegir"}</button></div></div>`}rg(E,()=>tn(!0));let C=u===Kt?null:u===kn?fn:kn,R=C?Dh(C):null,O=R!=null&&R!==E?R:sg,U=R!=null&&R!==E?C===fn?"el trabajo":"casa":"Barcelona",B=b[E].fams,Z=new Set([...B].filter(ft=>$t.has(ft))),tt=Z.size<B.size,y=!1;Z.size||(Z=new Set(B),tt=!1,y=!0);let P=Kt.w?Math.hypot(b[E].w[0]-Kt.w[0],b[E].w[1]-Kt.w[1])*Kt.k:null,K=P!=null&&Date.now()-Kt.fix<10*6e4,rt=u===Kt||K&&P>3&&!u.goAt,Et=u!==Kt&&K&&P<.08&&Kt.acc<=40&&!(u===kn&&Kt.homeW&&Math.hypot(Kt.homeW[0]-Kt.w[0],Kt.homeW[1]-Kt.w[1])*Kt.k<.05),jt=u.goAt?(Date.now()-u.goAt)/6e4:null;jt!=null&&(jt>60||Et)&&(u.goAt=0,ns(u));let ie=!Et&&u!==Kt&&!!u.goAt,yt=ie?K&&P<=3?Zd(P):Math.max(0,u.walk-jt):0,St=Ph(E),oe=St.filter(ft=>!$[ft.fam]||$t.has(ft.fam)||y),ge=rt||Et?0:ie?yt:u.walk,Ee=H.alerts.filter(ft=>[...ft.fams].some(Ht=>Z.has(Ht))||ft.stops&&ft.stops.has(E)),un=Ee.some(ft=>lg.test(ft.txt)),Ne={to:[],out:[],otros:[],all:oe},le=U!=="Barcelona"?new Set(C.st.map(ft=>kt.get(ft)).filter(ft=>ft!=null)):null;oe.forEach(ft=>Ne[Jd(E,ft,O,le)].push(ft));let Fi="";if(le&&!Ne.to.length&&oe.length<St.length){let ft=St.filter(Ht=>!oe.includes(Ht)&&Jd(E,Ht,O,le)==="to");ft.length&&(Ne.to=ft,Fi=[...new Set(ft.map(Ht=>Ht.fam))].sort(L).join(", "))}let dr=ft=>{if(ft==="all")return"Pr\xF3ximas salidas \xB7 todas las direcciones";let Ht=Pe=>(Pe.find(wn=>wn.fam)||{}).fam;if(ft==="to")return"Hacia "+Ni(U==="Barcelona"?"Barcelona":b[O].n,Ht(Ne.to)||[...Z][0])+(U!=="Barcelona"?` <small>${U}</small>`:"");let Ue=[];for(let Pe of Ne[ft])Ue.some(wn=>wn[0]===Pe.dest)||Ue.push([Pe.dest,Pe.fam]);return Ue.length?"Hacia "+Ue.slice(0,2).map(([Pe,wn])=>Ni(Pe,wn)).join(" "):"Otros"},Qe=ft=>{let Ht=Ne[ft].find(En=>!En.cancel&&!En.gone&&En.est-_.min>=ge);if(!Ht){let En=Ne[ft].find(Sg=>!Sg.cancel);return En&&!rt?{cls:"v-no",big:"No llegas",small:`El pr\xF3ximo (${at(En.est)}) sale en ${ma(En.est-_.min)}: no da tiempo a pie`}:{cls:"v-no",big:"Sin trenes",small:"No hay salidas pr\xF3ximas en este sentido"}}let Ue=Ht.est-_.min-ge,Pe=rt||Et?"v-info":ie?Ue<1.5?"v-warn":"v-ok":Ue<1.5?"v-bad":Ue<5?"v-warn":"v-ok",wn=Ht.ghost?Ne[ft].find(En=>!En.cancel&&!En.ghost&&En.live&&En.est>Ht.est):null;return{cls:Pe,ghost:!!Ht.ghost,big:rt||Et?Ue<1?"Sale ahora":"Sale en "+ma(Ue):ie?Ue<1.5?"\xA1Date prisa!":"Llegas con "+ma(Ue)+" de margen":Ue<1.5?"\xA1Sal ya!":"Sal en "+ma(Ue),warn:Ht.ghost?`\u26A0\uFE0F Sin se\xF1al de Renfe: puede no pasar${wn?` \xB7 el siguiente en marcha sale a las ${at(wn.est)}`:""}`:un?"\u26A0\uFE0F Servicio afectado por una incidencia":"",small:`${Ht.bus?"\u{1F68C} autob\xFAs \xB7 ":""}${at(Ht.est)} \xB7 ${Ht.fam} a ${Ht.dest}${Ht.plat?" \xB7 v\xEDa "+Ht.plat:""}${Ht.dl>=1?` \xB7 +${Math.round(Ht.dl)} min`:""}${Ht.arr!=null?` \xB7 llegas a las ${at(Ht.arr)}`:""}`,x:Ht}},mg=le||new Set([O]),gg=ft=>{let Ht=ft.tr;if(!Ht)return null;let Ue=Ht.pat.stops,Pe=Ue.indexOf(E);if(Pe<0)return null;let wn=-1;for(let En=Pe+1;En<Ue.length;En++)if(mg.has(Ue[En])){wn=En;break}return wn<0?null:ft.est+(Ht.pat.t[2*wn]-Ht.pat.t[2*Pe+1])};Ne.to.forEach(ft=>{ft.arr=gg(ft)});let Bh=Ne.out.length?"out":"otros",ni=Qe("to"),kh=Qe(Bh);if(!rt&&u!==Kt&&ni.x&&pg(u,ni.x,b[E].n,ge),Et||u===Kt&&Kt.acc<=40&&(Kt.dist[u.st[u.i]]||9)<.08){for(let ft of[ni.x,kh.x].concat(u===Kt?[Qe("all").x]:[]))if(ft&&!ft.cancel&&ft.est-_.min<=2&&ft.est-_.min>-.5){let Ht="w"+ft.num+"|"+Math.round(ft.sm);Go.has(Ht)||(Go.add(Ht),Th(`\u{1F686} Llega tu tren \xB7 ${ft.fam} a ${ft.dest}`,`En unos ${Math.max(0,Math.round(ft.est-_.min))} min a ${b[E].n}${ft.plat?" \xB7 v\xEDa "+ft.plat:""}`))}}let cf=Zt()&&_.live,hf=Z.size===1,_g=ft=>{let Ht=ft.est-_.min;return rt?ft.cancel?"cx":Ht<0?"u-miss":"u-info":ft.cancel?"cx":Ht<ge?"u-miss":Ht<ge+1.5?"u-now":Ht<ge+5?"u-soon":"u-ok"},xg=ft=>{if(ft.gone)return`<li class="hr u-gone${ft.live?" on":""}${ua(ft)?" sel":""} go" data-dk="${S.push(ft)-1}" title="Ya ha salido: toca para ver d\xF3nde va"><span class="hrt"><b>${at(ft.est)}</b><small>sali\xF3 hace ${Math.max(1,Math.round(_.min-ft.est))} min</small></span><span class="hrd">${Ni((hf?"":ft.fam+" \xB7 ")+ft.dest,ft.fam)}<small class="hro">tren ${f(ft.num)}</small></span><span class="hrm">${ft.dl>=1?`<em class="dl ${es(ft.dl)}">+${Math.round(ft.dl)}</em>`:""}</span></li>`;let Ht=!ft.cancel&&ft.est-_.min<ge,Ue=Ch(ft.num,"");return`<li class="hr ${_g(ft)}${ft.live?" on":""}${ft.ghost?" gh":""}${ua(ft)?" sel":""}${xi.some(Pe=>{let wn=Ah(Pe,t.days.indexOf(_.ymd));return wn&&String(wn.num)===String(ft.num)})?" fav":""} go" style="--lc:${$[ft.fam]||"#6b7385"}" data-dk="${S.push(ft)-1}" title="${ft.cancel?"Cancelado":Ht?"No llegas a pie":"Ver este tren en el mapa"}"><span class="hrt"><b>${ft.cancel?"\u2715":Ht?at(ft.est):ma(ft.est-_.min)}</b><small>${ft.cancel?"cancelado":ft.late?"a\xFAn no ha salido":Ht?"no llegas":ft.ghost?'<i class="ghs" title="Deber\xEDa estar circulando y Renfe no da su posici\xF3n">sin se\xF1al</i>':at(ft.est)}</small></span><span class="hrd">${ft.bus?'<i class="bus" title="Autob\xFAs que sustituye al tren por obras">\u{1F68C}</i>':""}${Ni((hf?"":ft.fam+" \xB7 ")+ft.dest,ft.fam)}${Ue.length?`<i class="cr" title="${f(Ue.map(Pe=>ko(Pe.kind)).join(" \xB7 "))}">${Ue.slice(0,2).map(Pe=>Bo[Pe.kind]).join("")}</i>`:""}${ft.arr!=null?`<small class="hro">llegas a las ${at(ft.arr)}${(()=>{let Pe=ft.num&&Di(ft.num);return Pe&&Pe.n>=3&&Pe.late/Pe.n>=.5?` \xB7 <b class="slate">suele ir tarde (${Pe.late}/${Pe.n})</b>`:""})()}</small>`:""}${ft.obs?`<small class="hro">${f(ft.obs)}</small>`:""}</span><span class="hrm">${!ft.cancel&&ft.dl>=1?`<em class="dl ${es(ft.dl)}">+${Math.round(ft.dl)}</em>`:""}${ft.plat?`<i class="via">v\xEDa ${f(ft.plat)}</i>`:""}</span></li>`},_a=(ft,Ht,Ue)=>`<div class="hcol"><div class="hdir">${dr(ft)}${Ue?`<button type="button" class="hhide" data-hhide="${u.key}:${Ue}" title="Ocultar esta direcci\xF3n">\u2715</button>`:""}</div><div class="hv ${Ht.cls}${Ht.ghost?" gh":""}${Ht.x?" go":""}"${Ht.x?` data-dk="${S.push(Ht.x)-1}"`:""}><b>${Ht.big}</b><small>${f(Ht.small)}</small>${Ht.warn?`<span class="hvw">${f(Ht.warn)}</span>`:""}</div><ol>${Ne[ft].slice(0,(u.more?ft==="all"||u.hide?20:10:ft==="all"?7:u.hide?8:4)+Ne[ft].filter(Pe=>Pe.gone).length).map(xg).join("")||"<li><span>\u2014</span></li>"}</ol></div>`;if(u===Kt){let ft=Qe("all");var vg=ft.x?`${ft.big} \xB7 <b>${at(ft.x.est)}</b> ${f(ft.x.fam)} a ${f(ft.x.dest)}${ft.x.plat?" \xB7 v\xEDa "+f(ft.x.plat):""}`:ft.big}let yg=u===Kt?vg:ni.x?`${ni.big} \xB7 <b>${at(ni.x.est)}</b>${ni.x.arr!=null?` \u2192 llegas a las <b>${at(ni.x.arr)}</b>`:""} hacia ${f(U)}${ni.x.plat?" \xB7 v\xEDa "+f(ni.x.plat):""}`:"Sin trenes hacia "+f(U);return`<div class="hplace ${u.open?"open":""}"><button type="button" class="hhead" data-ht="${u.key}"><span class="hico">${u.ico}</span><span class="htit"><b>${f(b[E].n)}</b><small class="c${un?"bad":ni.cls.slice(2)}">${yg}</small></span><span class="hchev">\u25BE</span></button>`+(u.open?`
      <div class="hbody">
        ${u.st.length>1?`<div class="hst">${u.st.map((ft,Ht)=>{let Ue=kt.get(ft);return Ue==null?"":`<button type="button" data-hs="${u.key}:${Ht}" class="${Ht===u.i?"on":""}">${f(b[Ue].n)}</button>`}).join("")}</div>`:""}
        ${u===Kt?`<div class="hwalk">\u{1F4CD} A ${(()=>{let ft=Kt.dist[u.st[u.i]]||0;return ft<1?Math.round(ft*100)*10+" m":ft.toFixed(1).replace(".",",")+" km"})()} \xB7 unos <b>${u.walk} min</b> a pie</div>`:""}
        ${Et?`<div class="hwalk away">\u{1F689} Est\xE1s en la estaci\xF3n: horas de salida del tren \xB7 <a data-hnotst="${u.key}">no, estoy en casa</a></div>`:ie?`<div class="hwalk away">\u{1F6B6} De camino \xB7 te quedan unos <b>${Math.round(yt)} min</b>${K&&P<=3?" (seg\xFAn tu ubicaci\xF3n)":""} \xB7 <a data-hgo="${u.key}:0">cancelar</a></div>`:""}${rt&&u!==Kt?`<div class="hwalk away">\u{1F4CD} Est\xE1s a ${P<10?P.toFixed(1).replace(".",","):Math.round(P)} km: horas de salida del tren, sin contar el camino</div>`:""}<div class="hwalk"${rt||Et||ie?" hidden":""}><button type="button" class="hgo" data-hgo="${u.key}:1">\u{1F6B6} Ya he salido</button> Tardo <button type="button" data-hw="${u.key}:-1">\u2212</button><b>${ge} min</b><button type="button" data-hw="${u.key}:1">+</button> a pie hasta la estaci\xF3n</div>
        ${(()=>{let ft=xi.filter(Ht=>u.st.includes(Ht.sid));return ft.length?`<div class="hfav">${ft.map(Ht=>{let Ue=Ah(Ht,t.days.indexOf(_.ymd)),Pe=Ue&&oe.find(wn=>String(wn.num)===String(Ue.num));return`\u2B50 <b>${Ht.t}</b> ${f(Ht.fam)} ${Pe?Pe.cancel?'<em class="dl d-hi">cancelado</em>':Pe.gone?"ya ha salido":Pe.dl>=1?`<em class="dl ${es(Pe.dl)}">+${Math.round(Pe.dl)}</em> sale a las ${at(Pe.est)}`:'<b class="okc">en hora</b>':"<small>hoy no circula o a\xFAn falta</small>"}`}).join("<br>")}</div>`:""})()}
        ${tt?`<div class="hflt">Solo ${[...Z].sort(L).map(qn).join(" ")} \xB7 filtro de l\xEDneas activo${Fi?` \xB7 hacia ${U} se muestran ${Fi} (tu filtro no va hasta all\xED)`:""}</div>`:y?`<div class="hflt">El filtro (${[...$t].sort(L).slice(0,3).map(qn).join(" ")}) no pasa por aqu\xED: se ven todas tus l\xEDneas</div>`:""}
        ${Ee.length?`<div class="hal ${un?"bad":""}">\u26A0\uFE0F ${Vo(Ee[0])} ${f(Ee[0].txt)} <small>${Ho(Ee[0])}</small>${Ee.length>1?` <a data-hal>+${Ee.length-1} avisos</a>`:""}</div>`:`<div class="hok">\u2713 Sin avisos para ${[...Z].sort(L).join(", ")}</div>`}
        ${(()=>{let ft=u.st.flatMap(Ht=>Ch("",Ht));return ft.length?`<div class="hcr">${ft.slice(0,3).map(Ht=>`${Bo[Ht.kind]} <b>${f(ko(Ht.kind))}</b> <small>${Ht.up>1?Ht.up+" viajeros \xB7 ":""}${Hd(Ht)}</small>`).join("<br>")}</div>`:""})()}
        ${u===Kt?`<div class="hcols one">${_a("all",Qe("all"))}</div>`:u.hide==="out"?`<div class="hcols one">${_a("to",ni)}</div><a class="hshow" data-hshow="${u.key}">\u21BA Mostrar la otra direcci\xF3n</a>`:u.hide==="to"?`<div class="hcols one">${_a(Bh,kh)}</div><a class="hshow" data-hshow="${u.key}">\u21BA Mostrar la otra direcci\xF3n</a>`:`<div class="hcols">${_a("to",ni,"to")}${_a(Bh,kh,"out")}</div>`}
        ${oe.length>(u===Kt?7:8)?`<button type="button" class="hmore" data-hmore="${u.key}">${u.more?"\u25B4 Menos trenes":"\u25BE M\xE1s trenes \xB7 pr\xF3ximas horas"}</button>`:""}
        <div class="hsrc"><span class="hsrcT" hidden title="${cf?ti.get(b[E].id)?.d?"Salidas oficiales de Rodalies en directo":"Horario + retrasos mientras cargan las salidas oficiales":"Previsi\xF3n seg\xFAn horario (sin tiempo real)"} \xB7 \u25CF = tren circulando">${cf?ti.get(b[E].id)?.d?"\u25CF oficial en directo":"\u25CF horario + retrasos":"seg\xFAn horario"}</span><a data-hmap="${E}">\u{1F5FA}\uFE0F mapa</a>${u===Kt?"<a data-hloc>\u{1F4CD} actualizar</a>":`<a data-hset="${u.key}">\u270E cambiar</a>`}${u===fn?'<a data-hdel="work">\u2715 quitar</a>':""}</div>
      </div>`:"")+"</div>"}let vi={on:(()=>{try{return localStorage.getItem("rod_push")==="1"}catch{return!1}})(),busy:!1},jd=/iPhone|iPad|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,Qd=()=>matchMedia("(display-mode: standalone)").matches||navigator.standalone===!0,ga=()=>{let u=[...kn.st,...fn.st],_=new Set;return u.forEach(S=>{let E=kt.get(S);E!=null&&b[E].fams.forEach(C=>_.add(C))}),{stations:u,lines:[..._].sort(L)}},hg=u=>Uint8Array.from(atob(u.replace(/-/g,"+").replace(/_/g,"/")+"===".slice((u.length+3)%4)),_=>_.charCodeAt(0));async function tf(){return!("serviceWorker"in navigator)||!("PushManager"in window)||location.protocol!=="https:"?null:await navigator.serviceWorker.getRegistration()||navigator.serviceWorker.register("./sw.js")}async function ef(u){let S=await(await fetch(H.url.replace(/\/+$/,"")+"/push/subscribe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sub:u.toJSON(),...ga()})})).json();if(!S.ok)throw new Error(S.err||"error")}let In={on:(()=>{try{return localStorage.getItem("rod_ln")==="1"}catch{return!1}})(),seen:null};function ug(){let{lines:u,stations:_}=ga(),S=new Set(u),E=new Set(_.map(O=>kt.get(O))),C=H.alerts.filter(O=>[...O.fams].some(U=>S.has(U))||[...O.stops||[]].some(U=>E.has(U)));if(!In.seen){try{In.seen=new Set(JSON.parse(localStorage.getItem("rod_lnseen")||"[]"))}catch{In.seen=new Set}if(!In.seen.size){C.forEach(O=>In.seen.add(O.id+"|"+O.txt.length)),nf();return}}let R=C.filter(O=>!In.seen.has(O.id+"|"+O.txt.length));if(R.length&&(R.forEach(O=>In.seen.add(O.id+"|"+O.txt.length)),nf(),!(!In.on||!("Notification"in window)||Notification.permission!=="granted")))for(let O of R.slice(0,3)){let U=(O.src==="Adif"?"Adif \xB7 v\xEDa":"Rodalies")+(O.fams.size?" \xB7 "+[...O.fams].sort(L).slice(0,4).join(" "):""),B={body:O.txt.slice(0,240),icon:"icons/icon-192.png",tag:"rod-"+O.id};(navigator.serviceWorker&&navigator.serviceWorker.getRegistration?navigator.serviceWorker.getRegistration():Promise.resolve(null)).then(Z=>Z?Z.showNotification(U,B):new Notification(U,B)).catch(()=>{try{new Notification(U,B)}catch{}})}}function nf(){try{localStorage.setItem("rod_lnseen",JSON.stringify([...In.seen].slice(-400)))}catch{}}async function dg(){if(In.on)In.on=!1,on("Avisos desactivados");else{if(!("Notification"in window)){on(jd&&!Qd()?"En iPhone: Compartir \u2192 A\xF1adir a pantalla de inicio y activa los avisos desde la app":"Este navegador no permite avisos");return}if(await Notification.requestPermission()!=="granted"){on("Sin permiso para avisos: act\xEDvalo en los ajustes del navegador");return}In.on=!0,on("Listo: te aviso de incidencias en "+ga().lines.join(", ")+" mientras la app est\xE9 abierta")}try{localStorage.setItem("rod_ln",In.on?"1":"")}catch{}tn(!0)}async function fg(){if(!H.repOk)return dg();if(!vi.busy){vi.busy=!0;try{let u=await tf();if(!u){on(jd&&!Qd()?"En iPhone: Compartir \u2192 A\xF1adir a pantalla de inicio, abre la app desde ah\xED y activa los avisos":"Este navegador no permite avisos (hace falta abrir la web publicada, no el archivo)");return}if(await navigator.serviceWorker.ready,vi.on){let _=await u.pushManager.getSubscription();_&&(fetch(H.url.replace(/\/+$/,"")+"/push/unsubscribe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({endpoint:_.endpoint})}).catch(()=>{}),await _.unsubscribe().catch(()=>{})),vi.on=!1,on("Avisos desactivados")}else{if(!H.url){on("Hace falta el puente en directo");return}if(await Notification.requestPermission()!=="granted"){on("Sin permiso para avisos: act\xEDvalo en los ajustes del navegador");return}let S=(await wt(H.url.replace(/\/+$/,""),"/push/key")).key,E=await u.pushManager.getSubscription()||await u.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:hg(S)});await ef(E),vi.on=!0,on("Listo: te avisaremos de incidencias en "+ga().lines.join(", "))}try{localStorage.setItem("rod_push",vi.on?"1":"")}catch{}}catch(u){on("No se han podido activar los avisos: "+(u.message||u))}finally{vi.busy=!1,tn(!0)}}}async function sf(){if(vi.on)try{let u=await tf(),_=u&&await u.pushManager.getSubscription();_&&await ef(_)}catch{}}let Nh=!1,rf="";function Uh(){let u=V?"t"+(V.tid||V.vtid):J>=0?"s"+J:At?"a":sn?"n":"";u!==rf&&(Nh=!1,rf=u);let _=innerWidth<=640&&!!u&&!Nh,S=p("#inf");S.classList.contains("compact")!==_&&(S.classList.toggle("compact",_),requestAnimationFrame(()=>{if(h.style.display!=="none"){let E=S.getBoundingClientRect().bottom;h.style.top=Math.round(E+8)+"px",h.style.maxHeight=Math.max(140,p("#rc").getBoundingClientRect().top-E-16)+"px"}}))}let Go=new Set;function pg(u,_,S,E){if(!(In.on||vi.on)||!("Notification"in window)||Notification.permission!=="granted")return;let C=fe(),R=_.sm-C.min-E;if(!C.live||_.dl<10||R>40||Go.has(_.num+"|"+_.sm))return;Go.add(_.num+"|"+_.sm);let O=`${u.ico} Tu tren de las ${at(_.sm)} va con +${Math.round(_.dl)} min`,U=`${_.fam} a ${_.dest} desde ${S}: saldr\xE1 hacia las ${at(_.est)}. Puedes salir ${Math.round(_.dl)} min m\xE1s tarde.`;(navigator.serviceWorker&&navigator.serviceWorker.getRegistration?navigator.serviceWorker.getRegistration():Promise.resolve(null)).then(B=>B?B.showNotification(O,{body:U,tag:"rd-"+_.num,icon:"icons/icon-192.png"}):new Notification(O,{body:U})).catch(()=>{try{new Notification(O,{body:U})}catch{}})}function tn(u){let _=p("#home");if(!_)return;let S=performance.now();if(!u&&S-Kd<4e3)return;Kd=S;let E=fe(),C=[],R=ga(),O=y=>{let P=Dh(y);return P==null||!Kt.w?1:Math.hypot(b[P].w[0]-Kt.w[0],b[P].w[1]-Kt.w[1])},U=[Kt,...[kn,fn].sort((y,P)=>O(y)-O(P))],B=U.map(y=>cg(y,E,C)).join("")+(pa.some(y=>y.open)&&R.lines.length,"");if(_.className=pa.some(y=>y.open)?"open":"",_._h===B)return;_._h=B,_.innerHTML=B;{let y=[..._.children].find(P=>P.classList.contains("hplace")&&!P.querySelector(".hnew"));y&&y.classList.add("lead")}let Z=y=>y==="work"?fn:y==="near"?Kt:kn;_.querySelectorAll("[data-hloc]").forEach(y=>y.onclick=()=>{Kt.err="",Lh(!0)}),_.querySelectorAll("[data-ht]").forEach(y=>y.onclick=()=>{if(p("#inf").classList.contains("compact")){Nh=!0,Uh();return}let P=Z(y.dataset.ht);P.open=!P.open,ns(P),tn(!0),(V||J>=0||At||sn)&&(h._h="",Ve())}),_.querySelectorAll("[data-hs]").forEach(y=>y.onclick=()=>{let[P,K]=y.dataset.hs.split(":"),rt=Z(P);rt.i=+K,ns(rt),tn(!0)}),_.querySelectorAll("[data-hw]").forEach(y=>y.onclick=()=>{let[P,K]=y.dataset.hw.split(":"),rt=Z(P);rt.walk=g(rt.walk+ +K,0,60),ns(rt),tn(!0)}),_.querySelectorAll("[data-hmap]").forEach(y=>y.onclick=()=>{let P=+y.dataset.hmap;sn=At=Ke=!1,V=null,J=P,xt(),Object.assign(s,{tx:b[P].w[0],ty:b[P].w[1],dist:18,tilt:Math.max(s.tilt,.5)}),h._h="",Ve(),a()}),_.querySelectorAll("[data-hset]").forEach(y=>y.onclick=()=>{Bs=y.dataset.hset,m.value="",m.placeholder=Bs==="work"?"Escribe la estaci\xF3n del trabajo\u2026":"Escribe la estaci\xF3n de casa\u2026",m.focus()}),_.querySelectorAll("[data-hnear]").forEach(y=>y.onclick=()=>{let P=kt.get(Kt.st[0]);P!=null&&Fh(P,y.dataset.hnear)}),_.querySelectorAll("[data-hmore]").forEach(y=>y.onclick=()=>{let P=Z(y.dataset.hmore);P.more=!P.more,tn(!0)}),_.querySelectorAll("[data-hhide]").forEach(y=>y.onclick=P=>{P.stopPropagation();let[K,rt]=y.dataset.hhide.split(":"),Et=Z(K);Et.hide=rt,ns(Et),tn(!0)}),_.querySelectorAll("[data-hshow]").forEach(y=>y.onclick=()=>{let P=Z(y.dataset.hshow);P.hide="",ns(P),tn(!0)}),_.querySelectorAll("[data-hgo]").forEach(y=>y.onclick=P=>{P.stopPropagation();let[K,rt]=y.dataset.hgo.split(":"),Et=Z(K);Et.goAt=rt==="1"?Date.now():0,ns(Et),tn(!0)}),_.querySelectorAll("[data-hnotst]").forEach(y=>y.onclick=P=>{P.stopPropagation(),Kt.homeW=Kt.w;try{localStorage.setItem("rod_homew",JSON.stringify(Kt.w))}catch{}tn(!0)}),_.querySelectorAll("[data-hdel]").forEach(y=>y.onclick=()=>{fn.st=[],fn.open=!1,ns(fn),tn(!0),sf()}),_.querySelectorAll("[data-dk]").forEach(y=>y.onclick=()=>af(C[+y.dataset.dk])),_.querySelectorAll("[data-hal]").forEach(y=>y.onclick=()=>p("#alr").click());let tt=p("#bell");tt||(tt=document.createElement("button"),tt.type="button",tt.id="bell",tt.onclick=fg,p("#inf .more").prepend(tt));{let y=H.repOk?vi.on:In.on;tt.hidden=!R.lines.length,tt.className=y?"on":"",tt.textContent=(y?"\u{1F514} Avisos activados \xB7 ":"\u{1F515} Activar avisos de ")+R.lines.join(", "),tt.title=(y?"Avisos activados":"Activar avisos")+" de "+R.lines.join(", ")+(H.repOk?"":" (mientras la app est\xE9 abierta)")}Wd(_)}function af(u){if(!u)return;let _=t.days.indexOf(fe().ymd),S=w.find(R=>R.real?u.tid&&R.v.tid===u.tid||u.num&&String(R.tr?R.tr.num:R.v.num)===String(u.num):u.tr&&R.tr===u.tr||u.num&&R.tr&&String(R.tr.num)===String(u.num)),E=u.tr||S&&S.tr||(j[_]||[]).find(R=>String(R.num)===String(u.num));if(sn=At=Ke=!1,J=-1,V=S?S.tr||{vtid:S.v.tid}:E||null,!V)return;nt=S&&S.tr?S.tr:null,nt&&innerWidth<=640&&(h.classList.add("peek"),p("#rc").classList.contains("min")||p("#rcgrab").click());let C=S?S.p.w:null;C&&Object.assign(s,{tx:C[0],ty:C[1],dist:Math.min(s.dist,22)}),xt(),h._h="",Ve(),X=0,a()}let Bs=!1;m.addEventListener("blur",()=>setTimeout(()=>{Bs&&!m.value.trim()&&(Bs=!1,m.placeholder="Buscar estaci\xF3n o municipio\u2026")},600));function eb(){}function Fh(u,_){let S=_==="work"?fn:kn,E=b[u].id,C=b.filter(R=>R.fams.size&&R!==b[u]&&Math.hypot(R.w[0]-b[u].w[0],R.w[1]-b[u].w[1])<.6).map(R=>R.id);S.st=[E,...C].slice(0,3),S.i=0,S.open=!0,ns(S),tn(!0),sf()}let Wo=p("#lines");Wo.innerHTML='<button type="button" class="all" data-f="*">Todas</button>'+k.map(u=>`<button type="button" style="--c:${$[u]}" data-f="${u}">${u}</button>`).join("");function of(){try{tn(!0)}catch{}{let u=p("#linebtn");u||(u=document.createElement("button"),u.type="button",u.id="linebtn",Wo.after(u),u.onclick=()=>{mi=[...$t][0],Ke=sn=At=!1,h._h="",Ve()});let _=$t.size===1?[...$t][0]:"";u.hidden=!_,_&&(u.innerHTML=`\u{1F4CB} Estado de la ${f(_)} ahora`)}Wo.querySelectorAll("[data-f]").forEach(u=>{u.dataset.f!=="*"&&u.classList.toggle("off",!$t.has(u.dataset.f))})}Wo.querySelectorAll("[data-f]").forEach(u=>u.onclick=()=>{let _=u.dataset.f;_==="*"?k.forEach(S=>$t.add(S)):$t.size===k.length?($t.clear(),$t.add(_)):$t.has(_)?($t.delete(_),$t.size||k.forEach(S=>$t.add(S))):$t.add(_);try{localStorage.setItem("rod_lines",JSON.stringify([...$t]))}catch{}of(),Ot(),xt(),Rh(),X=0,a()});let Oh=[...document.querySelectorAll("[data-sp]")],hi=0;function lf(u){let _=fe();u&&(Tt===u||hi===u)?Tt?(zt=_.min,se=_.min,Tt=0,hi=u):(de=performance.now(),Tt=u,hi=0):u===0?(Tt=0,se=null,hi=0):(zt=_.min,de=performance.now(),se=_.min,Tt=u,hi=0),Oh.forEach(S=>{let E=+S.dataset.sp;S.classList.toggle("on",E===(Tt||hi)||!Tt&&!hi&&se==null&&E===0),S.classList.toggle("pz",!!hi&&E===hi),S.textContent=E===0?"Ahora":hi===E?"\u25B6 \xD7"+E:Tt===E?"\u23F8 \xD7"+E:"\xD7"+E}),X=0,a()}Oh.forEach(u=>u.onclick=()=>lf(+u.dataset.sp)),p("#tsl").oninput=u=>{let _=+u.target.value;zt=_,se=_,de=performance.now(),Tt===0&&!hi&&Oh.forEach(S=>S.classList.remove("on")),X=0,a()},setInterval(()=>{se!=null&&Tt&&zt+(performance.now()-de)/6e4*Tt>1560&&(zt=240,de=performance.now())},1e3),window.__rodSearch=u=>{let _=x(u.trim());if(!_){d.style.display="none",d._pick=null;return}let S=[],E=[];b.forEach((U,B)=>{if(!U.fams.size)return;let Z=x(U.n);Z.startsWith(_)||Z.includes(" "+_)||Z.includes("-"+_)?S.push(B):Z.includes(_)&&E.push(B)});let C=S.concat(E).slice(0,7),R=A.filter(U=>x(U.name).startsWith(_)).sort((U,B)=>B.pop-U.pop).slice(0,3),O=C.map(U=>({h:`\u{1F689} ${f(b[U].n)}<em>${[...b[U].fams].sort(L).slice(0,3).map(B=>`<em class="ls" style="background:${$[B]}">${B}</em>`).join(" ")}</em>`,go:()=>{if(Bs){let B=Bs;Bs=!1,m.placeholder="Buscar estaci\xF3n o municipio\u2026",Fh(U,B);return}sn=!1,At=!1,Ke=!1,J=U,V=null,nt=null,xt(),Object.assign(s,{tx:b[U].w[0],ty:b[U].w[1],dist:Math.min(s.dist,20),tilt:Math.max(s.tilt,.5)}),Ve(),a()}})).concat(R.map(U=>({h:`${f(U.name)}<em>municipio</em>`,go:()=>{Object.assign(s,{tx:U.cx,ty:U.cy,dist:g(U.size*3+14,14,60)}),a()}})));d.innerHTML=O.map((U,B)=>`<li data-i="${B}">${U.h}</li>`).join("")||'<li class="no">Sin resultados</li>',d.style.display="block",d._pick=U=>{O[U]&&(O[U].go(),d.style.display="none",m.value="",m.blur())},d.querySelectorAll("li[data-i]").forEach(U=>U.onclick=()=>d._pick(+U.dataset.i))},of(),xt();try{let u=new URLSearchParams(location.search).get("st");if(u){let _=x(u),S=-1,E=0;b.forEach((C,R)=>{if(!C.fams.size)return;let O=x(C.n),U=O===_?3:O.startsWith(_)||_.startsWith(O)?2:O.includes(_)||_.includes(O)?1:0;U>E&&(E=U,S=R)}),S>=0&&setTimeout(()=>{J=S,xt(),Object.assign(s,{tx:b[S].w[0],ty:b[S].w[1],dist:18,tilt:.5}),Ve(),a()},300)}}catch{}window.__rod={TID:ot,SID:kt,byDay:j,get days(){return t.days},get hist(){return ee},get past(){return he.cur},get cols(){return ei.mesh?ei.mesh.count:-1},get dist(){return r.dist},get follow(){return nt},get selTrip(){return V},ST:b,TR:it,FAM:k,act:()=>w,setSpeed:lf,RT:H,pollRT:ce,nowState:fe,posAt:ts,activeTrips:ra,select:u=>{V=u,Ve()}}}var ta=window.__DATA__;var Re=i=>document.querySelector(i),fs=i=>String(i).replace(/\B(?=(\d{3})+(?!\d))/g,"."),Un=(i,t,e)=>Math.min(e,Math.max(t,i)),yd=i=>i.normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase(),Wn=Re("#c"),Ro=new eh({canvas:Wn,antialias:!0});Ro.setPixelRatio(Math.min(devicePixelRatio||1,2));var ps=new Fa;ps.background=new pe(15659509);var _h=35,Qi=new Dn(_h,1,2,1500);ps.add(new ro(16777215,9080992,1));var Am=new oo(16777215,.9);Am.position.set(-40,-70,90);ps.add(Am);var Ki=100/ta.w,To=ta.w/2,Ao=ta.h/2,nn=[],Sd=new Ti;ps.add(Sd);var dh=new qs({color:16777215,transparent:!0,opacity:.55});for(let i of ta.m){let t=new Ti,e=[],n=[],s=1e9,r=-1e9,a=1e9,o=-1e9;for(let g of i.g){let x=g.map(p=>{let f=[];for(let N=0;N<p.length;N+=2)f.push(new Lt((p[N]-To)*Ki,(p[N+1]-Ao)*Ki));return f.length>1&&f[0].equals(f[f.length-1])&&f.pop(),f}).filter(p=>p.length>=3);if(!x.length)continue;let A=new zr(x[0]);for(let p=1;p<x.length;p++)A.holes.push(new Zs(x[p]));e.push(A);for(let p of x[0])s=Math.min(s,p.x),r=Math.max(r,p.x),a=Math.min(a,p.y),o=Math.max(o,p.y);for(let p of x)n.push(new Ha(new cn().setFromPoints(p.map(f=>new G(f.x,f.y,0))),dh))}if(!e.length)continue;let l;try{l=new Qa(e,{depth:1,bevelEnabled:!1})}catch{continue}let c=new no({color:13421772}),h=new Sn(l,c);t.add(h);let m=new Ti;n.forEach(g=>m.add(g)),m.position.z=.04,Sd.add(m),t.scale.z=.01,Sd.add(t);let d={og:m,rings:i.g,inF:!0,sel:null,code:i.c,name:i.n,pop:i.p,area:i.a,pr:i.pr,rankP:0,rankD:0,group:t,mesh:h,mat:c,cx:(s+r)/2,cy:(a+o)/2,size:Math.max(r-s,o-a),z:.01,zt:.01,rank:0};h.userData.m=d,nn.push(d)}var T1=nn.map(i=>i.mesh),ym=i=>{let t=0;for(let e=0;e<i.length;e+=2){let n=(e+2)%i.length;t+=i[e]*i[n+1]-i[n]*i[e+1]}return Math.abs(t)/2},Cm=0,Rm=0;for(let i of nn){for(let t of i.rings)Cm+=ym(t[0])-t.slice(1).reduce((e,n)=>e+ym(n),0);Rm+=i.area}var kS=Math.sqrt(Rm/Cm),lh={"08":"Barcelona",17:"Girona",25:"Lleida",43:"Tarragona"},Im={"08":"provincia de Barcelona",17:"provincia de Girona",25:"provincia de Lleida",43:"provincia de Tarragona"},Cd="sqrt",Rd="pop",xd=0,bd=0,Kr=1,Eo=1,zS={sqrt:i=>Math.sqrt(i),lin:i=>i,log:i=>Math.log10(Math.max(i,1))},Md=i=>Rd==="pop"?i.pop:i.pop/i.area,oh=["#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#b10026","#5c0020"].map(i=>new pe(i));function VS(i){i=Un(i,0,1)*(oh.length-1);let t=Math.min(Math.floor(i),oh.length-2);return oh[t].clone().lerp(oh[t+1],i-t)}var jr=i=>i>=100?fs(Math.round(i)):i.toLocaleString("es-ES",{maximumFractionDigits:1});function HS(){bd=0;for(let i of nn)bd+=i.pop;[...nn].sort((i,t)=>t.pop-i.pop).forEach((i,t)=>i.rankP=t+1),[...nn].sort((i,t)=>t.pop/t.area-i.pop/i.area).forEach((i,t)=>i.rankD=t+1),Dm()}var Pm=new pe("#d3d8e2"),Lm=new pe("#eceff3");window.__mapTheme=i=>{ps.background=new pe(i?856345:15659509),Lm.set(i?"#2b3242":"#eceff3"),Pm.set(i?"#1a1f29":"#d3d8e2"),dh.color.set(i?856345:16777215),dh.opacity=i?.7:.55,Id.color.set(i?329483:2764864),Pd.color.set(i?9081766:16777215);for(let t of nn)t.base&&xh(t);Mn()};function xh(i){i.mat.color.copy(i.base).lerp(Lm,document.documentElement.classList.contains("dark")?.95:.86),i.inF||i.mat.color.lerp(Pm,.8)}function Dm(){Kr=1,Eo=1e12;for(let e of nn){let n=Md(e);Kr=Math.max(Kr,n),Eo=Math.min(Eo,n)}let i=Math.log10(Math.max(Eo,.01)),t=Math.log10(Kr);for(let e of nn)e.base=VS((Math.log10(Math.max(Md(e),.01))-i)/(t-i)),xh(e);Re("#lmin").textContent=jr(Eo),Re("#lmax").textContent=jr(Kr),Re("#lname").textContent=Rd==="pop"?"habitantes":"hab./km\xB2",vh()}function vh(){let i=zS[Cd],t=i(Kr),e=24*xd;for(let n of nn)n.zt=xd<=.001?.01:Math.max(.12*Math.min(1,xd),e*i(Md(n))/t)*(n.inF?1:.1);Mn()}var Sm=Object.fromEntries(nn.map(i=>[i.code,i])),ch=[],Nm=[];for(let i of ta.bd){let t=Sm[i.a],e=Sm[i.b];if(!(!t||!e))for(let n=0;n+3<i.p.length;n+=2)Nm.push((i.p[n]-To)*Ki,(i.p[n+1]-Ao)*Ki,0,(i.p[n+2]-To)*Ki,(i.p[n+3]-Ao)*Ki,0),ch.push(t,e)}var fh=new us;fh.setPositions(Nm);var Id=new qi({color:2764864,linewidth:4.4,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3}),Pd=new qi({color:16777215,linewidth:2.4,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-6});[Id,Pd].forEach((i,t)=>{let e=new nr(fh,i);e.frustumCulled=!1,e.renderOrder=10+t,ps.add(e)});function GS(){let i=fh.attributes.instanceStart.data.array;for(let t=0;t<ch.length;t+=2){let e=Math.max(ch[t].z,ch[t+1].z)+.12,n=t/2*6;i[n+2]=e,i[n+5]=e}fh.attributes.instanceStart.data.needsUpdate=!0}var ph={};for(let i of Object.keys(lh)){let t=nn.filter(h=>h.pr===i),e=0,n=0,s=0,r=1e9,a=-1e9,o=1e9,l=-1e9;for(let h of t)e+=h.area,n+=h.cx*h.area,s+=h.cy*h.area,r=Math.min(r,h.cx),a=Math.max(a,h.cx),o=Math.min(o,h.cy),l=Math.max(l,h.cy);let c=document.createElement("div");c.className="plab",c.textContent=lh[i],c.title="Ver solo "+Im[i],c.onclick=()=>tb("pr:"+i),document.body.appendChild(c),ph[i]={el:c,p:new G(n/e,s/e,0),cx:(r+a)/2,cy:(o+l)/2,ext:Math.max(a-r,l-o),ext2:[a-r,l-o],area:e,name:lh[i]}}var vd=new G;function WS(){for(let i in ph){let t=ph[i];vd.copy(t.p).project(Qi),t.el.style.transform=`translate(-50%,-50%) translate(${(vd.x*.5+.5)*innerWidth}px,${(-vd.y*.5+.5)*innerHeight}px)`}}var hn={tilt:0,yaw:0,dist:150,tx:0,ty:0},ye={...hn};function $S(){let i=innerWidth/innerHeight,t=Math.tan(_h*Math.PI/360);return Math.max(ta.h*Ki*1.1,100*1.1/i)/(2*t)}var XS=document.getElementById("northr");document.getElementById("north").addEventListener("click",()=>{ye.yaw=Math.round(ye.yaw/(2*Math.PI))*2*Math.PI,ye.tilt=0,Mn()});function Ld(){Object.assign(ye,{tilt:0,yaw:0,dist:$S(),tx:0,ty:0}),Mn()}function qS(){let{tilt:i,yaw:t,dist:e,tx:n,ty:s}=hn;Qi.position.set(n+e*Math.sin(i)*Math.sin(t),s-e*Math.sin(i)*Math.cos(t),e*Math.cos(i)),Qi.up.set(-Math.cos(i)*Math.sin(t),Math.cos(i)*Math.cos(t),Math.sin(i)),Qi.lookAt(n,s,0)}var hh=!0,bm=performance.now(),Co=new Map;function Mn(){hh=!0}function Um(i){requestAnimationFrame(Um);let t=Un((i-bm)/1e3,0,.05);bm=i;let e=1-Math.exp(-t*10),n=!1;for(let s of Object.keys(hn)){let r=ye[s]-hn[s];Math.abs(r)>1e-4*(s==="dist"?10:1)?(hn[s]+=r*e,n=!0):hn[s]=ye[s]}for(let s of nn){let r=s.zt-s.z;Math.abs(r)>.002?(s.z+=r*Math.min(1,e*.8),s.group.scale.z=s.z,s.og.position.z=s.z+.04,n=!0):s.z!==s.zt&&(s.z=s.zt,s.group.scale.z=s.z,s.og.position.z=s.z+.04)}for(let[s,r]of Co){let a=(i-r)/1800;a>=1?(Co.delete(s),or(s)):or(s,.5*Math.sin(Math.PI*a)),n=!0}if(window.__rodTick&&window.__rodTick(i)&&(hh=!0),n||hh){XS.style.transform=`rotate(${hn.yaw}rad) scaleY(${(.55+.45*Math.cos(hn.tilt)).toFixed(3)})`;{let s=Math.abs(Math.sin(ye.yaw/2))<.02&&ye.tilt<.03,r=document.getElementById("north");r.classList.contains("flat")!==s&&(r.classList.toggle("flat",s),r.title=s?"El norte ya est\xE1 arriba":"Poner el norte arriba y el mapa plano")}qS(),GS(),WS(),window.__rodFrame&&window.__rodFrame(),Ro.render(ps,Qi),hh=n,Re("#tilt").value=Math.round(ye.tilt*180/Math.PI),Re("#yaw").value=Math.round(((ye.yaw*180/Math.PI+180)%360+360)%360-180)}}function Fm(){Ro.setSize(innerWidth,innerHeight,!1),Qi.aspect=innerWidth/innerHeight,Qi.updateProjectionMatrix(),Id.resolution.set(innerWidth,innerHeight),Pd.resolution.set(innerWidth,innerHeight),window.__rodResize&&window.__rodResize(),Mn()}addEventListener("resize",()=>{Fm(),Je.length&&Ds()});Wn.addEventListener("wheel",i=>{i.preventDefault();let t=i.deltaMode===1?16:1,e=i.deltaY*t;if(i.altKey){let n=(Math.abs(i.deltaX)>Math.abs(i.deltaY)?i.deltaX:i.deltaY)*t;ye.yaw+=n*.0035}else i.ctrlKey?ye.dist=Un(ye.dist*Math.exp(e*.01),6,400):ye.tilt=Un(ye.tilt+e*.002,0,1.32);Mn()},{passive:!1});Wn.addEventListener("contextmenu",i=>i.preventDefault());var ji=new Map,jn=null,sr=0,wd=0,Ed=0;var mh=null;Wn.addEventListener("pointerdown",i=>{if(i.pointerType!=="mouse"&&!document.body.classList.contains("used")&&(document.body.classList.add("used"),Je.length&&setTimeout(Ds,50)),Wn.setPointerCapture(i.pointerId),ji.set(i.pointerId,{x:i.clientX,y:i.clientY}),ji.size===1&&(jn={rot:i.button===2||i.altKey,moved:0,multi:!1,touch:i.pointerType!=="mouse"}),ji.size===2){let[t,e]=[...ji.values()];sr=Math.hypot(t.x-e.x,t.y-e.y),wd=Math.atan2(e.y-t.y,e.x-t.x),Ed=(t.y+e.y)/2,mh={mode:null,rot:0,sc:0,tl:0},jn&&(jn.multi=!0)}Dd()});Wn.addEventListener("pointermove",i=>{let t=ji.get(i.pointerId);if(!t){ds={x:i.clientX,y:i.clientY},Td||(Td=requestAnimationFrame(ZS));return}let e=i.clientX-t.x,n=i.clientY-t.y;if(t.x=i.clientX,t.y=i.clientY,ji.size===2){let[s,r]=[...ji.values()],a=Math.hypot(s.x-r.x,s.y-r.y),o=Math.atan2(r.y-s.y,r.x-s.x),l=(s.y+r.y)/2,c=o-wd;c>Math.PI&&(c-=2*Math.PI),c<-Math.PI&&(c+=2*Math.PI);let h=sr?a-sr:0,m=l-Ed,d=mh||(mh={mode:null,rot:0,sc:0,tl:0});d.rot+=c,d.sc+=h,d.tl+=m,d.mode?d.mode==="zoom"&&Math.abs(d.rot)>.45&&(d.mode="rotate"):Math.abs(d.rot)>.3?d.mode="rotate":Math.abs(d.tl)>30&&Math.abs(d.sc)<18?d.mode="tilt":Math.abs(d.sc)>12&&(d.mode="zoom"),(d.mode==="zoom"||d.mode==="rotate")&&sr&&(ye.dist=Un(ye.dist*sr/a,6,400)),d.mode==="rotate"&&(ye.yaw+=c,hn.yaw=ye.yaw),d.mode==="tilt"&&(ye.tilt=Un(ye.tilt-m*.006,0,1.32),hn.tilt=ye.tilt),sr=a,wd=o,Ed=l,Mn();return}if(jn.moved+=Math.abs(e)+Math.abs(n),jn.rot||i.altKey)ye.yaw+=e*.005,ye.tilt=Un(ye.tilt+n*.004,0,1.32),hn.yaw=ye.yaw,hn.tilt=ye.tilt;else{let s=2*hn.dist*Math.tan(_h*Math.PI/360)/innerHeight,r=Math.sin(hn.yaw),a=Math.cos(hn.yaw),o=1/Math.max(Math.cos(hn.tilt),.3);ye.tx=Un(ye.tx-a*e*s+-r*n*s*o,-70,70),ye.ty=Un(ye.ty-r*e*s+a*n*s*o,-70,70),hn.tx=ye.tx,hn.ty=ye.ty}Mn()});var Om=i=>{let t=jn&&!jn.rot&&!jn.multi&&jn.moved<(jn.touch?12:6)&&i.type==="pointerup"&&ji.size===1,e=jn&&jn.touch;ji.delete(i.pointerId),sr=0,mh=null,ji.size||(jn=null),t&&window.__rodTap&&window.__rodTap(i.clientX,i.clientY)};Wn.addEventListener("pointerup",Om);Wn.addEventListener("pointercancel",Om);Wn.addEventListener("dblclick",Ld);addEventListener("keydown",i=>{i.key==="Alt"&&(Wn.style.cursor="move")});addEventListener("keyup",i=>{i.key==="Alt"&&(Wn.style.cursor="")});addEventListener("blur",()=>{Wn.style.cursor=""});var YS=new co,Mm=new Lt,ds=null,Td=0,rr=null;function ZS(){if(Td=0,!ds||jn)return;Mm.set(ds.x/innerWidth*2-1,-(ds.y/innerHeight)*2+1),YS.setFromCamera(Mm,Qi);let i=null;if(i!==rr){let e=rr;rr=i,e&&or(e),i&&or(i),Mn()}let t=window.__rodHover&&window.__rodHover(ds.x,ds.y);if(t){ir.innerHTML=t,ir.style.display="block";let e=ir.offsetWidth,n=ir.offsetHeight;ir.style.left=Un(ds.x+14,6,innerWidth-e-6)+"px",ir.style.top=Un(ds.y+14,6,innerHeight-n-6)+"px",Wn.style.cursor="pointer"}else Dd(),Wn.style.cursor=""}Wn.addEventListener("pointerleave",()=>{if(ds=null,rr){let i=rr;rr=null,or(i),Mn()}Dd()});var ir=Re("#tip");function Dd(){ir.style.display="none"}document.querySelectorAll("[data-metric]").forEach(i=>i.onclick=()=>{Rd=i.dataset.metric,document.querySelectorAll("[data-metric]").forEach(t=>t.classList.toggle("on",t===i)),Dm()});document.querySelectorAll("[data-mode]").forEach(i=>i.onclick=()=>{Cd=i.dataset.mode,document.querySelectorAll("[data-mode]").forEach(t=>t.classList.toggle("on",t===i)),vh()});Re("#yaw").oninput=i=>{ye.yaw=+i.target.value*Math.PI/180,Mn()};Re("#tilt").oninput=i=>{ye.tilt=+i.target.value*Math.PI/180,Mn()};Re("#zin").onclick=()=>{ye.dist=Un(ye.dist*.75,6,400),Mn()};Re("#zout").onclick=()=>{ye.dist=Un(ye.dist/.75,6,400),Mn()};Re("#rst").onclick=Ld;var wm=["#2563eb","#059669","#7c3aed","#db2777","#0891b2","#ca8a04"],Je=[],Em={},JS=i=>Em[i]||(Em[i]=new qs({color:i}));function Bm(i,t){i.og.children.forEach(e=>e.material=t?JS(t):dh)}function or(i,t=0){let e=i.mat.emissive;i===rr?e.setHex(5592405):i.sel?e.copy(i.sel.tint):e.setHex(0),t&&e.addScalar(t)}function Nd(i,t){let e=1e9,n=-1e9,s=1e9,r=-1e9;for(let c of i)e=Math.min(e,c.cx-c.size/2),n=Math.max(n,c.cx+c.size/2),s=Math.min(s,c.cy-c.size/2),r=Math.max(r,c.cy+c.size/2);let a=innerWidth/innerHeight,o=Math.tan(_h*Math.PI/360),l=i.length===1?Un(i[0].size*3.2+14,14,120):Un(Math.max((r-s)*1.5,(n-e)*1.5/a)/(2*o)+6,14,300);Object.assign(ye,{tx:(e+n)/2,ty:(s+r)/2,dist:l,tilt:t,yaw:0}),Mn()}var Ls=Re("#q"),li=Re("#list"),Ye=Re("#mcs");function yh(i,t=!0){if(li.style.display="none",Ls.value="",!i.sel){Je.length>=6&&km(Je[0].o,!0);let e=new Set(Je.map(s=>s.color)),n=wm.find(s=>!e.has(s))||wm[0];i.sel={o:i,color:n,tint:new pe(n).multiplyScalar(.12)},Je.push(i.sel),Bm(i,n)}Ye.classList.contains("min")&&Io(!1),Co.set(i,performance.now()),or(i),t&&Nd([i],Math.max(ye.tilt,.9)),Ds()}function km(i,t){let e=Je.indexOf(i.sel);e>=0&&Je.splice(e,1),i.sel=null,Bm(i,null),or(i),Mn(),t||Ds()}function zm(i){let t=Math.min(devicePixelRatio||1,2),e=i.clientWidth,n=i.clientHeight;i.width=e*t,i.height=n*t;let s=i.getContext("2d");s.scale(t,t),s.clearRect(0,0,e,n);let r=Je.map(h=>{let m=1e9,d=-1e9,g=1e9,x=-1e9;for(let A of h.o.rings)for(let p=0;p<A[0].length;p+=2)m=Math.min(m,A[0][p]),d=Math.max(d,A[0][p]),g=Math.min(g,A[0][p+1]),x=Math.max(x,A[0][p+1]);return{x0:m,x1:d,y0:g,y1:x}}),a=Math.max(...r.map(h=>Math.max(h.x1-h.x0,h.y1-h.y0))),o=(Math.min(e,n)-22)/a;Je.forEach((h,m)=>{let d=r[m],g=(d.x0+d.x1)/2,x=(d.y0+d.y1)/2;s.beginPath();for(let A of h.o.rings)for(let p of A)for(let f=0;f<p.length;f+=2){let N=e/2+(p[f]-g)*o,F=n/2-(p[f+1]-x)*o;f?s.lineTo(N,F):s.moveTo(N,F),f===p.length-2&&s.closePath()}s.fillStyle=h.color+"40",s.fill("evenodd"),s.lineWidth=1.6,s.strokeStyle=h.color,s.stroke()});let l=o/kS,c=[.5,1,2,5,10,20,50,100].find(h=>h*l>=28)||100;s.fillStyle="#6b7385",s.fillRect(10,n-12,c*l,2),s.font="10px system-ui",s.fillText(c+" km",12+c*l,n-8)}function Ds(){if(!Je.length){Ye.innerHTML="",Ye.style.display="none",Io(!1);return}if(Ye.style.display="flex",innerWidth<=640){let e=Re("#inf").getBoundingClientRect().bottom;Ye.style.top=Math.round(e+8)+"px",Ye.style.maxHeight=Math.max(110,Math.min(innerHeight*(Re("#rc").classList.contains("min")?.7:.4),Re("#rc").getBoundingClientRect().top-e-16))+"px",Ye.style.width=""}else if(innerHeight<=500){let e=Re("#inf").getBoundingClientRect().bottom;Ye.style.top=Math.round(e+8)+"px",Ye.style.maxHeight=Math.max(120,innerHeight-e-20)+"px",Ye.style.width="min(290px, 40vw)"}else Ye.style.top="",Ye.style.maxHeight="",Ye.style.width="";let i=Je.map((e,n)=>{let s=e.o;return`<div class="mc" draggable="true" data-i="${n}" style="--c:${e.color}"><button class="x" data-x="${n}" title="Cerrar">\xD7</button><div class="mh"><i class="dot"></i><b>${s.name}</b><em>${lh[s.pr]}</em></div><div class="mb">${fs(s.pop)} hab.</div><small>${jr(s.area)} km\xB2 \xB7 ${jr(s.pop/s.area)} hab./km\xB2 \xB7 n\xBA ${s.rankP} en poblaci\xF3n</small></div>`}).join("");if(Je.length>1){let e=s=>Math.max(...Je.map(s));if(i+='<div class="cmp"><div class="ct">Comparar <small>arrastra una ficha sobre otra para reordenar</small></div><canvas id="sil"></canvas><small class="sc">Siluetas superpuestas a la misma escala</small>'+[["Habitantes",s=>s.o.pop,fs],["Superficie (km\xB2)",s=>s.o.area,jr],["Densidad (hab./km\xB2)",s=>s.o.pop/s.o.area,jr]].map(([s,r,a])=>`<div class="cr"><span>${s}</span>${Je.map(o=>`<div class="bw"><i style="width:${Math.max(2,r(o)/e(r)*100)}%;background:${o.color}"></i><b>${a(r(o))}</b></div>`).join("")}</div>`).join(""),Je.length===2){let[s,r]=Je.map(c=>c.o),[a,o]=s.pop>=r.pop?[s,r]:[r,s],l=(c,h)=>(c>=h?c/h:h/c).toLocaleString("es-ES",{maximumFractionDigits:1});i+=`<small class="ratio"><b>${a.name}</b> tiene ${l(a.pop,o.pop)}\xD7 los habitantes de <b>${o.name}</b> y ocupa ${l(a.area,o.area)}\xD7 ${a.area>=o.area?"su superficie":"menos superficie"}.</small>`}i+="</div>"}Ye.innerHTML=i,Ye.querySelectorAll("[data-x]").forEach(e=>e.onclick=n=>{n.stopPropagation(),km(Je[+e.dataset.x].o)}),Ye.querySelectorAll(".mc").forEach(e=>{e.onclick=()=>Nd([Je[+e.dataset.i].o],Math.max(ye.tilt,.9)),e.onmouseenter=()=>{let n=Je[+e.dataset.i].o;Co.set(n,performance.now())},e.ondragstart=n=>{n.dataTransfer.setData("text/plain",e.dataset.i),e.classList.add("drag")},e.ondragend=()=>e.classList.remove("drag"),e.ondragover=n=>{n.preventDefault(),e.classList.add("over")},e.ondragleave=()=>e.classList.remove("over"),e.ondrop=n=>{n.preventDefault();let s=+n.dataTransfer.getData("text/plain"),r=+e.dataset.i;if(s!==r){let[a]=Je.splice(s,1);Je.splice(r,0,a),Ds();let o=Re("#sil");o&&o.classList.add("flash")}}});let t=Re("#sil");t&&zm(t)}Ls.addEventListener("input",()=>{if(window.__rodSearch){window.__rodSearch(Ls.value);return}let i=yd(Ls.value.trim());if(!i){li.style.display="none";return}let t=[],e=[];for(let s of nn){let r=yd(s.name);r.startsWith(i)?t.push(s):r.includes(i)&&e.push(s)}let n=t.sort((s,r)=>r.pop-s.pop).concat(e.sort((s,r)=>r.pop-s.pop)).slice(0,8);li.innerHTML=n.map((s,r)=>`<li data-i="${r}">${s.name}<em>${fs(s.pop)}</em></li>`).join("")||'<li class="no">Sin resultados</li>',li.style.display="block",li.querySelectorAll("li[data-i]").forEach(s=>s.onclick=()=>yh(n[+s.dataset.i])),li._r=n});Ls.addEventListener("keydown",i=>{i.key==="Enter"&&li._pick?li._pick(0):i.key==="Enter"&&li._r&&li._r[0]&&yh(li._r[0]),i.key==="Escape"&&(Ls.value="",li.style.display="none")});addEventListener("keydown",i=>{i.key==="Escape"&&i.target!==Ls&&Vm()});var Tm=0;addEventListener("resize",()=>{clearTimeout(Tm),Tm=setTimeout(()=>{let i=Re("#sil");i&&zm(i)},120)});var gh=null,Ad=Re("#chip");function KS(i,t,e=.8){gh={codes:new Set(i.map(n=>n.code)),label:t},nn.forEach(n=>{n.inF=gh.codes.has(n.code),xh(n)}),Ad.innerHTML=`<span>Mostrando: <b>${t}</b> \xB7 ${i.length} municipio${i.length===1?"":"s"}</span><button id="chx" title="Quitar filtro">\xD7</button>`,Ad.style.display="flex",Re("#chx").onclick=Vm,vh(),Nd(i,e),i.slice(0,40).forEach(n=>Co.set(n,performance.now()))}function Vm(){gh&&(gh=null,nn.forEach(i=>{i.inF=!0,xh(i)}),Ad.style.display="none",vh())}var jS="prov";function QS(i){let t=[...nn].sort((a,o)=>o.pop-a.pop),e=[...nn].sort((a,o)=>o.pop/o.area-a.pop/a.area),[n,s,r]=i.split(":");if(n==="pr")return[nn.filter(a=>a.pr===s),Im[s]];if(n==="top")return s==="pop"?[t.slice(0,10),"10 con m\xE1s habitantes"]:[e.slice(0,10),"10 m\xE1s densos"];if(n==="low")return s==="pop"?[t.slice(-10),"10 con menos habitantes"]:[e.slice(-10),"10 menos densos"];if(n==="size")return[nn.filter(a=>a.pop>=+s&&a.pop<+r),+r>1e9?`${fs(+s)} o m\xE1s habitantes`:+s==0?`menos de ${fs(+r)} habitantes`:`${fs(+s)} \u2013 ${fs(+r-1)} habitantes`];if(n==="n50"){let a=0,o=0;for(let l of t)if(a+=l.pop,o++,a>=bd/2)break;return[t.slice(0,o),"la mitad de la poblaci\xF3n"]}return[[],""]}function tb(i){let[t,e]=QS(i);t.length&&KS(t,e,i.startsWith("pr:")?.75:.8)}document.querySelectorAll("[data-tab]").forEach(i=>i.onclick=()=>{jS=i.dataset.tab,Re("#dbody").scrollTop=0});var ar=Re("#rc"),uh=Re("#mcstab");function Qr(i){ar.classList.toggle("min",i),Re("#rcgrab span").textContent=i?"Mostrar controles":"Ocultar controles",Je.length&&Ds()}function Io(i){Ye.classList.toggle("min",i),Ye.style.transform="",Ye.style.opacity="",uh.classList.toggle("on",i&&Je.length>0),i&&(uh.textContent=`\u25B8 ${Je.length} ${Je.length===1?"ficha":"fichas"}`,uh.style.top=Ye.style.top||"124px")}function Ud(i,{onMove:t,onEnd:e,axis:n}){let s=null;i.addEventListener("pointerdown",a=>{a.pointerType==="mouse"||!Sh.matches||a.target.closest("input,button:not(#rcgrab),.seg")||(s={x:a.clientX,y:a.clientY,id:a.pointerId,lock:null})}),addEventListener("pointermove",a=>{if(!s||a.pointerId!==s.id)return;let o=a.clientX-s.x,l=a.clientY-s.y;!s.lock&&Math.hypot(o,l)>10&&(s.lock=Math.abs(o)>Math.abs(l)?"x":"y"),s.lock===n&&t&&t(o,l)});let r=a=>{if(!s||a.pointerId!==s.id)return;let o=a.clientX-s.x,l=a.clientY-s.y,c=s.lock;s=null,e(c===n?o:0,c===n?l:0,c)};addEventListener("pointerup",r,!0),addEventListener("pointercancel",r,!0)}Re("#rcgrab").onclick=()=>Qr(!ar.classList.contains("min"));innerWidth<=640&&Qr(!0);requestAnimationFrame(()=>document.documentElement.classList.remove("boot"));var Hm=()=>innerWidth>640;Ud(ar,{axis:"y",onEnd:(i,t)=>{if(!Hm())if(t>40&&!ar.classList.contains("min")){let e=Re("#dp.open #dbody");(!e||e.scrollTop<=0||t>120)&&Qr(!0)}else t<-30&&ar.classList.contains("min")&&Qr(!1)}});Ud(ar,{axis:"x",onEnd:i=>{Hm()&&(i>50?Qr(!0):i<-30&&ar.classList.contains("min")&&Qr(!1))}});Ud(Ye,{axis:"x",onMove:i=>{i<0&&(Ye.classList.add("sw"),Ye.style.transform=`translateX(${i}px)`,Ye.style.opacity=Math.max(.2,1+i/300))},onEnd:i=>{Ye.classList.remove("sw"),i<-60?Io(!0):(Ye.style.transform="",Ye.style.opacity="")}});uh.onclick=()=>{Io(!1),Ds()};Re("#dtoggle").onclick=()=>{let i=Re("#dp").classList.toggle("open");Re("#rc").classList.toggle("dopen",i),Re("#dtoggle").textContent=i?Sh.matches&&innerWidth<=640?"\u2190 Controles":"En directo \u25B4":"En directo: conectar datos de Renfe \u25BE",window.__rodCard&&window.__rodCard()};var Sh=matchMedia("(max-width:640px), (max-height:500px)");function Gm(){let i=Re("#leg");Sh.matches?Re("#rc").insertBefore(i,Re("#dtoggle")):document.body.appendChild(i),Je.length&&Ds()}Sh.addEventListener("change",Gm);Gm();Fm();HS();Ld();Object.assign(hn,ye);for(let i of nn)i.z=.01;requestAnimationFrame(Um);vm({scene:ps,camera:Qi,renderer:Ro,goal:ye,cur:hn,invalidate:Mn,flyTo:(i,t,e,n)=>{Object.assign(ye,{tx:(i-To)*Ki,ty:(t-Ao)*Ki,dist:e,tilt:n}),Mn()},K:Ki,CX:To,CY:Ao,mcs:Ye,q:Ls,list:li,munis:nn,select:yh,norm:yd,fmt:fs,clamp:Un,mcsMin:Io});window.__app={scene:ps,renderer:Ro,camera:Qi,munis:nn,labs:ph,goal:ye,cur:hn,select:yh,get mode(){return Cd}};window.__ready=!0;})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
