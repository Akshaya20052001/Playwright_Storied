import { Page, expect } from "@playwright/test";
import {
  Locators,
  familyLifeEventsTableCellSelector,
  familySpouseAndChildrenTableCellSelector,
  familyParentsAndSiblingsTableCellSelector,
  familyAllLifeEventsTableCellSelector,
} from "./personDetailPageLocators";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export class PersonDetailPage {
  private readonly page: Page;
  private readonly locators: ReturnType<typeof Locators>;

  constructor(page: Page) {
    this.page = page;
    this.locators = Locators(page);
  }

  async verifyHeaderNameIsVisible(personName: string) {
    const name = this.locators.personName;
    await expect(name).toBeVisible();
    await expect(name).toHaveText(personName);
  }

  async verifyHeaderBirthDetailsAreVisible(personBirthDate: string) {
    const birthDate = this.locators.birthDate;
    await expect(birthDate).toBeVisible();
    await expect(birthDate).toHaveText(personBirthDate);
  }

  async verifyHeaderDeathDetailsAreVisible(personDeathDate: string) {
    const deathdate = this.locators.deathdate;
    await expect(deathdate).toBeVisible();
    await expect(deathdate).toHaveText(personDeathDate);
  }

  async verifyUpdatedGenderIsDisplayedOnPersonTable() {
    await expect(this.locators.genderPersonInfoTable).toHaveText("F");
  }

  async verifyEmptyImagePlaceholderIsDisplayed(imageChoice: string) {
    switch (imageChoice) {
      case "profile":
        await expect(this.locators.emptyProfileImagePlaceholder).toBeVisible();
        break;
      case "background":
        await expect(this.locators.emptyBackgroundImagePlaceholder).toBeVisible();
        break;
      default:
        throw new Error(`Unsupported option: ${imageChoice}`);
    }
  }

  async clickExistingPhoto(imageChoice: string) {
    switch (imageChoice) {
      case "profile":
        await this.locators.existingProfilePhoto.click();
        break;
      case "background":
        await this.locators.existingBackgroundPhoto.click();
        break;
      default:
        throw new Error(`Unsupported option: ${imageChoice}`);
    }
  }
  async verifyAllDropdownsShouldBeVisibleForImage(imageChoice: string) {
    switch (imageChoice) {
      case "profile":
        const { viewProfilePhoto, resizeProfilePhoto, chooseNewProfilePhoto, removeProfilePhoto } = this.locators;
        await Promise.all([
          expect(viewProfilePhoto).toBeVisible(),
          expect(resizeProfilePhoto).toBeVisible(),
          expect(chooseNewProfilePhoto).toBeVisible(),
          expect(removeProfilePhoto).toBeVisible()
        ]);
        break;
      case "background":
        const { viewBackgroundPhoto, resizeBackgroundPhoto, chooseNewBackgroundPhoto, removeBackgroundPhoto } = this.locators;
        await Promise.all([
          expect(viewBackgroundPhoto).toBeVisible(),
          expect(resizeBackgroundPhoto).toBeVisible(),
          expect(chooseNewBackgroundPhoto).toBeVisible(),
          expect(removeBackgroundPhoto).toBeVisible()
        ]);
        break;
      default:
        throw new Error(`Unsupported option: ${imageChoice}`);
    }
  }

  async verifyPersonalInforSectionDetails(firstName: string, lastName: string, Gender: string) {
    const { personalInfoFirstNameTextElement, personalInfoLastNameTextElement, personalInfoGenderElement } = this.locators;
    await Promise.all([
      expect(personalInfoFirstNameTextElement).toBeVisible(),
      await expect(personalInfoFirstNameTextElement).toHaveText(firstName),
      expect(personalInfoLastNameTextElement).toBeVisible(),
      await expect(personalInfoLastNameTextElement).toHaveText(lastName),
      expect(personalInfoGenderElement).toBeVisible(),
      await expect(personalInfoGenderElement).toHaveText(Gender),
    ]);
  }

  async verifyEventsTableWithColumnIsVisible() {
    const { eventsTableEventColumn, eventsTableAgeColumn, eventsTableDateColumn, eventsTableLocationColumn, eventsTableRelationshipColumn } = this.locators;
    await Promise.all([
      await expect(eventsTableEventColumn).toHaveText("Events"),
      await expect(eventsTableAgeColumn).toHaveText("Age"),
      await expect(eventsTableDateColumn).toHaveText("Date"),
      await expect(eventsTableLocationColumn).toHaveText("Location"),
      await expect(eventsTableRelationshipColumn).toHaveText("Relationship"),
    ]);
  }

  async verifyFirstRowOnEventsTableIsVisibleAsBirth() {
    const { eventsTableFirstRowEventColumn } = this.locators;
    await Promise.all([
      expect(eventsTableFirstRowEventColumn).toBeVisible(),
      await expect(eventsTableFirstRowEventColumn).toHaveText("Birth"),
    ]);
  }

  async verifyParentNamesAreVsibleOnBirthRowEventsTable(personName: string, secondPersonName: string) {
    const { eventsTableFirstRowRelationshipColumn } = this.locators;
    await Promise.all([
      expect(eventsTableFirstRowRelationshipColumn).toBeVisible(),
      await expect(eventsTableFirstRowRelationshipColumn).toHaveText(
        personName + ", " + secondPersonName + " "
      ),
    ]);
  }

  async clickAddFamilyButtonElement() {
    await this.locators.addFamilyPlusIcon.click();
  }

  async editTheFirstAndMiddleNameOnPersonTable(updatedFirstName: string) {
    await this.locators.personInfoFirstAndMiddleNameInputBox.dblclick();
    await this.locators.givenNameInputTextBox.clear();
    await this.locators.givenNameInputTextBox.fill(updatedFirstName);
    await this.locators.givenNameInputTextBox.press("Enter");
  }

  async editTheLastNameOnPersonInfoTable(updatedLastName: string) {
    await this.locators.personInfoLastNameInputBox.dblclick();
    await this.locators.surNameInputTextBox.clear();
    await this.locators.surNameInputTextBox.fill(updatedLastName);
    await this.locators.surNameInputTextBox.press('Enter');
  }

  async editBirthDateInEventsTable(updatedBirthDate: string) {
    await this.locators.birthDateInputTextBoxEventsTable.dblclick();
    await this.locators.birthDateInputTextBox.clear();
    await this.locators.birthDateInputTextBox.fill(updatedBirthDate);
    await this.locators.birthDateInputTextBox.press("Enter");
  }

  async verifyTheUpdatedNameIsDisplayedOnPersonTable(updatedFirstName: string, updatedLastName: string) {
    await expect(this.locators.personalInfoFirstNameTextElement).toHaveText(updatedFirstName);
    await expect(this.locators.personalInfoLastNameTextElement).toHaveText(updatedLastName);
  }

  async editTheGenderOnPersonPage(gender: string) {
    switch (gender) {
      case "male":
        await this.locators.maleGenderDropdownOptionOnPersonPage.click();
        break;
      case "female":
        await this.locators.femaleGenderDropdownOptionOnPersonPage.click();
        break;
      case "others":
        await this.locators.otherGenderDropdownOptionOnPersonPage.click();
        break;
    }
  }

  async editTheGenderOnPersonInfoTable() {
    await this.locators.genderPersonInfoTable.dblclick();
    await this.editTheGenderOnPersonPage("female");
  }

  async verifyTheUpdatedGenderIsDisplayedOnPerson() {
    await expect(this.locators.genderPersonInfoTable).toHaveText("F");
  }

  async verifyTheUpdatedBirthDateIsDisplayedOnEventsTable(updatedBirthDate: string) {
    const actualUpdatedDateString = (await this.locators.birthDateInputTextBoxEventsTable.textContent());
    expect(actualUpdatedDateString).toBe(updatedBirthDate);
  }

  async editTheSpouseNameOnSpouseAndSiblingsTable(updatedFirstName: string, updatedLastName: string) {
    await this.locators.spouseNameInputTextBoxPersonPage.dblclick();
    await this.locators.spouseFirstNameInputBox.clear();
    await this.locators.spouseFirstNameInputBox.fill(updatedFirstName);
    await this.locators.spouseLastNameInputBox.clear();
    await this.locators.spouseLastNameInputBox.fill(updatedLastName);
    await this.locators.spouseLastNameInputBox.press("Enter");
  }

  async editTheChildNameOnSpouseAndSiblingsTable(updatedFirstName: string, updatedLastName: string) {
    await this.locators.childNameInputTextBoxPersonPage.dblclick();
    await this.locators.childFirstNameInputBox.clear();
    await this.locators.childFirstNameInputBox.fill(updatedFirstName);
    await this.locators.childLastNameInputBox.clear();
    await this.locators.childLastNameInputBox.fill(updatedLastName);
    await this.locators.childLastNameInputBox.press("Enter");
  }

  async verifyTheUpdatedChildNameIsDisplayedOnSpouseAndSiblingsTable(updatedFirstName: string, updatedLastName: string) {
    await expect(this.locators.childNameInputTextBoxPersonPage).toHaveText(updatedFirstName + " " + updatedLastName);
  }

  async editTheGenderBirthDateAndBirthPlaceForSpouse(gender: string, updatedBirthDate: string, updatedBirthPlace: string) {
    await this.locators.genderInputBoxForSpousePersonPage.dblclick();
    await this.editTheGenderOnPersonPage(gender);
    await this.locators.birthDateInputTextBoxForSpouseTable.dblclick();
    await this.locators.spouseBirthDateInputBox.clear();
    await this.locators.spouseBirthDateInputBox.fill(updatedBirthDate);
    await this.locators.spouseBirthDateInputBox.press("Enter");
    await this.locators.birthPlaceInputTextBoxForSpouseTable.dblclick();
    await this.locators.birthPlaceInputTextBox.clear();
    await this.locators.birthPlaceInputTextBox.fill(updatedBirthPlace);
    await this.locators.dropDownSelectorForUpdatedBirthPlace.click();
  }

  async verifyChildDetailsGotUpdated(updatedBirthDate: string, updatedBirthPlace: string) {
    await expect(this.locators.genderInputBoxForChildPersonPage).toHaveText("F");
    await expect(this.locators.birthDateInputTextBoxForChildTable).toHaveText(updatedBirthDate);
    await expect(this.locators.birthPlaceInputTextBoxForChildTable).toHaveText(updatedBirthPlace);
  }

  async editTheGenderBirthDateAndBirthPlaceForChild(gender: string, updatedBirthDate: string, updatedBirthPlace: string) {
    await this.locators.genderInputBoxForChildPersonPage.dblclick();
    await this.editTheGenderOnPersonPage(gender);
    await this.locators.birthDateInputTextBoxForChildTable.dblclick();
    await this.locators.childBirthDateInputBox.clear();
    await this.locators.childBirthDateInputBox.fill(updatedBirthDate);
    await this.locators.childBirthDateInputBox.press("Enter");
    await this.locators.birthPlaceInputTextBoxForChildTable.dblclick();
    await this.locators.birthPlaceInputTextBox.clear();
    await this.locators.birthPlaceInputTextBox.fill(updatedBirthPlace);
    await delay(1000);
    await this.locators.childBirthDateInputBox.press("Enter");
  }

  async editTheFatherNameOnFamilyTable(updatedFirstName: string, updatedLastName: string) {
    await this.locators.parentNameInputTextBoxPersonPage.dblclick();
    await this.locators.parentFirstNameInputBox.clear();
    await this.locators.parentFirstNameInputBox.fill(updatedFirstName);
    await this.locators.parentLastNameInputBox.clear();
    await this.locators.parentLastNameInputBox.fill(updatedLastName);
    await this.locators.parentLastNameInputBox.press("Enter");
  }

  async editTheGenderBirthDateAndBirthPlaceForFather(gender: string, updatedBirthDate: string, updatedBirthPlace: string) {
    await this.locators.genderInputBoxForFatherPersonPage.dblclick();
    await this.editTheGenderOnPersonPage(gender);
    await this.locators.birthDateInputTextBoxForFatherTable.dblclick();
    await this.locators.fatherBirthDateInputBox.clear();
    await this.locators.fatherBirthDateInputBox.fill(updatedBirthDate);
    await this.locators.fatherBirthDateInputBox.press("Enter");
    await this.locators.birthPlaceInputTextBoxForFatherTable.dblclick();
    await this.locators.birthPlaceInputTextBox.clear();
    await this.locators.birthPlaceInputTextBox.fill(updatedBirthPlace);
    await this.locators.birthPlaceInputTextBox.press("Enter");
  }

  async verifyFatherDetailsGotUpdated(updatedBirthDate: string, updatedBirthPlace: string) {
    await expect(this.locators.genderInputBoxForFatherPersonPage).toHaveText("O");
    await expect(this.locators.birthDateInputTextBoxForFatherTable).toHaveText(updatedBirthDate);
    await expect(this.locators.birthPlaceInputTextBoxForFatherTable).toHaveText(updatedBirthPlace);
  }

  async editDeathDetailsOfFather(updatedDeathDate: string, updatedDeathPlace: string) {
    await this.locators.deathDateInputTextBoxForFatherTable.dblclick();
    await this.locators.fatherDeathDateInputBox.clear();
    await this.locators.fatherDeathDateInputBox.fill(updatedDeathDate);
    await this.locators.fatherDeathDateInputBox.press("Enter");
    await this.locators.deathPlaceInputTextBoxForFatherTable.dblclick();
    await this.locators.birthPlaceInputTextBox.clear();
    await this.locators.birthPlaceInputTextBox.fill(updatedDeathPlace);
    await this.locators.birthPlaceInputTextBox.press("Enter");
  }

  async editTheSiblingNameOnFamilyTable(updatedFirstName: string, updatedLastName: string) {
    await this.locators.siblingNameInputTextBoxPersonPage.dblclick();
    await this.locators.siblingFirstNameInputBox.clear();
    await this.locators.siblingFirstNameInputBox.fill(updatedFirstName);
    await this.locators.siblingLastNameInputBox.clear();
    await this.locators.siblingLastNameInputBox.fill(updatedLastName);
    await this.locators.siblingLastNameInputBox.press("Enter");
  }

  async editTheGenderBirthDateAndBirthPlaceForSibling(gender: string, updatedBirthDate: string, updatedBirthPlace: string) {
    await this.locators.genderInputBoxForSiblingPersonPage.dblclick();
    await this.editTheGenderOnPersonPage(gender);
    await this.locators.birthDateInputTextBoxForSiblingTable.dblclick();
    await this.locators.siblingBirthDateInputBox.clear();
    await this.locators.siblingBirthDateInputBox.fill(updatedBirthDate);
    await this.locators.siblingBirthDateInputBox.press("Enter");
    await this.locators.birthPlaceInputTextBoxForSiblingTable.dblclick();
    await this.locators.birthPlaceInputTextBox.clear();
    await this.locators.birthPlaceInputTextBox.fill(updatedBirthPlace);
    await this.locators.birthPlaceInputTextBox.press("Enter");
  }

  async verifyTheUpdatedSiblingNameIsDisplayedOnFamilyTable(updatedFirstName: string, updatedLastName: string) {
    await expect(this.locators.siblingNameInputTextBoxPersonPage).toHaveText(updatedFirstName + " " + updatedLastName);
  }

  async verifySiblingDetailsGotUpdated(updatedBirthDate: string, updatedBirthPlace: string) {
    await expect(this.locators.genderInputBoxForSiblingPersonPage).toHaveText("F");
    await expect(this.locators.birthDateInputTextBoxForSiblingTable).toHaveText(updatedBirthDate);
    await expect(this.locators.birthPlaceInputTextBoxForSiblingTable).toHaveText(updatedBirthPlace);
  }

  async editDeathDetailsOfSibling(updatedDeathDate: string, updatedDeathPlace: string) {
    await this.locators.deathDateInputTextBoxForSiblingTable.dblclick();
    await this.locators.siblingDeathDateInputBox.clear();
    await this.locators.siblingDeathDateInputBox.fill(updatedDeathDate);
    await this.locators.siblingDeathDateInputBox.press("Enter");
    await this.locators.deathPlaceInputTextBoxForSiblingTable.dblclick();
    await this.locators.birthPlaceInputTextBox.clear();
    await this.locators.birthPlaceInputTextBox.fill(updatedDeathPlace);
    await this.locators.birthPlaceInputTextBox.press("Enter");
  }

  async verifyTheUpdatedDeathDetailsOfSibling(updatedDeathDate: string, updatedDeathPlace: string) {
    await expect(this.locators.deathDateInputTextBoxForSiblingTable).toHaveText(updatedDeathDate);
    await expect(this.locators.deathPlaceInputTextBoxForSiblingTable).toHaveText(updatedDeathPlace);
  }

  async verifyTheUpdatedDeathDetailsOfFather(updatedDeathDate: string, updatedDeathPlace: string) {
    await expect(this.locators.deathDateInputTextBoxForFatherTable).toHaveText(updatedDeathDate);
    await expect(this.locators.deathPlaceInputTextBoxForFatherTable).toHaveText(updatedDeathPlace);
  }

  async verifyTheUpdatedFatherNameIsDisplayedOnFamilyTable(updatedFirstName: string, updatedLastName: string) {
    await expect(this.locators.parentNameInputTextBoxPersonPage).toHaveText(updatedFirstName + " " + updatedLastName);
  }

  async verifyTheUpdatedSpouseNameIsDisplayedOnSpouseAndSiblingsTable(updatedFirstName: string, updatedLastName: string) {
    const expectedUpdatedSpouseName = updatedFirstName + " " + updatedLastName;
    await expect(this.locators.spouseNameInputTextBoxPersonPage).toHaveText(expectedUpdatedSpouseName);
  }

  async editDeathDetailsOfSpouse(updatedDeathDate: string, updatedDeathPlace: string) {
    await this.locators.deathDateInputTextBoxForSpouseTable.dblclick();
    await this.locators.spouseDeathDateInputBox.clear();
    await this.locators.spouseDeathDateInputBox.fill(updatedDeathDate);
    await this.locators.spouseDeathDateInputBox.press("Enter");
    await this.locators.deathPlaceInputTextBoxForSpouseTable.dblclick();
    await this.locators.birthPlaceInputTextBox.clear();
    await this.locators.birthPlaceInputTextBox.fill(updatedDeathPlace);
    await this.locators.birthPlaceInputTextBox.press("Enter");
  }

  async verifyTheUpdatedDeathDetailsOfSpouse(updatedDeathDate: string, updatedDeathPlace: string) {
    await expect(this.locators.deathDateInputTextBoxForSpouseTable).toHaveText(updatedDeathDate);
    await expect(this.locators.deathPlaceInputTextBoxForSpouseTable).toHaveText(updatedDeathPlace);
  }

  async editDeathDetailsOfChild(updatedDeathDate: string, updatedDeathPlace: string) {
    await this.locators.deathDateInputTextBoxForChildTable.dblclick();
    await this.locators.childDeathDateInputBox.clear();
    await this.locators.childDeathDateInputBox.fill(updatedDeathDate);
    await this.locators.childDeathDateInputBox.press("Enter");
    await this.locators.deathPlaceInputTextBoxForChildTable.dblclick();
    await this.locators.birthPlaceInputTextBox.clear();
    await this.locators.birthPlaceInputTextBox.fill(updatedDeathPlace);
    await this.locators.birthPlaceInputTextBox.press("Enter");
  }

  async verifyTheUpdatedDeathDetailsOfChild(updatedDeathDate: string, updatedDeathPlace: string) {
    await expect(this.locators.deathDateInputTextBoxForChildTable).toHaveText(updatedDeathDate);
    await expect(this.locators.deathPlaceInputTextBoxForChildTable).toHaveText(updatedDeathPlace);
  }

  async verifyTheUpdatedNameIsDisplayedOnSpouseTable(updatedFirstName: string, updatedLastName: string) {
    await expect(this.locators.homePersonNameInputTextBoxInSpouseTable).toHaveText(updatedFirstName + " " + updatedLastName);
  }

  async editBirthLocationInEventsTable(updatedBirthPlace: string) {
    await this.locators.birthPlaceInputTextBoxEventsTable.dblclick();
    await this.locators.birthPlaceInputTextBox.clear();
    await this.locators.birthPlaceInputTextBox.fill(updatedBirthPlace);
    await this.locators.birthPlaceInputTextBox.press("Enter");
  }

  async editTheBirthdateAndLocationInAllLifeEvents(updatedBirthDate: string, updatedBirthPlace: string) {
    await this.locators.birthDateInputTextBoxForAllLifeEventsTable.scrollIntoViewIfNeeded();
    await this.locators.birthDateInputTextBoxForAllLifeEventsTable.dblclick();
    await this.locators.birthDateInputTextBox.clear();
    await this.locators.birthDateInputTextBox.fill(updatedBirthDate);
    await this.locators.birthDateInputTextBox.press("Enter");
    await this.locators.birthPlaceInputTextBoxForAllLifeEventsTable.dblclick();
    await this.locators.birthPlaceInputTextBox.clear();
    await this.locators.birthPlaceInputTextBox.fill(updatedBirthPlace);
    await this.locators.birthPlaceInputTextBox.press("Enter");
  }

  async verifyTheBirthdateAndLocationInAllLifeEvents(updatedBirthDate: string, updatedBirthPlace: string) {
    await expect(this.locators.birthDateInputTextBoxForAllLifeEventsTable).toHaveText(updatedBirthDate);
    await expect(this.locators.birthPlaceInputTextBoxForAllLifeEventsTable).toHaveText(updatedBirthPlace);
  }

  async addMarraigeLifeEvent(marriageDate: string, marriagePlace: string) {
    await this.locators.addLifeEventPlusIcon.click();
    await this.locators.searchEventsInputForAllLifeEventsTable.fill("Marriage");
    await this.locators.marriageEventDropdownOption.click();
    await this.locators.marriageDateInputBox.fill(marriageDate);
    await this.locators.marriageLocationInputBox.click();
    await this.locators.marriageLocationInputBox.fill(marriagePlace);
    await this.locators.marriageLocationInputBox.press("Enter");
    await this.locators.saveButtonForMarriageEvents.click();
  }

  async editTheMarriageDateAndLocationInAllLifeEvents(updatedMarriageDate: string, updatedMarriagePlace: string) {
    await this.locators.marriageDateInputBoxForAllLifeEventsTable.dblclick();
    await this.locators.marriageDateInputBoxForLifeEventsTable.clear();
    await this.locators.marriageDateInputBoxForLifeEventsTable.fill(updatedMarriageDate);
    await this.locators.marriageDateInputBoxForLifeEventsTable.press("Enter");
    await this.locators.marriageLocationInputBoxForAllLifeEventsTable.dblclick();
    await this.locators.marriageLocationInputBoxForLifeEventsTable.clear();
    await this.locators.marriageLocationInputBoxForLifeEventsTable.fill(updatedMarriagePlace);
    await this.locators.marriageLocationInputBoxForLifeEventsTable.press("Enter");
  }

  async verifyTheMarriageDateAndLocationInAllLifeEvents(updatedMarriageDate: string, updatedMarriagePlace: string) {
    await expect(this.locators.marriageDateInputBoxForAllLifeEventsTable).toHaveText(updatedMarriageDate);
    await expect(this.locators.marriageLocationInputBoxForAllLifeEventsTable).toHaveText(updatedMarriagePlace);
  }

  async verifyUpdatedBirthLocationInEventsTable(birthPlace: string) {
    await expect(this.locators.birthPlaceInputTextBoxEventsTable).toHaveText(birthPlace);
  }

  async addDeathLifeEvent(deathDate: Date, deathPlace: string) {
    await this.locators.addLifeEventPlusIcon.click();
    await this.locators.searchEventsInputForAllLifeEventsTable.fill("Death");
    await this.locators.deathEventDropdownOption.click();
    await delay(2000);
    const deathDateString = deathDate.toISOString();
    await this.locators.deathDateInputBoxInLifeEventsTable.click();
    await this.locators.deathDateInputBoxInLifeEventsTable.fill(deathDateString);
    await this.locators.deathLocationInputBox.click();
    await this.locators.deathLocationInputBoxInLifeEventsTable.fill(deathPlace);
    await this.locators.deathLocationInputBox.press("Enter");
    await this.locators.saveButtonForDeathEvents.click();
  }

  async editTheDeathDateAndLocationInAllLifeEvents(deathDate: string, deathPlace: string) {
    await delay(2000);
    await this.locators.deathDateForAllLifeEventsTable.dblclick();
    await this.locators.deathDateInputBoxForAllLifeEventsTable.clear();
    await this.locators.deathDateInputBoxForAllLifeEventsTable.fill(deathDate);
    await this.locators.deathDateInputBoxForAllLifeEventsTable.press("Enter");
    await this.locators.deathPlaceInputBoxForAllLifeEventsTable.dblclick();
    await this.locators.deathPlaceInputBoxForLifeEventsTable.clear();
    await this.locators.deathPlaceInputBoxForLifeEventsTable.fill(deathPlace);
    await this.locators.deathPlaceInputBoxForLifeEventsTable.press("Enter");
  }

  async verifyTheDeathDateAndLocationInAllLifeEvents(deathDate: string, deathPlace: string) {
    await expect(this.locators.deathDateForAllLifeEventsTable).toHaveText(deathDate);
    await expect(this.locators.deathPlaceInputBoxForAllLifeEventsTable).toHaveText(deathPlace);
  }

  async verifyPersonInfoTableIsVisible() {
    await expect(this.locators.personInfoTable).toBeVisible();
  }

  async verifySpouseDetailsGotUpdated(updatedBirthDate: string, updatedBirthPlace: string) {
    await expect(this.locators.genderInputBoxForSpousePersonPage).toHaveText("O");
    await expect(this.locators.birthDateInputTextBoxForSpouseTable).toHaveText(updatedBirthDate);
    await expect(this.locators.birthPlaceInputTextBoxForSpouseTable).toHaveText(updatedBirthPlace);
  }

  async verifyFamilyDropdownForPersonHavingNoParents() {
    const { addFamilyAddParentOption, addFamilyAddSpouseOption, addFamilyAddChildOption, addFamilyAddSiblingOption } = this.locators;
    await Promise.all([
      expect(addFamilyAddParentOption).toBeVisible(),
      expect(addFamilyAddSpouseOption).toBeVisible(),
      expect(addFamilyAddChildOption).toBeVisible(),
      expect(addFamilyAddSiblingOption).not.toBeVisible()
    ]);
  }

  async verifyFamilyDropdownForPersonHavingSingleParent() {
    const { addFamilyAddParentOption, addFamilyAddSpouseOption, addFamilyAddChildOption, addFamilyAddSiblingOption } = this.locators;
    await Promise.all([
      expect(addFamilyAddParentOption).toBeVisible(),
      expect(addFamilyAddSpouseOption).toBeVisible(),
      expect(addFamilyAddChildOption).toBeVisible(),
      expect(addFamilyAddSiblingOption).toBeVisible()
    ]);
  }

  async verifyFamilyDropdownForPersonHavingBothParents() {
    const { addFamilyAddParentOption, addFamilyAddSpouseOption, addFamilyAddChildOption, addFamilyAddSiblingOption } = this.locators;
    await Promise.all([
      expect(addFamilyAddSpouseOption).toBeVisible(),
      expect(addFamilyAddChildOption).toBeVisible(),
      expect(addFamilyAddSiblingOption).toBeVisible(),
      expect(addFamilyAddParentOption).not.toBeVisible()
    ]);
  }

  async verifyFamilyTableDetails(selectorFunction: any, expectedTableDetails: string[][]) {
    for (let tableRow = 0; tableRow < expectedTableDetails.length; tableRow++) {
      for (let tableCell = 0; tableCell < expectedTableDetails[tableRow].length; tableCell++) {
        const familyTableCellElement = selectorFunction(this.page, tableRow.toString(), tableCell.toString());
        await expect(familyTableCellElement).toHaveText(expectedTableDetails[tableRow][tableCell]);
      }
    }
  }

  async verifyPersonEventDetailsInEventsTable(expectedEventTableDetails: string[][]) {
    await this.verifyFamilyTableDetails(familyLifeEventsTableCellSelector, expectedEventTableDetails);
  }

  async verifySpouseAndChildrenDetailsInFamilyTable(expectedSpouseAndChildrenTableDetails: string[][]) {
    await this.verifyFamilyTableDetails(familySpouseAndChildrenTableCellSelector, expectedSpouseAndChildrenTableDetails);
  }

  async verifyParentsAndSiblingsDetailsInFamilyTable(expectedParentsAndSiblingsTableDetails: string[][]) {
    await this.verifyFamilyTableDetails(familyParentsAndSiblingsTableCellSelector, expectedParentsAndSiblingsTableDetails);
  }

  async verifyEventDetailsInAllLifeEventsTable(expectedAllLifeEventTableDetails: string[][]) {
    await this.verifyFamilyTableDetails(familyAllLifeEventsTableCellSelector, expectedAllLifeEventTableDetails);
  }

  async verifySpousesAndChildrenTableWithColumnIsVisible() {
    const {
      spouseAndChildrenTableNameColumn,
      spouseAndChildrenTableGenderColumn,
      spouseAndChildrenTableBirthColumn,
      spouseAndChildrenTableBirthplaceColumn,
      spouseAndChildrenTableDeathDateColumn,
      spouseAndChildrenTableDeathPlaceColumn,
      spouseAndChildrenTableMarriageColumn,
      spouseAndChildrenTableSpouseColumn

    } = this.locators;
    await Promise.all([
      await expect(spouseAndChildrenTableNameColumn).toHaveText("Spouse & Children"),
      await expect(spouseAndChildrenTableGenderColumn).toHaveText("Gender"),
      await expect(spouseAndChildrenTableBirthColumn).toHaveText("Birthdate"),
      await expect(spouseAndChildrenTableBirthplaceColumn).toHaveText("Birthplace"),
      await expect(spouseAndChildrenTableDeathDateColumn).toHaveText("Death Date"),
      await expect(spouseAndChildrenTableDeathPlaceColumn).toHaveText("Death Place"),
      await expect(spouseAndChildrenTableMarriageColumn).toHaveText("Marriage"),
      await expect(spouseAndChildrenTableSpouseColumn).toHaveText("Spouse"),
    ]);
  }

  async verifyParentsAndSiblingsTableWithColumnIsVisible() {
    const {
      parentsAndSiblingsTableNameColumn,
      parentsAndSiblingsTableGenderColumn,
      parentsAndSiblingsTableBirthColumn,
      parentsAndSiblingsTableBirthplaceColumn,
      parentsAndSiblingsTableDeathDateColumn,
      parentsAndSiblingsTableDeathPlaceColumn,
      parentsAndSiblingsTableMarriageColumn,
      parentsAndSiblingsTableSpouseColumn

    } = this.locators;
    await Promise.all([
      await expect(parentsAndSiblingsTableNameColumn).toHaveText("Parents & Siblings"),
      await expect(parentsAndSiblingsTableGenderColumn).toHaveText("Gender"),
      await expect(parentsAndSiblingsTableBirthColumn).toHaveText("Birthdate"),
      await expect(parentsAndSiblingsTableBirthplaceColumn).toHaveText("Birthplace"),
      await expect(parentsAndSiblingsTableDeathDateColumn).toHaveText("Death Date"),
      await expect(parentsAndSiblingsTableDeathPlaceColumn).toHaveText("Death Place"),
      await expect(parentsAndSiblingsTableMarriageColumn).toHaveText("Marriage"),
      await expect(parentsAndSiblingsTableSpouseColumn).toHaveText("Spouse"),
    ]);
  }

  async verifyAllLifeEventsTableWithColumnIsVisible() {
    const {
      lifeEventsTableAgeColumn,
      lifeEventsTableTypeColumn,
      lifeEventsTableDateColumn,
      lifeEventsTableLocationColumn,
      lifeEventsTableDescriptionColumn

    } = this.locators;
    await Promise.all([
      await expect(lifeEventsTableAgeColumn).toHaveText("Age"),
      await expect(lifeEventsTableTypeColumn).toHaveText("Type"),
      await expect(lifeEventsTableDateColumn).toHaveText("Date"),
      await expect(lifeEventsTableLocationColumn).toHaveText("Location"),
      await expect(lifeEventsTableDescriptionColumn).toHaveText("Description"),
    ]);
  }
  async clickAllLifeEventPlusIcon() {
    await this.locators.addLifeEventPlusIcon.click();
  }

  async enterAndSelectAddMarriageEventOption() {
    await this.locators.searchInput.fill("Marriage");
    await this.locators.selectDropdownOption.click();
  }

  async clickSpouseDropdownSectionOntheModal() {
    await this.locators.spouseDropdownOptionOnModal.click();
  }

  async VerifyAllSpouseOptionsAreVisible(spouseDropdownList: string[]) {
    const dropdownOptions = await this.locators.spouseDropdowns.innerText();
    const filteredDropdownOptionsArray = dropdownOptions.split('\n').filter(option => option.trim() !== '');
    const sortedDropdownOptions = filteredDropdownOptionsArray.sort();
    const sortedSpouseDropdownList = spouseDropdownList.sort();
    await expect(sortedDropdownOptions).toStrictEqual(sortedSpouseDropdownList);
  }

  async verifyOnHintsTabOnPersonPage() {
    const {
      hintsTabElement,
      hintsTabHintsTitleElement,
      hintsTabSavedTitleElement,
      hintsTabDiscardedTitleElement,
    } = this.locators;

    await Promise.all([
      expect(hintsTabElement).toBeVisible(),
      expect(hintsTabHintsTitleElement).toBeVisible(),
      expect(hintsTabSavedTitleElement).toBeVisible(),
      expect(hintsTabDiscardedTitleElement).toBeVisible()
    ]).catch(error => {
      throw new Error(`Error verifying hints tab: ${error}`);
    });
  }

  async VerifyHintsAreDisplayed(hints: string) {
    const {
      familySearchHintTitle,
      familySearchCollectionTitle,
      Census1940HintTitle,
      Census1940CollectionTitle,
      USSecurityDeathIndexHintTitle,
      USSecurityDeathIndexCollectionTitle,
    } = this.locators;

    switch (hints) {
      case "FamilySearch":
        await Promise.all([
          await expect(familySearchHintTitle).toBeVisible(),
          await expect(familySearchCollectionTitle).toBeVisible(),
        ]);
        break;

      case "1940":
        await Promise.all([
          await expect(Census1940HintTitle).toBeVisible(),
          await expect(Census1940CollectionTitle).toBeVisible(),
        ]);
        break;

      case "US social security":
        await Promise.all([
          await expect(USSecurityDeathIndexHintTitle).toBeVisible(),
          await expect(USSecurityDeathIndexCollectionTitle).toBeVisible(),
        ]);
        break;

      default:
        throw new Error(`Unsupported option: ${hints}`);
    }
  }
}