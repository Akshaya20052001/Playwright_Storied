import { test } from '@utilities/TestFixtures';
import { getBaseUrl } from '@utilities/config';

test.describe('All buttons on LOHP navigation', () => {

  test.beforeEach(async ({ accessPage }, testInfo) => {
    // Extend timeout for all tests running this hook by 60 seconds.
    testInfo.setTimeout(testInfo.timeout + 60000);
    await accessPage.goto(getBaseUrl());
  });

  test('@Regression Join For free Button navigation to Sign up page', async ({ loggedOutHomePage, signUpPage }) => {

    await loggedOutHomePage.verifyOnLohp();
    await loggedOutHomePage.clickJoinForFreeButtonLohp();
    await signUpPage.verifyOnSignUpPage();
  });

  test('@Regression Start a Tree Button navigation to Sign up page', async ({ loggedOutHomePage, signUpPage }) => {


    await loggedOutHomePage.verifyOnLohp();
    await loggedOutHomePage.clickStartYourTreeButtonLohp();
    await signUpPage.verifyOnSignUpPage();
  });

  test('@Regression Learn More Button navigation to Connections page', async ({ loggedOutHomePage, loggedOutConnectionsPage }) => {

    await loggedOutHomePage.verifyOnLohp();
    await loggedOutHomePage.clickLearnMoreButtonLohp();
    await loggedOutConnectionsPage.verifyOnConnectionsPage();
  });

  test('@Regression Create a Group Button navigation to Groups page', async ({ loggedOutHomePage, loggedOutGroupsPage }) => {

    await loggedOutHomePage.verifyOnLohp();
    await loggedOutHomePage.clickCreateAGroupButtonLohp();
    await loggedOutGroupsPage.verifyOnGroupsPage();
  });

  test('@Regression Plans & Pricing Button navigation to Plans page', async ({ loggedOutHomePage, loggedOutPlansPage }) => {

    await loggedOutHomePage.verifyOnLohp();
    await loggedOutHomePage.clickPlansAndPricingButtonLohp();
    await loggedOutPlansPage.verifyOnPlansAndPricingPage();
  });

  test('@Regression Search Historical Records Button navigation to Historical record search page', async ({ loggedOutHomePage, loggedOutHistoricalSearchPage }) => {

    await loggedOutHomePage.verifyOnLohp();
    await loggedOutHomePage.clickHistoricalSearchButtonLohp();
    await loggedOutHistoricalSearchPage.verifyOnHistoricalSearchPage();
  });

  test('@Regression Search Newspapers Button navigation to Newspaper search page', async ({ loggedOutHomePage, loggedOutNewspaperSearchPage }) => {

    await loggedOutHomePage.verifyOnLohp();
    await loggedOutHomePage.clickNewspaperSearchButtonLohp();
    await loggedOutNewspaperSearchPage.verifyOnNewspaperSearchPage();
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });
});

