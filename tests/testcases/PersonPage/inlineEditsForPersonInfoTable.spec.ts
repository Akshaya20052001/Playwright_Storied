import { test } from "@utilities/TestFixtures";
import { appDataDefaultCredentials } from "@data/TestDataCredentials";
import { getBaseUrl } from "@utilities/config";
import { HomePersonDetails, editPersonDetails } from "@data/MockData";

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

test(`@Regression Verify user able to edit First&Middle Name(s) & Last Name in the Person Info Table on Person Page.`,
  async ({ personDetailPage, pedigreePage }) => {
    await pedigreePage.clickHomePersonNode();
    await pedigreePage.verifyQuickViewModalIsVisible();
    await pedigreePage.clickQuickViewModalOption("View Profile");
    await personDetailPage.verifyPersonInfoTableIsVisible();
    await personDetailPage.editTheFirstAndMiddleNameOnPersonTable(editPersonDetails.updatedFirstName);
    await personDetailPage.editTheLastNameOnPersonInfoTable(editPersonDetails.updatedLastName);
    await personDetailPage.verifyTheUpdatedNameIsDisplayedOnPersonTable(editPersonDetails.updatedFirstName, editPersonDetails.updatedLastName);
  });

test(`@Regression Verify user able to edit the home person's Gender in the Person Info Table on Person Page.`,
  async ({ personDetailPage, pedigreePage }) => {
    await pedigreePage.clickHomePersonNode();
    await pedigreePage.verifyQuickViewModalIsVisible();
    await pedigreePage.clickQuickViewModalOption("View Profile");
    await personDetailPage.verifyPersonInfoTableIsVisible();
    await personDetailPage.editTheGenderOnPersonInfoTable();
  });

test(`@Regression Verify user is able to edit the Birth Date in the Events Table on Person Page.`,
  async ({ personDetailPage, pedigreePage }) => {
    await pedigreePage.clickHomePersonNode();
    await pedigreePage.verifyQuickViewModalIsVisible();
    await pedigreePage.clickQuickViewModalOption("View Profile");
    await personDetailPage.verifyPersonInfoTableIsVisible();
    await personDetailPage.editBirthDateInEventsTable(editPersonDetails.updatedBirthDate);
    await personDetailPage.verifyTheUpdatedBirthDateIsDisplayedOnEventsTable(editPersonDetails.updatedBirthDate);
  });

test(`@Regression Verify user is able to edit the Birth Location in the Events Table on Person Page.`,
  async ({ personDetailPage, pedigreePage }) => {
    await pedigreePage.clickHomePersonNode();
    await pedigreePage.verifyQuickViewModalIsVisible();
    await pedigreePage.clickQuickViewModalOption("View Profile");
    await personDetailPage.verifyPersonInfoTableIsVisible();
    await personDetailPage.editBirthLocationInEventsTable(editPersonDetails.BirthPlace);
    await personDetailPage.verifyUpdatedBirthLocationInEventsTable(editPersonDetails.BirthPlace);
  });

test.afterEach(async ({ page }) => {
  await page.close();
});