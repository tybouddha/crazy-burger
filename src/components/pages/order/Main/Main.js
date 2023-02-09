import styled from "styled-components"
import { theme } from "../../../../theme"
import Menu from "./Menu"

export default function Main() {
  return (
    <MainStyled className="main">
      {/* <div className="basket">Basket</div> */}
      <div className="menu-and-panel-admin">
        <Menu />
        <div className="panel-admin">Admin</div>
      </div>
    </MainStyled>
  )
}

const MainStyled = styled.div`
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
    border: 1px solid black;
  } */

  .menu-and-panel-admin {
    position: relative;
    display: grid;
    overflow-y: hidden;
    .panel-admin {
      background: red;
      border: 1px solid red;
      height: 251px;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
    }
  }
`
