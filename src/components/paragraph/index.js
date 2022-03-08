import { html, LitElement, unsafeCSS } from "lit";
import style from './styles.scss';

export class DscParagraph extends LitElement {
  static get styles() {
    return unsafeCSS(style);
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <p>
        <slot></slot>
      </p>
    `;
  }
}

if(!customElements.get('dsc-paragraph')) {
  customElements.define('dsc-paragraph', DscParagraph);
}
