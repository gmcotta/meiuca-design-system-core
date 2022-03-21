import { html, LitElement, unsafeCSS } from "lit";
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

import style from './heading.styles.scss';

export const HEADING_SIZE_OPTIONS = ['xs', 'sm', 'md', 'lg', 'xl', 'display'];
export const HEADING_LEVELS = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

export class DscHeading extends LitElement {
  static get styles() {
    return unsafeCSS(style);
  }

  static get properties() {
    return {
      level: { type: String },
      size: { type: String }
    }
  }

  updated() {
    if(!HEADING_SIZE_OPTIONS.includes(this.size)) {
      throw new Error('Select a valid size.');
    }

    if(!HEADING_LEVELS.includes(this.level)) {
      throw new Error('Select a valid level.');
    }
  }

  constructor() {
    super();
    this.size = 'display';
    this.level = 'h1';
  }

  render() {
    return html`
      ${unsafeHTML(`
        <${this.level} class="heading heading--${this.size}" part="typography">
          <slot></slot>
        </${this.level}>`
      )}
    `;
  }
}

if(!customElements.get('dsc-heading')) {
  customElements.define('dsc-heading', DscHeading);
}
