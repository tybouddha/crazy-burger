import { useState } from "react";

function LoginForm() {
  //state
  const [nom, setNom] = useState("");

  //comportements
  const handleSubmit = (event) => {
    event.preventDefault();
    setNom("");
  };

  const handleChange = (event) => {
    setNom(event.target.value);
    console.log(event.target.value);
  };

  const handleClick = () => {
    if (nom === "") {
      alert("Please fill in this field");
    } else {
      alert(`Bonjour ${nom}`);
    }
  };
  //render
  return (
    <div>
      <h1>Bienvenu Chez nous!</h1>
      <p> Connectez-vous</p>
      <form action="submit" onSubmit={handleSubmit}>
        <input
          value={nom}
          type="text"
          placeholder="Entrez votre prénom..."
          onChange={handleChange}
        ></input>
        <button onClick={handleClick}>Accédez à votre espace</button>
      </form>
    </div>
  );
}

export default LoginForm;
