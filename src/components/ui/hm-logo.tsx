import React from 'react';
import Image from 'next/image';

interface HMLogoProps {
  className?: string;
  size?: number;
  width?: number;
  height?: number;
  color?: string;
}

export function HMLogo({
  className = '',
  size = 120,
  width,
  height,
  color = 'currentColor',
}: HMLogoProps) {
  // Original aspect ratio of the cropped glyph is 175 / 104 ≈ 1.68
  const computedHeight = height ?? size;
  const computedWidth = width ?? Math.round(computedHeight * 1.68);

  // If pure black, use the clean transparent black PNG
  if (color === '#000000' || color === 'black') {
    return (
      <Image
        src="/brand/hm-logo-black.png"
        alt="Hold Media HM Monogram"
        width={computedWidth}
        height={computedHeight}
        unoptimized
        className={`object-contain ${className}`}
        style={{ width: computedWidth, height: computedHeight }}
      />
    );
  }

  // If pure white, use the clean transparent white PNG
  if (color === '#ffffff' || color === 'white') {
    return (
      <Image
        src="/brand/hm-logo-white.png"
        alt="Hold Media HM Monogram"
        width={computedWidth}
        height={computedHeight}
        unoptimized
        className={`object-contain ${className}`}
        style={{ width: computedWidth, height: computedHeight }}
      />
    );
  }

  // For dynamic custom colors (currentColor, gold, etc.), use CSS mask
  return (
    <span
      role="img"
      aria-label="Hold Media HM Monogram"
      className={`inline-block shrink-0 ${className}`}
      style={{
        width: computedWidth,
        height: computedHeight,
        backgroundColor: color === 'currentColor' ? 'currentColor' : color,
        WebkitMaskImage: `url('/brand/hm-logo-black.png')`,
        maskImage: `url('/brand/hm-logo-black.png')`,
        WebkitMaskSize: 'contain',
        maskSize: 'contain',
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center',
        maskPosition: 'center',
      }}
    />
  );
}
