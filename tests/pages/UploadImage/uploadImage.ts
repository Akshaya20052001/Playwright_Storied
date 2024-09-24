import { Page } from '@playwright/test';
import { expect, Locator } from '@playwright/test';
import path from 'path';
import { Locators } from '../Groups/groupPageLocators';

export class UploadImage {
    public readonly page: Page;
    private readonly locators: ReturnType<typeof Locators>;

    constructor(page: Page) {
        this.page = page;
        this.locators = Locators(page);
    }

    async uploadImage(file: string) {
        const fileChooserPromise = this.page.waitForEvent('filechooser');
        await this.locators.uploadNewImage.click();
        const fileChooser = await fileChooserPromise;
        await fileChooser.setFiles(path.join('data/ImageData/', file));
    }

    async verifyModalIsDisplayed(modalName: string) {
        const ExpectedHeaderElement = "Invalid File";
        switch (modalName) {
            case "Invalid File Type":
                await expect(this.locators.invalidFileTypeHeaderElement).toBeVisible();
                const ActuallHeaderElement = await this.locators.invalidFileTypeHeaderElement.textContent();
                expect(ActuallHeaderElement).toEqual(ExpectedHeaderElement);
                await expect(this.locators.invalidFileTypeTextElement).toBeVisible();
                await expect(this.locators.invalidFileTypeChangeFileButtonElement).toBeVisible();
                break;
            case "Image is too large":
                await expect(this.locators.invalidFileTypeHeaderElement).toBeVisible();
                const ActualHeaderElementImageTooLarge = await this.locators.invalidFileTypeHeaderElement.textContent();
                expect(ActualHeaderElementImageTooLarge).toEqual(ExpectedHeaderElement);
                await expect(this.locators.invalidFileTypeTextElement).toBeVisible();
                await expect(this.locators.invalidFileTypeChangeFileButtonElement).toBeVisible();
                break;
            case "Crop Your Photo":
                await Promise.all([
                    expect(this.locators.resizeModalHeaderElement).toBeVisible(),
                    expect(this.locators.resizeModalZoomInButtonElement).toBeVisible(),
                    expect(this.locators.resizeModalZoomOutButtonElement).toBeVisible(),
                    expect(this.locators.resizeModalCancelButtonElement).toBeVisible(),
                    expect(this.locators.resizeModalSaveButtonElement).toBeVisible(),
                ]);
                break;
        }
    }

    async clickResizeModalZoomIn() {
        await this.locators.resizeModalZoomInButtonElement.click();
    }

    async clickResizeModalSaveButton() {
        await this.locators.resizeModalSaveButtonElement.click();
    }
}