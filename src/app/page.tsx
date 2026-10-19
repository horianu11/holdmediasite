'use client';

import { HeroSection } from '@/components/sections/hero-section';
import { SpatialReelSection } from '@/components/sections/spatial-reel-section';
import { CulturalDisruptionSection } from '@/components/sections/cultural-disruption-section';
import { SpatialDesignSection } from '@/components/sections/spatial-design-section';
import { DigitalHumansSection } from '@/components/sections/digital-humans-section';
import { CinematicWorldSection } from '@/components/sections/cinematic-world-section';
import { AutomotiveSection } from '@/components/sections/automotive-section';
import { AiPipelineSection } from '@/components/sections/ai-pipeline-section';
import CTAWithVerticalMarquee from '@/components/ui/cta-with-text-marquee';
import { ScrollColorEngine } from '@/components/core/scroll-color-engine';
import { SectionTransitionSeam } from '@/components/ui/section-transition-seam';
import { FloatingDynamicNav } from '@/components/ui/floating-dynamic-nav';

export default function Home() {
  return (
    <main className="relative w-full min-h-screen">
      {/* Floating Dynamic Island Navigation (Persistent Studio Index & Telemetry) */}
      <FloatingDynamicNav />

      {/* Master Continuous Scroll Color Engine starting at Studio Gold */}
      <ScrollColorEngine />

      {/* SECTION 0: The Hero (Landing - Studio Gold #F5B800) */}
      <HeroSection />

      {/* SECTION 0.5: Spatial Reel (Cylindrical Facet Arc Showcase - Studio Gold #F5B800) */}
      <SpatialReelSection />

      {/* SEAM: Studio Gold -> Crimson-Black Void */}
      <SectionTransitionSeam from="#F5B800" to="#0a0000" />

      {/* SECTION 1: Cultural Disruption (Classical Sculpture x Digital Waves - #0a0000) */}
      <CulturalDisruptionSection />

      {/* SEAM: Crimson-Black Void -> Concrete Slate */}
      <SectionTransitionSeam from="#0a0000" to="#e2e8f0" />

      {/* SECTION 2: Spatial Design & Liminality (Minimalist Architecture x Realistic Light - #e2e8f0) */}
      <SpatialDesignSection />

      {/* SEAM: Concrete Slate -> Transhumanist Violet */}
      <SectionTransitionSeam from="#e2e8f0" to="#1e1026" />

      {/* SECTION 3: Digital Humans & Transhumanism (Interactive Anatomy Slider - #1e1026) */}
      <DigitalHumansSection />

      {/* SEAM: Transhumanist Violet -> Industrial Zinc */}
      <SectionTransitionSeam from="#1e1026" to="#0a0a0a" />

      {/* SECTION 4: Cinematic World-Building (Anomalous Environments - #0a0a0a) */}
      <CinematicWorldSection />

      {/* SEAM: Industrial Zinc -> Asphalt Carbon */}
      <SectionTransitionSeam from="#0a0a0a" to="#0c1017" />

      {/* SECTION 5: Automotive CGI & Kinetic Commercials (Precision in Motion - #0c1017) */}
      <AutomotiveSection />

      {/* SEAM: Asphalt Carbon -> Dark Studio Charcoal */}
      <SectionTransitionSeam from="#0c1017" to="#0C0B0A" />

      {/* SECTION 6: The AI Pipeline (The Claude Startups Pitch - #0C0B0A) */}
      <AiPipelineSection />

      {/* SEAM: Dark Studio Charcoal -> Midnight Computational Slate */}
      <SectionTransitionSeam from="#0C0B0A" to="#020617" />

      {/* SECTION 6: Call to Action with Vertical Text Marquee - #020617 */}
      <section
        id="cta-section"
        data-color="#020617"
        data-text="#f8fafc"
        className="panel relative w-full bg-[#020617] z-20"
      >
        <CTAWithVerticalMarquee />
      </section>
    </main>
  );
}
