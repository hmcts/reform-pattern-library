const routes = require("express").Router();


var base = "journeys";


routes.get("/" + base, function (req, res) {
  res.render(base + "/index",
    data = {
      pageTitle : "Journeys",
      pageStrapline: "A collection of journeys for the Reform Programme."
    }
  )
})


routes.get("/" + base + "/application-journey", function (req, res) {
  res.render(base + "/application-journey/index",
    data = {
      section : "journeys",
      sectionName : "Journeys",
      pageTitle : "Application journey"
    }
  )
})



module.exports = routes;
