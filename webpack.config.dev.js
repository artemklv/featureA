const config = require('./webpack.config');
const webpack = require('webpack');

config.entry = [
  'webpack-dev-server/client?http://0.0.0.0:3000',
  'webpack/hot/only-dev-server',
  path.join(__dirname, 'example/src/index.jsx')
]
config.plugins.unshift(new webpack.HotModuleReplacementPlugin());

module.exports = config;
