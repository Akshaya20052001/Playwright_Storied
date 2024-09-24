import { test } from '@utilities/TestFixtures';
import { getBaseUrl } from '@utilities/config';

test.describe('@Regression All button on FamilyTrees page navigation', () => {
  test.beforeEach(async ({ accessPage, loggedOutHomePage, loggedOutFamilyTreesPage }, testInfo) => {
    // Extend timeout for all tests running this hook by 30 seconds.
    testInfo.setTimeout(testInfo.timeout + 60000);

    await accessPage.goto(getBaseUrl());
    await loggedOutHomePage.clickPeopleTabHeader();
    await loggedOutHomePage.clickFamilyTreesDropdownButtonHeader();
    await loggedOutFamilyTreesPage.verifyOnFamilyTreesPage();
  });

  test('@Regression Start A Tree Button navigation to Sign up page', async ({ loggedOutFamilyTreesPage, signUpPage }) => {

    await loggedOutFamilyTreesPage.clickStartATreeButton();
    await signUpPage.verifyOnSignUpPage();
  });

  test('@Regression Upload Existing Tree Button navigation to Sign up page', async ({ loggedOutFamilyTreesPage, signUpPage }) => {

    await loggedOutFamilyTreesPage.clickUploadExistingTreeButton();
    await signUpPage.verifyOnSignUpPage();
  });

  test('@Regression Start Your Tree Button navigation to Sign up page', async ({ loggedOutFamilyTreesPage, signUpPage }) => {

    await loggedOutFamilyTreesPage.clickStartYourTreeButton();
    await signUpPage.verifyOnSignUpPage();
  });

  test('@Regression Start Your Tree second Button navigation to Sign up page', async ({ loggedOutFamilyTreesPage, signUpPage }) => {

    await loggedOutFamilyTreesPage.clickStartYourTreeSecondButton();
    await signUpPage.verifyOnSignUpPage();
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });
});




test.describe('@Regression All floating card buttons on Family Trees page navigation', () => {
  test.beforeEach(async ({ accessPage, loggedOutHomePage, loggedOutFamilyTreesPage }, testInfo) => {
    // Extend timeout for all tests running this hook by 30 seconds.
    testInfo.setTimeout(testInfo.timeout + 60000);

    await accessPage.goto(getBaseUrl());
    await loggedOutHomePage.clickPeopleTabHeader();
    await loggedOutHomePage.clickFamilyTreesDropdownButtonHeader();
    await loggedOutFamilyTreesPage.verifyOnFamilyTreesPage();
  });

  test('@Regression Search Records Floating card Button navigation to Historical records page', async ({ loggedOutFamilyTreesPage, loggedOutHistoricalSearchPage }) => {

    await loggedOutFamilyTreesPage.clickSearchRecordsFloatingCardButton();
    await loggedOutHistoricalSearchPage.verifyOnHistoricalSearchPage();
  });

  test('@Regression Search Newspapers Floating card Button navigation to Newspaper Search page', async ({ loggedOutFamilyTreesPage, loggedOutNewspaperSearchPage }) => {

    await loggedOutFamilyTreesPage.clickNewspaperSearchFloatingCardButton();
    await loggedOutNewspaperSearchPage.verifyOnNewspaperSearchPage();
  });

  test('@Regression Learn More Floating card Button navigation to Groups page', async ({ loggedOutFamilyTreesPage, loggedOutGroupsPage }) => {

    await loggedOutFamilyTreesPage.clickLearnMoreFloatingCardButton();
    await loggedOutGroupsPage.verifyOnGroupsPage();
  });

  test('@Regression Start a Story Floating card Button navigation to Stories page', async ({ loggedOutFamilyTreesPage, loggedOutStoriesPage }) => {

    await loggedOutFamilyTreesPage.clickStartAStoryFloatingCardButton();
    await loggedOutStoriesPage.verifyOnStoriesPage();
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });
});





