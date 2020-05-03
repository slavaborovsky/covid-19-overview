(this["webpackJsonpcovid-dashboard"]=this["webpackJsonpcovid-dashboard"]||[]).push([[0],{100:function(e,t,a){},104:function(e,t,a){},109:function(e,t,a){},129:function(e,t,a){},130:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(10),c=a.n(o),l=(a(100),a(11)),i=a(68),s=a.n(i),d=a(42),u=a(30),m=a(27),p=a(170),v=a(34),f=a.n(v),h=a(79),x=a(43),b=a(57),g=a(86),y=Object(g.a)({palette:{primary:{main:"rgb(var(--mui-primary-rgb))",contrastText:"rgb(var(--mui-on-primary-rgb))"},secondary:{main:"rgb(var(--mui-secondary-rgb))",contrastText:"rgb(var(--mui-on-secondary-rgb))"}},overrides:{MuiButton:{root:{border:0,height:40,minWidth:64,padding:"8px 12px",boxShadow:"var(--covid-btn-box-shadow)"},text:{backgroundColor:"var(--covid-primary)",color:"var(--covid-on-primary)","&:hover":{color:"var(--covid-primary)",backgroundColor:"var(--covid-on-primary)",border:"1px solid var(--covid-primary)"}},textPrimary:{backgroundColor:"var(--covid-primary)",color:"var(--covid-on-primary)","&:hover":{color:"var(--covid-primary)",backgroundColor:"var(--covid-on-primary)",border:"1px solid var(--covid-primary)"}},textSecondary:{backgroundColor:"var(--covid-secondary)",color:"var(--covid-on-secondary)","&:hover":{color:"var(--covid-secondary)",backgroundColor:"var(--covid-on-secondary)",border:"1px solid var(--covid-secondary)"}},outlined:{color:"var(--covid-primary)"},contained:{backgroundColor:"var(--covid-primary)",color:"var(--covid-on-primary)","&:hover":{color:"var(--covid-primary)",backgroundColor:"var(--covid-on-primary)",border:"1px solid var(--covid-primary)"}},containedPrimary:{"&:hover":{color:"var(--covid-primary)",backgroundColor:"var(--covid-on-primary)",border:"1px solid var(--covid-primary)"}},containedSecondary:{"&:hover":{color:"var(--covid-secondary)",backgroundColor:"var(--covid-on-secondary)",border:"1px solid var(--covid-secondary)"}}}}});a(129);f.a.registerLocale(h);var E=n.a.lazy((function(){return a.e(4).then(a.bind(null,175))})),w=n.a.lazy((function(){return a.e(3).then(a.bind(null,176))})),N={refreshInterval:6e4,fetcher:b.b,suspense:!0},C={refreshInterval:6e4,fetcher:b.b,suspense:!0};var O=function(){var e=Object(r.useState)("light"),t=Object(l.a)(e,2),a=t[0],o=t[1],c=s()("covid-".concat(a,"-theme"),"bg-body","font-body","h-screen","min-h-full","flex","flex-col");return n.a.createElement(p.a,{theme:y},n.a.createElement(u.a,{basename:"/"},n.a.createElement("div",{className:c},n.a.createElement(x.e,{onThemeChange:function(e){o(e?"dark":"light")}}),n.a.createElement(r.Suspense,{fallback:n.a.createElement(x.f,{text:"Loading..."})},n.a.createElement(m.d,null,n.a.createElement(m.b,{exact:!0,path:"/"},n.a.createElement(m.a,{to:{pathname:"/dashboard"}})),n.a.createElement(m.b,{path:"/dashboard"},n.a.createElement(d.a,{value:N},n.a.createElement(E,null))),n.a.createElement(m.b,{path:"/countries"},n.a.createElement(d.a,{value:C},n.a.createElement(w,null))),n.a.createElement(m.b,{path:"*"},n.a.createElement(x.f,{text:"Not Found..."})))),n.a.createElement(x.d,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},35:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return o}));var r=a(87),n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.accessor,a=void 0===t?function(e){return e}:t,r=e.desc,n=void 0===r||r;return function(e,t){return n?a(t)-a(e):a(e)-a(t)}},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.accessor,a=void 0===t?function(e){return e}:t,n=e.locales,o=Object(r.a)(e,["accessor","locales"]);return function(e,t){return a(e).localeCompare(a(t),n,o)}}},43:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"e",(function(){return l})),a.d(t,"d",(function(){return i})),a.d(t,"f",(function(){return u})),a.d(t,"c",(function(){return g})),a.d(t,"b",(function(){return j}));var r=a(0),n=a.n(r),o=function(e){var t=e.header,a=e.subheader,r=e.children,o=r.renderCount,c=r.renderList;return n.a.createElement("div",{className:"bg-card shadow-2xl text-center p-4 rounded-lg"},n.a.createElement("h3",{className:"text-3xl text-on-card opacity-80"},t),a&&n.a.createElement("h3",{className:"text-2xl text-on-card font-bold mb-2"},a),o(),c())},c=a(30),l=(a(104),function(e){var t=e.onThemeChange;return n.a.createElement("header",{className:"app-header bg-header w-full px-16 border-b-2 border-on-primary flex flex-row items-center"},n.a.createElement(c.b,{to:"/",className:"text-lg md:text-xl lg:text-2xl text-on-header mr-8"},"COVID-19"),n.a.createElement("div",{className:"flex align-middle app-header__navigation"},n.a.createElement(c.c,{to:"/dashboard",activeClassName:"active"},"Dashboard"),n.a.createElement(c.c,{to:"/countries",activeClassName:"active"},"Countries")),n.a.createElement("div",{className:"flex items-center ml-auto"},n.a.createElement("label",{className:"inline-block relative h-6 w-12 font-bold",htmlFor:"checkbox"},n.a.createElement("input",{type:"checkbox",id:"checkbox",className:"themeSwitchCheckbox hidden",onChange:function(e){return t(e.target.checked)}}),n.a.createElement("div",{className:"themeSwitchSlider bg-white inset-0 cursor-pointer absolute rounded-full transition-500"})),n.a.createElement("em",{className:"ml-5 text-sm text-on-header"},"Enable Dark Mode")))}),i=(a(109),function(){var e=new Date;return n.a.createElement("footer",{className:"app-footer bg-footer shadow-inner flex justify-center text-center"},n.a.createElement("p",{className:"text-sm text-on-footer my-auto"},"Powered by Vyacheslav Borovsky, ",e.getFullYear()))}),s=a(46),d=a.n(s),u=function(e){var t=e.text;return n.a.createElement("div",{className:"flex-auto flex flex-col justify-center items-center"},n.a.createElement("svg",{xmlnssvg:"http://www.w3.org/2000/svg",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",version:"1.0",width:"150px",height:"150px",viewBox:"0 0 128 128",xmlSpace:"preserve"},n.a.createElement("g",{transform:"rotate(196.66 64 64)"},n.a.createElement("linearGradient",{id:"linear-gradient"},n.a.createElement("stop",{offset:"0%",className:d.a.gradientColor,fillOpacity:"1"}),n.a.createElement("stop",{offset:"100%",className:d.a.gradientPrimaryColor,fillOpacity:"0.56"})),n.a.createElement("linearGradient",{id:"linear-gradient2"},n.a.createElement("stop",{offset:"0%",className:d.a.gradientColor,fillOpacity:"1"}),n.a.createElement("stop",{offset:"100%",className:d.a.gradientSecondaryColor,fillOpacity:"0.19"})),n.a.createElement("path",{d:"M64 .98A63.02 63.02 0 1 1 .98 64 63.02 63.02 0 0 1 64 .98zm0 15.76A47.26 47.26 0 1 1 16.74 64 47.26 47.26 0 0 1 64 16.74z",fillRule:"evenodd",fill:"url(#linear-gradient)"}),n.a.createElement("path",{d:"M64.12 125.54A61.54 61.54 0 1 1 125.66 64a61.54 61.54 0 0 1-61.54 61.54zm0-121.1A59.57 59.57 0 1 0 123.7 64 59.57 59.57 0 0 0 64.1 4.43zM64 115.56a51.7 51.7 0 1 1 51.7-51.7 51.7 51.7 0 0 1-51.7 51.7zM64 14.4a49.48 49.48 0 1 0 49.48 49.48A49.48 49.48 0 0 0 64 14.4z",fillRule:"evenodd",fill:"url(#linear-gradient2)"}),n.a.createElement("animateTransform",{attributeName:"transform",type:"rotate",from:"0 64 64",to:"360 64 64",dur:"500ms",repeatCount:"indefinite"}))),t&&n.a.createElement("p",{className:"text-default text-center text-2xl mt-3"},t))},m=a(54),p=a(172),v=a(171),f=a(35),h=a(5),x=Object(f.a)({accessor:function(e){return e.name}}),b=Object(h.a)({root:{"& label":{color:"var(--covid-default)"},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"var(--covid-default)"},"&:hover fieldset":{borderColor:"var(--covid-primary)"},"& .MuiOutlinedInput-input":{color:"var(--covid-default)"},"& .MuiIconButton-root":{color:"var(--covid-default)","&:hover":{backgroundColor:"var(--mui-icon-hover)"}}}}})(v.a),g=function(e){var t=e.countries,a=e.selected,o=e.onSelect,c=Object(r.useMemo)((function(){return(t||[]).slice().sort(x)}),[t]);return n.a.createElement(p.a,{value:a,onChange:function(e,t){return o(t)},options:c,style:{minWidth:300},autoHighlight:!0,blurOnSelect:!0,getOptionLabel:function(e){return e.name},renderOption:function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("span",{className:"mr-2"},e.iso2),n.a.createElement("span",{className:"text-info"},e.name))},renderInput:function(e){return n.a.createElement(b,Object.assign({},e,{color:"primary",label:"Select a country",variant:"outlined",inputProps:Object(m.a)({},e.inputProps,{autoComplete:"new-password"})}))}})},y=a(11),E=a(23),w=a.n(E),N=a(168),C=a(169),O=a(60),k=Object(h.a)({root:{padding:"1em"}})(C.a),j=function(e){var t=e.selected,a=Object(O.a)().data,o=Object(r.useState)(null),c=Object(y.a)(o,2),l=c[0],i=c[1];return Object(r.useEffect)((function(){if(t&&a){var e=a.initialData.find((function(e){var a=e.iso3;return t.iso3===a}));e&&i(e)}}),[a,t]),n.a.createElement("div",{className:"bg-card shadow-2xl rounded-lg flex flex-col justify-center"},t&&l?n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",{className:"text-default text-center text-2xl my-3"},"Overview Information:"),n.a.createElement(N.a,null,n.a.createElement(k,{className:"border border-default flex flex-col shadow-inner"},n.a.createElement("p",{className:"text-center"},n.a.createElement("span",{className:"text-lg text-warning whitespace-no-wrap"},"Infected: ",n.a.createElement(w.a,{start:0,end:l.cases,duration:1.5,separator:","})),n.a.createElement("span",{className:"mx-2 text-default"},"|"),n.a.createElement("span",{className:"text-lg text-warning whitespace-no-wrap"},"Today: ",n.a.createElement(w.a,{start:0,end:l.todayCases,duration:1.5,separator:","})),n.a.createElement("span",{className:"mx-2 text-default"},"|"),n.a.createElement("span",{className:"text-lg text-warning whitespace-no-wrap"},"Active: ",n.a.createElement(w.a,{start:0,end:l.active,duration:1.5,separator:","})))),n.a.createElement(k,{className:"border border-default flex flex-col shadow-inner"},n.a.createElement("p",{className:"text-center"},n.a.createElement("span",{className:"text-lg text-error whitespace-no-wrap"},"Deaths: ",n.a.createElement(w.a,{start:0,end:l.deaths,duration:1.5,separator:","})),n.a.createElement("span",{className:"mx-2 text-default"},"|"),n.a.createElement("span",{className:"text-lg text-error whitespace-no-wrap"},"Today: ",n.a.createElement(w.a,{start:0,end:l.todayDeaths,duration:1.5,separator:","})),n.a.createElement("span",{className:"mx-2 text-default"},"|"),n.a.createElement("span",{className:"text-lg text-error whitespace-no-wrap"},"Critical: ",n.a.createElement(w.a,{start:0,end:l.critical,duration:1.5,separator:","})))),n.a.createElement(k,{className:"border border-default flex flex-col shadow-inner"},n.a.createElement("p",{className:"text-center"},n.a.createElement("span",{className:"text-lg text-success whitespace-no-wrap"},"Recovered: ",n.a.createElement(w.a,{start:0,end:l.recovered,duration:1.5,separator:","})))),n.a.createElement(k,{className:"border border-default flex flex-col shadow-inner"},n.a.createElement("p",{className:"text-center"},n.a.createElement("span",{className:"text-lg text-info whitespace-no-wrap"},"Total tests: ",n.a.createElement(w.a,{start:0,end:l.totalTests,duration:1.5,separator:","})),n.a.createElement("span",{className:"mx-2 text-default"},"|"),n.a.createElement("span",{className:"text-lg text-info whitespace-no-wrap"},"Tests per a million: ",n.a.createElement(w.a,{start:0,end:l.testsPerOneMillion,duration:1.5,separator:","})))))):n.a.createElement("p",{className:"text-2xl text-warning text-center my-auto mx-6"},"None country selected. Please specify country in the dropdown menu."))}},46:function(e,t,a){e.exports={gradientColor:"styles_gradientColor__2WDxa",gradientPrimaryColor:"styles_gradientPrimaryColor__3_b8a",gradientSecondaryColor:"styles_gradientSecondaryColor__3xsaJ"}},57:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return s}));var r=a(22),n=a.n(r),o=a(33),c=a(40),l=a.n(c),i=function(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),r=1;r<t;r++)a[r-1]=arguments[r];return l.a.get.apply(l.a,["".concat("https://coronavirus-19-api.herokuapp.com","/").concat(e)].concat(a)).then((function(e){return e.data}))},s=function(){var e=Object(o.a)(n.a.mark((function e(){var t,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.a.get("".concat("https://covid19.mathdro.id","/api/countries"));case 3:return t=e.sent,a=t.data,e.abrupt("return",a);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",[]);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}()},60:function(e,t,a){"use strict";a.d(t,"a",(function(){return f}));var r=a(54),n=a(0),o=a(42),c=a(34),l=a.n(c),i=a(56),s=a.n(i),d=a(35),u=["world","total","total:","europe","north america","south america","asia","africa"],m=Object(d.b)({accessor:function(e){return e.cases}}),p=Object(d.b)({accessor:function(e){return e.deaths}}),v=Object(d.b)({accessor:function(e){return e.recovered}});var f=function(){var e=Object(o.b)("countries"),t=e.data,a=e.error,c=Object(n.useRef)();return{data:Object(n.useMemo)((function(){return c.current=new Date,function(e){if(!e)return{sortedByCases:[],sortedByDeaths:[],sortedByRecovers:[],initialData:[]};var t=e.reduce((function(e,t){if(u.includes(t.country.toLowerCase()))return e;var a=null,n=null,o=l.a.getName(t.country,"en");if(o)a=l.a.getAlpha2Code(o,"en"),n=l.a.getAlpha3Code(o,"en");else{var c=s.a.byCountry(t.country)||s.a.byInternet(t.country)||s.a.byFips(t.country);c&&(a=c.iso2,n=c.iso3)}return a&&n&&e.push(Object(r.a)({},t,{iso2:a,iso3:n})),e}),[]);return{sortedByCases:t.sort(m),sortedByDeaths:t.sort(p),sortedByRecovers:t.sort(v),initialData:t}}(t)}),[t]),updatedAt:c.current,error:a}}},95:function(e,t,a){e.exports=a(130)}},[[95,1,2]]]);
//# sourceMappingURL=main.5f546a12.chunk.js.map