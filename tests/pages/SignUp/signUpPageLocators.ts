import { Page } from '@playwright/test';

export const Locators = (page: Page) => ({
    signUpPageHeader : page.getByRole('heading', { name: 'Create your Account' }),
});

