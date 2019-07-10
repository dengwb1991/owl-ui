const path = require('path')
const merge = require('webpack-merge')
const webpack = require('webpack')
const commonConfig = require('./webpack.common.config.js')
const config = require('../config')
const cleanWebpackPlugin = require('clean-webpack-plugin')
const uglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const configuration = merge(commonConfig, {
  mode: 'production',
  entry: {
    app: './src/index.js',
  },
  output: {
    path: config.build.assetsRoot,
    publicPath: config.build.assetsPublicPath,
    filename: 'owl-ui.common.js',
    library: 'owl-ui',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  // optimization: {
  //   minimize: true,
  //   splitChunks: {
  //     cacheGroups: {
  //       vendors: {
  //         test: /[\\/]node_modules[\\/]/,
  //         chunks: 'initial',
  //         name: 'vendors',
  //       },
  //       'async-vendors': {
  //         test: /[\\/]node_modules[\\/]/,
  //         minChunks: 2,
  //         chunks: 'async',
  //         name: 'async-vendors'
  //       }
  //     }
  //   },
  //   runtimeChunk: { name: 'runtime' }
  // },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },
  plugins: [
    new cleanWebpackPlugin(['../lib']),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../src/utils/flexible/index.js'),
        to: path.resolve(__dirname, '../lib/flexible.[ext]'),
        ignore: ['.*']
      }
    ]),
    new uglifyJsPlugin({
      uglifyOptions: {
        compress: {
          warnings: false,
          drop_debugger: true,
          drop_console: true
        }
      },
      sourceMap: config.build.productionSourceMap,
      parallel: true
    })
  ]
})

module.exports = configuration