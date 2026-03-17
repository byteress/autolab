import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { submitBooking } from '../api/api';

const initialState = {
  vehicleInfo: '',
  serviceRequired: 'Headlight Retrofit',
  locationPreference: 'Shop Service (San Fernando, Pampanga)',
  specificRequests: '',
  status: 'idle', // 'idle' | 'loading' | 'success' | 'error'
  message: '',
  bookingId: '',
};

export const submitBookingThunk = createAsyncThunk(
  'booking/submit',
  async (_, { getState, rejectWithValue }) => {
    const { vehicleInfo, serviceRequired, locationPreference, specificRequests } =
      getState().booking;
    try {
      const result = await submitBooking({
        vehicleInfo,
        serviceRequired,
        locationPreference,
        specificRequests,
      });
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    setVehicleInfo(state, action) {
      state.vehicleInfo = action.payload;
    },
    setServiceRequired(state, action) {
      state.serviceRequired = action.payload;
    },
    setLocationPreference(state, action) {
      state.locationPreference = action.payload;
    },
    setSpecificRequests(state, action) {
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
        state.message = action.payload;
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
