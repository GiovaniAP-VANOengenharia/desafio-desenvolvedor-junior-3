import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slices/userSlice";
import { postReducer } from "./slices/postSlice";
import { searchReducer } from "./slices/searchSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    posts: postReducer,
    search: searchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;