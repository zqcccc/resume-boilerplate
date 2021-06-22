const gulp = require('gulp')
const { series, parallel } = require('gulp')
// const minify = require('gulp-minifier');
const htmlmin = require('gulp-htmlmin')
const cleanCSS = require('gulp-clean-css')

const copyPublic = () => gulp.src('public/**/*',{base:"./public"}).pipe(gulp.dest('build'))

const minifyCSS = () =>
  gulp
    .src('src/**/*.css')
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(gulp.dest('build'))

const minifyHTML = () =>
  gulp
    .src('src/*.html')
    .pipe(
      htmlmin({
        collapseWhitespace: true,
        processConditionalComments: true,
        ignoreCustomFragments: [],
        removeComments: true,
        minifyCSS: true,
        minifyJS: true,
      })
    )
    .pipe(gulp.dest('build'))

exports.default = parallel(copyPublic, minifyHTML, minifyCSS)
