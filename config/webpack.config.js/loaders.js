const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const stylesRegexp = /\.(sc|c)ss$/;

const babelLoader = {
  test: /\.m?js$/,
  exclude: /(node_modules|bower_components)/,
  loader: 'babel-loader'
};

const cssLoaderClient = {
  test: stylesRegexp,
  use: [
    process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader, // creates style nodes from JS strings
    'css-loader', // translates CSS into CommonJS
    'postcss-loader',
    'sass-loader' // compiles Sass to CSS, using Node Sass by default
  ]
};

const cssLoaderServer = {
  test: stylesRegexp,
  loader: 'css-loader'
};

const client = [
  {
    oneOf: [babelLoader, cssLoaderClient]
  }
];

const server = [
  {
    oneOf: [babelLoader, cssLoaderServer]
  }
];

module.exports = {
  client,
  server
};
