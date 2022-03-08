import { LitElement, html, unsafeCSS } from 'lit';
import { classMap } from 'lit/directives/class-map.js';

import '../icon';
import check from '@gmcotta/meiuca-assets/dist/assets/icons/check';
import style from './checkbox.styles.scss';

export default class DscCheckbox extends LitElement {
  static get styles() {
    return unsafeCSS(style);
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

  get hiddenInput() {
    return this.shadowRoot?.querySelector('input');
  }

  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if(propName === 'checked' && oldValue !== undefined) {
        this.hiddenInput.checked = this.checked;
        this._handleDispatchEvent();
      }
    });
  }

  _handleChange() {
    this.checked = !this.checked;
    this._handleDispatchEvent();
  }

  _handleDispatchEvent() {
    this.dispatchEvent(new CustomEvent('dscChange', {
      detail: {
        checked: this.checked
      },
      bubbles: true,
      composed: true
    }));
  }

  render() {
    return html`
      <label
        class="${classMap({
          ['checkbox']: true,
          ['checkbox--checked']: this.checked,
          ['checkbox--disabled']: this.disabled
        })}"
        .for="${this.name}"
      >
        <input 
          type="checkbox" 
          .id="${this.id}"
          .name="${this.name}"
          ?disabled="${this.disabled}"
          ?checked="${this.checked}"
          ?required="${this.required}"
          .aria-checked="${this.checked}"
          @change="${this._handleChange}"
        />
        <span class="checkbox-checkmark">
          ${this.checked 
            ? html`
              <dsc-icon .icon="${check}" size="sm"></dsc-icon>
            `
            : null
          }
        </span>
        <span class="checkbox-label">
          ${this.label}
        </span>
      </label>
    `;
  }
}

if(!customElements.get('dsc-checkbox')) {
  customElements.define('dsc-checkbox', DscCheckbox);
}
