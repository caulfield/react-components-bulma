require('es6-promise').polyfill();

var webpack = require('webpack'),
    path = require('path'),
    WebpackConfig = require('webpack-config');

module.exports = new WebpackConfig().merge({
  entry: {
    index: "./src/index.js"
  },

  resolve: {
    modulesDirectories: ['node_modules']
  },

  module: {
    noParse: [/autoit.js/],

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
