import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme/index.js";
import { CgProfile } from "react-icons/cg";
import { FiArrowRight } from "react-icons/fi";
import { BsExclamationSquareFill } from "react-icons/bs";

export default function LoginForm() {
  //state
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  const [hasError, setHasError] = useState(false);

  //comportements
  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue === "") {
      setHasError(true);
      setTimeout(() => {
        setHasError(false);
      }, 1000);
      return;
    }
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
      <div className="h1Container">
        <h1>Bienvenu Chez nous!</h1>
        <br />
      </div>
      <hr className="separator" />
      <div className="connexionContainer">
        <div className="h2Container">
          <h2> Connectez-vous</h2>
        </div>
        <div className="inputContainer">
          <CgProfile className="iconProfile" />
          <input
            value={inputValue}
            type="text"
            placeholder="Entrez votre prénom"
            onChange={handleChange}
            // required
          ></input>
        </div>
        <div className="errorContainer">
          {hasError && (
            <>
              <BsExclamationSquareFill className="errorLogo" />
              <p> Please fill in this field.</p>
            </>
          )}
        </div>
        <div className="buttonContainer">
          <button className={hasError ? "secondaryButton" : ""}>
            Accédez à mon espace <FiArrowRight className="icon2" />
          </button>
        </div>
      </div>
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled("form")`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  gap: ${theme.spacing.xs};
  .h1Container {
    font-family: "Amatic SC", cursive;
    font-size: ${theme.fonts.XXS};
    font-weight: ${theme.weights.regular};
    color: ${theme.colors.white};
  }
  .separator {
    border: none;
    height: 5px;
    background-color: ${theme.colors.red};
    width: 100%;
    border-radius: ${theme.borderRadius.extraRound};
  }
  .connexionContainer {
    height: 50%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
  }
  .h2Container {
    display: flex;
    justify-items: center;
    align-items: flex-end;
    font-family: "Amatic SC", cursive;
    font-size: ${theme.fonts.XS};
    color: ${theme.colors.white};
  }
  .inputContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 100%;
    color: ${theme.colors.greyLight};
    gap: ${theme.spacing.xs};
    background-color: ${theme.colors.white};
  }
  .iconProfile {
    color: ${theme.colors.incognito};
  }
  input {
    color: ${theme.colors.incognito};
    background-color: ${theme.colors.white};
    border-radius: ${theme.borderRadius.subtle};
    font-size: ${theme.weights.XXS};
  }
  ::placeholder {
    color: ${theme.colors.greyLight};
  }
  .errorLogo {
    color: ${theme.colors.primary};
  }
  .errorContainer {
    margin-top: -5px;
    margin-bottom: 10px;
    text-align: center;
    letter-spacing: 0.5px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${theme.spacing.xs};
    height: 30px;
    background-color: ${theme.colors.white};
  }
  .errorContainer p {
    font-size: ${theme.fonts.XXS};
    color: ${theme.colors.black};
    font-family: "Open Sans", sans-serif;
    font-weight: ${theme.weights.medium};
  }
  .icon2 {
    color: ${theme.colors.primary};
  }
  .buttonContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: ${theme.colors.primary};
  }
  button {
    color: ${theme.colors.white};
    font-size: ${theme.fonts.XS};
    width: 100%;
    background-color: ${theme.colors.primary};
  }
  .secondaryButton {
    color: ${theme.colors.primary};
    background-color: ${theme.colors.white};
    border: 2px solid ${theme.colors.primary};
    font-size: ${theme.fonts.XS};
    width: 100%;
    padding: ${theme.spacing.xs};
    border-radius: ${theme.borderRadius.round};
    transition: all 0.3s ease;
  }
`;
