import { Page, expect, Locator } from '@playwright/test';
import { LoggedOutHeader } from '@tests/pages/LoggedOutPages/loggedOutHeader';
import { Locators } from './loggedOutStoriesPageLocators';

export class LoggedOutStoriesPage extends LoggedOutHeader {

  public readonly page: Page;
  private readonly storiesPagelocators: ReturnType<typeof Locators>;

  constructor(page: Page) {
    super(page);
    this.storiesPagelocators = Locators(page);
  }

  async verifyOnStoriesPage() {
    await expect(this.storiesPagelocators.storiesHeader).toBeVisible();
  }
}
