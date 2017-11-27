var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function() {
    return gulp.src('./themes/chiangmai/source/scss/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(autoprefixer())
        .pipe(gulp.dest('./themes/chiangmai/source/css'));
});

gulp.task('default', ['sass']);
