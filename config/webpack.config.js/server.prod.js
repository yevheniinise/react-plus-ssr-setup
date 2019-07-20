const commonConfig = require('./server.common');

const config = Object.assign(commonConfig, {
  mode: 'production',
});

module.exports = config;
