import { Page } from '@playwright/test';

export const Locators = (page: Page) => ({
    joinForFreeButton : page.getByRole('main').getByRole('button', { name: 'Join for Free' }),
    signInButton : page.getByRole('button', { name: 'Sign In' }),
    plansAndPricingButton : page.locator('nav').filter({ hasText: 'Plans & Pricing' }).getByRole('link'),
    storiesButton : page.getByRole('link', { name: 'Stories', exact: true }),
    groupsButton : page.getByRole('link', { name: 'Groups', exact: true }),
    peopleTab : page.locator('#people').getByRole('img'),
    peopleTabFamilyTreesDropdownButton : page.getByRole('menuitem', { name: 'Family Trees' }),
    peopleTabConnectionsDropdownButton : page.getByRole('menuitem', { name: 'Connections' }),
    searchTab : page.locator('#search').getByRole('img'),
    searchTabHistoricalRecordSearchDropdownButton : page.getByRole('menuitem', { name: 'Historical Record Search' }),
    searchTabNewspaperSearchDropdownButton : page.getByRole('menuitem', { name: 'Newspaper Search' }),
});

