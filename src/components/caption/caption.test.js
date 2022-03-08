import { expect, fixture } from '@open-wc/testing';
import { html } from 'lit';

import '.';

describe('Caption', () => {
  it('should render the component', async () => {
    const element = await fixture(html`
      <dsc-caption>Test</dsc-caption>
    `);
    expect(element).dom.to.equalSnapshot();
  });
});
