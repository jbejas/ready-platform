// src/store/store.js
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import signUpReducer from "@store/signUp/signUpSlice";
import authReducer from "@store/auth/authSlice";
import storiesReducer from "@store/stories/storiesSlice";
import feedbackReducer from "@store/feedback/feedbackSlice";
import keyboardReducer from "@store/keyboard/keyboardSlice";
import connectionsReducer from "@store/connections/connectionsSlice";
import chatReducer from "@store/chat/chatSlice";
import toastReducer from "@store/toast/toastSlice";
import reflectionsReducer from "@store/reflections/reflectionsSlice";
import configReducer from "@store/config/configSlice";
import contentReducer from "@store/content/contentSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    signup: signUpReducer,
    stories: storiesReducer,
    feedback: feedbackReducer,
    keyboard: keyboardReducer,
    connections: connectionsReducer,
    chat: chatReducer,
    toast: toastReducer,
    reflections: reflectionsReducer,
    config: configReducer,
    content: contentReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
