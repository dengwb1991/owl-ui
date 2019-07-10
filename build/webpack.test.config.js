const webpack = require('webpack')
const merge = require('webpack-merge')
const commonConfig = require('./webpack.common.config.js')
const utils = require('./utils')

const configuration = merge(commonConfig, {
  mode: 'development',
  module: {
    rules: utils.styleLoaders({
      sourceMap: true
    })
  },
  devtool: '#inline-source-map'
})

delete configuration.entry

module.exports = configuration