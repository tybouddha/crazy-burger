import styled from "styled-components";

export default function Logo() {
  return (
    <LogoStyled>
      <h1>CRAZEE</h1>
      <img src="/images/logoOrange.png" alt="logo" />
      <h1>BURGER</h1>
    </LogoStyled>
  );
}

const LogoStyled = styled("div")`
  border: 1px solid red;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  /* transform: scale(2.5); */
  h1 {
    display: inline;
    text-align: center;
    color: #ffa01b;
    font-size: 72Fpx;
    line-height: 1em;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-family: "Amatic SC", cursive;
  }
  img {
    object-fit: contain;
    object-position: center;
    height: 160px;
    width: 180px;
    margin: 0.5;
  }
`;
