var webpack = require('webpack'),
    WebpackConfig = require('webpack-config'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = new WebpackConfig().extend('./webpack.config.js')
.extend({
  './webpack.config.js': function(config) {
    delete config.entry;
  }
})
.merge({
  entry: "./examples/index.jsx",

  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin()
  ]
});
