# Hold Media Remediation & Quality Hardening Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Resolve all 7 Playwright test failures, eliminate the 29.3MB unoptimized GIF hazard, fix dead anchor links, unify the Studio Gold color token, add keyboard accessibility to the 3D topology slider, and clean up repository clutter.

**Architecture:** Maintain the high-performance Next.js 15 App Router + React 19 + Tailwind v4 + Motion architecture while standardizing tokens to `DESIGN.md` specifications, adhering to WCAG 2.1 AA accessibility guidelines, and ensuring all Playwright test specs use strict, resilient locators.

**Tech Stack:** Next.js 15.1.7, React 19, TypeScript 5.7.3, Tailwind CSS v4, Motion 12.4.7, Playwright 1.50.1.

**Spec Reference:** [DESIGN.md](file:///c:/Users/andii/Desktop/hm_design/DESIGN.md) & [HOLD_MEDIA_TECHNICAL_DOCUMENTATION.md](file:///c:/Users/andii/Desktop/hm_design/HOLD_MEDIA_TECHNICAL_DOCUMENTATION.md)

## Global Constraints
- Strictly preserve the brutalist 0px radius aesthetic and high visual variance across sections.
- Keep Lenis smooth scrolling and OKLab perceptual seam transitions operational.
- All Playwright test specs must pass across `desktop-chrome`, `laptop-chrome`, and `mobile-chrome`.
- Zero broken anchors or dead CTA buttons.

---

### Task 1: Fix Hero Section Dead Anchor & Studio Gold Harmonization

**Files:**
- Modify: `src/components/sections/hero-section.tsx:10-95`
- Modify: `src/components/sections/spatial-reel-section.tsx:80-95`
- Modify: `src/app/page.tsx:24-35`
- Modify: `src/components/core/scroll-color-engine.tsx:20-30`
- Modify: `src/app/globals.css:38-55`

**Interfaces:**
- Consumes: Studio Gold token `#F5B800` defined in `DESIGN.md`.
- Produces: Correct `#spatial-reel` anchor target on the "Explore Our Capabilities" CTA, unified `#F5B800` canvas and body styles.

- [ ] **Step 1: Update hero section CTA anchor and color**
  - Change `href="#capabilities"` to `href="#spatial-reel"` in `src/components/sections/hero-section.tsx`.
  - Harmonize background color from `#FFC000` to `#F5B800` in `hero-section.tsx`.
  - Add `id="spatial-reel"` to `src/components/sections/spatial-reel-section.tsx`.
- [ ] **Step 2: Harmonize page-level color engine and seam tokens**
  - In `src/app/page.tsx`, update Hero `data-color` and seam `from="#F5B800"`.
  - In `src/components/core/scroll-color-engine.tsx`, update initial and default panel color from `#FFC000` to `#F5B800`.
  - In `src/app/globals.css`, update initial CSS variable fallback from `#FFC000` to `#F5B800`.

---

### Task 2: Eliminate 29.3MB Asset Trap & Add Keyboard a11y to Section 3

**Files:**
- Modify: `src/components/sections/digital-humans-section.tsx:145-315`

**Interfaces:**
- Consumes: Native HTML `<video>` element with MP4 source and JPG poster.
- Produces: WCAG compliant keyboard slider with `tabIndex={0}`, `role="slider"`, `aria-valuenow`, and `onKeyDown` handlers; eliminates the 29.3MB GIF fallback.

- [ ] **Step 1: Remove unoptimized 29.3MB GIF fallback inside `<video>`**
  - Remove `<Image src="/portfolio/digital-humans/gemini_generated_video_86d9e23b.gif" ... />` from inside `<video>` in `digital-humans-section.tsx`.
  - Ensure video plays MP4 with `poster="/portfolio/digital-humans/video_preview.jpg"` and native fallback text for non-video browsers.
- [ ] **Step 2: Add full keyboard accessibility to the topology comparison slider**
  - Add `tabIndex={0}`, `role="slider"`, `aria-label="Anatomical Clay to Dermal Shader Comparison"`, `aria-valuenow={Math.round(sliderPosition)}`, `aria-valuemin={0}`, `aria-valuemax={100}` to the slider container.
  - Implement `onKeyDown` handling:
    - `ArrowLeft` / `ArrowDown`: `setSliderPosition(p => Math.max(0, p - 5))`
    - `ArrowRight` / `ArrowUp`: `setSliderPosition(p => Math.min(100, p + 5))`
    - `Home`: `setSliderPosition(0)`
    - `End`: `setSliderPosition(100)`
  - Add visible keyboard focus indicator (`focus:outline-hidden focus:ring-2 focus:ring-[#FF3333]`).

---

### Task 3: Update Floating Dynamic Nav with Complete Chapter Registry

**Files:**
- Modify: `src/components/ui/floating-dynamic-nav.tsx:14-25`

**Interfaces:**
- Consumes: Section element IDs on page.
- Produces: Accurate chapter navigation including `spatial-reel` or updated section numbering.

- [ ] **Step 1: Check and sync nav section entries**
  - Verify that section anchors match real DOM IDs (`hero`, `spatial-reel`, `cultural-disruption`, `spatial-design`, `digital-humans`, `cinematic-world`, `ai-pipeline`).

---

### Task 4: Fix All 7 Playwright Test Suite Failures

**Files:**
- Modify: `tests/hero-variants.spec.ts`
- Modify: `tests/section-4-cinematic.spec.ts`
- Modify: `tests/visual-scroll.spec.ts`

**Interfaces:**
- Consumes: Playwright `page` fixture and locators.
- Produces: 100% passing test run across `desktop-chrome`, `laptop-chrome`, and `mobile-chrome`.

- [ ] **Step 1: Fix `tests/hero-variants.spec.ts`**
  - Update the test to verify the Solid Studio Gold hero, signature monogram, headline, and CTA buttons rather than clicking the retired "1. Liquid Black" button.
- [ ] **Step 2: Fix strict mode violation in `tests/section-4-cinematic.spec.ts`**
  - Change `page.getByText('The Ruined View × The Maroon Anomaly')` to target the specific heading: `page.getByRole('heading', { level: 3, name: 'The Ruined View × The Maroon Anomaly' })`.
- [ ] **Step 3: Fix timeout in `tests/visual-scroll.spec.ts`**
  - Replace `page.waitForLoadState('networkidle')` with `page.waitForLoadState('domcontentloaded')` and await `#hero` selector visibility to avoid hanging on media streams.

---

### Task 5: Clean Up Repository Clutter & Abandoned Drafts

**Files:**
- Delete: `src/components/sections/drafts/cultural-disruption-section-v1.tsx`
- Delete: `src/components/sections/drafts/spatial-design-section-v1.tsx`
- Remove directory: `src/components/sections/drafts/`
- Delete root orphan: `spatial_design_now_pure_white.png`

- [ ] **Step 1: Remove obsolete drafts and root orphan**
  - Clean up files not used in production to keep repo clean.

---

### Task 6: Full Verification Pass

- [ ] **Step 1: Run Next.js production build (`npm run build`)**
  - Verify 0 TypeScript errors and clean static page generation.
- [ ] **Step 2: Run Playwright test suite (`npx playwright test`)**
  - Verify all 36 tests pass with 0 failures across all 3 viewports.
