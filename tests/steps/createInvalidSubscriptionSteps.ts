import { HomePage, PaymentDetailsPage } from "../pages";
import { Page, expect } from "@playwright/test";
import { paymentDetails } from "@data/MockData";
export class CreateInvalidSubscriptionSteps {
  private readonly homePage: HomePage;
  private readonly paymentDetailsPage: PaymentDetailsPage;
  constructor(page: Page) {
    this.homePage = new HomePage(page);
    this.paymentDetailsPage = new PaymentDetailsPage(page);
  }

  async paymentProcess(): Promise<void> {
    await this.homePage.clicksubscribeButton();
    await this.paymentDetailsPage.clikGetUltimatePlan();
    await this.paymentDetailsPage.chooseADuration();
    for (const key in paymentDetails) {
      switch (key) {
        case "cardName":
          await this.paymentDetailsPage.fillPaymentDetails(
            key,
            paymentDetails["cardName"]
          );
          break;
        case "cardNumber":
          await this.paymentDetailsPage.fillPaymentDetails(
            key,
            paymentDetails["cardNumber"]
          );
          break;
        case "expiryDate":
          await this.paymentDetailsPage.fillPaymentDetails(
            key,
            paymentDetails["expiryDate"]
          );
          break;
        case "cvc":
          await this.paymentDetailsPage.fillPaymentDetails(
            key,
            paymentDetails["cvc"]
          );
          break;
        case "postalCode":

          
          await this.paymentDetailsPage.fillPaymentDetails(
            key,
            paymentDetails["postalCode"]
          );
          break;
      }
    }
    await this.paymentDetailsPage.clickviewsummaryButton();
    await this.paymentDetailsPage.clickRadioButton();
    await this.paymentDetailsPage.clickConfirmPurchaseButton();
    await this.paymentDetailsPage.verifyingTheErrorMsg();
  }
}
