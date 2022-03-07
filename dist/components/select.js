!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("lit"),require("lit/directives/class-map.js")):"function"==typeof define&&define.amd?define(["lit","lit/directives/class-map.js"],t):"object"==typeof exports?exports["dsc-design-system-core"]=t(require("lit"),require("lit/directives/class-map.js")):e["dsc-design-system-core"]=t(e.lit,e["lit/directives/class-map.js"])}(self,(function(e,t){return(()=>{"use strict";var r={870:t=>{t.exports=e},536:e=>{e.exports=t}},n={};function o(e){var t=n[e];if(void 0!==t)return t.exports;var l=n[e]={exports:{}};return r[e](l,l.exports,o),l.exports}o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var l={};return(()=>{o.r(l),o.d(l,{DscSelect:()=>d});var e,t=o(870),r=o(536);function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e,t){return a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},a(e,t)}function c(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function u(e){return u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},u(e)}var d=function(n){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&a(e,t)}(v,n);var o,l,d,f,p,h=(f=v,p=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=u(f);if(p){var r=u(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return c(this,e)});function v(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,v),(e=h.call(this)).id="",e.name="",e.value="",e.label="",e.helperText="",e.placeholder="",e.required=!1,e.disabled=!1,e.error=!1,e}return o=v,d=[{key:"styles",get:function(){return(0,t.unsafeCSS)(".select{display:flex;flex-direction:column;min-width:320px}.select label{color:var(--neutral-elements-03);font-size:var(--font-size-xxs);font-family:var(--font-family-01);font-weight:var(--font-weight-bold);line-height:var(--line-height-default);padding-bottom:var(--spacing-size-quarck)}.select .select-wrapper{display:flex;align-items:center;background-color:transparent;border:var(--border-width-thin) solid var(--neutral-color-elements-03);border-radius:var(--border-radius-sm);height:48px;padding:0 var(--spacing-inset-size-xs);box-sizing:border-box;transition-duration:.275s;transition-timing-function:cubic-bezier(0.48, 0, 0.48, 1)}.select .select-wrapper select{width:100%;height:100%;border:none;background-color:transparent;color:var(--neutral-color-elements-03);font-size:var(--font-size-xs);font-family:var(--font-family-01);line-height:var(--line-height-default);font-weight:var(--font-weight-regular)}.select .select-wrapper select:focus{outline:none}.select .select-wrapper select:invalid{color:var(--neutral-color-elements-02)}.select .select-wrapper:focus-within{outline-width:0;outline-style:solid;outline-color:var(--highlight-color-pure);outline-offset:var(--border-width-thin)}.select:hover .select-wrapper{background-color:var(--neutral-color-surface-02)}.select--focus .select-wrapper:focus-within{outline-width:var(--border-width-thin)}.select--error .select-wrapper{background-color:var(--feedback-color-warning-01);border-color:var(--feedback-color-warning-pure)}.select--disabled label{color:var(--neutral-color-elements-01)}.select--disabled .select-wrapper{background-color:var(--neutral-color-surface-02);border-color:var(--neutral-color-elements-01);color:var(--neutral-color-elements-01)}.select--disabled .select-wrapper select:invalid{color:var(--neutral-color-elements-01)}.select--disabled .select__helper-text{color:var(--neutral-color-elements-01)}.select__helper-text{padding-top:var(--spacing-size-nano);color:var(--neutral-color-elements-03);font-size:var(--font-size-xxs);font-family:var(--font-family-01);line-height:var(--line-height-default);font-weight:var(--font-weight-regular)}")}},{key:"properties",get:function(){return{id:{type:String},name:{type:String},value:{type:String},label:{type:String},helperText:{type:String},placeholder:{type:String},required:{type:Boolean},disabled:{type:Boolean},error:{type:Boolean}}}}],(l=[{key:"selectContainer",get:function(){return this.shadowRoot.querySelector(".select")}},{key:"select",get:function(){return this.shadowRoot.querySelector("select")}},{key:"firstUpdated",value:function(){var e,t,r=this,n=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("slot"),o=null==n?void 0:n.assignedNodes({flatten:!0});null===(t=Array.prototype.map)||void 0===t||t.call(o,(function(e){var t;"OPTION"===e.nodeName&&(null===(t=r.select)||void 0===t||t.appendChild(e))}))}},{key:"_handleChange",value:function(e){this.value=e.target.value,this.dispatchEvent(new CustomEvent("dscChange",{detail:{value:this.value},bubbles:!0,composed:!0}))}},{key:"_handleFocus",value:function(){this.dispatchEvent(new CustomEvent("dscFocus",{bubbles:!0,composed:!0}))}},{key:"_handleBlur",value:function(){this.selectContainer.classList.remove("select--focus"),this.dispatchEvent(new CustomEvent("dscBlur",{bubbles:!0,composed:!0}))}},{key:"_handleKeyup",value:function(e){"Tab"===e.code&&this.selectContainer.classList.add("select--focus")}},{key:"render",value:function(){var n,o,l,s=this;return(0,t.html)(e||(o=['\n    <div class="','"\n      @keyup="','"\n    >\n      <label for="','">','</label>\n      <div class="select-wrapper">\n        <select\n          id="','"\n          .name="','"\n          .value="','"\n          ?required="','"\n          ?disabled="','"\n          @input="','"\n          @focus="','"\n          @blur="','"\n        >\n          <option value="" disabled selected hidden>','</option>\n        </select>\n      </div>\n      <span class="select__helper-text">\n        ',"\n      </span>\n    </div>\n    <slot></slot>\n    "],l||(l=o.slice(0)),e=Object.freeze(Object.defineProperties(o,{raw:{value:Object.freeze(l)}}))),(0,r.classMap)((i(n={},"select",!0),i(n,"select--disabled",this.disabled),i(n,"select--error",this.error),n)),(function(e){return s._handleKeyup(e)}),this.id,this.label,this.id,this.name,this.value,this.required,this.disabled,(function(e){return s._handleChange(e)}),this._handleFocus,this._handleBlur,this.placeholder,this.helperText)}}])&&s(o.prototype,l),d&&s(o,d),Object.defineProperty(o,"prototype",{writable:!1}),v}(t.LitElement);customElements.get("dsc-select")||customElements.define("dsc-select",d)})(),l})()}));