const { defineConfig } = require('cypress')

module.exports = defineConfig({
	e2e: {
		baseUrl:'https://notes-serverless-app.com',
		setupNodeEvents() {
			// implement node event listeners here
		},
	},
})
