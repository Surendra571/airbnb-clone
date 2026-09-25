import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  className?: string;
}

export const AirbnbLogo: React.FC<IconProps> = ({ size = 32, className = 'text-[#FF385C]', ...props }) => (
  <svg
    viewBox="0 0 32 32"
    height={size}
    width={size}
    fill="currentColor"
    aria-hidden="true"
    className={className}
    {...props}
  >
    <path d="M16 1c2.008 0 3.463.963 4.751 3.269l.533 1.025c1.954 3.83 6.114 12.54 7.1 14.836l.145.353c.667 1.591.91 2.479.96 3.397.086 1.587-.457 3.128-1.536 4.341C26.792 29.5 25.12 30.2 23.3 30.2c-2.096 0-3.89-.92-5.7-2.614l-1.6-1.528-1.6 1.528C12.59 29.28 10.796 30.2 8.7 30.2c-1.82 0-3.492-.7-4.653-1.979-1.079-1.213-1.622-2.754-1.536-4.341.05-.918.293-1.806.96-3.397l.145-.353c.986-2.296 5.146-11.006 7.1-14.836l.533-1.025C12.537 1.963 13.992 1 16 1zm0 2c-1.233 0-2.253.64-3.313 2.532l-.547 1.052C10.21 10.36 6.07 19.027 5.11 21.261l-.14.342c-.596 1.423-.799 2.167-.84 2.915-.064 1.18.337 2.308 1.127 3.196.862.95 2.115 1.486 3.443 1.486 1.637 0 3.178-.77 4.792-2.292L16 24.52l2.508 2.388c1.614 1.522 3.155 2.292 4.792 2.292 1.328 0 2.581-.536 3.443-1.486.79-.888 1.191-2.016 1.127-3.196-.041-.748-.244-1.492-.84-2.915l-.14-.342c-.96-2.234-5.1-10.901-7.03-14.677l-.547-1.052C18.253 3.64 17.233 3 16 3zm0 9c2.476 0 4.417 1.776 4.936 4.316.038.188.064.385.064.684 0 2.55-1.97 5-5 5s-5-2.45-5-5c0-.299.026-.496.064-.684C11.583 13.776 13.524 12 16 12zm0 2c-1.396 0-2.585 1.077-2.919 2.556L13.04 17c0 1.666 1.306 3 2.96 3s2.96-1.334 2.96-3l-.041-.444C18.585 15.077 17.396 14 16 14z" />
  </svg>
);

export const SearchIcon: React.FC<IconProps> = ({ size = 12, className = 'text-white', ...props }) => (
  <svg
    viewBox="0 0 32 32"
    height={size}
    width={size}
    fill="currentColor"
    aria-hidden="true"
    className={className}
    {...props}
  >
    <path d="M13 2a11 11 0 0 1 8.6 17.84l9.28 9.28a1 1 0 0 1-1.42 1.42l-9.28-9.28A11 11 0 1 1 13 2zm0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18z" />
  </svg>
);

export const GlobeIcon: React.FC<IconProps> = ({ size = 16, className = 'text-[#222222]', ...props }) => (
  <svg
    viewBox="0 0 16 16"
    height={size}
    width={size}
    fill="currentColor"
    aria-hidden="true"
    className={className}
    {...props}
  >
    <path d="M8 0a8 8 0 1 0 8 8 8.01 8.01 0 0 0-8-8zm5.93 7H11.5a13.3 13.3 0 0 0-.9-4.32A7.03 7.03 0 0 1 13.93 7zM8 1.08c.7 1.15 1.25 2.76 1.45 4.92H6.55C6.75 3.84 7.3 2.23 8 1.08zM5.4 2.68A13.3 13.3 0 0 0 4.5 7H2.07a7.03 7.03 0 0 1 3.33-4.32zM2.07 9h2.43a13.3 13.3 0 0 0 .9 4.32A7.03 7.03 0 0 1 2.07 9zm4.48 0h2.9c-.2 2.16-.75 3.77-1.45 4.92C7.3 12.77 6.75 11.16 6.55 9zm4.05 4.32A13.3 13.3 0 0 0 11.5 9h2.43a7.03 7.03 0 0 1-3.33 4.32z" />
  </svg>
);

export const MenuIcon: React.FC<IconProps> = ({ size = 16, className = 'text-[#222222]', ...props }) => (
  <svg
    viewBox="0 0 32 32"
    height={size}
    width={size}
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    aria-hidden="true"
    className={className}
    {...props}
  >
    <line x1="4" y1="9" x2="28" y2="9" />
    <line x1="4" y1="16" x2="28" y2="16" />
    <line x1="4" y1="23" x2="28" y2="23" />
  </svg>
);

export const ShareIcon: React.FC<IconProps> = ({ size = 16, className = 'text-[#222222]', ...props }) => (
  <svg
    viewBox="0 0 32 32"
    height={size}
    width={size}
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
    {...props}
  >
    <path d="M22 10l-6-6-6 6" />
    <path d="M16 4v16" />
    <path d="M6 18v8a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8" />
  </svg>
);

export const HeartIcon: React.FC<IconProps> = ({ size = 16, className = 'text-[#222222]', ...props }) => (
  <svg
    viewBox="0 0 32 32"
    height={size}
    width={size}
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
    {...props}
  >
    <path d="M16 28C7 22 3 16 3 10.5 3 6.9 5.9 4 9.5 4c2.5 0 4.7 1.4 5.9 3.5C16.6 5.4 18.8 4 21.3 4 24.9 4 27.8 6.9 27.8 10.5 27.8 16 23.8 22 16 28z" />
  </svg>
);

export const NineDotsIcon: React.FC<IconProps> = ({ size = 16, className = 'text-[#222222]', ...props }) => (
  <svg
    viewBox="0 0 16 16"
    height={size}
    width={size}
    fill="currentColor"
    aria-hidden="true"
    className={className}
    {...props}
  >
    <circle cx="2" cy="2" r="1.5" />
    <circle cx="8" cy="2" r="1.5" />
    <circle cx="14" cy="2" r="1.5" />
    <circle cx="2" cy="8" r="1.5" />
    <circle cx="8" cy="8" r="1.5" />
    <circle cx="14" cy="8" r="1.5" />
    <circle cx="2" cy="14" r="1.5" />
    <circle cx="8" cy="14" r="1.5" />
    <circle cx="14" cy="14" r="1.5" />
  </svg>
);

export const StarIcon: React.FC<IconProps> = ({ size = 14, className = 'text-[#222222]', ...props }) => (
  <svg
    viewBox="0 0 32 32"
    height={size}
    width={size}
    fill="currentColor"
    aria-hidden="true"
    className={className}
    {...props}
  >
    <path d="M16 2l4.3 8.8 9.7 1.4-7 6.8 1.7 9.6L16 24.2 7.3 28.6l1.7-9.6-7-6.8 9.7-1.4L16 2z" />
  </svg>
);

export const GoldFloralBadge: React.FC<IconProps> = ({ size = 32, className = 'text-[#E07A00]', ...props }) => (
  <svg
    viewBox="0 0 32 32"
    height={size}
    width={size}
    fill="currentColor"
    aria-hidden="true"
    className={className}
    {...props}
  >
    <path d="M16 2a3 3 0 0 1 2.8 2 3 3 0 0 1 3.5 1.5 3 3 0 0 1 3.5 2.5 3 3 0 0 1 2.2 3.2 3 3 0 0 1 .5 3.8 3 3 0 0 1-1.3 3.6 3 3 0 0 1 .3 3.8 3 3 0 0 1-2.8 3 3 3 0 0 1-2.2 3.2 3 3 0 0 1-3.5 1.5 3 3 0 0 1-3 1.9 3 3 0 0 1-3-1.9 3 3 0 0 1-3.5-1.5 3 3 0 0 1-2.2-3.2 3 3 0 0 1-2.8-3 3 3 0 0 1 .3-3.8 3 3 0 0 1-1.3-3.6 3 3 0 0 1 .5-3.8 3 3 0 0 1 2.2-3.2 3 3 0 0 1 3.5-2.5 3 3 0 0 1 3.5-1.5A3 3 0 0 1 16 2zm0 6a8 8 0 1 0 0 16 8 8 0 0 0 0-16z" />
  </svg>
);

export const FlagIcon: React.FC<IconProps> = ({ size = 14, className = 'text-[#717171]', ...props }) => (
  <svg
    viewBox="0 0 32 32"
    height={size}
    width={size}
    fill="currentColor"
    aria-hidden="true"
    className={className}
    {...props}
  >
    <path d="M6 3a1 1 0 0 0-1 1v25a1 1 0 1 0 2 0v-9h20a1 1 0 0 0 .8-1.6L23.4 12l4.4-6.4A1 1 0 0 0 27 4H7V4a1 1 0 0 0-1-1zm1 3h18.2l-3.7 5.4a1 1 0 0 0 0 1.2l3.7 5.4H7V6z" />
  </svg>
);

export const TrophyWreath: React.FC<IconProps> = ({ size = 32, className = 'text-[#222222]', ...props }) => (
  <svg
    viewBox="0 0 48 48"
    height={size}
    width={size}
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
    {...props}
  >
    <path d="M14 8C10 14 10 24 16 32c4 5 9 8 16 8" />
    <path d="M34 8c4 6 4 16-2 24-4 5-9 8-16 8" />
    <path d="M12 14c4 0 6 3 5 7" />
    <path d="M36 14c-4 0-6 3-5 7" />
    <path d="M15 24c3 0 5 3 4 7" />
    <path d="M33 24c-3 0-5 3-4 7" />
    <circle cx="24" cy="18" r="6" />
    <path d="M21 34h6" />
    <path d="M24 24v10" />
  </svg>
);

export const ChevronLeftIcon: React.FC<IconProps> = ({ size = 16, className = 'text-[#222222]', ...props }) => (
  <svg
    viewBox="0 0 32 32"
    height={size}
    width={size}
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
    {...props}
  >
    <path d="M20 28L8 16 20 4" />
  </svg>
);

export const ChevronRightIcon: React.FC<IconProps> = ({ size = 16, className = 'text-[#222222]', ...props }) => (
  <svg
    viewBox="0 0 32 32"
    height={size}
    width={size}
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
    {...props}
  >
    <path d="M12 4l12 12-12 12" />
  </svg>
);

export const ChevronDownIcon: React.FC<IconProps> = ({ size = 16, className = 'text-[#222222]', ...props }) => (
  <svg
    viewBox="0 0 32 32"
    height={size}
    width={size}
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
    {...props}
  >
    <path d="M4 10l12 12 12-12" />
  </svg>
);

export const CloseIcon: React.FC<IconProps> = ({ size = 16, className = 'text-[#222222]', ...props }) => (
  <svg
    viewBox="0 0 32 32"
    height={size}
    width={size}
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
    {...props}
  >
    <path d="M6 6l20 20M26 6L6 26" />
  </svg>
);

/* Amenity Icons */
export const KitchenIcon: React.FC<IconProps> = ({ size = 24, className = 'text-[#222222]', ...props }) => (
  <svg viewBox="0 0 32 32" height={size} width={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className} {...props}>
    <path d="M6 3v12a3 3 0 0 0 3 3h2v11" />
    <path d="M11 3v12" />
    <path d="M8 3v6" />
    <path d="M21 3v12a3 3 0 0 0 3 3h2v11" />
    <path d="M26 3v26" />
  </svg>
);

export const WifiIcon: React.FC<IconProps> = ({ size = 24, className = 'text-[#222222]', ...props }) => (
  <svg viewBox="0 0 32 32" height={size} width={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className} {...props}>
    <path d="M4 11c6.6-6.6 17.4-6.6 24 0" />
    <path d="M8 15c4.4-4.4 11.6-4.4 16 0" />
    <path d="M12 19c2.2-2.2 5.8-2.2 8 0" />
    <circle cx="16" cy="24" r="1.5" fill="currentColor" />
  </svg>
);

export const WorkspaceIcon: React.FC<IconProps> = ({ size = 24, className = 'text-[#222222]', ...props }) => (
  <svg viewBox="0 0 32 32" height={size} width={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className} {...props}>
    <rect x="4" y="6" width="24" height="15" rx="2" />
    <path d="M10 26h12" />
    <path d="M16 21v5" />
  </svg>
);

export const ParkingIcon: React.FC<IconProps> = ({ size = 24, className = 'text-[#222222]', ...props }) => (
  <svg viewBox="0 0 32 32" height={size} width={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className} {...props}>
    <circle cx="16" cy="16" r="13" />
    <path d="M12 23V9h6a4.5 4.5 0 0 1 0 9h-6" />
  </svg>
);

export const PoolIcon: React.FC<IconProps> = ({ size = 24, className = 'text-[#222222]', ...props }) => (
  <svg viewBox="0 0 32 32" height={size} width={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className} {...props}>
    <path d="M3 20c3 2 6 2 9 0s6-2 9 0 6 2 8 0" />
    <path d="M3 26c3 2 6 2 9 0s6-2 9 0 6 2 8 0" />
    <circle cx="21" cy="7" r="3" />
    <path d="M17 14l3-3 5 1" />
  </svg>
);

export const JacuzziIcon: React.FC<IconProps> = ({ size = 24, className = 'text-[#222222]', ...props }) => (
  <svg viewBox="0 0 32 32" height={size} width={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className} {...props}>
    <path d="M4 16h24v6a6 6 0 0 1-6 6H10a6 6 0 0 1-6-6v-6z" />
    <path d="M10 10c0-2 2-3 2-5" />
    <path d="M16 11c0-2 2-3 2-6" />
    <path d="M22 10c0-2 2-3 2-5" />
  </svg>
);

export const PetIcon: React.FC<IconProps> = ({ size = 24, className = 'text-[#222222]', ...props }) => (
  <svg viewBox="0 0 32 32" height={size} width={size} fill="currentColor" aria-hidden="true" className={className} {...props}>
    <circle cx="8" cy="11" r="3" />
    <circle cx="24" cy="11" r="3" />
    <circle cx="12" cy="6" r="3" />
    <circle cx="20" cy="6" r="3" />
    <path d="M16 14c-4.5 0-8 3.5-8 7 0 2.5 2 4.5 4.5 4.5 1.5 0 2.5-.5 3.5-1.5 1 1 2 1.5 3.5 1.5 2.5 0 4.5-2 4.5-4.5 0-3.5-3.5-7-8-7z" />
  </svg>
);

export const CameraIcon: React.FC<IconProps> = ({ size = 24, className = 'text-[#222222]', ...props }) => (
  <svg viewBox="0 0 32 32" height={size} width={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className} {...props}>
    <path d="M6 10h5l2-3h6l2 3h5a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V12a2 2 0 0 1 2-2z" />
    <circle cx="16" cy="18" r="5" />
  </svg>
);

export const AlarmOffIcon: React.FC<IconProps> = ({ size = 24, className = 'text-[#222222]', ...props }) => (
  <svg viewBox="0 0 32 32" height={size} width={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className} {...props}>
    <path d="M16 6a10 10 0 0 1 10 10c0 4.5-3 8-7 9.5M10 9a10 10 0 0 0-4 7c0 4.5 3 8 7 9.5" />
    <path d="M4 4l24 24" />
  </svg>
);

export const TagIcon: React.FC<IconProps> = ({ size = 16, className = 'text-[#222222]', ...props }) => (
  <svg viewBox="0 0 32 32" height={size} width={size} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className} {...props}>
    <path d="M14 4H6a2 2 0 0 0-2 2v8l14 14 10-10L14 4z" />
    <circle cx="9" cy="9" r="2" fill="currentColor" />
  </svg>
);

export const PinIcon: React.FC<IconProps> = ({ size = 16, className = 'text-[#222222]', ...props }) => (
  <svg viewBox="0 0 32 32" height={size} width={size} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className} {...props}>
    <path d="M16 28s-9-10.5-9-16a9 9 0 1 1 18 0c0 5.5-9 16-9 16z" />
    <circle cx="16" cy="12" r="3" fill="currentColor" />
  </svg>
);

export const CheckSquareIcon: React.FC<IconProps> = ({ size = 16, className = 'text-[#222222]', ...props }) => (
  <svg viewBox="0 0 32 32" height={size} width={size} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className} {...props}>
    <polyline points="7 16 13 22 25 10" />
    <rect x="4" y="4" width="24" height="24" rx="4" />
  </svg>
);

export const SparklesIcon: React.FC<IconProps> = ({ size = 16, className = 'text-[#222222]', ...props }) => (
  <svg viewBox="0 0 32 32" height={size} width={size} fill="currentColor" aria-hidden="true" className={className} {...props}>
    <path d="M16 2l2.5 8.5L27 13l-8.5 2.5L16 24l-2.5-8.5L5 13l8.5-2.5L16 2zm8 17l1.2 4.3L29.5 24.5 25.2 25.7 24 30l-1.2-4.3-4.3-1.2 4.3-1.2L24 19z" />
  </svg>
);

export const KeyIcon: React.FC<IconProps> = ({ size = 16, className = 'text-[#222222]', ...props }) => (
  <svg viewBox="0 0 32 32" height={size} width={size} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className} {...props}>
    <circle cx="11" cy="16" r="7" />
    <path d="M18 16h10v4h-3v-4" />
  </svg>
);

export const ChatBubbleIcon: React.FC<IconProps> = ({ size = 16, className = 'text-[#222222]', ...props }) => (
  <svg viewBox="0 0 32 32" height={size} width={size} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className} {...props}>
    <path d="M4 16C4 9.4 9.4 4 16 4s12 5.4 12 12-5.4 12-12 12c-2.3 0-4.4-.6-6.2-1.7L4 28l1.7-5.8C4.6 20.4 4 18.3 4 16z" />
  </svg>
);

