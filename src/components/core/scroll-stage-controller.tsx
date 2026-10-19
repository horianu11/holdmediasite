'use client';

import { useEffect, useState } from 'react';

export type StageId = 'hero' | 'cultural' | 'spatial' | 'digital-humans' | 'cinematic' | 'ai-pipeline';

interface StageConfig {
  id: StageId;
  bgClass: string;
  accent: string;
  theme: 'light' | 'dark';
}

const STAGES: StageConfig[] = [
  { id: 'hero', bgClass: 'bg-[#F5B800]', accent: '#000000', theme: 'light' },
  { id: 'cultural', bgClass: 'bg-[#050505]', accent: '#E51937', theme: 'dark' },
  { id: 'spatial', bgClass: 'bg-[#F2EFEB]', accent: '#1A1816', theme: 'light' },
  { id: 'digital-humans', bgClass: 'bg-[#0A0D12]', accent: '#B8C0CC', theme: 'dark' },
  { id: 'cinematic', bgClass: 'bg-[#0B0D0E]', accent: '#62727B', theme: 'dark' },
  { id: 'ai-pipeline', bgClass: 'bg-[#010102]', accent: '#F5B800', theme: 'dark' },
];

export function ScrollStageController() {
  const [activeStage, setActiveStage] = useState<StageId>('hero');

  useEffect(() => {
    const handleScroll = () => {
      const heroEl = document.getElementById('hero');
      const culturalEl = document.getElementById('cultural-disruption');

      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;

      if (culturalEl) {
        const culturalTop = culturalEl.getBoundingClientRect().top;
        // When Cultural Disruption section crosses mid-screen, switch stage!
        if (culturalTop < viewportHeight * 0.55) {
          setActiveStage('cultural');
          return;
        }
      }

      setActiveStage('hero');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none -z-50 transition-colors duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
    />
  );
}
