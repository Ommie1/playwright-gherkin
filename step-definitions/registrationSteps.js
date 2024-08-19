const { Given, When, Then } = require('@cucumber/cucumber');
const { PageObjectManager } = require('../page-objects/PageObjectManager');
const { faker } = require('@faker-js/faker');
require('dotenv').config();
const { setup, teardown } = require('../utils');

let page;
let pageObjectManager;

// Generate test data
const firstName = faker.person.firstName();
const lastName = faker.person.lastName();
const email = faker.internet.email();
const password = faker.internet.password();

Given('I am on the shop home page', async function () {
  try {
    const { page: newPage } = await setup();
    page = newPage;
    pageObjectManager = new PageObjectManager(page);
    await pageObjectManager.getShopHomePage().gotoSite();
  } catch (error) {
    console.error('Failed to open site:', error);
    throw error;
  }
});

When('I go to the registration page', async function () {
  try {
    await pageObjectManager.getShopHomePage().gotoRegistrationPage();
  } catch (error) {
    console.error('Failed to navigate to registration page:', error);
    throw error;
  }
});

When('I register with valid details', async function () {
  try {
    await pageObjectManager.getRegistrationPage().userRegistration(firstName, lastName, email, password);
  } catch (error) {
    console.error('Failed to register user:', error);
    throw error;
  }
});

Then('I should see a confirmation on the admin page', async function () {
  try {
    const shopData = require('../test-data/shopData.json');
    await pageObjectManager.getAdminPage().verifyUserRegistration(shopData.adminPageHeadingTxt);
  } catch (error) {
    console.error('Failed to verify user registration:', error);
    throw error;
  } finally {
    await teardown(); // Ensure teardown is called
  }
});
