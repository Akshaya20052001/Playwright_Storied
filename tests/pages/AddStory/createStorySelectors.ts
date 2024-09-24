export const createStoryTitle ='textarea[placeholder="Story Title"]'
export const location ='input[placeholder="Location"]'
export const date ='input[placeholder="Date"]'
export const Storydescription ='//div[@class="ql-editor ql-blank"]'
export const nextButton ='//span[text()="Next"]'
//string interpolation
export const categories = (categoryName:string)=>`//input[@value='${categoryName}']`