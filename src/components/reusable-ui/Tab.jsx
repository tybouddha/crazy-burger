import styled from "styled-components";
import { theme } from "../../theme";

export default function Tab({ Icon, label, ...extraProps }) {
  return (
    <TabStyled {...extraProps}>
      {Icon && Icon}
      <span>{label}</span>
    </TabStyled>
  );
}
const TabStyled = styled("button")`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.colors.greySemiDark};
  background: ${theme.colors.white};
  border-top-left-radius: ${theme.borderRadius.round};
  border-top-right-radius: ${theme.borderRadius.round};
  box-shadow: ${theme.shadows.subtle};
  border: 1px solid ${theme.colors.greyLight};

  &:active {
    background-color: ${theme.colors.background_dark};
  }
  span:hover {
    text-decoration: underline;
  }
  span {
    margin-left: 16px;
  }
`;
