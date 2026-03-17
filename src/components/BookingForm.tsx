import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../store/store';
import {
  setVehicleInfo,
  setServiceRequired,
  setLocationPreference,
  setSpecificRequests,
  resetForm,
  submitBookingThunk,
} from '../store/bookingSlice';

const BookingForm: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { vehicleInfo, serviceRequired, locationPreference, specificRequests, status, message, bookingId } =
    useSelector((state: RootState) => state.booking);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(submitBookingThunk());
  };

  return (
    <section id="booking" className="py-5 bg-dark">
      <div className="container py-5">
        <div className="row g-5">
          {/* Contact Info */}
          <div className="col-lg-5">
            <h2 className="display-5 fw-bold mb-4">
              VISIT THE <span className="text-orange">LAB</span>
            </h2>
            <ul className="list-unstyled fs-5 text-light mb-5" style={{ fontFamily: "'Roboto', sans-serif" }}>
              <li className="mb-4 d-flex align-items-start">
                <i className="fa-solid fa-location-dot text-orange mt-1 me-3 fs-4"></i>
                <div>
                  <strong>NKKS Arcade</strong>
                  <br />
                  <span className="text-secondary fs-6">Brgy. Alasas, San Fernando Pampanga</span>
                  <br />
                  <span className="text-orange fs-6">
                    <i className="fa-brands fa-waze me-1"></i> Waze: 1625 Autolab
                  </span>
                </div>
              </li>
              <li className="mb-2">
                <i className="fa-solid fa-phone text-orange me-3"></i>{' '}
                <span className="text-secondary">0991 940 7307</span>
              </li>
              <li className="mb-2">
                <i className="fa-solid fa-phone text-orange me-3"></i>{' '}
                <span className="text-secondary">0995 258 1474</span>
              </li>
              <li className="mb-2">
                <i className="fa-solid fa-phone text-orange me-3"></i>{' '}
                <span className="text-secondary">0956 450 0292</span>
              </li>
            </ul>

            <div className="p-4 border border-secondary" style={{ background: 'var(--brand-gray)' }}>
              <h4 className="text-orange mb-3">
                <i className="fa-solid fa-truck-fast me-2"></i> Home Service
              </h4>
              <p className="m-0 text-secondary fs-6" style={{ fontFamily: "'Roboto', sans-serif" }}>
                Can't make it to Pampanga? Ask about our "Visiting the South" schedule for home installations.
              </p>
            </div>
          </div>

          {/* Booking Form */}
          <div className="col-lg-7">
            <div className="p-4 p-md-5 border border-secondary" style={{ background: 'var(--brand-gray)' }}>
              <h3 className="fw-bold mb-4">SYSTEM INTAKE FORM</h3>

              {status === 'success' && (
                <div className="alert alert-success rounded-0 border-0" role="alert">
                  <i className="fa-solid fa-circle-check me-2"></i>
                  <strong>{message}</strong>
                  {bookingId && (
                    <div className="mt-1 font-monospace small">Booking ID: {bookingId}</div>
                  )}
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-success mt-3 d-block rounded-0"
                    onClick={() => dispatch(resetForm())}
                  >
                    Submit Another Request
                  </button>
                </div>
              )}

              {status === 'error' && (
                <div className="alert alert-danger rounded-0 border-0" role="alert">
                  <i className="fa-solid fa-triangle-exclamation me-2"></i>
                  {message}
                </div>
              )}

              {status !== 'success' && (
                <form onSubmit={handleSubmit}>
                  <div className="row g-3 mb-4">
                    <div className="col-md-6">
                      <label className="form-label text-uppercase fw-bold">
                        Vehicle Make/Model/Year
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="e.g. Toyota Fortuner 2020"
                        value={vehicleInfo}
                        onChange={(e) => dispatch(setVehicleInfo(e.target.value))}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label text-uppercase fw-bold">Service Required</label>
                      <select
                        className="form-select"
                        value={serviceRequired}
                        onChange={(e) => dispatch(setServiceRequired(e.target.value))}
                      >
                        <option>Headlight Retrofit</option>
                        <option>Android Headunit Installation</option>
                        <option>Both (Retrofit + Headunit)</option>
                        <option>Other / Inquiry</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="form-label text-uppercase fw-bold">Location Preference</label>
                    <select
                      className="form-select"
                      value={locationPreference}
                      onChange={(e) => dispatch(setLocationPreference(e.target.value))}
                    >
                      <option>Shop Service (San Fernando, Pampanga)</option>
                      <option>Home Service (Subject to availability)</option>
                    </select>
                  </div>
                  <div className="mb-5">
                    <label className="form-label text-uppercase fw-bold">Specific Requests</label>
                    <textarea
                      className="form-control"
                      rows={4}
                      placeholder="Let us know what Demon Eye color you want, or specific headunit specs..."
                      value={specificRequests}
                      onChange={(e) => dispatch(setSpecificRequests(e.target.value))}
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-orange w-100 py-3 fs-5"
                    disabled={status === 'loading'}
                  >
                    {status === 'loading' ? (
                      <>
                        <span
                          className="spinner-border spinner-border-sm me-2"
                          role="status"
                          aria-hidden="true"
                        ></span>
                        SUBMITTING...
                      </>
                    ) : (
                      'SUBMIT BUILD REQUEST'
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
