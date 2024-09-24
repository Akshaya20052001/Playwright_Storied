import { Page } from "playwright";
import * as selectors from './newspaperPageSelectors'
export class NewspaperPage {
    public readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }
    async clickNewsPaperSearchNameField(name: string) {
        await this.page.click(selectors.nameField)
        await this.page.fill(selectors.nameField, name);
    }
    async ClicknewsPaperSearchButton() {
        await this.page.click(selectors.newsPaperSearchButton);
    }
    async clickNewspaperBackButton() {
        await this.page.click(selectors.newspaperBackButton)
    }
}