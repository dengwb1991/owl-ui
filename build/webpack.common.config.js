const path = require('path')
const webpack = require('webpack')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')
const cleanWebpackPlugin = require('clean-webpack-plugin')
const uglifyJsPlugin = require('uglifyjs-webpack-plugin')

const resolve = (dir) => path.join(__dirname, '..', dir)

const createLintingRule = () => ({
  test: /\.(js|vue)$/,
  loader: 'eslint-loader',
  enforce: 'pre',
  include: [resolve('src'), resolve('examples')],
  options: {
    formatter: require('eslint-friendly-formatter'),
    emitWarning: !config.dev.showEslintErrorsInOverlay
  }
})

module.exports = {
  entry: {
    app: './src/index.js'
  },
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
      '@': resolve('examples')
    }
  },
  plugins: [
    // new cleanWebpackPlugin(['dist'])
    // new uglifyJsPlugin({
    //   uglifyOptions: {
    //     compress: {
    //       warnings: false
    //     }
    //   },
    //   sourceMap: config.build.productionSourceMap,
    //   parallel: true
    // })
  ],
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
        include: [resolve('src'), resolve('node_modules/webpack-dev-server/client')],
        exclude: /node_modules/
      }
    ]
  }
}