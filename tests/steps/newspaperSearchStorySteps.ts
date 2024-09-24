import { HomePage, NewspaperPage, NewspaperSearchResultPage } from "../pages";
import { Page, expect } from "@playwright/test";
export class NewspaperSearchStorySteps {
  private readonly homePage: HomePage;
  private readonly newspaperPage: NewspaperPage;
  private readonly newspapersearchResultPage: NewspaperSearchResultPage;
  constructor(page: Page) {
    this.homePage = new HomePage(page);
    this.newspaperPage = new NewspaperPage(page);
    this.newspapersearchResultPage = new NewspaperSearchResultPage(page);
  }

  async newspaperSearchStory(name: string): Promise<void> {
    await this.homePage.clickNewspaperSearch();
    await this.newspaperPage.clickNewsPaperSearchNameField(name);
    await this.newspaperPage.ClicknewsPaperSearchButton();
    await this.newspapersearchResultPage.clickOnNewspaperResultField();
    await this.newspapersearchResultPage.performNewsPaperSearchActions();
    await this.newspapersearchResultPage.creatingAStartAStory();
  }
}
