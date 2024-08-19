// page-objects/PageObjectManager.js
const { ShopHomePage } = require("./ShopHomePage");
const { RegistrationPage } = require("./RegistrationPage");
const { AdminPage } = require("./AdminPage");

class PageObjectManager {
  constructor(page) {
    this.page = page;
  }

  getShopHomePage() {
    if (!this.shopHomePage) {
      this.shopHomePage = new ShopHomePage(this.page);
    }
    return this.shopHomePage;
  }

  getRegistrationPage() {
    if (!this.registrationPage) {
      this.registrationPage = new RegistrationPage(this.page);
    }
    return this.registrationPage;
  }

  getAdminPage() {
    if (!this.adminPage) {
      this.adminPage = new AdminPage(this.page);
    }
    return this.adminPage;
  }
}

module.exports = { PageObjectManager };
