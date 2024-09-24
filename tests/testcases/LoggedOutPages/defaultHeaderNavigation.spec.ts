import { test } from '@utilities/TestFixtures';
import { getBaseUrl } from '@utilities/config';


test.beforeEach(async ({ accessPage }, testInfo) => {
  // Extend timeout for all tests running this hook by 60 seconds.
  testInfo.setTimeout(testInfo.timeout + 60000);
  await accessPage.goto(getBaseUrl());
});

test('@Regression Join For free Button navigation to Sign up page', async ({ loggedOutHomePage, signUpPage }) => {

  await loggedOutHomePage.clickJoinForFreeButtonHeader();
  await signUpPage.verifyOnSignUpPage();
});

test('@Regression Sign In Button navigation to Sign In page', async ({ loggedOutHomePage, loginPage }) => {

  await loggedOutHomePage.clickSignInButtonHeader();
  await loginPage.verifyOnSignInPage();
});

test('@Regression Plans & Pricing Button navigation to Plans page', async ({ loggedOutHomePage, loggedOutPlansPage }) => {

  await loggedOutHomePage.clickPlansAndPricingButtonHeader();
  await loggedOutPlansPage.verifyOnPlansAndPricingPage();
});

test('@Regression Stories Button navigation to Stories page', async ({ loggedOutHomePage, loggedOutStoriesPage }) => {

  await loggedOutHomePage.clickStoriesButtonHeader();
  await loggedOutStoriesPage.verifyOnStoriesPage();
});

test('@Regression Groups Button navigation to Groups page', async ({ loggedOutHomePage, loggedOutGroupsPage }) => {

  await loggedOutHomePage.clickGroupsButtonHeader();
  await loggedOutGroupsPage.verifyOnGroupsPage();
});

test('@Regression People Tab - Family Trees button dropdown navigation to Family Trees page', async ({ loggedOutHomePage, loggedOutFamilyTreesPage }) => {

  await loggedOutHomePage.clickPeopleTabHeader();
  await loggedOutHomePage.clickFamilyTreesDropdownButtonHeader();
  await loggedOutFamilyTreesPage.verifyOnFamilyTreesPage();
});

test('@Regression People Tab -  Connections button dropdown navigation to Connections page', async ({ loggedOutHomePage, loggedOutConnectionsPage }) => {

  await loggedOutHomePage.clickPeopleTabHeader();
  await loggedOutHomePage.clickConnectionsDropdownButtonHeader();
  await loggedOutConnectionsPage.verifyOnConnectionsPage();
});

test('@Regression Search Tab - Historical Record Search button dropdown navigation to Historical Search page', async ({ loggedOutHomePage, loggedOutHistoricalSearchPage }) => {

  await loggedOutHomePage.clickSearchTabHeader();
  await loggedOutHomePage.clickHistoricalRecordSearchDropdownButtonHeader();
  await loggedOutHistoricalSearchPage.verifyOnHistoricalSearchPage();
});

test('@Regression Search Tab -  Newspaper Search button dropdown navigation to Newspaper Search page', async ({ loggedOutHomePage, loggedOutNewspaperSearchPage }) => {

  await loggedOutHomePage.clickSearchTabHeader();
  await loggedOutHomePage.clickNewspaperSearchDropdownButtonHeader();
  await loggedOutNewspaperSearchPage.verifyOnNewspaperSearchPage();
});

test.afterEach(async ({ page }) => {
  await page.close();
});