'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'motion/react';
import {
  Cube,
  Sparkle,
  ArrowUpRight,
} from '@phosphor-icons/react';
import { StudioModal } from '@/components/ui/studio-modal';

interface SpatialCaseStudy {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  image: string;
  description: string;
  specs: {
    engine: string;
    solarPhysics: string;
    materialDensity: string;
    acoustics: string;
  };
}

const SPATIAL_STUDIES: SpatialCaseStudy[] = [
  {
    id: 'periwinkle-stairwell',
    tag: 'PILLAR 02 // ARCHITECTURAL LIMINALITY',
    title: 'The Periwinkle Stairwell',
    subtitle: 'Micro-cement Plaster • Stainless Handrail • Solitary Stool',
    image: '/portfolio/spatial-design/mob_greece_1.jpg',
    description:
      'Investigating architectural solitude and light falloff within an ascending spiral stairwell. Hand-troweled micro-cement plaster meets a stark stainless steel handrail, catching raking diagonal solar rays across soft periwinkle atmospheric hues.',
    specs: {
      engine: 'Octane Spectral Path Tracer (v2024.1)',
      solarPhysics: '34° Raking Solar Azimuth • 95,000 Lux Beam',
      materialDensity: 'Sealed Micro-cement Plaster (Roughness 0.42)',
      acoustics: '0.92s RT60 Liminal Reverberation Decay',
    },
  },
  {
    id: 'sunlit-courtyard',
    tag: 'PILLAR 02 // ORTHOGRAPHIC COMPOSITION',
    title: 'The Sunlit Courtyard',
    subtitle: 'Polygonal Stone Mosaic • Exposed Cedar Beams • Diagonal Beam',
    image: '/portfolio/spatial-design/mob_greece_2.jpg',
    description:
      'Tension between organic furniture contours and rectilinear solar projections. Rendered with physically unbiased Octane spectral path tracing to capture microscopic caustics and light falloff on Grecian marble fountain waters.',
    specs: {
      engine: 'Unreal Engine 5.4 Nanite & Lumen Caustics',
      solarPhysics: '74° High Solstice Zenith • 120,000 Lux Direct',
      materialDensity: 'Grecian Parian Marble & Aged Mediterranean Cedar',
      acoustics: '0.68s Acoustic Absorption via Porous Stone',
    },
  },
  {
    id: 'brutalist-colonnade',
    tag: 'PILLAR 02 // GEOMETRIC MONOLITH',
    title: 'The Brutalist Colonnade',
    subtitle: 'Cast Concrete Canopy • Symmetric Light Well • Heavy Shadow',
    image: '/portfolio/spatial-design/mob_greece_3.jpg',
    description:
      'Exploring rhythm, scale, and negative space through monumental cast-concrete colonnades. A central aperture cuts through the heavy canopy, bathing the interior corridor in a sharp, shifting blade of sunlight.',
    specs: {
      engine: 'Octane Multi-Bounce Spectral Raymarcher',
      solarPhysics: '48° Diagonal Slice • Volumetric Air Particulates',
      materialDensity: 'Board-Formed Architectural Concrete (45 MPa)',
      acoustics: '1.24s Echoic Vault Reverberation Chamber',
    },
  },
  {
    id: 'terraced-solarium',
    tag: 'PILLAR 02 // MEDITERRANEAN HORIZON',
    title: 'The Terraced Solarium',
    subtitle: 'Mediterranean Alabaster • Horizon Reflection • Plaster Arcade',
    image: '/portfolio/spatial-design/mob_greece_4.jpg',
    description:
      'A serene open-air sanctuary balancing monolithic whitewashed masonry with the calm stillness of a horizon reflection pool. The transition from interior portico to exterior sun deck dissolves spatial boundaries.',
    specs: {
      engine: 'UE5.4 Path Traced ArchViz Pipeline',
      solarPhysics: '14° Horizon Grazing Angle • 42,000 Lux Golden Cast',
      materialDensity: 'Smooth Venetian Alabaster Plaster & Polished Glass',
      acoustics: 'Open-Air Infinite Attenuation & Water Reflection',
    },
  },
];

export function SpatialDesignSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStudy, setActiveStudy] = useState<SpatialCaseStudy | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveStudy(null);
      }
    };
    if (activeStudy) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeStudy]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Bottom transition: Sunlight dims, soft blues drain away into sterile grey
  const colorDesaturation = useTransform(
    scrollYProgress,
    [0.75, 0.98],
    ['saturate(100%) brightness(100%)', 'saturate(25%) brightness(90%)']
  );

  return (
    <section
      id="spatial-design"
      ref={containerRef}
      data-color="#e2e8f0"
      data-text="#0f172a"
      className="panel relative w-full min-h-screen bg-[#e2e8f0] text-[#0f172a] py-14 md:py-16 px-6 md:px-16 lg:px-24 overflow-hidden z-20"
    >
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-8 md:gap-10">
        {/* ========================================================
            HEADER & MANIFESTO
            ======================================================== */}
        <div className="space-y-4 max-w-2xl border-b border-[#1E252B]/15 pb-6">
          {/* Status Pill / Pillar 02 */}
          <div className="text-sm font-bold tracking-widest uppercase text-slate-500 font-mono">
            Pillar 02 // Spatial Design &amp; Liminality
          </div>

          {/* Header */}
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-black leading-[0.98]">
            Architecting the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-black via-[#0066FF] to-[#0052CC]">
              Liminal.
            </span>
          </h2>

          {/* Body Copy */}
          <p className="text-[#334E68] text-base sm:text-lg lg:text-xl leading-relaxed font-normal max-w-xl">
            Beyond singular objects, Hold Media designs expansive, atmospheric virtual
            environments. Mastering complex lighting physics and high-end material texturing, we
            build serene, dream-like architectural spaces ideal for metaverse integration, virtual
            production lobbies, and high-fashion digital editorials.
          </p>
        </div>

        {/* ========================================================
            4-SITE ARCHITECTURAL STUDY GALLERY (2x2 GRID)
            ======================================================== */}
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-[#1E252B]/15 pb-3 font-mono text-xs text-[#627D98]">
            <span className="uppercase tracking-wider font-semibold text-[#0f172a] flex items-center gap-2">
              <Sparkle size={15} weight="bold" className="text-[#0066FF]" />
              <span>Architectural Case Studies &bull; Click to Inspect Physical Telemetry</span>
            </span>
            <span className="text-[#627D98]">4 ACTIVE SITES</span>
          </div>

          <motion.div
            style={{ filter: colorDesaturation }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-start"
          >
            {SPATIAL_STUDIES.map((study, idx) => (
              <div
                key={study.id}
                onClick={() => setActiveStudy(study)}
                className="group relative rounded-none overflow-hidden bg-[#DCE4EC] border-2 border-white/90 hover:border-[#0066FF]/60 shadow-[0_20px_60px_rgba(90,115,140,0.18)] transition-all duration-500 cursor-pointer"
              >
                <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden bg-slate-900">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    priority={idx < 2}
                    unoptimized
                    className="object-cover scale-[1.06] transition-all duration-700 group-hover:scale-[1.12]"
                  />

                  {/* Subtle Ambient Vignette */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/25" />

                  {/* Top Study Tag */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-2.5 py-1 rounded-none bg-black/75 backdrop-blur-md border border-white/20 text-white font-mono text-[10px] font-bold">
                      SITE 0{idx + 1}
                    </span>
                  </div>

                  {/* Bottom Sheet Card */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-none bg-white/95 border border-black/10 backdrop-blur-md flex items-center justify-between text-[#161B20] group-hover:border-[#0066FF]/40 transition-colors shadow-sm z-10">
                    <div className="space-y-0.5 max-w-[78%]">
                      <h3 className="font-bold text-base sm:text-lg text-[#0f172a] group-hover:text-[#0066FF] transition-colors truncate">
                        {study.title}
                      </h3>
                      <p className="text-[#627D98] text-xs font-mono truncate">
                        {study.subtitle}
                      </p>
                    </div>
                    <button
                      type="button"
                      aria-label={`Inspect ${study.title} spatial case study`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveStudy(study);
                      }}
                      className="p-2.5 rounded-none bg-[#0066FF] hover:bg-blue-600 text-white font-bold transition-colors cursor-pointer shadow-[0_0_12px_rgba(0,102,255,0.35)] shrink-0"
                    >
                      <ArrowUpRight size={16} weight="bold" />
                    </button>
                  </div>
                </div>

                {/* Sub-Card Real-Time Telemetry Bar */}
                <div className="p-3 border-t border-black/5 bg-white/60 flex items-center justify-between gap-2 font-mono text-[11px] text-[#486581]">
                  <div className="flex items-center gap-1.5 truncate">
                    <Cube size={13} className="text-[#0066FF] shrink-0" />
                    <span className="truncate">{study.specs.engine}</span>
                  </div>
                  <span className="text-[#0066FF] font-semibold shrink-0">INSPECT &rarr;</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ========================================================
          CLICKABLE SPATIAL CASE-STUDY MODAL (PILLAR 04 PARITY)
          ======================================================== */}
      <StudioModal
        isOpen={!!activeStudy}
        onClose={() => setActiveStudy(null)}
        borderColor="rgba(0, 102, 255, 0.4)"
        closeTestId="spatial-modal-close-btn"
      >
        {activeStudy && (
          <div className="-mx-6 sm:-mx-8 -mt-6 sm:-mt-8 flex flex-col">
            {/* Large Image Header */}
            <div className="relative aspect-[16/10] sm:aspect-[21/10] max-h-[38vh] w-full overflow-hidden bg-black shrink-0">
              <Image
                src={activeStudy.image}
                alt={activeStudy.title}
                fill
                unoptimized
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c1218] via-transparent to-black/50" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-none bg-blue-950/80 border border-[#0066FF]/40 text-blue-300 font-mono text-xs mb-2">
                  {activeStudy.tag}
                </div>
                <h3 className="text-3xl sm:text-4xl font-black text-white">
                  {activeStudy.title}
                </h3>
                <p className="text-slate-300 text-sm font-mono mt-1">
                  {activeStudy.subtitle}
                </p>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <h4 className="text-xs uppercase tracking-widest font-mono text-[#0066FF] font-bold mb-2">
                  Case Study Narrative
                </h4>
                <p className="text-slate-200 text-base leading-relaxed">
                  {activeStudy.description}
                </p>
              </div>

              {/* Technical Specifications Matrix */}
              <div className="pt-4 border-t border-white/10 space-y-3 font-mono text-xs">
                <h4 className="text-xs uppercase tracking-widest text-slate-400 font-bold">
                  Technical Specifications
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-none bg-white/[0.04] border border-white/10">
                    <span className="text-slate-400 block mb-1">Engine Architecture:</span>
                    <span className="text-white font-bold">{activeStudy.specs.engine}</span>
                  </div>
                  <div className="p-3.5 rounded-none bg-white/[0.04] border border-white/10">
                    <span className="text-slate-400 block mb-1">Solar Physics &amp; Lux:</span>
                    <span className="text-white font-bold">{activeStudy.specs.solarPhysics}</span>
                  </div>
                  <div className="p-3.5 rounded-none bg-white/[0.04] border border-white/10">
                    <span className="text-slate-400 block mb-1">Material Density:</span>
                    <span className="text-white font-bold">{activeStudy.specs.materialDensity}</span>
                  </div>
                  <div className="p-3.5 rounded-none bg-white/[0.04] border border-white/10">
                    <span className="text-slate-400 block mb-1">Acoustic Dispersion:</span>
                    <span className="text-white font-bold">{activeStudy.specs.acoustics}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  onClick={() => setActiveStudy(null)}
                  className="px-6 py-2.5 rounded-none bg-[#0066FF] hover:bg-blue-600 text-white font-bold font-mono text-xs transition-colors cursor-pointer"
                >
                  CLOSE INSPECTION
                </button>
              </div>
            </div>
          </div>
        )}
      </StudioModal>
    </section>
  );
}

export default SpatialDesignSection;
