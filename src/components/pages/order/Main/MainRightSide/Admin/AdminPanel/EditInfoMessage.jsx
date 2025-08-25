import styled from "styled-components";
import { theme } from "../../../../../../../theme";

export default function EditInfoMessage() {
  return (
    <EditInfoMessageStyled>
      Cliquer sur un produit du menu pour le modifier{" "}
      <span className="live-update">en temps réel</span>
    </EditInfoMessageStyled>
  );
}

const EditInfoMessageStyled = styled.span`
  color: ${theme.colors.primary};
  font-size: ${theme.fonts.size.SM};
  .live-update {
    text-decoration: underline;
  }
`;
