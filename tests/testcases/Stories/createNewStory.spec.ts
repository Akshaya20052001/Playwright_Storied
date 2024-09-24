import test from '../../../utilities/TestFixtures';
import { faker } from '@faker-js/faker';


test.describe('Create New Story', () => {
    test('Create New Story', async ({ createStorySteps, loginSteps}) => {
        const storyTitle = faker.lorem.words();
        const storyContent = faker.lorem.lines(50);
        const storyDetails = JSON.parse(`{
            "title": "${storyTitle}",
            "location": "USA",
            "date": "2024",
            "tags": "Ravi"
               
        }`);
        
        const filePaths = ['Image.png',]
        await loginSteps.login()
        await createStorySteps.createStories(storyDetails, storyContent, false, storyTitle, true, false, false,filePaths,true,false,false,false);
    })
})
test.afterEach(async ({ page }) => {
    await page.close();
  });
