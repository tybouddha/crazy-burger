import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  //state
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  //comportements
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Bonjour ${inputValue}`);
    navigate("/order", { replace: true });

    setInputValue("");
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
    console.log(event.target.value);
  };
  //Render
  return (
    <form action="submit" onSubmit={handleSubmit}>
      <h1>Bienvenu Chez nous!</h1>
      <br />
      <h2> Connectez-vous</h2>
      <input
        value={inputValue}
        type="text"
        placeholder="Entrez votre prénom..."
        onChange={handleChange}
        required
      ></input>
      <button>Accédez à votre espace</button>
    </form>
  );
}
