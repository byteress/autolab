/**
 * Mock API service for 1625 Auto Lab.
 * Simulates async API calls with a 2-second delay.
 */

import type { BookingPayload, BookingResponse } from '../types';

/**
 * Submits a booking request to the mock backend.
 * Simulates a 90% success rate for demo purposes.
 */
export const submitBooking = (payload: BookingPayload): Promise<BookingResponse> => {
  console.debug('[api] submitBooking called with payload:', payload);

  return new Promise<BookingResponse>((resolve, reject) => {
    setTimeout(() => {
      const isSuccess = Math.random() > 0.1;
      if (isSuccess) {
        resolve({
          success: true,
          message: 'Build request received! We will contact you within 24 hours.',
          bookingId: `ALB-${Date.now()}`,
        });
      } else {
        reject(new Error('Server error. Please try again later.'));
      }
    }, 2000);
  });
};
