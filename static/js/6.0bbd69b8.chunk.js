(this["webpackJsonpcovid-dashboard"]=this["webpackJsonpcovid-dashboard"]||[]).push([[6],{413:function(e,a,t){"use strict";t.r(a);var n=t(24),l=t(155),c=t(0),r=t.n(c),i=t(154),o=t.n(i),s=t(414),u=t(412),d=t(106);function b(e){return{id:"world-info-tab-".concat(e),"aria-controls":"world-info-tabpanel-".concat(e)}}var f=function(e){var a=e.children,t=e.index,n=e.value,c=Object(l.a)(e,["children","index","value"]),i=t===n,s=o()("flex-auto",i?"flex flex-col":null);return r.a.createElement("div",Object.assign({className:s,role:"tabpanel",hidden:!1===i,id:"usa-info-tab-panel-".concat(t),"aria-labelledby":"usa-info-tab-".concat(t)},c),i&&r.a.createElement(r.a.Fragment,null,a))};a.default=function(){var e=Object(c.useState)(0),a=Object(n.a)(e,2),t=a[0],l=a[1],i=Object(c.useRef)();return Object(c.useEffect)((function(){window.dispatchEvent(new CustomEvent("resize")),i.current&&i.current.updateIndicator()}),[t]),r.a.createElement("div",{className:"flex flex-col flex-auto overflow-auto px-16 py-6"},r.a.createElement("div",{className:"usa-tabs"},r.a.createElement(s.a,{action:i,value:t,textColor:"primary",indicatorColor:"primary",centered:!0,onChange:function(e,a){l(a)},"aria-label":"USA Covid-19 tabs"},r.a.createElement(u.a,Object.assign({label:"Map View"},b(0))),r.a.createElement(u.a,Object.assign({label:"History"},b(1))))),r.a.createElement(f,{value:t,index:0},r.a.createElement(d.j,null)),r.a.createElement(f,{value:t,index:1},r.a.createElement(d.i,null)))}}}]);
//# sourceMappingURL=6.0bbd69b8.chunk.js.map