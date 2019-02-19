const fs = require('fs')
const path = require('path')
const gulp = require('gulp')
const cleanCSS = require('gulp-clean-css')
const less = require('gulp-less')
const rename = require('gulp-rename')
const autoprefixer = require('gulp-autoprefixer')
const postcss = require('gulp-postcss')
const pxtorem = require('postcss-pxtorem')
const merge = require('merge-stream')

const resolve = (dir) => path.join(__dirname, '../..', dir)

const cssPath = resolve('src/styles/packages')

function getFolders(dir) {
  return fs.readdirSync(dir).filter(function (item) {
    return item.substr(0, item.indexOf('.')) !== 'index'
  }).map(function (filename) {
    return filename.substr(0, filename.indexOf('.'))
  })
}

let ap = {
  browsers: ['last 2 versions', 'ie > 8']
}

let processors = [
  pxtorem({
    rootValue: 75,
    propList: ["*"]
  })
]

gulp.task('owl-ui', function () {
  gulp.src(resolve('src/styles/index.less'))
    .pipe(less())
    .pipe(autoprefixer(ap))
    .pipe(postcss(processors))
    .pipe(cleanCSS())
    .pipe(rename('owl-ui.css'))
    .pipe(gulp.dest(resolve('lib/styles')))
})

gulp.task('owl-ui-px', function () {
  gulp.src(resolve('src/styles/index.less'))
    .pipe(less())
    .pipe(autoprefixer(ap))
    .pipe(cleanCSS())
    .pipe(rename('owl-ui-px.css'))
    .pipe(gulp.dest(resolve('lib/styles')))
})

gulp.task('packages', function () {
  const folders = getFolders(cssPath)
  const tasks = folders.map(function (folder) {
    return gulp.src(resolve('src/styles/packages/' + folder + '.less'))
      .pipe(less())
      .pipe(autoprefixer(ap))
      .pipe(postcss(processors))
      .pipe(cleanCSS())
      .pipe(gulp.dest(resolve('lib/' + folder +'/')))
  })
  return merge(tasks)
})

gulp.task('packages-px', function () {
  const folders = getFolders(cssPath)
  const tasks = folders.map(function (folder) {
    return gulp.src(resolve('src/styles/packages/' + folder + '.less'))
      .pipe(less())
      .pipe(autoprefixer(ap))
      .pipe(cleanCSS())
      .pipe(rename(folder + '-px.css'))
      .pipe(gulp.dest(resolve('lib/' + folder +'/')))
  })
  return merge(tasks)
})

gulp.task('default', ['owl-ui', 'owl-ui-px', 'packages', 'packages-px'])