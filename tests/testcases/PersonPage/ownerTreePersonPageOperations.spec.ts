import { test } from "@utilities/TestFixtures";
import { appDataDefaultCredentials } from "@data/TestDataCredentials";
import { GedcomCredentials } from "@data/MockData";
import { getBaseUrl } from "@utilities/config";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

test.beforeEach(
  async (
    {
      accessPage,
      loggedOutHomePage,
      loginPage,
      homePage,
      settingsPage,
      pedigreePage,
    },
    testInfo
  ) => {
    // Extend the timeout for all tests running this hook by 30 seconds.
    testInfo.setTimeout(testInfo.timeout + 60000);
    await accessPage.goto(getBaseUrl());
    await loggedOutHomePage.clickSignInButtonLohp();
    await loginPage.login(
      appDataDefaultCredentials.Email,
      appDataDefaultCredentials.Password
    );
    await homePage.verifyOnHomepage();
    await homePage.clickOnNavAvatar();
    await homePage.clickSettingsButton();
    await settingsPage.verifyOnSettingsPage();
    await settingsPage.clickOnTreesSection();
    await settingsPage.clickOnTreeHavingName(GedcomCredentials.GedcomName);
    await pedigreePage.verifyHomePersonIsDisplayed(
      GedcomCredentials.HomepersonName
    );
    await delay(3000);
  }
);

test.describe("@Regression Person Page Header and Person info read operations", async () => {
  test("@Regression Verify that the user should be able to see the Full Name, Birth, and Death details if present", async ({
    pedigreePage,
    personDetailPage
  }) => {
    await pedigreePage.clickHomePersonNode();
    await pedigreePage.clickQuickViewModalOption("View Profile");
    await personDetailPage.verifyHeaderNameIsVisible(GedcomCredentials.HomepersonName);
    await personDetailPage.verifyHeaderBirthDetailsAreVisible(GedcomCredentials.HomepersonBirthDetails);
    await personDetailPage.verifyHeaderDeathDetailsAreVisible(GedcomCredentials.HomepersonDeathDetails);
  });

  test("@Regression Verify that the user should be able to see the person as living if no death evidence is present", async ({
    pedigreePage,
    personDetailPage
  }) => {
    await pedigreePage.clickReadMotherNode();
    await pedigreePage.clickQuickViewModalOption("View Profile");
    await personDetailPage.verifyHeaderNameIsVisible(GedcomCredentials.HomepersonMotherName);
    await personDetailPage.verifyHeaderDeathDetailsAreVisible(GedcomCredentials.HomepersonMotherDeathDetails);
  });

  test("@Regression Verify that the user should be able to see empty profile placeholder options on the person page if the image is not present", async ({
    pedigreePage,
    personDetailPage
  }) => {
    await pedigreePage.clickReadMotherNode();
    await pedigreePage.clickQuickViewModalOption("View Profile");
    await personDetailPage.verifyEmptyImagePlaceholderIsDisplayed("profile");
  });

  test("@Regression Verify that the user should be able to see an empty Background Placeholder on the person page if the image is not present", async ({
    pedigreePage,
    personDetailPage
  }) => {
    await pedigreePage.clickReadMotherNode();
    await pedigreePage.clickQuickViewModalOption("View Profile");
    await personDetailPage.verifyEmptyImagePlaceholderIsDisplayed("background");
  });

  test("@Regression Verify that the user should be able to see the person's Death details as Unknown if the person is inferred dead", async ({
    pedigreePage,
    personDetailPage
  }) => {
    await pedigreePage.clickReadMotherNode();
    await pedigreePage.clickQuickViewModalOption("View Profile");
    await personDetailPage.verifyEmptyImagePlaceholderIsDisplayed("background");
  });

  test("@Regression Verify that the user should be able to see the person's Birth details as Unknown if the person is Living but no Birth details are present", async ({
    pedigreePage,
    personDetailPage
  }) => {
    await pedigreePage.clickSiblingsListExpansionButton();
    await pedigreePage.clickSiblingNode();
    await pedigreePage.clickQuickViewModalOption("View Profile");
    await personDetailPage.verifyHeaderBirthDetailsAreVisible(GedcomCredentials.HomepersonSiblingBirthDetails);
  });

  test("@Regression Verify that the user should be able to see profile image options on the person page if the image is present", async ({
    pedigreePage,
    personDetailPage
  }) => {
    await pedigreePage.clickHomePersonNode();
    await pedigreePage.clickQuickViewModalOption("View Profile");
    await personDetailPage.clickExistingPhoto("profile");
    await personDetailPage.verifyAllDropdownsShouldBeVisibleForImage("profile");
  });

  test("@Regression Verify that the user should be able to see Background image options on the person page if the image is present", async ({
    pedigreePage,
    personDetailPage
  }) => {
    await pedigreePage.clickHomePersonNode();
    await pedigreePage.clickQuickViewModalOption("View Profile");
    await personDetailPage.clickExistingPhoto("background");
    await personDetailPage.verifyAllDropdownsShouldBeVisibleForImage("background");
  });

  test("@Regression Verify that the user should be able to see the details of the tree person on the Personal info section table", async ({
    pedigreePage,
    personDetailPage
  }) => {
    await pedigreePage.clickHomePersonNode();
    await pedigreePage.clickQuickViewModalOption("View Profile");
    await personDetailPage.verifyPersonalInforSectionDetails(
      GedcomCredentials.HomepersonFirstName,
      GedcomCredentials.HomepersonLastName,
      GedcomCredentials.HomepersonGender);
  });

  test("@Regression Verify that the user should be able to see the events table on the person page", async ({
    pedigreePage,
    personDetailPage
  }) => {
    await pedigreePage.clickHomePersonNode();
    await pedigreePage.clickQuickViewModalOption("View Profile");
    await personDetailPage.verifyHeaderNameIsVisible(GedcomCredentials.HomepersonName);
    await personDetailPage.verifyEventsTableWithColumnIsVisible();
    await personDetailPage.verifyFirstRowOnEventsTableIsVisibleAsBirth();
  });

  test("@Regression Verify that the user should be able to see both parents on the relation column for the birth row", async ({
    pedigreePage,
    personDetailPage
  }) => {
    await pedigreePage.clickHomePersonNode();
    await pedigreePage.clickQuickViewModalOption("View Profile");
    await personDetailPage.verifyEventsTableWithColumnIsVisible();
    await personDetailPage.verifyParentNamesAreVsibleOnBirthRowEventsTable(GedcomCredentials.HomepersonMotherName, GedcomCredentials.HomepersonFatherName);
  });
});

test.describe("@Regression Person Page Family Events tables read operations", async () => {
  test("@Regression Verify that the user should be able all dropdown options for the Family section when tree person has no parents", async ({
    pedigreePage,
    personDetailPage
  }) => {
    await pedigreePage.clickReadMotherNode();
    await pedigreePage.clickQuickViewModalOption("View Profile");
    await personDetailPage.verifyHeaderNameIsVisible(GedcomCredentials.HomepersonMotherName);
    await personDetailPage.verifyEventsTableWithColumnIsVisible();
    await personDetailPage.clickAddFamilyButtonElement();
    await personDetailPage.verifyFamilyDropdownForPersonHavingNoParents();
  });

  test("@Regression Verify that the user should be able all dropdown options for the Family section when tree person has a single parent", async ({
    pedigreePage,
    personDetailPage
  }) => {
    await pedigreePage.clickReadFatherNode();
    await pedigreePage.clickQuickViewModalOption("View Profile");
    await personDetailPage.verifyHeaderNameIsVisible(GedcomCredentials.HomepersonFatherName);
    await personDetailPage.verifyEventsTableWithColumnIsVisible();
    await personDetailPage.clickAddFamilyButtonElement();
    await personDetailPage.verifyFamilyDropdownForPersonHavingSingleParent();
  });

  test("@Regression Verify that the user should be able all dropdown options for the Family section when tree person has both parents", async ({
    pedigreePage,
    personDetailPage
  }) => {
    await pedigreePage.clickHomePersonNode();
    await pedigreePage.clickQuickViewModalOption("View Profile");
    await personDetailPage.verifyHeaderNameIsVisible(GedcomCredentials.HomepersonName);
    await personDetailPage.verifyEventsTableWithColumnIsVisible();
    await personDetailPage.clickAddFamilyButtonElement();
    await personDetailPage.verifyFamilyDropdownForPersonHavingBothParents();
  });

  const expectedEventTableDetails = [
    ['Birth', '', '01 Jan 1988', 'Retalhuleu, Guatemala', 'Jorja Fox,  David Allen '],
    ['Marriage', '22', '2010', 'Qashqah, Faryab, Afghanistan', 'Cleo Fraser'],
    ['Divorce', '24', '2012', 'Decatur County, Georgia, USA', 'Cleo Fraser'],                                                                   
    ['Marriage', '25', '2013', 'Ten Boer, Groningen, Netherlands', 'Lily Lumpkin'],
    ['Divorce', '26', '2014', 'Setauket, Suffolk, New York, USA', 'Lily Lumpkin'],
    ['Marriage', '27', '2015', 'Terengganu, Malaysia', 'Anna Mikami'],
    ['Divorce', '29', '2017', 'Gera, Thuringia, Germany', 'Anna Mikami'],
    ['Death', '32', '2020', 'Pennsylvania, USA', 'Jorja Fox,  David Allen '],
  ];

  test("@Regression Verify that the user should be able to see only Birth Marriage Divorce and Death events on the events table", async ({
    pedigreePage,
    personDetailPage,
  }) => {
    await pedigreePage.clickHomePersonNode();
    await pedigreePage.clickQuickViewModalOption("View Profile");
    await personDetailPage.verifyHeaderNameIsVisible(GedcomCredentials.HomepersonName);
    await personDetailPage.verifyEventsTableWithColumnIsVisible();
    await personDetailPage.verifyPersonEventDetailsInEventsTable(expectedEventTableDetails);
  });

  const expectedSpouseAndChildrenTableDetails = [
    ['Anna Mikami View', 'F', '1988', '', '', '', '2015', 'Kyle Allen'],
    ['Lily Lumpkin View', 'F', '1988', 'West Virginia, USA', '', '', '2013', 'Kyle Allen'],
    ['Cleo Fraser View', 'F', '1989', 'Refugio County, Texas, USA', '', '', '2010', 'Kyle Allen'],
  ];

  test("@Regression Verify that the person's details are visible in the Spouses & Childrens tables", async ({
    pedigreePage,
    personDetailPage,
  }) => {
    await pedigreePage.clickHomePersonNode();
    await pedigreePage.clickQuickViewModalOption("View Profile");
    await personDetailPage.verifyHeaderNameIsVisible(GedcomCredentials.HomepersonName);
    await personDetailPage.verifyEventsTableWithColumnIsVisible();
    await personDetailPage.verifySpouseAndChildrenDetailsInFamilyTable(expectedSpouseAndChildrenTableDetails);
  });

  const expectedParentsAndSiblingsTableDetails = [
    ['Jorja Fox View', 'F', '1975', 'Retalhuleu, Guatemala', '', '', '', 'David Allen'],
    ['David Allen View', 'M', '1970', '', '', '', '', 'Jorja Fox'],
    ['Kyle Allen View', 'M', '01 Jan 1988', 'Retalhuleu, Guatemala', '2020', 'Pennsylvania, USA', '2015', 'Anna Mikami'],
    ['Sibling Allen View', 'M', '', '', '', '', '', ''],
  ];

  test("@Regression Verify that the person's details are visible in the Parents & Siblings tables", async ({
    pedigreePage,
    personDetailPage,
  }) => {
    await pedigreePage.clickHomePersonNode();
    await pedigreePage.clickQuickViewModalOption("View Profile");
    await personDetailPage.verifyHeaderNameIsVisible(GedcomCredentials.HomepersonName);
    await personDetailPage.verifyEventsTableWithColumnIsVisible();
    await personDetailPage.verifyParentsAndSiblingsDetailsInFamilyTable(expectedParentsAndSiblingsTableDetails);
  });

  test("@Regression Verify that the user should be able to see the Spouses & Childrens table on the person page", async ({
    pedigreePage,
    personDetailPage,
  }) => {
    await pedigreePage.clickHomePersonNode();
    await pedigreePage.clickQuickViewModalOption("View Profile");
    await personDetailPage.verifyHeaderNameIsVisible(GedcomCredentials.HomepersonName);
    await personDetailPage.verifySpousesAndChildrenTableWithColumnIsVisible();
  });

  test("@Regression Verify that the user should be able to see the Parents & Siblings table on the person page", async ({
    pedigreePage,
    personDetailPage,
  }) => {
    await pedigreePage.clickHomePersonNode();
    await pedigreePage.clickQuickViewModalOption("View Profile");
    await personDetailPage.verifyHeaderNameIsVisible(GedcomCredentials.HomepersonName);
    await personDetailPage.verifyParentsAndSiblingsTableWithColumnIsVisible();
  });

  test("@Regression Verify that the user should be able to see the All Life Events table on the person page", async ({
    pedigreePage,
    personDetailPage,
  }) => {
    await pedigreePage.clickHomePersonNode();
    await pedigreePage.clickQuickViewModalOption("View Profile");
    await personDetailPage.verifyHeaderNameIsVisible(GedcomCredentials.HomepersonName);
    await personDetailPage.verifyAllLifeEventsTableWithColumnIsVisible();
  });

  const expectedAllEventTableDetails = [
    ['','Birth', '01 Jan 1988', 'Retalhuleu, Guatemala'],
    ['2','Residence', '1990', 'Kelan, Shanxi, China'],
    ['3','Arrival', '1991', 'Yetan, Heyuan, Guangdong, China'],
    ['4','Departure', '1992', 'Retalhuleu, Guatemala'],
    ['6','Destination', '1994', 'Qeshlaghak, Badghis, Afghanistan'],
    ['7','Emigration', '1995', 'Terengganu, Malaysia'],
    ['8','Immigration', '1996', 'Refaitpur, Khulna, Bangladesh'],
    ['10','Naturalization', '1998', 'Yemen'],
    ['12','Residence', '2000', 'Gita, Stara Zagora, Bulgaria'],
    ['22','Marriage', '2010', 'Qashqah, Faryab, Afghanistan'],
    ['24','Divorce', '2012', 'Decatur County, Georgia, USA'],
    ['25','Marriage', '2013', 'Ten Boer, Groningen, Netherlands'],
    ['26','Divorce', '2014', 'Setauket, Suffolk, New York, USA'],
    ['27','Marriage', '2015', 'Terengganu, Malaysia'],
    ['29','Divorce', '2017', 'Gera, Thuringia, Germany'],
    ['32','Death', '2020', 'Pennsylvania, USA'],
  ];

  test("@Regression Verify that the life event details are visible in the All Life Events table", async ({
    pedigreePage,
    personDetailPage,
  }) => {
    await pedigreePage.clickHomePersonNode();
    await pedigreePage.clickQuickViewModalOption("View Profile");
    await personDetailPage.verifyHeaderNameIsVisible(GedcomCredentials.HomepersonName);
    await personDetailPage.verifyEventsTableWithColumnIsVisible();
    await personDetailPage.verifyEventDetailsInAllLifeEventsTable(expectedAllEventTableDetails);
  });

  const spouseDropdownList = [
    "Anna Mikami",
    "Lily Lumpkin",
    "Cleo Fraser",
    "Add New Spouse",
  ];

  test("@Regression Verify that the user should be able to see the list of available spouses and the 'Add New Spouse' option by clicking on the spouse dropdown on the Add Spousal Event modal.", async ({
    pedigreePage,
    personDetailPage,
  }) => {
    await pedigreePage.clickHomePersonNode();
    await pedigreePage.clickQuickViewModalOption("View Profile");
    await personDetailPage.verifyHeaderNameIsVisible(GedcomCredentials.HomepersonName);
    await personDetailPage.verifyEventsTableWithColumnIsVisible();
    await personDetailPage.clickAllLifeEventPlusIcon();
    await personDetailPage.enterAndSelectAddMarriageEventOption();
    await delay(5000);
    await personDetailPage.clickSpouseDropdownSectionOntheModal();
    await personDetailPage.VerifyAllSpouseOptionsAreVisible(spouseDropdownList);
  });
});

test.afterEach(async ({ page }) => {
  await page.close();
});