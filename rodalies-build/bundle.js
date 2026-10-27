(()=>{var Kf=0,Au=1,jf=2;var fo=1,Qf=2,Wr=3,Ts=0,Wn=1,Vi=2,Hi=0,$r=1,Cu=2,Ru=3,Iu=4,tp=5;var js=100,ep=101,np=102,ip=103,sp=104,rp=200,ap=201,op=202,lp=203,Pu=204,Lu=205,cp=206,hp=207,up=208,dp=209,fp=210,pp=211,mp=212,gp=213,_p=214,yl=0,Sl=1,bl=2,Pr=3,Ml=4,wl=5,El=6,Tl=7,oc=0,xp=1,vp=2,Ci=0,Du=1,Nu=2,Uu=3,Fu=4,Ou=5,Bu=6,ku=7;var zu=300,As=301,Qs=302,lc=303,cc=304,po=306,Al=1e3,Ui=1001,Cl=1002,yn=1003,yp=1004;var mo=1005;var Rn=1006,hc=1007;var Cs=1008;var Qn=1009,Vu=1010,Hu=1011,Xr=1012,uc=1013,Ri=1014,mi=1015,Ii=1016,dc=1017,fc=1018,qr=1020,Gu=35902,Wu=35899,$u=1021,Xu=1022,gi=1023,Oi=1026,Rs=1027,pc=1028,mc=1029,Is=1030,gc=1031;var _c=1033,go=33776,_o=33777,xo=33778,vo=33779,xc=35840,vc=35841,yc=35842,Sc=35843,bc=36196,Mc=37492,wc=37496,Ec=37488,Tc=37489,yo=37490,Ac=37491,Cc=37808,Rc=37809,Ic=37810,Pc=37811,Lc=37812,Dc=37813,Nc=37814,Uc=37815,Fc=37816,Oc=37817,Bc=37818,kc=37819,zc=37820,Vc=37821,Hc=36492,Gc=36494,Wc=36495,$c=36283,Xc=36284,So=36285,qc=36286;var Pa=2300,Rl=2301,xl=2302,pu=2303,mu=2400,gu=2401,_u=2402;var Sp=3200;var Yc=0,bp=1,ls="",ai="srgb",La="srgb-linear",Da="linear",We="srgb";var vl=7680;var Mp=519,wp=512,Ep=513,Tp=514,Zc=515,Ap=516,Cp=517,Jc=518,Rp=519,qu=35044;var Yu="300 es",Ei=2e3,Lr=2001;function Tg(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ag(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Na(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ip(){let i=Na("canvas");return i.style.display="block",i}var ff={},Dr=null;function Ua(...i){let t="THREE."+i.shift();Dr?Dr("log",t,...i):console.log(t,...i)}function Pp(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function de(...i){i=Pp(i);let t="THREE."+i.shift();if(Dr)Dr("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function me(...i){i=Pp(i);let t="THREE."+i.shift();if(Dr)Dr("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function $s(...i){let t=i.join(" ");t in ff||(ff[t]=!0,de(...i))}function Lp(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Dp={[yl]:Sl,[bl]:El,[Ml]:Tl,[Pr]:wl,[Sl]:yl,[El]:bl,[Tl]:Ml,[wl]:Pr},Bi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],pf=1234567,Aa=Math.PI/180,Nr=180/Math.PI;function Fi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Nn[i&255]+Nn[i>>8&255]+Nn[i>>16&255]+Nn[i>>24&255]+"-"+Nn[t&255]+Nn[t>>8&255]+"-"+Nn[t>>16&15|64]+Nn[t>>24&255]+"-"+Nn[e&63|128]+Nn[e>>8&255]+"-"+Nn[e>>16&255]+Nn[e>>24&255]+Nn[n&255]+Nn[n>>8&255]+Nn[n>>16&255]+Nn[n>>24&255]).toLowerCase()}function Se(i,t,e){return Math.max(t,Math.min(e,i))}function Zu(i,t){return(i%t+t)%t}function Cg(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Rg(i,t,e){return i!==t?(e-i)/(t-i):0}function Ca(i,t,e){return(1-e)*i+e*t}function Ig(i,t,e,n){return Ca(i,t,1-Math.exp(-e*n))}function Pg(i,t=1){return t-Math.abs(Zu(i,t*2)-t)}function Lg(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Dg(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Ng(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Ug(i,t){return i+Math.random()*(t-i)}function Fg(i){return i*(.5-Math.random())}function Og(i){i!==void 0&&(pf=i);let t=pf+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Bg(i){return i*Aa}function kg(i){return i*Nr}function zg(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Vg(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Hg(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Gg(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),u=a((t+n)/2),m=r((t-n)/2),d=a((t-n)/2),g=r((n-t)/2),x=a((n-t)/2);switch(s){case"XYX":i.set(o*u,l*m,l*d,o*c);break;case"YZY":i.set(l*d,o*u,l*m,o*c);break;case"ZXZ":i.set(l*m,l*d,o*u,o*c);break;case"XZX":i.set(o*u,l*x,l*g,o*c);break;case"YXY":i.set(l*g,o*u,l*x,o*c);break;case"ZYZ":i.set(l*x,l*g,o*u,o*c);break;default:de("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function wi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function qe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Ju={DEG2RAD:Aa,RAD2DEG:Nr,generateUUID:Fi,clamp:Se,euclideanModulo:Zu,mapLinear:Cg,inverseLerp:Rg,lerp:Ca,damp:Ig,pingpong:Pg,smoothstep:Lg,smootherstep:Dg,randInt:Ng,randFloat:Ug,randFloatSpread:Fg,seededRandom:Og,degToRad:Bg,radToDeg:kg,isPowerOfTwo:zg,ceilPowerOfTwo:Vg,floorPowerOfTwo:Hg,setQuaternionFromProperEuler:Gg,normalize:qe,denormalize:wi},Ft=class i{static{i.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Se(this.x,t.x,e.x),this.y=Se(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Se(this.x,t,e),this.y=Se(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ki=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],m=n[s+3],d=r[a+0],g=r[a+1],x=r[a+2],A=r[a+3];if(m!==A||l!==d||c!==g||u!==x){let p=l*d+c*g+u*x+m*A;p<0&&(d=-d,g=-g,x=-x,A=-A,p=-p);let f=1-o;if(p<.9995){let N=Math.acos(p),F=Math.sin(N);f=Math.sin(f*N)/F,o=Math.sin(o*N)/F,l=l*f+d*o,c=c*f+g*o,u=u*f+x*o,m=m*f+A*o}else{l=l*f+d*o,c=c*f+g*o,u=u*f+x*o,m=m*f+A*o;let N=1/Math.sqrt(l*l+c*c+u*u+m*m);l*=N,c*=N,u*=N,m*=N}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=m}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],m=r[a],d=r[a+1],g=r[a+2],x=r[a+3];return t[e]=o*x+u*m+l*g-c*d,t[e+1]=l*x+u*d+c*m-o*g,t[e+2]=c*x+u*g+o*d-l*m,t[e+3]=u*x-o*m-l*d-c*g,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),m=o(r/2),d=l(n/2),g=l(s/2),x=l(r/2);switch(a){case"XYZ":this._x=d*u*m+c*g*x,this._y=c*g*m-d*u*x,this._z=c*u*x+d*g*m,this._w=c*u*m-d*g*x;break;case"YXZ":this._x=d*u*m+c*g*x,this._y=c*g*m-d*u*x,this._z=c*u*x-d*g*m,this._w=c*u*m+d*g*x;break;case"ZXY":this._x=d*u*m-c*g*x,this._y=c*g*m+d*u*x,this._z=c*u*x+d*g*m,this._w=c*u*m-d*g*x;break;case"ZYX":this._x=d*u*m-c*g*x,this._y=c*g*m+d*u*x,this._z=c*u*x-d*g*m,this._w=c*u*m+d*g*x;break;case"YZX":this._x=d*u*m+c*g*x,this._y=c*g*m+d*u*x,this._z=c*u*x-d*g*m,this._w=c*u*m-d*g*x;break;case"XZY":this._x=d*u*m-c*g*x,this._y=c*g*m-d*u*x,this._z=c*u*x+d*g*m,this._w=c*u*m+d*g*x;break;default:de("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],m=e[10],d=n+o+m;if(d>0){let g=.5/Math.sqrt(d+1);this._w=.25/g,this._x=(u-l)*g,this._y=(r-c)*g,this._z=(a-s)*g}else if(n>o&&n>m){let g=2*Math.sqrt(1+n-o-m);this._w=(u-l)/g,this._x=.25*g,this._y=(s+a)/g,this._z=(r+c)/g}else if(o>m){let g=2*Math.sqrt(1+o-n-m);this._w=(r-c)/g,this._x=(s+a)/g,this._y=.25*g,this._z=(l+u)/g}else{let g=2*Math.sqrt(1+m-n-o);this._w=(a-s)/g,this._x=(r+c)/g,this._y=(l+u)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Se(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},W=class i{static{i.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(mf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(mf.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),u=2*(o*e-r*s),m=2*(r*n-a*e);return this.x=e+l*c+a*m-o*u,this.y=n+l*u+o*c-r*m,this.z=s+l*m+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Se(this.x,t.x,e.x),this.y=Se(this.y,t.y,e.y),this.z=Se(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Se(this.x,t,e),this.y=Se(this.y,t,e),this.z=Se(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Hh.copy(this).projectOnVector(t),this.sub(Hh)}reflect(t){return this.sub(Hh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Hh=new W,mf=new ki,ye=class i{static{i.prototype.isMatrix3=!0}constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],m=n[7],d=n[2],g=n[5],x=n[8],A=s[0],p=s[3],f=s[6],N=s[1],F=s[4],T=s[7],M=s[2],D=s[5],H=s[8];return r[0]=a*A+o*N+l*M,r[3]=a*p+o*F+l*D,r[6]=a*f+o*T+l*H,r[1]=c*A+u*N+m*M,r[4]=c*p+u*F+m*D,r[7]=c*f+u*T+m*H,r[2]=d*A+g*N+x*M,r[5]=d*p+g*F+x*D,r[8]=d*f+g*T+x*H,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],m=u*a-o*c,d=o*l-u*r,g=c*r-a*l,x=e*m+n*d+s*g;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let A=1/x;return t[0]=m*A,t[1]=(s*c-u*n)*A,t[2]=(o*n-s*a)*A,t[3]=d*A,t[4]=(u*e-s*l)*A,t[5]=(s*r-o*e)*A,t[6]=g*A,t[7]=(n*l-c*e)*A,t[8]=(a*e-n*r)*A,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return $s("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Gh.makeScale(t,e)),this}rotate(t){return $s("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Gh.makeRotation(-t)),this}translate(t,e){return $s("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Gh.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Gh=new ye,gf=new ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_f=new ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Wg(){let i={enabled:!0,workingColorSpace:La,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===We&&(s.r=as(s.r),s.g=as(s.g),s.b=as(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===We&&(s.r=Ir(s.r),s.g=Ir(s.g),s.b=Ir(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ls?Da:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return $s("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return $s("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[La]:{primaries:t,whitePoint:n,transfer:Da,toXYZ:gf,fromXYZ:_f,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ai},outputColorSpaceConfig:{drawingBufferColorSpace:ai}},[ai]:{primaries:t,whitePoint:n,transfer:We,toXYZ:gf,fromXYZ:_f,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ai}}}),i}var Ne=Wg();function as(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ir(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var pr,Il=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{pr===void 0&&(pr=Na("canvas")),pr.width=t.width,pr.height=t.height;let s=pr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=pr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Na("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=as(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(as(e[n]/255)*255):e[n]=as(e[n]);return{data:e,width:t.width,height:t.height}}else return de("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},$g=0,Ur=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:$g++}),this.uuid=Fi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Wh(s[a].image)):r.push(Wh(s[a]))}else r=Wh(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Wh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Il.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(de("Texture: Unable to serialize Texture."),{})}var Xg=0,$h=new W,Jn=class i extends Bi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Ui,s=Ui,r=Rn,a=Cs,o=gi,l=Qn,c=i.DEFAULT_ANISOTROPY,u=ls){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xg++}),this.uuid=Fi(),this.name="",this.source=new Ur(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ft(0,0),this.repeat=new Ft(1,1),this.center=new Ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize($h).x}get height(){return this.source.getSize($h).y}get depth(){return this.source.getSize($h).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){de(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){de(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==zu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Al:t.x=t.x-Math.floor(t.x);break;case Ui:t.x=t.x<0?0:1;break;case Cl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Al:t.y=t.y-Math.floor(t.y);break;case Ui:t.y=t.y<0?0:1;break;case Cl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Jn.DEFAULT_IMAGE=null;Jn.DEFAULT_MAPPING=zu;Jn.DEFAULT_ANISOTROPY=1;var $e=class i{static{i.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],u=l[4],m=l[8],d=l[1],g=l[5],x=l[9],A=l[2],p=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(m-A)<.01&&Math.abs(x-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(m+A)<.1&&Math.abs(x+p)<.1&&Math.abs(c+g+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let F=(c+1)/2,T=(g+1)/2,M=(f+1)/2,D=(u+d)/4,H=(m+A)/4,w=(x+p)/4;return F>T&&F>M?F<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(F),s=D/n,r=H/n):T>M?T<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),n=D/s,r=w/s):M<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),n=H/r,s=w/r),this.set(n,s,r,e),this}let N=Math.sqrt((p-x)*(p-x)+(m-A)*(m-A)+(d-u)*(d-u));return Math.abs(N)<.001&&(N=1),this.x=(p-x)/N,this.y=(m-A)/N,this.z=(d-u)/N,this.w=Math.acos((c+g+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Se(this.x,t.x,e.x),this.y=Se(this.y,t.y,e.y),this.z=Se(this.z,t.z,e.z),this.w=Se(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Se(this.x,t,e),this.y=Se(this.y,t,e),this.z=Se(this.z,t,e),this.w=Se(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Pl=class extends Bi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new $e(0,0,t,e),this.scissorTest=!1,this.viewport=new $e(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Jn(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Rn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ur(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Kn=class extends Pl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Fa=class extends Jn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=yn,this.minFilter=yn,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ll=class extends Jn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=yn,this.minFilter=yn,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var ze=class i{static{i.prototype.isMatrix4=!0}constructor(t,e,n,s,r,a,o,l,c,u,m,d,g,x,A,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,u,m,d,g,x,A,p)}set(t,e,n,s,r,a,o,l,c,u,m,d,g,x,A,p){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=m,f[14]=d,f[3]=g,f[7]=x,f[11]=A,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/mr.setFromMatrixColumn(t,0).length(),r=1/mr.setFromMatrixColumn(t,1).length(),a=1/mr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),m=Math.sin(r);if(t.order==="XYZ"){let d=a*u,g=a*m,x=o*u,A=o*m;e[0]=l*u,e[4]=-l*m,e[8]=c,e[1]=g+x*c,e[5]=d-A*c,e[9]=-o*l,e[2]=A-d*c,e[6]=x+g*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*u,g=l*m,x=c*u,A=c*m;e[0]=d+A*o,e[4]=x*o-g,e[8]=a*c,e[1]=a*m,e[5]=a*u,e[9]=-o,e[2]=g*o-x,e[6]=A+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*u,g=l*m,x=c*u,A=c*m;e[0]=d-A*o,e[4]=-a*m,e[8]=x+g*o,e[1]=g+x*o,e[5]=a*u,e[9]=A-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*u,g=a*m,x=o*u,A=o*m;e[0]=l*u,e[4]=x*c-g,e[8]=d*c+A,e[1]=l*m,e[5]=A*c+d,e[9]=g*c-x,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,g=a*c,x=o*l,A=o*c;e[0]=l*u,e[4]=A-d*m,e[8]=x*m+g,e[1]=m,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=g*m+x,e[10]=d-A*m}else if(t.order==="XZY"){let d=a*l,g=a*c,x=o*l,A=o*c;e[0]=l*u,e[4]=-m,e[8]=c*u,e[1]=d*m+A,e[5]=a*u,e[9]=g*m-x,e[2]=x*m-g,e[6]=o*u,e[10]=A*m+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(qg,t,Yg)}lookAt(t,e,n){let s=this.elements;return si.subVectors(t,e),si.lengthSq()===0&&(si.z=1),si.normalize(),ms.crossVectors(n,si),ms.lengthSq()===0&&(Math.abs(n.z)===1?si.x+=1e-4:si.z+=1e-4,si.normalize(),ms.crossVectors(n,si)),ms.normalize(),$o.crossVectors(si,ms),s[0]=ms.x,s[4]=$o.x,s[8]=si.x,s[1]=ms.y,s[5]=$o.y,s[9]=si.y,s[2]=ms.z,s[6]=$o.z,s[10]=si.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],m=n[5],d=n[9],g=n[13],x=n[2],A=n[6],p=n[10],f=n[14],N=n[3],F=n[7],T=n[11],M=n[15],D=s[0],H=s[4],w=s[8],L=s[12],V=s[1],$=s[5],Q=s[9],nt=s[13],Y=s[2],K=s[6],ot=s[10],lt=s[14],bt=s[3],ct=s[7],yt=s[11],vt=s[15];return r[0]=a*D+o*V+l*Y+c*bt,r[4]=a*H+o*$+l*K+c*ct,r[8]=a*w+o*Q+l*ot+c*yt,r[12]=a*L+o*nt+l*lt+c*vt,r[1]=u*D+m*V+d*Y+g*bt,r[5]=u*H+m*$+d*K+g*ct,r[9]=u*w+m*Q+d*ot+g*yt,r[13]=u*L+m*nt+d*lt+g*vt,r[2]=x*D+A*V+p*Y+f*bt,r[6]=x*H+A*$+p*K+f*ct,r[10]=x*w+A*Q+p*ot+f*yt,r[14]=x*L+A*nt+p*lt+f*vt,r[3]=N*D+F*V+T*Y+M*bt,r[7]=N*H+F*$+T*K+M*ct,r[11]=N*w+F*Q+T*ot+M*yt,r[15]=N*L+F*nt+T*lt+M*vt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],m=t[6],d=t[10],g=t[14],x=t[3],A=t[7],p=t[11],f=t[15],N=l*g-c*d,F=o*g-c*m,T=o*d-l*m,M=a*g-c*u,D=a*d-l*u,H=a*m-o*u;return e*(A*N-p*F+f*T)-n*(x*N-p*M+f*D)+s*(x*F-A*M+f*H)-r*(x*T-A*D+p*H)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],u=t[10];return e*(a*u-o*c)-n*(r*u-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],m=t[9],d=t[10],g=t[11],x=t[12],A=t[13],p=t[14],f=t[15],N=e*o-n*a,F=e*l-s*a,T=e*c-r*a,M=n*l-s*o,D=n*c-r*o,H=s*c-r*l,w=u*A-m*x,L=u*p-d*x,V=u*f-g*x,$=m*p-d*A,Q=m*f-g*A,nt=d*f-g*p,Y=N*nt-F*Q+T*$+M*V-D*L+H*w;if(Y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let K=1/Y;return t[0]=(o*nt-l*Q+c*$)*K,t[1]=(s*Q-n*nt-r*$)*K,t[2]=(A*H-p*D+f*M)*K,t[3]=(d*D-m*H-g*M)*K,t[4]=(l*V-a*nt-c*L)*K,t[5]=(e*nt-s*V+r*L)*K,t[6]=(p*T-x*H-f*F)*K,t[7]=(u*H-d*T+g*F)*K,t[8]=(a*Q-o*V+c*w)*K,t[9]=(n*V-e*Q-r*w)*K,t[10]=(x*D-A*T+f*N)*K,t[11]=(m*T-u*D-g*N)*K,t[12]=(o*L-a*$-l*w)*K,t[13]=(e*$-n*L+s*w)*K,t[14]=(A*F-x*M-p*N)*K,t[15]=(u*M-m*F+d*N)*K,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,m=o+o,d=r*c,g=r*u,x=r*m,A=a*u,p=a*m,f=o*m,N=l*c,F=l*u,T=l*m,M=n.x,D=n.y,H=n.z;return s[0]=(1-(A+f))*M,s[1]=(g+T)*M,s[2]=(x-F)*M,s[3]=0,s[4]=(g-T)*D,s[5]=(1-(d+f))*D,s[6]=(p+N)*D,s[7]=0,s[8]=(x+F)*H,s[9]=(p-N)*H,s[10]=(1-(d+A))*H,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=mr.set(s[0],s[1],s[2]).length(),o=mr.set(s[4],s[5],s[6]).length(),l=mr.set(s[8],s[9],s[10]).length();r<0&&(a=-a),yi.copy(this);let c=1/a,u=1/o,m=1/l;return yi.elements[0]*=c,yi.elements[1]*=c,yi.elements[2]*=c,yi.elements[4]*=u,yi.elements[5]*=u,yi.elements[6]*=u,yi.elements[8]*=m,yi.elements[9]*=m,yi.elements[10]*=m,e.setFromRotationMatrix(yi),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=Ei,l=!1){let c=this.elements,u=2*r/(e-t),m=2*r/(n-s),d=(e+t)/(e-t),g=(n+s)/(n-s),x,A;if(l)x=r/(a-r),A=a*r/(a-r);else if(o===Ei)x=-(a+r)/(a-r),A=-2*a*r/(a-r);else if(o===Lr)x=-a/(a-r),A=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=m,c[9]=g,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=A,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Ei,l=!1){let c=this.elements,u=2/(e-t),m=2/(n-s),d=-(e+t)/(e-t),g=-(n+s)/(n-s),x,A;if(l)x=1/(a-r),A=a/(a-r);else if(o===Ei)x=-2/(a-r),A=-(a+r)/(a-r);else if(o===Lr)x=-1/(a-r),A=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=m,c[9]=0,c[13]=g,c[2]=0,c[6]=0,c[10]=x,c[14]=A,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},mr=new W,yi=new ze,qg=new W(0,0,0),Yg=new W(1,1,1),ms=new W,$o=new W,si=new W,xf=new ze,vf=new ki,os=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],m=s[2],d=s[6],g=s[10];switch(e){case"XYZ":this._y=Math.asin(Se(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,g),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Se(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-m,r),this._z=0);break;case"ZXY":this._x=Math.asin(Se(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-m,g),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Se(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(d,g),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Se(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-m,r)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-Se(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,g),this._y=0);break;default:de("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return xf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(xf,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return vf.setFromEuler(this),this.setFromQuaternion(vf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};os.DEFAULT_ORDER="XYZ";var Fr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Zg=0,yf=new W,gr=new ki,es=new ze,Xo=new W,va=new W,Jg=new W,Kg=new ki,Sf=new W(1,0,0),bf=new W(0,1,0),Mf=new W(0,0,1),wf={type:"added"},jg={type:"removed"},_r={type:"childadded",child:null},Xh={type:"childremoved",child:null},Sn=class i extends Bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zg++}),this.uuid=Fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new W,e=new os,n=new ki,s=new W(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ze},normalMatrix:{value:new ye}}),this.matrix=new ze,this.matrixWorld=new ze,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return gr.setFromAxisAngle(t,e),this.quaternion.multiply(gr),this}rotateOnWorldAxis(t,e){return gr.setFromAxisAngle(t,e),this.quaternion.premultiply(gr),this}rotateX(t){return this.rotateOnAxis(Sf,t)}rotateY(t){return this.rotateOnAxis(bf,t)}rotateZ(t){return this.rotateOnAxis(Mf,t)}translateOnAxis(t,e){return yf.copy(t).applyQuaternion(this.quaternion),this.position.add(yf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Sf,t)}translateY(t){return this.translateOnAxis(bf,t)}translateZ(t){return this.translateOnAxis(Mf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(es.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Xo.copy(t):Xo.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),va.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?es.lookAt(va,Xo,this.up):es.lookAt(Xo,va,this.up),this.quaternion.setFromRotationMatrix(es),s&&(es.extractRotation(s.matrixWorld),gr.setFromRotationMatrix(es),this.quaternion.premultiply(gr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(me("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(wf),_r.child=t,this.dispatchEvent(_r),_r.child=null):me("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(jg),Xh.child=t,this.dispatchEvent(Xh),Xh.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),es.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),es.multiply(t.parent.matrixWorld)),t.applyMatrix4(es),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(wf),_r.child=t,this.dispatchEvent(_r),_r.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(va,t,Jg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(va,Kg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let m=l[c];r(t.shapes,m)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),m=a(t.shapes),d=a(t.skeletons),g=a(t.animations),x=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),m.length>0&&(n.shapes=m),d.length>0&&(n.skeletons=d),g.length>0&&(n.animations=g),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Sn.DEFAULT_UP=new W(0,1,0);Sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ti=class extends Sn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Qg={type:"move"},Or=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ti,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ti,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ti,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let A of t.hand.values()){let p=e.getJointPose(A,n),f=this._getHandJoint(c,A);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}let u=c.joints["index-finger-tip"],m=c.joints["thumb-tip"],d=u.position.distanceTo(m.position),g=.02,x=.005;c.inputState.pinching&&d>g+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=g-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Qg)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ti;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Np={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gs={h:0,s:0,l:0},qo={h:0,s:0,l:0};function qh(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var ue=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ai){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ne.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Ne.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ne.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Ne.workingColorSpace){if(t=Zu(t,1),e=Se(e,0,1),n=Se(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=qh(a,r,t+1/3),this.g=qh(a,r,t),this.b=qh(a,r,t-1/3)}return Ne.colorSpaceToWorking(this,s),this}setStyle(t,e=ai){function n(r){r!==void 0&&parseFloat(r)<1&&de("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:de("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);de("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ai){let n=Np[t.toLowerCase()];return n!==void 0?this.setHex(n,e):de("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=as(t.r),this.g=as(t.g),this.b=as(t.b),this}copyLinearToSRGB(t){return this.r=Ir(t.r),this.g=Ir(t.g),this.b=Ir(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ai){return Ne.workingToColorSpace(Un.copy(this),t),Math.round(Se(Un.r*255,0,255))*65536+Math.round(Se(Un.g*255,0,255))*256+Math.round(Se(Un.b*255,0,255))}getHexString(t=ai){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ne.workingColorSpace){Ne.workingToColorSpace(Un.copy(this),e);let n=Un.r,s=Un.g,r=Un.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let m=a-o;switch(c=u<=.5?m/(a+o):m/(2-a-o),a){case n:l=(s-r)/m+(s<r?6:0);break;case s:l=(r-n)/m+2;break;case r:l=(n-s)/m+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Ne.workingColorSpace){return Ne.workingToColorSpace(Un.copy(this),e),t.r=Un.r,t.g=Un.g,t.b=Un.b,t}getStyle(t=ai){Ne.workingToColorSpace(Un.copy(this),t);let e=Un.r,n=Un.g,s=Un.b;return t!==ai?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(gs),this.setHSL(gs.h+t,gs.s+e,gs.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(gs),t.getHSL(qo);let n=Ca(gs.h,qo.h,e),s=Ca(gs.s,qo.s,e),r=Ca(gs.l,qo.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Un=new ue;ue.NAMES=Np;var Oa=class extends Sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new os,this.environmentIntensity=1,this.environmentRotation=new os,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Si=new W,ns=new W,Yh=new W,is=new W,xr=new W,vr=new W,Ef=new W,Zh=new W,Jh=new W,Kh=new W,jh=new $e,Qh=new $e,tu=new $e,ys=class i{constructor(t=new W,e=new W,n=new W){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Si.subVectors(t,e),s.cross(Si);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Si.subVectors(s,e),ns.subVectors(n,e),Yh.subVectors(t,e);let a=Si.dot(Si),o=Si.dot(ns),l=Si.dot(Yh),c=ns.dot(ns),u=ns.dot(Yh),m=a*c-o*o;if(m===0)return r.set(0,0,0),null;let d=1/m,g=(c*l-o*u)*d,x=(a*u-o*l)*d;return r.set(1-g-x,x,g)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,is)===null?!1:is.x>=0&&is.y>=0&&is.x+is.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,is)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,is.x),l.addScaledVector(a,is.y),l.addScaledVector(o,is.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return jh.setScalar(0),Qh.setScalar(0),tu.setScalar(0),jh.fromBufferAttribute(t,e),Qh.fromBufferAttribute(t,n),tu.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(jh,r.x),a.addScaledVector(Qh,r.y),a.addScaledVector(tu,r.z),a}static isFrontFacing(t,e,n,s){return Si.subVectors(n,e),ns.subVectors(t,e),Si.cross(ns).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Si.subVectors(this.c,this.b),ns.subVectors(this.a,this.b),Si.cross(ns).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;xr.subVectors(s,n),vr.subVectors(r,n),Zh.subVectors(t,n);let l=xr.dot(Zh),c=vr.dot(Zh);if(l<=0&&c<=0)return e.copy(n);Jh.subVectors(t,s);let u=xr.dot(Jh),m=vr.dot(Jh);if(u>=0&&m<=u)return e.copy(s);let d=l*m-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(xr,a);Kh.subVectors(t,r);let g=xr.dot(Kh),x=vr.dot(Kh);if(x>=0&&g<=x)return e.copy(r);let A=g*c-l*x;if(A<=0&&c>=0&&x<=0)return o=c/(c-x),e.copy(n).addScaledVector(vr,o);let p=u*x-g*m;if(p<=0&&m-u>=0&&g-x>=0)return Ef.subVectors(r,s),o=(m-u)/(m-u+(g-x)),e.copy(s).addScaledVector(Ef,o);let f=1/(p+A+d);return a=A*f,o=d*f,e.copy(n).addScaledVector(xr,a).addScaledVector(vr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Gn=class{constructor(t=new W(1/0,1/0,1/0),e=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(bi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(bi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=bi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,bi):bi.fromBufferAttribute(r,a),bi.applyMatrix4(t.matrixWorld),this.expandByPoint(bi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Yo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Yo.copy(n.boundingBox)),Yo.applyMatrix4(t.matrixWorld),this.union(Yo)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,bi),bi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ya),Zo.subVectors(this.max,ya),yr.subVectors(t.a,ya),Sr.subVectors(t.b,ya),br.subVectors(t.c,ya),_s.subVectors(Sr,yr),xs.subVectors(br,Sr),zs.subVectors(yr,br);let e=[0,-_s.z,_s.y,0,-xs.z,xs.y,0,-zs.z,zs.y,_s.z,0,-_s.x,xs.z,0,-xs.x,zs.z,0,-zs.x,-_s.y,_s.x,0,-xs.y,xs.x,0,-zs.y,zs.x,0];return!eu(e,yr,Sr,br,Zo)||(e=[1,0,0,0,1,0,0,0,1],!eu(e,yr,Sr,br,Zo))?!1:(Jo.crossVectors(_s,xs),e=[Jo.x,Jo.y,Jo.z],eu(e,yr,Sr,br,Zo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,bi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(bi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ss[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ss[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ss[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ss[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ss[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ss[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ss[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ss[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ss),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ss=[new W,new W,new W,new W,new W,new W,new W,new W],bi=new W,Yo=new Gn,yr=new W,Sr=new W,br=new W,_s=new W,xs=new W,zs=new W,ya=new W,Zo=new W,Jo=new W,Vs=new W;function eu(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Vs.fromArray(i,r);let o=s.x*Math.abs(Vs.x)+s.y*Math.abs(Vs.y)+s.z*Math.abs(Vs.z),l=t.dot(Vs),c=e.dot(Vs),u=n.dot(Vs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var dn=new W,Ko=new Ft,t0=0,Ye=class extends Bi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:t0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=qu,this.updateRanges=[],this.gpuType=mi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ko.fromBufferAttribute(this,e),Ko.applyMatrix3(t),this.setXY(e,Ko.x,Ko.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)dn.fromBufferAttribute(this,e),dn.applyMatrix3(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)dn.fromBufferAttribute(this,e),dn.applyMatrix4(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)dn.fromBufferAttribute(this,e),dn.applyNormalMatrix(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)dn.fromBufferAttribute(this,e),dn.transformDirection(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=wi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=qe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=wi(e,this.array)),e}setX(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=wi(e,this.array)),e}setY(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=wi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=wi(e,this.array)),e}setW(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=qe(e,this.array),n=qe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=qe(e,this.array),n=qe(n,this.array),s=qe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=qe(e,this.array),n=qe(n,this.array),s=qe(s,this.array),r=qe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Ba=class extends Ye{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ka=class extends Ye{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var on=class extends Ye{constructor(t,e,n){super(new Float32Array(t),e,n)}},e0=new Gn,Sa=new W,nu=new W,jn=class{constructor(t=new W,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):e0.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Sa.subVectors(t,this.center);let e=Sa.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Sa,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(nu.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Sa.copy(t.center).add(nu)),this.expandByPoint(Sa.copy(t.center).sub(nu))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},n0=0,pi=new ze,iu=new Sn,Mr=new W,ri=new Gn,ba=new Gn,vn=new W,ln=class i extends Bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:n0++}),this.uuid=Fi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Tg(t)?ka:Ba)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ye().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return pi.makeRotationFromQuaternion(t),this.applyMatrix4(pi),this}rotateX(t){return pi.makeRotationX(t),this.applyMatrix4(pi),this}rotateY(t){return pi.makeRotationY(t),this.applyMatrix4(pi),this}rotateZ(t){return pi.makeRotationZ(t),this.applyMatrix4(pi),this}translate(t,e,n){return pi.makeTranslation(t,e,n),this.applyMatrix4(pi),this}scale(t,e,n){return pi.makeScale(t,e,n),this.applyMatrix4(pi),this}lookAt(t){return iu.lookAt(t),iu.updateMatrix(),this.applyMatrix4(iu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mr).negate(),this.translate(Mr.x,Mr.y,Mr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new on(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&de("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){me("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];ri.setFromBufferAttribute(r),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&me('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){me("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(t){let n=this.boundingSphere.center;if(ri.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];ba.setFromBufferAttribute(o),this.morphTargetsRelative?(vn.addVectors(ri.min,ba.min),ri.expandByPoint(vn),vn.addVectors(ri.max,ba.max),ri.expandByPoint(vn)):(ri.expandByPoint(ba.min),ri.expandByPoint(ba.max))}ri.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)vn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(vn));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)vn.fromBufferAttribute(o,c),l&&(Mr.fromBufferAttribute(t,c),vn.add(Mr)),s=Math.max(s,n.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&me('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){me("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Ye(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let w=0;w<n.count;w++)o[w]=new W,l[w]=new W;let c=new W,u=new W,m=new W,d=new Ft,g=new Ft,x=new Ft,A=new W,p=new W;function f(w,L,V){c.fromBufferAttribute(n,w),u.fromBufferAttribute(n,L),m.fromBufferAttribute(n,V),d.fromBufferAttribute(r,w),g.fromBufferAttribute(r,L),x.fromBufferAttribute(r,V),u.sub(c),m.sub(c),g.sub(d),x.sub(d);let $=1/(g.x*x.y-x.x*g.y);isFinite($)&&(A.copy(u).multiplyScalar(x.y).addScaledVector(m,-g.y).multiplyScalar($),p.copy(m).multiplyScalar(g.x).addScaledVector(u,-x.x).multiplyScalar($),o[w].add(A),o[L].add(A),o[V].add(A),l[w].add(p),l[L].add(p),l[V].add(p))}let N=this.groups;N.length===0&&(N=[{start:0,count:t.count}]);for(let w=0,L=N.length;w<L;++w){let V=N[w],$=V.start,Q=V.count;for(let nt=$,Y=$+Q;nt<Y;nt+=3)f(t.getX(nt+0),t.getX(nt+1),t.getX(nt+2))}let F=new W,T=new W,M=new W,D=new W;function H(w){M.fromBufferAttribute(s,w),D.copy(M);let L=o[w];F.copy(L),F.sub(M.multiplyScalar(M.dot(L))).normalize(),T.crossVectors(D,L);let $=T.dot(l[w])<0?-1:1;a.setXYZW(w,F.x,F.y,F.z,$)}for(let w=0,L=N.length;w<L;++w){let V=N[w],$=V.start,Q=V.count;for(let nt=$,Y=$+Q;nt<Y;nt+=3)H(t.getX(nt+0)),H(t.getX(nt+1)),H(t.getX(nt+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Ye(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,g=n.count;d<g;d++)n.setXYZ(d,0,0,0);let s=new W,r=new W,a=new W,o=new W,l=new W,c=new W,u=new W,m=new W;if(t)for(let d=0,g=t.count;d<g;d+=3){let x=t.getX(d+0),A=t.getX(d+1),p=t.getX(d+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,A),a.fromBufferAttribute(e,p),u.subVectors(a,r),m.subVectors(s,r),u.cross(m),o.fromBufferAttribute(n,x),l.fromBufferAttribute(n,A),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(A,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,g=e.count;d<g;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),u.subVectors(a,r),m.subVectors(s,r),u.cross(m),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)vn.fromBufferAttribute(t,e),vn.normalize(),t.setXYZ(e,vn.x,vn.y,vn.z)}toNonIndexed(){function t(o,l){let c=o.array,u=o.itemSize,m=o.normalized,d=new c.constructor(l.length*u),g=0,x=0;for(let A=0,p=l.length;A<p;A++){o.isInterleavedBufferAttribute?g=l[A]*o.data.stride+o.offset:g=l[A]*u;for(let f=0;f<u;f++)d[x++]=c[g++]}return new Ye(d,u,m)}if(this.index===null)return de("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,m=c.length;u<m;u++){let d=c[u],g=t(d,n);l.push(g)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let m=0,d=c.length;m<d;m++){let g=c[m];u.push(g.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],m=r[c];for(let d=0,g=m.length;d<g;d++)u.push(m[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,u=a.length;c<u;c++){let m=a[c];this.addGroup(m.start,m.count,m.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Dl=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=qu,this.updateRanges=[],this.version=0,this.uuid=Fi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},Hn=new W,Ai=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Hn.fromBufferAttribute(this,e),Hn.applyMatrix4(t),this.setXYZ(e,Hn.x,Hn.y,Hn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Hn.fromBufferAttribute(this,e),Hn.applyNormalMatrix(t),this.setXYZ(e,Hn.x,Hn.y,Hn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Hn.fromBufferAttribute(this,e),Hn.transformDirection(t),this.setXYZ(e,Hn.x,Hn.y,Hn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=wi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=qe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=qe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=qe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=qe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=qe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=wi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=wi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=wi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=wi(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=qe(e,this.array),n=qe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=qe(e,this.array),n=qe(n,this.array),s=qe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=qe(e,this.array),n=qe(n,this.array),s=qe(s,this.array),r=qe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Ua("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ye(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Ua("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},su=new W,i0=new W,s0=new ye,Mi=class{constructor(t=new W(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=su.subVectors(n,e).cross(i0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(su),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||s0.getNormalMatrix(t),s=this.coplanarPoint(su).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},r0=0,zi=class extends Bi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:r0++}),this.uuid=Fi(),this.name="",this.type="Material",this.blending=$r,this.side=Ts,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pu,this.blendDst=Lu,this.blendEquation=js,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ue(0,0,0),this.blendAlpha=0,this.depthFunc=Pr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vl,this.stencilZFail=vl,this.stencilZPass=vl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){de(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){de(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ue().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Mi().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ft().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ft().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var rs=new W,ru=new W,jo=new W,Qo=new W,Xs=class{constructor(t=new W,e=new W(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,rs)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=rs.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(rs.copy(this.origin).addScaledVector(this.direction,e),rs.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ru.copy(t).add(e).multiplyScalar(.5),jo.copy(e).sub(t).normalize(),Qo.copy(this.origin).sub(ru);let r=t.distanceTo(e)*.5,a=-this.direction.dot(jo),o=Qo.dot(this.direction),l=-Qo.dot(jo),c=Qo.lengthSq(),u=Math.abs(1-a*a),m,d,g,x;if(u>0)if(m=a*l-o,d=a*o-l,x=r*u,m>=0)if(d>=-x)if(d<=x){let A=1/u;m*=A,d*=A,g=m*(m+a*d+2*o)+d*(a*m+d+2*l)+c}else d=r,m=Math.max(0,-(a*d+o)),g=-m*m+d*(d+2*l)+c;else d=-r,m=Math.max(0,-(a*d+o)),g=-m*m+d*(d+2*l)+c;else d<=-x?(m=Math.max(0,-(-a*r+o)),d=m>0?-r:Math.min(Math.max(-r,-l),r),g=-m*m+d*(d+2*l)+c):d<=x?(m=0,d=Math.min(Math.max(-r,-l),r),g=d*(d+2*l)+c):(m=Math.max(0,-(a*r+o)),d=m>0?r:Math.min(Math.max(-r,-l),r),g=-m*m+d*(d+2*l)+c);else d=a>0?-r:r,m=Math.max(0,-(a*d+o)),g=-m*m+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,m),s&&s.copy(ru).addScaledVector(jo,d),g}intersectSphere(t,e){if(t.radius<0)return null;rs.subVectors(t.center,this.origin);let n=rs.dot(this.direction),s=rs.dot(rs)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,m=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),u>=0?(r=(t.min.y-d.y)*u,a=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,a=(t.min.y-d.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),m>=0?(o=(t.min.z-d.z)*m,l=(t.max.z-d.z)*m):(o=(t.max.z-d.z)*m,l=(t.min.z-d.z)*m),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,rs)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,m=t.x-a.x,d=t.y-a.y,g=t.z-a.z,x=e.x-a.x,A=e.y-a.y,p=e.z-a.z,f=n.x-a.x,N=n.y-a.y,F=n.z-a.z,T=Math.abs(l),M=Math.abs(c),D=Math.abs(u),H,w,L,V,$,Q,nt,Y,K,ot,lt,bt;if(T>=M&&T>=D?(L=l,Q=m,K=x,bt=f,l>=0?(H=c,w=u,V=d,$=g,nt=A,Y=p,ot=N,lt=F):(H=u,w=c,V=g,$=d,nt=p,Y=A,ot=F,lt=N)):M>=D?(L=c,Q=d,K=A,bt=N,c>=0?(H=u,w=l,V=g,$=m,nt=p,Y=x,ot=F,lt=f):(H=l,w=u,V=m,$=g,nt=x,Y=p,ot=f,lt=F)):(L=u,Q=g,K=p,bt=F,u>=0?(H=l,w=c,V=m,$=d,nt=x,Y=A,ot=f,lt=N):(H=c,w=l,V=d,$=m,nt=A,Y=x,ot=N,lt=f)),L===0)return null;let ct=H/L,yt=w/L,vt=1/L,Ht=V-ct*Q,Xt=$-yt*Q,ke=nt-ct*K,Me=Y-yt*K,Le=ot-ct*bt,ft=lt-yt*bt,gt=Le*Me-ft*ke,At=Ht*ft-Xt*Le,Qt=ke*Xt-Me*Ht;if(s){if(gt<0||At<0||Qt<0)return null}else if((gt<0||At<0||Qt<0)&&(gt>0||At>0||Qt>0))return null;let Gt=gt+At+Qt;if(Gt===0)return null;let le=vt*(gt*Q+At*K+Qt*bt);return(Gt>0?le<0:le>0)?null:this.at(le/Gt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},qs=class extends zi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new os,this.combine=oc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Tf=new ze,Hs=new Xs,tl=new jn,Af=new W,el=new W,nl=new W,il=new W,au=new W,sl=new W,Cf=new W,rl=new W,bn=class extends Sn{constructor(t=new ln,e=new qs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){sl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],m=r[l];u!==0&&(au.fromBufferAttribute(m,t),a?sl.addScaledVector(au,u):sl.addScaledVector(au.sub(e),u))}e.add(sl)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),tl.copy(n.boundingSphere),tl.applyMatrix4(r),Hs.copy(t.ray).recast(t.near),!(tl.containsPoint(Hs.origin)===!1&&(Hs.intersectSphere(tl,Af)===null||Hs.origin.distanceToSquared(Af)>(t.far-t.near)**2))&&(Tf.copy(r).invert(),Hs.copy(t.ray).applyMatrix4(Tf),!(n.boundingBox!==null&&Hs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Hs)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,m=r.attributes.normal,d=r.groups,g=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,A=d.length;x<A;x++){let p=d[x],f=a[p.materialIndex],N=Math.max(p.start,g.start),F=Math.min(o.count,Math.min(p.start+p.count,g.start+g.count));for(let T=N,M=F;T<M;T+=3){let D=o.getX(T),H=o.getX(T+1),w=o.getX(T+2);s=al(this,f,t,n,c,u,m,D,H,w),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let x=Math.max(0,g.start),A=Math.min(o.count,g.start+g.count);for(let p=x,f=A;p<f;p+=3){let N=o.getX(p),F=o.getX(p+1),T=o.getX(p+2);s=al(this,a,t,n,c,u,m,N,F,T),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,A=d.length;x<A;x++){let p=d[x],f=a[p.materialIndex],N=Math.max(p.start,g.start),F=Math.min(l.count,Math.min(p.start+p.count,g.start+g.count));for(let T=N,M=F;T<M;T+=3){let D=T,H=T+1,w=T+2;s=al(this,f,t,n,c,u,m,D,H,w),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let x=Math.max(0,g.start),A=Math.min(l.count,g.start+g.count);for(let p=x,f=A;p<f;p+=3){let N=p,F=p+1,T=p+2;s=al(this,a,t,n,c,u,m,N,F,T),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function a0(i,t,e,n,s,r,a,o){let l;if(t.side===Wn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Ts,o),l===null)return null;rl.copy(o),rl.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(rl);return c<e.near||c>e.far?null:{distance:c,point:rl.clone(),object:i}}function al(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,el),i.getVertexPosition(l,nl),i.getVertexPosition(c,il);let u=a0(i,t,e,n,el,nl,il,Cf);if(u){let m=new W;ys.getBarycoord(Cf,el,nl,il,m),s&&(u.uv=ys.getInterpolatedAttribute(s,o,l,c,m,new Ft)),r&&(u.uv1=ys.getInterpolatedAttribute(r,o,l,c,m,new Ft)),a&&(u.normal=ys.getInterpolatedAttribute(a,o,l,c,m,new W),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new W,materialIndex:0};ys.getNormal(el,nl,il,d.normal),u.face=d,u.barycoord=m}return u}var za=class extends Jn{constructor(t=null,e=1,n=1,s,r,a,o,l,c=yn,u=yn,m,d){super(null,a,o,l,c,u,s,r,m,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Va=class extends Ye{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},wr=new ze,Rf=new ze,ol=[],If=new Gn,o0=new ze,Ma=new bn,wa=new jn,Ha=class extends bn{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Va(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,o0)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Gn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,wr),If.copy(t.boundingBox).applyMatrix4(wr),this.boundingBox.union(If)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new jn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,wr),wa.copy(t.boundingSphere).applyMatrix4(wr),this.boundingSphere.union(wa)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Ma.geometry=this.geometry,Ma.material=this.material,Ma.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),wa.copy(this.boundingSphere),wa.applyMatrix4(n),t.ray.intersectsSphere(wa)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,wr),Rf.multiplyMatrices(n,wr),Ma.matrixWorld=Rf,Ma.raycast(t,ol);for(let a=0,o=ol.length;a<o;a++){let l=ol[a];l.instanceId=r,l.object=this,e.push(l)}ol.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Va(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new za(new Float32Array(s*this.count),s,this.count,pc,mi));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Gs=new jn,l0=new Ft(.5,.5),ll=new W,Br=class{constructor(t=new Mi,e=new Mi,n=new Mi,s=new Mi,r=new Mi,a=new Mi){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ei,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],m=r[5],d=r[6],g=r[7],x=r[8],A=r[9],p=r[10],f=r[11],N=r[12],F=r[13],T=r[14],M=r[15];if(s[0].setComponents(c-a,g-u,f-x,M-N).normalize(),s[1].setComponents(c+a,g+u,f+x,M+N).normalize(),s[2].setComponents(c+o,g+m,f+A,M+F).normalize(),s[3].setComponents(c-o,g-m,f-A,M-F).normalize(),n)s[4].setComponents(l,d,p,T).normalize(),s[5].setComponents(c-l,g-d,f-p,M-T).normalize();else if(s[4].setComponents(c-l,g-d,f-p,M-T).normalize(),e===Ei)s[5].setComponents(c+l,g+d,f+p,M+T).normalize();else if(e===Lr)s[5].setComponents(l,d,p,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Gs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Gs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Gs)}intersectsSprite(t){Gs.center.set(0,0,0);let e=l0.distanceTo(t.center);return Gs.radius=.7071067811865476+e,Gs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Gs)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(ll.x=s.normal.x>0?t.max.x:t.min.x,ll.y=s.normal.y>0?t.max.y:t.min.y,ll.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ll)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ys=class extends zi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ue(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Nl=new W,Ul=new W,Pf=new ze,Ea=new Xs,cl=new jn,ou=new W,Lf=new W,Fl=class extends Sn{constructor(t=new ln,e=new Ys){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Nl.fromBufferAttribute(e,s-1),Ul.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Nl.distanceTo(Ul);t.setAttribute("lineDistance",new on(n,1))}else de("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),cl.copy(n.boundingSphere),cl.applyMatrix4(s),cl.radius+=r,t.ray.intersectsSphere(cl)===!1)return;Pf.copy(s).invert(),Ea.copy(t.ray).applyMatrix4(Pf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){let g=Math.max(0,a.start),x=Math.min(u.count,a.start+a.count);for(let A=g,p=x-1;A<p;A+=c){let f=u.getX(A),N=u.getX(A+1),F=hl(this,t,Ea,l,f,N,A);F&&e.push(F)}if(this.isLineLoop){let A=u.getX(x-1),p=u.getX(g),f=hl(this,t,Ea,l,A,p,x-1);f&&e.push(f)}}else{let g=Math.max(0,a.start),x=Math.min(d.count,a.start+a.count);for(let A=g,p=x-1;A<p;A+=c){let f=hl(this,t,Ea,l,A,A+1,A);f&&e.push(f)}if(this.isLineLoop){let A=hl(this,t,Ea,l,x-1,g,x-1);A&&e.push(A)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function hl(i,t,e,n,s,r,a){let o=i.geometry.attributes.position;if(Nl.fromBufferAttribute(o,s),Ul.fromBufferAttribute(o,r),e.distanceSqToSegment(Nl,Ul,ou,Lf)>n)return;ou.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(ou);if(!(c<t.near||c>t.far))return{distance:c,point:Lf.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Ga=class extends Fl{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},Ol=class extends zi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Df=new ze,xu=new Xs,ul=new jn,dl=new W,Zs=class extends Sn{constructor(t=new ln,e=new Ol){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ul.copy(n.boundingSphere),ul.applyMatrix4(s),ul.radius+=r,t.ray.intersectsSphere(ul)===!1)return;Df.copy(s).invert(),xu.copy(t.ray).applyMatrix4(Df);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,m=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),g=Math.min(c.count,a.start+a.count);for(let x=d,A=g;x<A;x++){let p=c.getX(x);dl.fromBufferAttribute(m,p),Nf(dl,p,l,s,t,e,this)}}else{let d=Math.max(0,a.start),g=Math.min(m.count,a.start+a.count);for(let x=d,A=g;x<A;x++)dl.fromBufferAttribute(m,x),Nf(dl,x,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Nf(i,t,e,n,s,r,a){let o=xu.distanceSqToPoint(i);if(o<e){let l=new W;xu.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Wa=class extends Jn{constructor(t=[],e=As,n,s,r,a,o,l,c,u){super(t,e,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var Ss=class extends Jn{constructor(t,e,n=Ri,s,r,a,o=yn,l=yn,c,u=Oi,m=1){if(u!==Oi&&u!==Rs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:m};super(d,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ur(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Bl=class extends Ss{constructor(t,e=Ri,n=As,s,r,a=yn,o=yn,l,c=Oi){let u={width:t,height:t,depth:1},m=[u,u,u,u,u,u];super(t,t,e,n,s,r,a,o,l,c),this.image=m,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},$a=class extends Jn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},kr=class i extends ln{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],m=[],d=0,g=0;x("z","y","x",-1,-1,n,e,t,a,r,0),x("z","y","x",1,-1,n,e,-t,a,r,1),x("x","z","y",1,1,t,n,e,s,a,2),x("x","z","y",1,-1,t,n,-e,s,a,3),x("x","y","z",1,-1,t,e,n,s,r,4),x("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new on(c,3)),this.setAttribute("normal",new on(u,3)),this.setAttribute("uv",new on(m,2));function x(A,p,f,N,F,T,M,D,H,w,L){let V=T/H,$=M/w,Q=T/2,nt=M/2,Y=D/2,K=H+1,ot=w+1,lt=0,bt=0,ct=new W;for(let yt=0;yt<ot;yt++){let vt=yt*$-nt;for(let Ht=0;Ht<K;Ht++){let Xt=Ht*V-Q;ct[A]=Xt*N,ct[p]=vt*F,ct[f]=Y,c.push(ct.x,ct.y,ct.z),ct[A]=0,ct[p]=0,ct[f]=D>0?1:-1,u.push(ct.x,ct.y,ct.z),m.push(Ht/H),m.push(1-yt/w),lt+=1}}for(let yt=0;yt<w;yt++)for(let vt=0;vt<H;vt++){let Ht=d+vt+K*yt,Xt=d+vt+K*(yt+1),ke=d+(vt+1)+K*(yt+1),Me=d+(vt+1)+K*yt;l.push(Ht,Xt,Me),l.push(Xt,ke,Me),bt+=6}o.addGroup(g,bt,L),g+=bt,d+=lt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Xa=class i extends ln{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],m=[],d=[],g=[],x=0,A=[],p=n/2,f=0;N(),a===!1&&(t>0&&F(!0),e>0&&F(!1)),this.setIndex(u),this.setAttribute("position",new on(m,3)),this.setAttribute("normal",new on(d,3)),this.setAttribute("uv",new on(g,2));function N(){let T=new W,M=new W,D=0,H=(e-t)/n;for(let w=0;w<=r;w++){let L=[],V=w/r,$=V*(e-t)+t;for(let Q=0;Q<=s;Q++){let nt=Q/s,Y=nt*l+o,K=Math.sin(Y),ot=Math.cos(Y);M.x=$*K,M.y=-V*n+p,M.z=$*ot,m.push(M.x,M.y,M.z),T.set(K,H,ot).normalize(),d.push(T.x,T.y,T.z),g.push(nt,1-V),L.push(x++)}A.push(L)}for(let w=0;w<s;w++)for(let L=0;L<r;L++){let V=A[L][w],$=A[L+1][w],Q=A[L+1][w+1],nt=A[L][w+1];(t>0||L!==0)&&(u.push(V,$,nt),D+=3),(e>0||L!==r-1)&&(u.push($,Q,nt),D+=3)}c.addGroup(f,D,0),f+=D}function F(T){let M=x,D=new Ft,H=new W,w=0,L=T===!0?t:e,V=T===!0?1:-1;for(let Q=1;Q<=s;Q++)m.push(0,p*V,0),d.push(0,V,0),g.push(.5,.5),x++;let $=x;for(let Q=0;Q<=s;Q++){let Y=Q/s*l+o,K=Math.cos(Y),ot=Math.sin(Y);H.x=L*ot,H.y=p*V,H.z=L*K,m.push(H.x,H.y,H.z),d.push(0,V,0),D.x=K*.5+.5,D.y=ot*.5*V+.5,g.push(D.x,D.y),x++}for(let Q=0;Q<s;Q++){let nt=M+Q,Y=$+Q;T===!0?u.push(Y,Y+1,nt):u.push(Y+1,Y,nt),w+=3}c.addGroup(f,w,T===!0?1:2),f+=w}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var oi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){de("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let u=n[s],d=n[s+1]-u,g=(a-u)/d;return(s+g)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new Ft:new W);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new W,s=[],r=[],a=[],o=new W,l=new ze;for(let g=0;g<=t;g++){let x=g/t;s[g]=this.getTangentAt(x,new W)}r[0]=new W,a[0]=new W;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),m=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),m<=c&&(c=m,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let g=1;g<=t;g++){if(r[g]=r[g-1].clone(),a[g]=a[g-1].clone(),o.crossVectors(s[g-1],s[g]),o.length()>Number.EPSILON){o.normalize();let x=Math.acos(Se(s[g-1].dot(s[g]),-1,1));r[g].applyMatrix4(l.makeRotationAxis(o,x))}a[g].crossVectors(s[g],r[g])}if(e===!0){let g=Math.acos(Se(r[0].dot(r[t]),-1,1));g/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(g=-g);for(let x=1;x<=t;x++)r[x].applyMatrix4(l.makeRotationAxis(s[x],g*x)),a[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},zr=class extends oi{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new Ft){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),m=Math.sin(this.aRotation),d=l-this.aX,g=c-this.aY;l=d*u-g*m+this.aX,c=d*m+g*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},kl=class extends zr{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Ku(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,m){let d=(a-r)/c-(o-r)/(c+u)+(o-a)/u,g=(o-a)/u-(l-a)/(u+m)+(l-o)/m;d*=u,g*=u,s(a,o,d,g)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var Uf=new W,Ff=new W,lu=new Ku,cu=new Ku,hu=new Ku,zl=class extends oi{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new W){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(Ff.subVectors(s[0],s[1]).add(s[0]),c=Ff);let m=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(Uf.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Uf),this.curveType==="centripetal"||this.curveType==="chordal"){let g=this.curveType==="chordal"?.5:.25,x=Math.pow(c.distanceToSquared(m),g),A=Math.pow(m.distanceToSquared(d),g),p=Math.pow(d.distanceToSquared(u),g);A<1e-4&&(A=1),x<1e-4&&(x=A),p<1e-4&&(p=A),lu.initNonuniformCatmullRom(c.x,m.x,d.x,u.x,x,A,p),cu.initNonuniformCatmullRom(c.y,m.y,d.y,u.y,x,A,p),hu.initNonuniformCatmullRom(c.z,m.z,d.z,u.z,x,A,p)}else this.curveType==="catmullrom"&&(lu.initCatmullRom(c.x,m.x,d.x,u.x,this.tension),cu.initCatmullRom(c.y,m.y,d.y,u.y,this.tension),hu.initCatmullRom(c.z,m.z,d.z,u.z,this.tension));return n.set(lu.calc(l),cu.calc(l),hu.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new W().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Of(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function c0(i,t){let e=1-i;return e*e*t}function h0(i,t){return 2*(1-i)*i*t}function u0(i,t){return i*i*t}function Ra(i,t,e,n){return c0(i,t)+h0(i,e)+u0(i,n)}function d0(i,t){let e=1-i;return e*e*e*t}function f0(i,t){let e=1-i;return 3*e*e*i*t}function p0(i,t){return 3*(1-i)*i*i*t}function m0(i,t){return i*i*i*t}function Ia(i,t,e,n,s){return d0(i,t)+f0(i,e)+p0(i,n)+m0(i,s)}var qa=class extends oi{constructor(t=new Ft,e=new Ft,n=new Ft,s=new Ft){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Ft){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ia(t,s.x,r.x,a.x,o.x),Ia(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Vl=class extends oi{constructor(t=new W,e=new W,n=new W,s=new W){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new W){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ia(t,s.x,r.x,a.x,o.x),Ia(t,s.y,r.y,a.y,o.y),Ia(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ya=class extends oi{constructor(t=new Ft,e=new Ft){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Ft){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Ft){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Hl=class extends oi{constructor(t=new W,e=new W){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new W){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new W){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Za=class extends oi{constructor(t=new Ft,e=new Ft,n=new Ft){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Ft){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Ra(t,s.x,r.x,a.x),Ra(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Gl=class extends oi{constructor(t=new W,e=new W,n=new W){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new W){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Ra(t,s.x,r.x,a.x),Ra(t,s.y,r.y,a.y),Ra(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ja=class extends oi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Ft){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],m=s[a>s.length-3?s.length-1:a+2];return n.set(Of(o,l.x,c.x,u.x,m.x),Of(o,l.y,c.y,u.y,m.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Ft().fromArray(s))}return this}},vu=Object.freeze({__proto__:null,ArcCurve:kl,CatmullRomCurve3:zl,CubicBezierCurve:qa,CubicBezierCurve3:Vl,EllipseCurve:zr,LineCurve:Ya,LineCurve3:Hl,QuadraticBezierCurve:Za,QuadraticBezierCurve3:Gl,SplineCurve:Ja}),Wl=class extends oi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new vu[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new vu[s.type]().fromJSON(s))}return this}},Js=class extends Wl{constructor(t){super(),this.type="Path",this.currentPoint=new Ft,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Ya(this.currentPoint.clone(),new Ft(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Za(this.currentPoint.clone(),new Ft(t,e),new Ft(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new qa(this.currentPoint.clone(),new Ft(t,e),new Ft(n,s),new Ft(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Ja(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new zr(t,e,n,s,r,a,o,l);if(this.curves.length>0){let m=c.getPoint(0);m.equals(this.currentPoint)||this.lineTo(m.x,m.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Vr=class extends Js{constructor(t){super(t),this.uuid=Fi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Js().fromJSON(s))}return this}};function g0(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Up(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=S0(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let u=o,m=l;for(let d=e;d<s;d+=e){let g=i[d],x=i[d+1];g<o&&(o=g),x<l&&(l=x),g>u&&(u=g),x>m&&(m=x)}c=Math.max(u-o,m-l),c=c!==0?32767/c:0}return Ka(r,a,e,o,l,c,0),a}function Up(i,t,e,n,s){let r;if(s===L0(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=Bf(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=Bf(a/n|0,i[a],i[a+1],r);return r&&Hr(r,r.next)&&(Qa(r),r=r.next),r}function Ks(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Hr(e,e.next)||nn(e.prev,e,e.next)===0)){if(Qa(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ka(i,t,e,n,s,r,a){if(!i)return;!a&&r&&T0(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?x0(i,n,s,r):_0(i)){t.push(l.i,i.i,c.i),Qa(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=v0(Ks(i),t),Ka(i,t,e,n,s,r,2)):a===2&&y0(i,t,e,n,s,r):Ka(Ks(i),t,e,n,s,r,1);break}}}function _0(i){let t=i.prev,e=i,n=i.next;if(nn(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,u=Math.min(s,r,a),m=Math.min(o,l,c),d=Math.max(s,r,a),g=Math.max(o,l,c),x=n.next;for(;x!==t;){if(x.x>=u&&x.x<=d&&x.y>=m&&x.y<=g&&Ta(s,o,r,l,a,c,x.x,x.y)&&nn(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function x0(i,t,e,n){let s=i.prev,r=i,a=i.next;if(nn(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,u=s.y,m=r.y,d=a.y,g=Math.min(o,l,c),x=Math.min(u,m,d),A=Math.max(o,l,c),p=Math.max(u,m,d),f=yu(g,x,t,e,n),N=yu(A,p,t,e,n),F=i.prevZ,T=i.nextZ;for(;F&&F.z>=f&&T&&T.z<=N;){if(F.x>=g&&F.x<=A&&F.y>=x&&F.y<=p&&F!==s&&F!==a&&Ta(o,u,l,m,c,d,F.x,F.y)&&nn(F.prev,F,F.next)>=0||(F=F.prevZ,T.x>=g&&T.x<=A&&T.y>=x&&T.y<=p&&T!==s&&T!==a&&Ta(o,u,l,m,c,d,T.x,T.y)&&nn(T.prev,T,T.next)>=0))return!1;T=T.nextZ}for(;F&&F.z>=f;){if(F.x>=g&&F.x<=A&&F.y>=x&&F.y<=p&&F!==s&&F!==a&&Ta(o,u,l,m,c,d,F.x,F.y)&&nn(F.prev,F,F.next)>=0)return!1;F=F.prevZ}for(;T&&T.z<=N;){if(T.x>=g&&T.x<=A&&T.y>=x&&T.y<=p&&T!==s&&T!==a&&Ta(o,u,l,m,c,d,T.x,T.y)&&nn(T.prev,T,T.next)>=0)return!1;T=T.nextZ}return!0}function v0(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Hr(n,s)&&Op(n,e,e.next,s)&&ja(n,s)&&ja(s,n)&&(t.push(n.i,e.i,s.i),Qa(e),Qa(e.next),e=i=s),e=e.next}while(e!==i);return Ks(e)}function y0(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&R0(a,o)){let l=Bp(a,o);a=Ks(a,a.next),l=Ks(l,l.next),Ka(a,t,e,n,s,r,0),Ka(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function S0(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=Up(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(C0(c))}s.sort(b0);for(let r=0;r<s.length;r++)e=M0(s[r],e);return e}function b0(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function M0(i,t){let e=w0(i,t);if(!e)return t;let n=Bp(e,i);return Ks(n,n.next),Ks(e,e.next)}function w0(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(Hr(i,e))return e;do{if(Hr(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let m=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(m<=n&&m>r&&(r=m,a=e.x<e.next.x?e:e.next,m===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,u=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Fp(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let m=Math.abs(s-e.y)/(n-e.x);ja(e,i)&&(m<u||m===u&&(e.x>a.x||e.x===a.x&&E0(a,e)))&&(a=e,u=m)}e=e.next}while(e!==o);return a}function E0(i,t){return nn(i.prev,i,t.prev)<0&&nn(t.next,i,i.next)<0}function T0(i,t,e,n){let s=i;do s.z===0&&(s.z=yu(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,A0(s)}function A0(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function yu(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function C0(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Fp(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Ta(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&Fp(i,t,e,n,s,r,a,o)}function R0(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!I0(i,t)&&(ja(i,t)&&ja(t,i)&&P0(i,t)&&(nn(i.prev,i,t.prev)||nn(i,t.prev,t))||Hr(i,t)&&nn(i.prev,i,i.next)>0&&nn(t.prev,t,t.next)>0)}function nn(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Hr(i,t){return i.x===t.x&&i.y===t.y}function Op(i,t,e,n){let s=pl(nn(i,t,e)),r=pl(nn(i,t,n)),a=pl(nn(e,n,i)),o=pl(nn(e,n,t));return!!(s!==r&&a!==o||s===0&&fl(i,e,t)||r===0&&fl(i,n,t)||a===0&&fl(e,i,n)||o===0&&fl(e,t,n))}function fl(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function pl(i){return i>0?1:i<0?-1:0}function I0(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Op(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function ja(i,t){return nn(i.prev,i,i.next)<0?nn(i,t,i.next)>=0&&nn(i,i.prev,t)>=0:nn(i,t,i.prev)<0||nn(i,i.next,t)<0}function P0(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Bp(i,t){let e=Su(i.i,i.x,i.y),n=Su(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Bf(i,t,e,n){let s=Su(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Qa(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Su(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function L0(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var bu=class{static triangulate(t,e,n=2){return g0(t,e,n)}},Ws=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];kf(t),zf(n,t);let a=t.length;e.forEach(kf);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,zf(n,e[l]);let o=bu.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function kf(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function zf(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var to=class i extends ln{constructor(t=new Vr([new Ft(.5,.5),new Ft(-.5,.5),new Ft(-.5,-.5),new Ft(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new on(s,3)),this.setAttribute("uv",new on(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,m=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,g=e.bevelThickness!==void 0?e.bevelThickness:.2,x=e.bevelSize!==void 0?e.bevelSize:g-.1,A=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3,f=e.extrudePath,N=e.UVGenerator!==void 0?e.UVGenerator:D0,F,T=!1,M,D,H,w;if(f){F=f.getSpacedPoints(u),T=!0,d=!1;let at=f.isCatmullRomCurve3?f.closed:!1;M=f.computeFrenetFrames(u,at),D=new W,H=new W,w=new W}d||(p=0,g=0,x=0,A=0);let L=o.extractPoints(c),V=L.shape,$=L.holes;if(!Ws.isClockWise(V)){V=V.reverse();for(let at=0,Mt=$.length;at<Mt;at++){let G=$[at];Ws.isClockWise(G)&&($[at]=G.reverse())}}function nt(at){let G=10000000000000001e-36,wt=at[0];for(let Nt=1;Nt<=at.length;Nt++){let oe=Nt%at.length,se=at[oe],he=se.x-wt.x,fe=se.y-wt.y,k=he*he+fe*fe,Re=Math.max(Math.abs(se.x),Math.abs(se.y),Math.abs(wt.x),Math.abs(wt.y)),pe=G*Re*Re;if(k<=pe){at.splice(oe,1),Nt--;continue}wt=se}}nt(V),$.forEach(nt);let Y=$.length,K=V;for(let at=0;at<Y;at++){let Mt=$[at];V=V.concat(Mt)}function ot(at,Mt,G){return Mt||me("ExtrudeGeometry: vec does not exist"),at.clone().addScaledVector(Mt,G)}let lt=V.length;function bt(at,Mt,G){let wt,Nt,oe,se=at.x-Mt.x,he=at.y-Mt.y,fe=G.x-at.x,k=G.y-at.y,Re=se*se+he*he,pe=se*k-he*fe;if(Math.abs(pe)>Number.EPSILON){let P=Math.sqrt(Re),y=Math.sqrt(fe*fe+k*k),X=Mt.x-he/P,it=Mt.y+se/P,ht=G.x-k/y,Rt=G.y+fe/y,Lt=((ht-X)*k-(Rt-it)*fe)/(se*k-he*fe);wt=X+se*Lt-at.x,Nt=it+he*Lt-at.y;let ut=wt*wt+Nt*Nt;if(ut<=2)return new Ft(wt,Nt);oe=Math.sqrt(ut/2)}else{let P=!1;se>Number.EPSILON?fe>Number.EPSILON&&(P=!0):se<-Number.EPSILON?fe<-Number.EPSILON&&(P=!0):Math.sign(he)===Math.sign(k)&&(P=!0),P?(wt=-he,Nt=se,oe=Math.sqrt(Re)):(wt=se,Nt=he,oe=Math.sqrt(Re/2))}return new Ft(wt/oe,Nt/oe)}let ct=[];for(let at=0,Mt=K.length,G=Mt-1,wt=at+1;at<Mt;at++,G++,wt++)G===Mt&&(G=0),wt===Mt&&(wt=0),ct[at]=bt(K[at],K[G],K[wt]);let yt=[],vt,Ht=ct.concat();for(let at=0,Mt=Y;at<Mt;at++){let G=$[at];vt=[];for(let wt=0,Nt=G.length,oe=Nt-1,se=wt+1;wt<Nt;wt++,oe++,se++)oe===Nt&&(oe=0),se===Nt&&(se=0),vt[wt]=bt(G[wt],G[oe],G[se]);yt.push(vt),Ht=Ht.concat(vt)}let Xt;if(p===0)Xt=Ws.triangulateShape(K,$);else{let at=[],Mt=[];for(let G=0;G<p;G++){let wt=G/p,Nt=g*Math.cos(wt*Math.PI/2),oe=x*Math.sin(wt*Math.PI/2)+A;for(let se=0,he=K.length;se<he;se++){let fe=ot(K[se],ct[se],oe);At(fe.x,fe.y,-Nt),wt===0&&at.push(fe)}for(let se=0,he=Y;se<he;se++){let fe=$[se];vt=yt[se];let k=[];for(let Re=0,pe=fe.length;Re<pe;Re++){let P=ot(fe[Re],vt[Re],oe);At(P.x,P.y,-Nt),wt===0&&k.push(P)}wt===0&&Mt.push(k)}}Xt=Ws.triangulateShape(at,Mt)}let ke=Xt.length,Me=x+A;for(let at=0;at<lt;at++){let Mt=d?ot(V[at],Ht[at],Me):V[at];T?(H.copy(M.normals[0]).multiplyScalar(Mt.x),D.copy(M.binormals[0]).multiplyScalar(Mt.y),w.copy(F[0]).add(H).add(D),At(w.x,w.y,w.z)):At(Mt.x,Mt.y,0)}for(let at=1;at<=u;at++)for(let Mt=0;Mt<lt;Mt++){let G=d?ot(V[Mt],Ht[Mt],Me):V[Mt];T?(H.copy(M.normals[at]).multiplyScalar(G.x),D.copy(M.binormals[at]).multiplyScalar(G.y),w.copy(F[at]).add(H).add(D),At(w.x,w.y,w.z)):At(G.x,G.y,m/u*at)}for(let at=p-1;at>=0;at--){let Mt=at/p,G=g*Math.cos(Mt*Math.PI/2),wt=x*Math.sin(Mt*Math.PI/2)+A;for(let Nt=0,oe=K.length;Nt<oe;Nt++){let se=ot(K[Nt],ct[Nt],wt);At(se.x,se.y,m+G)}for(let Nt=0,oe=$.length;Nt<oe;Nt++){let se=$[Nt];vt=yt[Nt];for(let he=0,fe=se.length;he<fe;he++){let k=ot(se[he],vt[he],wt);T?At(k.x,k.y+F[u-1].y,F[u-1].x+G):At(k.x,k.y,m+G)}}}Le(),ft();function Le(){let at=s.length/3;if(d){let Mt=0,G=lt*Mt;for(let wt=0;wt<ke;wt++){let Nt=Xt[wt];Qt(Nt[2]+G,Nt[1]+G,Nt[0]+G)}Mt=u+p*2,G=lt*Mt;for(let wt=0;wt<ke;wt++){let Nt=Xt[wt];Qt(Nt[0]+G,Nt[1]+G,Nt[2]+G)}}else{for(let Mt=0;Mt<ke;Mt++){let G=Xt[Mt];Qt(G[2],G[1],G[0])}for(let Mt=0;Mt<ke;Mt++){let G=Xt[Mt];Qt(G[0]+lt*u,G[1]+lt*u,G[2]+lt*u)}}n.addGroup(at,s.length/3-at,0)}function ft(){let at=s.length/3,Mt=0;gt(K,Mt),Mt+=K.length;for(let G=0,wt=$.length;G<wt;G++){let Nt=$[G];gt(Nt,Mt),Mt+=Nt.length}n.addGroup(at,s.length/3-at,1)}function gt(at,Mt){let G=at.length;for(;--G>=0;){let wt=G,Nt=G-1;Nt<0&&(Nt=at.length-1);for(let oe=0,se=u+p*2;oe<se;oe++){let he=lt*oe,fe=lt*(oe+1),k=Mt+wt+he,Re=Mt+Nt+he,pe=Mt+Nt+fe,P=Mt+wt+fe;Gt(k,Re,pe,P)}}}function At(at,Mt,G){l.push(at),l.push(Mt),l.push(G)}function Qt(at,Mt,G){le(at),le(Mt),le(G);let wt=s.length/3,Nt=N.generateTopUV(n,s,wt-3,wt-2,wt-1);ae(Nt[0]),ae(Nt[1]),ae(Nt[2])}function Gt(at,Mt,G,wt){le(at),le(Mt),le(wt),le(Mt),le(G),le(wt);let Nt=s.length/3,oe=N.generateSideWallUV(n,s,Nt-6,Nt-3,Nt-2,Nt-1);ae(oe[0]),ae(oe[1]),ae(oe[3]),ae(oe[1]),ae(oe[2]),ae(oe[3])}function le(at){s.push(l[at*3+0]),s.push(l[at*3+1]),s.push(l[at*3+2])}function ae(at){r.push(at.x),r.push(at.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return N0(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new vu[s.type]().fromJSON(s)),new i(n,t.options)}},D0={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],u=t[s*3+1];return[new Ft(r,a),new Ft(o,l),new Ft(c,u)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],u=t[n*3+1],m=t[n*3+2],d=t[s*3],g=t[s*3+1],x=t[s*3+2],A=t[r*3],p=t[r*3+1],f=t[r*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new Ft(a,1-l),new Ft(c,1-m),new Ft(d,1-x),new Ft(A,1-f)]:[new Ft(o,1-l),new Ft(u,1-m),new Ft(g,1-x),new Ft(p,1-f)]}};function N0(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var eo=class i extends ln{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,m=t/o,d=e/l,g=[],x=[],A=[],p=[];for(let f=0;f<u;f++){let N=f*d-a;for(let F=0;F<c;F++){let T=F*m-r;x.push(T,-N,0),A.push(0,0,1),p.push(F/o),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let N=0;N<o;N++){let F=N+c*f,T=N+c*(f+1),M=N+1+c*(f+1),D=N+1+c*f;g.push(F,T,D),g.push(T,M,D)}this.setIndex(g),this.setAttribute("position",new on(x,3)),this.setAttribute("normal",new on(A,3)),this.setAttribute("uv",new on(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var no=class extends ln{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],n=new Set,s=new W,r=new W;if(t.index!==null){let a=t.attributes.position,o=t.index,l=t.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){let m=l[c],d=m.start,g=m.count;for(let x=d,A=d+g;x<A;x+=3)for(let p=0;p<3;p++){let f=o.getX(x+p),N=o.getX(x+(p+1)%3);s.fromBufferAttribute(a,f),r.fromBufferAttribute(a,N),Vf(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{let a=t.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let u=3*o+c,m=3*o+(c+1)%3;s.fromBufferAttribute(a,u),r.fromBufferAttribute(a,m),Vf(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new on(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function Vf(i,t,e){let n=`${i.x},${i.y},${i.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${i.x},${i.y},${i.z}`;return e.has(n)===!0||e.has(s)===!0?!1:(e.add(n),e.add(s),!0)}function tr(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Hf(s))s.isRenderTargetTexture?(de("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Hf(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function On(i){let t={};for(let e=0;e<i.length;e++){let n=tr(i[e]);for(let s in n)t[s]=n[s]}return t}function Hf(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function U0(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ju(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ne.workingColorSpace}var bo={clone:tr,merge:On},F0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,O0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Mn=class extends zi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=F0,this.fragmentShader=O0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=tr(t.uniforms),this.uniformsGroups=U0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new ue().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ft().fromArray(s.value);break;case"v3":this.uniforms[n].value=new W().fromArray(s.value);break;case"v4":this.uniforms[n].value=new $e().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ye().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ze().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},$l=class extends Mn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var io=class extends zi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yc,this.normalScale=new Ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new os,this.combine=oc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Xl=class extends zi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ql=class extends zi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Er(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function uu(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var bs=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Yl=class extends bs{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:mu,endingEnd:mu}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case gu:r=t,o=2*e-n;break;case _u:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case gu:a=t,l=2*n-e;break;case _u:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this._offsetPrev,m=this._offsetNext,d=this._weightPrev,g=this._weightNext,x=(n-e)/(s-e),A=x*x,p=A*x,f=-d*p+2*d*A-d*x,N=(1+d)*p+(-1.5-2*d)*A+(-.5+d)*x+1,F=(-1-g)*p+(1.5+g)*A+.5*x,T=g*p-g*A;for(let M=0;M!==o;++M)r[M]=f*a[u+M]+N*a[c+M]+F*a[l+M]+T*a[m+M];return r}},Zl=class extends bs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=(n-e)/(s-e),m=1-u;for(let d=0;d!==o;++d)r[d]=a[c+d]*m+a[l+d]*u;return r}},Jl=class extends bs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Kl=class extends bs{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this.inTangents,m=this.outTangents;if(!u||!m){let x=(n-e)/(s-e),A=1-x;for(let p=0;p!==o;++p)r[p]=a[c+p]*A+a[l+p]*x;return r}let d=o*2,g=t-1;for(let x=0;x!==o;++x){let A=a[c+x],p=a[l+x],f=g*d+x*2,N=m[f],F=m[f+1],T=t*d+x*2,M=u[T],D=u[T+1],H=k0(n,e,N,M,s);r[x]=kp(H,A,F,D,p)}return r}};function kp(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function B0(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function k0(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=kp(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=B0(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var li=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Er(e,this.TimeBufferType),this.values=Er(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Er(t.times,Array),values:Er(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),uu(t.settings)&&(n.settings={inTangents:Er(t.settings.inTangents,Array),outTangents:Er(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Jl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Zl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Yl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Kl(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Pa:e=this.InterpolantFactoryMethodDiscrete;break;case Rl:e=this.InterpolantFactoryMethodLinear;break;case xl:e=this.InterpolantFactoryMethodSmooth;break;case pu:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return de("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Pa;case this.InterpolantFactoryMethodLinear:return Rl;case this.InterpolantFactoryMethodSmooth:return xl;case this.InterpolantFactoryMethodBezier:return pu}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;uu(this.settings)&&(Gf(this.settings.inTangents,t),Gf(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(me("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(me("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){me("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){me("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Ag(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){me("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===xl,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],u=t[o+1];if(c!==u&&(o!==1||c!==t[0]))if(s)l=!0;else{let m=o*n,d=m-n,g=m+n;for(let x=0;x!==n;++x){let A=e[m+x];if(A!==e[d+x]||A!==e[g+x]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let m=o*n,d=a*n;for(let g=0;g!==n;++g)e[d+g]=e[m+g]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,uu(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Gf(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}li.prototype.ValueTypeName="";li.prototype.TimeBufferType=Float32Array;li.prototype.ValueBufferType=Float32Array;li.prototype.DefaultInterpolation=Rl;var Ms=class extends li{constructor(t,e,n){super(t,e,n)}};Ms.prototype.ValueTypeName="bool";Ms.prototype.ValueBufferType=Array;Ms.prototype.DefaultInterpolation=Pa;Ms.prototype.InterpolantFactoryMethodLinear=void 0;Ms.prototype.InterpolantFactoryMethodSmooth=void 0;var jl=class extends li{constructor(t,e,n,s){super(t,e,n,s)}};jl.prototype.ValueTypeName="color";var Ql=class extends li{constructor(t,e,n,s){super(t,e,n,s)}};Ql.prototype.ValueTypeName="number";var tc=class extends bs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let u=c+o;c!==u;c+=4)ki.slerpFlat(r,0,a,c-o,a,c,l);return r}},so=class extends li{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new tc(this.times,this.values,this.getValueSize(),t)}};so.prototype.ValueTypeName="quaternion";so.prototype.InterpolantFactoryMethodSmooth=void 0;var ws=class extends li{constructor(t,e,n){super(t,e,n)}};ws.prototype.ValueTypeName="string";ws.prototype.ValueBufferType=Array;ws.prototype.DefaultInterpolation=Pa;ws.prototype.InterpolantFactoryMethodLinear=void 0;ws.prototype.InterpolantFactoryMethodSmooth=void 0;var ec=class extends li{constructor(t,e,n,s){super(t,e,n,s)}};ec.prototype.ValueTypeName="vector";var nc=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,m){return c.push(u,m),this},this.removeHandler=function(u){let m=c.indexOf(u);return m!==-1&&c.splice(m,2),this},this.getHandler=function(u){for(let m=0,d=c.length;m<d;m+=2){let g=c[m],x=c[m+1];if(g.global&&(g.lastIndex=0),g.test(u))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},zp=new nc,ic=class{constructor(t){this.manager=t!==void 0?t:zp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};ic.DEFAULT_MATERIAL_NAME="__DEFAULT";var ro=class extends Sn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ue(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},ao=class extends ro{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Sn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ue(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},du=new ze,Wf=new W,$f=new W,sc=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ft(512,512),this.mapType=Qn,this.map=null,this.mapPass=null,this.matrix=new ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Br,this._frameExtents=new Ft(1,1),this._viewportCount=1,this._viewports=[new $e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Wf.setFromMatrixPosition(t.matrixWorld),e.position.copy(Wf),$f.setFromMatrixPosition(t.target.matrixWorld),e.lookAt($f),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){du.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(du,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Lr||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(du)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},ml=new W,gl=new ki,Ni=new W,oo=class extends Sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ze,this.projectionMatrix=new ze,this.projectionMatrixInverse=new ze,this.coordinateSystem=Ei,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ml,gl,Ni),Ni.x===1&&Ni.y===1&&Ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ml,gl,Ni.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(ml,gl,Ni),Ni.x===1&&Ni.y===1&&Ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ml,gl,Ni.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},vs=new W,Xf=new Ft,qf=new Ft,Fn=class extends oo{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Nr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Aa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Nr*2*Math.atan(Math.tan(Aa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){vs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(vs.x,vs.y).multiplyScalar(-t/vs.z),vs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(vs.x,vs.y).multiplyScalar(-t/vs.z)}getViewSize(t,e){return this.getViewBounds(t,Xf,qf),e.subVectors(qf,Xf)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Aa*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Gr=class extends oo{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Mu=class extends sc{constructor(){super(new Gr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},lo=class extends ro{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Sn.DEFAULT_UP),this.updateMatrix(),this.target=new Sn,this.shadow=new Mu}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var co=class extends ln{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var Tr=-90,Ar=1,rc=class extends Sn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Fn(Tr,Ar,t,e);s.layers=this.layers,this.add(s);let r=new Fn(Tr,Ar,t,e);r.layers=this.layers,this.add(r);let a=new Fn(Tr,Ar,t,e);a.layers=this.layers,this.add(a);let o=new Fn(Tr,Ar,t,e);o.layers=this.layers,this.add(o);let l=new Fn(Tr,Ar,t,e);l.layers=this.layers,this.add(l);let c=new Fn(Tr,Ar,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Ei)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Lr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,m=t.getRenderTarget(),d=t.getActiveCubeFace(),g=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;let A=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=A,t.setRenderTarget(n,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(m,d,g),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},ac=class extends Fn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Qu="\\[\\]\\.:\\/",z0=new RegExp("["+Qu+"]","g"),td="[^"+Qu+"]",V0="[^"+Qu.replace("\\.","")+"]",H0=/((?:WC+[\/:])*)/.source.replace("WC",td),G0=/(WCOD+)?/.source.replace("WCOD",V0),W0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",td),$0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",td),X0=new RegExp("^"+H0+G0+W0+$0+"$"),q0=["material","materials","bones","map"],wu=class{constructor(t,e,n){let s=n||je.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},je=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(z0,"")}static parseTrackName(t){let e=X0.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);q0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){de("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){me("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){me("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){me("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){me("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){me("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){me("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){me("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;me("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){me("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){me("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};je.Composite=wu;je.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};je.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};je.prototype.GetterByBindingType=[je.prototype._getValue_direct,je.prototype._getValue_array,je.prototype._getValue_arrayElement,je.prototype._getValue_toArray];je.prototype.SetterByBindingTypeAndVersioning=[[je.prototype._setValue_direct,je.prototype._setValue_direct_setNeedsUpdate,je.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[je.prototype._setValue_array,je.prototype._setValue_array_setNeedsUpdate,je.prototype._setValue_array_setMatrixWorldNeedsUpdate],[je.prototype._setValue_arrayElement,je.prototype._setValue_arrayElement_setNeedsUpdate,je.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[je.prototype._setValue_fromArray,je.prototype._setValue_fromArray_setNeedsUpdate,je.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ab=new Float32Array(1);var Es=class extends Dl{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}};var Yf=new ze,ho=class{constructor(t,e,n=0,s=1/0){this.ray=new Xs(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Fr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):me("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Yf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Yf),this}intersectObject(t,e=!0,n=[]){return Eu(t,this,n,e),n.sort(Zf),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Eu(t[s],this,n,e);return n.sort(Zf),n}};function Zf(i,t){return i.distance-t.distance}function Eu(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Eu(r[a],t,e,!0)}}var Tu=class i{static{i.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};var Jf=new W,_l=new W,Cr=new W,Rr=new W,fu=new W,Y0=new W,Z0=new W,uo=class{constructor(t=new W,e=new W){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Jf.subVectors(t,this.start),_l.subVectors(this.end,this.start);let n=_l.dot(_l);if(n===0)return 0;let r=_l.dot(Jf)/n;return e&&(r=Se(r,0,1)),r}closestPointToPoint(t,e,n){let s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}distanceSqToLine3(t,e=Y0,n=Z0){let s=10000000000000001e-32,r,a,o=this.start,l=t.start,c=this.end,u=t.end;Cr.subVectors(c,o),Rr.subVectors(u,l),fu.subVectors(o,l);let m=Cr.dot(Cr),d=Rr.dot(Rr),g=Rr.dot(fu);if(m<=s&&d<=s)return e.copy(o),n.copy(l),e.sub(n),e.dot(e);if(m<=s)r=0,a=g/d,a=Se(a,0,1);else{let x=Cr.dot(fu);if(d<=s)a=0,r=Se(-x/m,0,1);else{let A=Cr.dot(Rr),p=m*d-A*A;p!==0?r=Se((A*g-x*d)/p,0,1):r=0,a=(A*r+g)/d,a<0?(a=0,r=Se(-x/m,0,1)):a>1&&(a=1,r=Se((A-x)/m,0,1))}}return e.copy(o).addScaledVector(Cr,r),n.copy(l).addScaledVector(Rr,a),e.distanceToSquared(n)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};function ed(i,t,e,n){let s=J0(n);switch(e){case $u:return i*t;case pc:return i*t/s.components*s.byteLength;case mc:return i*t/s.components*s.byteLength;case Is:return i*t*2/s.components*s.byteLength;case gc:return i*t*2/s.components*s.byteLength;case Xu:return i*t*3/s.components*s.byteLength;case gi:return i*t*4/s.components*s.byteLength;case _c:return i*t*4/s.components*s.byteLength;case go:case _o:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case xo:case vo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case vc:case Sc:return Math.max(i,16)*Math.max(t,8)/4;case xc:case yc:return Math.max(i,8)*Math.max(t,8)/2;case bc:case Mc:case Ec:case Tc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case wc:case yo:case Ac:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Cc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Rc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ic:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Pc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Lc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Dc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Nc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Uc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Fc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Oc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Bc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case kc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case zc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Vc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Hc:case Gc:case Wc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case $c:case Xc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case So:case qc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function J0(i){switch(i){case Qn:case Vu:return{byteLength:1,components:1};case Xr:case Hu:case Ii:return{byteLength:2,components:1};case dc:case fc:return{byteLength:2,components:4};case Ri:case uc:case mi:return{byteLength:4,components:1};case Gu:case Wu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?de("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function lm(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function j0(i){let t=new WeakMap;function e(o,l){let c=o.array,u=o.usage,m=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),o.onUploadCallback();let g;if(c instanceof Float32Array)g=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)g=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?g=i.HALF_FLOAT:g=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=i.SHORT;else if(c instanceof Uint32Array)g=i.UNSIGNED_INT;else if(c instanceof Int32Array)g=i.INT;else if(c instanceof Int8Array)g=i.BYTE;else if(c instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:m}}function n(o,l,c){let u=l.array,m=l.updateRanges;if(i.bindBuffer(c,o),m.length===0)i.bufferSubData(c,0,u);else{m.sort((g,x)=>g.start-x.start);let d=0;for(let g=1;g<m.length;g++){let x=m[d],A=m[g];A.start<=x.start+x.count+1?x.count=Math.max(x.count,A.start+A.count-x.start):(++d,m[d]=A)}m.length=d+1;for(let g=0,x=m.length;g<x;g++){let A=m[g];i.bufferSubData(c,A.start*u.BYTES_PER_ELEMENT,u,A.start,A.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Q0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,t_=`#ifdef USE_ALPHAHASH
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
#endif`,e_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,n_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,i_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,s_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,r_=`#ifdef USE_AOMAP
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
#endif`,a_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,o_=`#ifdef USE_BATCHING
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
#endif`,l_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,c_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,h_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,u_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,d_=`#ifdef USE_IRIDESCENCE
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
#endif`,f_=`#ifdef USE_BUMPMAP
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
#endif`,p_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,m_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,g_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,__=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,x_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,v_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,y_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,S_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,b_=`#define PI 3.141592653589793
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
} // validated`,M_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,w_=`vec3 transformedNormal = objectNormal;
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
#endif`,E_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,T_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,A_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,C_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,R_="gl_FragColor = linearToOutputTexel( gl_FragColor );",I_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,P_=`#ifdef USE_ENVMAP
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
#endif`,L_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,D_=`#ifdef USE_ENVMAP
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
#endif`,N_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,U_=`#ifdef USE_ENVMAP
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
#endif`,F_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,O_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,B_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,k_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,z_=`#ifdef USE_GRADIENTMAP
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
}`,V_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,H_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,G_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,W_=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,$_=`#ifdef USE_ENVMAP
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
#endif`,X_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,q_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Y_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Z_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,J_=`PhysicalMaterial material;
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
#endif`,K_=`uniform sampler2D dfgLUT;
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
}`,j_=`
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
#endif`,Q_=`#if defined( RE_IndirectDiffuse )
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
#endif`,tx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ex=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,nx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ix=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ax=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ox=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,cx=`#if defined( USE_POINTS_UV )
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
#endif`,hx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ux=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,px=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mx=`#ifdef USE_MORPHTARGETS
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
#endif`,gx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_x=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,xx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,vx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,bx=`#ifdef USE_NORMALMAP
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
#endif`,Mx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ex=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Tx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ax=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Rx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ix=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Px=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Dx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Nx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ux=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ox=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Bx=`float getShadowMask() {
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
}`,kx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zx=`#ifdef USE_SKINNING
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
#endif`,Vx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hx=`#ifdef USE_SKINNING
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
#endif`,Gx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$x=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,qx=`#ifdef USE_TRANSMISSION
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
#endif`,Yx=`#ifdef USE_TRANSMISSION
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
#endif`,Zx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Qx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tv=`uniform sampler2D t2D;
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
}`,ev=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,iv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rv=`#include <common>
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
}`,av=`#if DEPTH_PACKING == 3200
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
}`,ov=`#define DISTANCE
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
}`,lv=`#define DISTANCE
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
}`,cv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uv=`uniform float scale;
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
}`,dv=`uniform vec3 diffuse;
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
}`,fv=`#include <common>
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
}`,pv=`uniform vec3 diffuse;
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
}`,mv=`#define LAMBERT
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
}`,gv=`#define LAMBERT
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
}`,_v=`#define MATCAP
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
}`,xv=`#define MATCAP
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
}`,vv=`#define NORMAL
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
}`,yv=`#define NORMAL
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
}`,Sv=`#define PHONG
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
}`,bv=`#define PHONG
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
}`,Mv=`#define STANDARD
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
}`,wv=`#define STANDARD
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
}`,Ev=`#define TOON
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
}`,Tv=`#define TOON
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
}`,Av=`uniform float size;
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
}`,Cv=`uniform vec3 diffuse;
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
}`,Rv=`#include <common>
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
}`,Iv=`uniform vec3 color;
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
}`,Pv=`uniform float rotation;
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
}`,Lv=`uniform vec3 diffuse;
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
}`,Ae={alphahash_fragment:Q0,alphahash_pars_fragment:t_,alphamap_fragment:e_,alphamap_pars_fragment:n_,alphatest_fragment:i_,alphatest_pars_fragment:s_,aomap_fragment:r_,aomap_pars_fragment:a_,batching_pars_vertex:o_,batching_vertex:l_,begin_vertex:c_,beginnormal_vertex:h_,bsdfs:u_,iridescence_fragment:d_,bumpmap_pars_fragment:f_,clipping_planes_fragment:p_,clipping_planes_pars_fragment:m_,clipping_planes_pars_vertex:g_,clipping_planes_vertex:__,color_fragment:x_,color_pars_fragment:v_,color_pars_vertex:y_,color_vertex:S_,common:b_,cube_uv_reflection_fragment:M_,defaultnormal_vertex:w_,displacementmap_pars_vertex:E_,displacementmap_vertex:T_,emissivemap_fragment:A_,emissivemap_pars_fragment:C_,colorspace_fragment:R_,colorspace_pars_fragment:I_,envmap_fragment:P_,envmap_common_pars_fragment:L_,envmap_pars_fragment:D_,envmap_pars_vertex:N_,envmap_physical_pars_fragment:$_,envmap_vertex:U_,fog_vertex:F_,fog_pars_vertex:O_,fog_fragment:B_,fog_pars_fragment:k_,gradientmap_pars_fragment:z_,lightmap_pars_fragment:V_,lights_lambert_fragment:H_,lights_lambert_pars_fragment:G_,lights_pars_begin:W_,lights_toon_fragment:X_,lights_toon_pars_fragment:q_,lights_phong_fragment:Y_,lights_phong_pars_fragment:Z_,lights_physical_fragment:J_,lights_physical_pars_fragment:K_,lights_fragment_begin:j_,lights_fragment_maps:Q_,lights_fragment_end:tx,lightprobes_pars_fragment:ex,logdepthbuf_fragment:nx,logdepthbuf_pars_fragment:ix,logdepthbuf_pars_vertex:sx,logdepthbuf_vertex:rx,map_fragment:ax,map_pars_fragment:ox,map_particle_fragment:lx,map_particle_pars_fragment:cx,metalnessmap_fragment:hx,metalnessmap_pars_fragment:ux,morphinstance_vertex:dx,morphcolor_vertex:fx,morphnormal_vertex:px,morphtarget_pars_vertex:mx,morphtarget_vertex:gx,normal_fragment_begin:_x,normal_fragment_maps:xx,normal_pars_fragment:vx,normal_pars_vertex:yx,normal_vertex:Sx,normalmap_pars_fragment:bx,clearcoat_normal_fragment_begin:Mx,clearcoat_normal_fragment_maps:wx,clearcoat_pars_fragment:Ex,iridescence_pars_fragment:Tx,opaque_fragment:Ax,packing:Cx,premultiplied_alpha_fragment:Rx,project_vertex:Ix,dithering_fragment:Px,dithering_pars_fragment:Lx,roughnessmap_fragment:Dx,roughnessmap_pars_fragment:Nx,shadowmap_pars_fragment:Ux,shadowmap_pars_vertex:Fx,shadowmap_vertex:Ox,shadowmask_pars_fragment:Bx,skinbase_vertex:kx,skinning_pars_vertex:zx,skinning_vertex:Vx,skinnormal_vertex:Hx,specularmap_fragment:Gx,specularmap_pars_fragment:Wx,tonemapping_fragment:$x,tonemapping_pars_fragment:Xx,transmission_fragment:qx,transmission_pars_fragment:Yx,uv_pars_fragment:Zx,uv_pars_vertex:Jx,uv_vertex:Kx,worldpos_vertex:jx,background_vert:Qx,background_frag:tv,backgroundCube_vert:ev,backgroundCube_frag:nv,cube_vert:iv,cube_frag:sv,depth_vert:rv,depth_frag:av,distance_vert:ov,distance_frag:lv,equirect_vert:cv,equirect_frag:hv,linedashed_vert:uv,linedashed_frag:dv,meshbasic_vert:fv,meshbasic_frag:pv,meshlambert_vert:mv,meshlambert_frag:gv,meshmatcap_vert:_v,meshmatcap_frag:xv,meshnormal_vert:vv,meshnormal_frag:yv,meshphong_vert:Sv,meshphong_frag:bv,meshphysical_vert:Mv,meshphysical_frag:wv,meshtoon_vert:Ev,meshtoon_frag:Tv,points_vert:Av,points_frag:Cv,shadow_vert:Rv,shadow_frag:Iv,sprite_vert:Pv,sprite_frag:Lv},kt={common:{diffuse:{value:new ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ye},alphaMap:{value:null},alphaMapTransform:{value:new ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ye}},envmap:{envMap:{value:null},envMapRotation:{value:new ye},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ye},normalScale:{value:new Ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new W},probesMax:{value:new W},probesResolution:{value:new W}},points:{diffuse:{value:new ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ye},alphaTest:{value:0},uvTransform:{value:new ye}},sprite:{diffuse:{value:new ue(16777215)},opacity:{value:1},center:{value:new Ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ye},alphaMap:{value:null},alphaMapTransform:{value:new ye},alphaTest:{value:0}}},$n={basic:{uniforms:On([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.fog]),vertexShader:Ae.meshbasic_vert,fragmentShader:Ae.meshbasic_frag},lambert:{uniforms:On([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,kt.lights,{emissive:{value:new ue(0)},envMapIntensity:{value:1}}]),vertexShader:Ae.meshlambert_vert,fragmentShader:Ae.meshlambert_frag},phong:{uniforms:On([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,kt.lights,{emissive:{value:new ue(0)},specular:{value:new ue(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ae.meshphong_vert,fragmentShader:Ae.meshphong_frag},standard:{uniforms:On([kt.common,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.roughnessmap,kt.metalnessmap,kt.fog,kt.lights,{emissive:{value:new ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ae.meshphysical_vert,fragmentShader:Ae.meshphysical_frag},toon:{uniforms:On([kt.common,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.gradientmap,kt.fog,kt.lights,{emissive:{value:new ue(0)}}]),vertexShader:Ae.meshtoon_vert,fragmentShader:Ae.meshtoon_frag},matcap:{uniforms:On([kt.common,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,{matcap:{value:null}}]),vertexShader:Ae.meshmatcap_vert,fragmentShader:Ae.meshmatcap_frag},points:{uniforms:On([kt.points,kt.fog]),vertexShader:Ae.points_vert,fragmentShader:Ae.points_frag},dashed:{uniforms:On([kt.common,kt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ae.linedashed_vert,fragmentShader:Ae.linedashed_frag},depth:{uniforms:On([kt.common,kt.displacementmap]),vertexShader:Ae.depth_vert,fragmentShader:Ae.depth_frag},normal:{uniforms:On([kt.common,kt.bumpmap,kt.normalmap,kt.displacementmap,{opacity:{value:1}}]),vertexShader:Ae.meshnormal_vert,fragmentShader:Ae.meshnormal_frag},sprite:{uniforms:On([kt.sprite,kt.fog]),vertexShader:Ae.sprite_vert,fragmentShader:Ae.sprite_frag},background:{uniforms:{uvTransform:{value:new ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ae.background_vert,fragmentShader:Ae.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ye}},vertexShader:Ae.backgroundCube_vert,fragmentShader:Ae.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ae.cube_vert,fragmentShader:Ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ae.equirect_vert,fragmentShader:Ae.equirect_frag},distance:{uniforms:On([kt.common,kt.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ae.distance_vert,fragmentShader:Ae.distance_frag},shadow:{uniforms:On([kt.lights,kt.fog,{color:{value:new ue(0)},opacity:{value:1}}]),vertexShader:Ae.shadow_vert,fragmentShader:Ae.shadow_frag}};$n.physical={uniforms:On([$n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ye},clearcoatNormalScale:{value:new Ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ye},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ye},sheen:{value:0},sheenColor:{value:new ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ye},transmissionSamplerSize:{value:new Ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ye},attenuationDistance:{value:0},attenuationColor:{value:new ue(0)},specularColor:{value:new ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ye},anisotropyVector:{value:new Ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ye}}]),vertexShader:Ae.meshphysical_vert,fragmentShader:Ae.meshphysical_frag};var Kc={r:0,b:0,g:0},Dv=new ze,cm=new ye;cm.set(-1,0,0,0,1,0,0,0,1);function Nv(i,t,e,n,s,r){let a=new ue(0),o=s===!0?0:1,l,c,u=null,m=0,d=null;function g(N){let F=N.isScene===!0?N.background:null;if(F&&F.isTexture){let T=N.backgroundBlurriness>0;F=t.get(F,T)}return F}function x(N){let F=!1,T=g(N);T===null?p(a,o):T&&T.isColor&&(p(T,1),F=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?e.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||F)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function A(N,F){let T=g(F);T&&(T.isCubeTexture||T.mapping===po)?(c===void 0&&(c=new bn(new kr(1,1,1),new Mn({name:"BackgroundCubeMaterial",uniforms:tr($n.backgroundCube.uniforms),vertexShader:$n.backgroundCube.vertexShader,fragmentShader:$n.backgroundCube.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,D,H){this.matrixWorld.copyPosition(H.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=T,c.material.uniforms.backgroundBlurriness.value=F.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Dv.makeRotationFromEuler(F.backgroundRotation)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(cm),c.material.toneMapped=Ne.getTransfer(T.colorSpace)!==We,(u!==T||m!==T.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=T,m=T.version,d=i.toneMapping),c.layers.enableAll(),N.unshift(c,c.geometry,c.material,0,0,null)):T&&T.isTexture&&(l===void 0&&(l=new bn(new eo(2,2),new Mn({name:"BackgroundMaterial",uniforms:tr($n.background.uniforms),vertexShader:$n.background.vertexShader,fragmentShader:$n.background.fragmentShader,side:Ts,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=T,l.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,l.material.toneMapped=Ne.getTransfer(T.colorSpace)!==We,T.matrixAutoUpdate===!0&&T.updateMatrix(),l.material.uniforms.uvTransform.value.copy(T.matrix),(u!==T||m!==T.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=T,m=T.version,d=i.toneMapping),l.layers.enableAll(),N.unshift(l,l.geometry,l.material,0,0,null))}function p(N,F){N.getRGB(Kc,ju(i)),e.buffers.color.setClear(Kc.r,Kc.g,Kc.b,F,r)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(N,F=1){a.set(N),o=F,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(N){o=N,p(a,o)},render:x,addToRenderList:A,dispose:f}}function Uv(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o($,Q,nt,Y,K){let ot=!1,lt=m($,Y,nt,Q);r!==lt&&(r=lt,c(r.object)),ot=g($,Y,nt,K),ot&&x($,Y,nt,K),K!==null&&t.update(K,i.ELEMENT_ARRAY_BUFFER),(ot||a)&&(a=!1,T($,Q,nt,Y),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function l(){return i.createVertexArray()}function c($){return i.bindVertexArray($)}function u($){return i.deleteVertexArray($)}function m($,Q,nt,Y){let K=Y.wireframe===!0,ot=n[Q.id];ot===void 0&&(ot={},n[Q.id]=ot);let lt=$.isInstancedMesh===!0?$.id:0,bt=ot[lt];bt===void 0&&(bt={},ot[lt]=bt);let ct=bt[nt.id];ct===void 0&&(ct={},bt[nt.id]=ct);let yt=ct[K];return yt===void 0&&(yt=d(l()),ct[K]=yt),yt}function d($){let Q=[],nt=[],Y=[];for(let K=0;K<e;K++)Q[K]=0,nt[K]=0,Y[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Q,enabledAttributes:nt,attributeDivisors:Y,object:$,attributes:{},index:null}}function g($,Q,nt,Y){let K=r.attributes,ot=Q.attributes,lt=0,bt=nt.getAttributes();for(let ct in bt)if(bt[ct].location>=0){let vt=K[ct],Ht=ot[ct];if(Ht===void 0&&(ct==="instanceMatrix"&&$.instanceMatrix&&(Ht=$.instanceMatrix),ct==="instanceColor"&&$.instanceColor&&(Ht=$.instanceColor)),vt===void 0||vt.attribute!==Ht||Ht&&vt.data!==Ht.data)return!0;lt++}return r.attributesNum!==lt||r.index!==Y}function x($,Q,nt,Y){let K={},ot=Q.attributes,lt=0,bt=nt.getAttributes();for(let ct in bt)if(bt[ct].location>=0){let vt=ot[ct];vt===void 0&&(ct==="instanceMatrix"&&$.instanceMatrix&&(vt=$.instanceMatrix),ct==="instanceColor"&&$.instanceColor&&(vt=$.instanceColor));let Ht={};Ht.attribute=vt,vt&&vt.data&&(Ht.data=vt.data),K[ct]=Ht,lt++}r.attributes=K,r.attributesNum=lt,r.index=Y}function A(){let $=r.newAttributes;for(let Q=0,nt=$.length;Q<nt;Q++)$[Q]=0}function p($){f($,0)}function f($,Q){let nt=r.newAttributes,Y=r.enabledAttributes,K=r.attributeDivisors;nt[$]=1,Y[$]===0&&(i.enableVertexAttribArray($),Y[$]=1),K[$]!==Q&&(i.vertexAttribDivisor($,Q),K[$]=Q)}function N(){let $=r.newAttributes,Q=r.enabledAttributes;for(let nt=0,Y=Q.length;nt<Y;nt++)Q[nt]!==$[nt]&&(i.disableVertexAttribArray(nt),Q[nt]=0)}function F($,Q,nt,Y,K,ot,lt){lt===!0?i.vertexAttribIPointer($,Q,nt,K,ot):i.vertexAttribPointer($,Q,nt,Y,K,ot)}function T($,Q,nt,Y){A();let K=Y.attributes,ot=nt.getAttributes(),lt=Q.defaultAttributeValues;for(let bt in ot){let ct=ot[bt];if(ct.location>=0){let yt=K[bt];if(yt===void 0&&(bt==="instanceMatrix"&&$.instanceMatrix&&(yt=$.instanceMatrix),bt==="instanceColor"&&$.instanceColor&&(yt=$.instanceColor)),yt!==void 0){let vt=yt.normalized,Ht=yt.itemSize,Xt=t.get(yt);if(Xt===void 0)continue;let ke=Xt.buffer,Me=Xt.type,Le=Xt.bytesPerElement,ft=Me===i.INT||Me===i.UNSIGNED_INT||yt.gpuType===uc;if(yt.isInterleavedBufferAttribute){let gt=yt.data,At=gt.stride,Qt=yt.offset;if(gt.isInstancedInterleavedBuffer){for(let Gt=0;Gt<ct.locationSize;Gt++)f(ct.location+Gt,gt.meshPerAttribute);$.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let Gt=0;Gt<ct.locationSize;Gt++)p(ct.location+Gt);i.bindBuffer(i.ARRAY_BUFFER,ke);for(let Gt=0;Gt<ct.locationSize;Gt++)F(ct.location+Gt,Ht/ct.locationSize,Me,vt,At*Le,(Qt+Ht/ct.locationSize*Gt)*Le,ft)}else{if(yt.isInstancedBufferAttribute){for(let gt=0;gt<ct.locationSize;gt++)f(ct.location+gt,yt.meshPerAttribute);$.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let gt=0;gt<ct.locationSize;gt++)p(ct.location+gt);i.bindBuffer(i.ARRAY_BUFFER,ke);for(let gt=0;gt<ct.locationSize;gt++)F(ct.location+gt,Ht/ct.locationSize,Me,vt,Ht*Le,Ht/ct.locationSize*gt*Le,ft)}}else if(lt!==void 0){let vt=lt[bt];if(vt!==void 0)switch(vt.length){case 2:i.vertexAttrib2fv(ct.location,vt);break;case 3:i.vertexAttrib3fv(ct.location,vt);break;case 4:i.vertexAttrib4fv(ct.location,vt);break;default:i.vertexAttrib1fv(ct.location,vt)}}}}N()}function M(){L();for(let $ in n){let Q=n[$];for(let nt in Q){let Y=Q[nt];for(let K in Y){let ot=Y[K];for(let lt in ot)u(ot[lt].object),delete ot[lt];delete Y[K]}}delete n[$]}}function D($){if(n[$.id]===void 0)return;let Q=n[$.id];for(let nt in Q){let Y=Q[nt];for(let K in Y){let ot=Y[K];for(let lt in ot)u(ot[lt].object),delete ot[lt];delete Y[K]}}delete n[$.id]}function H($){for(let Q in n){let nt=n[Q];for(let Y in nt){let K=nt[Y];if(K[$.id]===void 0)continue;let ot=K[$.id];for(let lt in ot)u(ot[lt].object),delete ot[lt];delete K[$.id]}}}function w($){for(let Q in n){let nt=n[Q],Y=$.isInstancedMesh===!0?$.id:0,K=nt[Y];if(K!==void 0){for(let ot in K){let lt=K[ot];for(let bt in lt)u(lt[bt].object),delete lt[bt];delete K[ot]}delete nt[Y],Object.keys(nt).length===0&&delete n[Q]}}}function L(){V(),a=!0,r!==s&&(r=s,c(r.object))}function V(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:V,dispose:M,releaseStatesOfGeometry:D,releaseStatesOfObject:w,releaseStatesOfProgram:H,initAttributes:A,enableAttribute:p,disableUnusedAttributes:N}}function Fv(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),e.update(c,n,u))}function o(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let d=0;for(let g=0;g<u;g++)d+=c[g];e.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Ov(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let H=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(H.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(H){return!(H!==gi&&n.convert(H)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(H){let w=H===Ii&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(H!==Qn&&H!==mi&&!w&&n.convert(H)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(H){if(H==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";H="mediump"}return H==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(de("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let m=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&d===!1&&de("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let g=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),N=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),F=i.getParameter(i.MAX_VARYING_VECTORS),T=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),D=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:m,reversedDepthBuffer:d,maxTextures:g,maxVertexTextures:x,maxTextureSize:A,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:N,maxVaryings:F,maxFragmentUniforms:T,maxSamples:M,samples:D}}function Bv(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Mi,o=new ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(m,d){let g=m.length!==0||d||n!==0||s;return s=d,n=m.length,g},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(m,d){e=u(m,d,0)},this.setState=function(m,d,g){let x=m.clippingPlanes,A=m.clipIntersection,p=m.clipShadows,f=i.get(m);if(!s||x===null||x.length===0||r&&!p)r?u(null):c();else{let N=r?0:n,F=N*4,T=f.clippingState||null;l.value=T,T=u(x,d,F,g);for(let M=0;M!==F;++M)T[M]=e[M];f.clippingState=T,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=N}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(m,d,g,x){let A=m!==null?m.length:0,p=null;if(A!==0){if(p=l.value,x!==!0||p===null){let f=g+A*4,N=d.matrixWorldInverse;o.getNormalMatrix(N),(p===null||p.length<f)&&(p=new Float32Array(f));for(let F=0,T=g;F!==A;++F,T+=4)a.copy(m[F]).applyMatrix4(N,o),a.normal.toArray(p,T),p[T+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,p}}var Zr=4,kv=6,zv=20,Vv=256,Mo=new Gr,Vp=new ue,nd=null,id=0,sd=0,rd=!1,Hv=new W,er=new W,Qc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=Hv}=r;nd=this._renderer.getRenderTarget(),id=this._renderer.getActiveCubeFace(),sd=this._renderer.getActiveMipmapLevel(),rd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(nd,id,sd),this._renderer.xr.enabled=rd,t.scissorTest=!1,Yr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===As||t.mapping===Qs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),nd=this._renderer.getRenderTarget(),id=this._renderer.getActiveCubeFace(),sd=this._renderer.getActiveMipmapLevel(),rd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Rn,minFilter:Rn,generateMipmaps:!1,type:Ii,format:gi,colorSpace:La,depthBuffer:!1},s=Hp(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hp(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Gv(r)),this._blurMaterial=$v(r,t,e),this._ggxMaterial=Wv(r,t,e)}return s}_compileMaterial(t){let e=new bn(new ln,t);this._renderer.compile(e,Mo)}_sceneToCubeUV(t,e,n,s,r){let l=new Fn(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],m=this._renderer,d=m.autoClear,g=m.toneMapping;m.getClearColor(Vp),m.toneMapping=Ci,m.autoClear=!1,m.state.buffers.depth.getReversed()&&(m.setRenderTarget(s),m.clearDepth(),m.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new bn(new kr,new qs({name:"PMREM.Background",side:Wn,depthWrite:!1,depthTest:!1})));let A=this._backgroundBox,p=A.material,f=!1,N=t.background;N?N.isColor&&(p.color.copy(N),t.background=null,f=!0):(p.color.copy(Vp),f=!0);for(let F=0;F<6;F++){let T=F%3;T===0?(l.up.set(0,c[F],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[F],r.y,r.z)):T===1?(l.up.set(0,0,c[F]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[F],r.z)):(l.up.set(0,c[F],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[F]));let M=this._cubeSize;Yr(s,T*M,F>2?M:0,M,M),m.setRenderTarget(s),f&&m.render(A,l),m.render(t,l)}m.toneMapping=g,m.autoClear=d,t.background=N}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===As||t.mapping===Qs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wp()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gp());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Yr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Mo)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),m=Math.sqrt(c*c-u*u),d=c*1.25,g=m*d,{_lodMax:x}=this,A=this._sizeLods[n],p=3*A*(n>x-Zr?n-x+Zr:0),f=4*(this._cubeSize-A);l.envMap.value=t.texture,l.roughness.value=g,l.mipInt.value=x-e,Yr(r,p,f,3*A,2*A),s.setRenderTarget(r),s.render(o,Mo),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=x-n,Yr(t,p,f,3*A,2*A),s.setRenderTarget(t),s.render(o,Mo)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let u=this._sizeLods[s],m=3*u*(s>this._lodMax-Zr?s-this._lodMax+Zr:0),d=4*(this._cubeSize-u);Yr(e,m,d,3*u,2*u),a.setRenderTarget(e),a.render(l,Mo)}};function Gv(i){let t=[],e=[],n=i,s=i-Zr+1+kv;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],m=6,d=6,g=3,x=new Float32Array(g*d*m),A=new Float32Array(g*d*m);for(let f=0;f<m;f++){let N=f%3*2/3-1,F=f>2?0:-1,T=[N,F,0,N+2/3,F,0,N+2/3,F+1,0,N,F,0,N+2/3,F+1,0,N,F+1,0];x.set(T,g*d*f);for(let M=0;M<d;M++){let D=u[M*2]*2-1,H=u[M*2+1]*2-1;f===0?er.set(1,H,D):f===1?er.set(-D,1,-H):f===2?er.set(-D,H,1):f===3?er.set(-1,H,-D):f===4?er.set(-D,-1,H):er.set(D,H,-1),er.toArray(A,(f*d+M)*g)}}let p=new ln;p.setAttribute("position",new Ye(x,g)),p.setAttribute("outputDirection",new Ye(A,g)),e.push(new bn(p,null)),n>Zr&&n--}return{lodMeshes:e,sizeLods:t}}function Hp(i,t,e){let n=new Kn(i,t,e);return n.texture.mapping=po,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Yr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Wv(i,t,e){return new Mn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Vv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:nh(),fragmentShader:`

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
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function $v(i,t,e){return new Mn({name:"SphericalGaussianBlur",defines:{SAMPLES:zv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:nh(),fragmentShader:`

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
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function Gp(){return new Mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nh(),fragmentShader:`

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
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function Wp(){return new Mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function nh(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var th=class extends Kn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Wa(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new kr(5,5,5),r=new Mn({name:"CubemapFromEquirect",uniforms:tr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Wn,blending:Hi});r.uniforms.tEquirect.value=e;let a=new bn(s,r),o=e.minFilter;return e.minFilter===Cs&&(e.minFilter=Rn),new rc(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function Xv(i){let t=new WeakMap,e=new WeakMap,n=null;function s(d,g=!1){return d==null?null:g?a(d):r(d)}function r(d){if(d&&d.isTexture){let g=d.mapping;if(g===lc||g===cc)if(t.has(d)){let x=t.get(d).texture;return o(x,d.mapping)}else{let x=d.image;if(x&&x.height>0){let A=new th(x.height);return A.fromEquirectangularTexture(i,d),t.set(d,A),d.addEventListener("dispose",c),o(A.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){let g=d.mapping,x=g===lc||g===cc,A=g===As||g===Qs;if(x||A){let p=e.get(d),f=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==f)return n===null&&(n=new Qc(i)),p=x?n.fromEquirectangular(d,p):n.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),p.texture;if(p!==void 0)return p.texture;{let N=d.image;return x&&N&&N.height>0||A&&N&&l(N)?(n===null&&(n=new Qc(i)),p=x?n.fromEquirectangular(d):n.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),d.addEventListener("dispose",u),p.texture):null}}}return d}function o(d,g){return g===lc?d.mapping=As:g===cc&&(d.mapping=Qs),d}function l(d){let g=0,x=6;for(let A=0;A<x;A++)d[A]!==void 0&&g++;return g===x}function c(d){let g=d.target;g.removeEventListener("dispose",c);let x=t.get(g);x!==void 0&&(t.delete(g),x.dispose())}function u(d){let g=d.target;g.removeEventListener("dispose",u);let x=e.get(g);x!==void 0&&(e.delete(g),x.dispose())}function m(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:m}}function qv(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&$s("WebGLRenderer: "+n+" extension not supported."),s}}}function Yv(i,t,e,n){let s={},r=new WeakMap;function a(m){let d=m.target;d.index!==null&&t.remove(d.index);for(let x in d.attributes)t.remove(d.attributes[x]);d.removeEventListener("dispose",a),delete s[d.id];let g=r.get(d);g&&(t.remove(g),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(m,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(m){let d=m.attributes;for(let g in d)t.update(d[g],i.ARRAY_BUFFER)}function c(m){let d=[],g=m.index,x=m.attributes.position,A=0;if(x===void 0)return;if(g!==null){let N=g.array;A=g.version;for(let F=0,T=N.length;F<T;F+=3){let M=N[F+0],D=N[F+1],H=N[F+2];d.push(M,D,D,H,H,M)}}else{let N=x.array;A=x.version;for(let F=0,T=N.length/3-1;F<T;F+=3){let M=F+0,D=F+1,H=F+2;d.push(M,D,D,H,H,M)}}let p=new(x.count>=65535?ka:Ba)(d,1);p.version=A;let f=r.get(m);f&&t.remove(f),r.set(m,p)}function u(m){let d=r.get(m);if(d){let g=m.index;g!==null&&d.version<g.version&&c(m)}else c(m);return r.get(m)}return{get:o,update:l,getWireframeAttribute:u}}function Zv(i,t,e){let n;function s(m){n=m}let r,a;function o(m){r=m.type,a=m.bytesPerElement}function l(m,d){i.drawElements(n,d,r,m*a),e.update(d,n,1)}function c(m,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,m*a,g),e.update(d,n,g))}function u(m,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,m,0,g);let A=0;for(let p=0;p<g;p++)A+=d[p];e.update(A,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Jv(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:me("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Kv(i,t,e){let n=new WeakMap,s=new $e;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,m=u!==void 0?u.length:0,d=n.get(o);if(d===void 0||d.count!==m){let L=function(){H.dispose(),n.delete(o),o.removeEventListener("dispose",L)};d!==void 0&&d.texture.dispose();let g=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,A=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],N=o.morphAttributes.color||[],F=0;g===!0&&(F=1),x===!0&&(F=2),A===!0&&(F=3);let T=o.attributes.position.count*F,M=1;T>t.maxTextureSize&&(M=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);let D=new Float32Array(T*M*4*m),H=new Fa(D,T,M,m);H.type=mi,H.needsUpdate=!0;let w=F*4;for(let V=0;V<m;V++){let $=p[V],Q=f[V],nt=N[V],Y=T*M*4*V;for(let K=0;K<$.count;K++){let ot=K*w;g===!0&&(s.fromBufferAttribute($,K),D[Y+ot+0]=s.x,D[Y+ot+1]=s.y,D[Y+ot+2]=s.z,D[Y+ot+3]=0),x===!0&&(s.fromBufferAttribute(Q,K),D[Y+ot+4]=s.x,D[Y+ot+5]=s.y,D[Y+ot+6]=s.z,D[Y+ot+7]=0),A===!0&&(s.fromBufferAttribute(nt,K),D[Y+ot+8]=s.x,D[Y+ot+9]=s.y,D[Y+ot+10]=s.z,D[Y+ot+11]=nt.itemSize===4?s.w:1)}}d={count:m,texture:H,size:new Ft(T,M)},n.set(o,d),o.addEventListener("dispose",L)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let A=0;A<c.length;A++)g+=c[A];let x=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function jv(i,t,e,n,s){let r=new WeakMap;function a(c){let u=s.render.frame,m=c.geometry,d=t.get(c,m);if(r.get(d)!==u&&(t.update(d),r.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let g=c.skeleton;r.get(g)!==u&&(g.update(),r.set(g,u))}return d}function o(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}var Qv={[Du]:"LINEAR_TONE_MAPPING",[Nu]:"REINHARD_TONE_MAPPING",[Uu]:"CINEON_TONE_MAPPING",[Fu]:"ACES_FILMIC_TONE_MAPPING",[Bu]:"AGX_TONE_MAPPING",[ku]:"NEUTRAL_TONE_MAPPING",[Ou]:"CUSTOM_TONE_MAPPING"};function ty(i,t,e,n,s,r){let a=new Kn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new ln;c.setAttribute("position",new on([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new on([0,2,0,0,2,0],2));let u=new $l({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),m=new bn(c,u),d=new Gr(-1,1,1,-1,0,1),g=null,x=null,A=!1,p,f=null,N=[],F=!1;this.setSize=function(T,M){a.setSize(T,M),o!==null&&o.setSize(T,M),l!==null&&l.setSize(T,M);for(let D=0;D<N.length;D++){let H=N[D];H.setSize&&H.setSize(T,M)}},this.setEffects=function(T){N=T,F=N.length>0&&N[0].isRenderPass===!0;let M=a.width,D=a.height;N.length>0&&o===null&&(o=new Kn(M,D,{type:Ii,depthBuffer:!1,stencilBuffer:!1}),l=new Kn(M,D,{type:Ii,depthBuffer:!1,stencilBuffer:!1}));for(let H=0;H<N.length;H++){let w=N[H];w.setSize&&w.setSize(M,D)}},this.begin=function(T,M){if(A||T.toneMapping===Ci&&N.length===0)return!1;if(f=M,M!==null){let D=M.width,H=M.height;(a.width!==D||a.height!==H)&&this.setSize(D,H)}return F===!1&&T.setRenderTarget(a),p=T.toneMapping,T.toneMapping=Ci,!0},this.hasRenderPass=function(){return F},this.end=function(T,M){T.toneMapping=p,A=!0;let D=a,H=o;for(let w=0;w<N.length;w++){let L=N[w];L.enabled!==!1&&(L.render(T,H,D,M),L.needsSwap!==!1&&(D=H,H=H===o?l:o))}if(g!==T.outputColorSpace||x!==T.toneMapping){g=T.outputColorSpace,x=T.toneMapping,u.defines={},Ne.getTransfer(g)===We&&(u.defines.SRGB_TRANSFER="");let w=Qv[x];w&&(u.defines[w]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=D.texture,T.setRenderTarget(f),T.render(m,d),f=null,A=!1},this.isCompositing=function(){return A},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var hm=new Jn,ld=new Ss(1,1),um=new Fa,dm=new Ll,fm=new Wa,$p=[],Xp=[],qp=new Float32Array(16),Yp=new Float32Array(9),Zp=new Float32Array(4);function Kr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=$p[s];if(r===void 0&&(r=new Float32Array(s),$p[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function mn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function gn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ih(i,t){let e=Xp[t];e===void 0&&(e=new Int32Array(t),Xp[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function ey(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function ny(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(mn(e,t))return;i.uniform2fv(this.addr,t),gn(e,t)}}function iy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(mn(e,t))return;i.uniform3fv(this.addr,t),gn(e,t)}}function sy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(mn(e,t))return;i.uniform4fv(this.addr,t),gn(e,t)}}function ry(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(mn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),gn(e,t)}else{if(mn(e,n))return;Zp.set(n),i.uniformMatrix2fv(this.addr,!1,Zp),gn(e,n)}}function ay(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(mn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),gn(e,t)}else{if(mn(e,n))return;Yp.set(n),i.uniformMatrix3fv(this.addr,!1,Yp),gn(e,n)}}function oy(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(mn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),gn(e,t)}else{if(mn(e,n))return;qp.set(n),i.uniformMatrix4fv(this.addr,!1,qp),gn(e,n)}}function ly(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function cy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(mn(e,t))return;i.uniform2iv(this.addr,t),gn(e,t)}}function hy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(mn(e,t))return;i.uniform3iv(this.addr,t),gn(e,t)}}function uy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(mn(e,t))return;i.uniform4iv(this.addr,t),gn(e,t)}}function dy(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function fy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(mn(e,t))return;i.uniform2uiv(this.addr,t),gn(e,t)}}function py(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(mn(e,t))return;i.uniform3uiv(this.addr,t),gn(e,t)}}function my(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(mn(e,t))return;i.uniform4uiv(this.addr,t),gn(e,t)}}function gy(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ld.compareFunction=e.isReversedDepthBuffer()?Jc:Zc,r=ld):r=hm,e.setTexture2D(t||r,s)}function _y(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||dm,s)}function xy(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||fm,s)}function vy(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||um,s)}function yy(i){switch(i){case 5126:return ey;case 35664:return ny;case 35665:return iy;case 35666:return sy;case 35674:return ry;case 35675:return ay;case 35676:return oy;case 5124:case 35670:return ly;case 35667:case 35671:return cy;case 35668:case 35672:return hy;case 35669:case 35673:return uy;case 5125:return dy;case 36294:return fy;case 36295:return py;case 36296:return my;case 35678:case 36198:case 36298:case 36306:case 35682:return gy;case 35679:case 36299:case 36307:return _y;case 35680:case 36300:case 36308:case 36293:return xy;case 36289:case 36303:case 36311:case 36292:return vy}}function Sy(i,t){i.uniform1fv(this.addr,t)}function by(i,t){let e=Kr(t,this.size,2);i.uniform2fv(this.addr,e)}function My(i,t){let e=Kr(t,this.size,3);i.uniform3fv(this.addr,e)}function wy(i,t){let e=Kr(t,this.size,4);i.uniform4fv(this.addr,e)}function Ey(i,t){let e=Kr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Ty(i,t){let e=Kr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Ay(i,t){let e=Kr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Cy(i,t){i.uniform1iv(this.addr,t)}function Ry(i,t){i.uniform2iv(this.addr,t)}function Iy(i,t){i.uniform3iv(this.addr,t)}function Py(i,t){i.uniform4iv(this.addr,t)}function Ly(i,t){i.uniform1uiv(this.addr,t)}function Dy(i,t){i.uniform2uiv(this.addr,t)}function Ny(i,t){i.uniform3uiv(this.addr,t)}function Uy(i,t){i.uniform4uiv(this.addr,t)}function Fy(i,t,e){let n=this.cache,s=t.length,r=ih(e,s);mn(n,r)||(i.uniform1iv(this.addr,r),gn(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=ld:a=hm;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Oy(i,t,e){let n=this.cache,s=t.length,r=ih(e,s);mn(n,r)||(i.uniform1iv(this.addr,r),gn(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||dm,r[a])}function By(i,t,e){let n=this.cache,s=t.length,r=ih(e,s);mn(n,r)||(i.uniform1iv(this.addr,r),gn(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||fm,r[a])}function ky(i,t,e){let n=this.cache,s=t.length,r=ih(e,s);mn(n,r)||(i.uniform1iv(this.addr,r),gn(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||um,r[a])}function zy(i){switch(i){case 5126:return Sy;case 35664:return by;case 35665:return My;case 35666:return wy;case 35674:return Ey;case 35675:return Ty;case 35676:return Ay;case 5124:case 35670:return Cy;case 35667:case 35671:return Ry;case 35668:case 35672:return Iy;case 35669:case 35673:return Py;case 5125:return Ly;case 36294:return Dy;case 36295:return Ny;case 36296:return Uy;case 35678:case 36198:case 36298:case 36306:case 35682:return Fy;case 35679:case 36299:case 36307:return Oy;case 35680:case 36300:case 36308:case 36293:return By;case 36289:case 36303:case 36311:case 36292:return ky}}var cd=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=yy(e.type)}},hd=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=zy(e.type)}},ud=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},ad=/(\w+)(\])?(\[|\.)?/g;function Jp(i,t){i.seq.push(t),i.map[t.id]=t}function Vy(i,t,e){let n=i.name,s=n.length;for(ad.lastIndex=0;;){let r=ad.exec(n),a=ad.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Jp(e,c===void 0?new cd(o,i,t):new hd(o,i,t));break}else{let m=e.map[o];m===void 0&&(m=new ud(o),Jp(e,m)),e=m}}}var Jr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Vy(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Kp(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Hy=37297,Gy=0;function Wy(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var jp=new ye;function $y(i){Ne._getMatrix(jp,Ne.workingColorSpace,i);let t=`mat3( ${jp.elements.map(e=>e.toFixed(4))} )`;switch(Ne.getTransfer(i)){case Da:return[t,"LinearTransferOETF"];case We:return[t,"sRGBTransferOETF"];default:return de("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Qp(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Wy(i.getShaderSource(t),o)}else return r}function Xy(i,t){let e=$y(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var qy={[Du]:"Linear",[Nu]:"Reinhard",[Uu]:"Cineon",[Fu]:"ACESFilmic",[Bu]:"AgX",[ku]:"Neutral",[Ou]:"Custom"};function Yy(i,t){let e=qy[t];return e===void 0?(de("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var jc=new W;function Zy(){Ne.getLuminanceCoefficients(jc);let i=jc.x.toFixed(4),t=jc.y.toFixed(4),e=jc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Jy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Eo).join(`
`)}function Ky(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function jy(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Eo(i){return i!==""}function tm(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function em(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Qy=/^[ \t]*#include +<([\w\d./]+)>/gm;function dd(i){return i.replace(Qy,eS)}var tS=new Map;function eS(i,t){let e=Ae[t];if(e===void 0){let n=tS.get(t);if(n!==void 0)e=Ae[n],de('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return dd(e)}var nS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nm(i){return i.replace(nS,iS)}function iS(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function im(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var sS={[fo]:"SHADOWMAP_TYPE_PCF",[Wr]:"SHADOWMAP_TYPE_VSM"};function rS(i){return sS[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var aS={[As]:"ENVMAP_TYPE_CUBE",[Qs]:"ENVMAP_TYPE_CUBE",[po]:"ENVMAP_TYPE_CUBE_UV"};function oS(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":aS[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var lS={[Qs]:"ENVMAP_MODE_REFRACTION"};function cS(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":lS[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var hS={[oc]:"ENVMAP_BLENDING_MULTIPLY",[xp]:"ENVMAP_BLENDING_MIX",[vp]:"ENVMAP_BLENDING_ADD"};function uS(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":hS[i.combine]||"ENVMAP_BLENDING_NONE"}function dS(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function fS(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=rS(e),c=oS(e),u=cS(e),m=uS(e),d=dS(e),g=Jy(e),x=Ky(r),A=s.createProgram(),p,f,N=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Eo).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Eo).join(`
`),f.length>0&&(f+=`
`)):(p=[im(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Eo).join(`
`),f=[im(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+m:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ci?"#define TONE_MAPPING":"",e.toneMapping!==Ci?Ae.tonemapping_pars_fragment:"",e.toneMapping!==Ci?Yy("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ae.colorspace_pars_fragment,Xy("linearToOutputTexel",e.outputColorSpace),Zy(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Eo).join(`
`)),a=dd(a),a=tm(a,e),a=em(a,e),o=dd(o),o=tm(o,e),o=em(o,e),a=nm(a),o=nm(o),e.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,p=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",e.glslVersion===Yu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Yu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let F=N+p+a,T=N+f+o,M=Kp(s,s.VERTEX_SHADER,F),D=Kp(s,s.FRAGMENT_SHADER,T);s.attachShader(A,M),s.attachShader(A,D),e.index0AttributeName!==void 0?s.bindAttribLocation(A,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(A,0,"position"),s.linkProgram(A);function H($){if(i.debug.checkShaderErrors){let Q=s.getProgramInfoLog(A)||"",nt=s.getShaderInfoLog(M)||"",Y=s.getShaderInfoLog(D)||"",K=Q.trim(),ot=nt.trim(),lt=Y.trim(),bt=!0,ct=!0;if(s.getProgramParameter(A,s.LINK_STATUS)===!1)if(bt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,A,M,D);else{let yt=Qp(s,M,"vertex"),vt=Qp(s,D,"fragment");me("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(A,s.VALIDATE_STATUS)+`

Material Name: `+$.name+`
Material Type: `+$.type+`

Program Info Log: `+K+`
`+yt+`
`+vt)}else K!==""?de("WebGLProgram: Program Info Log:",K):(ot===""||lt==="")&&(ct=!1);ct&&($.diagnostics={runnable:bt,programLog:K,vertexShader:{log:ot,prefix:p},fragmentShader:{log:lt,prefix:f}})}s.deleteShader(M),s.deleteShader(D),w=new Jr(s,A),L=jy(s,A)}let w;this.getUniforms=function(){return w===void 0&&H(this),w};let L;this.getAttributes=function(){return L===void 0&&H(this),L};let V=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=s.getProgramParameter(A,Hy)),V},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(A),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Gy++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=M,this.fragmentShader=D,this}var pS=0,fd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new pd(t),e.set(t,n)),n}},pd=class{constructor(t){this.id=pS++,this.code=t,this.usedTimes=0}};function mS(i){return i===Is||i===yo||i===So}function gS(i,t,e,n,s,r){let a=new Fr,o=new fd,l=new Set,c=[],u=new Map,m=n.logarithmicDepthBuffer,d=n.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(w){return l.add(w),w===0?"uv":`uv${w}`}function A(w,L,V,$,Q,nt){let Y=$.fog,K=Q.geometry,ot=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?$.environment:null,lt=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap,bt=t.get(w.envMap||ot,lt),ct=bt&&bt.mapping===po?bt.image.height:null,yt=g[w.type];w.precision!==null&&(d=n.getMaxPrecision(w.precision),d!==w.precision&&de("WebGLProgram.getParameters:",w.precision,"not supported, using",d,"instead."));let vt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Ht=vt!==void 0?vt.length:0,Xt=0;K.morphAttributes.position!==void 0&&(Xt=1),K.morphAttributes.normal!==void 0&&(Xt=2),K.morphAttributes.color!==void 0&&(Xt=3);let ke,Me,Le,ft;if(yt){let Te=$n[yt];ke=Te.vertexShader,Me=Te.fragmentShader}else{ke=w.vertexShader,Me=w.fragmentShader;let Te=o.getVertexShaderStage(w),we=o.getFragmentShaderStage(w);o.update(w,Te,we),Le=Te.id,ft=we.id}let gt=i.getRenderTarget(),At=i.state.buffers.depth.getReversed(),Qt=Q.isInstancedMesh===!0,Gt=Q.isBatchedMesh===!0,le=!!w.map,ae=!!w.matcap,at=!!bt,Mt=!!w.aoMap,G=!!w.lightMap,wt=!!w.bumpMap&&w.wireframe===!1,Nt=!!w.normalMap,oe=!!w.displacementMap,se=!!w.emissiveMap,he=!!w.metalnessMap,fe=!!w.roughnessMap,k=w.anisotropy>0,Re=w.clearcoat>0,pe=w.dispersion>0,P=w.retroreflectivity>0,y=w.iridescence>0,X=w.sheen>0,it=w.transmission>0,ht=k&&!!w.anisotropyMap,Rt=Re&&!!w.clearcoatMap,Lt=Re&&!!w.clearcoatNormalMap,ut=Re&&!!w.clearcoatRoughnessMap,_t=y&&!!w.iridescenceMap,Ut=y&&!!w.iridescenceThicknessMap,te=X&&!!w.sheenColorMap,zt=X&&!!w.sheenRoughnessMap,Ot=!!w.specularMap,ee=!!w.specularColorMap,ce=!!w.specularIntensityMap,_e=it&&!!w.transmissionMap,q=it&&!!w.thicknessMap,Pt=!!w.gradientMap,mt=!!w.alphaMap,Bt=w.alphaTest>0,Vt=!!w.alphaHash,St=!!w.extensions,ie=Ci;w.toneMapped&&(gt===null||gt.isXRRenderTarget===!0)&&(ie=i.toneMapping);let Kt={shaderID:yt,shaderType:w.type,shaderName:w.name,vertexShader:ke,fragmentShader:Me,defines:w.defines,customVertexShaderID:Le,customFragmentShaderID:ft,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:d,batching:Gt,batchingColor:Gt&&Q._colorsTexture!==null,instancing:Qt,instancingColor:Qt&&Q.instanceColor!==null,instancingMorph:Qt&&Q.morphTexture!==null,outputColorSpace:gt===null?i.outputColorSpace:gt.isXRRenderTarget===!0?gt.texture.colorSpace:Ne.workingColorSpace,alphaToCoverage:!!w.alphaToCoverage,map:le,matcap:ae,envMap:at,envMapMode:at&&bt.mapping,envMapCubeUVHeight:ct,aoMap:Mt,lightMap:G,bumpMap:wt,normalMap:Nt,displacementMap:oe,emissiveMap:se,normalMapObjectSpace:Nt&&w.normalMapType===bp,normalMapTangentSpace:Nt&&w.normalMapType===Yc,packedNormalMap:Nt&&w.normalMapType===Yc&&mS(w.normalMap.format),metalnessMap:he,roughnessMap:fe,anisotropy:k,anisotropyMap:ht,clearcoat:Re,clearcoatMap:Rt,clearcoatNormalMap:Lt,clearcoatRoughnessMap:ut,dispersion:pe,retroreflection:P,iridescence:y,iridescenceMap:_t,iridescenceThicknessMap:Ut,sheen:X,sheenColorMap:te,sheenRoughnessMap:zt,specularMap:Ot,specularColorMap:ee,specularIntensityMap:ce,transmission:it,transmissionMap:_e,thicknessMap:q,gradientMap:Pt,opaque:w.transparent===!1&&w.blending===$r&&w.alphaToCoverage===!1,alphaMap:mt,alphaTest:Bt,alphaHash:Vt,combine:w.combine,mapUv:le&&x(w.map.channel),aoMapUv:Mt&&x(w.aoMap.channel),lightMapUv:G&&x(w.lightMap.channel),bumpMapUv:wt&&x(w.bumpMap.channel),normalMapUv:Nt&&x(w.normalMap.channel),displacementMapUv:oe&&x(w.displacementMap.channel),emissiveMapUv:se&&x(w.emissiveMap.channel),metalnessMapUv:he&&x(w.metalnessMap.channel),roughnessMapUv:fe&&x(w.roughnessMap.channel),anisotropyMapUv:ht&&x(w.anisotropyMap.channel),clearcoatMapUv:Rt&&x(w.clearcoatMap.channel),clearcoatNormalMapUv:Lt&&x(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ut&&x(w.clearcoatRoughnessMap.channel),iridescenceMapUv:_t&&x(w.iridescenceMap.channel),iridescenceThicknessMapUv:Ut&&x(w.iridescenceThicknessMap.channel),sheenColorMapUv:te&&x(w.sheenColorMap.channel),sheenRoughnessMapUv:zt&&x(w.sheenRoughnessMap.channel),specularMapUv:Ot&&x(w.specularMap.channel),specularColorMapUv:ee&&x(w.specularColorMap.channel),specularIntensityMapUv:ce&&x(w.specularIntensityMap.channel),transmissionMapUv:_e&&x(w.transmissionMap.channel),thicknessMapUv:q&&x(w.thicknessMap.channel),alphaMapUv:mt&&x(w.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Nt||k),vertexNormals:!!K.attributes.normal,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!K.attributes.uv&&(le||mt),fog:!!Y,useFog:w.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:w.wireframe===!1&&(w.flatShading===!0||K.attributes.normal===void 0&&Nt===!1&&(w.isMeshLambertMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isMeshPhysicalMaterial)),sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:At,skinning:Q.isSkinnedMesh===!0,hasPositionAttribute:K.attributes.position!==void 0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:Ht,morphTextureStride:Xt,numSunLights:L.sun.length,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numSunLightShadows:L.sunShadowMap.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numLightProbeGrids:nt.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&V.length>0,shadowMapType:i.shadowMap.type,toneMapping:ie,decodeVideoTexture:le&&w.map.isVideoTexture===!0&&Ne.getTransfer(w.map.colorSpace)===We,decodeVideoTextureEmissive:se&&w.emissiveMap.isVideoTexture===!0&&Ne.getTransfer(w.emissiveMap.colorSpace)===We,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Vi,flipSided:w.side===Wn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:St&&w.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(St&&w.extensions.multiDraw===!0||Gt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Kt.vertexUv1s=l.has(1),Kt.vertexUv2s=l.has(2),Kt.vertexUv3s=l.has(3),l.clear(),Kt}function p(w){let L=[];if(w.shaderID?L.push(w.shaderID):(L.push(w.customVertexShaderID),L.push(w.customFragmentShaderID)),w.defines!==void 0)for(let V in w.defines)L.push(V),L.push(w.defines[V]);return w.isRawShaderMaterial===!1&&(f(L,w),N(L,w),L.push(i.outputColorSpace)),L.push(w.customProgramCacheKey),L.join()}function f(w,L){w.push(L.precision),w.push(L.outputColorSpace),w.push(L.envMapMode),w.push(L.envMapCubeUVHeight),w.push(L.mapUv),w.push(L.alphaMapUv),w.push(L.lightMapUv),w.push(L.aoMapUv),w.push(L.bumpMapUv),w.push(L.normalMapUv),w.push(L.displacementMapUv),w.push(L.emissiveMapUv),w.push(L.metalnessMapUv),w.push(L.roughnessMapUv),w.push(L.anisotropyMapUv),w.push(L.clearcoatMapUv),w.push(L.clearcoatNormalMapUv),w.push(L.clearcoatRoughnessMapUv),w.push(L.iridescenceMapUv),w.push(L.iridescenceThicknessMapUv),w.push(L.sheenColorMapUv),w.push(L.sheenRoughnessMapUv),w.push(L.specularMapUv),w.push(L.specularColorMapUv),w.push(L.specularIntensityMapUv),w.push(L.transmissionMapUv),w.push(L.thicknessMapUv),w.push(L.combine),w.push(L.fogExp2),w.push(L.sizeAttenuation),w.push(L.morphTargetsCount),w.push(L.morphAttributeCount),w.push(L.numSunLights),w.push(L.numDirLights),w.push(L.numPointLights),w.push(L.numSpotLights),w.push(L.numSpotLightMaps),w.push(L.numHemiLights),w.push(L.numRectAreaLights),w.push(L.numSunLightShadows),w.push(L.numDirLightShadows),w.push(L.numPointLightShadows),w.push(L.numSpotLightShadows),w.push(L.numSpotLightShadowsWithMaps),w.push(L.numLightProbes),w.push(L.shadowMapType),w.push(L.toneMapping),w.push(L.numClippingPlanes),w.push(L.numClipIntersection),w.push(L.depthPacking)}function N(w,L){a.disableAll(),L.instancing&&a.enable(0),L.instancingColor&&a.enable(1),L.instancingMorph&&a.enable(2),L.matcap&&a.enable(3),L.envMap&&a.enable(4),L.normalMapObjectSpace&&a.enable(5),L.normalMapTangentSpace&&a.enable(6),L.clearcoat&&a.enable(7),L.iridescence&&a.enable(8),L.alphaTest&&a.enable(9),L.vertexColors&&a.enable(10),L.vertexAlphas&&a.enable(11),L.vertexUv1s&&a.enable(12),L.vertexUv2s&&a.enable(13),L.vertexUv3s&&a.enable(14),L.vertexTangents&&a.enable(15),L.anisotropy&&a.enable(16),L.alphaHash&&a.enable(17),L.batching&&a.enable(18),L.dispersion&&a.enable(19),L.retroreflection&&a.enable(24),L.batchingColor&&a.enable(20),L.gradientMap&&a.enable(21),L.packedNormalMap&&a.enable(22),L.vertexNormals&&a.enable(23),w.push(a.mask),a.disableAll(),L.fog&&a.enable(0),L.useFog&&a.enable(1),L.flatShading&&a.enable(2),L.logarithmicDepthBuffer&&a.enable(3),L.reversedDepthBuffer&&a.enable(4),L.skinning&&a.enable(5),L.morphTargets&&a.enable(6),L.morphNormals&&a.enable(7),L.morphColors&&a.enable(8),L.premultipliedAlpha&&a.enable(9),L.shadowMapEnabled&&a.enable(10),L.doubleSided&&a.enable(11),L.flipSided&&a.enable(12),L.useDepthPacking&&a.enable(13),L.dithering&&a.enable(14),L.transmission&&a.enable(15),L.sheen&&a.enable(16),L.opaque&&a.enable(17),L.pointsUvs&&a.enable(18),L.decodeVideoTexture&&a.enable(19),L.decodeVideoTextureEmissive&&a.enable(20),L.alphaToCoverage&&a.enable(21),L.numLightProbeGrids>0&&a.enable(22),L.hasPositionAttribute&&a.enable(23),w.push(a.mask)}function F(w){let L=g[w.type],V;if(L){let $=$n[L];V=bo.clone($.uniforms)}else V=w.uniforms;return V}function T(w,L){let V=u.get(L);return V!==void 0?++V.usedTimes:(V=new fS(i,L,w,s),c.push(V),u.set(L,V)),V}function M(w){if(--w.usedTimes===0){let L=c.indexOf(w);c[L]=c[c.length-1],c.pop(),u.delete(w.cacheKey),w.destroy()}}function D(w){o.remove(w)}function H(){o.dispose()}return{getParameters:A,getProgramCacheKey:p,getUniforms:F,acquireProgram:T,releaseProgram:M,releaseShaderCache:D,programs:c,dispose:H}}function _S(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function xS(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function sm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function rm(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d){let g=0;return d.isInstancedMesh&&(g+=2),d.isSkinnedMesh&&(g+=1),g}function o(d,g,x,A,p,f){let N=i[t];return N===void 0?(N={id:d.id,object:d,geometry:g,material:x,materialVariant:a(d),groupOrder:A,renderOrder:d.renderOrder,z:p,group:f},i[t]=N):(N.id=d.id,N.object=d,N.geometry=g,N.material=x,N.materialVariant=a(d),N.groupOrder=A,N.renderOrder=d.renderOrder,N.z=p,N.group=f),t++,N}function l(d,g,x,A,p,f,N){N.reversedDepth===!0&&(p=-p);let F=o(d,g,x,A,p,f);x.transmission>0?n.push(F):x.transparent===!0?s.push(F):e.push(F)}function c(d,g,x,A,p,f){let N=o(d,g,x,A,p,f);x.transmission>0?n.unshift(N):x.transparent===!0?s.unshift(N):e.unshift(N)}function u(d,g){e.length>1&&e.sort(d||xS),n.length>1&&n.sort(g||sm),s.length>1&&s.sort(g||sm)}function m(){for(let d=t,g=i.length;d<g;d++){let x=i[d];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:m,sort:u}}function vS(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new rm,i.set(n,[a])):s>=r.length?(a=new rm,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function yS(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new W,color:new ue};break;case"SpotLight":e={position:new W,direction:new W,color:new ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new W,color:new ue,distance:0,decay:0};break;case"HemisphereLight":e={direction:new W,skyColor:new ue,groundColor:new ue};break;case"RectAreaLight":e={color:new ue,position:new W,halfWidth:new W,halfHeight:new W};break}return i[t.id]=e,e}}}function SS(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var bS=0;function MS(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function wS(i){let t=new yS,e=SS(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new W);let s=new W,r=new ze,a=new ze;function o(c){let u=0,m=0,d=0;for(let Q=0;Q<9;Q++)n.probe[Q].set(0,0,0);let g=0,x=0,A=0,p=0,f=0,N=0,F=0,T=0,M=0,D=0,H=0,w=0,L=0,V=0;c.sort(MS);for(let Q=0,nt=c.length;Q<nt;Q++){let Y=c[Q],K=Y.color,ot=Y.intensity,lt=Y.distance,bt=null;if(Y.shadow&&Y.shadow.map&&(Y.shadow.map.texture.format===Is?bt=Y.shadow.map.texture:bt=Y.shadow.map.depthTexture||Y.shadow.map.texture),Y.isAmbientLight)u+=K.r*ot,m+=K.g*ot,d+=K.b*ot;else if(Y.isLightProbe){for(let ct=0;ct<9;ct++)n.probe[ct].addScaledVector(Y.sh.coefficients[ct],ot);V++}else if(Y.isSunLight){let ct=t.get(Y);if(ct.color.copy(Y.color).multiplyScalar(Y.intensity),Y.castShadow){let yt=Y.shadow,vt=e.get(Y);vt.shadowIntensity=yt.intensity,vt.shadowBias=yt.bias,vt.shadowNormalBias=yt.normalBias,vt.shadowRadius=yt.radius,vt.shadowMapSize.copy(yt.mapSize).multiply(yt.getFrameExtents()),n.sunShadow[x]=vt,n.sunShadowMap[x]=bt;let Ht=yt.getViewportCount();for(let Xt=0;Xt<Ht;Xt++)n.sunShadowMatrix[A+Xt]=yt.getMatrix(Xt),n.sunShadowCascade[A+Xt]=yt._cascadeData[Xt];A+=Ht,x++}n.sun[g]=ct,g++}else if(Y.isDirectionalLight){let ct=t.get(Y);if(ct.color.copy(Y.color).multiplyScalar(Y.intensity),Y.castShadow){let yt=Y.shadow,vt=e.get(Y);vt.shadowIntensity=yt.intensity,vt.shadowBias=yt.bias,vt.shadowNormalBias=yt.normalBias,vt.shadowRadius=yt.radius,vt.shadowMapSize=yt.mapSize,n.directionalShadow[p]=vt,n.directionalShadowMap[p]=bt,n.directionalShadowMatrix[p]=Y.shadow.matrix,M++}n.directional[p]=ct,p++}else if(Y.isSpotLight){let ct=t.get(Y);ct.position.setFromMatrixPosition(Y.matrixWorld),ct.color.copy(K).multiplyScalar(ot),ct.distance=lt,ct.coneCos=Math.cos(Y.angle),ct.penumbraCos=Math.cos(Y.angle*(1-Y.penumbra)),ct.decay=Y.decay,n.spot[N]=ct;let yt=Y.shadow;if(Y.map&&(n.spotLightMap[w]=Y.map,w++,yt.updateMatrices(Y),Y.castShadow&&L++),n.spotLightMatrix[N]=yt.matrix,Y.castShadow){let vt=e.get(Y);vt.shadowIntensity=yt.intensity,vt.shadowBias=yt.bias,vt.shadowNormalBias=yt.normalBias,vt.shadowRadius=yt.radius,vt.shadowMapSize=yt.mapSize,n.spotShadow[N]=vt,n.spotShadowMap[N]=bt,H++}N++}else if(Y.isRectAreaLight){let ct=t.get(Y);ct.color.copy(K).multiplyScalar(ot),ct.halfWidth.set(Y.width*.5,0,0),ct.halfHeight.set(0,Y.height*.5,0),n.rectArea[F]=ct,F++}else if(Y.isPointLight){let ct=t.get(Y);if(ct.color.copy(Y.color).multiplyScalar(Y.intensity),ct.distance=Y.distance,ct.decay=Y.decay,Y.castShadow){let yt=Y.shadow,vt=e.get(Y);vt.shadowIntensity=yt.intensity,vt.shadowBias=yt.bias,vt.shadowNormalBias=yt.normalBias,vt.shadowRadius=yt.radius,vt.shadowMapSize=yt.mapSize,vt.shadowCameraNear=yt.camera.near,vt.shadowCameraFar=yt.camera.far,n.pointShadow[f]=vt,n.pointShadowMap[f]=bt,n.pointShadowMatrix[f]=Y.shadow.matrix,D++}n.point[f]=ct,f++}else if(Y.isHemisphereLight){let ct=t.get(Y);ct.skyColor.copy(Y.color).multiplyScalar(ot),ct.groundColor.copy(Y.groundColor).multiplyScalar(ot),n.hemi[T]=ct,T++}}F>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=kt.LTC_FLOAT_1,n.rectAreaLTC2=kt.LTC_FLOAT_2):(n.rectAreaLTC1=kt.LTC_HALF_1,n.rectAreaLTC2=kt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=m,n.ambient[2]=d;let $=n.hash;($.sunLength!==g||$.directionalLength!==p||$.pointLength!==f||$.spotLength!==N||$.rectAreaLength!==F||$.hemiLength!==T||$.numSunShadows!==x||$.numDirectionalShadows!==M||$.numPointShadows!==D||$.numSpotShadows!==H||$.numSpotMaps!==w||$.numLightProbes!==V)&&(n.sun.length=g,n.directional.length=p,n.spot.length=N,n.rectArea.length=F,n.point.length=f,n.hemi.length=T,n.sunShadow.length=x,n.sunShadowMap.length=x,n.sunShadowMatrix.length=A,n.sunShadowCascade.length=A,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=D,n.pointShadowMap.length=D,n.pointShadowMatrix.length=D,n.spotShadow.length=H,n.spotShadowMap.length=H,n.spotLightMatrix.length=H+w-L,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=V,$.sunLength=g,$.directionalLength=p,$.pointLength=f,$.spotLength=N,$.rectAreaLength=F,$.hemiLength=T,$.numSunShadows=x,$.numDirectionalShadows=M,$.numPointShadows=D,$.numSpotShadows=H,$.numSpotMaps=w,$.numLightProbes=V,n.version=bS++)}function l(c,u){let m=0,d=0,g=0,x=0,A=0,p=0,f=u.matrixWorldInverse;for(let N=0,F=c.length;N<F;N++){let T=c[N];if(T.isSunLight){let M=n.sun[m];M.direction.setFromMatrixPosition(T.matrixWorld),M.direction.transformDirection(f),m++}else if(T.isDirectionalLight){let M=n.directional[d];M.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(f),d++}else if(T.isSpotLight){let M=n.spot[x];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(f),M.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(f),x++}else if(T.isRectAreaLight){let M=n.rectArea[A];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(f),a.identity(),r.copy(T.matrixWorld),r.premultiply(f),a.extractRotation(r),M.halfWidth.set(T.width*.5,0,0),M.halfHeight.set(0,T.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),A++}else if(T.isPointLight){let M=n.point[g];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(f),g++}else if(T.isHemisphereLight){let M=n.hemi[p];M.direction.setFromMatrixPosition(T.matrixWorld),M.direction.transformDirection(f),p++}}}return{setup:o,setupView:l,state:n}}function am(i){let t=new wS(i),e=[],n=[],s=[];function r(d){m.camera=d,e.length=0,n.length=0,s.length=0}function a(d){e.push(d)}function o(d){n.push(d)}function l(d){s.push(d)}function c(){t.setup(e)}function u(d){t.setupView(e,d)}let m={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:m,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function ES(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new am(i),t.set(s,[o])):r>=a.length?(o=new am(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var TS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,AS=`uniform sampler2D shadow_pass;
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
}`,CS=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],RS=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],om=new ze,wo=new W,od=new W;function IS(i,t,e){let n=new Br,s=new Ft,r=new Ft,a=new $e,o=new Xl,l=new ql,c={},u=e.maxTextureSize,m={[Ts]:Wn,[Wn]:Ts,[Vi]:Vi},d=new Mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ft},radius:{value:4}},vertexShader:TS,fragmentShader:AS}),g=d.clone();g.defines.HORIZONTAL_PASS=1;let x=new ln;x.setAttribute("position",new Ye(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let A=new bn(x,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fo;let f=this.type;this.render=function(D,H,w){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||D.length===0)return;this.type===Qf&&(de("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=fo);let L=i.getRenderTarget(),V=i.getActiveCubeFace(),$=i.getActiveMipmapLevel(),Q=i.state;Q.setBlending(Hi),Q.buffers.depth.getReversed()===!0?Q.buffers.color.setClear(0,0,0,0):Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);let nt=f!==this.type;nt&&H.traverse(function(Y){Y.material&&(Array.isArray(Y.material)?Y.material.forEach(K=>K.needsUpdate=!0):Y.material.needsUpdate=!0)});for(let Y=0,K=D.length;Y<K;Y++){let ot=D[Y],lt=ot.shadow;if(lt===void 0){de("WebGLShadowMap:",ot,"has no shadow.");continue}if(lt.autoUpdate===!1&&lt.needsUpdate===!1)continue;s.copy(lt.mapSize);let bt=lt.getFrameExtents();s.multiply(bt),r.copy(lt.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/bt.x),s.x=r.x*bt.x,lt.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/bt.y),s.y=r.y*bt.y,lt.mapSize.y=r.y));let ct=i.state.buffers.depth.getReversed();if(lt.camera._reversedDepth=ct,lt.map===null||nt===!0){if(lt.map!==null&&(lt.map.depthTexture!==null&&(lt.map.depthTexture.dispose(),lt.map.depthTexture=null),lt.map.dispose()),this.type===Wr){if(ot.isPointLight){de("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}lt.map=new Kn(s.x,s.y,{format:Is,type:Ii,minFilter:Rn,magFilter:Rn,generateMipmaps:!1}),lt.map.texture.name=ot.name+".shadowMap",lt.map.depthTexture=new Ss(s.x,s.y,mi),lt.map.depthTexture.name=ot.name+".shadowMapDepth",lt.map.depthTexture.format=Oi,lt.map.depthTexture.compareFunction=null,lt.map.depthTexture.minFilter=yn,lt.map.depthTexture.magFilter=yn}else ot.isPointLight?(lt.map=new th(s.x),lt.map.depthTexture=new Bl(s.x,Ri)):(lt.map=new Kn(s.x,s.y),lt.map.depthTexture=new Ss(s.x,s.y,Ri)),lt.map.depthTexture.name=ot.name+".shadowMap",lt.map.depthTexture.format=Oi,this.type===fo?(lt.map.depthTexture.compareFunction=ct?Jc:Zc,lt.map.depthTexture.minFilter=Rn,lt.map.depthTexture.magFilter=Rn):(lt.map.depthTexture.compareFunction=null,lt.map.depthTexture.minFilter=yn,lt.map.depthTexture.magFilter=yn);lt.camera.updateProjectionMatrix()}lt.map.isWebGLCubeRenderTarget!==!0&&(lt.map.width!==s.x||lt.map.height!==s.y)&&lt.map.setSize(s.x,s.y);let yt=lt.map.isWebGLCubeRenderTarget?6:lt.getViewportCount();ot.isPointLight!==!0&&lt.updateMatrices(ot,w);for(let vt=0;vt<yt;vt++){let Ht=lt.getCamera(vt);if(ot.isPointLight){let Xt=lt.camera,ke=lt.matrix,Me=ot.distance||Xt.far;Me!==Xt.far&&(Xt.far=Me,Xt.updateProjectionMatrix()),wo.setFromMatrixPosition(ot.matrixWorld),Xt.position.copy(wo),od.copy(Xt.position),od.add(CS[vt]),Xt.up.copy(RS[vt]),Xt.lookAt(od),Xt.updateMatrixWorld(),ke.makeTranslation(-wo.x,-wo.y,-wo.z),om.multiplyMatrices(Xt.projectionMatrix,Xt.matrixWorldInverse),lt._frustum.setFromProjectionMatrix(om,Xt.coordinateSystem,Xt.reversedDepth)}if(lt.map.isWebGLCubeRenderTarget)i.setRenderTarget(lt.map,vt),i.clear();else{vt===0&&(i.setRenderTarget(lt.map),i.clear());let Xt=lt.getViewport(vt);a.set(r.x*Xt.x,r.y*Xt.y,r.x*Xt.z,r.y*Xt.w),Q.viewport(a)}n=lt.getFrustum(vt),T(H,w,Ht,ot,this.type)}lt.isPointLightShadow!==!0&&this.type===Wr&&N(lt,w),lt.needsUpdate=!1}f=this.type,p.needsUpdate=!1,i.setRenderTarget(L,V,$)};function N(D,H){let w=t.update(A);d.defines.VSM_SAMPLES!==D.blurSamples&&(d.defines.VSM_SAMPLES=D.blurSamples,g.defines.VSM_SAMPLES=D.blurSamples,d.needsUpdate=!0,g.needsUpdate=!0),D.mapPass===null?D.mapPass=new Kn(s.x,s.y,{format:Is,type:Ii}):(D.mapPass.width!==D.map.width||D.mapPass.height!==D.map.height)&&D.mapPass.setSize(D.map.width,D.map.height),d.uniforms.shadow_pass.value=D.map.depthTexture,d.uniforms.resolution.value.set(D.map.width,D.map.height),d.uniforms.radius.value=D.radius,i.setRenderTarget(D.mapPass),i.clear(),i.renderBufferDirect(H,null,w,d,A,null),g.uniforms.shadow_pass.value=D.mapPass.texture,g.uniforms.resolution.value.set(D.map.width,D.map.height),g.uniforms.radius.value=D.radius,i.setRenderTarget(D.map),i.clear(),i.renderBufferDirect(H,null,w,g,A,null)}function F(D,H,w,L){let V=null,$=w.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if($!==void 0)V=$;else if(V=w.isPointLight===!0?l:o,i.localClippingEnabled&&H.clipShadows===!0&&Array.isArray(H.clippingPlanes)&&H.clippingPlanes.length!==0||H.displacementMap&&H.displacementScale!==0||H.alphaMap&&H.alphaTest>0||H.map&&H.alphaTest>0||H.alphaToCoverage===!0){let Q=V.uuid,nt=H.uuid,Y=c[Q];Y===void 0&&(Y={},c[Q]=Y);let K=Y[nt];K===void 0&&(K=V.clone(),Y[nt]=K,H.addEventListener("dispose",M)),V=K}if(V.visible=H.visible,V.wireframe=H.wireframe,L===Wr?V.side=H.shadowSide!==null?H.shadowSide:H.side:V.side=H.shadowSide!==null?H.shadowSide:m[H.side],V.alphaMap=H.alphaMap,V.alphaTest=H.alphaToCoverage===!0?.5:H.alphaTest,V.map=H.map,V.clipShadows=H.clipShadows,V.clippingPlanes=H.clippingPlanes,V.clipIntersection=H.clipIntersection,V.displacementMap=H.displacementMap,V.displacementScale=H.displacementScale,V.displacementBias=H.displacementBias,V.wireframeLinewidth=H.wireframeLinewidth,V.linewidth=H.linewidth,w.isPointLight===!0&&V.isMeshDistanceMaterial===!0){let Q=i.properties.get(V);Q.light=w}return V}function T(D,H,w,L,V){if(D.visible===!1)return;if(D.layers.test(H.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&V===Wr)&&(!D.frustumCulled||D.intersectsFrustum(n))){D.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,D.matrixWorld);let nt=t.update(D),Y=D.material;if(Array.isArray(Y)){let K=nt.groups;for(let ot=0,lt=K.length;ot<lt;ot++){let bt=K[ot],ct=Y[bt.materialIndex];if(ct&&ct.visible){let yt=F(D,ct,L,V);D.onBeforeShadow(i,D,H,w,nt,yt,bt),i.renderBufferDirect(w,null,nt,yt,D,bt),D.onAfterShadow(i,D,H,w,nt,yt,bt)}}}else if(Y.visible){let K=F(D,Y,L,V);D.onBeforeShadow(i,D,H,w,nt,K,null),i.renderBufferDirect(w,null,nt,K,D,null),D.onAfterShadow(i,D,H,w,nt,K,null)}}let Q=D.children;for(let nt=0,Y=Q.length;nt<Y;nt++)T(Q[nt],H,w,L,V)}function M(D){D.target.removeEventListener("dispose",M);for(let w in c){let L=c[w],V=D.target.uuid;V in L&&(L[V].dispose(),delete L[V])}}}function PS(i,t){function e(){let q=!1,Pt=new $e,mt=null,Bt=new $e(0,0,0,0);return{setMask:function(Vt){mt!==Vt&&!q&&(i.colorMask(Vt,Vt,Vt,Vt),mt=Vt)},setLocked:function(Vt){q=Vt},setClear:function(Vt,St,ie,Kt,Te){Te===!0&&(Vt*=Kt,St*=Kt,ie*=Kt),Pt.set(Vt,St,ie,Kt),Bt.equals(Pt)===!1&&(i.clearColor(Vt,St,ie,Kt),Bt.copy(Pt))},reset:function(){q=!1,mt=null,Bt.set(-1,0,0,0)}}}function n(){let q=!1,Pt=!1,mt=null,Bt=null,Vt=null;return{setReversed:function(St){if(Pt!==St){let ie=t.get("EXT_clip_control");St?ie.clipControlEXT(ie.LOWER_LEFT_EXT,ie.ZERO_TO_ONE_EXT):ie.clipControlEXT(ie.LOWER_LEFT_EXT,ie.NEGATIVE_ONE_TO_ONE_EXT),Pt=St;let Kt=Vt;Vt=null,this.setClear(Kt)}},getReversed:function(){return Pt},setTest:function(St){St?gt(i.DEPTH_TEST):At(i.DEPTH_TEST)},setMask:function(St){mt!==St&&!q&&(i.depthMask(St),mt=St)},setFunc:function(St){if(Pt&&(St=Dp[St]),Bt!==St){switch(St){case yl:i.depthFunc(i.NEVER);break;case Sl:i.depthFunc(i.ALWAYS);break;case bl:i.depthFunc(i.LESS);break;case Pr:i.depthFunc(i.LEQUAL);break;case Ml:i.depthFunc(i.EQUAL);break;case wl:i.depthFunc(i.GEQUAL);break;case El:i.depthFunc(i.GREATER);break;case Tl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Bt=St}},setLocked:function(St){q=St},setClear:function(St){Vt!==St&&(Vt=St,Pt&&(St=1-St),i.clearDepth(St))},reset:function(){q=!1,mt=null,Bt=null,Vt=null,Pt=!1}}}function s(){let q=!1,Pt=null,mt=null,Bt=null,Vt=null,St=null,ie=null,Kt=null,Te=null;return{setTest:function(we){q||(we?gt(i.STENCIL_TEST):At(i.STENCIL_TEST))},setMask:function(we){Pt!==we&&!q&&(i.stencilMask(we),Pt=we)},setFunc:function(we,cn,kn){(mt!==we||Bt!==cn||Vt!==kn)&&(i.stencilFunc(we,cn,kn),mt=we,Bt=cn,Vt=kn)},setOp:function(we,cn,kn){(St!==we||ie!==cn||Kt!==kn)&&(i.stencilOp(we,cn,kn),St=we,ie=cn,Kt=kn)},setLocked:function(we){q=we},setClear:function(we){Te!==we&&(i.clearStencil(we),Te=we)},reset:function(){q=!1,Pt=null,mt=null,Bt=null,Vt=null,St=null,ie=null,Kt=null,Te=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,u={},m={},d={},g=new WeakMap,x=[],A=null,p=!1,f=null,N=null,F=null,T=null,M=null,D=null,H=null,w=new ue(0,0,0),L=0,V=!1,$=null,Q=null,nt=null,Y=null,K=null,ot=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),lt=!1,bt=0,ct=i.getParameter(i.VERSION);ct.indexOf("WebGL")!==-1?(bt=parseFloat(/^WebGL (\d)/.exec(ct)[1]),lt=bt>=1):ct.indexOf("OpenGL ES")!==-1&&(bt=parseFloat(/^OpenGL ES (\d)/.exec(ct)[1]),lt=bt>=2);let yt=null,vt={},Ht=i.getParameter(i.SCISSOR_BOX),Xt=i.getParameter(i.VIEWPORT),ke=new $e().fromArray(Ht),Me=new $e().fromArray(Xt);function Le(q,Pt,mt,Bt){let Vt=new Uint8Array(4),St=i.createTexture();i.bindTexture(q,St),i.texParameteri(q,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(q,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ie=0;ie<mt;ie++)q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?i.texImage3D(Pt,0,i.RGBA,1,1,Bt,0,i.RGBA,i.UNSIGNED_BYTE,Vt):i.texImage2D(Pt+ie,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Vt);return St}let ft={};ft[i.TEXTURE_2D]=Le(i.TEXTURE_2D,i.TEXTURE_2D,1),ft[i.TEXTURE_CUBE_MAP]=Le(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ft[i.TEXTURE_2D_ARRAY]=Le(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ft[i.TEXTURE_3D]=Le(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),gt(i.DEPTH_TEST),a.setFunc(Pr),wt(!1),Nt(Au),gt(i.CULL_FACE),Mt(Hi);function gt(q){u[q]!==!0&&(i.enable(q),u[q]=!0)}function At(q){u[q]!==!1&&(i.disable(q),u[q]=!1)}function Qt(q,Pt){return d[q]!==Pt?(i.bindFramebuffer(q,Pt),d[q]=Pt,q===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=Pt),q===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=Pt),!0):!1}function Gt(q,Pt){let mt=x,Bt=!1;if(q){mt=g.get(Pt),mt===void 0&&(mt=[],g.set(Pt,mt));let Vt=q.textures;if(mt.length!==Vt.length||mt[0]!==i.COLOR_ATTACHMENT0){for(let St=0,ie=Vt.length;St<ie;St++)mt[St]=i.COLOR_ATTACHMENT0+St;mt.length=Vt.length,Bt=!0}}else mt[0]!==i.BACK&&(mt[0]=i.BACK,Bt=!0);Bt&&i.drawBuffers(mt)}function le(q){return A!==q?(i.useProgram(q),A=q,!0):!1}let ae={[js]:i.FUNC_ADD,[ep]:i.FUNC_SUBTRACT,[np]:i.FUNC_REVERSE_SUBTRACT};ae[ip]=i.MIN,ae[sp]=i.MAX;let at={[rp]:i.ZERO,[ap]:i.ONE,[op]:i.SRC_COLOR,[Pu]:i.SRC_ALPHA,[fp]:i.SRC_ALPHA_SATURATE,[up]:i.DST_COLOR,[cp]:i.DST_ALPHA,[lp]:i.ONE_MINUS_SRC_COLOR,[Lu]:i.ONE_MINUS_SRC_ALPHA,[dp]:i.ONE_MINUS_DST_COLOR,[hp]:i.ONE_MINUS_DST_ALPHA,[pp]:i.CONSTANT_COLOR,[mp]:i.ONE_MINUS_CONSTANT_COLOR,[gp]:i.CONSTANT_ALPHA,[_p]:i.ONE_MINUS_CONSTANT_ALPHA};function Mt(q,Pt,mt,Bt,Vt,St,ie,Kt,Te,we){if(q===Hi){p===!0&&(At(i.BLEND),p=!1);return}if(p===!1&&(gt(i.BLEND),p=!0),q!==tp){if(q!==f||we!==V){if((N!==js||M!==js)&&(i.blendEquation(i.FUNC_ADD),N=js,M=js),we)switch(q){case $r:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Cu:i.blendFunc(i.ONE,i.ONE);break;case Ru:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Iu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:me("WebGLState: Invalid blending: ",q);break}else switch(q){case $r:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Cu:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ru:me("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Iu:me("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:me("WebGLState: Invalid blending: ",q);break}F=null,T=null,D=null,H=null,w.set(0,0,0),L=0,f=q,V=we}return}Vt=Vt||Pt,St=St||mt,ie=ie||Bt,(Pt!==N||Vt!==M)&&(i.blendEquationSeparate(ae[Pt],ae[Vt]),N=Pt,M=Vt),(mt!==F||Bt!==T||St!==D||ie!==H)&&(i.blendFuncSeparate(at[mt],at[Bt],at[St],at[ie]),F=mt,T=Bt,D=St,H=ie),(Kt.equals(w)===!1||Te!==L)&&(i.blendColor(Kt.r,Kt.g,Kt.b,Te),w.copy(Kt),L=Te),f=q,V=!1}function G(q,Pt){q.side===Vi?At(i.CULL_FACE):gt(i.CULL_FACE);let mt=q.side===Wn;Pt&&(mt=!mt),wt(mt),q.blending===$r&&q.transparent===!1?Mt(Hi):Mt(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),a.setFunc(q.depthFunc),a.setTest(q.depthTest),a.setMask(q.depthWrite),r.setMask(q.colorWrite);let Bt=q.stencilWrite;o.setTest(Bt),Bt&&(o.setMask(q.stencilWriteMask),o.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),o.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),se(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?gt(i.SAMPLE_ALPHA_TO_COVERAGE):At(i.SAMPLE_ALPHA_TO_COVERAGE)}function wt(q){$!==q&&(q?i.frontFace(i.CW):i.frontFace(i.CCW),$=q)}function Nt(q){q!==Kf?(gt(i.CULL_FACE),q!==Q&&(q===Au?i.cullFace(i.BACK):q===jf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):At(i.CULL_FACE),Q=q}function oe(q){q!==nt&&(lt&&i.lineWidth(q),nt=q)}function se(q,Pt,mt){q?(gt(i.POLYGON_OFFSET_FILL),(Y!==Pt||K!==mt)&&(Y=Pt,K=mt,a.getReversed()&&(Pt=-Pt),i.polygonOffset(Pt,mt))):At(i.POLYGON_OFFSET_FILL)}function he(q){q?gt(i.SCISSOR_TEST):At(i.SCISSOR_TEST)}function fe(q){q===void 0&&(q=i.TEXTURE0+ot-1),yt!==q&&(i.activeTexture(q),yt=q)}function k(q,Pt,mt){mt===void 0&&(yt===null?mt=i.TEXTURE0+ot-1:mt=yt);let Bt=vt[mt];Bt===void 0&&(Bt={type:void 0,texture:void 0},vt[mt]=Bt),(Bt.type!==q||Bt.texture!==Pt)&&(yt!==mt&&(i.activeTexture(mt),yt=mt),i.bindTexture(q,Pt||ft[q]),Bt.type=q,Bt.texture=Pt)}function Re(){let q=vt[yt];q!==void 0&&q.type!==void 0&&(i.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function pe(){try{i.compressedTexImage2D(...arguments)}catch(q){me("WebGLState:",q)}}function P(){try{i.compressedTexImage3D(...arguments)}catch(q){me("WebGLState:",q)}}function y(){try{i.texSubImage2D(...arguments)}catch(q){me("WebGLState:",q)}}function X(){try{i.texSubImage3D(...arguments)}catch(q){me("WebGLState:",q)}}function it(){try{i.compressedTexSubImage2D(...arguments)}catch(q){me("WebGLState:",q)}}function ht(){try{i.compressedTexSubImage3D(...arguments)}catch(q){me("WebGLState:",q)}}function Rt(){try{i.texStorage2D(...arguments)}catch(q){me("WebGLState:",q)}}function Lt(){try{i.texStorage3D(...arguments)}catch(q){me("WebGLState:",q)}}function ut(){try{i.texImage2D(...arguments)}catch(q){me("WebGLState:",q)}}function _t(){try{i.texImage3D(...arguments)}catch(q){me("WebGLState:",q)}}function Ut(q){return m[q]!==void 0?m[q]:i.getParameter(q)}function te(q,Pt){m[q]!==Pt&&(i.pixelStorei(q,Pt),m[q]=Pt)}function zt(q){ke.equals(q)===!1&&(i.scissor(q.x,q.y,q.z,q.w),ke.copy(q))}function Ot(q){Me.equals(q)===!1&&(i.viewport(q.x,q.y,q.z,q.w),Me.copy(q))}function ee(q,Pt){let mt=c.get(Pt);mt===void 0&&(mt=new WeakMap,c.set(Pt,mt));let Bt=mt.get(q);Bt===void 0&&(Bt=i.getUniformBlockIndex(Pt,q.name),mt.set(q,Bt))}function ce(q,Pt){let Bt=c.get(Pt).get(q);l.get(Pt)!==Bt&&(i.uniformBlockBinding(Pt,Bt,q.__bindingPointIndex),l.set(Pt,Bt))}function _e(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},m={},yt=null,vt={},d={},g=new WeakMap,x=[],A=null,p=!1,f=null,N=null,F=null,T=null,M=null,D=null,H=null,w=new ue(0,0,0),L=0,V=!1,$=null,Q=null,nt=null,Y=null,K=null,ke.set(0,0,i.canvas.width,i.canvas.height),Me.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:gt,disable:At,bindFramebuffer:Qt,drawBuffers:Gt,useProgram:le,setBlending:Mt,setMaterial:G,setFlipSided:wt,setCullFace:Nt,setLineWidth:oe,setPolygonOffset:se,setScissorTest:he,activeTexture:fe,bindTexture:k,unbindTexture:Re,compressedTexImage2D:pe,compressedTexImage3D:P,texImage2D:ut,texImage3D:_t,pixelStorei:te,getParameter:Ut,updateUBOMapping:ee,uniformBlockBinding:ce,texStorage2D:Rt,texStorage3D:Lt,texSubImage2D:y,texSubImage3D:X,compressedTexSubImage2D:it,compressedTexSubImage3D:ht,scissor:zt,viewport:Ot,reset:_e}}function LS(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ft,u=new WeakMap,m=new Set,d,g=new WeakMap,x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(P,y){return x?new OffscreenCanvas(P,y):Na("canvas")}function p(P,y,X){let it=1,ht=pe(P);if((ht.width>X||ht.height>X)&&(it=X/Math.max(ht.width,ht.height)),it<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let Rt=Math.floor(it*ht.width),Lt=Math.floor(it*ht.height);d===void 0&&(d=A(Rt,Lt));let ut=y?A(Rt,Lt):d;return ut.width=Rt,ut.height=Lt,ut.getContext("2d").drawImage(P,0,0,Rt,Lt),de("WebGLRenderer: Texture has been resized from ("+ht.width+"x"+ht.height+") to ("+Rt+"x"+Lt+")."),ut}else return"data"in P&&de("WebGLRenderer: Image in DataTexture is too big ("+ht.width+"x"+ht.height+")."),P;return P}function f(P){return P.generateMipmaps}function N(P){i.generateMipmap(P)}function F(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(P,y,X,it,ht,Rt=!1){if(P!==null){if(i[P]!==void 0)return i[P];de("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Lt;it&&(Lt=t.get("EXT_texture_norm16"),Lt||de("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ut=y;if(y===i.RED&&(X===i.FLOAT&&(ut=i.R32F),X===i.HALF_FLOAT&&(ut=i.R16F),X===i.UNSIGNED_BYTE&&(ut=i.R8),X===i.UNSIGNED_SHORT&&Lt&&(ut=Lt.R16_EXT),X===i.SHORT&&Lt&&(ut=Lt.R16_SNORM_EXT)),y===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(ut=i.R8UI),X===i.UNSIGNED_SHORT&&(ut=i.R16UI),X===i.UNSIGNED_INT&&(ut=i.R32UI),X===i.BYTE&&(ut=i.R8I),X===i.SHORT&&(ut=i.R16I),X===i.INT&&(ut=i.R32I)),y===i.RG&&(X===i.FLOAT&&(ut=i.RG32F),X===i.HALF_FLOAT&&(ut=i.RG16F),X===i.UNSIGNED_BYTE&&(ut=i.RG8),X===i.UNSIGNED_SHORT&&Lt&&(ut=Lt.RG16_EXT),X===i.SHORT&&Lt&&(ut=Lt.RG16_SNORM_EXT)),y===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(ut=i.RG8UI),X===i.UNSIGNED_SHORT&&(ut=i.RG16UI),X===i.UNSIGNED_INT&&(ut=i.RG32UI),X===i.BYTE&&(ut=i.RG8I),X===i.SHORT&&(ut=i.RG16I),X===i.INT&&(ut=i.RG32I)),y===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(ut=i.RGB8UI),X===i.UNSIGNED_SHORT&&(ut=i.RGB16UI),X===i.UNSIGNED_INT&&(ut=i.RGB32UI),X===i.BYTE&&(ut=i.RGB8I),X===i.SHORT&&(ut=i.RGB16I),X===i.INT&&(ut=i.RGB32I)),y===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(ut=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(ut=i.RGBA16UI),X===i.UNSIGNED_INT&&(ut=i.RGBA32UI),X===i.BYTE&&(ut=i.RGBA8I),X===i.SHORT&&(ut=i.RGBA16I),X===i.INT&&(ut=i.RGBA32I)),y===i.RGB&&(X===i.UNSIGNED_SHORT&&Lt&&(ut=Lt.RGB16_EXT),X===i.SHORT&&Lt&&(ut=Lt.RGB16_SNORM_EXT),X===i.UNSIGNED_INT_5_9_9_9_REV&&(ut=i.RGB9_E5),X===i.UNSIGNED_INT_10F_11F_11F_REV&&(ut=i.R11F_G11F_B10F)),y===i.RGBA){let _t=Rt?Da:Ne.getTransfer(ht);X===i.FLOAT&&(ut=i.RGBA32F),X===i.HALF_FLOAT&&(ut=i.RGBA16F),X===i.UNSIGNED_BYTE&&(ut=_t===We?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT&&Lt&&(ut=Lt.RGBA16_EXT),X===i.SHORT&&Lt&&(ut=Lt.RGBA16_SNORM_EXT),X===i.UNSIGNED_SHORT_4_4_4_4&&(ut=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(ut=i.RGB5_A1)}return(ut===i.R16F||ut===i.R32F||ut===i.RG16F||ut===i.RG32F||ut===i.RGBA16F||ut===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ut}function M(P,y){let X;return P?y===null||y===Ri||y===qr?X=i.DEPTH24_STENCIL8:y===mi?X=i.DEPTH32F_STENCIL8:y===Xr&&(X=i.DEPTH24_STENCIL8,de("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Ri||y===qr?X=i.DEPTH_COMPONENT24:y===mi?X=i.DEPTH_COMPONENT32F:y===Xr&&(X=i.DEPTH_COMPONENT16),X}function D(P,y){return f(P)===!0||P.isFramebufferTexture&&P.minFilter!==yn&&P.minFilter!==Rn?Math.log2(Math.max(y.width,y.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?y.mipmaps.length:1}function H(P){let y=P.target;y.removeEventListener("dispose",H),L(y),y.isVideoTexture&&u.delete(y),y.isHTMLTexture&&m.delete(y)}function w(P){let y=P.target;y.removeEventListener("dispose",w),$(y)}function L(P){let y=n.get(P);if(y.__webglInit===void 0)return;let X=P.source,it=g.get(X);if(it){let ht=it[y.__cacheKey];ht.usedTimes--,ht.usedTimes===0&&V(P),Object.keys(it).length===0&&g.delete(X)}n.remove(P)}function V(P){let y=n.get(P);i.deleteTexture(y.__webglTexture);let X=P.source,it=g.get(X);delete it[y.__cacheKey],a.memory.textures--}function $(P){let y=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let it=0;it<6;it++){if(Array.isArray(y.__webglFramebuffer[it]))for(let ht=0;ht<y.__webglFramebuffer[it].length;ht++)i.deleteFramebuffer(y.__webglFramebuffer[it][ht]);else i.deleteFramebuffer(y.__webglFramebuffer[it]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[it])}else{if(Array.isArray(y.__webglFramebuffer))for(let it=0;it<y.__webglFramebuffer.length;it++)i.deleteFramebuffer(y.__webglFramebuffer[it]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let it=0;it<y.__webglColorRenderbuffer.length;it++)y.__webglColorRenderbuffer[it]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[it]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let X=P.textures;for(let it=0,ht=X.length;it<ht;it++){let Rt=n.get(X[it]);Rt.__webglTexture&&(i.deleteTexture(Rt.__webglTexture),a.memory.textures--),n.remove(X[it])}n.remove(P)}let Q=0;function nt(){Q=0}function Y(){return Q}function K(P){Q=P}function ot(){let P=Q;return P>=s.maxTextures&&de("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+s.maxTextures),Q+=1,P}function lt(P){let y=[];return y.push(P.wrapS),y.push(P.wrapT),y.push(P.wrapR||0),y.push(P.magFilter),y.push(P.minFilter),y.push(P.anisotropy),y.push(P.internalFormat),y.push(P.format),y.push(P.type),y.push(P.generateMipmaps),y.push(P.premultiplyAlpha),y.push(P.flipY),y.push(P.unpackAlignment),y.push(P.colorSpace),y.join()}function bt(P,y){let X=n.get(P);if(P.isVideoTexture&&k(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&X.__version!==P.version){let it=P.image;if(it===null)de("WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)de("WebGLRenderer: Texture marked for update but image is incomplete");else{At(X,P,y);return}}else P.isExternalTexture&&(X.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+y)}function ct(P,y){let X=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&X.__version!==P.version){At(X,P,y);return}else P.isExternalTexture&&(X.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+y)}function yt(P,y){let X=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&X.__version!==P.version){At(X,P,y);return}e.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+y)}function vt(P,y){let X=n.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&X.__version!==P.version){Qt(X,P,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+y)}let Ht={[Al]:i.REPEAT,[Ui]:i.CLAMP_TO_EDGE,[Cl]:i.MIRRORED_REPEAT},Xt={[yn]:i.NEAREST,[yp]:i.NEAREST_MIPMAP_NEAREST,[mo]:i.NEAREST_MIPMAP_LINEAR,[Rn]:i.LINEAR,[hc]:i.LINEAR_MIPMAP_NEAREST,[Cs]:i.LINEAR_MIPMAP_LINEAR},ke={[wp]:i.NEVER,[Rp]:i.ALWAYS,[Ep]:i.LESS,[Zc]:i.LEQUAL,[Tp]:i.EQUAL,[Jc]:i.GEQUAL,[Ap]:i.GREATER,[Cp]:i.NOTEQUAL};function Me(P,y){if(y.type===mi&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===Rn||y.magFilter===hc||y.magFilter===mo||y.magFilter===Cs||y.minFilter===Rn||y.minFilter===hc||y.minFilter===mo||y.minFilter===Cs)&&de("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,Ht[y.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,Ht[y.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,Ht[y.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,Xt[y.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,Xt[y.minFilter]),y.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,ke[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===yn||y.minFilter!==mo&&y.minFilter!==Cs||y.type===mi&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let X=t.get("EXT_texture_filter_anisotropic");i.texParameterf(P,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Le(P,y){let X=!1;P.__webglInit===void 0&&(P.__webglInit=!0,y.addEventListener("dispose",H));let it=y.source,ht=g.get(it);ht===void 0&&(ht={},g.set(it,ht));let Rt=lt(y);if(Rt!==P.__cacheKey){ht[Rt]===void 0&&(ht[Rt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,X=!0),ht[Rt].usedTimes++;let Lt=ht[P.__cacheKey];Lt!==void 0&&(ht[P.__cacheKey].usedTimes--,Lt.usedTimes===0&&V(y)),P.__cacheKey=Rt,P.__webglTexture=ht[Rt].texture}return X}function ft(P,y,X){return Math.floor(Math.floor(P/X)/y)}function gt(P,y,X,it){let Rt=P.updateRanges;if(Rt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,X,it,y.data);else{Rt.sort((te,zt)=>te.start-zt.start);let Lt=0;for(let te=1;te<Rt.length;te++){let zt=Rt[Lt],Ot=Rt[te],ee=zt.start+zt.count,ce=ft(Ot.start,y.width,4),_e=ft(zt.start,y.width,4);Ot.start<=ee+1&&ce===_e&&ft(Ot.start+Ot.count-1,y.width,4)===ce?zt.count=Math.max(zt.count,Ot.start+Ot.count-zt.start):(++Lt,Rt[Lt]=Ot)}Rt.length=Lt+1;let ut=e.getParameter(i.UNPACK_ROW_LENGTH),_t=e.getParameter(i.UNPACK_SKIP_PIXELS),Ut=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let te=0,zt=Rt.length;te<zt;te++){let Ot=Rt[te],ee=Math.floor(Ot.start/4),ce=Math.ceil(Ot.count/4),_e=ee%y.width,q=Math.floor(ee/y.width),Pt=ce,mt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,_e),e.pixelStorei(i.UNPACK_SKIP_ROWS,q),e.texSubImage2D(i.TEXTURE_2D,0,_e,q,Pt,mt,X,it,y.data)}P.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,ut),e.pixelStorei(i.UNPACK_SKIP_PIXELS,_t),e.pixelStorei(i.UNPACK_SKIP_ROWS,Ut)}}function At(P,y,X){let it=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(it=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(it=i.TEXTURE_3D);let ht=Le(P,y),Rt=y.source;e.bindTexture(it,P.__webglTexture,i.TEXTURE0+X);let Lt=n.get(Rt);if(Rt.version!==Lt.__version||ht===!0){if(e.activeTexture(i.TEXTURE0+X),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let mt=Ne.getPrimaries(Ne.workingColorSpace),Bt=y.colorSpace===ls?null:Ne.getPrimaries(y.colorSpace),Vt=y.colorSpace===ls||mt===Bt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Vt)}e.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment);let _t=p(y.image,!1,s.maxTextureSize);_t=Re(y,_t);let Ut=r.convert(y.format,y.colorSpace),te=r.convert(y.type),zt=T(y.internalFormat,Ut,te,y.normalized,y.colorSpace,y.isVideoTexture);Me(it,y);let Ot,ee=y.mipmaps,ce=y.isVideoTexture!==!0,_e=Lt.__version===void 0||ht===!0,q=Rt.dataReady,Pt=D(y,_t);if(y.isDepthTexture)zt=M(y.format===Rs,y.type),_e&&(ce?e.texStorage2D(i.TEXTURE_2D,1,zt,_t.width,_t.height):e.texImage2D(i.TEXTURE_2D,0,zt,_t.width,_t.height,0,Ut,te,null));else if(y.isDataTexture)if(ee.length>0){ce&&_e&&e.texStorage2D(i.TEXTURE_2D,Pt,zt,ee[0].width,ee[0].height);for(let mt=0,Bt=ee.length;mt<Bt;mt++)Ot=ee[mt],ce?q&&e.texSubImage2D(i.TEXTURE_2D,mt,0,0,Ot.width,Ot.height,Ut,te,Ot.data):e.texImage2D(i.TEXTURE_2D,mt,zt,Ot.width,Ot.height,0,Ut,te,Ot.data);y.generateMipmaps=!1}else ce?(_e&&e.texStorage2D(i.TEXTURE_2D,Pt,zt,_t.width,_t.height),q&&gt(y,_t,Ut,te)):e.texImage2D(i.TEXTURE_2D,0,zt,_t.width,_t.height,0,Ut,te,_t.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){ce&&_e&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Pt,zt,ee[0].width,ee[0].height,_t.depth);for(let mt=0,Bt=ee.length;mt<Bt;mt++)if(Ot=ee[mt],y.format!==gi)if(Ut!==null)if(ce){if(q)if(y.layerUpdates.size>0){let Vt=ed(Ot.width,Ot.height,y.format,y.type);for(let St of y.layerUpdates){let ie=Ot.data.subarray(St*Vt/Ot.data.BYTES_PER_ELEMENT,(St+1)*Vt/Ot.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,mt,0,0,St,Ot.width,Ot.height,1,Ut,ie)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,mt,0,0,0,Ot.width,Ot.height,_t.depth,Ut,Ot.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,mt,zt,Ot.width,Ot.height,_t.depth,0,Ot.data,0,0);else de("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ce?q&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,mt,0,0,0,Ot.width,Ot.height,_t.depth,Ut,te,Ot.data):e.texImage3D(i.TEXTURE_2D_ARRAY,mt,zt,Ot.width,Ot.height,_t.depth,0,Ut,te,Ot.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{ce&&_e&&e.texStorage2D(i.TEXTURE_2D,Pt,zt,ee[0].width,ee[0].height);for(let mt=0,Bt=ee.length;mt<Bt;mt++)Ot=ee[mt],y.format!==gi?Ut!==null?ce?q&&e.compressedTexSubImage2D(i.TEXTURE_2D,mt,0,0,Ot.width,Ot.height,Ut,Ot.data):e.compressedTexImage2D(i.TEXTURE_2D,mt,zt,Ot.width,Ot.height,0,Ot.data):de("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ce?q&&e.texSubImage2D(i.TEXTURE_2D,mt,0,0,Ot.width,Ot.height,Ut,te,Ot.data):e.texImage2D(i.TEXTURE_2D,mt,zt,Ot.width,Ot.height,0,Ut,te,Ot.data)}else if(y.isDataArrayTexture)if(ce){if(_e&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Pt,zt,_t.width,_t.height,_t.depth),q)if(y.layerUpdates.size>0){let mt=ed(_t.width,_t.height,y.format,y.type);for(let Bt of y.layerUpdates){let Vt=_t.data.subarray(Bt*mt/_t.data.BYTES_PER_ELEMENT,(Bt+1)*mt/_t.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Bt,_t.width,_t.height,1,Ut,te,Vt)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,_t.width,_t.height,_t.depth,Ut,te,_t.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,zt,_t.width,_t.height,_t.depth,0,Ut,te,_t.data);else if(y.isData3DTexture)ce?(_e&&e.texStorage3D(i.TEXTURE_3D,Pt,zt,_t.width,_t.height,_t.depth),q&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,_t.width,_t.height,_t.depth,Ut,te,_t.data)):e.texImage3D(i.TEXTURE_3D,0,zt,_t.width,_t.height,_t.depth,0,Ut,te,_t.data);else if(y.isFramebufferTexture){if(_e)if(ce)e.texStorage2D(i.TEXTURE_2D,Pt,zt,_t.width,_t.height);else{let mt=_t.width,Bt=_t.height;for(let Vt=0;Vt<Pt;Vt++)e.texImage2D(i.TEXTURE_2D,Vt,zt,mt,Bt,0,Ut,te,null),mt>>=1,Bt>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in i){let mt=i.canvas;if(mt.hasAttribute("layoutsubtree")||mt.setAttribute("layoutsubtree","true"),_t.parentNode!==mt){mt.appendChild(_t),m.add(y),mt.onpaint=Bt=>{let Vt=Bt.changedElements;for(let St of m)Vt.includes(St.image)&&(St.needsUpdate=!0)},mt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,_t);else{let Vt=i.RGBA,St=i.RGBA,ie=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Vt,St,ie,_t)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ee.length>0){if(ce&&_e){let mt=pe(ee[0]);e.texStorage2D(i.TEXTURE_2D,Pt,zt,mt.width,mt.height)}for(let mt=0,Bt=ee.length;mt<Bt;mt++)Ot=ee[mt],ce?q&&e.texSubImage2D(i.TEXTURE_2D,mt,0,0,Ut,te,Ot):e.texImage2D(i.TEXTURE_2D,mt,zt,Ut,te,Ot);y.generateMipmaps=!1}else if(ce){if(_e){let mt=pe(_t);e.texStorage2D(i.TEXTURE_2D,Pt,zt,mt.width,mt.height)}q&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Ut,te,_t)}else e.texImage2D(i.TEXTURE_2D,0,zt,Ut,te,_t);f(y)&&N(it),Lt.__version=Rt.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version}function Qt(P,y,X){if(y.image.length!==6)return;let it=Le(P,y),ht=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+X);let Rt=n.get(ht);if(ht.version!==Rt.__version||it===!0){e.activeTexture(i.TEXTURE0+X);let Lt=Ne.getPrimaries(Ne.workingColorSpace),ut=y.colorSpace===ls?null:Ne.getPrimaries(y.colorSpace),_t=y.colorSpace===ls||Lt===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);let Ut=y.isCompressedTexture||y.image[0].isCompressedTexture,te=y.image[0]&&y.image[0].isDataTexture,zt=[];for(let St=0;St<6;St++)!Ut&&!te?zt[St]=p(y.image[St],!0,s.maxCubemapSize):zt[St]=te?y.image[St].image:y.image[St],zt[St]=Re(y,zt[St]);let Ot=zt[0],ee=r.convert(y.format,y.colorSpace),ce=r.convert(y.type),_e=T(y.internalFormat,ee,ce,y.normalized,y.colorSpace),q=y.isVideoTexture!==!0,Pt=Rt.__version===void 0||it===!0,mt=ht.dataReady,Bt=D(y,Ot);Me(i.TEXTURE_CUBE_MAP,y);let Vt;if(Ut){q&&Pt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Bt,_e,Ot.width,Ot.height);for(let St=0;St<6;St++){Vt=zt[St].mipmaps;for(let ie=0;ie<Vt.length;ie++){let Kt=Vt[ie];y.format!==gi?ee!==null?q?mt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,ie,0,0,Kt.width,Kt.height,ee,Kt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,ie,_e,Kt.width,Kt.height,0,Kt.data):de("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,ie,0,0,Kt.width,Kt.height,ee,ce,Kt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,ie,_e,Kt.width,Kt.height,0,ee,ce,Kt.data)}}}else{if(Vt=y.mipmaps,q&&Pt){Vt.length>0&&Bt++;let St=pe(zt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Bt,_e,St.width,St.height)}for(let St=0;St<6;St++)if(te){q?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,zt[St].width,zt[St].height,ee,ce,zt[St].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,_e,zt[St].width,zt[St].height,0,ee,ce,zt[St].data);for(let ie=0;ie<Vt.length;ie++){let Te=Vt[ie].image[St].image;q?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,ie+1,0,0,Te.width,Te.height,ee,ce,Te.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,ie+1,_e,Te.width,Te.height,0,ee,ce,Te.data)}}else{q?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,ee,ce,zt[St]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,_e,ee,ce,zt[St]);for(let ie=0;ie<Vt.length;ie++){let Kt=Vt[ie];q?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,ie+1,0,0,ee,ce,Kt.image[St]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,ie+1,_e,ee,ce,Kt.image[St])}}}f(y)&&N(i.TEXTURE_CUBE_MAP),Rt.__version=ht.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version}function Gt(P,y,X,it,ht,Rt){let Lt=r.convert(X.format,X.colorSpace),ut=r.convert(X.type),_t=T(X.internalFormat,Lt,ut,X.normalized,X.colorSpace),Ut=n.get(y),te=n.get(X);if(te.__renderTarget=y,!Ut.__hasExternalTextures){let zt=Math.max(1,y.width>>Rt),Ot=Math.max(1,y.height>>Rt);ht===i.TEXTURE_3D||ht===i.TEXTURE_2D_ARRAY?e.texImage3D(ht,Rt,_t,zt,Ot,y.depth,0,Lt,ut,null):e.texImage2D(ht,Rt,_t,zt,Ot,0,Lt,ut,null)}e.bindFramebuffer(i.FRAMEBUFFER,P),fe(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,it,ht,te.__webglTexture,0,he(y)):(ht===i.TEXTURE_2D||ht>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ht<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,it,ht,te.__webglTexture,Rt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function le(P,y,X){if(i.bindRenderbuffer(i.RENDERBUFFER,P),y.depthBuffer){let it=y.depthTexture,ht=it&&it.isDepthTexture?it.type:null,Rt=M(y.stencilBuffer,ht),Lt=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;fe(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,he(y),Rt,y.width,y.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,he(y),Rt,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,Rt,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Lt,i.RENDERBUFFER,P)}else{let it=y.textures;for(let ht=0;ht<it.length;ht++){let Rt=it[ht],Lt=r.convert(Rt.format,Rt.colorSpace),ut=r.convert(Rt.type),_t=T(Rt.internalFormat,Lt,ut,Rt.normalized,Rt.colorSpace);fe(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,he(y),_t,y.width,y.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,he(y),_t,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,_t,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ae(P,y,X){let it=y.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,P),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ht=n.get(y.depthTexture);if(ht.__renderTarget=y,(!ht.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),it){if(ht.__webglInit===void 0&&(ht.__webglInit=!0,y.depthTexture.addEventListener("dispose",H)),ht.__webglTexture===void 0){ht.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,ht.__webglTexture),Me(i.TEXTURE_CUBE_MAP,y.depthTexture);let Ut=r.convert(y.depthTexture.format),te=r.convert(y.depthTexture.type),zt;y.depthTexture.format===Oi?zt=i.DEPTH_COMPONENT24:y.depthTexture.format===Rs&&(zt=i.DEPTH24_STENCIL8);for(let Ot=0;Ot<6;Ot++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ot,0,zt,y.width,y.height,0,Ut,te,null)}}else bt(y.depthTexture,0);let Rt=ht.__webglTexture,Lt=he(y),ut=it?i.TEXTURE_CUBE_MAP_POSITIVE_X+X:i.TEXTURE_2D,_t=y.depthTexture.format===Rs?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(y.depthTexture.format===Oi)fe(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,_t,ut,Rt,0,Lt):i.framebufferTexture2D(i.FRAMEBUFFER,_t,ut,Rt,0);else if(y.depthTexture.format===Rs)fe(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,_t,ut,Rt,0,Lt):i.framebufferTexture2D(i.FRAMEBUFFER,_t,ut,Rt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function at(P){let y=n.get(P),X=P.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==P.depthTexture){let it=P.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),it){let ht=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,it.removeEventListener("dispose",ht)};it.addEventListener("dispose",ht),y.__depthDisposeCallback=ht}y.__boundDepthTexture=it}if(P.depthTexture&&!y.__autoAllocateDepthBuffer)if(X)for(let it=0;it<6;it++)ae(y.__webglFramebuffer[it],P,it);else{let it=P.texture.mipmaps;it&&it.length>0?ae(y.__webglFramebuffer[0],P,0):ae(y.__webglFramebuffer,P,0)}else if(X){y.__webglDepthbuffer=[];for(let it=0;it<6;it++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[it]),y.__webglDepthbuffer[it]===void 0)y.__webglDepthbuffer[it]=i.createRenderbuffer(),le(y.__webglDepthbuffer[it],P,!1);else{let ht=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Rt=y.__webglDepthbuffer[it];i.bindRenderbuffer(i.RENDERBUFFER,Rt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ht,i.RENDERBUFFER,Rt)}}else{let it=P.texture.mipmaps;if(it&&it.length>0?e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),le(y.__webglDepthbuffer,P,!1);else{let ht=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Rt=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Rt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ht,i.RENDERBUFFER,Rt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Mt(P,y,X){let it=n.get(P);y!==void 0&&Gt(it.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&at(P)}function G(P){let y=P.texture,X=n.get(P),it=n.get(y);P.addEventListener("dispose",w);let ht=P.textures,Rt=P.isWebGLCubeRenderTarget===!0,Lt=ht.length>1;if(Lt||(it.__webglTexture===void 0&&(it.__webglTexture=i.createTexture()),it.__version=y.version,a.memory.textures++),Rt){X.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(y.mipmaps&&y.mipmaps.length>0){X.__webglFramebuffer[ut]=[];for(let _t=0;_t<y.mipmaps.length;_t++)X.__webglFramebuffer[ut][_t]=i.createFramebuffer()}else X.__webglFramebuffer[ut]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){X.__webglFramebuffer=[];for(let ut=0;ut<y.mipmaps.length;ut++)X.__webglFramebuffer[ut]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(Lt)for(let ut=0,_t=ht.length;ut<_t;ut++){let Ut=n.get(ht[ut]);Ut.__webglTexture===void 0&&(Ut.__webglTexture=i.createTexture(),a.memory.textures++)}if(P.samples>0&&fe(P)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let ut=0;ut<ht.length;ut++){let _t=ht[ut];X.__webglColorRenderbuffer[ut]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[ut]);let Ut=r.convert(_t.format,_t.colorSpace),te=r.convert(_t.type),zt=T(_t.internalFormat,Ut,te,_t.normalized,_t.colorSpace,P.isXRRenderTarget===!0),Ot=he(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ot,zt,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,X.__webglColorRenderbuffer[ut])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),le(X.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Rt){e.bindTexture(i.TEXTURE_CUBE_MAP,it.__webglTexture),Me(i.TEXTURE_CUBE_MAP,y);for(let ut=0;ut<6;ut++)if(y.mipmaps&&y.mipmaps.length>0)for(let _t=0;_t<y.mipmaps.length;_t++)Gt(X.__webglFramebuffer[ut][_t],P,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,_t);else Gt(X.__webglFramebuffer[ut],P,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);f(y)&&N(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Lt){for(let ut=0,_t=ht.length;ut<_t;ut++){let Ut=ht[ut],te=n.get(Ut),zt=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(zt=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(zt,te.__webglTexture),Me(zt,Ut),Gt(X.__webglFramebuffer,P,Ut,i.COLOR_ATTACHMENT0+ut,zt,0),f(Ut)&&N(zt)}e.unbindTexture()}else{let ut=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ut=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ut,it.__webglTexture),Me(ut,y),y.mipmaps&&y.mipmaps.length>0)for(let _t=0;_t<y.mipmaps.length;_t++)Gt(X.__webglFramebuffer[_t],P,y,i.COLOR_ATTACHMENT0,ut,_t);else Gt(X.__webglFramebuffer,P,y,i.COLOR_ATTACHMENT0,ut,0);f(y)&&N(ut),e.unbindTexture()}P.depthBuffer&&at(P)}function wt(P){let y=P.textures;for(let X=0,it=y.length;X<it;X++){let ht=y[X];if(f(ht)){let Rt=F(P),Lt=n.get(ht).__webglTexture;e.bindTexture(Rt,Lt),N(Rt),e.unbindTexture()}}}let Nt=[],oe=[];function se(P){if(P.samples>0){if(fe(P)===!1){let y=P.textures,X=P.width,it=P.height,ht=i.COLOR_BUFFER_BIT,Rt=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Lt=n.get(P),ut=y.length>1;if(ut)for(let Ut=0;Ut<y.length;Ut++)e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ut,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ut,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer);let _t=P.texture.mipmaps;_t&&_t.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer);for(let Ut=0;Ut<y.length;Ut++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ht|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ht|=i.STENCIL_BUFFER_BIT)),ut){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Lt.__webglColorRenderbuffer[Ut]);let te=n.get(y[Ut]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,te,0)}i.blitFramebuffer(0,0,X,it,0,0,X,it,ht,i.NEAREST),l===!0&&(Nt.length=0,oe.length=0,Nt.push(i.COLOR_ATTACHMENT0+Ut),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(Nt.push(Rt),oe.push(Rt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,oe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Nt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ut)for(let Ut=0;Ut<y.length;Ut++){e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ut,i.RENDERBUFFER,Lt.__webglColorRenderbuffer[Ut]);let te=n.get(y[Ut]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ut,i.TEXTURE_2D,te,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){let y=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function he(P){return Math.min(s.maxSamples,P.samples)}function fe(P){let y=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function k(P){let y=a.render.frame;u.get(P)!==y&&(u.set(P,y),P.update())}function Re(P,y){let X=P.colorSpace,it=P.format,ht=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||X!==La&&X!==ls&&(Ne.getTransfer(X)===We?(it!==gi||ht!==Qn)&&de("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):me("WebGLTextures: Unsupported texture color space:",X)),y}function pe(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=ot,this.resetTextureUnits=nt,this.getTextureUnits=Y,this.setTextureUnits=K,this.setTexture2D=bt,this.setTexture2DArray=ct,this.setTexture3D=yt,this.setTextureCube=vt,this.rebindTextures=Mt,this.setupRenderTarget=G,this.updateRenderTargetMipmap=wt,this.updateMultisampleRenderTarget=se,this.setupDepthRenderbuffer=at,this.setupFrameBufferTexture=Gt,this.useMultisampledRTT=fe,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function DS(i,t){function e(n,s=ls){let r,a=Ne.getTransfer(s);if(n===Qn)return i.UNSIGNED_BYTE;if(n===dc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===fc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Gu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Wu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Vu)return i.BYTE;if(n===Hu)return i.SHORT;if(n===Xr)return i.UNSIGNED_SHORT;if(n===uc)return i.INT;if(n===Ri)return i.UNSIGNED_INT;if(n===mi)return i.FLOAT;if(n===Ii)return i.HALF_FLOAT;if(n===$u)return i.ALPHA;if(n===Xu)return i.RGB;if(n===gi)return i.RGBA;if(n===Oi)return i.DEPTH_COMPONENT;if(n===Rs)return i.DEPTH_STENCIL;if(n===pc)return i.RED;if(n===mc)return i.RED_INTEGER;if(n===Is)return i.RG;if(n===gc)return i.RG_INTEGER;if(n===_c)return i.RGBA_INTEGER;if(n===go||n===_o||n===xo||n===vo)if(a===We)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===go)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===_o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===xo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===vo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===go)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===_o)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===xo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===vo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===xc||n===vc||n===yc||n===Sc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===xc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===vc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===yc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Sc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===bc||n===Mc||n===wc||n===Ec||n===Tc||n===yo||n===Ac)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===bc||n===Mc)return a===We?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===wc)return a===We?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ec)return r.COMPRESSED_R11_EAC;if(n===Tc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===yo)return r.COMPRESSED_RG11_EAC;if(n===Ac)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Cc||n===Rc||n===Ic||n===Pc||n===Lc||n===Dc||n===Nc||n===Uc||n===Fc||n===Oc||n===Bc||n===kc||n===zc||n===Vc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Cc)return a===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Rc)return a===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ic)return a===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Pc)return a===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Lc)return a===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Dc)return a===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Nc)return a===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Uc)return a===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Fc)return a===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Oc)return a===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Bc)return a===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===kc)return a===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===zc)return a===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Vc)return a===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Hc||n===Gc||n===Wc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Hc)return a===We?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Gc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Wc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===$c||n===Xc||n===So||n===qc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===$c)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Xc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===So)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===qc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===qr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var NS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,US=`
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

}`,md=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new $a(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Mn({vertexShader:NS,fragmentShader:US,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new bn(new eo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},gd=class extends Bi{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,m=null,d=null,g=null,x=null,A=typeof XRWebGLBinding<"u",p=new md,f={},N=e.getContextAttributes(),F=null,T=null,M=[],D=[],H=new Ft,w=null,L=null,V=new Fn;V.viewport=new $e;let $=new Fn;$.viewport=new $e;let Q=[V,$],nt=new ac,Y=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ft){let gt=M[ft];return gt===void 0&&(gt=new Or,M[ft]=gt),gt.getTargetRaySpace()},this.getControllerGrip=function(ft){let gt=M[ft];return gt===void 0&&(gt=new Or,M[ft]=gt),gt.getGripSpace()},this.getHand=function(ft){let gt=M[ft];return gt===void 0&&(gt=new Or,M[ft]=gt),gt.getHandSpace()};function ot(ft){let gt=D.indexOf(ft.inputSource);if(gt===-1)return;let At=M[gt];At!==void 0&&(At.update(ft.inputSource,ft.frame,c||a),At.dispatchEvent({type:ft.type,data:ft.inputSource}))}function lt(){s.removeEventListener("select",ot),s.removeEventListener("selectstart",ot),s.removeEventListener("selectend",ot),s.removeEventListener("squeeze",ot),s.removeEventListener("squeezestart",ot),s.removeEventListener("squeezeend",ot),s.removeEventListener("end",lt),s.removeEventListener("inputsourceschange",bt);for(let ft=0;ft<M.length;ft++){let gt=D[ft];gt!==null&&(D[ft]=null,M[ft].disconnect(gt))}Y=null,K=null,p.reset();for(let ft in f)delete f[ft];if(t.setRenderTarget(F),g=null,d=null,m=null,s=null,T=null,Le.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(H.width,H.height,!1),L!==null){let ft=L.camera;ft.fov=L.fov,ft.zoom=L.zoom,ft.updateProjectionMatrix(),L=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ft){r=ft,n.isPresenting===!0&&de("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ft){o=ft,n.isPresenting===!0&&de("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ft){c=ft},this.getBaseLayer=function(){return d!==null?d:g},this.getBinding=function(){return m===null&&A&&(m=new XRWebGLBinding(s,e)),m},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(ft){if(s=ft,s!==null){if(F=t.getRenderTarget(),s.addEventListener("select",ot),s.addEventListener("selectstart",ot),s.addEventListener("selectend",ot),s.addEventListener("squeeze",ot),s.addEventListener("squeezestart",ot),s.addEventListener("squeezeend",ot),s.addEventListener("end",lt),s.addEventListener("inputsourceschange",bt),N.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(H),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let At=null,Qt=null,Gt=null;N.depth&&(Gt=N.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,At=N.stencil?Rs:Oi,Qt=N.stencil?qr:Ri);let le={colorFormat:e.RGBA8,depthFormat:Gt,scaleFactor:r};m=this.getBinding(),d=m.createProjectionLayer(le),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),T=new Kn(d.textureWidth,d.textureHeight,{format:gi,type:Qn,depthTexture:new Ss(d.textureWidth,d.textureHeight,Qt,void 0,void 0,void 0,void 0,void 0,void 0,At),stencilBuffer:N.stencil,colorSpace:t.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let At={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:r};g=new XRWebGLLayer(s,e,At),s.updateRenderState({baseLayer:g}),t.setPixelRatio(1),t.setSize(g.framebufferWidth,g.framebufferHeight,!1),T=new Kn(g.framebufferWidth,g.framebufferHeight,{format:gi,type:Qn,colorSpace:t.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Le.setContext(s),Le.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function bt(ft){for(let gt=0;gt<ft.removed.length;gt++){let At=ft.removed[gt],Qt=D.indexOf(At);Qt>=0&&(D[Qt]=null,M[Qt].disconnect(At))}for(let gt=0;gt<ft.added.length;gt++){let At=ft.added[gt],Qt=D.indexOf(At);if(Qt===-1){for(let le=0;le<M.length;le++)if(le>=D.length){D.push(At),Qt=le;break}else if(D[le]===null){D[le]=At,Qt=le;break}if(Qt===-1)break}let Gt=M[Qt];Gt&&Gt.connect(At)}}let ct=new W,yt=new W;function vt(ft,gt,At){ct.setFromMatrixPosition(gt.matrixWorld),yt.setFromMatrixPosition(At.matrixWorld);let Qt=ct.distanceTo(yt),Gt=gt.projectionMatrix.elements,le=At.projectionMatrix.elements,ae=Gt[14]/(Gt[10]-1),at=Gt[14]/(Gt[10]+1),Mt=(Gt[9]+1)/Gt[5],G=(Gt[9]-1)/Gt[5],wt=(Gt[8]-1)/Gt[0],Nt=(le[8]+1)/le[0],oe=ae*wt,se=ae*Nt,he=Qt/(-wt+Nt),fe=he*-wt;if(gt.matrixWorld.decompose(ft.position,ft.quaternion,ft.scale),ft.translateX(fe),ft.translateZ(he),ft.matrixWorld.compose(ft.position,ft.quaternion,ft.scale),ft.matrixWorldInverse.copy(ft.matrixWorld).invert(),Gt[10]===-1)ft.projectionMatrix.copy(gt.projectionMatrix),ft.projectionMatrixInverse.copy(gt.projectionMatrixInverse);else{let k=ae+he,Re=at+he,pe=oe-fe,P=se+(Qt-fe),y=Mt*at/Re*k,X=G*at/Re*k;ft.projectionMatrix.makePerspective(pe,P,y,X,k,Re),ft.projectionMatrixInverse.copy(ft.projectionMatrix).invert()}}function Ht(ft,gt){gt===null?ft.matrixWorld.copy(ft.matrix):ft.matrixWorld.multiplyMatrices(gt.matrixWorld,ft.matrix),ft.matrixWorldInverse.copy(ft.matrixWorld).invert()}this.updateCamera=function(ft){if(s===null)return;let gt=ft.near,At=ft.far;p.texture!==null&&(p.depthNear>0&&(gt=p.depthNear),p.depthFar>0&&(At=p.depthFar)),nt.near=$.near=V.near=gt,nt.far=$.far=V.far=At,(Y!==nt.near||K!==nt.far)&&(s.updateRenderState({depthNear:nt.near,depthFar:nt.far}),Y=nt.near,K=nt.far),nt.layers.mask=ft.layers.mask|6,V.layers.mask=nt.layers.mask&-5,$.layers.mask=nt.layers.mask&-3;let Qt=ft.parent,Gt=nt.cameras;Ht(nt,Qt);for(let le=0;le<Gt.length;le++)Ht(Gt[le],Qt);Gt.length===2?vt(nt,V,$):nt.projectionMatrix.copy(V.projectionMatrix),L===null&&ft.isPerspectiveCamera&&(L={camera:ft,fov:ft.fov,zoom:ft.zoom}),Xt(ft,nt,Qt)};function Xt(ft,gt,At){At===null?ft.matrix.copy(gt.matrixWorld):(ft.matrix.copy(At.matrixWorld),ft.matrix.invert(),ft.matrix.multiply(gt.matrixWorld)),ft.matrix.decompose(ft.position,ft.quaternion,ft.scale),ft.updateMatrixWorld(!0),ft.projectionMatrix.copy(gt.projectionMatrix),ft.projectionMatrixInverse.copy(gt.projectionMatrixInverse),ft.isPerspectiveCamera&&(ft.fov=Nr*2*Math.atan(1/ft.projectionMatrix.elements[5]),ft.zoom=1)}this.getCamera=function(){return nt},this.getFoveation=function(){if(!(d===null&&g===null))return l},this.setFoveation=function(ft){l=ft,d!==null&&(d.fixedFoveation=ft),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=ft)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(nt)},this.getCameraTexture=function(ft){return f[ft]};let ke=null;function Me(ft,gt){if(u=gt.getViewerPose(c||a),x=gt,u!==null){let At=u.views;g!==null&&(t.setRenderTargetFramebuffer(T,g.framebuffer),t.setRenderTarget(T));let Qt=!1;At.length!==nt.cameras.length&&(nt.cameras.length=0,Qt=!0);for(let at=0;at<At.length;at++){let Mt=At[at],G=null;if(g!==null)G=g.getViewport(Mt);else{let Nt=m.getViewSubImage(d,Mt);G=Nt.viewport,at===0&&(t.setRenderTargetTextures(T,Nt.colorTexture,Nt.depthStencilTexture),t.setRenderTarget(T))}let wt=Q[at];wt===void 0&&(wt=new Fn,wt.layers.enable(at),wt.viewport=new $e,Q[at]=wt),wt.matrix.fromArray(Mt.transform.matrix),wt.matrix.decompose(wt.position,wt.quaternion,wt.scale),wt.projectionMatrix.fromArray(Mt.projectionMatrix),wt.projectionMatrixInverse.copy(wt.projectionMatrix).invert(),wt.viewport.set(G.x,G.y,G.width,G.height),at===0&&(nt.matrix.copy(wt.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale)),Qt===!0&&nt.cameras.push(wt)}let Gt=s.enabledFeatures;if(Gt&&Gt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&A){m=n.getBinding();let at=m.getDepthInformation(At[0]);at&&at.isValid&&at.texture&&p.init(at,s.renderState)}if(Gt&&Gt.includes("camera-access")&&A){t.state.unbindTexture(),m=n.getBinding();for(let at=0;at<At.length;at++){let Mt=At[at].camera;if(Mt){let G=f[Mt];G||(G=new $a,f[Mt]=G);let wt=m.getCameraImage(Mt);G.sourceTexture=wt}}}}for(let At=0;At<M.length;At++){let Qt=D[At],Gt=M[At];Qt!==null&&Gt!==void 0&&Gt.update(Qt,gt,c||a)}ke&&ke(ft,gt),gt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:gt}),x=null}let Le=new lm;Le.setAnimationLoop(Me),this.setAnimationLoop=function(ft){ke=ft},this.dispose=function(){}}},FS=new ze,pm=new ye;pm.set(-1,0,0,0,1,0,0,0,1);function OS(i,t){function e(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,ju(i)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function s(p,f,N,F,T){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(p,f):f.isMeshLambertMaterial?(r(p,f),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(p,f),m(p,f)):f.isMeshPhongMaterial?(r(p,f),u(p,f),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(p,f),d(p,f),f.isMeshPhysicalMaterial&&g(p,f,T)):f.isMeshMatcapMaterial?(r(p,f),x(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),A(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?l(p,f,N,F):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,e(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Wn&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,e(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Wn&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,e(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,e(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let N=t.get(f),F=N.envMap,T=N.envMapRotation;F&&(p.envMap.value=F,p.envMapRotation.value.setFromMatrix4(FS.makeRotationFromEuler(T)).transpose(),F.isCubeTexture&&F.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(pm),p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,N,F){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*N,p.scale.value=F*.5,f.map&&(p.map.value=f.map,e(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function u(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function m(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function g(p,f,N){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Wn&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.retroreflectivity>0&&(p.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=N.texture,p.transmissionSamplerSize.value.set(N.width,N.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,f){f.matcap&&(p.matcap.value=f.matcap)}function A(p,f){let N=t.get(f).light;p.referencePosition.value.setFromMatrixPosition(N.matrixWorld),p.nearDistance.value=N.shadow.camera.near,p.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function BS(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,M){let D=M.program;n.uniformBlockBinding(T,D)}function c(T,M){let D=s[T.id];D===void 0&&(p(T),D=u(T),s[T.id]=D,T.addEventListener("dispose",N));let H=M.program;n.updateUBOMapping(T,H);let w=t.render.frame;r[T.id]!==w&&(d(T),r[T.id]=w)}function u(T){let M=m();T.__bindingPointIndex=M;let D=i.createBuffer(),H=T.__size,w=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,D),i.bufferData(i.UNIFORM_BUFFER,H,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,D),D}function m(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return me("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){let M=s[T.id],D=T.uniforms,H=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let w=0,L=D.length;w<L;w++){let V=D[w];if(Array.isArray(V))for(let $=0,Q=V.length;$<Q;$++)g(V[$],w,$,H);else g(V,w,0,H)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(T,M,D,H){if(A(T,M,D,H)===!0){let w=T.__offset,L=T.value;if(Array.isArray(L)){let V=0;for(let $=0;$<L.length;$++){let Q=L[$],nt=f(Q);x(Q,T.__data,V),typeof Q!="number"&&typeof Q!="boolean"&&!Q.isMatrix3&&!ArrayBuffer.isView(Q)&&(V+=nt.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(L,T.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,w,T.__data)}}function x(T,M,D){typeof T=="number"||typeof T=="boolean"?M[0]=T:T.isMatrix3?(M[0]=T.elements[0],M[1]=T.elements[1],M[2]=T.elements[2],M[3]=0,M[4]=T.elements[3],M[5]=T.elements[4],M[6]=T.elements[5],M[7]=0,M[8]=T.elements[6],M[9]=T.elements[7],M[10]=T.elements[8],M[11]=0):ArrayBuffer.isView(T)?M.set(new T.constructor(T.buffer,T.byteOffset,M.length)):T.toArray(M,D)}function A(T,M,D,H){let w=T.value,L=M+"_"+D;if(H[L]===void 0)return typeof w=="number"||typeof w=="boolean"?H[L]=w:ArrayBuffer.isView(w)?H[L]=w.slice():H[L]=w.clone(),!0;{let V=H[L];if(typeof w=="number"||typeof w=="boolean"){if(V!==w)return H[L]=w,!0}else{if(ArrayBuffer.isView(w))return!0;if(V.equals(w)===!1)return V.copy(w),!0}}return!1}function p(T){let M=T.uniforms,D=0,H=16;for(let L=0,V=M.length;L<V;L++){let $=Array.isArray(M[L])?M[L]:[M[L]];for(let Q=0,nt=$.length;Q<nt;Q++){let Y=$[Q],K=Array.isArray(Y.value)?Y.value:[Y.value];for(let ot=0,lt=K.length;ot<lt;ot++){let bt=K[ot],ct=f(bt),yt=D%H,vt=yt%ct.boundary,Ht=yt+vt;D+=vt,Ht!==0&&H-Ht<ct.storage&&(D+=H-Ht),Y.__data=new Float32Array(ct.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=D,D+=ct.storage}}}let w=D%H;return w>0&&(D+=H-w),T.__size=D,T.__cache={},this}function f(T){let M={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(M.boundary=4,M.storage=4):T.isVector2?(M.boundary=8,M.storage=8):T.isVector3||T.isColor?(M.boundary=16,M.storage=12):T.isVector4?(M.boundary=16,M.storage=16):T.isMatrix3?(M.boundary=48,M.storage=48):T.isMatrix4?(M.boundary=64,M.storage=64):T.isTexture?de("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(T)?(M.boundary=16,M.storage=T.byteLength):de("WebGLRenderer: Unsupported uniform value type.",T),M}function N(T){let M=T.target;M.removeEventListener("dispose",N);let D=a.indexOf(M.__bindingPointIndex);a.splice(D,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function F(){for(let T in s)i.deleteBuffer(s[T]);a=[],s={},r={}}return{bind:l,update:c,dispose:F}}var kS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Gi=null;function zS(){return Gi===null&&(Gi=new za(kS,16,16,Is,Ii),Gi.name="DFG_LUT",Gi.minFilter=Rn,Gi.magFilter=Rn,Gi.wrapS=Ui,Gi.wrapT=Ui,Gi.generateMipmaps=!1,Gi.needsUpdate=!0),Gi}var eh=class{constructor(t={}){let{canvas:e=Ip(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:d=!1,outputBufferType:g=Qn}=t;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=a;let A=g,p=new Set([_c,gc,mc]),f=new Set([Qn,Ri,Xr,qr,dc,fc]),N=new Uint32Array(4),F=new Int32Array(4),T=new W,M=null,D=null,H=[],w=[],L=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ci,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let V=this,$=!1,Q=null,nt=null,Y=null,K=null;this._outputColorSpace=ai;let ot=0,lt=0,bt=null,ct=-1,yt=null,vt=new $e,Ht=new $e,Xt=null,ke=new ue(0),Me=0,Le=e.width,ft=e.height,gt=1,At=null,Qt=null,Gt=new $e(0,0,Le,ft),le=new $e(0,0,Le,ft),ae=!1,at=new Br,Mt=!1,G=!1,wt=new ze,Nt=new W,oe=new $e,se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},he=!1;function fe(){return bt===null?gt:1}let k=n;function Re(b,z){return e.getContext(b,z)}let pe,P,y,X,it,ht,Rt,Lt,ut,_t,Ut,te,zt,Ot,ee,ce,_e,q,Pt,mt,Bt,Vt,St;try{let b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:m};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Te,!1),e.addEventListener("webglcontextrestored",we,!1),e.addEventListener("webglcontextcreationerror",cn,!1),k===null){let z="webgl2";if(k=Re(z,b),k===null)throw Re(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ie()}catch(b){throw e.removeEventListener("webglcontextlost",Te,!1),e.removeEventListener("webglcontextrestored",we,!1),e.removeEventListener("webglcontextcreationerror",cn,!1),me("WebGLRenderer: "+b.message),b}function ie(){pe=new qv(k),pe.init(),Bt=new DS(k,pe),P=new Ov(k,pe,t,Bt),y=new PS(k,pe),P.reversedDepthBuffer&&d&&y.buffers.depth.setReversed(!0),nt=k.createFramebuffer(),Y=k.createFramebuffer(),K=k.createFramebuffer(),X=new Jv(k),it=new _S,ht=new LS(k,pe,y,it,P,Bt,X),Rt=new Xv(V),Lt=new j0(k),Vt=new Uv(k,Lt),ut=new Yv(k,Lt,X,Vt),_t=new jv(k,ut,Lt,Vt,X),q=new Kv(k,P,ht),ee=new Bv(it),Ut=new gS(V,Rt,pe,P,Vt,ee),te=new OS(V,it),zt=new vS,Ot=new ES(pe),_e=new Nv(V,Rt,y,_t,x,l),ce=new IS(V,_t,P),St=new BS(k,X,P,y),Pt=new Fv(k,pe,X),mt=new Zv(k,pe,X),X.programs=Ut.programs,V.capabilities=P,V.extensions=pe,V.properties=it,V.renderLists=zt,V.shadowMap=ce,V.state=y,V.info=X}A!==Qn&&(L=new ty(A,e.width,e.height,o,s,r));let Kt=new gd(V,k);this.xr=Kt,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let b=pe.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=pe.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return gt},this.setPixelRatio=function(b){b!==void 0&&(gt=b,this.setSize(Le,ft,!1))},this.getSize=function(b){return b.set(Le,ft)},this.setSize=function(b,z,st=!0){if(Kt.isPresenting){de("WebGLRenderer: Can't change size while VR device is presenting.");return}Le=b,ft=z,e.width=Math.floor(b*gt),e.height=Math.floor(z*gt),st===!0&&(e.style.width=b+"px",e.style.height=z+"px"),L!==null&&L.setSize(e.width,e.height),this.setViewport(0,0,b,z)},this.getDrawingBufferSize=function(b){return b.set(Le*gt,ft*gt).floor()},this.setDrawingBufferSize=function(b,z,st){Le=b,ft=z,gt=st,e.width=Math.floor(b*st),e.height=Math.floor(z*st),this.setViewport(0,0,b,z)},this.setEffects=function(b){if(A===Qn){me("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let z=0;z<b.length;z++)if(b[z].isOutputPass===!0){de("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(vt)},this.getViewport=function(b){return b.copy(Gt)},this.setViewport=function(b,z,st,j){b.isVector4?Gt.set(b.x,b.y,b.z,b.w):Gt.set(b,z,st,j),y.viewport(vt.copy(Gt).multiplyScalar(gt).round())},this.getScissor=function(b){return b.copy(le)},this.setScissor=function(b,z,st,j){b.isVector4?le.set(b.x,b.y,b.z,b.w):le.set(b,z,st,j),y.scissor(Ht.copy(le).multiplyScalar(gt).round())},this.getScissorTest=function(){return ae},this.setScissorTest=function(b){y.setScissorTest(ae=b)},this.setOpaqueSort=function(b){At=b},this.setTransparentSort=function(b){Qt=b},this.getClearColor=function(b){return b.copy(_e.getClearColor())},this.setClearColor=function(){_e.setClearColor(...arguments)},this.getClearAlpha=function(){return _e.getClearAlpha()},this.setClearAlpha=function(){_e.setClearAlpha(...arguments)},this.clear=function(b=!0,z=!0,st=!0){let j=0;if(b){let tt=!1;if(bt!==null){let Ct=bt.texture.format;tt=p.has(Ct)}if(tt){let Ct=bt.texture.type,xt=f.has(Ct),Tt=_e.getClearColor(),Dt=_e.getClearAlpha(),jt=Tt.r,be=Tt.g,Ee=Tt.b;xt?(N[0]=jt,N[1]=be,N[2]=Ee,N[3]=Dt,k.clearBufferuiv(k.COLOR,0,N)):(F[0]=jt,F[1]=be,F[2]=Ee,F[3]=Dt,k.clearBufferiv(k.COLOR,0,F))}else j|=k.COLOR_BUFFER_BIT}z&&(j|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),st&&(j|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j!==0&&k.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),Q=b},this.dispose=function(){e.removeEventListener("webglcontextlost",Te,!1),e.removeEventListener("webglcontextrestored",we,!1),e.removeEventListener("webglcontextcreationerror",cn,!1),_e.dispose(),zt.dispose(),Ot.dispose(),it.dispose(),Rt.dispose(),_t.dispose(),Vt.dispose(),St.dispose(),Ut.dispose(),Kt.dispose(),Kt.removeEventListener("sessionstart",hr),Kt.removeEventListener("sessionend",Pi),hi.stop()};function Te(b){b.preventDefault(),Ua("WebGLRenderer: Context Lost."),$=!0}function we(){Ua("WebGLRenderer: Context Restored."),$=!1;let b=X.autoReset,z=ce.enabled,st=ce.autoUpdate,j=ce.needsUpdate,tt=ce.type;ie(),X.autoReset=b,ce.enabled=z,ce.autoUpdate=st,ce.needsUpdate=j,ce.type=tt}function cn(b){me("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function kn(b){let z=b.target;z.removeEventListener("dispose",kn),cr(z)}function cr(b){na(b),it.remove(b)}function na(b){let z=it.get(b).programs;z!==void 0&&(z.forEach(function(st){Ut.releaseProgram(st)}),b.isShaderMaterial&&Ut.releaseShaderCache(b))}this.renderBufferDirect=function(b,z,st,j,tt,Ct){z===null&&(z=se);let xt=tt.isMesh&&tt.matrixWorld.determinantAffine()<0,Tt=wh(b,z,st,j,tt);y.setMaterial(j,xt);let Dt=st.index,jt=1;if(j.wireframe===!0){if(Dt=ut.getWireframeAttribute(st),Dt===void 0)return;jt=2}let be=st.drawRange,Ee=st.attributes.position,Jt=be.start*jt,Ie=(be.start+be.count)*jt;Ct!==null&&(Jt=Math.max(Jt,Ct.start*jt),Ie=Math.min(Ie,(Ct.start+Ct.count)*jt)),Dt!==null?(Jt=Math.max(Jt,0),Ie=Math.min(Ie,Dt.count)):Ee!=null&&(Jt=Math.max(Jt,0),Ie=Math.min(Ie,Ee.count));let Ke=Ie-Jt;if(Ke<0||Ke===1/0)return;Vt.setup(tt,j,Tt,st,Dt);let Ue,Xe=Pt;if(Dt!==null&&(Ue=Lt.get(Dt),Xe=mt,Xe.setIndex(Ue)),tt.isMesh)j.wireframe===!0?(y.setLineWidth(j.wireframeLinewidth*fe()),Xe.setMode(k.LINES)):Xe.setMode(k.TRIANGLES);else if(tt.isLine){let _n=j.linewidth;_n===void 0&&(_n=1),y.setLineWidth(_n*fe()),tt.isLineSegments?Xe.setMode(k.LINES):tt.isLineLoop?Xe.setMode(k.LINE_LOOP):Xe.setMode(k.LINE_STRIP)}else tt.isPoints?Xe.setMode(k.POINTS):tt.isSprite&&Xe.setMode(k.TRIANGLES);if(tt.isBatchedMesh)if(pe.get("WEBGL_multi_draw"))Xe.renderMultiDraw(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount);else{let _n=tt._multiDrawStarts,qt=tt._multiDrawCounts,En=tt._multiDrawCount,Fe=Dt?Lt.get(Dt).bytesPerElement:1,Yn=it.get(j).currentProgram.getUniforms();for(let ei=0;ei<En;ei++)Yn.setValue(k,"_gl_DrawID",ei),Xe.render(_n[ei]/Fe,qt[ei])}else if(tt.isInstancedMesh)Xe.renderInstances(Jt,Ke,tt.count);else if(st.isInstancedBufferGeometry){let _n=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,qt=Math.min(st.instanceCount,_n);Xe.renderInstances(Jt,Ke,qt)}else Xe.render(Jt,Ke)};function ia(b,z,st,j){Q!==null&&b.isNodeMaterial&&Q.setObject(j,b),Mt===!0&&ee.setState(b,st,!1),b.transparent===!0&&b.side===Vi&&b.forceSinglePass===!1?(b.side=Wn,b.needsUpdate=!0,Ds(b,z,j),b.side=Ts,b.needsUpdate=!0,Ds(b,z,j),b.side=Vi):Ds(b,z,j)}this.compile=function(b,z,st=null){st===null&&(st=b),Q!==null&&Q.renderStart(b,z,st),D=Ot.get(st),D.init(z),w.push(D),st.traverseVisible(function(tt){tt.isLight&&tt.layers.test(z.layers)&&(D.pushLight(tt),tt.castShadow&&D.pushShadow(tt))}),b!==st&&b.traverseVisible(function(tt){tt.isLight&&tt.layers.test(z.layers)&&(D.pushLight(tt),tt.castShadow&&D.pushShadow(tt))}),D.setupLights(),Q!==null&&Q.updateLights(D.state.lightsArray),G=this.localClippingEnabled,Mt=ee.init(this.clippingPlanes,G),Mt===!0&&ee.setGlobalState(this.clippingPlanes,z),Q!==null&&ce.render(D.state.shadowsArray,st,z);let j=new Set;return b.traverse(function(tt){if(!(tt.isMesh||tt.isPoints||tt.isLine||tt.isSprite))return;let Ct=tt.material;if(Ct)if(Array.isArray(Ct))for(let xt=0;xt<Ct.length;xt++){let Tt=Ct[xt];ia(Tt,st,z,tt),j.add(Tt)}else ia(Ct,st,z,tt),j.add(Ct)}),D=w.pop(),Q!==null&&Q.renderEnd(),j},this.compileAsync=function(b,z,st=null){let j=this.compile(b,z,st);return new Promise(tt=>{function Ct(){if(j.forEach(function(xt){let Dt=it.get(xt).currentProgram;(Dt===void 0||Dt.isReady())&&j.delete(xt)}),j.size===0){tt(b);return}setTimeout(Ct,10)}pe.get("KHR_parallel_shader_compile")!==null?Ct():setTimeout(Ct,10)})};let Ki=null;function bh(b){Ki&&Ki(b)}function hr(){hi.stop()}function Pi(){hi.start()}let hi=new lm;hi.setAnimationLoop(bh),typeof self<"u"&&hi.setContext(self),this.setAnimationLoop=function(b){Ki=b,Kt.setAnimationLoop(b),b===null?hi.stop():hi.start()},Kt.addEventListener("sessionstart",hr),Kt.addEventListener("sessionend",Pi),this.render=function(b,z){if(z!==void 0&&z.isCamera!==!0){me("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if($===!0)return;Q!==null&&Q.renderStart(b,z);let st=Kt.enabled===!0&&Kt.isPresenting===!0,j=L!==null&&(bt===null||st)&&L.begin(V,bt);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Kt.enabled===!0&&Kt.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(Kt.cameraAutoUpdate===!0&&Kt.updateCamera(z),z=Kt.getCamera()),b.isScene===!0&&b.onBeforeRender(V,b,z,bt),D=Ot.get(b,w.length),D.init(z),D.state.textureUnits=ht.getTextureUnits(),w.push(D),wt.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),at.setFromProjectionMatrix(wt,Ei,z.reversedDepth),G=this.localClippingEnabled,Mt=ee.init(this.clippingPlanes,G),M=zt.get(b,H.length),M.init(),H.push(M),Kt.enabled===!0&&Kt.isPresenting===!0){let xt=V.xr.getDepthSensingMesh();xt!==null&&ur(xt,z,-1/0,V.sortObjects)}ur(b,z,0,V.sortObjects),M.finish(),Q!==null&&Q.updateLights(D.state.lightsArray),V.sortObjects===!0&&M.sort(At,Qt),he=Kt.enabled===!1||Kt.isPresenting===!1||Kt.hasDepthSensing()===!1,he&&_e.addToRenderList(M,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Mt===!0&&ee.beginShadows();let tt=D.state.shadowsArray;if(ce.render(tt,b,z),Mt===!0&&ee.endShadows(),(j&&L.hasRenderPass())===!1){let xt=M.opaque,Tt=M.transmissive;if(D.setupLights(),z.isArrayCamera){let Dt=z.cameras;if(Tt.length>0)for(let jt=0,be=Dt.length;jt<be;jt++){let Ee=Dt[jt];ra(xt,Tt,b,Ee)}he&&_e.render(b);for(let jt=0,be=Dt.length;jt<be;jt++){let Ee=Dt[jt];sa(M,b,Ee,Ee.viewport)}}else Tt.length>0&&ra(xt,Tt,b,z),he&&_e.render(b),sa(M,b,z)}bt!==null&&lt===0&&(ht.updateMultisampleRenderTarget(bt),ht.updateRenderTargetMipmap(bt)),j&&L.end(V),b.isScene===!0&&b.onAfterRender(V,b,z),Vt.resetDefaultState(),ct=-1,yt=null,w.pop(),w.length>0?(D=w[w.length-1],ht.setTextureUnits(D.state.textureUnits),Mt===!0&&ee.setGlobalState(V.clippingPlanes,D.state.camera)):D=null,H.pop(),H.length>0?M=H[H.length-1]:M=null,Q!==null&&Q.renderEnd()};function ur(b,z,st,j){if(b.visible===!1)return;if(b.layers.test(z.layers)){if(b.isGroup)st=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(z);else if(b.isLightProbeGrid)D.pushLightProbeGrid(b);else if(b.isLight)D.pushLight(b),b.castShadow&&D.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(at)){j&&oe.setFromMatrixPosition(b.matrixWorld).applyMatrix4(wt);let xt=_t.update(b),Tt=b.material;Tt.visible&&M.push(b,xt,Tt,st,oe.z,null,z)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(at))){let xt=_t.update(b),Tt=b.material;if(j&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),oe.copy(b.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),oe.copy(xt.boundingSphere.center)),oe.applyMatrix4(b.matrixWorld).applyMatrix4(wt)),Array.isArray(Tt)){let Dt=xt.groups;for(let jt=0,be=Dt.length;jt<be;jt++){let Ee=Dt[jt],Jt=Tt[Ee.materialIndex];Jt&&Jt.visible&&M.push(b,xt,Jt,st,oe.z,Ee,z)}}else Tt.visible&&M.push(b,xt,Tt,st,oe.z,null,z)}}let Ct=b.children;for(let xt=0,Tt=Ct.length;xt<Tt;xt++)ur(Ct[xt],z,st,j)}function sa(b,z,st,j){let{opaque:tt,transmissive:Ct,transparent:xt}=b;D.setupLightsView(st),Mt===!0&&ee.setGlobalState(V.clippingPlanes,st),j&&y.viewport(vt.copy(j)),tt.length>0&&fs(tt,z,st),Ct.length>0&&fs(Ct,z,st),xt.length>0&&fs(xt,z,st),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function ra(b,z,st,j){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[j.id]===void 0){let Jt=pe.has("EXT_color_buffer_half_float")||pe.has("EXT_color_buffer_float");D.state.transmissionRenderTarget[j.id]=new Kn(1,1,{generateMipmaps:!0,type:Jt?Ii:Qn,minFilter:Cs,samples:Math.max(4,P.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ne.workingColorSpace})}let Ct=D.state.transmissionRenderTarget[j.id],xt=j.viewport||vt;Ct.setSize(xt.z*V.transmissionResolutionScale,xt.w*V.transmissionResolutionScale);let Tt=V.getRenderTarget(),Dt=V.getActiveCubeFace(),jt=V.getActiveMipmapLevel();V.setRenderTarget(Ct),V.getClearColor(ke),Me=V.getClearAlpha(),Me<1&&V.setClearColor(16777215,.5),V.clear(),he&&_e.render(st);let be=V.toneMapping;V.toneMapping=Ci;let Ee=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),D.setupLightsView(j),Mt===!0&&ee.setGlobalState(V.clippingPlanes,j),fs(b,st,j),ht.updateMultisampleRenderTarget(Ct),ht.updateRenderTargetMipmap(Ct),pe.has("WEBGL_multisampled_render_to_texture")===!1){let Jt=!1;for(let Ie=0,Ke=z.length;Ie<Ke;Ie++){let Ue=z[Ie],{object:Xe,geometry:_n,material:qt,group:En}=Ue;if(qt.side===Vi&&Xe.layers.test(j.layers)){let Fe=qt.side;qt.side=Wn,qt.needsUpdate=!0,aa(Xe,st,j,_n,qt,En),qt.side=Fe,qt.needsUpdate=!0,Jt=!0}}Jt===!0&&(ht.updateMultisampleRenderTarget(Ct),ht.updateRenderTargetMipmap(Ct))}V.setRenderTarget(Tt,Dt,jt),V.setClearColor(ke,Me),Ee!==void 0&&(j.viewport=Ee),V.toneMapping=be}function fs(b,z,st){let j=z.isScene===!0?z.overrideMaterial:null;for(let tt=0,Ct=b.length;tt<Ct;tt++){let xt=b[tt],{object:Tt,geometry:Dt,group:jt}=xt,be=xt.material;be.allowOverride===!0&&j!==null&&(be=j),Tt.layers.test(st.layers)&&aa(Tt,z,st,Dt,be,jt)}}function aa(b,z,st,j,tt,Ct){Q!==null&&tt.isNodeMaterial&&Q.setObject(b,tt),b.onBeforeRender(V,z,st,j,tt,Ct),b.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),tt.onBeforeRender(V,z,st,j,b,Ct),tt.transparent===!0&&tt.side===Vi&&tt.forceSinglePass===!1?(tt.side=Wn,tt.needsUpdate=!0,V.renderBufferDirect(st,z,j,tt,b,Ct),tt.side=Ts,tt.needsUpdate=!0,V.renderBufferDirect(st,z,j,tt,b,Ct),tt.side=Vi):V.renderBufferDirect(st,z,j,tt,b,Ct),b.onAfterRender(V,z,st,j,tt,Ct)}function Ds(b,z,st){z.isScene!==!0&&(z=se);let j=it.get(b),tt=D.state.lights,Ct=D.state.shadowsArray,xt=tt.state.version,Tt=Ut.getParameters(b,tt.state,Ct,z,st,D.state.lightProbeGridArray),Dt=Ut.getProgramCacheKey(Tt),jt=j.programs;j.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?z.environment:null,j.fog=z.fog;let be=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;j.envMap=Rt.get(b.envMap||j.environment,be),j.envMapRotation=j.environment!==null&&b.envMap===null?z.environmentRotation:b.envMapRotation,jt===void 0&&(b.addEventListener("dispose",kn),jt=new Map,j.programs=jt);let Ee=jt.get(Dt);if(Ee!==void 0){if(j.currentProgram===Ee&&j.lightsStateVersion===xt)return Us(b,Tt),Ee}else Tt.uniforms=Ut.getUniforms(b),Q!==null&&b.isNodeMaterial&&Q.build(b,st,Tt),b.onBeforeCompile(Tt,V),Ee=Ut.acquireProgram(Tt,Dt),jt.set(Dt,Ee),j.uniforms=Tt.uniforms;let Jt=j.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Jt.clippingPlanes=ee.uniform),Us(b,Tt),j.needsLights=Eh(b),j.lightsStateVersion=xt,j.needsLights&&(Jt.ambientLightColor.value=tt.state.ambient,Jt.lightProbe.value=tt.state.probe,Jt.sunLights.value=tt.state.sun,Jt.sunLightShadows.value=tt.state.sunShadow,Jt.directionalLights.value=tt.state.directional,Jt.directionalLightShadows.value=tt.state.directionalShadow,Jt.spotLights.value=tt.state.spot,Jt.spotLightShadows.value=tt.state.spotShadow,Jt.rectAreaLights.value=tt.state.rectArea,Jt.ltc_1.value=tt.state.rectAreaLTC1,Jt.ltc_2.value=tt.state.rectAreaLTC2,Jt.pointLights.value=tt.state.point,Jt.pointLightShadows.value=tt.state.pointShadow,Jt.hemisphereLights.value=tt.state.hemi,Jt.sunShadowMatrix.value=tt.state.sunShadowMatrix,Jt.sunShadowCascade.value=tt.state.sunShadowCascade,Jt.directionalShadowMatrix.value=tt.state.directionalShadowMatrix,Jt.spotLightMatrix.value=tt.state.spotLightMatrix,Jt.spotLightMap.value=tt.state.spotLightMap,Jt.pointShadowMatrix.value=tt.state.pointShadowMatrix),j.lightProbeGrid=D.state.lightProbeGridArray.length>0,j.currentProgram=Ee,j.uniformsList=null,Ee}function Ns(b){if(b.uniformsList===null){let z=b.currentProgram.getUniforms();b.uniformsList=Jr.seqWithValue(z.seq,b.uniforms)}return b.uniformsList}function Us(b,z){let st=it.get(b);st.outputColorSpace=z.outputColorSpace,st.batching=z.batching,st.batchingColor=z.batchingColor,st.instancing=z.instancing,st.instancingColor=z.instancingColor,st.instancingMorph=z.instancingMorph,st.skinning=z.skinning,st.morphTargets=z.morphTargets,st.morphNormals=z.morphNormals,st.morphColors=z.morphColors,st.morphTargetsCount=z.morphTargetsCount,st.numClippingPlanes=z.numClippingPlanes,st.numIntersection=z.numClipIntersection,st.vertexAlphas=z.vertexAlphas,st.vertexTangents=z.vertexTangents,st.toneMapping=z.toneMapping}function Mh(b,z){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;T.setFromMatrixPosition(z.matrixWorld);for(let st=0,j=b.length;st<j;st++){let tt=b[st];if(tt.texture!==null&&tt.boundingBox.containsPoint(T))return tt}return null}function wh(b,z,st,j,tt){z.isScene!==!0&&(z=se),ht.resetTextureUnits();let Ct=z.fog,xt=j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial?z.environment:null,Tt=bt===null?V.outputColorSpace:bt.isXRRenderTarget===!0?bt.texture.colorSpace:Ne.workingColorSpace,Dt=j.isMeshStandardMaterial||j.isMeshLambertMaterial&&!j.envMap||j.isMeshPhongMaterial&&!j.envMap,jt=Rt.get(j.envMap||xt,Dt),be=j.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,Ee=!!st.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Jt=!!st.morphAttributes.position,Ie=!!st.morphAttributes.normal,Ke=!!st.morphAttributes.color,Ue=Ci;j.toneMapped&&(bt===null||bt.isXRRenderTarget===!0)&&(Ue=V.toneMapping);let Xe=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,_n=Xe!==void 0?Xe.length:0,qt=it.get(j),En=D.state.lights;if(Mt===!0&&(G===!0||b!==yt)){let Oe=b===yt&&j.id===ct;ee.setState(j,b,Oe)}let Fe=!1;j.version===qt.__version?(qt.needsLights&&qt.lightsStateVersion!==En.state.version||qt.outputColorSpace!==Tt||tt.isBatchedMesh&&qt.batching===!1||!tt.isBatchedMesh&&qt.batching===!0||tt.isBatchedMesh&&qt.batchingColor===!0&&tt._colorsTexture===null||tt.isBatchedMesh&&qt.batchingColor===!1&&tt._colorsTexture!==null||tt.isInstancedMesh&&qt.instancing===!1||!tt.isInstancedMesh&&qt.instancing===!0||tt.isSkinnedMesh&&qt.skinning===!1||!tt.isSkinnedMesh&&qt.skinning===!0||tt.isInstancedMesh&&qt.instancingColor===!0&&tt.instanceColor===null||tt.isInstancedMesh&&qt.instancingColor===!1&&tt.instanceColor!==null||tt.isInstancedMesh&&qt.instancingMorph===!0&&tt.morphTexture===null||tt.isInstancedMesh&&qt.instancingMorph===!1&&tt.morphTexture!==null||qt.envMap!==jt||j.fog===!0&&qt.fog!==Ct||qt.numClippingPlanes!==void 0&&(qt.numClippingPlanes!==ee.numPlanes||qt.numIntersection!==ee.numIntersection)||qt.vertexAlphas!==be||qt.vertexTangents!==Ee||qt.morphTargets!==Jt||qt.morphNormals!==Ie||qt.morphColors!==Ke||qt.toneMapping!==Ue||qt.morphTargetsCount!==_n||!!qt.lightProbeGrid!=D.state.lightProbeGridArray.length>0)&&(Fe=!0):(Fe=!0,qt.__version=j.version);let Yn=qt.currentProgram;Fe===!0&&(Yn=Ds(j,z,tt),Q&&j.isNodeMaterial&&Q.onUpdateProgram(j,Yn,qt));let ei=!1,Ce=!1,ps=!1,Ve=Yn.getUniforms(),tn=qt.uniforms;if(y.useProgram(Yn.program)&&(ei=!0,Ce=!0,ps=!0),j.id!==ct&&(ct=j.id,Ce=!0),qt.needsLights){let Oe=Mh(D.state.lightProbeGridArray,tt);qt.lightProbeGrid!==Oe&&(qt.lightProbeGrid=Oe,Ce=!0)}if(ei||yt!==b){y.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Ve.setValue(k,"projectionMatrix",b.projectionMatrix),Ve.setValue(k,"viewMatrix",b.matrixWorldInverse);let Tn=Ve.map.cameraPosition;Tn!==void 0&&Tn.setValue(k,Nt.setFromMatrixPosition(b.matrixWorld)),P.logarithmicDepthBuffer&&Ve.setValue(k,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Ve.setValue(k,"isOrthographic",b.isOrthographicCamera===!0),yt!==b&&(yt=b,Ce=!0,ps=!0)}if(qt.needsLights&&(En.state.sunShadowMap.length>0&&Ve.setValue(k,"sunShadowMap",En.state.sunShadowMap,ht),En.state.directionalShadowMap.length>0&&Ve.setValue(k,"directionalShadowMap",En.state.directionalShadowMap,ht),En.state.spotShadowMap.length>0&&Ve.setValue(k,"spotShadowMap",En.state.spotShadowMap,ht),En.state.pointShadowMap.length>0&&Ve.setValue(k,"pointShadowMap",En.state.pointShadowMap,ht)),tt.isSkinnedMesh){Ve.setOptional(k,tt,"bindMatrix"),Ve.setOptional(k,tt,"bindMatrixInverse");let Oe=tt.skeleton;Oe&&(Oe.boneTexture===null&&Oe.computeBoneTexture(),Ve.setValue(k,"boneTexture",Oe.boneTexture,ht))}tt.isBatchedMesh&&(Ve.setOptional(k,tt,"batchingTexture"),Ve.setValue(k,"batchingTexture",tt._matricesTexture,ht),Ve.setOptional(k,tt,"batchingIdTexture"),Ve.setValue(k,"batchingIdTexture",tt._indirectTexture,ht),Ve.setOptional(k,tt,"batchingColorTexture"),tt._colorsTexture!==null&&Ve.setValue(k,"batchingColorTexture",tt._colorsTexture,ht));let ui=st.morphAttributes;if((ui.position!==void 0||ui.normal!==void 0||ui.color!==void 0)&&q.update(tt,st,Yn),(Ce||qt.receiveShadow!==tt.receiveShadow)&&(qt.receiveShadow=tt.receiveShadow,Ve.setValue(k,"receiveShadow",tt.receiveShadow)),(j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial)&&j.envMap===null&&z.environment!==null&&(tn.envMapIntensity.value=z.environmentIntensity),tn.dfgLUT!==void 0&&(tn.dfgLUT.value=zS()),Ce){if(Ve.setValue(k,"toneMappingExposure",V.toneMappingExposure),qt.needsLights&&Lo(tn,ps),Ct&&j.fog===!0&&te.refreshFogUniforms(tn,Ct),te.refreshMaterialUniforms(tn,j,gt,ft,D.state.transmissionRenderTarget[b.id]),qt.needsLights&&qt.lightProbeGrid){let Oe=qt.lightProbeGrid;tn.probesSH.value=Oe.texture,tn.probesMin.value.copy(Oe.boundingBox.min),tn.probesMax.value.copy(Oe.boundingBox.max),tn.probesResolution.value.copy(Oe.resolution)}Jr.upload(k,Ns(qt),tn,ht)}if(j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Jr.upload(k,Ns(qt),tn,ht),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Ve.setValue(k,"center",tt.center),Ve.setValue(k,"modelViewMatrix",tt.modelViewMatrix),Ve.setValue(k,"normalMatrix",tt.normalMatrix),Ve.setValue(k,"modelMatrix",tt.matrixWorld),j.uniformsGroups!==void 0){let Oe=j.uniformsGroups;for(let Tn=0,ji=Oe.length;Tn<ji;Tn++){let Li=Oe[Tn];St.update(Li,Yn),St.bind(Li,Yn)}}return Yn}function Lo(b,z){b.ambientLightColor.needsUpdate=z,b.lightProbe.needsUpdate=z,b.sunLights.needsUpdate=z,b.sunLightShadows.needsUpdate=z,b.directionalLights.needsUpdate=z,b.directionalLightShadows.needsUpdate=z,b.pointLights.needsUpdate=z,b.pointLightShadows.needsUpdate=z,b.spotLights.needsUpdate=z,b.spotLightShadows.needsUpdate=z,b.rectAreaLights.needsUpdate=z,b.hemisphereLights.needsUpdate=z}function Eh(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return ot},this.getActiveMipmapLevel=function(){return lt},this.getRenderTarget=function(){return bt},this.setRenderTargetTextures=function(b,z,st){let j=it.get(b);j.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),it.get(b.texture).__webglTexture=z,it.get(b.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:st,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,z){let st=it.get(b);st.__webglFramebuffer=z,st.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(b,z=0,st=0){bt=b,ot=z,lt=st;let j=null,tt=!1,Ct=!1;if(b){let Tt=it.get(b);if(Tt.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(k.FRAMEBUFFER,Tt.__webglFramebuffer),vt.copy(b.viewport),Ht.copy(b.scissor),Xt=b.scissorTest,y.viewport(vt),y.scissor(Ht),y.setScissorTest(Xt),ct=-1;return}else if(Tt.__webglFramebuffer===void 0)ht.setupRenderTarget(b);else if(Tt.__hasExternalTextures)ht.rebindTextures(b,it.get(b.texture).__webglTexture,it.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let be=b.depthTexture;if(Tt.__boundDepthTexture!==be){if(be!==null&&it.has(be)&&(b.width!==be.image.width||b.height!==be.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ht.setupDepthRenderbuffer(b)}}let Dt=b.texture;(Dt.isData3DTexture||Dt.isDataArrayTexture||Dt.isCompressedArrayTexture)&&(Ct=!0);let jt=it.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(jt[z])?j=jt[z][st]:j=jt[z],tt=!0):b.samples>0&&ht.useMultisampledRTT(b)===!1?j=it.get(b).__webglMultisampledFramebuffer:Array.isArray(jt)?j=jt[st]:j=jt,vt.copy(b.viewport),Ht.copy(b.scissor),Xt=b.scissorTest}else vt.copy(Gt).multiplyScalar(gt).floor(),Ht.copy(le).multiplyScalar(gt).floor(),Xt=ae;if(st!==0&&(j=nt),y.bindFramebuffer(k.FRAMEBUFFER,j)&&y.drawBuffers(b,j),y.viewport(vt),y.scissor(Ht),y.setScissorTest(Xt),tt){let Tt=it.get(b.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+z,Tt.__webglTexture,st)}else if(Ct){let Tt=z;for(let Dt=0;Dt<b.textures.length;Dt++){let jt=it.get(b.textures[Dt]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Dt,jt.__webglTexture,st,Tt)}}else if(b!==null&&st!==0){let Tt=it.get(b.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Tt.__webglTexture,st)}ct=-1};function qn(b){let z=it.get(b);return(z.__readFormat!==b.format||z.__readType!==b.type)&&(z.__readFormat=b.format,z.__readType=b.type,z.__formatReadable=P.textureFormatReadable(b.format),z.__typeReadable=P.textureTypeReadable(b.type)),z}this.readRenderTargetPixels=function(b,z,st,j,tt,Ct,xt,Tt=0){if(!(b&&b.isWebGLRenderTarget)){me("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=it.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&xt!==void 0&&(Dt=Dt[xt]),Dt){y.bindFramebuffer(k.FRAMEBUFFER,Dt);try{let jt=b.textures[Tt],be=jt.format,Ee=jt.type;b.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Tt);let Jt=qn(jt);if(Jt.__formatReadable===!1){me("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Jt.__typeReadable===!1){me("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=b.width-j&&st>=0&&st<=b.height-tt&&k.readPixels(z,st,j,tt,Bt.convert(be),Bt.convert(Ee),Ct)}finally{let jt=bt!==null?it.get(bt).__webglFramebuffer:null;y.bindFramebuffer(k.FRAMEBUFFER,jt)}}},this.readRenderTargetPixelsAsync=async function(b,z,st,j,tt,Ct,xt,Tt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Dt=it.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&xt!==void 0&&(Dt=Dt[xt]),Dt)if(z>=0&&z<=b.width-j&&st>=0&&st<=b.height-tt){y.bindFramebuffer(k.FRAMEBUFFER,Dt);let jt=b.textures[Tt],be=jt.format,Ee=jt.type;b.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Tt);let Jt=qn(jt);if(Jt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Jt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ie=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Ie),k.bufferData(k.PIXEL_PACK_BUFFER,Ct.byteLength,k.STREAM_READ),k.readPixels(z,st,j,tt,Bt.convert(be),Bt.convert(Ee),0),k.bindBuffer(k.PIXEL_PACK_BUFFER,null);let Ke=bt!==null?it.get(bt).__webglFramebuffer:null;y.bindFramebuffer(k.FRAMEBUFFER,Ke);let Ue=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await Lp(k,Ue,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Ie),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Ct),k.bindBuffer(k.PIXEL_PACK_BUFFER,null),k.deleteBuffer(Ie),k.deleteSync(Ue),Ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,z=null,st=0){let j=Math.pow(2,-st),tt=Math.floor(b.image.width*j),Ct=Math.floor(b.image.height*j),xt=z!==null?z.x:0,Tt=z!==null?z.y:0;ht.setTexture2D(b,0),k.copyTexSubImage2D(k.TEXTURE_2D,st,0,0,xt,Tt,tt,Ct),y.unbindTexture()},this.copyTextureToTexture=function(b,z,st=null,j=null,tt=0,Ct=0){let xt,Tt,Dt,jt,be,Ee,Jt,Ie,Ke,Ue=b.isCompressedTexture?b.mipmaps[Ct]:b.image;if(st!==null)xt=st.max.x-st.min.x,Tt=st.max.y-st.min.y,Dt=st.isBox3?st.max.z-st.min.z:1,jt=st.min.x,be=st.min.y,Ee=st.isBox3?st.min.z:0;else{let tn=Math.pow(2,-tt);xt=Math.floor(Ue.width*tn),Tt=Math.floor(Ue.height*tn),b.isDataArrayTexture?Dt=Ue.depth:b.isData3DTexture?Dt=Math.floor(Ue.depth*tn):Dt=1,jt=0,be=0,Ee=0}j!==null?(Jt=j.x,Ie=j.y,Ke=j.z):(Jt=0,Ie=0,Ke=0);let Xe=Bt.convert(z.format),_n=Bt.convert(z.type),qt;z.isData3DTexture?(ht.setTexture3D(z,0),qt=k.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(ht.setTexture2DArray(z,0),qt=k.TEXTURE_2D_ARRAY):(ht.setTexture2D(z,0),qt=k.TEXTURE_2D),y.activeTexture(k.TEXTURE0),y.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,z.flipY),y.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),y.pixelStorei(k.UNPACK_ALIGNMENT,z.unpackAlignment);let En=y.getParameter(k.UNPACK_ROW_LENGTH),Fe=y.getParameter(k.UNPACK_IMAGE_HEIGHT),Yn=y.getParameter(k.UNPACK_SKIP_PIXELS),ei=y.getParameter(k.UNPACK_SKIP_ROWS),Ce=y.getParameter(k.UNPACK_SKIP_IMAGES);y.pixelStorei(k.UNPACK_ROW_LENGTH,Ue.width),y.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Ue.height),y.pixelStorei(k.UNPACK_SKIP_PIXELS,jt),y.pixelStorei(k.UNPACK_SKIP_ROWS,be),y.pixelStorei(k.UNPACK_SKIP_IMAGES,Ee);let ps=b.isDataArrayTexture||b.isData3DTexture,Ve=z.isDataArrayTexture||z.isData3DTexture;if(b.isDepthTexture){let tn=it.get(b),ui=it.get(z),Oe=it.get(tn.__renderTarget),Tn=it.get(ui.__renderTarget);y.bindFramebuffer(k.READ_FRAMEBUFFER,Oe.__webglFramebuffer),y.bindFramebuffer(k.DRAW_FRAMEBUFFER,Tn.__webglFramebuffer);for(let ji=0;ji<Dt;ji++)ps&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,it.get(b).__webglTexture,tt,Ee+ji),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,it.get(z).__webglTexture,Ct,Ke+ji)),k.blitFramebuffer(jt,be,xt,Tt,Jt,Ie,xt,Tt,k.DEPTH_BUFFER_BIT,k.NEAREST);y.bindFramebuffer(k.READ_FRAMEBUFFER,null),y.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(tt!==0||b.isRenderTargetTexture||it.has(b)){let tn=it.get(b),ui=it.get(z);y.bindFramebuffer(k.READ_FRAMEBUFFER,Y),y.bindFramebuffer(k.DRAW_FRAMEBUFFER,K);for(let Oe=0;Oe<Dt;Oe++)ps?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,tn.__webglTexture,tt,Ee+Oe):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,tn.__webglTexture,tt),Ve?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,ui.__webglTexture,Ct,Ke+Oe):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,ui.__webglTexture,Ct),tt!==0?k.blitFramebuffer(jt,be,xt,Tt,Jt,Ie,xt,Tt,k.COLOR_BUFFER_BIT,k.NEAREST):Ve?k.copyTexSubImage3D(qt,Ct,Jt,Ie,Ke+Oe,jt,be,xt,Tt):k.copyTexSubImage2D(qt,Ct,Jt,Ie,jt,be,xt,Tt);y.bindFramebuffer(k.READ_FRAMEBUFFER,null),y.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Ve?b.isDataTexture||b.isData3DTexture?k.texSubImage3D(qt,Ct,Jt,Ie,Ke,xt,Tt,Dt,Xe,_n,Ue.data):z.isCompressedArrayTexture?k.compressedTexSubImage3D(qt,Ct,Jt,Ie,Ke,xt,Tt,Dt,Xe,Ue.data):k.texSubImage3D(qt,Ct,Jt,Ie,Ke,xt,Tt,Dt,Xe,_n,Ue):b.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Ct,Jt,Ie,xt,Tt,Xe,_n,Ue.data):b.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Ct,Jt,Ie,Ue.width,Ue.height,Xe,Ue.data):k.texSubImage2D(k.TEXTURE_2D,Ct,Jt,Ie,xt,Tt,Xe,_n,Ue);y.pixelStorei(k.UNPACK_ROW_LENGTH,En),y.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Fe),y.pixelStorei(k.UNPACK_SKIP_PIXELS,Yn),y.pixelStorei(k.UNPACK_SKIP_ROWS,ei),y.pixelStorei(k.UNPACK_SKIP_IMAGES,Ce),Ct===0&&z.generateMipmaps&&k.generateMipmap(qt),y.unbindTexture()},this.initRenderTarget=function(b){it.get(b).__webglFramebuffer===void 0&&ht.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?ht.setTextureCube(b,0):b.isData3DTexture?ht.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?ht.setTexture2DArray(b,0):ht.setTexture2D(b,0),y.unbindTexture()},this.resetState=function(){ot=0,lt=0,bt=null,y.reset(),Vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Ne._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ne._getUnpackColorSpace()}};var gm=new Gn,sh=new W,cs=class extends co{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new on(t,3)),this.setAttribute("uv",new on(e,2))}applyMatrix4(t){let e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new Es(e,6,1);return this.setAttribute("instanceStart",new Ai(n,3,0)),this.setAttribute("instanceEnd",new Ai(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new Es(e,6,1);return this.setAttribute("instanceColorStart",new Ai(n,3,0)),this.setAttribute("instanceColorEnd",new Ai(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new no(t.geometry)),this}fromLineSegments(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gn);let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),gm.setFromBufferAttribute(e),this.boundingBox.union(gm))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jn),this.boundingBox===null&&this.computeBoundingBox();let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)sh.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(sh)),sh.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(sh));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}};kt.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Ft},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};$n.line={uniforms:bo.merge([kt.common,kt.fog,kt.line]),vertexShader:`
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
		`};var Wi=class extends Mn{constructor(t){super({type:"LineMaterial",uniforms:bo.clone($n.line.uniforms),vertexShader:$n.line.vertexShader,fragmentShader:$n.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0!==this.worldUnits&&(this.needsUpdate=!0),t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var _d=new $e,_m=new W,xm=new W,In=new $e,Pn=new $e,$i=new $e,xd=new W,vd=new ze,Ln=new uo,vm=new W,rh=new Gn,ah=new jn,Xi=new $e,qi,nr;function ym(i,t,e){return Xi.set(0,0,-t,1).applyMatrix4(i.projectionMatrix),Xi.multiplyScalar(1/Xi.w),Xi.x=nr/e.width,Xi.y=nr/e.height,Xi.applyMatrix4(i.projectionMatrixInverse),Xi.multiplyScalar(1/Xi.w),Math.abs(Math.max(Xi.x,Xi.y))}function VS(i,t){let e=i.matrixWorld,n=i.geometry,s=n.attributes.instanceStart,r=n.attributes.instanceEnd,a=Math.min(n.instanceCount,s.count);for(let o=0,l=a;o<l;o++){Ln.start.fromBufferAttribute(s,o),Ln.end.fromBufferAttribute(r,o),Ln.applyMatrix4(e);let c=new W,u=new W;qi.distanceSqToSegment(Ln.start,Ln.end,u,c),u.distanceTo(c)<nr*.5&&t.push({point:u,pointOnLine:c,distance:qi.origin.distanceTo(u),object:i,face:null,faceIndex:o,uv:null,uv1:null})}}function HS(i,t,e){let n=t.projectionMatrix,r=i.material.resolution,a=i.matrixWorld,o=i.geometry,l=o.attributes.instanceStart,c=o.attributes.instanceEnd,u=Math.min(o.instanceCount,l.count),m=-t.near;qi.at(1,$i),$i.w=1,$i.applyMatrix4(t.matrixWorldInverse),$i.applyMatrix4(n),$i.multiplyScalar(1/$i.w),$i.x*=r.x/2,$i.y*=r.y/2,$i.z=0,xd.copy($i),vd.multiplyMatrices(t.matrixWorldInverse,a);for(let d=0,g=u;d<g;d++){if(In.fromBufferAttribute(l,d),Pn.fromBufferAttribute(c,d),In.w=1,Pn.w=1,In.applyMatrix4(vd),Pn.applyMatrix4(vd),In.z>m&&Pn.z>m)continue;if(In.z>m){let F=In.z-Pn.z,T=(In.z-m)/F;In.lerp(Pn,T)}else if(Pn.z>m){let F=Pn.z-In.z,T=(Pn.z-m)/F;Pn.lerp(In,T)}In.applyMatrix4(n),Pn.applyMatrix4(n),In.multiplyScalar(1/In.w),Pn.multiplyScalar(1/Pn.w),In.x*=r.x/2,In.y*=r.y/2,Pn.x*=r.x/2,Pn.y*=r.y/2,Ln.start.copy(In),Ln.start.z=0,Ln.end.copy(Pn),Ln.end.z=0;let A=Ln.closestPointToPointParameter(xd,!0);Ln.at(A,vm);let p=Ju.lerp(In.z,Pn.z,A),f=p>=-1&&p<=1,N=xd.distanceTo(vm)<nr*.5;if(f&&N){Ln.start.fromBufferAttribute(l,d),Ln.end.fromBufferAttribute(c,d),Ln.start.applyMatrix4(a),Ln.end.applyMatrix4(a);let F=new W,T=new W;qi.distanceSqToSegment(Ln.start,Ln.end,T,F),e.push({point:T,pointOnLine:F,distance:qi.origin.distanceTo(T),object:i,face:null,faceIndex:d,uv:null,uv1:null})}}}var ir=class extends bn{constructor(t=new cs,e=new Wi({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,s=new Float32Array(2*e.count);for(let a=0,o=0,l=e.count;a<l;a++,o+=2)_m.fromBufferAttribute(e,a),xm.fromBufferAttribute(n,a),s[o]=o===0?0:s[o-1],s[o+1]=s[o]+_m.distanceTo(xm);let r=new Es(s,2,1);return t.setAttribute("instanceDistanceStart",new Ai(r,1,0)),t.setAttribute("instanceDistanceEnd",new Ai(r,1,1)),this}raycast(t,e){let n=this.material.worldUnits,s=t.camera;if(s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.'),n===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;let r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;qi=t.ray;let a=this.matrixWorld,o=this.geometry,l=this.material;nr=l.linewidth+r,o.boundingSphere===null&&o.computeBoundingSphere(),ah.copy(o.boundingSphere).applyMatrix4(a);let c;if(n)c=nr*.5;else{let m=Math.max(s.near,ah.distanceToPoint(qi.origin));c=ym(s,m,l.resolution)}if(ah.radius+=c,qi.intersectsSphere(ah)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),rh.copy(o.boundingBox).applyMatrix4(a);let u;if(n)u=nr*.5;else{let m=Math.max(s.near,rh.distanceToPoint(qi.origin));u=ym(s,m,l.resolution)}rh.expandByScalar(u),qi.intersectsBox(rh)!==!1&&(n?VS(this,e):HS(this,s,e))}onBeforeRender(t){let e=this.material.uniforms;e&&e.resolution&&(t.getViewport(_d),this.material.uniforms.resolution.value.set(_d.z,_d.w))}};function Sm(i){let t=window.__ROD__,{scene:e,camera:n,goal:s,cur:r,invalidate:a,K:o,CX:l,CY:c,mcs:u,q:m,list:d,clamp:g,norm:x,munis:A}=i,p=h=>document.querySelector(h),f=h=>String(h).replace(/[<>&"]/g,_=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[_]),N=(h,_)=>[(h-l)*o,(_-c)*o],F=.06,T=t.segs.map(h=>{let _=[],S=[0];for(let E=0;E<h.length;E+=2){let C=N(h[E],h[E+1]);_.length&&S.push(S[S.length-1]+Math.hypot(C[0]-_[_.length-1][0],C[1]-_[_.length-1][1])),_.push(C)}return{p:_,c:S,L:S[S.length-1]}}),M=t.stops.map(([h,_,S,E])=>({n:h,id:E,w:N(_,S),fams:new Set})),D=t.routes.map(([h,_,S])=>({s:h,l:_,c:S})),H=new Map;(t.bus||[]).forEach(([h,_,S,E])=>{let C={days:new Set(h),name:_,stops:S,times:E};S.forEach((I,O)=>{if(O<S.length-1){let U=H.get(I)||[];U.push([C,O]),H.set(I,U)}})});function w(h,_,S){let E=ae(),C=t.days.indexOf(E.ymd),I=[];for(let[O,U]of H.get(h)||[]){if(!O.days.has(C))continue;let B=O.times[U];if(B<_||B>S)continue;let J=O.stops[O.stops.length-1];I.push({sm:B,est:B,dl:0,fam:O.name,dest:M[J].n,destId:M[J].id,plat:"",cancel:!1,obs:"",live:!1,num:"",tid:"",tr:null,bus:!0,src:"bus",bstops:O.stops.slice(U)})}return I}let L=(h,_)=>{let S=h.match(/^R([A-Z]*)(\d*)(.*)$/),E=_.match(/^R([A-Z]*)(\d*)(.*)$/);return(S[1]||"").localeCompare(E[1]||"")||(+S[2]||0)-(+E[2]||0)||S[3].localeCompare(E[3])},V=[...new Set(D.map(h=>h.s))].sort(L),$={};D.forEach(h=>{$[h.s]||($[h.s]=h.c)});let Q=t.pats.map(([h,_,S])=>({stops:h,t:_,segs:S})),nt=t.trips.map(([h,_,S,E,C],I)=>({day:h,pat:Q[_],fam:D[S].s,c:D[S].c,t0:E,num:C,tid:t.tids[I]})),Y={};V.forEach(h=>Y[h]=new Set),nt.forEach(h=>{h.pat.segs.forEach(_=>Y[h.fam].add(_)),h.pat.stops.forEach(_=>M[_].fams.add(h.fam))});let K=t.days.map((h,_)=>nt.filter(S=>S.day===_)),ot=new Map(nt.map(h=>[h.tid,h])),lt=[124.87404143965449,479.9901289885639,124.62688710863031,249.99562739146893,486.739003764725,248.0364802782304,2037.1344308355726],bt=Math.PI/180,ct=3.922*bt,yt=-39.705*bt;function vt(h,_){let S=h*bt+ct,E=_*bt,C=Math.cos(yt),I=Math.sin(yt),O=Math.cos(E),U=Math.cos(S)*O,B=Math.sin(S)*O,J=Math.sin(E),et=Math.atan2(B,U*C-J*I),v=Math.asin(J*C+U*I),R=Math.sqrt(2/(1+Math.cos(et)*Math.cos(v))),Z=R*Math.cos(v)*Math.sin(et),rt=R*Math.sin(v),[Et,$t,Zt,It,dt,xe,re]=lt;return N(($t+Et*Z-dt)*re,(xe-(It-Zt*rt))*re)}let Ht=new Map(M.map((h,_)=>[h.id,_]));function Xt(h){if(h.g)return h.g;let _=[],S=[],E=[0],C=0;return h.segs.forEach((I,O)=>{let U=T[I];U.p.forEach((B,J)=>{O&&!J||(_.push(B),S.push(C+U.c[J]))}),C+=U.L,E.push(C)}),h.g={pts:_,cum:S,stopD:E}}function ke(h,_,S,E){let C=1e18,I=0;for(let O=0;O+1<h.pts.length;O++){if(h.cum[O+1]<S||h.cum[O]>E)continue;let U=h.pts[O],B=h.pts[O+1],J=B[0]-U[0],et=B[1]-U[1],v=J*J+et*et||1e-9,R=Math.max(0,Math.min(1,((_[0]-U[0])*J+(_[1]-U[1])*et)/v)),Z=U[0]+J*R-_[0],rt=U[1]+et*R-_[1],Et=Z*Z+rt*rt;Et<C&&(C=Et,I=h.cum[O]+R*(h.cum[O+1]-h.cum[O]))}return{d:I,err:Math.sqrt(C)}}function Me(h,_){let S=0,E=h.cum.length-1;if(_<=0)return h.pts[0];if(_>=h.cum[E])return h.pts[E];for(;E-S>1;){let U=S+E>>1;h.cum[U]<=_?S=U:E=U}let C=(_-h.cum[S])/(h.cum[E]-h.cum[S]||1),I=h.pts[S],O=h.pts[E];return[I[0]+(O[0]-I[0])*C,I[1]+(O[1]-I[1])*C]}let Le=h=>`${h.slice(6,8)}/${h.slice(4,6)}`,ft=new Intl.DateTimeFormat("es-ES",{timeZone:"Europe/Madrid",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hourCycle:"h23"});function gt(h){let _={};return ft.formatToParts(h).forEach(S=>_[S.type]=S.value),{ymd:_.year+_.month+_.day,min:+_.hour*60+ +_.minute+ +_.second/60}}let At=0,Qt=null,Gt=0,le=0;function ae(){let h=gt(new Date);if(At===0&&Qt==null)return{...h,live:!0};let _=Qt==null?h.min:Gt+(At?(performance.now()-le)/6e4*At:0);return{ymd:h.ymd,min:_,live:!1}}let at=h=>(h=(Math.round(h)%1440+1440)%1440,String(Math.floor(h/60)).padStart(2,"0")+":"+String(h%60).padStart(2,"0")),Mt="https://rodalies.erathegameoftime.com",G={url:"",delays:new Map,tu:new Map,vp:new Map,alerts:[],ok:0,okVP:0,err:"",feedTs:0};try{let h=new URLSearchParams(location.search).get("rt");h&&localStorage.setItem("rod_rt",h);let _=localStorage.getItem("rod_rt");_&&/jhmuyo\.workers\.dev/.test(_)&&(_=Mt,localStorage.setItem("rod_rt",_)),G.url=_||Mt}catch{G.url=Mt}let wt=(h,_)=>fetch(h+_,{cache:"no-store"}).then(S=>{if(!S.ok)throw new Error("HTTP "+S.status);return S.json()}),Nt=h=>/^51/.test(h||"");async function oe(){if(!G.url){Re();return}let h=G.url.replace(/\/+$/,"");(!G.repFail||Date.now()-G.repFail>15*6e4)&&wt(h,"/reports.json").then(B=>{B&&Array.isArray(B.items)?(G.rep=B.items,G.repSkew=(B.now||Date.now())-Date.now(),B.tipos&&(G.tipos=B.tipos),G.repOk=Date.now(),G.repFail=0):G.repFail=Date.now()}).catch(()=>{G.repFail=Date.now(),G.repOk=0});let _=!G.adifAt||Date.now()-G.adifAt>11e4,[S,E,C,I,O]=await Promise.allSettled([wt(h,"/trip_updates.json"),wt(h,"/vehicle_positions.json"),wt(h,"/alerts.json"),wt(h,"/notices.json"),_?wt(h,"/adif.json"):Promise.reject(0)]);if(O.status==="fulfilled"&&O.value&&O.value.ok?(G.adif=O.value,G.adifAt=Date.now()):_&&(G.adifAt=Date.now()-6e4),S.status==="fulfilled"){let B=new Map,J=new Map;for(let et of S.value.entity||[]){let v=et.tripUpdate;if(!v||!v.trip||!Nt(v.trip.tripId))continue;let R=v.trip.tripId,Z=(v.stopTimeUpdate||[])[0],rt=v.delay;rt==null&&Z&&(rt=(Z.arrival||Z.departure||{}).delay),v.trip.scheduleRelationship==="CANCELED"&&(rt="X"),rt!=null&&B.set(R,rt),J.set(R,{next:Z?{sid:Z.stopId,t:+((Z.arrival||Z.departure||{}).time||0)}:null})}G.delays=B,G.tu=J,G.ok=Date.now(),G.feedTs=+((S.value.header||{}).timestamp||0)*1e3,G.err=""}else G.err=S.reason&&S.reason.message||"sin respuesta";if(E.status==="fulfilled"){let B=new Map,J=Date.now()/1e3;for(let et of E.value.entity||[]){let v=et.vehicle;if(!v||!v.trip||!Nt(v.trip.tripId)||!v.position)continue;let R=v.vehicle&&v.vehicle.label||"",Z=R.match(/PLATF\.\(([^)]+)\)/),rt=G.vp.get(v.trip.tripId),Et={tid:v.trip.tripId,w:vt(+v.position.longitude,+v.position.latitude),st:v.currentStatus||"",sid:v.stopId||"",ts:+v.timestamp||J,label:R,plat:Z?Z[1]:"",fam:(R.split("-")[0]||"").trim(),num:v.vehicle&&v.vehicle.id||""};Et.disp=rt?rt.disp:null,B.set(Et.tid,Et)}G.vp=B,G.okVP=Date.now()}let U=[];if(I.status==="fulfilled"&&Array.isArray(I.value.included)){G.okNotices=Date.now();for(let B of I.value.included){let J=new Set((B.lines||[]).map(R=>R.id).filter(R=>$[R])),et=R=>((R||{}).es||(R||{}).ca||"").trim(),v=[et(B.description),et(B.title)].sort((R,Z)=>Z.length-R.length)[0];v&&U.push({id:"N"+B.externalId,fams:J,stops:new Set,txt:v,when:(B.date||"")+"T"+(B.time||""),src:"Rodalies",core:B.core||""})}}if(C.status==="fulfilled"){let B=+((C.value.header||{}).timestamp||0);if(G.alertsTs=B,Date.now()/1e3-B<6*3600)for(let J of C.value.entity||[]){let et=J.alert;if(!et)continue;let v=new Set,R=new Set;for(let $t of et.informedEntity||[])($t.routeId||"").startsWith("51")&&v.add($t.routeId.replace(/^51T\d+/,"")),$t.stopId&&Ht.has($t.stopId)&&R.add(Ht.get($t.stopId));if(!v.size&&!R.size)continue;let Z=(et.descriptionText||et.headerText||{translation:[]}).translation||[],rt=((Z.find($t=>$t.language==="es")||Z[0]||{}).text||"").trim(),Et=+((et.activePeriod||[])[0]||{}).start||0;U.some($t=>$t.txt===rt)||U.push({id:J.id,fams:v,stops:R,txt:rt,when:Et?new Date(Et*1e3).toISOString().slice(0,19):"",src:"Renfe"})}}if(G.adif&&Date.now()-G.adifAt<15*6e4)for(let[B,J]of(G.adif.items||[]).entries()){let et=(J.t?J.t+". ":"")+J.txt,v=new Set,R=new Set,Z=x(et);for(let rt of et.matchAll(/\b(R\d{1,2}[NS]?|R3a|RG1|RL\d|RT\d)\b/g))$[rt[1]]&&v.add(rt[1]);M.forEach((rt,Et)=>{rt.fams.size&&rt.n.length>4&&Z.includes(x(rt.n))&&(R.add(Et),v.size||rt.fams.forEach($t=>v.add($t)))}),U.some(rt=>rt.txt===et)||U.push({id:"A"+B,fams:v,stops:R,txt:et,when:G.adif.upd||"",src:"Adif",lvl:J.lvl})}if(I.status==="fulfilled"||C.status==="fulfilled"||G.adif){G.alerts=U.sort((B,J)=>J.when>B.when?1:-1);try{mg()}catch{}}Re(),Ph(),tt=0,a()}let se=()=>G.okVP&&Date.now()-G.okVP<9e4,he={at:0,v:!1},fe=()=>{if(!se()||G.vp.size>0)return!1;if(Date.now()-he.at>3e4){he.at=Date.now();let h=gt(new Date),_=t.days.indexOf(h.ymd),S=0;if(_>=0)for(let E of K[_]){let C=h.min-E.t0;C>E.pat.t[1]+2&&C<E.pat.t[E.pat.t.length-2]-2&&S++}he.v=S>=6}return he.v},k=()=>se()&&!fe();function Re(){let h=p("#rtst"),_=p("#mode");if(_){let E=!!k()&&ae().live;_.classList.toggle("on",E),_.classList.toggle("pre",!E),_.textContent=E?"En directo":pe.cur?"Repaso real":"Previsi\xF3n",_.classList.toggle("past",!!pe.cur),_.title=pe.cur?`Retrasos reales de la foto de las ${pe.cur.sn.t} (se toma una cada 15 min)`:""}if(!h)return;G.url?G.err?h.textContent="No se pudo conectar con el puente ("+G.err+"). Se usa el horario.":k()?h.innerHTML=`Conectado \xB7 ${G.vp.size} trenes con posici\xF3n real y ${G.delays.size} con retraso \xB7 actualizado a las ${new Date(G.okVP).toLocaleTimeString("es-ES",{hour:"2-digit",minute:"2-digit",second:"2-digit"})}`:fe()?h.textContent="Conectado, pero Renfe no est\xE1 publicando ahora ninguna posici\xF3n de Rodalies (el resto de n\xFAcleos s\xED). Mientras tanto, mapa seg\xFAn horario y salidas oficiales de Rodalies.":h.textContent="Conectando\u2026":h.textContent=G.err||"Sin puente: trenes seg\xFAn horario oficial.";let S=p("#rturl");S&&S._shown!==G.url&&(S.value=G.url,S._shown=G.url)}p("#rtsave").onclick=()=>{let h=p("#rturl").value.trim().replace(/\/+(alerts|trip_updates|vehicle_positions)\.json$/,"").replace(/\/+$/,"");if(h&&!/^https?:\/\//.test(h)&&(h="https://"+h),!h){G.err="pega la direcci\xF3n de tu puente",Re();return}G.url=h;try{localStorage.setItem("rod_rt",h)}catch{}G.ok=0,G.err="",Re(),oe()},p("#rtoff").onclick=()=>{G.url=Mt;try{localStorage.removeItem("rod_rt")}catch{}u._h="",oe()},setInterval(oe,2e4),setTimeout(oe,50);let pe={snap:null,key:""};function P(){let h=ae();if(h.live||!Ce.hoy||!Ce.hoy.snaps||At&&Qt==null)return null;let _=gt(new Date).min;if(h.min>_+1)return null;let S=null;for(let E of Ce.hoy.snaps){if(!E.d)continue;let C=Yd(E.t);C<=h.min+1&&(!S||C>S.m)&&(S={m:C,sn:E})}return S&&h.min-S.m<=25?S:null}let y=h=>{{let C=Ah(h.num);if(C&&C.cx&&ae().live)return"X"}let _=pe.cur;if(_){if(_.sn.x&&_.sn.x.includes(h.tid))return"X";let C=_.sn.d[h.tid];return C??0}if(!k())return null;let S=G.delays.get(h.tid),E=G.vp.get(h.tid);return S==="X"?S:E&&E.pre&&E.preDl>=1?Math.max(typeof S=="number"?S:0,E.preDl*60):S??null},X=new Set(V);try{let h=JSON.parse(localStorage.getItem("rod_lines")||"null");Array.isArray(h)&&h.some(_=>V.includes(_))&&(X.clear(),h.forEach(_=>V.includes(_)&&X.add(_)))}catch{}let it=new cs,ht=new cs,Rt=new Wi({vertexColors:!0,linewidth:3.2,depthTest:!1,transparent:!0}),Lt=new Wi({color:16777215,linewidth:6,depthTest:!1,transparent:!0,opacity:.9}),ut=new ir(it,Rt),_t=new ir(ht,Lt);_t.renderOrder=20,ut.renderOrder=21,ut.frustumCulled=_t.frustumCulled=!1,e.add(_t,ut);function Ut(h){let _=h[0]/o+l,S=h[1]/o+c;for(let E of A){if(E._bb===void 0){let I=1e9,O=1e9,U=-1e9,B=-1e9;for(let J of E.rings||[]){let et=J[0]||[];for(let v=0;v<et.length;v+=2)et[v]<I&&(I=et[v]),et[v]>U&&(U=et[v]),et[v+1]<O&&(O=et[v+1]),et[v+1]>B&&(B=et[v+1])}E._bb=[I,O,U,B]}let C=E._bb;if(!(_<C[0]||_>C[2]||S<C[1]||S>C[3]))for(let I of E.rings||[]){let O=I[0]||[],U=!1;for(let B=0,J=O.length,et=J-2;B<J;et=B,B+=2){let v=O[B+1],R=O[et+1];v>S!=R>S&&_<(O[et]-O[B])*(S-v)/(R-v)+O[B]&&(U=!U)}if(U)return!0}}return!1}let te=!1;function zt(){te||!A.length||(te=!0,M.forEach(h=>{h.ext=!Ut(h.w)}),T.forEach(h=>{h.ext=!Ut(h.p[0])&&!Ut(h.p[h.p.length-1])&&!Ut(h.p[h.p.length>>1])}))}let Ot=()=>{let h=new Set(X.size<=2?X:[]);try{xt&&xt.fam&&h.add(xt.fam)}catch{}return h},ee="";function ce(){zt();let h=[],_=[],S=new Set,E=new ue,C=new ue("#d2d0d0"),I=Ot();ee=[...I].join();for(let O of V)if(X.has(O))for(let U of Y[O]){if(S.has(U))continue;S.add(U);let B=T[U].p;E.set($[O]),T[U].ext&&!I.has(O)&&E.lerp(C,.55);for(let J=0;J+1<B.length;J++)h.push(B[J][0],B[J][1],F,B[J+1][0],B[J+1][1],F),_.push(E.r,E.g,E.b,E.r,E.g,E.b)}h.length||(h.push(0,0,-50,0,0,-50),_.push(0,0,0,0,0,0)),it.setPositions(h),it.setColors(_),ht.setPositions(h),a()}ce();let _e=h=>new Mn({uniforms:{dpr:{value:Math.min(devicePixelRatio||1,2)},border:{value:new ue(h)}},vertexShader:"attribute float size; attribute vec3 fill; attribute float bw; varying vec3 vF; varying float vS; varying float vB; uniform float dpr; void main(){ vF=fill; vS=size*dpr; vB=bw*dpr; gl_PointSize=vS; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"uniform vec3 border; varying vec3 vF; varying float vS; varying float vB; void main(){ float r=length(gl_PointCoord*2.0-1.0)*vS*0.5; float R=vS*0.5; if(r>R) discard; float a=1.0-smoothstep(R-1.2,R,r); vec3 c = r>R-vB ? border : vF; gl_FragColor=vec4(c,a); }",transparent:!0,depthTest:!1}),q=new ln,Pt=M.length,mt=new Float32Array(Pt*3),Bt=new Float32Array(Pt*3),Vt=new Float32Array(Pt),St=new Float32Array(Pt);M.forEach((h,_)=>{mt[_*3]=h.w[0],mt[_*3+1]=h.w[1],mt[_*3+2]=F,Bt.set([1,1,1],_*3),Vt[_]=6,St[_]=1.6}),q.setAttribute("position",new Ye(mt,3)),q.setAttribute("fill",new Ye(Bt,3)),q.setAttribute("size",new Ye(Vt,1)),q.setAttribute("bw",new Ye(St,1));let ie=_e("#1d2330"),Kt=new Zs(q,ie);Kt.renderOrder=22,Kt.frustumCulled=!1,e.add(Kt);function Te(){let h=r.dist<45,_=Ot();M.forEach((S,E)=>{let C=[...S.fams].some(O=>X.has(O)),I=S.ext&&![...S.fams].some(O=>_.has(O))&&E!==Tt;Vt[E]=C?E===Tt?13:I?3:h?8:5:0,St[E]=E===Tt?3:1.6}),q.attributes.size.needsUpdate=!0,q.attributes.bw.needsUpdate=!0}let we=600,cn=new ln,kn=new Float32Array(we*3),cr=new Float32Array(we*3),na=new Float32Array(we),ia=new Float32Array(we);cn.setAttribute("position",new Ye(kn,3)),cn.setAttribute("fill",new Ye(cr,3)),cn.setAttribute("size",new Ye(na,1)),cn.setAttribute("bw",new Ye(ia,1));let Ki=new Float32Array(we);cn.setAttribute("ang",new Ye(Ki,1));let bh=new Mn({uniforms:{dpr:{value:Math.min(devicePixelRatio||1,2)},border:{value:new ue("#ffffff")}},vertexShader:"attribute float size; attribute vec3 fill; attribute float bw; attribute float ang; varying vec3 vF; varying float vS; varying float vB; varying float vA; uniform float dpr; void main(){ vF=fill; vS=size*dpr; vB=bw*dpr; vA=ang; gl_PointSize=vS; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"uniform vec3 border; varying vec3 vF; varying float vS; varying float vB; varying float vA; void main(){ vec2 p=gl_PointCoord*2.0-1.0; float r=length(p)*vS*0.5; float R=vS*0.5; if(r>R) discard; float a=1.0-smoothstep(R-1.2,R,r); vec3 c = r>R-vB ? border : vF; if(vA<50.0){ vec2 d=vec2(sin(vA),-cos(vA)); vec2 n=vec2(cos(vA),sin(vA)); float qy=-dot(p,d); float qx=dot(p,n); float w=(qy+0.66)/0.98*0.48; if(qy>-0.66 && qy<0.32 && abs(qx)<w) c=vec3(1.0); } else if(vA>70.0 && vA<80.0){ if(abs(p.y)<0.36 && abs(abs(p.x)-0.2)<0.1) c=vec3(1.0); } else if(vA>80.0 && vA<90.0){ if((abs(p.x)<0.11 && p.y>-0.5 && p.y<0.16) || length(p-vec2(0.0,0.38))<0.12) c=vec3(1.0); } gl_FragColor=vec4(c,a); }",transparent:!0,depthTest:!1}),hr=new Zs(cn,bh);hr.renderOrder=24,hr.frustumCulled=!1,e.add(hr);let Pi=new ln,hi=new Float32Array(we*3),ur=new Float32Array(we*3),sa=new Float32Array(we),ra=new Float32Array(we);Pi.setAttribute("position",new Ye(hi,3)),Pi.setAttribute("fill",new Ye(ur,3)),Pi.setAttribute("size",new Ye(sa,1)),Pi.setAttribute("bw",new Ye(ra,1));let fs=new Zs(Pi,_e("#ffffff"));fs.renderOrder=23,fs.frustumCulled=!1,e.add(fs);function aa(h,_){let S=T[h],E=_*S.L,C=0,I=S.c.length-1;for(;I-C>1;){let et=C+I>>1;S.c[et]<=E?C=et:I=et}let O=S.c[I]-S.c[C]||1,U=(E-S.c[C])/O,B=S.p[C],J=S.p[I];return[B[0]+(J[0]-B[0])*U,B[1]+(J[1]-B[1])*U]}let Ds=h=>h*h*(3-2*h)*.35+h*.65;function Ns(h,_){let S=h.pat.t,E=h.pat.stops.length,C=S[2*E-2];if(_<S[1]-2||_>C+1)return null;if(_<=S[1])return{w:M[h.pat.stops[0]].w,at:0,next:0,moving:!1};for(let I=0;I<E-1;I++){let O=S[2*I+1],U=S[2*I+2],B=S[2*I+3];if(_<=U){let J=U>O?(_-O)/(U-O):1;return{w:aa(h.pat.segs[I],Ds(g(J,0,1))),at:-1,next:I+1,prev:I,moving:!0}}if(_<=B)return{w:M[h.pat.stops[I+1]].w,at:I+1,next:I+1,moving:!1}}return{w:M[h.pat.stops[E-1]].w,at:E-1,next:E-1,moving:!1}}function Us(h){let _=t.days.indexOf(h.ymd),S=[];if(_<0)return{k:_,out:S};let E=(C,I)=>{for(let O of C){if(!X.has(O.fam))continue;let U=y(O);if(U==="X")continue;let B=(U||0)/60,J=h.min+I-O.t0-B;if(J<-2||J>O.pat.t[O.pat.t.length-2]+1)continue;let et=Ns(O,J);et&&S.push({tr:O,p:et,rel:J,dl:B,live:U!=null})}};return E(K[_],0),_>0&&E(K[_-1],1440),{k:_,out:S}}function Mh(h,_,S,E){let C=h.pat.stops[0],I=_.dep0,O=null,U=(J,et)=>{for(let v of J||[]){let R=v.pat.stops,Z=R.length;if(R[Z-1]!==C||v===h)continue;let rt=v.t0+v.pat.t[2*(Z-1)]-et;if(rt>I+5||rt<I-120)continue;let Et=Xt(v.pat),$t=ke(Et,_.w,-1,1e9);if($t.err>.6)continue;let Zt=Et.stopD,It=v.pat.t,dt=Zt.findIndex(ve=>ve>$t.d);dt<0&&(dt=Z-1);let xe=dt===0?It[1]:It[2*dt-1]+(Zt[dt]>Zt[dt-1]?($t.d-Zt[dt-1])/(Zt[dt]-Zt[dt-1]):1)*(It[2*dt]-It[2*dt-1]),re=S-(v.t0+xe-et);re<-5||re>120||(!O||Math.abs(re)<Math.abs(O.prevDl))&&(O={prevTr:v,dPrev:$t.d,prevDl:re,arrO:rt+Math.max(0,re)})}};if(U(K[E],0),E>0&&U(K[E-1],1440),!O)return{prevTr:null,preDl:0};let B=Math.max(I,O.arrO+3);return{...O,depEst:B,preDl:Math.max(0,B-I)}}function wh(h,_,S){let E=h.pat.t,C=_.length;if(!(S>=0))return S<0?_[0]:null;for(let I=0;I<C;I++)if(S<=E[2*I+1]){if(S>=E[2*I]||I===0)return _[I];let O=E[2*I-1],U=E[2*I];return _[I-1]+(_[I]-_[I-1])*(U>O?(S-O)/(U-O):1)}return _[C-1]}let Lo=performance.now();function Eh(){let h=[],_=Date.now()/1e3,S=performance.now(),E=Math.min(1,(S-Lo)/1e3);Lo=S;for(let C of G.vp.values()){let I=ot.get(C.tid),O=I?I.fam:C.fam;if(O&&$[O]&&!X.has(O))continue;let U=G.delays.get(C.tid),B=typeof U=="number"?U/60:0,J=Math.max(0,_-C.ts);C.mvTs!==C.ts&&((!C.mvW||Math.hypot(C.w[0]-C.mvW[0],C.w[1]-C.mvW[1])>.025)&&(C.mvW=C.w,C.mvAt=C.ts),C.mvTs=C.ts),C.still=C.ts-(C.mvAt||C.ts);let et=C.w,v=-1;if(I){let Z=Xt(I.pat),rt=Z.stopD;if(C.dObs==null||C.obsAt!==C.ts){let dt=ke(Z,C.w,-1,1e9);C.dObs=dt.d,C.err=dt.err,C.obsAt=C.ts}let Et=ae(),$t=t.days.indexOf(Et.ymd),Zt=I.day===$t-1?1440:0,It=I.t0+I.pat.t[1]-Zt;if(C.pre=Et.min+B<It-1&&(C.dObs>rt[0]+.35||C.err>.6)&&!(C.st==="STOPPED_AT"&&C.sid===M[I.pat.stops[0]].id),C.dep0=It,C.pre){if(C.atStop=-1,C.next=0,v=0,C.disp=null,C.prevAt!==C.ts&&(C.prevAt=C.ts,Object.assign(C,Mh(I,C,Et.min,$t))),C.prevTr){let dt=Xt(C.prevTr.pat);et=Me(dt,C.dPrev)}}else if(C.err<=.6){let dt=rt.findIndex(ve=>ve>C.dObs+.08);dt<0&&(dt=rt.length-1);let xe=rt.reduce((ve,hn,He)=>Math.abs(hn-C.dObs)<Math.abs(rt[ve]-C.dObs)?He:ve,0);C.atStop=Math.abs(rt[xe]-C.dObs)<.16?xe:-1,C.next=dt,v=dt;let re=C.dObs;if(C.st==="STOPPED_AT"&&C.atStop>=0)re=rt[C.atStop];else if(dt>0){let ve=(I.pat.t[2*dt]-I.pat.t[2*dt-1])*60,hn=ve>0?(rt[dt]-rt[dt-1])/ve:0,He=ae(),ne=t.days.indexOf(He.ymd),pn=I.day===ne-1?1440:0,fr=wh(I,rt,He.min+pn-I.t0-B),Qe=C.dObs+hn*Math.min(J,60);fr!=null&&(Qe=Math.min(Qe,Math.max(C.dObs,fr))),re=Math.max(C.dObs,Math.min(rt[dt]-.03,Qe))}C.disp==null||Math.abs(C.disp-re)>1.2?C.disp=re:re>C.disp&&(C.disp+=(re-C.disp)*Math.min(1,E*1.5)),et=Me(Z,C.disp)}else if(C.err>2){let dt=ae(),xe=t.days.indexOf(dt.ymd),re=I.day===xe-1?1440:0,ve=Ns(I,dt.min+re-I.t0-B);ve&&(et=ve.w,C.est=!0,v=ve.next),C.atStop=-1,C.next=ve?ve.next:-1}else C.atStop=-1,C.next=-1}let R=C.pre?"":C.st==="STOPPED_AT"&&C.atStop>=0||C.atStop>=0&&C.still>30?"st":C.still>=90?"via":"";h.push({tr:I,v:C,w:et,stop:R,p:{w:et},fam:O||"?",c:I?I.c:$[O]||"#6b7385",dl:B,live:!0,real:!0,idx:v,age:J,cancel:U==="X"})}return h}let qn=new Map,b=!1,z=!1,st="",j=[],tt=0,Ct=null,xt=null,Tt=-1,Dt=!1,jt=0,be="";function Ee(h){let _=At>0||k()&&Qt==null||!!xt,S=_?50:250;if(h-tt<S)return!1;tt=h,[...Ot()].join()!==ee&&(ce(),Te());{let v=P(),R=v?v.sn.t:"";pe.cur=v,R!==pe.key&&(pe.key=R,Re()),!v&&!ae().live&&!Ce.at&&Ve()}let E=ae(),C=k()&&E.live,I=C?{k:t.days.indexOf(E.ymd),out:Eh()}:Us(E);j=I.out;let O=new ue,U=0,B=0;for(let v of j){if(U>=we)break;kn[U*3]=v.p.w[0],kn[U*3+1]=v.p.w[1],kn[U*3+2]=F+.02;let R=null;if(v.real&&v.v.pre&&v.v.prevTr)R=Me(Xt(v.v.prevTr.pat),v.v.dPrev+.35);else if(v.real&&v.tr&&!v.v.pre&&v.v.err<=.6&&v.v.disp!=null&&!(v.v.st==="STOPPED_AT"&&v.v.atStop>=0))R=Me(Xt(v.tr.pat),v.v.disp+.35);else if(!v.real&&v.p.moving){let Zt=v.tr.pat.t,It=v.p.prev,dt=Zt[2*It+1],xe=Zt[2*It+2],re=xe>dt?(v.rel-dt)/(xe-dt):1;R=aa(v.tr.pat.segs[It],Math.min(1,Ds(g(re,0,1))+.04))}let Z=v.real?!!v.stop:!v.p.moving;if(v.broke=zd(v),v.broke)Ki[U]=85;else if(Z)Ki[U]=75;else if(R){let Zt=Do(v.p.w),It=Do(R),dt=It[0]-Zt[0],xe=It[1]-Zt[1];Ki[U]=Math.hypot(dt,xe)>.05?Math.atan2(dt,-xe):99}else Ki[U]=99;O.set(v.c||v.tr.c),cr[U*3]=O.r,cr[U*3+1]=O.g,cr[U*3+2]=O.b;let rt=v.tr?v.tr===xt:xt&&xt.vtid===v.v.tid;na[U]=rt?22:r.dist<45?17:14,ia[U]=rt?3.5:2.2;let Et=v.real&&v.stop==="via"||!!v.broke,$t=v.cancel||v.broke?[.86,.15,.15]:v.dl>10?[.86,.15,.15]:v.dl>5?[.92,.48,.05]:v.dl>=1?[.98,.8,.08]:[.09,.64,.29];(v.live&&v.dl>=5||rt||Et)&&(hi[B*3]=v.p.w[0],hi[B*3+1]=v.p.w[1],hi[B*3+2]=F+.01,ur.set(rt?$t:Et?[.86,.15,.15]:[.98,.45,.09],B*3),sa[B]=na[U]+(rt?16+5*Math.sin(h/220):Et?10+3*Math.sin(h/400):8),ra[B]=rt?2:3,B++),U++}if(cn.setDrawRange(0,U),Pi.setDrawRange(0,B),["position","fill","size","bw"].forEach(v=>{cn.attributes[v].needsUpdate=!0,Pi.attributes[v].needsUpdate=!0}),cn.attributes.ang.needsUpdate=!0,Ct){let v=j.find(R=>R.tr===Ct);if(v){let R=0,Z=innerHeight,rt=u.style.display!=="none"&&!u.classList.contains("min")?u.getBoundingClientRect():null,Et=p("#rc").getBoundingClientRect();innerWidth<=640&&(rt&&(R=rt.bottom),Z=Math.min(Z,Et.top));let $t=R+(Z-R)/2,Zt=$t-innerHeight/2,It=2*s.dist*Math.tan(17.5*Math.PI/180)/innerHeight;s.tx=v.p.w[0]-Math.sin(r.yaw)*Zt*It,s.ty=v.p.w[1]+Math.cos(r.yaw)*Zt*It}else k()&&ae().live&&(Ct=null)}let J=at(Math.floor(E.min+1e-6));J!==be&&(be=J,p("#ctime").textContent=J),p("#ntr").textContent=String(j.length),p("#ntrl").textContent=C?"trenes de Rodalies con posici\xF3n real":"trenes previstos seg\xFAn el horario";{let v=X.size<V.length?[...X].sort(L).join(", "):"",R=p("#ccount"),Z=pe.cur?`\u23EA ${j.length} trenes con los retrasos reales de las ${pe.cur.sn.t} \xB7 ${Object.values(pe.cur.sn.d).filter(rt=>rt>=60).length} iban con retraso`:!E.live&&E.min<gt(new Date).min-1&&!At?`\u23EA Hora pasada seg\xFAn horario${Ce.hoy&&Ce.hoy.snaps&&Ce.hoy.snaps.some(rt=>rt.d)?` \xB7 hay retrasos reales desde las ${Ce.hoy.snaps.find(rt=>rt.d).t}`:" \xB7 a\xFAn no hay fotos con retrasos reales de hoy"}`:`\u{1F686} ${j.length} ${C?"trenes con posici\xF3n real":"trenes previstos"}${v?` <small>\xB7 ${f(v)}</small>`:""}`;R&&R._t!==Z&&(R.innerHTML=Z,R._t=Z)}let et=new Date;if(p("#cdate").textContent=E.live?"hora actual":At?"simulaci\xF3n \xD7"+At:fi?"en pausa":"hora elegida",I.k<0?p("#src").innerHTML=`<b style="color:#c2410c">Sin horarios para hoy.</b> Los datos guardados van del ${Le(t.days[0])} al ${Le(t.days[t.days.length-1])}: actualiza la app.`:C?p("#src").textContent=`En directo \xB7 posiciones de Renfe de hace ${Math.round(Math.max(0,Date.now()/1e3-Math.max(...[...G.vp.values()].map(v=>v.ts),0)))} s`:fe()&&E.live?p("#src").innerHTML='<b style="color:#c2410c">Renfe no publica ahora posiciones de Rodalies:</b> trenes seg\xFAn horario':p("#src").innerHTML='<b style="color:#c2410c">No es tiempo real:</b> '+(G.url?"sin conexi\xF3n con el puente, ":"conecta el puente para ver los trenes reales; ")+"posiciones calculadas con el horario",E.live){let v=Math.round(E.min),R=p("#tsl");document.activeElement!==R&&(R.value=v<240?v+1440:v)}{let v=xt?String(xt.num||xt.vtid||""):"";v!==Ee._sk&&(Ee._sk=v,en(!0))}return en(),h-jt>3e3&&(xt||Tt>=0||Dt||z||st)&&(jt=h,Ge()),Re(),!0}let Jt=-1,Ie=(()=>{try{return localStorage.getItem("rod_mun")==="1"}catch{return!1}})(),Ke=[],Ue=document.createElement("button");Ue.type="button",Ue.id="mbtn",Ue.title="Ver los nombres de los municipios",Ue.innerHTML="\u{1F3D8}\uFE0F<span>Municipios</span>",Ue.onclick=()=>{Ie=!Ie;try{localStorage.setItem("rod_mun",Ie?"1":"")}catch{}Ue.classList.toggle("on",Ie),a(),ei()},Ue.classList.toggle("on",Ie),document.body.appendChild(Ue);let Xe=A.slice().sort((h,_)=>_.pop-h.pop);function _n(h){if(h._a)return h._a;let _=null,S=0;for(let E of h.rings||[]){let C=E[0];if(!C)continue;let I=0,O=0,U=0;for(let B=0,J=C.length;B<J;B+=2){let et=C[B],v=C[B+1],R=C[(B+2)%J],Z=C[(B+3)%J],rt=et*Z-R*v;I+=rt,O+=(et+R)*rt,U+=(v+Z)*rt}Math.abs(I)>S&&(S=Math.abs(I),_=[O/(3*I),U/(3*I)])}return h._a=_?[(_[0]-l)*o,(_[1]-c)*o]:[h.cx,h.cy]}let qt=h=>h>=1e5?1:h>=2e4?2:h>=5e3?3:4,En=[0,7.6,6.7,6,5.4],Fe=[0,17,15,13,12],Yn=h=>h.replace(/^(.*), (el|la|les|els|los|las)$/i,"$2 $1").replace(/^(.*), l'$/i,"l'$1");function ei(){let h=s.tilt<.06&&r.tilt<.08;Ue.classList.toggle("show",h);let _=0;if(Ie&&h){let S=[...document.querySelectorAll(".plab, .slab")].filter(I=>I.offsetParent!==null||I.style.display==="block").map(I=>{let O=I.getBoundingClientRect();return[O.left-2,O.top-2,O.right+2,O.bottom+2]}).filter(I=>I[2]>I[0]),E=r.dist,C=E>160?5e4:E>130?2e4:E>105?8e3:E>80?3e3:E>62?800:0;for(let I of Xe){let O=qt(I.pop);if(I.pop<C)break;let U=_n(I);if(zn.set(U[0],U[1],F).project(n),Math.abs(zn.x)>1.02||Math.abs(zn.y)>1.02)continue;let B=(zn.x*.5+.5)*innerWidth,J=(-zn.y*.5+.5)*innerHeight,et=Yn(I.name),v=et.length*En[O]+8,R=Fe[O],Z=[B-v/2,J-R/2,B+v/2,J+R/2];if(S.some(Et=>Z[0]<Et[2]&&Et[0]<Z[2]&&Z[1]<Et[3]&&Et[1]<Z[3]))continue;S.push(Z);let rt=Ke[_]||(Ke[_]=Object.assign(document.createElement("div"),{className:"mlab"}));rt.isConnected||document.body.appendChild(rt),rt._n!==et&&(rt.textContent=et,rt._n=et),rt._t!==O&&(rt.className="mlab t"+O,rt._t=O),rt.style.transform=`translate(${Math.round(B)}px,${Math.round(J)}px) translate(-50%,-50%)`,rt.style.display="block",_++}}for(;_<Ke.length;_++)Ke[_].style.display="none"}let Ce={at:0,hoy:null,ayer:null,err:""},ps="https://raw.githubusercontent.com/elMonoAmelio/catalunya-survival/stats/";function Ve(){Date.now()-Ce.at<5*6e4||(Ce.at=Date.now(),Promise.all(["hoy","ayer","hist"].map(h=>fetch(ps+h+".json",{cache:"no-store"}).then(_=>_.ok?_.json():null).catch(()=>null))).then(([h,_,S])=>{Ce.hoy=h,Ce.ayer=_,Ce.hist=S,Ce.tr=null,Ce.err=h?"":"sin datos",z&&(u._h="",Ge()),en(!0)}))}function tn(h){let _={};for(let E of h&&h.snaps||[])for(let C of E.r||[]){let I=/^\d+[A-Z](\d+)/.exec(C);I&&(_[I[1]]=_[I[1]]||[]).push(Math.max(0,E.d&&E.d[C]||0)/60)}let S={};for(let E in _){let C=_[E].sort((I,O)=>I-O);S[E]=Math.round(C[C.length>>1])}return S}function ui(h){if(!Ce.tr){let S=new Map;for(let E of Ce.hist&&Ce.hist.days||[])S.set(E.day,E.tr);for(let E of[Ce.ayer,Ce.hoy])if(E&&E.day&&!S.has(E.day)){let C=tn(E);Object.keys(C).length&&S.set(E.day,C)}Ce.tr=S}let _=[...Ce.tr.values()].map(S=>S[String(h)]).filter(S=>S!=null);return _.length?{n:_.length,late:_.filter(S=>S>=5).length,avg:_.reduce((S,E)=>S+E,0)/_.length}:null}let Oe=h=>h>=90?"g":h>=80?"y":h>=65?"w":"b",Tn={g:"#16a34a",y:"#eab308",w:"#ea7a0c",b:"#dc2626"},ji=h=>h>10?Tn.b:h>5?Tn.w:h>=1?Tn.y:Tn.g,Li=h=>(h>=.05?"+":"")+(Math.round(h*10)/10).toString().replace(".",",")+" min";function oa(h,_,S){return`<div class="sbars">${h.map(E=>`<div class="sbar" title="${f(E.tip||"")}"><span class="sl">${E.lab}</span><span class="st"><i style="width:${Math.max(2,Math.round(E.w*100))}%;background:${E.c}"></i></span><b class="sv" style="color:${E.c===Tn.y?"#a16207":E.c}">${E.val}</b></div>`).join("")}</div>`}function Xm(h){if(h=(h||[]).filter(U=>U.n>=10),!h||h.length<2){let U=h&&h[0];return U?`<p class="snote">Primera foto del d\xEDa a las ${U.t}: ${Math.round(U.ok/U.n*100)} % puntuales de ${U.n} trenes. El gr\xE1fico aparece con la segunda foto.</p>`:'<p class="snote">A\xFAn no hay fotos de hoy.</p>'}let _=300,S=92,E=22,C=U=>E+U*(_-E-6)/(h.length-1),I=U=>6+(100-U)/100*(S-22),O=h.map((U,B)=>[C(B),I(U.n?U.ok/U.n*100:100),U]);return`<svg class="schart" viewBox="0 0 ${_} ${S}" role="img" aria-label="Porcentaje de trenes puntuales a lo largo del d\xEDa">
      ${[100,75,50].map(U=>`<line x1="${E}" x2="${_-4}" y1="${I(U)}" y2="${I(U)}" class="gl"/><text x="2" y="${I(U)+3}" class="ax">${U}%</text>`).join("")}
      <polyline points="${O.map(U=>U[0].toFixed(1)+","+U[1].toFixed(1)).join(" ")}" class="ln"/>
      ${O.map(([U,B,J])=>`<circle cx="${U.toFixed(1)}" cy="${B.toFixed(1)}" r="5" class="pt"><title>${J.t} \xB7 ${J.n?Math.round(J.ok/J.n*100):100}% puntuales \xB7 ${J.n} trenes \xB7 ${J.d5} con +5 min \xB7 retraso medio ${Li(J.avg)}${J.nd?` \xB7 ${J.nd} sin dato`:""}</title></circle>`).join("")}
      <text x="${E}" y="${S-3}" class="ax">${h[0].t}</text><text x="${_-4}" y="${S-3}" class="ax" text-anchor="end">${h[h.length-1].t}</text></svg>`}function qm(){Ve();let h=ae(),_=j.filter(U=>U.real&&k()&&h.live),S=_.filter(U=>G.delays.has(U.v.tid)),E=S.length,C=_.length-E,I='<div class="tc sts" style="--c:#1d2330"><button class="x" data-cx>\xD7</button><h3>\u{1F4CA} Estad\xEDsticas</h3>';if(E){let U=S.filter(It=>It.dl<3).length,B=S.filter(It=>It.dl>=5).length,J=S.filter(It=>It.stop==="via").length,et=Math.round(U/E*100);I+=`<small>Ahora mismo \xB7 ${E} trenes con retraso publicado por Renfe${C?` \xB7 ${C} sin dato (no se cuentan)`:""}</small><div class="kpis">
        <div class="kpi ${Oe(et)}"><b>${et}%</b><span>puntuales</span></div>
        <div class="kpi ${Oe(100-B/E*100*2)}" title="${Math.round(B/E*100)} % de los trenes"><b>${B}</b><span>con 5 min<br>o m\xE1s</span></div>
        <div class="kpi ${J===0?"g":J<=2?"w":"b"}"><b>${J}</b><span>detenidos<br>en la v\xEDa</span></div></div>`;let v=new Map;S.forEach(It=>{let dt=It.fam,xe=v.get(dt)||{n:0,ok:0,sum:0};xe.n++,xe.ok+=It.dl<3,xe.sum+=Math.max(0,It.dl),v.set(dt,xe)});let R=[...v].filter(([It])=>$[It]).sort((It,dt)=>It[1].ok/It[1].n-dt[1].ok/dt[1].n||dt[1].sum/dt[1].n-It[1].sum/It[1].n),Z=R.filter(([,It])=>It.ok<It.n),rt=R.filter(([,It])=>It.ok===It.n);I+="<h4>Puntualidad por l\xEDnea ahora</h4>"+(Z.length?"":'<p class="snote">\u2713 Todas las l\xEDneas van puntuales.</p>')+oa(Z.map(([It,dt])=>({lab:Zn(It),w:dt.ok/dt.n,c:Tn[Oe(dt.ok/dt.n*100)],val:`${Math.round(dt.ok/dt.n*100)}% <small>${Li(dt.sum/dt.n)}</small>`,tip:`${It}: ${dt.ok} de ${dt.n} trenes puntuales \xB7 retraso medio ${Li(dt.sum/dt.n)}`})))+(rt.length?`<p class="snote">Puntuales al 100 %: ${rt.map(([It])=>Zn(It)).join(" ")}</p>`:"");let Et=new Map;S.forEach(It=>{if(!It.tr||It.v.next==null||It.v.next<0||It.v.pre)return;let dt=It.tr.pat.stops[It.v.next],xe=Et.get(dt)||{n:0,sum:0};xe.n++,xe.sum+=Math.max(0,It.dl),Et.set(dt,xe)});let $t=[...Et].filter(([,It])=>It.sum/It.n>=1).sort((It,dt)=>dt[1].sum/dt[1].n-It[1].sum/It[1].n).slice(0,8),Zt=$t.length?$t[0][1].sum/$t[0][1].n:1;I+='<h4>Estaciones con m\xE1s retraso ahora</h4><small class="snote">Retraso medio de los trenes que van a llegar a cada estaci\xF3n</small>'+($t.length?oa($t.map(([It,dt])=>({lab:`<span class="sn" data-gs="${It}">${f(M[It].n)}</span>`,w:dt.sum/dt.n/Zt,c:ji(dt.sum/dt.n),val:`${Li(dt.sum/dt.n)} <small>${dt.n} ${dt.n===1?"tren":"trenes"}</small>`,tip:`${M[It].n}: ${dt.n} trenes llegando con ${Li(dt.sum/dt.n)} de media`}))):'<p class="snote">\u2713 Ning\xFAn tren llega con retraso ahora mismo.</p>')}else I+='<p class="snote">Las estad\xEDsticas en directo necesitan el puente de tiempo real conectado.</p>';let O=Ce.hoy;I+=`<button type="button" class="hmore" data-cols>${ni.on?"\u25BE Quitar columnas del mapa":"\u{1F3D9}\uFE0F Ver el retraso de cada estaci\xF3n en 3D"}</button>`;{Lh("");let U=[...Bs.m].filter(([B,J])=>$[B]&&J[0]>=3).map(([B,J])=>[B,J[1]/J[0]]).sort((B,J)=>B[1]-J[1]);U.length&&(I+='<h4>\xBFDe qu\xE9 trenes da posici\xF3n Renfe?</h4><small class="snote">De los trenes que seg\xFAn horario circulan ahora, cu\xE1ntos se ven en directo. Si es bajo, en esa l\xEDnea el mapa usa el horario y no avisamos de \xABsin se\xF1al\xBB.</small>'+oa(U.slice(0,8).map(([B,J])=>({lab:Zn(B),w:J,c:Tn[Oe(J*100)],val:`${Math.round(J*100)}%`,tip:`${B}: ${Math.round(J*100)} % de los trenes en circulaci\xF3n con posici\xF3n de Renfe`}))))}{let U=et=>{let v=(et&&et.snaps||[]).filter(rt=>rt.n),R=v.reduce((rt,Et)=>rt+Et.n,0),Z=v.reduce((rt,Et)=>rt+Et.ok,0);return R?Z/R*100:null},B=U(Ce.hoy),J=U(Ce.ayer);B!=null&&(I+=`<div class="cmp"><span>Hoy <b class="${Oe(B)}">${Math.round(B)} %</b> puntuales</span>${J!=null?`<span>Ayer <b class="${Oe(J)}">${Math.round(J)} %</b></span><span>${B>=J?"\u25B2 mejor":"\u25BC peor"} que ayer</span>`:""}</div>`)}if(I+="<h4>Hoy, a lo largo del d\xEDa</h4>",O&&O.snaps){I+=Xm(O.snaps);let U=Object.entries(O.st||{}).map(([et,v])=>[Ht.get(et),v]).filter(([et,v])=>et!=null&&v.n>=3).map(([et,v])=>[et,v.sum/v.n/60,v]).filter(et=>et[1]>=1).sort((et,v)=>v[1]-et[1]).slice(0,8);if(U.length){let et=U[0][1];I+='<h4>Estaciones con m\xE1s retraso hoy</h4><small class="snote">Retraso medio de los trenes al llegar \xB7 al menos 3 mediciones</small>'+oa(U.map(([v,R,Z])=>({lab:`<span class="sn" data-gs="${v}">${f(M[v].n)}</span>`,w:R/et,c:ji(R),val:`${Li(R)} <small>m\xE1x +${Math.round(Z.max/60)}</small>`,tip:`${M[v].n}: ${Z.n} mediciones hoy (foto cada 15 min) \xB7 ${Z.d5} con 5 min o m\xE1s \xB7 peor +${Math.round(Z.max/60)} min`})))}let B=Object.entries(O.lines||{}).filter(([et,v])=>$[et]&&v.n>=3).sort((et,v)=>et[1].ok/et[1].n-v[1].ok/v[1].n);B.length&&(I+="<h4>L\xEDneas hoy</h4>"+oa(B.map(([et,v])=>({lab:Zn(et),w:v.ok/v.n,c:Tn[Oe(v.ok/v.n*100)],val:`${Math.round(v.ok/v.n*100)}% <small>${Li(v.sum/v.n/60)}</small>`,tip:`${et} hoy: ${Math.round(v.ok/v.n*100)}% de las mediciones puntuales \xB7 peor retraso +${Math.round(v.max/60)} min`}))));let J=O.upd?(Date.now()-Date.parse(O.upd))/6e4:0;I+=`<small class="snote">${J>40?`<b>\xDAltima foto hace ${Math.round(J)} min</b> (GitHub a veces retrasa las tareas autom\xE1ticas) \xB7 `:""}Foto cada 15 min del tiempo real de Renfe \xB7 actualizado ${f((O.upd||"").slice(11,16))} \xB7 ${(O.note||"").includes("Solo cuentan")?"solo cuentan los trenes con dato de retraso":"las fotos anteriores a las 12:20 contaban como puntuales los trenes sin dato"}</small>`}else I+=`<p class="snote">${Ce.at?"El hist\xF3rico de hoy a\xFAn no est\xE1 disponible: se va reuniendo cada 15 min.":"Cargando\u2026"}</p>`;return I+"</div>"}function Ym(h){let _=ae(),S=j.filter(R=>(R.fam||R.tr&&R.tr.fam)===h),E=S.filter(R=>R.real),C=S.length,I=S.filter(R=>R.dl>=5).length,O=S.filter(R=>R.dl<3).length,U=S.filter(R=>R.stop==="via"||R.broke).length,B=G.alerts.filter(R=>R.fams.has(h)),J=R=>{let Z=R.tr;if(!Z)return"";let rt=R.v;if(R.real&&rt){let $t=rt.next>=0?M[Z.pat.stops[rt.next]].n:"";return rt.atStop>=0?`en ${M[Z.pat.stops[rt.atStop]].n}`:$t?`hacia ${$t}`:""}let Et=R.p;return Et&&Et.next!=null&&Et.next>=0?`hacia ${M[Z.pat.stops[Et.next]].n}`:""},et=S.slice().sort((R,Z)=>Z.dl-R.dl).slice(0,40).map(R=>{let Z=R.tr;return`<li class="go${da({num:Z?Z.num:R.v.num,tid:Z?Z.tid:R.v.tid})?" sel":""}" data-gt="${f(Z?Z.num:R.v.num)}|${f(R.real?R.v.tid:Z?Z.tid:"")}"><b>${f(Z?Z.num:R.v.num)}</b><span>${Z?Di(M[Z.pat.stops[Z.pat.stops.length-1]].n,h):""} <small>${f(J(R))}</small></span>${R.dl>=1?`<em class="dl ${Qi(R.dl)}">+${Math.round(R.dl)}</em>`:'<i class="via">en hora</i>'}</li>`}).join(""),v=Lh(h);return`<div class="tc sts" style="--c:${$[h]||"#1d2330"}"><button class="x" data-cx>\xD7</button><h3>${Zn(h)} Estado de la l\xEDnea</h3><small>${_.live?`Ahora \xB7 ${C} trenes${E.length<C?` (${E.length} con posici\xF3n de Renfe)`:""}`:`Seg\xFAn horario a las ${at(_.min)}`}</small>
      <div class="kpis"><div class="kpi ${Oe(C?O/C*100:100)}"><b>${C?Math.round(O/C*100):100}%</b><span>puntuales</span></div><div class="kpi ${I?I/Math.max(1,C)>.2?"b":"w":"g"}"><b>${I}</b><span>con 5 min<br>o m\xE1s</span></div><div class="kpi ${U?"b":"g"}"><b>${U}</b><span>detenidos</span></div></div>
      ${B.length?Zm(B):'<p class="snote">\u2713 Sin avisos de Rodalies para esta l\xEDnea</p>'}${v<.7?`<p class="snote">Renfe solo da posici\xF3n de ${Math.round(v*100)} % de los trenes de esta l\xEDnea: el resto se muestra seg\xFAn horario.</p>`:""}
      <small style="margin-top:6px">Trenes de m\xE1s a menos retraso \xB7 toca uno para verlo</small><ol>${et||"<li><span>No hay trenes de esta l\xEDnea ahora</span></li>"}</ol>
      <div class="rtb"><button type="button" data-share>\u{1F4E4} Compartir estado</button></div></div>`}let Zm=h=>`<div class="al">${h.slice(0,3).map(_=>`<p>\u26A0\uFE0F ${Vo(_)} ${f(_.txt)} <small>${Ho(_)}</small></p>`).join("")}</div>`,ni={on:!1,mesh:null};function Jm(){let h=Ce.hoy,_=[];if(h&&h.st)for(let[S,E]of Object.entries(h.st)){let C=Ht.get(S);C!=null&&E.n>=2&&_.push([C,E.sum/E.n/60,E.n])}if(!_.length){let S=new Map;j.forEach(E=>{if(!E.real||!E.tr||E.v.next==null||E.v.next<0||E.v.pre||!G.delays.has(E.v.tid))return;let C=E.tr.pat.stops[E.v.next],I=S.get(C)||[0,0];I[0]+=Math.max(0,E.dl),I[1]++,S.set(C,I)}),S.forEach((E,C)=>_.push([C,E[0]/E[1],E[1]]))}return _}function Km(){if(ni.mesh&&(e.remove(ni.mesh),ni.mesh.geometry.dispose(),ni.mesh.material.dispose(),ni.mesh=null),!ni.on){a();return}let h=Jm();if(!h.length){an("A\xFAn no hay datos de retraso por estaci\xF3n"),ni.on=!1;return}let _=new Xa(.32,.32,1,16);_.rotateX(Math.PI/2),_.translate(0,0,.5);let S=new qs({fog:!1}),E=new Ha(_,S,h.length),C=new ze,I=new ue;h.forEach(([O,U],B)=>{let J=.3+Math.min(U,40)*.3;C.makeScale(1,1,J),C.setPosition(M[O].w[0],M[O].w[1],F),E.setMatrixAt(B,C),I.set(U>10?"#dc2626":U>5?"#ea7a0c":U>=1?"#eab308":"#16a34a"),E.setColorAt(B,I)}),E.renderOrder=25,E.frustumCulled=!1,e.add(E),ni.mesh=E,s.tilt<.5&&(s.tilt=.85),a()}let dr=document.createElement("button");dr.type="button",dr.id="sbtn",dr.title="Estad\xEDsticas de puntualidad",dr.innerHTML="\u{1F4CA}<span>Estad\xEDsticas</span>",dr.onclick=()=>{z=!z,z&&(b=Dt=!1,Ce.at=0),u._h="",Ge(),a()},document.body.appendChild(dr);function jm(){r.dist<45!=Jt<45&&(Jt=r.dist,Te()),Qm(),ei()}let la=[],zn=new W;function Qm(){let h=r.dist<30,_=0;if(h){let S=[];for(let E=0;E<Pt;E++)Vt[E]<4||(zn.set(M[E].w[0],M[E].w[1],F).project(n),!(zn.z>1||Math.abs(zn.x)>1.05||Math.abs(zn.y)>1.05)&&S.push([E,(zn.x*.5+.5)*innerWidth,(-zn.y*.5+.5)*innerHeight]));if(S.length<=70)for(let[E,C,I]of S){let O=la[_]||(la[_]=Object.assign(document.createElement("div"),{className:"slab"}));O.isConnected||document.body.appendChild(O),O.textContent=M[E].n,O.dataset.i=E,O.style.display="block",O.style.transform=`translate(${Math.round(C+8)}px,${Math.round(I-7)}px)`,_++}}for(;_<la.length;_++)la[_].style.display="none"}function Do(h){return zn.set(h[0],h[1],F).project(n),[(zn.x*.5+.5)*innerWidth,(-zn.y*.5+.5)*innerHeight,zn.z]}function Bd(h,_,S,E){let C=null,I=S*S;for(let O of j){let[U,B,J]=Do(O.p.w);if(J>1)continue;let et=(U-h)**2+(B-_)**2;et<I&&(I=et,C={a:O})}if(C)return C;I=E*E;for(let O=0;O<Pt;O++){if(!Vt[O])continue;let[U,B,J]=Do(M[O].w);if(J>1)continue;let et=(U-h)**2+(B-_)**2;et<I&&(I=et,C={s:O})}return C}let Fs=!1;window.__rodHide=()=>{Fs=!0},document.addEventListener("click",h=>{Fs&&!h.target.closest("#mcs, canvas")&&(Fs=!1)},!0),window.__rodTap=(h,_)=>{let S=null,E=1e9;for(let I of la){if(I.style.display==="none")continue;let O=I.getBoundingClientRect();if(h>=O.left-4&&h<=O.right+4&&_>=O.top-4&&_<=O.bottom+4){let U=Math.abs(_-(O.top+O.bottom)/2)*4+(h-O.left);U<E&&(E=U,S=I)}}if(S)return window.__rodPickStation(+S.dataset.i),!0;let C=Bd(h,_,24,18);return C&&(C.a||C.s!=null)&&(Fs=!1),C&&C.a?(b=!1,Dt=!1,z=!1,xt=C.a.tr||{vtid:C.a.v.tid},Tt=-1,Ct=null,Te(),Ge(),tt=0,a(),!0):C&&C.s!=null?(b=!1,Dt=!1,z=!1,Tt=C.s,xt=null,Ct=null,Te(),Ge(),a(),!0):!1},window.__rodHover=(h,_)=>{let S=Bd(h,_,14,10);if(S&&S.a){let E=S.a,C=E.tr?M[E.tr.pat.stops[E.tr.pat.stops.length-1]].n:"";return`<b><span style="color:${E.c}">\u25A0</span> ${f(E.fam||E.tr&&E.tr.fam||"?")} \xB7 tren ${f(E.tr?E.tr.num:E.v.num)}</b><small>${C?"hacia "+f(C):""}${E.real?(E.dl>=1?` \xB7 <b style="color:#c2410c">+${Math.round(E.dl)} min</b>`:" \xB7 puntual")+" \xB7 en directo":" \xB7 previsto"}</small>`}return S&&S.s!=null?`<b>${f(M[S.s].n)}</b><small>${[...M[S.s].fams].sort(L).join(" \xB7 ")}</small>`:null},window.__rodPickStation=h=>{Fs=!1,b=Dt=z=!1,xt=null,Ct=null,Tt=h,Te(),u._h="",Ge(),a()};{let h=p("#rc"),_=()=>{let S=h.getBoundingClientRect().top;document.documentElement.style.setProperty("--mcsmax",Math.max(160,S-64-10)+"px")};try{new ResizeObserver(_).observe(h)}catch{}addEventListener("resize",_),setTimeout(_,300)}if("serviceWorker"in navigator&&location.protocol==="https:"){let h=!1,_=!!navigator.serviceWorker.controller;navigator.serviceWorker.addEventListener("controllerchange",()=>{_&&!h&&(h=!0,location.reload())}),navigator.serviceWorker.register("./sw.js").then(S=>{S.update().catch(()=>{}),document.addEventListener("visibilitychange",()=>{document.hidden||S.update().catch(()=>{})})}).catch(()=>{})}setTimeout(()=>{try{Ve()}catch{}},2500),setInterval(()=>{try{Ce.at=0,Ve()}catch{}},15*6e4);let _i={mode:(()=>{try{return localStorage.getItem("rod_theme")||"auto"}catch{return"auto"}})()},ca=matchMedia("(prefers-color-scheme: dark)");function Th(){let h=_i.mode==="dark"||_i.mode==="auto"&&ca.matches;document.documentElement.classList.toggle("dark",h);for(let S=0;S<Pt;S++)Bt.set(h?[.06,.08,.11]:[1,1,1],S*3);q.attributes.fill.needsUpdate=!0,ie.uniforms.border.value.set(h?"#e7ebf3":"#1d2330"),window.__mapTheme&&window.__mapTheme(h),Os.textContent=_i.mode==="auto"?h?"\u{1F319}":"\u2600\uFE0F":_i.mode==="dark"?"\u{1F319}":"\u2600\uFE0F",Os.title="Modo noche: "+{auto:"autom\xE1tico (como el m\xF3vil)",dark:"siempre activado",light:"desactivado"}[_i.mode];let _=document.querySelector("meta[name=theme-color]");_&&(_.content=h?"#0d1119":"#eef1f5"),a()}let Os=document.createElement("button");Os.type="button",Os.id="tbtn",Os.onclick=()=>{_i.mode=_i.mode==="auto"?ca.matches?"light":"dark":_i.mode==="dark"?"light":"dark",_i.mode==="dark"===ca.matches&&(_i.mode="auto");try{localStorage.setItem("rod_theme",_i.mode)}catch{}Th(),an(Os.title)},document.body.appendChild(Os);{let h=document.createElement("a");h.id="wabtn",h.href="https://www.whatsapp.com/channel/0029Vav4hGTId7nPenKMuo2C",h.target="_blank",h.rel="noopener",h.title="Canal de avisos de Rodalies en WhatsApp",h.innerHTML='<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path fill="#25d366" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2z"/><path fill="#fff" d="M8.6 7.2c.2-.4.4-.4.7-.4h.5c.2 0 .4 0 .6.5l.8 1.9c.1.2.1.4 0 .6l-.5.7c-.1.2-.2.3 0 .6.5.8 1.1 1.5 1.9 2 .3.2.4.1.6 0l.7-.8c.2-.2.4-.2.6-.1l1.8.9c.3.1.4.2.4.4 0 .5-.2 1.2-.8 1.6-.6.4-1.5.6-2.9 0-1.6-.7-3-2-3.9-3.4-.8-1.2-1.1-2.4-.5-3.5z"/></svg><span>Avisos WhatsApp</span>',document.body.appendChild(h)}ca.addEventListener&&ca.addEventListener("change",Th),Th(),window.__rodTick=Ee,window.__rodFrame=jm,window.__rodResize=()=>{Rt.resolution.set(innerWidth,innerHeight),Lt.resolution.set(innerWidth,innerHeight)},window.__rodResize();let di={st:-1,f:new Set},kd=h=>{let _=[...M[h].fams].sort(L);return`<div class="sfc">${_.length>1?`<button type="button" data-sf="" class="${di.f.size?"":"on"}">Todas</button>`:""}${_.map(S=>`<button type="button" data-sf="${f(S)}" class="ln ${di.f.size&&!di.f.has(S)?"off":""}${X.has(S)?"":" hid"}" style="--c:${$[S]}">${f(S)}</button>`).join("")}</div>${_.some(S=>!X.has(S))?"<small>Las l\xEDneas apagadas en el filtro general no se muestran</small>":""}`},tg=h=>{let _=(h||"#6b7385").replace("#",""),S=parseInt(_.slice(0,2),16),E=parseInt(_.slice(2,4),16),C=parseInt(_.slice(4,6),16);return(.299*S+.587*E+.114*C)/255>.62?"#1d2330":"#fff"},Di=(h,_)=>{let S=$[_]||"#6b7385";return`<span class="dst" style="background:${S};color:${tg(S)}" title="${f(_||"")}">${f(h)}</span>`},No=h=>{let _=M[h]&&M[h].id;return Vn.st.includes(_)?"\u{1F3E0} ":fn.st.includes(_)?"\u{1F4BC} ":""},Qi=h=>h>10?"d-hi":h>5?"d-md":"d-lo",eg=/aver[ií]|incid[eè]ncia t[eè]cnica|incidencia t[eé]cnica|problema t[eè]cnic|t[eè]cnic[oa] del propi/i,ha={ref:null,m:new Map};function Ah(h){if(ha.ref!==G.alerts){ha.ref=G.alerts,ha.m=new Map;for(let _ of G.alerts){if(_.src!=="Rodalies")continue;let S=_.txt.match(/(?:a causa d[e']|per causa d[e']|debido a|degut a)\s+([^.]{4,140})/i);for(let E of _.txt.matchAll(/\b[Tt]ren\s+(\d{4,6})\b/g))ha.m.set(E[1],{why:S?S[1].trim().replace(/\s+/g," "):"",txt:_.txt,when:_.when,cx:/no circula|no circular[àa]|suprimi|anul[·.]?la|cancel[·.]?la|anulad|cancelad/i.test(_.txt)})}}return ha.m.get(String(h))||null}let ua={ref:null,m:new Map};function zd(h){let _=String(h.tr?h.tr.num:h.v&&h.v.num||"");if(!_)return null;if(ua.ref!==G.alerts){ua.ref=G.alerts,ua.m=new Map;for(let E of G.alerts)if(E.src==="Rodalies"&&eg.test(E.txt))for(let C of E.txt.matchAll(/\b(\d{4,6})\b/g))ua.m.set(C[1],E)}let S=ua.m.get(_);return S?{why:"aviso",txt:S.txt}:h.real&&h.stop==="via"&&h.v.still>=300?{why:"via",min:Math.round(h.v.still/60)}:null}let da=h=>{try{let _=xt;return _?_.num!=null&&String(_.num)===String(h.num)||h.tid&&(_.tid===h.tid||_.vtid===h.tid):!1}catch{return!1}},Vd=(h,_)=>{let S=w(h,_.min-1,_.min+240).sort((E,C)=>E.est-C.est).slice(0,6);return S.length?`<small style="margin-top:6px">\u{1F68C} Servicio por carretera (obras): autobuses que sustituyen al tren</small><ol>${S.map(E=>`<li><b>${at(E.est)}</b>${Zn(E.fam)}<span>${Di(E.dest,E.fam)}</span><i class="via">bus</i></li>`).join("")}</ol>`:""},xi=(()=>{try{return JSON.parse(localStorage.getItem("rod_fav")||"[]")}catch{return[]}})(),ng=()=>{try{localStorage.setItem("rod_fav",JSON.stringify(xi))}catch{}},Hd=h=>!!h&&xi.some(_=>_.num===String(h.num)),rn=(()=>{try{let h=JSON.parse(localStorage.getItem("rod_alarm")||"null");return h&&Date.now()-h.at<4*36e5?h:null}catch{return null}})(),Uo=()=>{try{localStorage.setItem("rod_alarm",JSON.stringify(rn))}catch{}},Fo=(h,_)=>!!(rn&&h&&rn.num===String(h.num)&&rn.sid===M[h.pat.stops[_]].id);function Ch(h,_){try{navigator.vibrate&&navigator.vibrate([400,150,400,150,600])}catch{}an(h+" \xB7 "+_),"Notification"in window&&Notification.permission==="granted"&&(navigator.serviceWorker&&navigator.serviceWorker.getRegistration?navigator.serviceWorker.getRegistration():Promise.resolve(null)).then(S=>S?S.showNotification(h,{body:_,tag:"alarm",requireInteraction:!0,vibrate:[400,150,400,150,600],icon:"icons/icon-192.png"}):new Notification(h,{body:_})).catch(()=>{})}function ig(){if(!rn||rn.done)return;let h=ae();if(!h.live)return;let _=t.days.indexOf(h.ymd),S=(K[_]||[]).find(B=>String(B.num)===rn.num)||(K[_-1]||[]).find(B=>String(B.num)===rn.num);if(!S)return;let E=S.pat.stops.findIndex(B=>M[B].id===rn.sid);if(E<0)return;let C=y(S),I=typeof C=="number"?Math.max(0,C/60):0,O=S.day===_-1?1440:0,U=S.t0+S.pat.t[2*E]+I-O;if(U-h.min<-3){rn.done=!0,Uo();return}U-h.min<=2&&(rn.done=!0,Uo(),Ch(`\u{1F689} Llegas a ${M[S.pat.stops[E]].n}`,`En unos ${Math.max(0,Math.round(U-h.min))} min (${at(U)}) \xB7 prep\xE1rate para bajar`))}function Rh(h,_){let S=+h.t.slice(0,2)*60+ +h.t.slice(3,5),E=K[_]||[],C=(U,B)=>U.t0+U.pat.t[2*B+1],I=null,O=11;for(let U of E){let B=U.pat.stops.findIndex(et=>M[et].id===h.sid);if(B<0||B===U.pat.stops.length-1)continue;let J=Math.abs(C(U,B)-S)+(String(U.num)===h.num?-5:0)+(U.fam===h.fam?0:20)+(h.dest&&M[U.pat.stops[U.pat.stops.length-1]].id!==h.dest?3:0);J<O&&(O=J,I=U)}return I}let Oo=new Set;function sg(){if(!xi.length)return;let h=ae();if(!h.live)return;let _=t.days.indexOf(h.ymd);for(let S of xi){let E=Rh(S,_);if(!E)continue;let C=E.pat.stops.findIndex(et=>M[et].id===S.sid);if(C<0)continue;let I=E.t0+E.pat.t[2*C+1],O=y(E),U=typeof O=="number"?O/60:0,B=I-h.min;if(B<-2||B>60)continue;let J=h.ymd+S.num+(O==="X"?"X":U>=10?10:U>=5?5:0);Oo.has(J)||(O==="X"||U>=5?(Oo.add(J),Ch(`\u2B50 Tu tren de las ${at(I)} ${O==="X"?"est\xE1 cancelado":`va con +${Math.round(U)} min`}`,`${E.fam} ${E.num} desde ${M[E.pat.stops[C]].n}${O==="X"?"":` \xB7 saldr\xE1 hacia las ${at(I+U)}`}`)):B<=20&&!Oo.has(h.ymd+S.num+"ok")&&G.vp.has(E.tid)&&(Oo.add(h.ymd+S.num+"ok"),an(`\u2B50 Tu tren de las ${at(I)} va en hora`)))}}setInterval(()=>{try{ig(),sg()}catch{}},15e3);let Zn=h=>`<span class="ln" style="--c:${$[h]}">${f(h)}</span>`;function Gd(h,_){return _?h==="X"?'<span class="st late">Cancelado</span>':h>=60?`<span class="st late ${Qi(h/60)}">Retraso de ${Math.round(h/60)} min</span>`:'<span class="st ok">Puntual</span>':'<span class="st sch">Seg\xFAn horario \xB7 sin dato en directo</span>'}function Ge(){if(!xt&&Tt<0&&!Dt&&!b&&!z&&!st){Fs=!1,u.innerHTML="",u._h="",u.style.display="none",u.classList.remove("peek"),Oh();return}let h=ae(),_="",S=k()&&h.live,E=(v,R)=>G.alerts.filter(Z=>[...Z.fams].some(rt=>v.has(rt))||R!=null&&Z.stops.has(R)),C=v=>v.length?`<div class="al">${v.slice(0,4).map(R=>`<p>\u26A0\uFE0F ${Vo(R)} ${[...R.fams].sort(L).slice(0,6).map(Zn).join(" ")} ${f(R.txt)} <small>${Ho(R)}</small></p>`).join("")}${v.length>4?`<small>y ${v.length-4} avisos m\xE1s</small>`:""}</div>`:"",I=xt&&S?j.find(v=>v.real&&(xt.vtid?v.v.tid===xt.vtid:v.tr===xt)):null;if(st&&!z&&!b&&!Dt&&!xt&&Tt<0)_=Ym(st);else if(z)_=qm();else if(b)_=`<div class="tc" style="--c:#1d2330"><button class="x" data-cx>\xD7</button><h3>Novedades</h3><small>${f(p("#ver").textContent.replace(" \xB7 novedades y fuentes",""))}</small><ul class="chg">${p("#chg").innerHTML||"<li>Versi\xF3n de prueba</li>"}</ul>
        <h3 style="margin-top:14px">Fuentes</h3><ul class="fts">
        <li><b>Renfe Operadora</b> \xB7 horarios (GTFS), posici\xF3n de los trenes y retrasos (GTFS-RT) \xB7 <a href="https://data.renfe.com" target="_blank" rel="noopener">data.renfe.com</a> \xB7 licencia CC BY 4.0</li>
        <li><b>Rodalies de Catalunya</b> (Generalitat) \xB7 salidas con v\xEDa, cancelaciones y avisos \xB7 <a href="https://rodalies.gencat.cat" target="_blank" rel="noopener">rodalies.gencat.cat</a></li>
        <li><b>Adif</b> \xB7 incidencias en la infraestructura de Catalu\xF1a \xB7 <a href="https://www.adif.es/viajeros/estado-de-la-red" target="_blank" rel="noopener">estado de la red</a> \xB7 \xA9 Adif</li>
        <li><b>OpenStreetMap</b> \xB7 trazado de las v\xEDas \xB7 <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">\xA9 colaboradores de OpenStreetMap</a>, licencia ODbL</li>
        </ul><small>Los datos se muestran tal como los publican sus fuentes. Ante cualquier duda, manda lo que diga el operador en la estaci\xF3n.</small></div>`;else if(Dt){let v=G.alerts.filter(R=>[...R.fams].some(Z=>X.has(Z))||!R.fams.size);_=`<div class="tc" style="--c:#c2410c"><button class="x" data-cx>\xD7</button><h3>Avisos e incidencias</h3><small>${v.length} avisos activos para las l\xEDneas que tienes visibles</small>${v.map(R=>`<div class="al"><p>${Vo(R)} ${[...R.fams].sort(L).map(Zn).join(" ")} <small>${Ho(R)}</small></p><p>${f(R.txt)}</p></div>`).join("")||"<p>Sin avisos activos.</p>"}<small>Fuente: avisos oficiales de Rodalies de Catalunya, incidencias en la v\xEDa de Adif (gestor de la infraestructura)${G.alertsTs&&Date.now()/1e3-G.alertsTs<6*3600?" y de Renfe":` \xB7 los avisos GTFS de Renfe no se muestran: Renfe no los actualiza desde el ${G.alertsTs?new Date(G.alertsTs*1e3).toLocaleDateString("es-ES",{day:"numeric",month:"short"}):"\u2014"}`}</small></div>`}else if(I){let v=I.v,R=I.tr,Z=ne=>f(M[R.pat.stops[ne]].n),rt=R?R.pat.stops.length:0,Et=Ht.get(v.sid),$t=Et!=null?f(M[Et].n):f(v.sid),Zt=R&&v.atStop>=0?Z(v.atStop):"",It=R&&v.next>=0?Z(v.next):$t,dt=R&&v.next>0?Z(v.next-1):"",xe=I.broke||zd(I),re=xe?`<b class="stopv">\u26A0\uFE0F ${xe.why==="aviso"?"Tren averiado seg\xFAn Rodalies":`Posible aver\xEDa: detenido en la v\xEDa desde hace ${xe.min} min`}</b>${R&&dt?` \xB7 entre ${dt} y <b>${It}</b>`:""}`:I.stop==="via"&&R?`<b class="stopv">\u23F8 Detenido</b> ${dt?`entre ${dt} y <b>${It}</b>`:`antes de <b>${It}</b>`} desde hace ${Math.max(1,Math.round(v.still/60))} min`:v.pre&&R?v.prevTr?`A\xFAn no ha empezado este viaje. Est\xE1 terminando el tren <b>${f(v.prevTr.num)}</b> hacia <b>${Z(0)}</b>${v.prevDl>=1?` con <b>+${Math.round(v.prevDl)} min</b>`:""}: llega hacia las <b>${at(v.arrO)}</b> y saldr\xEDa hacia las <b>${at(v.depEst)}</b>${v.preDl>=1?` (horario ${at(v.dep0)})`:""}`:`A\xFAn no ha empezado este viaje: va hacia <b>${Z(0)}</b>, de donde sale a las <b>${at(v.dep0+I.dl)}</b>`:v.st==="STOPPED_AT"&&Zt?`Parado en <b>${Zt}</b>`:Zt&&v.next>=0&&v.atStop!==v.next?`Saliendo de <b>${Zt}</b> hacia <b>${It}</b>`:dt?`Entre ${dt} y <b>${It}</b>`:`Hacia <b>${It}</b>`,ve=G.tu.get(v.tid),hn=ve&&ve.next&&R&&v.next>=0&&ve.next.sid===M[R.pat.stops[v.next]].id&&ve.next.t?new Date(ve.next.t*1e3).toLocaleTimeString("es-ES",{hour:"2-digit",minute:"2-digit"}):"",He=[];if(R){let ne=I.idx>=0?I.idx:0,pn=v.pre?Math.max(I.dl,v.preDl||0):I.dl,fr=Qe=>R.t0+R.pat.t[Qe]+pn;for(let Qe=ne;Qe<rt;Qe++)He.push(`<li class="${No(R.pat.stops[Qe])?"mine":""}${Fo(R,Qe)?" alm":""}"><b>${at(fr(Qe===0?1:2*Qe))}</b><span title="${Z(Qe)}">${No(R.pat.stops[Qe])}${Z(Qe)}</span>${pn>=1?`<em class="dl ${Qi(pn)}">${v.pre?"\u2248":""}+${Math.round(pn)}</em>`:""}${Qe>0?`<button type="button" class="abtn" data-alarm="${Qe}" title="Av\xEDsame 2 min antes de llegar aqu\xED">${Fo(R,Qe)?"\u{1F514}":"\u{1F515}"}</button>`:""}</li>`)}_=`<div class="tc" style="--c:${I.c}"><button class="x" data-cx>\xD7</button><div>${Zn(I.fam)}<b>Tren ${f(R?R.num:v.num)}</b> <span class="lv">\u25CF en directo</span></div>${R?`<h3 class="rt"><span class="o" title="${Z(0)}">${Z(0)}</span><span class="ar">\u2192</span>${Di(M[R.pat.stops[rt-1]].n,R.fam)}</h3>`:""}
        <p>${re}${hn?` \xB7 prevista ${hn}`:""}${v.plat&&v.st==="STOPPED_AT"&&Zt?` \xB7 <b>v\xEDa ${f(v.plat)}</b>`:""}</p><p>${v.pre&&v.prevTr?v.preDl>=1?`<span class="st late">Saldr\xE1 con unos ${Math.round(v.preDl)} min de retraso (estimado)</span>`:'<span class="st ok">Le da tiempo a salir a su hora (estimado)</span>':Gd(G.delays.get(v.tid),G.delays.has(v.tid))}${(()=>{let ne=R&&ui(R.num);return ne&&ne.n>=2?`<span class="thist">\u{1F4CA} \xDAltimos ${ne.n} d\xEDas: ${ne.late?`lleg\xF3 con 5 min o m\xE1s <b>${ne.late} de ${ne.n}</b>`:"<b>siempre puntual</b>"} \xB7 retraso t\xEDpico ${ne.avg<.5?"0":"+"+Math.round(ne.avg)} min</span>`:""})()}${(()=>{let ne=R&&Ah(R.num);return ne?`<span class="why" title="${f(ne.txt)}">${ne.why?"Motivo: "+f(ne.why):"Rodalies ha publicado un aviso de este tren"}</span>`:""})()}</p>
        <small>${v.pre?`Renfe ya le pone el n\xFAmero de su pr\xF3ximo viaje. Posici\xF3n real enviada hace ${Math.round(I.age)} s`:v.est?"Renfe da una posici\xF3n que no encaja con su recorrido: se muestra donde deber\xEDa estar seg\xFAn el horario y su retraso":`Posici\xF3n enviada por Renfe hace ${Math.round(I.age)} s${I.age>120?" \xB7 <b>sin actualizar</b>":""}`}</small>
        ${He.length?`${I.dl>=1||v.pre&&v.preDl>=1?'<small style="margin-top:6px">Horas con el retraso actual</small>':""}<ol class="stops">${He.join("")}</ol>`:""}${C(E(new Set([I.fam])))}
        ${zo(R?R.num:v.num,"",I.fam)}${R?`<div class="rtb two"><button type="button" data-fav>${Hd(R)?"\u2B50 Es tu tren de cada d\xEDa":"\u2606 Mi tren de cada d\xEDa"}</button><button type="button" data-follow>${Ct===R?"Dejar de seguir":"Seguir este tren"}</button></div>`:""}</div>`}else if(xt&&S)_=`<div class="tc" style="--c:#6b7385"><button class="x" data-cx>\xD7</button><h3>Tren ${f(xt.num||xt.vtid||"")}</h3><p>Renfe no da ahora la posici\xF3n de este tren: puede haber terminado su viaje, no haber salido o no estar circulando.</p></div>`;else if(xt){let v=xt,R=v.pat,Z=R.stops.length,rt=y(v),Et=typeof rt=="number"?rt/60:0,$t=t.days.indexOf(h.ymd),Zt=v.day===$t-1?1440:0,It=h.min+Zt-v.t0-Et,dt=Ns(v,It),xe=ne=>v.t0+R.t[ne]+Et,re=ne=>f(M[R.stops[ne]].n),ve="Fuera de servicio ahora";dt&&(ve=dt.moving?`Circulando hacia <b>${re(dt.next)}</b> \xB7 llega ${at(xe(2*dt.next))}`:dt.at===Z-1?`Ha llegado a <b>${re(Z-1)}</b>`:`Parado en <b>${re(dt.at)}</b> \xB7 sale ${at(xe(2*dt.at+1))}`);let hn=dt?dt.next:0,He=[];for(let ne=hn;ne<Z;ne++)He.push(`<li class="${No(R.stops[ne])?"mine":""}${Fo(v,ne)?" alm":""}"><b>${at(xe(2*ne))}</b><span title="${re(ne)}">${No(R.stops[ne])}${re(ne)}</span>${Et>=1?`<em class="dl ${Qi(Et)}">+${Math.round(Et)}</em>`:""}${ne>0?`<button type="button" class="abtn" data-alarm="${ne}" title="Av\xEDsame 2 min antes de llegar aqu\xED">${Fo(v,ne)?"\u{1F514}":"\u{1F515}"}</button>`:""}</li>`);_=`<div class="tc" style="--c:${v.c}"><button class="x" data-cx>\xD7</button><div>${Zn(v.fam)}<b>Tren ${f(v.num)}</b> <span class="pv">previsi\xF3n</span></div><h3 class="rt"><span class="o" title="${re(0)}">${re(0)}</span><span class="ar">\u2192</span>${Di(M[v.pat.stops[Z-1]].n,v.fam)}</h3>
        <p>${ve}</p><p>${Gd(rt,rt!=null)}${(()=>{let ne=ui(v.num);return ne&&ne.n>=2?`<span class="thist">\u{1F4CA} \xDAltimos ${ne.n} d\xEDas: ${ne.late?`lleg\xF3 con 5 min o m\xE1s <b>${ne.late} de ${ne.n}</b>`:"<b>siempre puntual</b>"} \xB7 retraso t\xEDpico ${ne.avg<.5?"0":"+"+Math.round(ne.avg)} min</span>`:""})()}</p><small>Sale ${at(v.t0+R.t[1])} \xB7 llega ${at(v.t0+R.t[2*Z-2])} (horario)</small>
        ${Et>=1?'<small style="margin-top:6px">Horas con el retraso actual</small>':""}<ol class="stops">${He.join("")}</ol>${zo(v.num,"",v.fam)}<div class="rtb two"><button type="button" data-fav>${Hd(v)?"\u2B50 Es tu tren de cada d\xEDa":"\u2606 Mi tren de cada d\xEDa"}</button><button type="button" data-follow>${Ct===v?"Dejar de seguir":"Seguir este tren"}</button></div></div>`}else{let v=Tt,R=t.days.indexOf(h.ymd),Z=[];di.st!==v&&(di.st=v,di.f.clear());let rt=dt=>(!$[dt]||X.has(dt))&&(!di.f.size||di.f.has(dt));if(R>=0){let dt=(xe,re)=>{for(let ve of xe){if(!rt(ve.fam))continue;let hn=ve.pat.stops.indexOf(v);if(hn<0||hn===ve.pat.stops.length-1)continue;let He=y(ve),ne=typeof He=="number"?He/60:0,pn=ve.t0+ve.pat.t[2*hn+1]-re;pn+ne<h.min-1||pn>h.min+360||Z.push({tr:ve,t:pn,dl:ne,d:He,on:G.vp.has(ve.tid),past:h.min>ve.t0+ve.pat.t[1]-re+2})}};dt(K[R],0),R>0&&dt(K[R-1],1440)}Z.sort((dt,xe)=>dt.t+dt.dl-xe.t-xe.dl);let Et=M[v].id,$t=qn.get(Et),Zt=(S||fe()&&h.live)&&G.url;Zt&&(!$t||Date.now()-$t.at>3e4)&&!$t?.loading&&(qn.set(Et,{...$t||{},loading:!0,at:$t?$t.at:0}),wt(G.url.replace(/\/+$/,""),"/departures.json?stationId="+Et).then(dt=>{qn.set(Et,{at:Date.now(),d:dt}),Tt===v&&(u._h="",Ge())}).catch(()=>qn.set(Et,{at:Date.now(),err:1})));let It=Zt&&$t&&$t.d&&Array.isArray($t.d.trains)?$t.d.trains:null;if(It){let dt=new Map([...G.vp.values()].map(re=>[String((ot.get(re.tid)||{}).num||re.num),re])),xe=It.filter(re=>rt((re.line||{}).id||"")).slice(0,40).map(re=>{let ve=(re.departureDateHourSelectedStation||"").slice(11,16),hn=(re.line||{}).id||"",He=String(re.commercialNumber||re.technicalNumber||""),ne=dt.get(He),pn=ne?G.delays.get(ne.tid):null;return`<li class="go${da({num:He,tid:ne?ne.tid:""})?" sel":""}" data-gt="${f(He)}|${ne?f(ne.tid):""}"><b>${f(ve)}</b>${$[hn]?Zn(hn):`<span class="ln" style="--c:#6b7385">${f(hn||"?")}</span>`}<span>${Di((re.destinationStation||{}).name||"",hn)}${re.trainObservations?` \xB7 <i>${f(re.trainObservations)}</i>`:""}</span>${re.trainCancelled?"<em>cancelado</em>":typeof pn=="number"&&pn>=60?`<em class="dl ${Qi(pn/60)}">+${Math.round(pn/60)}</em>`:""}${re.platformSelectedStation?`<i class="via">v\xEDa ${f(re.platformSelectedStation)}</i>`:""}${ne?'<i class="lvd" title="circulando, posici\xF3n real">\u25CF</i>':'<i class="lvd ph">\u25CF</i>'}</li>`}).join("");_=`<div class="tc" style="--c:#1d2330"><button class="x" data-cx>\xD7</button><h3>${f(M[v].n)}</h3>${kd(v)}${zo("",M[v].id,"")}
          <small style="margin-top:6px">Pr\xF3ximas salidas oficiales de Rodalies \xB7 hora prevista \xB7 <span class="lvk">\u25CF</span> tren circulando</small>
          <ol>${xe||"<li><span>Rodalies no anuncia salidas ahora mismo</span></li>"}</ol>${Vd(v,h)}${C(E(M[v].fams,v))}<div class="rtb two"><button type="button" data-sethome="home">\u{1F3E0} Es mi casa</button><button type="button" data-sethome="work">\u{1F4BC} Es mi trabajo</button></div></div>`}else _=`<div class="tc" style="--c:#1d2330"><button class="x" data-cx>\xD7</button><h3>${f(M[v].n)}</h3>${kd(v)}${zo("",M[v].id,"")}
        <small style="margin-top:6px">${S&&G.url?"Cargando salidas oficiales\u2026 mientras, ":""}Pr\xF3ximas salidas${S?' \xB7 hora prevista con el retraso actual \xB7 <span class="lvk">\u25CF</span> tren circulando':" \xB7 previsi\xF3n seg\xFAn horario (sin tiempo real)"}</small>
        <ol>${Z.slice(0,40).map(dt=>`<li class="go${da({num:dt.tr.num,tid:dt.tr.tid})?" sel":""}" data-gt="${f(dt.tr.num)}|${f(dt.tr.tid)}"><b>${at(dt.t+dt.dl)}</b>${Zn(dt.tr.fam)}<span>${Di(M[dt.tr.pat.stops[dt.tr.pat.stops.length-1]].n,dt.tr.fam)}</span>${dt.d==="X"?"<em>cancelado</em>":dt.dl>=1?`<em class="dl ${Qi(dt.dl)}">+${Math.round(dt.dl)}</em>`:""}${S?dt.on?'<i class="lvd" title="circulando, posici\xF3n real">\u25CF</i>':dt.past?'<i class="nos" title="deber\xEDa haber salido y Renfe no da su posici\xF3n">sin se\xF1al</i>':'<i class="lvd ph">\u25CF</i>':""}</li>`).join("")||"<li><span>No hay salidas en las pr\xF3ximas 6 horas</span></li>"}</ol>${Vd(v,h)}${C(E(M[v].fams,v))}<div class="rtb two"><button type="button" data-sethome="home">\u{1F3E0} Es mi casa</button><button type="button" data-sethome="work">\u{1F4BC} Es mi trabajo</button></div></div>`}let O=u.scrollTop;if(u._h!==_&&(u.innerHTML=_,u._h=_,u.scrollTop=O),u.style.display="flex",u.classList.toggle("min",Fs),Oh(),innerWidth<=640){let v=u.querySelector(".tc");if(v&&!v.querySelector(".mn")){let R=document.createElement("button");R.type="button",R.className="mn",R.setAttribute("aria-label","Encoger o ampliar la ficha"),R.textContent=u.classList.contains("peek")?"\u25B4":"\u25BE",R.onclick=Z=>{Z.stopPropagation(),u.classList.toggle("peek"),R.textContent=u.classList.contains("peek")?"\u25B4":"\u25BE",u.scrollTop=0},v.appendChild(R)}}else u.classList.remove("peek");let U=p("#rc");if(innerWidth<=640&&!U.classList.contains("min")&&!Ge.done&&(Ge.done=1,p("#rcgrab").click()),innerWidth<=640){let v=p("#inf").getBoundingClientRect().bottom;u.style.top=Math.round(v+8)+"px",u.style.width="calc(100vw - 76px)",u.style.maxHeight=Math.max(140,p("#rc").getBoundingClientRect().top-v-16)+"px"}else if(innerHeight<=500){let v=p("#inf").getBoundingClientRect().bottom;u.style.top=Math.round(v+8)+"px",u.style.width="min(290px, 40vw)",u.style.maxHeight=innerHeight-v-20+"px"}else u.style.top="",u.style.width=z?"390px":"300px",u.style.maxHeight="";let J=u.querySelector("[data-cx]");J&&(J.onclick=v=>{if(v.stopPropagation(),Ge.done=0,z||b||Dt||st&&!xt&&Tt<0){z=b=Dt=!1,xt||Tt>=0||(st=""),u._h="",Ge(),a();return}Dt=!1,b=!1,z=!1,xt=null,Tt=-1,Ct=null,Te(),Ge(),tt=0,a()}),Xd(u),u.querySelectorAll("[data-alarm]").forEach(v=>v.onclick=R=>{R.stopPropagation();let Z=xt&&xt.pat?xt:ot.get(xt&&xt.vtid)||null;if(!Z)return;let rt=+v.dataset.alarm,Et=M[Z.pat.stops[rt]].id;rn&&rn.num===String(Z.num)&&rn.sid===Et?(rn=null,an("Aviso de llegada quitado")):(rn={num:String(Z.num),sid:Et,at:Date.now()},an(`\u{1F514} Te aviso 2 min antes de llegar a ${M[Z.pat.stops[rt]].n}`),"Notification"in window&&Notification.permission==="default"&&Notification.requestPermission()),Uo(),u._h="",Ge()});{let v=u.querySelector("[data-fav]");v&&(v.onclick=R=>{R.stopPropagation();let Z=xt&&xt.pat?xt:ot.get(xt&&xt.vtid)||null;if(!Z)return;let rt=xi.findIndex(Et=>Et.num===String(Z.num));if(rt>=0)xi.splice(rt,1),an("Quitado de tus trenes de cada d\xEDa");else{let Et=[...Vn.st,...fn.st,...Yt.st],$t=Z.pat.stops.find(Zt=>Et.includes(M[Zt].id))??Z.pat.stops[0];xi.push({num:String(Z.num),fam:Z.fam,sid:M[$t].id,dest:M[Z.pat.stops[Z.pat.stops.length-1]].id,t:at(Z.t0+Z.pat.t[2*Z.pat.stops.indexOf($t)+1])}),an(`\u2B50 Te avisar\xE9 si el ${Z.fam} de las ${xi[xi.length-1].t} desde ${M[$t].n} va con retraso`),"Notification"in window&&Notification.permission==="default"&&Notification.requestPermission()}ng(),u._h="",Ge(),en(!0)})}{let v=u.querySelector("[data-share]");v&&(v.onclick=()=>{let R=st,Z=j.filter(Zt=>(Zt.fam||Zt.tr&&Zt.tr.fam)===R),rt=Z.filter(Zt=>Zt.dl>=5).sort((Zt,It)=>It.dl-Zt.dl),Et=G.alerts.filter(Zt=>Zt.fams.has(R)),$t=`${R} a las ${at(ae().min)}: ${Z.length} trenes, ${rt.length} con 5 min o m\xE1s${rt.length?" ("+rt.slice(0,4).map(Zt=>`${Zt.tr?Zt.tr.num:Zt.v.num} +${Math.round(Zt.dl)}`).join(", ")+")":""}.${Et.length?" Aviso: "+Et[0].txt:" Sin avisos."}`;navigator.share?navigator.share({text:$t}).catch(()=>{}):(navigator.clipboard&&navigator.clipboard.writeText($t),an("Copiado: "+$t.slice(0,60)+"\u2026"))})}{let v=u.querySelector("[data-cols]");v&&(v.onclick=()=>{ni.on=!ni.on,Km(),u._h="",Ge()})}u.querySelectorAll("[data-gs]").forEach(v=>v.onclick=()=>{let R=+v.dataset.gs;z=!1,window.__rodPickStation(R),Object.assign(s,{tx:M[R].w[0],ty:M[R].w[1],dist:Math.min(s.dist,20)}),a()}),u.querySelectorAll("[data-sf]").forEach(v=>v.onclick=R=>{R.stopPropagation();let Z=v.dataset.sf;Z?di.f.has(Z)?di.f.delete(Z):di.f.add(Z):di.f.clear(),u._h="",Ge()}),u.querySelectorAll("[data-gt]").forEach(v=>v.onclick=()=>{let[R,Z]=v.dataset.gt.split("|"),rt=ot.get(Z);lf({num:R,tid:G.vp.has(Z)?Z:"",tr:rt||null})}),u.querySelectorAll("[data-sethome]").forEach(v=>v.onclick=()=>Bh(Tt,v.dataset.sethome));let et=u.querySelector("[data-follow]");et&&(et.onclick=()=>{Ct=Ct===xt?null:xt,Ct?(s.dist=Math.min(s.dist,22),innerWidth<=640&&(u.classList.add("peek"),u.scrollTop=0,p("#rc").classList.contains("min")||p("#rcgrab").click())):u.classList.remove("peek"),u._h="",Ge(),a()})}window.__rodCard=Ge;try{let h=localStorage.getItem("rod_inf");(h==="mini"||h==null)&&p("#inf").classList.add("mini")}catch{}p("#inft").onclick=()=>{let h=p("#inf").classList.toggle("mini");try{localStorage.setItem("rod_inf",h?"mini":"")}catch{}(xt||Tt>=0||Dt||b)&&(u._h="",Ge())},p("#ver").onclick=()=>{b=!0,z=!1,Dt=!1,u._h="",Ge()};let Bo={vacio:"\u{1F7E2}",lleno:"\u{1F7E0}",petado:"\u{1F534}",parado:"\u23F8\uFE0F",calor:"\u{1F975}",abordo:"\u26A0\uFE0F",gente:"\u{1F465}",retraso:"\u23F1\uFE0F",cancel:"\u2716\uFE0F",ascensor:"\u267F",via:"\u26A0\uFE0F"},rg=["vacio","lleno","petado","parado","calor","abordo"],ag=["gente","retraso","cancel","ascensor","via"],og={vacio:"Va con sitio",lleno:"Va lleno",petado:"Muy lleno, cuesta subir",parado:"Parado sin moverse",calor:"Sin aire acondicionado",abordo:"Incidencia a bordo",gente:"Mucha gente esperando",retraso:"Anuncian retraso por megafon\xEDa",cancel:"Anuncian tren cancelado",ascensor:"Ascensor o escalera averiados",via:"Incidencia en la estaci\xF3n"},ko=h=>(G.tipos||og)[h]||h,Ih=(h,_)=>(G.rep||[]).filter(S=>h&&S.num===String(h)&&!S.sid||_&&S.sid===String(_)&&!S.num||h&&_&&S.num===String(h)&&S.sid===String(_)),Wd=h=>{let _=Math.round((Date.now()+(G.repSkew||0)-h.at)/6e4);return _<1?"ahora":`hace ${_} min`},fa=(()=>{try{return new Set(JSON.parse(localStorage.getItem("rod_votes")||"[]"))}catch{return new Set}})();function zo(h,_,S){if(!G.url||!G.repOk)return"";let E=Ih(h,_),C=h?rg:ag;return`<div class="crowd"><small>\u{1F465} Lo que dicen los viajeros${E.length?"":" \xB7 nadie ha avisado todav\xEDa"}</small>${E.map(I=>`<p><span>${Bo[I.kind]||"\u2022"} <b>${f(ko(I.kind))}</b> <small>${I.up>1?I.up+" viajeros \xB7 ":""}${Wd(I)}</small></span>${fa.has(I.id)?"<small>\u2713</small>":`<button type="button" data-rv="${I.id}:1" title="Lo confirmo">\u{1F44D}</button><button type="button" data-rv="${I.id}:-1" title="Ya no es as\xED">\u{1F44E}</button>`}</p>`).join("")}
      <details><summary>${h?"\xBFVas en este tren? Avisa a los dem\xE1s":"\xBFEst\xE1s en la estaci\xF3n? Avisa a los dem\xE1s"}</summary><div class="ckb">${C.map(I=>`<button type="button" data-rk="${I}" data-rn="${f(h||"")}" data-rs="${f(_||"")}" data-rl="${f(S||"")}">${Bo[I]} ${f(ko(I))}</button>`).join("")}</div><small>An\xF3nimo \xB7 se borra solo en 90 min \xB7 sin texto libre</small></details></div>`}async function $d(h,_){try{let E=await(await fetch(G.url.replace(/\/+$/,"")+_,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(h)})).json();if(!E.ok){an(E.err||"No se ha podido enviar");return}if(E.id){fa.add(E.id);try{localStorage.setItem("rod_votes",JSON.stringify([...fa].slice(-300)))}catch{}}an(_==="/vote"?"Gracias, voto guardado":E.n>1?`Gracias \xB7 ya sois ${E.n} avisando de lo mismo`:"Gracias, aviso enviado");let C=await wt(G.url.replace(/\/+$/,""),"/reports.json");C&&C.items&&(G.rep=C.items),u._h="",Ge(),en(!0)}catch{an("Sin conexi\xF3n con el puente")}}function Xd(h){h.querySelectorAll("[data-rk]").forEach(_=>_.onclick=S=>{S.stopPropagation(),_.disabled=!0,$d({kind:_.dataset.rk,num:_.dataset.rn,sid:_.dataset.rs,line:_.dataset.rl},"/report")}),h.querySelectorAll("[data-rv]").forEach(_=>_.onclick=S=>{S.stopPropagation();let[E,C]=_.dataset.rv.split(":");fa.add(+E);try{localStorage.setItem("rod_votes",JSON.stringify([...fa].slice(-300)))}catch{}$d({id:+E,v:+C},"/vote")})}let qd=0;function an(h){let _=p("#toast");_||(_=document.createElement("div"),_.id="toast",document.body.appendChild(_)),_.textContent=h,_.className="on",clearTimeout(qd),qd=setTimeout(()=>{_.className=""},2600)}function Vo(h){return h.src?`<b class="asrc ${h.src==="Adif"?"adif":""}">${h.src==="Adif"?"Adif \xB7 v\xEDa":f(h.src)}</b>`:""}function Ho(h){if(!h.when)return"";let[_,S]=h.when.split("T"),E=gt(new Date),C=E.ymd.slice(0,4)+"-"+E.ymd.slice(4,6)+"-"+E.ymd.slice(6,8);if(_===C&&S){let I=Math.round(E.min-(+S.slice(0,2)*60+ +S.slice(3,5)));return I<1?"ahora":I<60?`hace ${I} min`:`hoy a las ${S.slice(0,5)}`}return`${_.slice(8,10)}/${_.slice(5,7)}${S?" "+S.slice(0,5):""}`}function Ph(){let h=p("#alr");if(!h)return;let _=G.alerts.filter(S=>[...S.fams].some(E=>X.has(E))).length;h.hidden=!_,h.textContent=`\u26A0\uFE0F ${_} aviso${_===1?"":"s"}`}{let h=p("#alrslot");h&&h.appendChild(p("#alr"))}p("#alr").onclick=()=>{b=!1,z=!1,Dt=!0,Ge()},p("#wcopy").onclick=async()=>{let h=p("#wcode").textContent;try{await navigator.clipboard.writeText(h),p("#wcopy").textContent="Copiado \u2713"}catch{let S=document.createRange();S.selectNodeContents(p("#wcode"));let E=getSelection();E.removeAllRanges(),E.addRange(S),p("#wcopy").textContent="Selecciona y copia"}setTimeout(()=>p("#wcopy").textContent="Copiar c\xF3digo",2500)};let lg=Ht.get("71801");function cg(h,_){let S=M[h].id,E=qn.get(S);!(se()&&G.url)||E&&(E.loading||Date.now()-E.at<3e4)||(qn.set(S,{...E||{},loading:!0,at:E?E.at:0}),wt(G.url.replace(/\/+$/,""),"/departures.json?stationId="+S).then(C=>{qn.set(S,{at:Date.now(),d:C}),_&&_()}).catch(()=>qn.set(S,{at:Date.now(),err:1})))}let Yd=h=>+h.slice(0,2)*60+ +h.slice(3,5),pa={k:-2,m:null};function hg(h){let _=t.days.indexOf(ae().ymd);if(pa.k!==_){pa.k=_,pa.m=new Map;for(let S of K[_]||[])pa.m.set(String(S.num),S)}return pa.m.get(String(h))||null}let Bs={at:0,m:new Map};function Lh(h){if(Date.now()-Bs.at>6e4){Bs.at=Date.now(),Bs.m=new Map;let S=ae(),E=t.days.indexOf(S.ymd);if(E>=0)for(let C of K[E]){let I=S.min-C.t0;if(I<C.pat.t[1]+3||I>C.pat.t[C.pat.t.length-2]-3)continue;let O=Bs.m.get(C.fam)||[0,0];O[0]++,G.vp.has(C.tid)&&O[1]++,Bs.m.set(C.fam,O)}}let _=Bs.m.get(h);return _&&_[0]>=3?_[1]/_[0]:1}function Dh(h,_){let S=ae(),E=(k()||fe())&&S.live&&!_,C=qn.get(M[h].id),I=[],O=new Map([...G.vp.values()].map(B=>[String((ot.get(B.tid)||{}).num||B.num),B]));if(E&&C&&C.d&&Array.isArray(C.d.trains))for(let B of C.d.trains){let J=(B.departureDateHourSelectedStation||"").slice(11,16);if(!J)continue;let et=String(B.commercialNumber||B.technicalNumber||""),v=O.get(et),R=v?G.delays.get(v.tid):null,Z=Math.max(typeof R=="number"?Math.max(0,R/60):0,v&&v.pre&&v.preDl||0),rt=Yd(J);rt<S.min-720&&(rt+=1440),I.push({sm:rt,est:rt+Z,dl:Z,fam:(B.line||{}).id||"",dest:(B.destinationStation||{}).name||"",destId:(B.destinationStation||{}).id||"",plat:B.platformSelectedStation||"",cancel:!!B.trainCancelled,obs:B.trainObservations||"",live:!!v,num:et,tid:v?v.tid:"",tr:v&&ot.get(v.tid)||hg(et),src:"oficial"})}else{let B=t.days.indexOf(S.ymd);if(B<0)return I;let J=(et,v)=>{for(let R of et){let Z=R.pat.stops.indexOf(h);if(Z<0||Z===R.pat.stops.length-1)continue;let rt=y(R),Et=typeof rt=="number"?Math.max(0,rt/60):0,$t=R.t0+R.pat.t[2*Z+1]-v;if($t+Et<S.min-1||$t>S.min+360)continue;let Zt=R.pat.stops[R.pat.stops.length-1];I.push({sm:$t,est:$t+Et,dl:Et,fam:R.fam,dest:M[Zt].n,destId:M[Zt].id,plat:"",cancel:rt==="X",obs:"",live:G.vp.has(R.tid),num:R.num,tid:R.tid,tr:R,src:"horario"})}};J(K[B],0),B>0&&J(K[B-1],1440),B+1<t.days.length&&S.min>1080&&J(K[B+1],-1440)}if(E){let B=new Set(I.map(v=>v.num)),J=t.days.indexOf(S.ymd),et=(v,R)=>{for(let Z of v||[]){if(B.has(String(Z.num)))continue;let rt=Z.pat.stops.indexOf(h);if(rt<0||rt===Z.pat.stops.length-1)continue;let Et=Z.t0+Z.pat.t[2*rt+1]-R;if(Et<S.min-45||Et>S.min+1||!G.vp.get(Z.tid))continue;let Zt=G.delays.get(Z.tid),It=typeof Zt=="number"?Math.max(0,Zt/60):0,dt=Z.pat.stops[Z.pat.stops.length-1];I.push({sm:Et,est:Et+It,dl:It,fam:Z.fam,dest:M[dt].n,destId:M[dt].id,plat:"",cancel:!1,obs:"",live:!0,num:Z.num,tid:Z.tid,tr:Z,src:"horario"})}};J>=0&&(et(K[J],0),J>0&&et(K[J-1],1440));for(let v of I){let R=v.tid&&G.vp.get(v.tid),Z=v.tr?v.tr.pat.stops.indexOf(h):-1;v.passed=!!(R&&Z>=0&&!R.pre&&R.next!=null&&R.next>=0&&R.next>Z&&R.atStop!==Z),!v.passed&&v.live&&v.est<S.min&&(v.est=S.min,v.late=!0),v.passed&&(v.gone=!0)}}let U=I.filter(B=>B.gone?S.min-B.est<20:B.est>=S.min-.5).sort((B,J)=>B.est-J.est);{let B=U.filter(J=>J.gone);if(B.length>2){let J=new Set(B.slice(0,B.length-2));U=U.filter(et=>!J.has(et))}}if(!U.filter(B=>!B.gone).length&&I.length&&I[0].src==="oficial"&&!_)return Dh(h,!0);for(let B of U){let J=B.num&&Ah(B.num);J&&J.cx&&(B.cancel=!0,B.cxWhy=J.txt)}if(k()&&S.live){let B=t.days.indexOf(S.ymd);for(let J of U){if(J.live||J.cancel||!J.tr)continue;let et=J.tr.day===B-1?1440:J.tr.day===B+1?-1440:0,v=J.tr.t0+J.tr.pat.t[1]-et+(J.dl||0);J.ghost=S.min>v+3&&Lh(J.fam)>=.7}}if(_||(U=U.concat(w(h,S.min-.5,S.min+360)).sort((B,J)=>B.est-J.est)),U.some(B=>B.src==="oficial")){let B=Math.max(...U.map(et=>et.sm)),J=new Set(U.map(et=>et.num));U=U.concat(Dh(h,!0).filter(et=>et.sm>B&&!J.has(String(et.num))))}return U}let Zd=(h,_,S,E)=>{let C={key:h,ico:_,name:S,st:[],i:0,walk:10,open:!1};try{let I=JSON.parse(localStorage.getItem("rod_"+h)||"null");I&&Object.assign(C,I)}catch{}return!C.st.length&&E&&(C.st=E),C},Vn=Zd("home","\u{1F3E0}","Casa",["79410","79412"]),fn=Zd("work","\u{1F4BC}","Trabajo",null),Yt={key:"near",ico:"\u{1F4CD}",name:"Cerca de ti",st:[],i:0,walk:0,open:!1,dist:{},fix:0,err:""},ma=[Yt,Vn,fn];try{Yt.homeW=JSON.parse(localStorage.getItem("rod_homew")||"null")}catch{}Vn.open=!1,fn.open=!1;function Jd(h,_){let S=vt(h,_),E=vt(h,_+.009);return 1/Math.hypot(E[0]-S[0],E[1]-S[1])}function Nh(h){if(!navigator.geolocation){Yt.err="Este navegador no da la ubicaci\xF3n",en(!0);return}navigator.geolocation.getCurrentPosition(_=>{let{longitude:S,latitude:E}=_.coords,C=vt(S,E),I=Jd(S,E),O=M.map((et,v)=>[v,Math.hypot(et.w[0]-C[0],et.w[1]-C[1])*I]).filter(([et])=>M[et].fams.size).sort((et,v)=>et[1]-v[1]),U=O.filter(([,et],v)=>v===0||et<Math.max(2.5,O[0][1]*1.6)).slice(0,3),B=Yt.st[0]!==M[U[0][0]].id;Yt.w=C,Yt.k=I,Yt.acc=_.coords.accuracy!=null?_.coords.accuracy:999,Yt.st=U.map(([et])=>M[et].id),Yt.dist=Object.fromEntries(U.map(([et,v])=>[M[et].id,v])),Yt.fix=Date.now(),Yt.err="",B&&(Yt.i=0);let J=[Vn,fn].find(et=>et.st.includes(Yt.st[0])&&Yt.dist[Yt.st[0]]<1.5);en(!0)},_=>{Yt.err=_.code===1?"Sin permiso de ubicaci\xF3n":"No se ha podido obtener la ubicaci\xF3n",en(!0)},{enableHighAccuracy:!1,maximumAge:6e4,timeout:12e3})}let Kd=h=>Math.max(1,Math.round(h*1.3/.08));setTimeout(()=>Nh(!0),400);let xn={fixes:[],tid:"",no:new Map,shown:""};function ug(){let h=xn.fixes;if(h.length<2)return;let _=h[h.length-1],S=h.slice().reverse().find(R=>_.t-R.t>=8e3&&_.t-R.t<=9e4);if(!S)return;let E=Math.hypot(_.w[0]-S.w[0],_.w[1]-S.w[1])*_.k,C=_.spd!=null&&_.spd>0?_.spd*3.6:E/((_.t-S.t)/36e5);if(_.acc!=null&&_.acc>100)return;if(xn.tid){let R=j.find(Z=>Z.tr&&String(Z.tr.num)===xn.tid)||Us(ae()).out.find(Z=>Z.tr&&String(Z.tr.num)===xn.tid);if(R){if(Math.hypot(R.p.w[0]-_.w[0],R.p.w[1]-_.w[1])*_.k<=5){xn.far=0;return}if(xn.far||(xn.far=_.t),_.t-xn.far<12e4)return}xn.far=0}if(C<22||C>200)return;let I=[_.w[0]-S.w[0],_.w[1]-S.w[1]],O=null,U=2.5,B=j.filter(R=>R.real),J=Us(ae()).out.filter(R=>R.tr&&!B.some(Z=>Z.tr&&String(Z.tr.num)===String(R.tr.num)));for(let R of[...B,...J]){if(!R.tr)continue;let Z=R.real?2.5:3.5,rt=Math.hypot(R.p.w[0]-_.w[0],R.p.w[1]-_.w[1])*_.k;if(rt>Math.min(U,Z)||O&&O.real&&!R.real)continue;let Et=R.real?R.v.next:R.p.next;if(Et==null||Et<0)continue;let $t=M[R.tr.pat.stops[Et]].w,Zt=[$t[0]-R.p.w[0],$t[1]-R.p.w[1]];if(Zt[0]*I[0]+Zt[1]*I[1]<=0)continue;let It=String(R.tr.num);(xn.no.get(It)||0)>Date.now()||(U=rt,O=R)}if(!O)return;let et=String(O.tr.num);if(xn.tid===et)return;xn.tid=et,b=Dt=z=!1,Tt=-1,xt=O.tr,Ct=O.tr,Object.assign(s,{tx:O.p.w[0],ty:O.p.w[1],dist:Math.min(s.dist,22)}),innerWidth<=640&&(u.classList.add("peek"),p("#rc").classList.contains("min")||p("#rcgrab").click());{let R=O.tr.pat.stops,Z=O.real?O.v.next:O.p.next,rt=[...Vn.st,...fn.st],Et=R.findIndex(($t,Zt)=>Zt>=Z&&rt.includes(M[$t].id));Et>0&&!(rn&&rn.num===et)&&(rn={num:et,sid:M[R[Et]].id,at:Date.now()},Uo())}Te(),u._h="",Ge(),tt=0,a();let v=p("#onb");v||(v=document.createElement("div"),v.id="onb",document.body.appendChild(v)),v.innerHTML=`\u{1F686} Parece que vas en el <b>${f(O.tr.fam)} ${f(O.tr.num)}</b> hacia ${f(M[O.tr.pat.stops[O.tr.pat.stops.length-1]].n)} \xB7 lo sigo${rn&&rn.num===et?` \xB7 te aviso al llegar a ${f(M[Ht.get(rn.sid)].n)}`:""} <button type="button" data-onb-no>No es este</button><button type="button" data-onb-x>\u2715</button>`,v.className="on",v.querySelector("[data-onb-no]").onclick=()=>{xn.no.set(et,Date.now()+20*6e4),xn.tid="",Ct=null,xt=null,u._h="",Ge(),v.className=""},v.querySelector("[data-onb-x]").onclick=()=>{v.className=""},setTimeout(()=>{v.className=""},15e3)}if(navigator.geolocation&&navigator.geolocation.watchPosition){let h=null,_=()=>{h==null&&(h=navigator.geolocation.watchPosition(E=>{let{longitude:C,latitude:I}=E.coords,O={t:E.timestamp||Date.now(),w:vt(C,I),k:Jd(C,I),spd:E.coords.speed,acc:E.coords.accuracy};xn.fixes.push(O),xn.fixes=xn.fixes.filter(U=>O.t-U.t<12e4);try{ae().live&&ug()}catch{}},()=>{},{enableHighAccuracy:!0,maximumAge:5e3,timeout:2e4}))},S=()=>{h!=null&&(navigator.geolocation.clearWatch(h),h=null)};setTimeout(_,3e3),document.addEventListener("visibilitychange",()=>{document.hidden?S():(xn.fixes=[],_())})}setInterval(()=>{!document.hidden&&(Date.now()-Yt.fix>11e4||ma.some(h=>h.goAt))&&Nh(!1)},3e4);let ts=h=>{try{localStorage.setItem("rod_"+h.key,JSON.stringify({st:h.st,i:h.i,walk:h.walk,open:h.open,hide:h.hide||"",goAt:h.goAt||0}))}catch{}},Uh=h=>h.st.length?Ht.get(h.st[h.i]||h.st[0]):null;function jd(h,_,S,E){if(E&&_.bus)return _.bstops.slice(1).some(O=>E.has(O))?"to":"out";if(E&&_.tr){let O=_.tr.pat.stops,U=O.indexOf(h);if(U>=0&&O.slice(U+1).some(B=>E.has(B)))return"to"}if(E&&_.tr)return"out";let C=Ht.get(_.destId)??M.findIndex(O=>O.n===_.dest);if(C<0||C==null||S==null)return"otros";let I=O=>Math.hypot(M[O].w[0]-M[S].w[0],M[O].w[1]-M[S].w[1]);return I(C)<I(h)?"to":"out"}let ga=h=>h<1?"ahora":h<60?Math.round(h)+" min":Math.floor(h/60)+" h "+String(Math.round(h%60)).padStart(2,"0"),Qd=0,dg=/sin servicio|sense servei|suspend|interromp|interrump|no circula|no se puede garantizar|no es pot garantir/i;function fg(h,_,S){let E=Uh(h);if(h===Yt){if(E==null)return`<div class="hplace"><button type="button" class="hhead hnew" data-hloc><span class="hico">\u{1F4CD}</span><span class="htit"><b>Cerca de ti</b><small>${Yt.err?f(Yt.err)+" \xB7 toca para reintentar":"Buscando tu ubicaci\xF3n\u2026"}</small></span><span class="hchev">\u27F3</span></button></div>`;if([Vn,fn].find(Wt=>Wt.st.includes(Yt.st[0])&&Yt.dist[Yt.st[0]]<1.5))return"";h.walk=Kd(Yt.dist[h.st[h.i]]||0)}if(E==null){let pt=Yt.st.length?Ht.get(Yt.st[0]):null,Wt=h===fn?Vn:fn,Be=pt!=null&&!Wt.st.includes(Yt.st[0]);return`<div class="hplace"><div class="hhead hnew"><span class="hico">${h.ico}</span><span class="htit"><b>${h.name}</b><small>${Be?`Est\xE1s en <b>${f(M[pt].n)}</b>`:"Elige tu estaci\xF3n"}</small></span>${Be?`<button type="button" class="hpick" data-hnear="${h.key}">Usar esta</button>`:""}<button type="button" class="hpick alt" data-hset="${h.key}">${Be?"Otra\u2026":"Elegir"}</button></div></div>`}cg(E,()=>en(!0));let C=h===Yt?null:h===Vn?fn:Vn,I=C?Uh(C):null,O=I!=null&&I!==E?I:lg,U=I!=null&&I!==E?C===fn?"el trabajo":"casa":"Barcelona",B=M[E].fams,J=new Set([...B].filter(pt=>X.has(pt))),et=J.size<B.size,v=!1;J.size||(J=new Set(B),et=!1,v=!0);let R=Yt.w?Math.hypot(M[E].w[0]-Yt.w[0],M[E].w[1]-Yt.w[1])*Yt.k:null,Z=R!=null&&Date.now()-Yt.fix<10*6e4,rt=h===Yt||Z&&R>3&&!h.goAt,Et=h!==Yt&&Z&&R<.08&&Yt.acc<=40&&!(h===Vn&&Yt.homeW&&Math.hypot(Yt.homeW[0]-Yt.w[0],Yt.homeW[1]-Yt.w[1])*Yt.k<.05),$t=h.goAt?(Date.now()-h.goAt)/6e4:null;$t!=null&&($t>60||Et)&&(h.goAt=0,ts(h));let Zt=!Et&&h!==Yt&&!!h.goAt,It=Zt?Z&&R<=3?Kd(R):Math.max(0,h.walk-$t):0,dt=Dh(E),xe=dt.filter(pt=>!$[pt.fam]||X.has(pt.fam)||v),re=rt||Et?0:Zt?It:h.walk,ve=G.alerts.filter(pt=>[...pt.fams].some(Wt=>J.has(Wt))||pt.stops&&pt.stops.has(E)),hn=ve.some(pt=>dg.test(pt.txt)),He={to:[],out:[],otros:[],all:xe},ne=U!=="Barcelona"?new Set(C.st.map(pt=>Ht.get(pt)).filter(pt=>pt!=null)):null;xe.forEach(pt=>He[jd(E,pt,O,ne)].push(pt));let pn="";if(ne&&!He.to.length&&xe.length<dt.length){let pt=dt.filter(Wt=>!xe.includes(Wt)&&jd(E,Wt,O,ne)==="to");pt.length&&(He.to=pt,pn=[...new Set(pt.map(Wt=>Wt.fam))].sort(L).join(", "))}let fr=pt=>{if(pt==="all")return"Pr\xF3ximas salidas \xB7 todas las direcciones";let Wt=De=>(De.find(An=>An.fam)||{}).fam;if(pt==="to")return"Hacia "+Di(U==="Barcelona"?"Barcelona":M[O].n,Wt(He.to)||[...J][0])+(U!=="Barcelona"?` <small>${U}</small>`:"");let Be=[];for(let De of He[pt])Be.some(An=>An[0]===De.dest)||Be.push([De.dest,De.fam]);return Be.length?"Hacia "+Be.slice(0,2).map(([De,An])=>Di(De,An)).join(" "):"Otros"},Qe=pt=>{let Wt=He[pt].find(Cn=>!Cn.cancel&&!Cn.gone&&Cn.est-_.min>=re);if(!Wt){let Cn=He[pt].find(Eg=>!Eg.cancel);return Cn&&!rt?{cls:"v-no",big:"No llegas",small:`El pr\xF3ximo (${at(Cn.est)}) sale en ${ga(Cn.est-_.min)}: no da tiempo a pie`}:{cls:"v-no",big:"Sin trenes",small:"No hay salidas pr\xF3ximas en este sentido"}}let Be=Wt.est-_.min-re,De=rt||Et?"v-info":Zt?Be<1.5?"v-warn":"v-ok":Be<1.5?"v-bad":Be<5?"v-warn":"v-ok",An=Wt.ghost?He[pt].find(Cn=>!Cn.cancel&&!Cn.ghost&&Cn.live&&Cn.est>Wt.est):null;return{cls:De,ghost:!!Wt.ghost,big:rt||Et?Be<1?"Sale ahora":"Sale en "+ga(Be):Zt?Be<1.5?"\xA1Date prisa!":"Llegas con "+ga(Be)+" de margen":Be<1.5?"\xA1Sal ya!":"Sal en "+ga(Be),warn:Wt.ghost?`\u26A0\uFE0F Sin se\xF1al de Renfe: puede no pasar${An?` \xB7 el siguiente en marcha sale a las ${at(An.est)}`:""}`:hn?"\u26A0\uFE0F Servicio afectado por una incidencia":"",small:`${Wt.bus?"\u{1F68C} autob\xFAs \xB7 ":""}${at(Wt.est)} \xB7 ${Wt.fam} a ${Wt.dest}${Wt.plat?" \xB7 v\xEDa "+Wt.plat:""}${Wt.dl>=1?` \xB7 +${Math.round(Wt.dl)} min`:""}${Wt.arr!=null?` \xB7 llegas a las ${at(Wt.arr)}`:""}`,x:Wt}},vg=ne||new Set([O]),yg=pt=>{let Wt=pt.tr;if(!Wt)return null;let Be=Wt.pat.stops,De=Be.indexOf(E);if(De<0)return null;let An=-1;for(let Cn=De+1;Cn<Be.length;Cn++)if(vg.has(Be[Cn])){An=Cn;break}return An<0?null:pt.est+(Wt.pat.t[2*An]-Wt.pat.t[2*De+1])};He.to.forEach(pt=>{pt.arr=yg(pt)});let zh=He.out.length?"out":"otros",ii=Qe("to"),Vh=Qe(zh);if(!rt&&h!==Yt&&ii.x&&xg(h,ii.x,M[E].n,re),Et||h===Yt&&Yt.acc<=40&&(Yt.dist[h.st[h.i]]||9)<.08){for(let pt of[ii.x,Vh.x].concat(h===Yt?[Qe("all").x]:[]))if(pt&&!pt.cancel&&pt.est-_.min<=2&&pt.est-_.min>-.5){let Wt="w"+pt.num+"|"+Math.round(pt.sm);Go.has(Wt)||(Go.add(Wt),Ch(`\u{1F686} Llega tu tren \xB7 ${pt.fam} a ${pt.dest}`,`En unos ${Math.max(0,Math.round(pt.est-_.min))} min a ${M[E].n}${pt.plat?" \xB7 v\xEDa "+pt.plat:""}`))}}let uf=k()&&_.live,df=J.size===1,Sg=pt=>{let Wt=pt.est-_.min;return rt?pt.cancel?"cx":Wt<0?"u-miss":"u-info":pt.cancel?"cx":Wt<re?"u-miss":Wt<re+1.5?"u-now":Wt<re+5?"u-soon":"u-ok"},bg=pt=>{if(pt.gone)return`<li class="hr u-gone${pt.live?" on":""}${da(pt)?" sel":""} go" data-dk="${S.push(pt)-1}" title="Ya ha salido: toca para ver d\xF3nde va"><span class="hrt"><b>${at(pt.est)}</b><small>sali\xF3 hace ${Math.max(1,Math.round(_.min-pt.est))} min</small></span><span class="hrd">${Di((df?"":pt.fam+" \xB7 ")+pt.dest,pt.fam)}<small class="hro">tren ${f(pt.num)}</small></span><span class="hrm">${pt.dl>=1?`<em class="dl ${Qi(pt.dl)}">+${Math.round(pt.dl)}</em>`:""}</span></li>`;let Wt=!pt.cancel&&pt.est-_.min<re,Be=Ih(pt.num,"");return`<li class="hr ${Sg(pt)}${pt.live?" on":""}${pt.ghost?" gh":""}${da(pt)?" sel":""}${xi.some(De=>{let An=Rh(De,t.days.indexOf(_.ymd));return An&&String(An.num)===String(pt.num)})?" fav":""} go" style="--lc:${$[pt.fam]||"#6b7385"}" data-dk="${S.push(pt)-1}" title="${pt.cancel?"Cancelado":Wt?"No llegas a pie":"Ver este tren en el mapa"}"><span class="hrt"><b>${pt.cancel?"\u2715":Wt?at(pt.est):ga(pt.est-_.min)}</b><small>${pt.cancel?"cancelado":pt.late?"a\xFAn no ha salido":Wt?"no llegas":pt.ghost?'<i class="ghs" title="Deber\xEDa estar circulando y Renfe no da su posici\xF3n">sin se\xF1al</i>':at(pt.est)}</small></span><span class="hrd">${pt.bus?'<i class="bus" title="Autob\xFAs que sustituye al tren por obras">\u{1F68C}</i>':""}${Di((df?"":pt.fam+" \xB7 ")+pt.dest,pt.fam)}${Be.length?`<i class="cr" title="${f(Be.map(De=>ko(De.kind)).join(" \xB7 "))}">${Be.slice(0,2).map(De=>Bo[De.kind]).join("")}</i>`:""}${pt.arr!=null?`<small class="hro">llegas a las ${at(pt.arr)}${(()=>{let De=pt.num&&ui(pt.num);return De&&De.n>=3&&De.late/De.n>=.5?` \xB7 <b class="slate">suele ir tarde (${De.late}/${De.n})</b>`:""})()}</small>`:""}${pt.obs?`<small class="hro">${f(pt.obs)}</small>`:""}</span><span class="hrm">${!pt.cancel&&pt.dl>=1?`<em class="dl ${Qi(pt.dl)}">+${Math.round(pt.dl)}</em>`:""}${pt.plat?`<i class="via">v\xEDa ${f(pt.plat)}</i>`:""}</span></li>`},xa=(pt,Wt,Be)=>`<div class="hcol"><div class="hdir">${fr(pt)}${Be?`<button type="button" class="hhide" data-hhide="${h.key}:${Be}" title="Ocultar esta direcci\xF3n">\u2715</button>`:""}</div><div class="hv ${Wt.cls}${Wt.ghost?" gh":""}${Wt.x?" go":""}"${Wt.x?` data-dk="${S.push(Wt.x)-1}"`:""}><b>${Wt.big}</b><small>${f(Wt.small)}</small>${Wt.warn?`<span class="hvw">${f(Wt.warn)}</span>`:""}</div><ol>${He[pt].slice(0,(h.more?pt==="all"||h.hide?20:10:pt==="all"?7:h.hide?8:4)+He[pt].filter(De=>De.gone).length).map(bg).join("")||"<li><span>\u2014</span></li>"}</ol></div>`;if(h===Yt){let pt=Qe("all");var Mg=pt.x?`${pt.big} \xB7 <b>${at(pt.x.est)}</b> ${f(pt.x.fam)} a ${f(pt.x.dest)}${pt.x.plat?" \xB7 v\xEDa "+f(pt.x.plat):""}`:pt.big}let wg=h===Yt?Mg:ii.x?`${ii.big} \xB7 <b>${at(ii.x.est)}</b>${ii.x.arr!=null?` \u2192 llegas a las <b>${at(ii.x.arr)}</b>`:""} hacia ${f(U)}${ii.x.plat?" \xB7 v\xEDa "+f(ii.x.plat):""}`:"Sin trenes hacia "+f(U);return`<div class="hplace ${h.open?"open":""}"><button type="button" class="hhead" data-ht="${h.key}"><span class="hico">${h.ico}</span><span class="htit"><b>${f(M[E].n)}</b><small class="c${hn?"bad":ii.cls.slice(2)}">${wg}</small></span><span class="hchev">\u25BE</span></button>`+(h.open?`
      <div class="hbody">
        ${h.st.length>1?`<div class="hst">${h.st.map((pt,Wt)=>{let Be=Ht.get(pt);return Be==null?"":`<button type="button" data-hs="${h.key}:${Wt}" class="${Wt===h.i?"on":""}">${f(M[Be].n)}</button>`}).join("")}</div>`:""}
        ${h===Yt?`<div class="hwalk">\u{1F4CD} A ${(()=>{let pt=Yt.dist[h.st[h.i]]||0;return pt<1?Math.round(pt*100)*10+" m":pt.toFixed(1).replace(".",",")+" km"})()} \xB7 unos <b>${h.walk} min</b> a pie</div>`:""}
        ${Et?`<div class="hwalk away">\u{1F689} Est\xE1s en la estaci\xF3n: horas de salida del tren \xB7 <a data-hnotst="${h.key}">no, estoy en casa</a></div>`:Zt?`<div class="hwalk away">\u{1F6B6} De camino \xB7 te quedan unos <b>${Math.round(It)} min</b>${Z&&R<=3?" (seg\xFAn tu ubicaci\xF3n)":""} \xB7 <a data-hgo="${h.key}:0">cancelar</a></div>`:""}${rt&&h!==Yt?`<div class="hwalk away">\u{1F4CD} Est\xE1s a ${R<10?R.toFixed(1).replace(".",","):Math.round(R)} km: horas de salida del tren, sin contar el camino</div>`:""}<div class="hwalk"${rt||Et||Zt?" hidden":""}><button type="button" class="hgo" data-hgo="${h.key}:1">\u{1F6B6} Ya he salido</button> Tardo <button type="button" data-hw="${h.key}:-1">\u2212</button><b>${re} min</b><button type="button" data-hw="${h.key}:1">+</button> a pie hasta la estaci\xF3n</div>
        ${(()=>{let pt=xi.filter(Wt=>h.st.includes(Wt.sid));return pt.length?`<div class="hfav">${pt.map(Wt=>{let Be=Rh(Wt,t.days.indexOf(_.ymd)),De=Be&&xe.find(An=>String(An.num)===String(Be.num));return`\u2B50 <b>${Wt.t}</b> ${f(Wt.fam)} ${De?De.cancel?'<em class="dl d-hi">cancelado</em>':De.gone?"ya ha salido":De.dl>=1?`<em class="dl ${Qi(De.dl)}">+${Math.round(De.dl)}</em> sale a las ${at(De.est)}`:'<b class="okc">en hora</b>':"<small>hoy no circula o a\xFAn falta</small>"}`}).join("<br>")}</div>`:""})()}
        ${et?`<div class="hflt">Solo ${[...J].sort(L).map(Zn).join(" ")} \xB7 filtro de l\xEDneas activo${pn?` \xB7 hacia ${U} se muestran ${pn} (tu filtro no va hasta all\xED)`:""}</div>`:v?`<div class="hflt">El filtro (${[...X].sort(L).slice(0,3).map(Zn).join(" ")}) no pasa por aqu\xED: se ven todas tus l\xEDneas</div>`:""}
        ${ve.length?`<div class="hal ${hn?"bad":""}">\u26A0\uFE0F ${Vo(ve[0])} ${f(ve[0].txt)} <small>${Ho(ve[0])}</small>${ve.length>1?` <a data-hal>+${ve.length-1} avisos</a>`:""}</div>`:`<div class="hok">\u2713 Sin avisos para ${[...J].sort(L).join(", ")}</div>`}
        ${(()=>{let pt=h.st.flatMap(Wt=>Ih("",Wt));return pt.length?`<div class="hcr">${pt.slice(0,3).map(Wt=>`${Bo[Wt.kind]} <b>${f(ko(Wt.kind))}</b> <small>${Wt.up>1?Wt.up+" viajeros \xB7 ":""}${Wd(Wt)}</small>`).join("<br>")}</div>`:""})()}
        ${h===Yt?`<div class="hcols one">${xa("all",Qe("all"))}</div>`:h.hide==="out"?`<div class="hcols one">${xa("to",ii)}</div><a class="hshow" data-hshow="${h.key}">\u21BA Mostrar la otra direcci\xF3n</a>`:h.hide==="to"?`<div class="hcols one">${xa(zh,Vh)}</div><a class="hshow" data-hshow="${h.key}">\u21BA Mostrar la otra direcci\xF3n</a>`:`<div class="hcols">${xa("to",ii,"to")}${xa(zh,Vh,"out")}</div>`}
        ${xe.length>(h===Yt?7:8)?`<button type="button" class="hmore" data-hmore="${h.key}">${h.more?"\u25B4 Menos trenes":"\u25BE M\xE1s trenes \xB7 pr\xF3ximas horas"}</button>`:""}
        <div class="hsrc"><span class="hsrcT" hidden title="${uf?qn.get(M[E].id)?.d?"Salidas oficiales de Rodalies en directo":"Horario + retrasos mientras cargan las salidas oficiales":"Previsi\xF3n seg\xFAn horario (sin tiempo real)"} \xB7 \u25CF = tren circulando">${uf?qn.get(M[E].id)?.d?"\u25CF oficial en directo":"\u25CF horario + retrasos":"seg\xFAn horario"}</span><a data-hmap="${E}">\u{1F5FA}\uFE0F mapa</a>${h===Yt?"<a data-hloc>\u{1F4CD} actualizar</a>":`<a data-hset="${h.key}">\u270E cambiar</a>`}${h===fn?'<a data-hdel="work">\u2715 quitar</a>':""}</div>
      </div>`:"")+"</div>"}let vi={on:(()=>{try{return localStorage.getItem("rod_push")==="1"}catch{return!1}})(),busy:!1},tf=/iPhone|iPad|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,ef=()=>matchMedia("(display-mode: standalone)").matches||navigator.standalone===!0,_a=()=>{let h=[...Vn.st,...fn.st],_=new Set;return h.forEach(S=>{let E=Ht.get(S);E!=null&&M[E].fams.forEach(C=>_.add(C))}),{stations:h,lines:[..._].sort(L)}},pg=h=>Uint8Array.from(atob(h.replace(/-/g,"+").replace(/_/g,"/")+"===".slice((h.length+3)%4)),_=>_.charCodeAt(0));async function nf(){return!("serviceWorker"in navigator)||!("PushManager"in window)||location.protocol!=="https:"?null:await navigator.serviceWorker.getRegistration()||navigator.serviceWorker.register("./sw.js")}async function sf(h){let S=await(await fetch(G.url.replace(/\/+$/,"")+"/push/subscribe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sub:h.toJSON(),..._a()})})).json();if(!S.ok)throw new Error(S.err||"error")}let Dn={on:(()=>{try{return localStorage.getItem("rod_ln")==="1"}catch{return!1}})(),seen:null};function mg(){let{lines:h,stations:_}=_a(),S=new Set(h),E=new Set(_.map(O=>Ht.get(O))),C=G.alerts.filter(O=>[...O.fams].some(U=>S.has(U))||[...O.stops||[]].some(U=>E.has(U)));if(!Dn.seen){try{Dn.seen=new Set(JSON.parse(localStorage.getItem("rod_lnseen")||"[]"))}catch{Dn.seen=new Set}if(!Dn.seen.size){C.forEach(O=>Dn.seen.add(O.id+"|"+O.txt.length)),rf();return}}let I=C.filter(O=>!Dn.seen.has(O.id+"|"+O.txt.length));if(I.length&&(I.forEach(O=>Dn.seen.add(O.id+"|"+O.txt.length)),rf(),!(!Dn.on||!("Notification"in window)||Notification.permission!=="granted")))for(let O of I.slice(0,3)){let U=(O.src==="Adif"?"Adif \xB7 v\xEDa":"Rodalies")+(O.fams.size?" \xB7 "+[...O.fams].sort(L).slice(0,4).join(" "):""),B={body:O.txt.slice(0,240),icon:"icons/icon-192.png",tag:"rod-"+O.id};(navigator.serviceWorker&&navigator.serviceWorker.getRegistration?navigator.serviceWorker.getRegistration():Promise.resolve(null)).then(J=>J?J.showNotification(U,B):new Notification(U,B)).catch(()=>{try{new Notification(U,B)}catch{}})}}function rf(){try{localStorage.setItem("rod_lnseen",JSON.stringify([...Dn.seen].slice(-400)))}catch{}}async function gg(){if(Dn.on)Dn.on=!1,an("Avisos desactivados");else{if(!("Notification"in window)){an(tf&&!ef()?"En iPhone: Compartir \u2192 A\xF1adir a pantalla de inicio y activa los avisos desde la app":"Este navegador no permite avisos");return}if(await Notification.requestPermission()!=="granted"){an("Sin permiso para avisos: act\xEDvalo en los ajustes del navegador");return}Dn.on=!0,an("Listo: te aviso de incidencias en "+_a().lines.join(", ")+" mientras la app est\xE9 abierta")}try{localStorage.setItem("rod_ln",Dn.on?"1":"")}catch{}en(!0)}async function _g(){if(!G.repOk)return gg();if(!vi.busy){vi.busy=!0;try{let h=await nf();if(!h){an(tf&&!ef()?"En iPhone: Compartir \u2192 A\xF1adir a pantalla de inicio, abre la app desde ah\xED y activa los avisos":"Este navegador no permite avisos (hace falta abrir la web publicada, no el archivo)");return}if(await navigator.serviceWorker.ready,vi.on){let _=await h.pushManager.getSubscription();_&&(fetch(G.url.replace(/\/+$/,"")+"/push/unsubscribe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({endpoint:_.endpoint})}).catch(()=>{}),await _.unsubscribe().catch(()=>{})),vi.on=!1,an("Avisos desactivados")}else{if(!G.url){an("Hace falta el puente en directo");return}if(await Notification.requestPermission()!=="granted"){an("Sin permiso para avisos: act\xEDvalo en los ajustes del navegador");return}let S=(await wt(G.url.replace(/\/+$/,""),"/push/key")).key,E=await h.pushManager.getSubscription()||await h.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:pg(S)});await sf(E),vi.on=!0,an("Listo: te avisaremos de incidencias en "+_a().lines.join(", "))}try{localStorage.setItem("rod_push",vi.on?"1":"")}catch{}}catch(h){an("No se han podido activar los avisos: "+(h.message||h))}finally{vi.busy=!1,en(!0)}}}async function af(){if(vi.on)try{let h=await nf(),_=h&&await h.pushManager.getSubscription();_&&await sf(_)}catch{}}let Fh=!1,of="";function Oh(){let h=xt?"t"+(xt.tid||xt.vtid):Tt>=0?"s"+Tt:Dt?"a":b?"n":"";h!==of&&(Fh=!1,of=h);let _=innerWidth<=640&&!!h&&!Fh,S=p("#inf");S.classList.contains("compact")!==_&&(S.classList.toggle("compact",_),requestAnimationFrame(()=>{if(u.style.display!=="none"){let E=S.getBoundingClientRect().bottom;u.style.top=Math.round(E+8)+"px",u.style.maxHeight=Math.max(140,p("#rc").getBoundingClientRect().top-E-16)+"px"}}))}let Go=new Set;function xg(h,_,S,E){if(!(Dn.on||vi.on)||!("Notification"in window)||Notification.permission!=="granted")return;let C=ae(),I=_.sm-C.min-E;if(!C.live||_.dl<10||I>40||Go.has(_.num+"|"+_.sm))return;Go.add(_.num+"|"+_.sm);let O=`${h.ico} Tu tren de las ${at(_.sm)} va con +${Math.round(_.dl)} min`,U=`${_.fam} a ${_.dest} desde ${S}: saldr\xE1 hacia las ${at(_.est)}. Puedes salir ${Math.round(_.dl)} min m\xE1s tarde.`;(navigator.serviceWorker&&navigator.serviceWorker.getRegistration?navigator.serviceWorker.getRegistration():Promise.resolve(null)).then(B=>B?B.showNotification(O,{body:U,tag:"rd-"+_.num,icon:"icons/icon-192.png"}):new Notification(O,{body:U})).catch(()=>{try{new Notification(O,{body:U})}catch{}})}function en(h){let _=p("#home");if(!_)return;let S=performance.now();if(!h&&S-Qd<4e3)return;Qd=S;let E=ae(),C=[],I=_a(),O=v=>{let R=Uh(v);return R==null||!Yt.w?1:Math.hypot(M[R].w[0]-Yt.w[0],M[R].w[1]-Yt.w[1])},U=[Yt,...[Vn,fn].sort((v,R)=>O(v)-O(R))],B=U.map(v=>fg(v,E,C)).join("")+(ma.some(v=>v.open)&&I.lines.length,"");if(_.className=ma.some(v=>v.open)?"open":"",_._h===B)return;_._h=B,_.innerHTML=B;{let v=[..._.children].find(R=>R.classList.contains("hplace")&&!R.querySelector(".hnew"));v&&v.classList.add("lead")}let J=v=>v==="work"?fn:v==="near"?Yt:Vn;_.querySelectorAll("[data-hloc]").forEach(v=>v.onclick=()=>{Yt.err="",Nh(!0)}),_.querySelectorAll("[data-ht]").forEach(v=>v.onclick=()=>{if(p("#inf").classList.contains("compact")){Fh=!0,Oh();return}let R=J(v.dataset.ht);R.open=!R.open,ts(R),en(!0),(xt||Tt>=0||Dt||b)&&(u._h="",Ge())}),_.querySelectorAll("[data-hs]").forEach(v=>v.onclick=()=>{let[R,Z]=v.dataset.hs.split(":"),rt=J(R);rt.i=+Z,ts(rt),en(!0)}),_.querySelectorAll("[data-hw]").forEach(v=>v.onclick=()=>{let[R,Z]=v.dataset.hw.split(":"),rt=J(R);rt.walk=g(rt.walk+ +Z,0,60),ts(rt),en(!0)}),_.querySelectorAll("[data-hmap]").forEach(v=>v.onclick=()=>{let R=+v.dataset.hmap;b=Dt=z=!1,xt=null,Tt=R,Te(),Object.assign(s,{tx:M[R].w[0],ty:M[R].w[1],dist:18,tilt:Math.max(s.tilt,.5)}),u._h="",Ge(),a()}),_.querySelectorAll("[data-hset]").forEach(v=>v.onclick=()=>{ks=v.dataset.hset,m.value="",m.placeholder=ks==="work"?"Escribe la estaci\xF3n del trabajo\u2026":"Escribe la estaci\xF3n de casa\u2026",m.focus()}),_.querySelectorAll("[data-hnear]").forEach(v=>v.onclick=()=>{let R=Ht.get(Yt.st[0]);R!=null&&Bh(R,v.dataset.hnear)}),_.querySelectorAll("[data-hmore]").forEach(v=>v.onclick=()=>{let R=J(v.dataset.hmore);R.more=!R.more,en(!0)}),_.querySelectorAll("[data-hhide]").forEach(v=>v.onclick=R=>{R.stopPropagation();let[Z,rt]=v.dataset.hhide.split(":"),Et=J(Z);Et.hide=rt,ts(Et),en(!0)}),_.querySelectorAll("[data-hshow]").forEach(v=>v.onclick=()=>{let R=J(v.dataset.hshow);R.hide="",ts(R),en(!0)}),_.querySelectorAll("[data-hgo]").forEach(v=>v.onclick=R=>{R.stopPropagation();let[Z,rt]=v.dataset.hgo.split(":"),Et=J(Z);Et.goAt=rt==="1"?Date.now():0,ts(Et),en(!0)}),_.querySelectorAll("[data-hnotst]").forEach(v=>v.onclick=R=>{R.stopPropagation(),Yt.homeW=Yt.w;try{localStorage.setItem("rod_homew",JSON.stringify(Yt.w))}catch{}en(!0)}),_.querySelectorAll("[data-hdel]").forEach(v=>v.onclick=()=>{fn.st=[],fn.open=!1,ts(fn),en(!0),af()}),_.querySelectorAll("[data-dk]").forEach(v=>v.onclick=()=>lf(C[+v.dataset.dk])),_.querySelectorAll("[data-hal]").forEach(v=>v.onclick=()=>p("#alr").click());let et=p("#bell");et||(et=document.createElement("button"),et.type="button",et.id="bell",et.onclick=_g,p("#inf .more").prepend(et));{let v=G.repOk?vi.on:Dn.on;et.hidden=!I.lines.length,et.className=v?"on":"",et.textContent=(v?"\u{1F514} Avisos activados \xB7 ":"\u{1F515} Activar avisos de ")+I.lines.join(", "),et.title=(v?"Avisos activados":"Activar avisos")+" de "+I.lines.join(", ")+(G.repOk?"":" (mientras la app est\xE9 abierta)")}Xd(_)}function lf(h){if(!h)return;let _=t.days.indexOf(ae().ymd),S=j.find(I=>I.real?h.tid&&I.v.tid===h.tid||h.num&&String(I.tr?I.tr.num:I.v.num)===String(h.num):h.tr&&I.tr===h.tr||h.num&&I.tr&&String(I.tr.num)===String(h.num)),E=h.tr||S&&S.tr||(K[_]||[]).find(I=>String(I.num)===String(h.num));if(b=Dt=z=!1,Tt=-1,xt=S?S.tr||{vtid:S.v.tid}:E||null,!xt)return;Ct=S&&S.tr?S.tr:null,Ct&&innerWidth<=640&&(u.classList.add("peek"),p("#rc").classList.contains("min")||p("#rcgrab").click());let C=S?S.p.w:null;C&&Object.assign(s,{tx:C[0],ty:C[1],dist:Math.min(s.dist,22)}),Te(),u._h="",Ge(),tt=0,a()}let ks=!1;m.addEventListener("blur",()=>setTimeout(()=>{ks&&!m.value.trim()&&(ks=!1,m.placeholder="Buscar estaci\xF3n o municipio\u2026")},600));function rb(){}function Bh(h,_){let S=_==="work"?fn:Vn,E=M[h].id,C=M.filter(I=>I.fams.size&&I!==M[h]&&Math.hypot(I.w[0]-M[h].w[0],I.w[1]-M[h].w[1])<.6).map(I=>I.id);S.st=[E,...C].slice(0,3),S.i=0,S.open=!0,ts(S),en(!0),af()}let Wo=p("#lines");Wo.innerHTML='<button type="button" class="all" data-f="*">Todas</button>'+V.map(h=>`<button type="button" style="--c:${$[h]}" data-f="${h}">${h}</button>`).join("");function cf(){try{en(!0)}catch{}{let h=p("#linebtn");h||(h=document.createElement("button"),h.type="button",h.id="linebtn",Wo.after(h),h.onclick=()=>{st=[...X][0],z=b=Dt=!1,u._h="",Ge()});let _=X.size===1?[...X][0]:"";h.hidden=!_,_&&(h.innerHTML=`\u{1F4CB} Estado de la ${f(_)} ahora`)}Wo.querySelectorAll("[data-f]").forEach(h=>{h.dataset.f!=="*"&&h.classList.toggle("off",!X.has(h.dataset.f))})}Wo.querySelectorAll("[data-f]").forEach(h=>h.onclick=()=>{let _=h.dataset.f;_==="*"?V.forEach(S=>X.add(S)):X.size===V.length?(X.clear(),X.add(_)):X.has(_)?(X.delete(_),X.size||V.forEach(S=>X.add(S))):X.add(_);try{localStorage.setItem("rod_lines",JSON.stringify([...X]))}catch{}cf(),ce(),Te(),Ph(),tt=0,a()});let kh=[...document.querySelectorAll("[data-sp]")],fi=0;function hf(h){let _=ae();h&&(At===h||fi===h)?At?(Gt=_.min,Qt=_.min,At=0,fi=h):(le=performance.now(),At=h,fi=0):h===0?(At=0,Qt=null,fi=0):(Gt=_.min,le=performance.now(),Qt=_.min,At=h,fi=0),kh.forEach(S=>{let E=+S.dataset.sp;S.classList.toggle("on",E===(At||fi)||!At&&!fi&&Qt==null&&E===0),S.classList.toggle("pz",!!fi&&E===fi),S.textContent=E===0?"Ahora":fi===E?"\u25B6 \xD7"+E:At===E?"\u23F8 \xD7"+E:"\xD7"+E}),tt=0,a()}kh.forEach(h=>h.onclick=()=>hf(+h.dataset.sp)),p("#tsl").oninput=h=>{let _=+h.target.value;Gt=_,Qt=_,le=performance.now(),At===0&&!fi&&kh.forEach(S=>S.classList.remove("on")),tt=0,a()},setInterval(()=>{Qt!=null&&At&&Gt+(performance.now()-le)/6e4*At>1560&&(Gt=240,le=performance.now())},1e3),window.__rodSearch=h=>{let _=x(h.trim());if(!_){d.style.display="none",d._pick=null;return}let S=[],E=[];M.forEach((U,B)=>{if(!U.fams.size)return;let J=x(U.n);J.startsWith(_)||J.includes(" "+_)||J.includes("-"+_)?S.push(B):J.includes(_)&&E.push(B)});let C=S.concat(E).slice(0,7),I=A.filter(U=>x(U.name).startsWith(_)).sort((U,B)=>B.pop-U.pop).slice(0,3),O=C.map(U=>({h:`\u{1F689} ${f(M[U].n)}<em>${[...M[U].fams].sort(L).slice(0,3).map(B=>`<em class="ls" style="background:${$[B]}">${B}</em>`).join(" ")}</em>`,go:()=>{if(ks){let B=ks;ks=!1,m.placeholder="Buscar estaci\xF3n o municipio\u2026",Bh(U,B);return}b=!1,Dt=!1,z=!1,Tt=U,xt=null,Ct=null,Te(),Object.assign(s,{tx:M[U].w[0],ty:M[U].w[1],dist:Math.min(s.dist,20),tilt:Math.max(s.tilt,.5)}),Ge(),a()}})).concat(I.map(U=>({h:`${f(U.name)}<em>municipio</em>`,go:()=>{Object.assign(s,{tx:U.cx,ty:U.cy,dist:g(U.size*3+14,14,60)}),a()}})));d.innerHTML=O.map((U,B)=>`<li data-i="${B}">${U.h}</li>`).join("")||'<li class="no">Sin resultados</li>',d.style.display="block",d._pick=U=>{O[U]&&(O[U].go(),d.style.display="none",m.value="",m.blur())},d.querySelectorAll("li[data-i]").forEach(U=>U.onclick=()=>d._pick(+U.dataset.i))},cf(),Te();try{let h=new URLSearchParams(location.search).get("st");if(h){let _=x(h),S=-1,E=0;M.forEach((C,I)=>{if(!C.fams.size)return;let O=x(C.n),U=O===_?3:O.startsWith(_)||_.startsWith(O)?2:O.includes(_)||_.includes(O)?1:0;U>E&&(E=U,S=I)}),S>=0&&setTimeout(()=>{Tt=S,Te(),Object.assign(s,{tx:M[S].w[0],ty:M[S].w[1],dist:18,tilt:.5}),Ge(),a()},300)}}catch{}window.__rod={TID:ot,SID:Ht,byDay:K,get days(){return t.days},get hist(){return Ce},get past(){return pe.cur},get cols(){return ni.mesh?ni.mesh.count:-1},get dist(){return r.dist},get follow(){return Ct},get selTrip(){return xt},ST:M,TR:nt,FAM:V,act:()=>j,setSpeed:hf,RT:G,pollRT:oe,nowState:ae,posAt:Ns,activeTrips:Us,LL:vt,select:h=>{xt=h,Ge()}}}var ea=window.__DATA__;var Pe=i=>document.querySelector(i),us=i=>String(i).replace(/\B(?=(\d{3})+(?!\d))/g,"."),Bn=(i,t,e)=>Math.min(e,Math.max(t,i)),bd=i=>i.normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase(),Xn=Pe("#c"),Io=new eh({canvas:Xn,antialias:!0});Io.setPixelRatio(Math.min(devicePixelRatio||1,2));var ds=new Oa;ds.background=new ue(15659509);var _h=35,Ji=new Fn(_h,1,2,1500);ds.add(new ao(16777215,9080992,1));var Rm=new lo(16777215,.9);Rm.position.set(-40,-70,90);ds.add(Rm);var Yi=100/ea.w,Ao=ea.w/2,Co=ea.h/2,sn=[],Md=new Ti;ds.add(Md);var dh=new Ys({color:16777215,transparent:!0,opacity:.55});for(let i of ea.m){let t=new Ti,e=[],n=[],s=1e9,r=-1e9,a=1e9,o=-1e9;for(let g of i.g){let x=g.map(p=>{let f=[];for(let N=0;N<p.length;N+=2)f.push(new Ft((p[N]-Ao)*Yi,(p[N+1]-Co)*Yi));return f.length>1&&f[0].equals(f[f.length-1])&&f.pop(),f}).filter(p=>p.length>=3);if(!x.length)continue;let A=new Vr(x[0]);for(let p=1;p<x.length;p++)A.holes.push(new Js(x[p]));e.push(A);for(let p of x[0])s=Math.min(s,p.x),r=Math.max(r,p.x),a=Math.min(a,p.y),o=Math.max(o,p.y);for(let p of x)n.push(new Ga(new ln().setFromPoints(p.map(f=>new W(f.x,f.y,0))),dh))}if(!e.length)continue;let l;try{l=new to(e,{depth:1,bevelEnabled:!1})}catch{continue}let c=new io({color:13421772}),u=new bn(l,c);t.add(u);let m=new Ti;n.forEach(g=>m.add(g)),m.position.z=.04,Md.add(m),t.scale.z=.01,Md.add(t);let d={og:m,rings:i.g,inF:!0,sel:null,code:i.c,name:i.n,pop:i.p,area:i.a,pr:i.pr,rankP:0,rankD:0,group:t,mesh:u,mat:c,cx:(s+r)/2,cy:(a+o)/2,size:Math.max(r-s,o-a),z:.01,zt:.01,rank:0};u.userData.m=d,sn.push(d)}var I1=sn.map(i=>i.mesh),bm=i=>{let t=0;for(let e=0;e<i.length;e+=2){let n=(e+2)%i.length;t+=i[e]*i[n+1]-i[n]*i[e+1]}return Math.abs(t)/2},Im=0,Pm=0;for(let i of sn){for(let t of i.rings)Im+=bm(t[0])-t.slice(1).reduce((e,n)=>e+bm(n),0);Pm+=i.area}var GS=Math.sqrt(Pm/Im),lh={"08":"Barcelona",17:"Girona",25:"Lleida",43:"Tarragona"},Lm={"08":"provincia de Barcelona",17:"provincia de Girona",25:"provincia de Lleida",43:"provincia de Tarragona"},Id="sqrt",Pd="pop",yd=0,wd=0,jr=1,To=1,WS={sqrt:i=>Math.sqrt(i),lin:i=>i,log:i=>Math.log10(Math.max(i,1))},Ed=i=>Pd==="pop"?i.pop:i.pop/i.area,oh=["#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#b10026","#5c0020"].map(i=>new ue(i));function $S(i){i=Bn(i,0,1)*(oh.length-1);let t=Math.min(Math.floor(i),oh.length-2);return oh[t].clone().lerp(oh[t+1],i-t)}var Qr=i=>i>=100?us(Math.round(i)):i.toLocaleString("es-ES",{maximumFractionDigits:1});function XS(){wd=0;for(let i of sn)wd+=i.pop;[...sn].sort((i,t)=>t.pop-i.pop).forEach((i,t)=>i.rankP=t+1),[...sn].sort((i,t)=>t.pop/t.area-i.pop/i.area).forEach((i,t)=>i.rankD=t+1),Um()}var Dm=new ue("#d3d8e2"),Nm=new ue("#eceff3");window.__mapTheme=i=>{ds.background=new ue(i?856345:15659509),Nm.set(i?"#2b3242":"#eceff3"),Dm.set(i?"#1a1f29":"#d3d8e2"),dh.color.set(i?856345:16777215),dh.opacity=i?.7:.55,Ld.color.set(i?329483:2764864),Dd.color.set(i?9081766:16777215);for(let t of sn)t.base&&xh(t);wn()};function xh(i){i.mat.color.copy(i.base).lerp(Nm,document.documentElement.classList.contains("dark")?.95:.86),i.inF||i.mat.color.lerp(Dm,.8)}function Um(){jr=1,To=1e12;for(let e of sn){let n=Ed(e);jr=Math.max(jr,n),To=Math.min(To,n)}let i=Math.log10(Math.max(To,.01)),t=Math.log10(jr);for(let e of sn)e.base=$S((Math.log10(Math.max(Ed(e),.01))-i)/(t-i)),xh(e);Pe("#lmin").textContent=Qr(To),Pe("#lmax").textContent=Qr(jr),Pe("#lname").textContent=Pd==="pop"?"habitantes":"hab./km\xB2",vh()}function vh(){let i=WS[Id],t=i(jr),e=24*yd;for(let n of sn)n.zt=yd<=.001?.01:Math.max(.12*Math.min(1,yd),e*i(Ed(n))/t)*(n.inF?1:.1);wn()}var Mm=Object.fromEntries(sn.map(i=>[i.code,i])),ch=[],Fm=[];for(let i of ea.bd){let t=Mm[i.a],e=Mm[i.b];if(!(!t||!e))for(let n=0;n+3<i.p.length;n+=2)Fm.push((i.p[n]-Ao)*Yi,(i.p[n+1]-Co)*Yi,0,(i.p[n+2]-Ao)*Yi,(i.p[n+3]-Co)*Yi,0),ch.push(t,e)}var fh=new cs;fh.setPositions(Fm);var Ld=new Wi({color:2764864,linewidth:4.4,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3}),Dd=new Wi({color:16777215,linewidth:2.4,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-6});[Ld,Dd].forEach((i,t)=>{let e=new ir(fh,i);e.frustumCulled=!1,e.renderOrder=10+t,ds.add(e)});function qS(){let i=fh.attributes.instanceStart.data.array;for(let t=0;t<ch.length;t+=2){let e=Math.max(ch[t].z,ch[t+1].z)+.12,n=t/2*6;i[n+2]=e,i[n+5]=e}fh.attributes.instanceStart.data.needsUpdate=!0}var ph={};for(let i of Object.keys(lh)){let t=sn.filter(u=>u.pr===i),e=0,n=0,s=0,r=1e9,a=-1e9,o=1e9,l=-1e9;for(let u of t)e+=u.area,n+=u.cx*u.area,s+=u.cy*u.area,r=Math.min(r,u.cx),a=Math.max(a,u.cx),o=Math.min(o,u.cy),l=Math.max(l,u.cy);let c=document.createElement("div");c.className="plab",c.textContent=lh[i],c.title="Ver solo "+Lm[i],c.onclick=()=>sb("pr:"+i),document.body.appendChild(c),ph[i]={el:c,p:new W(n/e,s/e,0),cx:(r+a)/2,cy:(o+l)/2,ext:Math.max(a-r,l-o),ext2:[a-r,l-o],area:e,name:lh[i]}}var Sd=new W;function YS(){for(let i in ph){let t=ph[i];Sd.copy(t.p).project(Ji),t.el.style.transform=`translate(-50%,-50%) translate(${(Sd.x*.5+.5)*innerWidth}px,${(-Sd.y*.5+.5)*innerHeight}px)`}}var un={tilt:0,yaw:0,dist:150,tx:0,ty:0},ge={...un};function ZS(){let i=innerWidth/innerHeight,t=Math.tan(_h*Math.PI/360);return Math.max(ea.h*Yi*1.1,100*1.1/i)/(2*t)}var JS=document.getElementById("northr");document.getElementById("north").addEventListener("click",()=>{ge.yaw=Math.round(ge.yaw/(2*Math.PI))*2*Math.PI,ge.tilt=0,wn()});function Nd(){Object.assign(ge,{tilt:0,yaw:0,dist:ZS(),tx:0,ty:0}),wn()}function KS(){let{tilt:i,yaw:t,dist:e,tx:n,ty:s}=un;Ji.position.set(n+e*Math.sin(i)*Math.sin(t),s-e*Math.sin(i)*Math.cos(t),e*Math.cos(i)),Ji.up.set(-Math.cos(i)*Math.sin(t),Math.cos(i)*Math.cos(t),Math.sin(i)),Ji.lookAt(n,s,0)}var hh=!0,wm=performance.now(),Ro=new Map;function wn(){hh=!0}function Om(i){requestAnimationFrame(Om);let t=Bn((i-wm)/1e3,0,.05);wm=i;let e=1-Math.exp(-t*10),n=!1;for(let s of Object.keys(un)){let r=ge[s]-un[s];Math.abs(r)>1e-4*(s==="dist"?10:1)?(un[s]+=r*e,n=!0):un[s]=ge[s]}for(let s of sn){let r=s.zt-s.z;Math.abs(r)>.002?(s.z+=r*Math.min(1,e*.8),s.group.scale.z=s.z,s.og.position.z=s.z+.04,n=!0):s.z!==s.zt&&(s.z=s.zt,s.group.scale.z=s.z,s.og.position.z=s.z+.04)}for(let[s,r]of Ro){let a=(i-r)/1800;a>=1?(Ro.delete(s),lr(s)):lr(s,.5*Math.sin(Math.PI*a)),n=!0}if(window.__rodTick&&window.__rodTick(i)&&(hh=!0),n||hh){JS.style.transform=`rotate(${un.yaw}rad) scaleY(${(.55+.45*Math.cos(un.tilt)).toFixed(3)})`;{let s=Math.abs(Math.sin(ge.yaw/2))<.02&&ge.tilt<.03,r=document.getElementById("north");r.classList.contains("flat")!==s&&(r.classList.toggle("flat",s),r.title=s?"El norte ya est\xE1 arriba":"Poner el norte arriba y el mapa plano")}KS(),qS(),YS(),window.__rodFrame&&window.__rodFrame(),Io.render(ds,Ji),hh=n,Pe("#tilt").value=Math.round(ge.tilt*180/Math.PI),Pe("#yaw").value=Math.round(((ge.yaw*180/Math.PI+180)%360+360)%360-180)}}function Bm(){Io.setSize(innerWidth,innerHeight,!1),Ji.aspect=innerWidth/innerHeight,Ji.updateProjectionMatrix(),Ld.resolution.set(innerWidth,innerHeight),Dd.resolution.set(innerWidth,innerHeight),window.__rodResize&&window.__rodResize(),wn()}addEventListener("resize",()=>{Bm(),Je.length&&Ls()});Xn.addEventListener("wheel",i=>{i.preventDefault();let t=i.deltaMode===1?16:1,e=i.deltaY*t;if(i.altKey){let n=(Math.abs(i.deltaX)>Math.abs(i.deltaY)?i.deltaX:i.deltaY)*t;ge.yaw+=n*.0035}else i.ctrlKey?ge.dist=Bn(ge.dist*Math.exp(e*.01),6,400):ge.tilt=Bn(ge.tilt+e*.002,0,1.32);wn()},{passive:!1});Xn.addEventListener("contextmenu",i=>i.preventDefault());var Zi=new Map,ti=null,rr=0,Td=0,Ad=0;var mh=null;Xn.addEventListener("pointerdown",i=>{if(i.pointerType!=="mouse"&&!document.body.classList.contains("used")&&(document.body.classList.add("used"),Je.length&&setTimeout(Ls,50)),Xn.setPointerCapture(i.pointerId),Zi.set(i.pointerId,{x:i.clientX,y:i.clientY}),Zi.size===1&&(ti={rot:i.button===2||i.altKey,moved:0,multi:!1,touch:i.pointerType!=="mouse"}),Zi.size===2){let[t,e]=[...Zi.values()];rr=Math.hypot(t.x-e.x,t.y-e.y),Td=Math.atan2(e.y-t.y,e.x-t.x),Ad=(t.y+e.y)/2,mh={mode:null,rot:0,sc:0,tl:0},ti&&(ti.multi=!0)}Ud()});Xn.addEventListener("pointermove",i=>{let t=Zi.get(i.pointerId);if(!t){hs={x:i.clientX,y:i.clientY},Cd||(Cd=requestAnimationFrame(QS));return}let e=i.clientX-t.x,n=i.clientY-t.y;if(t.x=i.clientX,t.y=i.clientY,Zi.size===2){let[s,r]=[...Zi.values()],a=Math.hypot(s.x-r.x,s.y-r.y),o=Math.atan2(r.y-s.y,r.x-s.x),l=(s.y+r.y)/2,c=o-Td;c>Math.PI&&(c-=2*Math.PI),c<-Math.PI&&(c+=2*Math.PI);let u=rr?a-rr:0,m=l-Ad,d=mh||(mh={mode:null,rot:0,sc:0,tl:0});d.rot+=c,d.sc+=u,d.tl+=m,d.mode?d.mode==="zoom"&&Math.abs(d.rot)>.45&&(d.mode="rotate"):Math.abs(d.rot)>.3?d.mode="rotate":Math.abs(d.tl)>30&&Math.abs(d.sc)<18?d.mode="tilt":Math.abs(d.sc)>12&&(d.mode="zoom"),(d.mode==="zoom"||d.mode==="rotate")&&rr&&(ge.dist=Bn(ge.dist*rr/a,6,400)),d.mode==="rotate"&&(ge.yaw+=c,un.yaw=ge.yaw),d.mode==="tilt"&&(ge.tilt=Bn(ge.tilt-m*.006,0,1.32),un.tilt=ge.tilt),rr=a,Td=o,Ad=l,wn();return}if(ti.moved+=Math.abs(e)+Math.abs(n),ti.rot||i.altKey)ge.yaw+=e*.005,ge.tilt=Bn(ge.tilt+n*.004,0,1.32),un.yaw=ge.yaw,un.tilt=ge.tilt;else{let s=2*un.dist*Math.tan(_h*Math.PI/360)/innerHeight,r=Math.sin(un.yaw),a=Math.cos(un.yaw),o=1/Math.max(Math.cos(un.tilt),.3);ge.tx=Bn(ge.tx-a*e*s+-r*n*s*o,-70,70),ge.ty=Bn(ge.ty-r*e*s+a*n*s*o,-70,70),un.tx=ge.tx,un.ty=ge.ty}wn()});var km=i=>{let t=ti&&!ti.rot&&!ti.multi&&ti.moved<(ti.touch?12:6)&&i.type==="pointerup"&&Zi.size===1,e=ti&&ti.touch;Zi.delete(i.pointerId),rr=0,mh=null,Zi.size||(ti=null),t&&window.__rodTap&&window.__rodTap(i.clientX,i.clientY)};Xn.addEventListener("pointerup",km);Xn.addEventListener("pointercancel",km);Xn.addEventListener("dblclick",Nd);addEventListener("keydown",i=>{i.key==="Alt"&&(Xn.style.cursor="move")});addEventListener("keyup",i=>{i.key==="Alt"&&(Xn.style.cursor="")});addEventListener("blur",()=>{Xn.style.cursor=""});var jS=new ho,Em=new Ft,hs=null,Cd=0,ar=null;function QS(){if(Cd=0,!hs||ti)return;Em.set(hs.x/innerWidth*2-1,-(hs.y/innerHeight)*2+1),jS.setFromCamera(Em,Ji);let i=null;if(i!==ar){let e=ar;ar=i,e&&lr(e),i&&lr(i),wn()}let t=window.__rodHover&&window.__rodHover(hs.x,hs.y);if(t){sr.innerHTML=t,sr.style.display="block";let e=sr.offsetWidth,n=sr.offsetHeight;sr.style.left=Bn(hs.x+14,6,innerWidth-e-6)+"px",sr.style.top=Bn(hs.y+14,6,innerHeight-n-6)+"px",Xn.style.cursor="pointer"}else Ud(),Xn.style.cursor=""}Xn.addEventListener("pointerleave",()=>{if(hs=null,ar){let i=ar;ar=null,lr(i),wn()}Ud()});var sr=Pe("#tip");function Ud(){sr.style.display="none"}document.querySelectorAll("[data-metric]").forEach(i=>i.onclick=()=>{Pd=i.dataset.metric,document.querySelectorAll("[data-metric]").forEach(t=>t.classList.toggle("on",t===i)),Um()});document.querySelectorAll("[data-mode]").forEach(i=>i.onclick=()=>{Id=i.dataset.mode,document.querySelectorAll("[data-mode]").forEach(t=>t.classList.toggle("on",t===i)),vh()});Pe("#yaw").oninput=i=>{ge.yaw=+i.target.value*Math.PI/180,wn()};Pe("#tilt").oninput=i=>{ge.tilt=+i.target.value*Math.PI/180,wn()};Pe("#zin").onclick=()=>{ge.dist=Bn(ge.dist*.75,6,400),wn()};Pe("#zout").onclick=()=>{ge.dist=Bn(ge.dist/.75,6,400),wn()};Pe("#rst").onclick=Nd;var Tm=["#2563eb","#059669","#7c3aed","#db2777","#0891b2","#ca8a04"],Je=[],Am={},tb=i=>Am[i]||(Am[i]=new Ys({color:i}));function zm(i,t){i.og.children.forEach(e=>e.material=t?tb(t):dh)}function lr(i,t=0){let e=i.mat.emissive;i===ar?e.setHex(5592405):i.sel?e.copy(i.sel.tint):e.setHex(0),t&&e.addScalar(t)}function Fd(i,t){let e=1e9,n=-1e9,s=1e9,r=-1e9;for(let c of i)e=Math.min(e,c.cx-c.size/2),n=Math.max(n,c.cx+c.size/2),s=Math.min(s,c.cy-c.size/2),r=Math.max(r,c.cy+c.size/2);let a=innerWidth/innerHeight,o=Math.tan(_h*Math.PI/360),l=i.length===1?Bn(i[0].size*3.2+14,14,120):Bn(Math.max((r-s)*1.5,(n-e)*1.5/a)/(2*o)+6,14,300);Object.assign(ge,{tx:(e+n)/2,ty:(s+r)/2,dist:l,tilt:t,yaw:0}),wn()}var Ps=Pe("#q"),ci=Pe("#list"),Ze=Pe("#mcs");function yh(i,t=!0){if(ci.style.display="none",Ps.value="",!i.sel){Je.length>=6&&Vm(Je[0].o,!0);let e=new Set(Je.map(s=>s.color)),n=Tm.find(s=>!e.has(s))||Tm[0];i.sel={o:i,color:n,tint:new ue(n).multiplyScalar(.12)},Je.push(i.sel),zm(i,n)}Ze.classList.contains("min")&&Po(!1),Ro.set(i,performance.now()),lr(i),t&&Fd([i],Math.max(ge.tilt,.9)),Ls()}function Vm(i,t){let e=Je.indexOf(i.sel);e>=0&&Je.splice(e,1),i.sel=null,zm(i,null),lr(i),wn(),t||Ls()}function Hm(i){let t=Math.min(devicePixelRatio||1,2),e=i.clientWidth,n=i.clientHeight;i.width=e*t,i.height=n*t;let s=i.getContext("2d");s.scale(t,t),s.clearRect(0,0,e,n);let r=Je.map(u=>{let m=1e9,d=-1e9,g=1e9,x=-1e9;for(let A of u.o.rings)for(let p=0;p<A[0].length;p+=2)m=Math.min(m,A[0][p]),d=Math.max(d,A[0][p]),g=Math.min(g,A[0][p+1]),x=Math.max(x,A[0][p+1]);return{x0:m,x1:d,y0:g,y1:x}}),a=Math.max(...r.map(u=>Math.max(u.x1-u.x0,u.y1-u.y0))),o=(Math.min(e,n)-22)/a;Je.forEach((u,m)=>{let d=r[m],g=(d.x0+d.x1)/2,x=(d.y0+d.y1)/2;s.beginPath();for(let A of u.o.rings)for(let p of A)for(let f=0;f<p.length;f+=2){let N=e/2+(p[f]-g)*o,F=n/2-(p[f+1]-x)*o;f?s.lineTo(N,F):s.moveTo(N,F),f===p.length-2&&s.closePath()}s.fillStyle=u.color+"40",s.fill("evenodd"),s.lineWidth=1.6,s.strokeStyle=u.color,s.stroke()});let l=o/GS,c=[.5,1,2,5,10,20,50,100].find(u=>u*l>=28)||100;s.fillStyle="#6b7385",s.fillRect(10,n-12,c*l,2),s.font="10px system-ui",s.fillText(c+" km",12+c*l,n-8)}function Ls(){if(!Je.length){Ze.innerHTML="",Ze.style.display="none",Po(!1);return}if(Ze.style.display="flex",innerWidth<=640){let e=Pe("#inf").getBoundingClientRect().bottom;Ze.style.top=Math.round(e+8)+"px",Ze.style.maxHeight=Math.max(110,Math.min(innerHeight*(Pe("#rc").classList.contains("min")?.7:.4),Pe("#rc").getBoundingClientRect().top-e-16))+"px",Ze.style.width=""}else if(innerHeight<=500){let e=Pe("#inf").getBoundingClientRect().bottom;Ze.style.top=Math.round(e+8)+"px",Ze.style.maxHeight=Math.max(120,innerHeight-e-20)+"px",Ze.style.width="min(290px, 40vw)"}else Ze.style.top="",Ze.style.maxHeight="",Ze.style.width="";let i=Je.map((e,n)=>{let s=e.o;return`<div class="mc" draggable="true" data-i="${n}" style="--c:${e.color}"><button class="x" data-x="${n}" title="Cerrar">\xD7</button><div class="mh"><i class="dot"></i><b>${s.name}</b><em>${lh[s.pr]}</em></div><div class="mb">${us(s.pop)} hab.</div><small>${Qr(s.area)} km\xB2 \xB7 ${Qr(s.pop/s.area)} hab./km\xB2 \xB7 n\xBA ${s.rankP} en poblaci\xF3n</small></div>`}).join("");if(Je.length>1){let e=s=>Math.max(...Je.map(s));if(i+='<div class="cmp"><div class="ct">Comparar <small>arrastra una ficha sobre otra para reordenar</small></div><canvas id="sil"></canvas><small class="sc">Siluetas superpuestas a la misma escala</small>'+[["Habitantes",s=>s.o.pop,us],["Superficie (km\xB2)",s=>s.o.area,Qr],["Densidad (hab./km\xB2)",s=>s.o.pop/s.o.area,Qr]].map(([s,r,a])=>`<div class="cr"><span>${s}</span>${Je.map(o=>`<div class="bw"><i style="width:${Math.max(2,r(o)/e(r)*100)}%;background:${o.color}"></i><b>${a(r(o))}</b></div>`).join("")}</div>`).join(""),Je.length===2){let[s,r]=Je.map(c=>c.o),[a,o]=s.pop>=r.pop?[s,r]:[r,s],l=(c,u)=>(c>=u?c/u:u/c).toLocaleString("es-ES",{maximumFractionDigits:1});i+=`<small class="ratio"><b>${a.name}</b> tiene ${l(a.pop,o.pop)}\xD7 los habitantes de <b>${o.name}</b> y ocupa ${l(a.area,o.area)}\xD7 ${a.area>=o.area?"su superficie":"menos superficie"}.</small>`}i+="</div>"}Ze.innerHTML=i,Ze.querySelectorAll("[data-x]").forEach(e=>e.onclick=n=>{n.stopPropagation(),Vm(Je[+e.dataset.x].o)}),Ze.querySelectorAll(".mc").forEach(e=>{e.onclick=()=>Fd([Je[+e.dataset.i].o],Math.max(ge.tilt,.9)),e.onmouseenter=()=>{let n=Je[+e.dataset.i].o;Ro.set(n,performance.now())},e.ondragstart=n=>{n.dataTransfer.setData("text/plain",e.dataset.i),e.classList.add("drag")},e.ondragend=()=>e.classList.remove("drag"),e.ondragover=n=>{n.preventDefault(),e.classList.add("over")},e.ondragleave=()=>e.classList.remove("over"),e.ondrop=n=>{n.preventDefault();let s=+n.dataTransfer.getData("text/plain"),r=+e.dataset.i;if(s!==r){let[a]=Je.splice(s,1);Je.splice(r,0,a),Ls();let o=Pe("#sil");o&&o.classList.add("flash")}}});let t=Pe("#sil");t&&Hm(t)}Ps.addEventListener("input",()=>{if(window.__rodSearch){window.__rodSearch(Ps.value);return}let i=bd(Ps.value.trim());if(!i){ci.style.display="none";return}let t=[],e=[];for(let s of sn){let r=bd(s.name);r.startsWith(i)?t.push(s):r.includes(i)&&e.push(s)}let n=t.sort((s,r)=>r.pop-s.pop).concat(e.sort((s,r)=>r.pop-s.pop)).slice(0,8);ci.innerHTML=n.map((s,r)=>`<li data-i="${r}">${s.name}<em>${us(s.pop)}</em></li>`).join("")||'<li class="no">Sin resultados</li>',ci.style.display="block",ci.querySelectorAll("li[data-i]").forEach(s=>s.onclick=()=>yh(n[+s.dataset.i])),ci._r=n});Ps.addEventListener("keydown",i=>{i.key==="Enter"&&ci._pick?ci._pick(0):i.key==="Enter"&&ci._r&&ci._r[0]&&yh(ci._r[0]),i.key==="Escape"&&(Ps.value="",ci.style.display="none")});addEventListener("keydown",i=>{i.key==="Escape"&&i.target!==Ps&&Gm()});var Cm=0;addEventListener("resize",()=>{clearTimeout(Cm),Cm=setTimeout(()=>{let i=Pe("#sil");i&&Hm(i)},120)});var gh=null,Rd=Pe("#chip");function eb(i,t,e=.8){gh={codes:new Set(i.map(n=>n.code)),label:t},sn.forEach(n=>{n.inF=gh.codes.has(n.code),xh(n)}),Rd.innerHTML=`<span>Mostrando: <b>${t}</b> \xB7 ${i.length} municipio${i.length===1?"":"s"}</span><button id="chx" title="Quitar filtro">\xD7</button>`,Rd.style.display="flex",Pe("#chx").onclick=Gm,vh(),Fd(i,e),i.slice(0,40).forEach(n=>Ro.set(n,performance.now()))}function Gm(){gh&&(gh=null,sn.forEach(i=>{i.inF=!0,xh(i)}),Rd.style.display="none",vh())}var nb="prov";function ib(i){let t=[...sn].sort((a,o)=>o.pop-a.pop),e=[...sn].sort((a,o)=>o.pop/o.area-a.pop/a.area),[n,s,r]=i.split(":");if(n==="pr")return[sn.filter(a=>a.pr===s),Lm[s]];if(n==="top")return s==="pop"?[t.slice(0,10),"10 con m\xE1s habitantes"]:[e.slice(0,10),"10 m\xE1s densos"];if(n==="low")return s==="pop"?[t.slice(-10),"10 con menos habitantes"]:[e.slice(-10),"10 menos densos"];if(n==="size")return[sn.filter(a=>a.pop>=+s&&a.pop<+r),+r>1e9?`${us(+s)} o m\xE1s habitantes`:+s==0?`menos de ${us(+r)} habitantes`:`${us(+s)} \u2013 ${us(+r-1)} habitantes`];if(n==="n50"){let a=0,o=0;for(let l of t)if(a+=l.pop,o++,a>=wd/2)break;return[t.slice(0,o),"la mitad de la poblaci\xF3n"]}return[[],""]}function sb(i){let[t,e]=ib(i);t.length&&eb(t,e,i.startsWith("pr:")?.75:.8)}document.querySelectorAll("[data-tab]").forEach(i=>i.onclick=()=>{nb=i.dataset.tab,Pe("#dbody").scrollTop=0});var or=Pe("#rc"),uh=Pe("#mcstab");function ta(i){or.classList.toggle("min",i),Pe("#rcgrab span").textContent=i?"Mostrar controles":"Ocultar controles",Je.length&&Ls()}function Po(i){Ze.classList.toggle("min",i),Ze.style.transform="",Ze.style.opacity="",uh.classList.toggle("on",i&&Je.length>0),i&&(uh.textContent=`\u25B8 ${Je.length} ${Je.length===1?"ficha":"fichas"}`,uh.style.top=Ze.style.top||"124px")}function Od(i,{onMove:t,onEnd:e,axis:n}){let s=null;i.addEventListener("pointerdown",a=>{a.pointerType==="mouse"||!Sh.matches||a.target.closest("input,button:not(#rcgrab),.seg")||(s={x:a.clientX,y:a.clientY,id:a.pointerId,lock:null})}),addEventListener("pointermove",a=>{if(!s||a.pointerId!==s.id)return;let o=a.clientX-s.x,l=a.clientY-s.y;!s.lock&&Math.hypot(o,l)>10&&(s.lock=Math.abs(o)>Math.abs(l)?"x":"y"),s.lock===n&&t&&t(o,l)});let r=a=>{if(!s||a.pointerId!==s.id)return;let o=a.clientX-s.x,l=a.clientY-s.y,c=s.lock;s=null,e(c===n?o:0,c===n?l:0,c)};addEventListener("pointerup",r,!0),addEventListener("pointercancel",r,!0)}Pe("#rcgrab").onclick=()=>ta(!or.classList.contains("min"));innerWidth<=640&&ta(!0);requestAnimationFrame(()=>document.documentElement.classList.remove("boot"));var Wm=()=>innerWidth>640;Od(or,{axis:"y",onEnd:(i,t)=>{if(!Wm())if(t>40&&!or.classList.contains("min")){let e=Pe("#dp.open #dbody");(!e||e.scrollTop<=0||t>120)&&ta(!0)}else t<-30&&or.classList.contains("min")&&ta(!1)}});Od(or,{axis:"x",onEnd:i=>{Wm()&&(i>50?ta(!0):i<-30&&or.classList.contains("min")&&ta(!1))}});Od(Ze,{axis:"x",onMove:i=>{i<0&&(Ze.classList.add("sw"),Ze.style.transform=`translateX(${i}px)`,Ze.style.opacity=Math.max(.2,1+i/300))},onEnd:i=>{Ze.classList.remove("sw"),i<-60?(Po(!0),window.__rodHide&&!Je.length&&window.__rodHide()):(Ze.style.transform="",Ze.style.opacity="")}});uh.onclick=()=>{Po(!1),Ls()};Pe("#dtoggle").onclick=()=>{let i=Pe("#dp").classList.toggle("open");Pe("#rc").classList.toggle("dopen",i),Pe("#dtoggle").textContent=i?Sh.matches&&innerWidth<=640?"\u2190 Controles":"En directo \u25B4":"En directo: conectar datos de Renfe \u25BE",window.__rodCard&&window.__rodCard()};var Sh=matchMedia("(max-width:640px), (max-height:500px)");function $m(){let i=Pe("#leg");Sh.matches?Pe("#rc").insertBefore(i,Pe("#dtoggle")):document.body.appendChild(i),Je.length&&Ls()}Sh.addEventListener("change",$m);$m();Bm();XS();Nd();Object.assign(un,ge);for(let i of sn)i.z=.01;requestAnimationFrame(Om);Sm({scene:ds,camera:Ji,renderer:Io,goal:ge,cur:un,invalidate:wn,flyTo:(i,t,e,n)=>{Object.assign(ge,{tx:(i-Ao)*Yi,ty:(t-Co)*Yi,dist:e,tilt:n}),wn()},K:Yi,CX:Ao,CY:Co,mcs:Ze,q:Ps,list:ci,munis:sn,select:yh,norm:bd,fmt:us,clamp:Bn,mcsMin:Po});window.__app={scene:ds,renderer:Io,camera:Ji,munis:sn,labs:ph,goal:ge,cur:un,select:yh,get mode(){return Id}};window.__ready=!0;})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
