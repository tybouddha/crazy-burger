import styled from "styled-components"
import { theme } from "../../theme"

export default function Tab({ Icon, onClick, className }) {
  return (
    <TabStyled className={className} onClick={onClick}>
      <div className="icon">{Icon}</div>
    </TabStyled>
  )
}

const TabStyled = styled.button`
  border: 1px solid blue;
  padding: 0 22px;
  height: 43px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  font-size: ${theme.fonts.size.P0};
  color: ${theme.colors.greySemiDark};

  position: relative;
  left: 5%;

  background: #ffffff;
  border-width: 1px 1px 2px 1px;
  border-style: solid;
  border-color: #e4e5e9;
  box-shadow: 0px -6px 8px -2px rgba(0, 0, 0, 0.1);
  border-radius: 5px 5px 0px 0px;

  .icon {
    display: flex;
  }
`
