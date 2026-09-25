import React, { useState } from 'react';
import { ShareIcon, HeartIcon } from '@/components/ui/Icons';

interface PropertyHeaderProps {
  title: string;
  onShare?: () => void;
  onSave?: () => void;
}

export const PropertyHeader: React.FC<PropertyHeaderProps> = ({
  title,
  onShare,
  onSave,
}) => {
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = () => {
    setIsSaved(!isSaved);
    onSave?.();
  };

  return (
    <section className="pt-6 pb-4">
      <div className="flex items-start justify-between">
        <h1 className="text-[26px] font-semibold leading-[32.5px] text-[#222222]">
          {title}
        </h1>

        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onShare}
            className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm font-medium text-[#222222] underline hover:bg-[#F7F7F7] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#FF385C]"
            aria-label="Share this listing"
          >
            <ShareIcon size={16} />
            <span>Share</span>
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm font-medium text-[#222222] underline hover:bg-[#F7F7F7] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#FF385C]"
            aria-label={isSaved ? 'Listing saved' : 'Save this listing'}
          >
            <HeartIcon
              size={16}
              className={isSaved ? 'text-[#FF385C] fill-[#FF385C]' : 'text-[#222222]'}
            />
            <span>{isSaved ? 'Saved' : 'Save'}</span>
          </button>
        </div>
      </div>
    </section>
  );
};
