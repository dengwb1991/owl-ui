const gulp = require('gulp')
const cleanCSS = require('gulp-clean-css')
const less = require('gulp-less')
const rename = require('gulp-rename')
const autoprefixer = require('gulp-autoprefixer')

gulp.task('owl-ui', function () {
  gulp.src('../src/styles/index.less')
    .pipe(less())
    .pipe(autoprefixer({
        browsers: ['last 2 versions', 'ie > 8']
    }))
    .pipe(cleanCSS())
    .pipe(rename('owl-ui.css'))
    .pipe(gulp.dest('../dist/styles'))
})

gulp.task('packages', function () {
  gulp.src('../src/styles/packages/*.less')
    .pipe(less())
    .pipe(autoprefixer({
        browsers: ['last 2 versions', 'ie > 8']
    }))
    .pipe(cleanCSS())
    .pipe(gulp.dest('../dist/styles/packages'))
})

gulp.task('default', ['packages', 'owl-ui'])