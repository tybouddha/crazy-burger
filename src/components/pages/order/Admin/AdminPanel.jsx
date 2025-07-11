import styled from "styled-components";
import { theme } from "../../../../theme";

export default function AdminPanel() {
  return (
    <AdminPanelStyled>
      <div className="panel">
        <span>AdminPanel</span>
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
  height: 250px;
  /* box-shadow: ${theme.shadows.subtle}; */
  border: 1px solid ${theme.colors.greyLight};
`;
