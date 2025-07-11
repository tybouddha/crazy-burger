import styled from "styled-components";
import { theme } from "../../theme";

export default function Tab({ Icon, label, onClick, className }) {
  return (
    <TabStyled onClick={onClick} className={className}>
      <div className="icon">{Icon && Icon}</div>
      <span>{label}</span>
    </TabStyled>
  );
}
const TabStyled = styled("button")`
  height: 43px;
  padding: 0 22px;

  //display
  display: flex;
  justify-content: center;
  align-items: center;

  //position
  position: relative;
  left: 5%;
  top: 1px;

  cursor: pointer;

  //fonts
  color: ${theme.colors.greySemiDark};
  font-size: ${theme.fonts.size.P0};

  background: ${theme.colors.white};
  box-shadow: ${theme.shadows.subtle};

  //border
  border-width: 1px 1px 2px 1px;
  border-style: solid;
  border-color: ${theme.colors.greyLight};

  //border-radius
  border-top-left-radius: ${theme.borderRadius.round};
  border-top-right-radius: ${theme.borderRadius.round};

  //hover
  span:hover {
    text-decoration: underline;
  }

  &:active {
    background-color: ${theme.colors.background_dark};
  }

  .icon {
    display: flex;
  }
`;
