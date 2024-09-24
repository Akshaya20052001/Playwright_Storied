import test from "../../../utilities/TestFixtures";
import { faker } from "@faker-js/faker";

test.describe("Newspaper Search Story", () => {
  test("Newspaper Search Story", async ({
    createStorySteps,
    loginSteps,
    newspaperSearchStorySteps,
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
    await newspaperSearchStorySteps.newspaperSearchStory("Pery");
    await createStorySteps.createStories(
      storyDetails,
      storyContent,
      false,
      storyTitle,
      false,
      true,
      false,
      filePaths,
      true,
      false,
      true,
      false
    );
  });
});

test.afterEach(async ({ page }) => {
  page.close();
});
