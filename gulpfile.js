const gulp = require("gulp")
const gutil = require("gulp-util")
const requireDir = require("require-dir")
const runsequence = require("run-sequence")


requireDir("./gulp")


// build
gulp.task("build", function() {
  runsequence("clean", [
    "sass",
    "images",
    "javascripts",
    "data",
  ])
})


// develop
gulp.task("develop", [
  "build",
  "serve",
  "watch"
])


// watch
gulp.task("watch", function() {
  runsequence(
    "watch:sass",
    "watch:images",
    "watch:javascripts",
    "watch:data"
  )
})

gulp.task("watch:sass", function() {
  return gulp.watch("app/sass/**/*.scss", ["sass"])
})

gulp.task("watch:images", function() {
  return gulp.watch("app/images/**/*.+(png|jpg|jpeg|gif|svg)", ["images"])
})

gulp.task("watch:javascripts", function() {
  return gulp.watch("app/javascripts/**/*.js", ["javascripts"])
})

gulp.task("watch:data", function() {
  return gulp.watch("app/data/**/*.json", ["data"])
})


// default
gulp.task("default", function() {

  const cyan = gutil.colors.cyan
  const green = gutil.colors.green

  gutil.log(green("----------"))

  gutil.log(("The following main ") + cyan("tasks") + (" are available:"))

  gutil.log(cyan("clean")   + ": Removes public")
  gutil.log(cyan("build")   + ": Copy assets to public, validate html")
  gutil.log(cyan("develop") + ": Set up watch and serve")

  gutil.log(green("----------"))

})