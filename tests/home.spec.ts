import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(/Inventory Manager/);
});

test("should allow me to switch to dark theme", async ({ page }) => {
  await page.goto("/");

  await page.locator(".hidden > div > button").click();
  const locator = page.locator("html");
  await expect(locator).toHaveClass("dark");
});

// test("should persist theme selection", async ({ page }) => {
//   await page.goto("/");

//   await page.locator(".hidden > div > button").click();
//   await page.waitForFunction((e) => {
//     return JSON.parse(localStorage["persist:root"]).global.isDarkMode === e;
//   }, true);
// });
