import logoOrange from "../../assets/images/logoOrange.png";
import styled from "styled-components";

export default function Logo() {
  return (
    <LogoStyled>
      <p>CRAZEE</p>
      <img src={logoOrange} alt="logo" />
      <p>BURGER</p>
    </LogoStyled>
  );
}

const LogoStyled = styled("div")``;
