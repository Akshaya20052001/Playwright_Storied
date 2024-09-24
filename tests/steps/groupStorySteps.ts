import { GroupPage } from "../pages";
import { Page, expect } from "@playwright/test";
export class GroupStorySteps {
    private readonly groupPage: GroupPage;
    constructor(page: Page) {
        this.groupPage = new GroupPage(page);
    }

    async groupField(storyDetails: JSON): Promise<void> {
        await this.groupPage.clickGroups();
        await this.groupPage.storyTitleName(storyDetails['title']);
    }

}