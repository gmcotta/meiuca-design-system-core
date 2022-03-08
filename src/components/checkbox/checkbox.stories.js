import { html } from 'lit';

import '.';

export default {
  title: 'Components/Checkbox'
}

export const Checkbox = ({
  label
}) => {
  return html`
    <dsc-checkbox .label="${label}"></dsc-checkbox>
  `;
}

Checkbox.args = {
  label: 'Label',
}

Checkbox.argTypes = {
  label: {
    name: 'Label',
    description: 'Define a label do checkbox',
    table: {
      category: 'Custom Inputs',
      type: { summary: 'string' },
      defaultValue: { summary: '' }
    }
  }
}

Checkbox.parameters = {
  docs: {
    source: {
      code: `<dsc-checkbox label="Label"></dsc-checkbox>`
    }
  }
}