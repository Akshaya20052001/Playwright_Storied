import { test } from "@utilities/TestFixtures";
import { appDataDefaultCredentials } from "@data/TestDataCredentials";
import { GedcomCredentials } from "@data/MockData";
import { getBaseUrl } from "@utilities/config";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

test.describe("@Regression All Tree view read operations", () => {
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

  test("@Regression Verify that the user can change the focus person of the owned tree", async ({
    pedigreePage,
  }) => {
    await pedigreePage.clickReadMotherNode();
    await pedigreePage.clickQuickViewModalOption("View Tree");
    await pedigreePage.verifyHomePersonIsChanged(
      GedcomCredentials.HomepersonMotherName
    );
  });

  test("@Regression Verify that the user can reset the focus person to the home person", async ({
    pedigreePage,
  }) => {
    await pedigreePage.clickReadMotherNode();
    await pedigreePage.clickQuickViewModalOption("View Tree");
    await pedigreePage.verifyHomePersonIsChanged(
      GedcomCredentials.HomepersonMotherName
    );
    await pedigreePage.clickHomeIconButton();
    await pedigreePage.verifyHomePersonIsDisplayed(
      GedcomCredentials.HomepersonName
    );
  });

  test("@Regression Verify that the user can expand the tree beyond the fourth generation", async ({
    pedigreePage,
  }) => {
    await pedigreePage.clickTreeExpansionButton();
    await pedigreePage.verifyFifthGenerationNodeIsDisplayed();
  });

  test("@Regression Verify that the user can expand the siblings list for the home person", async ({
    pedigreePage,
  }) => {
    await pedigreePage.clickSiblingsListExpansionButton();
    await pedigreePage.verifySiblingNodeIsDisplayed();
  });

  test("@Regression Verify that the user should be able to search for a person within the tree", async ({
    pedigreePage,
  }) => {
    await pedigreePage.searchButtonOnPedigreeViewIsDisplayed();
    await pedigreePage.clickSearchButton();
    await pedigreePage.searchPersonByNameInput(
      GedcomCredentials.HomepersonMotherName
    );
    await pedigreePage.verifySearchedPersonResultIsVisible(
      GedcomCredentials.HomepersonMotherName
    );
  });

  test("@Regression Verify that the user should be able to initiate a process to add a father", async ({
    pedigreePage,
  }) => {
    await pedigreePage.clickReadMotherNode();
    await pedigreePage.clickQuickViewModalOption("View Tree");
    await pedigreePage.verifyHomePersonIsChanged(
      GedcomCredentials.HomepersonMotherName
    );
    await pedigreePage.clickAddFatherNode();
    await pedigreePage.verifyAddFatherModalIsVisible(
      GedcomCredentials.HomepersonMotherName
    );
  });

  test("@Regression Verify that the user should be able to initiate a process to add a mother", async ({
    pedigreePage,
  }) => {
    await pedigreePage.clickReadMotherNode();
    await pedigreePage.clickQuickViewModalOption("View Tree");
    await pedigreePage.verifyHomePersonIsChanged(
      GedcomCredentials.HomepersonMotherName
    );
    await pedigreePage.clickAddMotherNode();
    await pedigreePage.verifyAddMotherModalIsVisible(
      GedcomCredentials.HomepersonMotherName
    );
  });

  test("@Regression Verify that the user should be able to open the Quick View modal for the tree person", async ({
    pedigreePage,
  }) => {
    await pedigreePage.clickHomePersonNode();
    await pedigreePage.verifyQuickViewModalIsVisible();
  });

  test("@Regression Verify that the user should be able to open the Quick Edit modal for the tree person", async ({
    pedigreePage,
  }) => {
    await pedigreePage.clickHomePersonNode();
    await pedigreePage.verifyQuickViewModalIsVisible();
    await pedigreePage.clickQuickViewModalOption("Quick Edit");
    await pedigreePage.verifyQuickEditModalIsVisible();
  });

  test("@Regression Verify that the user should be able to see the Add Family modal options for the tree person who has both parents", async ({
    pedigreePage,
  }) => {
    await pedigreePage.clickHomePersonNode();
    await pedigreePage.verifyQuickViewModalIsVisible();

    const options = ["Add Child", "Add Spouse", "Add Sibling"];

    for (const option of options) {
      await pedigreePage.clickQuickViewModalOption("Add Family");
      await pedigreePage.verifyAddFamilyButtonIsVisible(option);
    }
  });

  test("@Regression Verify Add Family modal options for single parent in tree", async ({
    pedigreePage,
  }) => {
    await pedigreePage.clickReadFatherNode();
    await pedigreePage.verifyQuickViewModalIsVisible();

    const options = ["Add Child", "Add Spouse", "Add Sibling", "Add Parent"];

    for (const option of options) {
      await pedigreePage.clickQuickViewModalOption("Add Family");
      await pedigreePage.verifyAddFamilyButtonIsVisible(option);
    }
  });

  test("@Regression Verify that the user should be able to see the Add Family modal options for the tree person who has no parent", async ({
    pedigreePage,
  }) => {
    await pedigreePage.clickReadMotherNode();
    await pedigreePage.verifyQuickViewModalIsVisible();
    const options = ["Add Child", "Add Spouse", "Add Parent"];

    for (const option of options) {
      await pedigreePage.clickQuickViewModalOption("Add Family");
      await pedigreePage.verifyAddFamilyButtonIsVisible(option);
    }
  });

  test("@Regression Verify the user should be able to switch between the recently viewed trees through the tree label dropdown", async ({
    pedigreePage,
  }) => {
    await pedigreePage.ClickTreeMainTitleElement();
    await pedigreePage.clickTreeLabelDropdownOption("Second Tree");
    await pedigreePage.VerifySecondTreePedigreePageIsVisible(
      GedcomCredentials.HomepersonName
    );
  });

  test.describe("@Regression Verify that the user can navigate to the Trees section of the Settings page through the Tree Label dropdown", () => {
    test("@Regression Verify that the user can navigate to the Trees section of the Settings page through the 'See All Trees' dropdown option", async ({
      pedigreePage,
      settingsPage,
    }) => {
      await pedigreePage.ClickTreeMainTitleElement();
      await pedigreePage.clickTreeLabelDropdownOption("See All Trees");
      await settingsPage.verifyUserIsAtSettingsPageTreesSection();
    });

    test("@Regression Verify that the user can navigate to the Trees section of the Settings page through the 'Tree Settings' dropdown option", async ({
      pedigreePage,
      settingsPage,
    }) => {
      await pedigreePage.ClickTreeMainTitleElement();
      await pedigreePage.clickTreeLabelDropdownOption("Tree Settings");
      await settingsPage.verifyUserIsAtSettingsPageTreesSection();
    });
  });

  test("@Regression Verify that the user should be able to navigate to various Sections of the person page", async ({
    pedigreePage,
  }) => {
    await pedigreePage.clickHomePersonNode();
    await pedigreePage.verifyQuickViewModalIsVisible();
    await pedigreePage.clickQuickViewModalOption("View Profile");
    await pedigreePage.verifyUserLandsOnThePersonProfilePage(
      GedcomCredentials.HomepersonName
    );
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });
});
