import React from 'react';
import { Amenity } from '@/types/property';
import {
  KitchenIcon,
  WifiIcon,
  WorkspaceIcon,
  ParkingIcon,
  PoolIcon,
  JacuzziIcon,
  PetIcon,
  CameraIcon,
  AlarmOffIcon,
} from '@/components/ui/Icons';

interface AmenitiesProps {
  amenities: Amenity[];
}

const getAmenityIcon = (icon: string) => {
  switch (icon) {
    case 'kitchen':
      return <KitchenIcon size={24} />;
    case 'wifi':
      return <WifiIcon size={24} />;
    case 'workspace':
      return <WorkspaceIcon size={24} />;
    case 'parking':
      return <ParkingIcon size={24} />;
    case 'pool':
      return <PoolIcon size={24} />;
    case 'jacuzzi':
      return <JacuzziIcon size={24} />;
    case 'pet':
      return <PetIcon size={24} />;
    case 'camera':
      return <CameraIcon size={24} />;
    case 'alarm':
      return <AlarmOffIcon size={24} />;
    default:
      return <WifiIcon size={24} />;
  }
};

export const Amenities: React.FC<AmenitiesProps> = ({ amenities }) => {
  return (
    <section className="border-b border-[#EBEBEB] py-8">
      <h3 className="text-[22px] font-semibold leading-[26px] text-[#222222]">
        What this place offers
      </h3>
      <div className="mt-6 grid grid-cols-2 gap-y-4 gap-x-8">
        {amenities.slice(0, 10).map((amenity) => (
          <div key={amenity.id} className="flex items-center gap-4 text-[16px] text-[#222222]">
            <span className="shrink-0 text-[#222222]" aria-hidden="true">
              {getAmenityIcon(amenity.icon)}
            </span>
            <span className={amenity.available ? '' : 'line-through text-[#717171]'}>
              {amenity.name}
            </span>
          </div>
        ))}
      </div>
      <button
        type="button"
        className="mt-8 rounded-lg border border-[#222222] px-6 py-3 text-sm font-semibold text-[#222222] hover:bg-[#F7F7F7] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#FF385C]"
      >
        Show all {amenities.length} amenities
      </button>
    </section>
  );
};
