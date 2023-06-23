import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  userId: number;
  name: string;
  email: string;
  token: string;
}

const initialState: UserState = {
  userId: 0,
  name: '',
  email: '',
  token: '',
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userData: (state: Object, action: PayloadAction<Object>) => ({
      ...state,
      ...action.payload,
    }),
  },
});

export const { userData } = userSlice.actions;
export const userReducer = userSlice.reducer;