import setAccessToken from "./setAccessToken";

export const userLogin = async (payload: any) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/auth/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      // cache: "no-store",
      credentials: "include",
    }
  );

  const loginInfo = await res.json();

  if (loginInfo.data.accessToken) {
    setAccessToken(loginInfo.data.accessToken, {
      redirect: "/dashboard",
    });
  }

  return loginInfo;
};
