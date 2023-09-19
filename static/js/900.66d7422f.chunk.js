/*! For license information please see 900.66d7422f.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[900],{854:function(e,t,r){r.d(t,{a:function(){return o}});var n=r(3430),a=r(184),o=function(){return(0,a.jsx)(n.Ll,{height:"80",width:"80",color:"#01b4e4",ariaLabel:"bars-loading",wrapperStyle:{justifyContent:"center"},wrapperClass:"",visible:!0})}},2896:function(e,t,r){r.d(t,{Z:function(){return c}});var n,a=r(168),o=r(5867).ZP.div(n||(n=(0,a.Z)(["\n  display: flex;\n  align-items: center;\n  align-content: center;\n  width: 100%;\n  padding: 30px;\n  border: 1px solid rgba(227, 227, 227, 1);\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n"]))),i=r(184),c=function(e){var t=e.messageCode,r=e.errorCode,n="";switch(t){case"error":n="Oops! Something went wrong! Try reloading the page!";break;case"end":n="Woow! You have seen it all";break;case"reviews":n="We don't have any reviews for this movie";break;case"cast":n="Sorry, we don't have any information about the cast";break;case"empty":n="Nothing to view. Please try to search for something or check the search options"}return(0,i.jsx)(o,{children:(0,i.jsxs)("h3",{children:[n,(0,i.jsx)("br",{}),null!==r&&void 0!==r?r:""]})})}},5139:function(e,t,r){r.d(t,{Hx:function(){return g},Y5:function(){return h},wr:function(){return f},xc:function(){return m},xh:function(){return p}});var n,a,o,i,c,u=r(5861),s=r(1243);function l(){l=function(){return t};var e,t={},r=Object.prototype,n=r.hasOwnProperty,a=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function s(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(e){s=function(e,t,r){return e[t]=r}}function f(e,t,r,n){var o=t&&t.prototype instanceof d?t:d,i=Object.create(o.prototype),c=new Z(n||[]);return a(i,"_invoke",{value:I(e,r,c)}),i}function p(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}t.wrap=f;var h="suspendedStart",m="executing",g="completed",v={};function d(){}function b(){}function y(){}var w={};s(w,i,(function(){return this}));var N=Object.getPrototypeOf,x=N&&N(N(G([])));x&&x!==r&&n.call(x,i)&&(w=x);var E=y.prototype=d.prototype=Object.create(w);function P(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function C(e,t){function r(a,o,i,c){var u=p(e[a],e,o);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&n.call(l,"__await")?t.resolve(l.__await).then((function(e){r("next",e,i,c)}),(function(e){r("throw",e,i,c)})):t.resolve(l).then((function(e){s.value=e,i(s)}),(function(e){return r("throw",e,i,c)}))}c(u.arg)}var o;a(this,"_invoke",{value:function(e,n){function a(){return new t((function(t,a){r(e,n,t,a)}))}return o=o?o.then(a,a):a()}})}function I(t,r,n){var a=h;return function(o,i){if(a===m)throw new Error("Generator is already running");if(a===g){if("throw"===o)throw i;return{value:e,done:!0}}for(n.method=o,n.arg=i;;){var c=n.delegate;if(c){var u=L(c,n);if(u){if(u===v)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(a===h)throw a=g,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a=m;var s=p(t,r,n);if("normal"===s.type){if(a=n.done?g:"suspendedYield",s.arg===v)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(a=g,n.method="throw",n.arg=s.arg)}}}function L(t,r){var n=r.method,a=t.iterator[n];if(a===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,L(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var o=p(a,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function k(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function Z(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function G(t){if(t||""===t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,o=function r(){for(;++a<t.length;)if(n.call(t,a))return r.value=t[a],r.done=!1,r;return r.value=e,r.done=!0,r};return o.next=o}}throw new TypeError(typeof t+" is not iterable")}return b.prototype=y,a(E,"constructor",{value:y,configurable:!0}),a(y,"constructor",{value:b,configurable:!0}),b.displayName=s(y,u,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===b||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,s(e,u,"GeneratorFunction")),e.prototype=Object.create(E),e},t.awrap=function(e){return{__await:e}},P(C.prototype),s(C.prototype,c,(function(){return this})),t.AsyncIterator=C,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new C(f(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},P(E),s(E,u,"Generator"),s(E,i,(function(){return this})),s(E,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=G,Z.prototype={constructor:Z,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(j),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function a(n,a){return c.type="throw",c.arg=t,r.next=n,a&&(r.method="next",r.arg=e),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),j(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;j(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:G(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}s.Z.defaults.baseURL="https://api.themoviedb.org",s.Z.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNjY5OTM4NGMzOTlmNGZjZDNkYTVmM2E1MzNiZGMyNiIsInN1YiI6IjY0ZmY2NzYxNmEyMjI3MDExYTdhMWE2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TukH43MgEkbktiSxVcihiwHhw9PdiX1gSPFV4DAl77M";var f=function(e){return(n=n||(0,u.Z)(l().mark((function e(t){var r,n,a;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={signal:t},e.next=3,s.Z.get("/3/trending/movie/day",r);case 3:return n=e.sent,a=n.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)},p=function(e,t,r){return(a=a||(0,u.Z)(l().mark((function e(t,r,n){var a,o,i;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={signal:n,params:{query:t,include_adult:!1,language:"en-US",page:r}},e.next=3,s.Z.get("/3/search/movie",a);case 3:return o=e.sent,i=o.data,e.abrupt("return",i);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)},h=function(e,t){return(o=o||(0,u.Z)(l().mark((function e(t,r){var n,a,o;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={signal:r,params:{language:"en-US"}},e.next=3,s.Z.get("/3/movie/".concat(t),n);case 3:return a=e.sent,o=a.data,e.abrupt("return",o);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)},m=function(e,t){return(i=i||(0,u.Z)(l().mark((function e(t,r){var n,a,o;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={signal:r,params:{language:"en-US"}},e.next=3,s.Z.get("/3/movie/".concat(t,"/credits"),n);case 3:return a=e.sent,o=a.data,e.abrupt("return",o);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)},g=function(e,t,r){return(c=c||(0,u.Z)(l().mark((function e(t,r,n){var a,o,i;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={signal:r,params:{language:"en-US",page:n}},e.next=3,s.Z.get("/3/movie/".concat(t,"/reviews"),a);case 3:return o=e.sent,i=o.data,e.abrupt("return",i);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},4404:function(e,t,r){function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,{t:function(){return c}});var a=r(3433),o=r(9439),i=r(2791),c=function(e){var t=e.onPageChange,r=e.currentPage,c=void 0===r?1:r,u=e.totalItems,s=e.itemsPerPage,l=void 0===s?10:s,f=e.startLabel,p=void 0===f?"<<":f,h=e.prevLabel,m=void 0===h?"<":h,g=e.nextLabel,v=void 0===g?">":g,d=e.endLabel,b=void 0===d?">>":d,y=e.pageNeighbours,w=void 0===y?4:y,N=e.withProgressBar,x=void 0!==N&&N,E=e.onlyPageNumbers,P=void 0!==E&&E,C=e.withGoToInput,I=void 0!==C&&C,L=e.onlyPaginationButtons,k=void 0!==L&&L,j=e.customClassNames,Z=void 0===j?{}:j,G=function(e){return Object.entries(e).filter((function(e){return(0,o.Z)(e,2)[1]})).map((function(e){return(0,o.Z)(e,1)[0]})).join(" ")},O=(0,i.useState)(),_=(0,o.Z)(O,2),S=_[0],M=_[1],T=(0,i.useState)(""),Y=(0,o.Z)(T,2),A=Y[0],D=Y[1],F={rpbRootClassName:Z.rpbRootClassName||"rpb-root",rpbItemClassName:Z.rpbItemClassName||"rpb-item",rpbItemClassNameActive:Z.rpbItemClassNameActive||"rpb-item--active",rpbItemClassNameDisable:Z.rpbItemClassNameDisable||"rpb-item--disabled",rpbProgressClassName:Z.rpbProgressClassName||"rpb-progress",rpbGoItemClassName:Z.rpbGoItemClassName||"rpb-go-item"};(0,i.useEffect)((function(){J(c)}),[c]);var J=function(e){e<1||S&&e>S.totalPages||"number"!==typeof e||isNaN(e)||e!==c&&t(e)},U=(0,i.useMemo)((function(){var e,t,r=Math.ceil(u/l);return r<=2*w+1?(e=1,t=r):c<=w?(e=1,t=2*w+1):c+w>=r?(e=r-2*w,t=r):(e=c-w,t=c+w),(0,a.Z)(Array(t+1-e).keys()).map((function(t){return e+t}))}),[u,l,c]);(0,i.useEffect)((function(){M({pages:U,totalItems:u,currentPage:c,pagesLength:U.length,totalPages:Math.ceil(u/l)})}),[U]);var z,W,R,V;return S&&u>l?i.createElement("nav",{className:F.rpbRootClassName},i.createElement("ul",{id:"rpb-pagination","aria-label":"Pagination Navigation, Current Page ".concat(S.currentPage)},!P&&i.createElement(i.Fragment,null,i.createElement("li",null,i.createElement("button",{className:G((z={},n(z,F.rpbItemClassName,!0),n(z,F.rpbItemClassNameDisable,1===S.currentPage),z)),"aria-label":"Go to first page",onClick:function(){return J(1)}},p)),i.createElement("li",null,i.createElement("button",{className:G((W={},n(W,F.rpbItemClassName,!0),n(W,F.rpbItemClassNameDisable,1===S.currentPage),W)),"aria-label":"Go to previous page",onClick:function(){return J(S.currentPage-1)}},m))),!k&&S.pages&&S.pages.map((function(e,t){var r;return i.createElement("li",{key:t},i.createElement("button",{"aria-label":"Go to Page ".concat(e),"aria-current":S.currentPage===e,onClick:function(){return J(e)},className:G((r={},n(r,F.rpbItemClassName,!0),n(r,F.rpbItemClassNameActive,S.currentPage===e),r))},e))})),!P&&i.createElement(i.Fragment,null,i.createElement("li",null,i.createElement("button",{onClick:function(){return J(S.currentPage+1)},"aria-label":"Go to next page",className:G((R={},n(R,F.rpbItemClassName,!0),n(R,F.rpbItemClassNameDisable,S.currentPage===S.totalPages),R))},v)),i.createElement("li",null,i.createElement("button",{className:G((V={},n(V,F.rpbItemClassName,!0),n(V,F.rpbItemClassNameDisable,S.currentPage===S.totalPages),V)),"aria-label":"Go to last page",onClick:function(){return J(S.totalPages)}},b))),I&&i.createElement(i.Fragment,null,i.createElement("li",null,i.createElement("div",{className:F.rpbGoItemClassName},i.createElement("input",{type:"number",onChange:function(e){return D(e.target.value)}}))),i.createElement("li",null,i.createElement("button",{className:F.rpbItemClassName,onClick:function(){var e=Number(A);S&&(e<=0?J(1):e>S.totalPages?J(S.totalPages):J(e))}},"Go")))),x&&i.createElement("div",{role:"progressbar","aria-valuenow":1!==S.currentPage?Math.round(S.currentPage/S.totalPages*100):0,"aria-valuemin":0,"aria-valuemax":100,"aria-labelledby":"rpb-pagination",className:F.rpbProgressClassName,style:{width:1!==S.currentPage?Math.round(S.currentPage/S.totalPages*100)+"%":"0%"}})):null}},5984:function(e,t,r){r.d(t,{x0:function(){return n}});var n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,t){return e+=(t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_"}),"")}}}]);
//# sourceMappingURL=900.66d7422f.chunk.js.map