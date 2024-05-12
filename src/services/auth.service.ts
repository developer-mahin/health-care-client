import { authKey } from "@/constant/authKey";
import { instance as axiosInstance } from "@/helper/axios/axiosInstance";
import { decodedToken } from "@/utils/jwt";
import {
  getFromLocalStorage,
  removeFromLocalStorage,
  setToLocalStorage,
} from "@/utils/local-storage";

export const storeUserInfo = ({ accessToken }: { accessToken: string }) => {
  return setToLocalStorage(authKey, accessToken);
};

export const getUserInfo = () => {
  const accessToken = getFromLocalStorage(authKey);
  let decodedData: any;
  if (accessToken) {
    decodedData = decodedToken(accessToken);
  }
  return {
    ...decodedData,
    role: decodedData?.role.toLowerCase(),
  };
};

export const isLoggedIn = () => {
  const authToken = getFromLocalStorage(authKey);
  if (authToken) {
    return !!authToken;
  }
};

export const removeUserInfo = () => {
  return removeFromLocalStorage(authKey);
};

export const getNewAccessToken = async () => {
  return await axiosInstance({
    url: "http://localhost:5000/api/v1/auth/refresh-token",
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    withCredentials: true,
  });
};
