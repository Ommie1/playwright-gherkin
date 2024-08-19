// @ts-check
const { defineConfig, devices } = require("@playwright/test");

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * @see https://playwright.dev/docs/test-configuration
 * 
 */

module.exports = defineConfig({
  globalSetup: require.resolve('./global-setup'),
  testDir: "./tests",
  expect: {
    timeout: 10000,
  },
  /* Run tests in files in parallel */
  fullyParallel: false,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: 1,
  /* Opt out of parallel tests on CI. */
  workers: 1,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  // By default playwright report
  reporter: "html",
  // reporter: [
  //   ['allure-playwright'],
  // ],
  // globalTeardown: './global-teardown.js', // specify the global teardown script
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    browserName: "chromium",
    headless: true,
    screenshot:'on',  // For Screenshot
    trace:'on' // Log every step    
  },
});
