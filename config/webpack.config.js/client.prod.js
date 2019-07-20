const commonConfig = require('./client.common');

const config = Object.assign(commonConfig, { mode: 'production' });
config.output.filename = 'bundle.[hash:8].js';

module.exports = config;
