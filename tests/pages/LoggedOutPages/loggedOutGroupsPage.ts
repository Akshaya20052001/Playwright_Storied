import { Page, expect, Locator } from '@playwright/test';
import { LoggedOutHeader } from '@tests/pages/LoggedOutPages/loggedOutHeader';
import { Locators } from './loggedOutGroupsPageLocators';

export class LoggedOutGroupsPage extends LoggedOutHeader {

  public readonly page: Page;
  private readonly groupsPagelocators: ReturnType<typeof Locators>;

  constructor(page: Page) {
    super(page);
    this.groupsPagelocators = Locators(page);
  }

  async verifyOnGroupsPage() {
    await expect(this.groupsPagelocators.groupsHeader).toBeVisible();
  }
}
