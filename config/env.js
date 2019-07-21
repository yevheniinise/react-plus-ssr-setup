const { parsed } = require('dotenv').config();

const stringifiedEnv = Object.keys(parsed).reduce((env, key) => {
  env[`process.env.${key}`] = JSON.stringify(parsed[key]);
  return env;
}, {});

module.exports = stringifiedEnv;
