import { test, expect } from '@playwright/test';

test.describe('Section 4: Cinematic World-Building Visual Test', () => {
  test('scrolls to Section 4, inspects case studies modal, and captures fog clearance', async ({ page }, testInfo) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
    await page.waitForSelector('#hero');

    const prefix = testInfo.project.name;

    // Log section offsets
    const sectionPositions = await page.evaluate(() => {
      const totalH = document.documentElement.scrollHeight - window.innerHeight;
      const getP = (id: string) => {
        const el = document.getElementById(id);
        return el ? (el.offsetTop / totalH).toFixed(3) : 'null';
      };
      return {
        hero: getP('hero'),
        cultural: getP('cultural-disruption'),
        spatial: getP('spatial-design'),
        digital: getP('digital-humans'),
        cinematic: getP('cinematic-world'),
        totalHeight: document.documentElement.scrollHeight,
      };
    });
    console.log('SECTION POSITIONS WITH S4:', JSON.stringify(sectionPositions));

    // 1. Scroll specifically to Section 4 Header
    const header = page.getByRole('heading', { name: /Anomalous\s+Environments/i });
    await header.scrollIntoViewIfNeeded();
    await page.waitForTimeout(600);
    await page.screenshot({
      path: `tests/screenshots/${prefix}-section-4-header.png`,
      fullPage: false,
    });

    // 2. Scroll to Ruined View Anchor Panorama Showcase
    const ruinedView = page.getByRole('heading', { name: 'The Ruined View × The Maroon Anomaly' }).first();
    await ruinedView.scrollIntoViewIfNeeded();
    await page.waitForTimeout(600);
    await page.screenshot({
      path: `tests/screenshots/${prefix}-section-4-ruined-view.png`,
      fullPage: false,
    });

    // 3. Scroll to Case Study Cards
    const cavernCard = page.getByRole('heading', { name: 'The Cavern Anomaly' }).first();
    await cavernCard.scrollIntoViewIfNeeded();
    await page.waitForTimeout(600);
    await page.screenshot({
      path: `tests/screenshots/${prefix}-section-4-case-study-cards.png`,
      fullPage: false,
    });

    // 4. Click Cavern Anomaly card to open inspection modal
    await cavernCard.click({ force: true });
    await page.waitForTimeout(400);
    await page.screenshot({
      path: `tests/screenshots/${prefix}-section-4-modal-cavern.png`,
      fullPage: false,
    });

    // Close modal
    const closeBtn = page.getByRole('button', { name: 'CLOSE INSPECTION' });
    if (await closeBtn.isVisible()) {
      await closeBtn.click();
      await page.waitForTimeout(300);
    }

    // 5. Scroll to bottom transition if present
    const transitionPill = page.getByText('Atmospheric Fog Clearing');
    if (await transitionPill.isVisible()) {
      await transitionPill.scrollIntoViewIfNeeded();
      await page.waitForTimeout(600);
      await page.screenshot({
        path: `tests/screenshots/${prefix}-section-4-fog-clearance.png`,
        fullPage: false,
      });
    }
  });
});
