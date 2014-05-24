var gulp = require('gulp'),
    watch = require('gulp-watch'),
    traceur = require('gulp-traceur'),
    shell = require('gulp-shell'),
    jasmine = require('gulp-jasmine'),
    plumber = require('gulp-plumber');


gulp.task('traceur', function () {
    return gulp.src('js/**/*.js')
        .pipe(traceur({sourceMap: true,experimental: true}))
        .pipe(gulp.dest('dist'));
});

/*gulp.task('jasmine', function () {
    gulp.src('spec/test.js')
        .pipe(jasmine({verbose: true}));
});*/

gulp.task('jasmine', function() {
 gulp.src('spec/*.js')
  .pipe(shell('minijasminenode spec/test.js')).on('error', function(){});
});

gulp.task('watch', ['traceur','jasmine'], function() {
  gulp.watch('js/**/*.js', ['traceur']);
  gulp.watch('js/**/*.js', ['jasmine']);
  gulp.watch('spec/*.js', ['jasmine']);
});

