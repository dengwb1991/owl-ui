const path = require('path')
const config = require('../config')
const devConfig = require('./webpack.dev.config.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = new Promise((resolve, reject) => {
  const configuration = {
    entry: {
      app: './docs/main',
      vendors: ['vue', 'vue-router']
    },
    output: {
      path: path.join(__dirname, '../docs/dist'),
      publicPath: config.build.assetsPublicPath,
      filename: '[name].js',
      chunkFilename: '[name].chunk.js'
    }
  }
  devConfig.then(config => {
    const devConfig = Object.assign({}, config, configuration)
    const index = devConfig.plugins.findIndex(function (plugin) {
      return plugin instanceof HtmlWebpackPlugin
    })
    devConfig.plugins.splice(index, 1, new HtmlWebpackPlugin({
      filename: path.join(__dirname, '../docs/dist/index.html'),
      template: path.join(__dirname, '../docs/index.html'),
      inject: true
    }))

    resolve(devConfig)
  })
})
