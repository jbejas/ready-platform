import { createSlice } from "@reduxjs/toolkit";
import { signOut } from "aws-amplify/auth";

const initialState = {
  user: null,
  userId: null,
  userSession: null,
  isLoading: false,
  error: null,
  userPhoneNumber: null,
  userCountryCode: null,
  setUserTempPassword: null,
  userFirstName: null,
  userTempPassword: null,
  isYouScreenLoaded: false,
  userType: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetAuth: () => initialState,
    handleSignOut: (state) => {
      signOut();
      state.user = null;
    },
    setUser: (state, action) => {
      state.user = JSON.stringify(action.payload);
    },
    setUserSession: (state, action) => {
      state.userSession = action.payload;
    },
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
    setUserTempPassword: (state, action) => {
      state.userTempPassword = action.payload;
    },
    setUserPhoneNumber: (state, action) => {
      state.userPhoneNumber = action.payload;
    },
    setUserCountryCode: (state, action) => {
      state.userCountryCode = action.payload;
    },
    setUserFirstName: (state, action) => {
      state.userFirstName = action.payload;
    },
    setIsYouScreenLoaded: (state, action) => {
      state.isYouScreenLoaded = action.payload;
    },
    setUserType: (state, action) => {
      state.userType = action.payload;
    },
  },
});

export const {
  resetAuth,
  handleSignOut,
  setUser,
  setUserSession,
  setUserId,
  setUserPhoneNumber,
  setUserTempPassword,
  setUserCountryCode,
  setUserFirstName,
  setIsYouScreenLoaded,
  setUserType,
} = authSlice.actions;

export default authSlice.reducer;
