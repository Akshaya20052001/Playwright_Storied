import { Page, expect, Locator } from '@playwright/test';
import { Locators } from './loggedOutHeaderLocators';

export class LoggedOutHeader {

  private readonly locators: ReturnType<typeof Locators>;

  constructor(page: Page) {
    this.locators = Locators(page);
  }

  async clickJoinForFreeButtonHeader() {
    await this.locators.joinForFreeButton.click();
  }

  async clickSignInButtonHeader() {
    await this.locators.signInButton.click();
  }

  async clickPlansAndPricingButtonHeader() {

    await this.locators.plansAndPricingButton.click();
  }

  async clickStoriesButtonHeader() {
    await this.locators.storiesButton.click();
  }

  async clickGroupsButtonHeader() {
    await this.locators.groupsButton.click();
  }

  async clickPeopleTabHeader() {
    await this.locators.peopleTab.click();
  }

  async clickFamilyTreesDropdownButtonHeader() {
    await this.locators.peopleTabFamilyTreesDropdownButton.click();
  }

  async clickConnectionsDropdownButtonHeader() {
    await this.locators.peopleTabConnectionsDropdownButton.click();
  }

  async clickSearchTabHeader() {
    await this.locators.searchTab.click();
  }

  async clickHistoricalRecordSearchDropdownButtonHeader() {
    await this.locators.searchTabHistoricalRecordSearchDropdownButton.click();
  }

  async clickNewspaperSearchDropdownButtonHeader() {
    await this.locators.searchTabNewspaperSearchDropdownButton.click();
  }
}
