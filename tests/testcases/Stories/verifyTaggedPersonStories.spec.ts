import test from "../../../utilities/TestFixtures";
import { faker } from "@faker-js/faker";

test.describe("Verify Tagged Person Stories", () => {
  test("Verify Tagged Person Stories", async ({
    createStorySteps,
    loginSteps,
  }) => {
    const storyTitle = faker.lorem.words();
    const storyContent = faker.lorem.lines(50);
    const storyDetails = JSON.parse(`{
            "title": "${storyTitle}",
            "location": "USA",
            "date": "2024",
            "tags": "Ravi"
               
        }`);
    const filePaths = ["Image.png"];
    await loginSteps.login();
    await createStorySteps.createStories(
      storyDetails,
      storyContent,
      false,
      storyTitle,
      true,
      false,
      true,
      filePaths,
      true,
      false,
      false,
      false
    );
  });
});
test.afterEach(async ({ page }) => {
  page.close();
});
