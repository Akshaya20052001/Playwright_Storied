import { Page, expect, Locator } from '@playwright/test';
import { LoggedOutHeader } from '@tests/pages/LoggedOutPages/loggedOutHeader';
import { Locators } from './loggedOutHomePageLocators';

export class LoggedOutHomePage extends LoggedOutHeader {

  public readonly page: Page;
  private readonly loggedOutHomeLocators: ReturnType<typeof Locators>;

  constructor(page: Page) {
    super(page);
    this.loggedOutHomeLocators = Locators(page);
  }

  async verifyOnLohp() {
    await expect(this.loggedOutHomeLocators.lohpSignInButton).toBeVisible();
  }

  async clickSignInButtonLohp() {
    await this.loggedOutHomeLocators.lohpSignInButton.click();
  }

  async clickJoinForFreeButtonLohp() {
    await this.loggedOutHomeLocators.lohpJoinForFreeButtontwo.click();
  }

  async clickStartYourTreeButtonLohp() {
    await this.loggedOutHomeLocators.lohpJoinForFreeButtontwo.click();
  }

  async clickLearnMoreButtonLohp() {
    await this.loggedOutHomeLocators.lohpLearMoreButton.click();
  }

  async clickCreateAGroupButtonLohp() {
    await this.loggedOutHomeLocators.lohpCreateAGroupButton.click();
  }

  async clickPlansAndPricingButtonLohp() {
    await this.loggedOutHomeLocators.lohpPlansAndPricingButton.click();
  }

  async clickHistoricalSearchButtonLohp() {
    await this.loggedOutHomeLocators.lohpHistoricalSearchButton.click();
  }

  async clickNewspaperSearchButtonLohp() {
    await this.loggedOutHomeLocators.lohpNewspaperSearchButton.click();
  }

  async clickGetStartedButtonLohp() {
    await this.loggedOutHomeLocators.lohpGetStartedButton.click();
  }
}
