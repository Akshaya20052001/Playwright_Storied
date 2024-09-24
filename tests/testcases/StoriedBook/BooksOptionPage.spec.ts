import { test } from '@utilities/TestFixtures';
import { storiedBookDefaultCredentials } from '@data/TestDataCredentials';
import { getBaseUrl } from '@utilities/config';
import { BooksOptionValues, ForewordContentForCharacterLimit } from '@data/MockData';

const color =
  [{ color: "PaleGray" }, { color: "MistyBlue" }, { color: "RosePink" }, { color: "Sand" },
  { color: "Charcoal" }, { color: "ForestGreen" }, { color: "TigerEye" }, { color: "MidnightBlue" }, { color: "DarkLavender" },
  { color: "Wine" }, { color: "Clay" }, { color: "DeepOceanBlue" }, { color: "Slate" }, { color: "Cherry" },
  { color: "SkyBlue" }, { color: "Ruby" }, { color: "Barley" }, { color: "Lavender" }, { color: "CobaltBlue" },
  ];

const cancelAddForewordModal =
  [{ action: "Click On Cancel Icon" },
  { action: "Click On X Icon" },
  ];

test.beforeEach(async ({ accessPage, loggedOutHomePage, homePage, loginPage, printStoriedBookPage }, testInfo) => {
  // Extend timeout for all tests running this hook by 30 seconds.
  testInfo.setTimeout(testInfo.timeout + 60000);
  await accessPage.goto(getBaseUrl())
  await loggedOutHomePage.clickSignInButtonLohp();
  await loginPage.setEmail(storiedBookDefaultCredentials.Email);
  await loginPage.setPassword(storiedBookDefaultCredentials.Password);
  await loginPage.clickSignInButton();
  await homePage.verifyOnHomepage();
  await printStoriedBookPage.clickOnPrintStoriedBookLink();
  await printStoriedBookPage.verifyOnPrintStoriedBookPage();
  await printStoriedBookPage.clickOnGetStartedButtonElement();
  await printStoriedBookPage.selectSingleStoryInselectStoriesForStoriedBook();
  await printStoriedBookPage.clickNextButtonOfSelectStories();
  await printStoriedBookPage.verifyNextButtonOfSelectStoriesIsVisible();
  await printStoriedBookPage.clickNextButtonOfChooseStoryOrderPage();
  await printStoriedBookPage.verifyUserIsAtBooksOptionsPage();
});

test(`@Regression @Smoke Validate When User Enters Title Name in the Title input box on the booksOptions page it should reflect on the Front title cover and in the mid book title`,
  async ({ printStoriedBookPage }) => {
    await printStoriedBookPage.removeTitleNameIfAlreadyExists();
    await printStoriedBookPage.setTitleNameOnTheBooksOptionPage(BooksOptionValues.TitleName);
    await printStoriedBookPage.verifySavedTitleNameVisibleOnBooksPage(BooksOptionValues.TitleName);
    await printStoriedBookPage.clickOnCloseButtonBooksOptionsPage();
    await printStoriedBookPage.verifySavedOptionsForTheDraftStoriedBooks("checkTitle", BooksOptionValues.TitleName);
  });

test(`@Regression @Smoke verify when the user sets Subtitle in the Add subtitle placeholder subtitle get reflected on the front subtitle cover`,
  async ({ printStoriedBookPage }) => {

    await printStoriedBookPage.clickOnAddSubtitile();
    await printStoriedBookPage.setSubtitleName(BooksOptionValues.SubtitleName);
    await printStoriedBookPage.verifySavedSubtitleVisibleOnBooksPage(BooksOptionValues.SubtitleName);
    await printStoriedBookPage.clickOnCloseButtonBooksOptionsPage();
    await printStoriedBookPage.verifySavedOptionsForTheDraftStoriedBooks("checkSubtitle", BooksOptionValues.SubtitleName);
  });

test(`@Regression verify the character limit validations on the Book title on the Books option page`,
  async ({ printStoriedBookPage }) => {
    await printStoriedBookPage.removeTitleNameIfAlreadyExists();
    await printStoriedBookPage.setTitleNameOnTheBooksOptionPage(BooksOptionValues.TitleNameForCharacterLimitValidation);
    await printStoriedBookPage.verifyCharacterLimitValidation("title", BooksOptionValues.TitleNameForCharacterLimitValidation);
  });

test(`@Regression verify the character limit validations on the Book subtitle on the Books option page`,
  async ({ printStoriedBookPage }) => {
    await printStoriedBookPage.clickOnAddSubtitile();
    await printStoriedBookPage.setSubtitleName(BooksOptionValues.SubtitleNameForCharacterLimitValidation);
    await printStoriedBookPage.verifyCharacterLimitValidation("subTitle", BooksOptionValues.SubtitleNameForCharacterLimitValidation);
  });

test(`@Regression verify User should be able to replace the existing title in the Books Options Page`,
  async ({ printStoriedBookPage }) => {
    await printStoriedBookPage.setTitleNameOnTheBooksOptionPage(BooksOptionValues.TitleName);
    await printStoriedBookPage.verifySavedTitleNameVisibleOnBooksPage(BooksOptionValues.TitleName);
    await printStoriedBookPage.replaceTheExistingTitleOnInputBox(BooksOptionValues.NewTitleName);
    await printStoriedBookPage.verifySavedTitleNameVisibleOnBooksPage(BooksOptionValues.NewTitleName);
  });

test(`@Regression verify User should be able to replace the existing Subtitle in the Books Options Page`,
  async ({ printStoriedBookPage }) => {
    await printStoriedBookPage.clickOnAddSubtitile();
    await printStoriedBookPage.setSubtitleName(BooksOptionValues.SubtitleName);
    await printStoriedBookPage.replaceTheExistingSubtitle(BooksOptionValues.NewSubtitleName);
    await printStoriedBookPage.verifySavedSubtitleVisibleOnBooksPage(BooksOptionValues.NewSubtitleName);
  });

test(`@Regression verify user should be able to remove the existing Subtitle in the Books Options Page`,
  async ({ printStoriedBookPage }) => {
    await printStoriedBookPage.clickOnAddSubtitile();
    await printStoriedBookPage.setSubtitleName(BooksOptionValues.SubtitleName);
    await printStoriedBookPage.removeSubtitleName();
    await printStoriedBookPage.verifySubtitleGotRemoved();
  });

test(`@Regression @Smoke verify user should be able to remove the existing title in the Books Options Page`,
  async ({ printStoriedBookPage }) => {
    await printStoriedBookPage.setTitleNameOnTheBooksOptionPage(BooksOptionValues.TitleName);
    await printStoriedBookPage.verifySavedTitleNameVisibleOnBooksPage(BooksOptionValues.TitleName);
    await printStoriedBookPage.removeTitleName();
    await printStoriedBookPage.verifyTitleGotRemoved(BooksOptionValues.TitleName);
  });

test(`@Regression verify storied watermark should be present on the book back cover`,
  async ({ printStoriedBookPage }) => {
    await printStoriedBookPage.veryStoriedWatermark();
  });

test(`@Regression @Smoke verify user is able to change the Book color`,
  async ({ printStoriedBookPage }) => {
    for (const data of color) {
      await printStoriedBookPage.selectColorFromColorPalette(data.color);
      await printStoriedBookPage.verifyTheAppliedColorOnCoverPage(data.color);
    }
  });

test(`@Regression @Smoke verify user able to add Foreword to the Storied Book`,
  async ({ printStoriedBookPage }) => {
    await printStoriedBookPage.clickAddForeword();
    await printStoriedBookPage.verifyForewordModalElementsVisisble();
    await printStoriedBookPage.setAForewordForStoriedBook(BooksOptionValues.ForwardContent);
    await printStoriedBookPage.clickSaveButtonInForewordModal();
    await printStoriedBookPage.verifyAddedForewordVisible(BooksOptionValues.ForwardContent);
  })

cancelAddForewordModal.forEach(data => {
  test(`@Regression verify user is able to cancel the Foreword ${data.action}`,
    async ({ printStoriedBookPage }) => {
      await printStoriedBookPage.clickAddForeword();
      await printStoriedBookPage.verifyForewordModalElementsVisisble();
      await printStoriedBookPage.setAForewordForStoriedBook(BooksOptionValues.ForwardContent);
      await printStoriedBookPage.clickCancelForewordModal(data.action);
      await printStoriedBookPage.discardForewordButtonOnDiscardForewordModal();
    });
})

test(`@Regression verify user is able to delete the existing Foreword`,
  async ({ printStoriedBookPage }) => {
    await printStoriedBookPage.clickAddForeword();
    await printStoriedBookPage.verifyForewordModalElementsVisisble();
    await printStoriedBookPage.setAForewordForStoriedBook(BooksOptionValues.ForwardContent);
    await printStoriedBookPage.clickSaveButtonInForewordModal();
    await printStoriedBookPage.verifyAddedForewordVisible(BooksOptionValues.ForwardContent);
    await printStoriedBookPage.clickOnForewordTrashIcon();
    await printStoriedBookPage.verifyExistingForewordGotRemoved();
  })

test(`@Regression verify user is able to edit and Replace the existing Foreword`,
  async ({ printStoriedBookPage }) => {
    await printStoriedBookPage.clickAddForeword();
    await printStoriedBookPage.verifyForewordModalElementsVisisble();
    await printStoriedBookPage.setAForewordForStoriedBook(BooksOptionValues.ForwardContent);
    await printStoriedBookPage.clickSaveButtonInForewordModal();
    await printStoriedBookPage.verifyAddedForewordVisible(BooksOptionValues.ForwardContent);
    await printStoriedBookPage.replaceExistingForeword(BooksOptionValues.NewforewardContent);
    await printStoriedBookPage.clickSaveButtonInForewordModal();
    await printStoriedBookPage.verifyAddedForewordVisible(BooksOptionValues.NewforewardContent);
  })

test(`@Regression verify user is able to close the discard Foreword modal and set the Foreword`,
  async ({ printStoriedBookPage }) => {
    await printStoriedBookPage.clickAddForeword();
    await printStoriedBookPage.verifyForewordModalElementsVisisble();
    await printStoriedBookPage.setAForewordForStoriedBook(BooksOptionValues.ForwardContent);
    await printStoriedBookPage.closeTheDiscardForewordModalByClickingXIcon();
    await printStoriedBookPage.clickSaveButtonInForewordModal();
    await printStoriedBookPage.verifyAddedForewordVisible(BooksOptionValues.ForwardContent);
  })

test(`@Regression verify user is able to Save & close the discard Foreword`,
  async ({ printStoriedBookPage }) => {
    await printStoriedBookPage.clickAddForeword();
    await printStoriedBookPage.verifyForewordModalElementsVisisble();
    await printStoriedBookPage.setAForewordForStoriedBook(BooksOptionValues.ForwardContent);
    await printStoriedBookPage.clickOnSaveAndCloseButtonDiscardForewardModal();
    await printStoriedBookPage.verifyAddedForewordVisible(BooksOptionValues.ForwardContent);
  })

test(`@Regression verify character limit validations on Foreword`,
  async ({ printStoriedBookPage }) => {
    await printStoriedBookPage.clickAddForeword();
    await printStoriedBookPage.verifyForewordModalElementsVisisble();
    await printStoriedBookPage.setAForewordForStoriedBook(ForewordContentForCharacterLimit);
    await printStoriedBookPage.verifyCharacterLimitValidation("Foreword", ForewordContentForCharacterLimit);
  })

test.afterEach(async ({ page }) => {
  await page.close();
});