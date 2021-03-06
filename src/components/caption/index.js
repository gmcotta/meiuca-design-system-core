import { html, LitElement, unsafeCSS } from "lit";
import style from './caption.styles.scss';

export class DscCaption extends LitElement {
  static get styles() {
    return unsafeCSS(style);
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <span part="typography">
        <slot></slot>
      </span>
    `;
  }
}

if(!customElements.get('dsc-caption')) {
  customElements.define('dsc-caption', DscCaption);
}
