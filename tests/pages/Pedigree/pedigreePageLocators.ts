import { Page } from '@playwright/test';

const createButtonLocator = (page: Page, buttonName: string) => {
    return page.getByRole('button', { name: buttonName });
};

export const ModalButtonLocators = (page: Page) => {
    return {
        viewTree: createButtonLocator(page, 'View Tree'),
        viewProfile: createButtonLocator(page, 'View Profile'),
        quickEdit: createButtonLocator(page, 'Quick Edit'),
        addFamily: createButtonLocator(page, 'Add Family'),
        searchRecords: createButtonLocator(page, 'Search Records'),
        addParent: createButtonLocator(page, 'Add Parent'),
        addChild: createButtonLocator(page, 'Add Child'),
        addSpouse: createButtonLocator(page, 'Add Spouse'),
        addSibling: createButtonLocator(page, 'Add Sibling'),
    };
};

export const Locators = (page: Page) => ({

    homepersonNode: page.locator('css=.text-base').first(),
    homepersonMotherNode: page.getByTestId('d3-tree-viewer').getByText('Jorja Fox'),
    homepersonFatherNode: page.getByTestId('d3-tree-viewer').getByText('David Allen'),
    siblingExpansionIcon: page.locator('.sibling-chevron'),
    fifthGenNode: page.locator('.wa-focused-card'),
    treeExpansionIcon: page.locator('g').filter({ hasText: /^Great G G F Allen$/ }).locator('image'),
    homeIcon: page.locator('#homePerson').getByRole('img'),
    homepersonSiblingNode: page.getByTestId('d3-tree-viewer').getByText('Sibling Allen'),
    searchIcon: page.getByTestId('search-people'),
    searchPeoplePlaceholder: page.getByTestId('search-drawer').getByPlaceholder('Search'),
    searchedPeopleText: page.locator('.tree-person-name'),
    emptyFatherNode: page.getByText('+ Add Father'),
    emptyMotherNode: page.getByText('+ Add Mother'),
    treeMainTitle: page.locator('.icon-placeholder'),
    seeAllTreesDropdown: page.getByRole('link', { name: 'See All Trees' }),
    treeSettingsDropdown: page.getByRole('link', { name: 'Tree Settings' }),
    secondTreeDropdown: page.locator('xpath=//*[@id="treename-popper"]/div/ul/li[1]'),
    personPageHeaderName: page.locator('xpath=//span[@class="defaultText default-color text-4xl typo-font-medium "]'),

    firstName: page.getByLabel('First & Middle Name(s)'),
    lastName: page.getByLabel('Last Name(s)'),
    nextButtonHomePersonDetails: page.getByRole('button', { name: 'Next' }),
    treeProgressDrawer: page.getByTestId('tree-progress-drawer'),
    addYourFatherButtonProgressDrawer: page.getByRole('button', { name: 'Add Your Father' }),
    addPersonButton: page.getByRole('button', { name: 'Add Person' }),
    progressMeterPercentage: page.locator("xpath=//div[@class='mr-4']//div[@class='MuiTypography-root MuiTypography-caption css-rqnof7']"),
    progressStatus: page.locator("xpath=//div[@class='progress-status']"),
    messageForPaternalParentsDisabledButton: page.getByLabel('To add your paternal grandparents, first add your father'),
    paternalGrandFatherDropdown: page.getByRole('button', { name: 'Your Paternal Grandfather 0/4' }),
    paternalGrandMotherDropdown: page.getByRole('button', { name: 'Your Paternal Grandmother 0/4' }),
    addMotherButton: page.getByTestId('d3-tree-viewer').locator('div').filter({ hasText: '+ Add Mother' }).nth(2),
    maternalGrandFatherDropdown: page.getByRole('button', { name: 'Your Maternal Grandfather 0/4' }),
    maternalGrandMotherDropdown: page.getByRole('button', { name: 'Your Maternal Grandmother 0/4' }),
    residenceCheckBoxForHomePerson: page.getByRole('region').getByText('Residence'),
    bithDateCheckBoxForHomePerson: page.getByRole('region').getByText('Birthdate'),
    birthPlaceCheckBoxForHomePerson: page.getByRole('region').getByText('Birthplace'),
    residenceInputBoxPlaceholder: page.locator("xpath=//div[@class='location-closebox']//input[@placeholder='City, County, State, Country']"),
    birthdateInputBoxPlaceholder: page.getByLabel('Birthdate'),
    birthPlaceInputBoxPlaceholder: page.locator('#birthPlace'),
    maleGenderSelector: page.getByText('Male', { exact: true }),
    saveDetailsButton: page.getByRole('button', { name: 'Save' }),
    checkCountHomePerson: page.locator("xpath=//span[@data-testid='text.you-checkCount']"),
    addYourPaternalGrandFatherButton: page.getByRole('button', { name: 'Add Your Paternal Grandfather' }),
    addYourPaternalGrandMotherButton: page.getByRole('button', { name: 'Add Your Paternal Grandmother' }),
    addYourMaternalGrandFatherButton: page.getByRole('button', { name: 'Add Your Maternal Grandfather' }),
    addYourMaternaGrandMotherButton: page.getByRole('button', { name: 'Add Your Maternal Grandmother' }),
    twModal: page.locator('#twModal'),
    niceJobTexttwModal: page.getByText('Nice job!'),
    confettiImagetwModal: page.getByRole('img', { name: 'confetti' }),
    youHaveCompletedFirstThreeTexttwModal: page.getByText('You’ve completed the first three generations of your family tree.'),
    returnToTreeButtontwModal: page.getByTestId('returntoTreeBtn'),
    searchPeopleIcon: page.getByTestId('search-people'),
    searchPersonInTheList: page.locator("xpath=//li[@tabindex='-1']"),
    focusPersonName: page.locator("xpath=//div[@class='flex p-0']//div//div").first(),
    addYourMotherButtonTreeProgressDrawer: page.getByRole('button', { name: 'Add Your Mother' }),
    searchListCount: page.locator("xpath=//ul[@role='listbox']//li"),
    homepersonNameInSearchList: page.locator("xpath=//ul[@role='listbox']//li"),
    motherNameInSearchList: page.locator("xpath=//div[@class='tree-person-name']//span[2]"),
    fatherNameInSearchList: page.locator("xpath=//div[@class='tree-person-name']//span[3]"),
    closeDrawerButton: page.locator("xpath=//div[@class='drawer-close']//div//*[name()='svg']").last(),
    treeProgressMeter: page.getByTestId('tree-progress-meter').nth(1),
    bottomHomePersonIcon: page.locator('#btnhomePerson'),
    resetButton: page.locator('#btnreset'),
    treeZoomInIcon: page.locator('#btnplus').first(),
    treeZoomOutIcon: page.locator('#btnminus').first(),
    iconCheckCircle: page.locator("xpath=//div[@data-testid='icon-checkCircle']").first(),
    treeTaskTitleText: page.getByRole('heading', { name: 'Tree Tasks' }),
    treeTaskSubtitleText: page.getByText('Complete the following tasks to get started with your family tree.'),
    treeTaskAccordionExpandedAreaForHomePerson: page.locator("xpath=//div[@class='treetask-accordion']//div//div[@aria-expanded='true']"),
    searchPersonNameInSeachDrawer: page.locator("xpath=//div[@class='tree-person-name']//span"),
    maleButtonOnDetails: page.locator('[data-test="select-button"]').first(),
    femaleButtonOnDetails: page.locator('[data-test="select-button"]').nth(1),
    othersButtonOnDetails: page.locator('[data-test="select-button"]').nth(2),

    addSpouseButtonInQuickviewModel: page.getByRole('button', { name: 'Add Spouse' }),
    thisPersonIsLivingCheckbox: page.getByLabel('isLiving'),
    deathDateInputBox: page.getByLabel('Death Date'),
    deathPlaceInputBox: page.locator('#deathPlace'),
    familySearchImportTreeSuccessSnackbar : page.locator("//*[@id='root']/div[1]/div[2]/div/div/div[2]/p/span").first(),
    familySearchImportMemoriesSuccessSnackbar : page.locator("xpath=//*[@id='root']/div[1]/div[2]/div/div/div[2]/p/span").first(),
    hintsGenerated : page.locator('#card-2').getByTestId('HintIconSVG').locator('div').first(),

    firstNamePlaceholder: page.locator('#firstName'),
    lastNamePlaceholder: page.locator('#lastName'),
    birhtDatePlaceholder: page.getByLabel('#birth'),
    birthLocationPlaceholder: page.locator('#birthPlace'),
    islivingCheckbox: page.locator('#isLiving'),
    deathDatePlaceholder: page.locator('#death'),
    deathLocationPlaceholder: page.locator('#deathPlace'),

    addChildButtonInQuickviewModel: page.getByRole('button', { name: 'Add Child' }),
    addParentsButtonInQuickviewModel: page.getByRole('button', { name: 'Add Parent' }),
    addSiblingButtonInQuickviewModel: page.getByRole('button', { name: 'Add Sibling' }),
});