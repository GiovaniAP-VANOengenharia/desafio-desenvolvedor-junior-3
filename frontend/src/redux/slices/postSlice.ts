import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface PostData {
  id: number;
  title: string;
  content: string;
  published: Date;
  updated: Date;
  userId: number;
  userName: number;
};

const initialState: PostData[] = [];

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postData: (state: PostData[], action: PayloadAction<PostData[]>) => ({
      ...state,
      ...action.payload.postList,
    }),
  },
});

export const { postData } = postSlice.actions;
export const postReducer = postSlice.reducer;