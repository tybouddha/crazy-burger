import { createContext, useState } from "react";
import { fakeMenu2 } from "../fakeData/fakeMenu";

export const OrderContext = createContext({
  isModeAdmin: false,
  setIsModeAdmin: () => {},
  isCollapsed: false,
  setIsCollapsed: () => {},
  currentTabSelected: "add",
  setCurrentTabSelected: () => {},
  menu: [],
  addProduct: () => {},
});

export function OrderContextProvider({ children }) {
  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentTabSelected, setCurrentTabSelected] = useState("add");
  const [menu, setMenu] = useState(fakeMenu2);

  const addProduct = (newProduct) => {
    setMenu((prevMenu) => [...prevMenu, newProduct]);
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
  };

  return (
    <OrderContext.Provider value={value}>{children}</OrderContext.Provider>
  );
}
