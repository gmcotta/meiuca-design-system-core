import { LitElement, html, unsafeCSS } from "lit";
import { classMap } from 'lit/directives/class-map.js';

import { createSvgElement } from "../../utils/js/svgHelper";

import style from './icon.styles.scss';

const ICON_SIZE_OPTIONS = ['sm', 'md', 'lg'];

export default class DscIcon extends LitElement {
  static get styles() {
    return unsafeCSS(style);
  }

  static get properties() {
    return {
      size: { type: String },
      icon: { type: String }
    }
  }
  
  constructor() {
    super();
    this.size = '';
    this.icon = '';
  }

  updated() {
    if(!ICON_SIZE_OPTIONS.includes(this.size)) {
      throw new Error('Select a valid size.');
    }
    if(!this.icon) {
      throw new Error('Select a valid icon.');
    }
  }

  render () {
    return html`
      <div 
        class="${classMap({
          [`icon`]: true,
          [`icon--${this.size}`]: true
        })}"
        part="icon"
      >
        ${createSvgElement(this.icon)}
      </div>
    `;
  }
}

if (!customElements.get('dsc-icon')) {
  customElements.define('dsc-icon', DscIcon);
}
