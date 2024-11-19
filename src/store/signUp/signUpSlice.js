import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  userId: null,
  userPhoneNumber: null,
  userTempPassword: null,
  userFirstFame: null,
  userLastName: null,
  userEmail: null,
  userEmailCommunication: false,
  userBirthdate: null,
  userGender: null,
  userEthnicity: null,
  userReligion: null,
  userHeight: null,
  userPronouns: null,
  userSexualOrientation: null,
  userDatingPreference: null,
  userDistancePreference: null,
  userChildrenStatus: null,
  userEducationLevel: null,
  userSchool: null,
  userLanguages: null,
  userDrinkPreference: null,
  userSmokePreference: null,
  userDrugPreference: null,
  userEatingPreference: null,
  userExercisePreference: null,
  userSleepingPreference: null,
  userHometown: null,
  userPhotos: null,
  userPrompts: null,
  isUserOnboarded: false,
  userCountryCode: null,
};

const signUpSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    resetSignUp: () => initialState,
    setUser: (state, action) => {
      state.user = JSON.stringify(action.payload);
    },
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
    setUserPhoneNumber: (state, action) => {
      state.userPhoneNumber = action.payload;
    },
    setUserTempPassword: (state, action) => {
      state.userTempPassword = action.payload;
    },
    setUserFirstName: (state, action) => {
      state.userFirstFame = action.payload;
    },
    setUserLastName: (state, action) => {
      state.userLastName = action.payload;
    },
    setUserEmail: (state, action) => {
      state.userEmail = action.payload;
    },
    setUserEmailCommunication: (state, action) => {
      state.userEmailCommunication = action.payload;
    },
    setUserBirthdate: (state, action) => {
      state.userBirthdate = action.payload;
    },
    setUserGender: (state, action) => {
      state.useGender = action.payload;
    },
    setUserEthnicity: (state, action) => {
      state.userEthnicity = action.payload;
    },
    setUserReligion: (state, action) => {
      state.userReligion = action.payload;
    },
    setUserHeight: (state, action) => {
      state.userHeight = action.payload;
    },
    setUserPronouns: (state, action) => {
      state.userPronouns = action.payload;
    },
    setUserSexualOrientation: (state, action) => {
      state.userSexualOrientation = action.payload;
    },
    setUserDatingPreference: (state, action) => {
      state.userDatingPreference = action.payload;
    },
    setUserDistancePreference: (state, action) => {
      state.userDistancePreference = action.payload;
    },
    setUserChildren: (state, action) => {
      state.userChildren = action.payload;
    },
    setUserEducationLevel: (state, action) => {
      state.userEducationLevel = action.payload;
    },
    setUserSchool: (state, action) => {
      state.userSchool = action.payload;
    },
    setUserLanguages: (state, action) => {
      state.userLanguages = action.payload;
    },
    setUserDrinkPreference: (state, action) => {
      state.userDrinkPreference = action.payload;
    },
    setUserSmokePreference: (state, action) => {
      state.userSmokePreference = action.payload;
    },
    setUserDrugPreference: (state, action) => {
      state.userDrugPreference = action.payload;
    },
    setUserEatingPreference: (state, action) => {
      state.userEatingPreference = action.payload;
    },
    setUserExercisePreference: (state, action) => {
      state.userExercisePreference = action.payload;
    },
    setUserSleepingPreference: (state, action) => {
      state.userSleepingPreference = action.payload;
    },
    setUserHometown: (state, action) => {
      state.userHometown = action.payload;
    },
    setUserPhotos: (state, action) => {
      state.userPhotos = action.payload;
    },
    setUserPrompts: (state, action) => {
      state.userPrompts = action.payload;
    },
    setIsUserOnboarded: (state, action) => {
      state.isUserOnboarded = action.payload;
    },
    setUserCountryCode: (state, action) => {
      state.userCountryCode = action.payload;
    },
  },
});

export const {
  resetSignUp,
  setUser,
  setUserId,
  setUserFirstName,
  setUserLastName,
  setUserPhoneNumber,
  setUserTempPassword,
  setUserEmail,
  setUserEmailCommunication,
  setUserBirthdate,
  setUserGender,
  setUserEthnicity,
  setUserReligion,
  setUserHeight,
  setUserPronouns,
  setUserSexualOrientation,
  setUserDatingPreference,
  setUserDistancePreference,
  setUserChildren,
  setUserEducationLevel,
  setUserSchool,
  setUserLanguages,
  setUserDrinkPreference,
  setUserSmokePreference,
  setUserDrugPreference,
  setUserEatingPreference,
  setUserExercisePreference,
  setUserSleepingPreference,
  setUserHometown,
  setUserPhotos,
  setUserPrompts,
  setIsUserOnboarded,
  setUserCountryCode,
} = signUpSlice.actions;

export default signUpSlice.reducer;
