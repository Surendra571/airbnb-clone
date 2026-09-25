import React from 'react';
import { Photo } from '@/types/property';
import { NineDotsIcon } from '@/components/ui/Icons';

interface PropertyGalleryProps {
  photos: Photo[];
  onOpenPhotoTour: (triggerEl?: HTMLElement | null, room?: string) => void;
  onOpenPhoto: (photoId: number, triggerEl?: HTMLElement | null) => void;
}

export const PropertyGallery: React.FC<PropertyGalleryProps> = ({
  photos,
  onOpenPhotoTour,
  onOpenPhoto,
}) => {
  const displayPhotos = photos.slice(0, 5);

  return (
    <section className="relative w-full">
      <div className="grid h-[480px] w-full grid-cols-4 grid-rows-2 gap-2 overflow-hidden rounded-xl">
        {displayPhotos.map((photo, index) => {
          const isMain = index === 0;
          return (
            <button
              key={photo.id}
              type="button"
              onClick={(e) => onOpenPhoto(photo.id, e.currentTarget)}
              className={`relative overflow-hidden bg-zinc-200 transition-all cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#FF385C] group ${isMain ? 'col-span-2 row-span-2' : 'col-span-1 row-span-1'
                }`}
              aria-label={`View photo: ${photo.room}`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="h-full w-full object-cover transition-[filter] duration-200 group-hover:brightness-90"
              />
            </button>
          );
        })}
      </div>

      {/* Floating 'Show all photos' action button */}
      <button
        type="button"
        onClick={(e) => onOpenPhotoTour(e.currentTarget)}
        className="absolute bottom-4 right-4 flex items-center gap-2 rounded-lg border border-[#222222] bg-white px-4 py-2 text-sm font-semibold text-[#222222] shadow-md transition-all duration-200 hover:scale-[1.02] hover:bg-[#F7F7F7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#FF385C]"
        aria-label="Show all photos"
      >
        <NineDotsIcon size={16} />
        <span>Show all photos</span>
      </button>
    </section>
  );
};
