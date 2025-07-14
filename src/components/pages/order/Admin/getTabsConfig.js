import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";

export const getTabsCongig = (currentTabSelected) => [
  // {
  //   index: "chevronUpDown",
  //   Icon: isCollapsed ? <FiChevronUp /> : <FiChevronDown />,
  //   label: "",
  //   onClick: () => setIsCollapsed(!isCollapsed),
  //   className: isCollapsed ? "is-active" : "",
  // },
  {
    index: "add",
    Icon: <AiOutlinePlus />,
    label: "Ajouter un produit",
    className: currentTabSelected === "add" ? "is-active" : "",
  },
  {
    index: "edit",
    Icon: <MdModeEditOutline />,
    label: "Modifier un produit",
    className: currentTabSelected === "edit" ? "is-active" : "",
  },
];
