process.env.NODE_ENV = 'production'

const ora = require('ora')
const rm = require('rimraf')
const path = require('path')
const chalk = require('chalk')
const webpack = require('webpack')
const config = require('../../config')
const webpackConfig = require('./webpack.prod.config')

const spinner = ora('building for example production...')
spinner.start()

rm(path.join(config.examples.assetsRoot, config.examples.assetsSubDirectory), err => {
  if (err) {
    throw err
  }
  webpack(webpackConfig, function (err, stats) {
    spinner.stop()
    if (err) {
      throw err
    }
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    console.log(chalk.cyan(' Example build complete.\n'))
  })
})
