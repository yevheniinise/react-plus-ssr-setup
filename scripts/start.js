const rimraf = require('rimraf');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const {compilerPromise} = require('./utils');
const paths = require('../config/paths');
const config = require('../config/webpack.config.js')('development');

const app = express();
const WEBPACK_PORT = process.env.WEBPACK_PORT || 5006;

rimraf.sync(paths.clientBuild);
rimraf.sync(paths.serverBuild);

const compiler = webpack(config);
const promise = compilerPromise('Client', compiler);
promise.catch((error) => console.error(error));

app.use(webpackDevMiddleware(compiler, {
  writeToDisk: true,
  publicPath: config.output.publicPath,
  ignored: /node_modules/
}));

app.listen(WEBPACK_PORT, () => {
  console.log(`Client is running: 🌎 http://localhost:${WEBPACK_PORT}`);
});
