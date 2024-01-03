import{r as d,j as e}from"./react-Jw3Yv3Dx.js";import{c as re}from"./react-dom-KmRZywdm.js";import{N as ne,L as ae,B as ie}from"./react-router-dom-IHdWotJk.js";import{P as le}from"./react-redux-z09SlkWR.js";import{D as S,C as Q,R as oe,a as M,S as x,T as ce}from"./react-bootstrap-c5_33dwq.js";import{b as G,O as de,e as p,f as u}from"./react-router-uND8Us2t.js";import{c as k}from"./classnames-TNdf9gv5.js";import{m as K,A as ue}from"./framer-motion-g-r5ZHJ9.js";import{H as me,a as he}from"./react-helmet-async-zKePrVHr.js";import{c as pe,r as fe,f as xe,a as W,b as ye,s as je}from"./@reduxjs-MlIXepis.js";import{c as _e}from"./redux-C6JyQ450.js";import"./scheduler-iwWdm5Ml.js";import"./@remix-run-R0A6g4pJ.js";import"./use-sync-external-store-rpec4DOT.js";import"./@restart-xIeF-cHV.js";import"./dom-helpers--nlGJCCs.js";import"./@react-aria-T7pU4Vz_.js";import"./dequal-vEqHzq4I.js";import"./@popperjs-u7bcf535.js";import"./warning-A3mB0AEe.js";import"./uncontrollable-af-_F5Rh.js";import"./@babel-o_ZSNJgm.js";import"./react-transition-group-XCMw5D4t.js";import"./prop-types-owtuOFwk.js";import"./react-fast-compare-PQr6UfN5.js";import"./invariant-LDHjVc5t.js";import"./shallowequal-ujSgULk1.js";import"./immer-2oJgyI5v.js";import"./reselect-lfPQZHtp.js";import"./redux-thunk-qyK_zz9Y.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function r(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(a){if(a.ep)return;a.ep=!0;const n=r(a);fetch(a.href,n)}})();let J="",ge="https://vigolajnen.github.io/vrb-shop/";J="/vrb-shop/";const ve="modulepreload",be=function(t){return"/vrb-shop/"+t},U={},f=function(s,r,i){let a=Promise.resolve();if(r&&r.length>0){const n=document.getElementsByTagName("link");a=Promise.all(r.map(l=>{if(l=be(l),l in U)return;U[l]=!0;const o=l.endsWith(".css"),_=o?'[rel="stylesheet"]':"";if(!!i)for(let h=n.length-1;h>=0;h--){const v=n[h];if(v.href===l&&(!o||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${_}`))return;const m=document.createElement("link");if(m.rel=o?"stylesheet":ve,o||(m.as="script",m.crossOrigin=""),m.href=l,document.head.appendChild(m),o)return new Promise((h,v)=>{m.addEventListener("load",h),m.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${l}`)))})}))}return a.then(()=>s()).catch(n=>{const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=n,window.dispatchEvent(l),!l.defaultPrevented)throw n})},c={sam:{url:"/",name:"Самара"},spb:{url:"/spb.html",name:"Санкт-Петербург"},yar:{url:"/yar.html",name:"Ярославль"},arh:{url:"/arh.html",name:"Архангельск"},ijk:{url:"/ijk.html",name:"Ижевск"},kzn:{url:"/kzn.html",name:"Казань"},nch:{url:"/nch.html",name:"Набережные Челны"},goj:{url:"/goj.html",name:"Нижний Новгород"},pes:{url:"/pes.html",name:"Петрозаводск"},ryz:{url:"/ryz.html",name:"Рязань"},tol:{url:"/tol.html",name:"Тольятти"},tul:{url:"/tul.html",name:"Тула"},uly:{url:"/uly.html",name:"Ульяновск"}},X=t=>d.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 160 27",...t},d.createElement("path",{fill:"#fff",fillRule:"evenodd",d:"m82.26 1.86-3.48 1.83 3.74.1c2.06.06 5.42.06 7.48 0l3.74-.1-3.56-1.85C88.22.82 86.42-.01 86.18 0c-.24.01-2 .85-3.92 1.86m-3.3 6.96v4.24h6.6V9.53h-1.73c-1.32 0-1.74-.13-1.74-.53 0-.45.73-.53 4.52-.53 3.79 0 4.52.08 4.52.53 0 .4-.44.53-1.91.53H87.3v3.56l3.22-.1 3.22-.1.1-4.16.1-4.15H78.96zM56.36 7c-1.28.7-2.45 2.56-2.45 3.9 0 2.32 1.97 4.16 5.16 4.83 1.3.27 1.74.98 1.1 1.77-.64.78-2.4.63-4.08-.34l-1.48-.86v1.91c0 1.8.07 1.95 1.13 2.53 1.67.9 5.14.85 6.4-.09 1.41-1.04 2.33-3.08 2.06-4.55-.35-1.87-1.4-2.93-3.6-3.61-2.52-.78-3-1.12-2.47-1.76.56-.7 2.72-.6 4.23.18l1.3.67V7.48l-1.4-.57c-1.87-.75-4.42-.72-5.9.08m11.21-.14c-2.19 1-3.14 3.98-2 6.22.6 1.19 1.78 1.9 4.15 2.5 1.85.47 2.38 1.23 1.38 2-.88.66-3.08.36-4.36-.6a5.17 5.17 0 0 0-1.16-.72c-.1 0-.19.77-.19 1.7 0 2.03.52 2.64 2.77 3.25 3.92 1.06 6.97-.96 6.97-4.6 0-2.5-.87-3.35-4.57-4.47-1-.3-1.69-.71-1.69-1.02 0-1.11 3.38-1.07 5.1.08l.81.54V9.75c0-1.74-.1-2.04-.92-2.59-1.22-.81-4.8-1-6.29-.3m46.87.27c-2.2 1.15-3.14 3.1-3.14 6.56 0 4.18 1.46 6.7 4.37 7.52 3.11.89 6.34-.39 7.63-3.01.55-1.1.7-2.12.7-4.6 0-5.03-1.44-6.86-5.62-7.14-2-.13-2.63-.02-3.94.67m26.92-.3c-.59.28-1.43.96-1.86 1.52-.66.84-.76 1.33-.63 2.93.18 2.3 1 3.18 3.8 4.1 2.44.8 2.96 1.29 2.2 2.06-.81.83-2.25.72-4.12-.3l-1.62-.87v1.86c0 1.68.1 1.92 1.02 2.47 3.76 2.26 8.71.15 8.72-3.7 0-2.58-1.07-3.7-4.52-4.74-1.73-.52-2.26-1.28-1.2-1.7 1-.39 2.39-.21 3.9.48l1.47.68V9.7c0-1.69-.11-2-.92-2.54-1.2-.8-4.8-1-6.24-.33M0 13.96v7.24h3.48v-5.3h6.26V12.36H3.48v-2.13h6.26V6.7H0zm11.13 0v7.24h3.83V6.7h-3.83zm5.22-5.48v1.76h3.82v11l1.83-.1 1.83-.11.1-5.4.09-5.39h3.46V6.7H16.35zm12.52 5.46v7.26h3.83l.01-4.68.02-4.68 1.95 4.7 1.95 4.7 2.3-.1 2.29-.11.1-7.16.09-7.16h-3.84l-.02 4.15-.02 4.16-1.5-4.07-1.51-4.06-2.83-.1-2.82-.1zm14.26.02v7.24h9.74v-3.88h-2.96c-2.92 0-2.95-.01-2.95-.89 0-.87.03-.88 2.95-.88h2.96V12h-2.96c-2.92 0-2.95 0-2.95-.88 0-.87.03-.89 2.95-.89h2.96V6.7h-9.74zm54.96 0v7.24H101.56v-5.65h4.18v5.65h3.82V6.7h-3.82V12h-4.18V6.7H98.1zm27.82-1.68c0 4.9.09 5.7.68 6.7 1.06 1.77 2.28 2.39 4.69 2.4 2.7 0 4.16-.64 5.15-2.25.71-1.16.8-1.8.91-6.85l.12-5.57H133.57v4.77c0 4.3-.07 4.85-.7 5.48-.82.83-1.7.9-2.63.2-.6-.44-.69-1.03-.8-5.47l-.12-4.98h-3.4zm24.35 1.68v7.24H160v-3.88h-3.16c-3.07 0-3.15-.03-3.04-.8.1-.75.3-.8 3.16-.9l3.04-.1V12h-3.13c-3.1 0-3.13 0-3.13-.88s.02-.89 3.13-.89H160V6.7h-9.74zm-30.96-3.08c.84.69 1.31 3.2.9 4.83-.55 2.24-2.7 2.98-4.22 1.44-.72-.73-.85-1.2-.85-3.02 0-1.81.14-2.29.85-3.02 1.01-1.02 2.25-1.11 3.32-.23M78.96 18v4.25H93.9v-8.49h-6.6V17.66h1.9c1.48 0 1.92.12 1.92.53 0 .44-.73.53-4.52.53-3.79 0-4.52-.09-4.52-.53 0-.4.42-.53 1.74-.53h1.74V13.77H78.96zm9.3 1.68c-.9.07-2.4.07-3.3 0-.91-.08-.17-.14 1.65-.14 1.82 0 2.56.06 1.65.14m-9.18 3.54c.09.14 1.74 1.05 3.67 2.02L86.26 27l3.51-1.75a30.11 30.11 0 0 0 3.67-2.02c.1-.15-3.14-.27-7.18-.27-4.04 0-7.27.12-7.18.27",clipRule:"evenodd"})),Z=({styles:t})=>e.jsx(X,{width:160,height:27,className:t}),os=t=>{let s=t.toString();return s.length>3?`${s.slice(0,1)}.${s.slice(1)}`:s},ke=Object.entries(c),Ce=ke.sort((t,s)=>t[1].name>s[1].name?1:-1);function Pe(t){const s=[];return t.map(r=>s.push({url:r[1].url,name:r[1].name})),s}const N=Pe(Ce),Se="_wrapper_1ihn1_1",Ne="_title_1ihn1_21",Ee="_inner_1ihn1_32",we="_btn_1ihn1_37",Be="_active_1ihn1_67",b={wrapper:Se,title:Ne,inner:Ee,btn:we,active:Be},Re=({city:t,onClickLinkNo:s})=>{const[r,i]=d.useState(!1),a=localStorage.getItem("city"),n=()=>{i(!1),localStorage.setItem("city",t)},l=()=>{i(!1),s()};return d.useEffect(()=>{a===null&&i(!0)},[a]),e.jsx(e.Fragment,{children:r&&e.jsxs("div",{className:b.wrapper,children:[e.jsxs("h3",{className:b.title,children:["Ваш город ",t,"?"]}),e.jsxs("div",{className:b.inner,children:[e.jsx("button",{className:k(b.btn,b.active),onClick:n,children:"Да"}),e.jsx("button",{className:b.btn,onClick:l,children:"Нет"})]})]})})},Le="_header_s468k_1",De="_button_s468k_9",Te="_menuItem_s468k_21",ze="_logo_s468k_37",C={header:Le,button:De,menuItem:Te,logo:ze},Oe=()=>{const s={hidden:{opacity:0,y:10},visible:{opacity:1,y:0,transition:{duration:.5}}},r=localStorage.getItem("city"),i=G(),[a,n]=d.useState(!1),[l,o]=d.useState("Самара"),_=m=>{const h=m.currentTarget.innerText.toLowerCase();n(!1),o(h[0].toUpperCase()+h.slice(1)),r===null&&localStorage.setItem("city",h)},g=N.find(m=>m.url.slice(1,4)===i.pathname.slice(1,4));return d.useEffect(()=>{g&&o(g.name)},[i,g]),e.jsxs(e.Fragment,{children:[e.jsx(Re,{city:l,onClickLinkNo:()=>{n(!0),console.log(a)}}),e.jsxs(S,{children:[e.jsx(S.Toggle,{id:"example1",variant:"secondary",onClick:()=>n(m=>!m),className:C.button,children:l}),e.jsx(S.Menu,{show:a,children:e.jsx("ul",{children:N.length>0&&[...N].map((m,h)=>e.jsx(K.li,{variants:s,className:C.menuItem,children:e.jsx(ne,{to:m.url,onClick:_,children:m.name})},h))})})]})]})},Ae=()=>{const t=d.useRef(null),[s,r]=d.useState({isSticky:!1,offset:0}),i=(a,n)=>{window.pageYOffset>a+n?r({isSticky:!0,offset:n}):r({isSticky:!1,offset:0})};return d.useEffect(()=>{var l;const a=(l=t.current)==null?void 0:l.getBoundingClientRect(),n=()=>{i((a==null?void 0:a.top)||0,(a==null?void 0:a.height)||0)};return window.addEventListener("scroll",n),()=>{window.removeEventListener("scroll",n)}},[]),e.jsx("header",{ref:t,className:s.isSticky?k(C.header,"sticky-top p-2 py-4"):k(C.header,"p-2 py-4"),children:e.jsxs(Q,{className:"d-flex justify-content-between align-items-center",children:[e.jsx("div",{className:"text-uppercase d-none d-sm-block",children:"рядом с домом"}),e.jsx(Oe,{}),e.jsx(Z,{styles:C.logo})]})})},Ie="_main_qw6q2_1",Ve={main:Ie},He=({children:t})=>e.jsx("main",{className:k(Ve.main),children:t}),$e="_wrapper_d8tyk_1",Fe="_container_d8tyk_11",Me="_cloud_d8tyk_20",Ue="_front_d8tyk_24",Ye="_clouds_d8tyk_1",qe="_back_d8tyk_34",Qe="_rightFront_d8tyk_42",Ge="_leftFront_d8tyk_52",Ke="_rightBack_d8tyk_61",We="_leftBack_d8tyk_71",Je="_sun_d8tyk_80",Xe="_sunshine_d8tyk_90",Ze="_sunshines_d8tyk_1",y={wrapper:$e,container:Fe,cloud:Me,front:Ue,clouds:Ye,back:qe,rightFront:Qe,leftFront:Ge,rightBack:Ke,leftBack:We,sun:Je,sunshine:Xe,sunshines:Ze};function et(){return e.jsx("div",{className:y.wrapper,children:e.jsxs("div",{className:y.container,children:[e.jsxs("div",{className:`${y.cloud} ${y.front}`,children:[e.jsx("span",{className:y.leftFront}),e.jsx("span",{className:y.rightFront})]}),e.jsx("span",{className:`${y.sun} ${y.sunshine}`}),e.jsx("span",{className:y.sun}),e.jsxs("div",{className:`${y.cloud} ${y.back}`,children:[e.jsx("span",{className:y.leftBack}),e.jsx("span",{className:y.rightBack})]})]})})}const tt="_footer_15klj_1",st="_link_15klj_8",Y={footer:tt,link:st},rt=()=>{const t=[{name:"Cоглашение на обработку персональных данных",url:"https://market.fitnesshouse.ru/storage/documents/legal_information.pdf"},{name:"Правила техники безопасности",url:"https://market.fitnesshouse.ru/storage/documents/pravila_tehniki_bezopasnosti.pdf"},{name:"Договор Оферты",url:"https://market.fitnesshouse.ru/documentation"}];return e.jsx("footer",{className:k(Y.footer,"p-2 py-4"),children:e.jsxs(Q,{children:[e.jsx(Z,{styles:"my-4"}),e.jsx("p",{className:"my-4",children:"Все размещенные на сайте сведения носят информационный характер и ни при каких условиях не являются офертой по смыслу ст. 435 ГК РФ и не являются публичной офертой по смыслу ст. 437 ГК РФ, если иное прямо не указано."}),e.jsx("hr",{}),e.jsx("div",{className:"my-2",children:e.jsxs(oe,{children:[t.map((s,r)=>e.jsx(M,{xs:12,sm:6,md:3,children:e.jsx("a",{href:s.url,className:k(Y.link,"p-2 d-flex text-decoration-none"),target:"_blank",rel:"noreferrer",children:s.name})},r)),e.jsxs(M,{className:"",children:[e.jsx("div",{children:"© 2007 - 2023."}),e.jsx("div",{children:"Все права защищены."})]})]})})]})})};function nt(){return e.jsx(e.Fragment,{children:e.jsxs(K.article,{initial:"hidden",animate:"visible",exit:{opacity:0,transition:{duration:1}},variants:{visible:{transition:{staggerChildren:.3}}},children:[e.jsx(Ae,{}),e.jsx(He,{children:e.jsx(d.Suspense,{fallback:e.jsx(et,{}),children:e.jsx(de,{})})}),e.jsx(rt,{})]})})}const at=({title:t,description:s})=>e.jsx(me,{children:e.jsxs(he,{children:[e.jsx("title",{children:t}),e.jsx("meta",{name:"description",content:s})]})});function it(){return e.jsxs(e.Fragment,{children:[e.jsx(at,{title:"Fitness House | Нет такой страницы.",description:"Нет такой страницы."}),e.jsxs("div",{className:"flex flex-col min-h-screen bg-primary p-4 text-white",children:[e.jsx(X,{width:160,height:27,className:"w-48 max-w-full  px-4 mx-auto"}),e.jsx("main",{className:"flex flex-col grow-1 my-auto justify-center container mx-auto ",children:e.jsxs("div",{className:"pt-8 flex flex-col justify-center items-center align-middle text-center",children:[e.jsx("div",{className:"text-8xl font-bold uppercase mb-4",children:"404"}),e.jsx("h1",{className:"text-4xl font-bold uppercase mb-4",children:"Нет такой страницы"}),e.jsx(ae,{to:"/",className:"button p-4 my-4 font-bold uppercase text-white rounded-xl hover:bg-lemon-chiffon-200",children:"Вернуться на главную"})]})})]})]})}const j=d.lazy(()=>f(()=>import("./AppModalOrder-jpdyQbxg.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33]))),q=d.lazy(()=>f(()=>import("./SamHome-KdzbB1kC.js"),__vite__mapDeps([34,1,2,5,6,7,8,9,10,11,12,13,14,15,16,17,19,35,20,3,4,21,22,23,24,25,26,27,28,29,30,31,32]))),lt=d.lazy(()=>f(()=>import("./SpbHome-4a-PvvQN.js"),__vite__mapDeps([36,1,2,19,37,5,6,7,8,9,10,11,12,13,14,15,16,17,38,21,22,23,20,3,4,24,25,26,27,28,29,30,31,32,39,40,41,42,43,44,18,45,46,47,48,49,50,51,52,53,54,55,56]))),ot=d.lazy(()=>f(()=>import("./ArhHome-KyeCVjly.js"),__vite__mapDeps([57,1,2,19,37,5,6,7,8,9,10,11,12,13,14,15,16,17,38,21,22,23,20,3,4,24,25,26,27,28,29,30,31,32,39,40,41,42,43,44,18,45,46,47,48,49,50,51,52,53,54,55,56,35]))),ct=d.lazy(()=>f(()=>import("./YarHome-_kSUXMnV.js"),__vite__mapDeps([58,1,2,19,37,5,6,7,8,9,10,11,12,13,14,15,16,17,38,21,22,23,20,3,4,24,25,26,27,28,29,30,31,32,39,40,41,42,43,44,18,45,46,47,48,49,50,51,52,53,54,55,56,35]))),dt=d.lazy(()=>f(()=>import("./IjkHome-Q9zOHxqa.js"),__vite__mapDeps([59,1,2,19,37,5,6,7,8,9,10,11,12,13,14,15,16,17,38,21,22,23,20,3,4,24,25,26,27,28,29,30,31,32,39,40,41,42,43,44,18,45,46,47,48,49,50,51,52,53,54,55,56,35]))),ut=d.lazy(()=>f(()=>import("./KznHome-h26wgv7b.js"),__vite__mapDeps([60,1,2,19,37,5,6,7,8,9,10,11,12,13,14,15,16,17,38,21,22,23,20,3,4,24,25,26,27,28,29,30,31,32,39,40,41,42,43,44,18,45,46,47,48,49,50,51,52,53,54,55,56,35]))),mt=d.lazy(()=>f(()=>import("./NchHome-34NWL72g.js"),__vite__mapDeps([61,1,2,19,37,5,6,7,8,9,10,11,12,13,14,15,16,17,38,21,22,23,20,3,4,24,25,26,27,28,29,30,31,32,39,40,41,42,43,44,18,45,46,47,48,49,50,51,52,53,54,55,56,35]))),ht=d.lazy(()=>f(()=>import("./UlyHome-Ih9csjpR.js"),__vite__mapDeps([62,1,2,19,37,5,6,7,8,9,10,11,12,13,14,15,16,17,38,21,22,23,20,3,4,24,25,26,27,28,29,30,31,32,39,40,41,42,43,44,18,45,46,47,48,49,50,51,52,53,54,55,56,35]))),pt=d.lazy(()=>f(()=>import("./TulHome-HogZKg29.js"),__vite__mapDeps([63,1,2,19,37,5,6,7,8,9,10,11,12,13,14,15,16,17,38,21,22,23,20,3,4,24,25,26,27,28,29,30,31,32,39,40,41,42,43,44,18,45,46,47,48,49,50,51,52,53,54,55,56,35]))),ft=d.lazy(()=>f(()=>import("./TolHome-vPFEdmNY.js"),__vite__mapDeps([64,1,2,19,37,5,6,7,8,9,10,11,12,13,14,15,16,17,38,21,22,23,20,3,4,24,25,26,27,28,29,30,31,32,39,40,41,42,43,44,18,45,46,47,48,49,50,51,52,53,54,55,56,35]))),xt=d.lazy(()=>f(()=>import("./RyzHome-5ouyDWV2.js"),__vite__mapDeps([65,1,2,19,37,5,6,7,8,9,10,11,12,13,14,15,16,17,38,21,22,23,20,3,4,24,25,26,27,28,29,30,31,32,39,40,41,42,43,44,18,45,46,47,48,49,50,51,52,53,54,55,56,35]))),yt=d.lazy(()=>f(()=>import("./PesHome-_D_Qs7UR.js"),__vite__mapDeps([66,1,2,19,37,5,6,7,8,9,10,11,12,13,14,15,16,17,38,21,22,23,20,3,4,24,25,26,27,28,29,30,31,32,39,40,41,42,43,44,18,45,46,47,48,49,50,51,52,53,54,55,56,35]))),jt=d.lazy(()=>f(()=>import("./GojHome-QmGsg_fb.js"),__vite__mapDeps([67,1,2,19,37,5,6,7,8,9,10,11,12,13,14,15,16,17,38,21,22,23,20,3,4,24,25,26,27,28,29,30,31,32,39,40,41,42,43,44,18,45,46,47,48,49,50,51,52,53,54,55,56,35])));function _t(){var r,i,a,n,l,o,_,g,m,h,v,E,w,B,R,L,D,T,z,O,A,I,V,H,$,F;const t=G(),s=((r=t.state)==null?void 0:r.sam_tariffBg)||((i=t.state)==null?void 0:i.spb_tariffBg)||((a=t.state)==null?void 0:a.arh_tariffBg)||((n=t.state)==null?void 0:n.yar_tariffBg)||((l=t.state)==null?void 0:l.ijk_tariffBg)||((o=t.state)==null?void 0:o.kzn_tariffBg)||((_=t.state)==null?void 0:_.nch_tariffBg)||((g=t.state)==null?void 0:g.goj_tariffBg)||((m=t.state)==null?void 0:m.pes_tariffBg)||((h=t.state)==null?void 0:h.ryz_tariffBg)||((v=t.state)==null?void 0:v.tol_tariffBg)||((E=t.state)==null?void 0:E.tul_tariffBg)||((w=t.state)==null?void 0:w.uly_tariffBg)||t;return e.jsxs(e.Fragment,{children:[e.jsxs(p,{location:s,children:[e.jsxs(u,{path:c.sam.url,element:e.jsx(nt,{}),children:[e.jsx(u,{index:!0,element:e.jsx(q,{})}),e.jsx(u,{path:"/index.html",element:e.jsx(q,{})}),e.jsx(u,{path:c.spb.url,element:e.jsx(lt,{})}),e.jsx(u,{path:c.arh.url,element:e.jsx(ot,{})}),e.jsx(u,{path:c.yar.url,element:e.jsx(ct,{})}),e.jsx(u,{path:c.ijk.url,element:e.jsx(dt,{})}),e.jsx(u,{path:c.kzn.url,element:e.jsx(ut,{})}),e.jsx(u,{path:c.nch.url,element:e.jsx(mt,{})}),e.jsx(u,{path:c.goj.url,element:e.jsx(jt,{})}),e.jsx(u,{path:c.pes.url,element:e.jsx(yt,{})}),e.jsx(u,{path:c.ryz.url,element:e.jsx(xt,{})}),e.jsx(u,{path:c.tol.url,element:e.jsx(ft,{})}),e.jsx(u,{path:c.tul.url,element:e.jsx(pt,{})}),e.jsx(u,{path:c.uly.url,element:e.jsx(ht,{})})]}),e.jsx(u,{path:"*",element:e.jsx(it,{})})]}),((B=t.state)==null?void 0:B.spb_tariffBg)&&e.jsx(p,{children:e.jsx(u,{path:`${c.spb.url}/:id`,element:e.jsx(d.Suspense,{fallback:e.jsx(x,{animation:"border",role:"status",children:e.jsx("span",{className:"visually-hidden",children:"Loading..."})}),children:e.jsx(j,{city:c.spb.name})})})}),((R=t.state)==null?void 0:R.sam_tariffBg)&&e.jsx(p,{children:e.jsx(u,{path:`${c.sam.url}:id`,element:e.jsx(d.Suspense,{fallback:e.jsx(x,{animation:"border",role:"status",children:e.jsx("span",{className:"visually-hidden",children:"Loading..."})}),children:e.jsx(j,{city:c.sam.name})})})}),((L=t.state)==null?void 0:L.arh_tariffBg)&&e.jsx(p,{children:e.jsx(u,{path:`${c.arh.url}/:id`,element:e.jsx(d.Suspense,{fallback:e.jsx(x,{animation:"border",role:"status",children:e.jsx("span",{className:"visually-hidden",children:"Loading..."})}),children:e.jsx(j,{city:c.arh.name})})})}),((D=t.state)==null?void 0:D.yar_tariffBg)&&e.jsx(p,{children:e.jsx(u,{path:`${c.yar.url}/:id`,element:e.jsx(d.Suspense,{fallback:e.jsx(x,{animation:"border",role:"status",children:e.jsx("span",{className:"visually-hidden",children:"Loading..."})}),children:e.jsx(j,{city:c.yar.name})})})}),((T=t.state)==null?void 0:T.ijk_tariffBg)&&e.jsx(p,{children:e.jsx(u,{path:`${c.ijk.url}/:id`,element:e.jsx(d.Suspense,{fallback:e.jsx(x,{animation:"border",role:"status",children:e.jsx("span",{className:"visually-hidden",children:"Loading..."})}),children:e.jsx(j,{city:c.ijk.name})})})}),((z=t.state)==null?void 0:z.kzn_tariffBg)&&e.jsx(p,{children:e.jsx(u,{path:`${c.kzn.url}/:id`,element:e.jsx(d.Suspense,{fallback:e.jsx(x,{animation:"border",role:"status",children:e.jsx("span",{className:"visually-hidden",children:"Loading..."})}),children:e.jsx(j,{city:c.kzn.name})})})}),((O=t.state)==null?void 0:O.nch_tariffBg)&&e.jsx(p,{children:e.jsx(u,{path:`${c.nch.url}/:id`,element:e.jsx(d.Suspense,{fallback:e.jsx(x,{animation:"border",role:"status",children:e.jsx("span",{className:"visually-hidden",children:"Loading..."})}),children:e.jsx(j,{city:c.nch.name})})})}),((A=t.state)==null?void 0:A.goj_tariffBg)&&e.jsx(p,{children:e.jsx(u,{path:`${c.goj.url}/:id`,element:e.jsx(d.Suspense,{fallback:e.jsx(x,{animation:"border",role:"status",children:e.jsx("span",{className:"visually-hidden",children:"Loading..."})}),children:e.jsx(j,{city:c.goj.name})})})}),((I=t.state)==null?void 0:I.pes_tariffBg)&&e.jsx(p,{children:e.jsx(u,{path:`${c.pes.url}/:id`,element:e.jsx(d.Suspense,{fallback:e.jsx(x,{animation:"border",role:"status",children:e.jsx("span",{className:"visually-hidden",children:"Loading..."})}),children:e.jsx(j,{city:c.pes.name})})})}),((V=t.state)==null?void 0:V.ryz_tariffBg)&&e.jsx(p,{children:e.jsx(u,{path:`${c.ryz.url}/:id`,element:e.jsx(d.Suspense,{fallback:e.jsx(x,{animation:"border",role:"status",children:e.jsx("span",{className:"visually-hidden",children:"Loading..."})}),children:e.jsx(j,{city:c.ryz.name})})})}),((H=t.state)==null?void 0:H.tol_tariffBg)&&e.jsx(p,{children:e.jsx(u,{path:`${c.tol.url}/:id`,element:e.jsx(d.Suspense,{fallback:e.jsx(x,{animation:"border",role:"status",children:e.jsx("span",{className:"visually-hidden",children:"Loading..."})}),children:e.jsx(j,{city:c.tol.name})})})}),(($=t.state)==null?void 0:$.tul_tariffBg)&&e.jsx(p,{children:e.jsx(u,{path:`${c.tul.url}/:id`,element:e.jsx(d.Suspense,{fallback:e.jsx(x,{animation:"border",role:"status",children:e.jsx("span",{className:"visually-hidden",children:"Loading..."})}),children:e.jsx(j,{city:c.tul.name})})})}),((F=t.state)==null?void 0:F.uly_tariffBg)&&e.jsx(p,{children:e.jsx(u,{path:`${c.uly.url}/:id`,element:e.jsx(d.Suspense,{fallback:e.jsx(x,{animation:"border",role:"status",children:e.jsx("span",{className:"visually-hidden",children:"Loading..."})}),children:e.jsx(j,{city:c.uly.name})})})})]})}const P=pe({reducerPath:"api/price",baseQuery:fe(xe({baseUrl:"/"}),{maxRetries:3}),refetchOnFocus:!0,endpoints:()=>({})}),gt=P.injectEndpoints({endpoints:t=>({getCities:t.query({query:()=>ge+"data.json",extraOptions:{maxRetries:10},transformResponse:s=>s.services})}),overrideExisting:!1}),{useGetCitiesQuery:vt}=gt;function bt(){return vt("",{refetchOnFocus:!0,pollingInterval:36e6}),e.jsx(ce,{breakpoints:["xxxl","xxl","xl","lg","md","sm","xs","xxs"],minBreakpoint:"xxs",children:e.jsx(_t,{})})}const kt={activeCity:"",activeCityClubs:[],tariffTypes:[],tariffPriceCity:[],clubsPoolYes:[],clubsPoolNo:[],clubsPremiere:[],clubsMC:[],tariffsCity:[],tariffsTabs:["премьер","с бассейном","без бассейна"],tariffsActiveTab:"с бассейном"},ee=W({name:"price",initialState:kt,reducers:{getActiveCity:(t,s)=>{t.activeCity=s.payload},getActiveCityClubs:(t,s)=>{var r;s.payload&&(t.activeCityClubs=(r=s.payload.filter(i=>i.city===t.activeCity)[0])==null?void 0:r.clubs)},getClubsPremiere:(t,s)=>{var a;let r=[],i=[];if(s.payload&&s.payload.length>0){r=t.activeCityClubs=(a=s.payload.filter(o=>o.city===t.activeCity)[0])==null?void 0:a.clubs;const n=r==null?void 0:r.filter(o=>o.name==="Салово"),l=r==null?void 0:r.filter(o=>o.name==="Охта Молл");i=(n==null?void 0:n.length)>0&&l.length>0?[n[0],l[0]]:[]}t.clubsPremiere=(i==null?void 0:i.length)>0?i:[]},getClubsPoolYes:(t,s)=>{var a;let r=[],i=[];if(s.payload&&s.payload.length>0){r=t.activeCityClubs=(a=s.payload.filter(o=>o.city===t.activeCity)[0])==null?void 0:a.clubs;const n=r==null?void 0:r.filter(o=>o.name!=="Салово"),l=n==null?void 0:n.filter(o=>o.name!=="Охта Молл");i=l==null?void 0:l.filter(o=>o.isPool===!0)}t.clubsPoolYes=(i==null?void 0:i.length)>0?i:[]},getClubsPoolNo:(t,s)=>{var a;let r=[],i=[];if(s.payload&&s.payload.length>0){r=t.activeCityClubs=(a=s.payload.filter(o=>o.city===t.activeCity)[0])==null?void 0:a.clubs;const n=r==null?void 0:r.filter(o=>o.name!=="Салово"),l=n==null?void 0:n.filter(o=>o.name!=="Охта Молл");i=l==null?void 0:l.filter(o=>o.isPool===!1)}t.clubsPoolNo=(i==null?void 0:i.length)>0?i:[]},getClubsMC:(t,s)=>{var a;let r=[],i=[];s.payload&&s.payload.length>0&&(r=t.activeCityClubs=(a=s.payload.filter(n=>n.city===t.activeCity)[0])==null?void 0:a.clubs,i=r==null?void 0:r.filter((n,l)=>{const o=n.products.filter(_=>_.product_type==="mc_full");if(o.length>0)return{id:l,name:n.name,address:n.address,products:o}})),t.clubsMC=(i==null?void 0:i.length)>0?i:[]},getTariffTypes:(t,s)=>{var n;const r=t.activeCityClubs=(n=s.payload.filter(l=>l.city===t.activeCity)[0])==null?void 0:n.clubs;let i=[],a=[];r&&r.length>0&&(i=r.map(l=>[...l.products]).flat(1/0),a=i.map(l=>l.product_type).filter(l=>l!=="first_pay")),t.tariffTypes=[...new Set(a)]},getTariffPriceCity:(t,s)=>{var l;const r=t.activeCityClubs=(l=s.payload.filter(o=>o.city===t.activeCity)[0])==null?void 0:l.clubs;let i=[],a=[],n=[];r&&r.length>0&&(i=r.map(o=>[...o.products]).flat(1/0),a=i.filter(o=>o.product_type!=="first_pay"),n=a.map(o=>o.product_price)),t.tariffPriceCity=[...new Set(n)]},getTariffs:(t,s)=>{t.tariffsCity=s.payload},getTariffsActiveTab:(t,s)=>{t.tariffsActiveTab=s.payload}}}),Ct=ee.reducer,cs=ee.actions,Pt=t=>{var s=new Date,r=new Date(s.getFullYear(),s.getMonth(),s.getDate()),i=new Date(t),a=new Date(r.getFullYear(),i.getMonth(),i.getDate()),n;return n=r.getFullYear()-i.getFullYear(),r<a&&(n=n-1),n},ds=()=>{const t=new Date().toLocaleDateString(),s=t.slice(3,5),r=t.slice(0,2);return new Date().getFullYear()-120+"-"+s+"-"+r},us=()=>{const t=new Date().toLocaleDateString(),s=t.slice(3,5),r=t.slice(0,2);return new Date().getFullYear()-14+"-"+s+"-"+r},St=t=>t.replace(/[^0-9]/g,"").slice(1).trim(),Nt=t=>Array.from(t.split("").reduce((s,r)=>(s.set(r,(s.get(r)||0)+1),s),new Map)),Et=t=>{const s=t.replace(/[^+\d]/g,"").slice(2);return s.length===10&&Nt(s)[0][1]<10},ms=(t,s)=>{const r=!!t&&[...t].filter(i=>i.product_type===s);return r.length>0?r[0].product_id:""},hs=t=>t&&t.indexOf("_")===-1&&Et(t)?void 0:"Phone number is required.",ps=t=>Pt(t)>=14,fs=t=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t),wt={clubsPositions:[],formData:[],orderData:{customer:{},products:[],recurrentable:!0}},te=W({name:"form",initialState:wt,reducers:{getFormData:(t,s)=>{t.formData=s.payload},getCustomer:t=>{const s=Object.assign(t.orderData.customer,t.formData);delete s.isCheck,delete s.club_id,s.phone=St(s.phone),t.orderData.customer=s},getClubsPositions:(t,s)=>{t.clubsPositions=s.payload},getProductsPosition:(t,s)=>{var r;t.orderData.products=[],t.orderData.products.push({product_name:s.payload.title,product_price:s.payload.price,product_id:(r=t.formData)==null?void 0:r.club_id})},getProductsPositionId:(t,s)=>{t.orderData.products[0].product_id=s.payload.club_id},getProductsPositionFirstPay:(t,s)=>{var i;const r=(i=t.clubsPositions.filter(a=>a.id===s.payload)[0])==null?void 0:i.first_pay[0];r==null||delete r.product_type,t.orderData.products.push(r)}}}),Bt=te.reducer,xs=te.actions,Rt=_e({[P.reducerPath]:P.reducer,price:Ct,form:Bt}),se=ye({reducer:Rt,middleware:t=>t().concat(P.middleware),devTools:!0});je(se.dispatch);re.createRoot(document.getElementById("root")).render(e.jsx(ie,{basename:J,children:e.jsx(ue,{mode:"wait",children:e.jsx(le,{store:se,children:e.jsx(bt,{})})})}));export{at as M,c as R,f as _,ds as a,ps as b,xs as c,os as f,ms as g,hs as i,us as m,cs as p,vt as u,fs as v};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/AppModalOrder-jpdyQbxg.js","assets/react-Jw3Yv3Dx.js","assets/classnames-TNdf9gv5.js","assets/react-router-uND8Us2t.js","assets/@remix-run-R0A6g4pJ.js","assets/react-bootstrap-c5_33dwq.js","assets/@restart-xIeF-cHV.js","assets/dom-helpers--nlGJCCs.js","assets/@react-aria-T7pU4Vz_.js","assets/react-dom-KmRZywdm.js","assets/scheduler-iwWdm5Ml.js","assets/dequal-vEqHzq4I.js","assets/@popperjs-u7bcf535.js","assets/warning-A3mB0AEe.js","assets/uncontrollable-af-_F5Rh.js","assets/@babel-o_ZSNJgm.js","assets/react-transition-group-XCMw5D4t.js","assets/prop-types-owtuOFwk.js","assets/useModal-3W0tWrfo.js","assets/CityContext-Ieav2pYL.js","assets/react-router-dom-IHdWotJk.js","assets/react-redux-z09SlkWR.js","assets/use-sync-external-store-rpec4DOT.js","assets/framer-motion-g-r5ZHJ9.js","assets/react-helmet-async-zKePrVHr.js","assets/react-fast-compare-PQr6UfN5.js","assets/invariant-LDHjVc5t.js","assets/shallowequal-ujSgULk1.js","assets/@reduxjs-MlIXepis.js","assets/redux-C6JyQ450.js","assets/immer-2oJgyI5v.js","assets/reselect-lfPQZHtp.js","assets/redux-thunk-qyK_zz9Y.js","assets/AppModalOrder-H5IkZOfK.css","assets/SamHome-KdzbB1kC.js","assets/dataSam-6JAtRA3u.js","assets/SpbHome-4a-PvvQN.js","assets/AppPromo-Uw1PaRSM.js","assets/useTypedSelector-OGXYHMc3.js","assets/AppPromo-Mm0cKz0y.css","assets/AppTariffs-qR8JUucD.js","assets/usehooks-ts-uuHl4olw.js","assets/swiper-e4-NYray.js","assets/swiper-CE5vboDu.css","assets/useActions-auM5EmEa.js","assets/icon-touch-abkLO2nS.js","assets/AppTariffs-9iZZv_6o.css","assets/AppBenefit-0185wup_.js","assets/SectionListIconText-QWH3KZvR.js","assets/SectionListIconText-qxsQJwaf.css","assets/AppBenefit-Ky7HPgqw.css","assets/AppClubsGallery-iTnzky9T.js","assets/AppClubsGallery-fv0qaBmr.css","assets/AppProfit--ZJMp43h.js","assets/AppProfit-KsIMDnoL.css","assets/AppFaq-guWd1wJl.js","assets/AppFaq-3yykwi-J.css","assets/ArhHome-KyeCVjly.js","assets/YarHome-_kSUXMnV.js","assets/IjkHome-Q9zOHxqa.js","assets/KznHome-h26wgv7b.js","assets/NchHome-34NWL72g.js","assets/UlyHome-Ih9csjpR.js","assets/TulHome-HogZKg29.js","assets/TolHome-vPFEdmNY.js","assets/RyzHome-5ouyDWV2.js","assets/PesHome-_D_Qs7UR.js","assets/GojHome-QmGsg_fb.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}