import { BsPersonCircle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PrimaryButton from "../../reusable-ui/PrimaryButton";
import { theme } from "../../../theme";

export default function NavbarRightSide({ username }) {
  const navigate = useNavigate();
  //comportement
  const handleClick = () => {
    navigate("/", { replace: true });
  };
  //render
  return (
    <NavbarRightSideStyled>
      <div className="hello-container">
        <h1>Hey {username}</h1>
        <PrimaryButton
          onClick={handleClick}
          label="Déconnexion"
          className="button"
        />
      </div>
      <div className="profil">
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
  .hello-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  h1 {
    font-size: ${theme.fonts.P0};
  }
  .button {
    font-size: ${theme.fonts.XXS};
  }
  .icon {
    width: 36px;
    height: 36px;
    border: 1px solid maroon;
  }
`;
