require('es6-promise').polyfill();

var webpack = require('webpack'),
    path = require('path'),
    WebpackConfig = require('webpack-config');

module.exports = new WebpackConfig().merge({
  entry: {
    index: "./src/index.js"
  },

  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].js"
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
});
