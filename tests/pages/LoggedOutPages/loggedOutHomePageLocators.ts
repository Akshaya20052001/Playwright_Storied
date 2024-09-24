import { Page } from '@playwright/test';

export const Locators = (page: Page) => ({
    lohpSignInButton : page.getByRole('button', { name: 'Sign In' }),
    lohpJoinForFreeButtontwo : page.getByRole('main').getByRole('button', { name: 'Join for Free' }),
    lohpCreateYourAccountButton : page.getByRole('heading', { name: 'Create your Account' }),
    lohpStartYourTreeButton : page.getByRole('button', { name: 'Start Your Tree' }),
    lohpCreateYourAccountButton2 : page.getByRole('heading', { name: 'Create your Account' }),
    lohpLearMoreButton : page.getByRole('button', { name: 'Learn More' }),
    lohpCreateAGroupButton : page.getByRole('button', { name: 'Create a Group' }),
    lohpPlansAndPricingButton : page.getByRole('button', { name: 'Plans & Pricing' }),
    lohpHistoricalSearchButton : page.getByRole('button', { name: 'Search Historical Records' }),
    lohpNewspaperSearchButton : page.getByRole('button', { name: 'Search Newspapers' }),
    lohpGetStartedButton : page.getByRole('button', { name: 'Get Started' }),
});