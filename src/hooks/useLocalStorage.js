const useLocalStorage = (saveName, data) => {
  const saveData = () => {
    localStorage.setItem(saveName, JSON.stringify(data));
  };

  const getData = () => JSON.parse(localStorage.getItem(saveName));

  const removeData = () => {
    localStorage.removeItem(saveName);
  };

  return [saveData, getData, removeData];
};

export default useLocalStorage;
