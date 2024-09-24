import { Page, expect } from '@playwright/test';
import { Locators } from './settingsPageLocators';

export class SettingsPage {
  private readonly page: Page;
  private readonly locators: ReturnType<typeof Locators>;

  constructor(page: Page) {
    this.page = page;
    this.locators = Locators(page);
  }

  async verifyOnSettingsPage() {
    await expect(this.locators.profileHeader).toBeVisible();
  }

  async clickOnTreesSection() {
    await this.locators.treesSection.click();
  }

  async clickStartATreeButton() {
    await this.locators.startATreeButton.click();
  }

  async selectStartANewTreeOption() {
    await this.locators.startANewTreeButton.click();
  }

  async selectImportFromFamilySearchTreeOption() {
    await this.locators.importFromFamilySearchButton.click();
  }

  async clickOnTreeHavingName(treeName: string) {
    let existingTreeName = this.page.getByTestId('web-view').getByText(treeName, { exact: true });
    await existingTreeName.click();
  }

  async ClickEditTreeNameButton() {
    await this.locators.editTreeButtonElement.click();
  }

  async VerifyEditTreeNameButtonIsReplacedByCancelButton() {
    await this.locators.cancelEditTreeButtonElement.waitFor();
  }

  async VerifySaveButtonOnTreeSectionIsDisabled() {
    await this.locators.saveEditTreeButtonElement.isDisabled();
  }

  async VerifyTreeSharedPrefernceStatus(status: string) {
    switch (status) {
      case "Checked":
        expect(await this.locators.shareWithPartnersCheckboxElement.isChecked()).toBeTruthy();
        break;

      case "Unchecked":
        expect(await this.locators.shareWithPartnersCheckboxElement.isChecked()).toBeFalsy();
        break;

      default:
        throw new Error("Invalid status provided.");
    }
  }

  async verifyUserIsAtSettingsPageTreesSection() {
    const { treesSection, treesSectionHeader, startATreeButton } = this.locators;
    await Promise.all([
      expect(treesSection).toBeVisible(),
      expect(treesSectionHeader).toBeVisible(),
      expect(startATreeButton).toBeVisible()
    ]);
  }

  async clickStartTreeButtonOption() {
    await this.locators.startANewTreeButton.click();
  }
  async clickUploadGedcomButtonOption() {
    await this.locators.uploadAGedcomFileButtonOption.click();
  }
}
