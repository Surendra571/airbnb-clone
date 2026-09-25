'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { AirbnbLogo, SearchIcon, GlobeIcon, MenuIcon } from '@/components/ui/Icons';

interface HeaderProps {
  onSearchClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onSearchClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 550);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (id === 'photos') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-30 w-full border-b border-[#EBEBEB] bg-white">
      {isScrolled ? (
        /* Sticky Sub-navigation Bar on Scroll */
        <div className="mx-auto flex h-[80px] max-w-[1120px] items-center justify-between px-6 xl:px-0">
          <nav className="flex items-center gap-6 h-full" aria-label="Page sections">
            <button
              type="button"
              onClick={() => scrollToSection('photos')}
              className="h-full border-b-2 border-[#222222] text-sm font-semibold text-[#222222] pt-1"
            >
              Photos
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('amenities-section')}
              className="h-full border-b-2 border-transparent text-sm font-medium text-[#717171] hover:text-[#222222] pt-1 transition-colors"
            >
              Amenities
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('reviews-section')}
              className="h-full border-b-2 border-transparent text-sm font-medium text-[#717171] hover:text-[#222222] pt-1 transition-colors"
            >
              Reviews
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('location-section')}
              className="h-full border-b-2 border-transparent text-sm font-medium text-[#717171] hover:text-[#222222] pt-1 transition-colors"
            >
              Location
            </button>
          </nav>

          <div className="flex items-center gap-4">
            <div className="text-right">
              <span className="text-sm font-semibold text-[#222222]">₹28,499</span>
              <span className="text-xs text-[#717171]"> for 5 nights</span>
              <span className="text-xs text-[#222222] font-semibold ml-2">★ 4.95 · 19 reviews</span>
            </div>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 600, behavior: 'smooth' })}
              className="rounded-lg bg-[#FF385C] px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#E00B41]"
            >
              Reserve
            </button>
          </div>
        </div>
      ) : (
        /* Standard Header */
        <div className="mx-auto flex h-[80px] max-w-[1120px] items-center justify-between px-6 xl:px-0">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-1.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#FF385C] rounded-md p-1"
            aria-label="Airbnb homepage"
          >
            <AirbnbLogo size={32} className="text-[#FF385C]" />
            <span className="text-[20px] font-bold tracking-tight text-[#FF385C]">airbnb</span>
          </Link>

          {/* Search Bar Pill */}
          <div
            onClick={onSearchClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onSearchClick?.();
              }
            }}
            className="flex items-center rounded-full border border-[#DDDDDD] py-2 pl-6 pr-2 shadow-[0_1px_2px_rgba(0,0,0,0.08)] hover:shadow-md transition-shadow cursor-pointer text-sm"
            aria-label="Search anywhere, anytime, add guests"
          >
            <span className="font-semibold text-[#222222]">Anywhere</span>
            <span className="h-6 border-r border-[#DDDDDD] mx-4" aria-hidden="true" />
            <span className="font-semibold text-[#222222]">Anytime</span>
            <span className="h-6 border-r border-[#DDDDDD] mx-4" aria-hidden="true" />
            <span className="text-[#717171] pr-3 font-normal">Add guests</span>
            <button
              type="button"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FF385C] text-white transition-transform hover:scale-105"
              aria-label="Search"
            >
              <SearchIcon size={12} className="text-white" />
            </button>
          </div>

          {/* User / Host Menu Controls */}
          <div className="flex items-center gap-1">
            <button
              type="button"
              className="rounded-full px-3.5 py-2.5 text-sm font-semibold text-[#222222] hover:bg-[#F7F7F7] transition-colors"
            >
              Become a host
            </button>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full text-[#222222] hover:bg-[#F7F7F7] transition-colors"
              aria-label="Choose a language and region"
            >
              <GlobeIcon size={16} />
            </button>
            <button
              type="button"
              className="flex h-10 items-center gap-3 rounded-full border border-[#DDDDDD] pl-3.5 pr-1.5 hover:shadow-md transition-shadow"
              aria-label="Main navigation menu"
            >
              <MenuIcon size={16} className="text-[#222222]" />
              <div className="h-8 w-8 rounded-full bg-[#717171] text-white flex items-center justify-center text-xs font-semibold overflow-hidden">
                <svg viewBox="0 0 32 32" fill="currentColor" className="w-full h-full text-white pt-1">
                  <path d="M16 8a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 13c-5.33 0-11 2.67-11 6v1h22v-1c0-3.33-5.67-6-11-6z" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
