import test from "../../../utilities/TestFixtures";
import { faker } from "@faker-js/faker";

test.describe("Create Story With Tagging Pet Profile", () => {
  test("Create Story With Tagging Pet Profile", async ({
    createStorySteps,
    loginSteps,
  }) => {
    const storyTitle = faker.lorem.words();
    const storyContent = faker.lorem.lines(50);
    const storyDetails = JSON.parse(`{
            "title": "${storyTitle}",
            "location": "USA",
            "date": "2024",
            "tags": "Robin David",
            "searchPeopleTag": "Aakash Ravi",
            "tagRelationship": "Pet"
               
        }`);
    const filePaths = ["./Attachments/Image.png"];
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
