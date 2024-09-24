import { Page, expect } from "@playwright/test";
import { Locators } from "./familySearchPageLocators";

export class FamilySearchPage {
  public readonly page: Page;
  private readonly locators: ReturnType<typeof Locators>;

  constructor(page: Page) {
    this.page = page;
    this.locators = Locators(page);
  }

  async verifyOnFamilySearchTreeImportPage() {
    const {
      importYourTreeFromFamilySearchHeader,
      importYourTreeFromFamilyWhatWillBeImportedLink,
      importYourTreeFromFamilyTreeNamePlaceholder,
      importYourTreeFromFamilyShareWithPartnersCheckbox,
      importYourTreeFromFamilyCancelButton,
      importYourTreeFromFamilySaveButton,
    } = this.locators;

    await Promise.all([
      expect(importYourTreeFromFamilySearchHeader).toBeVisible(),
      expect(importYourTreeFromFamilyWhatWillBeImportedLink).toBeVisible(),
      expect(importYourTreeFromFamilyTreeNamePlaceholder).toBeVisible(),
      expect(importYourTreeFromFamilyShareWithPartnersCheckbox).toBeVisible(),
      expect(importYourTreeFromFamilyCancelButton).toBeVisible(),
      expect(importYourTreeFromFamilySaveButton).toBeVisible(),
    ]);
  }

  async verifyTreeNameIsPrePopulated(treeName: string) {
    const { importYourTreeFromFamilyTreeNamePlaceholder } = this.locators;
    var expectedTreeName = (await importYourTreeFromFamilyTreeNamePlaceholder.getAttribute("value")).toString();
    expect(expectedTreeName).toBe(treeName);
  }
  async clickCancelButton() {
    await this.locators.importYourTreeFromFamilyCancelButton.click();
  }

  async clickSaveButton() {
    await this.locators.importYourTreeFromFamilySaveButton.click();
  }

  async uncheckShareWithPartnersCheckbox(status: string) {
    if (status === "Unchecked")
      await this.locators.importYourTreeFromFamilyShareWithPartnersCheckbox.click();
  }

  async verifyFamilySearchTreeImportPageIsClosed() {
    const {
      importYourTreeFromFamilySearchHeader,
      importYourTreeFromFamilyWhatWillBeImportedLink,
      importYourTreeFromFamilyTreeNamePlaceholder,
      importYourTreeFromFamilyShareWithPartnersCheckbox,
      importYourTreeFromFamilyCancelButton,
      importYourTreeFromFamilySaveButton,
    } = this.locators;
    await Promise.all([
      expect(importYourTreeFromFamilySearchHeader).not.toBeVisible(),
      expect(importYourTreeFromFamilyWhatWillBeImportedLink).not.toBeVisible(),
      expect(importYourTreeFromFamilyTreeNamePlaceholder).not.toBeVisible(),
      expect(importYourTreeFromFamilyShareWithPartnersCheckbox).not.toBeVisible(),
      expect(importYourTreeFromFamilyCancelButton).not.toBeVisible(),
      expect(importYourTreeFromFamilySaveButton).not.toBeVisible(),
    ]);
  }
}
