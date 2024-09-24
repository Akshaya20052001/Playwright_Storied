import { Page } from '@playwright/test';

export const Locators = (page: Page) => ({
    historicalSearchpageHeader : page.locator('h1').getByText('Search Historical Records'),
});

