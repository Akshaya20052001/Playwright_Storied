import { AccessPage, LoginPage, LoggedOutHomePage } from '../pages';
import { expect, Page } from "@playwright/test";
import { getBaseUrl } from '@utilities/config';
import { storiedDataDefaultCredentials } from '@data/TestDataCredentials';
import { nonSubscriptionCredentials } from '@data/TestDataCredentials';



export class LoginSteps {
    private readonly accessPage: AccessPage;
    private readonly loginPage: LoginPage;
    private readonly loggedOutHomePage: LoggedOutHomePage;
    constructor(page: Page) {
        this.accessPage = new AccessPage(page);
        this.loginPage = new LoginPage(page);
        this.loggedOutHomePage = new LoggedOutHomePage(page);
    }

    async login(): Promise<void> {
        await this.accessPage.goto(getBaseUrl());
        await this.loggedOutHomePage.clickSignInButtonLohp();
        await this.loginPage.setEmail(storiedDataDefaultCredentials.Email);
        await this.loginPage.setPassword(storiedDataDefaultCredentials.Password);
        await this.loginPage.clickSignInButton();
    }

    async nonSubscriptionLogin(): Promise<void> {
        await this.accessPage.goto(getBaseUrl());
        await this.loggedOutHomePage.clickSignInButtonLohp();
        await this.loginPage.setEmail(nonSubscriptionCredentials.Email);
        await this.loginPage.setPassword(nonSubscriptionCredentials.Password);
        await this.loginPage.clickSignInButton();
    }
}    
