import { expect, fixture } from '@open-wc/testing';
import { html } from 'lit';

import '.';

describe('Heading', () => {
  it('should render the component with display size by default', async () => {
    const element = await fixture(html`
      <dsc-heading>Test</dsc-heading>
    `);
    expect(element.size).to.eq('display');
  });

  it('should render the component with xl size', async () => {
    const element = await fixture(html`
      <dsc-heading size="xl">Test</dsc-heading>
    `);
    const h1Element = element.shadowRoot.querySelector('h1');
    expect(element.size).to.eq('xl');
    expect(h1Element.classList.contains('heading--xl')).to.eq(true);
  });

  it('should throw an error if an invalid size is selected', async () => {
    try {
      await fixture(html`
        <dsc-heading size="test">Test</dsc-heading>
      `);
      expect.fail();
    } catch (error) {
      expect(error.message).to.eq('Select a valid size.');
    }
  });
});
