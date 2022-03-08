import {html} from 'lit';
import '.';
import { HEADING_SIZE_OPTIONS } from '.';

export default {
  title: 'Components/Typography/Heading'
}

export const Heading = ({ size, content }) => {
  return html`
    <dsc-heading .size="${size}">
      ${content}
    </dsc-heading>
  `;
}

Heading.args = {
  content: 'Heading',
  size: 'display'
}

Heading.argTypes = {
  size: {
    name: 'Size',
    description: 'Indica o tamanho do heading a ser exibido',
    table: {
      category: 'Modifiers',
      type: { summary: 'string' },
      defaultValue: { summary: 'display' }
    },
    control: 'select',
    options: HEADING_SIZE_OPTIONS
  },
  content: {
    name: 'Content',
    description: 'Indica o texto que será exibido no heading',
    table: {
        category: 'Custom Inputs',
        type: { summary: 'string' },
        defaultValue: { summary: '' }
    }
  },
}

Heading.parameters = {
  docs: {
    source: {
      code: `<dsc-heading size="display>[content]</dsc-heading>`
    }
  }
}