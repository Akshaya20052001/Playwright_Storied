import { HomePage, RecipePage, CreateStory, StoryDetailsPage, PublishPage, EditStoryPage, ScrapbookPage } from "../pages";
import { Page } from "@playwright/test";
export class createFamilyRecipeStorySteps {
    private readonly homePage: HomePage;
    private readonly recipePage: RecipePage;
    private readonly createStory: CreateStory;
    private readonly storyDetails: StoryDetailsPage;
    private readonly publishPage: PublishPage;
    private readonly editStoryPage: EditStoryPage;
    private readonly scrapbookPage: ScrapbookPage;

    constructor(page: Page) {
        this.homePage = new HomePage(page);
        this.recipePage = new RecipePage(page);
        this.createStory = new CreateStory(page);
        this.storyDetails = new StoryDetailsPage(page);
        this.publishPage = new PublishPage(page);
        this.editStoryPage = new EditStoryPage(page);
        this.scrapbookPage = new ScrapbookPage(page);
    }

    async createFamilyRecipeStory(
        recipeDetails: JSON,
        recipeTitle: string,
        recipeContent: string,
        recipeEdit: boolean,
        deleteRecipeStory: boolean,
        scrapbookMediaFiles: boolean,
        toggleStory: boolean
    ): Promise<void> {
        await this.homePage.clickMyStories();
        await this.homePage.clickAddStories();
        await this.recipePage.clickTopDropdown();
        await this.recipePage.clickFamilyRecipesButton();
        await this.recipePage.clickRecipeName(recipeTitle);
        await this.recipePage.clickRecipeBackground(recipeContent);
        await this.recipePage.clickRecipeIngredients(recipeContent);
        await this.recipePage.clickRecipeDirections(recipeContent);
        await this.recipePage.clickAdditionalDetails(recipeContent);
        await this.recipePage.clickLocation(recipeDetails['location']);
        await this.recipePage.clickDate(recipeDetails['date']);
        await this.recipePage.clickOnAddMedia();
        await this.recipePage.clickOnAddFromYourScrapbook();
        if (scrapbookMediaFiles) {
            await this.scrapbookPage.selectingTheSingleMediaFile();
        }
        else {
            await this.scrapbookPage.clickmultiplemediaFiles()
        }
        await this.recipePage.clickOnSelectButton();
        await this.createStory.clickNextButton();
        await this.recipePage.clickRecipeTags(recipeDetails['tags']);
        await this.storyDetails.clickOnStoryNextButton();
        await this.publishPage.publicbutton();
        await this.publishPage.donebutton();
        await this.publishPage.validateStoryConfermationMessage();
        await this.homePage.clickRecipesButton();
        await this.recipePage.clickOnRecipeStory(recipeTitle);
        if (recipeEdit) {
            await this.editStoryPage.clickOptionButton();
            await this.editStoryPage.editButton();
            await this.editStoryPage.editTitle(recipeTitle);
            await this.createStory.clickNextButton();
            await this.storyDetails.clickOnStoryNextButton();
            await this.publishPage.donebutton();
            await this.homePage.clickRecipesButton();
            await this.recipePage.clickOnRecipeStory(recipeTitle);

        }
        if (deleteRecipeStory) {
            await this.editStoryPage.clickOptionButton();
            await this.editStoryPage.clickOnDeleteStory();
            await this.editStoryPage.clickOnDeleteStoryConfermation();
            await this.publishPage.validatingStoryDeleteConfirmationMessage();

        }
        if (toggleStory) {
            await this.editStoryPage.clickOptionButton();
            await this.editStoryPage.editButton();
            await this.recipePage.clickTopDropdown();
            await this.recipePage.clickStoryTopDropdown();
            await this.createStory.clickNextButton();
            await this.storyDetails.clickOnStoryNextButton();
            await this.publishPage.donebutton();
            await this.publishPage.validateStoryConfermationMessage();
        }
    }
}
