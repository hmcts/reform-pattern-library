const routes = require("express").Router();


var base = "content";


routes.get("/" + base, function (req, res) {
  res.render(base + "/index",
    data = {
      pageTitle : "Content",
      pageStrapline: "A collection of content things for the Reform Programme."
    }
  )
})


module.exports = routes;