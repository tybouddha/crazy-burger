import styled from "styled-components";

export default function Main() {
  return <MainStyled>Main</MainStyled>;
}

const MainStyled = styled("div")`
  //pour que le composant prenne la place qui reste
  flex: 1;
  border: 1px solid pink;
`;
