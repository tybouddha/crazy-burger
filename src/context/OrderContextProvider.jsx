import { useState } from "react";
import { OrderContext } from "./OrderContext";
import { fakeMenu } from "../fakeData/fakeMenu";

export function OrderContextProvider({ children }) {
  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentTabSelected, setCurrentTabSelected] = useState("add");
  const [menu, setMenu] = useState(fakeMenu.LARGE);

  const addProduct = (newProduct) => {
    setMenu((prevMenu) => [newProduct, ...prevMenu]);
  };

  const deleteProduct = (id) => {
    setMenu((prevMenu) => prevMenu.filter((product) => product.id !== id));
  };

  const value = {
    isModeAdmin,
    setIsModeAdmin,
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
    menu,
    addProduct,
    deleteProduct,
  };

  return (
    <OrderContext.Provider value={value}>{children}</OrderContext.Provider>
  );
}
