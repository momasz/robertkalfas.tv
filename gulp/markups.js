'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');

var $ = require('gulp-load-plugins')();

module.exports = function(options) {
  gulp.task('markups', function() {
    function renameToHtml(path) {
      path.extname = '.html';
    }

    return gulp.src(options.src + '/{app,components}/**/*.hbs')
      .pipe($.consolidate('handlebars')).on('error', options.errorHandler('Handlebars'))
      .pipe($.rename(renameToHtml))
      .pipe(gulp.dest(options.tmp + '/serve/'))
      .pipe(browserSync.reload({ stream: true }));
  });
};
