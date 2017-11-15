const path = require("path")
const express = require("express")
const session = require("express-session")
const nunjucks = require("nunjucks")
const markdown = require('nunjucks-markdown')
const marked = require('marked')

var renderer = new marked.Renderer();
renderer.heading = function (text, level) {
var headingClass = 0;
    switch(level) {
        case 1:
            headingClass = "heading-xlarge";
            break;
        case 2:
            headingClass = "heading-large";
            break;
        case 3:
            headingClass = "heading-medium";
            break;
        case 4:
            headingClass = "heading-small";
            break;
    }

  var escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');

  return '<h' + level + ' class="' + headingClass + '">' +
                  text + '</h' + level + '>';
}

marked.setOptions({
  renderer: renderer,
  gfm: true,
  tables: true,
  breaks: false,
  pendantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false
});

const routes = require("./app/routes")
const locals = require("./app/locals")

const port = process.env.PORT || 3000

const cookieParser = require("cookie-parser")
const bodyParser = require("body-parser")
const app = express()

module.exports = app

// application settings
app.set("view engine", "njk")


// set location of views
const appViews = [
  path.join(__dirname, "/app/views"),
  path.join(__dirname, "/app/views/layout"),
  path.join(__dirname, "/app/views/partials"),
  path.join(__dirname, "/app/views/macros"),
  path.join(__dirname, "/node_modules/govuk_template_jinja/views/layouts")
]


// views defined in appViews
var env = nunjucks.configure(appViews, {
  express: app,
  autoescape: true,
  watch: true,
  noCache: true
});

markdown.register(env, marked);

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
