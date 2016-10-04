const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('[name].css');

const BUILD_DIR = path.resolve(__dirname, 'build');
const APP_DIR = path.resolve(__dirname, 'src');
const STYLES_DIR = path.resolve(__dirname, 'styles');

module.exports = {
  entry: [
    APP_DIR + '/index.jsx',
    STYLES_DIR + '/main.scss'
  ],
  module: {
    // preLoaders: [
    //   {
    //       test: /\.jsx?$/,
    //       include: APP_DIR,
    //       loader: 'eslint-loader'
    //   }
    // ],
    loaders: [
      { test: /\.scss$/i, loader: extractCSS.extract(['css','sass']) },
      {
        test: /\.jsx?$/,
        include: APP_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  plugins: [
    extractCSS
  ],
  eslint: {
    configFile: '.eslintrc'
  },
  output: {
    path: BUILD_DIR,
    publicPath: '/assets/',
    filename: 'bundle.js'
  }
};
