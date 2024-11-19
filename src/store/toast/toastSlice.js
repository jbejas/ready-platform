import { createSlice } from "@reduxjs/toolkit";

const toastSlice = createSlice({
  name: "toast",
  initialState: {
    isToastVisible: false,
    toastStyle: "info",
    toastText: "",
    duration: 3000,
  },
  reducers: {
    setIsToastVisible: (state, action) => {
      state.toastStyle = action.payload.toastStyle;
      state.isToastVisible = action.payload.isVisible;
      state.toastText = action.payload.text;
    },
  },
});

export const { setIsToastVisible } = toastSlice.actions;

export default toastSlice.reducer;
