import test from "../../../utilities/TestFixtures";

test.describe("Create Invalid Subscription", () => {
  test("Create Invalid Subscription", async ({
    loginSteps,
    createInvalidSubscriptionSteps,
  }) => {
    await loginSteps.nonSubscriptionLogin();
    await createInvalidSubscriptionSteps.paymentProcess();
  });
});

test.afterEach(async ({ page }) => {
  page.close();
});
