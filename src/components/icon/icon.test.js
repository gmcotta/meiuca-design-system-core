import { expect, fixture } from '@open-wc/testing';
import { html } from 'lit';

import '.';

describe('Icon', () => {
  it('should render the component with default size', async () => {
    const element = await fixture(html`
      <dsc-icon size="md" icon="Shapes"></dsc-icon>
    `);
    expect(element.size).to.eq('md');
  });

  it('should throw an error if size is not defined', async () => {
    try {
      const element = await fixture(html`
        <dsc-icon icon="Shapes"></dsc-icon>
      `);
    } catch (error) {
      expect(error.message).to.eq('Select a valid size.');
    }
  });

  it('should throw an error if icon is not defined', async () => {
    try {
      const element = await fixture(html`
        <dsc-icon size="md"></dsc-icon>
      `);
    } catch (error) {
      expect(error.message).to.eq('Select a valid icon.');
    }
  });
});
