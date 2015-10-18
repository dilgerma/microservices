// An example configuration file.

//var ScreenShotReporter = require('protractor-html-screenshot-reporter');
exports.config = {

    onPrepare: function () {

        //require('jasmine-reporters');
        //jasmine.getEnv().addReporter(
        //    new jasmine.JUnitXmlReporter('output/xmloutput', true, true));

        //jasmine.getEnv().addReporter(new ScreenShotReporter({
        //    baseDirectory: './output/screenshots'
        //}));
    },


    directConnect: true,

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'chrome'
    },

    suites: {
        invoices: 'dist/**/*.js'
    },

    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    },

    baseUrl: 'http://192.168.59.103'
};
