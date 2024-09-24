import { Page, expect, Locator } from '@playwright/test';
import { Locators } from './groupPageLocators';
import * as locators from './groupPageLocators'

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export class GroupPage {
    public readonly page: Page;
    private readonly locators: ReturnType<typeof Locators>;

    constructor(page: Page) {
        this.page = page;
        this.locators = Locators(page);
    }

    async clickOnXIcon() {
        await this.locators.cropYourPhotoXIcon.click();
    }

    async clickAddFromYourScrapbook() {
        await this.locators.addFromYourScrapbookButtonElement.click();
    }

    async selectImageFromScrapbook() {
        await expect(this.locators.addMediaScrapbookHearder).toBeVisible();
        await this.locators.selectImageFromScrapbook.click();
        await expect(this.locators.selectButtonElement).toBeEnabled();
        await this.locators.selectButtonElement.click();
    }

    async clickOnCancelButton() {
        await this.locators.cropYourPhotoCancelButton.click();
    }

    async clickOnExistingGroupOnSideNavBar() {
        await this.locators.existingGroupIconSideNavBar.click();
    }

    async removeGroupImageIfGroupHasAnExistingBackgroundImage() {
        if (await this.locators.addedGroupImage.isVisible()) {
            await this.removeExistingBackgroundImage();
        }
    }

    async verifyUserShouldbeAtGroupsPage() {
        await expect(this.locators.membersTab).toBeVisible();
    }

    async hoverOnFileDrop() {
        await delay(2000);
        await this.locators.groupImageFileDrop.hover();
    }

    async verifyUploadedGroupImageVisible() {
        await delay(1500);
        await expect(this.locators.addedGroupImage).toBeVisible();
        await expect(this.locators.shrunkenHeagGroupImage).toBeVisible();
    }

    async clickOnCameraIcon() {
        await this.locators.cameraIcon.click();
    }

    async removeExistingBackgroundImage() {
        await this.locators.addedGroupImage.click();
        await this.locators.removeBackgroundImage.click();
    }

    async clickOnResizeBackgroundModal() {
        await delay(5000);
        await this.locators.addedGroupImage.click();
        await this.locators.resizeBackgroundImage.click();
    }

    async clickOnChooseNewBackgroundImage() {
        await this.locators.addedGroupImage.click();
        await this.locators.chooseNewBackgrondImage.click();
    }

    async clickOncancelCropYourModal(action: string) {
        switch (action) {
            case "Click On Cancel Icon":
                await this.locators.resizeModalCancelButtonElement.click();
                break;
            case "Click On X Icon":
                await this.locators.resizeModalCrossIconButtonElement.click();
                break;
        }
    }

    async clickGroups() {
        await this.page.waitForTimeout(3000);
        await this.page.click(locators.groupName)
    }

    async storyTitleName(titleName: string) {
        await this.page.isVisible(locators.title(titleName))
    }
}