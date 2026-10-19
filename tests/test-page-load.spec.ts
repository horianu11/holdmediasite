import { test, expect } from '@playwright/test';

test('verify page loads cleanly with styles', async ({ page }) => {
  await page.goto('/');
  await page.waitForLoadState('domcontentloaded');
  await page.waitForSelector('#hero');
  await page.waitForTimeout(500);

  // Take screenshot of hero
  await page.screenshot({ path: 'tests/screenshots/page-load-hero.png' });

  // Scroll to section 4
  const s4 = page.locator('#cinematic-world');
  await s4.scrollIntoViewIfNeeded();
  await page.waitForTimeout(600);

  // Take screenshot of section 4
  await page.screenshot({ path: 'tests/screenshots/page-load-section-4.png' });
});
