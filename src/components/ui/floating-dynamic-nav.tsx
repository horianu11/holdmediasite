'use client';

import React, { useState, useEffect } from 'react';
import { HMLogo } from './hm-logo';
import { ArrowUpRight, List, X, Sparkle } from '@phosphor-icons/react';

interface SectionInfo {
  id: string;
  number: string;
  label: string;
  accent: string;
}

const SECTIONS: SectionInfo[] = [
  { id: 'hero', number: '00', label: 'INDEX', accent: '#F5B800' },
  { id: 'cultural-disruption', number: '01', label: 'DISRUPTION', accent: '#FF3333' },
  { id: 'spatial-design', number: '02', label: 'SPATIAL', accent: '#0066FF' },
  { id: 'digital-humans', number: '03', label: 'HUMANS', accent: '#FF3333' },
  { id: 'cinematic-world', number: '04', label: 'WORLDS', accent: '#0066FF' },
  { id: 'automotive', number: '05', label: 'AUTOMOTIVE', accent: '#F5B800' },
  { id: 'ai-pipeline', number: '06', label: 'AI PIPELINE', accent: '#C2410C' },
];

export function FloatingDynamicNav() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [hasScrolled, setHasScrolled] = useState<boolean>(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(100, Math.max(0, (scrollY / docHeight) * 100)) : 0;
      setScrollProgress(progress);
      setHasScrolled(scrollY > 60);

      // Detect active section based on scroll offset
      const triggerOffset = window.innerHeight * 0.35;
      let current = 'hero';

      for (const section of SECTIONS) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= triggerOffset) {
            current = section.id;
          }
        }
      }

      // Check if near bottom CTA section
      const ctaEl = document.getElementById('cta-section');
      if (ctaEl) {
        const rect = ctaEl.getBoundingClientRect();
        if (rect.top <= triggerOffset) {
          current = 'cta-section';
        }
      }

      setActiveSection(current);
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const targetTop =
      id === 'hero'
        ? 0
        : (document.getElementById(id)?.getBoundingClientRect().top ?? 0) + window.scrollY - 70;

    const lenis = (window as unknown as { lenis?: { scrollTo: (target: number | HTMLElement) => void } }).lenis;
    if (lenis && typeof lenis.scrollTo === 'function') {
      lenis.scrollTo(targetTop);
    } else {
      window.scrollTo({ top: targetTop, behavior: 'smooth' });
    }
  };

  const currentSectionData =
    SECTIONS.find((s) => s.id === activeSection) ||
    (activeSection === 'cta-section'
      ? { id: 'cta-section', number: '06', label: 'INQUIRE', accent: '#0066FF' }
      : SECTIONS[0]);

  return (
    <nav
      aria-label="Studio Navigation"
      className="fixed top-4 sm:top-5 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl transition-all duration-300"
    >
      {/* Outer Dynamic Island Shell (Strictly Sharp 0px Border-Radius) */}
      <div className="relative rounded-none border border-white/20 bg-black/85 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.6)] text-white overflow-hidden transition-all duration-300">
        
        {/* Dynamic Top Scroll Progress Line */}
        <div
          className="absolute top-0 left-0 h-[2px] transition-all duration-150 ease-out"
          style={{
            width: `${scrollProgress}%`,
            backgroundColor: currentSectionData.accent,
            boxShadow: `0 0 10px ${currentSectionData.accent}`,
          }}
        />

        {/* Primary Navbar Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 h-13 sm:h-14 gap-3 sm:gap-6 font-mono text-xs">
          
          {/* 1. Left: Brand Monogram & Home Jump */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-2.5 hover:opacity-80 transition-opacity cursor-pointer shrink-0"
            aria-label="Hold Media Home"
          >
            <HMLogo size={20} color="#ffffff" />
            <span className="font-mono text-xs font-bold tracking-widest text-white hidden sm:inline">
              HOLD MEDIA
            </span>
          </button>

          {/* 2. Middle: Desktop Chapter Jump Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {SECTIONS.slice(1).map((section) => {
              const isActive = activeSection === section.id;
              return (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`relative px-2.5 py-1.5 rounded-none font-mono text-[11px] tracking-wider transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? 'text-white font-bold bg-white/10'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-none transition-colors duration-200 shrink-0"
                    style={{
                      backgroundColor: isActive ? section.accent : 'rgba(255,255,255,0.2)',
                    }}
                  />
                  <span>
                    {section.number} {section.label}
                  </span>
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-0 right-0 h-[2px]"
                      style={{ backgroundColor: section.accent }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* 3. Mobile Active Chapter Badge (Visible only on mobile) */}
          <div className="md:hidden flex items-center gap-2">
            <span
              className="w-2 h-2 rounded-none animate-pulse"
              style={{ backgroundColor: currentSectionData.accent }}
            />
            <span className="text-[11px] font-bold tracking-wider text-slate-200">
              {currentSectionData.number} {currentSectionData.label}
            </span>
          </div>

          {/* 4. Right: Quick Action & Inquire CTA */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            {/* Live Studio Status (Desktop) */}
            <div className="hidden lg:flex items-center gap-1.5 text-[10px] text-slate-400 border-r border-white/10 pr-3 font-mono">
              <span className="w-1.5 h-1.5 rounded-none bg-emerald-400 animate-pulse" />
              <span>STUDIO ONLINE</span>
            </div>

            {/* Inquire CTA Button */}
            <button
              onClick={() => scrollToSection('cta-section')}
              className="group inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-none bg-white text-black font-mono font-bold text-xs tracking-wider transition-all duration-200 hover:bg-slate-200 hover:scale-105 active:scale-95 cursor-pointer shadow-sm"
            >
              <span>INQUIRE</span>
              <ArrowUpRight
                size={13}
                weight="bold"
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </button>

            {/* Mobile Hamburger Toggle Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-nav-menu"
            >
              {isMobileMenuOpen ? <X size={18} weight="bold" /> : <List size={18} weight="bold" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Chapter Menu */}
        {isMobileMenuOpen && (
          <div
            id="mobile-nav-menu"
            className="md:hidden border-t border-white/15 bg-black/95 p-4 space-y-2 font-mono text-xs animate-in fade-in slide-in-from-top-2 duration-200"
          >
            <div className="text-[10px] uppercase tracking-widest text-slate-500 pb-2 border-b border-white/10 flex justify-between">
              <span>Studio Navigation Index</span>
              <span className="text-emerald-400">&bull; Live</span>
            </div>
            {SECTIONS.map((section) => {
              const isActive = activeSection === section.id;
              return (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-3 py-2.5 rounded-none flex items-center justify-between transition-colors ${
                    isActive
                      ? 'bg-white/15 text-white font-bold'
                      : 'text-slate-300 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className="w-2 h-2 rounded-none"
                      style={{
                        backgroundColor: isActive ? section.accent : 'rgba(255,255,255,0.2)',
                      }}
                    />
                    <span>
                      {section.number} // {section.label}
                    </span>
                  </div>
                  {isActive && (
                    <span
                      className="text-[10px] px-1.5 py-0.5 rounded-none font-bold"
                      style={{
                        backgroundColor: `${section.accent}25`,
                        color: section.accent,
                      }}
                    >
                      CURRENT
                    </span>
                  )}
                </button>
              );
            })}

            <div className="pt-2 border-t border-white/10">
              <button
                onClick={() => scrollToSection('cta-section')}
                className="w-full py-2.5 rounded-none bg-white text-black font-bold text-center tracking-wider hover:bg-slate-200 transition-colors"
              >
                START A PROJECT &rarr;
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
