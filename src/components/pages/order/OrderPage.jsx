import { useNavigate, useParams } from "react-router-dom";

export default function OrderPage() {
  //state
  const navigate = useNavigate();
  const { username } = useParams();

  //comportements
  const handleClick = () => {
    navigate("/", { replace: true });
  };
  //render
  return (
    <div>
      <h1>Bonjour {username}</h1>
      <br />
      <button onClick={handleClick}>Déconnexion</button>
    </div>
  );
}
