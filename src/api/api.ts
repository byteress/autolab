/**
 * Mock API service for 1625 Auto Lab
 * Simulates async API calls with a 2-second delay.
 */

export interface BookingPayload {
  vehicleInfo: string;
  serviceRequired: string;
  locationPreference: string;
  specificRequests: string;
}

export interface BookingResult {
  success: boolean;
  message: string;
  bookingId: string;
}

/**
 * Submits a booking request.
 * @param payload - The booking form data.
 * @returns A promise resolving with the booking result.
 */
export const submitBooking = (payload: BookingPayload): Promise<BookingResult> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate a 90% success rate for demo purposes
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
