'use client';

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

interface PanelConfig {
  id: string;
  color: string;
  text: string;
}

// Master color map matching the previous project specification:
// 1. Hero: Studio Gold (#F5B800), text #000000
// 2. Spatial Reel: Studio Gold (#F5B800), text #000000
// 3. Cultural Disruption: Deep Crimson-Black Void (#0a0000), text #ffffff
// 4. Spatial Design: Serene Liminal Slate/Concrete (#e2e8f0), text #0f172a
// 5. Digital Humans: Deep Transhumanist Violet (#1e1026), text #e9d5ff
// 6. Cinematic World-Building: Moody Industrial Zinc (#0a0a0a), text #d4d4d8
// 7. The AI-Native Studio / CTA: Midnight Computational Slate (#020617), text #f8fafc
const DEFAULT_PANELS: PanelConfig[] = [
  { id: 'hero', color: '#F5B800', text: '#000000' },
  { id: 'spatial-reel', color: '#F5B800', text: '#000000' },
  { id: 'cultural-disruption', color: '#0a0000', text: '#ffffff' },
  { id: 'spatial-design', color: '#e2e8f0', text: '#0f172a' },
  { id: 'digital-humans', color: '#1e1026', text: '#e9d5ff' },
  { id: 'cinematic-world', color: '#0a0a0a', text: '#d4d4d8' },
  { id: 'automotive', color: '#0c1017', text: '#f8fafc' },
  { id: 'ai-pipeline', color: '#0C0B0A', text: '#FAF7F2' },
  { id: 'cta-section', color: '#020617', text: '#f8fafc' },
];

export function ScrollColorEngine() {
  const [currentColor, setCurrentColor] = useState<string>('#F5B800');
  const [currentText, setCurrentText] = useState<string>('#000000');

  useEffect(() => {
    // Initial styles to avoid any flash of unstyled theme
    document.body.style.backgroundColor = '#F5B800';
    document.body.style.color = '#000000';
    document.documentElement.style.setProperty('--current-bg', '#F5B800');
    document.documentElement.style.setProperty('--current-text', '#000000');
    document.body.style.transition =
      'background-color 0.8s cubic-bezier(0.25, 1, 0.5, 1), color 0.8s cubic-bezier(0.25, 1, 0.5, 1)';

    let lastColor = '#F5B800';
    let lastText = '#000000';

    const applyColors = (bgColor: string, textColor: string) => {
      if (bgColor === lastColor && textColor === lastText) return;
      lastColor = bgColor;
      lastText = textColor;

      setCurrentColor(bgColor);
      setCurrentText(textColor);

      document.body.style.backgroundColor = bgColor;
      document.body.style.color = textColor;
      document.documentElement.style.setProperty('--current-bg', bgColor);
      document.documentElement.style.setProperty('--current-text', textColor);
    };

    let panelElements: { el: HTMLElement; color: string; text: string }[] = [];

    const cachePanels = () => {
      panelElements = [];
      const dataPanels = Array.from(document.querySelectorAll<HTMLElement>('[data-color]'));
      if (dataPanels.length > 0) {
        dataPanels.forEach((el) => {
          const color = el.getAttribute('data-color') || '#F5B800';
          const text = el.getAttribute('data-text') || '#000000';
          panelElements.push({ el, color, text });
        });
      } else {
        DEFAULT_PANELS.forEach((cfg) => {
          const el = document.getElementById(cfg.id);
          if (el) {
            panelElements.push({ el, color: cfg.color, text: cfg.text });
          }
        });
      }
    };

    const updateActiveColors = () => {
      if (panelElements.length === 0) {
        cachePanels();
      }
      if (panelElements.length === 0) return;

      const viewportMid = window.innerHeight * 0.5;
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

      // 1. If at top, lock to first section
      if (scrollY < 80) {
        const first = panelElements[0];
        applyColors(first.color, first.text);
        return;
      }

      // 2. If near bottom, lock to last section
      if (scrollY >= maxScroll - 80) {
        const last = panelElements[panelElements.length - 1];
        applyColors(last.color, last.text);
        return;
      }

      // 3. Middle evaluation: section whose top has crossed the mid-screen (top 50%)
      let activePanel = panelElements[0];
      for (const p of panelElements) {
        const rect = p.el.getBoundingClientRect();
        if (rect.top <= viewportMid) {
          activePanel = p;
        }
      }

      applyColors(activePanel.color, activePanel.text);
    };

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateActiveColors();
          ticking = false;
        });
        ticking = true;
      }
    };

    const onResize = () => {
      cachePanels();
      onScroll();
    };

    cachePanels();
    updateActiveColors();

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <>
      <motion.div
        animate={{ backgroundColor: currentColor }}
        transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
        className="fixed inset-0 pointer-events-none -z-10 will-change-[background-color]"
      />
      {/* Master 64px Architectural Blueprint Grid Overlay (Curating all sections & seams) */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,rgba(120,140,165,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(120,140,165,0.05)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none z-30 select-none" />
    </>
  );
}
