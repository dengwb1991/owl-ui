const path = require('path')
const webpack = require('webpack')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')
const resolve = (dir) => path.join(__dirname, '..', dir)

const createLintingRule = () => ({
  test: /\.(js|vue)$/,
  loader: 'eslint-loader',
  enforce: 'pre',
  include: [resolve('src'), resolve('examples'), resolve('test')],
  options: {
    formatter: require('eslint-friendly-formatter'),
    emitWarning: !config.dev.showEslintErrorsInOverlay
  }
})

module.exports = {
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    library: 'owl-ui',
    libraryTarget: 'umd',
    filename: 'owl-ui.common.js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('examples'),
      'packages': resolve('packages')
    }
  },
  plugins: [],
  module: {
    rules: [
      ...(config.dev.useEslint ? [createLintingRule()] : []),
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: ['es2015']
        },
        include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.less$/,
        loaders: ['style-loader', 'less-loader', 'postcss-loader', 'postcss-less']
      }
    ]
  }
}