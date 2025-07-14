import styled from "styled-components";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

import { theme } from "../../../../theme";
import Tab from "../../../reusable-ui/Tab";
import { IsAdminContext } from "../../../../context/IsAdminContext";
import { useContext } from "react";
import { getTabsCongig } from "./getTabsConfig";

export default function AdminTabs() {
  //state
  const {
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
  } = useContext(IsAdminContext);

  const tabs = getTabsCongig(currentTabSelected);
  //comportements

  const selectTab = (tabSelected) => {
    setIsCollapsed(false);
    setCurrentTabSelected(tabSelected);
  };

  //affichage

  return (
    <AdminTabsStyled isCollapsed={isCollapsed}>
      <Tab
        Icon={isCollapsed ? <FiChevronUp /> : <FiChevronDown />}
        label={""}
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={isCollapsed ? "is-active" : ""}
      />
      {tabs.map((tab) => (
        <Tab
          Icon={tab.Icon}
          label={tab.label}
          onClick={() => selectTab(tab.index)}
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
