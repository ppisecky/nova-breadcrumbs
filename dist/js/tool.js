!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){var r=n(2)(null,n(7),!1,null,null,null);e.exports=r.exports},function(e,t,n){var r=n(2)(n(5),n(6),!1,null,null,null);e.exports=r.exports},function(e,t){e.exports=function(e,t,n,r,o,s){var i,u=e=e||{},c=typeof e.default;"object"!==c&&"function"!==c||(i=e,u=e.default);var a,l="function"==typeof u?u.options:u;if(t&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns,l._compiled=!0),n&&(l.functional=!0),o&&(l._scopeId=o),s?(a=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},l._ssrRegister=a):r&&(a=r),a){var d=l.functional,p=d?l.render:l.beforeCreate;d?(l._injectStyles=a,l.render=function(e,t){return a.call(t),p(e,t)}):l.beforeCreate=p?[].concat(p,a):[a]}return{esModule:i,exports:u,options:l}}},function(e,t,n){n(4),e.exports=n(8)},function(e,t,n){Nova.booting(function(e,t){e.component("custom-index-header",n(1)),e.component("custom-detail-header",n(1)),e.component("detail-index-pre-breadcrumb",n(0)),e.component("detail-index-post-breadcrumb",n(0)),e.component("detail-header-pre-breadcrumb",n(0)),e.component("detail-header-post-breadcrumb",n(0))})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={computed:{crumbs:function(){var e=this.$router.currentRoute.path.split("/");e.shift();var t=e.reduce(function(e,t,n){return e.push({path:t,to:e[n-1]?e[n-1].to+"/"+t:"/"+t,text:isNaN(t)?t.charAt(0).toUpperCase()+t.slice(1):"Detail"}),e},[]);return console.log(t),t}}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.crumbs.length?n("nav",[n("ul",{staticClass:"breadcrumbs"},[n("li",{staticClass:"breadcrumbs__item"},[n("router-link",{attrs:{to:"/"}},[e._v("Home")])],1),e._v(" "),e._l(e.crumbs,function(t){return"Resources"!=t.text?n("li",{staticClass:"breadcrumbs__item"},[n("router-link",{attrs:{to:t.to}},[e._v(e._s(t.text))])],1):e._e()})],2)]):e._e()])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this.$createElement;return(this._self._c||e)("div")},staticRenderFns:[]}},function(e,t){}]);