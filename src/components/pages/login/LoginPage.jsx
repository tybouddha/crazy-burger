import styled from "styled-components";
import LoginForm from "./LoginForm";
import logoOrange from "../../../assets/images/logoOrange.png";
import burgerBackground from "../../../assets/images/burgerBackground.jpg";
import { theme } from "../../../theme/index.js";

export default function LoginPage() {
  //state

  //comportements

  //render
  return (
    <LoginPageStyled>
      <div className="contentContainer">
        <div className="logoContainer">
          <p>CRAZEE</p>
          <img src={logoOrange} alt="logo" />
          <p>BURGER</p>
        </div>
        <div className="loginFormContainer">
          <LoginForm />;
        </div>
      </div>
    </LoginPageStyled>
  );
}

const LoginPageStyled = styled("div")`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ::before {
    content: "";
    position: absolute;
    background: url(${burgerBackground}) rgba(0, 0, 0, 0.5);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-blend-mode: darken;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
  .contentContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
  }
  .logoContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 25%;
    gap: ${theme.spacing.md};
  }
  img {
    width: 150px;
    height: 100px;
  }
  p {
    color: ${theme.colors.primary};
    font-size: ${theme.fonts.P6};
    font-family: "Amatic SC", cursive;
    font-weight: ${theme.weights.regular};
  }
  .loginFormContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 75%;
  }
`;
