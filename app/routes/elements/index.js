const routes = require("express").Router();


var base = "elements";


routes.get("/" + base, function (req, res) {
  res.render(base + "/index",
    data = {
      pageTitle : "Elements"
    }
  )
})


routes.get("/" + base + "/buttons", function (req, res) {
  res.render(base + "/buttons/index",
    data = {
      section : "elements",
      sectionName : "Elements",
      pageTitle : "Buttons"
    }
  )
})


routes.get("/" + base + "/alpha-beta-banners", function (req, res) {
  res.render(base + "/alpha-beta-banners/index",
    data = {
      section : "elements",
      sectionName : "Elements",
      pageTitle : "Alpha and beta banners"
    }
  )
})


routes.get("/" + base + "/form-elements", function (req, res) {
  res.render(base + "/form-elements/index",
    data = {
      section : "elements",
      sectionName : "Elements",
      pageTitle : "Form elements"
    }
  )
})


routes.get("/" + base + "/dates", function (req, res) {
  res.render(base + "/dates/index",
    data = {
      section : "elements",
      sectionName : "Elements",
      pageTitle : "Dates"
    }
  )
})


module.exports = routes;
