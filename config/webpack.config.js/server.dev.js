const commonConfig = require('./server.common');

const config = Object.assign(commonConfig, {
  mode: 'development',
  devtool: 'inline-source-map'
});

module.exports = config;
