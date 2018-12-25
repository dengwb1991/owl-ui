const path = require('path')
const gulp = require('gulp')
const iconfont = require('gulp-iconfont')
const iconfontCss = require('gulp-iconfont-css')
const clean = require('del')
const sequence = require('gulp-sequence')

const resolve = (dir) => path.join(__dirname, '../..', dir)

const cssClass = 'owl-iconfont'
const source = resolve('src/images/svg/iconfont/*.svg')
const template = resolve('config/_iconfont.less')
const iconfontPath = resolve('src/styles/iconfont')
const fontPath = resolve('src/styles/fonts')

gulp.task('iconfont', () => {
  return gulp.src(source)
    .pipe(iconfontCss({
      cssClass,
      fontPath: '../fonts/',
      fontName: 'iconfont',
      path: template,
      targetPath: 'iconfont.less',
    }))
    .pipe(iconfont({
      fontName: 'iconfont',
      prependUnicode: true,
      formats: ['svg', 'eot', 'ttf', 'woff', 'woff2'],
      fontHeight: 1001,
      normalize: true,
    }))
    .pipe(gulp.dest(iconfontPath))
})

gulp.task('clean', () => {
  return clean(resolve('src/styles/iconfont/*.!(less)'), { force: true })
})
gulp.task('move', () => {
  return gulp.src(resolve('src/styles/iconfont/*.!(less)'))
    .pipe(gulp.dest(resolve('src/styles/fonts')))
})

gulp.task('build', sequence('iconfont', 'move', 'clean'))

gulp.task('default', ['build'])
