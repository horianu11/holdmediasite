# P0 / P1 Critical & Major Issues Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Resolve all P0 and P1 critical performance bottlenecks, accessibility failures, and styling anti-patterns identified in the comprehensive audit before production deployment.

**Architecture:** 
1. Convert marquee layout thrashing to pure CSS hardware-accelerated masks and `IntersectionObserver` gating.
2. Throttle continuous scroll DOM queries using `requestAnimationFrame` ticking and cached geometry.
3. Fix semantic HTML by eliminating nested `<main>` landmarks.
4. Remove destructive universal `!important` border-radius overrides in CSS.
5. Create a reusable, fully accessible `StudioModal` component (`role="dialog"`, `aria-modal="true"`, focus trapping, escape dismissal, body scroll locking) and integrate across all 5 chapters.

**Tech Stack:** Next.js 15.1.7, React 19, Motion (`motion/react`), Tailwind CSS v4, Lenis smooth scroll, Phosphor Icons React, Playwright.

**Spec:** [WEBSITE_SPECIFICATION.md](file:///c:/Users/andii/Desktop/hm_design/WEBSITE_SPECIFICATION.md) and [DESIGN.md](file:///c:/Users/andii/Desktop/hm_design/DESIGN.md).

## Global Constraints
- Every UI component retains sharp brutalist blueprint aesthetics (`rounded-none` / 0px border-radius) without using global `!important` on universal `*`.
- Zero layout thrashing: no synchronous read-write of DOM geometry (`getBoundingClientRect`) inside uncontrolled loops.
- Accessibility compliance: proper landmarks (single `<main>`), full WCAG dialog semantics (`role="dialog"`, focus traps, background scroll lock).
- Seamless Lenis smooth scroll integration: no conflicting native `window.scrollTo({ behavior: 'smooth' })`.

---

### Task 1: Eliminate Marquee Layout Thrashing in CTA Section

**Files:**
- Modify: `src/components/ui/cta-with-text-marquee.tsx`
- Test: `tests/visual-scroll.spec.ts`

**Interfaces:**
- Consumes: `CTAWithVerticalMarquee` component in `src/app/page.tsx`
- Produces: Efficient marquee animation that pauses computation when off-screen and uses CSS masking for center-focus falloff.

- [x] **Step 1: Inspect and refactor `updateOpacity` in `CTAWithVerticalMarquee`**
In `src/components/ui/cta-with-text-marquee.tsx`, replace the continuous infinite `requestAnimationFrame` loop that queries `getBoundingClientRect` on 20 elements every frame with an `IntersectionObserver` check and hardware-accelerated CSS mask.

- [x] **Step 2: Add CSS mask gradient fallback for smooth hardware-accelerated edge fading**
Add `[mask-image:linear-gradient(to_bottom,transparent_0%,black_20%,black_80%,transparent_100%)]` on the marquee container wrapper so opacity falloff is visually smooth and performant.

- [x] **Step 3: Verify the component compiles and renders without errors**
Run: `npx tsc --noEmit`
Expected: PASS

---

### Task 2: Optimize Scroll Listeners & Prevent Reflows

**Files:**
- Modify: `src/components/core/scroll-color-engine.tsx`
- Modify: `src/components/ui/floating-dynamic-nav.tsx`

**Interfaces:**
- Consumes: Scroll events and data attributes (`data-color`, `data-text`)
- Produces: Smooth background color interpolation and active section indicator without layout thrashing.

- [x] **Step 1: Throttle `ScrollColorEngine` with `requestAnimationFrame` and cached panel references**

- [x] **Step 2: Throttle `FloatingDynamicNav` scroll listener and harmonize scroll jumps**

- [x] **Step 3: Run TypeScript validation**
Run: `npx tsc --noEmit`
Expected: PASS

---

### Task 3: Fix Semantic HTML & Remove Nested `<main>` Landmark

**Files:**
- Modify: `src/components/sections/hero-section.tsx:19`
- Inspect: `src/app/page.tsx:17`

**Interfaces:**
- Consumes: Hero landing section markup
- Produces: Clean semantic HTML complying with WCAG and HTML5 single `<main>` requirement.

- [x] **Step 1: Update `HeroSection` container markup**
In `src/components/sections/hero-section.tsx:19`, change:
```tsx
// FROM:
<main className="relative z-10 flex flex-col items-center justify-center my-auto text-center max-w-4xl mx-auto py-4 sm:py-6">
// TO:
<div className="relative z-10 flex flex-col items-center justify-center my-auto text-center max-w-4xl mx-auto py-4 sm:py-6">
```
And replace the closing `</main>` at line 93 with `</div>`.

- [x] **Step 2: Verify page structure**
Ensure `src/app/page.tsx` contains the single top-level `<main className="relative w-full min-h-screen">`.

---

### Task 4: Remove Universal `border-radius: 0px !important;` CSS Anti-Pattern

**Files:**
- Modify: `src/app/globals.css:33-36`

**Interfaces:**
- Consumes: Tailwind CSS theme directives and global box rules
- Produces: CSS cascade that allows deliberate border-radius styling where required (e.g. SVG goo filters, fluid canvas blobs) while preserving sharp 0px styling across all studio cards and badges via Tailwind utilities.

- [x] **Step 1: Modify `src/app/globals.css`**
Change lines 33-36:
```css
/* FROM: */
*, *::before, *::after {
  box-sizing: border-box;
  border-radius: 0px !important;
}

/* TO: */
*, *::before, *::after {
  box-sizing: border-box;
}
```

- [x] **Step 2: Verify components maintain sharp aesthetic**
All components already explicitly declare `rounded-none` on cards, badges, buttons, and modals. Verify in code that `rounded-none` remains on buttons and containers.

---

### Task 5: Build Reusable Accessible `StudioModal` & Refactor All 5 Sections

**Files:**
- Create: `src/components/ui/studio-modal.tsx`
- Modify: `src/components/sections/cultural-disruption-section.tsx`
- Modify: `src/components/sections/spatial-design-section.tsx`
- Modify: `src/components/sections/digital-humans-section.tsx`
- Modify: `src/components/sections/cinematic-world-section.tsx`
- Modify: `src/components/sections/ai-pipeline-section.tsx`

**Interfaces:**
- `StudioModalProps`:
  ```tsx
  export interface StudioModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    subtitle?: string;
    tag?: string;
    accentColor?: string;
    borderColor?: string;
    maxWidth?: string;
    children: React.ReactNode;
  }
  ```
- Produces:
  - Accessible dialog (`role="dialog"`, `aria-modal="true"`, `aria-labelledby`)
  - Trapped tab navigation inside modal
  - Background body & Lenis scroll lock while open
  - Escape key listener and backdrop click dismissal
  - Teleportation to `document.body` via `createPortal`

- [x] **Step 1: Create `src/components/ui/studio-modal.tsx`**

- [x] **Step 2: Refactor Section 1 (`cultural-disruption-section.tsx`) to use `StudioModal`**
Replace the inline modal portal in `cultural-disruption-section.tsx` with `<StudioModal isOpen={!!activeStudy} onClose={() => setActiveStudy(null)} ...>`.

- [x] **Step 3: Refactor Section 2 (`spatial-design-section.tsx`) to use `StudioModal`**
Replace inline modal portal in `spatial-design-section.tsx` with `<StudioModal isOpen={!!activeStudy} onClose={() => setActiveStudy(null)} ...>`.

- [x] **Step 4: Refactor Section 3 (`digital-humans-section.tsx`) to use `StudioModal`**
Replace inline specimen modal in `digital-humans-section.tsx` with `<StudioModal isOpen={!!activeSpecimen} onClose={() => setActiveSpecimen(null)} ...>`.

- [x] **Step 5: Refactor Section 4 (`cinematic-world-section.tsx`) to use `StudioModal`**
Replace inline modal portal in `cinematic-world-section.tsx` with `<StudioModal isOpen={!!activeStudy} onClose={() => setActiveStudy(null)} ...>`.

- [x] **Step 6: Refactor Section 5 (`ai-pipeline-section.tsx`) to use `StudioModal`**
Replace inline un-portaled modal inside `<section id="ai-pipeline">` with `<StudioModal isOpen={!!activeModal} onClose={() => setActiveModal(null)} ...>`.

- [x] **Step 7: Build & Typecheck**
Run: `npx tsc --noEmit`
Expected: PASS

---

### Task 6: Visual & E2E Validation

**Files:**
- Test: `tests/visual-scroll.spec.ts`
- Test: `tests/section-1-modal.spec.ts`
- Test: `tests/section-3-modal.spec.ts`
- Test: `tests/section-4-cinematic.spec.ts`
- Test: `tests/section-5-pipeline.spec.ts`

- [x] **Step 1: Run Playwright test suite**
Run: `npx playwright test`
Expected: All existing test cases pass, verifying modal lifecycles, comparison sliders, and visual transitions without regressions. (42/42 tests passing across Desktop, Laptop, and Mobile viewports).
