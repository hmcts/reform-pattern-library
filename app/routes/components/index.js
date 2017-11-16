const routes = require("express").Router();


var base = "components";


routes.get("/" + base, function (req, res) {
  res.render(base + "/index",
    data = {
      pageTitle : "Components"
    }
  )
})


routes.get("/" + base + "/address-lookup", function (req, res) {
  res.render(base + "/address-lookup/index",
    data = {
      section : "components",
      sectionName : "Components",
      pageTitle : "Address lookup"
    }
  )
})


routes.get("/" + base + "/collapsibles", function (req, res) {
  res.render(base + "/collapsibles/index",
    data = {
      section : "components",
      sectionName : "Components",
      pageTitle : "Collapsibles"
    }
  )
})


routes.get("/" + base + "/progress-list", function (req, res) {
  res.render(base + "/progress-list/index",
    data = {
      section : "components",
      sectionName : "Components",
      pageTitle : "Progress list"
    }
  )
})


routes.get("/" + base + "/tabs", function (req, res) {
  res.render(base + "/tabs/index",
    data = {
      section : "components",
      sectionName : "Components",
      pageTitle : "Tabs"
    }
  )
})


routes.get("/" + base + "/add-form-fields", function (req, res) {
  res.render(base + "/add-form-fields/index",
    data = {
      section : "components",
      sectionName : "Components",
      pageTitle : "Add form fields"
    }
  )
})


module.exports = routes;
