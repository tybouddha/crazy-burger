import styled from "styled-components";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";

import { theme } from "../../../../theme";
import Tab from "../../../reusable-ui/Tab";
import { IsAdminContext } from "../../../../context/IsAdminContext";
import { useContext } from "react";

export default function AdminTabs() {
  //state
  const {
    isCollapsed,
    setIsCollapsed,
    setIsEditTabSelected,
    setIsAddTabSelected,
    isEditTabSelected,
    isAddTabSelected,
  } = useContext(IsAdminContext);
  //comportements
  const selectEditTab = () => {
    setIsCollapsed(false);
    setIsEditTabSelected(true);
    setIsAddTabSelected(false);
  };

  const selectAddTab = () => {
    setIsCollapsed(false);
    setIsAddTabSelected(true);
    setIsEditTabSelected(false);
  };
  //affichage

  return (
    <AdminTabsStyled isCollapsed={isCollapsed}>
      <Tab
        Icon={isCollapsed ? <FiChevronUp /> : <FiChevronDown />}
        label=""
        className={isCollapsed ? "is-active" : ""}
        onClick={() => setIsCollapsed(!isCollapsed)}
      />
      <Tab
        Icon={<AiOutlinePlus />}
        label="Ajouter un produit"
        onClick={selectAddTab}
        className={isAddTabSelected ? "is-active" : ""}
      />
      <Tab
        Icon={<MdModeEditOutline />}
        label="Modifier un produit"
        onClick={selectEditTab}
        className={isEditTabSelected ? "is-active" : ""}
      />
    </AdminTabsStyled>
  );
}

const AdminTabsStyled = styled("div")`
  display: flex;
  padding: 0 20px;

  position: absolute;
  left: 5%;
  bottom: ${({ isCollapsed }) => (isCollapsed ? "0" : "250px")};
  transition: bottom 0.3s ease;

  :hover {
    border-bottom: 2px solid ${theme.colors.white};
  }

  .is-active {
    background-color: ${theme.colors.background_dark};
    color: ${theme.colors.white};
    border-color: ${theme.colors.background_dark};
  }

  button {
    margin-left: 1px;
  }
`;
