import { Page } from '@playwright/test';

export const Locators = (page: Page) => ({

   personName: page.getByTestId("person-name"),
   birthDate: page.locator('xpath=//div[@class="profile-card"]/div[2]/div[2]/span'),
   deathdate: page.locator('xpath=//div[@class="profile-card"]/div[2]/div[3]/span'),
   emptyProfileImagePlaceholder: page.locator('xpath=//*[@id="pr-header"]/div/div/div/div[1]/div/div/div'),
   emptyBackgroundImagePlaceholder: page.getByTestId("icon-camera"),
   existingProfilePhoto: page.getByRole('img', { name: 'card-pic-medium' }).last(),
   existingBackgroundPhoto: page.locator('#heroImagePopover'),
   viewProfilePhoto: page.getByRole('menuitem', { name: 'View profile photo' }),
   resizeProfilePhoto: page.getByRole('menuitem', { name: 'Resize profile photo' }),
   chooseNewProfilePhoto: page.getByRole('menuitem', { name: 'Choose new profile photo' }),
   removeProfilePhoto: page.getByRole('menuitem', { name: 'Remove profile photo' }),
   viewBackgroundPhoto: page.getByRole('menuitem', { name: 'View background photo' }),
   resizeBackgroundPhoto: page.getByRole('menuitem', { name: 'Resize background photo' }),
   chooseNewBackgroundPhoto: page.getByRole('menuitem', { name: 'Choose new background photo' }),
   removeBackgroundPhoto: page.getByRole('menuitem', { name: 'Remove background photo' }),
   personalInfoFirstNameTextElement: page.locator('xpath=//*[@id="PERSONAL_INFO_0_0"]/div/div'),
   personalInfoLastNameTextElement: page.locator('xpath=//*[@id="PERSONAL_INFO_0_1"]/div/div'),
   personalInfoGenderElement: page.locator('xpath=//*[@id="PERSONAL_INFO_0_2"]/div/div'),

   eventsTableEventColumn: page.locator('xpath=//*[@id="events"]/thead/tr/th[1]'),
   eventsTableAgeColumn: page.locator('xpath=//*[@id="events"]/thead/tr/th[2]'),
   eventsTableDateColumn: page.locator('xpath=//*[@id="events"]/thead/tr/th[3]'),
   eventsTableLocationColumn: page.locator('xpath=//*[@id="events"]/thead/tr/th[4]'),
   eventsTableRelationshipColumn: page.locator('xpath=//*[@id="events"]/thead/tr/th[5]'),
   eventsTableFirstRowEventColumn: page.locator('xpath=//*[@id="EVENTS_0_0"]/div/div'),
   eventsTableFirstRowRelationshipColumn: page.locator('xpath=//*[@id="EVENTS_0_4"]/div'),

   spouseAndChildrenTableNameColumn: page.locator('xpath=//*[@id="person-page"]/div/div/div[5]/table/thead/tr/th[1]'),
   spouseAndChildrenTableGenderColumn: page.locator('xpath=//*[@id="person-page"]/div/div/div[5]/table/thead/tr/th[2]'),
   spouseAndChildrenTableBirthColumn: page.locator('xpath=//*[@id="person-page"]/div/div/div[5]/table/thead/tr/th[3]'),
   spouseAndChildrenTableBirthplaceColumn: page.locator('xpath=//*[@id="person-page"]/div/div/div[5]/table/thead/tr/th[4]'),
   spouseAndChildrenTableDeathDateColumn: page.locator('xpath=//*[@id="person-page"]/div/div/div[5]/table/thead/tr/th[5]'),
   spouseAndChildrenTableDeathPlaceColumn: page.locator('xpath=//*[@id="person-page"]/div/div/div[5]/table/thead/tr/th[6]'),
   spouseAndChildrenTableMarriageColumn: page.locator('xpath=//*[@id="person-page"]/div/div/div[5]/table/thead/tr/th[7]'),
   spouseAndChildrenTableSpouseColumn: page.locator('xpath=//*[@id="person-page"]/div/div/div[5]/table/thead/tr/th[8]'),

   parentsAndSiblingsTableNameColumn: page.locator('xpath=//*[@id="person-page"]/div/div/div[6]/div/table/thead/tr/th[1]'),
   parentsAndSiblingsTableGenderColumn: page.locator('xpath=//*[@id="person-page"]/div/div/div[6]/div/table/thead/tr/th[2]'),
   parentsAndSiblingsTableBirthColumn: page.locator('xpath=//*[@id="person-page"]/div/div/div[6]/div/table/thead/tr/th[3]'),
   parentsAndSiblingsTableBirthplaceColumn: page.locator('xpath=//*[@id="person-page"]/div/div/div[6]/div/table/thead/tr/th[4]'),
   parentsAndSiblingsTableDeathDateColumn: page.locator('xpath=//*[@id="person-page"]/div/div/div[6]/div/table/thead/tr/th[5]'),
   parentsAndSiblingsTableDeathPlaceColumn: page.locator('xpath=//*[@id="person-page"]/div/div/div[6]/div/table/thead/tr/th[6]'),
   parentsAndSiblingsTableMarriageColumn: page.locator('xpath=//*[@id="person-page"]/div/div/div[6]/div/table/thead/tr/th[7]'),
   parentsAndSiblingsTableSpouseColumn: page.locator('xpath=//*[@id="person-page"]/div/div/div[6]/div/table/thead/tr/th[8]'),

   lifeEventsTableAgeColumn: page.locator('xpath=//*[@id="lifeEvents"]/thead/tr/th[1]'),
   lifeEventsTableTypeColumn: page.locator('xpath=//*[@id="lifeEvents"]/thead/tr/th[2]'),
   lifeEventsTableDateColumn: page.locator('xpath=//*[@id="lifeEvents"]/thead/tr/th[3]'),
   lifeEventsTableLocationColumn: page.locator('xpath=//*[@id="lifeEvents"]/thead/tr/th[4]'),
   lifeEventsTableDescriptionColumn: page.locator('xpath=//*[@id="lifeEvents"]/thead/tr/th[5]'),

   addFamilyPlusIcon: page.getByTestId('icon-plus').first(),
   addFamilyAddParentOption: page.getByRole('menuitem', { name: 'Parent' }),
   addFamilyAddSpouseOption: page.getByRole('menuitem', { name: 'Spouse' }),
   addFamilyAddChildOption: page.getByRole('menuitem', { name: 'Child' }),
   addFamilyAddSiblingOption: page.getByRole('menuitem', { name: 'Sibling' }),

   addLifeEventPlusIcon: page.getByTestId('icon-plus').last(),
   searchInput: page.locator('xpath=//input[@placeholder="Search events"]'),
   selectDropdownOption: page.locator('xpath=//li[@class="MuiAutocomplete-option"][@data-option-index="0"]'),
   spouseDropdownOptionOnModal: page.getByTestId('ArrowDropDownIcon').first(),
   spouseDropdowns: page.locator('xpath=//ul[@id="Spouse-listbox"]'),

   personInfoTable: page.getByText('Personal Info'),
   personInfoFirstAndMiddleNameInputBox: page.locator('xpath=//td[@id="PERSONAL_INFO_0_0"]//div//div[@class="tooltip-content"]'),
   personInfoLastNameInputBox: page.locator('xpath=//td[@id="PERSONAL_INFO_0_1"]//div//div[@class="tooltip-content"]'),
   genderPersonInfoTable: page.locator('xpath=//td[@id="PERSONAL_INFO_0_2"]//div//div[@class="tooltip-content"]'),
   femaleDropdownOptionPersonInfoTable: page.getByRole('option', { name: 'Female' }),
   givenNameInputTextBox: page.locator('input[name="givenName"]'),
   surNameInputTextBox: page.locator('input[name="surname"]'),
   birthDateInputTextBoxEventsTable: page.locator("xpath=//td[@id='EVENTS_0_2']//div//div[@class='tooltip-content']"),
   birthDateInputTextBox: page.locator('input[name="date"]'),
   birthPlaceInputTextBoxEventsTable: page.locator("xpath=//td[@id='EVENTS_0_3']//div//div[@class='tooltip-content']"),
   birthPlaceInputTextBox: page.getByPlaceholder('City, County, State, Country'),
   dropDownSelectorForUpdatedBirthPlace: page.getByRole('option', { name: 'Canada', exact: true }),

   spouseNameInputTextBoxPersonPage: page.locator("xpath=//td[@id='SPOUSES_AND_CHILDREN_0_0']//div[@class='tooltip-content']"),
   spouseFirstNameInputBox: page.getByPlaceholder('First & Middle Name(s)'),
   spouseLastNameInputBox: page.getByPlaceholder('Last Name(s)'),
   genderInputBoxForSpousePersonPage: page.locator("xpath=//td[@id='SPOUSES_AND_CHILDREN_0_1']//div[@class='tooltip-content']"),
   birthDateInputTextBoxForSpouseTable: page.locator("xpath=//td[@id='SPOUSES_AND_CHILDREN_0_2']//div[@class='tooltip-content']"),
   spouseBirthDateInputBox: page.locator('input[name="birth"]'),
   birthPlaceInputTextBoxForSpouseTable: page.locator("xpath=//td[@id='SPOUSES_AND_CHILDREN_0_3']//div[@class='tooltip-content']"),
   deathDateInputTextBoxForSpouseTable: page.locator("xpath=//td[@id='SPOUSES_AND_CHILDREN_0_4']//div[@class='tooltip-content']"),
   spouseDeathDateInputBox: page.locator('input[name="death"]'),
   deathPlaceInputTextBoxForSpouseTable: page.locator("xpath=//td[@id='SPOUSES_AND_CHILDREN_0_5']//div[@class='tooltip-content']"),
   homePersonNameInputTextBoxInSpouseTable: page.locator("xpath=//td[@id='SPOUSES_AND_CHILDREN_0_7']//div[@class='tooltip-content']"),

   genderInputBoxForChildPersonPage: page.locator("xpath=//td[@id='SPOUSES_AND_CHILDREN_1_1']//div[@class='tooltip-content']"),
   birthDateInputTextBoxForChildTable: page.locator("xpath=//td[@id='SPOUSES_AND_CHILDREN_1_2']//div[@class='tooltip-content']"),
   childBirthDateInputBox: page.locator('input[name="birth"]'),
   birthPlaceInputTextBoxForChildTable: page.locator("xpath=//td[@id='SPOUSES_AND_CHILDREN_1_3']//div[@class='tooltip-content']"),

   childNameInputTextBoxPersonPage: page.locator("xpath=//td[@id='SPOUSES_AND_CHILDREN_1_0']//div[@data-tip='true']//div[@class='tooltip-content']"),
   childFirstNameInputBox: page.getByPlaceholder('First & Middle Name(s)'),
   childLastNameInputBox: page.getByPlaceholder('Last Name(s)'),

   deathDateInputTextBoxForChildTable: page.locator("xpath=//td[@id='SPOUSES_AND_CHILDREN_1_4']//div[@class='tooltip-content']"),
   childDeathDateInputBox: page.locator('input[name="death"]'),
   deathPlaceInputTextBoxForChildTable: page.locator("xpath=//td[@id='SPOUSES_AND_CHILDREN_1_5']//div[@class='tooltip-content']"),

   parentNameInputTextBoxPersonPage: page.locator("xpath=//td[@id='PARENTS_AND_SIBLINGS_0_0']//div[@class='tooltip-content']"),
   parentFirstNameInputBox: page.getByPlaceholder('First & Middle Name(s)'),
   parentLastNameInputBox: page.getByPlaceholder('Last Name(s)'),

   genderInputBoxForFatherPersonPage: page.locator("xpath=//td[@id='PARENTS_AND_SIBLINGS_0_1']//div[@class='tooltip-content']"),
   birthDateInputTextBoxForFatherTable: page.locator("xpath=//td[@id='PARENTS_AND_SIBLINGS_0_2']//div[@class='tooltip-content']"),
   fatherBirthDateInputBox: page.locator('input[name="birth"]'),
   birthPlaceInputTextBoxForFatherTable: page.locator("xpath=//td[@id='PARENTS_AND_SIBLINGS_0_3']//div[@class='tooltip-content']"),
   deathDateInputTextBoxForFatherTable: page.locator("xpath=//td[@id='PARENTS_AND_SIBLINGS_0_4']//div[@class='tooltip-content']"),
   fatherDeathDateInputBox: page.locator('input[name="death"]'),
   deathPlaceInputTextBoxForFatherTable: page.locator("xpath=//td[@id='PARENTS_AND_SIBLINGS_0_5']//div[@class='tooltip-content']"),

   siblingNameInputTextBoxPersonPage: page.locator("xpath=//td[@id='PARENTS_AND_SIBLINGS_2_0']//div[@class='tooltip-content']"),
   siblingFirstNameInputBox: page.getByPlaceholder('First & Middle Name(s)'),
   siblingLastNameInputBox: page.getByPlaceholder('Last Name(s)'),
   genderInputBoxForSiblingPersonPage: page.locator("xpath=//td[@id='PARENTS_AND_SIBLINGS_2_1']//div[@class='tooltip-content']"),
   birthDateInputTextBoxForSiblingTable: page.locator("xpath=//td[@id='PARENTS_AND_SIBLINGS_2_2']//div[@class='tooltip-content']"),
   siblingBirthDateInputBox: page.locator('input[name="birth"]'),
   birthPlaceInputTextBoxForSiblingTable: page.locator("xpath=//td[@id='PARENTS_AND_SIBLINGS_2_3']//div[@class='tooltip-content']"),
   deathDateInputTextBoxForSiblingTable: page.locator("xpath=//td[@id='PARENTS_AND_SIBLINGS_3_4']//div[@class='tooltip-content']"),
   siblingDeathDateInputBox: page.locator('input[name="death"]'),
   deathPlaceInputTextBoxForSiblingTable: page.locator("xpath=//td[@id='PARENTS_AND_SIBLINGS_3_5']//div[@class='tooltip-content']"),
   maleGenderDropdownOptionOnPersonPage: page.locator("xpath=//li[@data-value='Male']"),
   femaleGenderDropdownOptionOnPersonPage: page.locator("xpath=//li[@data-value='Female']"),
   otherGenderDropdownOptionOnPersonPage: page.locator("xpath=//li[@data-value='Other']"),

   hintsTabElement: page.locator('#pr-header').getByRole('button', { name: 'Hints' }),
   hintsTabHintsTitleElement: page.locator('#person-page').getByRole('button', { name: 'Hints' }),
   hintsTabSavedTitleElement: page.getByRole('button', { name: 'Saved' }),
   hintsTabDiscardedTitleElement: page.getByRole('button', { name: 'Discarded' }),

   familySearchHintTitle : page.getByText('FamilySearch Family Tree'),
   familySearchCollectionTitle : page.getByText('Family Trees', { exact: true }),
   Census1940HintTitle : page.getByText('1940 United States Federal'),
   Census1940CollectionTitle : page.getByText('United States Federal Census', { exact: true }),
   USSecurityDeathIndexHintTitle :  page.getByText('U.S. Social Security Death'),
   USSecurityDeathIndexCollectionTitle : page.getByText('Birth, Marriage, Death Records'),


   birthDateInputTextBoxForAllLifeEventsTable: page.locator("xpath=//td[@id='LIFE_EVENTS_0_2']//div[@class='tooltip-content']"),
   birthPlaceInputTextBoxForAllLifeEventsTable: page.locator("xpath=//td[@id='LIFE_EVENTS_0_3']//div[@class='tooltip-content']"),

   plusIconForAllLifeEventsTable: page.getByTestId('icon-plus').last(),
   searchEventsInputForAllLifeEventsTable: page.getByPlaceholder('Search events'),
   marriageEventDropdownOption: page.getByRole('option', { name: 'Marriage', exact: true }),
   marriageDateInputBox: page.getByPlaceholder('e.g. 5 Jan 1954'),
   marriageLocationInputBox: page.getByPlaceholder('City, County, State, Country'),
   saveButtonForMarriageEvents: page.getByRole('button', { name: 'Save' }),
   marriageDateInputBoxForAllLifeEventsTable: page.locator("xpath=//td[@id='LIFE_EVENTS_1_2']//div[@class='tooltip-content']"),
   marriageLocationInputBoxForAllLifeEventsTable: page.locator("xpath=//td[@id='LIFE_EVENTS_1_3']//div[@class='tooltip-content']"),
   marriageDateInputBoxForLifeEventsTable: page.locator('input[name="date"]'),
   marriageLocationInputBoxForLifeEventsTable: page.getByPlaceholder('City, County, State, Country'),

   deathEventDropdownOption: page.getByRole('option', { name: 'Death' }),
   saveButtonForDeathEvents: page.getByRole('button', { name: 'Save' }),
   deathDateInputBox:page.locator('div').filter({ hasText: 'CancelAgeEventDateLocationDescriptionDeathYou can tab or click through fields to' }).nth(1),
   deathDateInputBoxInLifeEventsTable: page.locator('#date'),
   deathLocationInputBox:page.locator('.allevent-table > div:nth-child(2) > div:nth-child(4)'),
   deathLocationInputBoxInLifeEventsTable: page.getByPlaceholder('City, County, State, Country'),

   deathDateForAllLifeEventsTable: page.locator("xpath=//td[@id='LIFE_EVENTS_1_2']//div[@class='tooltip-content']"),
   deathDateInputBoxForAllLifeEventsTable: page.locator('input[name="date"]'),
   deathPlaceInputBoxForAllLifeEventsTable: page.locator("xpath=//td[@id='LIFE_EVENTS_1_3']//div[@class='tooltip-content']"),
   deathPlaceInputBoxForLifeEventsTable: page.getByPlaceholder('City, County, State, Country'),
});

export const familyLifeEventsTableCellSelector = (page: Page, tableRow: string, tableCell: string) => {
   return page.locator(`xpath=//*[@id="EVENTS_${tableRow}_${tableCell}"]`);
};

export const familySpouseAndChildrenTableCellSelector = (page: Page, tableRow: string, tableCell: string) => {
   return page.locator(`xpath=//*[@id="SPOUSES_AND_CHILDREN_${tableRow}_${tableCell}"]`);
};

export const familyParentsAndSiblingsTableCellSelector = (page: Page, tableRow: string, tableCell: string) => {
   return page.locator(`xpath=//*[@id="PARENTS_AND_SIBLINGS_${tableRow}_${tableCell}"]`);
};

export const familyAllLifeEventsTableCellSelector = (page: Page, tableRow: string, tableCell: string) => {
   return page.locator(`xpath=//*[@id="LIFE_EVENTS_${tableRow}_${tableCell}"]`);
};