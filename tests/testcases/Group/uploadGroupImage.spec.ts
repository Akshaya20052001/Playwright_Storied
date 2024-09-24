import { test } from "@utilities/TestFixtures";
import { groupLoginCredentials } from "@data/TestDataCredentials";
import { getBaseUrl } from "@utilities/config";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
const fileName = [
  { file: "Background_Image.jpg" },
  { file: "Background_Image.png" },
];
const cancelCropYourModal = [
  { action: "Click On Cancel Icon" },
  { action: "Click On X Icon" },
];

test.describe("@Regression Group Image Operations", () => {
  test.beforeEach(
    async (
      {
        accessPage,
        loggedOutHomePage,
        loginPage,
        homePage,
        groupPage,
      },
      testInfo
    ) => {
      // Extend the timeout for all tests running this hook by 30 seconds.
      testInfo.setTimeout(testInfo.timeout + 60000);
      await accessPage.goto(getBaseUrl());
      await loggedOutHomePage.clickSignInButtonLohp();
      await loginPage.login(
        groupLoginCredentials.Email,
        groupLoginCredentials.Password
      );
      await homePage.verifyOnHomepage();
      await groupPage.clickOnExistingGroupOnSideNavBar();
      await groupPage.verifyUserShouldbeAtGroupsPage();
      await delay(3000);
      await groupPage.removeGroupImageIfGroupHasAnExistingBackgroundImage();
      await groupPage.hoverOnFileDrop();
      await groupPage.clickOnCameraIcon();
    }
  );

  fileName.forEach((data) => {
    test(
      `@Regression Verify User is able to upload a group image from Upload New image Option In Add Media ${data.file}`,
      async ({ groupPage, uploadImage }) => {
        await uploadImage.uploadImage(data.file);
        await uploadImage.verifyModalIsDisplayed("Crop Your Photo");
        await uploadImage.clickResizeModalZoomIn();
        await uploadImage.clickResizeModalSaveButton();
        await groupPage.verifyUploadedGroupImageVisible();
      }
    );
  });

  test(
    "@Regression Verify User is able to remove the Existing Group Image by selecting Remove Background Image Option",
    async ({ groupPage, uploadImage }) => {
      await uploadImage.uploadImage("Background_Image.png");
      await uploadImage.verifyModalIsDisplayed("Crop Your Photo");
      await uploadImage.clickResizeModalZoomIn();
      await uploadImage.clickResizeModalSaveButton();
      await groupPage.verifyUploadedGroupImageVisible();
      await groupPage.removeExistingBackgroundImage();
    }
  );

  test(
    "@Regression verify Crop Your Photo modal should be visible on clicking the Resize background photo dropdown on the Group Image",
    async ({ groupPage, uploadImage }) => {
      await uploadImage.uploadImage("Background_Image.png");
      await uploadImage.verifyModalIsDisplayed("Crop Your Photo");
      await uploadImage.clickResizeModalZoomIn();
      await uploadImage.clickResizeModalSaveButton();
      await groupPage.verifyUploadedGroupImageVisible();
      await groupPage.clickOnResizeBackgroundModal();
      await uploadImage.verifyModalIsDisplayed("Crop Your Photo");
    }
  );

  test(
    "@Regression verify user should replace the Existing Group Image by selecting Choose New Backgroung Photo Option On the Group Image Dropdown",
    async ({ groupPage, uploadImage }) => {
      await uploadImage.uploadImage("Background_Image.png");
      await uploadImage.verifyModalIsDisplayed("Crop Your Photo");
      await uploadImage.clickResizeModalZoomIn();
      await uploadImage.clickResizeModalSaveButton();
      await groupPage.verifyUploadedGroupImageVisible();
      await groupPage.clickOnChooseNewBackgroundImage();
      await uploadImage.uploadImage("Background_Image.png");
      await uploadImage.clickResizeModalSaveButton();
      await groupPage.verifyUploadedGroupImageVisible();
    }
  );

  cancelCropYourModal.forEach((data) => {
    test(
      `@Regression verify the user should be able to close the Crop Your Photo modal by clicking on cancel Icon on Crop Your Photo modal ${data.action}`,
      async ({ groupPage, uploadImage }) => {
        await uploadImage.uploadImage("Background_Image.png");
        await uploadImage.verifyModalIsDisplayed("Crop Your Photo");
        await groupPage.clickOncancelCropYourModal(data.action);
      }
    );
  });

  test(
    "@Regression Validate the Image is too large modal while uploading the Group image",
    async ({ uploadImage }) => {
      await uploadImage.uploadImage("Image_15mb+.png");
      await uploadImage.verifyModalIsDisplayed("Image is too large");
    }
  );

  test(
    "@Regression Validate the Invalid File Type modal while uploading an invalid Background image for the Group image",
    async ({ uploadImage }) => {
      await uploadImage.uploadImage("Invalid_File_Type.txt");
      await uploadImage.verifyModalIsDisplayed("Invalid File Type");
    }
  );

  test(
    "@Regression verify user should add background image for Group from Add from your Scarpbook",
    async ({ groupPage, uploadImage }) => {
      await groupPage.clickAddFromYourScrapbook();
      await delay(3000);
      await groupPage.selectImageFromScrapbook();
      await uploadImage.verifyModalIsDisplayed("Crop Your Photo");
      await delay(1000);
      await uploadImage.clickResizeModalZoomIn();
      await uploadImage.clickResizeModalSaveButton();
      await groupPage.verifyUploadedGroupImageVisible();
    }
  );

  test.afterEach(async ({ page }) => {
    await page.close();
  });
});