import { Page } from '@playwright/test';

export const Locators = (page: Page) => ({
    newspaperSearchpageHeader : page.locator('h1').getByText('Search Newspapers and Obituaries'),
});

