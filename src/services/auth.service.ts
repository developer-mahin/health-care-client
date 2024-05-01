import { authKey } from "@/constant/authKey";
import { setToLocalStorage } from "@/utils/setToLocalStorage";

export const storeUserInfo = ({ accessToken }: { accessToken: string }) => {
  return setToLocalStorage(authKey, accessToken);
};
