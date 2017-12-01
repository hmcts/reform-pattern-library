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
      pageStrapline: "A collection of reusable form elements."
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


routes.get("/" + base + "/names", function (req, res) {
  res.render(base + "/names/index",
    data = {
      section : "elements",
      sectionName : "Elements",
      pageTitle : "Names",
      pageStrapline: "A collection of name patterns."
    }
  )
})


routes.get("/" + base + "/confirmation", function (req, res) {
  res.render(base + "/confirmation/index",
    data = {
      section : "elements",
      sectionName : "Elements",
      pageTitle : "Confirmation",
      pageStrapline: "A confirmation or success pattern."
    }
  )
})


module.exports = routes;
