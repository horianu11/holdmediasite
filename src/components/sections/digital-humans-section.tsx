'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'motion/react';
import { StudioModal } from '@/components/ui/studio-modal';
import {
  Cpu,
  UserFocus,
  Sparkle,
  Fingerprint,
  ArrowUpRight,
} from '@phosphor-icons/react';

interface DigitalHumanSpecimen {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  image: string;
  isVideo?: boolean;
  videoSrc?: string;
  description: string;
  specs: {
    anatomy: string;
    shader: string;
    subdivision: string;
    simulation: string;
  };
}

const SPECIMEN_STUDIES: DigitalHumanSpecimen[] = [
  {
    id: 'porcelain-mask',
    tag: 'PILLAR 03 // DIGITAL ANATOMY',
    title: 'Porcelain Mask',
    subtitle: 'Glazed Ceramic Shell • Organic Facial Graft',
    image: '/portfolio/digital-humans/deathstranding_porcelien_5.jpg',
    description:
      'Exploring transhumanist identity through the fusion of high-gloss porcelain ceramics and hyper-realistic synthetic human flesh. The porcelain cracks reveal sub-dermal melanin, epidermal vascular networks, and raw bone geometry.',
    specs: {
      anatomy: 'Photogrammetric Facial Rig with 98 FACS Blendshapes',
      shader: 'Dual-Lobe Clearcoat Glaze with Sub-Surface Skin Scattering',
      subdivision: 'Level 5 Micro-Porous Displacement (8K Displacements)',
      simulation: 'Dual-Phase Fracture Dynamics & Micro-Crack Stress Vectors',
    },
  },
  {
    id: 'mandible-turntable',
    tag: 'PILLAR 03 // VOLUMETRIC MOTION',
    title: '3D Mandible Turntable',
    subtitle: 'Dynamic Turntable • Exposed Cranial Architecture',
    image: '/portfolio/digital-humans/video_preview.jpg',
    isVideo: true,
    videoSrc: '/portfolio/digital-humans/gemini_generated_video_86d9e23b.mp4',
    description:
      'A continuous 60fps rotational analysis exposing the underlying cranium, zygomatic arch, and detached porcelain mandible. Demonstrates real-time subsurface light penetration and specular falloff across complex facial contours.',
    specs: {
      anatomy: 'Biometrically Accurate Skeletal & Muscular Registration',
      shader: 'Physically Based Octane Spectral Raytracing (IOR 1.41)',
      subdivision: 'Unreal Engine 5.4 Nanite High-Density Polygonal Mesh',
      simulation: 'Dynamic Volumetric Lighting with Caustic Refraction',
    },
  },
  {
    id: 'bone-detail',
    tag: 'PILLAR 03 // TRANSHUMANIST SPECIMEN',
    title: 'Bone Anatomy Detail',
    subtitle: 'Detached Mandible • Porcelain Teeth & Shadow Depth',
    image: '/portfolio/digital-humans/deathstranding_half_8.jpg',
    description:
      'Close-range macro inspection of the detached lower mandible and exposed porcelain dentition emerging from visceral shadow. Every dental crown and bone pore is mapped to real anatomical indices for cinematic fidelity.',
    specs: {
      anatomy: 'Complete Human Skeletal Mesh with Enamel Ceramic Shaders',
      shader: 'Deep SSS Melanin & Dermal Scatter (1.42mm Radius)',
      subdivision: '120,000 Hair Splines with Fiber-Optic Light Absorption',
      simulation: 'Interactive Ragdoll Bone Kinematics & Stress Testing',
    },
  },
];

export function DigitalHumansSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [sliderPosition, setSliderPosition] = useState<number>(50); // percentage 0-100
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [activeSpecimen, setActiveSpecimen] = useState<DigitalHumanSpecimen | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveSpecimen(null);
      }
    };
    if (activeSpecimen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeSpecimen]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Darkening into twilight blue and thick industrial fog towards the end of Section 3
  const fogOpacity = useTransform(scrollYProgress, [0.6, 0.95], [0, 0.92]);
  const fogY = useTransform(scrollYProgress, [0.6, 0.95], [60, -20]);
  const fogScale = useTransform(scrollYProgress, [0.6, 0.95], [0.95, 1.05]);

  // Handle slider drag interaction
  const updateSliderFromPointer = (clientX: number) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(true);
    updateSliderFromPointer(e.clientX);
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    updateSliderFromPointer(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(false);
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // ignore
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
      e.preventDefault();
      setSliderPosition((prev) => Math.max(0, prev - 5));
    } else if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
      e.preventDefault();
      setSliderPosition((prev) => Math.min(100, prev + 5));
    } else if (e.key === 'Home') {
      e.preventDefault();
      setSliderPosition(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      setSliderPosition(100);
    }
  };

  return (
    <section
      id="digital-humans"
      ref={containerRef}
      data-color="#1e1026"
      data-text="#e9d5ff"
      className="panel relative w-full min-h-screen bg-[#1e1026] text-[#e9d5ff] py-14 md:py-16 px-6 md:px-16 lg:px-24 overflow-hidden z-20"
    >
      {/* ========================================================
          CLINICAL SCI-FI ATMOSPHERE & TWILIGHT FOG
          ======================================================== */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden select-none">
        {/* Transhumanist Specular Purple/Violet Radial Spotlight */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[650px] bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.14)_0%,transparent_70%)] blur-[90px]" />

        {/* Visceral Organic Red Sub-Surface Glow from bottom-right */}
        <div className="absolute top-1/3 -right-24 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(209,26,42,0.18)_0%,transparent_65%)] blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-10 md:gap-12">
        {/* ========================================================
            HEADER & MANIFESTO COPY
            ======================================================== */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-purple-500/20">
          <div className="space-y-4 max-w-2xl">
            {/* Pillar 03 Eyebrow matching previous project */}
            <div className="text-sm font-bold tracking-widest uppercase text-purple-400 font-mono">
              Pillar 03 // Digital Humans
            </div>

            {/* Exact Header: The New Digital Anatomy */}
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[0.98]">
              The New <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-[#FF3333]">
                Digital Anatomy.
              </span>
            </h2>

            {/* Exact Body Copy */}
            <p className="text-slate-300 text-base sm:text-lg lg:text-xl leading-relaxed font-normal max-w-xl">
              We push the boundaries of digital human creation. From hyper-realistic skin textures
              and micro-expressions to surreal, transhumanist geometric anomalies, our character
              models are built for narrative depth. We supply next-generation avatars for AAA
              gaming, virtual influencers, and interactive media.
            </p>
          </div>


        </div>

        {/* ========================================================
            FEATURE 1: INTERACTIVE PIPELINE SLIDER (PIPELINE SPLIT FACE)
            ======================================================== */}
        <div className="space-y-4">
          {/* Interactive Comparison Stage (Portrait 4:5 optimized layout) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Telemetry Column Left */}
            <div className="hidden lg:flex lg:col-span-3 flex-col gap-3 font-mono text-xs">
              <div className="p-4 rounded-none bg-white/[0.03] border border-white/10 backdrop-blur-md space-y-2.5">
                <div className="text-slate-500 text-[10px] uppercase tracking-widest font-bold">
                  Layer 01 &bull; Topology Base
                </div>
                <div className="text-sm font-bold text-white">Pipeline Split Face</div>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Clay sculpt mesh with geometric polygon flow, untextured hair strands, and anatomical bone registration.
                </p>
                <div className="pt-2 border-t border-white/10 text-[11px] text-slate-400 flex justify-between">
                  <span>Subdivision:</span>
                  <span className="text-white font-bold">Level 4 (High-Poly)</span>
                </div>
              </div>

              <div className="p-4 rounded-none bg-red-950/20 border border-red-500/20 backdrop-blur-md space-y-2.5">
                <div className="text-red-400 text-[10px] uppercase tracking-widest font-bold">
                  Layer 02 &bull; Sub-Dermal Shading
                </div>
                <div className="text-sm font-bold text-white">Visceral Red Reveal</div>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Deep dermal scatter layers simulating blood flow, epidermal translucent melanin, and micro-pore reflection.
                </p>
                <div className="pt-2 border-t border-red-500/20 text-[11px] text-red-300 flex justify-between">
                  <span>Scatter Radius:</span>
                  <span className="text-white font-bold">1.42 mm (Organic)</span>
                </div>
              </div>
            </div>

            {/* Centered Draggable Slider Stage */}
            <div className="lg:col-span-6 flex justify-center">
              <div
                ref={sliderRef}
                tabIndex={0}
                role="slider"
                aria-label="Anatomical Clay to Dermal Shader Comparison"
                aria-valuenow={Math.round(sliderPosition)}
                aria-valuemin={0}
                aria-valuemax={100}
                onKeyDown={handleKeyDown}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                className="relative w-full max-w-[460px] aspect-[4/5] rounded-none overflow-hidden border-2 border-white/20 bg-[#12171F] shadow-[0_30px_90px_rgba(0,0,0,0.6)] cursor-ew-resize select-none touch-none group focus:outline-hidden focus:ring-2 focus:ring-[#FF3333]"
              >
                {/* Background Layer: Fully Rendered Photorealistic Subsurface Skin */}
                <div className="absolute inset-0">
                  <Image
                    src="/portfolio/digital-humans/deathstranding_1.jpg"
                    alt="Fully Rendered Photorealistic Subsurface Skin with Visceral Organic Red Reveal"
                    fill
                    priority
                    unoptimized
                    className="object-cover"
                  />
                  {/* Subtle vignette */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />

                </div>

                {/* Clipped Foreground Layer: Pipeline Split Clay Face */}
                <div
                  style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                  className="absolute inset-0 transition-[clip-path] duration-75 ease-out"
                >
                  <Image
                    src="/portfolio/digital-humans/deathstranding_white_4.jpg"
                    alt="Pipeline Split Clay Model Face with Structural Geometry"
                    fill
                    priority
                    unoptimized
                    className="object-cover"
                  />
                  {/* Subtle vignette */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />

                </div>

                {/* Draggable Divider Line & Knob */}
                <div
                  style={{ left: `${sliderPosition}%` }}
                  className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_16px_rgba(255,255,255,0.9)] z-30 transition-[left] duration-75 pointer-events-none"
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-none bg-white text-black border-2 border-red-600 flex items-center justify-center shadow-[0_0_20px_rgba(209,26,42,0.5)] font-mono text-xs font-black">
                    &harr;
                  </div>
                </div>


              </div>
            </div>

            {/* Telemetry Column Right */}
            <div className="lg:col-span-3 flex flex-col gap-3 font-mono text-xs">
              <div className="p-4 rounded-none bg-white/[0.03] border border-white/10 backdrop-blur-md space-y-2.5">
                <div className="text-slate-500 text-[10px] uppercase tracking-widest font-bold">
                  Telemetry &bull; Biometric Shading
                </div>
                <div className="space-y-1.5 text-[11px]">
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-slate-400">Micro-Roughness:</span>
                    <span className="text-white font-bold">0.34 &bull; Porous</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-slate-400">IOR Index:</span>
                    <span className="text-white font-bold">1.41 (Hydrated)</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-slate-400">Specular Coat:</span>
                    <span className="text-white font-bold">Dual-Lobe</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-slate-400">Hair Simulation:</span>
                    <span className="text-red-400 font-bold">120K Splines</span>
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-none border border-white/10 bg-black/40 text-[11px] text-slate-400">
                <div className="text-white font-bold mb-0.5 flex items-center gap-1.5">
                  <Cpu size={14} className="text-red-400" />
                  Interactive AAA Pipeline
                </div>
                Direct comparison between raw polygonal geometry and sub-surface Octane multi-layered dermal shaders.
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            FEATURE 2: PORCELAIN MASK, LIVE 3D TURNTABLE (AS GIF), & BONE REVEAL
            ======================================================== */}
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-3 font-mono text-xs text-slate-400">
            <span className="uppercase tracking-wider font-semibold text-white">
              Anatomical Specimen Studies &bull; Shadows &amp; Bone
            </span>
            <span className="text-slate-500">HOLD MEDIA TRANSMEDIA LAB</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 items-start">
            {/* Specimen A: Porcelain Mask */}
            <div
              onClick={() => setActiveSpecimen(SPECIMEN_STUDIES[0])}
              className="group relative rounded-none overflow-hidden bg-[#131821] border-2 border-white/15 hover:border-purple-400/60 shadow-[0_25px_80px_rgba(0,0,0,0.45)] transition-all duration-500 cursor-pointer"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src="/portfolio/digital-humans/deathstranding_porcelien_5.jpg"
                  alt="Haunting Porcelain Mask with glazed white ceramic and human skin"
                  fill
                  unoptimized
                  className="object-cover scale-105 transition-transform duration-700 group-hover:scale-110"
                />

                {/* Atmospheric Dark Shadow Bleed from bottom */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                {/* Footer Sheet */}
                <div className="absolute bottom-5 left-5 right-5 p-5 rounded-none bg-black/85 border border-white/15 group-hover:border-purple-400/40 backdrop-blur-md flex items-center justify-between text-white transition-colors">
                  <div>
                    <h3 className="font-bold text-lg text-white group-hover:text-purple-200 transition-colors">
                      Porcelain Mask
                    </h3>
                    <p className="text-slate-400 text-xs font-mono mt-0.5">
                      Glazed Shell &bull; Organic Graft
                    </p>
                  </div>
                  <button
                    type="button"
                    aria-label="Inspect Porcelain Mask specimen"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveSpecimen(SPECIMEN_STUDIES[0]);
                    }}
                    className="p-2.5 rounded-none bg-white text-black font-bold group-hover:bg-purple-100 transition-colors cursor-pointer shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                  >
                    <ArrowUpRight size={16} weight="bold" />
                  </button>
                </div>
              </div>
            </div>

            {/* Specimen B: LIVE 3D ANATOMICAL TURNTABLE */}
            <div
              onClick={() => setActiveSpecimen(SPECIMEN_STUDIES[1])}
              className="group relative rounded-none overflow-hidden bg-[#131821] border-2 border-red-500/40 hover:border-red-500/80 shadow-[0_25px_80px_rgba(209,26,42,0.3)] transition-all duration-500 cursor-pointer"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-black">
                {/* Looping video behaving as a pristine 60fps turntable */}
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster="/portfolio/digital-humans/video_preview.jpg"
                  className="w-full h-full object-cover scale-105 transition-transform duration-700 group-hover:scale-110"
                >
                  <source
                    src="/portfolio/digital-humans/gemini_generated_video_86d9e23b.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>

                {/* Atmospheric Shadow Bleed */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                {/* Footer Sheet */}
                <div className="absolute bottom-5 left-5 right-5 p-5 rounded-none bg-black/85 border border-red-500/40 group-hover:border-red-500/70 backdrop-blur-md flex items-center justify-between text-white transition-colors">
                  <div>
                    <h3 className="font-bold text-lg text-white group-hover:text-red-300 transition-colors">
                      3D Mandible Turntable
                    </h3>
                    <p className="text-red-300 text-xs font-mono mt-0.5">
                      Live Dynamic Turn &bull; Exposed Bone Motion
                    </p>
                  </div>
                  <button
                    type="button"
                    aria-label="Inspect 3D Mandible Turntable specimen"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveSpecimen(SPECIMEN_STUDIES[1]);
                    }}
                    className="p-2.5 rounded-none bg-[#FF3333] hover:bg-red-500 text-white font-bold transition-colors cursor-pointer shadow-[0_0_15px_rgba(255,51,51,0.4)]"
                  >
                    <Sparkle size={16} weight="bold" />
                  </button>
                </div>
              </div>
            </div>

            {/* Specimen C: Bone Reveal emerging from shadows */}
            <div
              onClick={() => setActiveSpecimen(SPECIMEN_STUDIES[2])}
              className="group relative rounded-none overflow-hidden bg-[#131821] border-2 border-white/15 hover:border-purple-400/60 shadow-[0_25px_80px_rgba(0,0,0,0.45)] transition-all duration-500 cursor-pointer"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src="/portfolio/digital-humans/deathstranding_half_8.jpg"
                  alt="Anatomical Bone Reveal with exposed porcelain teeth and jawbone"
                  fill
                  unoptimized
                  className="object-cover scale-105 transition-transform duration-700 group-hover:scale-110"
                />

                {/* Atmospheric Shadow Bleed */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                {/* Footer Sheet */}
                <div className="absolute bottom-5 left-5 right-5 p-5 rounded-none bg-black/85 border border-white/15 group-hover:border-purple-400/40 backdrop-blur-md flex items-center justify-between text-white transition-colors">
                  <div>
                    <h3 className="font-bold text-lg text-white group-hover:text-purple-200 transition-colors">
                      Bone Anatomy Detail
                    </h3>
                    <p className="text-slate-400 text-xs font-mono mt-0.5">
                      Detached Mandible &bull; Porcelain Teeth
                    </p>
                  </div>
                  <button
                    type="button"
                    aria-label="Inspect Bone Anatomy Detail specimen"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveSpecimen(SPECIMEN_STUDIES[2]);
                    }}
                    className="p-2.5 rounded-none bg-white text-black font-bold group-hover:bg-purple-100 transition-colors cursor-pointer shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                  >
                    <ArrowUpRight size={16} weight="bold" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          CLICKABLE SPECIMEN MODAL INSPECTION (PILLAR 4 PARITY)
          ======================================================== */}
      <StudioModal
        isOpen={!!activeSpecimen}
        onClose={() => setActiveSpecimen(null)}
        borderColor="rgba(168, 85, 247, 0.4)"
        closeTestId="specimen-modal-close-btn"
      >
        {activeSpecimen && (
          <div className="-mx-6 sm:-mx-8 -mt-6 sm:-mt-8 flex flex-col">
            {/* Large Image or Video Header */}
            <div className="relative aspect-[16/10] sm:aspect-[21/10] max-h-[38vh] w-full overflow-hidden bg-black shrink-0">
              {activeSpecimen.isVideo && activeSpecimen.videoSrc ? (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster={activeSpecimen.image}
                  className="w-full h-full object-cover"
                >
                  <source src={activeSpecimen.videoSrc} type="video/mp4" />
                </video>
              ) : (
                <Image
                  src={activeSpecimen.image}
                  alt={activeSpecimen.title}
                  fill
                  unoptimized
                  className="object-cover"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#100b17] via-transparent to-black/50" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-none bg-purple-950/80 border border-purple-500/40 text-purple-300 font-mono text-xs mb-2">
                  {activeSpecimen.tag}
                </div>
                <h3 className="text-3xl sm:text-4xl font-black text-white">
                  {activeSpecimen.title}
                </h3>
                <p className="text-purple-200 text-sm font-mono mt-1">
                  {activeSpecimen.subtitle}
                </p>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <h4 className="text-xs uppercase tracking-widest font-mono text-purple-400 font-bold mb-2">
                  Specimen Narrative &amp; Clinical Analysis
                </h4>
                <p className="text-slate-200 text-base leading-relaxed">
                  {activeSpecimen.description}
                </p>
              </div>

              {/* Technical Specifications Matrix */}
              <div className="pt-4 border-t border-white/10 space-y-3 font-mono text-xs">
                <h4 className="text-xs uppercase tracking-widest text-slate-400 font-bold">
                  Technical Specifications
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-none bg-white/[0.04] border border-white/10">
                    <span className="text-slate-400 block mb-1">Anatomical Architecture:</span>
                    <span className="text-white font-bold">{activeSpecimen.specs.anatomy}</span>
                  </div>
                  <div className="p-3.5 rounded-none bg-white/[0.04] border border-white/10">
                    <span className="text-slate-400 block mb-1">Dermal &amp; Scatter Shading:</span>
                    <span className="text-white font-bold">{activeSpecimen.specs.shader}</span>
                  </div>
                  <div className="p-3.5 rounded-none bg-white/[0.04] border border-white/10">
                    <span className="text-slate-400 block mb-1">Geometry &amp; Mesh Resolution:</span>
                    <span className="text-white font-bold">{activeSpecimen.specs.subdivision}</span>
                  </div>
                  <div className="p-3.5 rounded-none bg-white/[0.04] border border-white/10">
                    <span className="text-slate-400 block mb-1">Kinematic Simulation:</span>
                    <span className="text-white font-bold">{activeSpecimen.specs.simulation}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  onClick={() => setActiveSpecimen(null)}
                  className="px-6 py-2.5 rounded-none bg-purple-600 hover:bg-purple-500 text-white font-bold font-mono text-xs transition-colors cursor-pointer"
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

