const env = require('../env');
const webpack = require('webpack');
const ManifestPlugin = require('webpack-manifest-plugin');

const client = [
  new webpack.DefinePlugin(env),
  new ManifestPlugin()
];

const server = [
  new webpack.DefinePlugin(env)
];

module.exports = {
  client,
  server
};
