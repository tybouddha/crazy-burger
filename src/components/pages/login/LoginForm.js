import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import { theme } from "../../../theme"

export default function LoginForm() {
  // state
  const [inputValue, setInputValue] = useState("")
  const navigate = useNavigate()

  // comportements
  const handleSubmit = (event) => {
    event.preventDefault()
    setInputValue("")
    navigate(`order/${inputValue}`)
  }

  const handleChange = (event) => {
    setInputValue(event.target.value)
  }

  const fruit = {
    nom: "abricot",
    origin: "France",
  }

  const titreH2Style = { backgroundColor: "green", color: "white", fontSize: 20 }

  // affichage
  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <div className="container-text">
        <h1 className="alex">Bienvenue chez nous !</h1>
        <br />
        <h2 className="bonbon">Connectez-vous</h2>
      </div>
      <div className="cta-container">
        <input
          value={inputValue}
          onChange={handleChange}
          type="text"
          placeholder="Entre votre prénom..."
          required
        />
        <button>Accédez à votre espace</button>
      </div>
    </LoginFormStyled>
  )
}

const LoginFormStyled = styled.form`
  border: 1px solid red;

  .container-text {
    background: grey;
    border: 1px solid ${theme.colors.tiertiary};

    h1 {
      border: 1px solid red;
      color: ${theme.colors.primary};
    }

    h2 {
      color: ${theme.colors.tiertiary};
      border: 1px solid blue;
    }
  }

  .cta-container {
    background: ${theme.colors.green};
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    input {
      border: 1px solid yellow;
    }

    button {
      border: 1px solid purple;
    }
  }
`

/** 4 méthodes pour ajouter du style à un composant
 * 1. inline style
 * 2. object style
 * 3. modules CSS (avec className)
 * 4. global style (index.css)
 */

/** Styled-Components
 * ✅ éviter le style collision (CSS, Sass)
 * ✅ conserver nested styling (Sass)
 */
