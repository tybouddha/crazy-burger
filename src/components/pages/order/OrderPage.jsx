import React from "react";
import { useNavigate } from "react-router-dom";

export default function OrderPage({ username }) {
  //state
  const navigate = useNavigate();

  //comportements
  const handleClick = () => {
    navigate("/", { replace: true });
  };
  //render
  return (
    <div>
      <h1>Bonjour {username}</h1>
      <button onClick={handleClick}>Déconnexion</button>
    </div>
  );
}
