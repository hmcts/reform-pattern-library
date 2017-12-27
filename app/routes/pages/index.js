const routes = require("express").Router();


var base = "pages";


routes.get("/" + base, function (req, res) {
  res.render(base + "/index",
    data = {
      pageTitle : "Pages"
    }
  )
})


module.exports = routes;