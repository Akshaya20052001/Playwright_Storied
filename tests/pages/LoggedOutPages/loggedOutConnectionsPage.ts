import { Page, expect, Locator } from '@playwright/test';
import { LoggedOutHeader } from '@tests/pages/LoggedOutPages/loggedOutHeader';
import { Locators } from './loggedOutConnectionsPageLocators';

export class LoggedOutConnectionsPage extends LoggedOutHeader {

  public readonly page: Page;
  private readonly connectionPagelocators: ReturnType<typeof Locators>;

  constructor(page: Page) {
    super(page);
    this.connectionPagelocators = Locators(page);
  }

  async verifyOnConnectionsPage() {
    await expect(this.connectionPagelocators.connectionsPageHeader).toBeVisible();
  }

  async clickAddAConnectionButton() {
    await this.connectionPagelocators.addaConnectionButton.click();
  }

  async clickAddAConnectionSecondButton() {
    await this.connectionPagelocators.addaConnectionSecondButton.click();
  }

  async clickAddAConnectionThirdButton() {
    await this.connectionPagelocators.addaConnectionThirdButton.click();
  }

  async clickSearchRecordsFloatingCardButton() {
    await this.connectionPagelocators.searchRecordsFloatingCardButton.click();
  }

  async clickNewspaperSearchFloatingCardButton() {
    await this.connectionPagelocators.searchNewspapersFloatingCardButton.click();
  }

  async clickLearnMoreFloatingCardButton() {
    await this.connectionPagelocators.learnMoreFloatingCardButton.click();
  }

  async clickStartAStoryFloatingCardButton() {
    await this.connectionPagelocators.startaStoryFloatingCardButton.click();
  }
}
