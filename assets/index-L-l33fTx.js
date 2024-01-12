import{r as c,j as e}from"./react-dOK_llRH.js";import{c as ae}from"./react-dom-ZjE40EjR.js";import{N as ie,L as le,B as oe}from"./react-router-dom-xnPv3tiZ.js";import{P as ce}from"./react-redux-k4q0NQ3n.js";import{D as P,C as Q,R as de,a as M,S as x,T as ue}from"./react-bootstrap-NBDFt7o7.js";import{b as G,O as me,e as h,f as u}from"./react-router-hd1aWLNq.js";import{c as b}from"./classnames-G66vBsBY.js";import{m as K,A as pe}from"./framer-motion-90-YAChi.js";import{H as he,a as fe}from"./react-helmet-async-VV9_8hgh.js";import{c as xe,r as ye,f as je,a as W,b as _e,s as ge}from"./@reduxjs-LZSxCC61.js";import{c as ve}from"./redux-1vRRQ9xr.js";import"./scheduler-iwWdm5Ml.js";import"./@remix-run-R0A6g4pJ.js";import"./use-sync-external-store-ABTd-lK_.js";import"./@restart--YlOOCn5.js";import"./dom-helpers--nlGJCCs.js";import"./@react-aria-0uNWp7yg.js";import"./dequal-vEqHzq4I.js";import"./@popperjs-u7bcf535.js";import"./warning-lhFwPr5I.js";import"./uncontrollable-BgYfu1sR.js";import"./@babel-o_ZSNJgm.js";import"./react-transition-group-hXqudQ2I.js";import"./prop-types-fuYWWnMu.js";import"./react-fast-compare-v43NpY3q.js";import"./invariant-bxtdRYLJ.js";import"./shallowequal-PLp_r1sp.js";import"./immer-2oJgyI5v.js";import"./reselect-vVLqgz1U.js";import"./redux-thunk-qyK_zz9Y.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();let J="",be="https://vigolajnen.github.io/vrb-shop/";J="/vrb-shop/";const ke="modulepreload",Ce=function(t){return"/vrb-shop/"+t},U={},f=function(s,n,r){let i=Promise.resolve();if(n&&n.length>0){const a=document.getElementsByTagName("link");i=Promise.all(n.map(l=>{if(l=Ce(l),l in U)return;U[l]=!0;const o=l.endsWith(".css"),_=o?'[rel="stylesheet"]':"";if(!!r)for(let p=a.length-1;p>=0;p--){const v=a[p];if(v.href===l&&(!o||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${_}`))return;const m=document.createElement("link");if(m.rel=o?"stylesheet":ke,o||(m.as="script",m.crossOrigin=""),m.href=l,document.head.appendChild(m),o)return new Promise((p,v)=>{m.addEventListener("load",p),m.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${l}`)))})}))}return i.then(()=>s()).catch(a=>{const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a})},d={sam:{url:"/",name:"Самара"},spb:{url:"/spb.html",name:"Санкт-Петербург"},yar:{url:"/yar.html",name:"Ярославль"},arh:{url:"/arh.html",name:"Архангельск"},ijk:{url:"/ijk.html",name:"Ижевск"},kzn:{url:"/kzn.html",name:"Казань"},nch:{url:"/nch.html",name:"Набережные Челны"},goj:{url:"/goj.html",name:"Нижний Новгород"},pes:{url:"/pes.html",name:"Петрозаводск"},ryz:{url:"/ryz.html",name:"Рязань"},tol:{url:"/tol.html",name:"Тольятти"},tul:{url:"/tul.html",name:"Тула"},uly:{url:"/uly.html",name:"Ульяновск"}},Ne="",X=c.createContext(Ne),Z=t=>c.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 160 27",...t},c.createElement("path",{d:"m82.26 1.86-3.48 1.83 3.74.1c2.06.06 5.42.06 7.48 0l3.74-.1-3.56-1.85C88.22.82 86.42-.01 86.18 0s-2 .85-3.92 1.86m-3.3 6.96v4.24h6.6V9.53h-1.73c-1.32 0-1.74-.13-1.74-.53 0-.45.73-.53 4.52-.53s4.52.08 4.52.53c0 .4-.44.53-1.91.53H87.3v3.56l3.22-.1 3.22-.1.1-4.16.1-4.15H78.96zM56.36 7c-1.28.7-2.45 2.56-2.45 3.9 0 2.32 1.97 4.16 5.16 4.83 1.3.27 1.74.98 1.1 1.77-.64.78-2.4.63-4.08-.34l-1.48-.86v1.91c0 1.8.07 1.95 1.13 2.53 1.67.9 5.14.85 6.4-.09 1.41-1.04 2.33-3.08 2.06-4.55-.35-1.87-1.4-2.93-3.6-3.61-2.52-.78-3-1.12-2.47-1.76.56-.7 2.72-.6 4.23.18l1.3.67V7.48l-1.4-.57c-1.87-.75-4.42-.72-5.9.08m11.21-.14c-2.19 1-3.14 3.98-2 6.22.6 1.19 1.78 1.9 4.15 2.5 1.85.47 2.38 1.23 1.38 2-.88.66-3.08.36-4.36-.6a5 5 0 0 0-1.16-.72c-.1 0-.19.77-.19 1.7 0 2.03.52 2.64 2.77 3.25 3.92 1.06 6.97-.96 6.97-4.6 0-2.5-.87-3.35-4.57-4.47-1-.3-1.69-.71-1.69-1.02 0-1.11 3.38-1.07 5.1.08l.81.54V9.75c0-1.74-.1-2.04-.92-2.59-1.22-.81-4.8-1-6.29-.3m46.87.27c-2.2 1.15-3.14 3.1-3.14 6.56q0 6.28 4.37 7.52c3.11.89 6.34-.39 7.63-3.01.55-1.1.7-2.12.7-4.6 0-5.03-1.44-6.86-5.62-7.14-2-.13-2.63-.02-3.94.67m26.92-.3c-.59.28-1.43.96-1.86 1.52-.66.84-.76 1.33-.63 2.93.18 2.3 1 3.18 3.8 4.1 2.44.8 2.96 1.29 2.2 2.06-.81.83-2.25.72-4.12-.3l-1.62-.87v1.86c0 1.68.1 1.92 1.02 2.47 3.76 2.26 8.71.15 8.72-3.7 0-2.58-1.07-3.7-4.52-4.74-1.73-.52-2.26-1.28-1.2-1.7 1-.39 2.39-.21 3.9.48l1.47.68V9.7c0-1.69-.11-2-.92-2.54-1.2-.8-4.8-1-6.24-.33M0 13.96v7.24h3.48v-5.3h6.26v-3.53H3.48v-2.13h6.26V6.7H0zm11.13 0v7.24h3.83V6.7h-3.83zm5.22-5.48v1.76h3.82v11l1.83-.1 1.83-.11.1-5.4.09-5.39h3.46V6.7H16.35zm12.52 5.46v7.26h3.83l.01-4.68.02-4.68 1.95 4.7 1.95 4.7 2.3-.1 2.29-.11.1-7.16.09-7.16h-3.84l-.02 4.15-.02 4.16-1.5-4.07-1.51-4.06-2.83-.1-2.82-.1zm14.26.02v7.24h9.74v-3.88h-2.96c-2.92 0-2.95-.01-2.95-.89 0-.87.03-.88 2.95-.88h2.96V12h-2.96c-2.92 0-2.95 0-2.95-.88 0-.87.03-.89 2.95-.89h2.96V6.7h-9.74zm54.96 0v7.24h3.47v-5.65h4.18v5.65h3.82V6.7h-3.82V12h-4.18V6.7H98.1zm27.82-1.68c0 4.9.09 5.7.68 6.7 1.06 1.77 2.28 2.39 4.69 2.4 2.7 0 4.16-.64 5.15-2.25.71-1.16.8-1.8.91-6.85l.12-5.57h-3.89v4.77c0 4.3-.07 4.85-.7 5.48q-1.23 1.25-2.63.2c-.6-.44-.69-1.03-.8-5.47l-.12-4.98h-3.4zm24.35 1.68v7.24H160v-3.88h-3.16c-3.07 0-3.15-.03-3.04-.8.1-.75.3-.8 3.16-.9l3.04-.1V12h-3.13c-3.1 0-3.13 0-3.13-.88s.02-.89 3.13-.89H160V6.7h-9.74zm-30.96-3.08c.84.69 1.31 3.2.9 4.83-.55 2.24-2.7 2.98-4.22 1.44-.72-.73-.85-1.2-.85-3.02 0-1.81.14-2.29.85-3.02 1.01-1.02 2.25-1.11 3.32-.23M78.96 18v4.25H93.9v-8.49h-6.6v3.89h1.9c1.48 0 1.92.12 1.92.53 0 .44-.73.53-4.52.53s-4.52-.09-4.52-.53c0-.4.42-.53 1.74-.53h1.74v-3.89h-6.61zm9.3 1.68c-.9.07-2.4.07-3.3 0-.91-.08-.17-.14 1.65-.14s2.56.06 1.65.14m-9.18 3.54c.09.14 1.74 1.05 3.67 2.02L86.26 27l3.51-1.75a30 30 0 0 0 3.67-2.02c.1-.15-3.14-.27-7.18-.27s-7.27.12-7.18.27",clipRule:"evenodd"})),ee=({styles:t})=>e.jsx(Z,{width:160,height:27,className:t}),ps=t=>{let s=t.toString();return s.length>3?`${s.slice(0,1)}.${s.slice(1)}`:s},Pe=Object.entries(d),Se=Pe.sort((t,s)=>t[1].name>s[1].name?1:-1);function Ee(t){const s=[];return t.map(n=>s.push({url:n[1].url,name:n[1].name})),s}const S=Ee(Se),we="_wrapper_1ihn1_1",Be="_title_1ihn1_21",Re="_inner_1ihn1_32",Le="_btn_1ihn1_37",De="_active_1ihn1_67",k={wrapper:we,title:Be,inner:Re,btn:Le,active:De},Te=({city:t,onClickLinkNo:s})=>{const[n,r]=c.useState(!1),i=localStorage.getItem("city"),a=()=>{r(!1),localStorage.setItem("city",t)},l=()=>{r(!1),s()};return c.useEffect(()=>{i===null&&r(!0)},[i]),e.jsx(e.Fragment,{children:n&&e.jsxs("div",{className:k.wrapper,children:[e.jsxs("h3",{className:k.title,children:["Ваш город ",t,"?"]}),e.jsxs("div",{className:k.inner,children:[e.jsx("button",{className:b(k.btn,k.active),onClick:a,children:"Да"}),e.jsx("button",{className:k.btn,onClick:l,children:"Нет"})]})]})})},ze="_header_1ljpo_1",Oe="_container_1ljpo_8",Ae="_menuItem_1ljpo_13",Ie="_logo_1ljpo_29",Fe="_button_1ljpo_45",C={header:ze,container:Oe,menuItem:Ae,logo:Ie,button:Fe},Ve=()=>{const s={hidden:{opacity:0,y:10},visible:{opacity:1,y:0,transition:{duration:.5}}},n=localStorage.getItem("city"),r=G(),[i,a]=c.useState(!1),[l,o]=c.useState("Самара"),_=m=>{const p=m.currentTarget.innerText.toLowerCase();a(!1),o(p[0].toUpperCase()+p.slice(1)),n===null&&localStorage.setItem("city",p)},g=S.find(m=>m.url.slice(1,4)===r.pathname.slice(1,4));return c.useEffect(()=>{g&&o(g.name)},[r,g]),e.jsxs(e.Fragment,{children:[e.jsx(Te,{city:l,onClickLinkNo:()=>{a(!0),console.log(i)}}),e.jsxs(P,{children:[e.jsx(P.Toggle,{id:"example1",variant:"secondary",onClick:()=>a(m=>!m),className:b("btnReset rounded-pill",C.button),children:l}),e.jsx(P.Menu,{show:i,children:e.jsx("ul",{children:S.length>0&&[...S].map((m,p)=>e.jsx(K.li,{variants:s,className:C.menuItem,children:e.jsx(ie,{to:m.url,onClick:_,children:m.name})},p))})})]})]})},$e=()=>{const t=c.useContext(X),s=c.useRef(null),[n,r]=c.useState({isSticky:!1,offset:0}),i=(a,l)=>{window.pageYOffset>a+l?r({isSticky:!0,offset:l}):r({isSticky:!1,offset:0})};return c.useEffect(()=>{var o;const a=(o=s.current)==null?void 0:o.getBoundingClientRect(),l=()=>{i((a==null?void 0:a.top)||0,(a==null?void 0:a.height)||0)};return window.addEventListener("scroll",l),()=>{window.removeEventListener("scroll",l)}},[]),c.useEffect(()=>{document.body.setAttribute("data-theme",t)},[t]),e.jsx("header",{ref:s,className:n.isSticky?b(C.header,"sticky-top p-2 py-4"):b(C.header,"p-2 py-4"),children:e.jsxs(Q,{className:"d-flex justify-content-between align-items-center",children:[e.jsx("div",{className:"text-uppercase d-none d-sm-block",children:"рядом с домом"}),e.jsx(Ve,{}),e.jsx(ee,{styles:C.logo})]})})},He="_main_qw6q2_1",Me={main:He},Ue=({children:t})=>e.jsx("main",{className:b(Me.main),children:t}),Ye="_wrapper_d8tyk_1",qe="_container_d8tyk_11",Qe="_cloud_d8tyk_20",Ge="_front_d8tyk_24",Ke="_clouds_d8tyk_1",We="_back_d8tyk_34",Je="_rightFront_d8tyk_42",Xe="_leftFront_d8tyk_52",Ze="_rightBack_d8tyk_61",et="_leftBack_d8tyk_71",tt="_sun_d8tyk_80",st="_sunshine_d8tyk_90",nt="_sunshines_d8tyk_1",y={wrapper:Ye,container:qe,cloud:Qe,front:Ge,clouds:Ke,back:We,rightFront:Je,leftFront:Xe,rightBack:Ze,leftBack:et,sun:tt,sunshine:st,sunshines:nt};function rt(){return e.jsx("div",{className:y.wrapper,children:e.jsxs("div",{className:y.container,children:[e.jsxs("div",{className:`${y.cloud} ${y.front}`,children:[e.jsx("span",{className:y.leftFront}),e.jsx("span",{className:y.rightFront})]}),e.jsx("span",{className:`${y.sun} ${y.sunshine}`}),e.jsx("span",{className:y.sun}),e.jsxs("div",{className:`${y.cloud} ${y.back}`,children:[e.jsx("span",{className:y.leftBack}),e.jsx("span",{className:y.rightBack})]})]})})}const at="_footer_15klj_1",it="_link_15klj_8",Y={footer:at,link:it},lt=()=>{const t=[{name:"Cоглашение на обработку персональных данных",url:"https://market.fitnesshouse.ru/storage/documents/legal_information.pdf"},{name:"Правила техники безопасности",url:"https://market.fitnesshouse.ru/storage/documents/pravila_tehniki_bezopasnosti.pdf"},{name:"Договор Оферты",url:"https://market.fitnesshouse.ru/documentation"}];return e.jsx("footer",{className:b(Y.footer,"p-2 py-4"),children:e.jsxs(Q,{children:[e.jsx(ee,{styles:"my-4"}),e.jsx("p",{className:"my-4",children:"Все размещенные на сайте сведения носят информационный характер и ни при каких условиях не являются офертой по смыслу ст. 435 ГК РФ и не являются публичной офертой по смыслу ст. 437 ГК РФ, если иное прямо не указано."}),e.jsx("hr",{}),e.jsx("div",{className:"my-2",children:e.jsxs(de,{children:[t.map((s,n)=>e.jsx(M,{xs:12,sm:6,md:3,children:e.jsx("a",{href:s.url,className:b(Y.link,"p-2 d-flex text-decoration-none"),target:"_blank",rel:"noreferrer",children:s.name})},n)),e.jsxs(M,{className:"",children:[e.jsx("div",{children:"© 2007 - 2024."}),e.jsx("div",{children:"Все права защищены."})]})]})})]})})};function ot(){return e.jsx(e.Fragment,{children:e.jsx(K.article,{initial:"hidden",animate:"visible",exit:{opacity:0,transition:{duration:1}},variants:{visible:{transition:{staggerChildren:.3}}},children:e.jsxs(X.Provider,{value:"",children:[e.jsx($e,{}),e.jsx(Ue,{children:e.jsx(c.Suspense,{fallback:e.jsx(rt,{}),children:e.jsx(me,{})})}),e.jsx(lt,{})]})})})}const ct=({title:t,description:s})=>e.jsx(he,{children:e.jsxs(fe,{children:[e.jsx("title",{children:t}),e.jsx("meta",{name:"description",content:s})]})});function dt(){return e.jsxs(e.Fragment,{children:[e.jsx(ct,{title:"Fitness House | Нет такой страницы.",description:"Нет такой страницы."}),e.jsxs("div",{className:"d-flex flex-column min-vh-100 p-4 text-white",children:[e.jsx(Z,{width:160,height:27,className:"d-inline-flex w-48 max-w-full  px-4 mx-auto"}),e.jsx("main",{className:"d-flex flex-column h-100 my-auto justify-content-center align-items-center container mx-auto ",children:e.jsxs("div",{className:"pt-8 d-flex flex-column justify-center items-center align-middle text-center",children:[e.jsx("div",{className:"fs-1 fw-bold uppercase mb-4",children:"404"}),e.jsx("h1",{className:"fs-1 fw-bold uppercase mb-4",children:"Нет такой страницы"}),e.jsx(le,{to:"/",className:"button p-4 my-4 fw-bold uppercase text-white rounded-xl hover:bg-lemon-chiffon-200",children:"Вернуться на главную"})]})})]})]})}const j=c.lazy(()=>f(()=>import("./AppModalOrder-vLvADDOZ.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33]))),q=c.lazy(()=>f(()=>import("./SamHome-GrJ9qqvi.js"),__vite__mapDeps([34,1,2,5,6,7,8,9,10,11,12,13,14,15,16,17,19,35,20,3,4,21,22,23,24,25,26,27,28,29,30,31,32]))),ut=c.lazy(()=>f(()=>import("./SpbHome-vaYopn0a.js"),__vite__mapDeps([36,1,2,19,37,5,6,7,8,9,10,11,12,13,14,15,16,17,38,39,40,21,22,23,20,3,4,24,25,26,27,28,29,30,31,32,41,42,43,44,45,46,47,48,18,49,50,51,52,53,54,55,56,57,58,59,60,61]))),mt=c.lazy(()=>f(()=>import("./ArhHome-bH6O2czk.js"),__vite__mapDeps([62,1,2,19,37,5,6,7,8,9,10,11,12,13,14,15,16,17,38,39,40,21,22,23,20,3,4,24,25,26,27,28,29,30,31,32,41,42,43,44,45,46,47,48,18,49,50,51,52,53,54,55,56,57,58,59,60,61,35]))),pt=c.lazy(()=>f(()=>import("./YarHome-5mDOjBQ-.js"),__vite__mapDeps([63,1,2,19,37,5,6,7,8,9,10,11,12,13,14,15,16,17,38,39,40,21,22,23,20,3,4,24,25,26,27,28,29,30,31,32,41,42,43,44,45,46,47,48,18,49,50,51,52,53,54,55,56,57,58,59,60,61,35]))),ht=c.lazy(()=>f(()=>import("./IjkHome-qSuW8sc3.js"),__vite__mapDeps([64,1,2,19,37,5,6,7,8,9,10,11,12,13,14,15,16,17,38,39,40,21,22,23,20,3,4,24,25,26,27,28,29,30,31,32,41,42,43,44,45,46,47,48,18,49,50,51,52,53,54,55,56,57,58,59,60,61,35]))),ft=c.lazy(()=>f(()=>import("./KznHome-m5zpMePh.js"),__vite__mapDeps([65,1,2,19,37,5,6,7,8,9,10,11,12,13,14,15,16,17,38,39,40,21,22,23,20,3,4,24,25,26,27,28,29,30,31,32,41,42,43,44,45,46,47,48,18,49,50,51,52,53,54,55,56,57,58,59,60,61,35]))),xt=c.lazy(()=>f(()=>import("./NchHome-mKMc1ql5.js"),__vite__mapDeps([66,1,2,19,37,5,6,7,8,9,10,11,12,13,14,15,16,17,38,39,40,21,22,23,20,3,4,24,25,26,27,28,29,30,31,32,41,42,43,44,45,46,47,48,18,49,50,51,52,53,54,55,56,57,58,59,60,61,35]))),yt=c.lazy(()=>f(()=>import("./UlyHome-e1ljx90Z.js"),__vite__mapDeps([67,1,2,19,37,5,6,7,8,9,10,11,12,13,14,15,16,17,38,39,40,21,22,23,20,3,4,24,25,26,27,28,29,30,31,32,41,42,43,44,45,46,47,48,18,49,50,51,52,53,54,55,56,57,58,59,60,61,35]))),jt=c.lazy(()=>f(()=>import("./TulHome-Lpuno_wV.js"),__vite__mapDeps([68,1,2,19,37,5,6,7,8,9,10,11,12,13,14,15,16,17,38,39,40,21,22,23,20,3,4,24,25,26,27,28,29,30,31,32,41,42,43,44,45,46,47,48,18,49,50,51,52,53,54,55,56,57,58,59,60,61,35]))),_t=c.lazy(()=>f(()=>import("./TolHome-7Y0es0H3.js"),__vite__mapDeps([69,1,2,19,37,5,6,7,8,9,10,11,12,13,14,15,16,17,38,39,40,21,22,23,20,3,4,24,25,26,27,28,29,30,31,32,41,42,43,44,45,46,47,48,18,49,50,51,52,53,54,55,56,57,58,59,60,61,35]))),gt=c.lazy(()=>f(()=>import("./RyzHome-rKeEijOL.js"),__vite__mapDeps([70,1,2,19,37,5,6,7,8,9,10,11,12,13,14,15,16,17,38,39,40,21,22,23,20,3,4,24,25,26,27,28,29,30,31,32,41,42,43,44,45,46,47,48,18,49,50,51,52,53,54,55,56,57,58,59,60,61,35]))),vt=c.lazy(()=>f(()=>import("./PesHome-WfEh6zqU.js"),__vite__mapDeps([71,1,2,19,37,5,6,7,8,9,10,11,12,13,14,15,16,17,38,39,40,21,22,23,20,3,4,24,25,26,27,28,29,30,31,32,41,42,43,44,45,46,47,48,18,49,50,51,52,53,54,55,56,57,58,59,60,61,35]))),bt=c.lazy(()=>f(()=>import("./GojHome-JTZs1ujG.js"),__vite__mapDeps([72,1,2,19,37,5,6,7,8,9,10,11,12,13,14,15,16,17,38,39,40,21,22,23,20,3,4,24,25,26,27,28,29,30,31,32,41,42,43,44,45,46,47,48,18,49,50,51,52,53,54,55,56,57,58,59,60,61,35])));function kt(){var n,r,i,a,l,o,_,g,m,p,v,E,w,B,R,L,D,T,z,O,A,I,F,V,$,H;const t=G(),s=((n=t.state)==null?void 0:n.sam_tariffBg)||((r=t.state)==null?void 0:r.spb_tariffBg)||((i=t.state)==null?void 0:i.arh_tariffBg)||((a=t.state)==null?void 0:a.yar_tariffBg)||((l=t.state)==null?void 0:l.ijk_tariffBg)||((o=t.state)==null?void 0:o.kzn_tariffBg)||((_=t.state)==null?void 0:_.nch_tariffBg)||((g=t.state)==null?void 0:g.goj_tariffBg)||((m=t.state)==null?void 0:m.pes_tariffBg)||((p=t.state)==null?void 0:p.ryz_tariffBg)||((v=t.state)==null?void 0:v.tol_tariffBg)||((E=t.state)==null?void 0:E.tul_tariffBg)||((w=t.state)==null?void 0:w.uly_tariffBg)||t;return e.jsxs(e.Fragment,{children:[e.jsxs(h,{location:s,children:[e.jsxs(u,{path:d.sam.url,element:e.jsx(ot,{}),children:[e.jsx(u,{index:!0,element:e.jsx(q,{})}),e.jsx(u,{path:"/index.html",element:e.jsx(q,{})}),e.jsx(u,{path:d.spb.url,element:e.jsx(ut,{})}),e.jsx(u,{path:d.arh.url,element:e.jsx(mt,{})}),e.jsx(u,{path:d.yar.url,element:e.jsx(pt,{})}),e.jsx(u,{path:d.ijk.url,element:e.jsx(ht,{})}),e.jsx(u,{path:d.kzn.url,element:e.jsx(ft,{})}),e.jsx(u,{path:d.nch.url,element:e.jsx(xt,{})}),e.jsx(u,{path:d.goj.url,element:e.jsx(bt,{})}),e.jsx(u,{path:d.pes.url,element:e.jsx(vt,{})}),e.jsx(u,{path:d.ryz.url,element:e.jsx(gt,{})}),e.jsx(u,{path:d.tol.url,element:e.jsx(_t,{})}),e.jsx(u,{path:d.tul.url,element:e.jsx(jt,{})}),e.jsx(u,{path:d.uly.url,element:e.jsx(yt,{})})]}),e.jsx(u,{path:"*",element:e.jsx(dt,{})})]}),((B=t.state)==null?void 0:B.spb_tariffBg)&&e.jsx(h,{children:e.jsx(u,{path:`${d.spb.url}/:id`,element:e.jsx(c.Suspense,{fallback:e.jsx(x,{animation:"border",role:"status",className:"d-flex justify-content-center",children:e.jsx("span",{className:"visually-hidden",children:"Loading..."})}),children:e.jsx(j,{city:d.spb.name})})})}),((R=t.state)==null?void 0:R.sam_tariffBg)&&e.jsx(h,{children:e.jsx(u,{path:`${d.sam.url}:id`,element:e.jsx(c.Suspense,{fallback:e.jsx(x,{animation:"border",role:"status",className:"d-flex justify-content-center",children:e.jsx("span",{className:"visually-hidden",children:"Loading..."})}),children:e.jsx(j,{city:d.sam.name})})})}),((L=t.state)==null?void 0:L.arh_tariffBg)&&e.jsx(h,{children:e.jsx(u,{path:`${d.arh.url}/:id`,element:e.jsx(c.Suspense,{fallback:e.jsx(x,{animation:"border",role:"status",className:"d-flex justify-content-center",children:e.jsx("span",{className:"visually-hidden",children:"Loading..."})}),children:e.jsx(j,{city:d.arh.name})})})}),((D=t.state)==null?void 0:D.yar_tariffBg)&&e.jsx(h,{children:e.jsx(u,{path:`${d.yar.url}/:id`,element:e.jsx(c.Suspense,{fallback:e.jsx(x,{animation:"border",role:"status",className:"d-flex justify-content-center",children:e.jsx("span",{className:"visually-hidden",children:"Loading..."})}),children:e.jsx(j,{city:d.yar.name})})})}),((T=t.state)==null?void 0:T.ijk_tariffBg)&&e.jsx(h,{children:e.jsx(u,{path:`${d.ijk.url}/:id`,element:e.jsx(c.Suspense,{fallback:e.jsx(x,{animation:"border",role:"status",className:"d-flex justify-content-center",children:e.jsx("span",{className:"visually-hidden",children:"Loading..."})}),children:e.jsx(j,{city:d.ijk.name})})})}),((z=t.state)==null?void 0:z.kzn_tariffBg)&&e.jsx(h,{children:e.jsx(u,{path:`${d.kzn.url}/:id`,element:e.jsx(c.Suspense,{fallback:e.jsx(x,{animation:"border",role:"status",className:"d-flex justify-content-center",children:e.jsx("span",{className:"visually-hidden",children:"Loading..."})}),children:e.jsx(j,{city:d.kzn.name})})})}),((O=t.state)==null?void 0:O.nch_tariffBg)&&e.jsx(h,{children:e.jsx(u,{path:`${d.nch.url}/:id`,element:e.jsx(c.Suspense,{fallback:e.jsx(x,{animation:"border",role:"status",className:"d-flex justify-content-center",children:e.jsx("span",{className:"visually-hidden",children:"Loading..."})}),children:e.jsx(j,{city:d.nch.name})})})}),((A=t.state)==null?void 0:A.goj_tariffBg)&&e.jsx(h,{children:e.jsx(u,{path:`${d.goj.url}/:id`,element:e.jsx(c.Suspense,{fallback:e.jsx(x,{animation:"border",role:"status",className:"d-flex justify-content-center",children:e.jsx("span",{className:"visually-hidden",children:"Loading..."})}),children:e.jsx(j,{city:d.goj.name})})})}),((I=t.state)==null?void 0:I.pes_tariffBg)&&e.jsx(h,{children:e.jsx(u,{path:`${d.pes.url}/:id`,element:e.jsx(c.Suspense,{fallback:e.jsx(x,{animation:"border",role:"status",className:"d-flex justify-content-center",children:e.jsx("span",{className:"visually-hidden",children:"Loading..."})}),children:e.jsx(j,{city:d.pes.name})})})}),((F=t.state)==null?void 0:F.ryz_tariffBg)&&e.jsx(h,{children:e.jsx(u,{path:`${d.ryz.url}/:id`,element:e.jsx(c.Suspense,{fallback:e.jsx(x,{animation:"border",role:"status",className:"d-flex justify-content-center",children:e.jsx("span",{className:"visually-hidden",children:"Loading..."})}),children:e.jsx(j,{city:d.ryz.name})})})}),((V=t.state)==null?void 0:V.tol_tariffBg)&&e.jsx(h,{children:e.jsx(u,{path:`${d.tol.url}/:id`,element:e.jsx(c.Suspense,{fallback:e.jsx(x,{animation:"border",role:"status",className:"d-flex justify-content-center",children:e.jsx("span",{className:"visually-hidden",children:"Loading..."})}),children:e.jsx(j,{city:d.tol.name})})})}),(($=t.state)==null?void 0:$.tul_tariffBg)&&e.jsx(h,{children:e.jsx(u,{path:`${d.tul.url}/:id`,element:e.jsx(c.Suspense,{fallback:e.jsx(x,{animation:"border",role:"status",className:"d-flex justify-content-center",children:e.jsx("span",{className:"visually-hidden",children:"Loading..."})}),children:e.jsx(j,{city:d.tul.name})})})}),((H=t.state)==null?void 0:H.uly_tariffBg)&&e.jsx(h,{children:e.jsx(u,{path:`${d.uly.url}/:id`,element:e.jsx(c.Suspense,{fallback:e.jsx(x,{animation:"border",role:"status",className:"d-flex justify-content-center",children:e.jsx("span",{className:"visually-hidden",children:"Loading..."})}),children:e.jsx(j,{city:d.uly.name})})})})]})}const N=xe({reducerPath:"api/price",baseQuery:ye(je({baseUrl:"/"}),{maxRetries:3}),refetchOnFocus:!0,endpoints:()=>({})}),Ct=N.injectEndpoints({endpoints:t=>({getCities:t.query({query:()=>be+"data.json",extraOptions:{maxRetries:10},transformResponse:s=>s.services})}),overrideExisting:!1}),{useGetCitiesQuery:Nt}=Ct;function Pt(){return Nt("",{refetchOnFocus:!0,pollingInterval:36e6}),e.jsx(ue,{breakpoints:["xxxl","xxl","xl","lg","md","sm","xs","xxs"],minBreakpoint:"xxs",children:e.jsx(kt,{})})}const St={activeCity:"",activeCityClubs:[],tariffTypes:[],tariffPriceCity:[],clubsPoolYes:[],clubsPoolNo:[],clubsPremiere:[],clubsMC:[],tariffsCity:[],tariffsTabs:["Премьер","С бассейном","Без бассейна"],tariffsActiveTab:"С бассейном"},te=W({name:"price",initialState:St,reducers:{getActiveCity:(t,s)=>{t.activeCity=s.payload},getActiveCityClubs:(t,s)=>{var n;s.payload&&(t.activeCityClubs=(n=s.payload.filter(r=>r.city===t.activeCity)[0])==null?void 0:n.clubs)},getClubsPremiere:(t,s)=>{var i;let n=[],r=[];if(s.payload&&s.payload.length>0){n=t.activeCityClubs=(i=s.payload.filter(o=>o.city===t.activeCity)[0])==null?void 0:i.clubs;const a=n==null?void 0:n.filter(o=>o.name==="Салово"),l=n==null?void 0:n.filter(o=>o.name==="Охта Молл");r=(a==null?void 0:a.length)>0&&l.length>0?[a[0],l[0]]:[]}t.clubsPremiere=(r==null?void 0:r.length)>0?r:[]},getClubsPoolYes:(t,s)=>{var i;let n=[],r=[];if(s.payload&&s.payload.length>0){n=t.activeCityClubs=(i=s.payload.filter(o=>o.city===t.activeCity)[0])==null?void 0:i.clubs;const a=n==null?void 0:n.filter(o=>o.name!=="Салово"),l=a==null?void 0:a.filter(o=>o.name!=="Охта Молл");r=l==null?void 0:l.filter(o=>o.isPool===!0)}t.clubsPoolYes=(r==null?void 0:r.length)>0?r:[]},getClubsPoolNo:(t,s)=>{var i;let n=[],r=[];if(s.payload&&s.payload.length>0){n=t.activeCityClubs=(i=s.payload.filter(o=>o.city===t.activeCity)[0])==null?void 0:i.clubs;const a=n==null?void 0:n.filter(o=>o.name!=="Салово"),l=a==null?void 0:a.filter(o=>o.name!=="Охта Молл");r=l==null?void 0:l.filter(o=>o.isPool===!1)}t.clubsPoolNo=(r==null?void 0:r.length)>0?r:[]},getClubsMC:(t,s)=>{var i;let n=[],r=[];s.payload&&s.payload.length>0&&(n=t.activeCityClubs=(i=s.payload.filter(a=>a.city===t.activeCity)[0])==null?void 0:i.clubs,r=n==null?void 0:n.filter((a,l)=>{const o=a.products.filter(_=>_.product_type==="mc_full");if(o.length>0)return{id:l,name:a.name,address:a.address,products:o}})),t.clubsMC=(r==null?void 0:r.length)>0?r:[]},getTariffTypes:(t,s)=>{var a;const n=t.activeCityClubs=(a=s.payload.filter(l=>l.city===t.activeCity)[0])==null?void 0:a.clubs;let r=[],i=[];n&&n.length>0&&(r=n.map(l=>[...l.products]).flat(1/0),i=r.map(l=>l.product_type).filter(l=>l!=="first_pay")),t.tariffTypes=[...new Set(i)]},getTariffPriceCity:(t,s)=>{var l;const n=t.activeCityClubs=(l=s.payload.filter(o=>o.city===t.activeCity)[0])==null?void 0:l.clubs;let r=[],i=[],a=[];n&&n.length>0&&(r=n.map(o=>[...o.products]).flat(1/0),i=r.filter(o=>o.product_type!=="first_pay"),a=i.map(o=>o.product_price)),t.tariffPriceCity=[...new Set(a)]},getTariffs:(t,s)=>{t.tariffsCity=s.payload},getTariffsActiveTab:(t,s)=>{t.tariffsActiveTab=s.payload}}}),Et=te.reducer,hs=te.actions,wt=(t,s)=>({first_name:t.firstName,last_name:s.lastName,middle_name:"",birth_day:s.birth_day,phone:se(t.phone),email:s.email}),Bt=(t,s)=>{var o;const n=[],r=s.clubs.filter(_=>_.id===t.club_id),i=(o=r==null?void 0:r[0].first_pay)==null?void 0:o[0],a={name:r[0].product.product_name,price:r[0].product.product_price,price_id:r[0].product.product_id};n.push(a);let l={};return i&&(l={name:i.product_name,price:i.product_price,price_id:i.product_id},n.push(l)),n},fs=(t,s,n)=>({customer:wt(t,s),products:Bt(s,n),recurrentable:!0}),Rt=t=>{var s=new Date,n=new Date(s.getFullYear(),s.getMonth(),s.getDate()),r=new Date(t),i=new Date(n.getFullYear(),r.getMonth(),r.getDate()),a;return a=n.getFullYear()-r.getFullYear(),n<i&&(a=a-1),a},xs=()=>{const t=new Date().toLocaleDateString(),s=t.slice(3,5),n=t.slice(0,2);return new Date().getFullYear()-120+"-"+s+"-"+n},ys=()=>{const t=new Date().toLocaleDateString(),s=t.slice(3,5),n=t.slice(0,2);return new Date().getFullYear()-14+"-"+s+"-"+n},se=t=>t.replace(/[^0-9]/g,"").slice(1).trim(),Lt=t=>Array.from(t.split("").reduce((s,n)=>(s.set(n,(s.get(n)||0)+1),s),new Map)),Dt=t=>{const s=t.replace(/[^+\d]/g,"").slice(2);return s.length===10&&Lt(s)[0][1]<10},js=(t,s)=>{const n=!!t&&[...t].filter(r=>r.product_type===s);return n.length>0?n[0].product_id:""},_s=t=>t&&t.indexOf("_")===-1&&Dt(t)?void 0:"Phone number is required.",gs=t=>Rt(t)>=14,vs=t=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t),Tt={clubsPositions:[],formData:[],orderData:{customer:{},products:[],recurrentable:!0}},ne=W({name:"form",initialState:Tt,reducers:{getFormData:(t,s)=>{t.formData=s.payload},getCustomer:t=>{const s=Object.assign(t.orderData.customer,t.formData);delete s.isCheck,delete s.club_id,s.phone=se(s.phone),t.orderData.customer=s},getClubsPositions:(t,s)=>{t.clubsPositions=s.payload},getProductsPosition:(t,s)=>{var n;t.orderData.products=[],t.orderData.products.push({product_name:s.payload.title,product_price:s.payload.price,product_id:(n=t.formData)==null?void 0:n.club_id}),t.orderData.products.filter(r=>r!==null)},getProductsPositionId:(t,s)=>{t.orderData.products[0].product_id=s.payload.club_id},getProductsPositionFirstPay:(t,s)=>{var r;const n=(r=t.clubsPositions.filter(i=>i.id===s.payload)[0])==null?void 0:r.first_pay[0];n==null||delete n.product_type,t.orderData.products.push(n)}}}),zt=ne.reducer,bs=ne.actions,Ot=ve({[N.reducerPath]:N.reducer,price:Et,form:zt}),re=_e({reducer:Ot,middleware:t=>t().concat(N.middleware),devTools:!0});ge(re.dispatch);ae.createRoot(document.getElementById("root")).render(e.jsx(oe,{basename:J,children:e.jsx(pe,{mode:"wait",children:e.jsx(ce,{store:re,children:e.jsx(Pt,{})})})}));export{ct as M,d as R,f as _,xs as a,gs as b,hs as c,bs as d,ps as f,js as g,_s as i,ys as m,fs as o,N as p,Nt as u,vs as v};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/AppModalOrder-vLvADDOZ.js","assets/react-dOK_llRH.js","assets/classnames-G66vBsBY.js","assets/react-router-hd1aWLNq.js","assets/@remix-run-R0A6g4pJ.js","assets/react-bootstrap-NBDFt7o7.js","assets/@restart--YlOOCn5.js","assets/dom-helpers--nlGJCCs.js","assets/@react-aria-0uNWp7yg.js","assets/react-dom-ZjE40EjR.js","assets/scheduler-iwWdm5Ml.js","assets/dequal-vEqHzq4I.js","assets/@popperjs-u7bcf535.js","assets/warning-lhFwPr5I.js","assets/uncontrollable-BgYfu1sR.js","assets/@babel-o_ZSNJgm.js","assets/react-transition-group-hXqudQ2I.js","assets/prop-types-fuYWWnMu.js","assets/useModal-kjj9CSft.js","assets/CityContext-b-BUd9tP.js","assets/react-router-dom-xnPv3tiZ.js","assets/react-redux-k4q0NQ3n.js","assets/use-sync-external-store-ABTd-lK_.js","assets/framer-motion-90-YAChi.js","assets/react-helmet-async-VV9_8hgh.js","assets/react-fast-compare-v43NpY3q.js","assets/invariant-bxtdRYLJ.js","assets/shallowequal-PLp_r1sp.js","assets/@reduxjs-LZSxCC61.js","assets/redux-1vRRQ9xr.js","assets/immer-2oJgyI5v.js","assets/reselect-vVLqgz1U.js","assets/redux-thunk-qyK_zz9Y.js","assets/AppModalOrder-H5IkZOfK.css","assets/SamHome-GrJ9qqvi.js","assets/dataSam-Ck6REfYf.js","assets/SpbHome-vaYopn0a.js","assets/AppPromo-DW-04pN1.js","assets/ButtonGradient-q2EJEL5_.js","assets/ButtonGradient-WamIQL8m.css","assets/useTypedSelector-OiAJGiMZ.js","assets/AppPromo-2NUB1Qar.css","assets/AppTariffs-vGzaaNp9.js","assets/usehooks-ts-MFxH6zmj.js","assets/swiper-PJKYfrJO.js","assets/swiper-CE5vboDu.css","assets/react-error-boundary-wkjsgIbD.js","assets/ErrorsFallback-hw0r2hzp.js","assets/useActions--LnaBO-m.js","assets/icon-touch-kONr3UWV.js","assets/tariffs-Bu4Q073w.js","assets/AppTariffs-0dMXvdAL.css","assets/AppBenefit-ZgNn2ID7.js","assets/SectionListIconText-srx4XGEq.js","assets/SectionListIconText-WGsXRN0J.css","assets/AppBenefit-pjpUOzp-.css","assets/AppClubsGallery-CixER3rD.js","assets/AppClubsGallery-fv0qaBmr.css","assets/AppProfit-iGiLSMNr.js","assets/AppProfit-BKt8Tdza.css","assets/AppFaq-KdGtRX5y.js","assets/AppFaq-CZBPQepv.css","assets/ArhHome-bH6O2czk.js","assets/YarHome-5mDOjBQ-.js","assets/IjkHome-qSuW8sc3.js","assets/KznHome-m5zpMePh.js","assets/NchHome-mKMc1ql5.js","assets/UlyHome-e1ljx90Z.js","assets/TulHome-Lpuno_wV.js","assets/TolHome-7Y0es0H3.js","assets/RyzHome-rKeEijOL.js","assets/PesHome-WfEh6zqU.js","assets/GojHome-JTZs1ujG.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}