export const setToLocalStorage = (key: string, token: string) => {
  return localStorage.setItem(key, token);
};
