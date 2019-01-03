const config = require('../../config')
const utils = require('../utils')
const docProdWebpackConfig = require('../docs/webpack.prod.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const webpackConfig = Object.assign({}, docProdWebpackConfig, {
  entry: './examples/main.js',
  output: {
    path: config.examples.assetsRoot,
    filename: utils.assetsPath('js/[name].[chunkhash].js'),
    chunkFilename: utils.assetsPath('js/[id].[chunkhash].js')
  }
})

const index = webpackConfig.plugins.findIndex(function (plugin) {
  return plugin instanceof HtmlWebpackPlugin
})
webpackConfig.plugins.splice(index, 1, new HtmlWebpackPlugin({
  filename: 'index.html',
  template: 'examples/index.html',
  inject: true,
  minify: {
    removeComments: true,
    collapseWhitespace: true,
    removeAttributeQuotes: true
    // more options:
    // https://github.com/kangax/html-minifier#options-quick-reference
  },
  // necessary to consistently work with multiple chunks via CommonsChunkPlugin
  chunksSortMode: 'dependency'
}))

module.exports = webpackConfig
