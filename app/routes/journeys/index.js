const routes = require("express").Router();


var base = "journeys";


routes.get("/" + base, function (req, res) {
  res.render(base + "/index",
    data = {
      pageTitle : "Journeys"
    }
  )
})


module.exports = routes;
