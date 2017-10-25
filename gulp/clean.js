const gulp = require('gulp')
const clean = require('del')


// Clean
gulp.task('clean', function() {
  return clean([
    'public'
  ])
})
