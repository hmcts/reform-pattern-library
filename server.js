const path     = require("path")
const express  = require("express")
const session  = require("express-session")
const nunjucks = require("nunjucks")
const markdown = require("nunjucks-markdown")
const marked   = require("marked")

const IS_HEROKU = process.env.hasOwnProperty('IS_HEROKU')

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

const nunjucksAppEnv = nunjucks.configure(appViews, {
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


var renderer = new marked.Renderer();


// headings
renderer.heading = function (text, level) {

  var headingClass = 0;

  switch(level) {
    case 1:
      headingClass = "heading-large";
      break;
    case 2:
      headingClass = "heading-medium";
      break;
    case 3:
      headingClass = "heading-small";
      break;
  }

  var escapedText = text.toLowerCase().replace(/[^\w]+/g, "-");

  return "<h" + level + " class=" + headingClass + ">" + text + "</h" + level + ">";

}


// nunjucks / HTML / examples
renderer.code = function (text, lang) {
  if (lang == "nunjucks") {
      return "<pre class=\"language-markup\" data-title=\"Nunjucks\"><code>" + text + "</code></pre>";
  }
  else if (lang == "html") {
      return "<pre class=\"language-markup\" data-title=\"HTML\"><code>" + text + "</code></pre>";
  }
  else if (lang == "example") {
      return "<div class=\"example\" data-title=\"Preview\">" + text + "</div>";
  }
}


// lists
renderer.list = function (text, type) {
  return "<ul class=\"list list-bullet\">" + text + "</ul>";
}


// blockquotes
renderer.blockquote = function (text) {
  return "<div class=\"panel panel-border-wide\" role=\"note\">" + text + "</div>";
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


// markdown register
markdown.register(nunjucksAppEnv, marked);


// start app and listen
app.listen(port, function () {
  if (!IS_HEROKU) {
    console.log("Listening on port: " + port)
  }
})
