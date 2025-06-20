import styled from "styled-components";
import LoginForm from "./LoginForm";
import logoOrange from "../../../assets/images/logoOrange.png";
import burgerBackground from "../../../assets/images/burgerBackground.jpg";

export default function LoginPage() {
  //state

  //comportements

  //render
  return (
    <LoginPageStyled>
      <div className="logoContainer">
        <img src={logoOrange} alt="logo" />
      </div>
      <LoginForm />;
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
  img {
    width: 100px;
    height: 50px;
  }
`;
