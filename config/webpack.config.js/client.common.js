const path = require('path');
const ManifestPlugin = require('webpack-manifest-plugin');

const paths = require('../paths');

module.exports = {
  name: 'client',
  entry: {
    bundle: `${paths.srcClient}/index.js`
  },
  output: {
    path: path.join(paths.clientBuild, paths.publicPath),
    filename: 'bundle.js',
    publicPath: paths.publicPath
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new ManifestPlugin()
  ]
};
