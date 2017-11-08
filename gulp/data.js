const gulp = require("gulp")


// data
gulp.task("data", function() {

  return gulp.src("app/data/**/*.json")
    .pipe(gulp.dest("public/data"))

})
