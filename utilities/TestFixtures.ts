import { test as base } from "@playwright/test";
import {
  CreateStorySteps,
  LoginSteps,
  GroupStorySteps,
  NewspaperSearchStorySteps,
  CreateInvalidSubscriptionSteps,
  createFamilyRecipeStorySteps,
  UploadMediaToScrapbookSteps,
} from "@tests/steps";
import {
  AccessPage,
  LoggedOutHomePage,
  SignUpPage,
  HomePage,
  SettingsPage,
  StartATreePage,
  PedigreePage,
  LoggedOutConnectionsPage,
  LoggedOutFamilyTreesPage,
  LoggedOutGroupsPage,
  LoggedOutStoriesPage,
  LoggedOutPlansPage,
  LoggedOutHistoricalSearchPage,
  LoggedOutNewspaperSearchPage,
  LoginPage,
  PersonDetailPage,
  GroupPage,
  PrintStoriedBookPage,
  UploadImage,
  FamilySearchPage
} from "@tests/pages";

export class TestFixtures {
  accessPage: AccessPage;
  loggedOutHomePage: LoggedOutHomePage;
  signUpPage: SignUpPage;
  homePage: HomePage;
  startATreePage: StartATreePage;
  pedigreePage: PedigreePage;
  loggedOutConnectionsPage: LoggedOutConnectionsPage;
  loggedOutGroupsPage: LoggedOutGroupsPage;
  loggedOutFamilyTreesPage: LoggedOutFamilyTreesPage;
  loggedOutStoriesPage: LoggedOutStoriesPage;
  loggedOutPlansPage: LoggedOutPlansPage;
  loggedOutHistoricalSearchPage: LoggedOutHistoricalSearchPage;
  loggedOutNewspaperSearchPage: LoggedOutNewspaperSearchPage;
  settingsPage: SettingsPage;
  loginPage: LoginPage;
  personDetailPage: PersonDetailPage;
  groupPage: GroupPage;
  printStoriedBookPage: PrintStoriedBookPage;
  createStorySteps: CreateStorySteps;
  loginSteps: LoginSteps;
  groupStorySteps: GroupStorySteps;
  newspaperSearchStorySteps: NewspaperSearchStorySteps;
  createInvalidSubscriptionSteps: CreateInvalidSubscriptionSteps;
  createFamilyRecipeStorySteps: createFamilyRecipeStorySteps;
  uploadMediaToScrapbookSteps: UploadMediaToScrapbookSteps;
  uploadImage: UploadImage;
  familySearchPage: FamilySearchPage;
}

export const test = base.extend<TestFixtures>({
  accessPage: async ({ page }, use) => use(new AccessPage(page)),
  loggedOutHomePage: async ({ page }, use) => use(new LoggedOutHomePage(page)),
  signUpPage: async ({ page }, use) => use(new SignUpPage(page)),
  homePage: async ({ page }, use) => use(new HomePage(page)),
  startATreePage: async ({ page }, use) => use(new StartATreePage(page)),
  pedigreePage: async ({ page }, use) => use(new PedigreePage(page)),
  settingsPage: async ({ page }, use) => use(new SettingsPage(page)),
  loggedOutConnectionsPage: async ({ page }, use) => use(new LoggedOutConnectionsPage(page)),
  loggedOutGroupsPage: async ({ page }, use) => use(new LoggedOutGroupsPage(page)),
  loggedOutFamilyTreesPage: async ({ page }, use) => use(new LoggedOutFamilyTreesPage(page)),
  loggedOutStoriesPage: async ({ page }, use) => use(new LoggedOutStoriesPage(page)),
  loggedOutPlansPage: async ({ page }, use) => use(new LoggedOutPlansPage(page)),
  loggedOutHistoricalSearchPage: async ({ page }, use) => use(new LoggedOutHistoricalSearchPage(page)),
  loggedOutNewspaperSearchPage: async ({ page }, use) => use(new LoggedOutNewspaperSearchPage(page)),
  loginPage: async ({ page }, use) => use(new LoginPage(page)),
  personDetailPage: async ({ page }, use) => use(new PersonDetailPage(page)),
  groupPage: async ({ page }, use) => use(new GroupPage(page)),
  printStoriedBookPage: async ({ page }, use) => use(new PrintStoriedBookPage(page)),
  createStorySteps: async ({ page }, use) => use(new CreateStorySteps(page)),
  loginSteps: async ({ page }, use) => use(new LoginSteps(page)),
  groupStorySteps: async ({ page }, use) => use(new GroupStorySteps(page)),
  newspaperSearchStorySteps: async ({ page }, use) => use(new NewspaperSearchStorySteps(page)),
  createInvalidSubscriptionSteps: async ({ page }, use) => use(new CreateInvalidSubscriptionSteps(page)),
  createFamilyRecipeStorySteps: async ({ page }, use) => use(new createFamilyRecipeStorySteps(page)),
  uploadMediaToScrapbookSteps: async ({ page }, use) => use(new UploadMediaToScrapbookSteps(page)),
  uploadImage: async ({ page }, use) => use(new UploadImage(page)),
  familySearchPage: async ({ page }, use) => use(new FamilySearchPage(page)),
});

export default test;