export const convertToFormData = (payload: any) => {
  const obj = { ...payload };
  const file = obj["file"];
  const data = JSON.stringify(obj);
  const formData = new FormData();
  formData.append("data", data);
  formData.append("file", file);

  return formData;
};
