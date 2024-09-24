import { Page, expect, Locator } from '@playwright/test';
import { LoggedOutHeader } from '@tests/pages/LoggedOutPages/loggedOutHeader';
import { Locators } from './loggedOutPlansPageLocators';

export class LoggedOutPlansPage extends LoggedOutHeader {

  public readonly page: Page;
  private readonly plansPagelocators: ReturnType<typeof Locators>;

  constructor(page: Page) {
    super(page);
    this.plansPagelocators = Locators(page);
  }

  async verifyOnPlansAndPricingPage() {
    await expect(this.plansPagelocators.planspageHeader).toBeVisible();
  }
}
