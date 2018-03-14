const routes = require("express").Router();

var base = "journeys";

routes.get("/" + base, function(req, res) {
	res.render(base + "/index",
		data = {
			pageTitle    : "Journeys",
			pageStrapline: "A collection of journeys for the Reform Programme."
		}
	)
})

routes.get("/" + base + "/application-journey", function(req, res) {
	res.render(base + "/application-journey/index",
		data = {
			section    : "journeys",
			sectionName: "Journeys",
			pageTitle  : "Application journey"
		}
	)
})

routes.get("/" + base + "/self-registration", function(req, res) {
	res.render(base + "/self-registration/index",
		data = {
			section    : "journeys",
			sectionName: "Journeys",
			pageTitle  : "Self registration"
		}
	)
})

routes.get("/" + base + "/self-registration/sign-in", function(req, res) {
	res.render(base + "/self-registration/sign-in",
		data = {
			section    : "journeys",
			sectionName: "Journeys",
			pageTitle  : "Sign in or create an account"
		}
	)
})

routes.get("/" + base + "/self-registration/create-account", function(req, res) {
	res.render(base + "/self-registration/create-account",
		data = {
			section    : "journeys",
			sectionName: "Journeys",
			pageTitle  : "Create an account or sign in"
		}
	)
})

routes.get("/" + base + "/self-registration/verify-email", function(req, res) {
	res.render(base + "/self-registration/verify-email",
		data = {
			section    : "journeys",
			sectionName: "Journeys",
			pageTitle  : "Check your email"
		}
	)
})

routes.get("/" + base + "/self-registration/verify-email-example", function(req, res) {
	res.render(base + "/self-registration/verify-email-example",
		data = {
			section    : "journeys",
			sectionName: "Journeys",
			pageTitle  : "Check your email (example only)"
		}
	)
})

routes.get("/" + base + "/self-registration/create-password", function(req, res) {
	res.render(base + "/self-registration/create-password",
		data = {
			section    : "journeys",
			sectionName: "Journeys",
			pageTitle  : "Create a password"
		}
	)
})

routes.get("/" + base + "/self-registration/account-created", function(req, res) {
	res.render(base + "/self-registration/account-created",
		data = {
			section    : "journeys",
			sectionName: "Journeys",
			pageTitle  : "Account created"
		}
	)
})

module.exports = routes;