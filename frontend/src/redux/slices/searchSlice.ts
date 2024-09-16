import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface PostSearch {
  search: string;
};

const initialState: PostSearch = { search: '' };

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    postSearch: (state: PostSearch, action: PayloadAction<PostSearch>) => ({
      ...state,
      search: action.payload,
    }),
  },
});

export const { postSearch } = searchSlice.actions;
export const searchReducer = searchSlice.reducer;