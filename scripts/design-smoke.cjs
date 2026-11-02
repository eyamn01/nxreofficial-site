const { chromium } = require("playwright");
const assert = require("node:assert/strict");
(async () => {
  const browser = await chromium.launch({
    headless: true,
    channel: process.env.PLAYWRIGHT_CHANNEL || "chrome",
  });
  try {
    const page = await browser.newPage();
    require("node:fs").mkdirSync("test-results", { recursive: true });
    for (const width of [1440, 390, 320]) {
      await page.setViewportSize({ width, height: 1000 });
      for (const route of [
        "shop",
        "collections/shirts",
        "lookbook",
        "products/heaven-exe",
        "products/human-jpg",
        "products/after-image",
        "products/soft-error",
        "products/good-girl-club",
        "products/locate",
        "products/believe-in-the-stars",
        "products/magazine",
      ]) {
        await page.goto(`http://127.0.0.1:3000/${route}`);
        const images = page.locator(".design-image");
        assert.equal(
          await images.count(),
          route.startsWith("products/") ? 1 : 8,
        );
        for (const img of await images.all()) {
          await img.scrollIntoViewIfNeeded();
          await img.evaluate((el) => el.decode());
          assert(
            await img.evaluate(
              (el) =>
                el.naturalWidth > 0 &&
                Math.abs(el.clientWidth / el.clientHeight - 1122 / 1402) < 0.02,
            ),
          );
        }
        assert(
          await page.evaluate(
            () => document.documentElement.scrollWidth <= innerWidth,
          ),
          `${route} overflows ${width}`,
        );
        if (route.startsWith("products/")) {
          const full = page.getByRole("link", {
            name: "View full-resolution design",
          });
          const response = await page.request.get(
            new URL(await full.getAttribute("href"), page.url()).href,
          );
          assert.equal(response.status(), 200);
          assert(response.headers()["content-type"].includes("image/png"));
        }
        await page.screenshot({
          path: `test-results/designs-${route.replaceAll("/", "-")}-${width}.png`,
          fullPage: true,
        });
      }
    }
    console.log(
      "PASS: eight designs load uncropped on shop, shirts, lookbook and product pages at 1440, 390 and 320 pixels; original links return 200.",
    );
  } finally {
    await browser.close();
  }
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
