import { Page } from '@playwright/test';

export const Locators = (page: Page) => ({
    existingGroupIconSideNavBar: page.getByRole('link', { name: 'Group1' }),
    groupImageFileDrop: page.locator("xpath=//div[@class=\"file-drop-target\"]"),
    cameraIcon: page.getByTestId('icon-camera'),
    uploadNewImage: page.getByRole('button', { name: 'Upload New' }),
    resizeModalHeaderElement: page.getByRole('heading', { name: 'Crop Your Photo' }),
    resizeModalZoomInButtonElement: page.getByTestId('icon-plus').getByRole('img'),
    resizeModalSaveButtonElement: page.getByRole('button', { name: 'Save' }),
    addedGroupImage: page.locator("xpath=//img[@id=\"heroImagePopover\"]"),
    shrunkenHeagGroupImage: page.getByRole('img', { name: 'group-icon' }).nth(1),
    resizeBackgroundImage: page.getByRole('menuitem', { name: 'Resize background photo' }),
    chooseNewBackgrondImage: page.getByRole('menuitem', { name: 'Choose new background photo' }),
    removeBackgroundImage: page.getByRole('menuitem', { name: 'Remove background photo' }),
    membersTab: page.getByRole('button', { name: 'Members' }),
    resizeModalCrossIconButtonElement: page.locator('div').filter({ hasText: /^Crop Your Photo$/ }).getByRole('button'),
    resizeModalCancelButtonElement: page.getByRole('button', { name: 'Cancel' }),
    invalidFileTypeHeaderElement: page.locator("xpath=//div[@class=\"error-box\"]/div[2]/span"),
    invalidFileTypeTextElement: page.locator("xpath=//div[@class=\"error-box\"]/div[3]/span"),
    invalidFileTypeChangeFileButtonElement: page.getByRole('button', { name: 'Change File' }),
    resizeModalZoomOutButtonElement: page.getByTestId('icon-minus').getByRole('img'),
    addFromYourScrapbookButtonElement: page.getByRole('button', { name: 'Add from your Scrapbook' }),
    addMediaScrapbookHearder: page.getByRole('heading', { name: 'Add Media' }),
    selectImageFromScrapbook: page.locator("xpath=//*[@class=\"media-upload-container h-full\"]/div[2]/div[2]/div[1]/div[1]/div"),
    selectButtonElement: page.getByRole('button', { name: 'Select' }),
    cropYourPhotoXIcon: page.locator('div').filter({ hasText: /^Crop Your Photo$/ }).getByRole('button'),
    cropYourPhotoCancelButton: page.getByRole('button', { name: 'Cancel' }),

    
});

export const groupName = '//li[3]/a/figure[@class="avtar-square-msmall figure-box"]'
export const title = (titleName:string)=>`//span[text()='${titleName}']`


