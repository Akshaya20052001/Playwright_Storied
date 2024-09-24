import { Page, expect, Locator } from '@playwright/test';
import { Locators } from './signUpPageLocators';

export class SignUpPage {

  private readonly page: Page;
  private readonly locators: ReturnType<typeof Locators>;

  constructor(page: Page) {
    this.page = page;
    this.locators = Locators(page);
  }

  async verifyOnSignUpPage() {
    await expect(this.locators.signUpPageHeader).toBeVisible();
  }
}
