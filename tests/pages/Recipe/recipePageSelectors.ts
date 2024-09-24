export const topDropdown = '//div[@data-testid="icon-mIconChevronDown"]'
export const storyTopDropdown = '//span[text()="Story"]'
export const familyRecipesButton = 'span:has-text("Family Recipe")'
export const recipeName = '//textarea[@placeholder="Recipe Name"]'
export const recipeBackground = '//div[contains(@data-placeholder,"origin story")]'
export const recipeIngredients = '//div[contains(@data-placeholder,"cups")]'
export const recipeDirections = '//div[contains(@data-placeholder,"oven")]'
export const additionalDetails = '//div[contains(@data-placeholder,"Serves")]'
export const location = '//input[@role="combobox"]'
export const date = '//input[@placeholder="When was this recipe first created?"]'
export const clickAddMedia = '//input[@id="no-upload-photo"]'
export const clickAddFromYourScrapbook = '//div[text()="Add from your Scrapbook"]'
export const selectButton = '//span[text()="Select"]'
export const recipeTitleNameValidation = (recipeTitle: string) => `//span[text()='${recipeTitle}']//ancestor::div[contains(@class,"story-card hover")]`;
export const recipeTags = '//input[@placeholder="Add someone from your tree"]';
export const tagssuggestion = (tagssuggestion: string) => `//span[text()='${tagssuggestion}']`;
