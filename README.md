# Meiuca - Biblioteca de componentes Core

## [Storybook da aplicação](https://meiuca-design-system-core.vercel.app/?path=/story/components-select--select)

### Introdução

Esse repositório tem o objetivo de mostrar uma biblioteca de componentes principais para um design system, criada a partir do curso de Design Systems in Code, da Meiuca.

Ao longo do curso, desenvolvemos um design system contendo design tokens, assets (ícones), uma biblioteca de componentes core (contendo os elementos mais primitivos, como botão, input, tipografia...) e uma biblioteca de times (que usa da biblioteca core para criar seus componentes, que serão usados para um produto específico). Dentro da landing page também possuem componentes que não fazem parte do design system e é exclusivo para a página desenvolvida.

Abaixo encontram-se os links para os repositórios do design system:

- [Design Tokens](https://github.com/gmcotta/meiuca-design-tokens)
- [Assets](https://github.com/gmcotta/meiuca-assets)
- [Biblioteca Core](https://github.com/gmcotta/meiuca-design-system-core)
- [Biblioteca de Time](https://github.com/gmcotta/meiuca-design-system-team-lp)
- [Landing Page](https://github.com/gmcotta/meiuca-ds-landing-page)

Abaixo encontra-se também o link para o projeto do design system e da landing page no Figma:

- [Figma](https://www.figma.com/file/ADrWGQ6GfDjIMKkWsJ65M0/DS-in-Code-%7C-Atividade-pr%C3%A1tica?node-id=2%3A3199)

***

### Tecnologias

Os componentes foram desenvolvidos usando web-components. Como a biblioteca foi criada de maneira agnóstica a frameworks/bibliotecas, os times que irão consumi-la não terão um retrabalho de reproduzir para a tecnologia do projeto. Por exemplo, um time que usa React não precisará recriar a biblioteca para adaptar os componentes para React, e um time que usa Angular pode utilizar a biblioteca, pois os componentes em web-components não dependem do React ou do Angular para funcionar.

Para a criação da biblioteca foram usados:
- [Lit](https://lit.dev/), para facilitar a criação dos web-components;
- [SASS](https://sass-lang.com/), para estilizar os componentes;
- [Storybook](https://storybook.js.org/), para apresentar e documentar os componentes e suas propriedades;
- [Webpack](https://webpack.js.org/), como bundler da aplicação;
- [@open-wc/testing](https://open-wc.org/docs/testing/testing-package/), para testar os componentes.

### Componentes
- Button
- Card
- Checkbox
- Header
- Icon
- Input Text
- Link
- Radio Button
- Select
- Switch
- Tag
- Textarea
- Tooltip
- Typography
  - Caption
  - Heading
  - Paragraph

### Como iniciar localmente a página

Primeiramente, baixe o repositório:
```bash
  git clone git@github.com:gmcotta/meiuca-design-system-core.git <nome_da_pasta>
```

Entre na pasta gerada:
```bash
  cd nome_da_pasta
```

Instale as dependências (uso o Yarn para gerenciar os pacotes):
```bash
  yarn
```

Para iniciar a aplicação:
```bash
  yarn start
```
A página irá iniciar localmente em ```http://localhost:8080```. O intuito da página era mais para verificar se o componente está renderizado corretamente antes de ter criado o Storybook.

Para iniciar o Storybook:
```bash
  yarn storybook
```

Para iniciar os testes:
```bash
  yarn test:watch
```

Para rodar os testes apenas uma vez:
```bash
  yarn test
```

Para mostrar a cobertura de código:
```bash
  yarn test:coverage
```

Para fazer o build da aplicação:
```bash
  yarn build
```
Importante: caso seja criado algum componente, adicione um objeto referente ao componente no arquivo ```webpack_entries.json```, e depois rode o comando acima.
A pasta gerada é ```dist```.

Para fazer o build do Storybook:
```bash
  yarn build-storybook
```
A pasta gerada é ```storybook-static```.

Para publicar o pacote:
```bash
  npm publish --access public
```
