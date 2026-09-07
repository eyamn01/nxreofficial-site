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
      assert.equal(await page.locator(".product").count(), 0);
      const motion = page.locator(".hero-motion .art-symbol");
      const before = await motion.evaluate(
        (el) => getComputedStyle(el).transform,
      );
      await page.waitForTimeout(250);
      assert.notEqual(
        await motion.evaluate((el) => getComputedStyle(el).transform),
        before,
      );
      await page
        .getByRole("button", { name: "Pause background animation" })
        .click();
      const paused = await motion.evaluate(
        (el) => getComputedStyle(el).transform,
      );
      await page.waitForTimeout(250);
      assert.equal(
        await motion.evaluate((el) => getComputedStyle(el).transform),
        paused,
      );
      await page
        .getByRole("button", { name: "Play background animation" })
        .click();
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
        await page.waitForURL("**/shop");
        await page.goto("http://127.0.0.1:3000");
      }
      await page.screenshot({
        path: `test-results/home-${width}.png`,
        fullPage: true,
      });
      await page.getByRole("link", { name: "Shop the drop" }).click();
      await page.waitForURL("**/shop");
      assert.equal(await page.locator(".product").count(), 4);
      await page
        .getByRole("navigation", { name: "Shop categories" })
        .getByRole("link", { name: "Shirts", exact: true })
        .click();
      await page.waitForURL("**/collections/shirts");
      assert.equal(
        await page
          .locator('.category-tabs [aria-current="page"]')
          .textContent(),
        "Shirts",
      );
      for (const destination of [
        "/shop",
        "/collections",
        "/about",
        "/lookbook",
      ]) {
        await page.goto(`http://127.0.0.1:3000${destination}`);
        assert(
          await page.evaluate(
            () => document.documentElement.scrollWidth <= innerWidth,
          ),
          `${destination} overflow at ${width}`,
        );
        assert.equal(await page.locator("h1").count(), 1);
      }
    }
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("http://127.0.0.1:3000");
    assert.equal(
      await page
        .locator(".hero-motion .art-symbol")
        .evaluate((el) => getComputedStyle(el).animationName),
      "none",
    );
    assert(await page.locator(".motion-control").isHidden());
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
