require('es6-promise').polyfill();

var webpack = require('webpack'),
    path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    autoprefixer = require('autoprefixer');


module.exports = {
  entry: "./examples/index.jsx",

  resolve: {
    modulesDirectories: ['node_modules']
  },

  output: {
    path: 'dist',
    filename: "main.js"
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
      },
      {
        test: /\.(css|scss)$/,
        loaders: ['style', 'css', 'postcss', 'sass']
      }
    ]
  },

  postcss: function() {
    return [
      autoprefixer
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'react-components-bulma'
    })
  ]
};
