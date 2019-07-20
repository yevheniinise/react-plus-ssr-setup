const ManifestPlugin = require('webpack-manifest-plugin');

const client = [
  new ManifestPlugin()
];

const server = [];

module.exports = {
  client,
  server
};
