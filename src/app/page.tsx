'use client';

import React, { Suspense, useRef, useState } from 'react';
import { Header } from '@/components/layout/Header';
import { PropertyHeader } from '@/components/listing/PropertyHeader';
import { PropertyGallery } from '@/components/gallery/PropertyGallery';
import { PropertyDetails } from '@/components/listing/PropertyDetails';
import { Amenities } from '@/components/listing/Amenities';
import { CalendarSection } from '@/components/listing/CalendarSection';
import { ReviewsSection } from '@/components/listing/ReviewsSection';
import { LocationMap } from '@/components/listing/LocationMap';
import { HostSection } from '@/components/listing/HostSection';
import { StayPolicies } from '@/components/listing/StayPolicies';
import { BookingCard } from '@/components/listing/BookingCard';
import { PhotoTour } from '@/components/gallery/PhotoTour';
import { Lightbox } from '@/components/lightbox/Lightbox';
import { useModalNavigation } from '@/hooks/useModalNavigation';
import { propertyData } from '@/data/property';

function ListingContent() {
  const {
    isPhotoTourOpen,
    isLightboxOpen,
    activePhotoId,
    openPhotoTour,
    openLightbox,
    closeLightbox,
    closeAll,
  } = useModalNavigation();

  const lastTriggerRef = useRef<HTMLElement | null>(null);
  const [initialRoom, setInitialRoom] = useState<string | null>(null);

  const handleOpenPhotoTour = (triggerEl?: HTMLElement | null, room?: string) => {
    if (triggerEl) {
      lastTriggerRef.current = triggerEl;
    }
    setInitialRoom(room || null);
    openPhotoTour();
  };

  const handleOpenPhoto = (photoId: number, triggerEl?: HTMLElement | null) => {
    if (triggerEl) {
      lastTriggerRef.current = triggerEl;
    }
    openLightbox(photoId);
  };

  const handleNextPhoto = () => {
    if (activePhotoId === null) return;
    const currentIndex = propertyData.photos.findIndex((p) => p.id === activePhotoId);
    if (currentIndex < propertyData.photos.length - 1) {
      openLightbox(propertyData.photos[currentIndex + 1].id);
    }
  };

  const handlePrevPhoto = () => {
    if (activePhotoId === null) return;
    const currentIndex = propertyData.photos.findIndex((p) => p.id === activePhotoId);
    if (currentIndex > 0) {
      openLightbox(propertyData.photos[currentIndex - 1].id);
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#222222]">
      {/* 81px Sticky Header */}
      <Header />

      {/* Main Content Container (1120px max-width) */}
      <main className="mx-auto max-w-[1120px] px-6 xl:px-0">
        <PropertyHeader
          title={propertyData.title}
          onShare={() => console.log('Share clicked')}
          onSave={() => console.log('Save clicked')}
        />

        <PropertyGallery
          photos={propertyData.photos}
          onOpenPhotoTour={handleOpenPhotoTour}
          onOpenPhoto={handleOpenPhoto}
        />

        {/* 2-Column Split: Left Details (~692px) & Right Sticky Reservation Card (380px) */}
        <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-[1fr_380px] items-start">
          <div className="flex flex-col">
            <PropertyDetails property={propertyData} />
            <div id="amenities-section" className="scroll-mt-24">
              <Amenities amenities={propertyData.amenities} />
            </div>
            <CalendarSection />
            <div id="reviews-section" className="scroll-mt-24">
              <ReviewsSection
                ratings={propertyData.ratings}
                reviews={propertyData.reviews}
              />
            </div>
            <div id="location-section" className="scroll-mt-24">
              <LocationMap />
            </div>
            <HostSection host={propertyData.host} />
            <StayPolicies />
          </div>

          <div className="sticky top-[100px]">
            <BookingCard property={propertyData} />
          </div>
        </div>
      </main>

      {/* Photo Tour Modal Layer */}
      <PhotoTour
        isOpen={isPhotoTourOpen}
        onClose={closeAll}
        onSelectPhoto={(photoId) => openLightbox(photoId)}
        photos={propertyData.photos}
        rooms={propertyData.rooms}
        triggerRef={lastTriggerRef}
        initialRoom={initialRoom}
        hasActiveSubmodal={isLightboxOpen}
      />

      {/* Lightbox Modal Layer */}
      <Lightbox
        isOpen={isLightboxOpen}
        activePhotoId={activePhotoId}
        photos={propertyData.photos}
        onClose={closeLightbox}
        onBackToGrid={closeLightbox}
        onPrev={handlePrevPhoto}
        onNext={handleNextPhoto}
        triggerRef={lastTriggerRef}
      />
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-[#717171]">Loading listing...</div>}>
      <ListingContent />
    </Suspense>
  );
}
