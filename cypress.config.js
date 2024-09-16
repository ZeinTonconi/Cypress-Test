const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    USER: "Mendoza",
    PASSWORD: "Zein1234",
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
