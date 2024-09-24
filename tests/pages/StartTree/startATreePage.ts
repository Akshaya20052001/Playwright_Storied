import { Page, expect, Locator } from '@playwright/test';
import { Locators } from './startATreePageLocators';
import path from 'path';

export class StartATreePage {

  private readonly page: Page;
  private readonly locators: ReturnType<typeof Locators>;

  constructor(page: Page) {
    this.page = page;
    this.locators = Locators(page);
  }

  async verifyOnStartATreePage() {
    await expect(this.locators.firstNamePlaceholder).toBeVisible();
  }

  async setFirstName(firstName: string) {
    await this.locators.firstNamePlaceholder.click();
    await this.locators.firstNamePlaceholder.clear();
    await this.locators.firstNamePlaceholder.fill(firstName);
  }

  async setLastName(lastName: string) {
    await this.locators.lastNamePlaceholder.click();
    await this.locators.lastNamePlaceholder.clear();
    await this.locators.lastNamePlaceholder.fill(lastName);
  }

  async clickMaleGender() {
    await this.locators.maleGenderSelector.click();
  }

  async setBirthDate(birthDate: string) {
    await this.locators.birthDatePlaceholder.click();
    await this.locators.birthDatePlaceholder.clear();
    await this.locators.birthDatePlaceholder.fill(birthDate);
  }

  async clickNextButton() {
    await expect(this.locators.nextButton).toBeVisible();
    await this.locators.nextButton.click();
  }

  async verifyOnUploadGedcomPage() {
    await expect(this.locators.uploadYourFamilyTreeHeader).toBeVisible();
  }
  async uploadGedcomFile(gedcomFileName: string) {
    const fileChooserPromise = this.page.waitForEvent('filechooser');
    await this.locators.uploadGedcomLink.click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles(path.join('data/Gedcom/', gedcomFileName));
    await this.locators.acceptTermsConditionsCheckbox.click();
    await this.locators.uploadButton.click();
  }

  async selectHomeperson(personName: string) {
    await expect(this.locators.chooseHomepersonHeaderPage).toBeVisible();
    await this.locators.setHomePersonInput.fill(personName);
    await this.locators.selectHomepersonButton.click();
    await this.locators.doneButton.click();
  }

  async createPersonViaTree(homeperson: any) {
    await this.setFirstName(homeperson.homePersonFirstName);
    await this.setLastName(homeperson.homePersonLastName);
    await this.clickMaleGender();
    await this.setBirthDate(homeperson.homepersonBirthDate);
    await this.clickNextButton();
  }
}
