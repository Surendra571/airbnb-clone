import React, { useState } from 'react';
import { PropertyListing } from '@/types/property';
import { ChevronDownIcon, StarIcon, TagIcon, FlagIcon } from '@/components/ui/Icons';

interface BookingCardProps {
  property: PropertyListing;
}

export const BookingCard: React.FC<BookingCardProps> = ({ property }) => {
  const [guestsCount, setGuestsCount] = useState(2);
  const [isGuestDropdownOpen, setIsGuestDropdownOpen] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      {/* Top Discount Banner */}
      <div className="flex items-center justify-between rounded-xl border border-[#DDDDDD] p-3 text-sm">
        <div className="flex items-center gap-2">
          <TagIcon size={16} className="text-[#008A05]" />
          <span className="text-xs text-[#222222]">
            Get 10% off your next stay.{' '}
            <span className="underline cursor-pointer">Terms apply</span>
          </span>
        </div>
        <button
          type="button"
          className="rounded-full border border-[#DDDDDD] px-3 py-1 text-xs font-semibold text-[#222222] hover:bg-[#F7F7F7] transition-colors"
        >
          Claim
        </button>
      </div>

      {/* Main Reservation Card (Sticky top-24) */}
      <aside className="sticky top-[100px] w-[380px] rounded-2xl border border-[#DDDDDD] p-6 shadow-[0_6px_16px_rgba(0,0,0,0.12)] bg-white">
        {/* Price header */}
        <div className="flex items-baseline justify-between">
          <div>
            <span className="text-[22px] font-bold text-[#222222]">
              ₹{property.pricing.totalPriceINR.toLocaleString('en-IN')}
            </span>
            <span className="text-[16px] text-[#717171] font-normal">
              {' '}for {property.pricing.stayNights} nights
            </span>
          </div>
        </div>

        {/* Date and Guest Pickers Box */}
        <div className="mt-4 overflow-hidden rounded-xl border border-[#B0B0B0]">
          <div className="grid grid-cols-2 border-b border-[#B0B0B0]">
            <div className="p-3 cursor-pointer hover:bg-[#F7F7F7]">
              <div className="text-[10px] font-bold tracking-wider text-[#222222]">CHECK-IN</div>
              <div className="text-sm font-medium text-[#222222]">10/18/2026</div>
            </div>
            <div className="border-l border-[#B0B0B0] p-3 cursor-pointer hover:bg-[#F7F7F7]">
              <div className="text-[10px] font-bold tracking-wider text-[#222222]">CHECKOUT</div>
              <div className="text-sm font-medium text-[#222222]">10/23/2026</div>
            </div>
          </div>

          <div
            onClick={() => setIsGuestDropdownOpen(!isGuestDropdownOpen)}
            className="flex items-center justify-between p-3 cursor-pointer hover:bg-[#F7F7F7]"
          >
            <div>
              <div className="text-[10px] font-bold tracking-wider text-[#222222]">GUESTS</div>
              <div className="text-sm font-medium text-[#222222]">{guestsCount} guests</div>
            </div>
            <ChevronDownIcon size={14} className="text-[#222222]" />
          </div>

          {isGuestDropdownOpen && (
            <div className="border-t border-[#DDDDDD] p-3 flex items-center justify-between bg-white">
              <span className="text-xs text-[#222222] font-medium">Guests</span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setGuestsCount(Math.max(1, guestsCount - 1))}
                  className="h-6 w-6 rounded-full border border-[#B0B0B0] flex items-center justify-center text-xs disabled:opacity-30"
                  disabled={guestsCount <= 1}
                >
                  -
                </button>
                <span className="text-xs font-semibold">{guestsCount}</span>
                <button
                  type="button"
                  onClick={() => setGuestsCount(Math.min(property.capacity.guests, guestsCount + 1))}
                  className="h-6 w-6 rounded-full border border-[#B0B0B0] flex items-center justify-center text-xs disabled:opacity-30"
                  disabled={guestsCount >= property.capacity.guests}
                >
                  +
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Free Cancellation Notice */}
        <div className="mt-4 bg-[#F7F7F7] py-2.5 px-3 rounded-lg text-center text-xs text-[#222222] font-medium">
          Free cancellation before 17 October
        </div>

        {/* Reserve Action Button */}
        <button
          type="button"
          className="mt-4 h-12 w-full rounded-lg bg-[#FF385C] font-semibold text-white text-[16px] transition-colors hover:bg-[#E00B41] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#222222]"
        >
          Reserve
        </button>

        <p className="mt-3 text-center text-xs text-[#717171]">You won&apos;t be charged yet</p>

        {/* Review summary link */}
        <div className="mt-4 flex items-center justify-center gap-1 text-xs text-[#222222]">
          <StarIcon size={12} className="fill-[#222222] text-[#222222]" />
          <span className="font-semibold">{property.ratings.overall}</span>
          <span>·</span>
          <span className="underline cursor-pointer">{property.ratings.totalReviews} reviews</span>
        </div>
      </aside>

      {/* Report this listing */}
      <div className="mt-2 text-center">
        <button
          type="button"
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#717171] hover:text-[#222222] underline cursor-pointer"
        >
          <FlagIcon size={14} className="text-[#717171]" />
          <span>Report this listing</span>
        </button>
      </div>
    </div>
  );
};
