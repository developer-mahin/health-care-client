import { USER_ROLE } from "@/constant/userRole";

export type TMeta = {
  page: number;
  limit: number;
  total: number;
};

export type TUserRole = keyof typeof USER_ROLE;
