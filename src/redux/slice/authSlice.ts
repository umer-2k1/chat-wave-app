import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { getToken, getUserData } from "../../services/authHooks";
import { signup } from "../actions/authActions";
const token: any = getToken();
const userData = getUserData();

interface AuthState {
  isAuthenticated: boolean;
  user: object | null | string;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  isAuthenticated: token ? true : false,
  user: token && userData ? { token: token, userData: userData } : null,
  loading: false,
  error: null,
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signup.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(signup.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(signup.rejected, (state, action: PayloadAction<any>) => {
      state.error = action.payload.message || "Internal Server error.";
    });
  },
});

export const {} = authSlice.actions;
export default authSlice.reducer;
