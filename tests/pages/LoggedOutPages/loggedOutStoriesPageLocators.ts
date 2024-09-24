import { Page } from '@playwright/test';

export const Locators = (page: Page) => ({
    storiesHeader : page.getByText('Stories Enrich Your Family History'),
});

