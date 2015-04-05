var gulp = require('gulp'),
    watch = require('gulp-watch'),
    jasmine = require('gulp-jasmine'),
    sourcemaps = require('gulp-sourcemaps'),
    traceur = require('gulp-traceur'),
    to5 = require('gulp-babel');

gulp.task('babel', function () {
    return gulp.src('js/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(to5({
            stage: 0,
            loose: 'all'
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist'));
});

gulp.task('traceur', function() {
    return gulp.src('js/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(traceur({
            blockBinding: true,
            experimental: true,
            arrayComprehension: true,
            types: true
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist'));
});

gulp.task('jasmine', function() {
 return gulp.src('spec/test.js')
        .pipe(jasmine());
});

gulp.task('default', ['babel','jasmine'], function() {
  gulp.watch('js/**/*.js', ['babel']);
  gulp.watch('js/**/*.js', ['jasmine']);
  gulp.watch('spec/*.js', ['jasmine']);
});
