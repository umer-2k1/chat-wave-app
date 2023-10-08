import { useAppSelector } from "../redux/hooks";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const useAuth = () => {
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  if (isAuthenticated) {
    return true;
  } else {
    return false;
  }
};

export const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      return token;
    } else {
      return false;
    }
  } catch (error) {
    console.error(error);
  }
};

export const getUserData = async () => {
  try {
    const userDataString: any = await AsyncStorage.getItem("user");
    const userData = JSON.parse(userDataString);
    if (userData) {
      return userData;
    } else {
      return false;
    }
  } catch (error) {
    console.error(error);
  }
};
