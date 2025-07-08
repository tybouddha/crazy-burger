import styled from "styled-components";
import Navbar from "./Navbar/Navbar";
import Main from "./main/Main";
import { useParams } from "react-router-dom";
import { theme } from "../../../theme";

export default function OrderPage() {
  //state

  const { username } = useParams();

  //comportements

  //render
  return (
    <OrderPageStyled>
      <div className="container">
        <Navbar username={username} />
        <Main />
      </div>
    </OrderPageStyled>
  );
}

const OrderPageStyled = styled.div`
  background: ${theme.colors.primary};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    background: red;
    height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction: column;
    border-radius: ${theme.borderRadius.extraRound};
  }
`;
