const gulp = require('gulp')
const cleanCSS = require('gulp-clean-css')
const less = require('gulp-less')
const rename = require('gulp-rename')
const autoprefixer = require('gulp-autoprefixer')
const postcss = require('gulp-postcss')
const pxtorem = require('postcss-pxtorem')

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
  gulp.src('../src/styles/index.less')
    .pipe(less())
    .pipe(autoprefixer(ap))
    .pipe(postcss(processors))
    .pipe(cleanCSS())
    .pipe(rename('owl-ui.css'))
    .pipe(gulp.dest('../dist/styles'))
})

gulp.task('owl-ui-px', function () {
  gulp.src('../src/styles/index.less')
    .pipe(less())
    .pipe(autoprefixer(ap))
    .pipe(cleanCSS())
    .pipe(rename('owl-ui-px.css'))
    .pipe(gulp.dest('../dist/styles'))
})

gulp.task('packages', function () {
  gulp.src('../src/styles/packages/*.less')
    .pipe(less())
    .pipe(autoprefixer(ap))
    .pipe(postcss(processors))
    .pipe(cleanCSS())
    .pipe(gulp.dest('../dist/styles/packages'))
})

gulp.task('packages-px', function () {
  gulp.src('../src/styles/packages/*.less')
    .pipe(less())
    .pipe(autoprefixer(ap))
    .pipe(cleanCSS())
    .pipe(gulp.dest('../dist/styles/packages-px'))
})

gulp.task('default', ['owl-ui', 'owl-ui-px', 'packages', 'packages-px'])