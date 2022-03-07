import { LitElement, html, unsafeCSS } from "lit";
import { classMap } from 'lit/directives/class-map.js';

import { createSvgElement } from '../../utils/js/svgHelper'; 
import Brand from "./Brand";
import menu from '@gmcotta/meiuca-assets/dist/assets/icons/menu';
import close from '@gmcotta/meiuca-assets/dist/assets/icons/close';
import '../icon';
import style from './styles.scss';

export default class DscHeader extends LitElement {
  static get styles() {
    return unsafeCSS(style);
  }

  static get properties() {
    return {
      opened: { type: Boolean }
    };
  }

  constructor() {
    super();
    this.opened = false;
  }

  _handleChange() {
    this.opened = !this.opened;
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
      <div
        class="${classMap({
          [`header`]: true,
          [`header--opened`]: this.opened
        })}"
      >
        <div class="header-brand">
          ${createSvgElement(Brand)}
        </div>
        <div class="header-button">
          <dsc-icon
            .icon="${this.opened ? close : menu }"
            size="lg"
            @click="${this._handleChange}"
          >
          </dsc-icon>
        </div>
        <div class="header-nav">
          <slot></slot>
        </div>
      </div>
    `;
  }
}

if (!customElements.get('dsc-header')) {
  customElements.define('dsc-header', DscHeader);
}