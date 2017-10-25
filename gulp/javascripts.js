const gulp = require('gulp')
const eslint = require('gulp-eslint')
const uglify = require('gulp-uglify')
const browserSync = require('browser-sync')


// Javascripts
gulp.task('javascripts', function() {

  return gulp.src('app/javascripts/**/*.js')
    //.pipe(eslint())
    //.pipe(eslint.format())
    //.pipe(eslint.failAfterError())
    //.pipe(uglify())
    .pipe(gulp.dest('public/javascripts'))
    .pipe(browserSync.reload({
      stream: true
    }))

})
