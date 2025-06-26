import styled from "styled-components";
import Logo from "../../reusable-ui/Logo";
import { theme } from "../../../theme";
import NavbarRightSide from "./NavbarRightSide";

export default function Navbar({ username }) {
  //state

  return (
    <NavbarStyled>
      <Logo />
      <NavbarRightSide username={username} />
    </NavbarStyled>
  );
}

const NavbarStyled = styled("nav")`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border: 1px solid red;
  height: 10vh;
  color: ${theme.colors.dark};

  /* .left-side {
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 240px;
    height: 10vh;
  } */
`;
