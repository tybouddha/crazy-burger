import styled from "styled-components";
import { theme } from "../../theme";
export default function TextInput({ value, onChange, Icon, ...extraProps }) {
  //state
  //comportements

  //Render
  return (
    <InputStyled>
      {/* Au cas ou si pas d'icone pour eviter le undefined */}
      {Icon && Icon}
      <input value={value} type="text" onChange={onChange} {...extraProps} />
    </InputStyled>
  );
}

const InputStyled = styled("div")`
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.round};
  display: flex;
  align-items: center;
  padding: 18px 24px;
  margin: 18px 0;
  input {
    border: none;
    font-size: ${theme.fonts.P0};
    color: ${theme.colors.dark};
    background: ${theme.colors.white};
    width: 100%;
  }
  &::placeholder {
    background: ${theme.colors.white};
    color: ${theme.colors.greyLight};
  }
`;
