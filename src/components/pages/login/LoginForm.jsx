import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BsPersonCircle } from "react-icons/bs";
import { IoChevronForward } from "react-icons/io5";
// import { BsExclamationSquareFill } from "react-icons/bs";
import { theme } from "../../../theme";

export default function LoginForm() {
  //state
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  const [hasError, setHasError] = useState(false);

  //comportements
  const handleSubmit = (event) => {
    event.preventDefault();
    setHasError(false);
    navigate(`/order/${inputValue}`, { replace: true });
    setInputValue("");
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
    if (hasError && event.target.value.trim() !== "") {
      setHasError(false);
    }
  };
  //Render
  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <div>
        <h1>Bienvenu Chez nous!</h1>
        <hr />
        <h2> Connectez-vous</h2>
      </div>
      <div className="input-with-icon">
        <BsPersonCircle className="icon" />
        <input
          value={inputValue}
          type="text"
          placeholder="Entrez votre prénom"
          onChange={handleChange}
          required
        ></input>
      </div>
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
  .input-with-icon {
    background-color: ${theme.colors.white};
    border-radius: 5px;
    display: flex;
    align-items: center;
    padding: 18px 24px;
    margin: 18px 0;
    .icon {
      font-size: ${theme.fonts.P0};
      margin-right: 8px;
      color: ${theme.colors.greySemiDark};
    }
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
