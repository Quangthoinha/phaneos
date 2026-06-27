import { chromium } from "playwright";

async function run() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  await page.goto("http://localhost:3000/#faq", { waitUntil: "networkidle" });
  await page.waitForTimeout(2000);
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(1000);
  await page.screenshot({ path: "public/screenshot-footer.png", fullPage: false });
  console.log("Captured footer");
  await browser.close();
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
