import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CgProfile } from "react-icons/cg";
import { FiArrowRight } from "react-icons/fi";
import { BsExclamationSquareFill } from "react-icons/bs";
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
      <div>
        <CgProfile />
        <input
          value={inputValue}
          type="text"
          placeholder="Entrez votre prénom"
          onChange={handleChange}
          // required
        ></input>
        <button>
          Accéder à mon espace <FiArrowRight />
        </button>
      </div>
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
`;
