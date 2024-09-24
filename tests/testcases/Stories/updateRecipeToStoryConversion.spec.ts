import test from "../../../utilities/TestFixtures";
import { faker } from "@faker-js/faker";

test.describe("Update Recipe to Story Conversion", () => {
  test("Update Recipe to Story Conversion", async ({
    loginSteps,
    createFamilyRecipeStorySteps,
  }) => {
    const recipeTitle = faker.lorem.words();
    const recipeContent = faker.lorem.lines(20);
    const recipeDetails = JSON.parse(`{
            "recipeName": "${recipeTitle}",
            "location": "USA",
            "date": "2024",
            "tags": "Ravi"
        }`);

    await loginSteps.login();
    await createFamilyRecipeStorySteps.createFamilyRecipeStory(
      recipeDetails,
      recipeTitle,
      recipeContent,
      false,
      false,
      true,
      true
    );
  });
});
test.afterEach(async ({ page }) => {
  page.close();
});
