import { Page, expect, Locator } from '@playwright/test';
import { Locators, ModalButtonLocators } from './pedigreePageLocators';

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export class PedigreePage {

  private readonly page: Page;
  private readonly locators: ReturnType<typeof Locators>;
  private readonly modaButtonlocators: ReturnType<typeof ModalButtonLocators>;

  constructor(page: Page) {
    this.page = page;
    this.locators = Locators(page);
    this.modaButtonlocators = ModalButtonLocators(page);
  }

  async verifyOnPedigreePage() {
    await expect(this.locators.homepersonNode).toBeVisible();
  }

  async setPersonName(firstName: string, lastName: string) {
    await this.locators.firstName.clear();
    await this.locators.firstName.fill(firstName);
    await this.locators.lastName.clear();
    await this.locators.lastName.fill(lastName);
  }

  async uncheckThisPersonIsLivingCheckbox() {
    await this.locators.thisPersonIsLivingCheckbox.uncheck();
  }

  async addSiblingsToHomePerson() {
    await this.locators.addSiblingButtonInQuickviewModel.click();
  }

  async setDeathDetails(deathDate: Date, deathPlace: string) {
    const deathDateString = deathDate.toISOString();
    await this.locators.deathDateInputBox.fill(deathDateString);
    await this.locators.deathPlaceInputBox.fill(deathPlace);
  }

  async setGenderInPersonDetails(gender: string) {
    switch (gender) {
      case "male":
        await this.locators.maleButtonOnDetails.click();
        break;
      case "female":
        await this.locators.femaleButtonOnDetails.click();
        break;
      case "others":
        await this.locators.othersButtonOnDetails.click();
        break;
    }
  }

  async clickAddYourFather() {
    await this.locators.addYourFatherButtonProgressDrawer.click();
  }

  async clickAddYourPaternalGrandFather() {
    await this.locators.addYourPaternalGrandFatherButton.click();
  }

  async clickAddYourPaternalGrandMother() {
    await this.locators.addYourPaternalGrandMotherButton.click();
  }

  async clickAddYourMaternalGrandFather() {
    await this.locators.addYourMaternalGrandFatherButton.click();
  }

  async clickAddYourMaternalGrandMother() {
    await this.locators.addYourMaternaGrandMotherButton.click();
  }

  async verifyDetailsOfThePersonShouldExapnded() {
    expect(this.locators.treeTaskAccordionExpandedAreaForHomePerson).toBeVisible();
  }

  async verifyTreeTaskTitleIsVisble() {
    expect(this.locators.treeTaskTitleText).toBeVisible();
  }

  async verifyTreeTaskSubtitleIsVisble() {
    expect(this.locators.treeTaskSubtitleText).toBeVisible();
  }

  async verifyTreeTaskCompletionModalIsVisible() {
    await Promise.all([
      expect(this.locators.twModal).toBeVisible(),
      expect(this.locators.niceJobTexttwModal).toBeVisible(),
      expect(this.locators.youHaveCompletedFirstThreeTexttwModal).toBeVisible(),
      expect(this.locators.confettiImagetwModal).toBeVisible(),
      expect(this.locators.returnToTreeButtontwModal).toBeVisible(),
    ])
  }

  async clickOnReturnToTreeButton() {
    await this.locators.returnToTreeButtontwModal.click();
  }

  async verifyProgressPercentage() {
    await delay(1000);
    let progressMeterPercentage: number;
    let progressStatus: number;
    progressMeterPercentage = parseInt((await this.locators.progressMeterPercentage.textContent()).trim().charAt(0));
    expect(progressMeterPercentage).toBeGreaterThan(4);
    progressStatus = parseFloat(await this.locators.progressStatus.textContent());
    expect(progressStatus).toBeGreaterThan(0.035);
  }

  async verifyPaternalParentsDropdownDisabled() {
    await Promise.all([
      expect(this.locators.paternalGrandFatherDropdown).toBeDisabled(),
      expect(this.locators.paternalGrandMotherDropdown).toBeDisabled(),
    ])
  }

  async verifyPaternalParentsDropdownEnabled() {
    await Promise.all([
      expect(this.locators.paternalGrandFatherDropdown).toBeEnabled(),
      expect(this.locators.paternalGrandMotherDropdown).toBeEnabled(),
    ])
  }

  async clickAddMother() {
    await this.locators.addMotherButton.click();
  }

  async verifyAddedPeopleIsVisbleInSearchList() {
    await delay(2000);
    const count = await this.locators.homepersonNameInSearchList.count();
    expect(count).toEqual(3);
  }

  async clickAddYourMotherButtonTreeProgressDrawer() {
    await this.locators.addYourMotherButtonTreeProgressDrawer.click();
  }

  async verifyMaternalParentsDropdownDisabled() {
    await Promise.all([
      expect(this.locators.maternalGrandFatherDropdown).toBeDisabled(),
      expect(this.locators.maternalGrandMotherDropdown).toBeDisabled(),
    ])
  }

  async verifyMaternalParentsDropdownEnabled() {
    await Promise.all([
      expect(this.locators.maternalGrandFatherDropdown).toBeEnabled(),
      expect(this.locators.maternalGrandMotherDropdown).toBeEnabled(),
    ])
  }

  async clickOnResidenceCheckBox() {
    await this.locators.residenceCheckBoxForHomePerson.click();
  }

  async setResidenceOnProgressBar(region: string) {
    await this.locators.residenceInputBoxPlaceholder.fill(region);
    await this.locators.saveDetailsButton.click();
  }

  async setBirthDateOnProgressBar(birthDate: Date) {
    const dateString = birthDate.toISOString();
    await this.locators.bithDateCheckBoxForHomePerson.click();
    await this.locators.birthdateInputBoxPlaceholder.fill(dateString);
    await this.locators.saveDetailsButton.click();
  }

  async setBirthPlaceOnProgressBar(birthPlace: string) {
    await this.locators.birthPlaceCheckBoxForHomePerson.click();
    await this.locators.birthPlaceInputBoxPlaceholder.fill(birthPlace);
    await this.locators.saveDetailsButton.click();
  }

  async clickSaveDetailsButton() {
    await this.locators.saveDetailsButton.click();
  }

  async clickAddPersonButton() {
    await this.locators.addPersonButton.click();
  }

  async clickNextButtonHomePersonDetails() {
    await this.locators.nextButtonHomePersonDetails.click();
  }

  async verifyTreeProgressDrawerVisible() {
    await expect(this.locators.treeProgressDrawer).toBeVisible();
  }

  async verifyHomePersonIsDisplayed(homepersonName: string) {
    const homepersonNode = this.locators.homepersonNode;
    await homepersonNode.waitFor({ timeout: 200000 });
    await expect(homepersonNode.isVisible()).resolves.toBe(true);
    await expect(homepersonNode).toHaveText(homepersonName);
  }

  async clickReadMotherNode() {
    await this.locators.homepersonMotherNode.click();
  }

  async clickReadFatherNode() {
    await this.locators.homepersonFatherNode.click();
  }

  async clickQuickViewModalOption(option: string) {
    switch (option) {
      case "View Tree":
        await this.modaButtonlocators.viewTree.click();
        break;
      case "Quick Edit":
        await this.modaButtonlocators.quickEdit.click();
        break;
      case "Add Family":
        await this.modaButtonlocators.addFamily.click();
        break;
      case "View Profile":
        await this.modaButtonlocators.viewProfile.click();
        break;
    }
  }

  async clickTreeExpansionButton() {
    await expect(this.locators.treeExpansionIcon).toBeVisible();
  }

  async verifyFifthGenerationNodeIsDisplayed() {
    await expect(this.locators.fifthGenNode).toBeVisible();
  }

  async clickSiblingsListExpansionButton() {
    await this.locators.siblingExpansionIcon.click();
  }

  async clickHomeIconButton() {
    await this.locators.homeIcon.click();
  }

  async verifySiblingNodeIsDisplayed() {
    await expect(this.locators.homepersonSiblingNode).toBeVisible();
  }

  async searchButtonOnPedigreeViewIsDisplayed() {
    await expect(this.locators.searchIcon).toBeVisible();
  }

  async clickSearchButton() {
    await this.locators.searchIcon.click();
  }

  async verifySearchedPersonResultIsVisible(personName: string) {
    const searchedPeopleText = this.locators.searchedPeopleText;
    await expect(searchedPeopleText).toBeVisible();
    await expect(searchedPeopleText).toHaveText(personName);
  }

  async verifyTheCheckCountAndColour() {
    await delay(1000);
    expect(await this.locators.iconCheckCircle).toBeVisible();
    expect((await this.locators.checkCountHomePerson.textContent()).trim()).toEqual('4/4');
  }

  async clickCloseTreeProgressDrawer() {
    await this.locators.closeDrawerButton.click();
  }

  async verifyTheAbsoluteTopAndBottomIcons() {
    await Promise.all([
      expect(this.locators.treeProgressMeter).toBeVisible(),
      expect(this.locators.bottomHomePersonIcon).toBeVisible(),
      expect(this.locators.resetButton).toBeVisible(),
      expect(this.locators.treeZoomInIcon).toBeVisible(),
      expect(this.locators.treeZoomOutIcon).toBeVisible(),
      expect(this.locators.searchPeopleIcon).toBeVisible(),
    ])
  }

  async clickAddFatherNode() {
    await this.locators.emptyFatherNode.click();
  }

  async clickAddMotherNode() {
    await this.locators.emptyMotherNode.click();
  }

  async clickSiblingNode() {
    await this.locators.homepersonSiblingNode.click();
  }

  async verifyAddMotherModalIsVisible(personName: string) {
    const addMotherModalHeader = this.page.getByText(`Add a Mother to ${personName}`);
    await expect(addMotherModalHeader).toBeVisible();
  }

  async setPersonDetails(region: string, birthDate: Date, birthPlace: string) {
    await this.locators.residenceInputBoxPlaceholder.fill(region);
    await this.locators.residenceCheckBoxForHomePerson.press('Enter');
    const dateString = birthDate.toISOString();
    await this.locators.birthdateInputBoxPlaceholder.fill(dateString);
    await this.locators.birthPlaceInputBoxPlaceholder.fill(birthPlace);
  }

  async clickHomePersonNode() {
    await this.locators.homepersonNode.click();
  }

  async verifyQuickViewModalIsVisible() {
    const { viewTree, quickEdit, addFamily, searchRecords } = this.modaButtonlocators;
    await Promise.all([
      expect(viewTree).toBeVisible(),
      expect(quickEdit).toBeVisible(),
      expect(addFamily).toBeVisible(),
      expect(searchRecords).toBeVisible()
    ]);
  }

  async verifyQuickEditModalIsVisible() {
    const quickEditModalHeader = this.page.getByRole('heading', { name: 'Edit Kyle Allen' });
    await expect(quickEditModalHeader).toBeVisible();
  }

  async addSpouseToHomePerson() {
    await this.locators.addSpouseButtonInQuickviewModel.click();
  }

  async addChildToHomePerson() {
    await this.locators.addChildButtonInQuickviewModel.click();
    await delay(1000);
  }

  async addParentsToHomePerson() {
    await this.locators.addParentsButtonInQuickviewModel.click();
    await delay(1000);
  }

  async verifyUserLandsOnThePersonProfilePage(personName: string) {
    await expect(this.locators.homepersonNode).toBeVisible();
    await expect(this.locators.personPageHeaderName).toContainText(personName);
  }

  async validateHomePersonIsChanged() {
    await expect(this.locators.homepersonNode).toBeVisible();
  }

  async verifyAddFatherModalIsVisible(personName: string) {
    const addFatherModalHeader = this.page.getByText(`Add a Father to ${personName}`);
    await expect(addFatherModalHeader).toBeVisible();
  }

  async verifyHomePersonIsChanged(newHomeperson: string) {
    const homepersonNode = this.locators.homepersonNode;
    await expect(homepersonNode).toBeVisible();
    await expect(homepersonNode).toHaveText(newHomeperson);
  }

  async searchPersonByNameInput(personName: string) {
    const searchPeoplePlaceholder = this.locators.searchPeoplePlaceholder;
    await expect(searchPeoplePlaceholder).toBeVisible();
    await searchPeoplePlaceholder.fill(personName);
  }

  async verifySeachPeopleDrawerIsVisble() {
    expect(this.locators.searchPeoplePlaceholder).toBeVisible();
  }

  async clickOntreeProgressMeter() {
    await this.locators.treeProgressMeter.click();
  }

  async addFamilyMembersFromMainTreeAndVerifyingTheProgressBarPercentage(familyMembers: string[], familyMemberNames: string[]) {
    let progressMeterPercentageBeforeAddingMember: number;
    let progressMeterPercentageAfterAddingMember: number;
    for (const member of familyMembers) {
      progressMeterPercentageBeforeAddingMember = parseInt((await this.locators.progressMeterPercentage.textContent()).trim());
      switch (member) {
        case "Father":
          await this.locators.addYourFatherButtonProgressDrawer.click();
          break;
        case "Mother":
          await this.locators.addYourMotherButtonTreeProgressDrawer.click();
          break;
        case "PaternalGrandFather":
          await this.locators.addYourPaternalGrandFatherButton.click();
          break;
        case "PaternalGrandMother":
          await this.locators.addYourPaternalGrandMotherButton.click();
          break;
        case "MaternalGrandFather":
          await this.locators.addYourMaternalGrandFatherButton.click();
          break;
        case "MaternalGrandMother":
          await this.locators.addYourMaternaGrandMotherButton.click();
          break;
      }
      await this.locators.firstName.clear();
      await this.locators.firstName.fill(familyMemberNames[familyMembers.indexOf(member)]);
      await this.clickAddPersonButton();

      await delay(2000);
      progressMeterPercentageAfterAddingMember = parseInt((await this.locators.progressMeterPercentage.textContent()).trim());
      expect(progressMeterPercentageAfterAddingMember).toBeGreaterThan(progressMeterPercentageBeforeAddingMember);
    }
  }

  async verifyTheAddedFamilyMembersInSearchList(familyMembers: string[]) {
    await delay(2000);
    const searchPeopleList = await this.page.$$('//ul[@role="listbox"]//li//span');
    const personNames = [];
    for (const element of searchPeopleList) {
      const name = await element.textContent();
      personNames.push(name);
    }
    expect(personNames).toEqual(expect.arrayContaining(familyMembers));
  }

  async clickZoomInCreatedTree() {
    await this.locators.treeZoomInIcon.click();
  }

  async clickZoomOutCreatedTree() {
    await this.locators.treeZoomOutIcon.click();
  }

  async clickResetButton() {
    await this.locators.resetButton.click();
  }

  async clickOnSearchPersonInTheList() {
    await this.locators.searchPersonInTheList.click();
  }

  async clickOnSearchPeopleIcon() {
    await this.locators.searchPeopleIcon.click();
  }

  async verifyFocusPersonHasBeenChanged(personName: string) {
    const HomePersonName = await this.locators.focusPersonName.textContent()
    expect(HomePersonName).toEqual(personName);
  }

  async verifyAddFamilyButtonIsVisible(option: string) {
    const { addParent, addChild, addSibling, addSpouse } = this.modaButtonlocators;

    switch (option) {
      case "Add Parent":
        await expect(addParent).toBeVisible();
        break;
      case "Add Child":
        await expect(addChild).toBeVisible();
        break;
      case "Add Sibling":
        await expect(addSibling).toBeVisible();
        break;
      case "Add Spouse":
        await expect(addSpouse).toBeVisible();
        break;
      default:
        throw new Error(`Unsupported option: ${option}`);
    }
  }

  async ClickTreeMainTitleElement() {
    await this.locators.treeMainTitle.click();
  }

  async VerifySecondTreePedigreePageIsVisible(homepersonName: string) {
    const personName = await this.locators.homepersonNode.textContent();
    expect(personName).not.toEqual(homepersonName);
  }

  async clickTreeLabelDropdownOption(option: string) {
    const { seeAllTreesDropdown, treeSettingsDropdown, secondTreeDropdown } = this.locators;

    switch (option) {
      case "See All Trees":
        await seeAllTreesDropdown.click();
        break;
      case "Tree Settings":
        await treeSettingsDropdown.click();
        break;
      case "Second Tree":
        await secondTreeDropdown.click();
        break;
      default:
        throw new Error(`Unsupported option: ${option}`);
    }
  }

  async verifyImportingSnackBarIsDisplayed(option: string) {
    const { familySearchImportTreeSuccessSnackbar, familySearchImportMemoriesSuccessSnackbar } = this.locators;
    let snackbar : Locator;

    switch (option) {
      case "Tree":
        snackbar = familySearchImportTreeSuccessSnackbar;
        break;
      case "Memories":
        snackbar = familySearchImportMemoriesSuccessSnackbar;
        break;
      default:
        throw new Error(`Unsupported option: ${option}`);
    }

    await Promise.all([
      await snackbar.waitFor({ timeout: 200000 }),
      expect(snackbar.isVisible()).resolves.toBe(true),
    ]);
  }

  async verifyHintsGenerated() {
    let retries = 0;
    const maxRetries = 3; // Maximum number of retries

    while (retries < maxRetries) {
      await this.page.reload();
      await delay(10000);

      if (await this.locators.hintsGenerated.isVisible()) {
        return;
      }
      retries++;
    }

    throw new Error(`Element '${this.locators.hintsGenerated}' did not become visible after ${maxRetries} retries`);
  }

  async clickHintIconButton() {
    await this.locators.hintsGenerated.click();
  }

  async addFatherDetails(hintsPersonDetails: any) {
    await this.locators.firstNamePlaceholder.fill(hintsPersonDetails.fatherFirstName);
    await this.locators.lastNamePlaceholder.fill(hintsPersonDetails.fatherLastName);
    await this.locators.maleGenderSelector.click();
    await this.locators.birthdateInputBoxPlaceholder.fill(hintsPersonDetails.fatherBirthDate);
    await this.locators.birthLocationPlaceholder.fill(hintsPersonDetails.fatherBirthPlace);
    await this.locators.islivingCheckbox.click();
    await this.locators.deathDatePlaceholder.fill(hintsPersonDetails.fatherDeathDate);
    await this.locators.deathLocationPlaceholder.fill(hintsPersonDetails.fatherDeathPlace);
    await this.locators.firstNamePlaceholder.click();
    await this.locators.addPersonButton.click();
    await this.page.reload();
  }
}