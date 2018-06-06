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


routes.get("/" + base + "/404", function (req, res) {
  res.render(base + "/404/index",
    data = {
      section : "pages",
      sectionName : "Pages",
      pageTitle : "This page cannot be found"
    }
  )
})


routes.get("/" + base + "/start-page", function (req, res) {
  res.render(base + "/start-page/index",
    data = {
      section : "pages",
      sectionName : "Pages",
      pageTitle : "Start page"
    }
  )
})

routes.get("/" + base + "/shutter-planned", function (req, res) {
  res.render(base + "/shutter-planned/index",
    data = {
      section : "pages",
      sectionName : "Pages",
      pageTitle : "Shutter - planned outage page"
    }
  )
})

routes.get("/" + base + "/shutter-unplanned", function (req, res) {
  res.render(base + "/shutter-unplanned/index",
    data = {
      section : "pages",
      sectionName : "Pages",
      pageTitle : "Shutter - unplanned outage page"
    }
  )
})
module.exports = routes;
