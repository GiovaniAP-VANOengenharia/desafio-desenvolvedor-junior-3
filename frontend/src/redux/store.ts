import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slices/userSlice";
import { postReducer } from "./slices/postSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    posts: postReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;