const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const commonConfig = require('./client.common')

const config = Object.assign(commonConfig, {mode: 'production'})

config.output.filename = 'bundle.[hash:8].js'
config.optimization = {
  minimizer: [new TerserPlugin(), new OptimizeCSSAssetsPlugin()],
}

module.exports = config
