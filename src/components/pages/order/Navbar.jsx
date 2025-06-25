import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../../reusable-ui/PrimaryButton";
import Logo from "../../reusable-ui/Logo";
import { theme } from "../../../theme";
import { BsPersonCircle } from "react-icons/bs";

export default function Navbar({ username }) {
  //state
  const navigate = useNavigate();
  //comportement
  const handleClick = () => {
    navigate("/", { replace: true });
  };
  return (
    <NavbarStyled>
      <div className="left-side">
        <Logo />
      </div>
      <div className="right-side">
        <h1>Hey {username}</h1>
        <PrimaryButton onClick={handleClick} label="Déconnexion" />
        <BsPersonCircle className="icon" />
      </div>
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

  .left-side {
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .right-side {
    border: 1px solid blue;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`;
