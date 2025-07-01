import styled from "styled-components";
import Profil from "./Profil";
import ToggleButton from "../../../reusable-ui/ToggleButton";

export default function NavbarRightSide({ username }) {
  //comportement

  //render
  return (
    <NavbarRightSideStyled className="right-side">
      <ToggleButton
        labelIfUnchecked="Activer le mode admin"
        labelIfChecked="Désactiver le mode admin"
      />

      <Profil username={username} />
    </NavbarRightSideStyled>
  );
}

const NavbarRightSideStyled = styled("div")`
  display: flex;
  align-items: center;
  padding-right: 50px;
`;
