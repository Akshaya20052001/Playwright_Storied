import { Page } from "@playwright/test";
import * as selectors from './storyDetailsPageSelectors'
import * as publishPageSelectors from '../Publish/publishPageSelectors'


export class StoryDetailsPage {
    public readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    async uploadMultipleMedia(filePaths: string[]): Promise<void> {
        await this.page.waitForTimeout(2000);
        const locator = await this.page.$('//input[@type="file"]');
        await locator?.waitForElementState('stable', { timeout: 6000 });
        for (const filePath of filePaths) {
            const [fileChooserEvent] = await Promise.all([
                this.page.waitForEvent('filechooser'),//@ts-ignore
                locator.dispatchEvent('click'),
            ]);
            await fileChooserEvent.setFiles(`./data/Attachments/${filePath}`);
            await this.page.waitForTimeout(4000);
        }
    }

    async clickStoryTags(tags: string) {
        await this.page.click(selectors.storyTags)
        await this.page.fill(selectors.storyTags, tags)
        await this.page.click(selectors.tagssuggestion(tags))

    }

    async clickOnStoryNextButton() {
        await this.page.click(selectors.nextButton)
    }

    async clickAddPeopleInStory(name: string) {
        await this.page.click(selectors.storyTags);
        await this.page.fill(selectors.storyTags, name);
        await this.page.waitForTimeout(3000);
        await this.page.getByRole('option', { name: `+ Add ${name}` }).click();
        await this.page.getByPlaceholder('Search your people').click();
        await this.page.getByPlaceholder('Search your people').fill(name);
        await this.page.locator('select[name="sr"]').selectOption('family');
        await this.page.getByRole('button', { name: 'Skip' }).click();
        await this.page.getByRole('button', { name: 'Save' }).click();
    }

    async viewStoryInPeoplePage(title: string, peopleName: string) {
        await this.page.waitForTimeout(3000);
        await this.page.waitForSelector(
            publishPageSelectors.validateConfermationMessage
        );
        await this.page.locator("span > div").first().click();
        await this.page.waitForTimeout(5000);
        await this.page.getByText(title).isVisible();
        await this.page.getByText(peopleName).click();
        await this.page
            .getByRole("link", { name: `View ${peopleName.split(" ")[0]}` })
            .click();
        await this.page.getByRole("button", { name: "Stories" }).click();
        await this.page.waitForTimeout(6000);
        await this.page.locator("span > div").first().click();
        await this.page.waitForTimeout(6000);
        await this.page.getByText(title).isVisible();
    }

    async clickOnTheStoryAddTagPeopleorPet(tags: string) {
        await this.page.click(selectors.storyTags)
        await this.page.fill(selectors.storyTags, tags)
        await this.page.waitForTimeout(5000);
        await this.page.click(selectors.addSuggestion)
    }

    async clickCreateRelationship(searchPeopleTag: string) {
        await this.page.click(selectors.searchYourPeople);
        await this.page.fill(selectors.searchYourPeople, searchPeopleTag);
        await this.page.waitForTimeout(5000);
        await this.page.click(selectors.addSuggestion);
    }

    async clickSelectRelationship() {
        const dropdown = await this.page.$(selectors.selectRelationship);

        //@ts-ignore
        await dropdown.selectOption({ value: 'pet' });
    }

    async clickNextButton() {
        await this.page.click(selectors.createRelationshipNextButton)
    }

    async clickSaveButton() {
        await this.page.click(selectors.saveButton)
    }

    async clickStoryAssist() {
        await this.page.click(selectors.storyAssist)
    }

    async clickUseStoryAssist() {
        await this.page.click(selectors.useStoryAssist)
    }

    async clickStoryTone() {
        await this.page.click(selectors.storyTone)
    }

    async fillStoryMainTheme(theme: string) {
        await this.page.click(selectors.storyMainTheme)
        await this.page.fill(selectors.storyMainTheme, theme)
    }

    async fillStoryDetail(detail: string) {
        await this.page.click(selectors.storyDetail)
        await this.page.fill(selectors.storyDetail, detail)
    }

    async clickGenerateDraft() {
        await this.page.click(selectors.generateDraft)
    }

}