import {html} from 'lit';
import '.';

export default {
  title: 'Components/Typography/Caption'
}

export const Caption = ({ content }) => {
  return html`
    <dsc-caption>
      ${content}
    </dsc-caption>
  `;
}

Caption.args = {
  content: 'Caption',
}

Caption.argTypes = {
  content: {
    name: 'Content',
    description: 'Indica o texto que será exibido no caption',
    table: {
        category: 'Custom Inputs',
        type: { summary: 'string' },
        defaultValue: { summary: '' }
    }
  },
}

Caption.parameters = {
  docs: {
    source: {
      code: `<dsc-caption>[content]</dsc-caption>`
    }
  }
}