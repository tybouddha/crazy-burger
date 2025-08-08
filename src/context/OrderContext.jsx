import { createContext } from "react";

export const OrderContext = createContext({
  isModeAdmin: false,
  setIsModeAdmin: () => {},

  isCollapsed: false,
  setIsCollapsed: () => {},

  currentTabSelected: false,
  setCurrentTabSelected: () => {},

  menu: [],
  handleAdd: () => {},
  handleEdit: () => {},
  handleDelete: () => {},
  resetMenu: () => {},

  //pour AddForm
  newProduct: {},
  setNewProduct: () => {},

  // pour EditForm
  productSelected: {},
  setProductSelected: () => {},
});
