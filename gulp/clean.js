const gulp = require("gulp")
const clean = require("del")


// clean
gulp.task("clean", function() {
  return clean([
    "public"
  ])
})
