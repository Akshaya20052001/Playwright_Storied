import { Page } from "@playwright/test";
import * as selectors from './paymentDetailsPageSelectors'
export class PaymentDetailsPage {
    public readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    async clikGetUltimatePlan() {
        await this.page.click(selectors.getUltimatePlan);
    }

    async chooseADuration() {
        await this.page.click(selectors.selectButton);
    }

    async fillPaymentDetails(fieldName: string, cardDetails: string) {
        await this.page.fill(selectors.paymentProcess(fieldName), cardDetails);
    }
    
    async clickviewsummaryButton() {
        await this.page.click(selectors.viewSummaryButton);
    }

    async clickRadioButton() {

        await this.page.click(selectors.radioButton);
    }

    async clickConfirmPurchaseButton() {
        await this.page.click(selectors.confirmPurchaseButton);
    }

    async verifyingTheErrorMsg() {
        await this.page.isVisible(selectors.verifyPaymentDetails)

    }

}
