import { HiCursorClick } from "react-icons/hi";
import styled from "styled-components";
import { theme } from "../../../../../../../theme";

export default function HintMessage() {
  return (
    <HintMessageStyled>
      <span className="hint">Cliquer sur un produit pour le modifier</span>
      <HiCursorClick />
    </HintMessageStyled>
  );
}

const HintMessageStyled = styled("div")`
  display: flex;
  align-items: center;

  position: relative;
  top: 50px;

  font-family: "Amatic SC", cursive;
  font-size: ${theme.fonts.size.P3};
  color: ${theme.colors.greyBlue};

  span {
    margin-right: 10px;
  }
`;
