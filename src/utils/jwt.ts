import { jwtDecode } from "jwt-decode";

export const decodedToken = (accessToken: string) => {
  return jwtDecode(accessToken as string);
};
