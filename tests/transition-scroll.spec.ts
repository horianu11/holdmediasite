import { test, expect } from '@playwright/test';

test.describe('Section 0 to 1 Slicing Transition Test', () => {
  test('captures the striking geometric transition slice between Section 0 and Section 1', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
    await page.waitForSelector('#hero');

    // Scroll to the transition seam (approx 800px down where the yellow slices into black)
    await page.evaluate(() => {
      window.scrollTo({ top: 780, behavior: 'instant' });
    });
    await page.waitForTimeout(500);

    await page.screenshot({
      path: 'tests/screenshots/transition-seam-slice.png',
      fullPage: false,
    });
  });
});
