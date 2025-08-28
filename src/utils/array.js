export const deepClone = (array) => {
  return JSON.parse(JSON.stringify(array));
};

export const findInArray = (id, array) => {
  return array.find((itemInArray) => itemInArray.id === id);
};

export const findIndexInArray = (idWithUnknowIndex, array) => {
  return array.findIndex((itemInArray) => itemInArray.id === idWithUnknowIndex);
};

export const filterInArray = (idOfItemToRemove, array) => {
  return array.filter((itemInArray) => itemInArray.id !== idOfItemToRemove);
};
