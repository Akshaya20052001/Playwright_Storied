import test from "../../../utilities/TestFixtures";
import { faker } from "@faker-js/faker";

test.describe("Add Scrapbook MetaData Media Viewer", () => {
  test("Add Scrapbook MetaData Media Viewer", async ({
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
      false
    );
  });
});
test.afterEach(async ({ page }) => {
  page.close();
});
