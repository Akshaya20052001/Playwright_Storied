import { test } from "@utilities/TestFixtures";
import { appDataDefaultCredentials } from "@data/TestDataCredentials";
import { getBaseUrl } from "@utilities/config";
import { HomePersonDetails, FatherDetails, MotherDetails, PaternalGrandParentDetails, MaternalGrandParentDetails } from "@data/MockData";
const personDetails = [
  { personName: FatherDetails.FatherFirstName },
  { personName: MotherDetails.MotherFirstName },
  { personName: PaternalGrandParentDetails.PaternalGrandFatherFirstName },
  { personName: PaternalGrandParentDetails.PaternalGrandMotherFirstName },
  { personName: MaternalGrandParentDetails.MaternalGrandFatherFirstName },
  { personName: MaternalGrandParentDetails.MaternalGrandMotherFirstName },
];

test.beforeEach(async ({ accessPage, loggedOutHomePage, homePage, loginPage, settingsPage, pedigreePage }, testInfo) => {
  // Extend timeout for all tests running this hook by 30 seconds.
  testInfo.setTimeout(testInfo.timeout + 60000);
  await accessPage.goto(getBaseUrl());
  await loggedOutHomePage.clickSignInButtonLohp();
  await loginPage.setEmail(appDataDefaultCredentials.Email);
  await loginPage.setPassword(appDataDefaultCredentials.Password);
  await loginPage.clickSignInButton();
  await homePage.verifyOnHomepage();
  await homePage.clickOnNavAvatar();
  await homePage.clickSettingsButton();
  await settingsPage.verifyOnSettingsPage();
  await settingsPage.clickOnTreesSection();
  await settingsPage.clickStartATreeButton();
  await settingsPage.selectStartANewTreeOption();
  await pedigreePage.setPersonName(HomePersonDetails.HomePersonFirstName, HomePersonDetails.HomePersonLastName);
  await pedigreePage.clickNextButtonHomePersonDetails();
  await pedigreePage.verifyTreeProgressDrawerVisible();
});

test(`@Regression Verify the Progress in the Progress box should increase when user adds father to the home person`,
  async ({ pedigreePage }) => {
    await pedigreePage.clickAddYourFather();
    await pedigreePage.setPersonName(FatherDetails.FatherFirstName, FatherDetails.FatherLastName);
    await pedigreePage.clickAddPersonButton();
    await pedigreePage.verifyProgressPercentage();
  });

test(`@Regression Verify when user adds the father to the Home Person then Paternal Grandfather & Paternal Grand Mother sections should be enabled`,
  async ({ pedigreePage }) => {
    await pedigreePage.verifyPaternalParentsDropdownDisabled();
    await pedigreePage.clickAddYourFather();
    await pedigreePage.setPersonName(FatherDetails.FatherFirstName, FatherDetails.FatherLastName);
    await pedigreePage.clickAddPersonButton();
    await pedigreePage.verifyPaternalParentsDropdownEnabled();
  });

test(`@Regression Verify when user adds the mother to the Home Person then Maternal Grandfather & Maternal Grand Mother sections should be enabled`,
  async ({ pedigreePage }) => {
    await pedigreePage.verifyMaternalParentsDropdownDisabled();
    await pedigreePage.clickAddMother();
    await pedigreePage.setPersonName(MotherDetails.MotherFirstName, MotherDetails.MotherLastName);
    await pedigreePage.clickAddPersonButton();
    await pedigreePage.verifyMaternalParentsDropdownEnabled();
  });

test(`@Regression Verify user should add Residence, Birthdate & Birthplace of the home person by clicking on the respective buttons on the progress bar`,
  async ({ pedigreePage }) => {
    await pedigreePage.clickOnResidenceCheckBox();
    await pedigreePage.setResidenceOnProgressBar(HomePersonDetails.Region);
    await pedigreePage.setBirthDateOnProgressBar(HomePersonDetails.HomePersonBirthDate);
    await pedigreePage.setBirthPlaceOnProgressBar(HomePersonDetails.BirthPlace);
  });

test(`@Regression Verify check count should become green when user adds all details of The HomePerson`,
  async ({ pedigreePage }) => {
    await pedigreePage.clickOnResidenceCheckBox();
    await pedigreePage.setResidenceOnProgressBar(HomePersonDetails.Region);
    await pedigreePage.setBirthDateOnProgressBar(HomePersonDetails.HomePersonBirthDate);
    await pedigreePage.setBirthPlaceOnProgressBar(HomePersonDetails.BirthPlace);
    await pedigreePage.verifyTheCheckCountAndColour();
  });

test(`@Regression Verify user should add the data to the person by following the tasks in the progress bar`,
  async ({ pedigreePage }) => {
    await pedigreePage.clickOnResidenceCheckBox();
    await pedigreePage.setPersonDetails(HomePersonDetails.Region, HomePersonDetails.HomePersonBirthDate, HomePersonDetails.BirthPlace);
    await pedigreePage.clickSaveDetailsButton();
    await pedigreePage.clickAddYourFather();
    await pedigreePage.setPersonName(FatherDetails.FatherFirstName, FatherDetails.FatherLastName);
    await pedigreePage.setPersonDetails(HomePersonDetails.Region, FatherDetails.FatherBirthDate, HomePersonDetails.BirthPlace);
    await pedigreePage.clickAddPersonButton();
    await pedigreePage.clickAddYourMotherButtonTreeProgressDrawer();
    await pedigreePage.setPersonName(MotherDetails.MotherFirstName, MotherDetails.MotherLastName);
    await pedigreePage.setPersonDetails(HomePersonDetails.Region, MotherDetails.MotherBirthDate, HomePersonDetails.BirthPlace);
    await pedigreePage.clickAddPersonButton();
    await pedigreePage.clickAddYourPaternalGrandFather();
    await pedigreePage.setPersonName(PaternalGrandParentDetails.PaternalGrandFatherFirstName, PaternalGrandParentDetails.PaternalGrandFatherLastName);
    await pedigreePage.setPersonDetails(HomePersonDetails.Region, PaternalGrandParentDetails.PaternalGrandFatherBirthDate, HomePersonDetails.BirthPlace);
    await pedigreePage.clickAddPersonButton();
    await pedigreePage.clickAddYourPaternalGrandMother();
    await pedigreePage.setPersonName(PaternalGrandParentDetails.PaternalGrandMotherFirstName, PaternalGrandParentDetails.PaternalGrandMotherLastName);
    await pedigreePage.setPersonDetails(HomePersonDetails.Region, PaternalGrandParentDetails.PaternalGrandMotherBirthDate, HomePersonDetails.BirthPlace);
    await pedigreePage.clickAddPersonButton();
    await pedigreePage.clickAddYourMaternalGrandFather();
    await pedigreePage.setPersonName(MaternalGrandParentDetails.MaternalGrandFatherFirstName, MaternalGrandParentDetails.MaternalGrandFatherLastName);
    await pedigreePage.setPersonDetails(HomePersonDetails.Region, MaternalGrandParentDetails.MaternalGrandFatherBirthDate, HomePersonDetails.BirthPlace);
    await pedigreePage.clickAddPersonButton();
    await pedigreePage.clickAddYourMaternalGrandMother();
    await pedigreePage.setPersonName(MaternalGrandParentDetails.MaternalGrandMotherFirstName, MaternalGrandParentDetails.MaternalGrandMotherLastName);
    await pedigreePage.setPersonDetails(HomePersonDetails.Region, MaternalGrandParentDetails.MaternalGrandMotherBirthDate, HomePersonDetails.BirthPlace);
    await pedigreePage.clickAddPersonButton();
    await pedigreePage.verifyTreeTaskCompletionModalIsVisible();
    await pedigreePage.clickOnReturnToTreeButton();
  });

test(`@Regression Verify when user clicks one of the Parents in the Search list, selected parent should become focused and as home person`,
  async ({ pedigreePage }) => {
    await pedigreePage.clickAddYourFather();
    await pedigreePage.setPersonName(FatherDetails.FatherFirstName, FatherDetails.FatherLastName);
    await pedigreePage.clickAddPersonButton();
    await pedigreePage.clickOnSearchPeopleIcon();
    const FatherFullName = FatherDetails.FatherFirstName + " " + FatherDetails.FatherLastName;
    await pedigreePage.searchPersonByNameInput(FatherFullName);
    await pedigreePage.clickOnSearchPersonInTheList();
    await pedigreePage.verifyFocusPersonHasBeenChanged(FatherFullName);
  });

test(`@Regression Verify when user clicks on Search Icon the added people should reflect on the list`,
  async ({ pedigreePage }) => {
    await pedigreePage.clickAddYourFather();
    await pedigreePage.setPersonName(FatherDetails.FatherFirstName, FatherDetails.FatherLastName);
    await pedigreePage.clickAddPersonButton();
    await pedigreePage.clickAddYourMotherButtonTreeProgressDrawer();
    await pedigreePage.setPersonName(MotherDetails.MotherFirstName, MotherDetails.MotherLastName);
    await pedigreePage.clickAddPersonButton();
    await pedigreePage.clickOnSearchPeopleIcon();
    await pedigreePage.verifyAddedPeopleIsVisbleInSearchList();
  });

test(`@Regression Verify when user closes the tree progress drawer, tree Progress drawer should get Closed`,
  async ({ pedigreePage }) => {
    await pedigreePage.clickCloseTreeProgressDrawer();
    await pedigreePage.verifyTheAbsoluteTopAndBottomIcons();
  });

test(`@Regression Verify tree task Title and subtitle text is visible`,
  async ({ pedigreePage }) => {
    await pedigreePage.verifyTreeTaskTitleIsVisble();
    await pedigreePage.verifyTreeTaskSubtitleIsVisble();
  });

test(`@Regression Verify when user tasks is incomplete the details of the person should expanded`,
  async ({ pedigreePage }) => {
    await pedigreePage.verifyDetailsOfThePersonShouldExapnded();
  });

test(`@Regression Verify when user adds person from the main tree the percentage and the tree tasks should get updated in the tree progress bar`,
  async ({ pedigreePage }) => {
    const familyMemberNames = [FatherDetails.FatherFirstName, MotherDetails.MotherFirstName, PaternalGrandParentDetails.PaternalGrandFatherFirstName, PaternalGrandParentDetails.PaternalGrandMotherFirstName, MaternalGrandParentDetails.MaternalGrandFatherFirstName, MaternalGrandParentDetails.MaternalGrandMotherFirstName];
    const familyMembers = ["Father", "Mother", "PaternalGrandFather", "PaternalGrandMother", "MaternalGrandFather", "MaternalGrandMother"];
    await pedigreePage.addFamilyMembersFromMainTreeAndVerifyingTheProgressBarPercentage(familyMembers, familyMemberNames);
  });

test.afterEach(async ({ page }) => {
  await page.close();
});