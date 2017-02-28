var gulp = require('gulp'),
    cleanCSS = require('gulp-clean-css'),
    concat = require('gulp-concat');

    gulp.task('minify-css', function() {
      return gulp.src([ 'css/normalize.css', 'css/master.css'])
        .pipe(cleanCSS())
        .pipe(gulp.dest('css/minified'));
    });

    gulp.task('concat', function() {
      return gulp.src([ 'css/font-awesome-4.7.0/css/font-awesome.min.css', 'css/minified/normalize.css', 'css/minified/master.css'])
        .pipe(concat('minified.css'))
        .pipe(gulp.dest('css/minified'));
    });
