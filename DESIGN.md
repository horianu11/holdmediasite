---
version: 1.0.0
name: Hold-Media-Design-System
description: "The official design system and visual token specification for Hold Media (hold.media / holdmedia.studio) — an AI-native spatial design and virtual production studio founded by Horia Moldovean. Engineered around a mathematically continuous scroll color interpolation engine, persistent 64px master blueprint grid, editorial typography, stark high-contrast monochrome surfaces, vibrant Studio Gold (#F5B800), and aggressive razor crimson accents (#E51937)."

colors:
  # Primary Brand Anchors
  studio-gold: "#F5B800"
  studio-gold-hover: "#E0A800"
  obsidian-black: "#000000"
  museum-white: "#FFFFFF"
  off-white-surface: "#FAF9F6"
  
  # Accents & Dynamic Interruption
  crimson-slash: "#E51937"
  crimson-laser: "#FF3333"
  crimson-glow: "rgba(229, 25, 55, 0.4)"
  subdermal-red: "rgba(209, 26, 42, 0.15)"
  
  # Spatial & Atmospheric Chromatics
  periwinkle-accent: "#0066FF"
  periwinkle-deep: "#0052CC"
  liminal-slate: "#1E252B"
  liminal-concrete: "#627D98"
  liminal-muted: "#334E68"
  atmospheric-teal: "#0C181E"
  cinematic-void: "#12171F"
  
  # Automotive Chromatics
  asphalt-carbon: "#0c1017"
  surface-automotive-card: "#111722"
  brembo-gold: "#F5B800"
  taillight-red: "#E51937"
  
  # Surfaces & Containers
  surface-dark-card: "#131821"
  surface-glass-dark: "rgba(0, 0, 0, 0.85)"
  surface-glass-light: "rgba(255, 255, 255, 0.85)"
  border-hairline-dark: "rgba(255, 255, 255, 0.12)"
  border-hairline-light: "rgba(0, 0, 0, 0.10)"
  grid-line: "rgba(120, 140, 165, 0.07)"

typography:
  display-2xl:
    fontFamily: Inter
    fontSize: 72px
    fontWeight: 900
    lineHeight: 0.98
    letterSpacing: -0.04em
  display-xl:
    fontFamily: Inter
    fontSize: 56px
    fontWeight: 900
    lineHeight: 1.02
    letterSpacing: -0.035em
  display-lg:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: 800
    lineHeight: 1.10
    letterSpacing: -0.025em
  headline:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: -0.02em
  subhead:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: 500
    lineHeight: 1.45
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.60
    letterSpacing: -0.005em
  body:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.60
    letterSpacing: 0
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.50
    letterSpacing: 0
  mono-telemetry:
    fontFamily: monospace
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1.40
    letterSpacing: 0.08em
    textTransform: uppercase
  mono-badge:
    fontFamily: monospace
    fontSize: 10px
    fontWeight: 700
    lineHeight: 1.20
    letterSpacing: 0.12em
    textTransform: uppercase

rounded:
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 20px
  2xl: 24px
  3xl: 32px
  pill: 9999px
  full: 9999px

spacing:
  2xs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 64px
  section-py: 128px
---

# Hold Media — Master Design System Specification

## 1. Brand Essence & Visual Language

**Hold Media** operates at the apex of high-fidelity spatial design, real-time visual computing (Unreal Engine 5.4 Nanite/Lumen, Octane spectral path-tracing), and AI pipeline acceleration.

The visual identity rejects generic SaaS conventions, dark-mode gradients, and rounded boilerplate cards. Instead, the design system embodies:
1. **Museum-Grade Curatorial Restraint**: Expansive white space, stark monochrome contrast, and uncompromising typographical scale.
2. **Technical Blueprint Precision**: Continuous 64px underlying grid, monoline Phosphor iconography, and authentic 3D engine telemetry readouts.
3. **Intentional Disruptive Kinetic Energy**: Studio Gold (`#F5B800`) brand anchors, aggressive razor crimson slashes (`#E51937`), and spatial 3D facet projections.
4. **Mathematical Fluidity**: Background colors never clip; they interpolate seamlessly across scroll progression via a centralized transform engine.

---

## 2. Color Architecture & Viewport Transition System

### 2.1 The Master 7-Pillar Chromatic Continuum

```
 STUDIO GOLD       CRIMSON VOID      LIMINAL SLATE    TRANSHUMAN VIOLET   INDUSTRIAL ZINC   ASPHALT CARBON    STUDIO CHARCOAL   MIDNIGHT SLATE
   #F5B800           #0a0000            #e2e8f0            #1e1026            #0a0a0a           #0c1017           #0C0B0A           #020617
[Hero / Reel]     [Cultural Disp.]   [Spatial Design]  [Digital Humans]   [Cinematic World]  [Automotive CGI]  [Claude Pipeline] [Marquee CTA]
(Text: #000000)   (Text: #ffffff)    (Text: #0f172a)   (Text: #e9d5ff)    (Text: #d4d4d8)    (Text: #f8fafc)   (Text: #FAF7F2)   (Text: #f8fafc)
```

### 2.2 Viewport-Driven Transition Dynamics

Driven by [`ScrollColorEngine.tsx`](file:///c:/Users/andii/Desktop/hm_design/src/components/core/scroll-color-engine.tsx), each section declares its signature palette using `data-color` and `data-text` attributes:

| Chapter / Pillar Section | Surface Canvas | Typography Palette | Narrative Context |
| :--- | :--- | :--- | :--- |
| **Chapter 0: Hero & Spatial Reel** | Studio Gold (`#F5B800`) | Solid Black (`#000000`) | High-energy studio landing & 3D cylindrical facet arc |
| **Pillar 01: Cultural Disruption** | Crimson Void (`#0a0000`) | Pure White (`#ffffff`), Crimson (`#E51937`) | Antiquity deconstructed by laser waveforms & procedural noise |
| **Pillar 02: Spatial Design & Liminality** | Concrete Slate (`#e2e8f0`) | Deep Slate (`#0f172a`, `#334E68`) | Serene architecture, daylight radiosity & Octane path-tracing |
| **Pillar 03: Digital Humans & Transhumanism** | Deep Violet (`#1e1026`) | Soft Lavender (`#e9d5ff`), White | Synthetic avatars, topology sliders & transhuman dermal shaders |
| **Pillar 04: Cinematic World-Building** | Industrial Zinc (`#0a0a0a`) | Silver Light (`#d4d4d8`), Volumetric Teal | Anomalous decay, Chernobyl control rooms, & UE5.4 volumetrics |
| **Pillar 05: Automotive CGI & Commercials** | Asphalt Carbon (`#0c1017`) | Clean White (`#f8fafc`), Brembo Gold (`#F5B800`), Taillight Red (`#E51937`) | Sub-D quad wireframe comparison, ortho CAD specs, & 9:16 vertical reel |
| **Pillar 06: The AI Pipeline (Claude Pitch)** | Dark Studio Charcoal (`#0C0B0A`)| Warm Gallery Ivory (`#FAF7F2`), Terracotta (`#C2410C`), Amber (`#D97706`) | Closed-loop AI pipeline, MCP tool simulator, & scale telemetry |
| **Section 7: The AI-Native Studio (CTA)** | Midnight Navy (`#020617`) | Clean White (`#f8fafc`), Slate | Scalable AI studio manifesto, vertical marquee, & contact |

### 2.3 Motion & Transition Timing
Transitions occur when the section's top crosses the viewport mid-line (`top 50%`):
* **Duration**: `0.8s`
* **Easing**: `cubic-bezier(0.25, 1, 0.5, 1)` (hardware-accelerated `power2.out`)
* **Properties**: Simultaneous background color and text color morphing via CSS custom properties (`--current-bg`, `--current-text`).

### 2.4 Global Master Grid Overlay
A fixed `-z-10` / `z-30 pointer-events-none` layer ensures uninterrupted blueprint grid alignment across all sections:
```css
bg-[linear-gradient(to_right,rgba(120,140,165,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(120,140,165,0.05)_1px,transparent_1px)] bg-[size:64px_64px]
```

### 2.5 OKLab Perceptual Color Space Transition Seams
To eliminate muddy sRGB gray "dead-zones" during high-contrast transitions, sections are bridged by [`SectionTransitionSeam.tsx`](file:///c:/Users/andii/Desktop/hm_design/src/components/ui/section-transition-seam.tsx):
```css
background: linear-gradient(to bottom in oklab, var(--from-color), var(--to-color));
```
Bridges are non-interactive (`pointer-events-none`) measuring 160px–200px in height, maintaining mathematical gradient continuity between adjacent chapters.

---

## 3. Typography Hierarchy

The system uses **Inter** (`--font-sans`) paired with **JetBrains Mono** (`--font-mono`) and tabular system monospace fonts for telemetry.

| Level | Size | Weight | Tracking | Leading | Target Usage |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Display 2XL** | `72px / 4.5rem` | Black `900` | `-0.04em` | `0.98` | Section titles (*Deconstructing Antiquity*, *Architecting the Liminal*) |
| **Display XL** | `56px / 3.5rem` | ExtraBold `800` | `-0.035em` | `1.05` | CTA Header (*Ready to Shape the Visual Frontier?*) |
| **Display LG** | `40px / 2.5rem` | Bold `700` | `-0.025em` | `1.15` | Hero main headline (*Expressing the Future...*) |
| **Headline** | `28px / 1.75rem` | Bold `700` | `-0.02em` | `1.25` | Modal and study headlines |
| **Card Title** | `18px–20px` | Bold `700` | `-0.01em` | `1.30` | Portfolio cards & specimen titles |
| **Body Large** | `18px–20px` | Normal `400` | `-0.005em` | `1.65` | Chapter manifesto paragraphs |
| **Body Standard**| `16px / 1rem` | Normal `400` | `0` | `1.60` | Descriptions and modal documentation |
| **Mono Telemetry**| `11px–12px` | Semibold `600` | `+0.08em` | `1.40` | Spec sheets, coordinates, Octane & UE5 metrics |
| **Mono Badge** | `10px / 0.625rem`| Bold `700` | `+0.12em` | `1.20` | Layer indicators (`LAYER 01 // TOPOLOGY`) |

---

## 4. Component Manifest & Patterns

### 4.1 The Hold Media Monogram (`HMLogo`)
* **File**: [`src/components/ui/hm-logo.tsx`](file:///c:/Users/andii/Desktop/hm_design/src/components/ui/hm-logo.tsx)
* **Geometry**: Pure SVG procedural vector composed of four vertical columns and three cross-connectors forming the unified `HM` monogram.
* **Usage**:
  * Top navigation bar: `size={28}` or `size={32}`.
  * Hero centerpiece: `size={110}`, animated with entrance spring scale `[0.85 → 1.0]`.

### 4.2 Hero Section Gateway
* **File**: [`src/components/sections/hero-section.tsx`](file:///c:/Users/andii/Desktop/hm_design/src/components/sections/hero-section.tsx)
* **Background**: Studio Gold (`#F5B800`) with subtle `48px` geometric underlay.
* **Semantic HTML**: Implemented using `<div className="relative z-10 ...">` to ensure strict single `<main>` compliance on the master page.
* **CTAs**:
  * Primary Button: `bg-black text-[#F5B800] rounded-none px-8 py-4` with micro-translate hover arrow (`ArrowDown`).
  * Secondary Button: `border-2 border-black text-black rounded-none px-8 py-4` with outbound icon (`ArrowUpRight`).

### 4.3 Spatial Reel (3D Cylindrical Perspective Projection)
* **File**: [`src/components/ui/tilted-grid-hero.tsx`](file:///c:/Users/andii/Desktop/hm_design/src/components/ui/tilted-grid-hero.tsx)
* **Geometry**: Renders an infinite tilted ribbon along an arc `curve={75}` with `aspectRatio={16/9}`, simulating a virtual production cylindrical stage.
* **Asset Cadence**: Curated 12-item reel cycling through high-fidelity studio renders, architectural studies, and spectral color washes.

### 4.4 Staggered Parallax & Razor Slash Interruption
* **File**: [`src/components/sections/cultural-disruption-section.tsx`](file:///c:/Users/andii/Desktop/hm_design/src/components/sections/cultural-disruption-section.tsx)
* **Slashes**: Full-bleed ribbons intersecting canvas diagonally with scroll-linked rotational interpolation (`slashRotate` [-14° to -8°]) in deep crimson `#E51937` with neon glow.
* **Inspection**: Integrated with the unified [`StudioModal`](file:///c:/Users/andii/Desktop/hm_design/src/components/ui/studio-modal.tsx) displaying narrative lore and Houdini VEX noise telemetry.

### 4.5 Sticky Spatial Split-Screen Architecture
* **File**: [`src/components/sections/spatial-design-section.tsx`](file:///c:/Users/andii/Desktop/hm_design/src/components/sections/spatial-design-section.tsx)
* **Behavior**: Right column sticky anchor frame (*The Periwinkle Stairwell*, `mob_greece_1.jpg`) holding position while the ascending gallery reveals on the left via scroll progression with Octane path-tracing telemetry.

### 4.6 Interactive Dual-Layer Topology Comparison Slider
* **File**: [`src/components/sections/digital-humans-section.tsx`](file:///c:/Users/andii/Desktop/hm_design/src/components/sections/digital-humans-section.tsx)
* **Interaction**: Pointer capture touch-and-drag handle with scrub knob (`cursor-ew-resize`) and full keyboard navigation support (`ArrowLeft`, `ArrowRight`, `Home`, `End`).
* **Layers**: Base photorealistic Octane dermal shader (`deathstranding_1.jpg`) against raw clay structural Level-4 topology (`deathstranding_white_4.jpg`).

### 4.7 Anatomical Specimen Studies
* **Layout**: 3-up responsive grid (`grid-cols-1 md:grid-cols-3`).
* **Specimen A**: Porcelain Mask (`deathstranding_porcelien_5.jpg`) in glazed shell.
* **Specimen B**: Live 3D Mandible Turntable — seamless 60fps hardware-accelerated looping video (`gemini_generated_video_86d9e23b.mp4`) with red telemetry badge.
* **Specimen C**: Bone Anatomy Detail (`deathstranding_half_8.jpg`) featuring detached mandible and ceramic dental alignment.

### 4.8 Cinematic World-Building & Inspection Modals
* **File**: [`src/components/sections/cinematic-world-section.tsx`](file:///c:/Users/andii/Desktop/hm_design/src/components/sections/cinematic-world-section.tsx)
* **3-Column Case Study Portals**: Interactive cards triggering [`StudioModal`](file:///c:/Users/andii/Desktop/hm_design/src/components/ui/studio-modal.tsx) overlays:
  * *Site 01: The Ruined View × The Maroon Anomaly* (`cernobyl_outside_2.jpg`)
  * *Site 02: The Cavern Anomaly* (`cernobyl_inside_3.jpg`) — UE5.4 Nanite / Lumen caustics telemetry.
  * *Site 03: The Control Room* (`cernobyl_1.jpg`) — Brutalist Soviet CRT console, tesseract beacon, Octane spectral bloom.

### 4.9 Automotive CGI & Kinetic Commercials
* **File**: [`src/components/sections/automotive-section.tsx`](file:///c:/Users/andii/Desktop/hm_design/src/components/sections/automotive-section.tsx)
* **Part A: Wheel Topology Comparison Slider**: Accessible interactive comparison slider comparing raw Sub-D quad wireframe (1.4M polygons, `/portfolio/automotive/rotiform-wireframe-perspective.jpg`) against Octane spectral path-traced alloy render (`/portfolio/automotive/rotiform-studio-perspective.jpg`).
* **Dual Stacked Inspection Cards**:
  * *Rotiform DTM Monoblock Ortho* (`rotiform-studio-ortho.jpg`) — 135mm zero-distortion prime telephoto CAD projection.
  * *Mercedes-AMG C63 Street Integration* (`amg-c63-street-integration.jpg`) — Overcast urban staging, 45µm metallic flakes, Brembo calipers.
* **Part B: "Midnight Highway Intercept" Commercial Reel**: Looping 9:16 vertical commercial video player (`/portfolio/automotive/highway-intercept-reel.mp4`) with interactive play/pause and audio controls, paired with a 4-pillar virtual production telemetry matrix (Chaos Vehicle Physics, Simulated DJI Inspire 3 aerial motion, Lumen wet asphalt reflections, and Claude sequencer scripting).

### 4.10 The AI Pipeline (The Claude Startups Pitch)
* **File**: [`src/components/sections/ai-pipeline-section.tsx`](file:///c:/Users/andii/Desktop/hm_design/src/components/sections/ai-pipeline-section.tsx)
* **Canvas**: Dark Studio Charcoal (`#0C0B0A`), warm gallery ivory typography (`#FAF7F2`), Anthropic terracotta (`#C2410C`), and burnished amber (`#D97706`).
* **Flow Architecture**: 3-Phase synchronous loop:
  * *Phase 01: Ideation* — Claude spatial lore synthesis & JSON scene graphs.
  * *Phase 02: AI Pipeline* — Hold Media 3D MCP Server (`mcp__holdmedia_3d`) executing automated OSL shaders and Houdini VEX node graphs.
  * *Phase 03: 3D Output* — Real-time UE5.4 Nanite staging, Lumen volumetrics, and MetaHuman rigging at 120 FPS.
* **Interactive MCP Simulator**: 3 cross-pillar presets (Subsurface Dermal Shader, Procedural VEX Glitch Fissure, UE5.4 Nanite Cavern Volumetrics) with live prompt inputs, MCP payload JSON, generated code snippets, and telemetry metrics (latency, cache hit, eval pass rate).
* **Action Portals**: Direct Studio Inquiry, Ecosystem Partner Network, and Secure Client Gateway modals integrated via `StudioModal`.

### 4.11 Kinetic Vertical Text Marquee CTA
* **File**: [`src/components/ui/cta-with-text-marquee.tsx`](file:///c:/Users/andii/Desktop/hm_design/src/components/ui/cta-with-text-marquee.tsx)
* **Performance Architecture**: High-efficiency dual-column vertical marquee powered by pure CSS animations and hardware-accelerated mask gradients (`[mask-image:linear-gradient(to_bottom,transparent_0%,black_20%,black_80%,transparent_100%)]`), gated with `IntersectionObserver` to halt computations off-screen.
* **Action**: Sharp studio inquiry button triggering direct communication (`mailto:horia@holdmedia.studio`).

### 4.12 Unified Reusable Modal Architecture (`StudioModal`)
* **File**: [`src/components/ui/studio-modal.tsx`](file:///c:/Users/andii/Desktop/hm_design/src/components/ui/studio-modal.tsx)
* **Standards**: Full WCAG dialog semantics (`role="dialog"`, `aria-modal="true"`, dynamic `aria-labelledby`), keyboard focus trap inside modal, escape key dismissal, and backdrop click handler.
* **Scroll Lock**: Simultaneously locks `document.body` and Lenis smooth scrolling while active.
* **Portal Target**: Strictly teleported to `document.body` via React `createPortal`.
* **Geometry**: Matched desktop proportions (`max-h-[90vh]`) across all 5 portfolio chapters with guaranteed in-frame `CLOSE INSPECTION` actions.

### 4.13 Floating Dynamic Island Navigation
* **File**: [`src/components/ui/floating-dynamic-nav.tsx`](file:///c:/Users/andii/Desktop/hm_design/src/components/ui/floating-dynamic-nav.tsx)
* **Telemetry Switcher**: Fixed persistent navigation bar featuring the studio monogram, scroll progress percentage bar, and direct anchor links to all 7 narrative chapters (`00 INDEX`, `01 DISRUPTION`, `02 SPATIAL`, `03 HUMANS`, `04 WORLDS`, `05 AUTOMOTIVE`, `06 AI PIPELINE`).
* **Performance**: rAF-throttled scroll observer with smooth Lenis scroll targeting.

---

## 5. Motion Principles & Spring Physics

1. **Scroll-Bound Transforms**: Micro-animations are strictly bound to user scroll velocity and progress rather than uncontrolled infinite loops.
2. **Spring Damping**: Modals, hover states, and card elevations employ physics-based cubic beziers: `[0.16, 1, 0.3, 1]` or standard spring dampening (`stiffness: 300, damping: 25`).
3. **Layer Transitions**: Opacity fades are paired with subtle Y-axis elevation shifts (typically 20px–60px) to give digital assets weight.
4. **Hardware Acceleration**: Background shifts use `will-change-[background-color]`, and heavy visual cards use `transform-gpu` to guarantee locked 60–120fps.

---

## 6. System Do's and Don'ts

### Do:
- **Preserve signature Studio Gold (`#F5B800`)** as the primary entrance anchor.
- **Maintain crisp typographic contrast**: Black text on gold/slate surfaces; white/slate text on dark surfaces.
- **Use technical monospace typography (JetBrains Mono)** for metadata, specs, coordinates, and engine telemetry.
- **Apply razor crimson slices (`#E51937`)** purposefully as disruptive visual interventions, never as generic UI border outlines.
- **Maintain sharp 0px border radii (`rounded-none`)** across cards, badges, buttons, and modal dialogs to preserve CAD blueprint aesthetics.
- **Use `StudioModal` for all inspection overlays** to guarantee WCAG compliance, focus trapping, and Lenis scroll locks.

### Don't:
- **Don't use generic purple/indigo AI gradients**. Hold Media is anchored in gold, museum white, obsidian black, and visceral crimson.
- **Don't add universal `* { border-radius: 0px !important; }` in CSS**, as it damages SVG filter primitives and fluid canvas simulations; specify `rounded-none` explicitly on components.
- **Don't hard-code background colors on individual sections without declaring `data-color` and `data-text`** for `ScrollColorEngine`.
- **Don't introduce low-contrast gray text on dark cards**; always maintain readability with `#f8fafc`, `#FAF7F2`, or `#94A3B8`.
- **Don't run unthrottled DOM measurements (`getBoundingClientRect`)** inside high-frequency scroll or animation loops.
- **Don't introduce rounded corners or pill borders anywhere**; sharp 0px geometry (`rounded-none`) is strictly enforced across cards, buttons, badges, modals, and input controls.
- **Don't add arbitrary soft SaaS drop shadows**; use ambient black shadows with wide spreads (`shadow-[0_30px_90px_rgba(0,0,0,0.45)]`) or razor crimson laser glows.

---

## 7. Responsive Breakpoint Matrix

| Viewport | Range | Adjustments |
| :--- | :--- | :--- |
| **Mobile (`< 640px`)** | Single column | `Display 2XL` scales from 72px to 48px; interactive comparison slider defaults to 1:1 portrait; marquee items scale to 32px. |
| **Tablet (`640px – 1023px`)** | 2-column grid | Staggered parallax columns collapse to 12-column responsive layout; slider telemetry pods stack below viewport. |
| **Desktop (`1024px – 1279px`)** | Full grid layout | Sticky spatial columns activate (`lg:sticky lg:top-28`); comparison slider flanks dual telemetry columns. |
| **Ultra-Wide (`≥ 1280px`)** | Max constraint `7xl` (`1280px`) | Master container centers with generous padding (`px-16` / `px-24`); 64px blueprint grid fills bleed. |
