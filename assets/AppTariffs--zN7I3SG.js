import{r as p,j as t}from"./react-dOK_llRH.js";import{O as F,b as L,C as V,S as U}from"./react-bootstrap-NBDFt7o7.js";import{u as D}from"./usehooks-ts-MFxH6zmj.js";import{C as w}from"./CityContext-b-BUd9tP.js";import{u as T}from"./useTypedSelector-OiAJGiMZ.js";import{u as k,S as M}from"./tooltip-5qptlJh2.js";import{g as B}from"./tariffs-cW8wgL41.js";import{m as R}from"./framer-motion-90-YAChi.js";import{S as H,a as Y}from"./swiper-PJKYfrJO.js";import{L as Q}from"./react-router-dom-xnPv3tiZ.js";import{b as X}from"./react-router-hd1aWLNq.js";import{c as z}from"./classnames-G66vBsBY.js";import{E as G}from"./react-error-boundary-wkjsgIbD.js";import{E as J}from"./ErrorsFallback-hw0r2hzp.js";import{R as o,f as $,u as K}from"./index-sF92wmME.js";import{u as W}from"./useModal-kjj9CSft.js";import{S as Z,C as tt}from"./icon-touch-kONr3UWV.js";import"./@restart--YlOOCn5.js";import"./dom-helpers--nlGJCCs.js";import"./@react-aria-0uNWp7yg.js";import"./react-dom-ZjE40EjR.js";import"./scheduler-iwWdm5Ml.js";import"./dequal-vEqHzq4I.js";import"./@popperjs-u7bcf535.js";import"./warning-lhFwPr5I.js";import"./uncontrollable-BgYfu1sR.js";import"./@babel-o_ZSNJgm.js";import"./react-transition-group-hXqudQ2I.js";import"./prop-types-fuYWWnMu.js";import"./react-redux-k4q0NQ3n.js";import"./use-sync-external-store-ABTd-lK_.js";import"./redux-1vRRQ9xr.js";import"./@remix-run-R0A6g4pJ.js";import"./react-helmet-async-VV9_8hgh.js";import"./react-fast-compare-v43NpY3q.js";import"./invariant-bxtdRYLJ.js";import"./shallowequal-PLp_r1sp.js";import"./@reduxjs-LZSxCC61.js";import"./immer-2oJgyI5v.js";import"./reselect-vVLqgz1U.js";import"./redux-thunk-qyK_zz9Y.js";const et="_tabs_3r4j7_1",st="_tab_3r4j7_1",it="_tabActive_3r4j7_45",y={tabs:et,tab:st,tabActive:it},at=({data:e,active:s,setActive:r})=>{const{getTariffsActiveTab:a}=k(),n=p.useRef(null);return p.useEffect(()=>{a("С бассейном")},[]),t.jsxs(t.Fragment,{children:[t.jsx("div",{className:y.tabs,children:e.map((m,i)=>t.jsx("button",{ref:n,className:i===s?y.tabActive:y.tab,onClick:()=>{r(i),a(m.name)},children:m.name},i))}),t.jsx(R.div,{initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},transition:{duration:.5},children:e[s]&&t.jsx("div",{className:y.content,children:e[s].content})})]})},nt=e=>p.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 36 36",...e},p.createElement("path",{fill:"currentColor",d:"M29 18a11 11 0 1 1-22 0 11 11 0 0 1 22 0"}),p.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18 1.88c.62 0 1.13.5 1.13 1.12v1.5a1.13 1.13 0 0 1-2.25 0V3c0-.62.5-1.12 1.12-1.12M6.6 6.6a1.1 1.1 0 0 1 1.59 0l.59.59a1.12 1.12 0 1 1-1.6 1.59l-.58-.6a1.1 1.1 0 0 1 0-1.58m22.8 0c.44.44.44 1.15 0 1.59l-.59.59a1.13 1.13 0 0 1-1.59-1.6l.6-.58a1.1 1.1 0 0 1 1.58 0M1.88 18c0-.62.5-1.12 1.12-1.12h1.5a1.13 1.13 0 0 1 0 2.25H3c-.62 0-1.12-.5-1.12-1.13m28.5 0c0-.62.5-1.12 1.12-1.12H33a1.13 1.13 0 0 1 0 2.25h-1.5c-.62 0-1.12-.5-1.12-1.13m-3.16 9.22a1.13 1.13 0 0 1 1.6 0l.58.6a1.12 1.12 0 0 1-1.59 1.58l-.59-.59a1.13 1.13 0 0 1 0-1.59m-18.44 0c.44.44.44 1.15 0 1.6l-.6.58a1.13 1.13 0 0 1-1.58-1.59l.59-.59a1.13 1.13 0 0 1 1.59 0M18 30.38c.62 0 1.13.5 1.13 1.12V33a1.13 1.13 0 0 1-2.25 0v-1.5c0-.62.5-1.12 1.12-1.12",clipRule:"evenodd"})),rt=e=>p.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 36 36",...e},p.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M14.63 5.68c-.34.3-.51.44-.7.56a4 4 0 0 1-1.37.57c-.22.04-.44.06-.89.1-1.12.08-1.68.13-2.15.3A3.8 3.8 0 0 0 7.2 9.51c-.16.47-.2 1.03-.3 2.15-.03.45-.05.67-.1.89q-.14.74-.56 1.38c-.12.18-.27.35-.56.69-.73.86-1.1 1.28-1.3 1.73a3.8 3.8 0 0 0 0 3.28c.2.45.57.87 1.3 1.73.3.34.44.51.56.7q.42.63.57 1.37c.04.22.06.44.1.89.08 1.12.13 1.68.3 2.15a3.8 3.8 0 0 0 2.31 2.32c.47.16 1.03.2 2.15.3.45.03.67.05.89.1q.74.14 1.38.56c.18.12.35.27.69.56.86.73 1.28 1.1 1.73 1.3 1.04.5 2.24.5 3.28 0 .45-.2.87-.57 1.73-1.3.34-.3.51-.44.7-.56a4 4 0 0 1 1.37-.57c.22-.04.44-.06.89-.1 1.12-.08 1.68-.13 2.15-.3a3.8 3.8 0 0 0 2.32-2.31c.16-.47.2-1.03.3-2.15.03-.45.05-.67.1-.89q.14-.74.56-1.38c.12-.18.27-.35.56-.69a9 9 0 0 0 1.3-1.73 3.8 3.8 0 0 0 0-3.28 9 9 0 0 0-1.3-1.73c-.3-.34-.44-.51-.56-.7a4 4 0 0 1-.57-1.37 8 8 0 0 1-.1-.89c-.08-1.12-.13-1.68-.3-2.15a3.8 3.8 0 0 0-2.31-2.32c-.47-.16-1.03-.2-2.15-.3-.45-.03-.67-.05-.89-.1q-.74-.14-1.38-.56a8 8 0 0 1-.69-.56c-.86-.73-1.28-1.1-1.73-1.3a3.8 3.8 0 0 0-3.28 0c-.45.2-.87.57-1.73 1.3m9.5 9.33a1.14 1.14 0 0 0-1.62-1.61l-6.79 6.79-2.23-2.24a1.14 1.14 0 0 0-1.61 1.62l3.04 3.03c.44.45 1.16.45 1.6 0z",clipRule:"evenodd"})),lt=e=>p.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 36 36",...e},p.createElement("path",{fill:"currentColor",d:"m31.45 20.19.32-3.41c.26-2.68.38-4.02-.08-4.57q-.38-.46-.94-.52c-.67-.06-1.5.9-3.18 2.8-.86.99-1.3 1.48-1.78 1.55q-.4.07-.78-.12c-.45-.23-.75-.83-1.34-2.05l-3.13-6.42C19.42 5.15 18.85 4 18 4s-1.42 1.15-2.54 3.45l-3.13 6.42c-.6 1.22-.9 1.82-1.34 2.05a1.3 1.3 0 0 1-.78.12c-.49-.07-.92-.56-1.78-1.55-1.68-1.9-2.51-2.86-3.18-2.8-.36.03-.7.22-.94.52-.46.55-.34 1.89-.08 4.57l.32 3.4c.53 5.62.79 8.43 2.45 10.13C8.65 32 11.13 32 16.1 32h3.8c4.97 0 7.45 0 9.1-1.7 1.66-1.69 1.92-4.5 2.45-10.11"})),ct="_header_mivzg_1",ot="_icon_mivzg_30",mt="_info_mivzg_41",ft="_infoUppercase_mivzg_71",u={header:ct,icon:ot,info:mt,infoUppercase:ft},pt=({type:e})=>t.jsx("div",{className:u.header,children:e==="morning"?t.jsxs(t.Fragment,{children:[t.jsx(nt,{width:36,height:36,className:u.icon}),t.jsxs("div",{className:u.info,children:[t.jsx("b",{children:"Утренний в 1 клуб"}),t.jsx("div",{className:u.infoUppercase,children:"Посещение до 17:00"})]})]}):e==="full"?t.jsxs(t.Fragment,{children:[t.jsx(rt,{width:36,height:36,className:u.icon}),t.jsxs("div",{className:u.info,children:[t.jsx("b",{children:"Весь день в 1 клуб"}),t.jsx("div",{className:u.infoUppercase,children:"Свободное посещение"})]})]}):e==="mc_full"?t.jsxs(t.Fragment,{children:[t.jsx(lt,{width:36,height:36}),t.jsxs("div",{className:u.info,children:[t.jsx("b",{children:"Весь день, все клубы"}),t.jsx("div",{className:u.infoUppercase,children:"Свободное посещение"})]})]}):null}),dt="_wrapper_kfisf_1",S={wrapper:dt},ht="_button_de7o2_1",ut={button:ht};function E(){const e="Кроме клубов Фитнес Хаус Престиж (ул. Барочная, д.10/2Б, ул. Я. Гашека, 17А, Шереметьевская ул., 13А)",s=r=>t.jsx(L,{id:"button-tooltip",...r,children:e});return t.jsx(F,{placement:"top",delay:{show:250,hide:400},overlay:s,children:t.jsx("button",{type:"button",className:ut.button,"aria-label":e,children:t.jsx(M,{width:20,height:20})})})}const xt=({clubs:e,type:s})=>{const{tariffsActiveTab:r}=T(l=>l.price),a=p.useContext(w),n=a===o.spb.name,m=a===o.spb.name&&r.toLocaleLowerCase()==="с бассейном",i=[{type:"morning",content:t.jsxs("div",{className:S.wrapper,children:[t.jsxs("p",{className:"mb-1",children:[t.jsx("b",{children:"Тариф дает возможность посещать 1 клуб до 17:00 "})," ",m&&t.jsx(E,{})]}),t.jsx("ul",{className:"my-2",children:e&&e.length>0&&!n?e.map((l,c)=>t.jsx("li",{children:l.address},c)):e&&e.length<=4&&n?e.map((l,c)=>t.jsx("li",{children:l.address},c)):null})]})},{type:"full",content:t.jsxs("div",{className:S.wrapper,children:[t.jsxs("p",{className:"mb-1",children:[t.jsx("b",{children:"Тариф дает возможность посещать 1 клуб"})," ",m&&t.jsx(E,{})]}),t.jsx("ul",{className:"my-2",children:e&&e.length>0&&!n?e.map((l,c)=>t.jsx("li",{children:l.address},c)):e&&e.length<=4&&n?e.map((l,c)=>t.jsx("li",{children:l.address},c)):null})]})},{type:"mc_full",content:t.jsxs("div",{className:S.wrapper,children:[t.jsxs("p",{className:"mb-1",children:[a===o.spb.name?t.jsx("b",{children:"Тариф дает возможность посещать все клубы "}):t.jsxs("b",{children:["Тариф дает возможность посещать"," ",e.length>0&&e.length," клуба"," "]}),a===o.spb.name&&t.jsx(E,{})]}),t.jsx("ul",{className:"my-2",children:e&&e.length>0&&!n?e.map((l,c)=>t.jsx("li",{children:l.address},c)):null})]})}];return t.jsx(t.Fragment,{children:e.length>0&&s?i.map((l,c)=>l.type===s?t.jsx("div",{children:l.content},c):null):null})},jt="_info_nzstv_1",_t="_list_nzstv_18",gt="_item_nzstv_33",h={info:jt,list:_t,item:gt},bt=({title:e,isPool:s,type:r})=>{const n=p.useContext(w)===o.spb.name,{tariffsActiveTab:m}=T(i=>i.price);return t.jsxs("div",{className:h.info,children:[t.jsx("h3",{children:e}),t.jsxs("ul",{className:h.list,children:[t.jsx("li",{className:h.item,children:"Тренажерный зал"}),s&&!n?t.jsx("li",{className:h.item,children:"Бассейн"}):null,n&&(r==="mc_full"||m==="Премьер")?t.jsxs("li",{className:h.item,children:["Бассейн ",t.jsx("small",{children:"(при наличии в клубе)"})]}):n&&s?t.jsx("li",{className:h.item,children:"Бассейн"}):null,t.jsx("li",{className:h.item,children:"Групповые уроки"}),t.jsx("li",{className:h.item,children:"Спа-комплекс"}),t.jsx("li",{className:h.item,children:"Индивидуальные шкафчики"}),t.jsx("li",{className:h.item,children:"Питьевая вода"})]})]})},vt="_button_de7o2_1",yt={button:vt},Nt=()=>{const e="Первоначальный платеж оплачивается 1 раз в первый месяц и активен весь срок действия вашего договора",s=r=>t.jsx(L,{id:"button-tooltip",...r,children:e});return t.jsx(F,{placement:"top",delay:{show:250,hide:400},overlay:s,children:t.jsx("button",{type:"button",className:yt.button,"aria-label":e,children:t.jsx(M,{width:20,height:20})})})},wt="_info_mfxnv_1",Tt={info:wt},Ct=()=>{const{firstPayPrice:e,oldFirstPayPrice:s,endDateSale:r}=T(a=>a.price);return t.jsxs("div",{className:Tt.info,children:["Первоначальный платеж до ",r," ВСЕГО ",$(e)," ","₽ вместо ",$(s)," ₽ только в первый месяц"," ",t.jsx(Nt,{})]})},Pt="_tariff_1yo7h_1",Bt="_button_1yo7h_43",St="_active_1yo7h_47",Et="_wrapper_1yo7h_54",$t="_title_1yo7h_79",kt="_price_1yo7h_85",It="_link_1yo7h_121",j={tariff:Pt,"rotate-position":"_rotate-position_1yo7h_1",button:Bt,active:St,wrapper:Et,title:$t,price:kt,link:It},O=({data:e})=>{const{type:s,price:r,isPool:a,clubs:n}=e,{openModal:m}=W(),i=X(),l=i.pathname,c=[{url:o.spb.url,state:{tariff:e,spb_tariffBg:i}},{url:o.sam.url,state:{tariff:e,sam_tariffBg:i}},{url:o.yar.url,state:{tariff:e,yar_tariffBg:i}},{url:o.arh.url,state:{tariff:e,arh_tariffBg:i}},{url:o.ijk.url,state:{tariff:e,ijk_tariffBg:i}},{url:o.kzn.url,state:{tariff:e,kzn_tariffBg:i}},{url:o.nch.url,state:{tariff:e,nch_tariffBg:i}},{url:o.goj.url,state:{tariff:e,goj_tariffBg:i}},{url:o.pes.url,state:{tariff:e,pes_tariffBg:i}},{url:o.ryz.url,state:{tariff:e,ryz_tariffBg:i}},{url:o.tol.url,state:{tariff:e,tol_tariffBg:i}},{url:o.tul.url,state:{tariff:e,tul_tariffBg:i}},{url:o.uly.url,state:{tariff:e,uly_tariffBg:i}}];return t.jsx("section",{className:s==="full"?z(j.tariff,j.active):j.tariff,children:t.jsxs("div",{className:j.wrapper,children:[t.jsx(pt,{type:s}),t.jsx("h3",{className:j.title,children:"Подписка"}),t.jsxs("div",{className:j.price,children:[$(r),t.jsx("small",{children:"₽/месяц"})]}),t.jsx(xt,{clubs:n,type:s}),t.jsx(Ct,{}),c.map(d=>{if(d.url===l)return t.jsx(G,{FallbackComponent:J,children:t.jsx(Q,{to:`${e==null?void 0:e.id}`,onClick:m,state:d.state,className:z("linkReset rounded-pill click_buy_prices ",j.link),"data-outline":s==="full",children:"Оформить"})},d==null?void 0:d.url)}),t.jsx(bt,{title:"Что входит в абонемент:",isPool:a,type:s})]})})},At="_icon_1hpq9_1",zt={icon:At},N=({data:e})=>{let s=[];e.length===1?s=e[0].data:s=e.data;const r={slidesPerView:3,spaceBetween:3,modules:[Y],className:"flex"},a={320:{slidesPerView:1.3,freeMode:!0,spaceBetween:10},540:{slidesPerView:1.7,spaceBetween:20},768:{slidesPerView:2.3,spaceBetween:20},960:{slidesPerView:2.7,spaceBetween:20},1200:{slidesPerView:3,spaceBetween:20}};return t.jsxs(t.Fragment,{children:[t.jsx(Z,{width:30,height:30,className:zt.icon}),t.jsx(tt,{id:"carousel-tariffs",breakpoints:a,...r,children:s&&(s==null?void 0:s.map((n,m)=>t.jsx(H,{className:"flex flex-col h-auto",children:t.jsx(O,{data:n})},m)))})]})},Ft="_list_d87vp_1",Lt={list:Ft},x=({data:e})=>{let s=[];return e.length===1?s=e[0].data:s=e.data,t.jsx("div",{className:Lt.list,children:s&&s.map((r,a)=>t.jsx(O,{data:r},a))})},Mt=()=>{const e=p.useContext(w),[s,r]=p.useState(1),a=D("(min-width: 567px)"),{tariffTypes:n,clubsPoolNo:m,clubsPoolYes:i,clubsPremiere:l,tariffsTabs:c,activeCity:d}=T(P=>P.price),{getTariffs:C}=k(),g=n.length,v=[],I=[],A=[];m.length>0&&v.push(B(m,n)),i.length>0&&I.push(B(i,n)),l.length>0&&A.push(B(l,n));const f=[{tab:c[0],data:A.flat(1/0)},{tab:c[1],data:I.flat(1/0)},{tab:c[2],data:v.flat(1/0)}];p.useEffect(()=>{e===d&&f&&f.length>0&&C(f)},[e,d]);const b=f.filter(P=>P.data.length!==0),q=[{name:f[0].tab,content:a?g>2?t.jsx(N,{data:f[0]}):t.jsx(x,{data:f[0]}):t.jsx(x,{data:f[0]})},{name:f[1].tab,content:a?g>2?t.jsx(N,{data:f[1]}):t.jsx(x,{data:f[1]}):t.jsx(x,{data:f[1]})},{name:f[2].tab,content:a?g>2?t.jsx(N,{data:f[2]}):t.jsx(x,{data:f[2]}):t.jsx(x,{data:f[2]})}];return t.jsxs(R.div,{initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},transition:{duration:.5},children:[b.length===1?a?g>2?t.jsx(N,{data:b}):t.jsx(x,{data:b}):t.jsx(x,{data:b}):null,b.length>=2&&t.jsx(at,{data:q,active:s,setActive:r})]})},Rt="_tariffs_17pcm_1",Ot="_container_17pcm_12",qt="_inner_17pcm_21",Vt="_title_17pcm_27",Ut="_bgPic_17pcm_46",Dt="_bgPic3_17pcm_49",Ht="_bgPic2_17pcm_100",Yt="_bgPic1_17pcm_149",_={tariffs:Rt,container:Ot,inner:qt,title:Vt,bgPic:Ut,bgPic3:Dt,bgPic2:Ht,bgPic1:Yt},Qt=()=>{const{data:e,isLoading:s,isError:r,error:a}=K(""),n=p.useContext(w),{getActiveCity:m,getActiveCityClubs:i,getTariffTypes:l,getTariffPriceCity:c,getClubsPoolYes:d,getClubsPoolNo:C,getClubsPremiere:g,getClubsMC:v}=k();return p.useEffect(()=>{m(n),e&&(i(e),l(e),c(e),d(e),C(e),g(e),v(e))},[e,n]),t.jsx("section",{className:_.tariffs,id:"tariff",children:t.jsxs(V,{className:_.container,children:[t.jsxs("div",{className:_.inner,children:[t.jsx("h2",{className:_.title,children:"Тарифы"}),s?t.jsx("div",{className:"d-flex justify-content-center",children:t.jsx(U,{})}):r?t.jsx("p",{children:JSON.stringify(a)}):e?t.jsx(Mt,{}):null]}),t.jsx("div",{className:_.bgPic1}),t.jsx("div",{className:_.bgPic2}),t.jsx("div",{className:_.bgPic3})]})})},ze=Qt;export{ze as default};
