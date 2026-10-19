'use client';

import React from 'react';
import Image from 'next/image';
import { FilmStrip } from '@phosphor-icons/react';

interface ReelItem {
  id: string;
  src: string;
  pillar: string;
  title: string;
  tech: string;
}

const REEL_ITEMS: ReelItem[] = [
  {
    id: 'cd-1',
    src: '/portfolio/cultural-disruption/pweds_1.jpg',
    pillar: 'PILLAR 01 // CULTURAL DISRUPTION',
    title: 'Submerged Classical Polymer Study',
    tech: 'Houdini VEX • Octane Spectral',
  },
  {
    id: 'cd-2',
    src: '/portfolio/cultural-disruption/pewds_greece_1.jpg',
    pillar: 'PILLAR 01 // CULTURAL DISRUPTION',
    title: 'Sliced Hellenistic Bust',
    tech: 'Procedural Noise Shears',
  },
  {
    id: 'cd-3',
    src: '/portfolio/cultural-disruption/pewds_egipt_1.jpg',
    pillar: 'PILLAR 01 // CULTURAL DISRUPTION',
    title: 'Glitched Nefertiti Voxel',
    tech: 'Dynastic Voxel Dispersion',
  },
  {
    id: 'sd-1',
    src: '/portfolio/spatial-design/mob_greece_1.jpg',
    pillar: 'PILLAR 02 // SPATIAL ARCHITECTURE',
    title: 'The Periwinkle Stairwell',
    tech: 'Octane Sunlight Radiosity',
  },
  {
    id: 'sd-2',
    src: '/portfolio/spatial-design/mob_greece_2.jpg',
    pillar: 'PILLAR 02 // SPATIAL ARCHITECTURE',
    title: 'The Sunlit Courtyard',
    tech: '135mm Prime Telephoto',
  },
  {
    id: 'auto-1',
    src: '/portfolio/automotive/amg-c63-street-integration.jpg',
    pillar: 'PILLAR 05 // AUTOMOTIVE CGI',
    title: 'Mercedes-AMG × Rotiform',
    tech: 'Dual-Lobe Clearcoat (IOR 1.52)',
  },
  {
    id: 'auto-2',
    src: '/portfolio/automotive/rotiform-studio-perspective.jpg',
    pillar: 'PILLAR 05 // AUTOMOTIVE CGI',
    title: 'Rotiform DTM Monoblock',
    tech: '6061-T6 Forged Aluminum',
  },
  {
    id: 'dh-1',
    src: '/portfolio/digital-humans/deathstranding_1.jpg',
    pillar: 'PILLAR 03 // DIGITAL HUMANS',
    title: 'Subsurface Dermal Shader',
    tech: 'Vascular SSS (IOR 1.41)',
  },
  {
    id: 'dh-2',
    src: '/portfolio/digital-humans/deathstranding_white_4.jpg',
    pillar: 'PILLAR 03 // DIGITAL HUMANS',
    title: 'Level-4 Clay Topology',
    tech: 'Sub-D Quad Flow Analysis',
  },
  {
    id: 'dh-3',
    src: '/portfolio/digital-humans/deathstranding_porcelien_5.jpg',
    pillar: 'PILLAR 03 // DIGITAL HUMANS',
    title: 'Porcelain Mask Specimen',
    tech: 'Dual-Phase Micro-Roughness',
  },
  {
    id: 'dh-4',
    src: '/portfolio/digital-humans/deathstranding_half_8.jpg',
    pillar: 'PILLAR 03 // DIGITAL HUMANS',
    title: 'Mesh & Flesh Anatomical Split',
    tech: '98 FACS Blendshape Rig',
  },
  {
    id: 'cw-1',
    src: '/portfolio/cinematic-world/cernobyl_inside_3.jpg',
    pillar: 'PILLAR 04 // CINEMATIC WORLDS',
    title: 'UE5.4 Cavern Anomaly',
    tech: '18.4M Nanite Micro-Tris & Lumen',
  },
];

interface ReelCardProps {
  item: ReelItem;
  index: number;
  trackKey: string;
}

function ReelCard({ item, index, trackKey }: ReelCardProps) {
  return (
    <div
      key={`${trackKey}-${item.id}`}
      className="relative w-[280px] sm:w-[340px] md:w-[380px] aspect-[16/9] shrink-0 rounded-none overflow-hidden bg-[#0C0B0A] border border-black/30 shadow-lg hover:shadow-2xl hover:border-black transition-all duration-300 group/card cursor-pointer select-none"
    >
      <Image
        src={item.src}
        alt={item.title}
        fill
        sizes="(max-width: 640px) 280px, (max-width: 768px) 340px, 380px"
        className="object-cover transition-transform duration-500 group-hover/card:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/30 pointer-events-none" />

      {/* Top Pillar Badge */}
      <div className="absolute top-2.5 left-2.5 z-10">
        <span className="px-2 py-0.5 rounded-none bg-black/80 backdrop-blur-sm border border-white/20 text-[#F5B800] font-mono text-[9px] font-bold tracking-wider">
          {item.pillar}
        </span>
      </div>

      {/* Top-Right Index */}
      <div className="absolute top-2.5 right-2.5 z-10 font-mono text-[9px] text-white/70">
        [{String(index + 1).padStart(2, '0')}/12]
      </div>

      {/* Bottom Card Title Bar */}
      <div className="absolute bottom-2.5 left-2.5 right-2.5 z-10 space-y-0.5">
        <div className="text-xs sm:text-sm font-bold text-white group-hover/card:text-[#F5B800] transition-colors truncate">
          {item.title}
        </div>
        <p className="text-[10px] text-slate-300 font-mono truncate">
          {item.tech}
        </p>
      </div>
    </div>
  );
}

export function SpatialReelSection() {
  return (
    <section
      id="spatial-reel"
      data-color="#F5B800"
      data-text="#000000"
      className="panel relative w-full overflow-hidden bg-[#F5B800] z-20 py-6 sm:py-8 border-y border-black/10"
    >
      {/* Editorial Header Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 mb-3.5 flex items-center justify-between text-black font-mono text-xs">
        <div className="flex items-center gap-2">
          <FilmStrip size={14} weight="bold" className="text-black/80" />
          <span className="font-bold tracking-wider uppercase text-[11px] sm:text-xs">
            Studio Capabilities Reel // 12 Live Render Artifacts
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-3 text-[10px] text-black/75">
          <span className="flex items-center gap-1.5 font-bold">
            <span className="w-1.5 h-1.5 bg-black rounded-full animate-ping" />
            <span>OCTANE &amp; UE5.4 PIPELINE</span>
          </span>
          <span>•</span>
          <span className="uppercase">Hover to Pause &amp; Inspect</span>
        </div>
      </div>

      {/* Continuous Marquee Container with Horizontal Edge Fades */}
      <div className="group relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_3%,black_97%,transparent_100%)] flex">
        {/* Track 1 */}
        <div
          className="flex shrink-0 items-center gap-5 sm:gap-6 animate-marquee-horizontal group-hover:[animation-play-state:paused] pr-5 sm:pr-6"
          style={{ '--duration': '55s' } as React.CSSProperties}
        >
          {REEL_ITEMS.map((item, index) => (
            <ReelCard key={`track-1-${item.id}`} item={item} index={index} trackKey="track-1" />
          ))}
        </div>

        {/* Track 2 (Immediate Continuous Duplicate) */}
        <div
          className="flex shrink-0 items-center gap-5 sm:gap-6 animate-marquee-horizontal group-hover:[animation-play-state:paused] pr-5 sm:pr-6"
          style={{ '--duration': '55s' } as React.CSSProperties}
          aria-hidden="true"
        >
          {REEL_ITEMS.map((item, index) => (
            <ReelCard key={`track-2-${item.id}`} item={item} index={index} trackKey="track-2" />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SpatialReelSection;
