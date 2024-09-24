import { test } from "@utilities/TestFixtures";
import { appDataDefaultCredentials } from "@data/TestDataCredentials";
import { getBaseUrl } from "@utilities/config";
import { HomePersonDetails, editMarraigeDetails, editPersonDetails, spouseDetails, personDeathDate, editDeathDetails } from "@data/MockData";

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

test(`@Regression Verify User able to edit the Birthdate & location in All Life Events Table`,
  async ({ personDetailPage, pedigreePage }) => {
    await pedigreePage.clickHomePersonNode();
    await pedigreePage.verifyQuickViewModalIsVisible();
    await pedigreePage.clickQuickViewModalOption("View Profile");
    await personDetailPage.verifyPersonInfoTableIsVisible();
    await personDetailPage.editTheBirthdateAndLocationInAllLifeEvents(editPersonDetails.updatedBirthDate, editPersonDetails.BirthPlace);
    await personDetailPage.verifyTheBirthdateAndLocationInAllLifeEvents(editPersonDetails.updatedBirthDate, editPersonDetails.BirthPlace);
});

test(`@Regression Verify user able to edit the date and location of Marriage in All Life Events Table`,
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
    await personDetailPage.addMarraigeLifeEvent(spouseDetails.MarriageDate, spouseDetails.MarriagePlace);
    await personDetailPage.editTheMarriageDateAndLocationInAllLifeEvents(editMarraigeDetails.editMarriageDate, editMarraigeDetails.editMarriagePlace);
    await personDetailPage.verifyTheMarriageDateAndLocationInAllLifeEvents(editMarraigeDetails.editMarriageDate, editMarraigeDetails.editMarriagePlace);
});

test(`@Regression Verify user able to edit the date & location of death in All Life Events Table`,
  async ({ personDetailPage, pedigreePage }) => {
    await pedigreePage.clickHomePersonNode();
    await pedigreePage.verifyQuickViewModalIsVisible();
    await pedigreePage.clickQuickViewModalOption("View Profile");
    await personDetailPage.verifyPersonInfoTableIsVisible();
    await personDetailPage.addDeathLifeEvent(personDeathDate.deathDate, personDeathDate.deathPlace);
    await personDetailPage.editTheDeathDateAndLocationInAllLifeEvents(editDeathDetails.updatedDeathDate, editDeathDetails.updatedDeathPlace);
    await personDetailPage.verifyTheDeathDateAndLocationInAllLifeEvents(editDeathDetails.updatedDeathDate, editDeathDetails.updatedDeathPlace);
});

test.afterEach(async ({ page }) => {
  await page.close();
});