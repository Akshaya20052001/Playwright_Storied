import { faker } from "@faker-js/faker";

export const personMockCredentials =
{
    FirstName: "George",
    LastName: "Ken",
    BirthDate: "19 June 2016",
    BirthLocation: "USA",
}

export const GedcomCredentials =
{
    GedcomName: "Owner Tree Pedigree View Feature",
    HomepersonName: "Kyle Allen",
    HomepersonFirstName: "Kyle",
    HomepersonLastName: "Allen",
    HomepersonGender: "M",
    HomepersonMotherName: "Jorja Fox",
    HomepersonFatherName: "David Allen",
    HomepersonBirthDetails: "01 Jan 1988 ∙ Retalhuleu, Guatemala",
    HomepersonDeathDetails: "D: 2020 ∙ Pennsylvania, USA",
    HomepersonMotherDeathDetails: "D: Living",
    HomepersonSiblingBirthDetails: "Unknown",
}

export const BooksOptionValues =
{
    TitleName: "MyFirstStoriedBook",
    SubtitleName: "UITesting",
    NewTitleName: "MySecondStoriedBook",
    NewSubtitleName: "AutomationTesting",
    TitleNameForCharacterLimitValidation: "This is title of StoriedBook having more than Sixty Characters Count",
    SubtitleNameForCharacterLimitValidation: "This is SubTitle of StoriedBook having more than Fourty Characters",
    ForwardContent: "This book is related to Automation Testing",
    NewforewardContent: "This is New Foreword content",
}

export const ForewordContentForCharacterLimit = faker.lorem.paragraphs(9);

export const HomePersonDetails = {
    HomePersonFirstName: faker.person.firstName('male'),
    HomePersonLastName: faker.person.lastName('male'),
    HomePersonBirthDate: faker.date.between({ from: '2000-01-01T00:00:00.000Z', to: '2015-01-01T00:00:00.000Z' }),
    BirthPlace: "New Zealand",
    Region: "New York, USA"
}

export const FatherDetails = {
    FatherFirstName: faker.person.firstName('male'),
    FatherLastName: faker.person.firstName('male'),
    FatherBirthDate: faker.date.between({ from: '1970-01-01T00:00:00.000Z', to: '1980-01-01T00:00:00.000Z' }),
}

export const MotherDetails = {
    MotherFirstName: faker.person.firstName('female'),
    MotherLastName: faker.person.firstName('female'),
    MotherBirthDate: faker.date.between({ from: '1970-01-01T00:00:00.000Z', to: '1980-01-01T00:00:00.000Z' }),
}

export const PaternalGrandParentDetails = {
    PaternalGrandMotherFirstName: faker.person.firstName('female'),
    PaternalGrandMotherLastName: faker.person.firstName('female'),
    PaternalGrandMotherBirthDate: faker.date.between({ from: '1950-01-01T00:00:00.000Z', to: '1960-01-01T00:00:00.000Z' }),
    PaternalGrandFatherFirstName: faker.person.firstName('male'),
    PaternalGrandFatherLastName: faker.person.firstName('male'),
    PaternalGrandFatherBirthDate: faker.date.between({ from: '1950-01-01T00:00:00.000Z', to: '1980-01-01T00:00:00.000Z' }),
}

export const MaternalGrandParentDetails = {
    MaternalGrandMotherFirstName: faker.person.firstName('female'),
    MaternalGrandMotherLastName: faker.person.firstName('female'),
    MaternalGrandMotherBirthDate: faker.date.between({ from: '1950-01-01T00:00:00.000Z', to: '1960-01-01T00:00:00.000Z' }),
    MaternalGrandFatherFirstName: faker.person.firstName('male'),
    MaternalGrandFatherLastName: faker.person.firstName('male'),
    MaternalGrandFatherBirthDate: faker.date.between({ from: '1950-01-01T00:00:00.000Z', to: '1980-01-01T00:00:00.000Z' }),
}

export const spouseDetails = {
    SpouseFirstName: faker.person.firstName('male'),
    SpouseLastName: faker.person.lastName('male'),
    SpouseBirthDate: faker.date.between({ from: '2000-01-01T00:00:00.000Z', to: '2015-01-01T00:00:00.000Z' }),
    BirthPlace: "New Zealand",
    Region: "New York, USA",
    MarriageDate: "2000",
    MarriagePlace: "USA",
}

export const editMarraigeDetails = {
    editMarriageDate: "2001",
    editMarriagePlace: "Canada",
}

export const SiblingDetails = {
    SiblingFirstName: faker.person.firstName('male'),
    SiblingLastName: faker.person.lastName('male'),
    SiblingBirthDate: faker.date.between({ from: '2000-01-01T00:00:00.000Z', to: '2015-01-01T00:00:00.000Z' }),
    BirthPlace: "New Zealand",
    Region: "New York, USA"
}

export const ChildDetails = {
    ChildFirstName: faker.person.firstName('male'),
    ChildLastName: faker.person.lastName('male'),
    ChildBirthDate: faker.date.between({ from: '2019-01-01T00:00:00.000Z', to: '2022-01-01T00:00:00.000Z' }),
    BirthPlace: "New Zealand",
    Region: "New York, USA"
}

export const editPersonDetails = {
    updatedFirstName: faker.person.firstName('female'),
    updatedLastName: faker.person.lastName('female'),
    updatedBirthDate: "1998",
    BirthPlace: "Canada",
}

export const personDeathDate = {
    deathDate: faker.date.between({ from: '2019-01-01T00:00:00.000Z', to: '2023-01-01T00:00:00.000Z' }),
    deathPlace: "USA",
}

export const editDeathDetails = {
    updatedDeathDate: "2024",
    updatedDeathPlace: "Canada",
}

export const paymentDetails = {
    cardName: "Robin",
    cardNumber: "13245898798569235",
    expiryDate: "11/26",
    cvc: "123",
    postalCode: "84604",
}

export const uploadGedcomHints = {
    gedcomName: "Bradford Hint Family Tree.ged",
    homePersonName: "Kevin Bradford",
}

export const hintsPersonDetails = {
    homePersonFirstName: "Kevin",
    homePersonLastName: "Bradford",
    homepersonBirthDate : "1990",

    fatherFirstName: "Charles Raymond",
    fatherLastName: "Bradford",  
    fatherBirthDate : '23 Jun 1883',
    fatherBirthPlace : "Salt Lake City, Salt Lake, Utah, USA",
    fatherDeathDate : '12 Mar 1966',
    fatherDeathPlace : "Provo, Utah, USA",
}


