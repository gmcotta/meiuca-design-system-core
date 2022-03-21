import { LitElement, html, unsafeCSS } from 'lit';

import style from './tag.styles.scss';

export default class DscTag extends LitElement {

  static get styles(){
    return unsafeCSS(style);
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <span class="tag">
        <slot></slot>
      </span>
    `
  }
}

if (!customElements.get('dsc-tag')) { 
  customElements.define('dsc-tag', DscTag); 
}
