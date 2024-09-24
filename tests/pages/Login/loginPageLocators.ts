import { Page } from "@playwright/test";

export const LoginLocators = (page: Page) => ({
  emailInput: page.getByRole("textbox", { name: "Email" }),
  passwordInput: page.getByRole("textbox", { name: "Password" }),
  signInPageHeader: page.getByRole("heading", { name: "Sign In" }),
  signInButton: page.getByRole("button", { name: "Sign In" }),
});
