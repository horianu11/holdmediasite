'use client';

interface SectionTransitionSeamProps {
  from: string;
  to: string;
  heightClass?: string;
  className?: string;
}

/**
 * SectionTransitionSeam
 * 
 * Implements Option 3: Locomotive / Apple-style seamless transition seams between
 * contrasting section-local backgrounds.
 * 
 * Features:
 * - Ultra-smooth OKLab perceptual color interpolation (no muddy gray transitions).
 * - Standard linear-gradient fallback for universal compatibility.
 * - Non-interactive pointer-events-none overlay layer.
 */
export function SectionTransitionSeam({
  from,
  to,
  heightClass = 'h-14 sm:h-16 md:h-20',
  className = '',
}: SectionTransitionSeamProps) {
  return (
    <div
      aria-hidden="true"
      className={`relative w-full ${heightClass} pointer-events-none select-none overflow-hidden z-20 ${className}`}
      style={{
        background: `linear-gradient(to bottom, ${from} 0%, ${to} 100%)`,
      }}
    >
      {/* OKLab Perceptual Interpolation Layer for Rich Vibrancy */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to bottom in oklab, ${from} 0%, ${to} 100%)`,
        }}
      />
    </div>
  );
}

export default SectionTransitionSeam;
