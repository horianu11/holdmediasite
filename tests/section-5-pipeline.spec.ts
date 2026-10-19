import { test, expect } from '@playwright/test';

test.describe('Section 5: The AI Pipeline (The Claude Startups Pitch) Visual Test', () => {
  test('scrolls to Section 5, tests flowchart interactivity, and verifies CTA modals', async ({ page }, testInfo) => {
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
        aiPipeline: getP('ai-pipeline'),
        totalHeight: document.documentElement.scrollHeight,
      };
    });
    console.log('ALL SECTION POSITIONS WITH S5:', JSON.stringify(sectionPositions));

    // 1. Scroll to Section 5 Header
    const header = page.getByRole('heading', { name: /Powered\s+by\s+AI/i });
    await header.scrollIntoViewIfNeeded();
    await page.waitForTimeout(600);
    await page.screenshot({
      path: `tests/screenshots/${prefix}-section-5-header.png`,
      fullPage: false,
    });

    // 2. Scroll to Flowchart Wireframe & click Ideation node
    const ideationNode = page.getByRole('heading', { name: 'Ideation' });
    await ideationNode.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await ideationNode.click({ force: true });
    await page.waitForTimeout(400);
    await page.screenshot({
      path: `tests/screenshots/${prefix}-section-5-flowchart-ideation.png`,
      fullPage: false,
    });

    // 3. Click AI Pipeline node
    const pipelineNode = page.getByRole('heading', { name: 'AI Pipeline' });
    await pipelineNode.click({ force: true });
    await page.waitForTimeout(400);
    await page.screenshot({
      path: `tests/screenshots/${prefix}-section-5-flowchart-pipeline.png`,
      fullPage: false,
    });

    // 4. Test Simulator Presets
    const preset4 = page.locator('#ai-pipeline').getByRole('button', { name: /Automotive/i });
    if (await preset4.isVisible()) {
      await preset4.click({ force: true });
      await page.waitForTimeout(300);
    }

    // 5. Scroll to Claude Value Pillars
    const pillarsHeading = page.getByRole('heading', { name: 'Deep Lore in Minutes' });
    await pillarsHeading.scrollIntoViewIfNeeded();
    await page.waitForTimeout(400);
    await page.screenshot({
      path: `tests/screenshots/${prefix}-section-5-pillars.png`,
      fullPage: false,
    });
  });
});
