import { html, LitElement, unsafeCSS } from "lit";
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import style from './button.styles.scss';

export class DscButton extends LitElement {
  static get styles() {
    return unsafeCSS(style);
  }

  static get properties() {
    return {
      disabled: { type: Boolean },
      loading: { type: Boolean }
    }
  }

  constructor() {
    super();
    this.disabled = false;
    this.loading = false;
  }

  _handleClick() {
    this.dispatchEvent(new CustomEvent('dscClick', {
      bubbles: true,
      composed: true
    }))
  }

  render() {
    return html`
      <button 
        class=${classMap({
          [`button`]: true,
          [`button--loading`]: this.loading
        })}
        ?disabled=${this.disabled}
        aria-disabled=${this.disabled}
        aria-label="${ifDefined(this.loading ? 'Loading': undefined)}"
        @click=${this._handleClick}
      >
        <slot></slot>
      </button>
    `
  }
}

if(!customElements.get('dsc-button')) {
  customElements.define('dsc-button', DscButton);
}
