import test from "../../../utilities/TestFixtures";
import { faker } from "@faker-js/faker";

test.describe("Create Recipe Story From Scrapbook", () => {
  test("Create Recipe Story From Scrapbook", async ({
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
      false,
      false
    );
  });
});
test.afterEach(async ({ page }) => {
  page.close();
});
