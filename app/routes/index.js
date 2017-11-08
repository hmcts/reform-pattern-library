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
