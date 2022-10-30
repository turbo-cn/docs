"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2264],{9534:function(e,n,t){function r(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},u=Object.keys(e);for(r=0;r<u.length;r++)t=u[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)t=u[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}t.d(n,{Z:function(){return r}})},8100:function(e,n,t){t.d(n,{ZP:function(){return Q}});var r=t(7294);function i(e,n,t,r){return new(t||(t=Promise))((function(i,u){function o(e){try{c(r.next(e))}catch(n){u(n)}}function a(e){try{c(r.throw(e))}catch(n){u(n)}}function c(e){var n;e.done?i(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(o,a)}c((r=r.apply(e,n||[])).next())}))}function u(e,n){var t,r,i,u,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return u={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function a(u){return function(a){return function(u){if(t)throw new TypeError("Generator is already executing.");for(;o;)try{if(t=1,r&&(i=2&u[0]?r.return:u[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,u[1])).done)return i;switch(r=0,i&&(u=[2&u[0],i.value]),u[0]){case 0:case 1:i=u;break;case 4:return o.label++,{value:u[1],done:!1};case 5:o.label++,r=u[1],u=[0];continue;case 7:u=o.ops.pop(),o.trys.pop();continue;default:if(!(i=(i=o.trys).length>0&&i[i.length-1])&&(6===u[0]||2===u[0])){o=0;continue}if(3===u[0]&&(!i||u[1]>i[0]&&u[1]<i[3])){o.label=u[1];break}if(6===u[0]&&o.label<i[1]){o.label=i[1],i=u;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(u);break}i[2]&&o.ops.pop(),o.trys.pop();continue}u=n.call(e,o)}catch(a){u=[6,a],r=0}finally{t=i=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,a])}}}var o,a=function(){},c=a(),f=Object,s=function(e){return e===c},l=function(e){return"function"==typeof e},d=function(e,n){return f.assign({},e,n)},v="undefined",h=function(){return typeof window!=v},g=new WeakMap,p=0,b=function(e){var n,t,r=typeof e,i=e&&e.constructor,u=i==Date;if(f(e)!==e||u||i==RegExp)n=u?e.toJSON():"symbol"==r?e.toString():"string"==r?JSON.stringify(e):""+e;else{if(n=g.get(e))return n;if(n=++p+"~",g.set(e,n),i==Array){for(n="@",t=0;t<e.length;t++)n+=b(e[t])+",";g.set(e,n)}if(i==f){n="#";for(var o=f.keys(e).sort();!s(t=o.pop());)s(e[t])||(n+=t+":"+b(e[t])+",");g.set(e,n)}}return n},y=!0,w=h(),m=typeof document!=v,O=w&&window.addEventListener?window.addEventListener.bind(window):a,E=m?document.addEventListener.bind(document):a,k=w&&window.removeEventListener?window.removeEventListener.bind(window):a,R=m?document.removeEventListener.bind(document):a,S={isOnline:function(){return y},isVisible:function(){var e=m&&document.visibilityState;return s(e)||"hidden"!==e}},T={initFocus:function(e){return E("visibilitychange",e),O("focus",e),function(){R("visibilitychange",e),k("focus",e)}},initReconnect:function(e){var n=function(){y=!0,e()},t=function(){y=!1};return O("online",n),O("offline",t),function(){k("online",n),k("offline",t)}}},V=!h()||"Deno"in window,C=function(e){return h()&&typeof window.requestAnimationFrame!=v?window.requestAnimationFrame(e):setTimeout(e,1)},x=V?r.useEffect:r.useLayoutEffect,I="undefined"!==typeof navigator&&navigator.connection,D=!V&&I&&(["slow-2g","2g"].includes(I.effectiveType)||I.saveData),P=function(e){if(l(e))try{e=e()}catch(t){e=""}var n=[].concat(e);return[e="string"==typeof e?e:(Array.isArray(e)?e.length:e)?b(e):"",n,e?"$swr$"+e:""]},L=new WeakMap,F=function(e,n,t,r,i,u,o){void 0===o&&(o=!0);var a=L.get(e),c=a[0],f=a[1],s=a[3],l=c[n],d=f[n];if(o&&d)for(var v=0;v<d.length;++v)d[v](t,r,i);return u&&(delete s[n],l&&l[0])?l[0](2).then((function(){return e.get(n)})):e.get(n)},j=0,A=function(){return++j},M=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return i(void 0,void 0,void 0,(function(){var n,t,r,i,o,a,f,v,h,g,p,b,y,w,m,O,E,k,R,S,T;return u(this,(function(u){switch(u.label){case 0:if(n=e[0],t=e[1],r=e[2],i=e[3],a=!!s((o="boolean"===typeof i?{revalidate:i}:i||{}).populateCache)||o.populateCache,f=!1!==o.revalidate,v=!1!==o.rollbackOnError,h=o.optimisticData,g=P(t),p=g[0],b=g[2],!p)return[2];if(y=L.get(n),w=y[2],e.length<3)return[2,F(n,p,n.get(p),c,c,f,!0)];if(m=r,E=A(),w[p]=[E,0],k=!s(h),R=n.get(p),k&&(S=l(h)?h(R):h,n.set(p,S),F(n,p,S)),l(m))try{m=m(n.get(p))}catch(V){O=V}return m&&l(m.then)?[4,m.catch((function(e){O=e}))]:[3,2];case 1:if(m=u.sent(),E!==w[p][0]){if(O)throw O;return[2,m]}O&&k&&v&&(a=!0,m=R,n.set(p,R)),u.label=2;case 2:return a&&(O||(l(a)&&(m=a(m,R)),n.set(p,m)),n.set(b,d(n.get(b),{error:O}))),w[p][1]=A(),[4,F(n,p,m,O,c,f,!!a)];case 3:if(T=u.sent(),O)throw O;return[2,a?T:m]}}))}))},N=function(e,n){for(var t in e)e[t][0]&&e[t][0](n)},W=function(e,n){if(!L.has(e)){var t=d(T,n),r={},i=M.bind(c,e),u=a;if(L.set(e,[r,{},{},{},i]),!V){var o=t.initFocus(setTimeout.bind(c,N.bind(c,r,0))),f=t.initReconnect(setTimeout.bind(c,N.bind(c,r,1)));u=function(){o&&o(),f&&f(),L.delete(e)}}return[e,i,u]}return[e,L.get(e)[4]]},_=W(new Map),q=_[0],J=_[1],Z=d({onLoadingSlow:a,onSuccess:a,onError:a,onErrorRetry:function(e,n,t,r,i){var u=t.errorRetryCount,o=i.retryCount,a=~~((Math.random()+.5)*(1<<(o<8?o:8)))*t.errorRetryInterval;!s(u)&&o>u||setTimeout(r,a,i)},onDiscarded:a,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:D?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:D?5e3:3e3,compare:function(e,n){return b(e)==b(n)},isPaused:function(){return!1},cache:q,mutate:J,fallback:{}},S),$=function(e,n){var t=d(e,n);if(n){var r=e.use,i=e.fallback,u=n.use,o=n.fallback;r&&u&&(t.use=r.concat(u)),i&&o&&(t.fallback=d(i,o))}return t},G=(0,r.createContext)({}),H=function(e){return l(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(null===e[1]?e[2]:e[1])||{}]},z=function(){return d(Z,(0,r.useContext)(G))},B=function(e,n,t){var r=n[e]||(n[e]=[]);return r.push(t),function(){var e=r.indexOf(t);e>=0&&(r[e]=r[r.length-1],r.pop())}},K={dedupe:!0},Q=(f.defineProperty((function(e){var n=e.value,t=$((0,r.useContext)(G),n),i=n&&n.provider,u=(0,r.useState)((function(){return i?W(i(t.cache||q),n):c}))[0];return u&&(t.cache=u[0],t.mutate=u[1]),x((function(){return u?u[2]:c}),[]),(0,r.createElement)(G.Provider,d(e,{value:t}))}),"default",{value:Z}),o=function(e,n,t){var o=t.cache,a=t.compare,f=t.fallbackData,v=t.suspense,h=t.revalidateOnMount,g=t.refreshInterval,p=t.refreshWhenHidden,b=t.refreshWhenOffline,y=L.get(o),w=y[0],m=y[1],O=y[2],E=y[3],k=P(e),R=k[0],S=k[1],T=k[2],I=(0,r.useRef)(!1),D=(0,r.useRef)(!1),j=(0,r.useRef)(R),N=(0,r.useRef)(n),W=(0,r.useRef)(t),_=function(){return W.current},q=function(){return _().isVisible()&&_().isOnline()},J=function(e){return o.set(T,d(o.get(T),e))},Z=o.get(R),$=s(f)?t.fallback[R]:f,G=s(Z)?$:Z,H=o.get(T)||{},z=H.error,Q=!I.current,U=function(){return Q&&!s(h)?h:!_().isPaused()&&(v?!s(G)&&t.revalidateIfStale:s(G)||t.revalidateIfStale)},X=!(!R||!n)&&(!!H.isValidating||Q&&U()),Y=function(e,n){var t=(0,r.useState)({})[1],i=(0,r.useRef)(e),u=(0,r.useRef)({data:!1,error:!1,isValidating:!1}),o=(0,r.useCallback)((function(e){var r=!1,o=i.current;for(var a in e){var c=a;o[c]!==e[c]&&(o[c]=e[c],u.current[c]&&(r=!0))}r&&!n.current&&t({})}),[]);return x((function(){i.current=e})),[i,u.current,o]}({data:G,error:z,isValidating:X},D),ee=Y[0],ne=Y[1],te=Y[2],re=(0,r.useCallback)((function(e){return i(void 0,void 0,void 0,(function(){var n,r,i,f,d,v,h,g,p,b,y,w,m;return u(this,(function(u){switch(u.label){case 0:if(n=N.current,!R||!n||D.current||_().isPaused())return[2,!1];f=!0,d=e||{},v=!E[R]||!d.dedupe,h=function(){return!D.current&&R===j.current&&I.current},g=function(){var e=E[R];e&&e[1]===i&&delete E[R]},p={isValidating:!1},b=function(){J({isValidating:!1}),h()&&te(p)},J({isValidating:!0}),te({isValidating:!0}),u.label=1;case 1:return u.trys.push([1,3,,4]),v&&(F(o,R,ee.current.data,ee.current.error,!0),t.loadingTimeout&&!o.get(R)&&setTimeout((function(){f&&h()&&_().onLoadingSlow(R,t)}),t.loadingTimeout),E[R]=[n.apply(void 0,S),A()]),m=E[R],r=m[0],i=m[1],[4,r];case 2:return r=u.sent(),v&&setTimeout(g,t.dedupingInterval),E[R]&&E[R][1]===i?(J({error:c}),p.error=c,y=O[R],!s(y)&&(i<=y[0]||i<=y[1]||0===y[1])?(b(),v&&h()&&_().onDiscarded(R),[2,!1]):(a(ee.current.data,r)?p.data=ee.current.data:p.data=r,a(o.get(R),r)||o.set(R,r),v&&h()&&_().onSuccess(r,R,t),[3,4])):(v&&h()&&_().onDiscarded(R),[2,!1]);case 3:return w=u.sent(),g(),_().isPaused()||(J({error:w}),p.error=w,v&&h()&&(_().onError(w,R,t),("boolean"===typeof t.shouldRetryOnError&&t.shouldRetryOnError||l(t.shouldRetryOnError)&&t.shouldRetryOnError(w))&&q()&&_().onErrorRetry(w,R,t,re,{retryCount:(d.retryCount||0)+1,dedupe:!0}))),[3,4];case 4:return f=!1,b(),h()&&v&&F(o,R,p.data,p.error,!1),[2,!0]}}))}))}),[R]),ie=(0,r.useCallback)(M.bind(c,o,(function(){return j.current})),[]);if(x((function(){N.current=n,W.current=t})),x((function(){if(R){var e=R!==j.current,n=re.bind(c,K),t=0,r=B(R,m,(function(e,n,t){te(d({error:n,isValidating:t},a(ee.current.data,e)?c:{data:e}))})),i=B(R,w,(function(e){if(0==e){var r=Date.now();_().revalidateOnFocus&&r>t&&q()&&(t=r+_().focusThrottleInterval,n())}else if(1==e)_().revalidateOnReconnect&&q()&&n();else if(2==e)return re()}));return D.current=!1,j.current=R,I.current=!0,e&&te({data:G,error:z,isValidating:X}),U()&&(s(G)||V?n():C(n)),function(){D.current=!0,r(),i()}}}),[R,re]),x((function(){var e;function n(){var n=l(g)?g(G):g;n&&-1!==e&&(e=setTimeout(t,n))}function t(){ee.current.error||!p&&!_().isVisible()||!b&&!_().isOnline()?n():re(K).then(n)}return n(),function(){e&&(clearTimeout(e),e=-1)}}),[g,p,b,re]),(0,r.useDebugValue)(G),v&&s(G)&&R)throw N.current=n,W.current=t,D.current=!1,s(z)?re(K):z;return{mutate:ie,get data(){return ne.data=!0,G},get error(){return ne.error=!0,z},get isValidating(){return ne.isValidating=!0,X}}},function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var t=z(),r=H(e),i=r[0],u=r[1],a=r[2],c=$(t,a),f=o,s=c.use;if(s)for(var l=s.length;l-- >0;)f=s[l](f);return f(i,u||c.fetcher,c)})}}]);