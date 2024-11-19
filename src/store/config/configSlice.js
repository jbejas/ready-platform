import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Utils
import { getGeneralAppConfig } from "@utils/config";

// Thunk action for fetching general app config
export const fetchGeneralAppConfig = createAsyncThunk(
  "config/fetchGeneralAppConfig",
  async (_, { dispatch, getState }) => {
    try {
      const appConfig = await getGeneralAppConfig();
      console.log("App config", appConfig);
      await dispatch(
        setActiveConnectionsLimit(
          appConfig.find(
            (config) => config.contentType === "active-connections-limit",
          ).value,
        ),
      );
      await dispatch(
        setDailySparks(
          appConfig.find((config) => config.contentType === "daily-sparks")
            .value,
        ),
      );
      await dispatch(
        setDailyConnections(
          appConfig.find((config) => config.contentType === "daily-connections")
            .value,
        ),
      );
      await dispatch(
        setChatPromptsCount(
          appConfig.find(
            (config) => config.contentType === "chat-prompts-count",
          ).value,
        ),
      );
      await dispatch(
        setTerms(
          appConfig.find((config) => config.contentType === "terms").value,
        ),
      );
      const distanceFFValue = appConfig.find(
        (config) => config.contentType === "distance-ff",
      ).value;
      await dispatch(setDistanceFF(Number(distanceFFValue)));
      const phoneNumberMaskFFValue = appConfig.find(
        (config) => config.contentType === "phone-number-mask-ff",
      ).value;

      dispatch(setPhoneNumberMaskFF(Boolean(phoneNumberMaskFFValue)));
      const state = getState();
      console.log("State", state);
    } catch (error) {
      console.log(
        "fetchGeneralAppConfig -> Error fetch general app config",
        error,
      );
    }
  },
);

const configSlice = createSlice({
  name: "config",
  initialState: {
    activeConnectionsLimit: 5,
    dailySparks: null,
    dailyConnections: null,
    chatPromptsCount: null,
    terms: null,
    distanceFF: 0,
    phoneNumberMaskFF: false,
  },
  reducers: {
    setActiveConnectionsLimit: (state, action) => {
      state.activeConnectionsLimit = Number(action.payload);
    },
    setDailySparks: (state, action) => {
      state.dailySparks = action.payload;
    },
    setDailyConnections: (state, action) => {
      state.dailyConnections = action.payload;
    },
    setChatPromptsCount: (state, action) => {
      state.chatPromptsCount = action.payload;
    },
    setTerms: (state, action) => {
      state.terms = action.payload;
    },
    setDistanceFF: (state, action) => {
      state.distanceFF = action.payload;
    },
    setPhoneNumberMaskFF: (state, action) => {
      state.phoneNumberMaskFF = action.payload;
    },
  },
  selectors: {
    getActiveConnectionsLimit: (state) => state.activeConnectionsLimit,
    getDailySparks: (state) => state.dailySparks,
    getDailyConnections: (state) => state.dailyConnections,
    getChatPromptsCount: (state) => state.chatPromptsCount,
    getTerms: (state) => state.terms,
    getDistanceFF: (state) => state.distanceFF,
    getPhoneNumberMaskFF: (state) => state.phoneNumber,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGeneralAppConfig.pending, (state, action) => {
        console.log("Loading general app config");
        state.status = "loading";
      })
      .addCase(fetchGeneralAppConfig.fulfilled, (state, action) => {
        console.log("General app config loaded");
        state.status = "suceeded";
      })
      .addCase(fetchGeneralAppConfig.rejected, (state, action) => {
        console.log("General app config loading failed");
        state.status = "failed";
      });
  },
});

export const {
  setActiveConnectionsLimit,
  setDailySparks,
  setDailyConnections,
  setChatPromptsCount,
  setTerms,
  setDistanceFF,
  setPhoneNumberMaskFF,
} = configSlice.actions;

export const {
  getActiveConnectionsLimit,
  getDailySparks,
  getDailyConnections,
  getChatPromptsCount,
  getTerms,
  getDistanceFF,
  getPhoneNumberMaskFF,
} = configSlice.selectors;

export default configSlice.reducer;
