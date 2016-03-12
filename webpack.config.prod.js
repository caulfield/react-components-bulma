require('es6-promise').polyfill();

var webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
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
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.(css|scss)$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!sass-loader', {})
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader', {})
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
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new ExtractTextPlugin('main.css')
  ]
};
