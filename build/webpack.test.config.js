const webpack = require('webpack')
const merge = require('webpack-merge')
const commonConfig = require('./webpack.common.config.js')

const configuration = merge(commonConfig, {
  devtool: 'eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
          NODE_ENV: '"testing"'
      }
    })
  ]
})

module.exports = configuration