'use strict';

var gulp = require('gulp');
var scp = require('gulp-scp2');
var fs = require('fs');

require('dotenv').load();

module.exports = function(options) {
  gulp.task('deploy', ['build'], function () {
    return gulp.src('./dist/**/*')
      .pipe(scp({
        host: 'jestwysoko.com',
        username: process.env.USERNAME,
        password: process.env.PASSWORD,
        port: parseInt(process.env.PORT),
        dest: '/home/momasz/robertkalfas/dist/'
      }))
      .on('error', function (err) {
        console.log(err);
      });
  });
};