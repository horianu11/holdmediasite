import { test, expect } from '@playwright/test';

test.describe('Section 3: Digital Humans Specimen Modal Inspection', () => {
  test('clicking specimen buttons opens modal matching Pillar 4 structure', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
    await page.waitForSelector('#digital-humans');

    // Scroll to digital humans section
    await page.evaluate(() => {
      const el = document.getElementById('digital-humans');
      if (el) el.scrollIntoView({ behavior: 'instant', block: 'center' });
    });
    await page.waitForTimeout(500);

    // 1. Click Porcelain Mask inspect button
    const porcelainBtn = page.locator('button[aria-label="Inspect Porcelain Mask specimen"]');
    await expect(porcelainBtn).toBeVisible();
    await porcelainBtn.click();

    // Verify modal is opened
    await expect(page.locator('h3:has-text("Porcelain Mask")').first()).toBeVisible();
    await expect(page.locator('h4:has-text("Specimen Narrative")')).toBeVisible();
    await expect(page.locator('h4:has-text("Technical Specifications")')).toBeVisible();
    await expect(page.locator('button:has-text("CLOSE INSPECTION")')).toBeVisible();

    // Capture screenshot of the opened Porcelain Mask modal
    await page.screenshot({
      path: 'tests/screenshots/section-3-modal-porcelain.png',
      fullPage: false,
    });

    // Close via CLOSE INSPECTION button
    await page.locator('button:has-text("CLOSE INSPECTION")').click();
    await expect(page.locator('h4:has-text("Specimen Narrative")')).not.toBeVisible();

    // 2. Click 3D Mandible Turntable button (video turntable)
    const turntableBtn = page.locator('button[aria-label="Inspect 3D Mandible Turntable specimen"]');
    await expect(turntableBtn).toBeVisible();
    await turntableBtn.click();

    await expect(page.locator('h3:has-text("3D Mandible Turntable")').first()).toBeVisible();
    await expect(page.locator('h4:has-text("Specimen Narrative")')).toBeVisible();

    // Close via Escape key
    await page.keyboard.press('Escape');
    await expect(page.locator('h4:has-text("Specimen Narrative")')).not.toBeVisible();
  });
});
