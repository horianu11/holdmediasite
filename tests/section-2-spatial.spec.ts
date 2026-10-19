import { test, expect } from '@playwright/test';

test.describe('Section 2: Spatial Design & Liminality Visual Exploration', () => {
  test('scrolls to Section 2 and inspects case study modal', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await page.waitForSelector('#hero');

    // Scroll directly to Section 2 (Spatial Design)
    await page.evaluate(() => {
      const el = document.getElementById('spatial-design');
      if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
    });
    await page.waitForTimeout(600);

    // Verify 4 active sites header is visible
    await expect(page.locator('text=4 ACTIVE SITES')).toBeVisible();

    // 1. Click inspect button on The Periwinkle Stairwell
    const stairwellInspectBtn = page.locator('button[aria-label="Inspect The Periwinkle Stairwell spatial case study"]');
    await expect(stairwellInspectBtn).toBeVisible();
    await stairwellInspectBtn.scrollIntoViewIfNeeded();
    await stairwellInspectBtn.click({ force: true });

    // Verify modal is open and has Pillar 04 layout
    await expect(page.locator('h3:has-text("The Periwinkle Stairwell")').first()).toBeVisible();
    await expect(page.locator('h4:has-text("Case Study Narrative")')).toBeVisible();
    await expect(page.locator('h4:has-text("Technical Specifications")')).toBeVisible();
    await expect(page.locator('text=Octane Spectral Path Tracer (v2024.1)').first()).toBeVisible();

    // Capture screenshot of opened spatial modal
    await page.screenshot({
      path: 'tests/screenshots/section-2-spatial-clean-modal.png',
      fullPage: false,
    });

    // Close modal via CLOSE INSPECTION button
    await page.locator('button:has-text("CLOSE INSPECTION")').click();
    await expect(page.locator('h4:has-text("Case Study Narrative")')).not.toBeVisible();

    // 2. Click The Brutalist Colonnade card directly to open modal
    const colonnadeCard = page.locator('h3:has-text("The Brutalist Colonnade")').first();
    await colonnadeCard.scrollIntoViewIfNeeded();
    await colonnadeCard.click({ force: true });
    await expect(page.locator('h3:has-text("The Brutalist Colonnade")').first()).toBeVisible();

    // Close via Escape key
    await page.keyboard.press('Escape');
    await expect(page.locator('h4:has-text("Case Study Narrative")')).not.toBeVisible();

    // Capture clean section 2 overview
    await page.screenshot({
      path: 'tests/screenshots/section-2-spatial-clean.png',
      fullPage: false,
    });
  });
});
