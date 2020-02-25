const path = require('path')
const nodeExternals = require('webpack-node-externals')

const paths = require('../paths')
const plugins = require('./plugins')
const loaders = require('./loaders')

module.exports = {
  name: 'server',
  target: 'node',
  externals: [nodeExternals()],
  entry: {
    server: path.resolve(paths.srcServer, 'index.js'),
  },
  output: {
    path: paths.serverBuild,
    filename: 'server.js',
    publicPath: '/',
  },
  module: {
    rules: loaders.server,
  },
  plugins: plugins.server,
  stats: {
    colors: true,
  },
}
