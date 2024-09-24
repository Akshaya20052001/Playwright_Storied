import { test } from "@utilities/TestFixtures";
import { expect } from "@playwright/test";
import { appDataDefaultCredentials } from "@data/TestDataCredentials";
import { familySearchPageLoginCredentials } from "@data/TestDataCredentials";
import { getBaseUrl } from "@utilities/config";


const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const status = ["Checked", "Unchecked"];

const interactWithFamilySearchSignInPage = async (familySearchPage, email, password) => {
  const page1Promise = familySearchPage.page.waitForEvent('popup');
  await familySearchPage.page.locator('div').filter({ hasText: /^Import from FamilySearch$/ }).nth(2).click();
  const familySearch = await page1Promise;

  if (email && password) {
    await familySearch.getByPlaceholder('Enter username').fill(email);
    await familySearch.getByPlaceholder('Enter password').click();
    await familySearch.getByPlaceholder('Enter password').fill(password);
    await familySearch.getByRole('button', { name: 'Sign In' }).click();
    await delay(5000);
  }

  return familySearch;
};

const verifyWithFamilySearchSignInPage = async (familySearchPage) => {
  const page1Promise = familySearchPage.page.waitForEvent('popup');
  await familySearchPage.page.locator('div').filter({ hasText: /^Import from FamilySearch$/ }).nth(2).click();
  const familySearch = await page1Promise;
  return familySearch;
};

test.beforeEach(
  async (
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
    await delay(5000);
  }
);

test("@Regression Verify that the user can land on the FamilySearch sign-in page", async ({
  familySearchPage,
}) => {
  const familySearch = await verifyWithFamilySearchSignInPage(familySearchPage);

  await Promise.all([
    expect(familySearch.getByPlaceholder('Enter username')).toBeVisible(),
    expect(familySearch.getByPlaceholder('Enter password')).toBeVisible(),
    expect(familySearch.getByRole('button', { name: 'Sign In' })).toBeVisible(),
  ]);
  await familySearch.close();
});

test("@Regression Verify that the user can land on the Import your tree from FamilySearch page", async ({
  familySearchPage,
}) => {
  await interactWithFamilySearchSignInPage(familySearchPage, familySearchPageLoginCredentials.Email, familySearchPageLoginCredentials.Password);
  await familySearchPage.verifyOnFamilySearchTreeImportPage();
});

test("@Regression Verify Tree Name is pre-populated on the FamilySearch Import tree page", async ({
  familySearchPage,
}) => {
  await interactWithFamilySearchSignInPage(familySearchPage, familySearchPageLoginCredentials.Email, familySearchPageLoginCredentials.Password);
  await familySearchPage.verifyOnFamilySearchTreeImportPage();
  await familySearchPage.verifyTreeNameIsPrePopulated(familySearchPageLoginCredentials.familySearchTreeName);

});

test("@Regression Verify that the user can cancel the import of the FamilySearch Tree by clicking the cancel button", async ({
  familySearchPage,
}) => {
  await interactWithFamilySearchSignInPage(familySearchPage, familySearchPageLoginCredentials.Email, familySearchPageLoginCredentials.Password);
  await familySearchPage.verifyOnFamilySearchTreeImportPage();
  await familySearchPage.verifyTreeNameIsPrePopulated(familySearchPageLoginCredentials.familySearchTreeName);
  await familySearchPage.clickCancelButton();
  await familySearchPage.verifyFamilySearchTreeImportPageIsClosed();
});

test("@Regression Verify that the user can import FamilySearch Tree", async ({
  familySearchPage,
  pedigreePage
}) => {
  await interactWithFamilySearchSignInPage(familySearchPage, familySearchPageLoginCredentials.Email, familySearchPageLoginCredentials.Password);
  await familySearchPage.verifyOnFamilySearchTreeImportPage();
  await familySearchPage.verifyTreeNameIsPrePopulated(familySearchPageLoginCredentials.familySearchTreeName);
  await familySearchPage.clickSaveButton();
  await pedigreePage.verifyHomePersonIsDisplayed(familySearchPageLoginCredentials.homePersonName);
});

status.forEach((status) => {
  test(
    `@Regression Verify that the user can import the FamilySearch Tree while keeping share with partners ${status}`,
    async ({ familySearchPage, pedigreePage, homePage, settingsPage }) => {
      await interactWithFamilySearchSignInPage(familySearchPage, familySearchPageLoginCredentials.Email, familySearchPageLoginCredentials.Password);
      await familySearchPage.verifyOnFamilySearchTreeImportPage();
      await familySearchPage.verifyTreeNameIsPrePopulated(familySearchPageLoginCredentials.familySearchTreeName);
      await familySearchPage.uncheckShareWithPartnersCheckbox(status);
      await familySearchPage.clickSaveButton();
      await pedigreePage.verifyHomePersonIsDisplayed(familySearchPageLoginCredentials.homePersonName);
      await homePage.clickOnNavAvatar();
      await homePage.clickSettingsButton();
      await settingsPage.verifyOnSettingsPage();
      await settingsPage.clickOnTreesSection();
      await settingsPage.ClickEditTreeNameButton();
      await settingsPage.VerifyEditTreeNameButtonIsReplacedByCancelButton();
      await settingsPage.VerifySaveButtonOnTreeSectionIsDisabled();
      await settingsPage.VerifyTreeSharedPrefernceStatus(status);
    });
});

test("@Regression Verify that the user can see importing FamilySearch tree snack bars", async ({
  familySearchPage,
  pedigreePage
}) => {
  await interactWithFamilySearchSignInPage(familySearchPage, familySearchPageLoginCredentials.Email, familySearchPageLoginCredentials.Password);
  await familySearchPage.verifyOnFamilySearchTreeImportPage();
  await familySearchPage.verifyTreeNameIsPrePopulated(familySearchPageLoginCredentials.familySearchTreeName);
  await familySearchPage.clickSaveButton();
  await pedigreePage.verifyImportingSnackBarIsDisplayed("Tree");
  await pedigreePage.verifyHomePersonIsDisplayed(familySearchPageLoginCredentials.homePersonName);
});

test("@Regression Verify that the user can see Importing Memories from FamilySearch snack bars", async ({
  familySearchPage,
  pedigreePage
}) => {
  await interactWithFamilySearchSignInPage(familySearchPage, familySearchPageLoginCredentials.Email, familySearchPageLoginCredentials.Password);
  await familySearchPage.verifyOnFamilySearchTreeImportPage();
  await familySearchPage.verifyTreeNameIsPrePopulated(familySearchPageLoginCredentials.familySearchTreeName);
  await familySearchPage.clickSaveButton();
  await pedigreePage.verifyImportingSnackBarIsDisplayed("Tree");
  await pedigreePage.verifyImportingSnackBarIsDisplayed("Memories");
  await pedigreePage.verifyHomePersonIsDisplayed(familySearchPageLoginCredentials.homePersonName);
});

test.afterEach(async ({ page }) => {
  await page.close();
});