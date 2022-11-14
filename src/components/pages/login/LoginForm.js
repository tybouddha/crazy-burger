import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { IoChevronForward } from "react-icons/io5"
import { BsPersonCircle } from "react-icons/bs"
import Input from "./Input"

export default function LoginForm() {
  // state
  const [inputValue, setInputValue] = useState("")
  const navigate = useNavigate()

  // comportements
  const handleSubmit = (event) => {
    console.log("submitted")
    event.preventDefault()
    setInputValue("")
    navigate(`order/${inputValue}`)
  }

  const handleChange = (event) => {
    setInputValue(event.target.value)
  }

  // affichage
  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <div>
        <h1>Bienvenue chez nous !</h1>
        <hr />
        <h2>Connectez-vous</h2>
      </div>
      <div>
        <Input
          value={inputValue}
          onChange={handleChange}
          placeholder={"Entrez votre prénom"}
          required
          Icon={<BsPersonCircle className="icon" />}
        />

        <button className="button-with-icon alex-style-pour-input-et-pour-button">
          <span>Accéder à mon espace</span>
          <IoChevronForward className="icon" />
        </button>
      </div>
    </LoginFormStyled>
  )
}

const LoginFormStyled = styled.form`
  text-align: center;
  max-width: 500px;
  min-width: 400px;
  margin: 0px auto;
  padding: 2.5rem 2rem;
  border-radius: 5px;
  font-family: "Amatic SC", cursive;

  hr {
    border: 1.5px solid #f56a2c;
    margin-bottom: 40px;
  }

  h1 {
    color: white;
    font-size: 48px;
  }

  h2 {
    color: #8e8b8b;
    margin: 20px 10px 10px;
    color: white;
    font-size: 36px;
  }

  .button-with-icon {
    width: 100%;
    border: 1px solid red;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative; //is used in case you want to create interactive icons where an icon replaces the text label.
    white-space: nowrap; //prevents the text label from wrapping to the next line.
    text-decoration: none; //removes the text decoration in case you’re applying the .btn class to a link.
    line-height: 1;

    padding: 18px 24px;
    border-radius: 5px;
    font-size: 15px;
    font-weight: 800;
    color: white;
    background-color: #ff9f1b;
    border: 1px solid #ff9f1b;

    &:hover:not(:disabled) {
      background-color: white;
      color: #ff9f1b;
      border: 1px solid #ff9f1b;
      transition: all 200ms ease-out;
    }

    &:active {
      color: white;
      background-color: #ff9f1b;
      border: 1px solid #ff9f1b;
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 15px;
      margin-left: 10px;
    }
  }
`
