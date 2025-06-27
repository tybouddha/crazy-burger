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
  align-items: center;
  justify-content: space-between;

  border: 1px solid red;
  height: 10vh;
  color: ${theme.colors.dark};
  padding: 0 20px;
  .logo {
    width: 240px;
    border: 1px solid green;
  }
`;
