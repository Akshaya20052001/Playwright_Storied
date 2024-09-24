import test from "../../../utilities/TestFixtures";

test.describe("Upload Media Files To Scrapbook", () => {
  test("Upload Media Files To Scrapbook", async ({
    loginSteps,
    uploadMediaToScrapbookSteps,
  }) => {
    const filePaths = ["Image.png", "Audio.mp3", "IndianRecipe.pdf"];
    await loginSteps.login();
    await uploadMediaToScrapbookSteps.uploadMultipleMediaFileToScrapbook(
      filePaths
    );
  });
});

test.afterEach(async ({ page }) => {
  page.close();
});
