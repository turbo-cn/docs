(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2320],{7956:function(e,t,n){"use strict";n.d(t,{p:function(){return l}});var r=n(4924),a=n(5893),i=n(4184),o=n.n(i),s=n(929),c=n.n(s);function l(e){var t,n=e.width,i=void 0===n?1e3:n,s=e.height,l=void 0===s?200:s,u=e.opacity,d=e.pink,f=e.blue,h=e.conic,g=e.gray,x=e.className,m=e.small;return(0,a.jsx)("span",{className:o()("absolute",c().glow,(t={},(0,r.Z)(t,c().glowPink,d),(0,r.Z)(t,c().glowBlue,f),(0,r.Z)(t,c().glowConic,h),(0,r.Z)(t,c().glowSmall,m),(0,r.Z)(t,c().glowGray,g),t),x),style:{width:i,height:l,opacity:u,borderRadius:"100%"}})}},9156:function(e,t,n){"use strict";n.d(t,{M:function(){return B}});var r=n(7568),a=n(4924),i=n(6042),o=n(9396),s=n(943);var c=n(3375);var l=n(1566);function u(e){return function(e){if(Array.isArray(e))return(0,s.Z)(e)}(e)||(0,c.Z)(e)||(0,l.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var d=n(414),f=n(5893),h=n(4184),g=n.n(h),x=n(7037),m=n(4394),p=n(7107),v=n(5759);function b(){let e=!1;const t=[],n=new Set,r={subscribe:e=>(n.add(e),()=>{n.delete(e)}),start(r,a){if(e){const e=[];return n.forEach((t=>{e.push((0,p.d5)(t,r,{transitionOverride:a}))})),Promise.all(e)}return new Promise((e=>{t.push({animation:[r,a],resolve:e})}))},set:t=>((0,m.k)(e,"controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."),n.forEach((e=>{(0,v.gg)(e,t)}))),stop(){n.forEach((e=>{(0,p.p_)(e)}))},mount:()=>(e=!0,t.forEach((({animation:e,resolve:t})=>{r.start(...e).then(t)})),()=>{e=!1,r.stop()})};return r}var _=n(7294),y=n(6681);const w=function(){const e=(0,y.h)(b);return(0,_.useEffect)(e.mount,[]),e};var k=n(2064),j=n(1800),N=n(1608),S=n.n(N),Z=n(5721),T=n(7956),E=n(929),R=n.n(E);function B(e){var t,n=e.category,r=e.numberOfModules,a=e.bars,i=e.pinTime,o=Z[n][r],s=a.map((function(e){return e.key})),c=1.15*(1e3*(t=Math).max.apply(t,u(s.map((function(e){return o[e]}))))),l=(0,_.useRef)(null),d=(0,x.Y)(l,{once:!0,margin:"-128px"});return(0,f.jsxs)("div",{className:"flex w-full max-w-[1248px] relative px-6",children:[(0,f.jsx)("div",{className:"absolute top-0 flex items-center justify-center flex-1 w-full h-full",children:(0,f.jsx)(T.p,{gray:!0,width:"100%",height:"100%",className:"dark:opacity-0 dark:md:opacity-25 opacity-10"})}),(0,f.jsx)("div",{ref:l,className:"relative flex flex-col flex-1 gap-6 md:gap-10",children:a.map((function(e){return(0,f.jsx)(O,{turbo:e.turbo,Label:(0,f.jsx)(P,{label:e.label,turbo:e.turbo}),duration:1e3*o[e.key],longestTime:c,inView:d,pinTime:i},e.key)}))})]})}var A={initial:{width:0},progress:{width:"100%"}},L={hidden:{opacity:0},show:{opacity:1}};function O(e){var t=e.turbo,n=e.duration,s=e.longestTime,c=e.inView,l=e.Label,u=e.pinTime,h=w(),x=(0,_.useState)(0),m=x[0],p=x[1],v=(0,_.useState)(),b=v[0],y=v[1],N=(0,_.useState)(0),S=N[0],Z=N[1],T=(0,_.useState)(!1)[1];function E(){return B.apply(this,arguments)}function B(){return(B=(0,r.Z)((function(){return(0,d.__generator)(this,(function(e){return b&&b.stop(),h.stop(),[2]}))}))).apply(this,arguments)}function O(){return P.apply(this,arguments)}function P(){return(P=(0,r.Z)((function(){return(0,d.__generator)(this,(function(e){switch(e.label){case 0:return p(0),T(!1),[4,h.start("initial")];case 1:return e.sent(),[2]}}))}))).apply(this,arguments)}function G(){return M.apply(this,arguments)}function M(){return(M=(0,r.Z)((function(){var e,t;return(0,d.__generator)(this,(function(r){switch(r.label){case 0:return e={duration:n/1e3,delay:0},Z(n/s*100),[4,h.start("show")];case 1:return r.sent(),h.start("progress",(0,o.Z)((0,i.Z)({},e),{ease:"linear"})).then((function(){T(!0)})),t=(0,k.j)(0,n/1e3,(0,o.Z)((0,i.Z)({},e),{ease:"linear",onUpdate:function(e){p(e)}})),y(t),[2]}}))}))).apply(this,arguments)}function z(){return(z=(0,r.Z)((function(){return(0,d.__generator)(this,(function(e){switch(e.label){case 0:return[4,E()];case 1:return e.sent(),[4,h.start("hidden")];case 2:return e.sent(),[4,O()];case 3:return e.sent(),[4,G()];case 4:return e.sent(),[2]}}))}))).apply(this,arguments)}return(0,_.useEffect)((function(){c?G():(E(),O())}),[c]),(0,_.useEffect)((function(){c&&function(){z.apply(this,arguments)}()}),[n,s]),(0,f.jsxs)("div",{className:"justify-center w-full gap-1 md:flex-row md:flex align-center",children:[(0,f.jsx)("div",{className:"flex items-center w-48",children:l}),(0,f.jsxs)("div",{className:"flex w-full items-center justify-between gap-4 z-10 border dark:border-[#333333] rounded-lg p-1",children:[(0,f.jsx)(j.E.div,{animate:h,variants:L,style:{width:"".concat(S,"%")},transition:{duration:.1},initial:"hidden",className:g()("flex items-center h-full rounded relative dark:bg-[#383838] bg-[#E6E6E6]"),children:(0,f.jsx)(j.E.div,{className:g()("h-12 rounded w-0 relative",t?R().benchmarkTurbo:R().benchmark,(0,a.Z)({},R().barBorder,!t)),variants:A,animate:h,transition:{duration:.1}})}),(0,f.jsx)(j.E.div,{animate:h,variants:L,className:"pr-2",transition:{duration:.1},children:(0,f.jsx)(C,{turbo:t,timer:u?n/1e3:m})})]})]})}var C=function(e){var t=e.turbo,n=e.timer;return(0,f.jsxs)("div",{className:"flex flex-row gap-2 w-24 justify-end items-center z-10",children:[t&&(0,f.jsxs)("div",{className:"relative flex w-8 h-8 ",children:[(0,f.jsx)(S(),{alt:"Turbopack",src:"/images/docs/pack/turbo-benchmark-icon-light.svg",width:32,height:32,className:"block dark:hidden"}),(0,f.jsx)(S(),{alt:"Turbopack",src:"/images/docs/pack/turbo-benchmark-icon-dark.svg",width:32,height:32,className:"hidden dark:block"}),(0,f.jsx)(T.p,{pink:!0,width:"100%",height:"100%",small:!0,className:"opacity-0 dark:opacity-60"})]}),(0,f.jsxs)("p",{className:"font-mono",children:[n.toFixed(2),"s"]})]})};function P(e){var t=e.label,n=e.turbo,r=e.mobileOnly,a=e.esbuild;return(0,f.jsxs)("div",{className:"flex items-center h-12 whitespace-nowrap font-bold gap-y-1 gap-x-2 ".concat(r&&"md:hidden"),children:[(0,f.jsx)("p",{children:t}),n&&(0,f.jsx)("p",{className:g()("font-space-grotesk m-0",R().benchmarkTurboLabel),children:"turbo"}),a&&(0,f.jsx)("p",{className:"font-space-grotesk m-0 text-[#666666]",children:"esbuild"})]})}},2352:function(e,t,n){"use strict";n.d(t,{h:function(){return l}});var r=n(5893),a=n(7294),i=n(9262),o=n(1407);function s(e){var t=e.onOptionSelected,n=(0,a.useState)("1000"),s=n[0],l=n[1];return(0,r.jsx)("div",{className:"relative",children:(0,r.jsxs)(i.R,{value:s,onChange:function(e){t(e),l(e)},children:[(0,r.jsxs)(i.R.Button,{className:"flex w-24 pl-3 pr-2 py-2 gap-3 rounded !bg-[#fafafa] dark:!bg-[#111111] dark:hover:text-white hover:text-black dark:text-[#888888] text-[#666666] items-center justify-between transition-all text-sm leading-none font-medium m-0",children:[Number(s).toLocaleString(),(0,r.jsx)(c,{})]}),(0,r.jsx)(o.u,{as:a.Fragment,leave:"transition ease-in duration-100",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,r.jsxs)(i.R.Options,{className:"absolute left-0 mt-2 w-full dark:bg-[#111111] bg-[#FAFAFA] rounded py-1 z-50 list",children:[(0,r.jsx)(i.R.Option,{value:"1000",className:function(e){var t=e.active;return"relative cursor-default select-none py-1 text-sm pl-3 text-gray-400 ".concat(t?"bg-gray-800 text-gray-100":"text-gray-900")},children:"1000"}),(0,r.jsx)(i.R.Option,{className:function(e){var t=e.active;return"relative cursor-default select-none py-1 text-sm pl-3 text-gray-400 ".concat(t?"bg-gray-800 text-gray-100":"text-gray-900")},value:"5000",children:"5000"}),(0,r.jsx)(i.R.Option,{className:function(e){var t=e.active;return"relative cursor-default select-none py-1 text-sm pl-3 text-gray-400 ".concat(t?"bg-gray-800 text-gray-100":"text-gray-900")},value:"10000",children:"10000"}),(0,r.jsx)(i.R.Option,{className:function(e){var t=e.active;return"relative cursor-default select-none py-1 text-sm pl-3 text-gray-400 ".concat(t?"bg-gray-800 text-gray-100":"text-gray-900")},value:"30000",children:"30000"})]})})]})})}function c(){return(0,r.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M4 6L8 10L12 6",stroke:"#666666",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}function l(e){return(0,r.jsxs)("div",{className:"flex items-center gap-3",children:[(0,r.jsx)("a",{className:"dark:text-[#888888] hover:underline underline-offset-4 text-[#666666] text-sm",href:"https://github.com/vercel/turbo/blob/main/docs/components/pages/pack-home/benchmark-data",children:"React Components"}),(0,r.jsx)(s,{onOptionSelected:function(t){return e.setNumberOfModules(t)}})]})}},929:function(e){e.exports={benchmarkTurbo:"gradients_benchmarkTurbo__EilQp",benchmarkActiveTab:"gradients_benchmarkActiveTab__qm6uO",benchmarkTurboLabel:"gradients_benchmarkTurboLabel__zh_P6",benchmark:"gradients_benchmark__SX9o1",barBorder:"gradients_barBorder__ixDUW",tooltipArrow:"gradients_tooltipArrow__v5Iwm",translatingGlow:"gradients_translatingGlow__wxytK",translateGlow:"gradients_translateGlow__qeT0N",turbopackHeaderText:"gradients_turbopackHeaderText__jrUK7",heroHeading:"gradients_heroHeading__R3UhS",letterLine:"gradients_letterLine__SRelz",glow:"gradients_glow__858LR",glowSmall:"gradients_glowSmall__jRogS",glowBlue:"gradients_glowBlue__n25_y",glowPink:"gradients_glowPink__Ab7K9",glowConic:"gradients_glowConic__I1R2p",glowGray:"gradients_glowGray__rPmMv",gradientSectionBorder:"gradients_gradientSectionBorder__07r0H",gradientSectionBorderLeft:"gradients_gradientSectionBorderLeft__wzdop",gradientSectionBorderRight:"gradients_gradientSectionBorderRight__w2K2_",gradientSectionBorderDivider:"gradients_gradientSectionBorderDivider__bJtKq"}},943:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,{Z:function(){return r}})},7568:function(e,t,n){"use strict";function r(e,t,n,r,a,i,o){try{var s=e[i](o),c=s.value}catch(l){return void n(l)}s.done?t(c):Promise.resolve(c).then(r,a)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(a,i){var o=e.apply(t,n);function s(e){r(o,a,i,s,c,"next",e)}function c(e){r(o,a,i,s,c,"throw",e)}s(void 0)}))}}n.d(t,{Z:function(){return a}})},3375:function(e,t,n){"use strict";function r(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}n.d(t,{Z:function(){return r}})},1566:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(943);function a(e,t){if(e){if("string"===typeof e)return(0,r.Z)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,r.Z)(e,t):void 0}}},5721:function(e){"use strict";e.exports=JSON.parse('{"cold":{"1000":{"next13":0.868,"vite":4.8,"next12":3.4,"next11":7.7},"5000":{"next13":3,"vite":19.2,"next12":10.7,"next11":24.8},"10000":{"next13":6.1,"vite":37.2,"next12":20.1,"next11":49.4},"30000":{"next13":20.3,"vite":109.5,"next12":76.6,"next11":176.2}},"file_change":{"1000":{"next13":0.015,"vite":0.087,"next12":0.134,"next11":0.201},"5000":{"next13":0.027,"vite":0.093,"next12":0.386,"next11":0.85},"10000":{"next13":0.015,"vite":0.11,"next12":1.067,"next11":1.714},"30000":{"next13":0.015,"vite":0.256,"next12":3.4,"next11":6.9}},"from_cache":{"1000":{"next13":0.868,"vite":2.9,"next12":2.2,"next11":4.3},"5000":{"next13":3,"vite":11.5,"next12":7.2,"next11":12.9},"10000":{"next13":6.1,"vite":22.1,"next12":13,"next11":27.4},"30000":{"next13":20.3,"vite":66.3,"next12":42.5,"next11":31.8}}}')}}]);