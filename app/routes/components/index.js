const routes = require("express").Router();


var base = "components";


routes.get("/" + base, function (req, res) {
  res.render(base + "/index",
    data = {
      pageTitle : "Components"
    }
  )
})


module.exports = routes;
