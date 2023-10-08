import { attachToken, custAxios } from "../../config/axiosConfig";
import { createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  SignupPayload,
  LoginPayload,
} from "../../../types/redux/actions/authActions";

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

export const login = createAsyncThunk(
  "auth/login",
  async (payload: LoginPayload) => {
    const { email, password } = payload;
    try {
      const res = await custAxios.post("/auth/login", {
        email,
        password,
      });
      if (res) {
        async () => {
          AsyncStorage.setItem("token", res.data.data.jwtToken);
          AsyncStorage.setItem("user", JSON.stringify(res.data.data.user));
        };
      }
      return res.data;
    } catch (error) {
      console.error(error);
    }
  }
);
