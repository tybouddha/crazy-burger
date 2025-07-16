import { createContext } from "react";

export const OrderContext = createContext({
  isModeAdmin: false,
  setIsModeAdmin: () => {},
  isCollapsed: false,
  setIsCollapsed: () => {},
  currentTabSelected: false,
  setCurrentTabSelected: () => {},
});
