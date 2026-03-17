/** Strict TypeScript interfaces for 1625 Auto Lab */

// ============================================
// Booking / Redux State
// ============================================

export type BookingStatus = 'idle' | 'loading' | 'success' | 'error';

export interface BookingState {
  vehicleInfo: string;
  serviceRequired: string;
  locationPreference: string;
  specificRequests: string;
  status: BookingStatus;
  message: string;
  bookingId: string;
}

export interface BookingPayload {
  vehicleInfo: string;
  serviceRequired: string;
  locationPreference: string;
  specificRequests: string;
}

export interface BookingResponse {
  success: boolean;
  message: string;
  bookingId: string;
}

// ============================================
// RootState
// ============================================

export interface RootState {
  booking: BookingState;
}

// ============================================
// Component Props
// ============================================

export interface GalleryItemProps {
  src: string;
  alt: string;
  caption: string;
}

export interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  items: Array<{ icon: React.ReactNode; label: string }>;
}
