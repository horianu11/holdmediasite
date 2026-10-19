'use client';

import { motion } from 'motion/react';

export function FluidLiquidCanvas() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden select-none">
      {/* SVG Goo / Viscous Liquid Filter for organic fluid blending */}
      <svg className="hidden">
        <defs>
          <filter id="liquid-filter">
            <feGaussianBlur in="SourceGraphic" stdDeviation="28" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 0.08 0 0 0  0 0 0.15 0 0  0 0 0 20 -9"
              result="liquid"
            />
            <feBlend in="SourceGraphic" in2="liquid" />
          </filter>
        </defs>
      </svg>

      {/* Primary Viscous Stream 1: Drifting diagonally with pulse */}
      <motion.div
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -60, 40, 0],
          scale: [1, 1.18, 0.95, 1],
          opacity: [0.22, 0.35, 0.22],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/4 -left-20 w-[650px] h-[450px] rounded-[45%_55%_63%_37%/39%_44%_56%_61%] bg-[radial-gradient(ellipse_at_center,#E51937_0%,#88081A_50%,transparent_75%)] blur-[45px] mix-blend-screen"
      />

      {/* Viscous Stream 2: Deep Crimson Undercurrent floating from right */}
      <motion.div
        animate={{
          x: [0, -70, 30, 0],
          y: [0, 70, -30, 0],
          scale: [1, 0.92, 1.15, 1],
          opacity: [0.18, 0.28, 0.18],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-1/4 -right-16 w-[700px] h-[550px] rounded-[58%_42%_47%_53%/48%_60%_40%_52%] bg-[radial-gradient(ellipse_at_center,#C41230_0%,#520512_55%,transparent_75%)] blur-[50px] mix-blend-screen"
      />

      {/* Viscous Stream 3: Center-Right Floating Eddies */}
      <motion.div
        animate={{
          x: [0, 40, -50, 0],
          y: [0, -40, 30, 0],
          rotate: [0, 45, -30, 0],
          opacity: [0.12, 0.22, 0.12],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/2 left-1/3 w-[500px] h-[380px] rounded-[65%_35%_50%_50%/40%_50%_50%_60%] bg-[radial-gradient(circle,#FF2442_0%,#99081E_45%,transparent_70%)] blur-[55px] mix-blend-screen"
      />

      {/* Subtle Specular Fluid Ribbons (Flowing caustics) */}
      <motion.div
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
          opacity: [0.06, 0.12, 0.06],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(229,25,55,0.25)_0%,transparent_70%)] bg-[size:200%_200%]"
      />

      {/* Fine-grain fluid noise texture for organic tactile depth */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />
    </div>
  );
}
