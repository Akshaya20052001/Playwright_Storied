import { faker } from '@faker-js/faker';
import { test } from '@utilities/TestFixtures';
import { expect } from '@playwright/test';
import { appDataDefaultCredentials } from '@data/TestDataCredentials';
import { getBaseUrl } from '@utilities/config';

test.beforeEach(
  async ({ accessPage, loggedOutHomePage, loginPage, homePage }, testInfo) => {
    // Extend timeout for all tests running this hook by 30 seconds.
    testInfo.setTimeout(testInfo.timeout + 60000);
    await accessPage.goto(getBaseUrl());
    await loggedOutHomePage.clickSignInButtonLohp();
    await loginPage.setEmail(appDataDefaultCredentials.Email);
    await loginPage.setPassword(appDataDefaultCredentials.Password);
    await loginPage.clickSignInButton();
    await homePage.verifyOnHomepage();
  }
);

test('@Regression @Smoke create Story with huge content', async ({
  page,
}, testInfo) => {
  const storyTitle = faker.lorem.words();
  const storyContent = faker.lorem.lines(50);

  await page.getByRole('link', { name: 'My Stories' }).click();
  await page.getByRole('button', { name: 'Add Story' }).click();
  await page.getByPlaceholder('Story Title').fill(storyTitle);
  await page.locator('.public-DraftEditor-content').fill(storyContent);
  await page.waitForURL(/\/stories\/edit\/1\/[\w-]+/);
  await expect(page.getByText('Saved')).toBeVisible();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Previous' }).click();

  const scrollableStoryContent = await page.getByTestId('story-body');
  const scrollPosition = await scrollableStoryContent.evaluate((el) => {
    return { scrollTop: el.scrollTop, scrollLeft: el.scrollLeft };
  });

  expect(scrollPosition).toEqual({ scrollTop: 0, scrollLeft: 0 });
});

test('@Regression @Smoke create Draft Story with title, location, date and content', async ({
  page,
}, testInfo) => {
  const storyTitle = faker.lorem.words();
  const storyContent = faker.lorem.lines(20);

  await page.getByRole('link', { name: 'My Stories' }).click();
  await page.getByRole('button', { name: 'Add Story' }).click();
  await page.getByPlaceholder('Story Title').fill(storyTitle);
  await page.getByPlaceholder('Location').fill('India');
  testInfo.setTimeout(testInfo.timeout + 2000);
  await page
    .getByRole('option', { name: 'India', exact: true })
    .locator('div')
    .nth(1)
    .click();
  await page.getByPlaceholder('Year or exact date').fill('2023');
  await page.locator('.public-DraftEditor-content').fill(storyContent);
  await page.waitForURL(/\/stories\/edit\/1\/[\w-]+/);
  await expect(page.getByText('Saved')).toBeVisible();
  await page.getByTestId('close-story').click();
  await expect(page.getByRole('button', { name: 'Add Story' })).toBeVisible();
  testInfo.setTimeout(testInfo.timeout + 60000);
  await expect(page.getByText(storyTitle)).toBeVisible();
});

test('@Regression @Smoke create Draft Story with title, location, date, person and category', async ({
  page,
}, testInfo) => {
  const storyTitle = faker.lorem.words();
  const storyContent = faker.lorem.lines(20);

  await page.getByRole('link', { name: 'My Stories' }).click();
  await page.getByRole('button', { name: 'Add Story' }).click();
  await page.getByPlaceholder('Story Title').fill(storyTitle);
  await page.getByPlaceholder('Location').fill('India');
  testInfo.setTimeout(testInfo.timeout + 2000);
  await page
    .getByRole('option', { name: 'India', exact: true })
    .locator('div')
    .nth(1)
    .click();
  await page.getByPlaceholder('Year or exact date').fill('2023');
  await page.locator('.public-DraftEditor-content').fill(storyContent);
  await page.waitForURL(/\/stories\/edit\/1\/[\w-]+/);
  await expect(page.getByText('Saved')).toBeVisible();
  await page.getByRole('button', { name: 'Next' }).click();
  await expect(page.getByText('Saved')).toBeVisible();
  await page.getByPlaceholder('Add People or Pets').fill('Dhruv');
  testInfo.setTimeout(testInfo.timeout + 60000);
  await page.getByText('Dhruv Sankpal').click();
  await expect(page.getByText('Dhruv Sankpal')).toBeVisible();
  await page.getByText('Achievements').click();
  await page.getByRole('button', { name: 'Next' }).click();
  await expect(page.getByText('Saved')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Done' })).toBeEnabled();
  await page.getByTestId('close-story').click();
  await expect(page.getByRole('button', { name: 'Add Story' })).toBeVisible();
  testInfo.setTimeout(testInfo.timeout + 60000);
  await expect(page.getByText(storyTitle)).toBeVisible();
});

test.afterEach(async ({ page }) => {
  page.close();
});
