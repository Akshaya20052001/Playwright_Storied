import { test } from "@utilities/TestFixtures";
import { appDataDefaultCredentials } from "@data/TestDataCredentials";
import { hintsPersonDetails, uploadGedcomHints } from "@data/MockData";
import { getBaseUrl } from "@utilities/config";

test.beforeEach(async (
  {
    accessPage,
    loggedOutHomePage,
    loginPage,
    homePage,
    settingsPage,
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
}
);

test("@Regression Verify hints are generated via Gedcom upload", async ({
  settingsPage, startATreePage, pedigreePage
}) => {
  await settingsPage.clickUploadGedcomButtonOption();
  await startATreePage.verifyOnUploadGedcomPage();
  await startATreePage.uploadGedcomFile(uploadGedcomHints.gedcomName);
  await startATreePage.selectHomeperson(uploadGedcomHints.homePersonName);
  await pedigreePage.verifyHomePersonIsDisplayed(
    uploadGedcomHints.homePersonName
  );
  await pedigreePage.verifyHintsGenerated();
});

test('@Regression Verify hints are generated via creating a person', async ({
  pedigreePage, settingsPage, startATreePage
}) => {
  await settingsPage.clickStartTreeButtonOption();
  await startATreePage.verifyOnStartATreePage();
  await startATreePage.createPersonViaTree(hintsPersonDetails);
  await pedigreePage.verifyHomePersonIsDisplayed(
    hintsPersonDetails.homePersonFirstName + " " + hintsPersonDetails.homePersonLastName
  );
  await pedigreePage.clickAddFatherNode();
  await pedigreePage.addFatherDetails(hintsPersonDetails);
  await pedigreePage.verifyHintsGenerated();
});

test('@Regression Verify via upload Gedcom hints are visible on the Person page in the Hints tab.', async ({
  pedigreePage, settingsPage, startATreePage, personDetailPage
}) => {
  await settingsPage.clickUploadGedcomButtonOption();
  await startATreePage.verifyOnUploadGedcomPage();
  await startATreePage.uploadGedcomFile(uploadGedcomHints.gedcomName);
  await startATreePage.selectHomeperson(uploadGedcomHints.homePersonName);
  await pedigreePage.verifyHomePersonIsDisplayed(
    uploadGedcomHints.homePersonName
  );
  await pedigreePage.verifyHintsGenerated();
  await pedigreePage.clickHintIconButton();
  await personDetailPage.verifyOnHintsTabOnPersonPage();
  await personDetailPage.VerifyHintsAreDisplayed("FamilySearch");
  await personDetailPage.VerifyHintsAreDisplayed("1940");
  await personDetailPage.VerifyHintsAreDisplayed("US social security");
});

test('@Regression Verify via adding person hints are visible on the Person page in the Hints tab.', async ({
  pedigreePage, settingsPage, startATreePage, personDetailPage
}) => {
  await settingsPage.clickStartTreeButtonOption();
  await startATreePage.verifyOnStartATreePage();
  await startATreePage.createPersonViaTree(hintsPersonDetails);
  await pedigreePage.verifyHomePersonIsDisplayed(
    hintsPersonDetails.homePersonFirstName + " " + hintsPersonDetails.homePersonLastName
  );
  await pedigreePage.clickAddFatherNode();
  await pedigreePage.addFatherDetails(hintsPersonDetails);
  await pedigreePage.verifyHintsGenerated();
  await pedigreePage.clickHintIconButton();
  await personDetailPage.verifyOnHintsTabOnPersonPage();
  await personDetailPage.VerifyHintsAreDisplayed("FamilySearch");
  await personDetailPage.VerifyHintsAreDisplayed("1940");
  await personDetailPage.VerifyHintsAreDisplayed("US social security");
});

test('@Regression Verify via upload Gedcom FamilySearch hints are visible on the Person page in the Hints tab.', async ({
  pedigreePage, settingsPage, startATreePage , personDetailPage
}) => {
  await settingsPage.clickUploadGedcomButtonOption();
  await startATreePage.verifyOnUploadGedcomPage();
  await startATreePage.uploadGedcomFile(uploadGedcomHints.gedcomName);
  await startATreePage.selectHomeperson(uploadGedcomHints.homePersonName);
  await pedigreePage.verifyHomePersonIsDisplayed(
    uploadGedcomHints.homePersonName
  );
  await pedigreePage.verifyHintsGenerated();
  await pedigreePage.clickHintIconButton();
  await personDetailPage.verifyOnHintsTabOnPersonPage();
  await personDetailPage.VerifyHintsAreDisplayed("FamilySearch");
});

test('@Regression Verify via adding person FamilySearch hints are visible on the Person page in the Hints tab.', async ({
  pedigreePage, settingsPage, startATreePage , personDetailPage
}) => {
  await settingsPage.clickUploadGedcomButtonOption();
  await startATreePage.verifyOnUploadGedcomPage();
  await startATreePage.uploadGedcomFile(uploadGedcomHints.gedcomName);
  await startATreePage.selectHomeperson(uploadGedcomHints.homePersonName);
  await pedigreePage.verifyHomePersonIsDisplayed(
    uploadGedcomHints.homePersonName
  );
  await pedigreePage.verifyHintsGenerated();
  await pedigreePage.clickHintIconButton();
  await personDetailPage.verifyOnHintsTabOnPersonPage();
  await personDetailPage.VerifyHintsAreDisplayed("FamilySearch");
});

test.afterEach(async ({ page }) => {
  await page.close();
});