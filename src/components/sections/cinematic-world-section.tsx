'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { StudioModal } from '@/components/ui/studio-modal';
import {
  Cube,
  Sparkle,
  ArrowUpRight,
} from '@phosphor-icons/react';

interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  tag: string;
  specs: {
    engine: string;
    lighting: string;
    geometry: string;
    atmosphere: string;
  };
  description: string;
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'ruined-view',
    title: 'The Ruined View × The Maroon Anomaly',
    subtitle: 'Boreal Overlook • Floating Spherical Phenomenon',
    image: '/portfolio/cinematic-world/cernobyl_outside_2.jpg',
    tag: 'SECTOR 01 // OVERLOOK',
    specs: {
      engine: 'Unreal Engine 5.4 Nanite & Lumen',
      lighting: 'Atmospheric Volumetric Rayleigh Scattering',
      geometry: 'Weathered Concrete Balcony & Dual Anomaly',
      atmosphere: 'Unbroken Boreal Forest Pine Canopy Mist',
    },
    description:
      'A weathered concrete observation terrace overlooking unbroken boreal pine forests. Hovering silently in equilibrium is a dual-sphere maroon anomaly defying gravitational physics, juxtaposed against industrial decay and Soviet telemetry remnants.',
  },
  {
    id: 'cavern-anomaly',
    title: 'The Cavern Anomaly',
    subtitle: 'Subterranean Reservoir • Levitating Disc Colonnade',
    image: '/portfolio/cinematic-world/cernobyl_inside_3.jpg',
    tag: 'SECTOR 04 // SUB-TERRAIN',
    specs: {
      engine: 'Unreal Engine 5.4 Nanite Ready',
      lighting: 'Volumetric Raymarched Caustics',
      geometry: 'Procedural Rock Basalt & Levitating Discs',
      atmosphere: 'Subterranean Humidity & Water Mist',
    },
    description:
      'A solitary researcher in pressurized hazmat surveying an impossible geometric phenomenon in a flooded subterranean cave. Four perfectly planar metallic discs float silently in equilibrium above still water.',
  },
  {
    id: 'control-room',
    title: 'The Control Room',
    subtitle: 'Decommissioned Reactor Sub-Level • Tesseract Beacon',
    image: '/portfolio/cinematic-world/cernobyl_1.jpg',
    tag: 'SECTOR 07 // CONTROL LAB',
    specs: {
      engine: 'Real-Time Octane Spectral Path Tracer',
      lighting: 'High-Emission Neon White Volumetric Bloom',
      geometry: 'Industrial Relay Racks & Tesseract Wireframe',
      atmosphere: 'Dense Industrial Particulate Fog',
    },
    description:
      'Juxtaposing brutalist Soviet-era telemetry consoles, CRT terminal monitors, and tangled floor cabling with a pristine, glowing neon tesseract encasing dark levitating spherical matter.',
  },
];

export function CinematicWorldSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStudy, setActiveStudy] = useState<CaseStudy | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="cinematic-world"
      ref={containerRef}
      data-color="#0a0a0a"
      data-text="#d4d4d8"
      className="panel relative w-full min-h-screen bg-[#0a0a0a] text-[#d4d4d8] py-14 md:py-16 px-6 md:px-16 lg:px-24 overflow-hidden z-20"
    >
      {/* Subtle Atmospheric Specular Lighting Accent (No background image) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden select-none -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-[radial-gradient(ellipse_at_center,rgba(0,102,255,0.06)_0%,transparent_70%)] blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-10 md:gap-12">
        {/* ========================================================
            HEADER & COPY
            ======================================================== */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-white/10">
          <div className="space-y-4 max-w-2xl">
            {/* Pillar 04 Eyebrow */}
            <div className="text-sm font-bold tracking-widest uppercase text-zinc-500 font-mono">
              Pillar 04 // Cinematic World-Building
            </div>

            {/* Exact Header: Anomalous Environments */}
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[0.98]">
              Anomalous <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-[#0066FF] drop-shadow-[0_0_25px_rgba(0,102,255,0.35)]">
                Environments.
              </span>
            </h2>

            {/* Exact Body Copy */}
            <p className="text-slate-300 text-base sm:text-lg lg:text-xl leading-relaxed font-normal max-w-xl">
              Environmental storytelling is at our core. We construct massive, story-driven
              cinematic worlds that juxtapose industrial decay with high-concept sci-fi geometry.
              Our environments are fully realized stages ready for real-time engines and narrative
              exploration.
            </p>
          </div>
        </div>

        {/* ========================================================
            CENTRAL SHOWCASE: THE RUINED VIEW & ANOMALOUS TELEMETRY
            ======================================================== */}
        <div className="relative rounded-none overflow-hidden border-2 border-[#0066FF]/25 bg-[#0A0E14]/90 backdrop-blur-md p-5 sm:p-8 shadow-[0_30px_90px_rgba(0,0,0,0.5)]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-white/10">
            <div className="space-y-1">
              <span className="text-[#0066FF] font-mono text-xs uppercase tracking-widest font-bold">
                Anchor Panorama &bull; Environmental Telemetry
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                The Ruined View &times; The Maroon Anomaly
              </h3>
            </div>
            <div className="flex items-center gap-2 font-mono text-xs text-slate-400 bg-white/[0.04] px-3.5 py-1.5 rounded-none border border-white/10">
              <span className="w-2 h-2 rounded-none bg-emerald-400 animate-pulse" />
              <span>51°23&apos;23.2&quot;N 30°05&apos;57.4&quot;E &bull; UNREAL ENGINE 5.4</span>
            </div>
          </div>

          <div className="pt-5 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-300 font-mono">
            <div className="p-3.5 rounded-none bg-white/[0.03] border border-white/10 space-y-1.5">
              <div className="text-blue-400 font-bold uppercase">Industrial Decay</div>
              <p className="text-slate-400 leading-relaxed font-sans text-xs">
                Weathered concrete peeling plaster, water damage decals, and abandoned Soviet furnishings.
              </p>
            </div>
            <div className="p-3.5 rounded-none bg-white/[0.03] border border-white/10 space-y-1.5">
              <div className="text-red-400 font-bold uppercase">Maroon Anomaly</div>
              <p className="text-slate-400 leading-relaxed font-sans text-xs">
                Floating dual-sphere anomaly defying gravitational physics over unbroken boreal pine forests.
              </p>
            </div>
            <div className="p-3.5 rounded-none bg-white/[0.03] border border-white/10 space-y-1.5">
              <div className="text-white font-bold uppercase">Real-Time Staging</div>
              <p className="text-slate-400 leading-relaxed font-sans text-xs">
                Optimized for interactive virtual production, AAA cinematic cutscenes, and game world assets.
              </p>
            </div>
          </div>
        </div>

        {/* ========================================================
            THE 3 ANOMALOUS PROJECT SITES (DISPLAYED TOGETHER AS CARDS):
            1. THE RUINED VIEW × THE MAROON ANOMALY
            2. THE CAVERN ANOMALY
            3. THE CONTROL ROOM
            ======================================================== */}
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-3 font-mono text-xs text-slate-400">
            <span className="uppercase tracking-wider font-semibold text-white flex items-center gap-2">
              <Sparkle size={15} weight="bold" className="text-[#0066FF]" />
              <span>Interactive Case-Study Portals &bull; Click to Inspect Architecture</span>
            </span>
            <span className="text-slate-500">3 ACTIVE SITES</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 items-start">
            {CASE_STUDIES.map((study) => (
              <motion.div
                key={study.id}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                onClick={() => setActiveStudy(study)}
                className="group relative rounded-none overflow-hidden bg-[#0D1519]/90 border-2 border-[#0066FF]/25 hover:border-[#0066FF]/60 shadow-[0_25px_80px_rgba(0,0,0,0.5)] transition-all duration-500 cursor-pointer"
              >
                {/* Visual Thumbnail */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-black">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    unoptimized
                    className="object-cover scale-105 transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Moody Vignette */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#091014] via-transparent to-black/30 opacity-80" />

                  {/* Bottom Sheet Card */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-none bg-black/85 border border-white/15 backdrop-blur-md flex items-center justify-between text-white group-hover:border-[#0066FF]/40 transition-colors">
                    <div className="space-y-0.5 max-w-[80%]">
                      <h4 className="font-bold text-base text-white group-hover:text-blue-200 transition-colors truncate">
                        {study.title}
                      </h4>
                      <p className="text-slate-400 text-xs font-mono truncate">
                        {study.subtitle}
                      </p>
                    </div>
                    <div className="p-2.5 rounded-none bg-[#0066FF] text-white font-bold group-hover:bg-blue-600 transition-colors shrink-0 shadow-[0_0_15px_rgba(0,102,255,0.4)]">
                      <ArrowUpRight size={16} weight="bold" />
                    </div>
                  </div>
                </div>

                {/* Sub-Card Real-Time Engine Telemetry Bar */}
                <div className="p-4 border-t border-white/10 bg-black/40 flex items-center justify-between gap-2 font-mono text-[11px] text-slate-400">
                  <div className="flex items-center gap-1.5 truncate">
                    <Cube size={13} className="text-[#0066FF] shrink-0" />
                    <span className="truncate">{study.specs.engine}</span>
                  </div>
                  <span className="text-blue-400 font-semibold shrink-0">INSPECT &rarr;</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================================
          CLICKABLE CASE-STUDY MODAL INSPECTION
          ======================================================== */}
      <StudioModal
        isOpen={!!activeStudy}
        onClose={() => setActiveStudy(null)}
        borderColor="rgba(20, 184, 166, 0.4)"
        closeTestId="cinematic-modal-close-btn"
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
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1519] via-transparent to-black/40" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-none bg-teal-950/80 border border-teal-500/40 text-teal-300 font-mono text-xs mb-2">
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
                <h4 className="text-xs uppercase tracking-widest font-mono text-teal-400 font-bold mb-2">
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
                    <span className="text-slate-400 block mb-1">Engine Target:</span>
                    <span className="text-white font-bold">{activeStudy.specs.engine}</span>
                  </div>
                  <div className="p-3.5 rounded-none bg-white/[0.04] border border-white/10">
                    <span className="text-slate-400 block mb-1">Lighting Physics:</span>
                    <span className="text-white font-bold">{activeStudy.specs.lighting}</span>
                  </div>
                  <div className="p-3.5 rounded-none bg-white/[0.04] border border-white/10">
                    <span className="text-slate-400 block mb-1">Geometry System:</span>
                    <span className="text-white font-bold">{activeStudy.specs.geometry}</span>
                  </div>
                  <div className="p-3.5 rounded-none bg-white/[0.04] border border-white/10">
                    <span className="text-slate-400 block mb-1">Atmospheric Simulation:</span>
                    <span className="text-white font-bold">{activeStudy.specs.atmosphere}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  onClick={() => setActiveStudy(null)}
                  className="px-6 py-2.5 rounded-none bg-teal-500 hover:bg-teal-400 text-black font-bold font-mono text-xs transition-colors"
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

export default CinematicWorldSection;
