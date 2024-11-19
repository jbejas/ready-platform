import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import dayjs from "dayjs";

// Utils
import { getConnections, getUnmatchesById } from "@utils/connections";

// Thunk action to fetch connections
export const fetchConnections = createAsyncThunk(
  "connections/fetchConnections",
  async ({ userId }, { dispatch, getState }) => {
    console.log("User ID from connect screen", userId);
    try {
      const state = getState();
      console.log("State", state);

      const today = dayjs().startOf("day").format("YYYY-MM-DD");

      const connectionsData = await getConnections(userId, dispatch);
      dispatch(updateConnections(connectionsData));
      dispatch(setUpdatedOn(today));
    } catch (error) {
      console.log(
        "fetchConnections slice -> Error fetching connections",
        error,
      );
    }
  },
);

// Thunk action to fetch unacked unmatches
export const fetchUnackedUnmatches = createAsyncThunk(
  "connections/fetchUnackedUnmatches",
  async ({ userId }, { dispatch, getState }) => {
    try {
      const state = getState();
      console.log("fetchUnackedUnmatches userId", userId);
      console.log("fetchUnackedUnmatches State", state);
      const unmatches = await getUnmatchesById(userId);
      dispatch(setUnmatches(unmatches));
    } catch (error) {
      console.log("fetchUnackedUnmatches -> Error unacked matches", error);
    }
  },
);

const connectionsSlice = createSlice({
  name: "connections",
  initialState: {
    updatedOn: null,
    connections: [],
    isConnectionsBadgeVisible: false,
    dailySparks: 0,
    unmatches: [],
    unmatchName: "",
    likeId: 0,
  },
  reducers: {
    setUpdatedOn: (state, action) => {
      state.updatedOn = action.payload;
    },
    setIsConnectionsBadgeVisible: (state, action) => {
      state.isConnectionsBadgeVisible = action.payload;
    },
    updateConnections: (state, action) => {
      state.connections = action.payload;
    },
    setDailySparks: (state, action) => {
      state.dailySparks = action.payload;
    },
    setUnmatches: (state, action) => {
      state.unmatches = action.payload;
    },
    setUnmatchName: (state, action) => {
      state.unmatchName = action.payload;
    },
    setLikeId: (state, action) => {
      state.likeId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchConnections.pending, (state, action) => {
        console.log("Loading connections");
        state.status = "loading";
      })
      .addCase(fetchConnections.fulfilled, (state, action) => {
        console.log("Connections loaded");
        state.status = "suceeded";
      })
      .addCase(fetchConnections.rejected, (state, action) => {
        console.log("Connections loading failed");
        state.status = "failed";
      });
  },
});

export const {
  setUpdatedOn,
  setIsConnectionsBadgeVisible,
  setDailySparks,
  updateConnections,
  setUnmatches,
  setUnmatchName,
  setLikeId,
} = connectionsSlice.actions;

export default connectionsSlice.reducer;
