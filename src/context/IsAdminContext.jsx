import { createContext } from "react";

export const IsAdminContext = createContext({
  isAdmin: false,
  setIsAdmin: () => {},

  isCollapsed: false,
  setIsCollapsed: () => {},

  isAddTabSelected: true,
  setIsAddTabSelected: () => {},

  isEditTabSelected: false,
  setIsEditTabSelected: () => {},
});
