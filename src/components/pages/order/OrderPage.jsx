import styled from "styled-components";
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
    <OrderPageStyled>
      <div className="container">
        <div className="navbar">
          <div className="left-side"></div>
          <div className="right-side">
            <h1>Bonjour {username}</h1>
            <br />
            <button onClick={handleClick}>Déconnexion</button>
          </div>
        </div>
        <div className="main"></div>
      </div>
    </OrderPageStyled>
  );
}

const OrderPageStyled = styled.div`
  background: orange;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;

  .container {
    background: #f5f5f7;
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
    border-radius: 0px 0px 15px 15px;
    height: 95vh;
    width: 95vw;
  }
  .navbar {
    border: 1px solid red;
    height: 10vh;
  }
  .main {
    //pour que le composant prenne la place qui reste
    flex: 1;
  }
`;
