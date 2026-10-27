// MonkiSoft · traducción en compilación: cambia cada texto con traducción por __t(n) y genera las tablas
const acorn=require('acorn'),walk=require('acorn-walk'),fs=require('fs'),path=require('path');
const D=JSON.parse(fs.readFileSync(path.join(__dirname,'dict.json'),'utf8'));
const ES=[],CA=[],EN=[],idx=new Map();
const id=s=>{if(!idx.has(s)){idx.set(s,ES.length);ES.push(s);CA.push(D[s].ca);EN.push(D[s].en);}return idx.get(s);};
function tr(file,out,rename){
  let src=fs.readFileSync(file,'utf8');const ast=acorn.parse(src,{ecmaVersion:'latest',sourceType:'module'});const rep=[];
  walk.fullAncestor(ast,(n,_,anc)=>{const p=anc[anc.length-2]||{};
    if(n.type==='Literal'&&typeof n.value==='string'&&D[n.value]){
      if(p.type==='Property'&&p.key===n&&!p.computed)return; if(p.type==='BinaryExpression'&&/^[!=]==?$/.test(p.operator))return; if(p.type==='SwitchCase'||p.type==='ImportDeclaration')return;
      if(p.type==='CallExpression'&&p.callee&&p.callee.property&&/^(querySelector|querySelectorAll|getItem|setItem|removeItem|add|remove|toggle|contains|addEventListener|matches|closest|startsWith|includes|indexOf|split|replace|test)$/.test(p.callee.property.name))return;
      rep.push([n.start,n.end,'__t('+id(n.value)+')']);}
    if(n.type==='TemplateElement'&&D[n.value.cooked]&&n.end>n.start)rep.push([n.start,n.end,'${__t('+id(n.value.cooked)+')}']);});
  rep.sort((a,b)=>b[0]-a[0]);for(const [s,e,r] of rep)src=src.slice(0,s)+r+src.slice(e);
  for(const [a,b] of rename||[])src=src.split(a).join(b);
  fs.writeFileSync(out,src);return rep.length;}
const A=process.argv[2];
const n1=tr(A+'/rail.js',A+'/rail.i18n.js'),n2=tr(A+'/app.js',A+'/app.i18n.js',[["from './rail.js'","from './rail.i18n.js'"]]);
// textos del HTML fijo
const H=Object.keys(D).filter(s=>!/[<>${}]/.test(s)&&s===s.trim());
fs.writeFileSync(A+'/i18n.js',
`/* MonkiSoft · idiomas: català (principal), castellano, English */
(function(){var L;try{L=localStorage.getItem('rod_lang')}catch(e){}
if(!L){var ls=navigator.languages||[navigator.language||''];L='en';for(var i=0;i<ls.length;i++){var c=(ls[i]||'').slice(0,2).toLowerCase();if(c==='ca'){L='ca';break}if(c==='es'){L='es';break}if(c==='en'){L='en';break}}}
window.__L=L;document.documentElement.lang=L;
var T={es:${JSON.stringify(ES)},ca:${JSON.stringify(CA)},en:${JSON.stringify(EN)}};
window.__t=function(i){var v=T[L]&&T[L][i];return v==null?T.es[i]:v};
var H=${JSON.stringify(Object.fromEntries(H.map(s=>[s,{ca:D[s].ca,en:D[s].en}])))};
document.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('[data-lang]');if(!a)return;try{localStorage.setItem('rod_lang',a.dataset.lang)}catch(x){}location.reload()});
window.__tHtml=function(root){if(L==='es')return;var w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT),n,a=[];while(n=w.nextNode())a.push(n);
var P=[['horarios Renfe del','horaris Renfe del','Renfe timetable of']];
a.forEach(function(n){var p=n.parentNode;if(!p||/^(SCRIPT|STYLE|TEXTAREA)$/.test(p.nodeName))return;var s=n.nodeValue,t=s.trim();if(t&&H[t])n.nodeValue=s.replace(t,H[t][L]);else P.forEach(function(q){if(s.indexOf(q[0])>=0)n.nodeValue=s=s.replace(q[0],L==='ca'?q[1]:q[2])})});
root.querySelectorAll('[title],[placeholder],[aria-label],[alt]').forEach(function(e){['title','placeholder','aria-label','alt'].forEach(function(k){var v=e.getAttribute(k);if(v&&H[v])e.setAttribute(k,H[v][L])})})};})();`);
console.log('js',n1,n2,'textos',ES.length,'html',H.length);
