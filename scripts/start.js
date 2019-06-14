const rimraf = require('rimraf');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const {compilerPromise} = require('./utils');
const paths = require('../config/paths');
const config = require('../config/webpack.config.js')('development');

const app = express();
const WEBPACK_PORT = process.env.WEBPACK_PORT || 5006;

rimraf.sync(paths.clientBuild);
rimraf.sync(paths.serverBuild);

config.entry.bundle = [
  `webpack-hot-middleware/client?path=http://localhost:${WEBPACK_PORT}/__webpack_hmr`,
  ...config.entry.bundle];

config.output.publicPath = [
  `http://localhost:${WEBPACK_PORT}`,
  paths.publicPath].join('/').replace(/([^:+])\/+/g, '$1/');

const compiler = webpack(config);
const promise = compilerPromise('Client', compiler);
promise.catch((error) => console.error(error));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  return next();
});

app.use(webpackDevMiddleware(compiler, {
  writeToDisk: true,
  publicPath: config.output.publicPath,
  ignored: /node_modules/
}));

app.use(webpackHotMiddleware(compiler));

app.listen(WEBPACK_PORT, () => {
  console.log(`Client is running: 🌎 http://localhost:${WEBPACK_PORT}`);
});
