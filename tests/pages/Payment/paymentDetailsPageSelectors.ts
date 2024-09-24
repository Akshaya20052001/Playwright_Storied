export const selectButton = '(//span[text()="Select"])[2]'
export const paymentProcess = (cardDetails: string) => `//input[@name="${cardDetails}"]`;
export const viewSummaryButton = '//span[text()="View Summary"]';
export const radioButton = '//input[@type="checkbox"]'
export const confirmPurchaseButton = '//span[text()="Confirm Purchase"]'
export const verifyPaymentDetails = '//span[normalize-space()="Number is not a valid credit card number"]'
export const getUltimatePlan = '//div[contains(@class,"text-center")]//descendant::span[text()="Get Ultimate"]'