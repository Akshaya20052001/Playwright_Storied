import { Page } from "@playwright/test";
import * as selectors from './createStorySelectors'
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export class CreateStory {
    public readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }
    async clickCreateStoryTitle(Title: string) {
        await this.page.waitForTimeout(8000);
        await this.page.click(selectors.createStoryTitle)
        await this.page.fill(selectors.createStoryTitle, Title)
    }
    async clickLocation(location: string) {
        await this.page.click(selectors.location)
        await this.page.fill(selectors.location, location)
    }
    async clickDate(date: string) {
        await this.page.click(selectors.date)
        await this.page.fill(selectors.date, date)
    }

    async clickStorydescription(Storydescription: string) {
        await this.page.click(selectors.Storydescription)
        await this.page.fill(selectors.Storydescription, Storydescription)
    }
    async clickNextButton() {
        await this.page.click(selectors.nextButton)
    }
    async clickCategories(categoryName: string) {
        await this.page.click(selectors.categories(categoryName))
    }
}

