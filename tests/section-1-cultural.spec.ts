import { test, expect } from '@playwright/test';

test.describe('Section 1: Cultural Disruption Visual Exploration', () => {
  test('scrolls to Section 1 and captures header and staggered grid', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
    await page.waitForSelector('#hero');

    // Scroll to the start of Section 1 to view header
    await page.evaluate(() => {
      const el = document.getElementById('cultural-disruption');
      if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
    });
    await page.waitForTimeout(500);

    await page.screenshot({
      path: 'tests/screenshots/section-1-museum-white-header.png',
      fullPage: false,
    });
  });
});
