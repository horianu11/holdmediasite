'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { StudioModal } from '@/components/ui/studio-modal';
import {
  Car,
  ArrowsLeftRight,
  ArrowUpRight,
  Play,
  Pause,
  SpeakerHigh,
  SpeakerSlash,
  Cpu,
  VideoCamera,
  Gauge,
  Sparkle,
  Lightning,
} from '@phosphor-icons/react';

interface AutomotiveStudy {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  image: string;
  badge: string;
  description: string;
  specs: {
    hardware: string;
    material: string;
    optics: string;
    pipeline: string;
  };
}

const AUTOMOTIVE_STUDIES: AutomotiveStudy[] = [
  {
    id: 'rotiform-ortho',
    tag: 'PILLAR 05 // ORTHOGRAPHIC BLUEPRINT',
    title: 'Rotiform DTM Monoblock Ortho',
    subtitle: 'Front Orthographic Profile • Zero Distortion 135mm Studio Telephoto',
    image: '/portfolio/automotive/rotiform-studio-ortho.jpg',
    badge: 'ORTHOGRAPHIC PROFILE // ZERO DISTORTION 135MM LENS',
    description:
      'True orthographic raytraced projection of the Rotiform DTM monoblock wheel. Engineered from 1:1 OEM CAD data with zero optical barrel distortion, capturing micro-machined spoke bevels, centerlock torque pin receptors, and multi-piece bolt tolerances.',
    specs: {
      hardware: 'Rotiform DTM 20×10.5J (ET28 Centerlock Configuration)',
      material: 'Forged 6061-T6 Aerospace Aluminum • Anodized Satin Bronze Finish',
      optics: '0.00% Orthographic Raytraced Sensor Projection (135mm Prime)',
      pipeline: 'Octane Spectral Path Tracer (v2024.1) • 16K Studio HDRI Rig',
    },
  },
  {
    id: 'amg-fitment',
    tag: 'PILLAR 05 // STREET ENVIRONMENT INTEGRATION',
    title: 'Mercedes-AMG C63 Street Integration',
    subtitle: 'Rear-Quarter Fitment • Metallic Graphite Clearcoat & Brembo Caliper',
    image: '/portfolio/automotive/amg-c63-street-integration.jpg',
    badge: 'HDRI OVERCAST DIFFUSION // DUAL-LOBE CAR PAINT CLEARCOAT (IOR 1.52)',
    description:
      'Full vehicle environmental staging in a photorealistic overcast urban setting. Demonstrates dual-lobe clearcoat reflection with metallic flake micro-faceting, physically accurate rubber vulcanization on Pirelli P Zero tires, and Brembo 6-piston racing caliper fitment.',
    specs: {
      hardware: 'Mercedes-AMG C63 S Coupe (W205) • Staggered Rotiform Wheel Fitment',
      material: 'Dual-Lobe Metallic Graphite Clearcoat (45µm Specular Flakes)',
      optics: 'Brembo 6-Piston Calipers in Racing Yellow • Carbon Ceramic Discs',
      pipeline: '32-Bit Floating Point Overcast HDRI • Unreal Engine 5.4 Nanite Staging',
    },
  },
];

export function AutomotiveSection() {
  const [sliderPosition, setSliderPosition] = useState<number>(50); // percentage 0-100
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [activeStudy, setActiveStudy] = useState<AutomotiveStudy | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);

  const sliderRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Slider pointer dragging
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

  const toggleVideoPlayback = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleAudio = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  // Viewport IntersectionObserver: Only stream and play when near/inside viewport
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video
              .play()
              .then(() => setIsPlaying(true))
              .catch(() => {});
          } else {
            video.pause();
            setIsPlaying(false);
          }
        });
      },
      {
        rootMargin: '200px 0px',
        threshold: 0.15,
      }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      id="automotive"
      data-color="#0c1017"
      data-text="#f8fafc"
      className="panel relative w-full min-h-screen bg-[#0c1017] text-[#f8fafc] py-14 md:py-20 px-6 md:px-16 lg:px-24 overflow-hidden z-20"
    >
      {/* Ambient Lighting & Racing Accents */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden select-none">
        {/* Brembo Racing Gold Radial Glow */}
        <div className="absolute top-1/4 -left-32 w-[650px] h-[650px] bg-[radial-gradient(ellipse_at_center,rgba(245,184,0,0.07)_0%,transparent_70%)] blur-[100px]" />
        {/* Taillight Laser Red Radial Glow */}
        <div className="absolute bottom-1/3 -right-32 w-[650px] h-[650px] bg-[radial-gradient(ellipse_at_center,rgba(229,25,55,0.08)_0%,transparent_70%)] blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto space-y-16 lg:space-y-24">
        {/* ========================================================
            SECTION HEADER
            ======================================================== */}
        <div className="space-y-4 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-none bg-white/[0.04] border border-white/10 text-[#F5B800] font-mono text-xs font-semibold tracking-wider uppercase">
            <Car size={14} weight="bold" />
            <span>PILLAR 05 // AUTOMOTIVE CGI & KINETIC COMMERCIALS</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight text-white font-sans uppercase">
            Precision in Motion.
          </h2>
          <p className="text-slate-300 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-3xl">
            From sub-millimeter CAD topology to high-velocity cinematic sequences. We engineer
            photorealistic automotive assets, physically accurate clear-coat and vulcanized rubber
            shaders, and adrenaline-fueled CGI commercial films built for global automotive and
            streetwear campaigns.
          </p>
        </div>

        {/* ========================================================
            PART A: INTERACTIVE WHEEL TOPOLOGY SLIDER + AMG BENTO
            ======================================================== */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-3 font-mono text-xs text-slate-400">
            <span className="uppercase tracking-wider font-semibold text-white flex items-center gap-2">
              <Sparkle size={15} weight="bold" className="text-[#F5B800]" />
              <span>Asset Engineering // Sub-D Quad Topology vs Octane Spectral Studio Rig</span>
            </span>
            <span className="text-[#F5B800]">CAD RECTIFICATION // 1:1 ACCURACY</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* LEFT COLUMN: INTERACTIVE WHEEL TOPOLOGY SLIDER (lg:col-span-7) */}
            <div className="lg:col-span-7 flex flex-col space-y-3">
              <div
                ref={sliderRef}
                role="slider"
                aria-label="Rotiform DTM CAD Wireframe vs Octane Studio Shader Comparison Slider"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={Math.round(sliderPosition)}
                tabIndex={0}
                onKeyDown={handleKeyDown}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerCancel={handlePointerUp}
                className="relative aspect-[16/9] w-full overflow-hidden bg-black border-2 border-white/15 rounded-none select-none cursor-ew-resize group focus:outline-none focus:ring-2 focus:ring-[#F5B800] shadow-2xl"
              >
                {/* Layer 02: Base Layer - Octane Photorealistic Studio Render */}
                <div className="absolute inset-0">
                  <Image
                    src="/portfolio/automotive/rotiform-studio-perspective.jpg"
                    alt="Rotiform DTM Monoblock Wheel Octane Spectral Studio Render"
                    fill
                    priority
                    unoptimized
                    className="object-cover pointer-events-none"
                  />
                  <div className="absolute top-4 right-4 z-10 px-2.5 py-1 rounded-none bg-black/80 backdrop-blur-md border border-white/20 font-mono text-[10px] text-white font-bold">
                    LAYER 02 // OCTANE SPECTRAL RENDER
                  </div>
                </div>

                {/* Layer 01: Clipped Foreground Layer - Sub-D Wireframe CAD Topology */}
                <div
                  style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                  className="absolute inset-0 z-10"
                >
                  <Image
                    src="/portfolio/automotive/rotiform-wireframe-perspective.jpg"
                    alt="Rotiform DTM Monoblock Wheel Sub-D Wireframe Quad CAD Topology"
                    fill
                    priority
                    unoptimized
                    className="object-cover pointer-events-none"
                  />
                  <div className="absolute top-4 left-4 z-10 px-2.5 py-1 rounded-none bg-[#F5B800]/90 backdrop-blur-md border border-black font-mono text-[10px] text-black font-bold">
                    LAYER 01 // SUB-D QUAD CAD TOPOLOGY
                  </div>
                </div>

                {/* Vertical Divider Scrub Handle */}
                <div
                  style={{ left: `${sliderPosition}%` }}
                  className="absolute top-0 bottom-0 w-[2px] bg-[#F5B800] z-20 pointer-events-none shadow-[0_0_12px_rgba(245,184,0,0.8)]"
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-none bg-[#F5B800] text-black border-2 border-black font-mono font-bold flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                    <ArrowsLeftRight size={16} weight="bold" />
                  </div>
                </div>

                {/* Interactive Drag Hint */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 px-3 py-1 rounded-none bg-black/80 backdrop-blur-sm border border-white/10 font-mono text-[10px] text-slate-300 pointer-events-none">
                  <span>DRAG SLIDER OR USE ARROW KEYS TO INSPECT WIREFRAME</span>
                </div>
              </div>

              {/* Bottom Telemetry Bar */}
              <div className="p-3.5 rounded-none bg-[#111722] border border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-2 font-mono text-[11px] text-slate-300">
                <div className="truncate">
                  <span className="text-slate-400 block text-[10px] uppercase">Wheel Specification</span>
                  <span className="text-white font-bold">ROTIFORM DTM 20×10.5J</span>
                </div>
                <div className="truncate">
                  <span className="text-slate-400 block text-[10px] uppercase">Tire Physics</span>
                  <span className="text-[#F5B800] font-bold">PIRELLI P ZERO // MICRO-BUMP</span>
                </div>
                <div className="truncate">
                  <span className="text-slate-400 block text-[10px] uppercase">Claude MCP Pipeline</span>
                  <span className="text-white font-bold">TREAD & ALLOY SYNTHESIS</span>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: DUAL STACKED STUDY CARDS (lg:col-span-5) */}
            <div className="lg:col-span-5 flex flex-col space-y-4">
              {AUTOMOTIVE_STUDIES.map((study) => (
                <div
                  key={study.id}
                  onClick={() => setActiveStudy(study)}
                  className="group relative rounded-none overflow-hidden bg-[#111722] border border-white/12 hover:border-[#F5B800]/60 shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-black">
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      unoptimized
                      className="object-cover scale-100 transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

                    {/* Telemetry Badge Tag */}
                    <div className="absolute top-3 left-3 z-10">
                      <span className="px-2 py-0.5 rounded-none bg-black/80 backdrop-blur-md border border-white/20 text-[#F5B800] font-mono text-[9px] font-bold">
                        {study.badge}
                      </span>
                    </div>

                    {/* Bottom Card Title Bar */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white z-10">
                      <div className="max-w-[80%] space-y-0.5">
                        <h3 className="font-bold text-sm sm:text-base text-white group-hover:text-[#F5B800] transition-colors truncate">
                          {study.title}
                        </h3>
                        <p className="text-slate-400 text-[11px] font-mono truncate">
                          {study.subtitle}
                        </p>
                      </div>
                      <button
                        type="button"
                        aria-label={`Inspect ${study.title}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveStudy(study);
                        }}
                        className="p-2 rounded-none bg-[#F5B800] hover:bg-[#E0A800] text-black font-bold transition-colors cursor-pointer shadow-md shrink-0"
                      >
                        <ArrowUpRight size={15} weight="bold" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ========================================================
            PART B: "MIDNIGHT HIGHWAY INTERCEPT" 9:16 COMMERCIAL REEL
            ======================================================== */}
        <div className="space-y-6 pt-6 border-t border-white/10">
          <div className="flex items-center justify-between border-b border-white/10 pb-3 font-mono text-xs text-slate-400">
            <span className="uppercase tracking-wider font-semibold text-white flex items-center gap-2">
              <VideoCamera size={15} weight="bold" className="text-[#E51937]" />
              <span>Commercial Film Direction // High-Velocity Virtual Production</span>
            </span>
            <span className="text-[#E51937]">WEAREBRÜG CAMPAIGN // 9:16 VERTICAL</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* LEFT SIDE: 9:16 VERTICAL COMMERCIAL REEL (lg:col-span-5) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative aspect-[9/16] w-full max-w-[360px] max-h-[640px] rounded-none overflow-hidden bg-black border-2 border-white/20 shadow-2xl group">
                <video
                  ref={videoRef}
                  src="/portfolio/automotive/highway-intercept-reel.mp4"
                  poster="/portfolio/automotive/amg-c63-street-integration.jpg"
                  preload="metadata"
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />

                {/* Cinematic Vignette */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />

                {/* Top Telemetry Header */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-white font-mono text-[10px] z-20 pointer-events-none">
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-none bg-red-950/80 border border-red-500/40 text-red-400">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <span>REC 60FPS // 9:16 REEL</span>
                  </div>
                  <span className="text-slate-400">PRORES 422HQ</span>
                </div>

                {/* Bottom Interactive Controls */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between z-20">
                  <div className="font-mono text-[11px] text-white">
                    <span className="text-[#F5B800] font-bold block text-[10px]">MIDNIGHT INTERCEPT</span>
                    <span className="text-slate-300">Twin BMW M-Series Pursuit</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={toggleVideoPlayback}
                      aria-label={isPlaying ? 'Pause commercial reel' : 'Play commercial reel'}
                      className="p-2 rounded-none bg-black/80 hover:bg-black text-white border border-white/20 transition-colors cursor-pointer"
                    >
                      {isPlaying ? <Pause size={14} weight="bold" /> : <Play size={14} weight="bold" />}
                    </button>
                    <button
                      type="button"
                      onClick={toggleAudio}
                      aria-label={isMuted ? 'Unmute video audio' : 'Mute video audio'}
                      className="p-2 rounded-none bg-black/80 hover:bg-black text-white border border-white/20 transition-colors cursor-pointer"
                    >
                      {isMuted ? <SpeakerSlash size={14} weight="bold" /> : <SpeakerHigh size={14} weight="bold" />}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: NARRATIVE BREAKDOWN & 4-PILLAR TELEMETRY MATRIX (lg:col-span-7) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-none bg-red-950/60 border border-red-500/30 text-red-400 font-mono text-xs">
                  <span>CASE STUDY // MIDNIGHT HIGHWAY INTERCEPT (WEAREBRÜG CAMPAIGN)</span>
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight font-sans">
                  High-Velocity Commercial Direction & CGI Cinematography.
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Hold Media directed, staged, and rendered a high-velocity CGI nighttime highway
                  heist sequence for the WEAREBRÜG apparel campaign. Featuring twin BMW M-series
                  coupes in an aggressive tunnel pursuit, multi-camera FPV cockpit telemetry,
                  simulated DJI Inspire 3 aerial tracking passes, and dynamic rigid-body cargo
                  dispersal colliding with wet asphalt in Unreal Engine 5.4.
                </p>
              </div>

              {/* 4-Pillar Technical Telemetry Matrix */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2 font-mono text-xs">
                <div className="p-3.5 rounded-none bg-[#111722] border border-white/10 space-y-1">
                  <div className="flex items-center gap-1.5 text-[#F5B800] font-bold text-[11px]">
                    <Gauge size={14} weight="bold" />
                    <span>01 // VEHICLE RIGGING</span>
                  </div>
                  <p className="text-slate-300 text-[11px] leading-snug">
                    Chaos Vehicle Physics & 4-Wheel Ackerman Steering Telemetry with real-time suspension compression.
                  </p>
                </div>

                <div className="p-3.5 rounded-none bg-[#111722] border border-white/10 space-y-1">
                  <div className="flex items-center gap-1.5 text-[#0066FF] font-bold text-[11px]">
                    <VideoCamera size={14} weight="bold" />
                    <span>02 // OPTICS & MOTION</span>
                  </div>
                  <p className="text-slate-300 text-[11px] leading-snug">
                    Simulated DJI Inspire 3 aerial pursuit tracking + cockpit GoPro micro-shake dynamics.
                  </p>
                </div>

                <div className="p-3.5 rounded-none bg-[#111722] border border-white/10 space-y-1">
                  <div className="flex items-center gap-1.5 text-[#E51937] font-bold text-[11px]">
                    <Lightning size={14} weight="bold" />
                    <span>03 // VOLUMETRIC LIGHTING</span>
                  </div>
                  <p className="text-slate-300 text-[11px] leading-snug">
                    Wet asphalt anisotropic reflections & sodium vapor tunnel tube Global Illumination via Lumen.
                  </p>
                </div>

                <div className="p-3.5 rounded-none bg-[#111722] border border-white/10 space-y-1">
                  <div className="flex items-center gap-1.5 text-[#D97706] font-bold text-[11px]">
                    <Cpu size={14} weight="bold" />
                    <span>04 // CLAUDE PIPELINE</span>
                  </div>
                  <p className="text-slate-300 text-[11px] leading-snug">
                    Automated storyboard-to-sequencer camera cut sequencing & Havok rigid-body physics scripting.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          ACCESSIBLE TECHNICAL INSPECTION MODAL (STUDIOMODAL)
          ======================================================== */}
      <StudioModal
        isOpen={!!activeStudy}
        onClose={() => setActiveStudy(null)}
        borderColor="rgba(245, 184, 0, 0.4)"
        closeTestId="automotive-modal-close-btn"
        overflowClassName="overflow-hidden"
      >
        {activeStudy && (
          <div className="-mx-6 sm:-mx-8 -mt-6 sm:-mt-8 flex flex-col">
            {/* Header Image */}
            <div className="relative aspect-[16/9] sm:aspect-[21/9] max-h-[26vh] sm:max-h-[30vh] w-full overflow-hidden bg-black shrink-0">
              <Image
                src={activeStudy.image}
                alt={activeStudy.title}
                fill
                unoptimized
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c1017] via-transparent to-black/60" />
              <div className="absolute bottom-4 left-5 right-5 sm:bottom-5 sm:left-6 sm:right-6">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-none bg-black/80 border border-[#F5B800]/50 text-[#F5B800] font-mono text-[10px] sm:text-xs mb-1.5">
                  {activeStudy.tag}
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  {activeStudy.title}
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm font-mono mt-0.5">
                  {activeStudy.subtitle}
                </p>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-4 sm:p-6 space-y-4">
              <div>
                <h4 className="text-[10px] sm:text-xs uppercase tracking-widest font-mono text-[#F5B800] font-bold mb-1.5">
                  Engineering & Surface Narrative
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
                    <span className="text-slate-400 block mb-0.5 text-[10px]">Chassis / Hardware:</span>
                    <span className="text-white font-bold truncate block">{activeStudy.specs.hardware}</span>
                  </div>
                  <div className="p-2 sm:p-2.5 rounded-none bg-white/[0.04] border border-white/10">
                    <span className="text-slate-400 block mb-0.5 text-[10px]">Clearcoat & Material:</span>
                    <span className="text-white font-bold truncate block">{activeStudy.specs.material}</span>
                  </div>
                  <div className="p-2 sm:p-2.5 rounded-none bg-white/[0.04] border border-white/10">
                    <span className="text-slate-400 block mb-0.5 text-[10px]">Optical Sensor Specs:</span>
                    <span className="text-white font-bold truncate block">{activeStudy.specs.optics}</span>
                  </div>
                  <div className="p-2 sm:p-2.5 rounded-none bg-white/[0.04] border border-white/10">
                    <span className="text-slate-400 block mb-0.5 text-[10px]">Staging & Raytracing:</span>
                    <span className="text-white font-bold truncate block">{activeStudy.specs.pipeline}</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setActiveStudy(null)}
                  className="px-5 py-2 rounded-none bg-[#F5B800] hover:bg-[#E0A800] text-black font-bold font-mono text-xs transition-colors cursor-pointer"
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
