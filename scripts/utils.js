const chalk = require('chalk')

const messageTypes = {
  info: chalk.cyan,
  error: chalk.bold.red,
  warning: chalk.keyword('orange'),
}

exports.log = (message, type) => {
  console.log(messageTypes[type](message))
}

exports.compilerPromise = (name, compiler) => {
  return new Promise((resolve, reject) => {
    compiler.hooks.compile.tap(name, () => {
      console.log(`Compiling ${name}...`)
    })
    compiler.hooks.done.tap(name, stats => {
      if (!stats.hasErrors()) {
        return resolve()
      }
      return reject(`Failed to compile ${name}`)
    })
  })
}
