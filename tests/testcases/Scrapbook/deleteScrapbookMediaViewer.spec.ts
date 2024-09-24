import test from "../../../utilities/TestFixtures";
import { faker } from "@faker-js/faker";

test.describe("Delete Scrapbook Media Viewer", () => {
  test("Delete Scrapbook Media Viewer", async ({
    uploadMediaToScrapbookSteps,
    loginSteps,
  }) => {
    const metaDataContent = faker.lorem.lines(2);
    const metaDataDetails = JSON.parse(`{
            "title": "Image",
            "location": "USA",
            "date": "2024"

        }`);
    await loginSteps.login();
    await uploadMediaToScrapbookSteps.createAMetaDataForMediaFile(
      metaDataDetails,
      metaDataContent,
      true
    );
  });
});
test.afterEach(async ({ page }) => {
  page.close();
});
