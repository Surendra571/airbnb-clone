import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@/components/ui/Icons';

export const CalendarSection: React.FC = () => {
  const [selectedRange, setSelectedRange] = useState<{ start: number; end: number }>({
    start: 18,
    end: 23,
  });

  const octDays = Array.from({ length: 31 }, (_, i) => i + 1);
  const octStartOffset = 4; // Thursday Oct 1 2026: S M T W T F S -> index 4

  const novDays = Array.from({ length: 30 }, (_, i) => i + 1);
  const novStartOffset = 0; // Sunday Nov 1 2026 -> index 0

  const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  return (
    <section className="border-b border-[#EBEBEB] py-8">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-[22px] font-semibold leading-[26px] text-[#222222]">
            5 nights in Candolim
          </h3>
          <p className="mt-1 text-[14px] text-[#717171]">18 Oct 2026 - 23 Oct 2026</p>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-[#F7F7F7] border border-transparent hover:border-[#DDDDDD] transition-all"
            aria-label="Previous month"
          >
            <ChevronLeftIcon size={14} />
          </button>
          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-[#F7F7F7] border border-transparent hover:border-[#DDDDDD] transition-all"
            aria-label="Next month"
          >
            <ChevronRightIcon size={14} />
          </button>
        </div>
      </div>

      {/* Dual Month Calendar View */}
      <div className="mt-6 grid grid-cols-2 gap-12">
        {/* October 2026 */}
        <div>
          <div className="text-center font-semibold text-[16px] text-[#222222] mb-4">
            October 2026
          </div>
          <div className="grid grid-cols-7 gap-y-2 text-center text-xs font-semibold text-[#717171] mb-2">
            {daysOfWeek.map((d, i) => (
              <span key={i}>{d}</span>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-y-1 text-center text-sm font-medium">
            {Array.from({ length: octStartOffset }).map((_, i) => (
              <span key={`empty-${i}`} />
            ))}
            {octDays.map((day) => {
              const isSelectedStart = day === selectedRange.start;
              const isSelectedEnd = day === selectedRange.end;
              const isInRange = day > selectedRange.start && day < selectedRange.end;

              let style = 'h-10 w-10 flex items-center justify-center mx-auto rounded-full cursor-pointer hover:border hover:border-[#222222]';
              if (isSelectedStart || isSelectedEnd) {
                style = 'h-10 w-10 flex items-center justify-center mx-auto rounded-full bg-[#222222] text-white font-bold';
              } else if (isInRange) {
                style = 'h-10 w-10 flex items-center justify-center mx-auto bg-[#F7F7F7] text-[#222222] rounded-none';
              }

              return (
                <div key={day} className="py-0.5">
                  <div className={style}>{day}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* November 2026 */}
        <div>
          <div className="text-center font-semibold text-[16px] text-[#222222] mb-4">
            November 2026
          </div>
          <div className="grid grid-cols-7 gap-y-2 text-center text-xs font-semibold text-[#717171] mb-2">
            {daysOfWeek.map((d, i) => (
              <span key={i}>{d}</span>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-y-1 text-center text-sm font-medium">
            {Array.from({ length: novStartOffset }).map((_, i) => (
              <span key={`empty-nov-${i}`} />
            ))}
            {novDays.map((day) => (
              <div key={day} className="py-0.5">
                <div className="h-10 w-10 flex items-center justify-center mx-auto rounded-full cursor-pointer hover:border hover:border-[#222222]">
                  {day}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Calendar Bottom Actions */}
      <div className="mt-6 flex items-center justify-between text-sm">
        <div className="flex items-center gap-2 text-[#222222]">
          <span className="cursor-pointer">⌨</span>
        </div>
        <button
          type="button"
          onClick={() => setSelectedRange({ start: 0, end: 0 })}
          className="font-semibold underline text-[#222222] hover:text-black cursor-pointer"
        >
          Clear dates
        </button>
      </div>
    </section>
  );
};

