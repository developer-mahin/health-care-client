"use server";

import { cookies } from "next/headers";

export const removeCookies = (keys: string[]) => {
  return keys.forEach((key) => cookies().delete(key));
};
