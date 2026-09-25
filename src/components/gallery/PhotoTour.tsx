import React, { useEffect, useRef } from 'react';
import { Photo, RoomCategory } from '@/types/property';
import { ChevronLeftIcon, ShareIcon, HeartIcon } from '@/components/ui/Icons';

interface PhotoTourProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPhoto: (photoId: number) => void;
  photos: Photo[];
  rooms: RoomCategory[];
  triggerRef?: React.RefObject<HTMLElement | null>;
  initialRoom?: string | null;
  hasActiveSubmodal?: boolean;
}

export const PhotoTour: React.FC<PhotoTourProps> = ({
  isOpen,
  onClose,
  onSelectPhoto,
  photos,
  rooms,
  triggerRef,
  initialRoom,
  hasActiveSubmodal = false,
}) => {
  const dialogRef = useRef<HTMLDivElement>(null);
  const backButtonRef = useRef<HTMLButtonElement>(null);

  // 1. Body Scroll Locking & Focus Management
  useEffect(() => {
    if (!isOpen) return;

    // Save previous overflow style
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const openerElement = triggerRef?.current;

    // Move focus into modal's first interactive element
    const timer = setTimeout(() => {
      backButtonRef.current?.focus();
    }, 50);

    return () => {
      document.body.style.overflow = originalOverflow;
      clearTimeout(timer);
      // Restore focus to opener element
      if (openerElement) {
        openerElement.focus();
      }
    };
  }, [isOpen, triggerRef]);

  // 2. Keyboard Navigation: Escape key and Focus Trap
  useEffect(() => {
    if (!isOpen || hasActiveSubmodal) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key === 'Tab' && dialogRef.current) {
        const focusableElements = dialogRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
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
  }, [isOpen, hasActiveSubmodal, onClose]);

  // 3. Smooth Anchor Scrolling to Room Sections
  const handleScrollToRoom = (roomName: string) => {
    const targetElement = document.getElementById(`room-${roomName.replace(/\s+/g, '-').toLowerCase()}`);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (isOpen && initialRoom) {
      const timer = setTimeout(() => {
        handleScrollToRoom(initialRoom);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [isOpen, initialRoom]);

  if (!isOpen) return null;

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label="Photo tour"
      className="fixed inset-0 z-50 overflow-y-auto bg-white transition-opacity duration-300"
    >
      {/* Photo Tour Top Header */}
      <div className="sticky top-0 z-30 flex h-[72px] items-center justify-between border-b border-[#EBEBEB] bg-white px-6">
        <button
          ref={backButtonRef}
          type="button"
          onClick={onClose}
          className="rounded-full p-2 hover:bg-[#F7F7F7] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#FF385C]"
          aria-label="Close photo tour"
        >
          <ChevronLeftIcon size={18} />
        </button>

        <h1 className="text-[16px] font-semibold text-[#222222]">Photo tour</h1>

        <div className="flex items-center gap-1">
          <button
            type="button"
            className="rounded-full p-2 hover:bg-[#F7F7F7] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#FF385C]"
            aria-label="Share"
          >
            <ShareIcon size={16} />
          </button>
          <button
            type="button"
            className="rounded-full p-2 hover:bg-[#F7F7F7] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#FF385C]"
            aria-label="Save"
          >
            <HeartIcon size={16} />
          </button>
        </div>
      </div>

      {/* Room Category Navigation Strip (Sticky below header) */}
      <div className="sticky top-[72px] z-20 flex gap-6 overflow-x-auto border-b border-[#EBEBEB] bg-white px-8 py-3 no-scrollbar justify-center">
        {rooms.map((category) => (
          <button
            key={category.room}
            type="button"
            onClick={() => handleScrollToRoom(category.room)}
            className="flex w-24 shrink-0 flex-col items-center gap-2 cursor-pointer group focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#FF385C] rounded-lg p-1"
          >
            <div className="h-16 w-20 overflow-hidden rounded-xl bg-zinc-100 transition-transform group-hover:scale-105">
              {category.thumbnailSrc ? (
                <img
                  src={category.thumbnailSrc}
                  alt={category.room}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              ) : (
                <div className="h-full w-full bg-zinc-200" />
              )}
            </div>
            <span className="text-[12px] font-medium text-[#222222] text-center w-full leading-tight">
              {category.room}
            </span>
          </button>
        ))}
      </div>

      {/* 2-Column Room Gallery Content */}
      <div className="mx-auto max-w-[1120px] px-6 py-8">
        {rooms.map((category) => {
          const roomPhotos = photos.filter((p) => category.photoIds.includes(p.id));
          const roomAnchorId = `room-${category.room.replace(/\s+/g, '-').toLowerCase()}`;

          return (
            <div
              key={category.room}
              id={roomAnchorId}
              className="grid grid-cols-[300px_1fr] gap-12 border-b border-[#EBEBEB] py-12 scroll-mt-48"
            >
              {/* Left Column: Room Title & Tags (Sticky) */}
              <div className="sticky top-44 h-fit">
                <h2 className="text-[24px] font-semibold text-[#222222]">{category.room}</h2>
                <p className="mt-2 text-[15px] leading-relaxed text-[#717171]">
                  {category.tags.join(' · ')}
                </p>
              </div>

              {/* Right Column: Stacked High-Resolution Room Photos */}
              <div className="flex flex-col gap-6">
                {roomPhotos.map((photo) => (
                  <button
                    key={photo.id}
                    id={`photo-tour-btn-${photo.id}`}
                    type="button"
                    onClick={() => onSelectPhoto(photo.id)}
                    className="relative h-80 w-full overflow-hidden rounded-xl bg-zinc-100 cursor-pointer group focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#FF385C]"
                    aria-label={`Open ${photo.room} photo in full view`}
                  >
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
