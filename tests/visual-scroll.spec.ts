import { test, expect } from '@playwright/test';

test.describe('Hold Media Visual & Scroll Regression Tests', () => {
  test('verifies landing viewport and captures baseline snapshot', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
    await page.waitForSelector('#hero');

    // Capture initial hero baseline
    await expect(page).toHaveTitle(/Hold Media/i);
    await page.screenshot({ path: `tests/screenshots/${test.info().project.name}-hero.png` });
  });

  test('verifies scroll transitions and captures dynamic color stages', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
    await page.waitForSelector('#hero');

    // Scroll through key interaction milestones
    const scrollHeights = [0.25, 0.5, 0.75, 1.0];
    for (const fraction of scrollHeights) {
      await page.evaluate((f) => {
        const target = (document.documentElement.scrollHeight - window.innerHeight) * f;
        window.scrollTo({ top: target, behavior: 'instant' });
      }, fraction);

      // Allow micro-animations and color transitions to settle
      await page.waitForTimeout(400);

      const percent = Math.round(fraction * 100);
      await page.screenshot({
        path: `tests/screenshots/${test.info().project.name}-scroll-${percent}.png`,
        fullPage: false,
      });
    }
  });
});
