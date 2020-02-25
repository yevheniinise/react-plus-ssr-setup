const webpack = require('webpack')
const commonConfig = require('./client.common')

const config = Object.assign(commonConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
})

config.plugins = [...config.plugins, new webpack.HotModuleReplacementPlugin()]

module.exports = config
