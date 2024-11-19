import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Utils
import {
  getReflectionsDaysCount,
  getDayImage,
  getCurrentReflectionByDay,
} from "@utils/reflections";
import { getImageURL } from "@utils/images";

// Constants
import { REFLECTION_DAYS } from "@constants/constants";

// Thunk action to fetch user reflections days count
export const fetchUserReflectionsDaysCount = createAsyncThunk(
  "reflections/fetchUserReflectionsDaysCount",
  async (_, { dispatch, getState }) => {
    try {
      // Fetch user reflection days count
      const state = getState();
      const user = JSON.parse(state.auth.user);
      const daysCount = await getReflectionsDaysCount(user.id);
      dispatch(setTotalReflectionDaysCount(daysCount));
      // Get and set user reflection day image
      dispatch(fetchReflectionDayImage({ day: daysCount }));

      return daysCount;
    } catch (error) {
      console.log("fetchUserReflectionsDaysCount Error", error);
    }
  },
);

// Thunk action to fetch reflection day image
export const fetchReflectionDayImage = createAsyncThunk(
  "reflections/fetchReflectionDayImage",
  async ({ day }, { dispatch, getState }) => {
    console.log("fetchReflectionDayImage day", day);
    try {
      // eslint-disable-next-line no-undef
      const t = setTimeout(async () => {
        const state = getState();
        console.log(
          "fetchReflectionDayImage State",
          state.reflections.currentReflectionCategoryName,
        );
        // Set user reflection day image
        const currentReflectionCategoryName =
          state.reflections.currentReflectionCategoryName;
        const dayImage = await getDayImage(day, currentReflectionCategoryName);
        const dayImageURL = await getImageURL(dayImage);
        dispatch(setUserReflectionCardImageUrl(dayImageURL));
      }, 1000);
    } catch (error) {
      console.log("fetchReflectionDayImage Error", error);
    }
  },
);

// Thunk action to fetch reflection day quote
export const fetchReflectionDayQuote = createAsyncThunk(
  "reflections/fetchReflectionDayQuote",
  async (_, { dispatch, getState }) => {
    try {
      const state = getState();
      console.log("State", state);
      const user = JSON.parse(state.auth.user);
      const currentReflection = await getCurrentReflectionByDay(
        user.days.items[0].day,
      );
      dispatch(setCurrentQuote(currentReflection.quote));
      dispatch(
        setCurrentQuoteAuthor(
          currentReflection.author ? currentReflection.author : null,
        ),
      );
    } catch (error) {
      console.log("fetchReflectionDayQuote Error", error);
    }
  },
);

const reflectionsSlice = createSlice({
  name: "reflections",
  initialState: {
    canUserReflect: true,
    totalReflectionDaysCount: 0,
    currentCategoryReflectionDaysCount: 0,
    currentReflectionCategoryName: null,
    dashboardImage: null,
    internalPageHeaderImage: null,
    progressionCardDotImage: null,
    reflectionQuestionBackgroundImage: null,
    reflectionQuestionsGradientValues: null,
    userReflectionCardImageUrl: null,
    currentQuote: null,
    currentQuoteAuthor: null,
  },
  reducers: {
    setCanUserReflect: (state, action) => {
      console.log("Set can user reflect", action.payload);
      state.canUserReflect = action.payload;
    },
    setTotalReflectionDaysCount: (state, action) => {
      state.totalReflectionDaysCount = action.payload;

      // Set current category reflection days count
      const modDaysValue =
        action.payload % REFLECTION_DAYS === 0
          ? REFLECTION_DAYS
          : action.payload % REFLECTION_DAYS;
      state.currentCategoryReflectionDaysCount = modDaysValue;
    },
    setDashboardImage: (state, action) => {
      state.dashboardImage = action.payload;
    },
    setInternalPageHeaderImage: (state, action) => {
      state.internalPageHeaderImage = action.payload;
    },
    setProgressionCardDotImage: (state, action) => {
      state.progressionCardDotImage = action.payload;
    },
    setReflectionQuestionBackgroundImage: (state, action) => {
      state.reflectionQuestionBackgroundImage = action.payload;
    },
    setReflectionQuestionsGradientValues: (state, action) => {
      state.reflectionQuestionsGradientValues = action.payload;
    },
    setCurrentReflectionCategoryName: (state, action) => {
      state.currentReflectionCategoryName = action.payload;
    },
    setUserReflectionCardImageUrl: (state, action) => {
      state.userReflectionCardImageUrl = action.payload;
    },
    setCurrentQuote: (state, action) => {
      state.currentQuote = action.payload;
    },
    setCurrentQuoteAuthor: (state, action) => {
      state.currentQuoteAuthor = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserReflectionsDaysCount.pending, (state, action) => {
        console.log("Processing days");
        state.status = "loading";
      })
      .addCase(fetchUserReflectionsDaysCount.fulfilled, (state, action) => {
        console.log("Days processed");
        state.status = "suceeded";
      })
      .addCase(fetchUserReflectionsDaysCount.rejected, (state, action) => {
        console.log("Error processing days");
        state.status = "failed";
      });
  },
});

export const {
  setCanUserReflect,
  setTotalReflectionDaysCount,
  setDashboardImage,
  setInternalPageHeaderImage,
  setProgressionCardDotImage,
  setReflectionQuestionBackgroundImage,
  setReflectionQuestionsGradientValues,
  setCurrentReflectionCategoryName,
  setUserReflectionCardImageUrl,
  setCurrentQuote,
  setCurrentQuoteAuthor,
} = reflectionsSlice.actions;

export default reflectionsSlice.reducer;
