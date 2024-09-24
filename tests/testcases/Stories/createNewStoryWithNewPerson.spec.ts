import test from "../../../utilities/TestFixtures";
import { faker } from "@faker-js/faker";

test.describe("Create New Story with new tag person", () => {
  test("Create New Story with new tag person", async ({
    createStorySteps,
    loginSteps,
  }) => {
    const loginDetails = JSON.parse(`{
            "accessCode": "UHY4Q9",
            "email": "umeshman@cybage.com",
            "password": "Cybage@123"
        }`);
    const randomDate = faker.date.between("2024-01-01", "2024-12-31");
    const title = faker.lorem.words();
    const date = randomDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
    const content = faker.lorem.lines(20);
    const peopleName = `${faker.name.firstName()} ${faker.name.lastName()}`;
    const storyDetails = {
      title,
      location: "USA",
      date,
      content,
      peopleName,
    };
    await loginSteps.login();
    await createStorySteps.createStoriesWithNewPerson(storyDetails);
  });
});
test.afterEach(async ({ page }) => {
  page.close();
});
