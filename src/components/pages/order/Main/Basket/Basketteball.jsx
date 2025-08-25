import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function Basket() {
  return (
    <BasketStyled>
      <div className="head">Head</div>
      <div className="body">Body</div>
      <div className="footer">footer</div>
    </BasketStyled>
  );
}
const BasketStyled = styled("div")`
  background: pink;
  display: flex;
  flex-direction: column;
  .body {
    flex: 1;
    background: ${theme.colors.background_white};
    box-shadow: ${theme.shadows.basket};
  }
`;
