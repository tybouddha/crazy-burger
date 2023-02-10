import { AiOutlinePlus } from "react-icons/ai"
import { MdModeEditOutline, MdOutlineLocalDrink } from "react-icons/md"
import { BiSun } from "react-icons/bi"
import { GiBaseballGlove } from "react-icons/gi"

export const getTabsConfig = () => [
  // {
  //   index: "chevronUpDown",
  //   label: "",
  //   Icon: isCollapsed ? <FiChevronUp /> : <FiChevronDown />,
  //   onClick: () => setIsCollapsed(!isCollapsed),
  //   className: isCollapsed ? "is-active" : "",
  // },
  {
    index: "add",
    label: "Ajouter un produit",
    Icon: <AiOutlinePlus />,
  },
  {
    index: "edit",
    label: "Modifier un produit",
    Icon: <MdModeEditOutline />,
  },
  // {
  //   index: "theme",
  //   label: "Changer thème",
  //   Icon: <BiSun />,
  // },
  // {
  //   index: "drink",
  //   label: "Boire un verre",
  //   Icon: <MdOutlineLocalDrink />,
  // },
  // {
  //   index: "baseball",
  //   label: "HomeRun",
  //   Icon: <GiBaseballGlove />,
  // },
]

export const getTabSelected = (tabs, currentTabSelected) =>
  tabs.find((tab) => tab.index === currentTabSelected)
