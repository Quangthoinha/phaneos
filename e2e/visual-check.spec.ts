import { test, expect } from "@playwright/test";

const viewports = [
  { width: 1280, height: 800, label: "desktop" },
  { width: 390, height: 844, label: "mobile" },
];

for (const vp of viewports) {
  test.describe(`${vp.label} (${vp.width}x${vp.height})`, () => {
    test.beforeEach(async ({ page }) => {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto("/");
      await page.waitForTimeout(1000);
    });

    test("header is sticky and contains logo + nav/CTA", async ({ page }) => {
      const header = page.locator("header");
      await expect(header).toBeVisible();

      const logo = header.locator("a[href='#top']");
      await expect(logo).toBeVisible();
      await expect(logo.locator("svg, img").first()).toBeVisible();

      if (vp.width >= 768) {
        await expect(header.getByRole("navigation", { name: "Main navigation" })).toBeVisible();
        await expect(header.getByRole("link", { name: /Become a Partner/i })).toBeVisible();
      } else {
        await expect(header.getByRole("button", { name: /Open menu/i })).toBeVisible();
      }

      // Sticky check: scroll down and header should still be in viewport
      await page.evaluate(() => window.scrollTo(0, 500));
      await page.waitForTimeout(200);
      const headerBox = await header.boundingBox();
      expect(headerBox).not.toBeNull();
      expect(headerBox!.y).toBeLessThanOrEqual(0);
    });

    test("hero section displays headline, subheadline and CTAs", async ({ page }) => {
      const hero = page.locator("section#top");
      await expect(hero).toBeVisible();

      const h1 = hero.getByRole("heading", { level: 1 });
      await expect(h1).toBeVisible();
      await expect(h1).toContainText(/Sell AI services/i);
      await expect(h1).toContainText(/Keep every client/i);

      await expect(hero.getByText(/phaneosAI helps agencies/i)).toBeVisible();

      await expect(hero.getByRole("link", { name: /Become a Partner/i }).first()).toBeVisible();
      await expect(hero.getByRole("link", { name: /See how it works/i })).toBeVisible();

      // Hero image should load
      const heroImg = hero.locator("img").first();
      await expect(heroImg).toBeVisible();
      const naturalWidth = await heroImg.evaluate((el: HTMLImageElement) => el.naturalWidth);
      expect(naturalWidth).toBeGreaterThan(0);
    });

    test("all content sections are visible and contain expected headings", async ({ page }) => {
      const checks = [
        { id: "benefits", heading: /Two ways to earn/i },
        { id: "how-it-works", heading: /Simple enough to start/i },
        { id: "services", heading: /AI integration/i },
        { id: "trust", heading: /We handle the AI/i },
        { id: "register", heading: /Start in five minutes/i },
        { id: "faq", heading: /Questions partners usually ask/i },
      ];

      for (const { id, heading } of checks) {
        const section = page.locator(`section#${id}`);
        await section.scrollIntoViewIfNeeded();
        await expect(section).toBeVisible();
        await expect(page.getByRole("heading", { name: heading })).toBeVisible();
      }
    });

    test("desktop nav links scroll to correct sections", async ({ page }) => {
      test.skip(vp.width < 768, "Desktop nav only");

      for (const link of ["Benefits", "How it works", "Services", "FAQ"]) {
        await page.getByRole("link", { name: link }).first().click();
        await page.waitForTimeout(500);

        const targetId = link.toLowerCase().replace(/\s/g, "-");
        const section = page.locator(`section#${targetId}`).first();
        await expect(section).toBeInViewport({ ratio: 0.25 });
      }
    });

    test("mobile menu opens and navigates", async ({ page }) => {
      test.skip(vp.width >= 768, "Mobile menu only");

      const menuButton = page.locator("header button");
      await menuButton.click();
      await expect(page.getByRole("navigation", { name: /Mobile navigation/i })).toBeVisible();

      await page.getByRole("navigation", { name: /Mobile navigation/i }).getByRole("link", { name: "Benefits" }).click();
      await page.waitForTimeout(500);
      await expect(page.locator("section#benefits")).toBeInViewport();
    });

    test("capture full-page screenshot", async ({ page }) => {
      await page.screenshot({
        path: `continue-${vp.label}.png`,
        fullPage: true,
      });
    });
  });
}
