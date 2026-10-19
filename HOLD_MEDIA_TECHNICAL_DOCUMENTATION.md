# Hold Media — Technical Architecture & Portfolio Documentation
**AI-Native Spatial Design & Virtual Production Studio**  
*Director / Founder: Horia Moldovean*  
*Target: Anthropic Claude Startups Program*

---

## 1. Executive Summary

This document outlines the end-to-end technical architecture, design engineering, and creative pipeline implemented for the **Hold Media** portfolio website. 

The website serves as a technical showcase and startup pitch for the **Anthropic Claude Startups Program**, demonstrating how Hold Media pairs frontier large language models (specifically Claude) with high-end 3D visual computing workflows (Unreal Engine 5.4, Nanite micro-geometry, Octane spectral path-tracing, and transhuman avatar pipelines).

The application is structured into progressive narrative chapters, bound together by a continuous, mathematically calibrated scroll color interpolation engine and a persistent master blueprint grid.

---

## 2. Technology Stack & System Specifications

| Layer | Technology | Version / Specification | Rationale |
| :--- | :--- | :--- | :--- |
| **Framework** | **Next.js (App Router)** | `15.1.7` / React 19 | Hybrid SSR/client hydration, optimized asset delivery, zero-boilerplate lifecycles. |
| **Runtime & Core** | **React** | `19.0.0` | Concurrent rendering, modern hooks, responsive reactive UI. |
| **Language** | **TypeScript** | `5.7.3` strict mode | Strict type validation for motion transforms, modal state, and asset manifests. |
| **Styling** | **Tailwind CSS** | `v4.0.9` | Native `@theme` engine, zero CSS runtime overhead, hardware-accelerated utilities. |
| **Animation Engine** | **Motion (`motion/react`)** | `12.4.7` | Physics-driven springs, scroll-linked transforms (`useScroll`, `useTransform`). |
| **Smooth Scroll** | **Lenis (`lenis`)** | `^1.1.20` | Smooth normalized inertia scrolling across all input devices. |
| **Iconography** | **Phosphor Icons React** | `^2.1.7` | Monoline, duotone, and fill technical icons matching technical blueprint aesthetic. |
| **Testing & CI** | **Playwright** | `^1.50.1` | Headless Chromium/WebKit E2E tests, visual regression, and interaction verification. |

---

## 3. Core Architectural Systems

### 3.1. Section-Local Backgrounds with Seamless Seams (Locomotive / Apple Paradigm)
To ensure 100% typographical contrast stability during scroll transitions and eliminate unreadable white-on-light or dark-on-dark text clashes between contrasting sections, Hold Media implements a section-local background architecture paired with continuous transition seams:

* **Section-Local Canvases**: Each section carries its own dedicated background color directly on its root element (`bg-[#F5B800]`, `bg-[#0a0000]`, `bg-[#e2e8f0]`, `bg-[#1e1026]`, `bg-[#0a0a0a]`, `bg-[#0c1017]`, `bg-[#0C0B0A]`, `bg-[#020617]`). Titles and typography are physically bound to their own contrast-safe canvas at all times.
* **Perceptual Transition Seams ([`SectionTransitionSeam`](file:///c:/Users/andii/Desktop/hm_design/src/components/ui/section-transition-seam.tsx))**: Positioned between contrasting sections, these 160px–200px non-interactive bridges interpolate smoothly between adjacent palettes using **OKLab perceptual color space** (`linear-gradient(to bottom in oklab, from, to)`), eliminating the muddy gray dead-zones inherent to standard sRGB interpolation.
* **Synchronous Global State**: [`ScrollColorEngine.tsx`](file:///c:/Users/andii/Desktop/hm_design/src/components/core/scroll-color-engine.tsx) continues managing `document.body.style.backgroundColor`, `--current-bg`, and `--current-text` for browser overscroll bounce and native OS chrome alignment.

### 3.2. Unified Master 64px Grid Overlay
To prevent visual dissonance between sections, local grid overlays were elevated into a fixed top-level layer with `pointer-events-none select-none z-30`:
```css
bg-[linear-gradient(to_right,rgba(120,140,165,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(120,140,165,0.05)_1px,transparent_1px)] bg-[size:64px_64px]
```
This guarantees that regardless of user scroll velocity or section background color, the technical blueprint grid lines maintain pixel-perfect mathematical continuity across every section and transition seam.

---

## 4. Section Implementations & Asset Directory

### Section 0: The Hero (Landing Gateway)
* **File**: [`src/components/sections/hero-section.tsx`](file:///c:/Users/andii/Desktop/hm_design/src/components/sections/hero-section.tsx)
* **Palette**: Studio Gold (`#F5B800`), bold black typography (`#000000`).
* **Semantic HTML**: Wrapped in `<div className="relative z-10 ...">` ensuring strict single `<main>` compliance on the master page.
* **Design Philosophy**: High-impact editorial headline anchored by Hold Media’s custom geometric monogram.
* **Key Elements**:
  * Persistent top bar with monoline [`HMLogo`](file:///c:/Users/andii/Desktop/hm_design/src/components/ui/hm-logo.tsx) (size 28px).
  * Dead-center 110px signature `HM` monogram and `holdmedia.studio` title.
  * Editorial headline: *"Expressing the Future through 3D Design & Photography."*
  * Supporting mission: *"An AI-native spatial computing studio and procedural 3D platform. We integrate frontier Claude reasoning with Unreal Engine 5.4 and Octane to automate shader synthesis, transhuman character pipelines, and large-scale virtual worlds."*
  * Dual CTAs: *"Explore Our Capabilities"* (anchor scroll to `#spatial-reel`) and *"Explore Claude 3D Pipeline"* (anchor scroll to `#ai-pipeline`).
  * Sub-grid texture overlay: `bg-[size:48px_48px]` at 6% opacity.
* *(Note: Standalone particle canvas utility remains preserved in [`src/components/ui/fluid-liquid-canvas.tsx`](file:///c:/Users/andii/Desktop/hm_design/src/components/ui/fluid-liquid-canvas.tsx)).*

---

### Section 0.5: Spatial Reel (Cylindrical Facet Arc Showcase)
* **File**: [`src/components/sections/spatial-reel-section.tsx`](file:///c:/Users/andii/Desktop/hm_design/src/components/sections/spatial-reel-section.tsx)
* **Component Engine**: [`src/components/ui/tilted-grid-hero.tsx`](file:///c:/Users/andii/Desktop/hm_design/src/components/ui/tilted-grid-hero.tsx)
* **Design Philosophy**: Dynamic 3D perspective viewport simulating a curved cylindrical projection screen.
* **Technical Specifications**:
  * Parameters: `speed={4}`, `tileHeight={34}`, `aspectRatio={16/9}`, `gap={6}`, `axis={50}`, `curve={75}`, `fade={12}`.
  * Curated 12-item reel cycling through 100% local studio renders across all portfolio pillars (zero external Cloudflare R2 dependencies):
    * Submerged Classical Polymer Study (`/portfolio/cultural-disruption/pweds_1.jpg`)
    * Sliced Hellenistic Bust // Houdini VEX (`/portfolio/cultural-disruption/pewds_greece_1.jpg`)
    * Glitched Nefertiti // Voxel Dispersion (`/portfolio/cultural-disruption/pewds_egipt_1.jpg`)
    * The Periwinkle Stairwell // Octane (`/portfolio/spatial-design/mob_greece_1.jpg`)
    * The Sunlit Courtyard // Spectral Radiosity (`/portfolio/spatial-design/mob_greece_2.jpg`)
    * Mercedes-AMG × Rotiform // Automotive CGI (`/portfolio/automotive/amg-c63-street-integration.jpg`)
    * Rotiform DTM Studio Perspective // 6061-T6 Forged Aluminum (`/portfolio/automotive/rotiform-studio-perspective.jpg`)
    * Subsurface Dermal Shader // IOR 1.41 (`/portfolio/digital-humans/deathstranding_1.jpg`)
    * Level-4 High-Poly Clay Topology (`/portfolio/digital-humans/deathstranding_white_4.jpg`)
    * Porcelain Mask Specimen (`/portfolio/digital-humans/deathstranding_porcelien_5.jpg`)
    * Mesh & Flesh Anatomical Split (`/portfolio/digital-humans/deathstranding_half_8.jpg`)
    * UE5.4 Cavern Anomaly // Lumen Volumetrics (`/portfolio/cinematic-world/cernobyl_inside_3.jpg`)

---

### Section 1: Cultural Disruption (Deconstructing Antiquity)
* **File**: [`src/components/sections/cultural-disruption-section.tsx`](file:///c:/Users/andii/Desktop/hm_design/src/components/sections/cultural-disruption-section.tsx)
* **Palette**: Crimson-Black Void (`#0a0000`), razor crimson slashes (`#E51937` / `#FF3333`), crisp museum white typography (`#FFFFFF`).
* **Assets**:
  * *Sliced Hellenistic Bust*: [`/portfolio/cultural-disruption/pewds_greece_1.jpg`](file:///c:/Users/andii/Desktop/hm_design/public/portfolio/cultural-disruption/pewds_greece_1.jpg)
  * *Glitched Nefertiti*: [`/portfolio/cultural-disruption/pewds_egipt_1.jpg`](file:///c:/Users/andii/Desktop/hm_design/public/portfolio/cultural-disruption/pewds_egipt_1.jpg)
  * *Submerged Classical Bust*: [`/portfolio/cultural-disruption/pweds_1.jpg`](file:///c:/Users/andii/Desktop/hm_design/public/portfolio/cultural-disruption/pweds_1.jpg)
* **Copy**:
  * **Header**: *Deconstructing Antiquity.*
  * **Body**: *We bridge the gap between historical foundation and hyper-modern internet culture. By applying aggressive, digital-first distortions to classical forms, we create a disruptive visual language designed to make modern brands and gaming properties instantly recognizable.*
* **Interactive & Visual Features**:
  * Aggressive razor slashes cutting across the viewport with scroll-linked rotational interpolation (`slashRotate` from -14° to -8°).
  * Staggered parallax columns (`yParallaxLeft` [-40px to 50px], `yParallaxRight` [60px to -60px]).
  * Unified inspection modals via [`StudioModal`](file:///c:/Users/andii/Desktop/hm_design/src/components/ui/studio-modal.tsx) displaying narrative lore, Houdini procedural noise shear graphs, and Octane spectral path tracer telemetry.

---

### Section 2: Spatial Design & Liminality (Architecting the Liminal)
* **File**: [`src/components/sections/spatial-design-section.tsx`](file:///c:/Users/andii/Desktop/hm_design/src/components/sections/spatial-design-section.tsx)
* **Palette**: Concrete Slate canvas (`#e2e8f0`), subtle periwinkle text gradient (`#0066FF`), concrete tone (`#1E252B`, `#334E68`).
* **Assets**:
  * *The Periwinkle Stairwell* (Sticky Anchor): [`/portfolio/spatial-design/mob_greece_1.jpg`](file:///c:/Users/andii/Desktop/hm_design/public/portfolio/spatial-design/mob_greece_1.jpg)
  * *The Sunlit Courtyard* (Scroll Reveal): [`/portfolio/spatial-design/mob_greece_2.jpg`](file:///c:/Users/andii/Desktop/hm_design/public/portfolio/spatial-design/mob_greece_2.jpg)
  * *The Brutalist Colonnade*: [`/portfolio/spatial-design/mob_greece_3.jpg`](file:///c:/Users/andii/Desktop/hm_design/public/portfolio/spatial-design/mob_greece_3.jpg)
  * *The Terraced Solarium*: [`/portfolio/spatial-design/mob_greece_4.jpg`](file:///c:/Users/andii/Desktop/hm_design/public/portfolio/spatial-design/mob_greece_4.jpg)
* **Copy**:
  * **Header**: *Architecting the Liminal.*
  * **Body**: *Beyond singular objects, Hold Media designs expansive, atmospheric virtual environments. Mastering complex lighting physics and high-end material texturing, we build serene, dream-like architectural spaces ideal for metaverse integration, virtual production lobbies, and high-fashion digital editorials.*
* **Interactive Features**:
  * Choreographed split layout: the large stairwell frame remains sticky (`lg:sticky lg:top-28`) while the gallery reveals on the left via scroll progression.
  * 4-site architectural study gallery with solar azimuth, lux intensity, micro-cement roughness, and reverberation telemetry.
  * Case study popups leveraging the unified [`StudioModal`](file:///c:/Users/andii/Desktop/hm_design/src/components/ui/studio-modal.tsx).

---

### Section 3: Digital Humans & Transhumanism (The New Digital Anatomy)
* **File**: [`src/components/sections/digital-humans-section.tsx`](file:///c:/Users/andii/Desktop/hm_design/src/components/sections/digital-humans-section.tsx)
* **Palette**: Deep Transhumanist Violet (`#1e1026`), clinical slate cards (`#131821`), visceral organic reds (`#D11A2A` / `#FF3333`), pale purple typography (`#e9d5ff`).
* **Assets**:
  * *Comparison Slider Background (Dermal Render)*: [`/portfolio/digital-humans/deathstranding_1.jpg`](file:///c:/Users/andii/Desktop/hm_design/public/portfolio/digital-humans/deathstranding_1.jpg)
  * *Comparison Slider Foreground (Clay Topology)*: [`/portfolio/digital-humans/deathstranding_white_4.jpg`](file:///c:/Users/andii/Desktop/hm_design/public/portfolio/digital-humans/deathstranding_white_4.jpg)
  * *Specimen A: Porcelain Mask*: [`/portfolio/digital-humans/deathstranding_porcelien_5.jpg`](file:///c:/Users/andii/Desktop/hm_design/public/portfolio/digital-humans/deathstranding_porcelien_5.jpg)
  * *Specimen B: 3D Mandible Turntable (Looping Video)*: [`/portfolio/digital-humans/gemini_generated_video_86d9e23b.mp4`](file:///c:/Users/andii/Desktop/hm_design/public/portfolio/digital-humans/gemini_generated_video_86d9e23b.mp4)
  * *Specimen C: Bone Anatomy Detail*: [`/portfolio/digital-humans/deathstranding_half_8.jpg`](file:///c:/Users/andii/Desktop/hm_design/public/portfolio/digital-humans/deathstranding_half_8.jpg)
* **Copy**:
  * **Header**: *The New Digital Anatomy.*
  * **Body**: *We push the boundaries of digital human creation. From hyper-realistic skin textures and micro-expressions to surreal, transhumanist geometric anomalies, our character models are built for narrative depth. We supply next-generation avatars for AAA gaming, virtual influencers, and interactive media.*
* **Interactive Features**:
  * **Real-Time Interactive Comparison Slider**: Scrub handle comparing raw untextured Level-4 high-poly clay topologies against final sub-surface scattering dermal shaders with dual-lobe specular coat, with full keyboard navigation support (`ArrowLeft`, `ArrowRight`, `Home`, `End`).
  * **Telemetry Columns**: Real-time readouts of micro-roughness (0.34 porous), IOR index (1.41), and 120K spline hair simulation.
  * **Anatomical Specimen Studies**: 3-up card grid featuring the porcelain mask, live 60fps looping video turntable, and detached mandible bone reveal.
  * **Specimen Inspection Modal**: Leverages [`StudioModal`](file:///c:/Users/andii/Desktop/hm_design/src/components/ui/studio-modal.tsx) for full-screen topological analysis.

---

### Section 4: Cinematic World-Building (Anomalous Environments)
* **File**: [`src/components/sections/cinematic-world-section.tsx`](file:///c:/Users/andii/Desktop/hm_design/src/components/sections/cinematic-world-section.tsx)
* **Palette**: Moody Charcoal Zinc (`#0a0a0a`), eerie volumetric blues, stark neon white typography (`#d4d4d8`).
* **Interactive 3-Project Showcase**:
  * *Site 01: The Ruined View × The Maroon Anomaly*: [`/portfolio/cinematic-world/cernobyl_outside_2.jpg`](file:///c:/Users/andii/Desktop/hm_design/public/portfolio/cinematic-world/cernobyl_outside_2.jpg)
  * *Site 02: The Cavern Anomaly*: [`/portfolio/cinematic-world/cernobyl_inside_3.jpg`](file:///c:/Users/andii/Desktop/hm_design/public/portfolio/cinematic-world/cernobyl_inside_3.jpg)
  * *Site 03: The Control Room*: [`/portfolio/cinematic-world/cernobyl_1.jpg`](file:///c:/Users/andii/Desktop/hm_design/public/portfolio/cinematic-world/cernobyl_1.jpg)
* **Copy**:
  * **Header**: *Anomalous Environments.*
  * **Body**: *Environmental storytelling is at our core. We construct massive, story-driven cinematic worlds that juxtapose industrial decay with high-concept sci-fi geometry. Our environments are fully realized stages ready for real-time engines and narrative exploration.*
* **Interactive Features**:
  * **Pure Transparent Canvas**: No section-spanning background image; allows clean, uniform `#0a0a0a` transition via `ScrollColorEngine`.
  * **Clickable 3-Column Case Study Portals**: All 3 anomalous projects displayed side-by-side in an interactive responsive grid triggering full-screen technical inspection modals via [`StudioModal`](file:///c:/Users/andii/Desktop/hm_design/src/components/ui/studio-modal.tsx) complete with engine specs (Unreal Engine 5.4 Nanite, Octane Spectral Path Tracer), volumetric lighting telemetry, and narrative lore.

---

### Section 5: Automotive CGI & Kinetic Commercials (Precision in Motion)
* **File**: [`src/components/sections/automotive-section.tsx`](file:///c:/Users/andii/Desktop/hm_design/src/components/sections/automotive-section.tsx)
* **Palette**: Asphalt Carbon canvas (`#0c1017`), card surfaces `#111722`, Brembo Racing Gold accents (`#F5B800`), Taillight Laser Red (`#E51937`), crisp white typography (`#f8fafc`).
* **Assets**:
  * *Rotiform Perspective Studio Render*: [`/portfolio/automotive/rotiform-studio-perspective.jpg`](file:///c:/Users/andii/Desktop/hm_design/public/portfolio/automotive/rotiform-studio-perspective.jpg)
  * *Rotiform Sub-D Wireframe Topology*: [`/portfolio/automotive/rotiform-wireframe-perspective.jpg`](file:///c:/Users/andii/Desktop/hm_design/public/portfolio/automotive/rotiform-wireframe-perspective.jpg)
  * *Rotiform Front Orthographic Profile*: [`/portfolio/automotive/rotiform-studio-ortho.jpg`](file:///c:/Users/andii/Desktop/hm_design/public/portfolio/automotive/rotiform-studio-ortho.jpg)
  * *Mercedes-AMG C63 Street Integration*: [`/portfolio/automotive/amg-c63-street-integration.jpg`](file:///c:/Users/andii/Desktop/hm_design/public/portfolio/automotive/amg-c63-street-integration.jpg)
  * *Midnight Highway Intercept Commercial Reel*: [`/portfolio/automotive/highway-intercept-reel.mp4`](file:///c:/Users/andii/Desktop/hm_design/public/portfolio/automotive/highway-intercept-reel.mp4) (22.1 MB optimized with `preload="metadata"`, fallback poster, and `IntersectionObserver` viewport gating)
* **Copy**:
  * **Header**: *Precision in Motion.*
  * **Body**: *From sub-millimeter CAD topology to high-velocity cinematic sequences. We engineer photorealistic automotive assets, physically accurate clear-coat and vulcanized rubber shaders, and adrenaline-fueled CGI commercial films built for global automotive and streetwear campaigns.*
* **Interactive Features**:
  * **Part A: Wheel Topology Comparison Slider**: Pointer and keyboard-accessible scrub handle comparing raw Sub-D quad wireframe (1.4M polygons) against Octane spectral path-traced alloy render.
  * **Dual Stacked Inspection Cards**: Orthographic blueprint and Mercedes-AMG street integration triggering technical inspection modals with Octane/Unreal Engine telemetry via `StudioModal`.
  * **Part B: "Midnight Highway Intercept" 9:16 Vertical Commercial Reel**: Seamless looping 60fps vertical commercial player with interactive play/pause and audio controls, gated by an `IntersectionObserver` so it only streams and plays when Section 5 enters the viewport. Accompanied by a 4-pillar virtual production telemetry matrix (Chaos Vehicle Physics, Simulated DJI Inspire 3 aerial motion, Lumen wet asphalt reflections, and Claude sequencer scripting).

---

### Section 6: The AI Pipeline (The Claude Startups Pitch)
* **File**: [`src/components/sections/ai-pipeline-section.tsx`](file:///c:/Users/andii/Desktop/hm_design/src/components/sections/ai-pipeline-section.tsx)
* **Mounting**: Mounted directly before the Call to Action section on [`src/app/page.tsx`](file:///c:/Users/andii/Desktop/hm_design/src/app/page.tsx) with `id="ai-pipeline"`.
* **Palette & Vibe**: Dark Studio Charcoal canvas (`#0C0B0A`), warm gallery ivory typography (`#FAF7F2`), Anthropic warm terracotta (`#C2410C`), and burnished amber accents (`#D97706`).
* **Visual & Flowchart Architecture**:
  * Clean technical flowchart wireframe showing a seamless, synchronous loop between **Ideation**, **Claude Sonnet 4.5 AI Pipeline**, and **3D Output**.
  * Directional flow connectors (`ArrowRight`) between progressive stages and closed loop feedback rail (`ArrowsClockwise`) recycling 3D render telemetry back into Claude prompt optimization.
* **Interactive MCP Simulator**:
  * 4 cross-pillar presets:
    1. *Subsurface Dermal Shader* (`PILLAR 03 // DIGITAL HUMANS` - `mcp__holdmedia_3d__compile_osl_shader`)
    2. *Procedural VEX Glitch Fissure* (`PILLAR 01 // CULTURAL DISRUPTION` - `mcp__houdini__generate_vex_graph`)
    3. *UE5.4 Nanite Cavern Volumetrics* (`PILLAR 04 // CINEMATIC WORLD-BUILDING` - `mcp__ue5__stage_nanite_scene`)
    4. *Automotive Clearcoat & Chaos Physics* (`PILLAR 05 // AUTOMOTIVE CGI` - `mcp__ue5__configure_chaos_vehicle_rig` / `mcp__octane__compile_clearcoat_shader`) with Rotiform Sub-D bevel weights, dual-lobe clearcoat (IOR 1.52), and Chaos Vehicle highway physics telemetry.
  * Live prompt inputs, MCP payload JSON, generated code snippets, and telemetry console (latency, cache hit, eval pass rate).
* **Copy**:
  * **Header**: *Powered by AI. Built for Scale.*
  * **Body**: *Hold Media operates at the intersection of human artistry and artificial intelligence. By integrating frontier models like Claude Sonnet 4.5 directly into our creative pipeline via the Model Context Protocol (MCP), we accelerate our workflow—from generating narrative world-building concepts and material prompt engineering, to automating our studio’s client communications and technical documentation. We are building the blueprint for the AI-native design studio.*
* **Interactive Features & Modals**:
  * 3 Claude Value Pillars: Narrative Acceleration, Shader & Script Synthesis, Scale & Comms.
  * 3 Modal Action Portals (`StudioModal`): Direct Studio Inquiry modal (`#btn-contact-us`), Ecosystem Partner Network modal (`#btn-partner-network`), and Secure Client Gateway (`#btn-client-portal`).

---

### Section 7: Call To Action & Vertical Text Marquee
* **File**: [`src/components/ui/cta-with-text-marquee.tsx`](file:///c:/Users/andii/Desktop/hm_design/src/components/ui/cta-with-text-marquee.tsx)
* **Mounting**: Hosted on the master page ([`src/app/page.tsx`](file:///c:/Users/andii/Desktop/hm_design/src/app/page.tsx)) inside `<section id="cta-section">`.
* **Palette**: Midnight Computational Slate canvas (`#020617`), crisp white typography (`#f8fafc`).
* **Performance Architecture**:
  * Replaced legacy synchronous `getBoundingClientRect` loops with pure CSS animations and hardware-accelerated mask gradients (`[mask-image:linear-gradient(to_bottom,transparent_0%,black_35%,black_65%,transparent_100%)]`).
  * Gated with `IntersectionObserver` to halt computations when off-screen.
* **Copy**:
  * **Header**: *The AI-Native Studio.*
  * **Body**: *Hold Media is rebuilding the 3D pipeline from the ground up. By deeply integrating frontier models like Claude directly into our creative workflow alongside cutting-edge rendering tech, we accelerate conceptualization, procedural texturing, and narrative world-building.*
* **Interactive Features**:
  * Continuously scrolling vertical marquee of studio offerings with center-weighted focus falloff:
    * *Claude MCP Shader Synthesis, AI-Native 3D Pipelines, UE5.4 Nanite Virtual Worlds, Automotive CAD & Chaos Physics, Automated PBR Material Evals, Transhuman Digital Avatars, Procedural Houdini VEX Systems, Octane Spectral Path-Tracing, Spatial Computing Environments, Real-Time Cinematic Rendering.*
  * Direct studio inquiry trigger (`mailto:horia@holdmedia.studio`) and verified studio anchor (`holdmedia.studio`).

---

## 5. Verification & Test Suite

The project includes an end-to-end automated visual test suite built with **Playwright** (`tests/`), executing across 3 viewport configurations (Desktop Chrome `1440x900`, Laptop Chrome `1280x800`, Mobile Chrome `390x844`):

| Test Spec | Purpose | Commands / Features Verified |
| :--- | :--- | :--- |
| [`tests/visual-scroll.spec.ts`](file:///c:/Users/andii/Desktop/hm_design/tests/visual-scroll.spec.ts) | Master scroll test across sections | Baseline landing snapshot, scroll transitions, dynamic color stages. |
| [`tests/continuous-scroll.spec.ts`](file:///c:/Users/andii/Desktop/hm_design/tests/continuous-scroll.spec.ts) | Continuous background color validation | Asserts smooth hex interpolation across viewport offsets. |
| [`tests/hero-variants.spec.ts`](file:///c:/Users/andii/Desktop/hm_design/tests/hero-variants.spec.ts) | Hero visual exploration | Verifies Solid Studio Gold hero, signature monogram, and CTA actions. |
| [`tests/section-1-cultural.spec.ts`](file:///c:/Users/andii/Desktop/hm_design/tests/section-1-cultural.spec.ts) | Section 1 layout and parallax | Validates Pewds Greece & Egypt assets, razor slashes. |
| [`tests/section-1-modal.spec.ts`](file:///c:/Users/andii/Desktop/hm_design/tests/section-1-modal.spec.ts) | Section 1 modal inspection | Verifies `StudioModal` open/close lifecycles and layout consistency. |
| [`tests/section-2-header.spec.ts`](file:///c:/Users/andii/Desktop/hm_design/tests/section-2-header.spec.ts) | Section 2 header validation | Confirms architectural headline and typography contrast. |
| [`tests/section-2-spatial.spec.ts`](file:///c:/Users/andii/Desktop/hm_design/tests/section-2-spatial.spec.ts) | Section 2 sticky and fade behavior | Checks Sunlit Courtyard reveal and Periwinkle Stairwell anchor. |
| [`tests/section-3-digital-humans.spec.ts`](file:///c:/Users/andii/Desktop/hm_design/tests/section-3-digital-humans.spec.ts) | Comparison slider & specimen tests | Simulates drag handle, keyboard navigation, verifies video specimen rendering. |
| [`tests/section-3-modal.spec.ts`](file:///c:/Users/andii/Desktop/hm_design/tests/section-3-modal.spec.ts) | Section 3 specimen modal inspection | Verifies specimen modals open matching Pillar 4 structure. |
| [`tests/section-4-cinematic.spec.ts`](file:///c:/Users/andii/Desktop/hm_design/tests/section-4-cinematic.spec.ts) | Section 4 case studies & inspection modal | Opens Cavern Anomaly modal, validates UE5 telemetry and fog clearance. |
| [`tests/section-automotive.spec.ts`](file:///c:/Users/andii/Desktop/hm_design/tests/section-automotive.spec.ts) | Section 5 Automotive CGI & commercials | Tests Rotiform wheel comparison slider, study modals, and 9:16 commercial reel. |
| [`tests/section-5-pipeline.spec.ts`](file:///c:/Users/andii/Desktop/hm_design/tests/section-5-pipeline.spec.ts) | Section 6 AI Pipeline (Claude Pitch) | Tests flowchart interactivity, simulator preset switching, and CTA modals. |
| [`tests/test-page-load.spec.ts`](file:///c:/Users/andii/Desktop/hm_design/tests/test-page-load.spec.ts) | Clean page load verification | Asserts complete DOM rendering without stylesheet flash or console errors. |
| [`tests/transition-scroll.spec.ts`](file:///c:/Users/andii/Desktop/hm_design/tests/transition-scroll.spec.ts) | Slicing transition test | Captures geometric transition slice between Section 0 and Section 1. |

### Running the Test Suite
```bash
# Start local server first
npm run build && npm run start

# Run all 45 automated visual regression tests
npx playwright test

# Run interactive visual testing UI
npm run test:visual:ui
```

---

## 6. Directory Structure

```
hm_design/
├── public/
│   └── portfolio/
│       ├── brand/                    # HM Brand assets & monograms
│       ├── cultural-disruption/      # pewds_greece_1.jpg, pewds_egipt_1.jpg, pweds_1.jpg
│       ├── spatial-design/           # mob_greece_1.jpg, mob_greece_2.jpg, mob_greece_3.jpg, mob_greece_4.jpg
│       ├── digital-humans/           # deathstranding_1.jpg, deathstranding_white_4.jpg,
│       │                             # deathstranding_porcelien_5.jpg, gemini_generated_video_86d9e23b.mp4,
│       │                             # deathstranding_half_8.jpg
│       ├── cinematic-world/          # cernobyl_outside_2.jpg, cernobyl_inside_3.jpg, cernobyl_1.jpg
│       └── automotive/               # rotiform-studio-perspective.jpg, rotiform-wireframe-perspective.jpg,
│                                     # rotiform-studio-ortho.jpg, amg-c63-street-integration.jpg,
│                                     # highway-intercept-reel.mp4
├── src/
│   ├── app/
│   │   ├── globals.css               # Tailwind CSS v4 directives, color tokens, and Lenis rules
│   │   ├── layout.tsx                # Global HTML metadata, font configurations (Inter & JetBrains Mono)
│   │   └── page.tsx                  # Master page mounting all chapters, seams, and ScrollColorEngine
│   ├── components/
│   │   ├── core/
│   │   │   ├── scroll-color-engine.tsx    # Continuous mathematical scroll interpolator & global grid
│   │   │   ├── scroll-stage-controller.tsx # Viewport stage triggers
│   │   │   └── smooth-scroll.tsx          # Lenis smooth scroll provider
│   │   ├── sections/
│   │   │   ├── hero-section.tsx           # Chapter 0: Landing & Signature Monogram
│   │   │   ├── spatial-reel-section.tsx   # Chapter 0.5: Cylindrical 3D Facet Arc Showcase
│   │   │   ├── cultural-disruption-section.tsx # Chapter 1: Antiquity Deconstructed & Parallax Slashes
│   │   │   ├── spatial-design-section.tsx # Chapter 2: Minimalist Architecture & Lighting Radiosity
│   │   │   ├── digital-humans-section.tsx # Chapter 3: Interactive Topology Slider & Video Specimen
│   │   │   ├── cinematic-world-section.tsx # Chapter 4: Anomalous Environments & UE5 Inspection Modal
│   │   │   ├── automotive-section.tsx     # Chapter 5: Automotive CGI & Kinetic Commercials
│   │   │   └── ai-pipeline-section.tsx    # Chapter 6: The AI Pipeline (Claude Startups Pitch)
│   │   └── ui/
│   │       ├── cta-with-text-marquee.tsx  # Chapter 7: Kinetic Vertical Marquee CTA
│   │       ├── floating-dynamic-nav.tsx   # Persistent Dynamic Island 7-section navigation & telemetry
│   │       ├── fluid-liquid-canvas.tsx    # Interactive fluid particle simulation canvas
│   │       ├── hm-logo.tsx                # Scalable vector Hold Media monogram
│   │       ├── section-transition-seam.tsx # OKLab perceptual gradient seam bridge
│   │       ├── studio-modal.tsx           # Reusable accessible WCAG modal dialog
│   │       └── tilted-grid-hero.tsx       # 3D Cylindrical projection perspective grid
│   └── lib/
│       └── utils.ts                   # clsx / twMerge utilities
├── tests/                             # Playwright automated visual regression specs (15 spec files, 45 test configurations)
├── DESIGN.md                          # Hold Media master design system and token manifest
├── HOLD_MEDIA_TECHNICAL_DOCUMENTATION.md # Technical architecture and asset specifications
├── WEBSITE_SPECIFICATION.md           # Master website specification and AI model handover brief
└── package.json
```

---

## 7. Conclusion

Hold Media’s portfolio architecture reflects the exact ethos of an AI-native studio: **rigorous visual craft, high-performance web engineering, and frontier AI integration**. Every section bridges digital art with computational scalability, creating an uncompromising showcase for partners, clients, and the **Anthropic Claude Startups Program**.
