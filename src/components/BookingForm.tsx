import { type FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MapPin, Phone, Truck, CheckCircle, AlertTriangle, Loader2, Navigation } from 'lucide-react';
import {
  setVehicleInfo,
  setServiceRequired,
  setLocationPreference,
  setSpecificRequests,
  resetForm,
  submitBookingThunk,
} from '../store/bookingSlice';
import type { AppDispatch } from '../store/store';
import type { RootState } from '../types';

const SERVICE_OPTIONS = [
  'Headlight Retrofit',
  'Android Headunit Installation',
  'Both (Retrofit + Headunit)',
  'Other / Inquiry',
];

const LOCATION_OPTIONS = [
  'Shop Service (San Fernando, Pampanga)',
  'Home Service (Subject to availability)',
];

const inputClasses =
  'w-full bg-[#050505] border border-gray-700 text-white px-4 py-3 font-body text-sm focus:outline-none focus:border-brand-orange focus:shadow-[0_0_8px_rgba(234,88,12,0.4)] transition-all duration-300';

const labelClasses = 'block font-heading text-xs tracking-widest text-gray-500 mb-2 uppercase';

const BookingForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { vehicleInfo, serviceRequired, locationPreference, specificRequests, status, message, bookingId } =
    useSelector((state: RootState) => state.booking);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    void dispatch(submitBookingThunk());
  };

  return (
    <section id="booking" className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* ─── Contact Info ───────────────────────────── */}
          <div className="lg:col-span-2">
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-8 tracking-wide">
              VISIT THE <span className="text-brand-orange">LAB</span>
            </h2>

            <ul className="space-y-6 text-base mb-8">
              <li className="flex gap-4">
                <MapPin className="text-brand-orange shrink-0 mt-1" size={22} />
                <div>
                  <strong className="text-white font-heading tracking-wide">NKKS Arcade</strong>
                  <br />
                  <span className="text-gray-400 font-body text-sm">
                    Brgy. Alasas, San Fernando Pampanga
                  </span>
                  <br />
                  <span className="text-brand-orange font-body text-sm flex items-center gap-1">
                    <Navigation size={14} /> Waze: 1625 Autolab
                  </span>
                </div>
              </li>
              {['0991 940 7307', '0995 258 1474', '0956 450 0292'].map((number) => (
                <li key={number} className="flex items-center gap-4">
                  <Phone className="text-brand-orange shrink-0" size={18} />
                  <span className="text-gray-400 font-body">{number}</span>
                </li>
              ))}
            </ul>

            <div className="p-5 border border-gray-700 bg-brand-gray">
              <h4 className="font-heading text-brand-orange tracking-wide mb-2 flex items-center gap-2">
                <Truck size={18} /> Home Service
              </h4>
              <p className="text-gray-400 font-body text-sm leading-relaxed">
                Can&apos;t make it to Pampanga? Ask about our &quot;Visiting the South&quot; schedule
                for home installations.
              </p>
            </div>
          </div>

          {/* ─── Booking Form ────────────────────────────── */}
          <div className="lg:col-span-3">
            <div className="p-6 sm:p-10 border border-gray-700 bg-brand-gray">
              <h3 className="font-heading text-2xl font-bold text-white tracking-wide mb-8">
                SYSTEM INTAKE FORM
              </h3>

              {/* Success state */}
              {status === 'success' && (
                <div className="border border-green-800 bg-green-950/50 p-6 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-400 shrink-0 mt-0.5" size={20} />
                    <div>
                      <p className="text-green-300 font-body font-medium">{message}</p>
                      {bookingId && (
                        <p className="text-green-500 font-mono text-sm mt-1">
                          Booking ID: {bookingId}
                        </p>
                      )}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => dispatch(resetForm())}
                    className="mt-4 font-heading text-xs tracking-widest px-5 py-2 border border-green-700 text-green-400 hover:bg-green-700 hover:text-white transition-all duration-300"
                  >
                    SUBMIT ANOTHER REQUEST
                  </button>
                </div>
              )}

              {/* Error state */}
              {status === 'error' && (
                <div className="border border-red-800 bg-red-950/50 p-4 mb-6 flex items-center gap-3">
                  <AlertTriangle className="text-red-400 shrink-0" size={18} />
                  <p className="text-red-300 font-body text-sm">{message}</p>
                </div>
              )}

              {/* Form */}
              {status !== 'success' && (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className={labelClasses}>Vehicle Make / Model / Year</label>
                      <input
                        type="text"
                        className={inputClasses}
                        placeholder="e.g. Toyota Fortuner 2020"
                        value={vehicleInfo}
                        onChange={(e) => dispatch(setVehicleInfo(e.target.value))}
                        required
                      />
                    </div>
                    <div>
                      <label className={labelClasses}>Service Required</label>
                      <select
                        className={inputClasses}
                        value={serviceRequired}
                        onChange={(e) => dispatch(setServiceRequired(e.target.value))}
                      >
                        {SERVICE_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className={labelClasses}>Location Preference</label>
                    <select
                      className={inputClasses}
                      value={locationPreference}
                      onChange={(e) => dispatch(setLocationPreference(e.target.value))}
                    >
                      {LOCATION_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className={labelClasses}>Specific Requests</label>
                    <textarea
                      className={`${inputClasses} resize-none`}
                      rows={4}
                      placeholder="Let us know what Demon Eye color you want, or specific headunit specs..."
                      value={specificRequests}
                      onChange={(e) => dispatch(setSpecificRequests(e.target.value))}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full font-heading font-bold tracking-widest py-4 text-base bg-brand-orange text-white border-2 border-brand-orange hover:bg-transparent hover:text-brand-orange transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="animate-spin" size={18} />
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
