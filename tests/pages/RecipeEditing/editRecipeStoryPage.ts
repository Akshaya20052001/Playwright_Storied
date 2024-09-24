import { Page } from "playwright";
import * as selectors from './editRecipeStoryPageSelectors'
export class RecipeEditPage {
    public readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }
    async optionButton() {
        await this.page.click(selectors.optionButton)
    }
    async editButton() {
        await this.page.click(selectors.editStoryButton)
    }
    async editTitle(editStoryTitle: string) {
        await this.page.click(selectors.editStoryTitle);
        if (await this.page.$(selectors.editStoryTitle)) {
            await this.page.click(selectors.editStoryTitle, { clickCount: 3 });
            await this.page.press(selectors.editStoryTitle, 'Backspace');
        }
        await this.page.fill(selectors.editStoryTitle, editStoryTitle);
    }

}