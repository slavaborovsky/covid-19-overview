(this["webpackJsonpcovid-dashboard"]=this["webpackJsonpcovid-dashboard"]||[]).push([[4],{315:function(e,t,a){"use strict";a.r(t);var r=a(141);a.d(t,"default",(function(){return r.a}))},356:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},357:function(e,t,a){"use strict";var r=a(356);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var a=o.default.memo(o.default.forwardRef((function(t,a){return o.default.createElement(c.default,(0,n.default)({ref:a},t),e)})));0;return a.muiName=c.default.muiName,a};var n=r(a(363)),o=r(a(0)),c=r(a(315))},358:function(e,t,a){"use strict";a.d(t,"a",(function(){return r.a})),a.d(t,"b",(function(){return o}));var r=a(131),n=a(70),o=function(){var e=Object(n.g)().search;return new URLSearchParams(e)}},361:function(e,t,a){e.exports={scrollToTop:"styles_scrollToTop__2KH7Z"}},362:function(e,t,a){"use strict";var r=a(356);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(0)),o=(0,r(a(357)).default)(n.default.createElement("path",{d:"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"}),"ArrowDownward");t.default=o},363:function(e,t){function a(){return e.exports=a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},a.apply(this,arguments)}e.exports=a},364:function(e,t,a){"use strict";var r=a(356);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(0)),o=(0,r(a(357)).default)(n.default.createElement("path",{d:"M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"}),"ArrowUpward");t.default=o},365:function(e,t,a){"use strict";var r=a(356);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(0)),o=(0,r(a(357)).default)(n.default.createElement("path",{d:"M7 14l5-5 5 5z"}),"ArrowDropUp");t.default=o},372:function(e,t,a){"use strict";a.r(t);var r=a(76),n=a(31),o=a(0),c=a.n(o),l=a(60),i=a(56),s=a.n(i),d=a(132),u=a.n(d);function p(e,t,a,r){var n,o=!1,c=0;function l(){n&&clearTimeout(n)}function i(){var i=this,s=Date.now()-c,d=arguments;function u(){c=Date.now(),a.apply(i,d)}function p(){n=void 0}o||(r&&!n&&u(),l(),void 0===r&&s>e?u():!0!==t&&(n=setTimeout(r?p:u,void 0===r?e-s:e)))}return"boolean"!==typeof t&&(r=a,a=t,t=void 0),i.cancel=function(){l(),o=!0},i}var m=a(51),b=a(5),f=a(1),h=(a(8),a(7)),x=a(14),v=a(20),g=a(180),y=a(18),E=o.forwardRef((function(e,t){var a=e.children,r=e.classes,n=e.className,c=e.color,l=void 0===c?"default":c,i=e.component,s=void 0===i?"button":i,d=e.disabled,u=void 0!==d&&d,p=e.disableElevation,m=void 0!==p&&p,x=e.disableFocusRipple,v=void 0!==x&&x,E=e.endIcon,O=e.focusVisibleClassName,w=e.fullWidth,S=void 0!==w&&w,j=e.size,k=void 0===j?"medium":j,C=e.startIcon,N=e.type,z=void 0===N?"button":N,T=e.variant,L=void 0===T?"text":T,R=Object(b.a)(e,["children","classes","className","color","component","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"]),M=C&&o.createElement("span",{className:Object(h.a)(r.startIcon,r["iconSize".concat(Object(y.a)(k))])},C),_=E&&o.createElement("span",{className:Object(h.a)(r.endIcon,r["iconSize".concat(Object(y.a)(k))])},E);return o.createElement(g.a,Object(f.a)({className:Object(h.a)(r.root,r[L],n,"inherit"===l?r.colorInherit:"default"!==l&&r["".concat(L).concat(Object(y.a)(l))],"medium"!==k&&[r["".concat(L,"Size").concat(Object(y.a)(k))],r["size".concat(Object(y.a)(k))]],m&&r.disableElevation,u&&r.disabled,S&&r.fullWidth),component:s,disabled:u,focusRipple:!v,focusVisibleClassName:Object(h.a)(r.focusVisible,O),ref:t,type:z},R),o.createElement("span",{className:r.label},M,a,_))})),O=Object(x.a)((function(e){return{root:Object(f.a)({},e.typography.button,{boxSizing:"border-box",minWidth:64,padding:"6px 16px",borderRadius:e.shape.borderRadius,color:e.palette.text.primary,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),"&:hover":{textDecoration:"none",backgroundColor:Object(v.c)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"},"&$disabled":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},text:{padding:"6px 8px"},textPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(v.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},textSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(v.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlined:{padding:"5px 15px",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$disabled":{border:"1px solid ".concat(e.palette.action.disabledBackground)}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(Object(v.c)(e.palette.primary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.primary.main),backgroundColor:Object(v.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(Object(v.c)(e.palette.secondary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.secondary.main),backgroundColor:Object(v.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},contained:{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2],"&:hover":{backgroundColor:e.palette.grey.A100,boxShadow:e.shadows[4],"@media (hover: none)":{boxShadow:e.shadows[2],backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},"&$focusVisible":{boxShadow:e.shadows[6]},"&:active":{boxShadow:e.shadows[8]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}},containedPrimary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},containedSecondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},disableElevation:{boxShadow:"none","&:hover":{boxShadow:"none"},"&$focusVisible":{boxShadow:"none"},"&:active":{boxShadow:"none"},"&$disabled":{boxShadow:"none"}},focusVisible:{},disabled:{},colorInherit:{color:"inherit",borderColor:"currentColor"},textSizeSmall:{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},textSizeLarge:{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},outlinedSizeSmall:{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},outlinedSizeLarge:{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},containedSizeSmall:{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},containedSizeLarge:{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},sizeSmall:{},sizeLarge:{},fullWidth:{width:"100%"},startIcon:{display:"inherit",marginRight:8,marginLeft:-4,"&$iconSizeSmall":{marginLeft:-2}},endIcon:{display:"inherit",marginRight:-4,marginLeft:8,"&$iconSizeSmall":{marginRight:-2}},iconSizeSmall:{"& > *:first-child":{fontSize:18}},iconSizeMedium:{"& > *:first-child":{fontSize:20}},iconSizeLarge:{"& > *:first-child":{fontSize:22}}}}),{name:"MuiButton"})(E),w=a(351),S=a(350),j=a(352),k=a(362),C=a.n(k),N=a(364),z=a.n(N),T=a(365),L=a.n(T),R=a(91),M=a(358),_=a(140),I=a(361),F=a.n(I);t.default=function(){var e,t,a,i=Object(m.b)("all"),d=i.data,b=i.error,f=Object(M.a)(),h=f.data,x=f.updatedAt,v=f.error,g=Object(o.useRef)(),y=Object(o.useState)({infected:5,deaths:5,recovers:5}),E=Object(n.a)(y,2),k=E[0],N=E[1],T=Object(o.useState)({infected:"desc",deaths:"desc",recovers:"desc"}),I=Object(n.a)(T,2),$=I[0],V=I[1],P=Object(o.useState)(!1),D=Object(n.a)(P,2),A=D[0],H=D[1],W=Object(o.useCallback)((e=150,t=function(){g.current.scrollTop>250?H(!0):H(!1)},void 0===a?p(e,t,!1):p(e,a,!1!==t)),[]);Object(o.useEffect)((function(){return g.current.addEventListener("scroll",W),function(){console.log("Here!"),window.removeEventListener("scroll",W)}}),[W]);var B=Object(o.useMemo)((function(){return h.slice().sort(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"desc";return Object(_.b)({accessor:function(e){return e.cases},desc:"desc"===e})}($.infected))}),[h,$.infected]),U=Object(o.useMemo)((function(){return h.slice().sort(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"desc";return Object(_.b)({accessor:function(e){return e.deaths},desc:"desc"===e})}($.deaths))}),[h,$.deaths]),J=Object(o.useMemo)((function(){return h.slice().sort(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"desc";return Object(_.b)({accessor:function(e){return e.recovered},desc:"desc"===e})}($.recovers))}),[h,$.recovers]),G=c.a.createElement("p",{className:"text-error text-2xl"},"Global data error!"),K=c.a.createElement("p",{className:"text-sm opacity-60 text-default mb-1"},"Last update: ",x.toLocaleTimeString()," ",x.toLocaleDateString()),Z=c.a.createElement("p",{className:"text-error text-base"},"Top data list error!"),q=function(e){var t=e.country,a=e.iso3;return c.a.createElement(l.b,{to:"/countries?iso3=".concat(a),className:"text-2xl text-default cursor-pointer hover:underline hover:font-semibold"},t)};return c.a.createElement("div",{className:"flex-auto overflow-y-auto",ref:g},c.a.createElement("div",{className:"grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-12 xl:gap-16 min-h-full py-12 px-16 text-center"},c.a.createElement(R.a,{classes:"col-span-2"},{renderHeader:function(){return c.a.createElement(c.a.Fragment,null,"Infected",c.a.createElement(w.a,{onClick:function(){V((function(e){return Object(r.a)({},e,{infected:"desc"===$.infected?"asc":"desc"})})),N((function(e){return Object(r.a)({},e,{infected:5})}))}},"desc"===$.infected?c.a.createElement(C.a,null):c.a.createElement(z.a,null)))},renderCount:function(){return b?G:d&&d.cases?c.a.createElement(c.a.Fragment,null,c.a.createElement("p",{className:"text-warning text-2xl"},c.a.createElement(s.a,{start:0,end:d.cases,duration:1.5,separator:","})),K):c.a.createElement("p",{className:"text-base text-on-card"},"Loading cases...")},renderList:function(){return v?Z:B&&B.length>0?c.a.createElement(c.a.Fragment,null,c.a.createElement(S.a,null,B.slice(0,k.infected).map((function(e){return c.a.createElement(j.a,{className:"shadow-inner px-4 py-2 flex flex-col",key:e.country},q(e),c.a.createElement("p",{className:"text-center break-all"},c.a.createElement("span",{className:"text-base text-warning whitespace-no-wrap"},"Total: ",c.a.createElement(s.a,{start:0,end:e.cases,duration:1.5,separator:","})),c.a.createElement("span",{className:"mx-2 text-default"},"|"),c.a.createElement("span",{className:"text-base text-warning whitespace-no-wrap"},"Today: ",c.a.createElement(s.a,{start:0,end:e.todayCases,duration:1.5,separator:","}))))}))),k.infected<h.length&&c.a.createElement(O,{onClick:function(){return N((function(e){return Object(r.a)({},e,{infected:2*e.infected})}))}},"Show More")):null}}),c.a.createElement(R.a,{classes:"col-span-2"},{renderHeader:function(){return c.a.createElement(c.a.Fragment,null,"Deaths",c.a.createElement(w.a,{onClick:function(){V((function(e){return Object(r.a)({},e,{deaths:"desc"===$.deaths?"asc":"desc"})})),N((function(e){return Object(r.a)({},e,{deaths:5})}))}},"desc"===$.deaths?c.a.createElement(C.a,null):c.a.createElement(z.a,null)))},renderCount:function(){return b?G:d&&d.deaths?c.a.createElement(c.a.Fragment,null,c.a.createElement("p",{className:"text-error text-2xl"},c.a.createElement(s.a,{start:0,end:d.deaths,duration:1.5,separator:","})),K):c.a.createElement("p",{className:"text-base text-on-card"},"Loading deaths...")},renderList:function(){return v?Z:U&&U.length>0?c.a.createElement(c.a.Fragment,null,c.a.createElement(S.a,null,U.slice(0,k.deaths).map((function(e){return c.a.createElement(j.a,{className:"shadow-inner px-4 py-2 flex flex-col",key:e.country},q(e),c.a.createElement("p",{className:"text-center break-all"},c.a.createElement("span",{className:"text-base text-error whitespace-no-wrap"},"Total: ",c.a.createElement(s.a,{start:0,end:e.deaths,duration:1.5,separator:","})),c.a.createElement("span",{className:"mx-2 text-default"},"|"),c.a.createElement("span",{className:"text-base text-error whitespace-no-wrap"},"Today: ",c.a.createElement(s.a,{start:0,end:e.todayDeaths,duration:1.5,separator:","}))))}))),k.deaths<h.length&&c.a.createElement(O,{onClick:function(){return N((function(e){return Object(r.a)({},e,{deaths:2*e.deaths})}))}},"Show More")):null}}),c.a.createElement(R.a,{classes:"col-span-2 col-start-1 md:col-start-2 xl:col-start-5"},{renderHeader:function(){return c.a.createElement(c.a.Fragment,null,"Recovers",c.a.createElement(w.a,{onClick:function(){V((function(e){return Object(r.a)({},e,{recovers:"desc"===$.recovers?"asc":"desc"})})),N((function(e){return Object(r.a)({},e,{recovers:5})}))}},"desc"===$.recovers?c.a.createElement(C.a,null):c.a.createElement(z.a,null)))},renderCount:function(){return b?G:d&&d.recovered?c.a.createElement(c.a.Fragment,null,c.a.createElement("p",{className:"text-success text-2xl"},c.a.createElement(s.a,{start:0,end:d.recovered,duration:1.5,separator:","})),K):c.a.createElement("p",{className:"text-base text-on-card"},"Loading recovers...")},renderList:function(){return v?Z:J&&J.length>0?c.a.createElement(c.a.Fragment,null,c.a.createElement(S.a,null,J.slice(0,k.recovers).map((function(e){return c.a.createElement(j.a,{className:"shadow-inner px-4 py-2 flex flex-col",key:e.country},q(e),c.a.createElement("p",{className:"text-center break-all"},c.a.createElement("span",{className:"text-base text-success whitespace-no-wrap"},"Total: ",c.a.createElement(s.a,{start:0,end:e.recovered,duration:1.5,separator:","})),c.a.createElement("span",{className:"mx-2 text-default"},"|"),c.a.createElement("span",{className:"text-base text-error whitespace-no-wrap"},"Critical: ",c.a.createElement(s.a,{start:0,end:e.critical,duration:1.5,separator:","}))))}))),k.recovers<h.length&&c.a.createElement(O,{onClick:function(){return N((function(e){return Object(r.a)({},e,{recovers:2*e.recovers})}))}},"Show More")):null}})),A&&c.a.createElement("div",{className:u()(F.a.scrollToTop,"fixed z-50 cursor-pointer")},c.a.createElement(w.a,{onClick:function(){g.current.scrollTo(0,0),H(!1)},color:"secondary"},c.a.createElement(L.a,{fontSize:"large"}))))}}}]);
//# sourceMappingURL=4.db0e46cc.chunk.js.map