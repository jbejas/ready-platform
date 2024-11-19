import { createSlice } from "@reduxjs/toolkit";

const keyboardSlice = createSlice({
  name: "keyboard",
  initialState: {
    isKeyboardVisible: false,
  },
  reducers: {
    setKeyboardVisibility: (state, action) => {
      state.isKeyboardVisible = action.payload;
    },
  },
});

export const { setKeyboardVisibility } = keyboardSlice.actions;

export default keyboardSlice.reducer;
