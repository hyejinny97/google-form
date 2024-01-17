const getSessionStorage = (key: string) => {
  return (
    sessionStorage.getItem(key) &&
    JSON.parse(sessionStorage.getItem(key) as string)
  );
};

const setSessionStorage = (key: string, value: any) => {
  const stringifiedValue = JSON.stringify(value);
  sessionStorage.setItem(key, stringifiedValue);

  return sessionStorage.getItem(key);
};

const deleteSessionStorage = (key: string) => {
  sessionStorage.removeItem(key);
};

export { getSessionStorage, setSessionStorage, deleteSessionStorage };
