(()=>{var e={151:(e,n,t)=>{"use strict";var a=t(802),r=t.n(a),i=t(344),s=t.n(i),o=t(306),l=t.n(o),c=t(519),u=t.n(c),g=t(157),d=t.n(g);r().registerLanguage("bash",u()),r().registerLanguage("javascript",s()),r().registerLanguage("php",l()),r().registerLanguage("html",d()),document.querySelectorAll("pre code").forEach((function(e){r().highlightBlock(e)}))},802:e=>{function n(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach((function(t){var a=e[t];"object"!=typeof a||Object.isFrozen(a)||n(a)})),e}var t=n,a=n;t.default=a;class r{constructor(e){void 0===e.data&&(e.data={}),this.data=e.data}ignoreMatch(){this.ignore=!0}}function i(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function s(e,...n){const t=Object.create(null);for(const n in e)t[n]=e[n];return n.forEach((function(e){for(const n in e)t[n]=e[n]})),t}const o=e=>!!e.kind;class l{constructor(e,n){this.buffer="",this.classPrefix=n.classPrefix,e.walk(this)}addText(e){this.buffer+=i(e)}openNode(e){if(!o(e))return;let n=e.kind;e.sublanguage||(n=`${this.classPrefix}${n}`),this.span(n)}closeNode(e){o(e)&&(this.buffer+="</span>")}value(){return this.buffer}span(e){this.buffer+=`<span class="${e}">`}}class c{constructor(){this.rootNode={children:[]},this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){this.top.children.push(e)}openNode(e){const n={kind:e,children:[]};this.add(n),this.stack.push(n)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,n){return"string"==typeof n?e.addText(n):n.children&&(e.openNode(n),n.children.forEach((n=>this._walk(e,n))),e.closeNode(n)),e}static _collapse(e){"string"!=typeof e&&e.children&&(e.children.every((e=>"string"==typeof e))?e.children=[e.children.join("")]:e.children.forEach((e=>{c._collapse(e)})))}}class u extends c{constructor(e){super(),this.options=e}addKeyword(e,n){""!==e&&(this.openNode(n),this.addText(e),this.closeNode())}addText(e){""!==e&&this.add(e)}addSublanguage(e,n){const t=e.root;t.kind=n,t.sublanguage=!0,this.add(t)}toHTML(){return new l(this,this.options).value()}finalize(){return!0}}function g(e){return e?"string"==typeof e?e:e.source:null}const d="[a-zA-Z]\\w*",h="[a-zA-Z_]\\w*",f="\\b\\d+(\\.\\d+)?",b="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",p="\\b(0b[01]+)",m={begin:"\\\\[\\s\\S]",relevance:0},E={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[m]},_={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[m]},x={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},N=function(e,n,t={}){const a=s({className:"comment",begin:e,end:n,contains:[]},t);return a.contains.push(x),a.contains.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):",relevance:0}),a},v=N("//","$"),y=N("/\\*","\\*/"),w=N("#","$"),R={className:"number",begin:f,relevance:0},O={className:"number",begin:b,relevance:0},A={className:"number",begin:p,relevance:0},M={className:"number",begin:f+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},S={begin:/(?=\/[^/\n]*\/)/,contains:[{className:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[m,{begin:/\[/,end:/\]/,relevance:0,contains:[m]}]}]},I={className:"title",begin:d,relevance:0},T={className:"title",begin:h,relevance:0},k={begin:"\\.\\s*[a-zA-Z_]\\w*",relevance:0};var L=Object.freeze({__proto__:null,MATCH_NOTHING_RE:/\b\B/,IDENT_RE:d,UNDERSCORE_IDENT_RE:h,NUMBER_RE:f,C_NUMBER_RE:b,BINARY_NUMBER_RE:p,RE_STARTERS_RE:"!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",SHEBANG:(e={})=>{const n=/^#![ ]*\//;return e.binary&&(e.begin=function(...e){return e.map((e=>g(e))).join("")}(n,/.*\b/,e.binary,/\b.*/)),s({className:"meta",begin:n,end:/$/,relevance:0,"on:begin":(e,n)=>{0!==e.index&&n.ignoreMatch()}},e)},BACKSLASH_ESCAPE:m,APOS_STRING_MODE:E,QUOTE_STRING_MODE:_,PHRASAL_WORDS_MODE:x,COMMENT:N,C_LINE_COMMENT_MODE:v,C_BLOCK_COMMENT_MODE:y,HASH_COMMENT_MODE:w,NUMBER_MODE:R,C_NUMBER_MODE:O,BINARY_NUMBER_MODE:A,CSS_NUMBER_MODE:M,REGEXP_MODE:S,TITLE_MODE:I,UNDERSCORE_TITLE_MODE:T,METHOD_GUARD:k,END_SAME_AS_BEGIN:function(e){return Object.assign(e,{"on:begin":(e,n)=>{n.data._beginMatch=e[1]},"on:end":(e,n)=>{n.data._beginMatch!==e[1]&&n.ignoreMatch()}})}});function D(e,n){"."===e.input[e.index-1]&&n.ignoreMatch()}function C(e,n){n&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=D,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,void 0===e.relevance&&(e.relevance=0))}function B(e,n){Array.isArray(e.illegal)&&(e.illegal=function(...e){return"("+e.map((e=>g(e))).join("|")+")"}(...e.illegal))}function P(e,n){if(e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function j(e,n){void 0===e.relevance&&(e.relevance=1)}const $=["of","and","for","in","not","or","if","then","parent","list","value"];function z(e,n,t="keyword"){const a={};return"string"==typeof e?r(t,e.split(" ")):Array.isArray(e)?r(t,e):Object.keys(e).forEach((function(t){Object.assign(a,z(e[t],n,t))})),a;function r(e,t){n&&(t=t.map((e=>e.toLowerCase()))),t.forEach((function(n){const t=n.split("|");a[t[0]]=[e,H(t[0],t[1])]}))}}function H(e,n){return n?Number(n):function(e){return $.includes(e.toLowerCase())}(e)?0:1}function U(e,{plugins:n}){function t(n,t){return new RegExp(g(n),"m"+(e.case_insensitive?"i":"")+(t?"g":""))}class a{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(e,n){n.position=this.position++,this.matchIndexes[this.matchAt]=n,this.regexes.push([n,e]),this.matchAt+=function(e){return new RegExp(e.toString()+"|").exec("").length-1}(e)+1}compile(){0===this.regexes.length&&(this.exec=()=>null);const e=this.regexes.map((e=>e[1]));this.matcherRe=t(function(e,n="|"){const t=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;let a=0,r="";for(let i=0;i<e.length;i++){a+=1;const s=a;let o=g(e[i]);for(i>0&&(r+=n),r+="(";o.length>0;){const e=t.exec(o);if(null==e){r+=o;break}r+=o.substring(0,e.index),o=o.substring(e.index+e[0].length),"\\"===e[0][0]&&e[1]?r+="\\"+String(Number(e[1])+s):(r+=e[0],"("===e[0]&&a++)}r+=")"}return r}(e),!0),this.lastIndex=0}exec(e){this.matcherRe.lastIndex=this.lastIndex;const n=this.matcherRe.exec(e);if(!n)return null;const t=n.findIndex(((e,n)=>n>0&&void 0!==e)),a=this.matchIndexes[t];return n.splice(0,t),Object.assign(n,a)}}class r{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(e){if(this.multiRegexes[e])return this.multiRegexes[e];const n=new a;return this.rules.slice(e).forEach((([e,t])=>n.addRule(e,t))),n.compile(),this.multiRegexes[e]=n,n}resumingScanAtSamePosition(){return 0!==this.regexIndex}considerAll(){this.regexIndex=0}addRule(e,n){this.rules.push([e,n]),"begin"===n.type&&this.count++}exec(e){const n=this.getMatcher(this.regexIndex);n.lastIndex=this.lastIndex;let t=n.exec(e);if(this.resumingScanAtSamePosition())if(t&&t.index===this.lastIndex);else{const n=this.getMatcher(0);n.lastIndex=this.lastIndex+1,t=n.exec(e)}return t&&(this.regexIndex+=t.position+1,this.regexIndex===this.count&&this.considerAll()),t}}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=s(e.classNameAliases||{}),function n(a,i){const o=a;if(a.compiled)return o;[P].forEach((e=>e(a,i))),e.compilerExtensions.forEach((e=>e(a,i))),a.__beforeBegin=null,[C,B,j].forEach((e=>e(a,i))),a.compiled=!0;let l=null;if("object"==typeof a.keywords&&(l=a.keywords.$pattern,delete a.keywords.$pattern),a.keywords&&(a.keywords=z(a.keywords,e.case_insensitive)),a.lexemes&&l)throw new Error("ERR: Prefer `keywords.$pattern` to `mode.lexemes`, BOTH are not allowed. (see mode reference) ");return l=l||a.lexemes||/\w+/,o.keywordPatternRe=t(l,!0),i&&(a.begin||(a.begin=/\B|\b/),o.beginRe=t(a.begin),a.endSameAsBegin&&(a.end=a.begin),a.end||a.endsWithParent||(a.end=/\B|\b/),a.end&&(o.endRe=t(a.end)),o.terminatorEnd=g(a.end)||"",a.endsWithParent&&i.terminatorEnd&&(o.terminatorEnd+=(a.end?"|":"")+i.terminatorEnd)),a.illegal&&(o.illegalRe=t(a.illegal)),a.contains||(a.contains=[]),a.contains=[].concat(...a.contains.map((function(e){return function(e){e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map((function(n){return s(e,{variants:null},n)})));if(e.cachedVariants)return e.cachedVariants;if(G(e))return s(e,{starts:e.starts?s(e.starts):null});if(Object.isFrozen(e))return s(e);return e}("self"===e?a:e)}))),a.contains.forEach((function(e){n(e,o)})),a.starts&&n(a.starts,i),o.matcher=function(e){const n=new r;return e.contains.forEach((e=>n.addRule(e.begin,{rule:e,type:"begin"}))),e.terminatorEnd&&n.addRule(e.terminatorEnd,{type:"end"}),e.illegal&&n.addRule(e.illegal,{type:"illegal"}),n}(o),o}(e)}function G(e){return!!e&&(e.endsWithParent||G(e.starts))}function K(e){const n={props:["language","code","autodetect"],data:function(){return{detectedLanguage:"",unknownLanguage:!1}},computed:{className(){return this.unknownLanguage?"":"hljs "+this.detectedLanguage},highlighted(){if(!this.autoDetect&&!e.getLanguage(this.language))return console.warn(`The language "${this.language}" you specified could not be found.`),this.unknownLanguage=!0,i(this.code);let n={};return this.autoDetect?(n=e.highlightAuto(this.code),this.detectedLanguage=n.language):(n=e.highlight(this.language,this.code,this.ignoreIllegals),this.detectedLanguage=this.language),n.value},autoDetect(){return!this.language||(e=this.autodetect,Boolean(e||""===e));var e},ignoreIllegals:()=>!0},render(e){return e("pre",{},[e("code",{class:this.className,domProps:{innerHTML:this.highlighted}})])}};return{Component:n,VuePlugin:{install(e){e.component("highlightjs",n)}}}}const F={"after:highlightBlock":({block:e,result:n,text:t})=>{const a=q(e);if(!a.length)return;const r=document.createElement("div");r.innerHTML=n.value,n.value=function(e,n,t){let a=0,r="";const s=[];function o(){return e.length&&n.length?e[0].offset!==n[0].offset?e[0].offset<n[0].offset?e:n:"start"===n[0].event?e:n:e.length?e:n}function l(e){function n(e){return" "+e.nodeName+'="'+i(e.value)+'"'}r+="<"+Z(e)+[].map.call(e.attributes,n).join("")+">"}function c(e){r+="</"+Z(e)+">"}function u(e){("start"===e.event?l:c)(e.node)}for(;e.length||n.length;){let n=o();if(r+=i(t.substring(a,n[0].offset)),a=n[0].offset,n===e){s.reverse().forEach(c);do{u(n.splice(0,1)[0]),n=o()}while(n===e&&n.length&&n[0].offset===a);s.reverse().forEach(l)}else"start"===n[0].event?s.push(n[0].node):s.pop(),u(n.splice(0,1)[0])}return r+i(t.substr(a))}(a,q(r),t)}};function Z(e){return e.nodeName.toLowerCase()}function q(e){const n=[];return function e(t,a){for(let r=t.firstChild;r;r=r.nextSibling)3===r.nodeType?a+=r.nodeValue.length:1===r.nodeType&&(n.push({event:"start",offset:a,node:r}),a=e(r,a),Z(r).match(/br|hr|img|input/)||n.push({event:"stop",offset:a,node:r}));return a}(e,0),n}const W=e=>{console.error(e)},X=(e,...n)=>{console.log(`WARN: ${e}`,...n)},Q=(e,n)=>{console.log(`Deprecated as of ${e}. ${n}`)},V=i,J=s,Y=Symbol("nomatch");var ee=function(e){const n=Object.create(null),a=Object.create(null),i=[];let s=!0;const o=/(^(<[^>]+>|\t|)+|\n)/gm,l="Could not find the language '{}', did you forget to load/include a language module?",c={disableAutodetect:!0,name:"Plain text",contains:[]};let g={noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:null,__emitter:u};function d(e){return g.noHighlightRe.test(e)}function h(e,n,t,a){const r={code:n,language:e};A("before:highlight",r);const i=r.result?r.result:f(r.language,r.code,t,a);return i.code=r.code,A("after:highlight",i),i}function f(e,t,a,o){const c=t;function u(e,n){const t=v.case_insensitive?n[0].toLowerCase():n[0];return Object.prototype.hasOwnProperty.call(e.keywords,t)&&e.keywords[t]}function d(){null!=O.subLanguage?function(){if(""===S)return;let e=null;if("string"==typeof O.subLanguage){if(!n[O.subLanguage])return void M.addText(S);e=f(O.subLanguage,S,!0,A[O.subLanguage]),A[O.subLanguage]=e.top}else e=b(S,O.subLanguage.length?O.subLanguage:null);O.relevance>0&&(I+=e.relevance),M.addSublanguage(e.emitter,e.language)}():function(){if(!O.keywords)return void M.addText(S);let e=0;O.keywordPatternRe.lastIndex=0;let n=O.keywordPatternRe.exec(S),t="";for(;n;){t+=S.substring(e,n.index);const a=u(O,n);if(a){const[e,r]=a;M.addText(t),t="",I+=r;const i=v.classNameAliases[e]||e;M.addKeyword(n[0],i)}else t+=n[0];e=O.keywordPatternRe.lastIndex,n=O.keywordPatternRe.exec(S)}t+=S.substr(e),M.addText(t)}(),S=""}function h(e){return e.className&&M.openNode(v.classNameAliases[e.className]||e.className),O=Object.create(e,{parent:{value:O}}),O}function p(e,n,t){let a=function(e,n){const t=e&&e.exec(n);return t&&0===t.index}(e.endRe,t);if(a){if(e["on:end"]){const t=new r(e);e["on:end"](n,t),t.ignore&&(a=!1)}if(a){for(;e.endsParent&&e.parent;)e=e.parent;return e}}if(e.endsWithParent)return p(e.parent,n,t)}function m(e){return 0===O.matcher.regexIndex?(S+=e[0],1):(L=!0,0)}function E(e){const n=e[0],t=e.rule,a=new r(t),i=[t.__beforeBegin,t["on:begin"]];for(const t of i)if(t&&(t(e,a),a.ignore))return m(n);return t&&t.endSameAsBegin&&(t.endRe=new RegExp(n.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),"m")),t.skip?S+=n:(t.excludeBegin&&(S+=n),d(),t.returnBegin||t.excludeBegin||(S=n)),h(t),t.returnBegin?0:n.length}function _(e){const n=e[0],t=c.substr(e.index),a=p(O,e,t);if(!a)return Y;const r=O;r.skip?S+=n:(r.returnEnd||r.excludeEnd||(S+=n),d(),r.excludeEnd&&(S=n));do{O.className&&M.closeNode(),O.skip||O.subLanguage||(I+=O.relevance),O=O.parent}while(O!==a.parent);return a.starts&&(a.endSameAsBegin&&(a.starts.endRe=a.endRe),h(a.starts)),r.returnEnd?0:n.length}let x={};function N(n,t){const r=t&&t[0];if(S+=n,null==r)return d(),0;if("begin"===x.type&&"end"===t.type&&x.index===t.index&&""===r){if(S+=c.slice(t.index,t.index+1),!s){const n=new Error("0 width match regex");throw n.languageName=e,n.badRule=x.rule,n}return 1}if(x=t,"begin"===t.type)return E(t);if("illegal"===t.type&&!a){const e=new Error('Illegal lexeme "'+r+'" for mode "'+(O.className||"<unnamed>")+'"');throw e.mode=O,e}if("end"===t.type){const e=_(t);if(e!==Y)return e}if("illegal"===t.type&&""===r)return 1;if(k>1e5&&k>3*t.index){throw new Error("potential infinite loop, way more iterations than matches")}return S+=r,r.length}const v=w(e);if(!v)throw W(l.replace("{}",e)),new Error('Unknown language: "'+e+'"');const y=U(v,{plugins:i});let R="",O=o||y;const A={},M=new g.__emitter(g);!function(){const e=[];for(let n=O;n!==v;n=n.parent)n.className&&e.unshift(n.className);e.forEach((e=>M.openNode(e)))}();let S="",I=0,T=0,k=0,L=!1;try{for(O.matcher.considerAll();;){k++,L?L=!1:O.matcher.considerAll(),O.matcher.lastIndex=T;const e=O.matcher.exec(c);if(!e)break;const n=N(c.substring(T,e.index),e);T=e.index+n}return N(c.substr(T)),M.closeAllNodes(),M.finalize(),R=M.toHTML(),{relevance:Math.floor(I),value:R,language:e,illegal:!1,emitter:M,top:O}}catch(n){if(n.message&&n.message.includes("Illegal"))return{illegal:!0,illegalBy:{msg:n.message,context:c.slice(T-100,T+100),mode:n.mode},sofar:R,relevance:0,value:V(c),emitter:M};if(s)return{illegal:!1,relevance:0,value:V(c),emitter:M,language:e,top:O,errorRaised:n};throw n}}function b(e,t){t=t||g.languages||Object.keys(n);const a=function(e){const n={relevance:0,emitter:new g.__emitter(g),value:V(e),illegal:!1,top:c};return n.emitter.addText(e),n}(e),r=t.filter(w).filter(O).map((n=>f(n,e,!1)));r.unshift(a);const i=r.sort(((e,n)=>{if(e.relevance!==n.relevance)return n.relevance-e.relevance;if(e.language&&n.language){if(w(e.language).supersetOf===n.language)return 1;if(w(n.language).supersetOf===e.language)return-1}return 0})),[s,o]=i,l=s;return l.second_best=o,l}const p={"before:highlightBlock":({block:e})=>{g.useBR&&(e.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ /]*>/g,"\n"))},"after:highlightBlock":({result:e})=>{g.useBR&&(e.value=e.value.replace(/\n/g,"<br>"))}},m=/^(<[^>]+>|\t)+/gm,E={"after:highlightBlock":({result:e})=>{g.tabReplace&&(e.value=e.value.replace(m,(e=>e.replace(/\t/g,g.tabReplace))))}};function _(e){let n=null;const t=function(e){let n=e.className+" ";n+=e.parentNode?e.parentNode.className:"";const t=g.languageDetectRe.exec(n);if(t){const n=w(t[1]);return n||(X(l.replace("{}",t[1])),X("Falling back to no-highlight mode for this block.",e)),n?t[1]:"no-highlight"}return n.split(/\s+/).find((e=>d(e)||w(e)))}(e);if(d(t))return;A("before:highlightBlock",{block:e,language:t}),n=e;const r=n.textContent,i=t?h(t,r,!0):b(r);A("after:highlightBlock",{block:e,result:i,text:r}),e.innerHTML=i.value,function(e,n,t){const r=n?a[n]:t;e.classList.add("hljs"),r&&e.classList.add(r)}(e,t,i.language),e.result={language:i.language,re:i.relevance,relavance:i.relevance},i.second_best&&(e.second_best={language:i.second_best.language,re:i.second_best.relevance,relavance:i.second_best.relevance})}const x=()=>{if(x.called)return;x.called=!0,Q("10.6.0","initHighlighting() is deprecated.  Use highlightAll() instead.");document.querySelectorAll("pre code").forEach(_)};let N=!1,v=!1;function y(){if(!v)return void(N=!0);document.querySelectorAll("pre code").forEach(_)}function w(e){return e=(e||"").toLowerCase(),n[e]||n[a[e]]}function R(e,{languageName:n}){"string"==typeof e&&(e=[e]),e.forEach((e=>{a[e]=n}))}function O(e){const n=w(e);return n&&!n.disableAutodetect}function A(e,n){const t=e;i.forEach((function(e){e[t]&&e[t](n)}))}"undefined"!=typeof window&&window.addEventListener&&window.addEventListener("DOMContentLoaded",(function(){v=!0,N&&y()}),!1),Object.assign(e,{highlight:h,highlightAuto:b,highlightAll:y,fixMarkup:function(e){return Q("10.2.0","fixMarkup will be removed entirely in v11.0"),Q("10.2.0","Please see https://github.com/highlightjs/highlight.js/issues/2534"),n=e,g.tabReplace||g.useBR?n.replace(o,(e=>"\n"===e?g.useBR?"<br>":e:g.tabReplace?e.replace(/\t/g,g.tabReplace):e)):n;var n},highlightBlock:_,configure:function(e){e.useBR&&(Q("10.3.0","'useBR' will be removed entirely in v11.0"),Q("10.3.0","Please see https://github.com/highlightjs/highlight.js/issues/2559")),g=J(g,e)},initHighlighting:x,initHighlightingOnLoad:function(){Q("10.6.0","initHighlightingOnLoad() is deprecated.  Use highlightAll() instead."),N=!0},registerLanguage:function(t,a){let r=null;try{r=a(e)}catch(e){if(W("Language definition for '{}' could not be registered.".replace("{}",t)),!s)throw e;W(e),r=c}r.name||(r.name=t),n[t]=r,r.rawDefinition=a.bind(null,e),r.aliases&&R(r.aliases,{languageName:t})},listLanguages:function(){return Object.keys(n)},getLanguage:w,registerAliases:R,requireLanguage:function(e){Q("10.4.0","requireLanguage will be removed entirely in v11."),Q("10.4.0","Please see https://github.com/highlightjs/highlight.js/pull/2844");const n=w(e);if(n)return n;throw new Error("The '{}' language is required, but not loaded.".replace("{}",e))},autoDetection:O,inherit:J,addPlugin:function(e){i.push(e)},vuePlugin:K(e).VuePlugin}),e.debugMode=function(){s=!1},e.safeMode=function(){s=!0},e.versionString="10.6.0";for(const e in L)"object"==typeof L[e]&&t(L[e]);return Object.assign(e,L),e.addPlugin(p),e.addPlugin(F),e.addPlugin(E),e}({});e.exports=ee},519:e=>{function n(...e){return e.map((e=>{return(n=e)?"string"==typeof n?n:n.source:null;var n})).join("")}e.exports=function(e){const t={},a={begin:/\$\{/,end:/\}/,contains:["self",{begin:/:-/,contains:[t]}]};Object.assign(t,{className:"variable",variants:[{begin:n(/\$[\w\d#@][\w\d_]*/,"(?![\\w\\d])(?![$])")},a]});const r={className:"subst",begin:/\$\(/,end:/\)/,contains:[e.BACKSLASH_ESCAPE]},i={begin:/<<-?\s*(?=\w+)/,starts:{contains:[e.END_SAME_AS_BEGIN({begin:/(\w+)/,end:/(\w+)/,className:"string"})]}},s={className:"string",begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,t,r]};r.contains.push(s);const o={begin:/\$\(\(/,end:/\)\)/,contains:[{begin:/\d+#[0-9a-f]+/,className:"number"},e.NUMBER_MODE,t]},l=e.SHEBANG({binary:`(${["fish","bash","zsh","sh","csh","ksh","tcsh","dash","scsh"].join("|")})`,relevance:10}),c={className:"function",begin:/\w[\w\d_]*\s*\(\s*\)\s*\{/,returnBegin:!0,contains:[e.inherit(e.TITLE_MODE,{begin:/\w[\w\d_]*/})],relevance:0};return{name:"Bash",aliases:["sh","zsh"],keywords:{$pattern:/\b[a-z._-]+\b/,keyword:"if then else elif fi for while in do done case esac function",literal:"true false",built_in:"break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp"},contains:[l,e.SHEBANG(),c,o,e.HASH_COMMENT_MODE,i,s,{className:"",begin:/\\"/},{className:"string",begin:/'/,end:/'/},t]}}},344:e=>{const n="[A-Za-z$_][0-9A-Za-z$_]*",t=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],a=["true","false","null","undefined","NaN","Infinity"],r=[].concat(["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],["arguments","this","super","console","window","document","localStorage","module","global"],["Intl","DataView","Number","Math","Date","String","RegExp","Object","Function","Boolean","Error","Symbol","Set","Map","WeakSet","WeakMap","Proxy","Reflect","JSON","Promise","Float64Array","Int16Array","Int32Array","Int8Array","Uint16Array","Uint32Array","Float32Array","Array","Uint8Array","Uint8ClampedArray","ArrayBuffer"],["EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"]);function i(e){return s("(?=",e,")")}function s(...e){return e.map((e=>{return(n=e)?"string"==typeof n?n:n.source:null;var n})).join("")}e.exports=function(e){const o=n,l="<>",c="</>",u={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(e,n)=>{const t=e[0].length+e.index,a=e.input[t];"<"!==a?">"===a&&(((e,{after:n})=>{const t="</"+e[0].slice(1);return-1!==e.input.indexOf(t,n)})(e,{after:t})||n.ignoreMatch()):n.ignoreMatch()}},g={$pattern:n,keyword:t,literal:a,built_in:r},d="\\.([0-9](_?[0-9])*)",h="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",f={className:"number",variants:[{begin:`(\\b(${h})((${d})|\\.)?|(${d}))[eE][+-]?([0-9](_?[0-9])*)\\b`},{begin:`\\b(${h})\\b((${d})\\b|\\.)?|(${d})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},b={className:"subst",begin:"\\$\\{",end:"\\}",keywords:g,contains:[]},p={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,b],subLanguage:"xml"}},m={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,b],subLanguage:"css"}},E={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,b]},_={className:"comment",variants:[e.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+",contains:[{className:"type",begin:"\\{",end:"\\}",relevance:0},{className:"variable",begin:o+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},x=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,p,m,E,f,e.REGEXP_MODE];b.contains=x.concat({begin:/\{/,end:/\}/,keywords:g,contains:["self"].concat(x)});const N=[].concat(_,b.contains),v=N.concat([{begin:/\(/,end:/\)/,keywords:g,contains:["self"].concat(N)}]),y={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:g,contains:v};return{name:"Javascript",aliases:["js","jsx","mjs","cjs"],keywords:g,exports:{PARAMS_CONTAINS:v},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),{label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,p,m,E,_,f,{begin:s(/[{,\n]\s*/,i(s(/(((\/\/.*$)|(\/\*(\*[^/]|[^*])*\*\/))\s*)*/,o+"\\s*:"))),relevance:0,contains:[{className:"attr",begin:o+i("\\s*:"),relevance:0}]},{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",contains:[_,e.REGEXP_MODE,{className:"function",begin:"(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:g,contains:v}]}]},{begin:/,/,relevance:0},{className:"",begin:/\s/,end:/\s*/,skip:!0},{variants:[{begin:l,end:c},{begin:u.begin,"on:begin":u.isTrulyOpeningTag,end:u.end}],subLanguage:"xml",contains:[{begin:u.begin,end:u.end,skip:!0,contains:["self"]}]}],relevance:0},{className:"function",beginKeywords:"function",end:/[{;]/,excludeEnd:!0,keywords:g,contains:["self",e.inherit(e.TITLE_MODE,{begin:o}),y],illegal:/%/},{beginKeywords:"while if switch catch for"},{className:"function",begin:e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,contains:[y,e.inherit(e.TITLE_MODE,{begin:o})]},{variants:[{begin:"\\."+o},{begin:"\\$"+o}],relevance:0},{className:"class",beginKeywords:"class",end:/[{;=]/,excludeEnd:!0,illegal:/[:"[\]]/,contains:[{beginKeywords:"extends"},e.UNDERSCORE_TITLE_MODE]},{begin:/\b(?=constructor)/,end:/[{;]/,excludeEnd:!0,contains:[e.inherit(e.TITLE_MODE,{begin:o}),"self",y]},{begin:"(get|set)\\s+(?="+o+"\\()",end:/\{/,keywords:"get set",contains:[e.inherit(e.TITLE_MODE,{begin:o}),{begin:/\(\)/},y]},{begin:/\$[(.]/}]}}},306:e=>{e.exports=function(e){const n={className:"variable",begin:"\\$+[a-zA-Z_-ÿ][a-zA-Z0-9_-ÿ]*(?![A-Za-z0-9])(?![$])"},t={className:"meta",variants:[{begin:/<\?php/,relevance:10},{begin:/<\?[=]?/},{begin:/\?>/}]},a={className:"subst",variants:[{begin:/\$\w+/},{begin:/\{\$/,end:/\}/}]},r=e.inherit(e.APOS_STRING_MODE,{illegal:null}),i=e.inherit(e.QUOTE_STRING_MODE,{illegal:null,contains:e.QUOTE_STRING_MODE.contains.concat(a)}),s=e.END_SAME_AS_BEGIN({begin:/<<<[ \t]*(\w+)\n/,end:/[ \t]*(\w+)\b/,contains:e.QUOTE_STRING_MODE.contains.concat(a)}),o={className:"string",contains:[e.BACKSLASH_ESCAPE,t],variants:[e.inherit(r,{begin:"b'",end:"'"}),e.inherit(i,{begin:'b"',end:'"'}),i,r,s]},l={variants:[e.BINARY_NUMBER_MODE,e.C_NUMBER_MODE]},c={keyword:"__CLASS__ __DIR__ __FILE__ __FUNCTION__ __LINE__ __METHOD__ __NAMESPACE__ __TRAIT__ die echo exit include include_once print require require_once array abstract and as binary bool boolean break callable case catch class clone const continue declare default do double else elseif empty enddeclare endfor endforeach endif endswitch endwhile eval extends final finally float for foreach from global goto if implements instanceof insteadof int integer interface isset iterable list match|0 new object or private protected public real return string switch throw trait try unset use var void while xor yield",literal:"false null true",built_in:"Error|0 AppendIterator ArgumentCountError ArithmeticError ArrayIterator ArrayObject AssertionError BadFunctionCallException BadMethodCallException CachingIterator CallbackFilterIterator CompileError Countable DirectoryIterator DivisionByZeroError DomainException EmptyIterator ErrorException Exception FilesystemIterator FilterIterator GlobIterator InfiniteIterator InvalidArgumentException IteratorIterator LengthException LimitIterator LogicException MultipleIterator NoRewindIterator OutOfBoundsException OutOfRangeException OuterIterator OverflowException ParentIterator ParseError RangeException RecursiveArrayIterator RecursiveCachingIterator RecursiveCallbackFilterIterator RecursiveDirectoryIterator RecursiveFilterIterator RecursiveIterator RecursiveIteratorIterator RecursiveRegexIterator RecursiveTreeIterator RegexIterator RuntimeException SeekableIterator SplDoublyLinkedList SplFileInfo SplFileObject SplFixedArray SplHeap SplMaxHeap SplMinHeap SplObjectStorage SplObserver SplObserver SplPriorityQueue SplQueue SplStack SplSubject SplSubject SplTempFileObject TypeError UnderflowException UnexpectedValueException ArrayAccess Closure Generator Iterator IteratorAggregate Serializable Throwable Traversable WeakReference Directory __PHP_Incomplete_Class parent php_user_filter self static stdClass"};return{aliases:["php","php3","php4","php5","php6","php7","php8"],case_insensitive:!0,keywords:c,contains:[e.HASH_COMMENT_MODE,e.COMMENT("//","$",{contains:[t]}),e.COMMENT("/\\*","\\*/",{contains:[{className:"doctag",begin:"@[A-Za-z]+"}]}),e.COMMENT("__halt_compiler.+?;",!1,{endsWithParent:!0,keywords:"__halt_compiler"}),t,{className:"keyword",begin:/\$this\b/},n,{begin:/(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/},{className:"function",relevance:0,beginKeywords:"fn function",end:/[;{]/,excludeEnd:!0,illegal:"[$%\\[]",contains:[e.UNDERSCORE_TITLE_MODE,{begin:"=>"},{className:"params",begin:"\\(",end:"\\)",excludeBegin:!0,excludeEnd:!0,keywords:c,contains:["self",n,e.C_BLOCK_COMMENT_MODE,o,l]}]},{className:"class",beginKeywords:"class interface",relevance:0,end:/\{/,excludeEnd:!0,illegal:/[:($"]/,contains:[{beginKeywords:"extends implements"},e.UNDERSCORE_TITLE_MODE]},{beginKeywords:"namespace",relevance:0,end:";",illegal:/[.']/,contains:[e.UNDERSCORE_TITLE_MODE]},{beginKeywords:"use",relevance:0,end:";",contains:[e.UNDERSCORE_TITLE_MODE]},o,l]}}},157:e=>{function n(e){return e?"string"==typeof e?e:e.source:null}function t(e){return a("(?=",e,")")}function a(...e){return e.map((e=>n(e))).join("")}function r(...e){return"("+e.map((e=>n(e))).join("|")+")"}e.exports=function(e){const n=a(/[A-Z_]/,a("(",/[A-Z0-9_.-]*:/,")?"),/[A-Z0-9_.-]*/),i={className:"symbol",begin:/&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},s={begin:/\s/,contains:[{className:"meta-keyword",begin:/#?[a-z_][a-z1-9_-]+/,illegal:/\n/}]},o=e.inherit(s,{begin:/\(/,end:/\)/}),l=e.inherit(e.APOS_STRING_MODE,{className:"meta-string"}),c=e.inherit(e.QUOTE_STRING_MODE,{className:"meta-string"}),u={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:/[A-Za-z0-9._:-]+/,relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[i]},{begin:/'/,end:/'/,contains:[i]},{begin:/[^\s"'=<>`]+/}]}]}]};return{name:"HTML, XML",aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],case_insensitive:!0,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,relevance:10,contains:[s,c,l,o,{begin:/\[/,end:/\]/,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,contains:[s,o,c,l]}]}]},e.COMMENT(/<!--/,/-->/,{relevance:10}),{begin:/<!\[CDATA\[/,end:/\]\]>/,relevance:10},i,{className:"meta",begin:/<\?xml/,end:/\?>/,relevance:10},{className:"tag",begin:/<style(?=\s|>)/,end:/>/,keywords:{name:"style"},contains:[u],starts:{end:/<\/style>/,returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:/<script(?=\s|>)/,end:/>/,keywords:{name:"script"},contains:[u],starts:{end:/<\/script>/,returnEnd:!0,subLanguage:["javascript","handlebars","xml"]}},{className:"tag",begin:/<>|<\/>/},{className:"tag",begin:a(/</,t(a(n,r(/\/>/,/>/,/\s/)))),end:/\/?>/,contains:[{className:"name",begin:n,relevance:0,starts:u}]},{className:"tag",begin:a(/<\//,t(a(n,/>/))),contains:[{className:"name",begin:n,relevance:0},{begin:/>/,relevance:0}]}]}}},469:()=>{}},n={};function t(a){if(n[a])return n[a].exports;var r=n[a]={exports:{}};return e[a](r,r.exports,t),r.exports}t.m=e,t.x=e=>{},t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e={522:0},n=[[151],[469]],a=e=>{},r=(r,i)=>{for(var s,o,[l,c,u,g]=i,d=0,h=[];d<l.length;d++)o=l[d],t.o(e,o)&&e[o]&&h.push(e[o][0]),e[o]=0;for(s in c)t.o(c,s)&&(t.m[s]=c[s]);for(u&&u(t),r&&r(i);h.length;)h.shift()();return g&&n.push.apply(n,g),a()},i=self.webpackChunk=self.webpackChunk||[];function s(){for(var a,r=0;r<n.length;r++){for(var i=n[r],s=!0,o=1;o<i.length;o++){var l=i[o];0!==e[l]&&(s=!1)}s&&(n.splice(r--,1),a=t(t.s=i[0]))}return 0===n.length&&(t.x(),t.x=e=>{}),a}i.forEach(r.bind(null,0)),i.push=r.bind(null,i.push.bind(i));var o=t.x;t.x=()=>(t.x=o||(e=>{}),(a=s)())})(),t.x()})();
//# sourceMappingURL=main.js.map