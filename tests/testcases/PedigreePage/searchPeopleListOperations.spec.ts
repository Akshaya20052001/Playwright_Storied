import { test } from "@utilities/TestFixtures";
import { appDataDefaultCredentials } from "@data/TestDataCredentials";
import { getBaseUrl } from "@utilities/config";
import { HomePersonDetails, FatherDetails, MotherDetails, PaternalGrandParentDetails, MaternalGrandParentDetails } from "@data/MockData";

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

test(`@Regression Verify user is able to switch b/w Tree progress bar & search people`,
  async ({ pedigreePage }) => {
    await pedigreePage.clickOnSearchPeopleIcon();
    await pedigreePage.verifySeachPeopleDrawerIsVisble();
    await pedigreePage.clickOntreeProgressMeter();
    await pedigreePage.verifyTreeProgressDrawerVisible();
  });

test(`@Regression Verify when user adds the people through the TreeProgress drawer to the tree the added people should reflect on Search people list`,
  async ({ pedigreePage }) => {
    const HomePersonFullName = HomePersonDetails.HomePersonFirstName + " " + HomePersonDetails.HomePersonLastName;
    await pedigreePage.clickAddYourFather();
    const FatherFullName = FatherDetails.FatherFirstName + " " + FatherDetails.FatherLastName;
    await pedigreePage.setPersonName(FatherDetails.FatherFirstName, FatherDetails.FatherLastName);
    await pedigreePage.clickAddPersonButton();
    await pedigreePage.clickAddYourMotherButtonTreeProgressDrawer();
    const MotherFullName = MotherDetails.MotherFirstName + " " + MotherDetails.MotherLastName;
    await pedigreePage.setPersonName(MotherDetails.MotherFirstName, MotherDetails.MotherLastName);
    await pedigreePage.clickAddPersonButton();
    await pedigreePage.clickAddYourPaternalGrandFather();
    const PaternalGrandFatherFullName = PaternalGrandParentDetails.PaternalGrandFatherFirstName + " " + PaternalGrandParentDetails.PaternalGrandFatherLastName;
    await pedigreePage.setPersonName(PaternalGrandParentDetails.PaternalGrandFatherFirstName, PaternalGrandParentDetails.PaternalGrandFatherLastName);
    await pedigreePage.clickAddPersonButton();
    await pedigreePage.clickAddYourPaternalGrandMother();
    const PaternalGrandMotherFullName = PaternalGrandParentDetails.PaternalGrandMotherFirstName + " " + PaternalGrandParentDetails.PaternalGrandMotherLastName;
    await pedigreePage.setPersonName(PaternalGrandParentDetails.PaternalGrandMotherFirstName, PaternalGrandParentDetails.PaternalGrandMotherLastName);
    await pedigreePage.clickAddPersonButton();
    await pedigreePage.clickAddYourMaternalGrandFather();
    const MaternalGrandFatherFullName = MaternalGrandParentDetails.MaternalGrandFatherFirstName + " " + MaternalGrandParentDetails.MaternalGrandFatherLastName;
    await pedigreePage.setPersonName(MaternalGrandParentDetails.MaternalGrandFatherFirstName, MaternalGrandParentDetails.MaternalGrandFatherLastName);
    await pedigreePage.clickAddPersonButton();
    await pedigreePage.clickAddYourMaternalGrandMother();
    const MaternalGrandMotherFullName = MaternalGrandParentDetails.MaternalGrandMotherFirstName + " " + MaternalGrandParentDetails.MaternalGrandMotherLastName;
    await pedigreePage.setPersonName(MaternalGrandParentDetails.MaternalGrandMotherFirstName, MaternalGrandParentDetails.MaternalGrandMotherLastName);
    await pedigreePage.clickAddPersonButton();
    const familyMembers = [HomePersonFullName, FatherFullName, MotherFullName, PaternalGrandFatherFullName, PaternalGrandMotherFullName, MaternalGrandFatherFullName, MaternalGrandMotherFullName];
    await pedigreePage.clickOnSearchPeopleIcon();
    await pedigreePage.verifyTheAddedFamilyMembersInSearchList(familyMembers);
  });

test(`@Regression Verify user able to Zoom In/Out the created tree`,
  async ({ pedigreePage }) => {
    await pedigreePage.clickZoomInCreatedTree();
    await pedigreePage.clickZoomOutCreatedTree();
  });

test(`@Regression verify user able to reset back the Home Person`,
  async ({ pedigreePage }) => {
    await pedigreePage.clickZoomInCreatedTree();
    await pedigreePage.clickResetButton();
  });

test.afterEach(async ({ page }) => {
  await page.close();
});