const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

const env = require('../env')();
const devMode = process.env.NODE_ENV !== 'production';

const client = [
  new webpack.DefinePlugin(env),
  new MiniCssExtractPlugin({
    filename: devMode ? '[name].css' : '[name].[hash].css',
    chunkFilename: devMode ? '[id].css' : '[id].[hash].css'
  }),
  new ManifestPlugin()
];

const server = [new webpack.DefinePlugin(env)];

module.exports = {
  client,
  server
};
