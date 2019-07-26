const gulp = require('gulp')
const path = require('path')

const resolve = (dir) => path.join(__dirname, '../..', dir)

gulp.task('copy-fonts', () => {
  return gulp.src(resolve('src/styles/fonts/*.*'))
    .pipe(gulp.dest(resolve('lib/fonts')))
})

// gulp.task('default', ['copy-fonts'])
gulp.task('default', gulp.series('copy-fonts'))