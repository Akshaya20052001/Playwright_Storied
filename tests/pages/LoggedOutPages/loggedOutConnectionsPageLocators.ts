import { Page } from '@playwright/test';

export const Locators = (page: Page) => ({
    connectionsPageHeader : page.getByRole('heading', { name: 'Connections Beyond Your Family Tree' }),
    addaConnectionButton : page.locator('section').filter({ hasText: 'Connections Beyond Your Family TreeStoried lets you document all of the relation' }).getByRole('button'),
    addaConnectionSecondButton : page.locator('section').filter({ hasText: 'See Family and MoreAt Storied, relationships are at the core of the site experie' }).getByRole('button'),
    addaConnectionThirdButton : page.locator('section').filter({ hasText: 'Including Others in Your StoryImagine being far away from home on Christmas Eve.' }).getByRole('button'),
    searchRecordsFloatingCardButton : page.getByRole('link', { name: 'Historical Records Historical records can give you names, dates, and places. These details can be added to a person already in your tree or potentially a new person. These types of records help build a solid foundation for the people in your family tree. Search Records' }),
    searchNewspapersFloatingCardButton : page.getByRole('link', { name: 'Newspapers Newspapers can give you some basic information about people in your family tree, and sometimes they can give you a whole new perspective on those people. You can discover names, dates, and places, but you can also unlock long-buried stories from the past. Search Newspapers' }),
    learnMoreFloatingCardButton : page.getByRole('link', { name: 'Groups Are you part of any groups at Storied? All stories added by people in the group can be found in one central location. As people in your group add stories, they get added to the Stories tab in your group. Learn More' }),
    startaStoryFloatingCardButton : page.getByRole('link', { name: 'Stories By following other people on Storied, their public stories become part of your feed on the homepage. Read stories about people past and present, from all over the world and all walks of life. You never know when you might discover a person from your family tree in someone else’s story! Start a Story' }),
});

