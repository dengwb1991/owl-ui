const utils = require('../utils')
const path = require('path')
const webpack = require('webpack')
const config = require('../../config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.config')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = ['./dev-client'].concat(baseWebpackConfig.entry[name])
})

module.exports = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: 'inline-source-map',
  output: {
    path: path.join(__dirname, '../../docs/dist'),
    publicPath: config.build.assetsPublicPath,
    filename: '[name].js',
    chunkFilename: '[name].chunk.js'
  },
  devServer: {
    // clientLogLevel: 'warning',
    host: config.dev.host,
    port: config.dev.port,
    contentBase: false, // since we use CopyWebpackPlugin.
    compress: true,
    publicPath: '/',
    noInfo: true,
    quiet: true
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    new webpack.NamedModulesPlugin(),
    // new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: path.join(__dirname, '../../docs/dist/index.html'),
      template: path.join(__dirname, '../../docs/index.html'),
      inject: true
    }),
    new FriendlyErrorsPlugin()
    // new CopyWebpackPlugin([
    //   {
    //     from: path.resolve(__dirname, '../../docs/static'),
    //     to: config.dev.assetsSubDirectory,
    //     ignore: ['.*']
    //   }
    // ])
  ]
})
