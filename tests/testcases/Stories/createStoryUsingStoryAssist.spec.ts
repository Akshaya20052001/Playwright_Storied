import test from "../../../utilities/TestFixtures";
import { faker } from "@faker-js/faker";

test.describe("Create Story Using Story Assist", () => {
  test("Create Story Using Story Assist", async ({
    createStorySteps,
    loginSteps,
  }) => {
    const storyTitle = faker.lorem.words();
    const storyContent = faker.lorem.lines(50);
    const storyDetails = JSON.parse(`{
            "title": "${storyTitle}",
            "location": "USA",
            "date": "2024",
            "tags": "Ravi",
            "mainTheme": "Happy",
            "storyDetail": "Funny"
               
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
      false,
      filePaths,
      true,
      true,
      false,
      false
    );
  });
});
test.afterEach(async ({ page }) => {
  page.close();
});
