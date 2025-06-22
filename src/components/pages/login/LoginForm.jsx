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
        <br />
      </div>
      <div>
        <div>
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
        </div>

        <div>
          <button>
            Accéder à mon espace <FiArrowRight />
          </button>
        </div>
      </div>
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled("form")``;
