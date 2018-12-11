'use strict'

const path = require('path')

module.exports = {
  dev: {
    cacheBusting: true,
    cssSourceMap: true,
    assetsSubDirectory: 'static',
    host: '0.0.0.0',
    port: 8088
  },
  build: {
    productionSourceMap: false,
    assetsSubDirectory: 'static'
  }
}