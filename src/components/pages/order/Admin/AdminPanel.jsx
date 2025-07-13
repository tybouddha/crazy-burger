import styled from "styled-components";
import { theme } from "../../../../theme";
import { useContext } from "react";
import { IsAdminContext } from "../../../../context/IsAdminContext";

export default function AdminPanel() {
  //state
  const { isEditTabSelected, isAddTabSelected } = useContext(IsAdminContext);

  //comportements
  //affichage
  return (
    <AdminPanelStyled>
      <div className="panel">
        {isAddTabSelected && "Ajouter un produit"}
        {isEditTabSelected && "Modifier un produit"}
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
