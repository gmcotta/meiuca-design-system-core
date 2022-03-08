import { html, LitElement, unsafeCSS } from "lit";
import style from './styles.scss';

export const HEADING_SIZE_OPTIONS = ['caption', 'paragraph', 'xs', 'sm', 'md', 'lg', 'xl', 'display'];

export class DscHeading extends LitElement {
  static get styles() {
    return unsafeCSS(style);
  }

  static get properties() {
    return {
      size: { type: String }
    }
  }

  updated() {
    if(!HEADING_SIZE_OPTIONS.includes(this.size)) {
      throw new Error('Select a valid size.');
    }
  }

  constructor() {
    super();
    this.size = 'display';
  }

  render() {
    return html`
      <h1 class="heading heading--${this.size}">
        <slot></slot>
      </h1>
    `;
  }
}

if(!customElements.get('dsc-heading')) {
  customElements.define('dsc-heading', DscHeading);
}
