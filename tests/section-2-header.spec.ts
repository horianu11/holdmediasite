import { test, expect } from '@playwright/test';

test.describe('Section 2: Spatial Design Header Test', () => {
  test('scrolls to top of Section 2 and captures header', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
    await page.waitForSelector('#hero');

    await page.evaluate(() => {
      const el = document.getElementById('spatial-design');
      if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
    });
    await page.waitForTimeout(500);

    await page.screenshot({
      path: 'tests/screenshots/section-2-spatial-header.png',
      fullPage: false,
    });
  });
});
