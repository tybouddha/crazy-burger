import { useState } from "react";
import { fakeMenu } from "../fakeData/fakeMenu";
import { deepClone } from "../utils/array";

export const useMenu = () => {
  const [menu, setMenu] = useState(fakeMenu.MEDIUM);

  const handleAdd = (newProduct) => {
    // 1. copie du tableau
    const menuCopy = deepClone(menu);

    // 2. manip de la copie du tableau
    const menuUpdated = [newProduct, ...menuCopy];

    // 3. update du state
    setMenu(menuUpdated);
  };

  const handleEdit = (productBeingEdited) => {
    console.log("productBeingEdited: ", productBeingEdited);

    // 1. copie du tableau
    const menuCopy = deepClone(menu);

    // 2. manip de la copie du tableau
    const indexOfProductToEdit = menu.findIndex(
      (MenuProduct) => MenuProduct.id === productBeingEdited.id
    );
    console.log("indexOfProductToEdit: ", indexOfProductToEdit);

    menuCopy[indexOfProductToEdit] = productBeingEdited;

    // 3. update du state
    setMenu(menuCopy);
  };

  const handleDelete = (idOfProductToDelete) => {
    //1. copy du state
    const menuCopy = deepClone(menu);

    //2. manip de la copie state
    const menuUpdated = menuCopy.filter(
      (product) => product.id !== idOfProductToDelete
    );
    console.log("menuUpdated: ", menuUpdated);

    //3. update du state
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
