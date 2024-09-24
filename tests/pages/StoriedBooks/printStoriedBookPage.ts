import { Page, expect, Locator } from "@playwright/test";
import { Locators } from "./printStoriedBookPageLocators";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export class PrintStoriedBookPage {
  private readonly page: Page;
  private readonly locators: ReturnType<typeof Locators>;

  constructor(page: Page) {
    this.page = page;
    this.locators = Locators(page);
  }

  async clickOnPrintStoriedBookLink() {
    await this.locators.printstoriedBookLinkElement.click();
  }

  async verifyUserIsAtBooksOptionsPage() {
    await expect(this.locators.booksOptionsHeaderElement).toBeVisible();
  }

  async verifyUserAtChooseStoryOrderPage() {
    await expect(this.locators.chooseStoryOrderHeaderElement).toBeVisible();
  }

  async clickBackButtonOfbooksOptionsPage() {
    await this.locators.booksOptionsBackButtonElement.click();
  }

  async clickNextButtonOfChooseStoryOrderPage() {
    await this.locators.chooseStoryOrderNextButtonElement.click();
  }

  async verifyOnPrintStoriedBookPage() {
    await expect(this.locators.storiedBooksTextElement).toBeVisible();
  }

  async clickOnGetStartedButtonElement() {
    await this.locators.getStartedButton.click();
  }

  async selectStoreisNextButtonElement() {
    await expect(this.locators.selectStoriesNextButton).toBeDisabled();
  }

  async closeSelectedStoriesXIcon() {
    await this.locators.closeSelectedStoriesXIcon.click();
  }

  async selectStoriesForStoriedBook() {
    await this.locators.sarahStoryTitle.click();
    await this.locators.historyStoryTitle.click();
  }

  async selectSingleStoryInselectStoriesForStoriedBook() {
    await this.locators.selectFirstStory.click();
  }

  async clickNextButtonOfSelectStories() {
    await expect(this.locators.selectStoriesNextButton).toBeVisible();
    await this.locators.selectStoriesNextButton.click();
  }

  async clickOnquickViewElement() {
    await this.locators.sarahStoryTitle.hover();
    await this.locators.quickViewElement.click();
  }

  async verifyStoryTitle(sarahStoryTitle: string) {
    const actualSarahStoryHeading = await this.locators.sarahStoryHeading.textContent();
    expect(actualSarahStoryHeading).toEqual(sarahStoryTitle);
  }

  async verifyStoryElements() {
    await Promise.all([
      expect(this.locators.likeButtonElement).toBeVisible(),
      expect(this.locators.addCommentButtonElement).toBeVisible(),
      expect(this.locators.uploadStoryElement).toBeVisible(),
    ])
  }

  async clickCloseStoryXIcon() {
    await this.locators.closeStoryXIcon.click();
  }

  async verifyNextButtonOfSelectStoriesIsVisible() {
    await expect(this.locators.selectStoriesNextButton).toBeVisible();
  }

  async selectImageFromScrapbookStoriedBook() {
    await expect(this.locators.addCoverImageSrapBookHeader).toBeVisible();
    await this.locators.selectImageFromScrapbook.click();
    await this.locators.selectButtonElement.click();
  }

  async verifyNextButtonOfSelectStoriesEnabled() {
    await expect(this.locators.selectStoriesNextButton).toBeEnabled();
  }

  async chooseStoryOrderPageBackButtonElement() {
    await expect(this.locators.chooseStoryOrderBackButtonElement).toBeVisible();
    await this.locators.chooseStoryOrderBackButtonElement.click();
  }

  async verifySelectStoriesforThisStoriedBookPage() {
    await expect(this.locators.SelectStoriesforThisStoriedBookPageHeaderElement).toBeVisible();
  }

  async setTitleNameOnTheBooksOptionPage(titleName: string) {
    await this.locators.titleInputBox.fill(titleName);
    await this.locators.booksOptionsBar.click();
  }

  async removeTitleNameIfAlreadyExists() {
    if (expect(this.locators.titleNameIsEmpty).not.toBeVisible) {
      await this.locators.titleInputBox.clear();
    }
  }

  async verifyCharacterLimitValidation(modal: string, givenString: string) {
    switch (modal) {
      case "title":
        await expect(this.locators.characterLimitForTitle).toBeVisible();
        expect(this.locators.titleNameOnTheCoverPage.textContent).not.toEqual(givenString);
        break;
      case "subtitle":
        await expect(this.locators.characterLimitForSubtitle).toBeVisible();
        expect(this.locators.frontCoverSubtitle.textContent).not.toEqual(givenString);
        break;
      case "Foreword":
        expect(this.locators.characterLimitForForeword).toBeVisible();
        expect(this.locators.addedForewordText.textContent).not.toEqual(givenString);
        break;
    }
  }

  async replaceTheExistingTitleOnInputBox(newTitleName: string) {
    await this.locators.inputTitleBoxWithExistingTitle.click();
    await this.locators.inputTitleBoxWithExistingTitle.clear();
    await this.locators.inputTitleBoxWithExistingTitle.fill(newTitleName);
  }

  async replaceTheExistingSubtitle(newSubTitleName: string) {
    await this.locators.subtitlePlaceHolder.click();
    await this.locators.subtitlePlaceHolder.clear();
    await this.locators.subtitlePlaceHolder.fill(newSubTitleName);
  }

  async clickCloseButtonChooseStoryOrderPage() {
    await this.locators.crossButtonChooseStoryOrderPage.click();
  }

  async verifyTheNumberOfStoriesInFirstDraft() {
    const numberOfSelectedStories = await this.locators.expectedStoryCountInTheFirstDraftProject.textContent();
    expect(numberOfSelectedStories.charAt(0)).toEqual("2");
  }

  async clickOnAddSubtitile() {
    await this.locators.addSubtitleButton.click();
  }

  async verifySubtitleGotRemoved() {
    await Promise.all([
      expect(this.locators.addSubtitleButton).toBeVisible(),
      expect(this.locators.frontCoverSubtitle).not.toBeVisible(),
      expect(this.locators.trashIconSubtitle).not.toBeVisible(),
      expect(this.locators.subtitleNameOntheSubtitleInputBox).not.toBeVisible(),
    ])
  }

  async setSubtitleName(subtitle: string) {
    await this.locators.subtitlePlaceHolder.click();
    await this.locators.subtitlePlaceHolder.fill(subtitle);
    await this.locators.booksOptionsBar.click();
    await this.locators.booksOptionsBar.click();
  }

  async verifySavedSubtitleVisibleOnBooksPage(subtitleName: string) {
    await Promise.all([
      expect(this.locators.frontCoverSubtitle).toHaveText(subtitleName),
      expect(this.locators.trashIconSubtitle).toBeVisible(),
      expect(this.locators.subtitleNameOntheSubtitleInputBox).toHaveValue(subtitleName),
    ])
  }

  async removeSubtitleName() {
    await expect(this.locators.trashIconSubtitle).toBeVisible();
    await this.locators.trashIconSubtitle.click();
  }

  async removeTitleName() {
    await this.locators.titleNameOntheInputBox.click();
    await this.locators.titleNameOntheInputBox.clear();
  }

  async veryStoriedWatermark() {
    await expect(this.locators.storiedWatermark).toBeVisible();
  }

  async verifyTitleGotRemoved(titleName: string) {
    await Promise.all([
      expect(this.locators.titleNameOntheInputBox).not.toHaveValue(titleName),
      expect(this.locators.titleNameOnTheCoverPage).not.toHaveText(titleName),
      expect(this.locators.titleNameOntheMidBookPage).not.toHaveText(titleName),
    ])
  }

  async clickOnCloseButtonBooksOptionsPage() {
    await this.locators.closeButtonElementInBooksOptionPage.click();
  }

  async verifyUploadedCoverImageIsVisible() {
    await Promise.all([
      expect(this.locators.addedImageOnFrontCoverPage).toBeVisible(),
      expect(this.locators.addedCoverImageOnCoverImageBlock).toBeVisible(),
    ]);
  }

  async clickOnChangeImageStoriedBook() {
    await this.locators.changeCoverImageButton.click();
  }

  async clickOnAddPhoto() {
    expect(this.locators.coverImageText).toBeVisible();
    await delay(2000);
    await this.locators.addPhotoButtonBooksOptionPage.click();
  }

  async clickOnCropAndResizeButton() {
    await delay(1000);
    await this.locators.resizeAndCropImageButtonStoriedBook.click();
  }

  async moveTitleFrontCoverPage(place: string) {
    await delay(1000);
    await this.locators.moveTitleToTopButton.scrollIntoViewIfNeeded();

    switch (place) {
      case "MoveToTop":
        await this.locators.moveTitleToTopButton.hover();
        await this.locators.moveTitleToTopButton.click();
        break;

      case "MoveToBottom":
        await this.locators.moveTitleToTopButton.hover();
        await this.locators.moveTitleToTopButton.click();
        await this.locators.moveTitleToBottom.click();
        break;
    }
  }

  async setTheCoverImageToHalfPage() {
    await delay(1000);
    await this.locators.coverImageHalfPageLabel.scrollIntoViewIfNeeded();
    await this.locators.coverImageHalfPageLabel.focus();
    await this.locators.coverImageHalfPageLabel.dblclick();
  }

  async setTheCoverImageToFullPage() {
    await this.locators.coverImageFullPageLabel.click();
  }

  async removeTheFrontCoverPageImage() {
    await this.locators.noImageLabelCoverImage.click();
  }

  async verifyCoverImageShouldNotVisibleOnCoverPage() {
    expect(this.locators.addedImageOnFrontCoverPage).not.toBeVisible();
  }

  async verifyMovedTitleIsVisible(place: string) {
   

    switch (place) {
      case "MoveToTop":
        expect(this.locators.titleMovedToTop).toBeVisible();
        break;

      case "MoveToBottom":
        expect(this.locators.titleMovedToBottom).toBeVisible();
        break;
    }
  }

  async verifySavedOptionsForTheDraftStoriedBooks(option: string, Name: string) {

    await this.locators.continueButtonElementForDraftBook.click();
    await this.clickNextButtonOfSelectStories();
    await this.verifyNextButtonOfSelectStoriesIsVisible();
    await this.clickNextButtonOfChooseStoryOrderPage();
    await this.verifyUserIsAtBooksOptionsPage();

    switch (option) {
      case "checkTitle":
        await this.verifySavedTitleNameVisibleOnBooksPage(Name);
        break;

      case "checkSubtitle":
        await this.verifySavedSubtitleVisibleOnBooksPage(Name);
        break;
    }
  }

  async clickAddForeword() {
    await this.locators.addForewordButtonElement.click();
  }

  async verifyForewordModalElementsVisisble() {
    await Promise.all([
      expect(this.locators.addForewordModalHeading).toBeVisible(),
      expect(this.locators.forewordSubtitle).toBeVisible(),
      expect(this.locators.addForewordCancelButton).toBeVisible(),
      expect(this.locators.addForewordSaveButton).toBeVisible(),
      expect(this.locators.addForewordModalXIconButton).toBeVisible(),
    ])
  }

  async closeTheDiscardForewordModalByClickingXIcon() {
    await this.clickCancelForewordModal("Click On X Icon");
    await this.locators.discardForewardXIcon.click();
    expect(this.locators.discardForewordHeading).not.toBeVisible();
  }

  async setAForewordForStoriedBook(forewardContent: string) {
    await this.locators.addForewordTextInputBox.fill(forewardContent);
  }

  async clickOnSaveAndCloseButtonDiscardForewardModal() {
    await this.clickCancelForewordModal("Click On X Icon");
    await this.locators.saveAndCloseButtonInDiscardForewordModal.click();
  }

  async clickSaveButtonInForewordModal() {
    await this.locators.addForewordSaveButton.click();
  }

  async clickCancelForewordModal(action: string) {
    switch (action) {
      case "Click On Cancel Icon":
        await this.locators.addForewordCancelButton.click();
        await this.verifyDiscardForewardModalIsvisible();
        break;
      case "Click On X Icon":
        await this.locators.addForewordModalXIconButton.click();
        await this.verifyDiscardForewardModalIsvisible();
        break;
    }
  }

  async discardForewordButtonOnDiscardForewordModal() {
    await this.locators.discardForewordButton.click();
  }

  async verifyDiscardForewardModalIsvisible() {
    await Promise.all([
      expect(this.locators.discardForewordHeading).toBeVisible(),
      expect(this.locators.discardForewordButton).toBeVisible(),
      expect(this.locators.saveAndCloseButtonInDiscardForewordModal).toBeVisible(),
      expect(this.locators.discardForewardXIcon).toBeVisible(),
    ])
  }

  async verifyAddedForewordVisible(forwardContent: string) {
    await expect(this.locators.forewordTrashIcon).toBeVisible();
    await delay(1500);
    expect(this.locators.addedForewordText).toHaveText(forwardContent);
  }

  async replaceExistingForeword(NewforewardContent: string) {
    await this.locators.addedForewordText.click();
    await this.locators.addForewordTextInputBox.clear();
    await this.setAForewordForStoriedBook(NewforewardContent);
  }

  async clickOnForewordTrashIcon() {
    await this.locators.forewordTrashIcon.click();
  }

  async verifyExistingForewordGotRemoved() {
    expect(this.locators.addForewordButtonElement).toBeVisible();
  }

  async verifySavedTitleNameVisibleOnBooksPage(titleName: string) {
    await Promise.all([
      expect(this.locators.titleNameOntheInputBox).toHaveValue(titleName),
      expect(this.locators.titleNameOnTheCoverPage).toHaveText(titleName),
      expect(this.locators.titleNameOntheMidBookPage).toHaveText(titleName),
    ])
  }

  async selectColorFromColorPalette(color: string) {
    switch (color) {
      case "PaleGray":
        await this.locators.bookColorLabel.scrollIntoViewIfNeeded();
        await this.locators.bookColorLabel.click();
        await this.locators.paleGrayColor.click();
        break;
      case "MistyBlue":
        await this.locators.mistyBlueColor.click();
        break;
      case "RosePink":
        await this.locators.rosePinkColor.click();
        break;
      case "Sand":
        await this.locators.sandColor.click();
        break;
      case "Charcoal":
        await this.locators.charcoalColor.click();
        break;
      case "ForestGreen":
        await this.locators.forestGreenColor.click();
        break;
      case "TigerEye":
        await this.locators.tigerEyeColor.click();
        break;
      case "MidnightBlue":
        await this.locators.midnightBlueColor.click();
        break;
      case "DarkLavender":
        await this.locators.darkLavenderColor.click();
        break;
      case "Wine":
        await this.locators.wineColor.click();
        break;
      case "Clay":
        await this.locators.clayColor.click();
        break;
      case "DeepOceanBlue":
        await this.locators.deepOceanBlueColor.click();
        break;
      case "Slate":
        await this.locators.slateColor.click();
        break;
      case "Cherry":
        await this.locators.cherryColor.click();
        break;
      case "SkyBlue":
        await this.locators.skyBlueColor.click();
        break;
      case "Ruby":
        await this.locators.rubyColor.click();
        break;
      case "Barley":
        await this.locators.barleyColor.click();
        break;
      case "Lavender":
        await this.locators.lavenderColor.click();
        break;
      case "CobaltBlue":
        await this.locators.cobaltBlueColor.click();
        break;
    }
  }


  async verifyTheAppliedColorOnCoverPage(color: string) {
    switch (color) {
      case "PaleGray":
        await expect(this.locators.selectedPaleGrayColorName).toBeVisible();
        await expect(this.locators.appliedPaleGrayColor).toBeVisible();
        break;
      case "MistyBlue":
        await expect(this.locators.selectedMistyBlueColorName).toBeVisible();
        await expect(this.locators.appliedMistyBlueColor).toBeVisible();
        break;
      case "RosePink":
        await expect(this.locators.selectedRosePinkColorName).toBeVisible();
        await expect(this.locators.appliedRosePinkColor).toBeVisible();
        break;
      case "Sand":
        await expect(this.locators.selectedSandColorName).toBeVisible();
        await expect(this.locators.appliedSandColor).toBeVisible();
        break;
      case "Charcoal":
        await expect(this.locators.selectedCharcoalColorName).toBeVisible();
        await expect(this.locators.appliedCharcoalColor).toBeVisible();
        break;
      case "ForestGreen":
        await expect(this.locators.selectedForestGreenColorName).toBeVisible();
        await expect(this.locators.appliedForestGreenColor).toBeVisible();
        break;
      case "TigerEye":
        await expect(this.locators.selectedTigerEyeColorName).toBeVisible();
        await expect(this.locators.appliedTigerEyeColor).toBeVisible();
        break;
      case "MidnightBlue":
        await expect(this.locators.selectedMidnightBlueColorName).toBeVisible();
        await expect(this.locators.appliedMidnightBlueColor).toBeVisible();
        break;
      case "DarkLavender":
        await expect(this.locators.selectedDarkLavenderColorName).toBeVisible();
        await expect(this.locators.appliedDarkLavenderColor).toBeVisible();
        break;
      case "Wine":
        await expect(this.locators.selectedWineColorName).toBeVisible();
        await expect(this.locators.appliedWineColor).toBeVisible();
        break;
      case "Clay":
        await expect(this.locators.selectedClayColorName).toBeVisible();
        await expect(this.locators.appliedClayColor).toBeVisible();
        break;
      case "DeepOceanBlue":
        await expect(this.locators.selectedDeepOceanBlueColorName).toBeVisible();
        await expect(this.locators.appliedDeepOceanBlueColor).toBeVisible();
        break;
      case "Slate":
        await expect(this.locators.selectedSlateColorName).toBeVisible();
        await expect(this.locators.appliedSlateColor).toBeVisible();
        break;
      case "Cherry":
        await expect(this.locators.selectedCherryColorName).toBeVisible();
        await expect(this.locators.appliedCherryColor).toBeVisible();
        break;
      case "SkyBlue":
        await expect(this.locators.selectedSkyBlueColorName).toBeVisible();
        await expect(this.locators.appliedSkyBlueColor).toBeVisible();
        break;
      case "Ruby":
        await expect(this.locators.selectedRubyColorName).toBeVisible();
        await expect(this.locators.appliedRubyColor).toBeVisible();
        break;
      case "Barley":
        await expect(this.locators.selectedBarleyColorName).toBeVisible();
        await expect(this.locators.appliedBarleyColor).toBeVisible();
        break;
      case "Lavender":
        await expect(this.locators.selectedLavenderColorName).toBeVisible();
        await expect(this.locators.appliedLavenderColor).toBeVisible();
        break;
      case "CobaltBlue":
        await expect(this.locators.selectedCobaltBlueColorName).toBeVisible();
        await expect(this.locators.appliedCobaltBlueColor).toBeVisible();
        break;
    }
  }
}