const { defineConfig } = require('cypress')

module.exports = defineConfig({
	e2e: {
		baseUrl:'https://notes-serverless-app.com',
		env: {viewportWidthBreakpoint: 768,},
		defaultCommandTimeout: 15000,
		requestTimeout: 10000,
		projectId: '48vhv2',
		chromeWebSecurity: false,
		setupNodeEvents() {
			// implement node event listeners here
		},
	},
})
