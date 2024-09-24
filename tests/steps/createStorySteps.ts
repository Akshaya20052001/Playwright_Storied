import {
  HomePage,
  CreateStory,
  PublishPage,
  StoryDetailsPage,
  NewspaperPage,
  ScrapbookPage,
  RecipePage,
} from "../pages";
import { Page } from "@playwright/test";

interface StoryDetails {
  title: string;
  location: string;
  date: string;
  content: string;
  peopleName: string;
}

export class CreateStorySteps {
  private readonly homePage: HomePage;
  private readonly createStory: CreateStory;
  private readonly publishPage: PublishPage;
  private readonly storyDetails: StoryDetailsPage;
  private readonly newspaperPage: NewspaperPage;
  private readonly recipePage: RecipePage;
  private readonly scrapbookPage: ScrapbookPage;
  constructor(page: Page) {
    this.homePage = new HomePage(page);
    this.createStory = new CreateStory(page);
    this.publishPage = new PublishPage(page);
    this.storyDetails = new StoryDetailsPage(page);
    this.newspaperPage = new NewspaperPage(page);
    this.recipePage = new RecipePage(page);
    this.scrapbookPage = new ScrapbookPage(page);
  }

  async createStories(
    storyDetails: JSON,
    storyContent: string,
    group: boolean,
    storyTitle: string,
    newStory: boolean,
    stories: boolean,
    tagperson: boolean,
    filePaths: string[],
    tagPetProfile: boolean,
    storyAssist: boolean,
    newsPaperStory: boolean,
    scrapbookMediaFiles: boolean
  ): Promise<void> {
    if (storyAssist) {
      await this.homePage.clickMyStories();
      await this.homePage.clickAddStories();
      await this.storyDetails.clickStoryAssist();
      await this.storyDetails.clickUseStoryAssist();
      await this.storyDetails.clickStoryTone();
      await this.storyDetails.fillStoryMainTheme(storyDetails["mainTheme"]);
      await this.storyDetails.fillStoryDetail(storyDetails["storyDetail"]);
      await this.storyDetails.clickGenerateDraft();
      await this.createStory.clickCreateStoryTitle(storyDetails["title"]);
    } else if (newStory) {
      await this.homePage.clickMyStories();
      await this.homePage.clickAddStories();
      await this.createStory.clickCreateStoryTitle(storyDetails["title"]);
      await this.createStory.clickLocation(storyDetails["location"]);
      await this.createStory.clickDate(storyDetails["date"]);
      await this.createStory.clickStorydescription(storyContent);
      if (scrapbookMediaFiles) {
        await this.recipePage.clickOnAddMedia();
        await this.recipePage.clickOnAddFromYourScrapbook();
        await this.scrapbookPage.clickOnNewspapersMediaFromScrapbook();
        await this.recipePage.clickOnSelectButton();
      } else {
        await this.storyDetails.uploadMultipleMedia(filePaths);
      }
    } else if (newsPaperStory) {
      await this.createStory.clickCreateStoryTitle(storyDetails["title"]);
      await this.createStory.clickStorydescription(storyContent);
    }

    await this.createStory.clickNextButton();
    if (tagPetProfile) {
      await this.storyDetails.clickStoryTags(storyDetails["tags"]);
    } else {
      await this.storyDetails.clickOnTheStoryAddTagPeopleorPet(
        storyDetails["tags"]
      );
      await this.storyDetails.clickCreateRelationship(
        storyDetails["searchPeopleTag"]
      );
      await this.storyDetails.clickSelectRelationship();
      await this.storyDetails.clickNextButton();
      await this.storyDetails.clickSaveButton();
    }
    await this.storyDetails.clickOnStoryNextButton();
    await this.publishPage.publicbutton();
    if (group) {
      await this.publishPage.groupCheckBox();
    }
    await this.publishPage.donebutton();
    await this.publishPage.validateStoryConfermationMessage();
    if (stories) {
      await this.newspaperPage.clickNewspaperBackButton();
      await this.homePage.clickMyStories();
    }
    await this.publishPage.clickCreateStory(storyTitle);
    if (tagperson) {
      await this.publishPage.clickOnTaggedStoryPerson();
      await this.publishPage.clickOnViewTaggedStoryPerson();
      await this.publishPage.clickStories();
      await this.publishPage.clickCreateStory(storyTitle);
    }
    await this.publishPage.clickBackButton();
  }

  async createStoriesWithNewPerson(storyDetails: StoryDetails): Promise<void> {
    await this.homePage.clickMyStories();
    await this.homePage.clickAddStories();
    await this.createStory.clickCreateStoryTitle(storyDetails.title);
    await this.createStory.clickLocation(storyDetails.location);
    await this.createStory.clickDate(storyDetails.date);
    await this.createStory.clickStorydescription(storyDetails.content);
    await this.createStory.clickNextButton();
    await this.storyDetails.clickAddPeopleInStory(storyDetails.peopleName);
    await this.storyDetails.clickOnStoryNextButton();
    await this.publishPage.publicbutton();
    await this.publishPage.donebutton();
    await this.storyDetails.viewStoryInPeoplePage(
      storyDetails.title,
      storyDetails.peopleName
    );
  }
}
