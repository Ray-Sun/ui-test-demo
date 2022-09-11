import { defineConfig } from "cypress";

export default defineConfig({
  "e2e": {
    baseUrl: 'https://www.myer.com.au',
    specPattern: `./cypress/e2e/specs/**/*.spec.ts`,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      require('cypress-grep/src/plugin')(config);
      return config;
    },
  },
  "defaultCommandTimeout": 8000,
  "reporter": "cypress-multi-reporters",
  "reporterOptions": {
    "reporterEnabled": "cypress-mochawesome-reporter, mocha-junit-reporter",
    "mochaJunitReporterReporterOptions": {
      "mochaFile": "reports/junit/results-[hash].xml"
    },
    "cypressMochawesomeReporterReporterOptions": {
      "reportDir": "reports",
      "charts": true,
      "reportPageTitle": "My Test Suite",
      "embeddedScreenshots": true,
      "inlineAssets": true
    }
  },
  "screenshotsFolder": "reports/screenshots",
  "videosFolder": "reports/videos"
});
