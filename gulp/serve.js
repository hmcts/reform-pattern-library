const gulp = require("gulp")
const browserSync = require("browser-sync")
const nodemon = require("gulp-nodemon")


// serve
gulp.task("serve", [
  "nodemon",
  "browser-sync"
])


// browsersync
gulp.task("browser-sync", function() {

  browserSync.init(null, {
    proxy: "http://localhost:3000",
    files: ["public/**/*.*"],
    browser: "firefox",
    notify: false,
    port: 3001
  })

})


// nodemon
gulp.task("nodemon", function() {

  let started = false

  return nodemon({
    script: "server.js",
    ignore: [
      "public/*",
      "test/*",
      "gulp-tasks/*",
      "node_modules/*"
    ]
  }).on("start", () => {
    if (!started) {
      started = true;
    }
  })

})