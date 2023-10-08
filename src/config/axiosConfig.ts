import axios, { AxiosInstance } from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const baseURL: string = "http://192.168.100.12:8001";

// custom axios
export const custAxios: AxiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// form data axios
export const formAxios: AxiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "multipart/form-data",
    Accept: "application/json",
  },
});

export const attachToken = async () => {
  try {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      custAxios.defaults.headers.common["Authorization"] = token;
    }
  } catch (error) {
    console.error(error);
  }
};
