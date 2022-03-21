import { html, LitElement, unsafeCSS } from "lit";
import style from './paragraph.styles.scss';

export class DscParagraph extends LitElement {
  static get styles() {
    return unsafeCSS(style);
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <p part="typography">
        <slot></slot>
      </p>
    `;
  }
}

if(!customElements.get('dsc-paragraph')) {
  customElements.define('dsc-paragraph', DscParagraph);
}
