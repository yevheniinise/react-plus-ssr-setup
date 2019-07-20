const babelLoader = {
  test: /\.m?js$/,
  exclude: /(node_modules|bower_components)/,
  loader: 'babel-loader'
};

const cssLoader = {
  test: /\.css$/,
  use: [
    'style-loader',
    'css-loader'
  ]
};

const client = [
  babelLoader,
  cssLoader
];

const server = [
  babelLoader
];

module.exports = {
  client,
  server
};
