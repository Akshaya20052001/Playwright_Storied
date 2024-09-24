import { LoginLocators } from './loginPageLocators';
import { Page, expect } from '@playwright/test';

export class LoginPage {
  private readonly page: Page;
  private readonly locators: ReturnType<typeof LoginLocators>;

  constructor(page: Page) {
    this.page = page;
    this.locators = LoginLocators(page);
  }

  async assertSignInPageVisible() {
    await expect(this.locators.emailInput).toBeVisible();
  }

  async setEmail(emailId: string) {
    const { emailInput } = this.locators;
    await emailInput.fill('');
    await emailInput.fill(emailId);
  }

  async verifyOnSignInPage() {
    await expect(this.locators.signInPageHeader).toBeVisible();
  }

  async setPassword(password: string) {
    await this.locators.passwordInput.click();
    await this.locators.passwordInput.fill(password);
  }

  async clickSignInButton() {
    await this.locators.signInButton.click();
  }

  async login(emailId: string, password: string) {
    await this.verifyOnSignInPage();
    await this.setEmail(emailId);
    await this.setPassword(password);
    await this.clickSignInButton();
  }
}
