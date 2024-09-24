import { test } from '@utilities/TestFixtures';
import { storiedBookDefaultCredentials } from '@data/TestDataCredentials';
import { getBaseUrl } from '@utilities/config';

const fileName = [
  { file: "Background_Image.jpg" },
  { file: "Background_Image.png" },
];

const cancelCropYourModal = [
  { action: "Click On Cancel Icon" },
  { action: "Click On X Icon" },
];

const moveTitle = [
  { place: "MoveToTop" },
  { place: "MoveToBottom" },
];

test.beforeEach(async ({ accessPage, loggedOutHomePage, homePage, loginPage, printStoriedBookPage }, testInfo) => {
  // Extend timeout for all tests running this hook by 30 seconds.
  testInfo.setTimeout(testInfo.timeout + 60000);
  await accessPage.goto(getBaseUrl());
  await loggedOutHomePage.clickSignInButtonLohp();
  await loginPage.setEmail(storiedBookDefaultCredentials.Email);
  await loginPage.setPassword(storiedBookDefaultCredentials.Password);
  await loginPage.clickSignInButton();
  await homePage.verifyOnHomepage();
  await printStoriedBookPage.clickOnPrintStoriedBookLink();
  await printStoriedBookPage.verifyOnPrintStoriedBookPage();
  await printStoriedBookPage.clickOnGetStartedButtonElement();
  await printStoriedBookPage.selectSingleStoryInselectStoriesForStoriedBook();
  await printStoriedBookPage.clickNextButtonOfSelectStories();
  await printStoriedBookPage.verifyNextButtonOfSelectStoriesIsVisible();
  await printStoriedBookPage.clickNextButtonOfChooseStoryOrderPage();
  await printStoriedBookPage.verifyUserIsAtBooksOptionsPage();
});

fileName.forEach(data => {
  test(`@Regression @Smoke verify user able to add cover photo through upload new image ${data.file}`,
    async ({ printStoriedBookPage, groupPage, uploadImage }) => {
      await printStoriedBookPage.clickOnAddPhoto();
      await uploadImage.uploadImage(data.file);
      await uploadImage.verifyModalIsDisplayed("Crop Your Photo");
      await uploadImage.clickResizeModalZoomIn();
      await uploadImage.clickResizeModalSaveButton();
      await printStoriedBookPage.verifyUploadedCoverImageIsVisible();
    });
});

test(`@Regression verify user able to change the existing Image `,
  async ({ printStoriedBookPage, uploadImage }) => {
    await printStoriedBookPage.clickOnAddPhoto();
    await uploadImage.uploadImage("Profile_Image.jpg");
    await uploadImage.verifyModalIsDisplayed("Crop Your Photo");
    await uploadImage.clickResizeModalZoomIn();
    await uploadImage.clickResizeModalSaveButton();
    await printStoriedBookPage.verifyUploadedCoverImageIsVisible();
    await printStoriedBookPage.clickOnChangeImageStoriedBook();
    await uploadImage.uploadImage("Profile_Image.jpg");
    await uploadImage.verifyModalIsDisplayed("Crop Your Photo");
    await uploadImage.clickResizeModalZoomIn();
    await uploadImage.clickResizeModalSaveButton();
    await printStoriedBookPage.verifyUploadedCoverImageIsVisible();
  });

test(`@Regression verify user able to crop & resize the existing Image`,
  async ({ printStoriedBookPage, uploadImage }) => {
    await printStoriedBookPage.clickOnAddPhoto();
    await uploadImage.uploadImage("Profile_Image.jpg");
    await uploadImage.verifyModalIsDisplayed("Crop Your Photo");
    await uploadImage.clickResizeModalZoomIn();
    await uploadImage.clickResizeModalSaveButton();
    await printStoriedBookPage.verifyUploadedCoverImageIsVisible();
    await printStoriedBookPage.clickOnCropAndResizeButton();
    await uploadImage.clickResizeModalZoomIn();
    await uploadImage.clickResizeModalSaveButton();
  });

cancelCropYourModal.forEach(data => {
  test(`@Regression verify the user should be able to close the Crop Your Photo modal in Books Options Page by clicking on cancel Icon on Crop Your Photo modal ${data.action}`,
    async ({ printStoriedBookPage, groupPage, uploadImage }) => {
      await printStoriedBookPage.clickOnAddPhoto();
      await uploadImage.uploadImage("Profile_Image.jpg");
      await uploadImage.verifyModalIsDisplayed("Crop Your Photo");
      await groupPage.clickOncancelCropYourModal(data.action);
    });
});

moveTitle.forEach(data => {
  test(`@Regression verify user able to move the title when user uploads the cover image  ${data.place}`,
    async ({ printStoriedBookPage, uploadImage }) => {
      await printStoriedBookPage.clickOnAddPhoto();
      await uploadImage.uploadImage("Profile_Image.jpg");
      await uploadImage.verifyModalIsDisplayed("Crop Your Photo");
      await uploadImage.clickResizeModalZoomIn();
      await uploadImage.clickResizeModalSaveButton();
      await printStoriedBookPage.verifyUploadedCoverImageIsVisible();
      await printStoriedBookPage.moveTitleFrontCoverPage(data.place);
      await printStoriedBookPage.verifyMovedTitleIsVisible(data.place);
    });
});

test(`@Regression verify user is able to change the image from full page to half page vice versa`,
  async ({ printStoriedBookPage, uploadImage }) => {
    await printStoriedBookPage.clickOnAddPhoto();
    await uploadImage.uploadImage("Profile_Image.jpg");
    await uploadImage.verifyModalIsDisplayed("Crop Your Photo");
    await uploadImage.clickResizeModalZoomIn();
    await uploadImage.clickResizeModalSaveButton();
    await printStoriedBookPage.verifyUploadedCoverImageIsVisible();
    await printStoriedBookPage.setTheCoverImageToHalfPage();
    await uploadImage.verifyModalIsDisplayed("Crop Your Photo");
    await uploadImage.clickResizeModalZoomIn();
    await uploadImage.clickResizeModalSaveButton();
    await printStoriedBookPage.setTheCoverImageToFullPage();
    await uploadImage.verifyModalIsDisplayed("Crop Your Photo");
    await uploadImage.clickResizeModalZoomIn();
    await uploadImage.clickResizeModalSaveButton();
  });

test(`@Regression verify when user selects the No image option image should be removed in the cover page`,
  async ({ printStoriedBookPage, uploadImage }) => {
    await printStoriedBookPage.clickOnAddPhoto();
    await uploadImage.uploadImage("Profile_Image.jpg");
    await uploadImage.verifyModalIsDisplayed("Crop Your Photo");
    await uploadImage.clickResizeModalZoomIn();
    await uploadImage.clickResizeModalSaveButton();
    await printStoriedBookPage.verifyUploadedCoverImageIsVisible();
    await printStoriedBookPage.removeTheFrontCoverPageImage();
    await printStoriedBookPage.verifyCoverImageShouldNotVisibleOnCoverPage();
  });

test(`@Regression validate the Image is too Large Modal while uploading the cover Image`,
  async ({ printStoriedBookPage, uploadImage }) => {
    await printStoriedBookPage.clickOnAddPhoto();
    await uploadImage.uploadImage("Image_15mb+.png");
    await uploadImage.verifyModalIsDisplayed("Image is too large");
  });

test(`@Regression validate the Invalid File Type while uploading the cover Image`,
  async ({ printStoriedBookPage, uploadImage }) => {
    await printStoriedBookPage.clickOnAddPhoto();
    await uploadImage.uploadImage("Invalid_File_Type.txt");
    await uploadImage.verifyModalIsDisplayed("Invalid File Type");
  });

test(`@Regression verify user able to upload image from the scrap book`,
  async ({ printStoriedBookPage, groupPage, uploadImage }) => {
    await printStoriedBookPage.clickOnAddPhoto();
    await groupPage.clickAddFromYourScrapbook();
    await printStoriedBookPage.selectImageFromScrapbookStoriedBook();
    await uploadImage.verifyModalIsDisplayed("Crop Your Photo");
    await uploadImage.clickResizeModalZoomIn();
    await uploadImage.clickResizeModalSaveButton();
    await printStoriedBookPage.verifyUploadedCoverImageIsVisible();
  });

test.afterEach(async ({ page }) => {
  await page.close();
});