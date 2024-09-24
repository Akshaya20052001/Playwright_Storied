import { Page } from '@playwright/test';


export const Locators = (page: Page) => ({
    navAvatar : page.locator('.avtar-circle-medium'),
    logOutButton : page.getByRole('menuitem', { name: 'icon Sign out' }),
    settingsButton :page.getByRole('menuitem', { name: 'icon Settings' })
});

export const myStories = '//div[@data-testid="icon-mIconBookPersion"]'
export const addStory = 'span:has-text("Add Story")'
export const newsPaperSearch = 'span:has-text("Newspaper Search")'
export const subscribe = 'div[class^="flex items-center md:min-w-"] span:nth-child(1)'
export const recipes = 'span:has-text("Recipes")'
export const myScrapbook = '//div[@data-testid="icon-mIconPhotoGallery"]'

