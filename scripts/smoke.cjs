// Run against `pnpm start` with Google Chrome installed.
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || "playwright");
const assert = require("node:assert/strict");
const fs = require("node:fs");

(async () => {
  const browser = await chromium.launch({ headless: true, channel: "chrome" });
  const page = await browser.newPage();
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  fs.mkdirSync("test-results", { recursive: true });
  try {
    for (const width of [1440, 390, 320]) {
      await page.setViewportSize({ width, height: 900 });
      await page.goto("http://127.0.0.1:3000");
      await page.getByRole("heading", { name: "NO RULES EXIST." }).waitFor();
      assert(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
        `Overflow at ${width}`,
      );
      assert.equal(await page.locator(".product").count(), 4);
      assert.equal(await page.locator(".collection-links a").count(), 7);
      assert(
        await page.getByLabel("Email address", { exact: true }).isDisabled(),
      );
      if (width < 760) {
        await page.getByRole("button", { name: "Menu +" }).click();
        assert(
          await page
            .getByRole("navigation", { name: "Mobile navigation", exact: true })
            .isVisible(),
        );
        await page
          .locator("#mobile-nav")
          .getByRole("link", { name: "The drop" })
          .click();
        assert(await page.locator("#mobile-nav").isHidden());
        await page.evaluate(() => scrollTo(0, 0));
      }
      await page.screenshot({
        path: `test-results/home-${width}.png`,
        fullPage: true,
      });
    }
    for (const path of [
      "products/fallen-seraph",
      "products/control",
      "products/slash",
      "products/feng-shui",
      ...[
        "shirts",
        "hoodies",
        "sweaters",
        "pants",
        "accessories",
        "badges",
        "stickers",
      ].map((slug) => `collections/${slug}`),
      "robots.txt",
      "sitemap.xml",
    ]) {
      const response = await page.goto(`http://127.0.0.1:3000/${path}`);
      assert.equal(response.status(), 200, path);
    }
    assert.equal(
      (await page.goto("http://127.0.0.1:3000/products/not-real")).status(),
      404,
    );
    assert.equal(
      (await page.goto("http://127.0.0.1:3000/collections/not-real")).status(),
      404,
    );
    assert.deepEqual(errors, []);
    console.log(
      "PASS: desktop/mobile layout, menu navigation, product and collection routes, disabled newsletter, metadata routes, 404s, and no browser exceptions.",
    );
  } finally {
    await browser.close();
  }
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
