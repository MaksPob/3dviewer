import{c as L,a as f,h,r as z,i as K,o as E,b as O,n as X,d as D,g as H,l as F,e as Y,f as q,w as T,j as N,p as G,k as Z,m as P,q as ee,s as te,t as ne,u as oe,v as _,x as C,y as le}from "./index-CVAWevx0.js";import{h as M,a as ie,c as U,g as re,b as ae}from "./dom-GEVpvfaf.js";import{_ as se}from "./_plugin-vue_export-helper-DlAUqK2U.js";const ue=L({name:"QToolbarTitle",props:{shrink:Boolean},setup(e, {slots:r}){const t=f(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>h("div",{class:t.value},M(r.default))}}),ce=L({name:"QToolbar",props:{inset:Boolean},setup(e, {slots:r}){const t=f(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>h("div",{class:t.value,role:"toolbar"},M(r.default))}});function de(){const e=z(!K.value);return e.value===!1&&E(()=>{e.value=!0}),{isHydrated:e}}const J=typeof ResizeObserver<"u",A=J===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"},W=L({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e, {emit:r}){let t=null,n,l={width:-1,height:-1};function u(a){a===!0||e.debounce===0||e.debounce==="0"?c():t===null&&(t=setTimeout(c,e.debounce))}function c(){if(t!==null&&(clearTimeout(t),t=null),n){const{offsetWidth:a,offsetHeight:i}=n;(a!==l.width||i!==l.height)&&(l={width:a,height:i},r("resize",l))}}const{proxy:m}=H();if(m.trigger=u,J===!0){let a;const i= p=>{n=m.$el.parentNode,n?(a=new ResizeObserver(u),a.observe(n),c()):p!==!0&&D(()=>{i(!0)})};return E(()=>{i()}),O(()=>{t!==null&&clearTimeout(t),a!==void 0&&(a.disconnect!==void 0?a.disconnect():n&&a.unobserve(n))}),X}else{let a=function(){t!==null&&(clearTimeout(t),t=null),v!==void 0&&(v.removeEventListener!==void 0&&v.removeEventListener("resize",u,F.passive),v=void 0)},i=function(){a(),n&&n.contentDocument&&(v=n.contentDocument.defaultView,v.addEventListener("resize",u,F.passive),c())};const{isHydrated:p}=de();let v;return E(()=>{D(()=>{n=m.$el,n&&i()})}),O(a),()=>{if(p.value===!0)return h("object",{class:"q--avoid-card-border",style:A.style,tabindex:-1,type:"text/html",data:A.url,"aria-hidden":"true",onLoad:i})}}}}),fe=L({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e, {slots:r,emit:t}){const{proxy:{$q:n}}=H(),l=Y(N,q);if(l===q)return console.error("QHeader needs to be child of QLayout"),q;const u=z(parseInt(e.heightHint,10)),c=z(!0),m=f(()=>e.reveal===!0||l.view.value.indexOf("H")!==-1||n.platform.is.ios&&l.isContainer.value===!0),a=f(()=>{if(e.modelValue!==!0)return 0;if(m.value===!0)return c.value===!0?u.value:0;const o=u.value-l.scroll.value.position;return o>0?o:0}),i=f(()=>e.modelValue!==!0||m.value===!0&&c.value!==!0),p=f(()=>e.modelValue===!0&&i.value===!0&&e.reveal===!0),v=f(()=>"q-header q-layout__section--marginal "+(m.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(i.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),x=f(()=>{const o=l.rows.value.top,b={};return o[0]==="l"&&l.left.space===!0&&(b[n.lang.rtl===!0?"right":"left"]=`${l.left.size}px`),o[2]==="r"&&l.right.space===!0&&(b[n.lang.rtl===!0?"left":"right"]=`${l.right.size}px`),b});function d(o, b){l.update("header",o,b)}function w(o, b){o.value!==b&&(o.value=b)}function R({height:o}){w(u,o),d("size",o)}function V(o){p.value===!0&&w(c,!0),t("focusin",o)}T(()=>e.modelValue, o=>{d("space",o),w(c,!0),l.animate()}),T(a, o=>{d("offset",o)}),T(()=>e.reveal, o=>{o===!1&&w(c,e.modelValue)}),T(c, o=>{l.animate(),t("reveal",o)}),T(l.scroll, o=>{e.reveal===!0&&w(c,o.direction==="up"||o.position<=e.revealOffset||o.position-o.inflectionPoint<100)});const $={};return l.instances.header=$,e.modelValue===!0&&d("size",u.value),d("space",e.modelValue),d("offset",a.value),O(()=>{l.instances.header===$&&(l.instances.header=void 0,d("size",0),d("offset",0),d("space",!1))}),()=>{const o=ie(r.default,[]);return e.elevated===!0&&o.push(h("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),o.push(h(W,{debounce:0,onResize:R})),h("header",{class:v.value,style:x.value,onFocusin:V},o)}}}),ve=L({name:"QPageContainer",setup(e, {slots:r}){const{proxy:{$q:t}}=H(),n=Y(N,q);if(n===q)return console.error("QPageContainer needs to be child of QLayout"),q;G(Z,!0);const l=f(()=>{const u={};return n.header.space===!0&&(u.paddingTop=`${n.header.size}px`),n.right.space===!0&&(u[`padding${t.lang.rtl===!0?"Left":"Right"}`]=`${n.right.size}px`),n.footer.space===!0&&(u.paddingBottom=`${n.footer.size}px`),n.left.space===!0&&(u[`padding${t.lang.rtl===!0?"Right":"Left"}`]=`${n.left.size}px`),u});return()=>h("div",{class:"q-page-container",style:l.value},M(r.default))}}),he=[Element,String],me=[null,document,document.body,document.scrollingElement,document.documentElement];function ge(e, r){let t=re(r);if(t===void 0){if(e==null)return window;t=e.closest(".scroll,.scroll-y,.overflow-auto")}return me.includes(t)?window:t}function pe(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function be(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let Q;function k(){if(Q!==void 0)return Q;const e=document.createElement("p"),r=document.createElement("div");U(e,{width:"100%",height:"200px"}),U(r,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),r.appendChild(e),document.body.appendChild(r);const t=e.offsetWidth;r.style.overflow="scroll";let n=e.offsetWidth;return t===n&&(n=r.clientWidth),r.remove(),Q=t-n,Q}const{passive:I}=F,we=["both","horizontal","vertical"],ye=L({name:"QScrollObserver",props:{axis:{type:String,validator: e=>we.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:he},emits:["scroll"],setup(e, {emit:r}){const t={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let n=null,l,u;T(()=>e.scrollTarget,()=>{a(),m()});function c(){n!==null&&n();const v=Math.max(0,pe(l)),x=be(l),d={top:v-t.position.top,left:x-t.position.left};if(e.axis==="vertical"&&d.top===0||e.axis==="horizontal"&&d.left===0)return;const w=Math.abs(d.top)>=Math.abs(d.left)?d.top<0?"up":"down":d.left<0?"left":"right";t.position={top:v,left:x},t.directionChanged=t.direction!==w,t.delta=d,t.directionChanged===!0&&(t.direction=w,t.inflectionPoint=t.position),r("scroll",{...t})}function m(){l=ge(u,e.scrollTarget),l.addEventListener("scroll",i,I),i(!0)}function a(){l!==void 0&&(l.removeEventListener("scroll",i,I),l=void 0)}function i(v){if(v===!0||e.debounce===0||e.debounce==="0")c();else if(n===null){const[x,d]=e.debounce?[setTimeout(c,e.debounce),clearTimeout]:[requestAnimationFrame(c),cancelAnimationFrame];n=()=>{d(x),n=null}}}const{proxy:p}=H();return T(()=>p.$q.lang.rtl,c),E(()=>{u=p.$el.parentNode,m()}),O(()=>{n!==null&&n(),a()}),Object.assign(p,{trigger:i,getPosition:()=>t}),X}}),ze=L({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator: e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e, {slots:r,emit:t}){const{proxy:{$q:n}}=H(),l=z(null),u=z(n.screen.height),c=z(e.container===!0?0:n.screen.width),m=z({position:0,direction:"down",inflectionPoint:0}),a=z(0),i=z(K.value===!0?0:k()),p=f(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),v=f(()=>e.container===!1?{minHeight:n.screen.height+"px"}:null),x=f(()=>i.value!==0?{[n.lang.rtl===!0?"left":"right"]:`${i.value}px`}:null),d=f(()=>i.value!==0?{[n.lang.rtl===!0?"right":"left"]:0,[n.lang.rtl===!0?"left":"right"]:`-${i.value}px`,width:`calc(100% + ${i.value}px)`}:null);function w(s){if(e.container===!0||document.qScrollPrevented!==!0){const g={position:s.position.top,direction:s.direction,directionChanged:s.directionChanged,inflectionPoint:s.inflectionPoint.top,delta:s.delta.top};m.value=g,e.onScroll!==void 0&&t("scroll",g)}}function R(s){const{height:g,width:S}=s;let y=!1;u.value!==g&&(y=!0,u.value=g,e.onScrollHeight!==void 0&&t("scrollHeight",g),$()),c.value!==S&&(y=!0,c.value=S),y===!0&&e.onResize!==void 0&&t("resize",s)}function V({height:s}){a.value!==s&&(a.value=s,$())}function $(){if(e.container===!0){const s=u.value>a.value?k():0;i.value!==s&&(i.value=s)}}let o=null;const b={instances:{},view:f(()=>e.view),isContainer:f(()=>e.container),rootRef:l,height:u,containerHeight:a,scrollbarWidth:i,totalWidth:f(()=>c.value+i.value),rows:f(()=>{const s=e.view.toLowerCase().split(" ");return{top:s[0].split(""),middle:s[1].split(""),bottom:s[2].split("")}}),header:P({size:0,offset:0,space:!1}),right:P({size:300,offset:0,space:!1}),footer:P({size:0,offset:0,space:!1}),left:P({size:300,offset:0,space:!1}),scroll:m,animate(){o!==null?clearTimeout(o):document.body.classList.add("q-body--layout-animate"),o=setTimeout(()=>{o=null,document.body.classList.remove("q-body--layout-animate")},155)},update(s, g, S){b[s][g]=S}};if(G(N,b),k()>0){let s=function(){y=null,B.classList.remove("hide-scrollbar")},g=function(){if(y===null){if(B.scrollHeight>n.screen.height)return;B.classList.add("hide-scrollbar")}else clearTimeout(y);y=setTimeout(s,300)},S=function(j){y!==null&&j==="remove"&&(clearTimeout(y),s()),window[`${j}EventListener`]("resize",g)},y=null;const B=document.body;T(()=>e.container!==!0?"add":"remove",S),e.container!==!0&&S("add"),ee(()=>{S("remove")})}return()=>{const s=ae(r.default,[h(ye,{onScroll:w}),h(W,{onResize:R})]),g=h("div",{class:p.value,style:v.value,ref:e.container===!0?void 0:l,tabindex:-1},s);return e.container===!0?h("div",{class:"q-layout-container overflow-hidden",ref:l},[h(W,{onResize:V}),h("div",{class:"absolute-full",style:x.value},[h("div",{class:"scroll",style:d.value},[g])])]):g}}}),xe={};function Se(e, r){const t=te("router-view");return ne(),oe(ze,{view:"lHh Lpr lFf"},{default:_(()=>[C(fe,{elevated:""},{default:_(()=>[C(ce,null,{default:_(()=>[C(ue,null,{default:_(()=>r[0]||(r[0]=[le(" 3D Viewer ")])),_:1})]),_:1})]),_:1}),C(ve,null,{default:_(()=>[C(t)]),_:1})]),_:1})}const $e=se(xe,[["render",Se]]);export{$e as default};
