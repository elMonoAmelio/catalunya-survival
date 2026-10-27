// textos visibles de un .js: literales y trozos de plantilla, con el contexto que los hace peligrosos de traducir
const acorn=require('acorn'),walk=require('acorn-walk'),fs=require('fs');
const src=fs.readFileSync(process.argv[2],'utf8');
const ast=acorn.parse(src,{ecmaVersion:'latest',sourceType:'module'});
const vis=s=>s.replace(/<[^>]*>/g,' ').replace(/^[^<>]*?>/,m=>/=|class|style/.test(m)?' ':m).replace(/<[^>]*$/,' ').replace(/[\w-]+=("[^"]*"?|'[^']*'?)/g,' ').replace(/&[a-z]+;/g,' ').replace(/(attribute|uniform|varying|void main|gl_|translate\(|var\(--|prefers-color|Europe\/|digit)[\s\S]*/,' ').trim();
const human=s=>{const t=vis(s);if(!t)return false;const pre=vis(s.replace(/</g,' <').replace(/>/g,'> ')+'');
 if(/^(https?:|data:|rod_|\/|#|\.)/.test(t))return false; if(/^[\w-]+:[^ ]/.test(t)&&/;/.test(t))return false;
 if(/^[a-z_][\w-]*$/.test(t)&&!/^\s|\s$/.test(s)&&!/[<>]/.test(s))return false;   // identificadores, clases, claves
 if(/^[\w.#\[\]=" -]+$/.test(t)&&/[#\[\]]/.test(t))return false;
 return /[a-záéíóúñ]{2,}/i.test(t)&&/[A-Za-zÁÉÍÓÚáéíóúñ]/.test(t)&&!/^(Rodalies|Renfe|Adif|R\d+|RG1|RL\d|RT\d)$/.test(t);};
const out=[];
walk.fullAncestor(ast,(n,_,anc)=>{const p=anc[anc.length-2]||{};let flag='';
 if(n.type==='Literal'&&typeof n.value==='string'){ if(!human(n.value))return;
   if(p.type==='Property'&&p.key===n&&!p.computed)flag='KEY';
   else if(p.type==='BinaryExpression'&&/^[!=]==?$/.test(p.operator))flag='CMP';
   else if(p.type==='SwitchCase')flag='CASE';
   else if(p.type==='ImportDeclaration')return;
   else if(p.type==='CallExpression'&&p.callee&&p.callee.property&&/^(querySelector|querySelectorAll|getItem|setItem|removeItem|add|remove|toggle|contains|addEventListener|setAttribute|getAttribute|matches|closest|startsWith|includes|indexOf|split|replace|test)$/.test(p.callee.property.name))flag='CALL:'+p.callee.property.name;
   out.push({k:'L',s:n.start,e:n.end,v:n.value,f:flag});}
 if(n.type==='TemplateElement'){const v=n.value.cooked||'';if(human(v))out.push({k:'T',s:n.start,e:n.end,v,f:(anc[anc.length-3]||{}).type==='TaggedTemplateExpression'?'TAG':''});}});
out.sort((a,b)=>a.s-b.s);
const ln=i=>src.slice(0,i).split('\n').length;
if(process.argv[3]==='json')console.log(JSON.stringify(out));else for(const o of out)console.log(ln(o.s)+'\t'+o.k+(o.f?'!'+o.f:'')+'\t'+JSON.stringify(o.v));
