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


module.exports = routes;
