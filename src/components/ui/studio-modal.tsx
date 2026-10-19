'use client';

import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { X } from '@phosphor-icons/react';

export interface StudioModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
  tag?: string;
  accentColor?: string;
  borderColor?: string;
  maxWidth?: string;
  closeTestId?: string;
  containerClassName?: string;
  overflowClassName?: string;
  ariaLabelledBy?: string;
  children: React.ReactNode;
}

export function StudioModal({
  isOpen,
  onClose,
  title,
  subtitle,
  tag,
  accentColor = '#FF3333',
  borderColor = 'rgba(255,255,255,0.2)',
  maxWidth = 'max-w-4xl',
  closeTestId = 'modal-close-btn',
  containerClassName,
  overflowClassName = 'overflow-y-auto sm:overflow-hidden',
  ariaLabelledBy,
  children,
}: StudioModalProps) {
  const [mounted, setMounted] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock background scroll and trap focus
  useEffect(() => {
    if (!isOpen) return;

    previousActiveElement.current = document.activeElement as HTMLElement;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Stop Lenis if available
    const lenis = (window as unknown as { lenis?: { stop: () => void; start: () => void } }).lenis;
    if (lenis && typeof lenis.stop === 'function') {
      lenis.stop();
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }

      if (e.key === 'Tab' && modalRef.current) {
        const focusables = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Initial focus into modal close button
    const closeBtn = modalRef.current?.querySelector<HTMLElement>('[data-testid="modal-close-btn"]');
    closeBtn?.focus();

    return () => {
      document.body.style.overflow = originalOverflow;
      if (lenis && typeof lenis.start === 'function') {
        lenis.start();
      }
      window.removeEventListener('keydown', handleKeyDown);
      previousActiveElement.current?.focus();
    };
  }, [isOpen, onClose]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md"
        >
          <motion.div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={ariaLabelledBy || (title ? 'studio-modal-title' : undefined)}
            initial={{ scale: 0.94, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.94, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            style={{ borderColor }}
            className={`relative w-full ${maxWidth} max-h-[90vh] ${overflowClassName} rounded-none ${containerClassName || 'bg-[#0c0d10] text-white'} border-2 shadow-2xl flex flex-col`}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              data-testid={closeTestId}
              aria-label="Close dialog"
              className="absolute top-5 right-5 z-20 p-2.5 rounded-none bg-black/70 hover:bg-black border border-white/20 text-white transition-colors cursor-pointer"
            >
              <X size={18} weight="bold" />
            </button>

            {/* Optional Header Banner */}
            {(tag || title) && (
              <div className="px-6 sm:px-8 pt-6 sm:pt-8 pb-3">
                {tag && (
                  <div
                    style={{ borderColor: accentColor, color: accentColor }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-none border text-xs font-mono font-bold mb-2 uppercase tracking-widest bg-white/[0.03]"
                  >
                    {tag}
                  </div>
                )}
                {title && (
                  <h3 id="studio-modal-title" className="text-2xl sm:text-3xl font-black text-white">
                    {title}
                  </h3>
                )}
                {subtitle && (
                  <p className="text-neutral-400 text-xs sm:text-sm font-mono mt-1">
                    {subtitle}
                  </p>
                )}
              </div>
            )}

            {/* Modal Body */}
            <div className="px-6 sm:px-8 pb-6 sm:pb-8 flex-1">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
