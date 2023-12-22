const { defineConfig } = require("cypress")

module.exports = defineConfig({
    chromeWebSecurity: false,
    watchForFileChanges: false
})