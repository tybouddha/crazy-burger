import styled from "styled-components"
import { theme } from "../../../../../theme"

export default function AdminPanel() {
  return <AdminPanelStyled className="panel-admin">Admin</AdminPanelStyled>
}

const AdminPanelStyled = styled.div`
  height: 251px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  background: #ffffff;
  border-top: 1px solid #e4e5e9;
  box-shadow: 0px -6px 8px -2px rgba(0, 0, 0, 0.1);
`
