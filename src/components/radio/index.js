import { LitElement, html, unsafeCSS } from 'lit';
import { classMap } from 'lit/directives/class-map.js';

import bullet from '@meiuca/dsc-assets/dist/assets/icons/bullet';
import '../icon'

import style from './radio.styles.scss';

export default class DscRadio extends LitElement {
  static get styles() {
    return unsafeCSS(style);
  }

  static get properties() {
    return {
      id: { type: String },
      name: { type: String },
      label: { type: String },
      value: { type: String },
      index: { type: Number },
      checked: { type: Boolean },
      required: { type: Boolean },
      disabled: { type: Boolean },
    }
  }

  constructor() {
    super();
    this.id = 'dsc-radio';
    this.name = 'dsc-radio';
    this.label = '';
    this.value = '';
    this.index = 0;
    this.checked = false;
    this.required = false;
    this.disabled = false;
  }

  render() {
    return html`
      <label
        class="${classMap({
          ['radio']: true,
          ['radio--checked']: this.checked,
          ['radio--disabled']: this.disabled,
        })}"
        for="${this.name}"
      >
        <input 
          type="radio"
          .id="${this.id}"
          .name="${this.name}"
          .value="${this.value}"
          ?disabled="${this.disabled}"
          ?checked="${this.checked}"
          ?required="${this.required}"
          aria-checked="${this.checked}"
          @click="${this._handleClick}"
        />
        <span class="radio-checkmark">
          ${this.checked 
            ? html`<dsc-icon .icon="${bullet}" size="sm"></dsc-icon>`
            : null
          }
        </span>
        ${this.label}
      </label>
    `;
  }
}