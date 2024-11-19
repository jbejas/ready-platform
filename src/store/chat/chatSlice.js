import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    currentChannelId: false,
    messageCount: 0,
    singleChannelUserImage: false,
    singleChannelUserName: false,
    isStreamInitialized: false,
    promptsCount: 0,
  },
  reducers: {
    setCurrentChannelId: (state, action) => {
      state.currentChannelId = action.payload;
    },
    setMessageCount: (state, action) => {
      state.messageCount = action.payload;
    },
    setSingleChannelUserImage: (state, action) => {
      state.singleChannelUserImage = action.payload;
    },
    setSingleChannelUserName: (state, action) => {
      state.singleChannelUserName = action.payload;
    },
    setIsStreamInitialized: (state, action) => {
      state.isStreamInitialized = action.payload;
    },
    setPromptsCount: (state, action) => {
      state.promptsCount = action.payload;
    },
  },
});

export const {
  setCurrentChannelId,
  setMessageCount,
  setSingleChannelUserImage,
  setSingleChannelUserName,
  setIsStreamInitialized,
  setPromptsCount,
} = chatSlice.actions;

export default chatSlice.reducer;
