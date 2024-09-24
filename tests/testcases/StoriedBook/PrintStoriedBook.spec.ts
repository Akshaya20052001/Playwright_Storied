import { test } from '@utilities/TestFixtures';
import { storiedBookDefaultCredentials } from '@data/TestDataCredentials';
import { getBaseUrl } from '@utilities/config';

test.beforeEach(async ({ accessPage, loggedOutHomePage, homePage, loginPage, printStoriedBookPage }, testInfo) => {
  // Extend timeout for all tests running this hook by 30 seconds.
  testInfo.setTimeout(testInfo.timeout + 60000);
  await accessPage.goto(getBaseUrl())
  await loggedOutHomePage.clickSignInButtonLohp();
  await loginPage.setEmail(storiedBookDefaultCredentials.Email);
  await loginPage.setPassword(storiedBookDefaultCredentials.Password);
  await loginPage.clickSignInButton();
  await homePage.verifyOnHomepage();
  await printStoriedBookPage.clickOnPrintStoriedBookLink();
  await printStoriedBookPage.verifyOnPrintStoriedBookPage();
});

test('@Regression @Smoke Verify user is able to navigate to select stories for StoriedBook by clicking on get started button',
  async ({ printStoriedBookPage }) => {
    await printStoriedBookPage.clickOnGetStartedButtonElement();
    await printStoriedBookPage.selectStoreisNextButtonElement();
  });
test('@Regression @Smoke Verify user able to close select stories for StoriedBook by clicking on X icon',
  async ({ printStoriedBookPage }) => {
    await printStoriedBookPage.clickOnGetStartedButtonElement();
    await printStoriedBookPage.closeSelectedStoriesXIcon();
  });

test('@Regression @Smoke Verify user able to select stories form select stories for StoriedBook',
  async ({ printStoriedBookPage }) => {
    await printStoriedBookPage.clickOnGetStartedButtonElement();
    await printStoriedBookPage.selectStoriesForStoriedBook();
    await printStoriedBookPage.clickNextButtonOfSelectStories();
  });
test('@Regression @Smoke Verify user is able to open and view the story through open quick view icon from stories by you table',
  async ({ printStoriedBookPage }) => {
    await printStoriedBookPage.clickOnGetStartedButtonElement();

    await printStoriedBookPage.clickOnquickViewElement();
    await printStoriedBookPage.verifyStoryTitle("Sarah Vida Jones");
    await printStoriedBookPage.verifyStoryElements();
    await printStoriedBookPage.clickCloseStoryXIcon();
  });
test('@Regression @Smoke Verify Next button is enabled once user select stories from Select Stories for this StoriedBook',
  async ({ printStoriedBookPage }) => {
    await printStoriedBookPage.clickOnGetStartedButtonElement();
    await printStoriedBookPage.selectStoriesForStoriedBook();
    await printStoriedBookPage.verifyNextButtonOfSelectStoriesEnabled();
  });
test('@Regression @Smoke Verify user able to navigate back to select story page from Choose Story Order page',
  async ({ printStoriedBookPage }) => {
    await printStoriedBookPage.clickOnGetStartedButtonElement();
    await printStoriedBookPage.selectStoriesForStoriedBook();
    await printStoriedBookPage.clickNextButtonOfSelectStories();
    await printStoriedBookPage.chooseStoryOrderPageBackButtonElement();
    await printStoriedBookPage.verifySelectStoriesforThisStoriedBookPage();
  });
test(`@Regression Verify user should navigate to book options page from the Choose Story Order page with selected stories`,
  async ({ printStoriedBookPage }) => {
    await printStoriedBookPage.clickOnGetStartedButtonElement();
    await printStoriedBookPage.selectStoriesForStoriedBook();
    await printStoriedBookPage.clickNextButtonOfSelectStories();
    await printStoriedBookPage.verifyNextButtonOfSelectStoriesIsVisible();
    await printStoriedBookPage.clickNextButtonOfChooseStoryOrderPage();
    await printStoriedBookPage.verifyUserIsAtBooksOptionsPage();
  });
test(`@Regression @Smoke Verify user should able to navigate back to choose story order page from book options page`,
  async ({ printStoriedBookPage }) => {
    await printStoriedBookPage.clickOnGetStartedButtonElement();
    await printStoriedBookPage.selectStoriesForStoriedBook();
    await printStoriedBookPage.clickNextButtonOfSelectStories();
    await printStoriedBookPage.verifyNextButtonOfSelectStoriesIsVisible();
    await printStoriedBookPage.clickNextButtonOfChooseStoryOrderPage();
    await printStoriedBookPage.verifyUserIsAtBooksOptionsPage();
    await printStoriedBookPage.clickBackButtonOfbooksOptionsPage();
    await printStoriedBookPage.verifyUserAtChooseStoryOrderPage();
  });

test(`@Regression Verify The Number of Selected Stories for this Storied Book page should be equal to the number of stories in the Drafts`,
  async ({ printStoriedBookPage }) => {
    await printStoriedBookPage.clickOnGetStartedButtonElement();
    await printStoriedBookPage.selectStoriesForStoriedBook();
    await printStoriedBookPage.clickNextButtonOfSelectStories();
    await printStoriedBookPage.clickCloseButtonChooseStoryOrderPage();
    await printStoriedBookPage.verifyTheNumberOfStoriesInFirstDraft();
  });

test.afterEach(async ({ page }) => {
  await page.close();
});