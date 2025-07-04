import styled from "styled-components";
import LoginForm from "../../pages/login/LoginForm";
import Logo from "../../reusable-ui/Logo";

export default function LoginPage() {
  //state

  //comportements

  //render
  return (
    <LoginPageStyled>
      <div className="content">
        <Logo className={"logo-login-page"} />
        <LoginForm />
      </div>
    </LoginPageStyled>
  );
}

const LoginPageStyled = styled("div")`
  position: relative;
  overflow: hidden;
  min-height: 100dvh;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: url("/images/burgerBackground.jpg") rgba(0, 0, 0, 0.7);
  background-size: cover;
  background-position: center;
  background-blend-mode: darken;

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: transparent;
    padding: 40px;
    border-radius: 20px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    max-width: 100%;
    box-sizing: border-box;
  }
  .logo-login-page {
    transform: scale(2.5);
  }
`;
