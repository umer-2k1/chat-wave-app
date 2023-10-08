import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { getToken, getUserData } from "../../services/authHooks";
import { signup, login } from "../actions/authActions";
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
    // signup
    builder.addCase(signup.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(signup.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(signup.rejected, (state, action: PayloadAction<any>) => {
      state.error = action.payload.message || "Signup failed.";
    });
    // login
    builder.addCase(login.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(login.fulfilled, (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.data;
    });
    builder.addCase(login.rejected, (state, action: PayloadAction<any>) => {
      state.error = action.payload.message || "Login failed.";
    });
  },
});

export default authSlice.reducer;
