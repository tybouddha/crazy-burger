import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
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

  // affichage
  return (
    <div action="submit" onSubmit={handleSubmit}>
      <div>
        <h1>Bienvenue chez nous !</h1>
        <br />
        <h2>Connectez-vous</h2>
      </div>
      <div>
        <input
          value={inputValue}
          onChange={handleChange}
          type="text"
          placeholder="Entrez votre prénom"
          required
        />
        <button>Accéder à mon espace</button>
      </div>
    </div>
  )
}
