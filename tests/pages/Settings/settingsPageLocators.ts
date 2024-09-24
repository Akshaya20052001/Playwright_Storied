import { Page } from '@playwright/test';

export const Locators = (page: Page) => ({
    profileHeader : page.getByRole('heading', { name: 'Profile' }),
    treesSection : page.getByRole('button', { name: 'Trees' }),
    treesSectionHeader : page.getByRole('heading', { name: 'Trees', exact: true }),
    startATreeButton : page.getByRole('button', { name: 'Start a Tree' }),
    startANewTreeButton: page.locator('div').filter({ hasText: /^Start a New Tree$/ }).nth(2),
    uploadAGedcomFileButtonOption : page.locator('div').filter({ hasText: /^Upload a GEDCOM file$/ }).nth(2),
    importFromFamilySearchButton: page.locator('div').filter({ hasText: /^Import from FamilySearch$/ }).first(),
    uploadGedcomButton: page.locator("xpath=//span[normalize-space()='Upload a GEDCOM file']"),
    editTreeButtonElement: page.locator('.prop-link > .btn').first(),
    existingTreeName : page.getByLabel('Tree Name'),
    cancelEditTreeButtonElement: page.getByRole('button', { name: 'Cancel' }),
    saveEditTreeButtonElement: page.getByRole('button', { name: 'Save' }),
    shareWithPartnersCheckboxElement: page.locator('label').filter({ hasText: 'Get more hints by sharing my' }).locator('i'),
});