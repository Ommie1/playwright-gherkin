const { expect } = require("@playwright/test");
class AdminPage {
  constructor(page) {
    this.page = page;
    this.continuebtn = page.getByRole("link", { name: "Continue" });
    this.adminHeadingTxt = page.locator("h1");
  }

  async verifyUserRegistration(adminTxt) {
    await expect(this.continuebtn).toBeVisible();
    await expect(this.adminHeadingTxt).toContainText(adminTxt);
  }
}

module.exports = { AdminPage };
