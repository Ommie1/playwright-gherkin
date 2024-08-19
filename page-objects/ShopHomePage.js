class ShopHomePage {
  constructor(page) {
    this.page = page;
    this.myAccountLink = page.getByRole("link", { name: " My Account " });
    this.registerLink = page.getByRole("link", { name: "Register" });
  }

  // Goto site
  async gotoSite() {
    const baseUrl = process.env.BASE_URL;
    await this.page.goto(baseUrl);
  }

  // Goto registration form
  async gotoRegistrationPage() {
    await this.myAccountLink.click();
    await this.registerLink.click();
  }
}

module.exports = { ShopHomePage };
