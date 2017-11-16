const routes = require("express").Router();


var base = "components";


routes.get("/" + base, function (req, res) {
  res.render(base + "/index",
    data = {
      pageTitle : "Components",
      pageStrapline: "A collection of components for the Reform Programme."
    }
  )
})


routes.get("/" + base + "/address-lookup", function (req, res) {
  res.render(base + "/address-lookup/index",
    data = {
      section : "components",
      sectionName : "Components",
      pageTitle : "Address lookup",
      pageStrapline: "Allow a user to find their address by entering their postcode."
    }
  )
})


routes.get("/" + base + "/collapsibles", function (req, res) {
  res.render(base + "/collapsibles/index",
    data = {
      section : "components",
      sectionName : "Components",
      pageTitle : "Collapsibles",
      pageStrapline: "Allow users to gradually reveal information."
    }
  )
})


routes.get("/" + base + "/progress-list", function (req, res) {
  res.render(base + "/progress-list/index",
    data = {
      section : "components",
      sectionName : "Components",
      pageTitle : "Progress list",
      pageStrapline: "Show users which stage of the journey they’re at."
    }
  )
})


routes.get("/" + base + "/tabs", function (req, res) {
  res.render(base + "/tabs/index",
    data = {
      section : "components",
      sectionName : "Components",
      pageTitle : "Tabs",
      pageStrapline: "Show users information in adjacent categories."
    }
  )
})


routes.get("/" + base + "/add-form-fields", function (req, res) {
  res.render(base + "/add-form-fields/index",
    data = {
      section : "components",
      sectionName : "Components",
      pageTitle : "Add form fields",
      pageStrapline: "Allow users to add extra form fields for more information."
    }
  )
})


module.exports = routes;
