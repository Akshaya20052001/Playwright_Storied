import { Page, expect, Locator } from '@playwright/test';
import { LoggedOutHeader } from '@tests/pages/LoggedOutPages/loggedOutHeader';
import { Locators } from './loggedOutFamilyTreesPageLocators';


export class LoggedOutFamilyTreesPage extends LoggedOutHeader {

  public readonly page: Page;
  private readonly familyTreeslocators: ReturnType<typeof Locators>;

  constructor(page: Page) {
    super(page);
    this.familyTreeslocators = Locators(page);
  }

  async verifyOnFamilyTreesPage() {
    await expect(this.familyTreeslocators.familyTreesHeader).toBeVisible();
  }

  async clickStartATreeButton() {
    await this.familyTreeslocators.startaTreeButton.click();
  }

  async clickUploadExistingTreeButton() {
    await this.familyTreeslocators.uploadExistingTreeButton.click();
  }

  async clickStartYourTreeButton() {
    await this.familyTreeslocators.startYourTreeButton.click();
  }

  async clickStartYourTreeSecondButton() {
    await this.familyTreeslocators.startYourTreeSecondButton.click();
  }

  async clickSearchRecordsFloatingCardButton() {
    await this.familyTreeslocators.searchRecordsFloatingCardButton.click();
  }

  async clickNewspaperSearchFloatingCardButton() {
    await this.familyTreeslocators.searchNewspapersFloatingCardButton.click();
  }

  async clickLearnMoreFloatingCardButton() {
    await this.familyTreeslocators.learnMoreFloatingCardButton.click();
  }

  async clickStartAStoryFloatingCardButton() {
    await this.familyTreeslocators.startaStoryFloatingCardButton.click();
  }
}
