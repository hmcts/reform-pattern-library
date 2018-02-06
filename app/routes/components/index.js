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


routes.get("/" + base + "/progress-bar", function (req, res) {
  res.render(base + "/progress-bar/index",
    data = {
      section : "components",
      sectionName : "Components",
      pageTitle : "Progress bar",
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


routes.get("/" + base + "/add-another", function (req, res) {
  res.render(base + "/add-another/index",
    data = {
      section : "components",
      sectionName : "Components",
      pageTitle : "Add another",
      pageStrapline: "Allow users to add extra form fields for more information."
    }
  )
})

routes.get("/" + base + "/names", function (req, res) {
  res.render(base + "/names/index",
    data = {
      section : "components",
      sectionName : "Components",
      pageTitle : "Names",
      pageStrapline: "Allow users to add extra form fields for more information."
    }
  )
})

routes.get("/" + base + "/dates", function (req, res) {
  res.render(base + "/dates/index",
    data = {
      section : "components",
      sectionName : "Components",
      pageTitle : "Dates",
      pageStrapline: "Allow users to add extra form fields for more information."
    }
  )
})

routes.get("/" + base + "/document-upload", function (req, res) {
  res.render(base + "/document-upload/index",
    data = {
      section : "components",
      sectionName : "Components",
      pageTitle : "Document upload",
      pageStrapline: "Use for citizens to upload documents. Pattern taken from Tax Tribunals reformed service."
    }
  )
})
module.exports = routes;
