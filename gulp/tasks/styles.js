const gulp = require('gulp'),
      postcss = require('gulp-postcss'),
      autoprefixer = require('autoprefixer'),
      cssVars = require('postcss-simple-vars'),
      cssNested = require('postcss-nested'),
      cssImport = require('postcss-import'),
      cssMixins = require('postcss-mixins');

gulp.task('styles', function() {
  return gulp.src('./app/assets/styles/main.css')
    .pipe(postcss([cssImport, cssMixins, cssVars, cssNested, autoprefixer]))
    .on('error', function(errorInfo) {
      console.log(errorInfo.toString());
      this.emit('end');
    })
    .pipe(gulp.dest('./app/temp/styles'));
});