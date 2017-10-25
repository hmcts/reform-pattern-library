const gulp = require('gulp')


// Data
gulp.task('data', function() {

  return gulp.src('app/data/**/*.json')
    .pipe(gulp.dest('public/data'))
    
})
