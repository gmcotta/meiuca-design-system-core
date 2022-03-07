import { html } from 'lit';
import { action } from '@storybook/addon-actions';

import './index.js';

export default {
  title: 'Components/Select'
}

export const Select = ({
  name,
  value,
  label,
  placeholder,
  helperText,
  required,
  disabled,
  error
}) => {

  function _handleChange(event) {
    action('dscChange')({ value: event.detail.value });
  }

  function _handleFocus() {
    action('dscFocus')({ value: 'Focus event' });
  }
  function _handleBlur() {
    action('dscFocus')({ value: 'Blur event' });
  }

  return html`
    <dsc-select
      id="input-text-id"
      .name="${name}"
      .value="${value}"
      .label="${label}"
      .placeholder="${placeholder}"
      .helperText="${helperText}"
      ?required="${required}"
      ?disabled="${disabled}"
      ?error="${error}"
      @dscChange="${event => _handleChange(event)}"
      @dscFocus="${_handleFocus}"
      @dscBlur="${_handleBlur}"
    >
      <option value="1">Label 1</option>
      <option value="2">Label 2</option>
      <option value="3">Label 3</option>
      <option value="4">Label 4</option>
      <option value="5">Label 5</option>
      <option value="6">Label 6</option>
    </dsc-select>
  `
}

Select.args = {
  value: '',
  name: 'select',
  label: 'Label',
  placeholder: 'Input text',
  helperText: 'Helper text',
  required: true,
  disabled: false,
  error: false,
}
