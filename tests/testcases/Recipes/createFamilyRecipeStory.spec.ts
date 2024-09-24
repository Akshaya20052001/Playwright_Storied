import test from "../../../utilities/TestFixtures";
import { faker } from "@faker-js/faker";

test.describe("Create Family Recipe Story", () => {
  test("Create Family Recipe Story", async ({
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
      false
    );
  });
});
test.afterEach(async ({ page }) => {
  page.close();
});
