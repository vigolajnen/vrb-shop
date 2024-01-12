import{c as h}from"./classnames-G66vBsBY.js";import{r as a,j as c,R as J}from"./react-dOK_llRH.js";import{u as po,A as xe,a as mo,b as K,c as Re,d as ho,D as go,e as yo,f as W,g as wo,M as vo,h as No,i as Co,B as $o,j as xo,k as Ro}from"./@restart--YlOOCn5.js";import{u as re,a as jo}from"./uncontrollable-BgYfu1sR.js";import{t as je,s as G,e as Eo,q as H,r as To,f as we,b as Fo,a as Ao,o as Mo,g as ve,h as Ne,c as ko}from"./dom-helpers--nlGJCCs.js";import{T as Do,E as So,a as Oo,b as Ee,c as Te}from"./react-transition-group-hXqudQ2I.js";import{P as S}from"./prop-types-fuYWWnMu.js";import{R as Io}from"./react-dom-ZjE40EjR.js";const Fe=["xxl","xl","lg","md","sm","xs"],Ae="xs",q=a.createContext({prefixes:{},breakpoints:Fe,minBreakpoint:Ae}),{Consumer:qn,Provider:Bo}=q;function Jn({prefixes:t={},breakpoints:e=Fe,minBreakpoint:o=Ae,dir:n,children:s}){const r=a.useMemo(()=>({prefixes:{...t},breakpoints:e,minBreakpoint:o,dir:n}),[t,e,o,n]);return c.jsx(Bo,{value:r,children:s})}function y(t,e){const{prefixes:o}=a.useContext(q);return t||o[e]||e}function Me(){const{breakpoints:t}=a.useContext(q);return t}function ke(){const{minBreakpoint:t}=a.useContext(q);return t}function P(){const{dir:t}=a.useContext(q);return t==="rtl"}const De=a.forwardRef(({bsPrefix:t,variant:e,animation:o="border",size:n,as:s="div",className:r,...l},d)=>{t=y(t,"spinner");const i=`${t}-${o}`;return c.jsx(s,{ref:d,...l,className:h(r,i,n&&`${i}-${n}`,e&&`text-${e}`)})});De.displayName="Spinner";const Qn=De,Se=a.forwardRef(({bsPrefix:t,fluid:e=!1,as:o="div",className:n,...s},r)=>{const l=y(t,"container"),d=typeof e=="string"?`-${e}`:"-fluid";return c.jsx(o,{ref:r,...s,className:h(n,e?`${l}${d}`:l)})});Se.displayName="Container";const Zn=Se,Oe=a.createContext({});Oe.displayName="DropdownContext";const Ie=Oe,Be=a.forwardRef(({className:t,bsPrefix:e,as:o="hr",role:n="separator",...s},r)=>(e=y(e,"dropdown-divider"),c.jsx(o,{ref:r,className:h(t,e),role:n,...s})));Be.displayName="DropdownDivider";const bo=Be,be=a.forwardRef(({className:t,bsPrefix:e,as:o="div",role:n="heading",...s},r)=>(e=y(e,"dropdown-header"),c.jsx(o,{ref:r,className:h(t,e),role:n,...s})));be.displayName="DropdownHeader";const Lo=be,Le=a.forwardRef(({bsPrefix:t,className:e,eventKey:o,disabled:n=!1,onClick:s,active:r,as:l=xe,...d},i)=>{const u=y(t,"dropdown-item"),[f,p]=po({key:o,href:d.href,disabled:n,onClick:s,active:r});return c.jsx(l,{...d,...f,ref:i,className:h(e,u,p.isActive&&"active",n&&"disabled")})});Le.displayName="DropdownItem";const _o=Le,_e=a.forwardRef(({className:t,bsPrefix:e,as:o="span",...n},s)=>(e=y(e,"dropdown-item-text"),c.jsx(o,{ref:s,className:h(t,e),...n})));_e.displayName="DropdownItemText";const Ho=_e,He=a.createContext(null);He.displayName="InputGroupContext";const Ue=He,Ge=a.createContext(null);Ge.displayName="NavbarContext";const Uo=Ge;function We(t,e){return t}function Ve(t,e,o){const n=o?"top-end":"top-start",s=o?"top-start":"top-end",r=o?"bottom-end":"bottom-start",l=o?"bottom-start":"bottom-end",d=o?"right-start":"left-start",i=o?"right-end":"left-end",u=o?"left-start":"right-start",f=o?"left-end":"right-end";let p=t?l:r;return e==="up"?p=t?s:n:e==="end"?p=t?f:u:e==="start"?p=t?i:d:e==="down-centered"?p="bottom":e==="up-centered"&&(p="top"),p}const Ke=a.forwardRef(({bsPrefix:t,className:e,align:o,rootCloseEvent:n,flip:s=!0,show:r,renderOnMount:l,as:d="div",popperConfig:i,variant:u,...f},p)=>{let g=!1;const w=a.useContext(Uo),v=y(t,"dropdown-menu"),{align:x,drop:m,isRTL:R}=a.useContext(Ie);o=o||x;const j=a.useContext(Ue),T=[];if(o)if(typeof o=="object"){const b=Object.keys(o);if(b.length){const L=b[0],O=o[L];g=O==="start",T.push(`${v}-${L}-${O}`)}}else o==="end"&&(g=!0);const A=Ve(g,m,R),[E,{hasShown:N,popper:C,show:F,toggle:k}]=mo({flip:s,rootCloseEvent:n,show:r,usePopper:!w&&T.length===0,offset:[0,2],popperConfig:i,placement:A});if(E.ref=K(We(p),E.ref),Re(()=>{F&&(C==null||C.update())},[F]),!N&&!l&&!j)return null;typeof d!="string"&&(E.show=F,E.close=()=>k==null?void 0:k(!1),E.align=o);let D=f.style;return C!=null&&C.placement&&(D={...f.style,...E.style},f["x-placement"]=C.placement),c.jsx(d,{...f,...E,style:D,...(T.length||w)&&{"data-bs-popper":"static"},className:h(e,v,F&&"show",g&&`${v}-end`,u&&`${v}-${u}`,...T)})});Ke.displayName="DropdownMenu";const Go=Ke,ze=a.forwardRef(({as:t,bsPrefix:e,variant:o="primary",size:n,active:s=!1,disabled:r=!1,className:l,...d},i)=>{const u=y(e,"btn"),[f,{tagName:p}]=ho({tagName:t,disabled:r,...d}),g=p;return c.jsx(g,{...f,...d,ref:i,disabled:r,className:h(l,u,s&&"active",o&&`${u}-${o}`,n&&`${u}-${n}`,d.href&&r&&"disabled")})});ze.displayName="Button";const Wo=ze,Xe=a.forwardRef(({bsPrefix:t,split:e,className:o,childBsPrefix:n,as:s=Wo,...r},l)=>{const d=y(t,"dropdown-toggle"),i=a.useContext(go);n!==void 0&&(r.bsPrefix=n);const[u]=yo();return u.ref=K(u.ref,We(l)),c.jsx(s,{className:h(o,d,e&&`${d}-split`,(i==null?void 0:i.show)&&"show"),...u,...r})});Xe.displayName="DropdownToggle";const Vo=Xe,Ye=a.forwardRef((t,e)=>{const{bsPrefix:o,drop:n="down",show:s,className:r,align:l="start",onSelect:d,onToggle:i,focusFirstItemOnShow:u,as:f="div",navbar:p,autoClose:g=!0,...w}=re(t,{show:"onToggle"}),v=a.useContext(Ue),x=y(o,"dropdown"),m=P(),R=C=>g===!1?C==="click":g==="inside"?C!=="rootClose":g==="outside"?C!=="select":!0,j=W((C,F)=>{var k,D;!((k=F.originalEvent)==null||(D=k.target)==null)&&D.classList.contains("dropdown-toggle")&&F.source==="mousedown"||(F.originalEvent.currentTarget===document&&(F.source!=="keydown"||F.originalEvent.key==="Escape")&&(F.source="rootClose"),R(F.source)&&(i==null||i(C,F)))}),A=Ve(l==="end",n,m),E=a.useMemo(()=>({align:l,drop:n,isRTL:m}),[l,n,m]),N={down:x,"down-centered":`${x}-center`,up:"dropup","up-centered":"dropup-center dropup",end:"dropend",start:"dropstart"};return c.jsx(Ie.Provider,{value:E,children:c.jsx(wo,{placement:A,show:s,onSelect:d,onToggle:j,focusFirstItemOnShow:u,itemSelector:`.${x}-item:not(.disabled):not(:disabled)`,children:v?w.children:c.jsx(f,{...w,ref:e,className:h(r,s&&"show",N[n])})})})});Ye.displayName="Dropdown";const Pn=Object.assign(Ye,{Toggle:Vo,Menu:Go,Item:_o,ItemText:Ho,Divider:bo,Header:Lo}),qe=a.forwardRef(({bsPrefix:t,className:e,as:o="div",...n},s)=>{const r=y(t,"row"),l=Me(),d=ke(),i=`${r}-cols`,u=[];return l.forEach(f=>{const p=n[f];delete n[f];let g;p!=null&&typeof p=="object"?{cols:g}=p:g=p;const w=f!==d?`-${f}`:"";g!=null&&u.push(`${i}${w}-${g}`)}),c.jsx(o,{ref:s,...n,className:h(e,r,...u)})});qe.displayName="Row";const es=qe;function Ko({as:t,bsPrefix:e,className:o,...n}){e=y(e,"col");const s=Me(),r=ke(),l=[],d=[];return s.forEach(i=>{const u=n[i];delete n[i];let f,p,g;typeof u=="object"&&u!=null?{span:f,offset:p,order:g}=u:f=u;const w=i!==r?`-${i}`:"";f&&l.push(f===!0?`${e}${w}`:`${e}${w}-${f}`),g!=null&&d.push(`order${w}-${g}`),p!=null&&d.push(`offset${w}-${p}`)}),[{...n,className:h(o,...l,...d)},{as:t,bsPrefix:e,spans:l}]}const Je=a.forwardRef((t,e)=>{const[{className:o,...n},{as:s="div",bsPrefix:r,spans:l}]=Ko(t);return c.jsx(s,{...n,ref:e,className:h(o,!l.length&&r)})});Je.displayName="Col";const zo=Je;function Ce(t,e){const o=G(t,e)||"",n=o.indexOf("ms")===-1?1e3:1;return parseFloat(o)*n}function Qe(t,e){const o=Ce(t,"transitionDuration"),n=Ce(t,"transitionDelay"),s=je(t,r=>{r.target===t&&(s(),e(r))},o+n)}function Y(...t){return t.filter(e=>e!=null).reduce((e,o)=>{if(typeof o!="function")throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return e===null?o:function(...s){e.apply(this,s),o.apply(this,s)}},null)}function Ze(t){t.offsetHeight}function Q(t){return t&&"setState"in t?Io.findDOMNode(t):t??null}const Xo=J.forwardRef(({onEnter:t,onEntering:e,onEntered:o,onExit:n,onExiting:s,onExited:r,addEndListener:l,children:d,childRef:i,...u},f)=>{const p=a.useRef(null),g=K(p,i),w=N=>{g(Q(N))},v=N=>C=>{N&&p.current&&N(p.current,C)},x=a.useCallback(v(t),[t]),m=a.useCallback(v(e),[e]),R=a.useCallback(v(o),[o]),j=a.useCallback(v(n),[n]),T=a.useCallback(v(s),[s]),A=a.useCallback(v(r),[r]),E=a.useCallback(v(l),[l]);return c.jsx(Do,{ref:f,...u,onEnter:x,onEntered:R,onEntering:m,onExit:j,onExited:A,onExiting:T,addEndListener:E,nodeRef:p,children:typeof d=="function"?(N,C)=>d(N,{...C,ref:w}):J.cloneElement(d,{ref:w})})}),Pe=Xo,Yo={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function qo(t,e){const o=`offset${t[0].toUpperCase()}${t.slice(1)}`,n=e[o],s=Yo[t];return n+parseInt(G(e,s[0]),10)+parseInt(G(e,s[1]),10)}const Jo={[So]:"collapse",[Oo]:"collapsing",[Ee]:"collapsing",[Te]:"collapse show"},Qo=J.forwardRef(({onEnter:t,onEntering:e,onEntered:o,onExit:n,onExiting:s,className:r,children:l,dimension:d="height",in:i=!1,timeout:u=300,mountOnEnter:f=!1,unmountOnExit:p=!1,appear:g=!1,getDimensionValue:w=qo,...v},x)=>{const m=typeof d=="function"?d():d,R=a.useMemo(()=>Y(N=>{N.style[m]="0"},t),[m,t]),j=a.useMemo(()=>Y(N=>{const C=`scroll${m[0].toUpperCase()}${m.slice(1)}`;N.style[m]=`${N[C]}px`},e),[m,e]),T=a.useMemo(()=>Y(N=>{N.style[m]=null},o),[m,o]),A=a.useMemo(()=>Y(N=>{N.style[m]=`${w(m,N)}px`,Ze(N)},n),[n,w,m]),E=a.useMemo(()=>Y(N=>{N.style[m]=null},s),[m,s]);return c.jsx(Pe,{ref:x,addEndListener:Qe,...v,"aria-expanded":v.role?i:null,onEnter:R,onEntering:j,onEntered:T,onExit:A,onExiting:E,childRef:l.ref,in:i,timeout:u,mountOnEnter:f,unmountOnExit:p,appear:g,children:(N,C)=>J.cloneElement(l,{...C,className:h(r,l.props.className,Jo[N],m==="width"&&"collapse-horizontal")})})}),Zo=Qo;function et(t,e){return Array.isArray(t)?t.includes(e):t===e}const tt=a.createContext({});tt.displayName="AccordionContext";const ee=tt,ot=a.forwardRef(({as:t="div",bsPrefix:e,className:o,children:n,eventKey:s,...r},l)=>{const{activeEventKey:d}=a.useContext(ee);return e=y(e,"accordion-collapse"),c.jsx(Zo,{ref:l,in:et(d,s),...r,className:h(o,e),children:c.jsx(t,{children:a.Children.only(n)})})});ot.displayName="AccordionCollapse";const nt=ot,st=a.createContext({eventKey:""});st.displayName="AccordionItemContext";const le=st,at=a.forwardRef(({as:t="div",bsPrefix:e,className:o,onEnter:n,onEntering:s,onEntered:r,onExit:l,onExiting:d,onExited:i,...u},f)=>{e=y(e,"accordion-body");const{eventKey:p}=a.useContext(le);return c.jsx(nt,{eventKey:p,onEnter:n,onEntering:s,onEntered:r,onExit:l,onExiting:d,onExited:i,children:c.jsx(t,{ref:f,...u,className:h(o,e)})})});at.displayName="AccordionBody";const Po=at;function en(t,e){const{activeEventKey:o,onSelect:n,alwaysOpen:s}=a.useContext(ee);return r=>{let l=t===o?null:t;s&&(Array.isArray(o)?o.includes(t)?l=o.filter(d=>d!==t):l=[...o,t]:l=[t]),n==null||n(l,r),e==null||e(r)}}const rt=a.forwardRef(({as:t="button",bsPrefix:e,className:o,onClick:n,...s},r)=>{e=y(e,"accordion-button");const{eventKey:l}=a.useContext(le),d=en(l,n),{activeEventKey:i}=a.useContext(ee);return t==="button"&&(s.type="button"),c.jsx(t,{ref:r,onClick:d,...s,"aria-expanded":Array.isArray(i)?i.includes(l):l===i,className:h(o,e,!et(i,l)&&"collapsed")})});rt.displayName="AccordionButton";const lt=rt,ct=a.forwardRef(({as:t="h2",bsPrefix:e,className:o,children:n,onClick:s,...r},l)=>(e=y(e,"accordion-header"),c.jsx(t,{ref:l,...r,className:h(o,e),children:c.jsx(lt,{onClick:s,children:n})})));ct.displayName="AccordionHeader";const tn=ct,it=a.forwardRef(({as:t="div",bsPrefix:e,className:o,eventKey:n,...s},r)=>{e=y(e,"accordion-item");const l=a.useMemo(()=>({eventKey:n}),[n]);return c.jsx(le.Provider,{value:l,children:c.jsx(t,{ref:r,...s,className:h(o,e)})})});it.displayName="AccordionItem";const on=it,dt=a.forwardRef((t,e)=>{const{as:o="div",activeKey:n,bsPrefix:s,className:r,onSelect:l,flush:d,alwaysOpen:i,...u}=re(t,{activeKey:"onSelect"}),f=y(s,"accordion"),p=a.useMemo(()=>({activeEventKey:n,onSelect:l,alwaysOpen:i}),[n,l,i]);return c.jsx(ee.Provider,{value:p,children:c.jsx(o,{ref:e,...u,className:h(r,f,d&&`${f}-flush`)})})});dt.displayName="Accordion";const ts=Object.assign(dt,{Button:lt,Collapse:nt,Item:on,Header:tn,Body:Po}),ut=t=>a.forwardRef((e,o)=>c.jsx("div",{...e,ref:o,className:h(e.className,t)})),ft=ut("h4");ft.displayName="DivStyledAsH4";const pt=a.forwardRef(({className:t,bsPrefix:e,as:o=ft,...n},s)=>(e=y(e,"alert-heading"),c.jsx(o,{ref:s,className:h(t,e),...n})));pt.displayName="AlertHeading";const nn=pt,mt=a.forwardRef(({className:t,bsPrefix:e,as:o=xe,...n},s)=>(e=y(e,"alert-link"),c.jsx(o,{ref:s,className:h(t,e),...n})));mt.displayName="AlertLink";const sn=mt,an={[Ee]:"show",[Te]:"show"},ht=a.forwardRef(({className:t,children:e,transitionClasses:o={},onEnter:n,...s},r)=>{const l={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...s},d=a.useCallback((i,u)=>{Ze(i),n==null||n(i,u)},[n]);return c.jsx(Pe,{ref:r,addEndListener:Qe,...l,onEnter:d,childRef:e.ref,children:(i,u)=>a.cloneElement(e,{...u,className:h("fade",t,e.props.className,an[i],o[i])})})});ht.displayName="Fade";const V=ht,rn={"aria-label":S.string,onClick:S.func,variant:S.oneOf(["white"])},ce=a.forwardRef(({className:t,variant:e,"aria-label":o="Close",...n},s)=>c.jsx("button",{ref:s,type:"button",className:h("btn-close",e&&`btn-close-${e}`,t),"aria-label":o,...n}));ce.displayName="CloseButton";ce.propTypes=rn;const gt=ce,yt=a.forwardRef((t,e)=>{const{bsPrefix:o,show:n=!0,closeLabel:s="Close alert",closeVariant:r,className:l,children:d,variant:i="primary",onClose:u,dismissible:f,transition:p=V,...g}=re(t,{show:"onClose"}),w=y(o,"alert"),v=W(R=>{u&&u(!1,R)}),x=p===!0?V:p,m=c.jsxs("div",{role:"alert",...x?void 0:g,ref:e,className:h(l,w,i&&`${w}-${i}`,f&&`${w}-dismissible`),children:[f&&c.jsx(gt,{onClick:v,"aria-label":s,variant:r}),d]});return x?c.jsx(x,{unmountOnExit:!0,...g,ref:void 0,in:n,children:m}):n?m:null});yt.displayName="Alert";const os=Object.assign(yt,{Link:sn,Heading:nn});function ln(t,e){return a.Children.toArray(t).some(o=>a.isValidElement(o)&&o.type===e)}const cn={type:S.string,tooltip:S.bool,as:S.elementType},ie=a.forwardRef(({as:t="div",className:e,type:o="valid",tooltip:n=!1,...s},r)=>c.jsx(t,{...s,ref:r,className:h(e,`${o}-${n?"tooltip":"feedback"}`)}));ie.displayName="Feedback";ie.propTypes=cn;const wt=ie,dn=a.createContext({}),B=dn,vt=a.forwardRef(({id:t,bsPrefix:e,className:o,type:n="checkbox",isValid:s=!1,isInvalid:r=!1,as:l="input",...d},i)=>{const{controlId:u}=a.useContext(B);return e=y(e,"form-check-input"),c.jsx(l,{...d,ref:i,type:n,id:t||u,className:h(o,e,s&&"is-valid",r&&"is-invalid")})});vt.displayName="FormCheckInput";const Nt=vt,Ct=a.forwardRef(({bsPrefix:t,className:e,htmlFor:o,...n},s)=>{const{controlId:r}=a.useContext(B);return t=y(t,"form-check-label"),c.jsx("label",{...n,ref:s,htmlFor:o||r,className:h(e,t)})});Ct.displayName="FormCheckLabel";const ae=Ct,$t=a.forwardRef(({id:t,bsPrefix:e,bsSwitchPrefix:o,inline:n=!1,reverse:s=!1,disabled:r=!1,isValid:l=!1,isInvalid:d=!1,feedbackTooltip:i=!1,feedback:u,feedbackType:f,className:p,style:g,title:w="",type:v="checkbox",label:x,children:m,as:R="input",...j},T)=>{e=y(e,"form-check"),o=y(o,"form-switch");const{controlId:A}=a.useContext(B),E=a.useMemo(()=>({controlId:t||A}),[A,t]),N=!m&&x!=null&&x!==!1||ln(m,ae),C=c.jsx(Nt,{...j,type:v==="switch"?"checkbox":v,ref:T,isValid:l,isInvalid:d,disabled:r,as:R});return c.jsx(B.Provider,{value:E,children:c.jsx("div",{style:g,className:h(p,N&&e,n&&`${e}-inline`,s&&`${e}-reverse`,v==="switch"&&o),children:m||c.jsxs(c.Fragment,{children:[C,N&&c.jsx(ae,{title:w,children:x}),u&&c.jsx(wt,{type:f,tooltip:i,children:u})]})})})});$t.displayName="FormCheck";const Z=Object.assign($t,{Input:Nt,Label:ae}),xt=a.forwardRef(({bsPrefix:t,type:e,size:o,htmlSize:n,id:s,className:r,isValid:l=!1,isInvalid:d=!1,plaintext:i,readOnly:u,as:f="input",...p},g)=>{const{controlId:w}=a.useContext(B);return t=y(t,"form-control"),c.jsx(f,{...p,type:e,size:n,ref:g,readOnly:u,id:s||w,className:h(r,i?`${t}-plaintext`:t,o&&`${t}-${o}`,e==="color"&&`${t}-color`,l&&"is-valid",d&&"is-invalid")})});xt.displayName="FormControl";const un=Object.assign(xt,{Feedback:wt}),Rt=a.forwardRef(({className:t,bsPrefix:e,as:o="div",...n},s)=>(e=y(e,"form-floating"),c.jsx(o,{ref:s,className:h(t,e),...n})));Rt.displayName="FormFloating";const fn=Rt,jt=a.forwardRef(({controlId:t,as:e="div",...o},n)=>{const s=a.useMemo(()=>({controlId:t}),[t]);return c.jsx(B.Provider,{value:s,children:c.jsx(e,{...o,ref:n})})});jt.displayName="FormGroup";const Et=jt,Tt=a.forwardRef(({as:t="label",bsPrefix:e,column:o=!1,visuallyHidden:n=!1,className:s,htmlFor:r,...l},d)=>{const{controlId:i}=a.useContext(B);e=y(e,"form-label");let u="col-form-label";typeof o=="string"&&(u=`${u} ${u}-${o}`);const f=h(s,e,n&&"visually-hidden",o&&u);return r=r||i,o?c.jsx(zo,{ref:d,as:"label",className:f,htmlFor:r,...l}):c.jsx(t,{ref:d,className:f,htmlFor:r,...l})});Tt.displayName="FormLabel";const pn=Tt,Ft=a.forwardRef(({bsPrefix:t,className:e,id:o,...n},s)=>{const{controlId:r}=a.useContext(B);return t=y(t,"form-range"),c.jsx("input",{...n,type:"range",ref:s,className:h(e,t),id:o||r})});Ft.displayName="FormRange";const mn=Ft,At=a.forwardRef(({bsPrefix:t,size:e,htmlSize:o,className:n,isValid:s=!1,isInvalid:r=!1,id:l,...d},i)=>{const{controlId:u}=a.useContext(B);return t=y(t,"form-select"),c.jsx("select",{...d,size:o,ref:i,className:h(n,t,e&&`${t}-${e}`,s&&"is-valid",r&&"is-invalid"),id:l||u})});At.displayName="FormSelect";const hn=At,Mt=a.forwardRef(({bsPrefix:t,className:e,as:o="small",muted:n,...s},r)=>(t=y(t,"form-text"),c.jsx(o,{...s,ref:r,className:h(e,t,n&&"text-muted")})));Mt.displayName="FormText";const gn=Mt,kt=a.forwardRef((t,e)=>c.jsx(Z,{...t,ref:e,type:"switch"}));kt.displayName="Switch";const yn=Object.assign(kt,{Input:Z.Input,Label:Z.Label}),Dt=a.forwardRef(({bsPrefix:t,className:e,children:o,controlId:n,label:s,...r},l)=>(t=y(t,"form-floating"),c.jsxs(Et,{ref:l,className:h(e,t),controlId:n,...r,children:[o,c.jsx("label",{htmlFor:n,children:s})]})));Dt.displayName="FloatingLabel";const wn=Dt,vn={_ref:S.any,validated:S.bool,as:S.elementType},de=a.forwardRef(({className:t,validated:e,as:o="form",...n},s)=>c.jsx(o,{...n,ref:s,className:h(t,e&&"was-validated")}));de.displayName="Form";de.propTypes=vn;const ns=Object.assign(de,{Group:Et,Control:un,Floating:fn,Check:Z,Switch:yn,Label:pn,Text:gn,Range:mn,Select:hn,FloatingLabel:wn}),U={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class Nn extends vo{adjustAndStore(e,o,n){const s=o.style[e];o.dataset[e]=s,G(o,{[e]:`${parseFloat(G(o,e))+n}px`})}restore(e,o){const n=o.dataset[e];n!==void 0&&(delete o.dataset[e],G(o,{[e]:n}))}setContainerStyle(e){super.setContainerStyle(e);const o=this.getElement();if(Eo(o,"modal-open"),!e.scrollBarWidth)return;const n=this.isRTL?"paddingLeft":"paddingRight",s=this.isRTL?"marginLeft":"marginRight";H(o,U.FIXED_CONTENT).forEach(r=>this.adjustAndStore(n,r,e.scrollBarWidth)),H(o,U.STICKY_CONTENT).forEach(r=>this.adjustAndStore(s,r,-e.scrollBarWidth)),H(o,U.NAVBAR_TOGGLER).forEach(r=>this.adjustAndStore(s,r,e.scrollBarWidth))}removeContainerStyle(e){super.removeContainerStyle(e);const o=this.getElement();To(o,"modal-open");const n=this.isRTL?"paddingLeft":"paddingRight",s=this.isRTL?"marginLeft":"marginRight";H(o,U.FIXED_CONTENT).forEach(r=>this.restore(n,r)),H(o,U.STICKY_CONTENT).forEach(r=>this.restore(s,r)),H(o,U.NAVBAR_TOGGLER).forEach(r=>this.restore(s,r))}}let se;function Cn(t){return se||(se=new Nn(t)),se}const St=a.forwardRef(({className:t,bsPrefix:e,as:o="div",...n},s)=>(e=y(e,"modal-body"),c.jsx(o,{ref:s,className:h(t,e),...n})));St.displayName="ModalBody";const $n=St,xn=a.createContext({onHide(){}}),Ot=xn,It=a.forwardRef(({bsPrefix:t,className:e,contentClassName:o,centered:n,size:s,fullscreen:r,children:l,scrollable:d,...i},u)=>{t=y(t,"modal");const f=`${t}-dialog`,p=typeof r=="string"?`${t}-fullscreen-${r}`:`${t}-fullscreen`;return c.jsx("div",{...i,ref:u,className:h(f,e,s&&`${t}-${s}`,n&&`${f}-centered`,d&&`${f}-scrollable`,r&&p),children:c.jsx("div",{className:h(`${t}-content`,o),children:l})})});It.displayName="ModalDialog";const Bt=It,bt=a.forwardRef(({className:t,bsPrefix:e,as:o="div",...n},s)=>(e=y(e,"modal-footer"),c.jsx(o,{ref:s,className:h(t,e),...n})));bt.displayName="ModalFooter";const Rn=bt,jn=a.forwardRef(({closeLabel:t="Close",closeVariant:e,closeButton:o=!1,onHide:n,children:s,...r},l)=>{const d=a.useContext(Ot),i=W(()=>{d==null||d.onHide(),n==null||n()});return c.jsxs("div",{ref:l,...r,children:[s,o&&c.jsx(gt,{"aria-label":t,variant:e,onClick:i})]})}),En=jn,Lt=a.forwardRef(({bsPrefix:t,className:e,closeLabel:o="Close",closeButton:n=!1,...s},r)=>(t=y(t,"modal-header"),c.jsx(En,{ref:r,...s,className:h(e,t),closeLabel:o,closeButton:n})));Lt.displayName="ModalHeader";const Tn=Lt,Fn=ut("h4"),_t=a.forwardRef(({className:t,bsPrefix:e,as:o=Fn,...n},s)=>(e=y(e,"modal-title"),c.jsx(o,{ref:s,className:h(t,e),...n})));_t.displayName="ModalTitle";const An=_t;function Mn(t){return c.jsx(V,{...t,timeout:null})}function kn(t){return c.jsx(V,{...t,timeout:null})}const Ht=a.forwardRef(({bsPrefix:t,className:e,style:o,dialogClassName:n,contentClassName:s,children:r,dialogAs:l=Bt,"aria-labelledby":d,"aria-describedby":i,"aria-label":u,show:f=!1,animation:p=!0,backdrop:g=!0,keyboard:w=!0,onEscapeKeyDown:v,onShow:x,onHide:m,container:R,autoFocus:j=!0,enforceFocus:T=!0,restoreFocus:A=!0,restoreFocusOptions:E,onEntered:N,onExit:C,onExiting:F,onEnter:k,onEntering:D,onExited:b,backdropClassName:L,manager:O,...I},M)=>{const[Yt,qt]=a.useState({}),[Jt,ue]=a.useState(!1),te=a.useRef(!1),oe=a.useRef(!1),z=a.useRef(null),[X,Qt]=No(),Zt=K(M,Qt),fe=W(m),Pt=P();t=y(t,"modal");const eo=a.useMemo(()=>({onHide:fe}),[fe]);function pe(){return O||Cn({isRTL:Pt})}function me($){if(!Ao)return;const _=pe().getScrollbarWidth()>0,ye=$.scrollHeight>Mo($).documentElement.clientHeight;qt({paddingRight:_&&!ye?ve():void 0,paddingLeft:!_&&ye?ve():void 0})}const ne=W(()=>{X&&me(X.dialog)});Co(()=>{we(window,"resize",ne),z.current==null||z.current()});const to=()=>{te.current=!0},oo=$=>{te.current&&X&&$.target===X.dialog&&(oe.current=!0),te.current=!1},he=()=>{ue(!0),z.current=je(X.dialog,()=>{ue(!1)})},no=$=>{$.target===$.currentTarget&&he()},so=$=>{if(g==="static"){no($);return}if(oe.current||$.target!==$.currentTarget){oe.current=!1;return}m==null||m()},ao=$=>{w?v==null||v($):($.preventDefault(),g==="static"&&he())},ro=($,_)=>{$&&me($),k==null||k($,_)},lo=$=>{z.current==null||z.current(),C==null||C($)},co=($,_)=>{D==null||D($,_),Fo(window,"resize",ne)},io=$=>{$&&($.style.display=""),b==null||b($),we(window,"resize",ne)},uo=a.useCallback($=>c.jsx("div",{...$,className:h(`${t}-backdrop`,L,!p&&"show")}),[p,L,t]),ge={...o,...Yt};ge.display="block";const fo=$=>c.jsx("div",{role:"dialog",...$,style:ge,className:h(e,t,Jt&&`${t}-static`,!p&&"show"),onClick:g?so:void 0,onMouseUp:oo,"aria-label":u,"aria-labelledby":d,"aria-describedby":i,children:c.jsx(l,{...I,onMouseDown:to,className:n,contentClassName:s,children:r})});return c.jsx(Ot.Provider,{value:eo,children:c.jsx($o,{show:f,ref:Zt,backdrop:g,container:R,keyboard:!0,autoFocus:j,enforceFocus:T,restoreFocus:A,restoreFocusOptions:E,onEscapeKeyDown:ao,onShow:x,onHide:m,onEnter:ro,onEntering:co,onEntered:N,onExit:lo,onExiting:F,onExited:io,manager:pe(),transition:p?Mn:void 0,backdropTransition:p?kn:void 0,renderBackdrop:uo,renderDialog:fo})})});Ht.displayName="Modal";const ss=Object.assign(Ht,{Body:$n,Header:Tn,Title:An,Footer:Rn,Dialog:Bt,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150}),Ut=a.forwardRef(({className:t,bsPrefix:e,as:o="div",...n},s)=>(e=y(e,"popover-header"),c.jsx(o,{ref:s,className:h(t,e),...n})));Ut.displayName="PopoverHeader";const Dn=Ut,Gt=a.forwardRef(({className:t,bsPrefix:e,as:o="div",...n},s)=>(e=y(e,"popover-body"),c.jsx(o,{ref:s,className:h(t,e),...n})));Gt.displayName="PopoverBody";const Wt=Gt;function Vt(t,e){let o=t;return t==="left"?o=e?"end":"start":t==="right"&&(o=e?"start":"end"),o}function Kt(t="absolute"){return{position:t,top:"0",left:"0",opacity:"0",pointerEvents:"none"}}const Sn=a.forwardRef(({bsPrefix:t,placement:e="right",className:o,style:n,children:s,body:r,arrowProps:l,hasDoneInitialMeasure:d,popper:i,show:u,...f},p)=>{const g=y(t,"popover"),w=P(),[v]=(e==null?void 0:e.split("-"))||[],x=Vt(v,w);let m=n;return u&&!d&&(m={...n,...Kt(i==null?void 0:i.strategy)}),c.jsxs("div",{ref:p,role:"tooltip",style:m,"x-placement":v,className:h(o,g,v&&`bs-popover-${x}`),...f,children:[c.jsx("div",{className:"popover-arrow",...l}),r?c.jsx(Wt,{children:s}):s]})}),On=Object.assign(Sn,{Header:Dn,Body:Wt,POPPER_OFFSET:[0,8]}),zt=a.forwardRef(({bsPrefix:t,placement:e="right",className:o,style:n,children:s,arrowProps:r,hasDoneInitialMeasure:l,popper:d,show:i,...u},f)=>{t=y(t,"tooltip");const p=P(),[g]=(e==null?void 0:e.split("-"))||[],w=Vt(g,p);let v=n;return i&&!l&&(v={...n,...Kt(d==null?void 0:d.strategy)}),c.jsxs("div",{ref:f,style:v,role:"tooltip","x-placement":g,className:h(o,t,`bs-tooltip-${w}`),...u,children:[c.jsx("div",{className:"tooltip-arrow",...r}),c.jsx("div",{className:`${t}-inner`,children:s})]})});zt.displayName="Tooltip";const In=Object.assign(zt,{TOOLTIP_OFFSET:[0,6]});function Bn(t){const e=a.useRef(null),o=y(void 0,"popover"),n=y(void 0,"tooltip"),s=a.useMemo(()=>({name:"offset",options:{offset:()=>{if(t)return t;if(e.current){if(Ne(e.current,o))return On.POPPER_OFFSET;if(Ne(e.current,n))return In.TOOLTIP_OFFSET}return[0,0]}}}),[t,o,n]);return[e,[s]]}function bn(t,e){const{ref:o}=t,{ref:n}=e;t.ref=o.__wrapped||(o.__wrapped=s=>o(Q(s))),e.ref=n.__wrapped||(n.__wrapped=s=>n(Q(s)))}const Xt=a.forwardRef(({children:t,transition:e=V,popperConfig:o={},rootClose:n=!1,placement:s="top",show:r=!1,...l},d)=>{const i=a.useRef({}),[u,f]=a.useState(null),[p,g]=Bn(l.offset),w=K(d,p),v=e===!0?V:e||void 0,x=W(m=>{f(m),o==null||o.onFirstUpdate==null||o.onFirstUpdate(m)});return Re(()=>{u&&l.target&&(i.current.scheduleUpdate==null||i.current.scheduleUpdate())},[u,l.target]),a.useEffect(()=>{r||f(null)},[r]),c.jsx(xo,{...l,ref:w,popperConfig:{...o,modifiers:g.concat(o.modifiers||[]),onFirstUpdate:x},transition:v,rootClose:n,placement:s,show:r,children:(m,{arrowProps:R,popper:j,show:T})=>{var A,E;bn(m,R);const N=j==null?void 0:j.placement,C=Object.assign(i.current,{state:j==null?void 0:j.state,scheduleUpdate:j==null?void 0:j.update,placement:N,outOfBoundaries:(j==null||(A=j.state)==null||(E=A.modifiersData.hide)==null?void 0:E.isReferenceHidden)||!1,strategy:o.strategy}),F=!!u;return typeof t=="function"?t({...m,placement:N,show:T,...!e&&T&&{className:"show"},popper:C,arrowProps:R,hasDoneInitialMeasure:F}):a.cloneElement(t,{...m,placement:N,arrowProps:R,popper:C,hasDoneInitialMeasure:F,className:h(t.props.className,!e&&T&&"show"),style:{...t.props.style,...m.style}})}})});Xt.displayName="Overlay";const Ln=Xt;function _n(t){return t&&typeof t=="object"?t:{show:t,hide:t}}function $e(t,e,o){const[n]=e,s=n.currentTarget,r=n.relatedTarget||n.nativeEvent[o];(!r||r!==s)&&!ko(s,r)&&t(...e)}S.oneOf(["click","hover","focus"]);const Hn=({trigger:t=["hover","focus"],overlay:e,children:o,popperConfig:n={},show:s,defaultShow:r=!1,onToggle:l,delay:d,placement:i,flip:u=i&&i.indexOf("auto")!==-1,...f})=>{const p=a.useRef(null),g=K(p,o.ref),w=Ro(),v=a.useRef(""),[x,m]=jo(s,r,l),R=_n(d),{onFocus:j,onBlur:T,onClick:A}=typeof o!="function"?a.Children.only(o).props:{},E=M=>{g(Q(M))},N=a.useCallback(()=>{if(w.clear(),v.current="show",!R.show){m(!0);return}w.set(()=>{v.current==="show"&&m(!0)},R.show)},[R.show,m,w]),C=a.useCallback(()=>{if(w.clear(),v.current="hide",!R.hide){m(!1);return}w.set(()=>{v.current==="hide"&&m(!1)},R.hide)},[R.hide,m,w]),F=a.useCallback((...M)=>{N(),j==null||j(...M)},[N,j]),k=a.useCallback((...M)=>{C(),T==null||T(...M)},[C,T]),D=a.useCallback((...M)=>{m(!x),A==null||A(...M)},[A,m,x]),b=a.useCallback((...M)=>{$e(N,M,"fromElement")},[N]),L=a.useCallback((...M)=>{$e(C,M,"toElement")},[C]),O=t==null?[]:[].concat(t),I={ref:E};return O.indexOf("click")!==-1&&(I.onClick=D),O.indexOf("focus")!==-1&&(I.onFocus=F,I.onBlur=k),O.indexOf("hover")!==-1&&(I.onMouseOver=b,I.onMouseOut=L),c.jsxs(c.Fragment,{children:[typeof o=="function"?o(I):a.cloneElement(o,I),c.jsx(Ln,{...f,show:x,onHide:C,flip:u,placement:i,popperConfig:n,target:p.current,children:e})]})},as=Hn;export{os as A,Zn as C,Pn as D,ns as F,ss as M,as as O,es as R,Qn as S,Jn as T,zo as a,In as b,gt as c,ts as d};
