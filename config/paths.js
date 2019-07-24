const path = require('path');

const appDirectory = process.cwd();
const resolvePath = (relativePath) => path.resolve(appDirectory, relativePath);

const paths = {
  clientBuild: resolvePath('build/client'),
  serverBuild: resolvePath('build/server'),
  srcClient: resolvePath('src/client'),
  srcServer: resolvePath('src/server'),
  dotenv: resolvePath('.env'),
  publicPath: '/static/'
};

module.exports = paths;
