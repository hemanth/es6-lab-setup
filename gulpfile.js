var gulp = require('gulp'),
    watch = require('gulp-watch'),
    shell = require('gulp-shell'),
    jasmine = require('gulp-jasmine'),
    sourcemaps = require('gulp-sourcemaps'),
    to5 = require('gulp-6to5');

gulp.task('6to5', function () {
    return gulp.src('js/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(to5({
            experimental: true
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist'));
});

gulp.task('jasmine', function() {
 return gulp.src('spec/test.js')
        .pipe(jasmine());
});

gulp.task('default', ['6to5','jasmine'], function() {
  gulp.watch('js/**/*.js', ['6to5']);
  gulp.watch('js/**/*.js', ['jasmine']);
  gulp.watch('spec/*.js', ['jasmine']);
});

