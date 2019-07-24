const path = require('path');

const paths = require('../paths');
const plugins = require('./plugins');
const loaders = require('./loaders');

module.exports = {
  name: 'client',
  entry: {
    bundle: [`${paths.srcClient}/index.js`]
  },
  output: {
    path: path.join(paths.clientBuild, paths.publicPath),
    filename: 'bundle.js',
    publicPath: paths.publicPath
  },
  module: {
    rules: loaders.client
  },
  plugins: plugins.client,
  stats: {
    colors: true
  }
};
