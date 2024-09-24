import { test } from '@utilities/TestFixtures';
import { getBaseUrl } from '@utilities/config';


test.describe('@Regression All buttons on Connections page navigation', () => {
  test.beforeEach(async ({ accessPage, loggedOutHomePage, loggedOutConnectionsPage }, testInfo) => {
    // Extend timeout for all tests running this hook by 30 seconds.
    testInfo.setTimeout(testInfo.timeout + 60000);

    await accessPage.goto(getBaseUrl());
    await loggedOutHomePage.clickPeopleTabHeader();
    await loggedOutHomePage.clickConnectionsDropdownButtonHeader();
    await loggedOutConnectionsPage.verifyOnConnectionsPage();
  });

  test('@Regression Add a Connection Button navigation to Sign up page', async ({ loggedOutConnectionsPage, signUpPage }) => {

    await loggedOutConnectionsPage.clickAddAConnectionButton();
    await signUpPage.verifyOnSignUpPage();
  });

  test('@Regression Add a Connection second Button navigation to Sign up page', async ({ loggedOutConnectionsPage, signUpPage }) => {

    await loggedOutConnectionsPage.clickAddAConnectionSecondButton();
    await signUpPage.verifyOnSignUpPage();
  });

  test('@Regression Add a Connection third button navigation to Sign up page', async ({ loggedOutConnectionsPage, signUpPage }) => {

    await loggedOutConnectionsPage.clickAddAConnectionThirdButton();
    await signUpPage.verifyOnSignUpPage();
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });
});



test.describe('@Regression All floating card buttons on Connections page navigation', () => {
  test.beforeEach(async ({ accessPage, loggedOutHomePage, loggedOutConnectionsPage }, testInfo) => {
    // Extend timeout for all tests running this hook by 30 seconds.
    testInfo.setTimeout(testInfo.timeout + 60000);

    await accessPage.goto(getBaseUrl());
    await loggedOutHomePage.clickPeopleTabHeader();
    await loggedOutHomePage.clickConnectionsDropdownButtonHeader();
    await loggedOutConnectionsPage.verifyOnConnectionsPage();
  });

  test('@Regression Search Records Floating card Button navigation to Historical records page', async ({ loggedOutConnectionsPage, loggedOutHistoricalSearchPage }) => {

    await loggedOutConnectionsPage.clickSearchRecordsFloatingCardButton();
    await loggedOutHistoricalSearchPage.verifyOnHistoricalSearchPage();
  });

  test('@Regression Search Newspapers Floating card Button navigation to Newspaper Search page', async ({ loggedOutConnectionsPage, loggedOutNewspaperSearchPage }) => {

    await loggedOutConnectionsPage.clickNewspaperSearchFloatingCardButton();
    await loggedOutNewspaperSearchPage.verifyOnNewspaperSearchPage();
  });

  test('@Regression Learn More Floating card Button navigation to Groups page', async ({ loggedOutConnectionsPage, loggedOutGroupsPage }) => {

    await loggedOutConnectionsPage.clickLearnMoreFloatingCardButton();
    await loggedOutGroupsPage.verifyOnGroupsPage();
  });

  test('@Regression Start a Story Floating card Button navigation to Stories page', async ({ loggedOutConnectionsPage, loggedOutStoriesPage }) => {

    await loggedOutConnectionsPage.clickStartAStoryFloatingCardButton();
    await loggedOutStoriesPage.verifyOnStoriesPage();
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });
});





