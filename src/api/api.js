/**
 * Mock API service for 1625 Auto Lab
 * Simulates async API calls with a 2-second delay.
 */

/**
 * Submits a booking request.
 * @param {Object} payload - The booking form data.
 * @param {string} payload.vehicleInfo - Vehicle make/model/year.
 * @param {string} payload.serviceRequired - Service type selected.
 * @param {string} payload.locationPreference - Shop or home service.
 * @param {string} payload.specificRequests - Any specific requests from the customer.
 * @returns {Promise<{success: boolean, message: string, bookingId: string}>}
 */
export const submitBooking = (payload) => {
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
