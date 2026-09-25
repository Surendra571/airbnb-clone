export interface Photo {
  id: number;
  room: string;
  src: string;
  alt: string;
  isHero?: boolean;
}

export interface RoomCategory {
  room: string;
  tags: string[];
  photoIds: number[];
  thumbnailSrc?: string;
}

export interface Amenity {
  id: string;
  name: string;
  category: 'essentials' | 'features' | 'safety';
  icon: string;
  available: boolean;
}

export interface SleepingSpot {
  roomName: string;
  bedType: string;
  imageSrc: string;
}

export interface Review {
  id: string;
  authorName: string;
  authorAvatarInitial: string;
  authorTenure: string;
  rating: number;
  date: string;
  comment: string;
}

export interface RatingBreakdown {
  overall: number;
  totalReviews: number;
  cleanliness: number;
  accuracy: number;
  checkIn: number;
  communication: number;
  location: number;
  value: number;
}

export interface HostInfo {
  name: string;
  avatarText: string;
  isVerified: boolean;
  yearsHosting: number;
  reviewCount: number;
  rating: number;
  bioSnippet: string;
  responseRate: string;
  responseTime: string;
  coHosts: Array<{
    name: string;
    avatarInitial: string;
  }>;
}

export interface PropertyListing {
  id: string;
  title: string;
  propertyType: string;
  location: {
    city: string;
    region: string;
    country: string;
    neighbourhood: string;
    coordinates: { lat: number; lng: number };
  };
  capacity: {
    guests: number;
    bedrooms: number;
    beds: number;
    bathrooms: number;
  };
  pricing: {
    nightlyRateINR: number;
    stayNights: number;
    totalPriceINR: number;
    discountNotice?: string;
  };
  dates: {
    checkIn: string;
    checkOut: string;
    cancellationDeadline: string;
  };
  ratings: RatingBreakdown;
  photos: Photo[];
  rooms: RoomCategory[];
  sleepingSpots: SleepingSpot[];
  amenities: Amenity[];
  reviews: Review[];
  host: HostInfo;
}

