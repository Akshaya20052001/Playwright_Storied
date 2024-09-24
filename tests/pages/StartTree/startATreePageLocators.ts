import { Page } from '@playwright/test';

export const Locators = (page: Page) => ({
    accessCodePlaceholder: page.getByPlaceholder('Access Code'),
    accessCodeSubmitButton: page.getByRole('button', { name: 'Submit' }),
    firstNamePlaceholder : page.getByLabel('First & Middle Name(s)'),
    lastNamePlaceholder : page.getByLabel('Last Name(s)'),
    maleGenderSelector : page.locator('[data-test="select-button"]').first(),
    birthDatePlaceholder : page.getByLabel('Birthdate'),
    nextButton : page.getByRole('button', { name: 'Next' }),
    uploadYourFamilyTreeHeader : page.getByText('Upload Your Family Tree'),
    uploadGedcomLink :  page.locator('.file-drop-target'),
    acceptTermsConditionsCheckbox : page.getByLabel('I accept that any uploaded'),
    uploadButton : page.getByRole('button', { name: 'Upload' }),
    chooseHomepersonHeaderPage : page.getByText('Choose a Home Person'),
    setHomePersonInput : page.getByPlaceholder('Select Home person'),
    selectHomepersonButton : page.locator('#tree-homepersons-option-0'),  
    doneButton : page.getByRole('button', { name: 'Done' }),
    creatingYourTreeHeader : page.getByText('Creating Your Tree'),
});

