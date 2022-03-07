const { merge } = require('webpack-merge');

const common = require('./webpack.common');
const webpackEntries = require('./webpack_entries.json');

module.exports = () => {
  const prod = {
    entry: webpackEntries,
    mode: 'production',
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000
    },
    externals: [
      /lit/gi,
      /lit\/directives\/class-map/gi,
      /lit\/directioves\/if-defined/gi,
      /@gmcotta/gi
    ]
  };
  return merge(common, prod);
};
