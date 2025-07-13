import AdminPanel from "./AdminPanel";
import AdminTabs from "./AdminTabs";
import { theme } from "../../../../theme";
import styled from "styled-components";
import { useContext } from "react";
import { IsAdminContext } from "../../../../context/IsAdminContext";

export default function Admin() {
  //state
  const { isCollapsed } = useContext(IsAdminContext);

  //comportements
  //affichage
  return (
    <AdminStyled>
      <AdminTabs />
      {!isCollapsed && <AdminPanel />}
    </AdminStyled>
  );
}

const AdminStyled = styled("div")`
  font-size: ${theme.fonts.size.P0};
  color: ${theme.colors.dark};
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 294px;
`;
