import { Page } from '@playwright/test';

export const Locators = (page: Page) => ({
    groupsHeader : page.getByText('Stories are meant to be shared with loved ones.')
});

