const routes = require("express").Router();


var base = "pages";


routes.get("/" + base, function (req, res) {
  res.render(base + "/index",
    data = {
      pageTitle : "Pages",
      pageStrapline: "A collection of pages for the Reform Programme."
    }
  )
})


routes.get("/" + base + "/task-list", function (req, res) {
  res.render(base + "/task-list/index",
    data = {
      section : "pages",
      sectionName : "Pages",
      pageTitle : "Task list"
    }
  )
})


routes.get("/" + base + "/check-your-answers", function (req, res) {
  res.render(base + "/check-your-answers/index",
    data = {
      section : "pages",
      sectionName : "Pages",
      pageTitle : "Check your answers"
    }
  )
})


module.exports = routes;