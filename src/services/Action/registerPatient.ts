"use server";

export const registerPatient = async (payload: FormData) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/users/create-patient`,
    {
      method: "POST",
      body: payload,
      cache: "no-store",
    }
  );

  const patientInfo = await res.json();
  return patientInfo;
};
