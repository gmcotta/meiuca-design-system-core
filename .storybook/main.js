const CopyPlugin = require('copy-webpack-plugin');

const webpackBase = require('../webpack.dev');

module.exports = {
  "stories": ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials"],
  "framework": "@storybook/web-components",
  core: {
    builder: "webpack5"
  },
  webpackFinal: (config) => {
    const webpackConfig = webpackBase();
    config.module.rules.push(...webpackConfig.module.rules);
    config.plugins.push(
      new CopyPlugin({
        patterns: [
          {
            from: 'node_modules/@gmcotta/design-tokens/dist/css/global.css',
            to: 'tokens/global.css'
          },
          {
            from: '**/**/*.css',
            context: 'node_modules/@gmcotta/design-tokens/dist/css',
            to: 'tokens/[path]/[name][ext]'
          }
        ]
      })
    );
    return config;
  } 
};