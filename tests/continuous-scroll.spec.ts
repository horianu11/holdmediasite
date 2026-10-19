import { test, expect } from '@playwright/test';

test.describe('Continuous Background & Text Color Transition Test', () => {
  test('captures progressive color interpolation stages on scroll', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
    await page.waitForSelector('#hero');

    // 1. Stage 0: Top of Hero (Pure Gold)
    await page.screenshot({ path: 'tests/screenshots/stage-0-hero-gold.png' });

    // 2. Stage 1: Mid-transition (Continuous blend between Gold and Obsidian)
    await page.evaluate(() => window.scrollTo({ top: 450, behavior: 'instant' }));
    await page.waitForTimeout(300);
    await page.screenshot({ path: 'tests/screenshots/stage-1-blending.png' });

    // 3. Stage 2: Deep Cultural Disruption (Obsidian with crimson pulse)
    await page.evaluate(() => window.scrollTo({ top: 1000, behavior: 'instant' }));
    await page.waitForTimeout(300);
    await page.screenshot({ path: 'tests/screenshots/stage-2-obsidian.png' });
  });
});
