import styled from "styled-components";
import LoginForm from "./LoginForm";
import burgerBackground from "../../../assets/images/burgerBackground.jpg";
import { theme } from "../../../theme/index.js";
import Logo from "../../reusable-ui/Logo.jsx";

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
`;
