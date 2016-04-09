var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

var input = 'assets/scss/*.scss';
var output = 'assets/css/';

gulp.task('sass', function () {
  return gulp
    // Find all `.scss` files from the `assets/scss` folder
    .src(input)
    // Run Sass on those files
    .pipe(sass({outputStyle: 'expanded'}))  
    .pipe(autoprefixer())
    // Write the resulting CSS in the output folder
    .pipe(gulp.dest(output));
});