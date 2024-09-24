import test from "../../../utilities/TestFixtures";
import { faker } from "@faker-js/faker";

test.describe("Recipe Story Deletion", () => {
  test("Recipe Story Deletion", async ({
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
      true,
      true,
      false
    );
  });
});
test.afterEach(async ({ page }) => {
  page.close();
});
