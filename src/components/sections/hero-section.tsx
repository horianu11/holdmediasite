'use client';

import { motion } from 'motion/react';
import { HMLogo } from '@/components/ui/hm-logo';
import { ArrowDown, ArrowUpRight } from '@phosphor-icons/react';

export function HeroSection() {
  return (
    <section
      id="hero"
      data-color="#F5B800"
      data-text="#000000"
      className="panel relative w-full min-h-screen overflow-hidden flex flex-col justify-between bg-[#F5B800] text-black px-6 md:px-16 lg:px-24 py-8 select-none"
    >
      {/* Architectural Grid Underlay (Subtle geometric tone-on-tone) */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:48px_48px]" />

      {/* Dead Center Signature Monogram & Typography */}
      <div className="relative z-10 flex flex-col items-center justify-center my-auto text-center max-w-4xl mx-auto py-4 sm:py-6">
        {/* Dead Center Signature "HM" Monogram */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-5 flex items-center justify-center"
        >
          <HMLogo size={96} color="#000000" />
        </motion.div>

        {/* holdmedia.studio title */}
        <motion.div
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-5"
        >
          <div className="text-4xl sm:text-6xl font-black tracking-tight leading-none text-black">
            holdmedia.studio
          </div>
        </motion.div>

        {/* Startup Kicker Badge, Headline & Manifesto */}
        <motion.div
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="space-y-3 max-w-2xl flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 rounded-none border border-black/20 bg-black/5 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-black">
            AI-NATIVE SPATIAL COMPUTING // BUILT ON CLAUDE API & MCP
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-black leading-snug">
            Expressing the Future through <br className="hidden sm:inline" />
            3D Design & Photography.
          </h1>

          <p className="text-base sm:text-lg text-black/85 font-medium leading-relaxed">
            An AI-native spatial computing studio and procedural 3D platform. We integrate frontier Claude reasoning with Unreal Engine 5.4 and Octane to automate shader synthesis, transhuman character pipelines, and large-scale virtual worlds.
          </p>
        </motion.div>

        {/* Call to Actions: Explore Our Capabilities | Explore Claude 3D Pipeline */}
        <motion.div
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#spatial-reel"
            className="group inline-flex items-center justify-center gap-3 h-14 w-full sm:w-[270px] rounded-none border-2 border-black bg-black text-[#F5B800] font-bold text-sm tracking-wide shadow-xl transition-all duration-300 hover:bg-neutral-900 hover:scale-105 hover:shadow-2xl active:scale-95"
          >
            <span>Explore Our Capabilities</span>
            <ArrowDown
              size={16}
              weight="bold"
              className="transition-transform duration-300 group-hover:translate-y-1"
            />
          </a>

          <a
            href="#ai-pipeline"
            onClick={(e) => {
              e.preventDefault();
              const lenis = (window as unknown as { lenis?: { scrollTo: (target: string, opts?: { offset?: number; duration?: number }) => void } }).lenis;
              if (lenis && typeof lenis.scrollTo === 'function') {
                lenis.scrollTo('#ai-pipeline', { offset: -40, duration: 1.2 });
              } else {
                const el = document.getElementById('ai-pipeline');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="group inline-flex items-center justify-center gap-3 h-14 w-full sm:w-[270px] rounded-none border-2 border-black bg-transparent text-black font-bold text-sm tracking-wide shadow-xl transition-all duration-300 hover:bg-black/10 hover:scale-105 hover:shadow-2xl active:scale-95 cursor-pointer"
          >
            <span>Explore Claude 3D Pipeline</span>
            <ArrowDown
              size={16}
              weight="bold"
              className="transition-transform duration-300 group-hover:translate-y-1"
            />
          </a>
        </motion.div>

        {/* Subtle Behance Archive Telemetry Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-4 flex items-center justify-center gap-2 font-mono text-xs text-black/60"
        >
          <span>OFFICIAL ARCHIVE:</span>
          <a
            href="https://www.behance.net"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-bold text-black underline underline-offset-2 hover:text-black/80 transition-colors"
          >
            <span>behance.net/holdmedia</span>
            <ArrowUpRight size={12} weight="bold" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
