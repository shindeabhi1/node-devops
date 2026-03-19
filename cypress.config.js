const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    specPattern: 'tests/e2e/**/*.js',
    baseUrl: 'http://localhost:3000'
  }
});