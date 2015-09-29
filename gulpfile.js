'use strict';

var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var traceur = require('gulp-traceur');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('default', ['javascript', 'move'], function() {
  // place code for your default task here
});

gulp.task('move', function() {
    var filesToMove = [
        './app/*.html'
    ];

    gulp.src(filesToMove, { base: './' })
    .pipe(gulp.dest('dist'));
});

gulp.task('javascript', function () {
  // set up the browserify instance on a task basis
  var b = browserify({
    entries: './app/js/app.js',
    debug: true
  });
  b.ignore('jquery');

  return b.bundle()
    .pipe(source('./app/js/app.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
        // Add transformation tasks to the pipeline here.
        //.pipe(uglify())
        .on('error', gutil.log)
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist/'));
});