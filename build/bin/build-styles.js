const fs = require('fs')
const path = require('path')
const gulp = require('gulp')
const cleanCSS = require('gulp-clean-css')
const less = require('gulp-less')
const rename = require('gulp-rename')
const autoprefixer = require('gulp-autoprefixer')
const postcss = require('gulp-postcss')
const pxtorem = require('postcss-pxtorem')
const gulpif = require('gulp-if')
// const merge = require('merge-stream')

const resolve = (dir) => path.join(__dirname, '../..', dir)

const cssPath = resolve('src/styles/packages')

const ap = {
  browsers: ['last 2 versions', 'ie > 8']
}

const processors = [
  pxtorem({
    rootValue: 75,
    propList: ["*"]
  })
]

function getFolders(dir) {
  return fs.readdirSync(dir).filter(function (item) {
    return item.substr(0, item.indexOf('.')) !== 'index'
  }).map(function (filename) {
    return filename.substr(0, filename.indexOf('.'))
  })
}

function taskOwlUi () {
  return gulp.src(resolve('src/styles/index.less'))
    .pipe(less())
    .pipe(autoprefixer(ap))
    .pipe(postcss(processors))
    .pipe(cleanCSS())
    .pipe(rename('owl-ui.css'))
    .pipe(gulp.dest(resolve('lib/styles')))
}

function taskOwlUiPx () {
  return gulp.src(resolve('src/styles/index.less'))
    .pipe(less())
    .pipe(autoprefixer(ap))
    .pipe(cleanCSS())
    .pipe(rename('owl-ui-px.css'))
    .pipe(gulp.dest(resolve('lib/styles')))
}


function iconfontTask () {
  return gulp.src(resolve('src/styles/iconfont/iconfont.less'))
    .pipe(less())
    .pipe(autoprefixer(ap))
    .pipe(cleanCSS())
    .pipe(gulp.dest(resolve('lib/styles')))
}

function taskPackages (done) {
  const folders = getFolders(cssPath)
  folders.map(function (folder) {
    return gulp.src(resolve('src/styles/packages/' + folder + '.less'))
      .pipe(less())
      .pipe(autoprefixer(ap))
      .pipe(postcss(processors))
      .pipe(cleanCSS())
      .pipe(gulp.dest(resolve('lib/' + folder +'/')))
  })
  done()
}

function taskPackagesPx (done) {
  const folders = getFolders(cssPath)
  folders.map(function (folder) {
    return gulp.src(resolve('src/styles/packages/' + folder + '.less'))
      .pipe(less())
      .pipe(autoprefixer(ap))
      .pipe(cleanCSS())
      .pipe(rename(folder + '-px.css'))
      .pipe(gulp.dest(resolve('lib/' + folder +'/')))
  })
  done()
}

gulp.task('default', gulp.parallel(taskOwlUi, taskOwlUiPx, iconfontTask, taskPackages, taskPackagesPx))
