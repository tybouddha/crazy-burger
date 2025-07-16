import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IoChevronForward } from "react-icons/io5";
import { BsPersonCircle } from "react-icons/bs";
import TextInput from "../../reusable-ui/TextInput";
import { theme } from "../../../theme";
import PrimaryButton from "../../reusable-ui/PrimaryButton";

export default function LoginForm() {
  //state
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  //comportements
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/order/${inputValue}`, { replace: true });
    setInputValue("");
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  //Render
  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <div>
        <h1>Bienvenu Chez nous!</h1>
        <hr />
        <h2> Connectez-vous</h2>
      </div>
      <TextInput
        value={inputValue}
        onChange={handleChange}
        placeholder={"Entrez votre prénom"}
        required
        Icon={<BsPersonCircle className="iconInput" />}
      />
      <PrimaryButton
        label="Accéder à mon espace"
        Icon={<IoChevronForward className="iconButton" />}
      />
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled("form")`
  text-align: center;
  max-width: 500px;
  min-width: 400px;
  margin: 0px auto;
  padding: 2.5rem 2rem;
  border-radius: ${theme.borderRadius.round};
  font-family: "Amatic SC", cursive;

  hr {
    border: 1px solid ${theme.colors.primary};
    margin-bottom: 40px;
  }
  h1 {
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.P5};
  }
  h2 {
    margin: 20px 10px 10px;
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.P4};
  }
  .iconInput {
    font-size: ${theme.fonts.size.P0};
    margin-right: 8px;
    color: ${theme.colors.greySemiDark};
  }
  .iconButton {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${theme.fonts.size.P0};
    margin-left: 10px;
  }
`;
