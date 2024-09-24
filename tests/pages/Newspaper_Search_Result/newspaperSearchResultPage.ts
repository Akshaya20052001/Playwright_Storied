import { Page } from "playwright/test";
import * as selectors from './newspaperSearchResultPageSelectors'
export class NewspaperSearchResultPage {
    public readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }
    async clickOnNewspaperResultField() {
        await this.page.click(selectors.clickNewspaper)
    }
    async performNewsPaperSearchActions() {
        await this.page.waitForTimeout(5000);
        const iframeHandle = await this.page.frameLocator(selectors.newsPaperSearchFirstFrame);
        await this.page.waitForTimeout(3000);
        const innerFrame = iframeHandle.frameLocator(selectors.newsPaperSearchSecondFrame);
        await innerFrame.locator(selectors.newsPaperSearchSaveButton).click();
        await this.page.waitForTimeout(3000);
        await innerFrame.locator(selectors.newsPaperSearchNextButton).click();
        await innerFrame.locator(selectors.newsPaperSearchSkipButton).click();
        await this.page.bringToFront();
    }

    async creatingAStartAStory() {
        await this.page.click(selectors.newsPaperSearchStartAStory)
    }

}