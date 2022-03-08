import { expect, fixture } from '@open-wc/testing';
import { html } from 'lit';

import '.';

describe('Heading', () => {
  it('should render the component', async () => {
    const element = await fixture(html`
      <dsc-paragraph>Test</dsc-paragraph>
    `);
    expect(element).dom.to.equalSnapshot();
  });
});
