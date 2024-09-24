import { Page } from "playwright/test";
import * as selectors from './recipePageSelectors'
export class RecipePage {
    public readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }
    async clickTopDropdown() {
        await this.page.waitForTimeout(3000);
        await this.page.click(selectors.topDropdown)
    }

    async clickStoryTopDropdown() {
        await this.page.click(selectors.storyTopDropdown)
    }

    async clickFamilyRecipesButton() {
        await this.page.click(selectors.familyRecipesButton)
    }

    async clickRecipeName(recipeName: string) {
        await this.page.click(selectors.recipeName)
        await this.page.fill(selectors.recipeName, recipeName)
    }

    async clickRecipeBackground(recipeBackground: string) {
        await this.page.click(selectors.recipeBackground)
        await this.page.fill(selectors.recipeBackground, recipeBackground)
    }

    async clickRecipeIngredients(recipeIngredients: string) {
        await this.page.click(selectors.recipeIngredients)
        await this.page.waitForTimeout(3000);
        await this.page.fill(selectors.recipeIngredients, recipeIngredients)
    }

    async clickRecipeDirections(recipeDirections: string) {
        await this.page.click(selectors.recipeDirections)
        await this.page.fill(selectors.recipeDirections, recipeDirections)
    }

    async clickAdditionalDetails(additionalDetails: string) {
        await this.page.click(selectors.additionalDetails)
        await this.page.fill(selectors.additionalDetails, additionalDetails)
    }

    async clickLocation(location: string) {
        await this.page.click(selectors.location)
        await this.page.fill(selectors.location, location)
    }

    async clickDate(date: string) {
        await this.page.click(selectors.date)
        await this.page.fill(selectors.date, date)
    }

    async clickOnAddMedia() {
        await this.page.click(selectors.clickAddMedia)
    }

    async clickOnAddFromYourScrapbook() {
        await this.page.click(selectors.clickAddFromYourScrapbook)
        await this.page.waitForTimeout(3000);
    }

    async clickOnSelectButton() {
        await this.page.click(selectors.selectButton)
    }

    async clickRecipeTags(tags: string) {
        await this.page.click(selectors.recipeTags)
        await this.page.fill(selectors.recipeTags, tags)
        await this.page.click(selectors.tagssuggestion(tags))
    }

    async clickOnRecipeStory(recipeTitle: string) {
        await this.page.click(selectors.recipeTitleNameValidation(recipeTitle));
        await this.page.waitForTimeout(3000);
        await this.page.isVisible(selectors.recipeTitleNameValidation(recipeTitle))
    }
}