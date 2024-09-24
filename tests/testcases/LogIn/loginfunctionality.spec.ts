import { test } from '@utilities/TestFixtures';
import { appDataDefaultCredentials } from '@data/TestDataCredentials';
import { getBaseUrl } from '@utilities/config';

test.beforeEach(async ({ accessPage }, testInfo) => {
  // Extend timeout for all tests running this hook by 30 seconds.
  testInfo.setTimeout(testInfo.timeout + 60000);
  await accessPage.goto(getBaseUrl());
});

test('@Regression @Smoke Logout', async ({ loggedOutHomePage, loginPage, homePage }) => {

  await loggedOutHomePage.clickSignInButtonLohp();
  await loginPage.setEmail(appDataDefaultCredentials.Email);
  await loginPage.setPassword(appDataDefaultCredentials.Password);
  await loginPage.clickSignInButton();

  await homePage.clickOnNavAvatar();
  await homePage.clickLogoutButton();

  await loggedOutHomePage.verifyOnLohp();
});

test.afterEach(async ({ page }) => {
  await page.close();
});