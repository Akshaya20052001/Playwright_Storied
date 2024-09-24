import { Page } from '@playwright/test';

export const Locators = (page: Page) => ({
    familySearchSignInHeader: page.locator("xpath=//img[@aria-label='FamilySearch']"),
    emailInput: page.locator("xpath=//input[@id='userName']"),
    passwordInput: page.locator("xpath=//input[@id='password']"),
    familySearchSignInButton: page.locator("xpath=//button[@id='login']"),

    importYourTreeFromFamilySearchHeader: page.locator("xpath=//span[@class='defaultText text-gray-7 text-2xl lyon-font-medium ']"),
    importYourTreeFromFamilyWhatWillBeImportedLink: page.locator("xpath=//p[@class='text-base text-blue-4 my-6 cursor-pointer']"),
    importYourTreeFromFamilyTreeNamePlaceholder: page.locator("xpath=//input[@id='firstName']"),
    importYourTreeFromFamilyShareWithPartnersCheckbox: page.locator("xpath=//input[@id='getMoreHintInfo']"),
    importYourTreeFromFamilyCancelButton: page.locator("xpath=//span[contains(@class,'typo-font-medium text-sm text-blue-5 undefined')]"),
    importYourTreeFromFamilySaveButton: page.locator("xpath=//div[@class='mb-4']//button[@type='button']"),
  });