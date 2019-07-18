const rimraf = require('rimraf');
const webpack = require('webpack');

const paths = require('../config/paths');
const config = require('../config/webpack.config.js')('production');
const {compilerPromise} = require('./utils');

rimraf.sync(paths.clientBuild);
rimraf.sync(paths.serverBuild);

const compiler = webpack(config);
const promise = compilerPromise('Client', compiler);
promise.catch((error) => console.error(error));

compiler.run((err, stats) => {
  if (!err && !stats.hasErrors()) {
    console.info('Done!');
  }
});


