const path = require('path')
const webpack = require('webpack')
const config = require('../config')
const utils = require('./utils')
const vueLoaderConfig = require('./vue-loader.conf')
const anchor = require('markdown-it-anchor')
const slugify = require('transliteration').slugify
const resolve = (dir) => path.join(__dirname, '..', dir)

const createLintingRule = () => ({
  test: /\.(js|vue)$/,
  loader: 'eslint-loader',
  enforce: 'pre',
  include: [resolve('packages'), resolve('src'), resolve('examples'), resolve('test')],
  options: {
    formatter: require('eslint-friendly-formatter'),
    emitWarning: !config.dev.showEslintErrorsInOverlay
  }
})

module.exports = {
  output: {
    path: config.build.assetsRoot,
    publicPath: config.build.assetsPublicPath,
    library: 'owl-ui',
    libraryTarget: 'umd',
    filename: 'owl-ui.common.js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('examples'),
      'packages': resolve('packages'),
      'mixins': resolve('src/common/mixins'),
      'components': resolve('src/common/components'),
      'images': resolve('src/images'),
      'dist': resolve('dist'),
      'create-api': resolve('src/utils/create-api'),
      'flexible': resolve('src/utils/flexible')
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
      },
      {
        test: /\.otf|ttf|woff2?|eot(\?\S*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.svg(\?\S*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: path.posix.join('static', '[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(gif|png|jpe?g)(\?\S*)?$/,
        loader: 'url-loader',
        query: {
          // limit: 10000,
          name: path.posix.join('static', '[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.md$/,
        loader: 'vue-markdown-loader',
        options: {
          preventExtract: true,
          use: [
            [anchor, {
              permalink: true,
              slugify: slugify,
              permalinkSymbol: '<svg aria-hidden="true" class="" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>',
              permalinkBefore: true,
              permalinkClass: 'anchor'
            }]
          ]
        }
      }
    ]
  }
}