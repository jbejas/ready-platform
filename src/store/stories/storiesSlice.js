import { createSlice } from '@reduxjs/toolkit';

const storiesSlice = createSlice({
  name: 'stories',
  initialState: {
    isStoryVisbible: false,
  },
  reducers: {
    setStoryVisibility: (state, action) => {
      state.isStoryVisibile = action.payload;
    },
  },
});

export const {
  setStoryVisibility,
} = storiesSlice.actions;

export default storiesSlice.reducer;
