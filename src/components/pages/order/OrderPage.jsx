import React from "react";
import { useNavigate } from "react-router-dom";

export default function OrderPage() {
  //state
  const navigate = useNavigate();

  //comportements
  const handleCkick = () => {
    navigate("/", { replace: true });
  };
  //render
  return (
    <div>
      <h1>Bonjour {username}</h1>
      <button onClick={handleCkick}>Déconnexion</button>
    </div>
  );
}
