import { createSlice, createAsyncThunk, type PayloadAction } from '@reduxjs/toolkit';
import { submitBooking } from '../services/api';
import type { BookingState, RootState } from '../types';

const initialState: BookingState = {
  vehicleInfo: '',
  serviceRequired: 'Headlight Retrofit',
  locationPreference: 'Shop Service (San Fernando, Pampanga)',
  specificRequests: '',
  status: 'idle',
  message: '',
  bookingId: '',
};

export const submitBookingThunk = createAsyncThunk(
  'booking/submit',
  async (_, { getState, rejectWithValue }) => {
    const { vehicleInfo, serviceRequired, locationPreference, specificRequests } = (
      getState() as RootState
    ).booking;
    try {
      const result = await submitBooking({
        vehicleInfo,
        serviceRequired,
        locationPreference,
        specificRequests,
      });
      return result;
    } catch (err) {
      const error = err as Error;
      return rejectWithValue(error.message);
    }
  }
);

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    setVehicleInfo(state, action: PayloadAction<string>) {
      state.vehicleInfo = action.payload;
    },
    setServiceRequired(state, action: PayloadAction<string>) {
      state.serviceRequired = action.payload;
    },
    setLocationPreference(state, action: PayloadAction<string>) {
      state.locationPreference = action.payload;
    },
    setSpecificRequests(state, action: PayloadAction<string>) {
      state.specificRequests = action.payload;
    },
    resetForm(state) {
      state.vehicleInfo = '';
      state.serviceRequired = 'Headlight Retrofit';
      state.locationPreference = 'Shop Service (San Fernando, Pampanga)';
      state.specificRequests = '';
      state.status = 'idle';
      state.message = '';
      state.bookingId = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitBookingThunk.pending, (state) => {
        state.status = 'loading';
        state.message = '';
        state.bookingId = '';
      })
      .addCase(submitBookingThunk.fulfilled, (state, action) => {
        state.status = 'success';
        state.message = action.payload.message;
        state.bookingId = action.payload.bookingId;
      })
      .addCase(submitBookingThunk.rejected, (state, action) => {
        state.status = 'error';
        state.message = (action.payload as string) ?? 'An unknown error occurred.';
      });
  },
});

export const {
  setVehicleInfo,
  setServiceRequired,
  setLocationPreference,
  setSpecificRequests,
  resetForm,
} = bookingSlice.actions;

export default bookingSlice.reducer;
