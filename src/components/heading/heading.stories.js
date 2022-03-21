import {html} from 'lit';
import '.';
import { HEADING_LEVELS, HEADING_SIZE_OPTIONS } from '.';

export default {
  title: 'Components/Typography/Heading'
}

export const Heading = ({ size, level, content }) => {
  return html`
    <dsc-heading .size="${size}" .level="${level}">
      ${content}
    </dsc-heading>
  `;
}

Heading.args = {
  content: 'Heading',
  size: 'display',
  level: 'h1'
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
  level: {
    name: 'Level',
    description: 'Indica a hierarquia do heading a ser exibido',
    table: {
      category: 'Modifiers',
      type: { summary: 'string' },
      defaultValue: { summary: 'h1' }
    },
    control: 'select',
    options: HEADING_LEVELS
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
      code: `<dsc-heading size="display" level="h1">[content]</dsc-heading>`
    }
  }
}