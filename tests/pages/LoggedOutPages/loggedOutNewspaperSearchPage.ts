import { Page, expect, Locator } from '@playwright/test';
import { LoggedOutHeader } from '@tests/pages/LoggedOutPages/loggedOutHeader';
import { Locators } from './loggedOutNewspaperSearchPageLocators';

export class LoggedOutNewspaperSearchPage extends LoggedOutHeader {

  public readonly page: Page;
  private readonly newspaperSearchlocators: ReturnType<typeof Locators>;

  constructor(page: Page) {
    super(page);
    this.newspaperSearchlocators = Locators(page);
  }

  async verifyOnNewspaperSearchPage() {
    await expect(this.newspaperSearchlocators.newspaperSearchpageHeader).toBeVisible();
  }
}
