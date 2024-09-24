import { Page } from '@playwright/test';

export const Locators = (page: Page) => ({
    accessCodePlaceholder: page.getByPlaceholder('Access Code'),
    accessCodeSubmitButton: page.getByRole('button', { name: 'Submit' }),
});

