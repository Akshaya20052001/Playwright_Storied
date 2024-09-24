import { Page } from "playwright";
import * as selectors from './publishPageSelectors'
export class PublishPage {
    public readonly page: Page
    constructor(page: Page) {
        this.page = page;
    }
    async publicbutton() {
        await this.page.click(selectors.publicbutton)
    }

    async privatebutton() {
        await this.page.click(selectors.privatebutton)
    }

    async donebutton() {
        await this.page.click(selectors.donebutton)
    }

    async validateStoryConfermationMessage() {
        await this.page.waitForTimeout(3000);
        await this.page.waitForSelector(selectors.validateConfermationMessage)
        const msg = await this.page.$(selectors.validateConfermationMessage);
        const message = await msg?.evaluate((el) => el.textContent);
        console.log(message);
    }

    async groupCheckBox() {
        await this.page.click(selectors.clickCheckBox);
    }

    async clickCreateStory(storyTitle: string) {
        await this.page.click(selectors.storyTitleValidation(storyTitle));
        await this.page.waitForTimeout(3000);
        await this.page.isVisible(selectors.storyTitleValidation(storyTitle))
    }

    async clickOnTaggedStoryPerson() {
        await this.page.click(selectors.taggedStoryPerson)
    }
    
    async clickOnViewTaggedStoryPerson() {
        await this.page.click(selectors.viewTagedStoryPerson)
    }

    async clickStories() {
        await this.page.click(selectors.stories)
    }

    async clickBackButton() {
        await this.page.click(selectors.backButton)
    }

    async validatingStoryDeleteConfirmationMessage() {
        await this.page.waitForTimeout(3000);
        await this.page.waitForSelector(selectors.validateStoryDeleteConfermationMessage)
        const msg = await this.page.$(selectors.validateStoryDeleteConfermationMessage);
        const message = await msg?.evaluate((el) => el.textContent);
        console.log(message);

    }
}
