(this.webpackJsonpnavbar=this.webpackJsonpnavbar||[]).push([[14],{183:function(t,e,r){"use strict";r.r(e);var n=r(85),a=r(87),o=r(0),i=r(77),c=r(184),u=Object(c.a)((function(t){return{root:{width:"100vw",height:"100vh",backgroundColor:t.palette.background.default,color:t.palette.secondary}}})),l=Object(i.a)((function(t){var e=t.store,r=u();return Object(o.jsxs)("div",{className:r.root,children:[Object(o.jsx)("br",{}),Object(o.jsxs)(n.a,{maxWidth:"sm",className:r.root,children:[Object(o.jsx)(a.a,{component:"h4",variant:"h2",align:"center",color:"textPrimary",gutterBottom:!0,style:{margin:"5rem"},children:e.setWelcome}),Object(o.jsx)(a.a,{children:e.current.email}),Object(o.jsx)("br",{}),Object(o.jsx)("hr",{}),Object(o.jsx)("br",{}),Object(o.jsx)(a.a,{component:"h6",variant:"h6",align:"center",color:"textPrimary",gutterBottom:!0,style:{marginTop:"2rem"},children:'You can visit the tech stack used at the page "About"'})]})]})}));e.default=l},77:function(t,e,r){"use strict";r.d(e,"a",(function(){return w}));var n=r(1),a=r.n(n),o=!1;function i(){return o}var c=r(3);function u(t){return Object(c.d)(t)}var l="undefined"===typeof FinalizationRegistry?void 0:FinalizationRegistry;function s(t){return{reaction:t,mounted:!1,changedBeforeMount:!1,cleanAt:Date.now()+d}}var d=1e4;var p=function(t){var e="function"===typeof Symbol&&Symbol.iterator,r=e&&t[e],n=0;if(r)return r.call(t);if(t&&"number"===typeof t.length)return{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")};var f=l?function(t){var e=new Map,r=1,n=new t((function(t){var r=e.get(t);r&&(r.reaction.dispose(),e.delete(t))}));return{addReactionToTrack:function(t,a,o){var i=r++;return n.register(o,i,t),t.current=s(a),t.current.finalizationRegistryCleanupToken=i,e.set(i,t.current),t.current},recordReactionAsCommitted:function(t){n.unregister(t),t.current&&t.current.finalizationRegistryCleanupToken&&e.delete(t.current.finalizationRegistryCleanupToken)},forceCleanupTimerToRunNowForTests:function(){},resetCleanupScheduleForTests:function(){}}}(l):function(){var t,e=new Set;function r(){void 0===t&&(t=setTimeout(n,1e4))}function n(){t=void 0;var n=Date.now();e.forEach((function(t){var r=t.current;r&&n>=r.cleanAt&&(r.reaction.dispose(),t.current=null,e.delete(t))})),e.size>0&&r()}return{addReactionToTrack:function(t,n,a){var o;return t.current=s(n),o=t,e.add(o),r(),t.current},recordReactionAsCommitted:function(t){e.delete(t)},forceCleanupTimerToRunNowForTests:function(){t&&(clearTimeout(t),n())},resetCleanupScheduleForTests:function(){var r,n;if(e.size>0){try{for(var a=p(e),o=a.next();!o.done;o=a.next()){var i=o.value,c=i.current;c&&(c.reaction.dispose(),i.current=null)}}catch(u){r={error:u}}finally{try{o&&!o.done&&(n=a.return)&&n.call(a)}finally{if(r)throw r.error}}e.clear()}t&&(clearTimeout(t),t=void 0)}}}(),h=f.addReactionToTrack,b=f.recordReactionAsCommitted,m=(f.resetCleanupScheduleForTests,f.forceCleanupTimerToRunNowForTests,function(t,e){var r="function"===typeof Symbol&&t[Symbol.iterator];if(!r)return t;var n,a,o=r.call(t),i=[];try{for(;(void 0===e||e-- >0)&&!(n=o.next()).done;)i.push(n.value)}catch(c){a={error:c}}finally{try{n&&!n.done&&(r=o.return)&&r.call(o)}finally{if(a)throw a.error}}return i}),y=[];var g=function(t,e){var r="function"===typeof Symbol&&t[Symbol.iterator];if(!r)return t;var n,a,o=r.call(t),i=[];try{for(;(void 0===e||e-- >0)&&!(n=o.next()).done;)i.push(n.value)}catch(c){a={error:c}}finally{try{n&&!n.done&&(r=o.return)&&r.call(o)}finally{if(a)throw a.error}}return i};function v(t){return"observer"+t}var j=function(){};function x(t,e){if(void 0===e&&(e="observed"),i())return t();var r=g(a.a.useState(new j),1)[0],o=function(){var t=m(Object(n.useState)(0),2)[1];return Object(n.useCallback)((function(){t((function(t){return t+1}))}),y)}(),l=a.a.useRef(null);if(!l.current)var s=new c.a(v(e),(function(){d.mounted?o():d.changedBeforeMount=!0})),d=h(l,s,r);var p,f,x=l.current.reaction;if(a.a.useDebugValue(x,u),a.a.useEffect((function(){return b(l),l.current?(l.current.mounted=!0,l.current.changedBeforeMount&&(l.current.changedBeforeMount=!1,o())):(l.current={reaction:new c.a(v(e),(function(){o()})),mounted:!0,changedBeforeMount:!1,cleanAt:1/0},o()),function(){l.current.reaction.dispose(),l.current=null}}),[]),x.track((function(){try{p=t()}catch(e){f=e}})),f)throw f;return p}var O=function(){return(O=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var a in e=arguments[r])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}).apply(this,arguments)};function w(t,e){if(i())return t;var r,a,o,c=O({forwardRef:!1},e),u=t.displayName||t.name,l=function(e,r){return x((function(){return t(e,r)}),u)};return l.displayName=u,r=c.forwardRef?Object(n.memo)(Object(n.forwardRef)(l)):Object(n.memo)(l),a=t,o=r,Object.keys(a).forEach((function(t){k[t]||Object.defineProperty(o,t,Object.getOwnPropertyDescriptor(a,t))})),r.displayName=u,r}var k={$$typeof:!0,render:!0,compare:!0,type:!0}},85:function(t,e,r){"use strict";var n=r(6),a=r(27),o=r(37),i=r(1),c=(r(26),r(28)),u=r(29),l=r(31),s=i.forwardRef((function(t,e){var r=t.classes,o=t.className,u=t.component,s=void 0===u?"div":u,d=t.disableGutters,p=void 0!==d&&d,f=t.fixed,h=void 0!==f&&f,b=t.maxWidth,m=void 0===b?"lg":b,y=Object(a.a)(t,["classes","className","component","disableGutters","fixed","maxWidth"]);return i.createElement(s,Object(n.a)({className:Object(c.a)(r.root,o,h&&r.fixed,p&&r.disableGutters,!1!==m&&r["maxWidth".concat(Object(l.a)(String(m)))]),ref:e},y))}));e.a=Object(u.a)((function(t){return{root:Object(o.a)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:t.spacing(2),paddingRight:t.spacing(2),display:"block"},t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}),disableGutters:{paddingLeft:0,paddingRight:0},fixed:Object.keys(t.breakpoints.values).reduce((function(e,r){var n=t.breakpoints.values[r];return 0!==n&&(e[t.breakpoints.up(r)]={maxWidth:n}),e}),{}),maxWidthXs:Object(o.a)({},t.breakpoints.up("xs"),{maxWidth:Math.max(t.breakpoints.values.xs,444)}),maxWidthSm:Object(o.a)({},t.breakpoints.up("sm"),{maxWidth:t.breakpoints.values.sm}),maxWidthMd:Object(o.a)({},t.breakpoints.up("md"),{maxWidth:t.breakpoints.values.md}),maxWidthLg:Object(o.a)({},t.breakpoints.up("lg"),{maxWidth:t.breakpoints.values.lg}),maxWidthXl:Object(o.a)({},t.breakpoints.up("xl"),{maxWidth:t.breakpoints.values.xl})}}),{name:"MuiContainer"})(s)},87:function(t,e,r){"use strict";var n=r(6),a=r(27),o=r(1),i=(r(26),r(28)),c=r(29),u=r(31),l={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},s=o.forwardRef((function(t,e){var r=t.align,c=void 0===r?"inherit":r,s=t.classes,d=t.className,p=t.color,f=void 0===p?"initial":p,h=t.component,b=t.display,m=void 0===b?"initial":b,y=t.gutterBottom,g=void 0!==y&&y,v=t.noWrap,j=void 0!==v&&v,x=t.paragraph,O=void 0!==x&&x,w=t.variant,k=void 0===w?"body1":w,T=t.variantMapping,R=void 0===T?l:T,W=Object(a.a)(t,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","variant","variantMapping"]),S=h||(O?"p":R[k]||l[k])||"span";return o.createElement(S,Object(n.a)({className:Object(i.a)(s.root,d,"inherit"!==k&&s[k],"initial"!==f&&s["color".concat(Object(u.a)(f))],j&&s.noWrap,g&&s.gutterBottom,O&&s.paragraph,"inherit"!==c&&s["align".concat(Object(u.a)(c))],"initial"!==m&&s["display".concat(Object(u.a)(m))]),ref:e},W))}));e.a=Object(c.a)((function(t){return{root:{margin:0},body2:t.typography.body2,body1:t.typography.body1,caption:t.typography.caption,button:t.typography.button,h1:t.typography.h1,h2:t.typography.h2,h3:t.typography.h3,h4:t.typography.h4,h5:t.typography.h5,h6:t.typography.h6,subtitle1:t.typography.subtitle1,subtitle2:t.typography.subtitle2,overline:t.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:t.palette.primary.main},colorSecondary:{color:t.palette.secondary.main},colorTextPrimary:{color:t.palette.text.primary},colorTextSecondary:{color:t.palette.text.secondary},colorError:{color:t.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}}),{name:"MuiTypography"})(s)}}]);
//# sourceMappingURL=14.6bf09522.chunk.js.map