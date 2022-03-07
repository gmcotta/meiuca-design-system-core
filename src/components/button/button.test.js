import { expect, fixture, oneEvent } from '@open-wc/testing';
import { html } from 'lit';
import { stub } from 'sinon';

import '.';

describe('Button', () => {
  it('should render button with default props', async () => {
    const element = await fixture(html`
      <dsc-button>Label test</dsc-button>
    `);
    expect(element.disabled).to.eq(false);
    expect(element.loading).to.eq(false);
  });

  it('should render button with loading', async () => {
    const element = await fixture(html`
      <dsc-button loading>Label test</dsc-button>
    `);
    expect(element.loading).to.eq(true);
    const innerButton = element.shadowRoot.querySelector('button');
    expect(innerButton.classList.contains('button--loading')).to.eq(true);
  });

  it('should call method if button was clicked', async () => {
    const element = await fixture(html`
      <dsc-button loading>Label test</dsc-button>
    `);
    const handleClick = stub(element, '_handleClick');
    element.requestUpdate();
    await element.updateComplete;
    element.shadowRoot.querySelector('button').click();
    expect(handleClick).to.have.been.called;
  });

  it('should call dscClick if button was clicked', async () => {
    const element = await fixture(html`
      <dsc-button loading>Label test</dsc-button>
    `);
    const listener = oneEvent(element, 'dscClick');
    element.shadowRoot.querySelector('button').click();
    expect(await listener).to.not.be.empty;
  })
});