const gulp = require('gulp')
const { series, parallel } = require('gulp')
// const minify = require('gulp-minifier');
const htmlmin = require('gulp-htmlmin')
const cleanCSS = require('gulp-clean-css')

const minifyCSS = () =>
  gulp
    .src('src/**/*.css')
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(gulp.dest('dist'))

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
    .pipe(gulp.dest('dist'))

exports.default = parallel(minifyHTML, minifyCSS)
