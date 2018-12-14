!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("owl-ui",[],e):"object"==typeof exports?exports["owl-ui"]=e():t["owl-ui"]=e()}("undefined"!=typeof self?self:this,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/dist/",n(n.s=13)}([function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){var n=t.exports={version:"2.6.0"};"number"==typeof __e&&(__e=n)},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){t.exports=!n(4)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){t.exports=function(t,e,n,r,i,o){var a,u=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(a=t,u=t.default);var c,f="function"==typeof u?u.options:u;if(e&&(f.render=e.render,f.staticRenderFns=e.staticRenderFns,f._compiled=!0),n&&(f.functional=!0),i&&(f._scopeId=i),o?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},f._ssrRegister=c):r&&(c=r),c){var l=f.functional,d=l?f.render:f.beforeCreate;l?(f._injectStyles=c,f.render=function(t,e){return c.call(e),d(t,e)}):f.beforeCreate=d?[].concat(d,c):[c]}return{esModule:a,exports:u,options:f}}},function(t,e,n){"use strict";e.a={name:"OwlButton",props:{type:{type:String,default:"default"}}}},function(t,e,n){"use strict";var r=n(24),i=n.n(r);e.a={name:"OwlTabs",data:function(){return{liWidth:0,lineRealWidth:0,tabTransX:0,tabTransition:null,activeIndex:this.active,tabsIns:null,surplusWidth:0}},props:{data:{type:Array,default:function(){return[]}},tabWidth:{type:String,default:"110px"},tabHeight:{type:String,default:"40px"},tabColor:{type:String,default:"#999"},tabStyle:{type:Object,default:function(){return{}}},fontSize:{type:String,default:"14px"},fontFamily:{type:String,default:"PingFangSC-Regular"},name:{type:[String,Object],default:null},active:{type:[Number,String],default:0},background:{type:String,default:"#FFF"},highlight:{type:String,default:"#A5884D"},activeStyle:{type:Object,default:function(){return{}}},lineUse:{type:Boolean,default:!0},lineHeight:{type:String,default:"2px"},lineWidth:{type:[String,Object],default:null},lineColor:{type:String,default:"#A5884D"},lineStyle:{type:Object,default:function(){return{}}},initCallback:{type:Boolean,default:!1}},computed:{ulTransform:function(){return{"-webkit-transform":"translateX("+this.tabTransX+"px)"}},ulTransition:function(){return{"-webkit-transition":this.tabTransition}},ulWidth:function(){var t=this.tabWidth?this.getUnitArr(this.tabWidth):null,e=t?t[1]:0;return{width:this.data.length>4?""+this.data.length*e+t[2]:"100%"}},BaseStyle:function(){return{background:this.background,"font-size":this.fontSize,"font-family":this.fontFamily}},ulStyle:function(){return i()({height:this.tabHeight,"line-height":this.tabHeight},this.tabStyle)},defaultColor:function(){return{color:this.tabColor}},activeColor:function(){return{color:this.highlight}},underlineStyle:function(){return i()({width:this.lineWidth?this.lineWidth:this.liWidth+"px",height:this.lineHeight,background:this.lineColor},this.lineStyle)},underlineLeft:function(){return{left:this.activeIndex*this.liWidth+(this.liWidth-this.lineRealWidth)/2+"px"}}},methods:{doTouchStart:function(t){t.stopPropagation(),this.tabTransition=null,this.tabsIns=i()({},this.tabsIns,{X:t.touches[0].pageX-parseFloat(this.tabTransX)})},doTouchMove:function(t){if(!(this.data.length<=4)){t.preventDefault();var e=this.surplusWidth,n=t.touches[0].pageX-this.tabsIns.X;e+t.touches[0].pageX-this.tabsIns.X<0?n=-e-(this.tabsIns.X-t.touches[0].pageX-e)/8:n>0&&(n/=8),this.tabTransX=n}},doTouchEnd:function(t){this.tabTransX>0?this.tabTransX=0:this.tabTransX<-this.surplusWidth&&(this.tabTransX=-this.surplusWidth),this.duration="200ms"},getUnitArr:function(t){return/^([0-9|\\.]+)([a-zA-Z]+)$/.exec(t)},getLiWidth:function(){this.liWidth=this.$refs.tab[0].offsetWidth},getLineRealWidth:function(){this.lineRealWidth=this.$refs.line&&(this.$refs.line.offsetWidth||this.$refs.tab[0].offsetWidth)},tabPlace:function(){this.tabTransition="-webkit-transform 0.4s linear 0s";var t=this.surplusWidth=this.liWidth*this.data.length-document.body.scrollWidth,e=parseInt((document.body.scrollWidth-this.liWidth)/2),n=parseInt(this.$refs.tab[this.activeIndex].offsetLeft+this.tabTransX),r=parseInt(this.tabTransX)-(n-e);r>0&&r+parseInt(this.tabTransX)>0?r=0:r>0&&r+parseInt(this.tabTransX)<0?r=0:r<-t&&(r=-t),this.tabTransX=r},tap:function(t){var e=t.item,n=t.index;n!==this.activeIndex&&(this.activeIndex=n,this.$emit("update:active",n),this.$emit("callback",e),this.data.length<=4||this.tabPlace())},getCurrData:function(){this.$emit("callback",this.data[this.activeIndex])}},mounted:function(){this.getLiWidth(),this.getLineRealWidth(),this.tabPlace(),this.initCallback&&this.getCurrData()}}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(10),i=n(11);t.exports=function(t){return r(i(t))}},function(t,e,n){var r=n(41);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){"use strict";var r=o(n(14)),i=o(n(22));function o(t){return t&&t.__esModule?t:{default:t}}var a=[r.default,i.default],u=function t(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];t.installed||a.forEach(function(t){e.component(t.name,t)})};"undefined"!=typeof window&&window.Vue&&u(window.Vue),t.exports={install:u,Button:r.default},t.exports.default=t.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(15);r.a.install=function(t){t.component(r.a.name,r.a)},e.default=r.a},function(t,e,n){"use strict";var r=n(6),i=n(21);var o=function(t){n(16)},a=n(5)(r.a,i.a,!1,o,"data-v-506e3a7c",null);e.a=a.exports},function(t,e,n){var r=n(17);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(19)("c0789c00",r,!0,{})},function(t,e,n){(t.exports=n(18)(!0)).push([t.i,"\ndiv[data-v-506e3a7c] {\n  width: 1.33333rem;\n}\n","",{version:3,sources:["/Users/dengwenbin/myWorkspace/owl-ui/packages/button/src/Button.vue"],names:[],mappings:";AACA;EACE,kBAAkB;CACnB",file:"Button.vue",sourcesContent:["\ndiv[data-v-506e3a7c] {\n  width: 1.33333rem;\n}\n"],sourceRoot:""}])},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var i=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),o=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(o).concat([i]).join("\n")}var a;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<t.length;i++){var a=t[i];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){var r="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!r)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i=n(20),o={},a=r&&(document.head||document.getElementsByTagName("head")[0]),u=null,s=0,c=!1,f=function(){},l=null,d="data-vue-ssr-id",p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function h(t){for(var e=0;e<t.length;e++){var n=t[e],r=o[n.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](n.parts[i]);for(;i<n.parts.length;i++)r.parts.push(y(n.parts[i]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var a=[];for(i=0;i<n.parts.length;i++)a.push(y(n.parts[i]));o[n.id]={id:n.id,refs:1,parts:a}}}}function v(){var t=document.createElement("style");return t.type="text/css",a.appendChild(t),t}function y(t){var e,n,r=document.querySelector("style["+d+'~="'+t.id+'"]');if(r){if(c)return f;r.parentNode.removeChild(r)}if(p){var i=s++;r=u||(u=v()),e=m.bind(null,r,i,!1),n=m.bind(null,r,i,!0)}else r=v(),e=function(t,e){var n=e.css,r=e.media,i=e.sourceMap;r&&t.setAttribute("media",r);l.ssrId&&t.setAttribute(d,e.id);i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}t.exports=function(t,e,n,r){c=n,l=r||{};var a=i(t,e);return h(a),function(e){for(var n=[],r=0;r<a.length;r++){var u=a[r];(s=o[u.id]).refs--,n.push(s)}e?h(a=i(t,e)):a=[];for(r=0;r<n.length;r++){var s;if(0===(s=n[r]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete o[s.id]}}}};var b,g=(b=[],function(t,e){return b[t]=e,b.filter(Boolean).join("\n")});function m(t,e,n,r){var i=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=g(e,i);else{var o=document.createTextNode(i),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(o,a[e]):t.appendChild(o)}}},function(t,e){t.exports=function(t,e){for(var n=[],r={},i=0;i<e.length;i++){var o=e[i],a=o[0],u={id:t+":"+i,css:o[1],media:o[2],sourceMap:o[3]};r[a]?r[a].parts.push(u):n.push(r[a]={id:a,parts:[u]})}return n}},function(t,e,n){"use strict";var r={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("OwlButton")])},staticRenderFns:[]};e.a=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(23);r.a.install=function(t){t.component(r.a.name,r.a)},e.default=r.a},function(t,e,n){"use strict";var r=n(7),i=n(53),o=n(5)(r.a,i.a,!1,null,null,null);e.a=o.exports},function(t,e,n){"use strict";e.__esModule=!0;var r,i=n(25),o=(r=i)&&r.__esModule?r:{default:r};e.default=o.default||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}},function(t,e,n){t.exports={default:n(26),__esModule:!0}},function(t,e,n){n(27),t.exports=n(1).Object.assign},function(t,e,n){var r=n(28);r(r.S+r.F,"Object",{assign:n(38)})},function(t,e,n){var r=n(0),i=n(1),o=n(29),a=n(31),u=n(8),s=function(t,e,n){var c,f,l,d=t&s.F,p=t&s.G,h=t&s.S,v=t&s.P,y=t&s.B,b=t&s.W,g=p?i:i[e]||(i[e]={}),m=g.prototype,x=p?r:h?r[e]:(r[e]||{}).prototype;for(c in p&&(n=e),n)(f=!d&&x&&void 0!==x[c])&&u(g,c)||(l=f?x[c]:n[c],g[c]=p&&"function"!=typeof x[c]?n[c]:y&&f?o(l,r):b&&x[c]==l?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(l):v&&"function"==typeof l?o(Function.call,l):l,v&&((g.virtual||(g.virtual={}))[c]=l,t&s.R&&m&&!m[c]&&a(m,c,l)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},function(t,e,n){var r=n(30);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var r=n(32),i=n(37);t.exports=n(3)?function(t,e,n){return r.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(33),i=n(34),o=n(36),a=Object.defineProperty;e.f=n(3)?Object.defineProperty:function(t,e,n){if(r(t),e=o(e,!0),r(n),i)try{return a(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(2);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){t.exports=!n(3)&&!n(4)(function(){return 7!=Object.defineProperty(n(35)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(2),i=n(0).document,o=r(i)&&r(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},function(t,e,n){var r=n(2);t.exports=function(t,e){if(!r(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!r(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){"use strict";var r=n(39),i=n(50),o=n(51),a=n(52),u=n(10),s=Object.assign;t.exports=!s||n(4)(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(t){e[t]=t}),7!=s({},t)[n]||Object.keys(s({},e)).join("")!=r})?function(t,e){for(var n=a(t),s=arguments.length,c=1,f=i.f,l=o.f;s>c;)for(var d,p=u(arguments[c++]),h=f?r(p).concat(f(p)):r(p),v=h.length,y=0;v>y;)l.call(p,d=h[y++])&&(n[d]=p[d]);return n}:s},function(t,e,n){var r=n(40),i=n(49);t.exports=Object.keys||function(t){return r(t,i)}},function(t,e,n){var r=n(8),i=n(9),o=n(42)(!1),a=n(45)("IE_PROTO");t.exports=function(t,e){var n,u=i(t),s=0,c=[];for(n in u)n!=a&&r(u,n)&&c.push(n);for(;e.length>s;)r(u,n=e[s++])&&(~o(c,n)||c.push(n));return c}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(9),i=n(43),o=n(44);t.exports=function(t){return function(e,n,a){var u,s=r(e),c=i(s.length),f=o(a,c);if(t&&n!=n){for(;c>f;)if((u=s[f++])!=u)return!0}else for(;c>f;f++)if((t||f in s)&&s[f]===n)return t||f||0;return!t&&-1}}},function(t,e,n){var r=n(12),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},function(t,e,n){var r=n(12),i=Math.max,o=Math.min;t.exports=function(t,e){return(t=r(t))<0?i(t+e,0):o(t,e)}},function(t,e,n){var r=n(46)("keys"),i=n(48);t.exports=function(t){return r[t]||(r[t]=i(t))}},function(t,e,n){var r=n(1),i=n(0),o=i["__core-js_shared__"]||(i["__core-js_shared__"]={});(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n(47)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},function(t,e){t.exports=!0},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,n){var r=n(11);t.exports=function(t){return Object(r(t))}},function(t,e,n){"use strict";var r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"owl-tabs",style:t.BaseStyle},[n("ul",{style:[t.ulStyle,t.ulWidth,t.ulTransform,t.ulTransition],on:{touchstart:function(e){t.doTouchStart(e)},touchmove:function(e){t.doTouchMove(e)},touchend:function(e){t.doTouchEnd(e)}}},[t._l(t.data,function(e,r){return n("li",{key:r,ref:"tab",refInFor:!0,class:r===t.activeIndex?"active":"",style:r===t.activeIndex?[t.activeColor,t.activeStyle]:t.defaultColor,on:{click:function(n){t.tap({item:e,index:r})}}},[t._v("\n      "+t._s(t.name?e[t.name]:e)+"\n    ")])}),t._v(" "),t.lineUse?n("div",{ref:"line",staticClass:"line",style:[t.underlineStyle,t.underlineLeft]}):t._e()],2)])},staticRenderFns:[]};e.a=r}])});