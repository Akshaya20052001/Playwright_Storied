export const  scrapbookUpload = '//span[text()="Upload"]'
export const selectPhotos ='//span[text()="Photos"]'
export const selectPhotoMedia = '//div[@class="relative opacity-1"]'
export const selectAudio ='//span[text()="Audio"]'
export const selectAudioMedia = '//div[contains(@class,"bg-black opacity")]'
export const selectPDF ='//span[text()="PDF"]'
export const selectPDFMedia ='//div[contains(@class,"relative bg-gray")]'
export const selectMediaViewer ='(//div[@class="relative opacity-1"])[1]'
export const iconButton ='//div[@data-testid="icon-ellipsisVertical"]'
export const editMediaViewer ='//span[text()="Edit Details"]'
export const mediaTitle ='//input[@name="title"]'
export const mediaDate ='//input[@name="date"]'
export const mediaLocation ='//input[contains(@placeholder,"City, County")]'
export const mediaDescription ='//textarea[@name="description"]'
export const saveButton ='//span[text()="Save"]'
export const metaDataTitleNameValidation = (metaDataTitle: string) => `//span[text()='${metaDataTitle}']`;
export const selectNewspapers ='//span[text()="Newspapers"]'
export const selectNewspapersMedia = '//div[@class="relative bg-gray-7 opacity-1"]'
export const deletePhoto ="//span[contains(@class, 'defaultText danger-color text')]"
export const deletePopUpConfirmation ="//span[text()='Delete']"
export const validateDeleteMediaConfermationMessage ="//span[text()='Media Deleted Successfully']"