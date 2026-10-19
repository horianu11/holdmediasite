import { test, expect } from '@playwright/test';

test.describe('Section 3: Digital Humans & Transhumanism Visual Test', () => {
  test('scrolls to Section 3 and tests interactive pipeline slider & specimens', async ({ page }, testInfo) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
    await page.waitForSelector('#hero');

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
        totalHeight: document.documentElement.scrollHeight,
      };
    });
    console.log('SECTION POSITIONS:', JSON.stringify(sectionPositions));

    const prefix = testInfo.project.name;

    // Capture transition from Section 2 into Section 3
    // Spatial ends around 0.72-0.75, Digital begins around 0.77
    // Step A: In Section 2 (light periwinkle)
    await page.evaluate(() => window.scrollTo(0, 0.62 * (document.documentElement.scrollHeight - window.innerHeight)));
    await page.waitForTimeout(400);
    await page.screenshot({ path: `tests/screenshots/${prefix}-transition-step-a-periwinkle.png`, fullPage: false });

    // Step B: Draining into sterile grey
    await page.evaluate(() => window.scrollTo(0, 0.72 * (document.documentElement.scrollHeight - window.innerHeight)));
    await page.waitForTimeout(400);
    await page.screenshot({ path: `tests/screenshots/${prefix}-transition-step-b-sterile-grey.png`, fullPage: false });

    // Step C: Entering Digital Humans (clinical slate)
    await page.evaluate(() => window.scrollTo(0, 0.77 * (document.documentElement.scrollHeight - window.innerHeight)));
    await page.waitForTimeout(400);
    await page.screenshot({ path: `tests/screenshots/${prefix}-transition-step-c-clinical-slate.png`, fullPage: false });

    // 1. Scroll specifically to Section 3 Header
    const header = page.getByRole('heading', { name: /The New\s+Digital Anatomy/i });
    await header.scrollIntoViewIfNeeded();
    await page.waitForTimeout(600);
    await page.screenshot({
      path: `tests/screenshots/${prefix}-section-3-header.png`,
      fullPage: false,
    });

    // 2. Scroll to interactive slider stage
    const sliderBox = page.locator('#digital-humans [class*="cursor-ew-resize"]');
    await sliderBox.scrollIntoViewIfNeeded();
    await page.waitForTimeout(600);

    // Capture at default 50% split
    await page.screenshot({
      path: `tests/screenshots/${prefix}-section-3-slider-50.png`,
      fullPage: false,
    });

    // Click Clay Topology button
    const clayBtn = page.getByRole('button', { name: 'Clay Topology' });
    if (await clayBtn.isVisible()) {
      await clayBtn.click();
      await page.waitForTimeout(300);
      await page.screenshot({
        path: `tests/screenshots/${prefix}-section-3-slider-clay.png`,
        fullPage: false,
      });
    }

    // Click Subsurface SSS button
    const sssBtn = page.getByRole('button', { name: 'Subsurface SSS' });
    if (await sssBtn.isVisible()) {
      await sssBtn.click();
      await page.waitForTimeout(300);
      await page.screenshot({
        path: `tests/screenshots/${prefix}-section-3-slider-sss.png`,
        fullPage: false,
      });
    }

    // 3. Scroll to Specimen cards centered in view
    const maskCard = page.getByRole('heading', { name: 'Porcelain Mask', exact: true });
    await maskCard.scrollIntoViewIfNeeded();
    await page.evaluate(() => window.scrollBy(0, 420));
    await page.waitForTimeout(600);

    await page.screenshot({
      path: `tests/screenshots/${prefix}-section-3-specimens.png`,
      fullPage: false,
    });

    // 4. Scroll to bottom bone detail specimen
    const boneCard = page.getByRole('heading', { name: 'Bone Anatomy Detail' });
    await boneCard.scrollIntoViewIfNeeded();
    await page.waitForTimeout(600);

    await page.screenshot({
      path: `tests/screenshots/${prefix}-section-3-bone-detail.png`,
      fullPage: false,
    });
  });
});


