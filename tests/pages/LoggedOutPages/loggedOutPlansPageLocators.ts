import { Page } from '@playwright/test';

export const Locators = (page: Page) => ({
    planspageHeader : page.getByText('Storied Plans and Pricing'),
});

