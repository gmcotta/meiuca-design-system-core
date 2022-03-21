!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("lit")):"function"==typeof define&&define.amd?define(["lit"],t):"object"==typeof exports?exports["dsc-design-system-core"]=t(require("lit")):e["dsc-design-system-core"]=t(e.lit)}(self,(function(e){return(()=>{"use strict";var t={870:t=>{t.exports=e}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}};return t[e](i,i.exports,r),i.exports}r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};return(()=>{r.r(o),r.d(o,{DscHeading:()=>c,HEADING_SIZE_OPTIONS:()=>l});var e,t=r(870);function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t){return a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},a(e,t)}function f(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function s(e){return s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},s(e)}var l=["xs","sm","md","lg","xl","display"],c=function(n){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&a(e,t)}(h,n);var r,o,c,d,u,p=(d=h,u=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=s(d);if(u){var n=s(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return f(this,e)});function h(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,h),(e=p.call(this)).size="display",e}return r=h,c=[{key:"styles",get:function(){return(0,t.unsafeCSS)("h1{margin:0;font-family:var(--font-family-01);color:var(--neutral-color-elements-03);font-weight:var(--font-weight-regular);line-height:var(--line-height-default)}.heading--display{font-size:var(--font-size-xxxl)}@media screen and (min-width: 768px){.heading--display{font-size:var(--font-size-xxxl)}}@media screen and (min-width: 1366px){.heading--display{font-size:var(--font-size-giant)}}@media screen and (min-width: 1440px){.heading--display{font-size:var(--font-size-giant)}}.heading--xl{font-size:var(--font-size-xxl);font-weight:var(--font-weight-bold)}@media screen and (min-width: 768px){.heading--xl{font-size:var(--font-size-xxl)}}@media screen and (min-width: 1366px){.heading--xl{font-size:var(--font-size-xxxl)}}@media screen and (min-width: 1440px){.heading--xl{font-size:var(--font-size-xxxl)}}.heading--lg{font-size:var(--font-size-xl);font-weight:var(--font-weight-bold)}@media screen and (min-width: 768px){.heading--lg{font-size:var(--font-size-xl)}}@media screen and (min-width: 1366px){.heading--lg{font-size:var(--font-size-xxl)}}@media screen and (min-width: 1440px){.heading--lg{font-size:var(--font-size-xxl)}}.heading--md{font-size:var(--font-size-lg);font-weight:var(--font-weight-bold)}.heading--sm{font-size:var(--font-size-md);font-weight:var(--font-weight-bold)}.heading--xs{font-size:var(--font-size-xs);font-weight:var(--font-weight-bold)}.heading--paragraph{font-size:var(--font-size-xs)}.heading--caption{font-size:var(--font-size-xxs)}")}},{key:"properties",get:function(){return{size:{type:String}}}}],(o=[{key:"updated",value:function(){if(!l.includes(this.size))throw new Error("Select a valid size.")}},{key:"render",value:function(){return(0,t.html)(e||(n=['\n      <h1 class="heading heading--','">\n        <slot></slot>\n      </h1>\n    '],r||(r=n.slice(0)),e=Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(r)}}))),this.size);var n,r}}])&&i(r.prototype,o),c&&i(r,c),Object.defineProperty(r,"prototype",{writable:!1}),h}(t.LitElement);customElements.get("dsc-heading")||customElements.define("dsc-heading",c)})(),o})()}));