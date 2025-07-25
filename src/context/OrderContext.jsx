import { createContext } from "react";

export const OrderContext = createContext({
  isModeAdmin: false,
  setIsModeAdmin: () => {},
  isCollapsed: false,
  setIsCollapsed: () => {},
  currentTabSelected: "add",
  setCurrentTabSelected: () => {},
  menu: [],
  addProduct: () => {},
  deleteProduct: () => {},
});
