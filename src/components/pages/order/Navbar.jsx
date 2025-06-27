import styled from "styled-components";
import Logo from "../../reusable-ui/Logo";
import { theme } from "../../../theme";
import NavbarRightSide from "./NavbarRightSide";

export default function Navbar({ username }) {
  //state

  return (
    <NavbarStyled>
      <div className="logo">
        <Logo />
      </div>
      <NavbarRightSide username={username} />
    </NavbarStyled>
  );
}

const NavbarStyled = styled("nav")`
  display: flex;
  justify-content: space-between;
  background: ${theme.colors.white};
  height: 10vh;
  padding: 0 20px;
  border-top-left-radius: ${theme.borderRadius.extraRound};
  border-top-right-radius: ${theme.borderRadius.extraRound};
`;
