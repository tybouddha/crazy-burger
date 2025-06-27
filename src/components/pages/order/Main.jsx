import styled from "styled-components";
import { theme } from "../../../theme";

export default function Main() {
  return <MainStyled></MainStyled>;
}

const MainStyled = styled("div")`
  height: 85vh;
  width: 95vw;
  //pour que le composant prenne la place qui reste
  flex: 1;
  background: ${theme.colors.background_white};
  border-radius: 0px 0px 15px 15px;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
`;
