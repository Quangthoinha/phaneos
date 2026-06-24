import { test, expect } from "@playwright/test";

const resolutions = [
  { width: 1366, height: 768, label: "hd" },
  { width: 1920, height: 1080, label: "fhd" },
  { width: 2560, height: 1440, label: "qhd" },
  { width: 2880, height: 1800, label: "2-8k" },
  { width: 3440, height: 1440, label: "ultrawide" },
];

// Progress points relative to the pinned track, not total pinned height.
const positions = [0, 0.25, 0.5, 0.75, 0.95];

test.use({ reducedMotion: "no-preference" });
test.skip(({ isMobile }) => isMobile, "Resolution checks are desktop-only");

for (const res of resolutions) {
  for (const pos of positions) {
    test(`${res.label} at ${String(pos).replace(".", "-")}`, async ({ page }) => {
      await page.setViewportSize({ width: res.width, height: res.height });
      await page.goto("/");
      await page.waitForTimeout(1500);

      const documentHeight = await page.evaluate(() => document.body.scrollHeight);
      const track = documentHeight - res.height;
      const scrollY = track * pos;
      await page.evaluate(() => {
        document.documentElement.style.scrollBehavior = "auto";
      });
      await page.evaluate((y) => window.scrollTo(0, y), scrollY);
      await page.waitForTimeout(300);

      await page.screenshot({
        path: `res-${res.label}-${String(pos).replace(".", "-")}.png`,
        fullPage: false,
      });

      await expect(page.locator("main")).toBeVisible();
    });
  }
}
