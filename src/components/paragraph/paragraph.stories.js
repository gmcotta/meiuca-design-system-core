import {html} from 'lit';
import '.';

export default {
  title: 'Components/Typography/Paragraph'
}

export const Paragraph = ({ content }) => {
  return html`
    <dsc-paragraph>
      ${content}
    </dsc-paragraph>
  `;
}

Paragraph.args = {
  content: 'Paragraph',
}

Paragraph.argTypes = {
  content: {
    name: 'Content',
    description: 'Indica o texto que será exibido no paragraph',
    table: {
        category: 'Custom Inputs',
        type: { summary: 'string' },
        defaultValue: { summary: '' }
    }
  },
}

Paragraph.parameters = {
  docs: {
    source: {
      code: `<dsc-paragraph>[content]</dsc-paragraph>`
    }
  }
}