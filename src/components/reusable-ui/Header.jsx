import { theme } from "../../theme";
import styled from "styled-components";

export default function Header({ children }) {
  return <HeaderStyled>{children}</HeaderStyled>;
}

const HeaderStyled = styled("div")`
  height: 70px;
  background: ${theme.colors.background_dark};
  padding: 0px 16px;
`;
