import { expect, fixture, oneEvent } from '@open-wc/testing';
import { html } from 'lit';

import '.';

describe('Header', () => {
  it('should render component', async () => {
    const element = await fixture(html`
      <dsc-header></dsc-header>
    `);
    expect(element.opened).to.eq(false);
  });

  it('should call open the menu', async () => {
    const element = await fixture(html`
      <dsc-header></dsc-header>
    `);
    const iconButton = element.shadowRoot.querySelector('dsc-icon');
    const listener = oneEvent(element, 'dscClick');
    iconButton.click();
    expect(element.opened).to.eq(true);
    expect(await listener).to.not.be.empty;
  });
});