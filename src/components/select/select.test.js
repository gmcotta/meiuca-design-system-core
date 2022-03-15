import { expect, fixture, oneEvent } from '@open-wc/testing';
import { html } from 'lit';
import { stub } from 'sinon';

import '.';

describe('Select', () => {
  it('should render the component', async () => {
    const element = await fixture(html`
      <dsc-select
        id="input-text-id"
        name="select"
        value=""
        label="Label"
        placeholder="Select"
        helperText="Helper text"
      >
        <option value="1">Label 1</option>
        <option value="2">Label 2</option>
        <option value="3">Label 3</option>
        <option value="4">Label 4</option>
        <option value="5">Label 5</option>
        <option value="6">Label 6</option>
    </dsc-select>
    `);
    expect(element.required).to.eq(false);
    expect(element.disabled).to.eq(false);
    expect(element.error).to.eq(false);
  });

  it.skip('should change the value', async () => {
    const element = await fixture(html`
      <dsc-select
        id="input-text-id"
        name="select"
        value=""
        label="Label"
        placeholder="Select"
        helperText="Helper text"
      >
        <option value="1">Label 1</option>
        <option value="2">Label 2</option>
        <option value="3">Label 3</option>
        <option value="4">Label 4</option>
        <option value="5">Label 5</option>
        <option value="6">Label 6</option>
    </dsc-select>
    `);
    const handleChange = stub(element, '_handleChange');
    element.requestUpdate();
    await element.updateComplete;

    const selectElement = element.shadowRoot.querySelector('select');
    selectElement.value = '1';
    element.requestUpdate();
    await element.updateComplete;

    // expect(handleChange).to.have.been.called;
  });

  it('should focus when Tab key is pressed', async () => {
    const element = await fixture(html`
      <dsc-select
        id="input-text-id"
        name="select"
        value=""
        label="Label"
        placeholder="Select"
        helperText="Helper text"
      >
        <option value="1">Label 1</option>
        <option value="2">Label 2</option>
        <option value="3">Label 3</option>
        <option value="4">Label 4</option>
        <option value="5">Label 5</option>
        <option value="6">Label 6</option>
      </dsc-select>
    `);
    const selectContainer = element.shadowRoot.querySelector('.select');
    selectContainer.dispatchEvent(new KeyboardEvent('keyup', { code: 'Tab' }));
    element.requestUpdate();
    await element.updateComplete;
    expect(selectContainer.classList.contains('select--focus')).to.eq(true);
  });

  it('should call handleFocus and handleBlur', async () => {
    const element = await fixture(html`
      <dsc-select
        id="input-text-id"
        name="select"
        value=""
        label="Label"
        placeholder="Select"
        helperText="Helper text"
      >
        <option value="1">Label 1</option>
        <option value="2">Label 2</option>
        <option value="3">Label 3</option>
        <option value="4">Label 4</option>
        <option value="5">Label 5</option>
        <option value="6">Label 6</option>
      </dsc-select>
    `);
    const handleFocus = stub(element, '_handleFocus');
    const handleBlur = stub(element, '_handleBlur');
    const selectElement = element.shadowRoot.querySelector('select');
    element.requestUpdate();
    await element.updateComplete;
    selectElement.focus();
    expect(handleFocus).to.have.been.called;
    selectElement.blur();
    expect(handleBlur).to.have.been.called;
  });
});