import React from 'react';
import { HostInfo } from '@/types/property';
import { StarIcon } from '@/components/ui/Icons';

interface HostSectionProps {
  host: HostInfo;
}

export const HostSection: React.FC<HostSectionProps> = ({ host }) => {
  const allCoHosts = [
    { name: 'Sharath', initial: 'S' },
    { name: 'Aman Dev Pahwa', initial: 'A' },
    { name: 'Maria Karen Priyanka', initial: 'M' },
    { name: 'Simran', initial: 'S' },
    { name: 'Pallavi', initial: 'P' },
    { name: 'Sanyukta', initial: 'S' },
    { name: 'Shruti', initial: 'S' },
    { name: 'Amisha', initial: 'A' },
  ];

  return (
    <section className="border-b border-[#EBEBEB] py-10">
      <h3 className="text-[22px] font-semibold leading-[26px] text-[#222222]">
        Meet your host
      </h3>

      <div className="mt-6 grid grid-cols-[380px_1fr] gap-12">
        {/* Left: Host Card Profile */}
        <div className="rounded-3xl bg-[#F0EFE9] p-6 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <div className="flex flex-col items-center">
              <div className="relative">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#004D40] text-white font-bold text-2xl tracking-wider shadow-md">
                  {host.avatarText}
                </div>
                <div className="absolute bottom-0 right-0 flex h-7 w-7 items-center justify-center rounded-full bg-[#FF385C] text-white text-xs shadow">
                  ✓
                </div>
              </div>
              <h4 className="mt-3 text-2xl font-bold text-[#222222]">{host.name}</h4>
              <span className="text-xs font-semibold text-[#717171]">Host</span>
            </div>

            {/* Stats Column */}
            <div className="flex flex-col gap-3 pr-2">
              <div>
                <div className="text-xl font-bold text-[#222222]">1,463</div>
                <div className="text-[10px] text-[#717171] uppercase tracking-wider">Reviews</div>
              </div>
              <div className="border-t border-[#DDDDDD] pt-2">
                <div className="flex items-center gap-1 text-xl font-bold text-[#222222]">
                  <span>4.68</span>
                  <StarIcon size={14} className="fill-[#222222] text-[#222222]" />
                </div>
                <div className="text-[10px] text-[#717171] uppercase tracking-wider">Rating</div>
              </div>
              <div className="border-t border-[#DDDDDD] pt-2">
                <div className="text-xl font-bold text-[#222222]">2</div>
                <div className="text-[10px] text-[#717171] uppercase tracking-wider">Years hosting</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Co-hosts List */}
        <div>
          <h4 className="text-base font-semibold text-[#222222]">Co-Hosts</h4>
          <div className="mt-4 grid grid-cols-3 gap-y-4 gap-x-6">
            {allCoHosts.map((cohost, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-[#222222]">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-zinc-200 text-xs font-semibold text-[#222222]">
                  {cohost.initial}
                </div>
                <span className="truncate">{cohost.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Host Metadata & Response details */}
      <div className="mt-8 flex flex-col gap-3 text-sm text-[#222222]">
        <div className="flex items-center gap-2">
          <span>📍</span>
          <span>Born in the 80s</span>
        </div>
        <div className="mt-2">
          <div className="font-semibold">Host details</div>
          <div className="text-[#717171] mt-1">Response rate: {host.responseRate}</div>
          <div className="text-[#717171]">Responds {host.responseTime}</div>
        </div>
      </div>
    </section>
  );
};
