const routes = require("express").Router();


var base = "elements";


routes.get("/" + base, function (req, res) {
  res.render(base + "/index",
    data = {
      pageTitle : "Elements",
      pageStrapline: "Use the GOV UK elements for standard form elements.  Some are repeated here as macros for ease of use. Use the beta GDS Design System for additional elements.  The link has been shared with UX designers on the Reform Programme directly."
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