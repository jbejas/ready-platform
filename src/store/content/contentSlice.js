import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Utils
import { getContentCategories } from "@utils/content";

// Thunk action to fetch connections
export const fetchContentCategories = createAsyncThunk(
  "content/fetchContentCategories",
  async ({ dispatch }) => {
    try {
      const contentCategories = await getContentCategories();
      console.log("Content categories", contentCategories);
      // dispatch(setCategories(contentCategories));
    } catch (error) {
      console.log(
        "fetchContentCategories slice -> Error fetching content categories",
        error,
      );
    }
  },
);

const contentSlice = createSlice({
  name: "content",
  initialState: {
    categories: null,
  },
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContentCategories.pending, (state, action) => {
        console.log("Loading content");
        state.status = "loading";
      })
      .addCase(fetchContentCategories.fulfilled, (state, action) => {
        console.log("Content loaded");
        state.status = "suceeded";
      })
      .addCase(fetchContentCategories.rejected, (state, action) => {
        console.log("Content loading failed", action);
        state.status = "failed";
      });
  },
});

export const { setCategories } = contentSlice.actions;

export default contentSlice.reducer;
