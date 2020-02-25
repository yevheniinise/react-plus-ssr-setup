const rimraf = require('rimraf')
const webpack = require('webpack')

const paths = require('../config/paths')
const [clientConfig, serverConfig] = require('../config/webpack.config.js')('production')
const {compilerPromise, log} = require('./utils')

const build = async () => {
  rimraf.sync(paths.clientBuild)
  rimraf.sync(paths.serverBuild)

  const multipleCompiler = webpack([clientConfig, serverConfig])
  const [clientCompiler, serverCompiler] = multipleCompiler.compilers

  const clientPromise = compilerPromise('client', clientCompiler)
  const serverPromise = compilerPromise('server', serverCompiler)

  clientCompiler.run((err, stats) => {
    if (!err && !stats.hasErrors()) {
      console.info(stats.toString(clientConfig.stats))
      return
    }
  })

  serverCompiler.run((err, stats) => {
    if (!err && !stats.hasErrors()) {
      console.info(stats.toString(serverConfig.stats))
      return
    }
  })

  try {
    await clientPromise
    await serverPromise
    log('Done!', 'info')
  } catch (error) {
    log(error, 'error')
  }
}

build()
