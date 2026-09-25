import React, { useEffect, useRef } from 'react';
import { Photo } from '@/types/property';
import {
  NineDotsIcon,
  CloseIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@/components/ui/Icons';

interface LightboxProps {
  isOpen: boolean;
  activePhotoId: number | null;
  photos: Photo[];
  onClose: () => void;
  onBackToGrid: () => void;
  onPrev: () => void;
  onNext: () => void;
  triggerRef?: React.RefObject<HTMLElement | null>;
}

export const Lightbox: React.FC<LightboxProps> = ({
  isOpen,
  activePhotoId,
  photos,
  onClose,
  onBackToGrid,
  onPrev,
  onNext,
  triggerRef,
}) => {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const currentIndex = activePhotoId !== null
    ? photos.findIndex((p) => p.id === activePhotoId)
    : -1;
  const currentPhoto = currentIndex >= 0 ? photos[currentIndex] : null;
  const isFirst = currentIndex <= 0;
  const isLast = currentIndex >= photos.length - 1;

  // 1. Focus Management & Body Scroll Locking
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const openerElement = triggerRef?.current;
    const currentActiveId = activePhotoId;

    // Focus close button initially
    const timer = setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    return () => {
      document.body.style.overflow = originalOverflow;
      clearTimeout(timer);

      // Restore focus to active photo button in Photo Tour, or opener trigger
      if (currentActiveId !== null) {
        const photoTourBtn = document.getElementById(`photo-tour-btn-${currentActiveId}`);
        if (photoTourBtn) {
          photoTourBtn.focus();
          return;
        }
      }

      if (openerElement) {
        openerElement.focus();
      }
    };
  }, [isOpen, triggerRef, activePhotoId]);

  // 2. Keyboard Navigation: ArrowLeft, ArrowRight, Escape, and Focus Trap
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key === 'ArrowLeft') {
        if (!isFirst) {
          e.preventDefault();
          onPrev();
        }
        return;
      }

      if (e.key === 'ArrowRight') {
        if (!isLast) {
          e.preventDefault();
          onNext();
        }
        return;
      }

      if (e.key === 'Tab' && dialogRef.current) {
        const focusableElements = dialogRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, isFirst, isLast, onPrev, onNext, onClose]);

  if (!isOpen || !currentPhoto) return null;

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label="Photo viewer"
      className="fixed inset-0 z-[60] flex flex-col bg-white overflow-hidden animate-fadeIn"
    >
      {/* Lightbox Header Bar (64px) */}
      <div className="flex h-16 shrink-0 items-center justify-between px-6 border-b border-[#EBEBEB]">
        {/* Left: Back to photo tour grid button */}
        <button
          type="button"
          onClick={onBackToGrid}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#DDDDDD] bg-white text-[#222222] transition-colors hover:bg-[#F7F7F7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#FF385C]"
          aria-label="Back to photo tour grid"
        >
          <NineDotsIcon size={16} />
        </button>

        {/* Center: Current Room Name */}
        <span className="text-[16px] font-semibold text-[#222222] truncate max-w-md text-center">
          {currentPhoto.room}
        </span>

        {/* Right: Photo Counter & Close button */}
        <div className="flex items-center gap-4">
          <span className="text-[14px] font-medium text-[#222222] select-none">
            {currentIndex + 1} of {photos.length}
          </span>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full text-[#222222] transition-colors hover:bg-[#F7F7F7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#FF385C]"
            aria-label="Close photo viewer"
          >
            <CloseIcon size={16} />
          </button>
        </div>
      </div>

      {/* Main Image Stage */}
      <div className="relative flex flex-1 items-center justify-center p-4 md:p-8 select-none">
        {/* Previous Photo Button */}
        <button
          type="button"
          onClick={onPrev}
          disabled={isFirst}
          className="absolute left-4 md:left-8 z-10 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full border border-[#DDDDDD] bg-white shadow-md transition-all hover:bg-[#F7F7F7] hover:scale-105 active:scale-95 disabled:opacity-30 disabled:pointer-events-none disabled:cursor-not-allowed focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#FF385C]"
          aria-label="Previous photo"
        >
          <ChevronLeftIcon size={18} />
        </button>

        {/* Central Preserved-Aspect Image */}
        <div className="relative max-h-[75vh] max-w-5xl flex items-center justify-center overflow-hidden rounded-xl">
          <img
            key={currentPhoto.id}
            src={currentPhoto.src}
            alt={currentPhoto.alt}
            draggable={false}
            className="max-h-[75vh] w-auto max-w-full object-contain rounded-xl select-none transition-opacity duration-200"
          />
        </div>

        {/* Next Photo Button */}
        <button
          type="button"
          onClick={onNext}
          disabled={isLast}
          className="absolute right-4 md:right-8 z-10 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full border border-[#DDDDDD] bg-white shadow-md transition-all hover:bg-[#F7F7F7] hover:scale-105 active:scale-95 disabled:opacity-30 disabled:pointer-events-none disabled:cursor-not-allowed focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#FF385C]"
          aria-label="Next photo"
        >
          <ChevronRightIcon size={18} />
        </button>
      </div>
    </div>
  );
};
