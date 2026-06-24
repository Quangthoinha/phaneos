import { test } from "@playwright/test";

test("capture current screenshots", async ({ page }) => {
  await page.goto("http://localhost:3000");
  await page.waitForTimeout(2000);
  await page.screenshot({ path: "continue-desktop.png", fullPage: true });

  await page.setViewportSize({ width: 375, height: 812 });
  await page.waitForTimeout(500);
  await page.screenshot({ path: "continue-mobile.png", fullPage: true });
});
