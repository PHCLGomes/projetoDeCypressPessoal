const { defineConfig } = require('cypress')

module.exports = defineConfig({
	e2e: {
		baseUrl:'https://notes-serverless-app.com',
		env: {viewportWidthBreakpoint: 768,},
		defaultCommandTimeout: 15000,
		requestTimeout: 10000,
		chromeWebSecurity: false,
		setupNodeEvents(on, config) {
			require('@cypress/grep/src/plugin')(config)
			return config
		},	
	},
	projectId: '48vhv2',
})
