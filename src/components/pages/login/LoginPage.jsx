import styled from "styled-components";
import LoginForm from "../../pages/login/LoginForm";
import Logo from "../../reusable-ui/Logo";

export default function LoginPage() {
  //state

  //comportements

  //render
  return (
    <LoginPageStyled>
      <Logo />
      <LoginForm />;
    </LoginPageStyled>
  );
}

const LoginPageStyled = styled("div")`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ::before {
    content: "";
    background: url("../../../assets/images/burgerBackground.jpg")
      rgba(0, 0, 0, 0.7);
    background-size: cover;
    background-position: center;
    //opacity du background
    background-blend-mode: darken;
    //Pour que le fond passe en arrière plan
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;
