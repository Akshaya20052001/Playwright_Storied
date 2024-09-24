import { Page } from '@playwright/test';
import { getAccessCode } from '@utilities/config';
import { getEnv } from '@utilities/config';
import { Locators } from './accessPageLocators';

export class AccessPage {

    public readonly page: Page;
    private readonly locators: ReturnType<typeof Locators>;

    constructor(page: Page) {
        this.page = page;
        this.locators = Locators(page);
    }

    async goto(url: string) {
        await this.page.goto(url);
        if (getEnv() !== 'PROD') {
            await this.setAccessCode(getAccessCode());
        }
    }

    async setAccessCode(accessCode: string) {
        await this.locators.accessCodePlaceholder.click();
        await this.locators.accessCodePlaceholder.fill(accessCode);
        await this.locators.accessCodeSubmitButton.click();
    }
}
