const path = require("path")
const express = require("express")
const session = require("express-session")
const nunjucks = require("nunjucks")

const routes = require("./app/routes")
const locals = require("./app/locals")

const port = process.env.PORT || 3000

const cookieParser = require("cookie-parser")
const bodyParser = require("body-parser")
const app = express()


module.exports = app


// application settings
app.set("view engine", "nunjucks")


// set location of views
const appViews = [
  path.join(__dirname, "/app/views"),
  path.join(__dirname, "/app/views/layout"),
  path.join(__dirname, "/app/views/partials"),
  path.join(__dirname, "/app/views/macros"),
  path.join(__dirname, "/node_modules/govuk_template_jinja/views/layouts")
]


// views defined in appViews
nunjucks.configure(appViews, {
  express: app,
  autoescape: true,
  watch: true,
  noCache: true
})


// middleware to serve static assets
app.use("/public", express.static(path.join(__dirname, "/public")))
app.use("/public", express.static(path.join(__dirname, "/node_modules/govuk_template_jinja/assets")))
app.use("/public", express.static(path.join(__dirname, "/node_modules/govuk_frontend_toolkit")))
app.use("/public", express.static(path.join(__dirname, "/node_modules/govuk-elements-sass")))


// support for parsing data in POSTs
app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))


// express session
app.use(session({
  secret: "reform",
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: false
  }
}))


// locals
app.locals = locals


// routes
app.use("/", routes);


// start app and listen
app.listen(port)
console.log("Listening on port: " + port)
