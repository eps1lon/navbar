(this.webpackJsonpnavbar=this.webpackJsonpnavbar||[]).push([[17],{149:function(e,t,r){"use strict";var a=r(5),n=r(26),c=r(1),s=(r(25),r(27)),i=r(28),o=r(39),l=Object(o.a)(c.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var u=c.forwardRef((function(e,t){var r=e.alt,i=e.children,o=e.classes,u=e.className,d=e.component,f=void 0===d?"div":d,p=e.imgProps,m=e.sizes,b=e.src,h=e.srcSet,j=e.variant,g=void 0===j?"circle":j,v=Object(n.a)(e,["alt","children","classes","className","component","imgProps","sizes","src","srcSet","variant"]),x=null,y=function(e){var t=e.src,r=e.srcSet,a=c.useState(!1),n=a[0],s=a[1];return c.useEffect((function(){if(t||r){s(!1);var e=!0,a=new Image;return a.src=t,a.srcSet=r,a.onload=function(){e&&s("loaded")},a.onerror=function(){e&&s("error")},function(){e=!1}}}),[t,r]),n}({src:b,srcSet:h}),O=b||h,k=O&&"error"!==y;return x=k?c.createElement("img",Object(a.a)({alt:r,src:b,srcSet:h,sizes:m,className:o.img},p)):null!=i?i:O&&r?r[0]:c.createElement(l,{className:o.fallback}),c.createElement(f,Object(a.a)({className:Object(s.a)(o.root,o.system,o[g],u,!k&&o.colorDefault),ref:t},v),x)}));t.a=Object(i.a)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},colorDefault:{color:e.palette.background.default,backgroundColor:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600]},circle:{},circular:{},rounded:{borderRadius:e.shape.borderRadius},square:{borderRadius:0},img:{width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4},fallback:{width:"75%",height:"75%"}}}),{name:"MuiAvatar"})(u)},193:function(e,t,r){"use strict";r.r(t);var a=r(191),n=r(195),c=r(61),s=r(147),i=r(112),o=r(194),l=r(149),u=r(2),d=r.n(u),f=r(88),p=r(4),m=r(0),b=r(1),h=r(79),j=r(3),g=r(9),v=r(186),x=Object(b.lazy)((function(){return r.e(15).then(r.bind(null,114))})),y=Object(v.a)((function(e){return{root:{width:"100vw",backgroundColor:e.palette.background.paper},paper:{textAlign:"center",color:e.palette.text.secondary,direction:"column",display:"flex",justifyContent:"center",alignItems:"center",padding:"0px 0px 0px 15px"},listItem:{display:"flex",justifyContent:"center",alignItems:"center"}}})),O={bgcolor:"background.paper",borderColor:"text.primary",m:1,border:1,style:{padding:"1rem",height:"3rem",backgroundColor:"#424242",width:"16rem"},display:"flex",alignItems:"center",justifyContent:"center",margin:"10px"},k=Object(h.a)((function(e){var t=e.store,r=y();Object(b.useEffect)((function(){Object(j.b)(function(){var e=Object(p.a)(d.a.mark((function e(r){var a,n,c,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=Array.from(t.users,(function(e){return e.email})),n=Object(f.a)(r);try{for(n.s();!(c=n.n()).done;)s=c.value,a.includes(s.email)||t.addUser(s)}catch(i){n.e(i)}finally{n.f()}case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[t]);var u=function(e){e.preventDefault(),g.a.push({pathname:e.currentTarget.pathname})};return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{children:t.token&&Object(m.jsx)(b.Suspense,{children:Object(m.jsx)(x,{token:t.token})})}),Object(m.jsx)("div",{className:r.root,children:t.users&&t.users.map((function(e,t){return Object(m.jsxs)(a.a,{spacing:2,className:r.paper,children:[Object(m.jsx)(o.a,{xs:2,className:r.listItem,children:Object(m.jsx)(l.a,{alt:e.last_name,src:e.avatar,loading:"lazy"})}),Object(m.jsx)(n.a,{xs:8,className:r.listItem,style:{width:"16rem"},children:Object(m.jsx)(s.a,Object(c.a)(Object(c.a)({},O),{},{borderRadius:16,border:2,children:Object(m.jsx)(i.a,{href:"/contacts/".concat(e.email),onClick:u,style:{color:"#fff"},children:e.email})}))})]},e.email)}))})]})}));t.default=k}}]);
//# sourceMappingURL=17.d4f168aa.chunk.js.map