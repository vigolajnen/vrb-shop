import{j as e,r as f}from"./react-Jw3Yv3Dx.js";import{g as R}from"./react-router-uND8Us2t.js";import{u as T,a as E,F as O}from"./react-hook-form-arUvvm_T.js";import{c as g}from"./classnames-TNdf9gv5.js";import{F as s,O as G,b as M,R as V,a as F}from"./react-bootstrap-c5_33dwq.js";import{R as B}from"./react-input-mask-XmBdG83Q.js";import{i as A,m as $,a as U,R as X,b as Y,v as z}from"./index-hYxvzIE4.js";import{S as H,g as w,u as J}from"./useActions-MFxZ-FAv.js";import{C as K}from"./CityContext-Ieav2pYL.js";import{u as C}from"./useTypedSelector-OGXYHMc3.js";import{L as y}from"./react-router-dom-IHdWotJk.js";import"./@remix-run-R0A6g4pJ.js";import"./@restart-xIeF-cHV.js";import"./dom-helpers--nlGJCCs.js";import"./@react-aria-T7pU4Vz_.js";import"./react-dom-KmRZywdm.js";import"./scheduler-iwWdm5Ml.js";import"./dequal-vEqHzq4I.js";import"./@popperjs-u7bcf535.js";import"./warning-A3mB0AEe.js";import"./uncontrollable-af-_F5Rh.js";import"./@babel-o_ZSNJgm.js";import"./react-transition-group-XCMw5D4t.js";import"./prop-types-owtuOFwk.js";import"./react-redux-z09SlkWR.js";import"./use-sync-external-store-rpec4DOT.js";import"./framer-motion-g-r5ZHJ9.js";import"./react-helmet-async-zKePrVHr.js";import"./react-fast-compare-PQr6UfN5.js";import"./invariant-LDHjVc5t.js";import"./shallowequal-ujSgULk1.js";import"./@reduxjs-MlIXepis.js";import"./redux-C6JyQ450.js";import"./immer-2oJgyI5v.js";import"./reselect-lfPQZHtp.js";import"./redux-thunk-qyK_zz9Y.js";const Q="_label_dg7fw_1",W="_control_dg7fw_8",Z="_stepper_dg7fw_19",ee="_stepperItem_dg7fw_40",se="_active_dg7fw_64",te="_labelCheck_dg7fw_72",re="_link_dg7fw_76",ae="_buttonNext_dg7fw_84",t={label:Q,control:W,stepper:Z,stepperItem:ee,active:se,labelCheck:te,link:re,buttonNext:ae},le=()=>{const{register:r,formState:{errors:a}}=T();return e.jsxs(e.Fragment,{children:[e.jsxs(s.Group,{className:"mb-3",children:[e.jsx(s.Label,{className:t.label,children:"Имя"}),e.jsx(s.Control,{type:"text",id:"first_name",placeholder:"Имя",className:t.control,...r("firstName",{required:!0,minLength:2})}),a.firstName&&e.jsx(s.Text,{className:"text-danger",children:"Пожалуйста, введите ваше имя"})]}),e.jsxs(s.Group,{className:"mb-3",children:[e.jsx(s.Label,{className:t.label,children:"Номер телефона"}),e.jsx(B,{id:"phone",type:"tel",className:g(t.control,"form-control"),mask:"+7(999) 999-99-99",alwaysShowMask:!0,...r("phone",{validate:{inputTelRequired:A}})}),a.phone&&e.jsx(s.Text,{className:"text-danger",children:"Пожалуйста, введите ваш телефон"})]})]})},ie="_button_de7o2_1",ne={button:ie};function oe(){const r="Услуга не может быть оказана лицам моложе 14 лет",a=o=>e.jsx(M,{id:"button-tooltip",...o,children:r});return e.jsx(G,{placement:"top",delay:{show:250,hide:400},overlay:a,children:e.jsx("button",{className:ne.button,"aria-label":r,children:e.jsx(H,{width:20,height:20})})})}const ce=({data:r,item:a})=>{const o=$().toString(),d=U().toString(),j=f.useContext(K),{tariffsActiveTab:x,clubsMC:u}=C(i=>i.price),N=j===X.spb.name&&(x==="с бассейном"||a.type==="mc_full"),b=[];u.length>0&&b.push(w(u,["mc_full"]));const h=b.flat(1/0),{register:l,formState:{errors:c}}=T();return e.jsxs(e.Fragment,{children:[e.jsxs(V,{children:[e.jsx(F,{xs:12,sm:6,children:e.jsxs(s.Group,{className:"mb-3",children:[e.jsx(s.Label,{className:t.label,children:"Имя"}),e.jsx(s.Control,{type:"text",name:"first_name",placeholder:"Имя",id:"firstName",value:r.firstName,readOnly:!0,className:t.control})]})}),e.jsx(F,{xs:12,sm:6,children:e.jsxs(s.Group,{className:"mb-3",children:[e.jsx(s.Label,{className:t.label,children:"Фамилия"}),e.jsx(s.Control,{type:"text",placeholder:"Фамилия",className:t.control,id:"lastName",required:!0,...l("lastName",{required:!0,minLength:2})}),c.lastName&&e.jsx(s.Text,{className:"text-danger",children:"Пожалуйста, введите вашу фамилию"})]})})]}),e.jsxs(s.Group,{className:"mb-3",children:[e.jsx(s.Label,{className:t.label,children:"Выберите клуб"}),N&&e.jsx("small",{className:"mb-1 d-flex",children:"Кроме клубов Фитнес Хаус Престиж (ул. Барочная, д.10/2Б, ул. Я. Гашека, 17А, Шереметьевская ул., 13А)"}),e.jsxs(s.Select,{"aria-label":"Выберите клуб",className:t.control,required:!0,...l("club_id",{required:!0}),children:[e.jsx("option",{value:"",children:"Выберете клуб"}),(a==null?void 0:a.clubs.length)>0&&a.type!=="mc_full"?[...a.clubs].map(i=>e.jsx("option",{value:i.id,children:i.address},i.address)):a.type==="mc_full"?[...h[0].clubs].map(i=>e.jsx("option",{value:i.id,children:i.address},i.address)):null]}),c.club_id&&e.jsx(s.Text,{className:"text-danger",children:"Пожалуйста, выберите клуб"})]}),e.jsxs(s.Group,{className:"mb-3",children:[e.jsx(s.Label,{className:t.label,children:"Номер телефона"}),e.jsx(s.Control,{type:"tel",name:"phone",className:t.control,id:"phone",value:r.phone,readOnly:!0})]}),e.jsxs(s.Group,{className:"mb-3",children:[e.jsxs(s.Label,{className:t.label,children:["Дата рождения ",e.jsx(oe,{})]}),e.jsx(s.Control,{type:"date",className:t.control,id:"customer_birth_day",min:d,max:o,required:!0,...l("birth_day",{required:!0,min:d,max:o,validate:{inputBirthDayRequired:Y}})}),c.birth_day&&e.jsx(s.Text,{className:"text-danger",children:"Пожалуйста, введите вашу дату рождения"})]}),e.jsxs(s.Group,{className:"mb-3",children:[e.jsx(s.Label,{className:t.label,children:"Email"}),e.jsx(s.Control,{type:"email",placeholder:"Email",className:t.control,id:"email",required:!0,...l("email",{required:!0,validate:{inputEmailRequired:z}})}),c.email&&e.jsx(s.Text,{className:"text-danger",children:"Пожалуйста, введите ваш email"})]})]})},de="_list_u80dj_1",me="_item_u80dj_8",pe="_text_u80dj_15",xe="_price_u80dj_20",p={list:de,item:me,text:pe,price:xe},ue=({price:r,club:a})=>{const o=a.first_pay[0]!==void 0?a.first_pay[0].product_price:0,d=+r+ +o;return e.jsxs("div",{className:"py-2 p-sm-2",children:[e.jsxs("ul",{className:p.list,children:[e.jsxs("li",{className:p.item,children:[e.jsx("span",{children:"Стоимость тарифа"}),e.jsxs("span",{className:p.price,children:[e.jsx("b",{children:r})," ",e.jsx("small",{children:"₽"})]})]}),e.jsxs("li",{className:p.item,children:[e.jsx("span",{children:"Первоначальный платеж"}),e.jsxs("span",{className:p.price,children:[e.jsx("b",{children:o})," ",e.jsx("small",{children:"₽"})]})]}),e.jsxs("li",{className:p.item,children:[e.jsxs("span",{children:[e.jsx("b",{children:"Итого:"}),e.jsx("br",{}),"к оплате за первый месяц"]}),e.jsxs("span",{className:p.price,children:[e.jsx("b",{children:d})," ",e.jsx("small",{children:"₽"})]})]})]}),e.jsxs("p",{className:p.text,children:["Ежемесячное списание Подписки со второго месяца будет равно стоимости Вашего тарифа ",r," ₽"]})]})};function he({price:r,club:a}){return e.jsx("div",{className:"d-flex justify-content-center",children:e.jsx(ue,{price:r,club:a})})}const je=()=>{const{register:r,formState:{errors:a}}=T();return e.jsx(e.Fragment,{children:e.jsxs(s.Check,{type:"checkbox",id:"checkbox",children:[e.jsx(s.Check.Input,{type:"checkbox",...r("isCheck",{required:!0})}),e.jsxs(s.Check.Label,{className:t.labelCheck,children:["Я ознакомлен(-на) и согласен(-на) с условиями"," ",e.jsx(y,{to:"/",className:t.link,target:"_blank",rel:"noreferrer",children:"Договора Оферты"}),","," ",e.jsx(y,{to:"/",className:t.link,target:"_blank",rel:"noreferrer",children:"Правилами Клуба"})," ","и даю своё согласие на"," ",e.jsx(y,{to:"/",className:t.link,target:"_blank",rel:"noreferrer",children:"обработку персональных данных"}),"."]}),a.isCheck&&e.jsx(s.Text,{className:"text-danger",children:"Пожалуйста, заполните поле"})]})})},L={firstName:"",lastName:"",phone:"",email:"",birth_day:"",club_id:"",isCheck:!1},be=({item:r})=>{const[a,o]=f.useState(!1),{getProductsPosition:d,getClubsPositions:j,getProductsPositionFirstPay:x,getFormData:u,getCustomer:N}=J(),{orderData:b}=C(n=>n.form),h=[1,2,3],[l,c]=f.useState(1),[i,m]=f.useState(L),k=E({mode:"all"}),{formState:{isValid:v},watch:_,reset:D}=k,q=()=>{c(n=>n+1)},I=n=>{n=_(),m(n),q(),u(_())},S=n=>{n=_(),u(_()),N(),j(r.clubs),d(r),x(n.club_id),o(!0),setTimeout(()=>{console.log("orderData",b),D(),m(L),c(1),o(!1)},1e3)};f.useEffect(()=>{},[]);const P=()=>l>2?null:l===2?e.jsx("button",{type:"button",className:g(t.buttonNext,"w-100 my-2 mb-4 p-3"),onClick:S,disabled:!v,children:"Оплатить"}):e.jsx("button",{type:"button",onClick:I,className:g(t.buttonNext,"w-100 my-2 mb-4 p-3"),disabled:!v,children:"Вперед"});return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:t.stepper,children:h.map(n=>e.jsx("div",{className:n<=l?g(t.stepperItem,t.active):t.stepperItem,children:e.jsx("span",{children:n})},n))}),e.jsx(O,{...k,children:e.jsxs(s,{noValidate:!0,validated:a,onSubmit:S,children:[l>=1&&e.jsx("div",{className:l===1?"":"d-none",children:e.jsx(le,{})}),l>=2&&e.jsx("div",{className:l===2?"":"d-none",children:e.jsx(ce,{data:i,item:r})}),l>=2&&e.jsx("div",{className:l===2?"":"d-none",children:e.jsx(he,{price:r.price,club:r.clubs[0]})}),P(),l<=2&&e.jsx("div",{className:l===2||l===1?"":"d-none",children:e.jsx(je,{})})]})})]})},es=()=>{var i;const r=R(),{clubsPoolYes:a,clubsPoolNo:o,clubsPremiere:d,tariffTypes:j,tariffsTabs:x,tariffsActiveTab:u}=C(m=>m.price),h=[{tab:x[0],list:d},{tab:x[1],list:a},{tab:x[2],list:o}].filter(m=>m.tab===u)[0].list,l=[];h.length>0&&l.push(w(h,j));const c=(i=l.flat(1))==null?void 0:i.find(m=>m.id===Number(r.id));return e.jsx(be,{item:c})};export{es as default};
