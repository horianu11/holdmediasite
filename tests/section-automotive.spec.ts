import { test, expect } from '@playwright/test';

test.describe('Section 5: Automotive CGI & Kinetic Commercials Visual & Interaction Test', () => {
  test('scrolls to Automotive section, tests comparison slider, verifies study modals, and checks 9:16 commercial reel', async ({
    page,
  }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
    await page.waitForSelector('#automotive');

    // Scroll directly to Automotive section
    await page.evaluate(() => {
      const el = document.getElementById('automotive');
      if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
    });
    await page.waitForTimeout(800);

    // 1. Verify section header and manifesto
    await expect(page.locator('text=PILLAR 05 // AUTOMOTIVE CGI & KINETIC COMMERCIALS')).toBeVisible();
    await expect(page.locator('h2:has-text("Precision in Motion.")')).toBeVisible();

    // 2. Test Interactive Wheel Topology Comparison Slider
    const slider = page.locator('div[role="slider"][aria-label*="Rotiform DTM"]');
    await expect(slider).toBeVisible();
    await expect(page.locator('text=LAYER 02 // OCTANE SPECTRAL RENDER')).toBeVisible();
    await expect(page.locator('text=LAYER 01 // SUB-D QUAD CAD TOPOLOGY')).toBeVisible();

    // Test slider keyboard control
    await slider.focus();
    await page.keyboard.press('ArrowRight');
    await page.keyboard.press('ArrowRight');
    await page.waitForTimeout(200);

    // 3. Inspect Orthographic CAD Study Card & Modal
    const orthoBtn = page.locator('button[aria-label="Inspect Rotiform DTM Monoblock Ortho"]');
    await expect(orthoBtn).toBeVisible();
    await orthoBtn.click();
    await page.waitForTimeout(400);

    // Verify modal opened
    await expect(page.locator('h4:has-text("Engineering & Surface Narrative")')).toBeVisible();
    await expect(page.locator('h4:has-text("Technical Specifications")')).toBeVisible();
    await expect(page.locator('text=Rotiform DTM 20×10.5J (ET28 Centerlock Configuration)').first()).toBeVisible();

    // Close modal via CLOSE INSPECTION
    const closeBtn = page.locator('button:has-text("CLOSE INSPECTION")');
    await expect(closeBtn).toBeVisible();
    await closeBtn.click();
    await expect(page.locator('h4:has-text("Engineering")')).not.toBeVisible();
    await page.waitForTimeout(300);

    // 4. Inspect Mercedes-AMG Fitment Card & Modal
    const amgBtn = page.locator('button[aria-label="Inspect Mercedes-AMG C63 Street Integration"]');
    await expect(amgBtn).toBeVisible();
    await amgBtn.click();
    await page.waitForTimeout(400);

    // Verify modal opened
    await expect(page.locator('h3:has-text("Mercedes-AMG C63 Street Integration")').first()).toBeVisible();
    await expect(page.locator('text=Mercedes-AMG C63 S Coupe (W205) • Staggered Rotiform Wheel Fitment').first()).toBeVisible();

    // Close modal
    await page.locator('button:has-text("CLOSE INSPECTION")').click();
    await expect(page.locator('h4:has-text("Engineering & Surface Narrative")')).not.toBeVisible();
    await page.waitForTimeout(300);

    // 5. Test 9:16 Vertical Commercial Reel & Telemetry Matrix
    const video = page.locator('video[src*="highway-intercept-reel.mp4"]');
    await expect(video).toBeVisible();
    await expect(page.locator('text=CASE STUDY // MIDNIGHT HIGHWAY INTERCEPT (WEAREBRÜG CAMPAIGN)')).toBeVisible();
    await expect(page.locator('text=01 // VEHICLE RIGGING')).toBeVisible();
    await expect(page.locator('text=02 // OPTICS & MOTION')).toBeVisible();
    await expect(page.locator('text=03 // VOLUMETRIC LIGHTING')).toBeVisible();
    await expect(page.locator('text=04 // CLAUDE PIPELINE')).toBeVisible();

    // Test Play/Pause button
    const playPauseBtn = page.locator('button[aria-label*="commercial reel"]');
    await expect(playPauseBtn).toBeVisible();
    await playPauseBtn.click();
    await page.waitForTimeout(200);
    await playPauseBtn.click();
  });
});
