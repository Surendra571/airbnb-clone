'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useCallback, useTransition } from 'react';

export function useModalNavigation() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [, startTransition] = useTransition();

  const modal = searchParams.get('modal');
  const modalItem = searchParams.get('modalItem');

  const isPhotoTourOpen = modal === 'PHOTO_TOUR_SCROLLABLE';
  const activePhotoId = modalItem ? parseInt(modalItem, 10) : null;
  const isLightboxOpen = isPhotoTourOpen && activePhotoId !== null;

  const openPhotoTour = useCallback(() => {
    startTransition(() => {
      router.push('/?modal=PHOTO_TOUR_SCROLLABLE', { scroll: false });
    });
  }, [router]);

  const openLightbox = useCallback((photoId: number) => {
    startTransition(() => {
      router.push(`/?modal=PHOTO_TOUR_SCROLLABLE&modalItem=${photoId}`, { scroll: false });
    });
  }, [router]);

  const closeLightbox = useCallback(() => {
    startTransition(() => {
      router.push('/?modal=PHOTO_TOUR_SCROLLABLE', { scroll: false });
    });
  }, [router]);

  const closeAll = useCallback(() => {
    startTransition(() => {
      router.push('/', { scroll: false });
    });
  }, [router]);

  return {
    isPhotoTourOpen,
    isLightboxOpen,
    activePhotoId,
    openPhotoTour,
    openLightbox,
    closeLightbox,
    closeAll,
  };
}

