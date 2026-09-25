import React from 'react';
import { Review, RatingBreakdown } from '@/types/property';
import {
  StarIcon,
  SparklesIcon,
  CheckSquareIcon,
  KeyIcon,
  ChatBubbleIcon,
  PinIcon,
  TagIcon,
} from '@/components/ui/Icons';

interface ReviewsSectionProps {
  ratings: RatingBreakdown;
  reviews: Review[];
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ ratings, reviews }) => {
  const categoryMetrics = [
    { label: 'Cleanliness', score: '4.9', icon: <SparklesIcon size={18} /> },
    { label: 'Accuracy', score: '4.9', icon: <CheckSquareIcon size={18} /> },
    { label: 'Check-in', score: '5.0', icon: <KeyIcon size={18} /> },
    { label: 'Communication', score: '5.0', icon: <ChatBubbleIcon size={18} /> },
    { label: 'Location', score: '4.9', icon: <PinIcon size={18} /> },
    { label: 'Value', score: '4.8', icon: <TagIcon size={18} /> },
  ];

  const filterPills = [
    { label: 'Comfort', count: 6 },
    { label: 'Accuracy', count: 5 },
    { label: 'Hot tub', count: 5 },
    { label: 'Condition', count: 4 },
    { label: 'Hospitality', count: 6 },
  ];

  return (
    <section className="border-b border-[#EBEBEB] py-12">
      {/* Guest Favourite Grand Badge */}
      <div className="flex flex-col items-center justify-center pb-8">
        <div className="flex items-center gap-4">
          <span className="text-4xl text-[#FF385C]">🎖️</span>
          <span className="text-6xl font-bold tracking-tighter text-[#222222]">
            {ratings.overall}
          </span>
          <span className="text-4xl text-[#FF385C]">🎖️</span>
        </div>
        <div className="mt-2 text-xl font-bold text-[#222222]">Guest favourite</div>
        <p className="mt-1 text-center text-sm text-[#717171] max-w-sm">
          One of the most loved homes on Airbnb based on ratings, reviews, and reliability
        </p>
      </div>

      {/* Ratings Breakdown Grid */}
      <div className="mt-6 grid grid-cols-2 gap-x-16 gap-y-4 border-b border-[#EBEBEB] pb-10">
        {/* Left Column: Overall bar */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between text-xs text-[#717171]">
            <span>Overall rating</span>
          </div>
          <div className="flex flex-col gap-1 text-xs text-[#717171]">
            {[5, 4, 3, 2, 1].map((ratingNum) => (
              <div key={ratingNum} className="flex items-center gap-2">
                <span className="w-2">{ratingNum}</span>
                <div className="h-1 flex-1 rounded-full bg-[#EBEBEB] overflow-hidden">
                  <div
                    className="h-full bg-[#222222] rounded-full"
                    style={{ width: ratingNum === 5 ? '100%' : '0%' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: 6 Category metrics */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-4">
          {categoryMetrics.map((metric) => (
            <div key={metric.label} className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2 text-[#222222]">
                <span className="text-[#717171]">{metric.icon}</span>
                <span>{metric.label}</span>
              </div>
              <span className="font-semibold text-[#222222]">{metric.score}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Filter Pills */}
      <div className="mt-8 flex gap-3 overflow-x-auto pb-2">
        {filterPills.map((pill) => (
          <button
            key={pill.label}
            type="button"
            className="flex items-center gap-2 rounded-full border border-[#DDDDDD] px-4 py-2 text-xs font-semibold text-[#222222] hover:bg-[#F7F7F7] transition-colors"
          >
            <span>{pill.label}</span>
            <span className="text-[#717171]">{pill.count}</span>
          </button>
        ))}
      </div>

      {/* 2-Column Review Cards Grid */}
      <div className="mt-8 grid grid-cols-2 gap-x-12 gap-y-8">
        {reviews.map((rev) => (
          <div key={rev.id} className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#222222] text-white font-semibold text-sm">
                {rev.authorAvatarInitial}
              </div>
              <div>
                <div className="text-[16px] font-semibold text-[#222222]">
                  {rev.authorName}
                </div>
                <div className="text-[12px] text-[#717171]">{rev.authorTenure}</div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-[#222222]">
              <div className="flex gap-0.5">
                {[...Array(rev.rating)].map((_, i) => (
                  <StarIcon key={i} size={10} className="fill-[#222222] text-[#222222]" />
                ))}
              </div>
              <span>·</span>
              <span className="font-semibold">{rev.date}</span>
            </div>

            <p className="text-[15px] leading-relaxed text-[#222222] line-clamp-3">
              {rev.comment}
            </p>
            <button type="button" className="text-left text-xs font-semibold underline text-[#222222]">
              Show more
            </button>
          </div>
        ))}
      </div>

      {/* Show all reviews button */}
      <button
        type="button"
        className="mt-10 rounded-lg border border-[#222222] px-6 py-3 text-sm font-semibold text-[#222222] hover:bg-[#F7F7F7] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#FF385C]"
      >
        Show all {ratings.totalReviews} reviews
      </button>
    </section>
  );
};

