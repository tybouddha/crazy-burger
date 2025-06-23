import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IoChevronForward } from "react-icons/io5";
import { BsPersonCircle } from "react-icons/bs";

import TextInput from "../../reusable-ui/TextInput";
import { theme } from "../../../theme";

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
        Icon={<BsPersonCircle className="icon" />}
      />

      <button className="button-with-icon">
        <span>Accéder à mon espace</span>
        <IoChevronForward />
      </button>
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled("form")`
  text-align: center;
  max-width: 500px;
  min-width: 400px;
  margin: 0px auto;
  padding: 2.5rem 2rem;
  border-radius: 5px;
  font-family: "Amatic SC", cursive;

  hr {
    border: 1px solid #f56a2c;
    margin-bottom: 40px;
  }
  h1 {
    color: ${theme.colors.white};
    font-size: ${theme.fonts.P5};
  }
  h2 {
    margin: 20px 10px 10px;
    color: ${theme.colors.white};
    font-size: ${theme.fonts.P4};
  }

  .button-with-icon {
    width: 100%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    white-space: nowrap;
    text-decoration: none;
    line-height: 1;

    padding: 18px 24px;
    border-radius: 5px;
    font-family: "Open Sans";
    font-size: ${theme.fonts.P0};
    font-weight: ${theme.weights.heavy};
    color: ${theme.colors.white};
    background-color: ${theme.colors.primary_burger};
    border: 1px solid ${theme.colors.primary_burger};

    &:hover:not(:disabled) {
      background-color: ${theme.colors.white};
      color: ${theme.colors.primary_burger};
      border: 1px solid ${theme.colors.primary_burger};
      transition: all 200ms ease-out;
    }
    &:active {
      color: ${theme.colors.white};
      background-color: ${theme.colors.primary_burger};
      border: 1px solid ${theme.colors.primary_burger};
    }
    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: ${theme.fonts.P0};
      margin-left: 10px;
    }
  }
`;
