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

  const selectTab = (tabSelected) => {
    setIsCollapsed(false);
    if (tabSelected === "add") {
      setIsAddTabSelected(true);
      setIsEditTabSelected(false);
    } else if (tabSelected === "edit") {
      setIsEditTabSelected(true);
      setIsAddTabSelected(false);
    }
  };

  const TabCongig = [
    {
      Icon: isCollapsed ? <FiChevronUp /> : <FiChevronDown />,
      label: "",
      onClick: () => setIsCollapsed(!isCollapsed),
      className: isCollapsed ? "is-active" : "",
    },
    {
      Icon: <AiOutlinePlus />,
      label: "Ajouter un produit",
      onClick: () => selectTab("add"),
      className: isAddTabSelected ? "is-active" : "",
    },
    {
      Icon: <MdModeEditOutline />,
      label: "Modifier un produit",
      onClick: () => selectTab("edit"),
      className: isEditTabSelected ? "is-active" : "",
    },
  ];
  //affichage

  return (
    <AdminTabsStyled isCollapsed={isCollapsed}>
      {TabCongig.map((tab) => (
        <Tab
          Icon={tab.Icon}
          label={tab.label}
          onClick={tab.onClick}
          className={tab.className}
        />
      ))}
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
