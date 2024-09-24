import { Page, expect, Locator } from '@playwright/test';
import { LoggedOutHeader } from '@tests/pages/LoggedOutPages/loggedOutHeader';
import { Locators } from './loggedOutHistoricalSearchPageLocators';

export class LoggedOutHistoricalSearchPage extends LoggedOutHeader {

  public readonly page: Page;
  private readonly historicalSearchLocators: ReturnType<typeof Locators>;

  constructor(page: Page) {
    super(page);
    this.historicalSearchLocators = Locators(page);
  }

  async verifyOnHistoricalSearchPage() {
    await expect(this.historicalSearchLocators.historicalSearchpageHeader).toBeVisible();
  }
}
