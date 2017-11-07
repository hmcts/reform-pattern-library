const routes = require("express").Router();


var base = "layouts";


routes.get("/" + base, function (req, res) {
  res.render(base + "/index",
    data = {
      pageTitle : "Layouts"
    }
  )
})


module.exports = routes;
