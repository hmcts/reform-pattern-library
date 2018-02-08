const routes = require("express").Router();


var base = "content";


routes.get("/" + base, function (req, res) {
  res.render(base + "/index",
    data = {
      pageTitle : "Content"
    }
  )
})

routes.get("/" + base + "/privacy-policy", function (req, res) {
  res.render(base + "/privacy-policy/index",
    data = {
      section : "content",
      sectionName : "Content",
      pageTitle : "Privacy policy",
      publishedStatus : "Draft",
      usage: "Internal"
    }
  )
})

routes.get("/" + base + "/terms-and-conditions", function (req, res) {
  res.render(base + "/terms-and-conditions/index",
    data = {
      section : "content",
      sectionName : "Content",
      pageTitle : "Terms and conditions",
      publishedStatus : "Approved",
      usage: "Internal"
    }
  )
})

routes.get("/" + base + "/cookie-policy", function (req, res) {
  res.render(base + "/cookie-policy/index",
    data = {
      section : "content",
      sectionName : "Content",
      pageTitle : "Cookie policy",
      publishedStatus : "Draft",
      usage: "Internal"
    }
  )
})

module.exports = routes;