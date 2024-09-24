import { Page } from "playwright";
import * as selectors from "./scrapbookPageSelectors";

export class ScrapbookPage {
  private readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async clickOnScrapbookUpload() {
    await this.page.click(selectors.scrapbookUpload);
  }

  async selectingTheSingleMediaFile() {
    await this.page.click(selectors.selectPhotos);
    const myItemList = await this.page.$$(selectors.selectPhotoMedia);
    for (let i = 0; i < 4; i++) {
      await myItemList[i].click();
    }
  }

  async clickmultiplemediaFiles() {
    await this.page.click(selectors.selectPhotos);
    await this.selectmediaItems(selectors.selectPhotoMedia, 11);
    await this.page.click(selectors.selectAudio);
    await this.selectmediaItems(selectors.selectAudioMedia, 6);
    await this.page.click(selectors.selectPDF);
    await this.selectmediaItems(selectors.selectPDFMedia, 6);
  }
  async selectmediaItems(selector: string, count: number) {
    await this.page.click(selector);
    var myItemList = await this.page.$$(selector);
    for (let i = 0; i < count; i++) {
      await myItemList[i].click();
    }
  }

  async clickOnPhotoMediaFromScrapbook() {
    await this.page.click(selectors.selectPhotos);
  }

  async clickOnScrapbookMediaViewer() {
    await this.page.click(selectors.selectMediaViewer);
  }

  async clickOnScrapbookMediaViewerIconButton() {
    await this.page.click(selectors.iconButton);
  }

  async clickOnScrapbookEditMediaViewer() {
    await this.page.click(selectors.editMediaViewer);
  }

  async createScrapbookMediaTitle(Title: string) {
    await this.page.click(selectors.mediaTitle);
    await this.page.fill(selectors.mediaTitle, Title);
  }

  async createScrapbookMediaDate(date: string) {
    await this.page.click(selectors.mediaDate);
    await this.page.fill(selectors.mediaDate, date);
  }

  async createScrapbookMediaLocation(location: string) {
    await this.page.click(selectors.mediaLocation);
    await this.page.fill(selectors.mediaLocation, location);
  }

  async createScrapbookMediaDescription(description: string) {
    await this.page.click(selectors.mediaDescription);
    await this.page.fill(selectors.mediaDescription, description);
  }

  async clickOnSaveButton() {
    await this.page.click(selectors.saveButton);
  }

  async validateOnMetaDataMediaTitle(metaDataTitle: string) {
    await this.page.isVisible(
      selectors.metaDataTitleNameValidation(metaDataTitle)
    );
  }

  async clickOnNewspapersMediaFromScrapbook() {
    await this.page.click(selectors.selectNewspapers);
    const myItemList = await this.page.$$(selectors.selectNewspapersMedia);
    await this.page.waitForTimeout(3000);
    for (let i = 0; i < 1; i++) {
      await myItemList[i].click();
    }
  }

  async clickOnScrapbookDeleteMediaViewer() {
    await this.page.click(selectors.deletePhoto);
  }

  async clickOnScrapbookDeleteMediaConfirmation() {
    await this.page.click(selectors.deletePopUpConfirmation);
  }

  async validateScracpbookDeleteMediaConfermationMessage() {
    await this.page.waitForTimeout(3000);
    await this.page.waitForSelector(
      selectors.validateDeleteMediaConfermationMessage
    );
    const msg = await this.page.$(
      selectors.validateDeleteMediaConfermationMessage
    );
    const message = await msg?.evaluate((el) => el.textContent);
    console.log(message);
  }
}
