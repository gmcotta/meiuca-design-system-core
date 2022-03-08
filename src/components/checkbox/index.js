import { LitElement, html, unsafeCSS } from "lit";

import style from './styles.scss';

export default class DscCheckbox extends LitElement {
  static get styles() {
    return unsafeCSS();
  }

  static get properties() {
    return {
      id: { type: String },
      name: { type: String },
      label: { type: String },
      checked: { type: Boolean },
      required: { type: Boolean },
      disabled: { type: Boolean },
    }
  }

  constructor() {
    super();
    this.id = '';
    this.name = '';
    this.label = '';
    this.checked = false;
    this.required = false;
    this.disabled = false;
  }

  render() {
    return html`
      <label>
        <input type="checkbox" />
        <span></span>
        ${this.label}
      </label>
    `;
  }
}

if(!customElements.get('dsc-checkbox')) {
  customElements.define('dsc-checkbox', DscCheckbox);
}
