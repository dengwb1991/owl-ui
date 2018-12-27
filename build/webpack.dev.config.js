const path = require('path')
const merge = require('webpack-merge')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const commonConfig = require('./webpack.common.config.js')
const config = require('../config')
const utils = require('./utils')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

const configuration = merge(commonConfig, {
  devtool: 'inline-source-map',
  entry: {
    app: './examples/main',
    vendors: ['vue', 'vue-router']
  },
  output: {
    path: path.join(__dirname, '../examples/dist'),
    publicPath: config.build.assetsPublicPath,
    filename: '[name].js',
    chunkFilename: '[name].chunk.js'
  },
  devServer: {
    host: config.dev.host,
    port: config.dev.port,
    publicPath: '/',
    noInfo: true,
    quiet: true
  },
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.dev.cssSourceMap,
      usePostCSS: true
    })
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      filename: path.join(__dirname, '../examples/dist/index.html'),
      template: path.join(__dirname, '../examples/index.html'),
      inject: true
    }),
    new FriendlyErrorsPlugin()
  ]
})

module.exports = configuration