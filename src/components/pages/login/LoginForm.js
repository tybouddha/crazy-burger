import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import "./LoginForm.css"

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
    <form action="submit" onSubmit={handleSubmit}>
      <h1 style={{ color: "red", backgroundColor: "green" }} className="alex">
        Bienvenue chez nous !
      </h1>
      <br />
      <h2 className="bonbon">Connectez-vous</h2>
      <input
        value={inputValue}
        onChange={handleChange}
        type="text"
        placeholder="Entre votre prénom..."
        required
      />
      <button>Accédez à votre espace</button>
    </form>
  )
}

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
