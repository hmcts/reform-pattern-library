const routes = require("express").Router();


routes.use("/", require("./elements"))
routes.use("/", require("./components"))
routes.use("/", require("./layouts"))
routes.use("/", require("./journeys"))


routes.get("/", function (req, res) {
  res.render("index",
    data = {
      pageTitle : "Reform Pattern Library"
    }
  )
})


// address lookup
routes.get("/address-lookup", function (req, res) {
  res.render("address-lookup/index",
    data = {
      pageTitle : "Example: Address lookup"
    }
  )
})


// progress bar
routes.get("/progress-bar", function (req, res) {
  res.render("progress-bar/index",
    data = {
      pageTitle : "Example: Progress bar"
    }
  )
})


// collapsibles
routes.get("/collapsibles", function (req, res) {
  res.render("collapsibles/index",
    data = {
      pageTitle : "Example: Collapsibles"
    }
  )
})


// tabs
routes.get("/tabs", function (req, res) {
  res.render("tabs/index",
    data = {
      pageTitle : "Example: Tabs"
    }
  )
})


// alpha / beta phase banners
routes.get("/alpha-beta-banners", function (req, res) {
  res.render("alpha-beta-banners/index",
    data = {
      pageTitle : "Example: Alpha and beta banners"
    }
  )
})


// add form items
routes.get("/add-form-items", function (req, res) {
  res.render("add-form-items/index",
    data = {
      pageTitle : "Example: Add form items"
    }
  )
})


// 404
routes.get("/*", function (req, res) {
  res.render("404/index",
    data = {
      pageTitle : "Page not found"
    }
  )
})


module.exports = routes;
