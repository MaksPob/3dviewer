import{a as o,g as V,c as F,h as v,I as de,C as D,J as fe,K as ve,L as ae,M as ge,r as H,b as me,N as be,D as P,T as he,l as ye,O as ke}from "./index-BRpa16sD.js";import{h as pe,b as z,c as xe}from "./dom-C5D6UJ73.js";function qe(e){return e.appContext.config.globalProperties.$router!==void 0}function U(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function W(e, t){return(e.aliasOf||e)===(t.aliasOf||t)}function $e(e, t){for(const r in t){const n=t[r],i=e[r];if(typeof n=="string"){if(n!==i)return!1}else if(Array.isArray(i)===!1||i.length!==n.length||n.some((f, c)=>f!==i[c]))return!1}return!0}function X(e, t){return Array.isArray(t)===!0?e.length===t.length&&e.every((r, n)=>r===t[n]):e.length===1&&e[0]===t}function Ee(e, t){return Array.isArray(e)===!0?X(e,t):Array.isArray(t)===!0?X(t,e):e===t}function Se(e, t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const r in e)if(Ee(e[r],t[r])===!1)return!1;return!0}const ue={to:[String,Object],replace:Boolean,href:String,target:String,disable:Boolean},Ge={...ue,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"}};function we({fallbackTag:e,useDisableForRouterLinkProps:t=!0}={}){const r=V(),{props:n,proxy:i,emit:f}=r,c=qe(r),u=o(()=>n.disable!==!0&&n.href!==void 0),q=t===!0?o(()=>c===!0&&n.disable!==!0&&u.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""):o(()=>c===!0&&u.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""),h=o(()=>q.value===!0?_(n.to):null),s=o(()=>h.value!==null),y=o(()=>u.value===!0||s.value===!0),l=o(()=>n.type==="a"||y.value===!0?"a":n.tag||e||"div"),k=o(()=>u.value===!0?{href:n.href,target:n.target}:s.value===!0?{href:h.value.href,target:n.target}:{}),b=o(()=>{if(s.value===!1)return-1;const{matched:g}=h.value,{length:$}=g,S=g[$-1];if(S===void 0)return-1;const R=i.$route.matched;if(R.length===0)return-1;const L=R.findIndex(W.bind(null,S));if(L!==-1)return L;const K=U(g[$-2]);return $>1&&U(S)===K&&R[R.length-1].path!==K?R.findIndex(W.bind(null,g[$-2])):L}),p=o(()=>s.value===!0&&b.value!==-1&&$e(i.$route.params,h.value.params)),d=o(()=>p.value===!0&&b.value===i.$route.matched.length-1&&Se(i.$route.params,h.value.params)),x=o(()=>s.value===!0?d.value===!0?` ${n.exactActiveClass} ${n.activeClass}`:n.exact===!0?"":p.value===!0?` ${n.activeClass}`:"":"");function _(g){try{return i.$router.resolve(g)}catch{}return null}function C(g, {returnRouterError:$,to:S=n.to,replace:R=n.replace}={}){if(n.disable===!0)return g.preventDefault(),Promise.resolve(!1);if(g.metaKey||g.altKey||g.ctrlKey||g.shiftKey||g.button!==void 0&&g.button!==0||n.target==="_blank")return Promise.resolve(!1);g.preventDefault();const L=i.$router[R===!0?"replace":"push"](S);return $===!0?L:L.then(()=>{}).catch(()=>{})}function B(g){if(s.value===!0){const $= S=>C(g,S);f("click",g,$),g.defaultPrevented!==!0&&$()}else f("click",g)}return{hasRouterLink:s,hasHrefLink:u,hasLink:y,linkTag:l,resolvedLink:h,linkIsActive:p,linkIsExactActive:d,linkClass:x,linkAttrs:k,getLink:_,navigateToRouterLink:C,navigateOnClick:B}}const Q={xs:18,sm:24,md:32,lg:38,xl:46},re={size:String};function le(e, t=Q){return o(()=>e.size!==void 0?{fontSize:e.size in t?`${t[e.size]}px`:e.size}:null)}const J="0 0 24 24",Y= e=>e,N= e=>`ionicons ${e}`,ie={"mdi-": e=>`mdi ${e}`,"icon-":Y,"bt-": e=>`bt ${e}`,"eva-": e=>`eva ${e}`,"ion-md":N,"ion-ios":N,"ion-logo":N,"iconfont ":Y,"ti-": e=>`themify-icon ${e}`,"bi-": e=>`bootstrap-icons ${e}`},se={o_:"-outlined",r_:"-round",s_:"-sharp"},oe={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},Re=new RegExp("^("+Object.keys(ie).join("|")+")"),Le=new RegExp("^("+Object.keys(se).join("|")+")"),G=new RegExp("^("+Object.keys(oe).join("|")+")"),Ce=/^[Mm]\s?[-+]?\.?\d/,Be=/^img:/,_e=/^svguse:/,Pe=/^ion-/,Te=/^(fa-(classic|sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /,Z=F({name:"QIcon",props:{...re,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e, {slots:t}){const{proxy:{$q:r}}=V(),n=le(e),i=o(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),f=o(()=>{let c,u=e.name;if(u==="none"||!u)return{none:!0};if(r.iconMapFn!==null){const s=r.iconMapFn(u);if(s!==void 0)if(s.icon!==void 0){if(u=s.icon,u==="none"||!u)return{none:!0}}else return{cls:s.cls,content:s.content!==void 0?s.content:" "}}if(Ce.test(u)===!0){const[s,y=J]=u.split("|");return{svg:!0,viewBox:y,nodes:s.split("&&").map(l=>{const[k,b,p]=l.split("@@");return v("path",{style:b,d:k,transform:p})})}}if(Be.test(u)===!0)return{img:!0,src:u.substring(4)};if(_e.test(u)===!0){const[s,y=J]=u.split("|");return{svguse:!0,src:s.substring(7),viewBox:y}}let q=" ";const h=u.match(Re);if(h!==null)c=ie[h[1]](u);else if(Te.test(u)===!0)c=u;else if(Pe.test(u)===!0)c=`ionicons ion-${r.platform.is.ios===!0?"ios":"md"}${u.substring(3)}`;else if(G.test(u)===!0){c="notranslate material-symbols";const s=u.match(G);s!==null&&(u=u.substring(6),c+=oe[s[1]]),q=u}else{c="notranslate material-icons";const s=u.match(Le);s!==null&&(u=u.substring(2),c+=se[s[1]]),q=u}return{cls:c,content:q}});return()=>{const c={class:i.value,style:n.value,"aria-hidden":"true",role:"presentation"};return f.value.none===!0?v(e.tag,c,pe(t.default)):f.value.img===!0?v(e.tag,c,z(t.default,[v("img",{src:f.value.src})])):f.value.svg===!0?v(e.tag,c,z(t.default,[v("svg",{viewBox:f.value.viewBox||"0 0 24 24"},f.value.nodes)])):f.value.svguse===!0?v(e.tag,c,z(t.default,[v("svg",{viewBox:f.value.viewBox},[v("use",{"xlink:href":f.value.src})])])):(f.value.cls!==void 0&&(c.class+=" "+f.value.cls),v(e.tag,c,z(t.default,[f.value.content])))}}}),Oe={size:{type:[String,Number],default:"1em"},color:String};function Me(e){return{cSize:o(()=>e.size in Q?`${Q[e.size]}px`:e.size),classes:o(()=>"q-spinner"+(e.color?` text-${e.color}`:""))}}const Ae=F({name:"QSpinner",props:{...Oe,thickness:{type:Number,default:5}},setup(e){const{cSize:t,classes:r}=Me(e);return()=>v("svg",{class:r.value+" q-spinner-mat",width:t.value,height:t.value,viewBox:"25 25 50 50"},[v("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}});function je(e, t=250){let r=!1,n;return function(){return r===!1&&(r=!0,setTimeout(()=>{r=!1},t),n=e.apply(this,arguments)),n}}function ee(e, t, r, n){r.modifiers.stop===!0&&ae(e);const i=r.modifiers.color;let f=r.modifiers.center;f=f===!0||n===!0;const c=document.createElement("span"),u=document.createElement("span"),q=ge(e),{left:h,top:s,width:y,height:l}=t.getBoundingClientRect(),k=Math.sqrt(y*y+l*l),b=k/2,p=`${(y-k)/2}px`,d=f?p:`${q.left-h-b}px`,x=`${(l-k)/2}px`,_=f?x:`${q.top-s-b}px`;u.className="q-ripple__inner",xe(u,{height:`${k}px`,width:`${k}px`,transform:`translate3d(${d},${_},0) scale3d(.2,.2,1)`,opacity:0}),c.className=`q-ripple${i?" text-"+i:""}`,c.setAttribute("dir","ltr"),c.appendChild(u),t.appendChild(c);const C=()=>{c.remove(),clearTimeout(B)};r.abort.push(C);let B=setTimeout(()=>{u.classList.add("q-ripple__inner--enter"),u.style.transform=`translate3d(${p},${x},0) scale3d(1,1,1)`,u.style.opacity=.2,B=setTimeout(()=>{u.classList.remove("q-ripple__inner--enter"),u.classList.add("q-ripple__inner--leave"),u.style.opacity=0,B=setTimeout(()=>{c.remove(),r.abort.splice(r.abort.indexOf(C),1)},275)},250)},50)}function te(e, {modifiers:t,value:r,arg:n}){const i=Object.assign({},e.cfg.ripple,t,r);e.modifiers={early:i.early===!0,stop:i.stop===!0,center:i.center===!0,color:i.color||n,keyCodes:[].concat(i.keyCodes||13)}}const ze=de({name:"ripple",beforeMount(e, t){const r=t.instance.$.appContext.config.globalProperties.$q.config||{};if(r.ripple===!1)return;const n={cfg:r,enabled:t.value!==!1,modifiers:{},abort:[],start(i){n.enabled===!0&&i.qSkipRipple!==!0&&i.type===(n.modifiers.early===!0?"pointerdown":"click")&&ee(i,e,n,i.qKeyEvent===!0)},keystart:je(i=>{n.enabled===!0&&i.qSkipRipple!==!0&&D(i,n.modifiers.keyCodes)===!0&&i.type===`key${n.modifiers.early===!0?"down":"up"}`&&ee(i,e,n,!0)},300)};te(n,t),e.__qripple=n,fe(n,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e, t){if(t.oldValue!==t.value){const r=e.__qripple;r!==void 0&&(r.enabled=t.value!==!1,r.enabled===!0&&Object(t.value)===t.value&&te(r,t))}},beforeUnmount(e){const t=e.__qripple;t!==void 0&&(t.abort.forEach(r=>{r()}),ve(t,"main"),delete e._qripple)}}),ce={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},Ke=Object.keys(ce),Ie={align:{type:String,validator: e=>Ke.includes(e)}};function Ne(e){return o(()=>{const t=e.align===void 0?e.vertical===!0?"stretch":"left":e.align;return`${e.vertical===!0?"items":"justify"}-${ce[t]}`})}const ne={none:0,xs:4,sm:8,md:16,lg:24,xl:32},De={xs:8,sm:10,md:14,lg:20,xl:24},Qe=["button","submit","reset"],Ve=/[^\s]\/[^\s]/,Fe=["flat","outline","push","unelevated"];function He(e, t){return e.flat===!0?"flat":e.outline===!0?"outline":e.push===!0?"push":e.unelevated===!0?"unelevated":t}const Ue={...re,...ue,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,...Fe.reduce((e, t)=>(e[t]=Boolean)&&e,{}),square:Boolean,rounded:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...Ie.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean},We={...Ue,round:Boolean};function Xe(e){const t=le(e,De),r=Ne(e),{hasRouterLink:n,hasLink:i,linkTag:f,linkAttrs:c,navigateOnClick:u}=we({fallbackTag:"button"}),q=o(()=>{const d=e.fab===!1&&e.fabMini===!1?t.value:{};return e.padding!==void 0?Object.assign({},d,{padding:e.padding.split(/\s+/).map(x=>x in ne?ne[x]+"px":x).join(" "),minWidth:"0",minHeight:"0"}):d}),h=o(()=>e.rounded===!0||e.fab===!0||e.fabMini===!0),s=o(()=>e.disable!==!0&&e.loading!==!0),y=o(()=>s.value===!0?e.tabindex||0:-1),l=o(()=>He(e,"standard")),k=o(()=>{const d={tabindex:y.value};return i.value===!0?Object.assign(d,c.value):Qe.includes(e.type)===!0&&(d.type=e.type),f.value==="a"?(e.disable===!0?d["aria-disabled"]="true":d.href===void 0&&(d.role="button"),n.value!==!0&&Ve.test(e.type)===!0&&(d.type=e.type)):e.disable===!0&&(d.disabled="",d["aria-disabled"]="true"),e.loading===!0&&e.percentage!==void 0&&Object.assign(d,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),d}),b=o(()=>{let d;e.color!==void 0?e.flat===!0||e.outline===!0?d=`text-${e.textColor||e.color}`:d=`bg-${e.color} text-${e.textColor||"white"}`:e.textColor&&(d=`text-${e.textColor}`);const x=e.round===!0?"round":`rectangle${h.value===!0?" q-btn--rounded":e.square===!0?" q-btn--square":""}`;return`q-btn--${l.value} q-btn--${x}`+(d!==void 0?" "+d:"")+(s.value===!0?" q-btn--actionable q-focusable q-hoverable":e.disable===!0?" disabled":"")+(e.fab===!0?" q-btn--fab":e.fabMini===!0?" q-btn--fab-mini":"")+(e.noCaps===!0?" q-btn--no-uppercase":"")+(e.dense===!0?" q-btn--dense":"")+(e.stretch===!0?" no-border-radius self-stretch":"")+(e.glossy===!0?" glossy":"")+(e.square?" q-btn--square":"")}),p=o(()=>r.value+(e.stack===!0?" column":" row")+(e.noWrap===!0?" no-wrap text-no-wrap":"")+(e.loading===!0?" q-btn__content--hidden":""));return{classes:b,style:q,innerClasses:p,attributes:k,hasLink:i,linkTag:f,navigateOnClick:u,isActionable:s}}const{passiveCapture:E}=ye;let T=null,O=null,M=null;const Ze=F({name:"QBtn",props:{...We,percentage:Number,darkPercentage:Boolean,onTouchstart:[Function,Array]},emits:["click","keydown","mousedown","keyup"],setup(e, {slots:t,emit:r}){const{proxy:n}=V(),{classes:i,style:f,innerClasses:c,attributes:u,hasLink:q,linkTag:h,navigateOnClick:s,isActionable:y}=Xe(e),l=H(null),k=H(null);let b=null,p,d=null;const x=o(()=>e.label!==void 0&&e.label!==null&&e.label!==""),_=o(()=>e.disable===!0||e.ripple===!1?!1:{keyCodes:q.value===!0?[13,32]:[13],...e.ripple===!0?{}:e.ripple}),C=o(()=>({center:e.round})),B=o(()=>{const a=Math.max(0,Math.min(100,e.percentage));return a>0?{transition:"transform 0.6s",transform:`translateX(${a-100}%)`}:{}}),g=o(()=>{if(e.loading===!0)return{onMousedown:j,onTouchstart:j,onClick:j,onKeydown:j,onKeyup:j};if(y.value===!0){const a={onClick:S,onKeydown:R,onMousedown:K};if(n.$q.platform.has.touch===!0){const m=e.onTouchstart!==void 0?"":"Passive";a[`onTouchstart${m}`]=L}return a}return{onClick:P}}),$=o(()=>({ref:l,class:"q-btn q-btn-item non-selectable no-outline "+i.value,style:f.value,...u.value,...g.value}));function S(a){if(l.value!==null){if(a!==void 0){if(a.defaultPrevented===!0)return;const m=document.activeElement;if(e.type==="submit"&&m!==document.body&&l.value.contains(m)===!1&&m.contains(l.value)===!1){l.value.focus();const I=()=>{document.removeEventListener("keydown",P,!0),document.removeEventListener("keyup",I,E),l.value!==null&&l.value.removeEventListener("blur",I,E)};document.addEventListener("keydown",P,!0),document.addEventListener("keyup",I,E),l.value.addEventListener("blur",I,E)}}s(a)}}function R(a){l.value!==null&&(r("keydown",a),D(a,[13,32])===!0&&O!==l.value&&(O!==null&&A(),a.defaultPrevented!==!0&&(l.value.focus(),O=l.value,l.value.classList.add("q-btn--active"),document.addEventListener("keyup",w,!0),l.value.addEventListener("blur",w,E)),P(a)))}function L(a){l.value!==null&&(r("touchstart",a),a.defaultPrevented!==!0&&(T!==l.value&&(T!==null&&A(),T=l.value,b=a.target,b.addEventListener("touchcancel",w,E),b.addEventListener("touchend",w,E)),p=!0,d!==null&&clearTimeout(d),d=setTimeout(()=>{d=null,p=!1},200)))}function K(a){l.value!==null&&(a.qSkipRipple=p===!0,r("mousedown",a),a.defaultPrevented!==!0&&M!==l.value&&(M!==null&&A(),M=l.value,l.value.classList.add("q-btn--active"),document.addEventListener("mouseup",w,E)))}function w(a){if(l.value!==null&&!(a!==void 0&&a.type==="blur"&&document.activeElement===l.value)){if(a!==void 0&&a.type==="keyup"){if(O===l.value&&D(a,[13,32])===!0){const m=new MouseEvent("click",a);m.qKeyEvent=!0,a.defaultPrevented===!0&&ke(m),a.cancelBubble===!0&&ae(m),l.value.dispatchEvent(m),P(a),a.qKeyEvent=!0}r("keyup",a)}A()}}function A(a){const m=k.value;a!==!0&&(T===l.value||M===l.value)&&m!==null&&m!==document.activeElement&&(m.setAttribute("tabindex",-1),m.focus()),T===l.value&&(b!==null&&(b.removeEventListener("touchcancel",w,E),b.removeEventListener("touchend",w,E)),T=b=null),M===l.value&&(document.removeEventListener("mouseup",w,E),M=null),O===l.value&&(document.removeEventListener("keyup",w,!0),l.value!==null&&l.value.removeEventListener("blur",w,E),O=null),l.value!==null&&l.value.classList.remove("q-btn--active")}function j(a){P(a),a.qSkipRipple=!0}return me(()=>{A(!0)}),Object.assign(n,{click: a=>{y.value===!0&&S(a)}}),()=>{let a=[];e.icon!==void 0&&a.push(v(Z,{name:e.icon,left:e.stack!==!0&&x.value===!0,role:"img"})),x.value===!0&&a.push(v("span",{class:"block"},[e.label])),a=z(t.default,a),e.iconRight!==void 0&&e.round===!1&&a.push(v(Z,{name:e.iconRight,right:e.stack!==!0&&x.value===!0,role:"img"}));const m=[v("span",{class:"q-focus-helper",ref:k})];return e.loading===!0&&e.percentage!==void 0&&m.push(v("span",{class:"q-btn__progress absolute-full overflow-hidden"+(e.darkPercentage===!0?" q-btn__progress--dark":"")},[v("span",{class:"q-btn__progress-indicator fit block",style:B.value})])),m.push(v("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+c.value},a)),e.loading!==null&&m.push(v(he,{name:"q-transition--fade"},()=>e.loading===!0?[v("span",{key:"loading",class:"absolute-full flex flex-center"},t.loading!==void 0?t.loading():[v(Ae)])]:null)),be(v(h.value,$.value,m),[[ze,_.value,void 0,C.value]])}}});export{Ze as Q,we as a,Ge as u};
