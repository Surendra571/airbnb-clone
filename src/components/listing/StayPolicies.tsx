import React from 'react';

export const StayPolicies: React.FC = () => {
  return (
    <section className="py-10">
      <h3 className="text-[22px] font-semibold leading-[26px] text-[#222222]">
        Things to know
      </h3>

      <div className="mt-6 grid grid-cols-3 gap-8">
        {/* Column 1: Cancellation policy */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="text-xl">📅</span>
            <h4 className="font-semibold text-[16px] text-[#222222]">Cancellation policy</h4>
          </div>
          <p className="text-sm text-[#717171] leading-relaxed">
            Free cancellation before 17 October. Cancel before check-in on 18 October for a partial refund.
          </p>
          <button type="button" className="text-left text-sm font-semibold underline text-[#222222] mt-2">
            Learn more
          </button>
        </div>

        {/* Column 2: House rules */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="text-xl">🔑</span>
            <h4 className="font-semibold text-[16px] text-[#222222]">House rules</h4>
          </div>
          <p className="text-sm text-[#717171] leading-relaxed">
            Check-in after 2:00 pm<br />
            Checkout before 11:00 am<br />
            3 guests maximum
          </p>
          <button type="button" className="text-left text-sm font-semibold underline text-[#222222] mt-2">
            Learn more
          </button>
        </div>

        {/* Column 3: Safety & property */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="text-xl">🛡️</span>
            <h4 className="font-semibold text-[16px] text-[#222222]">Safety & property</h4>
          </div>
          <p className="text-sm text-[#717171] leading-relaxed">
            Carbon monoxide alarm not reported<br />
            Smoke alarm not reported<br />
            Exterior security cameras on property
          </p>
          <button type="button" className="text-left text-sm font-semibold underline text-[#222222] mt-2">
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
};

