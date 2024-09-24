import { HomePage, ScrapbookPage, StoryDetailsPage } from "../pages";
import { expect, Page } from "@playwright/test";

export class UploadMediaToScrapbookSteps {
  private readonly homePage: HomePage;
  private readonly scrapbookPage: ScrapbookPage;
  private readonly storyDetailsPage: StoryDetailsPage;
  constructor(page: Page) {
    this.homePage = new HomePage(page);
    this.scrapbookPage = new ScrapbookPage(page);
    this.storyDetailsPage = new StoryDetailsPage(page);
  }

  async uploadMultipleMediaFileToScrapbook(filePaths: string[]): Promise<void> {
    await this.homePage.clickOnMyScrapbook();
    await this.scrapbookPage.clickOnScrapbookUpload();
    await this.storyDetailsPage.uploadMultipleMedia(filePaths);
  }

  async createAMetaDataForMediaFile(
    metaDataDetails: JSON,
    metaDataContent: string,
    deleteMediaViewer: Boolean
  ): Promise<void> {
    await this.homePage.clickOnMyScrapbook();
    await this.scrapbookPage.clickOnPhotoMediaFromScrapbook();
    await this.scrapbookPage.clickOnScrapbookMediaViewer();
    await this.scrapbookPage.clickOnScrapbookMediaViewerIconButton();
    if (deleteMediaViewer) {
      await this.scrapbookPage.clickOnScrapbookDeleteMediaViewer();
      await this.scrapbookPage.clickOnScrapbookDeleteMediaConfirmation();
      await this.scrapbookPage.validateScracpbookDeleteMediaConfermationMessage();
    } else {
      await this.scrapbookPage.clickOnScrapbookEditMediaViewer();
      await this.scrapbookPage.createScrapbookMediaTitle(
        metaDataDetails["title"]
      );
      await this.scrapbookPage.createScrapbookMediaDate(
        metaDataDetails["date"]
      );
      await this.scrapbookPage.createScrapbookMediaLocation(
        metaDataDetails["location"]
      );
      await this.scrapbookPage.createScrapbookMediaDescription(metaDataContent);
      await this.scrapbookPage.clickOnSaveButton();
      await this.scrapbookPage.validateOnMetaDataMediaTitle(
        metaDataDetails["title"]
      );
    }
  }
}
