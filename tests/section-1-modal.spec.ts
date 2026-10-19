import { test, expect } from '@playwright/test';

test.describe('Section 1: Cultural Disruption Modal Inspection', () => {
  test('clicking buttons opens non-scrollable modals with exact same size across all cards', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
    await page.waitForSelector('#cultural-disruption', { state: 'attached' });

    // Scroll to cultural disruption section
    await page.evaluate(() => {
      const el = document.getElementById('cultural-disruption');
      if (el) el.scrollIntoView({ behavior: 'instant', block: 'center' });
    });
    await page.waitForTimeout(500);

    const cards = [
      {
        label: 'Inspect Sliced Hellenistic Bust case study',
        title: 'Sliced Hellenistic Bust',
        screenshot: 'tests/screenshots/modal-card-1.png',
      },
      {
        label: 'Inspect Glitched Nefertiti case study',
        title: 'Glitched Nefertiti',
        screenshot: 'tests/screenshots/modal-card-2.png',
      },
      {
        label: 'Inspect The Submerged Encasement case study',
        title: 'The Submerged Encasement',
        screenshot: 'tests/screenshots/modal-card-3.png',
      },
    ];

    const modalDimensions: { width: number; height: number }[] = [];

    for (const card of cards) {
      const inspectBtn = page.locator(`button[aria-label="${card.label}"]`);
      await expect(inspectBtn).toBeVisible();
      await inspectBtn.click();

      // Verify modal is opened
      const modalTitle = page.locator(`h3:has-text("${card.title}")`);
      await expect(modalTitle.first()).toBeVisible();

      // Check Case Study Narrative and Technical Specifications headings
      await expect(page.locator('h4:has-text("Case Study Narrative")')).toBeVisible();
      await expect(page.locator('h4:has-text("Technical Specifications")')).toBeVisible();

      // Check CLOSE INSPECTION button is visible and in-frame
      const closeBtn = page.locator('button:has-text("CLOSE INSPECTION")');
      await expect(closeBtn).toBeVisible();

      // Wait for spring animation to complete before sizing/screenshot
      await page.waitForTimeout(350);

      // Ensure CLOSE INSPECTION button is strictly inside viewport
      const buttonBox = await closeBtn.boundingBox();
      const viewport = page.viewportSize();
      expect(buttonBox).not.toBeNull();
      if (buttonBox && viewport) {
        expect(buttonBox.y + buttonBox.height).toBeLessThanOrEqual(viewport.height);
      }

      // Check modal container size and scrollability
      const modalDialog = page.locator('div[role="dialog"]');
      await expect(modalDialog).toBeVisible();

      const scrollInfo = await modalDialog.evaluate((el) => ({
        scrollHeight: el.scrollHeight,
        clientHeight: el.clientHeight,
        scrollWidth: el.scrollWidth,
        clientWidth: el.clientWidth,
      }));

      // No vertical overflow / non-scrollable
      expect(scrollInfo.scrollHeight).toBeLessThanOrEqual(scrollInfo.clientHeight + 2); // allowance for 1-2px subpixel borders

      modalDimensions.push({
        width: scrollInfo.clientWidth,
        height: scrollInfo.clientHeight,
      });

      // Capture screenshot
      await page.screenshot({
        path: card.screenshot,
        fullPage: false,
      });

      // Also maintain existing modal-${width}.png screenshot for regression
      if (card.title === 'Sliced Hellenistic Bust') {
        await page.screenshot({
          path: `tests/screenshots/modal-${viewport?.width || 0}.png`,
          fullPage: false,
        });
      }

      // Close the modal via CLOSE INSPECTION button
      await closeBtn.click();
      await expect(page.locator('h4:has-text("Case Study Narrative")')).not.toBeVisible();
      await page.waitForTimeout(300);
    }

    // Verify all 3 popups have the EXACT same dimensions
    expect(modalDimensions.length).toBe(3);
    expect(modalDimensions[0].height).toBe(modalDimensions[1].height);
    expect(modalDimensions[1].height).toBe(modalDimensions[2].height);
    expect(modalDimensions[0].width).toBe(modalDimensions[1].width);
    expect(modalDimensions[1].width).toBe(modalDimensions[2].width);
  });
});
