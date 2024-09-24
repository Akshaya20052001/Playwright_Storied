export const storyTags = '//input[@placeholder="Add People or Pets"]';
export const nextButton = '//span[text()="Next"]'
export const tagssuggestion = (tagssuggestion: string) => `//span[text()='${tagssuggestion}']`;
export const addMediaButton = '//input[@id="no-upload-photo"]';
export const selectingExistingButton = '//div[text()="Select Existing"]';
export const uploadNewButton = '//div[text()="Upload New"]';
export const imageUpload = '(//img[@class="justified-image object-cover h-full w-full"])[1]';
export const selectButton = '//span[text()="Select"]';
export const closePopUp = '//div//span[text()="Add Media"]//following::button[contains(@class,"outline-none")]';
export const searchYourPeople ='//input[@placeholder="Search your people"]'
export const selectRelationship = 'select[name="sr"]'
export const saveButton = '//span[text()="Save"]'
export const addSuggestion ='//div[@role="presentation"]'
export const createRelationshipNextButton = '//button[@id="addAction"]//span[text()="Next"]'
export const storyAssist ='//div[text()="StoryAssist"]'
export const useStoryAssist ='//span[text()="Use StoryAssist"]'
export const storyTone ='//span[text()="Happy"]'
export const storyMainTheme ='//input[@id="theme"]'
export const storyDetail = '//input[@placeholder="Add a story detail"]'
export const generateDraft ='//div[text()="Generate Draft"]'