const routes = require("express").Router();


var base = "patterns";


routes.get("/" + base, function (req, res) {
  res.render(base + "/index",
    data = {
      pageTitle : "Patterns",
      pageStrapline: "A collection of patterns for the Reform Programme."
    }
  )
})


routes.get("/" + base + "/names", function (req, res) {
  res.render(base + "/names/index",
    data = {
      section : "patterns",
      sectionName : "Patterns",
      pageTitle : "Names",
      pageStrapline: "A collection of name patterns."
    }
  )
})


routes.get("/" + base + "/dates", function (req, res) {
  res.render(base + "/dates/index",
    data = {
      section : "patterns",
      sectionName : "Patterns",
      pageTitle : "Dates",
      pageStrapline: "A collection of date patterns."
    }
  )
})


module.exports = routes;