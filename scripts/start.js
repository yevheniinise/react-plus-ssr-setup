const express = require('express');
const nodemon = require('nodemon');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const rimraf = require('rimraf');

const [clientConfig, serverConfig] = require('../config/webpack.config.js')('development');
const paths = require('../config/paths');
const { compilerPromise, log } = require('./utils');

const app = express();

const WEBPACK_PORT = process.env.WEBPACK_PORT || 5001;

const start = async () => {
  rimraf.sync(paths.clientBuild);
  rimraf.sync(paths.serverBuild);

  clientConfig.entry.bundle = [
    `webpack-hot-middleware/client?path=http://localhost:${WEBPACK_PORT}/__webpack_hmr`,
    ...clientConfig.entry.bundle
  ];

  const multiCompiler = webpack([clientConfig, serverConfig]);
  const [clientCompiler, serverCompiler] = multiCompiler.compilers;

  const clientPromise = compilerPromise('Client', clientCompiler);
  const serverPromise = compilerPromise('Server', serverCompiler);

  app.use(
    webpackDevMiddleware(clientCompiler, {
      writeToDisk: true,
      publicPath: clientConfig.output.publicPath,
      ignored: /node_modules/
    })
  );

  app.use(require('webpack-hot-middleware')(clientCompiler));

  app.listen(WEBPACK_PORT);

  serverCompiler.watch({ ignored: /node_modules/ }, (error, stats) => {
    if (!error && !stats.hasErrors()) {
      console.log(stats.toString(serverConfig.stats));
      return;
    }
  });

  try {
    await clientPromise;
    await serverPromise;
  } catch (error) {
    log(error, 'error');
  }

  const script = nodemon({
    script: `${paths.serverBuild}/server.js`,
    ignore: ['src', 'scripts', 'config', './*.*', 'build/client']
  });

  script.on('restart', () => {
    log('Server side app has been restarted.', 'info');
  });

  script.on('quit', () => {
    console.log('Process ended.');
    process.exit();
  });

  script.on('error', () => {
    log('An error occured. Exiting.', 'error');
    process.exit(1);
  });
};

start();
