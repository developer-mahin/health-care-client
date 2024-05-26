import { authKey } from "@/constant/authKey";
import { removeUserInfo } from "../auth.service";
import { removeCookies } from "./removeCookies";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const logoutUser = (router: AppRouterInstance) => {
  removeUserInfo();
  removeCookies([authKey, "refreshToken"]);
  router.push("/");
  router.refresh();
};
