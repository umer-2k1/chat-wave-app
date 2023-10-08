import { attachToken, custAxios } from "../../config/axiosConfig";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { SignupPayload } from "../../../types/redux/actions/authActions";

export const signup = createAsyncThunk(
  "auth/signup",
  async (payload: SignupPayload) => {
    const { name, email, password } = payload;
    try {
      const res = await custAxios.post("/auth/register", {
        name,
        email,
        password,
      });
      return res.data;
    } catch (error) {
      console.error(error);
    }
  }
);
