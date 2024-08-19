const { chromium } = require('playwright');

let browser;
let context;
let page;

async function setup() {
  try {
    browser = await chromium.launch({ headless: false });
    context = await browser.newContext();
    page = await context.newPage();
    return { browser, context, page };
  } catch (error) {
    console.error('Failed to setup browser:', error);
    throw error;
  }
}

async function teardown() {
  try {
    if (context) {
      await context.close();
    }
    if (browser) {
      await browser.close();
    }
  } catch (error) {
    console.error('Failed to teardown browser:', error);
    throw error;
  }
}

module.exports = { setup, teardown };
