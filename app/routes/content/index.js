const routes = require("express").Router();


var base = "content";


routes.get("/" + base, function (req, res) {
  res.render(base + "/index",
    data = {
      pageTitle : "Content"
    }
  )
})


module.exports = routes;