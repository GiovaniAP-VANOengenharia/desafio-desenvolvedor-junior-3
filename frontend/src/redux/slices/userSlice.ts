import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  id: number;
  name: string;
  email: string;
  token: string;
}

const initialState: UserState = {
  id: 0,
  name: '',
  email: '',
  token: '',
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userData: (state: UserState, action: PayloadAction<UserState>) => ({
      ...state,
      ...action.payload,
    }),
  },
});

export const { userData } = userSlice.actions;
export const userReducer = userSlice.reducer;