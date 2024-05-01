export const convertToFormData = (payload: any) => {
  const obj = { ...payload };
  const data = JSON.stringify(obj);
  const formData = new FormData();
  formData.append("data", data);

  return formData;
};
