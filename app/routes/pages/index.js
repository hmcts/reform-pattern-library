const routes = require("express").Router();


var base = "pages";


routes.get("/" + base, function (req, res) {
  res.render(base + "/index",
    data = {
      pageTitle : "Pages"
    }
  )
})


routes.get("/" + base + "/check-your-answers", function (req, res) {
  res.render(base + "/check-your-answers/index",
    data = {
      pageTitle : "Check your answers"
    }
  )
})


module.exports = routes;