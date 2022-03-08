import { expect, fixture, oneEvent } from "@open-wc/testing";
import { html } from "lit";

import '.';

describe('Checkbox', () => {
  it('should render component with default props', async () => {
    const element = await fixture(html`
      <dsc-checkbox label="Test" name="test" id="test"></dsc-checkbox>
    `);
    expect(element.checked).to.eq(false);
    expect(element.disabled).to.eq(false);
  });

  it('should render icon when component is checked', async () => {
    const element = await fixture(html`
      <dsc-checkbox label="Test" name="test" id="test"></dsc-checkbox>
    `);
    element.shadowRoot.querySelector('label').click();
    element.requestUpdate();
    await element.updateComplete;
    const icon = element.shadowRoot.querySelector('dsc-icon');
    expect(icon).to.not.eq(null);
  });

  it('should call dscChange', async () => {
    const element = await fixture(html`
      <dsc-checkbox label="Test" name="test" id="test"></dsc-checkbox>
    `);
    const listener = oneEvent(element, 'dscChange');
    element.shadowRoot.querySelector('label').click();
    expect(await listener).to.not.be.empty;
  });
});
