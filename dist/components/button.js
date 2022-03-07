!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("lit"),require("lit/directives/class-map.js"),require("lit/directives/if-defined.js")):"function"==typeof define&&define.amd?define(["lit","lit/directives/class-map.js","lit/directives/if-defined.js"],t):"object"==typeof exports?exports["dsc-design-system-core"]=t(require("lit"),require("lit/directives/class-map.js"),require("lit/directives/if-defined.js")):e["dsc-design-system-core"]=t(e.lit,e["lit/directives/class-map.js"],e["lit/directives/if-defined.js"])}(self,(function(e,t,r){return(()=>{"use strict";var o={870:t=>{t.exports=e},536:e=>{e.exports=t},949:e=>{e.exports=r}},n={};function i(e){var t=n[e];if(void 0!==t)return t.exports;var r=n[e]={exports:{}};return o[e](r,r.exports,i),r.exports}i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};return(()=>{i.r(a),i.d(a,{DscButton:()=>d});var e,t=i(870),r=i(536),o=i(949);function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function u(e,t){return u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},u(e,t)}function s(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}var d=function(n){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&u(e,t)}(v,n);var i,a,d,p,b,y=(p=v,b=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=f(p);if(b){var r=f(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return s(this,e)});function v(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,v),(e=y.call(this)).disabled=!1,e.loading=!1,e}return i=v,d=[{key:"styles",get:function(){return(0,t.unsafeCSS)('.button{border:none;cursor:pointer;font-family:var(--font-family-01);font-size:var(--font-size-xs);font-weight:var(--font-weight-bold);line-height:var(--line-height-default);color:var(--contrast-color-brand);background-color:var(--brand-color-pure);border-radius:var(--border-radius-sm);margin:var(--spacing-inset-xxs);height:48px;min-width:160px;transition-duration:.275s;transition-timing-function:cubic-bezier(0.48, 0, 0.48, 1)}.button:focus-visible{outline-color:var(--highlight-color-pure);outline-width:var(--border-width-thin)}.button--loading{color:transparent;position:relative;cursor:initial}.button--loading::after{content:"";height:2px;width:0;left:50%;display:block;margin:auto;position:absolute;top:calc(50% - 1px);animation:loading 1s linear infinite}.button:not(.button--loading):hover{color:var(--brand-color-02);background-color:var(--brand-color-01)}.button:not(.button--loading):disabled{cursor:initial;color:var(--neutral-elements-01);background-color:var(--neutral-surface-02)}@keyframes loading{100%{width:10px;left:calc(50% - 5px)}}')}},{key:"properties",get:function(){return{disabled:{type:Boolean},loading:{type:Boolean}}}}],(a=[{key:"_handleClick",value:function(){this.dispatchEvent(new CustomEvent("dscClick",{bubbles:!0,composed:!0}))}},{key:"render",value:function(){var n,i,a;return(0,t.html)(e||(i=["\n      <button \n        class=","\n        ?disabled=","\n        aria-disabled=",'\n        aria-label="','"\n        @click=',"\n      >\n        <slot></slot>\n      </button>\n    "],a||(a=i.slice(0)),e=Object.freeze(Object.defineProperties(i,{raw:{value:Object.freeze(a)}}))),(0,r.classMap)((l(n={},"button",!0),l(n,"button--loading",this.loading),n)),this.disabled,this.disabled,(0,o.ifDefined)(this.loading?"Loading":void 0),this._handleClick)}}])&&c(i.prototype,a),d&&c(i,d),Object.defineProperty(i,"prototype",{writable:!1}),v}(t.LitElement);customElements.get("dsc-button")||customElements.define("dsc-button",d)})(),a})()}));