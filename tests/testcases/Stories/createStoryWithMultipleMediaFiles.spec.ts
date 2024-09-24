import test from "../../../utilities/TestFixtures";
import { faker } from "@faker-js/faker";

test.describe("Create Story With Multiple Media Files", () => {
  test("Create Story With Multiple Media Files", async ({
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
    const filePaths = [
      "Image.png",
      "chocobar.png",
      "coneice.png",
      "burger.png",
      "Audio.mp3",
      "Audio2.mp3",
      "IndianRecipe.pdf",
      "MealsAndMore.pdf",
    ];
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
      false,
      false,
      false
    );
  });
});
test.afterEach(async ({ page }) => {
  page.close();
});
