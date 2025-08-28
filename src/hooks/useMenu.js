import { useState } from "react";
import { fakeMenu } from "../fakeData/fakeMenu";
import { deepClone, filterInArray, findIndexInArray } from "../utils/array";

export const useMenu = () => {
  const [menu, setMenu] = useState(fakeMenu.MEDIUM);

  const handleAdd = (newProduct) => {
    const menuCopy = deepClone(menu);

    const menuUpdated = [newProduct, ...menuCopy];

    setMenu(menuUpdated);
  };

  const handleEdit = (productBeingEdited) => {
    console.log("productBeingEdited: ", productBeingEdited);

    const menuCopy = deepClone(menu);

    const indexOfProductToEdit = findIndexInArray(
      productBeingEdited.id,
      menuCopy
    );
    menuCopy[indexOfProductToEdit] = productBeingEdited;

    setMenu(menuCopy);
  };

  const handleDelete = (idOfProductToDelete) => {
    const menuCopy = deepClone(menu);

    const menuUpdated = filterInArray(idOfProductToDelete, menuCopy);

    setMenu(menuUpdated);
  };

  const resetMenu = () => {
    setMenu(fakeMenu.MEDIUM);
  };

  return {
    menu,
    setMenu,
    handleAdd,
    handleEdit,
    handleDelete,
    resetMenu,
  };
};
