import { chromium } from "playwright";

const sections = [
  { id: "top", name: "hero", wait: 2000 },
  { id: "benefits", name: "benefits", wait: 2000 },
  { id: "how-it-works", name: "how-it-works", wait: 2000 },
  { id: "services", name: "services", wait: 2000 },
  { id: "trust", name: "trust", wait: 2000 },
  { id: "register", name: "register", wait: 2000 },
  { id: "faq", name: "faq", wait: 2000 },
];

async function run() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });

  for (const section of sections) {
    await page.goto(`http://localhost:3000/#${section.id}`, { waitUntil: "networkidle" });
    await page.waitForTimeout(section.wait);
    await page.screenshot({
      path: `public/screenshot-${section.name}.png`,
      fullPage: false,
    });
    console.log(`Captured ${section.name}`);
  }

  await browser.close();
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
