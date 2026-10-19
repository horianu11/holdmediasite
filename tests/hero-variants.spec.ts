import { test, expect } from '@playwright/test';

test.describe('Section 0: Hero Visual Exploration', () => {
  test('verifies Solid Studio Gold hero, signature monogram, and CTA actions', async ({ page }) => {
    await page.goto('/');
    await page.waitForSelector('#hero');

    // 1. Verify holdmedia.studio branding & monogram
    await expect(page.locator('#hero').getByText('holdmedia.studio')).toBeVisible();
    await expect(page.locator('text=AI-NATIVE SPATIAL COMPUTING // BUILT ON CLAUDE API & MCP')).toBeVisible();
    await expect(page.getByRole('heading', { name: /Expressing the Future/i })).toBeVisible();

    // 2. Verify CTA buttons
    const exploreBtn = page.getByRole('link', { name: /Explore Our Capabilities/i });
    await expect(exploreBtn).toBeVisible();
    await expect(exploreBtn).toHaveAttribute('href', '#spatial-reel');

    const pipelineBtn = page.getByRole('link', { name: /Explore Claude 3D Pipeline/i });
    await expect(pipelineBtn).toBeVisible();
    await expect(pipelineBtn).toHaveAttribute('href', '#ai-pipeline');

    const behanceLink = page.locator('a[href="https://www.behance.net"]');
    await expect(behanceLink).toBeVisible();

    // 3. Capture Hero Screenshot
    await page.screenshot({ path: 'tests/screenshots/hero-studio-gold.png' });
  });
});
