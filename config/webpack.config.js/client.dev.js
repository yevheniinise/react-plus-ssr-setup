const commonConfig = require('./client.common');

const config = Object.assign(commonConfig, {
  mode: 'development',
  devtool: 'inline-source-map'
});

module.exports = config;
