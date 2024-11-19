import { createSlice } from '@reduxjs/toolkit';

const feedbackSlice = createSlice({
  name: 'feedback',
  initialState: {
    isFeedbackFormVisbible: false,
  },
  reducers: {
    setFeedbackFormVisibility: (state, action) => {
      state.isFeedbackFormVisbible = action.payload;
    },
  },
});

export const {
  setFeedbackFormVisibility,
} = feedbackSlice.actions;

export default feedbackSlice.reducer;
