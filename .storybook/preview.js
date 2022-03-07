import { html } from "lit"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const globalTypes = {
  theme: {
    name: 'Themes',
    description: 'Temas',
    defaultValue: 'marca-a/tema-1',
    right: true,
    toolbar: {
      icon: 'globe',
      items: [
        {
          value: 'marca-a/tema-1',
          title: 'Marca A',
          right: 'Tema 1'
        },
        {
          value: 'marca-a/tema-2',
          title: 'Marca A',
          right: 'Tema 2'
        }
      ],
      showName: true
    }
  },
  mode: {
    name: 'Mode',
    description: 'Mode',
    defaultValue: 'light',
     right: true,
     toolbar: {
       icon: 'globe',
       items: [
         {
          value: 'light',
          title: 'Light',
         },
         {
          value: 'dark',
          title: 'Dark',
         }
       ],
       showName: true
     }
  }
}

export const decorators = [
  (Story, context) => {
    let style = '';
    let [brand, theme] = context.globals.theme.split('/');
    let mode = context.globals.mode;
    if (mode === 'dark') {
      style = `.sb-show-main { background: #292929 !important; }`;
    }

    return html`
      <style>${style}</style>
      <div brand=${brand} theme=${theme} mode=${mode}>
      <link rel="stylesheet" type="text/css" href="tokens/global.css" />
      <link rel="stylesheet" type="text/css" href="tokens/${brand}/${theme}/${mode}.css" />
        ${Story()}
      </div>
    `;
  }
]