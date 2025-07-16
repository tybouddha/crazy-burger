import styled from "styled-components";
import { theme } from "../../../../theme";
import { useContext } from "react";
import { IsAdminContext } from "../../../../context/IsAdminContext";
import { getTabsConfig, getTabSelected } from "./getTabsConfig.jsx";

export default function AdminPanel() {
  //state
  const { currentTabSelected } = useContext(IsAdminContext);
  const tabs = getTabsConfig(currentTabSelected);
  const tabSelected = getTabSelected(tabs, currentTabSelected);
  //comportements
  //affichage
  return (
    <AdminPanelStyled>
      <div className="panel">
        {/* Ajout d'une verif pour tabSelected est undefined */}
        {tabSelected &&
          currentTabSelected === tabSelected.index &&
          tabSelected.label}
      </div>
    </AdminPanelStyled>
  );
}

const AdminPanelStyled = styled("div")`
  background: ${theme.colors.white};
  font-size: ${theme.fonts.size.P0};
  color: ${theme.colors.dark};
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 251px;
  /* box-shadow: ${theme.shadows.subtle}; */
  border: 1px solid ${theme.colors.greyLight};
`;
