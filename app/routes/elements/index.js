const routes = require("express").Router();


var base = "elements";


routes.get("/" + base, function (req, res) {
  res.render(base + "/index",
    data = {
      pageTitle : "Elements"
    }
  )
})


module.exports = routes;
