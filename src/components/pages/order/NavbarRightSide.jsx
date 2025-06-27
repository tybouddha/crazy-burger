import { BsPersonCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";

export default function NavbarRightSide({ username }) {
  //comportement

  //render
  return (
    <NavbarRightSideStyled className="right-side">
      {/* <div className="admin-button">Admin Button</div> */}
      <div className="profil">
        <h1>Hey {username}</h1>
        <Link to="/">
          <button>Déconnexion</button>
        </Link>
      </div>
      <div className="picture">
        <BsPersonCircle className="icon" />
      </div>
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
  .profil {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  h1 {
    font-size: ${theme.fonts.P0};
  }
  button {
    font-size: ${theme.fonts.XXS};
  }
  .icon {
    width: 36px;
    height: 36px;
    border: 1px solid maroon;
  }
`;
