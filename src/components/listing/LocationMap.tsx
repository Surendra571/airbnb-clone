import React from 'react';

export const LocationMap: React.FC = () => {
  return (
    <section className="border-b border-[#EBEBEB] py-10">
      <h3 className="text-[22px] font-semibold leading-[26px] text-[#222222]">
        Where you&apos;ll be
      </h3>
      <p className="mt-2 text-[16px] text-[#222222]">Candolim, Goa, India</p>

      {/* Styled Vector Map Card */}
      <div className="relative mt-6 h-[420px] w-full overflow-hidden rounded-2xl border border-[#DDDDDD] bg-[#EBF1F6]">
        {/* Abstract pastel map shapes */}
        <div className="absolute inset-0 opacity-70">
          <svg className="h-full w-full" preserveAspectRatio="none" viewBox="0 0 800 500">
            <path d="M0,0 L350,0 L280,500 L0,500 Z" fill="#D3E5F3" />
            <path d="M350,0 L800,0 L800,500 L280,500 Z" fill="#E2EBE5" />
            <path d="M220,180 C260,100 350,150 420,240 C490,320 380,450 310,480 C240,510 180,260 220,180 Z" fill="#DCEBCE" />
            <path d="M0,350 Q200,320 400,380 T800,340" fill="none" stroke="#FFFFFF" strokeWidth="12" />
            <path d="M150,0 Q320,150 260,500" fill="none" stroke="#FFFFFF" strokeWidth="8" />
          </svg>
        </div>

        {/* Central Location Pin with Radar Pulse */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
          <div className="h-20 w-20 rounded-full bg-[#FF385C]/20 animate-ping absolute" />
          <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#222222] text-white shadow-xl">
            <svg viewBox="0 0 32 32" className="h-7 w-7 fill-white">
              <path d="M16 3L2 14h4v15h8v-8h4v8h8V14h4L16 3z" />
            </svg>
          </div>
        </div>

        {/* Floating Zoom and Search Controls */}
        <div className="absolute right-4 top-4 flex flex-col overflow-hidden rounded-lg border border-[#DDDDDD] bg-white shadow-md">
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center border-b border-[#DDDDDD] text-lg font-bold text-[#222222] hover:bg-[#F7F7F7]"
            aria-label="Zoom in"
          >
            +
          </button>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center text-lg font-bold text-[#222222] hover:bg-[#F7F7F7]"
            aria-label="Zoom out"
          >
            −
          </button>
        </div>
      </div>

      <div className="mt-4">
        <p className="text-sm font-semibold text-[#222222]">Neighbourhood highlights</p>
        <p className="mt-1 text-sm text-[#717171] leading-relaxed">
          Located in the heart of Candolim, Amor de Goa offers a peaceful stay with easy access to beaches, cafés, and popular attractions.
        </p>
        <button type="button" className="mt-2 text-sm font-semibold underline text-[#222222]">
          Show more &gt;
        </button>
      </div>
    </section>
  );
};

