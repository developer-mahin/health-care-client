import { jwtDecode } from "jwt-decode";

export const decodedToken = (accessToken: string) => {
  try {
    return jwtDecode(accessToken as string);
  } catch (error: any) {
    console.error(error.message);
  }
};
