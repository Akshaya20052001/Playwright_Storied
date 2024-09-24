import test from "../../../utilities/TestFixtures";
import { faker } from "@faker-js/faker";

test.describe("GroupStory", () => {
  test("Group Story", async ({
    createStorySteps,
    loginSteps,
    groupStorySteps,
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
      true,
      storyTitle,
      true,
      false,
      false,
      filePaths,
      true,
      false,
      false,
      false
    );
    await groupStorySteps.groupField(storyDetails);
  });
});
test.afterEach(async ({ page }) => {
  page.close();
});
