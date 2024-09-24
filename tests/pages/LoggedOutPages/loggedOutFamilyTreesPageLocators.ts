import { Page } from '@playwright/test';

export const Locators = (page: Page) => ({
    accessCodePlaceholder: page.getByPlaceholder('Access Code'),
    accessCodeSubmitButton: page.getByRole('button', { name: 'Submit' }),
    familyTreesHeader : page.getByRole('heading', { name: 'Free Family Tree Builder' }),
    startaTreeButton : page.getByRole('button', { name: 'Start a Tree' }),
    uploadExistingTreeButton : page.getByRole('button', { name: 'Upload Existing Tree' }),
    startYourTreeButton : page.locator('section').filter({ hasText: 'A Place for All Your Family Tree NeedsStoried is the place to build or upload yo' }).getByRole('button'),
    startYourTreeSecondButton : page.locator('section').filter({ hasText: 'Where Do I Start?Starting a family tree can be daunting if you are new to family' }).getByRole('button'),
    searchRecordsFloatingCardButton : page.getByRole('link', { name: 'Historical Records Historical records can include birth, marriage, and death records, as well as census records, military records, and more. Search Records' }),
    searchNewspapersFloatingCardButton : page.getByRole('link', { name: 'Newspapers Newspapers can unlock stories and pictures of our ancestors we did not even know existed. The newspapers at Storied work in conjunction with NewspaperArchive. Search Newspapers' }),
    learnMoreFloatingCardButton : page.getByRole('link', { name: 'Groups Create a community around a family tree by starting a group. As part of a group, you get access to the shared family tree, a personalized story feed, and stories and media shared in the group. Learn More' }),
    startaStoryFloatingCardButton : page.getByRole('link', { name: 'Stories Storied gives you a unique storytelling experience. Create short, consumable stories others can read, like, and share. Start a Story' }),
});

