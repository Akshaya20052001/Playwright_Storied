import { Page, expect, Locator } from '@playwright/test';
import { Locators } from './homepageLocators';
import * as locators from './homepageLocators'


export class HomePage {

  public readonly page: Page;
  private readonly locators: ReturnType<typeof Locators>;


  constructor(page: Page) {
    this.page = page;
    this.locators = Locators(page);
  }

  async verifyOnHomepage() {
    await expect(this.locators.navAvatar).toBeVisible();
  }

  async clickOnNavAvatar() {
    await this.locators.navAvatar.click();
  }

  async clickLogoutButton() {
    await expect(this.locators.logOutButton).toBeVisible();
    await this.locators.logOutButton.click();
  }

  async clickSettingsButton() {
    await expect(this.locators.settingsButton).toBeVisible();
    await this.locators.settingsButton.click();
  }

  async clickMyStories() {
    await this.page.click(locators.myStories)
  }
  
  async clickAddStories() {
    await this.page.reload()
    await this.page.click(locators.addStory)
  }

  async clickNewspaperSearch() {
    await this.page.click(locators.newsPaperSearch)
  }

  async clicksubscribeButton() {
    await this.page.click(locators.subscribe)
  }

  async clickRecipesButton() {
    await this.page.click(locators.recipes)
  }
  
  async clickOnMyScrapbook() {
    await this.page.click(locators.myScrapbook)
    await this.page.reload()
  }
}
