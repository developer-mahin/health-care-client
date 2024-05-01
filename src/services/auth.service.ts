import { authKey } from "@/constant/authKey";
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
