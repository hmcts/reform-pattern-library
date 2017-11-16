const routes = require("express").Router();


var base = "elements";


routes.get("/" + base, function (req, res) {
  res.render(base + "/index",
    data = {
      pageTitle : "Elements",
      pageStrapline: "A collection of elements for the Reform Programme."
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
      pageTitle : "Form elements",
      pageStrapline: "A collection of form patterns."
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


module.exports = routes;
