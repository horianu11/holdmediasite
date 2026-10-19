'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'motion/react';
import { Waveform, Sparkle, ArrowUpRight, ShieldCheck } from '@phosphor-icons/react';
import { StudioModal } from '@/components/ui/studio-modal';

interface CulturalCaseStudy {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  image: string;
  description: string;
  specs: {
    medium: string;
    distortion: string;
    colorPalette: string;
    engine: string;
  };
}

const CULTURAL_STUDIES: CulturalCaseStudy[] = [
  {
    id: 'hellenistic-bust',
    tag: 'PILLAR 01 // CULTURAL DISRUPTION',
    title: 'Sliced Hellenistic Bust',
    subtitle: 'Hellenic Marble • Generative Red Waveform Slices',
    image: '/portfolio/cultural-disruption/pewds_greece_1.jpg',
    description:
      'Juxtaposing classical antiquity with generative waveforms. Hellenistic marble is fractured via procedural boolean noise, clashing ancient permanence with digital energy.',
    specs: {
      medium: 'Hellenic White Marble & Alabaster',
      distortion: 'Procedural Noise Slices & Boolean Shears',
      colorPalette: 'Crimson (#FF3333) & Glossy Obsidian',
      engine: 'Octane Spectral & Houdini Procedural',
    },
  },
  {
    id: 'glitched-nefertiti',
    tag: 'PILLAR 01 // DYNASTIC VOXEL',
    title: 'Glitched Nefertiti',
    subtitle: 'Dynastic Egyptian • Voxel Spectral Dispersion',
    image: '/portfolio/cultural-disruption/pewds_egipt_1.jpg',
    description:
      'Deconstructing the iconic 18th-Dynasty royal bust through spectral dispersion. Anatomical slice registers shift across three axes, forging a disruptive digital artifact.',
    specs: {
      medium: 'Limestone Core & Layered Gypsum',
      distortion: 'Sub-Pixel RGB Glitch & Volumetric Shearing',
      colorPalette: 'Sandstone Beige, Cobalt & Crimson',
      engine: 'Custom GLSL & Unreal Engine 5.4 Nanite',
    },
  },
  {
    id: 'submerged-encasement',
    tag: 'PILLAR 01 // EXPERIMENTAL SPECIMEN',
    title: 'The Submerged Encasement',
    subtitle: 'Preserved Classical Bust • Translucent Polymer Suspension',
    image: '/portfolio/cultural-disruption/pweds_1.jpg',
    description:
      'Suspending classical anatomy inside dense translucent polymer. Fluid crimson currents twist through negative space, frozen within hyper-realistic refractive resin.',
    specs: {
      medium: 'Optical Polymer Resin & Marble Core',
      distortion: 'Hydrodynamic Fluid & Photon Dispersion',
      colorPalette: 'Deep Burgundy (#E51937) & Obsidian',
      engine: 'Unbiased Photon Mapping & Sub-Surface',
    },
  },
];

export function CulturalDisruptionSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStudy, setActiveStudy] = useState<CulturalCaseStudy | null>(null);
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

  // Staggered parallax offsets for the grid items
  const yParallaxLeft = useTransform(scrollYProgress, [0, 1], [-40, 50]);
  const yParallaxRight = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const slashRotate = useTransform(scrollYProgress, [0, 1], [-14, -8]);

  return (
    <section
      id="cultural-disruption"
      ref={containerRef}
      data-color="#0a0000"
      data-text="#ffffff"
      className="panel relative w-full min-h-screen bg-[#0a0000] text-white py-14 md:py-16 px-6 md:px-16 lg:px-24 overflow-hidden z-20"
    >
      {/* ========================================================
          AGGRESSIVE SLASHES: DEEP CRIMSON & GLOSSY BLACK INTERRUPTIONS
          ======================================================== */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden select-none">
        {/* Aggressive Razor Slash 1: Deep Crimson Ribbon piercing across the canvas */}
        <motion.div
          style={{ rotate: slashRotate }}
          className="absolute -top-10 -left-20 w-[140vw] h-[3px] bg-gradient-to-r from-transparent via-[#E51937] to-transparent shadow-[0_0_20px_#E51937] opacity-80"
        />

        {/* Aggressive Razor Slash 2: Dark Crimson Blade cutting diagonally */}
        <motion.div
          style={{ rotate: slashRotate }}
          className="absolute top-1/3 -left-20 w-[140vw] h-[1px] bg-gradient-to-r from-transparent via-[#E51937]/40 to-transparent opacity-60"
        />

        {/* Dynamic Crimson Slash Block (Geometric Slice Motif) */}
        <div className="absolute top-1/4 -right-28 w-96 h-2 bg-[#E51937] rotate-[-12deg] shadow-[0_0_30px_rgba(229,25,55,0.4)]" />
        <div className="absolute top-1/4 -right-20 w-80 h-1 bg-black rotate-[-12deg]" />

      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-10 md:gap-12">
        {/* ========================================================
            HEADER & MANIFESTO COPY
            ======================================================== */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-red-900/30">
          <div className="space-y-4 max-w-2xl">
            {/* Pillar 01 Eyebrow matching previous project */}
            <div className="text-sm font-bold tracking-widest uppercase text-red-600 font-mono">
              Pillar 01 // Cultural Disruption
            </div>

            {/* Header: Deconstructing Antiquity */}
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[0.98]">
              Deconstructing <br />
              <span className="relative inline-block">
                <span>Antiquity.</span>
                {/* Aggressive Crimson Underline Slash */}
                <span className="absolute -bottom-1 left-0 right-0 h-[4px] bg-[#E51937] skew-x-[-20deg]" />
              </span>
            </h2>

            {/* Exact Requested Body Copy */}
            <p className="text-neutral-300 text-base sm:text-lg lg:text-xl leading-relaxed font-light opacity-90 max-w-xl">
              We bridge the gap between historical foundation and hyper-modern internet culture.
              By applying aggressive, digital-first distortions to classical forms, we create a
              disruptive visual language designed to make modern brands and gaming properties
              instantly recognizable.
            </p>
          </div>
        </div>

        {/* ========================================================
            STAGGERED PARALLAX GRID: SLICED BUST & GLITCHED NEFERTITI
            ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Card 1: Sliced Hellenistic Bust (Elevated Left Column) */}
          <motion.div
            style={{ y: yParallaxLeft }}
            onClick={() => setActiveStudy(CULTURAL_STUDIES[0])}
            className="md:col-span-7 group relative rounded-none overflow-hidden bg-black border-2 border-black/90 hover:border-red-600/60 shadow-[0_30px_90px_rgba(0,0,0,0.18)] cursor-pointer transition-all duration-300"
          >
            {/* Glossy Black & Slashed Frame Accent */}
            <div className="relative aspect-[4/5] sm:aspect-[1/1] w-full overflow-hidden">
              <Image
                src="/portfolio/cultural-disruption/pewds_greece_1.jpg"
                alt="Sliced Hellenistic Bust with aggressive digital red waves"
                fill
                priority
                unoptimized
                className="object-cover scale-105 filter contrast-110 saturate-125 transition-transform duration-700 group-hover:scale-110"
              />

              {/* Diagonal Crimson Laser Ribbon intersecting card edge */}
              <div className="absolute -top-12 -right-12 w-36 h-36 bg-[#FF3333] rotate-45 transform translate-x-12 -translate-y-12 shadow-[0_0_25px_#FF3333]" />

              {/* Bottom Spec Sheet in Glossy Obsidian */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-none bg-black/90 border border-white/10 group-hover:border-red-500/40 backdrop-blur-md flex items-center justify-between text-white transition-colors">
                <div>
                  <h3 className="font-bold text-lg text-white group-hover:text-red-300 transition-colors">
                    Sliced Hellenistic Bust
                  </h3>
                  <p className="text-neutral-400 text-xs sm:text-sm font-mono mt-0.5">
                    Hellenic Marble &bull; Generative Red Waveform Slices
                  </p>
                </div>
                <button
                  type="button"
                  aria-label="Inspect Sliced Hellenistic Bust case study"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveStudy(CULTURAL_STUDIES[0]);
                  }}
                  className="p-3 rounded-none bg-[#FF3333] hover:bg-red-500 text-white transition-colors cursor-pointer shadow-[0_0_15px_rgba(255,51,51,0.4)]"
                >
                  <ArrowUpRight size={18} weight="bold" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Glitched Nefertiti (Staggered Right Column with Offset) */}
          <motion.div
            style={{ y: yParallaxRight }}
            onClick={() => setActiveStudy(CULTURAL_STUDIES[1])}
            className="md:col-span-5 md:mt-10 group relative rounded-none overflow-hidden bg-black border-2 border-black/90 hover:border-red-600/60 shadow-[0_30px_90px_rgba(0,0,0,0.18)] cursor-pointer transition-all duration-300"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <Image
                src="/portfolio/cultural-disruption/pewds_egipt_1.jpg"
                alt="Glitched Nefertiti sliced with chromatic aberration"
                fill
                priority
                unoptimized
                className="object-cover scale-105 filter contrast-110 saturate-125 transition-transform duration-700 group-hover:scale-110"
              />

              {/* Bottom Spec Sheet */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-none bg-black/90 border border-white/10 group-hover:border-red-500/40 backdrop-blur-md flex items-center justify-between text-white transition-colors">
                <div>
                  <h3 className="font-bold text-base sm:text-lg text-white group-hover:text-red-300 transition-colors">
                    Glitched Nefertiti
                  </h3>
                  <p className="text-neutral-400 text-xs font-mono mt-0.5">
                    Dynastic Egyptian &bull; Voxel Spectral Dispersion
                  </p>
                </div>
                <button
                  type="button"
                  aria-label="Inspect Glitched Nefertiti case study"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveStudy(CULTURAL_STUDIES[1]);
                  }}
                  className="p-2.5 rounded-none bg-[#E51937] hover:bg-red-500 text-white transition-colors cursor-pointer shadow-[0_0_15px_rgba(229,25,55,0.4)]"
                >
                  <ArrowUpRight size={16} weight="bold" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Card 3 (Supporting Baseline): The Submerged Encasement wide banner */}
        <div
          onClick={() => setActiveStudy(CULTURAL_STUDIES[2])}
          className="relative w-full rounded-none overflow-hidden bg-black border-2 border-black/90 hover:border-red-600/60 shadow-xl group mt-4 cursor-pointer transition-all duration-300"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 items-center">
            <div className="md:col-span-5 relative aspect-square sm:aspect-[4/3] w-full bg-black overflow-hidden">
              <Image
                src="/portfolio/cultural-disruption/pweds_1.jpg"
                alt="The Submerged Encasement with fluid crimson waves"
                fill
                unoptimized
                className="object-cover scale-105 transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="md:col-span-7 p-8 sm:p-12 space-y-4 text-white">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-none bg-red-950/60 border border-red-500/30 text-red-400 font-mono text-xs">
                <span>SPECIMEN // 03</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white group-hover:text-red-300 transition-colors">
                The Submerged Encasement
              </h3>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed max-w-lg">
                Suspending classical anatomy inside turbulent translucent polymer resin. Fluid
                crimson currents twist through the negative space, stamped with the signature &ldquo;HM&rdquo;
                monogram.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  aria-label="Inspect The Submerged Encasement case study"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveStudy(CULTURAL_STUDIES[2]);
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-none bg-[#E51937] hover:bg-red-500 text-white font-mono text-xs font-bold transition-colors cursor-pointer"
                >
                  <span>INSPECT SPECIMEN</span>
                  <ArrowUpRight size={14} weight="bold" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          CLICKABLE CASE-STUDY MODAL INSPECTION (PILLAR 4 PARITY)
          ======================================================== */}
      <StudioModal
        isOpen={!!activeStudy}
        onClose={() => setActiveStudy(null)}
        borderColor="rgba(229, 25, 55, 0.4)"
        closeTestId="cultural-modal-close-btn"
        overflowClassName="overflow-hidden"
      >
        {activeStudy && (
          <div className="-mx-6 sm:-mx-8 -mt-6 sm:-mt-8 flex flex-col">
            {/* Image Header */}
            <div className="relative aspect-[16/9] sm:aspect-[21/9] max-h-[24vh] sm:max-h-[28vh] w-full overflow-hidden bg-black shrink-0">
              <Image
                src={activeStudy.image}
                alt={activeStudy.title}
                fill
                unoptimized
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0506] via-transparent to-black/50" />
              <div className="absolute bottom-4 left-5 right-5 sm:bottom-5 sm:left-6 sm:right-6">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-none bg-red-950/80 border border-red-500/40 text-red-300 font-mono text-[10px] sm:text-xs mb-1.5">
                  {activeStudy.tag}
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  {activeStudy.title}
                </h3>
                <p className="text-neutral-400 text-xs sm:text-sm font-mono mt-0.5">
                  {activeStudy.subtitle}
                </p>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-4 sm:p-6 space-y-4">
              <div>
                <h4 className="text-[10px] sm:text-xs uppercase tracking-widest font-mono text-red-500 font-bold mb-1.5">
                  Case Study Narrative
                </h4>
                <p className="text-slate-200 text-xs sm:text-sm leading-relaxed line-clamp-3">
                  {activeStudy.description}
                </p>
              </div>

              {/* Technical Specifications Matrix */}
              <div className="pt-3 border-t border-white/10 space-y-2.5 font-mono text-xs">
                <h4 className="text-[10px] sm:text-xs uppercase tracking-widest text-slate-400 font-bold">
                  Technical Specifications
                </h4>
                <div className="grid grid-cols-2 gap-2 sm:gap-2.5 text-[11px] sm:text-xs">
                  <div className="p-2 sm:p-2.5 rounded-none bg-white/[0.04] border border-white/10">
                    <span className="text-slate-400 block mb-0.5 text-[10px]">Medium / Material:</span>
                    <span className="text-white font-bold truncate block">{activeStudy.specs.medium}</span>
                  </div>
                  <div className="p-2 sm:p-2.5 rounded-none bg-white/[0.04] border border-white/10">
                    <span className="text-slate-400 block mb-0.5 text-[10px]">Distortion Mechanics:</span>
                    <span className="text-white font-bold truncate block">{activeStudy.specs.distortion}</span>
                  </div>
                  <div className="p-2 sm:p-2.5 rounded-none bg-white/[0.04] border border-white/10">
                    <span className="text-slate-400 block mb-0.5 text-[10px]">Color Palette & Contrast:</span>
                    <span className="text-white font-bold truncate block">{activeStudy.specs.colorPalette}</span>
                  </div>
                  <div className="p-2 sm:p-2.5 rounded-none bg-white/[0.04] border border-white/10">
                    <span className="text-slate-400 block mb-0.5 text-[10px]">Production Pipeline:</span>
                    <span className="text-white font-bold truncate block">{activeStudy.specs.engine}</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setActiveStudy(null)}
                  className="px-5 py-2 rounded-none bg-[#E51937] hover:bg-red-500 text-white font-bold font-mono text-xs transition-colors cursor-pointer"
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
