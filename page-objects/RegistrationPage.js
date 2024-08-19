class RegistrationPage {
  constructor(page) {
    this.page = page;
    this.firstName = page.locator('[id="input-firstname"]');
    this.lastName = page.locator('[id="input-lastname"]');
    this.email = page.locator('[id="input-email"]');
    this.password = page.locator('[id="input-password"]');
    this.agreeBtn = page.locator('[name="agree"]');
    this.continueBtn = page.getByRole("button", { name: "Continue" });
  }

  // Fill in the registration form
  async fillRegistrationForm(firstName, lastName, email, password) {
    await this.firstName.fill(firstName);
    await this.lastName.fill(lastName);
    await this.email.fill(email);
    await this.password.fill(password);
  }

  // Agree to terms and conditions
  async agreeToTerms() {
    await this.agreeBtn.check();
  }

  // Submit the registration form
  async submitRegistration() {
    await this.continueBtn.click();
  }

  // Registration flow
  async userRegistration(firstName, lastName, email, password) {
    await this.fillRegistrationForm(firstName, lastName, email, password);
    await this.agreeToTerms();
    await this.submitRegistration();
  }
}

module.exports = { RegistrationPage };
