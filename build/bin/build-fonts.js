const gulp = require('gulp')

const PATH = '../../'

gulp.task('copy-fonts', () => {
  return gulp.src(`${PATH}src/styles/fonts/*.*`)
    .pipe(gulp.dest(`${PATH}dist/fonts`))
})

gulp.task('default', ['copy-fonts'])