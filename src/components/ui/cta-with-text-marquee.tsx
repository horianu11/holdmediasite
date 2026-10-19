"use client";

import { cn } from "@/lib/utils";
import { ReactNode, useEffect, useRef } from "react";

import { HMLogo } from "@/components/ui/hm-logo";

interface VerticalMarqueeProps {
  children: ReactNode;
  pauseOnHover?: boolean;
  reverse?: boolean;
  className?: string;
  speed?: number;
  onItemsRef?: (items: HTMLElement[]) => void;
}

function VerticalMarquee({
  children,
  pauseOnHover = false,
  reverse = false,
  className,
  speed = 30,
  onItemsRef,
}: VerticalMarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (onItemsRef && containerRef.current) {
      const items = Array.from(
        containerRef.current.querySelectorAll(".marquee-item")
      ) as HTMLElement[];
      onItemsRef(items);
    }
  }, [onItemsRef]);

  return (
    <div
      ref={containerRef}
      className={cn("group flex flex-col overflow-hidden", className)}
      style={
        {
          "--duration": `${speed}s`,
        } as React.CSSProperties
      }
    >
      <div
        className={cn(
          "flex shrink-0 flex-col animate-marquee-vertical",
          reverse && "[animation-direction:reverse]",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
      >
        {children}
      </div>
      <div
        className={cn(
          "flex shrink-0 flex-col animate-marquee-vertical",
          reverse && "[animation-direction:reverse]",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
        aria-hidden="true"
      >
        {children}
      </div>
    </div>
  );
}

const marqueeItems = [
  "Claude MCP Shader Synthesis",
  "AI-Native 3D Pipelines",
  "UE5.4 Nanite Virtual Worlds",
  "Automotive CAD & Chaos Physics",
  "Automated PBR Material Evals",
  "Transhuman Digital Avatars",
  "Procedural Houdini VEX Systems",
  "Octane Spectral Path-Tracing",
  "Spatial Computing Environments",
  "Real-Time Cinematic Rendering",
];

export default function CTAWithVerticalMarquee() {
  return (
    <div className="w-full min-h-0 bg-transparent text-[#f8fafc] flex items-center justify-center px-6 sm:px-10 md:px-16 lg:px-24 py-12 lg:py-16 overflow-hidden relative">
      {/* Ambient tech-focused glows matching previous project */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-900/25 rounded-none blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-900/20 rounded-none blur-3xl"></div>
      </div>

      <div className="w-full animate-fade-in-up">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
          {/* Left Content */}
          <div className="space-y-5 max-w-2xl w-full">
            {/* Claude Startups Application Badge */}
            <div className="inline-block px-3.5 py-1.5 border border-slate-700 rounded-none text-xs font-mono text-slate-300 uppercase tracking-widest bg-slate-900/60 backdrop-blur-md">
              Application: Claude Startups Program
            </div>

            <div className="flex items-center gap-3.5 animate-fade-in-up">
              <HMLogo size={28} color="#ffffff" />
              <span className="font-mono text-xs tracking-widest uppercase font-bold text-slate-300">
                Hold Media &bull; The AI-Native Studio
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.05] tracking-tight text-white animate-fade-in-up [animation-delay:200ms]">
              The AI-Native Studio.
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed animate-fade-in-up [animation-delay:300ms] max-w-xl">
              Hold Media is rebuilding the 3D pipeline from the ground up. By deeply integrating frontier models like Claude directly into our creative workflow alongside cutting-edge rendering tech, we accelerate conceptualization, procedural texturing, and narrative world-building.
            </p>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed animate-fade-in-up [animation-delay:400ms] max-w-xl">
              From hyper-realistic 3D spatial design and virtual production to automotive CGI and real-time world-building. Let&apos;s build your vision.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-up [animation-delay:600ms]">
              <a
                href="mailto:horia@holdmedia.studio?subject=Project%20Inquiry%20%E2%80%94%20Hold%20Media"
                className="group relative inline-flex items-center justify-center px-8 py-3.5 bg-white text-black rounded-none font-bold text-base tracking-wide overflow-hidden transition-all duration-300 hover:scale-105 hover:bg-slate-200 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] shadow-xl active:scale-95"
              >
                <span className="relative z-10">Contact us</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
              </a>
            </div>
          </div>

          {/* Right Marquee with hardware-accelerated CSS gradient mask */}
          <div
            className="relative h-[360px] sm:h-[420px] lg:h-[500px] w-full flex items-center justify-center lg:justify-end animate-fade-in-up [animation-delay:400ms]"
          >
            <div className="relative w-full h-full [mask-image:linear-gradient(to_bottom,transparent_0%,black_35%,black_65%,transparent_100%)]">
              <VerticalMarquee speed={22} className="h-full">
                {marqueeItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight py-3.5 sm:py-4.5 marquee-item text-white whitespace-nowrap"
                  >
                    {item}
                  </div>
                ))}
              </VerticalMarquee>
            </div>
          </div>
        </div>

        <div className="mt-10 sm:mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <span>HOLD MEDIA &bull; THE AI-NATIVE STUDIO</span>
          <a
            href="https://holdmedia.studio"
            target="_blank"
            rel="noreferrer"
            className="text-xs tracking-wider uppercase text-slate-400 hover:text-white transition-colors"
          >
            holdmedia.studio
          </a>
        </div>
      </div>
    </div>
  );
}
