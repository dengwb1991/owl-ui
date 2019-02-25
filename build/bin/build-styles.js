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

function owlTask (taskName) {
  return gulp.src(resolve('src/styles/index.less'))
      .pipe(less())
      .pipe(autoprefixer(ap))
      .pipe(gulpif(taskName === 'owl-ui', postcss(processors)))
      .pipe(cleanCSS())
      .pipe(rename(taskName + '.css'))
      .pipe(gulp.dest(resolve('lib/styles')))
}

function packageTask (taskName) {
  const folders = getFolders(cssPath)
  return folders.map(function (folder) {
    return gulp.src(resolve('src/styles/packages/' + folder + '.less'))
      .pipe(less())
      .pipe(autoprefixer(ap))
      .pipe(gulpif(taskName === 'packages', postcss(processors)))
      .pipe(cleanCSS())
      .pipe(gulpif(taskName === 'packages-px', rename(folder + '-px.css')))
      .pipe(gulp.dest(resolve('lib/' + folder +'/')))
  })
}
gulp.task('all', function () {
  return [owlTask('owl-ui'), owlTask('owl-ui-px'),
    packageTask('packages'), packageTask('packages-px')]
})

gulp.task('default', ['all'])
