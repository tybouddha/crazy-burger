import styled from "styled-components";
import Profil from "./Profil";

export default function NavbarRightSide({ username }) {
  //comportement

  //render
  return (
    <NavbarRightSideStyled className="right-side">
      {/* <div className="admin-button">Admin Button</div> */}
      <Profil username={username} />
    </NavbarRightSideStyled>
  );
}

const NavbarRightSideStyled = styled("div")`
  display: flex;
  align-items: center;
  padding-right: 50px;
`;
