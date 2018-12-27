'use strict'

const path = require('path')

module.exports = {
  dev: {
    cacheBusting: false,
    cssSourceMap: false,
    useEslint: true,
    showEslintErrorsInOverlay: false,
    assetsSubDirectory: 'static',
    host: '0.0.0.0',
    port: 8088
  },
  build: {
    productionSourceMap: false,
    assetsSubDirectory: 'static',
    assetsRoot: path.resolve(__dirname, '../lib'),
    assetsPublicPath: '/'
  },
  docsBuild: {
    assetsRoot: path.resolve(__dirname, '../../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/'
  }
}