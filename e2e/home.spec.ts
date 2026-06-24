import { test, expect } from "@playwright/test";

test.describe("phaneosAI landing page", () => {
  test("renders hero and key conversion elements", async ({ page }) => {
    await page.goto("/");

    await expect(page.getByRole("heading", { name: /Sell AI services/i })).toBeVisible();
    await expect(page.getByText(/Co-selling/i).first()).toBeVisible();
    await expect(page.getByText(/Referral/i).first()).toBeVisible();
    await expect(page.getByRole("link", { name: /Become a Partner/i }).first()).toBeVisible();
  });

  test("navigates to registration section", async ({ page, isMobile }) => {
    await page.goto("/");

    if (isMobile) {
      const mobileMenuButton = page.locator("header button");
      await mobileMenuButton.click();
      await page
        .getByRole("navigation", { name: /Mobile navigation/i })
        .getByRole("link", { name: /Become a Partner/i })
        .click();
    } else {
      await page.getByRole("link", { name: /Become a Partner/i }).first().click();
    }

    await expect(page.getByRole("heading", { name: /Start in five minutes/i })).toBeVisible();
  });

  test("submits partner form with valid data", async ({ page }) => {
    await page.goto("/");
    await page.evaluate(() => document.getElementById("register")?.scrollIntoView());

    await page.getByLabel("Agency name").fill("Test Agency");
    await page.getByLabel("Full name").fill("Jane Doe");
    await page.getByLabel("Email").fill("jane@example.com");
    await page.getByLabel("Phone number").fill("1234567890");
    await page.getByLabel("Partnership model").selectOption("co-selling");
    await page.getByRole("button", { name: /Send partner registration/i }).click();

    await expect(page.getByText(/Registration sent/i)).toBeVisible();
  });

  test("skip-to-content link moves focus to main content", async ({ page }) => {
    await page.goto("/");

    await page.keyboard.press("Tab");
    const skipLink = page.getByRole("link", { name: /Skip to main content/i });
    await expect(skipLink).toBeVisible();
    await skipLink.click();

    await expect(page.locator("main#main-content")).toBeFocused();
  });

  test("mobile menu opens and closes", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto("/");

    const menuButton = page.locator("header button");
    await menuButton.click();
    await expect(page.getByRole("navigation", { name: /Mobile navigation/i })).toBeVisible();

    await menuButton.click();
    await expect(page.getByRole("navigation", { name: /Mobile navigation/i })).toBeHidden();
  });
});
