<<<<<<< HEAD
import styled from "styled-components"
import NavbarRightSide from "./NavbarRightSide"
import Logo from "../../../reusable-ui/Logo"
import { theme } from "../../../../theme"
import { refreshPage } from "../../../../utils/window"

export default function Navbar({ username }) {
  return (
    <NavbarStyled>
      <Logo className="logo-order-page" onClick={() => refreshPage()} />
      <NavbarRightSide username={username} />
    </NavbarStyled>
  )
}

const NavbarStyled = styled.nav`
  background: ${theme.colors.white};
  height: 10vh;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;

  border-top-left-radius: ${theme.borderRadius.extraRound};
  border-top-right-radius: ${theme.borderRadius.extraRound};
  border-bottom: 1px solid ${theme.colors.greyLight};
  /* align-items: center; */

  .logo-order-page {
    cursor: pointer;
  }
`
=======
import styled from "styled-components";
import Logo from "../../../reusable-ui/Logo";
import { theme } from "../../../../theme";
import NavbarRightSide from "./NavbarRightSide";
import { reloadPage } from "../../../../utils/window";

export default function Navbar() {
  //state

  return (
    <NavbarStyled>
      <div className="logo">
        <Logo className={"logo-order-page"} onClick={reloadPage} />
      </div>
      <NavbarRightSide />
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
  .logo-order-page {
    cursor: pointer;
  }
`;
>>>>>>> e4d5ff0548385cf9830978045bc55b2a50252baf
