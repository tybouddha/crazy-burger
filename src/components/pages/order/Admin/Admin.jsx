import AdminPanel from "./AdminPanel";
import AdminTabs from "./AdminTabs";
import { theme } from "../../../../theme";
import styled from "styled-components";
import { useState } from "react";

export default function Admin() {
  //state
  const [isCollapsed, setIsCollapsed] = useState(false);

  //comportements
  //affichage
  return (
    <AdminStyled>
      <AdminTabs isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
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
