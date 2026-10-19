# Hold Media — Complete Website Specification & AI Model Handover Brief

> **Target Audience for this Document:** Any Large Language Model (LLM) or Autonomous AI Agent tasked with designing, implementing, modifying, debugging, or reviewing the **Hold Media** portfolio website and startup pitch.  
> **Source Repository:** `hm_design` (`hold-media-portfolio`)  
> **Author & Studio Director:** Horia Moldovean  
> **Primary URL:** [hold.media](https://hold.media) | [holdmedia.studio](https://holdmedia.studio)  
> **Pitch Target:** **Anthropic Claude Startups Program**

---

## 1. Executive Mission & Project Objective

### 1.1 The Actual Goal of this Website
This website is **not** a generic creative agency portfolio or a standard template. It is engineered with a dual mission:

1. **High-End Commercial Portfolio:** Showcase Hold Media as a frontier 3D visual computing studio specializing in:
   - High-fidelity **Digital Humans & Transhumanist Avatars** (sub-surface scattering skin, porous dermal shaders, clay-to-render topological analysis).
   - **Spatial Design & Architectural Liminality** (unbiased Octane spectral path-tracing, physically based sunlight radiosity, minimalist concrete & marble spaces).
   - **Cultural Disruption** (deconstructing classical Greco-Roman and Egyptian antiquities through aggressive procedural digital waveforms and voxel glitches).
   - **Cinematic World-Building** (industrial decay juxtaposed with sci-fi geometry in Unreal Engine 5.4 with Nanite micro-geometry and Lumen volumetrics).
2. **Anthropic Claude Startups Pitch:** Serve as a live, interactive pitch demonstrating how Hold Media deeply integrates **Anthropic Claude** (specifically Claude Sonnet 4.5) into every stage of a modern 3D production pipeline:
   - *Ideation & Lore Generation:* Accelerating conceptualization, narrative world-building, and artistic direction.
   - *Shader & Script Automation:* Generating procedural GLSL shader graphs, PBR material prompts, and Houdini node architectures via LLM reasoning.
   - *Client Communications & Pipeline Telemetry:* Automating technical delivery manifests, milestone reports, and real-time production documentation.

### 1.2 Aesthetic Tone & Creative Philosophy
- **Industrial Blueprint Luxury:** Precision-engineered mathematical aesthetic combined with museum-grade artistic typography and layout.
- **Brutalist Sharp Precision:** Predominantly 0px border-radius (`rounded-none`) across UI shells, cards, buttons, and telemetry badges to evoke technical CAD software and blueprint spec sheets.
- **Dynamic Chromatic Journey:** Instead of a static dark or light theme, the website transitions through carefully calibrated mood palettes as the visitor scrolls through narrative chapters.

---

## 2. Core Technology Stack & System Specifications

| Layer | Technology | Version | Purpose & Rationale |
| :--- | :--- | :--- | :--- |
| **Framework** | **Next.js (App Router)** | `15.1.7` / `15.5+` | Hybrid SSR/client hydration, optimized routing, App Router architecture. |
| **Runtime & Core** | **React** | `19.0.0` | Modern hooks, concurrent rendering, portal management via `createPortal`. |
| **Language** | **TypeScript** | `5.7.3` (Strict) | Strict typing across motion transforms, modal states, and asset structures. |
| **Styling** | **Tailwind CSS** | `v4.0.9` (`@tailwindcss/postcss`) | Zero-runtime CSS engine, native `@theme` directives, hardware-accelerated utilities. |
| **Animation Engine** | **Motion (`motion/react`)** | `12.4.7` | Physics-based spring animations, scrub transforms (`useScroll`, `useTransform`). |
| **Smooth Scroll** | **Lenis** | `1.1.20` | Momentum inertia scrolling across mouse wheels, trackpads, and touch devices. |
| **Iconography** | **Phosphor Icons React** | `2.1.7` | Clean monoline and duotone technical icons (`ArrowUpRight`, `Brain`, `Cpu`, etc.). |
| **Testing & E2E** | **Playwright** | `1.50.1` | Headless visual regression testing, multi-viewport verification across 45 suites (15 test files × 3 viewports). |

---

## 3. Typography System & Rules

### 3.1 Primary Typeface Families
- **Display & Body Font:** **Inter** (Primary brand standard in [DESIGN.md](file:///c:/Users/andii/Desktop/hm_design/DESIGN.md); actively imported in [src/app/layout.tsx](file:///c:/Users/andii/Desktop/hm_design/src/app/layout.tsx) via `next/font/google` as `--font-sans` with weights 400 through 900).
- **Monospace & Telemetry Font:** **JetBrains Mono** (Configured as `--font-mono` via `next/font/google` in [src/app/layout.tsx](file:///c:/Users/andii/Desktop/hm_design/src/app/layout.tsx), falling back to `SF Mono`, `Cascadia Code`, and `Roboto Mono` for all technical badges, frame counters, shader telemetry readouts, and code snippets).

### 3.2 Typography Scale & Style Tokens
```yaml
display-2xl:
  fontFamily: Inter
  fontSize: 72px (sm: 80px, lg: 96px for massive titles)
  fontWeight: 900 (Black)
  lineHeight: 0.98
  letterSpacing: -0.04em
display-xl:
  fontSize: 56px
  fontWeight: 900
  lineHeight: 1.02
  letterSpacing: -0.035em
display-lg:
  fontSize: 40px
  fontWeight: 800
  lineHeight: 1.10
  letterSpacing: -0.025em
headline:
  fontSize: 28px
  fontWeight: 700 (Bold)
  lineHeight: 1.25
  letterSpacing: -0.02em
subhead:
  fontSize: 20px
  fontWeight: 500 (Medium)
  lineHeight: 1.45
  letterSpacing: -0.01em
body-lg:
  fontSize: 18px
  fontWeight: 400 (Regular)
  lineHeight: 1.60
  letterSpacing: -0.005em
body:
  fontSize: 16px
  fontWeight: 400
  lineHeight: 1.60
body-sm:
  fontSize: 14px
  fontWeight: 400
  lineHeight: 1.50
mono-telemetry:
  fontFamily: JetBrains Mono, monospace
  fontSize: 12px
  fontWeight: 600
  lineHeight: 1.40
  letterSpacing: 0.08em
  textTransform: uppercase
mono-badge:
  fontFamily: JetBrains Mono, monospace
  fontSize: 10px
  fontWeight: 700
  lineHeight: 1.20
  letterSpacing: 0.12em
  textTransform: uppercase
```

---

## 4. Color Palette & Perceptual Color Spaces

### 4.1 Master Chromatic Tokens
The site is built on a structured palette where each narrative chapter commands a distinct contrast-safe canvas:

| Token Name | Hex Code | Semantic Role & Location |
| :--- | :--- | :--- |
| **Studio Gold** | `#F5B800` (Hover: `#E0A800`) | Primary Hero & Spatial Reel canvas; high-energy editorial entry. |
| **Crimson Slash** | `#E51937` / `#FF3333` | Laser slashes in Cultural Disruption; active telemetry accents; focus rings. |
| **Obsidian / Void Black** | `#000000` / `#0a0000` | Section 1 (Cultural Disruption) canvas; high-contrast typography in Hero. |
| **Concrete / Liminal Slate** | `#e2e8f0` / `#1E252B` | Section 2 (Spatial Design) canvas; cool architectural radiosity. |
| **Periwinkle Blue** | `#0066FF` / `#0052CC` | Accent in Section 2; dynamic navigation highlight; callout buttons. |
| **Transhumanist Violet** | `#1e1026` / `#131821` | Section 3 (Digital Humans) canvas; clinical transhuman mood. |
| **Industrial Zinc** | `#0a0a0a` / `#12171F` | Section 4 (Cinematic Worlds) canvas; brutalist Chernobyl aesthetic. |
| **Asphalt Carbon** | `#0c1017` / `#111722` | Section 5 (Automotive CGI) canvas; Brembo Gold (`#F5B800`) & Taillight Red (`#E51937`). |
| **Dark Studio Charcoal** | `#0C0B0A` / `#FAF7F2` | Section 6 (AI Pipeline / Claude Pitch) canvas; warm ivory text, terracotta/amber accents. |
| **Anthropic Terracotta** | `#C2410C` / `#D97706` | Section 6 accents; Claude prompt highlight; pipeline phase nodes. |
| **Midnight Computational Slate**| `#020617` / `#f8fafc` | Section 7 (Call to Action / Marquee) canvas; deep terminal aesthetic. |

### 4.2 The OKLab Perceptual Color Seam System
- **Problem Solved:** Transitioning between contrasting background colors (e.g. `#F5B800` gold to `#0a0000` black) using standard CSS sRGB gradients causes a muddy, grayish "dead zone" in the middle.
- **Solution:** [SectionTransitionSeam.tsx](file:///c:/Users/andii/Desktop/hm_design/src/components/ui/section-transition-seam.tsx) interpolates between adjacent chapter palettes using the **OKLab perceptual color space**:
  ```css
  background: linear-gradient(to bottom in oklab, var(--from-color), var(--to-color));
  ```
- Bridges are non-interactive (`pointer-events-none`) and measure 160px–200px in height.

---

## 5. Layout Architecture & Master Blueprint Grid

### 5.1 The Master 64px Blueprint Grid
A top-level mathematical grid is mounted globally in [ScrollColorEngine.tsx](file:///c:/Users/andii/Desktop/hm_design/src/components/core/scroll-color-engine.tsx):
```css
fixed inset-0 pointer-events-none z-30 select-none
bg-[linear-gradient(to_right,rgba(120,140,165,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(120,140,165,0.05)_1px,transparent_1px)]
bg-[size:64px_64px]
```
This ensures consistent technical blueprint continuity across all sections and transition seams regardless of user scroll position.

### 5.2 Spacing, Section Geometry & Modals
- **Section Padding:**
  - Desktop: `py-14 md:py-16` or `py-20`, `px-6 md:px-16 lg:px-24`
  - Mobile: `py-12`, `px-4 sm:px-6`
- **Max Width Standards:**
  - Standard Section Container: `max-w-7xl` or `max-w-6xl`
  - Floating Dynamic Navigation: `max-w-5xl`
  - Technical Inspection Modals: `max-w-4xl` with `max-h-[90vh]`
  - Hero Center Column: `max-w-4xl`
- **Corner Radii Convention:**
  - Sharp brutalist standard: `border-radius: 0px` (`rounded-none`) on cards, buttons, badges, and modals.
  - *Rule:* Avoid universal `* { border-radius: 0px !important; }` in CSS, as it destroys fluid canvas filters and SVG element border radii. Scoped `rounded-none` classes must be declared explicitly on components.
- **Unified Reusable Modal Architecture ([StudioModal](file:///c:/Users/andii/Desktop/hm_design/src/components/ui/studio-modal.tsx)):**
  - **Full WCAG Dialog Semantics:** `role="dialog"`, `aria-modal="true"`, dynamic `aria-labelledby`.
  - **Portal Target:** Teleported strictly to `document.body` via React `createPortal`.
  - **Focus & Scroll Trap:** Traps keyboard tab focus inside the active modal and locks both `document.body` and Lenis scrolling while open.
  - **Identical Proportions & Viewport Constraints:** All chapter modals feature matched non-scrollable desktop containers (`max-h-[90vh]`), fixed aspect headers, and guaranteed in-frame `CLOSE INSPECTION` buttons.

---

## 6. Narrative Chapter-by-Chapter Structure & Assets

The master scroll narrative is assembled sequentially inside [src/app/page.tsx](file:///c:/Users/andii/Desktop/hm_design/src/app/page.tsx):

```
Page Scroll Flow:
[Floating Dynamic Nav] (Fixed z-50)
├── Section 0: Hero Landing (#F5B800)
├── Section 0.5: Spatial Reel (#F5B800)
├── [Seam: #F5B800 -> #0a0000]
├── Section 1: Cultural Disruption (#0a0000)
├── [Seam: #0a0000 -> #e2e8f0]
├── Section 2: Spatial Design & Liminality (#e2e8f0)
├── [Seam: #e2e8f0 -> #1e1026]
├── Section 3: Digital Humans & Transhumanism (#1e1026)
├── [Seam: #1e1026 -> #0a0a0a]
├── Section 4: Cinematic World-Building (#0a0a0a)
├── [Seam: #0a0a0a -> #0c1017]
├── Section 5: Automotive CGI & Kinetic Commercials (#0c1017)
├── [Seam: #0c1017 -> #0C0B0A]
├── Section 6: The AI Pipeline (Claude Pitch) (#0C0B0A)
├── [Seam: #0C0B0A -> #020617]
└── Section 7: Call To Action & Vertical Marquee (#020617)
```

---

### Section 0: The Hero Landing
- **File:** [src/components/sections/hero-section.tsx](file:///c:/Users/andii/Desktop/hm_design/src/components/sections/hero-section.tsx)
- **Palette:** Studio Gold canvas (`#F5B800`), bold black typography (`#000000`).
- **Semantic Structure:** Wrapped in `<div className="relative z-10 ...">` to ensure compliance with the single `<main>` landmark rule in [src/app/page.tsx](file:///c:/Users/andii/Desktop/hm_design/src/app/page.tsx).
- **Core Elements:**
  - Signature `HMLogo` monogram (96px vector geometric glyph).
  - Editorial brand title: `holdmedia.studio`.
  - Main H1 headline: *"Expressing the Future through 3D Design & Photography."*
  - Studio Manifesto: *"An AI-native spatial computing studio and procedural 3D platform. We integrate frontier Claude reasoning with Unreal Engine 5.4 and Octane to automate shader synthesis, transhuman character pipelines, and large-scale virtual worlds."*
  - Dual CTAs: *"Explore Our Capabilities"* (scrolls to `#spatial-reel`) and *"Explore Claude 3D Pipeline"* (scrolls to `#ai-pipeline`).
  - Subtle Behance archive link: `behance.net/holdmedia`.

---

### Section 0.5: Spatial Reel (Cylindrical 3D Facet Arc)
- **File:** [src/components/sections/spatial-reel-section.tsx](file:///c:/Users/andii/Desktop/hm_design/src/components/sections/spatial-reel-section.tsx)
- **Component Engine:** [src/components/ui/tilted-grid-hero.tsx](file:///c:/Users/andii/Desktop/hm_design/src/components/ui/tilted-grid-hero.tsx)
- **Visual Design:** A continuous curved cylindrical projection simulating an IMAX 3D arc screen, streaming tiles with perspective tilt (`preserve-3d`).
- **Curated Assets in Reel (100% Local Studio Renders):**
  - `/portfolio/cultural-disruption/pweds_1.jpg` (Submerged Classical Polymer Study)
  - `/portfolio/cultural-disruption/pewds_greece_1.jpg` (Sliced Hellenistic Bust // Houdini VEX)
  - `/portfolio/cultural-disruption/pewds_egipt_1.jpg` (Glitched Nefertiti // Voxel Dispersion)
  - `/portfolio/spatial-design/mob_greece_1.jpg` (The Periwinkle Stairwell // Octane)
  - `/portfolio/spatial-design/mob_greece_2.jpg` (The Sunlit Courtyard // Spectral Radiosity)
  - `/portfolio/automotive/amg-c63-street-integration.jpg` (Mercedes-AMG × Rotiform // Automotive CGI)
  - `/portfolio/automotive/rotiform-studio-perspective.jpg` (Rotiform DTM Studio Perspective // 6061-T6 Forged Aluminum)
  - `/portfolio/digital-humans/deathstranding_1.jpg` (Subsurface Dermal Shader // IOR 1.41)
  - `/portfolio/digital-humans/deathstranding_white_4.jpg` (Level-4 High-Poly Clay Topology)
  - `/portfolio/digital-humans/deathstranding_porcelien_5.jpg` (Porcelain Mask Specimen)
  - `/portfolio/digital-humans/deathstranding_half_8.jpg` (Mesh & Flesh Anatomical Split)
  - `/portfolio/cinematic-world/cernobyl_inside_3.jpg` (UE5.4 Cavern Anomaly // Lumen Volumetrics)

---

### Section 1: Cultural Disruption (Deconstructing Antiquity)
- **File:** [src/components/sections/cultural-disruption-section.tsx](file:///c:/Users/andii/Desktop/hm_design/src/components/sections/cultural-disruption-section.tsx)
- **Palette:** Crimson-Black Void (`#0a0000`), razor crimson accents (`#E51937` / `#FF3333`), crisp museum white typography (`#FFFFFF`).
- **Theme & Lore:** Slicing classical Greco-Roman and Egyptian antiquities with procedural mathematical waveforms.
- **Key Assets:**
  - *Sliced Hellenistic Bust:* `/portfolio/cultural-disruption/pewds_greece_1.jpg`
  - *Glitched Nefertiti:* `/portfolio/cultural-disruption/pewds_egipt_1.jpg`
  - *The Submerged Encasement:* `/portfolio/cultural-disruption/pweds_1.jpg`
- **Interactive Features:**
  - Staggered parallax columns (`yParallaxLeft`, `yParallaxRight`).
  - Scroll-linked razor slashes rotating diagonally across the viewport.
  - **Unified `StudioModal` Inspection:** Clickable case study cards open non-scrollable, dimensionally identical popups displaying narrative lore, engine specifications (Octane Spectral Path Tracer, Houdini procedural noise shears), and in-frame dismissal.

---

### Section 2: Spatial Design & Liminality (Architecting the Liminal)
- **File:** [src/components/sections/spatial-design-section.tsx](file:///c:/Users/andii/Desktop/hm_design/src/components/sections/spatial-design-section.tsx)
- **Palette:** Concrete Slate canvas (`#e2e8f0`), periwinkle text gradient (`#0066FF`), deep slate typography (`#1E252B`, `#334E68`).
- **Theme & Lore:** Expansive, serene virtual architectural spaces mastering physically based light radiosity, solar angles, and acoustics.
- **Key Assets:**
  - *The Periwinkle Stairwell (Sticky Anchor):* `/portfolio/spatial-design/mob_greece_1.jpg`
  - *The Sunlit Courtyard (Scroll Reveal):* `/portfolio/spatial-design/mob_greece_2.jpg`
  - *The Brutalist Colonnade:* `/portfolio/spatial-design/mob_greece_3.jpg`
  - *The Terraced Solarium:* `/portfolio/spatial-design/mob_greece_4.jpg`
- **Interactive Features:**
  - 4-site architectural study gallery (2x2 responsive grid).
  - Telemetry readouts reporting solar azimuth, lux intensity, micro-cement roughness, and RT60 reverberation decay.
  - Case study popups leveraging the unified `StudioModal` with Octane Spectral Path Tracer v2024.1 telemetry.

---

### Section 3: Digital Humans & Transhumanism (The New Digital Anatomy)
- **File:** [src/components/sections/digital-humans-section.tsx](file:///c:/Users/andii/Desktop/hm_design/src/components/sections/digital-humans-section.tsx)
- **Palette:** Deep Transhumanist Violet (`#1e1026`), slate specimen cards (`#131821`), visceral organic reds (`#D11A2A` / `#FF3333`), pale purple typography (`#e9d5ff`).
- **Theme & Lore:** AAA character pipelines comparing high-poly untextured clay topology against sub-surface scattering dermal shaders with dual-lobe specular coats.
- **Key Assets:**
  - *Dermal Render (Slider Background):* `/portfolio/digital-humans/deathstranding_1.jpg`
  - *Clay Topology (Slider Foreground):* `/portfolio/digital-humans/deathstranding_white_4.jpg`
  - *Specimen A: Porcelain Mask:* `/portfolio/digital-humans/deathstranding_porcelien_5.jpg`
  - *Specimen B: Mandible Turntable (60fps Looping Video):* `/portfolio/digital-humans/gemini_generated_video_86d9e23b.mp4`
  - *Specimen C: Bone & Topology Detail:* `/portfolio/digital-humans/deathstranding_half_8.jpg`
- **Interactive Features:**
  - **Real-Time Interactive Comparison Slider:** Draggable scrub handle comparing clay topology against final render with keyboard support (`ArrowLeft`, `ArrowRight`, `Home`, `End`).
  - **Telemetry Columns:** Readouts of micro-roughness (0.34 porous), IOR index (1.41), and 120K spline hair simulation.
  - **Video Turntable:** HTML5 `<video autoPlay loop muted playsInline>` displaying a seamless 3D head rotation.
  - **Specimen Inspection Modal:** Leverages `StudioModal` for full-screen topological analysis.

---

### Section 4: Cinematic World-Building (Anomalous Environments)
- **File:** [src/components/sections/cinematic-world-section.tsx](file:///c:/Users/andii/Desktop/hm_design/src/components/sections/cinematic-world-section.tsx)
- **Palette:** Moody Industrial Zinc (`#0a0a0a`), volumetric blues, stark neon white typography (`#d4d4d8`).
- **Theme & Lore:** Story-driven cinematic environments juxtaposing Soviet industrial decay (Chernobyl) with high-concept sci-fi geometry and anomalies.
- **Key Assets:**
  - *Site 01: The Ruined View × The Maroon Anomaly:* `/portfolio/cinematic-world/cernobyl_outside_2.jpg`
  - *Site 02: The Cavern Anomaly:* `/portfolio/cinematic-world/cernobyl_inside_3.jpg`
  - *Site 03: The Control Room:* `/portfolio/cinematic-world/cernobyl_1.jpg`
- **Interactive Features:**
  - 3-column responsive showcase grid triggering full-screen technical inspection modals.
  - UE5.4 Nanite micro-poly density readouts, Lumen caustics, and narrative site logs via `StudioModal`.

---

### Section 5: Automotive CGI & Kinetic Commercials (Precision in Motion)
- **File:** [src/components/sections/automotive-section.tsx](file:///c:/Users/andii/Desktop/hm_design/src/components/sections/automotive-section.tsx)
- **Palette:** Asphalt Carbon canvas (`#0c1017`), card surfaces `#111722`, Brembo Racing Gold accents (`#F5B800`), Taillight Laser Red (`#E51937`), crisp white typography (`#f8fafc`).
- **Theme & Lore:** From sub-millimeter CAD topology to high-velocity cinematic sequences. Engineering photorealistic automotive assets, clear-coat and vulcanized rubber shaders, and kinetic commercial films.
- **Key Assets:**
  - *Rotiform Perspective Studio Render:* `/portfolio/automotive/rotiform-studio-perspective.jpg`
  - *Rotiform Sub-D Wireframe Topology:* `/portfolio/automotive/rotiform-wireframe-perspective.jpg`
  - *Rotiform Front Orthographic Profile:* `/portfolio/automotive/rotiform-studio-ortho.jpg`
  - *Mercedes-AMG C63 Street Integration:* `/portfolio/automotive/amg-c63-street-integration.jpg`
  - *Midnight Highway Intercept Commercial Reel:* `/portfolio/automotive/highway-intercept-reel.mp4` (22.1 MB optimized with `preload="metadata"`, fallback poster, and `IntersectionObserver` viewport gating)
- **Interactive Features:**
  - **Part A: Wheel Topology Comparison Slider:** Interactive pointer and keyboard accessible scrub handle comparing raw Sub-D quad wireframe (1.4M polygons) against Octane spectral path-traced alloy render.
  - **Dual Stacked Inspection Cards:** Orthographic blueprint and Mercedes-AMG street integration triggering technical inspection modals with Octane/Unreal Engine telemetry via `StudioModal`.
  - **Part B: "Midnight Highway Intercept" 9:16 Vertical Commercial Reel:** Seamless looping 60fps vertical commercial player with interactive play/pause and audio controls, gated by an `IntersectionObserver` so it only streams and plays when Section 5 enters the viewport. Accompanied by a 4-pillar virtual production telemetry matrix (Chaos Vehicle Physics, Simulated DJI Inspire 3 aerial motion, Lumen wet asphalt reflections, and Claude sequencer scripting).

---

### Section 6: The AI Pipeline (The Claude Startups Pitch)
- **File:** [src/components/sections/ai-pipeline-section.tsx](file:///c:/Users/andii/Desktop/hm_design/src/components/sections/ai-pipeline-section.tsx)
- **Palette:** Dark Studio Charcoal canvas (`#0C0B0A`), warm gallery ivory typography (`#FAF7F2`), Anthropic warm terracotta (`#C2410C`), burnished amber (`#D97706`).
- **Theme & Lore:** The core startup pitch explaining how Hold Media uses Claude Sonnet 4.5 to build an AI-native design studio.
- **Interactive Flowchart & Feedback Loop:**
  - **Phase 01: Ideation** (`#D97706`) — Conceptual lore, moodboards, token architecture (`< 2 hrs vs 3 weeks`).
  - **Phase 02: AI Pipeline** (`#C2410C`) — Claude API integration, Hold Media 3D MCP Server (`mcp__holdmedia_3d`), automated procedural shaders (`14.2x Faster Turnaround`).
  - **Phase 03: 3D Output** (`#B45309`) — UE5.4 Nanite staging, PBR textures, LOD cascades (`120 FPS Real-time Staged`).
  - **Closed Feedback Rail (`ArrowsClockwise`):** Recycling 3D render telemetry back into Claude prompt optimization.
- **Interactive MCP Live Pipeline Simulator:**
  - 4 cross-pillar presets:
    1. *Subsurface Dermal Shader* (`PILLAR 03 // DIGITAL HUMANS` - `mcp__holdmedia_3d__compile_osl_shader`)
    2. *Procedural VEX Glitch Fissure* (`PILLAR 01 // CULTURAL DISRUPTION` - `mcp__houdini__generate_vex_graph`)
    3. *UE5.4 Nanite Cavern Volumetrics* (`PILLAR 04 // CINEMATIC WORLD-BUILDING` - `mcp__ue5__stage_nanite_scene`)
    4. *Automotive Clearcoat & Chaos Physics* (`PILLAR 05 // AUTOMOTIVE CGI` - `mcp__ue5__configure_chaos_vehicle_rig` / `mcp__octane__compile_clearcoat_shader`) with Rotiform Sub-D bevel weights, dual-lobe clearcoat (IOR 1.52), and Chaos Vehicle highway physics telemetry.
  - Live prompt inputs, MCP payload JSON, generated code snippets, and telemetry metrics (latency, cache hit, eval pass rate).
- **Action Portals & Modals (Integrated via `StudioModal`):**
  - *Studio Inquiry Modal:* Contact form with email copy fallback.
  - *Partner Network Modal:* Ecosystem partnerships (Anthropic Claude Startups, Epic Games Unreal Engine, GPU Compute Cluster).
  - *Client Gateway Modal:* Authenticated client workspace view for production contract reviews.

---

### Section 7: Call To Action & Vertical Text Marquee
- **File:** [src/components/ui/cta-with-text-marquee.tsx](file:///c:/Users/andii/Desktop/hm_design/src/components/ui/cta-with-text-marquee.tsx)
- **Palette:** Midnight Computational Slate (`#020617`), crisp slate white typography (`#f8fafc`).
- **Performance Architecture:** 
  - Eliminated legacy `requestAnimationFrame` loops that repeatedly queried `getBoundingClientRect` on multiple DOM nodes per frame.
  - Implemented hardware-accelerated CSS mask gradient falloffs (`[mask-image:linear-gradient(to_bottom,transparent_0%,black_35%,black_65%,transparent_100%)]`) and `IntersectionObserver` gating to halt computation when off-screen.
- **Core Elements:**
  - Headline: *"The AI-Native Studio."*
  - Dual action CTAs: Direct mail action (`mailto:horia@holdmedia.studio`) and verified studio anchor (`holdmedia.studio`).
  - Continuously scrolling vertical marquee of studio offerings with center-weighted focus falloff:
    - *Claude MCP Shader Synthesis, AI-Native 3D Pipelines, UE5.4 Nanite Virtual Worlds, Automotive CAD & Chaos Physics, Automated PBR Material Evals, Transhuman Digital Avatars, Procedural Houdini VEX Systems, Octane Spectral Path-Tracing, Spatial Computing Environments, Real-Time Cinematic Rendering.*

---

## 7. Media & Asset Directory Map

All project assets reside inside the `public/` directory:

```
public/
├── portfolio/
│   ├── brand/
│   │   ├── hm-monogram.svg               # Vector monogram asset
│   │   └── ...
│   ├── cultural-disruption/
│   │   ├── pewds_greece_1.jpg            # Sliced Hellenistic Marble Bust (56 KB)
│   │   ├── pewds_egipt_1.jpg             # Glitched Nefertiti Dynastic Voxel (50 KB)
│   │   └── pweds_1.jpg                   # Submerged Classical Bust in Polymer (108 KB)
│   ├── spatial-design/
│   │   ├── mob_greece_1.jpg              # The Periwinkle Stairwell (21 KB)
│   │   ├── mob_greece_2.jpg              # The Sunlit Courtyard (46 KB)
│   │   ├── mob_greece_3.jpg              # The Brutalist Colonnade (38 KB)
│   │   └── mob_greece_4.jpg              # The Terraced Solarium (66 KB)
│   ├── digital-humans/
│   │   ├── deathstranding_1.jpg          # Final dermal shader skin render (62 KB)
│   │   ├── deathstranding_white_4.jpg    # Raw clay Level-4 topology render (51 KB)
│   │   ├── deathstranding_porcelien_5.jpg# Porcelain mask specimen (44 KB)
│   │   ├── deathstranding_half_8.jpg     # Mesh & flesh split specimen (68 KB)
│   │   └── gemini_generated_video_86d9e23b.mp4 # Live 60fps head rotation video (3.2 MB)
│   ├── cinematic-world/
│   │   ├── cernobyl_outside_2.jpg        # Site 01: The Maroon Anomaly landscape (72 KB)
│   │   ├── cernobyl_inside_3.jpg         # Site 02: Cavern Anomaly with volumetrics (79 KB)
│   │   └── cernobyl_1.jpg                # Site 03: The Control Room (84 KB)
│   └── automotive/
│       ├── rotiform-studio-perspective.jpg # Octane spectral path-traced alloy render (291 KB)
│       ├── rotiform-wireframe-perspective.jpg # Raw Sub-D quad wireframe (640 KB)
│       ├── rotiform-studio-ortho.jpg     # 135mm zero-distortion prime telephoto ortho profile (363 KB)
│       ├── amg-c63-street-integration.jpg # Overcast urban staging with Brembo calipers (576 KB)
│       └── highway-intercept-reel.mp4    # 9:16 vertical 60fps kinetic commercial reel (22.1 MB)
```

---

## 8. Critical Engineering Guidelines & Constraints for AI Models

When any AI model or developer works on this codebase, they **MUST** abide by the following technical constraints:

### 1. Performance & Frame Rate
- **No Layout Thrashing Loops:** Never write `requestAnimationFrame` loops that query DOM geometries (`getBoundingClientRect`, `offsetHeight`) and mutate styles in the same tick. If scroll or position effects are needed, wrap them with `IntersectionObserver` or perform calculations in pure CSS.
- **Scroll Listeners:** Do not bind raw `window.addEventListener('scroll')` that execute `querySelectorAll` or `getBoundingClientRect` on every pixel. Use Lenis callbacks, `useScroll` from `motion/react`, or cache layout positions on resize.
- **3D Slice Multiplication:** Be mindful of [TiltedGridHero.tsx](file:///c:/Users/andii/Desktop/hm_design/src/components/ui/tilted-grid-hero.tsx); each tile multiplies into 16 slices. Never inflate the slice count or column count beyond device limits.

### 2. Accessibility (A11y) & Semantic HTML
- **Single `<main>` Element:** There must only ever be one `<main>` tag on the page ([src/app/page.tsx](file:///c:/Users/andii/Desktop/hm_design/src/app/page.tsx)). Inner sections must use `<section>`, `<header>`, or `<div>`, never nested `<main>`.
- **Accessible Modals:** All dialogs and overlays must use:
  - `role="dialog"` and `aria-modal="true"`.
  - An accessible label via `aria-labelledby` or `aria-label`.
  - Focus trapping so pressing `Tab` cannot escape into background content.
  - Background scroll locking (`overflow: hidden` on body and pausing Lenis) while open.
- **Contrast Stability:** Always adhere to section-local background containers and OKLab transition seams to prevent white text on light backgrounds or black text on dark backgrounds.

### 3. Styling & Cascade Rules
- **No Universal `!important`:** Do not add `* { border-radius: 0px !important; }` or similar destructive resets to [src/app/globals.css](file:///c:/Users/andii/Desktop/hm_design/src/app/globals.css). Use Tailwind utilities (`rounded-none`) or scoped variables.
- **Tailwind v4 Theme Engine:** Keep color tokens, fonts, and keyframes inside the `@theme` block or CSS variables in [src/app/globals.css](file:///c:/Users/andii/Desktop/hm_design/src/app/globals.css).

### 4. Smooth Scrolling Integration
- All scroll-to actions (such as in [FloatingDynamicNav.tsx](file:///c:/Users/andii/Desktop/hm_design/src/components/ui/floating-dynamic-nav.tsx)) must interface smoothly with Lenis rather than calling conflicting native `window.scrollTo({ behavior: 'smooth' })`.

### 5. Server Lifecycle & Build Resilience
- **Avoid Orphaned Node Processes:** When running local development servers, ensure previous Node instances are properly terminated to prevent memory leaks and port collisions on `3000`.
- **Production Server Stability:** For testing and review, prefer `npm run build && npm run start` to eliminate HMR memory overhead and guarantee immutable stylesheet delivery.

---

## 9. Recent Architecture Updates & P0/P1 Resolution Manifest (October 2026)

The following major improvements have been fully implemented, validated, and verified across all platforms:

| Task / Fix | Affected Files | Resolution Details |
| :--- | :--- | :--- |
| **Marquee Layout Thrashing (P0)** | `src/components/ui/cta-with-text-marquee.tsx` | Replaced 60fps synchronous DOM reads (`getBoundingClientRect`) with pure CSS hardware-accelerated masks and `IntersectionObserver` gating. |
| **Scroll Listener Reflows (P1)** | `src/components/core/scroll-color-engine.tsx`, `src/components/ui/floating-dynamic-nav.tsx` | Implemented rAF-throttled scroll handlers and cached bounding box geometry to eliminate layout reflows during fast scrolling. |
| **Semantic HTML Landmark (P1)** | `src/components/sections/hero-section.tsx`, `src/app/page.tsx` | Replaced nested `<main>` landmark in `HeroSection` with a `<div>` container, ensuring strict WCAG single `<main>` compliance. |
| **Border-Radius Cascade Anti-Pattern (P1)** | `src/app/globals.css` | Removed universal `border-radius: 0px !important;` rule. Sharp 0px CAD aesthetic is cleanly preserved via Tailwind `rounded-none`. |
| **Unified Accessible Modal System (P0)** | `src/components/ui/studio-modal.tsx`, all 5 sections | Built a reusable, accessible `StudioModal` component (`role="dialog"`, `aria-modal="true"`, focus trap, escape dismiss, body/Lenis scroll lock, portal to `document.body`). Integrated across Sections 1, 2, 3, 4, 5, and 6 with matched dimensions and in-frame dismissal. |
| **Automotive CGI & Kinetic Commercials (P0)**| `src/components/sections/automotive-section.tsx`, `tests/section-automotive.spec.ts` | Implemented Pillar 05 (`#0c1017`) with interactive wheel Sub-D quad wireframe comparison slider, orthographic blueprint specs, AMG street staging cards, and 9:16 vertical video reel player. |
| **Floating Dynamic Island Navigation** | `src/components/ui/floating-dynamic-nav.tsx` | Implemented persistent 7-section switcher (`00 INDEX` through `06 AI PIPELINE`), scroll progress indicator, and smooth Lenis anchor navigation. |
| **Full E2E & Visual Regression Suite** | `tests/` | **45/45 tests passing** across Desktop Chrome (`1440x900`), Laptop Chrome (`1280x800`), and Mobile Chrome (`390x844`), spanning 15 test specification files. |

---

## 10. Summary for Future AI Agents

Hold Media is a showcase of **exceptional visual craft, computational performance, and frontier AI integration**. Any changes made to this site should elevate its feeling of luxury, speed, and precision. Preserve the editorial typography, maintain the sharp blueprint aesthetic, keep all animations smooth at 60–120fps, and ensure the pitch for the **Anthropic Claude Startups Program** remains compelling, accessible, and technically authentic.
