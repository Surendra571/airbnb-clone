import React from 'react';
import { PropertyListing } from '@/types/property';
import { StarIcon, GoldFloralBadge } from '@/components/ui/Icons';

interface PropertyDetailsProps {
  property: PropertyListing;
}

export const PropertyDetails: React.FC<PropertyDetailsProps> = ({ property }) => {
  return (
    <div className="flex flex-col">
      {/* Property Subtitle & Specs */}
      <div className="border-b border-[#EBEBEB] pb-6 pt-2">
        <h2 className="text-[22px] font-semibold leading-[26px] text-[#222222]">
          {property.propertyType}
        </h2>
        <p className="mt-1 text-[16px] text-[#717171]">
          {property.capacity.guests} guests · {property.capacity.bedrooms} bedroom ·{' '}
          {property.capacity.beds} bed · {property.capacity.bathrooms} bathroom
        </p>
      </div>

      {/* Guest Favourite Card */}
      <div className="my-6 flex items-center justify-between rounded-xl border border-[#DDDDDD] p-6 shadow-sm">
        <div className="flex items-center gap-4">
          {/* Left Floral Badge */}
          <div className="flex shrink-0 items-center justify-center">
            <GoldFloralBadge size={32} />
          </div>

          <div>
            <div className="text-[16px] font-semibold text-[#222222]">Guest favourite</div>
            <p className="text-[14px] text-[#717171] max-w-sm mt-0.5">
              One of the most loved homes on Airbnb, according to guests
            </p>
          </div>

          {/* Right Floral Badge */}
          <div className="flex shrink-0 items-center justify-center ml-2">
            <GoldFloralBadge size={32} />
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex flex-col items-center">
            <span className="text-[18px] font-bold text-[#222222]">4.95</span>
            <div className="flex gap-0.5 text-[#222222] mt-0.5">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} size={11} className="fill-[#222222] text-[#222222]" />
              ))}
            </div>
          </div>
          <div className="h-8 border-r border-[#DDDDDD]" />
          <div className="flex flex-col items-center">
            <span className="text-[18px] font-bold text-[#222222]">19</span>
            <span className="text-[12px] font-semibold underline text-[#222222] mt-0.5">Reviews</span>
          </div>
        </div>
      </div>

      {/* Host Snippet */}
      <div className="flex items-center gap-4 border-b border-[#EBEBEB] pb-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#004D40] text-white font-bold text-sm tracking-wider">
          {property.host.avatarText}
        </div>
        <div>
          <h3 className="text-[16px] font-semibold text-[#222222]">
            Hosted by {property.host.name}
          </h3>
          <p className="text-[14px] text-[#717171]">
            {property.host.yearsHosting} years hosting
          </p>
        </div>
      </div>

      {/* Where you'll sleep */}
      <div className="border-b border-[#EBEBEB] py-8">
        <h3 className="text-[22px] font-semibold leading-[26px] text-[#222222]">
          Where you&apos;ll sleep
        </h3>
        <div className="mt-6 grid grid-cols-2 gap-4 max-w-[650px]">
          {property.sleepingSpots.map((spot, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-3 cursor-pointer group"
            >
              <div className="h-44 w-full overflow-hidden rounded-xl bg-zinc-100">
                <img
                  src={spot.imageSrc}
                  alt={spot.roomName}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div>
                <div className="text-[16px] font-semibold text-[#222222]">{spot.roomName}</div>
                <div className="text-[14px] text-[#717171] mt-0.5">{spot.bedType}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
