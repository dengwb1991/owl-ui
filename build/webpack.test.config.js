const webpack = require('webpack')
const merge = require('webpack-merge')
const commonConfig = require('./webpack.common.config.js')
const utils = require('./utils')

const configuration = merge(commonConfig, {
  module: {
    rules: utils.styleLoaders()
  },
  devtool: '#inline-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"testing"'
      }
    })
  ]
})

delete configuration.entry

module.exports = configuration