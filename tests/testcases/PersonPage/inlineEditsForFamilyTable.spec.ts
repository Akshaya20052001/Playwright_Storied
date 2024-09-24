import { test } from "@utilities/TestFixtures";
import { appDataDefaultCredentials } from "@data/TestDataCredentials";
import { getBaseUrl } from "@utilities/config";
import { HomePersonDetails, FatherDetails, editPersonDetails, spouseDetails, personDeathDate, editDeathDetails, ChildDetails, SiblingDetails } from "@data/MockData";

test.beforeEach(
  async (
    {
      accessPage,
      loggedOutHomePage,
      loginPage,
      homePage,
      settingsPage,
      pedigreePage,
    },
    testInfo
  ) => {
    // Extend the timeout for all tests running this hook by 30 seconds.
    testInfo.setTimeout(testInfo.timeout + 60000);
    await accessPage.goto(getBaseUrl());
    await loggedOutHomePage.clickSignInButtonLohp();
    await loginPage.login(
      appDataDefaultCredentials.Email,
      appDataDefaultCredentials.Password
    );
    await homePage.verifyOnHomepage();
    await homePage.clickOnNavAvatar();
    await homePage.clickSettingsButton();
    await settingsPage.verifyOnSettingsPage();
    await settingsPage.clickOnTreesSection();
    await settingsPage.clickStartATreeButton();
    await settingsPage.selectStartANewTreeOption();
    await pedigreePage.setPersonName(HomePersonDetails.HomePersonFirstName, HomePersonDetails.HomePersonLastName);
    await pedigreePage.setGenderInPersonDetails("male");
    await pedigreePage.clickNextButtonHomePersonDetails();
    await pedigreePage.verifyTreeProgressDrawerVisible();
    await pedigreePage.clickOnResidenceCheckBox();
    await pedigreePage.setPersonDetails(HomePersonDetails.Region, HomePersonDetails.HomePersonBirthDate, HomePersonDetails.BirthPlace);
    await pedigreePage.clickSaveDetailsButton();
  }
);

test(`@Regression Verify User able to change the Name of the Spouse on Spouse& Children Table in Person Page`,
  async ({ personDetailPage, pedigreePage }) => {
    await pedigreePage.clickHomePersonNode();
    await pedigreePage.verifyQuickViewModalIsVisible();
    await pedigreePage.clickQuickViewModalOption("Add Family");
    await pedigreePage.addSpouseToHomePerson();
    await pedigreePage.setPersonName(spouseDetails.SpouseFirstName, spouseDetails.SpouseLastName);
    await pedigreePage.setPersonDetails(spouseDetails.Region, spouseDetails.SpouseBirthDate, spouseDetails.BirthPlace);
    await pedigreePage.clickAddPersonButton();
    await pedigreePage.clickHomePersonNode();
    await pedigreePage.verifyQuickViewModalIsVisible();
    await pedigreePage.clickQuickViewModalOption("View Profile");
    await personDetailPage.verifyPersonInfoTableIsVisible();
    await personDetailPage.editTheSpouseNameOnSpouseAndSiblingsTable(editPersonDetails.updatedFirstName, editPersonDetails.updatedLastName);
    await personDetailPage.verifyTheUpdatedSpouseNameIsDisplayedOnSpouseAndSiblingsTable(editPersonDetails.updatedFirstName, editPersonDetails.updatedLastName);
  });

test(`@Regression Verify user is able to edit the gender, Birthdate & Birthplace of the Spouse on Spouse& Children Table in Person Page`,
  async ({ personDetailPage, pedigreePage }) => {
    await pedigreePage.clickHomePersonNode();
    await pedigreePage.verifyQuickViewModalIsVisible();
    await pedigreePage.clickQuickViewModalOption("Add Family");
    await pedigreePage.addSpouseToHomePerson();
    await pedigreePage.setPersonName(spouseDetails.SpouseFirstName, spouseDetails.SpouseLastName);
    await pedigreePage.setGenderInPersonDetails("male");
    await pedigreePage.setPersonDetails(spouseDetails.Region, spouseDetails.SpouseBirthDate, spouseDetails.BirthPlace);
    await pedigreePage.clickAddPersonButton();
    await pedigreePage.clickHomePersonNode();
    await pedigreePage.verifyQuickViewModalIsVisible();
    await pedigreePage.clickQuickViewModalOption("View Profile");
    await personDetailPage.verifyPersonInfoTableIsVisible();
    await personDetailPage.editTheGenderBirthDateAndBirthPlaceForSpouse("others",editPersonDetails.updatedBirthDate, editPersonDetails.BirthPlace);
    await personDetailPage.verifySpouseDetailsGotUpdated(editPersonDetails.updatedBirthDate, editPersonDetails.BirthPlace);
  });

test(`@Regression Verify user is able to edit the death date & death place of the Spouse on Spouse& Children Table in Person Page`,
  async ({ personDetailPage, pedigreePage }) => {
    await pedigreePage.clickHomePersonNode();
    await pedigreePage.verifyQuickViewModalIsVisible();
    await pedigreePage.clickQuickViewModalOption("Add Family");
    await pedigreePage.addSpouseToHomePerson();
    await pedigreePage.setPersonName(spouseDetails.SpouseFirstName, spouseDetails.SpouseLastName);
    await pedigreePage.setPersonDetails(spouseDetails.Region, spouseDetails.SpouseBirthDate, spouseDetails.BirthPlace);
    await pedigreePage.uncheckThisPersonIsLivingCheckbox();
    await pedigreePage.setDeathDetails(personDeathDate.deathDate, personDeathDate.deathPlace);
    await pedigreePage.clickAddPersonButton();
    await pedigreePage.clickHomePersonNode();
    await pedigreePage.verifyQuickViewModalIsVisible();
    await pedigreePage.clickQuickViewModalOption("View Profile");
    await personDetailPage.verifyPersonInfoTableIsVisible();
    await personDetailPage.editDeathDetailsOfSpouse(editDeathDetails.updatedDeathDate, editDeathDetails.updatedDeathPlace);
    await personDetailPage.verifyTheUpdatedDeathDetailsOfSpouse(editDeathDetails.updatedDeathDate, editDeathDetails.updatedDeathPlace);
  });

test(`@Regression Verify when user changes the home person name the updated name should be visible on the spouse column in Spouse & children Table.`,
  async ({ personDetailPage, pedigreePage }) => {
    await pedigreePage.clickHomePersonNode();
    await pedigreePage.verifyQuickViewModalIsVisible();
    await pedigreePage.clickQuickViewModalOption("Add Family");
    await pedigreePage.addSpouseToHomePerson();
    await pedigreePage.setPersonName(spouseDetails.SpouseFirstName, spouseDetails.SpouseLastName);
    await pedigreePage.setPersonDetails(spouseDetails.Region, spouseDetails.SpouseBirthDate, spouseDetails.BirthPlace);
    await pedigreePage.clickAddPersonButton();
    await pedigreePage.clickHomePersonNode();
    await pedigreePage.verifyQuickViewModalIsVisible();
    await pedigreePage.clickQuickViewModalOption("View Profile");
    await personDetailPage.verifyPersonInfoTableIsVisible();
    await personDetailPage.editTheFirstAndMiddleNameOnPersonTable(editPersonDetails.updatedFirstName);
    await personDetailPage.editTheLastNameOnPersonInfoTable(editPersonDetails.updatedLastName);
    await personDetailPage.verifyTheUpdatedNameIsDisplayedOnSpouseTable(editPersonDetails.updatedFirstName, editPersonDetails.updatedLastName);
  });

test(`@Regression Verify User able to change the Name of the Child on Spouse& Children Table in Person Page`,
  async ({ personDetailPage, pedigreePage }) => {
    await pedigreePage.clickHomePersonNode();
    await pedigreePage.verifyQuickViewModalIsVisible();
    await pedigreePage.clickQuickViewModalOption("Add Family");
    await pedigreePage.addChildToHomePerson();
    await pedigreePage.setPersonName(ChildDetails.ChildFirstName, ChildDetails.ChildLastName);
    await pedigreePage.setGenderInPersonDetails("male");
    await pedigreePage.setPersonDetails(ChildDetails.Region, ChildDetails.ChildBirthDate, ChildDetails.BirthPlace);
    await pedigreePage.clickAddPersonButton();
    await pedigreePage.clickHomePersonNode();
    await pedigreePage.verifyQuickViewModalIsVisible();
    await pedigreePage.clickQuickViewModalOption("View Profile");
    await personDetailPage.verifyPersonInfoTableIsVisible();
    await personDetailPage.editTheChildNameOnSpouseAndSiblingsTable(editPersonDetails.updatedFirstName, editPersonDetails.updatedLastName);
    await personDetailPage.verifyTheUpdatedChildNameIsDisplayedOnSpouseAndSiblingsTable(editPersonDetails.updatedFirstName, editPersonDetails.updatedLastName);
  });

test(`@Regression Verify user is able to edit the gender, Birthdate & Birthplace of the Child on Spouse& Children Table in Person Page`,
  async ({ personDetailPage, pedigreePage }) => {
    await pedigreePage.clickHomePersonNode();
    await pedigreePage.verifyQuickViewModalIsVisible();
    await pedigreePage.clickQuickViewModalOption("Add Family");
    await pedigreePage.addChildToHomePerson();
    await pedigreePage.setPersonName(ChildDetails.ChildFirstName, ChildDetails.ChildLastName);
    await pedigreePage.setGenderInPersonDetails("male");
    await pedigreePage.clickAddPersonButton();
    await pedigreePage.clickHomePersonNode();
    await pedigreePage.verifyQuickViewModalIsVisible();
    await pedigreePage.clickQuickViewModalOption("View Profile");
    await personDetailPage.verifyPersonInfoTableIsVisible();
    await personDetailPage.editTheChildNameOnSpouseAndSiblingsTable(editPersonDetails.updatedFirstName, editPersonDetails.updatedLastName);
    await personDetailPage.verifyTheUpdatedChildNameIsDisplayedOnSpouseAndSiblingsTable(editPersonDetails.updatedFirstName, editPersonDetails.updatedLastName);
  });

  test(`@Regression Verify user is able to edit the death date & death place of the Child on Spouse& Children Table in Person Page`,
  async ({ personDetailPage, pedigreePage }) => {
    await pedigreePage.clickHomePersonNode();
    await pedigreePage.verifyQuickViewModalIsVisible();
    await pedigreePage.clickQuickViewModalOption("Add Family");
    await pedigreePage.addChildToHomePerson();
    await pedigreePage.setPersonName(ChildDetails.ChildFirstName, ChildDetails.ChildLastName);
    await pedigreePage.uncheckThisPersonIsLivingCheckbox();
    await pedigreePage.setDeathDetails(personDeathDate.deathDate, personDeathDate.deathPlace);
    await pedigreePage.clickAddPersonButton();
    await pedigreePage.clickHomePersonNode();
    await pedigreePage.verifyQuickViewModalIsVisible();
    await pedigreePage.clickQuickViewModalOption("View Profile");
    await personDetailPage.verifyPersonInfoTableIsVisible();
    await personDetailPage.editDeathDetailsOfChild(editDeathDetails.updatedDeathDate, editDeathDetails.updatedDeathPlace);
    await personDetailPage.verifyTheUpdatedDeathDetailsOfChild(editDeathDetails.updatedDeathDate, editDeathDetails.updatedDeathPlace);
  });

  test(`@Regression Verify User able to edit the name of the Parents on Family Table in person page.`,
  async ({ personDetailPage, pedigreePage }) => {
    await pedigreePage.clickHomePersonNode();
    await pedigreePage.verifyQuickViewModalIsVisible();
    await pedigreePage.clickQuickViewModalOption("Add Family");
    await pedigreePage.addParentsToHomePerson();
    await pedigreePage.setPersonName(FatherDetails.FatherFirstName, FatherDetails.FatherLastName);
    await pedigreePage.setGenderInPersonDetails("male");
    await pedigreePage.clickAddPersonButton();
    await pedigreePage.clickHomePersonNode();
    await pedigreePage.verifyQuickViewModalIsVisible();
    await pedigreePage.clickQuickViewModalOption("View Profile");
    await personDetailPage.verifyPersonInfoTableIsVisible();
    await personDetailPage.editTheFatherNameOnFamilyTable(editPersonDetails.updatedFirstName, editPersonDetails.updatedLastName);
    await personDetailPage.verifyTheUpdatedFatherNameIsDisplayedOnFamilyTable(editPersonDetails.updatedFirstName, editPersonDetails.updatedLastName);
  });
  test(`@Regression Verify user is able to edit the gender, Birthdate & Birthplace of the Parents on Family Table in Person Page`,
  async ({ personDetailPage, pedigreePage }) => {
    await pedigreePage.clickHomePersonNode();
    await pedigreePage.verifyQuickViewModalIsVisible();
    await pedigreePage.clickQuickViewModalOption("Add Family");
    await pedigreePage.addParentsToHomePerson();
    await pedigreePage.setPersonName(FatherDetails.FatherFirstName, FatherDetails.FatherLastName);
    await pedigreePage.setGenderInPersonDetails("male");
    await pedigreePage.setPersonDetails(HomePersonDetails.Region, FatherDetails.FatherBirthDate, HomePersonDetails.BirthPlace);
    await pedigreePage.clickAddPersonButton();
    await pedigreePage.clickHomePersonNode();
    await pedigreePage.verifyQuickViewModalIsVisible();
    await pedigreePage.clickQuickViewModalOption("View Profile");
    await personDetailPage.verifyPersonInfoTableIsVisible();
    await personDetailPage.editTheGenderBirthDateAndBirthPlaceForFather("others", editPersonDetails.updatedBirthDate, editPersonDetails.BirthPlace);
    await personDetailPage.verifyFatherDetailsGotUpdated(editPersonDetails.updatedBirthDate, editPersonDetails.BirthPlace);
  });

  test(`@Regression Verify user is able to edit the death date & death place of the Parents on Family Table in Person Page`,
  async ({ personDetailPage, pedigreePage }) => {
    await pedigreePage.clickHomePersonNode();
    await pedigreePage.verifyQuickViewModalIsVisible();
    await pedigreePage.clickQuickViewModalOption("Add Family");
    await pedigreePage.addParentsToHomePerson();
    await pedigreePage.setPersonName(FatherDetails.FatherFirstName, FatherDetails.FatherLastName);
    await pedigreePage.uncheckThisPersonIsLivingCheckbox();
    await pedigreePage.setDeathDetails(personDeathDate.deathDate, personDeathDate.deathPlace);
    await pedigreePage.clickAddPersonButton();
    await pedigreePage.clickHomePersonNode();
    await pedigreePage.verifyQuickViewModalIsVisible();
    await pedigreePage.clickQuickViewModalOption("View Profile");
    await personDetailPage.verifyPersonInfoTableIsVisible();
    await personDetailPage.editDeathDetailsOfFather(editDeathDetails.updatedDeathDate, editDeathDetails.updatedDeathPlace);
    await personDetailPage.verifyTheUpdatedDeathDetailsOfFather(editDeathDetails.updatedDeathDate, editDeathDetails.updatedDeathPlace);
  });

  test(`@Regression Verify User able to edit the name of the Siblings on Family Table in person page.`,
  async ({ personDetailPage, pedigreePage }) => {
    await pedigreePage.clickHomePersonNode();
    await pedigreePage.verifyQuickViewModalIsVisible();
    await pedigreePage.clickQuickViewModalOption("Add Family");
    await pedigreePage.addParentsToHomePerson();
    await pedigreePage.setPersonName(FatherDetails.FatherFirstName, FatherDetails.FatherLastName);
    await pedigreePage.setGenderInPersonDetails("male");
    await pedigreePage.clickAddPersonButton();
    await pedigreePage.clickHomePersonNode();
    await pedigreePage.verifyQuickViewModalIsVisible();
    await pedigreePage.clickQuickViewModalOption("Add Family");
    await pedigreePage.addSiblingsToHomePerson();
    await pedigreePage.setPersonName(SiblingDetails.SiblingFirstName, SiblingDetails.SiblingLastName);
    await pedigreePage.setGenderInPersonDetails("male");
    await pedigreePage.clickAddPersonButton();
    await pedigreePage.clickHomePersonNode();
    await pedigreePage.verifyQuickViewModalIsVisible();
    await pedigreePage.clickQuickViewModalOption("View Profile");
    await personDetailPage.verifyPersonInfoTableIsVisible();
    await personDetailPage.editTheSiblingNameOnFamilyTable(editPersonDetails.updatedFirstName, editPersonDetails.updatedLastName);
    await personDetailPage.verifyTheUpdatedSiblingNameIsDisplayedOnFamilyTable(editPersonDetails.updatedFirstName, editPersonDetails.updatedLastName);
  });
  test(`@Regression Verify user is able to edit the gender, Birthdate & Birthplace of the Siblings on Family Table in Person Page`,
  async ({ personDetailPage, pedigreePage }) => {
    await pedigreePage.clickHomePersonNode();
    await pedigreePage.verifyQuickViewModalIsVisible();
    await pedigreePage.clickQuickViewModalOption("Add Family");
    await pedigreePage.addParentsToHomePerson();
    await pedigreePage.setPersonName(FatherDetails.FatherFirstName, FatherDetails.FatherLastName);
    await pedigreePage.setGenderInPersonDetails("male");
    await pedigreePage.clickAddPersonButton();
    await pedigreePage.clickHomePersonNode();
    await pedigreePage.verifyQuickViewModalIsVisible();
    await pedigreePage.clickQuickViewModalOption("Add Family");
    await pedigreePage.addSiblingsToHomePerson();
    await pedigreePage.setPersonName(SiblingDetails.SiblingFirstName, SiblingDetails.SiblingLastName);
    await pedigreePage.setGenderInPersonDetails("others");
    await pedigreePage.setPersonDetails(SiblingDetails.Region, SiblingDetails.SiblingBirthDate, SiblingDetails.BirthPlace);
    await pedigreePage.clickAddPersonButton();
    await pedigreePage.clickHomePersonNode();
    await pedigreePage.verifyQuickViewModalIsVisible();
    await pedigreePage.clickQuickViewModalOption("View Profile");
    await personDetailPage.verifyPersonInfoTableIsVisible();
    await personDetailPage.editTheGenderBirthDateAndBirthPlaceForSibling("female",editPersonDetails.updatedBirthDate, editPersonDetails.BirthPlace);
    await personDetailPage.verifySiblingDetailsGotUpdated(editPersonDetails.updatedBirthDate, editPersonDetails.BirthPlace);
  });

  test(`@Regression Verify user is able to edit the death date & death place of the Siblings on Family Table in Person Page`,
  async ({ personDetailPage, pedigreePage }) => {
    await pedigreePage.clickHomePersonNode();
    await pedigreePage.verifyQuickViewModalIsVisible();
    await pedigreePage.clickQuickViewModalOption("Add Family");
    await pedigreePage.addParentsToHomePerson();
    await pedigreePage.setPersonName(FatherDetails.FatherFirstName, FatherDetails.FatherLastName);
    await pedigreePage.setGenderInPersonDetails("male");
    await pedigreePage.clickAddPersonButton();
    await pedigreePage.clickHomePersonNode();
    await pedigreePage.verifyQuickViewModalIsVisible();
    await pedigreePage.clickQuickViewModalOption("Add Family");;
    await pedigreePage.addSiblingsToHomePerson();
    await pedigreePage.setPersonName(SiblingDetails.SiblingFirstName, SiblingDetails.SiblingLastName);
    await pedigreePage.uncheckThisPersonIsLivingCheckbox();
    await pedigreePage.setDeathDetails(personDeathDate.deathDate, personDeathDate.deathPlace);
    await pedigreePage.clickAddPersonButton();
    await pedigreePage.clickHomePersonNode();
    await pedigreePage.verifyQuickViewModalIsVisible();
    await pedigreePage.clickQuickViewModalOption("View Profile");
    await personDetailPage.verifyPersonInfoTableIsVisible();
    await personDetailPage.editDeathDetailsOfSibling(editDeathDetails.updatedDeathDate, editDeathDetails.updatedDeathPlace);
    await personDetailPage.verifyTheUpdatedDeathDetailsOfSibling(editDeathDetails.updatedDeathDate, editDeathDetails.updatedDeathPlace);
  });

test.afterEach(async ({ page }) => {
  await page.close();
});