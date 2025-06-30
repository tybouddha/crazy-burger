import styled from "styled-components";
import { theme } from "../../../../theme";
import Menu from "../Main/Menu";

export default function Main() {
  //state
  //comportements
  //affichage
  return (
    <MainStyled>
      {/* <div className="basket"></div> */}
      <Menu />
    </MainStyled>
  );
}

const MainStyled = styled("div")`
  background: ${theme.colors.background_white};
  flex: 1; // or you can also use this : height: calc(95vh - 10vh);

  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;

  display: grid;
  grid-template-columns: 1fr;

  overflow-y: scroll;
`;
