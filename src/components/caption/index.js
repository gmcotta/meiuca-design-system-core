import { html, LitElement, unsafeCSS } from "lit";
import style from './styles.scss';

export class DscCaption extends LitElement {
  static get styles() {
    return unsafeCSS(style);
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <span>
        <slot></slot>
      </span>
    `;
  }
}

if(!customElements.get('dsc-caption')) {
  customElements.define('dsc-caption', DscCaption);
}
