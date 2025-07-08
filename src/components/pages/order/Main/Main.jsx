import styled from "styled-components";
import { theme } from "../../../../theme";
import Menu from "./Menu";
// import AdminMode from "../Admin/AdminMode";

export default function Main() {
  //state
  //comportements
  //affichage
  return (
    <MainStyled>
      {/* <div className="basket">Basket</div> */}
      <div className="menu-and-admin">
        <Menu />
        <div className="admin">Admin</div>
      </div>
    </MainStyled>
  );
}

const MainStyled = styled("div")`
  border: 3px solid green;

  background: ${theme.colors.background_white};
  flex: 1; // or you can also use this : height: calc(95vh - 10vh);

  height: calc(95vh - 10vh);
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;

  display: grid;
  grid-template-columns: 1fr;

  /* .basket {
    background: pink;
    border: 1px solid blue;
  } */

  .menu-and-admin {
    position: relative;
    overflow-y: hidden;
    display: grid;
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
    border: 2px solid blue;

    .admin {
      background: red;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 250px;
      width: 1400px;
    }
  }
`;
