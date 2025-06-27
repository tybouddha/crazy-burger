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
  border: 1px solid blue;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 10vh;
`;
