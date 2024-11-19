// ReadyLandingScreen.e2e.ts
import { by, element, expect, waitFor } from "detox";

//Describe the E2e test
describe("Test Landing Page", () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it("Is Landing Screen visible", async () => {
    const myScreen = element(by.id("screen.Landing"));
    await waitFor(element(by.id("screen.Landing")))
      .toBeVisible()
      .withTimeout(5000);
  });

  it("should show Activity Loader before showing buttons", async () => {
    await waitFor(element(by.id("Landing.ActivityIndicator")))
      .toBeVisible()
      .withTimeout(5000);
    await waitFor(element(by.id("Landing.ButtonsContainer")))
      .toBeVisible()
      .withTimeout(5000);
    await expect(element(by.id("Button.Landing.SignIn"))).toBeVisible();
    await expect(element(by.text("Sign in"))).toBeVisible();
    await expect(element(by.id("Button.Landing.SignUp"))).toBeVisible();
    await expect(element(by.text("Sign up"))).toBeVisible();
    await expect(element(by.id("Button.Landing.SignUp"))).toBeVisible();
    await expect(element(by.id("Button.Landing.TroubleSignIn"))).toBeVisible();
    await expect(element(by.text("Trouble signing in?"))).toBeVisible();
    await expect(
      element(
        by.text(
          "Ready is a relationship platform that fosters growth as you date, and as you build a relationship."
        )
      )
    ).toBeVisible();
    await expect(
      element(by.text("By signing up, you agree to our "))
    ).toBeVisible();
    await expect(element(by.text("terms of service,"))).toBeVisible();
    await expect(element(by.text("and"))).toBeVisible();
    await expect(element(by.text("privacy policy."))).toBeVisible();
    await element(by.id("Button.Landing.TroubleSignIn")).tap();
    await waitFor(element(by.id("Modal.TroubleSigningInModal")))
      .toBeVisible()
      .withTimeout(5000);
    await expect(
      element(by.text("Trouble Signing In? Here’s How to Fix It:"))
    ).toBeVisible();
    await expect(element(by.id("Button.Landing.Modal.ImDone"))).toBeVisible();
    // await expect(element(by.id("Button.Landing.Modal.ImDone"))).toHaveText(
    //   "I'm done"
    // );
    await element(by.id("Button.Landing.Modal.ImDone")).tap();
    await waitFor(element(by.id("Modal.TroubleSigningInModal")))
      .not.toBeVisible()
      .withTimeout(5000);
  });
});
